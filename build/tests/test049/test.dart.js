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
a[c]=function(){a[c]=function(){H.pB(b)}
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
if(a[b]!==s)H.pC(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kS"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kS"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.kS(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={ks:function ks(){},
ku:function(a){return new H.cJ("Field '"+a+"' has been assigned during initialization.")},
k5:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
iP:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
nB:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
pe:function(a,b,c){return a},
ne:function(a,b,c,d){if(t.gw.b(a))return new H.cA(a,b,c.L("@<0>").ba(d).L("cA<1,2>"))
return new H.aN(a,b,c.L("@<0>").ba(d).L("aN<1,2>"))},
l9:function(){return new P.eX("No element")},
ny:function(a,b){H.eS(a,0,J.b0(a)-1,b)},
eS:function(a,b,c,d){if(c-b<=32)H.nx(a,b,c,d)
else H.nw(a,b,c,d)},
nx:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.bI(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.ai()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
nw:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.a2(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a2(a4+a5,2),f=g-j,e=g+j,d=J.bI(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.ai()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ai()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.ai()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ai()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.ai()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.ai()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.ai()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ai()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ai()
if(a2>0){s=a1
a1=a0
a0=s}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.J(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
H.eS(a3,a4,r-2,a6)
H.eS(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.J(a6.$2(d.h(a3,r),b),0);)++r
for(;J.J(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}H.eS(a3,r,q,a6)}else H.eS(a3,r,q,a6)},
cJ:function cJ(a){this.a=a},
R:function R(a){this.a=a},
m:function m(){},
bW:function bW(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aN:function aN(a,b,c){this.a=a
this.b=b
this.$ti=c},
cA:function cA(a,b,c){this.a=a
this.b=b
this.$ti=c},
es:function es(a,b){this.a=null
this.b=a
this.c=b},
dp:function dp(a,b,c){this.a=a
this.b=b
this.$ti=c},
fq:function fq(a,b){this.a=a
this.b=b},
cB:function cB(){},
fk:function fk(){},
c9:function c9(){},
n_:function(){throw H.d(P.B("Cannot modify unmodifiable Map"))},
mn:function(a){var s,r=H.mm(a)
if(r!=null)return r
s="minified:"+a
return s},
mf:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
v:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dZ(a)
return s},
d0:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
ll:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.c(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.d(P.a6(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.F(q,o)|32)>r)return n}return parseInt(a,b)},
d1:function(a){return H.nh(a)},
nh:function(a){var s,r,q,p
if(a instanceof P.P)return H.ap(H.aZ(a),null)
if(J.dU(a)===C.Q||t.ak.b(a)){s=C.v(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.ap(H.aZ(a),null)},
ni:function(){if(!!self.location)return self.location.href
return null},
lk:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
nq:function(a){var s,r,q,p=H.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){q=a[r]
if(!H.jW(q))throw H.d(H.dT(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aU(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.d(H.dT(q))}return H.lk(p)},
lm:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.jW(q))throw H.d(H.dT(q))
if(q<0)throw H.d(H.dT(q))
if(q>65535)return H.nq(a)}return H.lk(a)},
nr:function(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aS:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.aU(s,10)|55296)>>>0,s&1023|56320)}}throw H.d(P.a6(a,0,1114111,null,null))},
c0:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
np:function(a){var s=H.c0(a).getFullYear()+0
return s},
nn:function(a){var s=H.c0(a).getMonth()+1
return s},
nj:function(a){var s=H.c0(a).getDate()+0
return s},
nk:function(a){var s=H.c0(a).getHours()+0
return s},
nm:function(a){var s=H.c0(a).getMinutes()+0
return s},
no:function(a){var s=H.c0(a).getSeconds()+0
return s},
nl:function(a){var s=H.c0(a).getMilliseconds()+0
return s},
md:function(a){throw H.d(H.dT(a))},
c:function(a,b){if(a==null)J.b0(a)
throw H.d(H.cl(a,b))},
cl:function(a,b){var s,r="index"
if(!H.jW(b))return new P.aF(!0,b,r,null)
s=J.b0(a)
if(b<0||b>=s)return P.N(b,a,r,null,s)
return P.eN(b,r)},
pi:function(a,b,c){if(a>c)return P.a6(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a6(b,a,c,"end",null)
return new P.aF(!0,b,"end",null)},
dT:function(a){return new P.aF(!0,a,null,null)},
d:function(a){var s,r
if(a==null)a=new P.eD()
s=new Error()
s.dartException=a
r=H.pD
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
pD:function(){return J.dZ(this.dartException)},
h:function(a){throw H.d(a)},
q:function(a){throw H.d(P.b3(a))},
aV:function(a){var s,r,q,p,o,n
a=H.mi(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.j0(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
j1:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
lz:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
kt:function(a,b){var s=b==null,r=s?null:b.method
return new H.eo(a,r,s?null:b.receiver)},
bl:function(a){if(a==null)return new H.iz(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bJ(a,a.dartException)
return H.pa(a)},
bJ:function(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
pa:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aU(r,16)&8191)===10)switch(q){case 438:return H.bJ(a,H.kt(H.v(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.v(s)+" (Error "+q+")"
return H.bJ(a,new H.cZ(p,e))}}if(a instanceof TypeError){o=$.mt()
n=$.mu()
m=$.mv()
l=$.mw()
k=$.mz()
j=$.mA()
i=$.my()
$.mx()
h=$.mC()
g=$.mB()
f=o.ae(s)
if(f!=null)return H.bJ(a,H.kt(s,f))
else{f=n.ae(s)
if(f!=null){f.method="call"
return H.bJ(a,H.kt(s,f))}else{f=m.ae(s)
if(f==null){f=l.ae(s)
if(f==null){f=k.ae(s)
if(f==null){f=j.ae(s)
if(f==null){f=i.ae(s)
if(f==null){f=l.ae(s)
if(f==null){f=h.ae(s)
if(f==null){f=g.ae(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bJ(a,new H.cZ(s,f==null?e:f.method))}}return H.bJ(a,new H.fj(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.d7()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bJ(a,new P.aF(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.d7()
return a},
kU:function(a){var s
if(a==null)return new H.h4(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.h4(a)},
pk:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
pr:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.f("Unsupported number of arguments for wrapped closure"))},
ck:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pr)
a.$identity=s
return s},
mZ:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.iN().constructor.prototype):Object.create(new H.cp(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aG
if(typeof r!=="number")return r.Y()
$.aG=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.l4(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.mV(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.l4(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
mV:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mc,a)
if(typeof a=="string"){if(b)throw H.d("Cannot compute signature for static tearoff.")
s=c?H.mT:H.mS
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.d("Error in functionType of tearoff")},
mW:function(a,b,c,d){var s=H.l3
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
l4:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.mY(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.mW(r,!p,s,b)
if(r===0){p=$.aG
if(typeof p!=="number")return p.Y()
$.aG=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.cq
return new Function(p+(o==null?$.cq=H.hB("self"):o)+";return "+n+"."+H.v(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aG
if(typeof p!=="number")return p.Y()
$.aG=p+1
m+=p
p="return function("+m+"){return this."
o=$.cq
return new Function(p+(o==null?$.cq=H.hB("self"):o)+"."+H.v(s)+"("+m+");}")()},
mX:function(a,b,c,d){var s=H.l3,r=H.mU
switch(b?-1:a){case 0:throw H.d(new H.eQ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
mY:function(a,b){var s,r,q,p,o,n,m,l=$.cq
if(l==null)l=$.cq=H.hB("self")
s=$.l2
if(s==null)s=$.l2=H.hB("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.mX(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.v(r)+"(this."+s+");"
n=$.aG
if(typeof n!=="number")return n.Y()
$.aG=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.v(r)+"(this."+s+", "+m+");"
n=$.aG
if(typeof n!=="number")return n.Y()
$.aG=n+1
return new Function(o+n+"}")()},
kS:function(a,b,c,d,e,f,g){return H.mZ(a,b,c,d,!!e,!!f,g)},
mS:function(a,b){return H.hg(v.typeUniverse,H.aZ(a.a),b)},
mT:function(a,b){return H.hg(v.typeUniverse,H.aZ(a.c),b)},
l3:function(a){return a.a},
mU:function(a){return a.c},
hB:function(a){var s,r,q,p=new H.cp("self","target","receiver","name"),o=J.kr(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.d(P.bK("Field name "+a+" not found."))},
pB:function(a){throw H.d(new P.ec(a))},
pm:function(a){return v.getIsolateTag(a)},
pC:function(a){return H.h(new H.cJ(a))},
qN:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pt:function(a){var s,r,q,p,o,n=$.mb.$1(a),m=$.k0[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ka[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.m8.$2(a,n)
if(q!=null){m=$.k0[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ka[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.ke(s)
$.k0[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.ka[n]=s
return s}if(p==="-"){o=H.ke(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.mg(a,s)
if(p==="*")throw H.d(P.j4(n))
if(v.leafTags[n]===true){o=H.ke(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.mg(a,s)},
mg:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.kX(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
ke:function(a){return J.kX(a,!1,null,!!a.$iz)},
pv:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.ke(s)
else return J.kX(s,c,null,null)},
pp:function(){if(!0===$.kV)return
$.kV=!0
H.pq()},
pq:function(){var s,r,q,p,o,n,m,l
$.k0=Object.create(null)
$.ka=Object.create(null)
H.po()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.mh.$1(o)
if(n!=null){m=H.pv(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
po:function(){var s,r,q,p,o,n,m=C.H()
m=H.cj(C.I,H.cj(C.J,H.cj(C.w,H.cj(C.w,H.cj(C.K,H.cj(C.L,H.cj(C.M(C.v),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.mb=new H.k6(p)
$.m8=new H.k7(o)
$.mh=new H.k8(n)},
cj:function(a,b){return a(b)||b},
n9:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.d(P.a5("Illegal RegExp pattern ("+String(n)+")",a,null))},
mj:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
pj:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mi:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
mk:function(a,b,c){var s=H.pA(a,b,c)
return s},
pA:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mi(b),'g'),H.pj(c))},
cv:function cv(){},
cw:function cw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j0:function j0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cZ:function cZ(a,b){this.a=a
this.b=b},
eo:function eo(a,b,c){this.a=a
this.b=b
this.c=c},
fj:function fj(a){this.a=a},
iz:function iz(a){this.a=a},
h4:function h4(a){this.a=a
this.b=null},
bN:function bN(){},
iR:function iR(){},
iN:function iN(){},
cp:function cp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eQ:function eQ(a){this.a=a},
W:function W(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
i4:function i4(a){this.a=a},
i7:function i7(a,b){this.a=a
this.b=b
this.c=null},
cL:function cL(a,b){this.a=a
this.$ti=b},
er:function er(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
en:function en(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ch:function(a){var s,r,q,p,o
if(t.aP.b(a))return a
s=J.bI(a)
r=s.gj(a)
q=P.cN(r,null,!1,t.z)
for(p=0;p<s.gj(a);++p){o=s.h(a,p)
if(p>=r)return H.c(q,p)
q[p]=o}return q},
aY:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.cl(b,a))},
oo:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.d(H.pi(a,b,c))
return b},
cV:function cV(){},
Z:function Z(){},
bZ:function bZ(){},
bB:function bB(){},
cW:function cW(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
cX:function cX(){},
bC:function bC(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
ls:function(a,b){var s=b.c
return s==null?b.c=H.kG(a,b.z,!0):s},
lr:function(a,b){var s=b.c
return s==null?b.c=H.dJ(a,"l7",[b.z]):s},
lt:function(a){var s=a.y
if(s===6||s===7||s===8)return H.lt(a.z)
return s===11||s===12},
nu:function(a){return a.cy},
kT:function(a){return H.kH(v.typeUniverse,a,!1)},
bi:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bi(a,s,a0,a1)
if(r===s)return b
return H.lS(a,r,!0)
case 7:s=b.z
r=H.bi(a,s,a0,a1)
if(r===s)return b
return H.kG(a,r,!0)
case 8:s=b.z
r=H.bi(a,s,a0,a1)
if(r===s)return b
return H.lR(a,r,!0)
case 9:q=b.Q
p=H.dS(a,q,a0,a1)
if(p===q)return b
return H.dJ(a,b.z,p)
case 10:o=b.z
n=H.bi(a,o,a0,a1)
m=b.Q
l=H.dS(a,m,a0,a1)
if(n===o&&l===m)return b
return H.kE(a,n,l)
case 11:k=b.z
j=H.bi(a,k,a0,a1)
i=b.Q
h=H.p7(a,i,a0,a1)
if(j===k&&h===i)return b
return H.lQ(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dS(a,g,a0,a1)
o=b.z
n=H.bi(a,o,a0,a1)
if(f===g&&n===o)return b
return H.kF(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.d(P.hu("Attempted to substitute unexpected RTI kind "+c))}},
dS:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bi(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
p8:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bi(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
p7:function(a,b,c,d){var s,r=b.a,q=H.dS(a,r,c,d),p=b.b,o=H.dS(a,p,c,d),n=b.c,m=H.p8(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fH()
s.a=q
s.b=o
s.c=m
return s},
b:function(a,b){a[v.arrayRti]=b
return a},
pf:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.mc(s)
return a.$S()}return null},
me:function(a,b){var s
if(H.lt(b))if(a instanceof H.bN){s=H.pf(a)
if(s!=null)return s}return H.aZ(a)},
aZ:function(a){var s
if(a instanceof P.P){s=a.$ti
return s!=null?s:H.kO(a)}if(Array.isArray(a))return H.kN(a)
return H.kO(J.dU(a))},
kN:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
U:function(a){var s=a.$ti
return s!=null?s:H.kO(a)},
kO:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.ow(a,s)},
ow:function(a,b){var s=a instanceof H.bN?a.__proto__.__proto__.constructor:b,r=H.o5(v.typeUniverse,s.name)
b.$ccache=r
return r},
mc:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.kH(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
ov:function(a){var s,r,q,p=this
if(p===t.K)return H.dP(p,a,H.oA)
if(!H.b_(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.dP(p,a,H.oD)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.jW
else if(r===t.gR||r===t.H)q=H.oz
else if(r===t.N)q=H.oB
else q=r===t.cJ?H.jV:null
if(q!=null)return H.dP(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.ps)){p.r="$i"+s
return H.dP(p,a,H.oC)}}else if(s===7)return H.dP(p,a,H.ot)
return H.dP(p,a,H.or)},
dP:function(a,b,c){a.b=c
return a.b(b)},
ou:function(a){var s,r=this,q=H.oq
if(!H.b_(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.on
else if(r===t.K)q=H.ol
else{s=H.dV(r)
if(s)q=H.os}r.a=q
return r.a(a)},
kR:function(a){var s,r=a.y
if(!H.b_(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.kR(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
or:function(a){var s=this
if(a==null)return H.kR(s)
return H.Q(v.typeUniverse,H.me(a,s),null,s,null)},
ot:function(a){if(a==null)return!0
return this.z.b(a)},
oC:function(a){var s,r=this
if(a==null)return H.kR(r)
s=r.r
if(a instanceof P.P)return!!a[s]
return!!J.dU(a)[s]},
oq:function(a){var s,r=this
if(a==null){s=H.dV(r)
if(s)return a}else if(r.b(a))return a
H.m2(a,r)},
os:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.m2(a,s)},
m2:function(a,b){throw H.d(H.nW(H.lL(a,H.me(a,b),H.ap(b,null))))},
lL:function(a,b,c){var s=P.hV(a),r=H.ap(b==null?H.aZ(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
nW:function(a){return new H.dH("TypeError: "+a)},
a8:function(a,b){return new H.dH("TypeError: "+H.lL(a,null,b))},
oA:function(a){return a!=null},
ol:function(a){if(a!=null)return a
throw H.d(H.a8(a,"Object"))},
oD:function(a){return!0},
on:function(a){return a},
jV:function(a){return!0===a||!1===a},
m0:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.d(H.a8(a,"bool"))},
qB:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.a8(a,"bool"))},
qA:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.a8(a,"bool?"))},
qC:function(a){if(typeof a=="number")return a
throw H.d(H.a8(a,"double"))},
qE:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.a8(a,"double"))},
qD:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.a8(a,"double?"))},
jW:function(a){return typeof a=="number"&&Math.floor(a)===a},
jP:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.d(H.a8(a,"int"))},
qG:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.a8(a,"int"))},
qF:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.a8(a,"int?"))},
oz:function(a){return typeof a=="number"},
qH:function(a){if(typeof a=="number")return a
throw H.d(H.a8(a,"num"))},
qJ:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.a8(a,"num"))},
qI:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.a8(a,"num?"))},
oB:function(a){return typeof a=="string"},
om:function(a){if(typeof a=="string")return a
throw H.d(H.a8(a,"String"))},
qL:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.a8(a,"String"))},
qK:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.a8(a,"String?"))},
p3:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.ap(a[q],b)
return s},
m3:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=H.b([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.c(a5,j)
m=C.a.Y(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.ap(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.ap(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.ap(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.ap(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.ap(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
ap:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.ap(a.z,b)
return s}if(l===7){r=a.z
s=H.ap(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.ap(a.z,b)+">"
if(l===9){p=H.p9(a.z)
o=a.Q
return o.length!==0?p+("<"+H.p3(o,b)+">"):p}if(l===11)return H.m3(a,b,null)
if(l===12)return H.m3(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.c(b,n)
return b[n]}return"?"},
p9:function(a){var s,r=H.mm(a)
if(r!=null)return r
s="minified:"+a
return s},
lT:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
o5:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.kH(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dK(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dJ(a,b,q)
n[b]=o
return o}else return m},
o3:function(a,b){return H.m_(a.tR,b)},
o2:function(a,b){return H.m_(a.eT,b)},
kH:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.lP(H.lN(a,null,b,c))
r.set(b,s)
return s},
hg:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.lP(H.lN(a,b,c,!0))
q.set(c,r)
return r},
o4:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.kE(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bh:function(a,b){b.a=H.ou
b.b=H.ov
return b},
dK:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.av(null,null)
s.y=b
s.cy=c
r=H.bh(a,s)
a.eC.set(c,r)
return r},
lS:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.o0(a,b,r,c)
a.eC.set(r,s)
return s},
o0:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b_(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.av(null,null)
q.y=6
q.z=b
q.cy=c
return H.bh(a,q)},
kG:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.o_(a,b,r,c)
a.eC.set(r,s)
return s},
o_:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b_(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.dV(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.dV(q.z))return q
else return H.ls(a,b)}}p=new H.av(null,null)
p.y=7
p.z=b
p.cy=c
return H.bh(a,p)},
lR:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.nY(a,b,r,c)
a.eC.set(r,s)
return s},
nY:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b_(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dJ(a,"l7",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.av(null,null)
q.y=8
q.z=b
q.cy=c
return H.bh(a,q)},
o1:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.av(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bh(a,s)
a.eC.set(q,r)
return r},
hf:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
nX:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dJ:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hf(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.av(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bh(a,r)
a.eC.set(p,q)
return q},
kE:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hf(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.av(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bh(a,o)
a.eC.set(q,n)
return n},
lQ:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hf(m)
if(j>0){s=l>0?",":""
r=H.hf(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.nX(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.av(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bh(a,o)
a.eC.set(q,r)
return r},
kF:function(a,b,c,d){var s,r=b.cy+("<"+H.hf(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.nZ(a,b,c,r,d)
a.eC.set(r,s)
return s},
nZ:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bi(a,b,r,0)
m=H.dS(a,c,r,0)
return H.kF(a,n,m,c!==m)}}l=new H.av(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bh(a,l)},
lN:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
lP:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.nQ(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.lO(a,r,h,g,!1)
else if(q===46)r=H.lO(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.bg(a.u,a.e,g.pop()))
break
case 94:g.push(H.o1(a.u,g.pop()))
break
case 35:g.push(H.dK(a.u,5,"#"))
break
case 64:g.push(H.dK(a.u,2,"@"))
break
case 126:g.push(H.dK(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.kD(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.dJ(p,n,o))
else{m=H.bg(p,a.e,n)
switch(m.y){case 11:g.push(H.kF(p,m,o,a.n))
break
default:g.push(H.kE(p,m,o))
break}}break
case 38:H.nR(a,g)
break
case 42:p=a.u
g.push(H.lS(p,H.bg(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.kG(p,H.bg(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.lR(p,H.bg(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.fH()
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
H.kD(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.lQ(p,H.bg(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.kD(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.nT(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.bg(a.u,a.e,i)},
nQ:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
lO:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.lT(s,o.z)[p]
if(n==null)H.h('No "'+p+'" in "'+H.nu(o)+'"')
d.push(H.hg(s,o,n))}else d.push(p)
return m},
nR:function(a,b){var s=b.pop()
if(0===s){b.push(H.dK(a.u,1,"0&"))
return}if(1===s){b.push(H.dK(a.u,4,"1&"))
return}throw H.d(P.hu("Unexpected extended operation "+H.v(s)))},
bg:function(a,b,c){if(typeof c=="string")return H.dJ(a,c,a.sEA)
else if(typeof c=="number")return H.nS(a,b,c)
else return c},
kD:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bg(a,b,c[s])},
nT:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bg(a,b,c[s])},
nS:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.d(P.hu("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.d(P.hu("Bad index "+c+" for "+b.i(0)))},
Q:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.b_(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.b_(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.Q(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.Q(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.Q(a,b.z,c,d,e)
if(r===6)return H.Q(a,b.z,c,d,e)
return r!==7}if(r===6)return H.Q(a,b.z,c,d,e)
if(p===6){s=H.ls(a,d)
return H.Q(a,b,c,s,e)}if(r===8){if(!H.Q(a,b.z,c,d,e))return!1
return H.Q(a,H.lr(a,b),c,d,e)}if(r===7){s=H.Q(a,t.P,c,d,e)
return s&&H.Q(a,b.z,c,d,e)}if(p===8){if(H.Q(a,b,c,d.z,e))return!0
return H.Q(a,b,c,H.lr(a,d),e)}if(p===7){s=H.Q(a,b,c,t.P,e)
return s||H.Q(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.b8)return!0
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
if(!H.Q(a,k,c,j,e)||!H.Q(a,j,e,k,c))return!1}return H.m4(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.m4(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.oy(a,b,c,d,e)}return!1},
m4:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.Q(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.Q(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.Q(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.Q(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.Q(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
oy:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.Q(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.lT(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.Q(a,H.hg(a,b,l[p]),c,r[p],e))return!1
return!0},
dV:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b_(a))if(r!==7)if(!(r===6&&H.dV(a.z)))s=r===8&&H.dV(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
ps:function(a){var s
if(!H.b_(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
b_:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
m_:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
av:function av(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fH:function fH(){this.c=this.b=this.a=null},
fD:function fD(){},
dH:function dH(a){this.a=a},
mm:function(a){return v.mangledGlobalNames[a]},
pw:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kX:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k2:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.kV==null){H.pp()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.d(P.j4("Return interceptor for "+H.v(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.jx
if(o==null)o=$.jx=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.pt(a)
if(p!=null)return p
if(typeof a=="function")return C.S
s=Object.getPrototypeOf(a)
if(s==null)return C.A
if(s===Object.prototype)return C.A
if(typeof q=="function"){o=$.jx
if(o==null)o=$.jx=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
n6:function(a,b){if(a<0||a>4294967295)throw H.d(P.a6(a,0,4294967295,"length",null))
return J.n7(new Array(a),b)},
kq:function(a,b){if(a<0)throw H.d(P.bK("Length must be a non-negative integer: "+a))
return H.b(new Array(a),b.L("t<0>"))},
n7:function(a,b){return J.kr(H.b(a,b.L("t<0>")))},
kr:function(a){a.fixed$length=Array
return a},
n8:function(a,b){return J.mN(a,b)},
dU:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cF.prototype
return J.em.prototype}if(typeof a=="string")return J.by.prototype
if(a==null)return J.cG.prototype
if(typeof a=="boolean")return J.el.prototype
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.P)return a
return J.k2(a)},
bI:function(a){if(typeof a=="string")return J.by.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.P)return a
return J.k2(a)},
k1:function(a){if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.P)return a
return J.k2(a)},
pl:function(a){if(typeof a=="number")return J.bV.prototype
if(typeof a=="string")return J.by.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.c8.prototype
return a},
bk:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.P)return a
return J.k2(a)},
J:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dU(a).m(a,b)},
l0:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mf(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bI(a).h(a,b)},
ki:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.mf(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.k1(a).k(a,b,c)},
mL:function(a,b,c){return J.bk(a).h7(a,b,c)},
mM:function(a,b,c,d){return J.bk(a).hr(a,b,c,d)},
mN:function(a,b){return J.pl(a).ab(a,b)},
kj:function(a,b){return J.k1(a).I(a,b)},
dY:function(a,b){return J.k1(a).D(a,b)},
mO:function(a){return J.bk(a).gbw(a)},
mP:function(a){return J.bk(a).gdF(a)},
kk:function(a){return J.dU(a).gB(a)},
aE:function(a){return J.k1(a).gR(a)},
b0:function(a){return J.bI(a).gj(a)},
mQ:function(a,b){return J.bk(a).ii(a,b)},
dZ:function(a){return J.dU(a).i(a)},
a:function a(){},
el:function el(){},
cG:function cG(){},
b5:function b5(){},
eI:function eI(){},
c8:function c8(){},
aL:function aL(){},
t:function t(a){this.$ti=a},
i3:function i3(a){this.$ti=a},
ab:function ab(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bV:function bV(){},
cF:function cF(){},
em:function em(){},
by:function by(){}},P={
nJ:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.pb()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.ck(new P.jt(q),1)).observe(s,{childList:true})
return new P.js(q,s,r)}else if(self.setImmediate!=null)return P.pc()
return P.pd()},
nK:function(a){self.scheduleImmediate(H.ck(new P.ju(a),0))},
nL:function(a){self.setImmediate(H.ck(new P.jv(a),0))},
nM:function(a){P.kw(C.o,a)},
kw:function(a,b){var s=C.c.a2(a.a,1000)
return P.nU(s<0?0:s,b)},
ly:function(a,b){var s=C.c.a2(a.a,1000)
return P.nV(s<0?0:s,b)},
nU:function(a,b){var s=new P.dG()
s.eO(a,b)
return s},
nV:function(a,b){var s=new P.dG()
s.eP(a,b)
return s},
qy:function(a){return new P.ce(a,1)},
nN:function(){return C.a1},
nO:function(a){return new P.ce(a,3)},
oF:function(a,b){return new P.dD(a,b.L("dD<0>"))},
p0:function(){var s,r
for(s=$.ci;s!=null;s=$.ci){$.dR=null
r=s.b
$.ci=r
if(r==null)$.dQ=null
s.a.$0()}},
p6:function(){$.kP=!0
try{P.p0()}finally{$.dR=null
$.kP=!1
if($.ci!=null)$.l_().$1(P.m9())}},
p4:function(a){var s=new P.fr(a),r=$.dQ
if(r==null){$.ci=$.dQ=s
if(!$.kP)$.l_().$1(P.m9())}else $.dQ=r.b=s},
p5:function(a){var s,r,q,p=$.ci
if(p==null){P.p4(a)
$.dR=$.dQ
return}s=new P.fr(a)
r=$.dR
if(r==null){s.b=p
$.ci=$.dR=s}else{q=r.b
s.b=q
$.dR=r.b=s
if(q==null)$.dQ=s}},
lx:function(a,b){var s=$.aD
if(s===C.i)return P.kw(a,b)
return P.kw(a,s.hu(b))},
nD:function(a,b){var s=$.aD
if(s===C.i)return P.ly(a,b)
return P.ly(a,s.dC(b,t.aF))},
m5:function(a,b,c,d,e){P.p5(new P.jZ(d,e))},
p1:function(a,b,c,d){var s,r=$.aD
if(r===c)return d.$0()
$.aD=c
s=r
try{r=d.$0()
return r}finally{$.aD=s}},
p2:function(a,b,c,d,e){var s,r=$.aD
if(r===c)return d.$1(e)
$.aD=c
s=r
try{r=d.$1(e)
return r}finally{$.aD=s}},
jt:function jt(a){this.a=a},
js:function js(a,b,c){this.a=a
this.b=b
this.c=c},
ju:function ju(a){this.a=a},
jv:function jv(a){this.a=a},
dG:function dG(){this.c=0},
jI:function jI(a,b){this.a=a
this.b=b},
jH:function jH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ce:function ce(a,b){this.a=a
this.b=b},
cf:function cf(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dD:function dD(a,b){this.a=a
this.$ti=b},
fr:function fr(a){this.a=a
this.b=null},
c3:function c3(){},
eZ:function eZ(){},
jN:function jN(){},
jZ:function jZ(a,b){this.a=a
this.b=b},
jA:function jA(){},
jB:function jB(a,b){this.a=a
this.b=b},
jC:function jC(a,b,c){this.a=a
this.b=b
this.c=c},
na:function(a,b){return new H.W(a.L("@<0>").ba(b).L("W<1,2>"))},
nb:function(a,b,c){return H.pk(a,new H.W(b.L("@<0>").ba(c).L("W<1,2>")))},
T:function(a,b){return new H.W(a.L("@<0>").ba(b).L("W<1,2>"))},
lb:function(a){return new P.ds(a.L("ds<0>"))},
kC:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
nP:function(a,b){var s=new P.dt(a,b)
s.c=a.e
return s},
n5:function(a,b,c){var s,r
if(P.kQ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.b([],t.s)
$.ai.push(a)
try{P.oE(a,s)}finally{if(0>=$.ai.length)return H.c($.ai,-1)
$.ai.pop()}r=P.lv(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
kp:function(a,b,c){var s,r
if(P.kQ(a))return b+"..."+c
s=new P.a_(b)
$.ai.push(a)
try{r=s
r.a=P.lv(r.a,a,", ")}finally{if(0>=$.ai.length)return H.c($.ai,-1)
$.ai.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
kQ:function(a){var s,r
for(s=$.ai.length,r=0;r<s;++r)if(a===$.ai[r])return!0
return!1},
oE:function(a,b){var s,r,q,p,o,n,m,l=a.gR(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.t())return
s=H.v(l.gG(l))
b.push(s)
k+=s.length+2;++j}if(!l.t()){if(j<=5)return
if(0>=b.length)return H.c(b,-1)
r=b.pop()
if(0>=b.length)return H.c(b,-1)
q=b.pop()}else{p=l.gG(l);++j
if(!l.t()){if(j<=4){b.push(H.v(p))
return}r=H.v(p)
if(0>=b.length)return H.c(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gG(l);++j
for(;l.t();p=o,o=n){n=l.gG(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.c(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.v(p)
r=H.v(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
nc:function(a,b,c){var s=P.na(b,c)
a.D(0,new P.i8(s,b,c))
return s},
kv:function(a){var s,r={}
if(P.kQ(a))return"{...}"
s=new P.a_("")
try{$.ai.push(a)
s.a+="{"
r.a=!0
J.dY(a,new P.ic(r,s))
s.a+="}"}finally{if(0>=$.ai.length)return H.c($.ai,-1)
$.ai.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
ds:function ds(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jz:function jz(a){this.a=a
this.c=this.b=null},
dt:function dt(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cE:function cE(){},
i8:function i8(a,b,c){this.a=a
this.b=b
this.c=c},
cM:function cM(){},
j:function j(){},
cP:function cP(){},
ic:function ic(a,b){this.a=a
this.b=b},
O:function O(){},
hh:function hh(){},
cQ:function cQ(){},
ca:function ca(a,b){this.a=a
this.$ti=b},
d3:function d3(){},
dA:function dA(){},
du:function du(){},
dL:function dL(){},
dN:function dN(){},
nG:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.nH(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
nH:function(a,b,c,d){var s=a?$.mE():$.mD()
if(s==null)return null
if(0===c&&d===b.length)return P.lD(s,b)
return P.lD(s,b.subarray(c,P.ba(c,d,b.length)))},
lD:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.bl(r)}return null},
l1:function(a,b,c,d,e,f){if(C.c.bq(f,4)!==0)throw H.d(P.a5("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.a5("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.a5("Invalid base64 padding, more than two '=' characters",a,b))},
ok:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
oj:function(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.bI(a),r=0;r<p;++r){q=s.h(a,b+r)
o[r]=(q&4294967040)>>>0!==0?255:q}return o},
je:function je(){},
jd:function jd(){},
hy:function hy(){},
hz:function hz(){},
e7:function e7(){},
eb:function eb(){},
hS:function hS(){},
jb:function jb(){},
jf:function jf(){},
jM:function jM(a){this.b=0
this.c=a},
jc:function jc(a){this.a=a},
jL:function jL(a){this.a=a
this.b=16
this.c=0},
k9:function(a,b){var s=H.ll(a,b)
if(s!=null)return s
throw H.d(P.a5(a,null,null))},
n2:function(a){if(a instanceof H.bN)return a.i(0)
return"Instance of '"+H.d1(a)+"'"},
cN:function(a,b,c,d){var s,r=c?J.kq(a,d):J.n6(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
i9:function(a,b,c){var s,r=H.b([],c.L("t<0>"))
for(s=J.aE(a);s.t();)r.push(s.gG(s))
if(b)return r
return J.kr(r)},
nd:function(a,b,c){var s,r,q=J.kq(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.c(q,s)
q[s]=r}return q},
f0:function(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=P.ba(b,c,r)
return H.lm(b>0||c<r?s.slice(b,c):s)}if(t.bm.b(a))return H.nr(a,b,P.ba(b,c,a.length))
return P.nA(a,b,c)},
nA:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.d(P.a6(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.d(P.a6(c,b,a.length,o,o))
r=J.aE(a)
for(q=0;q<b;++q)if(!r.t())throw H.d(P.a6(b,0,q,o,o))
p=[]
if(s)for(;r.t();)p.push(r.gG(r))
else for(q=b;q<c;++q){if(!r.t())throw H.d(P.a6(c,b,q,o,o))
p.push(r.gG(r))}return H.lm(p)},
ns:function(a){return new H.en(a,H.n9(a,!1,!0,!1,!1,!1))},
lv:function(a,b,c){var s=J.aE(b)
if(!s.t())return a
if(c.length===0){do a+=H.v(s.gG(s))
while(s.t())}else{a+=H.v(s.gG(s))
for(;s.t();)a=a+c+H.v(s.gG(s))}return a},
ky:function(){var s=H.ni()
if(s!=null)return P.nF(s)
throw H.d(P.B("'Uri.base' is not supported"))},
kM:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.h){s=$.mJ().b
s=s.test(b)}else s=!1
if(s)return b
r=c.ghJ().ce(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.c(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.aS(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
n0:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
n1:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ed:function(a){if(a>=10)return""+a
return"0"+a},
l6:function(a){return new P.bv(1000*a)},
hV:function(a){if(typeof a=="number"||H.jV(a)||null==a)return J.dZ(a)
if(typeof a=="string")return JSON.stringify(a)
return P.n2(a)},
hu:function(a){return new P.e2(a)},
bK:function(a){return new P.aF(!1,null,null,a)},
eN:function(a,b){return new P.d2(null,null,!0,a,b,"Value not in range")},
a6:function(a,b,c,d,e){return new P.d2(b,c,!0,a,d,"Invalid value")},
ba:function(a,b,c){if(0>a||a>c)throw H.d(P.a6(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.a6(b,a,c,"end",null))
return b}return c},
ln:function(a,b){if(a<0)throw H.d(P.a6(a,0,null,b,null))
return a},
N:function(a,b,c,d,e){var s=e==null?J.b0(b):e
return new P.ej(s,!0,a,c,"Index out of range")},
B:function(a){return new P.fl(a)},
j4:function(a){return new P.fi(a)},
b3:function(a){return new P.ea(a)},
f:function(a){return new P.fE(a)},
a5:function(a,b,c){return new P.i0(a,b,c)},
kZ:function(a){H.pw(a)},
nF:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.F(a5,4)^58)*3|C.a.F(a5,0)^100|C.a.F(a5,1)^97|C.a.F(a5,2)^116|C.a.F(a5,3)^97)>>>0
if(s===0)return P.lA(a4<a4?C.a.q(a5,0,a4):a5,5,a3).ger()
else if(s===32)return P.lA(C.a.q(a5,5,a4),0,a3).ger()}r=P.cN(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.m6(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(P.m6(a5,0,q,20,r)===20)r[7]=q
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
k=!1}else{if(!(m<a4&&m===n+2&&C.a.a5(a5,"..",n)))h=m>n+2&&C.a.a5(a5,"/..",m-3)
else h=!0
if(h){j=a3
k=!1}else{if(q===4)if(C.a.a5(a5,"file",0)){if(p<=0){if(!C.a.a5(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+C.a.q(a5,n,a4)
q-=0
i=s-0
m+=i
l+=i
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=C.a.b4(a5,n,m,"/");++a4
m=f}j="file"}else if(C.a.a5(a5,"http",0)){if(i&&o+3===n&&C.a.a5(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=C.a.b4(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&C.a.a5(a5,"https",0)){if(i&&o+4===n&&C.a.a5(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=C.a.b4(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}else j=a3
if(k){if(a4<a5.length){a5=C.a.q(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new P.fZ(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=P.od(a5,0,q)
else{if(q===0)P.cg(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?P.oe(a5,d,p-1):""
b=P.oa(a5,p,o,!1)
i=o+1
if(i<n){a=H.ll(C.a.q(a5,i,n),a3)
a0=P.oc(a==null?H.h(P.a5("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.ob(a5,n,m,a3,j,b!=null)
a2=m<l?P.kJ(a5,m+1,l,a3):a3
return new P.bH(j,c,b,a0,a1,a2,l<a4?P.o9(a5,l+1,a4):a3)},
lC:function(a){var s=t.N
return C.b.hO(H.b(a.split("&"),t.s),P.T(s,s),new P.j9(C.h))},
nE:function(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.j6(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=C.a.T(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=P.k9(C.a.q(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(q>=4)return H.c(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=P.k9(C.a.q(a,r,c),null)
if(o>255)k.$2(l,r)
if(q>=4)return H.c(j,q)
j[q]=o
return j},
lB:function(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.j7(a),c=new P.j8(d,a)
if(a.length<2)d.$1("address is too short")
s=H.b([],t.t)
for(r=b,q=r,p=!1,o=!1;r<a0;++r){n=C.a.T(a,r)
if(n===58){if(r===b){++r
if(C.a.T(a,r)!==58)d.$2("invalid start colon.",r)
q=r}if(r===q){if(p)d.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(c.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)d.$1("too few parts")
m=q===a0
l=C.b.gaG(s)
if(m&&l!==-1)d.$2("expected a part after last `:`",a0)
if(!m)if(!o)s.push(c.$2(q,a0))
else{k=P.nE(a,q,a0)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)d.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)d.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){if(h<0||h>=16)return H.c(j,h)
j[h]=0
e=h+1
if(e>=16)return H.c(j,e)
j[e]=0
h+=2}else{e=C.c.aU(g,8)
if(h<0||h>=16)return H.c(j,h)
j[h]=e
e=h+1
if(e>=16)return H.c(j,e)
j[e]=g&255
h+=2}}return j},
lU:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cg:function(a,b,c){throw H.d(P.a5(c,a,b))},
oc:function(a,b){if(a!=null&&a===P.lU(b))return null
return a},
oa:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.T(a,b)===91){s=c-1
if(C.a.T(a,s)!==93)P.cg(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.o7(a,r,s)
if(q<s){p=q+1
o=P.lZ(a,C.a.a5(a,"25",p)?q+3:p,s,"%25")}else o=""
P.lB(a,r,q)
return C.a.q(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.T(a,n)===58){q=C.a.bz(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.lZ(a,C.a.a5(a,"25",p)?q+3:p,c,"%25")}else o=""
P.lB(a,b,q)
return"["+C.a.q(a,b,q)+o+"]"}return P.og(a,b,c)},
o7:function(a,b,c){var s=C.a.bz(a,"%",b)
return s>=b&&s<c?s:c},
lZ:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.a_(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.T(a,s)
if(p===37){o=P.kK(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.a_("")
m=i.a+=C.a.q(a,r,s)
if(n)o=C.a.q(a,s,s+3)
else if(o==="%")P.cg(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.c(C.j,n)
n=(C.j[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.a_("")
if(r<s){i.a+=C.a.q(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.T(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=C.a.q(a,r,s)
if(i==null){i=new P.a_("")
n=i}else n=i
n.a+=j
n.a+=P.kI(p)
s+=k
r=s}}}if(i==null)return C.a.q(a,b,c)
if(r<c)i.a+=C.a.q(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
og:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.T(a,s)
if(o===37){n=P.kK(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.a_("")
l=C.a.q(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.q(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.c(C.x,m)
m=(C.x[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.a_("")
if(r<s){q.a+=C.a.q(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.c(C.l,m)
m=(C.l[m]&1<<(o&15))!==0}else m=!1
if(m)P.cg(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.T(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=C.a.q(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.a_("")
m=q}else m=q
m.a+=l
m.a+=P.kI(o)
s+=j
r=s}}}}if(q==null)return C.a.q(a,b,c)
if(r<c){l=C.a.q(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
od:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.lW(C.a.F(a,b)))P.cg(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.F(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.c(C.n,p)
p=(C.n[p]&1<<(q&15))!==0}else p=!1
if(!p)P.cg(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.q(a,b,c)
return P.o6(r?a.toLowerCase():a)},
o6:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oe:function(a,b,c){return P.dM(a,b,c,C.U,!1)},
ob:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dM(a,b,c,C.y,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a4(s,"/"))s="/"+s
return P.of(s,e,f)},
of:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a4(a,"/"))return P.oh(a,!s||c)
return P.oi(a)},
kJ:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.d(P.bK("Both query and queryParameters specified"))
return P.dM(a,b,c,C.m,!0)}if(d==null)return null
s=new P.a_("")
r.a=""
d.D(0,new P.jJ(new P.jK(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
o9:function(a,b,c){return P.dM(a,b,c,C.m,!0)},
kK:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.T(a,b+1)
r=C.a.T(a,n)
q=H.k5(s)
p=H.k5(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aU(o,4)
if(n>=8)return H.c(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
if(n)return H.aS(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.q(a,b,b+3).toUpperCase()
return null},
kI:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=C.a.F(k,a>>>4)
s[2]=C.a.F(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=C.c.hg(a,6*q)&63|r
if(o>=p)return H.c(s,o)
s[o]=37
m=o+1
l=C.a.F(k,n>>>4)
if(m>=p)return H.c(s,m)
s[m]=l
l=o+2
m=C.a.F(k,n&15)
if(l>=p)return H.c(s,l)
s[l]=m
o+=3}}return P.f0(s,0,null)},
dM:function(a,b,c,d,e){var s=P.lY(a,b,c,d,e)
return s==null?C.a.q(a,b,c):s},
lY:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.T(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.c(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.kK(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.c(C.l,n)
n=(C.l[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.cg(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.T(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=P.kI(o)}}if(p==null){p=new P.a_("")
n=p}else n=p
n.a+=C.a.q(a,q,r)
n.a+=H.v(m)
if(typeof l!=="number")return H.md(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.q(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
lX:function(a){if(C.a.a4(a,"."))return!0
return C.a.e4(a,"/.")!==-1},
oi:function(a){var s,r,q,p,o,n,m
if(!P.lX(a))return a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.J(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.c(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.p(s,"/")},
oh:function(a,b){var s,r,q,p,o,n
if(!P.lX(a))return!b?P.lV(a):a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gaG(s)!==".."){if(0>=s.length)return H.c(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.c(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gaG(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.c(s,0)
r=P.lV(s[0])
if(0>=s.length)return H.c(s,0)
s[0]=r}return C.b.p(s,"/")},
lV:function(a){var s,r,q,p=a.length
if(p>=2&&P.lW(C.a.F(a,0)))for(s=1;s<p;++s){r=C.a.F(a,s)
if(r===58)return C.a.q(a,0,s)+"%3A"+C.a.a7(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.c(C.n,q)
q=(C.n[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
o8:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.F(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.d(P.bK("Invalid URL encoding"))}}return s},
kL:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.F(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.h!==d)q=!1
else q=!0
if(q)return C.a.q(a,b,c)
else p=new H.R(C.a.q(a,b,c))}else{p=H.b([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.F(a,o)
if(r>127)throw H.d(P.bK("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.d(P.bK("Truncated URI"))
p.push(P.o8(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a0.ce(p)},
lW:function(a){var s=a|32
return 97<=s&&s<=122},
lA:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.b([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.F(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.d(P.a5(k,a,r))}}if(q<0&&r>b)throw H.d(P.a5(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.F(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaG(j)
if(p!==44||r!==n+7||!C.a.a5(a,"base64",n+1))throw H.d(P.a5("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.G.hX(0,a,m,s)
else{l=P.lY(a,m,s,C.m,!0)
if(l!=null)a=C.a.b4(a,m,s,l)}return new P.j5(a,j,c)},
op:function(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="?",i="#",h=H.b(new Array(22),t.gN)
for(s=0;s<22;++s)h[s]=new Uint8Array(96)
r=new P.jS(h)
q=new P.jT()
p=new P.jU()
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
m6:function(a,b,c,d,e){var s,r,q,p,o,n,m=$.mK()
for(s=m.length,r=b;r<c;++r){if(d<0||d>=s)return H.c(m,d)
q=m[d]
p=C.a.F(a,r)^96
o=q[p>95?31:p]
d=o&31
n=o>>>5
if(n>=8)return H.c(e,n)
e[n]=r}return d},
X:function X(a,b){this.a=a
this.b=b},
bv:function bv(a){this.a=a},
hP:function hP(){},
hQ:function hQ(){},
H:function H(){},
e2:function e2(a){this.a=a},
fb:function fb(){},
eD:function eD(){},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d2:function d2(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ej:function ej(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fl:function fl(a){this.a=a},
fi:function fi(a){this.a=a},
eX:function eX(a){this.a=a},
ea:function ea(a){this.a=a},
eG:function eG(){},
d7:function d7(){},
ec:function ec(a){this.a=a},
fE:function fE(a){this.a=a},
i0:function i0(a,b,c){this.a=a
this.b=b
this.c=c},
k:function k(){},
ek:function ek(){},
ae:function ae(){},
P:function P(){},
a_:function a_(a){this.a=a},
j9:function j9(a){this.a=a},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
j8:function j8(a,b){this.a=a
this.b=b},
bH:function bH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
jK:function jK(a,b){this.a=a
this.b=b},
jJ:function jJ(a){this.a=a},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
jS:function jS(a){this.a=a},
jT:function jT(){},
jU:function jU(){},
fZ:function fZ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fx:function fx(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
ph:function(a){var s,r,q,p
if(t.x.b(a)){s=J.mP(a)
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
return new P.dI(r,q,p)},
pg:function(a){if(a instanceof P.dI)return{data:a.a,height:a.b,width:a.c}
return a},
bj:function(a){var s,r,q,p,o
if(a==null)return null
s=P.T(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
s.k(0,o,a[o])}return s},
m1:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.jV(a))return a
if(t.f.b(a))return P.ma(a)
if(t.d.b(a)){s=[]
J.dY(a,new P.jQ(s))
a=s}return a},
ma:function(a){var s={}
J.dY(a,new P.k_(s))
return s},
jD:function jD(){},
jF:function jF(a,b){this.a=a
this.b=b},
jG:function jG(a,b){this.a=a
this.b=b},
dI:function dI(a,b,c){this.a=a
this.b=b
this.c=c},
jQ:function jQ(a){this.a=a},
k_:function k_(a){this.a=a},
jE:function jE(a,b){this.a=a
this.b=b},
eh:function eh(a,b){this.a=a
this.b=b},
hZ:function hZ(){},
i_:function i_(){},
fX:function fX(){},
a7:function a7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aM:function aM(){},
ep:function ep(){},
aR:function aR(){},
eE:function eE(){},
iB:function iB(){},
f_:function f_(){},
n:function n(){},
aT:function aT(){},
fa:function fa(){},
fL:function fL(){},
fM:function fM(){},
fT:function fT(){},
fU:function fU(){},
h6:function h6(){},
h7:function h7(){},
hd:function hd(){},
he:function he(){},
hw:function hw(){},
e4:function e4(){},
hx:function hx(a){this.a=a},
e5:function e5(){},
b2:function b2(){},
eF:function eF(){},
fs:function fs(){},
c1:function c1(){},
eV:function eV(){},
h2:function h2(){},
h3:function h3(){}},W={
kl:function(){var s=document.createElement("canvas")
s.toString
return s},
hR:function(a){return"wheel"},
l8:function(a){var s=document.createElement("img")
s.src=a
return s},
n4:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.bl(s)}return q},
jy:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
lM:function(a,b,c,d){var s=W.jy(W.jy(W.jy(W.jy(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
a1:function(a,b,c,d){var s=new W.dr(a,b,c==null?null:W.m7(new W.jw(c),t.aD),!1)
s.hn()
return s},
m7:function(a,b){var s=$.aD
if(s===C.i)return a
return s.dC(a,b)},
o:function o(){},
ht:function ht(){},
e0:function e0(){},
e1:function e1(){},
bs:function bs(){},
bt:function bt(){},
ct:function ct(){},
aA:function aA(){},
hI:function hI(){},
F:function F(){},
cx:function cx(){},
hJ:function hJ(){},
aq:function aq(){},
aH:function aH(){},
hK:function hK(){},
hL:function hL(){},
hM:function hM(){},
hN:function hN(){},
cy:function cy(){},
cz:function cz(){},
ee:function ee(){},
hO:function hO(){},
fu:function fu(a,b){this.a=a
this.b=b},
E:function E(){},
l:function l(){},
e:function e(){},
ac:function ac(){},
bQ:function bQ(){},
eg:function eg(){},
ei:function ei(){},
ar:function ar(){},
i2:function i2(){},
bw:function bw(){},
bx:function bx(){},
bS:function bS(){},
bU:function bU(){},
bz:function bz(){},
ia:function ia(){},
iu:function iu(){},
bX:function bX(){},
ev:function ev(){},
iv:function iv(a){this.a=a},
ew:function ew(){},
iw:function iw(a){this.a=a},
at:function at(){},
ex:function ex(){},
ak:function ak(){},
ft:function ft(a){this.a=a},
u:function u(){},
cY:function cY(){},
au:function au(){},
eK:function eK(){},
eP:function eP(){},
iG:function iG(a){this.a=a},
eR:function eR(){},
al:function al(){},
eT:function eT(){},
aw:function aw(){},
eU:function eU(){},
ax:function ax(){},
eY:function eY(){},
iO:function iO(a){this.a=a},
ah:function ah(){},
bd:function bd(){},
am:function am(){},
aa:function aa(){},
f1:function f1(){},
f2:function f2(){},
iW:function iW(){},
an:function an(){},
bF:function bF(){},
f9:function f9(){},
j_:function j_(){},
aW:function aW(){},
ja:function ja(){},
fo:function fo(){},
bf:function bf(){},
cd:function cd(){},
fv:function fv(){},
dq:function dq(){},
fI:function fI(){},
dv:function dv(){},
h1:function h1(){},
h8:function h8(){},
ko:function ko(a,b){this.a=a
this.$ti=b},
dr:function dr(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jw:function jw(a){this.a=a},
kB:function kB(a){this.$ti=a},
K:function K(){},
cC:function cC(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
fw:function fw(){},
fy:function fy(){},
fz:function fz(){},
fA:function fA(){},
fB:function fB(){},
fF:function fF(){},
fG:function fG(){},
fJ:function fJ(){},
fK:function fK(){},
fN:function fN(){},
fO:function fO(){},
fP:function fP(){},
fQ:function fQ(){},
fR:function fR(){},
fS:function fS(){},
fV:function fV(){},
fW:function fW(){},
fY:function fY(){},
dB:function dB(){},
dC:function dC(){},
h_:function h_(){},
h0:function h0(){},
h5:function h5(){},
h9:function h9(){},
ha:function ha(){},
dE:function dE(){},
dF:function dF(){},
hb:function hb(){},
hc:function hc(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
hp:function hp(){},
hq:function hq(){},
hr:function hr(){}},K={e_:function e_(){},cD:function cD(){},aQ:function aQ(a){this.a=a},Y:function Y(a){this.a=a}},L={eW:function eW(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},f7:function f7(a,b,c){this.a=a
this.b=b
this.c=c},f8:function f8(a,b){this.b=a
this.c=b},iY:function iY(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},da:function da(a,b){this.b=a
this.c=!1
this.a=b}},O={
hF:function(a){return new O.a9(H.b([],a.L("t<0>")),a.L("a9<0>"))},
a9:function a9(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
cU:function cU(a){this.a=a
this.b=null},
lc:function(){var s=O.hF(t.gc),r=new O.cR(s)
s.br(r.gfk(),r.gfm())
s=r.gcu()
s.gn().l(0,r.gde())
s.ge9().l(0,r.gaA())
return r},
eu:function(a,b){return new O.cT(new V.S(0,0,0),a,b,new A.aj(!1,!1,!1))},
cR:function cR(a){var _=this
_.b=_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
ik:function ik(a,b){this.a=a
this.b=b},
il:function il(){},
im:function im(a,b){this.a=a
this.b=b},
io:function io(){},
ip:function ip(a,b){this.a=a
this.b=b},
iq:function iq(){},
ir:function ir(a,b){this.a=a
this.b=b},
is:function is(){},
id:function id(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
cS:function cS(){},
ie:function ie(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
cT:function cT(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
ih:function ih(a){this.b=a},
ii:function ii(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
ij:function ij(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
d8:function d8(){}},Y={
pz:function(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.a,e=a0.b,d=a0.c,c=new V.w(f,e,d).J(),b=a1.U(c)
if(b===0)return new Y.bb(g,g,C.e,0)
if(b>0&&!0)return new Y.bb(g,g,C.e,0)
s=a.a
r=a.b
q=a.c
p=a0.d
o=a.d
n=(p-new V.w(s,r,q).U(c)+o)/b
if(n<0)return new Y.bb(g,g,C.e,n)
if(n>1)return new Y.bb(g,g,C.q,n)
s+=a1.a*n
r+=a1.b*n
q+=a1.c*n
m=new V.w(f,e,d)
l=m.M(0,p)
p=l.Y(0,m.M(0,p-l.U(m)))
d=p.a
e=p.b
p=p.c
k=s-d
j=r-e
i=q-p
h=Math.sqrt(k*k+j*j+i*i)<o?C.p:C.f
return new Y.bb(new V.L(s,r,q),new V.L(d,e,p),h,n)},
pE:function(a2,a3,a4,a5){var s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=a2.c,h=new V.L(k,j,i),g=a3.a,f=a3.b,e=a3.c,d=new V.L(g,f,e),c=d.ah(h),b=a2.d,a=b+a3.d,a0=a*a,a1=c.U(c)
if(a1<a0)return new Y.aU(h,d,l,C.p,0)
s=a5.aw(0,a4)
r=Math.sqrt(s.U(s))
q=c.U(s.J())
$.C().toString
if(Math.abs(a1-a0)<1e-9&&q<0)return new Y.aU(l,l,l,C.e,0)
p=q*q+a0-a1
if(p<0)return new Y.aU(l,l,l,C.e,0)
o=q-Math.sqrt(p)
if(o<0)return new Y.aU(l,l,l,C.e,o)
if(o>r)return new Y.aU(l,l,l,C.q,o)
n=o/r
k+=a4.a*n
j+=a4.b*n
i+=a4.c*n
g+=a5.a*n
f+=a5.b*n
n=e+a5.c*n
m=b/Math.sqrt(a1)
return new Y.aU(new V.L(k,j,i),new V.L(g,f,n),new V.L((g-k)*m+k,(f-j)*m+j,(n-i)*m+i),C.f,o)},
c4:function c4(a){this.b=a},
e6:function e6(){},
bb:function bb(a,b,c,d){var _=this
_.r=a
_.x=b
_.a=c
_.b=d},
aU:function aU(a,b,c,d,e){var _=this
_.r=a
_.x=b
_.y=c
_.a=d
_.b=e}},E={
kn:function(){var s=null,r=new E.aI(O.hF(t.l))
r.cS(s,!0,s,"",s,s)
return r},
lJ:function(){var s=window.navigator.vendor
s.toString
if(C.a.H(s,"Google"))return C.E
s=window.navigator.userAgent
s.toString
if(C.a.H(s,"Firefox"))return C.t
s=window.navigator.appVersion
s.toString
if(C.a.H(s,"Trident")||C.a.H(s,"Edge"))return C.u
s=window.navigator.appName
s.toString
if(C.a.H(s,"Microsoft"))return C.u
return C.F},
lK:function(){var s=window.navigator.appVersion
s.toString
if(C.a.H(s,"Win"))return C.Y
if(C.a.H(s,"Mac"))return C.z
if(C.a.H(s,"Linux"))return C.Z
return C.a_},
nt:function(a,b){var s
Date.now()
s=t.fA
s=new E.iC(a,new P.X(Date.now(),!1),new P.X(Date.now(),!1),new O.cU(H.b([],s)),new O.cU(H.b([],s)),new O.cU(H.b([],s)),H.b([null],t.bc),P.T(t.N,t.fg))
s.eE(a,b)
return s},
nC:function(a,b,c,d,e){var s,r
if(t.gA.b(a))return E.lw(a,!0,!0,!0,!1)
s=W.kl()
r=s.style
r.width="100%"
r.height="100%"
J.mO(a).l(0,s)
return E.lw(s,!0,!0,!0,!1)},
lw:function(a,b,c,d,e){var s,r,q,p,o,n,m="mousemove",l=t.z,k=t.gW.a(C.k.cM(a,"webgl2",P.nb(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],l,l)))
if(k==null)throw H.d(P.f("Failed to get the rendering context for WebGL."))
s=E.nt(k,a)
l=H.jP(k.getParameter(3379))
r=H.jP(k.getParameter(34076))
q=H.b([],t.g9)
p=$.hT
o=new X.fn(a,q,(p==null?$.hT=new E.fC(E.lJ(),E.lK()):p).a===C.t?0.16666666666666666:0.005555555555555556)
n=document
n.toString
q.push(W.a1(n,"contextmenu",o.gfv(),!1))
q.push(W.a1(a,"focus",o.gfD(),!1))
q.push(W.a1(a,"blur",o.gfo(),!1))
q.push(W.a1(n,"keyup",o.gc_(),!1))
q.push(W.a1(n,"keydown",o.gbM(),!1))
q.push(W.a1(a,"mousedown",o.gfJ(),!1))
q.push(W.a1(a,"mouseup",o.gfN(),!1))
q.push(W.a1(a,m,o.gfL(),!1))
W.hR(a)
W.hR(a)
q.push(W.a1(a,W.hR(a),o.gfP(),!1))
q.push(W.a1(n,m,o.gfz(),!1))
q.push(W.a1(n,"mouseup",o.gfB(),!1))
q.push(W.a1(n,"pointerlockchange",o.gfR(),!1))
q.push(W.a1(a,"touchstart",o.gh2(),!1))
q.push(W.a1(a,"touchend",o.gfZ(),!1))
q.push(W.a1(a,"touchmove",o.gh0(),!1))
r=new E.f6(a,s,new T.iS(k,l,r),o,new P.X(Date.now(),!1))
r.dg()
return r},
hA:function hA(){},
aI:function aI(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bL:function bL(a){this.b=a},
c_:function c_(a){this.b=a},
fC:function fC(a,b){this.a=a
this.b=b},
iC:function iC(a,b,c,d,e,f,g,h){var _=this
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
iD:function iD(a){this.a=a},
iE:function iE(a){this.a=a},
iF:function iF(a){this.a=a},
f6:function f6(a,b,c,d,e){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.x=d
_.cx=!1
_.cy=e
_.db=0},
iV:function iV(a){this.a=a}},Z={
kA:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.ch(c)),35044)
a.bindBuffer(b,null)
return new Z.fp(b,s)},
ay:function(a){return new Z.aX(a)},
fp:function fp(a,b){this.a=a
this.b=b},
bM:function bM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jr:function jr(a){this.a=a},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bT:function bT(a,b,c){this.a=a
this.b=b
this.c=c},
aX:function aX(a){this.a=a}},D={
I:function(){return new D.bP()},
hC:function hC(){},
bP:function bP(){var _=this
_.c=_.b=_.a=null
_.d=0},
hW:function hW(a){this.a=a},
hX:function hX(a){this.a=a},
V:function V(){},
aJ:function aJ(){},
aK:function aK(){},
D:function D(a,b,c){this.c=a
this.d=b
this.e=c},
l5:function(a,b){var s=new D.bO(new V.S(1,1,1),V.lH(),V.kz(),V.nI()),r=s.a
s.a=b
b.gn().l(0,s.geL())
s.ax(new D.D("mover",r,s.a))
if(!s.b.m(0,a)){r=s.b
s.b=a
s.ax(new D.D("color",r,a))}return s},
bO:function bO(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=null},
cK:function cK(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={
cI:function(){var s=new X.cH(H.b([],t.f5))
s.bJ(s.geF(),s.geH(),s.geJ())
return s},
cs:function cs(a,b){this.a=a
this.b=b},
ad:function ad(a,b){this.a=a
this.b=b},
b6:function b6(a){this.c=a},
cH:function cH(a){var _=this
_.f=null
_.r=!1
_.y=null
_.a=a
_.c=_.b=null},
i5:function i5(a){this.b=this.a=null
this.d=a},
cO:function cO(a,b,c){this.x=a
this.c=b
this.d=c},
ib:function ib(a,b,c,d){var _=this
_.a=a
_.f=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},
aP:function aP(a,b,c){this.a=a
this.b=b
this.c=c},
bY:function bY(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},
ix:function ix(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},
eM:function eM(){},
d9:function d9(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},
iZ:function iZ(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},
fn:function fn(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.r=_.f=!1
_.y=null
_.z=b
_.Q=c},
n3:function(a){var s=new V.bu(0,0,0,1),r=$.lq
if(r==null){r=V.lp(0,0,1,1)
$.lq=r}return new X.i1(s,r)},
i1:function i1(a,b){this.a=a
this.r=b
this.x=null},
eH:function eH(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
iQ:function iQ(){}},V={
kW:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
pF:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bq(a-b,s)
return(a<0?a+s:a)+b},
y:function(a,b,c){$.C().toString
return C.a.af(C.d.cK(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cm:function(a,b,c){var s,r,q,p,o,n,m,l=H.b([],t.s)
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.q)(a),++p){o=a[p]
$.C().toString
n=C.a.af(C.d.cK(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.c(l,m)
s=C.a.af(l[m],q)
r=l.length
if(m>=r)return H.c(l,m)
l[m]=s}return l},
kY:function(a){return C.d.io(Math.pow(2,C.d.cq(Math.log(a)/Math.log(2))))},
it:function(){var s=$.le
return s==null?$.le=new V.b7(1,0,0,0,1,0,0,0,1):s},
ld:function(a){var s=Math.cos(a),r=Math.sin(a)
return new V.b7(s,0,-r,0,1,0,r,0,s)},
aC:function(){var s=$.lj
return s==null?$.lj=V.b8(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
b8:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lh:function(a,b,c){return V.b8(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lg:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.b8(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
li:function(a,b,c,d){d=V.kz()
return V.lf(V.iA(),d,new V.w(a,b,c))},
lf:function(a,b,c){var s=c.J(),r=b.bf(s).J(),q=s.bf(r),p=new V.w(a.a,a.b,a.c)
return V.b8(r.a,q.a,s.a,r.b6(0).U(p),r.b,q.b,s.b,q.b6(0).U(p),r.c,q.c,s.c,s.b6(0).U(p),0,0,0,1)},
iA:function(){var s=$.ag
return s==null?$.ag=new V.L(0,0,0):s},
lp:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eO(a,b,c,d)},
bG:function(){var s=$.lG
return s==null?$.lG=new V.w(0,0,0):s},
nI:function(){var s=$.jh
return s==null?$.jh=new V.w(-1,0,0):s},
kz:function(){var s=$.ji
return s==null?$.ji=new V.w(0,1,0):s},
lH:function(){var s=$.jj
return s==null?$.jj=new V.w(0,0,1):s},
lE:function(a,b,c){return new V.w(a,b,c)},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
bu:function bu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hU:function hU(){},
b7:function b7(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aO:function aO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
eJ:function eJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a4:function a4(a,b){this.a=a
this.b=b},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
d_:function d_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eO:function eO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d6:function d6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ao:function ao(a,b){this.a=a
this.b=b},
w:function w(a,b,c){this.a=a
this.b=b
this.c=c},
px:function(a){P.nD(C.P,new V.kf(a))},
nv:function(a){var s,r,q,p,o,n=document,m=n.body
if(m==null)throw H.d(P.f("The html document body was null."))
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
W.a1(n,"scroll",new V.iL(s),!1)
return new V.iJ(o)},
hD:function hD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hE:function hE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kf:function kf(a){this.a=a},
iJ:function iJ(a){this.a=a
this.b=null},
iL:function iL(a){this.a=a},
iK:function iK(a){this.a=a}},U={
e9:function(){return new U.hG()},
hH:function(a){var s=new U.cu(V.aC())
s.sV(0,a)
return s},
hG:function hG(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
cu:function cu(a){this.a=a
this.b=null},
bR:function bR(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
a3:function a3(){},
dl:function dl(a,b,c,d,e){var _=this
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
dm:function dm(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
_.dx=null}},M={ef:function ef(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
nf:function(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=""+"MaterialLight_"+a6.gap(a6)+a7.gap(a7)+a8.gap(a8)+a9.gap(a9)+b0.gap(b0)+b1.gap(b1)+b2.gap(b2)+b3.gap(b3)+b4.gap(b4)+"_"
a0+=a1?"1":"0"
a0+=a2?"1":"0"
a0+=a3?"1":"0"
a0=a0+"0_"+a5
s=b5.length
if(s>0){a0+="_Bar"
for(r=0;r<b5.length;b5.length===s||(0,H.q)(b5),++r)a0+="_"+b5[r].a}s=b6.length
if(s>0){a0+="_Dir"
for(r=0;r<b6.length;b6.length===s||(0,H.q)(b6),++r)a0+="_"+b6[r].a}s=b7.length
if(s>0){a0+="_Point"
for(r=0;r<b7.length;b7.length===s||(0,H.q)(b7),++r)a0+="_"+b7[r].a}s=b8.length
if(s>0){a0+="_Spot"
for(r=0;r<b8.length;b8.length===s||(0,H.q)(b8),++r)a0+="_"+b8[r].a}for(s=b5.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b5[r].b
for(o=b6.length,r=0;r<o;++r,p=!0)q+=b6[r].b
for(o=b7.length,r=0;r<o;++r,p=!0)q+=b7[r].b
for(n=b8.length,r=0;r<n;++r,p=!0)q+=b8[r].b
m=b2.a||b2.b||b2.c||b3.a||b3.b||b3.c
l=s>0
if(!(a7.a||a7.b||a7.c))if(!(a8.a||a8.b||a8.c)){s=a9.a||a9.b||a9.c||b0.a||b0.b||b0.c
k=s}else k=!0
else k=!0
s=!b0.a
j=!s||b0.b||b0.c||l||o>0||m
if(!(a8.a||a8.b||a8.c))i=a9.a||a9.b||a9.c||!s||b0.b||b0.c
else i=!0
if(!i)h=b1.a||b1.b||b1.c||m
else h=!0
g=b1.a||b1.b||b1.c
f=a6.b||a7.b||a8.b||a9.b||b0.b||b1.b||b2.b||b3.b||b4.b
e=a6.c||a7.c||a8.c||a9.c||b0.c||b1.c||b2.c||b3.c||b4.c
d=a5>0
c=h||g||j||!1
b=l&&i
a1=a1&&f
a2=a2&&e
a=$.bp()
if(h){s=$.bo()
a=new Z.aX(a.a|s.a)}if(g)a=new Z.aX(a.a|$.bn().a)
if(f)a=new Z.aX(a.a|$.bq().a)
if(e)a=new Z.aX(a.a|$.br().a)
if(d)a=new Z.aX(a.a|$.bm().a)
return new A.ig(a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,q,m,i,m,p,c,!0,b,!1,k,p,j,h,g,f,e,d,a1,a2,a3,!1,a5,a0.charCodeAt(0)==0?a0:a0,a)},
jX:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"
else if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
jY:function(a,b,c){var s,r="Txt, txt2D).rgb;\n",q="Txt, txtCube).rgb;\n"
A.jX(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hs(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else if(b.c){s+="   "+c+"Color = "+c+"Clr*textureCube("+c+q
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}else if(b.c){s+="   "+c+"Color = textureCube("+c+q
a.a=s}a.a=s+"}\n"},
oK:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||r.c))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jX(b,r,"emission")
s=b.a+="\n"
s+="vec3 emissionColor()\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.b){r=s+"   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
b.a=r}else if(r.c){r=s+"   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
b.a=r}else{r=s+"   return emissionClr;\n"
b.a=r}else if(r.b){r=s+"   return texture2D(emissionTxt, txt2D).rgb;\n"
b.a=r}else if(r.c){r=s+"   return textureCube(emissionTxt, txtCube).rgb;\n"
b.a=r}else r=s
r+="}\n"
b.a=r
b.a=r+"\n"},
oG:function(a,b){var s,r=a.b
if(!(r.a||r.b||r.c))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.jY(b,r,"ambient")
b.a+="\n"},
oI:function(a,b){var s,r=a.c
if(!(r.a||r.b||r.c))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.jY(b,r,"diffuse")
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
oL:function(a,b){var s,r=a.d
if(!(r.a||r.b||r.c))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.jY(b,r,"invDiffuse")
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
oR:function(a,b){var s,r=a.e
if(!(r.a||r.b||r.c))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.jY(b,r,"specular")
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
oN:function(a,b){var s,r,q,p
if(!a.k4)return
s=b.a+="// === Normal ===\n"
s=b.a=s+"\n"
r=a.f
q=r.b
if(q){s+="uniform sampler2D bumpTxt;\n"
b.a=s
s=b.a=s+"\n"}else if(r.c){s+="uniform samplerCube bumpTxt;\n"
b.a=s
s+="\n"
b.a=s}s+="vec3 normal()\n"
b.a=s
s=b.a=s+"{\n"
p=r.a
if(!(p||q||r.c)||p)s=b.a=s+"   return normalize(normalVec);\n"
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
oP:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||r.c))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jX(b,r,"reflect")
s=b.a+="\n"
s+="vec3 reflect(vec3 refl)\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.b){r=s+"   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
b.a=r}else if(r.c){r=s+"   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;\n"
b.a=r}else{r=s+"   vec3 scalar = reflectClr;\n"
b.a=r}else if(r.b){r=s+"   vec3 scalar = texture2D(reflectTxt, txt2D).rgb;\n"
b.a=r}else if(r.c){r=s+"   vec3 scalar = textureCube(reflectTxt, txtCube).rgb;\n"
b.a=r}else r=s
r+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=r
r+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
oQ:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||r.c))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jX(b,r,"refract")
s=b.a+="uniform float refraction;\n"
s+="\n"
b.a=s
s+="vec3 refract(vec3 refl)\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.b){r=s+"   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
b.a=r}else if(r.c){r=s+"   vec3 scalar = refractClr*textureCube(refractTxt, txtCube).rgb;\n"
b.a=r}else{r=s+"   vec3 scalar = refractClr;\n"
b.a=r}else if(r.b){r=s+"   vec3 scalar = texture2D(refractTxt, txt2D).rgb;\n"
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
oH:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.hs(r)
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
s=c.a+="   return "+C.b.p(o," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit)\n"
c.a=s
c.a=s+"{\n"
o=H.b([],p)
s=a.b
if(s.a||s.b||s.c)o.push("ambientColor")
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
if(s.a||s.b||s.c)n.push("diffuse(norm, normDir)")
s=a.d
if(s.a||s.b||s.c)n.push("invDiffuse(norm, normDir)")
s=a.e
if(s.a||s.b||s.c)n.push("specular(norm, normDir)")
s=c.a+="      highLight = intensity*("+C.b.p(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.p(o," + ")+");\n"
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
oJ:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+s
q=A.hs(r)
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
if(l.a||l.b||l.c)m.push("ambientColor")
if(a.dx){c.a+=u.k
k=H.b([],p)
p=a.c
if(p.a||p.b||p.c)k.push("diffuse(norm, lit.viewDir)")
p=a.d
if(p.a||p.b||p.c)k.push("invDiffuse(norm, lit.viewDir)")
p=a.e
if(p.a||p.b||p.c)k.push("specular(norm, lit.viewDir)")
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
c.a+="      highLight = intensity*("+C.b.p(k," + ")+");\n"}else c.a+="   highLight = "+C.b.p(k," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.b.p(m," + ")+");\n"
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
oO:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.hs(r)
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
m=c.a+="   return "+C.b.p(j," * ")+";\n"
m+="}\n"
c.a=m
m+="\n"
c.a=m
m+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+k+")\n"
c.a=m
c.a=m+"{\n"
j=H.b([],p)
m=a.b
if(m.a||m.b||m.c)j.push("ambientColor")
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
if(p.a||p.b||p.c)i.push("diffuse(norm, normDir)")
p=a.d
if(p.a||p.b||p.c)i.push("invDiffuse(norm, normDir)")
p=a.e
if(p.a||p.b||p.c)i.push("specular(norm, normDir)")
p=c.a+="      highLight = intensity*("+C.b.p(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.b.p(j," + ")+");\n"
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
oS:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.hs(r)
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
if(m){s=$.hT
if(s==null)s=$.hT=new E.fC(E.lJ(),E.lK())
p=c.a
if(s.b===C.z){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
p=c.a+="   return "+C.b.p(h," * ")+";\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+i+")\n"
c.a=p
c.a=p+"{\n"
h=H.b([],s)
p=a.b
if(p.a||p.b||p.c)h.push("ambientColor")
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
if(s.a||s.b||s.c)g.push("diffuse(norm, litVec)")
s=a.d
if(s.a||s.b||s.c)g.push("invDiffuse(norm, litVec)")
s=a.e
if(s.a||s.b||s.c)g.push("specular(norm, litVec)")
s=c.a+="      highLight = intensity*("+C.b.p(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.p(h," + ")+");\n"
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
oM:function(a,b){var s,r
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
if(s.a||s.b||s.c)r.push("ambientColor")
s=a.c
if(s.a||s.b||s.c)r.push("diffuse(norm, litVec)")
s=a.d
if(s.a||s.b||s.c)r.push("invDiffuse(norm, litVec)")
s=a.e
if(s.a||s.b||s.c)r.push("specular(norm, litVec)")
s=b.a+="   return "+C.b.p(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
oT:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j=new P.a_(""),i=""+"precision mediump float;\n"
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
A.oK(a,j)
A.oG(a,j)
A.oI(a,j)
A.oL(a,j)
A.oR(a,j)
i=a.db
if(i){q=j.a+="// === Environmental ===\n"
q+="\n"
j.a=q
q+="uniform samplerCube envSampler;\n"
j.a=q
j.a=q+"\n"
A.oP(a,j)
A.oQ(a,j)}A.oN(a,j)
q=j.a+="// === Alpha ===\n"
q=j.a=q+"\n"
p=a.y
o=p.a
if(o){q+="uniform float alpha;\n"
j.a=q}n=p.b
if(n){q+="uniform sampler2D alphaTxt;\n"
j.a=q}p=p.c
q=(p?j.a=q+"uniform samplerCube alphaTxt;\n":q)+"float alphaValue()\n"
j.a=q
q=j.a=q+"{\n"
if(!(o||n||p))q=j.a=q+"   return 1.0;\n"
else if(n||p){if(o){if(n){q+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
j.a=q}else if(p){q+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
j.a=q}}else if(n){q+="   float a = texture2D(alphaTxt, txt2D).a;\n"
j.a=q}else if(p){q+="   float a = textureCube(alphaTxt, txtCube).a;\n"
j.a=q}q+="   if (a <= 0.000001) discard;\n"
j.a=q
q+="   return a;\n"
j.a=q}else if(o){q+="   return alpha;\n"
j.a=q}q+="}\n"
j.a=q
j.a=q+"\n"
q=a.k1
if(q){for(p=a.z,o=p.length,m=0;m<p.length;p.length===o||(0,H.q)(p),++m)A.oH(a,p[m],j)
for(p=a.Q,o=p.length,m=0;m<p.length;p.length===o||(0,H.q)(p),++m)A.oJ(a,p[m],j)
for(p=a.ch,o=p.length,m=0;m<p.length;p.length===o||(0,H.q)(p),++m)A.oO(a,p[m],j)
for(p=a.cx,o=p.length,m=0;m<p.length;p.length===o||(0,H.q)(p),++m)A.oS(a,p[m],j)
A.oM(a,j)}p=j.a+="// === Main ===\n"
p+="\n"
j.a=p
p+="void main()\n"
j.a=p
p+="{\n"
j.a=p
p=j.a=p+"   float alpha = alphaValue();\n"
s=s?j.a=p+"   vec3 norm = normal();\n":p
if(i)j.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
l=H.b([],t.s)
if(q){j.a+=u.o
l.push("lightAccum")
i=a.b
if(i.a||i.b||i.c)j.a+="   setAmbientColor();\n"
i=a.c
if(i.a||i.b||i.c)j.a+="   setDiffuseColor();\n"
i=a.d
if(i.a||i.b||i.c)j.a+="   setInvDiffuseColor();\n"
i=a.e
if(i.a||i.b||i.c)j.a+="   setSpecularColor();\n"
for(i=a.z,s=i.length,m=0;m<i.length;i.length===s||(0,H.q)(i),++m){q="barLight"+i[m].a
if(0>=q.length)return H.c(q,0)
j.a+=k+(q[0].toUpperCase()+C.a.a7(q,1))+"Values(norm);\n"}for(i=a.Q,s=i.length,m=0;m<i.length;i.length===s||(0,H.q)(i),++m){q="dirLight"+i[m].a
if(0>=q.length)return H.c(q,0)
j.a+=k+(q[0].toUpperCase()+C.a.a7(q,1))+"Values(norm);\n"}for(i=a.ch,s=i.length,m=0;m<i.length;i.length===s||(0,H.q)(i),++m){q="pointLight"+i[m].a
if(0>=q.length)return H.c(q,0)
j.a+=k+(q[0].toUpperCase()+C.a.a7(q,1))+"Values(norm);\n"}for(i=a.cx,s=i.length,m=0;m<i.length;i.length===s||(0,H.q)(i),++m){q="spotLight"+i[m].a
if(0>=q.length)return H.c(q,0)
j.a+=k+(q[0].toUpperCase()+C.a.a7(q,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}i=a.a
if(i.a||i.b||i.c)l.push("emissionColor()")
i=a.r
if(i.a||i.b||i.c)l.push("reflect(refl)")
i=a.x
if(i.a||i.b||i.c)l.push("refract(refl)")
if(l.length<=0)l.push("vec3(0.0, 0.0, 0.0)")
i=j.a+="   vec4 objClr = vec4("+C.b.p(l," + ")+", alpha);\n"
if(r)i=j.a=i+"   objClr = colorMat*objClr;\n"
i+="   gl_FragColor = objClr;\n"
j.a=i
i=j.a=i+"}\n"
return i.charCodeAt(0)==0?i:i},
oU:function(a,b){var s,r,q
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
oW:function(a,b){var s
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
oV:function(a,b){var s
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
oY:function(a,b){var s,r
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
oZ:function(a,b){var s,r
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
oX:function(a,b){var s
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
p_:function(a,b){var s
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
hs:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.a.a7(a,1)},
kx:function(a,b,c,d,e){var s=new A.fc(H.b([],t.t),a,c,e)
s.f=d
s.e=P.cN(d,0,!1,t.S)
return s},
e3:function e3(a,b,c){this.a=a
this.b=b
this.c=c},
hv:function hv(a){this.a=a},
aj:function aj(a,b,c){this.a=a
this.b=b
this.c=c},
et:function et(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.dZ=_.dY=_.dX=_.dW=_.dV=_.dU=_.dT=_.dS=_.dR=_.dQ=_.dP=_.dO=_.dN=_.dM=_.dL=_.dK=_.dJ=_.by=_.aY=_.aX=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.cg=c
_.ci=d
_.cj=e
_.ck=f
_.cl=g
_.cm=h
_.cn=i
_.co=j
_.iD=_.iC=_.iB=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
b1:function b1(a,b){this.a=a
this.b=b},
b4:function b4(a,b){this.a=a
this.b=b},
b9:function b9(a,b){this.a=a
this.b=b},
bc:function bc(a,b){this.a=a
this.b=b},
ig:function ig(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.aY=b6
_.by=b7},
de:function de(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
df:function df(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dh:function dh(a,b,c,d,e,f,g,h,i,j){var _=this
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
dk:function dk(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d4:function d4(){},
a0:function a0(){},
j3:function j3(a){this.a=a},
c6:function c6(a,b,c){this.a=a
this.c=b
this.d=c},
fe:function fe(a,b,c){this.a=a
this.c=b
this.d=c},
ff:function ff(a,b,c){this.a=a
this.c=b
this.d=c},
fg:function fg(a,b,c){this.a=a
this.c=b
this.d=c},
fc:function fc(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
db:function db(a,b,c){this.a=a
this.c=b
this.d=c},
fd:function fd(a,b,c){this.a=a
this.c=b
this.d=c},
dc:function dc(a,b,c){this.a=a
this.c=b
this.d=c},
dd:function dd(a,b,c){this.a=a
this.c=b
this.d=c},
fh:function fh(a,b,c){this.a=a
this.c=b
this.d=c},
dg:function dg(a,b,c){this.a=a
this.c=b
this.d=c},
c7:function c7(a,b,c){this.a=a
this.c=b
this.d=c},
di:function di(a,b,c){this.a=a
this.c=b
this.d=c},
dj:function dj(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jR:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
dO:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.w(g,f+a2,e+a3)
i.a=d
s=a2-a3
r=a3-a4
q=a4-a2
p=i.b=new V.w(s+a4,r+a2,q+a3)
o=new V.w(s-a4,r-a2,q-a3)
i.c=o
n=i.d=new V.w(h-a4,f-a2,e-a3)
if(g>0){i.d=p
i.b=n
g=p
h=n}else{g=n
h=p}for(e=g,g=h,h=d,f=o,m=0;m<a5;++m,l=e,e=h,h=g,g=f,f=l){i.a=g
i.b=f
i.c=e
i.d=h}k=F.jR(h)
j=F.jR(g)
a.cz(F.ml(a0,a1,new F.jO(i,F.jR(f),F.jR(e),j,k,c),b))},
py:function(a,b,c){var s=null,r=new F.kg(b,new F.kh()),q=F.lu()
F.dO(q,s,r,c,a,1,0,0,1)
F.dO(q,s,r,c,a,0,1,0,3)
F.dO(q,s,r,c,a,0,0,1,2)
F.dO(q,s,r,c,a,-1,0,0,0)
F.dO(q,s,r,c,a,0,-1,0,0)
F.dO(q,s,r,c,a,0,0,-1,3)
q.aW()
q.hW(new F.jm(),new F.iy())
return q},
pn:function(a,b){return F.ml(b,a,new F.k3(new F.k4()),null)},
ml:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a<1)throw H.d(P.f("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.d(P.f("Must have 1 or more divisions of the height for a surface."))
s=F.lu()
r=t.k
q=H.b([],r)
for(p=0;p<=b;++p){o=p/b
n=s.a
if(n==null)n=s.a=new F.A(s,H.b([],r))
if(o<0)m=0
else m=o>1?1:o
l=n.du(new V.bu(m,0,0,1),new V.a4(o,1))
c.$3(l,o,0)
q.push(l.cf(d))}for(p=1;p<=a;++p){k=p/a
for(n=k>1,m=k<0,j=1-k,i=0;i<=b;++i){o=i/b
h=s.a
if(h==null)h=s.a=new F.A(s,H.b([],r))
if(o<0)g=0
else g=o>1?1:o
if(m)f=0
else f=n?1:k
if(m)e=0
else e=n?1:k
l=h.du(new V.bu(g,f,e,1),new V.a4(o,j))
c.$3(l,o,k)
q.push(l.cf(d))}}s.gP().hs(a+1,b+1,q)
return s},
lu:function(){return new F.iH()},
lI:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cb()
h=$.mF()
s=$.bp()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.bo().a)!==0)q.r=e
if((r&$.bn().a)!==0)q.x=b
if((r&$.bq().a)!==0)q.y=f
if((r&$.br().a)!==0)q.z=g
if((r&$.mG().a)!==0)q.Q=c
if((r&$.cn().a)!==0)q.ch=i
if((r&$.bm().a)!==0)q.cx=a
return q},
jO:function jO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kh:function kh(){},
kg:function kg(a,b){this.a=a
this.b=b},
k4:function k4(){},
k3:function k3(a){this.a=a},
aB:function aB(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hY:function hY(){},
iM:function iM(){},
eq:function eq(){this.b=this.a=null},
i6:function i6(){},
j2:function j2(){},
eL:function eL(){this.a=null},
iH:function iH(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iI:function iI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
d5:function d5(a,b){this.a=a
this.b=b},
c2:function c2(a,b){this.a=a
this.b=b},
bD:function bD(a,b){this.a=a
this.b=b},
cb:function cb(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
jq:function jq(a){this.a=a},
jp:function jp(a){this.a=a},
A:function A(a,b){this.a=a
this.b=!1
this.c=b},
cc:function cc(a,b,c){this.b=a
this.c=b
this.d=c},
jk:function jk(a,b){this.a=a
this.b=b},
jl:function jl(a,b){this.a=a
this.b=b},
be:function be(a,b){this.b=a
this.c=b},
jn:function jn(){},
jm:function jm(){},
jo:function jo(){},
iy:function iy(){},
dn:function dn(a){this.b=a}},T={bE:function bE(){},f3:function f3(){},f4:function f4(a){var _=this
_.a=0
_.b=a
_.d=_.c=!1
_.y=null},f5:function f5(a){var _=this
_.a=0
_.b=a
_.c=!1
_.d=0
_.e=null},iS:function iS(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0},iU:function iU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},iT:function iT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},Q={
pu:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9="testCanvas",b0=null,b1=1000,b2=34067,b3=V.nv("Test 049"),b4=W.kl()
b4.className="pageLargeCanvas"
b4.id=a9
b3.a.appendChild(b4).toString
s=t.s
b3.dv(H.b(["This is an initial test (still has bugs) of a basic sphere physics collision. ","This has sphere/sphere collision and sphere/plane collision. Some of the bugs is that ","the spheres will still pass through eachother and the plane and there are no rotations yet."],s))
b3.hq(H.b(["options"],s))
b3.dv(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(a9)
if(r==null)H.h(P.f("Failed to find an element with the identifier, testCanvas."))
q=E.nC(r,!0,!0,!0,!1)
p=E.kn()
b3=q.f
o=b3.hV("../resources/Grass.png",!0,!0)
n=U.hH(V.lh(0,-5,0).M(0,V.b8(b1,0,0,0,0,1,0,0,0,0,b1,0,0,0,0,1)).M(0,V.lg(-1.5707963267948966)))
m=O.lc()
l=new V.b7(b1,0,0,0,b1,0,0,0,1)
if(!J.J(m.b,l)){k=m.b
j=k==null&&!0
if(j)m.a=null
m.b=l
m.W(new D.D("texture2DMatrix",k,l))}m.gcu().l(0,D.l5(new V.S(1,1,1),U.hH(V.li(1,-3,-1,b0))))
l=m.gbe()
l.saD(0,new V.S(0.5,0.5,0.5))
l=m.gbg()
l.saD(0,new V.S(0.5,0.5,0.5))
m.gbe().sep(o)
m.gbg().sep(o)
l=E.kn()
l.sbK(0,F.pn(20,20))
l.saH(n)
l.scJ(m)
p.y.l(0,l)
l=b3.a
k=l.createTexture()
k.toString
l.bindTexture(b2,k)
l.texParameteri(b2,10242,10497)
l.texParameteri(b2,10243,10497)
l.texParameteri(b2,10241,9729)
l.texParameteri(b2,10240,9729)
l.bindTexture(b2,b0)
i=new T.f5(k)
b3.aS(i,k,"../resources/earthColor/posx.png",34069,!1,!1)
b3.aS(i,k,"../resources/earthColor/negx.png",34070,!1,!1)
b3.aS(i,k,"../resources/earthColor/posy.png",34071,!1,!1)
b3.aS(i,k,"../resources/earthColor/negy.png",34072,!1,!1)
b3.aS(i,k,"../resources/earthColor/posz.png",34073,!1,!1)
b3.aS(i,k,"../resources/earthColor/negz.png",34074,!1,!1)
h=O.lc()
h.gcu().l(0,D.l5(new V.S(1,1,1),U.hH(V.li(-1,-1,-1,b0))))
k=h.gbe()
k.saD(0,new V.S(0.5,0.5,0.5))
b3=h.gbg()
b3.saD(0,new V.S(0.5,0.5,0.5))
h.gbe().sbn(i)
h.gbg().sbn(i)
b3=h.gcO()
l=b3.c
b3.bt(new A.aj(!0,l.b,l.c))
b3.dj(10)
b3=t.a0
l=H.b([],b3)
k=new V.w(0,1,0)
g=Math.sqrt(k.U(k))
k=0/g
j=t.t
f=new Q.e8(l,new V.eJ(k,1/g,k,-5),H.b([],j),H.b([],t.gf),H.b([],b3),H.b([],t.bP),H.b([],b3),H.b([],b3),H.b([],j))
e=E.kn()
e.saH(f)
e.scJ(h)
j=q.x
b3=X.cI()
k=X.cI()
l=X.cI()
d=X.cI()
c=X.cI()
b=X.cI()
a=U.e9()
a0=U.e9()
a1=U.e9()
a2=new U.dm(b3,k,l,d,c,b,a,a0,a1,V.it(),V.it(),V.aC())
b3.aa(39)
b3.aa(68)
a3=a2.gfF()
b3.gb0().l(0,a3)
k.aa(37)
k.aa(65)
k.gb0().l(0,a3)
l.aa(81)
l.gb0().l(0,a3)
d.aa(69)
d.gb0().l(0,a3)
c.aa(40)
c.aa(83)
c.gb0().l(0,a3)
b.aa(38)
b.aa(87)
b.gb0().l(0,a3)
a.sbj(30)
a.saE(0)
a3=a2.gaM()
a.gn().l(0,a3)
a0.sbj(30)
a0.saE(0)
a0.gn().l(0,a3)
a1.sbj(30)
a1.saE(0)
a1.gn().l(0,a3)
b3.ar(j)
k.ar(j)
l.ar(j)
d.ar(j)
c.ar(j)
b.ar(j)
b3=U.e9()
l=U.e9()
k=$.jg
if(k==null)k=$.jg=new V.ao(0,0)
a4=new U.dl(b3,l,new X.aP(!1,!1,!1),k,V.aC())
b3.scL(0,!0)
b3.scw(6.283185307179586)
b3.scA(0)
b3.sa_(0,0)
b3.sbj(100)
b3.sa0(0)
b3.saE(0.5)
k=a4.gaM()
b3.gn().l(0,k)
l.scL(0,!0)
l.scw(6.283185307179586)
l.scA(0)
l.sa_(0,0)
l.sbj(100)
l.sa0(0)
l.saE(0.5)
l.gn().l(0,k)
k=new X.aP(!1,!1,!1)
if(!a4.d.m(0,k)){a5=a4.d
a4.d=k
a4.O(new D.D("modifiers",a5,k))}a4.ar(j)
b3.scw(1.5707963267948966)
b3.scA(-1.5707963267948966)
b3.saE(1)
l.saE(1)
b3.scL(0,!1)
a4.gn().l(0,new Q.kb(a2,a4))
b3=t.eJ
l=H.b([a2,a4],b3)
a6=new U.bR(V.aC(),H.b([],b3))
a6.br(a6.gfg(),a6.gfV())
a6.bv(0,l)
b3=O.hF(t.l)
l=new M.ef(b3)
b3.br(l.gfq(),l.gft())
a7=X.n3(b0)
a8=new X.eH(1.0471975511965976,0.1)
a8.saH(b0)
k=a8.c
$.C().toString
if(!(Math.abs(k-1.0471975511965976)<1e-9)){a8.c=1.0471975511965976
a8.aP(new D.D("fov",k,1.0471975511965976))}k=a8.d
$.C().toString
if(!(Math.abs(k-0.1)<1e-9)){a8.d=0.1
a8.aP(new D.D("near",k,0.1))}k=a8.e
$.C().toString
if(!(Math.abs(k-2000)<1e-9)){a8.e=2000
a8.aP(new D.D("far",k,2000))}k=l.b
if(k!==a8){if(k!=null)k.gn().K(0,l.gaN())
a5=l.b
l.b=a8
a8.gn().l(0,l.gaN())
l.aO(new D.D("camera",a5,l.b))}k=l.c
if(k!==a7){if(k!=null)k.gn().K(0,l.gaN())
a5=l.c
l.c=a7
a7.gn().l(0,l.gaN())
l.aO(new D.D("target",a5,l.c))}b3.l(0,p)
b3.l(0,e)
b3=l.b
if(b3!=null)b3.saH(a6)
b3=q.d
if(b3!==l){if(b3!=null)b3.gn().K(0,q.gcU())
q.d=l
l.gn().l(0,q.gcU())
q.cV()}j.gb_(j).gdG().l(0,new Q.kc(a2,a4,e,f))
r=s.getElementById("options")
if(r==null)H.h(P.f("Failed to find options for CheckGroup"))
new V.hD("options",!0,r,H.b([],t.dh)).hp(0,"Mouse Locking",new Q.kd(q),!1)
V.px(q)},
co:function co(a,b,c,d){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=!0
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=d
_.z=null},
e8:function e8(a,b,c,d,e,f,g,h,i){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
kb:function kb(a,b){this.a=a
this.b=b},
kc:function kc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kd:function kd(a){this.a=a}}
var w=[C,H,J,P,W,K,L,O,Y,E,Z,D,X,V,U,M,A,F,T,Q]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ks.prototype={}
J.a.prototype={
m:function(a,b){return a===b},
gB:function(a){return H.d0(a)},
i:function(a){return"Instance of '"+H.d1(a)+"'"}}
J.el.prototype={
i:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$iaz:1}
J.cG.prototype={
m:function(a,b){return null==b},
i:function(a){return"null"},
gB:function(a){return 0}}
J.b5.prototype={
gB:function(a){return 0},
i:function(a){return String(a)},
$ila:1}
J.eI.prototype={}
J.c8.prototype={}
J.aL.prototype={
i:function(a){var s=a[$.mr()]
if(s==null)return this.eB(a)
return"JavaScript function for "+J.dZ(s)}}
J.t.prototype={
cF:function(a,b){if(!!a.fixed$length)H.h(P.B("removeAt"))
if(b<0||b>=a.length)throw H.d(P.eN(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var s
if(!!a.fixed$length)H.h(P.B("remove"))
for(s=0;s<a.length;++s)if(J.J(a[s],b)){a.splice(s,1)
return!0}return!1},
bv:function(a,b){if(!!a.fixed$length)H.h(P.B("addAll"))
this.eS(a,b)
return},
eS:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.d(P.b3(a))
for(s=0;s<r;++s)a.push(b[s])},
D:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.d(P.b3(a))}},
p:function(a,b){var s,r,q=a.length,p=P.cN(q,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.v(a[s])
if(s>=q)return H.c(p,s)
p[s]=r}return p.join(b)},
hT:function(a){return this.p(a,"")},
hN:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.d(P.b3(a))}return s},
hO:function(a,b,c){return this.hN(a,b,c,t.z)},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
ghM:function(a){if(a.length>0)return a[0]
throw H.d(H.l9())},
gaG:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.d(H.l9())},
b8:function(a,b){if(!!a.immutable$list)H.h(P.B("sort"))
H.ny(a,b==null?J.ox():b)},
ey:function(a){return this.b8(a,null)},
H:function(a,b){var s
for(s=0;s<a.length;++s)if(J.J(a[s],b))return!0
return!1},
i:function(a){return P.kp(a,"[","]")},
gR:function(a){return new J.ab(a,a.length)},
gB:function(a){return H.d0(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.h(P.B("set length"))
if(b>a.length)H.kN(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.d(H.cl(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.h(P.B("indexed set"))
if(b>=a.length||b<0)throw H.d(H.cl(a,b))
a[b]=c},
$ix:1,
$im:1,
$ik:1,
$ip:1}
J.i3.prototype={}
J.ab.prototype={
gG:function(a){return H.U(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.d(H.q(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bV.prototype={
ab:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbB(b)
if(this.gbB(a)===s)return 0
if(this.gbB(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbB:function(a){return a===0?1/a<0:a<0},
io:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.d(P.B(""+a+".toInt()"))},
cq:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.d(P.B(""+a+".floor()"))},
ao:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.B(""+a+".round()"))},
cK:function(a,b){var s
if(b>20)throw H.d(P.a6(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbB(a))return"-"+s
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
bq:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
eC:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dn(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.dn(a,b)},
dn:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.d(P.B("Result of truncating division is "+H.v(s)+": "+H.v(a)+" ~/ "+b))},
aU:function(a,b){var s
if(a>0)s=this.dm(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hg:function(a,b){if(b<0)throw H.d(H.dT(b))
return this.dm(a,b)},
dm:function(a,b){return b>31?0:a>>>b},
$iM:1,
$ia2:1}
J.cF.prototype={$ii:1}
J.em.prototype={}
J.by.prototype={
T:function(a,b){if(b<0)throw H.d(H.cl(a,b))
if(b>=a.length)H.h(H.cl(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.d(H.cl(a,b))
return a.charCodeAt(b)},
Y:function(a,b){return a+b},
b4:function(a,b,c,d){var s=P.ba(b,c,a.length),r=a.substring(0,b),q=a.substring(s)
return r+d+q},
a5:function(a,b,c){var s
if(c<0||c>a.length)throw H.d(P.a6(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a4:function(a,b){return this.a5(a,b,0)},
q:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.eN(b,null))
if(b>c)throw H.d(P.eN(b,null))
if(c>a.length)throw H.d(P.eN(c,null))
return a.substring(b,c)},
a7:function(a,b){return this.q(a,b,null)},
M:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.N)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
af:function(a,b){var s=b-a.length
if(s<=0)return a
return this.M(" ",s)+a},
i5:function(a,b,c){var s=b-a.length
if(s<=0)return a
return a+this.M(c,s)},
bz:function(a,b,c){var s
if(c<0||c>a.length)throw H.d(P.a6(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
e4:function(a,b){return this.bz(a,b,0)},
hz:function(a,b,c){var s=a.length
if(c>s)throw H.d(P.a6(c,0,s,null,null))
return H.mj(a,b,c)},
H:function(a,b){return this.hz(a,b,0)},
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
$ix:1,
$ir:1}
H.cJ.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.R.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.a.T(this.a,b)}}
H.m.prototype={}
H.bW.prototype={
gG:function(a){return H.U(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=J.bI(q),o=p.gj(q)
if(r.b!==o)throw H.d(P.b3(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.I(q,s);++r.c
return!0}}
H.aN.prototype={
gR:function(a){return new H.es(J.aE(this.a),this.b)},
gj:function(a){return J.b0(this.a)},
I:function(a,b){return this.b.$1(J.kj(this.a,b))}}
H.cA.prototype={$im:1}
H.es.prototype={
t:function(){var s=this,r=s.b
if(r.t()){s.a=s.c.$1(r.gG(r))
return!0}s.a=null
return!1},
gG:function(a){return H.U(this).Q[1].a(this.a)}}
H.dp.prototype={
gR:function(a){return new H.fq(J.aE(this.a),this.b)}}
H.fq.prototype={
t:function(){var s,r
for(s=this.a,r=this.b;s.t();)if(r.$1(s.gG(s)))return!0
return!1},
gG:function(a){var s=this.a
return s.gG(s)}}
H.cB.prototype={}
H.fk.prototype={
k:function(a,b,c){throw H.d(P.B("Cannot modify an unmodifiable list"))}}
H.c9.prototype={}
H.cv.prototype={
i:function(a){return P.kv(this)},
k:function(a,b,c){H.n_()},
$iG:1}
H.cw.prototype={
gj:function(a){return this.a},
cd:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.cd(0,b))return null
return this.d5(b)},
d5:function(a){return this.b[a]},
D:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.d5(q))}}}
H.j0.prototype={
ae:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.cZ.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.eo.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.fj.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.iz.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.h4.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bN.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.mn(r==null?"unknown":r)+"'"},
giu:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iR.prototype={}
H.iN.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.mn(s)+"'"}}
H.cp.prototype={
m:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.cp))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gB:function(a){var s,r=this.c
if(r==null)s=H.d0(this.a)
else s=typeof r!=="object"?J.kk(r):H.d0(r)
return(s^H.d0(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.v(this.d)+"' of "+("Instance of '"+H.d1(s)+"'")}}
H.eQ.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.W.prototype={
gj:function(a){return this.a},
gac:function(a){return new H.cL(this,H.U(this).L("cL<1>"))},
git:function(a){var s=this,r=H.U(s)
return H.ne(s.gac(s),new H.i4(s),r.c,r.Q[1])},
cd:function(a,b){var s=this.b
if(s==null)return!1
return this.f0(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bs(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bs(p,b)
q=r==null?n:r.b
return q}else return o.hR(b)},
hR:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.d6(p,q.e5(a))
r=q.e6(s,a)
if(r<0)return null
return s[r].b},
k:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cZ(s==null?q.b=q.bX():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cZ(r==null?q.c=q.bX():r,b,c)}else q.hS(b,c)},
hS:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bX()
s=p.e5(a)
r=p.d6(o,s)
if(r==null)p.c4(o,s,[p.bY(a,b)])
else{q=p.e6(r,a)
if(q>=0)r[q].b=b
else r.push(p.bY(a,b))}},
D:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.d(P.b3(s))
r=r.c}},
cZ:function(a,b,c){var s=this.bs(a,b)
if(s==null)this.c4(a,b,this.bY(b,c))
else s.b=c},
bY:function(a,b){var s=this,r=new H.i7(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
e5:function(a){return J.kk(a)&0x3ffffff},
e6:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.J(a[r].a,b))return r
return-1},
i:function(a){return P.kv(this)},
bs:function(a,b){return a[b]},
d6:function(a,b){return a[b]},
c4:function(a,b,c){a[b]=c},
f3:function(a,b){delete a[b]},
f0:function(a,b){return this.bs(a,b)!=null},
bX:function(){var s="<non-identifier-key>",r=Object.create(null)
this.c4(r,s,r)
this.f3(r,s)
return r}}
H.i4.prototype={
$1:function(a){var s=this.a
return H.U(s).Q[1].a(s.h(0,a))},
$S:function(){return H.U(this.a).L("2(1)")}}
H.i7.prototype={}
H.cL.prototype={
gj:function(a){return this.a.a},
gR:function(a){var s=this.a,r=new H.er(s,s.r)
r.c=s.e
return r}}
H.er.prototype={
gG:function(a){return H.U(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.d(P.b3(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.k6.prototype={
$1:function(a){return this.a(a)},
$S:31}
H.k7.prototype={
$2:function(a,b){return this.a(a,b)},
$S:53}
H.k8.prototype={
$1:function(a){return this.a(a)},
$S:44}
H.en.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ilo:1}
H.cV.prototype={$icV:1}
H.Z.prototype={$iZ:1}
H.bZ.prototype={
gj:function(a){return a.length},
$ix:1,
$iz:1}
H.bB.prototype={
h:function(a,b){H.aY(b,a,a.length)
return a[b]},
k:function(a,b,c){H.aY(b,a,a.length)
a[b]=c},
$im:1,
$ik:1,
$ip:1}
H.cW.prototype={
k:function(a,b,c){H.aY(b,a,a.length)
a[b]=c},
$im:1,
$ik:1,
$ip:1}
H.ey.prototype={
h:function(a,b){H.aY(b,a,a.length)
return a[b]}}
H.ez.prototype={
h:function(a,b){H.aY(b,a,a.length)
return a[b]}}
H.eA.prototype={
h:function(a,b){H.aY(b,a,a.length)
return a[b]}}
H.eB.prototype={
h:function(a,b){H.aY(b,a,a.length)
return a[b]}}
H.eC.prototype={
h:function(a,b){H.aY(b,a,a.length)
return a[b]}}
H.cX.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aY(b,a,a.length)
return a[b]}}
H.bC.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aY(b,a,a.length)
return a[b]},
$ibC:1,
$ic5:1}
H.dw.prototype={}
H.dx.prototype={}
H.dy.prototype={}
H.dz.prototype={}
H.av.prototype={
L:function(a){return H.hg(v.typeUniverse,this,a)},
ba:function(a){return H.o4(v.typeUniverse,this,a)}}
H.fH.prototype={}
H.fD.prototype={
i:function(a){return this.a}}
H.dH.prototype={}
P.jt.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:43}
P.js.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:41}
P.ju.prototype={
$0:function(){this.a.$0()},
$S:12}
P.jv.prototype={
$0:function(){this.a.$0()},
$S:12}
P.dG.prototype={
eO:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ck(new P.jI(this,b),0),a)
else throw H.d(P.B("`setTimeout()` not found."))},
eP:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ck(new P.jH(this,a,Date.now(),b),0),a)
else throw H.d(P.B("Periodic timer."))},
$iiX:1}
P.jI.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jH.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.eC(s,o)}q.c=p
r.d.$1(q)},
$S:12}
P.ce.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.v(this.a)+")"}}
P.cf.prototype={
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
if(r instanceof P.ce){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.c(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aE(s)
if(o instanceof P.cf){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dD.prototype={
gR:function(a){return new P.cf(this.a())}}
P.fr.prototype={}
P.c3.prototype={}
P.eZ.prototype={}
P.jN.prototype={}
P.jZ.prototype={
$0:function(){var s=H.d(this.a)
s.stack=this.b.i(0)
throw s},
$S:3}
P.jA.prototype={
ik:function(a){var s,r,q,p=null
try{if(C.i===$.aD){a.$0()
return}P.p1(p,p,this,a)}catch(q){s=H.bl(q)
r=H.kU(q)
P.m5(p,p,this,s,r)}},
il:function(a,b){var s,r,q,p=null
try{if(C.i===$.aD){a.$1(b)
return}P.p2(p,p,this,a,b)}catch(q){s=H.bl(q)
r=H.kU(q)
P.m5(p,p,this,s,r)}},
im:function(a,b){return this.il(a,b,t.z)},
hu:function(a){return new P.jB(this,a)},
dC:function(a,b){return new P.jC(this,a,b)}}
P.jB.prototype={
$0:function(){return this.a.ik(this.b)},
$S:3}
P.jC.prototype={
$1:function(a){return this.a.im(this.b,a)},
$S:function(){return this.c.L("~(0)")}}
P.ds.prototype={
gR:function(a){var s=new P.dt(this,this.r)
s.c=this.e
return s},
gj:function(a){return this.a},
H:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.eY(b)
return r}},
eY:function(a){var s=this.d
if(s==null)return!1
return this.bU(s[this.bQ(a)],a)>=0},
l:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.d0(s==null?q.b=P.kC():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.d0(r==null?q.c=P.kC():r,b)}else return q.eR(0,b)},
eR:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.kC()
s=q.bQ(b)
r=p[s]
if(r==null)p[s]=[q.bP(b)]
else{if(q.bU(r,b)>=0)return!1
r.push(q.bP(b))}return!0},
K:function(a,b){if((b&1073741823)===b)return this.h5(this.c,b)
else return this.h4(0,b)},
h4:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bQ(b)
r=n[s]
q=o.bU(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dr(p)
return!0},
d0:function(a,b){if(a[b]!=null)return!1
a[b]=this.bP(b)
return!0},
h5:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.dr(s)
delete a[b]
return!0},
d9:function(){this.r=this.r+1&1073741823},
bP:function(a){var s,r=this,q=new P.jz(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.d9()
return q},
dr:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.d9()},
bQ:function(a){return J.kk(a)&1073741823},
bU:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.J(a[r].a,b))return r
return-1}}
P.jz.prototype={}
P.dt.prototype={
gG:function(a){return H.U(this).c.a(this.d)},
t:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.d(P.b3(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cE.prototype={}
P.i8.prototype={
$2:function(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:9}
P.cM.prototype={$im:1,$ik:1,$ip:1}
P.j.prototype={
gR:function(a){return new H.bW(a,this.gj(a))},
I:function(a,b){return this.h(a,b)},
D:function(a,b){var s,r=this.gj(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gj(a))throw H.d(P.b3(a))}},
ge7:function(a){return this.gj(a)===0},
iq:function(a,b){var s,r,q,p,o=this
if(o.ge7(a)){s=J.kq(0,H.aZ(a).L("j.E"))
return s}r=o.h(a,0)
q=P.cN(o.gj(a),r,!0,H.aZ(a).L("j.E"))
for(p=1;p<o.gj(a);++p){s=o.h(a,p)
if(p>=q.length)return H.c(q,p)
q[p]=s}return q},
ip:function(a){return this.iq(a,!0)},
hK:function(a,b,c,d){var s
H.aZ(a).L("j.E").a(d)
P.ba(b,c,this.gj(a))
for(s=b;s<c;++s)this.k(a,s,d)},
i:function(a){return P.kp(a,"[","]")}}
P.cP.prototype={}
P.ic.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.v(a)
r.a=s+": "
r.a+=H.v(b)},
$S:40}
P.O.prototype={
D:function(a,b){var s,r,q
for(s=J.aE(this.gac(a)),r=H.aZ(a).L("O.V");s.t();){q=s.gG(s)
b.$2(q,r.a(this.h(a,q)))}},
gj:function(a){return J.b0(this.gac(a))},
i:function(a){return P.kv(a)},
$iG:1}
P.hh.prototype={
k:function(a,b,c){throw H.d(P.B("Cannot modify unmodifiable map"))}}
P.cQ.prototype={
h:function(a,b){return J.l0(this.a,b)},
k:function(a,b,c){J.ki(this.a,b,c)},
D:function(a,b){J.dY(this.a,b)},
gj:function(a){return J.b0(this.a)},
i:function(a){return J.dZ(this.a)},
$iG:1}
P.ca.prototype={}
P.d3.prototype={
i:function(a){return P.kp(this,"{","}")},
I:function(a,b){var s,r,q,p,o="index"
H.pe(b,o,t.S)
P.ln(b,o)
for(s=P.nP(this,this.r),r=H.U(s).c,q=0;s.t();){p=r.a(s.d)
if(b===q)return p;++q}throw H.d(P.N(b,this,o,null,q))}}
P.dA.prototype={$im:1,$ik:1}
P.du.prototype={}
P.dL.prototype={}
P.dN.prototype={}
P.je.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.bl(r)}return null},
$S:24}
P.jd.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.bl(r)}return null},
$S:24}
P.hy.prototype={
hX:function(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a4=P.ba(a3,a4,a2.length)
s=$.mI()
for(r=s.length,q=a3,p=q,o=null,n=-1,m=-1,l=0;q<a4;q=k){k=q+1
j=C.a.F(a2,q)
if(j===37){i=k+2
if(i<=a4){h=H.k5(C.a.F(a2,k))
g=H.k5(C.a.F(a2,k+1))
f=h*16+g-(g&256)
if(f===37)f=-1
k=i}else f=-1}else f=j
if(0<=f&&f<=127){if(f<0||f>=r)return H.c(s,f)
e=s[f]
if(e>=0){f=C.a.T("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e)
if(f===j)continue
j=f}else{if(e===-1){if(n<0){d=o==null?null:o.a.length
if(d==null)d=0
n=d+(q-p)
m=q}++l
if(j===61)continue}j=f}if(e!==-2){if(o==null){o=new P.a_("")
d=o}else d=o
c=d.a+=C.a.q(a2,p,q)
d.a=c+H.aS(j)
p=k
continue}}throw H.d(P.a5("Invalid base64 data",a2,q))}if(o!=null){r=o.a+=C.a.q(a2,p,a4)
d=r.length
if(n>=0)P.l1(a2,m,a4,n,l,d)
else{b=C.c.bq(d-1,4)+1
if(b===1)throw H.d(P.a5(a0,a2,a4))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return C.a.b4(a2,a3,a4,r.charCodeAt(0)==0?r:r)}a=a4-a3
if(n>=0)P.l1(a2,m,a4,n,l,a)
else{b=C.c.bq(a,4)
if(b===1)throw H.d(P.a5(a0,a2,a4))
if(b>1)a2=C.a.b4(a2,a4,a4,b===2?"==":"=")}return a2}}
P.hz.prototype={}
P.e7.prototype={}
P.eb.prototype={}
P.hS.prototype={}
P.jb.prototype={
ghJ:function(){return C.O}}
P.jf.prototype={
ce:function(a){var s,r,q,p=P.ba(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.jM(r)
if(q.f5(a,0,p)!==p){C.a.T(a,p-1)
q.c8()}return new Uint8Array(r.subarray(0,H.oo(0,q.b,s)))}}
P.jM.prototype={
c8:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.c(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.c(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.c(r,q)
r[q]=189},
ho:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.c(r,q)
r[q]=s>>>18|240
q=n.b=p+1
if(p>=o)return H.c(r,p)
r[p]=s>>>12&63|128
p=n.b=q+1
if(q>=o)return H.c(r,q)
r[q]=s>>>6&63|128
n.b=p+1
if(p>=o)return H.c(r,p)
r[p]=s&63|128
return!0}else{n.c8()
return!1}},
f5:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.T(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.F(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.ho(p,C.a.F(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.c8()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.c(s,o)
s[o]=p>>>6|192
l.b=m+1
s[m]=p&63|128}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.c(s,o)
s[o]=p>>>12|224
o=l.b=m+1
if(m>=r)return H.c(s,m)
s[m]=p>>>6&63|128
l.b=o+1
if(o>=r)return H.c(s,o)
s[o]=p&63|128}}}return q}}
P.jc.prototype={
ce:function(a){var s=this.a,r=P.nG(s,a,0,null)
if(r!=null)return r
return new P.jL(s).hA(a,0,null,!0)}}
P.jL.prototype={
hA:function(a,b,c,d){var s,r,q,p,o=this,n=P.ba(b,c,J.b0(a))
if(b===n)return""
s=P.oj(a,b,n)
r=o.bR(s,0,n-b,!0)
q=o.b
if((q&1)!==0){p=P.ok(q)
o.b=0
throw H.d(P.a5(p,a,b+o.c))}return r},
bR:function(a,b,c,d){var s,r,q=this
if(c-b>1000){s=C.c.a2(b+c,2)
r=q.bR(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bR(a,s,c,d)}return q.hE(a,b,c,d)},
hE:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.a_(""),f=b+1,e=a.length
if(b<0||b>=e)return H.c(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.F("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.F(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.aS(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.aS(j)
break
case 65:g.a+=H.aS(j);--f
break
default:p=g.a+=H.aS(j)
g.a=p+H.aS(j)
break}else{k.b=i
k.c=f-1
return""}i=0}if(f===c)break $label0$0
o=f+1
if(f<0||f>=e)return H.c(a,f)
s=a[f]}o=f+1
if(f<0||f>=e)return H.c(a,f)
s=a[f]
if(s<128){while(!0){if(!(o<c)){n=c
break}m=o+1
if(o<0||o>=e)return H.c(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-f<20)for(l=f;l<n;++l){if(l>=e)return H.c(a,l)
g.a+=H.aS(a[l])}else g.a+=P.f0(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.aS(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.X.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.X&&this.a===b.a&&!0},
ab:function(a,b){return C.c.ab(this.a,b.a)},
gB:function(a){var s=this.a
return(s^C.c.aU(s,30))&1073741823},
i:function(a){var s=this,r=P.n0(H.np(s)),q=P.ed(H.nn(s)),p=P.ed(H.nj(s)),o=P.ed(H.nk(s)),n=P.ed(H.nm(s)),m=P.ed(H.no(s)),l=P.n1(H.nl(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bv.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.bv&&this.a===b.a},
gB:function(a){return C.c.gB(this.a)},
ab:function(a,b){return C.c.ab(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hQ(),o=this.a
if(o<0)return"-"+new P.bv(0-o).i(0)
s=p.$1(C.c.a2(o,6e7)%60)
r=p.$1(C.c.a2(o,1e6)%60)
q=new P.hP().$1(o%1e6)
return""+C.c.a2(o,36e8)+":"+s+":"+r+"."+q}}
P.hP.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:15}
P.hQ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:15}
P.H.prototype={}
P.e2.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.hV(s)
return"Assertion failed"}}
P.fb.prototype={}
P.eD.prototype={
i:function(a){return"Throw of null."}}
P.aF.prototype={
gbT:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbS:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbT()+o+m
if(!q.a)return l
s=q.gbS()
r=P.hV(q.b)
return l+s+": "+r}}
P.d2.prototype={
gbT:function(){return"RangeError"},
gbS:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.v(q):""
else if(q==null)s=": Not greater than or equal to "+H.v(r)
else if(q>r)s=": Not in inclusive range "+H.v(r)+".."+H.v(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.v(r)
return s}}
P.ej.prototype={
gbT:function(){return"RangeError"},
gbS:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj:function(a){return this.f}}
P.fl.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fi.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.eX.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ea.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hV(s)+"."}}
P.eG.prototype={
i:function(a){return"Out of Memory"},
$iH:1}
P.d7.prototype={
i:function(a){return"Stack Overflow"},
$iH:1}
P.ec.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.fE.prototype={
i:function(a){return"Exception: "+this.a}}
P.i0.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.q(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.F(d,o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}f=r>1?f+(" (at line "+r+", character "+(e-q+1)+")\n"):f+(" (at character "+(e+1)+")\n")
m=d.length
for(o=e;o<m;++o){n=C.a.T(d,o)
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
i=""}h=C.a.q(d,k,l)
return f+j+h+i+"\n"+C.a.M(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.v(e)+")"):f}}
P.k.prototype={
gj:function(a){var s,r=this.gR(this)
for(s=0;r.t();)++s
return s},
I:function(a,b){var s,r,q
P.ln(b,"index")
for(s=this.gR(this),r=0;s.t();){q=s.gG(s)
if(b===r)return q;++r}throw H.d(P.N(b,this,"index",null,r))},
i:function(a){return P.n5(this,"(",")")}}
P.ek.prototype={}
P.ae.prototype={
gB:function(a){return P.P.prototype.gB.call(C.R,this)},
i:function(a){return"null"}}
P.P.prototype={constructor:P.P,$iP:1,
m:function(a,b){return this===b},
gB:function(a){return H.d0(this)},
i:function(a){return"Instance of '"+H.d1(this)+"'"},
toString:function(){return this.i(this)}}
P.a_.prototype={
gj:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.j9.prototype={
$2:function(a,b){var s,r,q,p=C.a.e4(b,"=")
if(p===-1){if(b!=="")J.ki(a,P.kL(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.q(b,0,p)
r=C.a.a7(b,p+1)
q=this.a
J.ki(a,P.kL(s,0,s.length,q,!0),P.kL(r,0,r.length,q,!0))}return a},
$S:39}
P.j6.prototype={
$2:function(a,b){throw H.d(P.a5("Illegal IPv4 address, "+a,this.a,b))},
$S:38}
P.j7.prototype={
$2:function(a,b){throw H.d(P.a5("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:37}
P.j8.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.k9(C.a.q(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:35}
P.bH.prototype={
gc6:function(){var s,r,q,p=this,o=p.x
if(o==null){o=p.a
s=o.length!==0?""+o+":":""
r=p.c
q=r==null
if(!q||o==="file"){o=s+"//"
s=p.b
if(s.length!==0)o=o+s+"@"
if(!q)o+=r
s=p.d
if(s!=null)o=o+":"+H.v(s)}else o=s
o+=p.e
s=p.f
if(s!=null)o=o+"?"+s
s=p.r
if(s!=null)o=o+"#"+s
o=o.charCodeAt(0)==0?o:o
if(p.x==null)p.x=o
else o=H.h(H.ku("_text"))}return o},
gB:function(a){var s=this,r=s.z
if(r==null){r=C.a.gB(s.gc6())
if(s.z==null)s.z=r
else r=H.h(H.ku("hashCode"))}return r},
gbE:function(){var s=this,r=s.Q
if(r==null){r=s.f
r=new P.ca(P.lC(r==null?"":r),t.r)
if(s.Q==null)s.Q=r
else r=H.h(H.ku("queryParameters"))}return r},
ges:function(){return this.b},
gcr:function(a){var s=this.c
if(s==null)return""
if(C.a.a4(s,"["))return C.a.q(s,1,s.length-1)
return s},
gbD:function(a){var s=this.d
return s==null?P.lU(this.a):s},
gcE:function(a){var s=this.f
return s==null?"":s},
ge_:function(){var s=this.r
return s==null?"":s},
em:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a4(s,"/"))s="/"+s
q=s
p=P.kJ(null,0,0,b)
return new P.bH(n,l,j,k,q,p,o.r)},
ge0:function(){return this.c!=null},
ge3:function(){return this.f!=null},
ge1:function(){return this.r!=null},
i:function(a){return this.gc6()},
m:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.E.b(b))if(q.a===b.gbI())if(q.c!=null===b.ge0())if(q.b===b.ges())if(q.gcr(q)===b.gcr(b))if(q.gbD(q)===b.gbD(b))if(q.e===b.gei(b)){s=q.f
r=s==null
if(!r===b.ge3()){if(r)s=""
if(s===b.gcE(b)){s=q.r
r=s==null
if(!r===b.ge1()){if(r)s=""
s=s===b.ge_()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
$ifm:1,
gbI:function(){return this.a},
gei:function(a){return this.e}}
P.jK.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=P.kM(C.j,a,C.h,!0)
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=P.kM(C.j,b,C.h,!0)}},
$S:33}
P.jJ.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.aE(b),r=this.a;s.t();)r.$2(a,s.gG(s))},
$S:5}
P.j5.prototype={
ger:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.c(m,0)
s=o.a
m=m[0]+1
r=C.a.bz(s,"?",m)
q=s.length
if(r>=0){p=P.dM(s,r+1,q,C.m,!1)
q=r}else p=n
m=o.c=new P.fx("data","",n,n,P.dM(s,m,q,C.y,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.c(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.jS.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.c(s,a)
s=s[a]
C.X.hK(s,0,96,b)
return s},
$S:32}
P.jT.prototype={
$3:function(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=C.a.F(b,r)^96
if(q>=96)return H.c(a,q)
a[q]=c}},
$S:23}
P.jU.prototype={
$3:function(a,b,c){var s,r,q
for(s=C.a.F(b,0),r=C.a.F(b,1);s<=r;++s){q=(s^96)>>>0
if(q>=96)return H.c(a,q)
a[q]=c}},
$S:23}
P.fZ.prototype={
ge0:function(){return this.c>0},
ge2:function(){return this.c>0&&this.d+1<this.e},
ge3:function(){return this.f<this.r},
ge1:function(){return this.r<this.a.length},
gbI:function(){var s=this.x
return s==null?this.x=this.eZ():s},
eZ:function(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&C.a.a4(r.a,"http"))return"http"
if(q===5&&C.a.a4(r.a,"https"))return"https"
if(s&&C.a.a4(r.a,"file"))return"file"
if(q===7&&C.a.a4(r.a,"package"))return"package"
return C.a.q(r.a,0,q)},
ges:function(){var s=this.c,r=this.b+3
return s>r?C.a.q(this.a,r,s-1):""},
gcr:function(a){var s=this.c
return s>0?C.a.q(this.a,s,this.d):""},
gbD:function(a){var s,r=this
if(r.ge2())return P.k9(C.a.q(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&C.a.a4(r.a,"http"))return 80
if(s===5&&C.a.a4(r.a,"https"))return 443
return 0},
gei:function(a){return C.a.q(this.a,this.e,this.f)},
gcE:function(a){var s=this.f,r=this.r
return s<r?C.a.q(this.a,s+1,r):""},
ge_:function(){var s=this.r,r=this.a
return s<r.length?C.a.a7(r,s+1):""},
gbE:function(){var s=this
if(s.f>=s.r)return C.W
return new P.ca(P.lC(s.gcE(s)),t.r)},
em:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbI(),k=l==="file",j=n.c,i=j>0?C.a.q(n.a,n.b+3,j):"",h=n.ge2()?n.gbD(n):m
j=n.c
if(j>0)s=C.a.q(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.q(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a4(r,"/"))r="/"+r
p=P.kJ(m,0,0,b)
q=n.r
o=q<j.length?C.a.a7(j,q+1):m
return new P.bH(l,i,s,h,r,p,o)},
gB:function(a){var s=this.y
return s==null?this.y=C.a.gB(this.a):s},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.E.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifm:1}
P.fx.prototype={}
W.o.prototype={}
W.ht.prototype={
gj:function(a){return a.length}}
W.e0.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.e1.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bs.prototype={$ibs:1}
W.bt.prototype={
cM:function(a,b,c){if(c!=null)return a.getContext(b,P.ma(c))
return a.getContext(b)},
eu:function(a,b){return this.cM(a,b,null)},
$ibt:1}
W.ct.prototype={$ict:1}
W.aA.prototype={
gj:function(a){return a.length}}
W.hI.prototype={
gj:function(a){return a.length}}
W.F.prototype={$iF:1}
W.cx.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.hJ.prototype={}
W.aq.prototype={}
W.aH.prototype={}
W.hK.prototype={
gj:function(a){return a.length}}
W.hL.prototype={
gj:function(a){return a.length}}
W.hM.prototype={
gj:function(a){return a.length}}
W.hN.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cy.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.cz.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.v(r)+", "
s=a.top
s.toString
return r+H.v(s)+") "+H.v(this.gaK(a))+" x "+H.v(this.gaF(a))},
m:function(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=J.bk(b)
if(s===r.gbC(b)){s=a.top
s.toString
s=s===r.gbF(b)&&this.gaK(a)===r.gaK(b)&&this.gaF(a)===r.gaF(b)}else s=!1}else s=!1
return s},
gB:function(a){var s,r=a.left
r.toString
r=C.d.gB(r)
s=a.top
s.toString
return W.lM(r,C.d.gB(s),C.d.gB(this.gaK(a)),C.d.gB(this.gaF(a)))},
gdD:function(a){var s=a.bottom
s.toString
return s},
gd7:function(a){return a.height},
gaF:function(a){var s=this.gd7(a)
s.toString
return s},
gbC:function(a){var s=a.left
s.toString
return s},
gcI:function(a){var s=a.right
s.toString
return s},
gbF:function(a){var s=a.top
s.toString
return s},
gdt:function(a){return a.width},
gaK:function(a){var s=this.gdt(a)
s.toString
return s},
$ia7:1}
W.ee.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.hO.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.fu.prototype={
ge7:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.c(s,b)
return t.h.a(s[b])},
k:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.c(s,b)
this.a.replaceChild(c,s[b]).toString},
l:function(a,b){this.a.appendChild(b).toString
return b},
gR:function(a){var s=this.ip(this)
return new J.ab(s,s.length)}}
W.E.prototype={
gbw:function(a){var s=a.children
s.toString
return new W.fu(a,s)},
gdE:function(a){var s,r,q,p=a.clientLeft
p.toString
s=a.clientTop
s.toString
r=a.clientWidth
r.toString
q=a.clientHeight
q.toString
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.a7(p,s,r,q,t.I)},
i:function(a){var s=a.localName
s.toString
return s},
$iE:1}
W.l.prototype={$il:1}
W.e.prototype={
hr:function(a,b,c,d){if(c!=null)this.eT(a,b,c,!1)},
eT:function(a,b,c,d){return a.addEventListener(b,H.ck(c,1),!1)},
$ie:1}
W.ac.prototype={$iac:1}
W.bQ.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$im:1,
$iz:1,
$ik:1,
$ip:1,
$ibQ:1}
W.eg.prototype={
gj:function(a){return a.length}}
W.ei.prototype={
gj:function(a){return a.length}}
W.ar.prototype={$iar:1}
W.i2.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.bw.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.bx.prototype={
gdF:function(a){var s=a.data
s.toString
return s},
$ibx:1}
W.bS.prototype={$ibS:1}
W.bU.prototype={$ibU:1,$ikm:1}
W.bz.prototype={$ibz:1}
W.ia.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.iu.prototype={
gj:function(a){return a.length}}
W.bX.prototype={$ibX:1}
W.ev.prototype={
h:function(a,b){return P.bj(a.get(b))},
D:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bj(s.value[1]))}},
gac:function(a){var s=H.b([],t.s)
this.D(a,new W.iv(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Not supported"))},
$iG:1}
W.iv.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.ew.prototype={
h:function(a,b){return P.bj(a.get(b))},
D:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bj(s.value[1]))}},
gac:function(a){var s=H.b([],t.s)
this.D(a,new W.iw(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Not supported"))},
$iG:1}
W.iw.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.at.prototype={$iat:1}
W.ex.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.ak.prototype={$iak:1}
W.ft.prototype={
k:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.c(r,b)
s.replaceChild(c,r[b]).toString},
gR:function(a){var s=this.a.childNodes
return new W.cC(s,s.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.c(s,b)
return s[b]}}
W.u.prototype={
ii:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.mL(s,b,a)}catch(q){H.bl(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.eA(a):s},
h7:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$iu:1}
W.cY.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.au.prototype={
gj:function(a){return a.length},
$iau:1}
W.eK.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.eP.prototype={
h:function(a,b){return P.bj(a.get(b))},
D:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bj(s.value[1]))}},
gac:function(a){var s=H.b([],t.s)
this.D(a,new W.iG(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Not supported"))},
$iG:1}
W.iG.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.eR.prototype={
gj:function(a){return a.length}}
W.al.prototype={$ial:1}
W.eT.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.aw.prototype={$iaw:1}
W.eU.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.ax.prototype={
gj:function(a){return a.length},
$iax:1}
W.eY.prototype={
h:function(a,b){return a.getItem(H.om(b))},
k:function(a,b,c){a.setItem(b,c)},
D:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gac:function(a){var s=H.b([],t.s)
this.D(a,new W.iO(s))
return s},
gj:function(a){var s=a.length
s.toString
return s},
$iG:1}
W.iO.prototype={
$2:function(a,b){return this.a.push(a)},
$S:29}
W.ah.prototype={$iah:1}
W.bd.prototype={$ibd:1}
W.am.prototype={$iam:1}
W.aa.prototype={$iaa:1}
W.f1.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.f2.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.iW.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.an.prototype={$ian:1}
W.bF.prototype={$ibF:1}
W.f9.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.j_.prototype={
gj:function(a){return a.length}}
W.aW.prototype={}
W.ja.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.fo.prototype={
gj:function(a){return a.length}}
W.bf.prototype={
ghG:function(a){var s=a.deltaY
if(s!=null)return s
throw H.d(P.B("deltaY is not supported"))},
ghF:function(a){var s=a.deltaX
if(s!=null)return s
throw H.d(P.B("deltaX is not supported"))},
$ibf:1}
W.cd.prototype={
h8:function(a,b){var s=a.requestAnimationFrame(H.ck(b,1))
s.toString
return s},
f4:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.fv.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.dq.prototype={
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
m:function(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=J.bk(b)
if(s===r.gbC(b)){s=a.top
s.toString
if(s===r.gbF(b)){s=a.width
s.toString
if(s===r.gaK(b)){s=a.height
s.toString
r=s===r.gaF(b)
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
return W.lM(p,s,r,C.d.gB(q))},
gd7:function(a){return a.height},
gaF:function(a){var s=a.height
s.toString
return s},
gdt:function(a){return a.width},
gaK:function(a){var s=a.width
s.toString
return s}}
W.fI.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.N(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.dv.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.h1.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.h8.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.d(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.ko.prototype={}
W.dr.prototype={
hn:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.mM(s,this.c,r,!1)}}}
W.jw.prototype={
$1:function(a){return this.a.$1(a)},
$S:2}
W.kB.prototype={}
W.K.prototype={
gR:function(a){return new W.cC(a,this.gj(a))}}
W.cC.prototype={
t:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.l0(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gG:function(a){return H.U(this).c.a(this.d)}}
W.fw.prototype={}
W.fy.prototype={}
W.fz.prototype={}
W.fA.prototype={}
W.fB.prototype={}
W.fF.prototype={}
W.fG.prototype={}
W.fJ.prototype={}
W.fK.prototype={}
W.fN.prototype={}
W.fO.prototype={}
W.fP.prototype={}
W.fQ.prototype={}
W.fR.prototype={}
W.fS.prototype={}
W.fV.prototype={}
W.fW.prototype={}
W.fY.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.h_.prototype={}
W.h0.prototype={}
W.h5.prototype={}
W.h9.prototype={}
W.ha.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.hb.prototype={}
W.hc.prototype={}
W.hi.prototype={}
W.hj.prototype={}
W.hk.prototype={}
W.hl.prototype={}
W.hm.prototype={}
W.hn.prototype={}
W.ho.prototype={}
W.hp.prototype={}
W.hq.prototype={}
W.hr.prototype={}
P.jD.prototype={
cp:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bH:function(a){var s,r,q,p,o,n=this,m={}
if(a==null)return a
if(H.jV(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.X)return new Date(a.a)
if(t.fJ.b(a))throw H.d(P.j4("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.fK.b(a))return a
if(t.bX.b(a))return a
if(t.x.b(a))return a
if(t.bZ.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.f.b(a)){s=n.cp(a)
r=n.b
q=r.length
if(s>=q)return H.c(r,s)
p=m.a=r[s]
if(p!=null)return p
p={}
m.a=p
if(s>=q)return H.c(r,s)
r[s]=p
J.dY(a,new P.jF(m,n))
return m.a}if(t.d.b(a)){s=n.cp(a)
m=n.b
if(s>=m.length)return H.c(m,s)
p=m[s]
if(p!=null)return p
return n.hC(a,s)}if(t.eH.b(a)){s=n.cp(a)
r=n.b
q=r.length
if(s>=q)return H.c(r,s)
p=m.b=r[s]
if(p!=null)return p
o={}
o.toString
m.b=o
if(s>=q)return H.c(r,s)
r[s]=o
n.hP(a,new P.jG(m,n))
return m.b}throw H.d(P.j4("structured clone of other type"))},
hC:function(a,b){var s,r,q=J.bI(a),p=q.gj(a),o=new Array(p)
o.toString
s=this.b
if(b>=s.length)return H.c(s,b)
s[b]=o
for(r=0;r<p;++r){s=this.bH(q.h(a,r))
if(r>=o.length)return H.c(o,r)
o[r]=s}return o}}
P.jF.prototype={
$2:function(a,b){this.a.a[a]=this.b.bH(b)},
$S:9}
P.jG.prototype={
$2:function(a,b){this.a.b[a]=this.b.bH(b)},
$S:27}
P.dI.prototype={$ibx:1,
gdF:function(a){return this.a}}
P.jQ.prototype={
$1:function(a){this.a.push(P.m1(a))},
$S:26}
P.k_.prototype={
$2:function(a,b){this.a[a]=P.m1(b)},
$S:9}
P.jE.prototype={
hP:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
b.$2(p,a[p])}}}
P.eh.prototype={
gbc:function(){var s=this.b,r=H.U(s)
return new H.aN(new H.dp(s,new P.hZ(),r.L("dp<j.E>")),new P.i_(),r.L("aN<j.E,E>"))},
D:function(a,b){C.b.D(P.i9(this.gbc(),!1,t.h),b)},
k:function(a,b,c){var s=this.gbc()
J.mQ(s.b.$1(J.kj(s.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b).toString},
gj:function(a){return J.b0(this.gbc().a)},
h:function(a,b){var s=this.gbc()
return s.b.$1(J.kj(s.a,b))},
gR:function(a){var s=P.i9(this.gbc(),!1,t.h)
return new J.ab(s,s.length)}}
P.hZ.prototype={
$1:function(a){return t.h.b(a)},
$S:25}
P.i_.prototype={
$1:function(a){return t.h.a(a)},
$S:54}
P.fX.prototype={
gcI:function(a){return this.$ti.c.a(this.a+this.c)},
gdD:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
m:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.I.b(b)){s=o.a
r=J.bk(b)
if(s===r.gbC(b)){q=o.b
if(q===r.gbF(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gcI(b)&&p.a(q+o.d)===r.gdD(b)}else s=!1}else s=!1}else s=!1
return s},
gB:function(a){var s=this,r=s.a,q=C.c.gB(r),p=s.b,o=C.c.gB(p),n=s.$ti.c
r=C.c.gB(n.a(r+s.c))
p=C.c.gB(n.a(p+s.d))
return H.nB(H.iP(H.iP(H.iP(H.iP(0,q),o),r),p))}}
P.a7.prototype={
gbC:function(a){return this.a},
gbF:function(a){return this.b},
gaK:function(a){return this.c},
gaF:function(a){return this.d}}
P.aM.prototype={$iaM:1}
P.ep.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.d(P.N(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.aR.prototype={$iaR:1}
P.eE.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.d(P.N(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.iB.prototype={
gj:function(a){return a.length}}
P.f_.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.d(P.N(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.n.prototype={
gbw:function(a){return new P.eh(a,new W.ft(a))}}
P.aT.prototype={$iaT:1}
P.fa.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.d(P.N(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.fL.prototype={}
P.fM.prototype={}
P.fT.prototype={}
P.fU.prototype={}
P.h6.prototype={}
P.h7.prototype={}
P.hd.prototype={}
P.he.prototype={}
P.hw.prototype={
gj:function(a){return a.length}}
P.e4.prototype={
h:function(a,b){return P.bj(a.get(b))},
D:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bj(s.value[1]))}},
gac:function(a){var s=H.b([],t.s)
this.D(a,new P.hx(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Not supported"))},
$iG:1}
P.hx.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
P.e5.prototype={
gj:function(a){return a.length}}
P.b2.prototype={}
P.eF.prototype={
gj:function(a){return a.length}}
P.fs.prototype={}
P.c1.prototype={
eo:function(a,b,c,d,e,f,g){var s
if(t.x.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.pg(g))
return}if(t.fS.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.bK("Incorrect number or type of arguments"))},
$ic1:1}
P.eV.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.d(P.N(b,a,null,null,null))
s=P.bj(a.item(b))
s.toString
return s},
k:function(a,b,c){throw H.d(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.h2.prototype={}
P.h3.prototype={}
K.e_.prototype={
b1:function(a,b){return!0},
i:function(a){return"all"},
$ibA:1}
K.cD.prototype={
b1:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)if(s[q].b1(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q},
$ibA:1}
K.aQ.prototype={
b1:function(a,b){return!this.ez(0,b)},
i:function(a){return"!["+this.bL(0)+"]"}}
K.Y.prototype={
Z:function(a){var s,r,q,p
if(a.a.length<=0)throw H.d(P.f("May not create a Set with zero characters."))
s=new H.W(t.fX)
for(r=new H.bW(a,a.gj(a)),q=H.U(r).c;r.t();)s.k(0,q.a(r.d),!0)
p=P.i9(s.gac(s),!0,t.S)
C.b.ey(p)
this.a=p},
b1:function(a,b){return C.b.H(this.a,b)},
i:function(a){return P.f0(this.a,0,null)},
$ibA:1}
L.eW.prototype={
p:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.da(this.a.N(0,b),H.b([],t.B))
s.push(p)
return p},
hL:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.b1(0,a))return p}return null},
i:function(a){return this.b},
dq:function(){var s,r,q,p,o,n=this,m=""+("("+n.b+")"),l=n.d
if(l!=null){m+=" => ["+l.b+"]"
l=n.a.c
s=n.d
if(l.H(0,s==null?null:s.b))m+=" (consume)"
s=n.d
if(s==null)s=null
else{s=s.c
s=s.gac(s)}s=J.aE(s==null?H.b([],t.s):s)
for(;s.t();){r=s.gG(s)
m+="\n"
q=n.d
if(q!=null)q.c.h(0,r)
m+="  -- "+r+" => []"
if(l.H(0,""))m+=" (consume)"}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.q)(l),++p){o=l[p]
m+="\n"
m+="  -- "+(o.b.b+": "+o.bL(0))}return m.charCodeAt(0)==0?m:m}}
L.f7.prototype={
i:function(a){var s=H.mk(this.b,"\n","\\n"),r=H.mk(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.f8.prototype={
i:function(a){return this.b}}
L.iY.prototype={
N:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.eW(this,b,H.b([],t.ab))
s.k(0,b,r)}return r},
bo:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.f8(a,P.T(s,s))
r.k(0,a,q)}return q},
eq:function(a){return this.ir(a)},
ir:function(a){var s=this
return P.oF(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$eq(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.t
b=H.b([],c)
a0=H.b([],c)
a1=H.b([],c)
n=H.U(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a1.length!==0)h=C.b.cF(a1,0)
else{if(!r.t()){q=3
break}h=n.a(r.d)}a0.push(h);++k
g=d==null
f=g?null:d.hL(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.f0(a0,0,null)
throw H.d(P.f("Untokenizable string [state: "+H.v(g?null:d.b)+", index "+k+']: "'+e+'"'))}if(!!a0.fixed$length)H.h(P.B("removeRange"))
P.ba(0,i,a0.length)
a0.splice(0,i-0)
C.b.bv(a1,a0)
a0=H.b([],c)
b=H.b([],c)
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
case 6:if(!f.c)b.push(h)
d=f.b
g=d.d
if(g!=null){e=P.f0(b,0,null)
g=d.d
if(g==null)l=null
else{g.c.h(0,e)
g=g.b
g=new L.f7(g,e,k)
l=g}i=a0.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.H(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.nN()
case 1:return P.nO(o)}}},t.bJ)},
i:function(a){var s,r=new P.a_(""),q=this.d
if(q!=null)r.a=""+(q.dq()+"\n")
for(q=this.a,q=q.git(q),q=q.gR(q);q.t();){s=q.gG(q)
if(s!=this.d)r.a+=H.v(s==null?null:s.dq())+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.da.prototype={
i:function(a){return this.b.b+": "+this.bL(0)}}
O.a9.prototype={
bJ:function(a,b,c){this.b=b
this.c=a},
br:function(a,b){return this.bJ(a,null,b)},
dd:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
cT:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gj:function(a){return this.a.length},
gR:function(a){var s=this.a
return new J.ab(s,s.length)},
I:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.c(s,b)
return s[b]},
l:function(a,b){var s,r,q=this,p=H.U(q).L("t<a9.T>")
if(q.dd(H.b([b],p))){s=q.a
r=s.length
s.push(b)
q.cT(r,H.b([b],p))}},
bv:function(a,b){var s,r
if(this.dd(b)){s=this.a
r=s.length
C.b.bv(s,b)
this.cT(r,b)}},
$ik:1}
O.cU.prototype={
gj:function(a){return this.a.length},
gn:function(){var s=this.b
return s==null?this.b=D.I():s},
aL:function(){var s=this.b
return s==null?null:s.C(null)},
gV:function(a){var s=this.a
if(s.length>0)return C.b.gaG(s)
else return V.aC()},
ek:function(a){this.a.push(a)
this.aL()},
cD:function(){var s=this.a
if(s.length>0){s.pop()
this.aL()}}}
Y.c4.prototype={
i:function(a){return this.b}}
Y.e6.prototype={
i:function(a){switch(this.a){case C.p:return"intesected"
case C.e:return"noCollision"
case C.q:return"outOfRange at "+H.v(this.b)
case C.f:return"collision at "+H.v(this.b)
default:return"Unknown collision value"}}}
Y.bb.prototype={
i:function(a){var s=this,r=s.cP(0)
return r+(s.a===C.f?" "+H.v(s.r)+" "+H.v(s.x):"")}}
Y.aU.prototype={
i:function(a){var s=this,r=s.cP(0)
return r+(s.a===C.f?" "+H.v(s.r)+" "+H.v(s.x)+" "+H.v(s.y):"")}}
E.hA.prototype={}
E.aI.prototype={
cS:function(a,b,c,d,e,f){var s=this
s.y.br(s.ghY(),s.gi0())
s.sbK(0,e)
s.scJ(f)
s.saH(c)},
d_:function(){var s,r,q
this.e=null
for(s=this.y.a,s=new J.ab(s,s.length),r=H.U(s).c;s.t();){q=r.a(s.d)
if(q.f==null)q.d_()}},
sbK:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gn().K(0,s.gee())
if(b!=null)b.gn().l(0,s.gee())
s.an(new D.D("shape",r,b))}},
scJ:function(a){var s=this,r=s.f
if(r!=a){s.f=a
if(r!=null)r.gn().K(0,s.geg())
if(a!=null)a.gn().l(0,s.geg())
s.d_()
s.an(new D.D("technique",r,a))}},
saH:function(a){var s,r,q=this
if(!J.J(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gn().K(0,q.gec())
if(a!=null)a.gn().l(0,q.gec())
r=q.r
q.an(new D.D("mover",s,r))}},
ag:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.aJ(0,b,q)
if(!J.J(o,q.x)){s=q.x
q.x=o
q.an(new D.D("matrix",s,o))}p=q.f
if(p!=null)p.ag(0,b)
for(p=q.y.a,p=new J.ab(p,p.length),r=H.U(p).c;p.t();)r.a(p.d).ag(0,b)},
b3:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.gV(q))
else o.push(p.M(0,q.gV(q)))
q.aL()
a.el(r.f)
s=C.b.gaG(a.dy)
if(r.d!=null)if(s!=null)s.ih(a,r)
for(p=r.y.a,p=new J.ab(p,p.length),o=H.U(p).c;p.t();)o.a(p.d).b3(a)
a.ej()
q.cD()},
an:function(a){var s=this.z
return s==null?null:s.C(a)},
a3:function(){return this.an(null)},
ef:function(a){this.e=null
this.an(a)},
i3:function(){return this.ef(null)},
eh:function(a){return this.an(a)},
i4:function(){return this.eh(null)},
ed:function(a){return this.an(a)},
i2:function(){return this.ed(null)},
eb:function(a){return this.an(a)},
i_:function(){return this.eb(null)},
hZ:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gea(),q=t.b,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bP()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.a3()},
i1:function(a,b){var s,r
for(s=b.gR(b),r=this.gea();s.t();)s.gG(s).gn().K(0,r)
this.a3()},
i:function(a){return"Unnamed entity"}}
E.bL.prototype={
i:function(a){return this.b}}
E.c_.prototype={
i:function(a){return this.b}}
E.fC.prototype={}
E.iC.prototype={
eE:function(a,b){var s=this
s.cy.gn().l(0,new E.iD(s))
s.db.gn().l(0,new E.iE(s))
s.dx.gn().l(0,new E.iF(s))},
gic:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.gV(q).M(0,s.gV(s))
q=s}return q},
el:function(a){var s=this.dy
return s.push(a==null?C.b.gaG(s):a)},
ej:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.iD.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:0}
E.iE.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:0}
E.iF.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:0}
E.f6.prototype={
cW:function(a){this.en()},
cV:function(){return this.cW(null)},
ghQ:function(){var s,r=this,q=Date.now(),p=C.c.a2(P.l6(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.X(q,!1)
return s/p},
dg:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.cq(r*o)
r=s.clientHeight
r.toString
p=C.d.cq(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.lx(C.o,this.gij())}},
en:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.D.f4(s)
r=W.m7(new E.iV(this),t.H)
r.toString
C.D.h8(s,r)}},
ig:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.dg()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.X(p,!1)
q.y=P.l6(p-q.r.a).a*0.000001
p=q.cy
C.b.sj(p.a,0)
p.aL()
p=q.db
C.b.sj(p.a,0)
p.aL()
p=q.dx
C.b.sj(p.a,0)
p.aL()
p=q.dy
C.b.sj(p,0)
p.push(null)
m.b3(q)}}catch(o){s=H.bl(o)
r=H.kU(o)
P.kZ("Error: "+H.v(s))
P.kZ("Stack: "+H.v(r))
throw H.d(s)}}}
E.iV.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.ig()}},
$S:28}
Z.fp.prototype={}
Z.bM.prototype={
aV:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.bl(q)
r=P.f('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.v(s))
throw H.d(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.jr.prototype={}
Z.cr.prototype={
aZ:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
aV:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.c(r,s)
r[s].aV(a)}},
bG:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.c(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
b3:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.c(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=t.s,l=H.b([],m)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
l.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.d1(p.c)+"'")+"]")}o=H.b([],m)
for(m=this.c,s=m.length,q=0;q<m.length;m.length===s||(0,H.q)(m),++q){n=m[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.p(l,", ")+"\nAttrs:   "+C.b.p(o,", ")}}
Z.bT.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d1(this.c)+"'")+"]"}}
Z.aX.prototype={
gcN:function(a){var s=this.a,r=(s&$.bp().a)!==0?3:0
if((s&$.bo().a)!==0)r+=3
if((s&$.bn().a)!==0)r+=3
if((s&$.bq().a)!==0)r+=2
if((s&$.br().a)!==0)r+=3
if((s&$.dW().a)!==0)r+=3
if((s&$.dX().a)!==0)r+=4
if((s&$.cn().a)!==0)++r
return(s&$.bm().a)!==0?r+4:r},
ht:function(a){var s,r=$.bp(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bo()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bn()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bq()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.br()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dW()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dX()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cn()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bm()
if((q&r.a)!==0)if(s===a)return r
return $.mH()},
m:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aX))return!1
return this.a===b.a},
i:function(a){var s=H.b([],t.s),r=this.a
if((r&$.bp().a)!==0)s.push("Pos")
if((r&$.bo().a)!==0)s.push("Norm")
if((r&$.bn().a)!==0)s.push("Binm")
if((r&$.bq().a)!==0)s.push("Txt2D")
if((r&$.br().a)!==0)s.push("TxtCube")
if((r&$.dW().a)!==0)s.push("Clr3")
if((r&$.dX().a)!==0)s.push("Clr4")
if((r&$.cn().a)!==0)s.push("Weight")
if((r&$.bm().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.p(s,"|")}}
D.hC.prototype={}
D.bP.prototype={
l:function(a,b){var s=this.a
return(s==null?this.a=H.b([],t.b):s).push(b)},
K:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.b.H(p,b)
if(p===!0){p=r.a
p=p==null?q:C.b.K(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.b.H(p,b)
if(p===!0){p=r.b
p=p==null?q:C.b.K(p,b)
s=p===!0||s}return s},
C:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.V():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.b.D(P.i9(p,!0,t.h2),new D.hW(s))
r=q.b
if(r!=null){q.b=H.b([],t.b)
C.b.D(r,new D.hX(s))}return!0},
dH:function(){return this.C(null)},
au:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.C(s)}}}}
D.hW.prototype={
$1:function(a){a.$1(this.a)},
$S:22}
D.hX.prototype={
$1:function(a){a.$1(this.a)},
$S:22}
D.V.prototype={}
D.aJ.prototype={}
D.aK.prototype={}
D.D.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.v(this.d)+" => "+H.v(this.e)}}
X.cs.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cs))return!1
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
X.b6.prototype={}
X.cH.prototype={
gb0:function(){var s=this.y
return s==null?this.y=D.I():s},
aa:function(a){return this.l(0,new X.ad(a,new X.aP(!1,!1,!1)))},
cX:function(a){return null},
eI:function(a){var s,r,q
for(s=a.length,r=this.a,q=0;q<a.length;a.length===s||(0,H.q)(a),++q)if(C.b.H(r,a[q]))return!1
return!0},
eG:function(a,b){return this.cX(new D.aJ())},
eK:function(a,b){return this.cX(new D.aK())},
bN:function(a){var s,r=this
if(!r.r&&a instanceof X.b6)if(C.b.H(r.a,a.c)){r.r=!0
s=r.y
if(s!=null)s.C(a)}},
c0:function(a){if(this.r&&a instanceof X.b6)if(C.b.H(this.a,a.c))this.r=!1},
ar:function(a){var s,r,q=this
if(q.f!=null)return!1
q.f=a
s=a.gb_(a)
s.gdG().l(0,q.gbM())
r=s.a
s=r==null?s.a=D.I():r
s.l(0,q.gc_())
return!0}}
X.i5.prototype={
gdG:function(){var s=this.b
return s==null?this.b=D.I():s}}
X.cO.prototype={}
X.ib.prototype={
bb:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.a4(o.a+b.a,o.b+b.b)
o=q.a.gbx()
s=$.af
if(s==null)s=$.af=new V.a4(0,0)
r=q.x
q.z=new P.X(p,!1)
q.x=n
return new X.bY(a,s,r,o,n)},
cC:function(a,b){this.r=a.a
return!1},
bl:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bk:function(a,b){var s=this.d
if(s==null)return!1
s.C(this.bb(a,b))
return!0},
i9:function(a){return!1},
fI:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.C(new X.cO(c,q.a.gbx(),b))
q.y=new P.X(s,!1)
s=$.af
q.x=s==null?$.af=new V.a4(0,0):s}}
X.aP.prototype={
m:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.aP))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
i:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.b.p(s,"+")}}
X.bY.prototype={}
X.ix.prototype={
bV:function(a,b,c){var s=this,r=new P.X(Date.now(),!1),q=s.a.gbx(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.bY(a,p,o,q,b)},
cC:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.C(this.bV(a,b,!0))
return!0},
bl:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.C(r.bV(a,b,!0))
return!0},
bk:function(a,b){var s=this.d
if(s==null)return!1
s.C(this.bV(a,b,!1))
return!0},
ia:function(a,b){return!1}}
X.eM.prototype={}
X.d9.prototype={}
X.iZ.prototype={
bb:function(a,b){var s,r,q,p,o=this,n=new P.X(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.af
if(r==null){r=new V.a4(0,0)
$.af=r
s=r}else s=r}r=o.a.gbx()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.d9(q,p,r,s)},
i8:function(a){var s=this.b
if(s==null)return!1
s.C(this.bb(a,!0))
return!0},
i6:function(a){var s=this.c
if(s==null)return!1
s.C(this.bb(a,!0))
return!0},
i7:function(a){var s=this.d
if(s==null)return!1
s.C(this.bb(a,!1))
return!0}}
X.fn.prototype={
gb_:function(a){var s=this.b
return s==null?this.b=new X.i5(P.lb(t.S)):s},
gam:function(){var s,r=this.c
if(r==null){r=$.af
if(r==null){r=$.af=new V.a4(0,0)
s=r}else s=r
r=this.c=new X.ix(this,r,s,new P.X(Date.now(),!1),new P.X(Date.now(),!1))}return r},
gal:function(){var s=this.d
if(s==null){s=$.af
if(s==null)s=$.af=new V.a4(0,0)
s=this.d=new X.ib(this,s,new P.X(Date.now(),!1),new P.X(Date.now(),!1))}return s},
gb5:function(){var s,r=this.e
if(r==null){r=$.af
if(r==null){r=$.af=new V.a4(0,0)
s=r}else s=r
r=this.e=new X.iZ(this,r,s,new P.X(Date.now(),!1),new P.X(Date.now(),!1))}return r},
gbx:function(){var s=this.a
return V.lp(0,0,C.k.gdE(s).c,C.k.gdE(s).d)},
d2:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.ad(p,new X.aP(s,r,q))},
aT:function(a){var s
this.gb_(this)
s=a.ctrlKey
s.toString
if(!s)a.metaKey.toString
a.altKey.toString
a.shiftKey.toString},
c5:function(a){var s=a.ctrlKey
if(s!==!0)a.metaKey
this.gb_(this)
a.altKey
a.shiftKey},
aC:function(a){var s,r,q,p
if(a==null){s=$.af
return s==null?$.af=new V.a4(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.a4(r-p,q-s)},
bd:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.ao(r,s)},
c1:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=H.b([],t.cG)
r=a.touches
if(r==null)r=H.b([],t.gT)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.ao(n)
m=o.pageY
m.toString
C.d.ao(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.ao(l)
l=o.pageY
l.toString
l=C.d.ao(l)
k=j.top
k.toString
s.push(new V.a4(n-m,l-k))}return s},
ay:function(a){var s,r,q,p
if(a==null)return new X.cs(0,new X.aP(!1,!1,!1))
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
return new X.cs(s,new X.aP(r,q,p))},
bW:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
fE:function(a){return this.f=!0},
fp:function(a){return this.f=!1},
fw:function(a){if(this.f&&this.bW(a))a.preventDefault()},
c0:function(a){var s,r,q=this
if(!q.f)return
s=q.d2(a)
r=q.gb_(q)
r.d.l(0,s.a)
r=r.a
r=r==null?null:r.C(new X.b6(s))
if(r===!0)a.preventDefault()},
bN:function(a){var s,r,q=this
if(!q.f)return
s=q.d2(a)
r=q.gb_(q)
r.d.K(0,s.a)
r=r.b
r=r==null?null:r.C(new X.b6(s))
if(r===!0)a.preventDefault()},
fK:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aT(a)
if(p.x){s=p.ay(a)
r=p.bd(a)
if(p.gal().cC(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.ay(a)
q=p.aC(a)
if(p.gam().cC(s,q))a.preventDefault()},
fO:function(a){var s,r,q,p=this
p.aT(a)
s=p.ay(a)
if(p.x){r=p.bd(a)
if(p.gal().bl(s,r))a.preventDefault()
return}if(p.r)return
q=p.aC(a)
if(p.gam().bl(s,q))a.preventDefault()},
fC:function(a){var s,r,q,p=this
if(!p.bW(a)){p.aT(a)
s=p.ay(a)
if(p.x){r=p.bd(a)
if(p.gal().bl(s,r))a.preventDefault()
return}if(p.r)return
q=p.aC(a)
if(p.gam().bl(s,q))a.preventDefault()}},
fM:function(a){var s,r,q,p=this
p.aT(a)
s=p.ay(a)
if(p.x){r=p.bd(a)
if(p.gal().bk(s,r))a.preventDefault()
return}if(p.r)return
q=p.aC(a)
if(p.gam().bk(s,q))a.preventDefault()},
fA:function(a){var s,r,q,p=this
if(!p.bW(a)){p.aT(a)
s=p.ay(a)
if(p.x){r=p.bd(a)
if(p.gal().bk(s,r))a.preventDefault()
return}if(p.r)return
q=p.aC(a)
if(p.gam().bk(s,q))a.preventDefault()}},
fQ:function(a){var s,r,q=this
q.aT(a)
s=new V.ao(C.C.ghF(a),C.C.ghG(a)).M(0,q.Q)
if(q.x){if(q.gal().i9(s))a.preventDefault()
return}if(q.r)return
r=q.aC(a)
if(q.gam().ia(s,r))a.preventDefault()},
fS:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.ay(q.y)
r=q.aC(q.y)
q.gal().fI(s,r,p)}},
h3:function(a){var s,r=this
r.a.focus()
r.f=!0
r.c5(a)
s=r.c1(a)
if(r.gb5().i8(s))a.preventDefault()},
h_:function(a){var s
this.c5(a)
s=this.c1(a)
if(this.gb5().i6(s))a.preventDefault()},
h1:function(a){var s
this.c5(a)
s=this.c1(a)
if(this.gb5().i7(s))a.preventDefault()}}
D.bO.prototype={
ax:function(a){var s=this.r
return s==null?null:s.C(a)},
eM:function(){return this.ax(null)},
$ias:1}
D.cK.prototype={
gn:function(){var s=this.y
return s==null?this.y=D.I():s},
ge9:function(){var s=this.z
return s==null?this.z=D.I():s},
ax:function(a){var s=this.y
return s==null?null:s.C(a)},
dc:function(a){var s=this.z
return s==null?null:s.C(a)},
fH:function(){return this.dc(null)},
fU:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)if(this.f_(a[r]))return!1
return!0},
fj:function(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=this.gda(),q=this.f,p=t.b,o=0;o<b.length;b.length===s||(0,H.q)(b),++o){n=b[o]
q.push(n)
m=n.r
if(m==null)m=n.r=new D.bP()
l=m.a;(l==null?m.a=H.b([],p):l).push(r)}this.ax(new D.aJ())},
fY:function(a,b){var s,r,q,p
for(s=b.gR(b),r=this.gda(),q=this.e;s.t();){p=s.gG(s)
C.b.K(q,p)
p.gn().K(0,r)}this.ax(new D.aK())},
f_:function(a){var s=C.b.H(this.f,a)
return s}}
V.S.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.S))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
V.bu.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bu))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+"]"},
u:function(){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+"]"}}
V.hU.prototype={}
V.b7.prototype={
a6:function(a,b){var s=this,r=H.b([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.n)
return r},
bA:function(a){var s,r=this,q=r.a,p=r.e,o=r.y,n=p*o,m=r.f,l=r.x,k=r.d,j=r.b,i=j*o,h=r.c,g=l*h,f=r.r,e=j*m-p*h,d=q*(n-m*l)-k*(i-g)+f*e
$.C().toString
if(Math.abs(d-0)<1e-9)return V.it()
s=1/d
return new V.b7((n-l*m)*s,(g-i)*s,e*s,(f*m-k*o)*s,(q*o-f*h)*s,(k*h-q*m)*s,(k*l-f*p)*s,(f*j-q*l)*s,(q*p-k*j)*s)},
av:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.w(s.a*r+s.b*q+s.c*p,s.d*r+s.e*q+s.f*p,s.r*r+s.x*q+s.y*p)},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.b7))return!1
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
i:function(a){var s,r,q,p,o=this,n=t.n,m=V.cm(H.b([o.a,o.d,o.r],n),3,0),l=V.cm(H.b([o.b,o.e,o.x],n),3,0),k=V.cm(H.b([o.c,o.f,o.y],n),3,0)
n=m.length
if(0>=n)return H.c(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.c(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.c(k,0)
s=s+k[0]+",\n"
if(1>=n)return H.c(m,1)
p=" "+m[1]+", "
if(1>=r)return H.c(l,1)
p=p+l[1]+", "
if(1>=q)return H.c(k,1)
p=s+(p+k[1]+",\n")
if(2>=n)return H.c(m,2)
n=" "+m[2]+", "
if(2>=r)return H.c(l,2)
n=n+l[2]+", "
if(2>=q)return H.c(k,2)
return p+(n+k[2]+"]")}}
V.aO.prototype={
a6:function(a,b){var s=this,r=H.b([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.n)
return r},
bA:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.C().toString
if(Math.abs(b3-0)<1e-9)return V.aC()
s=1/b3
r=-l
q=-a2
return V.b8((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
M:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.b8(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
av:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.w(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bp:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.L(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aO))return!1
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
i:function(a){return this.u()},
E:function(a){var s,r,q,p,o,n=this,m=t.n,l=V.cm(H.b([n.a,n.e,n.y,n.cx],m),3,0),k=V.cm(H.b([n.b,n.f,n.z,n.cy],m),3,0),j=V.cm(H.b([n.c,n.r,n.Q,n.db],m),3,0),i=V.cm(H.b([n.d,n.x,n.ch,n.dx],m),3,0)
m=l.length
if(0>=m)return H.c(l,0)
s="["+l[0]+", "
r=k.length
if(0>=r)return H.c(k,0)
s=s+k[0]+", "
q=j.length
if(0>=q)return H.c(j,0)
s=s+j[0]+", "
p=i.length
if(0>=p)return H.c(i,0)
s=s+i[0]+",\n"
o=a+" "
if(1>=m)return H.c(l,1)
o=o+l[1]+", "
if(1>=r)return H.c(k,1)
o=o+k[1]+", "
if(1>=q)return H.c(j,1)
o=o+j[1]+", "
if(1>=p)return H.c(i,1)
o=s+(o+i[1]+",\n")
s=a+" "
if(2>=m)return H.c(l,2)
s=s+l[2]+", "
if(2>=r)return H.c(k,2)
s=s+k[2]+", "
if(2>=q)return H.c(j,2)
s=s+j[2]+", "
if(2>=p)return H.c(i,2)
s=o+(s+i[2]+",\n")
o=a+" "
if(3>=m)return H.c(l,3)
o=o+l[3]+", "
if(3>=r)return H.c(k,3)
o=o+k[3]+", "
if(3>=q)return H.c(j,3)
o=o+j[3]+", "
if(3>=p)return H.c(i,3)
return s+(o+i[3]+"]")},
u:function(){return this.E("")}}
V.eJ.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eJ))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+"]"}}
V.a4.prototype={
ah:function(a){return new V.ao(a.a-this.a,a.b-this.b)},
m:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"},
u:function(){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"}}
V.L.prototype={
ah:function(a){return new V.w(a.a-this.a,a.b-this.b,a.c-this.c)},
aw:function(a,b){return new V.L(this.a-b.a,this.b-b.b,this.c-b.c)},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.L))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"},
u:function(){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
V.d_.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.d_))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+"]"},
u:function(){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+"]"}}
V.eO.prototype={
gb2:function(){var s=this.c,r=this.d
return s>r?r:s},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eO))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+"]"}}
V.d6.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.d6))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+"]"}}
V.ao.prototype={
cs:function(a){return Math.sqrt(this.U(this))},
U:function(a){return this.a*a.a+this.b*a.b},
M:function(a,b){return new V.ao(this.a*b,this.b*b)},
aq:function(a,b){var s
$.C().toString
if(Math.abs(b-0)<1e-9){s=$.jg
return s==null?$.jg=new V.ao(0,0):s}return new V.ao(this.a/b,this.b/b)},
m:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ao))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"}}
V.w.prototype={
cs:function(a){return Math.sqrt(this.U(this))},
U:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ct:function(a,b){return new V.w(V.kW(this.a,a.a,b),V.kW(this.b,a.b,b),V.kW(this.c,a.c,b))},
J:function(){var s=this,r=Math.sqrt(s.U(s))
if(r===1)return s
return s.aq(0,r)},
bf:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.w(s*r-q*p,q*o-n*r,n*p-s*o)},
Y:function(a,b){return new V.w(this.a+b.a,this.b+b.b,this.c+b.c)},
aw:function(a,b){return new V.w(this.a-b.a,this.b-b.b,this.c-b.c)},
b6:function(a){return new V.w(-this.a,-this.b,-this.c)},
M:function(a,b){return new V.w(this.a*b,this.b*b,this.c*b)},
aq:function(a,b){$.C().toString
if(Math.abs(b-0)<1e-9)return V.bG()
return new V.w(this.a/b,this.b/b,this.c/b)},
e8:function(){$.C().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.w))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"},
u:function(){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
U.hG.prototype={
bO:function(a){var s=this.a,r=this.c,q=this.b
if(s)return V.pF(a,r,q)
else{if(a<r)s=r
else s=a>q?q:a
return s}},
gn:function(){var s=this.y
return s==null?this.y=D.I():s},
O:function(a){var s=this.y
return s==null?null:s.C(a)},
scL:function(a,b){var s=this.a
if(s!==b){this.a=b
this.O(new D.D("wrap",s,b))}},
scw:function(a){var s,r=this,q=r.b
$.C().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bO(s)}r.O(new D.D("maximumLocation",q,r.b))}},
scA:function(a){var s,r=this,q=r.c
$.C().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bO(s)}r.O(new D.D("minimumLocation",q,r.c))}},
sa_:function(a,b){var s,r=this
b=r.bO(b)
s=r.d
$.C().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.O(new D.D("location",s,b))}},
sbj:function(a){var s,r,q=this,p=q.e
$.C().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.O(new D.D("maximumVelocity",p,a))}},
sa0:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.C().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.O(new D.D("velocity",r,a))}},
saE:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.C().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.O(new D.D("dampening",s,a))}},
ag:function(a,b){var s,r,q,p=this,o=p.f
$.C().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa_(0,p.d+s*b)
o=p.x
$.C().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sa0(s)}}}
U.cu.prototype={
gn:function(){var s=this.b
return s==null?this.b=D.I():s},
sV:function(a,b){var s,r,q=this
if(b==null)b=V.aC()
if(!q.a.m(0,b)){s=q.a
q.a=b
r=q.b
if(r!=null)r.C(new D.D("matrix",s,b))}},
aJ:function(a,b,c){return this.a},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cu))return!1
return this.a.m(0,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.bR.prototype={
gn:function(){var s=this.e
return s==null?this.e=D.I():s},
O:function(a){var s=this.e
return s==null?null:s.C(a)},
a8:function(){return this.O(null)},
fh:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaM(),q=t.b,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.gn()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}this.O(new D.aJ())},
fW:function(a,b){var s,r
for(s=b.gR(b),r=this.gaM();s.t();)s.gG(s).gn().K(0,r)
this.O(new D.aK())},
aJ:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.ab(o,o.length),n=H.U(o).c,s=null;o.t();){r=n.a(o.d)
if(r!=null){q=r.aJ(0,b,c)
s=s==null?q:q.M(0,s)}}p.f=s==null?V.aC():s
o=p.e
if(o!=null)o.au(0)}return p.f},
m:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bR))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.c(s,p)
o=s[p]
if(p>=q.length)return H.c(q,p)
if(!J.J(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$ia3:1}
U.a3.prototype={}
U.dl.prototype={
gn:function(){var s=this.fx
return s==null?this.fx=D.I():s},
O:function(a){var s=this.fx
return s==null?null:s.C(a)},
a8:function(){return this.O(null)},
ar:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
s=a.gam()
r=s.b
s=r==null?s.b=D.I():r
s.l(0,q.gfa())
s=a.gam()
r=s.d
s=r==null?s.d=D.I():r
s.l(0,q.gfc())
s=a.gam()
r=s.c
s=r==null?s.c=D.I():r
s.l(0,q.gfe())
s=a.gal()
r=s.f
s=r==null?s.f=D.I():r
s.l(0,q.gf6())
s=a.gal()
r=s.d
s=r==null?s.d=D.I():r
s.l(0,q.gf8())
s=a.gb5()
r=s.b
s=r==null?s.b=D.I():r
s.l(0,q.ghl())
s=a.gb5()
r=s.d
s=r==null?s.d=D.I():r
s.l(0,q.ghj())
s=a.gb5()
r=s.c
s=r==null?s.c=D.I():r
s.l(0,q.ghh())
return!0},
aR:function(a){return new V.ao(a.a,a.b)},
fb:function(a){var s=this
t.Z.a(a)
if(!s.d.m(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fd:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ah(a.d)
if(s.U(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aR(a.y.ah(r).M(0,2).aq(0,s.gb2()))
p=n.c
p.sa_(0,-q.a*2.5+n.cy)
o=n.b
o.sa_(0,-q.b*2.5+n.db)
o.sa0(0)
p.sa0(0)
n.dx=n.aR(a.z.ah(r).M(0,2).aq(0,s.gb2()))
n.a8()},
ff:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.U(s)>0.0001){r.c.sa0(-r.dx.a*10*2.5)
r.b.sa0(-r.dx.b*10*2.5)
r.a8()}},
f7:function(a){var s=this
if(t.bv.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
f9:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.m(0,a.x.b))return
s=a.c
r=a.d
q=n.aR(a.y.ah(r).M(0,2).aq(0,s.gb2()))
p=n.c
p.sa_(0,-q.a*2.5+n.cy)
o=n.b
o.sa_(0,-q.b*2.5+n.db)
o.sa0(0)
p.sa0(0)
n.dx=n.aR(a.z.ah(r).M(0,2).aq(0,s.gb2()))
n.a8()},
hm:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
hk:function(a){var s,r,q,p,o,n=this
t.dr.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ah(a.d)
if(s.U(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aR(a.y.ah(r).M(0,2).aq(0,s.gb2()))
p=n.c
p.sa_(0,-q.a*2.5+n.cy)
o=n.b
o.sa_(0,-q.b*2.5+n.db)
o.sa0(0)
p.sa0(0)
n.dx=n.aR(a.z.ah(r).M(0,2).aq(0,s.gb2()))
n.a8()},
hi:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.U(s)>0.0001){r.c.sa0(-r.dx.a*10*2.5)
r.b.sa0(-r.dx.b*10*2.5)
r.a8()}},
aJ:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(o<n){p.dy=n
s=b.y
o=p.c
o.ag(0,s)
n=p.b
n.ag(0,s)
n=V.lg(n.d)
o=o.d
r=Math.cos(o)
q=Math.sin(o)
p.fr=n.M(0,V.b8(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$ia3:1}
U.dm.prototype={
gn:function(){var s=this.dx
return s==null?this.dx=D.I():s},
O:function(a){var s=this.dx
return s==null?null:s.C(a)},
a8:function(){return this.O(null)},
ga_:function(a){return new V.L(this.r.d,this.x.d,this.y.d)},
fG:function(a){return this.O(a)},
c7:function(a,b,c,d,e){if(a.r)e+=d
else if(b.r)e-=d
else e=e>0?e-Math.min(e,c):e+Math.min(-e,c)
return e},
aJ:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i=j.cy,h=b.e
if(i<h){j.cy=h
j.ga_(j)
s=b.y
if(s>0.1)s=0.1
r=60*s
q=15*s
i=j.r
h=j.x
p=j.y
o=j.Q.av(new V.w(i.f,h.f,p.f))
n=j.c7(j.a,j.b,r,q,o.a)
m=j.c7(j.c,j.d,r,q,o.b)
l=j.c7(j.e,j.f,r,q,o.c)
k=j.z.av(new V.w(n,m,l))
i.sa0(k.a)
h.sa0(k.b)
p.sa0(k.c)
i.ag(0,s)
h.ag(0,s)
p.ag(0,s)
j.db=V.lh(i.d,-h.d,p.d)}return j.db},
$ia3:1}
M.ef.prototype={
aO:function(a){var s=this.y
return s==null?null:s.C(a)},
eN:function(){return this.aO(null)},
fs:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaN(),q=t.b,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bP()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.aO(new D.aJ())},
fu:function(a,b){var s,r
for(s=b.gR(b),r=this.gaN();s.t();)s.gG(s).gn().K(0,r)
this.aO(new D.aK())},
gn:function(){var s=this.y
return s==null?this.y=D.I():s},
b3:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.el(d.d)
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
n=C.d.ao(o.a*q)
m=C.d.ao(o.b*p)
l=C.d.ao(o.c*q)
a.c=l
o=C.d.ao(o.d*p)
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
g=V.b8(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.ek(g)
f=$.ms()
e=s.b
if(e!=null)f=e.aJ(0,a,s).M(0,f)
a.db.ek(f)}for(s=d.e.a,r=new J.ab(s,s.length),o=H.U(r).c;r.t();)o.a(r.d).ag(0,a)
for(s=new J.ab(s,s.length),r=H.U(s).c;s.t();)r.a(s.d).b3(a)
if(d.b!=null){a.cy.cD()
a.db.cD()}a.ej()}}
A.e3.prototype={}
A.hv.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hI:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
hH:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.aj.prototype={
gap:function(a){var s=this.a?1:0,r=this.b?2:0,q=this.c?4:0
return s|r|q},
i:function(a){var s=this.a?1:0,r=this.b?2:0,q=this.c?4:0
return""+(s|r|q)},
m:function(a,b){if(b==null)return!1
if(!(b instanceof A.aj))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c}}
A.et.prototype={
eD:function(e5,e6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=null,d1=u.C,d2="Required uniform value, ",d3=", was not defined or used in shader.",d4="emissionTxt",d5="ambientTxt",d6="diffuseTxt",d7="invDiffuseTxt",d8="specularTxt",d9="reflectTxt",e0="refractTxt",e1="alphaTxt",e2=c9.x,e3=new P.a_(""),e4=e2.fr
if(e4){s=""+"uniform mat4 objMat;\n"
e3.a=s}else s=""
r=e2.fx
s=(r?e3.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
e3.a=s
s+="\n"
e3.a=s
s=e3.a=s+"attribute vec3 posAttr;\n"
q=e2.k4
if(q){s+="attribute vec3 normAttr;\n"
e3.a=s}p=e2.r1
e3.a=(p?e3.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.oU(e2,e3)
A.oW(e2,e3)
A.oV(e2,e3)
A.oY(e2,e3)
A.oZ(e2,e3)
A.oX(e2,e3)
A.p_(e2,e3)
s=e3.a+="vec4 getPos()\n"
s+="{\n"
e3.a=s
o=e2.ry
s+="   return projViewObjMat*vec4("+(o?"bendPos":"posAttr")+", 1.0);\n"
e3.a=s
s+="}\n"
e3.a=s
s+="\n"
e3.a=s
s+="void main()\n"
e3.a=s
s=e3.a=s+"{\n"
if(o){s+="   setupBendData();\n"
e3.a=s}if(q){s+="   normalVec = getNorm();\n"
e3.a=s}if(p){s+="   binormalVec = getBinm();\n"
e3.a=s}if(e2.r2){s+="   txt2D = getTxt2D();\n"
e3.a=s}if(e2.rx){s+="   txtCube = getTxtCube();\n"
e3.a=s}if(e2.k2){s+="   objPos = getObjPos();\n"
e3.a=s}s=(e2.k3?e3.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
e3.a=s
s+="}\n"
e3.a=s
s=e3.a=s+"\n"
n=s.charCodeAt(0)==0?s:s
m=A.oT(e2)
c9.c=n
c9.d=m
l=c9.d3(n,35633)
k=c9.d3(c9.d,35632)
s=c9.a
q=s.createProgram()
q.toString
c9.e=q
s.attachShader(c9.gaz(),l)
s.attachShader(c9.gaz(),k)
s.linkProgram(c9.gaz())
if(!H.m0(s.getProgramParameter(c9.gaz(),35714))){j=s.getProgramInfoLog(c9.gaz())
if(j==null)j="undefined log error"
s.deleteProgram(c9.e)
H.h(P.f("Failed to link shader: "+j))}c9.hd()
c9.hf()
c9.y=c9.gas(c9).h(0,"posAttr")
c9.Q=c9.gas(c9).h(0,"normAttr")
c9.z=c9.gas(c9).h(0,"binmAttr")
c9.ch=c9.gas(c9).h(0,"txt2DAttr")
c9.cx=c9.gas(c9).h(0,"txtCubeAttr")
c9.cy=c9.gas(c9).h(0,"bendAttr")
if(e2.dy)c9.fy=t.j.a(c9.gA().w(0,"invViewMat"))
if(e4)c9.db=t.j.a(c9.gA().w(0,"objMat"))
if(r)c9.dx=t.j.a(c9.gA().w(0,"viewObjMat"))
e4=t.j
c9.fr=e4.a(c9.gA().w(0,"projViewObjMat"))
if(e2.go)c9.dy=e4.a(c9.gA().w(0,"viewMat"))
if(e2.x1)c9.go=t.m.a(c9.gA().w(0,"txt2DMat"))
if(e2.x2)c9.id=e4.a(c9.gA().w(0,"txtCubeMat"))
if(e2.y1)c9.k1=e4.a(c9.gA().w(0,"colorMat"))
c9.k3=H.b([],t.p)
s=e2.aX
if(s>0){c9.k2=t.w.a(c9.gA().w(0,"bendMatCount"))
for(i=0;i<s;++i){r=c9.k3
h=c9.r
if(h==null)H.h(P.f(d1))
q="bendValues["+i+"].mat"
g=h.h(0,q)
if(g==null)H.h(P.f(d2+q+d3))
r.push(e4.a(g))}}e4=e2.a
if(e4.a)c9.k4=t.g.a(c9.gA().w(0,"emissionClr"))
if(e4.b)c9.r1=t.G.a(c9.gA().w(0,d4))
else if(e4.c)c9.r2=t.a.a(c9.gA().w(0,d4))
e4=e2.b
if(e4.a)c9.rx=t.g.a(c9.gA().w(0,"ambientClr"))
if(e4.b)c9.ry=t.G.a(c9.gA().w(0,d5))
else if(e4.c)c9.x1=t.a.a(c9.gA().w(0,d5))
e4=e2.c
if(e4.a)c9.x2=t.g.a(c9.gA().w(0,"diffuseClr"))
if(e4.b)c9.y1=t.G.a(c9.gA().w(0,d6))
else if(e4.c)c9.y2=t.a.a(c9.gA().w(0,d6))
e4=e2.d
if(e4.a)c9.aX=t.g.a(c9.gA().w(0,"invDiffuseClr"))
if(e4.b)c9.aY=t.G.a(c9.gA().w(0,d7))
else if(e4.c)c9.by=t.a.a(c9.gA().w(0,d7))
e4=e2.e
s=e4.a
if(s||e4.b||e4.c){c9.dM=t.v.a(c9.gA().w(0,"shininess"))
if(s)c9.dJ=t.g.a(c9.gA().w(0,"specularClr"))
if(e4.b)c9.dK=t.G.a(c9.gA().w(0,d8))
else if(e4.c)c9.dL=t.a.a(c9.gA().w(0,d8))}e4=e2.f
if(e4.b)c9.dN=t.G.a(c9.gA().w(0,"bumpTxt"))
else if(e4.c)c9.dO=t.a.a(c9.gA().w(0,"bumpTxt"))
if(e2.db){e4=t.a
c9.dP=e4.a(c9.gA().w(0,"envSampler"))
s=e2.r
if(s.a)c9.dQ=t.g.a(c9.gA().w(0,"reflectClr"))
if(s.b)c9.dR=t.G.a(c9.gA().w(0,d9))
else if(s.c)c9.dS=e4.a(c9.gA().w(0,d9))
s=e2.x
r=s.a
if(r||s.b||s.c){c9.dT=t.v.a(c9.gA().w(0,"refraction"))
if(r)c9.dU=t.g.a(c9.gA().w(0,"refractClr"))
if(s.b)c9.dV=t.G.a(c9.gA().w(0,e0))
else if(s.c)c9.dW=e4.a(c9.gA().w(0,e0))}}e4=e2.y
if(e4.a)c9.dX=t.v.a(c9.gA().w(0,"alpha"))
if(e4.b)c9.dY=t.G.a(c9.gA().w(0,e1))
else if(e4.c)c9.dZ=t.a.a(c9.gA().w(0,e1))
if(e2.k1){e4=e2.z
s=e4.length
if(s!==0){r=t.S
c9.cg=P.T(r,t.W)
c9.ci=P.T(r,t.O)
for(r=t.w,q=t.g,p=t.v,o=t.Y,f=0;f<e4.length;e4.length===s||(0,H.q)(e4),++f){e=e4[f]
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
a9=a8}b.push(new A.de(g,a2,a3,a9,a8,a7))}c9.ci.k(0,d,b)
a=c9.cg
h=c9.r
if(h==null)H.h(P.f(d1))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.h(P.f(d2+a0+d3))
a.k(0,d,r.a(g))}}e4=e2.Q
s=e4.length
if(s!==0){r=t.S
c9.cj=P.T(r,t.W)
c9.ck=P.T(r,t.Q)
for(r=t.w,q=t.g,p=t.G,o=t.V,f=0;f<e4.length;e4.length===s||(0,H.q)(e4),++f){e=e4[f]
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
b.push(new A.df(b2,b1,b0,g,a2,b3))}c9.ck.k(0,d,b)
a=c9.cj
h=c9.r
if(h==null)H.h(P.f(d1))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.h(P.f(d2+a0+d3))
a.k(0,d,r.a(g))}}e4=e2.ch
s=e4.length
if(s!==0){r=t.S
c9.cl=P.T(r,t.W)
c9.cm=P.T(r,t.c)
for(r=t.w,q=t.g,p=t.m,o=t.a,a=t.F,a0=t.v,a1=t.C,f=0;f<e4.length;e4.length===s||(0,H.q)(e4),++f){e=e4[f]
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
a9=a8}b.push(new A.dh(g,a2,c0,a3,b3,c1,c2,a9,a8,a7))}c9.cm.k(0,d,b)
b4=c9.cl
h=c9.r
if(h==null)H.h(P.f(d1))
b5=c+"Count"
g=h.h(0,b5)
if(g==null)H.h(P.f(d2+b5+d3))
b4.k(0,d,r.a(g))}}e2=e2.cx
e4=e2.length
if(e4!==0){s=t.S
c9.cn=P.T(s,t.W)
c9.co=P.T(s,t.R)
for(s=t.w,r=t.g,q=t.v,p=t.F,o=t.G,a=t.J,f=0;f<e2.length;e2.length===e4||(0,H.q)(e2),++f){e=e2[f]
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
b.push(new A.dk(g,a2,a3,a4,b2,b1,c6,c5,c2,c8,c7,a9,a8,a7,b3,c1))}c9.co.k(0,d,b)
a0=c9.cn
h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"Count"
g=h.h(0,a1)
if(g==null)H.h(P.f(d2+a1+d3))
a0.k(0,d,s.a(g))}}}},
ak:function(a,b){if(b!=null&&b.d)if(a!=null)a.ev(b)},
a9:function(a,b){if(b!=null&&b.d>=6)if(a!=null)a.ew(b)}}
A.b1.prototype={
i:function(a){return"barLight"+this.a}}
A.b4.prototype={
i:function(a){return"dirLight"+this.a}}
A.b9.prototype={
i:function(a){return"pointLight"+this.a}}
A.bc.prototype={
i:function(a){return"spotLight"+this.a}}
A.ig.prototype={
i:function(a){return this.aY}}
A.de.prototype={}
A.df.prototype={}
A.dh.prototype={}
A.dk.prototype={}
A.d4.prototype={
gas:function(a){var s=this.f
if(s==null)throw H.d(P.f("Must initialize the shader prior to getting the attributes."))
return s},
gA:function(){var s=this.r
if(s==null)throw H.d(P.f(u.C))
return s},
gaz:function(){var s=this.e
if(s==null)throw H.d(P.f(u.F))
return s},
d3:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.m0(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.d(P.f('Error compiling shader "'+H.v(q)+'": '+s))}return q},
hd:function(){var s,r,q,p,o=this,n=u.F,m=H.b([],t.eu),l=o.a,k=H.jP(l.getProgramParameter(o.gaz(),35721))
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
m.push(new A.e3(l,q,p))}o.f=new A.hv(m)},
hf:function(){var s,r,q,p,o,n,m=this,l=u.F,k=H.b([],t.dC),j=m.a,i=H.jP(j.getProgramParameter(m.gaz(),35718))
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
k.push(m.hD(o,n,q,p))}m.r=new A.j3(k)},
aQ:function(a,b,c){var s=this.a
if(a===1)return new A.c6(s,b,c)
else return A.kx(s,this.e,b,a,c)},
f1:function(a,b,c){var s=this.a
if(a===1)return new A.di(s,b,c)
else return A.kx(s,this.e,b,a,c)},
f2:function(a,b,c){var s=this.a
if(a===1)return new A.dj(s,b,c)
else return A.kx(s,this.e,b,a,c)},
bu:function(a,b){return new P.fE(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
hD:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aQ(b,c,d)
case 5121:return s.aQ(b,c,d)
case 5122:return s.aQ(b,c,d)
case 5123:return s.aQ(b,c,d)
case 5124:return s.aQ(b,c,d)
case 5125:return s.aQ(b,c,d)
case 5126:return new A.db(s.a,c,d)
case 35664:return new A.fd(s.a,c,d)
case 35665:return new A.dc(s.a,c,d)
case 35666:return new A.dd(s.a,c,d)
case 35667:return new A.fe(s.a,c,d)
case 35668:return new A.ff(s.a,c,d)
case 35669:return new A.fg(s.a,c,d)
case 35674:return new A.fh(s.a,c,d)
case 35675:return new A.dg(s.a,c,d)
case 35676:return new A.c7(s.a,c,d)
case 35678:return s.f1(b,c,d)
case 35680:return s.f2(b,c,d)
case 35670:throw H.d(s.bu("BOOL",c))
case 35671:throw H.d(s.bu("BOOL_VEC2",c))
case 35672:throw H.d(s.bu("BOOL_VEC3",c))
case 35673:throw H.d(s.bu("BOOL_VEC4",c))
default:throw H.d(P.f("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.a0.prototype={}
A.j3.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
w:function(a,b){var s=this.h(0,b)
if(s==null)throw H.d(P.f("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.u()},
u:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.c6.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.fe.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.ff.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.fg.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.fc.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.db.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.fd.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.dc.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.dd.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.fh.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.dg.prototype={
aj:function(a){var s=new Float32Array(H.ch(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.c7.prototype={
aj:function(a){var s=new Float32Array(H.ch(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.di.prototype={
ev:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+this.c}}
A.dj.prototype={
ew:function(a){var s=a.d,r=this.a,q=this.d
if(s<6)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+this.c}}
F.jO.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.ct(q.b,b).ct(q.d.ct(q.c,b),c)
a.sa_(0,new V.L(p.a,p.b,p.c))
a.sbn(p.J())
q=1-b
s=1-c
a.sdB(new V.d_(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
r.f.$3(a,b,c)},
$S:10}
F.kh.prototype={
$2:function(a,b){return 0},
$S:20}
F.kg.prototype={
$3:function(a,b,c){var s,r=this.b.$2(b,c)
if(typeof r!=="number")return H.md(r)
s=a.f
r=(s!=null?new V.w(s.a,s.b,s.c):V.lH()).J().M(0,this.a+r)
a.sa_(0,new V.L(r.a,r.b,r.c))},
$S:10}
F.k4.prototype={
$2:function(a,b){return 0},
$S:20}
F.k3.prototype={
$3:function(a,b,c){var s,r,q=b*2-1,p=c*2-1
a.sa_(0,new V.L(q,p,this.a.$2(b,c)))
a.sbn(new V.w(q,p,1).J())
s=1-b
r=1-c
a.sdB(new V.d_(b*c,2+s*c,4+b*r,6+s*r))},
$S:10}
F.aB.prototype={
b9:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.d(P.f("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.d(P.f("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.ha(a)
s.hb(b)
s.hc(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gP().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a3()}},
bh:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.b.K(r.gP().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a3()}}s.c2()
s.c3()
s.h6()},
ha:function(a){this.a=a
a.gP().b.push(this)},
hb:function(a){this.b=a
a.gP().c.push(this)},
hc:function(a){this.c=a
a.gP().d.push(this)},
c2:function(){var s=this.a
if(s!=null)C.b.K(s.gP().b,this)
this.a=null},
c3:function(){var s=this.b
if(s!=null)C.b.K(s.gP().c,this)
this.b=null},
h6:function(){var s=this.c
if(s!=null)C.b.K(s.gP().d,this)
this.c=null},
eV:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.bG()
if(n!=null)q=q.Y(0,n)
if(s!=null)q=q.Y(0,s)
if(r!=null)q=q.Y(0,r)
if(q.e8())return p
return q.J()},
eX:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aw(0,n)
q=new V.w(o.a,o.b,o.c).J()
o=r.aw(0,n)
return q.bf(new V.w(o.a,o.b,o.c).J()).J()},
cb:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.eV()
if(s==null){s=q.eX()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a3()}return!0},
eU:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.bG()
if(n!=null)q=q.Y(0,n)
if(s!=null)q=q.Y(0,s)
if(r!=null)q=q.Y(0,r)
if(q.e8())return p
return q.J()},
eW:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.C().toString
if(Math.abs(p-0)<1e-9){j=b.aw(0,e)
o=new V.w(j.a,j.b,j.c).J()
if(q.a-r.a<0)o=o.b6(0)}else{n=(j-s.b)/p
j=b.aw(0,e)
j=new V.L(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).aw(0,h)
o=new V.w(j.a,j.b,j.c).J()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.b6(0)}m=l.d
if(m!=null){m=m.J()
o=m.bf(o).J().bf(m).J()}return o},
c9:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.eU()
if(s==null){s=q.eW()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a3()}return!0},
ghy:function(a){var s=this
if(J.J(s.a,s.b))return!0
if(J.J(s.b,s.c))return!0
if(J.J(s.c,s.a))return!0
return!1},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
E:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gv(p)
p=a+C.a.af(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gv(o)
p=p+C.a.af(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gv(o)
s=p+C.a.af(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.u()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.u()
return s+((p==null?"-":p)+"}")},
u:function(){return this.E("")}}
F.hY.prototype={}
F.iM.prototype={
bi:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gv(q)
s=c.a
if(q==(s==null?r:s.gv(s))){q=b.b
q=q==null?r:q.gv(q)
s=c.b
if(q==(s==null?r:s.gv(s))){q=b.c
q=q==null?r:q.gv(q)
s=c.c
q=q==(s==null?r:s.gv(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gv(q)
s=c.b
if(q==(s==null?r:s.gv(s))){q=b.b
q=q==null?r:q.gv(q)
s=c.c
if(q==(s==null?r:s.gv(s))){q=b.c
q=q==null?r:q.gv(q)
s=c.a
q=q==(s==null?r:s.gv(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gv(q)
s=c.c
if(q==(s==null?r:s.gv(s))){q=b.b
q=q==null?r:q.gv(q)
s=c.a
if(q==(s==null?r:s.gv(s))){q=b.c
q=q==null?r:q.gv(q)
s=c.b
q=q==(s==null?r:s.gv(s))}else q=!1
return q}else return!1}}}}
F.eq.prototype={
bh:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null)){if(!q){r=r.a
if(r!=null)C.b.K(r.gad(r).b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a3()}}s.c2()
s.c3()},
c2:function(){var s=this.a
if(s!=null)C.b.K(s.gad(s).b,this)
this.a=null},
c3:function(){var s=this.b
if(s!=null)C.b.K(s.gad(s).c,this)
this.b=null},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
E:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gv(s)
s=a+C.a.af(C.c.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gv(r)
return s+C.a.af(C.c.i(r==null?-1:r),0)},
u:function(){return this.E("")}}
F.i6.prototype={}
F.j2.prototype={
bi:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gv(q)
s=c.a
if(q==(s==null?r:s.gv(s))){q=b.b
q=q==null?r:q.gv(q)
s=c.b
return q==(s==null?r:s.gv(s))}else{q=b.a
q=q==null?r:q.gv(q)
s=c.b
if(q==(s==null?r:s.gv(s))){q=b.b
q=q==null?r:q.gv(q)
s=c.a
return q==(s==null?r:s.gv(s))}else return!1}}}
F.eL.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
E:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gv(s)
return a+C.a.af(C.c.i(s),0)},
u:function(){return this.E("")}}
F.iH.prototype={
ga1:function(){var s=this.a
return s==null?this.a=new F.A(this,H.b([],t.k)):s},
gbm:function(a){var s=this.b
return s==null?this.b=new F.bD(this,H.b([],t.q)):s},
gad:function(a){var s=this.c
return s==null?this.c=new F.c2(this,H.b([],t.L)):s},
gP:function(){var s=this.d
return s==null?this.d=new F.d5(this,H.b([],t.u)):s},
gn:function(){var s=this.e
return s==null?this.e=D.I():s},
cz:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.e
if(a0!=null)++a0.d
a1.ga1().X()
s=b.ga1().c.length
for(a0=a1.ga1().c,r=a0.length,q=t.k,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){o=a0[p]
n=b.a
if(n==null)n=b.a=new F.A(b,H.b([],q))
n.l(0,o.hB())}b.ga1().X()
for(a0=a1.gbm(a1).b,r=a0.length,n=t.q,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){m=a0[p]
l=b.a
if(l==null)l=b.a=new F.A(b,H.b([],q))
k=m.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.A(j,H.b([],q)):i).X()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.c(l,k)
h=l[k]
k=b.b
l=(k==null?b.b=new F.bD(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.A(l,H.b([],q)):k).l(0,h)
l=new F.eL()
if(h.a==null)H.h(P.f("May not create a point with a vertex which is not attached to a shape."))
l.a=h
k=h.b;(k==null?h.b=new F.dn(H.b([],n)):k).b.push(l)
k=l.a
if(k!=null){k=k.a
if(k!=null){j=k.b;(j==null?k.b=new F.bD(k,H.b([],n)):j).b.push(l)}}l=l.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.C(a)}}}for(a0=a1.gad(a1).b,r=a0.length,n=t.L,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){g=a0[p]
l=b.a
if(l==null)l=b.a=new F.A(b,H.b([],q))
k=g.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.A(j,H.b([],q)):i).X()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.c(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.A(b,H.b([],q)):k
k=g.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.A(j,H.b([],q)):i).X()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.c(l,k)
e=l[k]
k=b.c
l=(k==null?b.c=new F.c2(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.A(l,H.b([],q)):k).l(0,f)
k=l.a;(k==null?l.a=new F.A(l,H.b([],q)):k).l(0,e)
l=new F.eq()
k=f.a
if(k==null)H.h(P.f("May not create a line with a start vertex which is not attached to a shape."))
if(k!=e.a)H.h(P.f("May not create a line with vertices attached to different shapes."))
l.a=f
k=f.c;(k==null?f.c=new F.be(H.b([],n),H.b([],n)):k).b.push(l)
l.b=e
k=e.c;(k==null?e.c=new F.be(H.b([],n),H.b([],n)):k).c.push(l)
k=l.a
if(k!=null){k=k.a
if(k!=null){j=k.c;(j==null?k.c=new F.c2(k,H.b([],n)):j).b.push(l)}}l=l.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.C(a)}}}for(a0=a1.gP().b,r=a0.length,n=t.u,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){d=a0[p]
l=b.a
if(l==null)l=b.a=new F.A(b,H.b([],q))
k=d.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.A(j,H.b([],q)):i).X()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.c(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.A(b,H.b([],q)):k
k=d.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.A(j,H.b([],q)):i).X()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.c(l,k)
e=l[k]
k=b.a
l=k==null?b.a=new F.A(b,H.b([],q)):k
k=d.c
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.A(j,H.b([],q)):i).X()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.c(l,k)
c=l[k]
k=b.d
l=(k==null?b.d=new F.d5(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.A(l,H.b([],q)):k).l(0,f)
k=l.a;(k==null?l.a=new F.A(l,H.b([],q)):k).l(0,e)
k=l.a;(k==null?l.a=new F.A(l,H.b([],q)):k).l(0,c)
new F.aB().b9(f,e,c)}a0=b.e
if(a0!=null)a0.au(0)},
aW:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gP().aW()||!1
if(!r.ga1().aW())s=!1
q=r.e
if(q!=null)q.au(0)
return s},
hW:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.ga1().c
s=H.b(m.slice(0),H.kN(m))
for(m=t.k;s.length!==0;){r=C.b.ghM(s)
C.b.cF(s,0)
q=H.b([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.c(s,p)
o=s[p]
if(a.bi(0,r,o)){q.push(o)
C.b.cF(s,p)}}if(q.length>1)b.cz(q)}n.ga1().X()
n.gad(n).cG()
n.gP().cG()
n.gbm(n).ie()
n.gad(n).cH(new F.j2())
n.gP().cH(new F.iM())
m=n.e
if(m!=null)m.au(0)},
hv:function(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=34962,b={},a=e.ga1().c.length,a0=a3.a,a1=(a0&$.bp().a)!==0?1:0
if((a0&$.bo().a)!==0)++a1
if((a0&$.bn().a)!==0)++a1
if((a0&$.bq().a)!==0)++a1
if((a0&$.br().a)!==0)++a1
if((a0&$.dW().a)!==0)++a1
if((a0&$.dX().a)!==0)++a1
if((a0&$.cn().a)!==0)++a1
if((a0&$.bm().a)!==0)++a1
s=a3.gcN(a3)
r=P.cN(a*s,0,!1,t.gR)
b.a=0
q=P.nd(a1,new F.iI(b,e,a3,s*4,a,s,r),t.eT)
a0=a2.a
p=a0.createBuffer()
p.toString
a0.bindBuffer(c,p)
a0.bufferData(c,new Float32Array(H.ch(r)),35044)
a0.bindBuffer(c,d)
o=new Z.cr(new Z.fp(c,p),H.b([],t.fv),q,a3)
if(e.gbm(e).b.length!==0){n=H.b([],t.t)
p=t.q
m=t.k
l=0
while(!0){k=e.b
if(k==null){k=e.b=new F.bD(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.c(k,l)
k=k[l].a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.A(j,H.b([],m)):i).X()}k=k.e}n.push(k==null?0:k);++l}h=Z.kA(a0,34963,n)
o.b.push(new Z.bT(0,n.length,h))}if(e.gad(e).b.length!==0){n=H.b([],t.t)
p=t.L
m=t.k
l=0
while(!0){k=e.c
if(k==null){k=e.c=new F.c2(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.c(k,l)
g=k[l]
k=g.a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.A(j,H.b([],m)):i).X()}k=k.e}n.push(k==null?0:k)
k=g.b
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.A(j,H.b([],m)):i).X()}k=k.e}n.push(k==null?0:k);++l}h=Z.kA(a0,34963,n)
o.b.push(new Z.bT(1,n.length,h))}if(e.gP().b.length!==0){n=H.b([],t.t)
p=t.u
m=t.k
l=0
while(!0){k=e.d
if(k==null){k=e.d=new F.d5(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.c(k,l)
f=k[l]
k=f.a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.A(j,H.b([],m)):i).X()}k=k.e}n.push(k==null?0:k)
k=f.b
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.A(j,H.b([],m)):i).X()}k=k.e}n.push(k==null?0:k)
k=f.c
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.A(j,H.b([],m)):i).X()}k=k.e}n.push(k==null?0:k);++l}h=Z.kA(a0,34963,n)
o.b.push(new Z.bT(4,n.length,h))}return o},
i:function(a){var s=this,r="   ",q=H.b([],t.s)
if(s.ga1().c.length!==0){q.push("Vertices:")
q.push(s.ga1().E(r))}if(s.gbm(s).b.length!==0){q.push("Points:")
q.push(s.gbm(s).E(r))}if(s.gad(s).b.length!==0){q.push("Lines:")
q.push(s.gad(s).E(r))}if(s.gP().b.length!==0){q.push("Faces:")
q.push(s.gP().E(r))}return C.b.p(q,"\n")},
a3:function(){var s=this.e
return s==null?null:s.C(null)}}
F.iI.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c.ht(a),e=f.gcN(f),d=g.a,c=d.a
for(s=g.e,r=g.r,q=r.length,p=g.f,o=g.b,n=t.k,m=0;m<s;++m){l=o.a
l=(l==null?o.a=new F.A(o,H.b([],n)):l).c
if(m>=l.length)return H.c(l,m)
k=l[m].hU(f)
j=d.a+m*p
for(l=k.length,i=0;i<l;++i){h=k[i]
if(j>=q)return H.c(r,j)
r[j]=h;++j}}d.a+=e
return new Z.bM(f,e,c*4,g.d)},
$S:42}
F.d5.prototype={
hs:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=H.b([],t.u)
for(s=this.a,r=t.k,q=b,p=0,o=!1,n=1;n<a;++n,++p,++q){for(m=o,l=1;l<b;++l,q=h){k=c.length
if(p<0||p>=k)return H.c(c,p)
j=c[p];++p
if(p>=k)return H.c(c,p)
i=c[p]
h=q+1
if(h<0||h>=k)return H.c(c,h)
g=c[h]
if(q<0||q>=k)return H.c(c,q)
f=c[q]
k=s.a
if(m){(k==null?s.a=new F.A(s,H.b([],r)):k).l(0,j)
k=s.a;(k==null?s.a=new F.A(s,H.b([],r)):k).l(0,i)
k=s.a;(k==null?s.a=new F.A(s,H.b([],r)):k).l(0,g)
e=new F.aB()
e.b9(j,i,g)
d.push(e)
k=s.a;(k==null?s.a=new F.A(s,H.b([],r)):k).l(0,j)
k=s.a;(k==null?s.a=new F.A(s,H.b([],r)):k).l(0,g)
k=s.a;(k==null?s.a=new F.A(s,H.b([],r)):k).l(0,f)
e=new F.aB()
e.b9(j,g,f)
d.push(e)}else{(k==null?s.a=new F.A(s,H.b([],r)):k).l(0,i)
k=s.a;(k==null?s.a=new F.A(s,H.b([],r)):k).l(0,g)
k=s.a;(k==null?s.a=new F.A(s,H.b([],r)):k).l(0,f)
e=new F.aB()
e.b9(i,g,f)
d.push(e)
k=s.a;(k==null?s.a=new F.A(s,H.b([],r)):k).l(0,i)
k=s.a;(k==null?s.a=new F.A(s,H.b([],r)):k).l(0,f)
k=s.a;(k==null?s.a=new F.A(s,H.b([],r)):k).l(0,j)
e=new F.aB()
e.b9(i,f,j)
d.push(e)}m=!m}o=!o}return d},
gj:function(a){return this.b.length},
cH:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.ga1().c.length-1,q=t.u,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.A(s,H.b([],p)):o).c
if(r>=o.length)return H.c(o,r)
n=o[r]
o=n.d
if(o==null)o=n.d=new F.cc(H.b([],q),H.b([],q),H.b([],q))
m=o.b.length+o.c.length+o.d.length-1
for(;m>=0;m=k){o=n.d
l=(o==null?n.d=new F.cc(H.b([],q),H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.d
if(a.bi(0,l,(o==null?n.d=new F.cc(H.b([],q),H.b([],q),H.b([],q)):o).h(0,j))){l.bh()
break}}}}},
cG:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.c(s,r)
q=s[r]
if(q.ghy(q))q.bh()}},
aW:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].cb())q=!1
return q},
ca:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].c9())q=!1
return q},
i:function(a){return this.u()},
E:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].E(a))
return C.b.p(p,"\n")},
u:function(){return this.E("")}}
F.c2.prototype={
gj:function(a){return this.b.length},
cH:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.ga1().c.length-1,q=t.L,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.A(s,H.b([],p)):o).c
if(r>=o.length)return H.c(o,r)
n=o[r]
o=n.c
if(o==null)o=n.c=new F.be(H.b([],q),H.b([],q))
m=o.b.length+o.c.length-1
for(;m>=0;m=k){o=n.c
l=(o==null?n.c=new F.be(H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.c
if(a.bi(0,l,(o==null?n.c=new F.be(H.b([],q),H.b([],q)):o).h(0,j))){l.bh()
break}}}}},
cG:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.c(s,r)
q=s[r]
if(J.J(q.a,q.b))q.bh()}},
i:function(a){return this.u()},
E:function(a){var s,r=H.b([],t.s),q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.c(q,s)
r.push(q[s].E(a+(""+s+". ")))}return C.b.p(r,"\n")},
u:function(){return this.E("")}}
F.bD.prototype={
gj:function(a){return this.b.length},
ie:function(){var s,r,q,p,o,n,m
for(s=this.b,r=s.length-1,q=t.q;r>=0;--r){if(r>=s.length)return H.c(s,r)
p=s[r].a
if(p==null)o=null
else{n=p.b
p=(n==null?p.b=new F.dn(H.b([],q)):n).b.length
o=p}if((o==null?0:o)>1){if(r>=s.length)return H.c(s,r)
m=s[r]
p=m.a
if(p!=null){p=p.a
if(p!=null){n=p.b
C.b.K((n==null?p.b=new F.bD(p,H.b([],q)):n).b,m)}p=m.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.C(null)}}}p=m.a
if(p!=null){n=p.b
C.b.K((n==null?p.b=new F.dn(H.b([],q)):n).b,m)}m.a=null}}},
i:function(a){return this.u()},
E:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].E(a))
return C.b.p(p,"\n")},
u:function(){return this.E("")}}
F.cb.prototype={
cf:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.lI(s.cx,p,m,r,q,o,n,a,l)},
hB:function(){return this.cf(null)},
gad:function(a){var s=this.c
if(s==null){s=t.L
s=this.c=new F.be(H.b([],s),H.b([],s))}return s},
gP:function(){var s=this.d
if(s==null){s=t.u
s=this.d=new F.cc(H.b([],s),H.b([],s),H.b([],s))}return s},
gv:function(a){var s=this.a
if(s!=null)s.ga1().X()
return this.e},
sa_:function(a,b){var s
if(!J.J(this.f,b)){this.f=b
s=this.a
if(s!=null)s.a3()}},
sbn:function(a){var s
if(!J.J(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a3()}},
sdB:function(a){var s
if(!J.J(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.a3()}},
hU:function(a){var s,r,q,p,o=this,n=null
if(a.m(0,$.bp())){s=o.f
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.m(0,$.bo())){s=o.r
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,1,0],t.n):s}else if(a.m(0,$.bn())){s=o.x
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,1],t.n):s}else if(a.m(0,$.bq())){s=o.y
s=s==null?n:H.b([s.a,s.b],t.n)
return s==null?H.b([0,0],t.n):s}else if(a.m(0,$.br())){s=o.z
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.m(0,$.dW())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return H.b([q,p,s==null?1:s],t.n)}else if(a.m(0,$.dX())){s=o.Q
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([1,1,1,1],t.n):s}else if(a.m(0,$.cn()))return H.b([o.ch],t.n)
else if(a.m(0,$.bm())){s=o.cx
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([-1,-1,-1,-1],t.n):s}else return H.b([],t.n)},
cb:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.bG()
p.gP().D(0,new F.jq(o))
p.r=o.a.J()
if(r){s.a3()
o=s.e
if(o!=null)o.au(0)}return!0},
c9:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.bG()
p.gP().D(0,new F.jp(o))
p.x=o.a.J()
if(r){s.a3()
o=s.e
if(o!=null)o.au(0)}return!0},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
E:function(a){var s,r,q=this,p=null,o="-",n=H.b([],t.s)
n.push(C.a.af(C.c.i(q.e),0))
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
n.push(V.y(q.ch,3,0))
s=q.cx
s=s==null?p:s.u()
n.push(s==null?o:s)
r=C.b.p(n,", ")
return a+"{"+r+"}"},
u:function(){return this.E("")}}
F.jq.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.Y(0,r)}},
$S:7}
F.jp.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.Y(0,r)}},
$S:7}
F.A.prototype={
X:function(){var s,r,q
if(this.b){s=this.c
r=s.length
for(q=0;q<r;++q)s[q].e=q
this.b=!1}},
l:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.d(P.f("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a3()
return!0},
du:function(a,b){var s=null,r=F.lI(s,s,a,s,s,b,s,s,0)
this.l(0,r)
return r},
gj:function(a){return this.c.length},
aW:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].cb()
return!0},
ca:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].c9()
return!0},
hw:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.J()
if(!J.J(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.C(null)}}}}}return!0},
i:function(a){return this.u()},
E:function(a){var s,r,q,p
this.X()
s=H.b([],t.s)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p)s.push(r[p].E(a))
return C.b.p(s,"\n")},
u:function(){return this.E("")}}
F.cc.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b<q){if(b<0)return H.c(r,b)
return r[b]}b-=q
r=this.c
s=r.length
if(b<s){if(b<0)return H.c(r,b)
return r[b]}b-=s
r=this.d
if(b<0||b>=r.length)return H.c(r,b)
return r[b]},
D:function(a,b){var s=this
C.b.D(s.b,b)
C.b.D(s.c,new F.jk(s,b))
C.b.D(s.d,new F.jl(s,b))},
i:function(a){return this.u()},
u:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].E(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].E(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].E(""))
return C.b.p(p,"\n")}}
F.jk.prototype={
$1:function(a){if(!J.J(a.a,this.a))this.b.$1(a)},
$S:7}
F.jl.prototype={
$1:function(a){var s=this.a
if(!J.J(a.a,s)&&!J.J(a.b,s))this.b.$1(a)},
$S:7}
F.be.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.c(r,s)
return r[s]}else{if(b<0)return H.c(r,b)
return r[b]}},
i:function(a){return this.u()},
u:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].E(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].E(""))
return C.b.p(p,"\n")}}
F.jn.prototype={}
F.jm.prototype={
bi:function(a,b,c){return J.J(b.f,c.f)}}
F.jo.prototype={}
F.iy.prototype={
cz:function(a){var s,r,q,p,o,n=V.bG()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)n=new V.w(n.a+q.a,n.b+q.b,n.c+q.c)}n=n.J()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){p=a[r]
q=n.J()
if(!J.J(p.r,q)){p.r=q
o=p.a
if(o!=null){o=o.e
if(o!=null)o.C(null)}}}return null}}
F.dn.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.u()},
u:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].E(""))
return C.b.p(p,"\n")}}
O.cR.prototype={
gn:function(){var s=this.fr
return s==null?this.fr=D.I():s},
W:function(a){var s=this.fr
return s==null?null:s.C(a)},
bZ:function(){return this.W(null)},
df:function(a){this.a=null
this.W(a)},
h9:function(){return this.df(null)},
fl:function(a,b){return this.W(new D.aJ())},
fn:function(a,b){return this.W(new D.aK())},
gcu:function(){var s=this,r=s.dx
if(r==null){r=new D.cK(H.b([],t.i),H.b([],t.U),H.b([],t.o),H.b([],t.D),H.b([],t.e))
r.bJ(r.gfi(),r.gfT(),r.gfX())
r.gn().l(0,s.gde())
r.ge9().l(0,s.gaA())
s.dx=r}return r},
gbe:function(){var s=this.r
return s==null?this.r=O.eu(this,"ambient"):s},
gbg:function(){var s=this.x
return s==null?this.x=O.eu(this,"diffuse"):s},
gcO:function(){var s=this.z
return s==null?this.z=new O.ij(new V.S(0,0,0),this,"specular",new A.aj(!1,!1,!1)):s},
d1:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=t.y,a2=new H.W(a1),a3=a.dx
a3=a3==null?a0:a3.e
if(a3==null)a3=H.b([],t.i)
s=a3.length
r=0
for(;r<a3.length;a3.length===s||(0,H.q)(a3),++r){q=a3[r]
p=q.gat()
o=a2.h(0,q.gat())
a2.k(0,p,o==null?1:o)}n=H.b([],t.cn)
a2.D(0,new O.ik(a,n))
C.b.b8(n,new O.il())
m=new H.W(a1)
a3=a.dx
a3=a3==null?a0:a3.f
if(a3==null)a3=H.b([],t.U)
s=a3.length
r=0
for(;r<a3.length;a3.length===s||(0,H.q)(a3),++r){p=m.h(0,0)
m.k(0,0,p==null?1:p)}l=H.b([],t.fD)
m.D(0,new O.im(a,l))
C.b.b8(l,new O.io())
k=new H.W(a1)
a3=a.dx
a3=a3==null?a0:a3.r
if(a3==null)a3=H.b([],t.o)
s=a3.length
r=0
for(;r<a3.length;a3.length===s||(0,H.q)(a3),++r){q=a3[r]
p=q.gat()
o=k.h(0,q.gat())
k.k(0,p,o==null?1:o)}j=H.b([],t.eg)
k.D(0,new O.ip(a,j))
C.b.b8(j,new O.iq())
i=new H.W(a1)
a1=a.dx
a1=a1==null?a0:a1.x
if(a1==null)a1=H.b([],t.D)
a3=a1.length
r=0
for(;r<a1.length;a1.length===a3||(0,H.q)(a1),++r){q=a1[r]
s=q.gat()
p=i.h(0,q.gat())
i.k(0,s,p==null?1:p)}h=H.b([],t.c3)
i.D(0,new O.ir(a,h))
C.b.b8(h,new O.is())
a1=C.c.a2(a.e.a.length+3,4)
a3=a.b
if(a.dy==null)a.dy=new O.ih(new V.bu(0,0,0,0))
s=a.f
s=(s==null?a.f=O.eu(a,"emission"):s).c
p=a.gbe().c
o=a.gbg().c
g=a.y
g=(g==null?a.y=O.eu(a,"invDiffuse"):g).c
f=a.gcO().c
e=a.Q
e=(e==null?a.Q=new O.ie(a,"bump",new A.aj(!1,!1,!1)):e).c
d=a.cx
d=(d==null?a.cx=O.eu(a,"reflect"):d).c
c=a.cy
c=(c==null?a.cy=new O.ii(new V.S(0,0,0),a,"refract",new A.aj(!1,!1,!1)):c).c
b=a.db
return A.nf(a3!=null,!1,!1,!1,a1*4,s,p,o,g,f,e,d,c,(b==null?a.db=new O.id(a,"alpha",new A.aj(!1,!1,!1)):b).c,n,l,j,h)},
S:function(a,b){if(b!=null)if(!C.b.H(a,b)){b.sv(0,a.length)
a.push(b)}},
ag:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.aE(m==null?H.b([],t.e):m)
s=H.U(m).c
for(;m.t();){r=s.a(m.d)
q=$.jj
if(q==null)q=$.jj=new V.w(0,0,1)
r.c=q
p=$.ji
r.d=p==null?$.ji=new V.w(0,1,0):p
p=$.jh
r.e=p==null?$.jh=new V.w(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.av(q).J()
r.d=n.av(r.d).J()
r.e=n.av(r.e).J()}}},
ih:function(b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null,b0=a8.a
if(b0==null){s=a8.d1()
r=s.aY
q=b1.fr
b0=q.h(0,r)
if(b0==null){p=b1.a
o=t.S
n=t.W
b0=new A.et(s,H.b([],t.p),P.T(o,n),P.T(o,t.O),P.T(o,n),P.T(o,t.Q),P.T(o,n),P.T(o,t.c),P.T(o,n),P.T(o,t.R),p,r)
b0.eD(s,p)
if(r.length===0)H.h(P.f("May not cache a shader with no name."))
if(q.cd(0,r))H.h(P.f('Shader cache already contains a shader by the name "'+r+'".'))
q.k(0,r,b0)}b0=a8.a=b0
b2.e=null}m=b0.x
l=m.by
s=b2.e
if(!(s instanceof Z.cr))s=b2.e=null
if(s==null||!s.d.m(0,l)){s=m.k4
if(s){r=b2.d
if(r!=null)r.aW()}r=m.r1
if(r){q=b2.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gP().ca()
q.ga1().ca()
q=q.e
if(q!=null)q.au(0)}}q=m.rx
if(q){p=b2.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.ga1().hw()
p=p.e
if(p!=null)p.au(0)}}p=b2.d
k=p==null?a9:p.hv(new Z.jr(b1.a),l)
if(k==null)return
p=k.aZ($.bp())
if(p!=null){o=b0.y
o=o==null?a9:o.c
p.e=o==null?0:o}if(s){s=k.aZ($.bo())
if(s!=null){p=b0.Q
p=p==null?a9:p.c
s.e=p==null?1:p}}if(r){s=k.aZ($.bn())
if(s!=null){r=b0.z
r=r==null?a9:r.c
s.e=r==null?2:r}}if(m.r2){s=k.aZ($.bq())
if(s!=null){r=b0.ch
r=r==null?a9:r.c
s.e=r==null?3:r}}if(q){s=k.aZ($.br())
if(s!=null){r=b0.cx
r=r==null?a9:r.c
s.e=r==null?4:r}}if(m.ry){s=k.aZ($.bm())
if(s!=null){r=b0.cy
r=r==null?a9:r.c
s.e=r==null?5:r}}b2.e=k}j=H.b([],t.ga)
s=b1.a
s.useProgram(b0.e)
b0.gas(b0).hI()
if(m.fr){r=b1.dx
r=r.gV(r)
q=b0.db
if(q!=null)q.aj(r.a6(0,!0))}if(m.fx){r=b1.cx
if(r==null){r=b1.db
q=b1.dx
q=b1.cx=r.gV(r).M(0,q.gV(q))
r=q}q=b0.dx
if(q!=null)q.aj(r.a6(0,!0))}r=b1.ch
if(r==null){r=b1.dx
r=b1.ch=b1.gic().M(0,r.gV(r))}q=b0.fr
if(q!=null)q.aj(r.a6(0,!0))
if(m.go){r=b1.db
r=r.gV(r)
q=b0.dy
if(q!=null)q.aj(r.a6(0,!0))}if(m.x1){r=a8.b
if(r==null)r=V.it()
q=b0.go
if(q!=null)q.aj(r.a6(0,!0))}if(m.x2){r=V.aC()
q=b0.id
if(q!=null)q.aj(r.a6(0,!0))}if(m.y1){r=V.aC()
q=b0.k1
if(q!=null)q.aj(r.a6(0,!0))}if(m.aX>0){r=a8.e.a
i=r.length
q=b0.k2
if(q!=null)q.a.uniform1i(q.d,i)
for(h=0;h<i;++h){if(h>=r.length)return H.c(r,h)
q=r[h]
p=b0.k3
if(h>=p.length)return H.c(p,h)
p=p[h]
g=new Float32Array(H.ch(q.a6(0,!0)))
p.a.uniformMatrix4fv(p.d,!1,g)}}r=m.a
if(r.a){q=a8.f
q=q==null?a9:q.f
if(q==null)q=new V.S(0,0,0)
p=b0.k4
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a8.f
a8.S(j,r==null?a9:r.d)
r=a8.f
r=r==null?a9:r.d
b0.ak(b0.r1,r)}else if(r.c){r=a8.f
a8.S(j,r==null?a9:r.e)
r=a8.f
r=r==null?a9:r.e
b0.a9(b0.r2,r)}if(m.k1){r=m.b
if(r.a){q=a8.r
q=q==null?a9:q.f
if(q==null)q=new V.S(0,0,0)
p=b0.rx
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a8.r
a8.S(j,r==null?a9:r.d)
r=a8.r
r=r==null?a9:r.d
b0.ak(b0.ry,r)}else if(r.c){r=a8.r
a8.S(j,r==null?a9:r.e)
r=a8.r
r=r==null?a9:r.e
b0.a9(b0.x1,r)}r=m.c
if(r.a){q=a8.x
q=q==null?a9:q.f
if(q==null)q=new V.S(0,0,0)
p=b0.x2
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a8.x
a8.S(j,r==null?a9:r.d)
r=a8.x
r=r==null?a9:r.d
b0.ak(b0.y1,r)}else if(r.c){r=a8.x
a8.S(j,r==null?a9:r.e)
r=a8.x
r=r==null?a9:r.e
b0.a9(b0.y2,r)}r=m.d
if(r.a){q=a8.y
q=q==null?a9:q.f
if(q==null)q=new V.S(0,0,0)
p=b0.aX
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a8.y
a8.S(j,r==null?a9:r.d)
r=a8.y
r=r==null?a9:r.d
b0.ak(b0.aY,r)}else if(r.c){r=a8.y
a8.S(j,r==null?a9:r.e)
r=a8.y
r=r==null?a9:r.e
b0.a9(b0.by,r)}r=m.e
q=r.a
if(q||r.b||r.c){p=a8.z
p=p==null?a9:p.ch
if(p==null)p=100
o=b0.dM
if(o!=null)o.a.uniform1f(o.d,p)}if(q){q=a8.z
q=q==null?a9:q.f
if(q==null)q=new V.S(1,1,1)
p=b0.dJ
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a8.z
a8.S(j,r==null?a9:r.d)
r=a8.z
r=r==null?a9:r.d
b0.ak(b0.dK,r)}else if(r.c){r=a8.z
a8.S(j,r==null?a9:r.e)
r=a8.z
r=r==null?a9:r.e
b0.a9(b0.dL,r)}r=m.z
if(r.length>0){f=new H.W(t.y)
q=a8.dx
q=q==null?a9:q.e
if(q==null)q=H.b([],t.i)
p=q.length
o=t.Y
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.gat()
b=f.h(0,c)
if(b==null)b=0
f.k(0,c,b+1)
n=b0.ci.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.c(n,b)
a=n[b]
n=d.giv()
a0=$.ag
n=n.bp(a0==null?$.ag=new V.L(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.giA()
a0=$.ag
n=n.bp(a0==null?$.ag=new V.L(0,0,0):a0)
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gaD(d)
a0=a.d
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
if(d.gdI()){n=d.gdw()
a0=a.e
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdz()
a0=a.f
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdA()
a0=a.r
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=f.h(0,p)
if(i==null)i=0
p=b0.cg.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.Q
if(r.length>0){q=b1.db
a1=q.gV(q)
a2=new H.W(t.y)
q=a8.dx
q=q==null?a9:q.f
if(q==null)q=H.b([],t.U)
p=q.length
o=t.V
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
b=a2.h(0,0)
if(b==null)b=0
a2.k(0,0,b+1)
n=b0.ck.h(0,0)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.c(n,b)
a=n[b]
n=a1.av(d.c).J()
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.b
a0=a.f
a0.a.uniform3f(a0.d,n.a,n.b,n.c)}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a2.h(0,p)
if(i==null)i=0
p=b0.cj.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.ch
if(r.length>0){q=b1.db
a1=q.gV(q)
a3=new H.W(t.y)
q=a8.dx
q=q==null?a9:q.r
if(q==null)q=H.b([],t.o)
p=q.length
o=t.C
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.gat()
b=a3.h(0,c)
if(b==null)b=0
a3.k(0,c,b+1)
n=b0.cm.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.c(n,b)
a=n[b]
a4=a1.M(0,d.gV(d))
n=d.gV(d)
a0=$.ag
n=n.bp(a0==null?$.ag=new V.L(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=$.ag
n=a4.bp(n==null?$.ag=new V.L(0,0,0):n)
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gaD(d)
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
d.gaI()
n=a4.bA(0)
a0=a.d
if(a0!=null){g=new Float32Array(H.ch(new V.b7(n.a,n.b,n.c,n.e,n.f,n.r,n.y,n.z,n.Q).a6(0,!0)))
a0.a.uniformMatrix3fv(a0.d,!1,g)}d.gaI()
n=d.gaI()
if(!C.b.H(j,n)){n.sv(0,j.length)
j.push(n)}n=d.gaI()
a0=n.gcv(n)
if(a0){a0=a.f
if(a0!=null){a5=n.d
a6=a0.a
a0=a0.d
if(a5<6)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.a)}}d.gb7()
n=d.gex()
a0=a.x
if(a0!=null)a0.a.uniform4f(a0.d,n.a,n.b,n.c,n.d)
n=d.gb7()
if(!C.b.H(j,n)){n.sv(0,j.length)
j.push(n)}n=d.gb7()
a0=n.gcv(n)
if(a0){a0=a.r
if(a0!=null){a5=n.d
a6=a0.a
a0=a0.d
if(a5<6)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.a)}}if(d.gdI()){n=d.gdw()
a0=a.y
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdz()
a0=a.z
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdA()
a0=a.Q
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a3.h(0,p)
if(i==null)i=0
p=b0.cl.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.cx
if(r.length>0){q=b1.db
a1=q.gV(q)
a7=new H.W(t.y)
q=a8.dx
q=q==null?a9:q.x
if(q==null)q=H.b([],t.D)
p=q.length
o=t.J
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.gat()
b=a7.h(0,c)
if(b==null)b=0
a7.k(0,c,b+1)
n=b0.co.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.c(n,b)
a=n[b]
n=d.gib(d)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.giy(d).J()
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=a1.bp(d.gib(d))
a0=a.d
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gaD(d)
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
d.gaI()
n=d.giG()
a0=a.f
if(a0!=null)a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gcI(d)
a0=a.r
if(a0!=null)a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.giE()
a0=a.x
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.giF()
a0=a.y
if(a0!=null)a0.a.uniform1f(a0.d,n)
d.gaI()
n=d.gaI()
if(!C.b.H(j,n)){n.sv(0,j.length)
j.push(n)}n=d.gaI()
a0=n.gcv(n)
if(a0){a0=a.dx
if(a0!=null){a5=n.d
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.a)}}d.gb7()
n=d.gex()
a0=a.z
if(a0!=null)a0.a.uniform4f(a0.d,n.a,n.b,n.c,n.d)
n=d.gb7()
if(!C.b.H(j,n)){n.sv(0,j.length)
j.push(n)}n=d.gb7()
a0=n.gcv(n)
if(a0){a0=a.dy
if(a0!=null){a5=n.d
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.a)}}if(d.giz()){n=d.gix()
a0=a.Q
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.giw()
a0=a.ch
if(a0!=null)a0.a.uniform1f(a0.d,n)}if(d.gdI()){n=d.gdw()
a0=a.cx
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdz()
a0=a.cy
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdA()
a0=a.db
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a7.h(0,p)
if(i==null)i=0
p=b0.cn.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}}r=m.f
if(r.b){r=a8.Q
a8.S(j,r==null?a9:r.d)
r=a8.Q
r=r==null?a9:r.d
b0.ak(b0.dN,r)}else if(r.c){r=a8.Q
a8.S(j,r==null?a9:r.e)
r=a8.Q
r=r==null?a9:r.e
b0.a9(b0.dO,r)}if(m.dy){r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.gV(r).bA(0)}q=b0.fy
if(q!=null)q.aj(r.a6(0,!0))}if(m.db){a8.S(j,a9)
b0.a9(b0.dP,a9)
r=m.r
if(r.a){q=a8.cx
q=q==null?a9:q.f
if(q==null)q=new V.S(1,1,1)
p=b0.dQ
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a8.cx
a8.S(j,r==null?a9:r.d)
r=a8.cx
r=r==null?a9:r.d
b0.ak(b0.dR,r)}else if(r.c){r=a8.cx
a8.S(j,r==null?a9:r.e)
r=a8.cx
r=r==null?a9:r.e
b0.a9(b0.dS,r)}r=m.x
q=r.a
if(q||r.b||r.c){p=a8.cy
p=p==null?a9:p.ch
if(p==null)p=0
o=b0.dT
if(o!=null)o.a.uniform1f(o.d,p)}if(q){q=a8.cy
q=q==null?a9:q.f
if(q==null)q=new V.S(1,1,1)
p=b0.dU
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a8.cy
a8.S(j,r==null?a9:r.d)
r=a8.cy
r=r==null?a9:r.d
b0.ak(b0.dV,r)}else if(r.c){r=a8.cy
a8.S(j,r==null?a9:r.e)
r=a8.cy
r=r==null?a9:r.e
b0.a9(b0.dW,r)}}r=m.y
q=r.a
p=!q
if(!p||r.b||r.c){if(q){q=a8.db
q=q==null?a9:q.f
if(q==null)q=1
o=b0.dX
if(o!=null)o.a.uniform1f(o.d,q)}if(r.b){q=a8.db
a8.S(j,q==null?a9:q.d)
q=a8.db
q=q==null?a9:q.d
b0.ak(b0.dY,q)}else if(r.c){q=a8.db
a8.S(j,q==null?a9:q.e)
q=a8.db
q=q==null?a9:q.e
b0.a9(b0.dZ,q)}s.enable(3042)
s.blendFunc(770,771)}for(h=0;h<j.length;++h)j[h].aV(b1)
q=t.ed.a(b2.e)
q.aV(b1)
q.b3(b1)
q.bG(b1)
if(!p||r.b||r.c)s.disable(3042)
for(h=0;h<j.length;++h)j[h].bG(b1)
s.useProgram(a9)
b0.gas(b0).hH()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.d1().aY}}
O.ik.prototype={
$2:function(a,b){return this.b.push(new A.b1(a,C.c.a2(b+3,4)*4))},
$S:6}
O.il.prototype={
$2:function(a,b){return C.c.ab(a.a,b.a)},
$S:46}
O.im.prototype={
$2:function(a,b){return this.b.push(new A.b4(a,C.c.a2(b+3,4)*4))},
$S:6}
O.io.prototype={
$2:function(a,b){return C.c.ab(a.a,b.a)},
$S:47}
O.ip.prototype={
$2:function(a,b){return this.b.push(new A.b9(a,C.c.a2(b+3,4)*4))},
$S:6}
O.iq.prototype={
$2:function(a,b){return C.c.ab(a.a,b.a)},
$S:48}
O.ir.prototype={
$2:function(a,b){return this.b.push(new A.bc(a,C.c.a2(b+3,4)*4))},
$S:6}
O.is.prototype={
$2:function(a,b){return C.c.ab(a.a,b.a)},
$S:49}
O.id.prototype={
aB:function(){var s,r=this
r.cQ()
s=r.f
$.C().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.W(new D.D(r.b,s,1))}}}
O.cS.prototype={
W:function(a){return this.a.W(a)},
bZ:function(){return this.W(null)},
aB:function(){},
dk:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gn().K(0,r.gaA())
s=r.d
r.d=a
if(a!=null)a.gn().l(0,r.gaA())
r.a.W(new D.D(r.b+".texture2D",s,r.d))}},
dl:function(a){var s,r=this,q=r.e
if(q!=a){if(q!=null)q.gn().K(0,r.gaA())
s=r.e
r.e=a
if(a!=null)a.gn().l(0,r.gaA())
r.a.W(new D.D(r.b+".textureCube",s,r.e))}},
bt:function(a){var s,r,q=this
if(!q.c.m(0,a)){s=q.c
if(s.a||s.b||s.c)r=!(a.a||a.b||a.c)
else r=!0
q.c=a
if(r)q.aB()
s=q.a
s.a=null
s.W(null)}},
sep:function(a){var s=this,r=s.c
if(!r.b){s.bt(new A.aj(r.a,!0,!1))
s.dl(null)}s.dk(a)},
sbn:function(a){var s=this,r=s.c
if(!r.c){s.bt(new A.aj(r.a,!1,!0))
s.dk(null)}s.dl(a)}}
O.ie.prototype={}
O.cT.prototype={
di:function(a){var s,r=this
if(!r.f.m(0,a)){s=r.f
r.f=a
r.a.W(new D.D(r.b+".color",s,a))}},
aB:function(){this.cQ()
this.di(new V.S(1,1,1))},
saD:function(a,b){var s=this.c
this.bt(new A.aj(!0,s.b,s.c))
this.di(b)}}
O.ih.prototype={}
O.ii.prototype={
aB:function(){var s,r=this
r.cR()
s=r.ch
$.C().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.W(new D.D(r.b+".refraction",s,1))}}}
O.ij.prototype={
dj:function(a){var s=this,r=s.ch
$.C().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.W(new D.D(s.b+".shininess",r,a))}},
aB:function(){this.cR()
this.dj(100)}}
O.d8.prototype={}
T.bE.prototype={}
T.f3.prototype={}
T.f4.prototype={
sv:function(a,b){this.a=b},
gn:function(){var s=this.y
return s==null?this.y=D.I():s},
aV:function(a){var s,r=this
if(!r.c&&r.d){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(3553,r.b)}},
bG:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(3553,null)}}}
T.f5.prototype={
sv:function(a,b){this.a=b},
gn:function(){var s=this.e
return s==null?this.e=D.I():s},
aV:function(a){var s,r=this
if(!r.c&&r.d>=6){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(34067,r.b)}},
bG:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(34067,null)}}}
T.iS.prototype={
hV:function(a,b,c){var s,r,q=3553,p=this.a,o=p.createTexture()
o.toString
p.bindTexture(q,o)
p.texParameteri(q,10242,10497)
p.texParameteri(q,10243,10497)
p.texParameteri(q,10241,9987)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null)
this.d8()
s=W.l8(a)
r=new T.f4(o)
W.a1(s,"load",new T.iU(this,r,s,!1,o,!1,!0),!1)
return r},
aS:function(a,b,c,d,e,f){var s=W.l8(c)
this.d8()
W.a1(s,"load",new T.iT(this,s,!1,b,!1,d,a),!1)},
dh:function(a,b,c){var s,r,q,p,o,n
b=V.kY(b)
s=a.width
r=V.kY(s==null?512:s)
s=a.height
q=V.kY(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.kl()
p.width=r
p.height=q
o=t.ar.a(C.k.eu(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.ph(o.getImageData(0,0,s,n==null?512:n))}},
d8:function(){return this.d++},
d4:function(){return this.e++}}
T.iU.prototype={
$1:function(a){var s,r,q=this,p=3553,o=q.c
o.width
o.height
s=q.a
r=s.dh(o,s.b,q.d)
o.width
o.height
o=s.a
o.bindTexture(p,q.e)
o.pixelStorei(37440,0)
C.B.eo(o,p,0,6408,6408,5121,r)
o.generateMipmap(p)
o.bindTexture(p,null)
o=q.b
if(!o.d){o.d=!0
o=o.y
if(o!=null)o.dH()}s.d4()},
$S:2}
T.iT.prototype={
$1:function(a){var s=this,r=s.a,q=r.dh(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,0)
C.B.eo(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.dH()}r.d4()},
$S:2}
X.i1.prototype={
gn:function(){var s=this.x
return s==null?this.x=D.I():s}}
X.eH.prototype={
gn:function(){var s=this.f
return s==null?this.f=D.I():s},
aP:function(a){var s=this.f
return s==null?null:s.C(a)},
eQ:function(){return this.aP(null)},
saH:function(a){var s,r,q=this
if(!J.J(q.b,a)){s=q.b
if(s!=null)s.gn().K(0,q.gcY())
r=q.b
q.b=a
if(a!=null)a.gn().l(0,q.gcY())
q.aP(new D.D("mover",r,q.b))}}}
X.iQ.prototype={}
V.hD.prototype={
hp:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=k.d,i=j.length,h=P.ky().gbE().h(0,k.a)
if(h==null||h.length<=i){s=!0
r=!1}else{if(i>=h.length)return H.c(h,i)
r=h[i]==="1"
s=!1}c.$1(r)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
o=k.c
n=J.bk(o)
n.gbw(o).l(0,p)
m=W.n4("checkbox")
m.checked=r
W.a1(m,"change",new V.hE(k,m,c,i),!1)
p.children.toString
p.appendChild(m).toString
l=q.createElement("span")
l.textContent=b
p.appendChild(l).toString
o=n.gbw(o)
q=q.createElement("br")
q.toString
o.l(0,q)
j.push(m)
if(s)k.ds(i,r)},
ds:function(a,b){var s,r,q,p,o,n=this.a,m=P.ky().gbE().h(0,n)
if(m==null)m=""
s=m.length
if(s<a)m=C.a.i5(m,a-s+1,"0")
r=a>0?C.a.q(m,0,a):""
r+=b?"1":"0"
s=a+1
if(s<m.length)r+=C.a.a7(m,s)
q=P.ky()
s=t.N
p=P.nc(q.gbE(),s,s)
p.k(0,n,r)
o=q.em(0,p)
n=window.history
n.toString
s=o.gc6()
n.replaceState(new P.jE([],[]).bH(""),"",s)}}
V.hE.prototype={
$1:function(a){var s=this,r=s.b.checked,q=r===!0
s.c.$1(q)
s.a.ds(s.d,q)},
$S:2}
V.kf.prototype={
$1:function(a){var s=C.d.cK(this.a.ghQ(),2)
if(s!=="0.00")P.kZ(s+" fps")},
$S:50}
V.iJ.prototype={
dv:function(a){var s,r,q,p,o,n,m=this.he(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.R(C.b.hT(a)),s=new P.cf(m.eq(new H.bW(s,s.gj(s))).a());s.t();){r=s.gG(s)
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
if(H.mj(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.c(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.kM(C.V,r,C.h,!1)
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
hq:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
he:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other",f=this.b
if(f!=null)return f
s=t.N
f=new L.iY(P.T(s,t.dl),P.T(s,t.f7),P.lb(s))
f.d=f.N(0,o)
s=f.N(0,o).p(0,n)
r=t.t
q=new K.Y(H.b([],r))
q.Z(new H.R("*"))
s.a.push(q)
s.c=!0
s=f.N(0,n).p(0,n)
q=t.B
p=H.b([],q)
s.a.push(new K.aQ(p))
s=new K.Y(H.b([],r))
s.Z(new H.R("*"))
p.push(s)
s=f.N(0,n).p(0,"BoldEnd")
p=new K.Y(H.b([],r))
p.Z(new H.R("*"))
s.a.push(p)
s.c=!0
s=f.N(0,o).p(0,m)
p=new K.Y(H.b([],r))
p.Z(new H.R("_"))
s.a.push(p)
s.c=!0
s=f.N(0,m).p(0,m)
p=H.b([],q)
s.a.push(new K.aQ(p))
s=new K.Y(H.b([],r))
s.Z(new H.R("_"))
p.push(s)
s=f.N(0,m).p(0,l)
p=new K.Y(H.b([],r))
p.Z(new H.R("_"))
s.a.push(p)
s.c=!0
s=f.N(0,o).p(0,k)
p=new K.Y(H.b([],r))
p.Z(new H.R("`"))
s.a.push(p)
s.c=!0
s=f.N(0,k).p(0,k)
p=H.b([],q)
s.a.push(new K.aQ(p))
s=new K.Y(H.b([],r))
s.Z(new H.R("`"))
p.push(s)
s=f.N(0,k).p(0,"CodeEnd")
p=new K.Y(H.b([],r))
p.Z(new H.R("`"))
s.a.push(p)
s.c=!0
s=f.N(0,o).p(0,j)
p=new K.Y(H.b([],r))
p.Z(new H.R("["))
s.a.push(p)
s.c=!0
s=f.N(0,j).p(0,i)
p=new K.Y(H.b([],r))
p.Z(new H.R("|"))
s.a.push(p)
p=f.N(0,j).p(0,h)
s=new K.Y(H.b([],r))
s.Z(new H.R("]"))
p.a.push(s)
p.c=!0
p=f.N(0,j).p(0,j)
s=H.b([],q)
p.a.push(new K.aQ(s))
p=new K.Y(H.b([],r))
p.Z(new H.R("|]"))
s.push(p)
p=f.N(0,i).p(0,h)
s=new K.Y(H.b([],r))
s.Z(new H.R("]"))
p.a.push(s)
p.c=!0
p=f.N(0,i).p(0,i)
s=H.b([],q)
p.a.push(new K.aQ(s))
p=new K.Y(H.b([],r))
p.Z(new H.R("|]"))
s.push(p)
f.N(0,o).p(0,g).a.push(new K.e_())
p=f.N(0,g).p(0,g)
q=H.b([],q)
p.a.push(new K.aQ(q))
r=new K.Y(H.b([],r))
r.Z(new H.R("*_`["))
q.push(r)
r=f.N(0,"BoldEnd")
r.d=r.a.bo(n)
r=f.N(0,l)
r.d=r.a.bo(m)
r=f.N(0,"CodeEnd")
r.d=r.a.bo(k)
r=f.N(0,h)
r.d=r.a.bo("Link")
r=f.N(0,g)
r.d=r.a.bo(g)
return this.b=f}}
V.iL.prototype={
$1:function(a){P.lx(C.o,new V.iK(this.a))},
$S:2}
V.iK.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.ao(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.v(-0.01*s)+"px"
q.top=r},
$S:3}
Q.co.prototype={}
Q.e8.prototype={
cc:function(){var s=this
C.b.sj(s.e,0)
C.b.sj(s.f,0)
C.b.sj(s.r,0)
C.b.sj(s.x,0)
C.b.sj(s.y,0)
C.b.sj(s.z,0)},
hx:function(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this
a7.cc()
s=a7.b
r=s.length
q=H.b([],t.ee)
p=H.b([],t.hg)
for(o=a7.d,n=a7.z,m=a7.r,l=a7.x,k=a7.y,j=Math.abs(1),i=a7.c,h=a7.e,g=a7.f,f=a8,e=0;e<r;++e){if(e>=o.length)return H.c(o,e)
if(o[e]<=0)continue
if(e>=s.length)return H.c(s,e)
d=s[e]
c=d.fy.a
b=new V.d6(c.d,c.x,c.ch,j)
a=d.id
a0=new V.w(a.a*a8,a.b*a8,a.c*a8)
q.push(b)
p.push(a0)
if(d.k1){a1=Y.pz(b,i,a0)
if(a1.a===C.f){if(e>=o.length)return H.c(o,e)
o[e]=o[e]-1
a2=a1.b*a8
$.C().toString
if(a2-1e-9<f){if(!(Math.abs(a2-f)<1e-9)){a7.cc()
f=a2}h.push(a1)
g.push(d)
if(!C.b.H(n,e))n.push(e)}}}for(a3=e-1;a3>=0;--a3){if(a3>=s.length)return H.c(s,a3)
a4=s[a3]
if(d.k1||a4.k1){if(a3>=q.length)return H.c(q,a3)
a5=q[a3]
if(a3>=p.length)return H.c(p,a3)
a6=Y.pE(b,a5,a0,p[a3])
if(a6.a===C.f){a=o.length
if(e>=a)return H.c(o,e)
o[e]=o[e]-1
if(a3>=a)return H.c(o,a3)
o[a3]=o[a3]-1
a2=a6.b*a8
$.C().toString
if(a2-1e-9<f){if(!(Math.abs(a2-f)<1e-9)){a7.cc()
f=a2}m.push(a6)
l.push(d)
k.push(a4)
if(!C.b.H(n,e))n.push(e)
if(!C.b.H(n,a3))n.push(a3)}}}}}return f},
cB:function(a,b,c){var s
a.go=b==null?V.iA():b
s=Math.sqrt(c.U(c))
$.C()
if(0.01<s){a.id=c
a.k1=!0}else{a.id=V.bG()
a.k1=!1}},
is:function(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.c,a7=new V.w(a6.a,a6.b,a6.c).J()
for(a6=a5.e,s=a6.length-1,r=a5.f,q=a7.a,p=a7.b,o=a7.c;s>=0;--s){if(s>=a6.length)return H.c(a6,s)
n=a6[s]
if(s>=r.length)return H.c(r,s)
m=r[s]
l=m.id
k=l.a
j=l.b
l=l.c
i=q*k+p*j+o*l
h=q*i
g=p*i
f=o*i
a5.cB(m,n.r,new V.w((k-h-h)*0.8,(j-g-g)*0.8,(l-f-f)*0.8))}for(a6=a5.r,s=a6.length-1,r=a5.x,l=a5.y;s>=0;--s){if(s>=a6.length)return H.c(a6,s)
n=a6[s]
if(s>=r.length)return H.c(r,s)
e=r[s]
if(s>=l.length)return H.c(l,s)
d=l[s]
k=n.r
if(k==null){j=$.ag
if(j==null){j=new V.L(0,0,0)
$.ag=j}}else j=k
h=n.x
if(h==null){g=$.ag
if(g==null){g=new V.L(0,0,0)
$.ag=g}}else g=h
f=g.a-j.a
c=g.b-j.b
j=g.c-j.c
g=e.id
b=g.a
a=g.b
g=g.c
a0=f*b+c*a+j*g
a1=d.id
a2=a1.a
a3=a1.b
a1=a1.c
a4=f*a2+c*a3+j*a1
a5.cB(e,k,new V.w((b-q*a0+f*a4)*0.8,(a-p*a0+c*a4)*0.8,(g-o*a0+j*a4)*0.8))
a5.cB(d,h,new V.w((a2-q*a4+f*a0)*0.8,(a3-p*a4+c*a0)*0.8,(a1-o*a4+j*a0)*0.8))}for(a6=a5.b,s=a6.length-1,r=a5.z,q=a5.d;s>=0;--s){if(s>=q.length)return H.c(q,s)
if(q[s]<=0)continue
if(s>=a6.length)return H.c(a6,s)
m=a6[s]
if(!C.b.H(r,s)){p=m.go
o=m.id
m.go=new V.L(p.a+o.a*a8,p.b+o.b*a8,p.c+o.c*a8)}if(m.k1){p=m.id
o=$.mp()
m.id=new V.w(p.a+o.a*a8,p.b+o.b*a8,p.c+o.c*a8)}p=m.id
o=p.a
l=p.b
p=p.c
if(Math.sqrt(o*o+l*l+p*p)>10){p=m.id.J()
m.id=new V.w(p.a*10,p.b*10,p.c*10)}p=m.go
m.fy.sV(0,new V.aO(1,0,0,p.a,0,1,0,p.b,0,0,1,p.c,0,0,0,1))}},
aJ:function(a,b,c){var s,r,q,p=this,o=b.y,n=p.d
C.b.sj(n,0)
for(s=p.b,r=0;r<s.length;++r)n.push(20)
for(;$.C(),0<o;){q=p.hx(o)
p.is(q)
o-=q}return V.aC()},
gn:function(){var s=this.a
return s==null?this.a=D.I():s}}
Q.kb.prototype={
$1:function(a){var s,r=this.a,q=V.ld(-this.b.c.d)
if(!r.z.m(0,q)){s=r.z
r.z=q
r.Q=q.bA(0)
r.O(new D.D("velocityRotation",s,r.z))}},
$S:0}
Q.kc.prototype={
$1:function(a){var s,r,q=this,p=null
if(t.dQ.a(a).c.a===32){s=U.hH(p)
r=new Q.co(s,V.iA(),V.bG(),O.hF(t.l))
r.cS(p,!0,p,"",p,p)
r.sbK(0,$.mo())
r.saH(s)
s=q.a
r.go=s.ga_(s)
r.id=V.ld(-q.b.c.d).av(new V.w(0,0,-10))
q.c.y.l(0,r)
q.d.b.push(r)}},
$S:0}
Q.kd.prototype={
$1:function(a){this.a.x.r=a},
$S:51};(function aliases(){var s=J.a.prototype
s.eA=s.i
s=J.b5.prototype
s.eB=s.i
s=K.cD.prototype
s.ez=s.b1
s.bL=s.i
s=Y.e6.prototype
s.cP=s.i
s=O.cS.prototype
s.cQ=s.aB
s=O.cT.prototype
s.cR=s.aB})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"ox","n8",52)
r(P,"pb","nK",13)
r(P,"pc","nL",13)
r(P,"pd","nM",13)
q(P,"m9","p6",3)
r(W,"qO","hR",36)
var k
p(k=E.aI.prototype,"gee",0,0,null,["$1","$0"],["ef","i3"],1,0)
p(k,"geg",0,0,null,["$1","$0"],["eh","i4"],1,0)
p(k,"gec",0,0,null,["$1","$0"],["ed","i2"],1,0)
p(k,"gea",0,0,null,["$1","$0"],["eb","i_"],1,0)
o(k,"ghY","hZ",8)
o(k,"gi0","i1",8)
p(k=E.f6.prototype,"gcU",0,0,null,["$1","$0"],["cW","cV"],1,0)
n(k,"gij","en",3)
m(k=X.cH.prototype,"geH","eI",30)
o(k,"geF","eG",21)
o(k,"geJ","eK",21)
m(k,"gbM","bN",0)
m(k,"gc_","c0",0)
m(k=X.fn.prototype,"gfD","fE",2)
m(k,"gfo","fp",2)
m(k,"gfv","fw",4)
m(k,"gc_","c0",19)
m(k,"gbM","bN",19)
m(k,"gfJ","fK",4)
m(k,"gfN","fO",4)
m(k,"gfB","fC",4)
m(k,"gfL","fM",4)
m(k,"gfz","fA",4)
m(k,"gfP","fQ",34)
m(k,"gfR","fS",2)
m(k,"gh2","h3",11)
m(k,"gfZ","h_",11)
m(k,"gh0","h1",11)
p(D.bO.prototype,"geL",0,0,null,["$1","$0"],["ax","eM"],1,0)
p(k=D.cK.prototype,"gda",0,0,null,["$1","$0"],["dc","fH"],1,0)
m(k,"gfT","fU",45)
o(k,"gfi","fj",18)
o(k,"gfX","fY",18)
l(V.ao.prototype,"gj","cs",17)
l(V.w.prototype,"gj","cs",17)
p(k=U.bR.prototype,"gaM",0,0,null,["$1","$0"],["O","a8"],1,0)
o(k,"gfg","fh",16)
o(k,"gfV","fW",16)
p(k=U.dl.prototype,"gaM",0,0,null,["$1","$0"],["O","a8"],1,0)
m(k,"gfa","fb",0)
m(k,"gfc","fd",0)
m(k,"gfe","ff",0)
m(k,"gf6","f7",0)
m(k,"gf8","f9",0)
m(k,"ghl","hm",0)
m(k,"ghj","hk",0)
m(k,"ghh","hi",0)
p(k=U.dm.prototype,"gaM",0,0,null,["$1","$0"],["O","a8"],1,0)
m(k,"gfF","fG",0)
p(k=M.ef.prototype,"gaN",0,0,null,["$1","$0"],["aO","eN"],1,0)
o(k,"gfq","fs",8)
o(k,"gft","fu",8)
p(k=O.cR.prototype,"gaA",0,0,null,["$1","$0"],["W","bZ"],1,0)
p(k,"gde",0,0,null,["$1","$0"],["df","h9"],1,0)
o(k,"gfk","fl",14)
o(k,"gfm","fn",14)
p(O.cS.prototype,"gaA",0,0,null,["$1","$0"],["W","bZ"],1,0)
p(X.eH.prototype,"gcY",0,0,null,["$1","$0"],["aP","eQ"],1,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.P,null)
q(P.P,[H.ks,J.a,J.ab,P.H,P.du,P.k,H.bW,P.ek,H.cB,H.fk,H.cv,H.j0,H.iz,H.h4,H.bN,P.O,H.i7,H.er,H.en,H.av,H.fH,P.dG,P.ce,P.cf,P.fr,P.c3,P.eZ,P.jN,P.dN,P.jz,P.dt,P.j,P.hh,P.cQ,P.d3,P.e7,P.jM,P.jL,P.X,P.bv,P.eG,P.d7,P.fE,P.i0,P.ae,P.a_,P.bH,P.j5,P.fZ,W.hJ,W.ko,W.kB,W.K,W.cC,P.jD,P.dI,P.fX,K.e_,K.cD,K.Y,L.eW,L.f7,L.f8,L.iY,O.a9,O.cU,Y.c4,Y.e6,E.hA,E.aI,E.bL,E.c_,E.fC,E.iC,E.f6,Z.fp,Z.jr,Z.cr,Z.bT,Z.aX,D.hC,D.bP,D.V,X.cs,X.ad,X.i5,X.ib,X.aP,X.ix,X.iZ,X.fn,D.bO,V.S,V.bu,V.hU,V.b7,V.aO,V.eJ,V.a4,V.L,V.d_,V.eO,V.d6,V.ao,V.w,U.dl,U.dm,M.ef,A.e3,A.hv,A.aj,A.b1,A.b4,A.b9,A.bc,A.ig,A.de,A.df,A.dh,A.dk,A.a0,A.j3,F.aB,F.hY,F.eq,F.i6,F.eL,F.iH,F.d5,F.c2,F.bD,F.cb,F.A,F.cc,F.be,F.jn,F.jo,F.dn,O.d8,O.cS,O.ih,T.iS,X.iQ,X.eH,V.hD,V.iJ])
q(J.a,[J.el,J.cG,J.b5,J.t,J.bV,J.by,H.cV,H.Z,W.e,W.ht,W.bs,W.ct,W.aH,W.F,W.fw,W.aq,W.hM,W.hN,W.fy,W.cz,W.fA,W.hO,W.l,W.fF,W.ar,W.i2,W.fJ,W.bx,W.ia,W.iu,W.fN,W.fO,W.at,W.fP,W.fR,W.au,W.fV,W.fY,W.aw,W.h_,W.ax,W.h5,W.ah,W.h9,W.iW,W.an,W.hb,W.j_,W.ja,W.hi,W.hk,W.hm,W.ho,W.hq,P.aM,P.fL,P.aR,P.fT,P.iB,P.h6,P.aT,P.hd,P.hw,P.fs,P.c1,P.h2])
q(J.b5,[J.eI,J.c8,J.aL])
r(J.i3,J.t)
q(J.bV,[J.cF,J.em])
q(P.H,[H.cJ,P.fb,H.eo,H.fj,H.eQ,H.fD,P.e2,P.eD,P.aF,P.fl,P.fi,P.eX,P.ea,P.ec])
r(P.cM,P.du)
q(P.cM,[H.c9,W.fu,W.ft,P.eh])
r(H.R,H.c9)
q(P.k,[H.m,H.aN,H.dp,P.cE])
r(H.cA,H.aN)
q(P.ek,[H.es,H.fq])
r(H.cw,H.cv)
r(H.cZ,P.fb)
q(H.bN,[H.iR,H.i4,H.k6,H.k7,H.k8,P.jt,P.js,P.ju,P.jv,P.jI,P.jH,P.jZ,P.jB,P.jC,P.i8,P.ic,P.je,P.jd,P.hP,P.hQ,P.j9,P.j6,P.j7,P.j8,P.jK,P.jJ,P.jS,P.jT,P.jU,W.iv,W.iw,W.iG,W.iO,W.jw,P.jF,P.jG,P.jQ,P.k_,P.hZ,P.i_,P.hx,E.iD,E.iE,E.iF,E.iV,D.hW,D.hX,F.jO,F.kh,F.kg,F.k4,F.k3,F.iI,F.jq,F.jp,F.jk,F.jl,O.ik,O.il,O.im,O.io,O.ip,O.iq,O.ir,O.is,T.iU,T.iT,V.hE,V.kf,V.iL,V.iK,Q.kb,Q.kc,Q.kd])
q(H.iR,[H.iN,H.cp])
r(P.cP,P.O)
r(H.W,P.cP)
r(H.cL,H.m)
r(H.bZ,H.Z)
q(H.bZ,[H.dw,H.dy])
r(H.dx,H.dw)
r(H.bB,H.dx)
r(H.dz,H.dy)
r(H.cW,H.dz)
q(H.cW,[H.ey,H.ez,H.eA,H.eB,H.eC,H.cX,H.bC])
r(H.dH,H.fD)
r(P.dD,P.cE)
r(P.jA,P.jN)
r(P.dA,P.dN)
r(P.ds,P.dA)
r(P.dL,P.cQ)
r(P.ca,P.dL)
q(P.e7,[P.hy,P.hS])
r(P.eb,P.eZ)
q(P.eb,[P.hz,P.jf,P.jc])
r(P.jb,P.hS)
q(P.aF,[P.d2,P.ej])
r(P.fx,P.bH)
q(W.e,[W.u,W.eg,W.bX,W.al,W.dB,W.am,W.aa,W.dE,W.fo,W.cd,P.e5,P.b2])
q(W.u,[W.E,W.aA])
q(W.E,[W.o,P.n])
q(W.o,[W.e0,W.e1,W.bt,W.ei,W.bS,W.bU,W.eR,W.bd])
r(W.hI,W.aH)
r(W.cx,W.fw)
q(W.aq,[W.hK,W.hL])
r(W.fz,W.fy)
r(W.cy,W.fz)
r(W.fB,W.fA)
r(W.ee,W.fB)
r(W.ac,W.bs)
r(W.fG,W.fF)
r(W.bQ,W.fG)
r(W.fK,W.fJ)
r(W.bw,W.fK)
r(W.aW,W.l)
q(W.aW,[W.bz,W.ak,W.bF])
r(W.ev,W.fN)
r(W.ew,W.fO)
r(W.fQ,W.fP)
r(W.ex,W.fQ)
r(W.fS,W.fR)
r(W.cY,W.fS)
r(W.fW,W.fV)
r(W.eK,W.fW)
r(W.eP,W.fY)
r(W.dC,W.dB)
r(W.eT,W.dC)
r(W.h0,W.h_)
r(W.eU,W.h0)
r(W.eY,W.h5)
r(W.ha,W.h9)
r(W.f1,W.ha)
r(W.dF,W.dE)
r(W.f2,W.dF)
r(W.hc,W.hb)
r(W.f9,W.hc)
r(W.bf,W.ak)
r(W.hj,W.hi)
r(W.fv,W.hj)
r(W.dq,W.cz)
r(W.hl,W.hk)
r(W.fI,W.hl)
r(W.hn,W.hm)
r(W.dv,W.hn)
r(W.hp,W.ho)
r(W.h1,W.hp)
r(W.hr,W.hq)
r(W.h8,W.hr)
r(W.dr,P.c3)
r(P.jE,P.jD)
r(P.a7,P.fX)
r(P.fM,P.fL)
r(P.ep,P.fM)
r(P.fU,P.fT)
r(P.eE,P.fU)
r(P.h7,P.h6)
r(P.f_,P.h7)
r(P.he,P.hd)
r(P.fa,P.he)
r(P.e4,P.fs)
r(P.eF,P.b2)
r(P.h3,P.h2)
r(P.eV,P.h3)
q(K.cD,[K.aQ,L.da])
q(Y.e6,[Y.bb,Y.aU])
q(E.hA,[Z.bM,A.d4,T.bE])
q(D.V,[D.aJ,D.aK,D.D,X.b6,X.eM])
q(O.a9,[X.cH,D.cK,U.bR])
q(X.eM,[X.cO,X.bY,X.d9])
q(D.hC,[U.hG,U.a3])
q(U.a3,[U.cu,Q.e8])
r(A.et,A.d4)
q(A.a0,[A.c6,A.fe,A.ff,A.fg,A.fc,A.db,A.fd,A.dc,A.dd,A.fh,A.dg,A.c7,A.di,A.dj])
r(F.iM,F.hY)
r(F.j2,F.i6)
r(F.jm,F.jn)
r(F.iy,F.jo)
r(O.cR,O.d8)
q(O.cS,[O.id,O.ie,O.cT])
q(O.cT,[O.ii,O.ij])
q(T.bE,[T.f3,T.f5])
r(T.f4,T.f3)
r(X.i1,X.iQ)
r(Q.co,E.aI)
s(H.c9,H.fk)
s(H.dw,P.j)
s(H.dx,H.cB)
s(H.dy,P.j)
s(H.dz,H.cB)
s(P.du,P.j)
s(P.dL,P.hh)
s(P.dN,P.d3)
s(W.fw,W.hJ)
s(W.fy,P.j)
s(W.fz,W.K)
s(W.fA,P.j)
s(W.fB,W.K)
s(W.fF,P.j)
s(W.fG,W.K)
s(W.fJ,P.j)
s(W.fK,W.K)
s(W.fN,P.O)
s(W.fO,P.O)
s(W.fP,P.j)
s(W.fQ,W.K)
s(W.fR,P.j)
s(W.fS,W.K)
s(W.fV,P.j)
s(W.fW,W.K)
s(W.fY,P.O)
s(W.dB,P.j)
s(W.dC,W.K)
s(W.h_,P.j)
s(W.h0,W.K)
s(W.h5,P.O)
s(W.h9,P.j)
s(W.ha,W.K)
s(W.dE,P.j)
s(W.dF,W.K)
s(W.hb,P.j)
s(W.hc,W.K)
s(W.hi,P.j)
s(W.hj,W.K)
s(W.hk,P.j)
s(W.hl,W.K)
s(W.hm,P.j)
s(W.hn,W.K)
s(W.ho,P.j)
s(W.hp,W.K)
s(W.hq,P.j)
s(W.hr,W.K)
s(P.fL,P.j)
s(P.fM,W.K)
s(P.fT,P.j)
s(P.fU,W.K)
s(P.h6,P.j)
s(P.h7,W.K)
s(P.hd,P.j)
s(P.he,W.K)
s(P.fs,P.O)
s(P.h2,P.j)
s(P.h3,W.K)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",M:"double",a2:"num",r:"String",az:"bool",ae:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~(V)","~([V?])","~(l)","~()","~(ak)","~(r,@)","~(i,i)","~(aB)","~(i,k<aI>)","~(@,@)","~(cb,M,M)","~(bF)","ae()","~(~())","~(i,k<aO>)","r(i)","~(i,k<a3?>)","M()","~(i,k<as>)","~(bz)","M(M,M)","~(i,k<ad>)","~(~(V))","~(c5,r,i)","@()","az(u)","~(@)","ae(@,@)","~(a2)","~(r,r)","az(k<ad>)","@(@)","c5(@,@)","~(r,r?)","~(bf)","i(i,i)","r(e)","~(r[@])","~(r,i)","G<r,r>(G<r,r>,r)","~(P?,P?)","ae(~())","bM(i)","ae(@)","@(r)","az(k<as>)","i(b1,b1)","i(b4,b4)","i(b9,b9)","i(bc,bc)","~(iX)","~(az)","i(@,@)","@(@,r)","E(u)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.o3(v.typeUniverse,JSON.parse('{"eI":"b5","c8":"b5","aL":"b5","pH":"l","pV":"l","pJ":"b2","pI":"e","q2":"e","q5":"e","pG":"n","pX":"n","pK":"o","q_":"o","pY":"u","pU":"u","qv":"aa","pQ":"aW","pN":"aA","q6":"aA","q4":"ak","pZ":"bw","pR":"F","pS":"ah","q1":"bB","q0":"Z","el":{"az":[]},"b5":{"la":[]},"t":{"p":["1"],"m":["1"],"k":["1"],"x":["1"]},"i3":{"t":["1"],"p":["1"],"m":["1"],"k":["1"],"x":["1"]},"bV":{"M":[],"a2":[]},"cF":{"M":[],"i":[],"a2":[]},"em":{"M":[],"a2":[]},"by":{"r":[],"x":["@"]},"cJ":{"H":[]},"R":{"j":["i"],"p":["i"],"m":["i"],"k":["i"],"j.E":"i"},"m":{"k":["1"]},"aN":{"k":["2"]},"cA":{"aN":["1","2"],"m":["2"],"k":["2"]},"dp":{"k":["1"]},"c9":{"j":["1"],"p":["1"],"m":["1"],"k":["1"]},"cv":{"G":["1","2"]},"cw":{"G":["1","2"]},"cZ":{"H":[]},"eo":{"H":[]},"fj":{"H":[]},"eQ":{"H":[]},"W":{"O":["1","2"],"G":["1","2"],"O.V":"2"},"cL":{"m":["1"],"k":["1"]},"en":{"lo":[]},"bZ":{"z":["1"],"Z":[],"x":["1"]},"bB":{"j":["M"],"z":["M"],"p":["M"],"Z":[],"m":["M"],"x":["M"],"k":["M"],"j.E":"M"},"cW":{"j":["i"],"z":["i"],"p":["i"],"Z":[],"m":["i"],"x":["i"],"k":["i"]},"ey":{"j":["i"],"z":["i"],"p":["i"],"Z":[],"m":["i"],"x":["i"],"k":["i"],"j.E":"i"},"ez":{"j":["i"],"z":["i"],"p":["i"],"Z":[],"m":["i"],"x":["i"],"k":["i"],"j.E":"i"},"eA":{"j":["i"],"z":["i"],"p":["i"],"Z":[],"m":["i"],"x":["i"],"k":["i"],"j.E":"i"},"eB":{"j":["i"],"z":["i"],"p":["i"],"Z":[],"m":["i"],"x":["i"],"k":["i"],"j.E":"i"},"eC":{"j":["i"],"z":["i"],"p":["i"],"Z":[],"m":["i"],"x":["i"],"k":["i"],"j.E":"i"},"cX":{"j":["i"],"z":["i"],"p":["i"],"Z":[],"m":["i"],"x":["i"],"k":["i"],"j.E":"i"},"bC":{"j":["i"],"c5":[],"z":["i"],"p":["i"],"Z":[],"m":["i"],"x":["i"],"k":["i"],"j.E":"i"},"fD":{"H":[]},"dH":{"H":[]},"dG":{"iX":[]},"dD":{"k":["1"]},"ds":{"d3":["1"],"m":["1"],"k":["1"]},"cE":{"k":["1"]},"cM":{"j":["1"],"p":["1"],"m":["1"],"k":["1"]},"cP":{"O":["1","2"],"G":["1","2"]},"O":{"G":["1","2"]},"cQ":{"G":["1","2"]},"ca":{"G":["1","2"]},"dA":{"d3":["1"],"m":["1"],"k":["1"]},"M":{"a2":[]},"i":{"a2":[]},"p":{"m":["1"],"k":["1"]},"e2":{"H":[]},"fb":{"H":[]},"eD":{"H":[]},"aF":{"H":[]},"d2":{"H":[]},"ej":{"H":[]},"fl":{"H":[]},"fi":{"H":[]},"eX":{"H":[]},"ea":{"H":[]},"eG":{"H":[]},"d7":{"H":[]},"ec":{"H":[]},"bH":{"fm":[]},"fZ":{"fm":[]},"fx":{"fm":[]},"E":{"u":[],"e":[]},"ac":{"bs":[]},"km":{"E":[],"u":[],"e":[]},"bz":{"l":[]},"ak":{"l":[]},"u":{"e":[]},"al":{"e":[]},"am":{"e":[]},"aa":{"e":[]},"bF":{"l":[]},"aW":{"l":[]},"bf":{"ak":[],"l":[]},"o":{"E":[],"u":[],"e":[]},"e0":{"E":[],"u":[],"e":[]},"e1":{"E":[],"u":[],"e":[]},"bt":{"E":[],"u":[],"e":[]},"aA":{"u":[],"e":[]},"cy":{"j":["a7<a2>"],"p":["a7<a2>"],"z":["a7<a2>"],"m":["a7<a2>"],"k":["a7<a2>"],"x":["a7<a2>"],"j.E":"a7<a2>"},"cz":{"a7":["a2"]},"ee":{"j":["r"],"p":["r"],"z":["r"],"m":["r"],"k":["r"],"x":["r"],"j.E":"r"},"fu":{"j":["E"],"p":["E"],"m":["E"],"k":["E"],"j.E":"E"},"bQ":{"j":["ac"],"p":["ac"],"z":["ac"],"m":["ac"],"k":["ac"],"x":["ac"],"j.E":"ac"},"eg":{"e":[]},"ei":{"E":[],"u":[],"e":[]},"bw":{"j":["u"],"p":["u"],"z":["u"],"m":["u"],"k":["u"],"x":["u"],"j.E":"u"},"bS":{"E":[],"u":[],"e":[]},"bU":{"km":[],"E":[],"u":[],"e":[]},"bX":{"e":[]},"ev":{"O":["r","@"],"G":["r","@"],"O.V":"@"},"ew":{"O":["r","@"],"G":["r","@"],"O.V":"@"},"ex":{"j":["at"],"p":["at"],"z":["at"],"m":["at"],"k":["at"],"x":["at"],"j.E":"at"},"ft":{"j":["u"],"p":["u"],"m":["u"],"k":["u"],"j.E":"u"},"cY":{"j":["u"],"p":["u"],"z":["u"],"m":["u"],"k":["u"],"x":["u"],"j.E":"u"},"eK":{"j":["au"],"p":["au"],"z":["au"],"m":["au"],"k":["au"],"x":["au"],"j.E":"au"},"eP":{"O":["r","@"],"G":["r","@"],"O.V":"@"},"eR":{"E":[],"u":[],"e":[]},"eT":{"j":["al"],"p":["al"],"z":["al"],"e":[],"m":["al"],"k":["al"],"x":["al"],"j.E":"al"},"eU":{"j":["aw"],"p":["aw"],"z":["aw"],"m":["aw"],"k":["aw"],"x":["aw"],"j.E":"aw"},"eY":{"O":["r","r"],"G":["r","r"],"O.V":"r"},"bd":{"E":[],"u":[],"e":[]},"f1":{"j":["aa"],"p":["aa"],"z":["aa"],"m":["aa"],"k":["aa"],"x":["aa"],"j.E":"aa"},"f2":{"j":["am"],"p":["am"],"z":["am"],"e":[],"m":["am"],"k":["am"],"x":["am"],"j.E":"am"},"f9":{"j":["an"],"p":["an"],"z":["an"],"m":["an"],"k":["an"],"x":["an"],"j.E":"an"},"fo":{"e":[]},"cd":{"e":[]},"fv":{"j":["F"],"p":["F"],"z":["F"],"m":["F"],"k":["F"],"x":["F"],"j.E":"F"},"dq":{"a7":["a2"]},"fI":{"j":["ar?"],"p":["ar?"],"z":["ar?"],"m":["ar?"],"k":["ar?"],"x":["ar?"],"j.E":"ar?"},"dv":{"j":["u"],"p":["u"],"z":["u"],"m":["u"],"k":["u"],"x":["u"],"j.E":"u"},"h1":{"j":["ax"],"p":["ax"],"z":["ax"],"m":["ax"],"k":["ax"],"x":["ax"],"j.E":"ax"},"h8":{"j":["ah"],"p":["ah"],"z":["ah"],"m":["ah"],"k":["ah"],"x":["ah"],"j.E":"ah"},"dr":{"c3":["1"]},"dI":{"bx":[]},"eh":{"j":["E"],"p":["E"],"m":["E"],"k":["E"],"j.E":"E"},"a7":{"fX":["1"]},"ep":{"j":["aM"],"p":["aM"],"m":["aM"],"k":["aM"],"j.E":"aM"},"eE":{"j":["aR"],"p":["aR"],"m":["aR"],"k":["aR"],"j.E":"aR"},"f_":{"j":["r"],"p":["r"],"m":["r"],"k":["r"],"j.E":"r"},"n":{"E":[],"u":[],"e":[]},"fa":{"j":["aT"],"p":["aT"],"m":["aT"],"k":["aT"],"j.E":"aT"},"e4":{"O":["r","@"],"G":["r","@"],"O.V":"@"},"e5":{"e":[]},"b2":{"e":[]},"eF":{"e":[]},"eV":{"j":["G<@,@>"],"p":["G<@,@>"],"m":["G<@,@>"],"k":["G<@,@>"],"j.E":"G<@,@>"},"cD":{"bA":[]},"e_":{"bA":[]},"aQ":{"bA":[]},"Y":{"bA":[]},"da":{"bA":[]},"a9":{"k":["1"],"a9.T":"1"},"aJ":{"V":[]},"aK":{"V":[]},"D":{"V":[]},"b6":{"V":[]},"cH":{"a9":["ad"],"k":["ad"],"a9.T":"ad"},"cO":{"V":[]},"bY":{"V":[]},"eM":{"V":[]},"d9":{"V":[]},"mR":{"as":[]},"bO":{"as":[]},"ng":{"as":[]},"nz":{"as":[]},"cK":{"a9":["as"],"k":["as"],"a9.T":"as"},"cu":{"a3":[]},"bR":{"a9":["a3?"],"a3":[],"k":["a3?"],"a9.T":"a3?"},"dl":{"a3":[]},"dm":{"a3":[]},"c6":{"a0":[]},"c7":{"a0":[]},"et":{"d4":[]},"fe":{"a0":[]},"ff":{"a0":[]},"fg":{"a0":[]},"fc":{"a0":[]},"db":{"a0":[]},"fd":{"a0":[]},"dc":{"a0":[]},"dd":{"a0":[]},"fh":{"a0":[]},"dg":{"a0":[]},"di":{"a0":[]},"dj":{"a0":[]},"cR":{"d8":[]},"f3":{"bE":[]},"f5":{"bE":[]},"f4":{"bE":[]},"co":{"aI":[]},"e8":{"a3":[]},"c5":{"p":["i"],"m":["i"],"k":["i"]}}'))
H.o2(v.typeUniverse,JSON.parse('{"ab":1,"m":1,"bW":1,"es":2,"fq":1,"cB":1,"fk":1,"c9":1,"cv":2,"er":1,"bZ":1,"c3":1,"cf":1,"eZ":2,"dt":1,"cE":1,"cM":1,"cP":2,"hh":2,"cQ":2,"dA":1,"du":1,"dL":2,"dN":1,"e7":2,"eb":2,"ek":1,"dr":1,"K":1,"cC":1,"aJ":1,"aK":1,"D":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.kT
return{fK:s("bs"),eT:s("bM"),ed:s("cr"),gA:s("bt"),ar:s("ct"),gw:s("m<@>"),h:s("E"),l:s("aI"),bU:s("H"),aD:s("l"),c8:s("ac"),bX:s("bQ"),b8:s("pW"),x:s("bx"),fS:s("bS"),gk:s("bU"),eu:s("t<e3>"),a0:s("t<co>"),i:s("t<mR>"),cn:s("t<b1>"),dh:s("t<km>"),U:s("t<bO>"),fD:s("t<b4>"),u:s("t<aB>"),fv:s("t<bT>"),f5:s("t<ad>"),e:s("t<as>"),L:s("t<eq>"),B:s("t<bA>"),fA:s("t<aO>"),q:s("t<eL>"),cG:s("t<a4>"),eg:s("t<b9>"),o:s("t<ng>"),ee:s("t<d6>"),gf:s("t<bb>"),D:s("t<nz>"),c3:s("t<bc>"),g9:s("t<c3<P>>"),s:s("t<r>"),ga:s("t<bE>"),gT:s("t<an>"),ab:s("t<da>"),bP:s("t<aU>"),gN:s("t<c5>"),dC:s("t<a0>"),Y:s("t<de>"),V:s("t<df>"),C:s("t<dh>"),J:s("t<dk>"),hg:s("t<w>"),k:s("t<cb>"),n:s("t<M>"),gn:s("t<@>"),t:s("t<i>"),eJ:s("t<a3?>"),bc:s("t<d8?>"),p:s("t<c7?>"),b:s("t<~(V)>"),aP:s("x<@>"),T:s("cG"),eH:s("la"),M:s("aL"),aU:s("z<@>"),fX:s("W<i,az>"),y:s("W<i,i>"),dQ:s("b6"),O:s("p<de>"),Q:s("p<df>"),c:s("p<dh>"),R:s("p<dk>"),d:s("p<@>"),bv:s("cO"),f:s("G<@,@>"),gc:s("aO"),bK:s("bX"),Z:s("bY"),bZ:s("cV"),dD:s("Z"),bm:s("bC"),P:s("ae"),K:s("P"),I:s("a7<a2>"),fJ:s("lo"),fg:s("d4"),N:s("r"),bY:s("bd"),aF:s("iX"),bJ:s("f7"),dr:s("d9"),v:s("db"),w:s("c6"),g:s("dc"),F:s("dd"),m:s("dg"),j:s("c7"),G:s("di"),a:s("dj"),ak:s("c8"),r:s("ca<r,r>"),E:s("fm"),cJ:s("az"),gR:s("M"),z:s("@"),S:s("i"),A:s("0&*"),_:s("P*"),bG:s("l7<ae>?"),X:s("P?"),gW:s("c1?"),dl:s("eW?"),f7:s("f8?"),W:s("c6?"),H:s("a2"),h2:s("~(V)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.k=W.bt.prototype
C.Q=J.a.prototype
C.b=J.t.prototype
C.c=J.cF.prototype
C.R=J.cG.prototype
C.d=J.bV.prototype
C.a=J.by.prototype
C.S=J.aL.prototype
C.X=H.bC.prototype
C.A=J.eI.prototype
C.B=P.c1.prototype
C.r=J.c8.prototype
C.C=W.bf.prototype
C.D=W.cd.prototype
C.E=new E.bL("Browser.chrome")
C.t=new E.bL("Browser.firefox")
C.u=new E.bL("Browser.edge")
C.F=new E.bL("Browser.other")
C.a2=new P.hz()
C.G=new P.hy()
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.H=function() {
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
C.M=function(getTagFallback) {
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
C.I=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.J=function(hooks) {
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
C.L=function(hooks) {
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
C.K=function(hooks) {
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
C.w=function(hooks) { return hooks; }

C.N=new P.eG()
C.h=new P.jb()
C.O=new P.jf()
C.i=new P.jA()
C.o=new P.bv(0)
C.P=new P.bv(5e6)
C.l=H.b(s([0,0,32776,33792,1,10240,0,0]),t.t)
C.m=H.b(s([0,0,65490,45055,65535,34815,65534,18431]),t.t)
C.n=H.b(s([0,0,26624,1023,65534,2047,65534,2047]),t.t)
C.U=H.b(s([0,0,32722,12287,65534,34815,65534,18431]),t.t)
C.V=H.b(s([0,0,65498,45055,65535,34815,65534,18431]),t.t)
C.j=H.b(s([0,0,24576,1023,65534,34815,65534,18431]),t.t)
C.x=H.b(s([0,0,32754,11263,65534,34815,65534,18431]),t.t)
C.y=H.b(s([0,0,65490,12287,65535,34815,65534,18431]),t.t)
C.T=H.b(s([]),t.s)
C.W=new H.cw(0,{},C.T,H.kT("cw<r,r>"))
C.Y=new E.c_("OperatingSystem.windows")
C.z=new E.c_("OperatingSystem.mac")
C.Z=new E.c_("OperatingSystem.linux")
C.a_=new E.c_("OperatingSystem.other")
C.p=new Y.c4("Type.Intesected")
C.e=new Y.c4("Type.NoCollision")
C.q=new Y.c4("Type.OutOfRange")
C.f=new Y.c4("Type.Collision")
C.a0=new P.jc(!1)
C.a1=new P.ce(null,2)})();(function staticFields(){$.jx=null
$.aG=0
$.cq=null
$.l2=null
$.mb=null
$.m8=null
$.mh=null
$.k0=null
$.ka=null
$.kV=null
$.ci=null
$.dQ=null
$.dR=null
$.kP=!1
$.aD=C.i
$.ai=H.b([],H.kT("t<P>"))
$.hT=null
$.le=null
$.lj=null
$.af=null
$.ag=null
$.lq=null
$.jg=null
$.lG=null
$.jh=null
$.ji=null
$.jj=null
$.lF=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"pT","mr",function(){return H.pm("_$dart_dartClosure")})
s($,"q7","mt",function(){return H.aV(H.j1({
toString:function(){return"$receiver$"}}))})
s($,"q8","mu",function(){return H.aV(H.j1({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"q9","mv",function(){return H.aV(H.j1(null))})
s($,"qa","mw",function(){return H.aV(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"qd","mz",function(){return H.aV(H.j1(void 0))})
s($,"qe","mA",function(){return H.aV(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"qc","my",function(){return H.aV(H.lz(null))})
s($,"qb","mx",function(){return H.aV(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"qg","mC",function(){return H.aV(H.lz(void 0))})
s($,"qf","mB",function(){return H.aV(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"qw","l_",function(){return P.nJ()})
s($,"qh","mD",function(){return new P.je().$0()})
s($,"qi","mE",function(){return new P.jd().$0()})
s($,"qx","mI",function(){return new Int8Array(H.ch(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"qz","mJ",function(){return P.ns("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"qM","mK",function(){return P.op()})
s($,"qp","mH",function(){return Z.ay(0)})
s($,"qj","mF",function(){return Z.ay(511)})
s($,"qr","bp",function(){return Z.ay(1)})
s($,"qq","bo",function(){return Z.ay(2)})
s($,"ql","bn",function(){return Z.ay(4)})
s($,"qs","bq",function(){return Z.ay(8)})
s($,"qt","br",function(){return Z.ay(16)})
s($,"qm","dW",function(){return Z.ay(32)})
s($,"qn","dX",function(){return Z.ay(64)})
s($,"qo","mG",function(){return Z.ay(96)})
s($,"qu","cn",function(){return Z.ay(128)})
s($,"qk","bm",function(){return Z.ay(256)})
s($,"pP","mq",function(){return new V.hU()})
r($,"pO","C",function(){return $.mq()})
r($,"q3","ms",function(){var q=V.iA(),p=V.kz(),o=$.lF
return V.lf(q,p,o==null?$.lF=V.lE(0,0,-1):o)})
r($,"pM","mp",function(){return V.lE(0,-9.8,0)})
r($,"pL","mo",function(){return F.py(5,1,5)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cV,DataView:H.Z,ArrayBufferView:H.Z,Float32Array:H.bB,Float64Array:H.bB,Int16Array:H.ey,Int32Array:H.ez,Int8Array:H.eA,Uint16Array:H.eB,Uint32Array:H.eC,Uint8ClampedArray:H.cX,CanvasPixelArray:H.cX,Uint8Array:H.bC,HTMLAudioElement:W.o,HTMLBRElement:W.o,HTMLBaseElement:W.o,HTMLBodyElement:W.o,HTMLButtonElement:W.o,HTMLContentElement:W.o,HTMLDListElement:W.o,HTMLDataElement:W.o,HTMLDataListElement:W.o,HTMLDetailsElement:W.o,HTMLDialogElement:W.o,HTMLDivElement:W.o,HTMLEmbedElement:W.o,HTMLFieldSetElement:W.o,HTMLHRElement:W.o,HTMLHeadElement:W.o,HTMLHeadingElement:W.o,HTMLHtmlElement:W.o,HTMLIFrameElement:W.o,HTMLLIElement:W.o,HTMLLabelElement:W.o,HTMLLegendElement:W.o,HTMLLinkElement:W.o,HTMLMapElement:W.o,HTMLMediaElement:W.o,HTMLMenuElement:W.o,HTMLMetaElement:W.o,HTMLMeterElement:W.o,HTMLModElement:W.o,HTMLOListElement:W.o,HTMLObjectElement:W.o,HTMLOptGroupElement:W.o,HTMLOptionElement:W.o,HTMLOutputElement:W.o,HTMLParagraphElement:W.o,HTMLParamElement:W.o,HTMLPictureElement:W.o,HTMLPreElement:W.o,HTMLProgressElement:W.o,HTMLQuoteElement:W.o,HTMLScriptElement:W.o,HTMLShadowElement:W.o,HTMLSlotElement:W.o,HTMLSourceElement:W.o,HTMLSpanElement:W.o,HTMLStyleElement:W.o,HTMLTableCaptionElement:W.o,HTMLTableColElement:W.o,HTMLTableElement:W.o,HTMLTableRowElement:W.o,HTMLTableSectionElement:W.o,HTMLTemplateElement:W.o,HTMLTextAreaElement:W.o,HTMLTimeElement:W.o,HTMLTitleElement:W.o,HTMLTrackElement:W.o,HTMLUListElement:W.o,HTMLUnknownElement:W.o,HTMLVideoElement:W.o,HTMLDirectoryElement:W.o,HTMLFontElement:W.o,HTMLFrameElement:W.o,HTMLFrameSetElement:W.o,HTMLMarqueeElement:W.o,HTMLElement:W.o,AccessibleNodeList:W.ht,HTMLAnchorElement:W.e0,HTMLAreaElement:W.e1,Blob:W.bs,HTMLCanvasElement:W.bt,CanvasRenderingContext2D:W.ct,CDATASection:W.aA,CharacterData:W.aA,Comment:W.aA,ProcessingInstruction:W.aA,Text:W.aA,CSSPerspective:W.hI,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.cx,MSStyleCSSProperties:W.cx,CSS2Properties:W.cx,CSSImageValue:W.aq,CSSKeywordValue:W.aq,CSSNumericValue:W.aq,CSSPositionValue:W.aq,CSSResourceValue:W.aq,CSSUnitValue:W.aq,CSSURLImageValue:W.aq,CSSStyleValue:W.aq,CSSMatrixComponent:W.aH,CSSRotation:W.aH,CSSScale:W.aH,CSSSkew:W.aH,CSSTranslation:W.aH,CSSTransformComponent:W.aH,CSSTransformValue:W.hK,CSSUnparsedValue:W.hL,DataTransferItemList:W.hM,DOMException:W.hN,ClientRectList:W.cy,DOMRectList:W.cy,DOMRectReadOnly:W.cz,DOMStringList:W.ee,DOMTokenList:W.hO,Element:W.E,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,SubmitEvent:W.l,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ac,FileList:W.bQ,FileWriter:W.eg,HTMLFormElement:W.ei,Gamepad:W.ar,History:W.i2,HTMLCollection:W.bw,HTMLFormControlsCollection:W.bw,HTMLOptionsCollection:W.bw,ImageData:W.bx,HTMLImageElement:W.bS,HTMLInputElement:W.bU,KeyboardEvent:W.bz,Location:W.ia,MediaList:W.iu,MessagePort:W.bX,MIDIInputMap:W.ev,MIDIOutputMap:W.ew,MimeType:W.at,MimeTypeArray:W.ex,PointerEvent:W.ak,MouseEvent:W.ak,DragEvent:W.ak,Document:W.u,DocumentFragment:W.u,HTMLDocument:W.u,ShadowRoot:W.u,XMLDocument:W.u,Attr:W.u,DocumentType:W.u,Node:W.u,NodeList:W.cY,RadioNodeList:W.cY,Plugin:W.au,PluginArray:W.eK,RTCStatsReport:W.eP,HTMLSelectElement:W.eR,SourceBuffer:W.al,SourceBufferList:W.eT,SpeechGrammar:W.aw,SpeechGrammarList:W.eU,SpeechRecognitionResult:W.ax,Storage:W.eY,CSSStyleSheet:W.ah,StyleSheet:W.ah,HTMLTableCellElement:W.bd,HTMLTableDataCellElement:W.bd,HTMLTableHeaderCellElement:W.bd,TextTrack:W.am,TextTrackCue:W.aa,VTTCue:W.aa,TextTrackCueList:W.f1,TextTrackList:W.f2,TimeRanges:W.iW,Touch:W.an,TouchEvent:W.bF,TouchList:W.f9,TrackDefaultList:W.j_,CompositionEvent:W.aW,FocusEvent:W.aW,TextEvent:W.aW,UIEvent:W.aW,URL:W.ja,VideoTrackList:W.fo,WheelEvent:W.bf,Window:W.cd,DOMWindow:W.cd,CSSRuleList:W.fv,ClientRect:W.dq,DOMRect:W.dq,GamepadList:W.fI,NamedNodeMap:W.dv,MozNamedAttrMap:W.dv,SpeechRecognitionResultList:W.h1,StyleSheetList:W.h8,SVGLength:P.aM,SVGLengthList:P.ep,SVGNumber:P.aR,SVGNumberList:P.eE,SVGPointList:P.iB,SVGStringList:P.f_,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGScriptElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,SVGTransform:P.aT,SVGTransformList:P.fa,AudioBuffer:P.hw,AudioParamMap:P.e4,AudioTrackList:P.e5,AudioContext:P.b2,webkitAudioContext:P.b2,BaseAudioContext:P.b2,OfflineAudioContext:P.eF,WebGL2RenderingContext:P.c1,SQLResultSetRowList:P.eV})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bZ.$nativeSuperclassTag="ArrayBufferView"
H.dw.$nativeSuperclassTag="ArrayBufferView"
H.dx.$nativeSuperclassTag="ArrayBufferView"
H.bB.$nativeSuperclassTag="ArrayBufferView"
H.dy.$nativeSuperclassTag="ArrayBufferView"
H.dz.$nativeSuperclassTag="ArrayBufferView"
H.cW.$nativeSuperclassTag="ArrayBufferView"
W.dB.$nativeSuperclassTag="EventTarget"
W.dC.$nativeSuperclassTag="EventTarget"
W.dE.$nativeSuperclassTag="EventTarget"
W.dF.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=Q.pu
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map