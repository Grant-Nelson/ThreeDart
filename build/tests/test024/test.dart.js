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
a[c]=function(){a[c]=function(){H.qn(b)}
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
if(a[b]!==s)H.qo(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lp"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lp"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lp(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={l0:function l0(){},
l2:function(a){return new H.cN("Field '"+a+"' has been assigned during initialization.")},
ky:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
ja:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ok:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
q0:function(a,b,c){return a},
nZ:function(a,b,c,d){if(t.gw.b(a))return new H.cD(a,b,c.J("@<0>").b6(d).J("cD<1,2>"))
return new H.aT(a,b,c.J("@<0>").b6(d).J("aT<1,2>"))},
io:function(){return new P.c5("No element")},
nQ:function(){return new P.c5("Too many elements")},
oi:function(a,b){H.f3(a,0,J.aM(a)-1,b)},
f3:function(a,b,c,d){if(c-b<=32)H.oh(a,b,c,d)
else H.og(a,b,c,d)},
oh:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.bL(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.ak()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
og:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.a3(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a3(a4+a5,2),f=g-j,e=g+j,d=J.bL(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
H.f3(a3,a4,r-2,a6)
H.f3(a3,q+2,a5,a6)
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
break}}H.f3(a3,r,q,a6)}else H.f3(a3,r,q,a6)},
cN:function cN(a){this.a=a},
r:function r(a){this.a=a},
n:function n(){},
cS:function cS(){},
bc:function bc(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aT:function aT(a,b,c){this.a=a
this.b=b
this.$ti=c},
cD:function cD(a,b,c){this.a=a
this.b=b
this.$ti=c},
eC:function eC(a,b){this.a=null
this.b=a
this.c=b},
cX:function cX(a,b,c){this.a=a
this.b=b
this.$ti=c},
aZ:function aZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
fD:function fD(a,b){this.a=a
this.b=b},
cF:function cF(){},
fw:function fw(){},
cb:function cb(){},
nH:function(){throw H.c(P.C("Cannot modify unmodifiable Map"))},
n4:function(a){var s,r=H.n3(a)
if(r!=null)return r
s="minified:"+a
return s},
mY:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
x:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cs(a)
return s},
d7:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
lY:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.d(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.c(P.a7(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.C(q,o)|32)>r)return n}return parseInt(a,b)},
d8:function(a){return H.o1(a)},
o1:function(a){var s,r,q,p
if(a instanceof P.P)return H.ar(H.b1(a),null)
if(J.e3(a)===C.T||t.ak.b(a)){s=C.t(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.ar(H.b1(a),null)},
o2:function(){if(!!self.location)return self.location.href
return null},
lX:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
oa:function(a){var s,r,q,p=H.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){q=a[r]
if(!H.km(q))throw H.c(H.e2(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aT(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.e2(q))}return H.lX(p)},
lZ:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.km(q))throw H.c(H.e2(q))
if(q<0)throw H.c(H.e2(q))
if(q>65535)return H.oa(a)}return H.lX(a)},
ob:function(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
az:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.aT(s,10)|55296)>>>0,s&1023|56320)}}throw H.c(P.a7(a,0,1114111,null,null))},
c2:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o9:function(a){var s=H.c2(a).getFullYear()+0
return s},
o7:function(a){var s=H.c2(a).getMonth()+1
return s},
o3:function(a){var s=H.c2(a).getDate()+0
return s},
o4:function(a){var s=H.c2(a).getHours()+0
return s},
o6:function(a){var s=H.c2(a).getMinutes()+0
return s},
o8:function(a){var s=H.c2(a).getSeconds()+0
return s},
o5:function(a){var s=H.c2(a).getMilliseconds()+0
return s},
mW:function(a){throw H.c(H.e2(a))},
d:function(a,b){if(a==null)J.aM(a)
throw H.c(H.cp(a,b))},
cp:function(a,b){var s,r="index"
if(!H.km(b))return new P.aF(!0,b,r,null)
s=J.aM(a)
if(b<0||b>=s)return P.O(b,a,r,null,s)
return P.eZ(b,r)},
q3:function(a,b,c){if(a>c)return P.a7(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a7(b,a,c,"end",null)
return new P.aF(!0,b,"end",null)},
e2:function(a){return new P.aF(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.eO()
s=new Error()
s.dartException=a
r=H.qp
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qp:function(){return J.cs(this.dartException)},
h:function(a){throw H.c(a)},
q:function(a){throw H.c(P.aJ(a))},
aX:function(a){var s,r,q,p,o,n
a=H.n0(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jj(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
jk:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
ma:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
l1:function(a,b){var s=b==null,r=s?null:b.method
return new H.ex(a,r,s?null:b.receiver)},
ak:function(a){if(a==null)return new H.iU(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bM(a,a.dartException)
return H.pX(a)},
bM:function(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
pX:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aT(r,16)&8191)===10)switch(q){case 438:return H.bM(a,H.l1(H.x(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.x(s)+" (Error "+q+")"
return H.bM(a,new H.d6(p,e))}}if(a instanceof TypeError){o=$.n8()
n=$.n9()
m=$.na()
l=$.nb()
k=$.ne()
j=$.nf()
i=$.nd()
$.nc()
h=$.nh()
g=$.ng()
f=o.ai(s)
if(f!=null)return H.bM(a,H.l1(s,f))
else{f=n.ai(s)
if(f!=null){f.method="call"
return H.bM(a,H.l1(s,f))}else{f=m.ai(s)
if(f==null){f=l.ai(s)
if(f==null){f=k.ai(s)
if(f==null){f=j.ai(s)
if(f==null){f=i.ai(s)
if(f==null){f=l.ai(s)
if(f==null){f=h.ai(s)
if(f==null){f=g.ai(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bM(a,new H.d6(s,f==null?e:f.method))}}return H.bM(a,new H.fv(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.df()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bM(a,new P.aF(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.df()
return a},
lt:function(a){var s
if(a==null)return new H.hi(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.hi(a)},
q5:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
qd:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.f("Unsupported number of arguments for wrapped closure"))},
co:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qd)
a.$identity=s
return s},
nG:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.f8().constructor.prototype):Object.create(new H.bQ(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aO
if(typeof r!=="number")return r.V()
$.aO=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.lI(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.nC(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lI(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
nC:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mV,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.nA:H.nz
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
nD:function(a,b,c,d){var s=H.lG
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lI:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.nF(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nD(r,!p,s,b)
if(r===0){p=$.aO
if(typeof p!=="number")return p.V()
$.aO=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.cu
return new Function(p+(o==null?$.cu=H.hV("self"):o)+";return "+n+"."+H.x(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aO
if(typeof p!=="number")return p.V()
$.aO=p+1
m+=p
p="return function("+m+"){return this."
o=$.cu
return new Function(p+(o==null?$.cu=H.hV("self"):o)+"."+H.x(s)+"("+m+");}")()},
nE:function(a,b,c,d){var s=H.lG,r=H.nB
switch(b?-1:a){case 0:throw H.c(new H.f1("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
nF:function(a,b){var s,r,q,p,o,n,m,l=$.cu
if(l==null)l=$.cu=H.hV("self")
s=$.lF
if(s==null)s=$.lF=H.hV("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.nE(q,!o,r,b)
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
lp:function(a,b,c,d,e,f,g){return H.nG(a,b,c,d,!!e,!!f,g)},
nz:function(a,b){return H.hw(v.typeUniverse,H.b1(a.a),b)},
nA:function(a,b){return H.hw(v.typeUniverse,H.b1(a.c),b)},
lG:function(a){return a.a},
nB:function(a){return a.c},
hV:function(a){var s,r,q,p=new H.bQ("self","target","receiver","name"),o=J.l_(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.ct("Field name "+a+" not found."))},
qn:function(a){throw H.c(new P.ei(a))},
q7:function(a){return v.getIsolateTag(a)},
qo:function(a){return H.h(new H.cN(a))},
rx:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qg:function(a){var s,r,q,p,o,n=$.mU.$1(a),m=$.kw[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kD[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.mO.$2(a,n)
if(q!=null){m=$.kw[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kD[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kM(s)
$.kw[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kD[n]=s
return s}if(p==="-"){o=H.kM(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.mZ(a,s)
if(p==="*")throw H.c(P.jn(n))
if(v.leafTags[n]===true){o=H.kM(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.mZ(a,s)},
mZ:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lv(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kM:function(a){return J.lv(a,!1,null,!!a.$iA)},
qi:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kM(s)
else return J.lv(s,c,null,null)},
qb:function(){if(!0===$.lu)return
$.lu=!0
H.qc()},
qc:function(){var s,r,q,p,o,n,m,l
$.kw=Object.create(null)
$.kD=Object.create(null)
H.qa()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.n_.$1(o)
if(n!=null){m=H.qi(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qa:function(){var s,r,q,p,o,n,m=C.I()
m=H.cn(C.J,H.cn(C.K,H.cn(C.u,H.cn(C.u,H.cn(C.L,H.cn(C.M,H.cn(C.N(C.t),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.mU=new H.kz(p)
$.mO=new H.kA(o)
$.n_=new H.kB(n)},
cn:function(a,b){return a(b)||b},
nU:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.a6("Illegal RegExp pattern ("+String(n)+")",a,null))},
n1:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
q4:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n0:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lx:function(a,b,c){var s=H.qm(a,b,c)
return s},
qm:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n0(b),'g'),H.q4(c))},
cy:function cy(){},
cz:function cz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jj:function jj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
d6:function d6(a,b){this.a=a
this.b=b},
ex:function ex(a,b,c){this.a=a
this.b=b
this.c=c},
fv:function fv(a){this.a=a},
iU:function iU(a){this.a=a},
hi:function hi(a){this.a=a
this.b=null},
bw:function bw(){},
ff:function ff(){},
f8:function f8(){},
bQ:function bQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f1:function f1(a){this.a=a},
X:function X(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iq:function iq(a){this.a=a},
it:function it(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cP:function cP(a,b){this.a=a
this.$ti=b},
eB:function eB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
kB:function kB(a){this.a=a},
ew:function ew(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cl:function(a){var s,r,q,p,o
if(t.aP.b(a))return a
s=J.bL(a)
r=s.gl(a)
q=P.cT(r,null,!1,t.A)
for(p=0;p<s.gl(a);++p){o=s.h(a,p)
if(p>=r)return H.d(q,p)
q[p]=o}return q},
b_:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cp(b,a))},
pa:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.q3(a,b,c))
return b},
d1:function d1(){},
a0:function a0(){},
c0:function c0(){},
bC:function bC(){},
d2:function d2(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
d3:function d3(){},
bD:function bD(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
m4:function(a,b){var s=b.c
return s==null?b.c=H.lf(a,b.z,!0):s},
m3:function(a,b){var s=b.c
return s==null?b.c=H.dT(a,"lN",[b.z]):s},
m5:function(a){var s=a.y
if(s===6||s===7||s===8)return H.m5(a.z)
return s===11||s===12},
oe:function(a){return a.cy},
ls:function(a){return H.lg(v.typeUniverse,a,!1)},
bn:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bn(a,s,a0,a1)
if(r===s)return b
return H.mx(a,r,!0)
case 7:s=b.z
r=H.bn(a,s,a0,a1)
if(r===s)return b
return H.lf(a,r,!0)
case 8:s=b.z
r=H.bn(a,s,a0,a1)
if(r===s)return b
return H.mw(a,r,!0)
case 9:q=b.Q
p=H.e1(a,q,a0,a1)
if(p===q)return b
return H.dT(a,b.z,p)
case 10:o=b.z
n=H.bn(a,o,a0,a1)
m=b.Q
l=H.e1(a,m,a0,a1)
if(n===o&&l===m)return b
return H.ld(a,n,l)
case 11:k=b.z
j=H.bn(a,k,a0,a1)
i=b.Q
h=H.pU(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mv(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.e1(a,g,a0,a1)
o=b.z
n=H.bn(a,o,a0,a1)
if(f===g&&n===o)return b
return H.le(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.hO("Attempted to substitute unexpected RTI kind "+c))}},
e1:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bn(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
pV:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bn(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
pU:function(a,b,c,d){var s,r=b.a,q=H.e1(a,r,c,d),p=b.b,o=H.e1(a,p,c,d),n=b.c,m=H.pV(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fV()
s.a=q
s.b=o
s.c=m
return s},
b:function(a,b){a[v.arrayRti]=b
return a},
q1:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.mV(s)
return a.$S()}return null},
mX:function(a,b){var s
if(H.m5(b))if(a instanceof H.bw){s=H.q1(a)
if(s!=null)return s}return H.b1(a)},
b1:function(a){var s
if(a instanceof P.P){s=a.$ti
return s!=null?s:H.ll(a)}if(Array.isArray(a))return H.kd(a)
return H.ll(J.e3(a))},
kd:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
U:function(a){var s=a.$ti
return s!=null?s:H.ll(a)},
ll:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pi(a,s)},
pi:function(a,b){var s=a instanceof H.bw?a.__proto__.__proto__.constructor:b,r=H.oT(v.typeUniverse,s.name)
b.$ccache=r
return r},
mV:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lg(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
ph:function(a){var s,r,q,p=this
if(p===t.K)return H.dZ(p,a,H.pm)
if(!H.b2(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.dZ(p,a,H.pp)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.km
else if(r===t.gR||r===t.H)q=H.pl
else if(r===t.N)q=H.pn
else q=r===t.cJ?H.kl:null
if(q!=null)return H.dZ(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.qe)){p.r="$i"+s
return H.dZ(p,a,H.po)}}else if(s===7)return H.dZ(p,a,H.pf)
return H.dZ(p,a,H.pd)},
dZ:function(a,b,c){a.b=c
return a.b(b)},
pg:function(a){var s,r=this,q=H.pc
if(!H.b2(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.p9
else if(r===t.K)q=H.p8
else{s=H.e4(r)
if(s)q=H.pe}r.a=q
return r.a(a)},
lo:function(a){var s,r=a.y
if(!H.b2(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&H.lo(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
pd:function(a){var s=this
if(a==null)return H.lo(s)
return H.S(v.typeUniverse,H.mX(a,s),null,s,null)},
pf:function(a){if(a==null)return!0
return this.z.b(a)},
po:function(a){var s,r=this
if(a==null)return H.lo(r)
s=r.r
if(a instanceof P.P)return!!a[s]
return!!J.e3(a)[s]},
pc:function(a){var s,r=this
if(a==null){s=H.e4(r)
if(s)return a}else if(r.b(a))return a
H.mI(a,r)},
pe:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mI(a,s)},
mI:function(a,b){throw H.c(H.oJ(H.mo(a,H.mX(a,b),H.ar(b,null))))},
mo:function(a,b,c){var s=P.ib(a),r=H.ar(b==null?H.b1(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
oJ:function(a){return new H.dS("TypeError: "+a)},
a9:function(a,b){return new H.dS("TypeError: "+H.mo(a,null,b))},
pm:function(a){return a!=null},
p8:function(a){if(a!=null)return a
throw H.c(H.a9(a,"Object"))},
pp:function(a){return!0},
p9:function(a){return a},
kl:function(a){return!0===a||!1===a},
mG:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.a9(a,"bool"))},
rl:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a9(a,"bool"))},
rk:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a9(a,"bool?"))},
rm:function(a){if(typeof a=="number")return a
throw H.c(H.a9(a,"double"))},
ro:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a9(a,"double"))},
rn:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a9(a,"double?"))},
km:function(a){return typeof a=="number"&&Math.floor(a)===a},
ke:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.a9(a,"int"))},
rq:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a9(a,"int"))},
rp:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a9(a,"int?"))},
pl:function(a){return typeof a=="number"},
rr:function(a){if(typeof a=="number")return a
throw H.c(H.a9(a,"num"))},
rt:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a9(a,"num"))},
rs:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a9(a,"num?"))},
pn:function(a){return typeof a=="string"},
kf:function(a){if(typeof a=="string")return a
throw H.c(H.a9(a,"String"))},
rv:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a9(a,"String"))},
ru:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a9(a,"String?"))},
pQ:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.ar(a[q],b)
return s},
mJ:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
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
if(l===9){p=H.pW(a.z)
o=a.Q
return o.length!==0?p+("<"+H.pQ(o,b)+">"):p}if(l===11)return H.mJ(a,b,null)
if(l===12)return H.mJ(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
pW:function(a){var s,r=H.n3(a)
if(r!=null)return r
s="minified:"+a
return s},
my:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
oT:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lg(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dU(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dT(a,b,q)
n[b]=o
return o}else return m},
oR:function(a,b){return H.mF(a.tR,b)},
oQ:function(a,b){return H.mF(a.eT,b)},
lg:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mt(H.mr(a,null,b,c))
r.set(b,s)
return s},
hw:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mt(H.mr(a,b,c,!0))
q.set(c,r)
return r},
oS:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.ld(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bm:function(a,b){b.a=H.pg
b.b=H.ph
return b},
dU:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.aA(null,null)
s.y=b
s.cy=c
r=H.bm(a,s)
a.eC.set(c,r)
return r},
mx:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.oO(a,b,r,c)
a.eC.set(r,s)
return s},
oO:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b2(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.aA(null,null)
q.y=6
q.z=b
q.cy=c
return H.bm(a,q)},
lf:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.oN(a,b,r,c)
a.eC.set(r,s)
return s},
oN:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b2(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.e4(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.e4(q.z))return q
else return H.m4(a,b)}}p=new H.aA(null,null)
p.y=7
p.z=b
p.cy=c
return H.bm(a,p)},
mw:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.oL(a,b,r,c)
a.eC.set(r,s)
return s},
oL:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b2(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dT(a,"lN",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.aA(null,null)
q.y=8
q.z=b
q.cy=c
return H.bm(a,q)},
oP:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.aA(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bm(a,s)
a.eC.set(q,r)
return r},
hv:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
oK:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dT:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hv(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.aA(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bm(a,r)
a.eC.set(p,q)
return q},
ld:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hv(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aA(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bm(a,o)
a.eC.set(q,n)
return n},
mv:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hv(m)
if(j>0){s=l>0?",":""
r=H.hv(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.oK(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aA(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bm(a,o)
a.eC.set(q,r)
return r},
le:function(a,b,c,d){var s,r=b.cy+("<"+H.hv(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.oM(a,b,c,r,d)
a.eC.set(r,s)
return s},
oM:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bn(a,b,r,0)
m=H.e1(a,c,r,0)
return H.le(a,n,m,c!==m)}}l=new H.aA(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bm(a,l)},
mr:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mt:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.oD(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.ms(a,r,h,g,!1)
else if(q===46)r=H.ms(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.bl(a.u,a.e,g.pop()))
break
case 94:g.push(H.oP(a.u,g.pop()))
break
case 35:g.push(H.dU(a.u,5,"#"))
break
case 64:g.push(H.dU(a.u,2,"@"))
break
case 126:g.push(H.dU(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.lc(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.dT(p,n,o))
else{m=H.bl(p,a.e,n)
switch(m.y){case 11:g.push(H.le(p,m,o,a.n))
break
default:g.push(H.ld(p,m,o))
break}}break
case 38:H.oE(a,g)
break
case 42:p=a.u
g.push(H.mx(p,H.bl(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.lf(p,H.bl(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.mw(p,H.bl(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.fV()
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
H.lc(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.mv(p,H.bl(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.lc(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.oG(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.bl(a.u,a.e,i)},
oD:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ms:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.my(s,o.z)[p]
if(n==null)H.h('No "'+p+'" in "'+H.oe(o)+'"')
d.push(H.hw(s,o,n))}else d.push(p)
return m},
oE:function(a,b){var s=b.pop()
if(0===s){b.push(H.dU(a.u,1,"0&"))
return}if(1===s){b.push(H.dU(a.u,4,"1&"))
return}throw H.c(P.hO("Unexpected extended operation "+H.x(s)))},
bl:function(a,b,c){if(typeof c=="string")return H.dT(a,c,a.sEA)
else if(typeof c=="number")return H.oF(a,b,c)
else return c},
lc:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bl(a,b,c[s])},
oG:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bl(a,b,c[s])},
oF:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.hO("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.hO("Bad index "+c+" for "+b.i(0)))},
S:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
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
if(q)if(H.S(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.S(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.S(a,b.z,c,d,e)
if(r===6)return H.S(a,b.z,c,d,e)
return r!==7}if(r===6)return H.S(a,b.z,c,d,e)
if(p===6){s=H.m4(a,d)
return H.S(a,b,c,s,e)}if(r===8){if(!H.S(a,b.z,c,d,e))return!1
return H.S(a,H.m3(a,b),c,d,e)}if(r===7){s=H.S(a,t.P,c,d,e)
return s&&H.S(a,b.z,c,d,e)}if(p===8){if(H.S(a,b,c,d.z,e))return!0
return H.S(a,b,c,H.m3(a,d),e)}if(p===7){s=H.S(a,b,c,t.P,e)
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
if(!H.S(a,k,c,j,e)||!H.S(a,j,e,k,c))return!1}return H.mK(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.mK(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.pk(a,b,c,d,e)}return!1},
mK:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
pk:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.S(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.my(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.S(a,H.hw(a,b,l[p]),c,r[p],e))return!1
return!0},
e4:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b2(a))if(r!==7)if(!(r===6&&H.e4(a.z)))s=r===8&&H.e4(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qe:function(a){var s
if(!H.b2(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
b2:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
mF:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
aA:function aA(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fV:function fV(){this.c=this.b=this.a=null},
fR:function fR(){},
dS:function dS(a){this.a=a},
n3:function(a){return v.mangledGlobalNames[a]},
qj:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lv:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kx:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.lu==null){H.qb()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.jn("Return interceptor for "+H.x(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.jQ
if(o==null)o=$.jQ=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.qg(a)
if(p!=null)return p
if(typeof a=="function")return C.V
s=Object.getPrototypeOf(a)
if(s==null)return C.B
if(s===Object.prototype)return C.B
if(typeof q=="function"){o=$.jQ
if(o==null)o=$.jQ=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
nR:function(a,b){if(a<0||a>4294967295)throw H.c(P.a7(a,0,4294967295,"length",null))
return J.nS(new Array(a),b)},
kZ:function(a,b){if(a<0)throw H.c(P.ct("Length must be a non-negative integer: "+a))
return H.b(new Array(a),b.J("w<0>"))},
nS:function(a,b){return J.l_(H.b(a,b.J("w<0>")))},
l_:function(a){a.fixed$length=Array
return a},
nT:function(a,b){return J.nt(a,b)},
e3:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cL.prototype
return J.ev.prototype}if(typeof a=="string")return J.ba.prototype
if(a==null)return J.cM.prototype
if(typeof a=="boolean")return J.eu.prototype
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.P)return a
return J.kx(a)},
bL:function(a){if(typeof a=="string")return J.ba.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.P)return a
return J.kx(a)},
hJ:function(a){if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.P)return a
return J.kx(a)},
mT:function(a){if(typeof a=="number")return J.bY.prototype
if(typeof a=="string")return J.ba.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bH.prototype
return a},
q6:function(a){if(typeof a=="string")return J.ba.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bH.prototype
return a},
b0:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.P)return a
return J.kx(a)},
K:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.e3(a).q(a,b)},
lA:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mT(a).M(a,b)},
lB:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mY(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bL(a).h(a,b)},
kR:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.mY(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.hJ(a).m(a,b,c)},
nr:function(a,b,c){return J.b0(a).fT(a,b,c)},
ns:function(a,b,c,d){return J.b0(a).hc(a,b,c,d)},
nt:function(a,b){return J.mT(a).ag(a,b)},
hM:function(a,b){return J.hJ(a).I(a,b)},
e7:function(a,b){return J.hJ(a).E(a,b)},
nu:function(a){return J.b0(a).gaf(a)},
nv:function(a){return J.b0(a).gbs(a)},
kS:function(a){return J.e3(a).gF(a)},
aE:function(a){return J.hJ(a).gP(a)},
aM:function(a){return J.bL(a).gl(a)},
lC:function(a){return J.hJ(a).i5(a)},
nw:function(a,b){return J.b0(a).i9(a,b)},
nx:function(a){return J.q6(a).ii(a)},
cs:function(a){return J.e3(a).i(a)},
a:function a(){},
eu:function eu(){},
cM:function cM(){},
bb:function bb(){},
eT:function eT(){},
bH:function bH(){},
aR:function aR(){},
w:function w(a){this.$ti=a},
ip:function ip(a){this.$ti=a},
ae:function ae(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bY:function bY(){},
cL:function cL(){},
ev:function ev(){},
ba:function ba(){}},P={
ou:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.pY()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.co(new P.jM(q),1)).observe(s,{childList:true})
return new P.jL(q,s,r)}else if(self.setImmediate!=null)return P.pZ()
return P.q_()},
ov:function(a){self.scheduleImmediate(H.co(new P.jN(a),0))},
ow:function(a){self.setImmediate(H.co(new P.jO(a),0))},
ox:function(a){P.l6(C.m,a)},
l6:function(a,b){var s=C.c.a3(a.a,1000)
return P.oH(s<0?0:s,b)},
m9:function(a,b){var s=C.c.a3(a.a,1000)
return P.oI(s<0?0:s,b)},
oH:function(a,b){var s=new P.dR()
s.es(a,b)
return s},
oI:function(a,b){var s=new P.dR()
s.eu(a,b)
return s},
ri:function(a){return new P.cj(a,1)},
oA:function(){return C.a4},
oB:function(a){return new P.cj(a,3)},
pr:function(a,b){return new P.dO(a,b.J("dO<0>"))},
pN:function(){var s,r
for(s=$.cm;s!=null;s=$.cm){$.e0=null
r=s.b
$.cm=r
if(r==null)$.e_=null
s.a.$0()}},
pT:function(){$.lm=!0
try{P.pN()}finally{$.e0=null
$.lm=!1
if($.cm!=null)$.lz().$1(P.mP())}},
pR:function(a){var s=new P.fE(a),r=$.e_
if(r==null){$.cm=$.e_=s
if(!$.lm)$.lz().$1(P.mP())}else $.e_=r.b=s},
pS:function(a){var s,r,q,p=$.cm
if(p==null){P.pR(a)
$.e0=$.e_
return}s=new P.fE(a)
r=$.e0
if(r==null){s.b=p
$.cm=$.e0=s}else{q=r.b
s.b=q
$.e0=r.b=s
if(q==null)$.e_=s}},
m8:function(a,b){var s=$.aL
if(s===C.f)return P.l6(a,b)
return P.l6(a,s.hm(b))},
om:function(a,b){var s=$.aL
if(s===C.f)return P.m9(a,b)
return P.m9(a,s.dg(b,t.aF))},
mL:function(a,b,c,d,e){P.pS(new P.kp(d,e))},
pO:function(a,b,c,d){var s,r=$.aL
if(r===c)return d.$0()
$.aL=c
s=r
try{r=d.$0()
return r}finally{$.aL=s}},
pP:function(a,b,c,d,e){var s,r=$.aL
if(r===c)return d.$1(e)
$.aL=c
s=r
try{r=d.$1(e)
return r}finally{$.aL=s}},
jM:function jM(a){this.a=a},
jL:function jL(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(a){this.a=a},
jO:function jO(a){this.a=a},
dR:function dR(){this.c=0},
k4:function k4(a,b){this.a=a
this.b=b},
k3:function k3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cj:function cj(a,b){this.a=a
this.b=b},
bJ:function bJ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dO:function dO(a,b){this.a=a
this.$ti=b},
fE:function fE(a){this.a=a
this.b=null},
c6:function c6(){},
fa:function fa(){},
kb:function kb(){},
kp:function kp(a,b){this.a=a
this.b=b},
jT:function jT(){},
jU:function jU(a,b){this.a=a
this.b=b},
jV:function jV(a,b,c){this.a=a
this.b=b
this.c=c},
nV:function(a,b){return new H.X(a.J("@<0>").b6(b).J("X<1,2>"))},
nW:function(a,b,c){return H.q5(a,new H.X(b.J("@<0>").b6(c).J("X<1,2>")))},
T:function(a,b){return new H.X(a.J("@<0>").b6(b).J("X<1,2>"))},
cQ:function(a){return new P.dC(a.J("dC<0>"))},
lb:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oC:function(a,b){var s=new P.dD(a,b)
s.c=a.e
return s},
nP:function(a,b,c){var s,r
if(P.ln(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.b([],t.s)
$.aj.push(a)
try{P.pq(a,s)}finally{if(0>=$.aj.length)return H.d($.aj,-1)
$.aj.pop()}r=P.m6(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
kY:function(a,b,c){var s,r
if(P.ln(a))return b+"..."+c
s=new P.a_(b)
$.aj.push(a)
try{r=s
r.a=P.m6(r.a,a,", ")}finally{if(0>=$.aj.length)return H.d($.aj,-1)
$.aj.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
ln:function(a){var s,r
for(s=$.aj.length,r=0;r<s;++r)if(a===$.aj[r])return!0
return!1},
pq:function(a,b){var s,r,q,p,o,n,m,l=a.gP(a),k=0,j=0
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
nX:function(a,b,c){var s=P.nV(b,c)
a.E(0,new P.iu(s,b,c))
return s},
lP:function(a,b){var s,r,q=P.cQ(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)q.n(0,b.a(a[r]))
return q},
l3:function(a){var s,r={}
if(P.ln(a))return"{...}"
s=new P.a_("")
try{$.aj.push(a)
s.a+="{"
r.a=!0
J.e7(a,new P.iy(r,s))
s.a+="}"}finally{if(0>=$.aj.length)return H.d($.aj,-1)
$.aj.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dC:function dC(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jS:function jS(a){this.a=a
this.c=this.b=null},
dD:function dD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cK:function cK(){},
iu:function iu(a,b,c){this.a=a
this.b=b
this.c=c},
cR:function cR(){},
k:function k(){},
cV:function cV(){},
iy:function iy(a,b){this.a=a
this.b=b},
M:function M(){},
hx:function hx(){},
cW:function cW(){},
cc:function cc(a,b){this.a=a
this.$ti=b},
db:function db(){},
dK:function dK(){},
dE:function dE(){},
dV:function dV(){},
dX:function dX(){},
op:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.oq(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
oq:function(a,b,c,d){var s=a?$.nj():$.ni()
if(s==null)return null
if(0===c&&d===b.length)return P.mg(s,b)
return P.mg(s,b.subarray(c,P.bh(c,d,b.length)))},
mg:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.ak(r)}return null},
lE:function(a,b,c,d,e,f){if(C.c.bl(f,4)!==0)throw H.c(P.a6("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a6("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a6("Invalid base64 padding, more than two '=' characters",a,b))},
p7:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
p6:function(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.bL(a),r=0;r<p;++r){q=s.h(a,b+r)
o[r]=(q&4294967040)>>>0!==0?255:q}return o},
jx:function jx(){},
jw:function jw(){},
hS:function hS(){},
hT:function hT(){},
ee:function ee(){},
eh:function eh(){},
i8:function i8(){},
im:function im(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
il:function il(a){this.a=a},
ju:function ju(){},
jy:function jy(){},
k9:function k9(a){this.b=0
this.c=a},
jv:function jv(a){this.a=a},
k8:function k8(a){this.a=a
this.b=16
this.c=0},
kC:function(a,b){var s=H.lY(a,b)
if(s!=null)return s
throw H.c(P.a6(a,null,null))},
nM:function(a){if(a instanceof H.bw)return a.i(0)
return"Instance of '"+H.d8(a)+"'"},
cT:function(a,b,c,d){var s,r=c?J.kZ(a,d):J.nR(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
iv:function(a,b,c){var s,r=H.b([],c.J("w<0>"))
for(s=J.aE(a);s.u();)r.push(s.gB(s))
if(b)return r
return J.l_(r)},
nY:function(a,b,c){var s,r,q=J.kZ(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
fc:function(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=P.bh(b,c,r)
return H.lZ(b>0||c<r?s.slice(b,c):s)}if(t.bm.b(a))return H.ob(a,b,P.bh(b,c,a.length))
return P.oj(a,b,c)},
oj:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.a7(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.a7(c,b,a.length,o,o))
r=J.aE(a)
for(q=0;q<b;++q)if(!r.u())throw H.c(P.a7(b,0,q,o,o))
p=[]
if(s)for(;r.u();)p.push(r.gB(r))
else for(q=b;q<c;++q){if(!r.u())throw H.c(P.a7(c,b,q,o,o))
p.push(r.gB(r))}return H.lZ(p)},
oc:function(a){return new H.ew(a,H.nU(a,!1,!0,!1,!1,!1))},
m6:function(a,b,c){var s=J.aE(b)
if(!s.u())return a
if(c.length===0){do a+=H.x(s.gB(s))
while(s.u())}else{a+=H.x(s.gB(s))
for(;s.u();)a=a+c+H.x(s.gB(s))}return a},
mc:function(){var s=H.o2()
if(s!=null)return P.oo(s)
throw H.c(P.C("'Uri.base' is not supported"))},
k7:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.np().b
s=s.test(b)}else s=!1
if(s)return b
r=c.ghD().c9(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.az(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
nI:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
nJ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ek:function(a){if(a>=10)return""+a
return"0"+a},
lK:function(a){return new P.bx(1000*a)},
ib:function(a){if(typeof a=="number"||H.kl(a)||null==a)return J.cs(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nM(a)},
hO:function(a){return new P.ea(a)},
ct:function(a){return new P.aF(!1,null,null,a)},
eZ:function(a,b){return new P.d9(null,null,!0,a,b,"Value not in range")},
a7:function(a,b,c,d,e){return new P.d9(b,c,!0,a,d,"Invalid value")},
bh:function(a,b,c){if(0>a||a>c)throw H.c(P.a7(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.a7(b,a,c,"end",null))
return b}return c},
m_:function(a,b){if(a<0)throw H.c(P.a7(a,0,null,b,null))
return a},
O:function(a,b,c,d,e){var s=e==null?J.aM(b):e
return new P.es(s,!0,a,c,"Index out of range")},
C:function(a){return new P.fx(a)},
jn:function(a){return new P.fu(a)},
l5:function(a){return new P.c5(a)},
aJ:function(a){return new P.ef(a)},
f:function(a){return new P.fS(a)},
a6:function(a,b,c){return new P.ii(a,b,c)},
lw:function(a){H.qj(a)},
oo:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.C(a5,4)^58)*3|C.a.C(a5,0)^100|C.a.C(a5,1)^97|C.a.C(a5,2)^116|C.a.C(a5,3)^97)>>>0
if(s===0)return P.mb(a4<a4?C.a.t(a5,0,a4):a5,5,a3).ge5()
else if(s===32)return P.mb(C.a.t(a5,5,a4),0,a3).ge5()}r=P.cT(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.mM(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(P.mM(a5,0,q,20,r)===20)r[7]=q
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
a5=C.a.b_(a5,n,m,"/");++a4
m=f}j="file"}else if(C.a.a7(a5,"http",0)){if(i&&o+3===n&&C.a.a7(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=C.a.b_(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&C.a.a7(a5,"https",0)){if(i&&o+4===n&&C.a.a7(a5,"443",o+1)){l-=4
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
l-=0}return new P.hc(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=P.p0(a5,0,q)
else{if(q===0)P.ck(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?P.p1(a5,d,p-1):""
b=P.oY(a5,p,o,!1)
i=o+1
if(i<n){a=H.lY(C.a.t(a5,i,n),a3)
a0=P.p_(a==null?H.h(P.a6("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.oZ(a5,n,m,a3,j,b!=null)
a2=m<l?P.li(a5,m+1,l,a3):a3
return new P.bK(j,c,b,a0,a1,a2,l<a4?P.oX(a5,l+1,a4):a3)},
me:function(a){var s=t.N
return C.b.hJ(H.b(a.split("&"),t.s),P.T(s,s),new P.js(C.e))},
on:function(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jp(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=C.a.U(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=P.kC(C.a.t(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(q>=4)return H.d(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=P.kC(C.a.t(a,r,c),null)
if(o>255)k.$2(l,r)
if(q>=4)return H.d(j,q)
j[q]=o
return j},
md:function(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.jq(a),c=new P.jr(d,a)
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
l=C.b.gay(s)
if(m&&l!==-1)d.$2("expected a part after last `:`",a0)
if(!m)if(!o)s.push(c.$2(q,a0))
else{k=P.on(a,q,a0)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)d.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)d.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){if(h<0||h>=16)return H.d(j,h)
j[h]=0
e=h+1
if(e>=16)return H.d(j,e)
j[e]=0
h+=2}else{e=C.c.aT(g,8)
if(h<0||h>=16)return H.d(j,h)
j[h]=e
e=h+1
if(e>=16)return H.d(j,e)
j[e]=g&255
h+=2}}return j},
mz:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
ck:function(a,b,c){throw H.c(P.a6(c,a,b))},
p_:function(a,b){if(a!=null&&a===P.mz(b))return null
return a},
oY:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.U(a,b)===91){s=c-1
if(C.a.U(a,s)!==93)P.ck(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.oV(a,r,s)
if(q<s){p=q+1
o=P.mE(a,C.a.a7(a,"25",p)?q+3:p,s,"%25")}else o=""
P.md(a,r,q)
return C.a.t(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.U(a,n)===58){q=C.a.bw(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mE(a,C.a.a7(a,"25",p)?q+3:p,c,"%25")}else o=""
P.md(a,b,q)
return"["+C.a.t(a,b,q)+o+"]"}return P.p3(a,b,c)},
oV:function(a,b,c){var s=C.a.bw(a,"%",b)
return s>=b&&s<c?s:c},
mE:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.a_(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.U(a,s)
if(p===37){o=P.lj(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.a_("")
m=i.a+=C.a.t(a,r,s)
if(n)o=C.a.t(a,s,s+3)
else if(o==="%")P.ck(a,s,"ZoneID should not contain % anymore")
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
n.a+=P.lh(p)
s+=k
r=s}}}if(i==null)return C.a.t(a,b,c)
if(r<c)i.a+=C.a.t(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
p3:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.U(a,s)
if(o===37){n=P.lj(a,s,!0)
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
if(m>=8)return H.d(C.i,m)
m=(C.i[m]&1<<(o&15))!==0}else m=!1
if(m)P.ck(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.U(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=C.a.t(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.a_("")
m=q}else m=q
m.a+=l
m.a+=P.lh(o)
s+=j
r=s}}}}if(q==null)return C.a.t(a,b,c)
if(r<c){l=C.a.t(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
p0:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.mB(C.a.C(a,b)))P.ck(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.C(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.d(C.k,p)
p=(C.k[p]&1<<(q&15))!==0}else p=!1
if(!p)P.ck(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.t(a,b,c)
return P.oU(r?a.toLowerCase():a)},
oU:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
p1:function(a,b,c){return P.dW(a,b,c,C.Y,!1)},
oZ:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dW(a,b,c,C.y,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.Z(s,"/"))s="/"+s
return P.p2(s,e,f)},
p2:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.Z(a,"/"))return P.p4(a,!s||c)
return P.p5(a)},
li:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.ct("Both query and queryParameters specified"))
return P.dW(a,b,c,C.j,!0)}if(d==null)return null
s=new P.a_("")
r.a=""
d.E(0,new P.k5(new P.k6(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
oX:function(a,b,c){return P.dW(a,b,c,C.j,!0)},
lj:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.U(a,b+1)
r=C.a.U(a,n)
q=H.ky(s)
p=H.ky(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aT(o,4)
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.az(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.t(a,b,b+3).toUpperCase()
return null},
lh:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=C.a.C(k,a>>>4)
s[2]=C.a.C(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=C.c.h2(a,6*q)&63|r
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
o+=3}}return P.fc(s,0,null)},
dW:function(a,b,c,d,e){var s=P.mD(a,b,c,d,e)
return s==null?C.a.t(a,b,c):s},
mD:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.U(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.d(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lj(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.d(C.i,n)
n=(C.i[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.ck(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.U(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=P.lh(o)}}if(p==null){p=new P.a_("")
n=p}else n=p
n.a+=C.a.t(a,q,r)
n.a+=H.x(m)
if(typeof l!=="number")return H.mW(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.t(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mC:function(a){if(C.a.Z(a,"."))return!0
return C.a.dD(a,"/.")!==-1},
p5:function(a){var s,r,q,p,o,n,m
if(!P.mC(a))return a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.K(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.d(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
p4:function(a,b){var s,r,q,p,o,n
if(!P.mC(a))return!b?P.mA(a):a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gay(s)!==".."){if(0>=s.length)return H.d(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.d(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gay(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.d(s,0)
r=P.mA(s[0])
if(0>=s.length)return H.d(s,0)
s[0]=r}return C.b.j(s,"/")},
mA:function(a){var s,r,q,p=a.length
if(p>=2&&P.mB(C.a.C(a,0)))for(s=1;s<p;++s){r=C.a.C(a,s)
if(r===58)return C.a.t(a,0,s)+"%3A"+C.a.a9(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.d(C.k,q)
q=(C.k[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
oW:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.C(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.ct("Invalid URL encoding"))}}return s},
lk:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.C(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.t(a,b,c)
else p=new H.r(C.a.t(a,b,c))}else{p=H.b([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.C(a,o)
if(r>127)throw H.c(P.ct("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.ct("Truncated URI"))
p.push(P.oW(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a3.c9(p)},
mB:function(a){var s=a|32
return 97<=s&&s<=122},
mb:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.b([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.C(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.a6(k,a,r))}}if(q<0&&r>b)throw H.c(P.a6(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.C(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gay(j)
if(p!==44||r!==n+7||!C.a.a7(a,"base64",n+1))throw H.c(P.a6("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.H.hR(0,a,m,s)
else{l=P.mD(a,m,s,C.j,!0)
if(l!=null)a=C.a.b_(a,m,s,l)}return new P.jo(a,j,c)},
pb:function(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="?",i="#",h=H.b(new Array(22),t.gN)
for(s=0;s<22;++s)h[s]=new Uint8Array(96)
r=new P.ki(h)
q=new P.kj()
p=new P.kk()
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
mM:function(a,b,c,d,e){var s,r,q,p,o,n,m=$.nq()
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
bx:function bx(a){this.a=a},
i4:function i4(){},
i5:function i5(){},
L:function L(){},
ea:function ea(a){this.a=a},
fn:function fn(){},
eO:function eO(){},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d9:function d9(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
es:function es(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fx:function fx(a){this.a=a},
fu:function fu(a){this.a=a},
c5:function c5(a){this.a=a},
ef:function ef(a){this.a=a},
eR:function eR(){},
df:function df(){},
ei:function ei(a){this.a=a},
fS:function fS(a){this.a=a},
ii:function ii(a,b,c){this.a=a
this.b=b
this.c=c},
j:function j(){},
et:function et(){},
ag:function ag(){},
P:function P(){},
a_:function a_(a){this.a=a},
js:function js(a){this.a=a},
jp:function jp(a){this.a=a},
jq:function jq(a){this.a=a},
jr:function jr(a,b){this.a=a
this.b=b},
bK:function bK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
k6:function k6(a,b){this.a=a
this.b=b},
k5:function k5(a){this.a=a},
jo:function jo(a,b,c){this.a=a
this.b=b
this.c=c},
ki:function ki(a){this.a=a},
kj:function kj(){},
kk:function kk(){},
hc:function hc(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fK:function fK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
bo:function(a){var s,r,q,p,o
if(a==null)return null
s=P.T(t.N,t.A)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
mH:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.kl(a))return a
if(t.f.b(a))return P.mQ(a)
if(t.r.b(a)){s=[]
J.e7(a,new P.kg(s))
a=s}return a},
mQ:function(a){var s={}
J.e7(a,new P.kq(s))
return s},
jZ:function jZ(){},
k0:function k0(a,b){this.a=a
this.b=b},
k1:function k1(a,b){this.a=a
this.b=b},
kg:function kg(a){this.a=a},
kq:function kq(a){this.a=a},
k_:function k_(a,b){this.a=a
this.b=b},
eo:function eo(a,b){this.a=a
this.b=b},
ig:function ig(){},
ih:function ih(){},
ha:function ha(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aS:function aS(){},
ez:function ez(){},
aV:function aV(){},
eP:function eP(){},
iV:function iV(){},
c3:function c3(){},
fb:function fb(){},
o:function o(){},
aW:function aW(){},
fm:function fm(){},
fZ:function fZ(){},
h_:function h_(){},
h6:function h6(){},
h7:function h7(){},
hk:function hk(){},
hl:function hl(){},
ht:function ht(){},
hu:function hu(){},
hQ:function hQ(){},
ec:function ec(){},
hR:function hR(a){this.a=a},
ed:function ed(){},
b4:function b4(){},
eQ:function eQ(){},
fG:function fG(){},
da:function da(){},
f6:function f6(){},
hg:function hg(){},
hh:function hh(){}},W={
lD:function(){var s=document.createElement("a")
s.toString
return s},
lH:function(){var s=document.createElement("canvas")
s.toString
return s},
nL:function(a,b,c){var s=document.body
s.toString
s=new H.aZ(new W.a4(C.p.ah(s,a,b,c)),new W.i6(),t.ac.J("aZ<k.E>"))
return t.h.a(s.gaL(s))},
i7:function(a){return"wheel"},
cE:function(a){var s,r,q="element tag unavailable"
try{s=J.b0(a)
s.ge2(a)
q=s.ge2(a)}catch(r){H.ak(r)}return q},
nO:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.ak(s)}return q},
jR:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mq:function(a,b,c,d){var s=W.jR(W.jR(W.jR(W.jR(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
a5:function(a,b,c,d){var s=new W.dA(a,b,c==null?null:W.mN(new W.jP(c),t.aD),!1)
s.h9()
return s},
mp:function(a){var s=W.lD(),r=window
s=new W.ci(new W.jW(s,r.location))
s.el(a)
return s},
oy:function(a,b,c,d){return!0},
oz:function(a,b,c,d){var s,r,q,p=d.a,o=p.a
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
mu:function(){var s=t.N,r=P.lP(C.z,s),q=H.b(["TEMPLATE"],t.s)
s=new W.ho(r,P.cQ(s),P.cQ(s),P.cQ(s),null)
s.eq(null,new H.cX(C.z,new W.k2(),t.dv),q,null)
return s},
mN:function(a,b){var s=$.aL
if(s===C.f)return a
return s.dg(a,b)},
v:function v(){},
hN:function hN(){},
e8:function e8(){},
e9:function e9(){},
bP:function bP(){},
bt:function bt(){},
bu:function bu(){},
bv:function bv(){},
aG:function aG(){},
hY:function hY(){},
J:function J(){},
cA:function cA(){},
hZ:function hZ(){},
as:function as(){},
aQ:function aQ(){},
i_:function i_(){},
i0:function i0(){},
i1:function i1(){},
b6:function b6(){},
i2:function i2(){},
cB:function cB(){},
cC:function cC(){},
el:function el(){},
i3:function i3(){},
fH:function fH(a,b){this.a=a
this.b=b},
E:function E(){},
i6:function i6(){},
m:function m(){},
e:function e(){},
af:function af(){},
bU:function bU(){},
en:function en(){},
ep:function ep(){},
au:function au(){},
ik:function ik(){},
bz:function bz(){},
cJ:function cJ(){},
bX:function bX(){},
bA:function bA(){},
iw:function iw(){},
iN:function iN(){},
bZ:function bZ(){},
eG:function eG(){},
iO:function iO(a){this.a=a},
eH:function eH(){},
iP:function iP(a){this.a=a},
aw:function aw(){},
eI:function eI(){},
am:function am(){},
a4:function a4(a){this.a=a},
t:function t(){},
d4:function d4(){},
ax:function ax(){},
eV:function eV(){},
f0:function f0(){},
j1:function j1(a){this.a=a},
f2:function f2(){},
an:function an(){},
f4:function f4(){},
aB:function aB(){},
f5:function f5(){},
aC:function aC(){},
f9:function f9(){},
j9:function j9(a){this.a=a},
ai:function ai(){},
bj:function bj(){},
dg:function dg(){},
fd:function fd(){},
fe:function fe(){},
c7:function c7(){},
ao:function ao(){},
ad:function ad(){},
fg:function fg(){},
fh:function fh(){},
jd:function jd(){},
ap:function ap(){},
bG:function bG(){},
fl:function fl(){},
ji:function ji(){},
aY:function aY(){},
jt:function jt(){},
fB:function fB(){},
bk:function bk(){},
cg:function cg(){},
ch:function ch(){},
fI:function fI(){},
dz:function dz(){},
fW:function fW(){},
dF:function dF(){},
hf:function hf(){},
hm:function hm(){},
fF:function fF(){},
fP:function fP(a){this.a=a},
kW:function kW(a,b){this.a=a
this.$ti=b},
dA:function dA(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jP:function jP(a){this.a=a},
la:function la(a){this.$ti=a},
ci:function ci(a){this.a=a},
N:function N(){},
d5:function d5(a){this.a=a},
iS:function iS(a){this.a=a},
iR:function iR(a,b,c){this.a=a
this.b=b
this.c=c},
dL:function dL(){},
jX:function jX(){},
jY:function jY(){},
ho:function ho(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
k2:function k2(){},
hn:function hn(){},
cG:function cG(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
jW:function jW(a,b){this.a=a
this.b=b},
hy:function hy(a){this.a=a
this.b=0},
ka:function ka(a){this.a=a},
fJ:function fJ(){},
fL:function fL(){},
fM:function fM(){},
fN:function fN(){},
fO:function fO(){},
fT:function fT(){},
fU:function fU(){},
fX:function fX(){},
fY:function fY(){},
h0:function h0(){},
h1:function h1(){},
h2:function h2(){},
h3:function h3(){},
h4:function h4(){},
h5:function h5(){},
h8:function h8(){},
h9:function h9(){},
hb:function hb(){},
dM:function dM(){},
dN:function dN(){},
hd:function hd(){},
he:function he(){},
hj:function hj(){},
hp:function hp(){},
hq:function hq(){},
dP:function dP(){},
dQ:function dQ(){},
hr:function hr(){},
hs:function hs(){},
hz:function hz(){},
hA:function hA(){},
hB:function hB(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(){},
hF:function hF(){},
hG:function hG(){},
hH:function hH(){},
hI:function hI(){}},K={
Q:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.f("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.C(a,0)
r=C.a.C(b,0)
if(s>r){q=r
r=s
s=q}return new K.eY(s,r)},
aN:function aN(){},
cI:function cI(){},
ac:function ac(a){this.a=a},
eY:function eY(a,b){this.a=a
this.b=b},
u:function u(a){this.a=a}},L={
jg:function(){var s=t.N
return new L.jf(P.T(s,t.dl),P.T(s,t.f7),P.cQ(s))},
f7:function f7(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
fj:function fj(a,b,c){this.a=a
this.b=b
this.c=c},
fk:function fk(a,b){this.b=a
this.c=b},
jf:function jf(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dj:function dj(a,b){this.b=a
this.c=!1
this.a=b}},O={
kT:function(a){return new O.al(H.b([],a.J("w<0>")),a.J("al<0>"))},
al:function al(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
d0:function d0(a){this.a=a
this.b=null},
lQ:function(){var s=O.kT(t.gc),r=new O.cY(s)
s.bm(r.gf0(),r.gf2())
s=r.gdJ()
s.gv().n(0,r.gcY())
s.gdI().n(0,r.gcK())
return r},
eF:function(a,b){return new O.cZ(new V.V(0,0,0),a,b,new A.aI(!1,!1,!1))},
cY:function cY(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
iF:function iF(a,b){this.a=a
this.b=b},
iG:function iG(){},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(){},
iJ:function iJ(a,b){this.a=a
this.b=b},
iK:function iK(){},
iL:function iL(a,b){this.a=a
this.b=b},
iM:function iM(){},
iz:function iz(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c},
eE:function eE(){},
iA:function iA(a,b,c){this.a=a
this.b=b
this.c=c},
cZ:function cZ(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d},
iC:function iC(a){this.b=a},
iD:function iD(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d},
iE:function iE(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d},
dh:function dh(){}},E={
kV:function(){var s=O.kT(t.l),r=new E.by(s)
s.bm(r.ghS(),r.ghV())
r.sac(0,null)
r.sbk(null)
r.saY(null)
return r},
mm:function(){var s=window.navigator.vendor
s.toString
if(C.a.D(s,"Google"))return C.F
s=window.navigator.userAgent
s.toString
if(C.a.D(s,"Firefox"))return C.q
s=window.navigator.appVersion
s.toString
if(C.a.D(s,"Trident")||C.a.D(s,"Edge"))return C.r
s=window.navigator.appName
s.toString
if(C.a.D(s,"Microsoft"))return C.r
return C.G},
mn:function(){var s=window.navigator.appVersion
s.toString
if(C.a.D(s,"Win"))return C.a0
if(C.a.D(s,"Mac"))return C.A
if(C.a.D(s,"Linux"))return C.a1
return C.a2},
od:function(a,b){var s
Date.now()
s=t.fA
s=new E.iY(a,new P.Y(Date.now(),!1),new P.Y(Date.now(),!1),new O.d0(H.b([],s)),new O.d0(H.b([],s)),new O.d0(H.b([],s)),H.b([null],t.bc),P.T(t.N,t.fg))
s.ek(a,b)
return s},
ol:function(a,b,c,d,e){var s,r
if(t.gA.b(a))return E.m7(a,!0,!0,!0,!1)
s=W.lH()
r=s.style
r.width="100%"
r.height="100%"
J.nv(a).n(0,s)
return E.m7(s,!0,!0,!0,!1)},
m7:function(a,b,c,d,e){var s,r,q,p,o="mousemove",n=t.A,m=t.gW.a(C.l.e9(a,"webgl2",P.nW(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n)))
if(m==null)throw H.c(P.f("Failed to get the rendering context for WebGL."))
s=E.od(m,a)
H.ke(m.getParameter(3379))
H.ke(m.getParameter(34076))
n=H.b([],t.g9)
r=$.i9
q=new X.fz(a,n,(r==null?$.i9=new E.fQ(E.mm(),E.mn()):r).a===C.q?0.16666666666666666:0.005555555555555556)
p=document
p.toString
n.push(W.a5(p,"contextmenu",q.gfc(),!1))
n.push(W.a5(a,"focus",q.gfi(),!1))
n.push(W.a5(a,"blur",q.gf4(),!1))
n.push(W.a5(p,"keyup",q.gfm(),!1))
n.push(W.a5(p,"keydown",q.gfk(),!1))
n.push(W.a5(a,"mousedown",q.gfq(),!1))
n.push(W.a5(a,"mouseup",q.gfv(),!1))
n.push(W.a5(a,o,q.gft(),!1))
W.i7(a)
W.i7(a)
n.push(W.a5(a,W.i7(a),q.gfz(),!1))
n.push(W.a5(p,o,q.gfe(),!1))
n.push(W.a5(p,"mouseup",q.gfg(),!1))
n.push(W.a5(p,"pointerlockchange",q.gfB(),!1))
n.push(W.a5(a,"touchstart",q.gfO(),!1))
n.push(W.a5(a,"touchend",q.gfK(),!1))
n.push(W.a5(a,"touchmove",q.gfM(),!1))
n=new E.fi(a,s,q,new P.Y(Date.now(),!1))
n.d_()
return n},
hU:function hU(){},
by:function by(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bR:function bR(a){this.b=a},
c1:function c1(a){this.b=a},
fQ:function fQ(a,b){this.a=a
this.b=b},
iY:function iY(a,b,c,d,e,f,g,h){var _=this
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
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
fi:function fi(a,b,c,d){var _=this
_.b=a
_.d=null
_.e=b
_.x=c
_.Q=null
_.cx=!1
_.cy=d
_.db=0},
jc:function jc(a){this.a=a}},Z={
l9:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cl(c)),35044)
a.bindBuffer(b,null)
return new Z.fC(b,s)},
aD:function(a){return new Z.bI(a)},
fC:function fC(a,b){this.a=a
this.b=b},
bS:function bS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jK:function jK(a){this.a=a},
cv:function cv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bW:function bW(a,b,c){this.a=a
this.b=b
this.c=c},
bI:function bI(a){this.a=a}},D={
W:function(){return new D.bT()},
hW:function hW(){},
bT:function bT(){var _=this
_.c=_.b=_.a=null
_.d=0},
ic:function ic(a){this.a=a},
id:function id(a){this.a=a},
Z:function Z(){},
b8:function b8(){},
b9:function b9(){},
G:function G(a,b,c){this.c=a
this.d=b
this.e=c},
cO:function cO(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null},
c4:function c4(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null
_.r=e
_.y=_.x=null
_.Q=_.z=1
_.ch=f
_.cx=1
_.cy=g
_.db=!0
_.dx=h
_.dy=1
_.fx=_.fr=0
_.fy=!0
_.go=null}},X={cw:function cw(a,b){this.a=a
this.b=b},ey:function ey(a,b){this.a=a
this.b=b},ir:function ir(a){this.d=a},cU:function cU(a,b,c){this.x=a
this.c=b
this.d=c},ix:function ix(a,b,c,d){var _=this
_.a=a
_.f=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},bf:function bf(a,b,c){this.a=a
this.b=b
this.c=c},c_:function c_(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},iQ:function iQ(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},eX:function eX(){},di:function di(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},jh:function jh(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},fz:function fz(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
nN:function(a){var s=new V.aP(0,0,0,1),r=$.m2
if(r==null){r=V.m1(0,0,1,1)
$.m2=r}return new X.ij(s,r)},
ij:function ij(a,b){this.a=a
this.r=b
this.x=null},
eS:function eS(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
jb:function jb(){}},V={
hK:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
qq:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bl(a-b,s)
return(a<0?a+s:a)+b},
B:function(a,b,c){$.F().toString
return C.a.aj(C.d.cz(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cq:function(a,b,c){var s,r,q,p,o,n,m,l=H.b([],t.s)
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.q)(a),++p){o=a[p]
$.F().toString
n=C.a.aj(C.d.cz(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.d(l,m)
s=C.a.aj(l[m],q)
r=l.length
if(m>=r)return H.d(l,m)
l[m]=s}return l},
bB:function(){var s=$.lV
return s==null?$.lV=V.be(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
be:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bd(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lU:function(a,b,c){return V.be(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lT:function(a,b,c,d){return V.be(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lS:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.be(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
lW:function(){var s=$.ay
return s==null?$.ay=new V.R(0,0,0):s},
m1:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f_(a,b,c,d)},
dw:function(){var s=$.mj
return s==null?$.mj=new V.D(0,0,0):s},
ot:function(){var s=$.jA
return s==null?$.jA=new V.D(-1,0,0):s},
mk:function(){var s=$.jB
return s==null?$.jB=new V.D(0,1,0):s},
l8:function(){var s=$.jC
return s==null?$.jC=new V.D(0,0,1):s},
or:function(a,b,c){return new V.D(a,b,c)},
os:function(a){return new V.D(a.a,a.b,a.c)},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ia:function ia(){},
d_:function d_(a,b,c,d,e,f,g,h,i){var _=this
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
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
bE:function bE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f_:function f_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aq:function aq(a,b){this.a=a
this.b=b},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
dx:function dx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qk:function(a){P.om(C.R,new V.kN(a))},
of:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.a5(n,"scroll",new V.j6(s),!1)
return new V.j4(o)},
aH:function aH(){},
kN:function kN(a){this.a=a},
ej:function ej(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
eq:function eq(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
er:function er(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
eU:function eU(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
iW:function iW(a,b,c){this.a=a
this.b=b
this.c=c},
iX:function iX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j4:function j4(a){this.a=a
this.b=null},
j6:function j6(a){this.a=a},
j5:function j5(a){this.a=a},
j7:function j7(a){this.a=a}},U={
lJ:function(){return new U.hX()},
eg:function(a){var s=V.bB(),r=new U.cx(s)
if(!s.q(0,a))r.a=a
return r},
kX:function(){var s=new U.bV(V.bB(),H.b([],t.eJ))
s.bm(s.gen(),s.gfG())
return s},
mf:function(a,b){var s,r,q=U.lJ(),p=U.lJ(),o=$.jz
if(o==null)o=$.jz=new V.aq(0,0)
o=new U.dv(q,p,new X.bf(!1,!1,!1),o,V.bB())
q.se7(0,!0)
q.sdK(6.283185307179586)
q.sdM(0)
q.sa4(0,0)
q.sdL(100)
q.sa6(0)
q.sdj(0.5)
s=o.gbo()
q.gv().n(0,s)
p.se7(0,!0)
p.sdK(6.283185307179586)
p.sdM(0)
p.sa4(0,0)
p.sdL(100)
p.sa6(0)
p.sdj(0.5)
p.gv().n(0,s)
q=new X.bf(a,!1,!1)
if(!o.d.q(0,q)){r=o.d
o.d=q
o.a_(new D.G("modifiers",r,q))}o.hi(b)
return o},
hX:function hX(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
cx:function cx(a){this.a=a
this.b=null},
bV:function bV(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
ab:function ab(){},
dv:function dv(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.cx=_.ch=_.r=_.f=!1
_.db=_.cy=0
_.dx=d
_.dy=0
_.fr=e
_.fx=null}},M={em:function em(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
o_:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=""+"MaterialLight_"+a4.gar(a4)+a5.gar(a5)+a6.gar(a6)+a7.gar(a7)+a8.gar(a8)+a9.gar(a9)+b0.gar(b0)+b1.gar(b1)+b2.gar(b2)+"_"
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
c=new Z.bI(c.a|s.a)}if(g)c=new Z.bI(c.a|$.bq().a)
if(f)c=new Z.bI(c.a|$.bp().a)
return new A.iB(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
kn:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
ko:function(a,b,c){var s
A.kn(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hL(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
pw:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.kn(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
ps:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.ko(b,r,"ambient")
b.a+="\n"},
pu:function(a,b){var s,r=a.c
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.ko(b,r,"diffuse")
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
px:function(a,b){var s,r=a.d
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.ko(b,r,"invDiffuse")
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
pD:function(a,b){var s,r=a.e
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.ko(b,r,"specular")
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
pz:function(a,b){var s,r,q
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
pB:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.kn(b,r,"reflect")
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
pC:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.kn(b,r,"refract")
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
pt:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.hL(r)
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
pv:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+s
q=A.hL(r)
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
pA:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.hL(r)
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
pE:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.hL(r)
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
if(m){s=$.i9
if(s==null)s=$.i9=new E.fQ(E.mm(),E.mn())
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
py:function(a,b){var s,r
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
pF:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.a_(""),j=""+"precision mediump float;\n"
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
A.pw(a,k)
A.ps(a,k)
A.pu(a,k)
A.px(a,k)
A.pD(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.pB(a,k)
A.pC(a,k)}A.pz(a,k)
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
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pt(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pv(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pA(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pE(a,p[n],k)
A.py(a,k)}p=k.a+="// === Main ===\n"
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
k.a+=l+(q[0].toUpperCase()+C.a.a9(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.a9(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.a9(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.a9(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)j=!1
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
pG:function(a,b){var s,r,q
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
pI:function(a,b){var s
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
pH:function(a,b){var s
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
pK:function(a,b){var s,r
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
pL:function(a,b){var s,r
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
pJ:function(a,b){var s
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
pM:function(a,b){var s
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
hL:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.a9(a,1)},
l7:function(a,b,c,d,e){var s=new A.fo(H.b([],t.t),a,c,e)
s.f=d
s.e=P.cT(d,0,!1,t.S)
return s},
eb:function eb(a,b,c){this.a=a
this.b=b
this.c=c},
hP:function hP(a){this.a=a},
aI:function aI(a,b,c){this.a=a
this.b=b
this.c=c},
eD:function eD(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.iz=_.iy=_.du=_.ix=_.iw=_.dt=_.ds=_.iv=_.iu=_.dr=_.dq=_.it=_.is=_.dn=_.ir=_.iq=_.dm=_.dl=_.bv=_.aV=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.cc=c
_.cd=d
_.ce=e
_.cf=f
_.cg=g
_.ci=h
_.cj=i
_.ck=j
_.iC=_.iB=_.iA=null
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
iB:function iB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.bv=b6
_.dl=b7},
dn:function dn(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dp:function dp(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dr:function dr(a,b,c,d,e,f,g,h,i,j){var _=this
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
du:function du(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dc:function dc(){},
a2:function a2(){},
jm:function jm(a){this.a=a},
c9:function c9(a,b,c){this.a=a
this.c=b
this.d=c},
fq:function fq(a,b,c){this.a=a
this.c=b
this.d=c},
fr:function fr(a,b,c){this.a=a
this.c=b
this.d=c},
fs:function fs(a,b,c){this.a=a
this.c=b
this.d=c},
fo:function fo(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
dk:function dk(a,b,c){this.a=a
this.c=b
this.d=c},
fp:function fp(a,b,c){this.a=a
this.c=b
this.d=c},
dl:function dl(a,b,c){this.a=a
this.c=b
this.d=c},
dm:function dm(a,b,c){this.a=a
this.c=b
this.d=c},
ft:function ft(a,b,c){this.a=a
this.c=b
this.d=c},
dq:function dq(a,b,c){this.a=a
this.c=b
this.d=c},
ca:function ca(a,b,c){this.a=a
this.c=b
this.d=c},
ds:function ds(a,b,c){this.a=a
this.c=b
this.d=c},
dt:function dt(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lq:function(a,b,c,d){var s=F.l4()
F.dY(s,b,c,d,a,1,0,0,1)
F.dY(s,b,c,d,a,0,1,0,3)
F.dY(s,b,c,d,a,0,0,1,2)
F.dY(s,b,c,d,a,-1,0,0,0)
F.dY(s,b,c,d,a,0,-1,0,0)
F.dY(s,b,c,d,a,0,0,-1,3)
s.aw()
return s},
kh:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
dY:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.D(g,f+a2,e+a3)
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
i.d=h}k=F.kh(h)
j=F.kh(g)
a.bg(F.ly(a0,a1,new F.kc(i,F.kh(f),F.kh(e),j,k,c),b))},
mS:function(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(a1<3)throw H.c(P.f("Must have 3 or more sizes for a disk."))
s=F.l4()
r=b?-1:1
q=-6.283185307179586/a1
p=t.k
o=H.b([],p)
n=s.gX()
m=new V.D(0,0,r).H()
o.push(n.hf(new V.bE(a,-1,-1,-1),new V.aP(1,1,1,1),new V.R(0,0,c),new V.D(0,0,r),new V.a1(0.5,0.5),m))
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
d=F.fA(new V.bE(a,-1,-1,-1),null,new V.aP(g,e,f,1),new V.R(j*h,i*h,c),new V.D(0,0,r),new V.a1(j*0.5+0.5,i*0.5+0.5),m,null,0)
n.n(0,d)
o.push(d)}s.gR().hd(o)
return s},
lr:function(a,b,c,d,e){return F.q2(b,c,1,new F.kr(a,e),d)},
q2:function(a,b,c,d,e){var s
if(e<3)throw H.c(P.f("Must have 3 or more sizes for a cylindrical shape."))
if(c<1)throw H.c(P.f("Must have 1 or more divisionss for a cylindrical shape."))
s=F.ly(c,e,new F.kt(d),null)
s.aw()
s.c4()
if(b)s.bg(F.mS(3,!1,1,new F.ku(d),e))
if(a)s.bg(F.mS(1,!0,-1,new F.kv(d),e))
return s},
ql:function(a,b){var s=F.lq(a,null,new F.kO(1,new F.kP()),b)
s.c4()
return s},
n2:function(){return F.mR(15,30,0.5,1,new F.kQ())},
qf:function(){return F.mR(12,120,0.3,1,new F.kE(3,2))},
mR:function(a,b,c,d,e){var s=F.ly(a,b,new F.ks(e,d,b,c),null)
s.aw()
s.c4()
return s},
ly:function(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null
if(a<1)throw H.c(P.f("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.f("Must have 1 or more divisions of the height for a surface."))
s=F.l4()
r=t.k
q=H.b([],r)
for(p=0;p<=b;++p){o=p/b
n=s.a
if(n==null)n=s.a=new F.y(s,H.b([],r))
if(o<0)m=0
else m=o>1?1:o
l=F.fA(d,d,new V.aP(m,0,0,1),d,d,new V.a1(o,1),d,d,0)
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
l=F.fA(d,d,new V.aP(g,f,e,1),d,d,new V.a1(o,j),d,d,0)
h.n(0,l)
c.$3(l,o,k)
q.push(l.ca(a0))}}s.gR().he(a+1,b+1,q)
return s},
l4:function(){return new F.j2()},
fA:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cd()
h=$.nk()
s=$.bs()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.br().a)!==0)q.r=e
if((r&$.bq().a)!==0)q.x=b
if((r&$.bN().a)!==0)q.y=f
if((r&$.bO().a)!==0)q.z=g
if((r&$.nl().a)!==0)q.Q=c
if((r&$.cr().a)!==0)q.ch=i
if((r&$.bp().a)!==0)q.cx=a
return q},
kc:function kc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kr:function kr(a,b){this.a=a
this.b=b},
kt:function kt(a){this.a=a},
ku:function ku(a){this.a=a},
kv:function kv(a){this.a=a},
kP:function kP(){},
kO:function kO(a,b){this.a=a
this.b=b},
kQ:function kQ(){},
kE:function kE(a,b){this.a=a
this.b=b},
ks:function ks(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
at:function at(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ie:function ie(){},
j8:function j8(){},
eA:function eA(){this.b=this.a=null},
is:function is(){},
jl:function jl(){},
eW:function eW(){this.a=null},
j2:function j2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
j3:function j3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dd:function dd(a,b){this.a=a
this.b=b},
de:function de(a,b){this.a=a
this.b=b},
bF:function bF(a,b){this.a=a
this.b=b},
cd:function cd(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
jJ:function jJ(a){this.a=a},
jI:function jI(a){this.a=a},
y:function y(a,b){this.a=a
this.b=!1
this.c=b},
ce:function ce(a,b,c){this.b=a
this.c=b
this.d=c},
jD:function jD(a,b){this.a=a
this.b=b},
jE:function jE(a,b){this.a=a
this.b=b},
cf:function cf(a,b){this.b=a
this.c=b},
jG:function jG(){},
jF:function jF(){},
jH:function jH(){},
iT:function iT(){},
dy:function dy(a){this.b=a}},N={
qh:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="testCanvas",a0=null,a1=V.of("Test 024"),a2=W.lH()
a2.className="pageLargeCanvas"
a2.id=a
a1.a.appendChild(a2).toString
s=t.s
a1.dc(H.b(["Test of the Material Lighting shader with a simple spot light. ","Use Ctrl plus the mouse to move the light."],s))
a1.hb(H.b(["shapes"],s))
a1.dc(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(a)
if(r==null)H.h(P.f("Failed to find an element with the identifier, testCanvas."))
q=E.ol(r,!0,!0,!0,!1)
p=U.kX()
p.n(0,U.eg(V.lU(0,0,-2.5)))
o=q.x
p.n(0,U.mf(!0,o))
n=new V.V(1,1,1)
m=new D.c4(V.lW(),V.l8(),V.mk(),V.ot(),new V.V(1,1,1),1.0471975511965976,1.5707963267948966,1.5707963267948966)
l=m.f
m.f=p
p.gv().n(0,m.gf6())
m.a0(new D.G("mover",l,m.f))
if(!m.r.q(0,n)){l=m.r
m.r=n
m.a0(new D.G("color",l,n))}k=m.ch
$.F().toString
if(!(Math.abs(k-1.0471975511965976)<1e-9)){m.ch=1.0471975511965976
j=1/(Math.sqrt(2)*Math.tan(m.ch))
m.z=j
m.Q=j*m.cx
m.a0(new D.G("fov",k,m.ch))}k=m.cx
$.F().toString
if(!(Math.abs(k-1)<1e-9)){m.cx=1
m.Q=m.z
m.a0(new D.G("ratio",k,1))}k=m.cy
$.F().toString
if(!(Math.abs(k-0.6)<1e-9)){m.cy=0.6
m.a0(new D.G("cutoff",k,0.6))}k=m.dx
$.F().toString
if(!(Math.abs(k-0.5)<1e-9)){m.dx=0.5
m.a0(new D.G("coneAngle",k,0.5))}i=$.ml
if(i==null){i=new V.dx(1,0.00390625,0.0000152587890625,0)
$.ml=i}if(!J.K(m.e,i)){l=m.e
m.e=i
m.a0(new D.G("shadowAdjust",l,i))}k=m.dy
$.F().toString
if(!(Math.abs(k-0.5)<1e-9)){m.dy=0.5
m.a0(new D.G("attenuation0",k,0.5))}k=m.fr
$.F().toString
if(!(Math.abs(k-0.05)<1e-9)){m.fr=0.05
m.a0(new D.G("attenuation1",k,0.05))}k=m.fx
$.F().toString
if(!(Math.abs(k-0.05)<1e-9)){m.fx=0.05
m.a0(new D.G("attenuation2",k,0.05))}h=O.lQ()
h.gdJ().n(0,m)
h.gcb().sax(0,new V.V(0,0,0))
k=h.gdd()
k.sax(0,new V.V(0,0,0))
k=h.gdk()
k.sax(0,new V.V(0.7,0.7,0.7))
k=h.gbI()
k.sax(0,new V.V(0.3,0.3,0.3))
k=h.gbI()
k.d1(new A.aI(!0,!1,!1))
k.d2(100)
g=E.kV()
g.sac(0,F.n2())
f=E.kV()
f.saY(U.eg(V.lT(3,3,3,1)))
k=F.lq(1,a0,a0,1)
k.cm()
f.sac(0,k)
e=U.kX()
e.n(0,U.mf(!1,o))
e.n(0,U.eg(V.lS(3.141592653589793)))
e.n(0,U.eg(V.lU(0,0,5)))
d=E.kV()
o=U.kX()
o.n(0,U.eg(V.lT(0.1,0.1,0.1,1)))
o.n(0,p)
d.saY(o)
d.sac(0,F.lr(0,!1,!0,40,1))
o=O.lQ()
k=o.gcb()
k.sax(0,new V.V(1,1,1))
d.sbk(o)
o=O.kT(t.l)
k=new M.em(o)
o.bm(k.gf8(),k.gfa())
c=X.nN(a0)
b=new X.eS(1.0471975511965976,0.1)
b.saY(a0)
j=b.c
$.F().toString
if(!(Math.abs(j-1.0471975511965976)<1e-9)){b.c=1.0471975511965976
b.aP(new D.G("fov",j,1.0471975511965976))}j=b.d
$.F().toString
if(!(Math.abs(j-0.1)<1e-9)){b.d=0.1
b.aP(new D.G("near",j,0.1))}j=b.e
$.F().toString
if(!(Math.abs(j-2000)<1e-9)){b.e=2000
b.aP(new D.G("far",j,2000))}j=k.b
if(j!==b){if(j!=null)j.gv().L(0,k.gau())
l=k.b
k.b=b
b.gv().n(0,k.gau())
k.aB(new D.G("camera",l,k.b))}j=k.c
if(j!==c){if(j!=null)j.gv().L(0,k.gau())
l=k.c
k.c=c
c.gv().n(0,k.gau())
k.aB(new D.G("target",l,k.c))}k.sbk(a0)
k.sbk(h)
o.n(0,g)
o.n(0,f)
o.n(0,d)
o=k.b
if(o!=null)o.saY(e)
o=q.d
if(o!==k){if(o!=null)o.gv().L(0,q.gcH())
q.d=k
k.gv().n(0,q.gcH())
q.cI()}r=s.getElementById("shapes")
if(r==null)H.h(P.f("Failed to find shapes for RadioGroup"))
s=new V.iW("shapes",!0,r)
s.bb(0,"Cube",new N.kF(g))
s.bb(0,"Cylinder",new N.kG(g))
s.bb(0,"Cone",new N.kH(g))
s.bb(0,"Sphere",new N.kI(g))
s.d9(0,"Toroid",new N.kJ(g),!0)
s.bb(0,"Knot",new N.kK(g))
s=q.Q
if(s==null)s=q.Q=D.W()
o=s.b
s=o==null?s.b=H.b([],t.a):o
s.push(new N.kL(a1,h))
V.qk(q)},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l0.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gF:function(a){return H.d7(a)},
i:function(a){return"Instance of '"+H.d8(a)+"'"}}
J.eu.prototype={
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$iaa:1}
J.cM.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0}}
J.bb.prototype={
gF:function(a){return 0},
i:function(a){return String(a)},
$ilO:1}
J.eT.prototype={}
J.bH.prototype={}
J.aR.prototype={
i:function(a){var s=a[$.n6()]
if(s==null)return this.ef(a)
return"JavaScript function for "+J.cs(s)},
$icH:1}
J.w.prototype={
ct:function(a,b){if(!!a.fixed$length)H.h(P.C("removeAt"))
if(b<0||b>=a.length)throw H.c(P.eZ(b,null))
return a.splice(b,1)[0]},
L:function(a,b){var s
if(!!a.fixed$length)H.h(P.C("remove"))
for(s=0;s<a.length;++s)if(J.K(a[s],b)){a.splice(s,1)
return!0}return!1},
ae:function(a,b){if(!!a.fixed$length)H.h(P.C("addAll"))
this.ex(a,b)
return},
ex:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.aJ(a))
for(s=0;s<r;++s)a.push(b[s])},
E:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.aJ(a))}},
j:function(a,b){var s,r,q=a.length,p=P.cT(q,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.x(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
hO:function(a){return this.j(a,"")},
hI:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.aJ(a))}return s},
hJ:function(a,b,c){return this.hI(a,b,c,t.A)},
hH:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.aJ(a))}throw H.c(H.io())},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ghG:function(a){if(a.length>0)return a[0]
throw H.c(H.io())},
gay:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.io())},
de:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.aJ(a))}return!1},
b5:function(a,b){if(!!a.immutable$list)H.h(P.C("sort"))
H.oi(a,b==null?J.pj():b)},
eb:function(a){return this.b5(a,null)},
D:function(a,b){var s
for(s=0;s<a.length;++s)if(J.K(a[s],b))return!0
return!1},
i:function(a){return P.kY(a,"[","]")},
gP:function(a){return new J.ae(a,a.length)},
gF:function(a){return H.d7(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.h(P.C("set length"))
if(b>a.length)H.kd(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.cp(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.h(P.C("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cp(a,b))
a[b]=c},
$iz:1,
$in:1,
$ij:1,
$ip:1}
J.ip.prototype={}
J.ae.prototype={
gB:function(a){return H.U(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.q(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bY.prototype={
ag:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gby(b)
if(this.gby(a)===s)return 0
if(this.gby(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gby:function(a){return a===0?1/a<0:a<0},
dv:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.C(""+a+".floor()"))},
aq:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.C(""+a+".round()"))},
cz:function(a,b){var s
if(b>20)throw H.c(P.a7(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gby(a))return"-"+s
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
bl:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
eh:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d4(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.d4(a,b)},
d4:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.C("Result of truncating division is "+H.x(s)+": "+H.x(a)+" ~/ "+b))},
aT:function(a,b){var s
if(a>0)s=this.d3(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
h2:function(a,b){if(b<0)throw H.c(H.e2(b))
return this.d3(a,b)},
d3:function(a,b){return b>31?0:a>>>b},
$iH:1,
$ia3:1}
J.cL.prototype={$ii:1}
J.ev.prototype={}
J.ba.prototype={
U:function(a,b){if(b<0)throw H.c(H.cp(a,b))
if(b>=a.length)H.h(H.cp(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.c(H.cp(a,b))
return a.charCodeAt(b)},
V:function(a,b){return a+b},
b_:function(a,b,c,d){var s=P.bh(b,c,a.length),r=a.substring(0,b),q=a.substring(s)
return r+d+q},
a7:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a7(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
Z:function(a,b){return this.a7(a,b,0)},
t:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.eZ(b,null))
if(b>c)throw H.c(P.eZ(b,null))
if(c>a.length)throw H.c(P.eZ(c,null))
return a.substring(b,c)},
a9:function(a,b){return this.t(a,b,null)},
ii:function(a){return a.toLowerCase()},
M:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.O)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
aj:function(a,b){var s=b-a.length
if(s<=0)return a
return this.M(" ",s)+a},
bw:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a7(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dD:function(a,b){return this.bw(a,b,0)},
hq:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.a7(c,0,s,null,null))
return H.n1(a,b,c)},
D:function(a,b){return this.hq(a,b,0)},
ag:function(a,b){var s
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
H.cN.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.r.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.U(this.a,b)}}
H.n.prototype={}
H.cS.prototype={
gP:function(a){return new H.bc(this,this.gl(this))},
bG:function(a,b){return this.ee(0,b)}}
H.bc.prototype={
gB:function(a){return H.U(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=J.bL(q),o=p.gl(q)
if(r.b!==o)throw H.c(P.aJ(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.I(q,s);++r.c
return!0}}
H.aT.prototype={
gP:function(a){return new H.eC(J.aE(this.a),this.b)},
gl:function(a){return J.aM(this.a)},
I:function(a,b){return this.b.$1(J.hM(this.a,b))}}
H.cD.prototype={$in:1}
H.eC.prototype={
u:function(){var s=this,r=s.b
if(r.u()){s.a=s.c.$1(r.gB(r))
return!0}s.a=null
return!1},
gB:function(a){return H.U(this).Q[1].a(this.a)}}
H.cX.prototype={
gl:function(a){return J.aM(this.a)},
I:function(a,b){return this.b.$1(J.hM(this.a,b))}}
H.aZ.prototype={
gP:function(a){return new H.fD(J.aE(this.a),this.b)}}
H.fD.prototype={
u:function(){var s,r
for(s=this.a,r=this.b;s.u();)if(r.$1(s.gB(s)))return!0
return!1},
gB:function(a){var s=this.a
return s.gB(s)}}
H.cF.prototype={}
H.fw.prototype={
m:function(a,b,c){throw H.c(P.C("Cannot modify an unmodifiable list"))}}
H.cb.prototype={}
H.cy.prototype={
i:function(a){return P.l3(this)},
m:function(a,b,c){H.nH()},
$iI:1}
H.cz.prototype={
gl:function(a){return this.a},
c8:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.c8(0,b))return null
return this.cT(b)},
cT:function(a){return this.b[a]},
E:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.cT(q))}}}
H.jj.prototype={
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
H.d6.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.ex.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.fv.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.iU.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.hi.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bw.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.n4(r==null?"unknown":r)+"'"},
$icH:1,
gil:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ff.prototype={}
H.f8.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.n4(s)+"'"}}
H.bQ.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bQ))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gF:function(a){var s,r=this.c
if(r==null)s=H.d7(this.a)
else s=typeof r!=="object"?J.kS(r):H.d7(r)
return(s^H.d7(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.x(this.d)+"' of "+("Instance of '"+H.d8(s)+"'")}}
H.f1.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.X.prototype={
gl:function(a){return this.a},
gbx:function(a){return this.a===0},
ga1:function(a){return new H.cP(this,H.U(this).J("cP<1>"))},
gik:function(a){var s=this,r=H.U(s)
return H.nZ(s.ga1(s),new H.iq(s),r.c,r.Q[1])},
c8:function(a,b){var s=this.b
if(s==null)return!1
return this.eG(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bp(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bp(p,b)
q=r==null?n:r.b
return q}else return o.hM(b)},
hM:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.cU(p,q.dE(a))
r=q.dF(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cM(s==null?q.b=q.bU():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cM(r==null?q.c=q.bU():r,b,c)}else q.hN(b,c)},
hN:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bU()
s=p.dE(a)
r=p.cU(o,s)
if(r==null)p.bZ(o,s,[p.bV(a,b)])
else{q=p.dF(r,a)
if(q>=0)r[q].b=b
else r.push(p.bV(a,b))}},
E:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.aJ(s))
r=r.c}},
cM:function(a,b,c){var s=this.bp(a,b)
if(s==null)this.bZ(a,b,this.bV(b,c))
else s.b=c},
eR:function(){this.r=this.r+1&67108863},
bV:function(a,b){var s,r=this,q=new H.it(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.eR()
return q},
dE:function(a){return J.kS(a)&0x3ffffff},
dF:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.K(a[r].a,b))return r
return-1},
i:function(a){return P.l3(this)},
bp:function(a,b){return a[b]},
cU:function(a,b){return a[b]},
bZ:function(a,b,c){a[b]=c},
eK:function(a,b){delete a[b]},
eG:function(a,b){return this.bp(a,b)!=null},
bU:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bZ(r,s,r)
this.eK(r,s)
return r}}
H.iq.prototype={
$1:function(a){var s=this.a
return H.U(s).Q[1].a(s.h(0,a))},
$S:function(){return H.U(this.a).J("2(1)")}}
H.it.prototype={}
H.cP.prototype={
gl:function(a){return this.a.a},
gP:function(a){var s=this.a,r=new H.eB(s,s.r)
r.c=s.e
return r}}
H.eB.prototype={
gB:function(a){return H.U(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.aJ(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kz.prototype={
$1:function(a){return this.a(a)},
$S:37}
H.kA.prototype={
$2:function(a,b){return this.a(a,b)},
$S:57}
H.kB.prototype={
$1:function(a){return this.a(a)},
$S:49}
H.ew.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$im0:1}
H.d1.prototype={$id1:1}
H.a0.prototype={$ia0:1}
H.c0.prototype={
gl:function(a){return a.length},
$iz:1,
$iA:1}
H.bC.prototype={
h:function(a,b){H.b_(b,a,a.length)
return a[b]},
m:function(a,b,c){H.b_(b,a,a.length)
a[b]=c},
$in:1,
$ij:1,
$ip:1}
H.d2.prototype={
m:function(a,b,c){H.b_(b,a,a.length)
a[b]=c},
$in:1,
$ij:1,
$ip:1}
H.eJ.prototype={
h:function(a,b){H.b_(b,a,a.length)
return a[b]}}
H.eK.prototype={
h:function(a,b){H.b_(b,a,a.length)
return a[b]}}
H.eL.prototype={
h:function(a,b){H.b_(b,a,a.length)
return a[b]}}
H.eM.prototype={
h:function(a,b){H.b_(b,a,a.length)
return a[b]}}
H.eN.prototype={
h:function(a,b){H.b_(b,a,a.length)
return a[b]}}
H.d3.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b_(b,a,a.length)
return a[b]}}
H.bD.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b_(b,a,a.length)
return a[b]},
$ibD:1,
$ic8:1}
H.dG.prototype={}
H.dH.prototype={}
H.dI.prototype={}
H.dJ.prototype={}
H.aA.prototype={
J:function(a){return H.hw(v.typeUniverse,this,a)},
b6:function(a){return H.oS(v.typeUniverse,this,a)}}
H.fV.prototype={}
H.fR.prototype={
i:function(a){return this.a}}
H.dS.prototype={}
P.jM.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:48}
P.jL.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:47}
P.jN.prototype={
$0:function(){this.a.$0()},
$S:13}
P.jO.prototype={
$0:function(){this.a.$0()},
$S:13}
P.dR.prototype={
es:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.co(new P.k4(this,b),0),a)
else throw H.c(P.C("`setTimeout()` not found."))},
eu:function(a,b){if(self.setTimeout!=null)self.setInterval(H.co(new P.k3(this,a,Date.now(),b),0),a)
else throw H.c(P.C("Periodic timer."))},
$ije:1}
P.k4.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:2}
P.k3.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.eh(s,o)}q.c=p
r.d.$1(q)},
$S:13}
P.cj.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.x(this.a)+")"}}
P.bJ.prototype={
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
if(r instanceof P.cj){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aE(s)
if(o instanceof P.bJ){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dO.prototype={
gP:function(a){return new P.bJ(this.a())}}
P.fE.prototype={}
P.c6.prototype={}
P.fa.prototype={}
P.kb.prototype={}
P.kp.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:2}
P.jT.prototype={
ib:function(a){var s,r,q,p=null
try{if(C.f===$.aL){a.$0()
return}P.pO(p,p,this,a)}catch(q){s=H.ak(q)
r=H.lt(q)
P.mL(p,p,this,s,r)}},
ic:function(a,b){var s,r,q,p=null
try{if(C.f===$.aL){a.$1(b)
return}P.pP(p,p,this,a,b)}catch(q){s=H.ak(q)
r=H.lt(q)
P.mL(p,p,this,s,r)}},
ie:function(a,b){return this.ic(a,b,t.A)},
hm:function(a){return new P.jU(this,a)},
dg:function(a,b){return new P.jV(this,a,b)}}
P.jU.prototype={
$0:function(){return this.a.ib(this.b)},
$S:2}
P.jV.prototype={
$1:function(a){return this.a.ie(this.b,a)},
$S:function(){return this.c.J("~(0)")}}
P.dC.prototype={
gP:function(a){var s=new P.dD(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
D:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.eF(b)
return r}},
eF:function(a){var s=this.d
if(s==null)return!1
return this.bR(s[this.bN(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cO(s==null?q.b=P.lb():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cO(r==null?q.c=P.lb():r,b)}else return q.ew(0,b)},
ew:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.lb()
s=q.bN(b)
r=p[s]
if(r==null)p[s]=[q.bM(b)]
else{if(q.bR(r,b)>=0)return!1
r.push(q.bM(b))}return!0},
L:function(a,b){if((b&1073741823)===b)return this.fR(this.c,b)
else return this.fQ(0,b)},
fQ:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bN(b)
r=n[s]
q=o.bR(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.d6(p)
return!0},
cO:function(a,b){if(a[b]!=null)return!1
a[b]=this.bM(b)
return!0},
fR:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.d6(s)
delete a[b]
return!0},
cP:function(){this.r=this.r+1&1073741823},
bM:function(a){var s,r=this,q=new P.jS(a)
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
bN:function(a){return J.kS(a)&1073741823},
bR:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.K(a[r].a,b))return r
return-1}}
P.jS.prototype={}
P.dD.prototype={
gB:function(a){return H.U(this).c.a(this.d)},
u:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.aJ(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cK.prototype={}
P.iu.prototype={
$2:function(a,b){this.a.m(0,this.b.a(a),this.c.a(b))},
$S:10}
P.cR.prototype={$in:1,$ij:1,$ip:1}
P.k.prototype={
gP:function(a){return new H.bc(a,this.gl(a))},
I:function(a,b){return this.h(a,b)},
E:function(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gl(a))throw H.c(P.aJ(a))}},
gbx:function(a){return this.gl(a)===0},
ih:function(a,b){var s,r,q,p,o=this
if(o.gbx(a)){s=J.kZ(0,H.b1(a).J("k.E"))
return s}r=o.h(a,0)
q=P.cT(o.gl(a),r,!0,H.b1(a).J("k.E"))
for(p=1;p<o.gl(a);++p){s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
ig:function(a){return this.ih(a,!0)},
hE:function(a,b,c,d){var s
H.b1(a).J("k.E").a(d)
P.bh(b,c,this.gl(a))
for(s=b;s<c;++s)this.m(a,s,d)},
i:function(a){return P.kY(a,"[","]")}}
P.cV.prototype={}
P.iy.prototype={
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
for(s=J.aE(this.ga1(a)),r=H.b1(a).J("M.V");s.u();){q=s.gB(s)
b.$2(q,r.a(this.h(a,q)))}},
gl:function(a){return J.aM(this.ga1(a))},
i:function(a){return P.l3(a)},
$iI:1}
P.hx.prototype={
m:function(a,b,c){throw H.c(P.C("Cannot modify unmodifiable map"))}}
P.cW.prototype={
h:function(a,b){return J.lB(this.a,b)},
m:function(a,b,c){J.kR(this.a,b,c)},
E:function(a,b){J.e7(this.a,b)},
gl:function(a){return J.aM(this.a)},
i:function(a){return J.cs(this.a)},
$iI:1}
P.cc.prototype={}
P.db.prototype={
ae:function(a,b){var s
for(s=J.aE(b);s.u();)this.n(0,s.gB(s))},
i:function(a){return P.kY(this,"{","}")},
I:function(a,b){var s,r,q,p,o="index"
H.q0(b,o,t.S)
P.m_(b,o)
for(s=P.oC(this,this.r),r=H.U(s).c,q=0;s.u();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.O(b,this,o,null,q))}}
P.dK.prototype={$in:1,$ij:1}
P.dE.prototype={}
P.dV.prototype={}
P.dX.prototype={}
P.jx.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.ak(r)}return null},
$S:16}
P.jw.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.ak(r)}return null},
$S:16}
P.hS.prototype={
hR:function(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a4=P.bh(a3,a4,a2.length)
s=$.nn()
for(r=s.length,q=a3,p=q,o=null,n=-1,m=-1,l=0;q<a4;q=k){k=q+1
j=C.a.C(a2,q)
if(j===37){i=k+2
if(i<=a4){h=H.ky(C.a.C(a2,k))
g=H.ky(C.a.C(a2,k+1))
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
d.a=c+H.az(j)
p=k
continue}}throw H.c(P.a6("Invalid base64 data",a2,q))}if(o!=null){r=o.a+=C.a.t(a2,p,a4)
d=r.length
if(n>=0)P.lE(a2,m,a4,n,l,d)
else{b=C.c.bl(d-1,4)+1
if(b===1)throw H.c(P.a6(a0,a2,a4))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return C.a.b_(a2,a3,a4,r.charCodeAt(0)==0?r:r)}a=a4-a3
if(n>=0)P.lE(a2,m,a4,n,l,a)
else{b=C.c.bl(a,4)
if(b===1)throw H.c(P.a6(a0,a2,a4))
if(b>1)a2=C.a.b_(a2,a4,a4,b===2?"==":"=")}return a2}}
P.hT.prototype={}
P.ee.prototype={}
P.eh.prototype={}
P.i8.prototype={}
P.im.prototype={
i:function(a){return this.a}}
P.il.prototype={
eH:function(a,b,c){var s,r,q,p,o,n,m,l=null
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
P.ju.prototype={
ghD:function(){return C.P}}
P.jy.prototype={
c9:function(a){var s,r,q,p=P.bh(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.k9(r)
if(q.eM(a,0,p)!==p){C.a.U(a,p-1)
q.c3()}return new Uint8Array(r.subarray(0,H.pa(0,q.b,s)))}}
P.k9.prototype={
c3:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
ha:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.c3()
return!1}},
eM:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.U(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.C(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.ha(p,C.a.C(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.c3()}else if(p<=2047){o=l.b
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
P.jv.prototype={
c9:function(a){var s=this.a,r=P.op(s,a,0,null)
if(r!=null)return r
return new P.k8(s).hr(a,0,null,!0)}}
P.k8.prototype={
hr:function(a,b,c,d){var s,r,q,p,o=this,n=P.bh(b,c,J.aM(a))
if(b===n)return""
s=P.p6(a,b,n)
r=o.bO(s,0,n-b,!0)
q=o.b
if((q&1)!==0){p=P.p7(q)
o.b=0
throw H.c(P.a6(p,a,b+o.c))}return r},
bO:function(a,b,c,d){var s,r,q=this
if(c-b>1000){s=C.c.a3(b+c,2)
r=q.bO(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bO(a,s,c,d)}return q.hw(a,b,c,d)},
hw:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.a_(""),f=b+1,e=a.length
if(b<0||b>=e)return H.d(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.C("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.C(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
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
g.a+=H.az(a[l])}else g.a+=P.fc(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.az(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.Y.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.Y&&this.a===b.a&&!0},
ag:function(a,b){return C.c.ag(this.a,b.a)},
gF:function(a){var s=this.a
return(s^C.c.aT(s,30))&1073741823},
i:function(a){var s=this,r=P.nI(H.o9(s)),q=P.ek(H.o7(s)),p=P.ek(H.o3(s)),o=P.ek(H.o4(s)),n=P.ek(H.o6(s)),m=P.ek(H.o8(s)),l=P.nJ(H.o5(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bx.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bx&&this.a===b.a},
gF:function(a){return C.c.gF(this.a)},
ag:function(a,b){return C.c.ag(this.a,b.a)},
i:function(a){var s,r,q,p=new P.i5(),o=this.a
if(o<0)return"-"+new P.bx(0-o).i(0)
s=p.$1(C.c.a3(o,6e7)%60)
r=p.$1(C.c.a3(o,1e6)%60)
q=new P.i4().$1(o%1e6)
return""+C.c.a3(o,36e8)+":"+s+":"+r+"."+q}}
P.i4.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:29}
P.i5.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:29}
P.L.prototype={}
P.ea.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.ib(s)
return"Assertion failed"}}
P.fn.prototype={}
P.eO.prototype={
i:function(a){return"Throw of null."}}
P.aF.prototype={
gbQ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbP:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbQ()+o+m
if(!q.a)return l
s=q.gbP()
r=P.ib(q.b)
return l+s+": "+r}}
P.d9.prototype={
gbQ:function(){return"RangeError"},
gbP:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.x(q):""
else if(q==null)s=": Not greater than or equal to "+H.x(r)
else if(q>r)s=": Not in inclusive range "+H.x(r)+".."+H.x(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.x(r)
return s}}
P.es.prototype={
gbQ:function(){return"RangeError"},
gbP:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl:function(a){return this.f}}
P.fx.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fu.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.c5.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ef.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ib(s)+"."}}
P.eR.prototype={
i:function(a){return"Out of Memory"},
$iL:1}
P.df.prototype={
i:function(a){return"Stack Overflow"},
$iL:1}
P.ei.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.fS.prototype={
i:function(a){return"Exception: "+this.a}}
P.ii.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.t(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.C(d,o)
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
bG:function(a,b){return new H.aZ(this,b,H.U(this).J("aZ<j.E>"))},
gl:function(a){var s,r=this.gP(this)
for(s=0;r.u();)++s
return s},
gaL:function(a){var s,r=this.gP(this)
if(!r.u())throw H.c(H.io())
s=r.gB(r)
if(r.u())throw H.c(H.nQ())
return s},
I:function(a,b){var s,r,q
P.m_(b,"index")
for(s=this.gP(this),r=0;s.u();){q=s.gB(s)
if(b===r)return q;++r}throw H.c(P.O(b,this,"index",null,r))},
i:function(a){return P.nP(this,"(",")")}}
P.et.prototype={}
P.ag.prototype={
gF:function(a){return P.P.prototype.gF.call(C.U,this)},
i:function(a){return"null"}}
P.P.prototype={constructor:P.P,$iP:1,
q:function(a,b){return this===b},
gF:function(a){return H.d7(this)},
i:function(a){return"Instance of '"+H.d8(this)+"'"},
toString:function(){return this.i(this)}}
P.a_.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.js.prototype={
$2:function(a,b){var s,r,q,p=C.a.dD(b,"=")
if(p===-1){if(b!=="")J.kR(a,P.lk(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.t(b,0,p)
r=C.a.a9(b,p+1)
q=this.a
J.kR(a,P.lk(s,0,s.length,q,!0),P.lk(r,0,r.length,q,!0))}return a},
$S:44}
P.jp.prototype={
$2:function(a,b){throw H.c(P.a6("Illegal IPv4 address, "+a,this.a,b))},
$S:43}
P.jq.prototype={
$2:function(a,b){throw H.c(P.a6("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:42}
P.jr.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.kC(C.a.t(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:41}
P.bK.prototype={
gc2:function(){var s,r,q,p=this,o=p.x
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
else o=H.h(H.l2("_text"))}return o},
gF:function(a){var s=this,r=s.z
if(r==null){r=C.a.gF(s.gc2())
if(s.z==null)s.z=r
else r=H.h(H.l2("hashCode"))}return r},
gcs:function(){var s=this,r=s.Q
if(r==null){r=s.f
r=new P.cc(P.me(r==null?"":r),t.dw)
if(s.Q==null)s.Q=r
else r=H.h(H.l2("queryParameters"))}return r},
ge6:function(){return this.b},
gcn:function(a){var s=this.c
if(s==null)return""
if(C.a.Z(s,"["))return C.a.t(s,1,s.length-1)
return s},
gbB:function(a){var s=this.d
return s==null?P.mz(this.a):s},
gcr:function(a){var s=this.f
return s==null?"":s},
gdw:function(){var s=this.r
return s==null?"":s},
e0:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.Z(s,"/"))s="/"+s
q=s
p=P.li(null,0,0,b)
return new P.bK(n,l,j,k,q,p,o.r)},
gdz:function(){return this.c!=null},
gdC:function(){return this.f!=null},
gdA:function(){return this.r!=null},
i:function(a){return this.gc2()},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.dD.b(b))if(q.a===b.gbH())if(q.c!=null===b.gdz())if(q.b===b.ge6())if(q.gcn(q)===b.gcn(b))if(q.gbB(q)===b.gbB(b))if(q.e===b.gdX(b)){s=q.f
r=s==null
if(!r===b.gdC()){if(r)s=""
if(s===b.gcr(b)){s=q.r
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
$ify:1,
gbH:function(){return this.a},
gdX:function(a){return this.e}}
P.k6.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=P.k7(C.h,a,C.e,!0)
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=P.k7(C.h,b,C.e,!0)}},
$S:40}
P.k5.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.aE(b),r=this.a;s.u();)r.$2(a,s.gB(s))},
$S:5}
P.jo.prototype={
ge5:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.d(m,0)
s=o.a
m=m[0]+1
r=C.a.bw(s,"?",m)
q=s.length
if(r>=0){p=P.dW(s,r+1,q,C.j,!1)
q=r}else p=n
m=o.c=new P.fK("data","",n,n,P.dW(s,m,q,C.y,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.ki.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.d(s,a)
s=s[a]
C.a_.hE(s,0,96,b)
return s},
$S:39}
P.kj.prototype={
$3:function(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=C.a.C(b,r)^96
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:23}
P.kk.prototype={
$3:function(a,b,c){var s,r,q
for(s=C.a.C(b,0),r=C.a.C(b,1);s<=r;++s){q=(s^96)>>>0
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:23}
P.hc.prototype={
gdz:function(){return this.c>0},
gdB:function(){return this.c>0&&this.d+1<this.e},
gdC:function(){return this.f<this.r},
gdA:function(){return this.r<this.a.length},
gbH:function(){var s=this.x
return s==null?this.x=this.eE():s},
eE:function(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&C.a.Z(r.a,"http"))return"http"
if(q===5&&C.a.Z(r.a,"https"))return"https"
if(s&&C.a.Z(r.a,"file"))return"file"
if(q===7&&C.a.Z(r.a,"package"))return"package"
return C.a.t(r.a,0,q)},
ge6:function(){var s=this.c,r=this.b+3
return s>r?C.a.t(this.a,r,s-1):""},
gcn:function(a){var s=this.c
return s>0?C.a.t(this.a,s,this.d):""},
gbB:function(a){var s,r=this
if(r.gdB())return P.kC(C.a.t(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&C.a.Z(r.a,"http"))return 80
if(s===5&&C.a.Z(r.a,"https"))return 443
return 0},
gdX:function(a){return C.a.t(this.a,this.e,this.f)},
gcr:function(a){var s=this.f,r=this.r
return s<r?C.a.t(this.a,s+1,r):""},
gdw:function(){var s=this.r,r=this.a
return s<r.length?C.a.a9(r,s+1):""},
gcs:function(){var s=this
if(s.f>=s.r)return C.Z
return new P.cc(P.me(s.gcr(s)),t.dw)},
e0:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbH(),k=l==="file",j=n.c,i=j>0?C.a.t(n.a,n.b+3,j):"",h=n.gdB()?n.gbB(n):m
j=n.c
if(j>0)s=C.a.t(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.t(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.Z(r,"/"))r="/"+r
p=P.li(m,0,0,b)
q=n.r
o=q<j.length?C.a.a9(j,q+1):m
return new P.bK(l,i,s,h,r,p,o)},
gF:function(a){var s=this.y
return s==null?this.y=C.a.gF(this.a):s},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.dD.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ify:1}
P.fK.prototype={}
W.v.prototype={}
W.hN.prototype={
gl:function(a){return a.length}}
W.e8.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.e9.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bP.prototype={$ibP:1}
W.bt.prototype={$ibt:1}
W.bu.prototype={$ibu:1}
W.bv.prototype={
e9:function(a,b,c){var s=a.getContext(b,P.mQ(c))
return s},
$ibv:1}
W.aG.prototype={
gl:function(a){return a.length}}
W.hY.prototype={
gl:function(a){return a.length}}
W.J.prototype={$iJ:1}
W.cA.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.hZ.prototype={}
W.as.prototype={}
W.aQ.prototype={}
W.i_.prototype={
gl:function(a){return a.length}}
W.i0.prototype={
gl:function(a){return a.length}}
W.i1.prototype={
gl:function(a){return a.length}}
W.b6.prototype={$ib6:1}
W.i2.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cB.prototype={
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
$iA:1,
$ij:1,
$ip:1}
W.cC.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.x(r)+", "
s=a.top
s.toString
return r+H.x(s)+") "+H.x(this.gaK(a))+" x "+H.x(this.gaH(a))},
q:function(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=J.b0(b)
if(s===r.gbA(b)){s=a.top
s.toString
s=s===r.gbD(b)&&this.gaK(a)===r.gaK(b)&&this.gaH(a)===r.gaH(b)}else s=!1}else s=!1
return s},
gF:function(a){var s,r=a.left
r.toString
r=C.d.gF(r)
s=a.top
s.toString
return W.mq(r,C.d.gF(s),C.d.gF(this.gaK(a)),C.d.gF(this.gaH(a)))},
gdh:function(a){var s=a.bottom
s.toString
return s},
gcV:function(a){return a.height},
gaH:function(a){var s=this.gcV(a)
s.toString
return s},
gbA:function(a){var s=a.left
s.toString
return s},
gcw:function(a){var s=a.right
s.toString
return s},
gbD:function(a){var s=a.top
s.toString
return s},
gd8:function(a){return a.width},
gaK:function(a){var s=this.gd8(a)
s.toString
return s},
$ia8:1}
W.el.prototype={
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
$iA:1,
$ij:1,
$ip:1}
W.i3.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.fH.prototype={
gbx:function(a){return this.a.firstElementChild==null},
gl:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b]).toString},
n:function(a,b){this.a.appendChild(b).toString
return b},
gP:function(a){var s=this.ig(this)
return new J.ae(s,s.length)}}
W.E.prototype={
gaf:function(a){return new W.fP(a)},
gbs:function(a){var s=a.children
s.toString
return new W.fH(a,s)},
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
return new P.a8(p,s,r,q,t.I)},
i:function(a){var s=a.localName
s.toString
return s},
ah:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.lM
if(s==null){s=H.b([],t.Q)
r=new W.d5(s)
s.push(W.mp(null))
s.push(W.mu())
$.lM=r
d=r}else d=s
s=$.lL
if(s==null){s=new W.hy(d)
$.lL=s
c=s}else{s.a=d
c=s}}if($.b7==null){s=document
r=s.implementation.createHTMLDocument("")
r.toString
$.b7=r
r=r.createRange()
r.toString
$.kU=r
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
s=!C.b.D(C.X,s)}else s=!1
if(s){$.kU.selectNodeContents(q)
s=$.kU
s=s.createContextualFragment(b)
s.toString
p=s}else{q.innerHTML=b
s=$.b7.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.b7.body)J.lC(q)
c.cB(p)
document.adoptNode(p).toString
return p},
hu:function(a,b,c){return this.ah(a,b,c,null)},
ea:function(a,b){var s
a.textContent=null
s=a.appendChild(this.ah(a,b,null,null))
s.toString},
ge2:function(a){var s=a.tagName
s.toString
return s},
$iE:1}
W.i6.prototype={
$1:function(a){return t.h.b(a)},
$S:28}
W.m.prototype={$im:1}
W.e.prototype={
hc:function(a,b,c,d){if(c!=null)this.ey(a,b,c,!1)},
ey:function(a,b,c,d){return a.addEventListener(b,H.co(c,1),!1)},
$ie:1}
W.af.prototype={$iaf:1}
W.bU.prototype={
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
$iA:1,
$ij:1,
$ip:1,
$ibU:1}
W.en.prototype={
gl:function(a){return a.length}}
W.ep.prototype={
gl:function(a){return a.length}}
W.au.prototype={$iau:1}
W.ik.prototype={
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
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iz:1,
$in:1,
$iA:1,
$ij:1,
$ip:1}
W.cJ.prototype={$icJ:1}
W.bX.prototype={$ibX:1}
W.bA.prototype={$ibA:1}
W.iw.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.iN.prototype={
gl:function(a){return a.length}}
W.bZ.prototype={$ibZ:1}
W.eG.prototype={
h:function(a,b){return P.bo(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bo(s.value[1]))}},
ga1:function(a){var s=H.b([],t.s)
this.E(a,new W.iO(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iI:1}
W.iO.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.eH.prototype={
h:function(a,b){return P.bo(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bo(s.value[1]))}},
ga1:function(a){var s=H.b([],t.s)
this.E(a,new W.iP(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iI:1}
W.iP.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.aw.prototype={$iaw:1}
W.eI.prototype={
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
$iA:1,
$ij:1,
$ip:1}
W.am.prototype={$iam:1}
W.a4.prototype={
gaL:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.l5("No elements"))
if(r>1)throw H.c(P.l5("More than one element"))
s=s.firstChild
s.toString
return s},
ae:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q).toString}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b]).toString},
gP:function(a){var s=this.a.childNodes
return new W.cG(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.t.prototype={
i5:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a).toString},
i9:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.nr(s,b,a)}catch(q){H.ak(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.ed(a):s},
fT:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$it:1}
W.d4.prototype={
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
$iA:1,
$ij:1,
$ip:1}
W.ax.prototype={
gl:function(a){return a.length},
$iax:1}
W.eV.prototype={
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
$iA:1,
$ij:1,
$ip:1}
W.f0.prototype={
h:function(a,b){return P.bo(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bo(s.value[1]))}},
ga1:function(a){var s=H.b([],t.s)
this.E(a,new W.j1(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iI:1}
W.j1.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.f2.prototype={
gl:function(a){return a.length}}
W.an.prototype={$ian:1}
W.f4.prototype={
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
$iA:1,
$ij:1,
$ip:1}
W.aB.prototype={$iaB:1}
W.f5.prototype={
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
$iA:1,
$ij:1,
$ip:1}
W.aC.prototype={
gl:function(a){return a.length},
$iaC:1}
W.f9.prototype={
h:function(a,b){return a.getItem(H.kf(b))},
m:function(a,b,c){a.setItem(b,c)},
E:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga1:function(a){var s=H.b([],t.s)
this.E(a,new W.j9(s))
return s},
gl:function(a){var s=a.length
s.toString
return s},
$iI:1}
W.j9.prototype={
$2:function(a,b){return this.a.push(a)},
$S:35}
W.ai.prototype={$iai:1}
W.bj.prototype={$ibj:1}
W.dg.prototype={
ah:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bJ(a,b,c,d)
s=W.nL("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new W.a4(r).ae(0,new W.a4(s))
return r}}
W.fd.prototype={
ah:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bJ(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a4(C.C.ah(r,b,c,d))
r=new W.a4(r.gaL(r))
new W.a4(s).ae(0,new W.a4(r.gaL(r)))
return s}}
W.fe.prototype={
ah:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bJ(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a4(C.C.ah(r,b,c,d))
new W.a4(s).ae(0,new W.a4(r.gaL(r)))
return s}}
W.c7.prototype={$ic7:1}
W.ao.prototype={$iao:1}
W.ad.prototype={$iad:1}
W.fg.prototype={
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
$iA:1,
$ij:1,
$ip:1}
W.fh.prototype={
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
$iA:1,
$ij:1,
$ip:1}
W.jd.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.ap.prototype={$iap:1}
W.bG.prototype={$ibG:1}
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
$iA:1,
$ij:1,
$ip:1}
W.ji.prototype={
gl:function(a){return a.length}}
W.aY.prototype={}
W.jt.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.fB.prototype={
gl:function(a){return a.length}}
W.bk.prototype={
ghy:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.C("deltaY is not supported"))},
ghx:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.C("deltaX is not supported"))},
$ibk:1}
W.cg.prototype={
fU:function(a,b){var s=a.requestAnimationFrame(H.co(b,1))
s.toString
return s},
eL:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ch.prototype={$ich:1}
W.fI.prototype={
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
$iA:1,
$ij:1,
$ip:1}
W.dz.prototype={
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
r=J.b0(b)
if(s===r.gbA(b)){s=a.top
s.toString
if(s===r.gbD(b)){s=a.width
s.toString
if(s===r.gaK(b)){s=a.height
s.toString
r=s===r.gaH(b)
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
return W.mq(p,s,r,C.d.gF(q))},
gcV:function(a){return a.height},
gaH:function(a){var s=a.height
s.toString
return s},
gd8:function(a){return a.width},
gaK:function(a){var s=a.width
s.toString
return s}}
W.fW.prototype={
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
$iA:1,
$ij:1,
$ip:1}
W.dF.prototype={
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
$iA:1,
$ij:1,
$ip:1}
W.hf.prototype={
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
$iA:1,
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
$iA:1,
$ij:1,
$ip:1}
W.fF.prototype={
E:function(a,b){var s,r,q,p,o
for(s=this.ga1(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
b.$2(o,H.kf(q.getAttribute(o)))}},
ga1:function(a){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=H.b([],t.s)
for(r=m.length,q=t.h9,p=0;p<r;++p){if(p>=m.length)return H.d(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
s.push(n)}}return s}}
W.fP.prototype={
h:function(a,b){return this.a.getAttribute(H.kf(b))},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga1(this).length}}
W.kW.prototype={}
W.dA.prototype={
h9:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.ns(s,this.c,r,!1)}}}
W.jP.prototype={
$1:function(a){return this.a.$1(a)},
$S:3}
W.la.prototype={}
W.ci.prototype={
el:function(a){var s
if($.dB.gbx($.dB)){for(s=0;s<262;++s)$.dB.m(0,C.W[s],W.q8())
for(s=0;s<12;++s)$.dB.m(0,C.n[s],W.q9())}},
aU:function(a){return $.no().D(0,W.cE(a))},
av:function(a,b,c){var s=$.dB.h(0,W.cE(a)+"::"+b)
if(s==null)s=$.dB.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iaK:1}
W.N.prototype={
gP:function(a){return new W.cG(a,this.gl(a))}}
W.d5.prototype={
aU:function(a){return C.b.de(this.a,new W.iS(a))},
av:function(a,b,c){return C.b.de(this.a,new W.iR(a,b,c))},
$iaK:1}
W.iS.prototype={
$1:function(a){return a.aU(this.a)},
$S:25}
W.iR.prototype={
$1:function(a){return a.av(this.a,this.b,this.c)},
$S:25}
W.dL.prototype={
eq:function(a,b,c,d){var s,r,q
this.a.ae(0,c)
s=b.bG(0,new W.jX())
r=b.bG(0,new W.jY())
this.b.ae(0,s)
q=this.c
q.ae(0,C.v)
q.ae(0,r)},
aU:function(a){return this.a.D(0,W.cE(a))},
av:function(a,b,c){var s=this,r=W.cE(a),q=s.c
if(q.D(0,r+"::"+b))return s.d.hg(c)
else if(q.D(0,"*::"+b))return s.d.hg(c)
else{q=s.b
if(q.D(0,r+"::"+b))return!0
else if(q.D(0,"*::"+b))return!0
else if(q.D(0,r+"::*"))return!0
else if(q.D(0,"*::*"))return!0}return!1},
$iaK:1}
W.jX.prototype={
$1:function(a){return!C.b.D(C.n,a)},
$S:26}
W.jY.prototype={
$1:function(a){return C.b.D(C.n,a)},
$S:26}
W.ho.prototype={
av:function(a,b,c){if(this.eg(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.D(0,b)
return!1}}
W.k2.prototype={
$1:function(a){return"TEMPLATE::"+a},
$S:34}
W.hn.prototype={
aU:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cE(a)==="foreignObject")return!1
if(s)return!0
return!1},
av:function(a,b,c){if(b==="is"||C.a.Z(b,"on"))return!1
return this.aU(a)},
$iaK:1}
W.cG.prototype={
u:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.lB(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gB:function(a){return H.U(this).c.a(this.d)}}
W.jW.prototype={}
W.hy.prototype={
cB:function(a){var s,r=new W.ka(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
ba:function(a,b){++this.b
if(b==null||b!==a.parentNode)J.lC(a)
else b.removeChild(a).toString},
fX:function(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
try{k=J.nu(a)
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
try{r=J.cs(a)}catch(n){H.ak(n)}try{q=W.cE(a)
this.fW(a,b,l,r,q,k,j)}catch(n){if(H.ak(n) instanceof P.aF)throw n
else{this.ba(a,b)
p=window
p.toString
p="Removing corrupted element "+H.x(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(p)}}},
fW:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.ba(a,b)
window.toString
s="Removing element due to corrupted attributes on <"+d+">"
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(!m.a.aU(a)){m.ba(a,b)
window.toString
s="Removing disallowed element <"+e+"> from "+H.x(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(g!=null)if(!m.a.av(a,"is",g)){m.ba(a,b)
window.toString
s="Removing disallowed type extension <"+e+' is="'+g+'">'
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}s=f.ga1(f)
q=H.b(s.slice(0),H.kd(s))
for(p=f.ga1(f).length-1,s=f.a;p>=0;--p){if(p>=q.length)return H.d(q,p)
o=q[p]
r=m.a
n=J.nx(o)
H.kf(o)
if(!r.av(a,n,s.getAttribute(o))){window.toString
r="Removing disallowed attribute <"+e+" "+o+'="'+H.x(s.getAttribute(o))+'">'
n=typeof console!="undefined"
n.toString
if(n)window.console.warn(r)
s.removeAttribute(o)}}if(t.aW.b(a)){s=a.content
s.toString
m.cB(s)}}}
W.ka.prototype={
$2:function(a,b){var s,r,q,p,o=this.a,n=a.nodeType
n.toString
switch(n){case 1:o.fX(a,b)
break
case 8:case 11:case 3:case 4:break
default:o.ba(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){n=r.nextSibling
q=s
q=n==null?q!=null:n!==q
n=q}else n=!1
if(n){n=P.l5("Corrupt HTML")
throw H.c(n)}}catch(p){H.ak(p)
n=s;++o.b
q=n.parentNode
if(a!==q){if(q!=null)q.removeChild(n).toString}else a.removeChild(n).toString
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:33}
W.fJ.prototype={}
W.fL.prototype={}
W.fM.prototype={}
W.fN.prototype={}
W.fO.prototype={}
W.fT.prototype={}
W.fU.prototype={}
W.fX.prototype={}
W.fY.prototype={}
W.h0.prototype={}
W.h1.prototype={}
W.h2.prototype={}
W.h3.prototype={}
W.h4.prototype={}
W.h5.prototype={}
W.h8.prototype={}
W.h9.prototype={}
W.hb.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.hd.prototype={}
W.he.prototype={}
W.hj.prototype={}
W.hp.prototype={}
W.hq.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.hr.prototype={}
W.hs.prototype={}
W.hz.prototype={}
W.hA.prototype={}
W.hB.prototype={}
W.hC.prototype={}
W.hD.prototype={}
W.hE.prototype={}
W.hF.prototype={}
W.hG.prototype={}
W.hH.prototype={}
W.hI.prototype={}
P.jZ.prototype={
cl:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bF:function(a){var s,r,q,p,o,n=this,m={}
if(a==null)return a
if(H.kl(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.Y)return new Date(a.a)
if(t.fJ.b(a))throw H.c(P.jn("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.fK.b(a))return a
if(t.bX.b(a))return a
if(t.gb.b(a))return a
if(t.bZ.b(a)||t.dE.b(a)||t.bK.b(a))return a
if(t.f.b(a)){s=n.cl(a)
r=n.b
q=r.length
if(s>=q)return H.d(r,s)
p=m.a=r[s]
if(p!=null)return p
p={}
m.a=p
if(s>=q)return H.d(r,s)
r[s]=p
J.e7(a,new P.k0(m,n))
return m.a}if(t.r.b(a)){s=n.cl(a)
m=n.b
if(s>=m.length)return H.d(m,s)
p=m[s]
if(p!=null)return p
return n.ht(a,s)}if(t.eH.b(a)){s=n.cl(a)
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
n.hK(a,new P.k1(m,n))
return m.b}throw H.c(P.jn("structured clone of other type"))},
ht:function(a,b){var s,r,q=J.bL(a),p=q.gl(a),o=new Array(p)
o.toString
s=this.b
if(b>=s.length)return H.d(s,b)
s[b]=o
for(r=0;r<p;++r){s=this.bF(q.h(a,r))
if(r>=o.length)return H.d(o,r)
o[r]=s}return o}}
P.k0.prototype={
$2:function(a,b){this.a.a[a]=this.b.bF(b)},
$S:10}
P.k1.prototype={
$2:function(a,b){this.a.b[a]=this.b.bF(b)},
$S:31}
P.kg.prototype={
$1:function(a){this.a.push(P.mH(a))},
$S:30}
P.kq.prototype={
$2:function(a,b){this.a[a]=P.mH(b)},
$S:10}
P.k_.prototype={
hK:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
b.$2(p,a[p])}}}
P.eo.prototype={
gb8:function(){var s=this.b,r=H.U(s)
return new H.aT(new H.aZ(s,new P.ig(),r.J("aZ<k.E>")),new P.ih(),r.J("aT<k.E,E>"))},
E:function(a,b){C.b.E(P.iv(this.gb8(),!1,t.h),b)},
m:function(a,b,c){var s=this.gb8()
J.nw(s.b.$1(J.hM(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b).toString},
gl:function(a){return J.aM(this.gb8().a)},
h:function(a,b){var s=this.gb8()
return s.b.$1(J.hM(s.a,b))},
gP:function(a){var s=P.iv(this.gb8(),!1,t.h)
return new J.ae(s,s.length)}}
P.ig.prototype={
$1:function(a){return t.h.b(a)},
$S:28}
P.ih.prototype={
$1:function(a){return t.h.a(a)},
$S:59}
P.ha.prototype={
gcw:function(a){return this.$ti.c.a(this.a+this.c)},
gdh:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
q:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.I.b(b)){s=o.a
r=J.b0(b)
if(s===r.gbA(b)){q=o.b
if(q===r.gbD(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gcw(b)&&p.a(q+o.d)===r.gdh(b)}else s=!1}else s=!1}else s=!1
return s},
gF:function(a){var s=this,r=s.a,q=C.c.gF(r),p=s.b,o=C.c.gF(p),n=s.$ti.c
r=C.c.gF(n.a(r+s.c))
p=C.c.gF(n.a(p+s.d))
return H.ok(H.ja(H.ja(H.ja(H.ja(0,q),o),r),p))}}
P.a8.prototype={
gbA:function(a){return this.a},
gbD:function(a){return this.b},
gaK:function(a){return this.c},
gaH:function(a){return this.d}}
P.aS.prototype={$iaS:1}
P.ez.prototype={
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
P.aV.prototype={$iaV:1}
P.eP.prototype={
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
P.iV.prototype={
gl:function(a){return a.length}}
P.c3.prototype={$ic3:1}
P.fb.prototype={
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
gbs:function(a){return new P.eo(a,new W.a4(a))},
ah:function(a,b,c,d){var s,r,q,p,o=H.b([],t.Q)
o.push(W.mp(null))
o.push(W.mu())
o.push(new W.hn())
c=new W.hy(new W.d5(o))
s='<svg version="1.1">'+b+"</svg>"
o=document
r=o.body
r.toString
q=C.p.hu(r,s,c)
o=o.createDocumentFragment()
o.toString
r=new W.a4(q)
p=r.gaL(r)
for(;r=p.firstChild,r!=null;)o.appendChild(r).toString
return o},
$io:1}
P.aW.prototype={$iaW:1}
P.fm.prototype={
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
P.fZ.prototype={}
P.h_.prototype={}
P.h6.prototype={}
P.h7.prototype={}
P.hk.prototype={}
P.hl.prototype={}
P.ht.prototype={}
P.hu.prototype={}
P.hQ.prototype={
gl:function(a){return a.length}}
P.ec.prototype={
h:function(a,b){return P.bo(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bo(s.value[1]))}},
ga1:function(a){var s=H.b([],t.s)
this.E(a,new P.hR(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iI:1}
P.hR.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
P.ed.prototype={
gl:function(a){return a.length}}
P.b4.prototype={}
P.eQ.prototype={
gl:function(a){return a.length}}
P.fG.prototype={}
P.da.prototype={$ida:1}
P.f6.prototype={
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
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$in:1,
$ij:1,
$ip:1}
P.hg.prototype={}
P.hh.prototype={}
K.aN.prototype={
aI:function(a,b){return!0},
i:function(a){return"all"},
$iaU:1}
K.cI.prototype={
aI:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)if(s[q].aI(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q},
$iaU:1}
K.ac.prototype={
aI:function(a,b){return!this.ec(0,b)},
i:function(a){return"!["+this.bK(0)+"]"}}
K.eY.prototype={
aI:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var s=H.az(this.a),r=H.az(this.b)
return s+".."+r},
$iaU:1}
K.u.prototype={
p:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.f("May not create a Set with zero characters."))
s=new H.X(t.fX)
for(r=new H.bc(a,a.gl(a)),q=H.U(r).c;r.u();)s.m(0,q.a(r.d),!0)
p=P.iv(s.ga1(s),!0,t.S)
C.b.eb(p)
this.a=p},
aI:function(a,b){return C.b.D(this.a,b)},
i:function(a){return P.fc(this.a,0,null)},
$iaU:1}
L.f7.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.dj(this.a.k(0,b),H.b([],t.z))
s.push(p)
return p},
hF:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.aI(0,a))return p}return null},
i:function(a){return this.b},
d5:function(){var s,r,q,p,o,n,m=this,l=""+("("+m.b+")"),k=m.d
if(k!=null){l+=" => ["+k.b+"]"
k=m.a.c
s=m.d
if(k.D(0,s==null?null:s.b))l+=" (consume)"
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
if(k.D(0,p))l+=" (consume)"}}for(k=m.c,s=k.length,o=0;o<k.length;k.length===s||(0,H.q)(k),++o){n=k[o]
l+="\n"
l+="  -- "+(n.b.b+": "+n.bK(0))}return l.charCodeAt(0)==0?l:l}}
L.fj.prototype={
i:function(a){var s=H.lx(this.b,"\n","\\n"),r=H.lx(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fk.prototype={
aJ:function(a,b,c){var s,r,q
for(s=c.length,r=this.c,q=0;q<c.length;c.length===s||(0,H.q)(c),++q)r.m(0,c[q],b)},
i:function(a){return this.b}}
L.jf.prototype={
k:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.f7(this,b,H.b([],t.ab))
s.m(0,b,r)}return r},
O:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.fk(a,P.T(s,s))
r.m(0,a,q)}return q},
cA:function(a){return this.ij(a)},
ij:function(a){var s=this
return P.pr(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2
return function $async$cA(a3,a4){if(a3===1){o=a4
q=p}while(true)switch(q){case 0:c=s.d
b=t.t
a0=H.b([],b)
a1=H.b([],b)
a2=H.b([],b)
n=H.U(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a2.length!==0)h=C.b.ct(a2,0)
else{if(!r.u()){q=3
break}h=n.a(r.d)}a1.push(h);++k
g=c==null
f=g?null:c.hF(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.fc(a1,0,null)
throw H.c(P.f("Untokenizable string [state: "+H.x(g?null:c.b)+", index "+k+']: "'+e+'"'))}if(!!a1.fixed$length)H.h(P.C("removeRange"))
P.bh(0,i,a1.length)
a1.splice(0,i-0)
C.b.ae(a2,a1)
a1=H.b([],b)
a0=H.b([],b)
c=s.d
q=!m.D(0,l.a)?7:8
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
if(g!=null){e=P.fc(a0,0,null)
g=c.d
if(g==null)l=null
else{d=g.c.h(0,e)
g=new L.fj(d==null?g.b:d,e,k)
l=g}i=a1.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.D(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.oA()
case 1:return P.oB(o)}}},t.bJ)},
i:function(a){var s,r=new P.a_(""),q=this.d
if(q!=null)r.a=""+(q.d5()+"\n")
for(q=this.a,q=q.gik(q),q=q.gP(q);q.u();){s=q.gB(q)
if(s!=this.d)r.a+=H.x(s==null?null:s.d5())+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.dj.prototype={
i:function(a){return this.b.b+": "+this.bK(0)}}
O.al.prototype={
cC:function(a,b,c){this.b=b
this.c=a},
bm:function(a,b){return this.cC(a,null,b)},
fD:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
eY:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gl:function(a){return this.a.length},
gP:function(a){var s=this.a
return new J.ae(s,s.length)},
I:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.U(q).J("w<al.T>")
if(q.fD(H.b([b],p))){s=q.a
r=s.length
s.push(b)
q.eY(r,H.b([b],p))}},
$ij:1}
O.d0.prototype={
gl:function(a){return this.a.length},
gv:function(){var s=this.b
return s==null?this.b=D.W():s},
aO:function(){var s=this.b
return s==null?null:s.K(null)},
ga2:function(a){var s=this.a
if(s.length>0)return C.b.gay(s)
else return V.bB()},
dZ:function(a){this.a.push(a)
this.aO()},
cq:function(){var s=this.a
if(s.length>0){s.pop()
this.aO()}}}
E.hU.prototype={}
E.by.prototype={
cN:function(){var s,r,q
this.e=null
for(s=this.y.a,s=new J.ae(s,s.length),r=H.U(s).c;s.u();){q=r.a(s.d)
if(q.f==null)q.cN()}},
sac:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().L(0,s.gdS())
if(b!=null)b.gv().n(0,s.gdS())
s.ao(new D.G("shape",r,b))}},
sbk:function(a){var s=this,r=s.f
if(r!=a){s.f=a
if(r!=null)r.gv().L(0,s.gdU())
if(a!=null)a.gv().n(0,s.gdU())
s.cN()
s.ao(new D.G("technique",r,a))}},
saY:function(a){var s,r,q=this
if(!J.K(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gv().L(0,q.gdQ())
if(a!=null)a.gv().n(0,q.gdQ())
r=q.r
q.ao(new D.G("mover",s,r))}},
az:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.b3(0,b,q)
if(!J.K(o,q.x)){s=q.x
q.x=o
q.ao(new D.G("matrix",s,o))}p=q.f
if(p!=null)p.az(0,b)
for(p=q.y.a,p=new J.ae(p,p.length),r=H.U(p).c;p.u();)r.a(p.d).az(0,b)},
aZ:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.ga2(q))
else o.push(p.M(0,q.ga2(q)))
q.aO()
a.e_(r.f)
s=C.b.gay(a.dy)
if(r.d!=null)if(s!=null)s.i8(a,r)
for(p=r.y.a,p=new J.ae(p,p.length),o=H.U(p).c;p.u();)o.a(p.d).aZ(a)
a.dY()
q.cq()},
ao:function(a){var s=this.z
return s==null?null:s.K(a)},
Y:function(){return this.ao(null)},
dT:function(a){this.e=null
this.ao(a)},
hY:function(){return this.dT(null)},
dV:function(a){return this.ao(a)},
hZ:function(){return this.dV(null)},
dR:function(a){return this.ao(a)},
hX:function(){return this.dR(null)},
dP:function(a){return this.ao(a)},
hU:function(){return this.dP(null)},
hT:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gdO(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bT()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.Y()},
hW:function(a,b){var s,r
for(s=b.gP(b),r=this.gdO();s.u();)s.gB(s).gv().L(0,r)
this.Y()},
i:function(a){return"Unnamed entity"}}
E.bR.prototype={
i:function(a){return this.b}}
E.c1.prototype={
i:function(a){return this.b}}
E.fQ.prototype={}
E.iY.prototype={
ek:function(a,b){var s=this
s.cy.gv().n(0,new E.iZ(s))
s.db.gv().n(0,new E.j_(s))
s.dx.gv().n(0,new E.j0(s))},
gi4:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.ga2(q).M(0,s.ga2(s))
q=s}return q},
e_:function(a){var s=this.dy
return s.push(a==null?C.b.gay(s):a)},
dY:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.iZ.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:1}
E.j_.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:1}
E.j0.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:1}
E.fi.prototype={
cJ:function(a){this.e1()},
cI:function(){return this.cJ(null)},
ghL:function(){var s,r=this,q=Date.now(),p=C.c.a3(P.lK(q-r.cy.a).a,1000)/1000
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
q=C.d.dv(r*o)
r=s.clientHeight
r.toString
p=C.d.dv(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.m8(C.m,this.gia())}},
e1:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.E.eL(s)
r=W.mN(new E.jc(this),t.H)
r.toString
C.E.fU(s,r)}},
i7:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.d_()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.Y(p,!1)
q.y=P.lK(p-q.r.a).a*0.000001
p=q.cy
C.b.sl(p.a,0)
p.aO()
p=q.db
C.b.sl(p.a,0)
p.aO()
p=q.dx
C.b.sl(p.a,0)
p.aO()
p=q.dy
C.b.sl(p,0)
p.push(null)
m.aZ(q)}q=n.Q
if(q!=null)q.K(null)}catch(o){s=H.ak(o)
r=H.lt(o)
P.lw("Error: "+H.x(s))
P.lw("Stack: "+H.x(r))
throw H.c(s)}}}
E.jc.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.i7()}},
$S:32}
Z.fC.prototype={}
Z.bS.prototype={
br:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ak(q)
r=P.f('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.x(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.jK.prototype={}
Z.cv.prototype={
aW:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
br:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].br(a)}},
e4:function(a){var s,r,q
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
l.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.d8(p.c)+"'")+"]")}o=H.b([],m)
for(m=this.c,s=m.length,q=0;q<m.length;m.length===s||(0,H.q)(m),++q){n=m[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(l,", ")+"\nAttrs:   "+C.b.j(o,", ")}}
Z.bW.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d8(this.c)+"'")+"]"}}
Z.bI.prototype={
gcE:function(a){var s=this.a,r=(s&$.bs().a)!==0?3:0
if((s&$.br().a)!==0)r+=3
if((s&$.bq().a)!==0)r+=3
if((s&$.bN().a)!==0)r+=2
if((s&$.bO().a)!==0)r+=3
if((s&$.e5().a)!==0)r+=3
if((s&$.e6().a)!==0)r+=4
if((s&$.cr().a)!==0)++r
return(s&$.bp().a)!==0?r+4:r},
hh:function(a){var s,r=$.bs(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.br()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bq()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bN()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bO()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.e5()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.e6()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cr()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bp()
if((q&r.a)!==0)if(s===a)return r
return $.nm()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bI))return!1
return this.a===b.a},
i:function(a){var s=H.b([],t.s),r=this.a
if((r&$.bs().a)!==0)s.push("Pos")
if((r&$.br().a)!==0)s.push("Norm")
if((r&$.bq().a)!==0)s.push("Binm")
if((r&$.bN().a)!==0)s.push("Txt2D")
if((r&$.bO().a)!==0)s.push("TxtCube")
if((r&$.e5().a)!==0)s.push("Clr3")
if((r&$.e6().a)!==0)s.push("Clr4")
if((r&$.cr().a)!==0)s.push("Weight")
if((r&$.bp().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.hW.prototype={}
D.bT.prototype={
n:function(a,b){var s=this.a
return(s==null?this.a=H.b([],t.a):s).push(b)},
L:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.b.D(p,b)
if(p===!0){p=r.a
p=p==null?q:C.b.L(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.b.D(p,b)
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
return!0}if(!o)C.b.E(P.iv(p,!0,t.h2),new D.ic(s))
r=q.b
if(r!=null){q.b=H.b([],t.a)
C.b.E(r,new D.id(s))}return!0},
ap:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.K(s)}}}}
D.ic.prototype={
$1:function(a){a.$1(this.a)},
$S:27}
D.id.prototype={
$1:function(a){a.$1(this.a)},
$S:27}
D.Z.prototype={}
D.b8.prototype={}
D.b9.prototype={}
D.G.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.x(this.d)+" => "+H.x(this.e)}}
X.cw.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cw))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.ey.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ey))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.ir.prototype={}
X.cU.prototype={}
X.ix.prototype={
b7:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.a1(o.a+b.a,o.b+b.b)
o=q.a.gbt()
s=$.ah
if(s==null)s=$.ah=new V.a1(0,0)
r=q.x
q.z=new P.Y(p,!1)
q.x=n
return new X.c_(a,s,r,o,n)},
cp:function(a,b){this.r=a.a
return!1},
bi:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bh:function(a,b){var s=this.d
if(s==null)return!1
s.K(this.b7(a,b))
return!0},
i2:function(a){return!1},
fp:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.K(new X.cU(c,q.a.gbt(),b))
q.y=new P.Y(s,!1)
s=$.ah
q.x=s==null?$.ah=new V.a1(0,0):s}}
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
X.c_.prototype={}
X.iQ.prototype={
bS:function(a,b,c){var s=this,r=new P.Y(Date.now(),!1),q=s.a.gbt(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.c_(a,p,o,q,b)},
cp:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.K(this.bS(a,b,!0))
return!0},
bi:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.K(r.bS(a,b,!0))
return!0},
bh:function(a,b){var s=this.d
if(s==null)return!1
s.K(this.bS(a,b,!1))
return!0},
i3:function(a,b){return!1}}
X.eX.prototype={}
X.di.prototype={}
X.jh.prototype={
b7:function(a,b){var s,r,q,p,o=this,n=new P.Y(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.ah
if(r==null){r=new V.a1(0,0)
$.ah=r
s=r}else s=r}r=o.a.gbt()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.di(q,p,r,s)},
i1:function(a){var s=this.b
if(s==null)return!1
s.K(this.b7(a,!0))
return!0},
i_:function(a){var s=this.c
if(s==null)return!1
s.K(this.b7(a,!0))
return!0},
i0:function(a){var s=this.d
if(s==null)return!1
s.K(this.b7(a,!1))
return!0}}
X.fz.prototype={
gbz:function(a){var s=this.b
return s==null?this.b=new X.ir(P.cQ(t.S)):s},
gan:function(){var s,r=this.c
if(r==null){r=$.ah
if(r==null){r=$.ah=new V.a1(0,0)
s=r}else s=r
r=this.c=new X.iQ(this,r,s,new P.Y(Date.now(),!1),new P.Y(Date.now(),!1))}return r},
gam:function(){var s=this.d
if(s==null){s=$.ah
if(s==null)s=$.ah=new V.a1(0,0)
s=this.d=new X.ix(this,s,new P.Y(Date.now(),!1),new P.Y(Date.now(),!1))}return s},
gb1:function(){var s,r=this.e
if(r==null){r=$.ah
if(r==null){r=$.ah=new V.a1(0,0)
s=r}else s=r
r=this.e=new X.jh(this,r,s,new P.Y(Date.now(),!1),new P.Y(Date.now(),!1))}return r},
gbt:function(){var s=this.a
return V.m1(0,0,C.l.gdi(s).c,C.l.gdi(s).d)},
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
return new X.ey(p,new X.bf(s,r,q))},
aS:function(a){var s
this.gbz(this)
s=a.ctrlKey
s.toString
if(!s)a.metaKey.toString
a.altKey.toString
a.shiftKey.toString},
c_:function(a){var s=a.ctrlKey
if(s!==!0)a.metaKey
this.gbz(this)
a.altKey
a.shiftKey},
aF:function(a){var s,r,q,p
if(a==null){s=$.ah
return s==null?$.ah=new V.a1(0,0):s}s=this.a.getBoundingClientRect()
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
b9:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.aq(r,s)},
bW:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
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
s.push(new V.a1(n-m,l-k))}return s},
aC:function(a){var s,r,q,p
if(a==null)return new X.cw(0,new X.bf(!1,!1,!1))
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
return new X.cw(s,new X.bf(r,q,p))},
bT:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
fj:function(a){return this.f=!0},
f5:function(a){return this.f=!1},
fd:function(a){if(this.f&&this.bT(a))a.preventDefault()},
fn:function(a){var s,r=this
if(!r.f)return
s=r.cR(a)
r.gbz(r).d.n(0,s.a)},
fl:function(a){var s,r=this
if(!r.f)return
s=r.cR(a)
r.gbz(r).d.L(0,s.a)},
fs:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aS(a)
if(p.x){s=p.aC(a)
r=p.b9(a)
if(p.gam().cp(s,r))a.preventDefault()
return}s=p.aC(a)
q=p.aF(a)
if(p.gan().cp(s,q))a.preventDefault()},
fw:function(a){var s,r,q,p=this
p.aS(a)
s=p.aC(a)
if(p.x){r=p.b9(a)
if(p.gam().bi(s,r))a.preventDefault()
return}q=p.aF(a)
if(p.gan().bi(s,q))a.preventDefault()},
fh:function(a){var s,r,q,p=this
if(!p.bT(a)){p.aS(a)
s=p.aC(a)
if(p.x){r=p.b9(a)
if(p.gam().bi(s,r))a.preventDefault()
return}q=p.aF(a)
if(p.gan().bi(s,q))a.preventDefault()}},
fu:function(a){var s,r,q,p=this
p.aS(a)
s=p.aC(a)
if(p.x){r=p.b9(a)
if(p.gam().bh(s,r))a.preventDefault()
return}q=p.aF(a)
if(p.gan().bh(s,q))a.preventDefault()},
ff:function(a){var s,r,q,p=this
if(!p.bT(a)){p.aS(a)
s=p.aC(a)
if(p.x){r=p.b9(a)
if(p.gam().bh(s,r))a.preventDefault()
return}q=p.aF(a)
if(p.gan().bh(s,q))a.preventDefault()}},
fA:function(a){var s,r,q=this
q.aS(a)
s=new V.aq(C.D.ghx(a),C.D.ghy(a)).M(0,q.Q)
if(q.x){if(q.gam().i2(s))a.preventDefault()
return}r=q.aF(a)
if(q.gan().i3(s,r))a.preventDefault()},
fC:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aC(q.y)
r=q.aF(q.y)
q.gam().fp(s,r,p)}},
fP:function(a){var s,r=this
r.a.focus()
r.f=!0
r.c_(a)
s=r.bW(a)
if(r.gb1().i1(s))a.preventDefault()},
fL:function(a){var s
this.c_(a)
s=this.bW(a)
if(this.gb1().i_(s))a.preventDefault()},
fN:function(a){var s
this.c_(a)
s=this.bW(a)
if(this.gb1().i0(s))a.preventDefault()}}
D.cO.prototype={
gv:function(){var s=this.y
return s==null?this.y=D.W():s},
gdI:function(){var s=this.z
return s==null?this.z=D.W():s},
a0:function(a){var s=this.y
return s==null?null:s.K(a)},
cX:function(a){var s=this.z
return s==null?null:s.K(a)},
fo:function(){return this.cX(null)},
fF:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)if(this.em(a[r]))return!1
return!0},
f_:function(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=this.gcW(),q=this.x,p=t.a,o=0;o<b.length;b.length===s||(0,H.q)(b),++o){n=b[o]
q.push(n)
m=n.go
if(m==null)m=n.go=new D.bT()
l=m.a;(l==null?m.a=H.b([],p):l).push(r)}this.a0(new D.b8())},
fJ:function(a,b){var s,r,q,p
for(s=b.gP(b),r=this.gcW(),q=this.e;s.u();){p=s.gB(s)
C.b.L(q,p)
p.gv().L(0,r)}this.a0(new D.b9())},
em:function(a){var s=C.b.D(this.x,a)
return s}}
D.c4.prototype={
a0:function(a){var s=this.go
return s==null?null:s.K(a)},
f7:function(){return this.a0(null)},
ga8:function(){return 12},
$iav:1}
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
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
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
return"["+V.B(s.a,3,0)+", "+V.B(s.b,3,0)+", "+V.B(s.c,3,0)+", "+V.B(s.d,3,0)+"]"},
w:function(){var s=this
return"["+V.B(s.a,3,0)+", "+V.B(s.b,3,0)+", "+V.B(s.c,3,0)+", "+V.B(s.d,3,0)+"]"}}
V.ia.prototype={}
V.d_.prototype={
ab:function(a,b){var s=this,r=H.b([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.n)
return r},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.d_))return!1
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
i:function(a){var s,r,q,p,o=this,n=t.n,m=V.cq(H.b([o.a,o.d,o.r],n),3,0),l=V.cq(H.b([o.b,o.e,o.x],n),3,0),k=V.cq(H.b([o.c,o.f,o.y],n),3,0)
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
ab:function(a,b){var s=this,r=H.b([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.n)
return r},
dG:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.F().toString
if(Math.abs(b3-0)<1e-9)return V.bB()
s=1/b3
r=-l
q=-a2
return V.be((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
M:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.be(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bE:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.D(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
b2:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.R(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bd))return!1
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
G:function(a){var s,r,q,p,o,n=this,m=t.n,l=V.cq(H.b([n.a,n.e,n.y,n.cx],m),3,0),k=V.cq(H.b([n.b,n.f,n.z,n.cy],m),3,0),j=V.cq(H.b([n.c,n.r,n.Q,n.db],m),3,0),i=V.cq(H.b([n.d,n.x,n.ch,n.dx],m),3,0)
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
aA:function(a){return new V.aq(a.a-this.a,a.b-this.b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"},
w:function(){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.R.prototype={
V:function(a,b){return new V.R(this.a+b.a,this.b+b.b,this.c+b.c)},
aM:function(a,b){return new V.R(this.a-b.a,this.b-b.b,this.c-b.c)},
M:function(a,b){return new V.R(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.R))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"},
w:function(){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
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
return"["+V.B(s.a,3,0)+", "+V.B(s.b,3,0)+", "+V.B(s.c,3,0)+", "+V.B(s.d,3,0)+"]"},
w:function(){var s=this
return"["+V.B(s.a,3,0)+", "+V.B(s.b,3,0)+", "+V.B(s.c,3,0)+", "+V.B(s.d,3,0)+"]"}}
V.f_.prototype={
gaX:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.f_))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.B(s.a,3,0)+", "+V.B(s.b,3,0)+", "+V.B(s.c,3,0)+", "+V.B(s.d,3,0)+"]"}}
V.aq.prototype={
bd:function(a){return Math.sqrt(this.aa(this))},
aa:function(a){return this.a*a.a+this.b*a.b},
M:function(a,b){return new V.aq(this.a*b,this.b*b)},
as:function(a,b){var s
$.F().toString
if(Math.abs(b-0)<1e-9){s=$.jz
return s==null?$.jz=new V.aq(0,0):s}return new V.aq(this.a/b,this.b/b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aq))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.D.prototype={
bd:function(a){return Math.sqrt(this.aa(this))},
aa:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
co:function(a,b){return new V.D(V.hK(this.a,a.a,b),V.hK(this.b,a.b,b),V.hK(this.c,a.c,b))},
H:function(){var s=this,r=Math.sqrt(s.aa(s))
if(r===1)return s
return s.as(0,r)},
aG:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.D(s*r-q*p,q*o-n*r,n*p-s*o)},
V:function(a,b){return new V.D(this.a+b.a,this.b+b.b,this.c+b.c)},
b4:function(a){return new V.D(-this.a,-this.b,-this.c)},
M:function(a,b){return new V.D(this.a*b,this.b*b,this.c*b)},
as:function(a,b){$.F().toString
if(Math.abs(b-0)<1e-9)return V.dw()
return new V.D(this.a/b,this.b/b,this.c/b)},
dH:function(){$.F().toString
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
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"},
w:function(){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.dx.prototype={
bd:function(a){var s=this,r=s.a,q=s.b,p=s.c,o=s.d
return Math.sqrt(r*r+q*q+p*p+o*o)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dx))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.B(s.a,3,0)+", "+V.B(s.b,3,0)+", "+V.B(s.c,3,0)+", "+V.B(s.d,3,0)+"]"}}
U.hX.prototype={
bL:function(a){var s=V.qq(a,this.c,this.b)
return s},
gv:function(){var s=this.y
return s==null?this.y=D.W():s},
a_:function(a){var s=this.y
return s==null?null:s.K(a)},
se7:function(a,b){},
sdK:function(a){var s,r=this,q=r.b
$.F().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bL(s)}r.a_(new D.G("maximumLocation",q,r.b))}},
sdM:function(a){var s,r=this,q=r.c
$.F().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bL(s)}r.a_(new D.G("minimumLocation",q,r.c))}},
sa4:function(a,b){var s,r=this
b=r.bL(b)
s=r.d
$.F().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.a_(new D.G("location",s,b))}},
sdL:function(a){var s,r,q=this,p=q.e
$.F().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.a_(new D.G("maximumVelocity",p,a))}},
sa6:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.F().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.a_(new D.G("velocity",r,a))}},
sdj:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.F().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.a_(new D.G("dampening",s,a))}},
az:function(a,b){var s,r,q,p=this,o=p.f
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
U.cx.prototype={
gv:function(){var s=this.b
return s==null?this.b=D.W():s},
b3:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cx))return!1
return this.a.q(0,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.bV.prototype={
gv:function(){var s=this.e
return s==null?this.e=D.W():s},
a_:function(a){var s=this.e
return s==null?null:s.K(a)},
at:function(){return this.a_(null)},
eo:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gbo(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.gv()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}this.a_(new D.b8())},
fH:function(a,b){var s,r
for(s=b.gP(b),r=this.gbo();s.u();)s.gB(s).gv().L(0,r)
this.a_(new D.b9())},
b3:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.ae(o,o.length),n=H.U(o).c,s=null;o.u();){r=n.a(o.d)
if(r!=null){q=r.b3(0,b,c)
s=s==null?q:q.M(0,s)}}p.f=s==null?V.bB():s
o=p.e
if(o!=null)o.ap(0)}return p.f},
q:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bV))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(p>=q.length)return H.d(q,p)
if(!J.K(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$iab:1}
U.ab.prototype={}
U.dv.prototype={
gv:function(){var s=this.fx
return s==null?this.fx=D.W():s},
a_:function(a){var s=this.fx
return s==null?null:s.K(a)},
at:function(){return this.a_(null)},
hi:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
s=a.gan()
r=s.b
s=r==null?s.b=D.W():r
s.n(0,q.geS())
s=a.gan()
r=s.d
s=r==null?s.d=D.W():r
s.n(0,q.geU())
s=a.gan()
r=s.c
s=r==null?s.c=D.W():r
s.n(0,q.geW())
s=a.gam()
r=s.f
s=r==null?s.f=D.W():r
s.n(0,q.geN())
s=a.gam()
r=s.d
s=r==null?s.d=D.W():r
s.n(0,q.geP())
s=a.gb1()
r=s.b
s=r==null?s.b=D.W():r
s.n(0,q.gh7())
s=a.gb1()
r=s.d
s=r==null?s.d=D.W():r
s.n(0,q.gh5())
s=a.gb1()
r=s.c
s=r==null?s.c=D.W():r
s.n(0,q.gh3())
return!0},
aR:function(a){return new V.aq(a.a,a.b)},
eT:function(a){var s=this
t.Z.a(a)
if(!s.d.q(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
eV:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.aA(a.d)
if(s.aa(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aR(a.y.aA(r).M(0,2).as(0,s.gaX()))
p=n.c
p.sa4(0,-q.a*2.5+n.cy)
o=n.b
o.sa4(0,-q.b*2.5+n.db)
o.sa6(0)
p.sa6(0)
n.dx=n.aR(a.z.aA(r).M(0,2).as(0,s.gaX()))
n.at()},
eX:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.aa(s)>0.0001){r.c.sa6(-r.dx.a*10*2.5)
r.b.sa6(-r.dx.b*10*2.5)
r.at()}},
eO:function(a){var s=this
if(t.bv.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eQ:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.q(0,a.x.b))return
s=a.c
r=a.d
q=n.aR(a.y.aA(r).M(0,2).as(0,s.gaX()))
p=n.c
p.sa4(0,-q.a*2.5+n.cy)
o=n.b
o.sa4(0,-q.b*2.5+n.db)
o.sa6(0)
p.sa6(0)
n.dx=n.aR(a.z.aA(r).M(0,2).as(0,s.gaX()))
n.at()},
h8:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
h6:function(a){var s,r,q,p,o,n=this
t.dr.a(a)
if(!n.cx)return
if(n.ch){s=a.y.aA(a.d)
if(s.aa(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aR(a.y.aA(r).M(0,2).as(0,s.gaX()))
p=n.c
p.sa4(0,-q.a*2.5+n.cy)
o=n.b
o.sa4(0,-q.b*2.5+n.db)
o.sa6(0)
p.sa6(0)
n.dx=n.aR(a.z.aA(r).M(0,2).as(0,s.gaX()))
n.at()},
h4:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.aa(s)>0.0001){r.c.sa6(-r.dx.a*10*2.5)
r.b.sa6(-r.dx.b*10*2.5)
r.at()}},
b3:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(o<n){p.dy=n
s=b.y
o=p.c
o.az(0,s)
n=p.b
n.az(0,s)
n=V.lS(n.d)
o=o.d
r=Math.cos(o)
q=Math.sin(o)
p.fr=n.M(0,V.be(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iab:1}
M.em.prototype={
aB:function(a){var s=this.y
return s==null?null:s.K(a)},
ep:function(){return this.aB(null)},
f9:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gau(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bT()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.aB(new D.b8())},
fb:function(a,b){var s,r
for(s=b.gP(b),r=this.gau();s.u();)s.gB(s).gv().L(0,r)
this.aB(new D.b9())},
sbk:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gv().L(0,r.gau())
s=r.d
r.d=a
if(a!=null)a.gv().n(0,r.gau())
r.aB(new D.G("technique",s,r.d))}},
gv:function(){var s=this.y
return s==null?this.y=D.W():s},
aZ:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.e_(d.d)
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
g=V.be(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.dZ(g)
f=$.n7()
e=s.b
if(e!=null)f=e.b3(0,a,s).M(0,f)
a.db.dZ(f)}s=d.d
if(s!=null)s.az(0,a)
for(s=d.e.a,r=new J.ae(s,s.length),o=H.U(r).c;r.u();)o.a(r.d).az(0,a)
for(s=new J.ae(s,s.length),r=H.U(s).c;s.u();)r.a(s.d).aZ(a)
if(d.b!=null){a.cy.cq()
a.db.cq()}a.dY()}}
A.eb.prototype={}
A.hP.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hB:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
hA:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.aI.prototype={
gar:function(a){var s=this.a?1:0
return s|0},
i:function(a){var s=this.a?1:0
return""+(s|0)},
q:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.aI))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.eD.prototype={
ej:function(d7,d8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=null,d1=u.C,d2="Required uniform value, ",d3=", was not defined or used in shader.",d4=c9.x,d5=new P.a_(""),d6=d4.fr
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
A.pG(d4,d5)
A.pI(d4,d5)
A.pH(d4,d5)
A.pK(d4,d5)
A.pL(d4,d5)
A.pJ(d4,d5)
A.pM(d4,d5)
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
m=A.pF(d4)
c9.c=n
c9.d=m
l=c9.cS(n,35633)
k=c9.cS(c9.d,35632)
s=c9.a
q=s.createProgram()
q.toString
c9.e=q
s.attachShader(c9.gaD(),l)
s.attachShader(c9.gaD(),k)
s.linkProgram(c9.gaD())
if(!H.mG(s.getProgramParameter(c9.gaD(),35714))){j=s.getProgramInfoLog(c9.gaD())
if(j==null)j="undefined log error"
s.deleteProgram(c9.e)
H.h(P.f("Failed to link shader: "+j))}c9.h_()
c9.h1()
c9.y=c9.gaf(c9).h(0,"posAttr")
c9.Q=c9.gaf(c9).h(0,"normAttr")
c9.z=c9.gaf(c9).h(0,"binmAttr")
c9.ch=c9.gaf(c9).h(0,"txt2DAttr")
c9.cx=c9.gaf(c9).h(0,"txtCubeAttr")
c9.cy=c9.gaf(c9).h(0,"bendAttr")
if(d4.dy)c9.fy=t.j.a(c9.gT().S(0,"invViewMat"))
if(d6)c9.db=t.j.a(c9.gT().S(0,"objMat"))
if(r)c9.dx=t.j.a(c9.gT().S(0,"viewObjMat"))
d6=t.j
c9.fr=d6.a(c9.gT().S(0,"projViewObjMat"))
if(d4.go)c9.dy=d6.a(c9.gT().S(0,"viewMat"))
if(d4.x1)c9.go=t.E.a(c9.gT().S(0,"txt2DMat"))
if(d4.x2)c9.id=d6.a(c9.gT().S(0,"txtCubeMat"))
if(d4.y1)c9.k1=d6.a(c9.gT().S(0,"colorMat"))
c9.k3=H.b([],t.p)
s=d4.aV
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
if(d4.d.a)c9.aV=t.g.a(c9.gT().S(0,"invDiffuseClr"))
d6=d4.e.a
if(!d6)s=!1
else s=!0
if(s){c9.dn=t.v.a(c9.gT().S(0,"shininess"))
if(d6)c9.dm=t.g.a(c9.gT().S(0,"specularClr"))}if(d4.db){c9.dq=t.bz.a(c9.gT().S(0,"envSampler"))
if(d4.r.a)c9.dr=t.g.a(c9.gT().S(0,"reflectClr"))
d6=d4.x.a
if(!d6)s=!1
else s=!0
if(s){c9.ds=t.v.a(c9.gT().S(0,"refraction"))
if(d6)c9.dt=t.g.a(c9.gT().S(0,"refractClr"))}}if(d4.y.a)c9.du=t.v.a(c9.gT().S(0,"alpha"))
if(d4.k1){d6=d4.z
s=d6.length
if(s!==0){r=t.S
c9.cc=P.T(r,t.W)
c9.cd=P.T(r,t.O)
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
a9=a8}b.push(new A.dn(g,a2,a3,a9,a8,a7))}c9.cd.m(0,d,b)
a=c9.cc
h=c9.r
if(h==null)H.h(P.f(d1))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.h(P.f(d2+a0+d3))
a.m(0,d,r.a(g))}}d6=d4.Q
s=d6.length
if(s!==0){r=t.S
c9.ce=P.T(r,t.W)
c9.cf=P.T(r,t.d)
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
b.push(new A.dp(b2,b1,b0,g,a2,b3))}c9.cf.m(0,d,b)
a=c9.ce
h=c9.r
if(h==null)H.h(P.f(d1))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.h(P.f(d2+a0+d3))
a.m(0,d,r.a(g))}}d6=d4.ch
s=d6.length
if(s!==0){r=t.S
c9.cg=P.T(r,t.W)
c9.ci=P.T(r,t.m)
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
a9=a8}b.push(new A.dr(g,a2,c0,a3,b3,c1,c2,a9,a8,a7))}c9.ci.m(0,d,b)
b4=c9.cg
h=c9.r
if(h==null)H.h(P.f(d1))
b5=c+"Count"
g=h.h(0,b5)
if(g==null)H.h(P.f(d2+b5+d3))
b4.m(0,d,r.a(g))}}d4=d4.cx
d6=d4.length
if(d6!==0){s=t.S
c9.cj=P.T(s,t.W)
c9.ck=P.T(s,t.R)
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
b.push(new A.du(g,a2,a3,a4,b2,b1,c6,c5,c2,c8,c7,a9,a8,a7,b3,c1))}c9.ck.m(0,d,b)
a0=c9.cj
h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"Count"
g=h.h(0,a1)
if(g==null)H.h(P.f(d2+a1+d3))
a0.m(0,d,s.a(g))}}}},
fY:function(a,b){}}
A.b3.prototype={
i:function(a){return"barLight"+this.a}}
A.b5.prototype={
i:function(a){return"dirLight"+this.a}}
A.bg.prototype={
i:function(a){return"pointLight"+this.a}}
A.bi.prototype={
i:function(a){return"spotLight"+this.a}}
A.iB.prototype={
i:function(a){return this.bv}}
A.dn.prototype={}
A.dp.prototype={}
A.dr.prototype={}
A.du.prototype={}
A.dc.prototype={
gaf:function(a){var s=this.f
if(s==null)throw H.c(P.f("Must initialize the shader prior to getting the attributes."))
return s},
gT:function(){var s=this.r
if(s==null)throw H.c(P.f(u.C))
return s},
gaD:function(){var s=this.e
if(s==null)throw H.c(P.f(u.F))
return s},
cS:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.mG(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.f('Error compiling shader "'+H.x(q)+'": '+s))}return q},
h_:function(){var s,r,q,p,o=this,n=u.F,m=H.b([],t.eu),l=o.a,k=H.ke(l.getProgramParameter(o.gaD(),35721))
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
m.push(new A.eb(l,q,p))}o.f=new A.hP(m)},
h1:function(){var s,r,q,p,o,n,m=this,l=u.F,k=H.b([],t.dC),j=m.a,i=H.ke(j.getProgramParameter(m.gaD(),35718))
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
k.push(m.hv(o,n,q,p))}m.r=new A.jm(k)},
aQ:function(a,b,c){var s=this.a
if(a===1)return new A.c9(s,b,c)
else return A.l7(s,this.e,b,a,c)},
eI:function(a,b,c){var s=this.a
if(a===1)return new A.ds(s,b,c)
else return A.l7(s,this.e,b,a,c)},
eJ:function(a,b,c){var s=this.a
if(a===1)return new A.dt(s,b,c)
else return A.l7(s,this.e,b,a,c)},
bq:function(a,b){return new P.fS(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
hv:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aQ(b,c,d)
case 5121:return s.aQ(b,c,d)
case 5122:return s.aQ(b,c,d)
case 5123:return s.aQ(b,c,d)
case 5124:return s.aQ(b,c,d)
case 5125:return s.aQ(b,c,d)
case 5126:return new A.dk(s.a,c,d)
case 35664:return new A.fp(s.a,c,d)
case 35665:return new A.dl(s.a,c,d)
case 35666:return new A.dm(s.a,c,d)
case 35667:return new A.fq(s.a,c,d)
case 35668:return new A.fr(s.a,c,d)
case 35669:return new A.fs(s.a,c,d)
case 35674:return new A.ft(s.a,c,d)
case 35675:return new A.dq(s.a,c,d)
case 35676:return new A.ca(s.a,c,d)
case 35678:return s.eI(b,c,d)
case 35680:return s.eJ(b,c,d)
case 35670:throw H.c(s.bq("BOOL",c))
case 35671:throw H.c(s.bq("BOOL_VEC2",c))
case 35672:throw H.c(s.bq("BOOL_VEC3",c))
case 35673:throw H.c(s.bq("BOOL_VEC4",c))
default:throw H.c(P.f("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.a2.prototype={}
A.jm.prototype={
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
A.c9.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.fq.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.fr.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.fs.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.fo.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.dk.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.fp.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.dl.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.dm.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.ft.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.dq.prototype={
al:function(a){var s=new Float32Array(H.cl(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.ca.prototype={
al:function(a){var s=new Float32Array(H.cl(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.ds.prototype={
i:function(a){return"UniformSampler2D: "+this.c}}
A.dt.prototype={
i:function(a){return"UniformSamplerCube: "+this.c}}
F.kc.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.co(q.b,b).co(q.d.co(q.c,b),c)
a.sa4(0,new V.R(p.a,p.b,p.c))
a.se3(p.H())
q=1-b
s=1-c
a.sdf(new V.bE(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)},
$S:7}
F.kr.prototype={
$2:function(a,b){return V.hK(this.a,this.b,b)},
$S:19}
F.kt.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.hK(-1,1,c),n=this.a.$2(b,c)
q=-q*n
s=p*n
a.sa4(0,new V.R(q,s,o))
a.se3(new V.D(q,s,o).H())
a.sdf(new V.bE(1-c,2+c,-1,-1))},
$S:7}
F.ku.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:18}
F.kv.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:18}
F.kP.prototype={
$2:function(a,b){return 0},
$S:19}
F.kO.prototype={
$3:function(a,b,c){var s,r=this.b.$2(b,c)
if(typeof r!=="number")return H.mW(r)
s=a.f
r=(s!=null?new V.D(s.a,s.b,s.c):V.l8()).H().M(0,this.a+r)
a.sa4(0,new V.R(r.a,r.b,r.c))},
$S:7}
F.kQ.prototype={
$1:function(a){return new V.R(Math.cos(a),Math.sin(a),0)},
$S:15}
F.kE.prototype={
$1:function(a){var s=this.a*a,r=2+Math.cos(s),q=this.b*a
return new V.R(r*Math.cos(q)/2,r*Math.sin(q)/2,Math.sin(s)/2)},
$S:15}
F.ks.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.lA(l.$1(m),k)
k=J.lA(l.$1(m+3.141592653589793/n.c),k).aM(0,j)
s=new V.D(k.a,k.b,k.c).H()
r=$.mi
if(r==null){r=new V.D(1,0,0)
$.mi=r}q=s.aG(!s.q(0,r)?V.l8():r).H()
r=q.aG(s).H()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.M(0,l*k)
k=q.M(0,o*k)
a.sa4(0,j.V(0,new V.R(l.a-k.a,l.b-k.b,l.c-k.c)))},
$S:7}
F.at.prototype={
aN:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.c(P.f("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.c0(a)
s.c1(b)
s.fZ(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gR().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.Y()}},
bc:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.b.L(r.gR().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.Y()}}s.bX()
s.bY()
s.fS()},
c0:function(a){this.a=a
a.gR().b.push(this)},
c1:function(a){this.b=a
a.gR().c.push(this)},
fZ:function(a){this.c=a
a.gR().d.push(this)},
bX:function(){var s=this.a
if(s!=null)C.b.L(s.gR().b,this)
this.a=null},
bY:function(){var s=this.b
if(s!=null)C.b.L(s.gR().c,this)
this.b=null},
fS:function(){var s=this.c
if(s!=null)C.b.L(s.gR().d,this)
this.c=null},
eB:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.dw()
if(n!=null)q=q.V(0,n)
if(s!=null)q=q.V(0,s)
if(r!=null)q=q.V(0,r)
if(q.dH())return p
return q.H()},
eD:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aM(0,n)
q=new V.D(o.a,o.b,o.c).H()
o=r.aM(0,n)
return q.aG(new V.D(o.a,o.b,o.c).H()).H()},
c7:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.eB()
if(s==null){s=q.eD()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.Y()}return!0},
eA:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.dw()
if(n!=null)q=q.V(0,n)
if(s!=null)q=q.V(0,s)
if(r!=null)q=q.V(0,r)
if(q.dH())return p
return q.H()},
eC:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.F().toString
if(Math.abs(p-0)<1e-9){j=b.aM(0,e)
o=new V.D(j.a,j.b,j.c).H()
if(q.a-r.a<0)o=o.b4(0)}else{n=(j-s.b)/p
j=b.aM(0,e).M(0,n).V(0,e).aM(0,h)
o=new V.D(j.a,j.b,j.c).H()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.b4(0)}m=l.d
if(m!=null){m=m.H()
o=m.aG(o).H().aG(m).H()}return o},
c5:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.eA()
if(s==null){s=q.eC()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.Y()}return!0},
ghp:function(a){var s=this
if(J.K(s.a,s.b))return!0
if(J.K(s.b,s.c))return!0
if(J.K(s.c,s.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
G:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gA(p)
p=a+C.a.aj(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gA(o)
p=p+C.a.aj(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gA(o)
s=p+C.a.aj(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.w()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.w()
return s+((p==null?"-":p)+"}")},
w:function(){return this.G("")}}
F.ie.prototype={}
F.j8.prototype={
bf:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gA(q)
s=c.a
if(q==(s==null?r:s.gA(s))){q=b.b
q=q==null?r:q.gA(q)
s=c.b
if(q==(s==null?r:s.gA(s))){q=b.c
q=q==null?r:q.gA(q)
s=c.c
q=q==(s==null?r:s.gA(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gA(q)
s=c.b
if(q==(s==null?r:s.gA(s))){q=b.b
q=q==null?r:q.gA(q)
s=c.c
if(q==(s==null?r:s.gA(s))){q=b.c
q=q==null?r:q.gA(q)
s=c.a
q=q==(s==null?r:s.gA(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gA(q)
s=c.c
if(q==(s==null?r:s.gA(s))){q=b.b
q=q==null?r:q.gA(q)
s=c.a
if(q==(s==null?r:s.gA(s))){q=b.c
q=q==null?r:q.gA(q)
s=c.b
q=q==(s==null?r:s.gA(s))}else q=!1
return q}else return!1}}}}
F.eA.prototype={
ei:function(a,b){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a line with a start vertex which is not attached to a shape."))
if(r!==b.a)throw H.c(P.f("May not create a line with vertices attached to different shapes."))
s.c0(a)
s.c1(b)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.ga5(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.Y()}},
bc:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null)){if(!q){r=r.a
if(r!=null)C.b.L(r.ga5(r).b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.Y()}}s.bX()
s.bY()},
c0:function(a){this.a=a
a.ga5(a).b.push(this)},
c1:function(a){this.b=a
a.ga5(a).c.push(this)},
bX:function(){var s=this.a
if(s!=null)C.b.L(s.ga5(s).b,this)
this.a=null},
bY:function(){var s=this.b
if(s!=null)C.b.L(s.ga5(s).c,this)
this.b=null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
G:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gA(s)
s=a+C.a.aj(C.c.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gA(r)
return s+C.a.aj(C.c.i(r==null?-1:r),0)},
w:function(){return this.G("")}}
F.is.prototype={}
F.jl.prototype={
bf:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gA(q)
s=c.a
if(q==(s==null?r:s.gA(s))){q=b.b
q=q==null?r:q.gA(q)
s=c.b
return q==(s==null?r:s.gA(s))}else{q=b.a
q=q==null?r:q.gA(q)
s=c.b
if(q==(s==null?r:s.gA(s))){q=b.b
q=q==null?r:q.gA(q)
s=c.a
return q==(s==null?r:s.gA(s))}else return!1}}}
F.eW.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
G:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gA(s)
return a+C.a.aj(C.c.i(s),0)},
w:function(){return this.G("")}}
F.j2.prototype={
gX:function(){var s=this.a
return s==null?this.a=new F.y(this,H.b([],t.k)):s},
gbj:function(a){var s=this.b
return s==null?this.b=new F.bF(this,H.b([],t.q)):s},
ga5:function(a){var s=this.c
return s==null?this.c=new F.de(this,H.b([],t.L)):s},
gR:function(){var s=this.d
return s==null?this.d=new F.dd(this,H.b([],t.u)):s},
gv:function(){var s=this.e
return s==null?this.e=D.W():s},
bg:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.e
if(a0!=null)++a0.d
a1.gX().W()
s=b.gX().c.length
for(a0=a1.gX().c,r=a0.length,q=t.k,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){o=a0[p]
n=b.a
if(n==null)n=b.a=new F.y(b,H.b([],q))
n.n(0,o.hs())}b.gX().W()
for(a0=a1.gbj(a1).b,r=a0.length,n=t.q,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){m=a0[p]
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
l=(k==null?b.b=new F.bF(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,h)
l=new F.eW()
if(h.a==null)H.h(P.f("May not create a point with a vertex which is not attached to a shape."))
l.a=h
k=h.b;(k==null?h.b=new F.dy(H.b([],n)):k).b.push(l)
k=l.a
if(k!=null){k=k.a
if(k!=null){j=k.b;(j==null?k.b=new F.bF(k,H.b([],n)):j).b.push(l)}}l=l.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.K(a)}}}for(a0=a1.ga5(a1).b,r=a0.length,n=t.L,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){g=a0[p]
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
l=(k==null?b.c=new F.de(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,e)
new F.eA().ei(f,e)}for(a0=a1.gR().b,r=a0.length,n=t.u,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){d=a0[p]
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
l=(k==null?b.d=new F.dd(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,e)
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,c)
new F.at().aN(f,e,c)}a0=b.e
if(a0!=null)a0.ap(0)},
aw:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gR().aw()||!1
if(!r.gX().aw())s=!1
q=r.e
if(q!=null)q.ap(0)
return s},
hQ:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.gX().c
s=H.b(m.slice(0),H.kd(m))
for(m=t.k;s.length!==0;){r=C.b.ghG(s)
C.b.ct(s,0)
q=H.b([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(a.bf(0,r,o)){q.push(o)
C.b.ct(s,p)}}if(q.length>1)b.bg(q)}n.gX().W()
n.ga5(n).cu()
n.gR().cu()
n.gbj(n).i6()
n.ga5(n).cv(new F.jl())
n.gR().cv(new F.j8())
m=n.e
if(m!=null)m.ap(0)},
c4:function(){this.hQ(new F.jF(),new F.iT())},
cm:function(){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
n.gR().cm()
for(s=n.gX().c.length-1,m=t.k;s>=0;--s){r=n.a
r=(r==null?n.a=new F.y(n,H.b([],m)):r).c
if(s>=r.length)return H.d(r,s)
q=r[s]
p=q.r
if(p!=null)q.sdN(new V.D(-p.a,-p.b,-p.c))
o=q.x
if(o!=null){o=new V.D(-o.a,-o.b,-o.c).H()
if(!J.K(q.x,o)){q.x=o
r=q.a
if(r!=null){r=r.e
if(r!=null)r.K(null)}}}}m=n.e
if(m!=null)m.ap(0)},
hn:function(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=34962,b={},a=e.gX().c.length,a0=a3.a,a1=(a0&$.bs().a)!==0?1:0
if((a0&$.br().a)!==0)++a1
if((a0&$.bq().a)!==0)++a1
if((a0&$.bN().a)!==0)++a1
if((a0&$.bO().a)!==0)++a1
if((a0&$.e5().a)!==0)++a1
if((a0&$.e6().a)!==0)++a1
if((a0&$.cr().a)!==0)++a1
if((a0&$.bp().a)!==0)++a1
s=a3.gcE(a3)
r=P.cT(a*s,0,!1,t.gR)
b.a=0
q=P.nY(a1,new F.j3(b,e,a3,s*4,a,s,r),t.eT)
a0=a2.a
p=a0.createBuffer()
p.toString
a0.bindBuffer(c,p)
a0.bufferData(c,new Float32Array(H.cl(r)),35044)
a0.bindBuffer(c,d)
o=new Z.cv(new Z.fC(c,p),H.b([],t.fv),q,a3)
if(e.gbj(e).b.length!==0){n=H.b([],t.t)
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
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],m)):i).W()}k=k.e}n.push(k==null?0:k);++l}h=Z.l9(a0,34963,n)
o.b.push(new Z.bW(0,n.length,h))}if(e.ga5(e).b.length!==0){n=H.b([],t.t)
p=t.L
m=t.k
l=0
while(!0){k=e.c
if(k==null){k=e.c=new F.de(e,H.b([],p))
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
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],m)):i).W()}k=k.e}n.push(k==null?0:k);++l}h=Z.l9(a0,34963,n)
o.b.push(new Z.bW(1,n.length,h))}if(e.gR().b.length!==0){n=H.b([],t.t)
p=t.u
m=t.k
l=0
while(!0){k=e.d
if(k==null){k=e.d=new F.dd(e,H.b([],p))
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
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],m)):i).W()}k=k.e}n.push(k==null?0:k);++l}h=Z.l9(a0,34963,n)
o.b.push(new Z.bW(4,n.length,h))}return o},
i:function(a){var s=this,r="   ",q=H.b([],t.s)
if(s.gX().c.length!==0){q.push("Vertices:")
q.push(s.gX().G(r))}if(s.gbj(s).b.length!==0){q.push("Points:")
q.push(s.gbj(s).G(r))}if(s.ga5(s).b.length!==0){q.push("Lines:")
q.push(s.ga5(s).G(r))}if(s.gR().b.length!==0){q.push("Faces:")
q.push(s.gR().G(r))}return C.b.j(q,"\n")},
Y:function(){var s=this.e
return s==null?null:s.K(null)}}
F.j3.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c.hh(a),e=f.gcE(f),d=g.a,c=d.a
for(s=g.e,r=g.r,q=r.length,p=g.f,o=g.b,n=t.k,m=0;m<s;++m){l=o.a
l=(l==null?o.a=new F.y(o,H.b([],n)):l).c
if(m>=l.length)return H.d(l,m)
k=l[m].hP(f)
j=d.a+m*p
for(l=k.length,i=0;i<l;++i){h=k[i]
if(j>=q)return H.d(r,j)
r[j]=h;++j}}d.a+=e
return new Z.bS(f,e,c*4,g.d)},
$S:46}
F.dd.prototype={
hd:function(a){var s,r,q,p,o,n,m,l,k=H.b([],t.u),j=a.length
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
l.aN(s,o,n)
k.push(l)}}return k},
he:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=H.b([],t.u)
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
e.aN(j,i,g)
d.push(e)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,j)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,f)
e=new F.at()
e.aN(j,g,f)
d.push(e)}else{(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,f)
e=new F.at()
e.aN(i,g,f)
d.push(e)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,f)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,j)
e=new F.at()
e.aN(i,f,j)
d.push(e)}m=!m}o=!o}return d},
gl:function(a){return this.b.length},
cv:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gX().c.length-1,q=t.u,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.y(s,H.b([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.d
if(o==null)o=n.d=new F.ce(H.b([],q),H.b([],q),H.b([],q))
m=o.b.length+o.c.length+o.d.length-1
for(;m>=0;m=k){o=n.d
l=(o==null?n.d=new F.ce(H.b([],q),H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.d
if(a.bf(0,l,(o==null?n.d=new F.ce(H.b([],q),H.b([],q),H.b([],q)):o).h(0,j))){l.bc()
break}}}}},
cu:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(q.ghp(q))q.bc()}},
aw:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].c7())q=!1
return q},
c6:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].c5())q=!1
return q},
cm:function(){var s,r,q,p,o,n,m,l
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
F.de.prototype={
gl:function(a){return this.b.length},
cv:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gX().c.length-1,q=t.L,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.y(s,H.b([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.c
if(o==null)o=n.c=new F.cf(H.b([],q),H.b([],q))
m=o.b.length+o.c.length-1
for(;m>=0;m=k){o=n.c
l=(o==null?n.c=new F.cf(H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.c
if(a.bf(0,l,(o==null?n.c=new F.cf(H.b([],q),H.b([],q)):o).h(0,j))){l.bc()
break}}}}},
cu:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(J.K(q.a,q.b))q.bc()}},
i:function(a){return this.w()},
G:function(a){var s,r=H.b([],t.s),q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.d(q,s)
r.push(q[s].G(a+(""+s+". ")))}return C.b.j(r,"\n")},
w:function(){return this.G("")}}
F.bF.prototype={
gl:function(a){return this.b.length},
i6:function(){var s,r,q,p,o,n,m
for(s=this.b,r=s.length-1,q=t.q;r>=0;--r){if(r>=s.length)return H.d(s,r)
p=s[r].a
if(p==null)o=null
else{n=p.b
p=(n==null?p.b=new F.dy(H.b([],q)):n).b.length
o=p}if((o==null?0:o)>1){if(r>=s.length)return H.d(s,r)
m=s[r]
p=m.a
if(p!=null){p=p.a
if(p!=null){n=p.b
C.b.L((n==null?p.b=new F.bF(p,H.b([],q)):n).b,m)}p=m.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.K(null)}}}p=m.a
if(p!=null){n=p.b
C.b.L((n==null?p.b=new F.dy(H.b([],q)):n).b,m)}m.a=null}}},
i:function(a){return this.w()},
G:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(a))
return C.b.j(p,"\n")},
w:function(){return this.G("")}}
F.cd.prototype={
ca:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.fA(s.cx,p,m,r,q,o,n,a,l)},
hs:function(){return this.ca(null)},
ga5:function(a){var s=this.c
if(s==null){s=t.L
s=this.c=new F.cf(H.b([],s),H.b([],s))}return s},
gR:function(){var s=this.d
if(s==null){s=t.u
s=this.d=new F.ce(H.b([],s),H.b([],s),H.b([],s))}return s},
gA:function(a){var s=this.a
if(s!=null)s.gX().W()
return this.e},
sa4:function(a,b){var s
if(!J.K(this.f,b)){this.f=b
s=this.a
if(s!=null)s.Y()}},
sdN:function(a){var s
a=a.H()
if(!J.K(this.r,a)){this.r=a
s=this.a
if(s!=null)s.Y()}},
se3:function(a){var s
if(!J.K(this.z,a)){this.z=a
s=this.a
if(s!=null)s.Y()}},
sdf:function(a){var s
if(!J.K(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.Y()}},
hP:function(a){var s,r,q,p,o=this,n=null
if(a.q(0,$.bs())){s=o.f
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.q(0,$.br())){s=o.r
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,1,0],t.n):s}else if(a.q(0,$.bq())){s=o.x
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,1],t.n):s}else if(a.q(0,$.bN())){s=o.y
s=s==null?n:H.b([s.a,s.b],t.n)
return s==null?H.b([0,0],t.n):s}else if(a.q(0,$.bO())){s=o.z
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.q(0,$.e5())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return H.b([q,p,s==null?1:s],t.n)}else if(a.q(0,$.e6())){s=o.Q
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([1,1,1,1],t.n):s}else if(a.q(0,$.cr()))return H.b([o.ch],t.n)
else if(a.q(0,$.bp())){s=o.cx
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([-1,-1,-1,-1],t.n):s}else return H.b([],t.n)},
c7:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dw()
p.gR().E(0,new F.jJ(o))
p.r=o.a.H()
if(r){s.Y()
o=s.e
if(o!=null)o.ap(0)}return!0},
c5:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dw()
p.gR().E(0,new F.jI(o))
p.x=o.a.H()
if(r){s.Y()
o=s.e
if(o!=null)o.ap(0)}return!0},
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
n.push(V.B(q.ch,3,0))
s=q.cx
s=s==null?p:s.w()
n.push(s==null?o:s)
r=C.b.j(n,", ")
return a+"{"+r+"}"},
w:function(){return this.G("")}}
F.jJ.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.V(0,r)}},
$S:8}
F.jI.prototype={
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
hf:function(a,b,c,d,e,f){var s=F.fA(a,null,b,c,d,e,f,null,0)
this.n(0,s)
return s},
gl:function(a){return this.c.length},
aw:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].c7()
return!0},
c6:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].c5()
return!0},
ho:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.H()
if(!J.K(p.z,n)){p.z=n
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
F.ce.prototype={
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
C.b.E(s.c,new F.jD(s,b))
C.b.E(s.d,new F.jE(s,b))},
i:function(a){return this.w()},
w:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(""))
return C.b.j(p,"\n")}}
F.jD.prototype={
$1:function(a){if(!J.K(a.a,this.a))this.b.$1(a)},
$S:8}
F.jE.prototype={
$1:function(a){var s=this.a
if(!J.K(a.a,s)&&!J.K(a.b,s))this.b.$1(a)},
$S:8}
F.cf.prototype={
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
F.jG.prototype={}
F.jF.prototype={
bf:function(a,b,c){return J.K(b.f,c.f)}}
F.jH.prototype={}
F.iT.prototype={
bg:function(a){var s,r,q,p=V.dw()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)p=new V.D(p.a+q.a,p.b+q.b,p.c+q.c)}p=p.H()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)a[r].sdN(p)
return null}}
F.dy.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.w()},
w:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].G(""))
return C.b.j(p,"\n")}}
O.cY.prototype={
gv:function(){var s=this.fr
return s==null?this.fr=D.W():s},
ad:function(a){var s=this.fr
return s==null?null:s.K(a)},
er:function(){return this.ad(null)},
cZ:function(a){this.a=null
this.ad(a)},
fV:function(){return this.cZ(null)},
f1:function(a,b){return this.ad(new D.b8())},
f3:function(a,b){return this.ad(new D.b9())},
gdJ:function(){var s=this,r=s.dx
if(r==null){r=new D.cO(H.b([],t.i),H.b([],t.U),H.b([],t.o),H.b([],t.D),H.b([],t.e))
r.cC(r.geZ(),r.gfE(),r.gfI())
r.gv().n(0,s.gcY())
r.gdI().n(0,s.gcK())
s.dx=r}return r},
gcb:function(){var s=this.f
return s==null?this.f=O.eF(this,"emission"):s},
gdd:function(){var s=this.r
return s==null?this.r=O.eF(this,"ambient"):s},
gdk:function(){var s=this.x
return s==null?this.x=O.eF(this,"diffuse"):s},
gbI:function(){var s=this.z
return s==null?this.z=new O.iE(new V.V(0,0,0),this,"specular",new A.aI(!1,!1,!1)):s},
cQ:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.y,a1=new H.X(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=H.b([],t.i)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.ga8()
o=a1.h(0,q.ga8())
a1.m(0,p,o==null?1:o)}n=H.b([],t.cn)
a1.E(0,new O.iF(b,n))
C.b.b5(n,new O.iG())
m=new H.X(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=H.b([],t.U)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.ga8()
o=m.h(0,q.ga8())
m.m(0,p,o==null?1:o)}l=H.b([],t.fD)
m.E(0,new O.iH(b,l))
C.b.b5(l,new O.iI())
k=new H.X(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=H.b([],t.o)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.ga8()
o=k.h(0,q.ga8())
k.m(0,p,o==null?1:o)}j=H.b([],t.eg)
k.E(0,new O.iJ(b,j))
C.b.b5(j,new O.iK())
i=new H.X(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=H.b([],t.D)
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.q)(a0),++r){q=a0[r]
s=q.ga8()
p=i.h(0,q.ga8())
i.m(0,s,p==null?1:p)}h=H.b([],t.c3)
i.E(0,new O.iL(b,h))
C.b.b5(h,new O.iM())
a0=C.c.a3(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.iC(new V.aP(0,0,0,0))
a2=b.gcb().c
s=b.gdd().c
p=b.gdk().c
o=b.y
o=(o==null?b.y=O.eF(b,"invDiffuse"):o).c
g=b.gbI().c
f=b.Q
f=(f==null?b.Q=new O.iA(b,"bump",new A.aI(!1,!1,!1)):f).c
e=b.cx
e=(e==null?b.cx=O.eF(b,"reflect"):e).c
d=b.cy
d=(d==null?b.cy=new O.iD(new V.V(0,0,0),b,"refract",new A.aI(!1,!1,!1)):d).c
c=b.db
return A.o_(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.iz(b,"alpha",new A.aI(!1,!1,!1)):c).c,n,l,j,h)},
ez:function(a,b){},
az:function(a,b){var s,r,q,p,o,n=this.dx
n=J.aE(n==null?H.b([],t.e):n)
s=H.U(n).c
for(;n.u();){r=s.a(n.d)
q=$.ay
r.a=q==null?$.ay=new V.R(0,0,0):q
q=$.jC
r.b=q==null?$.jC=new V.D(0,0,1):q
q=$.jB
r.c=q==null?$.jB=new V.D(0,1,0):q
q=$.jA
r.d=q==null?$.jA=new V.D(-1,0,0):q
p=r.f
if(p!=null){o=p.b3(0,b,r)
r.a=o.b2(r.a)
r.b=o.bE(r.b).H()
r.c=o.bE(r.c).H()
r.d=o.bE(r.d).H()}}},
i8:function(b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null,b0=a8.a
if(b0==null){s=a8.cQ()
r=s.bv
q=b1.fr
b0=q.h(0,r)
if(b0==null){p=b1.a
o=t.S
n=t.W
b0=new A.eD(s,H.b([],t.p),P.T(o,n),P.T(o,t.O),P.T(o,n),P.T(o,t.d),P.T(o,n),P.T(o,t.m),P.T(o,n),P.T(o,t.R),p,r)
b0.ej(s,p)
if(r.length===0)H.h(P.f("May not cache a shader with no name."))
if(q.c8(0,r))H.h(P.f('Shader cache already contains a shader by the name "'+r+'".'))
q.m(0,r,b0)}b0=a8.a=b0
b2.e=null}m=b0.x
l=m.dl
s=b2.e
if(!(s instanceof Z.cv))s=b2.e=null
if(s==null||!s.d.q(0,l)){s=m.k4
if(s){r=b2.d
if(r!=null)r.aw()}r=m.r1
if(r){q=b2.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gR().c6()
q.gX().c6()
q=q.e
if(q!=null)q.ap(0)}}q=m.rx
if(q){p=b2.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.gX().ho()
p=p.e
if(p!=null)p.ap(0)}}p=b2.d
k=p==null?a9:p.hn(new Z.jK(b1.a),l)
if(k==null)return
p=k.aW($.bs())
if(p!=null){o=b0.y
o=o==null?a9:o.c
p.e=o==null?0:o}if(s){s=k.aW($.br())
if(s!=null){p=b0.Q
p=p==null?a9:p.c
s.e=p==null?1:p}}if(r){s=k.aW($.bq())
if(s!=null){r=b0.z
r=r==null?a9:r.c
s.e=r==null?2:r}}if(m.r2){s=k.aW($.bN())
if(s!=null){r=b0.ch
r=r==null?a9:r.c
s.e=r==null?3:r}}if(q){s=k.aW($.bO())
if(s!=null){r=b0.cx
r=r==null?a9:r.c
s.e=r==null?4:r}}if(m.ry){s=k.aW($.bp())
if(s!=null){r=b0.cy
r=r==null?a9:r.c
s.e=r==null?5:r}}b2.e=k}j=H.b([],t.ga)
s=b1.a
s.useProgram(b0.e)
b0.gaf(b0).hB()
if(m.fr){r=b1.dx
r=r.ga2(r)
q=b0.db
if(q!=null)q.al(r.ab(0,!0))}if(m.fx){r=b1.cx
if(r==null){r=b1.db
q=b1.dx
q=b1.cx=r.ga2(r).M(0,q.ga2(q))
r=q}q=b0.dx
if(q!=null)q.al(r.ab(0,!0))}r=b1.ch
if(r==null){r=b1.dx
r=b1.ch=b1.gi4().M(0,r.ga2(r))}q=b0.fr
if(q!=null)q.al(r.ab(0,!0))
if(m.go){r=b1.db
r=r.ga2(r)
q=b0.dy
if(q!=null)q.al(r.ab(0,!0))}if(m.x1){r=$.lR
if(r==null){r=new V.d_(1,0,0,0,1,0,0,0,1)
$.lR=r}q=b0.go
if(q!=null)q.al(r.ab(0,!0))}if(m.x2){r=V.bB()
q=b0.id
if(q!=null)q.al(r.ab(0,!0))}if(m.y1){r=V.bB()
q=b0.k1
if(q!=null)q.al(r.ab(0,!0))}if(m.aV>0){r=a8.e.a
i=r.length
q=b0.k2
if(q!=null)q.a.uniform1i(q.d,i)
for(h=0;h<i;++h){if(h>=r.length)return H.d(r,h)
q=r[h]
p=b0.k3
if(h>=p.length)return H.d(p,h)
p=p[h]
g=new Float32Array(H.cl(q.ab(0,!0)))
p.a.uniformMatrix4fv(p.d,!1,g)}}if(m.a.a){r=a8.f
r=r==null?a9:r.f
if(r==null)r=new V.V(0,0,0)
q=b0.k4
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(m.k1){if(m.b.a){r=a8.r
r=r==null?a9:r.f
if(r==null)r=new V.V(0,0,0)
q=b0.rx
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(m.c.a){r=a8.x
r=r==null?a9:r.f
if(r==null)r=new V.V(0,0,0)
q=b0.x2
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(m.d.a){r=a8.y
r=r==null?a9:r.f
if(r==null)r=new V.V(0,0,0)
q=b0.aV
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}r=m.e.a
if(!r)q=!1
else q=!0
if(q){q=a8.z
q=q==null?a9:q.ch
if(q==null)q=100
p=b0.dn
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a8.z
r=r==null?a9:r.f
if(r==null)r=new V.V(1,1,1)
q=b0.dm
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}r=m.z
if(r.length>0){f=new H.X(t.y)
q=a8.dx
q=q==null?a9:q.e
if(q==null)q=H.b([],t.i)
p=q.length
o=t.c
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.ga8()
b=f.h(0,c)
if(b==null)b=0
f.m(0,c,b+1)
n=b0.cd.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=d.gio()
a0=$.ay
n=n.b2(a0==null?$.ay=new V.R(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gip()
a0=$.ay
n=n.b2(a0==null?$.ay=new V.R(0,0,0):a0)
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gax(d)
a0=a.d
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
if(d.ghC()){n=d.ghj()
a0=a.e
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.ghk()
a0=a.f
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.ghl()
a0=a.r
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=f.h(0,p)
if(i==null)i=0
p=b0.cc.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.Q
if(r.length>0){q=b1.db
a1=q.ga2(q)
a2=new H.X(t.y)
q=a8.dx
q=q==null?a9:q.f
if(q==null)q=H.b([],t.U)
p=q.length
o=t.V
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.ga8()
b=a2.h(0,c)
if(b==null)b=0
a2.m(0,c,b+1)
n=b0.cf.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=a1.bE(d.ghz(d)).H()
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gax(d)
a0=a.f
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
d.gb0()
n=d.ghz(d)
a0=a.d
if(a0!=null)a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.giD()
a0=a.b
if(a0!=null)a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gcw(d)
a0=a.c
if(a0!=null)a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gb0()
if(!C.b.D(j,n)){n.sA(0,j.length)
j.push(n)}n=d.gb0()
a0=n.gbe(n)
if(a0){a0=a.r
if(a0!=null){a3=n.gbe(n)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,n.gA(n))}}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a2.h(0,p)
if(i==null)i=0
p=b0.ce.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.ch
if(r.length>0){q=b1.db
a1=q.ga2(q)
a5=new H.X(t.y)
q=a8.dx
q=q==null?a9:q.r
if(q==null)q=H.b([],t.o)
p=q.length
o=t.B
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.ga8()
b=a5.h(0,c)
if(b==null)b=0
a5.m(0,c,b+1)
n=b0.ci.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
a6=a1.M(0,d.ga2(d))
n=d.ga2(d)
a0=$.ay
n=n.b2(a0==null?$.ay=new V.R(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=$.ay
n=a6.b2(n==null?$.ay=new V.R(0,0,0):n)
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gax(d)
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
d.gb0()
n=a6.dG(0)
a0=a.d
if(a0!=null){g=new Float32Array(H.cl(new V.d_(n.a,n.b,n.c,n.e,n.f,n.r,n.y,n.z,n.Q).ab(0,!0)))
a0.a.uniformMatrix3fv(a0.d,!1,g)}d.gb0()
n=d.gb0()
if(!C.b.D(j,n)){n.sA(0,j.length)
j.push(n)}n=d.gb0()
a0=n.gbe(n)
if(a0){a0=a.f
if(a0!=null){a3=n.gbe(n)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,n.gA(n))}}d.gcD()
n=d.gim()
a0=a.x
if(a0!=null)a0.a.uniform4f(a0.d,n.a,n.b,n.c,n.d)
n=d.gcD()
if(!C.b.D(j,n)){n.sA(0,j.length)
j.push(n)}n=d.gcD()
a0=n.gbe(n)
if(a0){a0=a.r
if(a0!=null){a3=n.gbe(n)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,n.gA(n))}}if(d.ghC()){n=d.ghj()
a0=a.y
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.ghk()
a0=a.z
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.ghl()
a0=a.Q
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a5.h(0,p)
if(i==null)i=0
p=b0.cg.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.cx
if(r.length>0){q=b1.db
a1=q.ga2(q)
a7=new H.X(t.y)
q=a8.dx
q=q==null?a9:q.x
if(q==null)q=H.b([],t.D)
p=q.length
o=t.J
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.ga8()
b=a7.h(0,c)
if(b==null)b=0
a7.m(0,c,b+1)
n=b0.ck.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=d.a
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.b.H()
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=a1.b2(d.a)
a0=a.d
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.r
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.cy
a0=a.Q
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.dx
a0=a.ch
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.dy
a0=a.cx
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.fr
a0=a.cy
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.fx
a0=a.db
if(a0!=null)a0.a.uniform1f(a0.d,n)}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a7.h(0,p)
if(i==null)i=0
p=b0.cj.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}}if(m.dy){r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.ga2(r).dG(0)}q=b0.fy
if(q!=null)q.al(r.ab(0,!0))}if(m.db){a8.ez(j,a9)
b0.fY(b0.dq,a9)
if(m.r.a){r=a8.cx
r=r==null?a9:r.f
if(r==null)r=new V.V(1,1,1)
q=b0.dr
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}r=m.x.a
if(!r)q=!1
else q=!0
if(q){q=a8.cy
q=q==null?a9:q.ch
if(q==null)q=0
p=b0.ds
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a8.cy
r=r==null?a9:r.f
if(r==null)r=new V.V(1,1,1)
q=b0.dt
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}}r=m.y.a
q=!r
if(q)p=!1
else p=!0
if(p){if(r){r=a8.db
r=r==null?a9:r.f
if(r==null)r=1
p=b0.du
if(p!=null)p.a.uniform1f(p.d,r)}s.enable(3042)
s.blendFunc(770,771)}for(h=0;h<j.length;++h)j[h].br(b1)
r=t.ed.a(b2.e)
r.br(b1)
r.aZ(b1)
r.e4(b1)
if(q)r=!1
else r=!0
if(r)s.disable(3042)
for(h=0;h<j.length;++h)j[h].e4(b1)
s.useProgram(a9)
b0.gaf(b0).hA()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cQ().bv}}
O.iF.prototype={
$2:function(a,b){return this.b.push(new A.b3(a,C.c.a3(b+3,4)*4))},
$S:6}
O.iG.prototype={
$2:function(a,b){return C.c.ag(a.a,b.a)},
$S:50}
O.iH.prototype={
$2:function(a,b){return this.b.push(new A.b5(a,C.c.a3(b+3,4)*4))},
$S:6}
O.iI.prototype={
$2:function(a,b){return C.c.ag(a.a,b.a)},
$S:51}
O.iJ.prototype={
$2:function(a,b){return this.b.push(new A.bg(a,C.c.a3(b+3,4)*4))},
$S:6}
O.iK.prototype={
$2:function(a,b){return C.c.ag(a.a,b.a)},
$S:52}
O.iL.prototype={
$2:function(a,b){return this.b.push(new A.bi(a,C.c.a3(b+3,4)*4))},
$S:6}
O.iM.prototype={
$2:function(a,b){return C.c.ag(a.a,b.a)},
$S:53}
O.iz.prototype={
aE:function(){var s,r=this
r.cF()
s=r.f
$.F().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.ad(new D.G(r.b,s,1))}}}
O.eE.prototype={
aE:function(){},
d1:function(a){var s,r,q=this
if(!q.c.q(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.aE()
s=q.a
s.a=null
s.ad(null)}}}
O.iA.prototype={}
O.cZ.prototype={
d0:function(a){var s,r=this
if(!r.f.q(0,a)){s=r.f
r.f=a
r.a.ad(new D.G(r.b+".color",s,a))}},
aE:function(){this.cF()
this.d0(new V.V(1,1,1))},
sax:function(a,b){this.d1(new A.aI(!0,!1,!1))
this.d0(b)}}
O.iC.prototype={}
O.iD.prototype={
aE:function(){var s,r=this
r.cG()
s=r.ch
$.F().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.ad(new D.G(r.b+".refraction",s,1))}}}
O.iE.prototype={
d2:function(a){var s=this,r=s.ch
$.F().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.ad(new D.G(s.b+".shininess",r,a))}},
aE:function(){this.cG()
this.d2(100)}}
O.dh.prototype={}
X.ij.prototype={
gv:function(){var s=this.x
return s==null?this.x=D.W():s}}
X.eS.prototype={
gv:function(){var s=this.f
return s==null?this.f=D.W():s},
aP:function(a){var s=this.f
return s==null?null:s.K(a)},
ev:function(){return this.aP(null)},
saY:function(a){var s,r,q=this
if(!J.K(q.b,a)){s=q.b
if(s!=null)s.gv().L(0,q.gcL())
r=q.b
q.b=a
if(a!=null)a.gv().n(0,q.gcL())
q.aP(new D.G("mover",r,q.b))}}}
X.jb.prototype={}
V.aH.prototype={
bn:function(a){this.b=new P.il(C.S)
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
m=k.b.eH(o,0,o.length)
l=m==null?o:m
l=H.lx(l," ","&nbsp;")
C.Q.ea(n,l)
l=n.style
l.color=b
C.b.gay(k.d).push(n)}},
dW:function(a,b){var s,r,q,p=this
p.d=H.b([],t.F)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bu()
if(r!=null)for(q=new H.r(s),q=new P.bJ(r.cA(new H.bc(q,q.gl(q))).a());q.u();)p.bC(q.gB(q))}}
V.kN.prototype={
$1:function(a){var s=C.d.cz(this.a.ghL(),2)
if(s!=="0.00")P.lw(s+" fps")},
$S:54}
V.ej.prototype={
bC:function(a){var s=this
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
bu:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()\\-+*%!&|=.,?:;",h="OpenDoubleStr",g="CloseDoubleStr",f="EscDoubleStr",e="OpenSingleStr",d="CloseSingleStr",c="EscSingleStr",b="Slash",a="Comment",a0="EndComment",a1="MLComment",a2="MLCStar",a3="Whitespace",a4=L.jg()
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
r.aJ(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aJ(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aJ(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a4}}
V.eq.prototype={
bC:function(a){var s=this
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
bu:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()[]\\-+*%!&|=.,?:;",h="Slash",g="Comment",f="EndComment",e="Preprocess",d="EndPreprocess",c="Whitespace",b=L.jg()
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
r.aJ(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],p))
r.aJ(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],p))
r.aJ(0,"Builtin",H.b(["gl_FragColor","gl_Position"],p))
return b}}
V.er.prototype={
bC:function(a){var s=this,r="#111"
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
bu:function(){var s,r,q,p="Start",o="Id",n="Attr",m="Sym",l="OpenStr",k="CloseStr",j="Other",i=L.jg()
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
r.aJ(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],t.s))
r=i.k(0,n)
r.d=r.a.O(n)
r=i.k(0,j)
r.d=r.a.O(j)
return i}}
V.eU.prototype={
dW:function(a,b){this.d=H.b([],t.F)
this.N(C.b.j(b,"\n"),"#111")},
bC:function(a){},
bu:function(){return null}}
V.iW.prototype={
d9:function(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=l.a,j=P.mc().gcs().h(0,k)
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
o=J.b0(p)
o.gbs(p).n(0,q)
n=W.nO("radio")
n.checked=s
n.name=k
W.a5(n,"change",new V.iX(l,n,c,b),!1)
q.children.toString
q.appendChild(n).toString
m=r.createElement("span")
m.textContent=b
q.appendChild(m).toString
p=o.gbs(p)
r=r.createElement("br")
r.toString
p.n(0,r)},
bb:function(a,b,c){return this.d9(a,b,c,!1)},
d7:function(a){var s,r,q=P.mc(),p=t.N,o=P.nX(q.gcs(),p,p)
o.m(0,this.a,a)
s=q.e0(0,o)
p=window.history
p.toString
r=s.gc2()
p.replaceState(new P.k_([],[]).bF(""),"",r)}}
V.iX.prototype={
$1:function(a){var s=this,r=s.b.checked
if(r===!0){s.c.$0()
s.a.d7(s.d)}},
$S:3}
V.j4.prototype={
dc:function(a){var s,r,q,p,o,n,m=this.h0(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.r(C.b.hO(a)),s=new P.bJ(m.cA(new H.bc(s,s.gl(s))).a());s.u();){r=s.gB(s)
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
if(H.n1(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.k7(C.w,r,C.e,!1)
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
e8:function(a){var s,r,q,p=t.F,o=new V.ej("dart",H.b([],p))
o.bn("dart")
s=new V.eq("glsl",H.b([],p))
s.bn("glsl")
r=new V.er("html",H.b([],p))
r.bn("html")
q=C.b.hH(H.b([o,s,r],t.g6),new V.j7(a))
if(q!=null)return q
p=new V.eU("plain",H.b([],p))
p.bn("plain")
return p},
da:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.b([],t.t)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(C.a.Z(q,"+")){b2[r]=C.a.a9(q,1)
a8.push(1)
s=!0}else if(C.a.Z(q,"-")){b2[r]=C.a.a9(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.e8(b0)
p.dW(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m).toString
this.a.appendChild(n).toString
l=P.k7(C.w,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.lD()
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
hb:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
h0:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other",f=this.b
if(f!=null)return f
f=L.jg()
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
V.j6.prototype={
$1:function(a){P.m8(C.m,new V.j5(this.a))},
$S:3}
V.j5.prototype={
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
V.j7.prototype={
$1:function(a){var s=a==null?null:a.a
return s===this.a},
$S:55}
N.kF.prototype={
$0:function(){this.a.sac(0,F.lq(1,null,null,1))},
$S:2}
N.kG.prototype={
$0:function(){this.a.sac(0,F.lr(1,!0,!0,40,1))},
$S:2}
N.kH.prototype={
$0:function(){this.a.sac(0,F.lr(1,!0,!1,40,0))},
$S:2}
N.kI.prototype={
$0:function(){this.a.sac(0,F.ql(6,6))},
$S:2}
N.kJ.prototype={
$0:function(){this.a.sac(0,F.n2())},
$S:2}
N.kK.prototype={
$0:function(){this.a.sac(0,F.qf())},
$S:2}
N.kL.prototype={
$1:function(a){var s,r=this.a,q=this.b,p=q.a
p=p==null?null:p.c
s=t.s
r.da("Vertex Shader","glsl",0,H.b((p==null?"":p).split("\n"),s))
q=q.a
q=q==null?null:q.d
r.da("Fragment Shader","glsl",0,H.b((q==null?"":q).split("\n"),s))},
$S:1};(function aliases(){var s=J.a.prototype
s.ed=s.i
s=J.bb.prototype
s.ef=s.i
s=P.j.prototype
s.ee=s.bG
s=W.E.prototype
s.bJ=s.ah
s=W.dL.prototype
s.eg=s.av
s=K.cI.prototype
s.ec=s.aI
s.bK=s.i
s=O.eE.prototype
s.cF=s.aE
s=O.cZ.prototype
s.cG=s.aE})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"pj","nT",56)
r(P,"pY","ov",14)
r(P,"pZ","ow",14)
r(P,"q_","ox",14)
q(P,"mP","pT",2)
r(W,"ry","i7",58)
p(W,"q8",4,null,["$4"],["oy"],22,0)
p(W,"q9",4,null,["$4"],["oz"],22,0)
var j
o(j=E.by.prototype,"gdS",0,0,null,["$1","$0"],["dT","hY"],0,0)
o(j,"gdU",0,0,null,["$1","$0"],["dV","hZ"],0,0)
o(j,"gdQ",0,0,null,["$1","$0"],["dR","hX"],0,0)
o(j,"gdO",0,0,null,["$1","$0"],["dP","hU"],0,0)
n(j,"ghS","hT",9)
n(j,"ghV","hW",9)
o(j=E.fi.prototype,"gcH",0,0,null,["$1","$0"],["cJ","cI"],0,0)
m(j,"gia","e1",2)
l(j=X.fz.prototype,"gfi","fj",3)
l(j,"gf4","f5",3)
l(j,"gfc","fd",4)
l(j,"gfm","fn",24)
l(j,"gfk","fl",24)
l(j,"gfq","fs",4)
l(j,"gfv","fw",4)
l(j,"gfg","fh",4)
l(j,"gft","fu",4)
l(j,"gfe","ff",4)
l(j,"gfz","fA",36)
l(j,"gfB","fC",3)
l(j,"gfO","fP",12)
l(j,"gfK","fL",12)
l(j,"gfM","fN",12)
o(j=D.cO.prototype,"gcW",0,0,null,["$1","$0"],["cX","fo"],0,0)
l(j,"gfE","fF",38)
n(j,"geZ","f_",17)
n(j,"gfI","fJ",17)
o(D.c4.prototype,"gf6",0,0,null,["$1","$0"],["a0","f7"],0,0)
k(V.aq.prototype,"gl","bd",11)
k(V.D.prototype,"gl","bd",11)
k(V.dx.prototype,"gl","bd",11)
o(j=U.bV.prototype,"gbo",0,0,null,["$1","$0"],["a_","at"],0,0)
n(j,"gen","eo",20)
n(j,"gfG","fH",20)
o(j=U.dv.prototype,"gbo",0,0,null,["$1","$0"],["a_","at"],0,0)
l(j,"geS","eT",1)
l(j,"geU","eV",1)
l(j,"geW","eX",1)
l(j,"geN","eO",1)
l(j,"geP","eQ",1)
l(j,"gh7","h8",1)
l(j,"gh5","h6",1)
l(j,"gh3","h4",1)
o(j=M.em.prototype,"gau",0,0,null,["$1","$0"],["aB","ep"],0,0)
n(j,"gf8","f9",9)
n(j,"gfa","fb",9)
o(j=O.cY.prototype,"gcK",0,0,null,["$1","$0"],["ad","er"],0,0)
o(j,"gcY",0,0,null,["$1","$0"],["cZ","fV"],0,0)
n(j,"gf0","f1",21)
n(j,"gf2","f3",21)
o(X.eS.prototype,"gcL",0,0,null,["$1","$0"],["aP","ev"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.P,null)
q(P.P,[H.l0,J.a,J.ae,P.L,P.dE,P.j,H.bc,P.et,H.cF,H.fw,H.cy,H.jj,H.iU,H.hi,H.bw,P.M,H.it,H.eB,H.ew,H.aA,H.fV,P.dR,P.cj,P.bJ,P.fE,P.c6,P.fa,P.kb,P.dX,P.jS,P.dD,P.k,P.hx,P.cW,P.db,P.ee,P.im,P.k9,P.k8,P.Y,P.bx,P.eR,P.df,P.fS,P.ii,P.ag,P.a_,P.bK,P.jo,P.hc,W.hZ,W.kW,W.la,W.ci,W.N,W.d5,W.dL,W.hn,W.cG,W.jW,W.hy,P.jZ,P.ha,K.aN,K.cI,K.eY,K.u,L.f7,L.fj,L.fk,L.jf,O.al,O.d0,E.hU,E.by,E.bR,E.c1,E.fQ,E.iY,E.fi,Z.fC,Z.jK,Z.cv,Z.bW,Z.bI,D.hW,D.bT,D.Z,X.cw,X.ey,X.ir,X.ix,X.bf,X.iQ,X.jh,X.fz,D.c4,V.V,V.aP,V.ia,V.d_,V.bd,V.a1,V.R,V.bE,V.f_,V.aq,V.D,V.dx,U.dv,M.em,A.eb,A.hP,A.aI,A.b3,A.b5,A.bg,A.bi,A.iB,A.dn,A.dp,A.dr,A.du,A.a2,A.jm,F.at,F.ie,F.eA,F.is,F.eW,F.j2,F.dd,F.de,F.bF,F.cd,F.y,F.ce,F.cf,F.jG,F.jH,F.dy,O.dh,O.eE,O.iC,X.jb,X.eS,V.aH,V.iW,V.j4])
q(J.a,[J.eu,J.cM,J.bb,J.w,J.bY,J.ba,H.d1,H.a0,W.e,W.hN,W.bt,W.aQ,W.J,W.fJ,W.as,W.i1,W.i2,W.fL,W.cC,W.fN,W.i3,W.m,W.fT,W.au,W.ik,W.fX,W.cJ,W.iw,W.iN,W.h0,W.h1,W.aw,W.h2,W.h4,W.ax,W.h8,W.hb,W.aB,W.hd,W.aC,W.hj,W.ai,W.hp,W.jd,W.ap,W.hr,W.ji,W.jt,W.hz,W.hB,W.hD,W.hF,W.hH,P.aS,P.fZ,P.aV,P.h6,P.iV,P.hk,P.aW,P.ht,P.hQ,P.fG,P.da,P.hg])
q(J.bb,[J.eT,J.bH,J.aR])
r(J.ip,J.w)
q(J.bY,[J.cL,J.ev])
q(P.L,[H.cN,P.fn,H.ex,H.fv,H.f1,H.fR,P.ea,P.eO,P.aF,P.fx,P.fu,P.c5,P.ef,P.ei])
r(P.cR,P.dE)
q(P.cR,[H.cb,W.fH,W.a4,P.eo])
r(H.r,H.cb)
q(P.j,[H.n,H.aT,H.aZ,P.cK])
q(H.n,[H.cS,H.cP])
r(H.cD,H.aT)
q(P.et,[H.eC,H.fD])
r(H.cX,H.cS)
r(H.cz,H.cy)
r(H.d6,P.fn)
q(H.bw,[H.ff,H.iq,H.kz,H.kA,H.kB,P.jM,P.jL,P.jN,P.jO,P.k4,P.k3,P.kp,P.jU,P.jV,P.iu,P.iy,P.jx,P.jw,P.i4,P.i5,P.js,P.jp,P.jq,P.jr,P.k6,P.k5,P.ki,P.kj,P.kk,W.i6,W.iO,W.iP,W.j1,W.j9,W.jP,W.iS,W.iR,W.jX,W.jY,W.k2,W.ka,P.k0,P.k1,P.kg,P.kq,P.ig,P.ih,P.hR,E.iZ,E.j_,E.j0,E.jc,D.ic,D.id,F.kc,F.kr,F.kt,F.ku,F.kv,F.kP,F.kO,F.kQ,F.kE,F.ks,F.j3,F.jJ,F.jI,F.jD,F.jE,O.iF,O.iG,O.iH,O.iI,O.iJ,O.iK,O.iL,O.iM,V.kN,V.iX,V.j6,V.j5,V.j7,N.kF,N.kG,N.kH,N.kI,N.kJ,N.kK,N.kL])
q(H.ff,[H.f8,H.bQ])
r(P.cV,P.M)
q(P.cV,[H.X,W.fF])
r(H.c0,H.a0)
q(H.c0,[H.dG,H.dI])
r(H.dH,H.dG)
r(H.bC,H.dH)
r(H.dJ,H.dI)
r(H.d2,H.dJ)
q(H.d2,[H.eJ,H.eK,H.eL,H.eM,H.eN,H.d3,H.bD])
r(H.dS,H.fR)
r(P.dO,P.cK)
r(P.jT,P.kb)
r(P.dK,P.dX)
r(P.dC,P.dK)
r(P.dV,P.cW)
r(P.cc,P.dV)
q(P.ee,[P.hS,P.i8])
r(P.eh,P.fa)
q(P.eh,[P.hT,P.il,P.jy,P.jv])
r(P.ju,P.i8)
q(P.aF,[P.d9,P.es])
r(P.fK,P.bK)
q(W.e,[W.t,W.en,W.bZ,W.an,W.dM,W.ao,W.ad,W.dP,W.fB,W.cg,P.ed,P.b4])
q(W.t,[W.E,W.aG,W.ch])
q(W.E,[W.v,P.o])
q(W.v,[W.e8,W.e9,W.bP,W.bu,W.bv,W.b6,W.ep,W.bX,W.f2,W.bj,W.dg,W.fd,W.fe,W.c7])
r(W.hY,W.aQ)
r(W.cA,W.fJ)
q(W.as,[W.i_,W.i0])
r(W.fM,W.fL)
r(W.cB,W.fM)
r(W.fO,W.fN)
r(W.el,W.fO)
r(W.af,W.bt)
r(W.fU,W.fT)
r(W.bU,W.fU)
r(W.fY,W.fX)
r(W.bz,W.fY)
r(W.aY,W.m)
q(W.aY,[W.bA,W.am,W.bG])
r(W.eG,W.h0)
r(W.eH,W.h1)
r(W.h3,W.h2)
r(W.eI,W.h3)
r(W.h5,W.h4)
r(W.d4,W.h5)
r(W.h9,W.h8)
r(W.eV,W.h9)
r(W.f0,W.hb)
r(W.dN,W.dM)
r(W.f4,W.dN)
r(W.he,W.hd)
r(W.f5,W.he)
r(W.f9,W.hj)
r(W.hq,W.hp)
r(W.fg,W.hq)
r(W.dQ,W.dP)
r(W.fh,W.dQ)
r(W.hs,W.hr)
r(W.fl,W.hs)
r(W.bk,W.am)
r(W.hA,W.hz)
r(W.fI,W.hA)
r(W.dz,W.cC)
r(W.hC,W.hB)
r(W.fW,W.hC)
r(W.hE,W.hD)
r(W.dF,W.hE)
r(W.hG,W.hF)
r(W.hf,W.hG)
r(W.hI,W.hH)
r(W.hm,W.hI)
r(W.fP,W.fF)
r(W.dA,P.c6)
r(W.ho,W.dL)
r(P.k_,P.jZ)
r(P.a8,P.ha)
r(P.h_,P.fZ)
r(P.ez,P.h_)
r(P.h7,P.h6)
r(P.eP,P.h7)
r(P.c3,P.o)
r(P.hl,P.hk)
r(P.fb,P.hl)
r(P.hu,P.ht)
r(P.fm,P.hu)
r(P.ec,P.fG)
r(P.eQ,P.b4)
r(P.hh,P.hg)
r(P.f6,P.hh)
q(K.cI,[K.ac,L.dj])
q(E.hU,[Z.bS,A.dc])
q(D.Z,[D.b8,D.b9,D.G,X.eX])
q(X.eX,[X.cU,X.c_,X.di])
q(O.al,[D.cO,U.bV])
q(D.hW,[U.hX,U.ab])
r(U.cx,U.ab)
r(A.eD,A.dc)
q(A.a2,[A.c9,A.fq,A.fr,A.fs,A.fo,A.dk,A.fp,A.dl,A.dm,A.ft,A.dq,A.ca,A.ds,A.dt])
r(F.j8,F.ie)
r(F.jl,F.is)
r(F.jF,F.jG)
r(F.iT,F.jH)
r(O.cY,O.dh)
q(O.eE,[O.iz,O.iA,O.cZ])
q(O.cZ,[O.iD,O.iE])
r(X.ij,X.jb)
q(V.aH,[V.ej,V.eq,V.er,V.eU])
s(H.cb,H.fw)
s(H.dG,P.k)
s(H.dH,H.cF)
s(H.dI,P.k)
s(H.dJ,H.cF)
s(P.dE,P.k)
s(P.dV,P.hx)
s(P.dX,P.db)
s(W.fJ,W.hZ)
s(W.fL,P.k)
s(W.fM,W.N)
s(W.fN,P.k)
s(W.fO,W.N)
s(W.fT,P.k)
s(W.fU,W.N)
s(W.fX,P.k)
s(W.fY,W.N)
s(W.h0,P.M)
s(W.h1,P.M)
s(W.h2,P.k)
s(W.h3,W.N)
s(W.h4,P.k)
s(W.h5,W.N)
s(W.h8,P.k)
s(W.h9,W.N)
s(W.hb,P.M)
s(W.dM,P.k)
s(W.dN,W.N)
s(W.hd,P.k)
s(W.he,W.N)
s(W.hj,P.M)
s(W.hp,P.k)
s(W.hq,W.N)
s(W.dP,P.k)
s(W.dQ,W.N)
s(W.hr,P.k)
s(W.hs,W.N)
s(W.hz,P.k)
s(W.hA,W.N)
s(W.hB,P.k)
s(W.hC,W.N)
s(W.hD,P.k)
s(W.hE,W.N)
s(W.hF,P.k)
s(W.hG,W.N)
s(W.hH,P.k)
s(W.hI,W.N)
s(P.fZ,P.k)
s(P.h_,W.N)
s(P.h6,P.k)
s(P.h7,W.N)
s(P.hk,P.k)
s(P.hl,W.N)
s(P.ht,P.k)
s(P.hu,W.N)
s(P.fG,P.M)
s(P.hg,P.k)
s(P.hh,W.N)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",H:"double",a3:"num",l:"String",aa:"bool",ag:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([Z?])","~(Z)","~()","~(m)","~(am)","~(l,@)","~(i,i)","~(cd,H,H)","~(at)","~(i,j<by>)","~(@,@)","H()","~(bG)","ag()","~(~())","R(H)","@()","~(i,j<av>)","H(H)","H(H,H)","~(i,j<ab?>)","~(i,j<bd>)","aa(E,l,l,ci)","~(c8,l,i)","~(bA)","aa(aK)","aa(l)","~(~(Z))","aa(t)","l(i)","~(@)","ag(@,@)","~(a3)","~(t,t?)","l(l)","~(l,l)","~(bk)","@(@)","aa(j<av>)","c8(@,@)","~(l,l?)","i(i,i)","~(l[@])","~(l,i)","I<l,l>(I<l,l>,l)","~(P?,P?)","bS(i)","ag(~())","ag(@)","@(l)","i(b3,b3)","i(b5,b5)","i(bg,bg)","i(bi,bi)","~(je)","aa(aH?)","i(@,@)","@(@,l)","l(e)","E(t)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.oR(v.typeUniverse,JSON.parse('{"eT":"bb","bH":"bb","aR":"bb","qs":"m","qE":"m","qu":"b4","qt":"e","qL":"e","qO":"e","qr":"o","qF":"o","qv":"v","qI":"v","qG":"t","qD":"t","re":"ad","qz":"aY","qw":"aG","qP":"aG","qN":"am","qH":"bz","qA":"J","qB":"ai","qK":"bC","qJ":"a0","eu":{"aa":[]},"bb":{"lO":[]},"w":{"p":["1"],"n":["1"],"j":["1"],"z":["1"]},"ip":{"w":["1"],"p":["1"],"n":["1"],"j":["1"],"z":["1"]},"bY":{"H":[],"a3":[]},"cL":{"H":[],"i":[],"a3":[]},"ev":{"H":[],"a3":[]},"ba":{"l":[],"z":["@"]},"cN":{"L":[]},"r":{"k":["i"],"p":["i"],"n":["i"],"j":["i"],"k.E":"i"},"n":{"j":["1"]},"cS":{"n":["1"],"j":["1"]},"aT":{"j":["2"],"j.E":"2"},"cD":{"aT":["1","2"],"n":["2"],"j":["2"],"j.E":"2"},"cX":{"cS":["2"],"n":["2"],"j":["2"],"j.E":"2"},"aZ":{"j":["1"],"j.E":"1"},"cb":{"k":["1"],"p":["1"],"n":["1"],"j":["1"]},"cy":{"I":["1","2"]},"cz":{"I":["1","2"]},"d6":{"L":[]},"ex":{"L":[]},"fv":{"L":[]},"bw":{"cH":[]},"ff":{"cH":[]},"f8":{"cH":[]},"bQ":{"cH":[]},"f1":{"L":[]},"X":{"M":["1","2"],"I":["1","2"],"M.V":"2"},"cP":{"n":["1"],"j":["1"],"j.E":"1"},"ew":{"m0":[]},"c0":{"A":["1"],"a0":[],"z":["1"]},"bC":{"k":["H"],"A":["H"],"p":["H"],"a0":[],"n":["H"],"z":["H"],"j":["H"],"k.E":"H"},"d2":{"k":["i"],"A":["i"],"p":["i"],"a0":[],"n":["i"],"z":["i"],"j":["i"]},"eJ":{"k":["i"],"A":["i"],"p":["i"],"a0":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"eK":{"k":["i"],"A":["i"],"p":["i"],"a0":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"eL":{"k":["i"],"A":["i"],"p":["i"],"a0":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"eM":{"k":["i"],"A":["i"],"p":["i"],"a0":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"eN":{"k":["i"],"A":["i"],"p":["i"],"a0":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"d3":{"k":["i"],"A":["i"],"p":["i"],"a0":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"bD":{"k":["i"],"c8":[],"A":["i"],"p":["i"],"a0":[],"n":["i"],"z":["i"],"j":["i"],"k.E":"i"},"fR":{"L":[]},"dS":{"L":[]},"dR":{"je":[]},"dO":{"j":["1"],"j.E":"1"},"dC":{"db":["1"],"n":["1"],"j":["1"]},"cK":{"j":["1"]},"cR":{"k":["1"],"p":["1"],"n":["1"],"j":["1"]},"cV":{"M":["1","2"],"I":["1","2"]},"M":{"I":["1","2"]},"cW":{"I":["1","2"]},"cc":{"I":["1","2"]},"dK":{"db":["1"],"n":["1"],"j":["1"]},"H":{"a3":[]},"i":{"a3":[]},"p":{"n":["1"],"j":["1"]},"ea":{"L":[]},"fn":{"L":[]},"eO":{"L":[]},"aF":{"L":[]},"d9":{"L":[]},"es":{"L":[]},"fx":{"L":[]},"fu":{"L":[]},"c5":{"L":[]},"ef":{"L":[]},"eR":{"L":[]},"df":{"L":[]},"ei":{"L":[]},"bK":{"fy":[]},"hc":{"fy":[]},"fK":{"fy":[]},"v":{"E":[],"t":[],"e":[]},"b6":{"E":[],"t":[],"e":[]},"E":{"t":[],"e":[]},"af":{"bt":[]},"bA":{"m":[]},"am":{"m":[]},"t":{"e":[]},"an":{"e":[]},"ao":{"e":[]},"ad":{"e":[]},"bG":{"m":[]},"aY":{"m":[]},"bk":{"am":[],"m":[]},"ci":{"aK":[]},"e8":{"E":[],"t":[],"e":[]},"e9":{"E":[],"t":[],"e":[]},"bP":{"E":[],"t":[],"e":[]},"bu":{"E":[],"t":[],"e":[]},"bv":{"E":[],"t":[],"e":[]},"aG":{"t":[],"e":[]},"cB":{"k":["a8<a3>"],"p":["a8<a3>"],"A":["a8<a3>"],"n":["a8<a3>"],"j":["a8<a3>"],"z":["a8<a3>"],"k.E":"a8<a3>"},"cC":{"a8":["a3"]},"el":{"k":["l"],"p":["l"],"A":["l"],"n":["l"],"j":["l"],"z":["l"],"k.E":"l"},"fH":{"k":["E"],"p":["E"],"n":["E"],"j":["E"],"k.E":"E"},"bU":{"k":["af"],"p":["af"],"A":["af"],"n":["af"],"j":["af"],"z":["af"],"k.E":"af"},"en":{"e":[]},"ep":{"E":[],"t":[],"e":[]},"bz":{"k":["t"],"p":["t"],"A":["t"],"n":["t"],"j":["t"],"z":["t"],"k.E":"t"},"bX":{"E":[],"t":[],"e":[]},"bZ":{"e":[]},"eG":{"M":["l","@"],"I":["l","@"],"M.V":"@"},"eH":{"M":["l","@"],"I":["l","@"],"M.V":"@"},"eI":{"k":["aw"],"p":["aw"],"A":["aw"],"n":["aw"],"j":["aw"],"z":["aw"],"k.E":"aw"},"a4":{"k":["t"],"p":["t"],"n":["t"],"j":["t"],"k.E":"t"},"d4":{"k":["t"],"p":["t"],"A":["t"],"n":["t"],"j":["t"],"z":["t"],"k.E":"t"},"eV":{"k":["ax"],"p":["ax"],"A":["ax"],"n":["ax"],"j":["ax"],"z":["ax"],"k.E":"ax"},"f0":{"M":["l","@"],"I":["l","@"],"M.V":"@"},"f2":{"E":[],"t":[],"e":[]},"f4":{"k":["an"],"p":["an"],"A":["an"],"e":[],"n":["an"],"j":["an"],"z":["an"],"k.E":"an"},"f5":{"k":["aB"],"p":["aB"],"A":["aB"],"n":["aB"],"j":["aB"],"z":["aB"],"k.E":"aB"},"f9":{"M":["l","l"],"I":["l","l"],"M.V":"l"},"bj":{"E":[],"t":[],"e":[]},"dg":{"E":[],"t":[],"e":[]},"fd":{"E":[],"t":[],"e":[]},"fe":{"E":[],"t":[],"e":[]},"c7":{"E":[],"t":[],"e":[]},"fg":{"k":["ad"],"p":["ad"],"A":["ad"],"n":["ad"],"j":["ad"],"z":["ad"],"k.E":"ad"},"fh":{"k":["ao"],"p":["ao"],"A":["ao"],"e":[],"n":["ao"],"j":["ao"],"z":["ao"],"k.E":"ao"},"fl":{"k":["ap"],"p":["ap"],"A":["ap"],"n":["ap"],"j":["ap"],"z":["ap"],"k.E":"ap"},"fB":{"e":[]},"cg":{"e":[]},"ch":{"t":[],"e":[]},"fI":{"k":["J"],"p":["J"],"A":["J"],"n":["J"],"j":["J"],"z":["J"],"k.E":"J"},"dz":{"a8":["a3"]},"fW":{"k":["au?"],"p":["au?"],"A":["au?"],"n":["au?"],"j":["au?"],"z":["au?"],"k.E":"au?"},"dF":{"k":["t"],"p":["t"],"A":["t"],"n":["t"],"j":["t"],"z":["t"],"k.E":"t"},"hf":{"k":["aC"],"p":["aC"],"A":["aC"],"n":["aC"],"j":["aC"],"z":["aC"],"k.E":"aC"},"hm":{"k":["ai"],"p":["ai"],"A":["ai"],"n":["ai"],"j":["ai"],"z":["ai"],"k.E":"ai"},"fF":{"M":["l","l"],"I":["l","l"]},"fP":{"M":["l","l"],"I":["l","l"],"M.V":"l"},"dA":{"c6":["1"]},"d5":{"aK":[]},"dL":{"aK":[]},"ho":{"aK":[]},"hn":{"aK":[]},"eo":{"k":["E"],"p":["E"],"n":["E"],"j":["E"],"k.E":"E"},"a8":{"ha":["1"]},"ez":{"k":["aS"],"p":["aS"],"n":["aS"],"j":["aS"],"k.E":"aS"},"eP":{"k":["aV"],"p":["aV"],"n":["aV"],"j":["aV"],"k.E":"aV"},"c3":{"o":[],"E":[],"t":[],"e":[]},"fb":{"k":["l"],"p":["l"],"n":["l"],"j":["l"],"k.E":"l"},"o":{"E":[],"t":[],"e":[]},"fm":{"k":["aW"],"p":["aW"],"n":["aW"],"j":["aW"],"k.E":"aW"},"ec":{"M":["l","@"],"I":["l","@"],"M.V":"@"},"ed":{"e":[]},"b4":{"e":[]},"eQ":{"e":[]},"f6":{"k":["I<@,@>"],"p":["I<@,@>"],"n":["I<@,@>"],"j":["I<@,@>"],"k.E":"I<@,@>"},"cI":{"aU":[]},"aN":{"aU":[]},"ac":{"aU":[]},"eY":{"aU":[]},"u":{"aU":[]},"dj":{"aU":[]},"al":{"j":["1"],"al.T":"1"},"b8":{"Z":[]},"b9":{"Z":[]},"G":{"Z":[]},"cU":{"Z":[]},"c_":{"Z":[]},"eX":{"Z":[]},"di":{"Z":[]},"ny":{"av":[]},"nK":{"av":[]},"o0":{"av":[]},"c4":{"av":[]},"cO":{"al":["av"],"j":["av"],"al.T":"av"},"cx":{"ab":[]},"bV":{"al":["ab?"],"ab":[],"j":["ab?"],"al.T":"ab?"},"dv":{"ab":[]},"c9":{"a2":[]},"ca":{"a2":[]},"eD":{"dc":[]},"fq":{"a2":[]},"fr":{"a2":[]},"fs":{"a2":[]},"fo":{"a2":[]},"dk":{"a2":[]},"fp":{"a2":[]},"dl":{"a2":[]},"dm":{"a2":[]},"ft":{"a2":[]},"dq":{"a2":[]},"ds":{"a2":[]},"dt":{"a2":[]},"cY":{"dh":[]},"ej":{"aH":[]},"eq":{"aH":[]},"er":{"aH":[]},"eU":{"aH":[]},"c8":{"p":["i"],"n":["i"],"j":["i"]}}'))
H.oQ(v.typeUniverse,JSON.parse('{"ae":1,"n":1,"bc":1,"eC":2,"fD":1,"cF":1,"fw":1,"cb":1,"cy":2,"eB":1,"c0":1,"c6":1,"bJ":1,"fa":2,"dD":1,"cK":1,"cR":1,"cV":2,"hx":2,"cW":2,"dK":1,"dE":1,"dV":2,"dX":1,"ee":2,"eh":2,"et":1,"dA":1,"N":1,"cG":1,"b8":1,"b9":1,"G":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.ls
return{cR:s("bP"),fK:s("bt"),Y:s("bu"),eT:s("bS"),ed:s("cv"),gA:s("bv"),gw:s("n<@>"),h:s("E"),l:s("by"),bU:s("L"),aD:s("m"),c8:s("af"),bX:s("bU"),b:s("cH"),gb:s("cJ"),gk:s("bX"),eu:s("w<eb>"),i:s("w<ny>"),cn:s("w<b3>"),U:s("w<nK>"),fD:s("w<b5>"),C:s("w<b6>"),u:s("w<at>"),fv:s("w<bW>"),e:s("w<av>"),L:s("w<eA>"),F:s("w<p<b6>>"),z:s("w<aU>"),fA:s("w<bd>"),Q:s("w<aK>"),q:s("w<eW>"),cG:s("w<a1>"),eg:s("w<bg>"),o:s("w<o0>"),D:s("w<c4>"),c3:s("w<bi>"),g9:s("w<c6<P>>"),s:s("w<l>"),ga:s("w<qQ>"),gT:s("w<ap>"),ab:s("w<dj>"),gN:s("w<c8>"),dC:s("w<a2>"),c:s("w<dn>"),V:s("w<dp>"),B:s("w<dr>"),J:s("w<du>"),k:s("w<cd>"),n:s("w<H>"),gn:s("w<@>"),t:s("w<i>"),g6:s("w<aH?>"),eJ:s("w<ab?>"),bc:s("w<dh?>"),p:s("w<ca?>"),a:s("w<~(Z)>"),aP:s("z<@>"),T:s("cM"),eH:s("lO"),M:s("aR"),aU:s("A<@>"),fX:s("X<i,aa>"),y:s("X<i,i>"),O:s("p<dn>"),d:s("p<dp>"),m:s("p<dr>"),R:s("p<du>"),r:s("p<@>"),bv:s("cU"),f:s("I<@,@>"),dv:s("cX<l,l>"),gc:s("bd"),bK:s("bZ"),Z:s("c_"),bZ:s("d1"),dE:s("a0"),bm:s("bD"),P:s("ag"),K:s("P"),I:s("a8<a3>"),fJ:s("m0"),ew:s("c3"),fg:s("dc"),N:s("l"),g7:s("o"),bY:s("bj"),aW:s("c7"),aF:s("je"),bJ:s("fj"),dr:s("di"),v:s("dk"),w:s("c9"),g:s("dl"),x:s("dm"),E:s("dq"),j:s("ca"),G:s("ds"),bz:s("dt"),ak:s("bH"),dw:s("cc<l,l>"),dD:s("fy"),h9:s("ch"),ac:s("a4"),cJ:s("aa"),gR:s("H"),A:s("@"),S:s("i"),aw:s("0&*"),_:s("P*"),bG:s("lN<ag>?"),X:s("P?"),gW:s("da?"),dl:s("f7?"),f7:s("fk?"),W:s("c9?"),H:s("a3"),h2:s("~(Z)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.p=W.bu.prototype
C.l=W.bv.prototype
C.Q=W.b6.prototype
C.T=J.a.prototype
C.b=J.w.prototype
C.c=J.cL.prototype
C.U=J.cM.prototype
C.d=J.bY.prototype
C.a=J.ba.prototype
C.V=J.aR.prototype
C.a_=H.bD.prototype
C.B=J.eT.prototype
C.C=W.dg.prototype
C.o=J.bH.prototype
C.D=W.bk.prototype
C.E=W.cg.prototype
C.F=new E.bR("Browser.chrome")
C.q=new E.bR("Browser.firefox")
C.r=new E.bR("Browser.edge")
C.G=new E.bR("Browser.other")
C.a5=new P.hT()
C.H=new P.hS()
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

C.O=new P.eR()
C.e=new P.ju()
C.P=new P.jy()
C.f=new P.jT()
C.m=new P.bx(0)
C.R=new P.bx(5e6)
C.S=new P.im("element",!1,!1,!1)
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
C.Z=new H.cz(0,{},C.v,H.ls("cz<l,l>"))
C.a0=new E.c1("OperatingSystem.windows")
C.A=new E.c1("OperatingSystem.mac")
C.a1=new E.c1("OperatingSystem.linux")
C.a2=new E.c1("OperatingSystem.other")
C.a3=new P.jv(!1)
C.a4=new P.cj(null,2)})();(function staticFields(){$.jQ=null
$.aO=0
$.cu=null
$.lF=null
$.mU=null
$.mO=null
$.n_=null
$.kw=null
$.kD=null
$.lu=null
$.cm=null
$.e_=null
$.e0=null
$.lm=!1
$.aL=C.f
$.aj=H.b([],H.ls("w<P>"))
$.b7=null
$.kU=null
$.lM=null
$.lL=null
$.dB=P.T(t.N,t.b)
$.i9=null
$.lR=null
$.lV=null
$.ah=null
$.ay=null
$.m2=null
$.jz=null
$.mj=null
$.mi=null
$.jA=null
$.jB=null
$.jC=null
$.mh=null
$.ml=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"qC","n6",function(){return H.q7("_$dart_dartClosure")})
s($,"qR","n8",function(){return H.aX(H.jk({
toString:function(){return"$receiver$"}}))})
s($,"qS","n9",function(){return H.aX(H.jk({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"qT","na",function(){return H.aX(H.jk(null))})
s($,"qU","nb",function(){return H.aX(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"qX","ne",function(){return H.aX(H.jk(void 0))})
s($,"qY","nf",function(){return H.aX(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"qW","nd",function(){return H.aX(H.ma(null))})
s($,"qV","nc",function(){return H.aX(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"r_","nh",function(){return H.aX(H.ma(void 0))})
s($,"qZ","ng",function(){return H.aX(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"rf","lz",function(){return P.ou()})
s($,"r0","ni",function(){return new P.jx().$0()})
s($,"r1","nj",function(){return new P.jw().$0()})
s($,"rg","nn",function(){return new Int8Array(H.cl(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"rj","np",function(){return P.oc("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"rw","nq",function(){return P.pb()})
s($,"rh","no",function(){return P.lP(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"r8","nm",function(){return Z.aD(0)})
s($,"r2","nk",function(){return Z.aD(511)})
s($,"ra","bs",function(){return Z.aD(1)})
s($,"r9","br",function(){return Z.aD(2)})
s($,"r4","bq",function(){return Z.aD(4)})
s($,"rb","bN",function(){return Z.aD(8)})
s($,"rc","bO",function(){return Z.aD(16)})
s($,"r5","e5",function(){return Z.aD(32)})
s($,"r6","e6",function(){return Z.aD(64)})
s($,"r7","nl",function(){return Z.aD(96)})
s($,"rd","cr",function(){return Z.aD(128)})
s($,"r3","bp",function(){return Z.aD(256)})
s($,"qy","n5",function(){return new V.ia()})
r($,"qx","F",function(){return $.n5()})
r($,"qM","n7",function(){var q=V.lW(),p=V.mk(),o=$.mh,n=(o==null?$.mh=V.or(0,0,-1):o).H(),m=p.aG(n).H(),l=n.aG(m),k=V.os(q)
return V.be(m.a,l.a,n.a,m.b4(0).aa(k),m.b,l.b,n.b,l.b4(0).aa(k),m.c,l.c,n.c,n.b4(0).aa(k),0,0,0,1)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.d1,DataView:H.a0,ArrayBufferView:H.a0,Float32Array:H.bC,Float64Array:H.bC,Int16Array:H.eJ,Int32Array:H.eK,Int8Array:H.eL,Uint16Array:H.eM,Uint32Array:H.eN,Uint8ClampedArray:H.d3,CanvasPixelArray:H.d3,Uint8Array:H.bD,HTMLAudioElement:W.v,HTMLBRElement:W.v,HTMLButtonElement:W.v,HTMLContentElement:W.v,HTMLDListElement:W.v,HTMLDataElement:W.v,HTMLDataListElement:W.v,HTMLDetailsElement:W.v,HTMLDialogElement:W.v,HTMLEmbedElement:W.v,HTMLFieldSetElement:W.v,HTMLHRElement:W.v,HTMLHeadElement:W.v,HTMLHeadingElement:W.v,HTMLHtmlElement:W.v,HTMLIFrameElement:W.v,HTMLImageElement:W.v,HTMLLIElement:W.v,HTMLLabelElement:W.v,HTMLLegendElement:W.v,HTMLLinkElement:W.v,HTMLMapElement:W.v,HTMLMediaElement:W.v,HTMLMenuElement:W.v,HTMLMetaElement:W.v,HTMLMeterElement:W.v,HTMLModElement:W.v,HTMLOListElement:W.v,HTMLObjectElement:W.v,HTMLOptGroupElement:W.v,HTMLOptionElement:W.v,HTMLOutputElement:W.v,HTMLParagraphElement:W.v,HTMLParamElement:W.v,HTMLPictureElement:W.v,HTMLPreElement:W.v,HTMLProgressElement:W.v,HTMLQuoteElement:W.v,HTMLScriptElement:W.v,HTMLShadowElement:W.v,HTMLSlotElement:W.v,HTMLSourceElement:W.v,HTMLSpanElement:W.v,HTMLStyleElement:W.v,HTMLTableCaptionElement:W.v,HTMLTableColElement:W.v,HTMLTextAreaElement:W.v,HTMLTimeElement:W.v,HTMLTitleElement:W.v,HTMLTrackElement:W.v,HTMLUListElement:W.v,HTMLUnknownElement:W.v,HTMLVideoElement:W.v,HTMLDirectoryElement:W.v,HTMLFontElement:W.v,HTMLFrameElement:W.v,HTMLFrameSetElement:W.v,HTMLMarqueeElement:W.v,HTMLElement:W.v,AccessibleNodeList:W.hN,HTMLAnchorElement:W.e8,HTMLAreaElement:W.e9,HTMLBaseElement:W.bP,Blob:W.bt,HTMLBodyElement:W.bu,HTMLCanvasElement:W.bv,CDATASection:W.aG,CharacterData:W.aG,Comment:W.aG,ProcessingInstruction:W.aG,Text:W.aG,CSSPerspective:W.hY,CSSCharsetRule:W.J,CSSConditionRule:W.J,CSSFontFaceRule:W.J,CSSGroupingRule:W.J,CSSImportRule:W.J,CSSKeyframeRule:W.J,MozCSSKeyframeRule:W.J,WebKitCSSKeyframeRule:W.J,CSSKeyframesRule:W.J,MozCSSKeyframesRule:W.J,WebKitCSSKeyframesRule:W.J,CSSMediaRule:W.J,CSSNamespaceRule:W.J,CSSPageRule:W.J,CSSRule:W.J,CSSStyleRule:W.J,CSSSupportsRule:W.J,CSSViewportRule:W.J,CSSStyleDeclaration:W.cA,MSStyleCSSProperties:W.cA,CSS2Properties:W.cA,CSSImageValue:W.as,CSSKeywordValue:W.as,CSSNumericValue:W.as,CSSPositionValue:W.as,CSSResourceValue:W.as,CSSUnitValue:W.as,CSSURLImageValue:W.as,CSSStyleValue:W.as,CSSMatrixComponent:W.aQ,CSSRotation:W.aQ,CSSScale:W.aQ,CSSSkew:W.aQ,CSSTranslation:W.aQ,CSSTransformComponent:W.aQ,CSSTransformValue:W.i_,CSSUnparsedValue:W.i0,DataTransferItemList:W.i1,HTMLDivElement:W.b6,DOMException:W.i2,ClientRectList:W.cB,DOMRectList:W.cB,DOMRectReadOnly:W.cC,DOMStringList:W.el,DOMTokenList:W.i3,Element:W.E,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,SubmitEvent:W.m,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.af,FileList:W.bU,FileWriter:W.en,HTMLFormElement:W.ep,Gamepad:W.au,History:W.ik,HTMLCollection:W.bz,HTMLFormControlsCollection:W.bz,HTMLOptionsCollection:W.bz,ImageData:W.cJ,HTMLInputElement:W.bX,KeyboardEvent:W.bA,Location:W.iw,MediaList:W.iN,MessagePort:W.bZ,MIDIInputMap:W.eG,MIDIOutputMap:W.eH,MimeType:W.aw,MimeTypeArray:W.eI,PointerEvent:W.am,MouseEvent:W.am,DragEvent:W.am,Document:W.t,DocumentFragment:W.t,HTMLDocument:W.t,ShadowRoot:W.t,XMLDocument:W.t,DocumentType:W.t,Node:W.t,NodeList:W.d4,RadioNodeList:W.d4,Plugin:W.ax,PluginArray:W.eV,RTCStatsReport:W.f0,HTMLSelectElement:W.f2,SourceBuffer:W.an,SourceBufferList:W.f4,SpeechGrammar:W.aB,SpeechGrammarList:W.f5,SpeechRecognitionResult:W.aC,Storage:W.f9,CSSStyleSheet:W.ai,StyleSheet:W.ai,HTMLTableCellElement:W.bj,HTMLTableDataCellElement:W.bj,HTMLTableHeaderCellElement:W.bj,HTMLTableElement:W.dg,HTMLTableRowElement:W.fd,HTMLTableSectionElement:W.fe,HTMLTemplateElement:W.c7,TextTrack:W.ao,TextTrackCue:W.ad,VTTCue:W.ad,TextTrackCueList:W.fg,TextTrackList:W.fh,TimeRanges:W.jd,Touch:W.ap,TouchEvent:W.bG,TouchList:W.fl,TrackDefaultList:W.ji,CompositionEvent:W.aY,FocusEvent:W.aY,TextEvent:W.aY,UIEvent:W.aY,URL:W.jt,VideoTrackList:W.fB,WheelEvent:W.bk,Window:W.cg,DOMWindow:W.cg,Attr:W.ch,CSSRuleList:W.fI,ClientRect:W.dz,DOMRect:W.dz,GamepadList:W.fW,NamedNodeMap:W.dF,MozNamedAttrMap:W.dF,SpeechRecognitionResultList:W.hf,StyleSheetList:W.hm,SVGLength:P.aS,SVGLengthList:P.ez,SVGNumber:P.aV,SVGNumberList:P.eP,SVGPointList:P.iV,SVGScriptElement:P.c3,SVGStringList:P.fb,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,SVGTransform:P.aW,SVGTransformList:P.fm,AudioBuffer:P.hQ,AudioParamMap:P.ec,AudioTrackList:P.ed,AudioContext:P.b4,webkitAudioContext:P.b4,BaseAudioContext:P.b4,OfflineAudioContext:P.eQ,WebGL2RenderingContext:P.da,SQLResultSetRowList:P.f6})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c0.$nativeSuperclassTag="ArrayBufferView"
H.dG.$nativeSuperclassTag="ArrayBufferView"
H.dH.$nativeSuperclassTag="ArrayBufferView"
H.bC.$nativeSuperclassTag="ArrayBufferView"
H.dI.$nativeSuperclassTag="ArrayBufferView"
H.dJ.$nativeSuperclassTag="ArrayBufferView"
H.d2.$nativeSuperclassTag="ArrayBufferView"
W.dM.$nativeSuperclassTag="EventTarget"
W.dN.$nativeSuperclassTag="EventTarget"
W.dP.$nativeSuperclassTag="EventTarget"
W.dQ.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=N.qh
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
