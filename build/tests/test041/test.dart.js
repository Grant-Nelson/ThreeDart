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
a[c]=function(){a[c]=function(){H.qt(b)}
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
if(a[b]!==s)H.qu(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lA(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={l9:function l9(){},
lb:function(a){return new H.cY("Field '"+a+"' has been assigned during initialization.")},
kE:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
jq:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
oq:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
q4:function(a,b,c){return a},
o1:function(a,b,c,d){if(t.gw.b(a))return new H.cK(a,b,c.K("@<0>").bj(d).K("cK<1,2>"))
return new H.b_(a,b,c.K("@<0>").bj(d).K("b_<1,2>"))},
l6:function(){return new P.cc("No element")},
nT:function(){return new P.cc("Too many elements")},
on:function(a,b){H.ff(a,0,J.aS(a)-1,b)},
ff:function(a,b,c,d){if(c-b<=32)H.om(a,b,c,d)
else H.ol(a,b,c,d)},
om:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.cw(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.aB()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
ol:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.a9(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a9(a4+a5,2),f=g-j,e=g+j,d=J.cw(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.aB()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aB()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.aB()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aB()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.aB()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.aB()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.aB()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aB()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aB()
if(a2>0){s=a1
a1=a0
a0=s}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.a7(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
H.ff(a3,a4,r-2,a6)
H.ff(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.a7(a6.$2(d.h(a3,r),b),0);)++r
for(;J.a7(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}H.ff(a3,r,q,a6)}else H.ff(a3,r,q,a6)},
cY:function cY(a){this.a=a},
r:function r(a){this.a=a},
n:function n(){},
d2:function d2(){},
bk:function bk(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b_:function b_(a,b,c){this.a=a
this.b=b
this.$ti=c},
cK:function cK(a,b,c){this.a=a
this.b=b
this.$ti=c},
eQ:function eQ(a,b){this.a=null
this.b=a
this.c=b},
d6:function d6(a,b,c){this.a=a
this.b=b
this.$ti=c},
b8:function b8(a,b,c){this.a=a
this.b=b
this.$ti=c},
fR:function fR(a,b){this.a=a
this.b=b},
cO:function cO(){},
fK:function fK(){},
ci:function ci(){},
nL:function(){throw H.c(P.C("Cannot modify unmodifiable Map"))},
n7:function(a){var s,r=H.n6(a)
if(r!=null)return r
s="minified:"+a
return s},
n1:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
x:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cy(a)
return s},
dj:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
m4:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.d(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.c(P.a5(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.E(q,o)|32)>r)return n}return parseInt(a,b)},
dk:function(a){return H.o6(a)},
o6:function(a){var s,r,q,p
if(a instanceof P.N)return H.aq(H.ba(a),null)
if(J.eh(a)===C.U||t.ak.b(a)){s=C.u(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.aq(H.ba(a),null)},
o7:function(){if(!!self.location)return self.location.href
return null},
m3:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
of:function(a){var s,r,q,p=H.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){q=a[r]
if(!H.hZ(q))throw H.c(H.eg(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.b1(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.eg(q))}return H.m3(p)},
m5:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.hZ(q))throw H.c(H.eg(q))
if(q<0)throw H.c(H.eg(q))
if(q>65535)return H.of(a)}return H.m3(a)},
og:function(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
au:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.b1(s,10)|55296)>>>0,s&1023|56320)}}throw H.c(P.a5(a,0,1114111,null,null))},
c8:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oe:function(a){var s=H.c8(a).getFullYear()+0
return s},
oc:function(a){var s=H.c8(a).getMonth()+1
return s},
o8:function(a){var s=H.c8(a).getDate()+0
return s},
o9:function(a){var s=H.c8(a).getHours()+0
return s},
ob:function(a){var s=H.c8(a).getMinutes()+0
return s},
od:function(a){var s=H.c8(a).getSeconds()+0
return s},
oa:function(a){var s=H.c8(a).getMilliseconds()+0
return s},
qg:function(a){throw H.c(H.eg(a))},
d:function(a,b){if(a==null)J.aS(a)
throw H.c(H.cu(a,b))},
cu:function(a,b){var s,r="index"
if(!H.hZ(b))return new P.aC(!0,b,r,null)
s=J.aS(a)
if(b<0||b>=s)return P.M(b,a,r,null,s)
return P.fa(b,r)},
q8:function(a,b,c){if(a>c)return P.a5(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a5(b,a,c,"end",null)
return new P.aC(!0,b,"end",null)},
eg:function(a){return new P.aC(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.f_()
s=new Error()
s.dartException=a
r=H.qv
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qv:function(){return J.cy(this.dartException)},
h:function(a){throw H.c(a)},
q:function(a){throw H.c(P.aH(a))},
b5:function(a){var s,r,q,p,o,n
a=H.n4(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jC(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
jD:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mh:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
la:function(a,b){var s=b==null,r=s?null:b.method
return new H.eK(a,r,s?null:b.receiver)},
ak:function(a){if(a==null)return new H.ja(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bR(a,a.dartException)
return H.q0(a)},
bR:function(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
q0:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.b1(r,16)&8191)===10)switch(q){case 438:return H.bR(a,H.la(H.x(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.x(s)+" (Error "+q+")"
return H.bR(a,new H.di(p,e))}}if(a instanceof TypeError){o=$.nb()
n=$.nc()
m=$.nd()
l=$.ne()
k=$.nh()
j=$.ni()
i=$.ng()
$.nf()
h=$.nk()
g=$.nj()
f=o.aw(s)
if(f!=null)return H.bR(a,H.la(s,f))
else{f=n.aw(s)
if(f!=null){f.method="call"
return H.bR(a,H.la(s,f))}else{f=m.aw(s)
if(f==null){f=l.aw(s)
if(f==null){f=k.aw(s)
if(f==null){f=j.aw(s)
if(f==null){f=i.aw(s)
if(f==null){f=l.aw(s)
if(f==null){f=h.aw(s)
if(f==null){f=g.aw(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bR(a,new H.di(s,f==null?e:f.method))}}return H.bR(a,new H.fJ(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.ds()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bR(a,new P.aC(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.ds()
return a},
lC:function(a){var s
if(a==null)return new H.hw(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.hw(a)},
qa:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
qk:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.f("Unsupported number of arguments for wrapped closure"))},
ct:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qk)
a.$identity=s
return s},
nK:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.fk().constructor.prototype):Object.create(new H.bV(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aU
if(typeof r!=="number")return r.a1()
$.aU=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.lQ(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.nG(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lQ(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
nG:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.n_,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.nE:H.nD
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
nH:function(a,b,c,d){var s=H.lP
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lQ:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.nJ(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nH(r,!p,s,b)
if(r===0){p=$.aU
if(typeof p!=="number")return p.a1()
$.aU=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.cz
return new Function(p+(o==null?$.cz=H.ib("self"):o)+";return "+n+"."+H.x(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aU
if(typeof p!=="number")return p.a1()
$.aU=p+1
m+=p
p="return function("+m+"){return this."
o=$.cz
return new Function(p+(o==null?$.cz=H.ib("self"):o)+"."+H.x(s)+"("+m+");}")()},
nI:function(a,b,c,d){var s=H.lP,r=H.nF
switch(b?-1:a){case 0:throw H.c(new H.fd("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
nJ:function(a,b){var s,r,q,p,o,n,m,l=$.cz
if(l==null)l=$.cz=H.ib("self")
s=$.lO
if(s==null)s=$.lO=H.ib("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.nI(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.x(r)+"(this."+s+");"
n=$.aU
if(typeof n!=="number")return n.a1()
$.aU=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.x(r)+"(this."+s+", "+m+");"
n=$.aU
if(typeof n!=="number")return n.a1()
$.aU=n+1
return new Function(o+n+"}")()},
lA:function(a,b,c,d,e,f,g){return H.nK(a,b,c,d,!!e,!!f,g)},
nD:function(a,b){return H.hK(v.typeUniverse,H.ba(a.a),b)},
nE:function(a,b){return H.hK(v.typeUniverse,H.ba(a.c),b)},
lP:function(a){return a.a},
nF:function(a){return a.c},
ib:function(a){var s,r,q,p=new H.bV("self","target","receiver","name"),o=J.l8(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.bT("Field name "+a+" not found."))},
qt:function(a){throw H.c(new P.ew(a))},
qd:function(a){return v.getIsolateTag(a)},
qu:function(a){return H.h(new H.cY(a))},
rC:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qm:function(a){var s,r,q,p,o,n=$.mZ.$1(a),m=$.kC[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kJ[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.mW.$2(a,n)
if(q!=null){m=$.kC[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kJ[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kX(s)
$.kC[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kJ[n]=s
return s}if(p==="-"){o=H.kX(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.n2(a,s)
if(p==="*")throw H.c(P.jF(n))
if(v.leafTags[n]===true){o=H.kX(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.n2(a,s)},
n2:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lF(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kX:function(a){return J.lF(a,!1,null,!!a.$iz)},
qo:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kX(s)
else return J.lF(s,c,null,null)},
qi:function(){if(!0===$.lD)return
$.lD=!0
H.qj()},
qj:function(){var s,r,q,p,o,n,m,l
$.kC=Object.create(null)
$.kJ=Object.create(null)
H.qh()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.n3.$1(o)
if(n!=null){m=H.qo(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qh:function(){var s,r,q,p,o,n,m=C.J()
m=H.cs(C.K,H.cs(C.L,H.cs(C.v,H.cs(C.v,H.cs(C.M,H.cs(C.N,H.cs(C.O(C.u),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.mZ=new H.kF(p)
$.mW=new H.kG(o)
$.n3=new H.kH(n)},
cs:function(a,b){return a(b)||b},
nX:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.a8("Illegal RegExp pattern ("+String(n)+")",a,null))},
n5:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
q9:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n4:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lH:function(a,b,c){var s=H.qr(a,b,c)
return s},
qr:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n4(b),'g'),H.q9(c))},
cE:function cE(){},
cF:function cF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jC:function jC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
di:function di(a,b){this.a=a
this.b=b},
eK:function eK(a,b,c){this.a=a
this.b=b
this.c=c},
fJ:function fJ(a){this.a=a},
ja:function ja(a){this.a=a},
hw:function hw(a){this.a=a
this.b=null},
bC:function bC(){},
fr:function fr(){},
fk:function fk(){},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fd:function fd(a){this.a=a},
T:function T(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iJ:function iJ(a){this.a=a},
iL:function iL(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d_:function d_(a,b){this.a=a
this.$ti=b},
eO:function eO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
eJ:function eJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cq:function(a){return a},
o3:function(a){return new Int8Array(a)},
b9:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cu(b,a))},
pe:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.q8(a,b,c))
return b},
dd:function dd(){},
a_:function a_(){},
c6:function c6(){},
bI:function bI(){},
de:function de(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
df:function df(){},
bJ:function bJ(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
mb:function(a,b){var s=b.c
return s==null?b.c=H.lq(a,b.z,!0):s},
ma:function(a,b){var s=b.c
return s==null?b.c=H.e6(a,"lW",[b.z]):s},
mc:function(a){var s=a.y
if(s===6||s===7||s===8)return H.mc(a.z)
return s===11||s===12},
oj:function(a){return a.cy},
lB:function(a){return H.lr(v.typeUniverse,a,!1)},
bu:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bu(a,s,a0,a1)
if(r===s)return b
return H.mF(a,r,!0)
case 7:s=b.z
r=H.bu(a,s,a0,a1)
if(r===s)return b
return H.lq(a,r,!0)
case 8:s=b.z
r=H.bu(a,s,a0,a1)
if(r===s)return b
return H.mE(a,r,!0)
case 9:q=b.Q
p=H.ef(a,q,a0,a1)
if(p===q)return b
return H.e6(a,b.z,p)
case 10:o=b.z
n=H.bu(a,o,a0,a1)
m=b.Q
l=H.ef(a,m,a0,a1)
if(n===o&&l===m)return b
return H.lo(a,n,l)
case 11:k=b.z
j=H.bu(a,k,a0,a1)
i=b.Q
h=H.pY(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mD(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.ef(a,g,a0,a1)
o=b.z
n=H.bu(a,o,a0,a1)
if(f===g&&n===o)return b
return H.lp(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.i3("Attempted to substitute unexpected RTI kind "+c))}},
ef:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bu(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
pZ:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bu(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
pY:function(a,b,c,d){var s,r=b.a,q=H.ef(a,r,c,d),p=b.b,o=H.ef(a,p,c,d),n=b.c,m=H.pZ(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.h8()
s.a=q
s.b=o
s.c=m
return s},
b:function(a,b){a[v.arrayRti]=b
return a},
q5:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.n_(s)
return a.$S()}return null},
n0:function(a,b){var s
if(H.mc(b))if(a instanceof H.bC){s=H.q5(a)
if(s!=null)return s}return H.ba(a)},
ba:function(a){var s
if(a instanceof P.N){s=a.$ti
return s!=null?s:H.lw(a)}if(Array.isArray(a))return H.hX(a)
return H.lw(J.eh(a))},
hX:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
S:function(a){var s=a.$ti
return s!=null?s:H.lw(a)},
lw:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pm(a,s)},
pm:function(a,b){var s=a instanceof H.bC?a.__proto__.__proto__.constructor:b,r=H.oX(v.typeUniverse,s.name)
b.$ccache=r
return r},
n_:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lr(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pl:function(a){var s,r,q,p=this
if(p===t.K)return H.ec(p,a,H.pq)
if(!H.bb(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.ec(p,a,H.pt)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.hZ
else if(r===t.gR||r===t.H)q=H.pp
else if(r===t.N)q=H.pr
else q=r===t.cJ?H.kx:null
if(q!=null)return H.ec(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.ql)){p.r="$i"+s
return H.ec(p,a,H.ps)}}else if(s===7)return H.ec(p,a,H.pj)
return H.ec(p,a,H.ph)},
ec:function(a,b,c){a.b=c
return a.b(b)},
pk:function(a){var s,r=this,q=H.pg
if(!H.bb(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.pd
else if(r===t.K)q=H.pc
else{s=H.ei(r)
if(s)q=H.pi}r.a=q
return r.a(a)},
lz:function(a){var s,r=a.y
if(!H.bb(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&H.lz(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
ph:function(a){var s=this
if(a==null)return H.lz(s)
return H.P(v.typeUniverse,H.n0(a,s),null,s,null)},
pj:function(a){if(a==null)return!0
return this.z.b(a)},
ps:function(a){var s,r=this
if(a==null)return H.lz(r)
s=r.r
if(a instanceof P.N)return!!a[s]
return!!J.eh(a)[s]},
pg:function(a){var s,r=this
if(a==null){s=H.ei(r)
if(s)return a}else if(r.b(a))return a
H.mQ(a,r)},
pi:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mQ(a,s)},
mQ:function(a,b){throw H.c(H.oN(H.mw(a,H.n0(a,b),H.aq(b,null))))},
mw:function(a,b,c){var s=P.iw(a),r=H.aq(b==null?H.ba(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
oN:function(a){return new H.e4("TypeError: "+a)},
ac:function(a,b){return new H.e4("TypeError: "+H.mw(a,null,b))},
pq:function(a){return a!=null},
pc:function(a){if(a!=null)return a
throw H.c(H.ac(a,"Object"))},
pt:function(a){return!0},
pd:function(a){return a},
kx:function(a){return!0===a||!1===a},
mO:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.ac(a,"bool"))},
rq:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ac(a,"bool"))},
rp:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ac(a,"bool?"))},
rr:function(a){if(typeof a=="number")return a
throw H.c(H.ac(a,"double"))},
rt:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ac(a,"double"))},
rs:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ac(a,"double?"))},
hZ:function(a){return typeof a=="number"&&Math.floor(a)===a},
hY:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.ac(a,"int"))},
rv:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ac(a,"int"))},
ru:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ac(a,"int?"))},
pp:function(a){return typeof a=="number"},
rw:function(a){if(typeof a=="number")return a
throw H.c(H.ac(a,"num"))},
ry:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ac(a,"num"))},
rx:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ac(a,"num?"))},
pr:function(a){return typeof a=="string"},
kr:function(a){if(typeof a=="string")return a
throw H.c(H.ac(a,"String"))},
rA:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ac(a,"String"))},
rz:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ac(a,"String?"))},
pU:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.aq(a[q],b)
return s},
mR:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=H.b([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.d(a5,j)
m=C.a.a1(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.aq(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.aq(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.aq(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.aq(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.aq(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
aq:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.aq(a.z,b)
return s}if(l===7){r=a.z
s=H.aq(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.aq(a.z,b)+">"
if(l===9){p=H.q_(a.z)
o=a.Q
return o.length!==0?p+("<"+H.pU(o,b)+">"):p}if(l===11)return H.mR(a,b,null)
if(l===12)return H.mR(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
q_:function(a){var s,r=H.n6(a)
if(r!=null)return r
s="minified:"+a
return s},
mG:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
oX:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lr(a,b,!1)
else if(typeof m=="number"){s=m
r=H.e7(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.e6(a,b,q)
n[b]=o
return o}else return m},
oV:function(a,b){return H.mN(a.tR,b)},
oU:function(a,b){return H.mN(a.eT,b)},
lr:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mB(H.mz(a,null,b,c))
r.set(b,s)
return s},
hK:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mB(H.mz(a,b,c,!0))
q.set(c,r)
return r},
oW:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.lo(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bt:function(a,b){b.a=H.pk
b.b=H.pl
return b},
e7:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.av(null,null)
s.y=b
s.cy=c
r=H.bt(a,s)
a.eC.set(c,r)
return r},
mF:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.oS(a,b,r,c)
a.eC.set(r,s)
return s},
oS:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.bb(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.av(null,null)
q.y=6
q.z=b
q.cy=c
return H.bt(a,q)},
lq:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.oR(a,b,r,c)
a.eC.set(r,s)
return s},
oR:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.bb(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.ei(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.ei(q.z))return q
else return H.mb(a,b)}}p=new H.av(null,null)
p.y=7
p.z=b
p.cy=c
return H.bt(a,p)},
mE:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.oP(a,b,r,c)
a.eC.set(r,s)
return s},
oP:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.bb(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.e6(a,"lW",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.av(null,null)
q.y=8
q.z=b
q.cy=c
return H.bt(a,q)},
oT:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.av(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bt(a,s)
a.eC.set(q,r)
return r},
hJ:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
oO:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
e6:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hJ(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.av(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bt(a,r)
a.eC.set(p,q)
return q},
lo:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hJ(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.av(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bt(a,o)
a.eC.set(q,n)
return n},
mD:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hJ(m)
if(j>0){s=l>0?",":""
r=H.hJ(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.oO(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.av(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bt(a,o)
a.eC.set(q,r)
return r},
lp:function(a,b,c,d){var s,r=b.cy+("<"+H.hJ(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.oQ(a,b,c,r,d)
a.eC.set(r,s)
return s},
oQ:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bu(a,b,r,0)
m=H.ef(a,c,r,0)
return H.lp(a,n,m,c!==m)}}l=new H.av(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bt(a,l)},
mz:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mB:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.oH(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mA(a,r,h,g,!1)
else if(q===46)r=H.mA(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.bs(a.u,a.e,g.pop()))
break
case 94:g.push(H.oT(a.u,g.pop()))
break
case 35:g.push(H.e7(a.u,5,"#"))
break
case 64:g.push(H.e7(a.u,2,"@"))
break
case 126:g.push(H.e7(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.ln(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.e6(p,n,o))
else{m=H.bs(p,a.e,n)
switch(m.y){case 11:g.push(H.lp(p,m,o,a.n))
break
default:g.push(H.lo(p,m,o))
break}}break
case 38:H.oI(a,g)
break
case 42:p=a.u
g.push(H.mF(p,H.bs(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.lq(p,H.bs(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.mE(p,H.bs(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.h8()
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
H.ln(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.mD(p,H.bs(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.ln(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.oK(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.bs(a.u,a.e,i)},
oH:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mA:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.mG(s,o.z)[p]
if(n==null)H.h('No "'+p+'" in "'+H.oj(o)+'"')
d.push(H.hK(s,o,n))}else d.push(p)
return m},
oI:function(a,b){var s=b.pop()
if(0===s){b.push(H.e7(a.u,1,"0&"))
return}if(1===s){b.push(H.e7(a.u,4,"1&"))
return}throw H.c(P.i3("Unexpected extended operation "+H.x(s)))},
bs:function(a,b,c){if(typeof c=="string")return H.e6(a,c,a.sEA)
else if(typeof c=="number")return H.oJ(a,b,c)
else return c},
ln:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bs(a,b,c[s])},
oK:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bs(a,b,c[s])},
oJ:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.i3("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.i3("Bad index "+c+" for "+b.i(0)))},
P:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.bb(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.bb(b))return!1
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
if(p===6){s=H.mb(a,d)
return H.P(a,b,c,s,e)}if(r===8){if(!H.P(a,b.z,c,d,e))return!1
return H.P(a,H.ma(a,b),c,d,e)}if(r===7){s=H.P(a,t.P,c,d,e)
return s&&H.P(a,b.z,c,d,e)}if(p===8){if(H.P(a,b,c,d.z,e))return!0
return H.P(a,b,c,H.ma(a,d),e)}if(p===7){s=H.P(a,b,c,t.P,e)
return s||H.P(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.b)return!0
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
if(!H.P(a,k,c,j,e)||!H.P(a,j,e,k,c))return!1}return H.mS(a,b.z,c,d.z,e)}if(p===11){if(b===t.O)return!0
if(s)return!1
return H.mS(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.po(a,b,c,d,e)}return!1},
mS:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
po:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.P(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mG(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.P(a,H.hK(a,b,l[p]),c,r[p],e))return!1
return!0},
ei:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.bb(a))if(r!==7)if(!(r===6&&H.ei(a.z)))s=r===8&&H.ei(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
ql:function(a){var s
if(!H.bb(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
bb:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
mN:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
av:function av(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
h8:function h8(){this.c=this.b=this.a=null},
h4:function h4(){},
e4:function e4(a){this.a=a},
n6:function(a){return v.mangledGlobalNames[a]},
qp:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lF:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kD:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.lD==null){H.qi()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.jF("Return interceptor for "+H.x(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.k3
if(o==null)o=$.k3=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.qm(a)
if(p!=null)return p
if(typeof a=="function")return C.W
s=Object.getPrototypeOf(a)
if(s==null)return C.C
if(s===Object.prototype)return C.C
if(typeof q=="function"){o=$.k3
if(o==null)o=$.k3=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
nU:function(a,b){if(a<0||a>4294967295)throw H.c(P.a5(a,0,4294967295,"length",null))
return J.nV(new Array(a),b)},
l7:function(a,b){if(a<0)throw H.c(P.bT("Length must be a non-negative integer: "+a))
return H.b(new Array(a),b.K("w<0>"))},
nV:function(a,b){return J.l8(H.b(a,b.K("w<0>")))},
l8:function(a){a.fixed$length=Array
return a},
nW:function(a,b){return J.nw(a,b)},
eh:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cW.prototype
return J.eI.prototype}if(typeof a=="string")return J.bi.prototype
if(a==null)return J.cX.prototype
if(typeof a=="boolean")return J.eH.prototype
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.N)return a
return J.kD(a)},
cw:function(a){if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.N)return a
return J.kD(a)},
i_:function(a){if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.N)return a
return J.kD(a)},
qb:function(a){if(typeof a=="number")return J.c2.prototype
if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bO.prototype
return a},
qc:function(a){if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bO.prototype
return a},
aQ:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.N)return a
return J.kD(a)},
a7:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.eh(a).q(a,b)},
lJ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n1(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cw(a).h(a,b)},
kZ:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.n1(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.i_(a).m(a,b,c)},
nu:function(a,b,c){return J.aQ(a).he(a,b,c)},
nv:function(a,b,c,d){return J.aQ(a).hx(a,b,c,d)},
nw:function(a,b){return J.qb(a).as(a,b)},
i1:function(a,b){return J.i_(a).J(a,b)},
em:function(a,b){return J.i_(a).F(a,b)},
nx:function(a){return J.aQ(a).ga3(a)},
ny:function(a){return J.aQ(a).gbB(a)},
nz:function(a){return J.aQ(a).gdQ(a)},
l_:function(a){return J.eh(a).gG(a)},
aB:function(a){return J.i_(a).gP(a)},
aS:function(a){return J.cw(a).gl(a)},
lK:function(a){return J.i_(a).ij(a)},
nA:function(a,b){return J.aQ(a).il(a,b)},
nB:function(a){return J.qc(a).iw(a)},
cy:function(a){return J.eh(a).i(a)},
a:function a(){},
eH:function eH(){},
cX:function cX(){},
bj:function bj(){},
f4:function f4(){},
bO:function bO(){},
aY:function aY(){},
w:function w(a){this.$ti=a},
iI:function iI(a){this.$ti=a},
ah:function ah(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c2:function c2(){},
cW:function cW(){},
eI:function eI(){},
bi:function bi(){}},P={
oy:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.q1()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.ct(new P.k_(q),1)).observe(s,{childList:true})
return new P.jZ(q,s,r)}else if(self.setImmediate!=null)return P.q2()
return P.q3()},
oz:function(a){self.scheduleImmediate(H.ct(new P.k0(a),0))},
oA:function(a){self.setImmediate(H.ct(new P.k1(a),0))},
oB:function(a){P.li(C.m,a)},
li:function(a,b){var s=C.c.a9(a.a,1000)
return P.oL(s<0?0:s,b)},
mg:function(a,b){var s=C.c.a9(a.a,1000)
return P.oM(s<0?0:s,b)},
oL:function(a,b){var s=new P.e3()
s.eR(a,b)
return s},
oM:function(a,b){var s=new P.e3()
s.eS(a,b)
return s},
rn:function(a){return new P.co(a,1)},
oE:function(){return C.a5},
oF:function(a){return new P.co(a,3)},
pv:function(a,b){return new P.e0(a,b.K("e0<0>"))},
pR:function(){var s,r
for(s=$.cr;s!=null;s=$.cr){$.ee=null
r=s.b
$.cr=r
if(r==null)$.ed=null
s.a.$0()}},
pX:function(){$.lx=!0
try{P.pR()}finally{$.ee=null
$.lx=!1
if($.cr!=null)$.lI().$1(P.mX())}},
pV:function(a){var s=new P.fS(a),r=$.ed
if(r==null){$.cr=$.ed=s
if(!$.lx)$.lI().$1(P.mX())}else $.ed=r.b=s},
pW:function(a){var s,r,q,p=$.cr
if(p==null){P.pV(a)
$.ee=$.ed
return}s=new P.fS(a)
r=$.ee
if(r==null){s.b=p
$.cr=$.ee=s}else{q=r.b
s.b=q
$.ee=r.b=s
if(q==null)$.ed=s}},
mf:function(a,b){var s=$.aP
if(s===C.f)return P.li(a,b)
return P.li(a,s.hC(b))},
os:function(a,b){var s=$.aP
if(s===C.f)return P.mg(a,b)
return P.mg(a,s.dM(b,t.aF))},
mT:function(a,b,c,d,e){P.pW(new P.kA(d,e))},
pS:function(a,b,c,d){var s,r=$.aP
if(r===c)return d.$0()
$.aP=c
s=r
try{r=d.$0()
return r}finally{$.aP=s}},
pT:function(a,b,c,d,e){var s,r=$.aP
if(r===c)return d.$1(e)
$.aP=c
s=r
try{r=d.$1(e)
return r}finally{$.aP=s}},
k_:function k_(a){this.a=a},
jZ:function jZ(a,b,c){this.a=a
this.b=b
this.c=c},
k0:function k0(a){this.a=a},
k1:function k1(a){this.a=a},
e3:function e3(){this.c=0},
ki:function ki(a,b){this.a=a
this.b=b},
kh:function kh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
co:function co(a,b){this.a=a
this.b=b},
bP:function bP(a){var _=this
_.a=a
_.d=_.c=_.b=null},
e0:function e0(a,b){this.a=a
this.$ti=b},
fS:function fS(a){this.a=a
this.b=null},
cd:function cd(){},
fm:function fm(){},
kp:function kp(){},
kA:function kA(a,b){this.a=a
this.b=b},
k6:function k6(){},
k7:function k7(a,b){this.a=a
this.b=b},
k8:function k8(a,b,c){this.a=a
this.b=b
this.c=c},
nY:function(a,b){return new H.T(a.K("@<0>").bj(b).K("T<1,2>"))},
nZ:function(a,b,c){return H.qa(a,new H.T(b.K("@<0>").bj(c).K("T<1,2>")))},
R:function(a,b){return new H.T(a.K("@<0>").bj(b).K("T<1,2>"))},
d0:function(a){return new P.dP(a.K("dP<0>"))},
lm:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oG:function(a,b){var s=new P.dQ(a,b)
s.c=a.e
return s},
nS:function(a,b,c){var s,r
if(P.ly(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.b([],t.s)
$.aj.push(a)
try{P.pu(a,s)}finally{if(0>=$.aj.length)return H.d($.aj,-1)
$.aj.pop()}r=P.md(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
l5:function(a,b,c){var s,r
if(P.ly(a))return b+"..."+c
s=new P.V(b)
$.aj.push(a)
try{r=s
r.a=P.md(r.a,a,", ")}finally{if(0>=$.aj.length)return H.d($.aj,-1)
$.aj.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
ly:function(a){var s,r
for(s=$.aj.length,r=0;r<s;++r)if(a===$.aj[r])return!0
return!1},
pu:function(a,b){var s,r,q,p,o,n,m,l=a.gP(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.v())return
s=H.x(l.gC(l))
b.push(s)
k+=s.length+2;++j}if(!l.v()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gC(l);++j
if(!l.v()){if(j<=4){b.push(H.x(p))
return}r=H.x(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gC(l);++j
for(;l.v();p=o,o=n){n=l.gC(l);++j
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
o_:function(a,b,c){var s=P.nY(b,c)
a.F(0,new P.iM(s,b,c))
return s},
m_:function(a,b){var s,r,q=P.d0(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)q.n(0,b.a(a[r]))
return q},
lc:function(a){var s,r={}
if(P.ly(a))return"{...}"
s=new P.V("")
try{$.aj.push(a)
s.a+="{"
r.a=!0
J.em(a,new P.iQ(r,s))
s.a+="}"}finally{if(0>=$.aj.length)return H.d($.aj,-1)
$.aj.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dP:function dP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
k5:function k5(a){this.a=a
this.c=this.b=null},
dQ:function dQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cV:function cV(){},
iM:function iM(a,b,c){this.a=a
this.b=b
this.c=c},
d1:function d1(){},
j:function j(){},
d4:function d4(){},
iQ:function iQ(a,b){this.a=a
this.b=b},
J:function J(){},
hL:function hL(){},
d5:function d5(){},
cj:function cj(a,b){this.a=a
this.$ti=b},
dm:function dm(){},
dX:function dX(){},
dR:function dR(){},
e8:function e8(){},
ea:function ea(){},
ov:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.ow(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
ow:function(a,b,c,d){var s=a?$.nm():$.nl()
if(s==null)return null
if(0===c&&d===b.length)return P.mm(s,b)
return P.mm(s,b.subarray(c,P.bo(c,d,b.length)))},
mm:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.ak(r)}return null},
lN:function(a,b,c,d,e,f){if(C.c.bw(f,4)!==0)throw H.c(P.a8("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a8("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a8("Invalid base64 padding, more than two '=' characters",a,b))},
pb:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
pa:function(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.cw(a),r=0;r<p;++r){q=s.h(a,b+r)
o[r]=(q&4294967040)>>>0!==0?255:q}return o},
jP:function jP(){},
jO:function jO(){},
i8:function i8(){},
i9:function i9(){},
et:function et(){},
ev:function ev(){},
it:function it(){},
iG:function iG(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
iF:function iF(a){this.a=a},
jM:function jM(){},
jQ:function jQ(){},
kn:function kn(a){this.b=0
this.c=a},
jN:function jN(a){this.a=a},
km:function km(a){this.a=a
this.b=16
this.c=0},
kI:function(a,b){var s=H.m4(a,b)
if(s!=null)return s
throw H.c(P.a8(a,null,null))},
nQ:function(a){if(a instanceof H.bC)return a.i(0)
return"Instance of '"+H.dk(a)+"'"},
eP:function(a,b,c,d){var s,r=c?J.l7(a,d):J.nU(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
iN:function(a,b,c){var s,r=H.b([],c.K("w<0>"))
for(s=J.aB(a);s.v();)r.push(s.gC(s))
if(b)return r
return J.l8(r)},
o0:function(a,b,c){var s,r,q=J.l7(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
fo:function(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=P.bo(b,c,r)
return H.m5(b>0||c<r?s.slice(b,c):s)}if(t.bm.b(a))return H.og(a,b,P.bo(b,c,a.length))
return P.op(a,b,c)},
op:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.a5(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.a5(c,b,a.length,o,o))
r=J.aB(a)
for(q=0;q<b;++q)if(!r.v())throw H.c(P.a5(b,0,q,o,o))
p=[]
if(s)for(;r.v();)p.push(r.gC(r))
else for(q=b;q<c;++q){if(!r.v())throw H.c(P.a5(c,b,q,o,o))
p.push(r.gC(r))}return H.m5(p)},
oh:function(a){return new H.eJ(a,H.nX(a,!1,!0,!1,!1,!1))},
md:function(a,b,c){var s=J.aB(b)
if(!s.v())return a
if(c.length===0){do a+=H.x(s.gC(s))
while(s.v())}else{a+=H.x(s.gC(s))
for(;s.v();)a=a+c+H.x(s.gC(s))}return a},
mj:function(){var s=H.o7()
if(s!=null)return P.ou(s)
throw H.c(P.C("'Uri.base' is not supported"))},
kl:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.ns().b
s=s.test(b)}else s=!1
if(s)return b
r=c.ghQ().cn(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.au(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
nM:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
nN:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ey:function(a){if(a>=10)return""+a
return"0"+a},
lR:function(a){return new P.bD(1000*a)},
iw:function(a){if(typeof a=="number"||H.kx(a)||null==a)return J.cy(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nQ(a)},
i3:function(a){return new P.ep(a)},
bT:function(a){return new P.aC(!1,null,null,a)},
fa:function(a,b){return new P.dl(null,null,!0,a,b,"Value not in range")},
a5:function(a,b,c,d,e){return new P.dl(b,c,!0,a,d,"Invalid value")},
bo:function(a,b,c){if(0>a||a>c)throw H.c(P.a5(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.a5(b,a,c,"end",null))
return b}return c},
m6:function(a,b){if(a<0)throw H.c(P.a5(a,0,null,b,null))
return a},
M:function(a,b,c,d,e){var s=e==null?J.aS(b):e
return new P.eF(s,!0,a,c,"Index out of range")},
C:function(a){return new P.fL(a)},
jF:function(a){return new P.fI(a)},
lg:function(a){return new P.cc(a)},
aH:function(a){return new P.eu(a)},
f:function(a){return new P.h5(a)},
a8:function(a,b,c){return new P.iB(a,b,c)},
lG:function(a){H.qp(a)},
ou:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.E(a5,4)^58)*3|C.a.E(a5,0)^100|C.a.E(a5,1)^97|C.a.E(a5,2)^116|C.a.E(a5,3)^97)>>>0
if(s===0)return P.mi(a4<a4?C.a.u(a5,0,a4):a5,5,a3).gex()
else if(s===32)return P.mi(C.a.u(a5,5,a4),0,a3).gex()}r=P.eP(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.mU(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(P.mU(a5,0,q,20,r)===20)r[7]=q
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
k=!1}else{if(!(m<a4&&m===n+2&&C.a.ai(a5,"..",n)))h=m>n+2&&C.a.ai(a5,"/..",m-3)
else h=!0
if(h){j=a3
k=!1}else{if(q===4)if(C.a.ai(a5,"file",0)){if(p<=0){if(!C.a.ai(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+C.a.u(a5,n,a4)
q-=0
i=s-0
m+=i
l+=i
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=C.a.ba(a5,n,m,"/");++a4
m=f}j="file"}else if(C.a.ai(a5,"http",0)){if(i&&o+3===n&&C.a.ai(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=C.a.ba(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&C.a.ai(a5,"https",0)){if(i&&o+4===n&&C.a.ai(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=C.a.ba(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}else j=a3
if(k){if(a4<a5.length){a5=C.a.u(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new P.hq(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=P.p4(a5,0,q)
else{if(q===0)P.cp(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?P.p5(a5,d,p-1):""
b=P.p1(a5,p,o,!1)
i=o+1
if(i<n){a=H.m4(C.a.u(a5,i,n),a3)
a0=P.p3(a==null?H.h(P.a8("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.p2(a5,n,m,a3,j,b!=null)
a2=m<l?P.lt(a5,m+1,l,a3):a3
return new P.bQ(j,c,b,a0,a1,a2,l<a4?P.p0(a5,l+1,a4):a3)},
ml:function(a){var s=t.N
return C.b.hV(H.b(a.split("&"),t.s),P.R(s,s),new P.jK(C.e))},
ot:function(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jH(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=C.a.X(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=P.kI(C.a.u(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(q>=4)return H.d(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=P.kI(C.a.u(a,r,c),null)
if(o>255)k.$2(l,r)
if(q>=4)return H.d(j,q)
j[q]=o
return j},
mk:function(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.jI(a),c=new P.jJ(d,a)
if(a.length<2)d.$1("address is too short")
s=H.b([],t.t)
for(r=b,q=r,p=!1,o=!1;r<a0;++r){n=C.a.X(a,r)
if(n===58){if(r===b){++r
if(C.a.X(a,r)!==58)d.$2("invalid start colon.",r)
q=r}if(r===q){if(p)d.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(c.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)d.$1("too few parts")
m=q===a0
l=C.b.gaF(s)
if(m&&l!==-1)d.$2("expected a part after last `:`",a0)
if(!m)if(!o)s.push(c.$2(q,a0))
else{k=P.ot(a,q,a0)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)d.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)d.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){if(h<0||h>=16)return H.d(j,h)
j[h]=0
e=h+1
if(e>=16)return H.d(j,e)
j[e]=0
h+=2}else{e=C.c.b1(g,8)
if(h<0||h>=16)return H.d(j,h)
j[h]=e
e=h+1
if(e>=16)return H.d(j,e)
j[e]=g&255
h+=2}}return j},
mH:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cp:function(a,b,c){throw H.c(P.a8(c,a,b))},
p3:function(a,b){if(a!=null&&a===P.mH(b))return null
return a},
p1:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.X(a,b)===91){s=c-1
if(C.a.X(a,s)!==93)P.cp(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.oZ(a,r,s)
if(q<s){p=q+1
o=P.mM(a,C.a.ai(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mk(a,r,q)
return C.a.u(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.X(a,n)===58){q=C.a.bD(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mM(a,C.a.ai(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mk(a,b,q)
return"["+C.a.u(a,b,q)+o+"]"}return P.p7(a,b,c)},
oZ:function(a,b,c){var s=C.a.bD(a,"%",b)
return s>=b&&s<c?s:c},
mM:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.V(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.X(a,s)
if(p===37){o=P.lu(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.V("")
m=i.a+=C.a.u(a,r,s)
if(n)o=C.a.u(a,s,s+3)
else if(o==="%")P.cp(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.V("")
if(r<s){i.a+=C.a.u(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.X(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=C.a.u(a,r,s)
if(i==null){i=new P.V("")
n=i}else n=i
n.a+=j
n.a+=P.ls(p)
s+=k
r=s}}}if(i==null)return C.a.u(a,b,c)
if(r<c)i.a+=C.a.u(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
p7:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.X(a,s)
if(o===37){n=P.lu(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.V("")
l=C.a.u(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.u(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.d(C.y,m)
m=(C.y[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.V("")
if(r<s){q.a+=C.a.u(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.d(C.j,m)
m=(C.j[m]&1<<(o&15))!==0}else m=!1
if(m)P.cp(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.X(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=C.a.u(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.V("")
m=q}else m=q
m.a+=l
m.a+=P.ls(o)
s+=j
r=s}}}}if(q==null)return C.a.u(a,b,c)
if(r<c){l=C.a.u(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
p4:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.mJ(C.a.E(a,b)))P.cp(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.E(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.d(C.l,p)
p=(C.l[p]&1<<(q&15))!==0}else p=!1
if(!p)P.cp(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.u(a,b,c)
return P.oY(r?a.toLowerCase():a)},
oY:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
p5:function(a,b,c){return P.e9(a,b,c,C.Z,!1)},
p2:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.e9(a,b,c,C.z,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a2(s,"/"))s="/"+s
return P.p6(s,e,f)},
p6:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a2(a,"/"))return P.p8(a,!s||c)
return P.p9(a)},
lt:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.bT("Both query and queryParameters specified"))
return P.e9(a,b,c,C.k,!0)}if(d==null)return null
s=new P.V("")
r.a=""
d.F(0,new P.kj(new P.kk(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
p0:function(a,b,c){return P.e9(a,b,c,C.k,!0)},
lu:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.X(a,b+1)
r=C.a.X(a,n)
q=H.kE(s)
p=H.kE(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.b1(o,4)
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.au(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.u(a,b,b+3).toUpperCase()
return null},
ls:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=C.a.E(k,a>>>4)
s[2]=C.a.E(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=C.c.hn(a,6*q)&63|r
if(o>=p)return H.d(s,o)
s[o]=37
m=o+1
l=C.a.E(k,n>>>4)
if(m>=p)return H.d(s,m)
s[m]=l
l=o+2
m=C.a.E(k,n&15)
if(l>=p)return H.d(s,l)
s[l]=m
o+=3}}return P.fo(s,0,null)},
e9:function(a,b,c,d,e){var s=P.mL(a,b,c,d,e)
return s==null?C.a.u(a,b,c):s},
mL:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.X(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.d(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lu(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.d(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.cp(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.X(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=P.ls(o)}}if(p==null){p=new P.V("")
n=p}else n=p
n.a+=C.a.u(a,q,r)
n.a+=H.x(m)
if(typeof l!=="number")return H.qg(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.u(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mK:function(a){if(C.a.a2(a,"."))return!0
return C.a.ee(a,"/.")!==-1},
p9:function(a){var s,r,q,p,o,n,m
if(!P.mK(a))return a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.a7(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.d(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
p8:function(a,b){var s,r,q,p,o,n
if(!P.mK(a))return!b?P.mI(a):a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gaF(s)!==".."){if(0>=s.length)return H.d(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.d(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gaF(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.d(s,0)
r=P.mI(s[0])
if(0>=s.length)return H.d(s,0)
s[0]=r}return C.b.j(s,"/")},
mI:function(a){var s,r,q,p=a.length
if(p>=2&&P.mJ(C.a.E(a,0)))for(s=1;s<p;++s){r=C.a.E(a,s)
if(r===58)return C.a.u(a,0,s)+"%3A"+C.a.al(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.d(C.l,q)
q=(C.l[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
p_:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.E(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.bT("Invalid URL encoding"))}}return s},
lv:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.E(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.u(a,b,c)
else p=new H.r(C.a.u(a,b,c))}else{p=H.b([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.E(a,o)
if(r>127)throw H.c(P.bT("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.bT("Truncated URI"))
p.push(P.p_(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a4.cn(p)},
mJ:function(a){var s=a|32
return 97<=s&&s<=122},
mi:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.b([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.E(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.a8(k,a,r))}}if(q<0&&r>b)throw H.c(P.a8(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.E(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaF(j)
if(p!==44||r!==n+7||!C.a.ai(a,"base64",n+1))throw H.c(P.a8("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.I.i3(0,a,m,s)
else{l=P.mL(a,m,s,C.k,!0)
if(l!=null)a=C.a.ba(a,m,s,l)}return new P.jG(a,j,c)},
pf:function(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="?",i="#",h=H.b(new Array(22),t.gN)
for(s=0;s<22;++s)h[s]=new Uint8Array(96)
r=new P.ku(h)
q=new P.kv()
p=new P.kw()
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
mU:function(a,b,c,d,e){var s,r,q,p,o,n,m=$.nt()
for(s=m.length,r=b;r<c;++r){if(d<0||d>=s)return H.d(m,d)
q=m[d]
p=C.a.E(a,r)^96
o=q[p>95?31:p]
d=o&31
n=o>>>5
if(n>=8)return H.d(e,n)
e[n]=r}return d},
X:function X(a,b){this.a=a
this.b=b},
bD:function bD(a){this.a=a},
ip:function ip(){},
iq:function iq(){},
I:function I(){},
ep:function ep(a){this.a=a},
fC:function fC(){},
f_:function f_(){},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dl:function dl(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eF:function eF(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fL:function fL(a){this.a=a},
fI:function fI(a){this.a=a},
cc:function cc(a){this.a=a},
eu:function eu(a){this.a=a},
f2:function f2(){},
ds:function ds(){},
ew:function ew(a){this.a=a},
h5:function h5(a){this.a=a},
iB:function iB(a,b,c){this.a=a
this.b=b
this.c=c},
i:function i(){},
eG:function eG(){},
aa:function aa(){},
N:function N(){},
V:function V(a){this.a=a},
jK:function jK(a){this.a=a},
jH:function jH(a){this.a=a},
jI:function jI(a){this.a=a},
jJ:function jJ(a,b){this.a=a
this.b=b},
bQ:function bQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
kk:function kk(a,b){this.a=a
this.b=b},
kj:function kj(a){this.a=a},
jG:function jG(a,b,c){this.a=a
this.b=b
this.c=c},
ku:function ku(a){this.a=a},
kv:function kv(){},
kw:function kw(){},
hq:function hq(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fY:function fY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
q7:function(a){var s,r,q,p
if(t.I.b(a)){s=J.nz(a)
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
return new P.e5(r,q,p)},
q6:function(a){if(a instanceof P.e5)return{data:a.a,height:a.b,width:a.c}
return a},
bv:function(a){var s,r,q,p,o
if(a==null)return null
s=P.R(t.N,t.A)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
mP:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.kx(a))return a
if(t.f.b(a))return P.mY(a)
if(t.aH.b(a)){s=[]
J.em(a,new P.ks(s))
a=s}return a},
mY:function(a){var s={}
J.em(a,new P.kB(s))
return s},
kc:function kc(){},
ke:function ke(a,b){this.a=a
this.b=b},
kf:function kf(a,b){this.a=a
this.b=b},
e5:function e5(a,b,c){this.a=a
this.b=b
this.c=c},
ks:function ks(a){this.a=a},
kB:function kB(a){this.a=a},
kd:function kd(a,b){this.a=a
this.b=b},
eB:function eB(a,b){this.a=a
this.b=b},
iz:function iz(){},
iA:function iA(){},
ho:function ho(){},
ag:function ag(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aZ:function aZ(){},
eM:function eM(){},
b2:function b2(){},
f0:function f0(){},
jb:function jb(){},
ca:function ca(){},
fn:function fn(){},
o:function o(){},
b4:function b4(){},
fB:function fB(){},
hc:function hc(){},
hd:function hd(){},
hk:function hk(){},
hl:function hl(){},
hy:function hy(){},
hz:function hz(){},
hH:function hH(){},
hI:function hI(){},
i5:function i5(){},
er:function er(){},
i6:function i6(a){this.a=a},
es:function es(){},
bd:function bd(){},
f1:function f1(){},
fU:function fU(){},
c9:function c9(){},
fi:function fi(){},
hu:function hu(){},
hv:function hv(){}},W={
lL:function(){var s=document.createElement("a")
s.toString
return s},
l0:function(){var s=document.createElement("canvas")
s.toString
return s},
nP:function(a,b,c){var s=document.body
s.toString
s=new H.b8(new W.a6(C.q.at(s,a,b,c)),new W.ir(),t.ac.K("b8<j.E>"))
return t.h.a(s.gaT(s))},
is:function(a){return"wheel"},
cL:function(a){var s,r,q="element tag unavailable"
try{s=J.aQ(a)
s.geu(a)
q=s.geu(a)}catch(r){H.ak(r)}return q},
lY:function(a){var s=document.createElement("img")
s.src=a
return s},
nR:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.ak(s)}return q},
k4:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
my:function(a,b,c,d){var s=W.k4(W.k4(W.k4(W.k4(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
a1:function(a,b,c,d){var s=new W.dN(a,b,c==null?null:W.mV(new W.k2(c),t.aD),!1)
s.hu()
return s},
mx:function(a){var s=W.lL(),r=window
s=new W.cn(new W.k9(s,r.location))
s.eP(a)
return s},
oC:function(a,b,c,d){return!0},
oD:function(a,b,c,d){var s,r,q,p=d.a,o=p.a
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
mC:function(){var s=t.N,r=P.m_(C.A,s),q=H.b(["TEMPLATE"],t.s)
s=new W.hC(r,P.d0(s),P.d0(s),P.d0(s),null)
s.eQ(null,new H.d6(C.A,new W.kg(),t.dv),q,null)
return s},
mV:function(a,b){var s=$.aP
if(s===C.f)return a
return s.dM(a,b)},
v:function v(){},
i2:function i2(){},
en:function en(){},
eo:function eo(){},
bU:function bU(){},
bz:function bz(){},
bA:function bA(){},
bB:function bB(){},
cB:function cB(){},
aD:function aD(){},
ih:function ih(){},
H:function H(){},
cH:function cH(){},
ii:function ii(){},
as:function as(){},
aV:function aV(){},
ij:function ij(){},
ik:function ik(){},
il:function il(){},
bg:function bg(){},
im:function im(){},
cI:function cI(){},
cJ:function cJ(){},
ez:function ez(){},
io:function io(){},
fV:function fV(a,b){this.a=a
this.b=b},
D:function D(){},
ir:function ir(){},
l:function l(){},
e:function e(){},
al:function al(){},
bY:function bY(){},
eA:function eA(){},
eC:function eC(){},
aI:function aI(){},
iE:function iE(){},
bF:function bF(){},
bG:function bG(){},
c_:function c_(){},
c1:function c1(){},
bH:function bH(){},
iO:function iO(){},
j4:function j4(){},
c3:function c3(){},
eS:function eS(){},
j5:function j5(a){this.a=a},
eT:function eT(){},
j6:function j6(a){this.a=a},
aK:function aK(){},
eU:function eU(){},
an:function an(){},
a6:function a6(a){this.a=a},
t:function t(){},
dg:function dg(){},
aM:function aM(){},
f6:function f6(){},
fc:function fc(){},
ji:function ji(a){this.a=a},
fe:function fe(){},
aw:function aw(){},
fg:function fg(){},
aN:function aN(){},
fh:function fh(){},
aO:function aO(){},
fl:function fl(){},
jp:function jp(a){this.a=a},
ap:function ap(){},
bq:function bq(){},
dt:function dt(){},
fp:function fp(){},
fq:function fq(){},
ce:function ce(){},
ax:function ax(){},
ai:function ai(){},
fs:function fs(){},
ft:function ft(){},
jw:function jw(){},
ay:function ay(){},
bN:function bN(){},
fA:function fA(){},
jB:function jB(){},
b6:function b6(){},
jL:function jL(){},
fP:function fP(){},
br:function br(){},
cl:function cl(){},
cm:function cm(){},
fW:function fW(){},
dM:function dM(){},
h9:function h9(){},
dS:function dS(){},
ht:function ht(){},
hA:function hA(){},
fT:function fT(){},
h2:function h2(a){this.a=a},
l4:function l4(a,b){this.a=a
this.$ti=b},
dN:function dN(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
k2:function k2(a){this.a=a},
ll:function ll(a){this.$ti=a},
cn:function cn(a){this.a=a},
K:function K(){},
dh:function dh(a){this.a=a},
j9:function j9(a){this.a=a},
j8:function j8(a,b,c){this.a=a
this.b=b
this.c=c},
dY:function dY(){},
ka:function ka(){},
kb:function kb(){},
hC:function hC(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kg:function kg(){},
hB:function hB(){},
cP:function cP(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
k9:function k9(a,b){this.a=a
this.b=b},
hM:function hM(a){this.a=a
this.b=0},
ko:function ko(a){this.a=a},
fX:function fX(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(){},
h1:function h1(){},
h6:function h6(){},
h7:function h7(){},
ha:function ha(){},
hb:function hb(){},
he:function he(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
hj:function hj(){},
hm:function hm(){},
hn:function hn(){},
hp:function hp(){},
dZ:function dZ(){},
e_:function e_(){},
hr:function hr(){},
hs:function hs(){},
hx:function hx(){},
hD:function hD(){},
hE:function hE(){},
e1:function e1(){},
e2:function e2(){},
hF:function hF(){},
hG:function hG(){},
hN:function hN(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(){},
hR:function hR(){},
hS:function hS(){},
hT:function hT(){},
hU:function hU(){},
hV:function hV(){},
hW:function hW(){}},K={
O:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.f("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.E(a,0)
r=C.a.E(b,0)
if(s>r){q=r
r=s
s=q}return new K.f9(s,r)},
aT:function aT(){},
cU:function cU(){},
af:function af(a){this.a=a},
f9:function f9(a,b){this.a=a
this.b=b},
u:function u(a){this.a=a},
qn:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="testCanvas",a3=null,a4="blurValue",a5="modifiers",a6=34067,a7=V.ok("Test 041"),a8=W.l0()
a8.className="pageLargeCanvas"
a8.id=a2
a7.a.appendChild(a8).toString
s=t.s
a7.dG(H.b(["Test of the Gaussian blur technique with a solid blur value for the whole image."],s))
a7.hw(H.b(["blurValue"],s))
a7.dG(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(a2)
if(r==null)H.h(P.f("Failed to find an element with the identifier, testCanvas."))
q=E.or(r,!0,!0,!0,!1)
p=new U.bZ(V.am(),H.b([],t.eJ))
p.bf(p.gfi(),p.gfZ())
o=q.x
n=U.ig()
m=U.ig()
l=$.az
if(l==null)l=$.az=new V.Y(0,0)
l=new U.dI(n,m,new X.a9(!1,!1,!1),l,V.am())
n.scU(0,!0)
n.scJ(6.283185307179586)
n.scL(0)
n.san(0,0)
n.scK(100)
n.sa0(0)
n.scp(0.5)
k=l.gb_()
n.gt().n(0,k)
m.scU(0,!0)
m.scJ(6.283185307179586)
m.scL(0)
m.san(0,0)
m.scK(100)
m.sa0(0)
m.scp(0.5)
m.gt().n(0,k)
n=new X.a9(!1,!1,!1)
if(!l.d.q(0,n)){j=l.d
l.d=n
l.R(new D.A(a5,j,n))}l.bo(o)
p.n(0,l)
U.ig()
if($.az==null)$.az=new V.Y(0,0)
V.am()
n=U.ig()
m=$.az
if(m==null)m=$.az=new V.Y(0,0)
m=new U.dH(n,new X.a9(!1,!1,!1),m,V.am())
n.scU(0,!0)
n.scJ(6.283185307179586)
n.scL(0)
n.san(0,0)
n.scK(100)
n.sa0(0)
n.scp(0.2)
n.gt().n(0,m.gb_())
n=new X.a9(!0,!1,!1)
if(!m.c.q(0,n)){j=m.c
m.c=n
m.R(new D.A(a5,j,n))}m.bo(o)
p.n(0,m)
n=new X.a9(!1,!1,!1)
m=new U.dJ(n,V.am())
l=new X.a9(!1,!1,!1)
if(!n.q(0,l)){m.b=l
m.R(new D.A(a5,n,l))}m.bo(o)
p.n(0,m)
i=V.b1(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
o=V.am()
n=new U.cD(o)
if(!o.q(0,i))n.a=i
p.n(0,n)
h=X.m2(p)
o=O.l1(t.gc)
g=new O.d7(o)
o.bf(g.gfm(),g.gfo())
o=g.dx
if(o==null){o=new D.cZ(H.b([],t.i),H.b([],t.U),H.b([],t.J),H.b([],t.D),H.b([],t.e))
o.cX(o.gfk(),o.gfX(),o.gh0())
o.gt().n(0,g.gdn())
o.gei().n(0,g.gaq())
g.dx=o}o.gt().n(0,g.gdn())
o.gei().n(0,g.gaq())
o=g.gdH()
o.sb5(0,new V.a2(0.3,0.3,0.3))
o=g.gcq()
o.sb5(0,new V.a2(0.8,0.8,0.8))
o=g.gcq()
n=q.f
m=n.i1("../resources/Test.png")
l=o.c
if(!l.b)o.dv(new A.aG(l.a,!0,!1))
l=o.d
if(l!==m){if(l!=null)l.gt().U(0,o.gaq())
j=o.d
o.d=m
m.gt().n(0,o.gaq())
o.a.M(new D.A(o.b+".texture2D",j,o.d))}f=X.lM(!0,!1)
o=O.l1(t.m)
e=new M.cM(o)
o.bf(e.gft(),e.gfv())
d=X.lV(a3)
e.sbp(a3)
e.sbb(0,d)
e.sbu(a3)
c=F.lf()
F.eb(c,a3,a3,1,1,1,0,0,1)
F.eb(c,a3,a3,1,1,0,1,0,3)
F.eb(c,a3,a3,1,1,0,0,1,2)
F.eb(c,a3,a3,1,1,-1,0,0,0)
F.eb(c,a3,a3,1,1,0,-1,0,0)
F.eb(c,a3,a3,1,1,0,0,-1,3)
c.aO()
o.n(0,E.lU(c))
e.sbu(g)
e.sbb(0,f)
e.sbp(h)
o=n.a
m=o.createTexture()
m.toString
o.bindTexture(a6,m)
o.texParameteri(a6,10242,10497)
o.texParameteri(a6,10243,10497)
o.texParameteri(a6,10241,9729)
o.texParameteri(a6,10240,9729)
o.bindTexture(a6,a3)
b=new T.fw(m)
n.aZ(b,m,"../resources/maskonaive/posx.jpg",34069,!1,!1)
n.aZ(b,m,"../resources/maskonaive/negx.jpg",34070,!1,!1)
n.aZ(b,m,"../resources/maskonaive/posy.jpg",34071,!1,!1)
n.aZ(b,m,"../resources/maskonaive/negy.jpg",34072,!1,!1)
n.aZ(b,m,"../resources/maskonaive/posz.jpg",34073,!1,!1)
n.aZ(b,m,"../resources/maskonaive/negz.jpg",34074,!1,!1)
a=M.l2(a3,a3)
o=new O.dq(new V.a2(1,1,1))
j=o.c
o.c=b
b.gt().n(0,o.gaq())
o.M(new D.A("boxTexture",j,o.c))
a.sbu(o)
a.sbb(0,f)
a.sbp(h)
o=X.lM(!0,!1)
a0=new M.cR(o)
n=O.lX(a3,a3)
m=a0.gV()
n.gt().n(0,m)
a0.d=n
a0.e=M.l2(o,n)
n=$.mn
if(n==null)n=$.mn=new V.Y(0,1)
o=O.lX(n,o.ch)
o.gt().n(0,m)
a0.f=o
a0.r=M.l2(a3,o)
a0.sb3(0)
o=a0.d
if(o!=null)o.sdP(f.ch)
o=a0.r
if(o!=null)o.sbb(0,a3)
o=t.ba
n=H.b([a,e,a0],o)
o=new M.cC(H.b([],o))
o.bf(o.gh2(),o.gh4())
o.ac(0,n)
n=q.d
if(n!==o){if(n!=null)n.gt().U(0,q.gd4())
q.d=o
o.gt().n(0,q.gd4())
q.d5()}a1=new K.kK(a0)
r=s.getElementById(a4)
if(r==null)H.h(P.f("Failed to find blurValue for RadioGroup"))
s=new V.jc(a4,!0,r)
s.dE(0,"0.0",new K.kL(a1),!0)
s.ar(0,"0.1",new K.kM(a1))
s.ar(0,"0.2",new K.kP(a1))
s.ar(0,"0.3",new K.kQ(a1))
s.ar(0,"0.4",new K.kR(a1))
s.ar(0,"0.5",new K.kS(a1))
s.ar(0,"0.6",new K.kT(a1))
s.ar(0,"0.7",new K.kU(a1))
s.ar(0,"0.8",new K.kV(a1))
s.ar(0,"0.9",new K.kW(a1))
s.ar(0,"1.0",new K.kN(a1))
s=q.Q
if(s==null)s=q.Q=D.F()
o=s.b
s=o==null?s.b=H.b([],t.a):o
s.push(new K.kO(a7,a0))
V.qq(q)},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
kM:function kM(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a){this.a=a},
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
kV:function kV(a){this.a=a},
kW:function kW(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a,b){this.a=a
this.b=b}},L={
jz:function(){var s=t.N
return new L.jy(P.R(s,t.dl),P.R(s,t.f7),P.d0(s))},
fj:function fj(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
fy:function fy(a,b,c){this.a=a
this.b=b
this.c=c},
fz:function fz(a,b){this.b=a
this.c=b},
jy:function jy(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dv:function dv(a,b){this.b=a
this.c=!1
this.a=b}},O={
l1:function(a){return new O.ae(H.b([],a.K("w<0>")),a.K("ae<0>"))},
ae:function ae(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
dc:function dc(a){this.a=a
this.b=null},
lX:function(a,b){var s,r=V.ld(),q=V.mt(),p=$.az
r=new O.cT(r,q,p==null?$.az=new V.Y(0,0):p)
q=V.ld()
r.sis(q)
q=V.mt()
r.shD(q)
if(a==null){q=$.az
if(q==null){q=new V.Y(0,0)
$.az=q}}else q=a
if(!r.d.q(0,q)){s=r.d
r.d=q
r.M(new D.A("blurDirection",s,q))}r.sdP(b)
r.shE(null)
r.sb3(0)
return r},
eR:function(a,b){return new O.da(new V.a2(0,0,0),a,b,new A.aG(!1,!1,!1))},
cT:function cT(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.f=_.e=null
_.r=0
_.x=null},
d7:function d7(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
iX:function iX(a,b){this.a=a
this.b=b},
iY:function iY(){},
iZ:function iZ(a,b){this.a=a
this.b=b},
j_:function j_(){},
j0:function j0(a,b){this.a=a
this.b=b},
j1:function j1(){},
j2:function j2(a,b){this.a=a
this.b=b},
j3:function j3(){},
iR:function iR(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
d9:function d9(){},
iS:function iS(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
da:function da(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
iU:function iU(a){this.b=a},
iV:function iV(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
iW:function iW(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
dq:function dq(a){var _=this
_.c=_.a=null
_.d=a
_.e=null},
bL:function bL(){}},E={
lU:function(a){var s=O.l1(t.m),r=new E.bE(s)
s.bf(r.gi4(),r.gi7())
r.scZ(0,a)
return r},
mu:function(){var s=window.navigator.vendor
s.toString
if(C.a.B(s,"Google"))return C.G
s=window.navigator.userAgent
s.toString
if(C.a.B(s,"Firefox"))return C.r
s=window.navigator.appVersion
s.toString
if(C.a.B(s,"Trident")||C.a.B(s,"Edge"))return C.t
s=window.navigator.appName
s.toString
if(C.a.B(s,"Microsoft"))return C.t
return C.H},
mv:function(){var s=window.navigator.appVersion
s.toString
if(C.a.B(s,"Win"))return C.a1
if(C.a.B(s,"Mac"))return C.B
if(C.a.B(s,"Linux"))return C.a2
return C.a3},
oi:function(a,b){var s
Date.now()
s=t.fA
s=new E.je(a,new P.X(Date.now(),!1),new P.X(Date.now(),!1),new O.dc(H.b([],s)),new O.dc(H.b([],s)),new O.dc(H.b([],s)),H.b([null],t.bc),P.R(t.N,t.fg))
s.eO(a,b)
return s},
or:function(a,b,c,d,e){var s,r
if(t.gA.b(a))return E.me(a,!0,!0,!0,!1)
s=W.l0()
r=s.style
r.width="100%"
r.height="100%"
J.ny(a).n(0,s)
return E.me(s,!0,!0,!0,!1)},
me:function(a,b,c,d,e){var s,r,q,p,o,n,m="mousemove",l=t.A,k=t.gW.a(C.i.cV(a,"webgl2",P.nZ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],l,l)))
if(k==null)throw H.c(P.f("Failed to get the rendering context for WebGL."))
s=E.oi(k,a)
l=H.hY(k.getParameter(3379))
r=H.hY(k.getParameter(34076))
q=H.b([],t.g9)
p=$.iu
o=new X.fN(a,q,(p==null?$.iu=new E.h3(E.mu(),E.mv()):p).a===C.r?0.16666666666666666:0.005555555555555556)
n=document
n.toString
q.push(W.a1(n,"contextmenu",o.gfz(),!1))
q.push(W.a1(a,"focus",o.gfF(),!1))
q.push(W.a1(a,"blur",o.gfq(),!1))
q.push(W.a1(n,"keyup",o.gfJ(),!1))
q.push(W.a1(n,"keydown",o.gfH(),!1))
q.push(W.a1(a,"mousedown",o.gfN(),!1))
q.push(W.a1(a,"mouseup",o.gfR(),!1))
q.push(W.a1(a,m,o.gfP(),!1))
W.is(a)
W.is(a)
q.push(W.a1(a,W.is(a),o.gfT(),!1))
q.push(W.a1(n,m,o.gfB(),!1))
q.push(W.a1(n,"mouseup",o.gfD(),!1))
q.push(W.a1(n,"pointerlockchange",o.gfV(),!1))
q.push(W.a1(a,"touchstart",o.gha(),!1))
q.push(W.a1(a,"touchend",o.gh6(),!1))
q.push(W.a1(a,"touchmove",o.gh8(),!1))
r=new E.fx(a,s,new T.js(k,l,r),o,new P.X(Date.now(),!1))
r.dr()
return r},
ia:function ia(){},
bE:function bE(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bW:function bW(a){this.b=a},
c7:function c7(a){this.b=a},
h3:function h3(a,b){this.a=a
this.b=b},
je:function je(a,b,c,d,e,f,g,h){var _=this
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
jf:function jf(a){this.a=a},
jg:function jg(a){this.a=a},
jh:function jh(a){this.a=a},
fx:function fx(a,b,c,d,e){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.x=d
_.Q=null
_.cx=!1
_.cy=e
_.db=0},
jv:function jv(a){this.a=a}},Z={
lk:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cq(c)),35044)
a.bindBuffer(b,null)
return new Z.fQ(b,s)},
aA:function(a){return new Z.b7(a)},
fQ:function fQ(a,b){this.a=a
this.b=b},
bX:function bX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dL:function dL(a){this.a=a},
be:function be(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c0:function c0(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(a){this.a=a}},D={
F:function(){return new D.cN()},
ic:function ic(){},
cN:function cN(){var _=this
_.c=_.b=_.a=null
_.d=0},
ix:function ix(a){this.a=a},
iy:function iy(a){this.a=a},
Q:function Q(){},
aW:function aW(){},
aX:function aX(){},
A:function A(a,b,c){this.c=a
this.d=b
this.e=c},
cZ:function cZ(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={cA:function cA(a,b){this.a=a
this.b=b},eL:function eL(a,b){this.a=a
this.b=b},iK:function iK(a,b){this.c=a
this.d=b},d3:function d3(a,b,c){this.x=a
this.c=b
this.d=c},iP:function iP(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},c4:function c4(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},j7:function j7(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},c5:function c5(a,b,c){this.x=a
this.c=b
this.d=c},f8:function f8(){},du:function du(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},jA:function jA(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},fN:function fN(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
lM:function(a,b){var s,r,q,p,o=T.lh(null)
o=new X.i7(o,new V.aF(0,0,0,1),V.le())
o.saA(0,512)
o.sau(0,512)
s=new V.aF(0,0,0,1)
if(!o.cx.q(0,s)){r=o.cx
o.cx=s
o.Z(new D.A("color",r,s))}if(o.cy){o.cy=!1
o.Z(new D.A("clearColor",!0,!1))}q=o.db
$.E().toString
if(!(Math.abs(q-2000)<1e-9)){o.db=2000
o.Z(new D.A("depth",q,2000))}if(!o.f){o.f=!0
o.Z(new D.A("autoResize",!1,!0))}q=o.r
$.E().toString
if(!(Math.abs(q-1)<1e-9)){o.r=1
o.Z(new D.A("autoResizeScalarX",q,1))}q=o.x
$.E().toString
if(!(Math.abs(q-1)<1e-9)){o.x=1
o.Z(new D.A("autoResizeScalarY",q,1))}p=V.le()
if(!o.dy.q(0,p)){r=o.dy
o.dy=p
o.Z(new D.A("region",r,p))}return o},
lV:function(a){var s=new V.aF(0,0,0,1),r=V.le()
return new X.iC(s,r)},
m2:function(a){var s,r,q=new X.f3(1.0471975511965976,0.1)
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gt().n(0,q.geT())
q.Z(new D.A("mover",s,q.b))}r=q.c
$.E().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
q.Z(new D.A("fov",r,1.0471975511965976))}r=q.d
$.E().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
q.Z(new D.A("near",r,0.1))}r=q.e
$.E().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
q.Z(new D.A("far",r,2000))}return q},
i7:function i7(a,b,c){var _=this
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
iC:function iC(a,b){this.a=a
this.r=b
this.x=null},
iH:function iH(){this.b=null},
f3:function f3(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
jr:function jr(){}},V={
id:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aF(s,r,q,1)},
lE:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
qw:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bw(a-b,s)
return(a<0?a+s:a)+b},
B:function(a,b,c){$.E().toString
return C.a.ax(C.d.cS(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cv:function(a,b,c){var s,r,q,p,o,n,m,l=H.b([],t.s)
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.q)(a),++p){o=a[p]
$.E().toString
n=C.a.ax(C.d.cS(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.d(l,m)
s=C.a.ax(l[m],q)
r=l.length
if(m>=r)return H.d(l,m)
l[m]=s}return l},
ej:function(a){return C.d.it(Math.pow(2,C.d.cE(Math.log(a)/Math.log(2))))},
ld:function(){var s=$.m0
return s==null?$.m0=new V.db(1,0,0,0,1,0,0,0,1):s},
am:function(){var s=$.m1
return s==null?$.m1=V.b1(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
b1:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bl(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
o5:function(){var s=$.b3
return s==null?$.b3=new V.a4(0,0,0):s},
le:function(){var s=$.m9
return s==null?$.m9=V.m8(0,0,1,1):s},
m8:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.fb(a,b,c,d)},
fO:function(){var s=$.mr
return s==null?$.mr=new V.L(0,0,0):s},
mo:function(a,b,c){return new V.L(a,b,c)},
ox:function(a){return new V.L(a.a,a.b,a.c)},
mt:function(){var s=$.ms
return s==null?$.ms=new V.dK(0,0,0,0):s},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iv:function iv(){},
db:function db(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bl:function bl(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
U:function U(a,b){this.a=a
this.b=b},
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
bm:function bm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fb:function fb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Y:function Y(a,b){this.a=a
this.b=b},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
dK:function dK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qq:function(a){P.os(C.S,new V.kY(a))},
ok:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.a1(n,"scroll",new V.jn(s),!1)
return new V.jl(o)},
aE:function aE(){},
kY:function kY(a){this.a=a},
ex:function ex(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
eD:function eD(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
eE:function eE(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
f5:function f5(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
jc:function jc(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jl:function jl(a){this.a=a
this.b=null},
jn:function jn(a){this.a=a},
jm:function jm(a){this.a=a},
jo:function jo(a){this.a=a}},U={
ig:function(){return new U.ie()},
ie:function ie(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
cD:function cD(a){this.a=a
this.b=null},
bZ:function bZ(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
Z:function Z(){},
dH:function dH(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.y=_.x=!1
_.z=0
_.Q=c
_.ch=0
_.cx=d
_.cy=null},
dI:function dI(a,b,c,d,e){var _=this
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
dJ:function dJ(a,b){var _=this
_.a=null
_.b=a
_.e=_.d=0
_.f=b
_.r=null}},M={
l2:function(a,b){var s,r,q,p,o=null,n=E.lU(o),m=new M.cG(n),l=F.lf(),k=l.ga8(),j=new V.L(-1,-1,1).S(),i=k.bA(new V.bm(1,2,4,6),V.id(255,0,0),new V.a4(-1,-1,0),new V.U(0,1),j,o)
j=l.ga8()
k=new V.L(1,-1,1).S()
s=j.bA(new V.bm(0,3,4,6),V.id(0,0,255),new V.a4(1,-1,0),new V.U(1,1),k,o)
k=l.ga8()
j=new V.L(1,1,1).S()
r=k.bA(new V.bm(0,2,5,6),V.id(0,128,0),new V.a4(1,1,0),new V.U(1,0),j,o)
j=l.ga8()
k=$.ab
if(k==null)k=$.ab=new V.U(0,0)
q=new V.L(-1,1,1).S()
p=j.bA(new V.bm(0,2,4,7),V.id(255,255,0),new V.a4(-1,1,0),k,q,o)
l.ga4().hy(H.b([i,s,r,p],t.k))
l.aO()
n.scZ(0,l)
m.sbp(o)
m.sbb(0,a)
m.sbu(b)
return m},
cC:function cC(a){var _=this
_.f=!1
_.r=null
_.a=a
_.c=_.b=null},
cG:function cG(a){var _=this
_.d=_.c=_.b=null
_.e=a
_.r=null},
cM:function cM(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null},
cR:function cR(a){var _=this
_.b=null
_.c=a
_.r=_.f=_.e=_.d=null}},A={
o2:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=""+"MaterialLight_"+a5.gaD(a5)+a6.gaD(a6)+a7.gaD(a7)+a8.gaD(a8)+a9.gaD(a9)+b0.gaD(b0)+b1.gaD(b1)+b2.gaD(b2)+b3.gaD(b3)+"_"
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
b=$.ar()
if(h){s=$.by()
b=new Z.b7(b.a|s.a)}if(g)b=new Z.b7(b.a|$.bx().a)
if(f)b=new Z.b7(b.a|$.aR().a)
if(e)b=new Z.b7(b.a|$.bw().a)
return new A.iT(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
ky:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kz:function(a,b,c){var s,r="Txt, txt2D).rgb;\n"
A.ky(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.i0(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}a.a=s+"}\n"},
pA:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.ky(b,r,"emission")
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
pw:function(a,b){var s,r=a.b
if(!(r.a||r.b||!1))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.kz(b,r,"ambient")
b.a+="\n"},
py:function(a,b){var s,r=a.c
if(!(r.a||r.b||!1))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.kz(b,r,"diffuse")
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
pB:function(a,b){var s,r=a.d
if(!(r.a||r.b||!1))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.kz(b,r,"invDiffuse")
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
pH:function(a,b){var s,r=a.e
if(!(r.a||r.b||!1))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.kz(b,r,"specular")
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
pD:function(a,b){var s,r,q
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
pF:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.ky(b,r,"reflect")
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
pG:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.ky(b,r,"refract")
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
px:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.i0(r)
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
pz:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+s
q=A.i0(r)
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
pE:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.i0(r)
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
pI:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.i0(r)
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
if(m){s=$.iu
if(s==null)s=$.iu=new E.h3(E.mu(),E.mv())
p=c.a
if(s.b===C.B){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
pC:function(a,b){var s,r
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
pJ:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.V(""),j=""+"precision mediump float;\n"
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
A.pA(a,k)
A.pw(a,k)
A.py(a,k)
A.pB(a,k)
A.pH(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.pF(a,k)
A.pG(a,k)}A.pD(a,k)
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
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.px(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pz(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pE(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pI(a,p[n],k)
A.pC(a,k)}p=k.a+="// === Main ===\n"
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
k.a+=l+(q[0].toUpperCase()+C.a.al(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.al(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.al(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.al(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}j=a.a
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
pK:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.b6+"];\n"
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
pM:function(a,b){var s
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
pL:function(a,b){var s
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
pO:function(a,b){var s,r
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
pP:function(a,b){var s,r
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
pN:function(a,b){var s
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
pQ:function(a,b){var s
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
i0:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.al(a,1)},
lj:function(a,b,c,d,e){var s=new A.fD(H.b([],t.t),a,c,e)
s.f=d
s.e=P.eP(d,0,!1,t.S)
return s},
eq:function eq(a,b,c){this.a=a
this.b=b
this.c=c},
i4:function i4(a){this.a=a},
aG:function aG(a,b,c){this.a=a
this.b=b
this.c=c},
cS:function cS(a,b,c){var _=this
_.x=a
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.a=b
_.b=c
_.d=_.c=""
_.r=_.f=_.e=null},
iD:function iD(a,b){this.a=a
this.b=b},
d8:function d8(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.iJ=_.e8=_.e7=_.iI=_.e6=_.e5=_.e4=_.iH=_.e3=_.e2=_.e1=_.iG=_.e0=_.e_=_.iF=_.dZ=_.dY=_.dX=_.b7=_.b6=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.ct=c
_.cu=d
_.cv=e
_.cw=f
_.cz=g
_.cA=h
_.cB=i
_.cC=j
_.iM=_.iL=_.iK=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
bc:function bc(a,b){this.a=a
this.b=b},
bf:function bf(a,b){this.a=a
this.b=b},
bn:function bn(a,b){this.a=a
this.b=b},
bp:function bp(a,b){this.a=a
this.b=b},
iT:function iT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.b6=b5
_.b7=b6
_.dX=b7},
dA:function dA(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dB:function dB(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dD:function dD(a,b,c,d,e,f,g,h,i,j){var _=this
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
dG:function dG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bK:function bK(){},
dr:function dr(a,b){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
a0:function a0(){},
jE:function jE(a){this.a=a},
cg:function cg(a,b,c){this.a=a
this.c=b
this.d=c},
fE:function fE(a,b,c){this.a=a
this.c=b
this.d=c},
fF:function fF(a,b,c){this.a=a
this.c=b
this.d=c},
fG:function fG(a,b,c){this.a=a
this.c=b
this.d=c},
fD:function fD(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
dw:function dw(a,b,c){this.a=a
this.c=b
this.d=c},
dx:function dx(a,b,c){this.a=a
this.c=b
this.d=c},
dy:function dy(a,b,c){this.a=a
this.c=b
this.d=c},
dz:function dz(a,b,c){this.a=a
this.c=b
this.d=c},
fH:function fH(a,b,c){this.a=a
this.c=b
this.d=c},
dC:function dC(a,b,c){this.a=a
this.c=b
this.d=c},
ch:function ch(a,b,c){this.a=a
this.c=b
this.d=c},
dE:function dE(a,b,c){this.a=a
this.c=b
this.d=c},
dF:function dF(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kt:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
eb:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.L(g,f+a2,e+a3)
i.a=d
s=a2-a3
r=a3-a4
q=a4-a2
p=i.b=new V.L(s+a4,r+a2,q+a3)
o=new V.L(s-a4,r-a2,q-a3)
i.c=o
n=i.d=new V.L(h-a4,f-a2,e-a3)
if(g>0){i.d=p
i.b=n
g=p
h=n}else{g=n
h=p}for(e=g,g=h,h=d,f=o,m=0;m<a5;++m,l=e,e=h,h=g,g=f,f=l){i.a=g
i.b=f
i.c=e
i.d=h}k=F.kt(h)
j=F.kt(g)
a.i2(F.qs(a0,a1,new F.kq(i,F.kt(f),F.kt(e),j,k,c),b))},
qs:function(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null
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
l=F.jR(d,d,new V.aF(m,0,0,1),d,d,new V.U(o,1),d,d,0)
n.n(0,l)
c.$3(l,o,0)
q.push(l.co(a0))}for(p=1;p<=a;++p){k=p/a
for(n=k>1,m=k<0,j=1-k,i=0;i<=b;++i){o=i/b
h=s.a
if(h==null)h=s.a=new F.y(s,H.b([],r))
if(o<0)g=0
else g=o>1?1:o
if(m)f=0
else f=n?1:k
if(m)e=0
else e=n?1:k
l=F.jR(d,d,new V.aF(g,f,e,1),d,d,new V.U(o,j),d,d,0)
h.n(0,l)
c.$3(l,o,k)
q.push(l.co(a0))}}s.ga4().hz(a+1,b+1,q)
return s},
lf:function(){return new F.jj()},
jR:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.ck()
h=$.nn()
s=$.ar()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.by().a)!==0)q.r=e
if((r&$.bx().a)!==0)q.x=b
if((r&$.aR().a)!==0)q.y=f
if((r&$.bS().a)!==0)q.z=g
if((r&$.no().a)!==0)q.Q=c
if((r&$.cx().a)!==0)q.ch=i
if((r&$.bw().a)!==0)q.cx=a
return q},
kq:function kq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
at:function at(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eN:function eN(){this.b=this.a=null},
f7:function f7(){this.a=null},
jj:function jj(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
jk:function jk(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dn:function dn(a,b){this.a=a
this.b=b},
dp:function dp(a,b){this.a=a
this.b=b},
cb:function cb(a,b){this.a=a
this.b=b},
ck:function ck(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
jY:function jY(a){this.a=a},
jX:function jX(a){this.a=a},
y:function y(a,b){this.a=a
this.b=!1
this.c=b},
jS:function jS(a,b,c){this.b=a
this.c=b
this.d=c},
jT:function jT(a,b){this.a=a
this.b=b},
jU:function jU(a,b){this.a=a
this.b=b},
jV:function jV(a,b){this.b=a
this.c=b},
jW:function jW(a){this.b=a}},T={
lh:function(a){return new T.fv(a)},
bM:function bM(){},
fu:function fu(){},
fv:function fv(a){var _=this
_.a=0
_.b=a
_.d=_.c=!1
_.x=_.r=_.f=_.e=0
_.y=null},
fw:function fw(a){var _=this
_.a=0
_.b=a
_.c=!1
_.d=0
_.e=null},
js:function js(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0},
ju:function ju(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jt:function jt(a,b,c,d,e,f,g){var _=this
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
H.l9.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gG:function(a){return H.dj(a)},
i:function(a){return"Instance of '"+H.dk(a)+"'"}}
J.eH.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iad:1}
J.cX.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.bj.prototype={
gG:function(a){return 0},
i:function(a){return String(a)},
$ilZ:1}
J.f4.prototype={}
J.bO.prototype={}
J.aY.prototype={
i:function(a){var s=a[$.n9()]
if(s==null)return this.eJ(a)
return"JavaScript function for "+J.cy(s)},
$icQ:1}
J.w.prototype={
U:function(a,b){var s
if(!!a.fixed$length)H.h(P.C("remove"))
for(s=0;s<a.length;++s)if(J.a7(a[s],b)){a.splice(s,1)
return!0}return!1},
ac:function(a,b){if(!!a.fixed$length)H.h(P.C("addAll"))
this.eW(a,b)
return},
eW:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.aH(a))
for(s=0;s<r;++s)a.push(b[s])},
F:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.aH(a))}},
j:function(a,b){var s,r,q=a.length,p=P.eP(q,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.x(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
i_:function(a){return this.j(a,"")},
hU:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.aH(a))}return s},
hV:function(a,b,c){return this.hU(a,b,c,t.A)},
hT:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.aH(a))}throw H.c(H.l6())},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
d0:function(a,b){var s=a.length
if(b>s)throw H.c(P.a5(b,0,s,"start",null))
if(b===s)return H.b([],H.hX(a))
return H.b(a.slice(b,s),H.hX(a))},
gaF:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.l6())},
dI:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.aH(a))}return!1},
bh:function(a,b){if(!!a.immutable$list)H.h(P.C("sort"))
H.on(a,b==null?J.pn():b)},
eF:function(a){return this.bh(a,null)},
B:function(a,b){var s
for(s=0;s<a.length;++s)if(J.a7(a[s],b))return!0
return!1},
i:function(a){return P.l5(a,"[","]")},
gP:function(a){return new J.ah(a,a.length)},
gG:function(a){return H.dj(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.h(P.C("set length"))
if(b>a.length)H.hX(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.cu(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.h(P.C("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cu(a,b))
a[b]=c},
$in:1,
$ii:1,
$ip:1}
J.iI.prototype={}
J.ah.prototype={
gC:function(a){return H.S(this).c.a(this.d)},
v:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.q(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.c2.prototype={
as:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbF(b)
if(this.gbF(a)===s)return 0
if(this.gbF(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbF:function(a){return a===0?1/a<0:a<0},
it:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.C(""+a+".toInt()"))},
cE:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.C(""+a+".floor()"))},
Y:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.C(""+a+".round()"))},
cS:function(a,b){var s
if(b>20)throw H.c(P.a5(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbF(a))return"-"+s
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
I:function(a,b){return a*b},
bw:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
eL:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dz(a,b)},
a9:function(a,b){return(a|0)===a?a/b|0:this.dz(a,b)},
dz:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.C("Result of truncating division is "+H.x(s)+": "+H.x(a)+" ~/ "+b))},
b1:function(a,b){var s
if(a>0)s=this.dw(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hn:function(a,b){if(b<0)throw H.c(H.eg(b))
return this.dw(a,b)},
dw:function(a,b){return b>31?0:a>>>b},
$iW:1,
$ia3:1}
J.cW.prototype={$ik:1}
J.eI.prototype={}
J.bi.prototype={
X:function(a,b){if(b<0)throw H.c(H.cu(a,b))
if(b>=a.length)H.h(H.cu(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.c(H.cu(a,b))
return a.charCodeAt(b)},
a1:function(a,b){return a+b},
ba:function(a,b,c,d){var s=P.bo(b,c,a.length),r=a.substring(0,b),q=a.substring(s)
return r+d+q},
ai:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a5(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a2:function(a,b){return this.ai(a,b,0)},
u:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fa(b,null))
if(b>c)throw H.c(P.fa(b,null))
if(c>a.length)throw H.c(P.fa(c,null))
return a.substring(b,c)},
al:function(a,b){return this.u(a,b,null)},
iw:function(a){return a.toLowerCase()},
I:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.P)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ax:function(a,b){var s=b-a.length
if(s<=0)return a
return this.I(" ",s)+a},
bD:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a5(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
ee:function(a,b){return this.bD(a,b,0)},
hG:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.a5(c,0,s,null,null))
return H.n5(a,b,c)},
B:function(a,b){return this.hG(a,b,0)},
as:function(a,b){var s
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
$im:1}
H.cY.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.r.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.X(this.a,b)}}
H.n.prototype={}
H.d2.prototype={
gP:function(a){return new H.bk(this,this.gl(this))},
bR:function(a,b){return this.eI(0,b)}}
H.bk.prototype={
gC:function(a){return H.S(this).c.a(this.d)},
v:function(){var s,r=this,q=r.a,p=J.cw(q),o=p.gl(q)
if(r.b!==o)throw H.c(P.aH(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.J(q,s);++r.c
return!0}}
H.b_.prototype={
gP:function(a){return new H.eQ(J.aB(this.a),this.b)},
gl:function(a){return J.aS(this.a)},
J:function(a,b){return this.b.$1(J.i1(this.a,b))}}
H.cK.prototype={$in:1}
H.eQ.prototype={
v:function(){var s=this,r=s.b
if(r.v()){s.a=s.c.$1(r.gC(r))
return!0}s.a=null
return!1},
gC:function(a){return H.S(this).Q[1].a(this.a)}}
H.d6.prototype={
gl:function(a){return J.aS(this.a)},
J:function(a,b){return this.b.$1(J.i1(this.a,b))}}
H.b8.prototype={
gP:function(a){return new H.fR(J.aB(this.a),this.b)}}
H.fR.prototype={
v:function(){var s,r
for(s=this.a,r=this.b;s.v();)if(r.$1(s.gC(s)))return!0
return!1},
gC:function(a){var s=this.a
return s.gC(s)}}
H.cO.prototype={}
H.fK.prototype={
m:function(a,b,c){throw H.c(P.C("Cannot modify an unmodifiable list"))}}
H.ci.prototype={}
H.cE.prototype={
i:function(a){return P.lc(this)},
m:function(a,b,c){H.nL()},
$iG:1}
H.cF.prototype={
gl:function(a){return this.a},
cm:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.cm(0,b))return null
return this.dg(b)},
dg:function(a){return this.b[a]},
F:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.dg(q))}}}
H.jC.prototype={
aw:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.di.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.eK.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.fJ.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.ja.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.hw.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bC.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.n7(r==null?"unknown":r)+"'"},
$icQ:1,
giz:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fr.prototype={}
H.fk.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.n7(s)+"'"}}
H.bV.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bV))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gG:function(a){var s,r=this.c
if(r==null)s=H.dj(this.a)
else s=typeof r!=="object"?J.l_(r):H.dj(r)
return(s^H.dj(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.x(this.d)+"' of "+("Instance of '"+H.dk(s)+"'")}}
H.fd.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.T.prototype={
gl:function(a){return this.a},
gbE:function(a){return this.a===0},
ga5:function(a){return new H.d_(this,H.S(this).K("d_<1>"))},
giy:function(a){var s=this,r=H.S(s)
return H.o1(s.ga5(s),new H.iJ(s),r.c,r.Q[1])},
cm:function(a,b){var s=this.b
if(s==null)return!1
return this.f4(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.by(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.by(p,b)
q=r==null?n:r.b
return q}else return o.hY(b)},
hY:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.dh(p,q.ef(a))
r=q.eg(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.d8(s==null?q.b=q.c9():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.d8(r==null?q.c=q.c9():r,b,c)}else q.hZ(b,c)},
hZ:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.c9()
s=p.ef(a)
r=p.dh(o,s)
if(r==null)p.cc(o,s,[p.ca(a,b)])
else{q=p.eg(r,a)
if(q>=0)r[q].b=b
else r.push(p.ca(a,b))}},
F:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.aH(s))
r=r.c}},
d8:function(a,b,c){var s=this.by(a,b)
if(s==null)this.cc(a,b,this.ca(b,c))
else s.b=c},
ff:function(){this.r=this.r+1&67108863},
ca:function(a,b){var s,r=this,q=new H.iL(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.ff()
return q},
ef:function(a){return J.l_(a)&0x3ffffff},
eg:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a7(a[r].a,b))return r
return-1},
i:function(a){return P.lc(this)},
by:function(a,b){return a[b]},
dh:function(a,b){return a[b]},
cc:function(a,b,c){a[b]=c},
f8:function(a,b){delete a[b]},
f4:function(a,b){return this.by(a,b)!=null},
c9:function(){var s="<non-identifier-key>",r=Object.create(null)
this.cc(r,s,r)
this.f8(r,s)
return r}}
H.iJ.prototype={
$1:function(a){var s=this.a
return H.S(s).Q[1].a(s.h(0,a))},
$S:function(){return H.S(this.a).K("2(1)")}}
H.iL.prototype={}
H.d_.prototype={
gl:function(a){return this.a.a},
gP:function(a){var s=this.a,r=new H.eO(s,s.r)
r.c=s.e
return r}}
H.eO.prototype={
gC:function(a){return H.S(this).c.a(this.d)},
v:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.aH(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kF.prototype={
$1:function(a){return this.a(a)},
$S:34}
H.kG.prototype={
$2:function(a,b){return this.a(a,b)},
$S:57}
H.kH.prototype={
$1:function(a){return this.a(a)},
$S:48}
H.eJ.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$im7:1}
H.dd.prototype={$idd:1}
H.a_.prototype={$ia_:1}
H.c6.prototype={
gl:function(a){return a.length},
$iz:1}
H.bI.prototype={
h:function(a,b){H.b9(b,a,a.length)
return a[b]},
m:function(a,b,c){H.b9(b,a,a.length)
a[b]=c},
$in:1,
$ii:1,
$ip:1}
H.de.prototype={
m:function(a,b,c){H.b9(b,a,a.length)
a[b]=c},
$in:1,
$ii:1,
$ip:1}
H.eV.prototype={
h:function(a,b){H.b9(b,a,a.length)
return a[b]}}
H.eW.prototype={
h:function(a,b){H.b9(b,a,a.length)
return a[b]}}
H.eX.prototype={
h:function(a,b){H.b9(b,a,a.length)
return a[b]}}
H.eY.prototype={
h:function(a,b){H.b9(b,a,a.length)
return a[b]}}
H.eZ.prototype={
h:function(a,b){H.b9(b,a,a.length)
return a[b]}}
H.df.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b9(b,a,a.length)
return a[b]}}
H.bJ.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b9(b,a,a.length)
return a[b]},
$ibJ:1,
$icf:1}
H.dT.prototype={}
H.dU.prototype={}
H.dV.prototype={}
H.dW.prototype={}
H.av.prototype={
K:function(a){return H.hK(v.typeUniverse,this,a)},
bj:function(a){return H.oW(v.typeUniverse,this,a)}}
H.h8.prototype={}
H.h4.prototype={
i:function(a){return this.a}}
H.e4.prototype={}
P.k_.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:47}
P.jZ.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:46}
P.k0.prototype={
$0:function(){this.a.$0()},
$S:10}
P.k1.prototype={
$0:function(){this.a.$0()},
$S:10}
P.e3.prototype={
eR:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ct(new P.ki(this,b),0),a)
else throw H.c(P.C("`setTimeout()` not found."))},
eS:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ct(new P.kh(this,a,Date.now(),b),0),a)
else throw H.c(P.C("Periodic timer."))},
$ijx:1}
P.ki.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:0}
P.kh.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.eL(s,o)}q.c=p
r.d.$1(q)},
$S:10}
P.co.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.x(this.a)+")"}}
P.bP.prototype={
gC:function(a){var s=this.c
if(s==null)return this.b
return s.gC(s)},
v:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.v())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.co){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aB(s)
if(o instanceof P.bP){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.e0.prototype={
gP:function(a){return new P.bP(this.a())}}
P.fS.prototype={}
P.cd.prototype={}
P.fm.prototype={}
P.kp.prototype={}
P.kA.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:0}
P.k6.prototype={
io:function(a){var s,r,q,p=null
try{if(C.f===$.aP){a.$0()
return}P.pS(p,p,this,a)}catch(q){s=H.ak(q)
r=H.lC(q)
P.mT(p,p,this,s,r)}},
ip:function(a,b){var s,r,q,p=null
try{if(C.f===$.aP){a.$1(b)
return}P.pT(p,p,this,a,b)}catch(q){s=H.ak(q)
r=H.lC(q)
P.mT(p,p,this,s,r)}},
iq:function(a,b){return this.ip(a,b,t.A)},
hC:function(a){return new P.k7(this,a)},
dM:function(a,b){return new P.k8(this,a,b)}}
P.k7.prototype={
$0:function(){return this.a.io(this.b)},
$S:0}
P.k8.prototype={
$1:function(a){return this.a.iq(this.b,a)},
$S:function(){return this.c.K("~(0)")}}
P.dP.prototype={
gP:function(a){var s=new P.dQ(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
B:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.f1(b)
return r}},
f1:function(a){var s=this.d
if(s==null)return!1
return this.c0(s[this.bX(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.d9(s==null?q.b=P.lm():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.d9(r==null?q.c=P.lm():r,b)}else return q.eV(0,b)},
eV:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.lm()
s=q.bX(b)
r=p[s]
if(r==null)p[s]=[q.bW(b)]
else{if(q.c0(r,b)>=0)return!1
r.push(q.bW(b))}return!0},
U:function(a,b){if((b&1073741823)===b)return this.hd(this.c,b)
else return this.hc(0,b)},
hc:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bX(b)
r=n[s]
q=o.c0(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dB(p)
return!0},
d9:function(a,b){if(a[b]!=null)return!1
a[b]=this.bW(b)
return!0},
hd:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.dB(s)
delete a[b]
return!0},
da:function(){this.r=this.r+1&1073741823},
bW:function(a){var s,r=this,q=new P.k5(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.da()
return q},
dB:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.da()},
bX:function(a){return J.l_(a)&1073741823},
c0:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a7(a[r].a,b))return r
return-1}}
P.k5.prototype={}
P.dQ.prototype={
gC:function(a){return H.S(this).c.a(this.d)},
v:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.aH(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cV.prototype={}
P.iM.prototype={
$2:function(a,b){this.a.m(0,this.b.a(a),this.c.a(b))},
$S:11}
P.d1.prototype={$in:1,$ii:1,$ip:1}
P.j.prototype={
gP:function(a){return new H.bk(a,this.gl(a))},
J:function(a,b){return this.h(a,b)},
F:function(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gl(a))throw H.c(P.aH(a))}},
gbE:function(a){return this.gl(a)===0},
iv:function(a,b){var s,r,q,p,o=this
if(o.gbE(a)){s=J.l7(0,H.ba(a).K("j.E"))
return s}r=o.h(a,0)
q=P.eP(o.gl(a),r,!0,H.ba(a).K("j.E"))
for(p=1;p<o.gl(a);++p){s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
iu:function(a){return this.iv(a,!0)},
hR:function(a,b,c,d){var s
H.ba(a).K("j.E").a(d)
P.bo(b,c,this.gl(a))
for(s=b;s<c;++s)this.m(a,s,d)},
i:function(a){return P.l5(a,"[","]")}}
P.d4.prototype={}
P.iQ.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.x(a)
r.a=s+": "
r.a+=H.x(b)},
$S:43}
P.J.prototype={
F:function(a,b){var s,r,q
for(s=J.aB(this.ga5(a)),r=H.ba(a).K("J.V");s.v();){q=s.gC(s)
b.$2(q,r.a(this.h(a,q)))}},
gl:function(a){return J.aS(this.ga5(a))},
i:function(a){return P.lc(a)},
$iG:1}
P.hL.prototype={
m:function(a,b,c){throw H.c(P.C("Cannot modify unmodifiable map"))}}
P.d5.prototype={
h:function(a,b){return J.lJ(this.a,b)},
m:function(a,b,c){J.kZ(this.a,b,c)},
F:function(a,b){J.em(this.a,b)},
gl:function(a){return J.aS(this.a)},
i:function(a){return J.cy(this.a)},
$iG:1}
P.cj.prototype={}
P.dm.prototype={
ac:function(a,b){var s
for(s=J.aB(b);s.v();)this.n(0,s.gC(s))},
i:function(a){return P.l5(this,"{","}")},
J:function(a,b){var s,r,q,p,o="index"
H.q4(b,o,t.S)
P.m6(b,o)
for(s=P.oG(this,this.r),r=H.S(s).c,q=0;s.v();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.M(b,this,o,null,q))}}
P.dX.prototype={$in:1,$ii:1}
P.dR.prototype={}
P.e8.prototype={}
P.ea.prototype={}
P.jP.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.ak(r)}return null},
$S:21}
P.jO.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.ak(r)}return null},
$S:21}
P.i8.prototype={
i3:function(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a4=P.bo(a3,a4,a2.length)
s=$.nq()
for(r=s.length,q=a3,p=q,o=null,n=-1,m=-1,l=0;q<a4;q=k){k=q+1
j=C.a.E(a2,q)
if(j===37){i=k+2
if(i<=a4){h=H.kE(C.a.E(a2,k))
g=H.kE(C.a.E(a2,k+1))
f=h*16+g-(g&256)
if(f===37)f=-1
k=i}else f=-1}else f=j
if(0<=f&&f<=127){if(f<0||f>=r)return H.d(s,f)
e=s[f]
if(e>=0){f=C.a.X("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e)
if(f===j)continue
j=f}else{if(e===-1){if(n<0){d=o==null?null:o.a.length
if(d==null)d=0
n=d+(q-p)
m=q}++l
if(j===61)continue}j=f}if(e!==-2){if(o==null){o=new P.V("")
d=o}else d=o
c=d.a+=C.a.u(a2,p,q)
d.a=c+H.au(j)
p=k
continue}}throw H.c(P.a8("Invalid base64 data",a2,q))}if(o!=null){r=o.a+=C.a.u(a2,p,a4)
d=r.length
if(n>=0)P.lN(a2,m,a4,n,l,d)
else{b=C.c.bw(d-1,4)+1
if(b===1)throw H.c(P.a8(a0,a2,a4))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return C.a.ba(a2,a3,a4,r.charCodeAt(0)==0?r:r)}a=a4-a3
if(n>=0)P.lN(a2,m,a4,n,l,a)
else{b=C.c.bw(a,4)
if(b===1)throw H.c(P.a8(a0,a2,a4))
if(b>1)a2=C.a.ba(a2,a4,a4,b===2?"==":"=")}return a2}}
P.i9.prototype={}
P.et.prototype={}
P.ev.prototype={}
P.it.prototype={}
P.iG.prototype={
i:function(a){return this.a}}
P.iF.prototype={
f5:function(a,b,c){var s,r,q,p,o,n,m,l=null
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
default:m=l}if(m!=null){if(n==null)n=new P.V("")
if(o>b)n.a+=C.a.u(a,b,o)
n.a+=m
b=o+1}}if(n==null)return l
if(c>b)n.a+=C.a.u(a,b,c)
s=n.a
return s.charCodeAt(0)==0?s:s}}
P.jM.prototype={
ghQ:function(){return C.Q}}
P.jQ.prototype={
cn:function(a){var s,r,q,p=P.bo(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.kn(r)
if(q.fa(a,0,p)!==p){C.a.X(a,p-1)
q.cf()}return new Uint8Array(r.subarray(0,H.pe(0,q.b,s)))}}
P.kn.prototype={
cf:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
hv:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.cf()
return!1}},
fa:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.X(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.E(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.hv(p,C.a.E(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.cf()}else if(p<=2047){o=l.b
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
P.jN.prototype={
cn:function(a){var s=this.a,r=P.ov(s,a,0,null)
if(r!=null)return r
return new P.km(s).hH(a,0,null,!0)}}
P.km.prototype={
hH:function(a,b,c,d){var s,r,q,p,o=this,n=P.bo(b,c,J.aS(a))
if(b===n)return""
s=P.pa(a,b,n)
r=o.bY(s,0,n-b,!0)
q=o.b
if((q&1)!==0){p=P.pb(q)
o.b=0
throw H.c(P.a8(p,a,b+o.c))}return r},
bY:function(a,b,c,d){var s,r,q=this
if(c-b>1000){s=C.c.a9(b+c,2)
r=q.bY(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bY(a,s,c,d)}return q.hM(a,b,c,d)},
hM:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.V(""),f=b+1,e=a.length
if(b<0||b>=e)return H.d(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.E("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.E(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.au(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.au(j)
break
case 65:g.a+=H.au(j);--f
break
default:p=g.a+=H.au(j)
g.a=p+H.au(j)
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
g.a+=H.au(a[l])}else g.a+=P.fo(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.au(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.X.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.X&&this.a===b.a&&!0},
as:function(a,b){return C.c.as(this.a,b.a)},
gG:function(a){var s=this.a
return(s^C.c.b1(s,30))&1073741823},
i:function(a){var s=this,r=P.nM(H.oe(s)),q=P.ey(H.oc(s)),p=P.ey(H.o8(s)),o=P.ey(H.o9(s)),n=P.ey(H.ob(s)),m=P.ey(H.od(s)),l=P.nN(H.oa(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bD.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bD&&this.a===b.a},
gG:function(a){return C.c.gG(this.a)},
as:function(a,b){return C.c.as(this.a,b.a)},
i:function(a){var s,r,q,p=new P.iq(),o=this.a
if(o<0)return"-"+new P.bD(0-o).i(0)
s=p.$1(C.c.a9(o,6e7)%60)
r=p.$1(C.c.a9(o,1e6)%60)
q=new P.ip().$1(o%1e6)
return""+C.c.a9(o,36e8)+":"+s+":"+r+"."+q}}
P.ip.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:27}
P.iq.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:27}
P.I.prototype={}
P.ep.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.iw(s)
return"Assertion failed"}}
P.fC.prototype={}
P.f_.prototype={
i:function(a){return"Throw of null."}}
P.aC.prototype={
gc_:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbZ:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gc_()+o+m
if(!q.a)return l
s=q.gbZ()
r=P.iw(q.b)
return l+s+": "+r}}
P.dl.prototype={
gc_:function(){return"RangeError"},
gbZ:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.x(q):""
else if(q==null)s=": Not greater than or equal to "+H.x(r)
else if(q>r)s=": Not in inclusive range "+H.x(r)+".."+H.x(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.x(r)
return s}}
P.eF.prototype={
gc_:function(){return"RangeError"},
gbZ:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl:function(a){return this.f}}
P.fL.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fI.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.cc.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eu.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.iw(s)+"."}}
P.f2.prototype={
i:function(a){return"Out of Memory"},
$iI:1}
P.ds.prototype={
i:function(a){return"Stack Overflow"},
$iI:1}
P.ew.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.h5.prototype={
i:function(a){return"Exception: "+this.a}}
P.iB.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.u(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.E(d,o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}f=r>1?f+(" (at line "+r+", character "+(e-q+1)+")\n"):f+(" (at character "+(e+1)+")\n")
m=d.length
for(o=e;o<m;++o){n=C.a.X(d,o)
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
i=""}h=C.a.u(d,k,l)
return f+j+h+i+"\n"+C.a.I(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.x(e)+")"):f}}
P.i.prototype={
bR:function(a,b){return new H.b8(this,b,H.S(this).K("b8<i.E>"))},
gl:function(a){var s,r=this.gP(this)
for(s=0;r.v();)++s
return s},
gaT:function(a){var s,r=this.gP(this)
if(!r.v())throw H.c(H.l6())
s=r.gC(r)
if(r.v())throw H.c(H.nT())
return s},
J:function(a,b){var s,r,q
P.m6(b,"index")
for(s=this.gP(this),r=0;s.v();){q=s.gC(s)
if(b===r)return q;++r}throw H.c(P.M(b,this,"index",null,r))},
i:function(a){return P.nS(this,"(",")")}}
P.eG.prototype={}
P.aa.prototype={
gG:function(a){return P.N.prototype.gG.call(C.V,this)},
i:function(a){return"null"}}
P.N.prototype={constructor:P.N,$iN:1,
q:function(a,b){return this===b},
gG:function(a){return H.dj(this)},
i:function(a){return"Instance of '"+H.dk(this)+"'"},
toString:function(){return this.i(this)}}
P.V.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jK.prototype={
$2:function(a,b){var s,r,q,p=C.a.ee(b,"=")
if(p===-1){if(b!=="")J.kZ(a,P.lv(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.u(b,0,p)
r=C.a.al(b,p+1)
q=this.a
J.kZ(a,P.lv(s,0,s.length,q,!0),P.lv(r,0,r.length,q,!0))}return a},
$S:42}
P.jH.prototype={
$2:function(a,b){throw H.c(P.a8("Illegal IPv4 address, "+a,this.a,b))},
$S:41}
P.jI.prototype={
$2:function(a,b){throw H.c(P.a8("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:40}
P.jJ.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.kI(C.a.u(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:39}
P.bQ.prototype={
gce:function(){var s,r,q,p=this,o=p.x
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
else o=H.h(H.lb("_text"))}return o},
gG:function(a){var s=this,r=s.z
if(r==null){r=C.a.gG(s.gce())
if(s.z==null)s.z=r
else r=H.h(H.lb("hashCode"))}return r},
gcQ:function(){var s=this,r=s.Q
if(r==null){r=s.f
r=new P.cj(P.ml(r==null?"":r),t.dw)
if(s.Q==null)s.Q=r
else r=H.h(H.lb("queryParameters"))}return r},
gey:function(){return this.b},
gcF:function(a){var s=this.c
if(s==null)return""
if(C.a.a2(s,"["))return C.a.u(s,1,s.length-1)
return s},
gbK:function(a){var s=this.d
return s==null?P.mH(this.a):s},
gcP:function(a){var s=this.f
return s==null?"":s},
ge9:function(){var s=this.r
return s==null?"":s},
er:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a2(s,"/"))s="/"+s
q=s
p=P.lt(null,0,0,b)
return new P.bQ(n,l,j,k,q,p,o.r)},
gea:function(){return this.c!=null},
ged:function(){return this.f!=null},
geb:function(){return this.r!=null},
i:function(a){return this.gce()},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.dD.b(b))if(q.a===b.gbS())if(q.c!=null===b.gea())if(q.b===b.gey())if(q.gcF(q)===b.gcF(b))if(q.gbK(q)===b.gbK(b))if(q.e===b.gep(b)){s=q.f
r=s==null
if(!r===b.ged()){if(r)s=""
if(s===b.gcP(b)){s=q.r
r=s==null
if(!r===b.geb()){if(r)s=""
s=s===b.ge9()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
$ifM:1,
gbS:function(){return this.a},
gep:function(a){return this.e}}
P.kk.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=P.kl(C.h,a,C.e,!0)
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=P.kl(C.h,b,C.e,!0)}},
$S:37}
P.kj.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.aB(b),r=this.a;s.v();)r.$2(a,s.gC(s))},
$S:5}
P.jG.prototype={
gex:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.d(m,0)
s=o.a
m=m[0]+1
r=C.a.bD(s,"?",m)
q=s.length
if(r>=0){p=P.e9(s,r+1,q,C.k,!1)
q=r}else p=n
m=o.c=new P.fY("data","",n,n,P.e9(s,m,q,C.z,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.ku.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.d(s,a)
s=s[a]
C.a0.hR(s,0,96,b)
return s},
$S:35}
P.kv.prototype={
$3:function(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=C.a.E(b,r)^96
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:18}
P.kw.prototype={
$3:function(a,b,c){var s,r,q
for(s=C.a.E(b,0),r=C.a.E(b,1);s<=r;++s){q=(s^96)>>>0
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:18}
P.hq.prototype={
gea:function(){return this.c>0},
gec:function(){return this.c>0&&this.d+1<this.e},
ged:function(){return this.f<this.r},
geb:function(){return this.r<this.a.length},
gbS:function(){var s=this.x
return s==null?this.x=this.f2():s},
f2:function(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&C.a.a2(r.a,"http"))return"http"
if(q===5&&C.a.a2(r.a,"https"))return"https"
if(s&&C.a.a2(r.a,"file"))return"file"
if(q===7&&C.a.a2(r.a,"package"))return"package"
return C.a.u(r.a,0,q)},
gey:function(){var s=this.c,r=this.b+3
return s>r?C.a.u(this.a,r,s-1):""},
gcF:function(a){var s=this.c
return s>0?C.a.u(this.a,s,this.d):""},
gbK:function(a){var s,r=this
if(r.gec())return P.kI(C.a.u(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&C.a.a2(r.a,"http"))return 80
if(s===5&&C.a.a2(r.a,"https"))return 443
return 0},
gep:function(a){return C.a.u(this.a,this.e,this.f)},
gcP:function(a){var s=this.f,r=this.r
return s<r?C.a.u(this.a,s+1,r):""},
ge9:function(){var s=this.r,r=this.a
return s<r.length?C.a.al(r,s+1):""},
gcQ:function(){var s=this
if(s.f>=s.r)return C.a_
return new P.cj(P.ml(s.gcP(s)),t.dw)},
er:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbS(),k=l==="file",j=n.c,i=j>0?C.a.u(n.a,n.b+3,j):"",h=n.gec()?n.gbK(n):m
j=n.c
if(j>0)s=C.a.u(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.u(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a2(r,"/"))r="/"+r
p=P.lt(m,0,0,b)
q=n.r
o=q<j.length?C.a.al(j,q+1):m
return new P.bQ(l,i,s,h,r,p,o)},
gG:function(a){var s=this.y
return s==null?this.y=C.a.gG(this.a):s},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.dD.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifM:1}
P.fY.prototype={}
W.v.prototype={}
W.i2.prototype={
gl:function(a){return a.length}}
W.en.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.eo.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bU.prototype={$ibU:1}
W.bz.prototype={$ibz:1}
W.bA.prototype={$ibA:1}
W.bB.prototype={
cV:function(a,b,c){if(c!=null)return a.getContext(b,P.mY(c))
return a.getContext(b)},
eA:function(a,b){return this.cV(a,b,null)},
$ibB:1}
W.cB.prototype={$icB:1}
W.aD.prototype={
gl:function(a){return a.length}}
W.ih.prototype={
gl:function(a){return a.length}}
W.H.prototype={$iH:1}
W.cH.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.ii.prototype={}
W.as.prototype={}
W.aV.prototype={}
W.ij.prototype={
gl:function(a){return a.length}}
W.ik.prototype={
gl:function(a){return a.length}}
W.il.prototype={
gl:function(a){return a.length}}
W.bg.prototype={$ibg:1}
W.im.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cI.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iz:1,
$ii:1,
$ip:1}
W.cJ.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.x(r)+", "
s=a.top
s.toString
return r+H.x(s)+") "+H.x(this.gaA(a))+" x "+H.x(this.gau(a))},
q:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.aQ(b)
if(s===r.gbG(b)){s=a.top
s.toString
s=s===r.gbO(b)&&this.gaA(a)===r.gaA(b)&&this.gau(a)===r.gau(b)}else s=!1}else s=!1
return s},
gG:function(a){var s,r=a.left
r.toString
r=C.d.gG(r)
s=a.top
s.toString
return W.my(r,C.d.gG(s),C.d.gG(this.gaA(a)),C.d.gG(this.gau(a)))},
gdN:function(a){var s=a.bottom
s.toString
return s},
gdi:function(a){return a.height},
gau:function(a){var s=this.gdi(a)
s.toString
return s},
gbG:function(a){var s=a.left
s.toString
return s},
gbN:function(a){var s=a.right
s.toString
return s},
gbO:function(a){var s=a.top
s.toString
return s},
gdD:function(a){return a.width},
gaA:function(a){var s=this.gdD(a)
s.toString
return s},
$iag:1}
W.ez.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iz:1,
$ii:1,
$ip:1}
W.io.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.fV.prototype={
gbE:function(a){return this.a.firstElementChild==null},
gl:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b]).toString},
n:function(a,b){this.a.appendChild(b).toString
return b},
gP:function(a){var s=this.iu(this)
return new J.ah(s,s.length)}}
W.D.prototype={
ga3:function(a){return new W.h2(a)},
gbB:function(a){var s=a.children
s.toString
return new W.fV(a,s)},
gdO:function(a){var s,r,q,p=a.clientLeft
p.toString
s=a.clientTop
s.toString
r=a.clientWidth
r.toString
q=a.clientHeight
q.toString
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.ag(p,s,r,q,t.q)},
i:function(a){var s=a.localName
s.toString
return s},
at:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.lT
if(s==null){s=H.b([],t.r)
r=new W.dh(s)
s.push(W.mx(null))
s.push(W.mC())
$.lT=r
d=r}else d=s
s=$.lS
if(s==null){s=new W.hM(d)
$.lS=s
c=s}else{s.a=d
c=s}}if($.bh==null){s=document
r=s.implementation.createHTMLDocument("")
r.toString
$.bh=r
r=r.createRange()
r.toString
$.l3=r
r=$.bh.createElement("base")
t.cR.a(r)
s=s.baseURI
s.toString
r.href=s
$.bh.head.appendChild(r).toString}s=$.bh
if(s.body==null){r=s.createElement("body")
s.body=t.Y.a(r)}s=$.bh
if(t.Y.b(a)){s=s.body
s.toString
q=s}else{s.toString
r=a.tagName
r.toString
q=s.createElement(r)
$.bh.body.appendChild(q).toString}s="createContextualFragment" in window.Range.prototype
s.toString
if(s){s=a.tagName
s.toString
s=!C.b.B(C.Y,s)}else s=!1
if(s){$.l3.selectNodeContents(q)
s=$.l3
s=s.createContextualFragment(b)
s.toString
p=s}else{q.innerHTML=b
s=$.bh.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.bh.body)J.lK(q)
c.cW(p)
document.adoptNode(p).toString
return p},
hK:function(a,b,c){return this.at(a,b,c,null)},
eB:function(a,b){var s
a.textContent=null
s=a.appendChild(this.at(a,b,null,null))
s.toString},
geu:function(a){var s=a.tagName
s.toString
return s},
$iD:1}
W.ir.prototype={
$1:function(a){return t.h.b(a)},
$S:15}
W.l.prototype={$il:1}
W.e.prototype={
hx:function(a,b,c,d){if(c!=null)this.eX(a,b,c,!1)},
eX:function(a,b,c,d){return a.addEventListener(b,H.ct(c,1),!1)},
$ie:1}
W.al.prototype={$ial:1}
W.bY.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iz:1,
$ii:1,
$ip:1,
$ibY:1}
W.eA.prototype={
gl:function(a){return a.length}}
W.eC.prototype={
gl:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.iE.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.bF.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iz:1,
$ii:1,
$ip:1}
W.bG.prototype={
gdQ:function(a){var s=a.data
s.toString
return s},
$ibG:1}
W.c_.prototype={$ic_:1}
W.c1.prototype={$ic1:1}
W.bH.prototype={$ibH:1}
W.iO.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.j4.prototype={
gl:function(a){return a.length}}
W.c3.prototype={$ic3:1}
W.eS.prototype={
h:function(a,b){return P.bv(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bv(s.value[1]))}},
ga5:function(a){var s=H.b([],t.s)
this.F(a,new W.j5(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iG:1}
W.j5.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.eT.prototype={
h:function(a,b){return P.bv(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bv(s.value[1]))}},
ga5:function(a){var s=H.b([],t.s)
this.F(a,new W.j6(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iG:1}
W.j6.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.aK.prototype={$iaK:1}
W.eU.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iz:1,
$ii:1,
$ip:1}
W.an.prototype={$ian:1}
W.a6.prototype={
gaT:function(a){var s=this.a,r=s.childNodes.length
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
gP:function(a){var s=this.a.childNodes
return new W.cP(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.t.prototype={
ij:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a).toString},
il:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.nu(s,b,a)}catch(q){H.ak(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.eH(a):s},
he:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$it:1}
W.dg.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iz:1,
$ii:1,
$ip:1}
W.aM.prototype={
gl:function(a){return a.length},
$iaM:1}
W.f6.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iz:1,
$ii:1,
$ip:1}
W.fc.prototype={
h:function(a,b){return P.bv(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bv(s.value[1]))}},
ga5:function(a){var s=H.b([],t.s)
this.F(a,new W.ji(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iG:1}
W.ji.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.fe.prototype={
gl:function(a){return a.length}}
W.aw.prototype={$iaw:1}
W.fg.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iz:1,
$ii:1,
$ip:1}
W.aN.prototype={$iaN:1}
W.fh.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iz:1,
$ii:1,
$ip:1}
W.aO.prototype={
gl:function(a){return a.length},
$iaO:1}
W.fl.prototype={
h:function(a,b){return a.getItem(H.kr(b))},
m:function(a,b,c){a.setItem(b,c)},
F:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga5:function(a){var s=H.b([],t.s)
this.F(a,new W.jp(s))
return s},
gl:function(a){var s=a.length
s.toString
return s},
$iG:1}
W.jp.prototype={
$2:function(a,b){return this.a.push(a)},
$S:33}
W.ap.prototype={$iap:1}
W.bq.prototype={$ibq:1}
W.dt.prototype={
at:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bT(a,b,c,d)
s=W.nP("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new W.a6(r).ac(0,new W.a6(s))
return r}}
W.fp.prototype={
at:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bT(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a6(C.D.at(r,b,c,d))
r=new W.a6(r.gaT(r))
new W.a6(s).ac(0,new W.a6(r.gaT(r)))
return s}}
W.fq.prototype={
at:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bT(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a6(C.D.at(r,b,c,d))
new W.a6(s).ac(0,new W.a6(r.gaT(r)))
return s}}
W.ce.prototype={$ice:1}
W.ax.prototype={$iax:1}
W.ai.prototype={$iai:1}
W.fs.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iz:1,
$ii:1,
$ip:1}
W.ft.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iz:1,
$ii:1,
$ip:1}
W.jw.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.ay.prototype={$iay:1}
W.bN.prototype={$ibN:1}
W.fA.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iz:1,
$ii:1,
$ip:1}
W.jB.prototype={
gl:function(a){return a.length}}
W.b6.prototype={}
W.jL.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.fP.prototype={
gl:function(a){return a.length}}
W.br.prototype={
ghO:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.C("deltaY is not supported"))},
ghN:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.C("deltaX is not supported"))},
$ibr:1}
W.cl.prototype={
hf:function(a,b){var s=a.requestAnimationFrame(H.ct(b,1))
s.toString
return s},
f9:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cm.prototype={$icm:1}
W.fW.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iz:1,
$ii:1,
$ip:1}
W.dM.prototype={
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
if(t.q.b(b)){s=a.left
s.toString
r=J.aQ(b)
if(s===r.gbG(b)){s=a.top
s.toString
if(s===r.gbO(b)){s=a.width
s.toString
if(s===r.gaA(b)){s=a.height
s.toString
r=s===r.gau(b)
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
return W.my(p,s,r,C.d.gG(q))},
gdi:function(a){return a.height},
gau:function(a){var s=a.height
s.toString
return s},
gdD:function(a){return a.width},
gaA:function(a){var s=a.width
s.toString
return s}}
W.h9.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iz:1,
$ii:1,
$ip:1}
W.dS.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iz:1,
$ii:1,
$ip:1}
W.ht.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iz:1,
$ii:1,
$ip:1}
W.hA.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iz:1,
$ii:1,
$ip:1}
W.fT.prototype={
F:function(a,b){var s,r,q,p,o
for(s=this.ga5(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
b.$2(o,H.kr(q.getAttribute(o)))}},
ga5:function(a){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=H.b([],t.s)
for(r=m.length,q=t.h9,p=0;p<r;++p){if(p>=m.length)return H.d(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
s.push(n)}}return s}}
W.h2.prototype={
h:function(a,b){return this.a.getAttribute(H.kr(b))},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga5(this).length}}
W.l4.prototype={}
W.dN.prototype={
hu:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.nv(s,this.c,r,!1)}}}
W.k2.prototype={
$1:function(a){return this.a.$1(a)},
$S:3}
W.ll.prototype={}
W.cn.prototype={
eP:function(a){var s
if($.dO.gbE($.dO)){for(s=0;s<262;++s)$.dO.m(0,C.X[s],W.qe())
for(s=0;s<12;++s)$.dO.m(0,C.n[s],W.qf())}},
b2:function(a){return $.nr().B(0,W.cL(a))},
aE:function(a,b,c){var s=$.dO.h(0,W.cL(a)+"::"+b)
if(s==null)s=$.dO.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iaL:1}
W.K.prototype={
gP:function(a){return new W.cP(a,this.gl(a))}}
W.dh.prototype={
b2:function(a){return C.b.dI(this.a,new W.j9(a))},
aE:function(a,b,c){return C.b.dI(this.a,new W.j8(a,b,c))},
$iaL:1}
W.j9.prototype={
$1:function(a){return a.b2(this.a)},
$S:22}
W.j8.prototype={
$1:function(a){return a.aE(this.a,this.b,this.c)},
$S:22}
W.dY.prototype={
eQ:function(a,b,c,d){var s,r,q
this.a.ac(0,c)
s=b.bR(0,new W.ka())
r=b.bR(0,new W.kb())
this.b.ac(0,s)
q=this.c
q.ac(0,C.w)
q.ac(0,r)},
b2:function(a){return this.a.B(0,W.cL(a))},
aE:function(a,b,c){var s=this,r=W.cL(a),q=s.c
if(q.B(0,r+"::"+b))return s.d.hA(c)
else if(q.B(0,"*::"+b))return s.d.hA(c)
else{q=s.b
if(q.B(0,r+"::"+b))return!0
else if(q.B(0,"*::"+b))return!0
else if(q.B(0,r+"::*"))return!0
else if(q.B(0,"*::*"))return!0}return!1},
$iaL:1}
W.ka.prototype={
$1:function(a){return!C.b.B(C.n,a)},
$S:23}
W.kb.prototype={
$1:function(a){return C.b.B(C.n,a)},
$S:23}
W.hC.prototype={
aE:function(a,b,c){if(this.eK(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.B(0,b)
return!1}}
W.kg.prototype={
$1:function(a){return"TEMPLATE::"+a},
$S:31}
W.hB.prototype={
b2:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cL(a)==="foreignObject")return!1
if(s)return!0
return!1},
aE:function(a,b,c){if(b==="is"||C.a.a2(b,"on"))return!1
return this.b2(a)},
$iaL:1}
W.cP.prototype={
v:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.lJ(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gC:function(a){return H.S(this).c.a(this.d)}}
W.k9.prototype={}
W.hM.prototype={
cW:function(a){var s,r=new W.ko(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
bn:function(a,b){++this.b
if(b==null||b!==a.parentNode)J.lK(a)
else b.removeChild(a).toString},
hi:function(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
try{k=J.nx(a)
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
o=p}l=o}catch(n){H.ak(n)}r="element unprintable"
try{r=J.cy(a)}catch(n){H.ak(n)}try{q=W.cL(a)
this.hh(a,b,l,r,q,k,j)}catch(n){if(H.ak(n) instanceof P.aC)throw n
else{this.bn(a,b)
p=window
p.toString
p="Removing corrupted element "+H.x(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(p)}}},
hh:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.bn(a,b)
window.toString
s="Removing element due to corrupted attributes on <"+d+">"
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(!m.a.b2(a)){m.bn(a,b)
window.toString
s="Removing disallowed element <"+e+"> from "+H.x(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(g!=null)if(!m.a.aE(a,"is",g)){m.bn(a,b)
window.toString
s="Removing disallowed type extension <"+e+' is="'+g+'">'
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}s=f.ga5(f)
q=H.b(s.slice(0),H.hX(s))
for(p=f.ga5(f).length-1,s=f.a;p>=0;--p){if(p>=q.length)return H.d(q,p)
o=q[p]
r=m.a
n=J.nB(o)
H.kr(o)
if(!r.aE(a,n,s.getAttribute(o))){window.toString
r="Removing disallowed attribute <"+e+" "+o+'="'+H.x(s.getAttribute(o))+'">'
n=typeof console!="undefined"
n.toString
if(n)window.console.warn(r)
s.removeAttribute(o)}}if(t.aW.b(a)){s=a.content
s.toString
m.cW(s)}}}
W.ko.prototype={
$2:function(a,b){var s,r,q,p,o=this.a,n=a.nodeType
n.toString
switch(n){case 1:o.hi(a,b)
break
case 8:case 11:case 3:case 4:break
default:o.bn(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){n=r.nextSibling
q=s
q=n==null?q!=null:n!==q
n=q}else n=!1
if(n){n=P.lg("Corrupt HTML")
throw H.c(n)}}catch(p){H.ak(p)
n=s;++o.b
q=n.parentNode
if(a!==q){if(q!=null)q.removeChild(n).toString}else a.removeChild(n).toString
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:30}
W.fX.prototype={}
W.fZ.prototype={}
W.h_.prototype={}
W.h0.prototype={}
W.h1.prototype={}
W.h6.prototype={}
W.h7.prototype={}
W.ha.prototype={}
W.hb.prototype={}
W.he.prototype={}
W.hf.prototype={}
W.hg.prototype={}
W.hh.prototype={}
W.hi.prototype={}
W.hj.prototype={}
W.hm.prototype={}
W.hn.prototype={}
W.hp.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.hr.prototype={}
W.hs.prototype={}
W.hx.prototype={}
W.hD.prototype={}
W.hE.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.hF.prototype={}
W.hG.prototype={}
W.hN.prototype={}
W.hO.prototype={}
W.hP.prototype={}
W.hQ.prototype={}
W.hR.prototype={}
W.hS.prototype={}
W.hT.prototype={}
W.hU.prototype={}
W.hV.prototype={}
W.hW.prototype={}
P.kc.prototype={
cD:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bQ:function(a){var s,r,q,p,o,n=this,m={}
if(a==null)return a
if(H.kx(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.X)return new Date(a.a)
if(t.fJ.b(a))throw H.c(P.jF("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.fK.b(a))return a
if(t.bX.b(a))return a
if(t.I.b(a))return a
if(t.cH.b(a)||t.dE.b(a)||t.bK.b(a))return a
if(t.f.b(a)){s=n.cD(a)
r=n.b
q=r.length
if(s>=q)return H.d(r,s)
p=m.a=r[s]
if(p!=null)return p
p={}
m.a=p
if(s>=q)return H.d(r,s)
r[s]=p
J.em(a,new P.ke(m,n))
return m.a}if(t.aH.b(a)){s=n.cD(a)
m=n.b
if(s>=m.length)return H.d(m,s)
p=m[s]
if(p!=null)return p
return n.hJ(a,s)}if(t.eH.b(a)){s=n.cD(a)
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
n.hW(a,new P.kf(m,n))
return m.b}throw H.c(P.jF("structured clone of other type"))},
hJ:function(a,b){var s,r,q=J.cw(a),p=q.gl(a),o=new Array(p)
o.toString
s=this.b
if(b>=s.length)return H.d(s,b)
s[b]=o
for(r=0;r<p;++r){s=this.bQ(q.h(a,r))
if(r>=o.length)return H.d(o,r)
o[r]=s}return o}}
P.ke.prototype={
$2:function(a,b){this.a.a[a]=this.b.bQ(b)},
$S:11}
P.kf.prototype={
$2:function(a,b){this.a.b[a]=this.b.bQ(b)},
$S:29}
P.e5.prototype={$ibG:1,
gdQ:function(a){return this.a}}
P.ks.prototype={
$1:function(a){this.a.push(P.mP(a))},
$S:59}
P.kB.prototype={
$2:function(a,b){this.a[a]=P.mP(b)},
$S:11}
P.kd.prototype={
hW:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
b.$2(p,a[p])}}}
P.eB.prototype={
gbl:function(){var s=this.b,r=H.S(s)
return new H.b_(new H.b8(s,new P.iz(),r.K("b8<j.E>")),new P.iA(),r.K("b_<j.E,D>"))},
F:function(a,b){C.b.F(P.iN(this.gbl(),!1,t.h),b)},
m:function(a,b,c){var s=this.gbl()
J.nA(s.b.$1(J.i1(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b).toString},
gl:function(a){return J.aS(this.gbl().a)},
h:function(a,b){var s=this.gbl()
return s.b.$1(J.i1(s.a,b))},
gP:function(a){var s=P.iN(this.gbl(),!1,t.h)
return new J.ah(s,s.length)}}
P.iz.prototype={
$1:function(a){return t.h.b(a)},
$S:15}
P.iA.prototype={
$1:function(a){return t.h.a(a)},
$S:28}
P.ho.prototype={
gbN:function(a){return this.$ti.c.a(this.a+this.c)},
gdN:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
q:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.aQ(b)
if(s===r.gbG(b)){q=o.b
if(q===r.gbO(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gbN(b)&&p.a(q+o.d)===r.gdN(b)}else s=!1}else s=!1}else s=!1
return s},
gG:function(a){var s=this,r=s.a,q=C.c.gG(r),p=s.b,o=C.c.gG(p),n=s.$ti.c
r=C.c.gG(n.a(r+s.c))
p=C.c.gG(n.a(p+s.d))
return H.oq(H.jq(H.jq(H.jq(H.jq(0,q),o),r),p))}}
P.ag.prototype={
gbG:function(a){return this.a},
gbO:function(a){return this.b},
gaA:function(a){return this.c},
gau:function(a){return this.d}}
P.aZ.prototype={$iaZ:1}
P.eM.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$in:1,
$ii:1,
$ip:1}
P.b2.prototype={$ib2:1}
P.f0.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$in:1,
$ii:1,
$ip:1}
P.jb.prototype={
gl:function(a){return a.length}}
P.ca.prototype={$ica:1}
P.fn.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$in:1,
$ii:1,
$ip:1}
P.o.prototype={
gbB:function(a){return new P.eB(a,new W.a6(a))},
at:function(a,b,c,d){var s,r,q,p,o=H.b([],t.r)
o.push(W.mx(null))
o.push(W.mC())
o.push(new W.hB())
c=new W.hM(new W.dh(o))
s='<svg version="1.1">'+b+"</svg>"
o=document
r=o.body
r.toString
q=C.q.hK(r,s,c)
o=o.createDocumentFragment()
o.toString
r=new W.a6(q)
p=r.gaT(r)
for(;r=p.firstChild,r!=null;)o.appendChild(r).toString
return o},
$io:1}
P.b4.prototype={$ib4:1}
P.fB.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$in:1,
$ii:1,
$ip:1}
P.hc.prototype={}
P.hd.prototype={}
P.hk.prototype={}
P.hl.prototype={}
P.hy.prototype={}
P.hz.prototype={}
P.hH.prototype={}
P.hI.prototype={}
P.i5.prototype={
gl:function(a){return a.length}}
P.er.prototype={
h:function(a,b){return P.bv(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bv(s.value[1]))}},
ga5:function(a){var s=H.b([],t.s)
this.F(a,new P.i6(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iG:1}
P.i6.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
P.es.prototype={
gl:function(a){return a.length}}
P.bd.prototype={}
P.f1.prototype={
gl:function(a){return a.length}}
P.fU.prototype={}
P.c9.prototype={
ew:function(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&H.hZ(g)){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}if(t.I.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,P.q6(g))
return}if(t.fS.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.bT("Incorrect number or type of arguments"))},
ev:function(a,b,c,d,e,f,g){return this.ew(a,b,c,d,e,f,g,null,null,null)},
$ic9:1}
P.fi.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=P.bv(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$in:1,
$ii:1,
$ip:1}
P.hu.prototype={}
P.hv.prototype={}
K.aT.prototype={
aP:function(a,b){return!0},
i:function(a){return"all"},
$ib0:1}
K.cU.prototype={
aP:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)if(s[q].aP(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q},
$ib0:1}
K.af.prototype={
aP:function(a,b){return!this.eG(0,b)},
i:function(a){return"!["+this.bU(0)+"]"}}
K.f9.prototype={
aP:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var s=H.au(this.a),r=H.au(this.b)
return s+".."+r},
$ib0:1}
K.u.prototype={
p:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.f("May not create a Set with zero characters."))
s=new H.T(t.fX)
for(r=new H.bk(a,a.gl(a)),q=H.S(r).c;r.v();)s.m(0,q.a(r.d),!0)
p=P.iN(s.ga5(s),!0,t.S)
C.b.eF(p)
this.a=p},
aP:function(a,b){return C.b.B(this.a,b)},
i:function(a){return P.fo(this.a,0,null)},
$ib0:1}
L.fj.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.dv(this.a.k(0,b),H.b([],t.z))
s.push(p)
return p},
hS:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.aP(0,a))return p}return null},
i:function(a){return this.b},
dA:function(){var s,r,q,p,o,n,m=this,l=""+("("+m.b+")"),k=m.d
if(k!=null){l+=" => ["+k.b+"]"
k=m.a.c
s=m.d
if(k.B(0,s==null?null:s.b))l+=" (consume)"
s=m.d
if(s==null)s=null
else{s=s.c
s=s.ga5(s)}s=J.aB(s==null?H.b([],t.s):s)
for(;s.v();){r=s.gC(s)
l+="\n"
q=m.d
p=q==null?null:q.c.h(0,r)
if(p==null)p=""
l+="  -- "+r+" => ["+p+"]"
if(k.B(0,p))l+=" (consume)"}}for(k=m.c,s=k.length,o=0;o<k.length;k.length===s||(0,H.q)(k),++o){n=k[o]
l+="\n"
l+="  -- "+(n.b.b+": "+n.bU(0))}return l.charCodeAt(0)==0?l:l}}
L.fy.prototype={
i:function(a){var s=H.lH(this.b,"\n","\\n"),r=H.lH(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fz.prototype={
aR:function(a,b,c){var s,r,q
for(s=c.length,r=this.c,q=0;q<c.length;c.length===s||(0,H.q)(c),++q)r.m(0,c[q],b)},
i:function(a){return this.b}}
L.jy.prototype={
k:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.fj(this,b,H.b([],t.ab))
s.m(0,b,r)}return r},
O:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.fz(a,P.R(s,s))
r.m(0,a,q)}return q},
cT:function(a){return this.ix(a)},
ix:function(a){var s=this
return P.pv(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2
return function $async$cT(a3,a4){if(a3===1){o=a4
q=p}while(true)switch(q){case 0:c=s.d
b=t.t
a0=H.b([],b)
a1=H.b([],b)
a2=H.b([],b)
n=H.S(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}h=a2.length
if(h!==0){if(!!a2.fixed$length)H.h(P.C("removeAt"))
if(0>=h)H.h(P.fa(0,null))
g=a2.splice(0,1)[0]}else{if(!r.v()){q=3
break}g=n.a(r.d)}a1.push(g);++k
h=c==null
f=h?null:c.hS(g)
q=f==null?4:6
break
case 4:if(l==null){e=P.fo(a1,0,null)
throw H.c(P.f("Untokenizable string [state: "+H.x(h?null:c.b)+", index "+k+']: "'+e+'"'))}if(!!a1.fixed$length)H.h(P.C("removeRange"))
P.bo(0,i,a1.length)
a1.splice(0,i-0)
C.b.ac(a2,a1)
a1=H.b([],b)
a0=H.b([],b)
c=s.d
q=!m.B(0,l.a)?7:8
break
case 7:q=9
return l
case 9:case 8:k=j
l=null
i=0
q=5
break
case 6:if(!f.c)a0.push(g)
c=f.b
h=c.d
if(h!=null){e=P.fo(a0,0,null)
h=c.d
if(h==null)l=null
else{d=h.c.h(0,e)
h=new L.fy(d==null?h.b:d,e,k)
l=h}i=a1.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.B(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.oE()
case 1:return P.oF(o)}}},t.bJ)},
i:function(a){var s,r=new P.V(""),q=this.d
if(q!=null)r.a=""+(q.dA()+"\n")
for(q=this.a,q=q.giy(q),q=q.gP(q);q.v();){s=q.gC(q)
if(s!=this.d)r.a+=H.x(s==null?null:s.dA())+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.dv.prototype={
i:function(a){return this.b.b+": "+this.bU(0)}}
O.ae.prototype={
cX:function(a,b,c){this.b=b
this.c=a},
bf:function(a,b){return this.cX(a,null,b)},
dm:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
d3:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gl:function(a){return this.a.length},
gP:function(a){var s=this.a
return new J.ah(s,s.length)},
J:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.S(q).K("w<ae.T>")
if(q.dm(H.b([b],p))){s=q.a
r=s.length
s.push(b)
q.d3(r,H.b([b],p))}},
ac:function(a,b){var s,r
if(this.dm(b)){s=this.a
r=s.length
C.b.ac(s,b)
this.d3(r,b)}},
$ii:1}
O.dc.prototype={
gl:function(a){return this.a.length},
gt:function(){var s=this.b
return s==null?this.b=D.F():s},
aV:function(){var s=this.b
return s==null?null:s.D(null)},
ga6:function(a){var s=this.a
if(s.length>0)return C.b.gaF(s)
else return V.am()},
bM:function(a){this.a.push(a)
this.aV()},
aQ:function(){var s=this.a
if(s.length>0){s.pop()
this.aV()}}}
E.ia.prototype={}
E.bE.prototype={
scZ:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().U(0,s.gem())
if(b!=null)b.gt().n(0,s.gem())
s.bI(new D.A("shape",r,b))}},
ag:function(a,b){var s,r
for(s=this.y.a,s=new J.ah(s,s.length),r=H.S(s).c;s.v();)r.a(s.d).ag(0,b)},
a7:function(a){var s,r,q,p=this,o=a.dx
o.a.push(o.ga6(o))
o.aV()
a.cO(p.f)
s=C.b.gaF(a.dy)
if(p.d!=null)if(s!=null)s.cR(a,p)
for(r=p.y.a,r=new J.ah(r,r.length),q=H.S(r).c;r.v();)q.a(r.d).a7(a)
a.cN()
o.aQ()},
bI:function(a){var s=this.z
return s==null?null:s.D(a)},
af:function(){return this.bI(null)},
en:function(a){this.e=null
this.bI(a)},
i9:function(){return this.en(null)},
el:function(a){return this.bI(a)},
i6:function(){return this.el(null)},
i5:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gek(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.cN()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.af()},
i8:function(a,b){var s,r
for(s=b.gP(b),r=this.gek();s.v();)s.gC(s).gt().U(0,r)
this.af()},
i:function(a){return"Unnamed entity"}}
E.bW.prototype={
i:function(a){return this.b}}
E.c7.prototype={
i:function(a){return this.b}}
E.h3.prototype={}
E.je.prototype={
eO:function(a,b){var s=this
s.cy.gt().n(0,new E.jf(s))
s.db.gt().n(0,new E.jg(s))
s.dx.gt().n(0,new E.jh(s))},
gii:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.ga6(q).I(0,s.ga6(s))
q=s}return q},
geq:function(){var s=this,r=s.ch
if(r==null){r=s.dx
r=s.ch=s.gii().I(0,r.ga6(r))}return r},
cO:function(a){var s=this.dy
return s.push(a==null?C.b.gaF(s):a)},
cN:function(){var s=this.dy
if(s.length>1)s.pop()},
cg:function(a){var s,r=a.b
if(r.length===0)throw H.c(P.f("May not cache a shader with no name."))
s=this.fr
if(s.cm(0,r))throw H.c(P.f('Shader cache already contains a shader by the name "'+r+'".'))
s.m(0,r,a)}}
E.jf.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:2}
E.jg.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:2}
E.jh.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:2}
E.fx.prototype={
d6:function(a){this.es()},
d5:function(){return this.d6(null)},
ghX:function(){var s,r=this,q=Date.now(),p=C.c.a9(P.lR(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.X(q,!1)
return s/p},
dr:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.cE(r*o)
r=s.clientHeight
r.toString
p=C.d.cE(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.mf(C.m,this.gim())}},
es:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.F.f9(s)
r=W.mV(new E.jv(this),t.H)
r.toString
C.F.hf(s,r)}},
ik:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.dr()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.X(p,!1)
q.y=P.lR(p-q.r.a).a*0.000001
p=q.cy
C.b.sl(p.a,0)
p.aV()
p=q.db
C.b.sl(p.a,0)
p.aV()
p=q.dx
C.b.sl(p.a,0)
p.aV()
p=q.dy
C.b.sl(p,0)
p.push(null)
m.a7(q)}q=n.Q
if(q!=null)q.D(null)}catch(o){s=H.ak(o)
r=H.lC(o)
P.lG("Error: "+H.x(s))
P.lG("Stack: "+H.x(r))
throw H.c(s)}}}
E.jv.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.ik()}},
$S:32}
Z.fQ.prototype={}
Z.bX.prototype={
W:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ak(q)
r=P.f('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.x(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.dL.prototype={}
Z.be.prototype={
aC:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
W:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].W(a)}},
az:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
a7:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=t.s,l=H.b([],m)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
l.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.dk(p.c)+"'")+"]")}o=H.b([],m)
for(m=this.c,s=m.length,q=0;q<m.length;m.length===s||(0,H.q)(m),++q){n=m[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(l,", ")+"\nAttrs:   "+C.b.j(o,", ")}}
Z.c0.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.dk(this.c)+"'")+"]"}}
Z.b7.prototype={
gd_:function(a){var s=this.a,r=(s&$.ar().a)!==0?3:0
if((s&$.by().a)!==0)r+=3
if((s&$.bx().a)!==0)r+=3
if((s&$.aR().a)!==0)r+=2
if((s&$.bS().a)!==0)r+=3
if((s&$.ek().a)!==0)r+=3
if((s&$.el().a)!==0)r+=4
if((s&$.cx().a)!==0)++r
return(s&$.bw().a)!==0?r+4:r},
hB:function(a){var s,r=$.ar(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.by()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bx()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aR()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bS()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ek()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.el()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cx()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bw()
if((q&r.a)!==0)if(s===a)return r
return $.np()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b7))return!1
return this.a===b.a},
i:function(a){var s=H.b([],t.s),r=this.a
if((r&$.ar().a)!==0)s.push("Pos")
if((r&$.by().a)!==0)s.push("Norm")
if((r&$.bx().a)!==0)s.push("Binm")
if((r&$.aR().a)!==0)s.push("Txt2D")
if((r&$.bS().a)!==0)s.push("TxtCube")
if((r&$.ek().a)!==0)s.push("Clr3")
if((r&$.el().a)!==0)s.push("Clr4")
if((r&$.cx().a)!==0)s.push("Weight")
if((r&$.bw().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.ic.prototype={}
D.cN.prototype={
n:function(a,b){var s=this.a
return(s==null?this.a=H.b([],t.a):s).push(b)},
U:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.b.B(p,b)
if(p===!0){p=r.a
p=p==null?q:C.b.U(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.b.B(p,b)
if(p===!0){p=r.b
p=p==null?q:C.b.U(p,b)
s=p===!0||s}return s},
D:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.Q():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.b.F(P.iN(p,!0,t.h2),new D.ix(s))
r=q.b
if(r!=null){q.b=H.b([],t.a)
C.b.F(r,new D.iy(s))}return!0},
cs:function(){return this.D(null)},
aS:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.D(s)}}}}
D.ix.prototype={
$1:function(a){a.$1(this.a)},
$S:20}
D.iy.prototype={
$1:function(a){a.$1(this.a)},
$S:20}
D.Q.prototype={}
D.aW.prototype={}
D.aX.prototype={}
D.A.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.x(this.d)+" => "+H.x(this.e)}}
X.cA.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cA))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.eL.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eL))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.iK.prototype={}
X.d3.prototype={}
X.iP.prototype={
bk:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.U(o.a+b.a,o.b+b.b)
o=q.a.gb4()
s=$.ab
if(s==null)s=$.ab=new V.U(0,0)
r=q.x
q.z=new P.X(p,!1)
q.x=n
return new X.c4(a,s,r,o,n)},
cM:function(a,b){this.r=a.a
return!1},
bt:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bs:function(a,b){var s=this.d
if(s==null)return!1
s.D(this.bk(a,b))
return!0},
ie:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gb4()
r=this.x
Date.now()
q.D(new X.c5(new V.Y(a.a,a.b),s,r))
return!0},
fM:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.D(new X.d3(c,q.a.gb4(),b))
q.y=new P.X(s,!1)
s=$.ab
q.x=s==null?$.ab=new V.U(0,0):s}}
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
X.c4.prototype={}
X.j7.prototype={
c1:function(a,b,c){var s=this,r=new P.X(Date.now(),!1),q=s.a.gb4(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.c4(a,p,o,q,b)},
cM:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.D(this.c1(a,b,!0))
return!0},
bt:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.D(r.c1(a,b,!0))
return!0},
bs:function(a,b){var s=this.d
if(s==null)return!1
s.D(this.c1(a,b,!1))
return!0},
ig:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gb4()
Date.now()
r.D(new X.c5(new V.Y(a.a,a.b),s,b))
return!0},
gdS:function(){var s=this.b
return s==null?this.b=D.F():s},
gbP:function(){var s=this.c
return s==null?this.c=D.F():s},
gej:function(){var s=this.d
return s==null?this.d=D.F():s}}
X.c5.prototype={}
X.f8.prototype={}
X.du.prototype={}
X.jA.prototype={
bk:function(a,b){var s,r,q,p,o=this,n=new P.X(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.ab
if(r==null){r=new V.U(0,0)
$.ab=r
s=r}else s=r}r=o.a.gb4()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.du(q,p,r,s)},
ic:function(a){var s=this.b
if(s==null)return!1
s.D(this.bk(a,!0))
return!0},
ia:function(a){var s=this.c
if(s==null)return!1
s.D(this.bk(a,!0))
return!0},
ib:function(a){var s=this.d
if(s==null)return!1
s.D(this.bk(a,!1))
return!0}}
X.fN.prototype={
gb9:function(a){var s=this.b
return s==null?this.b=new X.iK(new X.a9(!1,!1,!1),P.d0(t.S)):s},
gae:function(){var s,r=this.c
if(r==null){r=$.ab
if(r==null){r=$.ab=new V.U(0,0)
s=r}else s=r
r=this.c=new X.j7(this,r,s,new P.X(Date.now(),!1),new P.X(Date.now(),!1))}return r},
gav:function(){var s=this.d
if(s==null){s=$.ab
if(s==null)s=$.ab=new V.U(0,0)
s=this.d=new X.iP(this,s,new P.X(Date.now(),!1),new P.X(Date.now(),!1))}return s},
gbc:function(){var s,r=this.e
if(r==null){r=$.ab
if(r==null){r=$.ab=new V.U(0,0)
s=r}else s=r
r=this.e=new X.jA(this,r,s,new P.X(Date.now(),!1),new P.X(Date.now(),!1))}return r},
gb4:function(){var s=this.a
return V.m8(0,0,C.i.gdO(s).c,C.i.gdO(s).d)},
dd:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.eL(p,new X.a9(s,r,q))},
b0:function(a){var s,r,q=this.gb9(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.a9(p,s,r)},
cd:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gb9(this)
r=a.altKey
q=a.shiftKey
p.c=new X.a9(s,r===!0,q===!0)},
aN:function(a){var s,r,q,p
if(a==null){s=$.ab
return s==null?$.ab=new V.U(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.U(r-p,q-s)},
bm:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.Y(r,s)},
cb:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=H.b([],t.cG)
r=a.touches
if(r==null)r=H.b([],t.gT)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.Y(n)
m=o.pageY
m.toString
C.d.Y(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.Y(l)
l=o.pageY
l.toString
l=C.d.Y(l)
k=j.top
k.toString
s.push(new V.U(n-m,l-k))}return s},
aK:function(a){var s,r,q,p
if(a==null)return new X.cA(0,new X.a9(!1,!1,!1))
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
return new X.cA(s,new X.a9(r,q,p))},
c2:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
fG:function(a){return this.f=!0},
fs:function(a){return this.f=!1},
fA:function(a){if(this.f&&this.c2(a))a.preventDefault()},
fK:function(a){var s,r,q=this
if(!q.f)return
s=q.dd(a)
r=q.gb9(q)
r.c=s.b
r.d.n(0,s.a)},
fI:function(a){var s,r,q=this
if(!q.f)return
s=q.dd(a)
r=q.gb9(q)
r.c=s.b
r.d.U(0,s.a)},
fO:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.b0(a)
if(p.x){s=p.aK(a)
r=p.bm(a)
if(p.gav().cM(s,r))a.preventDefault()
return}s=p.aK(a)
q=p.aN(a)
if(p.gae().cM(s,q))a.preventDefault()},
fS:function(a){var s,r,q,p=this
p.b0(a)
s=p.aK(a)
if(p.x){r=p.bm(a)
if(p.gav().bt(s,r))a.preventDefault()
return}q=p.aN(a)
if(p.gae().bt(s,q))a.preventDefault()},
fE:function(a){var s,r,q,p=this
if(!p.c2(a)){p.b0(a)
s=p.aK(a)
if(p.x){r=p.bm(a)
if(p.gav().bt(s,r))a.preventDefault()
return}q=p.aN(a)
if(p.gae().bt(s,q))a.preventDefault()}},
fQ:function(a){var s,r,q,p=this
p.b0(a)
s=p.aK(a)
if(p.x){r=p.bm(a)
if(p.gav().bs(s,r))a.preventDefault()
return}q=p.aN(a)
if(p.gae().bs(s,q))a.preventDefault()},
fC:function(a){var s,r,q,p=this
if(!p.c2(a)){p.b0(a)
s=p.aK(a)
if(p.x){r=p.bm(a)
if(p.gav().bs(s,r))a.preventDefault()
return}q=p.aN(a)
if(p.gae().bs(s,q))a.preventDefault()}},
fU:function(a){var s,r,q=this
q.b0(a)
s=new V.Y(C.E.ghN(a),C.E.ghO(a)).I(0,q.Q)
if(q.x){if(q.gav().ie(s))a.preventDefault()
return}r=q.aN(a)
if(q.gae().ig(s,r))a.preventDefault()},
fW:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aK(q.y)
r=q.aN(q.y)
q.gav().fM(s,r,p)}},
hb:function(a){var s,r=this
r.a.focus()
r.f=!0
r.cd(a)
s=r.cb(a)
if(r.gbc().ic(s))a.preventDefault()},
h7:function(a){var s
this.cd(a)
s=this.cb(a)
if(this.gbc().ia(s))a.preventDefault()},
h9:function(a){var s
this.cd(a)
s=this.cb(a)
if(this.gbc().ib(s))a.preventDefault()}}
D.cZ.prototype={
gt:function(){var s=this.y
return s==null?this.y=D.F():s},
gei:function(){var s=this.z
return s==null?this.z=D.F():s},
d7:function(a){var s=this.y
return s==null?null:s.D(a)},
dl:function(a){var s=this.z
return s==null?null:s.D(a)},
fL:function(){return this.dl(null)},
fY:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)if(this.f3(a[r]))return!1
return!0},
fl:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gdk(),q=this.e,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
q.push(o)
o.gt().n(0,r)}this.d7(new D.aW())},
h1:function(a,b){var s,r,q,p
for(s=b.gP(b),r=this.gdk(),q=this.e;s.v();){p=s.gC(s)
C.b.U(q,p)
p.gt().U(0,r)}this.d7(new D.aX())},
f3:function(a){var s=C.b.B(this.e,a)
return s}}
V.a2.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a2))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.aF.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aF))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.B(s.a,3,0)+", "+V.B(s.b,3,0)+", "+V.B(s.c,3,0)+", "+V.B(s.d,3,0)+"]"},
w:function(){var s=this
return"["+V.B(s.a,3,0)+", "+V.B(s.b,3,0)+", "+V.B(s.c,3,0)+", "+V.B(s.d,3,0)+"]"}}
V.iv.prototype={}
V.db.prototype={
aa:function(a,b){var s=this,r=H.b([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.n)
return r},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.db))return!1
s=b.a
$.E().toString
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
i:function(a){var s,r,q,p,o=this,n=t.n,m=V.cv(H.b([o.a,o.d,o.r],n),3,0),l=V.cv(H.b([o.b,o.e,o.x],n),3,0),k=V.cv(H.b([o.c,o.f,o.y],n),3,0)
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
V.bl.prototype={
aa:function(a,b){var s=this,r=H.b([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.n)
return r},
cH:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.E().toString
if(Math.abs(b3-0)<1e-9)return V.am()
s=1/b3
r=-l
q=-a2
return V.b1((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
I:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.b1(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bv:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.a4(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bl))return!1
s=b.a
$.E().toString
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
H:function(a){var s,r,q,p,o,n=this,m=t.n,l=V.cv(H.b([n.a,n.e,n.y,n.cx],m),3,0),k=V.cv(H.b([n.b,n.f,n.z,n.cy],m),3,0),j=V.cv(H.b([n.c,n.r,n.Q,n.db],m),3,0),i=V.cv(H.b([n.d,n.x,n.ch,n.dx],m),3,0)
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
w:function(){return this.H("")}}
V.U.prototype={
ao:function(a){return new V.Y(a.a-this.a,a.b-this.b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"},
w:function(){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.a4.prototype={
bi:function(a,b){return new V.a4(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a4))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"},
w:function(){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.bm.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bm))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.B(s.a,3,0)+", "+V.B(s.b,3,0)+", "+V.B(s.c,3,0)+", "+V.B(s.d,3,0)+"]"},
w:function(){var s=this
return"["+V.B(s.a,3,0)+", "+V.B(s.b,3,0)+", "+V.B(s.c,3,0)+", "+V.B(s.d,3,0)+"]"}}
V.fb.prototype={
gaH:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.fb))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.B(s.a,3,0)+", "+V.B(s.b,3,0)+", "+V.B(s.c,3,0)+", "+V.B(s.d,3,0)+"]"}}
V.Y.prototype={
br:function(a){return Math.sqrt(this.ad(this))},
ad:function(a){return this.a*a.a+this.b*a.b},
I:function(a,b){return new V.Y(this.a*b,this.b*b)},
ap:function(a,b){var s
$.E().toString
if(Math.abs(b-0)<1e-9){s=$.az
return s==null?$.az=new V.Y(0,0):s}return new V.Y(this.a/b,this.b/b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.L.prototype={
br:function(a){return Math.sqrt(this.ad(this))},
ad:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cI:function(a,b){return new V.L(V.lE(this.a,a.a,b),V.lE(this.b,a.b,b),V.lE(this.c,a.c,b))},
S:function(){var s=this,r=Math.sqrt(s.ad(s))
if(r===1)return s
return s.ap(0,r)},
bq:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.L(s*r-q*p,q*o-n*r,n*p-s*o)},
a1:function(a,b){return new V.L(this.a+b.a,this.b+b.b,this.c+b.c)},
be:function(a){return new V.L(-this.a,-this.b,-this.c)},
ap:function(a,b){$.E().toString
if(Math.abs(b-0)<1e-9)return V.fO()
return new V.L(this.a/b,this.b/b,this.c/b)},
eh:function(){$.E().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.L))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"},
w:function(){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.dK.prototype={
br:function(a){var s=this,r=s.a,q=s.b,p=s.c,o=s.d
return Math.sqrt(r*r+q*q+p*p+o*o)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dK))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.B(s.a,3,0)+", "+V.B(s.b,3,0)+", "+V.B(s.c,3,0)+", "+V.B(s.d,3,0)+"]"}}
U.ie.prototype={
bV:function(a){var s=V.qw(a,this.c,this.b)
return s},
gt:function(){var s=this.y
return s==null?this.y=D.F():s},
R:function(a){var s=this.y
return s==null?null:s.D(a)},
scU:function(a,b){},
scJ:function(a){var s,r=this,q=r.b
$.E().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bV(s)}r.R(new D.A("maximumLocation",q,r.b))}},
scL:function(a){var s,r=this,q=r.c
$.E().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bV(s)}r.R(new D.A("minimumLocation",q,r.c))}},
san:function(a,b){var s,r=this
b=r.bV(b)
s=r.d
$.E().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.R(new D.A("location",s,b))}},
scK:function(a){var s,r,q=this,p=q.e
$.E().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.R(new D.A("maximumVelocity",p,a))}},
sa0:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.E().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.R(new D.A("velocity",r,a))}},
scp:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.E().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.R(new D.A("dampening",s,a))}},
ag:function(a,b){var s,r,q,p=this,o=p.f
$.E().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.san(0,p.d+s*b)
o=p.x
$.E().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sa0(s)}}}
U.cD.prototype={
gt:function(){var s=this.b
return s==null?this.b=D.F():s},
bd:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cD))return!1
return this.a.q(0,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.bZ.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.F():s},
R:function(a){var s=this.e
return s==null?null:s.D(a)},
aj:function(){return this.R(null)},
fj:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gb_(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.gt()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}this.R(new D.aW())},
h_:function(a,b){var s,r
for(s=b.gP(b),r=this.gb_();s.v();)s.gC(s).gt().U(0,r)
this.R(new D.aX())},
bd:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.ah(o,o.length),n=H.S(o).c,s=null;o.v();){r=n.a(o.d)
if(r!=null){q=r.bd(0,b,c)
s=s==null?q:q.I(0,s)}}p.f=s==null?V.am():s
o=p.e
if(o!=null)o.aS(0)}return p.f},
q:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bZ))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(p>=q.length)return H.d(q,p)
if(!J.a7(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$iZ:1}
U.Z.prototype={}
U.dH.prototype={
gt:function(){var s=this.cy
return s==null?this.cy=D.F():s},
R:function(a){var s=this.cy
return s==null?null:s.D(a)},
aj:function(){return this.R(null)},
bo:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.gae().gdS().n(0,s.gc3())
a.gae().gej().n(0,s.gc5())
a.gae().gbP().n(0,s.gc7())
return!0},
c4:function(a){var s=this,r=s.c,q=s.a
if(!r.q(0,q==null?null:q.gb9(q).c))return
s.x=s.y=!0
s.z=s.b.d},
c6:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.ao(a.d)
if(s.ad(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.san(0,-a.y.ao(r).I(0,2).ap(0,s.gaH()).a*2.5+p.z)
q.sa0(0)
p.Q=a.z.ao(r).I(0,2).ap(0,s.gaH())
p.aj()},
c8:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.ad(s)>0.0001){r.b.sa0(r.Q.a*10*2.5)
r.aj()}},
bd:function(a,b,c){var s,r,q=this,p=q.ch,o=b.e
if(p<o){q.ch=o
p=q.b
p.ag(0,b.y)
p=p.d
s=Math.cos(p)
r=Math.sin(p)
q.cx=V.b1(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)}return q.cx},
$iZ:1}
U.dI.prototype={
gt:function(){var s=this.fx
return s==null?this.fx=D.F():s},
R:function(a){var s=this.fx
return s==null?null:s.D(a)},
aj:function(){return this.R(null)},
bo:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.gae().gdS().n(0,q.gc3())
a.gae().gej().n(0,q.gc5())
a.gae().gbP().n(0,q.gc7())
s=a.gav()
r=s.f
s=r==null?s.f=D.F():r
s.n(0,q.gfb())
s=a.gav()
r=s.d
s=r==null?s.d=D.F():r
s.n(0,q.gfd())
s=a.gbc()
r=s.b
s=r==null?s.b=D.F():r
s.n(0,q.ghs())
s=a.gbc()
r=s.d
s=r==null?s.d=D.F():r
s.n(0,q.ghq())
s=a.gbc()
r=s.c
s=r==null?s.c=D.F():r
s.n(0,q.gho())
return!0},
aY:function(a){return new V.Y(a.a,a.b)},
c4:function(a){var s=this
t.Z.a(a)
if(!s.d.q(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
c6:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ao(a.d)
if(s.ad(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aY(a.y.ao(r).I(0,2).ap(0,s.gaH()))
p=n.c
p.san(0,-q.a*2.5+n.cy)
o=n.b
o.san(0,-q.b*2.5+n.db)
o.sa0(0)
p.sa0(0)
n.dx=n.aY(a.z.ao(r).I(0,2).ap(0,s.gaH()))
n.aj()},
c8:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.ad(s)>0.0001){r.c.sa0(-r.dx.a*10*2.5)
r.b.sa0(-r.dx.b*10*2.5)
r.aj()}},
fc:function(a){var s=this
if(t.bv.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
fe:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.q(0,a.x.b))return
s=a.c
r=a.d
q=n.aY(a.y.ao(r).I(0,2).ap(0,s.gaH()))
p=n.c
p.san(0,-q.a*2.5+n.cy)
o=n.b
o.san(0,-q.b*2.5+n.db)
o.sa0(0)
p.sa0(0)
n.dx=n.aY(a.z.ao(r).I(0,2).ap(0,s.gaH()))
n.aj()},
ht:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
hr:function(a){var s,r,q,p,o,n=this
t.dr.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ao(a.d)
if(s.ad(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aY(a.y.ao(r).I(0,2).ap(0,s.gaH()))
p=n.c
p.san(0,-q.a*2.5+n.cy)
o=n.b
o.san(0,-q.b*2.5+n.db)
o.sa0(0)
p.sa0(0)
n.dx=n.aY(a.z.ao(r).I(0,2).ap(0,s.gaH()))
n.aj()},
hp:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.ad(s)>0.0001){r.c.sa0(-r.dx.a*10*2.5)
r.b.sa0(-r.dx.b*10*2.5)
r.aj()}},
bd:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(o<n){p.dy=n
s=b.y
o=p.c
o.ag(0,s)
n=p.b
n.ag(0,s)
n=n.d
r=Math.cos(n)
q=Math.sin(n)
n=V.b1(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
o=o.d
r=Math.cos(o)
q=Math.sin(o)
p.fr=n.I(0,V.b1(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iZ:1}
U.dJ.prototype={
gt:function(){var s=this.r
return s==null?this.r=D.F():s},
R:function(a){var s=this.r
return s==null?null:s.D(a)},
bo:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.gae()
r=s.e
s=r==null?s.e=D.F():r
r=this.gfg()
s.n(0,r)
s=a.gav()
q=s.e;(q==null?s.e=D.F():q).n(0,r)
return!0},
fh:function(a){var s=this,r=s.b,q=s.a
if(!r.q(0,q==null?null:q.gb9(q).c))return
t.bZ.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.R(new D.A("zoom",r,q))}},
bd:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.b1(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$iZ:1}
M.cC.prototype={
gt:function(){var s=this.r
return s==null?this.r=D.F():s},
T:function(a){var s=this.r
return s==null?null:s.D(a)},
aI:function(){return this.T(null)},
h3:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gV(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p].gt()
n=o.a;(n==null?o.a=H.b([],q):n).push(r)}this.T(new D.aW())},
h5:function(a,b){var s,r
for(s=b.gP(b),r=this.gV();s.v();)s.gC(s).gt().U(0,r)
this.T(new D.aX())},
a7:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.ah(s,s.length),r=H.S(s).c;s.v();)r.a(s.d).a7(a)
q.f=!1},
$iao:1}
M.cG.prototype={
gt:function(){var s=this.r
return s==null?this.r=D.F():s},
T:function(a){var s=this.r
return s==null?null:s.D(a)},
aI:function(){return this.T(null)},
sbp:function(a){var s,r,q=this
if(a==null)a=new X.iH()
s=q.b
if(s!==a){if(s!=null)s.gt().U(0,q.gV())
r=q.b
q.b=a
a.gt().n(0,q.gV())
q.T(new D.A("camera",r,q.b))}},
sbb:function(a,b){var s,r,q=this
if(b==null)b=X.lV(null)
s=q.c
if(s!==b){if(s!=null)s.gt().U(0,q.gV())
r=q.c
q.c=b
b.gt().n(0,q.gV())
q.T(new D.A("target",r,q.c))}},
sbu:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gt().U(0,r.gV())
s=r.d
r.d=a
if(a!=null)a.gt().n(0,r.gV())
r.T(new D.A("technique",s,r.d))}},
a7:function(a){var s,r=this
a.cO(r.d)
s=r.c
if(s!=null)s.W(a)
s=r.b
if(s!=null)s.W(a)
s=r.d
if(s!=null)s.ag(0,a)
s=r.e
s.ag(0,a)
s.a7(a)
s=r.b
if(s!=null)s.az(a)
s=r.c
if(s!=null)s.az(a)
a.cN()},
$iao:1}
M.cM.prototype={
T:function(a){var s=this.y
return s==null?null:s.D(a)},
aI:function(){return this.T(null)},
fu:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gV(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.cN()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.T(new D.aW())},
fw:function(a,b){var s,r
for(s=b.gP(b),r=this.gV();s.v();)s.gC(s).gt().U(0,r)
this.T(new D.aX())},
sbp:function(a){var s,r,q=this
if(a==null)a=X.m2(null)
s=q.b
if(s!==a){if(s!=null)s.gt().U(0,q.gV())
r=q.b
q.b=a
a.gt().n(0,q.gV())
q.T(new D.A("camera",r,q.b))}},
sbb:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gt().U(0,r.gV())
s=r.c
r.c=b
b.gt().n(0,r.gV())
r.T(new D.A("target",s,r.c))}},
sbu:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gt().U(0,r.gV())
s=r.d
r.d=a
if(a!=null)a.gt().n(0,r.gV())
r.T(new D.A("technique",s,r.d))}},
gt:function(){var s=this.y
return s==null?this.y=D.F():s},
a7:function(a){var s,r,q,p=this
a.cO(p.d)
s=p.c
if(s!=null)s.W(a)
s=p.b
if(s!=null)s.W(a)
s=p.d
if(s!=null)s.ag(0,a)
for(s=p.e.a,r=new J.ah(s,s.length),q=H.S(r).c;r.v();)q.a(r.d).ag(0,a)
for(s=new J.ah(s,s.length),r=H.S(s).c;s.v();)r.a(s.d).a7(a)
if(p.b!=null){a.cy.aQ()
a.db.aQ()}s=p.c
if(s!=null)s.az(a)
a.cN()},
$iao:1}
M.cR.prototype={
gt:function(){var s=this.b
return s==null?this.b=D.F():s},
T:function(a){var s=this.b
return s==null?null:s.D(a)},
aI:function(){return this.T(null)},
sb3:function(a){var s=this.d
if(s!=null)s.sb3(a)
s=this.f
if(s!=null)s.sb3(a)},
a7:function(a){var s=this.e
if(s!=null)s.a7(a)
s=this.r
if(s!=null)s.a7(a)},
$iao:1}
A.eq.prototype={}
A.i4.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hP:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
cr:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.aG.prototype={
gaD:function(a){var s=this.a?1:0,r=this.b?2:0
return s|r|0},
i:function(a){var s=this.a?1:0,r=this.b?2:0
return""+(s|r|0)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof A.aG))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.cS.prototype={
ak:function(a,b){if(b!=null&&b.d)if(a!=null)a.cY(b)}}
A.iD.prototype={
aW:function(a,b,c,d){var s,r,q,p,o=c.length
if(0>=o)return H.d(c,0)
s=c[0]
$.E().toString
r=Math.abs(s-0)<1e-9
if(r){if(0>=d.length)return H.d(d,0)
q=d[0]
d=C.b.d0(d,1)
c=C.b.d0(c,1);--o}else q=0
s=a.a+="vec4 blur"+b+"()\n"
s+="{\n"
a.a=s
if(r)s=a.a+="  vec4 color = texture2D(colorTxt, txt2D)*"+H.x(q)+";\n"
else s=a.a=s+"  vec4 color = vec4(0.0);\n"
s=a.a=s+"  vec2 offset;\n"
for(p=0;p<o;++p){if(p>=c.length)return H.d(c,p)
a.a+="  offset = blurScale * "+H.x(c[p])+";\n"
if(p>=d.length)return H.d(d,p)
a.a+="  color += texture2D(colorTxt, txt2D + offset) * "+H.x(d[p])+";\n"
if(p>=d.length)return H.d(d,p)
s=a.a+="  color += texture2D(colorTxt, txt2D - offset) * "+H.x(d[p])+";\n"}s+="  return color; \n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
i:function(a){return this.b}}
A.d8.prototype={
eN:function(d2,d3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6=u.C,c7="Required uniform value, ",c8=", was not defined or used in shader.",c9=c4.x,d0=new P.V(""),d1=c9.fr
if(d1){s=""+"uniform mat4 objMat;\n"
d0.a=s}else s=""
r=c9.fx
s=(r?d0.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
d0.a=s
s+="\n"
d0.a=s
s=d0.a=s+"attribute vec3 posAttr;\n"
q=c9.k4
if(q){s+="attribute vec3 normAttr;\n"
d0.a=s}p=c9.r1
d0.a=(p?d0.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.pK(c9,d0)
A.pM(c9,d0)
A.pL(c9,d0)
A.pO(c9,d0)
A.pP(c9,d0)
A.pN(c9,d0)
A.pQ(c9,d0)
s=d0.a+="vec4 getPos()\n"
s+="{\n"
d0.a=s
o=c9.ry
s+="   return projViewObjMat*vec4("+(o?"bendPos":"posAttr")+", 1.0);\n"
d0.a=s
s+="}\n"
d0.a=s
s+="\n"
d0.a=s
s+="void main()\n"
d0.a=s
s=d0.a=s+"{\n"
if(o){s+="   setupBendData();\n"
d0.a=s}if(q){s+="   normalVec = getNorm();\n"
d0.a=s}if(p){s+="   binormalVec = getBinm();\n"
d0.a=s}if(c9.r2){s+="   txt2D = getTxt2D();\n"
d0.a=s}if(c9.rx){s+="   txtCube = getTxtCube();\n"
d0.a=s}if(c9.k2){s+="   objPos = getObjPos();\n"
d0.a=s}s=(c9.k3?d0.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
d0.a=s
s+="}\n"
d0.a=s
s=d0.a=s+"\n"
c4.cG(0,s.charCodeAt(0)==0?s:s,A.pJ(c9))
c4.y=c4.ga3(c4).h(0,"posAttr")
c4.Q=c4.ga3(c4).h(0,"normAttr")
c4.z=c4.ga3(c4).h(0,"binmAttr")
c4.ch=c4.ga3(c4).h(0,"txt2DAttr")
c4.cx=c4.ga3(c4).h(0,"txtCubeAttr")
c4.cy=c4.ga3(c4).h(0,"bendAttr")
if(c9.dy)c4.fy=t.j.a(c4.gA().L(0,"invViewMat"))
if(d1)c4.db=t.j.a(c4.gA().L(0,"objMat"))
if(r)c4.dx=t.j.a(c4.gA().L(0,"viewObjMat"))
d1=t.j
c4.fr=d1.a(c4.gA().L(0,"projViewObjMat"))
if(c9.go)c4.dy=d1.a(c4.gA().L(0,"viewMat"))
if(c9.x1)c4.go=t.Q.a(c4.gA().L(0,"txt2DMat"))
if(c9.x2)c4.id=d1.a(c4.gA().L(0,"txtCubeMat"))
if(c9.y1)c4.k1=d1.a(c4.gA().L(0,"colorMat"))
c4.k3=H.b([],t.p)
s=c9.b6
if(s>0){c4.k2=t.w.a(c4.gA().L(0,"bendMatCount"))
for(n=0;n<s;++n){r=c4.k3
m=c4.r
if(m==null)H.h(P.f(c6))
q="bendValues["+n+"].mat"
l=m.h(0,q)
if(l==null)H.h(P.f(c7+q+c8))
r.push(d1.a(l))}}d1=c9.a
if(d1.a)c4.k4=t.g.a(c4.gA().L(0,"emissionClr"))
if(d1.b)c4.r1=t.G.a(c4.gA().L(0,"emissionTxt"))
d1=c9.b
if(d1.a)c4.rx=t.g.a(c4.gA().L(0,"ambientClr"))
if(d1.b)c4.ry=t.G.a(c4.gA().L(0,"ambientTxt"))
d1=c9.c
if(d1.a)c4.x2=t.g.a(c4.gA().L(0,"diffuseClr"))
if(d1.b)c4.y1=t.G.a(c4.gA().L(0,"diffuseTxt"))
d1=c9.d
if(d1.a)c4.b6=t.g.a(c4.gA().L(0,"invDiffuseClr"))
if(d1.b)c4.b7=t.G.a(c4.gA().L(0,"invDiffuseTxt"))
d1=c9.e
s=d1.a
if(s||d1.b||!1){c4.e_=t.u.a(c4.gA().L(0,"shininess"))
if(s)c4.dY=t.g.a(c4.gA().L(0,"specularClr"))
if(d1.b)c4.dZ=t.G.a(c4.gA().L(0,"specularTxt"))}if(c9.f.b)c4.e0=t.G.a(c4.gA().L(0,"bumpTxt"))
if(c9.db){c4.e1=t.l.a(c4.gA().L(0,"envSampler"))
d1=c9.r
if(d1.a)c4.e2=t.g.a(c4.gA().L(0,"reflectClr"))
if(d1.b)c4.e3=t.G.a(c4.gA().L(0,"reflectTxt"))
d1=c9.x
s=d1.a
if(s||d1.b||!1){c4.e4=t.u.a(c4.gA().L(0,"refraction"))
if(s)c4.e5=t.g.a(c4.gA().L(0,"refractClr"))
if(d1.b)c4.e6=t.G.a(c4.gA().L(0,"refractTxt"))}}d1=c9.y
if(d1.a)c4.e7=t.u.a(c4.gA().L(0,"alpha"))
if(d1.b)c4.e8=t.G.a(c4.gA().L(0,"alphaTxt"))
if(c9.k1){d1=c9.z
s=d1.length
if(s!==0){r=t.S
c4.ct=P.R(r,t.W)
c4.cu=P.R(r,t.x)
for(r=t.w,q=t.g,p=t.u,o=t.c,k=0;k<d1.length;d1.length===s||(0,H.q)(d1),++k){j=d1[k]
i=j.a
h="barLight"+i
g=H.b([],o)
for(f=j.b,e=(i&4)!==0,n=0;n<f;++n){m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"s["+n+"].startPnt"
l=m.h(0,d)
if(l==null)H.h(P.f(c7+d+c8))
q.a(l)
m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"s["+n+"].endPnt"
c=m.h(0,d)
if(c==null)H.h(P.f(c7+d+c8))
q.a(c)
m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"s["+n+"].color"
b=m.h(0,d)
if(b==null)H.h(P.f(c7+d+c8))
q.a(b)
if(e){m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"s["+n+"].att0"
a=m.h(0,d)
if(a==null)H.h(P.f(c7+d+c8))
p.a(a)
m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"s["+n+"].att1"
a0=m.h(0,d)
if(a0==null)H.h(P.f(c7+d+c8))
p.a(a0)
m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"s["+n+"].att2"
a1=m.h(0,d)
if(a1==null)H.h(P.f(c7+d+c8))
p.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c5
a3=a2
a4=a3}g.push(new A.dA(l,c,b,a4,a3,a2))}c4.cu.m(0,i,g)
f=c4.ct
m=c4.r
if(m==null)H.h(P.f(c6))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.h(P.f(c7+e+c8))
f.m(0,i,r.a(l))}}d1=c9.Q
s=d1.length
if(s!==0){r=t.S
c4.cv=P.R(r,t.W)
c4.cw=P.R(r,t.E)
for(r=t.w,q=t.g,p=t.G,o=t.V,k=0;k<d1.length;d1.length===s||(0,H.q)(d1),++k){j=d1[k]
i=j.a
h="dirLight"+i
g=H.b([],o)
for(f=j.b,e=(i&1)!==0,n=0;n<f;++n){if(e){m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"s["+n+"].objUp"
l=m.h(0,d)
if(l==null)H.h(P.f(c7+d+c8))
q.a(l)
m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"s["+n+"].objRight"
c=m.h(0,d)
if(c==null)H.h(P.f(c7+d+c8))
q.a(c)
m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"s["+n+"].objDir"
b=m.h(0,d)
if(b==null)H.h(P.f(c7+d+c8))
q.a(b)
a5=b
a6=c
a7=l}else{a5=c5
a6=a5
a7=a6}m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"s["+n+"].viewDir"
l=m.h(0,d)
if(l==null)H.h(P.f(c7+d+c8))
q.a(l)
m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"s["+n+"].color"
c=m.h(0,d)
if(c==null)H.h(P.f(c7+d+c8))
q.a(c)
if(e){m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"sTexture2D"+n
b=m.h(0,d)
if(b==null)H.h(P.f(c7+d+c8))
p.a(b)
a8=b}else a8=c5
g.push(new A.dB(a7,a6,a5,l,c,a8))}c4.cw.m(0,i,g)
f=c4.cv
m=c4.r
if(m==null)H.h(P.f(c6))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.h(P.f(c7+e+c8))
f.m(0,i,r.a(l))}}d1=c9.ch
s=d1.length
if(s!==0){r=t.S
c4.cz=P.R(r,t.W)
c4.cA=P.R(r,t.f0)
for(r=t.w,q=t.g,p=t.Q,o=t.l,f=t.bw,e=t.u,d=t.B,k=0;k<d1.length;d1.length===s||(0,H.q)(d1),++k){j=d1[k]
i=j.a
h="pointLight"+i
g=H.b([],d)
for(a9=j.b,b0=(i&4)!==0,b1=(i&2)!==0,b2=(i&1)!==0,b3=(i&3)!==0,n=0;n<a9;++n){m=c4.r
if(m==null)H.h(P.f(c6))
b4=h+"s["+n+"].point"
l=m.h(0,b4)
if(l==null)H.h(P.f(c7+b4+c8))
q.a(l)
m=c4.r
if(m==null)H.h(P.f(c6))
b4=h+"s["+n+"].viewPnt"
c=m.h(0,b4)
if(c==null)H.h(P.f(c7+b4+c8))
q.a(c)
m=c4.r
if(m==null)H.h(P.f(c6))
b4=h+"s["+n+"].color"
b=m.h(0,b4)
if(b==null)H.h(P.f(c7+b4+c8))
q.a(b)
if(b3){m=c4.r
if(m==null)H.h(P.f(c6))
b4=h+"s["+n+"].invViewRotMat"
a=m.h(0,b4)
if(a==null)H.h(P.f(c7+b4+c8))
p.a(a)
b5=a}else b5=c5
if(b2){m=c4.r
if(m==null)H.h(P.f(c6))
b4=h+"sTextureCube"+n
a=m.h(0,b4)
if(a==null)H.h(P.f(c7+b4+c8))
o.a(a)
a8=a}else a8=c5
if(b1){m=c4.r
if(m==null)H.h(P.f(c6))
b4=h+"sShadowCube"+n
a=m.h(0,b4)
if(a==null)H.h(P.f(c7+b4+c8))
o.a(a)
m=c4.r
if(m==null)H.h(P.f(c6))
b4=h+"s["+n+"].shadowAdj"
a0=m.h(0,b4)
if(a0==null)H.h(P.f(c7+b4+c8))
f.a(a0)
b6=a
b7=a0}else{b6=c5
b7=b6}if(b0){m=c4.r
if(m==null)H.h(P.f(c6))
b4=h+"s["+n+"].att0"
a=m.h(0,b4)
if(a==null)H.h(P.f(c7+b4+c8))
e.a(a)
m=c4.r
if(m==null)H.h(P.f(c6))
b4=h+"s["+n+"].att1"
a0=m.h(0,b4)
if(a0==null)H.h(P.f(c7+b4+c8))
e.a(a0)
m=c4.r
if(m==null)H.h(P.f(c6))
b4=h+"s["+n+"].att2"
a1=m.h(0,b4)
if(a1==null)H.h(P.f(c7+b4+c8))
e.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c5
a3=a2
a4=a3}g.push(new A.dD(l,c,b5,b,a8,b6,b7,a4,a3,a2))}c4.cA.m(0,i,g)
a9=c4.cz
m=c4.r
if(m==null)H.h(P.f(c6))
b0=h+"Count"
l=m.h(0,b0)
if(l==null)H.h(P.f(c7+b0+c8))
a9.m(0,i,r.a(l))}}c9=c9.cx
d1=c9.length
if(d1!==0){s=t.S
c4.cB=P.R(s,t.W)
c4.cC=P.R(s,t.R)
for(s=t.w,r=t.g,q=t.u,p=t.bw,o=t.G,f=t.M,k=0;k<c9.length;c9.length===d1||(0,H.q)(c9),++k){j=c9[k]
i=j.a
h="spotLight"+i
g=H.b([],f)
for(e=j.b,d=(i&2)!==0,a9=(i&1)!==0,b0=(i&4)!==0,b1=(i&8)!==0,b2=(i&3)!==0,n=0;n<e;++n){m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].objPnt"
l=m.h(0,b3)
if(l==null)H.h(P.f(c7+b3+c8))
r.a(l)
m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].objDir"
c=m.h(0,b3)
if(c==null)H.h(P.f(c7+b3+c8))
r.a(c)
m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].viewPnt"
b=m.h(0,b3)
if(b==null)H.h(P.f(c7+b3+c8))
r.a(b)
m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].color"
a=m.h(0,b3)
if(a==null)H.h(P.f(c7+b3+c8))
r.a(a)
if(b2){m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].objUp"
a0=m.h(0,b3)
if(a0==null)H.h(P.f(c7+b3+c8))
r.a(a0)
m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].objRight"
a1=m.h(0,b3)
if(a1==null)H.h(P.f(c7+b3+c8))
r.a(a1)
m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].tuScalar"
b8=m.h(0,b3)
if(b8==null)H.h(P.f(c7+b3+c8))
q.a(b8)
m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].tvScalar"
b9=m.h(0,b3)
if(b9==null)H.h(P.f(c7+b3+c8))
q.a(b9)
c0=b9
c1=b8
a6=a1
a7=a0}else{c0=c5
c1=c0
a6=c1
a7=a6}if(d){m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].shadowAdj"
a0=m.h(0,b3)
if(a0==null)H.h(P.f(c7+b3+c8))
p.a(a0)
b7=a0}else b7=c5
if(b1){m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].cutoff"
a0=m.h(0,b3)
if(a0==null)H.h(P.f(c7+b3+c8))
q.a(a0)
m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].coneAngle"
a1=m.h(0,b3)
if(a1==null)H.h(P.f(c7+b3+c8))
q.a(a1)
c2=a1
c3=a0}else{c2=c5
c3=c2}if(b0){m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].att0"
a0=m.h(0,b3)
if(a0==null)H.h(P.f(c7+b3+c8))
q.a(a0)
m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].att1"
a1=m.h(0,b3)
if(a1==null)H.h(P.f(c7+b3+c8))
q.a(a1)
m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].att2"
b8=m.h(0,b3)
if(b8==null)H.h(P.f(c7+b3+c8))
q.a(b8)
a2=b8
a3=a1
a4=a0}else{a2=c5
a3=a2
a4=a3}if(a9){m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"sTexture2D"+n
a0=m.h(0,b3)
if(a0==null)H.h(P.f(c7+b3+c8))
o.a(a0)
a8=a0}else a8=c5
if(d){m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"sShadow2D"+n
a0=m.h(0,b3)
if(a0==null)H.h(P.f(c7+b3+c8))
o.a(a0)
b6=a0}else b6=c5
g.push(new A.dG(l,c,b,a,a7,a6,c1,c0,b7,c3,c2,a4,a3,a2,a8,b6))}c4.cC.m(0,i,g)
e=c4.cB
m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"Count"
l=m.h(0,d)
if(l==null)H.h(P.f(c7+d+c8))
e.m(0,i,s.a(l))}}}},
ak:function(a,b){if(b!=null&&b.d)if(a!=null)a.cY(b)},
hj:function(a,b){}}
A.bc.prototype={
i:function(a){return"barLight"+this.a}}
A.bf.prototype={
i:function(a){return"dirLight"+this.a}}
A.bn.prototype={
i:function(a){return"pointLight"+this.a}}
A.bp.prototype={
i:function(a){return"spotLight"+this.a}}
A.iT.prototype={
i:function(a){return this.b7}}
A.dA.prototype={}
A.dB.prototype={}
A.dD.prototype={}
A.dG.prototype={}
A.bK.prototype={
cG:function(a,b,c){var s,r,q,p,o,n=this
n.c=b
n.d=c
s=n.de(b,35633)
r=n.de(n.d,35632)
q=n.a
p=q.createProgram()
p.toString
n.e=p
q.attachShader(n.gaL(),s)
q.attachShader(n.gaL(),r)
q.linkProgram(n.gaL())
if(!H.mO(q.getProgramParameter(n.gaL(),35714))){o=q.getProgramInfoLog(n.gaL())
if(o==null)o="undefined log error"
q.deleteProgram(n.e)
H.h(P.f("Failed to link shader: "+o))}n.hk()
n.hm()},
ga3:function(a){var s=this.f
if(s==null)throw H.c(P.f("Must initialize the shader prior to getting the attributes."))
return s},
gA:function(){var s=this.r
if(s==null)throw H.c(P.f(u.C))
return s},
gaL:function(){var s=this.e
if(s==null)throw H.c(P.f(u.F))
return s},
W:function(a){a.a.useProgram(this.e)
this.ga3(this).hP()},
de:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.mO(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.f('Error compiling shader "'+H.x(q)+'": '+s))}return q},
hk:function(){var s,r,q,p,o=this,n=u.F,m=H.b([],t.eu),l=o.a,k=H.hY(l.getProgramParameter(o.gaL(),35721))
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
m.push(new A.eq(l,q,p))}o.f=new A.i4(m)},
hm:function(){var s,r,q,p,o,n,m=this,l=u.F,k=H.b([],t.dC),j=m.a,i=H.hY(j.getProgramParameter(m.gaL(),35718))
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
k.push(m.hL(o,n,q,p))}m.r=new A.jE(k)},
aX:function(a,b,c){var s=this.a
if(a===1)return new A.cg(s,b,c)
else return A.lj(s,this.e,b,a,c)},
f6:function(a,b,c){var s=this.a
if(a===1)return new A.dE(s,b,c)
else return A.lj(s,this.e,b,a,c)},
f7:function(a,b,c){var s=this.a
if(a===1)return new A.dF(s,b,c)
else return A.lj(s,this.e,b,a,c)},
bz:function(a,b){return new P.h5(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
hL:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aX(b,c,d)
case 5121:return s.aX(b,c,d)
case 5122:return s.aX(b,c,d)
case 5123:return s.aX(b,c,d)
case 5124:return s.aX(b,c,d)
case 5125:return s.aX(b,c,d)
case 5126:return new A.dw(s.a,c,d)
case 35664:return new A.dx(s.a,c,d)
case 35665:return new A.dy(s.a,c,d)
case 35666:return new A.dz(s.a,c,d)
case 35667:return new A.fE(s.a,c,d)
case 35668:return new A.fF(s.a,c,d)
case 35669:return new A.fG(s.a,c,d)
case 35674:return new A.fH(s.a,c,d)
case 35675:return new A.dC(s.a,c,d)
case 35676:return new A.ch(s.a,c,d)
case 35678:return s.f6(b,c,d)
case 35680:return s.f7(b,c,d)
case 35670:throw H.c(s.bz("BOOL",c))
case 35671:throw H.c(s.bz("BOOL_VEC2",c))
case 35672:throw H.c(s.bz("BOOL_VEC3",c))
case 35673:throw H.c(s.bz("BOOL_VEC4",c))
default:throw H.c(P.f("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.dr.prototype={}
A.a0.prototype={}
A.jE.prototype={
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
A.cg.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.fE.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.fF.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.fG.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.fD.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.dw.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.dx.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.dy.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.dz.prototype={
eD:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+this.c}}
A.fH.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.dC.prototype={
ah:function(a){var s=new Float32Array(H.cq(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.ch.prototype={
ah:function(a){var s=new Float32Array(H.cq(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.dE.prototype={
cY:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+this.c}}
A.dF.prototype={
eC:function(a){var s=a.d,r=this.a,q=this.d
if(s<6)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+this.c}}
F.kq.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cI(q.b,b).cI(q.d.cI(q.c,b),c)
q=new V.a4(p.a,p.b,p.c)
if(!J.a7(a.f,q)){a.f=q
q=a.a
if(q!=null)q.af()}a.sir(p.S())
q=1-b
s=1-c
s=new V.bm(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.a7(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.af()}},
$S:44}
F.at.prototype={
aU:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.c(P.f("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.a=a
a.ga4().b.push(s)
s.b=b
b.ga4().c.push(s)
s.c=c
c.ga4().d.push(s)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.ga4().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.af()}},
eZ:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.fO()
if(n!=null)q=q.a1(0,n)
if(s!=null)q=q.a1(0,s)
if(r!=null)q=q.a1(0,r)
if(q.eh())return p
return q.S()},
f0:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.bi(0,n)
q=new V.L(o.a,o.b,o.c).S()
o=r.bi(0,n)
return q.bq(new V.L(o.a,o.b,o.c).S()).S()},
cl:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.eZ()
if(s==null){s=q.f0()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.af()}return!0},
eY:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.fO()
if(n!=null)q=q.a1(0,n)
if(s!=null)q=q.a1(0,s)
if(r!=null)q=q.a1(0,r)
if(q.eh())return p
return q.S()},
f_:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.E().toString
if(Math.abs(p-0)<1e-9){j=b.bi(0,e)
o=new V.L(j.a,j.b,j.c).S()
if(q.a-r.a<0)o=o.be(0)}else{n=(j-s.b)/p
j=b.bi(0,e)
j=new V.a4(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).bi(0,h)
o=new V.L(j.a,j.b,j.c).S()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.be(0)}m=l.d
if(m!=null){m=m.S()
o=m.bq(o).S().bq(m).S()}return o},
cj:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.eY()
if(s==null){s=q.f_()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.af()}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
H:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gb8(p)
p=a+C.a.ax(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gb8(o)
p=p+C.a.ax(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gb8(o)
s=p+C.a.ax(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.w()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.w()
return s+((p==null?"-":p)+"}")},
w:function(){return this.H("")}}
F.eN.prototype={
eM:function(a,b){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a line with a start vertex which is not attached to a shape."))
if(r!==b.a)throw H.c(P.f("May not create a line with vertices attached to different shapes."))
s.a=a
a.gaG(a).b.push(s)
s.b=b
b.gaG(b).c.push(s)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gaG(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.af()}},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
H:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gb8(s)
s=a+C.a.ax(C.c.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gb8(r)
return s+C.a.ax(C.c.i(r==null?-1:r),0)},
w:function(){return this.H("")}}
F.f7.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
H:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gb8(s)
return a+C.a.ax(C.c.i(s),0)},
w:function(){return this.H("")}}
F.jj.prototype={
ga8:function(){var s=this.a
return s==null?this.a=new F.y(this,H.b([],t.k)):s},
gbJ:function(a){var s=this.b
return s==null?this.b=new F.cb(this,H.b([],t.o)):s},
gaG:function(a){var s=this.c
return s==null?this.c=new F.dp(this,H.b([],t.L)):s},
ga4:function(){var s=this.d
return s==null?this.d=new F.dn(this,H.b([],t.v)):s},
gt:function(){var s=this.e
return s==null?this.e=D.F():s},
i2:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.e
if(a0!=null)++a0.d
a1.ga8().a_()
s=b.ga8().c.length
for(a0=a1.ga8().c,r=a0.length,q=t.k,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){o=a0[p]
n=b.a
if(n==null)n=b.a=new F.y(b,H.b([],q))
n.n(0,o.hI())}b.ga8().a_()
for(a0=a1.gbJ(a1).b,r=a0.length,n=t.o,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){m=a0[p]
l=b.a
if(l==null)l=b.a=new F.y(b,H.b([],q))
k=m.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).a_()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
h=l[k]
k=b.b
l=(k==null?b.b=new F.cb(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,h)
l=new F.f7()
if(h.a==null)H.h(P.f("May not create a point with a vertex which is not attached to a shape."))
l.a=h
k=h.b;(k==null?h.b=new F.jW(H.b([],n)):k).b.push(l)
k=l.a
if(k!=null){k=k.a
if(k!=null){j=k.b;(j==null?k.b=new F.cb(k,H.b([],n)):j).b.push(l)}}l=l.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.D(a)}}}for(a0=a1.gaG(a1).b,r=a0.length,n=t.L,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){g=a0[p]
l=b.a
if(l==null)l=b.a=new F.y(b,H.b([],q))
k=g.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).a_()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.y(b,H.b([],q)):k
k=g.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).a_()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.c
l=(k==null?b.c=new F.dp(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,e)
new F.eN().eM(f,e)}for(a0=a1.ga4().b,r=a0.length,n=t.v,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){d=a0[p]
l=b.a
if(l==null)l=b.a=new F.y(b,H.b([],q))
k=d.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).a_()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.y(b,H.b([],q)):k
k=d.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).a_()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.a
l=k==null?b.a=new F.y(b,H.b([],q)):k
k=d.c
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).a_()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
c=l[k]
k=b.d
l=(k==null?b.d=new F.dn(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,e)
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,c)
new F.at().aU(f,e,c)}a0=b.e
if(a0!=null)a0.aS(0)},
aO:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.ga4().aO()||!1
if(!r.ga8().aO())s=!1
q=r.e
if(q!=null)q.aS(0)
return s},
ci:function(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=34962,c={},b=f.ga8().c.length,a=$.ar(),a0=a3.a,a1=(a0&a.a)!==0?1:0
if((a0&$.by().a)!==0)++a1
if((a0&$.bx().a)!==0)++a1
if((a0&$.aR().a)!==0)++a1
if((a0&$.bS().a)!==0)++a1
if((a0&$.ek().a)!==0)++a1
if((a0&$.el().a)!==0)++a1
if((a0&$.cx().a)!==0)++a1
if((a0&$.bw().a)!==0)++a1
s=a3.gd_(a3)
r=P.eP(b*s,0,!1,t.gR)
c.a=0
q=P.o0(a1,new F.jk(c,f,a3,s*4,b,s,r),t.eT)
a=a2.a
a0=a.createBuffer()
a0.toString
a.bindBuffer(d,a0)
a.bufferData(d,new Float32Array(H.cq(r)),35044)
a.bindBuffer(d,e)
p=new Z.be(new Z.fQ(d,a0),H.b([],t.fv),q,a3)
if(f.gbJ(f).b.length!==0){o=H.b([],t.t)
a0=t.o
n=t.k
m=0
while(!0){l=f.b
if(l==null){l=f.b=new F.cb(f,H.b([],a0))
k=l}else k=l
if(!(m<l.b.length))break
l=k.b
if(m>=l.length)return H.d(l,m)
l=l[m].a
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.b([],n)):j).a_()}l=l.e}o.push(l==null?0:l);++m}i=Z.lk(a,34963,o)
p.b.push(new Z.c0(0,o.length,i))}if(f.gaG(f).b.length!==0){o=H.b([],t.t)
a0=t.L
n=t.k
m=0
while(!0){l=f.c
if(l==null){l=f.c=new F.dp(f,H.b([],a0))
k=l}else k=l
if(!(m<l.b.length))break
l=k.b
if(m>=l.length)return H.d(l,m)
h=l[m]
l=h.a
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.b([],n)):j).a_()}l=l.e}o.push(l==null?0:l)
l=h.b
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.b([],n)):j).a_()}l=l.e}o.push(l==null?0:l);++m}i=Z.lk(a,34963,o)
p.b.push(new Z.c0(1,o.length,i))}if(f.ga4().b.length!==0){o=H.b([],t.t)
a0=t.v
n=t.k
m=0
while(!0){l=f.d
if(l==null){l=f.d=new F.dn(f,H.b([],a0))
k=l}else k=l
if(!(m<l.b.length))break
l=k.b
if(m>=l.length)return H.d(l,m)
g=l[m]
l=g.a
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.b([],n)):j).a_()}l=l.e}o.push(l==null?0:l)
l=g.b
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.b([],n)):j).a_()}l=l.e}o.push(l==null?0:l)
l=g.c
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.b([],n)):j).a_()}l=l.e}o.push(l==null?0:l);++m}i=Z.lk(a,34963,o)
p.b.push(new Z.c0(4,o.length,i))}return p},
i:function(a){var s=this,r="   ",q=H.b([],t.s)
if(s.ga8().c.length!==0){q.push("Vertices:")
q.push(s.ga8().H(r))}if(s.gbJ(s).b.length!==0){q.push("Points:")
q.push(s.gbJ(s).H(r))}if(s.gaG(s).b.length!==0){q.push("Lines:")
q.push(s.gaG(s).H(r))}if(s.ga4().b.length!==0){q.push("Faces:")
q.push(s.ga4().H(r))}return C.b.j(q,"\n")},
af:function(){var s=this.e
return s==null?null:s.D(null)}}
F.jk.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c.hB(a),e=f.gd_(f),d=g.a,c=d.a
for(s=g.e,r=g.r,q=r.length,p=g.f,o=g.b,n=t.k,m=0;m<s;++m){l=o.a
l=(l==null?o.a=new F.y(o,H.b([],n)):l).c
if(m>=l.length)return H.d(l,m)
k=l[m].i0(f)
j=d.a+m*p
for(l=k.length,i=0;i<l;++i){h=k[i]
if(j>=q)return H.d(r,j)
r[j]=h;++j}}d.a+=e
return new Z.bX(f,e,c*4,g.d)},
$S:45}
F.dn.prototype={
hy:function(a){var s,r,q,p,o,n,m,l=H.b([],t.v),k=a[0]
for(s=this.a,r=t.k,q=2;q<4;++q){p=a[q-1]
o=a[q]
n=s.a;(n==null?s.a=new F.y(s,H.b([],r)):n).n(0,k)
n=s.a;(n==null?s.a=new F.y(s,H.b([],r)):n).n(0,p)
n=s.a;(n==null?s.a=new F.y(s,H.b([],r)):n).n(0,o)
m=new F.at()
m.aU(k,p,o)
l.push(m)}return l},
hz:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=H.b([],t.v)
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
e=new F.at()
e.aU(j,i,g)
d.push(e)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,j)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,f)
e=new F.at()
e.aU(j,g,f)
d.push(e)}else{(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,f)
e=new F.at()
e.aU(i,g,f)
d.push(e)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,f)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,j)
e=new F.at()
e.aU(i,f,j)
d.push(e)}m=!m}o=!o}return d},
gl:function(a){return this.b.length},
aO:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].cl())q=!1
return q},
ck:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].cj())q=!1
return q},
i:function(a){return this.w()},
H:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].H(a))
return C.b.j(p,"\n")},
w:function(){return this.H("")}}
F.dp.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.w()},
H:function(a){var s,r=H.b([],t.s),q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.d(q,s)
r.push(q[s].H(a+(""+s+". ")))}return C.b.j(r,"\n")},
w:function(){return this.H("")}}
F.cb.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.w()},
H:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].H(a))
return C.b.j(p,"\n")},
w:function(){return this.H("")}}
F.ck.prototype={
co:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.jR(s.cx,p,m,r,q,o,n,a,l)},
hI:function(){return this.co(null)},
gaG:function(a){var s=this.c
if(s==null){s=t.L
s=this.c=new F.jV(H.b([],s),H.b([],s))}return s},
ga4:function(){var s=this.d
if(s==null){s=t.v
s=this.d=new F.jS(H.b([],s),H.b([],s),H.b([],s))}return s},
gb8:function(a){var s=this.a
if(s!=null)s.ga8().a_()
return this.e},
sir:function(a){var s
if(!J.a7(this.z,a)){this.z=a
s=this.a
if(s!=null)s.af()}},
i0:function(a){var s,r,q,p,o=this,n=null
if(a.q(0,$.ar())){s=o.f
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.q(0,$.by())){s=o.r
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,1,0],t.n):s}else if(a.q(0,$.bx())){s=o.x
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,1],t.n):s}else if(a.q(0,$.aR())){s=o.y
s=s==null?n:H.b([s.a,s.b],t.n)
return s==null?H.b([0,0],t.n):s}else if(a.q(0,$.bS())){s=o.z
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.q(0,$.ek())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return H.b([q,p,s==null?1:s],t.n)}else if(a.q(0,$.el())){s=o.Q
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([1,1,1,1],t.n):s}else if(a.q(0,$.cx()))return H.b([o.ch],t.n)
else if(a.q(0,$.bw())){s=o.cx
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([-1,-1,-1,-1],t.n):s}else return H.b([],t.n)},
cl:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.fO()
p.ga4().F(0,new F.jY(o))
p.r=o.a.S()
if(r){s.af()
o=s.e
if(o!=null)o.aS(0)}return!0},
cj:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.fO()
p.ga4().F(0,new F.jX(o))
p.x=o.a.S()
if(r){s.af()
o=s.e
if(o!=null)o.aS(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
H:function(a){var s,r,q=this,p=null,o="-",n=H.b([],t.s)
n.push(C.a.ax(C.c.i(q.e),0))
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
n.push(V.B(q.ch,3,0))
s=q.cx
s=s==null?p:s.w()
n.push(s==null?o:s)
r=C.b.j(n,", ")
return a+"{"+r+"}"},
w:function(){return this.H("")}}
F.jY.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.a1(0,r)}},
$S:8}
F.jX.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.a1(0,r)}},
$S:8}
F.y.prototype={
a_:function(){},
n:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.f("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.af()
return!0},
bA:function(a,b,c,d,e,f){var s=F.jR(a,null,b,c,null,d,e,f,0)
this.n(0,s)
return s},
gl:function(a){return this.c.length},
aO:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].cl()
return!0},
ck:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].cj()
return!0},
hF:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.S()
if(!J.a7(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.D(null)}}}}}return!0},
i:function(a){return this.w()},
H:function(a){var s,r,q,p
this.a_()
s=H.b([],t.s)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p)s.push(r[p].H(a))
return C.b.j(s,"\n")},
w:function(){return this.H("")}}
F.jS.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
F:function(a,b){var s=this
C.b.F(s.b,b)
C.b.F(s.c,new F.jT(s,b))
C.b.F(s.d,new F.jU(s,b))},
i:function(a){return this.w()},
w:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].H(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].H(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].H(""))
return C.b.j(p,"\n")}}
F.jT.prototype={
$1:function(a){if(!J.a7(a.a,this.a))this.b.$1(a)},
$S:8}
F.jU.prototype={
$1:function(a){var s=this.a
if(!J.a7(a.a,s)&&!J.a7(a.b,s))this.b.$1(a)},
$S:8}
F.jV.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.w()},
w:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].H(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].H(""))
return C.b.j(p,"\n")}}
F.jW.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.w()},
w:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].H(""))
return C.b.j(p,"\n")}}
O.cT.prototype={
gt:function(){var s=this.x
return s==null?this.x=D.F():s},
M:function(a){var s=this.x
return s==null?null:s.D(a)},
aJ:function(){return this.M(null)},
sb3:function(a){var s=this.r
$.E().toString
if(!(Math.abs(s-a)<1e-9)){this.r=a
this.M(new D.A("blurValue",s,a))}},
sdP:function(a){var s,r=this,q=r.e
if(q!=a){if(q!=null)q.gt().U(0,r.gaq())
s=r.e
r.e=a
if(a!=null)a.gt().n(0,r.gaq())
r.M(new D.A("colorTexture",s,r.e))}},
shE:function(a){},
sis:function(a){var s,r=this
if(!r.b.q(0,a)){s=r.b
r.b=a
r.M(new D.A("textureMatrix",s,a))}},
shD:function(a){var s,r=this
if(!r.c.q(0,a)){s=r.c
r.c=a
r.M(new D.A("blurAdjust",s,a))}},
ag:function(a,b){},
ab:function(a,b){if(b!=null)if(!C.b.B(a,b)){b.a=a.length
a.push(b)}},
cR:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f==null){f=""+"GaussianBlur_0"
s=f.charCodeAt(0)==0?f:f
r=new A.iD(!1,s)
q=t.bF.a(a.fr.h(0,s))
if(q==null){q=new A.cS(r,a.a,s)
f=""+"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n"
p=new P.V("")
o=""+"precision mediump float;\n"
p.a=o
o+="\n"
p.a=o
o+="uniform sampler2D colorTxt;\n"
p.a=o
o+="uniform float blurValue;\n"
p.a=o
o+="uniform vec2 blurScale;\n"
p.a=o
o+="\n"
p.a=o
o+="varying vec2 txt2D;\n"
p.a=o
p.a=o+"\n"
o=t.n
r.aW(p,3,H.b([0.75],o),H.b([0.5],o))
r.aW(p,6,H.b([0.42857,2.14286],o),H.b([0.41667,0.08333],o))
r.aW(p,9,H.b([0,1.8],o),H.b([0.5122,0.2439],o))
r.aW(p,12,H.b([0,1.38462,3.23077],o),H.b([0.22703,0.31622,0.07027],o))
r.aW(p,15,H.b([0.9375,2.8125],o),H.b([0.36184,0.13816],o))
r.aW(p,18,H.b([0.47368,2.36842,4.26316],o),H.b([0.29916,0.16318,0.03766],o))
o=p.a+="void main()\n"
o+="{\n"
p.a=o
o+="   float blurOffset = abs(blurValue);\n"
p.a=o
o+="\n"
p.a=o
o+="   if     (blurOffset < 0.15) gl_FragColor = texture2D(colorTxt, txt2D);\n"
p.a=o
o+="   else if(blurOffset < 0.3)  gl_FragColor = blur3();\n"
p.a=o
o+="   else if(blurOffset < 0.45) gl_FragColor = blur6();\n"
p.a=o
o+="   else if(blurOffset < 0.6)  gl_FragColor = blur9();\n"
p.a=o
o+="   else if(blurOffset < 0.75) gl_FragColor = blur12();\n"
p.a=o
o+="   else if(blurOffset < 0.9)  gl_FragColor = blur15();\n"
p.a=o
o+="   else                       gl_FragColor = blur18();\n"
p.a=o
o=p.a=o+"}\n"
q.cG(0,f.charCodeAt(0)==0?f:f,o.charCodeAt(0)==0?o:o)
q.y=q.ga3(q).h(0,"posAttr")
q.z=q.ga3(q).h(0,"txtAttr")
q.Q=t.j.a(q.gA().h(0,"projViewObjMat"))
q.ch=t.Q.a(q.gA().h(0,"txt2DMat"))
q.db=t.G.a(q.gA().h(0,"colorTxt"))
q.cy=t.fp.a(q.gA().h(0,"blurScale"))
q.dy=t.u.a(q.gA().h(0,"blurValue"))
a.cg(q)}f=h.a=q
b.e=null}o=b.e
if((!(o instanceof Z.be)?b.e=null:o)==null){o=b.d
if(o==null)o=g
else{n=$.ar()
m=$.aR()
m=o.ci(new Z.dL(a.a),new Z.b7(n.a|m.a))
o=m}if(o==null)o=g
else{n=o.aC($.ar())
if(n!=null){m=h.a
if(m==null)m=g
else{m=m.y
m=m==null?g:m.c}n.e=m==null?0:m}n=o.aC($.aR())
if(n!=null){m=h.a
if(m==null)m=g
else{m=m.z
m=m==null?g:m.c}n.e=m==null?1:m}}b.e=o}l=H.b([],t.d)
h.ab(l,h.e)
f=f.x.a
if(f)h.ab(l,h.f)
if(l.length<=0)return
for(k=0;k<l.length;++k)l[k].W(a)
o=h.a
if(o!=null){o.W(a)
n=h.e
o.ak(o.db,n)
n=h.b
m=o.ch
if(m!=null)m.ah(n.aa(0,!0))
n=h.d
m=a.c
j=a.d
i=o.cy
if(i!=null)i.a.uniform2f(i.d,n.a/m,n.b/j)
n=a.geq()
o=o.Q
if(o!=null)o.ah(n.aa(0,!0))}o=h.a
if(f){if(o!=null){f=h.f
o.ak(o.dx,f)
f=h.c
o=o.cx
if(o!=null)o.eD(f)}}else if(o!=null){f=h.r
o=o.dy
if(o!=null)o.a.uniform1f(o.d,f)}f=b.e
if(f instanceof Z.be){f.W(a)
f.a7(a)
f.az(a)}else b.e=null
f=h.a
if(f!=null){a.a.useProgram(g)
f.ga3(f).cr()}for(f=a.a,k=0;k<l.length;++k){o=l[k]
if(o.c){o.c=!1
f.activeTexture(33984+o.a)
f.bindTexture(3553,g)}}}}
O.d7.prototype={
gt:function(){var s=this.fr
return s==null?this.fr=D.F():s},
M:function(a){var s=this.fr
return s==null?null:s.D(a)},
aJ:function(){return this.M(null)},
dq:function(a){this.a=null
this.M(a)},
hg:function(){return this.dq(null)},
fn:function(a,b){return this.M(new D.aW())},
fp:function(a,b){return this.M(new D.aX())},
gdH:function(){var s=this.r
return s==null?this.r=O.eR(this,"ambient"):s},
gcq:function(){var s=this.x
return s==null?this.x=O.eR(this,"diffuse"):s},
dc:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.y,a1=new H.T(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=H.b([],t.i)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gam()
o=a1.h(0,q.gam())
a1.m(0,p,o==null?1:o)}n=H.b([],t.cn)
a1.F(0,new O.iX(b,n))
C.b.bh(n,new O.iY())
m=new H.T(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=H.b([],t.U)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gam()
o=m.h(0,q.gam())
m.m(0,p,o==null?1:o)}l=H.b([],t.fD)
m.F(0,new O.iZ(b,l))
C.b.bh(l,new O.j_())
k=new H.T(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=H.b([],t.J)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gam()
o=k.h(0,q.gam())
k.m(0,p,o==null?1:o)}j=H.b([],t.eg)
k.F(0,new O.j0(b,j))
C.b.bh(j,new O.j1())
i=new H.T(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=H.b([],t.D)
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.q)(a0),++r){q=a0[r]
s=q.gam()
p=i.h(0,q.gam())
i.m(0,s,p==null?1:p)}h=H.b([],t.c3)
i.F(0,new O.j2(b,h))
C.b.bh(h,new O.j3())
a0=C.c.a9(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.iU(new V.aF(0,0,0,0))
a2=b.f
a2=(a2==null?b.f=O.eR(b,"emission"):a2).c
s=b.gdH().c
p=b.gcq().c
o=b.y
o=(o==null?b.y=O.eR(b,"invDiffuse"):o).c
g=b.z
g=(g==null?b.z=new O.iW(new V.a2(0,0,0),b,"specular",new A.aG(!1,!1,!1)):g).c
f=b.Q
f=(f==null?b.Q=new O.iS(b,"bump",new A.aG(!1,!1,!1)):f).c
e=b.cx
e=(e==null?b.cx=O.eR(b,"reflect"):e).c
d=b.cy
d=(d==null?b.cy=new O.iV(new V.a2(0,0,0),b,"refract",new A.aG(!1,!1,!1)):d).c
c=b.db
return A.o2(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.iR(b,"alpha",new A.aG(!1,!1,!1)):c).c,n,l,j,h)},
ab:function(a,b){if(b!=null)if(!C.b.B(a,b)){b.a=a.length
a.push(b)}},
ag:function(a,b){var s,r=this.dx
r=J.aB(r==null?H.b([],t.e):r)
s=H.S(r).c
for(;r.v();)s.a(r.d).ag(0,b)},
cR:function(b9,c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8=b6.a
if(b8==null){s=b6.dc()
r=s.b7
b8=t.eI.a(b9.fr.h(0,r))
if(b8==null){q=b9.a
p=t.S
o=t.W
b8=new A.d8(s,H.b([],t.p),P.R(p,o),P.R(p,t.x),P.R(p,o),P.R(p,t.E),P.R(p,o),P.R(p,t.f0),P.R(p,o),P.R(p,t.R),q,r)
b8.eN(s,q)
b9.cg(b8)}b8=b6.a=b8
c0.e=null}n=b8.x
m=n.dX
s=c0.e
if(!(s instanceof Z.be))s=c0.e=null
if(s==null||!s.d.q(0,m)){s=n.k4
if(s){r=c0.d
if(r!=null)r.aO()}r=n.r1
if(r){q=c0.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.ga4().ck()
q.ga8().ck()
q=q.e
if(q!=null)q.aS(0)}}q=n.rx
if(q){p=c0.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.ga8().hF()
p=p.e
if(p!=null)p.aS(0)}}p=c0.d
l=p==null?b7:p.ci(new Z.dL(b9.a),m)
if(l==null)return
p=l.aC($.ar())
if(p!=null){o=b8.y
o=o==null?b7:o.c
p.e=o==null?0:o}if(s){s=l.aC($.by())
if(s!=null){p=b8.Q
p=p==null?b7:p.c
s.e=p==null?1:p}}if(r){s=l.aC($.bx())
if(s!=null){r=b8.z
r=r==null?b7:r.c
s.e=r==null?2:r}}if(n.r2){s=l.aC($.aR())
if(s!=null){r=b8.ch
r=r==null?b7:r.c
s.e=r==null?3:r}}if(q){s=l.aC($.bS())
if(s!=null){r=b8.cx
r=r==null?b7:r.c
s.e=r==null?4:r}}if(n.ry){s=l.aC($.bw())
if(s!=null){r=b8.cy
r=r==null?b7:r.c
s.e=r==null?5:r}}c0.e=l}k=H.b([],t.d)
b8.W(b9)
if(n.fr){s=b9.dx
s=s.ga6(s)
r=b8.db
if(r!=null)r.ah(s.aa(0,!0))}if(n.fx){s=b9.cx
if(s==null){s=b9.db
r=b9.dx
r=b9.cx=s.ga6(s).I(0,r.ga6(r))
s=r}r=b8.dx
if(r!=null)r.ah(s.aa(0,!0))}s=b9.geq()
r=b8.fr
if(r!=null)r.ah(s.aa(0,!0))
if(n.go){s=b9.db
s=s.ga6(s)
r=b8.dy
if(r!=null)r.ah(s.aa(0,!0))}if(n.x1){s=V.ld()
r=b8.go
if(r!=null)r.ah(s.aa(0,!0))}if(n.x2){s=V.am()
r=b8.id
if(r!=null)r.ah(s.aa(0,!0))}if(n.y1){s=V.am()
r=b8.k1
if(r!=null)r.ah(s.aa(0,!0))}if(n.b6>0){s=b6.e.a
j=s.length
r=b8.k2
if(r!=null)r.a.uniform1i(r.d,j)
for(i=0;i<j;++i){if(i>=s.length)return H.d(s,i)
r=s[i]
q=b8.k3
if(i>=q.length)return H.d(q,i)
q=q[i]
h=new Float32Array(H.cq(r.aa(0,!0)))
q.a.uniformMatrix4fv(q.d,!1,h)}}s=n.a
if(s.a){r=b6.f
r=r==null?b7:r.f
if(r==null)r=new V.a2(0,0,0)
q=b8.k4
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=b6.f
b6.ab(k,s==null?b7:s.d)
s=b6.f
s=s==null?b7:s.d
b8.ak(b8.r1,s)}if(n.k1){s=n.b
if(s.a){r=b6.r
r=r==null?b7:r.f
if(r==null)r=new V.a2(0,0,0)
q=b8.rx
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=b6.r
b6.ab(k,s==null?b7:s.d)
s=b6.r
s=s==null?b7:s.d
b8.ak(b8.ry,s)}s=n.c
if(s.a){r=b6.x
r=r==null?b7:r.f
if(r==null)r=new V.a2(0,0,0)
q=b8.x2
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=b6.x
b6.ab(k,s==null?b7:s.d)
s=b6.x
s=s==null?b7:s.d
b8.ak(b8.y1,s)}s=n.d
if(s.a){r=b6.y
r=r==null?b7:r.f
if(r==null)r=new V.a2(0,0,0)
q=b8.b6
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=b6.y
b6.ab(k,s==null?b7:s.d)
s=b6.y
s=s==null?b7:s.d
b8.ak(b8.b7,s)}s=n.e
r=s.a
if(r||s.b||!1){q=b6.z
q=q==null?b7:q.ch
if(q==null)q=100
p=b8.e_
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=b6.z
r=r==null?b7:r.f
if(r==null)r=new V.a2(1,1,1)
q=b8.dY
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=b6.z
b6.ab(k,s==null?b7:s.d)
s=b6.z
s=s==null?b7:s.d
b8.ak(b8.dZ,s)}s=n.z
if(s.length>0){g=new H.T(t.y)
r=b6.dx
r=r==null?b7:r.e
if(r==null)r=H.b([],t.i)
q=r.length
p=t.c
f=0
for(;f<r.length;r.length===q||(0,H.q)(r),++f){e=r[f]
d=e.gam()
c=g.h(0,d)
if(c==null)c=0
g.m(0,d,c+1)
o=b8.cu.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
o=e.giA()
a=$.b3
o=o.bv(a==null?$.b3=new V.a4(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.giE()
a=$.b3
o=o.bv(a==null?$.b3=new V.a4(0,0,0):a)
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gb5(e)
a=b.d
a.a.uniform3f(a.d,o.a,o.b,o.c)
if(e.gdW()){o=e.gdJ()
a=b.e
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdK()
a=b.f
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdL()
a=b.r
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=g.h(0,q)
if(j==null)j=0
q=b8.ct.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.Q
if(s.length>0){r=b9.db
a0=r.ga6(r)
a1=new H.T(t.y)
r=b6.dx
r=r==null?b7:r.f
if(r==null)r=H.b([],t.U)
q=r.length
p=a0.a
o=a0.b
a=a0.c
a2=a0.e
a3=a0.f
a4=a0.r
a5=a0.y
a6=a0.z
a7=a0.Q
a8=t.V
f=0
for(;f<r.length;r.length===q||(0,H.q)(r),++f){e=r[f]
d=e.gam()
c=a1.h(0,d)
if(c==null)c=0
a1.m(0,d,c+1)
a9=b8.cw.h(0,d)
if(a9==null)a9=H.b([],a8)
if(c>>>0!==c||c>=a9.length)return H.d(a9,c)
b=a9[c]
a9=e.gdR(e)
a9=new V.L(C.d.I(p,a9.gdT(a9))+C.d.I(o,a9.gdU(a9))+C.d.I(a,a9.gdV()),C.d.I(a2,a9.gdT(a9))+C.d.I(a3,a9.gdU(a9))+C.d.I(a4,a9.gdV()),C.d.I(a5,a9.gdT(a9))+C.d.I(a6,a9.gdU(a9))+C.d.I(a7,a9.gdV())).S()
b0=b.e
b0.a.uniform3f(b0.d,a9.a,a9.b,a9.c)
a9=e.gb5(e)
b0=b.f
b0.a.uniform3f(b0.d,a9.a,a9.b,a9.c)
e.gay()
a9=e.gdR(e)
b0=b.d
if(b0!=null)b0.a.uniform3f(b0.d,a9.a,a9.b,a9.c)
a9=e.gbP()
b0=b.b
if(b0!=null)b0.a.uniform3f(b0.d,a9.a,a9.b,a9.c)
a9=e.gbN(e)
b0=b.c
if(b0!=null)b0.a.uniform3f(b0.d,a9.a,a9.b,a9.c)
a9=e.gay()
if(!C.b.B(k,a9)){a9.a=k.length
k.push(a9)}a9=e.gay()
b0=a9.gbH(a9)
if(b0){b0=b.r
if(b0!=null){b1=a9.d
b2=b0.a
b0=b0.d
if(!b1)b2.uniform1i(b0,0)
else b2.uniform1i(b0,a9.a)}}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=a1.h(0,q)
if(j==null)j=0
q=b8.cv.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.ch
if(s.length>0){r=b9.db
a0=r.ga6(r)
b3=new H.T(t.y)
r=b6.dx
r=r==null?b7:r.r
if(r==null)r=H.b([],t.J)
q=r.length
p=t.B
f=0
for(;f<r.length;r.length===q||(0,H.q)(r),++f){e=r[f]
d=e.gam()
c=b3.h(0,d)
if(c==null)c=0
b3.m(0,d,c+1)
o=b8.cA.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
b4=a0.I(0,e.ga6(e))
o=e.ga6(e)
a=$.b3
o=o.bv(a==null?$.b3=new V.a4(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=$.b3
o=b4.bv(o==null?$.b3=new V.a4(0,0,0):o)
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gb5(e)
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
e.gay()
o=b4.cH(0)
a=b.d
if(a!=null){h=new Float32Array(H.cq(new V.db(o.a,o.b,o.c,o.e,o.f,o.r,o.y,o.z,o.Q).aa(0,!0)))
a.a.uniformMatrix3fv(a.d,!1,h)}e.gay()
o=e.gay()
if(!C.b.B(k,o)){o.a=k.length
k.push(o)}o=e.gay()
a=o.gbH(o)
if(a){a=b.f
if(a!=null){a2=o.d
a3=a.a
a=a.d
if(a2<6)a3.uniform1i(a,0)
else a3.uniform1i(a,o.a)}}e.gbg()
o=e.geE()
a=b.x
if(a!=null)a.a.uniform4f(a.d,o.a,o.b,o.c,o.d)
o=e.gbg()
if(!C.b.B(k,o)){o.a=k.length
k.push(o)}o=e.gbg()
a=o.gbH(o)
if(a){a=b.r
if(a!=null){a2=o.d
a3=a.a
a=a.d
if(a2<6)a3.uniform1i(a,0)
else a3.uniform1i(a,o.a)}}if(e.gdW()){o=e.gdJ()
a=b.y
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdK()
a=b.z
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdL()
a=b.Q
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=b3.h(0,q)
if(j==null)j=0
q=b8.cz.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.cx
if(s.length>0){r=b9.db
a0=r.ga6(r)
b5=new H.T(t.y)
r=b6.dx
r=r==null?b7:r.x
if(r==null)r=H.b([],t.D)
q=r.length
p=t.M
f=0
for(;f<r.length;r.length===q||(0,H.q)(r),++f){e=r[f]
d=e.gam()
c=b5.h(0,d)
if(c==null)c=0
b5.m(0,d,c+1)
o=b8.cC.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
o=e.gih(e)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gdR(e).S()
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=a0.bv(e.gih(e))
a=b.d
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gb5(e)
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
e.gay()
o=e.gbP()
a=b.f
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gbN(e)
a=b.r
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.giN()
a=b.x
if(a!=null)a.a.uniform1f(a.d,o)
o=e.giO()
a=b.y
if(a!=null)a.a.uniform1f(a.d,o)
e.gay()
o=e.gay()
if(!C.b.B(k,o)){o.a=k.length
k.push(o)}o=e.gay()
a=o.gbH(o)
if(a){a=b.dx
if(a!=null){a2=o.d
a3=a.a
a=a.d
if(!a2)a3.uniform1i(a,0)
else a3.uniform1i(a,o.a)}}e.gbg()
o=e.geE()
a=b.z
if(a!=null)a.a.uniform4f(a.d,o.a,o.b,o.c,o.d)
o=e.gbg()
if(!C.b.B(k,o)){o.a=k.length
k.push(o)}o=e.gbg()
a=o.gbH(o)
if(a){a=b.dy
if(a!=null){a2=o.d
a3=a.a
a=a.d
if(!a2)a3.uniform1i(a,0)
else a3.uniform1i(a,o.a)}}if(e.giD()){o=e.giC()
a=b.Q
if(a!=null)a.a.uniform1f(a.d,o)
o=e.giB()
a=b.ch
if(a!=null)a.a.uniform1f(a.d,o)}if(e.gdW()){o=e.gdJ()
a=b.cx
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdK()
a=b.cy
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdL()
a=b.db
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=b5.h(0,q)
if(j==null)j=0
q=b8.cB.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}}if(n.f.b){s=b6.Q
b6.ab(k,s==null?b7:s.d)
s=b6.Q
s=s==null?b7:s.d
b8.ak(b8.e0,s)}if(n.dy){s=b9.Q
if(s==null){s=b9.db
s=b9.Q=s.ga6(s).cH(0)}r=b8.fy
if(r!=null)r.ah(s.aa(0,!0))}if(n.db){b6.ab(k,b7)
b8.hj(b8.e1,b7)
s=n.r
if(s.a){r=b6.cx
r=r==null?b7:r.f
if(r==null)r=new V.a2(1,1,1)
q=b8.e2
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=b6.cx
b6.ab(k,s==null?b7:s.d)
s=b6.cx
s=s==null?b7:s.d
b8.ak(b8.e3,s)}s=n.x
r=s.a
if(r||s.b||!1){q=b6.cy
q=q==null?b7:q.ch
if(q==null)q=0
p=b8.e4
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=b6.cy
r=r==null?b7:r.f
if(r==null)r=new V.a2(1,1,1)
q=b8.e5
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=b6.cy
b6.ab(k,s==null?b7:s.d)
s=b6.cy
s=s==null?b7:s.d
b8.ak(b8.e6,s)}}s=n.y
r=s.a
q=!r
if(!q||s.b||!1){if(r){r=b6.db
r=r==null?b7:r.f
if(r==null)r=1
p=b8.e7
if(p!=null)p.a.uniform1f(p.d,r)}if(s.b){r=b6.db
b6.ab(k,r==null?b7:r.d)
r=b6.db
r=r==null?b7:r.d
b8.ak(b8.e8,r)}r=b9.a
r.enable(3042)
r.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].W(b9)
r=t.ed.a(c0.e)
r.W(b9)
r.a7(b9)
r.az(b9)
if(!q||s.b||!1)b9.a.disable(3042)
for(s=b9.a,i=0;i<k.length;++i){r=k[i]
if(r.c){r.c=!1
s.activeTexture(33984+r.a)
s.bindTexture(3553,b7)}}s.useProgram(b7)
b8.ga3(b8).cr()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.dc().b7}}
O.iX.prototype={
$2:function(a,b){return this.b.push(new A.bc(a,C.c.a9(b+3,4)*4))},
$S:7}
O.iY.prototype={
$2:function(a,b){return C.c.as(a.a,b.a)},
$S:49}
O.iZ.prototype={
$2:function(a,b){return this.b.push(new A.bf(a,C.c.a9(b+3,4)*4))},
$S:7}
O.j_.prototype={
$2:function(a,b){return C.c.as(a.a,b.a)},
$S:50}
O.j0.prototype={
$2:function(a,b){return this.b.push(new A.bn(a,C.c.a9(b+3,4)*4))},
$S:7}
O.j1.prototype={
$2:function(a,b){return C.c.as(a.a,b.a)},
$S:51}
O.j2.prototype={
$2:function(a,b){return this.b.push(new A.bp(a,C.c.a9(b+3,4)*4))},
$S:7}
O.j3.prototype={
$2:function(a,b){return C.c.as(a.a,b.a)},
$S:52}
O.iR.prototype={
aM:function(){var s,r=this
r.d1()
s=r.f
$.E().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.M(new D.A(r.b,s,1))}}}
O.d9.prototype={
M:function(a){return this.a.M(a)},
aJ:function(){return this.M(null)},
aM:function(){},
dv:function(a){var s,r,q=this
if(!q.c.q(0,a)){s=q.c
if(s.a||s.b||!1)r=!(a.a||a.b||!1)
else r=!0
q.c=a
if(r)q.aM()
s=q.a
s.a=null
s.M(null)}}}
O.iS.prototype={}
O.da.prototype={
dt:function(a){var s,r=this
if(!r.f.q(0,a)){s=r.f
r.f=a
r.a.M(new D.A(r.b+".color",s,a))}},
aM:function(){this.d1()
this.dt(new V.a2(1,1,1))},
sb5:function(a,b){this.dv(new A.aG(!0,this.c.b,!1))
this.dt(b)}}
O.iU.prototype={}
O.iV.prototype={
aM:function(){var s,r=this
r.d2()
s=r.ch
$.E().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.M(new D.A(r.b+".refraction",s,1))}}}
O.iW.prototype={
aM:function(){var s,r=this
r.d2()
s=r.ch
$.E().toString
if(!(Math.abs(s-100)<1e-9)){r.ch=100
r.a.M(new D.A(r.b+".shininess",s,100))}}}
O.dq.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.F():s},
M:function(a){var s=this.e
return s==null?null:s.D(a)},
aJ:function(){return this.M(null)},
ag:function(a,b){},
cR:function(a,b){var s,r,q,p,o,n,m=this,l=null
if(m.a==null){s=t.dm.a(a.fr.h(0,"Skybox"))
if(s==null){s=new A.dr(a.a,"Skybox")
s.cG(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.x=s.ga3(s).h(0,"posAttr")
r=t.u
s.y=r.a(s.gA().h(0,"fov"))
s.z=r.a(s.gA().h(0,"ratio"))
s.Q=t.g.a(s.gA().h(0,"boxClr"))
s.ch=t.l.a(s.gA().h(0,"boxTxt"))
s.cx=t.j.a(s.gA().h(0,"viewMat"))
a.cg(s)}m.a=s}if(b.e==null){r=b.d
r=r==null?l:r.ci(new Z.dL(a.a),$.ar())
if(r==null)r=l
else{q=r.aC($.ar())
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
if(p!=null){p.W(a)
n=p.y
if(n!=null)n.a.uniform1f(n.d,1.0471975511965976)
n=p.z
if(n!=null)n.a.uniform1f(n.d,r/q)
r=p.ch
if(r!=null)r.eC(o)
r=m.d
q=p.Q
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)
r=a.db
r=r.ga6(r).cH(0)
p=p.cx
if(p!=null)p.ah(r.aa(0,!0))}r=b.e
if(r instanceof Z.be){r.W(a)
r.a7(a)
r.az(a)}else b.e=null
r=m.a
if(r!=null){a.a.useProgram(l)
r.ga3(r).cr()}if(o.c){o.c=!1
r=a.a
r.activeTexture(33984+o.a)
r.bindTexture(34067,l)}}}
O.bL.prototype={}
T.bM.prototype={}
T.fu.prototype={}
T.fv.prototype={
du:function(){if(!this.d){this.d=!0
var s=this.y
if(s!=null)s.cs()}},
gt:function(){var s=this.y
return s==null?this.y=D.F():s},
W:function(a){var s,r=this
if(!r.c&&r.d){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(3553,r.b)}}}
T.fw.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.F():s}}
T.js.prototype={
i1:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
o.toString
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null)
this.dj()
s=W.lY(a)
r=T.lh(o)
W.a1(s,"load",new T.ju(this,r,s,!1,o,!1,!1),!1)
return r},
aZ:function(a,b,c,d,e,f){var s=W.lY(c)
this.dj()
W.a1(s,"load",new T.jt(this,s,!1,b,!1,d,a),!1)},
ds:function(a,b,c){var s,r,q,p,o,n
b=V.ej(b)
s=a.width
r=V.ej(s==null?512:s)
s=a.height
q=V.ej(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.l0()
p.width=r
p.height=q
o=t.ar.a(C.i.eA(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.q7(o.getImageData(0,0,s,n==null?512:n))}},
dj:function(){return this.d++},
df:function(){return this.e++}}
T.ju.prototype={
$1:function(a){var s,r,q=this,p=q.b,o=q.c,n=o.width
p.e=n==null?512:n
n=o.height
p.f=n==null?512:n
n=q.a
s=n.ds(o,n.b,q.d)
r=o.width
p.r=r==null?512:r
o=o.height
p.x=o==null?512:o
o=n.a
o.bindTexture(3553,q.e)
o.pixelStorei(37440,0)
C.o.ev(o,3553,0,6408,6408,5121,s)
o.bindTexture(3553,null)
p.du()
n.df()},
$S:3}
T.jt.prototype={
$1:function(a){var s=this,r=s.a,q=r.ds(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,0)
C.o.ev(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.cs()}r.df()},
$S:3}
X.i7.prototype={
gt:function(){var s=this.fr
return s==null?this.fr=D.F():s},
Z:function(a){var s=this.fr
return s==null?null:s.D(a)},
saA:function(a,b){var s,r=this
if(b<1)b=1
s=r.a
if(s!==b){r.y=null
r.c=r.a=b
r.Z(new D.A("width",s,b))}},
sau:function(a,b){var s,r=this
if(b<1)b=1
s=r.b
if(s!==b){r.y=null
r.d=r.b=b
r.Z(new D.A("height",s,b))}},
W:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=3553,d=36161,c=36160
if(g.f){s=a.a
r=s.drawingBufferWidth
if(r==null)r=512
g.saA(0,C.c.Y(r*g.r))
s=s.drawingBufferHeight
if(s==null)s=512
g.sau(0,C.c.Y(s*g.x))}if(g.y==null){s=a.a
r=g.ch
q=g.a
p=g.b
o=H.hY(s.getParameter(3379))
n=V.ej(q)
m=V.ej(p)
o=V.ej(o)
n=Math.min(n,o)
m=Math.min(m,o)
l=s.createTexture()
l.toString
s.bindTexture(e,l)
s.texParameteri(e,10242,33071)
s.texParameteri(e,10243,33071)
s.texParameteri(e,10241,9729)
s.texParameteri(e,10240,9729)
C.o.ew(s,e,0,6408,n,m,0,6408,5121,f)
s.bindTexture(e,f)
k=T.lh(l)
k.e=q
k.f=p
k.r=n
k.x=m
k.du()
r.b=k.b
r.c=k.c
r.d=k.d
r.e=k.e
r.f=k.f
r.r=k.r
r.x=k.x
q=r.y
if(q!=null)q.cs()
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
a.c=C.d.Y(r*g.a)
q=j.d
a.d=C.d.Y(q*g.b)
p=g.c
i=C.d.Y(j.a*p)
l=g.d
s.viewport(i,C.d.Y(j.b*l),C.d.Y(r*p),C.d.Y(q*l))
s.clearDepth(g.db)
if(g.cy){r=g.cx
q=r.a
p=r.b
l=r.c
r=r.d
s.clearColor(q,p,l,r)
h=16640}else h=256
if(h>0)s.clear(h)},
az:function(a){a.a.bindFramebuffer(36160,null)}}
X.iC.prototype={
gt:function(){var s=this.x
return s==null?this.x=D.F():s},
W:function(a){var s,r,q,p,o,n,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
s=m.drawingBufferWidth
if(s==null)s=512
r=m.drawingBufferHeight
if(r==null)r=512
q=this.r
p=C.d.Y(q.a*s)
o=C.d.Y(q.b*r)
n=C.d.Y(q.c*s)
a.c=n
q=C.d.Y(q.d*r)
a.d=q
m.viewport(p,o,n,q)
m.clearDepth(2000)
q=this.a
m.clearColor(q.a,q.b,q.c,q.d)
m.clear(16640)},
az:function(a){}}
X.iH.prototype={
gt:function(){var s=this.b
return s==null?this.b=D.F():s},
W:function(a){var s
a.cy.bM(V.am())
s=V.am()
a.db.bM(s)},
az:function(a){a.cy.aQ()
a.db.aQ()}}
X.f3.prototype={
gt:function(){var s=this.f
return s==null?this.f=D.F():s},
Z:function(a){var s=this.f
return s==null?null:s.D(a)},
eU:function(){return this.Z(null)},
W:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.b1(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.bM(i)
s=$.na()
r=q.b
if(r!=null)s=r.bd(0,a,q).I(0,s)
a.db.bM(s)},
az:function(a){a.cy.aQ()
a.db.aQ()}}
X.jr.prototype={}
V.aE.prototype={
bx:function(a){this.b=new P.iF(C.T)
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
m=k.b.f5(o,0,o.length)
l=m==null?o:m
l=H.lH(l," ","&nbsp;")
C.R.eB(n,l)
l=n.style
l.color=b
C.b.gaF(k.d).push(n)}},
eo:function(a,b){var s,r,q,p=this
p.d=H.b([],t.F)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bC()
if(r!=null)for(q=new H.r(s),q=new P.bP(r.cT(new H.bk(q,q.gl(q))).a());q.v();)p.bL(q.gC(q))}}
V.kY.prototype={
$1:function(a){var s=C.d.cS(this.a.ghX(),2)
if(s!=="0.00")P.lG(s+" fps")},
$S:53}
V.ex.prototype={
bL:function(a){var s=this
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
bC:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()\\-+*%!&|=.,?:;",h="OpenDoubleStr",g="CloseDoubleStr",f="EscDoubleStr",e="OpenSingleStr",d="CloseSingleStr",c="EscSingleStr",b="Slash",a="Comment",a0="EndComment",a1="MLComment",a2="MLCStar",a3="Whitespace",a4=L.jz()
a4.d=a4.k(0,o)
s=a4.k(0,o).j(0,n)
r=t.t
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.O("a","z"))
s.push(K.O("A","Z"))
s=a4.k(0,n).j(0,n)
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.O("0","9"))
s.push(K.O("a","z"))
s.push(K.O("A","Z"))
a4.k(0,o).j(0,m).a.push(K.O("0","9"))
a4.k(0,m).j(0,m).a.push(K.O("0","9"))
s=a4.k(0,m).j(0,l)
q=new K.u(H.b([],r))
q.p(new H.r("."))
s.a.push(q)
a4.k(0,l).j(0,k).a.push(K.O("0","9"))
a4.k(0,k).j(0,k).a.push(K.O("0","9"))
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
a4.k(0,h).j(0,h).a.push(new K.aT())
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
a4.k(0,e).j(0,e).a.push(new K.aT())
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
s.a.push(new K.af(p))
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
s.a.push(new K.af(q))
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
r.d=r.a.O("Num")
r=a4.k(0,k)
r.d=r.a.O("Num")
r=a4.k(0,j)
r.d=r.a.O("Symbol")
r=a4.k(0,g)
r.d=r.a.O("String")
r=a4.k(0,d)
r.d=r.a.O("String")
r=a4.k(0,a0)
r.d=r.a.O(a)
r=a4.k(0,a3)
r.d=r.a.O(a3)
r=a4.k(0,n)
r=r.d=r.a.O(n)
s=t.s
r.aR(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aR(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aR(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a4}}
V.eD.prototype={
bL:function(a){var s=this
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
bC:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()[]\\-+*%!&|=.,?:;",h="Slash",g="Comment",f="EndComment",e="Preprocess",d="EndPreprocess",c="Whitespace",b=L.jz()
b.d=b.k(0,o)
s=b.k(0,o).j(0,n)
r=t.t
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.O("a","z"))
s.push(K.O("A","Z"))
s=b.k(0,n).j(0,n)
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.O("0","9"))
s.push(K.O("a","z"))
s.push(K.O("A","Z"))
b.k(0,o).j(0,m).a.push(K.O("0","9"))
b.k(0,m).j(0,m).a.push(K.O("0","9"))
s=b.k(0,m).j(0,l)
q=new K.u(H.b([],r))
q.p(new H.r("."))
s.a.push(q)
b.k(0,l).j(0,k).a.push(K.O("0","9"))
b.k(0,k).j(0,k).a.push(K.O("0","9"))
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
b.k(0,h).j(0,j).a.push(new K.aT())
q=b.k(0,g).j(0,f)
s=new K.u(H.b([],r))
s.p(new H.r("\n"))
q.a.push(s)
s=b.k(0,g).j(0,g)
q=t.z
p=H.b([],q)
s.a.push(new K.af(p))
s=new K.u(H.b([],r))
s.p(new H.r("\n"))
p.push(s)
s=b.k(0,o).j(0,e)
p=new K.u(H.b([],r))
p.p(new H.r("#"))
s.a.push(p)
p=b.k(0,e).j(0,e)
q=H.b([],q)
p.a.push(new K.af(q))
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
r.d=r.a.O("Num")
r=b.k(0,k)
r.d=r.a.O("Num")
r=b.k(0,j)
r.d=r.a.O("Symbol")
r=b.k(0,f)
r.d=r.a.O(g)
r=b.k(0,d)
r.d=r.a.O(e)
r=b.k(0,c)
r.d=r.a.O(c)
r=b.k(0,n)
r=r.d=r.a.O(n)
p=t.s
r.aR(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],p))
r.aR(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],p))
r.aR(0,"Builtin",H.b(["gl_FragColor","gl_Position"],p))
return b}}
V.eE.prototype={
bL:function(a){var s=this,r="#111"
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
bC:function(){var s,r,q,p="Start",o="Id",n="Attr",m="Sym",l="OpenStr",k="CloseStr",j="Other",i=L.jz()
i.d=i.k(0,p)
s=i.k(0,p).j(0,o)
r=t.t
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.O("a","z"))
s.push(K.O("A","Z"))
s=i.k(0,o).j(0,o)
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.O("0","9"))
s.push(K.O("a","z"))
s.push(K.O("A","Z"))
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
i.k(0,l).j(0,l).a.push(new K.aT())
i.k(0,p).j(0,j).a.push(new K.aT())
s=i.k(0,j).j(0,j)
q=H.b([],t.z)
s.a.push(new K.af(q))
r=new K.u(H.b([],r))
r.p(new H.r('</\\-!>=_"'))
q.push(r)
q.push(K.O("a","z"))
q.push(K.O("A","Z"))
q=i.k(0,m)
q.d=q.a.O("Symbol")
q=i.k(0,k)
q.d=q.a.O("String")
q=i.k(0,o)
r=q.a.O(o)
q.d=r
r.aR(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],t.s))
r=i.k(0,n)
r.d=r.a.O(n)
r=i.k(0,j)
r.d=r.a.O(j)
return i}}
V.f5.prototype={
eo:function(a,b){this.d=H.b([],t.F)
this.N(C.b.j(b,"\n"),"#111")},
bL:function(a){},
bC:function(){return null}}
V.jc.prototype={
dE:function(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=l.a,j=P.mj().gcQ().h(0,k)
if(j==null)if(d){c.$0()
l.dC(b)
s=!0}else s=!1
else if(j===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
p=l.c
o=J.aQ(p)
o.gbB(p).n(0,q)
n=W.nR("radio")
n.checked=s
n.name=k
W.a1(n,"change",new V.jd(l,n,c,b),!1)
q.children.toString
q.appendChild(n).toString
m=r.createElement("span")
m.textContent=b
q.appendChild(m).toString
p=o.gbB(p)
r=r.createElement("br")
r.toString
p.n(0,r)},
ar:function(a,b,c){return this.dE(a,b,c,!1)},
dC:function(a){var s,r,q=P.mj(),p=t.N,o=P.o_(q.gcQ(),p,p)
o.m(0,this.a,a)
s=q.er(0,o)
p=window.history
p.toString
r=s.gce()
p.replaceState(new P.kd([],[]).bQ(""),"",r)}}
V.jd.prototype={
$1:function(a){var s=this,r=s.b.checked
if(r===!0){s.c.$0()
s.a.dC(s.d)}},
$S:3}
V.jl.prototype={
dG:function(a){var s,r,q,p,o,n,m=this.hl(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.r(C.b.i_(a)),s=new P.bP(m.cT(new H.bk(s,s.gl(s))).a());s.v();){r=s.gC(s)
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
if(H.n5(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.kl(C.x,r,C.e,!1)
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
ez:function(a){var s,r,q,p=t.F,o=new V.ex("dart",H.b([],p))
o.bx("dart")
s=new V.eD("glsl",H.b([],p))
s.bx("glsl")
r=new V.eE("html",H.b([],p))
r.bx("html")
q=C.b.hT(H.b([o,s,r],t.g6),new V.jo(a))
if(q!=null)return q
p=new V.f5("plain",H.b([],p))
p.bx("plain")
return p},
dF:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.b([],t.t)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(C.a.a2(q,"+")){b2[r]=C.a.al(q,1)
a8.push(1)
s=!0}else if(C.a.a2(q,"-")){b2[r]=C.a.al(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.ez(b0)
p.eo(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m).toString
this.a.appendChild(n).toString
l=P.kl(C.x,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.lL()
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
for(a4=C.b.gP(q);a4.v();)b.appendChild(a4.gC(a4)).toString
d.appendChild(c).toString
d.appendChild(b).toString
m.appendChild(d).toString}},
hw:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
hl:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other",f=this.b
if(f!=null)return f
f=L.jz()
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
s.a.push(new K.af(p))
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
s.a.push(new K.af(p))
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
s.a.push(new K.af(p))
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
p.a.push(new K.af(s))
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
p.a.push(new K.af(s))
p=new K.u(H.b([],r))
p.p(new H.r("|]"))
s.push(p)
f.k(0,o).j(0,g).a.push(new K.aT())
p=f.k(0,g).j(0,g)
q=H.b([],q)
p.a.push(new K.af(q))
r=new K.u(H.b([],r))
r.p(new H.r("*_`["))
q.push(r)
r=f.k(0,"BoldEnd")
r.d=r.a.O(n)
r=f.k(0,l)
r.d=r.a.O(m)
r=f.k(0,"CodeEnd")
r.d=r.a.O(k)
r=f.k(0,h)
r.d=r.a.O("Link")
r=f.k(0,g)
r.d=r.a.O(g)
return this.b=f}}
V.jn.prototype={
$1:function(a){P.mf(C.m,new V.jm(this.a))},
$S:3}
V.jm.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.Y(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.x(-0.01*s)+"px"
q.top=r},
$S:0}
V.jo.prototype={
$1:function(a){var s=a==null?null:a.a
return s===this.a},
$S:54}
K.kK.prototype={
$1:function(a){this.a.sb3(a)},
$S:55}
K.kL.prototype={
$0:function(){this.a.$1(0)},
$S:0}
K.kM.prototype={
$0:function(){this.a.$1(0.1)},
$S:0}
K.kP.prototype={
$0:function(){this.a.$1(0.2)},
$S:0}
K.kQ.prototype={
$0:function(){this.a.$1(0.3)},
$S:0}
K.kR.prototype={
$0:function(){this.a.$1(0.4)},
$S:0}
K.kS.prototype={
$0:function(){this.a.$1(0.5)},
$S:0}
K.kT.prototype={
$0:function(){this.a.$1(0.6)},
$S:0}
K.kU.prototype={
$0:function(){this.a.$1(0.7)},
$S:0}
K.kV.prototype={
$0:function(){this.a.$1(0.8)},
$S:0}
K.kW.prototype={
$0:function(){this.a.$1(0.9)},
$S:0}
K.kN.prototype={
$0:function(){this.a.$1(1)},
$S:0}
K.kO.prototype={
$1:function(a){var s,r=null,q=this.a,p=this.b,o=p.d
if(o==null)o=r
else{o=o.a
o=o==null?r:o.c
if(o==null)o=""}s=t.s
q.dF("Vertex Shader","glsl",0,H.b((o==null?"":o).split("\n"),s))
p=p.d
if(p==null)p=r
else{p=p.a
p=p==null?r:p.d
if(p==null)p=""}q.dF("Fragment Shader","glsl",0,H.b((p==null?"":p).split("\n"),s))},
$S:2};(function aliases(){var s=J.a.prototype
s.eH=s.i
s=J.bj.prototype
s.eJ=s.i
s=P.i.prototype
s.eI=s.bR
s=W.D.prototype
s.bT=s.at
s=W.dY.prototype
s.eK=s.aE
s=K.cU.prototype
s.eG=s.aP
s.bU=s.i
s=O.d9.prototype
s.d1=s.aM
s=O.da.prototype
s.d2=s.aM})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"pn","nW",56)
r(P,"q1","oz",9)
r(P,"q2","oA",9)
r(P,"q3","oB",9)
q(P,"mX","pX",0)
r(W,"rD","is",58)
p(W,"qe",4,null,["$4"],["oC"],24,0)
p(W,"qf",4,null,["$4"],["oD"],24,0)
var j
o(j=E.bE.prototype,"gem",0,0,null,["$1","$0"],["en","i9"],1,0)
o(j,"gek",0,0,null,["$1","$0"],["el","i6"],1,0)
n(j,"gi4","i5",6)
n(j,"gi7","i8",6)
o(j=E.fx.prototype,"gd4",0,0,null,["$1","$0"],["d6","d5"],1,0)
m(j,"gim","es",0)
l(j=X.fN.prototype,"gfF","fG",3)
l(j,"gfq","fs",3)
l(j,"gfz","fA",4)
l(j,"gfJ","fK",17)
l(j,"gfH","fI",17)
l(j,"gfN","fO",4)
l(j,"gfR","fS",4)
l(j,"gfD","fE",4)
l(j,"gfP","fQ",4)
l(j,"gfB","fC",4)
l(j,"gfT","fU",36)
l(j,"gfV","fW",3)
l(j,"gha","hb",14)
l(j,"gh6","h7",14)
l(j,"gh8","h9",14)
o(j=D.cZ.prototype,"gdk",0,0,null,["$1","$0"],["dl","fL"],1,0)
l(j,"gfX","fY",38)
n(j,"gfk","fl",26)
n(j,"gh0","h1",26)
k(V.Y.prototype,"gl","br",13)
k(V.L.prototype,"gl","br",13)
k(V.dK.prototype,"gl","br",13)
o(j=U.bZ.prototype,"gb_",0,0,null,["$1","$0"],["R","aj"],1,0)
n(j,"gfi","fj",19)
n(j,"gfZ","h_",19)
o(j=U.dH.prototype,"gb_",0,0,null,["$1","$0"],["R","aj"],1,0)
l(j,"gc3","c4",12)
l(j,"gc5","c6",12)
l(j,"gc7","c8",12)
o(j=U.dI.prototype,"gb_",0,0,null,["$1","$0"],["R","aj"],1,0)
l(j,"gc3","c4",2)
l(j,"gc5","c6",2)
l(j,"gc7","c8",2)
l(j,"gfb","fc",2)
l(j,"gfd","fe",2)
l(j,"ghs","ht",2)
l(j,"ghq","hr",2)
l(j,"gho","hp",2)
l(U.dJ.prototype,"gfg","fh",2)
o(j=M.cC.prototype,"gV",0,0,null,["$1","$0"],["T","aI"],1,0)
n(j,"gh2","h3",16)
n(j,"gh4","h5",16)
o(M.cG.prototype,"gV",0,0,null,["$1","$0"],["T","aI"],1,0)
o(j=M.cM.prototype,"gV",0,0,null,["$1","$0"],["T","aI"],1,0)
n(j,"gft","fu",6)
n(j,"gfv","fw",6)
o(M.cR.prototype,"gV",0,0,null,["$1","$0"],["T","aI"],1,0)
o(O.cT.prototype,"gaq",0,0,null,["$1","$0"],["M","aJ"],1,0)
o(j=O.d7.prototype,"gaq",0,0,null,["$1","$0"],["M","aJ"],1,0)
o(j,"gdn",0,0,null,["$1","$0"],["dq","hg"],1,0)
n(j,"gfm","fn",25)
n(j,"gfo","fp",25)
o(O.d9.prototype,"gaq",0,0,null,["$1","$0"],["M","aJ"],1,0)
o(O.dq.prototype,"gaq",0,0,null,["$1","$0"],["M","aJ"],1,0)
o(X.f3.prototype,"geT",0,0,null,["$1","$0"],["Z","eU"],1,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.N,null)
q(P.N,[H.l9,J.a,J.ah,P.I,P.dR,P.i,H.bk,P.eG,H.cO,H.fK,H.cE,H.jC,H.ja,H.hw,H.bC,P.J,H.iL,H.eO,H.eJ,H.av,H.h8,P.e3,P.co,P.bP,P.fS,P.cd,P.fm,P.kp,P.ea,P.k5,P.dQ,P.j,P.hL,P.d5,P.dm,P.et,P.iG,P.kn,P.km,P.X,P.bD,P.f2,P.ds,P.h5,P.iB,P.aa,P.V,P.bQ,P.jG,P.hq,W.ii,W.l4,W.ll,W.cn,W.K,W.dh,W.dY,W.hB,W.cP,W.k9,W.hM,P.kc,P.e5,P.ho,K.aT,K.cU,K.f9,K.u,L.fj,L.fy,L.fz,L.jy,O.ae,O.dc,E.ia,E.bE,E.bW,E.c7,E.h3,E.je,E.fx,Z.fQ,Z.dL,Z.be,Z.c0,Z.b7,D.ic,D.cN,D.Q,X.cA,X.eL,X.iK,X.iP,X.a9,X.j7,X.jA,X.fN,V.a2,V.aF,V.iv,V.db,V.bl,V.U,V.a4,V.bm,V.fb,V.Y,V.L,V.dK,U.dH,U.dI,U.dJ,M.cG,M.cM,M.cR,A.eq,A.i4,A.aG,A.iD,A.bc,A.bf,A.bn,A.bp,A.iT,A.dA,A.dB,A.dD,A.dG,A.a0,A.jE,F.at,F.eN,F.f7,F.jj,F.dn,F.dp,F.cb,F.ck,F.y,F.jS,F.jV,F.jW,O.bL,O.d9,O.iU,T.js,X.jr,X.iH,X.f3,V.aE,V.jc,V.jl])
q(J.a,[J.eH,J.cX,J.bj,J.w,J.c2,J.bi,H.dd,H.a_,W.e,W.i2,W.bz,W.cB,W.aV,W.H,W.fX,W.as,W.il,W.im,W.fZ,W.cJ,W.h0,W.io,W.l,W.h6,W.aI,W.iE,W.ha,W.bG,W.iO,W.j4,W.he,W.hf,W.aK,W.hg,W.hi,W.aM,W.hm,W.hp,W.aN,W.hr,W.aO,W.hx,W.ap,W.hD,W.jw,W.ay,W.hF,W.jB,W.jL,W.hN,W.hP,W.hR,W.hT,W.hV,P.aZ,P.hc,P.b2,P.hk,P.jb,P.hy,P.b4,P.hH,P.i5,P.fU,P.c9,P.hu])
q(J.bj,[J.f4,J.bO,J.aY])
r(J.iI,J.w)
q(J.c2,[J.cW,J.eI])
q(P.I,[H.cY,P.fC,H.eK,H.fJ,H.fd,H.h4,P.ep,P.f_,P.aC,P.fL,P.fI,P.cc,P.eu,P.ew])
r(P.d1,P.dR)
q(P.d1,[H.ci,W.fV,W.a6,P.eB])
r(H.r,H.ci)
q(P.i,[H.n,H.b_,H.b8,P.cV])
q(H.n,[H.d2,H.d_])
r(H.cK,H.b_)
q(P.eG,[H.eQ,H.fR])
r(H.d6,H.d2)
r(H.cF,H.cE)
r(H.di,P.fC)
q(H.bC,[H.fr,H.iJ,H.kF,H.kG,H.kH,P.k_,P.jZ,P.k0,P.k1,P.ki,P.kh,P.kA,P.k7,P.k8,P.iM,P.iQ,P.jP,P.jO,P.ip,P.iq,P.jK,P.jH,P.jI,P.jJ,P.kk,P.kj,P.ku,P.kv,P.kw,W.ir,W.j5,W.j6,W.ji,W.jp,W.k2,W.j9,W.j8,W.ka,W.kb,W.kg,W.ko,P.ke,P.kf,P.ks,P.kB,P.iz,P.iA,P.i6,E.jf,E.jg,E.jh,E.jv,D.ix,D.iy,F.kq,F.jk,F.jY,F.jX,F.jT,F.jU,O.iX,O.iY,O.iZ,O.j_,O.j0,O.j1,O.j2,O.j3,T.ju,T.jt,V.kY,V.jd,V.jn,V.jm,V.jo,K.kK,K.kL,K.kM,K.kP,K.kQ,K.kR,K.kS,K.kT,K.kU,K.kV,K.kW,K.kN,K.kO])
q(H.fr,[H.fk,H.bV])
r(P.d4,P.J)
q(P.d4,[H.T,W.fT])
r(H.c6,H.a_)
q(H.c6,[H.dT,H.dV])
r(H.dU,H.dT)
r(H.bI,H.dU)
r(H.dW,H.dV)
r(H.de,H.dW)
q(H.de,[H.eV,H.eW,H.eX,H.eY,H.eZ,H.df,H.bJ])
r(H.e4,H.h4)
r(P.e0,P.cV)
r(P.k6,P.kp)
r(P.dX,P.ea)
r(P.dP,P.dX)
r(P.e8,P.d5)
r(P.cj,P.e8)
q(P.et,[P.i8,P.it])
r(P.ev,P.fm)
q(P.ev,[P.i9,P.iF,P.jQ,P.jN])
r(P.jM,P.it)
q(P.aC,[P.dl,P.eF])
r(P.fY,P.bQ)
q(W.e,[W.t,W.eA,W.c3,W.aw,W.dZ,W.ax,W.ai,W.e1,W.fP,W.cl,P.es,P.bd])
q(W.t,[W.D,W.aD,W.cm])
q(W.D,[W.v,P.o])
q(W.v,[W.en,W.eo,W.bU,W.bA,W.bB,W.bg,W.eC,W.c_,W.c1,W.fe,W.bq,W.dt,W.fp,W.fq,W.ce])
r(W.ih,W.aV)
r(W.cH,W.fX)
q(W.as,[W.ij,W.ik])
r(W.h_,W.fZ)
r(W.cI,W.h_)
r(W.h1,W.h0)
r(W.ez,W.h1)
r(W.al,W.bz)
r(W.h7,W.h6)
r(W.bY,W.h7)
r(W.hb,W.ha)
r(W.bF,W.hb)
r(W.b6,W.l)
q(W.b6,[W.bH,W.an,W.bN])
r(W.eS,W.he)
r(W.eT,W.hf)
r(W.hh,W.hg)
r(W.eU,W.hh)
r(W.hj,W.hi)
r(W.dg,W.hj)
r(W.hn,W.hm)
r(W.f6,W.hn)
r(W.fc,W.hp)
r(W.e_,W.dZ)
r(W.fg,W.e_)
r(W.hs,W.hr)
r(W.fh,W.hs)
r(W.fl,W.hx)
r(W.hE,W.hD)
r(W.fs,W.hE)
r(W.e2,W.e1)
r(W.ft,W.e2)
r(W.hG,W.hF)
r(W.fA,W.hG)
r(W.br,W.an)
r(W.hO,W.hN)
r(W.fW,W.hO)
r(W.dM,W.cJ)
r(W.hQ,W.hP)
r(W.h9,W.hQ)
r(W.hS,W.hR)
r(W.dS,W.hS)
r(W.hU,W.hT)
r(W.ht,W.hU)
r(W.hW,W.hV)
r(W.hA,W.hW)
r(W.h2,W.fT)
r(W.dN,P.cd)
r(W.hC,W.dY)
r(P.kd,P.kc)
r(P.ag,P.ho)
r(P.hd,P.hc)
r(P.eM,P.hd)
r(P.hl,P.hk)
r(P.f0,P.hl)
r(P.ca,P.o)
r(P.hz,P.hy)
r(P.fn,P.hz)
r(P.hI,P.hH)
r(P.fB,P.hI)
r(P.er,P.fU)
r(P.f1,P.bd)
r(P.hv,P.hu)
r(P.fi,P.hv)
q(K.cU,[K.af,L.dv])
q(E.ia,[Z.bX,A.bK,T.bM])
q(D.Q,[D.aW,D.aX,D.A,X.f8])
q(X.f8,[X.d3,X.c4,X.c5,X.du])
q(O.ae,[D.cZ,U.bZ,M.cC])
q(D.ic,[U.ie,U.Z])
r(U.cD,U.Z)
q(A.bK,[A.cS,A.d8,A.dr])
q(A.a0,[A.cg,A.fE,A.fF,A.fG,A.fD,A.dw,A.dx,A.dy,A.dz,A.fH,A.dC,A.ch,A.dE,A.dF])
q(O.bL,[O.cT,O.d7,O.dq])
q(O.d9,[O.iR,O.iS,O.da])
q(O.da,[O.iV,O.iW])
q(T.bM,[T.fu,T.fw])
r(T.fv,T.fu)
q(X.jr,[X.i7,X.iC])
q(V.aE,[V.ex,V.eD,V.eE,V.f5])
s(H.ci,H.fK)
s(H.dT,P.j)
s(H.dU,H.cO)
s(H.dV,P.j)
s(H.dW,H.cO)
s(P.dR,P.j)
s(P.e8,P.hL)
s(P.ea,P.dm)
s(W.fX,W.ii)
s(W.fZ,P.j)
s(W.h_,W.K)
s(W.h0,P.j)
s(W.h1,W.K)
s(W.h6,P.j)
s(W.h7,W.K)
s(W.ha,P.j)
s(W.hb,W.K)
s(W.he,P.J)
s(W.hf,P.J)
s(W.hg,P.j)
s(W.hh,W.K)
s(W.hi,P.j)
s(W.hj,W.K)
s(W.hm,P.j)
s(W.hn,W.K)
s(W.hp,P.J)
s(W.dZ,P.j)
s(W.e_,W.K)
s(W.hr,P.j)
s(W.hs,W.K)
s(W.hx,P.J)
s(W.hD,P.j)
s(W.hE,W.K)
s(W.e1,P.j)
s(W.e2,W.K)
s(W.hF,P.j)
s(W.hG,W.K)
s(W.hN,P.j)
s(W.hO,W.K)
s(W.hP,P.j)
s(W.hQ,W.K)
s(W.hR,P.j)
s(W.hS,W.K)
s(W.hT,P.j)
s(W.hU,W.K)
s(W.hV,P.j)
s(W.hW,W.K)
s(P.hc,P.j)
s(P.hd,W.K)
s(P.hk,P.j)
s(P.hl,W.K)
s(P.hy,P.j)
s(P.hz,W.K)
s(P.hH,P.j)
s(P.hI,W.K)
s(P.fU,P.J)
s(P.hu,P.j)
s(P.hv,W.K)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",W:"double",a3:"num",m:"String",ad:"bool",aa:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","~([Q?])","~(Q)","~(l)","~(an)","~(m,@)","~(k,i<bE>)","~(k,k)","~(at)","~(~())","aa()","~(@,@)","~(Q?)","W()","~(bN)","ad(t)","~(k,i<ao>)","~(bH)","~(cf,m,k)","~(k,i<Z?>)","~(~(Q))","@()","ad(aL)","ad(m)","ad(D,m,m,cn)","~(k,i<bl>)","~(k,i<aJ>)","m(k)","D(t)","aa(@,@)","~(t,t?)","m(m)","~(a3)","~(m,m)","@(@)","cf(@,@)","~(br)","~(m,m?)","ad(i<aJ>)","k(k,k)","~(m[@])","~(m,k)","G<m,m>(G<m,m>,m)","~(N?,N?)","~(ck,W,W)","bX(k)","aa(~())","aa(@)","@(m)","k(bc,bc)","k(bf,bf)","k(bn,bn)","k(bp,bp)","~(jx)","ad(aE?)","aa(W)","k(@,@)","@(@,m)","m(e)","~(@)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.oV(v.typeUniverse,JSON.parse('{"f4":"bj","bO":"bj","aY":"bj","qy":"l","qK":"l","qA":"bd","qz":"e","qR":"e","qU":"e","qx":"o","qL":"o","qB":"v","qO":"v","qM":"t","qJ":"t","rj":"ai","qF":"b6","qC":"aD","qV":"aD","qT":"an","qN":"bF","qG":"H","qH":"ap","qQ":"bI","qP":"a_","eH":{"ad":[]},"bj":{"lZ":[]},"w":{"p":["1"],"n":["1"],"i":["1"]},"iI":{"w":["1"],"p":["1"],"n":["1"],"i":["1"]},"c2":{"W":[],"a3":[]},"cW":{"W":[],"k":[],"a3":[]},"eI":{"W":[],"a3":[]},"bi":{"m":[]},"cY":{"I":[]},"r":{"j":["k"],"p":["k"],"n":["k"],"i":["k"],"j.E":"k"},"n":{"i":["1"]},"d2":{"n":["1"],"i":["1"]},"b_":{"i":["2"],"i.E":"2"},"cK":{"b_":["1","2"],"n":["2"],"i":["2"],"i.E":"2"},"d6":{"d2":["2"],"n":["2"],"i":["2"],"i.E":"2"},"b8":{"i":["1"],"i.E":"1"},"ci":{"j":["1"],"p":["1"],"n":["1"],"i":["1"]},"cE":{"G":["1","2"]},"cF":{"G":["1","2"]},"di":{"I":[]},"eK":{"I":[]},"fJ":{"I":[]},"bC":{"cQ":[]},"fr":{"cQ":[]},"fk":{"cQ":[]},"bV":{"cQ":[]},"fd":{"I":[]},"T":{"J":["1","2"],"G":["1","2"],"J.V":"2"},"d_":{"n":["1"],"i":["1"],"i.E":"1"},"eJ":{"m7":[]},"c6":{"z":["1"],"a_":[]},"bI":{"j":["W"],"z":["W"],"p":["W"],"a_":[],"n":["W"],"i":["W"],"j.E":"W"},"de":{"j":["k"],"z":["k"],"p":["k"],"a_":[],"n":["k"],"i":["k"]},"eV":{"j":["k"],"z":["k"],"p":["k"],"a_":[],"n":["k"],"i":["k"],"j.E":"k"},"eW":{"j":["k"],"z":["k"],"p":["k"],"a_":[],"n":["k"],"i":["k"],"j.E":"k"},"eX":{"j":["k"],"z":["k"],"p":["k"],"a_":[],"n":["k"],"i":["k"],"j.E":"k"},"eY":{"j":["k"],"z":["k"],"p":["k"],"a_":[],"n":["k"],"i":["k"],"j.E":"k"},"eZ":{"j":["k"],"z":["k"],"p":["k"],"a_":[],"n":["k"],"i":["k"],"j.E":"k"},"df":{"j":["k"],"z":["k"],"p":["k"],"a_":[],"n":["k"],"i":["k"],"j.E":"k"},"bJ":{"j":["k"],"cf":[],"z":["k"],"p":["k"],"a_":[],"n":["k"],"i":["k"],"j.E":"k"},"h4":{"I":[]},"e4":{"I":[]},"e3":{"jx":[]},"e0":{"i":["1"],"i.E":"1"},"dP":{"dm":["1"],"n":["1"],"i":["1"]},"cV":{"i":["1"]},"d1":{"j":["1"],"p":["1"],"n":["1"],"i":["1"]},"d4":{"J":["1","2"],"G":["1","2"]},"J":{"G":["1","2"]},"d5":{"G":["1","2"]},"cj":{"G":["1","2"]},"dX":{"dm":["1"],"n":["1"],"i":["1"]},"W":{"a3":[]},"k":{"a3":[]},"p":{"n":["1"],"i":["1"]},"ep":{"I":[]},"fC":{"I":[]},"f_":{"I":[]},"aC":{"I":[]},"dl":{"I":[]},"eF":{"I":[]},"fL":{"I":[]},"fI":{"I":[]},"cc":{"I":[]},"eu":{"I":[]},"f2":{"I":[]},"ds":{"I":[]},"ew":{"I":[]},"bQ":{"fM":[]},"hq":{"fM":[]},"fY":{"fM":[]},"v":{"D":[],"t":[],"e":[]},"bg":{"D":[],"t":[],"e":[]},"D":{"t":[],"e":[]},"al":{"bz":[]},"bH":{"l":[]},"an":{"l":[]},"t":{"e":[]},"aw":{"e":[]},"ax":{"e":[]},"ai":{"e":[]},"bN":{"l":[]},"b6":{"l":[]},"br":{"an":[],"l":[]},"cn":{"aL":[]},"en":{"D":[],"t":[],"e":[]},"eo":{"D":[],"t":[],"e":[]},"bU":{"D":[],"t":[],"e":[]},"bA":{"D":[],"t":[],"e":[]},"bB":{"D":[],"t":[],"e":[]},"aD":{"t":[],"e":[]},"cI":{"j":["ag<a3>"],"p":["ag<a3>"],"z":["ag<a3>"],"n":["ag<a3>"],"i":["ag<a3>"],"j.E":"ag<a3>"},"cJ":{"ag":["a3"]},"ez":{"j":["m"],"p":["m"],"z":["m"],"n":["m"],"i":["m"],"j.E":"m"},"fV":{"j":["D"],"p":["D"],"n":["D"],"i":["D"],"j.E":"D"},"bY":{"j":["al"],"p":["al"],"z":["al"],"n":["al"],"i":["al"],"j.E":"al"},"eA":{"e":[]},"eC":{"D":[],"t":[],"e":[]},"bF":{"j":["t"],"p":["t"],"z":["t"],"n":["t"],"i":["t"],"j.E":"t"},"c_":{"D":[],"t":[],"e":[]},"c1":{"D":[],"t":[],"e":[]},"c3":{"e":[]},"eS":{"J":["m","@"],"G":["m","@"],"J.V":"@"},"eT":{"J":["m","@"],"G":["m","@"],"J.V":"@"},"eU":{"j":["aK"],"p":["aK"],"z":["aK"],"n":["aK"],"i":["aK"],"j.E":"aK"},"a6":{"j":["t"],"p":["t"],"n":["t"],"i":["t"],"j.E":"t"},"dg":{"j":["t"],"p":["t"],"z":["t"],"n":["t"],"i":["t"],"j.E":"t"},"f6":{"j":["aM"],"p":["aM"],"z":["aM"],"n":["aM"],"i":["aM"],"j.E":"aM"},"fc":{"J":["m","@"],"G":["m","@"],"J.V":"@"},"fe":{"D":[],"t":[],"e":[]},"fg":{"j":["aw"],"p":["aw"],"z":["aw"],"e":[],"n":["aw"],"i":["aw"],"j.E":"aw"},"fh":{"j":["aN"],"p":["aN"],"z":["aN"],"n":["aN"],"i":["aN"],"j.E":"aN"},"fl":{"J":["m","m"],"G":["m","m"],"J.V":"m"},"bq":{"D":[],"t":[],"e":[]},"dt":{"D":[],"t":[],"e":[]},"fp":{"D":[],"t":[],"e":[]},"fq":{"D":[],"t":[],"e":[]},"ce":{"D":[],"t":[],"e":[]},"fs":{"j":["ai"],"p":["ai"],"z":["ai"],"n":["ai"],"i":["ai"],"j.E":"ai"},"ft":{"j":["ax"],"p":["ax"],"z":["ax"],"e":[],"n":["ax"],"i":["ax"],"j.E":"ax"},"fA":{"j":["ay"],"p":["ay"],"z":["ay"],"n":["ay"],"i":["ay"],"j.E":"ay"},"fP":{"e":[]},"cl":{"e":[]},"cm":{"t":[],"e":[]},"fW":{"j":["H"],"p":["H"],"z":["H"],"n":["H"],"i":["H"],"j.E":"H"},"dM":{"ag":["a3"]},"h9":{"j":["aI?"],"p":["aI?"],"z":["aI?"],"n":["aI?"],"i":["aI?"],"j.E":"aI?"},"dS":{"j":["t"],"p":["t"],"z":["t"],"n":["t"],"i":["t"],"j.E":"t"},"ht":{"j":["aO"],"p":["aO"],"z":["aO"],"n":["aO"],"i":["aO"],"j.E":"aO"},"hA":{"j":["ap"],"p":["ap"],"z":["ap"],"n":["ap"],"i":["ap"],"j.E":"ap"},"fT":{"J":["m","m"],"G":["m","m"]},"h2":{"J":["m","m"],"G":["m","m"],"J.V":"m"},"dN":{"cd":["1"]},"dh":{"aL":[]},"dY":{"aL":[]},"hC":{"aL":[]},"hB":{"aL":[]},"e5":{"bG":[]},"eB":{"j":["D"],"p":["D"],"n":["D"],"i":["D"],"j.E":"D"},"ag":{"ho":["1"]},"eM":{"j":["aZ"],"p":["aZ"],"n":["aZ"],"i":["aZ"],"j.E":"aZ"},"f0":{"j":["b2"],"p":["b2"],"n":["b2"],"i":["b2"],"j.E":"b2"},"ca":{"o":[],"D":[],"t":[],"e":[]},"fn":{"j":["m"],"p":["m"],"n":["m"],"i":["m"],"j.E":"m"},"o":{"D":[],"t":[],"e":[]},"fB":{"j":["b4"],"p":["b4"],"n":["b4"],"i":["b4"],"j.E":"b4"},"er":{"J":["m","@"],"G":["m","@"],"J.V":"@"},"es":{"e":[]},"bd":{"e":[]},"f1":{"e":[]},"fi":{"j":["G<@,@>"],"p":["G<@,@>"],"n":["G<@,@>"],"i":["G<@,@>"],"j.E":"G<@,@>"},"cU":{"b0":[]},"aT":{"b0":[]},"af":{"b0":[]},"f9":{"b0":[]},"u":{"b0":[]},"dv":{"b0":[]},"ae":{"i":["1"],"ae.T":"1"},"aW":{"Q":[]},"aX":{"Q":[]},"A":{"Q":[]},"d3":{"Q":[]},"c4":{"Q":[]},"c5":{"Q":[]},"f8":{"Q":[]},"du":{"Q":[]},"nC":{"aJ":[]},"nO":{"aJ":[]},"o4":{"aJ":[]},"oo":{"aJ":[]},"cZ":{"ae":["aJ"],"i":["aJ"],"ae.T":"aJ"},"cD":{"Z":[]},"bZ":{"ae":["Z?"],"Z":[],"i":["Z?"],"ae.T":"Z?"},"dH":{"Z":[]},"dI":{"Z":[]},"dJ":{"Z":[]},"cC":{"ae":["ao"],"ao":[],"i":["ao"],"ae.T":"ao"},"cG":{"ao":[]},"cM":{"ao":[]},"cR":{"ao":[]},"cg":{"a0":[]},"ch":{"a0":[]},"cS":{"bK":[]},"d8":{"bK":[]},"dr":{"bK":[]},"fE":{"a0":[]},"fF":{"a0":[]},"fG":{"a0":[]},"fD":{"a0":[]},"dw":{"a0":[]},"dx":{"a0":[]},"dy":{"a0":[]},"dz":{"a0":[]},"fH":{"a0":[]},"dC":{"a0":[]},"dE":{"a0":[]},"dF":{"a0":[]},"cT":{"bL":[]},"d7":{"bL":[]},"dq":{"bL":[]},"fu":{"bM":[]},"fw":{"bM":[]},"fv":{"bM":[]},"ex":{"aE":[]},"eD":{"aE":[]},"eE":{"aE":[]},"f5":{"aE":[]},"cf":{"p":["k"],"n":["k"],"i":["k"]}}'))
H.oU(v.typeUniverse,JSON.parse('{"ah":1,"n":1,"bk":1,"eQ":2,"fR":1,"cO":1,"fK":1,"ci":1,"cE":2,"eO":1,"c6":1,"cd":1,"bP":1,"fm":2,"dQ":1,"cV":1,"d1":1,"d4":2,"hL":2,"d5":2,"dX":1,"dR":1,"e8":2,"ea":1,"et":2,"ev":2,"eG":1,"dN":1,"K":1,"cP":1,"aW":1,"aX":1,"A":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.lB
return{cR:s("bU"),fK:s("bz"),Y:s("bA"),eT:s("bX"),ed:s("be"),gA:s("bB"),ar:s("cB"),gw:s("n<@>"),h:s("D"),m:s("bE"),bU:s("I"),aD:s("l"),c8:s("al"),bX:s("bY"),b:s("cQ"),I:s("bG"),fS:s("c_"),gk:s("c1"),eu:s("w<eq>"),i:s("w<nC>"),cn:s("w<bc>"),U:s("w<nO>"),fD:s("w<bf>"),C:s("w<bg>"),v:s("w<at>"),fv:s("w<c0>"),e:s("w<aJ>"),L:s("w<eN>"),F:s("w<p<bg>>"),z:s("w<b0>"),fA:s("w<bl>"),r:s("w<aL>"),J:s("w<o4>"),cG:s("w<U>"),eg:s("w<bn>"),o:s("w<f7>"),ba:s("w<ao>"),D:s("w<oo>"),c3:s("w<bp>"),g9:s("w<cd<N>>"),s:s("w<m>"),d:s("w<bM>"),gT:s("w<ay>"),ab:s("w<dv>"),gN:s("w<cf>"),dC:s("w<a0>"),c:s("w<dA>"),V:s("w<dB>"),B:s("w<dD>"),M:s("w<dG>"),k:s("w<ck>"),n:s("w<W>"),gn:s("w<@>"),t:s("w<k>"),g6:s("w<aE?>"),eJ:s("w<Z?>"),bc:s("w<bL?>"),p:s("w<ch?>"),a:s("w<~(Q)>"),T:s("cX"),eH:s("lZ"),O:s("aY"),aU:s("z<@>"),fX:s("T<k,ad>"),y:s("T<k,k>"),x:s("p<dA>"),E:s("p<dB>"),f0:s("p<dD>"),R:s("p<dG>"),aH:s("p<@>"),bv:s("d3"),f:s("G<@,@>"),dv:s("d6<m,m>"),gc:s("bl"),bK:s("c3"),Z:s("c4"),bZ:s("c5"),cH:s("dd"),dE:s("a_"),bm:s("bJ"),P:s("aa"),K:s("N"),q:s("ag<a3>"),fJ:s("m7"),ew:s("ca"),fg:s("bK"),N:s("m"),g7:s("o"),bY:s("bq"),aW:s("ce"),aF:s("jx"),bJ:s("fy"),dr:s("du"),u:s("dw"),w:s("cg"),fp:s("dx"),g:s("dy"),bw:s("dz"),Q:s("dC"),j:s("ch"),G:s("dE"),l:s("dF"),ak:s("bO"),dw:s("cj<m,m>"),dD:s("fM"),h9:s("cm"),ac:s("a6"),cJ:s("ad"),gR:s("W"),A:s("@"),S:s("k"),aw:s("0&*"),_:s("N*"),bG:s("lW<aa>?"),bF:s("cS?"),eI:s("d8?"),X:s("N?"),gW:s("c9?"),dm:s("dr?"),dl:s("fj?"),f7:s("fz?"),W:s("cg?"),H:s("a3"),h2:s("~(Q)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.q=W.bA.prototype
C.i=W.bB.prototype
C.R=W.bg.prototype
C.U=J.a.prototype
C.b=J.w.prototype
C.c=J.cW.prototype
C.V=J.cX.prototype
C.d=J.c2.prototype
C.a=J.bi.prototype
C.W=J.aY.prototype
C.a0=H.bJ.prototype
C.C=J.f4.prototype
C.o=P.c9.prototype
C.D=W.dt.prototype
C.p=J.bO.prototype
C.E=W.br.prototype
C.F=W.cl.prototype
C.G=new E.bW("Browser.chrome")
C.r=new E.bW("Browser.firefox")
C.t=new E.bW("Browser.edge")
C.H=new E.bW("Browser.other")
C.a6=new P.i9()
C.I=new P.i8()
C.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.J=function() {
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
C.O=function(getTagFallback) {
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
C.K=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.L=function(hooks) {
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
C.N=function(hooks) {
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
C.M=function(hooks) {
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
C.v=function(hooks) { return hooks; }

C.P=new P.f2()
C.e=new P.jM()
C.Q=new P.jQ()
C.f=new P.k6()
C.m=new P.bD(0)
C.S=new P.bD(5e6)
C.T=new P.iG("element",!1,!1,!1)
C.j=H.b(s([0,0,32776,33792,1,10240,0,0]),t.t)
C.X=H.b(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.s)
C.k=H.b(s([0,0,65490,45055,65535,34815,65534,18431]),t.t)
C.l=H.b(s([0,0,26624,1023,65534,2047,65534,2047]),t.t)
C.Y=H.b(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.s)
C.w=H.b(s([]),t.s)
C.Z=H.b(s([0,0,32722,12287,65534,34815,65534,18431]),t.t)
C.x=H.b(s([0,0,65498,45055,65535,34815,65534,18431]),t.t)
C.h=H.b(s([0,0,24576,1023,65534,34815,65534,18431]),t.t)
C.y=H.b(s([0,0,32754,11263,65534,34815,65534,18431]),t.t)
C.z=H.b(s([0,0,65490,12287,65535,34815,65534,18431]),t.t)
C.A=H.b(s(["bind","if","ref","repeat","syntax"]),t.s)
C.n=H.b(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.s)
C.a_=new H.cF(0,{},C.w,H.lB("cF<m,m>"))
C.a1=new E.c7("OperatingSystem.windows")
C.B=new E.c7("OperatingSystem.mac")
C.a2=new E.c7("OperatingSystem.linux")
C.a3=new E.c7("OperatingSystem.other")
C.a4=new P.jN(!1)
C.a5=new P.co(null,2)})();(function staticFields(){$.k3=null
$.aU=0
$.cz=null
$.lO=null
$.mZ=null
$.mW=null
$.n3=null
$.kC=null
$.kJ=null
$.lD=null
$.cr=null
$.ed=null
$.ee=null
$.lx=!1
$.aP=C.f
$.aj=H.b([],H.lB("w<N>"))
$.bh=null
$.l3=null
$.lT=null
$.lS=null
$.dO=P.R(t.N,t.b)
$.iu=null
$.m0=null
$.m1=null
$.ab=null
$.b3=null
$.m9=null
$.az=null
$.mn=null
$.mr=null
$.mq=null
$.mp=null
$.ms=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"qI","n9",function(){return H.qd("_$dart_dartClosure")})
s($,"qW","nb",function(){return H.b5(H.jD({
toString:function(){return"$receiver$"}}))})
s($,"qX","nc",function(){return H.b5(H.jD({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"qY","nd",function(){return H.b5(H.jD(null))})
s($,"qZ","ne",function(){return H.b5(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"r1","nh",function(){return H.b5(H.jD(void 0))})
s($,"r2","ni",function(){return H.b5(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"r0","ng",function(){return H.b5(H.mh(null))})
s($,"r_","nf",function(){return H.b5(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"r4","nk",function(){return H.b5(H.mh(void 0))})
s($,"r3","nj",function(){return H.b5(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"rk","lI",function(){return P.oy()})
s($,"r5","nl",function(){return new P.jP().$0()})
s($,"r6","nm",function(){return new P.jO().$0()})
s($,"rl","nq",function(){return H.o3(H.cq(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"ro","ns",function(){return P.oh("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"rB","nt",function(){return P.pf()})
s($,"rm","nr",function(){return P.m_(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"rd","np",function(){return Z.aA(0)})
s($,"r7","nn",function(){return Z.aA(511)})
s($,"rf","ar",function(){return Z.aA(1)})
s($,"re","by",function(){return Z.aA(2)})
s($,"r9","bx",function(){return Z.aA(4)})
s($,"rg","aR",function(){return Z.aA(8)})
s($,"rh","bS",function(){return Z.aA(16)})
s($,"ra","ek",function(){return Z.aA(32)})
s($,"rb","el",function(){return Z.aA(64)})
s($,"rc","no",function(){return Z.aA(96)})
s($,"ri","cx",function(){return Z.aA(128)})
s($,"r8","bw",function(){return Z.aA(256)})
s($,"qE","n8",function(){return new V.iv()})
r($,"qD","E",function(){return $.n8()})
r($,"qS","na",function(){var q,p,o,n,m,l=V.o5(),k=$.mq
if(k==null)k=$.mq=V.mo(0,1,0)
q=$.mp
p=(q==null?$.mp=V.mo(0,0,-1):q).S()
o=k.bq(p).S()
n=p.bq(o)
m=V.ox(l)
return V.b1(o.a,n.a,p.a,o.be(0).ad(m),o.b,n.b,p.b,n.be(0).ad(m),o.c,n.c,p.c,p.be(0).ad(m),0,0,0,1)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.dd,DataView:H.a_,ArrayBufferView:H.a_,Float32Array:H.bI,Float64Array:H.bI,Int16Array:H.eV,Int32Array:H.eW,Int8Array:H.eX,Uint16Array:H.eY,Uint32Array:H.eZ,Uint8ClampedArray:H.df,CanvasPixelArray:H.df,Uint8Array:H.bJ,HTMLAudioElement:W.v,HTMLBRElement:W.v,HTMLButtonElement:W.v,HTMLContentElement:W.v,HTMLDListElement:W.v,HTMLDataElement:W.v,HTMLDataListElement:W.v,HTMLDetailsElement:W.v,HTMLDialogElement:W.v,HTMLEmbedElement:W.v,HTMLFieldSetElement:W.v,HTMLHRElement:W.v,HTMLHeadElement:W.v,HTMLHeadingElement:W.v,HTMLHtmlElement:W.v,HTMLIFrameElement:W.v,HTMLLIElement:W.v,HTMLLabelElement:W.v,HTMLLegendElement:W.v,HTMLLinkElement:W.v,HTMLMapElement:W.v,HTMLMediaElement:W.v,HTMLMenuElement:W.v,HTMLMetaElement:W.v,HTMLMeterElement:W.v,HTMLModElement:W.v,HTMLOListElement:W.v,HTMLObjectElement:W.v,HTMLOptGroupElement:W.v,HTMLOptionElement:W.v,HTMLOutputElement:W.v,HTMLParagraphElement:W.v,HTMLParamElement:W.v,HTMLPictureElement:W.v,HTMLPreElement:W.v,HTMLProgressElement:W.v,HTMLQuoteElement:W.v,HTMLScriptElement:W.v,HTMLShadowElement:W.v,HTMLSlotElement:W.v,HTMLSourceElement:W.v,HTMLSpanElement:W.v,HTMLStyleElement:W.v,HTMLTableCaptionElement:W.v,HTMLTableColElement:W.v,HTMLTextAreaElement:W.v,HTMLTimeElement:W.v,HTMLTitleElement:W.v,HTMLTrackElement:W.v,HTMLUListElement:W.v,HTMLUnknownElement:W.v,HTMLVideoElement:W.v,HTMLDirectoryElement:W.v,HTMLFontElement:W.v,HTMLFrameElement:W.v,HTMLFrameSetElement:W.v,HTMLMarqueeElement:W.v,HTMLElement:W.v,AccessibleNodeList:W.i2,HTMLAnchorElement:W.en,HTMLAreaElement:W.eo,HTMLBaseElement:W.bU,Blob:W.bz,HTMLBodyElement:W.bA,HTMLCanvasElement:W.bB,CanvasRenderingContext2D:W.cB,CDATASection:W.aD,CharacterData:W.aD,Comment:W.aD,ProcessingInstruction:W.aD,Text:W.aD,CSSPerspective:W.ih,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.cH,MSStyleCSSProperties:W.cH,CSS2Properties:W.cH,CSSImageValue:W.as,CSSKeywordValue:W.as,CSSNumericValue:W.as,CSSPositionValue:W.as,CSSResourceValue:W.as,CSSUnitValue:W.as,CSSURLImageValue:W.as,CSSStyleValue:W.as,CSSMatrixComponent:W.aV,CSSRotation:W.aV,CSSScale:W.aV,CSSSkew:W.aV,CSSTranslation:W.aV,CSSTransformComponent:W.aV,CSSTransformValue:W.ij,CSSUnparsedValue:W.ik,DataTransferItemList:W.il,HTMLDivElement:W.bg,DOMException:W.im,ClientRectList:W.cI,DOMRectList:W.cI,DOMRectReadOnly:W.cJ,DOMStringList:W.ez,DOMTokenList:W.io,Element:W.D,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,SubmitEvent:W.l,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.al,FileList:W.bY,FileWriter:W.eA,HTMLFormElement:W.eC,Gamepad:W.aI,History:W.iE,HTMLCollection:W.bF,HTMLFormControlsCollection:W.bF,HTMLOptionsCollection:W.bF,ImageData:W.bG,HTMLImageElement:W.c_,HTMLInputElement:W.c1,KeyboardEvent:W.bH,Location:W.iO,MediaList:W.j4,MessagePort:W.c3,MIDIInputMap:W.eS,MIDIOutputMap:W.eT,MimeType:W.aK,MimeTypeArray:W.eU,PointerEvent:W.an,MouseEvent:W.an,DragEvent:W.an,Document:W.t,DocumentFragment:W.t,HTMLDocument:W.t,ShadowRoot:W.t,XMLDocument:W.t,DocumentType:W.t,Node:W.t,NodeList:W.dg,RadioNodeList:W.dg,Plugin:W.aM,PluginArray:W.f6,RTCStatsReport:W.fc,HTMLSelectElement:W.fe,SourceBuffer:W.aw,SourceBufferList:W.fg,SpeechGrammar:W.aN,SpeechGrammarList:W.fh,SpeechRecognitionResult:W.aO,Storage:W.fl,CSSStyleSheet:W.ap,StyleSheet:W.ap,HTMLTableCellElement:W.bq,HTMLTableDataCellElement:W.bq,HTMLTableHeaderCellElement:W.bq,HTMLTableElement:W.dt,HTMLTableRowElement:W.fp,HTMLTableSectionElement:W.fq,HTMLTemplateElement:W.ce,TextTrack:W.ax,TextTrackCue:W.ai,VTTCue:W.ai,TextTrackCueList:W.fs,TextTrackList:W.ft,TimeRanges:W.jw,Touch:W.ay,TouchEvent:W.bN,TouchList:W.fA,TrackDefaultList:W.jB,CompositionEvent:W.b6,FocusEvent:W.b6,TextEvent:W.b6,UIEvent:W.b6,URL:W.jL,VideoTrackList:W.fP,WheelEvent:W.br,Window:W.cl,DOMWindow:W.cl,Attr:W.cm,CSSRuleList:W.fW,ClientRect:W.dM,DOMRect:W.dM,GamepadList:W.h9,NamedNodeMap:W.dS,MozNamedAttrMap:W.dS,SpeechRecognitionResultList:W.ht,StyleSheetList:W.hA,SVGLength:P.aZ,SVGLengthList:P.eM,SVGNumber:P.b2,SVGNumberList:P.f0,SVGPointList:P.jb,SVGScriptElement:P.ca,SVGStringList:P.fn,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,SVGTransform:P.b4,SVGTransformList:P.fB,AudioBuffer:P.i5,AudioParamMap:P.er,AudioTrackList:P.es,AudioContext:P.bd,webkitAudioContext:P.bd,BaseAudioContext:P.bd,OfflineAudioContext:P.f1,WebGL2RenderingContext:P.c9,SQLResultSetRowList:P.fi})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c6.$nativeSuperclassTag="ArrayBufferView"
H.dT.$nativeSuperclassTag="ArrayBufferView"
H.dU.$nativeSuperclassTag="ArrayBufferView"
H.bI.$nativeSuperclassTag="ArrayBufferView"
H.dV.$nativeSuperclassTag="ArrayBufferView"
H.dW.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
W.dZ.$nativeSuperclassTag="EventTarget"
W.e_.$nativeSuperclassTag="EventTarget"
W.e1.$nativeSuperclassTag="EventTarget"
W.e2.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=K.qn
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
