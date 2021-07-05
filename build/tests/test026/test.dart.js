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
a[c]=function(){a[c]=function(){H.qC(b)}
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
if(a[b]!==s)H.qD(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lB"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lB"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lB(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={la:function la(){},
lc:function(a){return new H.cS("Field '"+a+"' has been assigned during initialization.")},
kH:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
jh:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
oy:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
qd:function(a,b,c){return a},
oa:function(a,b,c,d){if(t.gw.b(a))return new H.cJ(a,b,c.K("@<0>").b9(d).K("cJ<1,2>"))
return new H.aT(a,b,c.K("@<0>").b9(d).K("aT<1,2>"))},
iv:function(){return new P.ca("No element")},
o1:function(){return new P.ca("Too many elements")},
ov:function(a,b){H.f8(a,0,J.aM(a)-1,b)},
f8:function(a,b,c,d){if(c-b<=32)H.ou(a,b,c,d)
else H.ot(a,b,c,d)},
ou:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.bN(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.al()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
ot:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.a3(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a3(a4+a5,2),f=g-j,e=g+j,d=J.bN(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.al()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.al()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.al()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.al()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.al()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.al()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.al()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.al()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.al()
if(a2>0){s=a1
a1=a0
a0=s}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.K(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
H.f8(a3,a4,r-2,a6)
H.f8(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.K(a6.$2(d.h(a3,r),b),0);)++r
for(;J.K(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}H.f8(a3,r,q,a6)}else H.f8(a3,r,q,a6)},
cS:function cS(a){this.a=a},
r:function r(a){this.a=a},
n:function n(){},
cX:function cX(){},
bd:function bd(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aT:function aT(a,b,c){this.a=a
this.b=b
this.$ti=c},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
eI:function eI(a,b){this.a=null
this.b=a
this.c=b},
d1:function d1(a,b,c){this.a=a
this.b=b
this.$ti=c},
b0:function b0(a,b,c){this.a=a
this.b=b
this.$ti=c},
fK:function fK(a,b){this.a=a
this.b=b},
cL:function cL(){},
fD:function fD(){},
ch:function ch(){},
nU:function(){throw H.c(P.C("Cannot modify unmodifiable Map"))},
ng:function(a){var s,r=H.nf(a)
if(r!=null)return r
s="minified:"+a
return s},
n9:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
x:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cy(a)
return s},
dc:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
m9:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.d(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.c(P.a8(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.D(q,o)|32)>r)return n}return parseInt(a,b)},
dd:function(a){return H.oe(a)},
oe:function(a){var s,r,q,p
if(a instanceof P.P)return H.ar(H.b2(a),null)
if(J.e9(a)===C.T||t.ak.b(a)){s=C.t(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.ar(H.b2(a),null)},
of:function(){if(!!self.location)return self.location.href
return null},
m8:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
on:function(a){var s,r,q,p=H.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){q=a[r]
if(!H.kv(q))throw H.c(H.e8(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aY(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.e8(q))}return H.m8(p)},
ma:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.kv(q))throw H.c(H.e8(q))
if(q<0)throw H.c(H.e8(q))
if(q>65535)return H.on(a)}return H.m8(a)},
oo:function(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
az:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.aY(s,10)|55296)>>>0,s&1023|56320)}}throw H.c(P.a8(a,0,1114111,null,null))},
c7:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
om:function(a){var s=H.c7(a).getFullYear()+0
return s},
ok:function(a){var s=H.c7(a).getMonth()+1
return s},
og:function(a){var s=H.c7(a).getDate()+0
return s},
oh:function(a){var s=H.c7(a).getHours()+0
return s},
oj:function(a){var s=H.c7(a).getMinutes()+0
return s},
ol:function(a){var s=H.c7(a).getSeconds()+0
return s},
oi:function(a){var s=H.c7(a).getMilliseconds()+0
return s},
n7:function(a){throw H.c(H.e8(a))},
d:function(a,b){if(a==null)J.aM(a)
throw H.c(H.cv(a,b))},
cv:function(a,b){var s,r="index"
if(!H.kv(b))return new P.aF(!0,b,r,null)
s=J.aM(a)
if(b<0||b>=s)return P.O(b,a,r,null,s)
return P.f3(b,r)},
qi:function(a,b,c){if(a>c)return P.a8(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a8(b,a,c,"end",null)
return new P.aF(!0,b,"end",null)},
e8:function(a){return new P.aF(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.eT()
s=new Error()
s.dartException=a
r=H.qE
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qE:function(){return J.cy(this.dartException)},
h:function(a){throw H.c(a)},
q:function(a){throw H.c(P.aI(a))},
aZ:function(a){var s,r,q,p,o,n
a=H.nc(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.js(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
jt:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mn:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
lb:function(a,b){var s=b==null,r=s?null:b.method
return new H.eD(a,r,s?null:b.receiver)},
aj:function(a){if(a==null)return new H.j0(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bO(a,a.dartException)
return H.q9(a)},
bO:function(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
q9:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aY(r,16)&8191)===10)switch(q){case 438:return H.bO(a,H.lb(H.x(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.x(s)+" (Error "+q+")"
return H.bO(a,new H.db(p,e))}}if(a instanceof TypeError){o=$.nk()
n=$.nl()
m=$.nm()
l=$.nn()
k=$.nq()
j=$.nr()
i=$.np()
$.no()
h=$.nt()
g=$.ns()
f=o.ah(s)
if(f!=null)return H.bO(a,H.lb(s,f))
else{f=n.ah(s)
if(f!=null){f.method="call"
return H.bO(a,H.lb(s,f))}else{f=m.ah(s)
if(f==null){f=l.ah(s)
if(f==null){f=k.ah(s)
if(f==null){f=j.ah(s)
if(f==null){f=i.ah(s)
if(f==null){f=l.ah(s)
if(f==null){f=h.ah(s)
if(f==null){f=g.ah(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bO(a,new H.db(s,f==null?e:f.method))}}return H.bO(a,new H.fC(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.dk()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bO(a,new P.aF(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.dk()
return a},
lE:function(a){var s
if(a==null)return new H.hp(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.hp(a)},
qk:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
qs:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.f("Unsupported number of arguments for wrapped closure"))},
cu:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qs)
a.$identity=s
return s},
nT:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.fd().constructor.prototype):Object.create(new H.bS(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aO
if(typeof r!=="number")return r.W()
$.aO=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.lT(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.nP(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lT(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
nP:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.n6,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.nN:H.nM
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
nQ:function(a,b,c,d){var s=H.lS
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lT:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.nS(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nQ(r,!p,s,b)
if(r===0){p=$.aO
if(typeof p!=="number")return p.W()
$.aO=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.cz
return new Function(p+(o==null?$.cz=H.i1("self"):o)+";return "+n+"."+H.x(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aO
if(typeof p!=="number")return p.W()
$.aO=p+1
m+=p
p="return function("+m+"){return this."
o=$.cz
return new Function(p+(o==null?$.cz=H.i1("self"):o)+"."+H.x(s)+"("+m+");}")()},
nR:function(a,b,c,d){var s=H.lS,r=H.nO
switch(b?-1:a){case 0:throw H.c(new H.f6("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
nS:function(a,b){var s,r,q,p,o,n,m,l=$.cz
if(l==null)l=$.cz=H.i1("self")
s=$.lR
if(s==null)s=$.lR=H.i1("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.nR(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.x(r)+"(this."+s+");"
n=$.aO
if(typeof n!=="number")return n.W()
$.aO=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.x(r)+"(this."+s+", "+m+");"
n=$.aO
if(typeof n!=="number")return n.W()
$.aO=n+1
return new Function(o+n+"}")()},
lB:function(a,b,c,d,e,f,g){return H.nT(a,b,c,d,!!e,!!f,g)},
nM:function(a,b){return H.hD(v.typeUniverse,H.b2(a.a),b)},
nN:function(a,b){return H.hD(v.typeUniverse,H.b2(a.c),b)},
lS:function(a){return a.a},
nO:function(a){return a.c},
i1:function(a){var s,r,q,p=new H.bS("self","target","receiver","name"),o=J.l9(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.bQ("Field name "+a+" not found."))},
qC:function(a){throw H.c(new P.eo(a))},
qm:function(a){return v.getIsolateTag(a)},
qD:function(a){return H.h(new H.cS(a))},
rK:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qv:function(a){var s,r,q,p,o,n=$.n5.$1(a),m=$.kF[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kM[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.mZ.$2(a,n)
if(q!=null){m=$.kF[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kM[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kW(s)
$.kF[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kM[n]=s
return s}if(p==="-"){o=H.kW(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.na(a,s)
if(p==="*")throw H.c(P.jw(n))
if(v.leafTags[n]===true){o=H.kW(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.na(a,s)},
na:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lG(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kW:function(a){return J.lG(a,!1,null,!!a.$iB)},
qx:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kW(s)
else return J.lG(s,c,null,null)},
qq:function(){if(!0===$.lF)return
$.lF=!0
H.qr()},
qr:function(){var s,r,q,p,o,n,m,l
$.kF=Object.create(null)
$.kM=Object.create(null)
H.qp()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.nb.$1(o)
if(n!=null){m=H.qx(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qp:function(){var s,r,q,p,o,n,m=C.I()
m=H.ct(C.J,H.ct(C.K,H.ct(C.u,H.ct(C.u,H.ct(C.L,H.ct(C.M,H.ct(C.N(C.t),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.n5=new H.kI(p)
$.mZ=new H.kJ(o)
$.nb=new H.kK(n)},
ct:function(a,b){return a(b)||b},
o5:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.a6("Illegal RegExp pattern ("+String(n)+")",a,null))},
nd:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qj:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nc:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lJ:function(a,b,c){var s=H.qB(a,b,c)
return s},
qB:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nc(b),'g'),H.qj(c))},
cE:function cE(){},
cF:function cF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
js:function js(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
db:function db(a,b){this.a=a
this.b=b},
eD:function eD(a,b,c){this.a=a
this.b=b
this.c=c},
fC:function fC(a){this.a=a},
j0:function j0(a){this.a=a},
hp:function hp(a){this.a=a
this.b=null},
bz:function bz(){},
fk:function fk(){},
fd:function fd(){},
bS:function bS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f6:function f6(a){this.a=a},
Y:function Y(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ix:function ix(a){this.a=a},
iA:function iA(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cU:function cU(a,b){this.a=a
this.$ti=b},
eH:function eH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
eC:function eC(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cr:function(a){var s,r,q,p,o
if(t.aP.b(a))return a
s=J.bN(a)
r=s.gl(a)
q=P.cY(r,null,!1,t.A)
for(p=0;p<s.gl(a);++p){o=s.h(a,p)
if(p>=r)return H.d(q,p)
q[p]=o}return q},
b1:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cv(b,a))},
pn:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.qi(a,b,c))
return b},
d6:function d6(){},
a0:function a0(){},
c5:function c5(){},
bF:function bF(){},
d7:function d7(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
d8:function d8(){},
bG:function bG(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
mh:function(a,b){var s=b.c
return s==null?b.c=H.lr(a,b.z,!0):s},
mg:function(a,b){var s=b.c
return s==null?b.c=H.dZ(a,"m_",[b.z]):s},
mi:function(a){var s=a.y
if(s===6||s===7||s===8)return H.mi(a.z)
return s===11||s===12},
or:function(a){return a.cy},
lD:function(a){return H.ls(v.typeUniverse,a,!1)},
bp:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bp(a,s,a0,a1)
if(r===s)return b
return H.mI(a,r,!0)
case 7:s=b.z
r=H.bp(a,s,a0,a1)
if(r===s)return b
return H.lr(a,r,!0)
case 8:s=b.z
r=H.bp(a,s,a0,a1)
if(r===s)return b
return H.mH(a,r,!0)
case 9:q=b.Q
p=H.e7(a,q,a0,a1)
if(p===q)return b
return H.dZ(a,b.z,p)
case 10:o=b.z
n=H.bp(a,o,a0,a1)
m=b.Q
l=H.e7(a,m,a0,a1)
if(n===o&&l===m)return b
return H.lp(a,n,l)
case 11:k=b.z
j=H.bp(a,k,a0,a1)
i=b.Q
h=H.q6(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mG(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.e7(a,g,a0,a1)
o=b.z
n=H.bp(a,o,a0,a1)
if(f===g&&n===o)return b
return H.lq(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.hV("Attempted to substitute unexpected RTI kind "+c))}},
e7:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bp(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
q7:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bp(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
q6:function(a,b,c,d){var s,r=b.a,q=H.e7(a,r,c,d),p=b.b,o=H.e7(a,p,c,d),n=b.c,m=H.q7(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.h1()
s.a=q
s.b=o
s.c=m
return s},
b:function(a,b){a[v.arrayRti]=b
return a},
qe:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.n6(s)
return a.$S()}return null},
n8:function(a,b){var s
if(H.mi(b))if(a instanceof H.bz){s=H.qe(a)
if(s!=null)return s}return H.b2(a)},
b2:function(a){var s
if(a instanceof P.P){s=a.$ti
return s!=null?s:H.lx(a)}if(Array.isArray(a))return H.km(a)
return H.lx(J.e9(a))},
km:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
W:function(a){var s=a.$ti
return s!=null?s:H.lx(a)},
lx:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pv(a,s)},
pv:function(a,b){var s=a instanceof H.bz?a.__proto__.__proto__.constructor:b,r=H.p5(v.typeUniverse,s.name)
b.$ccache=r
return r},
n6:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.ls(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pu:function(a){var s,r,q,p=this
if(p===t.K)return H.e4(p,a,H.pz)
if(!H.b3(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.e4(p,a,H.pC)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.kv
else if(r===t.gR||r===t.H)q=H.py
else if(r===t.N)q=H.pA
else q=r===t.cJ?H.ku:null
if(q!=null)return H.e4(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.qt)){p.r="$i"+s
return H.e4(p,a,H.pB)}}else if(s===7)return H.e4(p,a,H.ps)
return H.e4(p,a,H.pq)},
e4:function(a,b,c){a.b=c
return a.b(b)},
pt:function(a){var s,r=this,q=H.pp
if(!H.b3(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.pm
else if(r===t.K)q=H.pl
else{s=H.ea(r)
if(s)q=H.pr}r.a=q
return r.a(a)},
lA:function(a){var s,r=a.y
if(!H.b3(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&H.lA(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
pq:function(a){var s=this
if(a==null)return H.lA(s)
return H.S(v.typeUniverse,H.n8(a,s),null,s,null)},
ps:function(a){if(a==null)return!0
return this.z.b(a)},
pB:function(a){var s,r=this
if(a==null)return H.lA(r)
s=r.r
if(a instanceof P.P)return!!a[s]
return!!J.e9(a)[s]},
pp:function(a){var s,r=this
if(a==null){s=H.ea(r)
if(s)return a}else if(r.b(a))return a
H.mT(a,r)},
pr:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mT(a,s)},
mT:function(a,b){throw H.c(H.oW(H.mz(a,H.n8(a,b),H.ar(b,null))))},
mz:function(a,b,c){var s=P.ij(a),r=H.ar(b==null?H.b2(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
oW:function(a){return new H.dX("TypeError: "+a)},
aa:function(a,b){return new H.dX("TypeError: "+H.mz(a,null,b))},
pz:function(a){return a!=null},
pl:function(a){if(a!=null)return a
throw H.c(H.aa(a,"Object"))},
pC:function(a){return!0},
pm:function(a){return a},
ku:function(a){return!0===a||!1===a},
mR:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.aa(a,"bool"))},
ry:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.aa(a,"bool"))},
rx:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.aa(a,"bool?"))},
rz:function(a){if(typeof a=="number")return a
throw H.c(H.aa(a,"double"))},
rB:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.aa(a,"double"))},
rA:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.aa(a,"double?"))},
kv:function(a){return typeof a=="number"&&Math.floor(a)===a},
kn:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.aa(a,"int"))},
rD:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.aa(a,"int"))},
rC:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.aa(a,"int?"))},
py:function(a){return typeof a=="number"},
rE:function(a){if(typeof a=="number")return a
throw H.c(H.aa(a,"num"))},
rG:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.aa(a,"num"))},
rF:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.aa(a,"num?"))},
pA:function(a){return typeof a=="string"},
ko:function(a){if(typeof a=="string")return a
throw H.c(H.aa(a,"String"))},
rI:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.aa(a,"String"))},
rH:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.aa(a,"String?"))},
q2:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.ar(a[q],b)
return s},
mU:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
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
if(!k)m+=" extends "+H.ar(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.ar(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.ar(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.ar(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.ar(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
ar:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.ar(a.z,b)
return s}if(l===7){r=a.z
s=H.ar(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.ar(a.z,b)+">"
if(l===9){p=H.q8(a.z)
o=a.Q
return o.length!==0?p+("<"+H.q2(o,b)+">"):p}if(l===11)return H.mU(a,b,null)
if(l===12)return H.mU(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
q8:function(a){var s,r=H.nf(a)
if(r!=null)return r
s="minified:"+a
return s},
mJ:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
p5:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.ls(a,b,!1)
else if(typeof m=="number"){s=m
r=H.e_(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dZ(a,b,q)
n[b]=o
return o}else return m},
p3:function(a,b){return H.mQ(a.tR,b)},
p2:function(a,b){return H.mQ(a.eT,b)},
ls:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mE(H.mC(a,null,b,c))
r.set(b,s)
return s},
hD:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mE(H.mC(a,b,c,!0))
q.set(c,r)
return r},
p4:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.lp(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bo:function(a,b){b.a=H.pt
b.b=H.pu
return b},
e_:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.aA(null,null)
s.y=b
s.cy=c
r=H.bo(a,s)
a.eC.set(c,r)
return r},
mI:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.p0(a,b,r,c)
a.eC.set(r,s)
return s},
p0:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b3(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.aA(null,null)
q.y=6
q.z=b
q.cy=c
return H.bo(a,q)},
lr:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.p_(a,b,r,c)
a.eC.set(r,s)
return s},
p_:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b3(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.ea(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.ea(q.z))return q
else return H.mh(a,b)}}p=new H.aA(null,null)
p.y=7
p.z=b
p.cy=c
return H.bo(a,p)},
mH:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.oY(a,b,r,c)
a.eC.set(r,s)
return s},
oY:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b3(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dZ(a,"m_",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.aA(null,null)
q.y=8
q.z=b
q.cy=c
return H.bo(a,q)},
p1:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.aA(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bo(a,s)
a.eC.set(q,r)
return r},
hC:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
oX:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dZ:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hC(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.aA(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bo(a,r)
a.eC.set(p,q)
return q},
lp:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hC(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aA(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bo(a,o)
a.eC.set(q,n)
return n},
mG:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hC(m)
if(j>0){s=l>0?",":""
r=H.hC(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.oX(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aA(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bo(a,o)
a.eC.set(q,r)
return r},
lq:function(a,b,c,d){var s,r=b.cy+("<"+H.hC(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.oZ(a,b,c,r,d)
a.eC.set(r,s)
return s},
oZ:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bp(a,b,r,0)
m=H.e7(a,c,r,0)
return H.lq(a,n,m,c!==m)}}l=new H.aA(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bo(a,l)},
mC:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mE:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.oQ(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mD(a,r,h,g,!1)
else if(q===46)r=H.mD(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.bn(a.u,a.e,g.pop()))
break
case 94:g.push(H.p1(a.u,g.pop()))
break
case 35:g.push(H.e_(a.u,5,"#"))
break
case 64:g.push(H.e_(a.u,2,"@"))
break
case 126:g.push(H.e_(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.lo(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.dZ(p,n,o))
else{m=H.bn(p,a.e,n)
switch(m.y){case 11:g.push(H.lq(p,m,o,a.n))
break
default:g.push(H.lp(p,m,o))
break}}break
case 38:H.oR(a,g)
break
case 42:p=a.u
g.push(H.mI(p,H.bn(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.lr(p,H.bn(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.mH(p,H.bn(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.h1()
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
H.lo(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.mG(p,H.bn(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.lo(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.oT(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.bn(a.u,a.e,i)},
oQ:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mD:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.mJ(s,o.z)[p]
if(n==null)H.h('No "'+p+'" in "'+H.or(o)+'"')
d.push(H.hD(s,o,n))}else d.push(p)
return m},
oR:function(a,b){var s=b.pop()
if(0===s){b.push(H.e_(a.u,1,"0&"))
return}if(1===s){b.push(H.e_(a.u,4,"1&"))
return}throw H.c(P.hV("Unexpected extended operation "+H.x(s)))},
bn:function(a,b,c){if(typeof c=="string")return H.dZ(a,c,a.sEA)
else if(typeof c=="number")return H.oS(a,b,c)
else return c},
lo:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bn(a,b,c[s])},
oT:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bn(a,b,c[s])},
oS:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.hV("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.hV("Bad index "+c+" for "+b.i(0)))},
S:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.b3(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.b3(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.S(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.S(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.S(a,b.z,c,d,e)
if(r===6)return H.S(a,b.z,c,d,e)
return r!==7}if(r===6)return H.S(a,b.z,c,d,e)
if(p===6){s=H.mh(a,d)
return H.S(a,b,c,s,e)}if(r===8){if(!H.S(a,b.z,c,d,e))return!1
return H.S(a,H.mg(a,b),c,d,e)}if(r===7){s=H.S(a,t.P,c,d,e)
return s&&H.S(a,b.z,c,d,e)}if(p===8){if(H.S(a,b,c,d.z,e))return!0
return H.S(a,b,c,H.mg(a,d),e)}if(p===7){s=H.S(a,b,c,t.P,e)
return s||H.S(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.b)return!0
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
if(!H.S(a,k,c,j,e)||!H.S(a,j,e,k,c))return!1}return H.mV(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.mV(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.px(a,b,c,d,e)}return!1},
mV:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.S(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.S(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.S(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.S(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.S(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
px:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.S(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mJ(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.S(a,H.hD(a,b,l[p]),c,r[p],e))return!1
return!0},
ea:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b3(a))if(r!==7)if(!(r===6&&H.ea(a.z)))s=r===8&&H.ea(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qt:function(a){var s
if(!H.b3(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
b3:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
mQ:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
aA:function aA(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
h1:function h1(){this.c=this.b=this.a=null},
fY:function fY(){},
dX:function dX(a){this.a=a},
nf:function(a){return v.mangledGlobalNames[a]},
qy:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lG:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kG:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.lF==null){H.qq()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.jw("Return interceptor for "+H.x(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.jZ
if(o==null)o=$.jZ=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.qv(a)
if(p!=null)return p
if(typeof a=="function")return C.V
s=Object.getPrototypeOf(a)
if(s==null)return C.B
if(s===Object.prototype)return C.B
if(typeof q=="function"){o=$.jZ
if(o==null)o=$.jZ=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
o2:function(a,b){if(a<0||a>4294967295)throw H.c(P.a8(a,0,4294967295,"length",null))
return J.o3(new Array(a),b)},
l8:function(a,b){if(a<0)throw H.c(P.bQ("Length must be a non-negative integer: "+a))
return H.b(new Array(a),b.K("w<0>"))},
o3:function(a,b){return J.l9(H.b(a,b.K("w<0>")))},
l9:function(a){a.fixed$length=Array
return a},
o4:function(a,b){return J.nF(a,b)},
e9:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cQ.prototype
return J.eB.prototype}if(typeof a=="string")return J.bb.prototype
if(a==null)return J.cR.prototype
if(typeof a=="boolean")return J.eA.prototype
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.P)return a
return J.kG(a)},
bN:function(a){if(typeof a=="string")return J.bb.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.P)return a
return J.kG(a)},
hQ:function(a){if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.P)return a
return J.kG(a)},
n4:function(a){if(typeof a=="number")return J.c1.prototype
if(typeof a=="string")return J.bb.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bK.prototype
return a},
ql:function(a){if(typeof a=="string")return J.bb.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bK.prototype
return a},
aL:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.P)return a
return J.kG(a)},
K:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.e9(a).q(a,b)},
lM:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.n4(a).N(a,b)},
lN:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n9(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bN(a).h(a,b)},
l1:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.n9(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.hQ(a).m(a,b,c)},
nD:function(a,b,c){return J.aL(a).h5(a,b,c)},
nE:function(a,b,c,d){return J.aL(a).hq(a,b,c,d)},
nF:function(a,b){return J.n4(a).af(a,b)},
hT:function(a,b){return J.hQ(a).I(a,b)},
ed:function(a,b){return J.hQ(a).E(a,b)},
nG:function(a){return J.aL(a).gad(a)},
nH:function(a){return J.aL(a).gbu(a)},
nI:function(a){return J.aL(a).gdu(a)},
l2:function(a){return J.e9(a).gF(a)},
aE:function(a){return J.hQ(a).gS(a)},
aM:function(a){return J.bN(a).gl(a)},
lO:function(a){return J.hQ(a).ii(a)},
nJ:function(a,b){return J.aL(a).im(a,b)},
nK:function(a){return J.ql(a).iw(a)},
cy:function(a){return J.e9(a).i(a)},
a:function a(){},
eA:function eA(){},
cR:function cR(){},
bc:function bc(){},
eY:function eY(){},
bK:function bK(){},
aR:function aR(){},
w:function w(a){this.$ti=a},
iw:function iw(a){this.$ti=a},
ak:function ak(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c1:function c1(){},
cQ:function cQ(){},
eB:function eB(){},
bb:function bb(){}},P={
oH:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.qa()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cu(new P.jV(q),1)).observe(s,{childList:true})
return new P.jU(q,s,r)}else if(self.setImmediate!=null)return P.qb()
return P.qc()},
oI:function(a){self.scheduleImmediate(H.cu(new P.jW(a),0))},
oJ:function(a){self.setImmediate(H.cu(new P.jX(a),0))},
oK:function(a){P.lh(C.m,a)},
lh:function(a,b){var s=C.c.a3(a.a,1000)
return P.oU(s<0?0:s,b)},
mm:function(a,b){var s=C.c.a3(a.a,1000)
return P.oV(s<0?0:s,b)},
oU:function(a,b){var s=new P.dW()
s.eI(a,b)
return s},
oV:function(a,b){var s=new P.dW()
s.eJ(a,b)
return s},
rv:function(a){return new P.cp(a,1)},
oN:function(){return C.a5},
oO:function(a){return new P.cp(a,3)},
pE:function(a,b){return new P.dT(a,b.K("dT<0>"))},
q_:function(){var s,r
for(s=$.cs;s!=null;s=$.cs){$.e6=null
r=s.b
$.cs=r
if(r==null)$.e5=null
s.a.$0()}},
q5:function(){$.ly=!0
try{P.q_()}finally{$.e6=null
$.ly=!1
if($.cs!=null)$.lL().$1(P.n_())}},
q3:function(a){var s=new P.fL(a),r=$.e5
if(r==null){$.cs=$.e5=s
if(!$.ly)$.lL().$1(P.n_())}else $.e5=r.b=s},
q4:function(a){var s,r,q,p=$.cs
if(p==null){P.q3(a)
$.e6=$.e5
return}s=new P.fL(a)
r=$.e6
if(r==null){s.b=p
$.cs=$.e6=s}else{q=r.b
s.b=q
$.e6=r.b=s
if(q==null)$.e5=s}},
ml:function(a,b){var s=$.aK
if(s===C.f)return P.lh(a,b)
return P.lh(a,s.hx(b))},
oA:function(a,b){var s=$.aK
if(s===C.f)return P.mm(a,b)
return P.mm(a,s.dq(b,t.aF))},
mW:function(a,b,c,d,e){P.q4(new P.ky(d,e))},
q0:function(a,b,c,d){var s,r=$.aK
if(r===c)return d.$0()
$.aK=c
s=r
try{r=d.$0()
return r}finally{$.aK=s}},
q1:function(a,b,c,d,e){var s,r=$.aK
if(r===c)return d.$1(e)
$.aK=c
s=r
try{r=d.$1(e)
return r}finally{$.aK=s}},
jV:function jV(a){this.a=a},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
dW:function dW(){this.c=0},
kd:function kd(a,b){this.a=a
this.b=b},
kc:function kc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cp:function cp(a,b){this.a=a
this.b=b},
bL:function bL(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dT:function dT(a,b){this.a=a
this.$ti=b},
fL:function fL(a){this.a=a
this.b=null},
cb:function cb(){},
ff:function ff(){},
kk:function kk(){},
ky:function ky(a,b){this.a=a
this.b=b},
k1:function k1(){},
k2:function k2(a,b){this.a=a
this.b=b},
k3:function k3(a,b,c){this.a=a
this.b=b
this.c=c},
o6:function(a,b){return new H.Y(a.K("@<0>").b9(b).K("Y<1,2>"))},
o7:function(a,b,c){return H.qk(a,new H.Y(b.K("@<0>").b9(c).K("Y<1,2>")))},
T:function(a,b){return new H.Y(a.K("@<0>").b9(b).K("Y<1,2>"))},
cV:function(a){return new P.dH(a.K("dH<0>"))},
ln:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oP:function(a,b){var s=new P.dI(a,b)
s.c=a.e
return s},
o0:function(a,b,c){var s,r
if(P.lz(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.b([],t.s)
$.ai.push(a)
try{P.pD(a,s)}finally{if(0>=$.ai.length)return H.d($.ai,-1)
$.ai.pop()}r=P.mj(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
l7:function(a,b,c){var s,r
if(P.lz(a))return b+"..."+c
s=new P.a_(b)
$.ai.push(a)
try{r=s
r.a=P.mj(r.a,a,", ")}finally{if(0>=$.ai.length)return H.d($.ai,-1)
$.ai.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lz:function(a){var s,r
for(s=$.ai.length,r=0;r<s;++r)if(a===$.ai[r])return!0
return!1},
pD:function(a,b){var s,r,q,p,o,n,m,l=a.gS(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.u())return
s=H.x(l.gB(l))
b.push(s)
k+=s.length+2;++j}if(!l.u()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gB(l);++j
if(!l.u()){if(j<=4){b.push(H.x(p))
return}r=H.x(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gB(l);++j
for(;l.u();p=o,o=n){n=l.gB(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.x(p)
r=H.x(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
o8:function(a,b,c){var s=P.o6(b,c)
a.E(0,new P.iB(s,b,c))
return s},
m1:function(a,b){var s,r,q=P.cV(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)q.n(0,b.a(a[r]))
return q},
ld:function(a){var s,r={}
if(P.lz(a))return"{...}"
s=new P.a_("")
try{$.ai.push(a)
s.a+="{"
r.a=!0
J.ed(a,new P.iF(r,s))
s.a+="}"}finally{if(0>=$.ai.length)return H.d($.ai,-1)
$.ai.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dH:function dH(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
k0:function k0(a){this.a=a
this.c=this.b=null},
dI:function dI(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cP:function cP(){},
iB:function iB(a,b,c){this.a=a
this.b=b
this.c=c},
cW:function cW(){},
k:function k(){},
d_:function d_(){},
iF:function iF(a,b){this.a=a
this.b=b},
M:function M(){},
hE:function hE(){},
d0:function d0(){},
ci:function ci(a,b){this.a=a
this.$ti=b},
dg:function dg(){},
dP:function dP(){},
dJ:function dJ(){},
e0:function e0(){},
e2:function e2(){},
oD:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.oE(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
oE:function(a,b,c,d){var s=a?$.nv():$.nu()
if(s==null)return null
if(0===c&&d===b.length)return P.mt(s,b)
return P.mt(s,b.subarray(c,P.bi(c,d,b.length)))},
mt:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.aj(r)}return null},
lQ:function(a,b,c,d,e,f){if(C.c.bo(f,4)!==0)throw H.c(P.a6("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a6("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a6("Invalid base64 padding, more than two '=' characters",a,b))},
pk:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
pj:function(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.bN(a),r=0;r<p;++r){q=s.h(a,b+r)
o[r]=(q&4294967040)>>>0!==0?255:q}return o},
jG:function jG(){},
jF:function jF(){},
hZ:function hZ(){},
i_:function i_(){},
ek:function ek(){},
en:function en(){},
ig:function ig(){},
iu:function iu(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
it:function it(a){this.a=a},
jD:function jD(){},
jH:function jH(){},
ki:function ki(a){this.b=0
this.c=a},
jE:function jE(a){this.a=a},
kh:function kh(a){this.a=a
this.b=16
this.c=0},
kL:function(a,b){var s=H.m9(a,b)
if(s!=null)return s
throw H.c(P.a6(a,null,null))},
nY:function(a){if(a instanceof H.bz)return a.i(0)
return"Instance of '"+H.dd(a)+"'"},
cY:function(a,b,c,d){var s,r=c?J.l8(a,d):J.o2(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
iC:function(a,b,c){var s,r=H.b([],c.K("w<0>"))
for(s=J.aE(a);s.u();)r.push(s.gB(s))
if(b)return r
return J.l9(r)},
o9:function(a,b,c){var s,r,q=J.l8(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
fh:function(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=P.bi(b,c,r)
return H.ma(b>0||c<r?s.slice(b,c):s)}if(t.bm.b(a))return H.oo(a,b,P.bi(b,c,a.length))
return P.ox(a,b,c)},
ox:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.a8(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.a8(c,b,a.length,o,o))
r=J.aE(a)
for(q=0;q<b;++q)if(!r.u())throw H.c(P.a8(b,0,q,o,o))
p=[]
if(s)for(;r.u();)p.push(r.gB(r))
else for(q=b;q<c;++q){if(!r.u())throw H.c(P.a8(c,b,q,o,o))
p.push(r.gB(r))}return H.ma(p)},
op:function(a){return new H.eC(a,H.o5(a,!1,!0,!1,!1,!1))},
mj:function(a,b,c){var s=J.aE(b)
if(!s.u())return a
if(c.length===0){do a+=H.x(s.gB(s))
while(s.u())}else{a+=H.x(s.gB(s))
for(;s.u();)a=a+c+H.x(s.gB(s))}return a},
mp:function(){var s=H.of()
if(s!=null)return P.oC(s)
throw H.c(P.C("'Uri.base' is not supported"))},
kg:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.nB().b
s=s.test(b)}else s=!1
if(s)return b
r=c.ghN().cd(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.az(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
nV:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
nW:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
eq:function(a){if(a>=10)return""+a
return"0"+a},
lW:function(a){return new P.bA(1000*a)},
ij:function(a){if(typeof a=="number"||H.ku(a)||null==a)return J.cy(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nY(a)},
hV:function(a){return new P.eg(a)},
bQ:function(a){return new P.aF(!1,null,null,a)},
f3:function(a,b){return new P.de(null,null,!0,a,b,"Value not in range")},
a8:function(a,b,c,d,e){return new P.de(b,c,!0,a,d,"Invalid value")},
bi:function(a,b,c){if(0>a||a>c)throw H.c(P.a8(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.a8(b,a,c,"end",null))
return b}return c},
mb:function(a,b){if(a<0)throw H.c(P.a8(a,0,null,b,null))
return a},
O:function(a,b,c,d,e){var s=e==null?J.aM(b):e
return new P.ey(s,!0,a,c,"Index out of range")},
C:function(a){return new P.fE(a)},
jw:function(a){return new P.fB(a)},
lg:function(a){return new P.ca(a)},
aI:function(a){return new P.el(a)},
f:function(a){return new P.fZ(a)},
a6:function(a,b,c){return new P.iq(a,b,c)},
lI:function(a){H.qy(a)},
oC:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.D(a5,4)^58)*3|C.a.D(a5,0)^100|C.a.D(a5,1)^97|C.a.D(a5,2)^116|C.a.D(a5,3)^97)>>>0
if(s===0)return P.mo(a4<a4?C.a.t(a5,0,a4):a5,5,a3).gei()
else if(s===32)return P.mo(C.a.t(a5,5,a4),0,a3).gei()}r=P.cY(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.mX(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(P.mX(a5,0,q,20,r)===20)r[7]=q
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
k=!1}else{if(!(m<a4&&m===n+2&&C.a.a7(a5,"..",n)))h=m>n+2&&C.a.a7(a5,"/..",m-3)
else h=!0
if(h){j=a3
k=!1}else{if(q===4)if(C.a.a7(a5,"file",0)){if(p<=0){if(!C.a.a7(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+C.a.t(a5,n,a4)
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
m=f}j="file"}else if(C.a.a7(a5,"http",0)){if(i&&o+3===n&&C.a.a7(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=C.a.b4(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&C.a.a7(a5,"https",0)){if(i&&o+4===n&&C.a.a7(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=C.a.b4(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}else j=a3
if(k){if(a4<a5.length){a5=C.a.t(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new P.hj(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=P.pd(a5,0,q)
else{if(q===0)P.cq(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?P.pe(a5,d,p-1):""
b=P.pa(a5,p,o,!1)
i=o+1
if(i<n){a=H.m9(C.a.t(a5,i,n),a3)
a0=P.pc(a==null?H.h(P.a6("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.pb(a5,n,m,a3,j,b!=null)
a2=m<l?P.lu(a5,m+1,l,a3):a3
return new P.bM(j,c,b,a0,a1,a2,l<a4?P.p9(a5,l+1,a4):a3)},
mr:function(a){var s=t.N
return C.b.hT(H.b(a.split("&"),t.s),P.T(s,s),new P.jB(C.e))},
oB:function(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jy(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=C.a.V(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=P.kL(C.a.t(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(q>=4)return H.d(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=P.kL(C.a.t(a,r,c),null)
if(o>255)k.$2(l,r)
if(q>=4)return H.d(j,q)
j[q]=o
return j},
mq:function(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.jz(a),c=new P.jA(d,a)
if(a.length<2)d.$1("address is too short")
s=H.b([],t.t)
for(r=b,q=r,p=!1,o=!1;r<a0;++r){n=C.a.V(a,r)
if(n===58){if(r===b){++r
if(C.a.V(a,r)!==58)d.$2("invalid start colon.",r)
q=r}if(r===q){if(p)d.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(c.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)d.$1("too few parts")
m=q===a0
l=C.b.gaz(s)
if(m&&l!==-1)d.$2("expected a part after last `:`",a0)
if(!m)if(!o)s.push(c.$2(q,a0))
else{k=P.oB(a,q,a0)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)d.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)d.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){if(h<0||h>=16)return H.d(j,h)
j[h]=0
e=h+1
if(e>=16)return H.d(j,e)
j[e]=0
h+=2}else{e=C.c.aY(g,8)
if(h<0||h>=16)return H.d(j,h)
j[h]=e
e=h+1
if(e>=16)return H.d(j,e)
j[e]=g&255
h+=2}}return j},
mK:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cq:function(a,b,c){throw H.c(P.a6(c,a,b))},
pc:function(a,b){if(a!=null&&a===P.mK(b))return null
return a},
pa:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.V(a,b)===91){s=c-1
if(C.a.V(a,s)!==93)P.cq(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.p7(a,r,s)
if(q<s){p=q+1
o=P.mP(a,C.a.a7(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mq(a,r,q)
return C.a.t(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.V(a,n)===58){q=C.a.bx(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mP(a,C.a.a7(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mq(a,b,q)
return"["+C.a.t(a,b,q)+o+"]"}return P.pg(a,b,c)},
p7:function(a,b,c){var s=C.a.bx(a,"%",b)
return s>=b&&s<c?s:c},
mP:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.a_(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.V(a,s)
if(p===37){o=P.lv(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.a_("")
m=i.a+=C.a.t(a,r,s)
if(n)o=C.a.t(a,s,s+3)
else if(o==="%")P.cq(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.a_("")
if(r<s){i.a+=C.a.t(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.V(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=C.a.t(a,r,s)
if(i==null){i=new P.a_("")
n=i}else n=i
n.a+=j
n.a+=P.lt(p)
s+=k
r=s}}}if(i==null)return C.a.t(a,b,c)
if(r<c)i.a+=C.a.t(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
pg:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.V(a,s)
if(o===37){n=P.lv(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.a_("")
l=C.a.t(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.t(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.d(C.x,m)
m=(C.x[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.a_("")
if(r<s){q.a+=C.a.t(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.d(C.j,m)
m=(C.j[m]&1<<(o&15))!==0}else m=!1
if(m)P.cq(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.V(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=C.a.t(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.a_("")
m=q}else m=q
m.a+=l
m.a+=P.lt(o)
s+=j
r=s}}}}if(q==null)return C.a.t(a,b,c)
if(r<c){l=C.a.t(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
pd:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.mM(C.a.D(a,b)))P.cq(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.D(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.d(C.l,p)
p=(C.l[p]&1<<(q&15))!==0}else p=!1
if(!p)P.cq(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.t(a,b,c)
return P.p6(r?a.toLowerCase():a)},
p6:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
pe:function(a,b,c){return P.e1(a,b,c,C.Y,!1)},
pb:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.e1(a,b,c,C.y,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a0(s,"/"))s="/"+s
return P.pf(s,e,f)},
pf:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a0(a,"/"))return P.ph(a,!s||c)
return P.pi(a)},
lu:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.bQ("Both query and queryParameters specified"))
return P.e1(a,b,c,C.k,!0)}if(d==null)return null
s=new P.a_("")
r.a=""
d.E(0,new P.ke(new P.kf(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
p9:function(a,b,c){return P.e1(a,b,c,C.k,!0)},
lv:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.V(a,b+1)
r=C.a.V(a,n)
q=H.kH(s)
p=H.kH(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aY(o,4)
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.az(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.t(a,b,b+3).toUpperCase()
return null},
lt:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=C.a.D(k,a>>>4)
s[2]=C.a.D(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=C.c.hg(a,6*q)&63|r
if(o>=p)return H.d(s,o)
s[o]=37
m=o+1
l=C.a.D(k,n>>>4)
if(m>=p)return H.d(s,m)
s[m]=l
l=o+2
m=C.a.D(k,n&15)
if(l>=p)return H.d(s,l)
s[l]=m
o+=3}}return P.fh(s,0,null)},
e1:function(a,b,c,d,e){var s=P.mO(a,b,c,d,e)
return s==null?C.a.t(a,b,c):s},
mO:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.V(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.d(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lv(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.d(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.cq(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.V(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=P.lt(o)}}if(p==null){p=new P.a_("")
n=p}else n=p
n.a+=C.a.t(a,q,r)
n.a+=H.x(m)
if(typeof l!=="number")return H.n7(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.t(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mN:function(a){if(C.a.a0(a,"."))return!0
return C.a.dR(a,"/.")!==-1},
pi:function(a){var s,r,q,p,o,n,m
if(!P.mN(a))return a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.K(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.d(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
ph:function(a,b){var s,r,q,p,o,n
if(!P.mN(a))return!b?P.mL(a):a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gaz(s)!==".."){if(0>=s.length)return H.d(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.d(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gaz(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.d(s,0)
r=P.mL(s[0])
if(0>=s.length)return H.d(s,0)
s[0]=r}return C.b.j(s,"/")},
mL:function(a){var s,r,q,p=a.length
if(p>=2&&P.mM(C.a.D(a,0)))for(s=1;s<p;++s){r=C.a.D(a,s)
if(r===58)return C.a.t(a,0,s)+"%3A"+C.a.a8(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.d(C.l,q)
q=(C.l[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
p8:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.D(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.bQ("Invalid URL encoding"))}}return s},
lw:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.D(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.t(a,b,c)
else p=new H.r(C.a.t(a,b,c))}else{p=H.b([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.D(a,o)
if(r>127)throw H.c(P.bQ("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.bQ("Truncated URI"))
p.push(P.p8(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a4.cd(p)},
mM:function(a){var s=a|32
return 97<=s&&s<=122},
mo:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.b([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.D(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.a6(k,a,r))}}if(q<0&&r>b)throw H.c(P.a6(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.D(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaz(j)
if(p!==44||r!==n+7||!C.a.a7(a,"base64",n+1))throw H.c(P.a6("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.H.i1(0,a,m,s)
else{l=P.mO(a,m,s,C.k,!0)
if(l!=null)a=C.a.b4(a,m,s,l)}return new P.jx(a,j,c)},
po:function(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="?",i="#",h=H.b(new Array(22),t.gN)
for(s=0;s<22;++s)h[s]=new Uint8Array(96)
r=new P.kr(h)
q=new P.ks()
p=new P.kt()
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
mX:function(a,b,c,d,e){var s,r,q,p,o,n,m=$.nC()
for(s=m.length,r=b;r<c;++r){if(d<0||d>=s)return H.d(m,d)
q=m[d]
p=C.a.D(a,r)^96
o=q[p>95?31:p]
d=o&31
n=o>>>5
if(n>=8)return H.d(e,n)
e[n]=r}return d},
Z:function Z(a,b){this.a=a
this.b=b},
bA:function bA(a){this.a=a},
ib:function ib(){},
ic:function ic(){},
L:function L(){},
eg:function eg(a){this.a=a},
fu:function fu(){},
eT:function eT(){},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
de:function de(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ey:function ey(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fE:function fE(a){this.a=a},
fB:function fB(a){this.a=a},
ca:function ca(a){this.a=a},
el:function el(a){this.a=a},
eW:function eW(){},
dk:function dk(){},
eo:function eo(a){this.a=a},
fZ:function fZ(a){this.a=a},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
j:function j(){},
ez:function ez(){},
af:function af(){},
P:function P(){},
a_:function a_(a){this.a=a},
jB:function jB(a){this.a=a},
jy:function jy(a){this.a=a},
jz:function jz(a){this.a=a},
jA:function jA(a,b){this.a=a
this.b=b},
bM:function bM(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
kf:function kf(a,b){this.a=a
this.b=b},
ke:function ke(a){this.a=a},
jx:function jx(a,b,c){this.a=a
this.b=b
this.c=c},
kr:function kr(a){this.a=a},
ks:function ks(){},
kt:function kt(){},
hj:function hj(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fR:function fR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
qg:function(a){var s,r,q,p
if(t.x.b(a)){s=J.nI(a)
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
return new P.dY(r,q,p)},
qf:function(a){if(a instanceof P.dY)return{data:a.a,height:a.b,width:a.c}
return a},
bq:function(a){var s,r,q,p,o
if(a==null)return null
s=P.T(t.N,t.A)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
mS:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.ku(a))return a
if(t.f.b(a))return P.n0(a)
if(t.r.b(a)){s=[]
J.ed(a,new P.kp(s))
a=s}return a},
n0:function(a){var s={}
J.ed(a,new P.kz(s))
return s},
k7:function k7(){},
k9:function k9(a,b){this.a=a
this.b=b},
ka:function ka(a,b){this.a=a
this.b=b},
dY:function dY(a,b,c){this.a=a
this.b=b
this.c=c},
kp:function kp(a){this.a=a},
kz:function kz(a){this.a=a},
k8:function k8(a,b){this.a=a
this.b=b},
eu:function eu(a,b){this.a=a
this.b=b},
io:function io(){},
ip:function ip(){},
hh:function hh(){},
a9:function a9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aS:function aS(){},
eF:function eF(){},
aW:function aW(){},
eU:function eU(){},
j1:function j1(){},
c9:function c9(){},
fg:function fg(){},
o:function o(){},
aY:function aY(){},
ft:function ft(){},
h5:function h5(){},
h6:function h6(){},
hd:function hd(){},
he:function he(){},
hr:function hr(){},
hs:function hs(){},
hA:function hA(){},
hB:function hB(){},
hX:function hX(){},
ei:function ei(){},
hY:function hY(a){this.a=a},
ej:function ej(){},
b5:function b5(){},
eV:function eV(){},
fN:function fN(){},
c8:function c8(){},
fb:function fb(){},
hn:function hn(){},
ho:function ho(){}},W={
lP:function(){var s=document.createElement("a")
s.toString
return s},
l3:function(){var s=document.createElement("canvas")
s.toString
return s},
nX:function(a,b,c){var s=document.body
s.toString
s=new H.b0(new W.a5(C.p.ag(s,a,b,c)),new W.id(),t.ac.K("b0<k.E>"))
return t.h.a(s.gaQ(s))},
ie:function(a){return"wheel"},
cK:function(a){var s,r,q="element tag unavailable"
try{s=J.aL(a)
s.gef(a)
q=s.gef(a)}catch(r){H.aj(r)}return q},
o_:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.aj(s)}return q},
k_:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mB:function(a,b,c,d){var s=W.k_(W.k_(W.k_(W.k_(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
a4:function(a,b,c,d){var s=new W.dF(a,b,c==null?null:W.mY(new W.jY(c),t.aD),!1)
s.hn()
return s},
mA:function(a){var s=W.lP(),r=window
s=new W.co(new W.k4(s,r.location))
s.eD(a)
return s},
oL:function(a,b,c,d){return!0},
oM:function(a,b,c,d){var s,r,q,p=d.a,o=p.a
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
mF:function(){var s=t.N,r=P.m1(C.z,s),q=H.b(["TEMPLATE"],t.s)
s=new W.hv(r,P.cV(s),P.cV(s),P.cV(s),null)
s.eH(null,new H.d1(C.z,new W.kb(),t.dv),q,null)
return s},
mY:function(a,b){var s=$.aK
if(s===C.f)return a
return s.dq(a,b)},
v:function v(){},
hU:function hU(){},
ee:function ee(){},
ef:function ef(){},
bR:function bR(){},
bw:function bw(){},
bx:function bx(){},
by:function by(){},
cC:function cC(){},
aG:function aG(){},
i4:function i4(){},
J:function J(){},
cG:function cG(){},
i5:function i5(){},
at:function at(){},
aQ:function aQ(){},
i6:function i6(){},
i7:function i7(){},
i8:function i8(){},
b7:function b7(){},
i9:function i9(){},
cH:function cH(){},
cI:function cI(){},
er:function er(){},
ia:function ia(){},
fO:function fO(a,b){this.a=a
this.b=b},
E:function E(){},
id:function id(){},
m:function m(){},
e:function e(){},
ae:function ae(){},
bX:function bX(){},
et:function et(){},
ev:function ev(){},
av:function av(){},
is:function is(){},
bC:function bC(){},
bD:function bD(){},
bZ:function bZ(){},
c0:function c0(){},
bE:function bE(){},
iD:function iD(){},
iU:function iU(){},
c3:function c3(){},
eL:function eL(){},
iV:function iV(a){this.a=a},
eM:function eM(){},
iW:function iW(a){this.a=a},
ax:function ax(){},
eN:function eN(){},
am:function am(){},
a5:function a5(a){this.a=a},
t:function t(){},
d9:function d9(){},
ay:function ay(){},
f_:function f_(){},
f5:function f5(){},
j8:function j8(a){this.a=a},
f7:function f7(){},
an:function an(){},
f9:function f9(){},
aB:function aB(){},
fa:function fa(){},
aC:function aC(){},
fe:function fe(){},
jg:function jg(a){this.a=a},
ah:function ah(){},
bk:function bk(){},
dm:function dm(){},
fi:function fi(){},
fj:function fj(){},
cc:function cc(){},
ao:function ao(){},
ad:function ad(){},
fl:function fl(){},
fm:function fm(){},
jm:function jm(){},
ap:function ap(){},
bJ:function bJ(){},
fs:function fs(){},
jr:function jr(){},
b_:function b_(){},
jC:function jC(){},
fI:function fI(){},
bm:function bm(){},
cm:function cm(){},
cn:function cn(){},
fP:function fP(){},
dE:function dE(){},
h2:function h2(){},
dK:function dK(){},
hm:function hm(){},
ht:function ht(){},
fM:function fM(){},
fW:function fW(a){this.a=a},
l6:function l6(a,b){this.a=a
this.$ti=b},
dF:function dF(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jY:function jY(a){this.a=a},
lm:function lm(a){this.$ti=a},
co:function co(a){this.a=a},
N:function N(){},
da:function da(a){this.a=a},
iZ:function iZ(a){this.a=a},
iY:function iY(a,b,c){this.a=a
this.b=b
this.c=c},
dQ:function dQ(){},
k5:function k5(){},
k6:function k6(){},
hv:function hv(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kb:function kb(){},
hu:function hu(){},
cM:function cM(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
k4:function k4(a,b){this.a=a
this.b=b},
hF:function hF(a){this.a=a
this.b=0},
kj:function kj(a){this.a=a},
fQ:function fQ(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(){},
fV:function fV(){},
h_:function h_(){},
h0:function h0(){},
h3:function h3(){},
h4:function h4(){},
h7:function h7(){},
h8:function h8(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(){},
hc:function hc(){},
hf:function hf(){},
hg:function hg(){},
hi:function hi(){},
dR:function dR(){},
dS:function dS(){},
hk:function hk(){},
hl:function hl(){},
hq:function hq(){},
hw:function hw(){},
hx:function hx(){},
dU:function dU(){},
dV:function dV(){},
hy:function hy(){},
hz:function hz(){},
hG:function hG(){},
hH:function hH(){},
hI:function hI(){},
hJ:function hJ(){},
hK:function hK(){},
hL:function hL(){},
hM:function hM(){},
hN:function hN(){},
hO:function hO(){},
hP:function hP(){}},K={
Q:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.f("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.D(a,0)
r=C.a.D(b,0)
if(s>r){q=r
r=s
s=q}return new K.f2(s,r)},
aN:function aN(){},
cO:function cO(){},
ac:function ac(a){this.a=a},
f2:function f2(a,b){this.a=a
this.b=b},
u:function u(a){this.a=a},
qw:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="testCanvas",a=null,a0=V.os("Test 026"),a1=W.l3()
a1.className="pageLargeCanvas"
a1.id=b
a0.a.appendChild(a1).toString
s=t.s
a0.dh(H.b(["Test of the Material Lighting shader with a textured directional light. ","The texturing of the directional light is being modified with a matrix. ","The texture matrix is updated using the pre-update methods. ","Use Ctrl plus the mouse to move the center object."],s))
a0.hp(H.b(["shapes"],s))
a0.dh(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(b)
if(r==null)H.h(P.f("Failed to find an element with the identifier, testCanvas."))
q=E.oz(r,!0,!0,!0,!1)
p=D.lV()
p.sai(U.em(V.m5(0.3,0.4,1,a)))
o=D.lV()
o.sai(U.em(V.m5(-0.3,-0.4,-1,a)))
o.sae(0,new V.V(0.125,0.125,0.125))
n=O.l4(t.gc)
m=new O.d2(n)
n.bp(m.gff(),m.gfh())
n=m.gcv()
n.gv().n(0,m.gd3())
n.gdW().n(0,m.gbc())
m.gcv().n(0,p)
m.gcv().n(0,o)
m.gdv().sae(0,new V.V(0,0,0))
n=m.gdi()
n.sae(0,new V.V(0.1,0.1,0.1))
n=m.gcf()
n.sae(0,new V.V(0.8,0.8,0.8))
n=m.gbJ()
n.sae(0,new V.V(0.2,0.2,0.2))
n=m.gbJ()
n.c0(new A.as(!0,n.c.b,!1))
n.d7(100)
n=m.gcf()
l=q.f.i_("../resources/Test.png",!0)
k=n.c
if(!k.b)n.c0(new A.as(k.a,!0,!1))
k=n.d
if(k!==l){if(k!=null)k.gv().O(0,n.gbc())
j=n.d
n.d=l
l.gv().n(0,n.gbc())
n.a.X(new D.G(n.b+".texture2D",j,n.d))}i=E.lZ()
n=q.x
i.sai(U.ms(!0,n))
i.san(0,F.ne())
h=E.lZ()
h.sai(U.em(V.aV(3,0,0,0,0,3,0,0,0,0,3,0,0,0,0,1)))
l=F.lC(1,a,a,1)
l.cq()
h.san(0,l)
g=new U.bY(V.bf(),H.b([],t.eJ))
g.bp(g.gfb(),g.gfT())
g.n(0,U.ms(!1,n))
g.n(0,U.em(V.le(3.141592653589793)))
g.n(0,U.em(V.aV(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
f=U.mf(0.5,0.7,0.3)
e=U.mf(0,0.1,0)
n=O.l4(t.l)
l=new M.es(n)
n.bp(l.gfl(),l.gfn())
d=X.nZ(a)
c=new X.eX(1.0471975511965976,0.1)
c.sai(a)
k=c.c
$.F().toString
if(!(Math.abs(k-1.0471975511965976)<1e-9)){c.c=1.0471975511965976
c.aU(new D.G("fov",k,1.0471975511965976))}k=c.d
$.F().toString
if(!(Math.abs(k-0.1)<1e-9)){c.d=0.1
c.aU(new D.G("near",k,0.1))}k=c.e
$.F().toString
if(!(Math.abs(k-2000)<1e-9)){c.e=2000
c.aU(new D.G("far",k,2000))}k=l.b
if(k!==c){if(k!=null)k.gv().O(0,l.gav())
j=l.b
l.b=c
c.gv().n(0,l.gav())
l.aD(new D.G("camera",j,l.b))}k=l.c
if(k!==d){if(k!=null)k.gv().O(0,l.gav())
j=l.c
l.c=d
d.gv().n(0,l.gav())
l.aD(new D.G("target",j,l.c))}l.seg(a)
l.seg(m)
n.n(0,i)
n.n(0,h)
n=l.b
if(n!=null)n.sai(g)
n=l.f
if(n==null)n=l.f=D.R()
n.n(0,new K.kO(m,f,e))
n=q.d
if(n!==l){if(n!=null)n.gv().O(0,q.gcO())
q.d=l
l.gv().n(0,q.gcO())
q.cP()}r=s.getElementById("shapes")
if(r==null)H.h(P.f("Failed to find shapes for RadioGroup"))
s=new V.j2("shapes",!0,r)
s.bf(0,"Cube",new K.kP(i))
s.bf(0,"Cylinder",new K.kQ(i))
s.bf(0,"Cone",new K.kR(i))
s.bf(0,"Sphere",new K.kS(i))
s.df(0,"Toroid",new K.kT(i),!0)
s.bf(0,"Knot",new K.kU(i))
s=q.Q
if(s==null)s=q.Q=D.R()
n=s.b
s=n==null?s.b=H.b([],t.a):n
s.push(new K.kV(a0,m))
V.qz(q)},
kO:function kO(a,b,c){this.a=a
this.b=b
this.c=c},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a){this.a=a},
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
kV:function kV(a,b){this.a=a
this.b=b}},L={
jp:function(){var s=t.N
return new L.jo(P.T(s,t.dl),P.T(s,t.f7),P.cV(s))},
fc:function fc(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
fq:function fq(a,b,c){this.a=a
this.b=b
this.c=c},
fr:function fr(a,b){this.b=a
this.c=b},
jo:function jo(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dq:function dq(a,b){this.b=a
this.c=!1
this.a=b}},O={
l4:function(a){return new O.al(H.b([],a.K("w<0>")),a.K("al<0>"))},
al:function al(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
d5:function d5(a){this.a=a
this.b=null},
eK:function(a,b){return new O.d4(new V.V(0,0,0),a,b,new A.as(!1,!1,!1))},
d2:function d2(a){var _=this
_.d=_.b=_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
iM:function iM(a,b){this.a=a
this.b=b},
iN:function iN(){},
iO:function iO(a,b){this.a=a
this.b=b},
iP:function iP(){},
iQ:function iQ(a,b){this.a=a
this.b=b},
iR:function iR(){},
iS:function iS(a,b){this.a=a
this.b=b},
iT:function iT(){},
iG:function iG(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
d3:function d3(){},
iH:function iH(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
d4:function d4(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
iJ:function iJ(a){this.b=a},
iK:function iK(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
iL:function iL(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
dn:function dn(){}},E={
lZ:function(){var s=O.l4(t.l),r=new E.bB(s)
s.bp(r.gi2(),r.gi5())
r.san(0,null)
r.sai(null)
return r},
mx:function(){var s=window.navigator.vendor
s.toString
if(C.a.A(s,"Google"))return C.F
s=window.navigator.userAgent
s.toString
if(C.a.A(s,"Firefox"))return C.q
s=window.navigator.appVersion
s.toString
if(C.a.A(s,"Trident")||C.a.A(s,"Edge"))return C.r
s=window.navigator.appName
s.toString
if(C.a.A(s,"Microsoft"))return C.r
return C.G},
my:function(){var s=window.navigator.appVersion
s.toString
if(C.a.A(s,"Win"))return C.a0
if(C.a.A(s,"Mac"))return C.A
if(C.a.A(s,"Linux"))return C.a1
return C.a2},
oq:function(a,b){var s
Date.now()
s=t.fA
s=new E.j4(a,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1),new O.d5(H.b([],s)),new O.d5(H.b([],s)),new O.d5(H.b([],s)),H.b([null],t.bc),P.T(t.N,t.fg))
s.eB(a,b)
return s},
oz:function(a,b,c,d,e){var s,r
if(t.gA.b(a))return E.mk(a,!0,!0,!0,!1)
s=W.l3()
r=s.style
r.width="100%"
r.height="100%"
J.nH(a).n(0,s)
return E.mk(s,!0,!0,!0,!1)},
mk:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.A,l=t.gW.a(C.i.cI(a,"webgl2",P.o7(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.c(P.f("Failed to get the rendering context for WebGL."))
s=E.oq(l,a)
m=H.kn(l.getParameter(3379))
H.kn(l.getParameter(34076))
r=H.b([],t.g9)
q=$.ih
p=new X.fG(a,r,(q==null?$.ih=new E.fX(E.mx(),E.my()):q).a===C.q?0.16666666666666666:0.005555555555555556)
o=document
o.toString
r.push(W.a4(o,"contextmenu",p.gfp(),!1))
r.push(W.a4(a,"focus",p.gfw(),!1))
r.push(W.a4(a,"blur",p.gfj(),!1))
r.push(W.a4(o,"keyup",p.gfC(),!1))
r.push(W.a4(o,"keydown",p.gfA(),!1))
r.push(W.a4(a,"mousedown",p.gfG(),!1))
r.push(W.a4(a,"mouseup",p.gfK(),!1))
r.push(W.a4(a,n,p.gfI(),!1))
W.ie(a)
W.ie(a)
r.push(W.a4(a,W.ie(a),p.gfM(),!1))
r.push(W.a4(o,n,p.gfs(),!1))
r.push(W.a4(o,"mouseup",p.gfu(),!1))
r.push(W.a4(o,"pointerlockchange",p.gfO(),!1))
r.push(W.a4(a,"touchstart",p.gh0(),!1))
r.push(W.a4(a,"touchend",p.gfX(),!1))
r.push(W.a4(a,"touchmove",p.gfZ(),!1))
m=new E.fp(a,s,new T.jj(l,m),p,new P.Z(Date.now(),!1))
m.d5()
return m},
i0:function i0(){},
bB:function bB(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bT:function bT(a){this.b=a},
c6:function c6(a){this.b=a},
fX:function fX(a,b){this.a=a
this.b=b},
j4:function j4(a,b,c,d,e,f,g,h){var _=this
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
j5:function j5(a){this.a=a},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
dl:function dl(a){this.c=a},
fp:function fp(a,b,c,d,e){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.x=d
_.Q=null
_.cx=!1
_.cy=e
_.db=0},
jl:function jl(a){this.a=a}},Z={
ll:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cr(c)),35044)
a.bindBuffer(b,null)
return new Z.fJ(b,s)},
aD:function(a){return new Z.bl(a)},
fJ:function fJ(a,b){this.a=a
this.b=b},
bU:function bU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jT:function jT(a){this.a=a},
cA:function cA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c_:function c_(a,b,c){this.a=a
this.b=b
this.c=c},
bl:function bl(a){this.a=a}},D={
R:function(){return new D.bW()},
i2:function i2(){},
bW:function bW(){var _=this
_.c=_.b=_.a=null
_.d=0},
ik:function ik(a){this.a=a},
il:function il(a){this.a=a},
X:function X(){},
b9:function b9(){},
ba:function ba(){},
G:function G(a,b,c){this.c=a
this.d=b
this.e=c},
lV:function(){var s=new D.bV(new V.V(1,1,1),V.lk(),V.lj(),V.oG())
s.sai(null)
s.sae(0,new V.V(1,1,1))
return s},
bV:function bV(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=null},
cT:function cT(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={cB:function cB(a,b){this.a=a
this.b=b},eE:function eE(a,b){this.a=a
this.b=b},iy:function iy(a){this.d=a},cZ:function cZ(a,b,c){this.x=a
this.c=b
this.d=c},iE:function iE(a,b,c,d){var _=this
_.a=a
_.f=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},bg:function bg(a,b,c){this.a=a
this.b=b
this.c=c},c4:function c4(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},iX:function iX(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},f1:function f1(){},dp:function dp(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},jq:function jq(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},fG:function fG(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
nZ:function(a){var s=new V.aP(0,0,0,1),r=$.me
if(r==null){r=V.md(0,0,1,1)
$.me=r}return new X.ir(s,r)},
ir:function ir(a,b){this.a=a
this.r=b
this.x=null},
eX:function eX(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
ji:function ji(){}},V={
hR:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
l0:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bo(a-b,s)
return(a<0?a+s:a)+b},
A:function(a,b,c){$.F().toString
return C.a.aj(C.d.cG(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cw:function(a,b,c){var s,r,q,p,o,n,m,l=H.b([],t.s)
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.q)(a),++p){o=a[p]
$.F().toString
n=C.a.aj(C.d.cG(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.d(l,m)
s=C.a.aj(l[m],q)
r=l.length
if(m>=r)return H.d(l,m)
l[m]=s}return l},
lH:function(a){return C.d.it(Math.pow(2,C.d.cr(Math.log(a)/Math.log(2))))},
oc:function(a){return new V.c2(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q)},
bf:function(){var s=$.m6
return s==null?$.m6=V.aV(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aV:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.be(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
le:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aV(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
m4:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aV(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
m5:function(a,b,c,d){d=V.lj()
return V.m3(V.m7(),d,new V.D(a,b,c))},
m3:function(a,b,c){var s=c.H(),r=b.aI(s).H(),q=s.aI(r),p=new V.D(a.a,a.b,a.c)
return V.aV(r.a,q.a,s.a,r.b6(0).a9(p),r.b,q.b,s.b,q.b6(0).a9(p),r.c,q.c,s.c,s.b6(0).a9(p),0,0,0,1)},
m7:function(){var s=$.aX
return s==null?$.aX=new V.U(0,0,0):s},
md:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f4(a,b,c,d)},
dC:function(){var s=$.mw
return s==null?$.mw=new V.D(0,0,0):s},
oG:function(){var s=$.jJ
return s==null?$.jJ=new V.D(-1,0,0):s},
lj:function(){var s=$.jK
return s==null?$.jK=new V.D(0,1,0):s},
lk:function(){var s=$.jL
return s==null?$.jL=new V.D(0,0,1):s},
oF:function(a,b,c){return new V.D(a,b,c)},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ii:function ii(){},
c2:function c2(a,b,c,d,e,f,g,h,i){var _=this
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
a1:function a1(a,b){this.a=a
this.b=b},
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
bH:function bH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f4:function f4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aq:function aq(a,b){this.a=a
this.b=b},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
qz:function(a){P.oA(C.R,new V.kX(a))},
os:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.a4(n,"scroll",new V.jd(s),!1)
return new V.jb(o)},
aH:function aH(){},
kX:function kX(a){this.a=a},
ep:function ep(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
ew:function ew(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
ex:function ex(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
eZ:function eZ(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
j2:function j2(a,b,c){this.a=a
this.b=b
this.c=c},
j3:function j3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jb:function jb(a){this.a=a
this.b=null},
jd:function jd(a){this.a=a},
jc:function jc(a){this.a=a},
je:function je(a){this.a=a}},U={
lU:function(){return new U.i3()},
em:function(a){var s=V.bf(),r=new U.cD(s)
if(!s.q(0,a))r.a=a
return r},
mf:function(a,b,c){var s,r=new U.df(V.bf())
r.sel(0)
r.se8(0,0)
r.see(0)
s=r.d
$.F().toString
if(!(Math.abs(s-c)<1e-9)){r.d=c
r.T(new D.G("deltaYaw",s,c))}s=r.e
$.F().toString
if(!(Math.abs(s-a)<1e-9)){r.e=a
r.T(new D.G("deltaPitch",s,a))}s=r.f
$.F().toString
if(!(Math.abs(s-b)<1e-9)){r.f=b
r.T(new D.G("deltaRoll",s,b))}return r},
ms:function(a,b){var s,r,q=U.lU(),p=U.lU(),o=$.jI
if(o==null)o=$.jI=new V.aq(0,0)
o=new U.dB(q,p,new X.bg(!1,!1,!1),o,V.bf())
q.sek(0,!0)
q.sdX(6.283185307179586)
q.sdZ(0)
q.sa4(0,0)
q.sdY(100)
q.sa6(0)
q.sdt(0.5)
s=o.gbr()
q.gv().n(0,s)
p.sek(0,!0)
p.sdX(6.283185307179586)
p.sdZ(0)
p.sa4(0,0)
p.sdY(100)
p.sa6(0)
p.sdt(0.5)
p.gv().n(0,s)
q=new X.bg(a,!1,!1)
if(!o.d.q(0,q)){r=o.d
o.d=q
o.T(new D.G("modifiers",r,q))}o.hw(b)
return o},
i3:function i3(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
cD:function cD(a){this.a=a
this.b=null},
bY:function bY(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
a7:function a7(){},
df:function df(a){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=0
_.x=a
_.y=null},
dB:function dB(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.cx=_.ch=_.r=_.f=!1
_.db=_.cy=0
_.dx=d
_.dy=0
_.fr=e
_.fx=null}},M={es:function es(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=_.f=null}},A={
ob:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=""+"MaterialLight_"+a5.gas(a5)+a6.gas(a6)+a7.gas(a7)+a8.gas(a8)+a9.gas(a9)+b0.gas(b0)+b1.gas(b1)+b2.gas(b2)+b3.gas(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.q)(b4),++r)a+="_"+b4[r].a}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.q)(b5),++r)a+="_"+b5[r].a}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.q)(b6),++r)a+="_"+b6[r].a}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.q)(b7),++r)a+="_"+b7[r].a}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
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
b=$.bu()
if(h){s=$.bt()
b=new Z.bl(b.a|s.a)}if(g)b=new Z.bl(b.a|$.bs().a)
if(f)b=new Z.bl(b.a|$.bv().a)
if(e)b=new Z.bl(b.a|$.br().a)
return new A.iI(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
kw:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kx:function(a,b,c){var s,r="Txt, txt2D).rgb;\n"
A.kw(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hS(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}a.a=s+"}\n"},
pJ:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.kw(b,r,"emission")
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
pF:function(a,b){var s,r=a.b
if(!(r.a||r.b||!1))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.kx(b,r,"ambient")
b.a+="\n"},
pH:function(a,b){var s,r=a.c
if(!(r.a||r.b||!1))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.kx(b,r,"diffuse")
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
pK:function(a,b){var s,r=a.d
if(!(r.a||r.b||!1))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.kx(b,r,"invDiffuse")
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
pQ:function(a,b){var s,r=a.e
if(!(r.a||r.b||!1))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.kx(b,r,"specular")
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
pM:function(a,b){var s,r,q
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
pO:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.kw(b,r,"reflect")
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
pP:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.kw(b,r,"refract")
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
pG:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.hS(r)
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
s=c.a+="   return "+C.b.j(o," * ")+";\n"
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
s=c.a+="      highLight = intensity*("+C.b.j(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.j(o," + ")+");\n"
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
pI:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+s
q=A.hS(r)
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
c.a+="      highLight = intensity*("+C.b.j(k," + ")+");\n"}else c.a+="   highLight = "+C.b.j(k," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.b.j(m," + ")+");\n"
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
pN:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.hS(r)
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
m=c.a+="   return "+C.b.j(j," * ")+";\n"
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
p=c.a+="      highLight = intensity*("+C.b.j(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.b.j(j," + ")+");\n"
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
pR:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.hS(r)
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
if(m){s=$.ih
if(s==null)s=$.ih=new E.fX(E.mx(),E.my())
p=c.a
if(s.b===C.A){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
p=c.a+="   return "+C.b.j(h," * ")+";\n"
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
s=c.a+="      highLight = intensity*("+C.b.j(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.j(h," + ")+");\n"
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
pL:function(a,b){var s,r
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
s=b.a+="   return "+C.b.j(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
pS:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.a_(""),j=""+"precision mediump float;\n"
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
A.pJ(a,k)
A.pF(a,k)
A.pH(a,k)
A.pK(a,k)
A.pQ(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.pO(a,k)
A.pP(a,k)}A.pM(a,k)
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
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pG(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pI(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pN(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pR(a,p[n],k)
A.pL(a,k)}p=k.a+="// === Main ===\n"
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
for(j=a.z,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="barLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.a8(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.a8(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.a8(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.a8(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}j=a.a
if(j.a||j.b||!1)m.push("emissionColor()")
j=a.r
if(j.a||j.b||!1)m.push("reflect(refl)")
j=a.x
if(j.a||j.b||!1)m.push("refract(refl)")
if(m.length<=0)m.push("vec3(0.0, 0.0, 0.0)")
j=k.a+="   vec4 objClr = vec4("+C.b.j(m," + ")+", alpha);\n"
if(r)j=k.a=j+"   objClr = colorMat*objClr;\n"
j+="   gl_FragColor = objClr;\n"
k.a=j
j=k.a=j+"}\n"
return j.charCodeAt(0)==0?j:j},
pT:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.b_+"];\n"
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
pV:function(a,b){var s
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
pU:function(a,b){var s
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
pX:function(a,b){var s,r
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
pY:function(a,b){var s,r
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
pW:function(a,b){var s
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
pZ:function(a,b){var s
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
hS:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.a8(a,1)},
li:function(a,b,c,d,e){var s=new A.fv(H.b([],t.t),a,c,e)
s.f=d
s.e=P.cY(d,0,!1,t.S)
return s},
eh:function eh(a,b,c){this.a=a
this.b=b
this.c=c},
hW:function hW(a){this.a=a},
as:function as(a,b,c){this.a=a
this.b=b
this.c=c},
eJ:function eJ(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.iL=_.dL=_.dK=_.iK=_.dJ=_.dI=_.dH=_.iJ=_.dG=_.dF=_.dE=_.iI=_.dD=_.dC=_.iH=_.dB=_.dA=_.dz=_.b0=_.b_=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.cg=c
_.ci=d
_.cj=e
_.ck=f
_.cl=g
_.cm=h
_.cn=i
_.co=j
_.iO=_.iN=_.iM=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
b4:function b4(a,b){this.a=a
this.b=b},
b6:function b6(a,b){this.a=a
this.b=b},
bh:function bh(a,b){this.a=a
this.b=b},
bj:function bj(a,b){this.a=a
this.b=b},
iI:function iI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.b_=b5
_.b0=b6
_.dz=b7},
du:function du(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dv:function dv(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dx:function dx(a,b,c,d,e,f,g,h,i,j){var _=this
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
dA:function dA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dh:function dh(){},
a2:function a2(){},
jv:function jv(a){this.a=a},
cf:function cf(a,b,c){this.a=a
this.c=b
this.d=c},
fx:function fx(a,b,c){this.a=a
this.c=b
this.d=c},
fy:function fy(a,b,c){this.a=a
this.c=b
this.d=c},
fz:function fz(a,b,c){this.a=a
this.c=b
this.d=c},
fv:function fv(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
dr:function dr(a,b,c){this.a=a
this.c=b
this.d=c},
fw:function fw(a,b,c){this.a=a
this.c=b
this.d=c},
ds:function ds(a,b,c){this.a=a
this.c=b
this.d=c},
dt:function dt(a,b,c){this.a=a
this.c=b
this.d=c},
fA:function fA(a,b,c){this.a=a
this.c=b
this.d=c},
dw:function dw(a,b,c){this.a=a
this.c=b
this.d=c},
cg:function cg(a,b,c){this.a=a
this.c=b
this.d=c},
dy:function dy(a,b,c){this.a=a
this.c=b
this.d=c},
dz:function dz(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lC:function(a,b,c,d){var s=F.lf()
F.e3(s,b,c,d,a,1,0,0,1)
F.e3(s,b,c,d,a,0,1,0,3)
F.e3(s,b,c,d,a,0,0,1,2)
F.e3(s,b,c,d,a,-1,0,0,0)
F.e3(s,b,c,d,a,0,-1,0,0)
F.e3(s,b,c,d,a,0,0,-1,3)
s.ax()
return s},
kq:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
e3:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.D(g,f+a2,e+a3)
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
i.d=h}k=F.kq(h)
j=F.kq(g)
a.bj(F.lK(a0,a1,new F.kl(i,F.kq(f),F.kq(e),j,k,c),b))},
n3:function(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(a1<3)throw H.c(P.f("Must have 3 or more sizes for a disk."))
s=F.lf()
r=b?-1:1
q=-6.283185307179586/a1
p=t.k
o=H.b([],p)
n=s.gZ()
m=new V.D(0,0,r).H()
o.push(n.ht(new V.bH(a,-1,-1,-1),new V.aP(1,1,1,1),new V.U(0,0,c),new V.D(0,0,r),new V.a1(0.5,0.5),m))
for(l=0;l<=a1;++l){k=q*l
j=r*Math.sin(k)
i=Math.cos(k)
h=a0.$1(l/a1)
n=s.a
if(n==null)n=s.a=new F.y(s,H.b([],p))
m=new V.D(j,i,r).H()
if(j<0)g=0
else g=j>1?1:j
f=i<0
if(f)e=0
else e=i>1?1:i
if(f)f=0
else f=i>1?1:i
d=F.fH(new V.bH(a,-1,-1,-1),null,new V.aP(g,e,f,1),new V.U(j*h,i*h,c),new V.D(0,0,r),new V.a1(j*0.5+0.5,i*0.5+0.5),m,null,0)
n.n(0,d)
o.push(d)}s.gU().hr(o)
return s},
n1:function(a,b,c){return F.qh(!0,a,1,new F.kA(1,c),b)},
qh:function(a,b,c,d,e){var s
if(e<3)throw H.c(P.f("Must have 3 or more sizes for a cylindrical shape."))
if(c<1)throw H.c(P.f("Must have 1 or more divisionss for a cylindrical shape."))
s=F.lK(c,e,new F.kC(d),null)
s.ax()
s.c7()
if(b)s.bj(F.n3(3,!1,1,new F.kD(d),e))
s.bj(F.n3(1,!0,-1,new F.kE(d),e))
return s},
qA:function(a,b){var s=F.lC(a,null,new F.kY(1,new F.kZ()),b)
s.c7()
return s},
ne:function(){return F.n2(15,30,0.5,1,new F.l_())},
qu:function(){return F.n2(12,120,0.3,1,new F.kN(3,2))},
n2:function(a,b,c,d,e){var s=F.lK(a,b,new F.kB(e,d,b,c),null)
s.ax()
s.c7()
return s},
lK:function(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null
if(a<1)throw H.c(P.f("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.f("Must have 1 or more divisions of the height for a surface."))
s=F.lf()
r=t.k
q=H.b([],r)
for(p=0;p<=b;++p){o=p/b
n=s.a
if(n==null)n=s.a=new F.y(s,H.b([],r))
if(o<0)m=0
else m=o>1?1:o
l=F.fH(d,d,new V.aP(m,0,0,1),d,d,new V.a1(o,1),d,d,0)
n.n(0,l)
c.$3(l,o,0)
q.push(l.ce(a0))}for(p=1;p<=a;++p){k=p/a
for(n=k>1,m=k<0,j=1-k,i=0;i<=b;++i){o=i/b
h=s.a
if(h==null)h=s.a=new F.y(s,H.b([],r))
if(o<0)g=0
else g=o>1?1:o
if(m)f=0
else f=n?1:k
if(m)e=0
else e=n?1:k
l=F.fH(d,d,new V.aP(g,f,e,1),d,d,new V.a1(o,j),d,d,0)
h.n(0,l)
c.$3(l,o,k)
q.push(l.ce(a0))}}s.gU().hs(a+1,b+1,q)
return s},
lf:function(){return new F.j9()},
fH:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cj()
h=$.nw()
s=$.bu()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.bt().a)!==0)q.r=e
if((r&$.bs().a)!==0)q.x=b
if((r&$.bv().a)!==0)q.y=f
if((r&$.bP().a)!==0)q.z=g
if((r&$.nx().a)!==0)q.Q=c
if((r&$.cx().a)!==0)q.ch=i
if((r&$.br().a)!==0)q.cx=a
return q},
kl:function kl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kA:function kA(a,b){this.a=a
this.b=b},
kC:function kC(a){this.a=a},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
kZ:function kZ(){},
kY:function kY(a,b){this.a=a
this.b=b},
l_:function l_(){},
kN:function kN(a,b){this.a=a
this.b=b},
kB:function kB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
au:function au(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
im:function im(){},
jf:function jf(){},
eG:function eG(){this.b=this.a=null},
iz:function iz(){},
ju:function ju(){},
f0:function f0(){this.a=null},
j9:function j9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ja:function ja(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
di:function di(a,b){this.a=a
this.b=b},
dj:function dj(a,b){this.a=a
this.b=b},
bI:function bI(a,b){this.a=a
this.b=b},
cj:function cj(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
jS:function jS(a){this.a=a},
jR:function jR(a){this.a=a},
y:function y(a,b){this.a=a
this.b=!1
this.c=b},
ck:function ck(a,b,c){this.b=a
this.c=b
this.d=c},
jM:function jM(a,b){this.a=a
this.b=b},
jN:function jN(a,b){this.a=a
this.b=b},
cl:function cl(a,b){this.b=a
this.c=b},
jP:function jP(){},
jO:function jO(){},
jQ:function jQ(){},
j_:function j_(){},
dD:function dD(a){this.b=a}},T={cd:function cd(){},fn:function fn(){},fo:function fo(a){var _=this
_.a=0
_.b=a
_.d=_.c=!1
_.y=null},jj:function jj(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=0},jk:function jk(a,b,c,d,e,f,g){var _=this
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
H.la.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gF:function(a){return H.dc(a)},
i:function(a){return"Instance of '"+H.dd(a)+"'"}}
J.eA.prototype={
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$iab:1}
J.cR.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0}}
J.bc.prototype={
gF:function(a){return 0},
i:function(a){return String(a)},
$im0:1}
J.eY.prototype={}
J.bK.prototype={}
J.aR.prototype={
i:function(a){var s=a[$.ni()]
if(s==null)return this.ew(a)
return"JavaScript function for "+J.cy(s)},
$icN:1}
J.w.prototype={
cC:function(a,b){if(!!a.fixed$length)H.h(P.C("removeAt"))
if(b<0||b>=a.length)throw H.c(P.f3(b,null))
return a.splice(b,1)[0]},
O:function(a,b){var s
if(!!a.fixed$length)H.h(P.C("remove"))
for(s=0;s<a.length;++s)if(J.K(a[s],b)){a.splice(s,1)
return!0}return!1},
ac:function(a,b){if(!!a.fixed$length)H.h(P.C("addAll"))
this.eM(a,b)
return},
eM:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.aI(a))
for(s=0;s<r;++s)a.push(b[s])},
E:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.aI(a))}},
j:function(a,b){var s,r,q=a.length,p=P.cY(q,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.x(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
hY:function(a){return this.j(a,"")},
hS:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.aI(a))}return s},
hT:function(a,b,c){return this.hS(a,b,c,t.A)},
hR:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.aI(a))}throw H.c(H.iv())},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ghQ:function(a){if(a.length>0)return a[0]
throw H.c(H.iv())},
gaz:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.iv())},
dj:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.aI(a))}return!1},
b8:function(a,b){if(!!a.immutable$list)H.h(P.C("sort"))
H.ov(a,b==null?J.pw():b)},
er:function(a){return this.b8(a,null)},
A:function(a,b){var s
for(s=0;s<a.length;++s)if(J.K(a[s],b))return!0
return!1},
i:function(a){return P.l7(a,"[","]")},
gS:function(a){return new J.ak(a,a.length)},
gF:function(a){return H.dc(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.h(P.C("set length"))
if(b>a.length)H.km(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.cv(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.h(P.C("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cv(a,b))
a[b]=c},
$iz:1,
$in:1,
$ij:1,
$ip:1}
J.iw.prototype={}
J.ak.prototype={
gB:function(a){return H.W(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.q(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.c1.prototype={
af:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbz(b)
if(this.gbz(a)===s)return 0
if(this.gbz(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbz:function(a){return a===0?1/a<0:a<0},
it:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.C(""+a+".toInt()"))},
cr:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.C(""+a+".floor()"))},
ar:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.C(""+a+".round()"))},
cG:function(a,b){var s
if(b>20)throw H.c(P.a8(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbz(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
bo:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
ey:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d9(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.d9(a,b)},
d9:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.C("Result of truncating division is "+H.x(s)+": "+H.x(a)+" ~/ "+b))},
aY:function(a,b){var s
if(a>0)s=this.d8(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hg:function(a,b){if(b<0)throw H.c(H.e8(b))
return this.d8(a,b)},
d8:function(a,b){return b>31?0:a>>>b},
$iH:1,
$ia3:1}
J.cQ.prototype={$ii:1}
J.eB.prototype={}
J.bb.prototype={
V:function(a,b){if(b<0)throw H.c(H.cv(a,b))
if(b>=a.length)H.h(H.cv(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.c(H.cv(a,b))
return a.charCodeAt(b)},
W:function(a,b){return a+b},
b4:function(a,b,c,d){var s=P.bi(b,c,a.length),r=a.substring(0,b),q=a.substring(s)
return r+d+q},
a7:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a8(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a0:function(a,b){return this.a7(a,b,0)},
t:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.f3(b,null))
if(b>c)throw H.c(P.f3(b,null))
if(c>a.length)throw H.c(P.f3(c,null))
return a.substring(b,c)},
a8:function(a,b){return this.t(a,b,null)},
iw:function(a){return a.toLowerCase()},
N:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.O)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
aj:function(a,b){var s=b-a.length
if(s<=0)return a
return this.N(" ",s)+a},
bx:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a8(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dR:function(a,b){return this.bx(a,b,0)},
hB:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.a8(c,0,s,null,null))
return H.nd(a,b,c)},
A:function(a,b){return this.hB(a,b,0)},
af:function(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gF:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gl:function(a){return a.length},
$iz:1,
$il:1}
H.cS.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.r.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.V(this.a,b)}}
H.n.prototype={}
H.cX.prototype={
gS:function(a){return new H.bd(this,this.gl(this))},
bH:function(a,b){return this.ev(0,b)}}
H.bd.prototype={
gB:function(a){return H.W(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=J.bN(q),o=p.gl(q)
if(r.b!==o)throw H.c(P.aI(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.I(q,s);++r.c
return!0}}
H.aT.prototype={
gS:function(a){return new H.eI(J.aE(this.a),this.b)},
gl:function(a){return J.aM(this.a)},
I:function(a,b){return this.b.$1(J.hT(this.a,b))}}
H.cJ.prototype={$in:1}
H.eI.prototype={
u:function(){var s=this,r=s.b
if(r.u()){s.a=s.c.$1(r.gB(r))
return!0}s.a=null
return!1},
gB:function(a){return H.W(this).Q[1].a(this.a)}}
H.d1.prototype={
gl:function(a){return J.aM(this.a)},
I:function(a,b){return this.b.$1(J.hT(this.a,b))}}
H.b0.prototype={
gS:function(a){return new H.fK(J.aE(this.a),this.b)}}
H.fK.prototype={
u:function(){var s,r
for(s=this.a,r=this.b;s.u();)if(r.$1(s.gB(s)))return!0
return!1},
gB:function(a){var s=this.a
return s.gB(s)}}
H.cL.prototype={}
H.fD.prototype={
m:function(a,b,c){throw H.c(P.C("Cannot modify an unmodifiable list"))}}
H.ch.prototype={}
H.cE.prototype={
i:function(a){return P.ld(this)},
m:function(a,b,c){H.nU()},
$iI:1}
H.cF.prototype={
gl:function(a){return this.a},
cc:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.cc(0,b))return null
return this.cZ(b)},
cZ:function(a){return this.b[a]},
E:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.cZ(q))}}}
H.js.prototype={
ah:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.db.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.eD.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.fC.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.j0.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.hp.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bz.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.ng(r==null?"unknown":r)+"'"},
$icN:1,
giA:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fk.prototype={}
H.fd.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.ng(s)+"'"}}
H.bS.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bS))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gF:function(a){var s,r=this.c
if(r==null)s=H.dc(this.a)
else s=typeof r!=="object"?J.l2(r):H.dc(r)
return(s^H.dc(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.x(this.d)+"' of "+("Instance of '"+H.dd(s)+"'")}}
H.f6.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.Y.prototype={
gl:function(a){return this.a},
gby:function(a){return this.a===0},
ga1:function(a){return new H.cU(this,H.W(this).K("cU<1>"))},
giz:function(a){var s=this,r=H.W(s)
return H.oa(s.ga1(s),new H.ix(s),r.c,r.Q[1])},
cc:function(a,b){var s=this.b
if(s==null)return!1
return this.eU(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bs(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bs(p,b)
q=r==null?n:r.b
return q}else return o.hW(b)},
hW:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.d_(p,q.dS(a))
r=q.dT(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cT(s==null?q.b=q.bV():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cT(r==null?q.c=q.bV():r,b,c)}else q.hX(b,c)},
hX:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bV()
s=p.dS(a)
r=p.d_(o,s)
if(r==null)p.c1(o,s,[p.bW(a,b)])
else{q=p.dT(r,a)
if(q>=0)r[q].b=b
else r.push(p.bW(a,b))}},
E:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.aI(s))
r=r.c}},
cT:function(a,b,c){var s=this.bs(a,b)
if(s==null)this.c1(a,b,this.bW(b,c))
else s.b=c},
f4:function(){this.r=this.r+1&67108863},
bW:function(a,b){var s,r=this,q=new H.iA(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.f4()
return q},
dS:function(a){return J.l2(a)&0x3ffffff},
dT:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.K(a[r].a,b))return r
return-1},
i:function(a){return P.ld(this)},
bs:function(a,b){return a[b]},
d_:function(a,b){return a[b]},
c1:function(a,b,c){a[b]=c},
eY:function(a,b){delete a[b]},
eU:function(a,b){return this.bs(a,b)!=null},
bV:function(){var s="<non-identifier-key>",r=Object.create(null)
this.c1(r,s,r)
this.eY(r,s)
return r}}
H.ix.prototype={
$1:function(a){var s=this.a
return H.W(s).Q[1].a(s.h(0,a))},
$S:function(){return H.W(this.a).K("2(1)")}}
H.iA.prototype={}
H.cU.prototype={
gl:function(a){return this.a.a},
gS:function(a){var s=this.a,r=new H.eH(s,s.r)
r.c=s.e
return r}}
H.eH.prototype={
gB:function(a){return H.W(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.aI(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kI.prototype={
$1:function(a){return this.a(a)},
$S:37}
H.kJ.prototype={
$2:function(a,b){return this.a(a,b)},
$S:57}
H.kK.prototype={
$1:function(a){return this.a(a)},
$S:49}
H.eC.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imc:1}
H.d6.prototype={$id6:1}
H.a0.prototype={$ia0:1}
H.c5.prototype={
gl:function(a){return a.length},
$iz:1,
$iB:1}
H.bF.prototype={
h:function(a,b){H.b1(b,a,a.length)
return a[b]},
m:function(a,b,c){H.b1(b,a,a.length)
a[b]=c},
$in:1,
$ij:1,
$ip:1}
H.d7.prototype={
m:function(a,b,c){H.b1(b,a,a.length)
a[b]=c},
$in:1,
$ij:1,
$ip:1}
H.eO.prototype={
h:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.eP.prototype={
h:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.eQ.prototype={
h:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.eR.prototype={
h:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.eS.prototype={
h:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.d8.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.bG.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b1(b,a,a.length)
return a[b]},
$ibG:1,
$ice:1}
H.dL.prototype={}
H.dM.prototype={}
H.dN.prototype={}
H.dO.prototype={}
H.aA.prototype={
K:function(a){return H.hD(v.typeUniverse,this,a)},
b9:function(a){return H.p4(v.typeUniverse,this,a)}}
H.h1.prototype={}
H.fY.prototype={
i:function(a){return this.a}}
H.dX.prototype={}
P.jV.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:48}
P.jU.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:47}
P.jW.prototype={
$0:function(){this.a.$0()},
$S:12}
P.jX.prototype={
$0:function(){this.a.$0()},
$S:12}
P.dW.prototype={
eI:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cu(new P.kd(this,b),0),a)
else throw H.c(P.C("`setTimeout()` not found."))},
eJ:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cu(new P.kc(this,a,Date.now(),b),0),a)
else throw H.c(P.C("Periodic timer."))},
$ijn:1}
P.kd.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:2}
P.kc.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.ey(s,o)}q.c=p
r.d.$1(q)},
$S:12}
P.cp.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.x(this.a)+")"}}
P.bL.prototype={
gB:function(a){var s=this.c
if(s==null)return this.b
return s.gB(s)},
u:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.u())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.cp){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aE(s)
if(o instanceof P.bL){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dT.prototype={
gS:function(a){return new P.bL(this.a())}}
P.fL.prototype={}
P.cb.prototype={}
P.ff.prototype={}
P.kk.prototype={}
P.ky.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:2}
P.k1.prototype={
ip:function(a){var s,r,q,p=null
try{if(C.f===$.aK){a.$0()
return}P.q0(p,p,this,a)}catch(q){s=H.aj(q)
r=H.lE(q)
P.mW(p,p,this,s,r)}},
iq:function(a,b){var s,r,q,p=null
try{if(C.f===$.aK){a.$1(b)
return}P.q1(p,p,this,a,b)}catch(q){s=H.aj(q)
r=H.lE(q)
P.mW(p,p,this,s,r)}},
ir:function(a,b){return this.iq(a,b,t.A)},
hx:function(a){return new P.k2(this,a)},
dq:function(a,b){return new P.k3(this,a,b)}}
P.k2.prototype={
$0:function(){return this.a.ip(this.b)},
$S:2}
P.k3.prototype={
$1:function(a){return this.a.ir(this.b,a)},
$S:function(){return this.c.K("~(0)")}}
P.dH.prototype={
gS:function(a){var s=new P.dI(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
A:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.eT(b)
return r}},
eT:function(a){var s=this.d
if(s==null)return!1
return this.bS(s[this.bO(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cU(s==null?q.b=P.ln():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cU(r==null?q.c=P.ln():r,b)}else return q.eL(0,b)},
eL:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.ln()
s=q.bO(b)
r=p[s]
if(r==null)p[s]=[q.bN(b)]
else{if(q.bS(r,b)>=0)return!1
r.push(q.bN(b))}return!0},
O:function(a,b){if((b&1073741823)===b)return this.h3(this.c,b)
else return this.h2(0,b)},
h2:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bO(b)
r=n[s]
q=o.bS(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dc(p)
return!0},
cU:function(a,b){if(a[b]!=null)return!1
a[b]=this.bN(b)
return!0},
h3:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.dc(s)
delete a[b]
return!0},
cV:function(){this.r=this.r+1&1073741823},
bN:function(a){var s,r=this,q=new P.k0(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cV()
return q},
dc:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cV()},
bO:function(a){return J.l2(a)&1073741823},
bS:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.K(a[r].a,b))return r
return-1}}
P.k0.prototype={}
P.dI.prototype={
gB:function(a){return H.W(this).c.a(this.d)},
u:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.aI(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cP.prototype={}
P.iB.prototype={
$2:function(a,b){this.a.m(0,this.b.a(a),this.c.a(b))},
$S:10}
P.cW.prototype={$in:1,$ij:1,$ip:1}
P.k.prototype={
gS:function(a){return new H.bd(a,this.gl(a))},
I:function(a,b){return this.h(a,b)},
E:function(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gl(a))throw H.c(P.aI(a))}},
gby:function(a){return this.gl(a)===0},
iv:function(a,b){var s,r,q,p,o=this
if(o.gby(a)){s=J.l8(0,H.b2(a).K("k.E"))
return s}r=o.h(a,0)
q=P.cY(o.gl(a),r,!0,H.b2(a).K("k.E"))
for(p=1;p<o.gl(a);++p){s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
iu:function(a){return this.iv(a,!0)},
hO:function(a,b,c,d){var s
H.b2(a).K("k.E").a(d)
P.bi(b,c,this.gl(a))
for(s=b;s<c;++s)this.m(a,s,d)},
i:function(a){return P.l7(a,"[","]")}}
P.d_.prototype={}
P.iF.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.x(a)
r.a=s+": "
r.a+=H.x(b)},
$S:45}
P.M.prototype={
E:function(a,b){var s,r,q
for(s=J.aE(this.ga1(a)),r=H.b2(a).K("M.V");s.u();){q=s.gB(s)
b.$2(q,r.a(this.h(a,q)))}},
gl:function(a){return J.aM(this.ga1(a))},
i:function(a){return P.ld(a)},
$iI:1}
P.hE.prototype={
m:function(a,b,c){throw H.c(P.C("Cannot modify unmodifiable map"))}}
P.d0.prototype={
h:function(a,b){return J.lN(this.a,b)},
m:function(a,b,c){J.l1(this.a,b,c)},
E:function(a,b){J.ed(this.a,b)},
gl:function(a){return J.aM(this.a)},
i:function(a){return J.cy(this.a)},
$iI:1}
P.ci.prototype={}
P.dg.prototype={
ac:function(a,b){var s
for(s=J.aE(b);s.u();)this.n(0,s.gB(s))},
i:function(a){return P.l7(this,"{","}")},
I:function(a,b){var s,r,q,p,o="index"
H.qd(b,o,t.S)
P.mb(b,o)
for(s=P.oP(this,this.r),r=H.W(s).c,q=0;s.u();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.O(b,this,o,null,q))}}
P.dP.prototype={$in:1,$ij:1}
P.dJ.prototype={}
P.e0.prototype={}
P.e2.prototype={}
P.jG.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.aj(r)}return null},
$S:15}
P.jF.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.aj(r)}return null},
$S:15}
P.hZ.prototype={
i1:function(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a4=P.bi(a3,a4,a2.length)
s=$.nz()
for(r=s.length,q=a3,p=q,o=null,n=-1,m=-1,l=0;q<a4;q=k){k=q+1
j=C.a.D(a2,q)
if(j===37){i=k+2
if(i<=a4){h=H.kH(C.a.D(a2,k))
g=H.kH(C.a.D(a2,k+1))
f=h*16+g-(g&256)
if(f===37)f=-1
k=i}else f=-1}else f=j
if(0<=f&&f<=127){if(f<0||f>=r)return H.d(s,f)
e=s[f]
if(e>=0){f=C.a.V("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e)
if(f===j)continue
j=f}else{if(e===-1){if(n<0){d=o==null?null:o.a.length
if(d==null)d=0
n=d+(q-p)
m=q}++l
if(j===61)continue}j=f}if(e!==-2){if(o==null){o=new P.a_("")
d=o}else d=o
c=d.a+=C.a.t(a2,p,q)
d.a=c+H.az(j)
p=k
continue}}throw H.c(P.a6("Invalid base64 data",a2,q))}if(o!=null){r=o.a+=C.a.t(a2,p,a4)
d=r.length
if(n>=0)P.lQ(a2,m,a4,n,l,d)
else{b=C.c.bo(d-1,4)+1
if(b===1)throw H.c(P.a6(a0,a2,a4))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return C.a.b4(a2,a3,a4,r.charCodeAt(0)==0?r:r)}a=a4-a3
if(n>=0)P.lQ(a2,m,a4,n,l,a)
else{b=C.c.bo(a,4)
if(b===1)throw H.c(P.a6(a0,a2,a4))
if(b>1)a2=C.a.b4(a2,a4,a4,b===2?"==":"=")}return a2}}
P.i_.prototype={}
P.ek.prototype={}
P.en.prototype={}
P.ig.prototype={}
P.iu.prototype={
i:function(a){return this.a}}
P.it.prototype={
eV:function(a,b,c){var s,r,q,p,o,n,m,l=null
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
default:m=l}if(m!=null){if(n==null)n=new P.a_("")
if(o>b)n.a+=C.a.t(a,b,o)
n.a+=m
b=o+1}}if(n==null)return l
if(c>b)n.a+=C.a.t(a,b,c)
s=n.a
return s.charCodeAt(0)==0?s:s}}
P.jD.prototype={
ghN:function(){return C.P}}
P.jH.prototype={
cd:function(a){var s,r,q,p=P.bi(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.ki(r)
if(q.f_(a,0,p)!==p){C.a.V(a,p-1)
q.c6()}return new Uint8Array(r.subarray(0,H.pn(0,q.b,s)))}}
P.ki.prototype={
c6:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
ho:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.c6()
return!1}},
f_:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.V(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.D(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.ho(p,C.a.D(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.c6()}else if(p<=2047){o=l.b
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
P.jE.prototype={
cd:function(a){var s=this.a,r=P.oD(s,a,0,null)
if(r!=null)return r
return new P.kh(s).hC(a,0,null,!0)}}
P.kh.prototype={
hC:function(a,b,c,d){var s,r,q,p,o=this,n=P.bi(b,c,J.aM(a))
if(b===n)return""
s=P.pj(a,b,n)
r=o.bP(s,0,n-b,!0)
q=o.b
if((q&1)!==0){p=P.pk(q)
o.b=0
throw H.c(P.a6(p,a,b+o.c))}return r},
bP:function(a,b,c,d){var s,r,q=this
if(c-b>1000){s=C.c.a3(b+c,2)
r=q.bP(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bP(a,s,c,d)}return q.hH(a,b,c,d)},
hH:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.a_(""),f=b+1,e=a.length
if(b<0||b>=e)return H.d(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.D("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.D(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.az(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.az(j)
break
case 65:g.a+=H.az(j);--f
break
default:p=g.a+=H.az(j)
g.a=p+H.az(j)
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
g.a+=H.az(a[l])}else g.a+=P.fh(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.az(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.Z.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.Z&&this.a===b.a&&!0},
af:function(a,b){return C.c.af(this.a,b.a)},
gF:function(a){var s=this.a
return(s^C.c.aY(s,30))&1073741823},
i:function(a){var s=this,r=P.nV(H.om(s)),q=P.eq(H.ok(s)),p=P.eq(H.og(s)),o=P.eq(H.oh(s)),n=P.eq(H.oj(s)),m=P.eq(H.ol(s)),l=P.nW(H.oi(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bA.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bA&&this.a===b.a},
gF:function(a){return C.c.gF(this.a)},
af:function(a,b){return C.c.af(this.a,b.a)},
i:function(a){var s,r,q,p=new P.ic(),o=this.a
if(o<0)return"-"+new P.bA(0-o).i(0)
s=p.$1(C.c.a3(o,6e7)%60)
r=p.$1(C.c.a3(o,1e6)%60)
q=new P.ib().$1(o%1e6)
return""+C.c.a3(o,36e8)+":"+s+":"+r+"."+q}}
P.ib.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:29}
P.ic.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:29}
P.L.prototype={}
P.eg.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.ij(s)
return"Assertion failed"}}
P.fu.prototype={}
P.eT.prototype={
i:function(a){return"Throw of null."}}
P.aF.prototype={
gbR:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbQ:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbR()+o+m
if(!q.a)return l
s=q.gbQ()
r=P.ij(q.b)
return l+s+": "+r}}
P.de.prototype={
gbR:function(){return"RangeError"},
gbQ:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.x(q):""
else if(q==null)s=": Not greater than or equal to "+H.x(r)
else if(q>r)s=": Not in inclusive range "+H.x(r)+".."+H.x(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.x(r)
return s}}
P.ey.prototype={
gbR:function(){return"RangeError"},
gbQ:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl:function(a){return this.f}}
P.fE.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fB.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.ca.prototype={
i:function(a){return"Bad state: "+this.a}}
P.el.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ij(s)+"."}}
P.eW.prototype={
i:function(a){return"Out of Memory"},
$iL:1}
P.dk.prototype={
i:function(a){return"Stack Overflow"},
$iL:1}
P.eo.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.fZ.prototype={
i:function(a){return"Exception: "+this.a}}
P.iq.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.t(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.D(d,o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}f=r>1?f+(" (at line "+r+", character "+(e-q+1)+")\n"):f+(" (at character "+(e+1)+")\n")
m=d.length
for(o=e;o<m;++o){n=C.a.V(d,o)
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
i=""}h=C.a.t(d,k,l)
return f+j+h+i+"\n"+C.a.N(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.x(e)+")"):f}}
P.j.prototype={
bH:function(a,b){return new H.b0(this,b,H.W(this).K("b0<j.E>"))},
gl:function(a){var s,r=this.gS(this)
for(s=0;r.u();)++s
return s},
gaQ:function(a){var s,r=this.gS(this)
if(!r.u())throw H.c(H.iv())
s=r.gB(r)
if(r.u())throw H.c(H.o1())
return s},
I:function(a,b){var s,r,q
P.mb(b,"index")
for(s=this.gS(this),r=0;s.u();){q=s.gB(s)
if(b===r)return q;++r}throw H.c(P.O(b,this,"index",null,r))},
i:function(a){return P.o0(this,"(",")")}}
P.ez.prototype={}
P.af.prototype={
gF:function(a){return P.P.prototype.gF.call(C.U,this)},
i:function(a){return"null"}}
P.P.prototype={constructor:P.P,$iP:1,
q:function(a,b){return this===b},
gF:function(a){return H.dc(this)},
i:function(a){return"Instance of '"+H.dd(this)+"'"},
toString:function(){return this.i(this)}}
P.a_.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jB.prototype={
$2:function(a,b){var s,r,q,p=C.a.dR(b,"=")
if(p===-1){if(b!=="")J.l1(a,P.lw(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.t(b,0,p)
r=C.a.a8(b,p+1)
q=this.a
J.l1(a,P.lw(s,0,s.length,q,!0),P.lw(r,0,r.length,q,!0))}return a},
$S:44}
P.jy.prototype={
$2:function(a,b){throw H.c(P.a6("Illegal IPv4 address, "+a,this.a,b))},
$S:43}
P.jz.prototype={
$2:function(a,b){throw H.c(P.a6("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:42}
P.jA.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.kL(C.a.t(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:41}
P.bM.prototype={
gc5:function(){var s,r,q,p=this,o=p.x
if(o==null){o=p.a
s=o.length!==0?""+o+":":""
r=p.c
q=r==null
if(!q||o==="file"){o=s+"//"
s=p.b
if(s.length!==0)o=o+s+"@"
if(!q)o+=r
s=p.d
if(s!=null)o=o+":"+H.x(s)}else o=s
o+=p.e
s=p.f
if(s!=null)o=o+"?"+s
s=p.r
if(s!=null)o=o+"#"+s
o=o.charCodeAt(0)==0?o:o
if(p.x==null)p.x=o
else o=H.h(H.lc("_text"))}return o},
gF:function(a){var s=this,r=s.z
if(r==null){r=C.a.gF(s.gc5())
if(s.z==null)s.z=r
else r=H.h(H.lc("hashCode"))}return r},
gcB:function(){var s=this,r=s.Q
if(r==null){r=s.f
r=new P.ci(P.mr(r==null?"":r),t.dw)
if(s.Q==null)s.Q=r
else r=H.h(H.lc("queryParameters"))}return r},
gej:function(){return this.b},
gcs:function(a){var s=this.c
if(s==null)return""
if(C.a.a0(s,"["))return C.a.t(s,1,s.length-1)
return s},
gbC:function(a){var s=this.d
return s==null?P.mK(this.a):s},
gcA:function(a){var s=this.f
return s==null?"":s},
gdM:function(){var s=this.r
return s==null?"":s},
ec:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a0(s,"/"))s="/"+s
q=s
p=P.lu(null,0,0,b)
return new P.bM(n,l,j,k,q,p,o.r)},
gdN:function(){return this.c!=null},
gdQ:function(){return this.f!=null},
gdO:function(){return this.r!=null},
i:function(a){return this.gc5()},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.dD.b(b))if(q.a===b.gbI())if(q.c!=null===b.gdN())if(q.b===b.gej())if(q.gcs(q)===b.gcs(b))if(q.gbC(q)===b.gbC(b))if(q.e===b.ge7(b)){s=q.f
r=s==null
if(!r===b.gdQ()){if(r)s=""
if(s===b.gcA(b)){s=q.r
r=s==null
if(!r===b.gdO()){if(r)s=""
s=s===b.gdM()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
$ifF:1,
gbI:function(){return this.a},
ge7:function(a){return this.e}}
P.kf.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=P.kg(C.h,a,C.e,!0)
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=P.kg(C.h,b,C.e,!0)}},
$S:40}
P.ke.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.aE(b),r=this.a;s.u();)r.$2(a,s.gB(s))},
$S:5}
P.jx.prototype={
gei:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.d(m,0)
s=o.a
m=m[0]+1
r=C.a.bx(s,"?",m)
q=s.length
if(r>=0){p=P.e1(s,r+1,q,C.k,!1)
q=r}else p=n
m=o.c=new P.fR("data","",n,n,P.e1(s,m,q,C.y,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.kr.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.d(s,a)
s=s[a]
C.a_.hO(s,0,96,b)
return s},
$S:39}
P.ks.prototype={
$3:function(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=C.a.D(b,r)^96
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:23}
P.kt.prototype={
$3:function(a,b,c){var s,r,q
for(s=C.a.D(b,0),r=C.a.D(b,1);s<=r;++s){q=(s^96)>>>0
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:23}
P.hj.prototype={
gdN:function(){return this.c>0},
gdP:function(){return this.c>0&&this.d+1<this.e},
gdQ:function(){return this.f<this.r},
gdO:function(){return this.r<this.a.length},
gbI:function(){var s=this.x
return s==null?this.x=this.eS():s},
eS:function(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&C.a.a0(r.a,"http"))return"http"
if(q===5&&C.a.a0(r.a,"https"))return"https"
if(s&&C.a.a0(r.a,"file"))return"file"
if(q===7&&C.a.a0(r.a,"package"))return"package"
return C.a.t(r.a,0,q)},
gej:function(){var s=this.c,r=this.b+3
return s>r?C.a.t(this.a,r,s-1):""},
gcs:function(a){var s=this.c
return s>0?C.a.t(this.a,s,this.d):""},
gbC:function(a){var s,r=this
if(r.gdP())return P.kL(C.a.t(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&C.a.a0(r.a,"http"))return 80
if(s===5&&C.a.a0(r.a,"https"))return 443
return 0},
ge7:function(a){return C.a.t(this.a,this.e,this.f)},
gcA:function(a){var s=this.f,r=this.r
return s<r?C.a.t(this.a,s+1,r):""},
gdM:function(){var s=this.r,r=this.a
return s<r.length?C.a.a8(r,s+1):""},
gcB:function(){var s=this
if(s.f>=s.r)return C.Z
return new P.ci(P.mr(s.gcA(s)),t.dw)},
ec:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbI(),k=l==="file",j=n.c,i=j>0?C.a.t(n.a,n.b+3,j):"",h=n.gdP()?n.gbC(n):m
j=n.c
if(j>0)s=C.a.t(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.t(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a0(r,"/"))r="/"+r
p=P.lu(m,0,0,b)
q=n.r
o=q<j.length?C.a.a8(j,q+1):m
return new P.bM(l,i,s,h,r,p,o)},
gF:function(a){var s=this.y
return s==null?this.y=C.a.gF(this.a):s},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.dD.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifF:1}
P.fR.prototype={}
W.v.prototype={}
W.hU.prototype={
gl:function(a){return a.length}}
W.ee.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.ef.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bR.prototype={$ibR:1}
W.bw.prototype={$ibw:1}
W.bx.prototype={$ibx:1}
W.by.prototype={
cI:function(a,b,c){if(c!=null)return a.getContext(b,P.n0(c))
return a.getContext(b)},
en:function(a,b){return this.cI(a,b,null)},
$iby:1}
W.cC.prototype={$icC:1}
W.aG.prototype={
gl:function(a){return a.length}}
W.i4.prototype={
gl:function(a){return a.length}}
W.J.prototype={$iJ:1}
W.cG.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.i5.prototype={}
W.at.prototype={}
W.aQ.prototype={}
W.i6.prototype={
gl:function(a){return a.length}}
W.i7.prototype={
gl:function(a){return a.length}}
W.i8.prototype={
gl:function(a){return a.length}}
W.b7.prototype={$ib7:1}
W.i9.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cH.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.cI.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.x(r)+", "
s=a.top
s.toString
return r+H.x(s)+") "+H.x(this.gaP(a))+" x "+H.x(this.gaJ(a))},
q:function(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=J.aL(b)
if(s===r.gbB(b)){s=a.top
s.toString
s=s===r.gbE(b)&&this.gaP(a)===r.gaP(b)&&this.gaJ(a)===r.gaJ(b)}else s=!1}else s=!1
return s},
gF:function(a){var s,r=a.left
r.toString
r=C.d.gF(r)
s=a.top
s.toString
return W.mB(r,C.d.gF(s),C.d.gF(this.gaP(a)),C.d.gF(this.gaJ(a)))},
gdr:function(a){var s=a.bottom
s.toString
return s},
gd0:function(a){return a.height},
gaJ:function(a){var s=this.gd0(a)
s.toString
return s},
gbB:function(a){var s=a.left
s.toString
return s},
gcF:function(a){var s=a.right
s.toString
return s},
gbE:function(a){var s=a.top
s.toString
return s},
gde:function(a){return a.width},
gaP:function(a){var s=this.gde(a)
s.toString
return s},
$ia9:1}
W.er.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.ia.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.fO.prototype={
gby:function(a){return this.a.firstElementChild==null},
gl:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b]).toString},
n:function(a,b){this.a.appendChild(b).toString
return b},
gS:function(a){var s=this.iu(this)
return new J.ak(s,s.length)}}
W.E.prototype={
gad:function(a){return new W.fW(a)},
gbu:function(a){var s=a.children
s.toString
return new W.fO(a,s)},
gds:function(a){var s,r,q,p=a.clientLeft
p.toString
s=a.clientTop
s.toString
r=a.clientWidth
r.toString
q=a.clientHeight
q.toString
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.a9(p,s,r,q,t.I)},
i:function(a){var s=a.localName
s.toString
return s},
ag:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.lY
if(s==null){s=H.b([],t.Q)
r=new W.da(s)
s.push(W.mA(null))
s.push(W.mF())
$.lY=r
d=r}else d=s
s=$.lX
if(s==null){s=new W.hF(d)
$.lX=s
c=s}else{s.a=d
c=s}}if($.b8==null){s=document
r=s.implementation.createHTMLDocument("")
r.toString
$.b8=r
r=r.createRange()
r.toString
$.l5=r
r=$.b8.createElement("base")
t.cR.a(r)
s=s.baseURI
s.toString
r.href=s
$.b8.head.appendChild(r).toString}s=$.b8
if(s.body==null){r=s.createElement("body")
s.body=t.Y.a(r)}s=$.b8
if(t.Y.b(a)){s=s.body
s.toString
q=s}else{s.toString
r=a.tagName
r.toString
q=s.createElement(r)
$.b8.body.appendChild(q).toString}s="createContextualFragment" in window.Range.prototype
s.toString
if(s){s=a.tagName
s.toString
s=!C.b.A(C.X,s)}else s=!1
if(s){$.l5.selectNodeContents(q)
s=$.l5
s=s.createContextualFragment(b)
s.toString
p=s}else{q.innerHTML=b
s=$.b8.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.b8.body)J.lO(q)
c.cJ(p)
document.adoptNode(p).toString
return p},
hF:function(a,b,c){return this.ag(a,b,c,null)},
eo:function(a,b){var s
a.textContent=null
s=a.appendChild(this.ag(a,b,null,null))
s.toString},
gef:function(a){var s=a.tagName
s.toString
return s},
$iE:1}
W.id.prototype={
$1:function(a){return t.h.b(a)},
$S:28}
W.m.prototype={$im:1}
W.e.prototype={
hq:function(a,b,c,d){if(c!=null)this.eN(a,b,c,!1)},
eN:function(a,b,c,d){return a.addEventListener(b,H.cu(c,1),!1)},
$ie:1}
W.ae.prototype={$iae:1}
W.bX.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1,
$ibX:1}
W.et.prototype={
gl:function(a){return a.length}}
W.ev.prototype={
gl:function(a){return a.length}}
W.av.prototype={$iav:1}
W.is.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.bC.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.bD.prototype={
gdu:function(a){var s=a.data
s.toString
return s},
$ibD:1}
W.bZ.prototype={$ibZ:1}
W.c0.prototype={$ic0:1}
W.bE.prototype={$ibE:1}
W.iD.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.iU.prototype={
gl:function(a){return a.length}}
W.c3.prototype={$ic3:1}
W.eL.prototype={
h:function(a,b){return P.bq(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bq(s.value[1]))}},
ga1:function(a){var s=H.b([],t.s)
this.E(a,new W.iV(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iI:1}
W.iV.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.eM.prototype={
h:function(a,b){return P.bq(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bq(s.value[1]))}},
ga1:function(a){var s=H.b([],t.s)
this.E(a,new W.iW(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iI:1}
W.iW.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.ax.prototype={$iax:1}
W.eN.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.am.prototype={$iam:1}
W.a5.prototype={
gaQ:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.lg("No elements"))
if(r>1)throw H.c(P.lg("More than one element"))
s=s.firstChild
s.toString
return s},
ac:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q).toString}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b]).toString},
gS:function(a){var s=this.a.childNodes
return new W.cM(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.t.prototype={
ii:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a).toString},
im:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.nD(s,b,a)}catch(q){H.aj(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.eu(a):s},
h5:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$it:1}
W.d9.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.ay.prototype={
gl:function(a){return a.length},
$iay:1}
W.f_.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.f5.prototype={
h:function(a,b){return P.bq(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bq(s.value[1]))}},
ga1:function(a){var s=H.b([],t.s)
this.E(a,new W.j8(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iI:1}
W.j8.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.f7.prototype={
gl:function(a){return a.length}}
W.an.prototype={$ian:1}
W.f9.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.aB.prototype={$iaB:1}
W.fa.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.aC.prototype={
gl:function(a){return a.length},
$iaC:1}
W.fe.prototype={
h:function(a,b){return a.getItem(H.ko(b))},
m:function(a,b,c){a.setItem(b,c)},
E:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga1:function(a){var s=H.b([],t.s)
this.E(a,new W.jg(s))
return s},
gl:function(a){var s=a.length
s.toString
return s},
$iI:1}
W.jg.prototype={
$2:function(a,b){return this.a.push(a)},
$S:35}
W.ah.prototype={$iah:1}
W.bk.prototype={$ibk:1}
W.dm.prototype={
ag:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bK(a,b,c,d)
s=W.nX("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new W.a5(r).ac(0,new W.a5(s))
return r}}
W.fi.prototype={
ag:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bK(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a5(C.C.ag(r,b,c,d))
r=new W.a5(r.gaQ(r))
new W.a5(s).ac(0,new W.a5(r.gaQ(r)))
return s}}
W.fj.prototype={
ag:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bK(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a5(C.C.ag(r,b,c,d))
new W.a5(s).ac(0,new W.a5(r.gaQ(r)))
return s}}
W.cc.prototype={$icc:1}
W.ao.prototype={$iao:1}
W.ad.prototype={$iad:1}
W.fl.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.fm.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.jm.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.ap.prototype={$iap:1}
W.bJ.prototype={$ibJ:1}
W.fs.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.jr.prototype={
gl:function(a){return a.length}}
W.b_.prototype={}
W.jC.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.fI.prototype={
gl:function(a){return a.length}}
W.bm.prototype={
ghJ:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.C("deltaY is not supported"))},
ghI:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.C("deltaX is not supported"))},
$ibm:1}
W.cm.prototype={
h6:function(a,b){var s=a.requestAnimationFrame(H.cu(b,1))
s.toString
return s},
eZ:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cn.prototype={$icn:1}
W.fP.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.dE.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.x(r)+", "
s=a.top
s.toString
s=r+H.x(s)+") "
r=a.width
r.toString
r=s+H.x(r)+" x "
s=a.height
s.toString
return r+H.x(s)},
q:function(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=J.aL(b)
if(s===r.gbB(b)){s=a.top
s.toString
if(s===r.gbE(b)){s=a.width
s.toString
if(s===r.gaP(b)){s=a.height
s.toString
r=s===r.gaJ(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gF:function(a){var s,r,q,p=a.left
p.toString
p=C.d.gF(p)
s=a.top
s.toString
s=C.d.gF(s)
r=a.width
r.toString
r=C.d.gF(r)
q=a.height
q.toString
return W.mB(p,s,r,C.d.gF(q))},
gd0:function(a){return a.height},
gaJ:function(a){var s=a.height
s.toString
return s},
gde:function(a){return a.width},
gaP:function(a){var s=a.width
s.toString
return s}}
W.h2.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.dK.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.hm.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.ht.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.fM.prototype={
E:function(a,b){var s,r,q,p,o
for(s=this.ga1(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
b.$2(o,H.ko(q.getAttribute(o)))}},
ga1:function(a){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=H.b([],t.s)
for(r=m.length,q=t.h9,p=0;p<r;++p){if(p>=m.length)return H.d(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
s.push(n)}}return s}}
W.fW.prototype={
h:function(a,b){return this.a.getAttribute(H.ko(b))},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga1(this).length}}
W.l6.prototype={}
W.dF.prototype={
hn:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.nE(s,this.c,r,!1)}}}
W.jY.prototype={
$1:function(a){return this.a.$1(a)},
$S:3}
W.lm.prototype={}
W.co.prototype={
eD:function(a){var s
if($.dG.gby($.dG)){for(s=0;s<262;++s)$.dG.m(0,C.W[s],W.qn())
for(s=0;s<12;++s)$.dG.m(0,C.n[s],W.qo())}},
aZ:function(a){return $.nA().A(0,W.cK(a))},
aw:function(a,b,c){var s=$.dG.h(0,W.cK(a)+"::"+b)
if(s==null)s=$.dG.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iaJ:1}
W.N.prototype={
gS:function(a){return new W.cM(a,this.gl(a))}}
W.da.prototype={
aZ:function(a){return C.b.dj(this.a,new W.iZ(a))},
aw:function(a,b,c){return C.b.dj(this.a,new W.iY(a,b,c))},
$iaJ:1}
W.iZ.prototype={
$1:function(a){return a.aZ(this.a)},
$S:25}
W.iY.prototype={
$1:function(a){return a.aw(this.a,this.b,this.c)},
$S:25}
W.dQ.prototype={
eH:function(a,b,c,d){var s,r,q
this.a.ac(0,c)
s=b.bH(0,new W.k5())
r=b.bH(0,new W.k6())
this.b.ac(0,s)
q=this.c
q.ac(0,C.v)
q.ac(0,r)},
aZ:function(a){return this.a.A(0,W.cK(a))},
aw:function(a,b,c){var s=this,r=W.cK(a),q=s.c
if(q.A(0,r+"::"+b))return s.d.hu(c)
else if(q.A(0,"*::"+b))return s.d.hu(c)
else{q=s.b
if(q.A(0,r+"::"+b))return!0
else if(q.A(0,"*::"+b))return!0
else if(q.A(0,r+"::*"))return!0
else if(q.A(0,"*::*"))return!0}return!1},
$iaJ:1}
W.k5.prototype={
$1:function(a){return!C.b.A(C.n,a)},
$S:26}
W.k6.prototype={
$1:function(a){return C.b.A(C.n,a)},
$S:26}
W.hv.prototype={
aw:function(a,b,c){if(this.ex(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.A(0,b)
return!1}}
W.kb.prototype={
$1:function(a){return"TEMPLATE::"+a},
$S:34}
W.hu.prototype={
aZ:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cK(a)==="foreignObject")return!1
if(s)return!0
return!1},
aw:function(a,b,c){if(b==="is"||C.a.a0(b,"on"))return!1
return this.aZ(a)},
$iaJ:1}
W.cM.prototype={
u:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.lN(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gB:function(a){return H.W(this).c.a(this.d)}}
W.k4.prototype={}
W.hF.prototype={
cJ:function(a){var s,r=new W.kj(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
be:function(a,b){++this.b
if(b==null||b!==a.parentNode)J.lO(a)
else b.removeChild(a).toString},
ha:function(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
try{k=J.nG(a)
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
o=p}l=o}catch(n){H.aj(n)}r="element unprintable"
try{r=J.cy(a)}catch(n){H.aj(n)}try{q=W.cK(a)
this.h9(a,b,l,r,q,k,j)}catch(n){if(H.aj(n) instanceof P.aF)throw n
else{this.be(a,b)
p=window
p.toString
p="Removing corrupted element "+H.x(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(p)}}},
h9:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.be(a,b)
window.toString
s="Removing element due to corrupted attributes on <"+d+">"
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(!m.a.aZ(a)){m.be(a,b)
window.toString
s="Removing disallowed element <"+e+"> from "+H.x(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(g!=null)if(!m.a.aw(a,"is",g)){m.be(a,b)
window.toString
s="Removing disallowed type extension <"+e+' is="'+g+'">'
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}s=f.ga1(f)
q=H.b(s.slice(0),H.km(s))
for(p=f.ga1(f).length-1,s=f.a;p>=0;--p){if(p>=q.length)return H.d(q,p)
o=q[p]
r=m.a
n=J.nK(o)
H.ko(o)
if(!r.aw(a,n,s.getAttribute(o))){window.toString
r="Removing disallowed attribute <"+e+" "+o+'="'+H.x(s.getAttribute(o))+'">'
n=typeof console!="undefined"
n.toString
if(n)window.console.warn(r)
s.removeAttribute(o)}}if(t.aW.b(a)){s=a.content
s.toString
m.cJ(s)}}}
W.kj.prototype={
$2:function(a,b){var s,r,q,p,o=this.a,n=a.nodeType
n.toString
switch(n){case 1:o.ha(a,b)
break
case 8:case 11:case 3:case 4:break
default:o.be(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){n=r.nextSibling
q=s
q=n==null?q!=null:n!==q
n=q}else n=!1
if(n){n=P.lg("Corrupt HTML")
throw H.c(n)}}catch(p){H.aj(p)
n=s;++o.b
q=n.parentNode
if(a!==q){if(q!=null)q.removeChild(n).toString}else a.removeChild(n).toString
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:33}
W.fQ.prototype={}
W.fS.prototype={}
W.fT.prototype={}
W.fU.prototype={}
W.fV.prototype={}
W.h_.prototype={}
W.h0.prototype={}
W.h3.prototype={}
W.h4.prototype={}
W.h7.prototype={}
W.h8.prototype={}
W.h9.prototype={}
W.ha.prototype={}
W.hb.prototype={}
W.hc.prototype={}
W.hf.prototype={}
W.hg.prototype={}
W.hi.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.hk.prototype={}
W.hl.prototype={}
W.hq.prototype={}
W.hw.prototype={}
W.hx.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.hy.prototype={}
W.hz.prototype={}
W.hG.prototype={}
W.hH.prototype={}
W.hI.prototype={}
W.hJ.prototype={}
W.hK.prototype={}
W.hL.prototype={}
W.hM.prototype={}
W.hN.prototype={}
W.hO.prototype={}
W.hP.prototype={}
P.k7.prototype={
cp:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bG:function(a){var s,r,q,p,o,n=this,m={}
if(a==null)return a
if(H.ku(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.Z)return new Date(a.a)
if(t.fJ.b(a))throw H.c(P.jw("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.fK.b(a))return a
if(t.bX.b(a))return a
if(t.x.b(a))return a
if(t.bZ.b(a)||t.dE.b(a)||t.bu.b(a))return a
if(t.f.b(a)){s=n.cp(a)
r=n.b
q=r.length
if(s>=q)return H.d(r,s)
p=m.a=r[s]
if(p!=null)return p
p={}
m.a=p
if(s>=q)return H.d(r,s)
r[s]=p
J.ed(a,new P.k9(m,n))
return m.a}if(t.r.b(a)){s=n.cp(a)
m=n.b
if(s>=m.length)return H.d(m,s)
p=m[s]
if(p!=null)return p
return n.hE(a,s)}if(t.eH.b(a)){s=n.cp(a)
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
n.hU(a,new P.ka(m,n))
return m.b}throw H.c(P.jw("structured clone of other type"))},
hE:function(a,b){var s,r,q=J.bN(a),p=q.gl(a),o=new Array(p)
o.toString
s=this.b
if(b>=s.length)return H.d(s,b)
s[b]=o
for(r=0;r<p;++r){s=this.bG(q.h(a,r))
if(r>=o.length)return H.d(o,r)
o[r]=s}return o}}
P.k9.prototype={
$2:function(a,b){this.a.a[a]=this.b.bG(b)},
$S:10}
P.ka.prototype={
$2:function(a,b){this.a.b[a]=this.b.bG(b)},
$S:31}
P.dY.prototype={$ibD:1,
gdu:function(a){return this.a}}
P.kp.prototype={
$1:function(a){this.a.push(P.mS(a))},
$S:30}
P.kz.prototype={
$2:function(a,b){this.a[a]=P.mS(b)},
$S:10}
P.k8.prototype={
hU:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
b.$2(p,a[p])}}}
P.eu.prototype={
gbb:function(){var s=this.b,r=H.W(s)
return new H.aT(new H.b0(s,new P.io(),r.K("b0<k.E>")),new P.ip(),r.K("aT<k.E,E>"))},
E:function(a,b){C.b.E(P.iC(this.gbb(),!1,t.h),b)},
m:function(a,b,c){var s=this.gbb()
J.nJ(s.b.$1(J.hT(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b).toString},
gl:function(a){return J.aM(this.gbb().a)},
h:function(a,b){var s=this.gbb()
return s.b.$1(J.hT(s.a,b))},
gS:function(a){var s=P.iC(this.gbb(),!1,t.h)
return new J.ak(s,s.length)}}
P.io.prototype={
$1:function(a){return t.h.b(a)},
$S:28}
P.ip.prototype={
$1:function(a){return t.h.a(a)},
$S:59}
P.hh.prototype={
gcF:function(a){return this.$ti.c.a(this.a+this.c)},
gdr:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
q:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.I.b(b)){s=o.a
r=J.aL(b)
if(s===r.gbB(b)){q=o.b
if(q===r.gbE(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gcF(b)&&p.a(q+o.d)===r.gdr(b)}else s=!1}else s=!1}else s=!1
return s},
gF:function(a){var s=this,r=s.a,q=C.c.gF(r),p=s.b,o=C.c.gF(p),n=s.$ti.c
r=C.c.gF(n.a(r+s.c))
p=C.c.gF(n.a(p+s.d))
return H.oy(H.jh(H.jh(H.jh(H.jh(0,q),o),r),p))}}
P.a9.prototype={
gbB:function(a){return this.a},
gbE:function(a){return this.b},
gaP:function(a){return this.c},
gaJ:function(a){return this.d}}
P.aS.prototype={$iaS:1}
P.eF.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$in:1,
$ij:1,
$ip:1}
P.aW.prototype={$iaW:1}
P.eU.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$in:1,
$ij:1,
$ip:1}
P.j1.prototype={
gl:function(a){return a.length}}
P.c9.prototype={$ic9:1}
P.fg.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$in:1,
$ij:1,
$ip:1}
P.o.prototype={
gbu:function(a){return new P.eu(a,new W.a5(a))},
ag:function(a,b,c,d){var s,r,q,p,o=H.b([],t.Q)
o.push(W.mA(null))
o.push(W.mF())
o.push(new W.hu())
c=new W.hF(new W.da(o))
s='<svg version="1.1">'+b+"</svg>"
o=document
r=o.body
r.toString
q=C.p.hF(r,s,c)
o=o.createDocumentFragment()
o.toString
r=new W.a5(q)
p=r.gaQ(r)
for(;r=p.firstChild,r!=null;)o.appendChild(r).toString
return o},
$io:1}
P.aY.prototype={$iaY:1}
P.ft.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$in:1,
$ij:1,
$ip:1}
P.h5.prototype={}
P.h6.prototype={}
P.hd.prototype={}
P.he.prototype={}
P.hr.prototype={}
P.hs.prototype={}
P.hA.prototype={}
P.hB.prototype={}
P.hX.prototype={
gl:function(a){return a.length}}
P.ei.prototype={
h:function(a,b){return P.bq(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bq(s.value[1]))}},
ga1:function(a){var s=H.b([],t.s)
this.E(a,new P.hY(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iI:1}
P.hY.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
P.ej.prototype={
gl:function(a){return a.length}}
P.b5.prototype={}
P.eV.prototype={
gl:function(a){return a.length}}
P.fN.prototype={}
P.c8.prototype={
is:function(a,b,c,d,e,f,g){var s
if(t.x.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.qf(g))
return}if(t.fS.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.bQ("Incorrect number or type of arguments"))},
$ic8:1}
P.fb.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=P.bq(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$in:1,
$ij:1,
$ip:1}
P.hn.prototype={}
P.ho.prototype={}
K.aN.prototype={
aK:function(a,b){return!0},
i:function(a){return"all"},
$iaU:1}
K.cO.prototype={
aK:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)if(s[q].aK(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q},
$iaU:1}
K.ac.prototype={
aK:function(a,b){return!this.es(0,b)},
i:function(a){return"!["+this.bL(0)+"]"}}
K.f2.prototype={
aK:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var s=H.az(this.a),r=H.az(this.b)
return s+".."+r},
$iaU:1}
K.u.prototype={
p:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.f("May not create a Set with zero characters."))
s=new H.Y(t.fX)
for(r=new H.bd(a,a.gl(a)),q=H.W(r).c;r.u();)s.m(0,q.a(r.d),!0)
p=P.iC(s.ga1(s),!0,t.S)
C.b.er(p)
this.a=p},
aK:function(a,b){return C.b.A(this.a,b)},
i:function(a){return P.fh(this.a,0,null)},
$iaU:1}
L.fc.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.dq(this.a.k(0,b),H.b([],t.z))
s.push(p)
return p},
hP:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.aK(0,a))return p}return null},
i:function(a){return this.b},
da:function(){var s,r,q,p,o,n,m=this,l=""+("("+m.b+")"),k=m.d
if(k!=null){l+=" => ["+k.b+"]"
k=m.a.c
s=m.d
if(k.A(0,s==null?null:s.b))l+=" (consume)"
s=m.d
if(s==null)s=null
else{s=s.c
s=s.ga1(s)}s=J.aE(s==null?H.b([],t.s):s)
for(;s.u();){r=s.gB(s)
l+="\n"
q=m.d
p=q==null?null:q.c.h(0,r)
if(p==null)p=""
l+="  -- "+r+" => ["+p+"]"
if(k.A(0,p))l+=" (consume)"}}for(k=m.c,s=k.length,o=0;o<k.length;k.length===s||(0,H.q)(k),++o){n=k[o]
l+="\n"
l+="  -- "+(n.b.b+": "+n.bL(0))}return l.charCodeAt(0)==0?l:l}}
L.fq.prototype={
i:function(a){var s=H.lJ(this.b,"\n","\\n"),r=H.lJ(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fr.prototype={
aM:function(a,b,c){var s,r,q
for(s=c.length,r=this.c,q=0;q<c.length;c.length===s||(0,H.q)(c),++q)r.m(0,c[q],b)},
i:function(a){return this.b}}
L.jo.prototype={
k:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.fc(this,b,H.b([],t.ab))
s.m(0,b,r)}return r},
R:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.fr(a,P.T(s,s))
r.m(0,a,q)}return q},
cH:function(a){return this.ix(a)},
ix:function(a){var s=this
return P.pE(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2
return function $async$cH(a3,a4){if(a3===1){o=a4
q=p}while(true)switch(q){case 0:c=s.d
b=t.t
a0=H.b([],b)
a1=H.b([],b)
a2=H.b([],b)
n=H.W(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a2.length!==0)h=C.b.cC(a2,0)
else{if(!r.u()){q=3
break}h=n.a(r.d)}a1.push(h);++k
g=c==null
f=g?null:c.hP(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.fh(a1,0,null)
throw H.c(P.f("Untokenizable string [state: "+H.x(g?null:c.b)+", index "+k+']: "'+e+'"'))}if(!!a1.fixed$length)H.h(P.C("removeRange"))
P.bi(0,i,a1.length)
a1.splice(0,i-0)
C.b.ac(a2,a1)
a1=H.b([],b)
a0=H.b([],b)
c=s.d
q=!m.A(0,l.a)?7:8
break
case 7:q=9
return l
case 9:case 8:k=j
l=null
i=0
q=5
break
case 6:if(!f.c)a0.push(h)
c=f.b
g=c.d
if(g!=null){e=P.fh(a0,0,null)
g=c.d
if(g==null)l=null
else{d=g.c.h(0,e)
g=new L.fq(d==null?g.b:d,e,k)
l=g}i=a1.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.A(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.oN()
case 1:return P.oO(o)}}},t.bJ)},
i:function(a){var s,r=new P.a_(""),q=this.d
if(q!=null)r.a=""+(q.da()+"\n")
for(q=this.a,q=q.giz(q),q=q.gS(q);q.u();){s=q.gB(q)
if(s!=this.d)r.a+=H.x(s==null?null:s.da())+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.dq.prototype={
i:function(a){return this.b.b+": "+this.bL(0)}}
O.al.prototype={
cK:function(a,b,c){this.b=b
this.c=a},
bp:function(a,b){return this.cK(a,null,b)},
fQ:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
eC:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gl:function(a){return this.a.length},
gS:function(a){var s=this.a
return new J.ak(s,s.length)},
I:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.W(q).K("w<al.T>")
if(q.fQ(H.b([b],p))){s=q.a
r=s.length
s.push(b)
q.eC(r,H.b([b],p))}},
$ij:1}
O.d5.prototype={
gl:function(a){return this.a.length},
gv:function(){var s=this.b
return s==null?this.b=D.R():s},
aT:function(){var s=this.b
return s==null?null:s.J(null)},
ga2:function(a){var s=this.a
if(s.length>0)return C.b.gaz(s)
else return V.bf()},
ea:function(a){this.a.push(a)
this.aT()},
cz:function(){var s=this.a
if(s.length>0){s.pop()
this.aT()}}}
E.i0.prototype={}
E.bB.prototype={
san:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().O(0,s.ge4())
if(b!=null)b.gv().n(0,s.ge4())
s.aL(new D.G("shape",r,b))}},
sai:function(a){var s,r,q=this
if(!J.K(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gv().O(0,q.ge2())
if(a!=null)a.gv().n(0,q.ge2())
r=q.r
q.aL(new D.G("mover",s,r))}},
aO:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.aA(0,b,q)
if(!J.K(o,q.x)){s=q.x
q.x=o
q.aL(new D.G("matrix",s,o))}for(p=q.y.a,p=new J.ak(p,p.length),r=H.W(p).c;p.u();)r.a(p.d).aO(0,b)},
b3:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.ga2(q))
else o.push(p.N(0,q.ga2(q)))
q.aT()
a.eb(r.f)
s=C.b.gaz(a.dy)
if(r.d!=null)if(s!=null)s.il(a,r)
for(p=r.y.a,p=new J.ak(p,p.length),o=H.W(p).c;p.u();)o.a(p.d).b3(a)
a.e9()
q.cz()},
aL:function(a){var s=this.z
return s==null?null:s.J(a)},
a_:function(){return this.aL(null)},
e5:function(a){this.e=null
this.aL(a)},
i8:function(){return this.e5(null)},
e3:function(a){return this.aL(a)},
i7:function(){return this.e3(null)},
e1:function(a){return this.aL(a)},
i4:function(){return this.e1(null)},
i3:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.ge0(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bW()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.a_()},
i6:function(a,b){var s,r
for(s=b.gS(b),r=this.ge0();s.u();)s.gB(s).gv().O(0,r)
this.a_()},
i:function(a){return"Unnamed entity"}}
E.bT.prototype={
i:function(a){return this.b}}
E.c6.prototype={
i:function(a){return this.b}}
E.fX.prototype={}
E.j4.prototype={
eB:function(a,b){var s=this
s.cy.gv().n(0,new E.j5(s))
s.db.gv().n(0,new E.j6(s))
s.dx.gv().n(0,new E.j7(s))},
gih:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.ga2(q).N(0,s.ga2(s))
q=s}return q},
eb:function(a){var s=this.dy
return s.push(a==null?C.b.gaz(s):a)},
e9:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.j5.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:0}
E.j6.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:0}
E.j7.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:0}
E.dl.prototype={}
E.fp.prototype={
cQ:function(a){this.ed()},
cP:function(){return this.cQ(null)},
ghV:function(){var s,r=this,q=Date.now(),p=C.c.a3(P.lW(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.Z(q,!1)
return s/p},
d5:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.cr(r*o)
r=s.clientHeight
r.toString
p=C.d.cr(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.ml(C.m,this.gio())}},
ed:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.E.eZ(s)
r=W.mY(new E.jl(this),t.H)
r.toString
C.E.h6(s,r)}},
ik:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.d5()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.Z(p,!1)
q.y=P.lW(p-q.r.a).a*0.000001
p=q.cy
C.b.sl(p.a,0)
p.aT()
p=q.db
C.b.sl(p.a,0)
p.aT()
p=q.dx
C.b.sl(p.a,0)
p.aT()
p=q.dy
C.b.sl(p,0)
p.push(null)
m.b3(q)}q=n.Q
if(q!=null)q.J(null)}catch(o){s=H.aj(o)
r=H.lE(o)
P.lI("Error: "+H.x(s))
P.lI("Stack: "+H.x(r))
throw H.c(s)}}}
E.jl.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.ik()}},
$S:32}
Z.fJ.prototype={}
Z.bU.prototype={
c8:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.aj(q)
r=P.f('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.x(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.jT.prototype={}
Z.cA.prototype={
b1:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
c8:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].c8(a)}},
iy:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
b3:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=t.s,l=H.b([],m)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
l.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.dd(p.c)+"'")+"]")}o=H.b([],m)
for(m=this.c,s=m.length,q=0;q<m.length;m.length===s||(0,H.q)(m),++q){n=m[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(l,", ")+"\nAttrs:   "+C.b.j(o,", ")}}
Z.c_.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.dd(this.c)+"'")+"]"}}
Z.bl.prototype={
gcL:function(a){var s=this.a,r=(s&$.bu().a)!==0?3:0
if((s&$.bt().a)!==0)r+=3
if((s&$.bs().a)!==0)r+=3
if((s&$.bv().a)!==0)r+=2
if((s&$.bP().a)!==0)r+=3
if((s&$.eb().a)!==0)r+=3
if((s&$.ec().a)!==0)r+=4
if((s&$.cx().a)!==0)++r
return(s&$.br().a)!==0?r+4:r},
hv:function(a){var s,r=$.bu(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bt()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bs()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bv()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bP()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.eb()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ec()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cx()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.br()
if((q&r.a)!==0)if(s===a)return r
return $.ny()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bl))return!1
return this.a===b.a},
i:function(a){var s=H.b([],t.s),r=this.a
if((r&$.bu().a)!==0)s.push("Pos")
if((r&$.bt().a)!==0)s.push("Norm")
if((r&$.bs().a)!==0)s.push("Binm")
if((r&$.bv().a)!==0)s.push("Txt2D")
if((r&$.bP().a)!==0)s.push("TxtCube")
if((r&$.eb().a)!==0)s.push("Clr3")
if((r&$.ec().a)!==0)s.push("Clr4")
if((r&$.cx().a)!==0)s.push("Weight")
if((r&$.br().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.i2.prototype={}
D.bW.prototype={
n:function(a,b){var s=this.a
return(s==null?this.a=H.b([],t.a):s).push(b)},
O:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.b.A(p,b)
if(p===!0){p=r.a
p=p==null?q:C.b.O(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.b.A(p,b)
if(p===!0){p=r.b
p=p==null?q:C.b.O(p,b)
s=p===!0||s}return s},
J:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.X():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.b.E(P.iC(p,!0,t.h2),new D.ik(s))
r=q.b
if(r!=null){q.b=H.b([],t.a)
C.b.E(r,new D.il(s))}return!0},
hL:function(){return this.J(null)},
ak:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.J(s)}}}}
D.ik.prototype={
$1:function(a){a.$1(this.a)},
$S:27}
D.il.prototype={
$1:function(a){a.$1(this.a)},
$S:27}
D.X.prototype={}
D.b9.prototype={}
D.ba.prototype={}
D.G.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.x(this.d)+" => "+H.x(this.e)}}
X.cB.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cB))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.eE.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eE))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.iy.prototype={}
X.cZ.prototype={}
X.iE.prototype={
ba:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.a1(o.a+b.a,o.b+b.b)
o=q.a.gbv()
s=$.ag
if(s==null)s=$.ag=new V.a1(0,0)
r=q.x
q.z=new P.Z(p,!1)
q.x=n
return new X.c4(a,s,r,o,n)},
cw:function(a,b){this.r=a.a
return!1},
bl:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bk:function(a,b){var s=this.d
if(s==null)return!1
s.J(this.ba(a,b))
return!0},
ic:function(a){return!1},
fF:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.J(new X.cZ(c,q.a.gbv(),b))
q.y=new P.Z(s,!1)
s=$.ag
q.x=s==null?$.ag=new V.a1(0,0):s}}
X.bg.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.bg))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
i:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.b.j(s,"+")}}
X.c4.prototype={}
X.iX.prototype={
bT:function(a,b,c){var s=this,r=new P.Z(Date.now(),!1),q=s.a.gbv(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.c4(a,p,o,q,b)},
cw:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.J(this.bT(a,b,!0))
return!0},
bl:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.J(r.bT(a,b,!0))
return!0},
bk:function(a,b){var s=this.d
if(s==null)return!1
s.J(this.bT(a,b,!1))
return!0},
ie:function(a,b){return!1}}
X.f1.prototype={}
X.dp.prototype={}
X.jq.prototype={
ba:function(a,b){var s,r,q,p,o=this,n=new P.Z(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.ag
if(r==null){r=new V.a1(0,0)
$.ag=r
s=r}else s=r}r=o.a.gbv()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.dp(q,p,r,s)},
ib:function(a){var s=this.b
if(s==null)return!1
s.J(this.ba(a,!0))
return!0},
i9:function(a){var s=this.c
if(s==null)return!1
s.J(this.ba(a,!0))
return!0},
ia:function(a){var s=this.d
if(s==null)return!1
s.J(this.ba(a,!1))
return!0}}
X.fG.prototype={
gbA:function(a){var s=this.b
return s==null?this.b=new X.iy(P.cV(t.S)):s},
gaq:function(){var s,r=this.c
if(r==null){r=$.ag
if(r==null){r=$.ag=new V.a1(0,0)
s=r}else s=r
r=this.c=new X.iX(this,r,s,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1))}return r},
gap:function(){var s=this.d
if(s==null){s=$.ag
if(s==null)s=$.ag=new V.a1(0,0)
s=this.d=new X.iE(this,s,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1))}return s},
gb5:function(){var s,r=this.e
if(r==null){r=$.ag
if(r==null){r=$.ag=new V.a1(0,0)
s=r}else s=r
r=this.e=new X.jq(this,r,s,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1))}return r},
gbv:function(){var s=this.a
return V.md(0,0,C.i.gds(s).c,C.i.gds(s).d)},
cX:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.eE(p,new X.bg(s,r,q))},
aX:function(a){var s
this.gbA(this)
s=a.ctrlKey
s.toString
if(!s)a.metaKey.toString
a.altKey.toString
a.shiftKey.toString},
c2:function(a){var s=a.ctrlKey
if(s!==!0)a.metaKey
this.gbA(this)
a.altKey
a.shiftKey},
aH:function(a){var s,r,q,p
if(a==null){s=$.ag
return s==null?$.ag=new V.a1(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.a1(r-p,q-s)},
bd:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.aq(r,s)},
bY:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=H.b([],t.cG)
r=a.touches
if(r==null)r=H.b([],t.gT)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.ar(n)
m=o.pageY
m.toString
C.d.ar(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.ar(l)
l=o.pageY
l.toString
l=C.d.ar(l)
k=j.top
k.toString
s.push(new V.a1(n-m,l-k))}return s},
aE:function(a){var s,r,q,p
if(a==null)return new X.cB(0,new X.bg(!1,!1,!1))
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
return new X.cB(s,new X.bg(r,q,p))},
bU:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
fz:function(a){return this.f=!0},
fk:function(a){return this.f=!1},
fq:function(a){if(this.f&&this.bU(a))a.preventDefault()},
fD:function(a){var s,r=this
if(!r.f)return
s=r.cX(a)
r.gbA(r).d.n(0,s.a)},
fB:function(a){var s,r=this
if(!r.f)return
s=r.cX(a)
r.gbA(r).d.O(0,s.a)},
fH:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aX(a)
if(p.x){s=p.aE(a)
r=p.bd(a)
if(p.gap().cw(s,r))a.preventDefault()
return}s=p.aE(a)
q=p.aH(a)
if(p.gaq().cw(s,q))a.preventDefault()},
fL:function(a){var s,r,q,p=this
p.aX(a)
s=p.aE(a)
if(p.x){r=p.bd(a)
if(p.gap().bl(s,r))a.preventDefault()
return}q=p.aH(a)
if(p.gaq().bl(s,q))a.preventDefault()},
fv:function(a){var s,r,q,p=this
if(!p.bU(a)){p.aX(a)
s=p.aE(a)
if(p.x){r=p.bd(a)
if(p.gap().bl(s,r))a.preventDefault()
return}q=p.aH(a)
if(p.gaq().bl(s,q))a.preventDefault()}},
fJ:function(a){var s,r,q,p=this
p.aX(a)
s=p.aE(a)
if(p.x){r=p.bd(a)
if(p.gap().bk(s,r))a.preventDefault()
return}q=p.aH(a)
if(p.gaq().bk(s,q))a.preventDefault()},
ft:function(a){var s,r,q,p=this
if(!p.bU(a)){p.aX(a)
s=p.aE(a)
if(p.x){r=p.bd(a)
if(p.gap().bk(s,r))a.preventDefault()
return}q=p.aH(a)
if(p.gaq().bk(s,q))a.preventDefault()}},
fN:function(a){var s,r,q=this
q.aX(a)
s=new V.aq(C.D.ghI(a),C.D.ghJ(a)).N(0,q.Q)
if(q.x){if(q.gap().ic(s))a.preventDefault()
return}r=q.aH(a)
if(q.gaq().ie(s,r))a.preventDefault()},
fP:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aE(q.y)
r=q.aH(q.y)
q.gap().fF(s,r,p)}},
h1:function(a){var s,r=this
r.a.focus()
r.f=!0
r.c2(a)
s=r.bY(a)
if(r.gb5().ib(s))a.preventDefault()},
fY:function(a){var s
this.c2(a)
s=this.bY(a)
if(this.gb5().i9(s))a.preventDefault()},
h_:function(a){var s
this.c2(a)
s=this.bY(a)
if(this.gb5().ia(s))a.preventDefault()}}
D.bV.prototype={
aC:function(a){var s=this.r
return s==null?null:s.J(a)},
eF:function(){return this.aC(null)},
sai:function(a){var s,r,q=this
if(!J.K(q.a,a)){s=q.a
if(s!=null)s.gv().O(0,q.gcR())
r=q.a
q.a=a
if(a!=null)a.gv().n(0,q.gcR())
q.aC(new D.G("mover",r,q.a))}},
sae:function(a,b){var s,r=this
if(!r.b.q(0,b)){s=r.b
r.b=b
r.aC(new D.G("color",s,b))}},
$iaw:1}
D.cT.prototype={
gv:function(){var s=this.y
return s==null?this.y=D.R():s},
gdW:function(){var s=this.z
return s==null?this.z=D.R():s},
aC:function(a){var s=this.y
return s==null?null:s.J(a)},
d2:function(a){var s=this.z
return s==null?null:s.J(a)},
fE:function(){return this.d2(null)},
fS:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)if(this.eE(a[r]))return!1
return!0},
fe:function(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=this.gd1(),q=this.f,p=t.a,o=0;o<b.length;b.length===s||(0,H.q)(b),++o){n=b[o]
q.push(n)
m=n.r
if(m==null)m=n.r=new D.bW()
l=m.a;(l==null?m.a=H.b([],p):l).push(r)}this.aC(new D.b9())},
fW:function(a,b){var s,r,q,p
for(s=b.gS(b),r=this.gd1(),q=this.e;s.u();){p=s.gB(s)
C.b.O(q,p)
p.gv().O(0,r)}this.aC(new D.ba())},
eE:function(a){var s=C.b.A(this.f,a)
return s}}
V.V.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.V))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.aP.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aP))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"},
w:function(){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"}}
V.ii.prototype={}
V.c2.prototype={
aa:function(a,b){var s=this,r=H.b([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.n)
return r},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.c2))return!1
s=b.a
$.F().toString
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
i:function(a){var s,r,q,p,o=this,n=t.n,m=V.cw(H.b([o.a,o.d,o.r],n),3,0),l=V.cw(H.b([o.b,o.e,o.x],n),3,0),k=V.cw(H.b([o.c,o.f,o.y],n),3,0)
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
V.be.prototype={
aa:function(a,b){var s=this,r=H.b([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.n)
return r},
dU:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.F().toString
if(Math.abs(b3-0)<1e-9)return V.bf()
s=1/b3
r=-l
q=-a2
return V.aV((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
N:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aV(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bF:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.D(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bn:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.U(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.be))return!1
s=b.a
$.F().toString
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
G:function(a){var s,r,q,p,o,n=this,m=t.n,l=V.cw(H.b([n.a,n.e,n.y,n.cx],m),3,0),k=V.cw(H.b([n.b,n.f,n.z,n.cy],m),3,0),j=V.cw(H.b([n.c,n.r,n.Q,n.db],m),3,0),i=V.cw(H.b([n.d,n.x,n.ch,n.dx],m),3,0)
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
w:function(){return this.G("")}}
V.a1.prototype={
aB:function(a){return new V.aq(a.a-this.a,a.b-this.b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"},
w:function(){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.U.prototype={
W:function(a,b){return new V.U(this.a+b.a,this.b+b.b,this.c+b.c)},
aR:function(a,b){return new V.U(this.a-b.a,this.b-b.b,this.c-b.c)},
N:function(a,b){return new V.U(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.U))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"},
w:function(){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.bH.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bH))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"},
w:function(){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"}}
V.f4.prototype={
gb2:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.f4))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"}}
V.aq.prototype={
ct:function(a){return Math.sqrt(this.a9(this))},
a9:function(a){return this.a*a.a+this.b*a.b},
N:function(a,b){return new V.aq(this.a*b,this.b*b)},
at:function(a,b){var s
$.F().toString
if(Math.abs(b-0)<1e-9){s=$.jI
return s==null?$.jI=new V.aq(0,0):s}return new V.aq(this.a/b,this.b/b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aq))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.D.prototype={
ct:function(a){return Math.sqrt(this.a9(this))},
a9:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cu:function(a,b){return new V.D(V.hR(this.a,a.a,b),V.hR(this.b,a.b,b),V.hR(this.c,a.c,b))},
H:function(){var s=this,r=Math.sqrt(s.a9(s))
if(r===1)return s
return s.at(0,r)},
aI:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.D(s*r-q*p,q*o-n*r,n*p-s*o)},
W:function(a,b){return new V.D(this.a+b.a,this.b+b.b,this.c+b.c)},
b6:function(a){return new V.D(-this.a,-this.b,-this.c)},
N:function(a,b){return new V.D(this.a*b,this.b*b,this.c*b)},
at:function(a,b){$.F().toString
if(Math.abs(b-0)<1e-9)return V.dC()
return new V.D(this.a/b,this.b/b,this.c/b)},
dV:function(){$.F().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.D))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"},
w:function(){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
U.i3.prototype={
bM:function(a){var s=V.l0(a,this.c,this.b)
return s},
gv:function(){var s=this.y
return s==null?this.y=D.R():s},
T:function(a){var s=this.y
return s==null?null:s.J(a)},
sek:function(a,b){},
sdX:function(a){var s,r=this,q=r.b
$.F().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bM(s)}r.T(new D.G("maximumLocation",q,r.b))}},
sdZ:function(a){var s,r=this,q=r.c
$.F().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bM(s)}r.T(new D.G("minimumLocation",q,r.c))}},
sa4:function(a,b){var s,r=this
b=r.bM(b)
s=r.d
$.F().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.T(new D.G("location",s,b))}},
sdY:function(a){var s,r,q=this,p=q.e
$.F().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.T(new D.G("maximumVelocity",p,a))}},
sa6:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.F().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.T(new D.G("velocity",r,a))}},
sdt:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.F().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.T(new D.G("dampening",s,a))}},
aO:function(a,b){var s,r,q,p=this,o=p.f
$.F().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa4(0,p.d+s*b)
o=p.x
$.F().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sa6(s)}}}
U.cD.prototype={
gv:function(){var s=this.b
return s==null?this.b=D.R():s},
aA:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cD))return!1
return this.a.q(0,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.bY.prototype={
gv:function(){var s=this.e
return s==null?this.e=D.R():s},
T:function(a){var s=this.e
return s==null?null:s.J(a)},
au:function(){return this.T(null)},
fc:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gbr(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.gv()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}this.T(new D.b9())},
fU:function(a,b){var s,r
for(s=b.gS(b),r=this.gbr();s.u();)s.gB(s).gv().O(0,r)
this.T(new D.ba())},
aA:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.ak(o,o.length),n=H.W(o).c,s=null;o.u();){r=n.a(o.d)
if(r!=null){q=r.aA(0,b,c)
s=s==null?q:q.N(0,s)}}p.f=s==null?V.bf():s
o=p.e
if(o!=null)o.ak(0)}return p.f},
q:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bY))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(p>=q.length)return H.d(q,p)
if(!J.K(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$ia7:1}
U.a7.prototype={}
U.df.prototype={
gv:function(){var s=this.y
return s==null?this.y=D.R():s},
T:function(a){var s=this.y
return s==null?null:s.J(a)},
sel:function(a){var s
a=V.l0(a,0,6.283185307179586)
s=this.a
$.F().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
this.T(new D.G("yaw",s,a))}},
se8:function(a,b){var s
b=V.l0(b,0,6.283185307179586)
s=this.b
$.F().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
this.T(new D.G("pitch",s,b))}},
see:function(a){var s
a=V.l0(a,0,6.283185307179586)
s=this.c
$.F().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
this.T(new D.G("roll",s,a))}},
aA:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(p<o){q.r=o
p=q.y
if(p!=null)++p.d
q.sel(q.a+q.d*b.y)
q.se8(0,q.b+q.e*b.y)
q.see(q.c+q.f*b.y)
p=q.c
s=Math.cos(p)
r=Math.sin(p)
q.x=V.aV(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1).N(0,V.m4(q.b)).N(0,V.le(q.a))
p=q.y
if(p!=null)p.ak(0)}return q.x},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.df))return!1
s=q.a
r=b.a
$.F().toString
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(q.b-b.b)<1e-9))return!1
if(!(Math.abs(q.c-b.c)<1e-9))return!1
if(!(Math.abs(q.d-b.d)<1e-9))return!1
if(!(Math.abs(q.e-b.e)<1e-9))return!1
if(!(Math.abs(q.f-b.f)<1e-9))return!1
return!0},
i:function(a){var s=this
return"Rotator: ["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+"], ["+V.A(s.d,3,0)+", "+V.A(s.e,3,0)+", "+V.A(s.f,3,0)+"]"}}
U.dB.prototype={
gv:function(){var s=this.fx
return s==null?this.fx=D.R():s},
T:function(a){var s=this.fx
return s==null?null:s.J(a)},
au:function(){return this.T(null)},
hw:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
s=a.gaq()
r=s.b
s=r==null?s.b=D.R():r
s.n(0,q.gf5())
s=a.gaq()
r=s.d
s=r==null?s.d=D.R():r
s.n(0,q.gf7())
s=a.gaq()
r=s.c
s=r==null?s.c=D.R():r
s.n(0,q.gf9())
s=a.gap()
r=s.f
s=r==null?s.f=D.R():r
s.n(0,q.gf0())
s=a.gap()
r=s.d
s=r==null?s.d=D.R():r
s.n(0,q.gf2())
s=a.gb5()
r=s.b
s=r==null?s.b=D.R():r
s.n(0,q.ghl())
s=a.gb5()
r=s.d
s=r==null?s.d=D.R():r
s.n(0,q.ghj())
s=a.gb5()
r=s.c
s=r==null?s.c=D.R():r
s.n(0,q.ghh())
return!0},
aW:function(a){return new V.aq(a.a,a.b)},
f6:function(a){var s=this
t.Z.a(a)
if(!s.d.q(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
f8:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.aB(a.d)
if(s.a9(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aW(a.y.aB(r).N(0,2).at(0,s.gb2()))
p=n.c
p.sa4(0,-q.a*2.5+n.cy)
o=n.b
o.sa4(0,-q.b*2.5+n.db)
o.sa6(0)
p.sa6(0)
n.dx=n.aW(a.z.aB(r).N(0,2).at(0,s.gb2()))
n.au()},
fa:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a9(s)>0.0001){r.c.sa6(-r.dx.a*10*2.5)
r.b.sa6(-r.dx.b*10*2.5)
r.au()}},
f1:function(a){var s=this
if(t.bv.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
f3:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.q(0,a.x.b))return
s=a.c
r=a.d
q=n.aW(a.y.aB(r).N(0,2).at(0,s.gb2()))
p=n.c
p.sa4(0,-q.a*2.5+n.cy)
o=n.b
o.sa4(0,-q.b*2.5+n.db)
o.sa6(0)
p.sa6(0)
n.dx=n.aW(a.z.aB(r).N(0,2).at(0,s.gb2()))
n.au()},
hm:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
hk:function(a){var s,r,q,p,o,n=this
t.dr.a(a)
if(!n.cx)return
if(n.ch){s=a.y.aB(a.d)
if(s.a9(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aW(a.y.aB(r).N(0,2).at(0,s.gb2()))
p=n.c
p.sa4(0,-q.a*2.5+n.cy)
o=n.b
o.sa4(0,-q.b*2.5+n.db)
o.sa6(0)
p.sa6(0)
n.dx=n.aW(a.z.aB(r).N(0,2).at(0,s.gb2()))
n.au()},
hi:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a9(s)>0.0001){r.c.sa6(-r.dx.a*10*2.5)
r.b.sa6(-r.dx.b*10*2.5)
r.au()}},
aA:function(a,b,c){var s,r=this,q=r.dy,p=b.e
if(q<p){r.dy=p
s=b.y
q=r.c
q.aO(0,s)
p=r.b
p.aO(0,s)
r.fr=V.le(p.d).N(0,V.m4(q.d))}return r.fr},
$ia7:1}
M.es.prototype={
aD:function(a){var s=this.y
return s==null?null:s.J(a)},
eG:function(){return this.aD(null)},
fm:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gav(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bW()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.aD(new D.b9())},
fo:function(a,b){var s,r
for(s=b.gS(b),r=this.gav();s.u();)s.gB(s).gv().O(0,r)
this.aD(new D.ba())},
seg:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gv().O(0,r.gav())
s=r.d
r.d=a
if(a!=null)a.gv().n(0,r.gav())
r.aD(new D.G("technique",s,r.d))}},
gv:function(){var s=this.y
return s==null?this.y=D.R():s},
b3:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.f
if(d!=null)d.J(new E.dl(a))
a.eb(e.d)
d=e.c
if(d!=null){s=a.a
s.bindFramebuffer(36160,null)
s.enable(2884)
s.enable(2929)
s.depthFunc(513)
r=s.drawingBufferWidth
if(r==null)r=512
q=s.drawingBufferHeight
if(q==null)q=512
p=d.r
o=C.d.ar(p.a*r)
n=C.d.ar(p.b*q)
m=C.d.ar(p.c*r)
a.c=m
p=C.d.ar(p.d*q)
a.d=p
s.viewport(o,n,m,p)
s.clearDepth(2000)
d=d.a
s.clearColor(d.a,d.b,d.c,d.d)
s.clear(16640)}d=e.b
if(d!=null){s=a.c
p=a.d
m=d.c
l=d.d
k=d.e
j=k-l
i=1/Math.tan(m*0.5)
h=V.aV(-i/(s/p),0,0,0,0,i,0,0,0,0,k/j,-k*l/j,0,0,1,0)
a.cy.ea(h)
g=$.nj()
f=d.b
if(f!=null)g=f.aA(0,a,d).N(0,g)
a.db.ea(g)}d=e.d
if(d!=null)d.aO(0,a)
for(d=e.e.a,s=new J.ak(d,d.length),p=H.W(s).c;s.u();)p.a(s.d).aO(0,a)
for(d=new J.ak(d,d.length),s=H.W(d).c;d.u();)s.a(d.d).b3(a)
if(e.b!=null){a.cy.cz()
a.db.cz()}a.e9()}}
A.eh.prototype={}
A.hW.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hM:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
hK:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.as.prototype={
gas:function(a){var s=this.a?1:0,r=this.b?2:0
return s|r|0},
i:function(a){var s=this.a?1:0,r=this.b?2:0
return""+(s|r|0)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof A.as))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.eJ.prototype={
eA:function(d7,d8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=null,d1=u.C,d2="Required uniform value, ",d3=", was not defined or used in shader.",d4=c9.x,d5=new P.a_(""),d6=d4.fr
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
A.pT(d4,d5)
A.pV(d4,d5)
A.pU(d4,d5)
A.pX(d4,d5)
A.pY(d4,d5)
A.pW(d4,d5)
A.pZ(d4,d5)
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
m=A.pS(d4)
c9.c=n
c9.d=m
l=c9.cY(n,35633)
k=c9.cY(c9.d,35632)
s=c9.a
q=s.createProgram()
q.toString
c9.e=q
s.attachShader(c9.gaF(),l)
s.attachShader(c9.gaF(),k)
s.linkProgram(c9.gaF())
if(!H.mR(s.getProgramParameter(c9.gaF(),35714))){j=s.getProgramInfoLog(c9.gaF())
if(j==null)j="undefined log error"
s.deleteProgram(c9.e)
H.h(P.f("Failed to link shader: "+j))}c9.hd()
c9.hf()
c9.y=c9.gad(c9).h(0,"posAttr")
c9.Q=c9.gad(c9).h(0,"normAttr")
c9.z=c9.gad(c9).h(0,"binmAttr")
c9.ch=c9.gad(c9).h(0,"txt2DAttr")
c9.cx=c9.gad(c9).h(0,"txtCubeAttr")
c9.cy=c9.gad(c9).h(0,"bendAttr")
if(d4.dy)c9.fy=t.j.a(c9.gM().L(0,"invViewMat"))
if(d6)c9.db=t.j.a(c9.gM().L(0,"objMat"))
if(r)c9.dx=t.j.a(c9.gM().L(0,"viewObjMat"))
d6=t.j
c9.fr=d6.a(c9.gM().L(0,"projViewObjMat"))
if(d4.go)c9.dy=d6.a(c9.gM().L(0,"viewMat"))
if(d4.x1)c9.go=t.bK.a(c9.gM().L(0,"txt2DMat"))
if(d4.x2)c9.id=d6.a(c9.gM().L(0,"txtCubeMat"))
if(d4.y1)c9.k1=d6.a(c9.gM().L(0,"colorMat"))
c9.k3=H.b([],t.p)
s=d4.b_
if(s>0){c9.k2=t.w.a(c9.gM().L(0,"bendMatCount"))
for(i=0;i<s;++i){r=c9.k3
h=c9.r
if(h==null)H.h(P.f(d1))
q="bendValues["+i+"].mat"
g=h.h(0,q)
if(g==null)H.h(P.f(d2+q+d3))
r.push(d6.a(g))}}d6=d4.a
if(d6.a)c9.k4=t.g.a(c9.gM().L(0,"emissionClr"))
if(d6.b)c9.r1=t.G.a(c9.gM().L(0,"emissionTxt"))
d6=d4.b
if(d6.a)c9.rx=t.g.a(c9.gM().L(0,"ambientClr"))
if(d6.b)c9.ry=t.G.a(c9.gM().L(0,"ambientTxt"))
d6=d4.c
if(d6.a)c9.x2=t.g.a(c9.gM().L(0,"diffuseClr"))
if(d6.b)c9.y1=t.G.a(c9.gM().L(0,"diffuseTxt"))
d6=d4.d
if(d6.a)c9.b_=t.g.a(c9.gM().L(0,"invDiffuseClr"))
if(d6.b)c9.b0=t.G.a(c9.gM().L(0,"invDiffuseTxt"))
d6=d4.e
s=d6.a
if(s||d6.b||!1){c9.dC=t.v.a(c9.gM().L(0,"shininess"))
if(s)c9.dA=t.g.a(c9.gM().L(0,"specularClr"))
if(d6.b)c9.dB=t.G.a(c9.gM().L(0,"specularTxt"))}if(d4.f.b)c9.dD=t.G.a(c9.gM().L(0,"bumpTxt"))
if(d4.db){c9.dE=t.bz.a(c9.gM().L(0,"envSampler"))
d6=d4.r
if(d6.a)c9.dF=t.g.a(c9.gM().L(0,"reflectClr"))
if(d6.b)c9.dG=t.G.a(c9.gM().L(0,"reflectTxt"))
d6=d4.x
s=d6.a
if(s||d6.b||!1){c9.dH=t.v.a(c9.gM().L(0,"refraction"))
if(s)c9.dI=t.g.a(c9.gM().L(0,"refractClr"))
if(d6.b)c9.dJ=t.G.a(c9.gM().L(0,"refractTxt"))}}d6=d4.y
if(d6.a)c9.dK=t.v.a(c9.gM().L(0,"alpha"))
if(d6.b)c9.dL=t.G.a(c9.gM().L(0,"alphaTxt"))
if(d4.k1){d6=d4.z
s=d6.length
if(s!==0){r=t.S
c9.cg=P.T(r,t.W)
c9.ci=P.T(r,t.O)
for(r=t.w,q=t.g,p=t.v,o=t.c,f=0;f<d6.length;d6.length===s||(0,H.q)(d6),++f){e=d6[f]
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
a9=a8}b.push(new A.du(g,a2,a3,a9,a8,a7))}c9.ci.m(0,d,b)
a=c9.cg
h=c9.r
if(h==null)H.h(P.f(d1))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.h(P.f(d2+a0+d3))
a.m(0,d,r.a(g))}}d6=d4.Q
s=d6.length
if(s!==0){r=t.S
c9.cj=P.T(r,t.W)
c9.ck=P.T(r,t.d)
for(r=t.w,q=t.g,p=t.G,o=t.V,f=0;f<d6.length;d6.length===s||(0,H.q)(d6),++f){e=d6[f]
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
b.push(new A.dv(b2,b1,b0,g,a2,b3))}c9.ck.m(0,d,b)
a=c9.cj
h=c9.r
if(h==null)H.h(P.f(d1))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.h(P.f(d2+a0+d3))
a.m(0,d,r.a(g))}}d6=d4.ch
s=d6.length
if(s!==0){r=t.S
c9.cl=P.T(r,t.W)
c9.cm=P.T(r,t.m)
for(r=t.w,q=t.g,p=t.bK,o=t.bz,a=t.E,a0=t.v,a1=t.B,f=0;f<d6.length;d6.length===s||(0,H.q)(d6),++f){e=d6[f]
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
a9=a8}b.push(new A.dx(g,a2,c0,a3,b3,c1,c2,a9,a8,a7))}c9.cm.m(0,d,b)
b4=c9.cl
h=c9.r
if(h==null)H.h(P.f(d1))
b5=c+"Count"
g=h.h(0,b5)
if(g==null)H.h(P.f(d2+b5+d3))
b4.m(0,d,r.a(g))}}d4=d4.cx
d6=d4.length
if(d6!==0){s=t.S
c9.cn=P.T(s,t.W)
c9.co=P.T(s,t.R)
for(s=t.w,r=t.g,q=t.v,p=t.E,o=t.G,a=t.J,f=0;f<d4.length;d4.length===d6||(0,H.q)(d4),++f){e=d4[f]
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
b.push(new A.dA(g,a2,a3,a4,b2,b1,c6,c5,c2,c8,c7,a9,a8,a7,b3,c1))}c9.co.m(0,d,b)
a0=c9.cn
h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"Count"
g=h.h(0,a1)
if(g==null)H.h(P.f(d2+a1+d3))
a0.m(0,d,s.a(g))}}}},
ao:function(a,b){if(b!=null&&b.d)if(a!=null)a.ep(b)},
hb:function(a,b){}}
A.b4.prototype={
i:function(a){return"barLight"+this.a}}
A.b6.prototype={
i:function(a){return"dirLight"+this.a}}
A.bh.prototype={
i:function(a){return"pointLight"+this.a}}
A.bj.prototype={
i:function(a){return"spotLight"+this.a}}
A.iI.prototype={
i:function(a){return this.b0}}
A.du.prototype={}
A.dv.prototype={}
A.dx.prototype={}
A.dA.prototype={}
A.dh.prototype={
gad:function(a){var s=this.f
if(s==null)throw H.c(P.f("Must initialize the shader prior to getting the attributes."))
return s},
gM:function(){var s=this.r
if(s==null)throw H.c(P.f(u.C))
return s},
gaF:function(){var s=this.e
if(s==null)throw H.c(P.f(u.F))
return s},
cY:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.mR(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.f('Error compiling shader "'+H.x(q)+'": '+s))}return q},
hd:function(){var s,r,q,p,o=this,n=u.F,m=H.b([],t.eu),l=o.a,k=H.kn(l.getProgramParameter(o.gaF(),35721))
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
m.push(new A.eh(l,q,p))}o.f=new A.hW(m)},
hf:function(){var s,r,q,p,o,n,m=this,l=u.F,k=H.b([],t.dC),j=m.a,i=H.kn(j.getProgramParameter(m.gaF(),35718))
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
k.push(m.hG(o,n,q,p))}m.r=new A.jv(k)},
aV:function(a,b,c){var s=this.a
if(a===1)return new A.cf(s,b,c)
else return A.li(s,this.e,b,a,c)},
eW:function(a,b,c){var s=this.a
if(a===1)return new A.dy(s,b,c)
else return A.li(s,this.e,b,a,c)},
eX:function(a,b,c){var s=this.a
if(a===1)return new A.dz(s,b,c)
else return A.li(s,this.e,b,a,c)},
bt:function(a,b){return new P.fZ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
hG:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aV(b,c,d)
case 5121:return s.aV(b,c,d)
case 5122:return s.aV(b,c,d)
case 5123:return s.aV(b,c,d)
case 5124:return s.aV(b,c,d)
case 5125:return s.aV(b,c,d)
case 5126:return new A.dr(s.a,c,d)
case 35664:return new A.fw(s.a,c,d)
case 35665:return new A.ds(s.a,c,d)
case 35666:return new A.dt(s.a,c,d)
case 35667:return new A.fx(s.a,c,d)
case 35668:return new A.fy(s.a,c,d)
case 35669:return new A.fz(s.a,c,d)
case 35674:return new A.fA(s.a,c,d)
case 35675:return new A.dw(s.a,c,d)
case 35676:return new A.cg(s.a,c,d)
case 35678:return s.eW(b,c,d)
case 35680:return s.eX(b,c,d)
case 35670:throw H.c(s.bt("BOOL",c))
case 35671:throw H.c(s.bt("BOOL_VEC2",c))
case 35672:throw H.c(s.bt("BOOL_VEC3",c))
case 35673:throw H.c(s.bt("BOOL_VEC4",c))
default:throw H.c(P.f("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.a2.prototype={}
A.jv.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
L:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.f("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.w()},
w:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.cf.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.fx.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.fy.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.fz.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.fv.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.dr.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.fw.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.ds.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.dt.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.fA.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.dw.prototype={
am:function(a){var s=new Float32Array(H.cr(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.cg.prototype={
am:function(a){var s=new Float32Array(H.cr(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.dy.prototype={
ep:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+this.c}}
A.dz.prototype={
i:function(a){return"UniformSamplerCube: "+this.c}}
F.kl.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cu(q.b,b).cu(q.d.cu(q.c,b),c)
a.sa4(0,new V.U(p.a,p.b,p.c))
a.seh(p.H())
q=1-b
s=1-c
a.sdn(new V.bH(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)},
$S:7}
F.kA.prototype={
$2:function(a,b){return V.hR(this.a,this.b,b)},
$S:18}
F.kC.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.hR(-1,1,c),n=this.a.$2(b,c)
q=-q*n
s=p*n
a.sa4(0,new V.U(q,s,o))
a.seh(new V.D(q,s,o).H())
a.sdn(new V.bH(1-c,2+c,-1,-1))},
$S:7}
F.kD.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:17}
F.kE.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:17}
F.kZ.prototype={
$2:function(a,b){return 0},
$S:18}
F.kY.prototype={
$3:function(a,b,c){var s,r=this.b.$2(b,c)
if(typeof r!=="number")return H.n7(r)
s=a.f
r=(s!=null?new V.D(s.a,s.b,s.c):V.lk()).H().N(0,this.a+r)
a.sa4(0,new V.U(r.a,r.b,r.c))},
$S:7}
F.l_.prototype={
$1:function(a){return new V.U(Math.cos(a),Math.sin(a),0)},
$S:14}
F.kN.prototype={
$1:function(a){var s=this.a*a,r=2+Math.cos(s),q=this.b*a
return new V.U(r*Math.cos(q)/2,r*Math.sin(q)/2,Math.sin(s)/2)},
$S:14}
F.kB.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.lM(l.$1(m),k)
k=J.lM(l.$1(m+3.141592653589793/n.c),k).aR(0,j)
s=new V.D(k.a,k.b,k.c).H()
r=$.mv
if(r==null){r=new V.D(1,0,0)
$.mv=r}q=s.aI(!s.q(0,r)?V.lk():r).H()
r=q.aI(s).H()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.N(0,l*k)
k=q.N(0,o*k)
a.sa4(0,j.W(0,new V.U(l.a-k.a,l.b-k.b,l.c-k.c)))},
$S:7}
F.au.prototype={
aS:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.c(P.f("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.c3(a)
s.c4(b)
s.hc(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gU().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a_()}},
bg:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.b.O(r.gU().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a_()}}s.bZ()
s.c_()
s.h4()},
c3:function(a){this.a=a
a.gU().b.push(this)},
c4:function(a){this.b=a
a.gU().c.push(this)},
hc:function(a){this.c=a
a.gU().d.push(this)},
bZ:function(){var s=this.a
if(s!=null)C.b.O(s.gU().b,this)
this.a=null},
c_:function(){var s=this.b
if(s!=null)C.b.O(s.gU().c,this)
this.b=null},
h4:function(){var s=this.c
if(s!=null)C.b.O(s.gU().d,this)
this.c=null},
eP:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.dC()
if(n!=null)q=q.W(0,n)
if(s!=null)q=q.W(0,s)
if(r!=null)q=q.W(0,r)
if(q.dV())return p
return q.H()},
eR:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aR(0,n)
q=new V.D(o.a,o.b,o.c).H()
o=r.aR(0,n)
return q.aI(new V.D(o.a,o.b,o.c).H()).H()},
cb:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.eP()
if(s==null){s=q.eR()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a_()}return!0},
eO:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.dC()
if(n!=null)q=q.W(0,n)
if(s!=null)q=q.W(0,s)
if(r!=null)q=q.W(0,r)
if(q.dV())return p
return q.H()},
eQ:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.F().toString
if(Math.abs(p-0)<1e-9){j=b.aR(0,e)
o=new V.D(j.a,j.b,j.c).H()
if(q.a-r.a<0)o=o.b6(0)}else{n=(j-s.b)/p
j=b.aR(0,e).N(0,n).W(0,e).aR(0,h)
o=new V.D(j.a,j.b,j.c).H()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.b6(0)}m=l.d
if(m!=null){m=m.H()
o=m.aI(o).H().aI(m).H()}return o},
c9:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.eO()
if(s==null){s=q.eQ()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a_()}return!0},
ghA:function(a){var s=this
if(J.K(s.a,s.b))return!0
if(J.K(s.b,s.c))return!0
if(J.K(s.c,s.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
G:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gC(p)
p=a+C.a.aj(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gC(o)
p=p+C.a.aj(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gC(o)
s=p+C.a.aj(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.w()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.w()
return s+((p==null?"-":p)+"}")},
w:function(){return this.G("")}}
F.im.prototype={}
F.jf.prototype={
bi:function(a,b,c){var s,r=null,q=b.a
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
F.eG.prototype={
ez:function(a,b){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a line with a start vertex which is not attached to a shape."))
if(r!==b.a)throw H.c(P.f("May not create a line with vertices attached to different shapes."))
s.c3(a)
s.c4(b)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.ga5(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a_()}},
bg:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null)){if(!q){r=r.a
if(r!=null)C.b.O(r.ga5(r).b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a_()}}s.bZ()
s.c_()},
c3:function(a){this.a=a
a.ga5(a).b.push(this)},
c4:function(a){this.b=a
a.ga5(a).c.push(this)},
bZ:function(){var s=this.a
if(s!=null)C.b.O(s.ga5(s).b,this)
this.a=null},
c_:function(){var s=this.b
if(s!=null)C.b.O(s.ga5(s).c,this)
this.b=null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
G:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gC(s)
s=a+C.a.aj(C.c.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gC(r)
return s+C.a.aj(C.c.i(r==null?-1:r),0)},
w:function(){return this.G("")}}
F.iz.prototype={}
F.ju.prototype={
bi:function(a,b,c){var s,r=null,q=b.a
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
F.f0.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
G:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gC(s)
return a+C.a.aj(C.c.i(s),0)},
w:function(){return this.G("")}}
F.j9.prototype={
gZ:function(){var s=this.a
return s==null?this.a=new F.y(this,H.b([],t.k)):s},
gbm:function(a){var s=this.b
return s==null?this.b=new F.bI(this,H.b([],t.q)):s},
ga5:function(a){var s=this.c
return s==null?this.c=new F.dj(this,H.b([],t.L)):s},
gU:function(){var s=this.d
return s==null?this.d=new F.di(this,H.b([],t.u)):s},
gv:function(){var s=this.e
return s==null?this.e=D.R():s},
bj:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.e
if(a0!=null)++a0.d
a1.gZ().Y()
s=b.gZ().c.length
for(a0=a1.gZ().c,r=a0.length,q=t.k,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){o=a0[p]
n=b.a
if(n==null)n=b.a=new F.y(b,H.b([],q))
n.n(0,o.hD())}b.gZ().Y()
for(a0=a1.gbm(a1).b,r=a0.length,n=t.q,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){m=a0[p]
l=b.a
if(l==null)l=b.a=new F.y(b,H.b([],q))
k=m.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).Y()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
h=l[k]
k=b.b
l=(k==null?b.b=new F.bI(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,h)
l=new F.f0()
if(h.a==null)H.h(P.f("May not create a point with a vertex which is not attached to a shape."))
l.a=h
k=h.b;(k==null?h.b=new F.dD(H.b([],n)):k).b.push(l)
k=l.a
if(k!=null){k=k.a
if(k!=null){j=k.b;(j==null?k.b=new F.bI(k,H.b([],n)):j).b.push(l)}}l=l.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.J(a)}}}for(a0=a1.ga5(a1).b,r=a0.length,n=t.L,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){g=a0[p]
l=b.a
if(l==null)l=b.a=new F.y(b,H.b([],q))
k=g.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).Y()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.y(b,H.b([],q)):k
k=g.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).Y()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.c
l=(k==null?b.c=new F.dj(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,e)
new F.eG().ez(f,e)}for(a0=a1.gU().b,r=a0.length,n=t.u,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){d=a0[p]
l=b.a
if(l==null)l=b.a=new F.y(b,H.b([],q))
k=d.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).Y()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.y(b,H.b([],q)):k
k=d.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).Y()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.a
l=k==null?b.a=new F.y(b,H.b([],q)):k
k=d.c
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).Y()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
c=l[k]
k=b.d
l=(k==null?b.d=new F.di(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,e)
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,c)
new F.au().aS(f,e,c)}a0=b.e
if(a0!=null)a0.ak(0)},
ax:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gU().ax()||!1
if(!r.gZ().ax())s=!1
q=r.e
if(q!=null)q.ak(0)
return s},
i0:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.gZ().c
s=H.b(m.slice(0),H.km(m))
for(m=t.k;s.length!==0;){r=C.b.ghQ(s)
C.b.cC(s,0)
q=H.b([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(a.bi(0,r,o)){q.push(o)
C.b.cC(s,p)}}if(q.length>1)b.bj(q)}n.gZ().Y()
n.ga5(n).cD()
n.gU().cD()
n.gbm(n).ij()
n.ga5(n).cE(new F.ju())
n.gU().cE(new F.jf())
m=n.e
if(m!=null)m.ak(0)},
c7:function(){this.i0(new F.jO(),new F.j_())},
cq:function(){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
n.gU().cq()
for(s=n.gZ().c.length-1,m=t.k;s>=0;--s){r=n.a
r=(r==null?n.a=new F.y(n,H.b([],m)):r).c
if(s>=r.length)return H.d(r,s)
q=r[s]
p=q.r
if(p!=null)q.se_(new V.D(-p.a,-p.b,-p.c))
o=q.x
if(o!=null){o=new V.D(-o.a,-o.b,-o.c).H()
if(!J.K(q.x,o)){q.x=o
r=q.a
if(r!=null){r=r.e
if(r!=null)r.J(null)}}}}m=n.e
if(m!=null)m.ak(0)},
hy:function(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=34962,b={},a=e.gZ().c.length,a0=a3.a,a1=(a0&$.bu().a)!==0?1:0
if((a0&$.bt().a)!==0)++a1
if((a0&$.bs().a)!==0)++a1
if((a0&$.bv().a)!==0)++a1
if((a0&$.bP().a)!==0)++a1
if((a0&$.eb().a)!==0)++a1
if((a0&$.ec().a)!==0)++a1
if((a0&$.cx().a)!==0)++a1
if((a0&$.br().a)!==0)++a1
s=a3.gcL(a3)
r=P.cY(a*s,0,!1,t.gR)
b.a=0
q=P.o9(a1,new F.ja(b,e,a3,s*4,a,s,r),t.eT)
a0=a2.a
p=a0.createBuffer()
p.toString
a0.bindBuffer(c,p)
a0.bufferData(c,new Float32Array(H.cr(r)),35044)
a0.bindBuffer(c,d)
o=new Z.cA(new Z.fJ(c,p),H.b([],t.fv),q,a3)
if(e.gbm(e).b.length!==0){n=H.b([],t.t)
p=t.q
m=t.k
l=0
while(!0){k=e.b
if(k==null){k=e.b=new F.bI(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
k=k[l].a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],m)):i).Y()}k=k.e}n.push(k==null?0:k);++l}h=Z.ll(a0,34963,n)
o.b.push(new Z.c_(0,n.length,h))}if(e.ga5(e).b.length!==0){n=H.b([],t.t)
p=t.L
m=t.k
l=0
while(!0){k=e.c
if(k==null){k=e.c=new F.dj(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
g=k[l]
k=g.a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],m)):i).Y()}k=k.e}n.push(k==null?0:k)
k=g.b
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],m)):i).Y()}k=k.e}n.push(k==null?0:k);++l}h=Z.ll(a0,34963,n)
o.b.push(new Z.c_(1,n.length,h))}if(e.gU().b.length!==0){n=H.b([],t.t)
p=t.u
m=t.k
l=0
while(!0){k=e.d
if(k==null){k=e.d=new F.di(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
f=k[l]
k=f.a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],m)):i).Y()}k=k.e}n.push(k==null?0:k)
k=f.b
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],m)):i).Y()}k=k.e}n.push(k==null?0:k)
k=f.c
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],m)):i).Y()}k=k.e}n.push(k==null?0:k);++l}h=Z.ll(a0,34963,n)
o.b.push(new Z.c_(4,n.length,h))}return o},
i:function(a){var s=this,r="   ",q=H.b([],t.s)
if(s.gZ().c.length!==0){q.push("Vertices:")
q.push(s.gZ().G(r))}if(s.gbm(s).b.length!==0){q.push("Points:")
q.push(s.gbm(s).G(r))}if(s.ga5(s).b.length!==0){q.push("Lines:")
q.push(s.ga5(s).G(r))}if(s.gU().b.length!==0){q.push("Faces:")
q.push(s.gU().G(r))}return C.b.j(q,"\n")},
a_:function(){var s=this.e
return s==null?null:s.J(null)}}
F.ja.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c.hv(a),e=f.gcL(f),d=g.a,c=d.a
for(s=g.e,r=g.r,q=r.length,p=g.f,o=g.b,n=t.k,m=0;m<s;++m){l=o.a
l=(l==null?o.a=new F.y(o,H.b([],n)):l).c
if(m>=l.length)return H.d(l,m)
k=l[m].hZ(f)
j=d.a+m*p
for(l=k.length,i=0;i<l;++i){h=k[i]
if(j>=q)return H.d(r,j)
r[j]=h;++j}}d.a+=e
return new Z.bU(f,e,c*4,g.d)},
$S:46}
F.di.prototype={
hr:function(a){var s,r,q,p,o,n,m,l,k=H.b([],t.u),j=a.length
if(j>0){s=a[0]
for(r=this.a,q=t.k,p=2;p<j;++p){o=p-1
n=a.length
if(o>=n)return H.d(a,o)
o=a[o]
if(p>=n)return H.d(a,p)
n=a[p]
m=r.a;(m==null?r.a=new F.y(r,H.b([],q)):m).n(0,s)
m=r.a;(m==null?r.a=new F.y(r,H.b([],q)):m).n(0,o)
m=r.a;(m==null?r.a=new F.y(r,H.b([],q)):m).n(0,n)
l=new F.au()
l.aS(s,o,n)
k.push(l)}}return k},
hs:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=H.b([],t.u)
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
if(m){(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,j)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,g)
e=new F.au()
e.aS(j,i,g)
d.push(e)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,j)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,f)
e=new F.au()
e.aS(j,g,f)
d.push(e)}else{(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,f)
e=new F.au()
e.aS(i,g,f)
d.push(e)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,f)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,j)
e=new F.au()
e.aS(i,f,j)
d.push(e)}m=!m}o=!o}return d},
gl:function(a){return this.b.length},
cE:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gZ().c.length-1,q=t.u,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.y(s,H.b([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.d
if(o==null)o=n.d=new F.ck(H.b([],q),H.b([],q),H.b([],q))
m=o.b.length+o.c.length+o.d.length-1
for(;m>=0;m=k){o=n.d
l=(o==null?n.d=new F.ck(H.b([],q),H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.d
if(a.bi(0,l,(o==null?n.d=new F.ck(H.b([],q),H.b([],q),H.b([],q)):o).h(0,j))){l.bg()
break}}}}},
cD:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(q.ghA(q))q.bg()}},
ax:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].cb())q=!1
return q},
ca:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].c9())q=!1
return q},
cq:function(){var s,r,q,p,o,n,m,l
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
o=p.b
p.b=p.c
p.c=o
n=p.d
if(n!=null)p.d=new V.D(-n.a,-n.b,-n.c)
m=p.e
if(m!=null)p.e=new V.D(-m.a,-m.b,-m.c)
l=p.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.J(null)}}}},
i:function(a){return this.w()},
G:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(a))
return C.b.j(p,"\n")},
w:function(){return this.G("")}}
F.dj.prototype={
gl:function(a){return this.b.length},
cE:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gZ().c.length-1,q=t.L,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.y(s,H.b([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.c
if(o==null)o=n.c=new F.cl(H.b([],q),H.b([],q))
m=o.b.length+o.c.length-1
for(;m>=0;m=k){o=n.c
l=(o==null?n.c=new F.cl(H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.c
if(a.bi(0,l,(o==null?n.c=new F.cl(H.b([],q),H.b([],q)):o).h(0,j))){l.bg()
break}}}}},
cD:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(J.K(q.a,q.b))q.bg()}},
i:function(a){return this.w()},
G:function(a){var s,r=H.b([],t.s),q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.d(q,s)
r.push(q[s].G(a+(""+s+". ")))}return C.b.j(r,"\n")},
w:function(){return this.G("")}}
F.bI.prototype={
gl:function(a){return this.b.length},
ij:function(){var s,r,q,p,o,n,m
for(s=this.b,r=s.length-1,q=t.q;r>=0;--r){if(r>=s.length)return H.d(s,r)
p=s[r].a
if(p==null)o=null
else{n=p.b
p=(n==null?p.b=new F.dD(H.b([],q)):n).b.length
o=p}if((o==null?0:o)>1){if(r>=s.length)return H.d(s,r)
m=s[r]
p=m.a
if(p!=null){p=p.a
if(p!=null){n=p.b
C.b.O((n==null?p.b=new F.bI(p,H.b([],q)):n).b,m)}p=m.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.J(null)}}}p=m.a
if(p!=null){n=p.b
C.b.O((n==null?p.b=new F.dD(H.b([],q)):n).b,m)}m.a=null}}},
i:function(a){return this.w()},
G:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(a))
return C.b.j(p,"\n")},
w:function(){return this.G("")}}
F.cj.prototype={
ce:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.fH(s.cx,p,m,r,q,o,n,a,l)},
hD:function(){return this.ce(null)},
ga5:function(a){var s=this.c
if(s==null){s=t.L
s=this.c=new F.cl(H.b([],s),H.b([],s))}return s},
gU:function(){var s=this.d
if(s==null){s=t.u
s=this.d=new F.ck(H.b([],s),H.b([],s),H.b([],s))}return s},
gC:function(a){var s=this.a
if(s!=null)s.gZ().Y()
return this.e},
sa4:function(a,b){var s
if(!J.K(this.f,b)){this.f=b
s=this.a
if(s!=null)s.a_()}},
se_:function(a){var s
a=a.H()
if(!J.K(this.r,a)){this.r=a
s=this.a
if(s!=null)s.a_()}},
seh:function(a){var s
if(!J.K(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a_()}},
sdn:function(a){var s
if(!J.K(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.a_()}},
hZ:function(a){var s,r,q,p,o=this,n=null
if(a.q(0,$.bu())){s=o.f
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.q(0,$.bt())){s=o.r
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,1,0],t.n):s}else if(a.q(0,$.bs())){s=o.x
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,1],t.n):s}else if(a.q(0,$.bv())){s=o.y
s=s==null?n:H.b([s.a,s.b],t.n)
return s==null?H.b([0,0],t.n):s}else if(a.q(0,$.bP())){s=o.z
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.q(0,$.eb())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return H.b([q,p,s==null?1:s],t.n)}else if(a.q(0,$.ec())){s=o.Q
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([1,1,1,1],t.n):s}else if(a.q(0,$.cx()))return H.b([o.ch],t.n)
else if(a.q(0,$.br())){s=o.cx
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([-1,-1,-1,-1],t.n):s}else return H.b([],t.n)},
cb:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dC()
p.gU().E(0,new F.jS(o))
p.r=o.a.H()
if(r){s.a_()
o=s.e
if(o!=null)o.ak(0)}return!0},
c9:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dC()
p.gU().E(0,new F.jR(o))
p.x=o.a.H()
if(r){s.a_()
o=s.e
if(o!=null)o.ak(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
G:function(a){var s,r,q=this,p=null,o="-",n=H.b([],t.s)
n.push(C.a.aj(C.c.i(q.e),0))
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
n.push(V.A(q.ch,3,0))
s=q.cx
s=s==null?p:s.w()
n.push(s==null?o:s)
r=C.b.j(n,", ")
return a+"{"+r+"}"},
w:function(){return this.G("")}}
F.jS.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.W(0,r)}},
$S:8}
F.jR.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.W(0,r)}},
$S:8}
F.y.prototype={
Y:function(){var s,r,q
if(this.b){s=this.c
r=s.length
for(q=0;q<r;++q)s[q].e=q
this.b=!1}},
n:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.f("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a_()
return!0},
ht:function(a,b,c,d,e,f){var s=F.fH(a,null,b,c,d,e,f,null,0)
this.n(0,s)
return s},
gl:function(a){return this.c.length},
ax:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].cb()
return!0},
ca:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].c9()
return!0},
hz:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.H()
if(!J.K(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.J(null)}}}}}return!0},
i:function(a){return this.w()},
G:function(a){var s,r,q,p
this.Y()
s=H.b([],t.s)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p)s.push(r[p].G(a))
return C.b.j(s,"\n")},
w:function(){return this.G("")}}
F.ck.prototype={
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
E:function(a,b){var s=this
C.b.E(s.b,b)
C.b.E(s.c,new F.jM(s,b))
C.b.E(s.d,new F.jN(s,b))},
i:function(a){return this.w()},
w:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(""))
return C.b.j(p,"\n")}}
F.jM.prototype={
$1:function(a){if(!J.K(a.a,this.a))this.b.$1(a)},
$S:8}
F.jN.prototype={
$1:function(a){var s=this.a
if(!J.K(a.a,s)&&!J.K(a.b,s))this.b.$1(a)},
$S:8}
F.cl.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.d(r,s)
return r[s]}else{if(b<0)return H.d(r,b)
return r[b]}},
i:function(a){return this.w()},
w:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(""))
return C.b.j(p,"\n")}}
F.jP.prototype={}
F.jO.prototype={
bi:function(a,b,c){return J.K(b.f,c.f)}}
F.jQ.prototype={}
F.j_.prototype={
bj:function(a){var s,r,q,p=V.dC()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)p=new V.D(p.a+q.a,p.b+q.b,p.c+q.c)}p=p.H()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)a[r].se_(p)
return null}}
F.dD.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.w()},
w:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(""))
return C.b.j(p,"\n")}}
O.d2.prototype={
gv:function(){var s=this.fr
return s==null?this.fr=D.R():s},
X:function(a){var s=this.fr
return s==null?null:s.J(a)},
bX:function(){return this.X(null)},
d4:function(a){this.a=null
this.X(a)},
h7:function(){return this.d4(null)},
fg:function(a,b){return this.X(new D.b9())},
fi:function(a,b){return this.X(new D.ba())},
gcv:function(){var s=this,r=s.dx
if(r==null){r=new D.cT(H.b([],t.i),H.b([],t.U),H.b([],t.o),H.b([],t.D),H.b([],t.e))
r.cK(r.gfd(),r.gfR(),r.gfV())
r.gv().n(0,s.gd3())
r.gdW().n(0,s.gbc())
s.dx=r}return r},
gdv:function(){var s=this.f
return s==null?this.f=O.eK(this,"emission"):s},
gdi:function(){var s=this.r
return s==null?this.r=O.eK(this,"ambient"):s},
gcf:function(){var s=this.x
return s==null?this.x=O.eK(this,"diffuse"):s},
gbJ:function(){var s=this.z
return s==null?this.z=new O.iL(new V.V(0,0,0),this,"specular",new A.as(!1,!1,!1)):s},
cW:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null,a2=t.y,a3=new H.Y(a2),a4=a0.dx
a4=a4==null?a1:a4.e
if(a4==null)a4=H.b([],t.i)
s=a4.length
r=0
for(;r<a4.length;a4.length===s||(0,H.q)(a4),++r){q=a4[r]
p=q.gay()
o=a3.h(0,q.gay())
a3.m(0,p,o==null?1:o)}n=H.b([],t.cn)
a3.E(0,new O.iM(a0,n))
C.b.b8(n,new O.iN())
m=new H.Y(a2)
a4=a0.dx
a4=a4==null?a1:a4.f
if(a4==null)a4=H.b([],t.U)
s=a4.length
r=0
for(;r<a4.length;a4.length===s||(0,H.q)(a4),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.b([],t.fD)
m.E(0,new O.iO(a0,l))
C.b.b8(l,new O.iP())
k=new H.Y(a2)
a4=a0.dx
a4=a4==null?a1:a4.r
if(a4==null)a4=H.b([],t.o)
s=a4.length
r=0
for(;r<a4.length;a4.length===s||(0,H.q)(a4),++r){q=a4[r]
p=q.gay()
o=k.h(0,q.gay())
k.m(0,p,o==null?1:o)}j=H.b([],t.eg)
k.E(0,new O.iQ(a0,j))
C.b.b8(j,new O.iR())
i=new H.Y(a2)
a2=a0.dx
a2=a2==null?a1:a2.x
if(a2==null)a2=H.b([],t.D)
a4=a2.length
r=0
for(;r<a2.length;a2.length===a4||(0,H.q)(a2),++r){q=a2[r]
s=q.gay()
p=i.h(0,q.gay())
i.m(0,s,p==null?1:p)}h=H.b([],t.c3)
i.E(0,new O.iS(a0,h))
C.b.b8(h,new O.iT())
a2=C.c.a3(a0.e.a.length+3,4)
a4=a0.b
s=a0.d
if(a0.dy==null)a0.dy=new O.iJ(new V.aP(0,0,0,0))
p=a0.gdv().c
o=a0.gdi().c
g=a0.gcf().c
f=a0.y
f=(f==null?a0.y=O.eK(a0,"invDiffuse"):f).c
e=a0.gbJ().c
d=a0.Q
d=(d==null?a0.Q=new O.iH(a0,"bump",new A.as(!1,!1,!1)):d).c
c=a0.cx
c=(c==null?a0.cx=O.eK(a0,"reflect"):c).c
b=a0.cy
b=(b==null?a0.cy=new O.iK(new V.V(0,0,0),a0,"refract",new A.as(!1,!1,!1)):b).c
a=a0.db
return A.ob(a4!=null,!1,s!=null,!1,a2*4,p,o,g,f,e,d,c,b,(a==null?a0.db=new O.iG(a0,"alpha",new A.as(!1,!1,!1)):a).c,n,l,j,h)},
ab:function(a,b){if(b!=null)if(!C.b.A(a,b)){b.a=a.length
a.push(b)}},
aO:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.aE(m==null?H.b([],t.e):m)
s=H.W(m).c
for(;m.u();){r=s.a(m.d)
q=$.jL
if(q==null)q=$.jL=new V.D(0,0,1)
r.c=q
p=$.jK
r.d=p==null?$.jK=new V.D(0,1,0):p
p=$.jJ
r.e=p==null?$.jJ=new V.D(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.bF(q).H()
r.d=n.bF(r.d).H()
r.e=n.bF(r.e).H()}}},
il:function(b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null,b0=a8.a
if(b0==null){s=a8.cW()
r=s.b0
q=b1.fr
b0=q.h(0,r)
if(b0==null){p=b1.a
o=t.S
n=t.W
b0=new A.eJ(s,H.b([],t.p),P.T(o,n),P.T(o,t.O),P.T(o,n),P.T(o,t.d),P.T(o,n),P.T(o,t.m),P.T(o,n),P.T(o,t.R),p,r)
b0.eA(s,p)
if(r.length===0)H.h(P.f("May not cache a shader with no name."))
if(q.cc(0,r))H.h(P.f('Shader cache already contains a shader by the name "'+r+'".'))
q.m(0,r,b0)}b0=a8.a=b0
b2.e=null}m=b0.x
l=m.dz
s=b2.e
if(!(s instanceof Z.cA))s=b2.e=null
if(s==null||!s.d.q(0,l)){s=m.k4
if(s){r=b2.d
if(r!=null)r.ax()}r=m.r1
if(r){q=b2.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gU().ca()
q.gZ().ca()
q=q.e
if(q!=null)q.ak(0)}}q=m.rx
if(q){p=b2.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.gZ().hz()
p=p.e
if(p!=null)p.ak(0)}}p=b2.d
k=p==null?a9:p.hy(new Z.jT(b1.a),l)
if(k==null)return
p=k.b1($.bu())
if(p!=null){o=b0.y
o=o==null?a9:o.c
p.e=o==null?0:o}if(s){s=k.b1($.bt())
if(s!=null){p=b0.Q
p=p==null?a9:p.c
s.e=p==null?1:p}}if(r){s=k.b1($.bs())
if(s!=null){r=b0.z
r=r==null?a9:r.c
s.e=r==null?2:r}}if(m.r2){s=k.b1($.bv())
if(s!=null){r=b0.ch
r=r==null?a9:r.c
s.e=r==null?3:r}}if(q){s=k.b1($.bP())
if(s!=null){r=b0.cx
r=r==null?a9:r.c
s.e=r==null?4:r}}if(m.ry){s=k.b1($.br())
if(s!=null){r=b0.cy
r=r==null?a9:r.c
s.e=r==null?5:r}}b2.e=k}j=H.b([],t.ga)
s=b1.a
s.useProgram(b0.e)
b0.gad(b0).hM()
if(m.fr){r=b1.dx
r=r.ga2(r)
q=b0.db
if(q!=null)q.am(r.aa(0,!0))}if(m.fx){r=b1.cx
if(r==null){r=b1.db
q=b1.dx
q=b1.cx=r.ga2(r).N(0,q.ga2(q))
r=q}q=b0.dx
if(q!=null)q.am(r.aa(0,!0))}r=b1.ch
if(r==null){r=b1.dx
r=b1.ch=b1.gih().N(0,r.ga2(r))}q=b0.fr
if(q!=null)q.am(r.aa(0,!0))
if(m.go){r=b1.db
r=r.ga2(r)
q=b0.dy
if(q!=null)q.am(r.aa(0,!0))}if(m.x1){r=a8.b
if(r==null){r=$.m2
if(r==null){r=new V.c2(1,0,0,0,1,0,0,0,1)
$.m2=r}}q=b0.go
if(q!=null)q.am(r.aa(0,!0))}if(m.x2){r=V.bf()
q=b0.id
if(q!=null)q.am(r.aa(0,!0))}if(m.y1){r=a8.d
if(r==null)r=V.bf()
q=b0.k1
if(q!=null)q.am(r.aa(0,!0))}if(m.b_>0){r=a8.e.a
i=r.length
q=b0.k2
if(q!=null)q.a.uniform1i(q.d,i)
for(h=0;h<i;++h){if(h>=r.length)return H.d(r,h)
q=r[h]
p=b0.k3
if(h>=p.length)return H.d(p,h)
p=p[h]
g=new Float32Array(H.cr(q.aa(0,!0)))
p.a.uniformMatrix4fv(p.d,!1,g)}}r=m.a
if(r.a){q=a8.f
q=q==null?a9:q.f
if(q==null)q=new V.V(0,0,0)
p=b0.k4
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a8.f
a8.ab(j,r==null?a9:r.d)
r=a8.f
r=r==null?a9:r.d
b0.ao(b0.r1,r)}if(m.k1){r=m.b
if(r.a){q=a8.r
q=q==null?a9:q.f
if(q==null)q=new V.V(0,0,0)
p=b0.rx
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a8.r
a8.ab(j,r==null?a9:r.d)
r=a8.r
r=r==null?a9:r.d
b0.ao(b0.ry,r)}r=m.c
if(r.a){q=a8.x
q=q==null?a9:q.f
if(q==null)q=new V.V(0,0,0)
p=b0.x2
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a8.x
a8.ab(j,r==null?a9:r.d)
r=a8.x
r=r==null?a9:r.d
b0.ao(b0.y1,r)}r=m.d
if(r.a){q=a8.y
q=q==null?a9:q.f
if(q==null)q=new V.V(0,0,0)
p=b0.b_
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a8.y
a8.ab(j,r==null?a9:r.d)
r=a8.y
r=r==null?a9:r.d
b0.ao(b0.b0,r)}r=m.e
q=r.a
if(q||r.b||!1){p=a8.z
p=p==null?a9:p.ch
if(p==null)p=100
o=b0.dC
if(o!=null)o.a.uniform1f(o.d,p)}if(q){q=a8.z
q=q==null?a9:q.f
if(q==null)q=new V.V(1,1,1)
p=b0.dA
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a8.z
a8.ab(j,r==null?a9:r.d)
r=a8.z
r=r==null?a9:r.d
b0.ao(b0.dB,r)}r=m.z
if(r.length>0){f=new H.Y(t.y)
q=a8.dx
q=q==null?a9:q.e
if(q==null)q=H.b([],t.i)
p=q.length
o=t.c
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.gay()
b=f.h(0,c)
if(b==null)b=0
f.m(0,c,b+1)
n=b0.ci.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=d.giB()
a0=$.aX
n=n.bn(a0==null?$.aX=new V.U(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.giG()
a0=$.aX
n=n.bn(a0==null?$.aX=new V.U(0,0,0):a0)
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gae(d)
a0=a.d
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
if(d.gdw()){n=d.gdk()
a0=a.e
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdl()
a0=a.f
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdm()
a0=a.r
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=f.h(0,p)
if(i==null)i=0
p=b0.cg.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.Q
if(r.length>0){q=b1.db
a1=q.ga2(q)
a2=new H.Y(t.y)
q=a8.dx
q=q==null?a9:q.f
if(q==null)q=H.b([],t.U)
p=q.length
o=t.V
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
b=a2.h(0,0)
if(b==null)b=0
a2.m(0,0,b+1)
n=b0.ck.h(0,0)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=a1.bF(d.c).H()
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
a1=q.ga2(q)
a3=new H.Y(t.y)
q=a8.dx
q=q==null?a9:q.r
if(q==null)q=H.b([],t.o)
p=q.length
o=t.B
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.gay()
b=a3.h(0,c)
if(b==null)b=0
a3.m(0,c,b+1)
n=b0.cm.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
a4=a1.N(0,d.ga2(d))
n=d.ga2(d)
a0=$.aX
n=n.bn(a0==null?$.aX=new V.U(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=$.aX
n=a4.bn(n==null?$.aX=new V.U(0,0,0):n)
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gae(d)
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
d.gaN()
n=a4.dU(0)
a0=a.d
if(a0!=null){g=new Float32Array(H.cr(new V.c2(n.a,n.b,n.c,n.e,n.f,n.r,n.y,n.z,n.Q).aa(0,!0)))
a0.a.uniformMatrix3fv(a0.d,!1,g)}d.gaN()
n=d.gaN()
if(!C.b.A(j,n)){n.a=j.length
j.push(n)}n=d.gaN()
a0=n.gbh(n)
if(a0){a0=a.f
if(a0!=null){a5=n.gbh(n)
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.gC(n))}}d.gb7()
n=d.geq()
a0=a.x
if(a0!=null)a0.a.uniform4f(a0.d,n.a,n.b,n.c,n.d)
n=d.gb7()
if(!C.b.A(j,n)){n.a=j.length
j.push(n)}n=d.gb7()
a0=n.gbh(n)
if(a0){a0=a.r
if(a0!=null){a5=n.gbh(n)
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.gC(n))}}if(d.gdw()){n=d.gdk()
a0=a.y
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdl()
a0=a.z
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdm()
a0=a.Q
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a3.h(0,p)
if(i==null)i=0
p=b0.cl.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.cx
if(r.length>0){q=b1.db
a1=q.ga2(q)
a7=new H.Y(t.y)
q=a8.dx
q=q==null?a9:q.x
if(q==null)q=H.b([],t.D)
p=q.length
o=t.J
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.gay()
b=a7.h(0,c)
if(b==null)b=0
a7.m(0,c,b+1)
n=b0.co.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=d.gig(d)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.giE(d).H()
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=a1.bn(d.gig(d))
a0=a.d
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gae(d)
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
d.gaN()
n=d.giR()
a0=a.f
if(a0!=null)a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gcF(d)
a0=a.r
if(a0!=null)a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.giP()
a0=a.x
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.giQ()
a0=a.y
if(a0!=null)a0.a.uniform1f(a0.d,n)
d.gaN()
n=d.gaN()
if(!C.b.A(j,n)){n.a=j.length
j.push(n)}n=d.gaN()
a0=n.gbh(n)
if(a0){a0=a.dx
if(a0!=null){a5=n.d
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.a)}}d.gb7()
n=d.geq()
a0=a.z
if(a0!=null)a0.a.uniform4f(a0.d,n.a,n.b,n.c,n.d)
n=d.gb7()
if(!C.b.A(j,n)){n.a=j.length
j.push(n)}n=d.gb7()
a0=n.gbh(n)
if(a0){a0=a.dy
if(a0!=null){a5=n.d
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.a)}}if(d.giF()){n=d.giD()
a0=a.Q
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.giC()
a0=a.ch
if(a0!=null)a0.a.uniform1f(a0.d,n)}if(d.gdw()){n=d.gdk()
a0=a.cx
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdl()
a0=a.cy
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdm()
a0=a.db
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a7.h(0,p)
if(i==null)i=0
p=b0.cn.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}}if(m.f.b){r=a8.Q
a8.ab(j,r==null?a9:r.d)
r=a8.Q
r=r==null?a9:r.d
b0.ao(b0.dD,r)}if(m.dy){r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.ga2(r).dU(0)}q=b0.fy
if(q!=null)q.am(r.aa(0,!0))}if(m.db){a8.ab(j,a9)
b0.hb(b0.dE,a9)
r=m.r
if(r.a){q=a8.cx
q=q==null?a9:q.f
if(q==null)q=new V.V(1,1,1)
p=b0.dF
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a8.cx
a8.ab(j,r==null?a9:r.d)
r=a8.cx
r=r==null?a9:r.d
b0.ao(b0.dG,r)}r=m.x
q=r.a
if(q||r.b||!1){p=a8.cy
p=p==null?a9:p.ch
if(p==null)p=0
o=b0.dH
if(o!=null)o.a.uniform1f(o.d,p)}if(q){q=a8.cy
q=q==null?a9:q.f
if(q==null)q=new V.V(1,1,1)
p=b0.dI
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a8.cy
a8.ab(j,r==null?a9:r.d)
r=a8.cy
r=r==null?a9:r.d
b0.ao(b0.dJ,r)}}r=m.y
q=r.a
p=!q
if(!p||r.b||!1){if(q){q=a8.db
q=q==null?a9:q.f
if(q==null)q=1
o=b0.dK
if(o!=null)o.a.uniform1f(o.d,q)}if(r.b){q=a8.db
a8.ab(j,q==null?a9:q.d)
q=a8.db
q=q==null?a9:q.d
b0.ao(b0.dL,q)}s.enable(3042)
s.blendFunc(770,771)}for(h=0;h<j.length;++h){q=j[h]
if(!q.c&&q.d){q.c=!0
s.activeTexture(33984+q.a)
s.bindTexture(3553,q.b)}}q=t.ed.a(b2.e)
q.c8(b1)
q.b3(b1)
q.iy(b1)
if(!p||r.b||!1)s.disable(3042)
for(h=0;h<j.length;++h){r=j[h]
if(r.c){r.c=!1
s.activeTexture(33984+r.a)
s.bindTexture(3553,a9)}}s.useProgram(a9)
b0.gad(b0).hK()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cW().b0}}
O.iM.prototype={
$2:function(a,b){return this.b.push(new A.b4(a,C.c.a3(b+3,4)*4))},
$S:6}
O.iN.prototype={
$2:function(a,b){return C.c.af(a.a,b.a)},
$S:50}
O.iO.prototype={
$2:function(a,b){return this.b.push(new A.b6(a,C.c.a3(b+3,4)*4))},
$S:6}
O.iP.prototype={
$2:function(a,b){return C.c.af(a.a,b.a)},
$S:51}
O.iQ.prototype={
$2:function(a,b){return this.b.push(new A.bh(a,C.c.a3(b+3,4)*4))},
$S:6}
O.iR.prototype={
$2:function(a,b){return C.c.af(a.a,b.a)},
$S:52}
O.iS.prototype={
$2:function(a,b){return this.b.push(new A.bj(a,C.c.a3(b+3,4)*4))},
$S:6}
O.iT.prototype={
$2:function(a,b){return C.c.af(a.a,b.a)},
$S:53}
O.iG.prototype={
aG:function(){var s,r=this
r.cM()
s=r.f
$.F().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.X(new D.G(r.b,s,1))}}}
O.d3.prototype={
X:function(a){return this.a.X(a)},
bX:function(){return this.X(null)},
aG:function(){},
c0:function(a){var s,r,q=this
if(!q.c.q(0,a)){s=q.c
if(s.a||s.b||!1)r=!(a.a||a.b||!1)
else r=!0
q.c=a
if(r)q.aG()
s=q.a
s.a=null
s.X(null)}}}
O.iH.prototype={}
O.d4.prototype={
d6:function(a){var s,r=this
if(!r.f.q(0,a)){s=r.f
r.f=a
r.a.X(new D.G(r.b+".color",s,a))}},
aG:function(){this.cM()
this.d6(new V.V(1,1,1))},
sae:function(a,b){this.c0(new A.as(!0,this.c.b,!1))
this.d6(b)}}
O.iJ.prototype={}
O.iK.prototype={
aG:function(){var s,r=this
r.cN()
s=r.ch
$.F().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.X(new D.G(r.b+".refraction",s,1))}}}
O.iL.prototype={
d7:function(a){var s=this,r=s.ch
$.F().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.X(new D.G(s.b+".shininess",r,a))}},
aG:function(){this.cN()
this.d7(100)}}
O.dn.prototype={}
T.cd.prototype={}
T.fn.prototype={}
T.fo.prototype={
gv:function(){var s=this.y
return s==null?this.y=D.R():s}}
T.jj.prototype={
i_:function(a,b){var s,r,q=3553,p=this.a,o=p.createTexture()
o.toString
p.bindTexture(q,o)
p.texParameteri(q,10242,10497)
p.texParameteri(q,10243,10497)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.fo(o)
W.a4(s,"load",new T.jk(this,r,s,!1,o,!1,!1),!1)
return r},
h8:function(a,b,c){var s,r,q,p,o,n
b=V.lH(b)
s=a.width
r=V.lH(s==null?512:s)
s=a.height
q=V.lH(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.l3()
p.width=r
p.height=q
o=t.ar.a(C.i.en(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.qg(o.getImageData(0,0,s,n==null?512:n))}}}
T.jk.prototype={
$1:function(a){var s,r,q=this,p=q.c
p.width
p.height
s=q.a
r=s.h8(p,s.b,q.d)
p.width
p.height
p=s.a
p.bindTexture(3553,q.e)
p.pixelStorei(37440,0)
C.a3.is(p,3553,0,6408,6408,5121,r)
p.bindTexture(3553,null)
p=q.b
if(!p.d){p.d=!0
p=p.y
if(p!=null)p.hL()}++s.e},
$S:3}
X.ir.prototype={
gv:function(){var s=this.x
return s==null?this.x=D.R():s}}
X.eX.prototype={
gv:function(){var s=this.f
return s==null?this.f=D.R():s},
aU:function(a){var s=this.f
return s==null?null:s.J(a)},
eK:function(){return this.aU(null)},
sai:function(a){var s,r,q=this
if(!J.K(q.b,a)){s=q.b
if(s!=null)s.gv().O(0,q.gcS())
r=q.b
q.b=a
if(a!=null)a.gv().n(0,q.gcS())
q.aU(new D.G("mover",r,q.b))}}}
X.ji.prototype={}
V.aH.prototype={
bq:function(a){this.b=new P.it(C.S)
this.c=null
this.d=H.b([],t.F)},
P:function(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.d
if(j.length===0)j.push(H.b([],t.C))
s=a.split("\n")
for(j=s.length,r=t.C,q=!0,p=0;p<j;++p){o=s[p]
if(q)q=!1
else k.d.push(H.b([],r))
n=document.createElement("div")
n.className="codePart"
m=k.b.eV(o,0,o.length)
l=m==null?o:m
l=H.lJ(l," ","&nbsp;")
C.Q.eo(n,l)
l=n.style
l.color=b
C.b.gaz(k.d).push(n)}},
e6:function(a,b){var s,r,q,p=this
p.d=H.b([],t.F)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bw()
if(r!=null)for(q=new H.r(s),q=new P.bL(r.cH(new H.bd(q,q.gl(q))).a());q.u();)p.bD(q.gB(q))}}
V.kX.prototype={
$1:function(a){var s=C.d.cG(this.a.ghV(),2)
if(s!=="0.00")P.lI(s+" fps")},
$S:54}
V.ep.prototype={
bD:function(a){var s=this
switch(a.a){case"Class":s.P(a.b,"#551")
break
case"Comment":s.P(a.b,"#777")
break
case"Id":s.P(a.b,"#111")
break
case"Num":s.P(a.b,"#191")
break
case"Reserved":s.P(a.b,"#119")
break
case"String":s.P(a.b,"#171")
break
case"Symbol":s.P(a.b,"#616")
break
case"Type":s.P(a.b,"#B11")
break
case"Whitespace":s.P(a.b,"#111")
break}},
bw:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()\\-+*%!&|=.,?:;",h="OpenDoubleStr",g="CloseDoubleStr",f="EscDoubleStr",e="OpenSingleStr",d="CloseSingleStr",c="EscSingleStr",b="Slash",a="Comment",a0="EndComment",a1="MLComment",a2="MLCStar",a3="Whitespace",a4=L.jp()
a4.d=a4.k(0,o)
s=a4.k(0,o).j(0,n)
r=t.t
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.Q("a","z"))
s.push(K.Q("A","Z"))
s=a4.k(0,n).j(0,n)
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.Q("0","9"))
s.push(K.Q("a","z"))
s.push(K.Q("A","Z"))
a4.k(0,o).j(0,m).a.push(K.Q("0","9"))
a4.k(0,m).j(0,m).a.push(K.Q("0","9"))
s=a4.k(0,m).j(0,l)
q=new K.u(H.b([],r))
q.p(new H.r("."))
s.a.push(q)
a4.k(0,l).j(0,k).a.push(K.Q("0","9"))
a4.k(0,k).j(0,k).a.push(K.Q("0","9"))
q=a4.k(0,o).j(0,j)
s=new K.u(H.b([],r))
s.p(new H.r(i))
q.a.push(s)
s=a4.k(0,j).j(0,j)
q=new K.u(H.b([],r))
q.p(new H.r(i))
s.a.push(q)
q=a4.k(0,o).j(0,h)
s=new K.u(H.b([],r))
s.p(new H.r('"'))
q.a.push(s)
s=a4.k(0,h).j(0,g)
q=new K.u(H.b([],r))
q.p(new H.r('"'))
s.a.push(q)
q=a4.k(0,h).j(0,f)
s=new K.u(H.b([],r))
s.p(new H.r("\\"))
q.a.push(s)
s=a4.k(0,f).j(0,h)
q=new K.u(H.b([],r))
q.p(new H.r('"'))
s.a.push(q)
a4.k(0,h).j(0,h).a.push(new K.aN())
q=a4.k(0,o).j(0,e)
s=new K.u(H.b([],r))
s.p(new H.r("'"))
q.a.push(s)
s=a4.k(0,e).j(0,d)
q=new K.u(H.b([],r))
q.p(new H.r("'"))
s.a.push(q)
q=a4.k(0,e).j(0,c)
s=new K.u(H.b([],r))
s.p(new H.r("\\"))
q.a.push(s)
s=a4.k(0,c).j(0,e)
q=new K.u(H.b([],r))
q.p(new H.r("'"))
s.a.push(q)
a4.k(0,e).j(0,e).a.push(new K.aN())
q=a4.k(0,o).j(0,b)
s=new K.u(H.b([],r))
s.p(new H.r("/"))
q.a.push(s)
s=a4.k(0,b).j(0,a)
q=new K.u(H.b([],r))
q.p(new H.r("/"))
s.a.push(q)
q=a4.k(0,a).j(0,a0)
s=new K.u(H.b([],r))
s.p(new H.r("\n"))
q.a.push(s)
s=a4.k(0,a).j(0,a)
q=t.z
p=H.b([],q)
s.a.push(new K.ac(p))
s=new K.u(H.b([],r))
s.p(new H.r("\n"))
p.push(s)
s=a4.k(0,b).j(0,a1)
p=new K.u(H.b([],r))
p.p(new H.r("*"))
s.a.push(p)
p=a4.k(0,a1).j(0,a2)
s=new K.u(H.b([],r))
s.p(new H.r("*"))
p.a.push(s)
s=a4.k(0,a2).j(0,a1)
q=H.b([],q)
s.a.push(new K.ac(q))
s=new K.u(H.b([],r))
s.p(new H.r("*"))
q.push(s)
s=a4.k(0,a2).j(0,a0)
q=new K.u(H.b([],r))
q.p(new H.r("/"))
s.a.push(q)
q=a4.k(0,o).j(0,a3)
s=new K.u(H.b([],r))
s.p(new H.r(" \n\t"))
q.a.push(s)
s=a4.k(0,a3).j(0,a3)
r=new K.u(H.b([],r))
r.p(new H.r(" \n\t"))
s.a.push(r)
r=a4.k(0,m)
r.d=r.a.R("Num")
r=a4.k(0,k)
r.d=r.a.R("Num")
r=a4.k(0,j)
r.d=r.a.R("Symbol")
r=a4.k(0,g)
r.d=r.a.R("String")
r=a4.k(0,d)
r.d=r.a.R("String")
r=a4.k(0,a0)
r.d=r.a.R(a)
r=a4.k(0,a3)
r.d=r.a.R(a3)
r=a4.k(0,n)
r=r.d=r.a.R(n)
s=t.s
r.aM(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aM(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aM(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a4}}
V.ew.prototype={
bD:function(a){var s=this
switch(a.a){case"Builtin":s.P(a.b,"#411")
break
case"Comment":s.P(a.b,"#777")
break
case"Id":s.P(a.b,"#111")
break
case"Num":s.P(a.b,"#191")
break
case"Preprocess":s.P(a.b,"#737")
break
case"Reserved":s.P(a.b,"#119")
break
case"Symbol":s.P(a.b,"#611")
break
case"Type":s.P(a.b,"#171")
break
case"Whitespace":s.P(a.b,"#111")
break}},
bw:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()[]\\-+*%!&|=.,?:;",h="Slash",g="Comment",f="EndComment",e="Preprocess",d="EndPreprocess",c="Whitespace",b=L.jp()
b.d=b.k(0,o)
s=b.k(0,o).j(0,n)
r=t.t
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.Q("a","z"))
s.push(K.Q("A","Z"))
s=b.k(0,n).j(0,n)
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.Q("0","9"))
s.push(K.Q("a","z"))
s.push(K.Q("A","Z"))
b.k(0,o).j(0,m).a.push(K.Q("0","9"))
b.k(0,m).j(0,m).a.push(K.Q("0","9"))
s=b.k(0,m).j(0,l)
q=new K.u(H.b([],r))
q.p(new H.r("."))
s.a.push(q)
b.k(0,l).j(0,k).a.push(K.Q("0","9"))
b.k(0,k).j(0,k).a.push(K.Q("0","9"))
q=b.k(0,o).j(0,j)
s=new K.u(H.b([],r))
s.p(new H.r(i))
q.a.push(s)
s=b.k(0,j).j(0,j)
q=new K.u(H.b([],r))
q.p(new H.r(i))
s.a.push(q)
q=b.k(0,o).j(0,h)
s=new K.u(H.b([],r))
s.p(new H.r("/"))
q.a.push(s)
s=b.k(0,h).j(0,g)
q=new K.u(H.b([],r))
q.p(new H.r("/"))
s.a.push(q)
b.k(0,h).j(0,j).a.push(new K.aN())
q=b.k(0,g).j(0,f)
s=new K.u(H.b([],r))
s.p(new H.r("\n"))
q.a.push(s)
s=b.k(0,g).j(0,g)
q=t.z
p=H.b([],q)
s.a.push(new K.ac(p))
s=new K.u(H.b([],r))
s.p(new H.r("\n"))
p.push(s)
s=b.k(0,o).j(0,e)
p=new K.u(H.b([],r))
p.p(new H.r("#"))
s.a.push(p)
p=b.k(0,e).j(0,e)
q=H.b([],q)
p.a.push(new K.ac(q))
p=new K.u(H.b([],r))
p.p(new H.r("\n"))
q.push(p)
p=b.k(0,e).j(0,d)
q=new K.u(H.b([],r))
q.p(new H.r("\n"))
p.a.push(q)
q=b.k(0,o).j(0,c)
p=new K.u(H.b([],r))
p.p(new H.r(" \n\t"))
q.a.push(p)
p=b.k(0,c).j(0,c)
r=new K.u(H.b([],r))
r.p(new H.r(" \n\t"))
p.a.push(r)
r=b.k(0,m)
r.d=r.a.R("Num")
r=b.k(0,k)
r.d=r.a.R("Num")
r=b.k(0,j)
r.d=r.a.R("Symbol")
r=b.k(0,f)
r.d=r.a.R(g)
r=b.k(0,d)
r.d=r.a.R(e)
r=b.k(0,c)
r.d=r.a.R(c)
r=b.k(0,n)
r=r.d=r.a.R(n)
p=t.s
r.aM(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],p))
r.aM(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],p))
r.aM(0,"Builtin",H.b(["gl_FragColor","gl_Position"],p))
return b}}
V.ex.prototype={
bD:function(a){var s=this,r="#111"
switch(a.a){case"Attr":s.P(a.b,"#911")
s.P("=",r)
break
case"Id":s.P(a.b,r)
break
case"Other":s.P(a.b,r)
break
case"Reserved":s.P(a.b,"#119")
break
case"String":s.P(a.b,"#171")
break
case"Symbol":s.P(a.b,"#616")
break}},
bw:function(){var s,r,q,p="Start",o="Id",n="Attr",m="Sym",l="OpenStr",k="CloseStr",j="Other",i=L.jp()
i.d=i.k(0,p)
s=i.k(0,p).j(0,o)
r=t.t
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.Q("a","z"))
s.push(K.Q("A","Z"))
s=i.k(0,o).j(0,o)
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.Q("0","9"))
s.push(K.Q("a","z"))
s.push(K.Q("A","Z"))
s=i.k(0,o).j(0,n)
q=new K.u(H.b([],r))
q.p(new H.r("="))
s.a.push(q)
s.c=!0
s=i.k(0,p).j(0,m)
q=new K.u(H.b([],r))
q.p(new H.r("</\\-!>="))
s.a.push(q)
q=i.k(0,m).j(0,m)
s=new K.u(H.b([],r))
s.p(new H.r("</\\-!>="))
q.a.push(s)
s=i.k(0,p).j(0,l)
q=new K.u(H.b([],r))
q.p(new H.r('"'))
s.a.push(q)
q=i.k(0,l).j(0,k)
s=new K.u(H.b([],r))
s.p(new H.r('"'))
q.a.push(s)
s=i.k(0,l).j(0,"EscStr")
q=new K.u(H.b([],r))
q.p(new H.r("\\"))
s.a.push(q)
q=i.k(0,"EscStr").j(0,l)
s=new K.u(H.b([],r))
s.p(new H.r('"'))
q.a.push(s)
i.k(0,l).j(0,l).a.push(new K.aN())
i.k(0,p).j(0,j).a.push(new K.aN())
s=i.k(0,j).j(0,j)
q=H.b([],t.z)
s.a.push(new K.ac(q))
r=new K.u(H.b([],r))
r.p(new H.r('</\\-!>=_"'))
q.push(r)
q.push(K.Q("a","z"))
q.push(K.Q("A","Z"))
q=i.k(0,m)
q.d=q.a.R("Symbol")
q=i.k(0,k)
q.d=q.a.R("String")
q=i.k(0,o)
r=q.a.R(o)
q.d=r
r.aM(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],t.s))
r=i.k(0,n)
r.d=r.a.R(n)
r=i.k(0,j)
r.d=r.a.R(j)
return i}}
V.eZ.prototype={
e6:function(a,b){this.d=H.b([],t.F)
this.P(C.b.j(b,"\n"),"#111")},
bD:function(a){},
bw:function(){return null}}
V.j2.prototype={
df:function(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=l.a,j=P.mp().gcB().h(0,k)
if(j==null)if(d){c.$0()
l.dd(b)
s=!0}else s=!1
else if(j===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
p=l.c
o=J.aL(p)
o.gbu(p).n(0,q)
n=W.o_("radio")
n.checked=s
n.name=k
W.a4(n,"change",new V.j3(l,n,c,b),!1)
q.children.toString
q.appendChild(n).toString
m=r.createElement("span")
m.textContent=b
q.appendChild(m).toString
p=o.gbu(p)
r=r.createElement("br")
r.toString
p.n(0,r)},
bf:function(a,b,c){return this.df(a,b,c,!1)},
dd:function(a){var s,r,q=P.mp(),p=t.N,o=P.o8(q.gcB(),p,p)
o.m(0,this.a,a)
s=q.ec(0,o)
p=window.history
p.toString
r=s.gc5()
p.replaceState(new P.k8([],[]).bG(""),"",r)}}
V.j3.prototype={
$1:function(a){var s=this,r=s.b.checked
if(r===!0){s.c.$0()
s.a.dd(s.d)}},
$S:3}
V.jb.prototype={
dh:function(a){var s,r,q,p,o,n,m=this.he(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.r(C.b.hY(a)),s=new P.bL(m.cH(new H.bd(s,s.gl(s))).a());s.u();){r=s.gB(s)
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
if(H.nd(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.kg(C.w,r,C.e,!1)
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
em:function(a){var s,r,q,p=t.F,o=new V.ep("dart",H.b([],p))
o.bq("dart")
s=new V.ew("glsl",H.b([],p))
s.bq("glsl")
r=new V.ex("html",H.b([],p))
r.bq("html")
q=C.b.hR(H.b([o,s,r],t.g6),new V.je(a))
if(q!=null)return q
p=new V.eZ("plain",H.b([],p))
p.bq("plain")
return p},
dg:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.b([],t.t)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(C.a.a0(q,"+")){b2[r]=C.a.a8(q,1)
a8.push(1)
s=!0}else if(C.a.a0(q,"-")){b2[r]=C.a.a8(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.em(b0)
p.e6(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m).toString
this.a.appendChild(n).toString
l=P.kg(C.w,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.lP()
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
for(a4=C.b.gS(q);a4.u();)b.appendChild(a4.gB(a4)).toString
d.appendChild(c).toString
d.appendChild(b).toString
m.appendChild(d).toString}},
hp:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
f=L.jp()
f.d=f.k(0,o)
s=f.k(0,o).j(0,n)
r=t.t
q=new K.u(H.b([],r))
q.p(new H.r("*"))
s.a.push(q)
s.c=!0
s=f.k(0,n).j(0,n)
q=t.z
p=H.b([],q)
s.a.push(new K.ac(p))
s=new K.u(H.b([],r))
s.p(new H.r("*"))
p.push(s)
s=f.k(0,n).j(0,"BoldEnd")
p=new K.u(H.b([],r))
p.p(new H.r("*"))
s.a.push(p)
s.c=!0
s=f.k(0,o).j(0,m)
p=new K.u(H.b([],r))
p.p(new H.r("_"))
s.a.push(p)
s.c=!0
s=f.k(0,m).j(0,m)
p=H.b([],q)
s.a.push(new K.ac(p))
s=new K.u(H.b([],r))
s.p(new H.r("_"))
p.push(s)
s=f.k(0,m).j(0,l)
p=new K.u(H.b([],r))
p.p(new H.r("_"))
s.a.push(p)
s.c=!0
s=f.k(0,o).j(0,k)
p=new K.u(H.b([],r))
p.p(new H.r("`"))
s.a.push(p)
s.c=!0
s=f.k(0,k).j(0,k)
p=H.b([],q)
s.a.push(new K.ac(p))
s=new K.u(H.b([],r))
s.p(new H.r("`"))
p.push(s)
s=f.k(0,k).j(0,"CodeEnd")
p=new K.u(H.b([],r))
p.p(new H.r("`"))
s.a.push(p)
s.c=!0
s=f.k(0,o).j(0,j)
p=new K.u(H.b([],r))
p.p(new H.r("["))
s.a.push(p)
s.c=!0
s=f.k(0,j).j(0,i)
p=new K.u(H.b([],r))
p.p(new H.r("|"))
s.a.push(p)
p=f.k(0,j).j(0,h)
s=new K.u(H.b([],r))
s.p(new H.r("]"))
p.a.push(s)
p.c=!0
p=f.k(0,j).j(0,j)
s=H.b([],q)
p.a.push(new K.ac(s))
p=new K.u(H.b([],r))
p.p(new H.r("|]"))
s.push(p)
p=f.k(0,i).j(0,h)
s=new K.u(H.b([],r))
s.p(new H.r("]"))
p.a.push(s)
p.c=!0
p=f.k(0,i).j(0,i)
s=H.b([],q)
p.a.push(new K.ac(s))
p=new K.u(H.b([],r))
p.p(new H.r("|]"))
s.push(p)
f.k(0,o).j(0,g).a.push(new K.aN())
p=f.k(0,g).j(0,g)
q=H.b([],q)
p.a.push(new K.ac(q))
r=new K.u(H.b([],r))
r.p(new H.r("*_`["))
q.push(r)
r=f.k(0,"BoldEnd")
r.d=r.a.R(n)
r=f.k(0,l)
r.d=r.a.R(m)
r=f.k(0,"CodeEnd")
r.d=r.a.R(k)
r=f.k(0,h)
r.d=r.a.R("Link")
r=f.k(0,g)
r.d=r.a.R(g)
return this.b=f}}
V.jd.prototype={
$1:function(a){P.ml(C.m,new V.jc(this.a))},
$S:3}
V.jc.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.ar(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.x(-0.01*s)+"px"
q.top=r},
$S:2}
V.je.prototype={
$1:function(a){var s=a==null?null:a.a
return s===this.a},
$S:55}
K.kO.prototype={
$1:function(a){var s,r,q=t.gC.a(a).c,p=this.a,o=this.b.aA(0,q,null)
if(!J.K(p.d,o)){s=p.d
r=s==null&&!0
if(r)p.a=null
p.d=o
p.X(new D.G("colorMatrix",s,o))}o=V.oc(this.c.aA(0,q,null))
if(!J.K(p.b,o)){s=p.b
r=s==null&&!0
if(r)p.a=null
p.b=o
p.X(new D.G("texture2DMatrix",s,o))}},
$S:0}
K.kP.prototype={
$0:function(){this.a.san(0,F.lC(1,null,null,1))},
$S:2}
K.kQ.prototype={
$0:function(){this.a.san(0,F.n1(!0,40,1))},
$S:2}
K.kR.prototype={
$0:function(){this.a.san(0,F.n1(!1,40,0))},
$S:2}
K.kS.prototype={
$0:function(){this.a.san(0,F.qA(6,6))},
$S:2}
K.kT.prototype={
$0:function(){this.a.san(0,F.ne())},
$S:2}
K.kU.prototype={
$0:function(){this.a.san(0,F.qu())},
$S:2}
K.kV.prototype={
$1:function(a){var s,r=this.a,q=this.b,p=q.a
p=p==null?null:p.c
s=t.s
r.dg("Vertex Shader","glsl",0,H.b((p==null?"":p).split("\n"),s))
q=q.a
q=q==null?null:q.d
r.dg("Fragment Shader","glsl",0,H.b((q==null?"":q).split("\n"),s))},
$S:0};(function aliases(){var s=J.a.prototype
s.eu=s.i
s=J.bc.prototype
s.ew=s.i
s=P.j.prototype
s.ev=s.bH
s=W.E.prototype
s.bK=s.ag
s=W.dQ.prototype
s.ex=s.aw
s=K.cO.prototype
s.es=s.aK
s.bL=s.i
s=O.d3.prototype
s.cM=s.aG
s=O.d4.prototype
s.cN=s.aG})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"pw","o4",56)
r(P,"qa","oI",13)
r(P,"qb","oJ",13)
r(P,"qc","oK",13)
q(P,"n_","q5",2)
r(W,"rL","ie",58)
p(W,"qn",4,null,["$4"],["oL"],22,0)
p(W,"qo",4,null,["$4"],["oM"],22,0)
var j
o(j=E.bB.prototype,"ge4",0,0,null,["$1","$0"],["e5","i8"],1,0)
o(j,"ge2",0,0,null,["$1","$0"],["e3","i7"],1,0)
o(j,"ge0",0,0,null,["$1","$0"],["e1","i4"],1,0)
n(j,"gi2","i3",9)
n(j,"gi5","i6",9)
o(j=E.fp.prototype,"gcO",0,0,null,["$1","$0"],["cQ","cP"],1,0)
m(j,"gio","ed",2)
l(j=X.fG.prototype,"gfw","fz",3)
l(j,"gfj","fk",3)
l(j,"gfp","fq",4)
l(j,"gfC","fD",24)
l(j,"gfA","fB",24)
l(j,"gfG","fH",4)
l(j,"gfK","fL",4)
l(j,"gfu","fv",4)
l(j,"gfI","fJ",4)
l(j,"gfs","ft",4)
l(j,"gfM","fN",36)
l(j,"gfO","fP",3)
l(j,"gh0","h1",11)
l(j,"gfX","fY",11)
l(j,"gfZ","h_",11)
o(D.bV.prototype,"gcR",0,0,null,["$1","$0"],["aC","eF"],1,0)
o(j=D.cT.prototype,"gd1",0,0,null,["$1","$0"],["d2","fE"],1,0)
l(j,"gfR","fS",38)
n(j,"gfd","fe",16)
n(j,"gfV","fW",16)
k(V.aq.prototype,"gl","ct",20)
k(V.D.prototype,"gl","ct",20)
o(j=U.bY.prototype,"gbr",0,0,null,["$1","$0"],["T","au"],1,0)
n(j,"gfb","fc",19)
n(j,"gfT","fU",19)
o(j=U.dB.prototype,"gbr",0,0,null,["$1","$0"],["T","au"],1,0)
l(j,"gf5","f6",0)
l(j,"gf7","f8",0)
l(j,"gf9","fa",0)
l(j,"gf0","f1",0)
l(j,"gf2","f3",0)
l(j,"ghl","hm",0)
l(j,"ghj","hk",0)
l(j,"ghh","hi",0)
o(j=M.es.prototype,"gav",0,0,null,["$1","$0"],["aD","eG"],1,0)
n(j,"gfl","fm",9)
n(j,"gfn","fo",9)
o(j=O.d2.prototype,"gbc",0,0,null,["$1","$0"],["X","bX"],1,0)
o(j,"gd3",0,0,null,["$1","$0"],["d4","h7"],1,0)
n(j,"gff","fg",21)
n(j,"gfh","fi",21)
o(O.d3.prototype,"gbc",0,0,null,["$1","$0"],["X","bX"],1,0)
o(X.eX.prototype,"gcS",0,0,null,["$1","$0"],["aU","eK"],1,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.P,null)
q(P.P,[H.la,J.a,J.ak,P.L,P.dJ,P.j,H.bd,P.ez,H.cL,H.fD,H.cE,H.js,H.j0,H.hp,H.bz,P.M,H.iA,H.eH,H.eC,H.aA,H.h1,P.dW,P.cp,P.bL,P.fL,P.cb,P.ff,P.kk,P.e2,P.k0,P.dI,P.k,P.hE,P.d0,P.dg,P.ek,P.iu,P.ki,P.kh,P.Z,P.bA,P.eW,P.dk,P.fZ,P.iq,P.af,P.a_,P.bM,P.jx,P.hj,W.i5,W.l6,W.lm,W.co,W.N,W.da,W.dQ,W.hu,W.cM,W.k4,W.hF,P.k7,P.dY,P.hh,K.aN,K.cO,K.f2,K.u,L.fc,L.fq,L.fr,L.jo,O.al,O.d5,E.i0,E.bB,E.bT,E.c6,E.fX,E.j4,D.X,E.fp,Z.fJ,Z.jT,Z.cA,Z.c_,Z.bl,D.i2,D.bW,X.cB,X.eE,X.iy,X.iE,X.bg,X.iX,X.jq,X.fG,D.bV,V.V,V.aP,V.ii,V.c2,V.be,V.a1,V.U,V.bH,V.f4,V.aq,V.D,U.dB,M.es,A.eh,A.hW,A.as,A.b4,A.b6,A.bh,A.bj,A.iI,A.du,A.dv,A.dx,A.dA,A.a2,A.jv,F.au,F.im,F.eG,F.iz,F.f0,F.j9,F.di,F.dj,F.bI,F.cj,F.y,F.ck,F.cl,F.jP,F.jQ,F.dD,O.dn,O.d3,O.iJ,T.jj,X.ji,X.eX,V.aH,V.j2,V.jb])
q(J.a,[J.eA,J.cR,J.bc,J.w,J.c1,J.bb,H.d6,H.a0,W.e,W.hU,W.bw,W.cC,W.aQ,W.J,W.fQ,W.at,W.i8,W.i9,W.fS,W.cI,W.fU,W.ia,W.m,W.h_,W.av,W.is,W.h3,W.bD,W.iD,W.iU,W.h7,W.h8,W.ax,W.h9,W.hb,W.ay,W.hf,W.hi,W.aB,W.hk,W.aC,W.hq,W.ah,W.hw,W.jm,W.ap,W.hy,W.jr,W.jC,W.hG,W.hI,W.hK,W.hM,W.hO,P.aS,P.h5,P.aW,P.hd,P.j1,P.hr,P.aY,P.hA,P.hX,P.fN,P.c8,P.hn])
q(J.bc,[J.eY,J.bK,J.aR])
r(J.iw,J.w)
q(J.c1,[J.cQ,J.eB])
q(P.L,[H.cS,P.fu,H.eD,H.fC,H.f6,H.fY,P.eg,P.eT,P.aF,P.fE,P.fB,P.ca,P.el,P.eo])
r(P.cW,P.dJ)
q(P.cW,[H.ch,W.fO,W.a5,P.eu])
r(H.r,H.ch)
q(P.j,[H.n,H.aT,H.b0,P.cP])
q(H.n,[H.cX,H.cU])
r(H.cJ,H.aT)
q(P.ez,[H.eI,H.fK])
r(H.d1,H.cX)
r(H.cF,H.cE)
r(H.db,P.fu)
q(H.bz,[H.fk,H.ix,H.kI,H.kJ,H.kK,P.jV,P.jU,P.jW,P.jX,P.kd,P.kc,P.ky,P.k2,P.k3,P.iB,P.iF,P.jG,P.jF,P.ib,P.ic,P.jB,P.jy,P.jz,P.jA,P.kf,P.ke,P.kr,P.ks,P.kt,W.id,W.iV,W.iW,W.j8,W.jg,W.jY,W.iZ,W.iY,W.k5,W.k6,W.kb,W.kj,P.k9,P.ka,P.kp,P.kz,P.io,P.ip,P.hY,E.j5,E.j6,E.j7,E.jl,D.ik,D.il,F.kl,F.kA,F.kC,F.kD,F.kE,F.kZ,F.kY,F.l_,F.kN,F.kB,F.ja,F.jS,F.jR,F.jM,F.jN,O.iM,O.iN,O.iO,O.iP,O.iQ,O.iR,O.iS,O.iT,T.jk,V.kX,V.j3,V.jd,V.jc,V.je,K.kO,K.kP,K.kQ,K.kR,K.kS,K.kT,K.kU,K.kV])
q(H.fk,[H.fd,H.bS])
r(P.d_,P.M)
q(P.d_,[H.Y,W.fM])
r(H.c5,H.a0)
q(H.c5,[H.dL,H.dN])
r(H.dM,H.dL)
r(H.bF,H.dM)
r(H.dO,H.dN)
r(H.d7,H.dO)
q(H.d7,[H.eO,H.eP,H.eQ,H.eR,H.eS,H.d8,H.bG])
r(H.dX,H.fY)
r(P.dT,P.cP)
r(P.k1,P.kk)
r(P.dP,P.e2)
r(P.dH,P.dP)
r(P.e0,P.d0)
r(P.ci,P.e0)
q(P.ek,[P.hZ,P.ig])
r(P.en,P.ff)
q(P.en,[P.i_,P.it,P.jH,P.jE])
r(P.jD,P.ig)
q(P.aF,[P.de,P.ey])
r(P.fR,P.bM)
q(W.e,[W.t,W.et,W.c3,W.an,W.dR,W.ao,W.ad,W.dU,W.fI,W.cm,P.ej,P.b5])
q(W.t,[W.E,W.aG,W.cn])
q(W.E,[W.v,P.o])
q(W.v,[W.ee,W.ef,W.bR,W.bx,W.by,W.b7,W.ev,W.bZ,W.c0,W.f7,W.bk,W.dm,W.fi,W.fj,W.cc])
r(W.i4,W.aQ)
r(W.cG,W.fQ)
q(W.at,[W.i6,W.i7])
r(W.fT,W.fS)
r(W.cH,W.fT)
r(W.fV,W.fU)
r(W.er,W.fV)
r(W.ae,W.bw)
r(W.h0,W.h_)
r(W.bX,W.h0)
r(W.h4,W.h3)
r(W.bC,W.h4)
r(W.b_,W.m)
q(W.b_,[W.bE,W.am,W.bJ])
r(W.eL,W.h7)
r(W.eM,W.h8)
r(W.ha,W.h9)
r(W.eN,W.ha)
r(W.hc,W.hb)
r(W.d9,W.hc)
r(W.hg,W.hf)
r(W.f_,W.hg)
r(W.f5,W.hi)
r(W.dS,W.dR)
r(W.f9,W.dS)
r(W.hl,W.hk)
r(W.fa,W.hl)
r(W.fe,W.hq)
r(W.hx,W.hw)
r(W.fl,W.hx)
r(W.dV,W.dU)
r(W.fm,W.dV)
r(W.hz,W.hy)
r(W.fs,W.hz)
r(W.bm,W.am)
r(W.hH,W.hG)
r(W.fP,W.hH)
r(W.dE,W.cI)
r(W.hJ,W.hI)
r(W.h2,W.hJ)
r(W.hL,W.hK)
r(W.dK,W.hL)
r(W.hN,W.hM)
r(W.hm,W.hN)
r(W.hP,W.hO)
r(W.ht,W.hP)
r(W.fW,W.fM)
r(W.dF,P.cb)
r(W.hv,W.dQ)
r(P.k8,P.k7)
r(P.a9,P.hh)
r(P.h6,P.h5)
r(P.eF,P.h6)
r(P.he,P.hd)
r(P.eU,P.he)
r(P.c9,P.o)
r(P.hs,P.hr)
r(P.fg,P.hs)
r(P.hB,P.hA)
r(P.ft,P.hB)
r(P.ei,P.fN)
r(P.eV,P.b5)
r(P.ho,P.hn)
r(P.fb,P.ho)
q(K.cO,[K.ac,L.dq])
q(D.X,[E.dl,D.b9,D.ba,D.G,X.f1])
q(E.i0,[Z.bU,A.dh,T.cd])
q(X.f1,[X.cZ,X.c4,X.dp])
q(O.al,[D.cT,U.bY])
q(D.i2,[U.i3,U.a7])
q(U.a7,[U.cD,U.df])
r(A.eJ,A.dh)
q(A.a2,[A.cf,A.fx,A.fy,A.fz,A.fv,A.dr,A.fw,A.ds,A.dt,A.fA,A.dw,A.cg,A.dy,A.dz])
r(F.jf,F.im)
r(F.ju,F.iz)
r(F.jO,F.jP)
r(F.j_,F.jQ)
r(O.d2,O.dn)
q(O.d3,[O.iG,O.iH,O.d4])
q(O.d4,[O.iK,O.iL])
r(T.fn,T.cd)
r(T.fo,T.fn)
r(X.ir,X.ji)
q(V.aH,[V.ep,V.ew,V.ex,V.eZ])
s(H.ch,H.fD)
s(H.dL,P.k)
s(H.dM,H.cL)
s(H.dN,P.k)
s(H.dO,H.cL)
s(P.dJ,P.k)
s(P.e0,P.hE)
s(P.e2,P.dg)
s(W.fQ,W.i5)
s(W.fS,P.k)
s(W.fT,W.N)
s(W.fU,P.k)
s(W.fV,W.N)
s(W.h_,P.k)
s(W.h0,W.N)
s(W.h3,P.k)
s(W.h4,W.N)
s(W.h7,P.M)
s(W.h8,P.M)
s(W.h9,P.k)
s(W.ha,W.N)
s(W.hb,P.k)
s(W.hc,W.N)
s(W.hf,P.k)
s(W.hg,W.N)
s(W.hi,P.M)
s(W.dR,P.k)
s(W.dS,W.N)
s(W.hk,P.k)
s(W.hl,W.N)
s(W.hq,P.M)
s(W.hw,P.k)
s(W.hx,W.N)
s(W.dU,P.k)
s(W.dV,W.N)
s(W.hy,P.k)
s(W.hz,W.N)
s(W.hG,P.k)
s(W.hH,W.N)
s(W.hI,P.k)
s(W.hJ,W.N)
s(W.hK,P.k)
s(W.hL,W.N)
s(W.hM,P.k)
s(W.hN,W.N)
s(W.hO,P.k)
s(W.hP,W.N)
s(P.h5,P.k)
s(P.h6,W.N)
s(P.hd,P.k)
s(P.he,W.N)
s(P.hr,P.k)
s(P.hs,W.N)
s(P.hA,P.k)
s(P.hB,W.N)
s(P.fN,P.M)
s(P.hn,P.k)
s(P.ho,W.N)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",H:"double",a3:"num",l:"String",ab:"bool",af:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~(X)","~([X?])","~()","~(m)","~(am)","~(l,@)","~(i,i)","~(cj,H,H)","~(au)","~(i,j<bB>)","~(@,@)","~(bJ)","af()","~(~())","U(H)","@()","~(i,j<aw>)","H(H)","H(H,H)","~(i,j<a7?>)","H()","~(i,j<be>)","ab(E,l,l,co)","~(ce,l,i)","~(bE)","ab(aJ)","ab(l)","~(~(X))","ab(t)","l(i)","~(@)","af(@,@)","~(a3)","~(t,t?)","l(l)","~(l,l)","~(bm)","@(@)","ab(j<aw>)","ce(@,@)","~(l,l?)","i(i,i)","~(l[@])","~(l,i)","I<l,l>(I<l,l>,l)","~(P?,P?)","bU(i)","af(~())","af(@)","@(l)","i(b4,b4)","i(b6,b6)","i(bh,bh)","i(bj,bj)","~(jn)","ab(aH?)","i(@,@)","@(@,l)","l(e)","E(t)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.p3(v.typeUniverse,JSON.parse('{"eY":"bc","bK":"bc","aR":"bc","qG":"m","qS":"m","qI":"b5","qH":"e","qZ":"e","r1":"e","qF":"o","qT":"o","qJ":"v","qW":"v","qU":"t","qR":"t","rr":"ad","qN":"b_","qK":"aG","r2":"aG","r0":"am","qV":"bC","qO":"J","qP":"ah","qY":"bF","qX":"a0","eA":{"ab":[]},"bc":{"m0":[]},"w":{"p":["1"],"n":["1"],"j":["1"],"z":["1"]},"iw":{"w":["1"],"p":["1"],"n":["1"],"j":["1"],"z":["1"]},"c1":{"H":[],"a3":[]},"cQ":{"H":[],"i":[],"a3":[]},"eB":{"H":[],"a3":[]},"bb":{"l":[],"z":["@"]},"cS":{"L":[]},"r":{"k":["i"],"p":["i"],"n":["i"],"j":["i"],"k.E":"i"},"n":{"j":["1"]},"cX":{"n":["1"],"j":["1"]},"aT":{"j":["2"],"j.E":"2"},"cJ":{"aT":["1","2"],"n":["2"],"j":["2"],"j.E":"2"},"d1":{"cX":["2"],"n":["2"],"j":["2"],"j.E":"2"},"b0":{"j":["1"],"j.E":"1"},"ch":{"k":["1"],"p":["1"],"n":["1"],"j":["1"]},"cE":{"I":["1","2"]},"cF":{"I":["1","2"]},"db":{"L":[]},"eD":{"L":[]},"fC":{"L":[]},"bz":{"cN":[]},"fk":{"cN":[]},"fd":{"cN":[]},"bS":{"cN":[]},"f6":{"L":[]},"Y":{"M":["1","2"],"I":["1","2"],"M.V":"2"},"cU":{"n":["1"],"j":["1"],"j.E":"1"},"eC":{"mc":[]},"c5":{"B":["1"],"a0":[],"z":["1"]},"bF":{"k":["H"],"B":["H"],"p":["H"],"a0":[],"n":["H"],"z":["H"],"j":["H"],"k.E":"H"},"d7":{"k":["i"],"B":["i"],"p":["i"],"a0":[],"n":["i"],"z":["i"],"j":["i"]},"eO":{"k":["i"],"B":["i"],"p":["i"],"a0":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"eP":{"k":["i"],"B":["i"],"p":["i"],"a0":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"eQ":{"k":["i"],"B":["i"],"p":["i"],"a0":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"eR":{"k":["i"],"B":["i"],"p":["i"],"a0":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"eS":{"k":["i"],"B":["i"],"p":["i"],"a0":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"d8":{"k":["i"],"B":["i"],"p":["i"],"a0":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"bG":{"k":["i"],"ce":[],"B":["i"],"p":["i"],"a0":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"fY":{"L":[]},"dX":{"L":[]},"dW":{"jn":[]},"dT":{"j":["1"],"j.E":"1"},"dH":{"dg":["1"],"n":["1"],"j":["1"]},"cP":{"j":["1"]},"cW":{"k":["1"],"p":["1"],"n":["1"],"j":["1"]},"d_":{"M":["1","2"],"I":["1","2"]},"M":{"I":["1","2"]},"d0":{"I":["1","2"]},"ci":{"I":["1","2"]},"dP":{"dg":["1"],"n":["1"],"j":["1"]},"H":{"a3":[]},"i":{"a3":[]},"p":{"n":["1"],"j":["1"]},"eg":{"L":[]},"fu":{"L":[]},"eT":{"L":[]},"aF":{"L":[]},"de":{"L":[]},"ey":{"L":[]},"fE":{"L":[]},"fB":{"L":[]},"ca":{"L":[]},"el":{"L":[]},"eW":{"L":[]},"dk":{"L":[]},"eo":{"L":[]},"bM":{"fF":[]},"hj":{"fF":[]},"fR":{"fF":[]},"v":{"E":[],"t":[],"e":[]},"b7":{"E":[],"t":[],"e":[]},"E":{"t":[],"e":[]},"ae":{"bw":[]},"bE":{"m":[]},"am":{"m":[]},"t":{"e":[]},"an":{"e":[]},"ao":{"e":[]},"ad":{"e":[]},"bJ":{"m":[]},"b_":{"m":[]},"bm":{"am":[],"m":[]},"co":{"aJ":[]},"ee":{"E":[],"t":[],"e":[]},"ef":{"E":[],"t":[],"e":[]},"bR":{"E":[],"t":[],"e":[]},"bx":{"E":[],"t":[],"e":[]},"by":{"E":[],"t":[],"e":[]},"aG":{"t":[],"e":[]},"cH":{"k":["a9<a3>"],"p":["a9<a3>"],"B":["a9<a3>"],"n":["a9<a3>"],"j":["a9<a3>"],"z":["a9<a3>"],"k.E":"a9<a3>"},"cI":{"a9":["a3"]},"er":{"k":["l"],"p":["l"],"B":["l"],"n":["l"],"j":["l"],"z":["l"],"k.E":"l"},"fO":{"k":["E"],"p":["E"],"n":["E"],"j":["E"],"k.E":"E"},"bX":{"k":["ae"],"p":["ae"],"B":["ae"],"n":["ae"],"j":["ae"],"z":["ae"],"k.E":"ae"},"et":{"e":[]},"ev":{"E":[],"t":[],"e":[]},"bC":{"k":["t"],"p":["t"],"B":["t"],"n":["t"],"j":["t"],"z":["t"],"k.E":"t"},"bZ":{"E":[],"t":[],"e":[]},"c0":{"E":[],"t":[],"e":[]},"c3":{"e":[]},"eL":{"M":["l","@"],"I":["l","@"],"M.V":"@"},"eM":{"M":["l","@"],"I":["l","@"],"M.V":"@"},"eN":{"k":["ax"],"p":["ax"],"B":["ax"],"n":["ax"],"j":["ax"],"z":["ax"],"k.E":"ax"},"a5":{"k":["t"],"p":["t"],"n":["t"],"j":["t"],"k.E":"t"},"d9":{"k":["t"],"p":["t"],"B":["t"],"n":["t"],"j":["t"],"z":["t"],"k.E":"t"},"f_":{"k":["ay"],"p":["ay"],"B":["ay"],"n":["ay"],"j":["ay"],"z":["ay"],"k.E":"ay"},"f5":{"M":["l","@"],"I":["l","@"],"M.V":"@"},"f7":{"E":[],"t":[],"e":[]},"f9":{"k":["an"],"p":["an"],"B":["an"],"e":[],"n":["an"],"j":["an"],"z":["an"],"k.E":"an"},"fa":{"k":["aB"],"p":["aB"],"B":["aB"],"n":["aB"],"j":["aB"],"z":["aB"],"k.E":"aB"},"fe":{"M":["l","l"],"I":["l","l"],"M.V":"l"},"bk":{"E":[],"t":[],"e":[]},"dm":{"E":[],"t":[],"e":[]},"fi":{"E":[],"t":[],"e":[]},"fj":{"E":[],"t":[],"e":[]},"cc":{"E":[],"t":[],"e":[]},"fl":{"k":["ad"],"p":["ad"],"B":["ad"],"n":["ad"],"j":["ad"],"z":["ad"],"k.E":"ad"},"fm":{"k":["ao"],"p":["ao"],"B":["ao"],"e":[],"n":["ao"],"j":["ao"],"z":["ao"],"k.E":"ao"},"fs":{"k":["ap"],"p":["ap"],"B":["ap"],"n":["ap"],"j":["ap"],"z":["ap"],"k.E":"ap"},"fI":{"e":[]},"cm":{"e":[]},"cn":{"t":[],"e":[]},"fP":{"k":["J"],"p":["J"],"B":["J"],"n":["J"],"j":["J"],"z":["J"],"k.E":"J"},"dE":{"a9":["a3"]},"h2":{"k":["av?"],"p":["av?"],"B":["av?"],"n":["av?"],"j":["av?"],"z":["av?"],"k.E":"av?"},"dK":{"k":["t"],"p":["t"],"B":["t"],"n":["t"],"j":["t"],"z":["t"],"k.E":"t"},"hm":{"k":["aC"],"p":["aC"],"B":["aC"],"n":["aC"],"j":["aC"],"z":["aC"],"k.E":"aC"},"ht":{"k":["ah"],"p":["ah"],"B":["ah"],"n":["ah"],"j":["ah"],"z":["ah"],"k.E":"ah"},"fM":{"M":["l","l"],"I":["l","l"]},"fW":{"M":["l","l"],"I":["l","l"],"M.V":"l"},"dF":{"cb":["1"]},"da":{"aJ":[]},"dQ":{"aJ":[]},"hv":{"aJ":[]},"hu":{"aJ":[]},"dY":{"bD":[]},"eu":{"k":["E"],"p":["E"],"n":["E"],"j":["E"],"k.E":"E"},"a9":{"hh":["1"]},"eF":{"k":["aS"],"p":["aS"],"n":["aS"],"j":["aS"],"k.E":"aS"},"eU":{"k":["aW"],"p":["aW"],"n":["aW"],"j":["aW"],"k.E":"aW"},"c9":{"o":[],"E":[],"t":[],"e":[]},"fg":{"k":["l"],"p":["l"],"n":["l"],"j":["l"],"k.E":"l"},"o":{"E":[],"t":[],"e":[]},"ft":{"k":["aY"],"p":["aY"],"n":["aY"],"j":["aY"],"k.E":"aY"},"ei":{"M":["l","@"],"I":["l","@"],"M.V":"@"},"ej":{"e":[]},"b5":{"e":[]},"eV":{"e":[]},"fb":{"k":["I<@,@>"],"p":["I<@,@>"],"n":["I<@,@>"],"j":["I<@,@>"],"k.E":"I<@,@>"},"cO":{"aU":[]},"aN":{"aU":[]},"ac":{"aU":[]},"f2":{"aU":[]},"u":{"aU":[]},"dq":{"aU":[]},"al":{"j":["1"],"al.T":"1"},"dl":{"X":[]},"b9":{"X":[]},"ba":{"X":[]},"G":{"X":[]},"cZ":{"X":[]},"c4":{"X":[]},"f1":{"X":[]},"dp":{"X":[]},"nL":{"aw":[]},"bV":{"aw":[]},"od":{"aw":[]},"ow":{"aw":[]},"cT":{"al":["aw"],"j":["aw"],"al.T":"aw"},"cD":{"a7":[]},"bY":{"al":["a7?"],"a7":[],"j":["a7?"],"al.T":"a7?"},"df":{"a7":[]},"dB":{"a7":[]},"cf":{"a2":[]},"cg":{"a2":[]},"eJ":{"dh":[]},"fx":{"a2":[]},"fy":{"a2":[]},"fz":{"a2":[]},"fv":{"a2":[]},"dr":{"a2":[]},"fw":{"a2":[]},"ds":{"a2":[]},"dt":{"a2":[]},"fA":{"a2":[]},"dw":{"a2":[]},"dy":{"a2":[]},"dz":{"a2":[]},"d2":{"dn":[]},"fn":{"cd":[]},"fo":{"cd":[]},"ep":{"aH":[]},"ew":{"aH":[]},"ex":{"aH":[]},"eZ":{"aH":[]},"ce":{"p":["i"],"n":["i"],"j":["i"]}}'))
H.p2(v.typeUniverse,JSON.parse('{"ak":1,"n":1,"bd":1,"eI":2,"fK":1,"cL":1,"fD":1,"ch":1,"cE":2,"eH":1,"c5":1,"cb":1,"bL":1,"ff":2,"dI":1,"cP":1,"cW":1,"d_":2,"hE":2,"d0":2,"dP":1,"dJ":1,"e0":2,"e2":1,"ek":2,"en":2,"ez":1,"dF":1,"N":1,"cM":1,"b9":1,"ba":1,"G":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.lD
return{cR:s("bR"),fK:s("bw"),Y:s("bx"),eT:s("bU"),ed:s("cA"),gA:s("by"),ar:s("cC"),gw:s("n<@>"),h:s("E"),l:s("bB"),bU:s("L"),aD:s("m"),c8:s("ae"),bX:s("bX"),b:s("cN"),x:s("bD"),fS:s("bZ"),gk:s("c0"),eu:s("w<eh>"),i:s("w<nL>"),cn:s("w<b4>"),U:s("w<bV>"),fD:s("w<b6>"),C:s("w<b7>"),u:s("w<au>"),fv:s("w<c_>"),e:s("w<aw>"),L:s("w<eG>"),F:s("w<p<b7>>"),z:s("w<aU>"),fA:s("w<be>"),Q:s("w<aJ>"),q:s("w<f0>"),cG:s("w<a1>"),eg:s("w<bh>"),o:s("w<od>"),D:s("w<ow>"),c3:s("w<bj>"),g9:s("w<cb<P>>"),s:s("w<l>"),ga:s("w<cd>"),gT:s("w<ap>"),ab:s("w<dq>"),gN:s("w<ce>"),dC:s("w<a2>"),c:s("w<du>"),V:s("w<dv>"),B:s("w<dx>"),J:s("w<dA>"),k:s("w<cj>"),n:s("w<H>"),gn:s("w<@>"),t:s("w<i>"),g6:s("w<aH?>"),eJ:s("w<a7?>"),bc:s("w<dn?>"),p:s("w<cg?>"),a:s("w<~(X)>"),aP:s("z<@>"),T:s("cR"),eH:s("m0"),M:s("aR"),aU:s("B<@>"),fX:s("Y<i,ab>"),y:s("Y<i,i>"),O:s("p<du>"),d:s("p<dv>"),m:s("p<dx>"),R:s("p<dA>"),r:s("p<@>"),bv:s("cZ"),f:s("I<@,@>"),dv:s("d1<l,l>"),gc:s("be"),bu:s("c3"),Z:s("c4"),bZ:s("d6"),dE:s("a0"),bm:s("bG"),P:s("af"),K:s("P"),I:s("a9<a3>"),fJ:s("mc"),ew:s("c9"),fg:s("dh"),gC:s("dl"),N:s("l"),g7:s("o"),bY:s("bk"),aW:s("cc"),aF:s("jn"),bJ:s("fq"),dr:s("dp"),v:s("dr"),w:s("cf"),g:s("ds"),E:s("dt"),bK:s("dw"),j:s("cg"),G:s("dy"),bz:s("dz"),ak:s("bK"),dw:s("ci<l,l>"),dD:s("fF"),h9:s("cn"),ac:s("a5"),cJ:s("ab"),gR:s("H"),A:s("@"),S:s("i"),aw:s("0&*"),_:s("P*"),bG:s("m_<af>?"),X:s("P?"),gW:s("c8?"),dl:s("fc?"),f7:s("fr?"),W:s("cf?"),H:s("a3"),h2:s("~(X)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.p=W.bx.prototype
C.i=W.by.prototype
C.Q=W.b7.prototype
C.T=J.a.prototype
C.b=J.w.prototype
C.c=J.cQ.prototype
C.U=J.cR.prototype
C.d=J.c1.prototype
C.a=J.bb.prototype
C.V=J.aR.prototype
C.a_=H.bG.prototype
C.B=J.eY.prototype
C.a3=P.c8.prototype
C.C=W.dm.prototype
C.o=J.bK.prototype
C.D=W.bm.prototype
C.E=W.cm.prototype
C.F=new E.bT("Browser.chrome")
C.q=new E.bT("Browser.firefox")
C.r=new E.bT("Browser.edge")
C.G=new E.bT("Browser.other")
C.a6=new P.i_()
C.H=new P.hZ()
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.I=function() {
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
C.N=function(getTagFallback) {
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
C.J=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.K=function(hooks) {
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
C.M=function(hooks) {
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
C.L=function(hooks) {
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
C.u=function(hooks) { return hooks; }

C.O=new P.eW()
C.e=new P.jD()
C.P=new P.jH()
C.f=new P.k1()
C.m=new P.bA(0)
C.R=new P.bA(5e6)
C.S=new P.iu("element",!1,!1,!1)
C.j=H.b(s([0,0,32776,33792,1,10240,0,0]),t.t)
C.W=H.b(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.s)
C.k=H.b(s([0,0,65490,45055,65535,34815,65534,18431]),t.t)
C.l=H.b(s([0,0,26624,1023,65534,2047,65534,2047]),t.t)
C.X=H.b(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.s)
C.v=H.b(s([]),t.s)
C.Y=H.b(s([0,0,32722,12287,65534,34815,65534,18431]),t.t)
C.w=H.b(s([0,0,65498,45055,65535,34815,65534,18431]),t.t)
C.h=H.b(s([0,0,24576,1023,65534,34815,65534,18431]),t.t)
C.x=H.b(s([0,0,32754,11263,65534,34815,65534,18431]),t.t)
C.y=H.b(s([0,0,65490,12287,65535,34815,65534,18431]),t.t)
C.z=H.b(s(["bind","if","ref","repeat","syntax"]),t.s)
C.n=H.b(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.s)
C.Z=new H.cF(0,{},C.v,H.lD("cF<l,l>"))
C.a0=new E.c6("OperatingSystem.windows")
C.A=new E.c6("OperatingSystem.mac")
C.a1=new E.c6("OperatingSystem.linux")
C.a2=new E.c6("OperatingSystem.other")
C.a4=new P.jE(!1)
C.a5=new P.cp(null,2)})();(function staticFields(){$.jZ=null
$.aO=0
$.cz=null
$.lR=null
$.n5=null
$.mZ=null
$.nb=null
$.kF=null
$.kM=null
$.lF=null
$.cs=null
$.e5=null
$.e6=null
$.ly=!1
$.aK=C.f
$.ai=H.b([],H.lD("w<P>"))
$.b8=null
$.l5=null
$.lY=null
$.lX=null
$.dG=P.T(t.N,t.b)
$.ih=null
$.m2=null
$.m6=null
$.ag=null
$.aX=null
$.me=null
$.jI=null
$.mw=null
$.mv=null
$.jJ=null
$.jK=null
$.jL=null
$.mu=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"qQ","ni",function(){return H.qm("_$dart_dartClosure")})
s($,"r3","nk",function(){return H.aZ(H.jt({
toString:function(){return"$receiver$"}}))})
s($,"r4","nl",function(){return H.aZ(H.jt({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"r5","nm",function(){return H.aZ(H.jt(null))})
s($,"r6","nn",function(){return H.aZ(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"r9","nq",function(){return H.aZ(H.jt(void 0))})
s($,"ra","nr",function(){return H.aZ(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"r8","np",function(){return H.aZ(H.mn(null))})
s($,"r7","no",function(){return H.aZ(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"rc","nt",function(){return H.aZ(H.mn(void 0))})
s($,"rb","ns",function(){return H.aZ(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"rs","lL",function(){return P.oH()})
s($,"rd","nu",function(){return new P.jG().$0()})
s($,"re","nv",function(){return new P.jF().$0()})
s($,"rt","nz",function(){return new Int8Array(H.cr(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"rw","nB",function(){return P.op("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"rJ","nC",function(){return P.po()})
s($,"ru","nA",function(){return P.m1(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"rl","ny",function(){return Z.aD(0)})
s($,"rf","nw",function(){return Z.aD(511)})
s($,"rn","bu",function(){return Z.aD(1)})
s($,"rm","bt",function(){return Z.aD(2)})
s($,"rh","bs",function(){return Z.aD(4)})
s($,"ro","bv",function(){return Z.aD(8)})
s($,"rp","bP",function(){return Z.aD(16)})
s($,"ri","eb",function(){return Z.aD(32)})
s($,"rj","ec",function(){return Z.aD(64)})
s($,"rk","nx",function(){return Z.aD(96)})
s($,"rq","cx",function(){return Z.aD(128)})
s($,"rg","br",function(){return Z.aD(256)})
s($,"qM","nh",function(){return new V.ii()})
r($,"qL","F",function(){return $.nh()})
r($,"r_","nj",function(){var q=V.m7(),p=V.lj(),o=$.mu
return V.m3(q,p,o==null?$.mu=V.oF(0,0,-1):o)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.d6,DataView:H.a0,ArrayBufferView:H.a0,Float32Array:H.bF,Float64Array:H.bF,Int16Array:H.eO,Int32Array:H.eP,Int8Array:H.eQ,Uint16Array:H.eR,Uint32Array:H.eS,Uint8ClampedArray:H.d8,CanvasPixelArray:H.d8,Uint8Array:H.bG,HTMLAudioElement:W.v,HTMLBRElement:W.v,HTMLButtonElement:W.v,HTMLContentElement:W.v,HTMLDListElement:W.v,HTMLDataElement:W.v,HTMLDataListElement:W.v,HTMLDetailsElement:W.v,HTMLDialogElement:W.v,HTMLEmbedElement:W.v,HTMLFieldSetElement:W.v,HTMLHRElement:W.v,HTMLHeadElement:W.v,HTMLHeadingElement:W.v,HTMLHtmlElement:W.v,HTMLIFrameElement:W.v,HTMLLIElement:W.v,HTMLLabelElement:W.v,HTMLLegendElement:W.v,HTMLLinkElement:W.v,HTMLMapElement:W.v,HTMLMediaElement:W.v,HTMLMenuElement:W.v,HTMLMetaElement:W.v,HTMLMeterElement:W.v,HTMLModElement:W.v,HTMLOListElement:W.v,HTMLObjectElement:W.v,HTMLOptGroupElement:W.v,HTMLOptionElement:W.v,HTMLOutputElement:W.v,HTMLParagraphElement:W.v,HTMLParamElement:W.v,HTMLPictureElement:W.v,HTMLPreElement:W.v,HTMLProgressElement:W.v,HTMLQuoteElement:W.v,HTMLScriptElement:W.v,HTMLShadowElement:W.v,HTMLSlotElement:W.v,HTMLSourceElement:W.v,HTMLSpanElement:W.v,HTMLStyleElement:W.v,HTMLTableCaptionElement:W.v,HTMLTableColElement:W.v,HTMLTextAreaElement:W.v,HTMLTimeElement:W.v,HTMLTitleElement:W.v,HTMLTrackElement:W.v,HTMLUListElement:W.v,HTMLUnknownElement:W.v,HTMLVideoElement:W.v,HTMLDirectoryElement:W.v,HTMLFontElement:W.v,HTMLFrameElement:W.v,HTMLFrameSetElement:W.v,HTMLMarqueeElement:W.v,HTMLElement:W.v,AccessibleNodeList:W.hU,HTMLAnchorElement:W.ee,HTMLAreaElement:W.ef,HTMLBaseElement:W.bR,Blob:W.bw,HTMLBodyElement:W.bx,HTMLCanvasElement:W.by,CanvasRenderingContext2D:W.cC,CDATASection:W.aG,CharacterData:W.aG,Comment:W.aG,ProcessingInstruction:W.aG,Text:W.aG,CSSPerspective:W.i4,CSSCharsetRule:W.J,CSSConditionRule:W.J,CSSFontFaceRule:W.J,CSSGroupingRule:W.J,CSSImportRule:W.J,CSSKeyframeRule:W.J,MozCSSKeyframeRule:W.J,WebKitCSSKeyframeRule:W.J,CSSKeyframesRule:W.J,MozCSSKeyframesRule:W.J,WebKitCSSKeyframesRule:W.J,CSSMediaRule:W.J,CSSNamespaceRule:W.J,CSSPageRule:W.J,CSSRule:W.J,CSSStyleRule:W.J,CSSSupportsRule:W.J,CSSViewportRule:W.J,CSSStyleDeclaration:W.cG,MSStyleCSSProperties:W.cG,CSS2Properties:W.cG,CSSImageValue:W.at,CSSKeywordValue:W.at,CSSNumericValue:W.at,CSSPositionValue:W.at,CSSResourceValue:W.at,CSSUnitValue:W.at,CSSURLImageValue:W.at,CSSStyleValue:W.at,CSSMatrixComponent:W.aQ,CSSRotation:W.aQ,CSSScale:W.aQ,CSSSkew:W.aQ,CSSTranslation:W.aQ,CSSTransformComponent:W.aQ,CSSTransformValue:W.i6,CSSUnparsedValue:W.i7,DataTransferItemList:W.i8,HTMLDivElement:W.b7,DOMException:W.i9,ClientRectList:W.cH,DOMRectList:W.cH,DOMRectReadOnly:W.cI,DOMStringList:W.er,DOMTokenList:W.ia,Element:W.E,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,SubmitEvent:W.m,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ae,FileList:W.bX,FileWriter:W.et,HTMLFormElement:W.ev,Gamepad:W.av,History:W.is,HTMLCollection:W.bC,HTMLFormControlsCollection:W.bC,HTMLOptionsCollection:W.bC,ImageData:W.bD,HTMLImageElement:W.bZ,HTMLInputElement:W.c0,KeyboardEvent:W.bE,Location:W.iD,MediaList:W.iU,MessagePort:W.c3,MIDIInputMap:W.eL,MIDIOutputMap:W.eM,MimeType:W.ax,MimeTypeArray:W.eN,PointerEvent:W.am,MouseEvent:W.am,DragEvent:W.am,Document:W.t,DocumentFragment:W.t,HTMLDocument:W.t,ShadowRoot:W.t,XMLDocument:W.t,DocumentType:W.t,Node:W.t,NodeList:W.d9,RadioNodeList:W.d9,Plugin:W.ay,PluginArray:W.f_,RTCStatsReport:W.f5,HTMLSelectElement:W.f7,SourceBuffer:W.an,SourceBufferList:W.f9,SpeechGrammar:W.aB,SpeechGrammarList:W.fa,SpeechRecognitionResult:W.aC,Storage:W.fe,CSSStyleSheet:W.ah,StyleSheet:W.ah,HTMLTableCellElement:W.bk,HTMLTableDataCellElement:W.bk,HTMLTableHeaderCellElement:W.bk,HTMLTableElement:W.dm,HTMLTableRowElement:W.fi,HTMLTableSectionElement:W.fj,HTMLTemplateElement:W.cc,TextTrack:W.ao,TextTrackCue:W.ad,VTTCue:W.ad,TextTrackCueList:W.fl,TextTrackList:W.fm,TimeRanges:W.jm,Touch:W.ap,TouchEvent:W.bJ,TouchList:W.fs,TrackDefaultList:W.jr,CompositionEvent:W.b_,FocusEvent:W.b_,TextEvent:W.b_,UIEvent:W.b_,URL:W.jC,VideoTrackList:W.fI,WheelEvent:W.bm,Window:W.cm,DOMWindow:W.cm,Attr:W.cn,CSSRuleList:W.fP,ClientRect:W.dE,DOMRect:W.dE,GamepadList:W.h2,NamedNodeMap:W.dK,MozNamedAttrMap:W.dK,SpeechRecognitionResultList:W.hm,StyleSheetList:W.ht,SVGLength:P.aS,SVGLengthList:P.eF,SVGNumber:P.aW,SVGNumberList:P.eU,SVGPointList:P.j1,SVGScriptElement:P.c9,SVGStringList:P.fg,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,SVGTransform:P.aY,SVGTransformList:P.ft,AudioBuffer:P.hX,AudioParamMap:P.ei,AudioTrackList:P.ej,AudioContext:P.b5,webkitAudioContext:P.b5,BaseAudioContext:P.b5,OfflineAudioContext:P.eV,WebGL2RenderingContext:P.c8,SQLResultSetRowList:P.fb})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c5.$nativeSuperclassTag="ArrayBufferView"
H.dL.$nativeSuperclassTag="ArrayBufferView"
H.dM.$nativeSuperclassTag="ArrayBufferView"
H.bF.$nativeSuperclassTag="ArrayBufferView"
H.dN.$nativeSuperclassTag="ArrayBufferView"
H.dO.$nativeSuperclassTag="ArrayBufferView"
H.d7.$nativeSuperclassTag="ArrayBufferView"
W.dR.$nativeSuperclassTag="EventTarget"
W.dS.$nativeSuperclassTag="EventTarget"
W.dU.$nativeSuperclassTag="EventTarget"
W.dV.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=K.qw
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
