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
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lv(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={l6:function l6(){},
l8:function(a){return new H.cR("Field '"+a+"' has been assigned during initialization.")},
kE:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
je:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
oo:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
q4:function(a,b,c){return a},
o0:function(a,b,c,d){if(t.gw.b(a))return new H.cI(a,b,c.J("@<0>").b4(d).J("cI<1,2>"))
return new H.aT(a,b,c.J("@<0>").b4(d).J("aT<1,2>"))},
is:function(){return new P.c9("No element")},
nS:function(){return new P.c9("Too many elements")},
ol:function(a,b){H.f5(a,0,J.aM(a)-1,b)},
f5:function(a,b,c,d){if(c-b<=32)H.ok(a,b,c,d)
else H.oj(a,b,c,d)},
ok:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.bM(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.ah()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
oj:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.a2(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a2(a4+a5,2),f=g-j,e=g+j,d=J.bM(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
H.f5(a3,a4,r-2,a6)
H.f5(a3,q+2,a5,a6)
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
break}}H.f5(a3,r,q,a6)}else H.f5(a3,r,q,a6)},
cR:function cR(a){this.a=a},
r:function r(a){this.a=a},
n:function n(){},
cW:function cW(){},
bc:function bc(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aT:function aT(a,b,c){this.a=a
this.b=b
this.$ti=c},
cI:function cI(a,b,c){this.a=a
this.b=b
this.$ti=c},
eE:function eE(a,b){this.a=null
this.b=a
this.c=b},
d0:function d0(a,b,c){this.a=a
this.b=b
this.$ti=c},
b_:function b_(a,b,c){this.a=a
this.b=b
this.$ti=c},
fH:function fH(a,b){this.a=a
this.b=b},
cK:function cK(){},
fA:function fA(){},
cg:function cg(){},
nK:function(){throw H.c(P.B("Cannot modify unmodifiable Map"))},
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
s=J.cx(a)
return s},
db:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
m_:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.d(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.c(P.a7(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.D(q,o)|32)>r)return n}return parseInt(a,b)},
dc:function(a){return H.o4(a)},
o4:function(a){var s,r,q,p
if(a instanceof P.P)return H.ar(H.b1(a),null)
if(J.e6(a)===C.T||t.ak.b(a)){s=C.t(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.ar(H.b1(a),null)},
o5:function(){if(!!self.location)return self.location.href
return null},
lZ:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
od:function(a){var s,r,q,p=H.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){q=a[r]
if(!H.ks(q))throw H.c(H.e5(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aU(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.e5(q))}return H.lZ(p)},
m0:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.ks(q))throw H.c(H.e5(q))
if(q<0)throw H.c(H.e5(q))
if(q>65535)return H.od(a)}return H.lZ(a)},
oe:function(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ay:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.aU(s,10)|55296)>>>0,s&1023|56320)}}throw H.c(P.a7(a,0,1114111,null,null))},
c6:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oc:function(a){var s=H.c6(a).getFullYear()+0
return s},
oa:function(a){var s=H.c6(a).getMonth()+1
return s},
o6:function(a){var s=H.c6(a).getDate()+0
return s},
o7:function(a){var s=H.c6(a).getHours()+0
return s},
o9:function(a){var s=H.c6(a).getMinutes()+0
return s},
ob:function(a){var s=H.c6(a).getSeconds()+0
return s},
o8:function(a){var s=H.c6(a).getMilliseconds()+0
return s},
mY:function(a){throw H.c(H.e5(a))},
d:function(a,b){if(a==null)J.aM(a)
throw H.c(H.cu(a,b))},
cu:function(a,b){var s,r="index"
if(!H.ks(b))return new P.aE(!0,b,r,null)
s=J.aM(a)
if(b<0||b>=s)return P.O(b,a,r,null,s)
return P.f0(b,r)},
q9:function(a,b,c){if(a>c)return P.a7(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a7(b,a,c,"end",null)
return new P.aE(!0,b,"end",null)},
e5:function(a){return new P.aE(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.eQ()
s=new Error()
s.dartException=a
r=H.qv
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qv:function(){return J.cx(this.dartException)},
h:function(a){throw H.c(a)},
q:function(a){throw H.c(P.aI(a))},
aY:function(a){var s,r,q,p,o,n
a=H.n2(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jp(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
jq:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mc:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
l7:function(a,b){var s=b==null,r=s?null:b.method
return new H.ez(a,r,s?null:b.receiver)},
aj:function(a){if(a==null)return new H.iY(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bN(a,a.dartException)
return H.q0(a)},
bN:function(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
q0:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aU(r,16)&8191)===10)switch(q){case 438:return H.bN(a,H.l7(H.x(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.x(s)+" (Error "+q+")"
return H.bN(a,new H.da(p,e))}}if(a instanceof TypeError){o=$.na()
n=$.nb()
m=$.nc()
l=$.nd()
k=$.ng()
j=$.nh()
i=$.nf()
$.ne()
h=$.nj()
g=$.ni()
f=o.af(s)
if(f!=null)return H.bN(a,H.l7(s,f))
else{f=n.af(s)
if(f!=null){f.method="call"
return H.bN(a,H.l7(s,f))}else{f=m.af(s)
if(f==null){f=l.af(s)
if(f==null){f=k.af(s)
if(f==null){f=j.af(s)
if(f==null){f=i.af(s)
if(f==null){f=l.af(s)
if(f==null){f=h.af(s)
if(f==null){f=g.af(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bN(a,new H.da(s,f==null?e:f.method))}}return H.bN(a,new H.fz(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.di()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bN(a,new P.aE(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.di()
return a},
ly:function(a){var s
if(a==null)return new H.hm(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.hm(a)},
qb:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
qj:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.f("Unsupported number of arguments for wrapped closure"))},
ct:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qj)
a.$identity=s
return s},
nJ:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.fa().constructor.prototype):Object.create(new H.bS(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aO
if(typeof r!=="number")return r.V()
$.aO=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.lN(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.nF(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lN(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
nF:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mX,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.nD:H.nC
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
nG:function(a,b,c,d){var s=H.lM
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lN:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.nI(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nG(r,!p,s,b)
if(r===0){p=$.aO
if(typeof p!=="number")return p.V()
$.aO=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.cy
return new Function(p+(o==null?$.cy=H.hZ("self"):o)+";return "+n+"."+H.x(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aO
if(typeof p!=="number")return p.V()
$.aO=p+1
m+=p
p="return function("+m+"){return this."
o=$.cy
return new Function(p+(o==null?$.cy=H.hZ("self"):o)+"."+H.x(s)+"("+m+");}")()},
nH:function(a,b,c,d){var s=H.lM,r=H.nE
switch(b?-1:a){case 0:throw H.c(new H.f3("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
nI:function(a,b){var s,r,q,p,o,n,m,l=$.cy
if(l==null)l=$.cy=H.hZ("self")
s=$.lL
if(s==null)s=$.lL=H.hZ("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.nH(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.x(r)+"(this."+s+");"
n=$.aO
if(typeof n!=="number")return n.V()
$.aO=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.x(r)+"(this."+s+", "+m+");"
n=$.aO
if(typeof n!=="number")return n.V()
$.aO=n+1
return new Function(o+n+"}")()},
lv:function(a,b,c,d,e,f,g){return H.nJ(a,b,c,d,!!e,!!f,g)},
nC:function(a,b){return H.hA(v.typeUniverse,H.b1(a.a),b)},
nD:function(a,b){return H.hA(v.typeUniverse,H.b1(a.c),b)},
lM:function(a){return a.a},
nE:function(a){return a.c},
hZ:function(a){var s,r,q,p=new H.bS("self","target","receiver","name"),o=J.l5(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.bQ("Field name "+a+" not found."))},
qt:function(a){throw H.c(new P.ek(a))},
qd:function(a){return v.getIsolateTag(a)},
qu:function(a){return H.h(new H.cR(a))},
rC:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qm:function(a){var s,r,q,p,o,n=$.mW.$1(a),m=$.kC[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kJ[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.mP.$2(a,n)
if(q!=null){m=$.kC[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kJ[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kS(s)
$.kC[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kJ[n]=s
return s}if(p==="-"){o=H.kS(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.n0(a,s)
if(p==="*")throw H.c(P.jt(n))
if(v.leafTags[n]===true){o=H.kS(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.n0(a,s)},
n0:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lA(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kS:function(a){return J.lA(a,!1,null,!!a.$iA)},
qo:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kS(s)
else return J.lA(s,c,null,null)},
qh:function(){if(!0===$.lz)return
$.lz=!0
H.qi()},
qi:function(){var s,r,q,p,o,n,m,l
$.kC=Object.create(null)
$.kJ=Object.create(null)
H.qg()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.n1.$1(o)
if(n!=null){m=H.qo(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qg:function(){var s,r,q,p,o,n,m=C.I()
m=H.cs(C.J,H.cs(C.K,H.cs(C.u,H.cs(C.u,H.cs(C.L,H.cs(C.M,H.cs(C.N(C.t),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.mW=new H.kF(p)
$.mP=new H.kG(o)
$.n1=new H.kH(n)},
cs:function(a,b){return a(b)||b},
nW:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.a6("Illegal RegExp pattern ("+String(n)+")",a,null))},
n3:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qa:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n2:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lD:function(a,b,c){var s=H.qs(a,b,c)
return s},
qs:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n2(b),'g'),H.qa(c))},
cD:function cD(){},
cE:function cE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jp:function jp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
da:function da(a,b){this.a=a
this.b=b},
ez:function ez(a,b,c){this.a=a
this.b=b
this.c=c},
fz:function fz(a){this.a=a},
iY:function iY(a){this.a=a},
hm:function hm(a){this.a=a
this.b=null},
bw:function bw(){},
fh:function fh(){},
fa:function fa(){},
bS:function bS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f3:function f3(a){this.a=a},
X:function X(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iu:function iu(a){this.a=a},
ix:function ix(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cT:function cT(a,b){this.a=a
this.$ti=b},
eD:function eD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
ey:function ey(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cq:function(a){var s,r,q,p,o
if(t.aP.b(a))return a
s=J.bM(a)
r=s.gl(a)
q=P.cX(r,null,!1,t.A)
for(p=0;p<s.gl(a);++p){o=s.h(a,p)
if(p>=r)return H.d(q,p)
q[p]=o}return q},
b0:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cu(b,a))},
pe:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.q9(a,b,c))
return b},
d5:function d5(){},
a0:function a0(){},
c4:function c4(){},
bD:function bD(){},
d6:function d6(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
d7:function d7(){},
bE:function bE(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
m6:function(a,b){var s=b.c
return s==null?b.c=H.ll(a,b.z,!0):s},
m5:function(a,b){var s=b.c
return s==null?b.c=H.dW(a,"lT",[b.z]):s},
m7:function(a){var s=a.y
if(s===6||s===7||s===8)return H.m7(a.z)
return s===11||s===12},
oh:function(a){return a.cy},
lx:function(a){return H.lm(v.typeUniverse,a,!1)},
bn:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bn(a,s,a0,a1)
if(r===s)return b
return H.my(a,r,!0)
case 7:s=b.z
r=H.bn(a,s,a0,a1)
if(r===s)return b
return H.ll(a,r,!0)
case 8:s=b.z
r=H.bn(a,s,a0,a1)
if(r===s)return b
return H.mx(a,r,!0)
case 9:q=b.Q
p=H.e4(a,q,a0,a1)
if(p===q)return b
return H.dW(a,b.z,p)
case 10:o=b.z
n=H.bn(a,o,a0,a1)
m=b.Q
l=H.e4(a,m,a0,a1)
if(n===o&&l===m)return b
return H.lj(a,n,l)
case 11:k=b.z
j=H.bn(a,k,a0,a1)
i=b.Q
h=H.pY(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mw(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.e4(a,g,a0,a1)
o=b.z
n=H.bn(a,o,a0,a1)
if(f===g&&n===o)return b
return H.lk(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.hS("Attempted to substitute unexpected RTI kind "+c))}},
e4:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bn(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
pZ:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bn(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
pY:function(a,b,c,d){var s,r=b.a,q=H.e4(a,r,c,d),p=b.b,o=H.e4(a,p,c,d),n=b.c,m=H.pZ(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fZ()
s.a=q
s.b=o
s.c=m
return s},
b:function(a,b){a[v.arrayRti]=b
return a},
q5:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.mX(s)
return a.$S()}return null},
mZ:function(a,b){var s
if(H.m7(b))if(a instanceof H.bw){s=H.q5(a)
if(s!=null)return s}return H.b1(a)},
b1:function(a){var s
if(a instanceof P.P){s=a.$ti
return s!=null?s:H.lr(a)}if(Array.isArray(a))return H.kj(a)
return H.lr(J.e6(a))},
kj:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
V:function(a){var s=a.$ti
return s!=null?s:H.lr(a)},
lr:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pm(a,s)},
pm:function(a,b){var s=a instanceof H.bw?a.__proto__.__proto__.constructor:b,r=H.oX(v.typeUniverse,s.name)
b.$ccache=r
return r},
mX:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lm(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pl:function(a){var s,r,q,p=this
if(p===t.K)return H.e1(p,a,H.pq)
if(!H.b2(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.e1(p,a,H.pt)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.ks
else if(r===t.gR||r===t.H)q=H.pp
else if(r===t.N)q=H.pr
else q=r===t.cJ?H.kr:null
if(q!=null)return H.e1(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.qk)){p.r="$i"+s
return H.e1(p,a,H.ps)}}else if(s===7)return H.e1(p,a,H.pj)
return H.e1(p,a,H.ph)},
e1:function(a,b,c){a.b=c
return a.b(b)},
pk:function(a){var s,r=this,q=H.pg
if(!H.b2(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.pd
else if(r===t.K)q=H.pc
else{s=H.e7(r)
if(s)q=H.pi}r.a=q
return r.a(a)},
lu:function(a){var s,r=a.y
if(!H.b2(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&H.lu(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
ph:function(a){var s=this
if(a==null)return H.lu(s)
return H.R(v.typeUniverse,H.mZ(a,s),null,s,null)},
pj:function(a){if(a==null)return!0
return this.z.b(a)},
ps:function(a){var s,r=this
if(a==null)return H.lu(r)
s=r.r
if(a instanceof P.P)return!!a[s]
return!!J.e6(a)[s]},
pg:function(a){var s,r=this
if(a==null){s=H.e7(r)
if(s)return a}else if(r.b(a))return a
H.mJ(a,r)},
pi:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mJ(a,s)},
mJ:function(a,b){throw H.c(H.oN(H.mp(a,H.mZ(a,b),H.ar(b,null))))},
mp:function(a,b,c){var s=P.ig(a),r=H.ar(b==null?H.b1(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
oN:function(a){return new H.dU("TypeError: "+a)},
a9:function(a,b){return new H.dU("TypeError: "+H.mp(a,null,b))},
pq:function(a){return a!=null},
pc:function(a){if(a!=null)return a
throw H.c(H.a9(a,"Object"))},
pt:function(a){return!0},
pd:function(a){return a},
kr:function(a){return!0===a||!1===a},
mH:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.a9(a,"bool"))},
rq:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a9(a,"bool"))},
rp:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a9(a,"bool?"))},
rr:function(a){if(typeof a=="number")return a
throw H.c(H.a9(a,"double"))},
rt:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a9(a,"double"))},
rs:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a9(a,"double?"))},
ks:function(a){return typeof a=="number"&&Math.floor(a)===a},
kk:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.a9(a,"int"))},
rv:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a9(a,"int"))},
ru:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a9(a,"int?"))},
pp:function(a){return typeof a=="number"},
rw:function(a){if(typeof a=="number")return a
throw H.c(H.a9(a,"num"))},
ry:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a9(a,"num"))},
rx:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a9(a,"num?"))},
pr:function(a){return typeof a=="string"},
kl:function(a){if(typeof a=="string")return a
throw H.c(H.a9(a,"String"))},
rA:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a9(a,"String"))},
rz:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a9(a,"String?"))},
pU:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.ar(a[q],b)
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
m=C.a.V(m,a5[j])
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
if(l===9){p=H.q_(a.z)
o=a.Q
return o.length!==0?p+("<"+H.pU(o,b)+">"):p}if(l===11)return H.mK(a,b,null)
if(l===12)return H.mK(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
q_:function(a){var s,r=H.n5(a)
if(r!=null)return r
s="minified:"+a
return s},
mz:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
oX:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lm(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dX(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dW(a,b,q)
n[b]=o
return o}else return m},
oV:function(a,b){return H.mG(a.tR,b)},
oU:function(a,b){return H.mG(a.eT,b)},
lm:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mu(H.ms(a,null,b,c))
r.set(b,s)
return s},
hA:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mu(H.ms(a,b,c,!0))
q.set(c,r)
return r},
oW:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.lj(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bm:function(a,b){b.a=H.pk
b.b=H.pl
return b},
dX:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.az(null,null)
s.y=b
s.cy=c
r=H.bm(a,s)
a.eC.set(c,r)
return r},
my:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.oS(a,b,r,c)
a.eC.set(r,s)
return s},
oS:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b2(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.az(null,null)
q.y=6
q.z=b
q.cy=c
return H.bm(a,q)},
ll:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.oR(a,b,r,c)
a.eC.set(r,s)
return s},
oR:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b2(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.e7(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.e7(q.z))return q
else return H.m6(a,b)}}p=new H.az(null,null)
p.y=7
p.z=b
p.cy=c
return H.bm(a,p)},
mx:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.oP(a,b,r,c)
a.eC.set(r,s)
return s},
oP:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b2(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dW(a,"lT",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.az(null,null)
q.y=8
q.z=b
q.cy=c
return H.bm(a,q)},
oT:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.az(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bm(a,s)
a.eC.set(q,r)
return r},
hz:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
oO:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dW:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hz(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.az(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bm(a,r)
a.eC.set(p,q)
return q},
lj:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hz(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.az(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bm(a,o)
a.eC.set(q,n)
return n},
mw:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hz(m)
if(j>0){s=l>0?",":""
r=H.hz(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.oO(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.az(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bm(a,o)
a.eC.set(q,r)
return r},
lk:function(a,b,c,d){var s,r=b.cy+("<"+H.hz(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.oQ(a,b,c,r,d)
a.eC.set(r,s)
return s},
oQ:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bn(a,b,r,0)
m=H.e4(a,c,r,0)
return H.lk(a,n,m,c!==m)}}l=new H.az(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bm(a,l)},
ms:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mu:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.oH(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mt(a,r,h,g,!1)
else if(q===46)r=H.mt(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.bl(a.u,a.e,g.pop()))
break
case 94:g.push(H.oT(a.u,g.pop()))
break
case 35:g.push(H.dX(a.u,5,"#"))
break
case 64:g.push(H.dX(a.u,2,"@"))
break
case 126:g.push(H.dX(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.li(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.dW(p,n,o))
else{m=H.bl(p,a.e,n)
switch(m.y){case 11:g.push(H.lk(p,m,o,a.n))
break
default:g.push(H.lj(p,m,o))
break}}break
case 38:H.oI(a,g)
break
case 42:p=a.u
g.push(H.my(p,H.bl(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.ll(p,H.bl(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.mx(p,H.bl(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.fZ()
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
H.li(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.mw(p,H.bl(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.li(a.u,a.e,o)
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
return H.bl(a.u,a.e,i)},
oH:function(a,b,c,d){var s,r,q=b-48
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
if(n==null)H.h('No "'+p+'" in "'+H.oh(o)+'"')
d.push(H.hA(s,o,n))}else d.push(p)
return m},
oI:function(a,b){var s=b.pop()
if(0===s){b.push(H.dX(a.u,1,"0&"))
return}if(1===s){b.push(H.dX(a.u,4,"1&"))
return}throw H.c(P.hS("Unexpected extended operation "+H.x(s)))},
bl:function(a,b,c){if(typeof c=="string")return H.dW(a,c,a.sEA)
else if(typeof c=="number")return H.oJ(a,b,c)
else return c},
li:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bl(a,b,c[s])},
oK:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bl(a,b,c[s])},
oJ:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.hS("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.hS("Bad index "+c+" for "+b.i(0)))},
R:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.b2(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.b2(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.R(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.R(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.R(a,b.z,c,d,e)
if(r===6)return H.R(a,b.z,c,d,e)
return r!==7}if(r===6)return H.R(a,b.z,c,d,e)
if(p===6){s=H.m6(a,d)
return H.R(a,b,c,s,e)}if(r===8){if(!H.R(a,b.z,c,d,e))return!1
return H.R(a,H.m5(a,b),c,d,e)}if(r===7){s=H.R(a,t.P,c,d,e)
return s&&H.R(a,b.z,c,d,e)}if(p===8){if(H.R(a,b,c,d.z,e))return!0
return H.R(a,b,c,H.m5(a,d),e)}if(p===7){s=H.R(a,b,c,t.P,e)
return s||H.R(a,b,c,d.z,e)}if(q)return!1
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
if(!H.R(a,k,c,j,e)||!H.R(a,j,e,k,c))return!1}return H.mL(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.mL(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.po(a,b,c,d,e)}return!1},
mL:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.R(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.R(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.R(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.R(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.R(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
po:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.R(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mz(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.R(a,H.hA(a,b,l[p]),c,r[p],e))return!1
return!0},
e7:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b2(a))if(r!==7)if(!(r===6&&H.e7(a.z)))s=r===8&&H.e7(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qk:function(a){var s
if(!H.b2(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
b2:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
mG:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
az:function az(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fZ:function fZ(){this.c=this.b=this.a=null},
fV:function fV(){},
dU:function dU(a){this.a=a},
n5:function(a){return v.mangledGlobalNames[a]},
qp:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lA:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kD:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.lz==null){H.qh()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.jt("Return interceptor for "+H.x(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.jW
if(o==null)o=$.jW=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.qm(a)
if(p!=null)return p
if(typeof a=="function")return C.V
s=Object.getPrototypeOf(a)
if(s==null)return C.B
if(s===Object.prototype)return C.B
if(typeof q=="function"){o=$.jW
if(o==null)o=$.jW=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
nT:function(a,b){if(a<0||a>4294967295)throw H.c(P.a7(a,0,4294967295,"length",null))
return J.nU(new Array(a),b)},
l4:function(a,b){if(a<0)throw H.c(P.bQ("Length must be a non-negative integer: "+a))
return H.b(new Array(a),b.J("w<0>"))},
nU:function(a,b){return J.l5(H.b(a,b.J("w<0>")))},
l5:function(a){a.fixed$length=Array
return a},
nV:function(a,b){return J.nv(a,b)},
e6:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cP.prototype
return J.ex.prototype}if(typeof a=="string")return J.ba.prototype
if(a==null)return J.cQ.prototype
if(typeof a=="boolean")return J.ew.prototype
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.P)return a
return J.kD(a)},
bM:function(a){if(typeof a=="string")return J.ba.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.P)return a
return J.kD(a)},
hN:function(a){if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.P)return a
return J.kD(a)},
mV:function(a){if(typeof a=="number")return J.c1.prototype
if(typeof a=="string")return J.ba.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bI.prototype
return a},
qc:function(a){if(typeof a=="string")return J.ba.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bI.prototype
return a},
aL:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.P)return a
return J.kD(a)},
M:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.e6(a).q(a,b)},
lG:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mV(a).M(a,b)},
lH:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n_(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bM(a).h(a,b)},
kX:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.n_(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.hN(a).m(a,b,c)},
nt:function(a,b,c){return J.aL(a).fW(a,b,c)},
nu:function(a,b,c,d){return J.aL(a).hg(a,b,c,d)},
nv:function(a,b){return J.mV(a).ad(a,b)},
hQ:function(a,b){return J.hN(a).I(a,b)},
ea:function(a,b){return J.hN(a).E(a,b)},
nw:function(a){return J.aL(a).gac(a)},
nx:function(a){return J.aL(a).gbq(a)},
ny:function(a){return J.aL(a).gdn(a)},
kY:function(a){return J.e6(a).gF(a)},
aD:function(a){return J.hN(a).gP(a)},
aM:function(a){return J.bM(a).gl(a)},
lI:function(a){return J.hN(a).i6(a)},
nz:function(a,b){return J.aL(a).ia(a,b)},
nA:function(a){return J.qc(a).il(a)},
cx:function(a){return J.e6(a).i(a)},
a:function a(){},
ew:function ew(){},
cQ:function cQ(){},
bb:function bb(){},
eV:function eV(){},
bI:function bI(){},
aR:function aR(){},
w:function w(a){this.$ti=a},
it:function it(a){this.$ti=a},
ak:function ak(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c1:function c1(){},
cP:function cP(){},
ex:function ex(){},
ba:function ba(){}},P={
oy:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.q1()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.ct(new P.jS(q),1)).observe(s,{childList:true})
return new P.jR(q,s,r)}else if(self.setImmediate!=null)return P.q2()
return P.q3()},
oz:function(a){self.scheduleImmediate(H.ct(new P.jT(a),0))},
oA:function(a){self.setImmediate(H.ct(new P.jU(a),0))},
oB:function(a){P.lc(C.m,a)},
lc:function(a,b){var s=C.c.a2(a.a,1000)
return P.oL(s<0?0:s,b)},
mb:function(a,b){var s=C.c.a2(a.a,1000)
return P.oM(s<0?0:s,b)},
oL:function(a,b){var s=new P.dT()
s.ew(a,b)
return s},
oM:function(a,b){var s=new P.dT()
s.ex(a,b)
return s},
rn:function(a){return new P.co(a,1)},
oE:function(){return C.a5},
oF:function(a){return new P.co(a,3)},
pv:function(a,b){return new P.dQ(a,b.J("dQ<0>"))},
pR:function(){var s,r
for(s=$.cr;s!=null;s=$.cr){$.e3=null
r=s.b
$.cr=r
if(r==null)$.e2=null
s.a.$0()}},
pX:function(){$.ls=!0
try{P.pR()}finally{$.e3=null
$.ls=!1
if($.cr!=null)$.lF().$1(P.mQ())}},
pV:function(a){var s=new P.fI(a),r=$.e2
if(r==null){$.cr=$.e2=s
if(!$.ls)$.lF().$1(P.mQ())}else $.e2=r.b=s},
pW:function(a){var s,r,q,p=$.cr
if(p==null){P.pV(a)
$.e3=$.e2
return}s=new P.fI(a)
r=$.e3
if(r==null){s.b=p
$.cr=$.e3=s}else{q=r.b
s.b=q
$.e3=r.b=s
if(q==null)$.e2=s}},
ma:function(a,b){var s=$.aK
if(s===C.f)return P.lc(a,b)
return P.lc(a,s.hn(b))},
oq:function(a,b){var s=$.aK
if(s===C.f)return P.mb(a,b)
return P.mb(a,s.dj(b,t.aF))},
mM:function(a,b,c,d,e){P.pW(new P.kv(d,e))},
pS:function(a,b,c,d){var s,r=$.aK
if(r===c)return d.$0()
$.aK=c
s=r
try{r=d.$0()
return r}finally{$.aK=s}},
pT:function(a,b,c,d,e){var s,r=$.aK
if(r===c)return d.$1(e)
$.aK=c
s=r
try{r=d.$1(e)
return r}finally{$.aK=s}},
jS:function jS(a){this.a=a},
jR:function jR(a,b,c){this.a=a
this.b=b
this.c=c},
jT:function jT(a){this.a=a},
jU:function jU(a){this.a=a},
dT:function dT(){this.c=0},
ka:function ka(a,b){this.a=a
this.b=b},
k9:function k9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
co:function co(a,b){this.a=a
this.b=b},
bK:function bK(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dQ:function dQ(a,b){this.a=a
this.$ti=b},
fI:function fI(a){this.a=a
this.b=null},
ca:function ca(){},
fc:function fc(){},
kh:function kh(){},
kv:function kv(a,b){this.a=a
this.b=b},
jZ:function jZ(){},
k_:function k_(a,b){this.a=a
this.b=b},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
nX:function(a,b){return new H.X(a.J("@<0>").b4(b).J("X<1,2>"))},
nY:function(a,b,c){return H.qb(a,new H.X(b.J("@<0>").b4(c).J("X<1,2>")))},
S:function(a,b){return new H.X(a.J("@<0>").b4(b).J("X<1,2>"))},
cU:function(a){return new P.dE(a.J("dE<0>"))},
lh:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oG:function(a,b){var s=new P.dF(a,b)
s.c=a.e
return s},
nR:function(a,b,c){var s,r
if(P.lt(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.b([],t.s)
$.ai.push(a)
try{P.pu(a,s)}finally{if(0>=$.ai.length)return H.d($.ai,-1)
$.ai.pop()}r=P.m8(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
l3:function(a,b,c){var s,r
if(P.lt(a))return b+"..."+c
s=new P.a_(b)
$.ai.push(a)
try{r=s
r.a=P.m8(r.a,a,", ")}finally{if(0>=$.ai.length)return H.d($.ai,-1)
$.ai.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lt:function(a){var s,r
for(s=$.ai.length,r=0;r<s;++r)if(a===$.ai[r])return!0
return!1},
pu:function(a,b){var s,r,q,p,o,n,m,l=a.gP(a),k=0,j=0
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
nZ:function(a,b,c){var s=P.nX(b,c)
a.E(0,new P.iy(s,b,c))
return s},
lV:function(a,b){var s,r,q=P.cU(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)q.n(0,b.a(a[r]))
return q},
l9:function(a){var s,r={}
if(P.lt(a))return"{...}"
s=new P.a_("")
try{$.ai.push(a)
s.a+="{"
r.a=!0
J.ea(a,new P.iC(r,s))
s.a+="}"}finally{if(0>=$.ai.length)return H.d($.ai,-1)
$.ai.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dE:function dE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jY:function jY(a){this.a=a
this.c=this.b=null},
dF:function dF(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cO:function cO(){},
iy:function iy(a,b,c){this.a=a
this.b=b
this.c=c},
cV:function cV(){},
k:function k(){},
cZ:function cZ(){},
iC:function iC(a,b){this.a=a
this.b=b},
L:function L(){},
hB:function hB(){},
d_:function d_(){},
ch:function ch(a,b){this.a=a
this.$ti=b},
de:function de(){},
dM:function dM(){},
dG:function dG(){},
dY:function dY(){},
e_:function e_(){},
ot:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.ou(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
ou:function(a,b,c,d){var s=a?$.nl():$.nk()
if(s==null)return null
if(0===c&&d===b.length)return P.mi(s,b)
return P.mi(s,b.subarray(c,P.bh(c,d,b.length)))},
mi:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.aj(r)}return null},
lK:function(a,b,c,d,e,f){if(C.c.bk(f,4)!==0)throw H.c(P.a6("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a6("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a6("Invalid base64 padding, more than two '=' characters",a,b))},
pb:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
pa:function(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.bM(a),r=0;r<p;++r){q=s.h(a,b+r)
o[r]=(q&4294967040)>>>0!==0?255:q}return o},
jD:function jD(){},
jC:function jC(){},
hW:function hW(){},
hX:function hX(){},
eh:function eh(){},
ej:function ej(){},
ic:function ic(){},
ir:function ir(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
iq:function iq(a){this.a=a},
jA:function jA(){},
jE:function jE(){},
kf:function kf(a){this.b=0
this.c=a},
jB:function jB(a){this.a=a},
ke:function ke(a){this.a=a
this.b=16
this.c=0},
kI:function(a,b){var s=H.m_(a,b)
if(s!=null)return s
throw H.c(P.a6(a,null,null))},
nO:function(a){if(a instanceof H.bw)return a.i(0)
return"Instance of '"+H.dc(a)+"'"},
cX:function(a,b,c,d){var s,r=c?J.l4(a,d):J.nT(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
iz:function(a,b,c){var s,r=H.b([],c.J("w<0>"))
for(s=J.aD(a);s.u();)r.push(s.gB(s))
if(b)return r
return J.l5(r)},
o_:function(a,b,c){var s,r,q=J.l4(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
fe:function(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=P.bh(b,c,r)
return H.m0(b>0||c<r?s.slice(b,c):s)}if(t.bm.b(a))return H.oe(a,b,P.bh(b,c,a.length))
return P.on(a,b,c)},
on:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.a7(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.a7(c,b,a.length,o,o))
r=J.aD(a)
for(q=0;q<b;++q)if(!r.u())throw H.c(P.a7(b,0,q,o,o))
p=[]
if(s)for(;r.u();)p.push(r.gB(r))
else for(q=b;q<c;++q){if(!r.u())throw H.c(P.a7(c,b,q,o,o))
p.push(r.gB(r))}return H.m0(p)},
of:function(a){return new H.ey(a,H.nW(a,!1,!0,!1,!1,!1))},
m8:function(a,b,c){var s=J.aD(b)
if(!s.u())return a
if(c.length===0){do a+=H.x(s.gB(s))
while(s.u())}else{a+=H.x(s.gB(s))
for(;s.u();)a=a+c+H.x(s.gB(s))}return a},
me:function(){var s=H.o5()
if(s!=null)return P.os(s)
throw H.c(P.B("'Uri.base' is not supported"))},
kd:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.nr().b
s=s.test(b)}else s=!1
if(s)return b
r=c.ghD().c9(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.ay(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
nL:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
nM:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
em:function(a){if(a>=10)return""+a
return"0"+a},
lP:function(a){return new P.bx(1000*a)},
ig:function(a){if(typeof a=="number"||H.kr(a)||null==a)return J.cx(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nO(a)},
hS:function(a){return new P.ed(a)},
bQ:function(a){return new P.aE(!1,null,null,a)},
f0:function(a,b){return new P.dd(null,null,!0,a,b,"Value not in range")},
a7:function(a,b,c,d,e){return new P.dd(b,c,!0,a,d,"Invalid value")},
bh:function(a,b,c){if(0>a||a>c)throw H.c(P.a7(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.a7(b,a,c,"end",null))
return b}return c},
m1:function(a,b){if(a<0)throw H.c(P.a7(a,0,null,b,null))
return a},
O:function(a,b,c,d,e){var s=e==null?J.aM(b):e
return new P.eu(s,!0,a,c,"Index out of range")},
B:function(a){return new P.fB(a)},
jt:function(a){return new P.fy(a)},
lb:function(a){return new P.c9(a)},
aI:function(a){return new P.ei(a)},
f:function(a){return new P.fW(a)},
a6:function(a,b,c){return new P.im(a,b,c)},
lC:function(a){H.qp(a)},
os:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.D(a5,4)^58)*3|C.a.D(a5,0)^100|C.a.D(a5,1)^97|C.a.D(a5,2)^116|C.a.D(a5,3)^97)>>>0
if(s===0)return P.md(a4<a4?C.a.t(a5,0,a4):a5,5,a3).ge8()
else if(s===32)return P.md(C.a.t(a5,5,a4),0,a3).ge8()}r=P.cX(8,0,!1,t.S)
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
k=!1}else{if(!(m<a4&&m===n+2&&C.a.a6(a5,"..",n)))h=m>n+2&&C.a.a6(a5,"/..",m-3)
else h=!0
if(h){j=a3
k=!1}else{if(q===4)if(C.a.a6(a5,"file",0)){if(p<=0){if(!C.a.a6(a5,"/",n)){g="file:///"
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
a5=C.a.b_(a5,n,m,"/");++a4
m=f}j="file"}else if(C.a.a6(a5,"http",0)){if(i&&o+3===n&&C.a.a6(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=C.a.b_(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&C.a.a6(a5,"https",0)){if(i&&o+4===n&&C.a.a6(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=C.a.b_(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}else j=a3
if(k){if(a4<a5.length){a5=C.a.t(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new P.hg(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=P.p4(a5,0,q)
else{if(q===0)P.cp(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?P.p5(a5,d,p-1):""
b=P.p1(a5,p,o,!1)
i=o+1
if(i<n){a=H.m_(C.a.t(a5,i,n),a3)
a0=P.p3(a==null?H.h(P.a6("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.p2(a5,n,m,a3,j,b!=null)
a2=m<l?P.lo(a5,m+1,l,a3):a3
return new P.bL(j,c,b,a0,a1,a2,l<a4?P.p0(a5,l+1,a4):a3)},
mg:function(a){var s=t.N
return C.b.hJ(H.b(a.split("&"),t.s),P.S(s,s),new P.jy(C.e))},
or:function(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jv(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=C.a.U(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=P.kI(C.a.t(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(q>=4)return H.d(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=P.kI(C.a.t(a,r,c),null)
if(o>255)k.$2(l,r)
if(q>=4)return H.d(j,q)
j[q]=o
return j},
mf:function(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.jw(a),c=new P.jx(d,a)
if(a.length<2)d.$1("address is too short")
s=H.b([],t.t)
for(r=b,q=r,p=!1,o=!1;r<a0;++r){n=C.a.U(a,r)
if(n===58){if(r===b){++r
if(C.a.U(a,r)!==58)d.$2("invalid start colon.",r)
q=r}if(r===q){if(p)d.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(c.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)d.$1("too few parts")
m=q===a0
l=C.b.gaw(s)
if(m&&l!==-1)d.$2("expected a part after last `:`",a0)
if(!m)if(!o)s.push(c.$2(q,a0))
else{k=P.or(a,q,a0)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)d.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)d.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){if(h<0||h>=16)return H.d(j,h)
j[h]=0
e=h+1
if(e>=16)return H.d(j,e)
j[e]=0
h+=2}else{e=C.c.aU(g,8)
if(h<0||h>=16)return H.d(j,h)
j[h]=e
e=h+1
if(e>=16)return H.d(j,e)
j[e]=g&255
h+=2}}return j},
mA:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cp:function(a,b,c){throw H.c(P.a6(c,a,b))},
p3:function(a,b){if(a!=null&&a===P.mA(b))return null
return a},
p1:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.U(a,b)===91){s=c-1
if(C.a.U(a,s)!==93)P.cp(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.oZ(a,r,s)
if(q<s){p=q+1
o=P.mF(a,C.a.a6(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mf(a,r,q)
return C.a.t(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.U(a,n)===58){q=C.a.bu(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mF(a,C.a.a6(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mf(a,b,q)
return"["+C.a.t(a,b,q)+o+"]"}return P.p7(a,b,c)},
oZ:function(a,b,c){var s=C.a.bu(a,"%",b)
return s>=b&&s<c?s:c},
mF:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.a_(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.U(a,s)
if(p===37){o=P.lp(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.a_("")
m=i.a+=C.a.t(a,r,s)
if(n)o=C.a.t(a,s,s+3)
else if(o==="%")P.cp(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.a_("")
if(r<s){i.a+=C.a.t(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.U(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=C.a.t(a,r,s)
if(i==null){i=new P.a_("")
n=i}else n=i
n.a+=j
n.a+=P.ln(p)
s+=k
r=s}}}if(i==null)return C.a.t(a,b,c)
if(r<c)i.a+=C.a.t(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
p7:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.U(a,s)
if(o===37){n=P.lp(a,s,!0)
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
if(m)P.cp(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.U(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=C.a.t(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.a_("")
m=q}else m=q
m.a+=l
m.a+=P.ln(o)
s+=j
r=s}}}}if(q==null)return C.a.t(a,b,c)
if(r<c){l=C.a.t(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
p4:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.mC(C.a.D(a,b)))P.cp(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.D(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.d(C.l,p)
p=(C.l[p]&1<<(q&15))!==0}else p=!1
if(!p)P.cp(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.t(a,b,c)
return P.oY(r?a.toLowerCase():a)},
oY:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
p5:function(a,b,c){return P.dZ(a,b,c,C.Y,!1)},
p2:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dZ(a,b,c,C.y,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.Z(s,"/"))s="/"+s
return P.p6(s,e,f)},
p6:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.Z(a,"/"))return P.p8(a,!s||c)
return P.p9(a)},
lo:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.bQ("Both query and queryParameters specified"))
return P.dZ(a,b,c,C.k,!0)}if(d==null)return null
s=new P.a_("")
r.a=""
d.E(0,new P.kb(new P.kc(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
p0:function(a,b,c){return P.dZ(a,b,c,C.k,!0)},
lp:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.U(a,b+1)
r=C.a.U(a,n)
q=H.kE(s)
p=H.kE(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aU(o,4)
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.ay(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.t(a,b,b+3).toUpperCase()
return null},
ln:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=C.a.D(k,a>>>4)
s[2]=C.a.D(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=C.c.h6(a,6*q)&63|r
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
o+=3}}return P.fe(s,0,null)},
dZ:function(a,b,c,d,e){var s=P.mE(a,b,c,d,e)
return s==null?C.a.t(a,b,c):s},
mE:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.U(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.d(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lp(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.d(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.cp(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.U(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=P.ln(o)}}if(p==null){p=new P.a_("")
n=p}else n=p
n.a+=C.a.t(a,q,r)
n.a+=H.x(m)
if(typeof l!=="number")return H.mY(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.t(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mD:function(a){if(C.a.Z(a,"."))return!0
return C.a.dI(a,"/.")!==-1},
p9:function(a){var s,r,q,p,o,n,m
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
p8:function(a,b){var s,r,q,p,o,n
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
if(r===58)return C.a.t(a,0,s)+"%3A"+C.a.a7(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.d(C.l,q)
q=(C.l[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
p_:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.D(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.bQ("Invalid URL encoding"))}}return s},
lq:function(a,b,c,d,e){var s,r,q,p,o=b
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
p.push(P.p_(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a4.c9(p)},
mC:function(a){var s=a|32
return 97<=s&&s<=122},
md:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.b([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.D(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.a6(k,a,r))}}if(q<0&&r>b)throw H.c(P.a6(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.D(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaw(j)
if(p!==44||r!==n+7||!C.a.a6(a,"base64",n+1))throw H.c(P.a6("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.H.hS(0,a,m,s)
else{l=P.mE(a,m,s,C.k,!0)
if(l!=null)a=C.a.b_(a,m,s,l)}return new P.ju(a,j,c)},
pf:function(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="?",i="#",h=H.b(new Array(22),t.gN)
for(s=0;s<22;++s)h[s]=new Uint8Array(96)
r=new P.ko(h)
q=new P.kp()
p=new P.kq()
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
Y:function Y(a,b){this.a=a
this.b=b},
bx:function bx(a){this.a=a},
i8:function i8(){},
i9:function i9(){},
K:function K(){},
ed:function ed(a){this.a=a},
fr:function fr(){},
eQ:function eQ(){},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dd:function dd(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eu:function eu(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fB:function fB(a){this.a=a},
fy:function fy(a){this.a=a},
c9:function c9(a){this.a=a},
ei:function ei(a){this.a=a},
eT:function eT(){},
di:function di(){},
ek:function ek(a){this.a=a},
fW:function fW(a){this.a=a},
im:function im(a,b,c){this.a=a
this.b=b
this.c=c},
j:function j(){},
ev:function ev(){},
af:function af(){},
P:function P(){},
a_:function a_(a){this.a=a},
jy:function jy(a){this.a=a},
jv:function jv(a){this.a=a},
jw:function jw(a){this.a=a},
jx:function jx(a,b){this.a=a
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
kc:function kc(a,b){this.a=a
this.b=b},
kb:function kb(a){this.a=a},
ju:function ju(a,b,c){this.a=a
this.b=b
this.c=c},
ko:function ko(a){this.a=a},
kp:function kp(){},
kq:function kq(){},
hg:function hg(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fO:function fO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
q7:function(a){var s,r,q,p
if(t.x.b(a)){s=J.ny(a)
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
return new P.dV(r,q,p)},
q6:function(a){if(a instanceof P.dV)return{data:a.a,height:a.b,width:a.c}
return a},
bo:function(a){var s,r,q,p,o
if(a==null)return null
s=P.S(t.N,t.A)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
mI:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.kr(a))return a
if(t.f.b(a))return P.mR(a)
if(t.r.b(a)){s=[]
J.ea(a,new P.km(s))
a=s}return a},
mR:function(a){var s={}
J.ea(a,new P.kw(s))
return s},
k4:function k4(){},
k6:function k6(a,b){this.a=a
this.b=b},
k7:function k7(a,b){this.a=a
this.b=b},
dV:function dV(a,b,c){this.a=a
this.b=b
this.c=c},
km:function km(a){this.a=a},
kw:function kw(a){this.a=a},
k5:function k5(a,b){this.a=a
this.b=b},
eq:function eq(a,b){this.a=a
this.b=b},
ik:function ik(){},
il:function il(){},
he:function he(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aS:function aS(){},
eB:function eB(){},
aV:function aV(){},
eR:function eR(){},
iZ:function iZ(){},
c8:function c8(){},
fd:function fd(){},
o:function o(){},
aX:function aX(){},
fq:function fq(){},
h2:function h2(){},
h3:function h3(){},
ha:function ha(){},
hb:function hb(){},
ho:function ho(){},
hp:function hp(){},
hx:function hx(){},
hy:function hy(){},
hU:function hU(){},
ef:function ef(){},
hV:function hV(a){this.a=a},
eg:function eg(){},
b4:function b4(){},
eS:function eS(){},
fK:function fK(){},
c7:function c7(){},
f8:function f8(){},
hk:function hk(){},
hl:function hl(){}},W={
lJ:function(){var s=document.createElement("a")
s.toString
return s},
kZ:function(){var s=document.createElement("canvas")
s.toString
return s},
nN:function(a,b,c){var s=document.body
s.toString
s=new H.b_(new W.a5(C.p.ae(s,a,b,c)),new W.ia(),t.ac.J("b_<k.E>"))
return t.h.a(s.gaM(s))},
ib:function(a){return"wheel"},
cJ:function(a){var s,r,q="element tag unavailable"
try{s=J.aL(a)
s.ge5(a)
q=s.ge5(a)}catch(r){H.aj(r)}return q},
nQ:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.aj(s)}return q},
jX:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mr:function(a,b,c,d){var s=W.jX(W.jX(W.jX(W.jX(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
a4:function(a,b,c,d){var s=new W.dC(a,b,c==null?null:W.mO(new W.jV(c),t.aD),!1)
s.hd()
return s},
mq:function(a){var s=W.lJ(),r=window
s=new W.cn(new W.k1(s,r.location))
s.eq(a)
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
mv:function(){var s=t.N,r=P.lV(C.z,s),q=H.b(["TEMPLATE"],t.s)
s=new W.hs(r,P.cU(s),P.cU(s),P.cU(s),null)
s.eu(null,new H.d0(C.z,new W.k8(),t.dv),q,null)
return s},
mO:function(a,b){var s=$.aK
if(s===C.f)return a
return s.dj(a,b)},
v:function v(){},
hR:function hR(){},
eb:function eb(){},
ec:function ec(){},
bR:function bR(){},
bt:function bt(){},
bu:function bu(){},
bv:function bv(){},
cB:function cB(){},
aF:function aF(){},
i1:function i1(){},
I:function I(){},
cF:function cF(){},
i2:function i2(){},
as:function as(){},
aQ:function aQ(){},
i3:function i3(){},
i4:function i4(){},
i5:function i5(){},
b6:function b6(){},
i6:function i6(){},
cG:function cG(){},
cH:function cH(){},
en:function en(){},
i7:function i7(){},
fL:function fL(a,b){this.a=a
this.b=b},
C:function C(){},
ia:function ia(){},
m:function m(){},
e:function e(){},
ae:function ae(){},
bX:function bX(){},
ep:function ep(){},
er:function er(){},
au:function au(){},
ip:function ip(){},
bz:function bz(){},
bA:function bA(){},
bZ:function bZ(){},
c0:function c0(){},
bB:function bB(){},
iA:function iA(){},
iR:function iR(){},
c2:function c2(){},
eI:function eI(){},
iS:function iS(a){this.a=a},
eJ:function eJ(){},
iT:function iT(a){this.a=a},
aw:function aw(){},
eK:function eK(){},
am:function am(){},
a5:function a5(a){this.a=a},
t:function t(){},
d8:function d8(){},
ax:function ax(){},
eX:function eX(){},
f2:function f2(){},
j5:function j5(a){this.a=a},
f4:function f4(){},
an:function an(){},
f6:function f6(){},
aA:function aA(){},
f7:function f7(){},
aB:function aB(){},
fb:function fb(){},
jd:function jd(a){this.a=a},
ah:function ah(){},
bj:function bj(){},
dj:function dj(){},
ff:function ff(){},
fg:function fg(){},
cb:function cb(){},
ao:function ao(){},
ad:function ad(){},
fi:function fi(){},
fj:function fj(){},
jj:function jj(){},
ap:function ap(){},
bH:function bH(){},
fp:function fp(){},
jo:function jo(){},
aZ:function aZ(){},
jz:function jz(){},
fF:function fF(){},
bk:function bk(){},
cl:function cl(){},
cm:function cm(){},
fM:function fM(){},
dB:function dB(){},
h_:function h_(){},
dH:function dH(){},
hj:function hj(){},
hq:function hq(){},
fJ:function fJ(){},
fT:function fT(a){this.a=a},
l2:function l2(a,b){this.a=a
this.$ti=b},
dC:function dC(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jV:function jV(a){this.a=a},
lg:function lg(a){this.$ti=a},
cn:function cn(a){this.a=a},
N:function N(){},
d9:function d9(a){this.a=a},
iW:function iW(a){this.a=a},
iV:function iV(a,b,c){this.a=a
this.b=b
this.c=c},
dN:function dN(){},
k2:function k2(){},
k3:function k3(){},
hs:function hs(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
k8:function k8(){},
hr:function hr(){},
cL:function cL(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
k1:function k1(a,b){this.a=a
this.b=b},
hC:function hC(a){this.a=a
this.b=0},
kg:function kg(a){this.a=a},
fN:function fN(){},
fP:function fP(){},
fQ:function fQ(){},
fR:function fR(){},
fS:function fS(){},
fX:function fX(){},
fY:function fY(){},
h0:function h0(){},
h1:function h1(){},
h4:function h4(){},
h5:function h5(){},
h6:function h6(){},
h7:function h7(){},
h8:function h8(){},
h9:function h9(){},
hc:function hc(){},
hd:function hd(){},
hf:function hf(){},
dO:function dO(){},
dP:function dP(){},
hh:function hh(){},
hi:function hi(){},
hn:function hn(){},
ht:function ht(){},
hu:function hu(){},
dR:function dR(){},
dS:function dS(){},
hv:function hv(){},
hw:function hw(){},
hD:function hD(){},
hE:function hE(){},
hF:function hF(){},
hG:function hG(){},
hH:function hH(){},
hI:function hI(){},
hJ:function hJ(){},
hK:function hK(){},
hL:function hL(){},
hM:function hM(){}},K={
Q:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.f("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.D(a,0)
r=C.a.D(b,0)
if(s>r){q=r
r=s
s=q}return new K.f_(s,r)},
aN:function aN(){},
cN:function cN(){},
ac:function ac(a){this.a=a},
f_:function f_(a,b){this.a=a
this.b=b},
u:function u(a){this.a=a}},L={
jm:function(){var s=t.N
return new L.jl(P.S(s,t.dl),P.S(s,t.f7),P.cU(s))},
f9:function f9(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
fn:function fn(a,b,c){this.a=a
this.b=b
this.c=c},
fo:function fo(a,b){this.b=a
this.c=b},
jl:function jl(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dm:function dm(a,b){this.b=a
this.c=!1
this.a=b}},O={
l_:function(a){return new O.al(H.b([],a.J("w<0>")),a.J("al<0>"))},
al:function al(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
d4:function d4(a){this.a=a
this.b=null},
eH:function(a,b){return new O.d2(new V.W(0,0,0),a,b,new A.aH(!1,!1,!1))},
d1:function d1(a){var _=this
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
eG:function eG(){},
iE:function iE(a,b,c){this.a=a
this.b=b
this.c=c},
d2:function d2(a,b,c,d){var _=this
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
lS:function(){var s=O.l_(t.l),r=new E.by(s)
s.bl(r.ghT(),r.ghW())
r.saj(0,null)
r.sbe(null)
return r},
mn:function(){var s=window.navigator.vendor
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
mo:function(){var s=window.navigator.appVersion
s.toString
if(C.a.A(s,"Win"))return C.a0
if(C.a.A(s,"Mac"))return C.A
if(C.a.A(s,"Linux"))return C.a1
return C.a2},
og:function(a,b){var s
Date.now()
s=t.fA
s=new E.j1(a,new P.Y(Date.now(),!1),new P.Y(Date.now(),!1),new O.d4(H.b([],s)),new O.d4(H.b([],s)),new O.d4(H.b([],s)),H.b([null],t.bc),P.S(t.N,t.fg))
s.eo(a,b)
return s},
op:function(a,b,c,d,e){var s,r
if(t.gA.b(a))return E.m9(a,!0,!0,!0,!1)
s=W.kZ()
r=s.style
r.width="100%"
r.height="100%"
J.nx(a).n(0,s)
return E.m9(s,!0,!0,!0,!1)},
m9:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.A,l=t.gW.a(C.i.cC(a,"webgl2",P.nY(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.c(P.f("Failed to get the rendering context for WebGL."))
s=E.og(l,a)
m=H.kk(l.getParameter(3379))
H.kk(l.getParameter(34076))
r=H.b([],t.g9)
q=$.id
p=new X.fD(a,r,(q==null?$.id=new E.fU(E.mn(),E.mo()):q).a===C.q?0.16666666666666666:0.005555555555555556)
o=document
o.toString
r.push(W.a4(o,"contextmenu",p.gff(),!1))
r.push(W.a4(a,"focus",p.gfl(),!1))
r.push(W.a4(a,"blur",p.gf8(),!1))
r.push(W.a4(o,"keyup",p.gfp(),!1))
r.push(W.a4(o,"keydown",p.gfn(),!1))
r.push(W.a4(a,"mousedown",p.gfu(),!1))
r.push(W.a4(a,"mouseup",p.gfA(),!1))
r.push(W.a4(a,n,p.gfw(),!1))
W.ib(a)
W.ib(a)
r.push(W.a4(a,W.ib(a),p.gfC(),!1))
r.push(W.a4(o,n,p.gfh(),!1))
r.push(W.a4(o,"mouseup",p.gfj(),!1))
r.push(W.a4(o,"pointerlockchange",p.gfE(),!1))
r.push(W.a4(a,"touchstart",p.gfR(),!1))
r.push(W.a4(a,"touchend",p.gfN(),!1))
r.push(W.a4(a,"touchmove",p.gfP(),!1))
m=new E.fm(a,s,new T.jg(l,m),p,new P.Y(Date.now(),!1))
m.d_()
return m},
hY:function hY(){},
by:function by(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bT:function bT(a){this.b=a},
c5:function c5(a){this.b=a},
fU:function fU(a,b){this.a=a
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
fm:function fm(a,b,c,d,e){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.x=d
_.Q=null
_.cx=!1
_.cy=e
_.db=0},
ji:function ji(a){this.a=a}},Z={
lf:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cq(c)),35044)
a.bindBuffer(b,null)
return new Z.fG(b,s)},
aC:function(a){return new Z.bJ(a)},
fG:function fG(a,b){this.a=a
this.b=b},
bU:function bU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jQ:function jQ(a){this.a=a},
cz:function cz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c_:function c_(a,b,c){this.a=a
this.b=b
this.c=c},
bJ:function bJ(a){this.a=a}},D={
U:function(){return new D.bW()},
i_:function i_(){},
bW:function bW(){var _=this
_.c=_.b=_.a=null
_.d=0},
ih:function ih(a){this.a=a},
ii:function ii(a){this.a=a},
Z:function Z(){},
b8:function b8(){},
b9:function b9(){},
J:function J(a,b,c){this.c=a
this.d=b
this.e=c},
bV:function bV(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=null},
cS:function cS(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={cA:function cA(a,b){this.a=a
this.b=b},eA:function eA(a,b){this.a=a
this.b=b},iv:function iv(a){this.d=a},cY:function cY(a,b,c){this.x=a
this.c=b
this.d=c},iB:function iB(a,b,c,d){var _=this
_.a=a
_.f=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},bf:function bf(a,b,c){this.a=a
this.b=b
this.c=c},c3:function c3(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},iU:function iU(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},eZ:function eZ(){},dl:function dl(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},jn:function jn(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},fD:function fD(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
nP:function(a){var s=new V.aP(0,0,0,1),r=$.m4
if(r==null){r=V.m3(0,0,1,1)
$.m4=r}return new X.io(s,r)},
io:function io(a,b){this.a=a
this.r=b
this.x=null},
eU:function eU(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
jf:function jf(){}},V={
hO:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
qw:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bk(a-b,s)
return(a<0?a+s:a)+b},
E:function(a,b,c){$.G().toString
return C.a.ag(C.d.cA(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cv:function(a,b,c){var s,r,q,p,o,n,m,l=H.b([],t.s)
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.q)(a),++p){o=a[p]
$.G().toString
n=C.a.ag(C.d.cA(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.d(l,m)
s=C.a.ag(l[m],q)
r=l.length
if(m>=r)return H.d(l,m)
l[m]=s}return l},
lB:function(a){return C.d.ii(Math.pow(2,C.d.cm(Math.log(a)/Math.log(2))))},
bC:function(){var s=$.lY
return s==null?$.lY=V.be(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
be:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bd(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lX:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.be(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
o3:function(){var s=$.aW
return s==null?$.aW=new V.T(0,0,0):s},
m3:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f1(a,b,c,d)},
dz:function(){var s=$.ml
return s==null?$.ml=new V.D(0,0,0):s},
ox:function(){var s=$.jG
return s==null?$.jG=new V.D(-1,0,0):s},
mm:function(){var s=$.jH
return s==null?$.jH=new V.D(0,1,0):s},
le:function(){var s=$.jI
return s==null?$.jI=new V.D(0,0,1):s},
ov:function(a,b,c){return new V.D(a,b,c)},
ow:function(a){return new V.D(a.a,a.b,a.c)},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ie:function ie(){},
d3:function d3(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bd:function bd(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
bF:function bF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f1:function f1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aq:function aq(a,b){this.a=a
this.b=b},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
qq:function(a){P.oq(C.R,new V.kT(a))},
oi:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.a4(n,"scroll",new V.ja(s),!1)
return new V.j8(o)},
aG:function aG(){},
kT:function kT(a){this.a=a},
el:function el(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
es:function es(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
et:function et(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
eW:function eW(a,b){var _=this
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
lO:function(){return new U.i0()},
l0:function(a){var s=V.bC(),r=new U.cC(s)
if(!s.q(0,a))r.a=a
return r},
mh:function(a,b){var s,r,q=U.lO(),p=U.lO(),o=$.jF
if(o==null)o=$.jF=new V.aq(0,0)
o=new U.dy(q,p,new X.bf(!1,!1,!1),o,V.bC())
q.sea(0,!0)
q.sdP(6.283185307179586)
q.sdR(0)
q.sa3(0,0)
q.sdQ(100)
q.sa5(0)
q.sdm(0.5)
s=o.gbn()
q.gv().n(0,s)
p.sea(0,!0)
p.sdP(6.283185307179586)
p.sdR(0)
p.sa3(0,0)
p.sdQ(100)
p.sa5(0)
p.sdm(0.5)
p.gv().n(0,s)
q=new X.bf(a,!1,!1)
if(!o.d.q(0,q)){r=o.d
o.d=q
o.a_(new D.J("modifiers",r,q))}o.hm(b)
return o},
i0:function i0(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
cC:function cC(a){this.a=a
this.b=null},
bY:function bY(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
ab:function ab(){},
dy:function dy(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.cx=_.ch=_.r=_.f=!1
_.db=_.cy=0
_.dx=d
_.dy=0
_.fr=e
_.fx=null}},M={eo:function eo(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null},
qn:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="testCanvas",b=null,a=V.oi("Test 023"),a0=W.kZ()
a0.className="pageLargeCanvas"
a0.id=c
a.a.appendChild(a0).toString
s=t.s
a.dc(H.b(["Test of the Material Lighting shader with a textured directional ","light. Use Ctrl plus the mouse to move the light."],s))
a.hf(H.b(["shapes"],s))
a.dc(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(c)
if(r==null)H.h(P.f("Failed to find an element with the identifier, testCanvas."))
q=E.op(r,!0,!0,!0,!1)
p=q.x
o=U.mh(!1,p)
n=U.mh(!0,p)
p=new V.W(0.6,0.9,1)
m=q.f.hQ("../resources/Test.png",!0)
l=new D.bV(new V.W(1,1,1),V.le(),V.mm(),V.ox())
k=l.a
l.a=n
n.gv().n(0,l.gbU())
l.as(new D.J("mover",k,l.a))
if(!l.b.q(0,p)){k=l.b
l.b=p
l.as(new D.J("color",k,p))}p=l.f
if(p!==m){if(p!=null)p.gv().L(0,l.gbU())
k=l.f
l.f=m
m.gv().n(0,l.gbU())
l.as(new D.J("texture",k,l.f))}p=O.l_(t.gc)
j=new O.d1(p)
p.bl(j.gf4(),j.gf6())
p=j.gdO()
p.gv().n(0,j.gcY())
p.gdN().n(0,j.gcL())
j.gdO().n(0,l)
j.gdr().saD(0,new V.W(0,0,0))
p=j.gdd()
p.saD(0,new V.W(0.01,0.01,0.01))
p=j.gdq()
p.saD(0,new V.W(0.7,0.7,0.7))
p=j.gbG()
p.saD(0,new V.W(0.3,0.3,0.3))
p=j.gbG()
p.d1(new A.aH(!0,!1,!1))
p.d2(100)
i=E.lS()
i.saj(0,F.n4())
h=E.lS()
h.sbe(U.l0(V.be(3,0,0,0,0,3,0,0,0,0,3,0,0,0,0,1)))
p=F.lw(1,b,b,1)
p.cl()
h.saj(0,p)
g=new U.bY(V.bC(),H.b([],t.eJ))
g.bl(g.gf0(),g.gfJ())
g.n(0,o)
g.n(0,U.l0(V.lX(3.141592653589793)))
g.n(0,U.l0(V.be(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
p=O.l_(t.l)
m=new M.eo(p)
p.bl(m.gfb(),m.gfd())
f=X.nP(b)
e=new X.eU(1.0471975511965976,0.1)
e.sbe(b)
d=e.c
$.G().toString
if(!(Math.abs(d-1.0471975511965976)<1e-9)){e.c=1.0471975511965976
e.aQ(new D.J("fov",d,1.0471975511965976))}d=e.d
$.G().toString
if(!(Math.abs(d-0.1)<1e-9)){e.d=0.1
e.aQ(new D.J("near",d,0.1))}d=e.e
$.G().toString
if(!(Math.abs(d-2000)<1e-9)){e.e=2000
e.aQ(new D.J("far",d,2000))}d=m.b
if(d!==e){if(d!=null)d.gv().L(0,m.gar())
k=m.b
m.b=e
e.gv().n(0,m.gar())
m.ay(new D.J("camera",k,m.b))}d=m.c
if(d!==f){if(d!=null)d.gv().L(0,m.gar())
k=m.c
m.c=f
f.gv().n(0,m.gar())
m.ay(new D.J("target",k,m.c))}m.se6(b)
m.se6(j)
p.n(0,i)
p.n(0,h)
p=m.b
if(p!=null)p.sbe(g)
p=q.d
if(p!==m){if(p!=null)p.gv().L(0,q.gcI())
q.d=m
m.gv().n(0,q.gcI())
q.cJ()}r=s.getElementById("shapes")
if(r==null)H.h(P.f("Failed to find shapes for RadioGroup"))
s=new V.j_("shapes",!0,r)
s.b9(0,"Cube",new M.kL(i))
s.b9(0,"Cylinder",new M.kM(i))
s.b9(0,"Cone",new M.kN(i))
s.b9(0,"Sphere",new M.kO(i))
s.d9(0,"Toroid",new M.kP(i),!0)
s.b9(0,"Knot",new M.kQ(i))
s=q.Q
if(s==null)s=q.Q=D.U()
p=s.b
s=p==null?s.b=H.b([],t.a):p
s.push(new M.kR(a,j))
V.qq(q)},
kL:function kL(a){this.a=a},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a,b){this.a=a
this.b=b}},A={
o1:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=""+"MaterialLight_"+a4.gao(a4)+a5.gao(a5)+a6.gao(a6)+a7.gao(a7)+a8.gao(a8)+a9.gao(a9)+b0.gao(b0)+b1.gao(b1)+b2.gao(b2)+"_"
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
c=$.bs()
if(h){s=$.br()
c=new Z.bJ(c.a|s.a)}if(g)c=new Z.bJ(c.a|$.bq().a)
if(f)c=new Z.bJ(c.a|$.bp().a)
return new A.iF(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
kt:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
ku:function(a,b,c){var s
A.kt(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hP(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
pA:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.kt(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
pw:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.ku(b,r,"ambient")
b.a+="\n"},
py:function(a,b){var s,r=a.c
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.ku(b,r,"diffuse")
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
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.ku(b,r,"invDiffuse")
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
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.ku(b,r,"specular")
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
pF:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.kt(b,r,"reflect")
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
pG:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.kt(b,r,"refract")
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
px:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.hP(r)
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
pz:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+s
q=A.hP(r)
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
pE:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.hP(r)
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
pI:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.hP(r)
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
if(s==null)s=$.id=new E.fU(E.mn(),E.mo())
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
pJ:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.a_(""),j=""+"precision mediump float;\n"
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
k.a+=l+(q[0].toUpperCase()+C.a.a7(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.a7(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.a7(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.a7(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)j=!1
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
s=b.a+="uniform BendingValue bendValues["+a.aW+"];\n"
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
hP:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.a7(a,1)},
ld:function(a,b,c,d,e){var s=new A.fs(H.b([],t.t),a,c,e)
s.f=d
s.e=P.cX(d,0,!1,t.S)
return s},
ee:function ee(a,b,c){this.a=a
this.b=b
this.c=c},
hT:function hT(a){this.a=a},
aH:function aH(a,b,c){this.a=a
this.b=b
this.c=c},
eF:function eF(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.iG=_.iF=_.dC=_.iE=_.iD=_.dB=_.dA=_.iC=_.iB=_.dz=_.dw=_.iA=_.iz=_.dv=_.iy=_.ix=_.du=_.dt=_.bt=_.aW=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.cb=c
_.cc=d
_.cd=e
_.ce=f
_.cf=g
_.cg=h
_.ci=i
_.cj=j
_.iJ=_.iI=_.iH=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
b3:function b3(a,b){this.a=a
this.b=b},
b5:function b5(a,b){this.a=a
this.b=b},
bg:function bg(a,b){this.a=a
this.b=b},
bi:function bi(a,b){this.a=a
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
_.aW=b5
_.bt=b6
_.dt=b7},
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
a2:function a2(){},
js:function js(a){this.a=a},
ce:function ce(a,b,c){this.a=a
this.c=b
this.d=c},
fu:function fu(a,b,c){this.a=a
this.c=b
this.d=c},
fv:function fv(a,b,c){this.a=a
this.c=b
this.d=c},
fw:function fw(a,b,c){this.a=a
this.c=b
this.d=c},
fs:function fs(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
dn:function dn(a,b,c){this.a=a
this.c=b
this.d=c},
ft:function ft(a,b,c){this.a=a
this.c=b
this.d=c},
dp:function dp(a,b,c){this.a=a
this.c=b
this.d=c},
dq:function dq(a,b,c){this.a=a
this.c=b
this.d=c},
fx:function fx(a,b,c){this.a=a
this.c=b
this.d=c},
dt:function dt(a,b,c){this.a=a
this.c=b
this.d=c},
cf:function cf(a,b,c){this.a=a
this.c=b
this.d=c},
dv:function dv(a,b,c){this.a=a
this.c=b
this.d=c},
dw:function dw(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lw:function(a,b,c,d){var s=F.la()
F.e0(s,b,c,d,a,1,0,0,1)
F.e0(s,b,c,d,a,0,1,0,3)
F.e0(s,b,c,d,a,0,0,1,2)
F.e0(s,b,c,d,a,-1,0,0,0)
F.e0(s,b,c,d,a,0,-1,0,0)
F.e0(s,b,c,d,a,0,0,-1,3)
s.au()
return s},
kn:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
e0:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.D(g,f+a2,e+a3)
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
i.d=h}k=F.kn(h)
j=F.kn(g)
a.bd(F.lE(a0,a1,new F.ki(i,F.kn(f),F.kn(e),j,k,c),b))},
mU:function(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(a1<3)throw H.c(P.f("Must have 3 or more sizes for a disk."))
s=F.la()
r=b?-1:1
q=-6.283185307179586/a1
p=t.k
o=H.b([],p)
n=s.gX()
m=new V.D(0,0,r).H()
o.push(n.hj(new V.bF(a,-1,-1,-1),new V.aP(1,1,1,1),new V.T(0,0,c),new V.D(0,0,r),new V.a1(0.5,0.5),m))
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
d=F.fE(new V.bF(a,-1,-1,-1),null,new V.aP(g,e,f,1),new V.T(j*h,i*h,c),new V.D(0,0,r),new V.a1(j*0.5+0.5,i*0.5+0.5),m,null,0)
n.n(0,d)
o.push(d)}s.gR().hh(o)
return s},
mS:function(a,b,c){return F.q8(!0,a,1,new F.kx(1,c),b)},
q8:function(a,b,c,d,e){var s
if(e<3)throw H.c(P.f("Must have 3 or more sizes for a cylindrical shape."))
if(c<1)throw H.c(P.f("Must have 1 or more divisionss for a cylindrical shape."))
s=F.lE(c,e,new F.kz(d),null)
s.au()
s.c3()
if(b)s.bd(F.mU(3,!1,1,new F.kA(d),e))
s.bd(F.mU(1,!0,-1,new F.kB(d),e))
return s},
qr:function(a,b){var s=F.lw(a,null,new F.kU(1,new F.kV()),b)
s.c3()
return s},
n4:function(){return F.mT(15,30,0.5,1,new F.kW())},
ql:function(){return F.mT(12,120,0.3,1,new F.kK(3,2))},
mT:function(a,b,c,d,e){var s=F.lE(a,b,new F.ky(e,d,b,c),null)
s.au()
s.c3()
return s},
lE:function(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null
if(a<1)throw H.c(P.f("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.f("Must have 1 or more divisions of the height for a surface."))
s=F.la()
r=t.k
q=H.b([],r)
for(p=0;p<=b;++p){o=p/b
n=s.a
if(n==null)n=s.a=new F.y(s,H.b([],r))
if(o<0)m=0
else m=o>1?1:o
l=F.fE(d,d,new V.aP(m,0,0,1),d,d,new V.a1(o,1),d,d,0)
n.n(0,l)
c.$3(l,o,0)
q.push(l.ca(a0))}for(p=1;p<=a;++p){k=p/a
for(n=k>1,m=k<0,j=1-k,i=0;i<=b;++i){o=i/b
h=s.a
if(h==null)h=s.a=new F.y(s,H.b([],r))
if(o<0)g=0
else g=o>1?1:o
if(m)f=0
else f=n?1:k
if(m)e=0
else e=n?1:k
l=F.fE(d,d,new V.aP(g,f,e,1),d,d,new V.a1(o,j),d,d,0)
h.n(0,l)
c.$3(l,o,k)
q.push(l.ca(a0))}}s.gR().hi(a+1,b+1,q)
return s},
la:function(){return new F.j6()},
fE:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.ci()
h=$.nm()
s=$.bs()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.br().a)!==0)q.r=e
if((r&$.bq().a)!==0)q.x=b
if((r&$.bO().a)!==0)q.y=f
if((r&$.bP().a)!==0)q.z=g
if((r&$.nn().a)!==0)q.Q=c
if((r&$.cw().a)!==0)q.ch=i
if((r&$.bp().a)!==0)q.cx=a
return q},
ki:function ki(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kx:function kx(a,b){this.a=a
this.b=b},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
kB:function kB(a){this.a=a},
kV:function kV(){},
kU:function kU(a,b){this.a=a
this.b=b},
kW:function kW(){},
kK:function kK(a,b){this.a=a
this.b=b},
ky:function ky(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
at:function at(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ij:function ij(){},
jc:function jc(){},
eC:function eC(){this.b=this.a=null},
iw:function iw(){},
jr:function jr(){},
eY:function eY(){this.a=null},
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
bG:function bG(a,b){this.a=a
this.b=b},
ci:function ci(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
jP:function jP(a){this.a=a},
jO:function jO(a){this.a=a},
y:function y(a,b){this.a=a
this.b=!1
this.c=b},
cj:function cj(a,b,c){this.b=a
this.c=b
this.d=c},
jJ:function jJ(a,b){this.a=a
this.b=b},
jK:function jK(a,b){this.a=a
this.b=b},
ck:function ck(a,b){this.b=a
this.c=b},
jM:function jM(){},
jL:function jL(){},
jN:function jN(){},
iX:function iX(){},
dA:function dA(a){this.b=a}},T={cc:function cc(){},fk:function fk(){},fl:function fl(a){var _=this
_.a=0
_.b=a
_.d=_.c=!1
_.y=null},jg:function jg(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=0},jh:function jh(a,b,c,d,e,f,g){var _=this
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
H.l6.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gF:function(a){return H.db(a)},
i:function(a){return"Instance of '"+H.dc(a)+"'"}}
J.ew.prototype={
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$iaa:1}
J.cQ.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0}}
J.bb.prototype={
gF:function(a){return 0},
i:function(a){return String(a)},
$ilU:1}
J.eV.prototype={}
J.bI.prototype={}
J.aR.prototype={
i:function(a){var s=a[$.n8()]
if(s==null)return this.ej(a)
return"JavaScript function for "+J.cx(s)},
$icM:1}
J.w.prototype={
cu:function(a,b){if(!!a.fixed$length)H.h(P.B("removeAt"))
if(b<0||b>=a.length)throw H.c(P.f0(b,null))
return a.splice(b,1)[0]},
L:function(a,b){var s
if(!!a.fixed$length)H.h(P.B("remove"))
for(s=0;s<a.length;++s)if(J.M(a[s],b)){a.splice(s,1)
return!0}return!1},
ab:function(a,b){if(!!a.fixed$length)H.h(P.B("addAll"))
this.eA(a,b)
return},
eA:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.aI(a))
for(s=0;s<r;++s)a.push(b[s])},
E:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.aI(a))}},
j:function(a,b){var s,r,q=a.length,p=P.cX(q,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.x(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
hO:function(a){return this.j(a,"")},
hI:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.aI(a))}return s},
hJ:function(a,b,c){return this.hI(a,b,c,t.A)},
hH:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.aI(a))}throw H.c(H.is())},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ghG:function(a){if(a.length>0)return a[0]
throw H.c(H.is())},
gaw:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.is())},
de:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.aI(a))}return!1},
b3:function(a,b){if(!!a.immutable$list)H.h(P.B("sort"))
H.ol(a,b==null?J.pn():b)},
ef:function(a){return this.b3(a,null)},
A:function(a,b){var s
for(s=0;s<a.length;++s)if(J.M(a[s],b))return!0
return!1},
i:function(a){return P.l3(a,"[","]")},
gP:function(a){return new J.ak(a,a.length)},
gF:function(a){return H.db(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.h(P.B("set length"))
if(b>a.length)H.kj(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.cu(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.h(P.B("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cu(a,b))
a[b]=c},
$iz:1,
$in:1,
$ij:1,
$ip:1}
J.it.prototype={}
J.ak.prototype={
gB:function(a){return H.V(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.q(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.c1.prototype={
ad:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbw(b)
if(this.gbw(a)===s)return 0
if(this.gbw(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbw:function(a){return a===0?1/a<0:a<0},
ii:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.B(""+a+".toInt()"))},
cm:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.B(""+a+".floor()"))},
an:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.B(""+a+".round()"))},
cA:function(a,b){var s
if(b>20)throw H.c(P.a7(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbw(a))return"-"+s
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
bk:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
el:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d4(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.d4(a,b)},
d4:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.B("Result of truncating division is "+H.x(s)+": "+H.x(a)+" ~/ "+b))},
aU:function(a,b){var s
if(a>0)s=this.d3(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
h6:function(a,b){if(b<0)throw H.c(H.e5(b))
return this.d3(a,b)},
d3:function(a,b){return b>31?0:a>>>b},
$iF:1,
$ia3:1}
J.cP.prototype={$ii:1}
J.ex.prototype={}
J.ba.prototype={
U:function(a,b){if(b<0)throw H.c(H.cu(a,b))
if(b>=a.length)H.h(H.cu(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.c(H.cu(a,b))
return a.charCodeAt(b)},
V:function(a,b){return a+b},
b_:function(a,b,c,d){var s=P.bh(b,c,a.length),r=a.substring(0,b),q=a.substring(s)
return r+d+q},
a6:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a7(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
Z:function(a,b){return this.a6(a,b,0)},
t:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.f0(b,null))
if(b>c)throw H.c(P.f0(b,null))
if(c>a.length)throw H.c(P.f0(c,null))
return a.substring(b,c)},
a7:function(a,b){return this.t(a,b,null)},
il:function(a){return a.toLowerCase()},
M:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.O)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ag:function(a,b){var s=b-a.length
if(s<=0)return a
return this.M(" ",s)+a},
bu:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a7(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dI:function(a,b){return this.bu(a,b,0)},
hr:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.a7(c,0,s,null,null))
return H.n3(a,b,c)},
A:function(a,b){return this.hr(a,b,0)},
ad:function(a,b){var s
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
H.cR.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.r.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.U(this.a,b)}}
H.n.prototype={}
H.cW.prototype={
gP:function(a){return new H.bc(this,this.gl(this))},
bE:function(a,b){return this.ei(0,b)}}
H.bc.prototype={
gB:function(a){return H.V(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=J.bM(q),o=p.gl(q)
if(r.b!==o)throw H.c(P.aI(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.I(q,s);++r.c
return!0}}
H.aT.prototype={
gP:function(a){return new H.eE(J.aD(this.a),this.b)},
gl:function(a){return J.aM(this.a)},
I:function(a,b){return this.b.$1(J.hQ(this.a,b))}}
H.cI.prototype={$in:1}
H.eE.prototype={
u:function(){var s=this,r=s.b
if(r.u()){s.a=s.c.$1(r.gB(r))
return!0}s.a=null
return!1},
gB:function(a){return H.V(this).Q[1].a(this.a)}}
H.d0.prototype={
gl:function(a){return J.aM(this.a)},
I:function(a,b){return this.b.$1(J.hQ(this.a,b))}}
H.b_.prototype={
gP:function(a){return new H.fH(J.aD(this.a),this.b)}}
H.fH.prototype={
u:function(){var s,r
for(s=this.a,r=this.b;s.u();)if(r.$1(s.gB(s)))return!0
return!1},
gB:function(a){var s=this.a
return s.gB(s)}}
H.cK.prototype={}
H.fA.prototype={
m:function(a,b,c){throw H.c(P.B("Cannot modify an unmodifiable list"))}}
H.cg.prototype={}
H.cD.prototype={
i:function(a){return P.l9(this)},
m:function(a,b,c){H.nK()},
$iH:1}
H.cE.prototype={
gl:function(a){return this.a},
c8:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.c8(0,b))return null
return this.cT(b)},
cT:function(a){return this.b[a]},
E:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.cT(q))}}}
H.jp.prototype={
af:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.da.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.ez.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.fz.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.iY.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.hm.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bw.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.n6(r==null?"unknown":r)+"'"},
$icM:1,
giq:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fh.prototype={}
H.fa.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.n6(s)+"'"}}
H.bS.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bS))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gF:function(a){var s,r=this.c
if(r==null)s=H.db(this.a)
else s=typeof r!=="object"?J.kY(r):H.db(r)
return(s^H.db(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.x(this.d)+"' of "+("Instance of '"+H.dc(s)+"'")}}
H.f3.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.X.prototype={
gl:function(a){return this.a},
gbv:function(a){return this.a===0},
ga0:function(a){return new H.cT(this,H.V(this).J("cT<1>"))},
gip:function(a){var s=this,r=H.V(s)
return H.o0(s.ga0(s),new H.iu(s),r.c,r.Q[1])},
c8:function(a,b){var s=this.b
if(s==null)return!1
return this.eJ(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bo(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bo(p,b)
q=r==null?n:r.b
return q}else return o.hM(b)},
hM:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.cU(p,q.dJ(a))
r=q.dK(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cN(s==null?q.b=q.bS():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cN(r==null?q.c=q.bS():r,b,c)}else q.hN(b,c)},
hN:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bS()
s=p.dJ(a)
r=p.cU(o,s)
if(r==null)p.bY(o,s,[p.bT(a,b)])
else{q=p.dK(r,a)
if(q>=0)r[q].b=b
else r.push(p.bT(a,b))}},
E:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.aI(s))
r=r.c}},
cN:function(a,b,c){var s=this.bo(a,b)
if(s==null)this.bY(a,b,this.bT(b,c))
else s.b=c},
eU:function(){this.r=this.r+1&67108863},
bT:function(a,b){var s,r=this,q=new H.ix(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.eU()
return q},
dJ:function(a){return J.kY(a)&0x3ffffff},
dK:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.M(a[r].a,b))return r
return-1},
i:function(a){return P.l9(this)},
bo:function(a,b){return a[b]},
cU:function(a,b){return a[b]},
bY:function(a,b,c){a[b]=c},
eN:function(a,b){delete a[b]},
eJ:function(a,b){return this.bo(a,b)!=null},
bS:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bY(r,s,r)
this.eN(r,s)
return r}}
H.iu.prototype={
$1:function(a){var s=this.a
return H.V(s).Q[1].a(s.h(0,a))},
$S:function(){return H.V(this.a).J("2(1)")}}
H.ix.prototype={}
H.cT.prototype={
gl:function(a){return this.a.a},
gP:function(a){var s=this.a,r=new H.eD(s,s.r)
r.c=s.e
return r}}
H.eD.prototype={
gB:function(a){return H.V(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.aI(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kF.prototype={
$1:function(a){return this.a(a)},
$S:37}
H.kG.prototype={
$2:function(a,b){return this.a(a,b)},
$S:57}
H.kH.prototype={
$1:function(a){return this.a(a)},
$S:49}
H.ey.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$im2:1}
H.d5.prototype={$id5:1}
H.a0.prototype={$ia0:1}
H.c4.prototype={
gl:function(a){return a.length},
$iz:1,
$iA:1}
H.bD.prototype={
h:function(a,b){H.b0(b,a,a.length)
return a[b]},
m:function(a,b,c){H.b0(b,a,a.length)
a[b]=c},
$in:1,
$ij:1,
$ip:1}
H.d6.prototype={
m:function(a,b,c){H.b0(b,a,a.length)
a[b]=c},
$in:1,
$ij:1,
$ip:1}
H.eL.prototype={
h:function(a,b){H.b0(b,a,a.length)
return a[b]}}
H.eM.prototype={
h:function(a,b){H.b0(b,a,a.length)
return a[b]}}
H.eN.prototype={
h:function(a,b){H.b0(b,a,a.length)
return a[b]}}
H.eO.prototype={
h:function(a,b){H.b0(b,a,a.length)
return a[b]}}
H.eP.prototype={
h:function(a,b){H.b0(b,a,a.length)
return a[b]}}
H.d7.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b0(b,a,a.length)
return a[b]}}
H.bE.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b0(b,a,a.length)
return a[b]},
$ibE:1,
$icd:1}
H.dI.prototype={}
H.dJ.prototype={}
H.dK.prototype={}
H.dL.prototype={}
H.az.prototype={
J:function(a){return H.hA(v.typeUniverse,this,a)},
b4:function(a){return H.oW(v.typeUniverse,this,a)}}
H.fZ.prototype={}
H.fV.prototype={
i:function(a){return this.a}}
H.dU.prototype={}
P.jS.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:48}
P.jR.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:47}
P.jT.prototype={
$0:function(){this.a.$0()},
$S:12}
P.jU.prototype={
$0:function(){this.a.$0()},
$S:12}
P.dT.prototype={
ew:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ct(new P.ka(this,b),0),a)
else throw H.c(P.B("`setTimeout()` not found."))},
ex:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ct(new P.k9(this,a,Date.now(),b),0),a)
else throw H.c(P.B("Periodic timer."))},
$ijk:1}
P.ka.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:1}
P.k9.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.el(s,o)}q.c=p
r.d.$1(q)},
$S:12}
P.co.prototype={
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
if(r instanceof P.co){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aD(s)
if(o instanceof P.bK){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dQ.prototype={
gP:function(a){return new P.bK(this.a())}}
P.fI.prototype={}
P.ca.prototype={}
P.fc.prototype={}
P.kh.prototype={}
P.kv.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:1}
P.jZ.prototype={
ic:function(a){var s,r,q,p=null
try{if(C.f===$.aK){a.$0()
return}P.pS(p,p,this,a)}catch(q){s=H.aj(q)
r=H.ly(q)
P.mM(p,p,this,s,r)}},
ie:function(a,b){var s,r,q,p=null
try{if(C.f===$.aK){a.$1(b)
return}P.pT(p,p,this,a,b)}catch(q){s=H.aj(q)
r=H.ly(q)
P.mM(p,p,this,s,r)}},
ig:function(a,b){return this.ie(a,b,t.A)},
hn:function(a){return new P.k_(this,a)},
dj:function(a,b){return new P.k0(this,a,b)}}
P.k_.prototype={
$0:function(){return this.a.ic(this.b)},
$S:1}
P.k0.prototype={
$1:function(a){return this.a.ig(this.b,a)},
$S:function(){return this.c.J("~(0)")}}
P.dE.prototype={
gP:function(a){var s=new P.dF(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
A:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.eI(b)
return r}},
eI:function(a){var s=this.d
if(s==null)return!1
return this.bP(s[this.bL(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cO(s==null?q.b=P.lh():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cO(r==null?q.c=P.lh():r,b)}else return q.ez(0,b)},
ez:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.lh()
s=q.bL(b)
r=p[s]
if(r==null)p[s]=[q.bK(b)]
else{if(q.bP(r,b)>=0)return!1
r.push(q.bK(b))}return!0},
L:function(a,b){if((b&1073741823)===b)return this.fU(this.c,b)
else return this.fT(0,b)},
fT:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bL(b)
r=n[s]
q=o.bP(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.d6(p)
return!0},
cO:function(a,b){if(a[b]!=null)return!1
a[b]=this.bK(b)
return!0},
fU:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.d6(s)
delete a[b]
return!0},
cP:function(){this.r=this.r+1&1073741823},
bK:function(a){var s,r=this,q=new P.jY(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cP()
return q},
d6:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cP()},
bL:function(a){return J.kY(a)&1073741823},
bP:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.M(a[r].a,b))return r
return-1}}
P.jY.prototype={}
P.dF.prototype={
gB:function(a){return H.V(this).c.a(this.d)},
u:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.aI(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cO.prototype={}
P.iy.prototype={
$2:function(a,b){this.a.m(0,this.b.a(a),this.c.a(b))},
$S:10}
P.cV.prototype={$in:1,$ij:1,$ip:1}
P.k.prototype={
gP:function(a){return new H.bc(a,this.gl(a))},
I:function(a,b){return this.h(a,b)},
E:function(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gl(a))throw H.c(P.aI(a))}},
gbv:function(a){return this.gl(a)===0},
ik:function(a,b){var s,r,q,p,o=this
if(o.gbv(a)){s=J.l4(0,H.b1(a).J("k.E"))
return s}r=o.h(a,0)
q=P.cX(o.gl(a),r,!0,H.b1(a).J("k.E"))
for(p=1;p<o.gl(a);++p){s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
ij:function(a){return this.ik(a,!0)},
hE:function(a,b,c,d){var s
H.b1(a).J("k.E").a(d)
P.bh(b,c,this.gl(a))
for(s=b;s<c;++s)this.m(a,s,d)},
i:function(a){return P.l3(a,"[","]")}}
P.cZ.prototype={}
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
for(s=J.aD(this.ga0(a)),r=H.b1(a).J("L.V");s.u();){q=s.gB(s)
b.$2(q,r.a(this.h(a,q)))}},
gl:function(a){return J.aM(this.ga0(a))},
i:function(a){return P.l9(a)},
$iH:1}
P.hB.prototype={
m:function(a,b,c){throw H.c(P.B("Cannot modify unmodifiable map"))}}
P.d_.prototype={
h:function(a,b){return J.lH(this.a,b)},
m:function(a,b,c){J.kX(this.a,b,c)},
E:function(a,b){J.ea(this.a,b)},
gl:function(a){return J.aM(this.a)},
i:function(a){return J.cx(this.a)},
$iH:1}
P.ch.prototype={}
P.de.prototype={
ab:function(a,b){var s
for(s=J.aD(b);s.u();)this.n(0,s.gB(s))},
i:function(a){return P.l3(this,"{","}")},
I:function(a,b){var s,r,q,p,o="index"
H.q4(b,o,t.S)
P.m1(b,o)
for(s=P.oG(this,this.r),r=H.V(s).c,q=0;s.u();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.O(b,this,o,null,q))}}
P.dM.prototype={$in:1,$ij:1}
P.dG.prototype={}
P.dY.prototype={}
P.e_.prototype={}
P.jD.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.aj(r)}return null},
$S:15}
P.jC.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.aj(r)}return null},
$S:15}
P.hW.prototype={
hS:function(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a4=P.bh(a3,a4,a2.length)
s=$.np()
for(r=s.length,q=a3,p=q,o=null,n=-1,m=-1,l=0;q<a4;q=k){k=q+1
j=C.a.D(a2,q)
if(j===37){i=k+2
if(i<=a4){h=H.kE(C.a.D(a2,k))
g=H.kE(C.a.D(a2,k+1))
f=h*16+g-(g&256)
if(f===37)f=-1
k=i}else f=-1}else f=j
if(0<=f&&f<=127){if(f<0||f>=r)return H.d(s,f)
e=s[f]
if(e>=0){f=C.a.U("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e)
if(f===j)continue
j=f}else{if(e===-1){if(n<0){d=o==null?null:o.a.length
if(d==null)d=0
n=d+(q-p)
m=q}++l
if(j===61)continue}j=f}if(e!==-2){if(o==null){o=new P.a_("")
d=o}else d=o
c=d.a+=C.a.t(a2,p,q)
d.a=c+H.ay(j)
p=k
continue}}throw H.c(P.a6("Invalid base64 data",a2,q))}if(o!=null){r=o.a+=C.a.t(a2,p,a4)
d=r.length
if(n>=0)P.lK(a2,m,a4,n,l,d)
else{b=C.c.bk(d-1,4)+1
if(b===1)throw H.c(P.a6(a0,a2,a4))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return C.a.b_(a2,a3,a4,r.charCodeAt(0)==0?r:r)}a=a4-a3
if(n>=0)P.lK(a2,m,a4,n,l,a)
else{b=C.c.bk(a,4)
if(b===1)throw H.c(P.a6(a0,a2,a4))
if(b>1)a2=C.a.b_(a2,a4,a4,b===2?"==":"=")}return a2}}
P.hX.prototype={}
P.eh.prototype={}
P.ej.prototype={}
P.ic.prototype={}
P.ir.prototype={
i:function(a){return this.a}}
P.iq.prototype={
eK:function(a,b,c){var s,r,q,p,o,n,m,l=null
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
P.jA.prototype={
ghD:function(){return C.P}}
P.jE.prototype={
c9:function(a){var s,r,q,p=P.bh(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.kf(r)
if(q.eP(a,0,p)!==p){C.a.U(a,p-1)
q.c2()}return new Uint8Array(r.subarray(0,H.pe(0,q.b,s)))}}
P.kf.prototype={
c2:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
he:function(a,b){var s,r,q,p,o,n=this
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
eP:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.U(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.D(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.he(p,C.a.D(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
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
P.jB.prototype={
c9:function(a){var s=this.a,r=P.ot(s,a,0,null)
if(r!=null)return r
return new P.ke(s).hs(a,0,null,!0)}}
P.ke.prototype={
hs:function(a,b,c,d){var s,r,q,p,o=this,n=P.bh(b,c,J.aM(a))
if(b===n)return""
s=P.pa(a,b,n)
r=o.bM(s,0,n-b,!0)
q=o.b
if((q&1)!==0){p=P.pb(q)
o.b=0
throw H.c(P.a6(p,a,b+o.c))}return r},
bM:function(a,b,c,d){var s,r,q=this
if(c-b>1000){s=C.c.a2(b+c,2)
r=q.bM(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bM(a,s,c,d)}return q.hx(a,b,c,d)},
hx:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.a_(""),f=b+1,e=a.length
if(b<0||b>=e)return H.d(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.D("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.D(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.ay(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.ay(j)
break
case 65:g.a+=H.ay(j);--f
break
default:p=g.a+=H.ay(j)
g.a=p+H.ay(j)
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
g.a+=H.ay(a[l])}else g.a+=P.fe(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.ay(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.Y.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.Y&&this.a===b.a&&!0},
ad:function(a,b){return C.c.ad(this.a,b.a)},
gF:function(a){var s=this.a
return(s^C.c.aU(s,30))&1073741823},
i:function(a){var s=this,r=P.nL(H.oc(s)),q=P.em(H.oa(s)),p=P.em(H.o6(s)),o=P.em(H.o7(s)),n=P.em(H.o9(s)),m=P.em(H.ob(s)),l=P.nM(H.o8(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bx.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bx&&this.a===b.a},
gF:function(a){return C.c.gF(this.a)},
ad:function(a,b){return C.c.ad(this.a,b.a)},
i:function(a){var s,r,q,p=new P.i9(),o=this.a
if(o<0)return"-"+new P.bx(0-o).i(0)
s=p.$1(C.c.a2(o,6e7)%60)
r=p.$1(C.c.a2(o,1e6)%60)
q=new P.i8().$1(o%1e6)
return""+C.c.a2(o,36e8)+":"+s+":"+r+"."+q}}
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
P.ed.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.ig(s)
return"Assertion failed"}}
P.fr.prototype={}
P.eQ.prototype={
i:function(a){return"Throw of null."}}
P.aE.prototype={
gbO:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbN:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbO()+o+m
if(!q.a)return l
s=q.gbN()
r=P.ig(q.b)
return l+s+": "+r}}
P.dd.prototype={
gbO:function(){return"RangeError"},
gbN:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.x(q):""
else if(q==null)s=": Not greater than or equal to "+H.x(r)
else if(q>r)s=": Not in inclusive range "+H.x(r)+".."+H.x(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.x(r)
return s}}
P.eu.prototype={
gbO:function(){return"RangeError"},
gbN:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl:function(a){return this.f}}
P.fB.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fy.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.c9.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ei.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ig(s)+"."}}
P.eT.prototype={
i:function(a){return"Out of Memory"},
$iK:1}
P.di.prototype={
i:function(a){return"Stack Overflow"},
$iK:1}
P.ek.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.fW.prototype={
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
for(o=e;o<m;++o){n=C.a.U(d,o)
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
return f+j+h+i+"\n"+C.a.M(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.x(e)+")"):f}}
P.j.prototype={
bE:function(a,b){return new H.b_(this,b,H.V(this).J("b_<j.E>"))},
gl:function(a){var s,r=this.gP(this)
for(s=0;r.u();)++s
return s},
gaM:function(a){var s,r=this.gP(this)
if(!r.u())throw H.c(H.is())
s=r.gB(r)
if(r.u())throw H.c(H.nS())
return s},
I:function(a,b){var s,r,q
P.m1(b,"index")
for(s=this.gP(this),r=0;s.u();){q=s.gB(s)
if(b===r)return q;++r}throw H.c(P.O(b,this,"index",null,r))},
i:function(a){return P.nR(this,"(",")")}}
P.ev.prototype={}
P.af.prototype={
gF:function(a){return P.P.prototype.gF.call(C.U,this)},
i:function(a){return"null"}}
P.P.prototype={constructor:P.P,$iP:1,
q:function(a,b){return this===b},
gF:function(a){return H.db(this)},
i:function(a){return"Instance of '"+H.dc(this)+"'"},
toString:function(){return this.i(this)}}
P.a_.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jy.prototype={
$2:function(a,b){var s,r,q,p=C.a.dI(b,"=")
if(p===-1){if(b!=="")J.kX(a,P.lq(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.t(b,0,p)
r=C.a.a7(b,p+1)
q=this.a
J.kX(a,P.lq(s,0,s.length,q,!0),P.lq(r,0,r.length,q,!0))}return a},
$S:44}
P.jv.prototype={
$2:function(a,b){throw H.c(P.a6("Illegal IPv4 address, "+a,this.a,b))},
$S:43}
P.jw.prototype={
$2:function(a,b){throw H.c(P.a6("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:42}
P.jx.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.kI(C.a.t(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:41}
P.bL.prototype={
gc1:function(){var s,r,q,p=this,o=p.x
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
else o=H.h(H.l8("_text"))}return o},
gF:function(a){var s=this,r=s.z
if(r==null){r=C.a.gF(s.gc1())
if(s.z==null)s.z=r
else r=H.h(H.l8("hashCode"))}return r},
gct:function(){var s=this,r=s.Q
if(r==null){r=s.f
r=new P.ch(P.mg(r==null?"":r),t.dw)
if(s.Q==null)s.Q=r
else r=H.h(H.l8("queryParameters"))}return r},
ge9:function(){return this.b},
gcn:function(a){var s=this.c
if(s==null)return""
if(C.a.Z(s,"["))return C.a.t(s,1,s.length-1)
return s},
gbz:function(a){var s=this.d
return s==null?P.mA(this.a):s},
gcs:function(a){var s=this.f
return s==null?"":s},
gdD:function(){var s=this.r
return s==null?"":s},
e3:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.Z(s,"/"))s="/"+s
q=s
p=P.lo(null,0,0,b)
return new P.bL(n,l,j,k,q,p,o.r)},
gdE:function(){return this.c!=null},
gdH:function(){return this.f!=null},
gdF:function(){return this.r!=null},
i:function(a){return this.gc1()},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.dD.b(b))if(q.a===b.gbF())if(q.c!=null===b.gdE())if(q.b===b.ge9())if(q.gcn(q)===b.gcn(b))if(q.gbz(q)===b.gbz(b))if(q.e===b.ge_(b)){s=q.f
r=s==null
if(!r===b.gdH()){if(r)s=""
if(s===b.gcs(b)){s=q.r
r=s==null
if(!r===b.gdF()){if(r)s=""
s=s===b.gdD()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
$ifC:1,
gbF:function(){return this.a},
ge_:function(a){return this.e}}
P.kc.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=P.kd(C.h,a,C.e,!0)
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=P.kd(C.h,b,C.e,!0)}},
$S:40}
P.kb.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.aD(b),r=this.a;s.u();)r.$2(a,s.gB(s))},
$S:5}
P.ju.prototype={
ge8:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.d(m,0)
s=o.a
m=m[0]+1
r=C.a.bu(s,"?",m)
q=s.length
if(r>=0){p=P.dZ(s,r+1,q,C.k,!1)
q=r}else p=n
m=o.c=new P.fO("data","",n,n,P.dZ(s,m,q,C.y,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.ko.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.d(s,a)
s=s[a]
C.a_.hE(s,0,96,b)
return s},
$S:39}
P.kp.prototype={
$3:function(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=C.a.D(b,r)^96
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:23}
P.kq.prototype={
$3:function(a,b,c){var s,r,q
for(s=C.a.D(b,0),r=C.a.D(b,1);s<=r;++s){q=(s^96)>>>0
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:23}
P.hg.prototype={
gdE:function(){return this.c>0},
gdG:function(){return this.c>0&&this.d+1<this.e},
gdH:function(){return this.f<this.r},
gdF:function(){return this.r<this.a.length},
gbF:function(){var s=this.x
return s==null?this.x=this.eH():s},
eH:function(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&C.a.Z(r.a,"http"))return"http"
if(q===5&&C.a.Z(r.a,"https"))return"https"
if(s&&C.a.Z(r.a,"file"))return"file"
if(q===7&&C.a.Z(r.a,"package"))return"package"
return C.a.t(r.a,0,q)},
ge9:function(){var s=this.c,r=this.b+3
return s>r?C.a.t(this.a,r,s-1):""},
gcn:function(a){var s=this.c
return s>0?C.a.t(this.a,s,this.d):""},
gbz:function(a){var s,r=this
if(r.gdG())return P.kI(C.a.t(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&C.a.Z(r.a,"http"))return 80
if(s===5&&C.a.Z(r.a,"https"))return 443
return 0},
ge_:function(a){return C.a.t(this.a,this.e,this.f)},
gcs:function(a){var s=this.f,r=this.r
return s<r?C.a.t(this.a,s+1,r):""},
gdD:function(){var s=this.r,r=this.a
return s<r.length?C.a.a7(r,s+1):""},
gct:function(){var s=this
if(s.f>=s.r)return C.Z
return new P.ch(P.mg(s.gcs(s)),t.dw)},
e3:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbF(),k=l==="file",j=n.c,i=j>0?C.a.t(n.a,n.b+3,j):"",h=n.gdG()?n.gbz(n):m
j=n.c
if(j>0)s=C.a.t(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.t(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.Z(r,"/"))r="/"+r
p=P.lo(m,0,0,b)
q=n.r
o=q<j.length?C.a.a7(j,q+1):m
return new P.bL(l,i,s,h,r,p,o)},
gF:function(a){var s=this.y
return s==null?this.y=C.a.gF(this.a):s},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.dD.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifC:1}
P.fO.prototype={}
W.v.prototype={}
W.hR.prototype={
gl:function(a){return a.length}}
W.eb.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.ec.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bR.prototype={$ibR:1}
W.bt.prototype={$ibt:1}
W.bu.prototype={$ibu:1}
W.bv.prototype={
cC:function(a,b,c){if(c!=null)return a.getContext(b,P.mR(c))
return a.getContext(b)},
ec:function(a,b){return this.cC(a,b,null)},
$ibv:1}
W.cB.prototype={$icB:1}
W.aF.prototype={
gl:function(a){return a.length}}
W.i1.prototype={
gl:function(a){return a.length}}
W.I.prototype={$iI:1}
W.cF.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.i2.prototype={}
W.as.prototype={}
W.aQ.prototype={}
W.i3.prototype={
gl:function(a){return a.length}}
W.i4.prototype={
gl:function(a){return a.length}}
W.i5.prototype={
gl:function(a){return a.length}}
W.b6.prototype={$ib6:1}
W.i6.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cG.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iA:1,
$ij:1,
$ip:1}
W.cH.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.x(r)+", "
s=a.top
s.toString
return r+H.x(s)+") "+H.x(this.gaL(a))+" x "+H.x(this.gaF(a))},
q:function(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=J.aL(b)
if(s===r.gby(b)){s=a.top
s.toString
s=s===r.gbB(b)&&this.gaL(a)===r.gaL(b)&&this.gaF(a)===r.gaF(b)}else s=!1}else s=!1
return s},
gF:function(a){var s,r=a.left
r.toString
r=C.d.gF(r)
s=a.top
s.toString
return W.mr(r,C.d.gF(s),C.d.gF(this.gaL(a)),C.d.gF(this.gaF(a)))},
gdk:function(a){var s=a.bottom
s.toString
return s},
gcV:function(a){return a.height},
gaF:function(a){var s=this.gcV(a)
s.toString
return s},
gby:function(a){var s=a.left
s.toString
return s},
gcz:function(a){var s=a.right
s.toString
return s},
gbB:function(a){var s=a.top
s.toString
return s},
gd8:function(a){return a.width},
gaL:function(a){var s=this.gd8(a)
s.toString
return s},
$ia8:1}
W.en.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iA:1,
$ij:1,
$ip:1}
W.i7.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.fL.prototype={
gbv:function(a){return this.a.firstElementChild==null},
gl:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b]).toString},
n:function(a,b){this.a.appendChild(b).toString
return b},
gP:function(a){var s=this.ij(this)
return new J.ak(s,s.length)}}
W.C.prototype={
gac:function(a){return new W.fT(a)},
gbq:function(a){var s=a.children
s.toString
return new W.fL(a,s)},
gdl:function(a){var s,r,q,p=a.clientLeft
p.toString
s=a.clientTop
s.toString
r=a.clientWidth
r.toString
q=a.clientHeight
q.toString
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.a8(p,s,r,q,t.I)},
i:function(a){var s=a.localName
s.toString
return s},
ae:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.lR
if(s==null){s=H.b([],t.Q)
r=new W.d9(s)
s.push(W.mq(null))
s.push(W.mv())
$.lR=r
d=r}else d=s
s=$.lQ
if(s==null){s=new W.hC(d)
$.lQ=s
c=s}else{s.a=d
c=s}}if($.b7==null){s=document
r=s.implementation.createHTMLDocument("")
r.toString
$.b7=r
r=r.createRange()
r.toString
$.l1=r
r=$.b7.createElement("base")
t.cR.a(r)
s=s.baseURI
s.toString
r.href=s
$.b7.head.appendChild(r).toString}s=$.b7
if(s.body==null){r=s.createElement("body")
s.body=t.Y.a(r)}s=$.b7
if(t.Y.b(a)){s=s.body
s.toString
q=s}else{s.toString
r=a.tagName
r.toString
q=s.createElement(r)
$.b7.body.appendChild(q).toString}s="createContextualFragment" in window.Range.prototype
s.toString
if(s){s=a.tagName
s.toString
s=!C.b.A(C.X,s)}else s=!1
if(s){$.l1.selectNodeContents(q)
s=$.l1
s=s.createContextualFragment(b)
s.toString
p=s}else{q.innerHTML=b
s=$.b7.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.b7.body)J.lI(q)
c.cD(p)
document.adoptNode(p).toString
return p},
hv:function(a,b,c){return this.ae(a,b,c,null)},
ed:function(a,b){var s
a.textContent=null
s=a.appendChild(this.ae(a,b,null,null))
s.toString},
ge5:function(a){var s=a.tagName
s.toString
return s},
$iC:1}
W.ia.prototype={
$1:function(a){return t.h.b(a)},
$S:28}
W.m.prototype={$im:1}
W.e.prototype={
hg:function(a,b,c,d){if(c!=null)this.eB(a,b,c,!1)},
eB:function(a,b,c,d){return a.addEventListener(b,H.ct(c,1),!1)},
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
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iA:1,
$ij:1,
$ip:1,
$ibX:1}
W.ep.prototype={
gl:function(a){return a.length}}
W.er.prototype={
gl:function(a){return a.length}}
W.au.prototype={$iau:1}
W.ip.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.bz.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iA:1,
$ij:1,
$ip:1}
W.bA.prototype={
gdn:function(a){var s=a.data
s.toString
return s},
$ibA:1}
W.bZ.prototype={$ibZ:1}
W.c0.prototype={$ic0:1}
W.bB.prototype={$ibB:1}
W.iA.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.iR.prototype={
gl:function(a){return a.length}}
W.c2.prototype={$ic2:1}
W.eI.prototype={
h:function(a,b){return P.bo(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bo(s.value[1]))}},
ga0:function(a){var s=H.b([],t.s)
this.E(a,new W.iS(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Not supported"))},
$iH:1}
W.iS.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.eJ.prototype={
h:function(a,b){return P.bo(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bo(s.value[1]))}},
ga0:function(a){var s=H.b([],t.s)
this.E(a,new W.iT(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Not supported"))},
$iH:1}
W.iT.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.aw.prototype={$iaw:1}
W.eK.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iA:1,
$ij:1,
$ip:1}
W.am.prototype={$iam:1}
W.a5.prototype={
gaM:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.lb("No elements"))
if(r>1)throw H.c(P.lb("More than one element"))
s=s.firstChild
s.toString
return s},
ab:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q).toString}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b]).toString},
gP:function(a){var s=this.a.childNodes
return new W.cL(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.t.prototype={
i6:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a).toString},
ia:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.nt(s,b,a)}catch(q){H.aj(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.eh(a):s},
fW:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$it:1}
W.d8.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iA:1,
$ij:1,
$ip:1}
W.ax.prototype={
gl:function(a){return a.length},
$iax:1}
W.eX.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iA:1,
$ij:1,
$ip:1}
W.f2.prototype={
h:function(a,b){return P.bo(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bo(s.value[1]))}},
ga0:function(a){var s=H.b([],t.s)
this.E(a,new W.j5(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Not supported"))},
$iH:1}
W.j5.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.f4.prototype={
gl:function(a){return a.length}}
W.an.prototype={$ian:1}
W.f6.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iA:1,
$ij:1,
$ip:1}
W.aA.prototype={$iaA:1}
W.f7.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iA:1,
$ij:1,
$ip:1}
W.aB.prototype={
gl:function(a){return a.length},
$iaB:1}
W.fb.prototype={
h:function(a,b){return a.getItem(H.kl(b))},
m:function(a,b,c){a.setItem(b,c)},
E:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga0:function(a){var s=H.b([],t.s)
this.E(a,new W.jd(s))
return s},
gl:function(a){var s=a.length
s.toString
return s},
$iH:1}
W.jd.prototype={
$2:function(a,b){return this.a.push(a)},
$S:35}
W.ah.prototype={$iah:1}
W.bj.prototype={$ibj:1}
W.dj.prototype={
ae:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bH(a,b,c,d)
s=W.nN("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new W.a5(r).ab(0,new W.a5(s))
return r}}
W.ff.prototype={
ae:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bH(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a5(C.C.ae(r,b,c,d))
r=new W.a5(r.gaM(r))
new W.a5(s).ab(0,new W.a5(r.gaM(r)))
return s}}
W.fg.prototype={
ae:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bH(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a5(C.C.ae(r,b,c,d))
new W.a5(s).ab(0,new W.a5(r.gaM(r)))
return s}}
W.cb.prototype={$icb:1}
W.ao.prototype={$iao:1}
W.ad.prototype={$iad:1}
W.fi.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iA:1,
$ij:1,
$ip:1}
W.fj.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iA:1,
$ij:1,
$ip:1}
W.jj.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.ap.prototype={$iap:1}
W.bH.prototype={$ibH:1}
W.fp.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iA:1,
$ij:1,
$ip:1}
W.jo.prototype={
gl:function(a){return a.length}}
W.aZ.prototype={}
W.jz.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.fF.prototype={
gl:function(a){return a.length}}
W.bk.prototype={
ghz:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.B("deltaY is not supported"))},
ghy:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.B("deltaX is not supported"))},
$ibk:1}
W.cl.prototype={
fX:function(a,b){var s=a.requestAnimationFrame(H.ct(b,1))
s.toString
return s},
eO:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cm.prototype={$icm:1}
W.fM.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iA:1,
$ij:1,
$ip:1}
W.dB.prototype={
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
if(s===r.gby(b)){s=a.top
s.toString
if(s===r.gbB(b)){s=a.width
s.toString
if(s===r.gaL(b)){s=a.height
s.toString
r=s===r.gaF(b)
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
gcV:function(a){return a.height},
gaF:function(a){var s=a.height
s.toString
return s},
gd8:function(a){return a.width},
gaL:function(a){var s=a.width
s.toString
return s}}
W.h_.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iA:1,
$ij:1,
$ip:1}
W.dH.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iA:1,
$ij:1,
$ip:1}
W.hj.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iA:1,
$ij:1,
$ip:1}
W.hq.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iA:1,
$ij:1,
$ip:1}
W.fJ.prototype={
E:function(a,b){var s,r,q,p,o
for(s=this.ga0(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
b.$2(o,H.kl(q.getAttribute(o)))}},
ga0:function(a){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=H.b([],t.s)
for(r=m.length,q=t.h9,p=0;p<r;++p){if(p>=m.length)return H.d(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
s.push(n)}}return s}}
W.fT.prototype={
h:function(a,b){return this.a.getAttribute(H.kl(b))},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga0(this).length}}
W.l2.prototype={}
W.dC.prototype={
hd:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.nu(s,this.c,r,!1)}}}
W.jV.prototype={
$1:function(a){return this.a.$1(a)},
$S:3}
W.lg.prototype={}
W.cn.prototype={
eq:function(a){var s
if($.dD.gbv($.dD)){for(s=0;s<262;++s)$.dD.m(0,C.W[s],W.qe())
for(s=0;s<12;++s)$.dD.m(0,C.n[s],W.qf())}},
aV:function(a){return $.nq().A(0,W.cJ(a))},
at:function(a,b,c){var s=$.dD.h(0,W.cJ(a)+"::"+b)
if(s==null)s=$.dD.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iaJ:1}
W.N.prototype={
gP:function(a){return new W.cL(a,this.gl(a))}}
W.d9.prototype={
aV:function(a){return C.b.de(this.a,new W.iW(a))},
at:function(a,b,c){return C.b.de(this.a,new W.iV(a,b,c))},
$iaJ:1}
W.iW.prototype={
$1:function(a){return a.aV(this.a)},
$S:25}
W.iV.prototype={
$1:function(a){return a.at(this.a,this.b,this.c)},
$S:25}
W.dN.prototype={
eu:function(a,b,c,d){var s,r,q
this.a.ab(0,c)
s=b.bE(0,new W.k2())
r=b.bE(0,new W.k3())
this.b.ab(0,s)
q=this.c
q.ab(0,C.v)
q.ab(0,r)},
aV:function(a){return this.a.A(0,W.cJ(a))},
at:function(a,b,c){var s=this,r=W.cJ(a),q=s.c
if(q.A(0,r+"::"+b))return s.d.hk(c)
else if(q.A(0,"*::"+b))return s.d.hk(c)
else{q=s.b
if(q.A(0,r+"::"+b))return!0
else if(q.A(0,"*::"+b))return!0
else if(q.A(0,r+"::*"))return!0
else if(q.A(0,"*::*"))return!0}return!1},
$iaJ:1}
W.k2.prototype={
$1:function(a){return!C.b.A(C.n,a)},
$S:26}
W.k3.prototype={
$1:function(a){return C.b.A(C.n,a)},
$S:26}
W.hs.prototype={
at:function(a,b,c){if(this.ek(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.A(0,b)
return!1}}
W.k8.prototype={
$1:function(a){return"TEMPLATE::"+a},
$S:34}
W.hr.prototype={
aV:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cJ(a)==="foreignObject")return!1
if(s)return!0
return!1},
at:function(a,b,c){if(b==="is"||C.a.Z(b,"on"))return!1
return this.aV(a)},
$iaJ:1}
W.cL.prototype={
u:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.lH(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gB:function(a){return H.V(this).c.a(this.d)}}
W.k1.prototype={}
W.hC.prototype={
cD:function(a){var s,r=new W.kg(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
b8:function(a,b){++this.b
if(b==null||b!==a.parentNode)J.lI(a)
else b.removeChild(a).toString},
h0:function(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
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
o=p}l=o}catch(n){H.aj(n)}r="element unprintable"
try{r=J.cx(a)}catch(n){H.aj(n)}try{q=W.cJ(a)
this.h_(a,b,l,r,q,k,j)}catch(n){if(H.aj(n) instanceof P.aE)throw n
else{this.b8(a,b)
p=window
p.toString
p="Removing corrupted element "+H.x(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(p)}}},
h_:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.b8(a,b)
window.toString
s="Removing element due to corrupted attributes on <"+d+">"
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(!m.a.aV(a)){m.b8(a,b)
window.toString
s="Removing disallowed element <"+e+"> from "+H.x(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(g!=null)if(!m.a.at(a,"is",g)){m.b8(a,b)
window.toString
s="Removing disallowed type extension <"+e+' is="'+g+'">'
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}s=f.ga0(f)
q=H.b(s.slice(0),H.kj(s))
for(p=f.ga0(f).length-1,s=f.a;p>=0;--p){if(p>=q.length)return H.d(q,p)
o=q[p]
r=m.a
n=J.nA(o)
H.kl(o)
if(!r.at(a,n,s.getAttribute(o))){window.toString
r="Removing disallowed attribute <"+e+" "+o+'="'+H.x(s.getAttribute(o))+'">'
n=typeof console!="undefined"
n.toString
if(n)window.console.warn(r)
s.removeAttribute(o)}}if(t.aW.b(a)){s=a.content
s.toString
m.cD(s)}}}
W.kg.prototype={
$2:function(a,b){var s,r,q,p,o=this.a,n=a.nodeType
n.toString
switch(n){case 1:o.h0(a,b)
break
case 8:case 11:case 3:case 4:break
default:o.b8(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){n=r.nextSibling
q=s
q=n==null?q!=null:n!==q
n=q}else n=!1
if(n){n=P.lb("Corrupt HTML")
throw H.c(n)}}catch(p){H.aj(p)
n=s;++o.b
q=n.parentNode
if(a!==q){if(q!=null)q.removeChild(n).toString}else a.removeChild(n).toString
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:33}
W.fN.prototype={}
W.fP.prototype={}
W.fQ.prototype={}
W.fR.prototype={}
W.fS.prototype={}
W.fX.prototype={}
W.fY.prototype={}
W.h0.prototype={}
W.h1.prototype={}
W.h4.prototype={}
W.h5.prototype={}
W.h6.prototype={}
W.h7.prototype={}
W.h8.prototype={}
W.h9.prototype={}
W.hc.prototype={}
W.hd.prototype={}
W.hf.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.hh.prototype={}
W.hi.prototype={}
W.hn.prototype={}
W.ht.prototype={}
W.hu.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.hv.prototype={}
W.hw.prototype={}
W.hD.prototype={}
W.hE.prototype={}
W.hF.prototype={}
W.hG.prototype={}
W.hH.prototype={}
W.hI.prototype={}
W.hJ.prototype={}
W.hK.prototype={}
W.hL.prototype={}
W.hM.prototype={}
P.k4.prototype={
ck:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bD:function(a){var s,r,q,p,o,n=this,m={}
if(a==null)return a
if(H.kr(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.Y)return new Date(a.a)
if(t.fJ.b(a))throw H.c(P.jt("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.fK.b(a))return a
if(t.bX.b(a))return a
if(t.x.b(a))return a
if(t.bZ.b(a)||t.dE.b(a)||t.bu.b(a))return a
if(t.f.b(a)){s=n.ck(a)
r=n.b
q=r.length
if(s>=q)return H.d(r,s)
p=m.a=r[s]
if(p!=null)return p
p={}
m.a=p
if(s>=q)return H.d(r,s)
r[s]=p
J.ea(a,new P.k6(m,n))
return m.a}if(t.r.b(a)){s=n.ck(a)
m=n.b
if(s>=m.length)return H.d(m,s)
p=m[s]
if(p!=null)return p
return n.hu(a,s)}if(t.eH.b(a)){s=n.ck(a)
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
n.hK(a,new P.k7(m,n))
return m.b}throw H.c(P.jt("structured clone of other type"))},
hu:function(a,b){var s,r,q=J.bM(a),p=q.gl(a),o=new Array(p)
o.toString
s=this.b
if(b>=s.length)return H.d(s,b)
s[b]=o
for(r=0;r<p;++r){s=this.bD(q.h(a,r))
if(r>=o.length)return H.d(o,r)
o[r]=s}return o}}
P.k6.prototype={
$2:function(a,b){this.a.a[a]=this.b.bD(b)},
$S:10}
P.k7.prototype={
$2:function(a,b){this.a.b[a]=this.b.bD(b)},
$S:31}
P.dV.prototype={$ibA:1,
gdn:function(a){return this.a}}
P.km.prototype={
$1:function(a){this.a.push(P.mI(a))},
$S:30}
P.kw.prototype={
$2:function(a,b){this.a[a]=P.mI(b)},
$S:10}
P.k5.prototype={
hK:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
b.$2(p,a[p])}}}
P.eq.prototype={
gb6:function(){var s=this.b,r=H.V(s)
return new H.aT(new H.b_(s,new P.ik(),r.J("b_<k.E>")),new P.il(),r.J("aT<k.E,C>"))},
E:function(a,b){C.b.E(P.iz(this.gb6(),!1,t.h),b)},
m:function(a,b,c){var s=this.gb6()
J.nz(s.b.$1(J.hQ(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b).toString},
gl:function(a){return J.aM(this.gb6().a)},
h:function(a,b){var s=this.gb6()
return s.b.$1(J.hQ(s.a,b))},
gP:function(a){var s=P.iz(this.gb6(),!1,t.h)
return new J.ak(s,s.length)}}
P.ik.prototype={
$1:function(a){return t.h.b(a)},
$S:28}
P.il.prototype={
$1:function(a){return t.h.a(a)},
$S:59}
P.he.prototype={
gcz:function(a){return this.$ti.c.a(this.a+this.c)},
gdk:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
q:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.I.b(b)){s=o.a
r=J.aL(b)
if(s===r.gby(b)){q=o.b
if(q===r.gbB(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gcz(b)&&p.a(q+o.d)===r.gdk(b)}else s=!1}else s=!1}else s=!1
return s},
gF:function(a){var s=this,r=s.a,q=C.c.gF(r),p=s.b,o=C.c.gF(p),n=s.$ti.c
r=C.c.gF(n.a(r+s.c))
p=C.c.gF(n.a(p+s.d))
return H.oo(H.je(H.je(H.je(H.je(0,q),o),r),p))}}
P.a8.prototype={
gby:function(a){return this.a},
gbB:function(a){return this.b},
gaL:function(a){return this.c},
gaF:function(a){return this.d}}
P.aS.prototype={$iaS:1}
P.eB.prototype={
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
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$in:1,
$ij:1,
$ip:1}
P.aV.prototype={$iaV:1}
P.eR.prototype={
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
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$in:1,
$ij:1,
$ip:1}
P.iZ.prototype={
gl:function(a){return a.length}}
P.c8.prototype={$ic8:1}
P.fd.prototype={
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
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$in:1,
$ij:1,
$ip:1}
P.o.prototype={
gbq:function(a){return new P.eq(a,new W.a5(a))},
ae:function(a,b,c,d){var s,r,q,p,o=H.b([],t.Q)
o.push(W.mq(null))
o.push(W.mv())
o.push(new W.hr())
c=new W.hC(new W.d9(o))
s='<svg version="1.1">'+b+"</svg>"
o=document
r=o.body
r.toString
q=C.p.hv(r,s,c)
o=o.createDocumentFragment()
o.toString
r=new W.a5(q)
p=r.gaM(r)
for(;r=p.firstChild,r!=null;)o.appendChild(r).toString
return o},
$io:1}
P.aX.prototype={$iaX:1}
P.fq.prototype={
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
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$in:1,
$ij:1,
$ip:1}
P.h2.prototype={}
P.h3.prototype={}
P.ha.prototype={}
P.hb.prototype={}
P.ho.prototype={}
P.hp.prototype={}
P.hx.prototype={}
P.hy.prototype={}
P.hU.prototype={
gl:function(a){return a.length}}
P.ef.prototype={
h:function(a,b){return P.bo(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bo(s.value[1]))}},
ga0:function(a){var s=H.b([],t.s)
this.E(a,new P.hV(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Not supported"))},
$iH:1}
P.hV.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
P.eg.prototype={
gl:function(a){return a.length}}
P.b4.prototype={}
P.eS.prototype={
gl:function(a){return a.length}}
P.fK.prototype={}
P.c7.prototype={
ih:function(a,b,c,d,e,f,g){var s
if(t.x.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.q6(g))
return}if(t.fS.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.bQ("Incorrect number or type of arguments"))},
$ic7:1}
P.f8.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=P.bo(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$in:1,
$ij:1,
$ip:1}
P.hk.prototype={}
P.hl.prototype={}
K.aN.prototype={
aG:function(a,b){return!0},
i:function(a){return"all"},
$iaU:1}
K.cN.prototype={
aG:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)if(s[q].aG(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q},
$iaU:1}
K.ac.prototype={
aG:function(a,b){return!this.eg(0,b)},
i:function(a){return"!["+this.bI(0)+"]"}}
K.f_.prototype={
aG:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var s=H.ay(this.a),r=H.ay(this.b)
return s+".."+r},
$iaU:1}
K.u.prototype={
p:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.f("May not create a Set with zero characters."))
s=new H.X(t.fX)
for(r=new H.bc(a,a.gl(a)),q=H.V(r).c;r.u();)s.m(0,q.a(r.d),!0)
p=P.iz(s.ga0(s),!0,t.S)
C.b.ef(p)
this.a=p},
aG:function(a,b){return C.b.A(this.a,b)},
i:function(a){return P.fe(this.a,0,null)},
$iaU:1}
L.f9.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.dm(this.a.k(0,b),H.b([],t.z))
s.push(p)
return p},
hF:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.aG(0,a))return p}return null},
i:function(a){return this.b},
d5:function(){var s,r,q,p,o,n,m=this,l=""+("("+m.b+")"),k=m.d
if(k!=null){l+=" => ["+k.b+"]"
k=m.a.c
s=m.d
if(k.A(0,s==null?null:s.b))l+=" (consume)"
s=m.d
if(s==null)s=null
else{s=s.c
s=s.ga0(s)}s=J.aD(s==null?H.b([],t.s):s)
for(;s.u();){r=s.gB(s)
l+="\n"
q=m.d
p=q==null?null:q.c.h(0,r)
if(p==null)p=""
l+="  -- "+r+" => ["+p+"]"
if(k.A(0,p))l+=" (consume)"}}for(k=m.c,s=k.length,o=0;o<k.length;k.length===s||(0,H.q)(k),++o){n=k[o]
l+="\n"
l+="  -- "+(n.b.b+": "+n.bI(0))}return l.charCodeAt(0)==0?l:l}}
L.fn.prototype={
i:function(a){var s=H.lD(this.b,"\n","\\n"),r=H.lD(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fo.prototype={
aI:function(a,b,c){var s,r,q
for(s=c.length,r=this.c,q=0;q<c.length;c.length===s||(0,H.q)(c),++q)r.m(0,c[q],b)},
i:function(a){return this.b}}
L.jl.prototype={
k:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.f9(this,b,H.b([],t.ab))
s.m(0,b,r)}return r},
O:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.fo(a,P.S(s,s))
r.m(0,a,q)}return q},
cB:function(a){return this.im(a)},
im:function(a){var s=this
return P.pv(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2
return function $async$cB(a3,a4){if(a3===1){o=a4
q=p}while(true)switch(q){case 0:c=s.d
b=t.t
a0=H.b([],b)
a1=H.b([],b)
a2=H.b([],b)
n=H.V(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a2.length!==0)h=C.b.cu(a2,0)
else{if(!r.u()){q=3
break}h=n.a(r.d)}a1.push(h);++k
g=c==null
f=g?null:c.hF(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.fe(a1,0,null)
throw H.c(P.f("Untokenizable string [state: "+H.x(g?null:c.b)+", index "+k+']: "'+e+'"'))}if(!!a1.fixed$length)H.h(P.B("removeRange"))
P.bh(0,i,a1.length)
a1.splice(0,i-0)
C.b.ab(a2,a1)
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
if(g!=null){e=P.fe(a0,0,null)
g=c.d
if(g==null)l=null
else{d=g.c.h(0,e)
g=new L.fn(d==null?g.b:d,e,k)
l=g}i=a1.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.A(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.oE()
case 1:return P.oF(o)}}},t.bJ)},
i:function(a){var s,r=new P.a_(""),q=this.d
if(q!=null)r.a=""+(q.d5()+"\n")
for(q=this.a,q=q.gip(q),q=q.gP(q);q.u();){s=q.gB(q)
if(s!=this.d)r.a+=H.x(s==null?null:s.d5())+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.dm.prototype={
i:function(a){return this.b.b+": "+this.bI(0)}}
O.al.prototype={
cE:function(a,b,c){this.b=b
this.c=a},
bl:function(a,b){return this.cE(a,null,b)},
fG:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
ep:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gl:function(a){return this.a.length},
gP:function(a){var s=this.a
return new J.ak(s,s.length)},
I:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.V(q).J("w<al.T>")
if(q.fG(H.b([b],p))){s=q.a
r=s.length
s.push(b)
q.ep(r,H.b([b],p))}},
$ij:1}
O.d4.prototype={
gl:function(a){return this.a.length},
gv:function(){var s=this.b
return s==null?this.b=D.U():s},
aP:function(){var s=this.b
return s==null?null:s.K(null)},
ga1:function(a){var s=this.a
if(s.length>0)return C.b.gaw(s)
else return V.bC()},
e1:function(a){this.a.push(a)
this.aP()},
cr:function(){var s=this.a
if(s.length>0){s.pop()
this.aP()}}}
E.hY.prototype={}
E.by.prototype={
saj:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().L(0,s.gdX())
if(b!=null)b.gv().n(0,s.gdX())
s.aH(new D.J("shape",r,b))}},
sbe:function(a){var s,r,q=this
if(!J.M(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gv().L(0,q.gdV())
if(a!=null)a.gv().n(0,q.gdV())
r=q.r
q.aH(new D.J("mover",s,r))}},
aK:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.a
if(!J.M(o,q.x)){s=q.x
q.x=o
q.aH(new D.J("matrix",s,o))}for(p=q.y.a,p=new J.ak(p,p.length),r=H.V(p).c;p.u();)r.a(p.d).aK(0,b)},
aZ:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.ga1(q))
else o.push(p.M(0,q.ga1(q)))
q.aP()
a.e2(r.f)
s=C.b.gaw(a.dy)
if(r.d!=null)if(s!=null)s.i9(a,r)
for(p=r.y.a,p=new J.ak(p,p.length),o=H.V(p).c;p.u();)o.a(p.d).aZ(a)
a.e0()
q.cr()},
aH:function(a){var s=this.z
return s==null?null:s.K(a)},
Y:function(){return this.aH(null)},
dY:function(a){this.e=null
this.aH(a)},
hZ:function(){return this.dY(null)},
dW:function(a){return this.aH(a)},
hY:function(){return this.dW(null)},
dU:function(a){return this.aH(a)},
hV:function(){return this.dU(null)},
hU:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gdT(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bW()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.Y()},
hX:function(a,b){var s,r
for(s=b.gP(b),r=this.gdT();s.u();)s.gB(s).gv().L(0,r)
this.Y()},
i:function(a){return"Unnamed entity"}}
E.bT.prototype={
i:function(a){return this.b}}
E.c5.prototype={
i:function(a){return this.b}}
E.fU.prototype={}
E.j1.prototype={
eo:function(a,b){var s=this
s.cy.gv().n(0,new E.j2(s))
s.db.gv().n(0,new E.j3(s))
s.dx.gv().n(0,new E.j4(s))},
gi5:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.ga1(q).M(0,s.ga1(s))
q=s}return q},
e2:function(a){var s=this.dy
return s.push(a==null?C.b.gaw(s):a)},
e0:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.j2.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:0}
E.j3.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:0}
E.j4.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:0}
E.fm.prototype={
cK:function(a){this.e4()},
cJ:function(){return this.cK(null)},
ghL:function(){var s,r=this,q=Date.now(),p=C.c.a2(P.lP(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.Y(q,!1)
return s/p},
d_:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.cm(r*o)
r=s.clientHeight
r.toString
p=C.d.cm(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.ma(C.m,this.gib())}},
e4:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.E.eO(s)
r=W.mO(new E.ji(this),t.H)
r.toString
C.E.fX(s,r)}},
i8:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.d_()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.Y(p,!1)
q.y=P.lP(p-q.r.a).a*0.000001
p=q.cy
C.b.sl(p.a,0)
p.aP()
p=q.db
C.b.sl(p.a,0)
p.aP()
p=q.dx
C.b.sl(p.a,0)
p.aP()
p=q.dy
C.b.sl(p,0)
p.push(null)
m.aZ(q)}q=n.Q
if(q!=null)q.K(null)}catch(o){s=H.aj(o)
r=H.ly(o)
P.lC("Error: "+H.x(s))
P.lC("Stack: "+H.x(r))
throw H.c(s)}}}
E.ji.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.i8()}},
$S:32}
Z.fG.prototype={}
Z.bU.prototype={
c4:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.aj(q)
r=P.f('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.x(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.jQ.prototype={}
Z.cz.prototype={
aX:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
c4:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].c4(a)}},
io:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
aZ:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=t.s,l=H.b([],m)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
l.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.dc(p.c)+"'")+"]")}o=H.b([],m)
for(m=this.c,s=m.length,q=0;q<m.length;m.length===s||(0,H.q)(m),++q){n=m[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(l,", ")+"\nAttrs:   "+C.b.j(o,", ")}}
Z.c_.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.dc(this.c)+"'")+"]"}}
Z.bJ.prototype={
gcF:function(a){var s=this.a,r=(s&$.bs().a)!==0?3:0
if((s&$.br().a)!==0)r+=3
if((s&$.bq().a)!==0)r+=3
if((s&$.bO().a)!==0)r+=2
if((s&$.bP().a)!==0)r+=3
if((s&$.e8().a)!==0)r+=3
if((s&$.e9().a)!==0)r+=4
if((s&$.cw().a)!==0)++r
return(s&$.bp().a)!==0?r+4:r},
hl:function(a){var s,r=$.bs(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.br()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bq()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bO()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bP()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.e8()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.e9()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cw()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bp()
if((q&r.a)!==0)if(s===a)return r
return $.no()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bJ))return!1
return this.a===b.a},
i:function(a){var s=H.b([],t.s),r=this.a
if((r&$.bs().a)!==0)s.push("Pos")
if((r&$.br().a)!==0)s.push("Norm")
if((r&$.bq().a)!==0)s.push("Binm")
if((r&$.bO().a)!==0)s.push("Txt2D")
if((r&$.bP().a)!==0)s.push("TxtCube")
if((r&$.e8().a)!==0)s.push("Clr3")
if((r&$.e9().a)!==0)s.push("Clr4")
if((r&$.cw().a)!==0)s.push("Weight")
if((r&$.bp().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.i_.prototype={}
D.bW.prototype={
n:function(a,b){var s=this.a
return(s==null?this.a=H.b([],t.a):s).push(b)},
L:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.b.A(p,b)
if(p===!0){p=r.a
p=p==null?q:C.b.L(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.b.A(p,b)
if(p===!0){p=r.b
p=p==null?q:C.b.L(p,b)
s=p===!0||s}return s},
K:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.Z():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.b.E(P.iz(p,!0,t.h2),new D.ih(s))
r=q.b
if(r!=null){q.b=H.b([],t.a)
C.b.E(r,new D.ii(s))}return!0},
hB:function(){return this.K(null)},
am:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.K(s)}}}}
D.ih.prototype={
$1:function(a){a.$1(this.a)},
$S:27}
D.ii.prototype={
$1:function(a){a.$1(this.a)},
$S:27}
D.Z.prototype={}
D.b8.prototype={}
D.b9.prototype={}
D.J.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.x(this.d)+" => "+H.x(this.e)}}
X.cA.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cA))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.eA.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eA))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.iv.prototype={}
X.cY.prototype={}
X.iB.prototype={
b5:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.a1(o.a+b.a,o.b+b.b)
o=q.a.gbr()
s=$.ag
if(s==null)s=$.ag=new V.a1(0,0)
r=q.x
q.z=new P.Y(p,!1)
q.x=n
return new X.c3(a,s,r,o,n)},
cq:function(a,b){this.r=a.a
return!1},
bg:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bf:function(a,b){var s=this.d
if(s==null)return!1
s.K(this.b5(a,b))
return!0},
i2:function(a){return!1},
ft:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.K(new X.cY(c,q.a.gbr(),b))
q.y=new P.Y(s,!1)
s=$.ag
q.x=s==null?$.ag=new V.a1(0,0):s}}
X.bf.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.bf))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
i:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.b.j(s,"+")}}
X.c3.prototype={}
X.iU.prototype={
bQ:function(a,b,c){var s=this,r=new P.Y(Date.now(),!1),q=s.a.gbr(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.c3(a,p,o,q,b)},
cq:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.K(this.bQ(a,b,!0))
return!0},
bg:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.K(r.bQ(a,b,!0))
return!0},
bf:function(a,b){var s=this.d
if(s==null)return!1
s.K(this.bQ(a,b,!1))
return!0},
i3:function(a,b){return!1}}
X.eZ.prototype={}
X.dl.prototype={}
X.jn.prototype={
b5:function(a,b){var s,r,q,p,o=this,n=new P.Y(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.ag
if(r==null){r=new V.a1(0,0)
$.ag=r
s=r}else s=r}r=o.a.gbr()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.dl(q,p,r,s)},
i1:function(a){var s=this.b
if(s==null)return!1
s.K(this.b5(a,!0))
return!0},
i_:function(a){var s=this.c
if(s==null)return!1
s.K(this.b5(a,!0))
return!0},
i0:function(a){var s=this.d
if(s==null)return!1
s.K(this.b5(a,!1))
return!0}}
X.fD.prototype={
gbx:function(a){var s=this.b
return s==null?this.b=new X.iv(P.cU(t.S)):s},
gal:function(){var s,r=this.c
if(r==null){r=$.ag
if(r==null){r=$.ag=new V.a1(0,0)
s=r}else s=r
r=this.c=new X.iU(this,r,s,new P.Y(Date.now(),!1),new P.Y(Date.now(),!1))}return r},
gak:function(){var s=this.d
if(s==null){s=$.ag
if(s==null)s=$.ag=new V.a1(0,0)
s=this.d=new X.iB(this,s,new P.Y(Date.now(),!1),new P.Y(Date.now(),!1))}return s},
gb0:function(){var s,r=this.e
if(r==null){r=$.ag
if(r==null){r=$.ag=new V.a1(0,0)
s=r}else s=r
r=this.e=new X.jn(this,r,s,new P.Y(Date.now(),!1),new P.Y(Date.now(),!1))}return r},
gbr:function(){var s=this.a
return V.m3(0,0,C.i.gdl(s).c,C.i.gdl(s).d)},
cR:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.eA(p,new X.bf(s,r,q))},
aT:function(a){var s
this.gbx(this)
s=a.ctrlKey
s.toString
if(!s)a.metaKey.toString
a.altKey.toString
a.shiftKey.toString},
bZ:function(a){var s=a.ctrlKey
if(s!==!0)a.metaKey
this.gbx(this)
a.altKey
a.shiftKey},
aC:function(a){var s,r,q,p
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
b7:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.aq(r,s)},
bV:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=H.b([],t.cG)
r=a.touches
if(r==null)r=H.b([],t.gT)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.an(n)
m=o.pageY
m.toString
C.d.an(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.an(l)
l=o.pageY
l.toString
l=C.d.an(l)
k=j.top
k.toString
s.push(new V.a1(n-m,l-k))}return s},
az:function(a){var s,r,q,p
if(a==null)return new X.cA(0,new X.bf(!1,!1,!1))
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
return new X.cA(s,new X.bf(r,q,p))},
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
fm:function(a){return this.f=!0},
f9:function(a){return this.f=!1},
fg:function(a){if(this.f&&this.bR(a))a.preventDefault()},
fq:function(a){var s,r=this
if(!r.f)return
s=r.cR(a)
r.gbx(r).d.n(0,s.a)},
fo:function(a){var s,r=this
if(!r.f)return
s=r.cR(a)
r.gbx(r).d.L(0,s.a)},
fv:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aT(a)
if(p.x){s=p.az(a)
r=p.b7(a)
if(p.gak().cq(s,r))a.preventDefault()
return}s=p.az(a)
q=p.aC(a)
if(p.gal().cq(s,q))a.preventDefault()},
fB:function(a){var s,r,q,p=this
p.aT(a)
s=p.az(a)
if(p.x){r=p.b7(a)
if(p.gak().bg(s,r))a.preventDefault()
return}q=p.aC(a)
if(p.gal().bg(s,q))a.preventDefault()},
fk:function(a){var s,r,q,p=this
if(!p.bR(a)){p.aT(a)
s=p.az(a)
if(p.x){r=p.b7(a)
if(p.gak().bg(s,r))a.preventDefault()
return}q=p.aC(a)
if(p.gal().bg(s,q))a.preventDefault()}},
fz:function(a){var s,r,q,p=this
p.aT(a)
s=p.az(a)
if(p.x){r=p.b7(a)
if(p.gak().bf(s,r))a.preventDefault()
return}q=p.aC(a)
if(p.gal().bf(s,q))a.preventDefault()},
fi:function(a){var s,r,q,p=this
if(!p.bR(a)){p.aT(a)
s=p.az(a)
if(p.x){r=p.b7(a)
if(p.gak().bf(s,r))a.preventDefault()
return}q=p.aC(a)
if(p.gal().bf(s,q))a.preventDefault()}},
fD:function(a){var s,r,q=this
q.aT(a)
s=new V.aq(C.D.ghy(a),C.D.ghz(a)).M(0,q.Q)
if(q.x){if(q.gak().i2(s))a.preventDefault()
return}r=q.aC(a)
if(q.gal().i3(s,r))a.preventDefault()},
fF:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.az(q.y)
r=q.aC(q.y)
q.gak().ft(s,r,p)}},
fS:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bZ(a)
s=r.bV(a)
if(r.gb0().i1(s))a.preventDefault()},
fO:function(a){var s
this.bZ(a)
s=this.bV(a)
if(this.gb0().i_(s))a.preventDefault()},
fQ:function(a){var s
this.bZ(a)
s=this.bV(a)
if(this.gb0().i0(s))a.preventDefault()}}
D.bV.prototype={
as:function(a){var s=this.r
return s==null?null:s.K(a)},
fa:function(){return this.as(null)},
$iav:1}
D.cS.prototype={
gv:function(){var s=this.y
return s==null?this.y=D.U():s},
gdN:function(){var s=this.z
return s==null?this.z=D.U():s},
as:function(a){var s=this.y
return s==null?null:s.K(a)},
cX:function(a){var s=this.z
return s==null?null:s.K(a)},
fs:function(){return this.cX(null)},
fI:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)if(this.er(a[r]))return!1
return!0},
f3:function(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=this.gcW(),q=this.f,p=t.a,o=0;o<b.length;b.length===s||(0,H.q)(b),++o){n=b[o]
q.push(n)
m=n.r
if(m==null)m=n.r=new D.bW()
l=m.a;(l==null?m.a=H.b([],p):l).push(r)}this.as(new D.b8())},
fM:function(a,b){var s,r,q,p
for(s=b.gP(b),r=this.gcW(),q=this.e;s.u();){p=s.gB(s)
C.b.L(q,p)
p.gv().L(0,r)}this.as(new D.b9())},
er:function(a){var s=C.b.A(this.f,a)
return s}}
V.W.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.W))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
V.aP.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aP))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.E(s.a,3,0)+", "+V.E(s.b,3,0)+", "+V.E(s.c,3,0)+", "+V.E(s.d,3,0)+"]"},
w:function(){var s=this
return"["+V.E(s.a,3,0)+", "+V.E(s.b,3,0)+", "+V.E(s.c,3,0)+", "+V.E(s.d,3,0)+"]"}}
V.ie.prototype={}
V.d3.prototype={
a9:function(a,b){var s=this,r=H.b([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.n)
return r},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.d3))return!1
s=b.a
$.G().toString
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
V.bd.prototype={
a9:function(a,b){var s=this,r=H.b([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.n)
return r},
dL:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.G().toString
if(Math.abs(b3-0)<1e-9)return V.bC()
s=1/b3
r=-l
q=-a2
return V.be((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
M:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.be(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bC:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.D(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bi:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.T(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bd))return!1
s=b.a
$.G().toString
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
G:function(a){var s,r,q,p,o,n=this,m=t.n,l=V.cv(H.b([n.a,n.e,n.y,n.cx],m),3,0),k=V.cv(H.b([n.b,n.f,n.z,n.cy],m),3,0),j=V.cv(H.b([n.c,n.r,n.Q,n.db],m),3,0),i=V.cv(H.b([n.d,n.x,n.ch,n.dx],m),3,0)
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
ax:function(a){return new V.aq(a.a-this.a,a.b-this.b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"},
w:function(){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.T.prototype={
V:function(a,b){return new V.T(this.a+b.a,this.b+b.b,this.c+b.c)},
aN:function(a,b){return new V.T(this.a-b.a,this.b-b.b,this.c-b.c)},
M:function(a,b){return new V.T(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.T))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"},
w:function(){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
V.bF.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bF))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.E(s.a,3,0)+", "+V.E(s.b,3,0)+", "+V.E(s.c,3,0)+", "+V.E(s.d,3,0)+"]"},
w:function(){var s=this
return"["+V.E(s.a,3,0)+", "+V.E(s.b,3,0)+", "+V.E(s.c,3,0)+", "+V.E(s.d,3,0)+"]"}}
V.f1.prototype={
gaY:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.f1))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.E(s.a,3,0)+", "+V.E(s.b,3,0)+", "+V.E(s.c,3,0)+", "+V.E(s.d,3,0)+"]"}}
V.aq.prototype={
co:function(a){return Math.sqrt(this.a8(this))},
a8:function(a){return this.a*a.a+this.b*a.b},
M:function(a,b){return new V.aq(this.a*b,this.b*b)},
ap:function(a,b){var s
$.G().toString
if(Math.abs(b-0)<1e-9){s=$.jF
return s==null?$.jF=new V.aq(0,0):s}return new V.aq(this.a/b,this.b/b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aq))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.D.prototype={
co:function(a){return Math.sqrt(this.a8(this))},
a8:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cp:function(a,b){return new V.D(V.hO(this.a,a.a,b),V.hO(this.b,a.b,b),V.hO(this.c,a.c,b))},
H:function(){var s=this,r=Math.sqrt(s.a8(s))
if(r===1)return s
return s.ap(0,r)},
aE:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.D(s*r-q*p,q*o-n*r,n*p-s*o)},
V:function(a,b){return new V.D(this.a+b.a,this.b+b.b,this.c+b.c)},
b1:function(a){return new V.D(-this.a,-this.b,-this.c)},
M:function(a,b){return new V.D(this.a*b,this.b*b,this.c*b)},
ap:function(a,b){$.G().toString
if(Math.abs(b-0)<1e-9)return V.dz()
return new V.D(this.a/b,this.b/b,this.c/b)},
dM:function(){$.G().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.D))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"},
w:function(){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
U.i0.prototype={
bJ:function(a){var s=V.qw(a,this.c,this.b)
return s},
gv:function(){var s=this.y
return s==null?this.y=D.U():s},
a_:function(a){var s=this.y
return s==null?null:s.K(a)},
sea:function(a,b){},
sdP:function(a){var s,r=this,q=r.b
$.G().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bJ(s)}r.a_(new D.J("maximumLocation",q,r.b))}},
sdR:function(a){var s,r=this,q=r.c
$.G().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bJ(s)}r.a_(new D.J("minimumLocation",q,r.c))}},
sa3:function(a,b){var s,r=this
b=r.bJ(b)
s=r.d
$.G().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.a_(new D.J("location",s,b))}},
sdQ:function(a){var s,r,q=this,p=q.e
$.G().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.a_(new D.J("maximumVelocity",p,a))}},
sa5:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.G().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.a_(new D.J("velocity",r,a))}},
sdm:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.G().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.a_(new D.J("dampening",s,a))}},
aK:function(a,b){var s,r,q,p=this,o=p.f
$.G().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa3(0,p.d+s*b)
o=p.x
$.G().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sa5(s)}}}
U.cC.prototype={
gv:function(){var s=this.b
return s==null?this.b=D.U():s},
bj:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cC))return!1
return this.a.q(0,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.bY.prototype={
gv:function(){var s=this.e
return s==null?this.e=D.U():s},
a_:function(a){var s=this.e
return s==null?null:s.K(a)},
aq:function(){return this.a_(null)},
f1:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gbn(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.gv()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}this.a_(new D.b8())},
fK:function(a,b){var s,r
for(s=b.gP(b),r=this.gbn();s.u();)s.gB(s).gv().L(0,r)
this.a_(new D.b9())},
bj:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.ak(o,o.length),n=H.V(o).c,s=null;o.u();){r=n.a(o.d)
if(r!=null){q=r.bj(0,b,c)
s=s==null?q:q.M(0,s)}}p.f=s==null?V.bC():s
o=p.e
if(o!=null)o.am(0)}return p.f},
q:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bY))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(p>=q.length)return H.d(q,p)
if(!J.M(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$iab:1}
U.ab.prototype={}
U.dy.prototype={
gv:function(){var s=this.fx
return s==null?this.fx=D.U():s},
a_:function(a){var s=this.fx
return s==null?null:s.K(a)},
aq:function(){return this.a_(null)},
hm:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
s=a.gal()
r=s.b
s=r==null?s.b=D.U():r
s.n(0,q.geV())
s=a.gal()
r=s.d
s=r==null?s.d=D.U():r
s.n(0,q.geX())
s=a.gal()
r=s.c
s=r==null?s.c=D.U():r
s.n(0,q.geZ())
s=a.gak()
r=s.f
s=r==null?s.f=D.U():r
s.n(0,q.geQ())
s=a.gak()
r=s.d
s=r==null?s.d=D.U():r
s.n(0,q.geS())
s=a.gb0()
r=s.b
s=r==null?s.b=D.U():r
s.n(0,q.ghb())
s=a.gb0()
r=s.d
s=r==null?s.d=D.U():r
s.n(0,q.gh9())
s=a.gb0()
r=s.c
s=r==null?s.c=D.U():r
s.n(0,q.gh7())
return!0},
aS:function(a){return new V.aq(a.a,a.b)},
eW:function(a){var s=this
t.Z.a(a)
if(!s.d.q(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
eY:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ax(a.d)
if(s.a8(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aS(a.y.ax(r).M(0,2).ap(0,s.gaY()))
p=n.c
p.sa3(0,-q.a*2.5+n.cy)
o=n.b
o.sa3(0,-q.b*2.5+n.db)
o.sa5(0)
p.sa5(0)
n.dx=n.aS(a.z.ax(r).M(0,2).ap(0,s.gaY()))
n.aq()},
f_:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a8(s)>0.0001){r.c.sa5(-r.dx.a*10*2.5)
r.b.sa5(-r.dx.b*10*2.5)
r.aq()}},
eR:function(a){var s=this
if(t.bv.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eT:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.q(0,a.x.b))return
s=a.c
r=a.d
q=n.aS(a.y.ax(r).M(0,2).ap(0,s.gaY()))
p=n.c
p.sa3(0,-q.a*2.5+n.cy)
o=n.b
o.sa3(0,-q.b*2.5+n.db)
o.sa5(0)
p.sa5(0)
n.dx=n.aS(a.z.ax(r).M(0,2).ap(0,s.gaY()))
n.aq()},
hc:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
ha:function(a){var s,r,q,p,o,n=this
t.dr.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ax(a.d)
if(s.a8(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aS(a.y.ax(r).M(0,2).ap(0,s.gaY()))
p=n.c
p.sa3(0,-q.a*2.5+n.cy)
o=n.b
o.sa3(0,-q.b*2.5+n.db)
o.sa5(0)
p.sa5(0)
n.dx=n.aS(a.z.ax(r).M(0,2).ap(0,s.gaY()))
n.aq()},
h8:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a8(s)>0.0001){r.c.sa5(-r.dx.a*10*2.5)
r.b.sa5(-r.dx.b*10*2.5)
r.aq()}},
bj:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(o<n){p.dy=n
s=b.y
o=p.c
o.aK(0,s)
n=p.b
n.aK(0,s)
n=V.lX(n.d)
o=o.d
r=Math.cos(o)
q=Math.sin(o)
p.fr=n.M(0,V.be(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iab:1}
M.eo.prototype={
ay:function(a){var s=this.y
return s==null?null:s.K(a)},
es:function(){return this.ay(null)},
fc:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gar(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bW()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.ay(new D.b8())},
fe:function(a,b){var s,r
for(s=b.gP(b),r=this.gar();s.u();)s.gB(s).gv().L(0,r)
this.ay(new D.b9())},
se6:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gv().L(0,r.gar())
s=r.d
r.d=a
if(a!=null)a.gv().n(0,r.gar())
r.ay(new D.J("technique",s,r.d))}},
gv:function(){var s=this.y
return s==null?this.y=D.U():s},
aZ:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.e2(d.d)
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
n=C.d.an(o.a*q)
m=C.d.an(o.b*p)
l=C.d.an(o.c*q)
a.c=l
o=C.d.an(o.d*p)
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
g=V.be(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.e1(g)
f=$.n9()
e=s.b
if(e!=null)f=e.bj(0,a,s).M(0,f)
a.db.e1(f)}s=d.d
if(s!=null)s.aK(0,a)
for(s=d.e.a,r=new J.ak(s,s.length),o=H.V(r).c;r.u();)o.a(r.d).aK(0,a)
for(s=new J.ak(s,s.length),r=H.V(s).c;s.u();)r.a(s.d).aZ(a)
if(d.b!=null){a.cy.cr()
a.db.cr()}a.e0()}}
A.ee.prototype={}
A.hT.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hC:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
hA:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.aH.prototype={
gao:function(a){var s=this.a?1:0
return s|0},
i:function(a){var s=this.a?1:0
return""+(s|0)},
q:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.aH))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.eF.prototype={
en:function(d7,d8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=null,d1=u.C,d2="Required uniform value, ",d3=", was not defined or used in shader.",d4=c9.x,d5=new P.a_(""),d6=d4.fr
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
A.pK(d4,d5)
A.pM(d4,d5)
A.pL(d4,d5)
A.pO(d4,d5)
A.pP(d4,d5)
A.pN(d4,d5)
A.pQ(d4,d5)
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
m=A.pJ(d4)
c9.c=n
c9.d=m
l=c9.cS(n,35633)
k=c9.cS(c9.d,35632)
s=c9.a
q=s.createProgram()
q.toString
c9.e=q
s.attachShader(c9.gaA(),l)
s.attachShader(c9.gaA(),k)
s.linkProgram(c9.gaA())
if(!H.mH(s.getProgramParameter(c9.gaA(),35714))){j=s.getProgramInfoLog(c9.gaA())
if(j==null)j="undefined log error"
s.deleteProgram(c9.e)
H.h(P.f("Failed to link shader: "+j))}c9.h3()
c9.h5()
c9.y=c9.gac(c9).h(0,"posAttr")
c9.Q=c9.gac(c9).h(0,"normAttr")
c9.z=c9.gac(c9).h(0,"binmAttr")
c9.ch=c9.gac(c9).h(0,"txt2DAttr")
c9.cx=c9.gac(c9).h(0,"txtCubeAttr")
c9.cy=c9.gac(c9).h(0,"bendAttr")
if(d4.dy)c9.fy=t.j.a(c9.gT().S(0,"invViewMat"))
if(d6)c9.db=t.j.a(c9.gT().S(0,"objMat"))
if(r)c9.dx=t.j.a(c9.gT().S(0,"viewObjMat"))
d6=t.j
c9.fr=d6.a(c9.gT().S(0,"projViewObjMat"))
if(d4.go)c9.dy=d6.a(c9.gT().S(0,"viewMat"))
if(d4.x1)c9.go=t.bK.a(c9.gT().S(0,"txt2DMat"))
if(d4.x2)c9.id=d6.a(c9.gT().S(0,"txtCubeMat"))
if(d4.y1)c9.k1=d6.a(c9.gT().S(0,"colorMat"))
c9.k3=H.b([],t.p)
s=d4.aW
if(s>0){c9.k2=t.w.a(c9.gT().S(0,"bendMatCount"))
for(i=0;i<s;++i){r=c9.k3
h=c9.r
if(h==null)H.h(P.f(d1))
q="bendValues["+i+"].mat"
g=h.h(0,q)
if(g==null)H.h(P.f(d2+q+d3))
r.push(d6.a(g))}}if(d4.a.a)c9.k4=t.g.a(c9.gT().S(0,"emissionClr"))
if(d4.b.a)c9.rx=t.g.a(c9.gT().S(0,"ambientClr"))
if(d4.c.a)c9.x2=t.g.a(c9.gT().S(0,"diffuseClr"))
if(d4.d.a)c9.aW=t.g.a(c9.gT().S(0,"invDiffuseClr"))
d6=d4.e.a
if(!d6)s=!1
else s=!0
if(s){c9.dv=t.v.a(c9.gT().S(0,"shininess"))
if(d6)c9.du=t.g.a(c9.gT().S(0,"specularClr"))}if(d4.db){c9.dw=t.bz.a(c9.gT().S(0,"envSampler"))
if(d4.r.a)c9.dz=t.g.a(c9.gT().S(0,"reflectClr"))
d6=d4.x.a
if(!d6)s=!1
else s=!0
if(s){c9.dA=t.v.a(c9.gT().S(0,"refraction"))
if(d6)c9.dB=t.g.a(c9.gT().S(0,"refractClr"))}}if(d4.y.a)c9.dC=t.v.a(c9.gT().S(0,"alpha"))
if(d4.k1){d6=d4.z
s=d6.length
if(s!==0){r=t.S
c9.cb=P.S(r,t.W)
c9.cc=P.S(r,t.O)
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
a9=a8}b.push(new A.dr(g,a2,a3,a9,a8,a7))}c9.cc.m(0,d,b)
a=c9.cb
h=c9.r
if(h==null)H.h(P.f(d1))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.h(P.f(d2+a0+d3))
a.m(0,d,r.a(g))}}d6=d4.Q
s=d6.length
if(s!==0){r=t.S
c9.cd=P.S(r,t.W)
c9.ce=P.S(r,t.d)
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
b.push(new A.ds(b2,b1,b0,g,a2,b3))}c9.ce.m(0,d,b)
a=c9.cd
h=c9.r
if(h==null)H.h(P.f(d1))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.h(P.f(d2+a0+d3))
a.m(0,d,r.a(g))}}d6=d4.ch
s=d6.length
if(s!==0){r=t.S
c9.cf=P.S(r,t.W)
c9.cg=P.S(r,t.m)
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
a9=a8}b.push(new A.du(g,a2,c0,a3,b3,c1,c2,a9,a8,a7))}c9.cg.m(0,d,b)
b4=c9.cf
h=c9.r
if(h==null)H.h(P.f(d1))
b5=c+"Count"
g=h.h(0,b5)
if(g==null)H.h(P.f(d2+b5+d3))
b4.m(0,d,r.a(g))}}d4=d4.cx
d6=d4.length
if(d6!==0){s=t.S
c9.ci=P.S(s,t.W)
c9.cj=P.S(s,t.R)
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
b.push(new A.dx(g,a2,a3,a4,b2,b1,c6,c5,c2,c8,c7,a9,a8,a7,b3,c1))}c9.cj.m(0,d,b)
a0=c9.ci
h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"Count"
g=h.h(0,a1)
if(g==null)H.h(P.f(d2+a1+d3))
a0.m(0,d,s.a(g))}}}},
h1:function(a,b){}}
A.b3.prototype={
i:function(a){return"barLight"+this.a}}
A.b5.prototype={
i:function(a){return"dirLight"+this.a}}
A.bg.prototype={
i:function(a){return"pointLight"+this.a}}
A.bi.prototype={
i:function(a){return"spotLight"+this.a}}
A.iF.prototype={
i:function(a){return this.bt}}
A.dr.prototype={}
A.ds.prototype={}
A.du.prototype={}
A.dx.prototype={}
A.df.prototype={
gac:function(a){var s=this.f
if(s==null)throw H.c(P.f("Must initialize the shader prior to getting the attributes."))
return s},
gT:function(){var s=this.r
if(s==null)throw H.c(P.f(u.C))
return s},
gaA:function(){var s=this.e
if(s==null)throw H.c(P.f(u.F))
return s},
cS:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.mH(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.f('Error compiling shader "'+H.x(q)+'": '+s))}return q},
h3:function(){var s,r,q,p,o=this,n=u.F,m=H.b([],t.eu),l=o.a,k=H.kk(l.getProgramParameter(o.gaA(),35721))
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
m.push(new A.ee(l,q,p))}o.f=new A.hT(m)},
h5:function(){var s,r,q,p,o,n,m=this,l=u.F,k=H.b([],t.dC),j=m.a,i=H.kk(j.getProgramParameter(m.gaA(),35718))
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
k.push(m.hw(o,n,q,p))}m.r=new A.js(k)},
aR:function(a,b,c){var s=this.a
if(a===1)return new A.ce(s,b,c)
else return A.ld(s,this.e,b,a,c)},
eL:function(a,b,c){var s=this.a
if(a===1)return new A.dv(s,b,c)
else return A.ld(s,this.e,b,a,c)},
eM:function(a,b,c){var s=this.a
if(a===1)return new A.dw(s,b,c)
else return A.ld(s,this.e,b,a,c)},
bp:function(a,b){return new P.fW(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
hw:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aR(b,c,d)
case 5121:return s.aR(b,c,d)
case 5122:return s.aR(b,c,d)
case 5123:return s.aR(b,c,d)
case 5124:return s.aR(b,c,d)
case 5125:return s.aR(b,c,d)
case 5126:return new A.dn(s.a,c,d)
case 35664:return new A.ft(s.a,c,d)
case 35665:return new A.dp(s.a,c,d)
case 35666:return new A.dq(s.a,c,d)
case 35667:return new A.fu(s.a,c,d)
case 35668:return new A.fv(s.a,c,d)
case 35669:return new A.fw(s.a,c,d)
case 35674:return new A.fx(s.a,c,d)
case 35675:return new A.dt(s.a,c,d)
case 35676:return new A.cf(s.a,c,d)
case 35678:return s.eL(b,c,d)
case 35680:return s.eM(b,c,d)
case 35670:throw H.c(s.bp("BOOL",c))
case 35671:throw H.c(s.bp("BOOL_VEC2",c))
case 35672:throw H.c(s.bp("BOOL_VEC3",c))
case 35673:throw H.c(s.bp("BOOL_VEC4",c))
default:throw H.c(P.f("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.a2.prototype={}
A.js.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
S:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.f("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.w()},
w:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.ce.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.fu.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.fv.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.fw.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.fs.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.dn.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.ft.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.dp.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.dq.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.fx.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.dt.prototype={
ai:function(a){var s=new Float32Array(H.cq(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.cf.prototype={
ai:function(a){var s=new Float32Array(H.cq(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.dv.prototype={
i:function(a){return"UniformSampler2D: "+this.c}}
A.dw.prototype={
i:function(a){return"UniformSamplerCube: "+this.c}}
F.ki.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cp(q.b,b).cp(q.d.cp(q.c,b),c)
a.sa3(0,new V.T(p.a,p.b,p.c))
a.se7(p.H())
q=1-b
s=1-c
a.sdi(new V.bF(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)},
$S:7}
F.kx.prototype={
$2:function(a,b){return V.hO(this.a,this.b,b)},
$S:18}
F.kz.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.hO(-1,1,c),n=this.a.$2(b,c)
q=-q*n
s=p*n
a.sa3(0,new V.T(q,s,o))
a.se7(new V.D(q,s,o).H())
a.sdi(new V.bF(1-c,2+c,-1,-1))},
$S:7}
F.kA.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:17}
F.kB.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:17}
F.kV.prototype={
$2:function(a,b){return 0},
$S:18}
F.kU.prototype={
$3:function(a,b,c){var s,r=this.b.$2(b,c)
if(typeof r!=="number")return H.mY(r)
s=a.f
r=(s!=null?new V.D(s.a,s.b,s.c):V.le()).H().M(0,this.a+r)
a.sa3(0,new V.T(r.a,r.b,r.c))},
$S:7}
F.kW.prototype={
$1:function(a){return new V.T(Math.cos(a),Math.sin(a),0)},
$S:14}
F.kK.prototype={
$1:function(a){var s=this.a*a,r=2+Math.cos(s),q=this.b*a
return new V.T(r*Math.cos(q)/2,r*Math.sin(q)/2,Math.sin(s)/2)},
$S:14}
F.ky.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.lG(l.$1(m),k)
k=J.lG(l.$1(m+3.141592653589793/n.c),k).aN(0,j)
s=new V.D(k.a,k.b,k.c).H()
r=$.mk
if(r==null){r=new V.D(1,0,0)
$.mk=r}q=s.aE(!s.q(0,r)?V.le():r).H()
r=q.aE(s).H()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.M(0,l*k)
k=q.M(0,o*k)
a.sa3(0,j.V(0,new V.T(l.a-k.a,l.b-k.b,l.c-k.c)))},
$S:7}
F.at.prototype={
aO:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.c(P.f("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.c_(a)
s.c0(b)
s.h2(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gR().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.Y()}},
ba:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.b.L(r.gR().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.Y()}}s.bW()
s.bX()
s.fV()},
c_:function(a){this.a=a
a.gR().b.push(this)},
c0:function(a){this.b=a
a.gR().c.push(this)},
h2:function(a){this.c=a
a.gR().d.push(this)},
bW:function(){var s=this.a
if(s!=null)C.b.L(s.gR().b,this)
this.a=null},
bX:function(){var s=this.b
if(s!=null)C.b.L(s.gR().c,this)
this.b=null},
fV:function(){var s=this.c
if(s!=null)C.b.L(s.gR().d,this)
this.c=null},
eE:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.dz()
if(n!=null)q=q.V(0,n)
if(s!=null)q=q.V(0,s)
if(r!=null)q=q.V(0,r)
if(q.dM())return p
return q.H()},
eG:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aN(0,n)
q=new V.D(o.a,o.b,o.c).H()
o=r.aN(0,n)
return q.aE(new V.D(o.a,o.b,o.c).H()).H()},
c7:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.eE()
if(s==null){s=q.eG()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.Y()}return!0},
eD:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.dz()
if(n!=null)q=q.V(0,n)
if(s!=null)q=q.V(0,s)
if(r!=null)q=q.V(0,r)
if(q.dM())return p
return q.H()},
eF:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.G().toString
if(Math.abs(p-0)<1e-9){j=b.aN(0,e)
o=new V.D(j.a,j.b,j.c).H()
if(q.a-r.a<0)o=o.b1(0)}else{n=(j-s.b)/p
j=b.aN(0,e).M(0,n).V(0,e).aN(0,h)
o=new V.D(j.a,j.b,j.c).H()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.b1(0)}m=l.d
if(m!=null){m=m.H()
o=m.aE(o).H().aE(m).H()}return o},
c5:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.eD()
if(s==null){s=q.eF()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.Y()}return!0},
ghq:function(a){var s=this
if(J.M(s.a,s.b))return!0
if(J.M(s.b,s.c))return!0
if(J.M(s.c,s.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
G:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gC(p)
p=a+C.a.ag(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gC(o)
p=p+C.a.ag(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gC(o)
s=p+C.a.ag(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.w()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.w()
return s+((p==null?"-":p)+"}")},
w:function(){return this.G("")}}
F.ij.prototype={}
F.jc.prototype={
bc:function(a,b,c){var s,r=null,q=b.a
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
F.eC.prototype={
em:function(a,b){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a line with a start vertex which is not attached to a shape."))
if(r!==b.a)throw H.c(P.f("May not create a line with vertices attached to different shapes."))
s.c_(a)
s.c0(b)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.ga4(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.Y()}},
ba:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null)){if(!q){r=r.a
if(r!=null)C.b.L(r.ga4(r).b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.Y()}}s.bW()
s.bX()},
c_:function(a){this.a=a
a.ga4(a).b.push(this)},
c0:function(a){this.b=a
a.ga4(a).c.push(this)},
bW:function(){var s=this.a
if(s!=null)C.b.L(s.ga4(s).b,this)
this.a=null},
bX:function(){var s=this.b
if(s!=null)C.b.L(s.ga4(s).c,this)
this.b=null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
G:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gC(s)
s=a+C.a.ag(C.c.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gC(r)
return s+C.a.ag(C.c.i(r==null?-1:r),0)},
w:function(){return this.G("")}}
F.iw.prototype={}
F.jr.prototype={
bc:function(a,b,c){var s,r=null,q=b.a
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
F.eY.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
G:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gC(s)
return a+C.a.ag(C.c.i(s),0)},
w:function(){return this.G("")}}
F.j6.prototype={
gX:function(){var s=this.a
return s==null?this.a=new F.y(this,H.b([],t.k)):s},
gbh:function(a){var s=this.b
return s==null?this.b=new F.bG(this,H.b([],t.q)):s},
ga4:function(a){var s=this.c
return s==null?this.c=new F.dh(this,H.b([],t.L)):s},
gR:function(){var s=this.d
return s==null?this.d=new F.dg(this,H.b([],t.u)):s},
gv:function(){var s=this.e
return s==null?this.e=D.U():s},
bd:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.e
if(a0!=null)++a0.d
a1.gX().W()
s=b.gX().c.length
for(a0=a1.gX().c,r=a0.length,q=t.k,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){o=a0[p]
n=b.a
if(n==null)n=b.a=new F.y(b,H.b([],q))
n.n(0,o.ht())}b.gX().W()
for(a0=a1.gbh(a1).b,r=a0.length,n=t.q,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){m=a0[p]
l=b.a
if(l==null)l=b.a=new F.y(b,H.b([],q))
k=m.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).W()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
h=l[k]
k=b.b
l=(k==null?b.b=new F.bG(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,h)
l=new F.eY()
if(h.a==null)H.h(P.f("May not create a point with a vertex which is not attached to a shape."))
l.a=h
k=h.b;(k==null?h.b=new F.dA(H.b([],n)):k).b.push(l)
k=l.a
if(k!=null){k=k.a
if(k!=null){j=k.b;(j==null?k.b=new F.bG(k,H.b([],n)):j).b.push(l)}}l=l.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.K(a)}}}for(a0=a1.ga4(a1).b,r=a0.length,n=t.L,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){g=a0[p]
l=b.a
if(l==null)l=b.a=new F.y(b,H.b([],q))
k=g.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).W()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.y(b,H.b([],q)):k
k=g.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).W()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.c
l=(k==null?b.c=new F.dh(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,e)
new F.eC().em(f,e)}for(a0=a1.gR().b,r=a0.length,n=t.u,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){d=a0[p]
l=b.a
if(l==null)l=b.a=new F.y(b,H.b([],q))
k=d.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).W()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.y(b,H.b([],q)):k
k=d.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).W()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.a
l=k==null?b.a=new F.y(b,H.b([],q)):k
k=d.c
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).W()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
c=l[k]
k=b.d
l=(k==null?b.d=new F.dg(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,e)
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,c)
new F.at().aO(f,e,c)}a0=b.e
if(a0!=null)a0.am(0)},
au:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gR().au()||!1
if(!r.gX().au())s=!1
q=r.e
if(q!=null)q.am(0)
return s},
hR:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.gX().c
s=H.b(m.slice(0),H.kj(m))
for(m=t.k;s.length!==0;){r=C.b.ghG(s)
C.b.cu(s,0)
q=H.b([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(a.bc(0,r,o)){q.push(o)
C.b.cu(s,p)}}if(q.length>1)b.bd(q)}n.gX().W()
n.ga4(n).cv()
n.gR().cv()
n.gbh(n).i7()
n.ga4(n).cw(new F.jr())
n.gR().cw(new F.jc())
m=n.e
if(m!=null)m.am(0)},
c3:function(){this.hR(new F.jL(),new F.iX())},
cl:function(){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
n.gR().cl()
for(s=n.gX().c.length-1,m=t.k;s>=0;--s){r=n.a
r=(r==null?n.a=new F.y(n,H.b([],m)):r).c
if(s>=r.length)return H.d(r,s)
q=r[s]
p=q.r
if(p!=null)q.sdS(new V.D(-p.a,-p.b,-p.c))
o=q.x
if(o!=null){o=new V.D(-o.a,-o.b,-o.c).H()
if(!J.M(q.x,o)){q.x=o
r=q.a
if(r!=null){r=r.e
if(r!=null)r.K(null)}}}}m=n.e
if(m!=null)m.am(0)},
ho:function(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=34962,b={},a=e.gX().c.length,a0=a3.a,a1=(a0&$.bs().a)!==0?1:0
if((a0&$.br().a)!==0)++a1
if((a0&$.bq().a)!==0)++a1
if((a0&$.bO().a)!==0)++a1
if((a0&$.bP().a)!==0)++a1
if((a0&$.e8().a)!==0)++a1
if((a0&$.e9().a)!==0)++a1
if((a0&$.cw().a)!==0)++a1
if((a0&$.bp().a)!==0)++a1
s=a3.gcF(a3)
r=P.cX(a*s,0,!1,t.gR)
b.a=0
q=P.o_(a1,new F.j7(b,e,a3,s*4,a,s,r),t.eT)
a0=a2.a
p=a0.createBuffer()
p.toString
a0.bindBuffer(c,p)
a0.bufferData(c,new Float32Array(H.cq(r)),35044)
a0.bindBuffer(c,d)
o=new Z.cz(new Z.fG(c,p),H.b([],t.fv),q,a3)
if(e.gbh(e).b.length!==0){n=H.b([],t.t)
p=t.q
m=t.k
l=0
while(!0){k=e.b
if(k==null){k=e.b=new F.bG(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
k=k[l].a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],m)):i).W()}k=k.e}n.push(k==null?0:k);++l}h=Z.lf(a0,34963,n)
o.b.push(new Z.c_(0,n.length,h))}if(e.ga4(e).b.length!==0){n=H.b([],t.t)
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
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],m)):i).W()}k=k.e}n.push(k==null?0:k)
k=g.b
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],m)):i).W()}k=k.e}n.push(k==null?0:k);++l}h=Z.lf(a0,34963,n)
o.b.push(new Z.c_(1,n.length,h))}if(e.gR().b.length!==0){n=H.b([],t.t)
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
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],m)):i).W()}k=k.e}n.push(k==null?0:k)
k=f.b
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],m)):i).W()}k=k.e}n.push(k==null?0:k)
k=f.c
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],m)):i).W()}k=k.e}n.push(k==null?0:k);++l}h=Z.lf(a0,34963,n)
o.b.push(new Z.c_(4,n.length,h))}return o},
i:function(a){var s=this,r="   ",q=H.b([],t.s)
if(s.gX().c.length!==0){q.push("Vertices:")
q.push(s.gX().G(r))}if(s.gbh(s).b.length!==0){q.push("Points:")
q.push(s.gbh(s).G(r))}if(s.ga4(s).b.length!==0){q.push("Lines:")
q.push(s.ga4(s).G(r))}if(s.gR().b.length!==0){q.push("Faces:")
q.push(s.gR().G(r))}return C.b.j(q,"\n")},
Y:function(){var s=this.e
return s==null?null:s.K(null)}}
F.j7.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c.hl(a),e=f.gcF(f),d=g.a,c=d.a
for(s=g.e,r=g.r,q=r.length,p=g.f,o=g.b,n=t.k,m=0;m<s;++m){l=o.a
l=(l==null?o.a=new F.y(o,H.b([],n)):l).c
if(m>=l.length)return H.d(l,m)
k=l[m].hP(f)
j=d.a+m*p
for(l=k.length,i=0;i<l;++i){h=k[i]
if(j>=q)return H.d(r,j)
r[j]=h;++j}}d.a+=e
return new Z.bU(f,e,c*4,g.d)},
$S:46}
F.dg.prototype={
hh:function(a){var s,r,q,p,o,n,m,l,k=H.b([],t.u),j=a.length
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
l=new F.at()
l.aO(s,o,n)
k.push(l)}}return k},
hi:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=H.b([],t.u)
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
e.aO(j,i,g)
d.push(e)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,j)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,f)
e=new F.at()
e.aO(j,g,f)
d.push(e)}else{(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,f)
e=new F.at()
e.aO(i,g,f)
d.push(e)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,f)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,j)
e=new F.at()
e.aO(i,f,j)
d.push(e)}m=!m}o=!o}return d},
gl:function(a){return this.b.length},
cw:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gX().c.length-1,q=t.u,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.y(s,H.b([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.d
if(o==null)o=n.d=new F.cj(H.b([],q),H.b([],q),H.b([],q))
m=o.b.length+o.c.length+o.d.length-1
for(;m>=0;m=k){o=n.d
l=(o==null?n.d=new F.cj(H.b([],q),H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.d
if(a.bc(0,l,(o==null?n.d=new F.cj(H.b([],q),H.b([],q),H.b([],q)):o).h(0,j))){l.ba()
break}}}}},
cv:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(q.ghq(q))q.ba()}},
au:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].c7())q=!1
return q},
c6:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].c5())q=!1
return q},
cl:function(){var s,r,q,p,o,n,m,l
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
if(l!=null)l.K(null)}}}},
i:function(a){return this.w()},
G:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(a))
return C.b.j(p,"\n")},
w:function(){return this.G("")}}
F.dh.prototype={
gl:function(a){return this.b.length},
cw:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gX().c.length-1,q=t.L,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.y(s,H.b([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.c
if(o==null)o=n.c=new F.ck(H.b([],q),H.b([],q))
m=o.b.length+o.c.length-1
for(;m>=0;m=k){o=n.c
l=(o==null?n.c=new F.ck(H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.c
if(a.bc(0,l,(o==null?n.c=new F.ck(H.b([],q),H.b([],q)):o).h(0,j))){l.ba()
break}}}}},
cv:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(J.M(q.a,q.b))q.ba()}},
i:function(a){return this.w()},
G:function(a){var s,r=H.b([],t.s),q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.d(q,s)
r.push(q[s].G(a+(""+s+". ")))}return C.b.j(r,"\n")},
w:function(){return this.G("")}}
F.bG.prototype={
gl:function(a){return this.b.length},
i7:function(){var s,r,q,p,o,n,m
for(s=this.b,r=s.length-1,q=t.q;r>=0;--r){if(r>=s.length)return H.d(s,r)
p=s[r].a
if(p==null)o=null
else{n=p.b
p=(n==null?p.b=new F.dA(H.b([],q)):n).b.length
o=p}if((o==null?0:o)>1){if(r>=s.length)return H.d(s,r)
m=s[r]
p=m.a
if(p!=null){p=p.a
if(p!=null){n=p.b
C.b.L((n==null?p.b=new F.bG(p,H.b([],q)):n).b,m)}p=m.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.K(null)}}}p=m.a
if(p!=null){n=p.b
C.b.L((n==null?p.b=new F.dA(H.b([],q)):n).b,m)}m.a=null}}},
i:function(a){return this.w()},
G:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(a))
return C.b.j(p,"\n")},
w:function(){return this.G("")}}
F.ci.prototype={
ca:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.fE(s.cx,p,m,r,q,o,n,a,l)},
ht:function(){return this.ca(null)},
ga4:function(a){var s=this.c
if(s==null){s=t.L
s=this.c=new F.ck(H.b([],s),H.b([],s))}return s},
gR:function(){var s=this.d
if(s==null){s=t.u
s=this.d=new F.cj(H.b([],s),H.b([],s),H.b([],s))}return s},
gC:function(a){var s=this.a
if(s!=null)s.gX().W()
return this.e},
sa3:function(a,b){var s
if(!J.M(this.f,b)){this.f=b
s=this.a
if(s!=null)s.Y()}},
sdS:function(a){var s
a=a.H()
if(!J.M(this.r,a)){this.r=a
s=this.a
if(s!=null)s.Y()}},
se7:function(a){var s
if(!J.M(this.z,a)){this.z=a
s=this.a
if(s!=null)s.Y()}},
sdi:function(a){var s
if(!J.M(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.Y()}},
hP:function(a){var s,r,q,p,o=this,n=null
if(a.q(0,$.bs())){s=o.f
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.q(0,$.br())){s=o.r
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,1,0],t.n):s}else if(a.q(0,$.bq())){s=o.x
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,1],t.n):s}else if(a.q(0,$.bO())){s=o.y
s=s==null?n:H.b([s.a,s.b],t.n)
return s==null?H.b([0,0],t.n):s}else if(a.q(0,$.bP())){s=o.z
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.q(0,$.e8())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return H.b([q,p,s==null?1:s],t.n)}else if(a.q(0,$.e9())){s=o.Q
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([1,1,1,1],t.n):s}else if(a.q(0,$.cw()))return H.b([o.ch],t.n)
else if(a.q(0,$.bp())){s=o.cx
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([-1,-1,-1,-1],t.n):s}else return H.b([],t.n)},
c7:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dz()
p.gR().E(0,new F.jP(o))
p.r=o.a.H()
if(r){s.Y()
o=s.e
if(o!=null)o.am(0)}return!0},
c5:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dz()
p.gR().E(0,new F.jO(o))
p.x=o.a.H()
if(r){s.Y()
o=s.e
if(o!=null)o.am(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
G:function(a){var s,r,q=this,p=null,o="-",n=H.b([],t.s)
n.push(C.a.ag(C.c.i(q.e),0))
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
n.push(V.E(q.ch,3,0))
s=q.cx
s=s==null?p:s.w()
n.push(s==null?o:s)
r=C.b.j(n,", ")
return a+"{"+r+"}"},
w:function(){return this.G("")}}
F.jP.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.V(0,r)}},
$S:8}
F.jO.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.V(0,r)}},
$S:8}
F.y.prototype={
W:function(){var s,r,q
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
s.Y()
return!0},
hj:function(a,b,c,d,e,f){var s=F.fE(a,null,b,c,d,e,f,null,0)
this.n(0,s)
return s},
gl:function(a){return this.c.length},
au:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].c7()
return!0},
c6:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].c5()
return!0},
hp:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.H()
if(!J.M(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.K(null)}}}}}return!0},
i:function(a){return this.w()},
G:function(a){var s,r,q,p
this.W()
s=H.b([],t.s)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p)s.push(r[p].G(a))
return C.b.j(s,"\n")},
w:function(){return this.G("")}}
F.cj.prototype={
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
C.b.E(s.c,new F.jJ(s,b))
C.b.E(s.d,new F.jK(s,b))},
i:function(a){return this.w()},
w:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(""))
return C.b.j(p,"\n")}}
F.jJ.prototype={
$1:function(a){if(!J.M(a.a,this.a))this.b.$1(a)},
$S:8}
F.jK.prototype={
$1:function(a){var s=this.a
if(!J.M(a.a,s)&&!J.M(a.b,s))this.b.$1(a)},
$S:8}
F.ck.prototype={
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
F.jM.prototype={}
F.jL.prototype={
bc:function(a,b,c){return J.M(b.f,c.f)}}
F.jN.prototype={}
F.iX.prototype={
bd:function(a){var s,r,q,p=V.dz()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)p=new V.D(p.a+q.a,p.b+q.b,p.c+q.c)}p=p.H()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)a[r].sdS(p)
return null}}
F.dA.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.w()},
w:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(""))
return C.b.j(p,"\n")}}
O.d1.prototype={
gv:function(){var s=this.fr
return s==null?this.fr=D.U():s},
aa:function(a){var s=this.fr
return s==null?null:s.K(a)},
ev:function(){return this.aa(null)},
cZ:function(a){this.a=null
this.aa(a)},
fY:function(){return this.cZ(null)},
f5:function(a,b){return this.aa(new D.b8())},
f7:function(a,b){return this.aa(new D.b9())},
gdO:function(){var s=this,r=s.dx
if(r==null){r=new D.cS(H.b([],t.i),H.b([],t.U),H.b([],t.o),H.b([],t.D),H.b([],t.e))
r.cE(r.gf2(),r.gfH(),r.gfL())
r.gv().n(0,s.gcY())
r.gdN().n(0,s.gcL())
s.dx=r}return r},
gdr:function(){var s=this.f
return s==null?this.f=O.eH(this,"emission"):s},
gdd:function(){var s=this.r
return s==null?this.r=O.eH(this,"ambient"):s},
gdq:function(){var s=this.x
return s==null?this.x=O.eH(this,"diffuse"):s},
gbG:function(){var s=this.z
return s==null?this.z=new O.iI(new V.W(0,0,0),this,"specular",new A.aH(!1,!1,!1)):s},
cQ:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.y,a1=new H.X(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=H.b([],t.i)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gav()
o=a1.h(0,q.gav())
a1.m(0,p,o==null?1:o)}n=H.b([],t.cn)
a1.E(0,new O.iJ(b,n))
C.b.b3(n,new O.iK())
m=new H.X(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=H.b([],t.U)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){p=a2[r].f!=null
o=p?1:0
l=m.h(0,p?1:0)
m.m(0,o,l==null?1:l)}k=H.b([],t.fD)
m.E(0,new O.iL(b,k))
C.b.b3(k,new O.iM())
j=new H.X(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=H.b([],t.o)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gav()
o=j.h(0,q.gav())
j.m(0,p,o==null?1:o)}i=H.b([],t.eg)
j.E(0,new O.iN(b,i))
C.b.b3(i,new O.iO())
h=new H.X(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=H.b([],t.D)
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.q)(a0),++r){q=a0[r]
s=q.gav()
p=h.h(0,q.gav())
h.m(0,s,p==null?1:p)}g=H.b([],t.c3)
h.E(0,new O.iP(b,g))
C.b.b3(g,new O.iQ())
a0=C.c.a2(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.iG(new V.aP(0,0,0,0))
a2=b.gdr().c
s=b.gdd().c
p=b.gdq().c
o=b.y
o=(o==null?b.y=O.eH(b,"invDiffuse"):o).c
l=b.gbG().c
f=b.Q
f=(f==null?b.Q=new O.iE(b,"bump",new A.aH(!1,!1,!1)):f).c
e=b.cx
e=(e==null?b.cx=O.eH(b,"reflect"):e).c
d=b.cy
d=(d==null?b.cy=new O.iH(new V.W(0,0,0),b,"refract",new A.aH(!1,!1,!1)):d).c
c=b.db
return A.o1(!1,!1,!1,!1,a0*4,a2,s,p,o,l,f,e,d,(c==null?b.db=new O.iD(b,"alpha",new A.aH(!1,!1,!1)):c).c,n,k,i,g)},
eC:function(a,b){if(b!=null)if(!C.b.A(a,b)){b.a=a.length
a.push(b)}},
aK:function(a,b){var s,r,q,p,o,n=this.dx
n=J.aD(n==null?H.b([],t.e):n)
s=H.V(n).c
for(;n.u();){r=s.a(n.d)
q=$.jI
r.c=q==null?$.jI=new V.D(0,0,1):q
q=$.jH
r.d=q==null?$.jH=new V.D(0,1,0):q
q=$.jG
r.e=q==null?$.jG=new V.D(-1,0,0):q
p=r.a
if(p!=null){o=p.bj(0,b,r)
r.c=o.bC(r.c).H()
r.d=o.bC(r.d).H()
r.e=o.bC(r.e).H()}}},
i9:function(b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null,b0=a8.a
if(b0==null){s=a8.cQ()
r=s.bt
q=b1.fr
b0=q.h(0,r)
if(b0==null){p=b1.a
o=t.S
n=t.W
b0=new A.eF(s,H.b([],t.p),P.S(o,n),P.S(o,t.O),P.S(o,n),P.S(o,t.d),P.S(o,n),P.S(o,t.m),P.S(o,n),P.S(o,t.R),p,r)
b0.en(s,p)
if(r.length===0)H.h(P.f("May not cache a shader with no name."))
if(q.c8(0,r))H.h(P.f('Shader cache already contains a shader by the name "'+r+'".'))
q.m(0,r,b0)}b0=a8.a=b0
b2.e=null}m=b0.x
l=m.dt
s=b2.e
if(!(s instanceof Z.cz))s=b2.e=null
if(s==null||!s.d.q(0,l)){s=m.k4
if(s){r=b2.d
if(r!=null)r.au()}r=m.r1
if(r){q=b2.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gR().c6()
q.gX().c6()
q=q.e
if(q!=null)q.am(0)}}q=m.rx
if(q){p=b2.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.gX().hp()
p=p.e
if(p!=null)p.am(0)}}p=b2.d
k=p==null?a9:p.ho(new Z.jQ(b1.a),l)
if(k==null)return
p=k.aX($.bs())
if(p!=null){o=b0.y
o=o==null?a9:o.c
p.e=o==null?0:o}if(s){s=k.aX($.br())
if(s!=null){p=b0.Q
p=p==null?a9:p.c
s.e=p==null?1:p}}if(r){s=k.aX($.bq())
if(s!=null){r=b0.z
r=r==null?a9:r.c
s.e=r==null?2:r}}if(m.r2){s=k.aX($.bO())
if(s!=null){r=b0.ch
r=r==null?a9:r.c
s.e=r==null?3:r}}if(q){s=k.aX($.bP())
if(s!=null){r=b0.cx
r=r==null?a9:r.c
s.e=r==null?4:r}}if(m.ry){s=k.aX($.bp())
if(s!=null){r=b0.cy
r=r==null?a9:r.c
s.e=r==null?5:r}}b2.e=k}j=H.b([],t.ga)
s=b1.a
s.useProgram(b0.e)
b0.gac(b0).hC()
if(m.fr){r=b1.dx
r=r.ga1(r)
q=b0.db
if(q!=null)q.ai(r.a9(0,!0))}if(m.fx){r=b1.cx
if(r==null){r=b1.db
q=b1.dx
q=b1.cx=r.ga1(r).M(0,q.ga1(q))
r=q}q=b0.dx
if(q!=null)q.ai(r.a9(0,!0))}r=b1.ch
if(r==null){r=b1.dx
r=b1.ch=b1.gi5().M(0,r.ga1(r))}q=b0.fr
if(q!=null)q.ai(r.a9(0,!0))
if(m.go){r=b1.db
r=r.ga1(r)
q=b0.dy
if(q!=null)q.ai(r.a9(0,!0))}if(m.x1){r=$.lW
if(r==null){r=new V.d3(1,0,0,0,1,0,0,0,1)
$.lW=r}q=b0.go
if(q!=null)q.ai(r.a9(0,!0))}if(m.x2){r=V.bC()
q=b0.id
if(q!=null)q.ai(r.a9(0,!0))}if(m.y1){r=V.bC()
q=b0.k1
if(q!=null)q.ai(r.a9(0,!0))}if(m.aW>0){r=a8.e.a
i=r.length
q=b0.k2
if(q!=null)q.a.uniform1i(q.d,i)
for(h=0;h<i;++h){if(h>=r.length)return H.d(r,h)
q=r[h]
p=b0.k3
if(h>=p.length)return H.d(p,h)
p=p[h]
g=new Float32Array(H.cq(q.a9(0,!0)))
p.a.uniformMatrix4fv(p.d,!1,g)}}if(m.a.a){r=a8.f
r=r==null?a9:r.f
if(r==null)r=new V.W(0,0,0)
q=b0.k4
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(m.k1){if(m.b.a){r=a8.r
r=r==null?a9:r.f
if(r==null)r=new V.W(0,0,0)
q=b0.rx
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(m.c.a){r=a8.x
r=r==null?a9:r.f
if(r==null)r=new V.W(0,0,0)
q=b0.x2
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(m.d.a){r=a8.y
r=r==null?a9:r.f
if(r==null)r=new V.W(0,0,0)
q=b0.aW
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}r=m.e.a
if(!r)q=!1
else q=!0
if(q){q=a8.z
q=q==null?a9:q.ch
if(q==null)q=100
p=b0.dv
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a8.z
r=r==null?a9:r.f
if(r==null)r=new V.W(1,1,1)
q=b0.du
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}r=m.z
if(r.length>0){f=new H.X(t.y)
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
n=b0.cc.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=d.gir()
a0=$.aW
n=n.bi(a0==null?$.aW=new V.T(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.giw()
a0=$.aW
n=n.bi(a0==null?$.aW=new V.T(0,0,0):a0)
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gaD(d)
a0=a.d
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
if(d.gds()){n=d.gdf()
a0=a.e
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdg()
a0=a.f
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdh()
a0=a.r
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=f.h(0,p)
if(i==null)i=0
p=b0.cb.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.Q
if(r.length>0){q=b1.db
a1=q.ga1(q)
a2=new H.X(t.y)
q=a8.dx
q=q==null?a9:q.f
if(q==null)q=H.b([],t.U)
p=q.length
o=t.V
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.f!=null?1:0
b=a2.h(0,c)
if(b==null)b=0
a2.m(0,c,b+1)
n=b0.ce.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=a1.bC(d.c).H()
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.b
a0=a.f
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
if(d.f!=null){n=d.c
a0=a.d
if(a0!=null)a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.d
a0=a.b
if(a0!=null)a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.e
a0=a.c
if(a0!=null)a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.f
if(n!=null)if(!C.b.A(j,n)){n.a=j.length
j.push(n)}n=d.f
if(n!=null&&n.d){a0=a.r
if(a0!=null){a3=n.d
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,n.a)}}}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a2.h(0,p)
if(i==null)i=0
p=b0.cd.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.ch
if(r.length>0){q=b1.db
a1=q.ga1(q)
a5=new H.X(t.y)
q=a8.dx
q=q==null?a9:q.r
if(q==null)q=H.b([],t.o)
p=q.length
o=t.B
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.gav()
b=a5.h(0,c)
if(b==null)b=0
a5.m(0,c,b+1)
n=b0.cg.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
a6=a1.M(0,d.ga1(d))
n=d.ga1(d)
a0=$.aW
n=n.bi(a0==null?$.aW=new V.T(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=$.aW
n=a6.bi(n==null?$.aW=new V.T(0,0,0):n)
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gaD(d)
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
d.gaJ()
n=a6.dL(0)
a0=a.d
if(a0!=null){g=new Float32Array(H.cq(new V.d3(n.a,n.b,n.c,n.e,n.f,n.r,n.y,n.z,n.Q).a9(0,!0)))
a0.a.uniformMatrix3fv(a0.d,!1,g)}d.gaJ()
n=d.gaJ()
if(!C.b.A(j,n)){n.a=j.length
j.push(n)}n=d.gaJ()
a0=n.gbb(n)
if(a0){a0=a.f
if(a0!=null){a3=n.gbb(n)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,n.gC(n))}}d.gb2()
n=d.gee()
a0=a.x
if(a0!=null)a0.a.uniform4f(a0.d,n.a,n.b,n.c,n.d)
n=d.gb2()
if(!C.b.A(j,n)){n.a=j.length
j.push(n)}n=d.gb2()
a0=n.gbb(n)
if(a0){a0=a.r
if(a0!=null){a3=n.gbb(n)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,n.gC(n))}}if(d.gds()){n=d.gdf()
a0=a.y
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdg()
a0=a.z
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdh()
a0=a.Q
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a5.h(0,p)
if(i==null)i=0
p=b0.cf.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.cx
if(r.length>0){q=b1.db
a1=q.ga1(q)
a7=new H.X(t.y)
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
n=b0.cj.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=d.gi4(d)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.giu(d).H()
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=a1.bi(d.gi4(d))
a0=a.d
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gaD(d)
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
d.gaJ()
n=d.giM()
a0=a.f
if(a0!=null)a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gcz(d)
a0=a.r
if(a0!=null)a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.giK()
a0=a.x
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.giL()
a0=a.y
if(a0!=null)a0.a.uniform1f(a0.d,n)
d.gaJ()
n=d.gaJ()
if(!C.b.A(j,n)){n.a=j.length
j.push(n)}n=d.gaJ()
a0=n.gbb(n)
if(a0){a0=a.dx
if(a0!=null){a3=n.d
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,n.a)}}d.gb2()
n=d.gee()
a0=a.z
if(a0!=null)a0.a.uniform4f(a0.d,n.a,n.b,n.c,n.d)
n=d.gb2()
if(!C.b.A(j,n)){n.a=j.length
j.push(n)}n=d.gb2()
a0=n.gbb(n)
if(a0){a0=a.dy
if(a0!=null){a3=n.d
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,n.a)}}if(d.giv()){n=d.git()
a0=a.Q
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gis()
a0=a.ch
if(a0!=null)a0.a.uniform1f(a0.d,n)}if(d.gds()){n=d.gdf()
a0=a.cx
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdg()
a0=a.cy
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdh()
a0=a.db
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a7.h(0,p)
if(i==null)i=0
p=b0.ci.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}}if(m.dy){r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.ga1(r).dL(0)}q=b0.fy
if(q!=null)q.ai(r.a9(0,!0))}if(m.db){a8.eC(j,a9)
b0.h1(b0.dw,a9)
if(m.r.a){r=a8.cx
r=r==null?a9:r.f
if(r==null)r=new V.W(1,1,1)
q=b0.dz
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}r=m.x.a
if(!r)q=!1
else q=!0
if(q){q=a8.cy
q=q==null?a9:q.ch
if(q==null)q=0
p=b0.dA
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a8.cy
r=r==null?a9:r.f
if(r==null)r=new V.W(1,1,1)
q=b0.dB
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}}r=m.y.a
q=!r
if(q)p=!1
else p=!0
if(p){if(r){r=a8.db
r=r==null?a9:r.f
if(r==null)r=1
p=b0.dC
if(p!=null)p.a.uniform1f(p.d,r)}s.enable(3042)
s.blendFunc(770,771)}for(h=0;h<j.length;++h){r=j[h]
if(!r.c&&r.d){r.c=!0
s.activeTexture(33984+r.a)
s.bindTexture(3553,r.b)}}r=t.ed.a(b2.e)
r.c4(b1)
r.aZ(b1)
r.io(b1)
if(q)r=!1
else r=!0
if(r)s.disable(3042)
for(h=0;h<j.length;++h){r=j[h]
if(r.c){r.c=!1
s.activeTexture(33984+r.a)
s.bindTexture(3553,a9)}}s.useProgram(a9)
b0.gac(b0).hA()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cQ().bt}}
O.iJ.prototype={
$2:function(a,b){return this.b.push(new A.b3(a,C.c.a2(b+3,4)*4))},
$S:6}
O.iK.prototype={
$2:function(a,b){return C.c.ad(a.a,b.a)},
$S:50}
O.iL.prototype={
$2:function(a,b){return this.b.push(new A.b5(a,C.c.a2(b+3,4)*4))},
$S:6}
O.iM.prototype={
$2:function(a,b){return C.c.ad(a.a,b.a)},
$S:51}
O.iN.prototype={
$2:function(a,b){return this.b.push(new A.bg(a,C.c.a2(b+3,4)*4))},
$S:6}
O.iO.prototype={
$2:function(a,b){return C.c.ad(a.a,b.a)},
$S:52}
O.iP.prototype={
$2:function(a,b){return this.b.push(new A.bi(a,C.c.a2(b+3,4)*4))},
$S:6}
O.iQ.prototype={
$2:function(a,b){return C.c.ad(a.a,b.a)},
$S:53}
O.iD.prototype={
aB:function(){var s,r=this
r.cG()
s=r.f
$.G().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.aa(new D.J(r.b,s,1))}}}
O.eG.prototype={
aB:function(){},
d1:function(a){var s,r,q=this
if(!q.c.q(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.aB()
s=q.a
s.a=null
s.aa(null)}}}
O.iE.prototype={}
O.d2.prototype={
d0:function(a){var s,r=this
if(!r.f.q(0,a)){s=r.f
r.f=a
r.a.aa(new D.J(r.b+".color",s,a))}},
aB:function(){this.cG()
this.d0(new V.W(1,1,1))},
saD:function(a,b){this.d1(new A.aH(!0,!1,!1))
this.d0(b)}}
O.iG.prototype={}
O.iH.prototype={
aB:function(){var s,r=this
r.cH()
s=r.ch
$.G().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.aa(new D.J(r.b+".refraction",s,1))}}}
O.iI.prototype={
d2:function(a){var s=this,r=s.ch
$.G().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.aa(new D.J(s.b+".shininess",r,a))}},
aB:function(){this.cH()
this.d2(100)}}
O.dk.prototype={}
T.cc.prototype={}
T.fk.prototype={}
T.fl.prototype={
gv:function(){var s=this.y
return s==null?this.y=D.U():s}}
T.jg.prototype={
hQ:function(a,b){var s,r,q=3553,p=this.a,o=p.createTexture()
o.toString
p.bindTexture(q,o)
p.texParameteri(q,10242,10497)
p.texParameteri(q,10243,10497)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.fl(o)
W.a4(s,"load",new T.jh(this,r,s,!1,o,!1,!1),!1)
return r},
fZ:function(a,b,c){var s,r,q,p,o,n
b=V.lB(b)
s=a.width
r=V.lB(s==null?512:s)
s=a.height
q=V.lB(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.kZ()
p.width=r
p.height=q
o=t.ar.a(C.i.ec(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.q7(o.getImageData(0,0,s,n==null?512:n))}}}
T.jh.prototype={
$1:function(a){var s,r,q=this,p=q.c
p.width
p.height
s=q.a
r=s.fZ(p,s.b,q.d)
p.width
p.height
p=s.a
p.bindTexture(3553,q.e)
p.pixelStorei(37440,0)
C.a3.ih(p,3553,0,6408,6408,5121,r)
p.bindTexture(3553,null)
p=q.b
if(!p.d){p.d=!0
p=p.y
if(p!=null)p.hB()}++s.e},
$S:3}
X.io.prototype={
gv:function(){var s=this.x
return s==null?this.x=D.U():s}}
X.eU.prototype={
gv:function(){var s=this.f
return s==null?this.f=D.U():s},
aQ:function(a){var s=this.f
return s==null?null:s.K(a)},
ey:function(){return this.aQ(null)},
sbe:function(a){var s,r,q=this
if(!J.M(q.b,a)){s=q.b
if(s!=null)s.gv().L(0,q.gcM())
r=q.b
q.b=a
if(a!=null)a.gv().n(0,q.gcM())
q.aQ(new D.J("mover",r,q.b))}}}
X.jf.prototype={}
V.aG.prototype={
bm:function(a){this.b=new P.iq(C.S)
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
m=k.b.eK(o,0,o.length)
l=m==null?o:m
l=H.lD(l," ","&nbsp;")
C.Q.ed(n,l)
l=n.style
l.color=b
C.b.gaw(k.d).push(n)}},
dZ:function(a,b){var s,r,q,p=this
p.d=H.b([],t.F)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bs()
if(r!=null)for(q=new H.r(s),q=new P.bK(r.cB(new H.bc(q,q.gl(q))).a());q.u();)p.bA(q.gB(q))}}
V.kT.prototype={
$1:function(a){var s=C.d.cA(this.a.ghL(),2)
if(s!=="0.00")P.lC(s+" fps")},
$S:54}
V.el.prototype={
bA:function(a){var s=this
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
bs:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()\\-+*%!&|=.,?:;",h="OpenDoubleStr",g="CloseDoubleStr",f="EscDoubleStr",e="OpenSingleStr",d="CloseSingleStr",c="EscSingleStr",b="Slash",a="Comment",a0="EndComment",a1="MLComment",a2="MLCStar",a3="Whitespace",a4=L.jm()
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
r.aI(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aI(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aI(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a4}}
V.es.prototype={
bA:function(a){var s=this
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
bs:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()[]\\-+*%!&|=.,?:;",h="Slash",g="Comment",f="EndComment",e="Preprocess",d="EndPreprocess",c="Whitespace",b=L.jm()
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
r.aI(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],p))
r.aI(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],p))
r.aI(0,"Builtin",H.b(["gl_FragColor","gl_Position"],p))
return b}}
V.et.prototype={
bA:function(a){var s=this,r="#111"
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
bs:function(){var s,r,q,p="Start",o="Id",n="Attr",m="Sym",l="OpenStr",k="CloseStr",j="Other",i=L.jm()
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
q.d=q.a.O("Symbol")
q=i.k(0,k)
q.d=q.a.O("String")
q=i.k(0,o)
r=q.a.O(o)
q.d=r
r.aI(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],t.s))
r=i.k(0,n)
r.d=r.a.O(n)
r=i.k(0,j)
r.d=r.a.O(j)
return i}}
V.eW.prototype={
dZ:function(a,b){this.d=H.b([],t.F)
this.N(C.b.j(b,"\n"),"#111")},
bA:function(a){},
bs:function(){return null}}
V.j_.prototype={
d9:function(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=l.a,j=P.me().gct().h(0,k)
if(j==null)if(d){c.$0()
l.d7(b)
s=!0}else s=!1
else if(j===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
p=l.c
o=J.aL(p)
o.gbq(p).n(0,q)
n=W.nQ("radio")
n.checked=s
n.name=k
W.a4(n,"change",new V.j0(l,n,c,b),!1)
q.children.toString
q.appendChild(n).toString
m=r.createElement("span")
m.textContent=b
q.appendChild(m).toString
p=o.gbq(p)
r=r.createElement("br")
r.toString
p.n(0,r)},
b9:function(a,b,c){return this.d9(a,b,c,!1)},
d7:function(a){var s,r,q=P.me(),p=t.N,o=P.nZ(q.gct(),p,p)
o.m(0,this.a,a)
s=q.e3(0,o)
p=window.history
p.toString
r=s.gc1()
p.replaceState(new P.k5([],[]).bD(""),"",r)}}
V.j0.prototype={
$1:function(a){var s=this,r=s.b.checked
if(r===!0){s.c.$0()
s.a.d7(s.d)}},
$S:3}
V.j8.prototype={
dc:function(a){var s,r,q,p,o,n,m=this.h4(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.r(C.b.hO(a)),s=new P.bK(m.cB(new H.bc(s,s.gl(s))).a());s.u();){r=s.gB(s)
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
k.appendChild(o).toString}else{n=P.kd(C.w,r,C.e,!1)
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
eb:function(a){var s,r,q,p=t.F,o=new V.el("dart",H.b([],p))
o.bm("dart")
s=new V.es("glsl",H.b([],p))
s.bm("glsl")
r=new V.et("html",H.b([],p))
r.bm("html")
q=C.b.hH(H.b([o,s,r],t.g6),new V.jb(a))
if(q!=null)return q
p=new V.eW("plain",H.b([],p))
p.bm("plain")
return p},
da:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.b([],t.t)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(C.a.Z(q,"+")){b2[r]=C.a.a7(q,1)
a8.push(1)
s=!0}else if(C.a.Z(q,"-")){b2[r]=C.a.a7(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.eb(b0)
p.dZ(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m).toString
this.a.appendChild(n).toString
l=P.kd(C.w,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.lJ()
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
for(a4=C.b.gP(q);a4.u();)b.appendChild(a4.gB(a4)).toString
d.appendChild(c).toString
d.appendChild(b).toString
m.appendChild(d).toString}},
hf:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
h4:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other",f=this.b
if(f!=null)return f
f=L.jm()
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
V.ja.prototype={
$1:function(a){P.ma(C.m,new V.j9(this.a))},
$S:3}
V.j9.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.an(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.x(-0.01*s)+"px"
q.top=r},
$S:1}
V.jb.prototype={
$1:function(a){var s=a==null?null:a.a
return s===this.a},
$S:55}
M.kL.prototype={
$0:function(){this.a.saj(0,F.lw(1,null,null,1))},
$S:1}
M.kM.prototype={
$0:function(){this.a.saj(0,F.mS(!0,40,1))},
$S:1}
M.kN.prototype={
$0:function(){this.a.saj(0,F.mS(!1,40,0))},
$S:1}
M.kO.prototype={
$0:function(){this.a.saj(0,F.qr(6,6))},
$S:1}
M.kP.prototype={
$0:function(){this.a.saj(0,F.n4())},
$S:1}
M.kQ.prototype={
$0:function(){this.a.saj(0,F.ql())},
$S:1}
M.kR.prototype={
$1:function(a){var s,r=this.a,q=this.b,p=q.a
p=p==null?null:p.c
s=t.s
r.da("Vertex Shader","glsl",0,H.b((p==null?"":p).split("\n"),s))
q=q.a
q=q==null?null:q.d
r.da("Fragment Shader","glsl",0,H.b((q==null?"":q).split("\n"),s))},
$S:0};(function aliases(){var s=J.a.prototype
s.eh=s.i
s=J.bb.prototype
s.ej=s.i
s=P.j.prototype
s.ei=s.bE
s=W.C.prototype
s.bH=s.ae
s=W.dN.prototype
s.ek=s.at
s=K.cN.prototype
s.eg=s.aG
s.bI=s.i
s=O.eG.prototype
s.cG=s.aB
s=O.d2.prototype
s.cH=s.aB})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"pn","nV",56)
r(P,"q1","oz",13)
r(P,"q2","oA",13)
r(P,"q3","oB",13)
q(P,"mQ","pX",1)
r(W,"rD","ib",58)
p(W,"qe",4,null,["$4"],["oC"],22,0)
p(W,"qf",4,null,["$4"],["oD"],22,0)
var j
o(j=E.by.prototype,"gdX",0,0,null,["$1","$0"],["dY","hZ"],2,0)
o(j,"gdV",0,0,null,["$1","$0"],["dW","hY"],2,0)
o(j,"gdT",0,0,null,["$1","$0"],["dU","hV"],2,0)
n(j,"ghT","hU",9)
n(j,"ghW","hX",9)
o(j=E.fm.prototype,"gcI",0,0,null,["$1","$0"],["cK","cJ"],2,0)
m(j,"gib","e4",1)
l(j=X.fD.prototype,"gfl","fm",3)
l(j,"gf8","f9",3)
l(j,"gff","fg",4)
l(j,"gfp","fq",24)
l(j,"gfn","fo",24)
l(j,"gfu","fv",4)
l(j,"gfA","fB",4)
l(j,"gfj","fk",4)
l(j,"gfw","fz",4)
l(j,"gfh","fi",4)
l(j,"gfC","fD",36)
l(j,"gfE","fF",3)
l(j,"gfR","fS",11)
l(j,"gfN","fO",11)
l(j,"gfP","fQ",11)
o(D.bV.prototype,"gbU",0,0,null,["$1","$0"],["as","fa"],2,0)
o(j=D.cS.prototype,"gcW",0,0,null,["$1","$0"],["cX","fs"],2,0)
l(j,"gfH","fI",38)
n(j,"gf2","f3",16)
n(j,"gfL","fM",16)
k(V.aq.prototype,"gl","co",20)
k(V.D.prototype,"gl","co",20)
o(j=U.bY.prototype,"gbn",0,0,null,["$1","$0"],["a_","aq"],2,0)
n(j,"gf0","f1",19)
n(j,"gfJ","fK",19)
o(j=U.dy.prototype,"gbn",0,0,null,["$1","$0"],["a_","aq"],2,0)
l(j,"geV","eW",0)
l(j,"geX","eY",0)
l(j,"geZ","f_",0)
l(j,"geQ","eR",0)
l(j,"geS","eT",0)
l(j,"ghb","hc",0)
l(j,"gh9","ha",0)
l(j,"gh7","h8",0)
o(j=M.eo.prototype,"gar",0,0,null,["$1","$0"],["ay","es"],2,0)
n(j,"gfb","fc",9)
n(j,"gfd","fe",9)
o(j=O.d1.prototype,"gcL",0,0,null,["$1","$0"],["aa","ev"],2,0)
o(j,"gcY",0,0,null,["$1","$0"],["cZ","fY"],2,0)
n(j,"gf4","f5",21)
n(j,"gf6","f7",21)
o(X.eU.prototype,"gcM",0,0,null,["$1","$0"],["aQ","ey"],2,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.P,null)
q(P.P,[H.l6,J.a,J.ak,P.K,P.dG,P.j,H.bc,P.ev,H.cK,H.fA,H.cD,H.jp,H.iY,H.hm,H.bw,P.L,H.ix,H.eD,H.ey,H.az,H.fZ,P.dT,P.co,P.bK,P.fI,P.ca,P.fc,P.kh,P.e_,P.jY,P.dF,P.k,P.hB,P.d_,P.de,P.eh,P.ir,P.kf,P.ke,P.Y,P.bx,P.eT,P.di,P.fW,P.im,P.af,P.a_,P.bL,P.ju,P.hg,W.i2,W.l2,W.lg,W.cn,W.N,W.d9,W.dN,W.hr,W.cL,W.k1,W.hC,P.k4,P.dV,P.he,K.aN,K.cN,K.f_,K.u,L.f9,L.fn,L.fo,L.jl,O.al,O.d4,E.hY,E.by,E.bT,E.c5,E.fU,E.j1,E.fm,Z.fG,Z.jQ,Z.cz,Z.c_,Z.bJ,D.i_,D.bW,D.Z,X.cA,X.eA,X.iv,X.iB,X.bf,X.iU,X.jn,X.fD,D.bV,V.W,V.aP,V.ie,V.d3,V.bd,V.a1,V.T,V.bF,V.f1,V.aq,V.D,U.dy,M.eo,A.ee,A.hT,A.aH,A.b3,A.b5,A.bg,A.bi,A.iF,A.dr,A.ds,A.du,A.dx,A.a2,A.js,F.at,F.ij,F.eC,F.iw,F.eY,F.j6,F.dg,F.dh,F.bG,F.ci,F.y,F.cj,F.ck,F.jM,F.jN,F.dA,O.dk,O.eG,O.iG,T.jg,X.jf,X.eU,V.aG,V.j_,V.j8])
q(J.a,[J.ew,J.cQ,J.bb,J.w,J.c1,J.ba,H.d5,H.a0,W.e,W.hR,W.bt,W.cB,W.aQ,W.I,W.fN,W.as,W.i5,W.i6,W.fP,W.cH,W.fR,W.i7,W.m,W.fX,W.au,W.ip,W.h0,W.bA,W.iA,W.iR,W.h4,W.h5,W.aw,W.h6,W.h8,W.ax,W.hc,W.hf,W.aA,W.hh,W.aB,W.hn,W.ah,W.ht,W.jj,W.ap,W.hv,W.jo,W.jz,W.hD,W.hF,W.hH,W.hJ,W.hL,P.aS,P.h2,P.aV,P.ha,P.iZ,P.ho,P.aX,P.hx,P.hU,P.fK,P.c7,P.hk])
q(J.bb,[J.eV,J.bI,J.aR])
r(J.it,J.w)
q(J.c1,[J.cP,J.ex])
q(P.K,[H.cR,P.fr,H.ez,H.fz,H.f3,H.fV,P.ed,P.eQ,P.aE,P.fB,P.fy,P.c9,P.ei,P.ek])
r(P.cV,P.dG)
q(P.cV,[H.cg,W.fL,W.a5,P.eq])
r(H.r,H.cg)
q(P.j,[H.n,H.aT,H.b_,P.cO])
q(H.n,[H.cW,H.cT])
r(H.cI,H.aT)
q(P.ev,[H.eE,H.fH])
r(H.d0,H.cW)
r(H.cE,H.cD)
r(H.da,P.fr)
q(H.bw,[H.fh,H.iu,H.kF,H.kG,H.kH,P.jS,P.jR,P.jT,P.jU,P.ka,P.k9,P.kv,P.k_,P.k0,P.iy,P.iC,P.jD,P.jC,P.i8,P.i9,P.jy,P.jv,P.jw,P.jx,P.kc,P.kb,P.ko,P.kp,P.kq,W.ia,W.iS,W.iT,W.j5,W.jd,W.jV,W.iW,W.iV,W.k2,W.k3,W.k8,W.kg,P.k6,P.k7,P.km,P.kw,P.ik,P.il,P.hV,E.j2,E.j3,E.j4,E.ji,D.ih,D.ii,F.ki,F.kx,F.kz,F.kA,F.kB,F.kV,F.kU,F.kW,F.kK,F.ky,F.j7,F.jP,F.jO,F.jJ,F.jK,O.iJ,O.iK,O.iL,O.iM,O.iN,O.iO,O.iP,O.iQ,T.jh,V.kT,V.j0,V.ja,V.j9,V.jb,M.kL,M.kM,M.kN,M.kO,M.kP,M.kQ,M.kR])
q(H.fh,[H.fa,H.bS])
r(P.cZ,P.L)
q(P.cZ,[H.X,W.fJ])
r(H.c4,H.a0)
q(H.c4,[H.dI,H.dK])
r(H.dJ,H.dI)
r(H.bD,H.dJ)
r(H.dL,H.dK)
r(H.d6,H.dL)
q(H.d6,[H.eL,H.eM,H.eN,H.eO,H.eP,H.d7,H.bE])
r(H.dU,H.fV)
r(P.dQ,P.cO)
r(P.jZ,P.kh)
r(P.dM,P.e_)
r(P.dE,P.dM)
r(P.dY,P.d_)
r(P.ch,P.dY)
q(P.eh,[P.hW,P.ic])
r(P.ej,P.fc)
q(P.ej,[P.hX,P.iq,P.jE,P.jB])
r(P.jA,P.ic)
q(P.aE,[P.dd,P.eu])
r(P.fO,P.bL)
q(W.e,[W.t,W.ep,W.c2,W.an,W.dO,W.ao,W.ad,W.dR,W.fF,W.cl,P.eg,P.b4])
q(W.t,[W.C,W.aF,W.cm])
q(W.C,[W.v,P.o])
q(W.v,[W.eb,W.ec,W.bR,W.bu,W.bv,W.b6,W.er,W.bZ,W.c0,W.f4,W.bj,W.dj,W.ff,W.fg,W.cb])
r(W.i1,W.aQ)
r(W.cF,W.fN)
q(W.as,[W.i3,W.i4])
r(W.fQ,W.fP)
r(W.cG,W.fQ)
r(W.fS,W.fR)
r(W.en,W.fS)
r(W.ae,W.bt)
r(W.fY,W.fX)
r(W.bX,W.fY)
r(W.h1,W.h0)
r(W.bz,W.h1)
r(W.aZ,W.m)
q(W.aZ,[W.bB,W.am,W.bH])
r(W.eI,W.h4)
r(W.eJ,W.h5)
r(W.h7,W.h6)
r(W.eK,W.h7)
r(W.h9,W.h8)
r(W.d8,W.h9)
r(W.hd,W.hc)
r(W.eX,W.hd)
r(W.f2,W.hf)
r(W.dP,W.dO)
r(W.f6,W.dP)
r(W.hi,W.hh)
r(W.f7,W.hi)
r(W.fb,W.hn)
r(W.hu,W.ht)
r(W.fi,W.hu)
r(W.dS,W.dR)
r(W.fj,W.dS)
r(W.hw,W.hv)
r(W.fp,W.hw)
r(W.bk,W.am)
r(W.hE,W.hD)
r(W.fM,W.hE)
r(W.dB,W.cH)
r(W.hG,W.hF)
r(W.h_,W.hG)
r(W.hI,W.hH)
r(W.dH,W.hI)
r(W.hK,W.hJ)
r(W.hj,W.hK)
r(W.hM,W.hL)
r(W.hq,W.hM)
r(W.fT,W.fJ)
r(W.dC,P.ca)
r(W.hs,W.dN)
r(P.k5,P.k4)
r(P.a8,P.he)
r(P.h3,P.h2)
r(P.eB,P.h3)
r(P.hb,P.ha)
r(P.eR,P.hb)
r(P.c8,P.o)
r(P.hp,P.ho)
r(P.fd,P.hp)
r(P.hy,P.hx)
r(P.fq,P.hy)
r(P.ef,P.fK)
r(P.eS,P.b4)
r(P.hl,P.hk)
r(P.f8,P.hl)
q(K.cN,[K.ac,L.dm])
q(E.hY,[Z.bU,A.df,T.cc])
q(D.Z,[D.b8,D.b9,D.J,X.eZ])
q(X.eZ,[X.cY,X.c3,X.dl])
q(O.al,[D.cS,U.bY])
q(D.i_,[U.i0,U.ab])
r(U.cC,U.ab)
r(A.eF,A.df)
q(A.a2,[A.ce,A.fu,A.fv,A.fw,A.fs,A.dn,A.ft,A.dp,A.dq,A.fx,A.dt,A.cf,A.dv,A.dw])
r(F.jc,F.ij)
r(F.jr,F.iw)
r(F.jL,F.jM)
r(F.iX,F.jN)
r(O.d1,O.dk)
q(O.eG,[O.iD,O.iE,O.d2])
q(O.d2,[O.iH,O.iI])
r(T.fk,T.cc)
r(T.fl,T.fk)
r(X.io,X.jf)
q(V.aG,[V.el,V.es,V.et,V.eW])
s(H.cg,H.fA)
s(H.dI,P.k)
s(H.dJ,H.cK)
s(H.dK,P.k)
s(H.dL,H.cK)
s(P.dG,P.k)
s(P.dY,P.hB)
s(P.e_,P.de)
s(W.fN,W.i2)
s(W.fP,P.k)
s(W.fQ,W.N)
s(W.fR,P.k)
s(W.fS,W.N)
s(W.fX,P.k)
s(W.fY,W.N)
s(W.h0,P.k)
s(W.h1,W.N)
s(W.h4,P.L)
s(W.h5,P.L)
s(W.h6,P.k)
s(W.h7,W.N)
s(W.h8,P.k)
s(W.h9,W.N)
s(W.hc,P.k)
s(W.hd,W.N)
s(W.hf,P.L)
s(W.dO,P.k)
s(W.dP,W.N)
s(W.hh,P.k)
s(W.hi,W.N)
s(W.hn,P.L)
s(W.ht,P.k)
s(W.hu,W.N)
s(W.dR,P.k)
s(W.dS,W.N)
s(W.hv,P.k)
s(W.hw,W.N)
s(W.hD,P.k)
s(W.hE,W.N)
s(W.hF,P.k)
s(W.hG,W.N)
s(W.hH,P.k)
s(W.hI,W.N)
s(W.hJ,P.k)
s(W.hK,W.N)
s(W.hL,P.k)
s(W.hM,W.N)
s(P.h2,P.k)
s(P.h3,W.N)
s(P.ha,P.k)
s(P.hb,W.N)
s(P.ho,P.k)
s(P.hp,W.N)
s(P.hx,P.k)
s(P.hy,W.N)
s(P.fK,P.L)
s(P.hk,P.k)
s(P.hl,W.N)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",F:"double",a3:"num",l:"String",aa:"bool",af:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~(Z)","~()","~([Z?])","~(m)","~(am)","~(l,@)","~(i,i)","~(ci,F,F)","~(at)","~(i,j<by>)","~(@,@)","~(bH)","af()","~(~())","T(F)","@()","~(i,j<av>)","F(F)","F(F,F)","~(i,j<ab?>)","F()","~(i,j<bd>)","aa(C,l,l,cn)","~(cd,l,i)","~(bB)","aa(aJ)","aa(l)","~(~(Z))","aa(t)","l(i)","~(@)","af(@,@)","~(a3)","~(t,t?)","l(l)","~(l,l)","~(bk)","@(@)","aa(j<av>)","cd(@,@)","~(l,l?)","i(i,i)","~(l[@])","~(l,i)","H<l,l>(H<l,l>,l)","~(P?,P?)","bU(i)","af(~())","af(@)","@(l)","i(b3,b3)","i(b5,b5)","i(bg,bg)","i(bi,bi)","~(jk)","aa(aG?)","i(@,@)","@(@,l)","l(e)","C(t)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.oV(v.typeUniverse,JSON.parse('{"eV":"bb","bI":"bb","aR":"bb","qy":"m","qK":"m","qA":"b4","qz":"e","qR":"e","qU":"e","qx":"o","qL":"o","qB":"v","qO":"v","qM":"t","qJ":"t","rj":"ad","qF":"aZ","qC":"aF","qV":"aF","qT":"am","qN":"bz","qG":"I","qH":"ah","qQ":"bD","qP":"a0","ew":{"aa":[]},"bb":{"lU":[]},"w":{"p":["1"],"n":["1"],"j":["1"],"z":["1"]},"it":{"w":["1"],"p":["1"],"n":["1"],"j":["1"],"z":["1"]},"c1":{"F":[],"a3":[]},"cP":{"F":[],"i":[],"a3":[]},"ex":{"F":[],"a3":[]},"ba":{"l":[],"z":["@"]},"cR":{"K":[]},"r":{"k":["i"],"p":["i"],"n":["i"],"j":["i"],"k.E":"i"},"n":{"j":["1"]},"cW":{"n":["1"],"j":["1"]},"aT":{"j":["2"],"j.E":"2"},"cI":{"aT":["1","2"],"n":["2"],"j":["2"],"j.E":"2"},"d0":{"cW":["2"],"n":["2"],"j":["2"],"j.E":"2"},"b_":{"j":["1"],"j.E":"1"},"cg":{"k":["1"],"p":["1"],"n":["1"],"j":["1"]},"cD":{"H":["1","2"]},"cE":{"H":["1","2"]},"da":{"K":[]},"ez":{"K":[]},"fz":{"K":[]},"bw":{"cM":[]},"fh":{"cM":[]},"fa":{"cM":[]},"bS":{"cM":[]},"f3":{"K":[]},"X":{"L":["1","2"],"H":["1","2"],"L.V":"2"},"cT":{"n":["1"],"j":["1"],"j.E":"1"},"ey":{"m2":[]},"c4":{"A":["1"],"a0":[],"z":["1"]},"bD":{"k":["F"],"A":["F"],"p":["F"],"a0":[],"n":["F"],"z":["F"],"j":["F"],"k.E":"F"},"d6":{"k":["i"],"A":["i"],"p":["i"],"a0":[],"n":["i"],"z":["i"],"j":["i"]},"eL":{"k":["i"],"A":["i"],"p":["i"],"a0":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"eM":{"k":["i"],"A":["i"],"p":["i"],"a0":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"eN":{"k":["i"],"A":["i"],"p":["i"],"a0":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"eO":{"k":["i"],"A":["i"],"p":["i"],"a0":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"eP":{"k":["i"],"A":["i"],"p":["i"],"a0":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"d7":{"k":["i"],"A":["i"],"p":["i"],"a0":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"bE":{"k":["i"],"cd":[],"A":["i"],"p":["i"],"a0":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"fV":{"K":[]},"dU":{"K":[]},"dT":{"jk":[]},"dQ":{"j":["1"],"j.E":"1"},"dE":{"de":["1"],"n":["1"],"j":["1"]},"cO":{"j":["1"]},"cV":{"k":["1"],"p":["1"],"n":["1"],"j":["1"]},"cZ":{"L":["1","2"],"H":["1","2"]},"L":{"H":["1","2"]},"d_":{"H":["1","2"]},"ch":{"H":["1","2"]},"dM":{"de":["1"],"n":["1"],"j":["1"]},"F":{"a3":[]},"i":{"a3":[]},"p":{"n":["1"],"j":["1"]},"ed":{"K":[]},"fr":{"K":[]},"eQ":{"K":[]},"aE":{"K":[]},"dd":{"K":[]},"eu":{"K":[]},"fB":{"K":[]},"fy":{"K":[]},"c9":{"K":[]},"ei":{"K":[]},"eT":{"K":[]},"di":{"K":[]},"ek":{"K":[]},"bL":{"fC":[]},"hg":{"fC":[]},"fO":{"fC":[]},"v":{"C":[],"t":[],"e":[]},"b6":{"C":[],"t":[],"e":[]},"C":{"t":[],"e":[]},"ae":{"bt":[]},"bB":{"m":[]},"am":{"m":[]},"t":{"e":[]},"an":{"e":[]},"ao":{"e":[]},"ad":{"e":[]},"bH":{"m":[]},"aZ":{"m":[]},"bk":{"am":[],"m":[]},"cn":{"aJ":[]},"eb":{"C":[],"t":[],"e":[]},"ec":{"C":[],"t":[],"e":[]},"bR":{"C":[],"t":[],"e":[]},"bu":{"C":[],"t":[],"e":[]},"bv":{"C":[],"t":[],"e":[]},"aF":{"t":[],"e":[]},"cG":{"k":["a8<a3>"],"p":["a8<a3>"],"A":["a8<a3>"],"n":["a8<a3>"],"j":["a8<a3>"],"z":["a8<a3>"],"k.E":"a8<a3>"},"cH":{"a8":["a3"]},"en":{"k":["l"],"p":["l"],"A":["l"],"n":["l"],"j":["l"],"z":["l"],"k.E":"l"},"fL":{"k":["C"],"p":["C"],"n":["C"],"j":["C"],"k.E":"C"},"bX":{"k":["ae"],"p":["ae"],"A":["ae"],"n":["ae"],"j":["ae"],"z":["ae"],"k.E":"ae"},"ep":{"e":[]},"er":{"C":[],"t":[],"e":[]},"bz":{"k":["t"],"p":["t"],"A":["t"],"n":["t"],"j":["t"],"z":["t"],"k.E":"t"},"bZ":{"C":[],"t":[],"e":[]},"c0":{"C":[],"t":[],"e":[]},"c2":{"e":[]},"eI":{"L":["l","@"],"H":["l","@"],"L.V":"@"},"eJ":{"L":["l","@"],"H":["l","@"],"L.V":"@"},"eK":{"k":["aw"],"p":["aw"],"A":["aw"],"n":["aw"],"j":["aw"],"z":["aw"],"k.E":"aw"},"a5":{"k":["t"],"p":["t"],"n":["t"],"j":["t"],"k.E":"t"},"d8":{"k":["t"],"p":["t"],"A":["t"],"n":["t"],"j":["t"],"z":["t"],"k.E":"t"},"eX":{"k":["ax"],"p":["ax"],"A":["ax"],"n":["ax"],"j":["ax"],"z":["ax"],"k.E":"ax"},"f2":{"L":["l","@"],"H":["l","@"],"L.V":"@"},"f4":{"C":[],"t":[],"e":[]},"f6":{"k":["an"],"p":["an"],"A":["an"],"e":[],"n":["an"],"j":["an"],"z":["an"],"k.E":"an"},"f7":{"k":["aA"],"p":["aA"],"A":["aA"],"n":["aA"],"j":["aA"],"z":["aA"],"k.E":"aA"},"fb":{"L":["l","l"],"H":["l","l"],"L.V":"l"},"bj":{"C":[],"t":[],"e":[]},"dj":{"C":[],"t":[],"e":[]},"ff":{"C":[],"t":[],"e":[]},"fg":{"C":[],"t":[],"e":[]},"cb":{"C":[],"t":[],"e":[]},"fi":{"k":["ad"],"p":["ad"],"A":["ad"],"n":["ad"],"j":["ad"],"z":["ad"],"k.E":"ad"},"fj":{"k":["ao"],"p":["ao"],"A":["ao"],"e":[],"n":["ao"],"j":["ao"],"z":["ao"],"k.E":"ao"},"fp":{"k":["ap"],"p":["ap"],"A":["ap"],"n":["ap"],"j":["ap"],"z":["ap"],"k.E":"ap"},"fF":{"e":[]},"cl":{"e":[]},"cm":{"t":[],"e":[]},"fM":{"k":["I"],"p":["I"],"A":["I"],"n":["I"],"j":["I"],"z":["I"],"k.E":"I"},"dB":{"a8":["a3"]},"h_":{"k":["au?"],"p":["au?"],"A":["au?"],"n":["au?"],"j":["au?"],"z":["au?"],"k.E":"au?"},"dH":{"k":["t"],"p":["t"],"A":["t"],"n":["t"],"j":["t"],"z":["t"],"k.E":"t"},"hj":{"k":["aB"],"p":["aB"],"A":["aB"],"n":["aB"],"j":["aB"],"z":["aB"],"k.E":"aB"},"hq":{"k":["ah"],"p":["ah"],"A":["ah"],"n":["ah"],"j":["ah"],"z":["ah"],"k.E":"ah"},"fJ":{"L":["l","l"],"H":["l","l"]},"fT":{"L":["l","l"],"H":["l","l"],"L.V":"l"},"dC":{"ca":["1"]},"d9":{"aJ":[]},"dN":{"aJ":[]},"hs":{"aJ":[]},"hr":{"aJ":[]},"dV":{"bA":[]},"eq":{"k":["C"],"p":["C"],"n":["C"],"j":["C"],"k.E":"C"},"a8":{"he":["1"]},"eB":{"k":["aS"],"p":["aS"],"n":["aS"],"j":["aS"],"k.E":"aS"},"eR":{"k":["aV"],"p":["aV"],"n":["aV"],"j":["aV"],"k.E":"aV"},"c8":{"o":[],"C":[],"t":[],"e":[]},"fd":{"k":["l"],"p":["l"],"n":["l"],"j":["l"],"k.E":"l"},"o":{"C":[],"t":[],"e":[]},"fq":{"k":["aX"],"p":["aX"],"n":["aX"],"j":["aX"],"k.E":"aX"},"ef":{"L":["l","@"],"H":["l","@"],"L.V":"@"},"eg":{"e":[]},"b4":{"e":[]},"eS":{"e":[]},"f8":{"k":["H<@,@>"],"p":["H<@,@>"],"n":["H<@,@>"],"j":["H<@,@>"],"k.E":"H<@,@>"},"cN":{"aU":[]},"aN":{"aU":[]},"ac":{"aU":[]},"f_":{"aU":[]},"u":{"aU":[]},"dm":{"aU":[]},"al":{"j":["1"],"al.T":"1"},"b8":{"Z":[]},"b9":{"Z":[]},"J":{"Z":[]},"cY":{"Z":[]},"c3":{"Z":[]},"eZ":{"Z":[]},"dl":{"Z":[]},"nB":{"av":[]},"bV":{"av":[]},"o2":{"av":[]},"om":{"av":[]},"cS":{"al":["av"],"j":["av"],"al.T":"av"},"cC":{"ab":[]},"bY":{"al":["ab?"],"ab":[],"j":["ab?"],"al.T":"ab?"},"dy":{"ab":[]},"ce":{"a2":[]},"cf":{"a2":[]},"eF":{"df":[]},"fu":{"a2":[]},"fv":{"a2":[]},"fw":{"a2":[]},"fs":{"a2":[]},"dn":{"a2":[]},"ft":{"a2":[]},"dp":{"a2":[]},"dq":{"a2":[]},"fx":{"a2":[]},"dt":{"a2":[]},"dv":{"a2":[]},"dw":{"a2":[]},"d1":{"dk":[]},"fk":{"cc":[]},"fl":{"cc":[]},"el":{"aG":[]},"es":{"aG":[]},"et":{"aG":[]},"eW":{"aG":[]},"cd":{"p":["i"],"n":["i"],"j":["i"]}}'))
H.oU(v.typeUniverse,JSON.parse('{"ak":1,"n":1,"bc":1,"eE":2,"fH":1,"cK":1,"fA":1,"cg":1,"cD":2,"eD":1,"c4":1,"ca":1,"bK":1,"fc":2,"dF":1,"cO":1,"cV":1,"cZ":2,"hB":2,"d_":2,"dM":1,"dG":1,"dY":2,"e_":1,"eh":2,"ej":2,"ev":1,"dC":1,"N":1,"cL":1,"b8":1,"b9":1,"J":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.lx
return{cR:s("bR"),fK:s("bt"),Y:s("bu"),eT:s("bU"),ed:s("cz"),gA:s("bv"),ar:s("cB"),gw:s("n<@>"),h:s("C"),l:s("by"),bU:s("K"),aD:s("m"),c8:s("ae"),bX:s("bX"),b:s("cM"),x:s("bA"),fS:s("bZ"),gk:s("c0"),eu:s("w<ee>"),i:s("w<nB>"),cn:s("w<b3>"),U:s("w<bV>"),fD:s("w<b5>"),C:s("w<b6>"),u:s("w<at>"),fv:s("w<c_>"),e:s("w<av>"),L:s("w<eC>"),F:s("w<p<b6>>"),z:s("w<aU>"),fA:s("w<bd>"),Q:s("w<aJ>"),q:s("w<eY>"),cG:s("w<a1>"),eg:s("w<bg>"),o:s("w<o2>"),D:s("w<om>"),c3:s("w<bi>"),g9:s("w<ca<P>>"),s:s("w<l>"),ga:s("w<cc>"),gT:s("w<ap>"),ab:s("w<dm>"),gN:s("w<cd>"),dC:s("w<a2>"),c:s("w<dr>"),V:s("w<ds>"),B:s("w<du>"),J:s("w<dx>"),k:s("w<ci>"),n:s("w<F>"),gn:s("w<@>"),t:s("w<i>"),g6:s("w<aG?>"),eJ:s("w<ab?>"),bc:s("w<dk?>"),p:s("w<cf?>"),a:s("w<~(Z)>"),aP:s("z<@>"),T:s("cQ"),eH:s("lU"),M:s("aR"),aU:s("A<@>"),fX:s("X<i,aa>"),y:s("X<i,i>"),O:s("p<dr>"),d:s("p<ds>"),m:s("p<du>"),R:s("p<dx>"),r:s("p<@>"),bv:s("cY"),f:s("H<@,@>"),dv:s("d0<l,l>"),gc:s("bd"),bu:s("c2"),Z:s("c3"),bZ:s("d5"),dE:s("a0"),bm:s("bE"),P:s("af"),K:s("P"),I:s("a8<a3>"),fJ:s("m2"),ew:s("c8"),fg:s("df"),N:s("l"),g7:s("o"),bY:s("bj"),aW:s("cb"),aF:s("jk"),bJ:s("fn"),dr:s("dl"),v:s("dn"),w:s("ce"),g:s("dp"),E:s("dq"),bK:s("dt"),j:s("cf"),G:s("dv"),bz:s("dw"),ak:s("bI"),dw:s("ch<l,l>"),dD:s("fC"),h9:s("cm"),ac:s("a5"),cJ:s("aa"),gR:s("F"),A:s("@"),S:s("i"),aw:s("0&*"),_:s("P*"),bG:s("lT<af>?"),X:s("P?"),gW:s("c7?"),dl:s("f9?"),f7:s("fo?"),W:s("ce?"),H:s("a3"),h2:s("~(Z)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.p=W.bu.prototype
C.i=W.bv.prototype
C.Q=W.b6.prototype
C.T=J.a.prototype
C.b=J.w.prototype
C.c=J.cP.prototype
C.U=J.cQ.prototype
C.d=J.c1.prototype
C.a=J.ba.prototype
C.V=J.aR.prototype
C.a_=H.bE.prototype
C.B=J.eV.prototype
C.a3=P.c7.prototype
C.C=W.dj.prototype
C.o=J.bI.prototype
C.D=W.bk.prototype
C.E=W.cl.prototype
C.F=new E.bT("Browser.chrome")
C.q=new E.bT("Browser.firefox")
C.r=new E.bT("Browser.edge")
C.G=new E.bT("Browser.other")
C.a6=new P.hX()
C.H=new P.hW()
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

C.O=new P.eT()
C.e=new P.jA()
C.P=new P.jE()
C.f=new P.jZ()
C.m=new P.bx(0)
C.R=new P.bx(5e6)
C.S=new P.ir("element",!1,!1,!1)
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
C.Z=new H.cE(0,{},C.v,H.lx("cE<l,l>"))
C.a0=new E.c5("OperatingSystem.windows")
C.A=new E.c5("OperatingSystem.mac")
C.a1=new E.c5("OperatingSystem.linux")
C.a2=new E.c5("OperatingSystem.other")
C.a4=new P.jB(!1)
C.a5=new P.co(null,2)})();(function staticFields(){$.jW=null
$.aO=0
$.cy=null
$.lL=null
$.mW=null
$.mP=null
$.n1=null
$.kC=null
$.kJ=null
$.lz=null
$.cr=null
$.e2=null
$.e3=null
$.ls=!1
$.aK=C.f
$.ai=H.b([],H.lx("w<P>"))
$.b7=null
$.l1=null
$.lR=null
$.lQ=null
$.dD=P.S(t.N,t.b)
$.id=null
$.lW=null
$.lY=null
$.ag=null
$.aW=null
$.m4=null
$.jF=null
$.ml=null
$.mk=null
$.jG=null
$.jH=null
$.jI=null
$.mj=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"qI","n8",function(){return H.qd("_$dart_dartClosure")})
s($,"qW","na",function(){return H.aY(H.jq({
toString:function(){return"$receiver$"}}))})
s($,"qX","nb",function(){return H.aY(H.jq({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"qY","nc",function(){return H.aY(H.jq(null))})
s($,"qZ","nd",function(){return H.aY(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"r1","ng",function(){return H.aY(H.jq(void 0))})
s($,"r2","nh",function(){return H.aY(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"r0","nf",function(){return H.aY(H.mc(null))})
s($,"r_","ne",function(){return H.aY(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"r4","nj",function(){return H.aY(H.mc(void 0))})
s($,"r3","ni",function(){return H.aY(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"rk","lF",function(){return P.oy()})
s($,"r5","nk",function(){return new P.jD().$0()})
s($,"r6","nl",function(){return new P.jC().$0()})
s($,"rl","np",function(){return new Int8Array(H.cq(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"ro","nr",function(){return P.of("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"rB","ns",function(){return P.pf()})
s($,"rm","nq",function(){return P.lV(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"rd","no",function(){return Z.aC(0)})
s($,"r7","nm",function(){return Z.aC(511)})
s($,"rf","bs",function(){return Z.aC(1)})
s($,"re","br",function(){return Z.aC(2)})
s($,"r9","bq",function(){return Z.aC(4)})
s($,"rg","bO",function(){return Z.aC(8)})
s($,"rh","bP",function(){return Z.aC(16)})
s($,"ra","e8",function(){return Z.aC(32)})
s($,"rb","e9",function(){return Z.aC(64)})
s($,"rc","nn",function(){return Z.aC(96)})
s($,"ri","cw",function(){return Z.aC(128)})
s($,"r8","bp",function(){return Z.aC(256)})
s($,"qE","n7",function(){return new V.ie()})
r($,"qD","G",function(){return $.n7()})
r($,"qS","n9",function(){var q=V.o3(),p=V.mm(),o=$.mj,n=(o==null?$.mj=V.ov(0,0,-1):o).H(),m=p.aE(n).H(),l=n.aE(m),k=V.ow(q)
return V.be(m.a,l.a,n.a,m.b1(0).a8(k),m.b,l.b,n.b,l.b1(0).a8(k),m.c,l.c,n.c,n.b1(0).a8(k),0,0,0,1)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.d5,DataView:H.a0,ArrayBufferView:H.a0,Float32Array:H.bD,Float64Array:H.bD,Int16Array:H.eL,Int32Array:H.eM,Int8Array:H.eN,Uint16Array:H.eO,Uint32Array:H.eP,Uint8ClampedArray:H.d7,CanvasPixelArray:H.d7,Uint8Array:H.bE,HTMLAudioElement:W.v,HTMLBRElement:W.v,HTMLButtonElement:W.v,HTMLContentElement:W.v,HTMLDListElement:W.v,HTMLDataElement:W.v,HTMLDataListElement:W.v,HTMLDetailsElement:W.v,HTMLDialogElement:W.v,HTMLEmbedElement:W.v,HTMLFieldSetElement:W.v,HTMLHRElement:W.v,HTMLHeadElement:W.v,HTMLHeadingElement:W.v,HTMLHtmlElement:W.v,HTMLIFrameElement:W.v,HTMLLIElement:W.v,HTMLLabelElement:W.v,HTMLLegendElement:W.v,HTMLLinkElement:W.v,HTMLMapElement:W.v,HTMLMediaElement:W.v,HTMLMenuElement:W.v,HTMLMetaElement:W.v,HTMLMeterElement:W.v,HTMLModElement:W.v,HTMLOListElement:W.v,HTMLObjectElement:W.v,HTMLOptGroupElement:W.v,HTMLOptionElement:W.v,HTMLOutputElement:W.v,HTMLParagraphElement:W.v,HTMLParamElement:W.v,HTMLPictureElement:W.v,HTMLPreElement:W.v,HTMLProgressElement:W.v,HTMLQuoteElement:W.v,HTMLScriptElement:W.v,HTMLShadowElement:W.v,HTMLSlotElement:W.v,HTMLSourceElement:W.v,HTMLSpanElement:W.v,HTMLStyleElement:W.v,HTMLTableCaptionElement:W.v,HTMLTableColElement:W.v,HTMLTextAreaElement:W.v,HTMLTimeElement:W.v,HTMLTitleElement:W.v,HTMLTrackElement:W.v,HTMLUListElement:W.v,HTMLUnknownElement:W.v,HTMLVideoElement:W.v,HTMLDirectoryElement:W.v,HTMLFontElement:W.v,HTMLFrameElement:W.v,HTMLFrameSetElement:W.v,HTMLMarqueeElement:W.v,HTMLElement:W.v,AccessibleNodeList:W.hR,HTMLAnchorElement:W.eb,HTMLAreaElement:W.ec,HTMLBaseElement:W.bR,Blob:W.bt,HTMLBodyElement:W.bu,HTMLCanvasElement:W.bv,CanvasRenderingContext2D:W.cB,CDATASection:W.aF,CharacterData:W.aF,Comment:W.aF,ProcessingInstruction:W.aF,Text:W.aF,CSSPerspective:W.i1,CSSCharsetRule:W.I,CSSConditionRule:W.I,CSSFontFaceRule:W.I,CSSGroupingRule:W.I,CSSImportRule:W.I,CSSKeyframeRule:W.I,MozCSSKeyframeRule:W.I,WebKitCSSKeyframeRule:W.I,CSSKeyframesRule:W.I,MozCSSKeyframesRule:W.I,WebKitCSSKeyframesRule:W.I,CSSMediaRule:W.I,CSSNamespaceRule:W.I,CSSPageRule:W.I,CSSRule:W.I,CSSStyleRule:W.I,CSSSupportsRule:W.I,CSSViewportRule:W.I,CSSStyleDeclaration:W.cF,MSStyleCSSProperties:W.cF,CSS2Properties:W.cF,CSSImageValue:W.as,CSSKeywordValue:W.as,CSSNumericValue:W.as,CSSPositionValue:W.as,CSSResourceValue:W.as,CSSUnitValue:W.as,CSSURLImageValue:W.as,CSSStyleValue:W.as,CSSMatrixComponent:W.aQ,CSSRotation:W.aQ,CSSScale:W.aQ,CSSSkew:W.aQ,CSSTranslation:W.aQ,CSSTransformComponent:W.aQ,CSSTransformValue:W.i3,CSSUnparsedValue:W.i4,DataTransferItemList:W.i5,HTMLDivElement:W.b6,DOMException:W.i6,ClientRectList:W.cG,DOMRectList:W.cG,DOMRectReadOnly:W.cH,DOMStringList:W.en,DOMTokenList:W.i7,Element:W.C,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,SubmitEvent:W.m,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ae,FileList:W.bX,FileWriter:W.ep,HTMLFormElement:W.er,Gamepad:W.au,History:W.ip,HTMLCollection:W.bz,HTMLFormControlsCollection:W.bz,HTMLOptionsCollection:W.bz,ImageData:W.bA,HTMLImageElement:W.bZ,HTMLInputElement:W.c0,KeyboardEvent:W.bB,Location:W.iA,MediaList:W.iR,MessagePort:W.c2,MIDIInputMap:W.eI,MIDIOutputMap:W.eJ,MimeType:W.aw,MimeTypeArray:W.eK,PointerEvent:W.am,MouseEvent:W.am,DragEvent:W.am,Document:W.t,DocumentFragment:W.t,HTMLDocument:W.t,ShadowRoot:W.t,XMLDocument:W.t,DocumentType:W.t,Node:W.t,NodeList:W.d8,RadioNodeList:W.d8,Plugin:W.ax,PluginArray:W.eX,RTCStatsReport:W.f2,HTMLSelectElement:W.f4,SourceBuffer:W.an,SourceBufferList:W.f6,SpeechGrammar:W.aA,SpeechGrammarList:W.f7,SpeechRecognitionResult:W.aB,Storage:W.fb,CSSStyleSheet:W.ah,StyleSheet:W.ah,HTMLTableCellElement:W.bj,HTMLTableDataCellElement:W.bj,HTMLTableHeaderCellElement:W.bj,HTMLTableElement:W.dj,HTMLTableRowElement:W.ff,HTMLTableSectionElement:W.fg,HTMLTemplateElement:W.cb,TextTrack:W.ao,TextTrackCue:W.ad,VTTCue:W.ad,TextTrackCueList:W.fi,TextTrackList:W.fj,TimeRanges:W.jj,Touch:W.ap,TouchEvent:W.bH,TouchList:W.fp,TrackDefaultList:W.jo,CompositionEvent:W.aZ,FocusEvent:W.aZ,TextEvent:W.aZ,UIEvent:W.aZ,URL:W.jz,VideoTrackList:W.fF,WheelEvent:W.bk,Window:W.cl,DOMWindow:W.cl,Attr:W.cm,CSSRuleList:W.fM,ClientRect:W.dB,DOMRect:W.dB,GamepadList:W.h_,NamedNodeMap:W.dH,MozNamedAttrMap:W.dH,SpeechRecognitionResultList:W.hj,StyleSheetList:W.hq,SVGLength:P.aS,SVGLengthList:P.eB,SVGNumber:P.aV,SVGNumberList:P.eR,SVGPointList:P.iZ,SVGScriptElement:P.c8,SVGStringList:P.fd,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,SVGTransform:P.aX,SVGTransformList:P.fq,AudioBuffer:P.hU,AudioParamMap:P.ef,AudioTrackList:P.eg,AudioContext:P.b4,webkitAudioContext:P.b4,BaseAudioContext:P.b4,OfflineAudioContext:P.eS,WebGL2RenderingContext:P.c7,SQLResultSetRowList:P.f8})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c4.$nativeSuperclassTag="ArrayBufferView"
H.dI.$nativeSuperclassTag="ArrayBufferView"
H.dJ.$nativeSuperclassTag="ArrayBufferView"
H.bD.$nativeSuperclassTag="ArrayBufferView"
H.dK.$nativeSuperclassTag="ArrayBufferView"
H.dL.$nativeSuperclassTag="ArrayBufferView"
H.d6.$nativeSuperclassTag="ArrayBufferView"
W.dO.$nativeSuperclassTag="EventTarget"
W.dP.$nativeSuperclassTag="EventTarget"
W.dR.$nativeSuperclassTag="EventTarget"
W.dS.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=M.qn
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
