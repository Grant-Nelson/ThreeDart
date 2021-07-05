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
a[c]=function(){a[c]=function(){H.qq(b)}
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
if(a[b]!==s)H.qr(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lt"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lt"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lt(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={l3:function l3(){},
l5:function(a){return new H.cP("Field '"+a+"' has been assigned during initialization.")},
kB:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
je:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
on:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
q3:function(a,b,c){return a},
o_:function(a,b,c,d){if(t.gw.b(a))return new H.cF(a,b,c.M("@<0>").b9(d).M("cF<1,2>"))
return new H.aU(a,b,c.M("@<0>").b9(d).M("aU<1,2>"))},
is:function(){return new P.c7("No element")},
nR:function(){return new P.c7("Too many elements")},
ok:function(a,b){H.f6(a,0,J.aN(a)-1,b)},
f6:function(a,b,c,d){if(c-b<=32)H.oj(a,b,c,d)
else H.oi(a,b,c,d)},
oj:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.bM(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.an()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
oi:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.a4(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a4(a4+a5,2),f=g-j,e=g+j,d=J.bM(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.an()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.an()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.an()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.an()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.an()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.an()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.an()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.an()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.an()
if(a2>0){s=a1
a1=a0
a0=s}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.M(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
H.f6(a3,a4,r-2,a6)
H.f6(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.M(a6.$2(d.h(a3,r),b),0);)++r
for(;J.M(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}H.f6(a3,r,q,a6)}else H.f6(a3,r,q,a6)},
cP:function cP(a){this.a=a},
r:function r(a){this.a=a},
n:function n(){},
cU:function cU(){},
bf:function bf(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aU:function aU(a,b,c){this.a=a
this.b=b
this.$ti=c},
cF:function cF(a,b,c){this.a=a
this.b=b
this.$ti=c},
eF:function eF(a,b){this.a=null
this.b=a
this.c=b},
cZ:function cZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
b1:function b1(a,b,c){this.a=a
this.b=b
this.$ti=c},
fG:function fG(a,b){this.a=a
this.b=b},
cH:function cH(){},
fz:function fz(){},
cd:function cd(){},
nJ:function(){throw H.c(P.C("Cannot modify unmodifiable Map"))},
n6:function(a){var s,r=H.n5(a)
if(r!=null)return r
s="minified:"+a
return s},
n_:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
x:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cu(a)
return s},
d9:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
m0:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.d(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.c(P.aa(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.D(q,o)|32)>r)return n}return parseInt(a,b)},
da:function(a){return H.o3(a)},
o3:function(a){var s,r,q,p
if(a instanceof P.Q)return H.as(H.b4(a),null)
if(J.e7(a)===C.T||t.ak.b(a)){s=C.t(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.as(H.b4(a),null)},
o4:function(){if(!!self.location)return self.location.href
return null},
m_:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
oc:function(a){var s,r,q,p=H.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){q=a[r]
if(!H.kp(q))throw H.c(H.e6(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aY(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.e6(q))}return H.m_(p)},
m1:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.kp(q))throw H.c(H.e6(q))
if(q<0)throw H.c(H.e6(q))
if(q>65535)return H.oc(a)}return H.m_(a)},
od:function(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aA:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.aY(s,10)|55296)>>>0,s&1023|56320)}}throw H.c(P.aa(a,0,1114111,null,null))},
c5:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ob:function(a){var s=H.c5(a).getFullYear()+0
return s},
o9:function(a){var s=H.c5(a).getMonth()+1
return s},
o5:function(a){var s=H.c5(a).getDate()+0
return s},
o6:function(a){var s=H.c5(a).getHours()+0
return s},
o8:function(a){var s=H.c5(a).getMinutes()+0
return s},
oa:function(a){var s=H.c5(a).getSeconds()+0
return s},
o7:function(a){var s=H.c5(a).getMilliseconds()+0
return s},
mY:function(a){throw H.c(H.e6(a))},
d:function(a,b){if(a==null)J.aN(a)
throw H.c(H.cr(a,b))},
cr:function(a,b){var s,r="index"
if(!H.kp(b))return new P.aG(!0,b,r,null)
s=J.aN(a)
if(b<0||b>=s)return P.P(b,a,r,null,s)
return P.f1(b,r)},
q6:function(a,b,c){if(a>c)return P.aa(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aa(b,a,c,"end",null)
return new P.aG(!0,b,"end",null)},
e6:function(a){return new P.aG(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.eR()
s=new Error()
s.dartException=a
r=H.qs
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qs:function(){return J.cu(this.dartException)},
h:function(a){throw H.c(a)},
q:function(a){throw H.c(P.aK(a))},
b_:function(a){var s,r,q,p,o,n
a=H.n2(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jn(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
jo:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
md:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
l4:function(a,b){var s=b==null,r=s?null:b.method
return new H.eA(a,r,s?null:b.receiver)},
al:function(a){if(a==null)return new H.iY(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bN(a,a.dartException)
return H.q_(a)},
bN:function(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
q_:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aY(r,16)&8191)===10)switch(q){case 438:return H.bN(a,H.l4(H.x(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.x(s)+" (Error "+q+")"
return H.bN(a,new H.d8(p,e))}}if(a instanceof TypeError){o=$.na()
n=$.nb()
m=$.nc()
l=$.nd()
k=$.ng()
j=$.nh()
i=$.nf()
$.ne()
h=$.nj()
g=$.ni()
f=o.ak(s)
if(f!=null)return H.bN(a,H.l4(s,f))
else{f=n.ak(s)
if(f!=null){f.method="call"
return H.bN(a,H.l4(s,f))}else{f=m.ak(s)
if(f==null){f=l.ak(s)
if(f==null){f=k.ak(s)
if(f==null){f=j.ak(s)
if(f==null){f=i.ak(s)
if(f==null){f=l.ak(s)
if(f==null){f=h.ak(s)
if(f==null){f=g.ak(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bN(a,new H.d8(s,f==null?e:f.method))}}return H.bN(a,new H.fy(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.di()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bN(a,new P.aG(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.di()
return a},
lw:function(a){var s
if(a==null)return new H.hl(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.hl(a)},
q8:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
qg:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.f("Unsupported number of arguments for wrapped closure"))},
cq:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qg)
a.$identity=s
return s},
nI:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.fb().constructor.prototype):Object.create(new H.bR(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aP
if(typeof r!=="number")return r.W()
$.aP=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.lL(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.nE(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lL(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
nE:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mX,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.nC:H.nB
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
nF:function(a,b,c,d){var s=H.lJ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lL:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.nH(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nF(r,!p,s,b)
if(r===0){p=$.aP
if(typeof p!=="number")return p.W()
$.aP=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.cw
return new Function(p+(o==null?$.cw=H.hY("self"):o)+";return "+n+"."+H.x(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aP
if(typeof p!=="number")return p.W()
$.aP=p+1
m+=p
p="return function("+m+"){return this."
o=$.cw
return new Function(p+(o==null?$.cw=H.hY("self"):o)+"."+H.x(s)+"("+m+");}")()},
nG:function(a,b,c,d){var s=H.lJ,r=H.nD
switch(b?-1:a){case 0:throw H.c(new H.f4("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
nH:function(a,b){var s,r,q,p,o,n,m,l=$.cw
if(l==null)l=$.cw=H.hY("self")
s=$.lI
if(s==null)s=$.lI=H.hY("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.nG(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.x(r)+"(this."+s+");"
n=$.aP
if(typeof n!=="number")return n.W()
$.aP=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.x(r)+"(this."+s+", "+m+");"
n=$.aP
if(typeof n!=="number")return n.W()
$.aP=n+1
return new Function(o+n+"}")()},
lt:function(a,b,c,d,e,f,g){return H.nI(a,b,c,d,!!e,!!f,g)},
nB:function(a,b){return H.hz(v.typeUniverse,H.b4(a.a),b)},
nC:function(a,b){return H.hz(v.typeUniverse,H.b4(a.c),b)},
lJ:function(a){return a.a},
nD:function(a){return a.c},
hY:function(a){var s,r,q,p=new H.bR("self","target","receiver","name"),o=J.l2(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.cv("Field name "+a+" not found."))},
qq:function(a){throw H.c(new P.el(a))},
qa:function(a){return v.getIsolateTag(a)},
qr:function(a){return H.h(new H.cP(a))},
rz:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qj:function(a){var s,r,q,p,o,n=$.mW.$1(a),m=$.kz[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kG[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.mP.$2(a,n)
if(q!=null){m=$.kz[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kG[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kP(s)
$.kz[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kG[n]=s
return s}if(p==="-"){o=H.kP(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.n0(a,s)
if(p==="*")throw H.c(P.jr(n))
if(v.leafTags[n]===true){o=H.kP(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.n0(a,s)},
n0:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.ly(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kP:function(a){return J.ly(a,!1,null,!!a.$iB)},
ql:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kP(s)
else return J.ly(s,c,null,null)},
qe:function(){if(!0===$.lx)return
$.lx=!0
H.qf()},
qf:function(){var s,r,q,p,o,n,m,l
$.kz=Object.create(null)
$.kG=Object.create(null)
H.qd()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.n1.$1(o)
if(n!=null){m=H.ql(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qd:function(){var s,r,q,p,o,n,m=C.I()
m=H.cp(C.J,H.cp(C.K,H.cp(C.u,H.cp(C.u,H.cp(C.L,H.cp(C.M,H.cp(C.N(C.t),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.mW=new H.kC(p)
$.mP=new H.kD(o)
$.n1=new H.kE(n)},
cp:function(a,b){return a(b)||b},
nV:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.a8("Illegal RegExp pattern ("+String(n)+")",a,null))},
n3:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
q7:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n2:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lA:function(a,b,c){var s=H.qp(a,b,c)
return s},
qp:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n2(b),'g'),H.q7(c))},
cA:function cA(){},
cB:function cB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jn:function jn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
d8:function d8(a,b){this.a=a
this.b=b},
eA:function eA(a,b,c){this.a=a
this.b=b
this.c=c},
fy:function fy(a){this.a=a},
iY:function iY(a){this.a=a},
hl:function hl(a){this.a=a
this.b=null},
bx:function bx(){},
fi:function fi(){},
fb:function fb(){},
bR:function bR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f4:function f4(a){this.a=a},
Y:function Y(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iu:function iu(a){this.a=a},
ix:function ix(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cR:function cR(a,b){this.a=a
this.$ti=b},
eE:function eE(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kC:function kC(a){this.a=a},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
ez:function ez(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cn:function(a){var s,r,q,p,o
if(t.aP.b(a))return a
s=J.bM(a)
r=s.gl(a)
q=P.cV(r,null,!1,t.A)
for(p=0;p<s.gl(a);++p){o=s.h(a,p)
if(p>=r)return H.d(q,p)
q[p]=o}return q},
b2:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cr(b,a))},
pd:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.q6(a,b,c))
return b},
d3:function d3(){},
a1:function a1(){},
c3:function c3(){},
bC:function bC(){},
d4:function d4(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
d5:function d5(){},
bD:function bD(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
m7:function(a,b){var s=b.c
return s==null?b.c=H.lj(a,b.z,!0):s},
m6:function(a,b){var s=b.c
return s==null?b.c=H.dX(a,"lR",[b.z]):s},
m8:function(a){var s=a.y
if(s===6||s===7||s===8)return H.m8(a.z)
return s===11||s===12},
og:function(a){return a.cy},
lv:function(a){return H.lk(v.typeUniverse,a,!1)},
bo:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bo(a,s,a0,a1)
if(r===s)return b
return H.my(a,r,!0)
case 7:s=b.z
r=H.bo(a,s,a0,a1)
if(r===s)return b
return H.lj(a,r,!0)
case 8:s=b.z
r=H.bo(a,s,a0,a1)
if(r===s)return b
return H.mx(a,r,!0)
case 9:q=b.Q
p=H.e5(a,q,a0,a1)
if(p===q)return b
return H.dX(a,b.z,p)
case 10:o=b.z
n=H.bo(a,o,a0,a1)
m=b.Q
l=H.e5(a,m,a0,a1)
if(n===o&&l===m)return b
return H.lh(a,n,l)
case 11:k=b.z
j=H.bo(a,k,a0,a1)
i=b.Q
h=H.pX(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mw(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.e5(a,g,a0,a1)
o=b.z
n=H.bo(a,o,a0,a1)
if(f===g&&n===o)return b
return H.li(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.hR("Attempted to substitute unexpected RTI kind "+c))}},
e5:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bo(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
pY:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bo(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
pX:function(a,b,c,d){var s,r=b.a,q=H.e5(a,r,c,d),p=b.b,o=H.e5(a,p,c,d),n=b.c,m=H.pY(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fY()
s.a=q
s.b=o
s.c=m
return s},
b:function(a,b){a[v.arrayRti]=b
return a},
q4:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.mX(s)
return a.$S()}return null},
mZ:function(a,b){var s
if(H.m8(b))if(a instanceof H.bx){s=H.q4(a)
if(s!=null)return s}return H.b4(a)},
b4:function(a){var s
if(a instanceof P.Q){s=a.$ti
return s!=null?s:H.lp(a)}if(Array.isArray(a))return H.kg(a)
return H.lp(J.e7(a))},
kg:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
X:function(a){var s=a.$ti
return s!=null?s:H.lp(a)},
lp:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pl(a,s)},
pl:function(a,b){var s=a instanceof H.bx?a.__proto__.__proto__.constructor:b,r=H.oW(v.typeUniverse,s.name)
b.$ccache=r
return r},
mX:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lk(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pk:function(a){var s,r,q,p=this
if(p===t.K)return H.e2(p,a,H.pp)
if(!H.b5(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.e2(p,a,H.ps)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.kp
else if(r===t.gR||r===t.H)q=H.po
else if(r===t.N)q=H.pq
else q=r===t.cJ?H.ko:null
if(q!=null)return H.e2(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.qh)){p.r="$i"+s
return H.e2(p,a,H.pr)}}else if(s===7)return H.e2(p,a,H.pi)
return H.e2(p,a,H.pg)},
e2:function(a,b,c){a.b=c
return a.b(b)},
pj:function(a){var s,r=this,q=H.pf
if(!H.b5(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.pc
else if(r===t.K)q=H.pb
else{s=H.e8(r)
if(s)q=H.ph}r.a=q
return r.a(a)},
ls:function(a){var s,r=a.y
if(!H.b5(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&H.ls(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
pg:function(a){var s=this
if(a==null)return H.ls(s)
return H.S(v.typeUniverse,H.mZ(a,s),null,s,null)},
pi:function(a){if(a==null)return!0
return this.z.b(a)},
pr:function(a){var s,r=this
if(a==null)return H.ls(r)
s=r.r
if(a instanceof P.Q)return!!a[s]
return!!J.e7(a)[s]},
pf:function(a){var s,r=this
if(a==null){s=H.e8(r)
if(s)return a}else if(r.b(a))return a
H.mJ(a,r)},
ph:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mJ(a,s)},
mJ:function(a,b){throw H.c(H.oM(H.mp(a,H.mZ(a,b),H.as(b,null))))},
mp:function(a,b,c){var s=P.ig(a),r=H.as(b==null?H.b4(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
oM:function(a){return new H.dW("TypeError: "+a)},
ac:function(a,b){return new H.dW("TypeError: "+H.mp(a,null,b))},
pp:function(a){return a!=null},
pb:function(a){if(a!=null)return a
throw H.c(H.ac(a,"Object"))},
ps:function(a){return!0},
pc:function(a){return a},
ko:function(a){return!0===a||!1===a},
mH:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.ac(a,"bool"))},
rn:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ac(a,"bool"))},
rm:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ac(a,"bool?"))},
ro:function(a){if(typeof a=="number")return a
throw H.c(H.ac(a,"double"))},
rq:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ac(a,"double"))},
rp:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ac(a,"double?"))},
kp:function(a){return typeof a=="number"&&Math.floor(a)===a},
kh:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.ac(a,"int"))},
rs:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ac(a,"int"))},
rr:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ac(a,"int?"))},
po:function(a){return typeof a=="number"},
rt:function(a){if(typeof a=="number")return a
throw H.c(H.ac(a,"num"))},
rv:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ac(a,"num"))},
ru:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ac(a,"num?"))},
pq:function(a){return typeof a=="string"},
ki:function(a){if(typeof a=="string")return a
throw H.c(H.ac(a,"String"))},
rx:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ac(a,"String"))},
rw:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ac(a,"String?"))},
pT:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.as(a[q],b)
return s},
mK:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
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
if(!k)m+=" extends "+H.as(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.as(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.as(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.as(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.as(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
as:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.as(a.z,b)
return s}if(l===7){r=a.z
s=H.as(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.as(a.z,b)+">"
if(l===9){p=H.pZ(a.z)
o=a.Q
return o.length!==0?p+("<"+H.pT(o,b)+">"):p}if(l===11)return H.mK(a,b,null)
if(l===12)return H.mK(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
pZ:function(a){var s,r=H.n5(a)
if(r!=null)return r
s="minified:"+a
return s},
mz:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
oW:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lk(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dY(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dX(a,b,q)
n[b]=o
return o}else return m},
oU:function(a,b){return H.mG(a.tR,b)},
oT:function(a,b){return H.mG(a.eT,b)},
lk:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mu(H.ms(a,null,b,c))
r.set(b,s)
return s},
hz:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mu(H.ms(a,b,c,!0))
q.set(c,r)
return r},
oV:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.lh(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bn:function(a,b){b.a=H.pj
b.b=H.pk
return b},
dY:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.aB(null,null)
s.y=b
s.cy=c
r=H.bn(a,s)
a.eC.set(c,r)
return r},
my:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.oR(a,b,r,c)
a.eC.set(r,s)
return s},
oR:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b5(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.aB(null,null)
q.y=6
q.z=b
q.cy=c
return H.bn(a,q)},
lj:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.oQ(a,b,r,c)
a.eC.set(r,s)
return s},
oQ:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b5(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.e8(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.e8(q.z))return q
else return H.m7(a,b)}}p=new H.aB(null,null)
p.y=7
p.z=b
p.cy=c
return H.bn(a,p)},
mx:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.oO(a,b,r,c)
a.eC.set(r,s)
return s},
oO:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b5(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dX(a,"lR",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.aB(null,null)
q.y=8
q.z=b
q.cy=c
return H.bn(a,q)},
oS:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.aB(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bn(a,s)
a.eC.set(q,r)
return r},
hy:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
oN:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dX:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hy(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.aB(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bn(a,r)
a.eC.set(p,q)
return q},
lh:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hy(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aB(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bn(a,o)
a.eC.set(q,n)
return n},
mw:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hy(m)
if(j>0){s=l>0?",":""
r=H.hy(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.oN(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aB(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bn(a,o)
a.eC.set(q,r)
return r},
li:function(a,b,c,d){var s,r=b.cy+("<"+H.hy(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.oP(a,b,c,r,d)
a.eC.set(r,s)
return s},
oP:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bo(a,b,r,0)
m=H.e5(a,c,r,0)
return H.li(a,n,m,c!==m)}}l=new H.aB(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bn(a,l)},
ms:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mu:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.oG(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mt(a,r,h,g,!1)
else if(q===46)r=H.mt(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.bm(a.u,a.e,g.pop()))
break
case 94:g.push(H.oS(a.u,g.pop()))
break
case 35:g.push(H.dY(a.u,5,"#"))
break
case 64:g.push(H.dY(a.u,2,"@"))
break
case 126:g.push(H.dY(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.lg(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.dX(p,n,o))
else{m=H.bm(p,a.e,n)
switch(m.y){case 11:g.push(H.li(p,m,o,a.n))
break
default:g.push(H.lh(p,m,o))
break}}break
case 38:H.oH(a,g)
break
case 42:p=a.u
g.push(H.my(p,H.bm(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.lj(p,H.bm(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.mx(p,H.bm(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.fY()
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
H.lg(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.mw(p,H.bm(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.lg(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.oJ(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.bm(a.u,a.e,i)},
oG:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mt:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.mz(s,o.z)[p]
if(n==null)H.h('No "'+p+'" in "'+H.og(o)+'"')
d.push(H.hz(s,o,n))}else d.push(p)
return m},
oH:function(a,b){var s=b.pop()
if(0===s){b.push(H.dY(a.u,1,"0&"))
return}if(1===s){b.push(H.dY(a.u,4,"1&"))
return}throw H.c(P.hR("Unexpected extended operation "+H.x(s)))},
bm:function(a,b,c){if(typeof c=="string")return H.dX(a,c,a.sEA)
else if(typeof c=="number")return H.oI(a,b,c)
else return c},
lg:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bm(a,b,c[s])},
oJ:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bm(a,b,c[s])},
oI:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.hR("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.hR("Bad index "+c+" for "+b.i(0)))},
S:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.b5(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.b5(b))return!1
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
if(p===6){s=H.m7(a,d)
return H.S(a,b,c,s,e)}if(r===8){if(!H.S(a,b.z,c,d,e))return!1
return H.S(a,H.m6(a,b),c,d,e)}if(r===7){s=H.S(a,t.P,c,d,e)
return s&&H.S(a,b.z,c,d,e)}if(p===8){if(H.S(a,b,c,d.z,e))return!0
return H.S(a,b,c,H.m6(a,d),e)}if(p===7){s=H.S(a,b,c,t.P,e)
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
if(!H.S(a,k,c,j,e)||!H.S(a,j,e,k,c))return!1}return H.mL(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.mL(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.pn(a,b,c,d,e)}return!1},
mL:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
pn:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.S(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mz(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.S(a,H.hz(a,b,l[p]),c,r[p],e))return!1
return!0},
e8:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b5(a))if(r!==7)if(!(r===6&&H.e8(a.z)))s=r===8&&H.e8(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qh:function(a){var s
if(!H.b5(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
b5:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
mG:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
aB:function aB(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fY:function fY(){this.c=this.b=this.a=null},
fU:function fU(){},
dW:function dW(a){this.a=a},
n5:function(a){return v.mangledGlobalNames[a]},
qm:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ly:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kA:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.lx==null){H.qe()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.jr("Return interceptor for "+H.x(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.jT
if(o==null)o=$.jT=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.qj(a)
if(p!=null)return p
if(typeof a=="function")return C.V
s=Object.getPrototypeOf(a)
if(s==null)return C.B
if(s===Object.prototype)return C.B
if(typeof q=="function"){o=$.jT
if(o==null)o=$.jT=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
nS:function(a,b){if(a<0||a>4294967295)throw H.c(P.aa(a,0,4294967295,"length",null))
return J.nT(new Array(a),b)},
l1:function(a,b){if(a<0)throw H.c(P.cv("Length must be a non-negative integer: "+a))
return H.b(new Array(a),b.M("w<0>"))},
nT:function(a,b){return J.l2(H.b(a,b.M("w<0>")))},
l2:function(a){a.fixed$length=Array
return a},
nU:function(a,b){return J.nv(a,b)},
e7:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cN.prototype
return J.ey.prototype}if(typeof a=="string")return J.bd.prototype
if(a==null)return J.cO.prototype
if(typeof a=="boolean")return J.ex.prototype
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.Q)return a
return J.kA(a)},
bM:function(a){if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.Q)return a
return J.kA(a)},
hM:function(a){if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.Q)return a
return J.kA(a)},
mV:function(a){if(typeof a=="number")return J.c_.prototype
if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bH.prototype
return a},
q9:function(a){if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bH.prototype
return a},
b3:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.Q)return a
return J.kA(a)},
M:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.e7(a).q(a,b)},
lD:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mV(a).J(a,b)},
lE:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n_(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bM(a).h(a,b)},
kV:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.n_(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.hM(a).m(a,b,c)},
nt:function(a,b,c){return J.b3(a).h3(a,b,c)},
nu:function(a,b,c,d){return J.b3(a).hn(a,b,c,d)},
nv:function(a,b){return J.mV(a).ah(a,b)},
hP:function(a,b){return J.hM(a).K(a,b)},
eb:function(a,b){return J.hM(a).E(a,b)},
nw:function(a){return J.b3(a).gag(a)},
nx:function(a){return J.b3(a).gbu(a)},
kW:function(a){return J.e7(a).gF(a)},
aF:function(a){return J.hM(a).gR(a)},
aN:function(a){return J.bM(a).gl(a)},
lF:function(a){return J.hM(a).ia(a)},
ny:function(a,b){return J.b3(a).ig(a,b)},
nz:function(a){return J.q9(a).io(a)},
cu:function(a){return J.e7(a).i(a)},
a:function a(){},
ex:function ex(){},
cO:function cO(){},
be:function be(){},
eW:function eW(){},
bH:function bH(){},
aS:function aS(){},
w:function w(a){this.$ti=a},
it:function it(a){this.$ti=a},
am:function am(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c_:function c_(){},
cN:function cN(){},
ey:function ey(){},
bd:function bd(){}},P={
ox:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.q0()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cq(new P.jP(q),1)).observe(s,{childList:true})
return new P.jO(q,s,r)}else if(self.setImmediate!=null)return P.q1()
return P.q2()},
oy:function(a){self.scheduleImmediate(H.cq(new P.jQ(a),0))},
oz:function(a){self.setImmediate(H.cq(new P.jR(a),0))},
oA:function(a){P.la(C.m,a)},
la:function(a,b){var s=C.c.a4(a.a,1000)
return P.oK(s<0?0:s,b)},
mc:function(a,b){var s=C.c.a4(a.a,1000)
return P.oL(s<0?0:s,b)},
oK:function(a,b){var s=new P.dV()
s.eI(a,b)
return s},
oL:function(a,b){var s=new P.dV()
s.eJ(a,b)
return s},
rk:function(a){return new P.cl(a,1)},
oD:function(){return C.a4},
oE:function(a){return new P.cl(a,3)},
pu:function(a,b){return new P.dS(a,b.M("dS<0>"))},
pQ:function(){var s,r
for(s=$.co;s!=null;s=$.co){$.e4=null
r=s.b
$.co=r
if(r==null)$.e3=null
s.a.$0()}},
pW:function(){$.lq=!0
try{P.pQ()}finally{$.e4=null
$.lq=!1
if($.co!=null)$.lC().$1(P.mQ())}},
pU:function(a){var s=new P.fH(a),r=$.e3
if(r==null){$.co=$.e3=s
if(!$.lq)$.lC().$1(P.mQ())}else $.e3=r.b=s},
pV:function(a){var s,r,q,p=$.co
if(p==null){P.pU(a)
$.e4=$.e3
return}s=new P.fH(a)
r=$.e4
if(r==null){s.b=p
$.co=$.e4=s}else{q=r.b
s.b=q
$.e4=r.b=s
if(q==null)$.e3=s}},
mb:function(a,b){var s=$.aM
if(s===C.f)return P.la(a,b)
return P.la(a,s.ht(b))},
op:function(a,b){var s=$.aM
if(s===C.f)return P.mc(a,b)
return P.mc(a,s.dw(b,t.aF))},
mM:function(a,b,c,d,e){P.pV(new P.ks(d,e))},
pR:function(a,b,c,d){var s,r=$.aM
if(r===c)return d.$0()
$.aM=c
s=r
try{r=d.$0()
return r}finally{$.aM=s}},
pS:function(a,b,c,d,e){var s,r=$.aM
if(r===c)return d.$1(e)
$.aM=c
s=r
try{r=d.$1(e)
return r}finally{$.aM=s}},
jP:function jP(a){this.a=a},
jO:function jO(a,b,c){this.a=a
this.b=b
this.c=c},
jQ:function jQ(a){this.a=a},
jR:function jR(a){this.a=a},
dV:function dV(){this.c=0},
k7:function k7(a,b){this.a=a
this.b=b},
k6:function k6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cl:function cl(a,b){this.a=a
this.b=b},
bK:function bK(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dS:function dS(a,b){this.a=a
this.$ti=b},
fH:function fH(a){this.a=a
this.b=null},
c8:function c8(){},
fd:function fd(){},
ke:function ke(){},
ks:function ks(a,b){this.a=a
this.b=b},
jW:function jW(){},
jX:function jX(a,b){this.a=a
this.b=b},
jY:function jY(a,b,c){this.a=a
this.b=b
this.c=c},
nW:function(a,b){return new H.Y(a.M("@<0>").b9(b).M("Y<1,2>"))},
nX:function(a,b,c){return H.q8(a,new H.Y(b.M("@<0>").b9(c).M("Y<1,2>")))},
V:function(a,b){return new H.Y(a.M("@<0>").b9(b).M("Y<1,2>"))},
cS:function(a){return new P.dG(a.M("dG<0>"))},
lf:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oF:function(a,b){var s=new P.dH(a,b)
s.c=a.e
return s},
nQ:function(a,b,c){var s,r
if(P.lr(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.b([],t.s)
$.ak.push(a)
try{P.pt(a,s)}finally{if(0>=$.ak.length)return H.d($.ak,-1)
$.ak.pop()}r=P.m9(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
l0:function(a,b,c){var s,r
if(P.lr(a))return b+"..."+c
s=new P.a0(b)
$.ak.push(a)
try{r=s
r.a=P.m9(r.a,a,", ")}finally{if(0>=$.ak.length)return H.d($.ak,-1)
$.ak.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lr:function(a){var s,r
for(s=$.ak.length,r=0;r<s;++r)if(a===$.ak[r])return!0
return!1},
pt:function(a,b){var s,r,q,p,o,n,m,l=a.gR(a),k=0,j=0
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
nY:function(a,b,c){var s=P.nW(b,c)
a.E(0,new P.iy(s,b,c))
return s},
lT:function(a,b){var s,r,q=P.cS(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)q.n(0,b.a(a[r]))
return q},
l6:function(a){var s,r={}
if(P.lr(a))return"{...}"
s=new P.a0("")
try{$.ak.push(a)
s.a+="{"
r.a=!0
J.eb(a,new P.iC(r,s))
s.a+="}"}finally{if(0>=$.ak.length)return H.d($.ak,-1)
$.ak.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dG:function dG(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jV:function jV(a){this.a=a
this.c=this.b=null},
dH:function dH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cM:function cM(){},
iy:function iy(a,b,c){this.a=a
this.b=b
this.c=c},
cT:function cT(){},
k:function k(){},
cX:function cX(){},
iC:function iC(a,b){this.a=a
this.b=b},
L:function L(){},
hA:function hA(){},
cY:function cY(){},
ce:function ce(a,b){this.a=a
this.$ti=b},
de:function de(){},
dO:function dO(){},
dI:function dI(){},
dZ:function dZ(){},
e0:function e0(){},
os:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.ot(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
ot:function(a,b,c,d){var s=a?$.nl():$.nk()
if(s==null)return null
if(0===c&&d===b.length)return P.mi(s,b)
return P.mi(s,b.subarray(c,P.bi(c,d,b.length)))},
mi:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.al(r)}return null},
lH:function(a,b,c,d,e,f){if(C.c.bo(f,4)!==0)throw H.c(P.a8("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a8("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a8("Invalid base64 padding, more than two '=' characters",a,b))},
pa:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
p9:function(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.bM(a),r=0;r<p;++r){q=s.h(a,b+r)
o[r]=(q&4294967040)>>>0!==0?255:q}return o},
jB:function jB(){},
jA:function jA(){},
hV:function hV(){},
hW:function hW(){},
ei:function ei(){},
ek:function ek(){},
ic:function ic(){},
ir:function ir(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
iq:function iq(a){this.a=a},
jy:function jy(){},
jC:function jC(){},
kc:function kc(a){this.b=0
this.c=a},
jz:function jz(a){this.a=a},
kb:function kb(a){this.a=a
this.b=16
this.c=0},
kF:function(a,b){var s=H.m0(a,b)
if(s!=null)return s
throw H.c(P.a8(a,null,null))},
nN:function(a){if(a instanceof H.bx)return a.i(0)
return"Instance of '"+H.da(a)+"'"},
cV:function(a,b,c,d){var s,r=c?J.l1(a,d):J.nS(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
iz:function(a,b,c){var s,r=H.b([],c.M("w<0>"))
for(s=J.aF(a);s.u();)r.push(s.gB(s))
if(b)return r
return J.l2(r)},
nZ:function(a,b,c){var s,r,q=J.l1(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
ff:function(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=P.bi(b,c,r)
return H.m1(b>0||c<r?s.slice(b,c):s)}if(t.bm.b(a))return H.od(a,b,P.bi(b,c,a.length))
return P.om(a,b,c)},
om:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.aa(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.aa(c,b,a.length,o,o))
r=J.aF(a)
for(q=0;q<b;++q)if(!r.u())throw H.c(P.aa(b,0,q,o,o))
p=[]
if(s)for(;r.u();)p.push(r.gB(r))
else for(q=b;q<c;++q){if(!r.u())throw H.c(P.aa(c,b,q,o,o))
p.push(r.gB(r))}return H.m1(p)},
oe:function(a){return new H.ez(a,H.nV(a,!1,!0,!1,!1,!1))},
m9:function(a,b,c){var s=J.aF(b)
if(!s.u())return a
if(c.length===0){do a+=H.x(s.gB(s))
while(s.u())}else{a+=H.x(s.gB(s))
for(;s.u();)a=a+c+H.x(s.gB(s))}return a},
mf:function(){var s=H.o4()
if(s!=null)return P.or(s)
throw H.c(P.C("'Uri.base' is not supported"))},
ka:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.nr().b
s=s.test(b)}else s=!1
if(s)return b
r=c.ghI().cg(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.aA(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
nK:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
nL:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
en:function(a){if(a>=10)return""+a
return"0"+a},
lN:function(a){return new P.by(1000*a)},
ig:function(a){if(typeof a=="number"||H.ko(a)||null==a)return J.cu(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nN(a)},
hR:function(a){return new P.ee(a)},
cv:function(a){return new P.aG(!1,null,null,a)},
f1:function(a,b){return new P.db(null,null,!0,a,b,"Value not in range")},
aa:function(a,b,c,d,e){return new P.db(b,c,!0,a,d,"Invalid value")},
bi:function(a,b,c){if(0>a||a>c)throw H.c(P.aa(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.aa(b,a,c,"end",null))
return b}return c},
m2:function(a,b){if(a<0)throw H.c(P.aa(a,0,null,b,null))
return a},
P:function(a,b,c,d,e){var s=e==null?J.aN(b):e
return new P.ev(s,!0,a,c,"Index out of range")},
C:function(a){return new P.fA(a)},
jr:function(a){return new P.fx(a)},
l9:function(a){return new P.c7(a)},
aK:function(a){return new P.ej(a)},
f:function(a){return new P.fV(a)},
a8:function(a,b,c){return new P.im(a,b,c)},
lz:function(a){H.qm(a)},
or:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.D(a5,4)^58)*3|C.a.D(a5,0)^100|C.a.D(a5,1)^97|C.a.D(a5,2)^116|C.a.D(a5,3)^97)>>>0
if(s===0)return P.me(a4<a4?C.a.t(a5,0,a4):a5,5,a3).gej()
else if(s===32)return P.me(C.a.t(a5,5,a4),0,a3).gej()}r=P.cV(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.mN(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(P.mN(a5,0,q,20,r)===20)r[7]=q
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
k=!1}else{if(!(m<a4&&m===n+2&&C.a.a8(a5,"..",n)))h=m>n+2&&C.a.a8(a5,"/..",m-3)
else h=!0
if(h){j=a3
k=!1}else{if(q===4)if(C.a.a8(a5,"file",0)){if(p<=0){if(!C.a.a8(a5,"/",n)){g="file:///"
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
m=f}j="file"}else if(C.a.a8(a5,"http",0)){if(i&&o+3===n&&C.a.a8(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=C.a.b4(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&C.a.a8(a5,"https",0)){if(i&&o+4===n&&C.a.a8(a5,"443",o+1)){l-=4
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
l-=0}return new P.hf(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=P.p3(a5,0,q)
else{if(q===0)P.cm(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?P.p4(a5,d,p-1):""
b=P.p0(a5,p,o,!1)
i=o+1
if(i<n){a=H.m0(C.a.t(a5,i,n),a3)
a0=P.p2(a==null?H.h(P.a8("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.p1(a5,n,m,a3,j,b!=null)
a2=m<l?P.lm(a5,m+1,l,a3):a3
return new P.bL(j,c,b,a0,a1,a2,l<a4?P.p_(a5,l+1,a4):a3)},
mh:function(a){var s=t.N
return C.b.hO(H.b(a.split("&"),t.s),P.V(s,s),new P.jw(C.e))},
oq:function(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jt(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=C.a.V(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=P.kF(C.a.t(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(q>=4)return H.d(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=P.kF(C.a.t(a,r,c),null)
if(o>255)k.$2(l,r)
if(q>=4)return H.d(j,q)
j[q]=o
return j},
mg:function(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.ju(a),c=new P.jv(d,a)
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
l=C.b.gaw(s)
if(m&&l!==-1)d.$2("expected a part after last `:`",a0)
if(!m)if(!o)s.push(c.$2(q,a0))
else{k=P.oq(a,q,a0)
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
mA:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cm:function(a,b,c){throw H.c(P.a8(c,a,b))},
p2:function(a,b){if(a!=null&&a===P.mA(b))return null
return a},
p0:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.V(a,b)===91){s=c-1
if(C.a.V(a,s)!==93)P.cm(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.oY(a,r,s)
if(q<s){p=q+1
o=P.mF(a,C.a.a8(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mg(a,r,q)
return C.a.t(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.V(a,n)===58){q=C.a.bx(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mF(a,C.a.a8(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mg(a,b,q)
return"["+C.a.t(a,b,q)+o+"]"}return P.p6(a,b,c)},
oY:function(a,b,c){var s=C.a.bx(a,"%",b)
return s>=b&&s<c?s:c},
mF:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.a0(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.V(a,s)
if(p===37){o=P.ln(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.a0("")
m=i.a+=C.a.t(a,r,s)
if(n)o=C.a.t(a,s,s+3)
else if(o==="%")P.cm(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.a0("")
if(r<s){i.a+=C.a.t(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.V(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=C.a.t(a,r,s)
if(i==null){i=new P.a0("")
n=i}else n=i
n.a+=j
n.a+=P.ll(p)
s+=k
r=s}}}if(i==null)return C.a.t(a,b,c)
if(r<c)i.a+=C.a.t(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
p6:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.V(a,s)
if(o===37){n=P.ln(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.a0("")
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
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.a0("")
if(r<s){q.a+=C.a.t(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.d(C.i,m)
m=(C.i[m]&1<<(o&15))!==0}else m=!1
if(m)P.cm(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.V(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=C.a.t(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.a0("")
m=q}else m=q
m.a+=l
m.a+=P.ll(o)
s+=j
r=s}}}}if(q==null)return C.a.t(a,b,c)
if(r<c){l=C.a.t(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
p3:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.mC(C.a.D(a,b)))P.cm(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.D(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.d(C.k,p)
p=(C.k[p]&1<<(q&15))!==0}else p=!1
if(!p)P.cm(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.t(a,b,c)
return P.oX(r?a.toLowerCase():a)},
oX:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
p4:function(a,b,c){return P.e_(a,b,c,C.Y,!1)},
p1:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.e_(a,b,c,C.y,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a1(s,"/"))s="/"+s
return P.p5(s,e,f)},
p5:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a1(a,"/"))return P.p7(a,!s||c)
return P.p8(a)},
lm:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.cv("Both query and queryParameters specified"))
return P.e_(a,b,c,C.j,!0)}if(d==null)return null
s=new P.a0("")
r.a=""
d.E(0,new P.k8(new P.k9(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
p_:function(a,b,c){return P.e_(a,b,c,C.j,!0)},
ln:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.V(a,b+1)
r=C.a.V(a,n)
q=H.kB(s)
p=H.kB(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aY(o,4)
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.aA(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.t(a,b,b+3).toUpperCase()
return null},
ll:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=C.a.D(k,a>>>4)
s[2]=C.a.D(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=C.c.hd(a,6*q)&63|r
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
o+=3}}return P.ff(s,0,null)},
e_:function(a,b,c,d,e){var s=P.mE(a,b,c,d,e)
return s==null?C.a.t(a,b,c):s},
mE:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.V(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.d(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.ln(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.d(C.i,n)
n=(C.i[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.cm(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.V(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=P.ll(o)}}if(p==null){p=new P.a0("")
n=p}else n=p
n.a+=C.a.t(a,q,r)
n.a+=H.x(m)
if(typeof l!=="number")return H.mY(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.t(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mD:function(a){if(C.a.a1(a,"."))return!0
return C.a.dT(a,"/.")!==-1},
p8:function(a){var s,r,q,p,o,n,m
if(!P.mD(a))return a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.M(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.d(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
p7:function(a,b){var s,r,q,p,o,n
if(!P.mD(a))return!b?P.mB(a):a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gaw(s)!==".."){if(0>=s.length)return H.d(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.d(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gaw(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.d(s,0)
r=P.mB(s[0])
if(0>=s.length)return H.d(s,0)
s[0]=r}return C.b.j(s,"/")},
mB:function(a){var s,r,q,p=a.length
if(p>=2&&P.mC(C.a.D(a,0)))for(s=1;s<p;++s){r=C.a.D(a,s)
if(r===58)return C.a.t(a,0,s)+"%3A"+C.a.aa(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.d(C.k,q)
q=(C.k[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
oZ:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.D(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.cv("Invalid URL encoding"))}}return s},
lo:function(a,b,c,d,e){var s,r,q,p,o=b
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
if(r>127)throw H.c(P.cv("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.cv("Truncated URI"))
p.push(P.oZ(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a3.cg(p)},
mC:function(a){var s=a|32
return 97<=s&&s<=122},
me:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.b([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.D(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.a8(k,a,r))}}if(q<0&&r>b)throw H.c(P.a8(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.D(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaw(j)
if(p!==44||r!==n+7||!C.a.a8(a,"base64",n+1))throw H.c(P.a8("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.H.hW(0,a,m,s)
else{l=P.mE(a,m,s,C.j,!0)
if(l!=null)a=C.a.b4(a,m,s,l)}return new P.js(a,j,c)},
pe:function(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="?",i="#",h=H.b(new Array(22),t.gN)
for(s=0;s<22;++s)h[s]=new Uint8Array(96)
r=new P.kl(h)
q=new P.km()
p=new P.kn()
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
mN:function(a,b,c,d,e){var s,r,q,p,o,n,m=$.ns()
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
by:function by(a){this.a=a},
i8:function i8(){},
i9:function i9(){},
K:function K(){},
ee:function ee(a){this.a=a},
fq:function fq(){},
eR:function eR(){},
aG:function aG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
db:function db(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ev:function ev(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fA:function fA(a){this.a=a},
fx:function fx(a){this.a=a},
c7:function c7(a){this.a=a},
ej:function ej(a){this.a=a},
eU:function eU(){},
di:function di(){},
el:function el(a){this.a=a},
fV:function fV(a){this.a=a},
im:function im(a,b,c){this.a=a
this.b=b
this.c=c},
j:function j(){},
ew:function ew(){},
ah:function ah(){},
Q:function Q(){},
a0:function a0(a){this.a=a},
jw:function jw(a){this.a=a},
jt:function jt(a){this.a=a},
ju:function ju(a){this.a=a},
jv:function jv(a,b){this.a=a
this.b=b},
bL:function bL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
k9:function k9(a,b){this.a=a
this.b=b},
k8:function k8(a){this.a=a},
js:function js(a,b,c){this.a=a
this.b=b
this.c=c},
kl:function kl(a){this.a=a},
km:function km(){},
kn:function kn(){},
hf:function hf(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fN:function fN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
bp:function(a){var s,r,q,p,o
if(a==null)return null
s=P.V(t.N,t.A)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
mI:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.ko(a))return a
if(t.f.b(a))return P.mR(a)
if(t.r.b(a)){s=[]
J.eb(a,new P.kj(s))
a=s}return a},
mR:function(a){var s={}
J.eb(a,new P.kt(s))
return s},
k1:function k1(){},
k3:function k3(a,b){this.a=a
this.b=b},
k4:function k4(a,b){this.a=a
this.b=b},
kj:function kj(a){this.a=a},
kt:function kt(a){this.a=a},
k2:function k2(a,b){this.a=a
this.b=b},
er:function er(a,b){this.a=a
this.b=b},
ik:function ik(){},
il:function il(){},
hd:function hd(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aT:function aT(){},
eC:function eC(){},
aX:function aX(){},
eS:function eS(){},
iZ:function iZ(){},
c6:function c6(){},
fe:function fe(){},
o:function o(){},
aZ:function aZ(){},
fp:function fp(){},
h1:function h1(){},
h2:function h2(){},
h9:function h9(){},
ha:function ha(){},
hn:function hn(){},
ho:function ho(){},
hw:function hw(){},
hx:function hx(){},
hT:function hT(){},
eg:function eg(){},
hU:function hU(a){this.a=a},
eh:function eh(){},
b7:function b7(){},
eT:function eT(){},
fJ:function fJ(){},
dc:function dc(){},
f9:function f9(){},
hj:function hj(){},
hk:function hk(){}},W={
lG:function(){var s=document.createElement("a")
s.toString
return s},
lK:function(){var s=document.createElement("canvas")
s.toString
return s},
nM:function(a,b,c){var s=document.body
s.toString
s=new H.b1(new W.a6(C.p.ai(s,a,b,c)),new W.ia(),t.ac.M("b1<k.E>"))
return t.h.a(s.gaP(s))},
ib:function(a){return"wheel"},
cG:function(a){var s,r,q="element tag unavailable"
try{s=J.b3(a)
s.gef(a)
q=s.gef(a)}catch(r){H.al(r)}return q},
nP:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.al(s)}return q},
jU:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mr:function(a,b,c,d){var s=W.jU(W.jU(W.jU(W.jU(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
a7:function(a,b,c,d){var s=new W.dE(a,b,c==null?null:W.mO(new W.jS(c),t.aD),!1)
s.hk()
return s},
mq:function(a){var s=W.lG(),r=window
s=new W.ck(new W.jZ(s,r.location))
s.eC(a)
return s},
oB:function(a,b,c,d){return!0},
oC:function(a,b,c,d){var s,r,q,p=d.a,o=p.a
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
mv:function(){var s=t.N,r=P.lT(C.z,s),q=H.b(["TEMPLATE"],t.s)
s=new W.hr(r,P.cS(s),P.cS(s),P.cS(s),null)
s.eH(null,new H.cZ(C.z,new W.k5(),t.dv),q,null)
return s},
mO:function(a,b){var s=$.aM
if(s===C.f)return a
return s.dw(a,b)},
v:function v(){},
hQ:function hQ(){},
ec:function ec(){},
ed:function ed(){},
bQ:function bQ(){},
bu:function bu(){},
bv:function bv(){},
bw:function bw(){},
aH:function aH(){},
i1:function i1(){},
J:function J(){},
cC:function cC(){},
i2:function i2(){},
at:function at(){},
aR:function aR(){},
i3:function i3(){},
i4:function i4(){},
i5:function i5(){},
b9:function b9(){},
i6:function i6(){},
cD:function cD(){},
cE:function cE(){},
eo:function eo(){},
i7:function i7(){},
fK:function fK(a,b){this.a=a
this.b=b},
E:function E(){},
ia:function ia(){},
m:function m(){},
e:function e(){},
ag:function ag(){},
bW:function bW(){},
eq:function eq(){},
es:function es(){},
av:function av(){},
ip:function ip(){},
bA:function bA(){},
cL:function cL(){},
bZ:function bZ(){},
bB:function bB(){},
iA:function iA(){},
iR:function iR(){},
c0:function c0(){},
eJ:function eJ(){},
iS:function iS(a){this.a=a},
eK:function eK(){},
iT:function iT(a){this.a=a},
ay:function ay(){},
eL:function eL(){},
ao:function ao(){},
a6:function a6(a){this.a=a},
t:function t(){},
d6:function d6(){},
az:function az(){},
eY:function eY(){},
f3:function f3(){},
j5:function j5(a){this.a=a},
f5:function f5(){},
ap:function ap(){},
f7:function f7(){},
aC:function aC(){},
f8:function f8(){},
aD:function aD(){},
fc:function fc(){},
jd:function jd(a){this.a=a},
aj:function aj(){},
bk:function bk(){},
dj:function dj(){},
fg:function fg(){},
fh:function fh(){},
c9:function c9(){},
aq:function aq(){},
af:function af(){},
fj:function fj(){},
fk:function fk(){},
jh:function jh(){},
ar:function ar(){},
bG:function bG(){},
fo:function fo(){},
jm:function jm(){},
b0:function b0(){},
jx:function jx(){},
fE:function fE(){},
bl:function bl(){},
ci:function ci(){},
cj:function cj(){},
fL:function fL(){},
dD:function dD(){},
fZ:function fZ(){},
dJ:function dJ(){},
hi:function hi(){},
hp:function hp(){},
fI:function fI(){},
fS:function fS(a){this.a=a},
l_:function l_(a,b){this.a=a
this.$ti=b},
dE:function dE(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jS:function jS(a){this.a=a},
le:function le(a){this.$ti=a},
ck:function ck(a){this.a=a},
O:function O(){},
d7:function d7(a){this.a=a},
iW:function iW(a){this.a=a},
iV:function iV(a,b,c){this.a=a
this.b=b
this.c=c},
dP:function dP(){},
k_:function k_(){},
k0:function k0(){},
hr:function hr(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
k5:function k5(){},
hq:function hq(){},
cI:function cI(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
jZ:function jZ(a,b){this.a=a
this.b=b},
hB:function hB(a){this.a=a
this.b=0},
kd:function kd(a){this.a=a},
fM:function fM(){},
fO:function fO(){},
fP:function fP(){},
fQ:function fQ(){},
fR:function fR(){},
fW:function fW(){},
fX:function fX(){},
h_:function h_(){},
h0:function h0(){},
h3:function h3(){},
h4:function h4(){},
h5:function h5(){},
h6:function h6(){},
h7:function h7(){},
h8:function h8(){},
hb:function hb(){},
hc:function hc(){},
he:function he(){},
dQ:function dQ(){},
dR:function dR(){},
hg:function hg(){},
hh:function hh(){},
hm:function hm(){},
hs:function hs(){},
ht:function ht(){},
dT:function dT(){},
dU:function dU(){},
hu:function hu(){},
hv:function hv(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(){},
hF:function hF(){},
hG:function hG(){},
hH:function hH(){},
hI:function hI(){},
hJ:function hJ(){},
hK:function hK(){},
hL:function hL(){}},K={
R:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.f("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.D(a,0)
r=C.a.D(b,0)
if(s>r){q=r
r=s
s=q}return new K.f0(s,r)},
aO:function aO(){},
cK:function cK(){},
ae:function ae(a){this.a=a},
f0:function f0(a,b){this.a=a
this.b=b},
u:function u(a){this.a=a}},L={
jk:function(){var s=t.N
return new L.jj(P.V(s,t.dl),P.V(s,t.f7),P.cS(s))},
fa:function fa(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
fm:function fm(a,b,c){this.a=a
this.b=b
this.c=c},
fn:function fn(a,b){this.b=a
this.c=b},
jj:function jj(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dm:function dm(a,b){this.b=a
this.c=!1
this.a=b}},O={
kX:function(a){return new O.an(H.b([],a.M("w<0>")),a.M("an<0>"))},
an:function an(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
d2:function d2(a){this.a=a
this.b=null},
eI:function(a,b){return new O.d0(new V.T(0,0,0),a,b,new A.aJ(!1,!1,!1))},
d_:function d_(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
iJ:function iJ(a,b){this.a=a
this.b=b},
iK:function iK(){},
iL:function iL(a,b){this.a=a
this.b=b},
iM:function iM(){},
iN:function iN(a,b){this.a=a
this.b=b},
iO:function iO(){},
iP:function iP(a,b){this.a=a
this.b=b},
iQ:function iQ(){},
iD:function iD(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c},
eH:function eH(){},
iE:function iE(a,b,c){this.a=a
this.b=b
this.c=c},
d0:function d0(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d},
iG:function iG(a){this.b=a},
iH:function iH(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d},
iI:function iI(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d},
dk:function dk(){}},E={
lQ:function(){var s=O.kX(t.l),r=new E.bz(s)
s.bp(r.ghX(),r.gi_())
r.sap(0,null)
r.sbj(null)
return r},
mn:function(){var s=window.navigator.vendor
s.toString
if(C.a.C(s,"Google"))return C.F
s=window.navigator.userAgent
s.toString
if(C.a.C(s,"Firefox"))return C.q
s=window.navigator.appVersion
s.toString
if(C.a.C(s,"Trident")||C.a.C(s,"Edge"))return C.r
s=window.navigator.appName
s.toString
if(C.a.C(s,"Microsoft"))return C.r
return C.G},
mo:function(){var s=window.navigator.appVersion
s.toString
if(C.a.C(s,"Win"))return C.a0
if(C.a.C(s,"Mac"))return C.A
if(C.a.C(s,"Linux"))return C.a1
return C.a2},
of:function(a,b){var s
Date.now()
s=t.fA
s=new E.j1(a,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1),new O.d2(H.b([],s)),new O.d2(H.b([],s)),new O.d2(H.b([],s)),H.b([null],t.bc),P.V(t.N,t.fg))
s.eA(a,b)
return s},
oo:function(a,b,c,d,e){var s,r
if(t.gA.b(a))return E.ma(a,!0,!0,!0,!1)
s=W.lK()
r=s.style
r.width="100%"
r.height="100%"
J.nx(a).n(0,s)
return E.ma(s,!0,!0,!0,!1)},
ma:function(a,b,c,d,e){var s,r,q,p,o="mousemove",n=t.A,m=t.gW.a(C.l.en(a,"webgl2",P.nX(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n)))
if(m==null)throw H.c(P.f("Failed to get the rendering context for WebGL."))
s=E.of(m,a)
H.kh(m.getParameter(3379))
H.kh(m.getParameter(34076))
n=H.b([],t.g9)
r=$.id
q=new X.fC(a,n,(r==null?$.id=new E.fT(E.mn(),E.mo()):r).a===C.q?0.16666666666666666:0.005555555555555556)
p=document
p.toString
n.push(W.a7(p,"contextmenu",q.gfn(),!1))
n.push(W.a7(a,"focus",q.gfu(),!1))
n.push(W.a7(a,"blur",q.gfg(),!1))
n.push(W.a7(p,"keyup",q.gfA(),!1))
n.push(W.a7(p,"keydown",q.gfw(),!1))
n.push(W.a7(a,"mousedown",q.gfE(),!1))
n.push(W.a7(a,"mouseup",q.gfI(),!1))
n.push(W.a7(a,o,q.gfG(),!1))
W.ib(a)
W.ib(a)
n.push(W.a7(a,W.ib(a),q.gfK(),!1))
n.push(W.a7(p,o,q.gfp(),!1))
n.push(W.a7(p,"mouseup",q.gfs(),!1))
n.push(W.a7(p,"pointerlockchange",q.gfM(),!1))
n.push(W.a7(a,"touchstart",q.gfZ(),!1))
n.push(W.a7(a,"touchend",q.gfV(),!1))
n.push(W.a7(a,"touchmove",q.gfX(),!1))
n=new E.fl(a,s,q,new P.Z(Date.now(),!1))
n.da()
return n},
hX:function hX(){},
bz:function bz(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bS:function bS(a){this.b=a},
c4:function c4(a){this.b=a},
fT:function fT(a,b){this.a=a
this.b=b},
j1:function j1(a,b,c,d,e,f,g,h){var _=this
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
j2:function j2(a){this.a=a},
j3:function j3(a){this.a=a},
j4:function j4(a){this.a=a},
fl:function fl(a,b,c,d){var _=this
_.b=a
_.d=null
_.e=b
_.x=c
_.Q=null
_.cx=!1
_.cy=d
_.db=0},
jg:function jg(a){this.a=a}},Z={
ld:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cn(c)),35044)
a.bindBuffer(b,null)
return new Z.fF(b,s)},
aE:function(a){return new Z.bJ(a)},
fF:function fF(a,b){this.a=a
this.b=b},
bT:function bT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jN:function jN(a){this.a=a},
cx:function cx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bY:function bY(a,b,c){this.a=a
this.b=b
this.c=c},
bJ:function bJ(a){this.a=a}},D={
N:function(){return new D.bV()},
hZ:function hZ(){},
bV:function bV(){var _=this
_.c=_.b=_.a=null
_.d=0},
ih:function ih(a){this.a=a},
ii:function ii(a){this.a=a},
U:function U(){},
bb:function bb(){},
bc:function bc(){},
G:function G(a,b,c){this.c=a
this.d=b
this.e=c},
kY:function(a,b){var s=new D.bU(new V.T(1,1,1),V.lc(),V.mm(),V.ow()),r=s.a
s.a=b
b.gv().n(0,s.geE())
s.aA(new D.G("mover",r,s.a))
if(!s.b.q(0,a)){r=s.b
s.b=a
s.aA(new D.G("color",r,a))}return s},
bU:function bU(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=null},
cQ:function cQ(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={cy:function cy(a,b){this.a=a
this.b=b},eB:function eB(a,b){this.a=a
this.b=b},iv:function iv(a,b){this.c=a
this.d=b},cW:function cW(a,b,c){this.x=a
this.c=b
this.d=c},iB:function iB(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},c1:function c1(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},iU:function iU(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},c2:function c2(a,b,c){this.x=a
this.c=b
this.d=c},f_:function f_(){},dl:function dl(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},jl:function jl(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},fC:function fC(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
nO:function(a){var s=new V.aQ(0,0,0,1),r=$.m5
if(r==null){r=V.m4(0,0,1,1)
$.m5=r}return new X.io(s,r)},
io:function io(a,b){this.a=a
this.r=b
this.x=null},
eV:function eV(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
jf:function jf(){}},V={
hN:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
kU:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bo(a-b,s)
return(a<0?a+s:a)+b},
A:function(a,b,c){$.F().toString
return C.a.al(C.d.cK(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cs:function(a,b,c){var s,r,q,p,o,n,m,l=H.b([],t.s)
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.q)(a),++p){o=a[p]
$.F().toString
n=C.a.al(C.d.cK(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.d(l,m)
s=C.a.al(l[m],q)
r=l.length
if(m>=r)return H.d(l,m)
l[m]=s}return l},
ax:function(){var s=$.lZ
return s==null?$.lZ=V.aW(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aW:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lY:function(a,b,c,d){return V.aW(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lV:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aW(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
lW:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aW(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
lX:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aW(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)},
o2:function(){var s=$.aY
return s==null?$.aY=new V.W(0,0,0):s},
m4:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f2(a,b,c,d)},
dB:function(){var s=$.ml
return s==null?$.ml=new V.D(0,0,0):s},
ow:function(){var s=$.jD
return s==null?$.jD=new V.D(-1,0,0):s},
mm:function(){var s=$.jE
return s==null?$.jE=new V.D(0,1,0):s},
lc:function(){var s=$.jF
return s==null?$.jF=new V.D(0,0,1):s},
ou:function(a,b,c){return new V.D(a,b,c)},
ov:function(a){return new V.D(a.a,a.b,a.c)},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
aQ:function aQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ie:function ie(){},
d1:function d1(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bg:function bg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a2:function a2(a,b){this.a=a
this.b=b},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
bE:function bE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f2:function f2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a5:function a5(a,b){this.a=a
this.b=b},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
qn:function(a){P.op(C.R,new V.kQ(a))},
oh:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.a7(n,"scroll",new V.ja(s),!1)
return new V.j8(o)},
aI:function aI(){},
kQ:function kQ(a){this.a=a},
em:function em(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
et:function et(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
eu:function eu(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
eX:function eX(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
j_:function j_(a,b,c){this.a=a
this.b=b
this.c=c},
j0:function j0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j8:function j8(a){this.a=a
this.b=null},
ja:function ja(a){this.a=a},
j9:function j9(a){this.a=a},
jb:function jb(a){this.a=a}},U={
i0:function(){return new U.i_()},
lM:function(a){var s=V.ax(),r=new U.cz(s)
if(!s.q(0,a))r.a=a
return r},
l7:function(a,b,c){var s,r=new U.dd(V.ax())
r.sel(0)
r.se8(0,0)
r.see(0)
s=r.d
$.F().toString
if(!(Math.abs(s-c)<1e-9)){r.d=c
r.L(new D.G("deltaYaw",s,c))}s=r.e
$.F().toString
if(!(Math.abs(s-a)<1e-9)){r.e=a
r.L(new D.G("deltaPitch",s,a))}s=r.f
$.F().toString
if(!(Math.abs(s-b)<1e-9)){r.f=b
r.L(new D.G("deltaRoll",s,b))}return r},
i_:function i_(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
cz:function cz(a){this.a=a
this.b=null},
bX:function bX(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
a_:function a_(){},
dd:function dd(a){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=0
_.x=a
_.y=null},
dy:function dy(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.y=_.x=!1
_.z=0
_.Q=c
_.ch=0
_.cx=d
_.cy=null},
dz:function dz(a,b,c,d,e){var _=this
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
dA:function dA(a,b){var _=this
_.a=null
_.b=a
_.e=_.d=0
_.f=b
_.r=null},
qk:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="testCanvas",a0=null,a1="modifiers",a2=V.oh("Test 020"),a3=W.lK()
a3.className="pageLargeCanvas"
a3.id=a
a2.a.appendChild(a3).toString
s=t.s
a2.dn(H.b(["Test of the Material Lighting shader with multiple moving directional lights."],s))
a2.hm(H.b(["shapes"],s))
a2.dn(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(a)
if(r==null)H.h(P.f("Failed to find an element with the identifier, testCanvas."))
q=E.oo(r,!0,!0,!0,!1)
p=U.l7(0,0,0.3)
o=D.kY(new V.T(1,0,0),p)
p=U.l7(0.4,0,0)
n=D.kY(new V.T(0,1,0),p)
p=U.l7(0.5,0,0.5)
m=D.kY(new V.T(0,0,1),p)
p=O.kX(t.gc)
l=new O.d_(p)
p.bp(l.gfc(),l.gfe())
p=l.gbB()
p.gv().n(0,l.gd8())
p.gdY().n(0,l.gd5())
l.gbB().n(0,o)
l.gbB().n(0,n)
l.gbB().n(0,m)
l.gdD().saG(0,new V.T(0,0,0))
p=l.gdq()
p.saG(0,new V.T(0.1,0.1,0.1))
p=l.gdB()
p.saG(0,new V.T(0.7,0.7,0.7))
p=l.gbJ()
p.saG(0,new V.T(0.3,0.3,0.3))
p=l.gbJ()
p.dd(new A.aJ(!0,!1,!1))
p.de(100)
k=E.lQ()
k.sap(0,F.n4())
j=E.lQ()
j.sbj(U.lM(V.lY(3,3,3,1)))
p=F.lu(1,a0,a0,1)
p.ct()
j.sap(0,p)
i=new U.bX(V.ax(),H.b([],t.eJ))
i.bp(i.gf8(),i.gfR())
p=q.x
h=U.i0()
g=U.i0()
f=$.bI
if(f==null)f=$.bI=new V.a5(0,0)
f=new U.dz(h,g,new X.a9(!1,!1,!1),f,V.ax())
h.scN(0,!0)
h.scz(6.283185307179586)
h.scB(0)
h.sZ(0,0)
h.scA(100)
h.sa0(0)
h.scj(0.5)
e=f.gaT()
h.gv().n(0,e)
g.scN(0,!0)
g.scz(6.283185307179586)
g.scB(0)
g.sZ(0,0)
g.scA(100)
g.sa0(0)
g.scj(0.5)
g.gv().n(0,e)
h=new X.a9(!1,!1,!1)
if(!f.d.q(0,h)){d=f.d
f.d=h
f.L(new D.G(a1,d,h))}f.bf(p)
i.n(0,f)
U.i0()
if($.bI==null)$.bI=new V.a5(0,0)
V.ax()
h=U.i0()
g=$.bI
if(g==null)g=$.bI=new V.a5(0,0)
g=new U.dy(h,new X.a9(!1,!1,!1),g,V.ax())
h.scN(0,!0)
h.scz(6.283185307179586)
h.scB(0)
h.sZ(0,0)
h.scA(100)
h.sa0(0)
h.scj(0.2)
h.gv().n(0,g.gaT())
h=new X.a9(!0,!1,!1)
if(!g.c.q(0,h)){d=g.c
g.c=h
g.L(new D.G(a1,d,h))}g.bf(p)
i.n(0,g)
h=new X.a9(!1,!1,!1)
g=new U.dA(h,V.ax())
f=new X.a9(!1,!1,!1)
if(!h.q(0,f)){g.b=f
g.L(new D.G(a1,h,f))}g.bf(p)
i.n(0,g)
i.n(0,U.lM(V.aW(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
p=O.kX(t.l)
h=new M.ep(p)
p.bp(h.gfj(),h.gfl())
c=X.nO(a0)
b=new X.eV(1.0471975511965976,0.1)
b.sbj(a0)
g=b.c
$.F().toString
if(!(Math.abs(g-1.0471975511965976)<1e-9)){b.c=1.0471975511965976
b.aU(new D.G("fov",g,1.0471975511965976))}g=b.d
$.F().toString
if(!(Math.abs(g-0.1)<1e-9)){b.d=0.1
b.aU(new D.G("near",g,0.1))}g=b.e
$.F().toString
if(!(Math.abs(g-2000)<1e-9)){b.e=2000
b.aU(new D.G("far",g,2000))}g=h.b
if(g!==b){if(g!=null)g.gv().O(0,h.gas())
d=h.b
h.b=b
b.gv().n(0,h.gas())
h.aB(new D.G("camera",d,h.b))}g=h.c
if(g!==c){if(g!=null)g.gv().O(0,h.gas())
d=h.c
h.c=c
c.gv().n(0,h.gas())
h.aB(new D.G("target",d,h.c))}h.seg(a0)
h.seg(l)
p.n(0,k)
p.n(0,j)
p=h.b
if(p!=null)p.sbj(i)
p=q.d
if(p!==h){if(p!=null)p.gv().O(0,q.gcT())
q.d=h
h.gv().n(0,q.gcT())
q.cU()}r=s.getElementById("shapes")
if(r==null)H.h(P.f("Failed to find shapes for RadioGroup"))
s=new V.j_("shapes",!0,r)
s.be(0,"Cube",new U.kI(k))
s.be(0,"Cylinder",new U.kJ(k))
s.be(0,"Cone",new U.kK(k))
s.be(0,"Sphere",new U.kL(k))
s.dl(0,"Toroid",new U.kM(k),!0)
s.be(0,"Knot",new U.kN(k))
s=q.Q
if(s==null)s=q.Q=D.N()
p=s.b
s=p==null?s.b=H.b([],t.a):p
s.push(new U.kO(a2,l))
V.qn(q)},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a,b){this.a=a
this.b=b}},M={ep:function ep(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
o0:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=""+"MaterialLight_"+a4.gar(a4)+a5.gar(a5)+a6.gar(a6)+a7.gar(a7)+a8.gar(a8)+a9.gar(a9)+b0.gar(b0)+b1.gar(b1)+b2.gar(b2)+"_"
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
c=$.bt()
if(h){s=$.bs()
c=new Z.bJ(c.a|s.a)}if(g)c=new Z.bJ(c.a|$.br().a)
if(f)c=new Z.bJ(c.a|$.bq().a)
return new A.iF(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
kq:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
kr:function(a,b,c){var s
A.kq(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hO(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
pz:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.kq(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
pv:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.kr(b,r,"ambient")
b.a+="\n"},
px:function(a,b){var s,r=a.c
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.kr(b,r,"diffuse")
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
pA:function(a,b){var s,r=a.d
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.kr(b,r,"invDiffuse")
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
pG:function(a,b){var s,r=a.e
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.kr(b,r,"specular")
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
pC:function(a,b){var s,r,q
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
pE:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.kq(b,r,"reflect")
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
pF:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.kq(b,r,"refract")
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
pw:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.hO(r)
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
n=H.b([],p)
if(!a.c.a)s=!1
else s=!0
if(s)n.push("diffuse(norm, normDir)")
if(!a.d.a)s=!1
else s=!0
if(s)n.push("invDiffuse(norm, normDir)")
if(!a.e.a)s=!1
else s=!0
if(s)n.push("specular(norm, normDir)")
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
py:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+s
q=A.hO(r)
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
if(!a.b.a)l=!1
else l=!0
if(l)m.push("ambientColor")
if(a.dx){c.a+=u.k
k=H.b([],p)
if(!a.c.a)p=!1
else p=!0
if(p)k.push("diffuse(norm, lit.viewDir)")
if(!a.d.a)p=!1
else p=!0
if(p)k.push("invDiffuse(norm, lit.viewDir)")
if(!a.e.a)p=!1
else p=!0
if(p)k.push("specular(norm, lit.viewDir)")
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
pD:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.hO(r)
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
if(!a.b.a)m=!1
else m=!0
if(m)j.push("ambientColor")
if(a.dx){c.a+=u.k
j.push("highLight")
k=s?", txtCube":""
if(n)k+=", shadowCube"
m=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
m+="   vec3 intensity = "+r+"Intensity(normDir, lit"+k+");\n"
c.a=m
c.a=m+"   if(length(intensity) > 0.0001) {\n"
i=H.b([],p)
if(!a.c.a)p=!1
else p=!0
if(p)i.push("diffuse(norm, normDir)")
if(!a.d.a)p=!1
else p=!0
if(p)i.push("invDiffuse(norm, normDir)")
if(!a.e.a)p=!1
else p=!0
if(p)i.push("specular(norm, normDir)")
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
pH:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.hO(r)
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
if(m){s=$.id
if(s==null)s=$.id=new E.fT(E.mn(),E.mo())
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
if(!a.b.a)p=!1
else p=!0
if(p)h.push("ambientColor")
if(a.dx){c.a+=u.k
h.push("highLight")
i=k?", txt2D":""
if(n)i+=", shadow2D"
p=c.a+="   vec3 intensity = "+r+"Intensity(lit"+i+");\n"
p+="   if(length(intensity) > 0.0001) {\n"
c.a=p
c.a=p+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
g=H.b([],s)
if(!a.c.a)s=!1
else s=!0
if(s)g.push("diffuse(norm, litVec)")
if(!a.d.a)s=!1
else s=!0
if(s)g.push("invDiffuse(norm, litVec)")
if(!a.e.a)s=!1
else s=!0
if(s)g.push("specular(norm, litVec)")
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
pB:function(a,b){var s,r
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
s=b.a+="   return "+C.b.j(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
pI:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.a0(""),j=""+"precision mediump float;\n"
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
A.pz(a,k)
A.pv(a,k)
A.px(a,k)
A.pA(a,k)
A.pG(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.pE(a,k)
A.pF(a,k)}A.pC(a,k)
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
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pw(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.py(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pD(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pH(a,p[n],k)
A.pB(a,k)}p=k.a+="// === Main ===\n"
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
k.a+=l+(q[0].toUpperCase()+C.a.aa(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.aa(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.aa(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.aa(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)j=!1
else j=!0
if(j)m.push("emissionColor()")
if(!a.r.a)j=!1
else j=!0
if(j)m.push("reflect(refl)")
if(!a.x.a)j=!1
else j=!0
if(j)m.push("refract(refl)")
if(m.length<=0)m.push("vec3(0.0, 0.0, 0.0)")
j=k.a+="   vec4 objClr = vec4("+C.b.j(m," + ")+", alpha);\n"
if(r)j=k.a=j+"   objClr = colorMat*objClr;\n"
j+="   gl_FragColor = objClr;\n"
k.a=j
j=k.a=j+"}\n"
return j.charCodeAt(0)==0?j:j},
pJ:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.b0+"];\n"
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
pL:function(a,b){var s
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
pK:function(a,b){var s
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
pN:function(a,b){var s,r
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
pO:function(a,b){var s,r
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
pM:function(a,b){var s
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
pP:function(a,b){var s
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
hO:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.aa(a,1)},
lb:function(a,b,c,d,e){var s=new A.fr(H.b([],t.t),a,c,e)
s.f=d
s.e=P.cV(d,0,!1,t.S)
return s},
ef:function ef(a,b,c){this.a=a
this.b=b
this.c=c},
hS:function hS(a){this.a=a},
aJ:function aJ(a,b,c){this.a=a
this.b=b
this.c=c},
eG:function eG(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.iH=_.iG=_.dM=_.iF=_.iE=_.dL=_.dK=_.iD=_.iC=_.dJ=_.dI=_.iB=_.iA=_.dH=_.iz=_.iy=_.dG=_.dF=_.bw=_.b0=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.ck=c
_.cl=d
_.cm=e
_.cn=f
_.co=g
_.cp=h
_.cq=i
_.cr=j
_.iK=_.iJ=_.iI=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
b6:function b6(a,b){this.a=a
this.b=b},
b8:function b8(a,b){this.a=a
this.b=b},
bh:function bh(a,b){this.a=a
this.b=b},
bj:function bj(a,b){this.a=a
this.b=b},
iF:function iF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.b0=b5
_.bw=b6
_.dF=b7},
dr:function dr(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ds:function ds(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
du:function du(a,b,c,d,e,f,g,h,i,j){var _=this
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
dx:function dx(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
df:function df(){},
a3:function a3(){},
jq:function jq(a){this.a=a},
cb:function cb(a,b,c){this.a=a
this.c=b
this.d=c},
ft:function ft(a,b,c){this.a=a
this.c=b
this.d=c},
fu:function fu(a,b,c){this.a=a
this.c=b
this.d=c},
fv:function fv(a,b,c){this.a=a
this.c=b
this.d=c},
fr:function fr(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
dn:function dn(a,b,c){this.a=a
this.c=b
this.d=c},
fs:function fs(a,b,c){this.a=a
this.c=b
this.d=c},
dp:function dp(a,b,c){this.a=a
this.c=b
this.d=c},
dq:function dq(a,b,c){this.a=a
this.c=b
this.d=c},
fw:function fw(a,b,c){this.a=a
this.c=b
this.d=c},
dt:function dt(a,b,c){this.a=a
this.c=b
this.d=c},
cc:function cc(a,b,c){this.a=a
this.c=b
this.d=c},
dv:function dv(a,b,c){this.a=a
this.c=b
this.d=c},
dw:function dw(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lu:function(a,b,c,d){var s=F.l8()
F.e1(s,b,c,d,a,1,0,0,1)
F.e1(s,b,c,d,a,0,1,0,3)
F.e1(s,b,c,d,a,0,0,1,2)
F.e1(s,b,c,d,a,-1,0,0,0)
F.e1(s,b,c,d,a,0,-1,0,0)
F.e1(s,b,c,d,a,0,0,-1,3)
s.au()
return s},
kk:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
e1:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.D(g,f+a2,e+a3)
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
i.d=h}k=F.kk(h)
j=F.kk(g)
a.bi(F.lB(a0,a1,new F.kf(i,F.kk(f),F.kk(e),j,k,c),b))},
mU:function(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(a1<3)throw H.c(P.f("Must have 3 or more sizes for a disk."))
s=F.l8()
r=b?-1:1
q=-6.283185307179586/a1
p=t.k
o=H.b([],p)
n=s.gY()
m=new V.D(0,0,r).I()
o.push(n.hq(new V.bE(a,-1,-1,-1),new V.aQ(1,1,1,1),new V.W(0,0,c),new V.D(0,0,r),new V.a2(0.5,0.5),m))
for(l=0;l<=a1;++l){k=q*l
j=r*Math.sin(k)
i=Math.cos(k)
h=a0.$1(l/a1)
n=s.a
if(n==null)n=s.a=new F.y(s,H.b([],p))
m=new V.D(j,i,r).I()
if(j<0)g=0
else g=j>1?1:j
f=i<0
if(f)e=0
else e=i>1?1:i
if(f)f=0
else f=i>1?1:i
d=F.fD(new V.bE(a,-1,-1,-1),null,new V.aQ(g,e,f,1),new V.W(j*h,i*h,c),new V.D(0,0,r),new V.a2(j*0.5+0.5,i*0.5+0.5),m,null,0)
n.n(0,d)
o.push(d)}s.gS().ho(o)
return s},
mS:function(a,b,c){return F.q5(!0,a,1,new F.ku(1,c),b)},
q5:function(a,b,c,d,e){var s
if(e<3)throw H.c(P.f("Must have 3 or more sizes for a cylindrical shape."))
if(c<1)throw H.c(P.f("Must have 1 or more divisionss for a cylindrical shape."))
s=F.lB(c,e,new F.kw(d),null)
s.au()
s.cb()
if(b)s.bi(F.mU(3,!1,1,new F.kx(d),e))
s.bi(F.mU(1,!0,-1,new F.ky(d),e))
return s},
qo:function(a,b){var s=F.lu(a,null,new F.kR(1,new F.kS()),b)
s.cb()
return s},
n4:function(){return F.mT(15,30,0.5,1,new F.kT())},
qi:function(){return F.mT(12,120,0.3,1,new F.kH(3,2))},
mT:function(a,b,c,d,e){var s=F.lB(a,b,new F.kv(e,d,b,c),null)
s.au()
s.cb()
return s},
lB:function(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null
if(a<1)throw H.c(P.f("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.f("Must have 1 or more divisions of the height for a surface."))
s=F.l8()
r=t.k
q=H.b([],r)
for(p=0;p<=b;++p){o=p/b
n=s.a
if(n==null)n=s.a=new F.y(s,H.b([],r))
if(o<0)m=0
else m=o>1?1:o
l=F.fD(d,d,new V.aQ(m,0,0,1),d,d,new V.a2(o,1),d,d,0)
n.n(0,l)
c.$3(l,o,0)
q.push(l.ci(a0))}for(p=1;p<=a;++p){k=p/a
for(n=k>1,m=k<0,j=1-k,i=0;i<=b;++i){o=i/b
h=s.a
if(h==null)h=s.a=new F.y(s,H.b([],r))
if(o<0)g=0
else g=o>1?1:o
if(m)f=0
else f=n?1:k
if(m)e=0
else e=n?1:k
l=F.fD(d,d,new V.aQ(g,f,e,1),d,d,new V.a2(o,j),d,d,0)
h.n(0,l)
c.$3(l,o,k)
q.push(l.ci(a0))}}s.gS().hp(a+1,b+1,q)
return s},
l8:function(){return new F.j6()},
fD:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cf()
h=$.nm()
s=$.bt()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.bs().a)!==0)q.r=e
if((r&$.br().a)!==0)q.x=b
if((r&$.bO().a)!==0)q.y=f
if((r&$.bP().a)!==0)q.z=g
if((r&$.nn().a)!==0)q.Q=c
if((r&$.ct().a)!==0)q.ch=i
if((r&$.bq().a)!==0)q.cx=a
return q},
kf:function kf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ku:function ku(a,b){this.a=a
this.b=b},
kw:function kw(a){this.a=a},
kx:function kx(a){this.a=a},
ky:function ky(a){this.a=a},
kS:function kS(){},
kR:function kR(a,b){this.a=a
this.b=b},
kT:function kT(){},
kH:function kH(a,b){this.a=a
this.b=b},
kv:function kv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
au:function au(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ij:function ij(){},
jc:function jc(){},
eD:function eD(){this.b=this.a=null},
iw:function iw(){},
jp:function jp(){},
eZ:function eZ(){this.a=null},
j6:function j6(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
j7:function j7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dg:function dg(a,b){this.a=a
this.b=b},
dh:function dh(a,b){this.a=a
this.b=b},
bF:function bF(a,b){this.a=a
this.b=b},
cf:function cf(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
jM:function jM(a){this.a=a},
jL:function jL(a){this.a=a},
y:function y(a,b){this.a=a
this.b=!1
this.c=b},
cg:function cg(a,b,c){this.b=a
this.c=b
this.d=c},
jG:function jG(a,b){this.a=a
this.b=b},
jH:function jH(a,b){this.a=a
this.b=b},
ch:function ch(a,b){this.b=a
this.c=b},
jJ:function jJ(){},
jI:function jI(){},
jK:function jK(){},
iX:function iX(){},
dC:function dC(a){this.b=a}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l3.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gF:function(a){return H.d9(a)},
i:function(a){return"Instance of '"+H.da(a)+"'"}}
J.ex.prototype={
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$iad:1}
J.cO.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0}}
J.be.prototype={
gF:function(a){return 0},
i:function(a){return String(a)},
$ilS:1}
J.eW.prototype={}
J.bH.prototype={}
J.aS.prototype={
i:function(a){var s=a[$.n8()]
if(s==null)return this.ev(a)
return"JavaScript function for "+J.cu(s)},
$icJ:1}
J.w.prototype={
cG:function(a,b){if(!!a.fixed$length)H.h(P.C("removeAt"))
if(b<0||b>=a.length)throw H.c(P.f1(b,null))
return a.splice(b,1)[0]},
O:function(a,b){var s
if(!!a.fixed$length)H.h(P.C("remove"))
for(s=0;s<a.length;++s)if(J.M(a[s],b)){a.splice(s,1)
return!0}return!1},
af:function(a,b){if(!!a.fixed$length)H.h(P.C("addAll"))
this.eM(a,b)
return},
eM:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.aK(a))
for(s=0;s<r;++s)a.push(b[s])},
E:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.aK(a))}},
j:function(a,b){var s,r,q=a.length,p=P.cV(q,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.x(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
hT:function(a){return this.j(a,"")},
hN:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.aK(a))}return s},
hO:function(a,b,c){return this.hN(a,b,c,t.A)},
hM:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.aK(a))}throw H.c(H.is())},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ghL:function(a){if(a.length>0)return a[0]
throw H.c(H.is())},
gaw:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.is())},
dr:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.aK(a))}return!1},
b8:function(a,b){if(!!a.immutable$list)H.h(P.C("sort"))
H.ok(a,b==null?J.pm():b)},
eq:function(a){return this.b8(a,null)},
C:function(a,b){var s
for(s=0;s<a.length;++s)if(J.M(a[s],b))return!0
return!1},
i:function(a){return P.l0(a,"[","]")},
gR:function(a){return new J.am(a,a.length)},
gF:function(a){return H.d9(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.h(P.C("set length"))
if(b>a.length)H.kg(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.cr(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.h(P.C("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cr(a,b))
a[b]=c},
$iz:1,
$in:1,
$ij:1,
$ip:1}
J.it.prototype={}
J.am.prototype={
gB:function(a){return H.X(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.q(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.c_.prototype={
ah:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbz(b)
if(this.gbz(a)===s)return 0
if(this.gbz(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbz:function(a){return a===0?1/a<0:a<0},
dN:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.C(""+a+".floor()"))},
aq:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.C(""+a+".round()"))},
cK:function(a,b){var s
if(b>20)throw H.c(P.aa(b,0,20,"fractionDigits",null))
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
ex:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dg(a,b)},
a4:function(a,b){return(a|0)===a?a/b|0:this.dg(a,b)},
dg:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.C("Result of truncating division is "+H.x(s)+": "+H.x(a)+" ~/ "+b))},
aY:function(a,b){var s
if(a>0)s=this.df(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hd:function(a,b){if(b<0)throw H.c(H.e6(b))
return this.df(a,b)},
df:function(a,b){return b>31?0:a>>>b},
$iH:1,
$ia4:1}
J.cN.prototype={$ii:1}
J.ey.prototype={}
J.bd.prototype={
V:function(a,b){if(b<0)throw H.c(H.cr(a,b))
if(b>=a.length)H.h(H.cr(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.c(H.cr(a,b))
return a.charCodeAt(b)},
W:function(a,b){return a+b},
b4:function(a,b,c,d){var s=P.bi(b,c,a.length),r=a.substring(0,b),q=a.substring(s)
return r+d+q},
a8:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.aa(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a1:function(a,b){return this.a8(a,b,0)},
t:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.f1(b,null))
if(b>c)throw H.c(P.f1(b,null))
if(c>a.length)throw H.c(P.f1(c,null))
return a.substring(b,c)},
aa:function(a,b){return this.t(a,b,null)},
io:function(a){return a.toLowerCase()},
J:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.O)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
al:function(a,b){var s=b-a.length
if(s<=0)return a
return this.J(" ",s)+a},
bx:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.aa(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dT:function(a,b){return this.bx(a,b,0)},
hx:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aa(c,0,s,null,null))
return H.n3(a,b,c)},
C:function(a,b){return this.hx(a,b,0)},
ah:function(a,b){var s
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
H.cP.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.r.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.V(this.a,b)}}
H.n.prototype={}
H.cU.prototype={
gR:function(a){return new H.bf(this,this.gl(this))},
bH:function(a,b){return this.eu(0,b)}}
H.bf.prototype={
gB:function(a){return H.X(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=J.bM(q),o=p.gl(q)
if(r.b!==o)throw H.c(P.aK(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.K(q,s);++r.c
return!0}}
H.aU.prototype={
gR:function(a){return new H.eF(J.aF(this.a),this.b)},
gl:function(a){return J.aN(this.a)},
K:function(a,b){return this.b.$1(J.hP(this.a,b))}}
H.cF.prototype={$in:1}
H.eF.prototype={
u:function(){var s=this,r=s.b
if(r.u()){s.a=s.c.$1(r.gB(r))
return!0}s.a=null
return!1},
gB:function(a){return H.X(this).Q[1].a(this.a)}}
H.cZ.prototype={
gl:function(a){return J.aN(this.a)},
K:function(a,b){return this.b.$1(J.hP(this.a,b))}}
H.b1.prototype={
gR:function(a){return new H.fG(J.aF(this.a),this.b)}}
H.fG.prototype={
u:function(){var s,r
for(s=this.a,r=this.b;s.u();)if(r.$1(s.gB(s)))return!0
return!1},
gB:function(a){var s=this.a
return s.gB(s)}}
H.cH.prototype={}
H.fz.prototype={
m:function(a,b,c){throw H.c(P.C("Cannot modify an unmodifiable list"))}}
H.cd.prototype={}
H.cA.prototype={
i:function(a){return P.l6(this)},
m:function(a,b,c){H.nJ()},
$iI:1}
H.cB.prototype={
gl:function(a){return this.a},
cf:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.cf(0,b))return null
return this.d2(b)},
d2:function(a){return this.b[a]},
E:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.d2(q))}}}
H.jn.prototype={
ak:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.d8.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.eA.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.fy.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.iY.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.hl.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bx.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.n6(r==null?"unknown":r)+"'"},
$icJ:1,
gir:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fi.prototype={}
H.fb.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.n6(s)+"'"}}
H.bR.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bR))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gF:function(a){var s,r=this.c
if(r==null)s=H.d9(this.a)
else s=typeof r!=="object"?J.kW(r):H.d9(r)
return(s^H.d9(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.x(this.d)+"' of "+("Instance of '"+H.da(s)+"'")}}
H.f4.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.Y.prototype={
gl:function(a){return this.a},
gby:function(a){return this.a===0},
ga2:function(a){return new H.cR(this,H.X(this).M("cR<1>"))},
giq:function(a){var s=this,r=H.X(s)
return H.o_(s.ga2(s),new H.iu(s),r.c,r.Q[1])},
cf:function(a,b){var s=this.b
if(s==null)return!1
return this.eV(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.br(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.br(p,b)
q=r==null?n:r.b
return q}else return o.hR(b)},
hR:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.d3(p,q.dU(a))
r=q.dV(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cX(s==null?q.b=q.c0():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cX(r==null?q.c=q.c0():r,b,c)}else q.hS(b,c)},
hS:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.c0()
s=p.dU(a)
r=p.d3(o,s)
if(r==null)p.c5(o,s,[p.c1(a,b)])
else{q=p.dV(r,a)
if(q>=0)r[q].b=b
else r.push(p.c1(a,b))}},
E:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.aK(s))
r=r.c}},
cX:function(a,b,c){var s=this.br(a,b)
if(s==null)this.c5(a,b,this.c1(b,c))
else s.b=c},
f5:function(){this.r=this.r+1&67108863},
c1:function(a,b){var s,r=this,q=new H.ix(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.f5()
return q},
dU:function(a){return J.kW(a)&0x3ffffff},
dV:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.M(a[r].a,b))return r
return-1},
i:function(a){return P.l6(this)},
br:function(a,b){return a[b]},
d3:function(a,b){return a[b]},
c5:function(a,b,c){a[b]=c},
eZ:function(a,b){delete a[b]},
eV:function(a,b){return this.br(a,b)!=null},
c0:function(){var s="<non-identifier-key>",r=Object.create(null)
this.c5(r,s,r)
this.eZ(r,s)
return r}}
H.iu.prototype={
$1:function(a){var s=this.a
return H.X(s).Q[1].a(s.h(0,a))},
$S:function(){return H.X(this.a).M("2(1)")}}
H.ix.prototype={}
H.cR.prototype={
gl:function(a){return this.a.a},
gR:function(a){var s=this.a,r=new H.eE(s,s.r)
r.c=s.e
return r}}
H.eE.prototype={
gB:function(a){return H.X(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.aK(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kC.prototype={
$1:function(a){return this.a(a)},
$S:37}
H.kD.prototype={
$2:function(a,b){return this.a(a,b)},
$S:58}
H.kE.prototype={
$1:function(a){return this.a(a)},
$S:49}
H.ez.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$im3:1}
H.d3.prototype={$id3:1}
H.a1.prototype={$ia1:1}
H.c3.prototype={
gl:function(a){return a.length},
$iz:1,
$iB:1}
H.bC.prototype={
h:function(a,b){H.b2(b,a,a.length)
return a[b]},
m:function(a,b,c){H.b2(b,a,a.length)
a[b]=c},
$in:1,
$ij:1,
$ip:1}
H.d4.prototype={
m:function(a,b,c){H.b2(b,a,a.length)
a[b]=c},
$in:1,
$ij:1,
$ip:1}
H.eM.prototype={
h:function(a,b){H.b2(b,a,a.length)
return a[b]}}
H.eN.prototype={
h:function(a,b){H.b2(b,a,a.length)
return a[b]}}
H.eO.prototype={
h:function(a,b){H.b2(b,a,a.length)
return a[b]}}
H.eP.prototype={
h:function(a,b){H.b2(b,a,a.length)
return a[b]}}
H.eQ.prototype={
h:function(a,b){H.b2(b,a,a.length)
return a[b]}}
H.d5.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b2(b,a,a.length)
return a[b]}}
H.bD.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b2(b,a,a.length)
return a[b]},
$ibD:1,
$ica:1}
H.dK.prototype={}
H.dL.prototype={}
H.dM.prototype={}
H.dN.prototype={}
H.aB.prototype={
M:function(a){return H.hz(v.typeUniverse,this,a)},
b9:function(a){return H.oV(v.typeUniverse,this,a)}}
H.fY.prototype={}
H.fU.prototype={
i:function(a){return this.a}}
H.dW.prototype={}
P.jP.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:48}
P.jO.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:46}
P.jQ.prototype={
$0:function(){this.a.$0()},
$S:13}
P.jR.prototype={
$0:function(){this.a.$0()},
$S:13}
P.dV.prototype={
eI:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cq(new P.k7(this,b),0),a)
else throw H.c(P.C("`setTimeout()` not found."))},
eJ:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cq(new P.k6(this,a,Date.now(),b),0),a)
else throw H.c(P.C("Periodic timer."))},
$iji:1}
P.k7.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:2}
P.k6.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.ex(s,o)}q.c=p
r.d.$1(q)},
$S:13}
P.cl.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.x(this.a)+")"}}
P.bK.prototype={
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
if(r instanceof P.cl){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aF(s)
if(o instanceof P.bK){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dS.prototype={
gR:function(a){return new P.bK(this.a())}}
P.fH.prototype={}
P.c8.prototype={}
P.fd.prototype={}
P.ke.prototype={}
P.ks.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:2}
P.jW.prototype={
ii:function(a){var s,r,q,p=null
try{if(C.f===$.aM){a.$0()
return}P.pR(p,p,this,a)}catch(q){s=H.al(q)
r=H.lw(q)
P.mM(p,p,this,s,r)}},
ij:function(a,b){var s,r,q,p=null
try{if(C.f===$.aM){a.$1(b)
return}P.pS(p,p,this,a,b)}catch(q){s=H.al(q)
r=H.lw(q)
P.mM(p,p,this,s,r)}},
ik:function(a,b){return this.ij(a,b,t.A)},
ht:function(a){return new P.jX(this,a)},
dw:function(a,b){return new P.jY(this,a,b)}}
P.jX.prototype={
$0:function(){return this.a.ii(this.b)},
$S:2}
P.jY.prototype={
$1:function(a){return this.a.ik(this.b,a)},
$S:function(){return this.c.M("~(0)")}}
P.dG.prototype={
gR:function(a){var s=new P.dH(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
C:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.eU(b)
return r}},
eU:function(a){var s=this.d
if(s==null)return!1
return this.bS(s[this.bO(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cY(s==null?q.b=P.lf():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cY(r==null?q.c=P.lf():r,b)}else return q.eL(0,b)},
eL:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.lf()
s=q.bO(b)
r=p[s]
if(r==null)p[s]=[q.bN(b)]
else{if(q.bS(r,b)>=0)return!1
r.push(q.bN(b))}return!0},
O:function(a,b){if((b&1073741823)===b)return this.h1(this.c,b)
else return this.h0(0,b)},
h0:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bO(b)
r=n[s]
q=o.bS(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.di(p)
return!0},
cY:function(a,b){if(a[b]!=null)return!1
a[b]=this.bN(b)
return!0},
h1:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.di(s)
delete a[b]
return!0},
cZ:function(){this.r=this.r+1&1073741823},
bN:function(a){var s,r=this,q=new P.jV(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cZ()
return q},
di:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cZ()},
bO:function(a){return J.kW(a)&1073741823},
bS:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.M(a[r].a,b))return r
return-1}}
P.jV.prototype={}
P.dH.prototype={
gB:function(a){return H.X(this).c.a(this.d)},
u:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.aK(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cM.prototype={}
P.iy.prototype={
$2:function(a,b){this.a.m(0,this.b.a(a),this.c.a(b))},
$S:10}
P.cT.prototype={$in:1,$ij:1,$ip:1}
P.k.prototype={
gR:function(a){return new H.bf(a,this.gl(a))},
K:function(a,b){return this.h(a,b)},
E:function(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gl(a))throw H.c(P.aK(a))}},
gby:function(a){return this.gl(a)===0},
im:function(a,b){var s,r,q,p,o=this
if(o.gby(a)){s=J.l1(0,H.b4(a).M("k.E"))
return s}r=o.h(a,0)
q=P.cV(o.gl(a),r,!0,H.b4(a).M("k.E"))
for(p=1;p<o.gl(a);++p){s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
il:function(a){return this.im(a,!0)},
hJ:function(a,b,c,d){var s
H.b4(a).M("k.E").a(d)
P.bi(b,c,this.gl(a))
for(s=b;s<c;++s)this.m(a,s,d)},
i:function(a){return P.l0(a,"[","]")}}
P.cX.prototype={}
P.iC.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.x(a)
r.a=s+": "
r.a+=H.x(b)},
$S:45}
P.L.prototype={
E:function(a,b){var s,r,q
for(s=J.aF(this.ga2(a)),r=H.b4(a).M("L.V");s.u();){q=s.gB(s)
b.$2(q,r.a(this.h(a,q)))}},
gl:function(a){return J.aN(this.ga2(a))},
i:function(a){return P.l6(a)},
$iI:1}
P.hA.prototype={
m:function(a,b,c){throw H.c(P.C("Cannot modify unmodifiable map"))}}
P.cY.prototype={
h:function(a,b){return J.lE(this.a,b)},
m:function(a,b,c){J.kV(this.a,b,c)},
E:function(a,b){J.eb(this.a,b)},
gl:function(a){return J.aN(this.a)},
i:function(a){return J.cu(this.a)},
$iI:1}
P.ce.prototype={}
P.de.prototype={
af:function(a,b){var s
for(s=J.aF(b);s.u();)this.n(0,s.gB(s))},
i:function(a){return P.l0(this,"{","}")},
K:function(a,b){var s,r,q,p,o="index"
H.q3(b,o,t.S)
P.m2(b,o)
for(s=P.oF(this,this.r),r=H.X(s).c,q=0;s.u();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.P(b,this,o,null,q))}}
P.dO.prototype={$in:1,$ij:1}
P.dI.prototype={}
P.dZ.prototype={}
P.e0.prototype={}
P.jB.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.al(r)}return null},
$S:16}
P.jA.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.al(r)}return null},
$S:16}
P.hV.prototype={
hW:function(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a4=P.bi(a3,a4,a2.length)
s=$.np()
for(r=s.length,q=a3,p=q,o=null,n=-1,m=-1,l=0;q<a4;q=k){k=q+1
j=C.a.D(a2,q)
if(j===37){i=k+2
if(i<=a4){h=H.kB(C.a.D(a2,k))
g=H.kB(C.a.D(a2,k+1))
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
if(j===61)continue}j=f}if(e!==-2){if(o==null){o=new P.a0("")
d=o}else d=o
c=d.a+=C.a.t(a2,p,q)
d.a=c+H.aA(j)
p=k
continue}}throw H.c(P.a8("Invalid base64 data",a2,q))}if(o!=null){r=o.a+=C.a.t(a2,p,a4)
d=r.length
if(n>=0)P.lH(a2,m,a4,n,l,d)
else{b=C.c.bo(d-1,4)+1
if(b===1)throw H.c(P.a8(a0,a2,a4))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return C.a.b4(a2,a3,a4,r.charCodeAt(0)==0?r:r)}a=a4-a3
if(n>=0)P.lH(a2,m,a4,n,l,a)
else{b=C.c.bo(a,4)
if(b===1)throw H.c(P.a8(a0,a2,a4))
if(b>1)a2=C.a.b4(a2,a4,a4,b===2?"==":"=")}return a2}}
P.hW.prototype={}
P.ei.prototype={}
P.ek.prototype={}
P.ic.prototype={}
P.ir.prototype={
i:function(a){return this.a}}
P.iq.prototype={
eW:function(a,b,c){var s,r,q,p,o,n,m,l=null
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
default:m=l}if(m!=null){if(n==null)n=new P.a0("")
if(o>b)n.a+=C.a.t(a,b,o)
n.a+=m
b=o+1}}if(n==null)return l
if(c>b)n.a+=C.a.t(a,b,c)
s=n.a
return s.charCodeAt(0)==0?s:s}}
P.jy.prototype={
ghI:function(){return C.P}}
P.jC.prototype={
cg:function(a){var s,r,q,p=P.bi(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.kc(r)
if(q.f0(a,0,p)!==p){C.a.V(a,p-1)
q.ca()}return new Uint8Array(r.subarray(0,H.pd(0,q.b,s)))}}
P.kc.prototype={
ca:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
hl:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.ca()
return!1}},
f0:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.V(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.D(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.hl(p,C.a.D(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.ca()}else if(p<=2047){o=l.b
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
P.jz.prototype={
cg:function(a){var s=this.a,r=P.os(s,a,0,null)
if(r!=null)return r
return new P.kb(s).hy(a,0,null,!0)}}
P.kb.prototype={
hy:function(a,b,c,d){var s,r,q,p,o=this,n=P.bi(b,c,J.aN(a))
if(b===n)return""
s=P.p9(a,b,n)
r=o.bP(s,0,n-b,!0)
q=o.b
if((q&1)!==0){p=P.pa(q)
o.b=0
throw H.c(P.a8(p,a,b+o.c))}return r},
bP:function(a,b,c,d){var s,r,q=this
if(c-b>1000){s=C.c.a4(b+c,2)
r=q.bP(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bP(a,s,c,d)}return q.hD(a,b,c,d)},
hD:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.a0(""),f=b+1,e=a.length
if(b<0||b>=e)return H.d(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.D("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.D(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.aA(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.aA(j)
break
case 65:g.a+=H.aA(j);--f
break
default:p=g.a+=H.aA(j)
g.a=p+H.aA(j)
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
g.a+=H.aA(a[l])}else g.a+=P.ff(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.aA(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.Z.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.Z&&this.a===b.a&&!0},
ah:function(a,b){return C.c.ah(this.a,b.a)},
gF:function(a){var s=this.a
return(s^C.c.aY(s,30))&1073741823},
i:function(a){var s=this,r=P.nK(H.ob(s)),q=P.en(H.o9(s)),p=P.en(H.o5(s)),o=P.en(H.o6(s)),n=P.en(H.o8(s)),m=P.en(H.oa(s)),l=P.nL(H.o7(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.by.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.by&&this.a===b.a},
gF:function(a){return C.c.gF(this.a)},
ah:function(a,b){return C.c.ah(this.a,b.a)},
i:function(a){var s,r,q,p=new P.i9(),o=this.a
if(o<0)return"-"+new P.by(0-o).i(0)
s=p.$1(C.c.a4(o,6e7)%60)
r=p.$1(C.c.a4(o,1e6)%60)
q=new P.i8().$1(o%1e6)
return""+C.c.a4(o,36e8)+":"+s+":"+r+"."+q}}
P.i8.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:29}
P.i9.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:29}
P.K.prototype={}
P.ee.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.ig(s)
return"Assertion failed"}}
P.fq.prototype={}
P.eR.prototype={
i:function(a){return"Throw of null."}}
P.aG.prototype={
gbR:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbQ:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbR()+o+m
if(!q.a)return l
s=q.gbQ()
r=P.ig(q.b)
return l+s+": "+r}}
P.db.prototype={
gbR:function(){return"RangeError"},
gbQ:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.x(q):""
else if(q==null)s=": Not greater than or equal to "+H.x(r)
else if(q>r)s=": Not in inclusive range "+H.x(r)+".."+H.x(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.x(r)
return s}}
P.ev.prototype={
gbR:function(){return"RangeError"},
gbQ:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl:function(a){return this.f}}
P.fA.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fx.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.c7.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ej.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ig(s)+"."}}
P.eU.prototype={
i:function(a){return"Out of Memory"},
$iK:1}
P.di.prototype={
i:function(a){return"Stack Overflow"},
$iK:1}
P.el.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.fV.prototype={
i:function(a){return"Exception: "+this.a}}
P.im.prototype={
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
return f+j+h+i+"\n"+C.a.J(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.x(e)+")"):f}}
P.j.prototype={
bH:function(a,b){return new H.b1(this,b,H.X(this).M("b1<j.E>"))},
gl:function(a){var s,r=this.gR(this)
for(s=0;r.u();)++s
return s},
gaP:function(a){var s,r=this.gR(this)
if(!r.u())throw H.c(H.is())
s=r.gB(r)
if(r.u())throw H.c(H.nR())
return s},
K:function(a,b){var s,r,q
P.m2(b,"index")
for(s=this.gR(this),r=0;s.u();){q=s.gB(s)
if(b===r)return q;++r}throw H.c(P.P(b,this,"index",null,r))},
i:function(a){return P.nQ(this,"(",")")}}
P.ew.prototype={}
P.ah.prototype={
gF:function(a){return P.Q.prototype.gF.call(C.U,this)},
i:function(a){return"null"}}
P.Q.prototype={constructor:P.Q,$iQ:1,
q:function(a,b){return this===b},
gF:function(a){return H.d9(this)},
i:function(a){return"Instance of '"+H.da(this)+"'"},
toString:function(){return this.i(this)}}
P.a0.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jw.prototype={
$2:function(a,b){var s,r,q,p=C.a.dT(b,"=")
if(p===-1){if(b!=="")J.kV(a,P.lo(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.t(b,0,p)
r=C.a.aa(b,p+1)
q=this.a
J.kV(a,P.lo(s,0,s.length,q,!0),P.lo(r,0,r.length,q,!0))}return a},
$S:44}
P.jt.prototype={
$2:function(a,b){throw H.c(P.a8("Illegal IPv4 address, "+a,this.a,b))},
$S:43}
P.ju.prototype={
$2:function(a,b){throw H.c(P.a8("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:42}
P.jv.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.kF(C.a.t(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:41}
P.bL.prototype={
gc9:function(){var s,r,q,p=this,o=p.x
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
else o=H.h(H.l5("_text"))}return o},
gF:function(a){var s=this,r=s.z
if(r==null){r=C.a.gF(s.gc9())
if(s.z==null)s.z=r
else r=H.h(H.l5("hashCode"))}return r},
gcF:function(){var s=this,r=s.Q
if(r==null){r=s.f
r=new P.ce(P.mh(r==null?"":r),t.dw)
if(s.Q==null)s.Q=r
else r=H.h(H.l5("queryParameters"))}return r},
gek:function(){return this.b},
gcu:function(a){var s=this.c
if(s==null)return""
if(C.a.a1(s,"["))return C.a.t(s,1,s.length-1)
return s},
gbC:function(a){var s=this.d
return s==null?P.mA(this.a):s},
gcE:function(a){var s=this.f
return s==null?"":s},
gdO:function(){var s=this.r
return s==null?"":s},
ec:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a1(s,"/"))s="/"+s
q=s
p=P.lm(null,0,0,b)
return new P.bL(n,l,j,k,q,p,o.r)},
gdP:function(){return this.c!=null},
gdS:function(){return this.f!=null},
gdQ:function(){return this.r!=null},
i:function(a){return this.gc9()},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.dD.b(b))if(q.a===b.gbI())if(q.c!=null===b.gdP())if(q.b===b.gek())if(q.gcu(q)===b.gcu(b))if(q.gbC(q)===b.gbC(b))if(q.e===b.ge7(b)){s=q.f
r=s==null
if(!r===b.gdS()){if(r)s=""
if(s===b.gcE(b)){s=q.r
r=s==null
if(!r===b.gdQ()){if(r)s=""
s=s===b.gdO()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
$ifB:1,
gbI:function(){return this.a},
ge7:function(a){return this.e}}
P.k9.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=P.ka(C.h,a,C.e,!0)
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=P.ka(C.h,b,C.e,!0)}},
$S:40}
P.k8.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.aF(b),r=this.a;s.u();)r.$2(a,s.gB(s))},
$S:5}
P.js.prototype={
gej:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.d(m,0)
s=o.a
m=m[0]+1
r=C.a.bx(s,"?",m)
q=s.length
if(r>=0){p=P.e_(s,r+1,q,C.j,!1)
q=r}else p=n
m=o.c=new P.fN("data","",n,n,P.e_(s,m,q,C.y,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.kl.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.d(s,a)
s=s[a]
C.a_.hJ(s,0,96,b)
return s},
$S:39}
P.km.prototype={
$3:function(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=C.a.D(b,r)^96
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:22}
P.kn.prototype={
$3:function(a,b,c){var s,r,q
for(s=C.a.D(b,0),r=C.a.D(b,1);s<=r;++s){q=(s^96)>>>0
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:22}
P.hf.prototype={
gdP:function(){return this.c>0},
gdR:function(){return this.c>0&&this.d+1<this.e},
gdS:function(){return this.f<this.r},
gdQ:function(){return this.r<this.a.length},
gbI:function(){var s=this.x
return s==null?this.x=this.eT():s},
eT:function(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&C.a.a1(r.a,"http"))return"http"
if(q===5&&C.a.a1(r.a,"https"))return"https"
if(s&&C.a.a1(r.a,"file"))return"file"
if(q===7&&C.a.a1(r.a,"package"))return"package"
return C.a.t(r.a,0,q)},
gek:function(){var s=this.c,r=this.b+3
return s>r?C.a.t(this.a,r,s-1):""},
gcu:function(a){var s=this.c
return s>0?C.a.t(this.a,s,this.d):""},
gbC:function(a){var s,r=this
if(r.gdR())return P.kF(C.a.t(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&C.a.a1(r.a,"http"))return 80
if(s===5&&C.a.a1(r.a,"https"))return 443
return 0},
ge7:function(a){return C.a.t(this.a,this.e,this.f)},
gcE:function(a){var s=this.f,r=this.r
return s<r?C.a.t(this.a,s+1,r):""},
gdO:function(){var s=this.r,r=this.a
return s<r.length?C.a.aa(r,s+1):""},
gcF:function(){var s=this
if(s.f>=s.r)return C.Z
return new P.ce(P.mh(s.gcE(s)),t.dw)},
ec:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbI(),k=l==="file",j=n.c,i=j>0?C.a.t(n.a,n.b+3,j):"",h=n.gdR()?n.gbC(n):m
j=n.c
if(j>0)s=C.a.t(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.t(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a1(r,"/"))r="/"+r
p=P.lm(m,0,0,b)
q=n.r
o=q<j.length?C.a.aa(j,q+1):m
return new P.bL(l,i,s,h,r,p,o)},
gF:function(a){var s=this.y
return s==null?this.y=C.a.gF(this.a):s},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.dD.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifB:1}
P.fN.prototype={}
W.v.prototype={}
W.hQ.prototype={
gl:function(a){return a.length}}
W.ec.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.ed.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bQ.prototype={$ibQ:1}
W.bu.prototype={$ibu:1}
W.bv.prototype={$ibv:1}
W.bw.prototype={
en:function(a,b,c){var s=a.getContext(b,P.mR(c))
return s},
$ibw:1}
W.aH.prototype={
gl:function(a){return a.length}}
W.i1.prototype={
gl:function(a){return a.length}}
W.J.prototype={$iJ:1}
W.cC.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.i2.prototype={}
W.at.prototype={}
W.aR.prototype={}
W.i3.prototype={
gl:function(a){return a.length}}
W.i4.prototype={
gl:function(a){return a.length}}
W.i5.prototype={
gl:function(a){return a.length}}
W.b9.prototype={$ib9:1}
W.i6.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cD.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.cE.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.x(r)+", "
s=a.top
s.toString
return r+H.x(s)+") "+H.x(this.gaO(a))+" x "+H.x(this.gaI(a))},
q:function(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=J.b3(b)
if(s===r.gbA(b)){s=a.top
s.toString
s=s===r.gbE(b)&&this.gaO(a)===r.gaO(b)&&this.gaI(a)===r.gaI(b)}else s=!1}else s=!1
return s},
gF:function(a){var s,r=a.left
r.toString
r=C.d.gF(r)
s=a.top
s.toString
return W.mr(r,C.d.gF(s),C.d.gF(this.gaO(a)),C.d.gF(this.gaI(a)))},
gdz:function(a){var s=a.bottom
s.toString
return s},
gd4:function(a){return a.height},
gaI:function(a){var s=this.gd4(a)
s.toString
return s},
gbA:function(a){var s=a.left
s.toString
return s},
gcJ:function(a){var s=a.right
s.toString
return s},
gbE:function(a){var s=a.top
s.toString
return s},
gdk:function(a){return a.width},
gaO:function(a){var s=this.gdk(a)
s.toString
return s},
$iab:1}
W.eo.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.i7.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.fK.prototype={
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
gR:function(a){var s=this.il(this)
return new J.am(s,s.length)}}
W.E.prototype={
gag:function(a){return new W.fS(a)},
gbu:function(a){var s=a.children
s.toString
return new W.fK(a,s)},
gdA:function(a){var s,r,q,p=a.clientLeft
p.toString
s=a.clientTop
s.toString
r=a.clientWidth
r.toString
q=a.clientHeight
q.toString
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.ab(p,s,r,q,t.I)},
i:function(a){var s=a.localName
s.toString
return s},
ai:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.lP
if(s==null){s=H.b([],t.Q)
r=new W.d7(s)
s.push(W.mq(null))
s.push(W.mv())
$.lP=r
d=r}else d=s
s=$.lO
if(s==null){s=new W.hB(d)
$.lO=s
c=s}else{s.a=d
c=s}}if($.ba==null){s=document
r=s.implementation.createHTMLDocument("")
r.toString
$.ba=r
r=r.createRange()
r.toString
$.kZ=r
r=$.ba.createElement("base")
t.cR.a(r)
s=s.baseURI
s.toString
r.href=s
$.ba.head.appendChild(r).toString}s=$.ba
if(s.body==null){r=s.createElement("body")
s.body=t.Y.a(r)}s=$.ba
if(t.Y.b(a)){s=s.body
s.toString
q=s}else{s.toString
r=a.tagName
r.toString
q=s.createElement(r)
$.ba.body.appendChild(q).toString}s="createContextualFragment" in window.Range.prototype
s.toString
if(s){s=a.tagName
s.toString
s=!C.b.C(C.X,s)}else s=!1
if(s){$.kZ.selectNodeContents(q)
s=$.kZ
s=s.createContextualFragment(b)
s.toString
p=s}else{q.innerHTML=b
s=$.ba.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.ba.body)J.lF(q)
c.cO(p)
document.adoptNode(p).toString
return p},
hB:function(a,b,c){return this.ai(a,b,c,null)},
eo:function(a,b){var s
a.textContent=null
s=a.appendChild(this.ai(a,b,null,null))
s.toString},
gef:function(a){var s=a.tagName
s.toString
return s},
$iE:1}
W.ia.prototype={
$1:function(a){return t.h.b(a)},
$S:23}
W.m.prototype={$im:1}
W.e.prototype={
hn:function(a,b,c,d){if(c!=null)this.eN(a,b,c,!1)},
eN:function(a,b,c,d){return a.addEventListener(b,H.cq(c,1),!1)},
$ie:1}
W.ag.prototype={$iag:1}
W.bW.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1,
$ibW:1}
W.eq.prototype={
gl:function(a){return a.length}}
W.es.prototype={
gl:function(a){return a.length}}
W.av.prototype={$iav:1}
W.ip.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.bA.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.cL.prototype={$icL:1}
W.bZ.prototype={$ibZ:1}
W.bB.prototype={$ibB:1}
W.iA.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.iR.prototype={
gl:function(a){return a.length}}
W.c0.prototype={$ic0:1}
W.eJ.prototype={
h:function(a,b){return P.bp(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bp(s.value[1]))}},
ga2:function(a){var s=H.b([],t.s)
this.E(a,new W.iS(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iI:1}
W.iS.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.eK.prototype={
h:function(a,b){return P.bp(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bp(s.value[1]))}},
ga2:function(a){var s=H.b([],t.s)
this.E(a,new W.iT(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iI:1}
W.iT.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.ay.prototype={$iay:1}
W.eL.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.ao.prototype={$iao:1}
W.a6.prototype={
gaP:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.l9("No elements"))
if(r>1)throw H.c(P.l9("More than one element"))
s=s.firstChild
s.toString
return s},
af:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q).toString}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b]).toString},
gR:function(a){var s=this.a.childNodes
return new W.cI(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.t.prototype={
ia:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a).toString},
ig:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.nt(s,b,a)}catch(q){H.al(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.es(a):s},
h3:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$it:1}
W.d6.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.az.prototype={
gl:function(a){return a.length},
$iaz:1}
W.eY.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.f3.prototype={
h:function(a,b){return P.bp(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bp(s.value[1]))}},
ga2:function(a){var s=H.b([],t.s)
this.E(a,new W.j5(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iI:1}
W.j5.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.f5.prototype={
gl:function(a){return a.length}}
W.ap.prototype={$iap:1}
W.f7.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.aC.prototype={$iaC:1}
W.f8.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.aD.prototype={
gl:function(a){return a.length},
$iaD:1}
W.fc.prototype={
h:function(a,b){return a.getItem(H.ki(b))},
m:function(a,b,c){a.setItem(b,c)},
E:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga2:function(a){var s=H.b([],t.s)
this.E(a,new W.jd(s))
return s},
gl:function(a){var s=a.length
s.toString
return s},
$iI:1}
W.jd.prototype={
$2:function(a,b){return this.a.push(a)},
$S:50}
W.aj.prototype={$iaj:1}
W.bk.prototype={$ibk:1}
W.dj.prototype={
ai:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bK(a,b,c,d)
s=W.nM("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new W.a6(r).af(0,new W.a6(s))
return r}}
W.fg.prototype={
ai:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bK(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a6(C.C.ai(r,b,c,d))
r=new W.a6(r.gaP(r))
new W.a6(s).af(0,new W.a6(r.gaP(r)))
return s}}
W.fh.prototype={
ai:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bK(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a6(C.C.ai(r,b,c,d))
new W.a6(s).af(0,new W.a6(r.gaP(r)))
return s}}
W.c9.prototype={$ic9:1}
W.aq.prototype={$iaq:1}
W.af.prototype={$iaf:1}
W.fj.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.fk.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.jh.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.ar.prototype={$iar:1}
W.bG.prototype={$ibG:1}
W.fo.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.jm.prototype={
gl:function(a){return a.length}}
W.b0.prototype={}
W.jx.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.fE.prototype={
gl:function(a){return a.length}}
W.bl.prototype={
ghF:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.C("deltaY is not supported"))},
ghE:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.C("deltaX is not supported"))},
$ibl:1}
W.ci.prototype={
h4:function(a,b){var s=a.requestAnimationFrame(H.cq(b,1))
s.toString
return s},
f_:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cj.prototype={$icj:1}
W.fL.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.dD.prototype={
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
r=J.b3(b)
if(s===r.gbA(b)){s=a.top
s.toString
if(s===r.gbE(b)){s=a.width
s.toString
if(s===r.gaO(b)){s=a.height
s.toString
r=s===r.gaI(b)
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
return W.mr(p,s,r,C.d.gF(q))},
gd4:function(a){return a.height},
gaI:function(a){var s=a.height
s.toString
return s},
gdk:function(a){return a.width},
gaO:function(a){var s=a.width
s.toString
return s}}
W.fZ.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.dJ.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.hi.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.hp.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.fI.prototype={
E:function(a,b){var s,r,q,p,o
for(s=this.ga2(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
b.$2(o,H.ki(q.getAttribute(o)))}},
ga2:function(a){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=H.b([],t.s)
for(r=m.length,q=t.h9,p=0;p<r;++p){if(p>=m.length)return H.d(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
s.push(n)}}return s}}
W.fS.prototype={
h:function(a,b){return this.a.getAttribute(H.ki(b))},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga2(this).length}}
W.l_.prototype={}
W.dE.prototype={
hk:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.nu(s,this.c,r,!1)}}}
W.jS.prototype={
$1:function(a){return this.a.$1(a)},
$S:3}
W.le.prototype={}
W.ck.prototype={
eC:function(a){var s
if($.dF.gby($.dF)){for(s=0;s<262;++s)$.dF.m(0,C.W[s],W.qb())
for(s=0;s<12;++s)$.dF.m(0,C.n[s],W.qc())}},
aZ:function(a){return $.nq().C(0,W.cG(a))},
at:function(a,b,c){var s=$.dF.h(0,W.cG(a)+"::"+b)
if(s==null)s=$.dF.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iaL:1}
W.O.prototype={
gR:function(a){return new W.cI(a,this.gl(a))}}
W.d7.prototype={
aZ:function(a){return C.b.dr(this.a,new W.iW(a))},
at:function(a,b,c){return C.b.dr(this.a,new W.iV(a,b,c))},
$iaL:1}
W.iW.prototype={
$1:function(a){return a.aZ(this.a)},
$S:24}
W.iV.prototype={
$1:function(a){return a.at(this.a,this.b,this.c)},
$S:24}
W.dP.prototype={
eH:function(a,b,c,d){var s,r,q
this.a.af(0,c)
s=b.bH(0,new W.k_())
r=b.bH(0,new W.k0())
this.b.af(0,s)
q=this.c
q.af(0,C.v)
q.af(0,r)},
aZ:function(a){return this.a.C(0,W.cG(a))},
at:function(a,b,c){var s=this,r=W.cG(a),q=s.c
if(q.C(0,r+"::"+b))return s.d.hr(c)
else if(q.C(0,"*::"+b))return s.d.hr(c)
else{q=s.b
if(q.C(0,r+"::"+b))return!0
else if(q.C(0,"*::"+b))return!0
else if(q.C(0,r+"::*"))return!0
else if(q.C(0,"*::*"))return!0}return!1},
$iaL:1}
W.k_.prototype={
$1:function(a){return!C.b.C(C.n,a)},
$S:25}
W.k0.prototype={
$1:function(a){return C.b.C(C.n,a)},
$S:25}
W.hr.prototype={
at:function(a,b,c){if(this.ew(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.C(0,b)
return!1}}
W.k5.prototype={
$1:function(a){return"TEMPLATE::"+a},
$S:35}
W.hq.prototype={
aZ:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cG(a)==="foreignObject")return!1
if(s)return!0
return!1},
at:function(a,b,c){if(b==="is"||C.a.a1(b,"on"))return!1
return this.aZ(a)},
$iaL:1}
W.cI.prototype={
u:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.lE(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gB:function(a){return H.X(this).c.a(this.d)}}
W.jZ.prototype={}
W.hB.prototype={
cO:function(a){var s,r=new W.kd(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
bd:function(a,b){++this.b
if(b==null||b!==a.parentNode)J.lF(a)
else b.removeChild(a).toString},
h7:function(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
try{k=J.nw(a)
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
o=p}l=o}catch(n){H.al(n)}r="element unprintable"
try{r=J.cu(a)}catch(n){H.al(n)}try{q=W.cG(a)
this.h6(a,b,l,r,q,k,j)}catch(n){if(H.al(n) instanceof P.aG)throw n
else{this.bd(a,b)
p=window
p.toString
p="Removing corrupted element "+H.x(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(p)}}},
h6:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.bd(a,b)
window.toString
s="Removing element due to corrupted attributes on <"+d+">"
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(!m.a.aZ(a)){m.bd(a,b)
window.toString
s="Removing disallowed element <"+e+"> from "+H.x(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(g!=null)if(!m.a.at(a,"is",g)){m.bd(a,b)
window.toString
s="Removing disallowed type extension <"+e+' is="'+g+'">'
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}s=f.ga2(f)
q=H.b(s.slice(0),H.kg(s))
for(p=f.ga2(f).length-1,s=f.a;p>=0;--p){if(p>=q.length)return H.d(q,p)
o=q[p]
r=m.a
n=J.nz(o)
H.ki(o)
if(!r.at(a,n,s.getAttribute(o))){window.toString
r="Removing disallowed attribute <"+e+" "+o+'="'+H.x(s.getAttribute(o))+'">'
n=typeof console!="undefined"
n.toString
if(n)window.console.warn(r)
s.removeAttribute(o)}}if(t.aW.b(a)){s=a.content
s.toString
m.cO(s)}}}
W.kd.prototype={
$2:function(a,b){var s,r,q,p,o=this.a,n=a.nodeType
n.toString
switch(n){case 1:o.h7(a,b)
break
case 8:case 11:case 3:case 4:break
default:o.bd(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){n=r.nextSibling
q=s
q=n==null?q!=null:n!==q
n=q}else n=!1
if(n){n=P.l9("Corrupt HTML")
throw H.c(n)}}catch(p){H.al(p)
n=s;++o.b
q=n.parentNode
if(a!==q){if(q!=null)q.removeChild(n).toString}else a.removeChild(n).toString
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:34}
W.fM.prototype={}
W.fO.prototype={}
W.fP.prototype={}
W.fQ.prototype={}
W.fR.prototype={}
W.fW.prototype={}
W.fX.prototype={}
W.h_.prototype={}
W.h0.prototype={}
W.h3.prototype={}
W.h4.prototype={}
W.h5.prototype={}
W.h6.prototype={}
W.h7.prototype={}
W.h8.prototype={}
W.hb.prototype={}
W.hc.prototype={}
W.he.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.hg.prototype={}
W.hh.prototype={}
W.hm.prototype={}
W.hs.prototype={}
W.ht.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.hu.prototype={}
W.hv.prototype={}
W.hC.prototype={}
W.hD.prototype={}
W.hE.prototype={}
W.hF.prototype={}
W.hG.prototype={}
W.hH.prototype={}
W.hI.prototype={}
W.hJ.prototype={}
W.hK.prototype={}
W.hL.prototype={}
P.k1.prototype={
cs:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bG:function(a){var s,r,q,p,o,n=this,m={}
if(a==null)return a
if(H.ko(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.Z)return new Date(a.a)
if(t.fJ.b(a))throw H.c(P.jr("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.fK.b(a))return a
if(t.bX.b(a))return a
if(t.gb.b(a))return a
if(t.cH.b(a)||t.dE.b(a)||t.bK.b(a))return a
if(t.f.b(a)){s=n.cs(a)
r=n.b
q=r.length
if(s>=q)return H.d(r,s)
p=m.a=r[s]
if(p!=null)return p
p={}
m.a=p
if(s>=q)return H.d(r,s)
r[s]=p
J.eb(a,new P.k3(m,n))
return m.a}if(t.r.b(a)){s=n.cs(a)
m=n.b
if(s>=m.length)return H.d(m,s)
p=m[s]
if(p!=null)return p
return n.hA(a,s)}if(t.eH.b(a)){s=n.cs(a)
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
n.hP(a,new P.k4(m,n))
return m.b}throw H.c(P.jr("structured clone of other type"))},
hA:function(a,b){var s,r,q=J.bM(a),p=q.gl(a),o=new Array(p)
o.toString
s=this.b
if(b>=s.length)return H.d(s,b)
s[b]=o
for(r=0;r<p;++r){s=this.bG(q.h(a,r))
if(r>=o.length)return H.d(o,r)
o[r]=s}return o}}
P.k3.prototype={
$2:function(a,b){this.a.a[a]=this.b.bG(b)},
$S:10}
P.k4.prototype={
$2:function(a,b){this.a.b[a]=this.b.bG(b)},
$S:33}
P.kj.prototype={
$1:function(a){this.a.push(P.mI(a))},
$S:31}
P.kt.prototype={
$2:function(a,b){this.a[a]=P.mI(b)},
$S:10}
P.k2.prototype={
hP:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
b.$2(p,a[p])}}}
P.er.prototype={
gbb:function(){var s=this.b,r=H.X(s)
return new H.aU(new H.b1(s,new P.ik(),r.M("b1<k.E>")),new P.il(),r.M("aU<k.E,E>"))},
E:function(a,b){C.b.E(P.iz(this.gbb(),!1,t.h),b)},
m:function(a,b,c){var s=this.gbb()
J.ny(s.b.$1(J.hP(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b).toString},
gl:function(a){return J.aN(this.gbb().a)},
h:function(a,b){var s=this.gbb()
return s.b.$1(J.hP(s.a,b))},
gR:function(a){var s=P.iz(this.gbb(),!1,t.h)
return new J.am(s,s.length)}}
P.ik.prototype={
$1:function(a){return t.h.b(a)},
$S:23}
P.il.prototype={
$1:function(a){return t.h.a(a)},
$S:60}
P.hd.prototype={
gcJ:function(a){return this.$ti.c.a(this.a+this.c)},
gdz:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
q:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.I.b(b)){s=o.a
r=J.b3(b)
if(s===r.gbA(b)){q=o.b
if(q===r.gbE(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gcJ(b)&&p.a(q+o.d)===r.gdz(b)}else s=!1}else s=!1}else s=!1
return s},
gF:function(a){var s=this,r=s.a,q=C.c.gF(r),p=s.b,o=C.c.gF(p),n=s.$ti.c
r=C.c.gF(n.a(r+s.c))
p=C.c.gF(n.a(p+s.d))
return H.on(H.je(H.je(H.je(H.je(0,q),o),r),p))}}
P.ab.prototype={
gbA:function(a){return this.a},
gbE:function(a){return this.b},
gaO:function(a){return this.c},
gaI:function(a){return this.d}}
P.aT.prototype={$iaT:1}
P.eC.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$in:1,
$ij:1,
$ip:1}
P.aX.prototype={$iaX:1}
P.eS.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$in:1,
$ij:1,
$ip:1}
P.iZ.prototype={
gl:function(a){return a.length}}
P.c6.prototype={$ic6:1}
P.fe.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$in:1,
$ij:1,
$ip:1}
P.o.prototype={
gbu:function(a){return new P.er(a,new W.a6(a))},
ai:function(a,b,c,d){var s,r,q,p,o=H.b([],t.Q)
o.push(W.mq(null))
o.push(W.mv())
o.push(new W.hq())
c=new W.hB(new W.d7(o))
s='<svg version="1.1">'+b+"</svg>"
o=document
r=o.body
r.toString
q=C.p.hB(r,s,c)
o=o.createDocumentFragment()
o.toString
r=new W.a6(q)
p=r.gaP(r)
for(;r=p.firstChild,r!=null;)o.appendChild(r).toString
return o},
$io:1}
P.aZ.prototype={$iaZ:1}
P.fp.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$in:1,
$ij:1,
$ip:1}
P.h1.prototype={}
P.h2.prototype={}
P.h9.prototype={}
P.ha.prototype={}
P.hn.prototype={}
P.ho.prototype={}
P.hw.prototype={}
P.hx.prototype={}
P.hT.prototype={
gl:function(a){return a.length}}
P.eg.prototype={
h:function(a,b){return P.bp(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bp(s.value[1]))}},
ga2:function(a){var s=H.b([],t.s)
this.E(a,new P.hU(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iI:1}
P.hU.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
P.eh.prototype={
gl:function(a){return a.length}}
P.b7.prototype={}
P.eT.prototype={
gl:function(a){return a.length}}
P.fJ.prototype={}
P.dc.prototype={$idc:1}
P.f9.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=P.bp(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$in:1,
$ij:1,
$ip:1}
P.hj.prototype={}
P.hk.prototype={}
K.aO.prototype={
aK:function(a,b){return!0},
i:function(a){return"all"},
$iaV:1}
K.cK.prototype={
aK:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)if(s[q].aK(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q},
$iaV:1}
K.ae.prototype={
aK:function(a,b){return!this.er(0,b)},
i:function(a){return"!["+this.bL(0)+"]"}}
K.f0.prototype={
aK:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var s=H.aA(this.a),r=H.aA(this.b)
return s+".."+r},
$iaV:1}
K.u.prototype={
p:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.f("May not create a Set with zero characters."))
s=new H.Y(t.fX)
for(r=new H.bf(a,a.gl(a)),q=H.X(r).c;r.u();)s.m(0,q.a(r.d),!0)
p=P.iz(s.ga2(s),!0,t.S)
C.b.eq(p)
this.a=p},
aK:function(a,b){return C.b.C(this.a,b)},
i:function(a){return P.ff(this.a,0,null)},
$iaV:1}
L.fa.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.dm(this.a.k(0,b),H.b([],t.z))
s.push(p)
return p},
hK:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.aK(0,a))return p}return null},
i:function(a){return this.b},
dh:function(){var s,r,q,p,o,n,m=this,l=""+("("+m.b+")"),k=m.d
if(k!=null){l+=" => ["+k.b+"]"
k=m.a.c
s=m.d
if(k.C(0,s==null?null:s.b))l+=" (consume)"
s=m.d
if(s==null)s=null
else{s=s.c
s=s.ga2(s)}s=J.aF(s==null?H.b([],t.s):s)
for(;s.u();){r=s.gB(s)
l+="\n"
q=m.d
p=q==null?null:q.c.h(0,r)
if(p==null)p=""
l+="  -- "+r+" => ["+p+"]"
if(k.C(0,p))l+=" (consume)"}}for(k=m.c,s=k.length,o=0;o<k.length;k.length===s||(0,H.q)(k),++o){n=k[o]
l+="\n"
l+="  -- "+(n.b.b+": "+n.bL(0))}return l.charCodeAt(0)==0?l:l}}
L.fm.prototype={
i:function(a){var s=H.lA(this.b,"\n","\\n"),r=H.lA(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fn.prototype={
aM:function(a,b,c){var s,r,q
for(s=c.length,r=this.c,q=0;q<c.length;c.length===s||(0,H.q)(c),++q)r.m(0,c[q],b)},
i:function(a){return this.b}}
L.jj.prototype={
k:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.fa(this,b,H.b([],t.ab))
s.m(0,b,r)}return r},
P:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.fn(a,P.V(s,s))
r.m(0,a,q)}return q},
cL:function(a){return this.ip(a)},
ip:function(a){var s=this
return P.pu(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2
return function $async$cL(a3,a4){if(a3===1){o=a4
q=p}while(true)switch(q){case 0:c=s.d
b=t.t
a0=H.b([],b)
a1=H.b([],b)
a2=H.b([],b)
n=H.X(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a2.length!==0)h=C.b.cG(a2,0)
else{if(!r.u()){q=3
break}h=n.a(r.d)}a1.push(h);++k
g=c==null
f=g?null:c.hK(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.ff(a1,0,null)
throw H.c(P.f("Untokenizable string [state: "+H.x(g?null:c.b)+", index "+k+']: "'+e+'"'))}if(!!a1.fixed$length)H.h(P.C("removeRange"))
P.bi(0,i,a1.length)
a1.splice(0,i-0)
C.b.af(a2,a1)
a1=H.b([],b)
a0=H.b([],b)
c=s.d
q=!m.C(0,l.a)?7:8
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
if(g!=null){e=P.ff(a0,0,null)
g=c.d
if(g==null)l=null
else{d=g.c.h(0,e)
g=new L.fm(d==null?g.b:d,e,k)
l=g}i=a1.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.C(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.oD()
case 1:return P.oE(o)}}},t.bJ)},
i:function(a){var s,r=new P.a0(""),q=this.d
if(q!=null)r.a=""+(q.dh()+"\n")
for(q=this.a,q=q.giq(q),q=q.gR(q);q.u();){s=q.gB(q)
if(s!=this.d)r.a+=H.x(s==null?null:s.dh())+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.dm.prototype={
i:function(a){return this.b.b+": "+this.bL(0)}}
O.an.prototype={
cP:function(a,b,c){this.b=b
this.c=a},
bp:function(a,b){return this.cP(a,null,b)},
fO:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
eB:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gl:function(a){return this.a.length},
gR:function(a){var s=this.a
return new J.am(s,s.length)},
K:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.X(q).M("w<an.T>")
if(q.fO(H.b([b],p))){s=q.a
r=s.length
s.push(b)
q.eB(r,H.b([b],p))}},
$ij:1}
O.d2.prototype={
gl:function(a){return this.a.length},
gv:function(){var s=this.b
return s==null?this.b=D.N():s},
aS:function(){var s=this.b
return s==null?null:s.G(null)},
ga3:function(a){var s=this.a
if(s.length>0)return C.b.gaw(s)
else return V.ax()},
ea:function(a){this.a.push(a)
this.aS()},
cD:function(){var s=this.a
if(s.length>0){s.pop()
this.aS()}}}
E.hX.prototype={}
E.bz.prototype={
sap:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().O(0,s.ge4())
if(b!=null)b.gv().n(0,s.ge4())
s.aL(new D.G("shape",r,b))}},
sbj:function(a){var s,r,q=this
if(!J.M(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gv().O(0,q.ge2())
if(a!=null)a.gv().n(0,q.ge2())
r=q.r
q.aL(new D.G("mover",s,r))}},
ay:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.a
if(!J.M(o,q.x)){s=q.x
q.x=o
q.aL(new D.G("matrix",s,o))}for(p=q.y.a,p=new J.am(p,p.length),r=H.X(p).c;p.u();)r.a(p.d).ay(0,b)},
b3:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.ga3(q))
else o.push(p.J(0,q.ga3(q)))
q.aS()
a.eb(r.f)
s=C.b.gaw(a.dy)
if(r.d!=null)if(s!=null)s.ie(a,r)
for(p=r.y.a,p=new J.am(p,p.length),o=H.X(p).c;p.u();)o.a(p.d).b3(a)
a.e9()
q.cD()},
aL:function(a){var s=this.z
return s==null?null:s.G(a)},
a_:function(){return this.aL(null)},
e5:function(a){this.e=null
this.aL(a)},
i2:function(){return this.e5(null)},
e3:function(a){return this.aL(a)},
i1:function(){return this.e3(null)},
e1:function(a){return this.aL(a)},
hZ:function(){return this.e1(null)},
hY:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.ge0(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bV()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.a_()},
i0:function(a,b){var s,r
for(s=b.gR(b),r=this.ge0();s.u();)s.gB(s).gv().O(0,r)
this.a_()},
i:function(a){return"Unnamed entity"}}
E.bS.prototype={
i:function(a){return this.b}}
E.c4.prototype={
i:function(a){return this.b}}
E.fT.prototype={}
E.j1.prototype={
eA:function(a,b){var s=this
s.cy.gv().n(0,new E.j2(s))
s.db.gv().n(0,new E.j3(s))
s.dx.gv().n(0,new E.j4(s))},
gi9:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.ga3(q).J(0,s.ga3(s))
q=s}return q},
eb:function(a){var s=this.dy
return s.push(a==null?C.b.gaw(s):a)},
e9:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.j2.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:1}
E.j3.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:1}
E.j4.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:1}
E.fl.prototype={
cV:function(a){this.ed()},
cU:function(){return this.cV(null)},
ghQ:function(){var s,r=this,q=Date.now(),p=C.c.a4(P.lN(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.Z(q,!1)
return s/p},
da:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.dN(r*o)
r=s.clientHeight
r.toString
p=C.d.dN(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.mb(C.m,this.gih())}},
ed:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.E.f_(s)
r=W.mO(new E.jg(this),t.H)
r.toString
C.E.h4(s,r)}},
ic:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.da()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.Z(p,!1)
q.y=P.lN(p-q.r.a).a*0.000001
p=q.cy
C.b.sl(p.a,0)
p.aS()
p=q.db
C.b.sl(p.a,0)
p.aS()
p=q.dx
C.b.sl(p.a,0)
p.aS()
p=q.dy
C.b.sl(p,0)
p.push(null)
m.b3(q)}q=n.Q
if(q!=null)q.G(null)}catch(o){s=H.al(o)
r=H.lw(o)
P.lz("Error: "+H.x(s))
P.lz("Stack: "+H.x(r))
throw H.c(s)}}}
E.jg.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.ic()}},
$S:32}
Z.fF.prototype={}
Z.bT.prototype={
bt:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.al(q)
r=P.f('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.x(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.jN.prototype={}
Z.cx.prototype={
b1:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
bt:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].bt(a)}},
ei:function(a){var s,r,q
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
l.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.da(p.c)+"'")+"]")}o=H.b([],m)
for(m=this.c,s=m.length,q=0;q<m.length;m.length===s||(0,H.q)(m),++q){n=m[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(l,", ")+"\nAttrs:   "+C.b.j(o,", ")}}
Z.bY.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.da(this.c)+"'")+"]"}}
Z.bJ.prototype={
gcQ:function(a){var s=this.a,r=(s&$.bt().a)!==0?3:0
if((s&$.bs().a)!==0)r+=3
if((s&$.br().a)!==0)r+=3
if((s&$.bO().a)!==0)r+=2
if((s&$.bP().a)!==0)r+=3
if((s&$.e9().a)!==0)r+=3
if((s&$.ea().a)!==0)r+=4
if((s&$.ct().a)!==0)++r
return(s&$.bq().a)!==0?r+4:r},
hs:function(a){var s,r=$.bt(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bs()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.br()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bO()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bP()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.e9()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ea()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ct()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bq()
if((q&r.a)!==0)if(s===a)return r
return $.no()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bJ))return!1
return this.a===b.a},
i:function(a){var s=H.b([],t.s),r=this.a
if((r&$.bt().a)!==0)s.push("Pos")
if((r&$.bs().a)!==0)s.push("Norm")
if((r&$.br().a)!==0)s.push("Binm")
if((r&$.bO().a)!==0)s.push("Txt2D")
if((r&$.bP().a)!==0)s.push("TxtCube")
if((r&$.e9().a)!==0)s.push("Clr3")
if((r&$.ea().a)!==0)s.push("Clr4")
if((r&$.ct().a)!==0)s.push("Weight")
if((r&$.bq().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.hZ.prototype={}
D.bV.prototype={
n:function(a,b){var s=this.a
return(s==null?this.a=H.b([],t.a):s).push(b)},
O:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.b.C(p,b)
if(p===!0){p=r.a
p=p==null?q:C.b.O(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.b.C(p,b)
if(p===!0){p=r.b
p=p==null?q:C.b.O(p,b)
s=p===!0||s}return s},
G:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.U():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.b.E(P.iz(p,!0,t.h2),new D.ih(s))
r=q.b
if(r!=null){q.b=H.b([],t.a)
C.b.E(r,new D.ii(s))}return!0},
am:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.G(s)}}}}
D.ih.prototype={
$1:function(a){a.$1(this.a)},
$S:28}
D.ii.prototype={
$1:function(a){a.$1(this.a)},
$S:28}
D.U.prototype={}
D.bb.prototype={}
D.bc.prototype={}
D.G.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.x(this.d)+" => "+H.x(this.e)}}
X.cy.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cy))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.eB.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eB))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.iv.prototype={}
X.cW.prototype={}
X.iB.prototype={
ba:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.a2(o.a+b.a,o.b+b.b)
o=q.a.gb_()
s=$.ai
if(s==null)s=$.ai=new V.a2(0,0)
r=q.x
q.z=new P.Z(p,!1)
q.x=n
return new X.c1(a,s,r,o,n)},
cC:function(a,b){this.r=a.a
return!1},
bl:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bk:function(a,b){var s=this.d
if(s==null)return!1
s.G(this.ba(a,b))
return!0},
i6:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gb_()
r=this.x
Date.now()
q.G(new X.c2(new V.a5(a.a,a.b),s,r))
return!0},
fD:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.G(new X.cW(c,q.a.gb_(),b))
q.y=new P.Z(s,!1)
s=$.ai
q.x=s==null?$.ai=new V.a2(0,0):s}}
X.a9.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.a9))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
i:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.b.j(s,"+")}}
X.c1.prototype={}
X.iU.prototype={
bT:function(a,b,c){var s=this,r=new P.Z(Date.now(),!1),q=s.a.gb_(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.c1(a,p,o,q,b)},
cC:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.G(this.bT(a,b,!0))
return!0},
bl:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.G(r.bT(a,b,!0))
return!0},
bk:function(a,b){var s=this.d
if(s==null)return!1
s.G(this.bT(a,b,!1))
return!0},
i7:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gb_()
Date.now()
r.G(new X.c2(new V.a5(a.a,a.b),s,b))
return!0},
gdC:function(){var s=this.b
return s==null?this.b=D.N():s},
gcM:function(){var s=this.c
return s==null?this.c=D.N():s},
gdZ:function(){var s=this.d
return s==null?this.d=D.N():s}}
X.c2.prototype={}
X.f_.prototype={}
X.dl.prototype={}
X.jl.prototype={
ba:function(a,b){var s,r,q,p,o=this,n=new P.Z(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.ai
if(r==null){r=new V.a2(0,0)
$.ai=r
s=r}else s=r}r=o.a.gb_()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.dl(q,p,r,s)},
i5:function(a){var s=this.b
if(s==null)return!1
s.G(this.ba(a,!0))
return!0},
i3:function(a){var s=this.c
if(s==null)return!1
s.G(this.ba(a,!0))
return!0},
i4:function(a){var s=this.d
if(s==null)return!1
s.G(this.ba(a,!1))
return!0}}
X.fC.prototype={
gb2:function(a){var s=this.b
return s==null?this.b=new X.iv(new X.a9(!1,!1,!1),P.cS(t.S)):s},
ga7:function(){var s,r=this.c
if(r==null){r=$.ai
if(r==null){r=$.ai=new V.a2(0,0)
s=r}else s=r
r=this.c=new X.iU(this,r,s,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1))}return r},
gaj:function(){var s=this.d
if(s==null){s=$.ai
if(s==null)s=$.ai=new V.a2(0,0)
s=this.d=new X.iB(this,s,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1))}return s},
gb5:function(){var s,r=this.e
if(r==null){r=$.ai
if(r==null){r=$.ai=new V.a2(0,0)
s=r}else s=r
r=this.e=new X.jl(this,r,s,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1))}return r},
gb_:function(){var s=this.a
return V.m4(0,0,C.l.gdA(s).c,C.l.gdA(s).d)},
d0:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.eB(p,new X.a9(s,r,q))},
aX:function(a){var s,r,q=this.gb2(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.a9(p,s,r)},
c6:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gb2(this)
r=a.altKey
q=a.shiftKey
p.c=new X.a9(s,r===!0,q===!0)},
aF:function(a){var s,r,q,p
if(a==null){s=$.ai
return s==null?$.ai=new V.a2(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.a2(r-p,q-s)},
bc:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.a5(r,s)},
c2:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=H.b([],t.cG)
r=a.touches
if(r==null)r=H.b([],t.gT)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.aq(n)
m=o.pageY
m.toString
C.d.aq(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.aq(l)
l=o.pageY
l.toString
l=C.d.aq(l)
k=j.top
k.toString
s.push(new V.a2(n-m,l-k))}return s},
aC:function(a){var s,r,q,p
if(a==null)return new X.cy(0,new X.a9(!1,!1,!1))
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
return new X.cy(s,new X.a9(r,q,p))},
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
fv:function(a){return this.f=!0},
fh:function(a){return this.f=!1},
fo:function(a){if(this.f&&this.bU(a))a.preventDefault()},
fB:function(a){var s,r,q=this
if(!q.f)return
s=q.d0(a)
r=q.gb2(q)
r.c=s.b
r.d.n(0,s.a)},
fz:function(a){var s,r,q=this
if(!q.f)return
s=q.d0(a)
r=q.gb2(q)
r.c=s.b
r.d.O(0,s.a)},
fF:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aX(a)
if(p.x){s=p.aC(a)
r=p.bc(a)
if(p.gaj().cC(s,r))a.preventDefault()
return}s=p.aC(a)
q=p.aF(a)
if(p.ga7().cC(s,q))a.preventDefault()},
fJ:function(a){var s,r,q,p=this
p.aX(a)
s=p.aC(a)
if(p.x){r=p.bc(a)
if(p.gaj().bl(s,r))a.preventDefault()
return}q=p.aF(a)
if(p.ga7().bl(s,q))a.preventDefault()},
ft:function(a){var s,r,q,p=this
if(!p.bU(a)){p.aX(a)
s=p.aC(a)
if(p.x){r=p.bc(a)
if(p.gaj().bl(s,r))a.preventDefault()
return}q=p.aF(a)
if(p.ga7().bl(s,q))a.preventDefault()}},
fH:function(a){var s,r,q,p=this
p.aX(a)
s=p.aC(a)
if(p.x){r=p.bc(a)
if(p.gaj().bk(s,r))a.preventDefault()
return}q=p.aF(a)
if(p.ga7().bk(s,q))a.preventDefault()},
fq:function(a){var s,r,q,p=this
if(!p.bU(a)){p.aX(a)
s=p.aC(a)
if(p.x){r=p.bc(a)
if(p.gaj().bk(s,r))a.preventDefault()
return}q=p.aF(a)
if(p.ga7().bk(s,q))a.preventDefault()}},
fL:function(a){var s,r,q=this
q.aX(a)
s=new V.a5(C.D.ghE(a),C.D.ghF(a)).J(0,q.Q)
if(q.x){if(q.gaj().i6(s))a.preventDefault()
return}r=q.aF(a)
if(q.ga7().i7(s,r))a.preventDefault()},
fN:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aC(q.y)
r=q.aF(q.y)
q.gaj().fD(s,r,p)}},
h_:function(a){var s,r=this
r.a.focus()
r.f=!0
r.c6(a)
s=r.c2(a)
if(r.gb5().i5(s))a.preventDefault()},
fW:function(a){var s
this.c6(a)
s=this.c2(a)
if(this.gb5().i3(s))a.preventDefault()},
fY:function(a){var s
this.c6(a)
s=this.c2(a)
if(this.gb5().i4(s))a.preventDefault()}}
D.bU.prototype={
aA:function(a){var s=this.r
return s==null?null:s.G(a)},
eF:function(){return this.aA(null)},
$iaw:1}
D.cQ.prototype={
gv:function(){var s=this.y
return s==null?this.y=D.N():s},
gdY:function(){var s=this.z
return s==null?this.z=D.N():s},
aA:function(a){var s=this.y
return s==null?null:s.G(a)},
d7:function(a){var s=this.z
return s==null?null:s.G(a)},
fC:function(){return this.d7(null)},
fQ:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)if(this.eD(a[r]))return!1
return!0},
fb:function(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=this.gd6(),q=this.f,p=t.a,o=0;o<b.length;b.length===s||(0,H.q)(b),++o){n=b[o]
q.push(n)
m=n.r
if(m==null)m=n.r=new D.bV()
l=m.a;(l==null?m.a=H.b([],p):l).push(r)}this.aA(new D.bb())},
fU:function(a,b){var s,r,q,p
for(s=b.gR(b),r=this.gd6(),q=this.e;s.u();){p=s.gB(s)
C.b.O(q,p)
p.gv().O(0,r)}this.aA(new D.bc())},
eD:function(a){var s=C.b.C(this.f,a)
return s}}
V.T.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.T))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.aQ.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aQ))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"},
A:function(){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"}}
V.ie.prototype={}
V.d1.prototype={
ab:function(a,b){var s=this,r=H.b([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.n)
return r},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.d1))return!1
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
i:function(a){var s,r,q,p,o=this,n=t.n,m=V.cs(H.b([o.a,o.d,o.r],n),3,0),l=V.cs(H.b([o.b,o.e,o.x],n),3,0),k=V.cs(H.b([o.c,o.f,o.y],n),3,0)
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
V.bg.prototype={
ab:function(a,b){var s=this,r=H.b([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.n)
return r},
dW:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.F().toString
if(Math.abs(b3-0)<1e-9)return V.ax()
s=1/b3
r=-l
q=-a2
return V.aW((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
J:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aW(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bF:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.D(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bn:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.W(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bg))return!1
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
i:function(a){return this.A()},
H:function(a){var s,r,q,p,o,n=this,m=t.n,l=V.cs(H.b([n.a,n.e,n.y,n.cx],m),3,0),k=V.cs(H.b([n.b,n.f,n.z,n.cy],m),3,0),j=V.cs(H.b([n.c,n.r,n.Q,n.db],m),3,0),i=V.cs(H.b([n.d,n.x,n.ch,n.dx],m),3,0)
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
A:function(){return this.H("")}}
V.a2.prototype={
ac:function(a){return new V.a5(a.a-this.a,a.b-this.b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"},
A:function(){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.W.prototype={
W:function(a,b){return new V.W(this.a+b.a,this.b+b.b,this.c+b.c)},
aQ:function(a,b){return new V.W(this.a-b.a,this.b-b.b,this.c-b.c)},
J:function(a,b){return new V.W(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.W))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"},
A:function(){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.bE.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bE))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"},
A:function(){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"}}
V.f2.prototype={
gax:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.f2))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"}}
V.a5.prototype={
cv:function(a){return Math.sqrt(this.a5(this))},
a5:function(a){return this.a*a.a+this.b*a.b},
J:function(a,b){return new V.a5(this.a*b,this.b*b)},
ad:function(a,b){var s
$.F().toString
if(Math.abs(b-0)<1e-9){s=$.bI
return s==null?$.bI=new V.a5(0,0):s}return new V.a5(this.a/b,this.b/b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.D.prototype={
cv:function(a){return Math.sqrt(this.a5(this))},
a5:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cw:function(a,b){return new V.D(V.hN(this.a,a.a,b),V.hN(this.b,a.b,b),V.hN(this.c,a.c,b))},
I:function(){var s=this,r=Math.sqrt(s.a5(s))
if(r===1)return s
return s.ad(0,r)},
aH:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.D(s*r-q*p,q*o-n*r,n*p-s*o)},
W:function(a,b){return new V.D(this.a+b.a,this.b+b.b,this.c+b.c)},
b6:function(a){return new V.D(-this.a,-this.b,-this.c)},
J:function(a,b){return new V.D(this.a*b,this.b*b,this.c*b)},
ad:function(a,b){$.F().toString
if(Math.abs(b-0)<1e-9)return V.dB()
return new V.D(this.a/b,this.b/b,this.c/b)},
dX:function(){$.F().toString
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
A:function(){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
U.i_.prototype={
bM:function(a){var s=V.kU(a,this.c,this.b)
return s},
gv:function(){var s=this.y
return s==null?this.y=D.N():s},
L:function(a){var s=this.y
return s==null?null:s.G(a)},
scN:function(a,b){},
scz:function(a){var s,r=this,q=r.b
$.F().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bM(s)}r.L(new D.G("maximumLocation",q,r.b))}},
scB:function(a){var s,r=this,q=r.c
$.F().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bM(s)}r.L(new D.G("minimumLocation",q,r.c))}},
sZ:function(a,b){var s,r=this
b=r.bM(b)
s=r.d
$.F().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.L(new D.G("location",s,b))}},
scA:function(a){var s,r,q=this,p=q.e
$.F().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.L(new D.G("maximumVelocity",p,a))}},
sa0:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.F().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.L(new D.G("velocity",r,a))}},
scj:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.F().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.L(new D.G("dampening",s,a))}},
ay:function(a,b){var s,r,q,p=this,o=p.f
$.F().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sZ(0,p.d+s*b)
o=p.x
$.F().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sa0(s)}}}
U.cz.prototype={
gv:function(){var s=this.b
return s==null?this.b=D.N():s},
az:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cz))return!1
return this.a.q(0,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.bX.prototype={
gv:function(){var s=this.e
return s==null?this.e=D.N():s},
L:function(a){var s=this.e
return s==null?null:s.G(a)},
a9:function(){return this.L(null)},
f9:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaT(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.gv()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}this.L(new D.bb())},
fS:function(a,b){var s,r
for(s=b.gR(b),r=this.gaT();s.u();)s.gB(s).gv().O(0,r)
this.L(new D.bc())},
az:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.am(o,o.length),n=H.X(o).c,s=null;o.u();){r=n.a(o.d)
if(r!=null){q=r.az(0,b,c)
s=s==null?q:q.J(0,s)}}p.f=s==null?V.ax():s
o=p.e
if(o!=null)o.am(0)}return p.f},
q:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bX))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(p>=q.length)return H.d(q,p)
if(!J.M(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$ia_:1}
U.a_.prototype={}
U.dd.prototype={
gv:function(){var s=this.y
return s==null?this.y=D.N():s},
L:function(a){var s=this.y
return s==null?null:s.G(a)},
sel:function(a){var s
a=V.kU(a,0,6.283185307179586)
s=this.a
$.F().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
this.L(new D.G("yaw",s,a))}},
se8:function(a,b){var s
b=V.kU(b,0,6.283185307179586)
s=this.b
$.F().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
this.L(new D.G("pitch",s,b))}},
see:function(a){var s
a=V.kU(a,0,6.283185307179586)
s=this.c
$.F().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
this.L(new D.G("roll",s,a))}},
az:function(a,b,c){var s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.sel(s.a+s.d*b.y)
s.se8(0,s.b+s.e*b.y)
s.see(s.c+s.f*b.y)
s.x=V.lX(s.c).J(0,V.lW(s.b)).J(0,V.lV(s.a))
r=s.y
if(r!=null)r.am(0)}return s.x},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.dd))return!1
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
U.dy.prototype={
gv:function(){var s=this.cy
return s==null?this.cy=D.N():s},
L:function(a){var s=this.cy
return s==null?null:s.G(a)},
a9:function(){return this.L(null)},
bf:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.ga7().gdC().n(0,s.gbV())
a.ga7().gdZ().n(0,s.gbX())
a.ga7().gcM().n(0,s.gbZ())
return!0},
bW:function(a){var s=this,r=s.c,q=s.a
if(!r.q(0,q==null?null:q.gb2(q).c))return
s.x=s.y=!0
s.z=s.b.d},
bY:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.ac(a.d)
if(s.a5(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.sZ(0,-a.y.ac(r).J(0,2).ad(0,s.gax()).a*2.5+p.z)
q.sa0(0)
p.Q=a.z.ac(r).J(0,2).ad(0,s.gax())
p.a9()},
c_:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.a5(s)>0.0001){r.b.sa0(r.Q.a*10*2.5)
r.a9()}},
az:function(a,b,c){var s=this,r=s.ch,q=b.e
if(r<q){s.ch=q
r=s.b
r.ay(0,b.y)
s.cx=V.lX(r.d)}return s.cx},
$ia_:1}
U.dz.prototype={
gv:function(){var s=this.fx
return s==null?this.fx=D.N():s},
L:function(a){var s=this.fx
return s==null?null:s.G(a)},
a9:function(){return this.L(null)},
bf:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.ga7().gdC().n(0,q.gbV())
a.ga7().gdZ().n(0,q.gbX())
a.ga7().gcM().n(0,q.gbZ())
s=a.gaj()
r=s.f
s=r==null?s.f=D.N():r
s.n(0,q.gf1())
s=a.gaj()
r=s.d
s=r==null?s.d=D.N():r
s.n(0,q.gf3())
s=a.gb5()
r=s.b
s=r==null?s.b=D.N():r
s.n(0,q.ghi())
s=a.gb5()
r=s.d
s=r==null?s.d=D.N():r
s.n(0,q.ghg())
s=a.gb5()
r=s.c
s=r==null?s.c=D.N():r
s.n(0,q.ghe())
return!0},
aW:function(a){return new V.a5(a.a,a.b)},
bW:function(a){var s=this
t.Z.a(a)
if(!s.d.q(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bY:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ac(a.d)
if(s.a5(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aW(a.y.ac(r).J(0,2).ad(0,s.gax()))
p=n.c
p.sZ(0,-q.a*2.5+n.cy)
o=n.b
o.sZ(0,-q.b*2.5+n.db)
o.sa0(0)
p.sa0(0)
n.dx=n.aW(a.z.ac(r).J(0,2).ad(0,s.gax()))
n.a9()},
c_:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a5(s)>0.0001){r.c.sa0(-r.dx.a*10*2.5)
r.b.sa0(-r.dx.b*10*2.5)
r.a9()}},
f2:function(a){var s=this
if(t.bv.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
f4:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.q(0,a.x.b))return
s=a.c
r=a.d
q=n.aW(a.y.ac(r).J(0,2).ad(0,s.gax()))
p=n.c
p.sZ(0,-q.a*2.5+n.cy)
o=n.b
o.sZ(0,-q.b*2.5+n.db)
o.sa0(0)
p.sa0(0)
n.dx=n.aW(a.z.ac(r).J(0,2).ad(0,s.gax()))
n.a9()},
hj:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
hh:function(a){var s,r,q,p,o,n=this
t.dr.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ac(a.d)
if(s.a5(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aW(a.y.ac(r).J(0,2).ad(0,s.gax()))
p=n.c
p.sZ(0,-q.a*2.5+n.cy)
o=n.b
o.sZ(0,-q.b*2.5+n.db)
o.sa0(0)
p.sa0(0)
n.dx=n.aW(a.z.ac(r).J(0,2).ad(0,s.gax()))
n.a9()},
hf:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a5(s)>0.0001){r.c.sa0(-r.dx.a*10*2.5)
r.b.sa0(-r.dx.b*10*2.5)
r.a9()}},
az:function(a,b,c){var s,r=this,q=r.dy,p=b.e
if(q<p){r.dy=p
s=b.y
q=r.c
q.ay(0,s)
p=r.b
p.ay(0,s)
r.fr=V.lV(p.d).J(0,V.lW(q.d))}return r.fr},
$ia_:1}
U.dA.prototype={
gv:function(){var s=this.r
return s==null?this.r=D.N():s},
L:function(a){var s=this.r
return s==null?null:s.G(a)},
bf:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.ga7()
r=s.e
s=r==null?s.e=D.N():r
r=this.gf6()
s.n(0,r)
s=a.gaj()
q=s.e;(q==null?s.e=D.N():q).n(0,r)
return!0},
f7:function(a){var s=this,r=s.b,q=s.a
if(!r.q(0,q==null?null:q.gb2(q).c))return
t.bZ.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.L(new D.G("zoom",r,q))}},
az:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.lY(s,s,s,1)}return r.f},
$ia_:1}
M.ep.prototype={
aB:function(a){var s=this.y
return s==null?null:s.G(a)},
eG:function(){return this.aB(null)},
fk:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gas(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bV()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.aB(new D.bb())},
fm:function(a,b){var s,r
for(s=b.gR(b),r=this.gas();s.u();)s.gB(s).gv().O(0,r)
this.aB(new D.bc())},
seg:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gv().O(0,r.gas())
s=r.d
r.d=a
if(a!=null)a.gv().n(0,r.gas())
r.aB(new D.G("technique",s,r.d))}},
gv:function(){var s=this.y
return s==null?this.y=D.N():s},
b3:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.eb(d.d)
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
n=C.d.aq(o.a*q)
m=C.d.aq(o.b*p)
l=C.d.aq(o.c*q)
a.c=l
o=C.d.aq(o.d*p)
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
g=V.aW(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.ea(g)
f=$.n9()
e=s.b
if(e!=null)f=e.az(0,a,s).J(0,f)
a.db.ea(f)}s=d.d
if(s!=null)s.ay(0,a)
for(s=d.e.a,r=new J.am(s,s.length),o=H.X(r).c;r.u();)o.a(r.d).ay(0,a)
for(s=new J.am(s,s.length),r=H.X(s).c;s.u();)r.a(s.d).b3(a)
if(d.b!=null){a.cy.cD()
a.db.cD()}a.e9()}}
A.ef.prototype={}
A.hS.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hH:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
hG:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.aJ.prototype={
gar:function(a){var s=this.a?1:0
return s|0},
i:function(a){var s=this.a?1:0
return""+(s|0)},
q:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.aJ))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.eG.prototype={
ez:function(d7,d8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=null,d1=u.C,d2="Required uniform value, ",d3=", was not defined or used in shader.",d4=c9.x,d5=new P.a0(""),d6=d4.fr
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
A.pJ(d4,d5)
A.pL(d4,d5)
A.pK(d4,d5)
A.pN(d4,d5)
A.pO(d4,d5)
A.pM(d4,d5)
A.pP(d4,d5)
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
m=A.pI(d4)
c9.c=n
c9.d=m
l=c9.d1(n,35633)
k=c9.d1(c9.d,35632)
s=c9.a
q=s.createProgram()
q.toString
c9.e=q
s.attachShader(c9.gaD(),l)
s.attachShader(c9.gaD(),k)
s.linkProgram(c9.gaD())
if(!H.mH(s.getProgramParameter(c9.gaD(),35714))){j=s.getProgramInfoLog(c9.gaD())
if(j==null)j="undefined log error"
s.deleteProgram(c9.e)
H.h(P.f("Failed to link shader: "+j))}c9.ha()
c9.hc()
c9.y=c9.gag(c9).h(0,"posAttr")
c9.Q=c9.gag(c9).h(0,"normAttr")
c9.z=c9.gag(c9).h(0,"binmAttr")
c9.ch=c9.gag(c9).h(0,"txt2DAttr")
c9.cx=c9.gag(c9).h(0,"txtCubeAttr")
c9.cy=c9.gag(c9).h(0,"bendAttr")
if(d4.dy)c9.fy=t.j.a(c9.gU().T(0,"invViewMat"))
if(d6)c9.db=t.j.a(c9.gU().T(0,"objMat"))
if(r)c9.dx=t.j.a(c9.gU().T(0,"viewObjMat"))
d6=t.j
c9.fr=d6.a(c9.gU().T(0,"projViewObjMat"))
if(d4.go)c9.dy=d6.a(c9.gU().T(0,"viewMat"))
if(d4.x1)c9.go=t.E.a(c9.gU().T(0,"txt2DMat"))
if(d4.x2)c9.id=d6.a(c9.gU().T(0,"txtCubeMat"))
if(d4.y1)c9.k1=d6.a(c9.gU().T(0,"colorMat"))
c9.k3=H.b([],t.p)
s=d4.b0
if(s>0){c9.k2=t.w.a(c9.gU().T(0,"bendMatCount"))
for(i=0;i<s;++i){r=c9.k3
h=c9.r
if(h==null)H.h(P.f(d1))
q="bendValues["+i+"].mat"
g=h.h(0,q)
if(g==null)H.h(P.f(d2+q+d3))
r.push(d6.a(g))}}if(d4.a.a)c9.k4=t.g.a(c9.gU().T(0,"emissionClr"))
if(d4.b.a)c9.rx=t.g.a(c9.gU().T(0,"ambientClr"))
if(d4.c.a)c9.x2=t.g.a(c9.gU().T(0,"diffuseClr"))
if(d4.d.a)c9.b0=t.g.a(c9.gU().T(0,"invDiffuseClr"))
d6=d4.e.a
if(!d6)s=!1
else s=!0
if(s){c9.dH=t.v.a(c9.gU().T(0,"shininess"))
if(d6)c9.dG=t.g.a(c9.gU().T(0,"specularClr"))}if(d4.db){c9.dI=t.bz.a(c9.gU().T(0,"envSampler"))
if(d4.r.a)c9.dJ=t.g.a(c9.gU().T(0,"reflectClr"))
d6=d4.x.a
if(!d6)s=!1
else s=!0
if(s){c9.dK=t.v.a(c9.gU().T(0,"refraction"))
if(d6)c9.dL=t.g.a(c9.gU().T(0,"refractClr"))}}if(d4.y.a)c9.dM=t.v.a(c9.gU().T(0,"alpha"))
if(d4.k1){d6=d4.z
s=d6.length
if(s!==0){r=t.S
c9.ck=P.V(r,t.W)
c9.cl=P.V(r,t.O)
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
a9=a8}b.push(new A.dr(g,a2,a3,a9,a8,a7))}c9.cl.m(0,d,b)
a=c9.ck
h=c9.r
if(h==null)H.h(P.f(d1))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.h(P.f(d2+a0+d3))
a.m(0,d,r.a(g))}}d6=d4.Q
s=d6.length
if(s!==0){r=t.S
c9.cm=P.V(r,t.W)
c9.cn=P.V(r,t.d)
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
b.push(new A.ds(b2,b1,b0,g,a2,b3))}c9.cn.m(0,d,b)
a=c9.cm
h=c9.r
if(h==null)H.h(P.f(d1))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.h(P.f(d2+a0+d3))
a.m(0,d,r.a(g))}}d6=d4.ch
s=d6.length
if(s!==0){r=t.S
c9.co=P.V(r,t.W)
c9.cp=P.V(r,t.m)
for(r=t.w,q=t.g,p=t.E,o=t.bz,a=t.x,a0=t.v,a1=t.B,f=0;f<d6.length;d6.length===s||(0,H.q)(d6),++f){e=d6[f]
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
a9=a8}b.push(new A.du(g,a2,c0,a3,b3,c1,c2,a9,a8,a7))}c9.cp.m(0,d,b)
b4=c9.co
h=c9.r
if(h==null)H.h(P.f(d1))
b5=c+"Count"
g=h.h(0,b5)
if(g==null)H.h(P.f(d2+b5+d3))
b4.m(0,d,r.a(g))}}d4=d4.cx
d6=d4.length
if(d6!==0){s=t.S
c9.cq=P.V(s,t.W)
c9.cr=P.V(s,t.R)
for(s=t.w,r=t.g,q=t.v,p=t.x,o=t.G,a=t.J,f=0;f<d4.length;d4.length===d6||(0,H.q)(d4),++f){e=d4[f]
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
b.push(new A.dx(g,a2,a3,a4,b2,b1,c6,c5,c2,c8,c7,a9,a8,a7,b3,c1))}c9.cr.m(0,d,b)
a0=c9.cq
h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"Count"
g=h.h(0,a1)
if(g==null)H.h(P.f(d2+a1+d3))
a0.m(0,d,s.a(g))}}}},
h8:function(a,b){}}
A.b6.prototype={
i:function(a){return"barLight"+this.a}}
A.b8.prototype={
i:function(a){return"dirLight"+this.a}}
A.bh.prototype={
i:function(a){return"pointLight"+this.a}}
A.bj.prototype={
i:function(a){return"spotLight"+this.a}}
A.iF.prototype={
i:function(a){return this.bw}}
A.dr.prototype={}
A.ds.prototype={}
A.du.prototype={}
A.dx.prototype={}
A.df.prototype={
gag:function(a){var s=this.f
if(s==null)throw H.c(P.f("Must initialize the shader prior to getting the attributes."))
return s},
gU:function(){var s=this.r
if(s==null)throw H.c(P.f(u.C))
return s},
gaD:function(){var s=this.e
if(s==null)throw H.c(P.f(u.F))
return s},
d1:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.mH(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.f('Error compiling shader "'+H.x(q)+'": '+s))}return q},
ha:function(){var s,r,q,p,o=this,n=u.F,m=H.b([],t.eu),l=o.a,k=H.kh(l.getProgramParameter(o.gaD(),35721))
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
m.push(new A.ef(l,q,p))}o.f=new A.hS(m)},
hc:function(){var s,r,q,p,o,n,m=this,l=u.F,k=H.b([],t.dC),j=m.a,i=H.kh(j.getProgramParameter(m.gaD(),35718))
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
k.push(m.hC(o,n,q,p))}m.r=new A.jq(k)},
aV:function(a,b,c){var s=this.a
if(a===1)return new A.cb(s,b,c)
else return A.lb(s,this.e,b,a,c)},
eX:function(a,b,c){var s=this.a
if(a===1)return new A.dv(s,b,c)
else return A.lb(s,this.e,b,a,c)},
eY:function(a,b,c){var s=this.a
if(a===1)return new A.dw(s,b,c)
else return A.lb(s,this.e,b,a,c)},
bs:function(a,b){return new P.fV(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
hC:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aV(b,c,d)
case 5121:return s.aV(b,c,d)
case 5122:return s.aV(b,c,d)
case 5123:return s.aV(b,c,d)
case 5124:return s.aV(b,c,d)
case 5125:return s.aV(b,c,d)
case 5126:return new A.dn(s.a,c,d)
case 35664:return new A.fs(s.a,c,d)
case 35665:return new A.dp(s.a,c,d)
case 35666:return new A.dq(s.a,c,d)
case 35667:return new A.ft(s.a,c,d)
case 35668:return new A.fu(s.a,c,d)
case 35669:return new A.fv(s.a,c,d)
case 35674:return new A.fw(s.a,c,d)
case 35675:return new A.dt(s.a,c,d)
case 35676:return new A.cc(s.a,c,d)
case 35678:return s.eX(b,c,d)
case 35680:return s.eY(b,c,d)
case 35670:throw H.c(s.bs("BOOL",c))
case 35671:throw H.c(s.bs("BOOL_VEC2",c))
case 35672:throw H.c(s.bs("BOOL_VEC3",c))
case 35673:throw H.c(s.bs("BOOL_VEC4",c))
default:throw H.c(P.f("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.a3.prototype={}
A.jq.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
T:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.f("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.A()},
A:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.cb.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.ft.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.fu.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.fv.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.fr.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.dn.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.fs.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.dp.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.dq.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.fw.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.dt.prototype={
ao:function(a){var s=new Float32Array(H.cn(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.cc.prototype={
ao:function(a){var s=new Float32Array(H.cn(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.dv.prototype={
i:function(a){return"UniformSampler2D: "+this.c}}
A.dw.prototype={
i:function(a){return"UniformSamplerCube: "+this.c}}
F.kf.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cw(q.b,b).cw(q.d.cw(q.c,b),c)
a.sZ(0,new V.W(p.a,p.b,p.c))
a.seh(p.I())
q=1-b
s=1-c
a.sdv(new V.bE(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)},
$S:8}
F.ku.prototype={
$2:function(a,b){return V.hN(this.a,this.b,b)},
$S:17}
F.kw.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.hN(-1,1,c),n=this.a.$2(b,c)
q=-q*n
s=p*n
a.sZ(0,new V.W(q,s,o))
a.seh(new V.D(q,s,o).I())
a.sdv(new V.bE(1-c,2+c,-1,-1))},
$S:8}
F.kx.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:15}
F.ky.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:15}
F.kS.prototype={
$2:function(a,b){return 0},
$S:17}
F.kR.prototype={
$3:function(a,b,c){var s,r=this.b.$2(b,c)
if(typeof r!=="number")return H.mY(r)
s=a.f
r=(s!=null?new V.D(s.a,s.b,s.c):V.lc()).I().J(0,this.a+r)
a.sZ(0,new V.W(r.a,r.b,r.c))},
$S:8}
F.kT.prototype={
$1:function(a){return new V.W(Math.cos(a),Math.sin(a),0)},
$S:27}
F.kH.prototype={
$1:function(a){var s=this.a*a,r=2+Math.cos(s),q=this.b*a
return new V.W(r*Math.cos(q)/2,r*Math.sin(q)/2,Math.sin(s)/2)},
$S:27}
F.kv.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.lD(l.$1(m),k)
k=J.lD(l.$1(m+3.141592653589793/n.c),k).aQ(0,j)
s=new V.D(k.a,k.b,k.c).I()
r=$.mk
if(r==null){r=new V.D(1,0,0)
$.mk=r}q=s.aH(!s.q(0,r)?V.lc():r).I()
r=q.aH(s).I()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.J(0,l*k)
k=q.J(0,o*k)
a.sZ(0,j.W(0,new V.W(l.a-k.a,l.b-k.b,l.c-k.c)))},
$S:8}
F.au.prototype={
aR:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.c(P.f("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.c7(a)
s.c8(b)
s.h9(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gS().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a_()}},
bg:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.b.O(r.gS().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a_()}}s.c3()
s.c4()
s.h2()},
c7:function(a){this.a=a
a.gS().b.push(this)},
c8:function(a){this.b=a
a.gS().c.push(this)},
h9:function(a){this.c=a
a.gS().d.push(this)},
c3:function(){var s=this.a
if(s!=null)C.b.O(s.gS().b,this)
this.a=null},
c4:function(){var s=this.b
if(s!=null)C.b.O(s.gS().c,this)
this.b=null},
h2:function(){var s=this.c
if(s!=null)C.b.O(s.gS().d,this)
this.c=null},
eQ:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.dB()
if(n!=null)q=q.W(0,n)
if(s!=null)q=q.W(0,s)
if(r!=null)q=q.W(0,r)
if(q.dX())return p
return q.I()},
eS:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aQ(0,n)
q=new V.D(o.a,o.b,o.c).I()
o=r.aQ(0,n)
return q.aH(new V.D(o.a,o.b,o.c).I()).I()},
ce:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.eQ()
if(s==null){s=q.eS()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a_()}return!0},
eP:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.dB()
if(n!=null)q=q.W(0,n)
if(s!=null)q=q.W(0,s)
if(r!=null)q=q.W(0,r)
if(q.dX())return p
return q.I()},
eR:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.F().toString
if(Math.abs(p-0)<1e-9){j=b.aQ(0,e)
o=new V.D(j.a,j.b,j.c).I()
if(q.a-r.a<0)o=o.b6(0)}else{n=(j-s.b)/p
j=b.aQ(0,e).J(0,n).W(0,e).aQ(0,h)
o=new V.D(j.a,j.b,j.c).I()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.b6(0)}m=l.d
if(m!=null){m=m.I()
o=m.aH(o).I().aH(m).I()}return o},
cc:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.eP()
if(s==null){s=q.eR()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a_()}return!0},
ghw:function(a){var s=this
if(J.M(s.a,s.b))return!0
if(J.M(s.b,s.c))return!0
if(J.M(s.c,s.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
H:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gw(p)
p=a+C.a.al(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gw(o)
p=p+C.a.al(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gw(o)
s=p+C.a.al(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.A()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.A()
return s+((p==null?"-":p)+"}")},
A:function(){return this.H("")}}
F.ij.prototype={}
F.jc.prototype={
bh:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gw(q)
s=c.a
if(q==(s==null?r:s.gw(s))){q=b.b
q=q==null?r:q.gw(q)
s=c.b
if(q==(s==null?r:s.gw(s))){q=b.c
q=q==null?r:q.gw(q)
s=c.c
q=q==(s==null?r:s.gw(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gw(q)
s=c.b
if(q==(s==null?r:s.gw(s))){q=b.b
q=q==null?r:q.gw(q)
s=c.c
if(q==(s==null?r:s.gw(s))){q=b.c
q=q==null?r:q.gw(q)
s=c.a
q=q==(s==null?r:s.gw(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gw(q)
s=c.c
if(q==(s==null?r:s.gw(s))){q=b.b
q=q==null?r:q.gw(q)
s=c.a
if(q==(s==null?r:s.gw(s))){q=b.c
q=q==null?r:q.gw(q)
s=c.b
q=q==(s==null?r:s.gw(s))}else q=!1
return q}else return!1}}}}
F.eD.prototype={
ey:function(a,b){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a line with a start vertex which is not attached to a shape."))
if(r!==b.a)throw H.c(P.f("May not create a line with vertices attached to different shapes."))
s.c7(a)
s.c8(b)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.ga6(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a_()}},
bg:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null)){if(!q){r=r.a
if(r!=null)C.b.O(r.ga6(r).b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a_()}}s.c3()
s.c4()},
c7:function(a){this.a=a
a.ga6(a).b.push(this)},
c8:function(a){this.b=a
a.ga6(a).c.push(this)},
c3:function(){var s=this.a
if(s!=null)C.b.O(s.ga6(s).b,this)
this.a=null},
c4:function(){var s=this.b
if(s!=null)C.b.O(s.ga6(s).c,this)
this.b=null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
H:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gw(s)
s=a+C.a.al(C.c.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gw(r)
return s+C.a.al(C.c.i(r==null?-1:r),0)},
A:function(){return this.H("")}}
F.iw.prototype={}
F.jp.prototype={
bh:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gw(q)
s=c.a
if(q==(s==null?r:s.gw(s))){q=b.b
q=q==null?r:q.gw(q)
s=c.b
return q==(s==null?r:s.gw(s))}else{q=b.a
q=q==null?r:q.gw(q)
s=c.b
if(q==(s==null?r:s.gw(s))){q=b.b
q=q==null?r:q.gw(q)
s=c.a
return q==(s==null?r:s.gw(s))}else return!1}}}
F.eZ.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
H:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gw(s)
return a+C.a.al(C.c.i(s),0)},
A:function(){return this.H("")}}
F.j6.prototype={
gY:function(){var s=this.a
return s==null?this.a=new F.y(this,H.b([],t.k)):s},
gbm:function(a){var s=this.b
return s==null?this.b=new F.bF(this,H.b([],t.q)):s},
ga6:function(a){var s=this.c
return s==null?this.c=new F.dh(this,H.b([],t.L)):s},
gS:function(){var s=this.d
return s==null?this.d=new F.dg(this,H.b([],t.u)):s},
gv:function(){var s=this.e
return s==null?this.e=D.N():s},
bi:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.e
if(a0!=null)++a0.d
a1.gY().X()
s=b.gY().c.length
for(a0=a1.gY().c,r=a0.length,q=t.k,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){o=a0[p]
n=b.a
if(n==null)n=b.a=new F.y(b,H.b([],q))
n.n(0,o.hz())}b.gY().X()
for(a0=a1.gbm(a1).b,r=a0.length,n=t.q,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){m=a0[p]
l=b.a
if(l==null)l=b.a=new F.y(b,H.b([],q))
k=m.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).X()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
h=l[k]
k=b.b
l=(k==null?b.b=new F.bF(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,h)
l=new F.eZ()
if(h.a==null)H.h(P.f("May not create a point with a vertex which is not attached to a shape."))
l.a=h
k=h.b;(k==null?h.b=new F.dC(H.b([],n)):k).b.push(l)
k=l.a
if(k!=null){k=k.a
if(k!=null){j=k.b;(j==null?k.b=new F.bF(k,H.b([],n)):j).b.push(l)}}l=l.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.G(a)}}}for(a0=a1.ga6(a1).b,r=a0.length,n=t.L,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){g=a0[p]
l=b.a
if(l==null)l=b.a=new F.y(b,H.b([],q))
k=g.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).X()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.y(b,H.b([],q)):k
k=g.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).X()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.c
l=(k==null?b.c=new F.dh(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,e)
new F.eD().ey(f,e)}for(a0=a1.gS().b,r=a0.length,n=t.u,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){d=a0[p]
l=b.a
if(l==null)l=b.a=new F.y(b,H.b([],q))
k=d.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).X()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.y(b,H.b([],q)):k
k=d.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).X()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.a
l=k==null?b.a=new F.y(b,H.b([],q)):k
k=d.c
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).X()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
c=l[k]
k=b.d
l=(k==null?b.d=new F.dg(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,e)
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,c)
new F.au().aR(f,e,c)}a0=b.e
if(a0!=null)a0.am(0)},
au:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gS().au()||!1
if(!r.gY().au())s=!1
q=r.e
if(q!=null)q.am(0)
return s},
hV:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.gY().c
s=H.b(m.slice(0),H.kg(m))
for(m=t.k;s.length!==0;){r=C.b.ghL(s)
C.b.cG(s,0)
q=H.b([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(a.bh(0,r,o)){q.push(o)
C.b.cG(s,p)}}if(q.length>1)b.bi(q)}n.gY().X()
n.ga6(n).cH()
n.gS().cH()
n.gbm(n).ib()
n.ga6(n).cI(new F.jp())
n.gS().cI(new F.jc())
m=n.e
if(m!=null)m.am(0)},
cb:function(){this.hV(new F.jI(),new F.iX())},
ct:function(){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
n.gS().ct()
for(s=n.gY().c.length-1,m=t.k;s>=0;--s){r=n.a
r=(r==null?n.a=new F.y(n,H.b([],m)):r).c
if(s>=r.length)return H.d(r,s)
q=r[s]
p=q.r
if(p!=null)q.se_(new V.D(-p.a,-p.b,-p.c))
o=q.x
if(o!=null){o=new V.D(-o.a,-o.b,-o.c).I()
if(!J.M(q.x,o)){q.x=o
r=q.a
if(r!=null){r=r.e
if(r!=null)r.G(null)}}}}m=n.e
if(m!=null)m.am(0)},
hu:function(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=34962,b={},a=e.gY().c.length,a0=a3.a,a1=(a0&$.bt().a)!==0?1:0
if((a0&$.bs().a)!==0)++a1
if((a0&$.br().a)!==0)++a1
if((a0&$.bO().a)!==0)++a1
if((a0&$.bP().a)!==0)++a1
if((a0&$.e9().a)!==0)++a1
if((a0&$.ea().a)!==0)++a1
if((a0&$.ct().a)!==0)++a1
if((a0&$.bq().a)!==0)++a1
s=a3.gcQ(a3)
r=P.cV(a*s,0,!1,t.gR)
b.a=0
q=P.nZ(a1,new F.j7(b,e,a3,s*4,a,s,r),t.eT)
a0=a2.a
p=a0.createBuffer()
p.toString
a0.bindBuffer(c,p)
a0.bufferData(c,new Float32Array(H.cn(r)),35044)
a0.bindBuffer(c,d)
o=new Z.cx(new Z.fF(c,p),H.b([],t.fv),q,a3)
if(e.gbm(e).b.length!==0){n=H.b([],t.t)
p=t.q
m=t.k
l=0
while(!0){k=e.b
if(k==null){k=e.b=new F.bF(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
k=k[l].a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],m)):i).X()}k=k.e}n.push(k==null?0:k);++l}h=Z.ld(a0,34963,n)
o.b.push(new Z.bY(0,n.length,h))}if(e.ga6(e).b.length!==0){n=H.b([],t.t)
p=t.L
m=t.k
l=0
while(!0){k=e.c
if(k==null){k=e.c=new F.dh(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
g=k[l]
k=g.a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],m)):i).X()}k=k.e}n.push(k==null?0:k)
k=g.b
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],m)):i).X()}k=k.e}n.push(k==null?0:k);++l}h=Z.ld(a0,34963,n)
o.b.push(new Z.bY(1,n.length,h))}if(e.gS().b.length!==0){n=H.b([],t.t)
p=t.u
m=t.k
l=0
while(!0){k=e.d
if(k==null){k=e.d=new F.dg(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
f=k[l]
k=f.a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],m)):i).X()}k=k.e}n.push(k==null?0:k)
k=f.b
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],m)):i).X()}k=k.e}n.push(k==null?0:k)
k=f.c
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],m)):i).X()}k=k.e}n.push(k==null?0:k);++l}h=Z.ld(a0,34963,n)
o.b.push(new Z.bY(4,n.length,h))}return o},
i:function(a){var s=this,r="   ",q=H.b([],t.s)
if(s.gY().c.length!==0){q.push("Vertices:")
q.push(s.gY().H(r))}if(s.gbm(s).b.length!==0){q.push("Points:")
q.push(s.gbm(s).H(r))}if(s.ga6(s).b.length!==0){q.push("Lines:")
q.push(s.ga6(s).H(r))}if(s.gS().b.length!==0){q.push("Faces:")
q.push(s.gS().H(r))}return C.b.j(q,"\n")},
a_:function(){var s=this.e
return s==null?null:s.G(null)}}
F.j7.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c.hs(a),e=f.gcQ(f),d=g.a,c=d.a
for(s=g.e,r=g.r,q=r.length,p=g.f,o=g.b,n=t.k,m=0;m<s;++m){l=o.a
l=(l==null?o.a=new F.y(o,H.b([],n)):l).c
if(m>=l.length)return H.d(l,m)
k=l[m].hU(f)
j=d.a+m*p
for(l=k.length,i=0;i<l;++i){h=k[i]
if(j>=q)return H.d(r,j)
r[j]=h;++j}}d.a+=e
return new Z.bT(f,e,c*4,g.d)},
$S:47}
F.dg.prototype={
ho:function(a){var s,r,q,p,o,n,m,l,k=H.b([],t.u),j=a.length
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
l.aR(s,o,n)
k.push(l)}}return k},
hp:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=H.b([],t.u)
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
e.aR(j,i,g)
d.push(e)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,j)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,f)
e=new F.au()
e.aR(j,g,f)
d.push(e)}else{(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,f)
e=new F.au()
e.aR(i,g,f)
d.push(e)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,f)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,j)
e=new F.au()
e.aR(i,f,j)
d.push(e)}m=!m}o=!o}return d},
gl:function(a){return this.b.length},
cI:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gY().c.length-1,q=t.u,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.y(s,H.b([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.d
if(o==null)o=n.d=new F.cg(H.b([],q),H.b([],q),H.b([],q))
m=o.b.length+o.c.length+o.d.length-1
for(;m>=0;m=k){o=n.d
l=(o==null?n.d=new F.cg(H.b([],q),H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.d
if(a.bh(0,l,(o==null?n.d=new F.cg(H.b([],q),H.b([],q),H.b([],q)):o).h(0,j))){l.bg()
break}}}}},
cH:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(q.ghw(q))q.bg()}},
au:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].ce())q=!1
return q},
cd:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].cc())q=!1
return q},
ct:function(){var s,r,q,p,o,n,m,l
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
if(l!=null)l.G(null)}}}},
i:function(a){return this.A()},
H:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].H(a))
return C.b.j(p,"\n")},
A:function(){return this.H("")}}
F.dh.prototype={
gl:function(a){return this.b.length},
cI:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gY().c.length-1,q=t.L,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.y(s,H.b([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.c
if(o==null)o=n.c=new F.ch(H.b([],q),H.b([],q))
m=o.b.length+o.c.length-1
for(;m>=0;m=k){o=n.c
l=(o==null?n.c=new F.ch(H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.c
if(a.bh(0,l,(o==null?n.c=new F.ch(H.b([],q),H.b([],q)):o).h(0,j))){l.bg()
break}}}}},
cH:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(J.M(q.a,q.b))q.bg()}},
i:function(a){return this.A()},
H:function(a){var s,r=H.b([],t.s),q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.d(q,s)
r.push(q[s].H(a+(""+s+". ")))}return C.b.j(r,"\n")},
A:function(){return this.H("")}}
F.bF.prototype={
gl:function(a){return this.b.length},
ib:function(){var s,r,q,p,o,n,m
for(s=this.b,r=s.length-1,q=t.q;r>=0;--r){if(r>=s.length)return H.d(s,r)
p=s[r].a
if(p==null)o=null
else{n=p.b
p=(n==null?p.b=new F.dC(H.b([],q)):n).b.length
o=p}if((o==null?0:o)>1){if(r>=s.length)return H.d(s,r)
m=s[r]
p=m.a
if(p!=null){p=p.a
if(p!=null){n=p.b
C.b.O((n==null?p.b=new F.bF(p,H.b([],q)):n).b,m)}p=m.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.G(null)}}}p=m.a
if(p!=null){n=p.b
C.b.O((n==null?p.b=new F.dC(H.b([],q)):n).b,m)}m.a=null}}},
i:function(a){return this.A()},
H:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].H(a))
return C.b.j(p,"\n")},
A:function(){return this.H("")}}
F.cf.prototype={
ci:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.fD(s.cx,p,m,r,q,o,n,a,l)},
hz:function(){return this.ci(null)},
ga6:function(a){var s=this.c
if(s==null){s=t.L
s=this.c=new F.ch(H.b([],s),H.b([],s))}return s},
gS:function(){var s=this.d
if(s==null){s=t.u
s=this.d=new F.cg(H.b([],s),H.b([],s),H.b([],s))}return s},
gw:function(a){var s=this.a
if(s!=null)s.gY().X()
return this.e},
sZ:function(a,b){var s
if(!J.M(this.f,b)){this.f=b
s=this.a
if(s!=null)s.a_()}},
se_:function(a){var s
a=a.I()
if(!J.M(this.r,a)){this.r=a
s=this.a
if(s!=null)s.a_()}},
seh:function(a){var s
if(!J.M(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a_()}},
sdv:function(a){var s
if(!J.M(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.a_()}},
hU:function(a){var s,r,q,p,o=this,n=null
if(a.q(0,$.bt())){s=o.f
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.q(0,$.bs())){s=o.r
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,1,0],t.n):s}else if(a.q(0,$.br())){s=o.x
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,1],t.n):s}else if(a.q(0,$.bO())){s=o.y
s=s==null?n:H.b([s.a,s.b],t.n)
return s==null?H.b([0,0],t.n):s}else if(a.q(0,$.bP())){s=o.z
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.q(0,$.e9())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return H.b([q,p,s==null?1:s],t.n)}else if(a.q(0,$.ea())){s=o.Q
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([1,1,1,1],t.n):s}else if(a.q(0,$.ct()))return H.b([o.ch],t.n)
else if(a.q(0,$.bq())){s=o.cx
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([-1,-1,-1,-1],t.n):s}else return H.b([],t.n)},
ce:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dB()
p.gS().E(0,new F.jM(o))
p.r=o.a.I()
if(r){s.a_()
o=s.e
if(o!=null)o.am(0)}return!0},
cc:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dB()
p.gS().E(0,new F.jL(o))
p.x=o.a.I()
if(r){s.a_()
o=s.e
if(o!=null)o.am(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
H:function(a){var s,r,q=this,p=null,o="-",n=H.b([],t.s)
n.push(C.a.al(C.c.i(q.e),0))
s=q.f
s=s==null?p:s.A()
n.push(s==null?o:s)
s=q.r
s=s==null?p:s.A()
n.push(s==null?o:s)
s=q.x
s=s==null?p:s.A()
n.push(s==null?o:s)
s=q.y
s=s==null?p:s.A()
n.push(s==null?o:s)
s=q.z
s=s==null?p:s.A()
n.push(s==null?o:s)
s=q.Q
s=s==null?p:s.A()
n.push(s==null?o:s)
n.push(V.A(q.ch,3,0))
s=q.cx
s=s==null?p:s.A()
n.push(s==null?o:s)
r=C.b.j(n,", ")
return a+"{"+r+"}"},
A:function(){return this.H("")}}
F.jM.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.W(0,r)}},
$S:9}
F.jL.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.W(0,r)}},
$S:9}
F.y.prototype={
X:function(){var s,r,q
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
hq:function(a,b,c,d,e,f){var s=F.fD(a,null,b,c,d,e,f,null,0)
this.n(0,s)
return s},
gl:function(a){return this.c.length},
au:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].ce()
return!0},
cd:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].cc()
return!0},
hv:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.I()
if(!J.M(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.G(null)}}}}}return!0},
i:function(a){return this.A()},
H:function(a){var s,r,q,p
this.X()
s=H.b([],t.s)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p)s.push(r[p].H(a))
return C.b.j(s,"\n")},
A:function(){return this.H("")}}
F.cg.prototype={
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
C.b.E(s.c,new F.jG(s,b))
C.b.E(s.d,new F.jH(s,b))},
i:function(a){return this.A()},
A:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].H(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].H(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].H(""))
return C.b.j(p,"\n")}}
F.jG.prototype={
$1:function(a){if(!J.M(a.a,this.a))this.b.$1(a)},
$S:9}
F.jH.prototype={
$1:function(a){var s=this.a
if(!J.M(a.a,s)&&!J.M(a.b,s))this.b.$1(a)},
$S:9}
F.ch.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.d(r,s)
return r[s]}else{if(b<0)return H.d(r,b)
return r[b]}},
i:function(a){return this.A()},
A:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].H(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].H(""))
return C.b.j(p,"\n")}}
F.jJ.prototype={}
F.jI.prototype={
bh:function(a,b,c){return J.M(b.f,c.f)}}
F.jK.prototype={}
F.iX.prototype={
bi:function(a){var s,r,q,p=V.dB()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)p=new V.D(p.a+q.a,p.b+q.b,p.c+q.c)}p=p.I()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)a[r].se_(p)
return null}}
F.dC.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.A()},
A:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].H(""))
return C.b.j(p,"\n")}}
O.d_.prototype={
gv:function(){var s=this.fr
return s==null?this.fr=D.N():s},
ae:function(a){var s=this.fr
return s==null?null:s.G(a)},
fi:function(){return this.ae(null)},
d9:function(a){this.a=null
this.ae(a)},
h5:function(){return this.d9(null)},
fd:function(a,b){return this.ae(new D.bb())},
ff:function(a,b){return this.ae(new D.bc())},
gbB:function(){var s=this,r=s.dx
if(r==null){r=new D.cQ(H.b([],t.i),H.b([],t.U),H.b([],t.o),H.b([],t.D),H.b([],t.e))
r.cP(r.gfa(),r.gfP(),r.gfT())
r.gv().n(0,s.gd8())
r.gdY().n(0,s.gd5())
s.dx=r}return r},
gdD:function(){var s=this.f
return s==null?this.f=O.eI(this,"emission"):s},
gdq:function(){var s=this.r
return s==null?this.r=O.eI(this,"ambient"):s},
gdB:function(){var s=this.x
return s==null?this.x=O.eI(this,"diffuse"):s},
gbJ:function(){var s=this.z
return s==null?this.z=new O.iI(new V.T(0,0,0),this,"specular",new A.aJ(!1,!1,!1)):s},
d_:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.y,a1=new H.Y(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=H.b([],t.i)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gav()
o=a1.h(0,q.gav())
a1.m(0,p,o==null?1:o)}n=H.b([],t.cn)
a1.E(0,new O.iJ(b,n))
C.b.b8(n,new O.iK())
m=new H.Y(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=H.b([],t.U)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.b([],t.fD)
m.E(0,new O.iL(b,l))
C.b.b8(l,new O.iM())
k=new H.Y(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=H.b([],t.o)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gav()
o=k.h(0,q.gav())
k.m(0,p,o==null?1:o)}j=H.b([],t.eg)
k.E(0,new O.iN(b,j))
C.b.b8(j,new O.iO())
i=new H.Y(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=H.b([],t.D)
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.q)(a0),++r){q=a0[r]
s=q.gav()
p=i.h(0,q.gav())
i.m(0,s,p==null?1:p)}h=H.b([],t.c3)
i.E(0,new O.iP(b,h))
C.b.b8(h,new O.iQ())
a0=C.c.a4(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.iG(new V.aQ(0,0,0,0))
a2=b.gdD().c
s=b.gdq().c
p=b.gdB().c
o=b.y
o=(o==null?b.y=O.eI(b,"invDiffuse"):o).c
g=b.gbJ().c
f=b.Q
f=(f==null?b.Q=new O.iE(b,"bump",new A.aJ(!1,!1,!1)):f).c
e=b.cx
e=(e==null?b.cx=O.eI(b,"reflect"):e).c
d=b.cy
d=(d==null?b.cy=new O.iH(new V.T(0,0,0),b,"refract",new A.aJ(!1,!1,!1)):d).c
c=b.db
return A.o0(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.iD(b,"alpha",new A.aJ(!1,!1,!1)):c).c,n,l,j,h)},
eO:function(a,b){},
ay:function(a,b){var s,r,q,p,o,n=this.dx
n=J.aF(n==null?H.b([],t.e):n)
s=H.X(n).c
for(;n.u();){r=s.a(n.d)
q=$.jF
r.c=q==null?$.jF=new V.D(0,0,1):q
q=$.jE
r.d=q==null?$.jE=new V.D(0,1,0):q
q=$.jD
r.e=q==null?$.jD=new V.D(-1,0,0):q
p=r.a
if(p!=null){o=p.az(0,b,r)
r.c=o.bF(r.c).I()
r.d=o.bF(r.d).I()
r.e=o.bF(r.e).I()}}},
ie:function(b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null,b0=a8.a
if(b0==null){s=a8.d_()
r=s.bw
q=b1.fr
b0=q.h(0,r)
if(b0==null){p=b1.a
o=t.S
n=t.W
b0=new A.eG(s,H.b([],t.p),P.V(o,n),P.V(o,t.O),P.V(o,n),P.V(o,t.d),P.V(o,n),P.V(o,t.m),P.V(o,n),P.V(o,t.R),p,r)
b0.ez(s,p)
if(r.length===0)H.h(P.f("May not cache a shader with no name."))
if(q.cf(0,r))H.h(P.f('Shader cache already contains a shader by the name "'+r+'".'))
q.m(0,r,b0)}b0=a8.a=b0
b2.e=null}m=b0.x
l=m.dF
s=b2.e
if(!(s instanceof Z.cx))s=b2.e=null
if(s==null||!s.d.q(0,l)){s=m.k4
if(s){r=b2.d
if(r!=null)r.au()}r=m.r1
if(r){q=b2.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gS().cd()
q.gY().cd()
q=q.e
if(q!=null)q.am(0)}}q=m.rx
if(q){p=b2.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.gY().hv()
p=p.e
if(p!=null)p.am(0)}}p=b2.d
k=p==null?a9:p.hu(new Z.jN(b1.a),l)
if(k==null)return
p=k.b1($.bt())
if(p!=null){o=b0.y
o=o==null?a9:o.c
p.e=o==null?0:o}if(s){s=k.b1($.bs())
if(s!=null){p=b0.Q
p=p==null?a9:p.c
s.e=p==null?1:p}}if(r){s=k.b1($.br())
if(s!=null){r=b0.z
r=r==null?a9:r.c
s.e=r==null?2:r}}if(m.r2){s=k.b1($.bO())
if(s!=null){r=b0.ch
r=r==null?a9:r.c
s.e=r==null?3:r}}if(q){s=k.b1($.bP())
if(s!=null){r=b0.cx
r=r==null?a9:r.c
s.e=r==null?4:r}}if(m.ry){s=k.b1($.bq())
if(s!=null){r=b0.cy
r=r==null?a9:r.c
s.e=r==null?5:r}}b2.e=k}j=H.b([],t.ga)
s=b1.a
s.useProgram(b0.e)
b0.gag(b0).hH()
if(m.fr){r=b1.dx
r=r.ga3(r)
q=b0.db
if(q!=null)q.ao(r.ab(0,!0))}if(m.fx){r=b1.cx
if(r==null){r=b1.db
q=b1.dx
q=b1.cx=r.ga3(r).J(0,q.ga3(q))
r=q}q=b0.dx
if(q!=null)q.ao(r.ab(0,!0))}r=b1.ch
if(r==null){r=b1.dx
r=b1.ch=b1.gi9().J(0,r.ga3(r))}q=b0.fr
if(q!=null)q.ao(r.ab(0,!0))
if(m.go){r=b1.db
r=r.ga3(r)
q=b0.dy
if(q!=null)q.ao(r.ab(0,!0))}if(m.x1){r=$.lU
if(r==null){r=new V.d1(1,0,0,0,1,0,0,0,1)
$.lU=r}q=b0.go
if(q!=null)q.ao(r.ab(0,!0))}if(m.x2){r=V.ax()
q=b0.id
if(q!=null)q.ao(r.ab(0,!0))}if(m.y1){r=V.ax()
q=b0.k1
if(q!=null)q.ao(r.ab(0,!0))}if(m.b0>0){r=a8.e.a
i=r.length
q=b0.k2
if(q!=null)q.a.uniform1i(q.d,i)
for(h=0;h<i;++h){if(h>=r.length)return H.d(r,h)
q=r[h]
p=b0.k3
if(h>=p.length)return H.d(p,h)
p=p[h]
g=new Float32Array(H.cn(q.ab(0,!0)))
p.a.uniformMatrix4fv(p.d,!1,g)}}if(m.a.a){r=a8.f
r=r==null?a9:r.f
if(r==null)r=new V.T(0,0,0)
q=b0.k4
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(m.k1){if(m.b.a){r=a8.r
r=r==null?a9:r.f
if(r==null)r=new V.T(0,0,0)
q=b0.rx
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(m.c.a){r=a8.x
r=r==null?a9:r.f
if(r==null)r=new V.T(0,0,0)
q=b0.x2
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(m.d.a){r=a8.y
r=r==null?a9:r.f
if(r==null)r=new V.T(0,0,0)
q=b0.b0
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}r=m.e.a
if(!r)q=!1
else q=!0
if(q){q=a8.z
q=q==null?a9:q.ch
if(q==null)q=100
p=b0.dH
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a8.z
r=r==null?a9:r.f
if(r==null)r=new V.T(1,1,1)
q=b0.dG
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}r=m.z
if(r.length>0){f=new H.Y(t.y)
q=a8.dx
q=q==null?a9:q.e
if(q==null)q=H.b([],t.i)
p=q.length
o=t.c
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.gav()
b=f.h(0,c)
if(b==null)b=0
f.m(0,c,b+1)
n=b0.cl.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=d.gis()
a0=$.aY
n=n.bn(a0==null?$.aY=new V.W(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gix()
a0=$.aY
n=n.bn(a0==null?$.aY=new V.W(0,0,0):a0)
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gaG(d)
a0=a.d
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
if(d.gdE()){n=d.gds()
a0=a.e
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdt()
a0=a.f
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdu()
a0=a.r
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=f.h(0,p)
if(i==null)i=0
p=b0.ck.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.Q
if(r.length>0){q=b1.db
a1=q.ga3(q)
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
n=b0.cn.h(0,0)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=a1.bF(d.c).I()
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.b
a0=a.f
a0.a.uniform3f(a0.d,n.a,n.b,n.c)}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a2.h(0,p)
if(i==null)i=0
p=b0.cm.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.ch
if(r.length>0){q=b1.db
a1=q.ga3(q)
a3=new H.Y(t.y)
q=a8.dx
q=q==null?a9:q.r
if(q==null)q=H.b([],t.o)
p=q.length
o=t.B
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.gav()
b=a3.h(0,c)
if(b==null)b=0
a3.m(0,c,b+1)
n=b0.cp.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
a4=a1.J(0,d.ga3(d))
n=d.ga3(d)
a0=$.aY
n=n.bn(a0==null?$.aY=new V.W(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=$.aY
n=a4.bn(n==null?$.aY=new V.W(0,0,0):n)
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gaG(d)
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
d.gaN()
n=a4.dW(0)
a0=a.d
if(a0!=null){g=new Float32Array(H.cn(new V.d1(n.a,n.b,n.c,n.e,n.f,n.r,n.y,n.z,n.Q).ab(0,!0)))
a0.a.uniformMatrix3fv(a0.d,!1,g)}d.gaN()
n=d.gaN()
if(!C.b.C(j,n)){n.sw(0,j.length)
j.push(n)}n=d.gaN()
a0=n.gaJ(n)
if(a0){a0=a.f
if(a0!=null){a5=n.gaJ(n)
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.gw(n))}}d.gb7()
n=d.gep()
a0=a.x
if(a0!=null)a0.a.uniform4f(a0.d,n.a,n.b,n.c,n.d)
n=d.gb7()
if(!C.b.C(j,n)){n.sw(0,j.length)
j.push(n)}n=d.gb7()
a0=n.gaJ(n)
if(a0){a0=a.r
if(a0!=null){a5=n.gaJ(n)
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.gw(n))}}if(d.gdE()){n=d.gds()
a0=a.y
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdt()
a0=a.z
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdu()
a0=a.Q
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a3.h(0,p)
if(i==null)i=0
p=b0.co.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.cx
if(r.length>0){q=b1.db
a1=q.ga3(q)
a7=new H.Y(t.y)
q=a8.dx
q=q==null?a9:q.x
if(q==null)q=H.b([],t.D)
p=q.length
o=t.J
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.gav()
b=a7.h(0,c)
if(b==null)b=0
a7.m(0,c,b+1)
n=b0.cr.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=d.gi8(d)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.giv(d).I()
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=a1.bn(d.gi8(d))
a0=a.d
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gaG(d)
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
d.gaN()
n=d.gcM()
a0=a.f
if(a0!=null)a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gcJ(d)
a0=a.r
if(a0!=null)a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.giL()
a0=a.x
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.giM()
a0=a.y
if(a0!=null)a0.a.uniform1f(a0.d,n)
d.gaN()
n=d.gaN()
if(!C.b.C(j,n)){n.sw(0,j.length)
j.push(n)}n=d.gaN()
a0=n.gaJ(n)
if(a0){a0=a.dx
if(a0!=null){a5=n.gaJ(n)
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.gw(n))}}d.gb7()
n=d.gep()
a0=a.z
if(a0!=null)a0.a.uniform4f(a0.d,n.a,n.b,n.c,n.d)
n=d.gb7()
if(!C.b.C(j,n)){n.sw(0,j.length)
j.push(n)}n=d.gb7()
a0=n.gaJ(n)
if(a0){a0=a.dy
if(a0!=null){a5=n.gaJ(n)
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.gw(n))}}if(d.giw()){n=d.giu()
a0=a.Q
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.git()
a0=a.ch
if(a0!=null)a0.a.uniform1f(a0.d,n)}if(d.gdE()){n=d.gds()
a0=a.cx
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdt()
a0=a.cy
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdu()
a0=a.db
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a7.h(0,p)
if(i==null)i=0
p=b0.cq.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}}if(m.dy){r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.ga3(r).dW(0)}q=b0.fy
if(q!=null)q.ao(r.ab(0,!0))}if(m.db){a8.eO(j,a9)
b0.h8(b0.dI,a9)
if(m.r.a){r=a8.cx
r=r==null?a9:r.f
if(r==null)r=new V.T(1,1,1)
q=b0.dJ
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}r=m.x.a
if(!r)q=!1
else q=!0
if(q){q=a8.cy
q=q==null?a9:q.ch
if(q==null)q=0
p=b0.dK
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a8.cy
r=r==null?a9:r.f
if(r==null)r=new V.T(1,1,1)
q=b0.dL
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}}r=m.y.a
q=!r
if(q)p=!1
else p=!0
if(p){if(r){r=a8.db
r=r==null?a9:r.f
if(r==null)r=1
p=b0.dM
if(p!=null)p.a.uniform1f(p.d,r)}s.enable(3042)
s.blendFunc(770,771)}for(h=0;h<j.length;++h)j[h].bt(b1)
r=t.ed.a(b2.e)
r.bt(b1)
r.b3(b1)
r.ei(b1)
if(q)r=!1
else r=!0
if(r)s.disable(3042)
for(h=0;h<j.length;++h)j[h].ei(b1)
s.useProgram(a9)
b0.gag(b0).hG()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.d_().bw}}
O.iJ.prototype={
$2:function(a,b){return this.b.push(new A.b6(a,C.c.a4(b+3,4)*4))},
$S:6}
O.iK.prototype={
$2:function(a,b){return C.c.ah(a.a,b.a)},
$S:51}
O.iL.prototype={
$2:function(a,b){return this.b.push(new A.b8(a,C.c.a4(b+3,4)*4))},
$S:6}
O.iM.prototype={
$2:function(a,b){return C.c.ah(a.a,b.a)},
$S:52}
O.iN.prototype={
$2:function(a,b){return this.b.push(new A.bh(a,C.c.a4(b+3,4)*4))},
$S:6}
O.iO.prototype={
$2:function(a,b){return C.c.ah(a.a,b.a)},
$S:53}
O.iP.prototype={
$2:function(a,b){return this.b.push(new A.bj(a,C.c.a4(b+3,4)*4))},
$S:6}
O.iQ.prototype={
$2:function(a,b){return C.c.ah(a.a,b.a)},
$S:54}
O.iD.prototype={
aE:function(){var s,r=this
r.cR()
s=r.f
$.F().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.ae(new D.G(r.b,s,1))}}}
O.eH.prototype={
aE:function(){},
dd:function(a){var s,r,q=this
if(!q.c.q(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.aE()
s=q.a
s.a=null
s.ae(null)}}}
O.iE.prototype={}
O.d0.prototype={
dc:function(a){var s,r=this
if(!r.f.q(0,a)){s=r.f
r.f=a
r.a.ae(new D.G(r.b+".color",s,a))}},
aE:function(){this.cR()
this.dc(new V.T(1,1,1))},
saG:function(a,b){this.dd(new A.aJ(!0,!1,!1))
this.dc(b)}}
O.iG.prototype={}
O.iH.prototype={
aE:function(){var s,r=this
r.cS()
s=r.ch
$.F().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.ae(new D.G(r.b+".refraction",s,1))}}}
O.iI.prototype={
de:function(a){var s=this,r=s.ch
$.F().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.ae(new D.G(s.b+".shininess",r,a))}},
aE:function(){this.cS()
this.de(100)}}
O.dk.prototype={}
X.io.prototype={
gv:function(){var s=this.x
return s==null?this.x=D.N():s}}
X.eV.prototype={
gv:function(){var s=this.f
return s==null?this.f=D.N():s},
aU:function(a){var s=this.f
return s==null?null:s.G(a)},
eK:function(){return this.aU(null)},
sbj:function(a){var s,r,q=this
if(!J.M(q.b,a)){s=q.b
if(s!=null)s.gv().O(0,q.gcW())
r=q.b
q.b=a
if(a!=null)a.gv().n(0,q.gcW())
q.aU(new D.G("mover",r,q.b))}}}
X.jf.prototype={}
V.aI.prototype={
bq:function(a){this.b=new P.iq(C.S)
this.c=null
this.d=H.b([],t.F)},
N:function(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.d
if(j.length===0)j.push(H.b([],t.C))
s=a.split("\n")
for(j=s.length,r=t.C,q=!0,p=0;p<j;++p){o=s[p]
if(q)q=!1
else k.d.push(H.b([],r))
n=document.createElement("div")
n.className="codePart"
m=k.b.eW(o,0,o.length)
l=m==null?o:m
l=H.lA(l," ","&nbsp;")
C.Q.eo(n,l)
l=n.style
l.color=b
C.b.gaw(k.d).push(n)}},
e6:function(a,b){var s,r,q,p=this
p.d=H.b([],t.F)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bv()
if(r!=null)for(q=new H.r(s),q=new P.bK(r.cL(new H.bf(q,q.gl(q))).a());q.u();)p.bD(q.gB(q))}}
V.kQ.prototype={
$1:function(a){var s=C.d.cK(this.a.ghQ(),2)
if(s!=="0.00")P.lz(s+" fps")},
$S:55}
V.em.prototype={
bD:function(a){var s=this
switch(a.a){case"Class":s.N(a.b,"#551")
break
case"Comment":s.N(a.b,"#777")
break
case"Id":s.N(a.b,"#111")
break
case"Num":s.N(a.b,"#191")
break
case"Reserved":s.N(a.b,"#119")
break
case"String":s.N(a.b,"#171")
break
case"Symbol":s.N(a.b,"#616")
break
case"Type":s.N(a.b,"#B11")
break
case"Whitespace":s.N(a.b,"#111")
break}},
bv:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()\\-+*%!&|=.,?:;",h="OpenDoubleStr",g="CloseDoubleStr",f="EscDoubleStr",e="OpenSingleStr",d="CloseSingleStr",c="EscSingleStr",b="Slash",a="Comment",a0="EndComment",a1="MLComment",a2="MLCStar",a3="Whitespace",a4=L.jk()
a4.d=a4.k(0,o)
s=a4.k(0,o).j(0,n)
r=t.t
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.R("a","z"))
s.push(K.R("A","Z"))
s=a4.k(0,n).j(0,n)
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.R("0","9"))
s.push(K.R("a","z"))
s.push(K.R("A","Z"))
a4.k(0,o).j(0,m).a.push(K.R("0","9"))
a4.k(0,m).j(0,m).a.push(K.R("0","9"))
s=a4.k(0,m).j(0,l)
q=new K.u(H.b([],r))
q.p(new H.r("."))
s.a.push(q)
a4.k(0,l).j(0,k).a.push(K.R("0","9"))
a4.k(0,k).j(0,k).a.push(K.R("0","9"))
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
a4.k(0,h).j(0,h).a.push(new K.aO())
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
a4.k(0,e).j(0,e).a.push(new K.aO())
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
s.a.push(new K.ae(p))
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
s.a.push(new K.ae(q))
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
r.d=r.a.P("Num")
r=a4.k(0,k)
r.d=r.a.P("Num")
r=a4.k(0,j)
r.d=r.a.P("Symbol")
r=a4.k(0,g)
r.d=r.a.P("String")
r=a4.k(0,d)
r.d=r.a.P("String")
r=a4.k(0,a0)
r.d=r.a.P(a)
r=a4.k(0,a3)
r.d=r.a.P(a3)
r=a4.k(0,n)
r=r.d=r.a.P(n)
s=t.s
r.aM(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aM(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aM(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a4}}
V.et.prototype={
bD:function(a){var s=this
switch(a.a){case"Builtin":s.N(a.b,"#411")
break
case"Comment":s.N(a.b,"#777")
break
case"Id":s.N(a.b,"#111")
break
case"Num":s.N(a.b,"#191")
break
case"Preprocess":s.N(a.b,"#737")
break
case"Reserved":s.N(a.b,"#119")
break
case"Symbol":s.N(a.b,"#611")
break
case"Type":s.N(a.b,"#171")
break
case"Whitespace":s.N(a.b,"#111")
break}},
bv:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()[]\\-+*%!&|=.,?:;",h="Slash",g="Comment",f="EndComment",e="Preprocess",d="EndPreprocess",c="Whitespace",b=L.jk()
b.d=b.k(0,o)
s=b.k(0,o).j(0,n)
r=t.t
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.R("a","z"))
s.push(K.R("A","Z"))
s=b.k(0,n).j(0,n)
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.R("0","9"))
s.push(K.R("a","z"))
s.push(K.R("A","Z"))
b.k(0,o).j(0,m).a.push(K.R("0","9"))
b.k(0,m).j(0,m).a.push(K.R("0","9"))
s=b.k(0,m).j(0,l)
q=new K.u(H.b([],r))
q.p(new H.r("."))
s.a.push(q)
b.k(0,l).j(0,k).a.push(K.R("0","9"))
b.k(0,k).j(0,k).a.push(K.R("0","9"))
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
b.k(0,h).j(0,j).a.push(new K.aO())
q=b.k(0,g).j(0,f)
s=new K.u(H.b([],r))
s.p(new H.r("\n"))
q.a.push(s)
s=b.k(0,g).j(0,g)
q=t.z
p=H.b([],q)
s.a.push(new K.ae(p))
s=new K.u(H.b([],r))
s.p(new H.r("\n"))
p.push(s)
s=b.k(0,o).j(0,e)
p=new K.u(H.b([],r))
p.p(new H.r("#"))
s.a.push(p)
p=b.k(0,e).j(0,e)
q=H.b([],q)
p.a.push(new K.ae(q))
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
r.d=r.a.P("Num")
r=b.k(0,k)
r.d=r.a.P("Num")
r=b.k(0,j)
r.d=r.a.P("Symbol")
r=b.k(0,f)
r.d=r.a.P(g)
r=b.k(0,d)
r.d=r.a.P(e)
r=b.k(0,c)
r.d=r.a.P(c)
r=b.k(0,n)
r=r.d=r.a.P(n)
p=t.s
r.aM(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],p))
r.aM(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],p))
r.aM(0,"Builtin",H.b(["gl_FragColor","gl_Position"],p))
return b}}
V.eu.prototype={
bD:function(a){var s=this,r="#111"
switch(a.a){case"Attr":s.N(a.b,"#911")
s.N("=",r)
break
case"Id":s.N(a.b,r)
break
case"Other":s.N(a.b,r)
break
case"Reserved":s.N(a.b,"#119")
break
case"String":s.N(a.b,"#171")
break
case"Symbol":s.N(a.b,"#616")
break}},
bv:function(){var s,r,q,p="Start",o="Id",n="Attr",m="Sym",l="OpenStr",k="CloseStr",j="Other",i=L.jk()
i.d=i.k(0,p)
s=i.k(0,p).j(0,o)
r=t.t
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.R("a","z"))
s.push(K.R("A","Z"))
s=i.k(0,o).j(0,o)
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.R("0","9"))
s.push(K.R("a","z"))
s.push(K.R("A","Z"))
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
i.k(0,l).j(0,l).a.push(new K.aO())
i.k(0,p).j(0,j).a.push(new K.aO())
s=i.k(0,j).j(0,j)
q=H.b([],t.z)
s.a.push(new K.ae(q))
r=new K.u(H.b([],r))
r.p(new H.r('</\\-!>=_"'))
q.push(r)
q.push(K.R("a","z"))
q.push(K.R("A","Z"))
q=i.k(0,m)
q.d=q.a.P("Symbol")
q=i.k(0,k)
q.d=q.a.P("String")
q=i.k(0,o)
r=q.a.P(o)
q.d=r
r.aM(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],t.s))
r=i.k(0,n)
r.d=r.a.P(n)
r=i.k(0,j)
r.d=r.a.P(j)
return i}}
V.eX.prototype={
e6:function(a,b){this.d=H.b([],t.F)
this.N(C.b.j(b,"\n"),"#111")},
bD:function(a){},
bv:function(){return null}}
V.j_.prototype={
dl:function(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=l.a,j=P.mf().gcF().h(0,k)
if(j==null)if(d){c.$0()
l.dj(b)
s=!0}else s=!1
else if(j===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
p=l.c
o=J.b3(p)
o.gbu(p).n(0,q)
n=W.nP("radio")
n.checked=s
n.name=k
W.a7(n,"change",new V.j0(l,n,c,b),!1)
q.children.toString
q.appendChild(n).toString
m=r.createElement("span")
m.textContent=b
q.appendChild(m).toString
p=o.gbu(p)
r=r.createElement("br")
r.toString
p.n(0,r)},
be:function(a,b,c){return this.dl(a,b,c,!1)},
dj:function(a){var s,r,q=P.mf(),p=t.N,o=P.nY(q.gcF(),p,p)
o.m(0,this.a,a)
s=q.ec(0,o)
p=window.history
p.toString
r=s.gc9()
p.replaceState(new P.k2([],[]).bG(""),"",r)}}
V.j0.prototype={
$1:function(a){var s=this,r=s.b.checked
if(r===!0){s.c.$0()
s.a.dj(s.d)}},
$S:3}
V.j8.prototype={
dn:function(a){var s,r,q,p,o,n,m=this.hb(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.r(C.b.hT(a)),s=new P.bK(m.cL(new H.bf(s,s.gl(s))).a());s.u();){r=s.gB(s)
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
if(H.n3(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.ka(C.w,r,C.e,!1)
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
em:function(a){var s,r,q,p=t.F,o=new V.em("dart",H.b([],p))
o.bq("dart")
s=new V.et("glsl",H.b([],p))
s.bq("glsl")
r=new V.eu("html",H.b([],p))
r.bq("html")
q=C.b.hM(H.b([o,s,r],t.g6),new V.jb(a))
if(q!=null)return q
p=new V.eX("plain",H.b([],p))
p.bq("plain")
return p},
dm:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.b([],t.t)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(C.a.a1(q,"+")){b2[r]=C.a.aa(q,1)
a8.push(1)
s=!0}else if(C.a.a1(q,"-")){b2[r]=C.a.aa(q,1)
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
l=P.ka(C.w,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.lG()
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
for(a4=C.b.gR(q);a4.u();)b.appendChild(a4.gB(a4)).toString
d.appendChild(c).toString
d.appendChild(b).toString
m.appendChild(d).toString}},
hm:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
hb:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other",f=this.b
if(f!=null)return f
f=L.jk()
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
s.a.push(new K.ae(p))
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
s.a.push(new K.ae(p))
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
s.a.push(new K.ae(p))
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
p.a.push(new K.ae(s))
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
p.a.push(new K.ae(s))
p=new K.u(H.b([],r))
p.p(new H.r("|]"))
s.push(p)
f.k(0,o).j(0,g).a.push(new K.aO())
p=f.k(0,g).j(0,g)
q=H.b([],q)
p.a.push(new K.ae(q))
r=new K.u(H.b([],r))
r.p(new H.r("*_`["))
q.push(r)
r=f.k(0,"BoldEnd")
r.d=r.a.P(n)
r=f.k(0,l)
r.d=r.a.P(m)
r=f.k(0,"CodeEnd")
r.d=r.a.P(k)
r=f.k(0,h)
r.d=r.a.P("Link")
r=f.k(0,g)
r.d=r.a.P(g)
return this.b=f}}
V.ja.prototype={
$1:function(a){P.mb(C.m,new V.j9(this.a))},
$S:3}
V.j9.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.aq(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.x(-0.01*s)+"px"
q.top=r},
$S:2}
V.jb.prototype={
$1:function(a){var s=a==null?null:a.a
return s===this.a},
$S:56}
U.kI.prototype={
$0:function(){this.a.sap(0,F.lu(1,null,null,1))},
$S:2}
U.kJ.prototype={
$0:function(){this.a.sap(0,F.mS(!0,40,1))},
$S:2}
U.kK.prototype={
$0:function(){this.a.sap(0,F.mS(!1,40,0))},
$S:2}
U.kL.prototype={
$0:function(){this.a.sap(0,F.qo(6,6))},
$S:2}
U.kM.prototype={
$0:function(){this.a.sap(0,F.n4())},
$S:2}
U.kN.prototype={
$0:function(){this.a.sap(0,F.qi())},
$S:2}
U.kO.prototype={
$1:function(a){var s,r=this.a,q=this.b,p=q.a
p=p==null?null:p.c
s=t.s
r.dm("Vertex Shader","glsl",0,H.b((p==null?"":p).split("\n"),s))
q=q.a
q=q==null?null:q.d
r.dm("Fragment Shader","glsl",0,H.b((q==null?"":q).split("\n"),s))},
$S:1};(function aliases(){var s=J.a.prototype
s.es=s.i
s=J.be.prototype
s.ev=s.i
s=P.j.prototype
s.eu=s.bH
s=W.E.prototype
s.bK=s.ai
s=W.dP.prototype
s.ew=s.at
s=K.cK.prototype
s.er=s.aK
s.bL=s.i
s=O.eH.prototype
s.cR=s.aE
s=O.d0.prototype
s.cS=s.aE})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"pm","nU",57)
r(P,"q0","oy",14)
r(P,"q1","oz",14)
r(P,"q2","oA",14)
q(P,"mQ","pW",2)
r(W,"rA","ib",59)
p(W,"qb",4,null,["$4"],["oB"],19,0)
p(W,"qc",4,null,["$4"],["oC"],19,0)
var j
o(j=E.bz.prototype,"ge4",0,0,null,["$1","$0"],["e5","i2"],0,0)
o(j,"ge2",0,0,null,["$1","$0"],["e3","i1"],0,0)
o(j,"ge0",0,0,null,["$1","$0"],["e1","hZ"],0,0)
n(j,"ghX","hY",7)
n(j,"gi_","i0",7)
o(j=E.fl.prototype,"gcT",0,0,null,["$1","$0"],["cV","cU"],0,0)
m(j,"gih","ed",2)
l(j=X.fC.prototype,"gfu","fv",3)
l(j,"gfg","fh",3)
l(j,"gfn","fo",4)
l(j,"gfA","fB",26)
l(j,"gfw","fz",26)
l(j,"gfE","fF",4)
l(j,"gfI","fJ",4)
l(j,"gfs","ft",4)
l(j,"gfG","fH",4)
l(j,"gfp","fq",4)
l(j,"gfK","fL",36)
l(j,"gfM","fN",3)
l(j,"gfZ","h_",12)
l(j,"gfV","fW",12)
l(j,"gfX","fY",12)
o(D.bU.prototype,"geE",0,0,null,["$1","$0"],["aA","eF"],0,0)
o(j=D.cQ.prototype,"gd6",0,0,null,["$1","$0"],["d7","fC"],0,0)
l(j,"gfP","fQ",38)
n(j,"gfa","fb",21)
n(j,"gfT","fU",21)
k(V.a5.prototype,"gl","cv",30)
k(V.D.prototype,"gl","cv",30)
o(j=U.bX.prototype,"gaT",0,0,null,["$1","$0"],["L","a9"],0,0)
n(j,"gf8","f9",18)
n(j,"gfR","fS",18)
o(j=U.dy.prototype,"gaT",0,0,null,["$1","$0"],["L","a9"],0,0)
l(j,"gbV","bW",11)
l(j,"gbX","bY",11)
l(j,"gbZ","c_",11)
o(j=U.dz.prototype,"gaT",0,0,null,["$1","$0"],["L","a9"],0,0)
l(j,"gbV","bW",1)
l(j,"gbX","bY",1)
l(j,"gbZ","c_",1)
l(j,"gf1","f2",1)
l(j,"gf3","f4",1)
l(j,"ghi","hj",1)
l(j,"ghg","hh",1)
l(j,"ghe","hf",1)
l(U.dA.prototype,"gf6","f7",1)
o(j=M.ep.prototype,"gas",0,0,null,["$1","$0"],["aB","eG"],0,0)
n(j,"gfj","fk",7)
n(j,"gfl","fm",7)
o(j=O.d_.prototype,"gd5",0,0,null,["$1","$0"],["ae","fi"],0,0)
o(j,"gd8",0,0,null,["$1","$0"],["d9","h5"],0,0)
n(j,"gfc","fd",20)
n(j,"gfe","ff",20)
o(X.eV.prototype,"gcW",0,0,null,["$1","$0"],["aU","eK"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.Q,null)
q(P.Q,[H.l3,J.a,J.am,P.K,P.dI,P.j,H.bf,P.ew,H.cH,H.fz,H.cA,H.jn,H.iY,H.hl,H.bx,P.L,H.ix,H.eE,H.ez,H.aB,H.fY,P.dV,P.cl,P.bK,P.fH,P.c8,P.fd,P.ke,P.e0,P.jV,P.dH,P.k,P.hA,P.cY,P.de,P.ei,P.ir,P.kc,P.kb,P.Z,P.by,P.eU,P.di,P.fV,P.im,P.ah,P.a0,P.bL,P.js,P.hf,W.i2,W.l_,W.le,W.ck,W.O,W.d7,W.dP,W.hq,W.cI,W.jZ,W.hB,P.k1,P.hd,K.aO,K.cK,K.f0,K.u,L.fa,L.fm,L.fn,L.jj,O.an,O.d2,E.hX,E.bz,E.bS,E.c4,E.fT,E.j1,E.fl,Z.fF,Z.jN,Z.cx,Z.bY,Z.bJ,D.hZ,D.bV,D.U,X.cy,X.eB,X.iv,X.iB,X.a9,X.iU,X.jl,X.fC,D.bU,V.T,V.aQ,V.ie,V.d1,V.bg,V.a2,V.W,V.bE,V.f2,V.a5,V.D,U.dy,U.dz,U.dA,M.ep,A.ef,A.hS,A.aJ,A.b6,A.b8,A.bh,A.bj,A.iF,A.dr,A.ds,A.du,A.dx,A.a3,A.jq,F.au,F.ij,F.eD,F.iw,F.eZ,F.j6,F.dg,F.dh,F.bF,F.cf,F.y,F.cg,F.ch,F.jJ,F.jK,F.dC,O.dk,O.eH,O.iG,X.jf,X.eV,V.aI,V.j_,V.j8])
q(J.a,[J.ex,J.cO,J.be,J.w,J.c_,J.bd,H.d3,H.a1,W.e,W.hQ,W.bu,W.aR,W.J,W.fM,W.at,W.i5,W.i6,W.fO,W.cE,W.fQ,W.i7,W.m,W.fW,W.av,W.ip,W.h_,W.cL,W.iA,W.iR,W.h3,W.h4,W.ay,W.h5,W.h7,W.az,W.hb,W.he,W.aC,W.hg,W.aD,W.hm,W.aj,W.hs,W.jh,W.ar,W.hu,W.jm,W.jx,W.hC,W.hE,W.hG,W.hI,W.hK,P.aT,P.h1,P.aX,P.h9,P.iZ,P.hn,P.aZ,P.hw,P.hT,P.fJ,P.dc,P.hj])
q(J.be,[J.eW,J.bH,J.aS])
r(J.it,J.w)
q(J.c_,[J.cN,J.ey])
q(P.K,[H.cP,P.fq,H.eA,H.fy,H.f4,H.fU,P.ee,P.eR,P.aG,P.fA,P.fx,P.c7,P.ej,P.el])
r(P.cT,P.dI)
q(P.cT,[H.cd,W.fK,W.a6,P.er])
r(H.r,H.cd)
q(P.j,[H.n,H.aU,H.b1,P.cM])
q(H.n,[H.cU,H.cR])
r(H.cF,H.aU)
q(P.ew,[H.eF,H.fG])
r(H.cZ,H.cU)
r(H.cB,H.cA)
r(H.d8,P.fq)
q(H.bx,[H.fi,H.iu,H.kC,H.kD,H.kE,P.jP,P.jO,P.jQ,P.jR,P.k7,P.k6,P.ks,P.jX,P.jY,P.iy,P.iC,P.jB,P.jA,P.i8,P.i9,P.jw,P.jt,P.ju,P.jv,P.k9,P.k8,P.kl,P.km,P.kn,W.ia,W.iS,W.iT,W.j5,W.jd,W.jS,W.iW,W.iV,W.k_,W.k0,W.k5,W.kd,P.k3,P.k4,P.kj,P.kt,P.ik,P.il,P.hU,E.j2,E.j3,E.j4,E.jg,D.ih,D.ii,F.kf,F.ku,F.kw,F.kx,F.ky,F.kS,F.kR,F.kT,F.kH,F.kv,F.j7,F.jM,F.jL,F.jG,F.jH,O.iJ,O.iK,O.iL,O.iM,O.iN,O.iO,O.iP,O.iQ,V.kQ,V.j0,V.ja,V.j9,V.jb,U.kI,U.kJ,U.kK,U.kL,U.kM,U.kN,U.kO])
q(H.fi,[H.fb,H.bR])
r(P.cX,P.L)
q(P.cX,[H.Y,W.fI])
r(H.c3,H.a1)
q(H.c3,[H.dK,H.dM])
r(H.dL,H.dK)
r(H.bC,H.dL)
r(H.dN,H.dM)
r(H.d4,H.dN)
q(H.d4,[H.eM,H.eN,H.eO,H.eP,H.eQ,H.d5,H.bD])
r(H.dW,H.fU)
r(P.dS,P.cM)
r(P.jW,P.ke)
r(P.dO,P.e0)
r(P.dG,P.dO)
r(P.dZ,P.cY)
r(P.ce,P.dZ)
q(P.ei,[P.hV,P.ic])
r(P.ek,P.fd)
q(P.ek,[P.hW,P.iq,P.jC,P.jz])
r(P.jy,P.ic)
q(P.aG,[P.db,P.ev])
r(P.fN,P.bL)
q(W.e,[W.t,W.eq,W.c0,W.ap,W.dQ,W.aq,W.af,W.dT,W.fE,W.ci,P.eh,P.b7])
q(W.t,[W.E,W.aH,W.cj])
q(W.E,[W.v,P.o])
q(W.v,[W.ec,W.ed,W.bQ,W.bv,W.bw,W.b9,W.es,W.bZ,W.f5,W.bk,W.dj,W.fg,W.fh,W.c9])
r(W.i1,W.aR)
r(W.cC,W.fM)
q(W.at,[W.i3,W.i4])
r(W.fP,W.fO)
r(W.cD,W.fP)
r(W.fR,W.fQ)
r(W.eo,W.fR)
r(W.ag,W.bu)
r(W.fX,W.fW)
r(W.bW,W.fX)
r(W.h0,W.h_)
r(W.bA,W.h0)
r(W.b0,W.m)
q(W.b0,[W.bB,W.ao,W.bG])
r(W.eJ,W.h3)
r(W.eK,W.h4)
r(W.h6,W.h5)
r(W.eL,W.h6)
r(W.h8,W.h7)
r(W.d6,W.h8)
r(W.hc,W.hb)
r(W.eY,W.hc)
r(W.f3,W.he)
r(W.dR,W.dQ)
r(W.f7,W.dR)
r(W.hh,W.hg)
r(W.f8,W.hh)
r(W.fc,W.hm)
r(W.ht,W.hs)
r(W.fj,W.ht)
r(W.dU,W.dT)
r(W.fk,W.dU)
r(W.hv,W.hu)
r(W.fo,W.hv)
r(W.bl,W.ao)
r(W.hD,W.hC)
r(W.fL,W.hD)
r(W.dD,W.cE)
r(W.hF,W.hE)
r(W.fZ,W.hF)
r(W.hH,W.hG)
r(W.dJ,W.hH)
r(W.hJ,W.hI)
r(W.hi,W.hJ)
r(W.hL,W.hK)
r(W.hp,W.hL)
r(W.fS,W.fI)
r(W.dE,P.c8)
r(W.hr,W.dP)
r(P.k2,P.k1)
r(P.ab,P.hd)
r(P.h2,P.h1)
r(P.eC,P.h2)
r(P.ha,P.h9)
r(P.eS,P.ha)
r(P.c6,P.o)
r(P.ho,P.hn)
r(P.fe,P.ho)
r(P.hx,P.hw)
r(P.fp,P.hx)
r(P.eg,P.fJ)
r(P.eT,P.b7)
r(P.hk,P.hj)
r(P.f9,P.hk)
q(K.cK,[K.ae,L.dm])
q(E.hX,[Z.bT,A.df])
q(D.U,[D.bb,D.bc,D.G,X.f_])
q(X.f_,[X.cW,X.c1,X.c2,X.dl])
q(O.an,[D.cQ,U.bX])
q(D.hZ,[U.i_,U.a_])
q(U.a_,[U.cz,U.dd])
r(A.eG,A.df)
q(A.a3,[A.cb,A.ft,A.fu,A.fv,A.fr,A.dn,A.fs,A.dp,A.dq,A.fw,A.dt,A.cc,A.dv,A.dw])
r(F.jc,F.ij)
r(F.jp,F.iw)
r(F.jI,F.jJ)
r(F.iX,F.jK)
r(O.d_,O.dk)
q(O.eH,[O.iD,O.iE,O.d0])
q(O.d0,[O.iH,O.iI])
r(X.io,X.jf)
q(V.aI,[V.em,V.et,V.eu,V.eX])
s(H.cd,H.fz)
s(H.dK,P.k)
s(H.dL,H.cH)
s(H.dM,P.k)
s(H.dN,H.cH)
s(P.dI,P.k)
s(P.dZ,P.hA)
s(P.e0,P.de)
s(W.fM,W.i2)
s(W.fO,P.k)
s(W.fP,W.O)
s(W.fQ,P.k)
s(W.fR,W.O)
s(W.fW,P.k)
s(W.fX,W.O)
s(W.h_,P.k)
s(W.h0,W.O)
s(W.h3,P.L)
s(W.h4,P.L)
s(W.h5,P.k)
s(W.h6,W.O)
s(W.h7,P.k)
s(W.h8,W.O)
s(W.hb,P.k)
s(W.hc,W.O)
s(W.he,P.L)
s(W.dQ,P.k)
s(W.dR,W.O)
s(W.hg,P.k)
s(W.hh,W.O)
s(W.hm,P.L)
s(W.hs,P.k)
s(W.ht,W.O)
s(W.dT,P.k)
s(W.dU,W.O)
s(W.hu,P.k)
s(W.hv,W.O)
s(W.hC,P.k)
s(W.hD,W.O)
s(W.hE,P.k)
s(W.hF,W.O)
s(W.hG,P.k)
s(W.hH,W.O)
s(W.hI,P.k)
s(W.hJ,W.O)
s(W.hK,P.k)
s(W.hL,W.O)
s(P.h1,P.k)
s(P.h2,W.O)
s(P.h9,P.k)
s(P.ha,W.O)
s(P.hn,P.k)
s(P.ho,W.O)
s(P.hw,P.k)
s(P.hx,W.O)
s(P.fJ,P.L)
s(P.hj,P.k)
s(P.hk,W.O)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",H:"double",a4:"num",l:"String",ad:"bool",ah:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([U?])","~(U)","~()","~(m)","~(ao)","~(l,@)","~(i,i)","~(i,j<bz>)","~(cf,H,H)","~(au)","~(@,@)","~(U?)","~(bG)","ah()","~(~())","H(H)","@()","H(H,H)","~(i,j<a_?>)","ad(E,l,l,ck)","~(i,j<bg>)","~(i,j<aw>)","~(ca,l,i)","ad(t)","ad(aL)","ad(l)","~(bB)","W(H)","~(~(U))","l(i)","H()","~(@)","~(a4)","ah(@,@)","~(t,t?)","l(l)","~(bl)","@(@)","ad(j<aw>)","ca(@,@)","~(l,l?)","i(i,i)","~(l[@])","~(l,i)","I<l,l>(I<l,l>,l)","~(Q?,Q?)","ah(~())","bT(i)","ah(@)","@(l)","~(l,l)","i(b6,b6)","i(b8,b8)","i(bh,bh)","i(bj,bj)","~(ji)","ad(aI?)","i(@,@)","@(@,l)","l(e)","E(t)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.oU(v.typeUniverse,JSON.parse('{"eW":"be","bH":"be","aS":"be","qu":"m","qG":"m","qw":"b7","qv":"e","qN":"e","qQ":"e","qt":"o","qH":"o","qx":"v","qK":"v","qI":"t","qF":"t","rg":"af","qB":"b0","qy":"aH","qR":"aH","qP":"ao","qJ":"bA","qC":"J","qD":"aj","qM":"bC","qL":"a1","ex":{"ad":[]},"be":{"lS":[]},"w":{"p":["1"],"n":["1"],"j":["1"],"z":["1"]},"it":{"w":["1"],"p":["1"],"n":["1"],"j":["1"],"z":["1"]},"c_":{"H":[],"a4":[]},"cN":{"H":[],"i":[],"a4":[]},"ey":{"H":[],"a4":[]},"bd":{"l":[],"z":["@"]},"cP":{"K":[]},"r":{"k":["i"],"p":["i"],"n":["i"],"j":["i"],"k.E":"i"},"n":{"j":["1"]},"cU":{"n":["1"],"j":["1"]},"aU":{"j":["2"],"j.E":"2"},"cF":{"aU":["1","2"],"n":["2"],"j":["2"],"j.E":"2"},"cZ":{"cU":["2"],"n":["2"],"j":["2"],"j.E":"2"},"b1":{"j":["1"],"j.E":"1"},"cd":{"k":["1"],"p":["1"],"n":["1"],"j":["1"]},"cA":{"I":["1","2"]},"cB":{"I":["1","2"]},"d8":{"K":[]},"eA":{"K":[]},"fy":{"K":[]},"bx":{"cJ":[]},"fi":{"cJ":[]},"fb":{"cJ":[]},"bR":{"cJ":[]},"f4":{"K":[]},"Y":{"L":["1","2"],"I":["1","2"],"L.V":"2"},"cR":{"n":["1"],"j":["1"],"j.E":"1"},"ez":{"m3":[]},"c3":{"B":["1"],"a1":[],"z":["1"]},"bC":{"k":["H"],"B":["H"],"p":["H"],"a1":[],"n":["H"],"z":["H"],"j":["H"],"k.E":"H"},"d4":{"k":["i"],"B":["i"],"p":["i"],"a1":[],"n":["i"],"z":["i"],"j":["i"]},"eM":{"k":["i"],"B":["i"],"p":["i"],"a1":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"eN":{"k":["i"],"B":["i"],"p":["i"],"a1":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"eO":{"k":["i"],"B":["i"],"p":["i"],"a1":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"eP":{"k":["i"],"B":["i"],"p":["i"],"a1":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"eQ":{"k":["i"],"B":["i"],"p":["i"],"a1":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"d5":{"k":["i"],"B":["i"],"p":["i"],"a1":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"bD":{"k":["i"],"ca":[],"B":["i"],"p":["i"],"a1":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"fU":{"K":[]},"dW":{"K":[]},"dV":{"ji":[]},"dS":{"j":["1"],"j.E":"1"},"dG":{"de":["1"],"n":["1"],"j":["1"]},"cM":{"j":["1"]},"cT":{"k":["1"],"p":["1"],"n":["1"],"j":["1"]},"cX":{"L":["1","2"],"I":["1","2"]},"L":{"I":["1","2"]},"cY":{"I":["1","2"]},"ce":{"I":["1","2"]},"dO":{"de":["1"],"n":["1"],"j":["1"]},"H":{"a4":[]},"i":{"a4":[]},"p":{"n":["1"],"j":["1"]},"ee":{"K":[]},"fq":{"K":[]},"eR":{"K":[]},"aG":{"K":[]},"db":{"K":[]},"ev":{"K":[]},"fA":{"K":[]},"fx":{"K":[]},"c7":{"K":[]},"ej":{"K":[]},"eU":{"K":[]},"di":{"K":[]},"el":{"K":[]},"bL":{"fB":[]},"hf":{"fB":[]},"fN":{"fB":[]},"v":{"E":[],"t":[],"e":[]},"b9":{"E":[],"t":[],"e":[]},"E":{"t":[],"e":[]},"ag":{"bu":[]},"bB":{"m":[]},"ao":{"m":[]},"t":{"e":[]},"ap":{"e":[]},"aq":{"e":[]},"af":{"e":[]},"bG":{"m":[]},"b0":{"m":[]},"bl":{"ao":[],"m":[]},"ck":{"aL":[]},"ec":{"E":[],"t":[],"e":[]},"ed":{"E":[],"t":[],"e":[]},"bQ":{"E":[],"t":[],"e":[]},"bv":{"E":[],"t":[],"e":[]},"bw":{"E":[],"t":[],"e":[]},"aH":{"t":[],"e":[]},"cD":{"k":["ab<a4>"],"p":["ab<a4>"],"B":["ab<a4>"],"n":["ab<a4>"],"j":["ab<a4>"],"z":["ab<a4>"],"k.E":"ab<a4>"},"cE":{"ab":["a4"]},"eo":{"k":["l"],"p":["l"],"B":["l"],"n":["l"],"j":["l"],"z":["l"],"k.E":"l"},"fK":{"k":["E"],"p":["E"],"n":["E"],"j":["E"],"k.E":"E"},"bW":{"k":["ag"],"p":["ag"],"B":["ag"],"n":["ag"],"j":["ag"],"z":["ag"],"k.E":"ag"},"eq":{"e":[]},"es":{"E":[],"t":[],"e":[]},"bA":{"k":["t"],"p":["t"],"B":["t"],"n":["t"],"j":["t"],"z":["t"],"k.E":"t"},"bZ":{"E":[],"t":[],"e":[]},"c0":{"e":[]},"eJ":{"L":["l","@"],"I":["l","@"],"L.V":"@"},"eK":{"L":["l","@"],"I":["l","@"],"L.V":"@"},"eL":{"k":["ay"],"p":["ay"],"B":["ay"],"n":["ay"],"j":["ay"],"z":["ay"],"k.E":"ay"},"a6":{"k":["t"],"p":["t"],"n":["t"],"j":["t"],"k.E":"t"},"d6":{"k":["t"],"p":["t"],"B":["t"],"n":["t"],"j":["t"],"z":["t"],"k.E":"t"},"eY":{"k":["az"],"p":["az"],"B":["az"],"n":["az"],"j":["az"],"z":["az"],"k.E":"az"},"f3":{"L":["l","@"],"I":["l","@"],"L.V":"@"},"f5":{"E":[],"t":[],"e":[]},"f7":{"k":["ap"],"p":["ap"],"B":["ap"],"e":[],"n":["ap"],"j":["ap"],"z":["ap"],"k.E":"ap"},"f8":{"k":["aC"],"p":["aC"],"B":["aC"],"n":["aC"],"j":["aC"],"z":["aC"],"k.E":"aC"},"fc":{"L":["l","l"],"I":["l","l"],"L.V":"l"},"bk":{"E":[],"t":[],"e":[]},"dj":{"E":[],"t":[],"e":[]},"fg":{"E":[],"t":[],"e":[]},"fh":{"E":[],"t":[],"e":[]},"c9":{"E":[],"t":[],"e":[]},"fj":{"k":["af"],"p":["af"],"B":["af"],"n":["af"],"j":["af"],"z":["af"],"k.E":"af"},"fk":{"k":["aq"],"p":["aq"],"B":["aq"],"e":[],"n":["aq"],"j":["aq"],"z":["aq"],"k.E":"aq"},"fo":{"k":["ar"],"p":["ar"],"B":["ar"],"n":["ar"],"j":["ar"],"z":["ar"],"k.E":"ar"},"fE":{"e":[]},"ci":{"e":[]},"cj":{"t":[],"e":[]},"fL":{"k":["J"],"p":["J"],"B":["J"],"n":["J"],"j":["J"],"z":["J"],"k.E":"J"},"dD":{"ab":["a4"]},"fZ":{"k":["av?"],"p":["av?"],"B":["av?"],"n":["av?"],"j":["av?"],"z":["av?"],"k.E":"av?"},"dJ":{"k":["t"],"p":["t"],"B":["t"],"n":["t"],"j":["t"],"z":["t"],"k.E":"t"},"hi":{"k":["aD"],"p":["aD"],"B":["aD"],"n":["aD"],"j":["aD"],"z":["aD"],"k.E":"aD"},"hp":{"k":["aj"],"p":["aj"],"B":["aj"],"n":["aj"],"j":["aj"],"z":["aj"],"k.E":"aj"},"fI":{"L":["l","l"],"I":["l","l"]},"fS":{"L":["l","l"],"I":["l","l"],"L.V":"l"},"dE":{"c8":["1"]},"d7":{"aL":[]},"dP":{"aL":[]},"hr":{"aL":[]},"hq":{"aL":[]},"er":{"k":["E"],"p":["E"],"n":["E"],"j":["E"],"k.E":"E"},"ab":{"hd":["1"]},"eC":{"k":["aT"],"p":["aT"],"n":["aT"],"j":["aT"],"k.E":"aT"},"eS":{"k":["aX"],"p":["aX"],"n":["aX"],"j":["aX"],"k.E":"aX"},"c6":{"o":[],"E":[],"t":[],"e":[]},"fe":{"k":["l"],"p":["l"],"n":["l"],"j":["l"],"k.E":"l"},"o":{"E":[],"t":[],"e":[]},"fp":{"k":["aZ"],"p":["aZ"],"n":["aZ"],"j":["aZ"],"k.E":"aZ"},"eg":{"L":["l","@"],"I":["l","@"],"L.V":"@"},"eh":{"e":[]},"b7":{"e":[]},"eT":{"e":[]},"f9":{"k":["I<@,@>"],"p":["I<@,@>"],"n":["I<@,@>"],"j":["I<@,@>"],"k.E":"I<@,@>"},"cK":{"aV":[]},"aO":{"aV":[]},"ae":{"aV":[]},"f0":{"aV":[]},"u":{"aV":[]},"dm":{"aV":[]},"an":{"j":["1"],"an.T":"1"},"bb":{"U":[]},"bc":{"U":[]},"G":{"U":[]},"cW":{"U":[]},"c1":{"U":[]},"c2":{"U":[]},"f_":{"U":[]},"dl":{"U":[]},"nA":{"aw":[]},"bU":{"aw":[]},"o1":{"aw":[]},"ol":{"aw":[]},"cQ":{"an":["aw"],"j":["aw"],"an.T":"aw"},"cz":{"a_":[]},"bX":{"an":["a_?"],"a_":[],"j":["a_?"],"an.T":"a_?"},"dd":{"a_":[]},"dy":{"a_":[]},"dz":{"a_":[]},"dA":{"a_":[]},"cb":{"a3":[]},"cc":{"a3":[]},"eG":{"df":[]},"ft":{"a3":[]},"fu":{"a3":[]},"fv":{"a3":[]},"fr":{"a3":[]},"dn":{"a3":[]},"fs":{"a3":[]},"dp":{"a3":[]},"dq":{"a3":[]},"fw":{"a3":[]},"dt":{"a3":[]},"dv":{"a3":[]},"dw":{"a3":[]},"d_":{"dk":[]},"em":{"aI":[]},"et":{"aI":[]},"eu":{"aI":[]},"eX":{"aI":[]},"ca":{"p":["i"],"n":["i"],"j":["i"]}}'))
H.oT(v.typeUniverse,JSON.parse('{"am":1,"n":1,"bf":1,"eF":2,"fG":1,"cH":1,"fz":1,"cd":1,"cA":2,"eE":1,"c3":1,"c8":1,"bK":1,"fd":2,"dH":1,"cM":1,"cT":1,"cX":2,"hA":2,"cY":2,"dO":1,"dI":1,"dZ":2,"e0":1,"ei":2,"ek":2,"ew":1,"dE":1,"O":1,"cI":1,"bb":1,"bc":1,"G":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.lv
return{cR:s("bQ"),fK:s("bu"),Y:s("bv"),eT:s("bT"),ed:s("cx"),gA:s("bw"),gw:s("n<@>"),h:s("E"),l:s("bz"),bU:s("K"),aD:s("m"),c8:s("ag"),bX:s("bW"),b:s("cJ"),gb:s("cL"),gk:s("bZ"),eu:s("w<ef>"),i:s("w<nA>"),cn:s("w<b6>"),U:s("w<bU>"),fD:s("w<b8>"),C:s("w<b9>"),u:s("w<au>"),fv:s("w<bY>"),e:s("w<aw>"),L:s("w<eD>"),F:s("w<p<b9>>"),z:s("w<aV>"),fA:s("w<bg>"),Q:s("w<aL>"),q:s("w<eZ>"),cG:s("w<a2>"),eg:s("w<bh>"),o:s("w<o1>"),D:s("w<ol>"),c3:s("w<bj>"),g9:s("w<c8<Q>>"),s:s("w<l>"),ga:s("w<qS>"),gT:s("w<ar>"),ab:s("w<dm>"),gN:s("w<ca>"),dC:s("w<a3>"),c:s("w<dr>"),V:s("w<ds>"),B:s("w<du>"),J:s("w<dx>"),k:s("w<cf>"),n:s("w<H>"),gn:s("w<@>"),t:s("w<i>"),g6:s("w<aI?>"),eJ:s("w<a_?>"),bc:s("w<dk?>"),p:s("w<cc?>"),a:s("w<~(U)>"),aP:s("z<@>"),T:s("cO"),eH:s("lS"),M:s("aS"),aU:s("B<@>"),fX:s("Y<i,ad>"),y:s("Y<i,i>"),O:s("p<dr>"),d:s("p<ds>"),m:s("p<du>"),R:s("p<dx>"),r:s("p<@>"),bv:s("cW"),f:s("I<@,@>"),dv:s("cZ<l,l>"),gc:s("bg"),bK:s("c0"),Z:s("c1"),bZ:s("c2"),cH:s("d3"),dE:s("a1"),bm:s("bD"),P:s("ah"),K:s("Q"),I:s("ab<a4>"),fJ:s("m3"),ew:s("c6"),fg:s("df"),N:s("l"),g7:s("o"),bY:s("bk"),aW:s("c9"),aF:s("ji"),bJ:s("fm"),dr:s("dl"),v:s("dn"),w:s("cb"),g:s("dp"),x:s("dq"),E:s("dt"),j:s("cc"),G:s("dv"),bz:s("dw"),ak:s("bH"),dw:s("ce<l,l>"),dD:s("fB"),h9:s("cj"),ac:s("a6"),cJ:s("ad"),gR:s("H"),A:s("@"),S:s("i"),aw:s("0&*"),_:s("Q*"),bG:s("lR<ah>?"),X:s("Q?"),gW:s("dc?"),dl:s("fa?"),f7:s("fn?"),W:s("cb?"),H:s("a4"),h2:s("~(U)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.p=W.bv.prototype
C.l=W.bw.prototype
C.Q=W.b9.prototype
C.T=J.a.prototype
C.b=J.w.prototype
C.c=J.cN.prototype
C.U=J.cO.prototype
C.d=J.c_.prototype
C.a=J.bd.prototype
C.V=J.aS.prototype
C.a_=H.bD.prototype
C.B=J.eW.prototype
C.C=W.dj.prototype
C.o=J.bH.prototype
C.D=W.bl.prototype
C.E=W.ci.prototype
C.F=new E.bS("Browser.chrome")
C.q=new E.bS("Browser.firefox")
C.r=new E.bS("Browser.edge")
C.G=new E.bS("Browser.other")
C.a5=new P.hW()
C.H=new P.hV()
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

C.O=new P.eU()
C.e=new P.jy()
C.P=new P.jC()
C.f=new P.jW()
C.m=new P.by(0)
C.R=new P.by(5e6)
C.S=new P.ir("element",!1,!1,!1)
C.i=H.b(s([0,0,32776,33792,1,10240,0,0]),t.t)
C.W=H.b(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.s)
C.j=H.b(s([0,0,65490,45055,65535,34815,65534,18431]),t.t)
C.k=H.b(s([0,0,26624,1023,65534,2047,65534,2047]),t.t)
C.X=H.b(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.s)
C.v=H.b(s([]),t.s)
C.Y=H.b(s([0,0,32722,12287,65534,34815,65534,18431]),t.t)
C.w=H.b(s([0,0,65498,45055,65535,34815,65534,18431]),t.t)
C.h=H.b(s([0,0,24576,1023,65534,34815,65534,18431]),t.t)
C.x=H.b(s([0,0,32754,11263,65534,34815,65534,18431]),t.t)
C.y=H.b(s([0,0,65490,12287,65535,34815,65534,18431]),t.t)
C.z=H.b(s(["bind","if","ref","repeat","syntax"]),t.s)
C.n=H.b(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.s)
C.Z=new H.cB(0,{},C.v,H.lv("cB<l,l>"))
C.a0=new E.c4("OperatingSystem.windows")
C.A=new E.c4("OperatingSystem.mac")
C.a1=new E.c4("OperatingSystem.linux")
C.a2=new E.c4("OperatingSystem.other")
C.a3=new P.jz(!1)
C.a4=new P.cl(null,2)})();(function staticFields(){$.jT=null
$.aP=0
$.cw=null
$.lI=null
$.mW=null
$.mP=null
$.n1=null
$.kz=null
$.kG=null
$.lx=null
$.co=null
$.e3=null
$.e4=null
$.lq=!1
$.aM=C.f
$.ak=H.b([],H.lv("w<Q>"))
$.ba=null
$.kZ=null
$.lP=null
$.lO=null
$.dF=P.V(t.N,t.b)
$.id=null
$.lU=null
$.lZ=null
$.ai=null
$.aY=null
$.m5=null
$.bI=null
$.ml=null
$.mk=null
$.jD=null
$.jE=null
$.jF=null
$.mj=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"qE","n8",function(){return H.qa("_$dart_dartClosure")})
s($,"qT","na",function(){return H.b_(H.jo({
toString:function(){return"$receiver$"}}))})
s($,"qU","nb",function(){return H.b_(H.jo({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"qV","nc",function(){return H.b_(H.jo(null))})
s($,"qW","nd",function(){return H.b_(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"qZ","ng",function(){return H.b_(H.jo(void 0))})
s($,"r_","nh",function(){return H.b_(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"qY","nf",function(){return H.b_(H.md(null))})
s($,"qX","ne",function(){return H.b_(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"r1","nj",function(){return H.b_(H.md(void 0))})
s($,"r0","ni",function(){return H.b_(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"rh","lC",function(){return P.ox()})
s($,"r2","nk",function(){return new P.jB().$0()})
s($,"r3","nl",function(){return new P.jA().$0()})
s($,"ri","np",function(){return new Int8Array(H.cn(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"rl","nr",function(){return P.oe("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"ry","ns",function(){return P.pe()})
s($,"rj","nq",function(){return P.lT(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"ra","no",function(){return Z.aE(0)})
s($,"r4","nm",function(){return Z.aE(511)})
s($,"rc","bt",function(){return Z.aE(1)})
s($,"rb","bs",function(){return Z.aE(2)})
s($,"r6","br",function(){return Z.aE(4)})
s($,"rd","bO",function(){return Z.aE(8)})
s($,"re","bP",function(){return Z.aE(16)})
s($,"r7","e9",function(){return Z.aE(32)})
s($,"r8","ea",function(){return Z.aE(64)})
s($,"r9","nn",function(){return Z.aE(96)})
s($,"rf","ct",function(){return Z.aE(128)})
s($,"r5","bq",function(){return Z.aE(256)})
s($,"qA","n7",function(){return new V.ie()})
r($,"qz","F",function(){return $.n7()})
r($,"qO","n9",function(){var q=V.o2(),p=V.mm(),o=$.mj,n=(o==null?$.mj=V.ou(0,0,-1):o).I(),m=p.aH(n).I(),l=n.aH(m),k=V.ov(q)
return V.aW(m.a,l.a,n.a,m.b6(0).a5(k),m.b,l.b,n.b,l.b6(0).a5(k),m.c,l.c,n.c,n.b6(0).a5(k),0,0,0,1)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.d3,DataView:H.a1,ArrayBufferView:H.a1,Float32Array:H.bC,Float64Array:H.bC,Int16Array:H.eM,Int32Array:H.eN,Int8Array:H.eO,Uint16Array:H.eP,Uint32Array:H.eQ,Uint8ClampedArray:H.d5,CanvasPixelArray:H.d5,Uint8Array:H.bD,HTMLAudioElement:W.v,HTMLBRElement:W.v,HTMLButtonElement:W.v,HTMLContentElement:W.v,HTMLDListElement:W.v,HTMLDataElement:W.v,HTMLDataListElement:W.v,HTMLDetailsElement:W.v,HTMLDialogElement:W.v,HTMLEmbedElement:W.v,HTMLFieldSetElement:W.v,HTMLHRElement:W.v,HTMLHeadElement:W.v,HTMLHeadingElement:W.v,HTMLHtmlElement:W.v,HTMLIFrameElement:W.v,HTMLImageElement:W.v,HTMLLIElement:W.v,HTMLLabelElement:W.v,HTMLLegendElement:W.v,HTMLLinkElement:W.v,HTMLMapElement:W.v,HTMLMediaElement:W.v,HTMLMenuElement:W.v,HTMLMetaElement:W.v,HTMLMeterElement:W.v,HTMLModElement:W.v,HTMLOListElement:W.v,HTMLObjectElement:W.v,HTMLOptGroupElement:W.v,HTMLOptionElement:W.v,HTMLOutputElement:W.v,HTMLParagraphElement:W.v,HTMLParamElement:W.v,HTMLPictureElement:W.v,HTMLPreElement:W.v,HTMLProgressElement:W.v,HTMLQuoteElement:W.v,HTMLScriptElement:W.v,HTMLShadowElement:W.v,HTMLSlotElement:W.v,HTMLSourceElement:W.v,HTMLSpanElement:W.v,HTMLStyleElement:W.v,HTMLTableCaptionElement:W.v,HTMLTableColElement:W.v,HTMLTextAreaElement:W.v,HTMLTimeElement:W.v,HTMLTitleElement:W.v,HTMLTrackElement:W.v,HTMLUListElement:W.v,HTMLUnknownElement:W.v,HTMLVideoElement:W.v,HTMLDirectoryElement:W.v,HTMLFontElement:W.v,HTMLFrameElement:W.v,HTMLFrameSetElement:W.v,HTMLMarqueeElement:W.v,HTMLElement:W.v,AccessibleNodeList:W.hQ,HTMLAnchorElement:W.ec,HTMLAreaElement:W.ed,HTMLBaseElement:W.bQ,Blob:W.bu,HTMLBodyElement:W.bv,HTMLCanvasElement:W.bw,CDATASection:W.aH,CharacterData:W.aH,Comment:W.aH,ProcessingInstruction:W.aH,Text:W.aH,CSSPerspective:W.i1,CSSCharsetRule:W.J,CSSConditionRule:W.J,CSSFontFaceRule:W.J,CSSGroupingRule:W.J,CSSImportRule:W.J,CSSKeyframeRule:W.J,MozCSSKeyframeRule:W.J,WebKitCSSKeyframeRule:W.J,CSSKeyframesRule:W.J,MozCSSKeyframesRule:W.J,WebKitCSSKeyframesRule:W.J,CSSMediaRule:W.J,CSSNamespaceRule:W.J,CSSPageRule:W.J,CSSRule:W.J,CSSStyleRule:W.J,CSSSupportsRule:W.J,CSSViewportRule:W.J,CSSStyleDeclaration:W.cC,MSStyleCSSProperties:W.cC,CSS2Properties:W.cC,CSSImageValue:W.at,CSSKeywordValue:W.at,CSSNumericValue:W.at,CSSPositionValue:W.at,CSSResourceValue:W.at,CSSUnitValue:W.at,CSSURLImageValue:W.at,CSSStyleValue:W.at,CSSMatrixComponent:W.aR,CSSRotation:W.aR,CSSScale:W.aR,CSSSkew:W.aR,CSSTranslation:W.aR,CSSTransformComponent:W.aR,CSSTransformValue:W.i3,CSSUnparsedValue:W.i4,DataTransferItemList:W.i5,HTMLDivElement:W.b9,DOMException:W.i6,ClientRectList:W.cD,DOMRectList:W.cD,DOMRectReadOnly:W.cE,DOMStringList:W.eo,DOMTokenList:W.i7,Element:W.E,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,SubmitEvent:W.m,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ag,FileList:W.bW,FileWriter:W.eq,HTMLFormElement:W.es,Gamepad:W.av,History:W.ip,HTMLCollection:W.bA,HTMLFormControlsCollection:W.bA,HTMLOptionsCollection:W.bA,ImageData:W.cL,HTMLInputElement:W.bZ,KeyboardEvent:W.bB,Location:W.iA,MediaList:W.iR,MessagePort:W.c0,MIDIInputMap:W.eJ,MIDIOutputMap:W.eK,MimeType:W.ay,MimeTypeArray:W.eL,PointerEvent:W.ao,MouseEvent:W.ao,DragEvent:W.ao,Document:W.t,DocumentFragment:W.t,HTMLDocument:W.t,ShadowRoot:W.t,XMLDocument:W.t,DocumentType:W.t,Node:W.t,NodeList:W.d6,RadioNodeList:W.d6,Plugin:W.az,PluginArray:W.eY,RTCStatsReport:W.f3,HTMLSelectElement:W.f5,SourceBuffer:W.ap,SourceBufferList:W.f7,SpeechGrammar:W.aC,SpeechGrammarList:W.f8,SpeechRecognitionResult:W.aD,Storage:W.fc,CSSStyleSheet:W.aj,StyleSheet:W.aj,HTMLTableCellElement:W.bk,HTMLTableDataCellElement:W.bk,HTMLTableHeaderCellElement:W.bk,HTMLTableElement:W.dj,HTMLTableRowElement:W.fg,HTMLTableSectionElement:W.fh,HTMLTemplateElement:W.c9,TextTrack:W.aq,TextTrackCue:W.af,VTTCue:W.af,TextTrackCueList:W.fj,TextTrackList:W.fk,TimeRanges:W.jh,Touch:W.ar,TouchEvent:W.bG,TouchList:W.fo,TrackDefaultList:W.jm,CompositionEvent:W.b0,FocusEvent:W.b0,TextEvent:W.b0,UIEvent:W.b0,URL:W.jx,VideoTrackList:W.fE,WheelEvent:W.bl,Window:W.ci,DOMWindow:W.ci,Attr:W.cj,CSSRuleList:W.fL,ClientRect:W.dD,DOMRect:W.dD,GamepadList:W.fZ,NamedNodeMap:W.dJ,MozNamedAttrMap:W.dJ,SpeechRecognitionResultList:W.hi,StyleSheetList:W.hp,SVGLength:P.aT,SVGLengthList:P.eC,SVGNumber:P.aX,SVGNumberList:P.eS,SVGPointList:P.iZ,SVGScriptElement:P.c6,SVGStringList:P.fe,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,SVGTransform:P.aZ,SVGTransformList:P.fp,AudioBuffer:P.hT,AudioParamMap:P.eg,AudioTrackList:P.eh,AudioContext:P.b7,webkitAudioContext:P.b7,BaseAudioContext:P.b7,OfflineAudioContext:P.eT,WebGL2RenderingContext:P.dc,SQLResultSetRowList:P.f9})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c3.$nativeSuperclassTag="ArrayBufferView"
H.dK.$nativeSuperclassTag="ArrayBufferView"
H.dL.$nativeSuperclassTag="ArrayBufferView"
H.bC.$nativeSuperclassTag="ArrayBufferView"
H.dM.$nativeSuperclassTag="ArrayBufferView"
H.dN.$nativeSuperclassTag="ArrayBufferView"
H.d4.$nativeSuperclassTag="ArrayBufferView"
W.dQ.$nativeSuperclassTag="EventTarget"
W.dR.$nativeSuperclassTag="EventTarget"
W.dT.$nativeSuperclassTag="EventTarget"
W.dU.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=U.qk
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
