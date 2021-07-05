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
a[c]=function(){a[c]=function(){H.pv(b)}
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
if(a[b]!==s)H.pw(b)
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
if(w[s][a])return w[s][a]}}var C={},H={kq:function kq(){},
ks:function(a){return new H.cy("Field '"+a+"' has been assigned during initialization.")},
jV:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
iD:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
nw:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
pa:function(a,b,c){return a},
n9:function(a,b,c,d){if(t.gw.b(a))return new H.cq(a,b,c.H("@<0>").b1(d).H("cq<1,2>"))
return new H.aK(a,b,c.H("@<0>").b1(d).H("aK<1,2>"))},
l7:function(){return new P.eP("No element")},
nt:function(a,b){H.eK(a,0,J.aW(a)-1,b)},
eK:function(a,b,c,d){if(c-b<=32)H.ns(a,b,c,d)
else H.nr(a,b,c,d)},
ns:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.bz(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.ag()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
nr:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.a0(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a0(a4+a5,2),f=g-j,e=g+j,d=J.bz(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.ag()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ag()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.ag()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ag()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.ag()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.ag()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.ag()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ag()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ag()
if(a2>0){s=a1
a1=a0
a0=s}d.j(a3,i,c)
d.j(a3,g,a)
d.j(a3,h,a1)
d.j(a3,f,d.h(a3,a4))
d.j(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.J(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
n=a6.$2(o,b)
if(n===0)continue
if(n<0){if(p!==r){d.j(a3,p,d.h(a3,r))
d.j(a3,r,o)}++r}else for(;!0;){n=a6.$2(d.h(a3,q),b)
if(n>0){--q
continue}else{m=q-1
if(n<0){d.j(a3,p,d.h(a3,r))
l=r+1
d.j(a3,r,d.h(a3,q))
d.j(a3,q,o)
q=m
r=l
break}else{d.j(a3,p,d.h(a3,q))
d.j(a3,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=d.h(a3,p)
if(a6.$2(o,b)<0){if(p!==r){d.j(a3,p,d.h(a3,r))
d.j(a3,r,o)}++r}else if(a6.$2(o,a0)>0)for(;!0;)if(a6.$2(d.h(a3,q),a0)>0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.h(a3,q),b)<0){d.j(a3,p,d.h(a3,r))
l=r+1
d.j(a3,r,d.h(a3,q))
d.j(a3,q,o)
r=l}else{d.j(a3,p,d.h(a3,q))
d.j(a3,q,o)}q=m
break}}k=!1}a2=r-1
d.j(a3,a4,d.h(a3,a2))
d.j(a3,a2,b)
a2=q+1
d.j(a3,a5,d.h(a3,a2))
d.j(a3,a2,a0)
H.eK(a3,a4,r-2,a6)
H.eK(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.J(a6.$2(d.h(a3,r),b),0);)++r
for(;J.J(a6.$2(d.h(a3,q),a0),0);)--q
for(p=r;p<=q;++p){o=d.h(a3,p)
if(a6.$2(o,b)===0){if(p!==r){d.j(a3,p,d.h(a3,r))
d.j(a3,r,o)}++r}else if(a6.$2(o,a0)===0)for(;!0;)if(a6.$2(d.h(a3,q),a0)===0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.h(a3,q),b)<0){d.j(a3,p,d.h(a3,r))
l=r+1
d.j(a3,r,d.h(a3,q))
d.j(a3,q,o)
r=l}else{d.j(a3,p,d.h(a3,q))
d.j(a3,q,o)}q=m
break}}H.eK(a3,r,q,a6)}else H.eK(a3,r,q,a6)},
cy:function cy(a){this.a=a},
T:function T(a){this.a=a},
m:function m(){},
bO:function bO(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aK:function aK(a,b,c){this.a=a
this.b=b
this.$ti=c},
cq:function cq(a,b,c){this.a=a
this.b=b
this.$ti=c},
ek:function ek(a,b){this.a=null
this.b=a
this.c=b},
dj:function dj(a,b,c){this.a=a
this.b=b
this.$ti=c},
fg:function fg(a,b){this.a=a
this.b=b},
cr:function cr(){},
f9:function f9(){},
c_:function c_(){},
mV:function(){throw H.c(P.A("Cannot modify unmodifiable Map"))},
ml:function(a){var s,r=H.mk(a)
if(r!=null)return r
s="minified:"+a
return s},
me:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
x:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dT(a)
return s},
cP:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
lh:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.d(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.c(P.a9(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.C(q,o)|32)>r)return n}return parseInt(a,b)},
cQ:function(a){return H.nc(a)},
nc:function(a){var s,r,q,p
if(a instanceof P.P)return H.ao(H.aU(a),null)
if(J.dO(a)===C.L||t.ak.b(a)){s=C.q(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.ao(H.aU(a),null)},
nd:function(){if(!!self.location)return self.location.href
return null},
lg:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
nl:function(a){var s,r,q,p=H.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){q=a[r]
if(!H.jG(q))throw H.c(H.dN(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aO(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.dN(q))}return H.lg(p)},
li:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.jG(q))throw H.c(H.dN(q))
if(q<0)throw H.c(H.dN(q))
if(q>65535)return H.nl(a)}return H.lg(a)},
nm:function(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aP:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.aO(s,10)|55296)>>>0,s&1023|56320)}}throw H.c(P.a9(a,0,1114111,null,null))},
bU:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nk:function(a){var s=H.bU(a).getFullYear()+0
return s},
ni:function(a){var s=H.bU(a).getMonth()+1
return s},
ne:function(a){var s=H.bU(a).getDate()+0
return s},
nf:function(a){var s=H.bU(a).getHours()+0
return s},
nh:function(a){var s=H.bU(a).getMinutes()+0
return s},
nj:function(a){var s=H.bU(a).getSeconds()+0
return s},
ng:function(a){var s=H.bU(a).getMilliseconds()+0
return s},
mc:function(a){throw H.c(H.dN(a))},
d:function(a,b){if(a==null)J.aW(a)
throw H.c(H.cc(a,b))},
cc:function(a,b){var s,r="index"
if(!H.jG(b))return new P.aD(!0,b,r,null)
s=J.aW(a)
if(b<0||b>=s)return P.M(b,a,r,null,s)
return P.eF(b,r)},
pd:function(a,b,c){if(a>c)return P.a9(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a9(b,a,c,"end",null)
return new P.aD(!0,b,"end",null)},
dN:function(a){return new P.aD(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.ew()
s=new Error()
s.dartException=a
r=H.px
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
px:function(){return J.dT(this.dartException)},
h:function(a){throw H.c(a)},
q:function(a){throw H.c(P.aZ(a))},
aR:function(a){var s,r,q,p,o,n
a=H.mh(a.replace(String({}),"$receiver$"))
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
lu:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
kr:function(a,b){var s=b==null,r=s?null:b.method
return new H.ef(a,r,s?null:b.receiver)},
be:function(a){if(a==null)return new H.im(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bB(a,a.dartException)
return H.p6(a)},
bB:function(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
p6:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aO(r,16)&8191)===10)switch(q){case 438:return H.bB(a,H.kr(H.x(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.x(s)+" (Error "+q+")"
return H.bB(a,new H.cO(p,e))}}if(a instanceof TypeError){o=$.mp()
n=$.mq()
m=$.mr()
l=$.ms()
k=$.mv()
j=$.mw()
i=$.mu()
$.mt()
h=$.my()
g=$.mx()
f=o.ae(s)
if(f!=null)return H.bB(a,H.kr(s,f))
else{f=n.ae(s)
if(f!=null){f.method="call"
return H.bB(a,H.kr(s,f))}else{f=m.ae(s)
if(f==null){f=l.ae(s)
if(f==null){f=k.ae(s)
if(f==null){f=j.ae(s)
if(f==null){f=i.ae(s)
if(f==null){f=l.ae(s)
if(f==null){f=h.ae(s)
if(f==null){f=g.ae(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bB(a,new H.cO(s,f==null?e:f.method))}}return H.bB(a,new H.f8(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.d_()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bB(a,new P.aD(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.d_()
return a},
kU:function(a){var s
if(a==null)return new H.fV(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.fV(a)},
pf:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
pl:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.f("Unsupported number of arguments for wrapped closure"))},
cb:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pl)
a.$identity=s
return s},
mU:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.iB().constructor.prototype):Object.create(new H.cg(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aE
if(typeof r!=="number")return r.S()
$.aE=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.l4(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.mQ(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.l4(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
mQ:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mb,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.mO:H.mN
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
mR:function(a,b,c,d){var s=H.l2
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
l4:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.mT(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.mR(r,!p,s,b)
if(r===0){p=$.aE
if(typeof p!=="number")return p.S()
$.aE=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.ch
return new Function(p+(o==null?$.ch=H.hs("self"):o)+";return "+n+"."+H.x(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aE
if(typeof p!=="number")return p.S()
$.aE=p+1
m+=p
p="return function("+m+"){return this."
o=$.ch
return new Function(p+(o==null?$.ch=H.hs("self"):o)+"."+H.x(s)+"("+m+");}")()},
mS:function(a,b,c,d){var s=H.l2,r=H.mP
switch(b?-1:a){case 0:throw H.c(new H.eI("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
mT:function(a,b){var s,r,q,p,o,n,m,l=$.ch
if(l==null)l=$.ch=H.hs("self")
s=$.l1
if(s==null)s=$.l1=H.hs("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.mS(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.x(r)+"(this."+s+");"
n=$.aE
if(typeof n!=="number")return n.S()
$.aE=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.x(r)+"(this."+s+", "+m+");"
n=$.aE
if(typeof n!=="number")return n.S()
$.aE=n+1
return new Function(o+n+"}")()},
kS:function(a,b,c,d,e,f,g){return H.mU(a,b,c,d,!!e,!!f,g)},
mN:function(a,b){return H.h6(v.typeUniverse,H.aU(a.a),b)},
mO:function(a,b){return H.h6(v.typeUniverse,H.aU(a.c),b)},
l2:function(a){return a.a},
mP:function(a){return a.c},
hs:function(a){var s,r,q,p=new H.cg("self","target","receiver","name"),o=J.kp(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.cf("Field name "+a+" not found."))},
pv:function(a){throw H.c(new P.e3(a))},
pg:function(a){return v.getIsolateTag(a)},
pw:function(a){return H.h(new H.cy(a))},
qF:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
po:function(a){var s,r,q,p,o,n=$.ma.$1(a),m=$.jQ[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.k_[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.m2.$2(a,n)
if(q!=null){m=$.jQ[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.k_[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.ka(s)
$.jQ[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.k_[n]=s
return s}if(p==="-"){o=H.ka(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.mf(a,s)
if(p==="*")throw H.c(P.iQ(n))
if(v.leafTags[n]===true){o=H.ka(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.mf(a,s)},
mf:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.kW(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
ka:function(a){return J.kW(a,!1,null,!!a.$iz)},
pq:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.ka(s)
else return J.kW(s,c,null,null)},
pj:function(){if(!0===$.kV)return
$.kV=!0
H.pk()},
pk:function(){var s,r,q,p,o,n,m,l
$.jQ=Object.create(null)
$.k_=Object.create(null)
H.pi()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.mg.$1(o)
if(n!=null){m=H.pq(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
pi:function(){var s,r,q,p,o,n,m=C.C()
m=H.ca(C.D,H.ca(C.E,H.ca(C.r,H.ca(C.r,H.ca(C.F,H.ca(C.G,H.ca(C.H(C.q),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.ma=new H.jW(p)
$.m2=new H.jX(o)
$.mg=new H.jY(n)},
ca:function(a,b){return a(b)||b},
n4:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.a7("Illegal RegExp pattern ("+String(n)+")",a,null))},
mi:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
pe:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mh:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
mj:function(a,b,c){var s=H.pu(a,b,c)
return s},
pu:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mh(b),'g'),H.pe(c))},
cl:function cl(){},
cm:function cm(a,b,c,d){var _=this
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
cO:function cO(a,b){this.a=a
this.b=b},
ef:function ef(a,b,c){this.a=a
this.b=b
this.c=c},
f8:function f8(a){this.a=a},
im:function im(a){this.a=a},
fV:function fV(a){this.a=a
this.b=null},
bG:function bG(){},
iF:function iF(){},
iB:function iB(){},
cg:function cg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eI:function eI(a){this.a=a},
V:function V(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hT:function hT(a){this.a=a},
hW:function hW(a,b){this.a=a
this.b=b
this.c=null},
cA:function cA(a,b){this.a=a
this.$ti=b},
ej:function ej(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
jY:function jY(a){this.a=a},
ee:function ee(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c8:function(a){var s,r,q,p,o
if(t.aP.b(a))return a
s=J.bz(a)
r=s.gk(a)
q=P.cC(r,null,!1,t.z)
for(p=0;p<s.gk(a);++p){o=s.h(a,p)
if(p>=r)return H.d(q,p)
q[p]=o}return q},
aT:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cc(b,a))},
ok:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.pd(a,b,c))
return b},
cK:function cK(){},
a0:function a0(){},
bS:function bS(){},
br:function br(){},
cL:function cL(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
cM:function cM(){},
bs:function bs(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){},
du:function du(){},
lo:function(a,b){var s=b.c
return s==null?b.c=H.kG(a,b.z,!0):s},
ln:function(a,b){var s=b.c
return s==null?b.c=H.dD(a,"l6",[b.z]):s},
lp:function(a){var s=a.y
if(s===6||s===7||s===8)return H.lp(a.z)
return s===11||s===12},
np:function(a){return a.cy},
kT:function(a){return H.kH(v.typeUniverse,a,!1)},
bc:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bc(a,s,a0,a1)
if(r===s)return b
return H.lM(a,r,!0)
case 7:s=b.z
r=H.bc(a,s,a0,a1)
if(r===s)return b
return H.kG(a,r,!0)
case 8:s=b.z
r=H.bc(a,s,a0,a1)
if(r===s)return b
return H.lL(a,r,!0)
case 9:q=b.Q
p=H.dM(a,q,a0,a1)
if(p===q)return b
return H.dD(a,b.z,p)
case 10:o=b.z
n=H.bc(a,o,a0,a1)
m=b.Q
l=H.dM(a,m,a0,a1)
if(n===o&&l===m)return b
return H.kE(a,n,l)
case 11:k=b.z
j=H.bc(a,k,a0,a1)
i=b.Q
h=H.p3(a,i,a0,a1)
if(j===k&&h===i)return b
return H.lK(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dM(a,g,a0,a1)
o=b.z
n=H.bc(a,o,a0,a1)
if(f===g&&n===o)return b
return H.kF(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.hl("Attempted to substitute unexpected RTI kind "+c))}},
dM:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bc(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
p4:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bc(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
p3:function(a,b,c,d){var s,r=b.a,q=H.dM(a,r,c,d),p=b.b,o=H.dM(a,p,c,d),n=b.c,m=H.p4(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fx()
s.a=q
s.b=o
s.c=m
return s},
b:function(a,b){a[v.arrayRti]=b
return a},
pb:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.mb(s)
return a.$S()}return null},
md:function(a,b){var s
if(H.lp(b))if(a instanceof H.bG){s=H.pb(a)
if(s!=null)return s}return H.aU(a)},
aU:function(a){var s
if(a instanceof P.P){s=a.$ti
return s!=null?s:H.kO(a)}if(Array.isArray(a))return H.kN(a)
return H.kO(J.dO(a))},
kN:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
S:function(a){var s=a.$ti
return s!=null?s:H.kO(a)},
kO:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.os(a,s)},
os:function(a,b){var s=a instanceof H.bG?a.__proto__.__proto__.constructor:b,r=H.o1(v.typeUniverse,s.name)
b.$ccache=r
return r},
mb:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.kH(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
or:function(a){var s,r,q,p=this
if(p===t.K)return H.dJ(p,a,H.ow)
if(!H.aV(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.dJ(p,a,H.oz)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.jG
else if(r===t.x||r===t.H)q=H.ov
else if(r===t.N)q=H.ox
else q=r===t.cJ?H.jF:null
if(q!=null)return H.dJ(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.pm)){p.r="$i"+s
return H.dJ(p,a,H.oy)}}else if(s===7)return H.dJ(p,a,H.op)
return H.dJ(p,a,H.on)},
dJ:function(a,b,c){a.b=c
return a.b(b)},
oq:function(a){var s,r=this,q=H.om
if(!H.aV(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.oj
else if(r===t.K)q=H.oh
else{s=H.dP(r)
if(s)q=H.oo}r.a=q
return r.a(a)},
kR:function(a){var s,r=a.y
if(!H.aV(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.kR(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
on:function(a){var s=this
if(a==null)return H.kR(s)
return H.R(v.typeUniverse,H.md(a,s),null,s,null)},
op:function(a){if(a==null)return!0
return this.z.b(a)},
oy:function(a){var s,r=this
if(a==null)return H.kR(r)
s=r.r
if(a instanceof P.P)return!!a[s]
return!!J.dO(a)[s]},
om:function(a){var s,r=this
if(a==null){s=H.dP(r)
if(s)return a}else if(r.b(a))return a
H.lX(a,r)},
oo:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.lX(a,s)},
lX:function(a,b){throw H.c(H.nS(H.lF(a,H.md(a,b),H.ao(b,null))))},
lF:function(a,b,c){var s=P.hJ(a),r=H.ao(b==null?H.aU(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
nS:function(a){return new H.dC("TypeError: "+a)},
ab:function(a,b){return new H.dC("TypeError: "+H.lF(a,null,b))},
ow:function(a){return a!=null},
oh:function(a){if(a!=null)return a
throw H.c(H.ab(a,"Object"))},
oz:function(a){return!0},
oj:function(a){return a},
jF:function(a){return!0===a||!1===a},
lV:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.ab(a,"bool"))},
qt:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ab(a,"bool"))},
qs:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ab(a,"bool?"))},
qu:function(a){if(typeof a=="number")return a
throw H.c(H.ab(a,"double"))},
qw:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"double"))},
qv:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"double?"))},
jG:function(a){return typeof a=="number"&&Math.floor(a)===a},
jz:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.ab(a,"int"))},
qy:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ab(a,"int"))},
qx:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ab(a,"int?"))},
ov:function(a){return typeof a=="number"},
qz:function(a){if(typeof a=="number")return a
throw H.c(H.ab(a,"num"))},
qB:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"num"))},
qA:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"num?"))},
ox:function(a){return typeof a=="string"},
oi:function(a){if(typeof a=="string")return a
throw H.c(H.ab(a,"String"))},
qD:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ab(a,"String"))},
qC:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ab(a,"String?"))},
p_:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.ao(a[q],b)
return s},
lY:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=H.b([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.d(a5,j)
m=C.a.S(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.ao(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.ao(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.ao(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.ao(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.ao(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
ao:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.ao(a.z,b)
return s}if(l===7){r=a.z
s=H.ao(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.ao(a.z,b)+">"
if(l===9){p=H.p5(a.z)
o=a.Q
return o.length!==0?p+("<"+H.p_(o,b)+">"):p}if(l===11)return H.lY(a,b,null)
if(l===12)return H.lY(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
p5:function(a){var s,r=H.mk(a)
if(r!=null)return r
s="minified:"+a
return s},
lN:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
o1:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.kH(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dE(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dD(a,b,q)
n[b]=o
return o}else return m},
o_:function(a,b){return H.lU(a.tR,b)},
nZ:function(a,b){return H.lU(a.eT,b)},
kH:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.lJ(H.lH(a,null,b,c))
r.set(b,s)
return s},
h6:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.lJ(H.lH(a,b,c,!0))
q.set(c,r)
return r},
o0:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.kE(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bb:function(a,b){b.a=H.oq
b.b=H.or
return b},
dE:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.av(null,null)
s.y=b
s.cy=c
r=H.bb(a,s)
a.eC.set(c,r)
return r},
lM:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.nX(a,b,r,c)
a.eC.set(r,s)
return s},
nX:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aV(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.av(null,null)
q.y=6
q.z=b
q.cy=c
return H.bb(a,q)},
kG:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.nW(a,b,r,c)
a.eC.set(r,s)
return s},
nW:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aV(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.dP(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.dP(q.z))return q
else return H.lo(a,b)}}p=new H.av(null,null)
p.y=7
p.z=b
p.cy=c
return H.bb(a,p)},
lL:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.nU(a,b,r,c)
a.eC.set(r,s)
return s},
nU:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aV(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dD(a,"l6",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.av(null,null)
q.y=8
q.z=b
q.cy=c
return H.bb(a,q)},
nY:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.av(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bb(a,s)
a.eC.set(q,r)
return r},
h5:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
nT:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dD:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.h5(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.av(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bb(a,r)
a.eC.set(p,q)
return q},
kE:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.h5(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.av(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bb(a,o)
a.eC.set(q,n)
return n},
lK:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.h5(m)
if(j>0){s=l>0?",":""
r=H.h5(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.nT(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.av(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bb(a,o)
a.eC.set(q,r)
return r},
kF:function(a,b,c,d){var s,r=b.cy+("<"+H.h5(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.nV(a,b,c,r,d)
a.eC.set(r,s)
return s},
nV:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bc(a,b,r,0)
m=H.dM(a,c,r,0)
return H.kF(a,n,m,c!==m)}}l=new H.av(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bb(a,l)},
lH:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
lJ:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.nM(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.lI(a,r,h,g,!1)
else if(q===46)r=H.lI(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.ba(a.u,a.e,g.pop()))
break
case 94:g.push(H.nY(a.u,g.pop()))
break
case 35:g.push(H.dE(a.u,5,"#"))
break
case 64:g.push(H.dE(a.u,2,"@"))
break
case 126:g.push(H.dE(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.kD(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.dD(p,n,o))
else{m=H.ba(p,a.e,n)
switch(m.y){case 11:g.push(H.kF(p,m,o,a.n))
break
default:g.push(H.kE(p,m,o))
break}}break
case 38:H.nN(a,g)
break
case 42:p=a.u
g.push(H.lM(p,H.ba(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.kG(p,H.ba(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.lL(p,H.ba(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.fx()
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
g.push(H.lK(p,H.ba(p,a.e,g.pop()),l))
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
H.nP(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.ba(a.u,a.e,i)},
nM:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
lI:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.lN(s,o.z)[p]
if(n==null)H.h('No "'+p+'" in "'+H.np(o)+'"')
d.push(H.h6(s,o,n))}else d.push(p)
return m},
nN:function(a,b){var s=b.pop()
if(0===s){b.push(H.dE(a.u,1,"0&"))
return}if(1===s){b.push(H.dE(a.u,4,"1&"))
return}throw H.c(P.hl("Unexpected extended operation "+H.x(s)))},
ba:function(a,b,c){if(typeof c=="string")return H.dD(a,c,a.sEA)
else if(typeof c=="number")return H.nO(a,b,c)
else return c},
kD:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.ba(a,b,c[s])},
nP:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.ba(a,b,c[s])},
nO:function(a,b,c){var s,r,q=b.y
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
R:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aV(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aV(b))return!1
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
if(p===6){s=H.lo(a,d)
return H.R(a,b,c,s,e)}if(r===8){if(!H.R(a,b.z,c,d,e))return!1
return H.R(a,H.ln(a,b),c,d,e)}if(r===7){s=H.R(a,t.P,c,d,e)
return s&&H.R(a,b.z,c,d,e)}if(p===8){if(H.R(a,b,c,d.z,e))return!0
return H.R(a,b,c,H.ln(a,d),e)}if(p===7){s=H.R(a,b,c,t.P,e)
return s||H.R(a,b,c,d.z,e)}if(q)return!1
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
if(!H.R(a,k,c,j,e)||!H.R(a,j,e,k,c))return!1}return H.lZ(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.lZ(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.ou(a,b,c,d,e)}return!1},
lZ:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
ou:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.R(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.lN(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.R(a,H.h6(a,b,l[p]),c,r[p],e))return!1
return!0},
dP:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aV(a))if(r!==7)if(!(r===6&&H.dP(a.z)))s=r===8&&H.dP(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
pm:function(a){var s
if(!H.aV(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aV:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
lU:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
av:function av(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fx:function fx(){this.c=this.b=this.a=null},
ft:function ft(){},
dC:function dC(a){this.a=a},
mk:function(a){return v.mangledGlobalNames[a]},
pr:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kW:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jS:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.kV==null){H.pj()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.iQ("Return interceptor for "+H.x(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.jh
if(o==null)o=$.jh=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.po(a)
if(p!=null)return p
if(typeof a=="function")return C.N
s=Object.getPrototypeOf(a)
if(s==null)return C.w
if(s===Object.prototype)return C.w
if(typeof q=="function"){o=$.jh
if(o==null)o=$.jh=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
n1:function(a,b){if(a<0||a>4294967295)throw H.c(P.a9(a,0,4294967295,"length",null))
return J.n2(new Array(a),b)},
ko:function(a,b){if(a<0)throw H.c(P.cf("Length must be a non-negative integer: "+a))
return H.b(new Array(a),b.H("u<0>"))},
n2:function(a,b){return J.kp(H.b(a,b.H("u<0>")))},
kp:function(a){a.fixed$length=Array
return a},
n3:function(a,b){return J.mJ(a,b)},
dO:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cw.prototype
return J.ed.prototype}if(typeof a=="string")return J.bo.prototype
if(a==null)return J.cx.prototype
if(typeof a=="boolean")return J.ec.prototype
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.P)return a
return J.jS(a)},
bz:function(a){if(typeof a=="string")return J.bo.prototype
if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.P)return a
return J.jS(a)},
jR:function(a){if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.P)return a
return J.jS(a)},
m9:function(a){if(typeof a=="number")return J.bN.prototype
if(typeof a=="string")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bZ.prototype
return a},
bA:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.P)return a
return J.jS(a)},
J:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dO(a).m(a,b)},
kZ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.m9(a).F(a,b)},
l_:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.me(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bz(a).h(a,b)},
kh:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.me(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.jR(a).j(a,b,c)},
mH:function(a,b,c){return J.bA(a).fB(a,b,c)},
mI:function(a,b,c,d){return J.bA(a).fU(a,b,c,d)},
mJ:function(a,b){return J.m9(a).ab(a,b)},
ki:function(a,b){return J.jR(a).I(a,b)},
dS:function(a,b){return J.jR(a).A(a,b)},
mK:function(a){return J.bA(a).gbk(a)},
kj:function(a){return J.dO(a).gw(a)},
aC:function(a){return J.jR(a).gW(a)},
aW:function(a){return J.bz(a).gk(a)},
mL:function(a,b){return J.bA(a).hH(a,b)},
dT:function(a){return J.dO(a).i(a)},
a:function a(){},
ec:function ec(){},
cx:function cx(){},
b2:function b2(){},
eB:function eB(){},
bZ:function bZ(){},
aI:function aI(){},
u:function u(a){this.$ti=a},
hS:function hS(a){this.$ti=a},
aj:function aj(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bN:function bN(){},
cw:function cw(){},
ed:function ed(){},
bo:function bo(){}},P={
nF:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.p7()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cb(new P.jd(q),1)).observe(s,{childList:true})
return new P.jc(q,s,r)}else if(self.setImmediate!=null)return P.p8()
return P.p9()},
nG:function(a){self.scheduleImmediate(H.cb(new P.je(a),0))},
nH:function(a){self.setImmediate(H.cb(new P.jf(a),0))},
nI:function(a){P.kw(C.m,a)},
kw:function(a,b){var s=C.c.a0(a.a,1000)
return P.nQ(s<0?0:s,b)},
lt:function(a,b){var s=C.c.a0(a.a,1000)
return P.nR(s<0?0:s,b)},
nQ:function(a,b){var s=new P.dB()
s.ei(a,b)
return s},
nR:function(a,b){var s=new P.dB()
s.ej(a,b)
return s},
qq:function(a){return new P.c5(a,1)},
nJ:function(){return C.X},
nK:function(a){return new P.c5(a,3)},
oB:function(a,b){return new P.dy(a,b.H("dy<0>"))},
oX:function(){var s,r
for(s=$.c9;s!=null;s=$.c9){$.dL=null
r=s.b
$.c9=r
if(r==null)$.dK=null
s.a.$0()}},
p2:function(){$.kP=!0
try{P.oX()}finally{$.dL=null
$.kP=!1
if($.c9!=null)$.kY().$1(P.m3())}},
p0:function(a){var s=new P.fh(a),r=$.dK
if(r==null){$.c9=$.dK=s
if(!$.kP)$.kY().$1(P.m3())}else $.dK=r.b=s},
p1:function(a){var s,r,q,p=$.c9
if(p==null){P.p0(a)
$.dL=$.dK
return}s=new P.fh(a)
r=$.dL
if(r==null){s.b=p
$.c9=$.dL=s}else{q=r.b
s.b=q
$.dL=r.b=s
if(q==null)$.dK=s}},
ls:function(a,b){var s=$.aB
if(s===C.f)return P.kw(a,b)
return P.kw(a,s.fZ(b))},
ny:function(a,b){var s=$.aB
if(s===C.f)return P.lt(a,b)
return P.lt(a,s.dd(b,t.aF))},
m_:function(a,b,c,d,e){P.p1(new P.jJ(d,e))},
oY:function(a,b,c,d){var s,r=$.aB
if(r===c)return d.$0()
$.aB=c
s=r
try{r=d.$0()
return r}finally{$.aB=s}},
oZ:function(a,b,c,d,e){var s,r=$.aB
if(r===c)return d.$1(e)
$.aB=c
s=r
try{r=d.$1(e)
return r}finally{$.aB=s}},
jd:function jd(a){this.a=a},
jc:function jc(a,b,c){this.a=a
this.b=b
this.c=c},
je:function je(a){this.a=a},
jf:function jf(a){this.a=a},
dB:function dB(){this.c=0},
js:function js(a,b){this.a=a
this.b=b},
jr:function jr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c5:function c5(a,b){this.a=a
this.b=b},
c6:function c6(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dy:function dy(a,b){this.a=a
this.$ti=b},
fh:function fh(a){this.a=a
this.b=null},
bV:function bV(){},
eR:function eR(){},
jx:function jx(){},
jJ:function jJ(a,b){this.a=a
this.b=b},
jk:function jk(){},
jl:function jl(a,b){this.a=a
this.b=b},
jm:function jm(a,b,c){this.a=a
this.b=b
this.c=c},
n5:function(a,b){return new H.V(a.H("@<0>").b1(b).H("V<1,2>"))},
n6:function(a,b,c){return H.pf(a,new H.V(b.H("@<0>").b1(c).H("V<1,2>")))},
U:function(a,b){return new H.V(a.H("@<0>").b1(b).H("V<1,2>"))},
l9:function(a){return new P.dm(a.H("dm<0>"))},
kC:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
nL:function(a,b){var s=new P.dn(a,b)
s.c=a.e
return s},
n0:function(a,b,c){var s,r
if(P.kQ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.b([],t.s)
$.ai.push(a)
try{P.oA(a,s)}finally{if(0>=$.ai.length)return H.d($.ai,-1)
$.ai.pop()}r=P.lq(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
kn:function(a,b,c){var s,r
if(P.kQ(a))return b+"..."+c
s=new P.a2(b)
$.ai.push(a)
try{r=s
r.a=P.lq(r.a,a,", ")}finally{if(0>=$.ai.length)return H.d($.ai,-1)
$.ai.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
kQ:function(a){var s,r
for(s=$.ai.length,r=0;r<s;++r)if(a===$.ai[r])return!0
return!1},
oA:function(a,b){var s,r,q,p,o,n,m,l=a.gW(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.v())return
s=H.x(l.gJ(l))
b.push(s)
k+=s.length+2;++j}if(!l.v()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gJ(l);++j
if(!l.v()){if(j<=4){b.push(H.x(p))
return}r=H.x(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gJ(l);++j
for(;l.v();p=o,o=n){n=l.gJ(l);++j
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
n7:function(a,b,c){var s=P.n5(b,c)
a.A(0,new P.hX(s,b,c))
return s},
kt:function(a){var s,r={}
if(P.kQ(a))return"{...}"
s=new P.a2("")
try{$.ai.push(a)
s.a+="{"
r.a=!0
J.dS(a,new P.i0(r,s))
s.a+="}"}finally{if(0>=$.ai.length)return H.d($.ai,-1)
$.ai.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dm:function dm(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jj:function jj(a){this.a=a
this.c=this.b=null},
dn:function dn(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cv:function cv(){},
hX:function hX(a,b,c){this.a=a
this.b=b
this.c=c},
cB:function cB(){},
j:function j(){},
cE:function cE(){},
i0:function i0(a,b){this.a=a
this.b=b},
O:function O(){},
h7:function h7(){},
cF:function cF(){},
c0:function c0(a,b){this.a=a
this.$ti=b},
cV:function cV(){},
dv:function dv(){},
dp:function dp(){},
dF:function dF(){},
dH:function dH(){},
nB:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.nC(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
nC:function(a,b,c,d){var s=a?$.mA():$.mz()
if(s==null)return null
if(0===c&&d===b.length)return P.lz(s,b)
return P.lz(s,b.subarray(c,P.b6(c,d,b.length)))},
lz:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.be(r)}return null},
l0:function(a,b,c,d,e,f){if(C.c.bf(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
og:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
of:function(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.bz(a),r=0;r<p;++r){q=s.h(a,b+r)
o[r]=(q&4294967040)>>>0!==0?255:q}return o},
j_:function j_(){},
iZ:function iZ(){},
hp:function hp(){},
hq:function hq(){},
e0:function e0(){},
e2:function e2(){},
hG:function hG(){},
iX:function iX(){},
j0:function j0(){},
jw:function jw(a){this.b=0
this.c=a},
iY:function iY(a){this.a=a},
jv:function jv(a){this.a=a
this.b=16
this.c=0},
jZ:function(a,b){var s=H.lh(a,b)
if(s!=null)return s
throw H.c(P.a7(a,null,null))},
mY:function(a){if(a instanceof H.bG)return a.i(0)
return"Instance of '"+H.cQ(a)+"'"},
cC:function(a,b,c,d){var s,r=c?J.ko(a,d):J.n1(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
hY:function(a,b,c){var s,r=H.b([],c.H("u<0>"))
for(s=J.aC(a);s.v();)r.push(s.gJ(s))
if(b)return r
return J.kp(r)},
n8:function(a,b,c){var s,r,q=J.ko(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
eT:function(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=P.b6(b,c,r)
return H.li(b>0||c<r?s.slice(b,c):s)}if(t.bm.b(a))return H.nm(a,b,P.b6(b,c,a.length))
return P.nv(a,b,c)},
nv:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.a9(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.a9(c,b,a.length,o,o))
r=J.aC(a)
for(q=0;q<b;++q)if(!r.v())throw H.c(P.a9(b,0,q,o,o))
p=[]
if(s)for(;r.v();)p.push(r.gJ(r))
else for(q=b;q<c;++q){if(!r.v())throw H.c(P.a9(c,b,q,o,o))
p.push(r.gJ(r))}return H.li(p)},
nn:function(a){return new H.ee(a,H.n4(a,!1,!0,!1,!1,!1))},
lq:function(a,b,c){var s=J.aC(b)
if(!s.v())return a
if(c.length===0){do a+=H.x(s.gJ(s))
while(s.v())}else{a+=H.x(s.gJ(s))
for(;s.v();)a=a+c+H.x(s.gJ(s))}return a},
lw:function(){var s=H.nd()
if(s!=null)return P.nA(s)
throw H.c(P.A("'Uri.base' is not supported"))},
kM:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.mF().b
s=s.test(b)}else s=!1
if(s)return b
r=c.ghc().c1(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.aP(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
mW:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
mX:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
e4:function(a){if(a>=10)return""+a
return"0"+a},
l5:function(a){return new P.bl(1000*a)},
hJ:function(a){if(typeof a=="number"||H.jF(a)||null==a)return J.dT(a)
if(typeof a=="string")return JSON.stringify(a)
return P.mY(a)},
hl:function(a){return new P.dX(a)},
cf:function(a){return new P.aD(!1,null,null,a)},
eF:function(a,b){return new P.cR(null,null,!0,a,b,"Value not in range")},
a9:function(a,b,c,d,e){return new P.cR(b,c,!0,a,d,"Invalid value")},
b6:function(a,b,c){if(0>a||a>c)throw H.c(P.a9(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.a9(b,a,c,"end",null))
return b}return c},
lj:function(a,b){if(a<0)throw H.c(P.a9(a,0,null,b,null))
return a},
M:function(a,b,c,d,e){var s=e==null?J.aW(b):e
return new P.ea(s,!0,a,c,"Index out of range")},
A:function(a){return new P.fa(a)},
iQ:function(a){return new P.f7(a)},
aZ:function(a){return new P.e1(a)},
f:function(a){return new P.fu(a)},
a7:function(a,b,c){return new P.hP(a,b,c)},
kX:function(a){H.pr(a)},
nA:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.C(a5,4)^58)*3|C.a.C(a5,0)^100|C.a.C(a5,1)^97|C.a.C(a5,2)^116|C.a.C(a5,3)^97)>>>0
if(s===0)return P.lv(a4<a4?C.a.p(a5,0,a4):a5,5,a3).ge0()
else if(s===32)return P.lv(C.a.p(a5,5,a4),0,a3).ge0()}r=P.cC(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.m0(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(P.m0(a5,0,q,20,r)===20)r[7]=q
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
a5=C.a.aX(a5,n,m,"/");++a4
m=f}j="file"}else if(C.a.a5(a5,"http",0)){if(i&&o+3===n&&C.a.a5(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=C.a.aX(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&C.a.a5(a5,"https",0)){if(i&&o+4===n&&C.a.a5(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=C.a.aX(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}else j=a3
if(k){if(a4<a5.length){a5=C.a.p(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new P.fP(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=P.o9(a5,0,q)
else{if(q===0)P.c7(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?P.oa(a5,d,p-1):""
b=P.o6(a5,p,o,!1)
i=o+1
if(i<n){a=H.lh(C.a.p(a5,i,n),a3)
a0=P.o8(a==null?H.h(P.a7("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.o7(a5,n,m,a3,j,b!=null)
a2=m<l?P.kJ(a5,m+1,l,a3):a3
return new P.bx(j,c,b,a0,a1,a2,l<a4?P.o5(a5,l+1,a4):a3)},
ly:function(a){var s=t.N
return C.b.hh(H.b(a.split("&"),t.s),P.U(s,s),new P.iV(C.e))},
nz:function(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iS(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=C.a.R(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=P.jZ(C.a.p(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(q>=4)return H.d(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=P.jZ(C.a.p(a,r,c),null)
if(o>255)k.$2(l,r)
if(q>=4)return H.d(j,q)
j[q]=o
return j},
lx:function(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.iT(a),c=new P.iU(d,a)
if(a.length<2)d.$1("address is too short")
s=H.b([],t.t)
for(r=b,q=r,p=!1,o=!1;r<a0;++r){n=C.a.R(a,r)
if(n===58){if(r===b){++r
if(C.a.R(a,r)!==58)d.$2("invalid start colon.",r)
q=r}if(r===q){if(p)d.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(c.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)d.$1("too few parts")
m=q===a0
l=C.b.gaB(s)
if(m&&l!==-1)d.$2("expected a part after last `:`",a0)
if(!m)if(!o)s.push(c.$2(q,a0))
else{k=P.nz(a,q,a0)
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
lO:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
c7:function(a,b,c){throw H.c(P.a7(c,a,b))},
o8:function(a,b){if(a!=null&&a===P.lO(b))return null
return a},
o6:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.R(a,b)===91){s=c-1
if(C.a.R(a,s)!==93)P.c7(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.o3(a,r,s)
if(q<s){p=q+1
o=P.lT(a,C.a.a5(a,"25",p)?q+3:p,s,"%25")}else o=""
P.lx(a,r,q)
return C.a.p(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.R(a,n)===58){q=C.a.bm(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.lT(a,C.a.a5(a,"25",p)?q+3:p,c,"%25")}else o=""
P.lx(a,b,q)
return"["+C.a.p(a,b,q)+o+"]"}return P.oc(a,b,c)},
o3:function(a,b,c){var s=C.a.bm(a,"%",b)
return s>=b&&s<c?s:c},
lT:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.a2(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.R(a,s)
if(p===37){o=P.kK(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.a2("")
m=i.a+=C.a.p(a,r,s)
if(n)o=C.a.p(a,s,s+3)
else if(o==="%")P.c7(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.a2("")
if(r<s){i.a+=C.a.p(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.R(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=C.a.p(a,r,s)
if(i==null){i=new P.a2("")
n=i}else n=i
n.a+=j
n.a+=P.kI(p)
s+=k
r=s}}}if(i==null)return C.a.p(a,b,c)
if(r<c)i.a+=C.a.p(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
oc:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.R(a,s)
if(o===37){n=P.kK(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.a2("")
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
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.a2("")
if(r<s){q.a+=C.a.p(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.d(C.i,m)
m=(C.i[m]&1<<(o&15))!==0}else m=!1
if(m)P.c7(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.R(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=C.a.p(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.a2("")
m=q}else m=q
m.a+=l
m.a+=P.kI(o)
s+=j
r=s}}}}if(q==null)return C.a.p(a,b,c)
if(r<c){l=C.a.p(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
o9:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.lQ(C.a.C(a,b)))P.c7(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.C(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.d(C.k,p)
p=(C.k[p]&1<<(q&15))!==0}else p=!1
if(!p)P.c7(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.p(a,b,c)
return P.o2(r?a.toLowerCase():a)},
o2:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oa:function(a,b,c){return P.dG(a,b,c,C.P,!1)},
o7:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dG(a,b,c,C.u,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a4(s,"/"))s="/"+s
return P.ob(s,e,f)},
ob:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a4(a,"/"))return P.od(a,!s||c)
return P.oe(a)},
kJ:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.cf("Both query and queryParameters specified"))
return P.dG(a,b,c,C.j,!0)}if(d==null)return null
s=new P.a2("")
r.a=""
d.A(0,new P.jt(new P.ju(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
o5:function(a,b,c){return P.dG(a,b,c,C.j,!0)},
kK:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.R(a,b+1)
r=C.a.R(a,n)
q=H.jV(s)
p=H.jV(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aO(o,4)
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.aP(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.p(a,b,b+3).toUpperCase()
return null},
kI:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=C.a.C(k,a>>>4)
s[2]=C.a.C(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=C.c.fJ(a,6*q)&63|r
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
o+=3}}return P.eT(s,0,null)},
dG:function(a,b,c,d,e){var s=P.lS(a,b,c,d,e)
return s==null?C.a.p(a,b,c):s},
lS:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.R(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.d(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.kK(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.d(C.i,n)
n=(C.i[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.c7(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.R(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=P.kI(o)}}if(p==null){p=new P.a2("")
n=p}else n=p
n.a+=C.a.p(a,q,r)
n.a+=H.x(m)
if(typeof l!=="number")return H.mc(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.p(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
lR:function(a){if(C.a.a4(a,"."))return!0
return C.a.dB(a,"/.")!==-1},
oe:function(a){var s,r,q,p,o,n,m
if(!P.lR(a))return a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.J(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.d(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.n(s,"/")},
od:function(a,b){var s,r,q,p,o,n
if(!P.lR(a))return!b?P.lP(a):a
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
r=P.lP(s[0])
if(0>=s.length)return H.d(s,0)
s[0]=r}return C.b.n(s,"/")},
lP:function(a){var s,r,q,p=a.length
if(p>=2&&P.lQ(C.a.C(a,0)))for(s=1;s<p;++s){r=C.a.C(a,s)
if(r===58)return C.a.p(a,0,s)+"%3A"+C.a.ai(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.d(C.k,q)
q=(C.k[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
o4:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.C(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.cf("Invalid URL encoding"))}}return s},
kL:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.C(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.p(a,b,c)
else p=new H.T(C.a.p(a,b,c))}else{p=H.b([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.C(a,o)
if(r>127)throw H.c(P.cf("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.cf("Truncated URI"))
p.push(P.o4(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.W.c1(p)},
lQ:function(a){var s=a|32
return 97<=s&&s<=122},
lv:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.b([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.C(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.a7(k,a,r))}}if(q<0&&r>b)throw H.c(P.a7(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.C(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaB(j)
if(p!==44||r!==n+7||!C.a.a5(a,"base64",n+1))throw H.c(P.a7("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.B.hp(0,a,m,s)
else{l=P.lS(a,m,s,C.j,!0)
if(l!=null)a=C.a.aX(a,m,s,l)}return new P.iR(a,j,c)},
ol:function(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="?",i="#",h=H.b(new Array(22),t.gN)
for(s=0;s<22;++s)h[s]=new Uint8Array(96)
r=new P.jC(h)
q=new P.jD()
p=new P.jE()
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
m0:function(a,b,c,d,e){var s,r,q,p,o,n,m=$.mG()
for(s=m.length,r=b;r<c;++r){if(d<0||d>=s)return H.d(m,d)
q=m[d]
p=C.a.C(a,r)^96
o=q[p>95?31:p]
d=o&31
n=o>>>5
if(n>=8)return H.d(e,n)
e[n]=r}return d},
Y:function Y(a,b){this.a=a
this.b=b},
bl:function bl(a){this.a=a},
hD:function hD(){},
hE:function hE(){},
I:function I(){},
dX:function dX(a){this.a=a},
f0:function f0(){},
ew:function ew(){},
aD:function aD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cR:function cR(a,b,c,d,e,f){var _=this
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
eP:function eP(a){this.a=a},
e1:function e1(a){this.a=a},
ez:function ez(){},
d_:function d_(){},
e3:function e3(a){this.a=a},
fu:function fu(a){this.a=a},
hP:function hP(a,b,c){this.a=a
this.b=b
this.c=c},
k:function k(){},
eb:function eb(){},
af:function af(){},
P:function P(){},
a2:function a2(a){this.a=a},
iV:function iV(a){this.a=a},
iS:function iS(a){this.a=a},
iT:function iT(a){this.a=a},
iU:function iU(a,b){this.a=a
this.b=b},
bx:function bx(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
ju:function ju(a,b){this.a=a
this.b=b},
jt:function jt(a){this.a=a},
iR:function iR(a,b,c){this.a=a
this.b=b
this.c=c},
jC:function jC(a){this.a=a},
jD:function jD(){},
jE:function jE(){},
fP:function fP(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fn:function fn(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
bd:function(a){var s,r,q,p,o
if(a==null)return null
s=P.U(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
s.j(0,o,a[o])}return s},
lW:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.jF(a))return a
if(t.f.b(a))return P.m4(a)
if(t.c.b(a)){s=[]
J.dS(a,new P.jA(s))
a=s}return a},
m4:function(a){var s={}
J.dS(a,new P.jK(s))
return s},
jn:function jn(){},
jp:function jp(a,b){this.a=a
this.b=b},
jq:function jq(a,b){this.a=a
this.b=b},
jA:function jA(a){this.a=a},
jK:function jK(a){this.a=a},
jo:function jo(a,b){this.a=a
this.b=b},
e8:function e8(a,b){this.a=a
this.b=b},
hN:function hN(){},
hO:function hO(){},
fN:function fN(){},
aa:function aa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aJ:function aJ(){},
eh:function eh(){},
aN:function aN(){},
ex:function ex(){},
io:function io(){},
eS:function eS(){},
n:function n(){},
aQ:function aQ(){},
f_:function f_(){},
fB:function fB(){},
fC:function fC(){},
fJ:function fJ(){},
fK:function fK(){},
fX:function fX(){},
fY:function fY(){},
h3:function h3(){},
h4:function h4(){},
hn:function hn(){},
dZ:function dZ(){},
ho:function ho(a){this.a=a},
e_:function e_(){},
aY:function aY(){},
ey:function ey(){},
fi:function fi(){},
cS:function cS(){},
eN:function eN(){},
fT:function fT(){},
fU:function fU(){}},W={
l3:function(){var s=document.createElement("canvas")
s.toString
return s},
hF:function(a){return"wheel"},
n_:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.be(s)}return q},
ji:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
lG:function(a,b,c,d){var s=W.ji(W.ji(W.ji(W.ji(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
a6:function(a,b,c,d){var s=new W.dl(a,b,c==null?null:W.m1(new W.jg(c),t.aD),!1)
s.fQ()
return s},
m1:function(a,b){var s=$.aB
if(s===C.f)return a
return s.dd(a,b)},
o:function o(){},
hk:function hk(){},
dV:function dV(){},
dW:function dW(){},
bj:function bj(){},
bk:function bk(){},
az:function az(){},
hw:function hw(){},
F:function F(){},
cn:function cn(){},
hx:function hx(){},
ap:function ap(){},
aG:function aG(){},
hy:function hy(){},
hz:function hz(){},
hA:function hA(){},
hB:function hB(){},
co:function co(){},
cp:function cp(){},
e5:function e5(){},
hC:function hC(){},
fk:function fk(a,b){this.a=a
this.b=b},
G:function G(){},
l:function l(){},
e:function e(){},
ae:function ae(){},
bJ:function bJ(){},
e7:function e7(){},
e9:function e9(){},
ar:function ar(){},
hR:function hR(){},
bn:function bn(){},
cu:function cu(){},
bM:function bM(){},
bp:function bp(){},
hZ:function hZ(){},
ih:function ih(){},
bP:function bP(){},
eo:function eo(){},
ii:function ii(a){this.a=a},
ep:function ep(){},
ij:function ij(a){this.a=a},
at:function at(){},
eq:function eq(){},
ak:function ak(){},
fj:function fj(a){this.a=a},
t:function t(){},
cN:function cN(){},
au:function au(){},
eC:function eC(){},
eH:function eH(){},
iv:function iv(a){this.a=a},
eJ:function eJ(){},
al:function al(){},
eL:function eL(){},
aw:function aw(){},
eM:function eM(){},
ax:function ax(){},
eQ:function eQ(){},
iC:function iC(a){this.a=a},
ah:function ah(){},
b8:function b8(){},
am:function am(){},
ad:function ad(){},
eU:function eU(){},
eV:function eV(){},
iH:function iH(){},
an:function an(){},
bu:function bu(){},
eZ:function eZ(){},
iL:function iL(){},
aS:function aS(){},
iW:function iW(){},
fe:function fe(){},
b9:function b9(){},
c4:function c4(){},
fl:function fl(){},
dk:function dk(){},
fy:function fy(){},
dq:function dq(){},
fS:function fS(){},
fZ:function fZ(){},
kl:function kl(a,b){this.a=a
this.$ti=b},
dl:function dl(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jg:function jg(a){this.a=a},
kB:function kB(a){this.$ti=a},
L:function L(){},
cs:function cs(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
fm:function fm(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fv:function fv(){},
fw:function fw(){},
fz:function fz(){},
fA:function fA(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(){},
fL:function fL(){},
fM:function fM(){},
fO:function fO(){},
dw:function dw(){},
dx:function dx(){},
fQ:function fQ(){},
fR:function fR(){},
fW:function fW(){},
h_:function h_(){},
h0:function h0(){},
dz:function dz(){},
dA:function dA(){},
h1:function h1(){},
h2:function h2(){},
h8:function h8(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(){},
he:function he(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(){}},K={dU:function dU(){},ct:function ct(){},aM:function aM(a){this.a=a},a_:function a_(a){this.a=a},
pp:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="testCanvas",a0=null,a1="modifiers",a2=V.nq("Test 035"),a3=W.l3()
a3.className="pageLargeCanvas"
a3.id=a
a2.a.appendChild(a3).toString
s=t.s
a2.d7(H.b(["A test of the bending a shape with the Material Light Shader. ","Not all of the shapes have predefined bend values."],s))
a2.fT(H.b(["shapes"],s))
a2.d7(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(a)
if(r==null)H.h(P.f("Failed to find an element with the identifier, testCanvas."))
q=E.nx(r,!0,!0,!0,!1)
a2=t.f4
p=O.kk(a2)
o=new E.bm(p)
p.bg(o.ghq(),o.ght())
o.scz(0,a0)
o.sb9(a0)
o.sb9(U.bH(a0))
p=O.kk(t.gc)
n=new O.cG(p)
p.bg(n.geL(),n.geN())
m=n.gdI()
m.gu().l(0,n.gcV())
m.gdH().l(0,n.gcR())
m=n.gdI()
l=V.ky()
k=U.bH(V.lb(V.lf(),l,new V.B(1,1,-3)))
j=new V.X(1,1,1)
i=new D.bI(new V.X(1,1,1),V.kz(),V.ky(),V.nE())
h=i.a
i.a=k
k.gu().l(0,i.ged())
i.at(new D.D("mover",h,i.a))
if(!i.b.m(0,j)){h=i.b
i.b=j
i.at(new D.D("color",h,j))}m.l(0,i)
m=n.gd8()
m.saR(0,new V.X(0,0,1))
m=n.gdg()
m.saR(0,new V.X(0,1,0))
m=n.gbu()
m.saR(0,new V.X(1,0,0))
m=n.gbu()
m.cZ(new A.aA(!0,!1,!1))
m.d_(10)
p.l(0,V.W())
p.l(0,V.W())
p.l(0,V.W())
p.l(0,V.W())
p.l(0,V.W())
p.l(0,V.W())
p.l(0,V.W())
p.l(0,V.W())
g=U.km()
p=q.x
m=U.hv()
k=U.hv()
j=$.bv
if(j==null)j=$.bv=new V.a5(0,0)
j=new U.df(m,k,new X.a8(!1,!1,!1),j,V.W())
m.scv(0,!0)
m.scg(6.283185307179586)
m.scj(0)
m.sU(0,0)
m.sci(100)
m.sX(0)
m.sc3(0.5)
i=j.gaJ()
m.gu().l(0,i)
k.scv(0,!0)
k.scg(6.283185307179586)
k.scj(0)
k.sU(0,0)
k.sci(100)
k.sX(0)
k.sc3(0.5)
k.gu().l(0,i)
m=new X.a8(!1,!1,!1)
if(!j.d.m(0,m)){h=j.d
j.d=m
j.G(new D.D(a1,h,m))}j.b5(p)
g.l(0,j)
U.hv()
if($.bv==null)$.bv=new V.a5(0,0)
V.W()
m=U.hv()
k=$.bv
if(k==null)k=$.bv=new V.a5(0,0)
k=new U.de(m,new X.a8(!1,!1,!1),k,V.W())
m.scv(0,!0)
m.scg(6.283185307179586)
m.scj(0)
m.sU(0,0)
m.sci(100)
m.sX(0)
m.sc3(0.2)
m.gu().l(0,k.gaJ())
m=new X.a8(!0,!1,!1)
if(!k.c.m(0,m)){h=k.c
k.c=m
k.G(new D.D(a1,h,m))}k.b5(p)
g.l(0,k)
m=new X.a8(!1,!1,!1)
k=new U.dg(m,V.W())
j=new X.a8(!1,!1,!1)
if(!m.m(0,j)){k.b=j
k.G(new D.D(a1,m,j))}k.b5(p)
g.l(0,k)
g.l(0,U.bH(V.ig(0,0,5)))
f=U.km()
f.l(0,U.bH(V.ig(0.5,0,0)))
f.l(0,U.cU(0,1.7,0))
f.l(0,U.cU(0.5,0,0))
f.l(0,U.bH(V.ku(0.35)))
f.l(0,U.cU(-0.5,0,0))
f.l(0,U.cU(0,-1.7,0))
f.l(0,U.bH(V.ig(-0.5,0,0)))
e=U.km()
e.l(0,U.cU(0,-1.4,0))
e.l(0,U.bH(V.ig(0.5,0,0)))
e.l(0,U.cU(0,1.4,0))
a2=O.kk(a2)
d=new M.e6(a2)
a2.bg(d.geS(),d.geU())
c=X.mZ(a0)
b=new X.eA(1.0471975511965976,0.1)
b.sb9(a0)
p=b.c
$.C().toString
if(!(Math.abs(p-1.0471975511965976)<1e-9)){b.c=1.0471975511965976
b.aK(new D.D("fov",p,1.0471975511965976))}p=b.d
$.C().toString
if(!(Math.abs(p-0.1)<1e-9)){b.d=0.1
b.aK(new D.D("near",p,0.1))}p=b.e
$.C().toString
if(!(Math.abs(p-2000)<1e-9)){b.e=2000
b.aK(new D.D("far",p,2000))}p=d.b
if(p!==b){if(p!=null)p.gu().K(0,d.gao())
h=d.b
d.b=b
b.gu().l(0,d.gao())
d.au(new D.D("camera",h,d.b))}p=d.c
if(p!==c){if(p!=null)p.gu().K(0,d.gao())
h=d.c
d.c=c
c.gu().l(0,d.gao())
d.au(new D.D("target",h,d.c))}d.sdY(a0)
d.sdY(n)
a2.l(0,o)
a2=d.b
if(a2!=null)a2.sb9(g)
a2=d.f
if(a2==null)a2=d.f=D.K()
a2.l(0,new K.k1(f,e,n))
a2=q.d
if(a2!==d){if(a2!=null)a2.gu().K(0,q.gcD())
q.d=d
d.gu().l(0,q.gcD())
q.cE()}a2=new K.k9(o)
r=s.getElementById("shapes")
if(r==null)H.h(P.f("Failed to find shapes for RadioGroup"))
s=new V.ip("shapes",!0,r)
s.d6(0,"Cuboid",new K.k2(a2),!0)
s.aP(0,"Cylinder",new K.k3(a2))
s.aP(0,"Cone",new K.k4(a2))
s.aP(0,"Sphere",new K.k5(a2))
s.aP(0,"Toroid",new K.k6(a2))
s.aP(0,"Knot",new K.k7(a2))
s.aP(0,"Grid",new K.k8(a2))
V.ps(q)},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
k9:function k9(a){this.a=a},
k2:function k2(a){this.a=a},
k3:function k3(a){this.a=a},
k4:function k4(a){this.a=a},
k5:function k5(a){this.a=a},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a}},L={eO:function eO(a,b,c){var _=this
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
_.d=null},d3:function d3(a,b){this.b=a
this.c=!1
this.a=b}},O={
kk:function(a){return new O.ac(H.b([],a.H("u<0>")),a.H("ac<0>"))},
ac:function ac(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
cJ:function cJ(a){this.a=a
this.b=null},
en:function(a,b){return new O.cH(new V.X(0,0,0),a,b,new A.aA(!1,!1,!1))},
cG:function cG(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
i7:function i7(a,b){this.a=a
this.b=b},
i8:function i8(){},
i9:function i9(a,b){this.a=a
this.b=b},
ia:function ia(){},
ib:function ib(a,b){this.a=a
this.b=b},
ic:function ic(){},
id:function id(a,b){this.a=a
this.b=b},
ie:function ie(){},
i1:function i1(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c},
em:function em(){},
i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c},
cH:function cH(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d},
i4:function i4(a){this.b=a},
i5:function i5(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d},
i6:function i6(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d},
d1:function d1(){}},E={
lD:function(){var s=window.navigator.vendor
s.toString
if(C.a.M(s,"Google"))return C.z
s=window.navigator.userAgent
s.toString
if(C.a.M(s,"Firefox"))return C.o
s=window.navigator.appVersion
s.toString
if(C.a.M(s,"Trident")||C.a.M(s,"Edge"))return C.p
s=window.navigator.appName
s.toString
if(C.a.M(s,"Microsoft"))return C.p
return C.A},
lE:function(){var s=window.navigator.appVersion
s.toString
if(C.a.M(s,"Win"))return C.T
if(C.a.M(s,"Mac"))return C.v
if(C.a.M(s,"Linux"))return C.U
return C.V},
no:function(a,b){var s
Date.now()
s=t.fA
s=new E.ir(a,new P.Y(Date.now(),!1),new P.Y(Date.now(),!1),new O.cJ(H.b([],s)),new O.cJ(H.b([],s)),new O.cJ(H.b([],s)),H.b([null],t.bc),P.U(t.N,t.fg))
s.ec(a,b)
return s},
nx:function(a,b,c,d,e){var s,r
if(t.E.b(a))return E.lr(a,!0,!0,!0,!1)
s=W.l3()
r=s.style
r.width="100%"
r.height="100%"
J.mK(a).l(0,s)
return E.lr(s,!0,!0,!0,!1)},
lr:function(a,b,c,d,e){var s,r,q,p,o="mousemove",n=t.z,m=t.gW.a(C.l.e3(a,"webgl2",P.n6(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n)))
if(m==null)throw H.c(P.f("Failed to get the rendering context for WebGL."))
s=E.no(m,a)
H.jz(m.getParameter(3379))
H.jz(m.getParameter(34076))
n=H.b([],t.g9)
r=$.hH
q=new X.fc(a,n,(r==null?$.hH=new E.fs(E.lD(),E.lE()):r).a===C.o?0.16666666666666666:0.005555555555555556)
p=document
p.toString
n.push(W.a6(p,"contextmenu",q.geW(),!1))
n.push(W.a6(a,"focus",q.gf1(),!1))
n.push(W.a6(a,"blur",q.geP(),!1))
n.push(W.a6(p,"keyup",q.gf5(),!1))
n.push(W.a6(p,"keydown",q.gf3(),!1))
n.push(W.a6(a,"mousedown",q.gf9(),!1))
n.push(W.a6(a,"mouseup",q.gfd(),!1))
n.push(W.a6(a,o,q.gfb(),!1))
W.hF(a)
W.hF(a)
n.push(W.a6(a,W.hF(a),q.gff(),!1))
n.push(W.a6(p,o,q.geY(),!1))
n.push(W.a6(p,"mouseup",q.gf_(),!1))
n.push(W.a6(p,"pointerlockchange",q.gfh(),!1))
n.push(W.a6(a,"touchstart",q.gfu(),!1))
n.push(W.a6(a,"touchend",q.gfp(),!1))
n.push(W.a6(a,"touchmove",q.gfs(),!1))
n=new E.eW(a,s,q,new P.Y(Date.now(),!1))
n.cX()
return n},
hr:function hr(){},
bm:function bm(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bE:function bE(a){this.b=a},
bT:function bT(a){this.b=a},
fs:function fs(a,b){this.a=a
this.b=b},
ir:function ir(a,b,c,d,e,f,g,h){var _=this
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
is:function is(a){this.a=a},
it:function it(a){this.a=a},
iu:function iu(a){this.a=a},
d0:function d0(a){this.c=a},
eW:function eW(a,b,c,d){var _=this
_.b=a
_.d=null
_.e=b
_.x=c
_.cx=!1
_.cy=d
_.db=0},
iG:function iG(a){this.a=a}},Z={
kA:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.c8(c)),35044)
a.bindBuffer(b,null)
return new Z.ff(b,s)},
ay:function(a){return new Z.bw(a)},
ff:function ff(a,b){this.a=a
this.b=b},
bF:function bF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jb:function jb(a){this.a=a},
ci:function ci(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bL:function bL(a,b,c){this.a=a
this.b=b
this.c=c},
bw:function bw(a){this.a=a}},D={
K:function(){return new D.aH()},
ht:function ht(){},
aH:function aH(){var _=this
_.c=_.b=_.a=null
_.d=0},
hK:function hK(a){this.a=a},
hL:function hL(a){this.a=a},
N:function N(){},
b0:function b0(){},
b1:function b1(){},
D:function D(a,b,c){this.c=a
this.d=b
this.e=c},
bI:function bI(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=null},
cz:function cz(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.d=_.c=_.b=null}},X={cj:function cj(a,b){this.a=a
this.b=b},eg:function eg(a,b){this.a=a
this.b=b},hU:function hU(a,b){this.c=a
this.d=b},cD:function cD(a,b,c){this.x=a
this.c=b
this.d=c},i_:function i_(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},bQ:function bQ(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},ik:function ik(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},bR:function bR(a,b,c){this.x=a
this.c=b
this.d=c},eE:function eE(){},d2:function d2(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},iK:function iK(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},fc:function fc(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
mZ:function(a){var s=new V.aF(0,0,0,1),r=$.lm
if(r==null){r=V.ll(0,0,1,1)
$.lm=r}return new X.hQ(s,r)},
hQ:function hQ(a,b){this.a=a
this.r=b
this.x=null},
eA:function eA(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
iE:function iE(){}},V={
hi:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
kg:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bf(a-b,s)
return(a<0?a+s:a)+b},
y:function(a,b,c){$.C().toString
return C.a.af(C.d.ct(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cd:function(a,b,c){var s,r,q,p,o,n,m,l=H.b([],t.s)
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.q)(a),++p){o=a[p]
$.C().toString
n=C.a.af(C.d.ct(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.d(l,m)
s=C.a.af(l[m],q)
r=l.length
if(m>=r)return H.d(l,m)
l[m]=s}return l},
W:function(){var s=$.le
return s==null?$.le=V.aL(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aL:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.b3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ig:function(a,b,c){return V.aL(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
ku:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aL(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
lc:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aL(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
ld:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aL(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)},
lb:function(a,b,c){var s=c.E(),r=b.az(s).E(),q=s.az(r),p=new V.B(a.a,a.b,a.c)
return V.aL(r.a,q.a,s.a,r.aZ(0).a1(p),r.b,q.b,s.b,q.aZ(0).a1(p),r.c,q.c,s.c,s.aZ(0).a1(p),0,0,0,1)},
lf:function(){var s=$.aO
return s==null?$.aO=new V.Q(0,0,0):s},
ll:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eG(a,b,c,d)},
dh:function(){var s=$.lC
return s==null?$.lC=new V.B(0,0,0):s},
nE:function(){var s=$.j1
return s==null?$.j1=new V.B(-1,0,0):s},
ky:function(){var s=$.j2
return s==null?$.j2=new V.B(0,1,0):s},
kz:function(){var s=$.j3
return s==null?$.j3=new V.B(0,0,1):s},
nD:function(a,b,c){return new V.B(a,b,c)},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hI:function hI(){},
cI:function cI(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
b3:function b3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
b4:function b4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eG:function eG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a5:function a5(a,b){this.a=a
this.b=b},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
ps:function(a){P.ny(C.K,new V.kb(a))},
nq:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.a6(n,"scroll",new V.iz(s),!1)
return new V.ix(o)},
kb:function kb(a){this.a=a},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c},
iq:function iq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ix:function ix(a){this.a=a
this.b=null},
iz:function iz(a){this.a=a},
iy:function iy(a){this.a=a}},U={
hv:function(){return new U.hu()},
bH:function(a){var s=V.W(),r=new U.ck(s)
if(a==null)a=V.W()
if(!s.m(0,a))r.a=a
return r},
km:function(){var s=new U.bK(V.W(),H.b([],t.eJ))
s.bg(s.gef(),s.gfl())
return s},
cU:function(a,b,c){var s,r=new U.cT(V.W())
r.se2(0)
r.sdR(0,0)
r.sdX(0)
s=r.d
$.C().toString
if(!(Math.abs(s-c)<1e-9)){r.d=c
r.G(new D.D("deltaYaw",s,c))}s=r.e
$.C().toString
if(!(Math.abs(s-a)<1e-9)){r.e=a
r.G(new D.D("deltaPitch",s,a))}s=r.f
$.C().toString
if(!(Math.abs(s-b)<1e-9)){r.f=b
r.G(new D.D("deltaRoll",s,b))}return r},
hu:function hu(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
ck:function ck(a){this.a=a
this.b=null},
bK:function bK(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.d=_.c=_.b=null},
Z:function Z(){},
cT:function cT(a){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=0
_.x=a
_.y=null},
de:function de(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.y=_.x=!1
_.z=0
_.Q=c
_.ch=0
_.cx=d
_.cy=null},
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
dg:function dg(a,b){var _=this
_.a=null
_.b=a
_.e=_.d=0
_.f=b
_.r=null}},M={e6:function e6(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=_.f=null}},A={
na:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=""+"MaterialLight_"+a4.gan(a4)+a5.gan(a5)+a6.gan(a6)+a7.gan(a7)+a8.gan(a8)+a9.gan(a9)+b0.gan(b0)+b1.gan(b1)+b2.gan(b2)+"_"
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
c=$.bi()
if(h){s=$.bh()
c=new Z.bw(c.a|s.a)}if(g)c=new Z.bw(c.a|$.bg().a)
if(f)c=new Z.bw(c.a|$.bf().a)
return new A.i3(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
jH:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jI:function(a,b,c){var s
A.jH(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hj(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
oG:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jH(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
oC:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.jI(b,r,"ambient")
b.a+="\n"},
oE:function(a,b){var s,r=a.c
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.jI(b,r,"diffuse")
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
oH:function(a,b){var s,r=a.d
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.jI(b,r,"invDiffuse")
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
oN:function(a,b){var s,r=a.e
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.jI(b,r,"specular")
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
oJ:function(a,b){var s,r,q
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
oL:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jH(b,r,"reflect")
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
oM:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jH(b,r,"refract")
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
oD:function(a,b,c){var s,r,q,p,o,n,m=b.b
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
oF:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
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
oK:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
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
oO:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
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
if(m){s=$.hH
if(s==null)s=$.hH=new E.fs(E.lD(),E.lE())
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
oI:function(a,b){var s,r
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
s=b.a+="   return "+C.b.n(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
oP:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.a2(""),j=""+"precision mediump float;\n"
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
A.oG(a,k)
A.oC(a,k)
A.oE(a,k)
A.oH(a,k)
A.oN(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.oL(a,k)
A.oM(a,k)}A.oJ(a,k)
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
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.oD(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.oF(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.oK(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.oO(a,p[n],k)
A.oI(a,k)}p=k.a+="// === Main ===\n"
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
k.a+=l+(q[0].toUpperCase()+C.a.ai(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ai(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ai(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ai(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)j=!1
else j=!0
if(j)m.push("emissionColor()")
if(!a.r.a)j=!1
else j=!0
if(j)m.push("reflect(refl)")
if(!a.x.a)j=!1
else j=!0
if(j)m.push("refract(refl)")
if(m.length<=0)m.push("vec3(0.0, 0.0, 0.0)")
j=k.a+="   vec4 objClr = vec4("+C.b.n(m," + ")+", alpha);\n"
if(r)j=k.a=j+"   objClr = colorMat*objClr;\n"
j+="   gl_FragColor = objClr;\n"
k.a=j
j=k.a=j+"}\n"
return j.charCodeAt(0)==0?j:j},
oQ:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.aS+"];\n"
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
oS:function(a,b){var s
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
oR:function(a,b){var s
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
oU:function(a,b){var s,r
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
oV:function(a,b){var s,r
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
oT:function(a,b){var s
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
oW:function(a,b){var s
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
return a[0].toUpperCase()+C.a.ai(a,1)},
kx:function(a,b,c,d,e){var s=new A.f1(H.b([],t.t),a,c,e)
s.f=d
s.e=P.cC(d,0,!1,t.S)
return s},
dY:function dY(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(a){this.a=a},
aA:function aA(a,b,c){this.a=a
this.b=b
this.c=c},
el:function el(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.i5=_.i4=_.ds=_.i3=_.i2=_.dr=_.dq=_.i1=_.i0=_.dn=_.dm=_.i_=_.hZ=_.dl=_.hY=_.hX=_.dk=_.dj=_.bl=_.aS=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.c4=c
_.c5=d
_.c6=e
_.c7=f
_.c8=g
_.c9=h
_.ca=i
_.cb=j
_.i8=_.i7=_.i6=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
aX:function aX(a,b){this.a=a
this.b=b},
b_:function b_(a,b){this.a=a
this.b=b},
b5:function b5(a,b){this.a=a
this.b=b},
b7:function b7(a,b){this.a=a
this.b=b},
i3:function i3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.aS=b5
_.bl=b6
_.dj=b7},
d7:function d7(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d8:function d8(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
da:function da(a,b,c,d,e,f,g,h,i,j){var _=this
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
dd:function dd(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cW:function cW(){},
a3:function a3(){},
iP:function iP(a){this.a=a},
bX:function bX(a,b,c){this.a=a
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
d4:function d4(a,b,c){this.a=a
this.c=b
this.d=c},
f2:function f2(a,b,c){this.a=a
this.c=b
this.d=c},
d5:function d5(a,b,c){this.a=a
this.c=b
this.d=c},
d6:function d6(a,b,c){this.a=a
this.c=b
this.d=c},
f6:function f6(a,b,c){this.a=a
this.c=b
this.d=c},
d9:function d9(a,b,c){this.a=a
this.c=b
this.d=c},
bY:function bY(a,b,c){this.a=a
this.c=b
this.d=c},
db:function db(a,b,c){this.a=a
this.c=b
this.d=c},
dc:function dc(a,b,c){this.a=a
this.c=b
this.d=c}},F={
m5:function(a,b,c){var s=null,r=F.kv()
F.dI(r,s,b,c,a,1,0,0,1)
F.dI(r,s,b,c,a,0,1,0,3)
F.dI(r,s,b,c,a,0,0,1,2)
F.dI(r,s,b,c,a,-1,0,0,0)
F.dI(r,s,b,c,a,0,-1,0,0)
F.dI(r,s,b,c,a,0,0,-1,3)
r.aj()
return r},
jB:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
dI:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.B(g,f+a2,e+a3)
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
i.d=h}k=F.jB(h)
j=F.jB(g)
a.b8(F.ke(a0,a1,new F.jy(i,F.jB(f),F.jB(e),j,k,c),b))},
m8:function(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(a1<3)throw H.c(P.f("Must have 3 or more sizes for a disk."))
s=F.kv()
r=b?-1:1
q=-6.283185307179586/a1
p=t.k
o=H.b([],p)
n=s.gY()
m=new V.B(0,0,r).E()
o.push(n.fX(new V.b4(a,-1,-1,-1),new V.aF(1,1,1,1),new V.Q(0,0,c),new V.B(0,0,r),new V.a1(0.5,0.5),m))
for(l=0;l<=a1;++l){k=q*l
j=r*Math.sin(k)
i=Math.cos(k)
h=a0.$1(l/a1)
n=s.a
if(n==null)n=s.a=new F.w(s,H.b([],p))
m=new V.B(j,i,r).E()
if(j<0)g=0
else g=j>1?1:j
f=i<0
if(f)e=0
else e=i>1?1:i
if(f)f=0
else f=i>1?1:i
d=F.fd(new V.b4(a,-1,-1,-1),null,new V.aF(g,e,f,1),new V.Q(j*h,i*h,c),new V.B(0,0,r),new V.a1(j*0.5+0.5,i*0.5+0.5),m,null,0)
n.l(0,d)
o.push(d)}s.gN().fV(o)
return s},
m6:function(a,b,c,d){return F.pc(!0,a,b,new F.jL(1,d),c)},
pc:function(a,b,c,d,e){var s
if(e<3)throw H.c(P.f("Must have 3 or more sizes for a cylindrical shape."))
if(c<1)throw H.c(P.f("Must have 1 or more divisionss for a cylindrical shape."))
s=F.ke(c,e,new F.jN(d),null)
s.aj()
s.bW()
if(b)s.b8(F.m8(3,!1,1,new F.jO(d),e))
s.b8(F.m8(1,!0,-1,new F.jP(d),e))
return s},
pt:function(a,b){var s=F.m5(a,new F.kc(1,new F.kd()),b)
s.bW()
return s},
py:function(a,b){return F.m7(15,30,b,a,new F.kf())},
pn:function(a){return F.m7(12,120,a,1,new F.k0(3,2))},
m7:function(a,b,c,d,e){var s=F.ke(a,b,new F.jM(e,d,b,c),null)
s.aj()
s.bW()
return s},
ph:function(){return F.ke(4,4,new F.jT(new F.jU()),null)},
ke:function(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null
if(a<1)throw H.c(P.f("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.f("Must have 1 or more divisions of the height for a surface."))
s=F.kv()
r=t.k
q=H.b([],r)
for(p=0;p<=b;++p){o=p/b
n=s.a
if(n==null)n=s.a=new F.w(s,H.b([],r))
if(o<0)m=0
else m=o>1?1:o
l=F.fd(d,d,new V.aF(m,0,0,1),d,d,new V.a1(o,1),d,d,0)
n.l(0,l)
c.$3(l,o,0)
q.push(l.c2(a0))}for(p=1;p<=a;++p){k=p/a
for(n=k>1,m=k<0,j=1-k,i=0;i<=b;++i){o=i/b
h=s.a
if(h==null)h=s.a=new F.w(s,H.b([],r))
if(o<0)g=0
else g=o>1?1:o
if(m)f=0
else f=n?1:k
if(m)e=0
else e=n?1:k
l=F.fd(d,d,new V.aF(g,f,e,1),d,d,new V.a1(o,j),d,d,0)
h.l(0,l)
c.$3(l,o,k)
q.push(l.c2(a0))}}s.gN().fW(a+1,b+1,q)
return s},
kv:function(){return new F.cX()},
fd:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.c1()
h=$.mB()
s=$.bi()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.bh().a)!==0)q.r=e
if((r&$.bg().a)!==0)q.x=b
if((r&$.bC().a)!==0)q.y=f
if((r&$.bD().a)!==0)q.z=g
if((r&$.mC().a)!==0)q.Q=c
if((r&$.ce().a)!==0)q.ch=i
if((r&$.bf().a)!==0)q.cx=a
return q},
jy:function jy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jL:function jL(a,b){this.a=a
this.b=b},
jN:function jN(a){this.a=a},
jO:function jO(a){this.a=a},
jP:function jP(a){this.a=a},
kd:function kd(){},
kc:function kc(a,b){this.a=a
this.b=b},
kf:function kf(){},
k0:function k0(a,b){this.a=a
this.b=b},
jM:function jM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jU:function jU(){},
jT:function jT(a){this.a=a},
aq:function aq(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hM:function hM(){},
iA:function iA(){},
ei:function ei(){this.b=this.a=null},
hV:function hV(){},
iO:function iO(){},
eD:function eD(){this.a=null},
cX:function cX(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iw:function iw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cY:function cY(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b){this.a=a
this.b=b},
bt:function bt(a,b){this.a=a
this.b=b},
c1:function c1(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
ja:function ja(a){this.a=a},
j9:function j9(a){this.a=a},
w:function w(a,b){this.a=a
this.b=!1
this.c=b},
c2:function c2(a,b,c){this.b=a
this.c=b
this.d=c},
j4:function j4(a,b){this.a=a
this.b=b},
j5:function j5(a,b){this.a=a
this.b=b},
c3:function c3(a,b){this.b=a
this.c=b},
j7:function j7(){},
j6:function j6(){},
j8:function j8(){},
il:function il(){},
di:function di(a){this.b=a}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kq.prototype={}
J.a.prototype={
m:function(a,b){return a===b},
gw:function(a){return H.cP(a)},
i:function(a){return"Instance of '"+H.cQ(a)+"'"}}
J.ec.prototype={
i:function(a){return String(a)},
gw:function(a){return a?519018:218159},
$iby:1}
J.cx.prototype={
m:function(a,b){return null==b},
i:function(a){return"null"},
gw:function(a){return 0}}
J.b2.prototype={
gw:function(a){return 0},
i:function(a){return String(a)},
$il8:1}
J.eB.prototype={}
J.bZ.prototype={}
J.aI.prototype={
i:function(a){var s=a[$.mn()]
if(s==null)return this.e8(a)
return"JavaScript function for "+J.dT(s)}}
J.u.prototype={
co:function(a,b){if(!!a.fixed$length)H.h(P.A("removeAt"))
if(b<0||b>=a.length)throw H.c(P.eF(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var s
if(!!a.fixed$length)H.h(P.A("remove"))
for(s=0;s<a.length;++s)if(J.J(a[s],b)){a.splice(s,1)
return!0}return!1},
fS:function(a,b){if(!!a.fixed$length)H.h(P.A("addAll"))
this.em(a,b)
return},
em:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.aZ(a))
for(s=0;s<r;++s)a.push(b[s])},
A:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.aZ(a))}},
n:function(a,b){var s,r,q=a.length,p=P.cC(q,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.x(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
hm:function(a){return this.n(a,"")},
hg:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.aZ(a))}return s},
hh:function(a,b,c){return this.hg(a,b,c,t.z)},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ghf:function(a){if(a.length>0)return a[0]
throw H.c(H.l7())},
gaB:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.l7())},
b0:function(a,b){if(!!a.immutable$list)H.h(P.A("sort"))
H.nt(a,b==null?J.ot():b)},
e5:function(a){return this.b0(a,null)},
M:function(a,b){var s
for(s=0;s<a.length;++s)if(J.J(a[s],b))return!0
return!1},
i:function(a){return P.kn(a,"[","]")},
gW:function(a){return new J.aj(a,a.length)},
gw:function(a){return H.cP(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.h(P.A("set length"))
if(b>a.length)H.kN(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.cc(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.h(P.A("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cc(a,b))
a[b]=c},
$iv:1,
$im:1,
$ik:1,
$ip:1}
J.hS.prototype={}
J.aj.prototype={
gJ:function(a){return H.S(this).c.a(this.d)},
v:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.q(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bN.prototype={
ab:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbn(b)
if(this.gbn(a)===s)return 0
if(this.gbn(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbn:function(a){return a===0?1/a<0:a<0},
dt:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.A(""+a+".floor()"))},
al:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.A(""+a+".round()"))},
ct:function(a,b){var s
if(b>20)throw H.c(P.a9(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbn(a))return"-"+s
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
bf:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
e9:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d1(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.d1(a,b)},
d1:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.A("Result of truncating division is "+H.x(s)+": "+H.x(a)+" ~/ "+b))},
aO:function(a,b){var s
if(a>0)s=this.d0(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fJ:function(a,b){if(b<0)throw H.c(H.dN(b))
return this.d0(a,b)},
d0:function(a,b){return b>31?0:a>>>b},
$iE:1,
$ia4:1}
J.cw.prototype={$ii:1}
J.ed.prototype={}
J.bo.prototype={
R:function(a,b){if(b<0)throw H.c(H.cc(a,b))
if(b>=a.length)H.h(H.cc(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.c(H.cc(a,b))
return a.charCodeAt(b)},
S:function(a,b){return a+b},
aX:function(a,b,c,d){var s=P.b6(b,c,a.length),r=a.substring(0,b),q=a.substring(s)
return r+d+q},
a5:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a9(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a4:function(a,b){return this.a5(a,b,0)},
p:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.eF(b,null))
if(b>c)throw H.c(P.eF(b,null))
if(c>a.length)throw H.c(P.eF(c,null))
return a.substring(b,c)},
ai:function(a,b){return this.p(a,b,null)},
F:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.I)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
af:function(a,b){var s=b-a.length
if(s<=0)return a
return this.F(" ",s)+a},
bm:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a9(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dB:function(a,b){return this.bm(a,b,0)},
h2:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.a9(c,0,s,null,null))
return H.mi(a,b,c)},
M:function(a,b){return this.h2(a,b,0)},
ab:function(a,b){var s
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
gk:function(a){return a.length},
$iv:1,
$ir:1}
H.cy.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.T.prototype={
gk:function(a){return this.a.length},
h:function(a,b){return C.a.R(this.a,b)}}
H.m.prototype={}
H.bO.prototype={
gJ:function(a){return H.S(this).c.a(this.d)},
v:function(){var s,r=this,q=r.a,p=J.bz(q),o=p.gk(q)
if(r.b!==o)throw H.c(P.aZ(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.I(q,s);++r.c
return!0}}
H.aK.prototype={
gW:function(a){return new H.ek(J.aC(this.a),this.b)},
gk:function(a){return J.aW(this.a)},
I:function(a,b){return this.b.$1(J.ki(this.a,b))}}
H.cq.prototype={$im:1}
H.ek.prototype={
v:function(){var s=this,r=s.b
if(r.v()){s.a=s.c.$1(r.gJ(r))
return!0}s.a=null
return!1},
gJ:function(a){return H.S(this).Q[1].a(this.a)}}
H.dj.prototype={
gW:function(a){return new H.fg(J.aC(this.a),this.b)}}
H.fg.prototype={
v:function(){var s,r
for(s=this.a,r=this.b;s.v();)if(r.$1(s.gJ(s)))return!0
return!1},
gJ:function(a){var s=this.a
return s.gJ(s)}}
H.cr.prototype={}
H.f9.prototype={
j:function(a,b,c){throw H.c(P.A("Cannot modify an unmodifiable list"))}}
H.c_.prototype={}
H.cl.prototype={
i:function(a){return P.kt(this)},
j:function(a,b,c){H.mV()},
$iH:1}
H.cm.prototype={
gk:function(a){return this.a},
c0:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.c0(0,b))return null
return this.cM(b)},
cM:function(a){return this.b[a]},
A:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.cM(q))}}}
H.iM.prototype={
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
H.cO.prototype={
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
H.fV.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bG.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.ml(r==null?"unknown":r)+"'"},
ghQ:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iF.prototype={}
H.iB.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.ml(s)+"'"}}
H.cg.prototype={
m:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.cg))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gw:function(a){var s,r=this.c
if(r==null)s=H.cP(this.a)
else s=typeof r!=="object"?J.kj(r):H.cP(r)
return(s^H.cP(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.x(this.d)+"' of "+("Instance of '"+H.cQ(s)+"'")}}
H.eI.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.V.prototype={
gk:function(a){return this.a},
gac:function(a){return new H.cA(this,H.S(this).H("cA<1>"))},
ghP:function(a){var s=this,r=H.S(s)
return H.n9(s.gac(s),new H.hT(s),r.c,r.Q[1])},
c0:function(a,b){var s=this.b
if(s==null)return!1
return this.ex(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bh(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bh(p,b)
q=r==null?n:r.b
return q}else return o.hk(b)},
hk:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.cN(p,q.dC(a))
r=q.dD(s,a)
if(r<0)return null
return s[r].b},
j:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cH(s==null?q.b=q.bL():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cH(r==null?q.c=q.bL():r,b,c)}else q.hl(b,c)},
hl:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bL()
s=p.dC(a)
r=p.cN(o,s)
if(r==null)p.bQ(o,s,[p.bM(a,b)])
else{q=p.dD(r,a)
if(q>=0)r[q].b=b
else r.push(p.bM(a,b))}},
A:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.aZ(s))
r=r.c}},
cH:function(a,b,c){var s=this.bh(a,b)
if(s==null)this.bQ(a,b,this.bM(b,c))
else s.b=c},
bM:function(a,b){var s=this,r=new H.hW(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
dC:function(a){return J.kj(a)&0x3ffffff},
dD:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.J(a[r].a,b))return r
return-1},
i:function(a){return P.kt(this)},
bh:function(a,b){return a[b]},
cN:function(a,b){return a[b]},
bQ:function(a,b,c){a[b]=c},
eA:function(a,b){delete a[b]},
ex:function(a,b){return this.bh(a,b)!=null},
bL:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bQ(r,s,r)
this.eA(r,s)
return r}}
H.hT.prototype={
$1:function(a){var s=this.a
return H.S(s).Q[1].a(s.h(0,a))},
$S:function(){return H.S(this.a).H("2(1)")}}
H.hW.prototype={}
H.cA.prototype={
gk:function(a){return this.a.a},
gW:function(a){var s=this.a,r=new H.ej(s,s.r)
r.c=s.e
return r}}
H.ej.prototype={
gJ:function(a){return H.S(this).c.a(this.d)},
v:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.aZ(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jW.prototype={
$1:function(a){return this.a(a)},
$S:33}
H.jX.prototype={
$2:function(a,b){return this.a(a,b)},
$S:54}
H.jY.prototype={
$1:function(a){return this.a(a)},
$S:46}
H.ee.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ilk:1}
H.cK.prototype={$icK:1}
H.a0.prototype={$ia0:1}
H.bS.prototype={
gk:function(a){return a.length},
$iv:1,
$iz:1}
H.br.prototype={
h:function(a,b){H.aT(b,a,a.length)
return a[b]},
j:function(a,b,c){H.aT(b,a,a.length)
a[b]=c},
$im:1,
$ik:1,
$ip:1}
H.cL.prototype={
j:function(a,b,c){H.aT(b,a,a.length)
a[b]=c},
$im:1,
$ik:1,
$ip:1}
H.er.prototype={
h:function(a,b){H.aT(b,a,a.length)
return a[b]}}
H.es.prototype={
h:function(a,b){H.aT(b,a,a.length)
return a[b]}}
H.et.prototype={
h:function(a,b){H.aT(b,a,a.length)
return a[b]}}
H.eu.prototype={
h:function(a,b){H.aT(b,a,a.length)
return a[b]}}
H.ev.prototype={
h:function(a,b){H.aT(b,a,a.length)
return a[b]}}
H.cM.prototype={
gk:function(a){return a.length},
h:function(a,b){H.aT(b,a,a.length)
return a[b]}}
H.bs.prototype={
gk:function(a){return a.length},
h:function(a,b){H.aT(b,a,a.length)
return a[b]},
$ibs:1,
$ibW:1}
H.dr.prototype={}
H.ds.prototype={}
H.dt.prototype={}
H.du.prototype={}
H.av.prototype={
H:function(a){return H.h6(v.typeUniverse,this,a)},
b1:function(a){return H.o0(v.typeUniverse,this,a)}}
H.fx.prototype={}
H.ft.prototype={
i:function(a){return this.a}}
H.dC.prototype={}
P.jd.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:45}
P.jc.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:44}
P.je.prototype={
$0:function(){this.a.$0()},
$S:13}
P.jf.prototype={
$0:function(){this.a.$0()},
$S:13}
P.dB.prototype={
ei:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cb(new P.js(this,b),0),a)
else throw H.c(P.A("`setTimeout()` not found."))},
ej:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cb(new P.jr(this,a,Date.now(),b),0),a)
else throw H.c(P.A("Periodic timer."))},
$iiI:1}
P.js.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:1}
P.jr.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.e9(s,o)}q.c=p
r.d.$1(q)},
$S:13}
P.c5.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.x(this.a)+")"}}
P.c6.prototype={
gJ:function(a){var s=this.c
if(s==null)return this.b
return s.gJ(s)},
v:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.v())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.c5){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aC(s)
if(o instanceof P.c6){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dy.prototype={
gW:function(a){return new P.c6(this.a())}}
P.fh.prototype={}
P.bV.prototype={}
P.eR.prototype={}
P.jx.prototype={}
P.jJ.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:1}
P.jk.prototype={
hJ:function(a){var s,r,q,p=null
try{if(C.f===$.aB){a.$0()
return}P.oY(p,p,this,a)}catch(q){s=H.be(q)
r=H.kU(q)
P.m_(p,p,this,s,r)}},
hK:function(a,b){var s,r,q,p=null
try{if(C.f===$.aB){a.$1(b)
return}P.oZ(p,p,this,a,b)}catch(q){s=H.be(q)
r=H.kU(q)
P.m_(p,p,this,s,r)}},
hL:function(a,b){return this.hK(a,b,t.z)},
fZ:function(a){return new P.jl(this,a)},
dd:function(a,b){return new P.jm(this,a,b)}}
P.jl.prototype={
$0:function(){return this.a.hJ(this.b)},
$S:1}
P.jm.prototype={
$1:function(a){return this.a.hL(this.b,a)},
$S:function(){return this.c.H("~(0)")}}
P.dm.prototype={
gW:function(a){var s=new P.dn(this,this.r)
s.c=this.e
return s},
gk:function(a){return this.a},
M:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.eu(b)
return r}},
eu:function(a){var s=this.d
if(s==null)return!1
return this.bC(s[this.by(a)],a)>=0},
l:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cI(s==null?q.b=P.kC():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cI(r==null?q.c=P.kC():r,b)}else return q.el(0,b)},
el:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.kC()
s=q.by(b)
r=p[s]
if(r==null)p[s]=[q.bx(b)]
else{if(q.bC(r,b)>=0)return!1
r.push(q.bx(b))}return!0},
K:function(a,b){if((b&1073741823)===b)return this.fz(this.c,b)
else return this.fw(0,b)},
fw:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.by(b)
r=n[s]
q=o.bC(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.d3(p)
return!0},
cI:function(a,b){if(a[b]!=null)return!1
a[b]=this.bx(b)
return!0},
fz:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.d3(s)
delete a[b]
return!0},
cP:function(){this.r=this.r+1&1073741823},
bx:function(a){var s,r=this,q=new P.jj(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cP()
return q},
d3:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cP()},
by:function(a){return J.kj(a)&1073741823},
bC:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.J(a[r].a,b))return r
return-1}}
P.jj.prototype={}
P.dn.prototype={
gJ:function(a){return H.S(this).c.a(this.d)},
v:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.aZ(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cv.prototype={}
P.hX.prototype={
$2:function(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:15}
P.cB.prototype={$im:1,$ik:1,$ip:1}
P.j.prototype={
gW:function(a){return new H.bO(a,this.gk(a))},
I:function(a,b){return this.h(a,b)},
A:function(a,b){var s,r=this.gk(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gk(a))throw H.c(P.aZ(a))}},
gdF:function(a){return this.gk(a)===0},
hN:function(a,b){var s,r,q,p,o=this
if(o.gdF(a)){s=J.ko(0,H.aU(a).H("j.E"))
return s}r=o.h(a,0)
q=P.cC(o.gk(a),r,!0,H.aU(a).H("j.E"))
for(p=1;p<o.gk(a);++p){s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
hM:function(a){return this.hN(a,!0)},
hd:function(a,b,c,d){var s
H.aU(a).H("j.E").a(d)
P.b6(b,c,this.gk(a))
for(s=b;s<c;++s)this.j(a,s,d)},
i:function(a){return P.kn(a,"[","]")}}
P.cE.prototype={}
P.i0.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.x(a)
r.a=s+": "
r.a+=H.x(b)},
$S:42}
P.O.prototype={
A:function(a,b){var s,r,q
for(s=J.aC(this.gac(a)),r=H.aU(a).H("O.V");s.v();){q=s.gJ(s)
b.$2(q,r.a(this.h(a,q)))}},
gk:function(a){return J.aW(this.gac(a))},
i:function(a){return P.kt(a)},
$iH:1}
P.h7.prototype={
j:function(a,b,c){throw H.c(P.A("Cannot modify unmodifiable map"))}}
P.cF.prototype={
h:function(a,b){return J.l_(this.a,b)},
j:function(a,b,c){J.kh(this.a,b,c)},
A:function(a,b){J.dS(this.a,b)},
gk:function(a){return J.aW(this.a)},
i:function(a){return J.dT(this.a)},
$iH:1}
P.c0.prototype={}
P.cV.prototype={
i:function(a){return P.kn(this,"{","}")},
I:function(a,b){var s,r,q,p,o="index"
H.pa(b,o,t.S)
P.lj(b,o)
for(s=P.nL(this,this.r),r=H.S(s).c,q=0;s.v();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.M(b,this,o,null,q))}}
P.dv.prototype={$im:1,$ik:1}
P.dp.prototype={}
P.dF.prototype={}
P.dH.prototype={}
P.j_.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.be(r)}return null},
$S:26}
P.iZ.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.be(r)}return null},
$S:26}
P.hp.prototype={
hp:function(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a4=P.b6(a3,a4,a2.length)
s=$.mE()
for(r=s.length,q=a3,p=q,o=null,n=-1,m=-1,l=0;q<a4;q=k){k=q+1
j=C.a.C(a2,q)
if(j===37){i=k+2
if(i<=a4){h=H.jV(C.a.C(a2,k))
g=H.jV(C.a.C(a2,k+1))
f=h*16+g-(g&256)
if(f===37)f=-1
k=i}else f=-1}else f=j
if(0<=f&&f<=127){if(f<0||f>=r)return H.d(s,f)
e=s[f]
if(e>=0){f=C.a.R("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e)
if(f===j)continue
j=f}else{if(e===-1){if(n<0){d=o==null?null:o.a.length
if(d==null)d=0
n=d+(q-p)
m=q}++l
if(j===61)continue}j=f}if(e!==-2){if(o==null){o=new P.a2("")
d=o}else d=o
c=d.a+=C.a.p(a2,p,q)
d.a=c+H.aP(j)
p=k
continue}}throw H.c(P.a7("Invalid base64 data",a2,q))}if(o!=null){r=o.a+=C.a.p(a2,p,a4)
d=r.length
if(n>=0)P.l0(a2,m,a4,n,l,d)
else{b=C.c.bf(d-1,4)+1
if(b===1)throw H.c(P.a7(a0,a2,a4))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return C.a.aX(a2,a3,a4,r.charCodeAt(0)==0?r:r)}a=a4-a3
if(n>=0)P.l0(a2,m,a4,n,l,a)
else{b=C.c.bf(a,4)
if(b===1)throw H.c(P.a7(a0,a2,a4))
if(b>1)a2=C.a.aX(a2,a4,a4,b===2?"==":"=")}return a2}}
P.hq.prototype={}
P.e0.prototype={}
P.e2.prototype={}
P.hG.prototype={}
P.iX.prototype={
ghc:function(){return C.J}}
P.j0.prototype={
c1:function(a){var s,r,q,p=P.b6(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.jw(r)
if(q.eC(a,0,p)!==p){C.a.R(a,p-1)
q.bV()}return new Uint8Array(r.subarray(0,H.ok(0,q.b,s)))}}
P.jw.prototype={
bV:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
fR:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.bV()
return!1}},
eC:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.R(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.C(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fR(p,C.a.C(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bV()}else if(p<=2047){o=l.b
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
P.iY.prototype={
c1:function(a){var s=this.a,r=P.nB(s,a,0,null)
if(r!=null)return r
return new P.jv(s).h3(a,0,null,!0)}}
P.jv.prototype={
h3:function(a,b,c,d){var s,r,q,p,o=this,n=P.b6(b,c,J.aW(a))
if(b===n)return""
s=P.of(a,b,n)
r=o.bz(s,0,n-b,!0)
q=o.b
if((q&1)!==0){p=P.og(q)
o.b=0
throw H.c(P.a7(p,a,b+o.c))}return r},
bz:function(a,b,c,d){var s,r,q=this
if(c-b>1000){s=C.c.a0(b+c,2)
r=q.bz(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bz(a,s,c,d)}return q.h7(a,b,c,d)},
h7:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.a2(""),f=b+1,e=a.length
if(b<0||b>=e)return H.d(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.C("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.C(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.aP(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.aP(j)
break
case 65:g.a+=H.aP(j);--f
break
default:p=g.a+=H.aP(j)
g.a=p+H.aP(j)
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
g.a+=H.aP(a[l])}else g.a+=P.eT(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.aP(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.Y.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.Y&&this.a===b.a&&!0},
ab:function(a,b){return C.c.ab(this.a,b.a)},
gw:function(a){var s=this.a
return(s^C.c.aO(s,30))&1073741823},
i:function(a){var s=this,r=P.mW(H.nk(s)),q=P.e4(H.ni(s)),p=P.e4(H.ne(s)),o=P.e4(H.nf(s)),n=P.e4(H.nh(s)),m=P.e4(H.nj(s)),l=P.mX(H.ng(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bl.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.bl&&this.a===b.a},
gw:function(a){return C.c.gw(this.a)},
ab:function(a,b){return C.c.ab(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hE(),o=this.a
if(o<0)return"-"+new P.bl(0-o).i(0)
s=p.$1(C.c.a0(o,6e7)%60)
r=p.$1(C.c.a0(o,1e6)%60)
q=new P.hD().$1(o%1e6)
return""+C.c.a0(o,36e8)+":"+s+":"+r+"."+q}}
P.hD.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:18}
P.hE.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:18}
P.I.prototype={}
P.dX.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.hJ(s)
return"Assertion failed"}}
P.f0.prototype={}
P.ew.prototype={
i:function(a){return"Throw of null."}}
P.aD.prototype={
gbB:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbA:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbB()+o+m
if(!q.a)return l
s=q.gbA()
r=P.hJ(q.b)
return l+s+": "+r}}
P.cR.prototype={
gbB:function(){return"RangeError"},
gbA:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.x(q):""
else if(q==null)s=": Not greater than or equal to "+H.x(r)
else if(q>r)s=": Not in inclusive range "+H.x(r)+".."+H.x(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.x(r)
return s}}
P.ea.prototype={
gbB:function(){return"RangeError"},
gbA:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk:function(a){return this.f}}
P.fa.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.f7.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.eP.prototype={
i:function(a){return"Bad state: "+this.a}}
P.e1.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hJ(s)+"."}}
P.ez.prototype={
i:function(a){return"Out of Memory"},
$iI:1}
P.d_.prototype={
i:function(a){return"Stack Overflow"},
$iI:1}
P.e3.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.fu.prototype={
i:function(a){return"Exception: "+this.a}}
P.hP.prototype={
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
for(o=e;o<m;++o){n=C.a.R(d,o)
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
return f+j+h+i+"\n"+C.a.F(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.x(e)+")"):f}}
P.k.prototype={
gk:function(a){var s,r=this.gW(this)
for(s=0;r.v();)++s
return s},
I:function(a,b){var s,r,q
P.lj(b,"index")
for(s=this.gW(this),r=0;s.v();){q=s.gJ(s)
if(b===r)return q;++r}throw H.c(P.M(b,this,"index",null,r))},
i:function(a){return P.n0(this,"(",")")}}
P.eb.prototype={}
P.af.prototype={
gw:function(a){return P.P.prototype.gw.call(C.M,this)},
i:function(a){return"null"}}
P.P.prototype={constructor:P.P,$iP:1,
m:function(a,b){return this===b},
gw:function(a){return H.cP(this)},
i:function(a){return"Instance of '"+H.cQ(this)+"'"},
toString:function(){return this.i(this)}}
P.a2.prototype={
gk:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.iV.prototype={
$2:function(a,b){var s,r,q,p=C.a.dB(b,"=")
if(p===-1){if(b!=="")J.kh(a,P.kL(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.p(b,0,p)
r=C.a.ai(b,p+1)
q=this.a
J.kh(a,P.kL(s,0,s.length,q,!0),P.kL(r,0,r.length,q,!0))}return a},
$S:41}
P.iS.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:40}
P.iT.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:39}
P.iU.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.jZ(C.a.p(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:38}
P.bx.prototype={
gbU:function(){var s,r,q,p=this,o=p.x
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
else o=H.h(H.ks("_text"))}return o},
gw:function(a){var s=this,r=s.z
if(r==null){r=C.a.gw(s.gbU())
if(s.z==null)s.z=r
else r=H.h(H.ks("hashCode"))}return r},
gcn:function(){var s=this,r=s.Q
if(r==null){r=s.f
r=new P.c0(P.ly(r==null?"":r),t.m)
if(s.Q==null)s.Q=r
else r=H.h(H.ks("queryParameters"))}return r},
ge1:function(){return this.b},
gcd:function(a){var s=this.c
if(s==null)return""
if(C.a.a4(s,"["))return C.a.p(s,1,s.length-1)
return s},
gbp:function(a){var s=this.d
return s==null?P.lO(this.a):s},
gcm:function(a){var s=this.f
return s==null?"":s},
gdu:function(){var s=this.r
return s==null?"":s},
dV:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a4(s,"/"))s="/"+s
q=s
p=P.kJ(null,0,0,b)
return new P.bx(n,l,j,k,q,p,o.r)},
gdv:function(){return this.c!=null},
gdA:function(){return this.f!=null},
gdw:function(){return this.r!=null},
i:function(a){return this.gbU()},
m:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.r.b(b))if(q.a===b.gbt())if(q.c!=null===b.gdv())if(q.b===b.ge1())if(q.gcd(q)===b.gcd(b))if(q.gbp(q)===b.gbp(b))if(q.e===b.gdQ(b)){s=q.f
r=s==null
if(!r===b.gdA()){if(r)s=""
if(s===b.gcm(b)){s=q.r
r=s==null
if(!r===b.gdw()){if(r)s=""
s=s===b.gdu()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
$ifb:1,
gbt:function(){return this.a},
gdQ:function(a){return this.e}}
P.ju.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=P.kM(C.h,a,C.e,!0)
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=P.kM(C.h,b,C.e,!0)}},
$S:37}
P.jt.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.aC(b),r=this.a;s.v();)r.$2(a,s.gJ(s))},
$S:6}
P.iR.prototype={
ge0:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.d(m,0)
s=o.a
m=m[0]+1
r=C.a.bm(s,"?",m)
q=s.length
if(r>=0){p=P.dG(s,r+1,q,C.j,!1)
q=r}else p=n
m=o.c=new P.fn("data","",n,n,P.dG(s,m,q,C.u,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.jC.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.d(s,a)
s=s[a]
C.S.hd(s,0,96,b)
return s},
$S:35}
P.jD.prototype={
$3:function(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=C.a.C(b,r)^96
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:25}
P.jE.prototype={
$3:function(a,b,c){var s,r,q
for(s=C.a.C(b,0),r=C.a.C(b,1);s<=r;++s){q=(s^96)>>>0
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:25}
P.fP.prototype={
gdv:function(){return this.c>0},
gdz:function(){return this.c>0&&this.d+1<this.e},
gdA:function(){return this.f<this.r},
gdw:function(){return this.r<this.a.length},
gbt:function(){var s=this.x
return s==null?this.x=this.ev():s},
ev:function(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&C.a.a4(r.a,"http"))return"http"
if(q===5&&C.a.a4(r.a,"https"))return"https"
if(s&&C.a.a4(r.a,"file"))return"file"
if(q===7&&C.a.a4(r.a,"package"))return"package"
return C.a.p(r.a,0,q)},
ge1:function(){var s=this.c,r=this.b+3
return s>r?C.a.p(this.a,r,s-1):""},
gcd:function(a){var s=this.c
return s>0?C.a.p(this.a,s,this.d):""},
gbp:function(a){var s,r=this
if(r.gdz())return P.jZ(C.a.p(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&C.a.a4(r.a,"http"))return 80
if(s===5&&C.a.a4(r.a,"https"))return 443
return 0},
gdQ:function(a){return C.a.p(this.a,this.e,this.f)},
gcm:function(a){var s=this.f,r=this.r
return s<r?C.a.p(this.a,s+1,r):""},
gdu:function(){var s=this.r,r=this.a
return s<r.length?C.a.ai(r,s+1):""},
gcn:function(){var s=this
if(s.f>=s.r)return C.R
return new P.c0(P.ly(s.gcm(s)),t.m)},
dV:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbt(),k=l==="file",j=n.c,i=j>0?C.a.p(n.a,n.b+3,j):"",h=n.gdz()?n.gbp(n):m
j=n.c
if(j>0)s=C.a.p(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.p(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a4(r,"/"))r="/"+r
p=P.kJ(m,0,0,b)
q=n.r
o=q<j.length?C.a.ai(j,q+1):m
return new P.bx(l,i,s,h,r,p,o)},
gw:function(a){var s=this.y
return s==null?this.y=C.a.gw(this.a):s},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.r.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifb:1}
P.fn.prototype={}
W.o.prototype={}
W.hk.prototype={
gk:function(a){return a.length}}
W.dV.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.dW.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bj.prototype={$ibj:1}
W.bk.prototype={
e3:function(a,b,c){var s=a.getContext(b,P.m4(c))
return s},
$ibk:1}
W.az.prototype={
gk:function(a){return a.length}}
W.hw.prototype={
gk:function(a){return a.length}}
W.F.prototype={$iF:1}
W.cn.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.hx.prototype={}
W.ap.prototype={}
W.aG.prototype={}
W.hy.prototype={
gk:function(a){return a.length}}
W.hz.prototype={
gk:function(a){return a.length}}
W.hA.prototype={
gk:function(a){return a.length}}
W.hB.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.co.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.cp.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.x(r)+", "
s=a.top
s.toString
return r+H.x(s)+") "+H.x(this.gaF(a))+" x "+H.x(this.gaA(a))},
m:function(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=J.bA(b)
if(s===r.gbo(b)){s=a.top
s.toString
s=s===r.gbq(b)&&this.gaF(a)===r.gaF(b)&&this.gaA(a)===r.gaA(b)}else s=!1}else s=!1
return s},
gw:function(a){var s,r=a.left
r.toString
r=C.d.gw(r)
s=a.top
s.toString
return W.lG(r,C.d.gw(s),C.d.gw(this.gaF(a)),C.d.gw(this.gaA(a)))},
gde:function(a){var s=a.bottom
s.toString
return s},
gcO:function(a){return a.height},
gaA:function(a){var s=this.gcO(a)
s.toString
return s},
gbo:function(a){var s=a.left
s.toString
return s},
gcr:function(a){var s=a.right
s.toString
return s},
gbq:function(a){var s=a.top
s.toString
return s},
gd5:function(a){return a.width},
gaF:function(a){var s=this.gd5(a)
s.toString
return s},
$iaa:1}
W.e5.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.hC.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.fk.prototype={
gdF:function(a){return this.a.firstElementChild==null},
gk:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
j:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b]).toString},
l:function(a,b){this.a.appendChild(b).toString
return b},
gW:function(a){var s=this.hM(this)
return new J.aj(s,s.length)}}
W.G.prototype={
gbk:function(a){var s=a.children
s.toString
return new W.fk(a,s)},
gdf:function(a){var s,r,q,p=a.clientLeft
p.toString
s=a.clientTop
s.toString
r=a.clientWidth
r.toString
q=a.clientHeight
q.toString
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.aa(p,s,r,q,t.I)},
i:function(a){var s=a.localName
s.toString
return s},
$iG:1}
W.l.prototype={$il:1}
W.e.prototype={
fU:function(a,b,c,d){if(c!=null)this.en(a,b,c,!1)},
en:function(a,b,c,d){return a.addEventListener(b,H.cb(c,1),!1)},
$ie:1}
W.ae.prototype={$iae:1}
W.bJ.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iz:1,
$ik:1,
$ip:1,
$ibJ:1}
W.e7.prototype={
gk:function(a){return a.length}}
W.e9.prototype={
gk:function(a){return a.length}}
W.ar.prototype={$iar:1}
W.hR.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.bn.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.cu.prototype={$icu:1}
W.bM.prototype={$ibM:1}
W.bp.prototype={$ibp:1}
W.hZ.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.ih.prototype={
gk:function(a){return a.length}}
W.bP.prototype={$ibP:1}
W.eo.prototype={
h:function(a,b){return P.bd(a.get(b))},
A:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bd(s.value[1]))}},
gac:function(a){var s=H.b([],t.s)
this.A(a,new W.ii(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
j:function(a,b,c){throw H.c(P.A("Not supported"))},
$iH:1}
W.ii.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.ep.prototype={
h:function(a,b){return P.bd(a.get(b))},
A:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bd(s.value[1]))}},
gac:function(a){var s=H.b([],t.s)
this.A(a,new W.ij(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
j:function(a,b,c){throw H.c(P.A("Not supported"))},
$iH:1}
W.ij.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.at.prototype={$iat:1}
W.eq.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.ak.prototype={$iak:1}
W.fj.prototype={
j:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b]).toString},
gW:function(a){var s=this.a.childNodes
return new W.cs(s,s.length)},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.t.prototype={
hH:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.mH(s,b,a)}catch(q){H.be(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.e7(a):s},
fB:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$it:1}
W.cN.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.au.prototype={
gk:function(a){return a.length},
$iau:1}
W.eC.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.eH.prototype={
h:function(a,b){return P.bd(a.get(b))},
A:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bd(s.value[1]))}},
gac:function(a){var s=H.b([],t.s)
this.A(a,new W.iv(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
j:function(a,b,c){throw H.c(P.A("Not supported"))},
$iH:1}
W.iv.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.eJ.prototype={
gk:function(a){return a.length}}
W.al.prototype={$ial:1}
W.eL.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.aw.prototype={$iaw:1}
W.eM.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.ax.prototype={
gk:function(a){return a.length},
$iax:1}
W.eQ.prototype={
h:function(a,b){return a.getItem(H.oi(b))},
j:function(a,b,c){a.setItem(b,c)},
A:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gac:function(a){var s=H.b([],t.s)
this.A(a,new W.iC(s))
return s},
gk:function(a){var s=a.length
s.toString
return s},
$iH:1}
W.iC.prototype={
$2:function(a,b){return this.a.push(a)},
$S:31}
W.ah.prototype={$iah:1}
W.b8.prototype={$ib8:1}
W.am.prototype={$iam:1}
W.ad.prototype={$iad:1}
W.eU.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.eV.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.iH.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.an.prototype={$ian:1}
W.bu.prototype={$ibu:1}
W.eZ.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.iL.prototype={
gk:function(a){return a.length}}
W.aS.prototype={}
W.iW.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.fe.prototype={
gk:function(a){return a.length}}
W.b9.prototype={
gh9:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.A("deltaY is not supported"))},
gh8:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.A("deltaX is not supported"))},
$ib9:1}
W.c4.prototype={
fC:function(a,b){var s=a.requestAnimationFrame(H.cb(b,1))
s.toString
return s},
eB:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.fl.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.dk.prototype={
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
m:function(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=J.bA(b)
if(s===r.gbo(b)){s=a.top
s.toString
if(s===r.gbq(b)){s=a.width
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
return W.lG(p,s,r,C.d.gw(q))},
gcO:function(a){return a.height},
gaA:function(a){var s=a.height
s.toString
return s},
gd5:function(a){return a.width},
gaF:function(a){var s=a.width
s.toString
return s}}
W.fy.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.dq.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.fS.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.fZ.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
j:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iz:1,
$ik:1,
$ip:1}
W.kl.prototype={}
W.dl.prototype={
fQ:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.mI(s,this.c,r,!1)}}}
W.jg.prototype={
$1:function(a){return this.a.$1(a)},
$S:3}
W.kB.prototype={}
W.L.prototype={
gW:function(a){return new W.cs(a,this.gk(a))}}
W.cs.prototype={
v:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.l_(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gJ:function(a){return H.S(this).c.a(this.d)}}
W.fm.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fv.prototype={}
W.fw.prototype={}
W.fz.prototype={}
W.fA.prototype={}
W.fD.prototype={}
W.fE.prototype={}
W.fF.prototype={}
W.fG.prototype={}
W.fH.prototype={}
W.fI.prototype={}
W.fL.prototype={}
W.fM.prototype={}
W.fO.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.fQ.prototype={}
W.fR.prototype={}
W.fW.prototype={}
W.h_.prototype={}
W.h0.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.h1.prototype={}
W.h2.prototype={}
W.h8.prototype={}
W.h9.prototype={}
W.ha.prototype={}
W.hb.prototype={}
W.hc.prototype={}
W.hd.prototype={}
W.he.prototype={}
W.hf.prototype={}
W.hg.prototype={}
W.hh.prototype={}
P.jn.prototype={
cc:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bs:function(a){var s,r,q,p,o,n=this,m={}
if(a==null)return a
if(H.jF(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.Y)return new Date(a.a)
if(t.fJ.b(a))throw H.c(P.iQ("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.fK.b(a))return a
if(t.bX.b(a))return a
if(t.gb.b(a))return a
if(t.cH.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.f.b(a)){s=n.cc(a)
r=n.b
q=r.length
if(s>=q)return H.d(r,s)
p=m.a=r[s]
if(p!=null)return p
p={}
m.a=p
if(s>=q)return H.d(r,s)
r[s]=p
J.dS(a,new P.jp(m,n))
return m.a}if(t.c.b(a)){s=n.cc(a)
m=n.b
if(s>=m.length)return H.d(m,s)
p=m[s]
if(p!=null)return p
return n.h5(a,s)}if(t.eH.b(a)){s=n.cc(a)
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
n.hi(a,new P.jq(m,n))
return m.b}throw H.c(P.iQ("structured clone of other type"))},
h5:function(a,b){var s,r,q=J.bz(a),p=q.gk(a),o=new Array(p)
o.toString
s=this.b
if(b>=s.length)return H.d(s,b)
s[b]=o
for(r=0;r<p;++r){s=this.bs(q.h(a,r))
if(r>=o.length)return H.d(o,r)
o[r]=s}return o}}
P.jp.prototype={
$2:function(a,b){this.a.a[a]=this.b.bs(b)},
$S:15}
P.jq.prototype={
$2:function(a,b){this.a.b[a]=this.b.bs(b)},
$S:30}
P.jA.prototype={
$1:function(a){this.a.push(P.lW(a))},
$S:29}
P.jK.prototype={
$2:function(a,b){this.a[a]=P.lW(b)},
$S:15}
P.jo.prototype={
hi:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
b.$2(p,a[p])}}}
P.e8.prototype={
gb3:function(){var s=this.b,r=H.S(s)
return new H.aK(new H.dj(s,new P.hN(),r.H("dj<j.E>")),new P.hO(),r.H("aK<j.E,G>"))},
A:function(a,b){C.b.A(P.hY(this.gb3(),!1,t.h),b)},
j:function(a,b,c){var s=this.gb3()
J.mL(s.b.$1(J.ki(s.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b).toString},
gk:function(a){return J.aW(this.gb3().a)},
h:function(a,b){var s=this.gb3()
return s.b.$1(J.ki(s.a,b))},
gW:function(a){var s=P.hY(this.gb3(),!1,t.h)
return new J.aj(s,s.length)}}
P.hN.prototype={
$1:function(a){return t.h.b(a)},
$S:27}
P.hO.prototype={
$1:function(a){return t.h.a(a)},
$S:55}
P.fN.prototype={
gcr:function(a){return this.$ti.c.a(this.a+this.c)},
gde:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
m:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.I.b(b)){s=o.a
r=J.bA(b)
if(s===r.gbo(b)){q=o.b
if(q===r.gbq(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gcr(b)&&p.a(q+o.d)===r.gde(b)}else s=!1}else s=!1}else s=!1
return s},
gw:function(a){var s=this,r=s.a,q=C.c.gw(r),p=s.b,o=C.c.gw(p),n=s.$ti.c
r=C.c.gw(n.a(r+s.c))
p=C.c.gw(n.a(p+s.d))
return H.nw(H.iD(H.iD(H.iD(H.iD(0,q),o),r),p))}}
P.aa.prototype={
gbo:function(a){return this.a},
gbq:function(a){return this.b},
gaF:function(a){return this.c},
gaA:function(a){return this.d}}
P.aJ.prototype={$iaJ:1}
P.eh.prototype={
gk:function(a){var s=a.length
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
j:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.aN.prototype={$iaN:1}
P.ex.prototype={
gk:function(a){var s=a.length
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
j:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.io.prototype={
gk:function(a){return a.length}}
P.eS.prototype={
gk:function(a){var s=a.length
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
j:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.n.prototype={
gbk:function(a){return new P.e8(a,new W.fj(a))}}
P.aQ.prototype={$iaQ:1}
P.f_.prototype={
gk:function(a){var s=a.length
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
j:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.fB.prototype={}
P.fC.prototype={}
P.fJ.prototype={}
P.fK.prototype={}
P.fX.prototype={}
P.fY.prototype={}
P.h3.prototype={}
P.h4.prototype={}
P.hn.prototype={
gk:function(a){return a.length}}
P.dZ.prototype={
h:function(a,b){return P.bd(a.get(b))},
A:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bd(s.value[1]))}},
gac:function(a){var s=H.b([],t.s)
this.A(a,new P.ho(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
j:function(a,b,c){throw H.c(P.A("Not supported"))},
$iH:1}
P.ho.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
P.e_.prototype={
gk:function(a){return a.length}}
P.aY.prototype={}
P.ey.prototype={
gk:function(a){return a.length}}
P.fi.prototype={}
P.cS.prototype={$icS:1}
P.eN.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.M(b,a,null,null,null))
s=P.bd(a.item(b))
s.toString
return s},
j:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.fT.prototype={}
P.fU.prototype={}
K.dU.prototype={
aV:function(a,b){return!0},
i:function(a){return"all"},
$ibq:1}
K.ct.prototype={
aV:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)if(s[q].aV(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q},
$ibq:1}
K.aM.prototype={
aV:function(a,b){return!this.e6(0,b)},
i:function(a){return"!["+this.bv(0)+"]"}}
K.a_.prototype={
V:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.f("May not create a Set with zero characters."))
s=new H.V(t.fX)
for(r=new H.bO(a,a.gk(a)),q=H.S(r).c;r.v();)s.j(0,q.a(r.d),!0)
p=P.hY(s.gac(s),!0,t.S)
C.b.e5(p)
this.a=p},
aV:function(a,b){return C.b.M(this.a,b)},
i:function(a){return P.eT(this.a,0,null)},
$ibq:1}
L.eO.prototype={
n:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.d3(this.a.L(0,b),H.b([],t.B))
s.push(p)
return p},
he:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.aV(0,a))return p}return null},
i:function(a){return this.b},
d2:function(){var s,r,q,p,o,n=this,m=""+("("+n.b+")"),l=n.d
if(l!=null){m+=" => ["+l.b+"]"
l=n.a.c
s=n.d
if(l.M(0,s==null?null:s.b))m+=" (consume)"
s=n.d
if(s==null)s=null
else{s=s.c
s=s.gac(s)}s=J.aC(s==null?H.b([],t.s):s)
for(;s.v();){r=s.gJ(s)
m+="\n"
q=n.d
if(q!=null)q.c.h(0,r)
m+="  -- "+r+" => []"
if(l.M(0,""))m+=" (consume)"}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.q)(l),++p){o=l[p]
m+="\n"
m+="  -- "+(o.b.b+": "+o.bv(0))}return m.charCodeAt(0)==0?m:m}}
L.eX.prototype={
i:function(a){var s=H.mj(this.b,"\n","\\n"),r=H.mj(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.eY.prototype={
i:function(a){return this.b}}
L.iJ.prototype={
L:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.eO(this,b,H.b([],t.ab))
s.j(0,b,r)}return r},
bd:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.eY(a,P.U(s,s))
r.j(0,a,q)}return q},
dZ:function(a){return this.hO(a)},
hO:function(a){var s=this
return P.oB(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$dZ(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.t
b=H.b([],c)
a0=H.b([],c)
a1=H.b([],c)
n=H.S(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a1.length!==0)h=C.b.co(a1,0)
else{if(!r.v()){q=3
break}h=n.a(r.d)}a0.push(h);++k
g=d==null
f=g?null:d.he(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.eT(a0,0,null)
throw H.c(P.f("Untokenizable string [state: "+H.x(g?null:d.b)+", index "+k+']: "'+e+'"'))}if(!!a0.fixed$length)H.h(P.A("removeRange"))
P.b6(0,i,a0.length)
a0.splice(0,i-0)
C.b.fS(a1,a0)
a0=H.b([],c)
b=H.b([],c)
d=s.d
q=!m.M(0,l.a)?7:8
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
if(g!=null){e=P.eT(b,0,null)
g=d.d
if(g==null)l=null
else{g.c.h(0,e)
g=g.b
g=new L.eX(g,e,k)
l=g}i=a0.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.M(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.nJ()
case 1:return P.nK(o)}}},t.bJ)},
i:function(a){var s,r=new P.a2(""),q=this.d
if(q!=null)r.a=""+(q.d2()+"\n")
for(q=this.a,q=q.ghP(q),q=q.gW(q);q.v();){s=q.gJ(q)
if(s!=this.d)r.a+=H.x(s==null?null:s.d2())+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.d3.prototype={
i:function(a){return this.b.b+": "+this.bv(0)}}
O.ac.prototype={
cw:function(a,b,c){this.b=b
this.c=a
this.d=c},
bg:function(a,b){return this.cw(a,null,b)},
cU:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
cQ:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gk:function(a){return this.a.length},
gW:function(a){var s=this.a
return new J.aj(s,s.length)},
I:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
l:function(a,b){var s,r,q=this,p=H.S(q).H("u<ac.T>")
if(q.cU(H.b([b],p))){s=q.a
r=s.length
s.push(b)
q.cQ(r,H.b([b],p))}},
j:function(a,b,c){var s,r,q,p=this,o=p.a
if(b>=o.length)return H.d(o,b)
s=o[b]
if(!J.J(s,c)&&p.cU(H.b([c],H.S(p).H("u<ac.T>")))){if(b>=o.length)return H.d(o,b)
o[b]=c
o=H.S(p).H("u<ac.T>")
r=H.b([s],o)
q=p.d
if(q!=null)q.$2(b,r)
p.cQ(b,H.b([c],o))}},
$ik:1}
O.cJ.prototype={
gk:function(a){return this.a.length},
gu:function(){var s=this.b
return s==null?this.b=D.K():s},
aI:function(){var s=this.b
return s==null?null:s.D(null)},
gZ:function(a){var s=this.a
if(s.length>0)return C.b.gaB(s)
else return V.W()},
dT:function(a){this.a.push(a)
this.aI()},
cl:function(){var s=this.a
if(s.length>0){s.pop()
this.aI()}}}
E.hr.prototype={}
E.bm.prototype={
scz:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gu().K(0,s.gdO())
if(b!=null)b.gu().l(0,s.gdO())
s.aD(new D.D("shape",r,b))}},
sb9:function(a){var s,r,q=this
if(!J.J(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gu().K(0,q.gdM())
if(a!=null)a.gu().l(0,q.gdM())
r=q.r
q.aD(new D.D("mover",s,r))}},
as:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.a
if(!J.J(o,q.x)){s=q.x
q.x=o
q.aD(new D.D("matrix",s,o))}for(p=q.y.a,p=new J.aj(p,p.length),r=H.S(p).c;p.v();)r.a(p.d).as(0,b)},
aW:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.gZ(q))
else o.push(p.F(0,q.gZ(q)))
q.aI()
a.dU(r.f)
s=C.b.gaB(a.dy)
if(r.d!=null)if(s!=null)s.hG(a,r)
for(p=r.y.a,p=new J.aj(p,p.length),o=H.S(p).c;p.v();)o.a(p.d).aW(a)
a.dS()
q.cl()},
aD:function(a){var s=this.z
return s==null?null:s.D(a)},
a_:function(){return this.aD(null)},
dP:function(a){this.e=null
this.aD(a)},
hw:function(){return this.dP(null)},
dN:function(a){return this.aD(a)},
hv:function(){return this.dN(null)},
dL:function(a){return this.aD(a)},
hs:function(){return this.dL(null)},
hr:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gdK(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.aH()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.a_()},
hu:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gdK(),q=0;q<b.length;b.length===s||(0,H.q)(b),++q){p=b[q]
o=p.z;(o==null?p.z=new D.aH():o).K(0,r)}this.a_()},
i:function(a){return"Unnamed entity"}}
E.bE.prototype={
i:function(a){return this.b}}
E.bT.prototype={
i:function(a){return this.b}}
E.fs.prototype={}
E.ir.prototype={
ec:function(a,b){var s=this
s.cy.gu().l(0,new E.is(s))
s.db.gu().l(0,new E.it(s))
s.dx.gu().l(0,new E.iu(s))},
ghD:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.gZ(q).F(0,s.gZ(s))
q=s}return q},
dU:function(a){var s=this.dy
return s.push(a==null?C.b.gaB(s):a)},
dS:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.is.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:2}
E.it.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:2}
E.iu.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:2}
E.d0.prototype={}
E.eW.prototype={
cF:function(a){this.dW()},
cE:function(){return this.cF(null)},
ghj:function(){var s,r=this,q=Date.now(),p=C.c.a0(P.l5(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.Y(q,!1)
return s/p},
cX:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.dt(r*o)
r=s.clientHeight
r.toString
p=C.d.dt(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.ls(C.m,this.ghI())}},
dW:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.y.eB(s)
r=W.m1(new E.iG(this),t.H)
r.toString
C.y.fC(s,r)}},
hF:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cX()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.Y(p,!1)
q.y=P.l5(p-q.r.a).a*0.000001
p=q.cy
C.b.sk(p.a,0)
p.aI()
p=q.db
C.b.sk(p.a,0)
p.aI()
p=q.dx
C.b.sk(p.a,0)
p.aI()
p=q.dy
C.b.sk(p,0)
p.push(null)
m.aW(q)}}catch(o){s=H.be(o)
r=H.kU(o)
P.kX("Error: "+H.x(s))
P.kX("Stack: "+H.x(r))
throw H.c(s)}}}
E.iG.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hF()}},
$S:28}
Z.ff.prototype={}
Z.bF.prototype={
bj:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.be(q)
r=P.f('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.x(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.jb.prototype={}
Z.ci.prototype={
aT:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
bj:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].bj(a)}},
e_:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
aW:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=t.s,l=H.b([],m)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
l.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.cQ(p.c)+"'")+"]")}o=H.b([],m)
for(m=this.c,s=m.length,q=0;q<m.length;m.length===s||(0,H.q)(m),++q){n=m[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.n(l,", ")+"\nAttrs:   "+C.b.n(o,", ")}}
Z.bL.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cQ(this.c)+"'")+"]"}}
Z.bw.prototype={
gcA:function(a){var s=this.a,r=(s&$.bi().a)!==0?3:0
if((s&$.bh().a)!==0)r+=3
if((s&$.bg().a)!==0)r+=3
if((s&$.bC().a)!==0)r+=2
if((s&$.bD().a)!==0)r+=3
if((s&$.dQ().a)!==0)r+=3
if((s&$.dR().a)!==0)r+=4
if((s&$.ce().a)!==0)++r
return(s&$.bf().a)!==0?r+4:r},
fY:function(a){var s,r=$.bi(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bh()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bg()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bC()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bD()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dQ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dR()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ce()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bf()
if((q&r.a)!==0)if(s===a)return r
return $.mD()},
m:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bw))return!1
return this.a===b.a},
i:function(a){var s=H.b([],t.s),r=this.a
if((r&$.bi().a)!==0)s.push("Pos")
if((r&$.bh().a)!==0)s.push("Norm")
if((r&$.bg().a)!==0)s.push("Binm")
if((r&$.bC().a)!==0)s.push("Txt2D")
if((r&$.bD().a)!==0)s.push("TxtCube")
if((r&$.dQ().a)!==0)s.push("Clr3")
if((r&$.dR().a)!==0)s.push("Clr4")
if((r&$.ce().a)!==0)s.push("Weight")
if((r&$.bf().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.n(s,"|")}}
D.ht.prototype={}
D.aH.prototype={
l:function(a,b){var s=this.a
return(s==null?this.a=H.b([],t.a):s).push(b)},
K:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.b.M(p,b)
if(p===!0){p=r.a
p=p==null?q:C.b.K(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.b.M(p,b)
if(p===!0){p=r.b
p=p==null?q:C.b.K(p,b)
s=p===!0||s}return s},
D:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.N():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.b.A(P.hY(p,!0,t.h2),new D.hK(s))
r=q.b
if(r!=null){q.b=H.b([],t.a)
C.b.A(r,new D.hL(s))}return!0},
ak:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.D(s)}}}}
D.hK.prototype={
$1:function(a){a.$1(this.a)},
$S:24}
D.hL.prototype={
$1:function(a){a.$1(this.a)},
$S:24}
D.N.prototype={}
D.b0.prototype={}
D.b1.prototype={}
D.D.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.x(this.d)+" => "+H.x(this.e)}}
X.cj.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cj))return!1
if(this.a!==b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.eg.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eg))return!1
if(this.a!==b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.hU.prototype={}
X.cD.prototype={}
X.i_.prototype={
b2:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.a1(o.a+b.a,o.b+b.b)
o=q.a.gaQ()
s=$.ag
if(s==null)s=$.ag=new V.a1(0,0)
r=q.x
q.z=new P.Y(p,!1)
q.x=n
return new X.bQ(a,s,r,o,n)},
ck:function(a,b){this.r=a.a
return!1},
bb:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
ba:function(a,b){var s=this.d
if(s==null)return!1
s.D(this.b2(a,b))
return!0},
hA:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gaQ()
r=this.x
Date.now()
q.D(new X.bR(new V.a5(a.a,a.b),s,r))
return!0},
f8:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.D(new X.cD(c,q.a.gaQ(),b))
q.y=new P.Y(s,!1)
s=$.ag
q.x=s==null?$.ag=new V.a1(0,0):s}}
X.a8.prototype={
m:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.a8))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
i:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.b.n(s,"+")}}
X.bQ.prototype={}
X.ik.prototype={
bD:function(a,b,c){var s=this,r=new P.Y(Date.now(),!1),q=s.a.gaQ(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.bQ(a,p,o,q,b)},
ck:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.D(this.bD(a,b,!0))
return!0},
bb:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.D(r.bD(a,b,!0))
return!0},
ba:function(a,b){var s=this.d
if(s==null)return!1
s.D(this.bD(a,b,!1))
return!0},
hB:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gaQ()
Date.now()
r.D(new X.bR(new V.a5(a.a,a.b),s,b))
return!0},
gdh:function(){var s=this.b
return s==null?this.b=D.K():s},
gcu:function(){var s=this.c
return s==null?this.c=D.K():s},
gdJ:function(){var s=this.d
return s==null?this.d=D.K():s}}
X.bR.prototype={}
X.eE.prototype={}
X.d2.prototype={}
X.iK.prototype={
b2:function(a,b){var s,r,q,p,o=this,n=new P.Y(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.ag
if(r==null){r=new V.a1(0,0)
$.ag=r
s=r}else s=r}r=o.a.gaQ()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.d2(q,p,r,s)},
hz:function(a){var s=this.b
if(s==null)return!1
s.D(this.b2(a,!0))
return!0},
hx:function(a){var s=this.c
if(s==null)return!1
s.D(this.b2(a,!0))
return!0},
hy:function(a){var s=this.d
if(s==null)return!1
s.D(this.b2(a,!1))
return!0}}
X.fc.prototype={
gaU:function(a){var s=this.b
return s==null?this.b=new X.hU(new X.a8(!1,!1,!1),P.l9(t.S)):s},
ga3:function(){var s,r=this.c
if(r==null){r=$.ag
if(r==null){r=$.ag=new V.a1(0,0)
s=r}else s=r
r=this.c=new X.ik(this,r,s,new P.Y(Date.now(),!1),new P.Y(Date.now(),!1))}return r},
gad:function(){var s=this.d
if(s==null){s=$.ag
if(s==null)s=$.ag=new V.a1(0,0)
s=this.d=new X.i_(this,s,new P.Y(Date.now(),!1),new P.Y(Date.now(),!1))}return s},
gaY:function(){var s,r=this.e
if(r==null){r=$.ag
if(r==null){r=$.ag=new V.a1(0,0)
s=r}else s=r
r=this.e=new X.iK(this,r,s,new P.Y(Date.now(),!1),new P.Y(Date.now(),!1))}return r},
gaQ:function(){var s=this.a
return V.ll(0,0,C.l.gdf(s).c,C.l.gdf(s).d)},
cK:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.eg(p,new X.a8(s,r,q))},
aN:function(a){var s,r,q=this.gaU(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.a8(p,s,r)},
bR:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gaU(this)
r=a.altKey
q=a.shiftKey
p.c=new X.a8(s,r===!0,q===!0)},
ay:function(a){var s,r,q,p
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
b4:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.a5(r,s)},
bN:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=H.b([],t.cG)
r=a.touches
if(r==null)r=H.b([],t.gT)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
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
s.push(new V.a1(n-m,l-k))}return s},
av:function(a){var s,r,q,p
if(a==null)return new X.cj(0,new X.a8(!1,!1,!1))
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
return new X.cj(s,new X.a8(r,q,p))},
bE:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
eQ:function(a){return this.f=!1},
eX:function(a){if(this.f&&this.bE(a))a.preventDefault()},
f6:function(a){var s,r,q=this
if(!q.f)return
s=q.cK(a)
r=q.gaU(q)
r.c=s.b
r.d.l(0,s.a)},
f4:function(a){var s,r,q=this
if(!q.f)return
s=q.cK(a)
r=q.gaU(q)
r.c=s.b
r.d.K(0,s.a)},
fa:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aN(a)
if(p.x){s=p.av(a)
r=p.b4(a)
if(p.gad().ck(s,r))a.preventDefault()
return}s=p.av(a)
q=p.ay(a)
if(p.ga3().ck(s,q))a.preventDefault()},
fe:function(a){var s,r,q,p=this
p.aN(a)
s=p.av(a)
if(p.x){r=p.b4(a)
if(p.gad().bb(s,r))a.preventDefault()
return}q=p.ay(a)
if(p.ga3().bb(s,q))a.preventDefault()},
f0:function(a){var s,r,q,p=this
if(!p.bE(a)){p.aN(a)
s=p.av(a)
if(p.x){r=p.b4(a)
if(p.gad().bb(s,r))a.preventDefault()
return}q=p.ay(a)
if(p.ga3().bb(s,q))a.preventDefault()}},
fc:function(a){var s,r,q,p=this
p.aN(a)
s=p.av(a)
if(p.x){r=p.b4(a)
if(p.gad().ba(s,r))a.preventDefault()
return}q=p.ay(a)
if(p.ga3().ba(s,q))a.preventDefault()},
eZ:function(a){var s,r,q,p=this
if(!p.bE(a)){p.aN(a)
s=p.av(a)
if(p.x){r=p.b4(a)
if(p.gad().ba(s,r))a.preventDefault()
return}q=p.ay(a)
if(p.ga3().ba(s,q))a.preventDefault()}},
fg:function(a){var s,r,q=this
q.aN(a)
s=new V.a5(C.x.gh8(a),C.x.gh9(a)).F(0,q.Q)
if(q.x){if(q.gad().hA(s))a.preventDefault()
return}r=q.ay(a)
if(q.ga3().hB(s,r))a.preventDefault()},
fi:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.av(q.y)
r=q.ay(q.y)
q.gad().f8(s,r,p)}},
fv:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bR(a)
s=r.bN(a)
if(r.gaY().hz(s))a.preventDefault()},
fq:function(a){var s
this.bR(a)
s=this.bN(a)
if(this.gaY().hx(s))a.preventDefault()},
ft:function(a){var s
this.bR(a)
s=this.bN(a)
if(this.gaY().hy(s))a.preventDefault()}}
D.bI.prototype={
at:function(a){var s=this.r
return s==null?null:s.D(a)},
ee:function(){return this.at(null)},
$ias:1}
D.cz.prototype={
gu:function(){var s=this.y
return s==null?this.y=D.K():s},
gdH:function(){var s=this.z
return s==null?this.z=D.K():s},
at:function(a){var s=this.y
return s==null?null:s.D(a)},
cT:function(a){var s=this.z
return s==null?null:s.D(a)},
f7:function(){return this.cT(null)},
fk:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)if(this.ew(a[r]))return!1
return!0},
eK:function(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=this.gcS(),q=this.f,p=t.a,o=0;o<b.length;b.length===s||(0,H.q)(b),++o){n=b[o]
q.push(n)
m=n.r
if(m==null)m=n.r=new D.aH()
l=m.a;(l==null?m.a=H.b([],p):l).push(r)}this.at(new D.b0())},
fo:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gcS(),q=this.f,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
C.b.K(q,o)
n=o.r;(n==null?o.r=new D.aH():n).K(0,r)}this.at(new D.b1())},
ew:function(a){var s=C.b.M(this.f,a)
return s}}
V.X.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.X))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
V.aF.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aF))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+"]"},
t:function(){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+"]"}}
V.hI.prototype={}
V.cI.prototype={
a7:function(a,b){var s=this,r=H.b([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.n)
return r},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cI))return!1
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
i:function(a){var s,r,q,p,o=this,n=t.n,m=V.cd(H.b([o.a,o.d,o.r],n),3,0),l=V.cd(H.b([o.b,o.e,o.x],n),3,0),k=V.cd(H.b([o.c,o.f,o.y],n),3,0)
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
V.b3.prototype={
a7:function(a,b){var s=this,r=H.b([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.n)
return r},
dE:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.C().toString
if(Math.abs(b3-0)<1e-9)return V.W()
s=1/b3
r=-l
q=-a2
return V.aL((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
F:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aL(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
br:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.B(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
be:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.Q(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.b3))return!1
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
i:function(a){return this.t()},
B:function(a){var s,r,q,p,o,n=this,m=t.n,l=V.cd(H.b([n.a,n.e,n.y,n.cx],m),3,0),k=V.cd(H.b([n.b,n.f,n.z,n.cy],m),3,0),j=V.cd(H.b([n.c,n.r,n.Q,n.db],m),3,0),i=V.cd(H.b([n.d,n.x,n.ch,n.dx],m),3,0)
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
t:function(){return this.B("")}}
V.a1.prototype={
a8:function(a){return new V.a5(a.a-this.a,a.b-this.b)},
m:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"},
t:function(){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"}}
V.Q.prototype={
S:function(a,b){return new V.Q(this.a+b.a,this.b+b.b,this.c+b.c)},
aG:function(a,b){return new V.Q(this.a-b.a,this.b-b.b,this.c-b.c)},
F:function(a,b){return new V.Q(this.a*b,this.b*b,this.c*b)},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.Q))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"},
t:function(){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
V.b4.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.b4))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+"]"},
t:function(){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+"]"}}
V.eG.prototype={
gar:function(){var s=this.c,r=this.d
return s>r?r:s},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eG))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+"]"}}
V.a5.prototype={
ce:function(a){return Math.sqrt(this.a1(this))},
a1:function(a){return this.a*a.a+this.b*a.b},
F:function(a,b){return new V.a5(this.a*b,this.b*b)},
a9:function(a,b){var s
$.C().toString
if(Math.abs(b-0)<1e-9){s=$.bv
return s==null?$.bv=new V.a5(0,0):s}return new V.a5(this.a/b,this.b/b)},
m:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"}}
V.B.prototype={
ce:function(a){return Math.sqrt(this.a1(this))},
a1:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cf:function(a,b){return new V.B(V.hi(this.a,a.a,b),V.hi(this.b,a.b,b),V.hi(this.c,a.c,b))},
E:function(){var s=this,r=Math.sqrt(s.a1(s))
if(r===1)return s
return s.a9(0,r)},
az:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.B(s*r-q*p,q*o-n*r,n*p-s*o)},
S:function(a,b){return new V.B(this.a+b.a,this.b+b.b,this.c+b.c)},
aZ:function(a){return new V.B(-this.a,-this.b,-this.c)},
F:function(a,b){return new V.B(this.a*b,this.b*b,this.c*b)},
a9:function(a,b){$.C().toString
if(Math.abs(b-0)<1e-9)return V.dh()
return new V.B(this.a/b,this.b/b,this.c/b)},
dG:function(){$.C().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.B))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"},
t:function(){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
U.hu.prototype={
bw:function(a){var s=V.kg(a,this.c,this.b)
return s},
gu:function(){var s=this.y
return s==null?this.y=D.K():s},
G:function(a){var s=this.y
return s==null?null:s.D(a)},
scv:function(a,b){},
scg:function(a){var s,r=this,q=r.b
$.C().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bw(s)}r.G(new D.D("maximumLocation",q,r.b))}},
scj:function(a){var s,r=this,q=r.c
$.C().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bw(s)}r.G(new D.D("minimumLocation",q,r.c))}},
sU:function(a,b){var s,r=this
b=r.bw(b)
s=r.d
$.C().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.G(new D.D("location",s,b))}},
sci:function(a){var s,r,q=this,p=q.e
$.C().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.G(new D.D("maximumVelocity",p,a))}},
sX:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.C().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.G(new D.D("velocity",r,a))}},
sc3:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.C().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.G(new D.D("dampening",s,a))}},
as:function(a,b){var s,r,q,p=this,o=p.f
$.C().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sU(0,p.d+s*b)
o=p.x
$.C().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sX(s)}}}
U.ck.prototype={
gu:function(){var s=this.b
return s==null?this.b=D.K():s},
am:function(a,b,c){return this.a},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ck))return!1
return this.a.m(0,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")}}
U.bK.prototype={
gu:function(){var s=this.e
return s==null?this.e=D.K():s},
G:function(a){var s=this.e
return s==null?null:s.D(a)},
a6:function(){return this.G(null)},
eg:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaJ(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.gu()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}this.G(new D.b0())},
fm:function(a,b){var s,r,q,p
for(s=b.length,r=this.gaJ(),q=0;q<b.length;b.length===s||(0,H.q)(b),++q){p=b[q]
if(p!=null)p.gu().K(0,r)}this.G(new D.b1())},
am:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.aj(o,o.length),n=H.S(o).c,s=null;o.v();){r=n.a(o.d)
if(r!=null){q=r.am(0,b,c)
s=s==null?q:q.F(0,s)}}p.f=s==null?V.W():s
o=p.e
if(o!=null)o.ak(0)}return p.f},
m:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bK))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(p>=q.length)return H.d(q,p)
if(!J.J(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$iZ:1}
U.Z.prototype={}
U.cT.prototype={
gu:function(){var s=this.y
return s==null?this.y=D.K():s},
G:function(a){var s=this.y
return s==null?null:s.D(a)},
se2:function(a){var s
a=V.kg(a,0,6.283185307179586)
s=this.a
$.C().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
this.G(new D.D("yaw",s,a))}},
sdR:function(a,b){var s
b=V.kg(b,0,6.283185307179586)
s=this.b
$.C().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
this.G(new D.D("pitch",s,b))}},
sdX:function(a){var s
a=V.kg(a,0,6.283185307179586)
s=this.c
$.C().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
this.G(new D.D("roll",s,a))}},
am:function(a,b,c){var s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.se2(s.a+s.d*b.y)
s.sdR(0,s.b+s.e*b.y)
s.sdX(s.c+s.f*b.y)
s.x=V.ld(s.c).F(0,V.lc(s.b)).F(0,V.ku(s.a))
r=s.y
if(r!=null)r.ak(0)}return s.x},
m:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.cT))return!1
s=q.a
r=b.a
$.C().toString
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(q.b-b.b)<1e-9))return!1
if(!(Math.abs(q.c-b.c)<1e-9))return!1
if(!(Math.abs(q.d-b.d)<1e-9))return!1
if(!(Math.abs(q.e-b.e)<1e-9))return!1
if(!(Math.abs(q.f-b.f)<1e-9))return!1
return!0},
i:function(a){var s=this
return"Rotator: ["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+"], ["+V.y(s.d,3,0)+", "+V.y(s.e,3,0)+", "+V.y(s.f,3,0)+"]"}}
U.de.prototype={
gu:function(){var s=this.cy
return s==null?this.cy=D.K():s},
G:function(a){var s=this.cy
return s==null?null:s.D(a)},
a6:function(){return this.G(null)},
b5:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.ga3().gdh().l(0,s.gbF())
a.ga3().gdJ().l(0,s.gbH())
a.ga3().gcu().l(0,s.gbJ())
return!0},
bG:function(a){var s=this,r=s.c,q=s.a
if(!r.m(0,q==null?null:q.gaU(q).c))return
s.x=s.y=!0
s.z=s.b.d},
bI:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.a8(a.d)
if(s.a1(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.sU(0,-a.y.a8(r).F(0,2).a9(0,s.gar()).a*2.5+p.z)
q.sX(0)
p.Q=a.z.a8(r).F(0,2).a9(0,s.gar())
p.a6()},
bK:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.a1(s)>0.0001){r.b.sX(r.Q.a*10*2.5)
r.a6()}},
am:function(a,b,c){var s=this,r=s.ch,q=b.e
if(r<q){s.ch=q
r=s.b
r.as(0,b.y)
s.cx=V.ld(r.d)}return s.cx},
$iZ:1}
U.df.prototype={
gu:function(){var s=this.fx
return s==null?this.fx=D.K():s},
G:function(a){var s=this.fx
return s==null?null:s.D(a)},
a6:function(){return this.G(null)},
b5:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.ga3().gdh().l(0,q.gbF())
a.ga3().gdJ().l(0,q.gbH())
a.ga3().gcu().l(0,q.gbJ())
s=a.gad()
r=s.f
s=r==null?s.f=D.K():r
s.l(0,q.geD())
s=a.gad()
r=s.d
s=r==null?s.d=D.K():r
s.l(0,q.geF())
s=a.gaY()
r=s.b
s=r==null?s.b=D.K():r
s.l(0,q.gfO())
s=a.gaY()
r=s.d
s=r==null?s.d=D.K():r
s.l(0,q.gfM())
s=a.gaY()
r=s.c
s=r==null?s.c=D.K():r
s.l(0,q.gfK())
return!0},
aM:function(a){return new V.a5(a.a,a.b)},
bG:function(a){var s=this
t.Z.a(a)
if(!s.d.m(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bI:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.a8(a.d)
if(s.a1(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aM(a.y.a8(r).F(0,2).a9(0,s.gar()))
p=n.c
p.sU(0,-q.a*2.5+n.cy)
o=n.b
o.sU(0,-q.b*2.5+n.db)
o.sX(0)
p.sX(0)
n.dx=n.aM(a.z.a8(r).F(0,2).a9(0,s.gar()))
n.a6()},
bK:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a1(s)>0.0001){r.c.sX(-r.dx.a*10*2.5)
r.b.sX(-r.dx.b*10*2.5)
r.a6()}},
eE:function(a){var s=this
if(t.bv.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eG:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.m(0,a.x.b))return
s=a.c
r=a.d
q=n.aM(a.y.a8(r).F(0,2).a9(0,s.gar()))
p=n.c
p.sU(0,-q.a*2.5+n.cy)
o=n.b
o.sU(0,-q.b*2.5+n.db)
o.sX(0)
p.sX(0)
n.dx=n.aM(a.z.a8(r).F(0,2).a9(0,s.gar()))
n.a6()},
fP:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fN:function(a){var s,r,q,p,o,n=this
t.dr.a(a)
if(!n.cx)return
if(n.ch){s=a.y.a8(a.d)
if(s.a1(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aM(a.y.a8(r).F(0,2).a9(0,s.gar()))
p=n.c
p.sU(0,-q.a*2.5+n.cy)
o=n.b
o.sU(0,-q.b*2.5+n.db)
o.sX(0)
p.sX(0)
n.dx=n.aM(a.z.a8(r).F(0,2).a9(0,s.gar()))
n.a6()},
fL:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a1(s)>0.0001){r.c.sX(-r.dx.a*10*2.5)
r.b.sX(-r.dx.b*10*2.5)
r.a6()}},
am:function(a,b,c){var s,r=this,q=r.dy,p=b.e
if(q<p){r.dy=p
s=b.y
q=r.c
q.as(0,s)
p=r.b
p.as(0,s)
r.fr=V.ku(p.d).F(0,V.lc(q.d))}return r.fr},
$iZ:1}
U.dg.prototype={
gu:function(){var s=this.r
return s==null?this.r=D.K():s},
G:function(a){var s=this.r
return s==null?null:s.D(a)},
b5:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.ga3()
r=s.e
s=r==null?s.e=D.K():r
r=this.geH()
s.l(0,r)
s=a.gad()
q=s.e;(q==null?s.e=D.K():q).l(0,r)
return!0},
eI:function(a){var s=this,r=s.b,q=s.a
if(!r.m(0,q==null?null:q.gaU(q).c))return
t.bZ.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.G(new D.D("zoom",r,q))}},
am:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.aL(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$iZ:1}
M.e6.prototype={
au:function(a){var s=this.y
return s==null?null:s.D(a)},
eh:function(){return this.au(null)},
eT:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gao(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.aH()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.au(new D.b0())},
eV:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gao(),q=0;q<b.length;b.length===s||(0,H.q)(b),++q){p=b[q]
o=p.z;(o==null?p.z=new D.aH():o).K(0,r)}this.au(new D.b1())},
sdY:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gu().K(0,r.gao())
s=r.d
r.d=a
if(a!=null)a.gu().l(0,r.gao())
r.au(new D.D("technique",s,r.d))}},
gu:function(){var s=this.y
return s==null?this.y=D.K():s},
aW:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.f
if(d!=null)d.D(new E.d0(a))
a.dU(e.d)
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
o=C.d.al(p.a*r)
n=C.d.al(p.b*q)
m=C.d.al(p.c*r)
a.c=m
p=C.d.al(p.d*q)
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
h=V.aL(-i/(s/p),0,0,0,0,i,0,0,0,0,k/j,-k*l/j,0,0,1,0)
a.cy.dT(h)
g=$.mo()
f=d.b
if(f!=null)g=f.am(0,a,d).F(0,g)
a.db.dT(g)}d=e.d
if(d!=null)d.as(0,a)
for(d=e.e.a,s=new J.aj(d,d.length),p=H.S(s).c;s.v();)p.a(s.d).as(0,a)
for(d=new J.aj(d,d.length),s=H.S(d).c;d.v();)s.a(d.d).aW(a)
if(e.b!=null){a.cy.cl()
a.db.cl()}a.dS()}}
A.dY.prototype={}
A.hm.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hb:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
ha:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.aA.prototype={
gan:function(a){var s=this.a?1:0
return s|0},
i:function(a){var s=this.a?1:0
return""+(s|0)},
m:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.aA))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.el.prototype={
eb:function(d7,d8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=null,d1=u.C,d2="Required uniform value, ",d3=", was not defined or used in shader.",d4=c9.x,d5=new P.a2(""),d6=d4.fr
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
A.oQ(d4,d5)
A.oS(d4,d5)
A.oR(d4,d5)
A.oU(d4,d5)
A.oV(d4,d5)
A.oT(d4,d5)
A.oW(d4,d5)
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
m=A.oP(d4)
c9.c=n
c9.d=m
l=c9.cL(n,35633)
k=c9.cL(c9.d,35632)
s=c9.a
q=s.createProgram()
q.toString
c9.e=q
s.attachShader(c9.gaw(),l)
s.attachShader(c9.gaw(),k)
s.linkProgram(c9.gaw())
if(!H.lV(s.getProgramParameter(c9.gaw(),35714))){j=s.getProgramInfoLog(c9.gaw())
if(j==null)j="undefined log error"
s.deleteProgram(c9.e)
H.h(P.f("Failed to link shader: "+j))}c9.fG()
c9.fI()
c9.y=c9.gap(c9).h(0,"posAttr")
c9.Q=c9.gap(c9).h(0,"normAttr")
c9.z=c9.gap(c9).h(0,"binmAttr")
c9.ch=c9.gap(c9).h(0,"txt2DAttr")
c9.cx=c9.gap(c9).h(0,"txtCubeAttr")
c9.cy=c9.gap(c9).h(0,"bendAttr")
if(d4.dy)c9.fy=t.j.a(c9.gP().O(0,"invViewMat"))
if(d6)c9.db=t.j.a(c9.gP().O(0,"objMat"))
if(r)c9.dx=t.j.a(c9.gP().O(0,"viewObjMat"))
d6=t.j
c9.fr=d6.a(c9.gP().O(0,"projViewObjMat"))
if(d4.go)c9.dy=d6.a(c9.gP().O(0,"viewMat"))
if(d4.x1)c9.go=t.d.a(c9.gP().O(0,"txt2DMat"))
if(d4.x2)c9.id=d6.a(c9.gP().O(0,"txtCubeMat"))
if(d4.y1)c9.k1=d6.a(c9.gP().O(0,"colorMat"))
c9.k3=H.b([],t.p)
s=d4.aS
if(s>0){c9.k2=t.w.a(c9.gP().O(0,"bendMatCount"))
for(i=0;i<s;++i){r=c9.k3
h=c9.r
if(h==null)H.h(P.f(d1))
q="bendValues["+i+"].mat"
g=h.h(0,q)
if(g==null)H.h(P.f(d2+q+d3))
r.push(d6.a(g))}}if(d4.a.a)c9.k4=t.g.a(c9.gP().O(0,"emissionClr"))
if(d4.b.a)c9.rx=t.g.a(c9.gP().O(0,"ambientClr"))
if(d4.c.a)c9.x2=t.g.a(c9.gP().O(0,"diffuseClr"))
if(d4.d.a)c9.aS=t.g.a(c9.gP().O(0,"invDiffuseClr"))
d6=d4.e.a
if(!d6)s=!1
else s=!0
if(s){c9.dl=t.v.a(c9.gP().O(0,"shininess"))
if(d6)c9.dk=t.g.a(c9.gP().O(0,"specularClr"))}if(d4.db){c9.dm=t.l.a(c9.gP().O(0,"envSampler"))
if(d4.r.a)c9.dn=t.g.a(c9.gP().O(0,"reflectClr"))
d6=d4.x.a
if(!d6)s=!1
else s=!0
if(s){c9.dq=t.v.a(c9.gP().O(0,"refraction"))
if(d6)c9.dr=t.g.a(c9.gP().O(0,"refractClr"))}}if(d4.y.a)c9.ds=t.v.a(c9.gP().O(0,"alpha"))
if(d4.k1){d6=d4.z
s=d6.length
if(s!==0){r=t.S
c9.c4=P.U(r,t.W)
c9.c5=P.U(r,t.O)
for(r=t.w,q=t.g,p=t.v,o=t.Y,f=0;f<d6.length;d6.length===s||(0,H.q)(d6),++f){e=d6[f]
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
a9=a8}b.push(new A.d7(g,a2,a3,a9,a8,a7))}c9.c5.j(0,d,b)
a=c9.c4
h=c9.r
if(h==null)H.h(P.f(d1))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.h(P.f(d2+a0+d3))
a.j(0,d,r.a(g))}}d6=d4.Q
s=d6.length
if(s!==0){r=t.S
c9.c6=P.U(r,t.W)
c9.c7=P.U(r,t.Q)
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
b.push(new A.d8(b2,b1,b0,g,a2,b3))}c9.c7.j(0,d,b)
a=c9.c6
h=c9.r
if(h==null)H.h(P.f(d1))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.h(P.f(d2+a0+d3))
a.j(0,d,r.a(g))}}d6=d4.ch
s=d6.length
if(s!==0){r=t.S
c9.c8=P.U(r,t.W)
c9.c9=P.U(r,t.b)
for(r=t.w,q=t.g,p=t.d,o=t.l,a=t.F,a0=t.v,a1=t.C,f=0;f<d6.length;d6.length===s||(0,H.q)(d6),++f){e=d6[f]
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
a9=a8}b.push(new A.da(g,a2,c0,a3,b3,c1,c2,a9,a8,a7))}c9.c9.j(0,d,b)
b4=c9.c8
h=c9.r
if(h==null)H.h(P.f(d1))
b5=c+"Count"
g=h.h(0,b5)
if(g==null)H.h(P.f(d2+b5+d3))
b4.j(0,d,r.a(g))}}d4=d4.cx
d6=d4.length
if(d6!==0){s=t.S
c9.ca=P.U(s,t.W)
c9.cb=P.U(s,t.R)
for(s=t.w,r=t.g,q=t.v,p=t.F,o=t.G,a=t.J,f=0;f<d4.length;d4.length===d6||(0,H.q)(d4),++f){e=d4[f]
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
b.push(new A.dd(g,a2,a3,a4,b2,b1,c6,c5,c2,c8,c7,a9,a8,a7,b3,c1))}c9.cb.j(0,d,b)
a0=c9.ca
h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"Count"
g=h.h(0,a1)
if(g==null)H.h(P.f(d2+a1+d3))
a0.j(0,d,s.a(g))}}}},
fE:function(a,b){}}
A.aX.prototype={
i:function(a){return"barLight"+this.a}}
A.b_.prototype={
i:function(a){return"dirLight"+this.a}}
A.b5.prototype={
i:function(a){return"pointLight"+this.a}}
A.b7.prototype={
i:function(a){return"spotLight"+this.a}}
A.i3.prototype={
i:function(a){return this.bl}}
A.d7.prototype={}
A.d8.prototype={}
A.da.prototype={}
A.dd.prototype={}
A.cW.prototype={
gap:function(a){var s=this.f
if(s==null)throw H.c(P.f("Must initialize the shader prior to getting the attributes."))
return s},
gP:function(){var s=this.r
if(s==null)throw H.c(P.f(u.C))
return s},
gaw:function(){var s=this.e
if(s==null)throw H.c(P.f(u.F))
return s},
cL:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.lV(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.f('Error compiling shader "'+H.x(q)+'": '+s))}return q},
fG:function(){var s,r,q,p,o=this,n=u.F,m=H.b([],t.eu),l=o.a,k=H.jz(l.getProgramParameter(o.gaw(),35721))
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
m.push(new A.dY(l,q,p))}o.f=new A.hm(m)},
fI:function(){var s,r,q,p,o,n,m=this,l=u.F,k=H.b([],t.dC),j=m.a,i=H.jz(j.getProgramParameter(m.gaw(),35718))
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
k.push(m.h6(o,n,q,p))}m.r=new A.iP(k)},
aL:function(a,b,c){var s=this.a
if(a===1)return new A.bX(s,b,c)
else return A.kx(s,this.e,b,a,c)},
ey:function(a,b,c){var s=this.a
if(a===1)return new A.db(s,b,c)
else return A.kx(s,this.e,b,a,c)},
ez:function(a,b,c){var s=this.a
if(a===1)return new A.dc(s,b,c)
else return A.kx(s,this.e,b,a,c)},
bi:function(a,b){return new P.fu(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
h6:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aL(b,c,d)
case 5121:return s.aL(b,c,d)
case 5122:return s.aL(b,c,d)
case 5123:return s.aL(b,c,d)
case 5124:return s.aL(b,c,d)
case 5125:return s.aL(b,c,d)
case 5126:return new A.d4(s.a,c,d)
case 35664:return new A.f2(s.a,c,d)
case 35665:return new A.d5(s.a,c,d)
case 35666:return new A.d6(s.a,c,d)
case 35667:return new A.f3(s.a,c,d)
case 35668:return new A.f4(s.a,c,d)
case 35669:return new A.f5(s.a,c,d)
case 35674:return new A.f6(s.a,c,d)
case 35675:return new A.d9(s.a,c,d)
case 35676:return new A.bY(s.a,c,d)
case 35678:return s.ey(b,c,d)
case 35680:return s.ez(b,c,d)
case 35670:throw H.c(s.bi("BOOL",c))
case 35671:throw H.c(s.bi("BOOL_VEC2",c))
case 35672:throw H.c(s.bi("BOOL_VEC3",c))
case 35673:throw H.c(s.bi("BOOL_VEC4",c))
default:throw H.c(P.f("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.a3.prototype={}
A.iP.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
O:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.f("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.t()},
t:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.bX.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.f3.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.f4.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.f5.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.f1.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.d4.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.f2.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.d5.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.d6.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.f6.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.d9.prototype={
ah:function(a){var s=new Float32Array(H.c8(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.bY.prototype={
ah:function(a){var s=new Float32Array(H.c8(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.db.prototype={
i:function(a){return"UniformSampler2D: "+this.c}}
A.dc.prototype={
i:function(a){return"UniformSamplerCube: "+this.c}}
F.jy.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cf(q.b,b).cf(q.d.cf(q.c,b),c)
a.sU(0,new V.Q(p.a,p.b,p.c))
a.scs(p.E())
q=1-b
s=1-c
a.sbX(new V.b4(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)},
$S:5}
F.jL.prototype={
$2:function(a,b){return V.hi(this.a,this.b,b)},
$S:10}
F.jN.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.hi(-1,1,c),n=this.a.$2(b,c)
q=-q*n
s=p*n
a.sU(0,new V.Q(q,s,o))
a.scs(new V.B(q,s,o).E())
a.sbX(new V.b4(1-c,2+c,-1,-1))},
$S:5}
F.jO.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:19}
F.jP.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:19}
F.kd.prototype={
$2:function(a,b){return 0},
$S:10}
F.kc.prototype={
$3:function(a,b,c){var s,r=this.b.$2(b,c)
if(typeof r!=="number")return H.mc(r)
s=a.f
r=(s!=null?new V.B(s.a,s.b,s.c):V.kz()).E().F(0,this.a+r)
a.sU(0,new V.Q(r.a,r.b,r.c))},
$S:5}
F.kf.prototype={
$1:function(a){return new V.Q(Math.cos(a),Math.sin(a),0)},
$S:16}
F.k0.prototype={
$1:function(a){var s=this.a*a,r=2+Math.cos(s),q=this.b*a
return new V.Q(r*Math.cos(q)/2,r*Math.sin(q)/2,Math.sin(s)/2)},
$S:16}
F.jM.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.kZ(l.$1(m),k)
k=J.kZ(l.$1(m+3.141592653589793/n.c),k).aG(0,j)
s=new V.B(k.a,k.b,k.c).E()
r=$.lB
if(r==null){r=new V.B(1,0,0)
$.lB=r}q=s.az(!s.m(0,r)?V.kz():r).E()
r=q.az(s).E()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.F(0,l*k)
k=q.F(0,o*k)
a.sU(0,j.S(0,new V.Q(l.a-k.a,l.b-k.b,l.c-k.c)))},
$S:5}
F.jU.prototype={
$2:function(a,b){return 0},
$S:10}
F.jT.prototype={
$3:function(a,b,c){var s,r,q=b*2-1,p=c*2-1
a.sU(0,new V.Q(q,p,this.a.$2(b,c)))
a.scs(new V.B(q,p,1).E())
s=1-b
r=1-c
a.sbX(new V.b4(b*c,2+s*c,4+b*r,6+s*r))},
$S:5}
F.aq.prototype={
aH:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.c(P.f("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.bS(a)
s.bT(b)
s.fF(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gN().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a_()}},
b6:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.b.K(r.gN().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a_()}}s.bO()
s.bP()
s.fA()},
bS:function(a){this.a=a
a.gN().b.push(this)},
bT:function(a){this.b=a
a.gN().c.push(this)},
fF:function(a){this.c=a
a.gN().d.push(this)},
bO:function(){var s=this.a
if(s!=null)C.b.K(s.gN().b,this)
this.a=null},
bP:function(){var s=this.b
if(s!=null)C.b.K(s.gN().c,this)
this.b=null},
fA:function(){var s=this.c
if(s!=null)C.b.K(s.gN().d,this)
this.c=null},
eq:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.dh()
if(n!=null)q=q.S(0,n)
if(s!=null)q=q.S(0,s)
if(r!=null)q=q.S(0,r)
if(q.dG())return p
return q.E()},
es:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aG(0,n)
q=new V.B(o.a,o.b,o.c).E()
o=r.aG(0,n)
return q.az(new V.B(o.a,o.b,o.c).E()).E()},
c_:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.eq()
if(s==null){s=q.es()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a_()}return!0},
ep:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.dh()
if(n!=null)q=q.S(0,n)
if(s!=null)q=q.S(0,s)
if(r!=null)q=q.S(0,r)
if(q.dG())return p
return q.E()},
er:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.C().toString
if(Math.abs(p-0)<1e-9){j=b.aG(0,e)
o=new V.B(j.a,j.b,j.c).E()
if(q.a-r.a<0)o=o.aZ(0)}else{n=(j-s.b)/p
j=b.aG(0,e).F(0,n).S(0,e).aG(0,h)
o=new V.B(j.a,j.b,j.c).E()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.aZ(0)}m=l.d
if(m!=null){m=m.E()
o=m.az(o).E().az(m).E()}return o},
bY:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.ep()
if(s==null){s=q.er()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a_()}return!0},
gh1:function(a){var s=this
if(J.J(s.a,s.b))return!0
if(J.J(s.b,s.c))return!0
if(J.J(s.c,s.a))return!0
return!1},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.t()},
B:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gq(p)
p=a+C.a.af(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gq(o)
p=p+C.a.af(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gq(o)
s=p+C.a.af(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.t()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.t()
return s+((p==null?"-":p)+"}")},
t:function(){return this.B("")}}
F.hM.prototype={}
F.iA.prototype={
b7:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gq(q)
s=c.a
if(q==(s==null?r:s.gq(s))){q=b.b
q=q==null?r:q.gq(q)
s=c.b
if(q==(s==null?r:s.gq(s))){q=b.c
q=q==null?r:q.gq(q)
s=c.c
q=q==(s==null?r:s.gq(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gq(q)
s=c.b
if(q==(s==null?r:s.gq(s))){q=b.b
q=q==null?r:q.gq(q)
s=c.c
if(q==(s==null?r:s.gq(s))){q=b.c
q=q==null?r:q.gq(q)
s=c.a
q=q==(s==null?r:s.gq(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gq(q)
s=c.c
if(q==(s==null?r:s.gq(s))){q=b.b
q=q==null?r:q.gq(q)
s=c.a
if(q==(s==null?r:s.gq(s))){q=b.c
q=q==null?r:q.gq(q)
s=c.b
q=q==(s==null?r:s.gq(s))}else q=!1
return q}else return!1}}}}
F.ei.prototype={
ea:function(a,b){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a line with a start vertex which is not attached to a shape."))
if(r!==b.a)throw H.c(P.f("May not create a line with vertices attached to different shapes."))
s.bS(a)
s.bT(b)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.ga2(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a_()}},
b6:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null)){if(!q){r=r.a
if(r!=null)C.b.K(r.ga2(r).b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a_()}}s.bO()
s.bP()},
bS:function(a){this.a=a
a.ga2(a).b.push(this)},
bT:function(a){this.b=a
a.ga2(a).c.push(this)},
bO:function(){var s=this.a
if(s!=null)C.b.K(s.ga2(s).b,this)
this.a=null},
bP:function(){var s=this.b
if(s!=null)C.b.K(s.ga2(s).c,this)
this.b=null},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.t()},
B:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gq(s)
s=a+C.a.af(C.c.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gq(r)
return s+C.a.af(C.c.i(r==null?-1:r),0)},
t:function(){return this.B("")}}
F.hV.prototype={}
F.iO.prototype={
b7:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gq(q)
s=c.a
if(q==(s==null?r:s.gq(s))){q=b.b
q=q==null?r:q.gq(q)
s=c.b
return q==(s==null?r:s.gq(s))}else{q=b.a
q=q==null?r:q.gq(q)
s=c.b
if(q==(s==null?r:s.gq(s))){q=b.b
q=q==null?r:q.gq(q)
s=c.a
return q==(s==null?r:s.gq(s))}else return!1}}}
F.eD.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.t()},
B:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gq(s)
return a+C.a.af(C.c.i(s),0)},
t:function(){return this.B("")}}
F.cX.prototype={
gY:function(){var s=this.a
return s==null?this.a=new F.w(this,H.b([],t.k)):s},
gbc:function(a){var s=this.b
return s==null?this.b=new F.bt(this,H.b([],t.q)):s},
ga2:function(a){var s=this.c
return s==null?this.c=new F.cZ(this,H.b([],t.L)):s},
gN:function(){var s=this.d
return s==null?this.d=new F.cY(this,H.b([],t.u)):s},
gu:function(){var s=this.e
return s==null?this.e=D.K():s},
b8:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.e
if(a0!=null)++a0.d
a1.gY().T()
s=b.gY().c.length
for(a0=a1.gY().c,r=a0.length,q=t.k,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){o=a0[p]
n=b.a
if(n==null)n=b.a=new F.w(b,H.b([],q))
n.l(0,o.h4())}b.gY().T()
for(a0=a1.gbc(a1).b,r=a0.length,n=t.q,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){m=a0[p]
l=b.a
if(l==null)l=b.a=new F.w(b,H.b([],q))
k=m.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.w(j,H.b([],q)):i).T()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
h=l[k]
k=b.b
l=(k==null?b.b=new F.bt(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.w(l,H.b([],q)):k).l(0,h)
l=new F.eD()
if(h.a==null)H.h(P.f("May not create a point with a vertex which is not attached to a shape."))
l.a=h
k=h.b;(k==null?h.b=new F.di(H.b([],n)):k).b.push(l)
k=l.a
if(k!=null){k=k.a
if(k!=null){j=k.b;(j==null?k.b=new F.bt(k,H.b([],n)):j).b.push(l)}}l=l.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.D(a)}}}for(a0=a1.ga2(a1).b,r=a0.length,n=t.L,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){g=a0[p]
l=b.a
if(l==null)l=b.a=new F.w(b,H.b([],q))
k=g.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.w(j,H.b([],q)):i).T()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.w(b,H.b([],q)):k
k=g.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.w(j,H.b([],q)):i).T()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.c
l=(k==null?b.c=new F.cZ(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.w(l,H.b([],q)):k).l(0,f)
k=l.a;(k==null?l.a=new F.w(l,H.b([],q)):k).l(0,e)
new F.ei().ea(f,e)}for(a0=a1.gN().b,r=a0.length,n=t.u,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){d=a0[p]
l=b.a
if(l==null)l=b.a=new F.w(b,H.b([],q))
k=d.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.w(j,H.b([],q)):i).T()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.w(b,H.b([],q)):k
k=d.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.w(j,H.b([],q)):i).T()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.a
l=k==null?b.a=new F.w(b,H.b([],q)):k
k=d.c
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.w(j,H.b([],q)):i).T()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
c=l[k]
k=b.d
l=(k==null?b.d=new F.cY(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.w(l,H.b([],q)):k).l(0,f)
k=l.a;(k==null?l.a=new F.w(l,H.b([],q)):k).l(0,e)
k=l.a;(k==null?l.a=new F.w(l,H.b([],q)):k).l(0,c)
new F.aq().aH(f,e,c)}a0=b.e
if(a0!=null)a0.ak(0)},
aj:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gN().aj()||!1
if(!r.gY().aj())s=!1
q=r.e
if(q!=null)q.ak(0)
return s},
ho:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.gY().c
s=H.b(m.slice(0),H.kN(m))
for(m=t.k;s.length!==0;){r=C.b.ghf(s)
C.b.co(s,0)
q=H.b([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(a.b7(0,r,o)){q.push(o)
C.b.co(s,p)}}if(q.length>1)b.b8(q)}n.gY().T()
n.ga2(n).cp()
n.gN().cp()
n.gbc(n).hE()
n.ga2(n).cq(new F.iO())
n.gN().cq(new F.iA())
m=n.e
if(m!=null)m.ak(0)},
bW:function(){this.ho(new F.j6(),new F.il())},
h_:function(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=34962,b={},a=e.gY().c.length,a0=a3.a,a1=(a0&$.bi().a)!==0?1:0
if((a0&$.bh().a)!==0)++a1
if((a0&$.bg().a)!==0)++a1
if((a0&$.bC().a)!==0)++a1
if((a0&$.bD().a)!==0)++a1
if((a0&$.dQ().a)!==0)++a1
if((a0&$.dR().a)!==0)++a1
if((a0&$.ce().a)!==0)++a1
if((a0&$.bf().a)!==0)++a1
s=a3.gcA(a3)
r=P.cC(a*s,0,!1,t.x)
b.a=0
q=P.n8(a1,new F.iw(b,e,a3,s*4,a,s,r),t.eT)
a0=a2.a
p=a0.createBuffer()
p.toString
a0.bindBuffer(c,p)
a0.bufferData(c,new Float32Array(H.c8(r)),35044)
a0.bindBuffer(c,d)
o=new Z.ci(new Z.ff(c,p),H.b([],t.fv),q,a3)
if(e.gbc(e).b.length!==0){n=H.b([],t.t)
p=t.q
m=t.k
l=0
while(!0){k=e.b
if(k==null){k=e.b=new F.bt(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
k=k[l].a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.w(j,H.b([],m)):i).T()}k=k.e}n.push(k==null?0:k);++l}h=Z.kA(a0,34963,n)
o.b.push(new Z.bL(0,n.length,h))}if(e.ga2(e).b.length!==0){n=H.b([],t.t)
p=t.L
m=t.k
l=0
while(!0){k=e.c
if(k==null){k=e.c=new F.cZ(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
g=k[l]
k=g.a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.w(j,H.b([],m)):i).T()}k=k.e}n.push(k==null?0:k)
k=g.b
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.w(j,H.b([],m)):i).T()}k=k.e}n.push(k==null?0:k);++l}h=Z.kA(a0,34963,n)
o.b.push(new Z.bL(1,n.length,h))}if(e.gN().b.length!==0){n=H.b([],t.t)
p=t.u
m=t.k
l=0
while(!0){k=e.d
if(k==null){k=e.d=new F.cY(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
f=k[l]
k=f.a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.w(j,H.b([],m)):i).T()}k=k.e}n.push(k==null?0:k)
k=f.b
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.w(j,H.b([],m)):i).T()}k=k.e}n.push(k==null?0:k)
k=f.c
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.w(j,H.b([],m)):i).T()}k=k.e}n.push(k==null?0:k);++l}h=Z.kA(a0,34963,n)
o.b.push(new Z.bL(4,n.length,h))}return o},
i:function(a){var s=this,r="   ",q=H.b([],t.s)
if(s.gY().c.length!==0){q.push("Vertices:")
q.push(s.gY().B(r))}if(s.gbc(s).b.length!==0){q.push("Points:")
q.push(s.gbc(s).B(r))}if(s.ga2(s).b.length!==0){q.push("Lines:")
q.push(s.ga2(s).B(r))}if(s.gN().b.length!==0){q.push("Faces:")
q.push(s.gN().B(r))}return C.b.n(q,"\n")},
a_:function(){var s=this.e
return s==null?null:s.D(null)}}
F.iw.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c.fY(a),e=f.gcA(f),d=g.a,c=d.a
for(s=g.e,r=g.r,q=r.length,p=g.f,o=g.b,n=t.k,m=0;m<s;++m){l=o.a
l=(l==null?o.a=new F.w(o,H.b([],n)):l).c
if(m>=l.length)return H.d(l,m)
k=l[m].hn(f)
j=d.a+m*p
for(l=k.length,i=0;i<l;++i){h=k[i]
if(j>=q)return H.d(r,j)
r[j]=h;++j}}d.a+=e
return new Z.bF(f,e,c*4,g.d)},
$S:43}
F.cY.prototype={
fV:function(a){var s,r,q,p,o,n,m,l,k=H.b([],t.u),j=a.length
if(j>0){s=a[0]
for(r=this.a,q=t.k,p=2;p<j;++p){o=p-1
n=a.length
if(o>=n)return H.d(a,o)
o=a[o]
if(p>=n)return H.d(a,p)
n=a[p]
m=r.a;(m==null?r.a=new F.w(r,H.b([],q)):m).l(0,s)
m=r.a;(m==null?r.a=new F.w(r,H.b([],q)):m).l(0,o)
m=r.a;(m==null?r.a=new F.w(r,H.b([],q)):m).l(0,n)
l=new F.aq()
l.aH(s,o,n)
k.push(l)}}return k},
fW:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=H.b([],t.u)
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
if(m){(k==null?s.a=new F.w(s,H.b([],r)):k).l(0,j)
k=s.a;(k==null?s.a=new F.w(s,H.b([],r)):k).l(0,i)
k=s.a;(k==null?s.a=new F.w(s,H.b([],r)):k).l(0,g)
e=new F.aq()
e.aH(j,i,g)
d.push(e)
k=s.a;(k==null?s.a=new F.w(s,H.b([],r)):k).l(0,j)
k=s.a;(k==null?s.a=new F.w(s,H.b([],r)):k).l(0,g)
k=s.a;(k==null?s.a=new F.w(s,H.b([],r)):k).l(0,f)
e=new F.aq()
e.aH(j,g,f)
d.push(e)}else{(k==null?s.a=new F.w(s,H.b([],r)):k).l(0,i)
k=s.a;(k==null?s.a=new F.w(s,H.b([],r)):k).l(0,g)
k=s.a;(k==null?s.a=new F.w(s,H.b([],r)):k).l(0,f)
e=new F.aq()
e.aH(i,g,f)
d.push(e)
k=s.a;(k==null?s.a=new F.w(s,H.b([],r)):k).l(0,i)
k=s.a;(k==null?s.a=new F.w(s,H.b([],r)):k).l(0,f)
k=s.a;(k==null?s.a=new F.w(s,H.b([],r)):k).l(0,j)
e=new F.aq()
e.aH(i,f,j)
d.push(e)}m=!m}o=!o}return d},
gk:function(a){return this.b.length},
cq:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gY().c.length-1,q=t.u,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.w(s,H.b([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.d
if(o==null)o=n.d=new F.c2(H.b([],q),H.b([],q),H.b([],q))
m=o.b.length+o.c.length+o.d.length-1
for(;m>=0;m=k){o=n.d
l=(o==null?n.d=new F.c2(H.b([],q),H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.d
if(a.b7(0,l,(o==null?n.d=new F.c2(H.b([],q),H.b([],q),H.b([],q)):o).h(0,j))){l.b6()
break}}}}},
cp:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(q.gh1(q))q.b6()}},
aj:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].c_())q=!1
return q},
bZ:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].bY())q=!1
return q},
i:function(a){return this.t()},
B:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].B(a))
return C.b.n(p,"\n")},
t:function(){return this.B("")}}
F.cZ.prototype={
gk:function(a){return this.b.length},
cq:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gY().c.length-1,q=t.L,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.w(s,H.b([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.c
if(o==null)o=n.c=new F.c3(H.b([],q),H.b([],q))
m=o.b.length+o.c.length-1
for(;m>=0;m=k){o=n.c
l=(o==null?n.c=new F.c3(H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.c
if(a.b7(0,l,(o==null?n.c=new F.c3(H.b([],q),H.b([],q)):o).h(0,j))){l.b6()
break}}}}},
cp:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(J.J(q.a,q.b))q.b6()}},
i:function(a){return this.t()},
B:function(a){var s,r=H.b([],t.s),q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.d(q,s)
r.push(q[s].B(a+(""+s+". ")))}return C.b.n(r,"\n")},
t:function(){return this.B("")}}
F.bt.prototype={
gk:function(a){return this.b.length},
hE:function(){var s,r,q,p,o,n,m
for(s=this.b,r=s.length-1,q=t.q;r>=0;--r){if(r>=s.length)return H.d(s,r)
p=s[r].a
if(p==null)o=null
else{n=p.b
p=(n==null?p.b=new F.di(H.b([],q)):n).b.length
o=p}if((o==null?0:o)>1){if(r>=s.length)return H.d(s,r)
m=s[r]
p=m.a
if(p!=null){p=p.a
if(p!=null){n=p.b
C.b.K((n==null?p.b=new F.bt(p,H.b([],q)):n).b,m)}p=m.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.D(null)}}}p=m.a
if(p!=null){n=p.b
C.b.K((n==null?p.b=new F.di(H.b([],q)):n).b,m)}m.a=null}}},
i:function(a){return this.t()},
B:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].B(a))
return C.b.n(p,"\n")},
t:function(){return this.B("")}}
F.c1.prototype={
c2:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.fd(s.cx,p,m,r,q,o,n,a,l)},
h4:function(){return this.c2(null)},
ga2:function(a){var s=this.c
if(s==null){s=t.L
s=this.c=new F.c3(H.b([],s),H.b([],s))}return s},
gN:function(){var s=this.d
if(s==null){s=t.u
s=this.d=new F.c2(H.b([],s),H.b([],s),H.b([],s))}return s},
gq:function(a){var s=this.a
if(s!=null)s.gY().T()
return this.e},
sU:function(a,b){var s
if(!J.J(this.f,b)){this.f=b
s=this.a
if(s!=null)s.a_()}},
scs:function(a){var s
if(!J.J(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a_()}},
sbX:function(a){var s
if(!J.J(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.a_()}},
hn:function(a){var s,r,q,p,o=this,n=null
if(a.m(0,$.bi())){s=o.f
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.m(0,$.bh())){s=o.r
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,1,0],t.n):s}else if(a.m(0,$.bg())){s=o.x
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,1],t.n):s}else if(a.m(0,$.bC())){s=o.y
s=s==null?n:H.b([s.a,s.b],t.n)
return s==null?H.b([0,0],t.n):s}else if(a.m(0,$.bD())){s=o.z
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.m(0,$.dQ())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return H.b([q,p,s==null?1:s],t.n)}else if(a.m(0,$.dR())){s=o.Q
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([1,1,1,1],t.n):s}else if(a.m(0,$.ce()))return H.b([o.ch],t.n)
else if(a.m(0,$.bf())){s=o.cx
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([-1,-1,-1,-1],t.n):s}else return H.b([],t.n)},
c_:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dh()
p.gN().A(0,new F.ja(o))
p.r=o.a.E()
if(r){s.a_()
o=s.e
if(o!=null)o.ak(0)}return!0},
bY:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dh()
p.gN().A(0,new F.j9(o))
p.x=o.a.E()
if(r){s.a_()
o=s.e
if(o!=null)o.ak(0)}return!0},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.t()},
B:function(a){var s,r,q=this,p=null,o="-",n=H.b([],t.s)
n.push(C.a.af(C.c.i(q.e),0))
s=q.f
s=s==null?p:s.t()
n.push(s==null?o:s)
s=q.r
s=s==null?p:s.t()
n.push(s==null?o:s)
s=q.x
s=s==null?p:s.t()
n.push(s==null?o:s)
s=q.y
s=s==null?p:s.t()
n.push(s==null?o:s)
s=q.z
s=s==null?p:s.t()
n.push(s==null?o:s)
s=q.Q
s=s==null?p:s.t()
n.push(s==null?o:s)
n.push(V.y(q.ch,3,0))
s=q.cx
s=s==null?p:s.t()
n.push(s==null?o:s)
r=C.b.n(n,", ")
return a+"{"+r+"}"},
t:function(){return this.B("")}}
F.ja.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.S(0,r)}},
$S:8}
F.j9.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.S(0,r)}},
$S:8}
F.w.prototype={
T:function(){var s,r,q
if(this.b){s=this.c
r=s.length
for(q=0;q<r;++q)s[q].e=q
this.b=!1}},
l:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.f("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a_()
return!0},
fX:function(a,b,c,d,e,f){var s=F.fd(a,null,b,c,d,e,f,null,0)
this.l(0,s)
return s},
gk:function(a){return this.c.length},
aj:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].c_()
return!0},
bZ:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].bY()
return!0},
h0:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.E()
if(!J.J(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.D(null)}}}}}return!0},
i:function(a){return this.t()},
B:function(a){var s,r,q,p
this.T()
s=H.b([],t.s)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p)s.push(r[p].B(a))
return C.b.n(s,"\n")},
t:function(){return this.B("")}}
F.c2.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
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
A:function(a,b){var s=this
C.b.A(s.b,b)
C.b.A(s.c,new F.j4(s,b))
C.b.A(s.d,new F.j5(s,b))},
i:function(a){return this.t()},
t:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].B(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].B(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].B(""))
return C.b.n(p,"\n")}}
F.j4.prototype={
$1:function(a){if(!J.J(a.a,this.a))this.b.$1(a)},
$S:8}
F.j5.prototype={
$1:function(a){var s=this.a
if(!J.J(a.a,s)&&!J.J(a.b,s))this.b.$1(a)},
$S:8}
F.c3.prototype={
gk:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.d(r,s)
return r[s]}else{if(b<0)return H.d(r,b)
return r[b]}},
i:function(a){return this.t()},
t:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].B(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].B(""))
return C.b.n(p,"\n")}}
F.j7.prototype={}
F.j6.prototype={
b7:function(a,b,c){return J.J(b.f,c.f)}}
F.j8.prototype={}
F.il.prototype={
b8:function(a){var s,r,q,p,o,n=V.dh()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)n=new V.B(n.a+q.a,n.b+q.b,n.c+q.c)}n=n.E()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){p=a[r]
q=n.E()
if(!J.J(p.r,q)){p.r=q
o=p.a
if(o!=null){o=o.e
if(o!=null)o.D(null)}}}return null}}
F.di.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.t()},
t:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].B(""))
return C.b.n(p,"\n")}}
O.cG.prototype={
gu:function(){var s=this.fr
return s==null?this.fr=D.K():s},
aa:function(a){var s=this.fr
return s==null?null:s.D(a)},
eR:function(){return this.aa(null)},
cW:function(a){this.a=null
this.aa(a)},
fD:function(){return this.cW(null)},
eM:function(a,b){return this.aa(new D.b0())},
eO:function(a,b){return this.aa(new D.b1())},
gdI:function(){var s=this,r=s.dx
if(r==null){r=new D.cz(H.b([],t.i),H.b([],t.U),H.b([],t.o),H.b([],t.D),H.b([],t.e))
r.cw(r.geJ(),r.gfj(),r.gfn())
r.gu().l(0,s.gcV())
r.gdH().l(0,s.gcR())
s.dx=r}return r},
gd8:function(){var s=this.r
return s==null?this.r=O.en(this,"ambient"):s},
gdg:function(){var s=this.x
return s==null?this.x=O.en(this,"diffuse"):s},
gbu:function(){var s=this.z
return s==null?this.z=new O.i6(new V.X(0,0,0),this,"specular",new A.aA(!1,!1,!1)):s},
cJ:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.y,a1=new H.V(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=H.b([],t.i)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gaq()
o=a1.h(0,q.gaq())
a1.j(0,p,o==null?1:o)}n=H.b([],t.cn)
a1.A(0,new O.i7(b,n))
C.b.b0(n,new O.i8())
m=new H.V(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=H.b([],t.U)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){p=m.h(0,0)
m.j(0,0,p==null?1:p)}l=H.b([],t.fD)
m.A(0,new O.i9(b,l))
C.b.b0(l,new O.ia())
k=new H.V(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=H.b([],t.o)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gaq()
o=k.h(0,q.gaq())
k.j(0,p,o==null?1:o)}j=H.b([],t.eg)
k.A(0,new O.ib(b,j))
C.b.b0(j,new O.ic())
i=new H.V(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=H.b([],t.D)
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.q)(a0),++r){q=a0[r]
s=q.gaq()
p=i.h(0,q.gaq())
i.j(0,s,p==null?1:p)}h=H.b([],t.c3)
i.A(0,new O.id(b,h))
C.b.b0(h,new O.ie())
a0=C.c.a0(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.i4(new V.aF(0,0,0,0))
a2=b.f
a2=(a2==null?b.f=O.en(b,"emission"):a2).c
s=b.gd8().c
p=b.gdg().c
o=b.y
o=(o==null?b.y=O.en(b,"invDiffuse"):o).c
g=b.gbu().c
f=b.Q
f=(f==null?b.Q=new O.i2(b,"bump",new A.aA(!1,!1,!1)):f).c
e=b.cx
e=(e==null?b.cx=O.en(b,"reflect"):e).c
d=b.cy
d=(d==null?b.cy=new O.i5(new V.X(0,0,0),b,"refract",new A.aA(!1,!1,!1)):d).c
c=b.db
return A.na(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.i1(b,"alpha",new A.aA(!1,!1,!1)):c).c,n,l,j,h)},
eo:function(a,b){},
as:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.aC(m==null?H.b([],t.e):m)
s=H.S(m).c
for(;m.v();){r=s.a(m.d)
q=$.j3
if(q==null)q=$.j3=new V.B(0,0,1)
r.c=q
p=$.j2
r.d=p==null?$.j2=new V.B(0,1,0):p
p=$.j1
r.e=p==null?$.j1=new V.B(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.br(q).E()
r.d=n.br(r.d).E()
r.e=n.br(r.e).E()}}},
hG:function(b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null,b0=a8.a
if(b0==null){s=a8.cJ()
r=s.bl
q=b1.fr
b0=q.h(0,r)
if(b0==null){p=b1.a
o=t.S
n=t.W
b0=new A.el(s,H.b([],t.p),P.U(o,n),P.U(o,t.O),P.U(o,n),P.U(o,t.Q),P.U(o,n),P.U(o,t.b),P.U(o,n),P.U(o,t.R),p,r)
b0.eb(s,p)
if(r.length===0)H.h(P.f("May not cache a shader with no name."))
if(q.c0(0,r))H.h(P.f('Shader cache already contains a shader by the name "'+r+'".'))
q.j(0,r,b0)}b0=a8.a=b0
b2.e=null}m=b0.x
l=m.dj
s=b2.e
if(!(s instanceof Z.ci))s=b2.e=null
if(s==null||!s.d.m(0,l)){s=m.k4
if(s){r=b2.d
if(r!=null)r.aj()}r=m.r1
if(r){q=b2.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gN().bZ()
q.gY().bZ()
q=q.e
if(q!=null)q.ak(0)}}q=m.rx
if(q){p=b2.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.gY().h0()
p=p.e
if(p!=null)p.ak(0)}}p=b2.d
k=p==null?a9:p.h_(new Z.jb(b1.a),l)
if(k==null)return
p=k.aT($.bi())
if(p!=null){o=b0.y
o=o==null?a9:o.c
p.e=o==null?0:o}if(s){s=k.aT($.bh())
if(s!=null){p=b0.Q
p=p==null?a9:p.c
s.e=p==null?1:p}}if(r){s=k.aT($.bg())
if(s!=null){r=b0.z
r=r==null?a9:r.c
s.e=r==null?2:r}}if(m.r2){s=k.aT($.bC())
if(s!=null){r=b0.ch
r=r==null?a9:r.c
s.e=r==null?3:r}}if(q){s=k.aT($.bD())
if(s!=null){r=b0.cx
r=r==null?a9:r.c
s.e=r==null?4:r}}if(m.ry){s=k.aT($.bf())
if(s!=null){r=b0.cy
r=r==null?a9:r.c
s.e=r==null?5:r}}b2.e=k}j=H.b([],t.ga)
s=b1.a
s.useProgram(b0.e)
b0.gap(b0).hb()
if(m.fr){r=b1.dx
r=r.gZ(r)
q=b0.db
if(q!=null)q.ah(r.a7(0,!0))}if(m.fx){r=b1.cx
if(r==null){r=b1.db
q=b1.dx
q=b1.cx=r.gZ(r).F(0,q.gZ(q))
r=q}q=b0.dx
if(q!=null)q.ah(r.a7(0,!0))}r=b1.ch
if(r==null){r=b1.dx
r=b1.ch=b1.ghD().F(0,r.gZ(r))}q=b0.fr
if(q!=null)q.ah(r.a7(0,!0))
if(m.go){r=b1.db
r=r.gZ(r)
q=b0.dy
if(q!=null)q.ah(r.a7(0,!0))}if(m.x1){r=$.la
if(r==null){r=new V.cI(1,0,0,0,1,0,0,0,1)
$.la=r}q=b0.go
if(q!=null)q.ah(r.a7(0,!0))}if(m.x2){r=V.W()
q=b0.id
if(q!=null)q.ah(r.a7(0,!0))}if(m.y1){r=V.W()
q=b0.k1
if(q!=null)q.ah(r.a7(0,!0))}if(m.aS>0){r=a8.e.a
i=r.length
q=b0.k2
if(q!=null)q.a.uniform1i(q.d,i)
for(h=0;h<i;++h){if(h>=r.length)return H.d(r,h)
q=r[h]
p=b0.k3
if(h>=p.length)return H.d(p,h)
p=p[h]
g=new Float32Array(H.c8(q.a7(0,!0)))
p.a.uniformMatrix4fv(p.d,!1,g)}}if(m.a.a){r=a8.f
r=r==null?a9:r.f
if(r==null)r=new V.X(0,0,0)
q=b0.k4
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(m.k1){if(m.b.a){r=a8.r
r=r==null?a9:r.f
if(r==null)r=new V.X(0,0,0)
q=b0.rx
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(m.c.a){r=a8.x
r=r==null?a9:r.f
if(r==null)r=new V.X(0,0,0)
q=b0.x2
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(m.d.a){r=a8.y
r=r==null?a9:r.f
if(r==null)r=new V.X(0,0,0)
q=b0.aS
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}r=m.e.a
if(!r)q=!1
else q=!0
if(q){q=a8.z
q=q==null?a9:q.ch
if(q==null)q=100
p=b0.dl
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a8.z
r=r==null?a9:r.f
if(r==null)r=new V.X(1,1,1)
q=b0.dk
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}r=m.z
if(r.length>0){f=new H.V(t.y)
q=a8.dx
q=q==null?a9:q.e
if(q==null)q=H.b([],t.i)
p=q.length
o=t.Y
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.gaq()
b=f.h(0,c)
if(b==null)b=0
f.j(0,c,b+1)
n=b0.c5.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=d.ghR()
a0=$.aO
n=n.be(a0==null?$.aO=new V.Q(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.ghW()
a0=$.aO
n=n.be(a0==null?$.aO=new V.Q(0,0,0):a0)
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gaR(d)
a0=a.d
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
if(d.gdi()){n=d.gd9()
a0=a.e
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gda()
a0=a.f
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdc()
a0=a.r
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=f.h(0,p)
if(i==null)i=0
p=b0.c4.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.Q
if(r.length>0){q=b1.db
a1=q.gZ(q)
a2=new H.V(t.y)
q=a8.dx
q=q==null?a9:q.f
if(q==null)q=H.b([],t.U)
p=q.length
o=t.V
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
b=a2.h(0,0)
if(b==null)b=0
a2.j(0,0,b+1)
n=b0.c7.h(0,0)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=a1.br(d.c).E()
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.b
a0=a.f
a0.a.uniform3f(a0.d,n.a,n.b,n.c)}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a2.h(0,p)
if(i==null)i=0
p=b0.c6.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.ch
if(r.length>0){q=b1.db
a1=q.gZ(q)
a3=new H.V(t.y)
q=a8.dx
q=q==null?a9:q.r
if(q==null)q=H.b([],t.o)
p=q.length
o=t.C
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.gaq()
b=a3.h(0,c)
if(b==null)b=0
a3.j(0,c,b+1)
n=b0.c9.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
a4=a1.F(0,d.gZ(d))
n=d.gZ(d)
a0=$.aO
n=n.be(a0==null?$.aO=new V.Q(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=$.aO
n=a4.be(n==null?$.aO=new V.Q(0,0,0):n)
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gaR(d)
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
d.gaE()
n=a4.dE(0)
a0=a.d
if(a0!=null){g=new Float32Array(H.c8(new V.cI(n.a,n.b,n.c,n.e,n.f,n.r,n.y,n.z,n.Q).a7(0,!0)))
a0.a.uniformMatrix3fv(a0.d,!1,g)}d.gaE()
n=d.gaE()
if(!C.b.M(j,n)){n.sq(0,j.length)
j.push(n)}n=d.gaE()
a0=n.gaC(n)
if(a0){a0=a.f
if(a0!=null){a5=n.gaC(n)
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.gq(n))}}d.gb_()
n=d.ge4()
a0=a.x
if(a0!=null)a0.a.uniform4f(a0.d,n.a,n.b,n.c,n.d)
n=d.gb_()
if(!C.b.M(j,n)){n.sq(0,j.length)
j.push(n)}n=d.gb_()
a0=n.gaC(n)
if(a0){a0=a.r
if(a0!=null){a5=n.gaC(n)
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.gq(n))}}if(d.gdi()){n=d.gd9()
a0=a.y
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gda()
a0=a.z
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdc()
a0=a.Q
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a3.h(0,p)
if(i==null)i=0
p=b0.c8.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.cx
if(r.length>0){q=b1.db
a1=q.gZ(q)
a7=new H.V(t.y)
q=a8.dx
q=q==null?a9:q.x
if(q==null)q=H.b([],t.D)
p=q.length
o=t.J
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.gaq()
b=a7.h(0,c)
if(b==null)b=0
a7.j(0,c,b+1)
n=b0.cb.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=d.ghC(d)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.ghU(d).E()
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=a1.be(d.ghC(d))
a0=a.d
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gaR(d)
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
d.gaE()
n=d.gcu()
a0=a.f
if(a0!=null)a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gcr(d)
a0=a.r
if(a0!=null)a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gi9()
a0=a.x
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gia()
a0=a.y
if(a0!=null)a0.a.uniform1f(a0.d,n)
d.gaE()
n=d.gaE()
if(!C.b.M(j,n)){n.sq(0,j.length)
j.push(n)}n=d.gaE()
a0=n.gaC(n)
if(a0){a0=a.dx
if(a0!=null){a5=n.gaC(n)
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.gq(n))}}d.gb_()
n=d.ge4()
a0=a.z
if(a0!=null)a0.a.uniform4f(a0.d,n.a,n.b,n.c,n.d)
n=d.gb_()
if(!C.b.M(j,n)){n.sq(0,j.length)
j.push(n)}n=d.gb_()
a0=n.gaC(n)
if(a0){a0=a.dy
if(a0!=null){a5=n.gaC(n)
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.gq(n))}}if(d.ghV()){n=d.ghT()
a0=a.Q
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.ghS()
a0=a.ch
if(a0!=null)a0.a.uniform1f(a0.d,n)}if(d.gdi()){n=d.gd9()
a0=a.cx
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gda()
a0=a.cy
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdc()
a0=a.db
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a7.h(0,p)
if(i==null)i=0
p=b0.ca.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}}if(m.dy){r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.gZ(r).dE(0)}q=b0.fy
if(q!=null)q.ah(r.a7(0,!0))}if(m.db){a8.eo(j,a9)
b0.fE(b0.dm,a9)
if(m.r.a){r=a8.cx
r=r==null?a9:r.f
if(r==null)r=new V.X(1,1,1)
q=b0.dn
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}r=m.x.a
if(!r)q=!1
else q=!0
if(q){q=a8.cy
q=q==null?a9:q.ch
if(q==null)q=0
p=b0.dq
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a8.cy
r=r==null?a9:r.f
if(r==null)r=new V.X(1,1,1)
q=b0.dr
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}}r=m.y.a
q=!r
if(q)p=!1
else p=!0
if(p){if(r){r=a8.db
r=r==null?a9:r.f
if(r==null)r=1
p=b0.ds
if(p!=null)p.a.uniform1f(p.d,r)}s.enable(3042)
s.blendFunc(770,771)}for(h=0;h<j.length;++h)j[h].bj(b1)
r=t.ed.a(b2.e)
r.bj(b1)
r.aW(b1)
r.e_(b1)
if(q)r=!1
else r=!0
if(r)s.disable(3042)
for(h=0;h<j.length;++h)j[h].e_(b1)
s.useProgram(a9)
b0.gap(b0).ha()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cJ().bl}}
O.i7.prototype={
$2:function(a,b){return this.b.push(new A.aX(a,C.c.a0(b+3,4)*4))},
$S:7}
O.i8.prototype={
$2:function(a,b){return C.c.ab(a.a,b.a)},
$S:47}
O.i9.prototype={
$2:function(a,b){return this.b.push(new A.b_(a,C.c.a0(b+3,4)*4))},
$S:7}
O.ia.prototype={
$2:function(a,b){return C.c.ab(a.a,b.a)},
$S:48}
O.ib.prototype={
$2:function(a,b){return this.b.push(new A.b5(a,C.c.a0(b+3,4)*4))},
$S:7}
O.ic.prototype={
$2:function(a,b){return C.c.ab(a.a,b.a)},
$S:49}
O.id.prototype={
$2:function(a,b){return this.b.push(new A.b7(a,C.c.a0(b+3,4)*4))},
$S:7}
O.ie.prototype={
$2:function(a,b){return C.c.ab(a.a,b.a)},
$S:50}
O.i1.prototype={
ax:function(){var s,r=this
r.cB()
s=r.f
$.C().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.aa(new D.D(r.b,s,1))}}}
O.em.prototype={
ax:function(){},
cZ:function(a){var s,r,q=this
if(!q.c.m(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.ax()
s=q.a
s.a=null
s.aa(null)}}}
O.i2.prototype={}
O.cH.prototype={
cY:function(a){var s,r=this
if(!r.f.m(0,a)){s=r.f
r.f=a
r.a.aa(new D.D(r.b+".color",s,a))}},
ax:function(){this.cB()
this.cY(new V.X(1,1,1))},
saR:function(a,b){this.cZ(new A.aA(!0,!1,!1))
this.cY(b)}}
O.i4.prototype={}
O.i5.prototype={
ax:function(){var s,r=this
r.cC()
s=r.ch
$.C().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.aa(new D.D(r.b+".refraction",s,1))}}}
O.i6.prototype={
d_:function(a){var s=this,r=s.ch
$.C().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.aa(new D.D(s.b+".shininess",r,a))}},
ax:function(){this.cC()
this.d_(100)}}
O.d1.prototype={}
X.hQ.prototype={
gu:function(){var s=this.x
return s==null?this.x=D.K():s}}
X.eA.prototype={
gu:function(){var s=this.f
return s==null?this.f=D.K():s},
aK:function(a){var s=this.f
return s==null?null:s.D(a)},
ek:function(){return this.aK(null)},
sb9:function(a){var s,r,q=this
if(!J.J(q.b,a)){s=q.b
if(s!=null)s.gu().K(0,q.gcG())
r=q.b
q.b=a
if(a!=null)a.gu().l(0,q.gcG())
q.aK(new D.D("mover",r,q.b))}}}
X.iE.prototype={}
V.kb.prototype={
$1:function(a){var s=C.d.ct(this.a.ghj(),2)
if(s!=="0.00")P.kX(s+" fps")},
$S:51}
V.ip.prototype={
d6:function(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=l.a,j=P.lw().gcn().h(0,k)
if(j==null)if(d){c.$0()
l.d4(b)
s=!0}else s=!1
else if(j===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
p=l.c
o=J.bA(p)
o.gbk(p).l(0,q)
n=W.n_("radio")
n.checked=s
n.name=k
W.a6(n,"change",new V.iq(l,n,c,b),!1)
q.children.toString
q.appendChild(n).toString
m=r.createElement("span")
m.textContent=b
q.appendChild(m).toString
p=o.gbk(p)
r=r.createElement("br")
r.toString
p.l(0,r)},
aP:function(a,b,c){return this.d6(a,b,c,!1)},
d4:function(a){var s,r,q=P.lw(),p=t.N,o=P.n7(q.gcn(),p,p)
o.j(0,this.a,a)
s=q.dV(0,o)
p=window.history
p.toString
r=s.gbU()
p.replaceState(new P.jo([],[]).bs(""),"",r)}}
V.iq.prototype={
$1:function(a){var s=this,r=s.b.checked
if(r===!0){s.c.$0()
s.a.d4(s.d)}},
$S:3}
V.ix.prototype={
d7:function(a){var s,r,q,p,o,n,m=this.fH(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.T(C.b.hm(a)),s=new P.c6(m.dZ(new H.bO(s,s.gk(s))).a());s.v();){r=s.gJ(s)
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
if(H.mi(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.kM(C.Q,r,C.e,!1)
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
fT:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
fH:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other",f=this.b
if(f!=null)return f
s=t.N
f=new L.iJ(P.U(s,t.dl),P.U(s,t.f7),P.l9(s))
f.d=f.L(0,o)
s=f.L(0,o).n(0,n)
r=t.t
q=new K.a_(H.b([],r))
q.V(new H.T("*"))
s.a.push(q)
s.c=!0
s=f.L(0,n).n(0,n)
q=t.B
p=H.b([],q)
s.a.push(new K.aM(p))
s=new K.a_(H.b([],r))
s.V(new H.T("*"))
p.push(s)
s=f.L(0,n).n(0,"BoldEnd")
p=new K.a_(H.b([],r))
p.V(new H.T("*"))
s.a.push(p)
s.c=!0
s=f.L(0,o).n(0,m)
p=new K.a_(H.b([],r))
p.V(new H.T("_"))
s.a.push(p)
s.c=!0
s=f.L(0,m).n(0,m)
p=H.b([],q)
s.a.push(new K.aM(p))
s=new K.a_(H.b([],r))
s.V(new H.T("_"))
p.push(s)
s=f.L(0,m).n(0,l)
p=new K.a_(H.b([],r))
p.V(new H.T("_"))
s.a.push(p)
s.c=!0
s=f.L(0,o).n(0,k)
p=new K.a_(H.b([],r))
p.V(new H.T("`"))
s.a.push(p)
s.c=!0
s=f.L(0,k).n(0,k)
p=H.b([],q)
s.a.push(new K.aM(p))
s=new K.a_(H.b([],r))
s.V(new H.T("`"))
p.push(s)
s=f.L(0,k).n(0,"CodeEnd")
p=new K.a_(H.b([],r))
p.V(new H.T("`"))
s.a.push(p)
s.c=!0
s=f.L(0,o).n(0,j)
p=new K.a_(H.b([],r))
p.V(new H.T("["))
s.a.push(p)
s.c=!0
s=f.L(0,j).n(0,i)
p=new K.a_(H.b([],r))
p.V(new H.T("|"))
s.a.push(p)
p=f.L(0,j).n(0,h)
s=new K.a_(H.b([],r))
s.V(new H.T("]"))
p.a.push(s)
p.c=!0
p=f.L(0,j).n(0,j)
s=H.b([],q)
p.a.push(new K.aM(s))
p=new K.a_(H.b([],r))
p.V(new H.T("|]"))
s.push(p)
p=f.L(0,i).n(0,h)
s=new K.a_(H.b([],r))
s.V(new H.T("]"))
p.a.push(s)
p.c=!0
p=f.L(0,i).n(0,i)
s=H.b([],q)
p.a.push(new K.aM(s))
p=new K.a_(H.b([],r))
p.V(new H.T("|]"))
s.push(p)
f.L(0,o).n(0,g).a.push(new K.dU())
p=f.L(0,g).n(0,g)
q=H.b([],q)
p.a.push(new K.aM(q))
r=new K.a_(H.b([],r))
r.V(new H.T("*_`["))
q.push(r)
r=f.L(0,"BoldEnd")
r.d=r.a.bd(n)
r=f.L(0,l)
r.d=r.a.bd(m)
r=f.L(0,"CodeEnd")
r.d=r.a.bd(k)
r=f.L(0,h)
r.d=r.a.bd("Link")
r=f.L(0,g)
r.d=r.a.bd(g)
return this.b=f}}
V.iz.prototype={
$1:function(a){P.ls(C.m,new V.iy(this.a))},
$S:3}
V.iy.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.al(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.x(-0.01*s)+"px"
q.top=r},
$S:1}
K.k1.prototype={
$1:function(a){var s=t.gC.a(a).c,r=this.a.am(0,s,null),q=this.b.am(0,s,null),p=this.c.e
p.j(0,0,r)
p.j(0,1,q)
p.j(0,2,r)
p.j(0,3,q)
p.j(0,4,r)
p.j(0,5,q)
p.j(0,6,r)
p.j(0,7,q)},
$S:2}
K.k9.prototype={
$1:function(a){a.aj()
this.a.scz(0,a)},
$S:52}
K.k2.prototype={
$0:function(){this.a.$1(F.m5(30,null,30))},
$S:1}
K.k3.prototype={
$0:function(){this.a.$1(F.m6(!0,100,20,1))},
$S:1}
K.k4.prototype={
$0:function(){this.a.$1(F.m6(!1,30,12,0))},
$S:1}
K.k5.prototype={
$0:function(){this.a.$1(F.pt(20,20))},
$S:1}
K.k6.prototype={
$0:function(){this.a.$1(F.py(1.5,0.25))},
$S:1}
K.k7.prototype={
$0:function(){this.a.$1(F.pn(0.1))},
$S:1}
K.k8.prototype={
$0:function(){this.a.$1(F.ph())},
$S:1};(function aliases(){var s=J.a.prototype
s.e7=s.i
s=J.b2.prototype
s.e8=s.i
s=K.ct.prototype
s.e6=s.aV
s.bv=s.i
s=O.em.prototype
s.cB=s.ax
s=O.cH.prototype
s.cC=s.ax})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"ot","n3",53)
r(P,"p7","nG",14)
r(P,"p8","nH",14)
r(P,"p9","nI",14)
q(P,"m3","p2",1)
r(W,"qG","hF",36)
var k
p(k=E.bm.prototype,"gdO",0,0,null,["$1","$0"],["dP","hw"],0,0)
p(k,"gdM",0,0,null,["$1","$0"],["dN","hv"],0,0)
p(k,"gdK",0,0,null,["$1","$0"],["dL","hs"],0,0)
o(k,"ghq","hr",9)
o(k,"ght","hu",9)
p(k=E.eW.prototype,"gcD",0,0,null,["$1","$0"],["cF","cE"],0,0)
n(k,"ghI","dW",1)
m(k=X.fc.prototype,"gf1","f2",3)
m(k,"geP","eQ",3)
m(k,"geW","eX",4)
m(k,"gf5","f6",23)
m(k,"gf3","f4",23)
m(k,"gf9","fa",4)
m(k,"gfd","fe",4)
m(k,"gf_","f0",4)
m(k,"gfb","fc",4)
m(k,"geY","eZ",4)
m(k,"gff","fg",32)
m(k,"gfh","fi",3)
m(k,"gfu","fv",12)
m(k,"gfp","fq",12)
m(k,"gfs","ft",12)
p(D.bI.prototype,"ged",0,0,null,["$1","$0"],["at","ee"],0,0)
p(k=D.cz.prototype,"gcS",0,0,null,["$1","$0"],["cT","f7"],0,0)
m(k,"gfj","fk",34)
o(k,"geJ","eK",22)
o(k,"gfn","fo",22)
l(V.a5.prototype,"gk","ce",17)
l(V.B.prototype,"gk","ce",17)
p(k=U.bK.prototype,"gaJ",0,0,null,["$1","$0"],["G","a6"],0,0)
o(k,"gef","eg",21)
o(k,"gfl","fm",21)
p(k=U.de.prototype,"gaJ",0,0,null,["$1","$0"],["G","a6"],0,0)
m(k,"gbF","bG",11)
m(k,"gbH","bI",11)
m(k,"gbJ","bK",11)
p(k=U.df.prototype,"gaJ",0,0,null,["$1","$0"],["G","a6"],0,0)
m(k,"gbF","bG",2)
m(k,"gbH","bI",2)
m(k,"gbJ","bK",2)
m(k,"geD","eE",2)
m(k,"geF","eG",2)
m(k,"gfO","fP",2)
m(k,"gfM","fN",2)
m(k,"gfK","fL",2)
m(U.dg.prototype,"geH","eI",2)
p(k=M.e6.prototype,"gao",0,0,null,["$1","$0"],["au","eh"],0,0)
o(k,"geS","eT",9)
o(k,"geU","eV",9)
p(k=O.cG.prototype,"gcR",0,0,null,["$1","$0"],["aa","eR"],0,0)
p(k,"gcV",0,0,null,["$1","$0"],["cW","fD"],0,0)
o(k,"geL","eM",20)
o(k,"geN","eO",20)
p(X.eA.prototype,"gcG",0,0,null,["$1","$0"],["aK","ek"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.P,null)
q(P.P,[H.kq,J.a,J.aj,P.I,P.dp,P.k,H.bO,P.eb,H.cr,H.f9,H.cl,H.iM,H.im,H.fV,H.bG,P.O,H.hW,H.ej,H.ee,H.av,H.fx,P.dB,P.c5,P.c6,P.fh,P.bV,P.eR,P.jx,P.dH,P.jj,P.dn,P.j,P.h7,P.cF,P.cV,P.e0,P.jw,P.jv,P.Y,P.bl,P.ez,P.d_,P.fu,P.hP,P.af,P.a2,P.bx,P.iR,P.fP,W.hx,W.kl,W.kB,W.L,W.cs,P.jn,P.fN,K.dU,K.ct,K.a_,L.eO,L.eX,L.eY,L.iJ,O.ac,O.cJ,E.hr,E.bm,E.bE,E.bT,E.fs,E.ir,D.N,E.eW,Z.ff,Z.jb,Z.ci,Z.bL,Z.bw,D.ht,D.aH,X.cj,X.eg,X.hU,X.i_,X.a8,X.ik,X.iK,X.fc,D.bI,V.X,V.aF,V.hI,V.cI,V.b3,V.a1,V.Q,V.b4,V.eG,V.a5,V.B,U.de,U.df,U.dg,M.e6,A.dY,A.hm,A.aA,A.aX,A.b_,A.b5,A.b7,A.i3,A.d7,A.d8,A.da,A.dd,A.a3,A.iP,F.aq,F.hM,F.ei,F.hV,F.eD,F.cX,F.cY,F.cZ,F.bt,F.c1,F.w,F.c2,F.c3,F.j7,F.j8,F.di,O.d1,O.em,O.i4,X.iE,X.eA,V.ip,V.ix])
q(J.a,[J.ec,J.cx,J.b2,J.u,J.bN,J.bo,H.cK,H.a0,W.e,W.hk,W.bj,W.aG,W.F,W.fm,W.ap,W.hA,W.hB,W.fo,W.cp,W.fq,W.hC,W.l,W.fv,W.ar,W.hR,W.fz,W.cu,W.hZ,W.ih,W.fD,W.fE,W.at,W.fF,W.fH,W.au,W.fL,W.fO,W.aw,W.fQ,W.ax,W.fW,W.ah,W.h_,W.iH,W.an,W.h1,W.iL,W.iW,W.h8,W.ha,W.hc,W.he,W.hg,P.aJ,P.fB,P.aN,P.fJ,P.io,P.fX,P.aQ,P.h3,P.hn,P.fi,P.cS,P.fT])
q(J.b2,[J.eB,J.bZ,J.aI])
r(J.hS,J.u)
q(J.bN,[J.cw,J.ed])
q(P.I,[H.cy,P.f0,H.ef,H.f8,H.eI,H.ft,P.dX,P.ew,P.aD,P.fa,P.f7,P.eP,P.e1,P.e3])
r(P.cB,P.dp)
q(P.cB,[H.c_,W.fk,W.fj,P.e8])
r(H.T,H.c_)
q(P.k,[H.m,H.aK,H.dj,P.cv])
r(H.cq,H.aK)
q(P.eb,[H.ek,H.fg])
r(H.cm,H.cl)
r(H.cO,P.f0)
q(H.bG,[H.iF,H.hT,H.jW,H.jX,H.jY,P.jd,P.jc,P.je,P.jf,P.js,P.jr,P.jJ,P.jl,P.jm,P.hX,P.i0,P.j_,P.iZ,P.hD,P.hE,P.iV,P.iS,P.iT,P.iU,P.ju,P.jt,P.jC,P.jD,P.jE,W.ii,W.ij,W.iv,W.iC,W.jg,P.jp,P.jq,P.jA,P.jK,P.hN,P.hO,P.ho,E.is,E.it,E.iu,E.iG,D.hK,D.hL,F.jy,F.jL,F.jN,F.jO,F.jP,F.kd,F.kc,F.kf,F.k0,F.jM,F.jU,F.jT,F.iw,F.ja,F.j9,F.j4,F.j5,O.i7,O.i8,O.i9,O.ia,O.ib,O.ic,O.id,O.ie,V.kb,V.iq,V.iz,V.iy,K.k1,K.k9,K.k2,K.k3,K.k4,K.k5,K.k6,K.k7,K.k8])
q(H.iF,[H.iB,H.cg])
r(P.cE,P.O)
r(H.V,P.cE)
r(H.cA,H.m)
r(H.bS,H.a0)
q(H.bS,[H.dr,H.dt])
r(H.ds,H.dr)
r(H.br,H.ds)
r(H.du,H.dt)
r(H.cL,H.du)
q(H.cL,[H.er,H.es,H.et,H.eu,H.ev,H.cM,H.bs])
r(H.dC,H.ft)
r(P.dy,P.cv)
r(P.jk,P.jx)
r(P.dv,P.dH)
r(P.dm,P.dv)
r(P.dF,P.cF)
r(P.c0,P.dF)
q(P.e0,[P.hp,P.hG])
r(P.e2,P.eR)
q(P.e2,[P.hq,P.j0,P.iY])
r(P.iX,P.hG)
q(P.aD,[P.cR,P.ea])
r(P.fn,P.bx)
q(W.e,[W.t,W.e7,W.bP,W.al,W.dw,W.am,W.ad,W.dz,W.fe,W.c4,P.e_,P.aY])
q(W.t,[W.G,W.az])
q(W.G,[W.o,P.n])
q(W.o,[W.dV,W.dW,W.bk,W.e9,W.bM,W.eJ,W.b8])
r(W.hw,W.aG)
r(W.cn,W.fm)
q(W.ap,[W.hy,W.hz])
r(W.fp,W.fo)
r(W.co,W.fp)
r(W.fr,W.fq)
r(W.e5,W.fr)
r(W.ae,W.bj)
r(W.fw,W.fv)
r(W.bJ,W.fw)
r(W.fA,W.fz)
r(W.bn,W.fA)
r(W.aS,W.l)
q(W.aS,[W.bp,W.ak,W.bu])
r(W.eo,W.fD)
r(W.ep,W.fE)
r(W.fG,W.fF)
r(W.eq,W.fG)
r(W.fI,W.fH)
r(W.cN,W.fI)
r(W.fM,W.fL)
r(W.eC,W.fM)
r(W.eH,W.fO)
r(W.dx,W.dw)
r(W.eL,W.dx)
r(W.fR,W.fQ)
r(W.eM,W.fR)
r(W.eQ,W.fW)
r(W.h0,W.h_)
r(W.eU,W.h0)
r(W.dA,W.dz)
r(W.eV,W.dA)
r(W.h2,W.h1)
r(W.eZ,W.h2)
r(W.b9,W.ak)
r(W.h9,W.h8)
r(W.fl,W.h9)
r(W.dk,W.cp)
r(W.hb,W.ha)
r(W.fy,W.hb)
r(W.hd,W.hc)
r(W.dq,W.hd)
r(W.hf,W.he)
r(W.fS,W.hf)
r(W.hh,W.hg)
r(W.fZ,W.hh)
r(W.dl,P.bV)
r(P.jo,P.jn)
r(P.aa,P.fN)
r(P.fC,P.fB)
r(P.eh,P.fC)
r(P.fK,P.fJ)
r(P.ex,P.fK)
r(P.fY,P.fX)
r(P.eS,P.fY)
r(P.h4,P.h3)
r(P.f_,P.h4)
r(P.dZ,P.fi)
r(P.ey,P.aY)
r(P.fU,P.fT)
r(P.eN,P.fU)
q(K.ct,[K.aM,L.d3])
q(D.N,[E.d0,D.b0,D.b1,D.D,X.eE])
q(E.hr,[Z.bF,A.cW])
q(X.eE,[X.cD,X.bQ,X.bR,X.d2])
q(O.ac,[D.cz,U.bK])
q(D.ht,[U.hu,U.Z])
q(U.Z,[U.ck,U.cT])
r(A.el,A.cW)
q(A.a3,[A.bX,A.f3,A.f4,A.f5,A.f1,A.d4,A.f2,A.d5,A.d6,A.f6,A.d9,A.bY,A.db,A.dc])
r(F.iA,F.hM)
r(F.iO,F.hV)
r(F.j6,F.j7)
r(F.il,F.j8)
r(O.cG,O.d1)
q(O.em,[O.i1,O.i2,O.cH])
q(O.cH,[O.i5,O.i6])
r(X.hQ,X.iE)
s(H.c_,H.f9)
s(H.dr,P.j)
s(H.ds,H.cr)
s(H.dt,P.j)
s(H.du,H.cr)
s(P.dp,P.j)
s(P.dF,P.h7)
s(P.dH,P.cV)
s(W.fm,W.hx)
s(W.fo,P.j)
s(W.fp,W.L)
s(W.fq,P.j)
s(W.fr,W.L)
s(W.fv,P.j)
s(W.fw,W.L)
s(W.fz,P.j)
s(W.fA,W.L)
s(W.fD,P.O)
s(W.fE,P.O)
s(W.fF,P.j)
s(W.fG,W.L)
s(W.fH,P.j)
s(W.fI,W.L)
s(W.fL,P.j)
s(W.fM,W.L)
s(W.fO,P.O)
s(W.dw,P.j)
s(W.dx,W.L)
s(W.fQ,P.j)
s(W.fR,W.L)
s(W.fW,P.O)
s(W.h_,P.j)
s(W.h0,W.L)
s(W.dz,P.j)
s(W.dA,W.L)
s(W.h1,P.j)
s(W.h2,W.L)
s(W.h8,P.j)
s(W.h9,W.L)
s(W.ha,P.j)
s(W.hb,W.L)
s(W.hc,P.j)
s(W.hd,W.L)
s(W.he,P.j)
s(W.hf,W.L)
s(W.hg,P.j)
s(W.hh,W.L)
s(P.fB,P.j)
s(P.fC,W.L)
s(P.fJ,P.j)
s(P.fK,W.L)
s(P.fX,P.j)
s(P.fY,W.L)
s(P.h3,P.j)
s(P.h4,W.L)
s(P.fi,P.O)
s(P.fT,P.j)
s(P.fU,W.L)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",E:"double",a4:"num",r:"String",by:"bool",af:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([N?])","~()","~(N)","~(l)","~(ak)","~(c1,E,E)","~(r,@)","~(i,i)","~(aq)","~(i,k<bm>)","E(E,E)","~(N?)","~(bu)","af()","~(~())","~(@,@)","Q(E)","E()","r(i)","E(E)","~(i,k<b3>)","~(i,k<Z?>)","~(i,k<as>)","~(bp)","~(~(N))","~(bW,r,i)","@()","by(t)","~(a4)","~(@)","af(@,@)","~(r,r)","~(b9)","@(@)","by(k<as>)","bW(@,@)","r(e)","~(r,r?)","i(i,i)","~(r[@])","~(r,i)","H<r,r>(H<r,r>,r)","~(P?,P?)","bF(i)","af(~())","af(@)","@(r)","i(aX,aX)","i(b_,b_)","i(b5,b5)","i(b7,b7)","~(iI)","~(cX)","i(@,@)","@(@,r)","G(t)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.o_(v.typeUniverse,JSON.parse('{"eB":"b2","bZ":"b2","aI":"b2","pA":"l","pM":"l","pC":"aY","pB":"e","pU":"e","pX":"e","pz":"n","pO":"n","pD":"o","pR":"o","pP":"t","pL":"t","qn":"ad","pH":"aS","pE":"az","pY":"az","pW":"ak","pQ":"bn","pI":"F","pJ":"ah","pT":"br","pS":"a0","ec":{"by":[]},"b2":{"l8":[]},"u":{"p":["1"],"m":["1"],"k":["1"],"v":["1"]},"hS":{"u":["1"],"p":["1"],"m":["1"],"k":["1"],"v":["1"]},"bN":{"E":[],"a4":[]},"cw":{"E":[],"i":[],"a4":[]},"ed":{"E":[],"a4":[]},"bo":{"r":[],"v":["@"]},"cy":{"I":[]},"T":{"j":["i"],"p":["i"],"m":["i"],"k":["i"],"j.E":"i"},"m":{"k":["1"]},"aK":{"k":["2"]},"cq":{"aK":["1","2"],"m":["2"],"k":["2"]},"dj":{"k":["1"]},"c_":{"j":["1"],"p":["1"],"m":["1"],"k":["1"]},"cl":{"H":["1","2"]},"cm":{"H":["1","2"]},"cO":{"I":[]},"ef":{"I":[]},"f8":{"I":[]},"eI":{"I":[]},"V":{"O":["1","2"],"H":["1","2"],"O.V":"2"},"cA":{"m":["1"],"k":["1"]},"ee":{"lk":[]},"bS":{"z":["1"],"a0":[],"v":["1"]},"br":{"j":["E"],"z":["E"],"p":["E"],"a0":[],"m":["E"],"v":["E"],"k":["E"],"j.E":"E"},"cL":{"j":["i"],"z":["i"],"p":["i"],"a0":[],"m":["i"],"v":["i"],"k":["i"]},"er":{"j":["i"],"z":["i"],"p":["i"],"a0":[],"m":["i"],"v":["i"],"k":["i"],"j.E":"i"},"es":{"j":["i"],"z":["i"],"p":["i"],"a0":[],"m":["i"],"v":["i"],"k":["i"],"j.E":"i"},"et":{"j":["i"],"z":["i"],"p":["i"],"a0":[],"m":["i"],"v":["i"],"k":["i"],"j.E":"i"},"eu":{"j":["i"],"z":["i"],"p":["i"],"a0":[],"m":["i"],"v":["i"],"k":["i"],"j.E":"i"},"ev":{"j":["i"],"z":["i"],"p":["i"],"a0":[],"m":["i"],"v":["i"],"k":["i"],"j.E":"i"},"cM":{"j":["i"],"z":["i"],"p":["i"],"a0":[],"m":["i"],"v":["i"],"k":["i"],"j.E":"i"},"bs":{"j":["i"],"bW":[],"z":["i"],"p":["i"],"a0":[],"m":["i"],"v":["i"],"k":["i"],"j.E":"i"},"ft":{"I":[]},"dC":{"I":[]},"dB":{"iI":[]},"dy":{"k":["1"]},"dm":{"cV":["1"],"m":["1"],"k":["1"]},"cv":{"k":["1"]},"cB":{"j":["1"],"p":["1"],"m":["1"],"k":["1"]},"cE":{"O":["1","2"],"H":["1","2"]},"O":{"H":["1","2"]},"cF":{"H":["1","2"]},"c0":{"H":["1","2"]},"dv":{"cV":["1"],"m":["1"],"k":["1"]},"E":{"a4":[]},"i":{"a4":[]},"p":{"m":["1"],"k":["1"]},"dX":{"I":[]},"f0":{"I":[]},"ew":{"I":[]},"aD":{"I":[]},"cR":{"I":[]},"ea":{"I":[]},"fa":{"I":[]},"f7":{"I":[]},"eP":{"I":[]},"e1":{"I":[]},"ez":{"I":[]},"d_":{"I":[]},"e3":{"I":[]},"bx":{"fb":[]},"fP":{"fb":[]},"fn":{"fb":[]},"G":{"t":[],"e":[]},"ae":{"bj":[]},"bp":{"l":[]},"ak":{"l":[]},"t":{"e":[]},"al":{"e":[]},"am":{"e":[]},"ad":{"e":[]},"bu":{"l":[]},"aS":{"l":[]},"b9":{"ak":[],"l":[]},"o":{"G":[],"t":[],"e":[]},"dV":{"G":[],"t":[],"e":[]},"dW":{"G":[],"t":[],"e":[]},"bk":{"G":[],"t":[],"e":[]},"az":{"t":[],"e":[]},"co":{"j":["aa<a4>"],"p":["aa<a4>"],"z":["aa<a4>"],"m":["aa<a4>"],"k":["aa<a4>"],"v":["aa<a4>"],"j.E":"aa<a4>"},"cp":{"aa":["a4"]},"e5":{"j":["r"],"p":["r"],"z":["r"],"m":["r"],"k":["r"],"v":["r"],"j.E":"r"},"fk":{"j":["G"],"p":["G"],"m":["G"],"k":["G"],"j.E":"G"},"bJ":{"j":["ae"],"p":["ae"],"z":["ae"],"m":["ae"],"k":["ae"],"v":["ae"],"j.E":"ae"},"e7":{"e":[]},"e9":{"G":[],"t":[],"e":[]},"bn":{"j":["t"],"p":["t"],"z":["t"],"m":["t"],"k":["t"],"v":["t"],"j.E":"t"},"bM":{"G":[],"t":[],"e":[]},"bP":{"e":[]},"eo":{"O":["r","@"],"H":["r","@"],"O.V":"@"},"ep":{"O":["r","@"],"H":["r","@"],"O.V":"@"},"eq":{"j":["at"],"p":["at"],"z":["at"],"m":["at"],"k":["at"],"v":["at"],"j.E":"at"},"fj":{"j":["t"],"p":["t"],"m":["t"],"k":["t"],"j.E":"t"},"cN":{"j":["t"],"p":["t"],"z":["t"],"m":["t"],"k":["t"],"v":["t"],"j.E":"t"},"eC":{"j":["au"],"p":["au"],"z":["au"],"m":["au"],"k":["au"],"v":["au"],"j.E":"au"},"eH":{"O":["r","@"],"H":["r","@"],"O.V":"@"},"eJ":{"G":[],"t":[],"e":[]},"eL":{"j":["al"],"p":["al"],"z":["al"],"e":[],"m":["al"],"k":["al"],"v":["al"],"j.E":"al"},"eM":{"j":["aw"],"p":["aw"],"z":["aw"],"m":["aw"],"k":["aw"],"v":["aw"],"j.E":"aw"},"eQ":{"O":["r","r"],"H":["r","r"],"O.V":"r"},"b8":{"G":[],"t":[],"e":[]},"eU":{"j":["ad"],"p":["ad"],"z":["ad"],"m":["ad"],"k":["ad"],"v":["ad"],"j.E":"ad"},"eV":{"j":["am"],"p":["am"],"z":["am"],"e":[],"m":["am"],"k":["am"],"v":["am"],"j.E":"am"},"eZ":{"j":["an"],"p":["an"],"z":["an"],"m":["an"],"k":["an"],"v":["an"],"j.E":"an"},"fe":{"e":[]},"c4":{"e":[]},"fl":{"j":["F"],"p":["F"],"z":["F"],"m":["F"],"k":["F"],"v":["F"],"j.E":"F"},"dk":{"aa":["a4"]},"fy":{"j":["ar?"],"p":["ar?"],"z":["ar?"],"m":["ar?"],"k":["ar?"],"v":["ar?"],"j.E":"ar?"},"dq":{"j":["t"],"p":["t"],"z":["t"],"m":["t"],"k":["t"],"v":["t"],"j.E":"t"},"fS":{"j":["ax"],"p":["ax"],"z":["ax"],"m":["ax"],"k":["ax"],"v":["ax"],"j.E":"ax"},"fZ":{"j":["ah"],"p":["ah"],"z":["ah"],"m":["ah"],"k":["ah"],"v":["ah"],"j.E":"ah"},"dl":{"bV":["1"]},"e8":{"j":["G"],"p":["G"],"m":["G"],"k":["G"],"j.E":"G"},"aa":{"fN":["1"]},"eh":{"j":["aJ"],"p":["aJ"],"m":["aJ"],"k":["aJ"],"j.E":"aJ"},"ex":{"j":["aN"],"p":["aN"],"m":["aN"],"k":["aN"],"j.E":"aN"},"eS":{"j":["r"],"p":["r"],"m":["r"],"k":["r"],"j.E":"r"},"n":{"G":[],"t":[],"e":[]},"f_":{"j":["aQ"],"p":["aQ"],"m":["aQ"],"k":["aQ"],"j.E":"aQ"},"dZ":{"O":["r","@"],"H":["r","@"],"O.V":"@"},"e_":{"e":[]},"aY":{"e":[]},"ey":{"e":[]},"eN":{"j":["H<@,@>"],"p":["H<@,@>"],"m":["H<@,@>"],"k":["H<@,@>"],"j.E":"H<@,@>"},"ct":{"bq":[]},"dU":{"bq":[]},"aM":{"bq":[]},"a_":{"bq":[]},"d3":{"bq":[]},"ac":{"k":["1"],"ac.T":"1"},"d0":{"N":[]},"b0":{"N":[]},"b1":{"N":[]},"D":{"N":[]},"cD":{"N":[]},"bQ":{"N":[]},"bR":{"N":[]},"eE":{"N":[]},"d2":{"N":[]},"mM":{"as":[]},"bI":{"as":[]},"nb":{"as":[]},"nu":{"as":[]},"cz":{"ac":["as"],"k":["as"],"ac.T":"as"},"ck":{"Z":[]},"bK":{"ac":["Z?"],"Z":[],"k":["Z?"],"ac.T":"Z?"},"cT":{"Z":[]},"de":{"Z":[]},"df":{"Z":[]},"dg":{"Z":[]},"bX":{"a3":[]},"bY":{"a3":[]},"el":{"cW":[]},"f3":{"a3":[]},"f4":{"a3":[]},"f5":{"a3":[]},"f1":{"a3":[]},"d4":{"a3":[]},"f2":{"a3":[]},"d5":{"a3":[]},"d6":{"a3":[]},"f6":{"a3":[]},"d9":{"a3":[]},"db":{"a3":[]},"dc":{"a3":[]},"cG":{"d1":[]},"bW":{"p":["i"],"m":["i"],"k":["i"]}}'))
H.nZ(v.typeUniverse,JSON.parse('{"aj":1,"m":1,"bO":1,"ek":2,"fg":1,"cr":1,"f9":1,"c_":1,"cl":2,"ej":1,"bS":1,"bV":1,"c6":1,"eR":2,"dn":1,"cv":1,"cB":1,"cE":2,"h7":2,"cF":2,"dv":1,"dp":1,"dF":2,"dH":1,"e0":2,"e2":2,"eb":1,"dl":1,"L":1,"cs":1,"b0":1,"b1":1,"D":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.kT
return{fK:s("bj"),eT:s("bF"),ed:s("ci"),E:s("bk"),gw:s("m<@>"),h:s("G"),f4:s("bm"),bU:s("I"),aD:s("l"),c8:s("ae"),bX:s("bJ"),b8:s("pN"),gb:s("cu"),gk:s("bM"),eu:s("u<dY>"),i:s("u<mM>"),cn:s("u<aX>"),U:s("u<bI>"),fD:s("u<b_>"),u:s("u<aq>"),fv:s("u<bL>"),e:s("u<as>"),L:s("u<ei>"),B:s("u<bq>"),fA:s("u<b3>"),q:s("u<eD>"),cG:s("u<a1>"),eg:s("u<b5>"),o:s("u<nb>"),D:s("u<nu>"),c3:s("u<b7>"),g9:s("u<bV<P>>"),s:s("u<r>"),ga:s("u<pZ>"),gT:s("u<an>"),ab:s("u<d3>"),gN:s("u<bW>"),dC:s("u<a3>"),Y:s("u<d7>"),V:s("u<d8>"),C:s("u<da>"),J:s("u<dd>"),k:s("u<c1>"),n:s("u<E>"),gn:s("u<@>"),t:s("u<i>"),eJ:s("u<Z?>"),bc:s("u<d1?>"),p:s("u<bY?>"),a:s("u<~(N)>"),aP:s("v<@>"),T:s("cx"),eH:s("l8"),M:s("aI"),aU:s("z<@>"),fX:s("V<i,by>"),y:s("V<i,i>"),O:s("p<d7>"),Q:s("p<d8>"),b:s("p<da>"),R:s("p<dd>"),c:s("p<@>"),bv:s("cD"),f:s("H<@,@>"),gc:s("b3"),bK:s("bP"),Z:s("bQ"),bZ:s("bR"),cH:s("cK"),dD:s("a0"),bm:s("bs"),P:s("af"),K:s("P"),I:s("aa<a4>"),fJ:s("lk"),fg:s("cW"),gC:s("d0"),N:s("r"),bY:s("b8"),aF:s("iI"),bJ:s("eX"),dr:s("d2"),v:s("d4"),w:s("bX"),g:s("d5"),F:s("d6"),d:s("d9"),j:s("bY"),G:s("db"),l:s("dc"),ak:s("bZ"),m:s("c0<r,r>"),r:s("fb"),cJ:s("by"),x:s("E"),z:s("@"),S:s("i"),A:s("0&*"),_:s("P*"),bG:s("l6<af>?"),X:s("P?"),gW:s("cS?"),dl:s("eO?"),f7:s("eY?"),W:s("bX?"),H:s("a4"),h2:s("~(N)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.l=W.bk.prototype
C.L=J.a.prototype
C.b=J.u.prototype
C.c=J.cw.prototype
C.M=J.cx.prototype
C.d=J.bN.prototype
C.a=J.bo.prototype
C.N=J.aI.prototype
C.S=H.bs.prototype
C.w=J.eB.prototype
C.n=J.bZ.prototype
C.x=W.b9.prototype
C.y=W.c4.prototype
C.z=new E.bE("Browser.chrome")
C.o=new E.bE("Browser.firefox")
C.p=new E.bE("Browser.edge")
C.A=new E.bE("Browser.other")
C.Y=new P.hq()
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

C.I=new P.ez()
C.e=new P.iX()
C.J=new P.j0()
C.f=new P.jk()
C.m=new P.bl(0)
C.K=new P.bl(5e6)
C.i=H.b(s([0,0,32776,33792,1,10240,0,0]),t.t)
C.j=H.b(s([0,0,65490,45055,65535,34815,65534,18431]),t.t)
C.k=H.b(s([0,0,26624,1023,65534,2047,65534,2047]),t.t)
C.P=H.b(s([0,0,32722,12287,65534,34815,65534,18431]),t.t)
C.Q=H.b(s([0,0,65498,45055,65535,34815,65534,18431]),t.t)
C.h=H.b(s([0,0,24576,1023,65534,34815,65534,18431]),t.t)
C.t=H.b(s([0,0,32754,11263,65534,34815,65534,18431]),t.t)
C.u=H.b(s([0,0,65490,12287,65535,34815,65534,18431]),t.t)
C.O=H.b(s([]),t.s)
C.R=new H.cm(0,{},C.O,H.kT("cm<r,r>"))
C.T=new E.bT("OperatingSystem.windows")
C.v=new E.bT("OperatingSystem.mac")
C.U=new E.bT("OperatingSystem.linux")
C.V=new E.bT("OperatingSystem.other")
C.W=new P.iY(!1)
C.X=new P.c5(null,2)})();(function staticFields(){$.jh=null
$.aE=0
$.ch=null
$.l1=null
$.ma=null
$.m2=null
$.mg=null
$.jQ=null
$.k_=null
$.kV=null
$.c9=null
$.dK=null
$.dL=null
$.kP=!1
$.aB=C.f
$.ai=H.b([],H.kT("u<P>"))
$.hH=null
$.la=null
$.le=null
$.ag=null
$.aO=null
$.lm=null
$.bv=null
$.lC=null
$.lB=null
$.j1=null
$.j2=null
$.j3=null
$.lA=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"pK","mn",function(){return H.pg("_$dart_dartClosure")})
s($,"q_","mp",function(){return H.aR(H.iN({
toString:function(){return"$receiver$"}}))})
s($,"q0","mq",function(){return H.aR(H.iN({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"q1","mr",function(){return H.aR(H.iN(null))})
s($,"q2","ms",function(){return H.aR(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"q5","mv",function(){return H.aR(H.iN(void 0))})
s($,"q6","mw",function(){return H.aR(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"q4","mu",function(){return H.aR(H.lu(null))})
s($,"q3","mt",function(){return H.aR(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"q8","my",function(){return H.aR(H.lu(void 0))})
s($,"q7","mx",function(){return H.aR(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"qo","kY",function(){return P.nF()})
s($,"q9","mz",function(){return new P.j_().$0()})
s($,"qa","mA",function(){return new P.iZ().$0()})
s($,"qp","mE",function(){return new Int8Array(H.c8(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"qr","mF",function(){return P.nn("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"qE","mG",function(){return P.ol()})
s($,"qh","mD",function(){return Z.ay(0)})
s($,"qb","mB",function(){return Z.ay(511)})
s($,"qj","bi",function(){return Z.ay(1)})
s($,"qi","bh",function(){return Z.ay(2)})
s($,"qd","bg",function(){return Z.ay(4)})
s($,"qk","bC",function(){return Z.ay(8)})
s($,"ql","bD",function(){return Z.ay(16)})
s($,"qe","dQ",function(){return Z.ay(32)})
s($,"qf","dR",function(){return Z.ay(64)})
s($,"qg","mC",function(){return Z.ay(96)})
s($,"qm","ce",function(){return Z.ay(128)})
s($,"qc","bf",function(){return Z.ay(256)})
s($,"pG","mm",function(){return new V.hI()})
r($,"pF","C",function(){return $.mm()})
r($,"pV","mo",function(){var q=V.lf(),p=V.ky(),o=$.lA
return V.lb(q,p,o==null?$.lA=V.nD(0,0,-1):o)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cK,DataView:H.a0,ArrayBufferView:H.a0,Float32Array:H.br,Float64Array:H.br,Int16Array:H.er,Int32Array:H.es,Int8Array:H.et,Uint16Array:H.eu,Uint32Array:H.ev,Uint8ClampedArray:H.cM,CanvasPixelArray:H.cM,Uint8Array:H.bs,HTMLAudioElement:W.o,HTMLBRElement:W.o,HTMLBaseElement:W.o,HTMLBodyElement:W.o,HTMLButtonElement:W.o,HTMLContentElement:W.o,HTMLDListElement:W.o,HTMLDataElement:W.o,HTMLDataListElement:W.o,HTMLDetailsElement:W.o,HTMLDialogElement:W.o,HTMLDivElement:W.o,HTMLEmbedElement:W.o,HTMLFieldSetElement:W.o,HTMLHRElement:W.o,HTMLHeadElement:W.o,HTMLHeadingElement:W.o,HTMLHtmlElement:W.o,HTMLIFrameElement:W.o,HTMLImageElement:W.o,HTMLLIElement:W.o,HTMLLabelElement:W.o,HTMLLegendElement:W.o,HTMLLinkElement:W.o,HTMLMapElement:W.o,HTMLMediaElement:W.o,HTMLMenuElement:W.o,HTMLMetaElement:W.o,HTMLMeterElement:W.o,HTMLModElement:W.o,HTMLOListElement:W.o,HTMLObjectElement:W.o,HTMLOptGroupElement:W.o,HTMLOptionElement:W.o,HTMLOutputElement:W.o,HTMLParagraphElement:W.o,HTMLParamElement:W.o,HTMLPictureElement:W.o,HTMLPreElement:W.o,HTMLProgressElement:W.o,HTMLQuoteElement:W.o,HTMLScriptElement:W.o,HTMLShadowElement:W.o,HTMLSlotElement:W.o,HTMLSourceElement:W.o,HTMLSpanElement:W.o,HTMLStyleElement:W.o,HTMLTableCaptionElement:W.o,HTMLTableColElement:W.o,HTMLTableElement:W.o,HTMLTableRowElement:W.o,HTMLTableSectionElement:W.o,HTMLTemplateElement:W.o,HTMLTextAreaElement:W.o,HTMLTimeElement:W.o,HTMLTitleElement:W.o,HTMLTrackElement:W.o,HTMLUListElement:W.o,HTMLUnknownElement:W.o,HTMLVideoElement:W.o,HTMLDirectoryElement:W.o,HTMLFontElement:W.o,HTMLFrameElement:W.o,HTMLFrameSetElement:W.o,HTMLMarqueeElement:W.o,HTMLElement:W.o,AccessibleNodeList:W.hk,HTMLAnchorElement:W.dV,HTMLAreaElement:W.dW,Blob:W.bj,HTMLCanvasElement:W.bk,CDATASection:W.az,CharacterData:W.az,Comment:W.az,ProcessingInstruction:W.az,Text:W.az,CSSPerspective:W.hw,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.cn,MSStyleCSSProperties:W.cn,CSS2Properties:W.cn,CSSImageValue:W.ap,CSSKeywordValue:W.ap,CSSNumericValue:W.ap,CSSPositionValue:W.ap,CSSResourceValue:W.ap,CSSUnitValue:W.ap,CSSURLImageValue:W.ap,CSSStyleValue:W.ap,CSSMatrixComponent:W.aG,CSSRotation:W.aG,CSSScale:W.aG,CSSSkew:W.aG,CSSTranslation:W.aG,CSSTransformComponent:W.aG,CSSTransformValue:W.hy,CSSUnparsedValue:W.hz,DataTransferItemList:W.hA,DOMException:W.hB,ClientRectList:W.co,DOMRectList:W.co,DOMRectReadOnly:W.cp,DOMStringList:W.e5,DOMTokenList:W.hC,Element:W.G,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,SubmitEvent:W.l,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ae,FileList:W.bJ,FileWriter:W.e7,HTMLFormElement:W.e9,Gamepad:W.ar,History:W.hR,HTMLCollection:W.bn,HTMLFormControlsCollection:W.bn,HTMLOptionsCollection:W.bn,ImageData:W.cu,HTMLInputElement:W.bM,KeyboardEvent:W.bp,Location:W.hZ,MediaList:W.ih,MessagePort:W.bP,MIDIInputMap:W.eo,MIDIOutputMap:W.ep,MimeType:W.at,MimeTypeArray:W.eq,PointerEvent:W.ak,MouseEvent:W.ak,DragEvent:W.ak,Document:W.t,DocumentFragment:W.t,HTMLDocument:W.t,ShadowRoot:W.t,XMLDocument:W.t,Attr:W.t,DocumentType:W.t,Node:W.t,NodeList:W.cN,RadioNodeList:W.cN,Plugin:W.au,PluginArray:W.eC,RTCStatsReport:W.eH,HTMLSelectElement:W.eJ,SourceBuffer:W.al,SourceBufferList:W.eL,SpeechGrammar:W.aw,SpeechGrammarList:W.eM,SpeechRecognitionResult:W.ax,Storage:W.eQ,CSSStyleSheet:W.ah,StyleSheet:W.ah,HTMLTableCellElement:W.b8,HTMLTableDataCellElement:W.b8,HTMLTableHeaderCellElement:W.b8,TextTrack:W.am,TextTrackCue:W.ad,VTTCue:W.ad,TextTrackCueList:W.eU,TextTrackList:W.eV,TimeRanges:W.iH,Touch:W.an,TouchEvent:W.bu,TouchList:W.eZ,TrackDefaultList:W.iL,CompositionEvent:W.aS,FocusEvent:W.aS,TextEvent:W.aS,UIEvent:W.aS,URL:W.iW,VideoTrackList:W.fe,WheelEvent:W.b9,Window:W.c4,DOMWindow:W.c4,CSSRuleList:W.fl,ClientRect:W.dk,DOMRect:W.dk,GamepadList:W.fy,NamedNodeMap:W.dq,MozNamedAttrMap:W.dq,SpeechRecognitionResultList:W.fS,StyleSheetList:W.fZ,SVGLength:P.aJ,SVGLengthList:P.eh,SVGNumber:P.aN,SVGNumberList:P.ex,SVGPointList:P.io,SVGStringList:P.eS,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGScriptElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,SVGTransform:P.aQ,SVGTransformList:P.f_,AudioBuffer:P.hn,AudioParamMap:P.dZ,AudioTrackList:P.e_,AudioContext:P.aY,webkitAudioContext:P.aY,BaseAudioContext:P.aY,OfflineAudioContext:P.ey,WebGL2RenderingContext:P.cS,SQLResultSetRowList:P.eN})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bS.$nativeSuperclassTag="ArrayBufferView"
H.dr.$nativeSuperclassTag="ArrayBufferView"
H.ds.$nativeSuperclassTag="ArrayBufferView"
H.br.$nativeSuperclassTag="ArrayBufferView"
H.dt.$nativeSuperclassTag="ArrayBufferView"
H.du.$nativeSuperclassTag="ArrayBufferView"
H.cL.$nativeSuperclassTag="ArrayBufferView"
W.dw.$nativeSuperclassTag="EventTarget"
W.dx.$nativeSuperclassTag="EventTarget"
W.dz.$nativeSuperclassTag="EventTarget"
W.dA.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=K.pp
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
