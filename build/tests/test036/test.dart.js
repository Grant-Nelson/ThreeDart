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
a[c]=function(){a[c]=function(){H.pd(b)}
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
if(a[b]!==s)H.pe(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.kA(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={kb:function kb(){},
kd:function(a){return new H.cH("Field '"+a+"' has been assigned during initialization.")},
jR:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
iI:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ne:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
oU:function(a,b,c){return a},
mS:function(a,b,c,d){if(t.gw.b(a))return new H.cx(a,b,c.G("@<0>").b4(d).G("cx<1,2>"))
return new H.aN(a,b,c.G("@<0>").b4(d).G("aN<1,2>"))},
kT:function(){return new P.eO("No element")},
nb:function(a,b){H.eJ(a,0,J.aY(a)-1,b)},
eJ:function(a,b,c,d){if(c-b<=32)H.na(a,b,c,d)
else H.n9(a,b,c,d)},
na:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.cj(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.am()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
n9:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.a0(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a0(a4+a5,2),f=g-j,e=g+j,d=J.cj(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.am()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.am()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.am()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.am()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.am()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.am()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.am()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.am()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.am()
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
H.eJ(a3,a4,r-2,a6)
H.eJ(a3,q+2,a5,a6)
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
break}}H.eJ(a3,r,q,a6)}else H.eJ(a3,r,q,a6)},
cH:function cH(a){this.a=a},
O:function O(a){this.a=a},
m:function m(){},
bR:function bR(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aN:function aN(a,b,c){this.a=a
this.b=b
this.$ti=c},
cx:function cx(a,b,c){this.a=a
this.b=b
this.$ti=c},
ei:function ei(a,b){this.a=null
this.b=a
this.c=b},
dj:function dj(a,b,c){this.a=a
this.b=b
this.$ti=c},
fg:function fg(a,b){this.a=a
this.b=b},
cz:function cz(){},
f9:function f9(){},
c5:function c5(){},
mE:function(){throw H.c(P.x("Cannot modify unmodifiable Map"))},
m4:function(a){var s,r=H.m3(a)
if(r!=null)return r
s="minified:"+a
return s},
lY:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
v:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dS(a)
return s},
cY:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
l1:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.d(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.c(P.a9(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.D(q,o)|32)>r)return n}return parseInt(a,b)},
cZ:function(a){return H.mV(a)},
mV:function(a){var s,r,q,p
if(a instanceof P.L)return H.al(H.aW(a),null)
if(J.dN(a)===C.P||t.ak.b(a)){s=C.t(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.al(H.aW(a),null)},
mW:function(){if(!!self.location)return self.location.href
return null},
l0:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
n3:function(a){var s,r,q,p=H.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.r)(a),++r){q=a[r]
if(!H.jI(q))throw H.c(H.dM(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aP(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.dM(q))}return H.l0(p)},
l2:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.jI(q))throw H.c(H.dM(q))
if(q<0)throw H.c(H.dM(q))
if(q>65535)return H.n3(a)}return H.l0(a)},
n4:function(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aR:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.aP(s,10)|55296)>>>0,s&1023|56320)}}throw H.c(P.a9(a,0,1114111,null,null))},
bX:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
n2:function(a){var s=H.bX(a).getFullYear()+0
return s},
n0:function(a){var s=H.bX(a).getMonth()+1
return s},
mX:function(a){var s=H.bX(a).getDate()+0
return s},
mY:function(a){var s=H.bX(a).getHours()+0
return s},
n_:function(a){var s=H.bX(a).getMinutes()+0
return s},
n1:function(a){var s=H.bX(a).getSeconds()+0
return s},
mZ:function(a){var s=H.bX(a).getMilliseconds()+0
return s},
p0:function(a){throw H.c(H.dM(a))},
d:function(a,b){if(a==null)J.aY(a)
throw H.c(H.ch(a,b))},
ch:function(a,b){var s,r="index"
if(!H.jI(b))return new P.aG(!0,b,r,null)
s=J.aY(a)
if(b<0||b>=s)return P.J(b,a,r,null,s)
return P.eB(b,r)},
oX:function(a,b,c){if(a>c)return P.a9(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a9(b,a,c,"end",null)
return new P.aG(!0,b,"end",null)},
dM:function(a){return new P.aG(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.et()
s=new Error()
s.dartException=a
r=H.pf
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
pf:function(){return J.dS(this.dartException)},
h:function(a){throw H.c(a)},
r:function(a){throw H.c(P.b0(a))},
aT:function(a){var s,r,q,p,o,n
a=H.m0(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.iR(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
iS:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
lg:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
kc:function(a,b){var s=b==null,r=s?null:b.method
return new H.ed(a,r,s?null:b.receiver)},
bd:function(a){if(a==null)return new H.iq(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bE(a,a.dartException)
return H.oQ(a)},
bE:function(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
oQ:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aP(r,16)&8191)===10)switch(q){case 438:return H.bE(a,H.kc(H.v(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.v(s)+" (Error "+q+")"
return H.bE(a,new H.cX(p,e))}}if(a instanceof TypeError){o=$.m8()
n=$.m9()
m=$.ma()
l=$.mb()
k=$.me()
j=$.mf()
i=$.md()
$.mc()
h=$.mh()
g=$.mg()
f=o.ak(s)
if(f!=null)return H.bE(a,H.kc(s,f))
else{f=n.ak(s)
if(f!=null){f.method="call"
return H.bE(a,H.kc(s,f))}else{f=m.ak(s)
if(f==null){f=l.ak(s)
if(f==null){f=k.ak(s)
if(f==null){f=j.ak(s)
if(f==null){f=i.ak(s)
if(f==null){f=l.ak(s)
if(f==null){f=h.ak(s)
if(f==null){f=g.ak(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bE(a,new H.cX(s,f==null?e:f.method))}}return H.bE(a,new H.f8(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.d1()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bE(a,new P.aG(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.d1()
return a},
kC:function(a){var s
if(a==null)return new H.fV(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.fV(a)},
oZ:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
p4:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.f("Unsupported number of arguments for wrapped closure"))},
cg:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.p4)
a.$identity=s
return s},
mD:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.iG().constructor.prototype):Object.create(new H.cm(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aH
if(typeof r!=="number")return r.U()
$.aH=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.kO(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.mz(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kO(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
mz:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lW,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.mx:H.mw
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
mA:function(a,b,c,d){var s=H.kM
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
kO:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.mC(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.mA(r,!p,s,b)
if(r===0){p=$.aH
if(typeof p!=="number")return p.U()
$.aH=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.cn
return new Function(p+(o==null?$.cn=H.ht("self"):o)+";return "+n+"."+H.v(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aH
if(typeof p!=="number")return p.U()
$.aH=p+1
m+=p
p="return function("+m+"){return this."
o=$.cn
return new Function(p+(o==null?$.cn=H.ht("self"):o)+"."+H.v(s)+"("+m+");}")()},
mB:function(a,b,c,d){var s=H.kM,r=H.my
switch(b?-1:a){case 0:throw H.c(new H.eF("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
mC:function(a,b){var s,r,q,p,o,n,m,l=$.cn
if(l==null)l=$.cn=H.ht("self")
s=$.kL
if(s==null)s=$.kL=H.ht("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.mB(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.v(r)+"(this."+s+");"
n=$.aH
if(typeof n!=="number")return n.U()
$.aH=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.v(r)+"(this."+s+", "+m+");"
n=$.aH
if(typeof n!=="number")return n.U()
$.aH=n+1
return new Function(o+n+"}")()},
kA:function(a,b,c,d,e,f,g){return H.mD(a,b,c,d,!!e,!!f,g)},
mw:function(a,b){return H.h6(v.typeUniverse,H.aW(a.a),b)},
mx:function(a,b){return H.h6(v.typeUniverse,H.aW(a.c),b)},
kM:function(a){return a.a},
my:function(a){return a.c},
ht:function(a){var s,r,q,p=new H.cm("self","target","receiver","name"),o=J.ka(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.cl("Field name "+a+" not found."))},
pd:function(a){throw H.c(new P.e2(a))},
p_:function(a){return v.getIsolateTag(a)},
pe:function(a){return H.h(new H.cH(a))},
qp:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
p6:function(a){var s,r,q,p,o,n=$.lV.$1(a),m=$.jO[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jW[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.lR.$2(a,n)
if(q!=null){m=$.jO[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jW[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.k0(s)
$.jO[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jW[n]=s
return s}if(p==="-"){o=H.k0(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lZ(a,s)
if(p==="*")throw H.c(P.iV(n))
if(v.leafTags[n]===true){o=H.k0(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lZ(a,s)},
lZ:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.kE(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
k0:function(a){return J.kE(a,!1,null,!!a.$iw)},
p8:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.k0(s)
else return J.kE(s,c,null,null)},
p2:function(){if(!0===$.kD)return
$.kD=!0
H.p3()},
p3:function(){var s,r,q,p,o,n,m,l
$.jO=Object.create(null)
$.jW=Object.create(null)
H.p1()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.m_.$1(o)
if(n!=null){m=H.p8(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
p1:function(){var s,r,q,p,o,n,m=C.G()
m=H.cf(C.H,H.cf(C.I,H.cf(C.u,H.cf(C.u,H.cf(C.J,H.cf(C.K,H.cf(C.L(C.t),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.lV=new H.jS(p)
$.lR=new H.jT(o)
$.m_=new H.jU(n)},
cf:function(a,b){return a(b)||b},
mN:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.a6("Illegal RegExp pattern ("+String(n)+")",a,null))},
m1:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
oY:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
m0:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
m2:function(a,b,c){var s=H.pb(a,b,c)
return s},
pb:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.m0(b),'g'),H.oY(c))},
cr:function cr(){},
cs:function cs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iR:function iR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cX:function cX(a,b){this.a=a
this.b=b},
ed:function ed(a,b,c){this.a=a
this.b=b
this.c=c},
f8:function f8(a){this.a=a},
iq:function iq(a){this.a=a},
fV:function fV(a){this.a=a
this.b=null},
bK:function bK(){},
iK:function iK(){},
iG:function iG(){},
cm:function cm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eF:function eF(a){this.a=a},
R:function R(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hX:function hX(a){this.a=a},
i_:function i_(a,b){this.a=a
this.b=b
this.c=null},
cJ:function cJ(a,b){this.a=a
this.$ti=b},
eg:function eg(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jS:function jS(a){this.a=a},
jT:function jT(a){this.a=a},
jU:function jU(a){this.a=a},
ec:function ec(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bB:function(a){return a},
aV:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.ch(b,a))},
o3:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.oX(a,b,c))
return b},
cT:function cT(){},
a_:function a_(){},
bV:function bV(){},
bq:function bq(){},
cU:function cU(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
cV:function cV(){},
br:function br(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){},
du:function du(){},
l7:function(a,b){var s=b.c
return s==null?b.c=H.ko(a,b.z,!0):s},
l6:function(a,b){var s=b.c
return s==null?b.c=H.dD(a,"kS",[b.z]):s},
l8:function(a){var s=a.y
if(s===6||s===7||s===8)return H.l8(a.z)
return s===11||s===12},
n7:function(a){return a.cy},
kB:function(a){return H.kp(v.typeUniverse,a,!1)},
bb:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bb(a,s,a0,a1)
if(r===s)return b
return H.lA(a,r,!0)
case 7:s=b.z
r=H.bb(a,s,a0,a1)
if(r===s)return b
return H.ko(a,r,!0)
case 8:s=b.z
r=H.bb(a,s,a0,a1)
if(r===s)return b
return H.lz(a,r,!0)
case 9:q=b.Q
p=H.dL(a,q,a0,a1)
if(p===q)return b
return H.dD(a,b.z,p)
case 10:o=b.z
n=H.bb(a,o,a0,a1)
m=b.Q
l=H.dL(a,m,a0,a1)
if(n===o&&l===m)return b
return H.km(a,n,l)
case 11:k=b.z
j=H.bb(a,k,a0,a1)
i=b.Q
h=H.oN(a,i,a0,a1)
if(j===k&&h===i)return b
return H.ly(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dL(a,g,a0,a1)
o=b.z
n=H.bb(a,o,a0,a1)
if(f===g&&n===o)return b
return H.kn(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.hl("Attempted to substitute unexpected RTI kind "+c))}},
dL:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bb(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
oO:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bb(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
oN:function(a,b,c,d){var s,r=b.a,q=H.dL(a,r,c,d),p=b.b,o=H.dL(a,p,c,d),n=b.c,m=H.oO(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fx()
s.a=q
s.b=o
s.c=m
return s},
b:function(a,b){a[v.arrayRti]=b
return a},
oV:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.lW(s)
return a.$S()}return null},
lX:function(a,b){var s
if(H.l8(b))if(a instanceof H.bK){s=H.oV(a)
if(s!=null)return s}return H.aW(a)},
aW:function(a){var s
if(a instanceof P.L){s=a.$ti
return s!=null?s:H.kw(a)}if(Array.isArray(a))return H.kv(a)
return H.kw(J.dN(a))},
kv:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
Q:function(a){var s=a.$ti
return s!=null?s:H.kw(a)},
kw:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.ob(a,s)},
ob:function(a,b){var s=a instanceof H.bK?a.__proto__.__proto__.constructor:b,r=H.nL(v.typeUniverse,s.name)
b.$ccache=r
return r},
lW:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.kp(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
oa:function(a){var s,r,q,p=this
if(p===t.K)return H.dI(p,a,H.of)
if(!H.aX(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.dI(p,a,H.oi)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.jI
else if(r===t.E||r===t.H)q=H.oe
else if(r===t.N)q=H.og
else q=r===t.cJ?H.jH:null
if(q!=null)return H.dI(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.p5)){p.r="$i"+s
return H.dI(p,a,H.oh)}}else if(s===7)return H.dI(p,a,H.o8)
return H.dI(p,a,H.o6)},
dI:function(a,b,c){a.b=c
return a.b(b)},
o9:function(a){var s,r=this,q=H.o5
if(!H.aX(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.o2
else if(r===t.K)q=H.o0
else{s=H.dO(r)
if(s)q=H.o7}r.a=q
return r.a(a)},
kz:function(a){var s,r=a.y
if(!H.aX(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.kz(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
o6:function(a){var s=this
if(a==null)return H.kz(s)
return H.M(v.typeUniverse,H.lX(a,s),null,s,null)},
o8:function(a){if(a==null)return!0
return this.z.b(a)},
oh:function(a){var s,r=this
if(a==null)return H.kz(r)
s=r.r
if(a instanceof P.L)return!!a[s]
return!!J.dN(a)[s]},
o5:function(a){var s,r=this
if(a==null){s=H.dO(r)
if(s)return a}else if(r.b(a))return a
H.lL(a,r)},
o7:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.lL(a,s)},
lL:function(a,b){throw H.c(H.nB(H.lt(a,H.lX(a,b),H.al(b,null))))},
lt:function(a,b,c){var s=P.hM(a),r=H.al(b==null?H.aW(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
nB:function(a){return new H.dC("TypeError: "+a)},
aa:function(a,b){return new H.dC("TypeError: "+H.lt(a,null,b))},
of:function(a){return a!=null},
o0:function(a){if(a!=null)return a
throw H.c(H.aa(a,"Object"))},
oi:function(a){return!0},
o2:function(a){return a},
jH:function(a){return!0===a||!1===a},
lJ:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.aa(a,"bool"))},
qd:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.aa(a,"bool"))},
qc:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.aa(a,"bool?"))},
qe:function(a){if(typeof a=="number")return a
throw H.c(H.aa(a,"double"))},
qg:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.aa(a,"double"))},
qf:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.aa(a,"double?"))},
jI:function(a){return typeof a=="number"&&Math.floor(a)===a},
hi:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.aa(a,"int"))},
qi:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.aa(a,"int"))},
qh:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.aa(a,"int?"))},
oe:function(a){return typeof a=="number"},
qj:function(a){if(typeof a=="number")return a
throw H.c(H.aa(a,"num"))},
ql:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.aa(a,"num"))},
qk:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.aa(a,"num?"))},
og:function(a){return typeof a=="string"},
o1:function(a){if(typeof a=="string")return a
throw H.c(H.aa(a,"String"))},
qn:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.aa(a,"String"))},
qm:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.aa(a,"String?"))},
oJ:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.al(a[q],b)
return s},
lM:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=H.b([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.d(a5,j)
m=C.a.U(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.al(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.al(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.al(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.al(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.al(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
al:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.al(a.z,b)
return s}if(l===7){r=a.z
s=H.al(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.al(a.z,b)+">"
if(l===9){p=H.oP(a.z)
o=a.Q
return o.length!==0?p+("<"+H.oJ(o,b)+">"):p}if(l===11)return H.lM(a,b,null)
if(l===12)return H.lM(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
oP:function(a){var s,r=H.m3(a)
if(r!=null)return r
s="minified:"+a
return s},
lB:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
nL:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.kp(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dE(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dD(a,b,q)
n[b]=o
return o}else return m},
nJ:function(a,b){return H.lI(a.tR,b)},
nI:function(a,b){return H.lI(a.eT,b)},
kp:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.lx(H.lv(a,null,b,c))
r.set(b,s)
return s},
h6:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.lx(H.lv(a,b,c,!0))
q.set(c,r)
return r},
nK:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.km(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
ba:function(a,b){b.a=H.o9
b.b=H.oa
return b},
dE:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ao(null,null)
s.y=b
s.cy=c
r=H.ba(a,s)
a.eC.set(c,r)
return r},
lA:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.nG(a,b,r,c)
a.eC.set(r,s)
return s},
nG:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aX(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ao(null,null)
q.y=6
q.z=b
q.cy=c
return H.ba(a,q)},
ko:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.nF(a,b,r,c)
a.eC.set(r,s)
return s},
nF:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aX(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.dO(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.dO(q.z))return q
else return H.l7(a,b)}}p=new H.ao(null,null)
p.y=7
p.z=b
p.cy=c
return H.ba(a,p)},
lz:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.nD(a,b,r,c)
a.eC.set(r,s)
return s},
nD:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aX(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dD(a,"kS",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.ao(null,null)
q.y=8
q.z=b
q.cy=c
return H.ba(a,q)},
nH:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ao(null,null)
s.y=13
s.z=b
s.cy=q
r=H.ba(a,s)
a.eC.set(q,r)
return r},
h5:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
nC:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dD:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.h5(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ao(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.ba(a,r)
a.eC.set(p,q)
return q},
km:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.h5(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ao(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.ba(a,o)
a.eC.set(q,n)
return n},
ly:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.h5(m)
if(j>0){s=l>0?",":""
r=H.h5(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.nC(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ao(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.ba(a,o)
a.eC.set(q,r)
return r},
kn:function(a,b,c,d){var s,r=b.cy+("<"+H.h5(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.nE(a,b,c,r,d)
a.eC.set(r,s)
return s},
nE:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bb(a,b,r,0)
m=H.dL(a,c,r,0)
return H.kn(a,n,m,c!==m)}}l=new H.ao(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.ba(a,l)},
lv:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
lx:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.nv(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.lw(a,r,h,g,!1)
else if(q===46)r=H.lw(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.b9(a.u,a.e,g.pop()))
break
case 94:g.push(H.nH(a.u,g.pop()))
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
H.kl(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.dD(p,n,o))
else{m=H.b9(p,a.e,n)
switch(m.y){case 11:g.push(H.kn(p,m,o,a.n))
break
default:g.push(H.km(p,m,o))
break}}break
case 38:H.nw(a,g)
break
case 42:p=a.u
g.push(H.lA(p,H.b9(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.ko(p,H.b9(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.lz(p,H.b9(p,a.e,g.pop()),a.n))
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
H.kl(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.ly(p,H.b9(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.kl(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.ny(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.b9(a.u,a.e,i)},
nv:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
lw:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.lB(s,o.z)[p]
if(n==null)H.h('No "'+p+'" in "'+H.n7(o)+'"')
d.push(H.h6(s,o,n))}else d.push(p)
return m},
nw:function(a,b){var s=b.pop()
if(0===s){b.push(H.dE(a.u,1,"0&"))
return}if(1===s){b.push(H.dE(a.u,4,"1&"))
return}throw H.c(P.hl("Unexpected extended operation "+H.v(s)))},
b9:function(a,b,c){if(typeof c=="string")return H.dD(a,c,a.sEA)
else if(typeof c=="number")return H.nx(a,b,c)
else return c},
kl:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.b9(a,b,c[s])},
ny:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.b9(a,b,c[s])},
nx:function(a,b,c){var s,r,q=b.y
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
M:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
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
if(q)if(H.M(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.M(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.M(a,b.z,c,d,e)
if(r===6)return H.M(a,b.z,c,d,e)
return r!==7}if(r===6)return H.M(a,b.z,c,d,e)
if(p===6){s=H.l7(a,d)
return H.M(a,b,c,s,e)}if(r===8){if(!H.M(a,b.z,c,d,e))return!1
return H.M(a,H.l6(a,b),c,d,e)}if(r===7){s=H.M(a,t.P,c,d,e)
return s&&H.M(a,b.z,c,d,e)}if(p===8){if(H.M(a,b,c,d.z,e))return!0
return H.M(a,b,c,H.l6(a,d),e)}if(p===7){s=H.M(a,b,c,t.P,e)
return s||H.M(a,b,c,d.z,e)}if(q)return!1
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
if(!H.M(a,k,c,j,e)||!H.M(a,j,e,k,c))return!1}return H.lN(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.lN(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.od(a,b,c,d,e)}return!1},
lN:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.M(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.M(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.M(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.M(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.M(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
od:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.M(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.lB(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.M(a,H.h6(a,b,l[p]),c,r[p],e))return!1
return!0},
dO:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aX(a))if(r!==7)if(!(r===6&&H.dO(a.z)))s=r===8&&H.dO(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
p5:function(a){var s
if(!H.aX(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aX:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
lI:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ao:function ao(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fx:function fx(){this.c=this.b=this.a=null},
ft:function ft(){},
dC:function dC(a){this.a=a},
m3:function(a){return v.mangledGlobalNames[a]},
p9:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kE:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jQ:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.kD==null){H.p2()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.iV("Return interceptor for "+H.v(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.jm
if(o==null)o=$.jm=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.p6(a)
if(p!=null)return p
if(typeof a=="function")return C.R
s=Object.getPrototypeOf(a)
if(s==null)return C.A
if(s===Object.prototype)return C.A
if(typeof q=="function"){o=$.jm
if(o==null)o=$.jm=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
mK:function(a,b){if(a<0||a>4294967295)throw H.c(P.a9(a,0,4294967295,"length",null))
return J.mL(new Array(a),b)},
k9:function(a,b){if(a<0)throw H.c(P.cl("Length must be a non-negative integer: "+a))
return H.b(new Array(a),b.G("t<0>"))},
mL:function(a,b){return J.ka(H.b(a,b.G("t<0>")))},
ka:function(a){a.fixed$length=Array
return a},
mM:function(a,b){return J.ms(a,b)},
dN:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cF.prototype
return J.eb.prototype}if(typeof a=="string")return J.bn.prototype
if(a==null)return J.cG.prototype
if(typeof a=="boolean")return J.ea.prototype
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.L)return a
return J.jQ(a)},
cj:function(a){if(typeof a=="string")return J.bn.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.L)return a
return J.jQ(a)},
jP:function(a){if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.L)return a
return J.jQ(a)},
lU:function(a){if(typeof a=="number")return J.bQ.prototype
if(typeof a=="string")return J.bn.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.c4.prototype
return a},
bD:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.L)return a
return J.jQ(a)},
V:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dN(a).m(a,b)},
kI:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lU(a).H(a,b)},
kJ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lY(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cj(a).h(a,b)},
k3:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.lY(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.jP(a).k(a,b,c)},
mq:function(a,b,c){return J.bD(a).fJ(a,b,c)},
mr:function(a,b,c,d){return J.bD(a).h2(a,b,c,d)},
ms:function(a,b){return J.lU(a).ag(a,b)},
k4:function(a,b){return J.jP(a).E(a,b)},
dR:function(a,b){return J.jP(a).C(a,b)},
mt:function(a){return J.bD(a).gbo(a)},
k5:function(a){return J.dN(a).gB(a)},
aF:function(a){return J.jP(a).gN(a)},
aY:function(a){return J.cj(a).gj(a)},
mu:function(a,b){return J.bD(a).hL(a,b)},
dS:function(a){return J.dN(a).i(a)},
a:function a(){},
ea:function ea(){},
cG:function cG(){},
b2:function b2(){},
ey:function ey(){},
c4:function c4(){},
aL:function aL(){},
t:function t(a){this.$ti=a},
hW:function hW(a){this.$ti=a},
ac:function ac(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bQ:function bQ(){},
cF:function cF(){},
eb:function eb(){},
bn:function bn(){}},P={
no:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.oR()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cg(new P.ji(q),1)).observe(s,{childList:true})
return new P.jh(q,s,r)}else if(self.setImmediate!=null)return P.oS()
return P.oT()},
np:function(a){self.scheduleImmediate(H.cg(new P.jj(a),0))},
nq:function(a){self.setImmediate(H.cg(new P.jk(a),0))},
nr:function(a){P.kg(C.o,a)},
kg:function(a,b){var s=C.c.a0(a.a,1000)
return P.nz(s<0?0:s,b)},
lf:function(a,b){var s=C.c.a0(a.a,1000)
return P.nA(s<0?0:s,b)},
nz:function(a,b){var s=new P.dB()
s.ed(a,b)
return s},
nA:function(a,b){var s=new P.dB()
s.ee(a,b)
return s},
qa:function(a){return new P.cb(a,1)},
ns:function(){return C.a1},
nt:function(a){return new P.cb(a,3)},
ok:function(a,b){return new P.dy(a,b.G("dy<0>"))},
oG:function(){var s,r
for(s=$.ce;s!=null;s=$.ce){$.dK=null
r=s.b
$.ce=r
if(r==null)$.dJ=null
s.a.$0()}},
oM:function(){$.kx=!0
try{P.oG()}finally{$.dK=null
$.kx=!1
if($.ce!=null)$.kH().$1(P.lS())}},
oK:function(a){var s=new P.fh(a),r=$.dJ
if(r==null){$.ce=$.dJ=s
if(!$.kx)$.kH().$1(P.lS())}else $.dJ=r.b=s},
oL:function(a){var s,r,q,p=$.ce
if(p==null){P.oK(a)
$.dK=$.dJ
return}s=new P.fh(a)
r=$.dK
if(r==null){s.b=p
$.ce=$.dK=s}else{q=r.b
s.b=q
$.dK=r.b=s
if(q==null)$.dJ=s}},
le:function(a,b){var s=$.aD
if(s===C.f)return P.kg(a,b)
return P.kg(a,s.h6(b))},
nh:function(a,b){var s=$.aD
if(s===C.f)return P.lf(a,b)
return P.lf(a,s.de(b,t.aF))},
lO:function(a,b,c,d,e){P.oL(new P.jL(d,e))},
oH:function(a,b,c,d){var s,r=$.aD
if(r===c)return d.$0()
$.aD=c
s=r
try{r=d.$0()
return r}finally{$.aD=s}},
oI:function(a,b,c,d,e){var s,r=$.aD
if(r===c)return d.$1(e)
$.aD=c
s=r
try{r=d.$1(e)
return r}finally{$.aD=s}},
ji:function ji(a){this.a=a},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
jj:function jj(a){this.a=a},
jk:function jk(a){this.a=a},
dB:function dB(){this.c=0},
jx:function jx(a,b){this.a=a
this.b=b},
jw:function jw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cb:function cb(a,b){this.a=a
this.b=b},
cc:function cc(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dy:function dy(a,b){this.a=a
this.$ti=b},
fh:function fh(a){this.a=a
this.b=null},
c_:function c_(){},
eQ:function eQ(){},
jC:function jC(){},
jL:function jL(a,b){this.a=a
this.b=b},
jp:function jp(){},
jq:function jq(a,b){this.a=a
this.b=b},
jr:function jr(a,b,c){this.a=a
this.b=b
this.c=c},
mO:function(a,b){return new H.R(a.G("@<0>").b4(b).G("R<1,2>"))},
mP:function(a,b,c){return H.oZ(a,new H.R(b.G("@<0>").b4(c).G("R<1,2>")))},
P:function(a,b){return new H.R(a.G("@<0>").b4(b).G("R<1,2>"))},
kV:function(a){return new P.dm(a.G("dm<0>"))},
kk:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
nu:function(a,b){var s=new P.dn(a,b)
s.c=a.e
return s},
mJ:function(a,b,c){var s,r
if(P.ky(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.b([],t.s)
$.ag.push(a)
try{P.oj(a,s)}finally{if(0>=$.ag.length)return H.d($.ag,-1)
$.ag.pop()}r=P.la(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
k8:function(a,b,c){var s,r
if(P.ky(a))return b+"..."+c
s=new P.a0(b)
$.ag.push(a)
try{r=s
r.a=P.la(r.a,a,", ")}finally{if(0>=$.ag.length)return H.d($.ag,-1)
$.ag.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
ky:function(a){var s,r
for(s=$.ag.length,r=0;r<s;++r)if(a===$.ag[r])return!0
return!1},
oj:function(a,b){var s,r,q,p,o,n,m,l=a.gN(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.t())return
s=H.v(l.gv(l))
b.push(s)
k+=s.length+2;++j}if(!l.t()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gv(l);++j
if(!l.t()){if(j<=4){b.push(H.v(p))
return}r=H.v(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gv(l);++j
for(;l.t();p=o,o=n){n=l.gv(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.v(p)
r=H.v(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
mQ:function(a,b,c){var s=P.mO(b,c)
a.C(0,new P.i0(s,b,c))
return s},
ke:function(a){var s,r={}
if(P.ky(a))return"{...}"
s=new P.a0("")
try{$.ag.push(a)
s.a+="{"
r.a=!0
J.dR(a,new P.i4(r,s))
s.a+="}"}finally{if(0>=$.ag.length)return H.d($.ag,-1)
$.ag.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dm:function dm(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jo:function jo(a){this.a=a
this.c=this.b=null},
dn:function dn(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cE:function cE(){},
i0:function i0(a,b,c){this.a=a
this.b=b
this.c=c},
cK:function cK(){},
i:function i(){},
cM:function cM(){},
i4:function i4(a,b){this.a=a
this.b=b},
K:function K(){},
h7:function h7(){},
cN:function cN(){},
c6:function c6(a,b){this.a=a
this.$ti=b},
d0:function d0(){},
dv:function dv(){},
dp:function dp(){},
dF:function dF(){},
dH:function dH(){},
nk:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.nl(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
nl:function(a,b,c,d){var s=a?$.mj():$.mi()
if(s==null)return null
if(0===c&&d===b.length)return P.ll(s,b)
return P.ll(s,b.subarray(c,P.b5(c,d,b.length)))},
ll:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.bd(r)}return null},
kK:function(a,b,c,d,e,f){if(C.c.bi(f,4)!==0)throw H.c(P.a6("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a6("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a6("Invalid base64 padding, more than two '=' characters",a,b))},
o_:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
nZ:function(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.cj(a),r=0;r<p;++r){q=s.h(a,b+r)
o[r]=(q&4294967040)>>>0!==0?255:q}return o},
j4:function j4(){},
j3:function j3(){},
hq:function hq(){},
hr:function hr(){},
e_:function e_(){},
e1:function e1(){},
hJ:function hJ(){},
j1:function j1(){},
j5:function j5(){},
jB:function jB(a){this.b=0
this.c=a},
j2:function j2(a){this.a=a},
jA:function jA(a){this.a=a
this.b=16
this.c=0},
jV:function(a,b){var s=H.l1(a,b)
if(s!=null)return s
throw H.c(P.a6(a,null,null))},
mH:function(a){if(a instanceof H.bK)return a.i(0)
return"Instance of '"+H.cZ(a)+"'"},
eh:function(a,b,c,d){var s,r=c?J.k9(a,d):J.mK(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
i1:function(a,b,c){var s,r=H.b([],c.G("t<0>"))
for(s=J.aF(a);s.t();)r.push(s.gv(s))
if(b)return r
return J.ka(r)},
mR:function(a,b,c){var s,r,q=J.k9(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
eS:function(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=P.b5(b,c,r)
return H.l2(b>0||c<r?s.slice(b,c):s)}if(t.bm.b(a))return H.n4(a,b,P.b5(b,c,a.length))
return P.nd(a,b,c)},
nd:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.a9(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.a9(c,b,a.length,o,o))
r=J.aF(a)
for(q=0;q<b;++q)if(!r.t())throw H.c(P.a9(b,0,q,o,o))
p=[]
if(s)for(;r.t();)p.push(r.gv(r))
else for(q=b;q<c;++q){if(!r.t())throw H.c(P.a9(c,b,q,o,o))
p.push(r.gv(r))}return H.l2(p)},
n5:function(a){return new H.ec(a,H.mN(a,!1,!0,!1,!1,!1))},
la:function(a,b,c){var s=J.aF(b)
if(!s.t())return a
if(c.length===0){do a+=H.v(s.gv(s))
while(s.t())}else{a+=H.v(s.gv(s))
for(;s.t();)a=a+c+H.v(s.gv(s))}return a},
li:function(){var s=H.mW()
if(s!=null)return P.nj(s)
throw H.c(P.x("'Uri.base' is not supported"))},
ku:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.mo().b
s=s.test(b)}else s=!1
if(s)return b
r=c.ghh().c6(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.aR(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
mF:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
mG:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
e3:function(a){if(a>=10)return""+a
return"0"+a},
kQ:function(a){return new P.bj(1000*a)},
hM:function(a){if(typeof a=="number"||H.jH(a)||null==a)return J.dS(a)
if(typeof a=="string")return JSON.stringify(a)
return P.mH(a)},
hl:function(a){return new P.dW(a)},
cl:function(a){return new P.aG(!1,null,null,a)},
eB:function(a,b){return new P.d_(null,null,!0,a,b,"Value not in range")},
a9:function(a,b,c,d,e){return new P.d_(b,c,!0,a,d,"Invalid value")},
b5:function(a,b,c){if(0>a||a>c)throw H.c(P.a9(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.a9(b,a,c,"end",null))
return b}return c},
l3:function(a,b){if(a<0)throw H.c(P.a9(a,0,null,b,null))
return a},
J:function(a,b,c,d,e){var s=e==null?J.aY(b):e
return new P.e8(s,!0,a,c,"Index out of range")},
x:function(a){return new P.fa(a)},
iV:function(a){return new P.f7(a)},
b0:function(a){return new P.e0(a)},
f:function(a){return new P.fu(a)},
a6:function(a,b,c){return new P.hS(a,b,c)},
kG:function(a){H.p9(a)},
nj:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.D(a5,4)^58)*3|C.a.D(a5,0)^100|C.a.D(a5,1)^97|C.a.D(a5,2)^116|C.a.D(a5,3)^97)>>>0
if(s===0)return P.lh(a4<a4?C.a.q(a5,0,a4):a5,5,a3).gdZ()
else if(s===32)return P.lh(C.a.q(a5,5,a4),0,a3).gdZ()}r=P.eh(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.lP(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(P.lP(a5,0,q,20,r)===20)r[7]=q
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
a5=C.a.aW(a5,n,m,"/");++a4
m=f}j="file"}else if(C.a.a6(a5,"http",0)){if(i&&o+3===n&&C.a.a6(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=C.a.aW(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&C.a.a6(a5,"https",0)){if(i&&o+4===n&&C.a.a6(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=C.a.aW(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}else j=a3
if(k){if(a4<a5.length){a5=C.a.q(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new P.fP(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=P.nT(a5,0,q)
else{if(q===0)P.cd(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?P.nU(a5,d,p-1):""
b=P.nQ(a5,p,o,!1)
i=o+1
if(i<n){a=H.l1(C.a.q(a5,i,n),a3)
a0=P.nS(a==null?H.h(P.a6("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.nR(a5,n,m,a3,j,b!=null)
a2=m<l?P.kr(a5,m+1,l,a3):a3
return new P.bA(j,c,b,a0,a1,a2,l<a4?P.nP(a5,l+1,a4):a3)},
lk:function(a){var s=t.N
return C.b.hm(H.b(a.split("&"),t.s),P.P(s,s),new P.j_(C.e))},
ni:function(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iX(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=C.a.T(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=P.jV(C.a.q(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(q>=4)return H.d(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=P.jV(C.a.q(a,r,c),null)
if(o>255)k.$2(l,r)
if(q>=4)return H.d(j,q)
j[q]=o
return j},
lj:function(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.iY(a),c=new P.iZ(d,a)
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
l=C.b.gaE(s)
if(m&&l!==-1)d.$2("expected a part after last `:`",a0)
if(!m)if(!o)s.push(c.$2(q,a0))
else{k=P.ni(a,q,a0)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)d.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)d.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){if(h<0||h>=16)return H.d(j,h)
j[h]=0
e=h+1
if(e>=16)return H.d(j,e)
j[e]=0
h+=2}else{e=C.c.aP(g,8)
if(h<0||h>=16)return H.d(j,h)
j[h]=e
e=h+1
if(e>=16)return H.d(j,e)
j[e]=g&255
h+=2}}return j},
lC:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cd:function(a,b,c){throw H.c(P.a6(c,a,b))},
nS:function(a,b){if(a!=null&&a===P.lC(b))return null
return a},
nQ:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.T(a,b)===91){s=c-1
if(C.a.T(a,s)!==93)P.cd(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.nN(a,r,s)
if(q<s){p=q+1
o=P.lH(a,C.a.a6(a,"25",p)?q+3:p,s,"%25")}else o=""
P.lj(a,r,q)
return C.a.q(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.T(a,n)===58){q=C.a.br(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.lH(a,C.a.a6(a,"25",p)?q+3:p,c,"%25")}else o=""
P.lj(a,b,q)
return"["+C.a.q(a,b,q)+o+"]"}return P.nW(a,b,c)},
nN:function(a,b,c){var s=C.a.br(a,"%",b)
return s>=b&&s<c?s:c},
lH:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.a0(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.T(a,s)
if(p===37){o=P.ks(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.a0("")
m=i.a+=C.a.q(a,r,s)
if(n)o=C.a.q(a,s,s+3)
else if(o==="%")P.cd(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.a0("")
if(r<s){i.a+=C.a.q(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.T(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=C.a.q(a,r,s)
if(i==null){i=new P.a0("")
n=i}else n=i
n.a+=j
n.a+=P.kq(p)
s+=k
r=s}}}if(i==null)return C.a.q(a,b,c)
if(r<c)i.a+=C.a.q(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
nW:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.T(a,s)
if(o===37){n=P.ks(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.a0("")
l=C.a.q(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.q(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.d(C.x,m)
m=(C.x[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.a0("")
if(r<s){q.a+=C.a.q(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.d(C.j,m)
m=(C.j[m]&1<<(o&15))!==0}else m=!1
if(m)P.cd(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.T(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=C.a.q(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.a0("")
m=q}else m=q
m.a+=l
m.a+=P.kq(o)
s+=j
r=s}}}}if(q==null)return C.a.q(a,b,c)
if(r<c){l=C.a.q(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
nT:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.lE(C.a.D(a,b)))P.cd(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.D(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.d(C.l,p)
p=(C.l[p]&1<<(q&15))!==0}else p=!1
if(!p)P.cd(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.q(a,b,c)
return P.nM(r?a.toLowerCase():a)},
nM:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nU:function(a,b,c){return P.dG(a,b,c,C.T,!1)},
nR:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dG(a,b,c,C.y,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a5(s,"/"))s="/"+s
return P.nV(s,e,f)},
nV:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a5(a,"/"))return P.nX(a,!s||c)
return P.nY(a)},
kr:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.cl("Both query and queryParameters specified"))
return P.dG(a,b,c,C.k,!0)}if(d==null)return null
s=new P.a0("")
r.a=""
d.C(0,new P.jy(new P.jz(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
nP:function(a,b,c){return P.dG(a,b,c,C.k,!0)},
ks:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.T(a,b+1)
r=C.a.T(a,n)
q=H.jR(s)
p=H.jR(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aP(o,4)
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.aR(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.q(a,b,b+3).toUpperCase()
return null},
kq:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=C.a.D(k,a>>>4)
s[2]=C.a.D(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=C.c.fT(a,6*q)&63|r
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
o+=3}}return P.eS(s,0,null)},
dG:function(a,b,c,d,e){var s=P.lG(a,b,c,d,e)
return s==null?C.a.q(a,b,c):s},
lG:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.T(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.d(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.ks(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.d(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.cd(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.T(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=P.kq(o)}}if(p==null){p=new P.a0("")
n=p}else n=p
n.a+=C.a.q(a,q,r)
n.a+=H.v(m)
if(typeof l!=="number")return H.p0(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.q(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
lF:function(a){if(C.a.a5(a,"."))return!0
return C.a.dG(a,"/.")!==-1},
nY:function(a){var s,r,q,p,o,n,m
if(!P.lF(a))return a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.V(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.d(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.p(s,"/")},
nX:function(a,b){var s,r,q,p,o,n
if(!P.lF(a))return!b?P.lD(a):a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gaE(s)!==".."){if(0>=s.length)return H.d(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.d(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gaE(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.d(s,0)
r=P.lD(s[0])
if(0>=s.length)return H.d(s,0)
s[0]=r}return C.b.p(s,"/")},
lD:function(a){var s,r,q,p=a.length
if(p>=2&&P.lE(C.a.D(a,0)))for(s=1;s<p;++s){r=C.a.D(a,s)
if(r===58)return C.a.q(a,0,s)+"%3A"+C.a.ao(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.d(C.l,q)
q=(C.l[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
nO:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.D(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.cl("Invalid URL encoding"))}}return s},
kt:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.D(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.q(a,b,c)
else p=new H.O(C.a.q(a,b,c))}else{p=H.b([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.D(a,o)
if(r>127)throw H.c(P.cl("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.cl("Truncated URI"))
p.push(P.nO(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a0.c6(p)},
lE:function(a){var s=a|32
return 97<=s&&s<=122},
lh:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.b([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.D(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.a6(k,a,r))}}if(q<0&&r>b)throw H.c(P.a6(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.D(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaE(j)
if(p!==44||r!==n+7||!C.a.a6(a,"base64",n+1))throw H.c(P.a6("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.F.hv(0,a,m,s)
else{l=P.lG(a,m,s,C.k,!0)
if(l!=null)a=C.a.aW(a,m,s,l)}return new P.iW(a,j,c)},
o4:function(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="?",i="#",h=H.b(new Array(22),t.gN)
for(s=0;s<22;++s)h[s]=new Uint8Array(96)
r=new P.jE(h)
q=new P.jF()
p=new P.jG()
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
lP:function(a,b,c,d,e){var s,r,q,p,o,n,m=$.mp()
for(s=m.length,r=b;r<c;++r){if(d<0||d>=s)return H.d(m,d)
q=m[d]
p=C.a.D(a,r)^96
o=q[p>95?31:p]
d=o&31
n=o>>>5
if(n>=8)return H.d(e,n)
e[n]=r}return d},
X:function X(a,b){this.a=a
this.b=b},
bj:function bj(a){this.a=a},
hG:function hG(){},
hH:function hH(){},
H:function H(){},
dW:function dW(a){this.a=a},
f1:function f1(){},
et:function et(){},
aG:function aG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d_:function d_(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
e8:function e8(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fa:function fa(a){this.a=a},
f7:function f7(a){this.a=a},
eO:function eO(a){this.a=a},
e0:function e0(a){this.a=a},
ew:function ew(){},
d1:function d1(){},
e2:function e2(a){this.a=a},
fu:function fu(a){this.a=a},
hS:function hS(a,b,c){this.a=a
this.b=b
this.c=c},
k:function k(){},
e9:function e9(){},
ae:function ae(){},
L:function L(){},
a0:function a0(a){this.a=a},
j_:function j_(a){this.a=a},
iX:function iX(a){this.a=a},
iY:function iY(a){this.a=a},
iZ:function iZ(a,b){this.a=a
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
jz:function jz(a,b){this.a=a
this.b=b},
jy:function jy(a){this.a=a},
iW:function iW(a,b,c){this.a=a
this.b=b
this.c=c},
jE:function jE(a){this.a=a},
jF:function jF(){},
jG:function jG(){},
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
bc:function(a){var s,r,q,p,o
if(a==null)return null
s=P.P(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.r)(r),++p){o=r[p]
s.k(0,o,a[o])}return s},
lK:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.jH(a))return a
if(t.f.b(a))return P.lT(a)
if(t.c.b(a)){s=[]
J.dR(a,new P.jD(s))
a=s}return a},
lT:function(a){var s={}
J.dR(a,new P.jM(s))
return s},
js:function js(){},
ju:function ju(a,b){this.a=a
this.b=b},
jv:function jv(a,b){this.a=a
this.b=b},
jD:function jD(a){this.a=a},
jM:function jM(a){this.a=a},
jt:function jt(a,b){this.a=a
this.b=b},
e6:function e6(a,b){this.a=a
this.b=b},
hQ:function hQ(){},
hR:function hR(){},
fN:function fN(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aM:function aM(){},
ef:function ef(){},
aP:function aP(){},
eu:function eu(){},
ir:function ir(){},
eR:function eR(){},
n:function n(){},
aS:function aS(){},
f0:function f0(){},
fB:function fB(){},
fC:function fC(){},
fJ:function fJ(){},
fK:function fK(){},
fX:function fX(){},
fY:function fY(){},
h3:function h3(){},
h4:function h4(){},
hn:function hn(){},
dY:function dY(){},
ho:function ho(a){this.a=a},
dZ:function dZ(){},
b_:function b_(){},
ev:function ev(){},
fi:function fi(){},
bY:function bY(){},
eM:function eM(){},
fT:function fT(){},
fU:function fU(){}},W={
kN:function(){var s=document.createElement("canvas")
s.toString
return s},
hI:function(a){return"wheel"},
mI:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.bd(s)}return q},
jn:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
lu:function(a,b,c,d){var s=W.jn(W.jn(W.jn(W.jn(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
a4:function(a,b,c,d){var s=new W.dl(a,b,c==null?null:W.lQ(new W.jl(c),t.aD),!1)
s.h_()
return s},
lQ:function(a,b){var s=$.aD
if(s===C.f)return a
return s.de(a,b)},
o:function o(){},
hk:function hk(){},
dU:function dU(){},
dV:function dV(){},
bh:function bh(){},
bi:function bi(){},
at:function at(){},
hz:function hz(){},
E:function E(){},
cu:function cu(){},
hA:function hA(){},
am:function am(){},
aI:function aI(){},
hB:function hB(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(){},
cv:function cv(){},
cw:function cw(){},
e4:function e4(){},
hF:function hF(){},
fk:function fk(a,b){this.a=a
this.b=b},
C:function C(){},
l:function l(){},
e:function e(){},
ai:function ai(){},
bN:function bN(){},
e5:function e5(){},
e7:function e7(){},
aw:function aw(){},
hU:function hU(){},
bm:function bm(){},
cC:function cC(){},
bP:function bP(){},
bo:function bo(){},
i2:function i2(){},
ik:function ik(){},
bS:function bS(){},
el:function el(){},
il:function il(a){this.a=a},
em:function em(){},
im:function im(a){this.a=a},
ay:function ay(){},
en:function en(){},
aj:function aj(){},
fj:function fj(a){this.a=a},
u:function u(){},
cW:function cW(){},
az:function az(){},
ez:function ez(){},
eE:function eE(){},
iy:function iy(a){this.a=a},
eG:function eG(){},
ap:function ap(){},
eK:function eK(){},
aB:function aB(){},
eL:function eL(){},
aC:function aC(){},
eP:function eP(){},
iH:function iH(a){this.a=a},
ak:function ak(){},
b7:function b7(){},
aq:function aq(){},
af:function af(){},
eT:function eT(){},
eU:function eU(){},
iM:function iM(){},
ar:function ar(){},
bu:function bu(){},
f_:function f_(){},
iQ:function iQ(){},
aU:function aU(){},
j0:function j0(){},
fd:function fd(){},
b8:function b8(){},
ca:function ca(){},
fl:function fl(){},
dk:function dk(){},
fy:function fy(){},
dq:function dq(){},
fS:function fS(){},
fZ:function fZ(){},
k6:function k6(a,b){this.a=a
this.$ti=b},
dl:function dl(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jl:function jl(a){this.a=a},
kj:function kj(a){this.$ti=a},
I:function I(){},
cA:function cA(a,b){var _=this
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
hh:function hh(){}},K={dT:function dT(){},cB:function cB(){},aO:function aO(a){this.a=a},Y:function Y(a){this.a=a}},L={eN:function eN(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},eY:function eY(a,b,c){this.a=a
this.b=b
this.c=c},eZ:function eZ(a,b){this.b=a
this.c=b},iO:function iO(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},d5:function d5(a,b){this.b=a
this.c=!1
this.a=b}},O={
hv:function(a){return new O.a5(H.b([],a.G("t<0>")),a.G("a5<0>"))},
a5:function a5(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
cS:function cS(a){this.a=a
this.b=null},
ek:function(a,b){return new O.cQ(new V.W(0,0,0),a,b,new A.au(!1,!1,!1))},
lc:function(a,b){var s=V.ad(),r=V.eD()
return new O.bt(b,s,r,a==null?V.eD():a)},
cO:function cO(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
ib:function ib(a,b){this.a=a
this.b=b},
ic:function ic(){},
id:function id(a,b){this.a=a
this.b=b},
ie:function ie(){},
ig:function ig(a,b){this.a=a
this.b=b},
ih:function ih(){},
ii:function ii(a,b){this.a=a
this.b=b},
ij:function ij(){},
i5:function i5(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c},
ej:function ej(){},
i6:function i6(a,b,c){this.a=a
this.b=b
this.c=c},
cQ:function cQ(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d},
i8:function i8(a){this.b=a},
i9:function i9(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d},
ia:function ia(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d},
c0:function c0(){},
d2:function d2(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=0
_.e=c
_.f=d
_.r=null},
bt:function bt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=null}},E={
kR:function(){var s=O.hv(t.l),r=new E.bk(s)
s.aI(r.ghw(),r.ghz())
r.sbC(0,null)
return r},
lr:function(){var s=window.navigator.vendor
s.toString
if(C.a.L(s,"Google"))return C.D
s=window.navigator.userAgent
s.toString
if(C.a.L(s,"Firefox"))return C.q
s=window.navigator.appVersion
s.toString
if(C.a.L(s,"Trident")||C.a.L(s,"Edge"))return C.r
s=window.navigator.appName
s.toString
if(C.a.L(s,"Microsoft"))return C.r
return C.E},
ls:function(){var s=window.navigator.appVersion
s.toString
if(C.a.L(s,"Win"))return C.X
if(C.a.L(s,"Mac"))return C.z
if(C.a.L(s,"Linux"))return C.Y
return C.Z},
n6:function(a,b){var s
Date.now()
s=t.fA
s=new E.iu(a,new P.X(Date.now(),!1),new P.X(Date.now(),!1),new O.cS(H.b([],s)),new O.cS(H.b([],s)),new O.cS(H.b([],s)),H.b([null],t.bc),P.P(t.N,t.fg))
s.e9(a,b)
return s},
ng:function(a,b,c,d,e){var s,r
if(t.gA.b(a))return E.ld(a,!0,!0,!0,!1)
s=W.kN()
r=s.style
r.width="100%"
r.height="100%"
J.mt(a).l(0,s)
return E.ld(s,!0,!0,!0,!1)},
ld:function(a,b,c,d,e){var s,r,q,p,o="mousemove",n=t.z,m=t.gW.a(C.m.e0(a,"webgl2",P.mP(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n)))
if(m==null)throw H.c(P.f("Failed to get the rendering context for WebGL."))
s=E.n6(m,a)
H.hi(m.getParameter(3379))
H.hi(m.getParameter(34076))
n=H.b([],t.g9)
r=$.hK
q=new X.fc(a,n,(r==null?$.hK=new E.fs(E.lr(),E.ls()):r).a===C.q?0.16666666666666666:0.005555555555555556)
p=document
p.toString
n.push(W.a4(p,"contextmenu",q.geU(),!1))
n.push(W.a4(a,"focus",q.gf3(),!1))
n.push(W.a4(a,"blur",q.geO(),!1))
n.push(W.a4(p,"keyup",q.gf7(),!1))
n.push(W.a4(p,"keydown",q.gf5(),!1))
n.push(W.a4(a,"mousedown",q.gfb(),!1))
n.push(W.a4(a,"mouseup",q.gff(),!1))
n.push(W.a4(a,o,q.gfd(),!1))
W.hI(a)
W.hI(a)
n.push(W.a4(a,W.hI(a),q.gfh(),!1))
n.push(W.a4(p,o,q.geW(),!1))
n.push(W.a4(p,"mouseup",q.geY(),!1))
n.push(W.a4(p,"pointerlockchange",q.gfj(),!1))
n.push(W.a4(a,"touchstart",q.gfC(),!1))
n.push(W.a4(a,"touchend",q.gfw(),!1))
n.push(W.a4(a,"touchmove",q.gfA(),!1))
n=new E.eX(a,s,q,new P.X(Date.now(),!1))
n.cX()
return n},
hs:function hs(){},
bk:function bk(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bH:function bH(a){this.b=a},
bW:function bW(a){this.b=a},
fs:function fs(a,b){this.a=a
this.b=b},
iu:function iu(a,b,c,d,e,f,g,h){var _=this
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
iv:function iv(a){this.a=a},
iw:function iw(a){this.a=a},
ix:function ix(a){this.a=a},
eX:function eX(a,b,c,d){var _=this
_.b=a
_.d=null
_.e=b
_.x=c
_.cx=!1
_.cy=d
_.db=0},
iL:function iL(a){this.a=a}},Z={
lq:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.bB(c)),35044)
a.bindBuffer(b,null)
return new Z.fe(b,s)},
as:function(a){return new Z.bz(a)},
fe:function fe(a,b){this.a=a
this.b=b},
bI:function bI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ff:function ff(a){this.a=a},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cD:function cD(a,b,c){this.a=a
this.b=b
this.c=c},
bz:function bz(a){this.a=a}},D={
D:function(){return new D.bl()},
hu:function hu(){},
bl:function bl(){var _=this
_.c=_.b=_.a=null
_.d=0},
hN:function hN(a){this.a=a},
hO:function hO(a){this.a=a},
N:function N(){},
aJ:function aJ(){},
aK:function aK(){},
y:function y(a,b,c){this.c=a
this.d=b
this.e=c},
bM:function bM(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=null},
cI:function cI(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={co:function co(a,b){this.a=a
this.b=b},ee:function ee(a,b){this.a=a
this.b=b},hY:function hY(a,b){this.c=a
this.d=b},cL:function cL(a,b,c){this.x=a
this.c=b
this.d=c},i3:function i3(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},bT:function bT(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},io:function io(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},bU:function bU(a,b,c){this.x=a
this.c=b
this.d=c},eA:function eA(){},d4:function d4(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},iP:function iP(a,b,c,d,e){var _=this
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
k7:function(a){var s,r
if(a==null)s=new V.ah(0,0,0,1)
else s=a
r=V.eD()
return new X.hT(s,r)},
kZ:function(a){var s,r,q=new X.ex(1.0471975511965976,0.1)
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gn().l(0,q.gef())
q.a_(new D.y("mover",s,q.b))}r=q.c
$.A().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
q.a_(new D.y("fov",r,1.0471975511965976))}r=q.d
$.A().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
q.a_(new D.y("near",r,0.1))}r=q.e
$.A().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
q.a_(new D.y("far",r,2000))}return q},
hp:function hp(a,b,c){var _=this
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
hT:function hT(a,b){this.a=a
this.r=b
this.x=null},
hV:function hV(){this.b=null},
ex:function ex(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
iJ:function iJ(){}},V={
hw:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.ah(s,r,q,1)},
ph:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bi(a-b,s)
return(a<0?a+s:a)+b},
z:function(a,b,c){$.A().toString
return C.a.aF(C.d.cz(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
ci:function(a,b,c){var s,r,q,p,o,n,m,l=H.b([],t.s)
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.r)(a),++p){o=a[p]
$.A().toString
n=C.a.aF(C.d.cz(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.d(l,m)
s=C.a.aF(l[m],q)
r=l.length
if(m>=r)return H.d(l,m)
l[m]=s}return l},
kF:function(a){return C.d.hR(Math.pow(2,C.d.ci(Math.log(a)/Math.log(2))))},
ad:function(){var s=$.kY
return s==null?$.kY=V.ax(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
ax:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.b3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kX:function(a,b,c){var s=c.F(),r=b.aC(s).F(),q=s.aC(r),p=new V.B(a.a,a.b,a.c)
return V.ax(r.a,q.a,s.a,r.b_(0).a3(p),r.b,q.b,s.b,q.b_(0).a3(p),r.c,q.c,s.c,s.b_(0).a3(p),0,0,0,1)},
l_:function(){var s=$.aQ
return s==null?$.aQ=new V.T(0,0,0):s},
eD:function(){var s=$.l5
return s==null?$.l5=V.kf(0,0,1,1):s},
kf:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eC(a,b,c,d)},
di:function(){var s=$.lo
return s==null?$.lo=new V.B(0,0,0):s},
nn:function(){var s=$.j6
return s==null?$.j6=new V.B(-1,0,0):s},
ki:function(){var s=$.j7
return s==null?$.j7=new V.B(0,1,0):s},
lp:function(){var s=$.j8
return s==null?$.j8=new V.B(0,0,1):s},
nm:function(a,b,c){return new V.B(a,b,c)},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hL:function hL(){},
cR:function cR(a,b,c,d,e,f,g,h,i){var _=this
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
S:function S(a,b){this.a=a
this.b=b},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
bs:function bs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eC:function eC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a3:function a3(a,b){this.a=a
this.b=b},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
pa:function(a){P.nh(C.O,new V.k1(a))},
n8:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.a4(n,"scroll",new V.iE(s),!1)
return new V.iC(o)},
k1:function k1(a){this.a=a},
is:function is(a,b,c){this.a=a
this.b=b
this.c=c},
it:function it(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iC:function iC(a){this.a=a
this.b=null},
iE:function iE(a){this.a=a},
iD:function iD(a){this.a=a}},U={
hy:function(){return new U.hx()},
kP:function(a){var s=V.ad(),r=new U.cq(s)
if(!s.m(0,a))r.a=a
return r},
hx:function hx(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
cq:function cq(a){this.a=a
this.b=null},
bO:function bO(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
Z:function Z(){},
df:function df(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.y=_.x=!1
_.z=0
_.Q=c
_.ch=0
_.cx=d
_.cy=null},
dg:function dg(a,b,c,d,e){var _=this
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
dh:function dh(a,b){var _=this
_.a=null
_.b=a
_.e=_.d=0
_.f=b
_.r=null}},M={cp:function cp(a){var _=this
_.f=!1
_.r=null
_.a=a
_.c=_.b=null},ct:function ct(a){var _=this
_.d=_.c=_.b=null
_.e=a
_.r=null},cy:function cy(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
mT:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=""+"MaterialLight_"+a4.gaq(a4)+a5.gaq(a5)+a6.gaq(a6)+a7.gaq(a7)+a8.gaq(a8)+a9.gaq(a9)+b0.gaq(b0)+b1.gaq(b1)+b2.gaq(b2)+"_"
b+=a?"1":"0"
b+=a0?"1":"0"
b+=a1?"1":"0"
b=b+"0_"+a3
s=b3.length
if(s>0){b+="_Bar"
for(r=0;r<b3.length;b3.length===s||(0,H.r)(b3),++r)b+="_"+b3[r].a}s=b4.length
if(s>0){b+="_Dir"
for(r=0;r<b4.length;b4.length===s||(0,H.r)(b4),++r)b+="_"+b4[r].a}s=b5.length
if(s>0){b+="_Point"
for(r=0;r<b5.length;b5.length===s||(0,H.r)(b5),++r)b+="_"+b5[r].a}s=b6.length
if(s>0){b+="_Spot"
for(r=0;r<b6.length;b6.length===s||(0,H.r)(b6),++r)b+="_"+b6[r].a}for(s=b3.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b3[r].b
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
c=$.aE()
if(h){s=$.bg()
c=new Z.bz(c.a|s.a)}if(g)c=new Z.bz(c.a|$.bf().a)
if(f)c=new Z.bz(c.a|$.be().a)
return new A.i7(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
jJ:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jK:function(a,b,c){var s
A.jJ(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hj(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
op:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jJ(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
ol:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.jK(b,r,"ambient")
b.a+="\n"},
on:function(a,b){var s,r=a.c
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.jK(b,r,"diffuse")
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
oq:function(a,b){var s,r=a.d
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.jK(b,r,"invDiffuse")
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
ow:function(a,b){var s,r=a.e
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.jK(b,r,"specular")
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
os:function(a,b){var s,r,q
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
ou:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jJ(b,r,"reflect")
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
ov:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jJ(b,r,"refract")
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
om:function(a,b,c){var s,r,q,p,o,n,m=b.b
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
s=c.a+="   return "+C.b.p(o," * ")+";\n"
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
oo:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
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
ot:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
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
m=c.a+="   return "+C.b.p(j," * ")+";\n"
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
ox:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
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
if(s==null)s=$.hK=new E.fs(E.lr(),E.ls())
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
or:function(a,b){var s,r
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
s=b.a+="   return "+C.b.p(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
oy:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.a0(""),j=""+"precision mediump float;\n"
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
A.op(a,k)
A.ol(a,k)
A.on(a,k)
A.oq(a,k)
A.ow(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.ou(a,k)
A.ov(a,k)}A.os(a,k)
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
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.r)(p),++n)A.om(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.r)(p),++n)A.oo(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.r)(p),++n)A.ot(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.r)(p),++n)A.ox(a,p[n],k)
A.or(a,k)}p=k.a+="// === Main ===\n"
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
for(j=a.z,s=j.length,n=0;n<j.length;j.length===s||(0,H.r)(j),++n){q="barLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ao(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.r)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ao(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.r)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ao(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.r)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ao(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)j=!1
else j=!0
if(j)m.push("emissionColor()")
if(!a.r.a)j=!1
else j=!0
if(j)m.push("reflect(refl)")
if(!a.x.a)j=!1
else j=!0
if(j)m.push("refract(refl)")
if(m.length<=0)m.push("vec3(0.0, 0.0, 0.0)")
j=k.a+="   vec4 objClr = vec4("+C.b.p(m," + ")+", alpha);\n"
if(r)j=k.a=j+"   objClr = colorMat*objClr;\n"
j+="   gl_FragColor = objClr;\n"
k.a=j
j=k.a=j+"}\n"
return j.charCodeAt(0)==0?j:j},
oz:function(a,b){var s,r,q
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
oB:function(a,b){var s
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
oA:function(a,b){var s
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
oD:function(a,b){var s,r
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
oE:function(a,b){var s,r
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
oC:function(a,b){var s
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
oF:function(a,b){var s
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
return a[0].toUpperCase()+C.a.ao(a,1)},
nf:function(a,b){var s,r,q,p=""+"precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n"
for(s=0;s<a;++s)p=p+("uniform sampler2D txt"+s+";\n")+("uniform mat4 clrMat"+s+";\n")+("uniform vec2 srcLoc"+s+";\n")+("uniform vec2 srcSize"+s+";\n")+("uniform vec2 destLoc"+s+";\n")+("uniform vec2 destSize"+s+";\n")+("uniform int flip"+s+";\n")
p+="\nvec4 clrAccum;\n"
r=b===C.w
p=(r||b===C.n?p+"float colorCount;\n":p)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.v)p+="      clrAccum += color;\n"
else if(b===C.i)p+="      clrAccum = mix(clrAccum, color, color.a);\n"
else p=r?p+"      clrAccum += color;\n      colorCount += 1.0;\n":p+"      clrAccum = color;\n      colorCount = 1.0;\n"
p+="   }\n}\n\nvoid layoutAll()\n{\n"
q=b===C.n
if(q)for(s=a-1;s>=0;--s)p=p+("   if(txtCount > "+s+")\n")+"   {\n"+("     layout(txt"+s+", clrMat"+s+", srcLoc"+s+", srcSize"+s+", destLoc"+s+", destSize"+s+", flip"+s+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(s=0;s<a;++s)p=p+("   if(txtCount <= "+s+") return;\n")+("   layout(txt"+s+", clrMat"+s+", srcLoc"+s+", srcSize"+s+", destLoc"+s+", destSize"+s+", flip"+s+");\n")
p+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(r)p+="   colorCount = 1.0;\n"
else if(q)p+="   colorCount = 0.0;\n"
p+="   layoutAll();\n"
p=(r?p+"   clrAccum = clrAccum/colorCount;\n":p)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return p.charCodeAt(0)==0?p:p},
kh:function(a,b,c,d,e){var s=new A.f2(H.b([],t.t),a,c,e)
s.f=d
s.e=P.eh(d,0,!1,t.S)
return s},
dX:function dX(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(a){this.a=a},
au:function au(a,b,c){this.a=a
this.b=b
this.c=c},
cP:function cP(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.ib=_.ia=_.dA=_.i9=_.i8=_.dz=_.dw=_.i7=_.i6=_.dv=_.du=_.i5=_.i4=_.dt=_.i3=_.i2=_.ds=_.dr=_.bq=_.aS=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.c8=c
_.c9=d
_.ca=e
_.cb=f
_.cc=g
_.cd=h
_.ce=i
_.cf=j
_.ig=_.ie=_.ic=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
aZ:function aZ(a,b){this.a=a
this.b=b},
b1:function b1(a,b){this.a=a
this.b=b},
b4:function b4(a,b){this.a=a
this.b=b},
b6:function b6(a,b){this.a=a
this.b=b},
i7:function i7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.bq=b6
_.dr=b7},
d9:function d9(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
da:function da(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dc:function dc(a,b,c,d,e,f,g,h,i,j){var _=this
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
bZ:function bZ(){},
bL:function bL(a,b){this.a=a
this.b=b},
d3:function d3(a,b,c,d,e,f,g,h,i){var _=this
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
a1:function a1(){},
iU:function iU(a){this.a=a},
bv:function bv(a,b,c){this.a=a
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
f2:function f2(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
d6:function d6(a,b,c){this.a=a
this.c=b
this.d=c},
c3:function c3(a,b,c){this.a=a
this.c=b
this.d=c},
d7:function d7(a,b,c){this.a=a
this.c=b
this.d=c},
d8:function d8(a,b,c){this.a=a
this.c=b
this.d=c},
f6:function f6(a,b,c){this.a=a
this.c=b
this.d=c},
db:function db(a,b,c){this.a=a
this.c=b
this.d=c},
bw:function bw(a,b,c){this.a=a
this.c=b
this.d=c},
bx:function bx(a,b,c){this.a=a
this.c=b
this.d=c},
dd:function dd(a,b,c){this.a=a
this.c=b
this.d=c}},F={
pg:function(){return F.oW(15,30,0.5,1,new F.k2())},
oW:function(a,b,c,d,e){var s=F.pc(a,b,new F.jN(e,d,b,c))
s.aB()
s.hu(new F.jc(),new F.ip())
return s},
pc:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null
if(a<1)throw H.c(P.f("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.f("Must have 1 or more divisions of the height for a surface."))
s=F.l9()
r=t.k
q=H.b([],r)
for(p=0;p<=b;++p){o=p/b
n=s.a
if(n==null)n=s.a=new F.G(s,H.b([],r))
if(o<0)m=0
else m=o>1?1:o
l=F.j9(d,d,new V.ah(m,0,0,1),d,d,new V.S(o,1),d,d,0)
n.l(0,l)
c.$3(l,o,0)
q.push(l.dj(d))}for(p=1;p<=a;++p){k=p/a
for(n=k>1,m=k<0,j=1-k,i=0;i<=b;++i){o=i/b
h=s.a
if(h==null)h=s.a=new F.G(s,H.b([],r))
if(o<0)g=0
else g=o>1?1:o
if(m)f=0
else f=n?1:k
if(m)e=0
else e=n?1:k
l=F.j9(d,d,new V.ah(g,f,e,1),d,d,new V.S(o,j),d,d,0)
h.l(0,l)
c.$3(l,o,k)
q.push(l.dj(d))}}s.gR().h4(a+1,b+1,q)
return s},
l9:function(){return new F.iz()},
j9:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.c7()
h=$.mk()
s=$.aE()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.bg().a)!==0)q.r=e
if((r&$.bf().a)!==0)q.x=b
if((r&$.bF().a)!==0)q.y=f
if((r&$.bG().a)!==0)q.z=g
if((r&$.ml().a)!==0)q.Q=c
if((r&$.ck().a)!==0)q.ch=i
if((r&$.be().a)!==0)q.cx=a
return q},
k2:function k2(){},
jN:function jN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
av:function av(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hP:function hP(){},
iF:function iF(){},
hZ:function hZ(){},
iT:function iT(){},
iz:function iz(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iB:function iB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
eH:function eH(a,b){this.a=a
this.b=b},
eI:function eI(a,b){this.a=a
this.b=b},
iA:function iA(a){this.b=a},
c7:function c7(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
jg:function jg(a){this.a=a},
jf:function jf(a){this.a=a},
G:function G(a,b){this.a=a
this.b=!1
this.c=b},
c8:function c8(a,b,c){this.b=a
this.c=b
this.d=c},
ja:function ja(a,b){this.a=a
this.b=b},
jb:function jb(a,b){this.a=a
this.b=b},
c9:function c9(a,b){this.b=a
this.c=b},
jd:function jd(){},
jc:function jc(){},
je:function je(){},
ip:function ip(){}},T={
lb:function(a){return new T.eW(a)},
c1:function c1(){},
eV:function eV(){},
eW:function eW(a){var _=this
_.a=0
_.b=a
_.d=_.c=!1
_.x=_.r=_.f=_.e=0
_.y=null}},S={
p7:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3="testCanvas",b4=null,b5="modifiers",b6=V.n8("Test 036"),b7=W.kN()
b7.className="pageLargeCanvas"
b7.id=b3
b6.a.appendChild(b7).toString
s=t.s
b6.d7(H.b(["Test of the texture layout cover technique."],s))
b6.h1(H.b(["blends"],s))
b6.d7(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(b3)
if(r==null)H.h(P.f("Failed to find an element with the identifier, testCanvas."))
q=E.ng(r,!0,!0,!0,!1)
p=new U.bO(V.ad(),H.b([],t.eJ))
p.aI(p.geG(),p.gfn())
b6=q.x
o=U.hy()
n=U.hy()
m=$.by
if(m==null)m=$.by=new V.a3(0,0)
m=new U.dg(o,n,new X.a7(!1,!1,!1),m,V.ad())
o.scB(0,!0)
o.scl(6.283185307179586)
o.scn(0)
o.saa(0,0)
o.scm(100)
o.sZ(0)
o.sc7(0.5)
l=m.gaN()
o.gn().l(0,l)
n.scB(0,!0)
n.scl(6.283185307179586)
n.scn(0)
n.saa(0,0)
n.scm(100)
n.sZ(0)
n.sc7(0.5)
n.gn().l(0,l)
o=new X.a7(!1,!1,!1)
if(!m.d.m(0,o)){k=m.d
m.d=o
m.M(new D.y(b5,k,o))}m.b8(b6)
p.l(0,m)
U.hy()
if($.by==null)$.by=new V.a3(0,0)
V.ad()
o=U.hy()
n=$.by
if(n==null)n=$.by=new V.a3(0,0)
n=new U.df(o,new X.a7(!1,!1,!1),n,V.ad())
o.scB(0,!0)
o.scl(6.283185307179586)
o.scn(0)
o.saa(0,0)
o.scm(100)
o.sZ(0)
o.sc7(0.2)
o.gn().l(0,n.gaN())
o=new X.a7(!0,!1,!1)
if(!n.c.m(0,o)){k=n.c
n.c=o
n.M(new D.y(b5,k,o))}n.b8(b6)
p.l(0,n)
o=new X.a7(!1,!1,!1)
n=new U.dh(o,V.ad())
m=new X.a7(!1,!1,!1)
if(!o.m(0,m)){n.b=m
n.M(new D.y(b5,o,m))}n.b8(b6)
p.l(0,n)
p.l(0,U.kP(V.ax(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
j=X.kZ(p)
i=new V.ah(0,0,0,0)
b6=T.lb(b4)
h=new X.hp(b6,new V.ah(0,0,0,1),V.eD())
h.sal(0,512)
h.sah(0,512)
if(!h.cx.m(0,i)){k=h.cx
h.cx=i
h.a_(new D.y("color",k,i))}o=h.db
$.A().toString
if(!(Math.abs(o-2000)<1e-9)){h.db=2000
h.a_(new D.y("depth",o,2000))}if(!h.f){h.f=!0
h.a_(new D.y("autoResize",!1,!0))}o=h.r
$.A().toString
if(!(Math.abs(o-1)<1e-9)){h.r=1
h.a_(new D.y("autoResizeScalarX",o,1))}o=h.x
$.A().toString
if(!(Math.abs(o-1)<1e-9)){h.x=1
h.a_(new D.y("autoResizeScalarY",o,1))}g=V.eD()
if(!h.dy.m(0,g)){k=h.dy
h.dy=g
h.a_(new D.y("region",k,g))}f=E.kR()
f.sbC(0,F.pg())
o=O.hv(t.gc)
e=new O.cO(o)
o.aI(e.geK(),e.geM())
o=e.gdO()
o.gn().l(0,e.gcV())
o.gdN().l(0,e.gar())
o=e.gdO()
d=V.ki()
n=U.kP(V.kX(V.l_(),d,new V.B(0,-1,-1)))
m=new V.W(1,1,1)
l=new D.bM(new V.W(1,1,1),V.lp(),V.ki(),V.nn())
k=l.a
l.a=n
n.gn().l(0,l.geb())
l.av(new D.y("mover",k,l.a))
if(!l.b.m(0,m)){k=l.b
l.b=m
l.av(new D.y("color",k,m))}o.l(0,l)
o=e.gd9()
o.saR(0,new V.W(0,0,1))
o=e.gdk()
o.saR(0,new V.W(0,1,0))
o=e.gbD()
o.saR(0,new V.W(1,0,0))
o=e.gbD()
o.cZ(new A.au(!0,!1,!1))
o.d_(10)
o=O.hv(t.l)
c=new M.cy(o)
o.aI(c.geQ(),c.geS())
b=X.k7(b4)
c.sdh(b4)
c.sbe(0,b)
c.sbf(b4)
c.sdh(j)
c.sbf(e)
c.sbe(0,h)
o.l(0,f)
o=O.hv(t.bR)
a=new O.d2(new V.ah(0,0,0,1),o,C.i,C.i)
o.aI(a.gf_(),a.gf1())
for(n=o.a,m=o.$ti.G("t<a5.T>"),a0=0;a0<3;++a0){a1=a0*0.3333333333333333
for(a2=0;a2<3;++a2){l=O.lc(V.kf(a1,a2*0.3333333333333333,0.3333333333333333,0.3333333333333333),b6)
if(o.bW(H.b([l],m))){a3=n.length
n.push(l)
l=H.b([l],m)
a4=o.c
if(a4!=null)a4.$2(a3,l)}}}n=O.lc(b4,b4)
m=n.a
if(m!==b6){if(m!=null)m.gn().K(0,n.gar())
k=n.a
n.a=b6
b6.gn().l(0,n.gar())
n.S(new D.y("texture",k,n.a))}b6=V.ax(0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1)
if(!n.b.m(0,b6)){k=n.b
n.b=b6
n.S(new D.y("colorMatrix",k,b6))}o.l(0,n)
a5=X.k7(new V.ah(0,0,0,1))
b6=E.kR()
a6=new M.ct(b6)
a7=F.l9()
o=a7.ga1()
n=new V.B(-1,-1,1).F()
a8=o.bm(new V.bs(1,2,4,6),V.hw(255,0,0),new V.T(-1,-1,0),new V.S(0,1),n,b4)
n=a7.ga1()
o=new V.B(1,-1,1).F()
a9=n.bm(new V.bs(0,3,4,6),V.hw(0,0,255),new V.T(1,-1,0),new V.S(1,1),o,b4)
o=a7.ga1()
n=new V.B(1,1,1).F()
b0=o.bm(new V.bs(0,2,5,6),V.hw(0,128,0),new V.T(1,1,0),new V.S(1,0),n,b4)
n=a7.ga1()
o=$.a8
if(o==null)o=$.a8=new V.S(0,0)
m=new V.B(-1,1,1).F()
b1=n.bm(new V.bs(0,2,4,7),V.hw(255,255,0),new V.T(-1,1,0),o,m,b4)
a7.gR().h3(H.b([a8,a9,b0,b1],t.k))
a7.aB()
b6.sbC(0,a7)
b2=new X.hV()
k=a6.b
a6.b=b2
b2.gn().l(0,a6.gW())
a6.V(new D.y("camera",k,a6.b))
a6.sbe(0,b4)
a6.sbf(b4)
a6.sbf(a)
a6.sbe(0,a5)
b6=t.ba
o=H.b([c,a6],b6)
b6=new M.cp(H.b([],b6))
b6.aI(b6.gfs(),b6.gfu())
b6.bl(0,o)
o=q.d
if(o!==b6){if(o!=null)o.gn().K(0,q.gcH())
q.d=b6
b6.gn().l(0,q.gcH())
q.cI()}r=s.getElementById("blends")
if(r==null)H.h(P.f("Failed to find blends for RadioGroup"))
b6=new V.is("blends",!0,r)
b6.c1(0,"Additive",new S.jX(a))
b6.d6(0,"AlphaBlend",new S.jY(a),!0)
b6.c1(0,"Average",new S.jZ(a))
b6.c1(0,"Overwrite",new S.k_(a))
V.pa(q)},
jX:function jX(a){this.a=a},
jY:function jY(a){this.a=a},
jZ:function jZ(a){this.a=a},
k_:function k_(a){this.a=a}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,S]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kb.prototype={}
J.a.prototype={
m:function(a,b){return a===b},
gB:function(a){return H.cY(a)},
i:function(a){return"Instance of '"+H.cZ(a)+"'"}}
J.ea.prototype={
i:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$ibC:1}
J.cG.prototype={
m:function(a,b){return null==b},
i:function(a){return"null"},
gB:function(a){return 0}}
J.b2.prototype={
gB:function(a){return 0},
i:function(a){return String(a)},
$ikU:1}
J.ey.prototype={}
J.c4.prototype={}
J.aL.prototype={
i:function(a){var s=a[$.m6()]
if(s==null)return this.e6(a)
return"JavaScript function for "+J.dS(s)}}
J.t.prototype={
ct:function(a,b){if(!!a.fixed$length)H.h(P.x("removeAt"))
if(b<0||b>=a.length)throw H.c(P.eB(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var s
if(!!a.fixed$length)H.h(P.x("remove"))
for(s=0;s<a.length;++s)if(J.V(a[s],b)){a.splice(s,1)
return!0}return!1},
bl:function(a,b){if(!!a.fixed$length)H.h(P.x("addAll"))
this.ei(a,b)
return},
ei:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.b0(a))
for(s=0;s<r;++s)a.push(b[s])},
C:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.b0(a))}},
p:function(a,b){var s,r,q=a.length,p=P.eh(q,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.v(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
hr:function(a){return this.p(a,"")},
hl:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.b0(a))}return s},
hm:function(a,b,c){return this.hl(a,b,c,t.z)},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ghk:function(a){if(a.length>0)return a[0]
throw H.c(H.kT())},
gaE:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.kT())},
b1:function(a,b){if(!!a.immutable$list)H.h(P.x("sort"))
H.nb(a,b==null?J.oc():b)},
e3:function(a){return this.b1(a,null)},
L:function(a,b){var s
for(s=0;s<a.length;++s)if(J.V(a[s],b))return!0
return!1},
i:function(a){return P.k8(a,"[","]")},
gN:function(a){return new J.ac(a,a.length)},
gB:function(a){return H.cY(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.h(P.x("set length"))
if(b>a.length)H.kv(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.ch(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.h(P.x("indexed set"))
if(b>=a.length||b<0)throw H.c(H.ch(a,b))
a[b]=c},
$im:1,
$ik:1,
$ip:1}
J.hW.prototype={}
J.ac.prototype={
gv:function(a){return H.Q(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.r(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bQ.prototype={
ag:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbs(b)
if(this.gbs(a)===s)return 0
if(this.gbs(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbs:function(a){return a===0?1/a<0:a<0},
hR:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.x(""+a+".toInt()"))},
ci:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.x(""+a+".floor()"))},
X:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.x(""+a+".round()"))},
cz:function(a,b){var s
if(b>20)throw H.c(P.a9(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbs(a))return"-"+s
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
bi:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
e7:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d1(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.d1(a,b)},
d1:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.x("Result of truncating division is "+H.v(s)+": "+H.v(a)+" ~/ "+b))},
aP:function(a,b){var s
if(a>0)s=this.d0(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fT:function(a,b){if(b<0)throw H.c(H.dM(b))
return this.d0(a,b)},
d0:function(a,b){return b>31?0:a>>>b},
$iU:1,
$ia2:1}
J.cF.prototype={$ij:1}
J.eb.prototype={}
J.bn.prototype={
T:function(a,b){if(b<0)throw H.c(H.ch(a,b))
if(b>=a.length)H.h(H.ch(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.c(H.ch(a,b))
return a.charCodeAt(b)},
U:function(a,b){return a+b},
aW:function(a,b,c,d){var s=P.b5(b,c,a.length),r=a.substring(0,b),q=a.substring(s)
return r+d+q},
a6:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a9(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a5:function(a,b){return this.a6(a,b,0)},
q:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.eB(b,null))
if(b>c)throw H.c(P.eB(b,null))
if(c>a.length)throw H.c(P.eB(c,null))
return a.substring(b,c)},
ao:function(a,b){return this.q(a,b,null)},
H:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.M)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
aF:function(a,b){var s=b-a.length
if(s<=0)return a
return this.H(" ",s)+a},
br:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a9(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dG:function(a,b){return this.br(a,b,0)},
h9:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.a9(c,0,s,null,null))
return H.m1(a,b,c)},
L:function(a,b){return this.h9(a,b,0)},
ag:function(a,b){var s
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
$iq:1}
H.cH.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.O.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.a.T(this.a,b)}}
H.m.prototype={}
H.bR.prototype={
gv:function(a){return H.Q(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=J.cj(q),o=p.gj(q)
if(r.b!==o)throw H.c(P.b0(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.E(q,s);++r.c
return!0}}
H.aN.prototype={
gN:function(a){return new H.ei(J.aF(this.a),this.b)},
gj:function(a){return J.aY(this.a)},
E:function(a,b){return this.b.$1(J.k4(this.a,b))}}
H.cx.prototype={$im:1}
H.ei.prototype={
t:function(){var s=this,r=s.b
if(r.t()){s.a=s.c.$1(r.gv(r))
return!0}s.a=null
return!1},
gv:function(a){return H.Q(this).Q[1].a(this.a)}}
H.dj.prototype={
gN:function(a){return new H.fg(J.aF(this.a),this.b)}}
H.fg.prototype={
t:function(){var s,r
for(s=this.a,r=this.b;s.t();)if(r.$1(s.gv(s)))return!0
return!1},
gv:function(a){var s=this.a
return s.gv(s)}}
H.cz.prototype={}
H.f9.prototype={
k:function(a,b,c){throw H.c(P.x("Cannot modify an unmodifiable list"))}}
H.c5.prototype={}
H.cr.prototype={
i:function(a){return P.ke(this)},
k:function(a,b,c){H.mE()},
$iF:1}
H.cs.prototype={
gj:function(a){return this.a},
c5:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.c5(0,b))return null
return this.cP(b)},
cP:function(a){return this.b[a]},
C:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.cP(q))}}}
H.iR.prototype={
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
H.cX.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.ed.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.f8.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.iq.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.fV.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bK.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.m4(r==null?"unknown":r)+"'"},
ghW:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iK.prototype={}
H.iG.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.m4(s)+"'"}}
H.cm.prototype={
m:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.cm))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gB:function(a){var s,r=this.c
if(r==null)s=H.cY(this.a)
else s=typeof r!=="object"?J.k5(r):H.cY(r)
return(s^H.cY(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.v(this.d)+"' of "+("Instance of '"+H.cZ(s)+"'")}}
H.eF.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.R.prototype={
gj:function(a){return this.a},
gai:function(a){return new H.cJ(this,H.Q(this).G("cJ<1>"))},
ghV:function(a){var s=this,r=H.Q(s)
return H.mS(s.gai(s),new H.hX(s),r.c,r.Q[1])},
c5:function(a,b){var s=this.b
if(s==null)return!1
return this.es(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bj(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bj(p,b)
q=r==null?n:r.b
return q}else return o.hp(b)},
hp:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.cQ(p,q.dI(a))
r=q.dJ(s,a)
if(r<0)return null
return s[r].b},
k:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cK(s==null?q.b=q.bU():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cK(r==null?q.c=q.bU():r,b,c)}else q.hq(b,c)},
hq:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bU()
s=p.dI(a)
r=p.cQ(o,s)
if(r==null)p.bY(o,s,[p.bV(a,b)])
else{q=p.dJ(r,a)
if(q>=0)r[q].b=b
else r.push(p.bV(a,b))}},
C:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.b0(s))
r=r.c}},
cK:function(a,b,c){var s=this.bj(a,b)
if(s==null)this.bY(a,b,this.bV(b,c))
else s.b=c},
bV:function(a,b){var s=this,r=new H.i_(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
dI:function(a){return J.k5(a)&0x3ffffff},
dJ:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.V(a[r].a,b))return r
return-1},
i:function(a){return P.ke(this)},
bj:function(a,b){return a[b]},
cQ:function(a,b){return a[b]},
bY:function(a,b,c){a[b]=c},
ew:function(a,b){delete a[b]},
es:function(a,b){return this.bj(a,b)!=null},
bU:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bY(r,s,r)
this.ew(r,s)
return r}}
H.hX.prototype={
$1:function(a){var s=this.a
return H.Q(s).Q[1].a(s.h(0,a))},
$S:function(){return H.Q(this.a).G("2(1)")}}
H.i_.prototype={}
H.cJ.prototype={
gj:function(a){return this.a.a},
gN:function(a){var s=this.a,r=new H.eg(s,s.r)
r.c=s.e
return r}}
H.eg.prototype={
gv:function(a){return H.Q(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.b0(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jS.prototype={
$1:function(a){return this.a(a)},
$S:30}
H.jT.prototype={
$2:function(a,b){return this.a(a,b)},
$S:53}
H.jU.prototype={
$1:function(a){return this.a(a)},
$S:50}
H.ec.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$il4:1}
H.cT.prototype={$icT:1}
H.a_.prototype={$ia_:1}
H.bV.prototype={
gj:function(a){return a.length},
$iw:1}
H.bq.prototype={
h:function(a,b){H.aV(b,a,a.length)
return a[b]},
k:function(a,b,c){H.aV(b,a,a.length)
a[b]=c},
$im:1,
$ik:1,
$ip:1}
H.cU.prototype={
k:function(a,b,c){H.aV(b,a,a.length)
a[b]=c},
$im:1,
$ik:1,
$ip:1}
H.eo.prototype={
h:function(a,b){H.aV(b,a,a.length)
return a[b]}}
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
H.cV.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aV(b,a,a.length)
return a[b]}}
H.br.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aV(b,a,a.length)
return a[b]},
$ibr:1,
$ic2:1}
H.dr.prototype={}
H.ds.prototype={}
H.dt.prototype={}
H.du.prototype={}
H.ao.prototype={
G:function(a){return H.h6(v.typeUniverse,this,a)},
b4:function(a){return H.nK(v.typeUniverse,this,a)}}
H.fx.prototype={}
H.ft.prototype={
i:function(a){return this.a}}
H.dC.prototype={}
P.ji.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:45}
P.jh.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:44}
P.jj.prototype={
$0:function(){this.a.$0()},
$S:12}
P.jk.prototype={
$0:function(){this.a.$0()},
$S:12}
P.dB.prototype={
ed:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cg(new P.jx(this,b),0),a)
else throw H.c(P.x("`setTimeout()` not found."))},
ee:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cg(new P.jw(this,a,Date.now(),b),0),a)
else throw H.c(P.x("Periodic timer."))},
$iiN:1}
P.jx.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:2}
P.jw.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.e7(s,o)}q.c=p
r.d.$1(q)},
$S:12}
P.cb.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.v(this.a)+")"}}
P.cc.prototype={
gv:function(a){var s=this.c
if(s==null)return this.b
return s.gv(s)},
t:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.t())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.cb){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aF(s)
if(o instanceof P.cc){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dy.prototype={
gN:function(a){return new P.cc(this.a())}}
P.fh.prototype={}
P.c_.prototype={}
P.eQ.prototype={}
P.jC.prototype={}
P.jL.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:2}
P.jp.prototype={
hN:function(a){var s,r,q,p=null
try{if(C.f===$.aD){a.$0()
return}P.oH(p,p,this,a)}catch(q){s=H.bd(q)
r=H.kC(q)
P.lO(p,p,this,s,r)}},
hO:function(a,b){var s,r,q,p=null
try{if(C.f===$.aD){a.$1(b)
return}P.oI(p,p,this,a,b)}catch(q){s=H.bd(q)
r=H.kC(q)
P.lO(p,p,this,s,r)}},
hP:function(a,b){return this.hO(a,b,t.z)},
h6:function(a){return new P.jq(this,a)},
de:function(a,b){return new P.jr(this,a,b)}}
P.jq.prototype={
$0:function(){return this.a.hN(this.b)},
$S:2}
P.jr.prototype={
$1:function(a){return this.a.hP(this.b,a)},
$S:function(){return this.c.G("~(0)")}}
P.dm.prototype={
gN:function(a){var s=new P.dn(this,this.r)
s.c=this.e
return s},
gj:function(a){return this.a},
L:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.ep(b)
return r}},
ep:function(a){var s=this.d
if(s==null)return!1
return this.bL(s[this.bH(a)],a)>=0},
l:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cL(s==null?q.b=P.kk():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cL(r==null?q.c=P.kk():r,b)}else return q.eh(0,b)},
eh:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.kk()
s=q.bH(b)
r=p[s]
if(r==null)p[s]=[q.bG(b)]
else{if(q.bL(r,b)>=0)return!1
r.push(q.bG(b))}return!0},
K:function(a,b){if((b&1073741823)===b)return this.fF(this.c,b)
else return this.fE(0,b)},
fE:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bH(b)
r=n[s]
q=o.bL(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.d3(p)
return!0},
cL:function(a,b){if(a[b]!=null)return!1
a[b]=this.bG(b)
return!0},
fF:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.d3(s)
delete a[b]
return!0},
cS:function(){this.r=this.r+1&1073741823},
bG:function(a){var s,r=this,q=new P.jo(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cS()
return q},
d3:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cS()},
bH:function(a){return J.k5(a)&1073741823},
bL:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.V(a[r].a,b))return r
return-1}}
P.jo.prototype={}
P.dn.prototype={
gv:function(a){return H.Q(this).c.a(this.d)},
t:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.b0(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cE.prototype={}
P.i0.prototype={
$2:function(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:9}
P.cK.prototype={$im:1,$ik:1,$ip:1}
P.i.prototype={
gN:function(a){return new H.bR(a,this.gj(a))},
E:function(a,b){return this.h(a,b)},
C:function(a,b){var s,r=this.gj(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gj(a))throw H.c(P.b0(a))}},
gdL:function(a){return this.gj(a)===0},
hT:function(a,b){var s,r,q,p,o=this
if(o.gdL(a)){s=J.k9(0,H.aW(a).G("i.E"))
return s}r=o.h(a,0)
q=P.eh(o.gj(a),r,!0,H.aW(a).G("i.E"))
for(p=1;p<o.gj(a);++p){s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
hS:function(a){return this.hT(a,!0)},
hi:function(a,b,c,d){var s
H.aW(a).G("i.E").a(d)
P.b5(b,c,this.gj(a))
for(s=b;s<c;++s)this.k(a,s,d)},
i:function(a){return P.k8(a,"[","]")}}
P.cM.prototype={}
P.i4.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.v(a)
r.a=s+": "
r.a+=H.v(b)},
$S:43}
P.K.prototype={
C:function(a,b){var s,r,q
for(s=J.aF(this.gai(a)),r=H.aW(a).G("K.V");s.t();){q=s.gv(s)
b.$2(q,r.a(this.h(a,q)))}},
gj:function(a){return J.aY(this.gai(a))},
i:function(a){return P.ke(a)},
$iF:1}
P.h7.prototype={
k:function(a,b,c){throw H.c(P.x("Cannot modify unmodifiable map"))}}
P.cN.prototype={
h:function(a,b){return J.kJ(this.a,b)},
k:function(a,b,c){J.k3(this.a,b,c)},
C:function(a,b){J.dR(this.a,b)},
gj:function(a){return J.aY(this.a)},
i:function(a){return J.dS(this.a)},
$iF:1}
P.c6.prototype={}
P.d0.prototype={
i:function(a){return P.k8(this,"{","}")},
E:function(a,b){var s,r,q,p,o="index"
H.oU(b,o,t.S)
P.l3(b,o)
for(s=P.nu(this,this.r),r=H.Q(s).c,q=0;s.t();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.J(b,this,o,null,q))}}
P.dv.prototype={$im:1,$ik:1}
P.dp.prototype={}
P.dF.prototype={}
P.dH.prototype={}
P.j4.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.bd(r)}return null},
$S:24}
P.j3.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.bd(r)}return null},
$S:24}
P.hq.prototype={
hv:function(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a4=P.b5(a3,a4,a2.length)
s=$.mn()
for(r=s.length,q=a3,p=q,o=null,n=-1,m=-1,l=0;q<a4;q=k){k=q+1
j=C.a.D(a2,q)
if(j===37){i=k+2
if(i<=a4){h=H.jR(C.a.D(a2,k))
g=H.jR(C.a.D(a2,k+1))
f=h*16+g-(g&256)
if(f===37)f=-1
k=i}else f=-1}else f=j
if(0<=f&&f<=127){if(f<0||f>=r)return H.d(s,f)
e=s[f]
if(e>=0){f=C.a.T("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e)
if(f===j)continue
j=f}else{if(e===-1){if(n<0){d=o==null?null:o.a.length
if(d==null)d=0
n=d+(q-p)
m=q}++l
if(j===61)continue}j=f}if(e!==-2){if(o==null){o=new P.a0("")
d=o}else d=o
c=d.a+=C.a.q(a2,p,q)
d.a=c+H.aR(j)
p=k
continue}}throw H.c(P.a6("Invalid base64 data",a2,q))}if(o!=null){r=o.a+=C.a.q(a2,p,a4)
d=r.length
if(n>=0)P.kK(a2,m,a4,n,l,d)
else{b=C.c.bi(d-1,4)+1
if(b===1)throw H.c(P.a6(a0,a2,a4))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return C.a.aW(a2,a3,a4,r.charCodeAt(0)==0?r:r)}a=a4-a3
if(n>=0)P.kK(a2,m,a4,n,l,a)
else{b=C.c.bi(a,4)
if(b===1)throw H.c(P.a6(a0,a2,a4))
if(b>1)a2=C.a.aW(a2,a4,a4,b===2?"==":"=")}return a2}}
P.hr.prototype={}
P.e_.prototype={}
P.e1.prototype={}
P.hJ.prototype={}
P.j1.prototype={
ghh:function(){return C.N}}
P.j5.prototype={
c6:function(a){var s,r,q,p=P.b5(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.jB(r)
if(q.ey(a,0,p)!==p){C.a.T(a,p-1)
q.c0()}return new Uint8Array(r.subarray(0,H.o3(0,q.b,s)))}}
P.jB.prototype={
c0:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
h0:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.c0()
return!1}},
ey:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.T(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.D(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.h0(p,C.a.D(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.c0()}else if(p<=2047){o=l.b
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
P.j2.prototype={
c6:function(a){var s=this.a,r=P.nk(s,a,0,null)
if(r!=null)return r
return new P.jA(s).ha(a,0,null,!0)}}
P.jA.prototype={
ha:function(a,b,c,d){var s,r,q,p,o=this,n=P.b5(b,c,J.aY(a))
if(b===n)return""
s=P.nZ(a,b,n)
r=o.bI(s,0,n-b,!0)
q=o.b
if((q&1)!==0){p=P.o_(q)
o.b=0
throw H.c(P.a6(p,a,b+o.c))}return r},
bI:function(a,b,c,d){var s,r,q=this
if(c-b>1000){s=C.c.a0(b+c,2)
r=q.bI(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bI(a,s,c,d)}return q.hd(a,b,c,d)},
hd:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.a0(""),f=b+1,e=a.length
if(b<0||b>=e)return H.d(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.D("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.D(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
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
g.a+=H.aR(a[l])}else g.a+=P.eS(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.aR(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.X.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.X&&this.a===b.a&&!0},
ag:function(a,b){return C.c.ag(this.a,b.a)},
gB:function(a){var s=this.a
return(s^C.c.aP(s,30))&1073741823},
i:function(a){var s=this,r=P.mF(H.n2(s)),q=P.e3(H.n0(s)),p=P.e3(H.mX(s)),o=P.e3(H.mY(s)),n=P.e3(H.n_(s)),m=P.e3(H.n1(s)),l=P.mG(H.mZ(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bj.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.bj&&this.a===b.a},
gB:function(a){return C.c.gB(this.a)},
ag:function(a,b){return C.c.ag(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hH(),o=this.a
if(o<0)return"-"+new P.bj(0-o).i(0)
s=p.$1(C.c.a0(o,6e7)%60)
r=p.$1(C.c.a0(o,1e6)%60)
q=new P.hG().$1(o%1e6)
return""+C.c.a0(o,36e8)+":"+s+":"+r+"."+q}}
P.hG.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:15}
P.hH.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:15}
P.H.prototype={}
P.dW.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.hM(s)
return"Assertion failed"}}
P.f1.prototype={}
P.et.prototype={
i:function(a){return"Throw of null."}}
P.aG.prototype={
gbK:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbJ:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbK()+o+m
if(!q.a)return l
s=q.gbJ()
r=P.hM(q.b)
return l+s+": "+r}}
P.d_.prototype={
gbK:function(){return"RangeError"},
gbJ:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.v(q):""
else if(q==null)s=": Not greater than or equal to "+H.v(r)
else if(q>r)s=": Not in inclusive range "+H.v(r)+".."+H.v(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.v(r)
return s}}
P.e8.prototype={
gbK:function(){return"RangeError"},
gbJ:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj:function(a){return this.f}}
P.fa.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.f7.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.eO.prototype={
i:function(a){return"Bad state: "+this.a}}
P.e0.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hM(s)+"."}}
P.ew.prototype={
i:function(a){return"Out of Memory"},
$iH:1}
P.d1.prototype={
i:function(a){return"Stack Overflow"},
$iH:1}
P.e2.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.fu.prototype={
i:function(a){return"Exception: "+this.a}}
P.hS.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.q(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.D(d,o)
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
return f+j+h+i+"\n"+C.a.H(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.v(e)+")"):f}}
P.k.prototype={
gj:function(a){var s,r=this.gN(this)
for(s=0;r.t();)++s
return s},
E:function(a,b){var s,r,q
P.l3(b,"index")
for(s=this.gN(this),r=0;s.t();){q=s.gv(s)
if(b===r)return q;++r}throw H.c(P.J(b,this,"index",null,r))},
i:function(a){return P.mJ(this,"(",")")}}
P.e9.prototype={}
P.ae.prototype={
gB:function(a){return P.L.prototype.gB.call(C.Q,this)},
i:function(a){return"null"}}
P.L.prototype={constructor:P.L,$iL:1,
m:function(a,b){return this===b},
gB:function(a){return H.cY(this)},
i:function(a){return"Instance of '"+H.cZ(this)+"'"},
toString:function(){return this.i(this)}}
P.a0.prototype={
gj:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.j_.prototype={
$2:function(a,b){var s,r,q,p=C.a.dG(b,"=")
if(p===-1){if(b!=="")J.k3(a,P.kt(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.q(b,0,p)
r=C.a.ao(b,p+1)
q=this.a
J.k3(a,P.kt(s,0,s.length,q,!0),P.kt(r,0,r.length,q,!0))}return a},
$S:39}
P.iX.prototype={
$2:function(a,b){throw H.c(P.a6("Illegal IPv4 address, "+a,this.a,b))},
$S:38}
P.iY.prototype={
$2:function(a,b){throw H.c(P.a6("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:37}
P.iZ.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.jV(C.a.q(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:35}
P.bA.prototype={
gc_:function(){var s,r,q,p=this,o=p.x
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
else o=H.h(H.kd("_text"))}return o},
gB:function(a){var s=this,r=s.z
if(r==null){r=C.a.gB(s.gc_())
if(s.z==null)s.z=r
else r=H.h(H.kd("hashCode"))}return r},
gcs:function(){var s=this,r=s.Q
if(r==null){r=s.f
r=new P.c6(P.lk(r==null?"":r),t.r)
if(s.Q==null)s.Q=r
else r=H.h(H.kd("queryParameters"))}return r},
ge_:function(){return this.b},
gcj:function(a){var s=this.c
if(s==null)return""
if(C.a.a5(s,"["))return C.a.q(s,1,s.length-1)
return s},
gbw:function(a){var s=this.d
return s==null?P.lC(this.a):s},
gcr:function(a){var s=this.f
return s==null?"":s},
gdB:function(){var s=this.r
return s==null?"":s},
dW:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a5(s,"/"))s="/"+s
q=s
p=P.kr(null,0,0,b)
return new P.bA(n,l,j,k,q,p,o.r)},
gdC:function(){return this.c!=null},
gdF:function(){return this.f!=null},
gdD:function(){return this.r!=null},
i:function(a){return this.gc_()},
m:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.x.b(b))if(q.a===b.gbB())if(q.c!=null===b.gdC())if(q.b===b.ge_())if(q.gcj(q)===b.gcj(b))if(q.gbw(q)===b.gbw(b))if(q.e===b.gdU(b)){s=q.f
r=s==null
if(!r===b.gdF()){if(r)s=""
if(s===b.gcr(b)){s=q.r
r=s==null
if(!r===b.gdD()){if(r)s=""
s=s===b.gdB()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
$ifb:1,
gbB:function(){return this.a},
gdU:function(a){return this.e}}
P.jz.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=P.ku(C.h,a,C.e,!0)
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=P.ku(C.h,b,C.e,!0)}},
$S:33}
P.jy.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.aF(b),r=this.a;s.t();)r.$2(a,s.gv(s))},
$S:5}
P.iW.prototype={
gdZ:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.d(m,0)
s=o.a
m=m[0]+1
r=C.a.br(s,"?",m)
q=s.length
if(r>=0){p=P.dG(s,r+1,q,C.k,!1)
q=r}else p=n
m=o.c=new P.fn("data","",n,n,P.dG(s,m,q,C.y,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.jE.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.d(s,a)
s=s[a]
C.W.hi(s,0,96,b)
return s},
$S:31}
P.jF.prototype={
$3:function(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=C.a.D(b,r)^96
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:23}
P.jG.prototype={
$3:function(a,b,c){var s,r,q
for(s=C.a.D(b,0),r=C.a.D(b,1);s<=r;++s){q=(s^96)>>>0
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:23}
P.fP.prototype={
gdC:function(){return this.c>0},
gdE:function(){return this.c>0&&this.d+1<this.e},
gdF:function(){return this.f<this.r},
gdD:function(){return this.r<this.a.length},
gbB:function(){var s=this.x
return s==null?this.x=this.eq():s},
eq:function(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&C.a.a5(r.a,"http"))return"http"
if(q===5&&C.a.a5(r.a,"https"))return"https"
if(s&&C.a.a5(r.a,"file"))return"file"
if(q===7&&C.a.a5(r.a,"package"))return"package"
return C.a.q(r.a,0,q)},
ge_:function(){var s=this.c,r=this.b+3
return s>r?C.a.q(this.a,r,s-1):""},
gcj:function(a){var s=this.c
return s>0?C.a.q(this.a,s,this.d):""},
gbw:function(a){var s,r=this
if(r.gdE())return P.jV(C.a.q(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&C.a.a5(r.a,"http"))return 80
if(s===5&&C.a.a5(r.a,"https"))return 443
return 0},
gdU:function(a){return C.a.q(this.a,this.e,this.f)},
gcr:function(a){var s=this.f,r=this.r
return s<r?C.a.q(this.a,s+1,r):""},
gdB:function(){var s=this.r,r=this.a
return s<r.length?C.a.ao(r,s+1):""},
gcs:function(){var s=this
if(s.f>=s.r)return C.V
return new P.c6(P.lk(s.gcr(s)),t.r)},
dW:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbB(),k=l==="file",j=n.c,i=j>0?C.a.q(n.a,n.b+3,j):"",h=n.gdE()?n.gbw(n):m
j=n.c
if(j>0)s=C.a.q(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.q(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a5(r,"/"))r="/"+r
p=P.kr(m,0,0,b)
q=n.r
o=q<j.length?C.a.ao(j,q+1):m
return new P.bA(l,i,s,h,r,p,o)},
gB:function(a){var s=this.y
return s==null?this.y=C.a.gB(this.a):s},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.x.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifb:1}
P.fn.prototype={}
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
W.bh.prototype={$ibh:1}
W.bi.prototype={
e0:function(a,b,c){var s=a.getContext(b,P.lT(c))
return s},
$ibi:1}
W.at.prototype={
gj:function(a){return a.length}}
W.hz.prototype={
gj:function(a){return a.length}}
W.E.prototype={$iE:1}
W.cu.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.hA.prototype={}
W.am.prototype={}
W.aI.prototype={}
W.hB.prototype={
gj:function(a){return a.length}}
W.hC.prototype={
gj:function(a){return a.length}}
W.hD.prototype={
gj:function(a){return a.length}}
W.hE.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cv.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$iw:1,
$ik:1,
$ip:1}
W.cw.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.v(r)+", "
s=a.top
s.toString
return r+H.v(s)+") "+H.v(this.gal(a))+" x "+H.v(this.gah(a))},
m:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.bD(b)
if(s===r.gbt(b)){s=a.top
s.toString
s=s===r.gby(b)&&this.gal(a)===r.gal(b)&&this.gah(a)===r.gah(b)}else s=!1}else s=!1
return s},
gB:function(a){var s,r=a.left
r.toString
r=C.d.gB(r)
s=a.top
s.toString
return W.lu(r,C.d.gB(s),C.d.gB(this.gal(a)),C.d.gB(this.gah(a)))},
gdf:function(a){var s=a.bottom
s.toString
return s},
gcR:function(a){return a.height},
gah:function(a){var s=this.gcR(a)
s.toString
return s},
gbt:function(a){var s=a.left
s.toString
return s},
gcw:function(a){var s=a.right
s.toString
return s},
gby:function(a){var s=a.top
s.toString
return s},
gd5:function(a){return a.width},
gal:function(a){var s=this.gd5(a)
s.toString
return s},
$iab:1}
W.e4.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$iw:1,
$ik:1,
$ip:1}
W.hF.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.fk.prototype={
gdL:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
k:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b]).toString},
l:function(a,b){this.a.appendChild(b).toString
return b},
gN:function(a){var s=this.hS(this)
return new J.ac(s,s.length)}}
W.C.prototype={
gbo:function(a){var s=a.children
s.toString
return new W.fk(a,s)},
gdi:function(a){var s,r,q,p=a.clientLeft
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
$iC:1}
W.l.prototype={$il:1}
W.e.prototype={
h2:function(a,b,c,d){if(c!=null)this.ej(a,b,c,!1)},
ej:function(a,b,c,d){return a.addEventListener(b,H.cg(c,1),!1)},
$ie:1}
W.ai.prototype={$iai:1}
W.bN.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$iw:1,
$ik:1,
$ip:1,
$ibN:1}
W.e5.prototype={
gj:function(a){return a.length}}
W.e7.prototype={
gj:function(a){return a.length}}
W.aw.prototype={$iaw:1}
W.hU.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.bm.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$iw:1,
$ik:1,
$ip:1}
W.cC.prototype={$icC:1}
W.bP.prototype={$ibP:1}
W.bo.prototype={$ibo:1}
W.i2.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.ik.prototype={
gj:function(a){return a.length}}
W.bS.prototype={$ibS:1}
W.el.prototype={
h:function(a,b){return P.bc(a.get(b))},
C:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bc(s.value[1]))}},
gai:function(a){var s=H.b([],t.s)
this.C(a,new W.il(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Not supported"))},
$iF:1}
W.il.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.em.prototype={
h:function(a,b){return P.bc(a.get(b))},
C:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bc(s.value[1]))}},
gai:function(a){var s=H.b([],t.s)
this.C(a,new W.im(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Not supported"))},
$iF:1}
W.im.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.ay.prototype={$iay:1}
W.en.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$iw:1,
$ik:1,
$ip:1}
W.aj.prototype={$iaj:1}
W.fj.prototype={
k:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b]).toString},
gN:function(a){var s=this.a.childNodes
return new W.cA(s,s.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.u.prototype={
hL:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.mq(s,b,a)}catch(q){H.bd(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.e5(a):s},
fJ:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$iu:1}
W.cW.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$iw:1,
$ik:1,
$ip:1}
W.az.prototype={
gj:function(a){return a.length},
$iaz:1}
W.ez.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$iw:1,
$ik:1,
$ip:1}
W.eE.prototype={
h:function(a,b){return P.bc(a.get(b))},
C:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bc(s.value[1]))}},
gai:function(a){var s=H.b([],t.s)
this.C(a,new W.iy(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Not supported"))},
$iF:1}
W.iy.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.eG.prototype={
gj:function(a){return a.length}}
W.ap.prototype={$iap:1}
W.eK.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$iw:1,
$ik:1,
$ip:1}
W.aB.prototype={$iaB:1}
W.eL.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$iw:1,
$ik:1,
$ip:1}
W.aC.prototype={
gj:function(a){return a.length},
$iaC:1}
W.eP.prototype={
h:function(a,b){return a.getItem(H.o1(b))},
k:function(a,b,c){a.setItem(b,c)},
C:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gai:function(a){var s=H.b([],t.s)
this.C(a,new W.iH(s))
return s},
gj:function(a){var s=a.length
s.toString
return s},
$iF:1}
W.iH.prototype={
$2:function(a,b){return this.a.push(a)},
$S:29}
W.ak.prototype={$iak:1}
W.b7.prototype={$ib7:1}
W.aq.prototype={$iaq:1}
W.af.prototype={$iaf:1}
W.eT.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$iw:1,
$ik:1,
$ip:1}
W.eU.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$iw:1,
$ik:1,
$ip:1}
W.iM.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.ar.prototype={$iar:1}
W.bu.prototype={$ibu:1}
W.f_.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$iw:1,
$ik:1,
$ip:1}
W.iQ.prototype={
gj:function(a){return a.length}}
W.aU.prototype={}
W.j0.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.fd.prototype={
gj:function(a){return a.length}}
W.b8.prototype={
ghf:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.x("deltaY is not supported"))},
ghe:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.x("deltaX is not supported"))},
$ib8:1}
W.ca.prototype={
fK:function(a,b){var s=a.requestAnimationFrame(H.cg(b,1))
s.toString
return s},
ex:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.fl.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$iw:1,
$ik:1,
$ip:1}
W.dk.prototype={
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
if(t.q.b(b)){s=a.left
s.toString
r=J.bD(b)
if(s===r.gbt(b)){s=a.top
s.toString
if(s===r.gby(b)){s=a.width
s.toString
if(s===r.gal(b)){s=a.height
s.toString
r=s===r.gah(b)
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
return W.lu(p,s,r,C.d.gB(q))},
gcR:function(a){return a.height},
gah:function(a){var s=a.height
s.toString
return s},
gd5:function(a){return a.width},
gal:function(a){var s=a.width
s.toString
return s}}
W.fy.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$iw:1,
$ik:1,
$ip:1}
W.dq.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$iw:1,
$ik:1,
$ip:1}
W.fS.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$iw:1,
$ik:1,
$ip:1}
W.fZ.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$im:1,
$iw:1,
$ik:1,
$ip:1}
W.k6.prototype={}
W.dl.prototype={
h_:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.mr(s,this.c,r,!1)}}}
W.jl.prototype={
$1:function(a){return this.a.$1(a)},
$S:4}
W.kj.prototype={}
W.I.prototype={
gN:function(a){return new W.cA(a,this.gj(a))}}
W.cA.prototype={
t:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.kJ(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gv:function(a){return H.Q(this).c.a(this.d)}}
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
P.js.prototype={
cg:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bA:function(a){var s,r,q,p,o,n=this,m={}
if(a==null)return a
if(H.jH(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.X)return new Date(a.a)
if(t.fJ.b(a))throw H.c(P.iV("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.fK.b(a))return a
if(t.bX.b(a))return a
if(t.gb.b(a))return a
if(t.cH.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.f.b(a)){s=n.cg(a)
r=n.b
q=r.length
if(s>=q)return H.d(r,s)
p=m.a=r[s]
if(p!=null)return p
p={}
m.a=p
if(s>=q)return H.d(r,s)
r[s]=p
J.dR(a,new P.ju(m,n))
return m.a}if(t.c.b(a)){s=n.cg(a)
m=n.b
if(s>=m.length)return H.d(m,s)
p=m[s]
if(p!=null)return p
return n.hb(a,s)}if(t.eH.b(a)){s=n.cg(a)
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
n.hn(a,new P.jv(m,n))
return m.b}throw H.c(P.iV("structured clone of other type"))},
hb:function(a,b){var s,r,q=J.cj(a),p=q.gj(a),o=new Array(p)
o.toString
s=this.b
if(b>=s.length)return H.d(s,b)
s[b]=o
for(r=0;r<p;++r){s=this.bA(q.h(a,r))
if(r>=o.length)return H.d(o,r)
o[r]=s}return o}}
P.ju.prototype={
$2:function(a,b){this.a.a[a]=this.b.bA(b)},
$S:9}
P.jv.prototype={
$2:function(a,b){this.a.b[a]=this.b.bA(b)},
$S:27}
P.jD.prototype={
$1:function(a){this.a.push(P.lK(a))},
$S:26}
P.jM.prototype={
$2:function(a,b){this.a[a]=P.lK(b)},
$S:9}
P.jt.prototype={
hn:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
b.$2(p,a[p])}}}
P.e6.prototype={
gb6:function(){var s=this.b,r=H.Q(s)
return new H.aN(new H.dj(s,new P.hQ(),r.G("dj<i.E>")),new P.hR(),r.G("aN<i.E,C>"))},
C:function(a,b){C.b.C(P.i1(this.gb6(),!1,t.h),b)},
k:function(a,b,c){var s=this.gb6()
J.mu(s.b.$1(J.k4(s.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b).toString},
gj:function(a){return J.aY(this.gb6().a)},
h:function(a,b){var s=this.gb6()
return s.b.$1(J.k4(s.a,b))},
gN:function(a){var s=P.i1(this.gb6(),!1,t.h)
return new J.ac(s,s.length)}}
P.hQ.prototype={
$1:function(a){return t.h.b(a)},
$S:25}
P.hR.prototype={
$1:function(a){return t.h.a(a)},
$S:54}
P.fN.prototype={
gcw:function(a){return this.$ti.c.a(this.a+this.c)},
gdf:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
m:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.bD(b)
if(s===r.gbt(b)){q=o.b
if(q===r.gby(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gcw(b)&&p.a(q+o.d)===r.gdf(b)}else s=!1}else s=!1}else s=!1
return s},
gB:function(a){var s=this,r=s.a,q=C.c.gB(r),p=s.b,o=C.c.gB(p),n=s.$ti.c
r=C.c.gB(n.a(r+s.c))
p=C.c.gB(n.a(p+s.d))
return H.ne(H.iI(H.iI(H.iI(H.iI(0,q),o),r),p))}}
P.ab.prototype={
gbt:function(a){return this.a},
gby:function(a){return this.b},
gal:function(a){return this.c},
gah:function(a){return this.d}}
P.aM.prototype={$iaM:1}
P.ef.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.aP.prototype={$iaP:1}
P.eu.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.ir.prototype={
gj:function(a){return a.length}}
P.eR.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.n.prototype={
gbo:function(a){return new P.e6(a,new W.fj(a))}}
P.aS.prototype={$iaS:1}
P.f0.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
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
gj:function(a){return a.length}}
P.dY.prototype={
h:function(a,b){return P.bc(a.get(b))},
C:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bc(s.value[1]))}},
gai:function(a){var s=H.b([],t.s)
this.C(a,new P.ho(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Not supported"))},
$iF:1}
P.ho.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
P.dZ.prototype={
gj:function(a){return a.length}}
P.b_.prototype={}
P.ev.prototype={
gj:function(a){return a.length}}
P.fi.prototype={}
P.bY.prototype={
hQ:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g,h,i,j)
return},
$ibY:1}
P.eM.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=P.bc(a.item(b))
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.fT.prototype={}
P.fU.prototype={}
K.dT.prototype={
aV:function(a,b){return!0},
i:function(a){return"all"},
$ibp:1}
K.cB.prototype={
aV:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)if(s[q].aV(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.r)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q},
$ibp:1}
K.aO.prototype={
aV:function(a,b){return!this.e4(0,b)},
i:function(a){return"!["+this.bE(0)+"]"}}
K.Y.prototype={
Y:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.f("May not create a Set with zero characters."))
s=new H.R(t.fX)
for(r=new H.bR(a,a.gj(a)),q=H.Q(r).c;r.t();)s.k(0,q.a(r.d),!0)
p=P.i1(s.gai(s),!0,t.S)
C.b.e3(p)
this.a=p},
aV:function(a,b){return C.b.L(this.a,b)},
i:function(a){return P.eS(this.a,0,null)},
$ibp:1}
L.eN.prototype={
p:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.d5(this.a.J(0,b),H.b([],t.B))
s.push(p)
return p},
hj:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
if(p.aV(0,a))return p}return null},
i:function(a){return this.b},
d2:function(){var s,r,q,p,o,n=this,m=""+("("+n.b+")"),l=n.d
if(l!=null){m+=" => ["+l.b+"]"
l=n.a.c
s=n.d
if(l.L(0,s==null?null:s.b))m+=" (consume)"
s=n.d
if(s==null)s=null
else{s=s.c
s=s.gai(s)}s=J.aF(s==null?H.b([],t.s):s)
for(;s.t();){r=s.gv(s)
m+="\n"
q=n.d
if(q!=null)q.c.h(0,r)
m+="  -- "+r+" => []"
if(l.L(0,""))m+=" (consume)"}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.r)(l),++p){o=l[p]
m+="\n"
m+="  -- "+(o.b.b+": "+o.bE(0))}return m.charCodeAt(0)==0?m:m}}
L.eY.prototype={
i:function(a){var s=H.m2(this.b,"\n","\\n"),r=H.m2(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.eZ.prototype={
i:function(a){return this.b}}
L.iO.prototype={
J:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.eN(this,b,H.b([],t.ab))
s.k(0,b,r)}return r},
bg:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.eZ(a,P.P(s,s))
r.k(0,a,q)}return q},
dY:function(a){return this.hU(a)},
hU:function(a){var s=this
return P.ok(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$dY(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.t
b=H.b([],c)
a0=H.b([],c)
a1=H.b([],c)
n=H.Q(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a1.length!==0)h=C.b.ct(a1,0)
else{if(!r.t()){q=3
break}h=n.a(r.d)}a0.push(h);++k
g=d==null
f=g?null:d.hj(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.eS(a0,0,null)
throw H.c(P.f("Untokenizable string [state: "+H.v(g?null:d.b)+", index "+k+']: "'+e+'"'))}if(!!a0.fixed$length)H.h(P.x("removeRange"))
P.b5(0,i,a0.length)
a0.splice(0,i-0)
C.b.bl(a1,a0)
a0=H.b([],c)
b=H.b([],c)
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
case 6:if(!f.c)b.push(h)
d=f.b
g=d.d
if(g!=null){e=P.eS(b,0,null)
g=d.d
if(g==null)l=null
else{g.c.h(0,e)
g=g.b
g=new L.eY(g,e,k)
l=g}i=a0.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.L(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.ns()
case 1:return P.nt(o)}}},t.bJ)},
i:function(a){var s,r=new P.a0(""),q=this.d
if(q!=null)r.a=""+(q.d2()+"\n")
for(q=this.a,q=q.ghV(q),q=q.gN(q);q.t();){s=q.gv(q)
if(s!=this.d)r.a+=H.v(s==null?null:s.d2())+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.d5.prototype={
i:function(a){return this.b.b+": "+this.bE(0)}}
O.a5.prototype={
cC:function(a,b,c){this.b=b
this.c=a},
aI:function(a,b){return this.cC(a,null,b)},
bW:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
cG:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gj:function(a){return this.a.length},
gN:function(a){var s=this.a
return new J.ac(s,s.length)},
E:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
l:function(a,b){var s,r,q=this,p=H.Q(q).G("t<a5.T>")
if(q.bW(H.b([b],p))){s=q.a
r=s.length
s.push(b)
q.cG(r,H.b([b],p))}},
bl:function(a,b){var s,r
if(this.bW(b)){s=this.a
r=s.length
C.b.bl(s,b)
this.cG(r,b)}},
$ik:1}
O.cS.prototype={
gj:function(a){return this.a.length},
gn:function(){var s=this.b
return s==null?this.b=D.D():s},
aK:function(){var s=this.b
return s==null?null:s.w(null)},
ga2:function(a){var s=this.a
if(s.length>0)return C.b.gaE(s)
else return V.ad()},
bx:function(a){this.a.push(a)
this.aK()},
bd:function(){var s=this.a
if(s.length>0){s.pop()
this.aK()}}}
E.hs.prototype={}
E.bk.prototype={
sbC:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gn().K(0,s.gdS())
if(b!=null)b.gn().l(0,s.gdS())
s.bu(new D.y("shape",r,b))}},
ap:function(a,b){var s,r
for(s=this.y.a,s=new J.ac(s,s.length),r=H.Q(s).c;s.t();)r.a(s.d).ap(0,b)},
ac:function(a){var s,r,q,p=this,o=a.dx
o.a.push(o.ga2(o))
o.aK()
a.cq(p.f)
s=C.b.gaE(a.dy)
if(p.d!=null)if(s!=null)s.dV(a,p)
for(r=p.y.a,r=new J.ac(r,r.length),q=H.Q(r).c;r.t();)q.a(r.d).ac(a)
a.cp()
o.bd()},
bu:function(a){var s=this.z
return s==null?null:s.w(a)},
ab:function(){return this.bu(null)},
dT:function(a){this.e=null
this.bu(a)},
hB:function(){return this.dT(null)},
dR:function(a){return this.bu(a)},
hy:function(){return this.dR(null)},
hx:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gdQ(),q=t.a,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bl()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.ab()},
hA:function(a,b){var s,r
for(s=b.gN(b),r=this.gdQ();s.t();)s.gv(s).gn().K(0,r)
this.ab()},
i:function(a){return"Unnamed entity"}}
E.bH.prototype={
i:function(a){return this.b}}
E.bW.prototype={
i:function(a){return this.b}}
E.fs.prototype={}
E.iu.prototype={
e9:function(a,b){var s=this
s.cy.gn().l(0,new E.iv(s))
s.db.gn().l(0,new E.iw(s))
s.dx.gn().l(0,new E.ix(s))},
ghI:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.ga2(q).H(0,s.ga2(s))
q=s}return q},
cq:function(a){var s=this.dy
return s.push(a==null?C.b.gaE(s):a)},
cp:function(){var s=this.dy
if(s.length>1)s.pop()},
d8:function(a){var s,r=a.b
if(r.length===0)throw H.c(P.f("May not cache a shader with no name."))
s=this.fr
if(s.c5(0,r))throw H.c(P.f('Shader cache already contains a shader by the name "'+r+'".'))
s.k(0,r,a)}}
E.iv.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:1}
E.iw.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:1}
E.ix.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:1}
E.eX.prototype={
cJ:function(a){this.dX()},
cI:function(){return this.cJ(null)},
gho:function(){var s,r=this,q=Date.now(),p=C.c.a0(P.kQ(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.X(q,!1)
return s/p},
cX:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.ci(r*o)
r=s.clientHeight
r.toString
p=C.d.ci(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.le(C.o,this.ghM())}},
dX:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.C.ex(s)
r=W.lQ(new E.iL(this),t.H)
r.toString
C.C.fK(s,r)}},
hK:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cX()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.X(p,!1)
q.y=P.kQ(p-q.r.a).a*0.000001
p=q.cy
C.b.sj(p.a,0)
p.aK()
p=q.db
C.b.sj(p.a,0)
p.aK()
p=q.dx
C.b.sj(p.a,0)
p.aK()
p=q.dy
C.b.sj(p,0)
p.push(null)
m.ac(q)}}catch(o){s=H.bd(o)
r=H.kC(o)
P.kG("Error: "+H.v(s))
P.kG("Stack: "+H.v(r))
throw H.c(s)}}}
E.iL.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hK()}},
$S:28}
Z.fe.prototype={}
Z.bI.prototype={
a8:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.bd(q)
r=P.f('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.v(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.ff.prototype={}
Z.bJ.prototype={
aD:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
a8:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].a8(a)}},
aY:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
ac:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=t.s,l=H.b([],m)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
l.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.cZ(p.c)+"'")+"]")}o=H.b([],m)
for(m=this.c,s=m.length,q=0;q<m.length;m.length===s||(0,H.r)(m),++q){n=m[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.p(l,", ")+"\nAttrs:   "+C.b.p(o,", ")}}
Z.cD.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cZ(this.c)+"'")+"]"}}
Z.bz.prototype={
gcD:function(a){var s=this.a,r=(s&$.aE().a)!==0?3:0
if((s&$.bg().a)!==0)r+=3
if((s&$.bf().a)!==0)r+=3
if((s&$.bF().a)!==0)r+=2
if((s&$.bG().a)!==0)r+=3
if((s&$.dP().a)!==0)r+=3
if((s&$.dQ().a)!==0)r+=4
if((s&$.ck().a)!==0)++r
return(s&$.be().a)!==0?r+4:r},
h5:function(a){var s,r=$.aE(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bg()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bf()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bF()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bG()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dP()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dQ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ck()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.be()
if((q&r.a)!==0)if(s===a)return r
return $.mm()},
m:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bz))return!1
return this.a===b.a},
i:function(a){var s=H.b([],t.s),r=this.a
if((r&$.aE().a)!==0)s.push("Pos")
if((r&$.bg().a)!==0)s.push("Norm")
if((r&$.bf().a)!==0)s.push("Binm")
if((r&$.bF().a)!==0)s.push("Txt2D")
if((r&$.bG().a)!==0)s.push("TxtCube")
if((r&$.dP().a)!==0)s.push("Clr3")
if((r&$.dQ().a)!==0)s.push("Clr4")
if((r&$.ck().a)!==0)s.push("Weight")
if((r&$.be().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.p(s,"|")}}
D.hu.prototype={}
D.bl.prototype={
l:function(a,b){var s=this.a
return(s==null?this.a=H.b([],t.a):s).push(b)},
K:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.b.L(p,b)
if(p===!0){p=r.a
p=p==null?q:C.b.K(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.b.L(p,b)
if(p===!0){p=r.b
p=p==null?q:C.b.K(p,b)
s=p===!0||s}return s},
w:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.N():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.b.C(P.i1(p,!0,t.h2),new D.hN(s))
r=q.b
if(r!=null){q.b=H.b([],t.a)
C.b.C(r,new D.hO(s))}return!0},
dn:function(){return this.w(null)},
aG:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.w(s)}}}}
D.hN.prototype={
$1:function(a){a.$1(this.a)},
$S:22}
D.hO.prototype={
$1:function(a){a.$1(this.a)},
$S:22}
D.N.prototype={}
D.aJ.prototype={}
D.aK.prototype={}
D.y.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.v(this.d)+" => "+H.v(this.e)}}
X.co.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.co))return!1
if(this.a!==b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.ee.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ee))return!1
if(this.a!==b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.hY.prototype={}
X.cL.prototype={}
X.i3.prototype={
b5:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.S(o.a+b.a,o.b+b.b)
o=q.a.gaQ()
s=$.a8
if(s==null)s=$.a8=new V.S(0,0)
r=q.x
q.z=new P.X(p,!1)
q.x=n
return new X.bT(a,s,r,o,n)},
co:function(a,b){this.r=a.a
return!1},
bc:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bb:function(a,b){var s=this.d
if(s==null)return!1
s.w(this.b5(a,b))
return!0},
hF:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gaQ()
r=this.x
Date.now()
q.w(new X.bU(new V.a3(a.a,a.b),s,r))
return!0},
fa:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.w(new X.cL(c,q.a.gaQ(),b))
q.y=new P.X(s,!1)
s=$.a8
q.x=s==null?$.a8=new V.S(0,0):s}}
X.a7.prototype={
m:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.a7))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
i:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.b.p(s,"+")}}
X.bT.prototype={}
X.io.prototype={
bM:function(a,b,c){var s=this,r=new P.X(Date.now(),!1),q=s.a.gaQ(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.bT(a,p,o,q,b)},
co:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.w(this.bM(a,b,!0))
return!0},
bc:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.w(r.bM(a,b,!0))
return!0},
bb:function(a,b){var s=this.d
if(s==null)return!1
s.w(this.bM(a,b,!1))
return!0},
hG:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gaQ()
Date.now()
r.w(new X.bU(new V.a3(a.a,a.b),s,b))
return!0},
gdm:function(){var s=this.b
return s==null?this.b=D.D():s},
gcA:function(){var s=this.c
return s==null?this.c=D.D():s},
gdP:function(){var s=this.d
return s==null?this.d=D.D():s}}
X.bU.prototype={}
X.eA.prototype={}
X.d4.prototype={}
X.iP.prototype={
b5:function(a,b){var s,r,q,p,o=this,n=new P.X(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.a8
if(r==null){r=new V.S(0,0)
$.a8=r
s=r}else s=r}r=o.a.gaQ()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.d4(q,p,r,s)},
hE:function(a){var s=this.b
if(s==null)return!1
s.w(this.b5(a,!0))
return!0},
hC:function(a){var s=this.c
if(s==null)return!1
s.w(this.b5(a,!0))
return!0},
hD:function(a){var s=this.d
if(s==null)return!1
s.w(this.b5(a,!1))
return!0}}
X.fc.prototype={
gaT:function(a){var s=this.b
return s==null?this.b=new X.hY(new X.a7(!1,!1,!1),P.kV(t.S)):s},
ga4:function(){var s,r=this.c
if(r==null){r=$.a8
if(r==null){r=$.a8=new V.S(0,0)
s=r}else s=r
r=this.c=new X.io(this,r,s,new P.X(Date.now(),!1),new P.X(Date.now(),!1))}return r},
gaj:function(){var s=this.d
if(s==null){s=$.a8
if(s==null)s=$.a8=new V.S(0,0)
s=this.d=new X.i3(this,s,new P.X(Date.now(),!1),new P.X(Date.now(),!1))}return s},
gaX:function(){var s,r=this.e
if(r==null){r=$.a8
if(r==null){r=$.a8=new V.S(0,0)
s=r}else s=r
r=this.e=new X.iP(this,r,s,new P.X(Date.now(),!1),new P.X(Date.now(),!1))}return r},
gaQ:function(){var s=this.a
return V.kf(0,0,C.m.gdi(s).c,C.m.gdi(s).d)},
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
return new X.ee(p,new X.a7(s,r,q))},
aO:function(a){var s,r,q=this.gaT(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.a7(p,s,r)},
bZ:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gaT(this)
r=a.altKey
q=a.shiftKey
p.c=new X.a7(s,r===!0,q===!0)},
aA:function(a){var s,r,q,p
if(a==null){s=$.a8
return s==null?$.a8=new V.S(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.S(r-p,q-s)},
b7:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.a3(r,s)},
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
n=C.d.X(n)
m=o.pageY
m.toString
C.d.X(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.X(l)
l=o.pageY
l.toString
l=C.d.X(l)
k=j.top
k.toString
s.push(new V.S(n-m,l-k))}return s},
ax:function(a){var s,r,q,p
if(a==null)return new X.co(0,new X.a7(!1,!1,!1))
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
return new X.co(s,new X.a7(r,q,p))},
bN:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
f4:function(a){return this.f=!0},
eP:function(a){return this.f=!1},
eV:function(a){if(this.f&&this.bN(a))a.preventDefault()},
f8:function(a){var s,r,q=this
if(!q.f)return
s=q.cN(a)
r=q.gaT(q)
r.c=s.b
r.d.l(0,s.a)},
f6:function(a){var s,r,q=this
if(!q.f)return
s=q.cN(a)
r=q.gaT(q)
r.c=s.b
r.d.K(0,s.a)},
fc:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aO(a)
if(p.x){s=p.ax(a)
r=p.b7(a)
if(p.gaj().co(s,r))a.preventDefault()
return}s=p.ax(a)
q=p.aA(a)
if(p.ga4().co(s,q))a.preventDefault()},
fg:function(a){var s,r,q,p=this
p.aO(a)
s=p.ax(a)
if(p.x){r=p.b7(a)
if(p.gaj().bc(s,r))a.preventDefault()
return}q=p.aA(a)
if(p.ga4().bc(s,q))a.preventDefault()},
eZ:function(a){var s,r,q,p=this
if(!p.bN(a)){p.aO(a)
s=p.ax(a)
if(p.x){r=p.b7(a)
if(p.gaj().bc(s,r))a.preventDefault()
return}q=p.aA(a)
if(p.ga4().bc(s,q))a.preventDefault()}},
fe:function(a){var s,r,q,p=this
p.aO(a)
s=p.ax(a)
if(p.x){r=p.b7(a)
if(p.gaj().bb(s,r))a.preventDefault()
return}q=p.aA(a)
if(p.ga4().bb(s,q))a.preventDefault()},
eX:function(a){var s,r,q,p=this
if(!p.bN(a)){p.aO(a)
s=p.ax(a)
if(p.x){r=p.b7(a)
if(p.gaj().bb(s,r))a.preventDefault()
return}q=p.aA(a)
if(p.ga4().bb(s,q))a.preventDefault()}},
fi:function(a){var s,r,q=this
q.aO(a)
s=new V.a3(C.B.ghe(a),C.B.ghf(a)).H(0,q.Q)
if(q.x){if(q.gaj().hF(s))a.preventDefault()
return}r=q.aA(a)
if(q.ga4().hG(s,r))a.preventDefault()},
fk:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.ax(q.y)
r=q.aA(q.y)
q.gaj().fa(s,r,p)}},
fD:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bZ(a)
s=r.bX(a)
if(r.gaX().hE(s))a.preventDefault()},
fz:function(a){var s
this.bZ(a)
s=this.bX(a)
if(this.gaX().hC(s))a.preventDefault()},
fB:function(a){var s
this.bZ(a)
s=this.bX(a)
if(this.gaX().hD(s))a.preventDefault()}}
D.bM.prototype={
av:function(a){var s=this.r
return s==null?null:s.w(a)},
ec:function(){return this.av(null)},
$ian:1}
D.cI.prototype={
gn:function(){var s=this.y
return s==null?this.y=D.D():s},
gdN:function(){var s=this.z
return s==null?this.z=D.D():s},
av:function(a){var s=this.y
return s==null?null:s.w(a)},
cU:function(a){var s=this.z
return s==null?null:s.w(a)},
f9:function(){return this.cU(null)},
fm:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.r)(a),++r)if(this.er(a[r]))return!1
return!0},
eJ:function(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=this.gcT(),q=this.f,p=t.a,o=0;o<b.length;b.length===s||(0,H.r)(b),++o){n=b[o]
q.push(n)
m=n.r
if(m==null)m=n.r=new D.bl()
l=m.a;(l==null?m.a=H.b([],p):l).push(r)}this.av(new D.aJ())},
fq:function(a,b){var s,r,q,p
for(s=b.gN(b),r=this.gcT(),q=this.e;s.t();){p=s.gv(s)
C.b.K(q,p)
p.gn().K(0,r)}this.av(new D.aK())},
er:function(a){var s=C.b.L(this.f,a)
return s}}
V.W.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.W))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.ah.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ah))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+", "+V.z(s.d,3,0)+"]"},
A:function(){var s=this
return"["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+", "+V.z(s.d,3,0)+"]"}}
V.hL.prototype={}
V.cR.prototype={
a9:function(a,b){var s=this,r=H.b([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.n)
return r},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cR))return!1
s=b.a
$.A().toString
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
i:function(a){var s,r,q,p,o=this,n=t.n,m=V.ci(H.b([o.a,o.d,o.r],n),3,0),l=V.ci(H.b([o.b,o.e,o.x],n),3,0),k=V.ci(H.b([o.c,o.f,o.y],n),3,0)
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
a9:function(a,b){var s=this,r=H.b([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.n)
return r},
dK:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.A().toString
if(Math.abs(b3-0)<1e-9)return V.ad()
s=1/b3
r=-l
q=-a2
return V.ax((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
H:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.ax(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bz:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.B(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bh:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.T(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.b3))return!1
s=b.a
$.A().toString
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
I:function(a){var s,r,q,p,o,n=this,m=t.n,l=V.ci(H.b([n.a,n.e,n.y,n.cx],m),3,0),k=V.ci(H.b([n.b,n.f,n.z,n.cy],m),3,0),j=V.ci(H.b([n.c,n.r,n.Q,n.db],m),3,0),i=V.ci(H.b([n.d,n.x,n.ch,n.dx],m),3,0)
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
A:function(){return this.I("")}}
V.S.prototype={
ad:function(a){return new V.a3(a.a-this.a,a.b-this.b)},
m:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"},
A:function(){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}}
V.T.prototype={
U:function(a,b){return new V.T(this.a+b.a,this.b+b.b,this.c+b.c)},
aJ:function(a,b){return new V.T(this.a-b.a,this.b-b.b,this.c-b.c)},
H:function(a,b){return new V.T(this.a*b,this.b*b,this.c*b)},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.T))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"},
A:function(){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.bs.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bs))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+", "+V.z(s.d,3,0)+"]"},
A:function(){var s=this
return"["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+", "+V.z(s.d,3,0)+"]"}}
V.eC.prototype={
gau:function(){var s=this.c,r=this.d
return s>r?r:s},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eC))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+", "+V.z(s.d,3,0)+"]"}}
V.a3.prototype={
ck:function(a){return Math.sqrt(this.a3(this))},
a3:function(a){return this.a*a.a+this.b*a.b},
H:function(a,b){return new V.a3(this.a*b,this.b*b)},
ae:function(a,b){var s
$.A().toString
if(Math.abs(b-0)<1e-9){s=$.by
return s==null?$.by=new V.a3(0,0):s}return new V.a3(this.a/b,this.b/b)},
m:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}}
V.B.prototype={
ck:function(a){return Math.sqrt(this.a3(this))},
a3:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
F:function(){var s=this,r=Math.sqrt(s.a3(s))
if(r===1)return s
return s.ae(0,r)},
aC:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.B(s*r-q*p,q*o-n*r,n*p-s*o)},
U:function(a,b){return new V.B(this.a+b.a,this.b+b.b,this.c+b.c)},
b_:function(a){return new V.B(-this.a,-this.b,-this.c)},
H:function(a,b){return new V.B(this.a*b,this.b*b,this.c*b)},
ae:function(a,b){$.A().toString
if(Math.abs(b-0)<1e-9)return V.di()
return new V.B(this.a/b,this.b/b,this.c/b)},
dM:function(){$.A().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.B))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"},
A:function(){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
U.hx.prototype={
bF:function(a){var s=V.ph(a,this.c,this.b)
return s},
gn:function(){var s=this.y
return s==null?this.y=D.D():s},
M:function(a){var s=this.y
return s==null?null:s.w(a)},
scB:function(a,b){},
scl:function(a){var s,r=this,q=r.b
$.A().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bF(s)}r.M(new D.y("maximumLocation",q,r.b))}},
scn:function(a){var s,r=this,q=r.c
$.A().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bF(s)}r.M(new D.y("minimumLocation",q,r.c))}},
saa:function(a,b){var s,r=this
b=r.bF(b)
s=r.d
$.A().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.M(new D.y("location",s,b))}},
scm:function(a){var s,r,q=this,p=q.e
$.A().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.M(new D.y("maximumVelocity",p,a))}},
sZ:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.A().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.M(new D.y("velocity",r,a))}},
sc7:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.A().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.M(new D.y("dampening",s,a))}},
ap:function(a,b){var s,r,q,p=this,o=p.f
$.A().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.saa(0,p.d+s*b)
o=p.x
$.A().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sZ(s)}}}
U.cq.prototype={
gn:function(){var s=this.b
return s==null?this.b=D.D():s},
aZ:function(a,b,c){return this.a},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cq))return!1
return this.a.m(0,b.a)},
i:function(a){return"Constant: "+this.a.I("          ")}}
U.bO.prototype={
gn:function(){var s=this.e
return s==null?this.e=D.D():s},
M:function(a){var s=this.e
return s==null?null:s.w(a)},
a7:function(){return this.M(null)},
eH:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaN(),q=t.a,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
if(o!=null){n=o.gn()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}this.M(new D.aJ())},
fo:function(a,b){var s,r
for(s=b.gN(b),r=this.gaN();s.t();)s.gv(s).gn().K(0,r)
this.M(new D.aK())},
aZ:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.ac(o,o.length),n=H.Q(o).c,s=null;o.t();){r=n.a(o.d)
if(r!=null){q=r.aZ(0,b,c)
s=s==null?q:q.H(0,s)}}p.f=s==null?V.ad():s
o=p.e
if(o!=null)o.aG(0)}return p.f},
m:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bO))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(p>=q.length)return H.d(q,p)
if(!J.V(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$iZ:1}
U.Z.prototype={}
U.df.prototype={
gn:function(){var s=this.cy
return s==null?this.cy=D.D():s},
M:function(a){var s=this.cy
return s==null?null:s.w(a)},
a7:function(){return this.M(null)},
b8:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.ga4().gdm().l(0,s.gbO())
a.ga4().gdP().l(0,s.gbQ())
a.ga4().gcA().l(0,s.gbS())
return!0},
bP:function(a){var s=this,r=s.c,q=s.a
if(!r.m(0,q==null?null:q.gaT(q).c))return
s.x=s.y=!0
s.z=s.b.d},
bR:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.ad(a.d)
if(s.a3(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.saa(0,-a.y.ad(r).H(0,2).ae(0,s.gau()).a*2.5+p.z)
q.sZ(0)
p.Q=a.z.ad(r).H(0,2).ae(0,s.gau())
p.a7()},
bT:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.a3(s)>0.0001){r.b.sZ(r.Q.a*10*2.5)
r.a7()}},
aZ:function(a,b,c){var s,r,q=this,p=q.ch,o=b.e
if(p<o){q.ch=o
p=q.b
p.ap(0,b.y)
p=p.d
s=Math.cos(p)
r=Math.sin(p)
q.cx=V.ax(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)}return q.cx},
$iZ:1}
U.dg.prototype={
gn:function(){var s=this.fx
return s==null?this.fx=D.D():s},
M:function(a){var s=this.fx
return s==null?null:s.w(a)},
a7:function(){return this.M(null)},
b8:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.ga4().gdm().l(0,q.gbO())
a.ga4().gdP().l(0,q.gbQ())
a.ga4().gcA().l(0,q.gbS())
s=a.gaj()
r=s.f
s=r==null?s.f=D.D():r
s.l(0,q.geA())
s=a.gaj()
r=s.d
s=r==null?s.d=D.D():r
s.l(0,q.geC())
s=a.gaX()
r=s.b
s=r==null?s.b=D.D():r
s.l(0,q.gfY())
s=a.gaX()
r=s.d
s=r==null?s.d=D.D():r
s.l(0,q.gfW())
s=a.gaX()
r=s.c
s=r==null?s.c=D.D():r
s.l(0,q.gfU())
return!0},
aM:function(a){return new V.a3(a.a,a.b)},
bP:function(a){var s=this
t.Z.a(a)
if(!s.d.m(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bR:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ad(a.d)
if(s.a3(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aM(a.y.ad(r).H(0,2).ae(0,s.gau()))
p=n.c
p.saa(0,-q.a*2.5+n.cy)
o=n.b
o.saa(0,-q.b*2.5+n.db)
o.sZ(0)
p.sZ(0)
n.dx=n.aM(a.z.ad(r).H(0,2).ae(0,s.gau()))
n.a7()},
bT:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a3(s)>0.0001){r.c.sZ(-r.dx.a*10*2.5)
r.b.sZ(-r.dx.b*10*2.5)
r.a7()}},
eB:function(a){var s=this
if(t.bv.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eD:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.m(0,a.x.b))return
s=a.c
r=a.d
q=n.aM(a.y.ad(r).H(0,2).ae(0,s.gau()))
p=n.c
p.saa(0,-q.a*2.5+n.cy)
o=n.b
o.saa(0,-q.b*2.5+n.db)
o.sZ(0)
p.sZ(0)
n.dx=n.aM(a.z.ad(r).H(0,2).ae(0,s.gau()))
n.a7()},
fZ:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fX:function(a){var s,r,q,p,o,n=this
t.dr.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ad(a.d)
if(s.a3(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aM(a.y.ad(r).H(0,2).ae(0,s.gau()))
p=n.c
p.saa(0,-q.a*2.5+n.cy)
o=n.b
o.saa(0,-q.b*2.5+n.db)
o.sZ(0)
p.sZ(0)
n.dx=n.aM(a.z.ad(r).H(0,2).ae(0,s.gau()))
n.a7()},
fV:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a3(s)>0.0001){r.c.sZ(-r.dx.a*10*2.5)
r.b.sZ(-r.dx.b*10*2.5)
r.a7()}},
aZ:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(o<n){p.dy=n
s=b.y
o=p.c
o.ap(0,s)
n=p.b
n.ap(0,s)
n=n.d
r=Math.cos(n)
q=Math.sin(n)
n=V.ax(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
o=o.d
r=Math.cos(o)
q=Math.sin(o)
p.fr=n.H(0,V.ax(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iZ:1}
U.dh.prototype={
gn:function(){var s=this.r
return s==null?this.r=D.D():s},
M:function(a){var s=this.r
return s==null?null:s.w(a)},
b8:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.ga4()
r=s.e
s=r==null?s.e=D.D():r
r=this.geE()
s.l(0,r)
s=a.gaj()
q=s.e;(q==null?s.e=D.D():q).l(0,r)
return!0},
eF:function(a){var s=this,r=s.b,q=s.a
if(!r.m(0,q==null?null:q.gaT(q).c))return
t.bZ.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.M(new D.y("zoom",r,q))}},
aZ:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.ax(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$iZ:1}
M.cp.prototype={
gn:function(){var s=this.r
return s==null?this.r=D.D():s},
V:function(a){var s=this.r
return s==null?null:s.w(a)},
b3:function(){return this.V(null)},
ft:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gW(),q=t.a,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p].gn()
n=o.a;(n==null?o.a=H.b([],q):n).push(r)}this.V(new D.aJ())},
fv:function(a,b){var s,r
for(s=b.gN(b),r=this.gW();s.t();)s.gv(s).gn().K(0,r)
this.V(new D.aK())},
ac:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.ac(s,s.length),r=H.Q(s).c;s.t();)r.a(s.d).ac(a)
q.f=!1},
$iaA:1}
M.ct.prototype={
gn:function(){var s=this.r
return s==null?this.r=D.D():s},
V:function(a){var s=this.r
return s==null?null:s.w(a)},
b3:function(){return this.V(null)},
sbe:function(a,b){var s,r,q=this
if(b==null)b=X.k7(null)
s=q.c
if(s!==b){if(s!=null)s.gn().K(0,q.gW())
r=q.c
q.c=b
b.gn().l(0,q.gW())
q.V(new D.y("target",r,q.c))}},
sbf:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gn().K(0,r.gW())
s=r.d
r.d=a
if(a!=null)a.gn().l(0,r.gW())
r.V(new D.y("technique",s,r.d))}},
ac:function(a){var s,r,q=this
a.cq(q.d)
s=q.c
if(s!=null)s.a8(a)
if(q.b!=null){a.cy.bx(V.ad())
r=V.ad()
a.db.bx(r)}s=q.e
s.ap(0,a)
s.ac(a)
if(q.b!=null){a.cy.bd()
a.db.bd()}a.cp()},
$iaA:1}
M.cy.prototype={
V:function(a){var s=this.y
return s==null?null:s.w(a)},
b3:function(){return this.V(null)},
eR:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gW(),q=t.a,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bl()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.V(new D.aJ())},
eT:function(a,b){var s,r
for(s=b.gN(b),r=this.gW();s.t();)s.gv(s).gn().K(0,r)
this.V(new D.aK())},
sdh:function(a){var s,r,q=this
if(a==null)a=X.kZ(null)
s=q.b
if(s!==a){if(s!=null)s.gn().K(0,q.gW())
r=q.b
q.b=a
a.gn().l(0,q.gW())
q.V(new D.y("camera",r,q.b))}},
sbe:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gn().K(0,r.gW())
s=r.c
r.c=b
b.gn().l(0,r.gW())
r.V(new D.y("target",s,r.c))}},
sbf:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gn().K(0,r.gW())
s=r.d
r.d=a
if(a!=null)a.gn().l(0,r.gW())
r.V(new D.y("technique",s,r.d))}},
gn:function(){var s=this.y
return s==null?this.y=D.D():s},
ac:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
a.cq(h.d)
s=h.c
if(s!=null)s.a8(a)
s=h.b
if(s!=null){r=a.c
q=a.d
p=s.c
o=s.d
n=s.e
m=n-o
l=1/Math.tan(p*0.5)
k=V.ax(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bx(k)
j=$.m7()
i=s.b
if(i!=null)j=i.aZ(0,a,s).H(0,j)
a.db.bx(j)}s=h.d
if(s!=null)s.ap(0,a)
for(s=h.e.a,r=new J.ac(s,s.length),q=H.Q(r).c;r.t();)q.a(r.d).ap(0,a)
for(s=new J.ac(s,s.length),r=H.Q(s).c;s.t();)r.a(s.d).ac(a)
if(h.b!=null){a.cy.bd()
a.db.bd()}s=h.c
if(s!=null)s.aY(a)
a.cp()},
$iaA:1}
A.dX.prototype={}
A.hm.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hg:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
dl:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.au.prototype={
gaq:function(a){var s=this.a?1:0
return s|0},
i:function(a){var s=this.a?1:0
return""+(s|0)},
m:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.au))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.cP.prototype={
e8:function(d2,d3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6=u.C,c7="Required uniform value, ",c8=", was not defined or used in shader.",c9=c4.x,d0=new P.a0(""),d1=c9.fr
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
A.oz(c9,d0)
A.oB(c9,d0)
A.oA(c9,d0)
A.oD(c9,d0)
A.oE(c9,d0)
A.oC(c9,d0)
A.oF(c9,d0)
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
c4.dH(0,s.charCodeAt(0)==0?s:s,A.oy(c9))
c4.y=c4.gaf(c4).h(0,"posAttr")
c4.Q=c4.gaf(c4).h(0,"normAttr")
c4.z=c4.gaf(c4).h(0,"binmAttr")
c4.ch=c4.gaf(c4).h(0,"txt2DAttr")
c4.cx=c4.gaf(c4).h(0,"txtCubeAttr")
c4.cy=c4.gaf(c4).h(0,"bendAttr")
if(c9.dy)c4.fy=t.j.a(c4.gP().O(0,"invViewMat"))
if(d1)c4.db=t.j.a(c4.gP().O(0,"objMat"))
if(r)c4.dx=t.j.a(c4.gP().O(0,"viewObjMat"))
d1=t.j
c4.fr=d1.a(c4.gP().O(0,"projViewObjMat"))
if(c9.go)c4.dy=d1.a(c4.gP().O(0,"viewMat"))
if(c9.x1)c4.go=t.Q.a(c4.gP().O(0,"txt2DMat"))
if(c9.x2)c4.id=d1.a(c4.gP().O(0,"txtCubeMat"))
if(c9.y1)c4.k1=d1.a(c4.gP().O(0,"colorMat"))
c4.k3=H.b([],t.p)
s=c9.aS
if(s>0){c4.k2=t.y.a(c4.gP().O(0,"bendMatCount"))
for(n=0;n<s;++n){r=c4.k3
m=c4.r
if(m==null)H.h(P.f(c6))
q="bendValues["+n+"].mat"
l=m.h(0,q)
if(l==null)H.h(P.f(c7+q+c8))
r.push(d1.a(l))}}if(c9.a.a)c4.k4=t.g.a(c4.gP().O(0,"emissionClr"))
if(c9.b.a)c4.rx=t.g.a(c4.gP().O(0,"ambientClr"))
if(c9.c.a)c4.x2=t.g.a(c4.gP().O(0,"diffuseClr"))
if(c9.d.a)c4.aS=t.g.a(c4.gP().O(0,"invDiffuseClr"))
d1=c9.e.a
if(!d1)s=!1
else s=!0
if(s){c4.dt=t.v.a(c4.gP().O(0,"shininess"))
if(d1)c4.ds=t.g.a(c4.gP().O(0,"specularClr"))}if(c9.db){c4.du=t.m.a(c4.gP().O(0,"envSampler"))
if(c9.r.a)c4.dv=t.g.a(c4.gP().O(0,"reflectClr"))
d1=c9.x.a
if(!d1)s=!1
else s=!0
if(s){c4.dw=t.v.a(c4.gP().O(0,"refraction"))
if(d1)c4.dz=t.g.a(c4.gP().O(0,"refractClr"))}}if(c9.y.a)c4.dA=t.v.a(c4.gP().O(0,"alpha"))
if(c9.k1){d1=c9.z
s=d1.length
if(s!==0){r=t.S
c4.c8=P.P(r,t.W)
c4.c9=P.P(r,t.J)
for(r=t.y,q=t.g,p=t.v,o=t.Y,k=0;k<d1.length;d1.length===s||(0,H.r)(d1),++k){j=d1[k]
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
a4=a3}g.push(new A.d9(l,c,b,a4,a3,a2))}c4.c9.k(0,i,g)
f=c4.c8
m=c4.r
if(m==null)H.h(P.f(c6))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.h(P.f(c7+e+c8))
f.k(0,i,r.a(l))}}d1=c9.Q
s=d1.length
if(s!==0){r=t.S
c4.ca=P.P(r,t.W)
c4.cb=P.P(r,t.O)
for(r=t.y,q=t.g,p=t.G,o=t.V,k=0;k<d1.length;d1.length===s||(0,H.r)(d1),++k){j=d1[k]
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
g.push(new A.da(a7,a6,a5,l,c,a8))}c4.cb.k(0,i,g)
f=c4.ca
m=c4.r
if(m==null)H.h(P.f(c6))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.h(P.f(c7+e+c8))
f.k(0,i,r.a(l))}}d1=c9.ch
s=d1.length
if(s!==0){r=t.S
c4.cc=P.P(r,t.W)
c4.cd=P.P(r,t.b)
for(r=t.y,q=t.g,p=t.Q,o=t.m,f=t.F,e=t.v,d=t.C,k=0;k<d1.length;d1.length===s||(0,H.r)(d1),++k){j=d1[k]
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
a4=a3}g.push(new A.dc(l,c,b5,b,a8,b6,b7,a4,a3,a2))}c4.cd.k(0,i,g)
a9=c4.cc
m=c4.r
if(m==null)H.h(P.f(c6))
b0=h+"Count"
l=m.h(0,b0)
if(l==null)H.h(P.f(c7+b0+c8))
a9.k(0,i,r.a(l))}}c9=c9.cx
d1=c9.length
if(d1!==0){s=t.S
c4.ce=P.P(s,t.W)
c4.cf=P.P(s,t.R)
for(s=t.y,r=t.g,q=t.v,p=t.F,o=t.G,f=t.I,k=0;k<c9.length;c9.length===d1||(0,H.r)(c9),++k){j=c9[k]
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
g.push(new A.de(l,c,b,a,a7,a6,c1,c0,b7,c3,c2,a4,a3,a2,a8,b6))}c4.cf.k(0,i,g)
e=c4.ce
m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"Count"
l=m.h(0,d)
if(l==null)H.h(P.f(c7+d+c8))
e.k(0,i,s.a(l))}}}},
fM:function(a,b){}}
A.aZ.prototype={
i:function(a){return"barLight"+this.a}}
A.b1.prototype={
i:function(a){return"dirLight"+this.a}}
A.b4.prototype={
i:function(a){return"pointLight"+this.a}}
A.b6.prototype={
i:function(a){return"spotLight"+this.a}}
A.i7.prototype={
i:function(a){return this.bq}}
A.d9.prototype={}
A.da.prototype={}
A.dc.prototype={}
A.de.prototype={}
A.bZ.prototype={
dH:function(a,b,c){var s,r,q,p,o,n=this
n.c=b
n.d=c
s=n.cO(b,35633)
r=n.cO(n.d,35632)
q=n.a
p=q.createProgram()
p.toString
n.e=p
q.attachShader(n.gay(),s)
q.attachShader(n.gay(),r)
q.linkProgram(n.gay())
if(!H.lJ(q.getProgramParameter(n.gay(),35714))){o=q.getProgramInfoLog(n.gay())
if(o==null)o="undefined log error"
q.deleteProgram(n.e)
H.h(P.f("Failed to link shader: "+o))}n.fQ()
n.fS()},
gaf:function(a){var s=this.f
if(s==null)throw H.c(P.f("Must initialize the shader prior to getting the attributes."))
return s},
gP:function(){var s=this.r
if(s==null)throw H.c(P.f(u.C))
return s},
gay:function(){var s=this.e
if(s==null)throw H.c(P.f(u.F))
return s},
a8:function(a){a.a.useProgram(this.e)
this.gaf(this).hg()},
cO:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.lJ(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.f('Error compiling shader "'+H.v(q)+'": '+s))}return q},
fQ:function(){var s,r,q,p,o=this,n=u.F,m=H.b([],t.eu),l=o.a,k=H.hi(l.getProgramParameter(o.gay(),35721))
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
fS:function(){var s,r,q,p,o,n,m=this,l=u.F,k=H.b([],t.dC),j=m.a,i=H.hi(j.getProgramParameter(m.gay(),35718))
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
k.push(m.hc(o,n,q,p))}m.r=new A.iU(k)},
aL:function(a,b,c){var s=this.a
if(a===1)return new A.bv(s,b,c)
else return A.kh(s,this.e,b,a,c)},
eu:function(a,b,c){var s=this.a
if(a===1)return new A.bx(s,b,c)
else return A.kh(s,this.e,b,a,c)},
ev:function(a,b,c){var s=this.a
if(a===1)return new A.dd(s,b,c)
else return A.kh(s,this.e,b,a,c)},
bk:function(a,b){return new P.fu(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
hc:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aL(b,c,d)
case 5121:return s.aL(b,c,d)
case 5122:return s.aL(b,c,d)
case 5123:return s.aL(b,c,d)
case 5124:return s.aL(b,c,d)
case 5125:return s.aL(b,c,d)
case 5126:return new A.d6(s.a,c,d)
case 35664:return new A.c3(s.a,c,d)
case 35665:return new A.d7(s.a,c,d)
case 35666:return new A.d8(s.a,c,d)
case 35667:return new A.f3(s.a,c,d)
case 35668:return new A.f4(s.a,c,d)
case 35669:return new A.f5(s.a,c,d)
case 35674:return new A.f6(s.a,c,d)
case 35675:return new A.db(s.a,c,d)
case 35676:return new A.bw(s.a,c,d)
case 35678:return s.eu(b,c,d)
case 35680:return s.ev(b,c,d)
case 35670:throw H.c(s.bk("BOOL",c))
case 35671:throw H.c(s.bk("BOOL_VEC2",c))
case 35672:throw H.c(s.bk("BOOL_VEC3",c))
case 35673:throw H.c(s.bk("BOOL_VEC4",c))
default:throw H.c(P.f("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.bL.prototype={
i:function(a){return this.b}}
A.d3.prototype={
ea:function(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.C,b="Required uniform value, ",a=", was not defined or used in shader."
""+"attribute vec3 posAttr;\n"
""+"attribute vec3 posAttr;\n\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n"
s=""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n"
d.dH(0,s.charCodeAt(0)==0?s:s,A.nf(a0,a1))
d.x=d.gaf(d).h(0,"posAttr")
d.y=t.y.a(d.gP().O(0,"txtCount"))
d.z=t.F.a(d.gP().O(0,"backClr"))
for(s=t.W,r=t.ch,q=d.dy,p=d.dx,o=d.db,n=d.cy,m=t.em,l=d.cx,k=t.cI,j=d.ch,i=d.Q,h=0;h<a0;++h){g=d.r
if(g==null)H.h(P.f(c))
f="txt"+h
e=g.h(0,f)
if(e==null)H.h(P.f(b+f+a))
i.push(k.a(e))
g=d.r
if(g==null)H.h(P.f(c))
f="clrMat"+h
e=g.h(0,f)
if(e==null)H.h(P.f(b+f+a))
j.push(m.a(e))
g=d.r
if(g==null)H.h(P.f(c))
f="srcLoc"+h
e=g.h(0,f)
if(e==null)H.h(P.f(b+f+a))
l.push(r.a(e))
g=d.r
if(g==null)H.h(P.f(c))
f="srcSize"+h
e=g.h(0,f)
if(e==null)H.h(P.f(b+f+a))
n.push(r.a(e))
g=d.r
if(g==null)H.h(P.f(c))
f="destLoc"+h
e=g.h(0,f)
if(e==null)H.h(P.f(b+f+a))
o.push(r.a(e))
g=d.r
if(g==null)H.h(P.f(c))
f="destSize"+h
e=g.h(0,f)
if(e==null)H.h(P.f(b+f+a))
p.push(r.a(e))
g=d.r
if(g==null)H.h(P.f(c))
f="flip"+h
e=g.h(0,f)
if(e==null)H.h(P.f(b+f+a))
q.push(s.a(e))}}}
A.a1.prototype={}
A.iU.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
O:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.f("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.A()},
A:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.r)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.bv.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.f3.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.f4.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.f5.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.f2.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.d6.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.c3.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.d7.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.d8.prototype={
e1:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+this.c}}
A.f6.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.db.prototype={
an:function(a){var s=new Float32Array(H.bB(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.bw.prototype={
an:function(a){var s=new Float32Array(H.bB(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.bx.prototype={
i:function(a){return"UniformSampler2D: "+this.c}}
A.dd.prototype={
i:function(a){return"UniformSamplerCube: "+this.c}}
F.k2.prototype={
$1:function(a){return new V.T(Math.cos(a),Math.sin(a),0)},
$S:40}
F.jN.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.kI(l.$1(m),k)
k=J.kI(l.$1(m+3.141592653589793/n.c),k).aJ(0,j)
s=new V.B(k.a,k.b,k.c).F()
r=$.ln
if(r==null){r=new V.B(1,0,0)
$.ln=r}q=s.aC(!s.m(0,r)?V.lp():r).F()
r=q.aC(s).F()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.H(0,l*k)
k=q.H(0,o*k)
k=j.U(0,new V.T(l.a-k.a,l.b-k.b,l.c-k.c))
if(!J.V(a.f,k)){a.f=k
l=a.a
if(l!=null)l.ab()}},
$S:41}
F.av.prototype={
b2:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.c(P.f("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.fN(a)
s.fO(b)
s.fP(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gR().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.ab()}},
bp:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.b.K(r.gR().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.ab()}}s.fG()
s.fH()
s.fI()},
fN:function(a){this.a=a
a.gR().b.push(this)},
fO:function(a){this.b=a
a.gR().c.push(this)},
fP:function(a){this.c=a
a.gR().d.push(this)},
fG:function(){var s=this.a
if(s!=null)C.b.K(s.gR().b,this)
this.a=null},
fH:function(){var s=this.b
if(s!=null)C.b.K(s.gR().c,this)
this.b=null},
fI:function(){var s=this.c
if(s!=null)C.b.K(s.gR().d,this)
this.c=null},
em:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.di()
if(n!=null)q=q.U(0,n)
if(s!=null)q=q.U(0,s)
if(r!=null)q=q.U(0,r)
if(q.dM())return p
return q.F()},
eo:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aJ(0,n)
q=new V.B(o.a,o.b,o.c).F()
o=r.aJ(0,n)
return q.aC(new V.B(o.a,o.b,o.c).F()).F()},
c4:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.em()
if(s==null){s=q.eo()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.ab()}return!0},
el:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.di()
if(n!=null)q=q.U(0,n)
if(s!=null)q=q.U(0,s)
if(r!=null)q=q.U(0,r)
if(q.dM())return p
return q.F()},
en:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.A().toString
if(Math.abs(p-0)<1e-9){j=b.aJ(0,e)
o=new V.B(j.a,j.b,j.c).F()
if(q.a-r.a<0)o=o.b_(0)}else{n=(j-s.b)/p
j=b.aJ(0,e).H(0,n).U(0,e).aJ(0,h)
o=new V.B(j.a,j.b,j.c).F()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.b_(0)}m=l.d
if(m!=null){m=m.F()
o=m.aC(o).F().aC(m).F()}return o},
c2:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.el()
if(s==null){s=q.en()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.ab()}return!0},
gh8:function(a){var s=this
if(J.V(s.a,s.b))return!0
if(J.V(s.b,s.c))return!0
if(J.V(s.c,s.a))return!0
return!1},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
I:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gu(p)
p=a+C.a.aF(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gu(o)
p=p+C.a.aF(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gu(o)
s=p+C.a.aF(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.A()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.A()
return s+((p==null?"-":p)+"}")},
A:function(){return this.I("")}}
F.hP.prototype={}
F.iF.prototype={
ba:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gu(q)
s=c.a
if(q==(s==null?r:s.gu(s))){q=b.b
q=q==null?r:q.gu(q)
s=c.b
if(q==(s==null?r:s.gu(s))){q=b.c
q=q==null?r:q.gu(q)
s=c.c
q=q==(s==null?r:s.gu(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gu(q)
s=c.b
if(q==(s==null?r:s.gu(s))){q=b.b
q=q==null?r:q.gu(q)
s=c.c
if(q==(s==null?r:s.gu(s))){q=b.c
q=q==null?r:q.gu(q)
s=c.a
q=q==(s==null?r:s.gu(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gu(q)
s=c.c
if(q==(s==null?r:s.gu(s))){q=b.b
q=q==null?r:q.gu(q)
s=c.a
if(q==(s==null?r:s.gu(s))){q=b.c
q=q==null?r:q.gu(q)
s=c.b
q=q==(s==null?r:s.gu(s))}else q=!1
return q}else return!1}}}}
F.hZ.prototype={}
F.iT.prototype={
ba:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gu(q)
s=c.a
if(q==(s==null?r:s.gu(s))){q=b.b
q=q==null?r:q.gu(q)
s=c.b
return q==(s==null?r:s.gu(s))}else{q=b.a
q=q==null?r:q.gu(q)
s=c.b
if(q==(s==null?r:s.gu(s))){q=b.b
q=q==null?r:q.gu(q)
s=c.a
return q==(s==null?r:s.gu(s))}else return!1}}}
F.iz.prototype={
ga1:function(){var s=this.a
return s==null?this.a=new F.G(this,H.b([],t.k)):s},
gbv:function(a){var s=this.b
return s==null?this.b=new F.iA(H.b([],t.fj)):s},
gaU:function(a){var s=this.c
return s==null?this.c=new F.eI(this,H.b([],t.L)):s},
gR:function(){var s=this.d
return s==null?this.d=new F.eH(this,H.b([],t.u)):s},
gn:function(){var s=this.e
return s==null?this.e=D.D():s},
aB:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gR().aB()||!1
if(!r.ga1().aB())s=!1
q=r.e
if(q!=null)q.aG(0)
return s},
hu:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.ga1().c
s=H.b(m.slice(0),H.kv(m))
for(m=t.k;s.length!==0;){r=C.b.ghk(s)
C.b.ct(s,0)
q=H.b([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(a.ba(0,r,o)){q.push(o)
C.b.ct(s,p)}}if(q.length>1)b.ht(q)}n.ga1().as()
n.gaU(n).cu()
n.gR().cu()
n.gbv(n).hJ()
n.gaU(n).cv(new F.iT())
n.gR().cv(new F.iF())
m=n.e
if(m!=null)m.aG(0)},
dg:function(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=34962,c={},b=f.ga1().c.length,a=$.aE(),a0=a3.a,a1=(a0&a.a)!==0?1:0
if((a0&$.bg().a)!==0)++a1
if((a0&$.bf().a)!==0)++a1
if((a0&$.bF().a)!==0)++a1
if((a0&$.bG().a)!==0)++a1
if((a0&$.dP().a)!==0)++a1
if((a0&$.dQ().a)!==0)++a1
if((a0&$.ck().a)!==0)++a1
if((a0&$.be().a)!==0)++a1
s=a3.gcD(a3)
r=P.eh(b*s,0,!1,t.E)
c.a=0
q=P.mR(a1,new F.iB(c,f,a3,s*4,b,s,r),t.eT)
a=a2.a
a0=a.createBuffer()
a0.toString
a.bindBuffer(d,a0)
a.bufferData(d,new Float32Array(H.bB(r)),35044)
a.bindBuffer(d,e)
p=new Z.bJ(new Z.fe(d,a0),H.b([],t.fv),q,a3)
f.gbv(f)
if(f.gaU(f).b.length!==0){o=H.b([],t.t)
a0=t.L
n=t.k
m=0
while(!0){l=f.c
if(l==null){l=f.c=new F.eI(f,H.b([],a0))
k=l}else k=l
if(!(m<l.b.length))break
l=k.b
if(m>=l.length)return H.d(l,m)
j=l[m]
l=j.a
if(l==null)l=e
else{k=l.a
if(k!=null){i=k.a;(i==null?k.a=new F.G(k,H.b([],n)):i).as()}l=l.e}o.push(l==null?0:l)
l=j.b
if(l==null)l=e
else{k=l.a
if(k!=null){i=k.a;(i==null?k.a=new F.G(k,H.b([],n)):i).as()}l=l.e}o.push(l==null?0:l);++m}h=Z.lq(a,34963,o)
p.b.push(new Z.cD(1,o.length,h))}if(f.gR().b.length!==0){o=H.b([],t.t)
a0=t.u
n=t.k
m=0
while(!0){l=f.d
if(l==null){l=f.d=new F.eH(f,H.b([],a0))
k=l}else k=l
if(!(m<l.b.length))break
l=k.b
if(m>=l.length)return H.d(l,m)
g=l[m]
l=g.a
if(l==null)l=e
else{k=l.a
if(k!=null){i=k.a;(i==null?k.a=new F.G(k,H.b([],n)):i).as()}l=l.e}o.push(l==null?0:l)
l=g.b
if(l==null)l=e
else{k=l.a
if(k!=null){i=k.a;(i==null?k.a=new F.G(k,H.b([],n)):i).as()}l=l.e}o.push(l==null?0:l)
l=g.c
if(l==null)l=e
else{k=l.a
if(k!=null){i=k.a;(i==null?k.a=new F.G(k,H.b([],n)):i).as()}l=l.e}o.push(l==null?0:l);++m}h=Z.lq(a,34963,o)
p.b.push(new Z.cD(4,o.length,h))}return p},
i:function(a){var s=this,r=H.b([],t.s)
if(s.ga1().c.length!==0){r.push("Vertices:")
r.push(s.ga1().I("   "))}s.gbv(s)
if(s.gaU(s).b.length!==0){r.push("Lines:")
r.push(s.gaU(s).I("   "))}if(s.gR().b.length!==0){r.push("Faces:")
r.push(s.gR().I("   "))}return C.b.p(r,"\n")},
ab:function(){var s=this.e
return s==null?null:s.w(null)}}
F.iB.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c.h5(a),e=f.gcD(f),d=g.a,c=d.a
for(s=g.e,r=g.r,q=r.length,p=g.f,o=g.b,n=t.k,m=0;m<s;++m){l=o.a
l=(l==null?o.a=new F.G(o,H.b([],n)):l).c
if(m>=l.length)return H.d(l,m)
k=l[m].hs(f)
j=d.a+m*p
for(l=k.length,i=0;i<l;++i){h=k[i]
if(j>=q)return H.d(r,j)
r[j]=h;++j}}d.a+=e
return new Z.bI(f,e,c*4,g.d)},
$S:42}
F.eH.prototype={
h3:function(a){var s,r,q,p,o,n,m,l=H.b([],t.u),k=a[0]
for(s=this.a,r=t.k,q=2;q<4;++q){p=a[q-1]
o=a[q]
n=s.a;(n==null?s.a=new F.G(s,H.b([],r)):n).l(0,k)
n=s.a;(n==null?s.a=new F.G(s,H.b([],r)):n).l(0,p)
n=s.a;(n==null?s.a=new F.G(s,H.b([],r)):n).l(0,o)
m=new F.av()
m.b2(k,p,o)
l.push(m)}return l},
h4:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=H.b([],t.u)
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
if(m){(k==null?s.a=new F.G(s,H.b([],r)):k).l(0,j)
k=s.a;(k==null?s.a=new F.G(s,H.b([],r)):k).l(0,i)
k=s.a;(k==null?s.a=new F.G(s,H.b([],r)):k).l(0,g)
e=new F.av()
e.b2(j,i,g)
d.push(e)
k=s.a;(k==null?s.a=new F.G(s,H.b([],r)):k).l(0,j)
k=s.a;(k==null?s.a=new F.G(s,H.b([],r)):k).l(0,g)
k=s.a;(k==null?s.a=new F.G(s,H.b([],r)):k).l(0,f)
e=new F.av()
e.b2(j,g,f)
d.push(e)}else{(k==null?s.a=new F.G(s,H.b([],r)):k).l(0,i)
k=s.a;(k==null?s.a=new F.G(s,H.b([],r)):k).l(0,g)
k=s.a;(k==null?s.a=new F.G(s,H.b([],r)):k).l(0,f)
e=new F.av()
e.b2(i,g,f)
d.push(e)
k=s.a;(k==null?s.a=new F.G(s,H.b([],r)):k).l(0,i)
k=s.a;(k==null?s.a=new F.G(s,H.b([],r)):k).l(0,f)
k=s.a;(k==null?s.a=new F.G(s,H.b([],r)):k).l(0,j)
e=new F.av()
e.b2(i,f,j)
d.push(e)}m=!m}o=!o}return d},
gj:function(a){return this.b.length},
cv:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.ga1().c.length-1,q=t.u,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.G(s,H.b([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.d
if(o==null)o=n.d=new F.c8(H.b([],q),H.b([],q),H.b([],q))
m=o.b.length+o.c.length+o.d.length-1
for(;m>=0;m=k){o=n.d
l=(o==null?n.d=new F.c8(H.b([],q),H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.d
if(a.ba(0,l,(o==null?n.d=new F.c8(H.b([],q),H.b([],q),H.b([],q)):o).h(0,j))){l.bp()
break}}}}},
cu:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(q.gh8(q))q.bp()}},
aB:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.r)(s),++p)if(!s[p].c4())q=!1
return q},
c3:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.r)(s),++p)if(!s[p].c2())q=!1
return q},
i:function(a){return this.A()},
I:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].I(a))
return C.b.p(p,"\n")},
A:function(){return this.I("")}}
F.eI.prototype={
gj:function(a){return this.b.length},
cv:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.ga1().c.length-1,q=t.L,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.G(s,H.b([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.c
if(o==null)o=n.c=new F.c9(H.b([],q),H.b([],q))
m=o.b.length+o.c.length-1
for(;m>=0;m=k){o=n.c
l=(o==null?n.c=new F.c9(H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.c
if(a.ba(0,l,(o==null?n.c=new F.c9(H.b([],q),H.b([],q)):o).h(0,j))){l.bp()
break}}}}},
cu:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(J.V(q.a,q.b))q.bp()}},
i:function(a){return this.A()},
I:function(a){var s,r=H.b([],t.s),q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.d(q,s)
r.push(q[s].I(a+(""+s+". ")))}return C.b.p(r,"\n")},
A:function(){return this.I("")}}
F.iA.prototype={
gj:function(a){return 0},
hJ:function(){var s,r,q
for(s=this.b,r=-1;!1;--r){return H.d(s,r)
q=s[r].gij()
q=q.gbv(q)
q.gj(q)}},
i:function(a){return this.A()},
I:function(a){var s,r,q=H.b([],t.s)
for(s=this.b,r=0;!1;++r)q.push(s[r].I(a))
return C.b.p(q,"\n")},
A:function(){return this.I("")}}
F.c7.prototype={
dj:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.j9(s.cx,p,m,r,q,o,n,a,l)},
gaU:function(a){var s=this.c
if(s==null){s=t.L
s=this.c=new F.c9(H.b([],s),H.b([],s))}return s},
gR:function(){var s=this.d
if(s==null){s=t.u
s=this.d=new F.c8(H.b([],s),H.b([],s),H.b([],s))}return s},
gu:function(a){var s=this.a
if(s!=null)s.ga1().as()
return this.e},
hs:function(a){var s,r,q,p,o=this,n=null
if(a.m(0,$.aE())){s=o.f
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.m(0,$.bg())){s=o.r
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,1,0],t.n):s}else if(a.m(0,$.bf())){s=o.x
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,1],t.n):s}else if(a.m(0,$.bF())){s=o.y
s=s==null?n:H.b([s.a,s.b],t.n)
return s==null?H.b([0,0],t.n):s}else if(a.m(0,$.bG())){s=o.z
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
return s==null?H.b([1,1,1,1],t.n):s}else if(a.m(0,$.ck()))return H.b([o.ch],t.n)
else if(a.m(0,$.be())){s=o.cx
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([-1,-1,-1,-1],t.n):s}else return H.b([],t.n)},
c4:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.di()
p.gR().C(0,new F.jg(o))
p.r=o.a.F()
if(r){s.ab()
o=s.e
if(o!=null)o.aG(0)}return!0},
c2:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.di()
p.gR().C(0,new F.jf(o))
p.x=o.a.F()
if(r){s.ab()
o=s.e
if(o!=null)o.aG(0)}return!0},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
I:function(a){var s,r,q=this,p=null,o="-",n=H.b([],t.s)
n.push(C.a.aF(C.c.i(q.e),0))
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
n.push(V.z(q.ch,3,0))
s=q.cx
s=s==null?p:s.A()
n.push(s==null?o:s)
r=C.b.p(n,", ")
return a+"{"+r+"}"},
A:function(){return this.I("")}}
F.jg.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.U(0,r)}},
$S:7}
F.jf.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.U(0,r)}},
$S:7}
F.G.prototype={
as:function(){var s,r,q
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
s.ab()
return!0},
bm:function(a,b,c,d,e,f){var s=F.j9(a,null,b,c,null,d,e,f,0)
this.l(0,s)
return s},
gj:function(a){return this.c.length},
aB:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)s[q].c4()
return!0},
c3:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)s[q].c2()
return!0},
h7:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.F()
if(!J.V(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.w(null)}}}}}return!0},
i:function(a){return this.A()},
I:function(a){var s,r,q,p
this.as()
s=H.b([],t.s)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.r)(r),++p)s.push(r[p].I(a))
return C.b.p(s,"\n")},
A:function(){return this.I("")}}
F.c8.prototype={
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
C:function(a,b){var s=this
C.b.C(s.b,b)
C.b.C(s.c,new F.ja(s,b))
C.b.C(s.d,new F.jb(s,b))},
i:function(a){return this.A()},
A:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].I(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].I(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].I(""))
return C.b.p(p,"\n")}}
F.ja.prototype={
$1:function(a){if(!J.V(a.a,this.a))this.b.$1(a)},
$S:7}
F.jb.prototype={
$1:function(a){var s=this.a
if(!J.V(a.a,s)&&!J.V(a.b,s))this.b.$1(a)},
$S:7}
F.c9.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.d(r,s)
return r[s]}else{if(b<0)return H.d(r,b)
return r[b]}},
i:function(a){return this.A()},
A:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].I(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].I(""))
return C.b.p(p,"\n")}}
F.jd.prototype={}
F.jc.prototype={
ba:function(a,b,c){return J.V(b.f,c.f)}}
F.je.prototype={}
F.ip.prototype={
ht:function(a){var s,r,q,p,o,n=V.di()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)n=new V.B(n.a+q.a,n.b+q.b,n.c+q.c)}n=n.F()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.r)(a),++r){p=a[r]
q=n.F()
if(!J.V(p.r,q)){p.r=q
o=p.a
if(o!=null){o=o.e
if(o!=null)o.w(null)}}}return null}}
O.cO.prototype={
gn:function(){var s=this.fr
return s==null?this.fr=D.D():s},
S:function(a){var s=this.fr
return s==null?null:s.w(a)},
aw:function(){return this.S(null)},
cW:function(a){this.a=null
this.S(a)},
fL:function(){return this.cW(null)},
eL:function(a,b){return this.S(new D.aJ())},
eN:function(a,b){return this.S(new D.aK())},
gdO:function(){var s=this,r=s.dx
if(r==null){r=new D.cI(H.b([],t.i),H.b([],t.U),H.b([],t.o),H.b([],t.D),H.b([],t.e))
r.cC(r.geI(),r.gfl(),r.gfp())
r.gn().l(0,s.gcV())
r.gdN().l(0,s.gar())
s.dx=r}return r},
gd9:function(){var s=this.r
return s==null?this.r=O.ek(this,"ambient"):s},
gdk:function(){var s=this.x
return s==null?this.x=O.ek(this,"diffuse"):s},
gbD:function(){var s=this.z
return s==null?this.z=new O.ia(new V.W(0,0,0),this,"specular",new A.au(!1,!1,!1)):s},
cM:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.w,a1=new H.R(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=H.b([],t.i)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.r)(a2),++r){q=a2[r]
p=q.gat()
o=a1.h(0,q.gat())
a1.k(0,p,o==null?1:o)}n=H.b([],t.cn)
a1.C(0,new O.ib(b,n))
C.b.b1(n,new O.ic())
m=new H.R(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=H.b([],t.U)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.r)(a2),++r){p=m.h(0,0)
m.k(0,0,p==null?1:p)}l=H.b([],t.fD)
m.C(0,new O.id(b,l))
C.b.b1(l,new O.ie())
k=new H.R(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=H.b([],t.o)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.r)(a2),++r){q=a2[r]
p=q.gat()
o=k.h(0,q.gat())
k.k(0,p,o==null?1:o)}j=H.b([],t.eg)
k.C(0,new O.ig(b,j))
C.b.b1(j,new O.ih())
i=new H.R(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=H.b([],t.D)
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.r)(a0),++r){q=a0[r]
s=q.gat()
p=i.h(0,q.gat())
i.k(0,s,p==null?1:p)}h=H.b([],t.c3)
i.C(0,new O.ii(b,h))
C.b.b1(h,new O.ij())
a0=C.c.a0(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.i8(new V.ah(0,0,0,0))
a2=b.f
a2=(a2==null?b.f=O.ek(b,"emission"):a2).c
s=b.gd9().c
p=b.gdk().c
o=b.y
o=(o==null?b.y=O.ek(b,"invDiffuse"):o).c
g=b.gbD().c
f=b.Q
f=(f==null?b.Q=new O.i6(b,"bump",new A.au(!1,!1,!1)):f).c
e=b.cx
e=(e==null?b.cx=O.ek(b,"reflect"):e).c
d=b.cy
d=(d==null?b.cy=new O.i9(new V.W(0,0,0),b,"refract",new A.au(!1,!1,!1)):d).c
c=b.db
return A.mT(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.i5(b,"alpha",new A.au(!1,!1,!1)):c).c,n,l,j,h)},
ek:function(a,b){},
ap:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.aF(m==null?H.b([],t.e):m)
s=H.Q(m).c
for(;m.t();){r=s.a(m.d)
q=$.j8
if(q==null)q=$.j8=new V.B(0,0,1)
r.c=q
p=$.j7
r.d=p==null?$.j7=new V.B(0,1,0):p
p=$.j6
r.e=p==null?$.j6=new V.B(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.bz(q).F()
r.d=n.bz(r.d).F()
r.e=n.bz(r.e).F()}}},
dV:function(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.a
if(a9==null){s=a7.cM()
r=s.bq
a9=t.eI.a(b0.fr.h(0,r))
if(a9==null){q=b0.a
p=t.S
o=t.W
a9=new A.cP(s,H.b([],t.p),P.P(p,o),P.P(p,t.J),P.P(p,o),P.P(p,t.O),P.P(p,o),P.P(p,t.b),P.P(p,o),P.P(p,t.R),q,r)
a9.e8(s,q)
b0.d8(a9)}a9=a7.a=a9
b1.e=null}n=a9.x
m=n.dr
s=b1.e
if(!(s instanceof Z.bJ))s=b1.e=null
if(s==null||!s.d.m(0,m)){s=n.k4
if(s){r=b1.d
if(r!=null)r.aB()}r=n.r1
if(r){q=b1.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gR().c3()
q.ga1().c3()
q=q.e
if(q!=null)q.aG(0)}}q=n.rx
if(q){p=b1.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.ga1().h7()
p=p.e
if(p!=null)p.aG(0)}}p=b1.d
l=p==null?a8:p.dg(new Z.ff(b0.a),m)
if(l==null)return
p=l.aD($.aE())
if(p!=null){o=a9.y
o=o==null?a8:o.c
p.e=o==null?0:o}if(s){s=l.aD($.bg())
if(s!=null){p=a9.Q
p=p==null?a8:p.c
s.e=p==null?1:p}}if(r){s=l.aD($.bf())
if(s!=null){r=a9.z
r=r==null?a8:r.c
s.e=r==null?2:r}}if(n.r2){s=l.aD($.bF())
if(s!=null){r=a9.ch
r=r==null?a8:r.c
s.e=r==null?3:r}}if(q){s=l.aD($.bG())
if(s!=null){r=a9.cx
r=r==null?a8:r.c
s.e=r==null?4:r}}if(n.ry){s=l.aD($.be())
if(s!=null){r=a9.cy
r=r==null?a8:r.c
s.e=r==null?5:r}}b1.e=l}k=H.b([],t.d)
a9.a8(b0)
if(n.fr){s=b0.dx
s=s.ga2(s)
r=a9.db
if(r!=null)r.an(s.a9(0,!0))}if(n.fx){s=b0.cx
if(s==null){s=b0.db
r=b0.dx
r=b0.cx=s.ga2(s).H(0,r.ga2(r))
s=r}r=a9.dx
if(r!=null)r.an(s.a9(0,!0))}s=b0.ch
if(s==null){s=b0.dx
s=b0.ch=b0.ghI().H(0,s.ga2(s))}r=a9.fr
if(r!=null)r.an(s.a9(0,!0))
if(n.go){s=b0.db
s=s.ga2(s)
r=a9.dy
if(r!=null)r.an(s.a9(0,!0))}if(n.x1){s=$.kW
if(s==null){s=new V.cR(1,0,0,0,1,0,0,0,1)
$.kW=s}r=a9.go
if(r!=null)r.an(s.a9(0,!0))}if(n.x2){s=V.ad()
r=a9.id
if(r!=null)r.an(s.a9(0,!0))}if(n.y1){s=V.ad()
r=a9.k1
if(r!=null)r.an(s.a9(0,!0))}if(n.aS>0){s=a7.e.a
j=s.length
r=a9.k2
if(r!=null)r.a.uniform1i(r.d,j)
for(i=0;i<j;++i){if(i>=s.length)return H.d(s,i)
r=s[i]
q=a9.k3
if(i>=q.length)return H.d(q,i)
q=q[i]
h=new Float32Array(H.bB(r.a9(0,!0)))
q.a.uniformMatrix4fv(q.d,!1,h)}}if(n.a.a){s=a7.f
s=s==null?a8:s.f
if(s==null)s=new V.W(0,0,0)
r=a9.k4
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}if(n.k1){if(n.b.a){s=a7.r
s=s==null?a8:s.f
if(s==null)s=new V.W(0,0,0)
r=a9.rx
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}if(n.c.a){s=a7.x
s=s==null?a8:s.f
if(s==null)s=new V.W(0,0,0)
r=a9.x2
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}if(n.d.a){s=a7.y
s=s==null?a8:s.f
if(s==null)s=new V.W(0,0,0)
r=a9.aS
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}s=n.e.a
if(!s)r=!1
else r=!0
if(r){r=a7.z
r=r==null?a8:r.ch
if(r==null)r=100
q=a9.dt
if(q!=null)q.a.uniform1f(q.d,r)}if(s){s=a7.z
s=s==null?a8:s.f
if(s==null)s=new V.W(1,1,1)
r=a9.ds
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}s=n.z
if(s.length>0){g=new H.R(t.w)
r=a7.dx
r=r==null?a8:r.e
if(r==null)r=H.b([],t.i)
q=r.length
p=t.Y
f=0
for(;f<r.length;r.length===q||(0,H.r)(r),++f){e=r[f]
d=e.gat()
c=g.h(0,d)
if(c==null)c=0
g.k(0,d,c+1)
o=a9.c9.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
o=e.ghX()
a=$.aQ
o=o.bh(a==null?$.aQ=new V.T(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gi1()
a=$.aQ
o=o.bh(a==null?$.aQ=new V.T(0,0,0):a)
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gaR(e)
a=b.d
a.a.uniform3f(a.d,o.a,o.b,o.c)
if(e.gdq()){o=e.gda()
a=b.e
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdc()
a=b.f
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdd()
a=b.r
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.r)(s),++f){q=s[f].a
j=g.h(0,q)
if(j==null)j=0
q=a9.c8.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.Q
if(s.length>0){r=b0.db
a0=r.ga2(r)
a1=new H.R(t.w)
r=a7.dx
r=r==null?a8:r.f
if(r==null)r=H.b([],t.U)
q=r.length
p=t.V
f=0
for(;f<r.length;r.length===q||(0,H.r)(r),++f){e=r[f]
c=a1.h(0,0)
if(c==null)c=0
a1.k(0,0,c+1)
o=a9.cb.h(0,0)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
o=a0.bz(e.c).F()
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.b
a=b.f
a.a.uniform3f(a.d,o.a,o.b,o.c)}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.r)(s),++f){q=s[f].a
j=a1.h(0,q)
if(j==null)j=0
q=a9.ca.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.ch
if(s.length>0){r=b0.db
a0=r.ga2(r)
a2=new H.R(t.w)
r=a7.dx
r=r==null?a8:r.r
if(r==null)r=H.b([],t.o)
q=r.length
p=t.C
f=0
for(;f<r.length;r.length===q||(0,H.r)(r),++f){e=r[f]
d=e.gat()
c=a2.h(0,d)
if(c==null)c=0
a2.k(0,d,c+1)
o=a9.cd.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
a3=a0.H(0,e.ga2(e))
o=e.ga2(e)
a=$.aQ
o=o.bh(a==null?$.aQ=new V.T(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=$.aQ
o=a3.bh(o==null?$.aQ=new V.T(0,0,0):o)
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gaR(e)
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
e.gaH()
o=a3.dK(0)
a=b.d
if(a!=null){h=new Float32Array(H.bB(new V.cR(o.a,o.b,o.c,o.e,o.f,o.r,o.y,o.z,o.Q).a9(0,!0)))
a.a.uniformMatrix3fv(a.d,!1,h)}e.gaH()
o=e.gaH()
if(!C.b.L(k,o)){o.su(0,k.length)
k.push(o)}o=e.gaH()
a=o.gb9(o)
if(a){a=b.f
if(a!=null){a4=o.gb9(o)
a5=a.a
a=a.d
if(!a4)a5.uniform1i(a,0)
else a5.uniform1i(a,o.gu(o))}}e.gb0()
o=e.ge2()
a=b.x
if(a!=null)a.a.uniform4f(a.d,o.a,o.b,o.c,o.d)
o=e.gb0()
if(!C.b.L(k,o)){o.su(0,k.length)
k.push(o)}o=e.gb0()
a=o.gb9(o)
if(a){a=b.r
if(a!=null){a4=o.gb9(o)
a5=a.a
a=a.d
if(!a4)a5.uniform1i(a,0)
else a5.uniform1i(a,o.gu(o))}}if(e.gdq()){o=e.gda()
a=b.y
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdc()
a=b.z
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdd()
a=b.Q
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.r)(s),++f){q=s[f].a
j=a2.h(0,q)
if(j==null)j=0
q=a9.cc.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.cx
if(s.length>0){r=b0.db
a0=r.ga2(r)
a6=new H.R(t.w)
r=a7.dx
r=r==null?a8:r.x
if(r==null)r=H.b([],t.D)
q=r.length
p=t.I
f=0
for(;f<r.length;r.length===q||(0,H.r)(r),++f){e=r[f]
d=e.gat()
c=a6.h(0,d)
if(c==null)c=0
a6.k(0,d,c+1)
o=a9.cf.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
o=e.ghH(e)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gi_(e).F()
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=a0.bh(e.ghH(e))
a=b.d
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gaR(e)
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
e.gaH()
o=e.gcA()
a=b.f
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gcw(e)
a=b.r
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gih()
a=b.x
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gii()
a=b.y
if(a!=null)a.a.uniform1f(a.d,o)
e.gaH()
o=e.gaH()
if(!C.b.L(k,o)){o.su(0,k.length)
k.push(o)}o=e.gaH()
a=o.gb9(o)
if(a){a=b.dx
if(a!=null){a4=o.d
a5=a.a
a=a.d
if(!a4)a5.uniform1i(a,0)
else a5.uniform1i(a,o.a)}}e.gb0()
o=e.ge2()
a=b.z
if(a!=null)a.a.uniform4f(a.d,o.a,o.b,o.c,o.d)
o=e.gb0()
if(!C.b.L(k,o)){o.su(0,k.length)
k.push(o)}o=e.gb0()
a=o.gb9(o)
if(a){a=b.dy
if(a!=null){a4=o.d
a5=a.a
a=a.d
if(!a4)a5.uniform1i(a,0)
else a5.uniform1i(a,o.a)}}if(e.gi0()){o=e.ghZ()
a=b.Q
if(a!=null)a.a.uniform1f(a.d,o)
o=e.ghY()
a=b.ch
if(a!=null)a.a.uniform1f(a.d,o)}if(e.gdq()){o=e.gda()
a=b.cx
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdc()
a=b.cy
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdd()
a=b.db
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.r)(s),++f){q=s[f].a
j=a6.h(0,q)
if(j==null)j=0
q=a9.ce.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}}if(n.dy){s=b0.Q
if(s==null){s=b0.db
s=b0.Q=s.ga2(s).dK(0)}r=a9.fy
if(r!=null)r.an(s.a9(0,!0))}if(n.db){a7.ek(k,a8)
a9.fM(a9.du,a8)
if(n.r.a){s=a7.cx
s=s==null?a8:s.f
if(s==null)s=new V.W(1,1,1)
r=a9.dv
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}s=n.x.a
if(!s)r=!1
else r=!0
if(r){r=a7.cy
r=r==null?a8:r.ch
if(r==null)r=0
q=a9.dw
if(q!=null)q.a.uniform1f(q.d,r)}if(s){s=a7.cy
s=s==null?a8:s.f
if(s==null)s=new V.W(1,1,1)
r=a9.dz
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}}s=n.y.a
r=!s
if(r)q=!1
else q=!0
if(q){if(s){s=a7.db
s=s==null?a8:s.f
if(s==null)s=1
q=a9.dA
if(q!=null)q.a.uniform1f(q.d,s)}s=b0.a
s.enable(3042)
s.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].a8(b0)
s=t.ed.a(b1.e)
s.a8(b0)
s.ac(b0)
s.aY(b0)
if(r)s=!1
else s=!0
if(s)b0.a.disable(3042)
for(i=0;i<k.length;++i)k[i].aY(b0)
b0.a.useProgram(a8)
a9.gaf(a9).dl()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cM().bq}}
O.ib.prototype={
$2:function(a,b){return this.b.push(new A.aZ(a,C.c.a0(b+3,4)*4))},
$S:6}
O.ic.prototype={
$2:function(a,b){return C.c.ag(a.a,b.a)},
$S:46}
O.id.prototype={
$2:function(a,b){return this.b.push(new A.b1(a,C.c.a0(b+3,4)*4))},
$S:6}
O.ie.prototype={
$2:function(a,b){return C.c.ag(a.a,b.a)},
$S:47}
O.ig.prototype={
$2:function(a,b){return this.b.push(new A.b4(a,C.c.a0(b+3,4)*4))},
$S:6}
O.ih.prototype={
$2:function(a,b){return C.c.ag(a.a,b.a)},
$S:48}
O.ii.prototype={
$2:function(a,b){return this.b.push(new A.b6(a,C.c.a0(b+3,4)*4))},
$S:6}
O.ij.prototype={
$2:function(a,b){return C.c.ag(a.a,b.a)},
$S:49}
O.i5.prototype={
az:function(){var s,r=this
r.cE()
s=r.f
$.A().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.S(new D.y(r.b,s,1))}}}
O.ej.prototype={
az:function(){},
cZ:function(a){var s,r,q=this
if(!q.c.m(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.az()
s=q.a
s.a=null
s.S(null)}}}
O.i6.prototype={}
O.cQ.prototype={
cY:function(a){var s,r=this
if(!r.f.m(0,a)){s=r.f
r.f=a
r.a.S(new D.y(r.b+".color",s,a))}},
az:function(){this.cE()
this.cY(new V.W(1,1,1))},
saR:function(a,b){this.cZ(new A.au(!0,!1,!1))
this.cY(b)}}
O.i8.prototype={}
O.i9.prototype={
az:function(){var s,r=this
r.cF()
s=r.ch
$.A().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.S(new D.y(r.b+".refraction",s,1))}}}
O.ia.prototype={
d_:function(a){var s=this,r=s.ch
$.A().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.S(new D.y(s.b+".shininess",r,a))}},
az:function(){this.cF()
this.d_(100)}}
O.c0.prototype={}
O.d2.prototype={
gn:function(){var s=this.r
return s==null?this.r=D.D():s},
S:function(a){var s=this.r
return s==null?null:s.w(a)},
aw:function(){return this.S(null)},
f0:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gar(),q=t.a,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
n=o.f
if(n==null)n=o.f=new D.bl()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.aw()},
f2:function(a,b){var s,r
for(s=b.gN(b),r=this.gar();s.t();)s.gv(s).gn().K(0,r)
this.aw()},
sbn:function(a){var s=this.e
if(s!==a){this.e=a
this.S(new D.y("blend",s,a))}},
ez:function(a){a=C.c.a0(a+3,4)*4
if(a<=0)return 4
return a},
dV:function(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.c.a,a2=a.ez(a1.length)
if(a2!==a.d||a.e!==a.f){a.d=a2
a.f=a.e
a.a=null}s=a.a
if(s==null){r=a.e
q=r.a
s=t.fB.a(a3.fr.h(0,"TextureLayout_"+a2+"_"+C.c.i(q)))
if(s==null){p=a3.a
o=t.bT
s=new A.d3(H.b([],t.h4),H.b([],t.p),H.b([],o),H.b([],o),H.b([],o),H.b([],o),H.b([],t.fL),p,"TextureLayout_"+a2+"_"+C.c.i(q))
s.ea(a2,r,p)
a3.d8(s)}s=a.a=s}if(a4.e==null){r=a4.d
r=r==null?a0:r.dg(new Z.ff(a3.a),$.aE())
if(r==null)r=a0
else{q=r.aD($.aE())
if(q!=null){p=s.x
p=p==null?a0:p.c
q.e=p==null?0:p}}a4.e=r}s.a8(a3)
n=H.b([],t.d)
for(r=s.dy,q=s.dx,p=s.db,o=s.cy,m=s.cx,l=s.ch,k=s.Q,j=0,i=0;i<a1.length;++i){h=a1[i]
g=h.a
if(g!=null){if(!C.b.L(n,g)){g.a=n.length
n.push(g)}if(j>=k.length)return H.d(k,j)
f=k[j]
e=g.d
d=f.a
f=f.d
if(!e)d.uniform1i(f,0)
else d.uniform1i(f,g.a)
f=h.b
if(j>=l.length)return H.d(l,j)
e=l[j]
c=new Float32Array(H.bB(f.a9(0,!0)))
e.a.uniformMatrix4fv(e.d,!1,c)
b=h.c
if(j>=m.length)return H.d(m,j)
f=m[j]
f.a.uniform2f(f.d,b.a,b.b)
if(j>=o.length)return H.d(o,j)
f=o[j]
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
f.a.uniform1i(f.d,0);++j}}a1=s.y
if(a1!=null)a1.a.uniform1i(a1.d,j)
a1=s.z
if(a1!=null)a1.e1(a.b)
for(a1=a3.a,i=0;i<n.length;++i){r=n[i]
if(!r.c&&r.d){r.c=!0
a1.activeTexture(33984+r.a)
a1.bindTexture(3553,r.b)}}r=a4.e
if(r instanceof Z.bJ){r.a8(a3)
r.ac(a3)
r.aY(a3)}else a4.e=null
a1.useProgram(a0)
s.gaf(s).dl()
for(i=0;i<n.length;++i){r=n[i]
if(r.c){r.c=!1
a1.activeTexture(33984+r.a)
a1.bindTexture(3553,a0)}}}}
O.bt.prototype={
S:function(a){var s=this.f
return s==null?null:s.w(a)},
aw:function(){return this.S(null)}}
T.c1.prototype={}
T.eV.prototype={}
T.eW.prototype={
gn:function(){var s=this.y
return s==null?this.y=D.D():s}}
X.hp.prototype={
gn:function(){var s=this.fr
return s==null?this.fr=D.D():s},
a_:function(a){var s=this.fr
return s==null?null:s.w(a)},
sal:function(a,b){var s,r=this
if(b<1)b=1
s=r.a
if(s!==b){r.y=null
r.c=r.a=b
r.a_(new D.y("width",s,b))}},
sah:function(a,b){var s,r=this
if(b<1)b=1
s=r.b
if(s!==b){r.y=null
r.d=r.b=b
r.a_(new D.y("height",s,b))}},
a8:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){s=a.a
r=s.drawingBufferWidth
if(r==null)r=512
h.sal(0,C.c.X(r*h.r))
s=s.drawingBufferHeight
if(s==null)s=512
h.sah(0,C.c.X(s*h.x))}if(h.y==null){s=a.a
r=h.ch
q=h.a
p=h.b
o=H.hi(s.getParameter(3379))
n=V.kF(q)
m=V.kF(p)
o=V.kF(o)
n=Math.min(n,o)
m=Math.min(m,o)
l=s.createTexture()
l.toString
s.bindTexture(f,l)
s.texParameteri(f,10242,33071)
s.texParameteri(f,10243,33071)
s.texParameteri(f,10241,9729)
s.texParameteri(f,10240,9729)
C.a_.hQ(s,f,0,6408,n,m,0,6408,5121,g)
s.bindTexture(f,g)
k=T.lb(l)
k.e=q
k.f=p
k.r=n
k.x=m
if(!k.d){k.d=!0
q=k.y
if(q!=null)q.dn()}r.b=k.b
r.c=k.c
r.d=k.d
r.e=k.e
r.f=k.f
r.r=k.r
r.x=k.x
q=r.y
if(q!=null)q.dn()
q=r.b
h.z=q
h.c=r.r
h.d=r.x
s.bindTexture(f,q)
r=s.createRenderbuffer()
r.toString
h.Q=r
s.bindRenderbuffer(e,r)
s.renderbufferStorage(e,33189,h.c,h.d)
r=s.createFramebuffer()
r.toString
h.y=r
s.bindFramebuffer(d,r)
s.framebufferTexture2D(d,36064,f,h.z,0)
s.framebufferRenderbuffer(d,36096,e,h.Q)
s.bindTexture(f,g)
s.bindRenderbuffer(e,g)
s.bindFramebuffer(d,g)}s=a.a
s.bindFramebuffer(d,h.y)
s.enable(2884)
s.enable(2929)
s.depthFunc(513)
j=h.dy
r=j.c
a.c=C.d.X(r*h.a)
q=j.d
a.d=C.d.X(q*h.b)
p=h.c
i=C.d.X(j.a*p)
l=h.d
s.viewport(i,C.d.X(j.b*l),C.d.X(r*p),C.d.X(q*l))
s.clearDepth(h.db)
r=h.cx
q=r.a
p=r.b
l=r.c
r=r.d
s.clearColor(q,p,l,r)
if(16640>0)s.clear(16640)},
aY:function(a){a.a.bindFramebuffer(36160,null)}}
X.hT.prototype={
gn:function(){var s=this.x
return s==null?this.x=D.D():s},
a8:function(a){var s,r,q,p,o,n,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
s=m.drawingBufferWidth
if(s==null)s=512
r=m.drawingBufferHeight
if(r==null)r=512
q=this.r
p=C.d.X(q.a*s)
o=C.d.X(q.b*r)
n=C.d.X(q.c*s)
a.c=n
q=C.d.X(q.d*r)
a.d=q
m.viewport(p,o,n,q)
m.clearDepth(2000)
q=this.a
m.clearColor(q.a,q.b,q.c,q.d)
m.clear(16640)},
aY:function(a){}}
X.hV.prototype={
gn:function(){var s=this.b
return s==null?this.b=D.D():s}}
X.ex.prototype={
gn:function(){var s=this.f
return s==null?this.f=D.D():s},
a_:function(a){var s=this.f
return s==null?null:s.w(a)},
eg:function(){return this.a_(null)}}
X.iJ.prototype={}
V.k1.prototype={
$1:function(a){var s=C.d.cz(this.a.gho(),2)
if(s!=="0.00")P.kG(s+" fps")},
$S:51}
V.is.prototype={
d6:function(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=l.a,j=P.li().gcs().h(0,k)
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
o=J.bD(p)
o.gbo(p).l(0,q)
n=W.mI("radio")
n.checked=s
n.name=k
W.a4(n,"change",new V.it(l,n,c,b),!1)
q.children.toString
q.appendChild(n).toString
m=r.createElement("span")
m.textContent=b
q.appendChild(m).toString
p=o.gbo(p)
r=r.createElement("br")
r.toString
p.l(0,r)},
c1:function(a,b,c){return this.d6(a,b,c,!1)},
d4:function(a){var s,r,q=P.li(),p=t.N,o=P.mQ(q.gcs(),p,p)
o.k(0,this.a,a)
s=q.dW(0,o)
p=window.history
p.toString
r=s.gc_()
p.replaceState(new P.jt([],[]).bA(""),"",r)}}
V.it.prototype={
$1:function(a){var s=this,r=s.b.checked
if(r===!0){s.c.$0()
s.a.d4(s.d)}},
$S:4}
V.iC.prototype={
d7:function(a){var s,r,q,p,o,n,m=this.fR(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.O(C.b.hr(a)),s=new P.cc(m.dY(new H.bR(s,s.gj(s))).a());s.t();){r=s.gv(s)
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
if(H.m1(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.ku(C.U,r,C.e,!1)
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
h1:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
fR:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other",f=this.b
if(f!=null)return f
s=t.N
f=new L.iO(P.P(s,t.dl),P.P(s,t.f7),P.kV(s))
f.d=f.J(0,o)
s=f.J(0,o).p(0,n)
r=t.t
q=new K.Y(H.b([],r))
q.Y(new H.O("*"))
s.a.push(q)
s.c=!0
s=f.J(0,n).p(0,n)
q=t.B
p=H.b([],q)
s.a.push(new K.aO(p))
s=new K.Y(H.b([],r))
s.Y(new H.O("*"))
p.push(s)
s=f.J(0,n).p(0,"BoldEnd")
p=new K.Y(H.b([],r))
p.Y(new H.O("*"))
s.a.push(p)
s.c=!0
s=f.J(0,o).p(0,m)
p=new K.Y(H.b([],r))
p.Y(new H.O("_"))
s.a.push(p)
s.c=!0
s=f.J(0,m).p(0,m)
p=H.b([],q)
s.a.push(new K.aO(p))
s=new K.Y(H.b([],r))
s.Y(new H.O("_"))
p.push(s)
s=f.J(0,m).p(0,l)
p=new K.Y(H.b([],r))
p.Y(new H.O("_"))
s.a.push(p)
s.c=!0
s=f.J(0,o).p(0,k)
p=new K.Y(H.b([],r))
p.Y(new H.O("`"))
s.a.push(p)
s.c=!0
s=f.J(0,k).p(0,k)
p=H.b([],q)
s.a.push(new K.aO(p))
s=new K.Y(H.b([],r))
s.Y(new H.O("`"))
p.push(s)
s=f.J(0,k).p(0,"CodeEnd")
p=new K.Y(H.b([],r))
p.Y(new H.O("`"))
s.a.push(p)
s.c=!0
s=f.J(0,o).p(0,j)
p=new K.Y(H.b([],r))
p.Y(new H.O("["))
s.a.push(p)
s.c=!0
s=f.J(0,j).p(0,i)
p=new K.Y(H.b([],r))
p.Y(new H.O("|"))
s.a.push(p)
p=f.J(0,j).p(0,h)
s=new K.Y(H.b([],r))
s.Y(new H.O("]"))
p.a.push(s)
p.c=!0
p=f.J(0,j).p(0,j)
s=H.b([],q)
p.a.push(new K.aO(s))
p=new K.Y(H.b([],r))
p.Y(new H.O("|]"))
s.push(p)
p=f.J(0,i).p(0,h)
s=new K.Y(H.b([],r))
s.Y(new H.O("]"))
p.a.push(s)
p.c=!0
p=f.J(0,i).p(0,i)
s=H.b([],q)
p.a.push(new K.aO(s))
p=new K.Y(H.b([],r))
p.Y(new H.O("|]"))
s.push(p)
f.J(0,o).p(0,g).a.push(new K.dT())
p=f.J(0,g).p(0,g)
q=H.b([],q)
p.a.push(new K.aO(q))
r=new K.Y(H.b([],r))
r.Y(new H.O("*_`["))
q.push(r)
r=f.J(0,"BoldEnd")
r.d=r.a.bg(n)
r=f.J(0,l)
r.d=r.a.bg(m)
r=f.J(0,"CodeEnd")
r.d=r.a.bg(k)
r=f.J(0,h)
r.d=r.a.bg("Link")
r=f.J(0,g)
r.d=r.a.bg(g)
return this.b=f}}
V.iE.prototype={
$1:function(a){P.le(C.o,new V.iD(this.a))},
$S:4}
V.iD.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.X(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.v(-0.01*s)+"px"
q.top=r},
$S:2}
S.jX.prototype={
$0:function(){this.a.sbn(C.v)},
$S:2}
S.jY.prototype={
$0:function(){this.a.sbn(C.i)},
$S:2}
S.jZ.prototype={
$0:function(){this.a.sbn(C.w)},
$S:2}
S.k_.prototype={
$0:function(){this.a.sbn(C.n)},
$S:2};(function aliases(){var s=J.a.prototype
s.e5=s.i
s=J.b2.prototype
s.e6=s.i
s=K.cB.prototype
s.e4=s.aV
s.bE=s.i
s=O.ej.prototype
s.cE=s.az
s=O.cQ.prototype
s.cF=s.az})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"oc","mM",52)
r(P,"oR","np",13)
r(P,"oS","nq",13)
r(P,"oT","nr",13)
q(P,"lS","oM",2)
r(W,"qq","hI",36)
var k
p(k=E.bk.prototype,"gdS",0,0,null,["$1","$0"],["dT","hB"],0,0)
p(k,"gdQ",0,0,null,["$1","$0"],["dR","hy"],0,0)
o(k,"ghw","hx",8)
o(k,"ghz","hA",8)
p(k=E.eX.prototype,"gcH",0,0,null,["$1","$0"],["cJ","cI"],0,0)
n(k,"ghM","dX",2)
m(k=X.fc.prototype,"gf3","f4",4)
m(k,"geO","eP",4)
m(k,"geU","eV",3)
m(k,"gf7","f8",20)
m(k,"gf5","f6",20)
m(k,"gfb","fc",3)
m(k,"gff","fg",3)
m(k,"geY","eZ",3)
m(k,"gfd","fe",3)
m(k,"geW","eX",3)
m(k,"gfh","fi",32)
m(k,"gfj","fk",4)
m(k,"gfC","fD",11)
m(k,"gfw","fz",11)
m(k,"gfA","fB",11)
p(D.bM.prototype,"geb",0,0,null,["$1","$0"],["av","ec"],0,0)
p(k=D.cI.prototype,"gcT",0,0,null,["$1","$0"],["cU","f9"],0,0)
m(k,"gfl","fm",34)
o(k,"geI","eJ",18)
o(k,"gfp","fq",18)
l(V.a3.prototype,"gj","ck",19)
l(V.B.prototype,"gj","ck",19)
p(k=U.bO.prototype,"gaN",0,0,null,["$1","$0"],["M","a7"],0,0)
o(k,"geG","eH",17)
o(k,"gfn","fo",17)
p(k=U.df.prototype,"gaN",0,0,null,["$1","$0"],["M","a7"],0,0)
m(k,"gbO","bP",10)
m(k,"gbQ","bR",10)
m(k,"gbS","bT",10)
p(k=U.dg.prototype,"gaN",0,0,null,["$1","$0"],["M","a7"],0,0)
m(k,"gbO","bP",1)
m(k,"gbQ","bR",1)
m(k,"gbS","bT",1)
m(k,"geA","eB",1)
m(k,"geC","eD",1)
m(k,"gfY","fZ",1)
m(k,"gfW","fX",1)
m(k,"gfU","fV",1)
m(U.dh.prototype,"geE","eF",1)
p(k=M.cp.prototype,"gW",0,0,null,["$1","$0"],["V","b3"],0,0)
o(k,"gfs","ft",16)
o(k,"gfu","fv",16)
p(M.ct.prototype,"gW",0,0,null,["$1","$0"],["V","b3"],0,0)
p(k=M.cy.prototype,"gW",0,0,null,["$1","$0"],["V","b3"],0,0)
o(k,"geQ","eR",8)
o(k,"geS","eT",8)
p(k=O.cO.prototype,"gar",0,0,null,["$1","$0"],["S","aw"],0,0)
p(k,"gcV",0,0,null,["$1","$0"],["cW","fL"],0,0)
o(k,"geK","eL",21)
o(k,"geM","eN",21)
p(k=O.d2.prototype,"gar",0,0,null,["$1","$0"],["S","aw"],0,0)
o(k,"gf_","f0",14)
o(k,"gf1","f2",14)
p(O.bt.prototype,"gar",0,0,null,["$1","$0"],["S","aw"],0,0)
p(X.ex.prototype,"gef",0,0,null,["$1","$0"],["a_","eg"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.L,null)
q(P.L,[H.kb,J.a,J.ac,P.H,P.dp,P.k,H.bR,P.e9,H.cz,H.f9,H.cr,H.iR,H.iq,H.fV,H.bK,P.K,H.i_,H.eg,H.ec,H.ao,H.fx,P.dB,P.cb,P.cc,P.fh,P.c_,P.eQ,P.jC,P.dH,P.jo,P.dn,P.i,P.h7,P.cN,P.d0,P.e_,P.jB,P.jA,P.X,P.bj,P.ew,P.d1,P.fu,P.hS,P.ae,P.a0,P.bA,P.iW,P.fP,W.hA,W.k6,W.kj,W.I,W.cA,P.js,P.fN,K.dT,K.cB,K.Y,L.eN,L.eY,L.eZ,L.iO,O.a5,O.cS,E.hs,E.bk,E.bH,E.bW,E.fs,E.iu,E.eX,Z.fe,Z.ff,Z.bJ,Z.cD,Z.bz,D.hu,D.bl,D.N,X.co,X.ee,X.hY,X.i3,X.a7,X.io,X.iP,X.fc,D.bM,V.W,V.ah,V.hL,V.cR,V.b3,V.S,V.T,V.bs,V.eC,V.a3,V.B,U.df,U.dg,U.dh,M.ct,M.cy,A.dX,A.hm,A.au,A.aZ,A.b1,A.b4,A.b6,A.i7,A.d9,A.da,A.dc,A.de,A.bL,A.a1,A.iU,F.av,F.hP,F.hZ,F.iz,F.eH,F.eI,F.iA,F.c7,F.G,F.c8,F.c9,F.jd,F.je,O.c0,O.ej,O.i8,O.bt,X.iJ,X.hV,X.ex,V.is,V.iC])
q(J.a,[J.ea,J.cG,J.b2,J.t,J.bQ,J.bn,H.cT,H.a_,W.e,W.hk,W.bh,W.aI,W.E,W.fm,W.am,W.hD,W.hE,W.fo,W.cw,W.fq,W.hF,W.l,W.fv,W.aw,W.hU,W.fz,W.cC,W.i2,W.ik,W.fD,W.fE,W.ay,W.fF,W.fH,W.az,W.fL,W.fO,W.aB,W.fQ,W.aC,W.fW,W.ak,W.h_,W.iM,W.ar,W.h1,W.iQ,W.j0,W.h8,W.ha,W.hc,W.he,W.hg,P.aM,P.fB,P.aP,P.fJ,P.ir,P.fX,P.aS,P.h3,P.hn,P.fi,P.bY,P.fT])
q(J.b2,[J.ey,J.c4,J.aL])
r(J.hW,J.t)
q(J.bQ,[J.cF,J.eb])
q(P.H,[H.cH,P.f1,H.ed,H.f8,H.eF,H.ft,P.dW,P.et,P.aG,P.fa,P.f7,P.eO,P.e0,P.e2])
r(P.cK,P.dp)
q(P.cK,[H.c5,W.fk,W.fj,P.e6])
r(H.O,H.c5)
q(P.k,[H.m,H.aN,H.dj,P.cE])
r(H.cx,H.aN)
q(P.e9,[H.ei,H.fg])
r(H.cs,H.cr)
r(H.cX,P.f1)
q(H.bK,[H.iK,H.hX,H.jS,H.jT,H.jU,P.ji,P.jh,P.jj,P.jk,P.jx,P.jw,P.jL,P.jq,P.jr,P.i0,P.i4,P.j4,P.j3,P.hG,P.hH,P.j_,P.iX,P.iY,P.iZ,P.jz,P.jy,P.jE,P.jF,P.jG,W.il,W.im,W.iy,W.iH,W.jl,P.ju,P.jv,P.jD,P.jM,P.hQ,P.hR,P.ho,E.iv,E.iw,E.ix,E.iL,D.hN,D.hO,F.k2,F.jN,F.iB,F.jg,F.jf,F.ja,F.jb,O.ib,O.ic,O.id,O.ie,O.ig,O.ih,O.ii,O.ij,V.k1,V.it,V.iE,V.iD,S.jX,S.jY,S.jZ,S.k_])
q(H.iK,[H.iG,H.cm])
r(P.cM,P.K)
r(H.R,P.cM)
r(H.cJ,H.m)
r(H.bV,H.a_)
q(H.bV,[H.dr,H.dt])
r(H.ds,H.dr)
r(H.bq,H.ds)
r(H.du,H.dt)
r(H.cU,H.du)
q(H.cU,[H.eo,H.ep,H.eq,H.er,H.es,H.cV,H.br])
r(H.dC,H.ft)
r(P.dy,P.cE)
r(P.jp,P.jC)
r(P.dv,P.dH)
r(P.dm,P.dv)
r(P.dF,P.cN)
r(P.c6,P.dF)
q(P.e_,[P.hq,P.hJ])
r(P.e1,P.eQ)
q(P.e1,[P.hr,P.j5,P.j2])
r(P.j1,P.hJ)
q(P.aG,[P.d_,P.e8])
r(P.fn,P.bA)
q(W.e,[W.u,W.e5,W.bS,W.ap,W.dw,W.aq,W.af,W.dz,W.fd,W.ca,P.dZ,P.b_])
q(W.u,[W.C,W.at])
q(W.C,[W.o,P.n])
q(W.o,[W.dU,W.dV,W.bi,W.e7,W.bP,W.eG,W.b7])
r(W.hz,W.aI)
r(W.cu,W.fm)
q(W.am,[W.hB,W.hC])
r(W.fp,W.fo)
r(W.cv,W.fp)
r(W.fr,W.fq)
r(W.e4,W.fr)
r(W.ai,W.bh)
r(W.fw,W.fv)
r(W.bN,W.fw)
r(W.fA,W.fz)
r(W.bm,W.fA)
r(W.aU,W.l)
q(W.aU,[W.bo,W.aj,W.bu])
r(W.el,W.fD)
r(W.em,W.fE)
r(W.fG,W.fF)
r(W.en,W.fG)
r(W.fI,W.fH)
r(W.cW,W.fI)
r(W.fM,W.fL)
r(W.ez,W.fM)
r(W.eE,W.fO)
r(W.dx,W.dw)
r(W.eK,W.dx)
r(W.fR,W.fQ)
r(W.eL,W.fR)
r(W.eP,W.fW)
r(W.h0,W.h_)
r(W.eT,W.h0)
r(W.dA,W.dz)
r(W.eU,W.dA)
r(W.h2,W.h1)
r(W.f_,W.h2)
r(W.b8,W.aj)
r(W.h9,W.h8)
r(W.fl,W.h9)
r(W.dk,W.cw)
r(W.hb,W.ha)
r(W.fy,W.hb)
r(W.hd,W.hc)
r(W.dq,W.hd)
r(W.hf,W.he)
r(W.fS,W.hf)
r(W.hh,W.hg)
r(W.fZ,W.hh)
r(W.dl,P.c_)
r(P.jt,P.js)
r(P.ab,P.fN)
r(P.fC,P.fB)
r(P.ef,P.fC)
r(P.fK,P.fJ)
r(P.eu,P.fK)
r(P.fY,P.fX)
r(P.eR,P.fY)
r(P.h4,P.h3)
r(P.f0,P.h4)
r(P.dY,P.fi)
r(P.ev,P.b_)
r(P.fU,P.fT)
r(P.eM,P.fU)
q(K.cB,[K.aO,L.d5])
q(E.hs,[Z.bI,A.bZ,T.c1])
q(D.N,[D.aJ,D.aK,D.y,X.eA])
q(X.eA,[X.cL,X.bT,X.bU,X.d4])
q(O.a5,[D.cI,U.bO,M.cp])
q(D.hu,[U.hx,U.Z])
r(U.cq,U.Z)
q(A.bZ,[A.cP,A.d3])
q(A.a1,[A.bv,A.f3,A.f4,A.f5,A.f2,A.d6,A.c3,A.d7,A.d8,A.f6,A.db,A.bw,A.bx,A.dd])
r(F.iF,F.hP)
r(F.iT,F.hZ)
r(F.jc,F.jd)
r(F.ip,F.je)
q(O.c0,[O.cO,O.d2])
q(O.ej,[O.i5,O.i6,O.cQ])
q(O.cQ,[O.i9,O.ia])
r(T.eV,T.c1)
r(T.eW,T.eV)
q(X.iJ,[X.hp,X.hT])
s(H.c5,H.f9)
s(H.dr,P.i)
s(H.ds,H.cz)
s(H.dt,P.i)
s(H.du,H.cz)
s(P.dp,P.i)
s(P.dF,P.h7)
s(P.dH,P.d0)
s(W.fm,W.hA)
s(W.fo,P.i)
s(W.fp,W.I)
s(W.fq,P.i)
s(W.fr,W.I)
s(W.fv,P.i)
s(W.fw,W.I)
s(W.fz,P.i)
s(W.fA,W.I)
s(W.fD,P.K)
s(W.fE,P.K)
s(W.fF,P.i)
s(W.fG,W.I)
s(W.fH,P.i)
s(W.fI,W.I)
s(W.fL,P.i)
s(W.fM,W.I)
s(W.fO,P.K)
s(W.dw,P.i)
s(W.dx,W.I)
s(W.fQ,P.i)
s(W.fR,W.I)
s(W.fW,P.K)
s(W.h_,P.i)
s(W.h0,W.I)
s(W.dz,P.i)
s(W.dA,W.I)
s(W.h1,P.i)
s(W.h2,W.I)
s(W.h8,P.i)
s(W.h9,W.I)
s(W.ha,P.i)
s(W.hb,W.I)
s(W.hc,P.i)
s(W.hd,W.I)
s(W.he,P.i)
s(W.hf,W.I)
s(W.hg,P.i)
s(W.hh,W.I)
s(P.fB,P.i)
s(P.fC,W.I)
s(P.fJ,P.i)
s(P.fK,W.I)
s(P.fX,P.i)
s(P.fY,W.I)
s(P.h3,P.i)
s(P.h4,W.I)
s(P.fi,P.K)
s(P.fT,P.i)
s(P.fU,W.I)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{j:"int",U:"double",a2:"num",q:"String",bC:"bool",ae:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([N?])","~(N)","~()","~(aj)","~(l)","~(q,@)","~(j,j)","~(av)","~(j,k<bk>)","~(@,@)","~(N?)","~(bu)","ae()","~(~())","~(j,k<bt>)","q(j)","~(j,k<aA>)","~(j,k<Z?>)","~(j,k<an>)","U()","~(bo)","~(j,k<b3>)","~(~(N))","~(c2,q,j)","@()","bC(u)","~(@)","ae(@,@)","~(a2)","~(q,q)","@(@)","c2(@,@)","~(b8)","~(q,q?)","bC(k<an>)","j(j,j)","q(e)","~(q[@])","~(q,j)","F<q,q>(F<q,q>,q)","T(U)","~(c7,U,U)","bI(j)","~(L?,L?)","ae(~())","ae(@)","j(aZ,aZ)","j(b1,b1)","j(b4,b4)","j(b6,b6)","@(q)","~(iN)","j(@,@)","@(@,q)","C(u)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.nJ(v.typeUniverse,JSON.parse('{"ey":"b2","c4":"b2","aL":"b2","pj":"l","pv":"l","pl":"b_","pk":"e","pE":"e","pI":"e","pi":"n","px":"n","pm":"o","pB":"o","py":"u","pu":"u","q7":"af","pq":"aU","pn":"at","pJ":"at","pH":"aj","pz":"bm","pr":"E","ps":"ak","pD":"bq","pC":"a_","ea":{"bC":[]},"b2":{"kU":[]},"t":{"p":["1"],"m":["1"],"k":["1"]},"hW":{"t":["1"],"p":["1"],"m":["1"],"k":["1"]},"bQ":{"U":[],"a2":[]},"cF":{"U":[],"j":[],"a2":[]},"eb":{"U":[],"a2":[]},"bn":{"q":[]},"cH":{"H":[]},"O":{"i":["j"],"p":["j"],"m":["j"],"k":["j"],"i.E":"j"},"m":{"k":["1"]},"aN":{"k":["2"]},"cx":{"aN":["1","2"],"m":["2"],"k":["2"]},"dj":{"k":["1"]},"c5":{"i":["1"],"p":["1"],"m":["1"],"k":["1"]},"cr":{"F":["1","2"]},"cs":{"F":["1","2"]},"cX":{"H":[]},"ed":{"H":[]},"f8":{"H":[]},"eF":{"H":[]},"R":{"K":["1","2"],"F":["1","2"],"K.V":"2"},"cJ":{"m":["1"],"k":["1"]},"ec":{"l4":[]},"bV":{"w":["1"],"a_":[]},"bq":{"i":["U"],"w":["U"],"p":["U"],"a_":[],"m":["U"],"k":["U"],"i.E":"U"},"cU":{"i":["j"],"w":["j"],"p":["j"],"a_":[],"m":["j"],"k":["j"]},"eo":{"i":["j"],"w":["j"],"p":["j"],"a_":[],"m":["j"],"k":["j"],"i.E":"j"},"ep":{"i":["j"],"w":["j"],"p":["j"],"a_":[],"m":["j"],"k":["j"],"i.E":"j"},"eq":{"i":["j"],"w":["j"],"p":["j"],"a_":[],"m":["j"],"k":["j"],"i.E":"j"},"er":{"i":["j"],"w":["j"],"p":["j"],"a_":[],"m":["j"],"k":["j"],"i.E":"j"},"es":{"i":["j"],"w":["j"],"p":["j"],"a_":[],"m":["j"],"k":["j"],"i.E":"j"},"cV":{"i":["j"],"w":["j"],"p":["j"],"a_":[],"m":["j"],"k":["j"],"i.E":"j"},"br":{"i":["j"],"c2":[],"w":["j"],"p":["j"],"a_":[],"m":["j"],"k":["j"],"i.E":"j"},"ft":{"H":[]},"dC":{"H":[]},"dB":{"iN":[]},"dy":{"k":["1"]},"dm":{"d0":["1"],"m":["1"],"k":["1"]},"cE":{"k":["1"]},"cK":{"i":["1"],"p":["1"],"m":["1"],"k":["1"]},"cM":{"K":["1","2"],"F":["1","2"]},"K":{"F":["1","2"]},"cN":{"F":["1","2"]},"c6":{"F":["1","2"]},"dv":{"d0":["1"],"m":["1"],"k":["1"]},"U":{"a2":[]},"j":{"a2":[]},"p":{"m":["1"],"k":["1"]},"dW":{"H":[]},"f1":{"H":[]},"et":{"H":[]},"aG":{"H":[]},"d_":{"H":[]},"e8":{"H":[]},"fa":{"H":[]},"f7":{"H":[]},"eO":{"H":[]},"e0":{"H":[]},"ew":{"H":[]},"d1":{"H":[]},"e2":{"H":[]},"bA":{"fb":[]},"fP":{"fb":[]},"fn":{"fb":[]},"C":{"u":[],"e":[]},"ai":{"bh":[]},"bo":{"l":[]},"aj":{"l":[]},"u":{"e":[]},"ap":{"e":[]},"aq":{"e":[]},"af":{"e":[]},"bu":{"l":[]},"aU":{"l":[]},"b8":{"aj":[],"l":[]},"o":{"C":[],"u":[],"e":[]},"dU":{"C":[],"u":[],"e":[]},"dV":{"C":[],"u":[],"e":[]},"bi":{"C":[],"u":[],"e":[]},"at":{"u":[],"e":[]},"cv":{"i":["ab<a2>"],"p":["ab<a2>"],"w":["ab<a2>"],"m":["ab<a2>"],"k":["ab<a2>"],"i.E":"ab<a2>"},"cw":{"ab":["a2"]},"e4":{"i":["q"],"p":["q"],"w":["q"],"m":["q"],"k":["q"],"i.E":"q"},"fk":{"i":["C"],"p":["C"],"m":["C"],"k":["C"],"i.E":"C"},"bN":{"i":["ai"],"p":["ai"],"w":["ai"],"m":["ai"],"k":["ai"],"i.E":"ai"},"e5":{"e":[]},"e7":{"C":[],"u":[],"e":[]},"bm":{"i":["u"],"p":["u"],"w":["u"],"m":["u"],"k":["u"],"i.E":"u"},"bP":{"C":[],"u":[],"e":[]},"bS":{"e":[]},"el":{"K":["q","@"],"F":["q","@"],"K.V":"@"},"em":{"K":["q","@"],"F":["q","@"],"K.V":"@"},"en":{"i":["ay"],"p":["ay"],"w":["ay"],"m":["ay"],"k":["ay"],"i.E":"ay"},"fj":{"i":["u"],"p":["u"],"m":["u"],"k":["u"],"i.E":"u"},"cW":{"i":["u"],"p":["u"],"w":["u"],"m":["u"],"k":["u"],"i.E":"u"},"ez":{"i":["az"],"p":["az"],"w":["az"],"m":["az"],"k":["az"],"i.E":"az"},"eE":{"K":["q","@"],"F":["q","@"],"K.V":"@"},"eG":{"C":[],"u":[],"e":[]},"eK":{"i":["ap"],"p":["ap"],"w":["ap"],"e":[],"m":["ap"],"k":["ap"],"i.E":"ap"},"eL":{"i":["aB"],"p":["aB"],"w":["aB"],"m":["aB"],"k":["aB"],"i.E":"aB"},"eP":{"K":["q","q"],"F":["q","q"],"K.V":"q"},"b7":{"C":[],"u":[],"e":[]},"eT":{"i":["af"],"p":["af"],"w":["af"],"m":["af"],"k":["af"],"i.E":"af"},"eU":{"i":["aq"],"p":["aq"],"w":["aq"],"e":[],"m":["aq"],"k":["aq"],"i.E":"aq"},"f_":{"i":["ar"],"p":["ar"],"w":["ar"],"m":["ar"],"k":["ar"],"i.E":"ar"},"fd":{"e":[]},"ca":{"e":[]},"fl":{"i":["E"],"p":["E"],"w":["E"],"m":["E"],"k":["E"],"i.E":"E"},"dk":{"ab":["a2"]},"fy":{"i":["aw?"],"p":["aw?"],"w":["aw?"],"m":["aw?"],"k":["aw?"],"i.E":"aw?"},"dq":{"i":["u"],"p":["u"],"w":["u"],"m":["u"],"k":["u"],"i.E":"u"},"fS":{"i":["aC"],"p":["aC"],"w":["aC"],"m":["aC"],"k":["aC"],"i.E":"aC"},"fZ":{"i":["ak"],"p":["ak"],"w":["ak"],"m":["ak"],"k":["ak"],"i.E":"ak"},"dl":{"c_":["1"]},"e6":{"i":["C"],"p":["C"],"m":["C"],"k":["C"],"i.E":"C"},"ab":{"fN":["1"]},"ef":{"i":["aM"],"p":["aM"],"m":["aM"],"k":["aM"],"i.E":"aM"},"eu":{"i":["aP"],"p":["aP"],"m":["aP"],"k":["aP"],"i.E":"aP"},"eR":{"i":["q"],"p":["q"],"m":["q"],"k":["q"],"i.E":"q"},"n":{"C":[],"u":[],"e":[]},"f0":{"i":["aS"],"p":["aS"],"m":["aS"],"k":["aS"],"i.E":"aS"},"dY":{"K":["q","@"],"F":["q","@"],"K.V":"@"},"dZ":{"e":[]},"b_":{"e":[]},"ev":{"e":[]},"eM":{"i":["F<@,@>"],"p":["F<@,@>"],"m":["F<@,@>"],"k":["F<@,@>"],"i.E":"F<@,@>"},"cB":{"bp":[]},"dT":{"bp":[]},"aO":{"bp":[]},"Y":{"bp":[]},"d5":{"bp":[]},"a5":{"k":["1"],"a5.T":"1"},"aJ":{"N":[]},"aK":{"N":[]},"y":{"N":[]},"cL":{"N":[]},"bT":{"N":[]},"bU":{"N":[]},"eA":{"N":[]},"d4":{"N":[]},"mv":{"an":[]},"bM":{"an":[]},"mU":{"an":[]},"nc":{"an":[]},"cI":{"a5":["an"],"k":["an"],"a5.T":"an"},"cq":{"Z":[]},"bO":{"a5":["Z?"],"Z":[],"k":["Z?"],"a5.T":"Z?"},"df":{"Z":[]},"dg":{"Z":[]},"dh":{"Z":[]},"cp":{"a5":["aA"],"aA":[],"k":["aA"],"a5.T":"aA"},"ct":{"aA":[]},"cy":{"aA":[]},"bv":{"a1":[]},"c3":{"a1":[]},"bw":{"a1":[]},"bx":{"a1":[]},"cP":{"bZ":[]},"d3":{"bZ":[]},"f3":{"a1":[]},"f4":{"a1":[]},"f5":{"a1":[]},"f2":{"a1":[]},"d6":{"a1":[]},"d7":{"a1":[]},"d8":{"a1":[]},"f6":{"a1":[]},"db":{"a1":[]},"dd":{"a1":[]},"cO":{"c0":[]},"d2":{"c0":[]},"eV":{"c1":[]},"eW":{"c1":[]},"c2":{"p":["j"],"m":["j"],"k":["j"]}}'))
H.nI(v.typeUniverse,JSON.parse('{"ac":1,"m":1,"bR":1,"ei":2,"fg":1,"cz":1,"f9":1,"c5":1,"cr":2,"eg":1,"bV":1,"c_":1,"cc":1,"eQ":2,"dn":1,"cE":1,"cK":1,"cM":2,"h7":2,"cN":2,"dv":1,"dp":1,"dF":2,"dH":1,"e_":2,"e1":2,"e9":1,"dl":1,"I":1,"cA":1,"aJ":1,"aK":1,"y":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.kB
return{fK:s("bh"),eT:s("bI"),ed:s("bJ"),gA:s("bi"),gw:s("m<@>"),h:s("C"),l:s("bk"),bU:s("H"),aD:s("l"),c8:s("ai"),bX:s("bN"),b8:s("pw"),gb:s("cC"),gk:s("bP"),eu:s("t<dX>"),i:s("t<mv>"),cn:s("t<aZ>"),U:s("t<bM>"),fD:s("t<b1>"),u:s("t<av>"),fv:s("t<cD>"),e:s("t<an>"),L:s("t<pA>"),B:s("t<bp>"),fA:s("t<b3>"),fj:s("t<pG>"),cG:s("t<S>"),eg:s("t<b4>"),o:s("t<mU>"),ba:s("t<aA>"),D:s("t<nc>"),c3:s("t<b6>"),g9:s("t<c_<L>>"),s:s("t<q>"),d:s("t<c1>"),gT:s("t<ar>"),ab:s("t<d5>"),gN:s("t<c2>"),dC:s("t<a1>"),Y:s("t<d9>"),V:s("t<da>"),C:s("t<dc>"),I:s("t<de>"),k:s("t<c7>"),n:s("t<U>"),gn:s("t<@>"),t:s("t<j>"),eJ:s("t<Z?>"),bc:s("t<c0?>"),fL:s("t<bv?>"),bT:s("t<c3?>"),p:s("t<bw?>"),h4:s("t<bx?>"),a:s("t<~(N)>"),T:s("cG"),eH:s("kU"),M:s("aL"),aU:s("w<@>"),fX:s("R<j,bC>"),w:s("R<j,j>"),J:s("p<d9>"),O:s("p<da>"),b:s("p<dc>"),R:s("p<de>"),c:s("p<@>"),bv:s("cL"),f:s("F<@,@>"),gc:s("b3"),bK:s("bS"),Z:s("bT"),bZ:s("bU"),cH:s("cT"),dD:s("a_"),bm:s("br"),P:s("ae"),K:s("L"),q:s("ab<a2>"),fJ:s("l4"),fg:s("bZ"),N:s("q"),bY:s("b7"),bR:s("bt"),aF:s("iN"),bJ:s("eY"),dr:s("d4"),v:s("d6"),y:s("bv"),g:s("d7"),F:s("d8"),Q:s("db"),j:s("bw"),G:s("bx"),m:s("dd"),ak:s("c4"),r:s("c6<q,q>"),x:s("fb"),cJ:s("bC"),E:s("U"),z:s("@"),S:s("j"),A:s("0&*"),_:s("L*"),bG:s("kS<ae>?"),eI:s("cP?"),X:s("L?"),gW:s("bY?"),dl:s("eN?"),fB:s("d3?"),f7:s("eZ?"),W:s("bv?"),ch:s("c3?"),em:s("bw?"),cI:s("bx?"),H:s("a2"),h2:s("~(N)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.m=W.bi.prototype
C.P=J.a.prototype
C.b=J.t.prototype
C.c=J.cF.prototype
C.Q=J.cG.prototype
C.d=J.bQ.prototype
C.a=J.bn.prototype
C.R=J.aL.prototype
C.W=H.br.prototype
C.A=J.ey.prototype
C.a_=P.bY.prototype
C.p=J.c4.prototype
C.B=W.b8.prototype
C.C=W.ca.prototype
C.D=new E.bH("Browser.chrome")
C.q=new E.bH("Browser.firefox")
C.r=new E.bH("Browser.edge")
C.E=new E.bH("Browser.other")
C.a2=new P.hr()
C.F=new P.hq()
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.G=function() {
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
C.L=function(getTagFallback) {
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
C.H=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.I=function(hooks) {
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
C.K=function(hooks) {
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
C.J=function(hooks) {
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

C.M=new P.ew()
C.e=new P.j1()
C.N=new P.j5()
C.f=new P.jp()
C.n=new A.bL(0,"ColorBlendType.Overwrite")
C.v=new A.bL(1,"ColorBlendType.Additive")
C.w=new A.bL(2,"ColorBlendType.Average")
C.i=new A.bL(3,"ColorBlendType.AlphaBlend")
C.o=new P.bj(0)
C.O=new P.bj(5e6)
C.j=H.b(s([0,0,32776,33792,1,10240,0,0]),t.t)
C.k=H.b(s([0,0,65490,45055,65535,34815,65534,18431]),t.t)
C.l=H.b(s([0,0,26624,1023,65534,2047,65534,2047]),t.t)
C.T=H.b(s([0,0,32722,12287,65534,34815,65534,18431]),t.t)
C.U=H.b(s([0,0,65498,45055,65535,34815,65534,18431]),t.t)
C.h=H.b(s([0,0,24576,1023,65534,34815,65534,18431]),t.t)
C.x=H.b(s([0,0,32754,11263,65534,34815,65534,18431]),t.t)
C.y=H.b(s([0,0,65490,12287,65535,34815,65534,18431]),t.t)
C.S=H.b(s([]),t.s)
C.V=new H.cs(0,{},C.S,H.kB("cs<q,q>"))
C.X=new E.bW("OperatingSystem.windows")
C.z=new E.bW("OperatingSystem.mac")
C.Y=new E.bW("OperatingSystem.linux")
C.Z=new E.bW("OperatingSystem.other")
C.a0=new P.j2(!1)
C.a1=new P.cb(null,2)})();(function staticFields(){$.jm=null
$.aH=0
$.cn=null
$.kL=null
$.lV=null
$.lR=null
$.m_=null
$.jO=null
$.jW=null
$.kD=null
$.ce=null
$.dJ=null
$.dK=null
$.kx=!1
$.aD=C.f
$.ag=H.b([],H.kB("t<L>"))
$.hK=null
$.kW=null
$.kY=null
$.a8=null
$.aQ=null
$.l5=null
$.by=null
$.lo=null
$.ln=null
$.j6=null
$.j7=null
$.j8=null
$.lm=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"pt","m6",function(){return H.p_("_$dart_dartClosure")})
s($,"pK","m8",function(){return H.aT(H.iS({
toString:function(){return"$receiver$"}}))})
s($,"pL","m9",function(){return H.aT(H.iS({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"pM","ma",function(){return H.aT(H.iS(null))})
s($,"pN","mb",function(){return H.aT(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"pQ","me",function(){return H.aT(H.iS(void 0))})
s($,"pR","mf",function(){return H.aT(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"pP","md",function(){return H.aT(H.lg(null))})
s($,"pO","mc",function(){return H.aT(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"pT","mh",function(){return H.aT(H.lg(void 0))})
s($,"pS","mg",function(){return H.aT(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"q8","kH",function(){return P.no()})
s($,"pU","mi",function(){return new P.j4().$0()})
s($,"pV","mj",function(){return new P.j3().$0()})
s($,"q9","mn",function(){return new Int8Array(H.bB(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"qb","mo",function(){return P.n5("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"qo","mp",function(){return P.o4()})
s($,"q1","mm",function(){return Z.as(0)})
s($,"pW","mk",function(){return Z.as(511)})
s($,"q3","aE",function(){return Z.as(1)})
s($,"q2","bg",function(){return Z.as(2)})
s($,"pY","bf",function(){return Z.as(4)})
s($,"q4","bF",function(){return Z.as(8)})
s($,"q5","bG",function(){return Z.as(16)})
s($,"pZ","dP",function(){return Z.as(32)})
s($,"q_","dQ",function(){return Z.as(64)})
s($,"q0","ml",function(){return Z.as(96)})
s($,"q6","ck",function(){return Z.as(128)})
s($,"pX","be",function(){return Z.as(256)})
s($,"pp","m5",function(){return new V.hL()})
r($,"po","A",function(){return $.m5()})
r($,"pF","m7",function(){var q=V.l_(),p=V.ki(),o=$.lm
return V.kX(q,p,o==null?$.lm=V.nm(0,0,-1):o)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cT,DataView:H.a_,ArrayBufferView:H.a_,Float32Array:H.bq,Float64Array:H.bq,Int16Array:H.eo,Int32Array:H.ep,Int8Array:H.eq,Uint16Array:H.er,Uint32Array:H.es,Uint8ClampedArray:H.cV,CanvasPixelArray:H.cV,Uint8Array:H.br,HTMLAudioElement:W.o,HTMLBRElement:W.o,HTMLBaseElement:W.o,HTMLBodyElement:W.o,HTMLButtonElement:W.o,HTMLContentElement:W.o,HTMLDListElement:W.o,HTMLDataElement:W.o,HTMLDataListElement:W.o,HTMLDetailsElement:W.o,HTMLDialogElement:W.o,HTMLDivElement:W.o,HTMLEmbedElement:W.o,HTMLFieldSetElement:W.o,HTMLHRElement:W.o,HTMLHeadElement:W.o,HTMLHeadingElement:W.o,HTMLHtmlElement:W.o,HTMLIFrameElement:W.o,HTMLImageElement:W.o,HTMLLIElement:W.o,HTMLLabelElement:W.o,HTMLLegendElement:W.o,HTMLLinkElement:W.o,HTMLMapElement:W.o,HTMLMediaElement:W.o,HTMLMenuElement:W.o,HTMLMetaElement:W.o,HTMLMeterElement:W.o,HTMLModElement:W.o,HTMLOListElement:W.o,HTMLObjectElement:W.o,HTMLOptGroupElement:W.o,HTMLOptionElement:W.o,HTMLOutputElement:W.o,HTMLParagraphElement:W.o,HTMLParamElement:W.o,HTMLPictureElement:W.o,HTMLPreElement:W.o,HTMLProgressElement:W.o,HTMLQuoteElement:W.o,HTMLScriptElement:W.o,HTMLShadowElement:W.o,HTMLSlotElement:W.o,HTMLSourceElement:W.o,HTMLSpanElement:W.o,HTMLStyleElement:W.o,HTMLTableCaptionElement:W.o,HTMLTableColElement:W.o,HTMLTableElement:W.o,HTMLTableRowElement:W.o,HTMLTableSectionElement:W.o,HTMLTemplateElement:W.o,HTMLTextAreaElement:W.o,HTMLTimeElement:W.o,HTMLTitleElement:W.o,HTMLTrackElement:W.o,HTMLUListElement:W.o,HTMLUnknownElement:W.o,HTMLVideoElement:W.o,HTMLDirectoryElement:W.o,HTMLFontElement:W.o,HTMLFrameElement:W.o,HTMLFrameSetElement:W.o,HTMLMarqueeElement:W.o,HTMLElement:W.o,AccessibleNodeList:W.hk,HTMLAnchorElement:W.dU,HTMLAreaElement:W.dV,Blob:W.bh,HTMLCanvasElement:W.bi,CDATASection:W.at,CharacterData:W.at,Comment:W.at,ProcessingInstruction:W.at,Text:W.at,CSSPerspective:W.hz,CSSCharsetRule:W.E,CSSConditionRule:W.E,CSSFontFaceRule:W.E,CSSGroupingRule:W.E,CSSImportRule:W.E,CSSKeyframeRule:W.E,MozCSSKeyframeRule:W.E,WebKitCSSKeyframeRule:W.E,CSSKeyframesRule:W.E,MozCSSKeyframesRule:W.E,WebKitCSSKeyframesRule:W.E,CSSMediaRule:W.E,CSSNamespaceRule:W.E,CSSPageRule:W.E,CSSRule:W.E,CSSStyleRule:W.E,CSSSupportsRule:W.E,CSSViewportRule:W.E,CSSStyleDeclaration:W.cu,MSStyleCSSProperties:W.cu,CSS2Properties:W.cu,CSSImageValue:W.am,CSSKeywordValue:W.am,CSSNumericValue:W.am,CSSPositionValue:W.am,CSSResourceValue:W.am,CSSUnitValue:W.am,CSSURLImageValue:W.am,CSSStyleValue:W.am,CSSMatrixComponent:W.aI,CSSRotation:W.aI,CSSScale:W.aI,CSSSkew:W.aI,CSSTranslation:W.aI,CSSTransformComponent:W.aI,CSSTransformValue:W.hB,CSSUnparsedValue:W.hC,DataTransferItemList:W.hD,DOMException:W.hE,ClientRectList:W.cv,DOMRectList:W.cv,DOMRectReadOnly:W.cw,DOMStringList:W.e4,DOMTokenList:W.hF,Element:W.C,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,SubmitEvent:W.l,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ai,FileList:W.bN,FileWriter:W.e5,HTMLFormElement:W.e7,Gamepad:W.aw,History:W.hU,HTMLCollection:W.bm,HTMLFormControlsCollection:W.bm,HTMLOptionsCollection:W.bm,ImageData:W.cC,HTMLInputElement:W.bP,KeyboardEvent:W.bo,Location:W.i2,MediaList:W.ik,MessagePort:W.bS,MIDIInputMap:W.el,MIDIOutputMap:W.em,MimeType:W.ay,MimeTypeArray:W.en,PointerEvent:W.aj,MouseEvent:W.aj,DragEvent:W.aj,Document:W.u,DocumentFragment:W.u,HTMLDocument:W.u,ShadowRoot:W.u,XMLDocument:W.u,Attr:W.u,DocumentType:W.u,Node:W.u,NodeList:W.cW,RadioNodeList:W.cW,Plugin:W.az,PluginArray:W.ez,RTCStatsReport:W.eE,HTMLSelectElement:W.eG,SourceBuffer:W.ap,SourceBufferList:W.eK,SpeechGrammar:W.aB,SpeechGrammarList:W.eL,SpeechRecognitionResult:W.aC,Storage:W.eP,CSSStyleSheet:W.ak,StyleSheet:W.ak,HTMLTableCellElement:W.b7,HTMLTableDataCellElement:W.b7,HTMLTableHeaderCellElement:W.b7,TextTrack:W.aq,TextTrackCue:W.af,VTTCue:W.af,TextTrackCueList:W.eT,TextTrackList:W.eU,TimeRanges:W.iM,Touch:W.ar,TouchEvent:W.bu,TouchList:W.f_,TrackDefaultList:W.iQ,CompositionEvent:W.aU,FocusEvent:W.aU,TextEvent:W.aU,UIEvent:W.aU,URL:W.j0,VideoTrackList:W.fd,WheelEvent:W.b8,Window:W.ca,DOMWindow:W.ca,CSSRuleList:W.fl,ClientRect:W.dk,DOMRect:W.dk,GamepadList:W.fy,NamedNodeMap:W.dq,MozNamedAttrMap:W.dq,SpeechRecognitionResultList:W.fS,StyleSheetList:W.fZ,SVGLength:P.aM,SVGLengthList:P.ef,SVGNumber:P.aP,SVGNumberList:P.eu,SVGPointList:P.ir,SVGStringList:P.eR,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGScriptElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,SVGTransform:P.aS,SVGTransformList:P.f0,AudioBuffer:P.hn,AudioParamMap:P.dY,AudioTrackList:P.dZ,AudioContext:P.b_,webkitAudioContext:P.b_,BaseAudioContext:P.b_,OfflineAudioContext:P.ev,WebGL2RenderingContext:P.bY,SQLResultSetRowList:P.eM})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bV.$nativeSuperclassTag="ArrayBufferView"
H.dr.$nativeSuperclassTag="ArrayBufferView"
H.ds.$nativeSuperclassTag="ArrayBufferView"
H.bq.$nativeSuperclassTag="ArrayBufferView"
H.dt.$nativeSuperclassTag="ArrayBufferView"
H.du.$nativeSuperclassTag="ArrayBufferView"
H.cU.$nativeSuperclassTag="ArrayBufferView"
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
var s=S.p7
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
