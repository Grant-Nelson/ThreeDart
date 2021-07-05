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
a[c]=function(){a[c]=function(){H.qK(b)}
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
if(a[b]!==s)H.qL(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lP"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lP"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lP(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={lq:function lq(){},
ls:function(a){return new H.d1("Field '"+a+"' has been assigned during initialization.")},
kT:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
jv:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
oF:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
ql:function(a,b,c){return a},
oi:function(a,b,c,d){if(t.gw.b(a))return new H.cS(a,b,c.N("@<0>").bn(d).N("cS<1,2>"))
return new H.b2(a,b,c.N("@<0>").bn(d).N("b2<1,2>"))},
iJ:function(){return new P.ci("No element")},
o9:function(){return new P.ci("Too many elements")},
oC:function(a,b){H.fk(a,0,J.aV(a)-1,b)},
fk:function(a,b,c,d){if(c-b<=32)H.oB(a,b,c,d)
else H.oA(a,b,c,d)},
oB:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.cE(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.aw()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
oA:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.a9(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a9(a4+a5,2),f=g-j,e=g+j,d=J.cE(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.aw()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aw()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.aw()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aw()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.aw()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.aw()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.aw()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aw()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aw()
if(a2>0){s=a1
a1=a0
a0=s}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.G(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
H.fk(a3,a4,r-2,a6)
H.fk(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.G(a6.$2(d.h(a3,r),b),0);)++r
for(;J.G(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}H.fk(a3,r,q,a6)}else H.fk(a3,r,q,a6)},
d1:function d1(a){this.a=a},
r:function r(a){this.a=a},
n:function n(){},
d6:function d6(){},
bm:function bm(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b2:function b2(a,b,c){this.a=a
this.b=b
this.$ti=c},
cS:function cS(a,b,c){this.a=a
this.b=b
this.$ti=c},
eU:function eU(a,b){this.a=null
this.b=a
this.c=b},
da:function da(a,b,c){this.a=a
this.b=b
this.$ti=c},
bb:function bb(a,b,c){this.a=a
this.b=b
this.$ti=c},
fV:function fV(a,b){this.a=a
this.b=b},
cV:function cV(){},
fO:function fO(){},
cp:function cp(){},
o2:function(){throw H.c(P.C("Cannot modify unmodifiable Map"))},
np:function(a){var s,r=H.no(a)
if(r!=null)return r
s="minified:"+a
return s},
ni:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
z:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cG(a)
return s},
dn:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
mj:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.d(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.c(P.ab(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.H(q,o)|32)>r)return n}return parseInt(a,b)},
dp:function(a){return H.ol(a)},
ol:function(a){var s,r,q,p
if(a instanceof P.R)return H.au(H.bd(a),null)
if(J.em(a)===C.T||t.ak.b(a)){s=C.t(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.au(H.bd(a),null)},
om:function(){if(!!self.location)return self.location.href
return null},
mi:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
ou:function(a){var s,r,q,p=H.a([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.p)(a),++r){q=a[r]
if(!H.kH(q))throw H.c(H.el(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.b7(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.el(q))}return H.mi(p)},
mk:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.kH(q))throw H.c(H.el(q))
if(q<0)throw H.c(H.el(q))
if(q>65535)return H.ou(a)}return H.mi(a)},
ov:function(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
az:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.b7(s,10)|55296)>>>0,s&1023|56320)}}throw H.c(P.ab(a,0,1114111,null,null))},
ce:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ot:function(a){var s=H.ce(a).getFullYear()+0
return s},
or:function(a){var s=H.ce(a).getMonth()+1
return s},
on:function(a){var s=H.ce(a).getDate()+0
return s},
oo:function(a){var s=H.ce(a).getHours()+0
return s},
oq:function(a){var s=H.ce(a).getMinutes()+0
return s},
os:function(a){var s=H.ce(a).getSeconds()+0
return s},
op:function(a){var s=H.ce(a).getMilliseconds()+0
return s},
ng:function(a){throw H.c(H.el(a))},
d:function(a,b){if(a==null)J.aV(a)
throw H.c(H.cC(a,b))},
cC:function(a,b){var s,r="index"
if(!H.kH(b))return new P.aH(!0,b,r,null)
s=J.aV(a)
if(b<0||b>=s)return P.Q(b,a,r,null,s)
return P.fe(b,r)},
qq:function(a,b,c){if(a>c)return P.ab(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.ab(b,a,c,"end",null)
return new P.aH(!0,b,"end",null)},
el:function(a){return new P.aH(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.f3()
s=new Error()
s.dartException=a
r=H.qM
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qM:function(){return J.cG(this.dartException)},
h:function(a){throw H.c(a)},
p:function(a){throw H.c(P.aK(a))},
b8:function(a){var s,r,q,p,o,n
a=H.nl(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jG(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
jH:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mw:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
lr:function(a,b){var s=b==null,r=s?null:b.method
return new H.eO(a,r,s?null:b.receiver)},
an:function(a){if(a==null)return new H.je(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bU(a,a.dartException)
return H.qh(a)},
bU:function(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
qh:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.b7(r,16)&8191)===10)switch(q){case 438:return H.bU(a,H.lr(H.z(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.z(s)+" (Error "+q+")"
return H.bU(a,new H.dm(p,e))}}if(a instanceof TypeError){o=$.nt()
n=$.nu()
m=$.nv()
l=$.nw()
k=$.nz()
j=$.nA()
i=$.ny()
$.nx()
h=$.nC()
g=$.nB()
f=o.au(s)
if(f!=null)return H.bU(a,H.lr(s,f))
else{f=n.au(s)
if(f!=null){f.method="call"
return H.bU(a,H.lr(s,f))}else{f=m.au(s)
if(f==null){f=l.au(s)
if(f==null){f=k.au(s)
if(f==null){f=j.au(s)
if(f==null){f=i.au(s)
if(f==null){f=l.au(s)
if(f==null){f=h.au(s)
if(f==null){f=g.au(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bU(a,new H.dm(s,f==null?e:f.method))}}return H.bU(a,new H.fN(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.dw()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bU(a,new P.aH(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.dw()
return a},
lS:function(a){var s
if(a==null)return new H.hA(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.hA(a)},
qs:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
qA:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.f("Unsupported number of arguments for wrapped closure"))},
cB:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qA)
a.$identity=s
return s},
o1:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.fp().constructor.prototype):Object.create(new H.bY(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aX
if(typeof r!=="number")return r.V()
$.aX=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.m5(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.nY(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.m5(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
nY:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.nf,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.nW:H.nV
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
nZ:function(a,b,c,d){var s=H.m4
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
m5:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.o0(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nZ(r,!p,s,b)
if(r===0){p=$.aX
if(typeof p!=="number")return p.V()
$.aX=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.cH
return new Function(p+(o==null?$.cH=H.ic("self"):o)+";return "+n+"."+H.z(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aX
if(typeof p!=="number")return p.V()
$.aX=p+1
m+=p
p="return function("+m+"){return this."
o=$.cH
return new Function(p+(o==null?$.cH=H.ic("self"):o)+"."+H.z(s)+"("+m+");}")()},
o_:function(a,b,c,d){var s=H.m4,r=H.nX
switch(b?-1:a){case 0:throw H.c(new H.fh("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
o0:function(a,b){var s,r,q,p,o,n,m,l=$.cH
if(l==null)l=$.cH=H.ic("self")
s=$.m3
if(s==null)s=$.m3=H.ic("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.o_(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.z(r)+"(this."+s+");"
n=$.aX
if(typeof n!=="number")return n.V()
$.aX=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.z(r)+"(this."+s+", "+m+");"
n=$.aX
if(typeof n!=="number")return n.V()
$.aX=n+1
return new Function(o+n+"}")()},
lP:function(a,b,c,d,e,f,g){return H.o1(a,b,c,d,!!e,!!f,g)},
nV:function(a,b){return H.hO(v.typeUniverse,H.bd(a.a),b)},
nW:function(a,b){return H.hO(v.typeUniverse,H.bd(a.c),b)},
m4:function(a){return a.a},
nX:function(a){return a.c},
ic:function(a){var s,r,q,p=new H.bY("self","target","receiver","name"),o=J.lp(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.bW("Field name "+a+" not found."))},
qK:function(a){throw H.c(new P.eA(a))},
qu:function(a){return v.getIsolateTag(a)},
qL:function(a){return H.h(new H.d1(a))},
rU:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qE:function(a){var s,r,q,p,o,n=$.ne.$1(a),m=$.kR[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kY[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.n7.$2(a,n)
if(q!=null){m=$.kR[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kY[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.la(s)
$.kR[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kY[n]=s
return s}if(p==="-"){o=H.la(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.nj(a,s)
if(p==="*")throw H.c(P.jK(n))
if(v.leafTags[n]===true){o=H.la(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.nj(a,s)},
nj:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lU(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
la:function(a){return J.lU(a,!1,null,!!a.$iA)},
qG:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.la(s)
else return J.lU(s,c,null,null)},
qy:function(){if(!0===$.lT)return
$.lT=!0
H.qz()},
qz:function(){var s,r,q,p,o,n,m,l
$.kR=Object.create(null)
$.kY=Object.create(null)
H.qx()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.nk.$1(o)
if(n!=null){m=H.qG(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qx:function(){var s,r,q,p,o,n,m=C.I()
m=H.cA(C.J,H.cA(C.K,H.cA(C.u,H.cA(C.u,H.cA(C.L,H.cA(C.M,H.cA(C.N(C.t),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.ne=new H.kU(p)
$.n7=new H.kV(o)
$.nk=new H.kW(n)},
cA:function(a,b){return a(b)||b},
od:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.a9("Illegal RegExp pattern ("+String(n)+")",a,null))},
nn:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qr:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nl:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lX:function(a,b,c){var s=H.qJ(a,b,c)
return s},
qJ:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nl(b),'g'),H.qr(c))},
cM:function cM(){},
cN:function cN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jG:function jG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dm:function dm(a,b){this.a=a
this.b=b},
eO:function eO(a,b,c){this.a=a
this.b=b
this.c=c},
fN:function fN(a){this.a=a},
je:function je(a){this.a=a},
hA:function hA(a){this.a=a
this.b=null},
bG:function bG(){},
fw:function fw(){},
fp:function fp(){},
bY:function bY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fh:function fh(a){this.a=a},
Z:function Z(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iL:function iL(a){this.a=a},
iO:function iO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d3:function d3(a,b){this.a=a
this.$ti=b},
eS:function eS(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kU:function kU(a){this.a=a},
kV:function kV(a){this.a=a},
kW:function kW(a){this.a=a},
eN:function eN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cy:function(a){return a},
bc:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cC(b,a))},
pv:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.qq(a,b,c))
return b},
dh:function dh(){},
a2:function a2(){},
cc:function cc(){},
bM:function bM(){},
di:function di(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
dj:function dj(){},
bN:function bN(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
mq:function(a,b){var s=b.c
return s==null?b.c=H.lF(a,b.z,!0):s},
mp:function(a,b){var s=b.c
return s==null?b.c=H.eb(a,"mb",[b.z]):s},
mr:function(a){var s=a.y
if(s===6||s===7||s===8)return H.mr(a.z)
return s===11||s===12},
oy:function(a){return a.cy},
lR:function(a){return H.lG(v.typeUniverse,a,!1)},
bx:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bx(a,s,a0,a1)
if(r===s)return b
return H.mR(a,r,!0)
case 7:s=b.z
r=H.bx(a,s,a0,a1)
if(r===s)return b
return H.lF(a,r,!0)
case 8:s=b.z
r=H.bx(a,s,a0,a1)
if(r===s)return b
return H.mQ(a,r,!0)
case 9:q=b.Q
p=H.ek(a,q,a0,a1)
if(p===q)return b
return H.eb(a,b.z,p)
case 10:o=b.z
n=H.bx(a,o,a0,a1)
m=b.Q
l=H.ek(a,m,a0,a1)
if(n===o&&l===m)return b
return H.lD(a,n,l)
case 11:k=b.z
j=H.bx(a,k,a0,a1)
i=b.Q
h=H.qe(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mP(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.ek(a,g,a0,a1)
o=b.z
n=H.bx(a,o,a0,a1)
if(f===g&&n===o)return b
return H.lE(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.i5("Attempted to substitute unexpected RTI kind "+c))}},
ek:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bx(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
qf:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bx(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
qe:function(a,b,c,d){var s,r=b.a,q=H.ek(a,r,c,d),p=b.b,o=H.ek(a,p,c,d),n=b.c,m=H.qf(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.hc()
s.a=q
s.b=o
s.c=m
return s},
a:function(a,b){a[v.arrayRti]=b
return a},
qm:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.nf(s)
return a.$S()}return null},
nh:function(a,b){var s
if(H.mr(b))if(a instanceof H.bG){s=H.qm(a)
if(s!=null)return s}return H.bd(a)},
bd:function(a){var s
if(a instanceof P.R){s=a.$ti
return s!=null?s:H.lL(a)}if(Array.isArray(a))return H.ky(a)
return H.lL(J.em(a))},
ky:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
X:function(a){var s=a.$ti
return s!=null?s:H.lL(a)},
lL:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pD(a,s)},
pD:function(a,b){var s=a instanceof H.bG?a.__proto__.__proto__.constructor:b,r=H.pd(v.typeUniverse,s.name)
b.$ccache=r
return r},
nf:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lG(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pC:function(a){var s,r,q,p=this
if(p===t.K)return H.eh(p,a,H.pH)
if(!H.be(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.eh(p,a,H.pK)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.kH
else if(r===t.gR||r===t.H)q=H.pG
else if(r===t.N)q=H.pI
else q=r===t.cJ?H.kG:null
if(q!=null)return H.eh(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.qB)){p.r="$i"+s
return H.eh(p,a,H.pJ)}}else if(s===7)return H.eh(p,a,H.pA)
return H.eh(p,a,H.py)},
eh:function(a,b,c){a.b=c
return a.b(b)},
pB:function(a){var s,r=this,q=H.px
if(!H.be(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.pu
else if(r===t.K)q=H.pt
else{s=H.en(r)
if(s)q=H.pz}r.a=q
return r.a(a)},
lO:function(a){var s,r=a.y
if(!H.be(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&H.lO(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
py:function(a){var s=this
if(a==null)return H.lO(s)
return H.T(v.typeUniverse,H.nh(a,s),null,s,null)},
pA:function(a){if(a==null)return!0
return this.z.b(a)},
pJ:function(a){var s,r=this
if(a==null)return H.lO(r)
s=r.r
if(a instanceof P.R)return!!a[s]
return!!J.em(a)[s]},
px:function(a){var s,r=this
if(a==null){s=H.en(r)
if(s)return a}else if(r.b(a))return a
H.n1(a,r)},
pz:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.n1(a,s)},
n1:function(a,b){throw H.c(H.p3(H.mI(a,H.nh(a,b),H.au(b,null))))},
mI:function(a,b,c){var s=P.ix(a),r=H.au(b==null?H.bd(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
p3:function(a){return new H.e9("TypeError: "+a)},
ac:function(a,b){return new H.e9("TypeError: "+H.mI(a,null,b))},
pH:function(a){return a!=null},
pt:function(a){if(a!=null)return a
throw H.c(H.ac(a,"Object"))},
pK:function(a){return!0},
pu:function(a){return a},
kG:function(a){return!0===a||!1===a},
n_:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.ac(a,"bool"))},
rI:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ac(a,"bool"))},
rH:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ac(a,"bool?"))},
rJ:function(a){if(typeof a=="number")return a
throw H.c(H.ac(a,"double"))},
rL:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ac(a,"double"))},
rK:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ac(a,"double?"))},
kH:function(a){return typeof a=="number"&&Math.floor(a)===a},
kz:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.ac(a,"int"))},
rN:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ac(a,"int"))},
rM:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ac(a,"int?"))},
pG:function(a){return typeof a=="number"},
rO:function(a){if(typeof a=="number")return a
throw H.c(H.ac(a,"num"))},
rQ:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ac(a,"num"))},
rP:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ac(a,"num?"))},
pI:function(a){return typeof a=="string"},
kA:function(a){if(typeof a=="string")return a
throw H.c(H.ac(a,"String"))},
rS:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ac(a,"String"))},
rR:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ac(a,"String?"))},
qa:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.au(a[q],b)
return s},
n2:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=H.a([],t.s)
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
if(!k)m+=" extends "+H.au(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.au(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.au(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.au(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.au(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
au:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.au(a.z,b)
return s}if(l===7){r=a.z
s=H.au(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.au(a.z,b)+">"
if(l===9){p=H.qg(a.z)
o=a.Q
return o.length!==0?p+("<"+H.qa(o,b)+">"):p}if(l===11)return H.n2(a,b,null)
if(l===12)return H.n2(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
qg:function(a){var s,r=H.no(a)
if(r!=null)return r
s="minified:"+a
return s},
mS:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
pd:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lG(a,b,!1)
else if(typeof m=="number"){s=m
r=H.ec(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.eb(a,b,q)
n[b]=o
return o}else return m},
pb:function(a,b){return H.mZ(a.tR,b)},
pa:function(a,b){return H.mZ(a.eT,b)},
lG:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mN(H.mL(a,null,b,c))
r.set(b,s)
return s},
hO:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mN(H.mL(a,b,c,!0))
q.set(c,r)
return r},
pc:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.lD(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bw:function(a,b){b.a=H.pB
b.b=H.pC
return b},
ec:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.aA(null,null)
s.y=b
s.cy=c
r=H.bw(a,s)
a.eC.set(c,r)
return r},
mR:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.p8(a,b,r,c)
a.eC.set(r,s)
return s},
p8:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.be(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.aA(null,null)
q.y=6
q.z=b
q.cy=c
return H.bw(a,q)},
lF:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.p7(a,b,r,c)
a.eC.set(r,s)
return s},
p7:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.be(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.en(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.en(q.z))return q
else return H.mq(a,b)}}p=new H.aA(null,null)
p.y=7
p.z=b
p.cy=c
return H.bw(a,p)},
mQ:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.p5(a,b,r,c)
a.eC.set(r,s)
return s},
p5:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.be(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.eb(a,"mb",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.aA(null,null)
q.y=8
q.z=b
q.cy=c
return H.bw(a,q)},
p9:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.aA(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bw(a,s)
a.eC.set(q,r)
return r},
hN:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
p4:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
eb:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hN(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.aA(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bw(a,r)
a.eC.set(p,q)
return q},
lD:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hN(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aA(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bw(a,o)
a.eC.set(q,n)
return n},
mP:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hN(m)
if(j>0){s=l>0?",":""
r=H.hN(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.p4(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aA(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bw(a,o)
a.eC.set(q,r)
return r},
lE:function(a,b,c,d){var s,r=b.cy+("<"+H.hN(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.p6(a,b,c,r,d)
a.eC.set(r,s)
return s},
p6:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bx(a,b,r,0)
m=H.ek(a,c,r,0)
return H.lE(a,n,m,c!==m)}}l=new H.aA(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bw(a,l)},
mL:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mN:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.oY(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mM(a,r,h,g,!1)
else if(q===46)r=H.mM(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.bv(a.u,a.e,g.pop()))
break
case 94:g.push(H.p9(a.u,g.pop()))
break
case 35:g.push(H.ec(a.u,5,"#"))
break
case 64:g.push(H.ec(a.u,2,"@"))
break
case 126:g.push(H.ec(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.lC(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.eb(p,n,o))
else{m=H.bv(p,a.e,n)
switch(m.y){case 11:g.push(H.lE(p,m,o,a.n))
break
default:g.push(H.lD(p,m,o))
break}}break
case 38:H.oZ(a,g)
break
case 42:p=a.u
g.push(H.mR(p,H.bv(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.lF(p,H.bv(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.mQ(p,H.bv(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.hc()
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
H.lC(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.mP(p,H.bv(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.lC(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.p0(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.bv(a.u,a.e,i)},
oY:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mM:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.mS(s,o.z)[p]
if(n==null)H.h('No "'+p+'" in "'+H.oy(o)+'"')
d.push(H.hO(s,o,n))}else d.push(p)
return m},
oZ:function(a,b){var s=b.pop()
if(0===s){b.push(H.ec(a.u,1,"0&"))
return}if(1===s){b.push(H.ec(a.u,4,"1&"))
return}throw H.c(P.i5("Unexpected extended operation "+H.z(s)))},
bv:function(a,b,c){if(typeof c=="string")return H.eb(a,c,a.sEA)
else if(typeof c=="number")return H.p_(a,b,c)
else return c},
lC:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bv(a,b,c[s])},
p0:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bv(a,b,c[s])},
p_:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.i5("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.i5("Bad index "+c+" for "+b.i(0)))},
T:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.be(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.be(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.T(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.T(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.T(a,b.z,c,d,e)
if(r===6)return H.T(a,b.z,c,d,e)
return r!==7}if(r===6)return H.T(a,b.z,c,d,e)
if(p===6){s=H.mq(a,d)
return H.T(a,b,c,s,e)}if(r===8){if(!H.T(a,b.z,c,d,e))return!1
return H.T(a,H.mp(a,b),c,d,e)}if(r===7){s=H.T(a,t.P,c,d,e)
return s&&H.T(a,b.z,c,d,e)}if(p===8){if(H.T(a,b,c,d.z,e))return!0
return H.T(a,b,c,H.mp(a,d),e)}if(p===7){s=H.T(a,b,c,t.P,e)
return s||H.T(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.c)return!0
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
if(!H.T(a,k,c,j,e)||!H.T(a,j,e,k,c))return!1}return H.n3(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.n3(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.pF(a,b,c,d,e)}return!1},
n3:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.T(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.T(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.T(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.T(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.T(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
pF:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.T(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mS(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.T(a,H.hO(a,b,l[p]),c,r[p],e))return!1
return!0},
en:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.be(a))if(r!==7)if(!(r===6&&H.en(a.z)))s=r===8&&H.en(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qB:function(a){var s
if(!H.be(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
be:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
mZ:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
aA:function aA(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
hc:function hc(){this.c=this.b=this.a=null},
h8:function h8(){},
e9:function e9(a){this.a=a},
no:function(a){return v.mangledGlobalNames[a]},
qH:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lU:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kS:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.lT==null){H.qy()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.jK("Return interceptor for "+H.z(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.ka
if(o==null)o=$.ka=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.qE(a)
if(p!=null)return p
if(typeof a=="function")return C.V
s=Object.getPrototypeOf(a)
if(s==null)return C.B
if(s===Object.prototype)return C.B
if(typeof q=="function"){o=$.ka
if(o==null)o=$.ka=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
oa:function(a,b){if(a<0||a>4294967295)throw H.c(P.ab(a,0,4294967295,"length",null))
return J.ob(new Array(a),b)},
lo:function(a,b){if(a<0)throw H.c(P.bW("Length must be a non-negative integer: "+a))
return H.a(new Array(a),b.N("x<0>"))},
ob:function(a,b){return J.lp(H.a(a,b.N("x<0>")))},
lp:function(a){a.fixed$length=Array
return a},
oc:function(a,b){return J.nO(a,b)},
em:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d_.prototype
return J.eM.prototype}if(typeof a=="string")return J.bk.prototype
if(a==null)return J.d0.prototype
if(typeof a=="boolean")return J.eL.prototype
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.R)return a
return J.kS(a)},
cE:function(a){if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.R)return a
return J.kS(a)},
i0:function(a){if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.R)return a
return J.kS(a)},
nd:function(a){if(typeof a=="number")return J.c8.prototype
if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bQ.prototype
return a},
qt:function(a){if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bQ.prototype
return a},
aT:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.R)return a
return J.kS(a)},
G:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.em(a).q(a,b)},
lZ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nd(a).L(a,b)},
m_:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ni(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cE(a).h(a,b)},
lg:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.ni(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.i0(a).m(a,b,c)},
nM:function(a,b,c){return J.aT(a).ht(a,b,c)},
nN:function(a,b,c,d){return J.aT(a).hN(a,b,c,d)},
nO:function(a,b){return J.nd(a).ar(a,b)},
i3:function(a,b){return J.i0(a).M(a,b)},
eq:function(a,b){return J.i0(a).I(a,b)},
nP:function(a){return J.aT(a).gah(a)},
nQ:function(a){return J.aT(a).gbL(a)},
nR:function(a){return J.aT(a).ge3(a)},
lh:function(a){return J.em(a).gJ(a)},
aG:function(a){return J.i0(a).gU(a)},
aV:function(a){return J.cE(a).gl(a)},
m0:function(a){return J.i0(a).iA(a)},
nS:function(a,b){return J.aT(a).iD(a,b)},
nT:function(a){return J.qt(a).iL(a)},
cG:function(a){return J.em(a).i(a)},
b:function b(){},
eL:function eL(){},
d0:function d0(){},
bl:function bl(){},
f8:function f8(){},
bQ:function bQ(){},
b0:function b0(){},
x:function x(a){this.$ti=a},
iK:function iK(a){this.$ti=a},
ai:function ai(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c8:function c8(){},
d_:function d_(){},
eM:function eM(){},
bk:function bk(){}},P={
oP:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.qi()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cB(new P.k6(q),1)).observe(s,{childList:true})
return new P.k5(q,s,r)}else if(self.setImmediate!=null)return P.qj()
return P.qk()},
oQ:function(a){self.scheduleImmediate(H.cB(new P.k7(a),0))},
oR:function(a){self.setImmediate(H.cB(new P.k8(a),0))},
oS:function(a){P.lw(C.m,a)},
lw:function(a,b){var s=C.c.a9(a.a,1000)
return P.p1(s<0?0:s,b)},
mv:function(a,b){var s=C.c.a9(a.a,1000)
return P.p2(s<0?0:s,b)},
p1:function(a,b){var s=new P.e8()
s.f5(a,b)
return s},
p2:function(a,b){var s=new P.e8()
s.f6(a,b)
return s},
rF:function(a){return new P.cw(a,1)},
oV:function(){return C.a5},
oW:function(a){return new P.cw(a,3)},
pM:function(a,b){return new P.e5(a,b.N("e5<0>"))},
q7:function(){var s,r
for(s=$.cz;s!=null;s=$.cz){$.ej=null
r=s.b
$.cz=r
if(r==null)$.ei=null
s.a.$0()}},
qd:function(){$.lM=!0
try{P.q7()}finally{$.ej=null
$.lM=!1
if($.cz!=null)$.lY().$1(P.n8())}},
qb:function(a){var s=new P.fW(a),r=$.ei
if(r==null){$.cz=$.ei=s
if(!$.lM)$.lY().$1(P.n8())}else $.ei=r.b=s},
qc:function(a){var s,r,q,p=$.cz
if(p==null){P.qb(a)
$.ej=$.ei
return}s=new P.fW(a)
r=$.ej
if(r==null){s.b=p
$.cz=$.ej=s}else{q=r.b
s.b=q
$.ej=r.b=s
if(q==null)$.ei=s}},
mu:function(a,b){var s=$.aS
if(s===C.f)return P.lw(a,b)
return P.lw(a,s.hS(b))},
oH:function(a,b){var s=$.aS
if(s===C.f)return P.mv(a,b)
return P.mv(a,s.dZ(b,t.aF))},
n4:function(a,b,c,d,e){P.qc(new P.kK(d,e))},
q8:function(a,b,c,d){var s,r=$.aS
if(r===c)return d.$0()
$.aS=c
s=r
try{r=d.$0()
return r}finally{$.aS=s}},
q9:function(a,b,c,d,e){var s,r=$.aS
if(r===c)return d.$1(e)
$.aS=c
s=r
try{r=d.$1(e)
return r}finally{$.aS=s}},
k6:function k6(a){this.a=a},
k5:function k5(a,b,c){this.a=a
this.b=b
this.c=c},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
e8:function e8(){this.c=0},
kp:function kp(a,b){this.a=a
this.b=b},
ko:function ko(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cw:function cw(a,b){this.a=a
this.b=b},
bS:function bS(a){var _=this
_.a=a
_.d=_.c=_.b=null},
e5:function e5(a,b){this.a=a
this.$ti=b},
fW:function fW(a){this.a=a
this.b=null},
cj:function cj(){},
fr:function fr(){},
kw:function kw(){},
kK:function kK(a,b){this.a=a
this.b=b},
kd:function kd(){},
ke:function ke(a,b){this.a=a
this.b=b},
kf:function kf(a,b,c){this.a=a
this.b=b
this.c=c},
oe:function(a,b){return new H.Z(a.N("@<0>").bn(b).N("Z<1,2>"))},
of:function(a,b,c){return H.qs(a,new H.Z(b.N("@<0>").bn(c).N("Z<1,2>")))},
W:function(a,b){return new H.Z(a.N("@<0>").bn(b).N("Z<1,2>"))},
d4:function(a){return new P.dU(a.N("dU<0>"))},
lB:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oX:function(a,b){var s=new P.dV(a,b)
s.c=a.e
return s},
o8:function(a,b,c){var s,r
if(P.lN(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.a([],t.s)
$.am.push(a)
try{P.pL(a,s)}finally{if(0>=$.am.length)return H.d($.am,-1)
$.am.pop()}r=P.ms(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
ln:function(a,b,c){var s,r
if(P.lN(a))return b+"..."+c
s=new P.a0(b)
$.am.push(a)
try{r=s
r.a=P.ms(r.a,a,", ")}finally{if(0>=$.am.length)return H.d($.am,-1)
$.am.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lN:function(a){var s,r
for(s=$.am.length,r=0;r<s;++r)if(a===$.am[r])return!0
return!1},
pL:function(a,b){var s,r,q,p,o,n,m,l=a.gU(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.v())return
s=H.z(l.gD(l))
b.push(s)
k+=s.length+2;++j}if(!l.v()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gD(l);++j
if(!l.v()){if(j<=4){b.push(H.z(p))
return}r=H.z(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gD(l);++j
for(;l.v();p=o,o=n){n=l.gD(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.z(p)
r=H.z(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
og:function(a,b,c){var s=P.oe(b,c)
a.I(0,new P.iP(s,b,c))
return s},
md:function(a,b){var s,r,q=P.d4(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.p)(a),++r)q.n(0,b.a(a[r]))
return q},
lt:function(a){var s,r={}
if(P.lN(a))return"{...}"
s=new P.a0("")
try{$.am.push(a)
s.a+="{"
r.a=!0
J.eq(a,new P.iT(r,s))
s.a+="}"}finally{if(0>=$.am.length)return H.d($.am,-1)
$.am.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dU:function dU(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
kc:function kc(a){this.a=a
this.c=this.b=null},
dV:function dV(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cZ:function cZ(){},
iP:function iP(a,b,c){this.a=a
this.b=b
this.c=c},
d5:function d5(){},
j:function j(){},
d8:function d8(){},
iT:function iT(a,b){this.a=a
this.b=b},
O:function O(){},
hP:function hP(){},
d9:function d9(){},
cq:function cq(a,b){this.a=a
this.$ti=b},
dr:function dr(){},
e1:function e1(){},
dW:function dW(){},
ed:function ed(){},
ef:function ef(){},
oK:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.oL(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
oL:function(a,b,c,d){var s=a?$.nE():$.nD()
if(s==null)return null
if(0===c&&d===b.length)return P.mB(s,b)
return P.mB(s,b.subarray(c,P.bp(c,d,b.length)))},
mB:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.an(r)}return null},
m2:function(a,b,c,d,e,f){if(C.c.bC(f,4)!==0)throw H.c(P.a9("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a9("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a9("Invalid base64 padding, more than two '=' characters",a,b))},
ps:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
pr:function(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.cE(a),r=0;r<p;++r){q=s.h(a,b+r)
o[r]=(q&4294967040)>>>0!==0?255:q}return o},
jU:function jU(){},
jT:function jT(){},
i9:function i9(){},
ia:function ia(){},
ex:function ex(){},
ez:function ez(){},
iu:function iu(){},
iH:function iH(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
iG:function iG(a){this.a=a},
jR:function jR(){},
jV:function jV(){},
ku:function ku(a){this.b=0
this.c=a},
jS:function jS(a){this.a=a},
kt:function kt(a){this.a=a
this.b=16
this.c=0},
kX:function(a,b){var s=H.mj(a,b)
if(s!=null)return s
throw H.c(P.a9(a,null,null))},
o6:function(a){if(a instanceof H.bG)return a.i(0)
return"Instance of '"+H.dp(a)+"'"},
eT:function(a,b,c,d){var s,r=c?J.lo(a,d):J.oa(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
iQ:function(a,b,c){var s,r=H.a([],c.N("x<0>"))
for(s=J.aG(a);s.v();)r.push(s.gD(s))
if(b)return r
return J.lp(r)},
oh:function(a,b,c){var s,r,q=J.lo(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
ft:function(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=P.bp(b,c,r)
return H.mk(b>0||c<r?s.slice(b,c):s)}if(t.bm.b(a))return H.ov(a,b,P.bp(b,c,a.length))
return P.oE(a,b,c)},
oE:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.ab(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.ab(c,b,a.length,o,o))
r=J.aG(a)
for(q=0;q<b;++q)if(!r.v())throw H.c(P.ab(b,0,q,o,o))
p=[]
if(s)for(;r.v();)p.push(r.gD(r))
else for(q=b;q<c;++q){if(!r.v())throw H.c(P.ab(c,b,q,o,o))
p.push(r.gD(r))}return H.mk(p)},
ow:function(a){return new H.eN(a,H.od(a,!1,!0,!1,!1,!1))},
ms:function(a,b,c){var s=J.aG(b)
if(!s.v())return a
if(c.length===0){do a+=H.z(s.gD(s))
while(s.v())}else{a+=H.z(s.gD(s))
for(;s.v();)a=a+c+H.z(s.gD(s))}return a},
my:function(){var s=H.om()
if(s!=null)return P.oJ(s)
throw H.c(P.C("'Uri.base' is not supported"))},
ks:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.nK().b
s=s.test(b)}else s=!1
if(s)return b
r=c.gi5().cC(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.az(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
o3:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
o4:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
eC:function(a){if(a>=10)return""+a
return"0"+a},
m7:function(a){return new P.bH(1000*a)},
ix:function(a){if(typeof a=="number"||H.kG(a)||null==a)return J.cG(a)
if(typeof a=="string")return JSON.stringify(a)
return P.o6(a)},
i5:function(a){return new P.et(a)},
bW:function(a){return new P.aH(!1,null,null,a)},
fe:function(a,b){return new P.dq(null,null,!0,a,b,"Value not in range")},
ab:function(a,b,c,d,e){return new P.dq(b,c,!0,a,d,"Invalid value")},
bp:function(a,b,c){if(0>a||a>c)throw H.c(P.ab(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ab(b,a,c,"end",null))
return b}return c},
ml:function(a,b){if(a<0)throw H.c(P.ab(a,0,null,b,null))
return a},
Q:function(a,b,c,d,e){var s=e==null?J.aV(b):e
return new P.eJ(s,!0,a,c,"Index out of range")},
C:function(a){return new P.fP(a)},
jK:function(a){return new P.fM(a)},
lv:function(a){return new P.ci(a)},
aK:function(a){return new P.ey(a)},
f:function(a){return new P.h9(a)},
a9:function(a,b,c){return new P.iD(a,b,c)},
lW:function(a){H.qH(a)},
oJ:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.H(a5,4)^58)*3|C.a.H(a5,0)^100|C.a.H(a5,1)^97|C.a.H(a5,2)^116|C.a.H(a5,3)^97)>>>0
if(s===0)return P.mx(a4<a4?C.a.u(a5,0,a4):a5,5,a3).geK()
else if(s===32)return P.mx(C.a.u(a5,5,a4),0,a3).geK()}r=P.eT(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.n5(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(P.n5(a5,0,q,20,r)===20)r[7]=q
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
k=!1}else{if(!(m<a4&&m===n+2&&C.a.af(a5,"..",n)))h=m>n+2&&C.a.af(a5,"/..",m-3)
else h=!0
if(h){j=a3
k=!1}else{if(q===4)if(C.a.af(a5,"file",0)){if(p<=0){if(!C.a.af(a5,"/",n)){g="file:///"
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
a5=C.a.be(a5,n,m,"/");++a4
m=f}j="file"}else if(C.a.af(a5,"http",0)){if(i&&o+3===n&&C.a.af(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=C.a.be(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&C.a.af(a5,"https",0)){if(i&&o+4===n&&C.a.af(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=C.a.be(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}else j=a3
if(k){if(a4<a5.length){a5=C.a.u(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new P.hu(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=P.pl(a5,0,q)
else{if(q===0)P.cx(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?P.pm(a5,d,p-1):""
b=P.pi(a5,p,o,!1)
i=o+1
if(i<n){a=H.mj(C.a.u(a5,i,n),a3)
a0=P.pk(a==null?H.h(P.a9("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.pj(a5,n,m,a3,j,b!=null)
a2=m<l?P.lI(a5,m+1,l,a3):a3
return new P.bT(j,c,b,a0,a1,a2,l<a4?P.ph(a5,l+1,a4):a3)},
mA:function(a){var s=t.N
return C.b.ic(H.a(a.split("&"),t.s),P.W(s,s),new P.jP(C.e))},
oI:function(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jM(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=C.a.Z(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=P.kX(C.a.u(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(q>=4)return H.d(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=P.kX(C.a.u(a,r,c),null)
if(o>255)k.$2(l,r)
if(q>=4)return H.d(j,q)
j[q]=o
return j},
mz:function(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.jN(a),c=new P.jO(d,a)
if(a.length<2)d.$1("address is too short")
s=H.a([],t.t)
for(r=b,q=r,p=!1,o=!1;r<a0;++r){n=C.a.Z(a,r)
if(n===58){if(r===b){++r
if(C.a.Z(a,r)!==58)d.$2("invalid start colon.",r)
q=r}if(r===q){if(p)d.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(c.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)d.$1("too few parts")
m=q===a0
l=C.b.gaF(s)
if(m&&l!==-1)d.$2("expected a part after last `:`",a0)
if(!m)if(!o)s.push(c.$2(q,a0))
else{k=P.oI(a,q,a0)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)d.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)d.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){if(h<0||h>=16)return H.d(j,h)
j[h]=0
e=h+1
if(e>=16)return H.d(j,e)
j[e]=0
h+=2}else{e=C.c.b7(g,8)
if(h<0||h>=16)return H.d(j,h)
j[h]=e
e=h+1
if(e>=16)return H.d(j,e)
j[e]=g&255
h+=2}}return j},
mT:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cx:function(a,b,c){throw H.c(P.a9(c,a,b))},
pk:function(a,b){if(a!=null&&a===P.mT(b))return null
return a},
pi:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.Z(a,b)===91){s=c-1
if(C.a.Z(a,s)!==93)P.cx(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.pf(a,r,s)
if(q<s){p=q+1
o=P.mY(a,C.a.af(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mz(a,r,q)
return C.a.u(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.Z(a,n)===58){q=C.a.bP(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mY(a,C.a.af(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mz(a,b,q)
return"["+C.a.u(a,b,q)+o+"]"}return P.po(a,b,c)},
pf:function(a,b,c){var s=C.a.bP(a,"%",b)
return s>=b&&s<c?s:c},
mY:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.a0(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.Z(a,s)
if(p===37){o=P.lJ(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.a0("")
m=i.a+=C.a.u(a,r,s)
if(n)o=C.a.u(a,s,s+3)
else if(o==="%")P.cx(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.a0("")
if(r<s){i.a+=C.a.u(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.Z(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=C.a.u(a,r,s)
if(i==null){i=new P.a0("")
n=i}else n=i
n.a+=j
n.a+=P.lH(p)
s+=k
r=s}}}if(i==null)return C.a.u(a,b,c)
if(r<c)i.a+=C.a.u(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
po:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.Z(a,s)
if(o===37){n=P.lJ(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.a0("")
l=C.a.u(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.u(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.d(C.x,m)
m=(C.x[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.a0("")
if(r<s){q.a+=C.a.u(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.d(C.j,m)
m=(C.j[m]&1<<(o&15))!==0}else m=!1
if(m)P.cx(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.Z(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=C.a.u(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.a0("")
m=q}else m=q
m.a+=l
m.a+=P.lH(o)
s+=j
r=s}}}}if(q==null)return C.a.u(a,b,c)
if(r<c){l=C.a.u(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
pl:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.mV(C.a.H(a,b)))P.cx(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.H(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.d(C.l,p)
p=(C.l[p]&1<<(q&15))!==0}else p=!1
if(!p)P.cx(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.u(a,b,c)
return P.pe(r?a.toLowerCase():a)},
pe:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
pm:function(a,b,c){return P.ee(a,b,c,C.Y,!1)},
pj:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.ee(a,b,c,C.y,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a6(s,"/"))s="/"+s
return P.pn(s,e,f)},
pn:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a6(a,"/"))return P.pp(a,!s||c)
return P.pq(a)},
lI:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.bW("Both query and queryParameters specified"))
return P.ee(a,b,c,C.k,!0)}if(d==null)return null
s=new P.a0("")
r.a=""
d.I(0,new P.kq(new P.kr(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
ph:function(a,b,c){return P.ee(a,b,c,C.k,!0)},
lJ:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.Z(a,b+1)
r=C.a.Z(a,n)
q=H.kT(s)
p=H.kT(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.b7(o,4)
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.az(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.u(a,b,b+3).toUpperCase()
return null},
lH:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=C.a.H(k,a>>>4)
s[2]=C.a.H(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=C.c.hD(a,6*q)&63|r
if(o>=p)return H.d(s,o)
s[o]=37
m=o+1
l=C.a.H(k,n>>>4)
if(m>=p)return H.d(s,m)
s[m]=l
l=o+2
m=C.a.H(k,n&15)
if(l>=p)return H.d(s,l)
s[l]=m
o+=3}}return P.ft(s,0,null)},
ee:function(a,b,c,d,e){var s=P.mX(a,b,c,d,e)
return s==null?C.a.u(a,b,c):s},
mX:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.Z(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.d(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lJ(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.d(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.cx(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.Z(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=P.lH(o)}}if(p==null){p=new P.a0("")
n=p}else n=p
n.a+=C.a.u(a,q,r)
n.a+=H.z(m)
if(typeof l!=="number")return H.ng(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.u(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mW:function(a){if(C.a.a6(a,"."))return!0
return C.a.eo(a,"/.")!==-1},
pq:function(a){var s,r,q,p,o,n,m
if(!P.mW(a))return a
s=H.a([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.G(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.d(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
pp:function(a,b){var s,r,q,p,o,n
if(!P.mW(a))return!b?P.mU(a):a
s=H.a([],t.s)
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
r=P.mU(s[0])
if(0>=s.length)return H.d(s,0)
s[0]=r}return C.b.j(s,"/")},
mU:function(a){var s,r,q,p=a.length
if(p>=2&&P.mV(C.a.H(a,0)))for(s=1;s<p;++s){r=C.a.H(a,s)
if(r===58)return C.a.u(a,0,s)+"%3A"+C.a.aj(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.d(C.l,q)
q=(C.l[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
pg:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.H(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.bW("Invalid URL encoding"))}}return s},
lK:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.H(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.u(a,b,c)
else p=new H.r(C.a.u(a,b,c))}else{p=H.a([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.H(a,o)
if(r>127)throw H.c(P.bW("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.bW("Truncated URI"))
p.push(P.pg(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a4.cC(p)},
mV:function(a){var s=a|32
return 97<=s&&s<=122},
mx:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.a([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.H(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.a9(k,a,r))}}if(q<0&&r>b)throw H.c(P.a9(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.H(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaF(j)
if(p!==44||r!==n+7||!C.a.af(a,"base64",n+1))throw H.c(P.a9("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.H.il(0,a,m,s)
else{l=P.mX(a,m,s,C.k,!0)
if(l!=null)a=C.a.be(a,m,s,l)}return new P.jL(a,j,c)},
pw:function(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="?",i="#",h=H.a(new Array(22),t.gN)
for(s=0;s<22;++s)h[s]=new Uint8Array(96)
r=new P.kD(h)
q=new P.kE()
p=new P.kF()
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
n5:function(a,b,c,d,e){var s,r,q,p,o,n,m=$.nL()
for(s=m.length,r=b;r<c;++r){if(d<0||d>=s)return H.d(m,d)
q=m[d]
p=C.a.H(a,r)^96
o=q[p>95?31:p]
d=o&31
n=o>>>5
if(n>=8)return H.d(e,n)
e[n]=r}return d},
a_:function a_(a,b){this.a=a
this.b=b},
bH:function bH(a){this.a=a},
iq:function iq(){},
ir:function ir(){},
N:function N(){},
et:function et(a){this.a=a},
fF:function fF(){},
f3:function f3(){},
aH:function aH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dq:function dq(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eJ:function eJ(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fP:function fP(a){this.a=a},
fM:function fM(a){this.a=a},
ci:function ci(a){this.a=a},
ey:function ey(a){this.a=a},
f6:function f6(){},
dw:function dw(){},
eA:function eA(a){this.a=a},
h9:function h9(a){this.a=a},
iD:function iD(a,b,c){this.a=a
this.b=b
this.c=c},
i:function i(){},
eK:function eK(){},
aj:function aj(){},
R:function R(){},
a0:function a0(a){this.a=a},
jP:function jP(a){this.a=a},
jM:function jM(a){this.a=a},
jN:function jN(a){this.a=a},
jO:function jO(a,b){this.a=a
this.b=b},
bT:function bT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
kr:function kr(a,b){this.a=a
this.b=b},
kq:function kq(a){this.a=a},
jL:function jL(a,b,c){this.a=a
this.b=b
this.c=c},
kD:function kD(a){this.a=a},
kE:function kE(){},
kF:function kF(){},
hu:function hu(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
h1:function h1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
qo:function(a){var s,r,q,p
if(t.x.b(a)){s=J.nR(a)
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
return new P.ea(r,q,p)},
qn:function(a){if(a instanceof P.ea)return{data:a.a,height:a.b,width:a.c}
return a},
by:function(a){var s,r,q,p,o
if(a==null)return null
s=P.W(t.N,t.A)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.p)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
n0:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.kG(a))return a
if(t.f.b(a))return P.n9(a)
if(t.E.b(a)){s=[]
J.eq(a,new P.kB(s))
a=s}return a},
n9:function(a){var s={}
J.eq(a,new P.kL(s))
return s},
kj:function kj(){},
kl:function kl(a,b){this.a=a
this.b=b},
km:function km(a,b){this.a=a
this.b=b},
ea:function ea(a,b,c){this.a=a
this.b=b
this.c=c},
kB:function kB(a){this.a=a},
kL:function kL(a){this.a=a},
kk:function kk(a,b){this.a=a
this.b=b},
eF:function eF(a,b){this.a=a
this.b=b},
iB:function iB(){},
iC:function iC(){},
hs:function hs(){},
ag:function ag(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b1:function b1(){},
eQ:function eQ(){},
b5:function b5(){},
f4:function f4(){},
jf:function jf(){},
cg:function cg(){},
fs:function fs(){},
o:function o(){},
b7:function b7(){},
fE:function fE(){},
hg:function hg(){},
hh:function hh(){},
ho:function ho(){},
hp:function hp(){},
hC:function hC(){},
hD:function hD(){},
hL:function hL(){},
hM:function hM(){},
i7:function i7(){},
ev:function ev(){},
i8:function i8(a){this.a=a},
ew:function ew(){},
bg:function bg(){},
f5:function f5(){},
fY:function fY(){},
cf:function cf(){},
fn:function fn(){},
hy:function hy(){},
hz:function hz(){}},W={
m1:function(){var s=document.createElement("a")
s.toString
return s},
li:function(){var s=document.createElement("canvas")
s.toString
return s},
o5:function(a,b,c){var s=document.body
s.toString
s=new H.bb(new W.a8(C.p.as(s,a,b,c)),new W.is(),t.ac.N("bb<j.E>"))
return t.h.a(s.gaY(s))},
it:function(a){return"wheel"},
cT:function(a){var s,r,q="element tag unavailable"
try{s=J.aT(a)
s.geJ(a)
q=s.geJ(a)}catch(r){H.an(r)}return q},
o7:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.an(s)}return q},
kb:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mK:function(a,b,c,d){var s=W.kb(W.kb(W.kb(W.kb(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
a5:function(a,b,c,d){var s=new W.dS(a,b,c==null?null:W.n6(new W.k9(c),t.aD),!1)
s.hK()
return s},
mJ:function(a){var s=W.m1(),r=window
s=new W.cv(new W.kg(s,r.location))
s.f0(a)
return s},
oT:function(a,b,c,d){return!0},
oU:function(a,b,c,d){var s,r,q,p=d.a,o=p.a
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
mO:function(){var s=t.N,r=P.md(C.z,s),q=H.a(["TEMPLATE"],t.s)
s=new W.hG(r,P.d4(s),P.d4(s),P.d4(s),null)
s.f4(null,new H.da(C.z,new W.kn(),t.dv),q,null)
return s},
n6:function(a,b){var s=$.aS
if(s===C.f)return a
return s.dZ(a,b)},
v:function v(){},
i4:function i4(){},
er:function er(){},
es:function es(){},
bX:function bX(){},
bD:function bD(){},
bE:function bE(){},
bF:function bF(){},
cJ:function cJ(){},
aI:function aI(){},
ii:function ii(){},
L:function L(){},
cP:function cP(){},
ij:function ij(){},
aw:function aw(){},
aY:function aY(){},
ik:function ik(){},
il:function il(){},
im:function im(){},
bi:function bi(){},
io:function io(){},
cQ:function cQ(){},
cR:function cR(){},
eD:function eD(){},
ip:function ip(){},
fZ:function fZ(a,b){this.a=a
this.b=b},
D:function D(){},
is:function is(){},
l:function l(){},
e:function e(){},
aq:function aq(){},
c3:function c3(){},
eE:function eE(){},
eG:function eG(){},
aL:function aL(){},
iF:function iF(){},
bJ:function bJ(){},
bK:function bK(){},
c5:function c5(){},
c7:function c7(){},
bL:function bL(){},
iR:function iR(){},
j7:function j7(){},
c9:function c9(){},
eW:function eW(){},
j8:function j8(a){this.a=a},
eX:function eX(){},
j9:function j9(a){this.a=a},
aM:function aM(){},
eY:function eY(){},
as:function as(){},
a8:function a8(a){this.a=a},
t:function t(){},
dk:function dk(){},
aO:function aO(){},
fa:function fa(){},
fg:function fg(){},
jm:function jm(a){this.a=a},
fi:function fi(){},
aB:function aB(){},
fl:function fl(){},
aQ:function aQ(){},
fm:function fm(){},
aR:function aR(){},
fq:function fq(){},
ju:function ju(a){this.a=a},
at:function at(){},
br:function br(){},
dx:function dx(){},
fu:function fu(){},
fv:function fv(){},
cl:function cl(){},
aC:function aC(){},
ak:function ak(){},
fx:function fx(){},
fy:function fy(){},
jA:function jA(){},
aD:function aD(){},
bP:function bP(){},
fD:function fD(){},
jF:function jF(){},
b9:function b9(){},
jQ:function jQ(){},
fS:function fS(){},
bu:function bu(){},
ct:function ct(){},
cu:function cu(){},
h_:function h_(){},
dR:function dR(){},
hd:function hd(){},
dX:function dX(){},
hx:function hx(){},
hE:function hE(){},
fX:function fX(){},
h6:function h6(a){this.a=a},
ll:function ll(a,b){this.a=a
this.$ti=b},
dS:function dS(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
k9:function k9(a){this.a=a},
lA:function lA(a){this.$ti=a},
cv:function cv(a){this.a=a},
P:function P(){},
dl:function dl(a){this.a=a},
jc:function jc(a){this.a=a},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
e2:function e2(){},
kh:function kh(){},
ki:function ki(){},
hG:function hG(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kn:function kn(){},
hF:function hF(){},
cW:function cW(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
kg:function kg(a,b){this.a=a
this.b=b},
hQ:function hQ(a){this.a=a
this.b=0},
kv:function kv(a){this.a=a},
h0:function h0(){},
h2:function h2(){},
h3:function h3(){},
h4:function h4(){},
h5:function h5(){},
ha:function ha(){},
hb:function hb(){},
he:function he(){},
hf:function hf(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
hq:function hq(){},
hr:function hr(){},
ht:function ht(){},
e3:function e3(){},
e4:function e4(){},
hv:function hv(){},
hw:function hw(){},
hB:function hB(){},
hH:function hH(){},
hI:function hI(){},
e6:function e6(){},
e7:function e7(){},
hJ:function hJ(){},
hK:function hK(){},
hR:function hR(){},
hS:function hS(){},
hT:function hT(){},
hU:function hU(){},
hV:function hV(){},
hW:function hW(){},
hX:function hX(){},
hY:function hY(){},
hZ:function hZ(){},
i_:function i_(){}},K={
S:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.f("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.H(a,0)
r=C.a.H(b,0)
if(s>r){q=r
r=s
s=q}return new K.fd(s,r)},
aW:function aW(){},
cY:function cY(){},
af:function af(a){this.a=a},
fd:function fd(a,b){this.a=a
this.b=b},
u:function u(a){this.a=a}},L={
jD:function(){var s=t.N
return new L.jC(P.W(s,t.dl),P.W(s,t.f7),P.d4(s))},
fo:function fo(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
fB:function fB(a,b,c){this.a=a
this.b=b
this.c=c},
fC:function fC(a,b){this.b=a
this.c=b},
jC:function jC(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dA:function dA(a,b){this.b=a
this.c=!1
this.a=b}},O={
lj:function(a){return new O.ae(H.a([],a.N("x<0>")),a.N("ae<0>"))},
ae:function ae(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
dg:function dg(a){this.a=a
this.b=null},
eV:function(a,b){return new O.de(new V.Y(0,0,0),a,b,new A.av(!1,!1,!1))},
db:function db(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=null},
j_:function j_(a,b){this.a=a
this.b=b},
j0:function j0(){},
j1:function j1(a,b){this.a=a
this.b=b},
j2:function j2(){},
j3:function j3(a,b){this.a=a
this.b=b},
j4:function j4(){},
j5:function j5(a,b){this.a=a
this.b=b},
j6:function j6(){},
iU:function iU(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
dd:function dd(){},
iV:function iV(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
de:function de(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
iX:function iX(a){this.b=a},
iY:function iY(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
iZ:function iZ(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
du:function du(a){var _=this
_.c=_.a=null
_.d=a
_.e=null},
ck:function ck(){}},E={
ma:function(){var s=O.lj(t.l),r=new E.bI(s)
s.bi(r.gim(),r.giq())
r.sae(0,null)
return r},
mG:function(){var s=window.navigator.vendor
s.toString
if(C.a.E(s,"Google"))return C.F
s=window.navigator.userAgent
s.toString
if(C.a.E(s,"Firefox"))return C.q
s=window.navigator.appVersion
s.toString
if(C.a.E(s,"Trident")||C.a.E(s,"Edge"))return C.r
s=window.navigator.appName
s.toString
if(C.a.E(s,"Microsoft"))return C.r
return C.G},
mH:function(){var s=window.navigator.appVersion
s.toString
if(C.a.E(s,"Win"))return C.a0
if(C.a.E(s,"Mac"))return C.A
if(C.a.E(s,"Linux"))return C.a1
return C.a2},
ox:function(a,b){var s
Date.now()
s=t.fA
s=new E.ji(a,new P.a_(Date.now(),!1),new P.a_(Date.now(),!1),new O.dg(H.a([],s)),new O.dg(H.a([],s)),new O.dg(H.a([],s)),H.a([null],t.bc),P.W(t.N,t.fg))
s.f_(a,b)
return s},
oG:function(a,b,c,d,e){var s,r
if(t.gA.b(a))return E.mt(a,!0,!0,!0,!1)
s=W.li()
r=s.style
r.width="100%"
r.height="100%"
J.nQ(a).n(0,s)
return E.mt(s,!0,!0,!0,!1)},
mt:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.A,l=t.gW.a(C.i.dc(a,"webgl2",P.of(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.c(P.f("Failed to get the rendering context for WebGL."))
s=E.ox(l,a)
H.kz(l.getParameter(3379))
m=H.kz(l.getParameter(34076))
r=H.a([],t.g9)
q=$.iv
p=new X.fR(a,r,(q==null?$.iv=new E.h7(E.mG(),E.mH()):q).a===C.q?0.16666666666666666:0.005555555555555556)
o=document
o.toString
r.push(W.a5(o,"contextmenu",p.gfN(),!1))
r.push(W.a5(a,"focus",p.gfT(),!1))
r.push(W.a5(a,"blur",p.gfF(),!1))
r.push(W.a5(o,"keyup",p.gfX(),!1))
r.push(W.a5(o,"keydown",p.gfV(),!1))
r.push(W.a5(a,"mousedown",p.gh0(),!1))
r.push(W.a5(a,"mouseup",p.gh4(),!1))
r.push(W.a5(a,n,p.gh2(),!1))
W.it(a)
W.it(a)
r.push(W.a5(a,W.it(a),p.gh6(),!1))
r.push(W.a5(o,n,p.gfP(),!1))
r.push(W.a5(o,"mouseup",p.gfR(),!1))
r.push(W.a5(o,"pointerlockchange",p.gh8(),!1))
r.push(W.a5(a,"touchstart",p.gho(),!1))
r.push(W.a5(a,"touchend",p.ghk(),!1))
r.push(W.a5(a,"touchmove",p.ghm(),!1))
m=new E.fA(a,s,new T.jx(l,m),p,new P.a_(Date.now(),!1))
m.dF()
return m},
ib:function ib(){},
bI:function bI(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bZ:function bZ(a){this.b=a},
cd:function cd(a){this.b=a},
h7:function h7(a,b){this.a=a
this.b=b},
ji:function ji(a,b,c,d,e,f,g,h){var _=this
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
jj:function jj(a){this.a=a},
jk:function jk(a){this.a=a},
jl:function jl(a){this.a=a},
fA:function fA(a,b,c,d,e){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.x=d
_.Q=null
_.cx=!1
_.cy=e
_.db=0},
jz:function jz(a){this.a=a}},Z={
lz:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cy(c)),35044)
a.bindBuffer(b,null)
return new Z.fT(b,s)},
aF:function(a){return new Z.bt(a)},
fT:function fT(a,b){this.a=a
this.b=b},
c_:function c_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
fU:function fU(a){this.a=a},
c0:function c0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c6:function c6(a,b,c){this.a=a
this.b=b
this.c=c},
bt:function bt(a){this.a=a}},D={
K:function(){return new D.c2()},
id:function id(){},
c2:function c2(){var _=this
_.c=_.b=_.a=null
_.d=0},
iy:function iy(a){this.a=a},
iz:function iz(a){this.a=a},
V:function V(){},
aZ:function aZ(){},
b_:function b_(){},
E:function E(a,b,c){this.c=a
this.d=b
this.e=c},
c1:function c1(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=null},
d2:function d2(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={cI:function cI(a,b){this.a=a
this.b=b},eP:function eP(a,b){this.a=a
this.b=b},iM:function iM(a,b){this.c=a
this.d=b},d7:function d7(a,b,c){this.x=a
this.c=b
this.d=c},iS:function iS(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},aa:function aa(a,b,c){this.a=a
this.b=b
this.c=c},ca:function ca(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},ja:function ja(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},cb:function cb(a,b,c){this.x=a
this.c=b
this.d=c},fc:function fc(){},dz:function dz(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},jE:function jE(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},fR:function fR(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
lm:function(a){var s=new V.ao(0,0,0,1),r=$.mo
if(r==null){r=V.mn(0,0,1,1)
$.mo=r}return new X.iE(s,r)},
mh:function(a){var s,r,q=new X.f7(1.0471975511965976,0.1)
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gt().n(0,q.gfH())
q.aB(new D.E("mover",s,q.b))}r=q.c
$.F().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
q.aB(new D.E("fov",r,1.0471975511965976))}r=q.d
$.F().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
q.aB(new D.E("near",r,0.1))}r=q.e
$.F().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
q.aB(new D.E("far",r,2000))}return q},
iE:function iE(a,b){var _=this
_.a=a
_.b=!0
_.r=b
_.x=null},
iI:function iI(){this.b=null},
f7:function f7(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
jw:function jw(){}},V={
ie:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.ao(s,r,q,1)},
i1:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
qO:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bC(a-b,s)
return(a<0?a+s:a)+b},
B:function(a,b,c){$.F().toString
return C.a.av(C.d.d7(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cD:function(a,b,c){var s,r,q,p,o,n,m,l=H.a([],t.s)
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.p)(a),++p){o=a[p]
$.F().toString
n=C.a.av(C.d.d7(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.d(l,m)
s=C.a.av(l[m],q)
r=l.length
if(m>=r)return H.d(l,m)
l[m]=s}return l},
lV:function(a){return C.d.iJ(Math.pow(2,C.d.cP(Math.log(a)/Math.log(2))))},
ar:function(){var s=$.mg
return s==null?$.mg=V.b4(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
b4:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bn(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mf:function(a,b,c){var s=c.A(),r=b.aO(s).A(),q=s.aO(r),p=new V.w(a.a,a.b,a.c)
return V.b4(r.a,q.a,s.a,r.bh(0).ac(p),r.b,q.b,s.b,q.bh(0).ac(p),r.c,q.c,s.c,s.bh(0).ac(p),0,0,0,1)},
lu:function(){var s=$.b6
return s==null?$.b6=new V.I(0,0,0):s},
mn:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ff(a,b,c,d)},
dP:function(){var s=$.mE
return s==null?$.mE=new V.w(0,0,0):s},
oN:function(){var s=$.jW
return s==null?$.jW=new V.w(-1,0,0):s},
ly:function(){var s=$.jX
return s==null?$.jX=new V.w(0,1,0):s},
dO:function(){var s=$.jY
return s==null?$.jY=new V.w(0,0,1):s},
oM:function(a,b,c){return new V.w(a,b,c)},
oO:function(){var s=$.mF
return s==null?$.mF=new V.bs(0,0,0,0):s},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iw:function iw(){},
df:function df(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bn:function bn(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
M:function M(a,b){this.a=a
this.b=b},
I:function I(a,b,c){this.a=a
this.b=b
this.c=c},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ff:function ff(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a7:function a7(a,b){this.a=a
this.b=b},
w:function w(a,b,c){this.a=a
this.b=b
this.c=c},
bs:function bs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qI:function(a){P.oH(C.R,new V.lb(a))},
oz:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.a5(n,"scroll",new V.jr(s),!1)
return new V.jp(o)},
aJ:function aJ(){},
lb:function lb(a){this.a=a},
eB:function eB(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
eH:function eH(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
eI:function eI(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
f9:function f9(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
jg:function jg(a,b,c){this.a=a
this.b=b
this.c=c},
jh:function jh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jp:function jp(a){this.a=a
this.b=null},
jr:function jr(a){this.a=a},
jq:function jq(a){this.a=a},
js:function js(a){this.a=a}},U={
ih:function(){return new U.ig()},
m6:function(a){var s=V.ar(),r=new U.cL(s)
if(!s.q(0,a))r.a=a
return r},
ig:function ig(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
cL:function cL(a){this.a=a
this.b=null},
c4:function c4(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
a1:function a1(){},
dL:function dL(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.y=_.x=!1
_.z=0
_.Q=c
_.ch=0
_.cx=d
_.cy=null},
dM:function dM(a,b,c,d,e){var _=this
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
dN:function dN(a,b){var _=this
_.a=null
_.b=a
_.e=_.d=0
_.f=b
_.r=null}},M={cK:function cK(a){var _=this
_.f=!1
_.r=null
_.a=a
_.c=_.b=null},cO:function cO(a){var _=this
_.d=_.c=_.b=null
_.e=a
_.r=null},cU:function cU(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
oj:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=""+"MaterialLight_"+a5.gaA(a5)+a6.gaA(a6)+a7.gaA(a7)+a8.gaA(a8)+a9.gaA(a9)+b0.gaA(b0)+b1.gaA(b1)+b2.gaA(b2)+b3.gaA(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.p)(b4),++r)a+="_"+b4[r].a}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.p)(b5),++r)a+="_"+b5[r].a}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.p)(b6),++r)a+="_"+b6[r].a}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.p)(b7),++r)a+="_"+b7[r].a}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
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
b=$.aU()
if(h){s=$.bB()
b=new Z.bt(b.a|s.a)}if(g)b=new Z.bt(b.a|$.bA().a)
if(f)b=new Z.bt(b.a|$.bC().a)
if(e)b=new Z.bt(b.a|$.bz().a)
return new A.iW(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,!1,f,e,!1,a1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
kI:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
kJ:function(a,b,c){var s,r="Txt, txtCube).rgb;\n"
A.kI(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.i2(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.c){s+="   "+c+"Color = "+c+"Clr*textureCube("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.c){s+="   "+c+"Color = textureCube("+c+r
a.a=s}a.a=s+"}\n"},
pR:function(a,b){var s,r=a.a,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.kI(b,r,"emission")
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
pN:function(a,b){var s,r=a.b
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.kJ(b,r,"ambient")
b.a+="\n"},
pP:function(a,b){var s,r=a.c
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.kJ(b,r,"diffuse")
r=b.a+="\n"
r+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
b.a=r
r+="{\n"
b.a=r
r+="   float scalar = dot(norm, -litVec);\n"
b.a=r
r+=u.q
b.a=r
r+="   return diffuseColor*scalar;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
pS:function(a,b){var s,r=a.d
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.kJ(b,r,"invDiffuse")
r=b.a+="\n"
r+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
b.a=r
r+="{\n"
b.a=r
r+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
b.a=r
r+=u.q
b.a=r
r+="   return invDiffuseColor*scalar;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
pY:function(a,b){var s,r=a.e
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.kJ(b,r,"specular")
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
r+=u.q
b.a=r
r+="   return specularColor*pow(scalar, shininess);\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
pU:function(a,b){var s,r,q
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
pW:function(a,b){var s,r=a.r,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.kI(b,r,"reflect")
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
pX:function(a,b){var s,r=a.x,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.kI(b,r,"refract")
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
pO:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.i2(r)
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
p+=u.M
c.a=p
p+=u.b
c.a=p
c.a=p+"\n"}p=t.s
o=H.a([],p)
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
o=H.a([],p)
s=a.b
if(!s.a)s=s.c
else s=!0
if(s)o.push("ambientColor")
if(a.dx){c.a+=u.h
o.push("highLight")
s=c.a+="   vec3 litPnt  = "+r+"ClosestPoint(lit);\n"
s+="   vec3 litView = (viewMat*vec4(litPnt, 1.0)).xyz;\n"
c.a=s
s+="   vec3 normDir = normalize(viewPos - litView);\n"
c.a=s
s+="   vec3 intensity = "+r+"Intensity(normDir, litPnt, lit);\n"
c.a=s
c.a=s+"   if(length(intensity) > 0.0001) {\n"
n=H.a([],p)
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
c.a=s+u.N
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
pQ:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+s
q=A.i2(r)
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
m=H.a([],p)
l=a.b
if(!l.a)l=l.c
else l=!0
if(l)m.push("ambientColor")
if(a.dx){c.a+=u.h
k=H.a([],p)
p=a.c
if(!p.a)p=p.c
else p=!0
if(p)k.push("diffuse(norm, lit.viewDir)")
p=a.d
if(!p.a)p=p.c
else p=!0
if(p)k.push("invDiffuse(norm, lit.viewDir)")
p=a.e
if(!p.a)p=p.c
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
p+=u.N
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
pV:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.i2(r)
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
if(m){p+=u.M
c.a=p
p+=u.b
c.a=p
p+="\n"
c.a=p}if(o)p=c.a=p+"   vec3 invNormDir = lit.invViewRotMat*normDir;\n"
if(n){p+="   float depth = dot(textureCube(shadowCube, invNormDir), lit.shadowAdj);\n"
c.a=p
p+=u.S
c.a=p
p+=u.U
c.a=p
c.a=p+"\n"}p=t.s
j=H.a([],p)
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
j=H.a([],p)
m=a.b
if(!m.a)m=m.c
else m=!0
if(m)j.push("ambientColor")
if(a.dx){c.a+=u.h
j.push("highLight")
k=s?", txtCube":""
if(n)k+=", shadowCube"
m=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
m+="   vec3 intensity = "+r+"Intensity(normDir, lit"+k+");\n"
c.a=m
c.a=m+"   if(length(intensity) > 0.0001) {\n"
i=H.a([],p)
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
p+=u.N
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
pZ:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.i2(r)
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
if(l){s+=u.M
c.a=s
s+=u.b
c.a=s
s=c.a=s+"\n"}s+="   vec3 normDir = normalize(dir);\n"
c.a=s
s+="   float zScale = dot(normDir, lit.objDir);\n"
c.a=s
s+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
c.a=s
if(m){s=$.iv
if(s==null)s=$.iv=new E.h7(E.mG(),E.mH())
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
s+=u.S
c.a=s
s+=u.U
c.a=s
c.a=s+"\n"}s=t.s
h=H.a([],s)
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
h=H.a([],s)
p=a.b
if(!p.a)p=p.c
else p=!0
if(p)h.push("ambientColor")
if(a.dx){c.a+=u.h
h.push("highLight")
i=k?", txt2D":""
if(n)i+=", shadow2D"
p=c.a+="   vec3 intensity = "+r+"Intensity(lit"+i+");\n"
p+="   if(length(intensity) > 0.0001) {\n"
c.a=p
c.a=p+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
g=H.a([],s)
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
s+=u.N
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
pT:function(a,b){var s,r
if(a.cy>0)return
s=b.a+="// === No Lights ===\n"
s+="\n"
b.a=s
s+="vec3 nonLightValues(vec3 norm)\n"
b.a=s
s+="{\n"
b.a=s
if(a.dx)b.a=s+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
r=H.a([],t.s)
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
s=b.a+="   return "+C.b.j(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
q_:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j=new P.a0(""),i=""+"precision mediump float;\n"
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
A.pR(a,j)
A.pN(a,j)
A.pP(a,j)
A.pS(a,j)
A.pY(a,j)
i=a.db
if(i){q=j.a+="// === Environmental ===\n"
q+="\n"
j.a=q
q+="uniform samplerCube envSampler;\n"
j.a=q
j.a=q+"\n"
A.pW(a,j)
A.pX(a,j)}A.pU(a,j)
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
if(q){for(p=a.z,o=p.length,m=0;m<p.length;p.length===o||(0,H.p)(p),++m)A.pO(a,p[m],j)
for(p=a.Q,o=p.length,m=0;m<p.length;p.length===o||(0,H.p)(p),++m)A.pQ(a,p[m],j)
for(p=a.ch,o=p.length,m=0;m<p.length;p.length===o||(0,H.p)(p),++m)A.pV(a,p[m],j)
for(p=a.cx,o=p.length,m=0;m<p.length;p.length===o||(0,H.p)(p),++m)A.pZ(a,p[m],j)
A.pT(a,j)}p=j.a+="// === Main ===\n"
p+="\n"
j.a=p
p+="void main()\n"
j.a=p
p+="{\n"
j.a=p
p=j.a=p+"   float alpha = alphaValue();\n"
s=s?j.a=p+"   vec3 norm = normal();\n":p
if(i)j.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
l=H.a([],t.s)
if(q){j.a+=u.N
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
for(i=a.z,s=i.length,m=0;m<i.length;i.length===s||(0,H.p)(i),++m){q="barLight"+i[m].a
if(0>=q.length)return H.d(q,0)
j.a+=k+(q[0].toUpperCase()+C.a.aj(q,1))+"Values(norm);\n"}for(i=a.Q,s=i.length,m=0;m<i.length;i.length===s||(0,H.p)(i),++m){q="dirLight"+i[m].a
if(0>=q.length)return H.d(q,0)
j.a+=k+(q[0].toUpperCase()+C.a.aj(q,1))+"Values(norm);\n"}for(i=a.ch,s=i.length,m=0;m<i.length;i.length===s||(0,H.p)(i),++m){q="pointLight"+i[m].a
if(0>=q.length)return H.d(q,0)
j.a+=k+(q[0].toUpperCase()+C.a.aj(q,1))+"Values(norm);\n"}for(i=a.cx,s=i.length,m=0;m<i.length;i.length===s||(0,H.p)(i),++m){q="spotLight"+i[m].a
if(0>=q.length)return H.d(q,0)
j.a+=k+(q[0].toUpperCase()+C.a.aj(q,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}i=a.a
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
i=j.a+="   vec4 objClr = vec4("+C.b.j(l," + ")+", alpha);\n"
if(r)i=j.a=i+"   objClr = colorMat*objClr;\n"
i+="   gl_FragColor = objClr;\n"
j.a=i
i=j.a=i+"}\n"
return i.charCodeAt(0)==0?i:i},
q0:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.ba+"];\n"
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
q2:function(a,b){var s
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
q1:function(a,b){var s
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
q4:function(a,b){var s,r
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
q5:function(a,b){var s,r
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
q3:function(a,b){var s
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
q6:function(a,b){var s
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
i2:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.aj(a,1)},
lx:function(a,b,c,d,e){var s=new A.fG(H.a([],t.t),a,c,e)
s.f=d
s.e=P.eT(d,0,!1,t.S)
return s},
eu:function eu(a,b,c){this.a=a
this.b=b
this.c=c},
i6:function i6(a){this.a=a},
av:function av(a,b,c){this.a=a
this.b=b
this.c=c},
dc:function dc(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.ei=_.iZ=_.eh=_.eg=_.iY=_.ef=_.ee=_.ed=_.iX=_.ec=_.eb=_.ea=_.iW=_.e9=_.e8=_.iV=_.e7=_.bO=_.bN=_.ba=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.cG=c
_.cH=d
_.cI=e
_.cJ=f
_.cK=g
_.cL=h
_.cM=i
_.cN=j
_.j1=_.j0=_.j_=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
bf:function bf(a,b){this.a=a
this.b=b},
bh:function bh(a,b){this.a=a
this.b=b},
bo:function bo(a,b){this.a=a
this.b=b},
bq:function bq(a,b){this.a=a
this.b=b},
iW:function iW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.ba=b5
_.bN=b6
_.bO=b7},
dE:function dE(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dF:function dF(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dH:function dH(a,b,c,d,e,f,g,h,i,j){var _=this
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
dK:function dK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ch:function ch(){},
dv:function dv(a,b){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
a3:function a3(){},
jJ:function jJ(a){this.a=a},
cn:function cn(a,b,c){this.a=a
this.c=b
this.d=c},
fI:function fI(a,b,c){this.a=a
this.c=b
this.d=c},
fJ:function fJ(a,b,c){this.a=a
this.c=b
this.d=c},
fK:function fK(a,b,c){this.a=a
this.c=b
this.d=c},
fG:function fG(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
dB:function dB(a,b,c){this.a=a
this.c=b
this.d=c},
fH:function fH(a,b,c){this.a=a
this.c=b
this.d=c},
dC:function dC(a,b,c){this.a=a
this.c=b
this.d=c},
dD:function dD(a,b,c){this.a=a
this.c=b
this.d=c},
fL:function fL(a,b,c){this.a=a
this.c=b
this.d=c},
dG:function dG(a,b,c){this.a=a
this.c=b
this.d=c},
co:function co(a,b,c){this.a=a
this.c=b
this.d=c},
dI:function dI(a,b,c){this.a=a
this.c=b
this.d=c},
dJ:function dJ(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lQ:function(a,b,c,d){var s=F.fj()
F.eg(s,b,c,d,a,1,0,0,1)
F.eg(s,b,c,d,a,0,1,0,3)
F.eg(s,b,c,d,a,0,0,1,2)
F.eg(s,b,c,d,a,-1,0,0,0)
F.eg(s,b,c,d,a,0,-1,0,0)
F.eg(s,b,c,d,a,0,0,-1,3)
s.ap()
return s},
kC:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
eg:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.w(g,f+a2,e+a3)
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
i.d=h}k=F.kC(h)
j=F.kC(g)
a.bd(F.le(a0,a1,new F.kx(i,F.kC(f),F.kC(e),j,k,c),b))},
nc:function(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(a1<3)throw H.c(P.f("Must have 3 or more sizes for a disk."))
s=F.fj()
r=b?-1:1
q=-6.283185307179586/a1
p=t.k
o=H.a([],p)
n=s.gS()
m=new V.w(0,0,r).A()
o.push(n.hP(new V.ay(a,-1,-1,-1),new V.ao(1,1,1,1),new V.I(0,0,c),new V.w(0,0,r),new V.M(0.5,0.5),m))
for(l=0;l<=a1;++l){k=q*l
j=r*Math.sin(k)
i=Math.cos(k)
h=a0.$1(l/a1)
n=s.a
if(n==null)n=s.a=new F.y(s,H.a([],p))
m=new V.w(j,i,r).A()
if(j<0)g=0
else g=j>1?1:j
f=i<0
if(f)e=0
else e=i>1?1:i
if(f)f=0
else f=i>1?1:i
d=F.cs(new V.ay(a,-1,-1,-1),null,new V.ao(g,e,f,1),new V.I(j*h,i*h,c),new V.w(0,0,r),new V.M(j*0.5+0.5,i*0.5+0.5),m,null,0)
n.n(0,d)
o.push(d)}s.gR().dQ(o)
return s},
na:function(a,b,c){return F.qp(!0,a,1,new F.kM(1,c),b)},
qp:function(a,b,c,d,e){var s
if(e<3)throw H.c(P.f("Must have 3 or more sizes for a cylindrical shape."))
if(c<1)throw H.c(P.f("Must have 1 or more divisionss for a cylindrical shape."))
s=F.le(c,e,new F.kO(d),null)
s.ap()
s.bK()
if(b)s.bd(F.nc(3,!1,1,new F.kP(d),e))
s.bd(F.nc(1,!0,-1,new F.kQ(d),e))
return s},
qD:function(a,b){var s=F.le(a,b,new F.l_(),null)
s.gR().bX()
s.ap()
s.bK()
return s},
ah:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null
b=b.A()
s=b.a
r=b.b
q=b.c
p=F.cs(h,h,h,new V.I(s,r,q),b,h,h,h,0)
o=a.i7(p,new F.dQ())
if(o!=null)return o
n=s*0.5+0.5
m=r*0.5+0.5
l=q*0.5+0.5
if(n<0)n=0
else if(n>1)n=1
if(m<0)m=0
else if(m>1)m=1
if(l<0)l=0
else if(l>1)l=1
p.saq(0,new V.ao(n,m,l,1))
k=Math.sqrt(s*s+r*r)
j=Math.atan2(r,s)/1.5707963267948966
if(j<0)j=-j
i=Math.atan2(k,q)/3.141592653589793
p.sd5(new V.M(j,i<0?-i:i))
a.gS().n(0,p)
return p},
U:function(a,b,c,d,e){var s,r,q,p,o,n,m
if(e<=0)a.gR().bI(0,b,d,c)
else{s=b.r
if(s==null)s=V.dO()
r=c.r
if(r==null)r=V.dO()
q=d.r
if(q==null)q=V.dO()
p=F.ah(a,s.V(0,r).L(0,0.5))
o=F.ah(a,r.V(0,q).L(0,0.5))
n=F.ah(a,q.V(0,s).L(0,0.5))
m=e-1
F.U(a,b,p,n,m)
F.U(a,p,c,o,m)
F.U(a,o,n,p,m)
F.U(a,n,o,d,m)}},
nm:function(a,b){var s=F.lQ(a,null,new F.lc(1,new F.ld()),b)
s.bK()
return s},
qN:function(){return F.nb(15,30,0.5,1,new F.lf())},
qC:function(){return F.nb(12,120,0.3,1,new F.kZ(3,2))},
nb:function(a,b,c,d,e){var s=F.le(a,b,new F.kN(e,d,b,c),null)
s.ap()
s.bK()
return s},
le:function(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null
if(a<1)throw H.c(P.f("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.f("Must have 1 or more divisions of the height for a surface."))
s=F.fj()
r=t.k
q=H.a([],r)
for(p=0;p<=b;++p){o=p/b
n=s.a
if(n==null)n=s.a=new F.y(s,H.a([],r))
if(o<0)m=0
else m=o>1?1:o
l=F.cs(d,d,new V.ao(m,0,0,1),d,d,new V.M(o,1),d,d,0)
n.n(0,l)
c.$3(l,o,0)
q.push(l.cD(a0))}for(p=1;p<=a;++p){k=p/a
for(n=k>1,m=k<0,j=1-k,i=0;i<=b;++i){o=i/b
h=s.a
if(h==null)h=s.a=new F.y(s,H.a([],r))
if(o<0)g=0
else g=o>1?1:o
if(m)f=0
else f=n?1:k
if(m)e=0
else e=n?1:k
l=F.cs(d,d,new V.ao(g,f,e,1),d,d,new V.M(o,j),d,d,0)
h.n(0,l)
c.$3(l,o,k)
q.push(l.cD(a0))}}s.gR().hO(a+1,b+1,q)
return s},
fj:function(){return new F.jn()},
cs:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cr()
h=$.nF()
s=$.aU()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.bB().a)!==0)q.r=e
if((r&$.bA().a)!==0)q.x=b
if((r&$.bV().a)!==0)q.y=f
if((r&$.bC().a)!==0)q.z=g
if((r&$.nG().a)!==0)q.Q=c
if((r&$.cF().a)!==0)q.ch=i
if((r&$.bz().a)!==0)q.cx=a
return q},
kx:function kx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kM:function kM(a,b){this.a=a
this.b=b},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
l_:function l_(){},
ld:function ld(){},
lc:function lc(a,b){this.a=a
this.b=b},
lf:function lf(){},
kZ:function kZ(a,b){this.a=a
this.b=b},
kN:function kN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ap:function ap(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iA:function iA(){},
jt:function jt(){},
eR:function eR(){this.b=this.a=null},
iN:function iN(){},
jI:function jI(){},
fb:function fb(){this.a=null},
jn:function jn(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
jo:function jo(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ds:function ds(a,b){this.a=a
this.b=b},
dt:function dt(a,b){this.a=a
this.b=b},
bO:function bO(a,b){this.a=a
this.b=b},
cr:function cr(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
k4:function k4(a){this.a=a},
k3:function k3(a){this.a=a},
y:function y(a,b){this.a=a
this.b=!1
this.c=b},
al:function al(a,b,c){this.b=a
this.c=b
this.d=c},
jZ:function jZ(a,b){this.a=a
this.b=b},
k_:function k_(a,b){this.a=a
this.b=b},
aE:function aE(a,b){this.b=a
this.c=b},
k1:function k1(){},
dQ:function dQ(){},
k2:function k2(){},
k0:function k0(){},
jd:function jd(){},
ba:function ba(a){this.b=a}},T={dy:function dy(){},fz:function fz(a){var _=this
_.a=0
_.b=a
_.c=!1
_.d=0
_.e=null},jx:function jx(a,b){var _=this
_.a=a
_.c=b
_.e=_.d=0},jy:function jy(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
qF:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7="testCanvas",a8=null,a9="modifiers",b0=V.oz("Test 017"),b1=W.li()
b1.className="pageLargeCanvas"
b1.id=a7
b0.a.appendChild(b1).toString
s=t.s
b0.dS(H.a(["A test of the Material Lighting shader with solid color directional light, cube mapped textures, and a reflection map. The specular map is also used to define where reflections are painted."],s))
b0.hM(H.a(["shapes"],s))
b0.dS(H.a(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(a7)
if(r==null)H.h(P.f("Failed to find an element with the identifier, testCanvas."))
q=E.oG(r,!0,!0,!0,!1)
p=E.ma()
p.sae(0,F.nm(8,8))
o=X.lm(a8)
if(o.b){o.b=!1
o.aB(new D.E("clearColor",!0,!1))}n=q.f
m=n.ex("../resources/maskonaive",".jpg")
l=n.ew("../resources/earthSpecular")
k=n.ew("../resources/earthColor")
n=O.lj(t.gc)
j=new O.db(n)
n.bi(j.gfB(),j.gfD())
n=j.gev()
n.gt().n(0,j.gdD())
i=j.gaJ()
n.geu().n(0,i)
n=j.gev()
h=V.ly()
g=U.m6(V.mf(V.lu(),h,new V.w(-1,-1,-1)))
f=new V.Y(1,1,1)
e=new D.c1(new V.Y(1,1,1),V.dO(),V.ly(),V.oN())
d=e.a
e.a=g
g.gt().n(0,e.gf2())
e.aI(new D.E("mover",d,e.a))
if(!e.b.q(0,f)){d=e.b
e.b=f
e.aI(new D.E("color",d,f))}n.n(0,e)
n=j.gcv()
n.saq(0,new V.Y(0.5,0.5,0.5))
n=j.gcF()
n.saq(0,new V.Y(0.5,0.5,0.5))
j.gcv().say(k)
j.gcF().say(k)
j.gc2().say(l)
n=j.ch
if(n!==m){if(n!=null)n.gt().B(0,i)
d=j.ch
j.ch=m
m.gt().n(0,i)
j.Y(new D.E("environment",d,j.ch))}j.gd1().say(l)
n=j.gd1()
n.saq(0,new V.Y(0.5,0.5,0.5))
n=j.gc2()
n.cq(new A.av(!0,!1,n.c.c))
n.dH(10)
c=new U.c4(V.ar(),H.a([],t.eJ))
c.bi(c.gfv(),c.ghc())
n=q.x
i=U.ih()
g=U.ih()
f=$.bR
if(f==null)f=$.bR=new V.a7(0,0)
f=new U.dM(i,g,new X.aa(!1,!1,!1),f,V.ar())
i.sda(0,!0)
i.scT(6.283185307179586)
i.scV(0)
i.sa_(0,0)
i.scU(100)
i.sa5(0)
i.scE(0.5)
e=f.gb1()
i.gt().n(0,e)
g.sda(0,!0)
g.scT(6.283185307179586)
g.scV(0)
g.sa_(0,0)
g.scU(100)
g.sa5(0)
g.scE(0.5)
g.gt().n(0,e)
i=new X.aa(!1,!1,!1)
if(!f.d.q(0,i)){d=f.d
f.d=i
f.W(new D.E(a9,d,i))}f.bs(n)
c.n(0,f)
U.ih()
if($.bR==null)$.bR=new V.a7(0,0)
V.ar()
i=U.ih()
g=$.bR
if(g==null)g=$.bR=new V.a7(0,0)
g=new U.dL(i,new X.aa(!1,!1,!1),g,V.ar())
i.sda(0,!0)
i.scT(6.283185307179586)
i.scV(0)
i.sa_(0,0)
i.scU(100)
i.sa5(0)
i.scE(0.2)
i.gt().n(0,g.gb1())
i=new X.aa(!0,!1,!1)
if(!g.c.q(0,i)){d=g.c
g.c=i
g.W(new D.E(a9,d,i))}g.bs(n)
c.n(0,g)
i=new X.aa(!1,!1,!1)
g=new U.dN(i,V.ar())
f=new X.aa(!1,!1,!1)
if(!i.q(0,f)){g.b=f
g.W(new D.E(a9,i,f))}g.bs(n)
c.n(0,g)
c.n(0,U.m6(V.b4(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
b=X.mh(c)
n=E.ma()
a=new M.cO(n)
a0=F.fj()
i=a0.gS()
g=new V.w(-1,-1,1).A()
a1=i.bJ(new V.ay(1,2,4,6),V.ie(255,0,0),new V.I(-1,-1,0),new V.M(0,1),g,a8)
g=a0.gS()
i=new V.w(1,-1,1).A()
a2=g.bJ(new V.ay(0,3,4,6),V.ie(0,0,255),new V.I(1,-1,0),new V.M(1,1),i,a8)
i=a0.gS()
g=new V.w(1,1,1).A()
a3=i.bJ(new V.ay(0,2,5,6),V.ie(0,128,0),new V.I(1,1,0),new V.M(1,0),g,a8)
g=a0.gS()
i=$.a4
if(i==null)i=$.a4=new V.M(0,0)
f=new V.w(-1,1,1).A()
a4=g.bJ(new V.ay(0,2,4,7),V.ie(255,255,0),new V.I(-1,1,0),i,f,a8)
a0.gR().dQ(H.a([a1,a2,a3,a4],t.k))
a0.ap()
n.sae(0,a0)
a.sbt(a8)
a.sbz(0,a8)
a.sbA(a8)
n=new O.du(new V.Y(1,1,1))
d=n.c
n.c=m
m.gt().n(0,n.gaJ())
n.Y(new D.E("boxTexture",d,n.c))
a.sbA(n)
a.sbz(0,o)
a.sbt(b)
n=O.lj(t.l)
a5=new M.cU(n)
n.bi(a5.gfJ(),a5.gfL())
a6=X.lm(a8)
a5.sbt(a8)
a5.sbz(0,a6)
a5.sbA(a8)
a5.sbt(b)
a5.sbA(j)
a5.sbz(0,o)
n.n(0,p)
n=t.ba
i=H.a([a,a5],n)
n=new M.cK(H.a([],n))
n.bi(n.ghg(),n.ghi())
n.ab(0,i)
i=q.d
if(i!==n){if(i!=null)i.gt().B(0,q.gdk())
q.d=n
n.gt().n(0,q.gdk())
q.dl()}r=s.getElementById("shapes")
if(r==null)H.h(P.f("Failed to find shapes for RadioGroup"))
s=new V.jg("shapes",!0,r)
s.aC(0,"Cube",new T.l0(p))
s.aC(0,"Cuboid",new T.l1(p))
s.aC(0,"Cylinder",new T.l2(p))
s.aC(0,"Cone",new T.l3(p))
s.aC(0,"LatLonSphere",new T.l4(p))
s.aC(0,"IsoSphere",new T.l5(p))
s.bI(0,"Sphere",new T.l6(p),!0)
s.aC(0,"Toroid",new T.l7(p))
s.aC(0,"Knot",new T.l8(p))
s=q.Q
if(s==null)s=q.Q=D.K()
n=s.b
s=n==null?s.b=H.a([],t.b):n
s.push(new T.l9(b0,j))
V.qI(q)},
l0:function l0(a){this.a=a},
l1:function l1(a){this.a=a},
l2:function l2(a){this.a=a},
l3:function l3(a){this.a=a},
l4:function l4(a){this.a=a},
l5:function l5(a){this.a=a},
l6:function l6(a){this.a=a},
l7:function l7(a){this.a=a},
l8:function l8(a){this.a=a},
l9:function l9(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.lq.prototype={}
J.b.prototype={
q:function(a,b){return a===b},
gJ:function(a){return H.dn(a)},
i:function(a){return"Instance of '"+H.dp(a)+"'"}}
J.eL.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iad:1}
J.d0.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.bl.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)},
$imc:1}
J.f8.prototype={}
J.bQ.prototype={}
J.b0.prototype={
i:function(a){var s=a[$.nr()]
if(s==null)return this.eV(a)
return"JavaScript function for "+J.cG(s)},
$icX:1}
J.x.prototype={
d2:function(a,b){if(!!a.fixed$length)H.h(P.C("removeAt"))
if(b<0||b>=a.length)throw H.c(P.fe(b,null))
return a.splice(b,1)[0]},
B:function(a,b){var s
if(!!a.fixed$length)H.h(P.C("remove"))
for(s=0;s<a.length;++s)if(J.G(a[s],b)){a.splice(s,1)
return!0}return!1},
ab:function(a,b){if(!!a.fixed$length)H.h(P.C("addAll"))
this.f8(a,b)
return},
f8:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.aK(a))
for(s=0;s<r;++s)a.push(b[s])},
I:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.aK(a))}},
j:function(a,b){var s,r,q=a.length,p=P.eT(q,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.z(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
ij:function(a){return this.j(a,"")},
ib:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.aK(a))}return s},
ic:function(a,b,c){return this.ib(a,b,c,t.A)},
ia:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.aK(a))}throw H.c(H.iJ())},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
gi9:function(a){if(a.length>0)return a[0]
throw H.c(H.iJ())},
gaF:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.iJ())},
dU:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.aK(a))}return!1},
bk:function(a,b){if(!!a.immutable$list)H.h(P.C("sort"))
H.oC(a,b==null?J.pE():b)},
eR:function(a){return this.bk(a,null)},
E:function(a,b){var s
for(s=0;s<a.length;++s)if(J.G(a[s],b))return!0
return!1},
i:function(a){return P.ln(a,"[","]")},
gU:function(a){return new J.ai(a,a.length)},
gJ:function(a){return H.dn(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.h(P.C("set length"))
if(b>a.length)H.ky(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.cC(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.h(P.C("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cC(a,b))
a[b]=c},
$in:1,
$ii:1,
$iq:1}
J.iK.prototype={}
J.ai.prototype={
gD:function(a){return H.X(this).c.a(this.d)},
v:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.p(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.c8.prototype={
ar:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbR(b)
if(this.gbR(a)===s)return 0
if(this.gbR(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbR:function(a){return a===0?1/a<0:a<0},
iJ:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.C(""+a+".toInt()"))},
cP:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.C(""+a+".floor()"))},
ax:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.C(""+a+".round()"))},
d7:function(a,b){var s
if(b>20)throw H.c(P.ab(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbR(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
bC:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
eX:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dK(a,b)},
a9:function(a,b){return(a|0)===a?a/b|0:this.dK(a,b)},
dK:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.C("Result of truncating division is "+H.z(s)+": "+H.z(a)+" ~/ "+b))},
b7:function(a,b){var s
if(a>0)s=this.dJ(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hD:function(a,b){if(b<0)throw H.c(H.el(b))
return this.dJ(a,b)},
dJ:function(a,b){return b>31?0:a>>>b},
$iJ:1,
$ia6:1}
J.d_.prototype={$ik:1}
J.eM.prototype={}
J.bk.prototype={
Z:function(a,b){if(b<0)throw H.c(H.cC(a,b))
if(b>=a.length)H.h(H.cC(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.c(H.cC(a,b))
return a.charCodeAt(b)},
V:function(a,b){return a+b},
be:function(a,b,c,d){var s=P.bp(b,c,a.length),r=a.substring(0,b),q=a.substring(s)
return r+d+q},
af:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.ab(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a6:function(a,b){return this.af(a,b,0)},
u:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fe(b,null))
if(b>c)throw H.c(P.fe(b,null))
if(c>a.length)throw H.c(P.fe(c,null))
return a.substring(b,c)},
aj:function(a,b){return this.u(a,b,null)},
iL:function(a){return a.toLowerCase()},
L:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.O)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
av:function(a,b){var s=b-a.length
if(s<=0)return a
return this.L(" ",s)+a},
bP:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.ab(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
eo:function(a,b){return this.bP(a,b,0)},
hV:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.ab(c,0,s,null,null))
return H.nn(a,b,c)},
E:function(a,b){return this.hV(a,b,0)},
ar:function(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gJ:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gl:function(a){return a.length},
$im:1}
H.d1.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.r.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.Z(this.a,b)}}
H.n.prototype={}
H.d6.prototype={
gU:function(a){return new H.bm(this,this.gl(this))},
c0:function(a,b){return this.eU(0,b)}}
H.bm.prototype={
gD:function(a){return H.X(this).c.a(this.d)},
v:function(){var s,r=this,q=r.a,p=J.cE(q),o=p.gl(q)
if(r.b!==o)throw H.c(P.aK(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.M(q,s);++r.c
return!0}}
H.b2.prototype={
gU:function(a){return new H.eU(J.aG(this.a),this.b)},
gl:function(a){return J.aV(this.a)},
M:function(a,b){return this.b.$1(J.i3(this.a,b))}}
H.cS.prototype={$in:1}
H.eU.prototype={
v:function(){var s=this,r=s.b
if(r.v()){s.a=s.c.$1(r.gD(r))
return!0}s.a=null
return!1},
gD:function(a){return H.X(this).Q[1].a(this.a)}}
H.da.prototype={
gl:function(a){return J.aV(this.a)},
M:function(a,b){return this.b.$1(J.i3(this.a,b))}}
H.bb.prototype={
gU:function(a){return new H.fV(J.aG(this.a),this.b)}}
H.fV.prototype={
v:function(){var s,r
for(s=this.a,r=this.b;s.v();)if(r.$1(s.gD(s)))return!0
return!1},
gD:function(a){var s=this.a
return s.gD(s)}}
H.cV.prototype={}
H.fO.prototype={
m:function(a,b,c){throw H.c(P.C("Cannot modify an unmodifiable list"))}}
H.cp.prototype={}
H.cM.prototype={
i:function(a){return P.lt(this)},
m:function(a,b,c){H.o2()},
$iH:1}
H.cN.prototype={
gl:function(a){return this.a},
cB:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.cB(0,b))return null
return this.dv(b)},
dv:function(a){return this.b[a]},
I:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.dv(q))}}}
H.jG.prototype={
au:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.dm.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.eO.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.fN.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.je.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.hA.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bG.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.np(r==null?"unknown":r)+"'"},
$icX:1,
giO:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fw.prototype={}
H.fp.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.np(s)+"'"}}
H.bY.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bY))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gJ:function(a){var s,r=this.c
if(r==null)s=H.dn(this.a)
else s=typeof r!=="object"?J.lh(r):H.dn(r)
return(s^H.dn(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.z(this.d)+"' of "+("Instance of '"+H.dp(s)+"'")}}
H.fh.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.Z.prototype={
gl:function(a){return this.a},
gbQ:function(a){return this.a===0},
ga7:function(a){return new H.d3(this,H.X(this).N("d3<1>"))},
giN:function(a){var s=this,r=H.X(s)
return H.oi(s.ga7(s),new H.iL(s),r.c,r.Q[1])},
cB:function(a,b){var s=this.b
if(s==null)return!1
return this.fg(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bE(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bE(p,b)
q=r==null?n:r.b
return q}else return o.ih(b)},
ih:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.dw(p,q.eq(a))
r=q.er(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.dn(s==null?q.b=q.cl():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.dn(r==null?q.c=q.cl():r,b,c)}else q.ii(b,c)},
ii:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.cl()
s=p.eq(a)
r=p.dw(o,s)
if(r==null)p.cr(o,s,[p.cm(a,b)])
else{q=p.er(r,a)
if(q>=0)r[q].b=b
else r.push(p.cm(a,b))}},
I:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.aK(s))
r=r.c}},
dn:function(a,b,c){var s=this.bE(a,b)
if(s==null)this.cr(a,b,this.cm(b,c))
else s.b=c},
fs:function(){this.r=this.r+1&67108863},
cm:function(a,b){var s,r=this,q=new H.iO(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.fs()
return q},
eq:function(a){return J.lh(a)&0x3ffffff},
er:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.G(a[r].a,b))return r
return-1},
i:function(a){return P.lt(this)},
bE:function(a,b){return a[b]},
dw:function(a,b){return a[b]},
cr:function(a,b,c){a[b]=c},
fk:function(a,b){delete a[b]},
fg:function(a,b){return this.bE(a,b)!=null},
cl:function(){var s="<non-identifier-key>",r=Object.create(null)
this.cr(r,s,r)
this.fk(r,s)
return r}}
H.iL.prototype={
$1:function(a){var s=this.a
return H.X(s).Q[1].a(s.h(0,a))},
$S:function(){return H.X(this.a).N("2(1)")}}
H.iO.prototype={}
H.d3.prototype={
gl:function(a){return this.a.a},
gU:function(a){var s=this.a,r=new H.eS(s,s.r)
r.c=s.e
return r}}
H.eS.prototype={
gD:function(a){return H.X(this).c.a(this.d)},
v:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.aK(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kU.prototype={
$1:function(a){return this.a(a)},
$S:39}
H.kV.prototype={
$2:function(a,b){return this.a(a,b)},
$S:59}
H.kW.prototype={
$1:function(a){return this.a(a)},
$S:50}
H.eN.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imm:1}
H.dh.prototype={$idh:1}
H.a2.prototype={$ia2:1}
H.cc.prototype={
gl:function(a){return a.length},
$iA:1}
H.bM.prototype={
h:function(a,b){H.bc(b,a,a.length)
return a[b]},
m:function(a,b,c){H.bc(b,a,a.length)
a[b]=c},
$in:1,
$ii:1,
$iq:1}
H.di.prototype={
m:function(a,b,c){H.bc(b,a,a.length)
a[b]=c},
$in:1,
$ii:1,
$iq:1}
H.eZ.prototype={
h:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.f_.prototype={
h:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.f0.prototype={
h:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.f1.prototype={
h:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.f2.prototype={
h:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.dj.prototype={
gl:function(a){return a.length},
h:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.bN.prototype={
gl:function(a){return a.length},
h:function(a,b){H.bc(b,a,a.length)
return a[b]},
$ibN:1,
$icm:1}
H.dY.prototype={}
H.dZ.prototype={}
H.e_.prototype={}
H.e0.prototype={}
H.aA.prototype={
N:function(a){return H.hO(v.typeUniverse,this,a)},
bn:function(a){return H.pc(v.typeUniverse,this,a)}}
H.hc.prototype={}
H.h8.prototype={
i:function(a){return this.a}}
H.e9.prototype={}
P.k6.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:49}
P.k5.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:47}
P.k7.prototype={
$0:function(){this.a.$0()},
$S:12}
P.k8.prototype={
$0:function(){this.a.$0()},
$S:12}
P.e8.prototype={
f5:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cB(new P.kp(this,b),0),a)
else throw H.c(P.C("`setTimeout()` not found."))},
f6:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cB(new P.ko(this,a,Date.now(),b),0),a)
else throw H.c(P.C("Periodic timer."))},
$ijB:1}
P.kp.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:1}
P.ko.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.eX(s,o)}q.c=p
r.d.$1(q)},
$S:12}
P.cw.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.z(this.a)+")"}}
P.bS.prototype={
gD:function(a){var s=this.c
if(s==null)return this.b
return s.gD(s)},
v:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.v())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.cw){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aG(s)
if(o instanceof P.bS){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.e5.prototype={
gU:function(a){return new P.bS(this.a())}}
P.fW.prototype={}
P.cj.prototype={}
P.fr.prototype={}
P.kw.prototype={}
P.kK.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:1}
P.kd.prototype={
iF:function(a){var s,r,q,p=null
try{if(C.f===$.aS){a.$0()
return}P.q8(p,p,this,a)}catch(q){s=H.an(q)
r=H.lS(q)
P.n4(p,p,this,s,r)}},
iG:function(a,b){var s,r,q,p=null
try{if(C.f===$.aS){a.$1(b)
return}P.q9(p,p,this,a,b)}catch(q){s=H.an(q)
r=H.lS(q)
P.n4(p,p,this,s,r)}},
iH:function(a,b){return this.iG(a,b,t.A)},
hS:function(a){return new P.ke(this,a)},
dZ:function(a,b){return new P.kf(this,a,b)}}
P.ke.prototype={
$0:function(){return this.a.iF(this.b)},
$S:1}
P.kf.prototype={
$1:function(a){return this.a.iH(this.b,a)},
$S:function(){return this.c.N("~(0)")}}
P.dU.prototype={
gU:function(a){var s=new P.dV(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
E:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.ff(b)
return r}},
ff:function(a){var s=this.d
if(s==null)return!1
return this.cb(s[this.c7(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.dq(s==null?q.b=P.lB():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.dq(r==null?q.c=P.lB():r,b)}else return q.f7(0,b)},
f7:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.lB()
s=q.c7(b)
r=p[s]
if(r==null)p[s]=[q.c6(b)]
else{if(q.cb(r,b)>=0)return!1
r.push(q.c6(b))}return!0},
B:function(a,b){if((b&1073741823)===b)return this.hr(this.c,b)
else return this.hq(0,b)},
hq:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.c7(b)
r=n[s]
q=o.cb(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dM(p)
return!0},
dq:function(a,b){if(a[b]!=null)return!1
a[b]=this.c6(b)
return!0},
hr:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.dM(s)
delete a[b]
return!0},
dr:function(){this.r=this.r+1&1073741823},
c6:function(a){var s,r=this,q=new P.kc(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dr()
return q},
dM:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.dr()},
c7:function(a){return J.lh(a)&1073741823},
cb:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.G(a[r].a,b))return r
return-1}}
P.kc.prototype={}
P.dV.prototype={
gD:function(a){return H.X(this).c.a(this.d)},
v:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.aK(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cZ.prototype={}
P.iP.prototype={
$2:function(a,b){this.a.m(0,this.b.a(a),this.c.a(b))},
$S:14}
P.d5.prototype={$in:1,$ii:1,$iq:1}
P.j.prototype={
gU:function(a){return new H.bm(a,this.gl(a))},
M:function(a,b){return this.h(a,b)},
I:function(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gl(a))throw H.c(P.aK(a))}},
gbQ:function(a){return this.gl(a)===0},
iK:function(a,b){var s,r,q,p,o=this
if(o.gbQ(a)){s=J.lo(0,H.bd(a).N("j.E"))
return s}r=o.h(a,0)
q=P.eT(o.gl(a),r,!0,H.bd(a).N("j.E"))
for(p=1;p<o.gl(a);++p){s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
d6:function(a){return this.iK(a,!0)},
i6:function(a,b,c,d){var s
H.bd(a).N("j.E").a(d)
P.bp(b,c,this.gl(a))
for(s=b;s<c;++s)this.m(a,s,d)},
i:function(a){return P.ln(a,"[","]")}}
P.d8.prototype={}
P.iT.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.z(a)
r.a=s+": "
r.a+=H.z(b)},
$S:46}
P.O.prototype={
I:function(a,b){var s,r,q
for(s=J.aG(this.ga7(a)),r=H.bd(a).N("O.V");s.v();){q=s.gD(s)
b.$2(q,r.a(this.h(a,q)))}},
gl:function(a){return J.aV(this.ga7(a))},
i:function(a){return P.lt(a)},
$iH:1}
P.hP.prototype={
m:function(a,b,c){throw H.c(P.C("Cannot modify unmodifiable map"))}}
P.d9.prototype={
h:function(a,b){return J.m_(this.a,b)},
m:function(a,b,c){J.lg(this.a,b,c)},
I:function(a,b){J.eq(this.a,b)},
gl:function(a){return J.aV(this.a)},
i:function(a){return J.cG(this.a)},
$iH:1}
P.cq.prototype={}
P.dr.prototype={
ab:function(a,b){var s
for(s=J.aG(b);s.v();)this.n(0,s.gD(s))},
i:function(a){return P.ln(this,"{","}")},
M:function(a,b){var s,r,q,p,o="index"
H.ql(b,o,t.S)
P.ml(b,o)
for(s=P.oX(this,this.r),r=H.X(s).c,q=0;s.v();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.Q(b,this,o,null,q))}}
P.e1.prototype={$in:1,$ii:1}
P.dW.prototype={}
P.ed.prototype={}
P.ef.prototype={}
P.jU.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.an(r)}return null},
$S:17}
P.jT.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.an(r)}return null},
$S:17}
P.i9.prototype={
il:function(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a4=P.bp(a3,a4,a2.length)
s=$.nI()
for(r=s.length,q=a3,p=q,o=null,n=-1,m=-1,l=0;q<a4;q=k){k=q+1
j=C.a.H(a2,q)
if(j===37){i=k+2
if(i<=a4){h=H.kT(C.a.H(a2,k))
g=H.kT(C.a.H(a2,k+1))
f=h*16+g-(g&256)
if(f===37)f=-1
k=i}else f=-1}else f=j
if(0<=f&&f<=127){if(f<0||f>=r)return H.d(s,f)
e=s[f]
if(e>=0){f=C.a.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e)
if(f===j)continue
j=f}else{if(e===-1){if(n<0){d=o==null?null:o.a.length
if(d==null)d=0
n=d+(q-p)
m=q}++l
if(j===61)continue}j=f}if(e!==-2){if(o==null){o=new P.a0("")
d=o}else d=o
c=d.a+=C.a.u(a2,p,q)
d.a=c+H.az(j)
p=k
continue}}throw H.c(P.a9("Invalid base64 data",a2,q))}if(o!=null){r=o.a+=C.a.u(a2,p,a4)
d=r.length
if(n>=0)P.m2(a2,m,a4,n,l,d)
else{b=C.c.bC(d-1,4)+1
if(b===1)throw H.c(P.a9(a0,a2,a4))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return C.a.be(a2,a3,a4,r.charCodeAt(0)==0?r:r)}a=a4-a3
if(n>=0)P.m2(a2,m,a4,n,l,a)
else{b=C.c.bC(a,4)
if(b===1)throw H.c(P.a9(a0,a2,a4))
if(b>1)a2=C.a.be(a2,a4,a4,b===2?"==":"=")}return a2}}
P.ia.prototype={}
P.ex.prototype={}
P.ez.prototype={}
P.iu.prototype={}
P.iH.prototype={
i:function(a){return this.a}}
P.iG.prototype={
fh:function(a,b,c){var s,r,q,p,o,n,m,l=null
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
if(o>b)n.a+=C.a.u(a,b,o)
n.a+=m
b=o+1}}if(n==null)return l
if(c>b)n.a+=C.a.u(a,b,c)
s=n.a
return s.charCodeAt(0)==0?s:s}}
P.jR.prototype={
gi5:function(){return C.P}}
P.jV.prototype={
cC:function(a){var s,r,q,p=P.bp(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.ku(r)
if(q.fm(a,0,p)!==p){C.a.Z(a,p-1)
q.cu()}return new Uint8Array(r.subarray(0,H.pv(0,q.b,s)))}}
P.ku.prototype={
cu:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
hL:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.cu()
return!1}},
fm:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.Z(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.H(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.hL(p,C.a.H(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.cu()}else if(p<=2047){o=l.b
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
P.jS.prototype={
cC:function(a){var s=this.a,r=P.oK(s,a,0,null)
if(r!=null)return r
return new P.kt(s).hW(a,0,null,!0)}}
P.kt.prototype={
hW:function(a,b,c,d){var s,r,q,p,o=this,n=P.bp(b,c,J.aV(a))
if(b===n)return""
s=P.pr(a,b,n)
r=o.c8(s,0,n-b,!0)
q=o.b
if((q&1)!==0){p=P.ps(q)
o.b=0
throw H.c(P.a9(p,a,b+o.c))}return r},
c8:function(a,b,c,d){var s,r,q=this
if(c-b>1000){s=C.c.a9(b+c,2)
r=q.c8(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.c8(a,s,c,d)}return q.i0(a,b,c,d)},
i0:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.a0(""),f=b+1,e=a.length
if(b<0||b>=e)return H.d(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.H("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.H(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
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
g.a+=H.az(a[l])}else g.a+=P.ft(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.az(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.a_.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.a_&&this.a===b.a&&!0},
ar:function(a,b){return C.c.ar(this.a,b.a)},
gJ:function(a){var s=this.a
return(s^C.c.b7(s,30))&1073741823},
i:function(a){var s=this,r=P.o3(H.ot(s)),q=P.eC(H.or(s)),p=P.eC(H.on(s)),o=P.eC(H.oo(s)),n=P.eC(H.oq(s)),m=P.eC(H.os(s)),l=P.o4(H.op(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bH.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bH&&this.a===b.a},
gJ:function(a){return C.c.gJ(this.a)},
ar:function(a,b){return C.c.ar(this.a,b.a)},
i:function(a){var s,r,q,p=new P.ir(),o=this.a
if(o<0)return"-"+new P.bH(0-o).i(0)
s=p.$1(C.c.a9(o,6e7)%60)
r=p.$1(C.c.a9(o,1e6)%60)
q=new P.iq().$1(o%1e6)
return""+C.c.a9(o,36e8)+":"+s+":"+r+"."+q}}
P.iq.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:31}
P.ir.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:31}
P.N.prototype={}
P.et.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.ix(s)
return"Assertion failed"}}
P.fF.prototype={}
P.f3.prototype={
i:function(a){return"Throw of null."}}
P.aH.prototype={
gca:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc9:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gca()+o+m
if(!q.a)return l
s=q.gc9()
r=P.ix(q.b)
return l+s+": "+r}}
P.dq.prototype={
gca:function(){return"RangeError"},
gc9:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.z(q):""
else if(q==null)s=": Not greater than or equal to "+H.z(r)
else if(q>r)s=": Not in inclusive range "+H.z(r)+".."+H.z(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.z(r)
return s}}
P.eJ.prototype={
gca:function(){return"RangeError"},
gc9:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl:function(a){return this.f}}
P.fP.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fM.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.ci.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ey.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ix(s)+"."}}
P.f6.prototype={
i:function(a){return"Out of Memory"},
$iN:1}
P.dw.prototype={
i:function(a){return"Stack Overflow"},
$iN:1}
P.eA.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.h9.prototype={
i:function(a){return"Exception: "+this.a}}
P.iD.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.u(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.H(d,o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}f=r>1?f+(" (at line "+r+", character "+(e-q+1)+")\n"):f+(" (at character "+(e+1)+")\n")
m=d.length
for(o=e;o<m;++o){n=C.a.Z(d,o)
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
return f+j+h+i+"\n"+C.a.L(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.z(e)+")"):f}}
P.i.prototype={
c0:function(a,b){return new H.bb(this,b,H.X(this).N("bb<i.E>"))},
gl:function(a){var s,r=this.gU(this)
for(s=0;r.v();)++s
return s},
gaY:function(a){var s,r=this.gU(this)
if(!r.v())throw H.c(H.iJ())
s=r.gD(r)
if(r.v())throw H.c(H.o9())
return s},
M:function(a,b){var s,r,q
P.ml(b,"index")
for(s=this.gU(this),r=0;s.v();){q=s.gD(s)
if(b===r)return q;++r}throw H.c(P.Q(b,this,"index",null,r))},
i:function(a){return P.o8(this,"(",")")}}
P.eK.prototype={}
P.aj.prototype={
gJ:function(a){return P.R.prototype.gJ.call(C.U,this)},
i:function(a){return"null"}}
P.R.prototype={constructor:P.R,$iR:1,
q:function(a,b){return this===b},
gJ:function(a){return H.dn(this)},
i:function(a){return"Instance of '"+H.dp(this)+"'"},
toString:function(){return this.i(this)}}
P.a0.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jP.prototype={
$2:function(a,b){var s,r,q,p=C.a.eo(b,"=")
if(p===-1){if(b!=="")J.lg(a,P.lK(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.u(b,0,p)
r=C.a.aj(b,p+1)
q=this.a
J.lg(a,P.lK(s,0,s.length,q,!0),P.lK(r,0,r.length,q,!0))}return a},
$S:45}
P.jM.prototype={
$2:function(a,b){throw H.c(P.a9("Illegal IPv4 address, "+a,this.a,b))},
$S:44}
P.jN.prototype={
$2:function(a,b){throw H.c(P.a9("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.jO.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.kX(C.a.u(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:42}
P.bT.prototype={
gct:function(){var s,r,q,p=this,o=p.x
if(o==null){o=p.a
s=o.length!==0?""+o+":":""
r=p.c
q=r==null
if(!q||o==="file"){o=s+"//"
s=p.b
if(s.length!==0)o=o+s+"@"
if(!q)o+=r
s=p.d
if(s!=null)o=o+":"+H.z(s)}else o=s
o+=p.e
s=p.f
if(s!=null)o=o+"?"+s
s=p.r
if(s!=null)o=o+"#"+s
o=o.charCodeAt(0)==0?o:o
if(p.x==null)p.x=o
else o=H.h(H.ls("_text"))}return o},
gJ:function(a){var s=this,r=s.z
if(r==null){r=C.a.gJ(s.gct())
if(s.z==null)s.z=r
else r=H.h(H.ls("hashCode"))}return r},
gd0:function(){var s=this,r=s.Q
if(r==null){r=s.f
r=new P.cq(P.mA(r==null?"":r),t.dw)
if(s.Q==null)s.Q=r
else r=H.h(H.ls("queryParameters"))}return r},
geL:function(){return this.b},
gcQ:function(a){var s=this.c
if(s==null)return""
if(C.a.a6(s,"["))return C.a.u(s,1,s.length-1)
return s},
gbU:function(a){var s=this.d
return s==null?P.mT(this.a):s},
gd_:function(a){var s=this.f
return s==null?"":s},
gej:function(){var s=this.r
return s==null?"":s},
eH:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a6(s,"/"))s="/"+s
q=s
p=P.lI(null,0,0,b)
return new P.bT(n,l,j,k,q,p,o.r)},
gek:function(){return this.c!=null},
gen:function(){return this.f!=null},
gel:function(){return this.r!=null},
i:function(a){return this.gct()},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.dD.b(b))if(q.a===b.gc1())if(q.c!=null===b.gek())if(q.b===b.geL())if(q.gcQ(q)===b.gcQ(b))if(q.gbU(q)===b.gbU(b))if(q.e===b.geF(b)){s=q.f
r=s==null
if(!r===b.gen()){if(r)s=""
if(s===b.gd_(b)){s=q.r
r=s==null
if(!r===b.gel()){if(r)s=""
s=s===b.gej()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
$ifQ:1,
gc1:function(){return this.a},
geF:function(a){return this.e}}
P.kr.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=P.ks(C.h,a,C.e,!0)
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=P.ks(C.h,b,C.e,!0)}},
$S:41}
P.kq.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.aG(b),r=this.a;s.v();)r.$2(a,s.gD(s))},
$S:6}
P.jL.prototype={
geK:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.d(m,0)
s=o.a
m=m[0]+1
r=C.a.bP(s,"?",m)
q=s.length
if(r>=0){p=P.ee(s,r+1,q,C.k,!1)
q=r}else p=n
m=o.c=new P.h1("data","",n,n,P.ee(s,m,q,C.y,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.kD.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.d(s,a)
s=s[a]
C.a_.i6(s,0,96,b)
return s},
$S:40}
P.kE.prototype={
$3:function(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=C.a.H(b,r)^96
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:23}
P.kF.prototype={
$3:function(a,b,c){var s,r,q
for(s=C.a.H(b,0),r=C.a.H(b,1);s<=r;++s){q=(s^96)>>>0
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:23}
P.hu.prototype={
gek:function(){return this.c>0},
gem:function(){return this.c>0&&this.d+1<this.e},
gen:function(){return this.f<this.r},
gel:function(){return this.r<this.a.length},
gc1:function(){var s=this.x
return s==null?this.x=this.fe():s},
fe:function(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&C.a.a6(r.a,"http"))return"http"
if(q===5&&C.a.a6(r.a,"https"))return"https"
if(s&&C.a.a6(r.a,"file"))return"file"
if(q===7&&C.a.a6(r.a,"package"))return"package"
return C.a.u(r.a,0,q)},
geL:function(){var s=this.c,r=this.b+3
return s>r?C.a.u(this.a,r,s-1):""},
gcQ:function(a){var s=this.c
return s>0?C.a.u(this.a,s,this.d):""},
gbU:function(a){var s,r=this
if(r.gem())return P.kX(C.a.u(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&C.a.a6(r.a,"http"))return 80
if(s===5&&C.a.a6(r.a,"https"))return 443
return 0},
geF:function(a){return C.a.u(this.a,this.e,this.f)},
gd_:function(a){var s=this.f,r=this.r
return s<r?C.a.u(this.a,s+1,r):""},
gej:function(){var s=this.r,r=this.a
return s<r.length?C.a.aj(r,s+1):""},
gd0:function(){var s=this
if(s.f>=s.r)return C.Z
return new P.cq(P.mA(s.gd_(s)),t.dw)},
eH:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gc1(),k=l==="file",j=n.c,i=j>0?C.a.u(n.a,n.b+3,j):"",h=n.gem()?n.gbU(n):m
j=n.c
if(j>0)s=C.a.u(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.u(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a6(r,"/"))r="/"+r
p=P.lI(m,0,0,b)
q=n.r
o=q<j.length?C.a.aj(j,q+1):m
return new P.bT(l,i,s,h,r,p,o)},
gJ:function(a){var s=this.y
return s==null?this.y=C.a.gJ(this.a):s},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.dD.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifQ:1}
P.h1.prototype={}
W.v.prototype={}
W.i4.prototype={
gl:function(a){return a.length}}
W.er.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.es.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bX.prototype={$ibX:1}
W.bD.prototype={$ibD:1}
W.bE.prototype={$ibE:1}
W.bF.prototype={
dc:function(a,b,c){if(c!=null)return a.getContext(b,P.n9(c))
return a.getContext(b)},
eO:function(a,b){return this.dc(a,b,null)},
$ibF:1}
W.cJ.prototype={$icJ:1}
W.aI.prototype={
gl:function(a){return a.length}}
W.ii.prototype={
gl:function(a){return a.length}}
W.L.prototype={$iL:1}
W.cP.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.ij.prototype={}
W.aw.prototype={}
W.aY.prototype={}
W.ik.prototype={
gl:function(a){return a.length}}
W.il.prototype={
gl:function(a){return a.length}}
W.im.prototype={
gl:function(a){return a.length}}
W.bi.prototype={$ibi:1}
W.io.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cQ.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$iq:1}
W.cR.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.z(r)+", "
s=a.top
s.toString
return r+H.z(s)+") "+H.z(this.gaX(a))+" x "+H.z(this.gaQ(a))},
q:function(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=J.aT(b)
if(s===r.gbS(b)){s=a.top
s.toString
s=s===r.gbY(b)&&this.gaX(a)===r.gaX(b)&&this.gaQ(a)===r.gaQ(b)}else s=!1}else s=!1
return s},
gJ:function(a){var s,r=a.left
r.toString
r=C.d.gJ(r)
s=a.top
s.toString
return W.mK(r,C.d.gJ(s),C.d.gJ(this.gaX(a)),C.d.gJ(this.gaQ(a)))},
ge0:function(a){var s=a.bottom
s.toString
return s},
gdz:function(a){return a.height},
gaQ:function(a){var s=this.gdz(a)
s.toString
return s},
gbS:function(a){var s=a.left
s.toString
return s},
gd4:function(a){var s=a.right
s.toString
return s},
gbY:function(a){var s=a.top
s.toString
return s},
gdO:function(a){return a.width},
gaX:function(a){var s=this.gdO(a)
s.toString
return s},
$iag:1}
W.eD.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$iq:1}
W.ip.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.fZ.prototype={
gbQ:function(a){return this.a.firstElementChild==null},
gl:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b]).toString},
n:function(a,b){this.a.appendChild(b).toString
return b},
gU:function(a){var s=this.d6(this)
return new J.ai(s,s.length)}}
W.D.prototype={
gah:function(a){return new W.h6(a)},
gbL:function(a){var s=a.children
s.toString
return new W.fZ(a,s)},
ge2:function(a){var s,r,q,p=a.clientLeft
p.toString
s=a.clientTop
s.toString
r=a.clientWidth
r.toString
q=a.clientHeight
q.toString
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.ag(p,s,r,q,t.I)},
i:function(a){var s=a.localName
s.toString
return s},
as:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.m9
if(s==null){s=H.a([],t.Q)
r=new W.dl(s)
s.push(W.mJ(null))
s.push(W.mO())
$.m9=r
d=r}else d=s
s=$.m8
if(s==null){s=new W.hQ(d)
$.m8=s
c=s}else{s.a=d
c=s}}if($.bj==null){s=document
r=s.implementation.createHTMLDocument("")
r.toString
$.bj=r
r=r.createRange()
r.toString
$.lk=r
r=$.bj.createElement("base")
t.cR.a(r)
s=s.baseURI
s.toString
r.href=s
$.bj.head.appendChild(r).toString}s=$.bj
if(s.body==null){r=s.createElement("body")
s.body=t.Y.a(r)}s=$.bj
if(t.Y.b(a)){s=s.body
s.toString
q=s}else{s.toString
r=a.tagName
r.toString
q=s.createElement(r)
$.bj.body.appendChild(q).toString}s="createContextualFragment" in window.Range.prototype
s.toString
if(s){s=a.tagName
s.toString
s=!C.b.E(C.X,s)}else s=!1
if(s){$.lk.selectNodeContents(q)
s=$.lk
s=s.createContextualFragment(b)
s.toString
p=s}else{q.innerHTML=b
s=$.bj.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.bj.body)J.m0(q)
c.dd(p)
document.adoptNode(p).toString
return p},
hZ:function(a,b,c){return this.as(a,b,c,null)},
eP:function(a,b){var s
a.textContent=null
s=a.appendChild(this.as(a,b,null,null))
s.toString},
geJ:function(a){var s=a.tagName
s.toString
return s},
$iD:1}
W.is.prototype={
$1:function(a){return t.h.b(a)},
$S:24}
W.l.prototype={$il:1}
W.e.prototype={
hN:function(a,b,c,d){if(c!=null)this.f9(a,b,c,!1)},
f9:function(a,b,c,d){return a.addEventListener(b,H.cB(c,1),!1)},
$ie:1}
W.aq.prototype={$iaq:1}
W.c3.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$iq:1,
$ic3:1}
W.eE.prototype={
gl:function(a){return a.length}}
W.eG.prototype={
gl:function(a){return a.length}}
W.aL.prototype={$iaL:1}
W.iF.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.bJ.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$iq:1}
W.bK.prototype={
ge3:function(a){var s=a.data
s.toString
return s},
$ibK:1}
W.c5.prototype={$ic5:1}
W.c7.prototype={$ic7:1}
W.bL.prototype={$ibL:1}
W.iR.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.j7.prototype={
gl:function(a){return a.length}}
W.c9.prototype={$ic9:1}
W.eW.prototype={
h:function(a,b){return P.by(a.get(b))},
I:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.by(s.value[1]))}},
ga7:function(a){var s=H.a([],t.s)
this.I(a,new W.j8(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iH:1}
W.j8.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.eX.prototype={
h:function(a,b){return P.by(a.get(b))},
I:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.by(s.value[1]))}},
ga7:function(a){var s=H.a([],t.s)
this.I(a,new W.j9(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iH:1}
W.j9.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.aM.prototype={$iaM:1}
W.eY.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$iq:1}
W.as.prototype={$ias:1}
W.a8.prototype={
gaY:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.lv("No elements"))
if(r>1)throw H.c(P.lv("More than one element"))
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
gU:function(a){var s=this.a.childNodes
return new W.cW(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.t.prototype={
iA:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a).toString},
iD:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.nM(s,b,a)}catch(q){H.an(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.eT(a):s},
ht:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$it:1}
W.dk.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$iq:1}
W.aO.prototype={
gl:function(a){return a.length},
$iaO:1}
W.fa.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$iq:1}
W.fg.prototype={
h:function(a,b){return P.by(a.get(b))},
I:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.by(s.value[1]))}},
ga7:function(a){var s=H.a([],t.s)
this.I(a,new W.jm(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iH:1}
W.jm.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.fi.prototype={
gl:function(a){return a.length}}
W.aB.prototype={$iaB:1}
W.fl.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$iq:1}
W.aQ.prototype={$iaQ:1}
W.fm.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$iq:1}
W.aR.prototype={
gl:function(a){return a.length},
$iaR:1}
W.fq.prototype={
h:function(a,b){return a.getItem(H.kA(b))},
m:function(a,b,c){a.setItem(b,c)},
I:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga7:function(a){var s=H.a([],t.s)
this.I(a,new W.ju(s))
return s},
gl:function(a){var s=a.length
s.toString
return s},
$iH:1}
W.ju.prototype={
$2:function(a,b){return this.a.push(a)},
$S:51}
W.at.prototype={$iat:1}
W.br.prototype={$ibr:1}
W.dx.prototype={
as:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.c3(a,b,c,d)
s=W.o5("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new W.a8(r).ab(0,new W.a8(s))
return r}}
W.fu.prototype={
as:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.c3(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a8(C.C.as(r,b,c,d))
r=new W.a8(r.gaY(r))
new W.a8(s).ab(0,new W.a8(r.gaY(r)))
return s}}
W.fv.prototype={
as:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.c3(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a8(C.C.as(r,b,c,d))
new W.a8(s).ab(0,new W.a8(r.gaY(r)))
return s}}
W.cl.prototype={$icl:1}
W.aC.prototype={$iaC:1}
W.ak.prototype={$iak:1}
W.fx.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$iq:1}
W.fy.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$iq:1}
W.jA.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.aD.prototype={$iaD:1}
W.bP.prototype={$ibP:1}
W.fD.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$iq:1}
W.jF.prototype={
gl:function(a){return a.length}}
W.b9.prototype={}
W.jQ.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.fS.prototype={
gl:function(a){return a.length}}
W.bu.prototype={
gi2:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.C("deltaY is not supported"))},
gi1:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.C("deltaX is not supported"))},
$ibu:1}
W.ct.prototype={
hv:function(a,b){var s=a.requestAnimationFrame(H.cB(b,1))
s.toString
return s},
fl:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cu.prototype={$icu:1}
W.h_.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$iq:1}
W.dR.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.z(r)+", "
s=a.top
s.toString
s=r+H.z(s)+") "
r=a.width
r.toString
r=s+H.z(r)+" x "
s=a.height
s.toString
return r+H.z(s)},
q:function(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=J.aT(b)
if(s===r.gbS(b)){s=a.top
s.toString
if(s===r.gbY(b)){s=a.width
s.toString
if(s===r.gaX(b)){s=a.height
s.toString
r=s===r.gaQ(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gJ:function(a){var s,r,q,p=a.left
p.toString
p=C.d.gJ(p)
s=a.top
s.toString
s=C.d.gJ(s)
r=a.width
r.toString
r=C.d.gJ(r)
q=a.height
q.toString
return W.mK(p,s,r,C.d.gJ(q))},
gdz:function(a){return a.height},
gaQ:function(a){var s=a.height
s.toString
return s},
gdO:function(a){return a.width},
gaX:function(a){var s=a.width
s.toString
return s}}
W.hd.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$iq:1}
W.dX.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$iq:1}
W.hx.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$iq:1}
W.hE.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$iq:1}
W.fX.prototype={
I:function(a,b){var s,r,q,p,o
for(s=this.ga7(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.p)(s),++p){o=s[p]
b.$2(o,H.kA(q.getAttribute(o)))}},
ga7:function(a){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=H.a([],t.s)
for(r=m.length,q=t.h9,p=0;p<r;++p){if(p>=m.length)return H.d(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
s.push(n)}}return s}}
W.h6.prototype={
h:function(a,b){return this.a.getAttribute(H.kA(b))},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga7(this).length}}
W.ll.prototype={}
W.dS.prototype={
hK:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.nN(s,this.c,r,!1)}}}
W.k9.prototype={
$1:function(a){return this.a.$1(a)},
$S:3}
W.lA.prototype={}
W.cv.prototype={
f0:function(a){var s
if($.dT.gbQ($.dT)){for(s=0;s<262;++s)$.dT.m(0,C.W[s],W.qv())
for(s=0;s<12;++s)$.dT.m(0,C.n[s],W.qw())}},
b8:function(a){return $.nJ().E(0,W.cT(a))},
aD:function(a,b,c){var s=$.dT.h(0,W.cT(a)+"::"+b)
if(s==null)s=$.dT.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iaN:1}
W.P.prototype={
gU:function(a){return new W.cW(a,this.gl(a))}}
W.dl.prototype={
b8:function(a){return C.b.dU(this.a,new W.jc(a))},
aD:function(a,b,c){return C.b.dU(this.a,new W.jb(a,b,c))},
$iaN:1}
W.jc.prototype={
$1:function(a){return a.b8(this.a)},
$S:27}
W.jb.prototype={
$1:function(a){return a.aD(this.a,this.b,this.c)},
$S:27}
W.e2.prototype={
f4:function(a,b,c,d){var s,r,q
this.a.ab(0,c)
s=b.c0(0,new W.kh())
r=b.c0(0,new W.ki())
this.b.ab(0,s)
q=this.c
q.ab(0,C.v)
q.ab(0,r)},
b8:function(a){return this.a.E(0,W.cT(a))},
aD:function(a,b,c){var s=this,r=W.cT(a),q=s.c
if(q.E(0,r+"::"+b))return s.d.hQ(c)
else if(q.E(0,"*::"+b))return s.d.hQ(c)
else{q=s.b
if(q.E(0,r+"::"+b))return!0
else if(q.E(0,"*::"+b))return!0
else if(q.E(0,r+"::*"))return!0
else if(q.E(0,"*::*"))return!0}return!1},
$iaN:1}
W.kh.prototype={
$1:function(a){return!C.b.E(C.n,a)},
$S:28}
W.ki.prototype={
$1:function(a){return C.b.E(C.n,a)},
$S:28}
W.hG.prototype={
aD:function(a,b,c){if(this.eW(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.E(0,b)
return!1}}
W.kn.prototype={
$1:function(a){return"TEMPLATE::"+a},
$S:37}
W.hF.prototype={
b8:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cT(a)==="foreignObject")return!1
if(s)return!0
return!1},
aD:function(a,b,c){if(b==="is"||C.a.a6(b,"on"))return!1
return this.b8(a)},
$iaN:1}
W.cW.prototype={
v:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.m_(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gD:function(a){return H.X(this).c.a(this.d)}}
W.kg.prototype={}
W.hQ.prototype={
dd:function(a){var s,r=new W.kv(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
br:function(a,b){++this.b
if(b==null||b!==a.parentNode)J.m0(a)
else b.removeChild(a).toString},
hz:function(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
try{k=J.nP(a)
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
o=p}l=o}catch(n){H.an(n)}r="element unprintable"
try{r=J.cG(a)}catch(n){H.an(n)}try{q=W.cT(a)
this.hy(a,b,l,r,q,k,j)}catch(n){if(H.an(n) instanceof P.aH)throw n
else{this.br(a,b)
p=window
p.toString
p="Removing corrupted element "+H.z(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(p)}}},
hy:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.br(a,b)
window.toString
s="Removing element due to corrupted attributes on <"+d+">"
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(!m.a.b8(a)){m.br(a,b)
window.toString
s="Removing disallowed element <"+e+"> from "+H.z(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(g!=null)if(!m.a.aD(a,"is",g)){m.br(a,b)
window.toString
s="Removing disallowed type extension <"+e+' is="'+g+'">'
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}s=f.ga7(f)
q=H.a(s.slice(0),H.ky(s))
for(p=f.ga7(f).length-1,s=f.a;p>=0;--p){if(p>=q.length)return H.d(q,p)
o=q[p]
r=m.a
n=J.nT(o)
H.kA(o)
if(!r.aD(a,n,s.getAttribute(o))){window.toString
r="Removing disallowed attribute <"+e+" "+o+'="'+H.z(s.getAttribute(o))+'">'
n=typeof console!="undefined"
n.toString
if(n)window.console.warn(r)
s.removeAttribute(o)}}if(t.aW.b(a)){s=a.content
s.toString
m.dd(s)}}}
W.kv.prototype={
$2:function(a,b){var s,r,q,p,o=this.a,n=a.nodeType
n.toString
switch(n){case 1:o.hz(a,b)
break
case 8:case 11:case 3:case 4:break
default:o.br(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){n=r.nextSibling
q=s
q=n==null?q!=null:n!==q
n=q}else n=!1
if(n){n=P.lv("Corrupt HTML")
throw H.c(n)}}catch(p){H.an(p)
n=s;++o.b
q=n.parentNode
if(a!==q){if(q!=null)q.removeChild(n).toString}else a.removeChild(n).toString
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:35}
W.h0.prototype={}
W.h2.prototype={}
W.h3.prototype={}
W.h4.prototype={}
W.h5.prototype={}
W.ha.prototype={}
W.hb.prototype={}
W.he.prototype={}
W.hf.prototype={}
W.hi.prototype={}
W.hj.prototype={}
W.hk.prototype={}
W.hl.prototype={}
W.hm.prototype={}
W.hn.prototype={}
W.hq.prototype={}
W.hr.prototype={}
W.ht.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.hv.prototype={}
W.hw.prototype={}
W.hB.prototype={}
W.hH.prototype={}
W.hI.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.hJ.prototype={}
W.hK.prototype={}
W.hR.prototype={}
W.hS.prototype={}
W.hT.prototype={}
W.hU.prototype={}
W.hV.prototype={}
W.hW.prototype={}
W.hX.prototype={}
W.hY.prototype={}
W.hZ.prototype={}
W.i_.prototype={}
P.kj.prototype={
cO:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
c_:function(a){var s,r,q,p,o,n=this,m={}
if(a==null)return a
if(H.kG(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.a_)return new Date(a.a)
if(t.fJ.b(a))throw H.c(P.jK("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.fK.b(a))return a
if(t.bX.b(a))return a
if(t.x.b(a))return a
if(t.cH.b(a)||t.dE.b(a)||t.bu.b(a))return a
if(t.f.b(a)){s=n.cO(a)
r=n.b
q=r.length
if(s>=q)return H.d(r,s)
p=m.a=r[s]
if(p!=null)return p
p={}
m.a=p
if(s>=q)return H.d(r,s)
r[s]=p
J.eq(a,new P.kl(m,n))
return m.a}if(t.E.b(a)){s=n.cO(a)
m=n.b
if(s>=m.length)return H.d(m,s)
p=m[s]
if(p!=null)return p
return n.hY(a,s)}if(t.eH.b(a)){s=n.cO(a)
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
n.ie(a,new P.km(m,n))
return m.b}throw H.c(P.jK("structured clone of other type"))},
hY:function(a,b){var s,r,q=J.cE(a),p=q.gl(a),o=new Array(p)
o.toString
s=this.b
if(b>=s.length)return H.d(s,b)
s[b]=o
for(r=0;r<p;++r){s=this.c_(q.h(a,r))
if(r>=o.length)return H.d(o,r)
o[r]=s}return o}}
P.kl.prototype={
$2:function(a,b){this.a.a[a]=this.b.c_(b)},
$S:14}
P.km.prototype={
$2:function(a,b){this.a.b[a]=this.b.c_(b)},
$S:34}
P.ea.prototype={$ibK:1,
ge3:function(a){return this.a}}
P.kB.prototype={
$1:function(a){this.a.push(P.n0(a))},
$S:33}
P.kL.prototype={
$2:function(a,b){this.a[a]=P.n0(b)},
$S:14}
P.kk.prototype={
ie:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
b.$2(p,a[p])}}}
P.eF.prototype={
gbp:function(){var s=this.b,r=H.X(s)
return new H.b2(new H.bb(s,new P.iB(),r.N("bb<j.E>")),new P.iC(),r.N("b2<j.E,D>"))},
I:function(a,b){C.b.I(P.iQ(this.gbp(),!1,t.h),b)},
m:function(a,b,c){var s=this.gbp()
J.nS(s.b.$1(J.i3(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b).toString},
gl:function(a){return J.aV(this.gbp().a)},
h:function(a,b){var s=this.gbp()
return s.b.$1(J.i3(s.a,b))},
gU:function(a){var s=P.iQ(this.gbp(),!1,t.h)
return new J.ai(s,s.length)}}
P.iB.prototype={
$1:function(a){return t.h.b(a)},
$S:24}
P.iC.prototype={
$1:function(a){return t.h.a(a)},
$S:61}
P.hs.prototype={
gd4:function(a){return this.$ti.c.a(this.a+this.c)},
ge0:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
q:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.I.b(b)){s=o.a
r=J.aT(b)
if(s===r.gbS(b)){q=o.b
if(q===r.gbY(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gd4(b)&&p.a(q+o.d)===r.ge0(b)}else s=!1}else s=!1}else s=!1
return s},
gJ:function(a){var s=this,r=s.a,q=C.c.gJ(r),p=s.b,o=C.c.gJ(p),n=s.$ti.c
r=C.c.gJ(n.a(r+s.c))
p=C.c.gJ(n.a(p+s.d))
return H.oF(H.jv(H.jv(H.jv(H.jv(0,q),o),r),p))}}
P.ag.prototype={
gbS:function(a){return this.a},
gbY:function(a){return this.b},
gaX:function(a){return this.c},
gaQ:function(a){return this.d}}
P.b1.prototype={$ib1:1}
P.eQ.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){return this.h(a,b)},
$in:1,
$ii:1,
$iq:1}
P.b5.prototype={$ib5:1}
P.f4.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){return this.h(a,b)},
$in:1,
$ii:1,
$iq:1}
P.jf.prototype={
gl:function(a){return a.length}}
P.cg.prototype={$icg:1}
P.fs.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){return this.h(a,b)},
$in:1,
$ii:1,
$iq:1}
P.o.prototype={
gbL:function(a){return new P.eF(a,new W.a8(a))},
as:function(a,b,c,d){var s,r,q,p,o=H.a([],t.Q)
o.push(W.mJ(null))
o.push(W.mO())
o.push(new W.hF())
c=new W.hQ(new W.dl(o))
s='<svg version="1.1">'+b+"</svg>"
o=document
r=o.body
r.toString
q=C.p.hZ(r,s,c)
o=o.createDocumentFragment()
o.toString
r=new W.a8(q)
p=r.gaY(r)
for(;r=p.firstChild,r!=null;)o.appendChild(r).toString
return o},
$io:1}
P.b7.prototype={$ib7:1}
P.fE.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){return this.h(a,b)},
$in:1,
$ii:1,
$iq:1}
P.hg.prototype={}
P.hh.prototype={}
P.ho.prototype={}
P.hp.prototype={}
P.hC.prototype={}
P.hD.prototype={}
P.hL.prototype={}
P.hM.prototype={}
P.i7.prototype={
gl:function(a){return a.length}}
P.ev.prototype={
h:function(a,b){return P.by(a.get(b))},
I:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.by(s.value[1]))}},
ga7:function(a){var s=H.a([],t.s)
this.I(a,new P.i8(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iH:1}
P.i8.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
P.ew.prototype={
gl:function(a){return a.length}}
P.bg.prototype={}
P.f5.prototype={
gl:function(a){return a.length}}
P.fY.prototype={}
P.cf.prototype={
iI:function(a,b,c,d,e,f,g){var s
if(t.x.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.qn(g))
return}if(t.fS.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.bW("Incorrect number or type of arguments"))},
$icf:1}
P.fn.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=P.by(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){return this.h(a,b)},
$in:1,
$ii:1,
$iq:1}
P.hy.prototype={}
P.hz.prototype={}
K.aW.prototype={
aR:function(a,b){return!0},
i:function(a){return"all"},
$ib3:1}
K.cY.prototype={
aR:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)if(s[q].aR(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.p)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q},
$ib3:1}
K.af.prototype={
aR:function(a,b){return!this.eS(0,b)},
i:function(a){return"!["+this.c4(0)+"]"}}
K.fd.prototype={
aR:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var s=H.az(this.a),r=H.az(this.b)
return s+".."+r},
$ib3:1}
K.u.prototype={
p:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.f("May not create a Set with zero characters."))
s=new H.Z(t.fX)
for(r=new H.bm(a,a.gl(a)),q=H.X(r).c;r.v();)s.m(0,q.a(r.d),!0)
p=P.iQ(s.ga7(s),!0,t.S)
C.b.eR(p)
this.a=p},
aR:function(a,b){return C.b.E(this.a,b)},
i:function(a){return P.ft(this.a,0,null)},
$ib3:1}
L.fo.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.dA(this.a.k(0,b),H.a([],t.z))
s.push(p)
return p},
i8:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
if(p.aR(0,a))return p}return null},
i:function(a){return this.b},
dL:function(){var s,r,q,p,o,n,m=this,l=""+("("+m.b+")"),k=m.d
if(k!=null){l+=" => ["+k.b+"]"
k=m.a.c
s=m.d
if(k.E(0,s==null?null:s.b))l+=" (consume)"
s=m.d
if(s==null)s=null
else{s=s.c
s=s.ga7(s)}s=J.aG(s==null?H.a([],t.s):s)
for(;s.v();){r=s.gD(s)
l+="\n"
q=m.d
p=q==null?null:q.c.h(0,r)
if(p==null)p=""
l+="  -- "+r+" => ["+p+"]"
if(k.E(0,p))l+=" (consume)"}}for(k=m.c,s=k.length,o=0;o<k.length;k.length===s||(0,H.p)(k),++o){n=k[o]
l+="\n"
l+="  -- "+(n.b.b+": "+n.c4(0))}return l.charCodeAt(0)==0?l:l}}
L.fB.prototype={
i:function(a){var s=H.lX(this.b,"\n","\\n"),r=H.lX(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fC.prototype={
aU:function(a,b,c){var s,r,q
for(s=c.length,r=this.c,q=0;q<c.length;c.length===s||(0,H.p)(c),++q)r.m(0,c[q],b)},
i:function(a){return this.b}}
L.jC.prototype={
k:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.fo(this,b,H.a([],t.ab))
s.m(0,b,r)}return r},
T:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.fC(a,P.W(s,s))
r.m(0,a,q)}return q},
d8:function(a){return this.iM(a)},
iM:function(a){var s=this
return P.pM(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2
return function $async$d8(a3,a4){if(a3===1){o=a4
q=p}while(true)switch(q){case 0:c=s.d
b=t.t
a0=H.a([],b)
a1=H.a([],b)
a2=H.a([],b)
n=H.X(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a2.length!==0)h=C.b.d2(a2,0)
else{if(!r.v()){q=3
break}h=n.a(r.d)}a1.push(h);++k
g=c==null
f=g?null:c.i8(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.ft(a1,0,null)
throw H.c(P.f("Untokenizable string [state: "+H.z(g?null:c.b)+", index "+k+']: "'+e+'"'))}if(!!a1.fixed$length)H.h(P.C("removeRange"))
P.bp(0,i,a1.length)
a1.splice(0,i-0)
C.b.ab(a2,a1)
a1=H.a([],b)
a0=H.a([],b)
c=s.d
q=!m.E(0,l.a)?7:8
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
if(g!=null){e=P.ft(a0,0,null)
g=c.d
if(g==null)l=null
else{d=g.c.h(0,e)
g=new L.fB(d==null?g.b:d,e,k)
l=g}i=a1.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.E(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.oV()
case 1:return P.oW(o)}}},t.bJ)},
i:function(a){var s,r=new P.a0(""),q=this.d
if(q!=null)r.a=""+(q.dL()+"\n")
for(q=this.a,q=q.giN(q),q=q.gU(q);q.v();){s=q.gD(q)
if(s!=this.d)r.a+=H.z(s==null?null:s.dL())+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.dA.prototype={
i:function(a){return this.b.b+": "+this.c4(0)}}
O.ae.prototype={
de:function(a,b,c){this.b=b
this.c=a},
bi:function(a,b){return this.de(a,null,b)},
dC:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
dj:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gl:function(a){return this.a.length},
gU:function(a){var s=this.a
return new J.ai(s,s.length)},
M:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.X(q).N("x<ae.T>")
if(q.dC(H.a([b],p))){s=q.a
r=s.length
s.push(b)
q.dj(r,H.a([b],p))}},
ab:function(a,b){var s,r
if(this.dC(b)){s=this.a
r=s.length
C.b.ab(s,b)
this.dj(r,b)}},
$ii:1}
O.dg.prototype={
gl:function(a){return this.a.length},
gt:function(){var s=this.b
return s==null?this.b=D.K():s},
b0:function(){var s=this.b
return s==null?null:s.C(null)},
ga8:function(a){var s=this.a
if(s.length>0)return C.b.gaF(s)
else return V.ar()},
bW:function(a){this.a.push(a)
this.b0()},
aT:function(){var s=this.a
if(s.length>0){s.pop()
this.b0()}}}
E.ib.prototype={}
E.bI.prototype={
sae:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().B(0,s.geC())
if(b!=null)b.gt().n(0,s.geC())
s.bT(new D.E("shape",r,b))}},
az:function(a,b){var s,r
for(s=this.y.a,s=new J.ai(s,s.length),r=H.X(s).c;s.v();)r.a(s.d).az(0,b)},
ak:function(a){var s,r,q,p=this,o=a.dx
o.a.push(o.ga8(o))
o.b0()
a.cZ(p.f)
s=C.b.gaF(a.dy)
if(p.d!=null)if(s!=null)s.eG(a,p)
for(r=p.y.a,r=new J.ai(r,r.length),q=H.X(r).c;r.v();)q.a(r.d).ak(a)
a.cY()
o.aT()},
bT:function(a){var s=this.z
return s==null?null:s.C(a)},
X:function(){return this.bT(null)},
eD:function(a){this.e=null
this.bT(a)},
is:function(){return this.eD(null)},
eB:function(a){return this.bT(a)},
ip:function(){return this.eB(null)},
io:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.geA(),q=t.b,p=0;p<b.length;b.length===s||(0,H.p)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.c2()
m=n.a;(m==null?n.a=H.a([],q):m).push(r)}this.X()},
ir:function(a,b){var s,r
for(s=b.gU(b),r=this.geA();s.v();)s.gD(s).gt().B(0,r)
this.X()},
i:function(a){return"Unnamed entity"}}
E.bZ.prototype={
i:function(a){return this.b}}
E.cd.prototype={
i:function(a){return this.b}}
E.h7.prototype={}
E.ji.prototype={
f_:function(a,b){var s=this
s.cy.gt().n(0,new E.jj(s))
s.db.gt().n(0,new E.jk(s))
s.dx.gt().n(0,new E.jl(s))},
giz:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.ga8(q).L(0,s.ga8(s))
q=s}return q},
cZ:function(a){var s=this.dy
return s.push(a==null?C.b.gaF(s):a)},
cY:function(){var s=this.dy
if(s.length>1)s.pop()},
dT:function(a){var s,r=a.b
if(r.length===0)throw H.c(P.f("May not cache a shader with no name."))
s=this.fr
if(s.cB(0,r))throw H.c(P.f('Shader cache already contains a shader by the name "'+r+'".'))
s.m(0,r,a)}}
E.jj.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:2}
E.jk.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:2}
E.jl.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:2}
E.fA.prototype={
dm:function(a){this.eI()},
dl:function(){return this.dm(null)},
gig:function(){var s,r=this,q=Date.now(),p=C.c.a9(P.m7(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.a_(q,!1)
return s/p},
dF:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.cP(r*o)
r=s.clientHeight
r.toString
p=C.d.cP(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.mu(C.m,this.giE())}},
eI:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.E.fl(s)
r=W.n6(new E.jz(this),t.H)
r.toString
C.E.hv(s,r)}},
iC:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.dF()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.a_(p,!1)
q.y=P.m7(p-q.r.a).a*0.000001
p=q.cy
C.b.sl(p.a,0)
p.b0()
p=q.db
C.b.sl(p.a,0)
p.b0()
p=q.dx
C.b.sl(p.a,0)
p.b0()
p=q.dy
C.b.sl(p,0)
p.push(null)
m.ak(q)}q=n.Q
if(q!=null)q.C(null)}catch(o){s=H.an(o)
r=H.lS(o)
P.lW("Error: "+H.z(s))
P.lW("Stack: "+H.z(r))
throw H.c(s)}}}
E.jz.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.iC()}},
$S:32}
Z.fT.prototype={}
Z.c_.prototype={
a4:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.an(q)
r=P.f('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.z(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.fU.prototype={}
Z.c0.prototype={
aP:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
a4:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].a4(a)}},
aW:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
ak:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=t.s,l=H.a([],m)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
l.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.dp(p.c)+"'")+"]")}o=H.a([],m)
for(m=this.c,s=m.length,q=0;q<m.length;m.length===s||(0,H.p)(m),++q){n=m[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(l,", ")+"\nAttrs:   "+C.b.j(o,", ")}}
Z.c6.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.dp(this.c)+"'")+"]"}}
Z.bt.prototype={
gdg:function(a){var s=this.a,r=(s&$.aU().a)!==0?3:0
if((s&$.bB().a)!==0)r+=3
if((s&$.bA().a)!==0)r+=3
if((s&$.bV().a)!==0)r+=2
if((s&$.bC().a)!==0)r+=3
if((s&$.eo().a)!==0)r+=3
if((s&$.ep().a)!==0)r+=4
if((s&$.cF().a)!==0)++r
return(s&$.bz().a)!==0?r+4:r},
hR:function(a){var s,r=$.aU(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bB()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bA()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bV()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bC()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.eo()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ep()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cF()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bz()
if((q&r.a)!==0)if(s===a)return r
return $.nH()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bt))return!1
return this.a===b.a},
i:function(a){var s=H.a([],t.s),r=this.a
if((r&$.aU().a)!==0)s.push("Pos")
if((r&$.bB().a)!==0)s.push("Norm")
if((r&$.bA().a)!==0)s.push("Binm")
if((r&$.bV().a)!==0)s.push("Txt2D")
if((r&$.bC().a)!==0)s.push("TxtCube")
if((r&$.eo().a)!==0)s.push("Clr3")
if((r&$.ep().a)!==0)s.push("Clr4")
if((r&$.cF().a)!==0)s.push("Weight")
if((r&$.bz().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.id.prototype={}
D.c2.prototype={
n:function(a,b){var s=this.a
return(s==null?this.a=H.a([],t.b):s).push(b)},
B:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.b.E(p,b)
if(p===!0){p=r.a
p=p==null?q:C.b.B(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.b.E(p,b)
if(p===!0){p=r.b
p=p==null?q:C.b.B(p,b)
s=p===!0||s}return s},
C:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.V():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.b.I(P.iQ(p,!0,t.h2),new D.iy(s))
r=q.b
if(r!=null){q.b=H.a([],t.b)
C.b.I(r,new D.iz(s))}return!0},
i3:function(){return this.C(null)},
aH:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.C(s)}}}}
D.iy.prototype={
$1:function(a){a.$1(this.a)},
$S:30}
D.iz.prototype={
$1:function(a){a.$1(this.a)},
$S:30}
D.V.prototype={}
D.aZ.prototype={}
D.b_.prototype={}
D.E.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.z(this.d)+" => "+H.z(this.e)}}
X.cI.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cI))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.eP.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eP))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.iM.prototype={}
X.d7.prototype={}
X.iS.prototype={
bo:function(a,b){var s,r=this,q=Date.now(),p=r.x.V(0,new V.M(b.a,b.b)),o=r.a.gb9(),n=$.a4
if(n==null)n=$.a4=new V.M(0,0)
s=r.x
r.z=new P.a_(q,!1)
r.x=p
return new X.ca(a,n,s,o,p)},
cX:function(a,b){this.r=a.a
return!1},
by:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bx:function(a,b){var s=this.d
if(s==null)return!1
s.C(this.bo(a,b))
return!0},
iw:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gb9()
r=this.x
Date.now()
q.C(new X.cb(new V.a7(a.a,a.b),s,r))
return!0},
h_:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.C(new X.d7(c,q.a.gb9(),b))
q.y=new P.a_(s,!1)
s=$.a4
q.x=s==null?$.a4=new V.M(0,0):s}}
X.aa.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.aa))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
i:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.b.j(s,"+")}}
X.ca.prototype={}
X.ja.prototype={
cc:function(a,b,c){var s=this,r=new P.a_(Date.now(),!1),q=s.a.gb9(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.ca(a,p,o,q,b)},
cX:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.C(this.cc(a,b,!0))
return!0},
by:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.C(r.cc(a,b,!0))
return!0},
bx:function(a,b){var s=this.d
if(s==null)return!1
s.C(this.cc(a,b,!1))
return!0},
ix:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gb9()
Date.now()
r.C(new X.cb(new V.a7(a.a,a.b),s,b))
return!0},
ge5:function(){var s=this.b
return s==null?this.b=D.K():s},
gd9:function(){var s=this.c
return s==null?this.c=D.K():s},
gez:function(){var s=this.d
return s==null?this.d=D.K():s}}
X.cb.prototype={}
X.fc.prototype={}
X.dz.prototype={}
X.jE.prototype={
bo:function(a,b){var s,r,q,p,o=this,n=new P.a_(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.a4
if(r==null){r=new V.M(0,0)
$.a4=r
s=r}else s=r}r=o.a.gb9()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.dz(q,p,r,s)},
iv:function(a){var s=this.b
if(s==null)return!1
s.C(this.bo(a,!0))
return!0},
it:function(a){var s=this.c
if(s==null)return!1
s.C(this.bo(a,!0))
return!0},
iu:function(a){var s=this.d
if(s==null)return!1
s.C(this.bo(a,!1))
return!0}}
X.fR.prototype={
gbb:function(a){var s=this.b
return s==null?this.b=new X.iM(new X.aa(!1,!1,!1),P.d4(t.S)):s},
gad:function(){var s,r=this.c
if(r==null){r=$.a4
if(r==null){r=$.a4=new V.M(0,0)
s=r}else s=r
r=this.c=new X.ja(this,r,s,new P.a_(Date.now(),!1),new P.a_(Date.now(),!1))}return r},
gat:function(){var s=this.d
if(s==null){s=$.a4
if(s==null)s=$.a4=new V.M(0,0)
s=this.d=new X.iS(this,s,new P.a_(Date.now(),!1),new P.a_(Date.now(),!1))}return s},
gbf:function(){var s,r=this.e
if(r==null){r=$.a4
if(r==null){r=$.a4=new V.M(0,0)
s=r}else s=r
r=this.e=new X.jE(this,r,s,new P.a_(Date.now(),!1),new P.a_(Date.now(),!1))}return r},
gb9:function(){var s=this.a
return V.mn(0,0,C.i.ge2(s).c,C.i.ge2(s).d)},
dt:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.eP(p,new X.aa(s,r,q))},
b6:function(a){var s,r,q=this.gbb(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.aa(p,s,r)},
cs:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gbb(this)
r=a.altKey
q=a.shiftKey
p.c=new X.aa(s,r===!0,q===!0)},
aN:function(a){var s,r,q,p
if(a==null){s=$.a4
return s==null?$.a4=new V.M(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.M(r-p,q-s)},
bq:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.a7(r,s)},
cn:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=H.a([],t.cG)
r=a.touches
if(r==null)r=H.a([],t.gT)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.p)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.ax(n)
m=o.pageY
m.toString
C.d.ax(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.ax(l)
l=o.pageY
l.toString
l=C.d.ax(l)
k=j.top
k.toString
s.push(new V.M(n-m,l-k))}return s},
aK:function(a){var s,r,q,p
if(a==null)return new X.cI(0,new X.aa(!1,!1,!1))
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
return new X.cI(s,new X.aa(r,q,p))},
cd:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
fU:function(a){return this.f=!0},
fG:function(a){return this.f=!1},
fO:function(a){if(this.f&&this.cd(a))a.preventDefault()},
fY:function(a){var s,r,q=this
if(!q.f)return
s=q.dt(a)
r=q.gbb(q)
r.c=s.b
r.d.n(0,s.a)},
fW:function(a){var s,r,q=this
if(!q.f)return
s=q.dt(a)
r=q.gbb(q)
r.c=s.b
r.d.B(0,s.a)},
h1:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.b6(a)
if(p.x){s=p.aK(a)
r=p.bq(a)
if(p.gat().cX(s,r))a.preventDefault()
return}s=p.aK(a)
q=p.aN(a)
if(p.gad().cX(s,q))a.preventDefault()},
h5:function(a){var s,r,q,p=this
p.b6(a)
s=p.aK(a)
if(p.x){r=p.bq(a)
if(p.gat().by(s,r))a.preventDefault()
return}q=p.aN(a)
if(p.gad().by(s,q))a.preventDefault()},
fS:function(a){var s,r,q,p=this
if(!p.cd(a)){p.b6(a)
s=p.aK(a)
if(p.x){r=p.bq(a)
if(p.gat().by(s,r))a.preventDefault()
return}q=p.aN(a)
if(p.gad().by(s,q))a.preventDefault()}},
h3:function(a){var s,r,q,p=this
p.b6(a)
s=p.aK(a)
if(p.x){r=p.bq(a)
if(p.gat().bx(s,r))a.preventDefault()
return}q=p.aN(a)
if(p.gad().bx(s,q))a.preventDefault()},
fQ:function(a){var s,r,q,p=this
if(!p.cd(a)){p.b6(a)
s=p.aK(a)
if(p.x){r=p.bq(a)
if(p.gat().bx(s,r))a.preventDefault()
return}q=p.aN(a)
if(p.gad().bx(s,q))a.preventDefault()}},
h7:function(a){var s,r,q=this
q.b6(a)
s=new V.a7(C.D.gi1(a),C.D.gi2(a)).L(0,q.Q)
if(q.x){if(q.gat().iw(s))a.preventDefault()
return}r=q.aN(a)
if(q.gad().ix(s,r))a.preventDefault()},
h9:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aK(q.y)
r=q.aN(q.y)
q.gat().h_(s,r,p)}},
hp:function(a){var s,r=this
r.a.focus()
r.f=!0
r.cs(a)
s=r.cn(a)
if(r.gbf().iv(s))a.preventDefault()},
hl:function(a){var s
this.cs(a)
s=this.cn(a)
if(this.gbf().it(s))a.preventDefault()},
hn:function(a){var s
this.cs(a)
s=this.cn(a)
if(this.gbf().iu(s))a.preventDefault()}}
D.c1.prototype={
aI:function(a){var s=this.r
return s==null?null:s.C(a)},
f3:function(){return this.aI(null)},
$iax:1}
D.d2.prototype={
gt:function(){var s=this.y
return s==null?this.y=D.K():s},
geu:function(){var s=this.z
return s==null?this.z=D.K():s},
aI:function(a){var s=this.y
return s==null?null:s.C(a)},
dB:function(a){var s=this.z
return s==null?null:s.C(a)},
fZ:function(){return this.dB(null)},
hb:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.p)(a),++r)if(this.f1(a[r]))return!1
return!0},
fA:function(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=this.gdA(),q=this.f,p=t.b,o=0;o<b.length;b.length===s||(0,H.p)(b),++o){n=b[o]
q.push(n)
m=n.r
if(m==null)m=n.r=new D.c2()
l=m.a;(l==null?m.a=H.a([],p):l).push(r)}this.aI(new D.aZ())},
hf:function(a,b){var s,r,q,p
for(s=b.gU(b),r=this.gdA(),q=this.e;s.v();){p=s.gD(s)
C.b.B(q,p)
p.gt().B(0,r)}this.aI(new D.b_())},
f1:function(a){var s=C.b.E(this.f,a)
return s}}
V.Y.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.Y))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.ao.prototype={
d6:function(a){var s=this
return H.a([s.a,s.b,s.c,s.d],t.n)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ao))return!1
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
V.iw.prototype={}
V.df.prototype={
ai:function(a,b){var s=this,r=H.a([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.n)
return r},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.df))return!1
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
i:function(a){var s,r,q,p,o=this,n=t.n,m=V.cD(H.a([o.a,o.d,o.r],n),3,0),l=V.cD(H.a([o.b,o.e,o.x],n),3,0),k=V.cD(H.a([o.c,o.f,o.y],n),3,0)
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
V.bn.prototype={
ai:function(a,b){var s=this,r=H.a([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.n)
return r},
cR:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.F().toString
if(Math.abs(b3-0)<1e-9)return V.ar()
s=1/b3
r=-l
q=-a2
return V.b4((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
L:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.b4(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bZ:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.w(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bB:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.I(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bn))return!1
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
K:function(a){var s,r,q,p,o,n=this,m=t.n,l=V.cD(H.a([n.a,n.e,n.y,n.cx],m),3,0),k=V.cD(H.a([n.b,n.f,n.z,n.cy],m),3,0),j=V.cD(H.a([n.c,n.r,n.Q,n.db],m),3,0),i=V.cD(H.a([n.d,n.x,n.ch,n.dx],m),3,0)
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
w:function(){return this.K("")}}
V.M.prototype={
al:function(a){return new V.a7(a.a-this.a,a.b-this.b)},
V:function(a,b){return new V.M(this.a+b.a,this.b+b.b)},
a2:function(a,b){var s
$.F().toString
if(Math.abs(b-0)<1e-9){s=$.a4
return s==null?$.a4=new V.M(0,0):s}return new V.M(this.a/b,this.b/b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"},
w:function(){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.I.prototype={
V:function(a,b){return new V.I(this.a+b.a,this.b+b.b,this.c+b.c)},
aZ:function(a,b){return new V.I(this.a-b.a,this.b-b.b,this.c-b.c)},
L:function(a,b){return new V.I(this.a*b,this.b*b,this.c*b)},
a2:function(a,b){$.F().toString
if(Math.abs(b-0)<1e-9)return V.lu()
return new V.I(this.a/b,this.b/b,this.c/b)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.I))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"},
w:function(){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.ay.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ay))return!1
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
V.ff.prototype={
gaG:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ff))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.B(s.a,3,0)+", "+V.B(s.b,3,0)+", "+V.B(s.c,3,0)+", "+V.B(s.d,3,0)+"]"}}
V.a7.prototype={
bv:function(a){return Math.sqrt(this.ac(this))},
ac:function(a){return this.a*a.a+this.b*a.b},
L:function(a,b){return new V.a7(this.a*b,this.b*b)},
a2:function(a,b){var s
$.F().toString
if(Math.abs(b-0)<1e-9){s=$.bR
return s==null?$.bR=new V.a7(0,0):s}return new V.a7(this.a/b,this.b/b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.w.prototype={
bv:function(a){return Math.sqrt(this.ac(this))},
ac:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cS:function(a,b){return new V.w(V.i1(this.a,a.a,b),V.i1(this.b,a.b,b),V.i1(this.c,a.c,b))},
A:function(){var s=this,r=Math.sqrt(s.ac(s))
if(r===1)return s
return s.a2(0,r)},
aO:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.w(s*r-q*p,q*o-n*r,n*p-s*o)},
V:function(a,b){return new V.w(this.a+b.a,this.b+b.b,this.c+b.c)},
bh:function(a){return new V.w(-this.a,-this.b,-this.c)},
L:function(a,b){return new V.w(this.a*b,this.b*b,this.c*b)},
a2:function(a,b){$.F().toString
if(Math.abs(b-0)<1e-9)return V.dP()
return new V.w(this.a/b,this.b/b,this.c/b)},
es:function(){$.F().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.w))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"},
w:function(){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.bs.prototype={
bv:function(a){var s=this,r=s.a,q=s.b,p=s.c,o=s.d
return Math.sqrt(r*r+q*q+p*p+o*o)},
a2:function(a,b){var s=this
$.F().toString
if(Math.abs(b-0)<1e-9)return V.oO()
return new V.bs(s.a/b,s.b/b,s.c/b,s.d/b)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bs))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.B(s.a,3,0)+", "+V.B(s.b,3,0)+", "+V.B(s.c,3,0)+", "+V.B(s.d,3,0)+"]"}}
U.ig.prototype={
c5:function(a){var s=V.qO(a,this.c,this.b)
return s},
gt:function(){var s=this.y
return s==null?this.y=D.K():s},
W:function(a){var s=this.y
return s==null?null:s.C(a)},
sda:function(a,b){},
scT:function(a){var s,r=this,q=r.b
$.F().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.c5(s)}r.W(new D.E("maximumLocation",q,r.b))}},
scV:function(a){var s,r=this,q=r.c
$.F().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.c5(s)}r.W(new D.E("minimumLocation",q,r.c))}},
sa_:function(a,b){var s,r=this
b=r.c5(b)
s=r.d
$.F().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.W(new D.E("location",s,b))}},
scU:function(a){var s,r,q=this,p=q.e
$.F().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.W(new D.E("maximumVelocity",p,a))}},
sa5:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.F().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.W(new D.E("velocity",r,a))}},
scE:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.F().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.W(new D.E("dampening",s,a))}},
az:function(a,b){var s,r,q,p=this,o=p.f
$.F().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa_(0,p.d+s*b)
o=p.x
$.F().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sa5(s)}}}
U.cL.prototype={
gt:function(){var s=this.b
return s==null?this.b=D.K():s},
bg:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cL))return!1
return this.a.q(0,b.a)},
i:function(a){return"Constant: "+this.a.K("          ")}}
U.c4.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.K():s},
W:function(a){var s=this.e
return s==null?null:s.C(a)},
ag:function(){return this.W(null)},
fw:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gb1(),q=t.b,p=0;p<b.length;b.length===s||(0,H.p)(b),++p){o=b[p]
if(o!=null){n=o.gt()
m=n.a;(m==null?n.a=H.a([],q):m).push(r)}}this.W(new D.aZ())},
hd:function(a,b){var s,r
for(s=b.gU(b),r=this.gb1();s.v();)s.gD(s).gt().B(0,r)
this.W(new D.b_())},
bg:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.ai(o,o.length),n=H.X(o).c,s=null;o.v();){r=n.a(o.d)
if(r!=null){q=r.bg(0,b,c)
s=s==null?q:q.L(0,s)}}p.f=s==null?V.ar():s
o=p.e
if(o!=null)o.aH(0)}return p.f},
q:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c4))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(p>=q.length)return H.d(q,p)
if(!J.G(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$ia1:1}
U.a1.prototype={}
U.dL.prototype={
gt:function(){var s=this.cy
return s==null?this.cy=D.K():s},
W:function(a){var s=this.cy
return s==null?null:s.C(a)},
ag:function(){return this.W(null)},
bs:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.gad().ge5().n(0,s.gce())
a.gad().gez().n(0,s.gcg())
a.gad().gd9().n(0,s.gcj())
return!0},
cf:function(a){var s=this,r=s.c,q=s.a
if(!r.q(0,q==null?null:q.gbb(q).c))return
s.x=s.y=!0
s.z=s.b.d},
ci:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.al(a.d)
if(s.ac(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.sa_(0,-a.y.al(r).L(0,2).a2(0,s.gaG()).a*2.5+p.z)
q.sa5(0)
p.Q=a.z.al(r).L(0,2).a2(0,s.gaG())
p.ag()},
ck:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.ac(s)>0.0001){r.b.sa5(r.Q.a*10*2.5)
r.ag()}},
bg:function(a,b,c){var s,r,q=this,p=q.ch,o=b.e
if(p<o){q.ch=o
p=q.b
p.az(0,b.y)
p=p.d
s=Math.cos(p)
r=Math.sin(p)
q.cx=V.b4(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)}return q.cx},
$ia1:1}
U.dM.prototype={
gt:function(){var s=this.fx
return s==null?this.fx=D.K():s},
W:function(a){var s=this.fx
return s==null?null:s.C(a)},
ag:function(){return this.W(null)},
bs:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.gad().ge5().n(0,q.gce())
a.gad().gez().n(0,q.gcg())
a.gad().gd9().n(0,q.gcj())
s=a.gat()
r=s.f
s=r==null?s.f=D.K():r
s.n(0,q.gfn())
s=a.gat()
r=s.d
s=r==null?s.d=D.K():r
s.n(0,q.gfp())
s=a.gbf()
r=s.b
s=r==null?s.b=D.K():r
s.n(0,q.ghI())
s=a.gbf()
r=s.d
s=r==null?s.d=D.K():r
s.n(0,q.ghG())
s=a.gbf()
r=s.c
s=r==null?s.c=D.K():r
s.n(0,q.ghE())
return!0},
b4:function(a){return new V.a7(a.a,a.b)},
cf:function(a){var s=this
t.Z.a(a)
if(!s.d.q(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
ci:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.al(a.d)
if(s.ac(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.b4(a.y.al(r).L(0,2).a2(0,s.gaG()))
p=n.c
p.sa_(0,-q.a*2.5+n.cy)
o=n.b
o.sa_(0,-q.b*2.5+n.db)
o.sa5(0)
p.sa5(0)
n.dx=n.b4(a.z.al(r).L(0,2).a2(0,s.gaG()))
n.ag()},
ck:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.ac(s)>0.0001){r.c.sa5(-r.dx.a*10*2.5)
r.b.sa5(-r.dx.b*10*2.5)
r.ag()}},
fo:function(a){var s=this
if(t.bv.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
fq:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.q(0,a.x.b))return
s=a.c
r=a.d
q=n.b4(a.y.al(r).L(0,2).a2(0,s.gaG()))
p=n.c
p.sa_(0,-q.a*2.5+n.cy)
o=n.b
o.sa_(0,-q.b*2.5+n.db)
o.sa5(0)
p.sa5(0)
n.dx=n.b4(a.z.al(r).L(0,2).a2(0,s.gaG()))
n.ag()},
hJ:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
hH:function(a){var s,r,q,p,o,n=this
t.dr.a(a)
if(!n.cx)return
if(n.ch){s=a.y.al(a.d)
if(s.ac(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.b4(a.y.al(r).L(0,2).a2(0,s.gaG()))
p=n.c
p.sa_(0,-q.a*2.5+n.cy)
o=n.b
o.sa_(0,-q.b*2.5+n.db)
o.sa5(0)
p.sa5(0)
n.dx=n.b4(a.z.al(r).L(0,2).a2(0,s.gaG()))
n.ag()},
hF:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.ac(s)>0.0001){r.c.sa5(-r.dx.a*10*2.5)
r.b.sa5(-r.dx.b*10*2.5)
r.ag()}},
bg:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(o<n){p.dy=n
s=b.y
o=p.c
o.az(0,s)
n=p.b
n.az(0,s)
n=n.d
r=Math.cos(n)
q=Math.sin(n)
n=V.b4(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
o=o.d
r=Math.cos(o)
q=Math.sin(o)
p.fr=n.L(0,V.b4(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$ia1:1}
U.dN.prototype={
gt:function(){var s=this.r
return s==null?this.r=D.K():s},
W:function(a){var s=this.r
return s==null?null:s.C(a)},
bs:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.gad()
r=s.e
s=r==null?s.e=D.K():r
r=this.gft()
s.n(0,r)
s=a.gat()
q=s.e;(q==null?s.e=D.K():q).n(0,r)
return!0},
fu:function(a){var s=this,r=s.b,q=s.a
if(!r.q(0,q==null?null:q.gbb(q).c))return
t.bZ.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.W(new D.E("zoom",r,q))}},
bg:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.b4(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$ia1:1}
M.cK.prototype={
gt:function(){var s=this.r
return s==null?this.r=D.K():s},
a1:function(a){var s=this.r
return s==null?null:s.C(a)},
bl:function(){return this.a1(null)},
hh:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.ga0(),q=t.b,p=0;p<b.length;b.length===s||(0,H.p)(b),++p){o=b[p].gt()
n=o.a;(n==null?o.a=H.a([],q):n).push(r)}this.a1(new D.aZ())},
hj:function(a,b){var s,r
for(s=b.gU(b),r=this.ga0();s.v();)s.gD(s).gt().B(0,r)
this.a1(new D.b_())},
ak:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.ai(s,s.length),r=H.X(s).c;s.v();)r.a(s.d).ak(a)
q.f=!1},
$iaP:1}
M.cO.prototype={
gt:function(){var s=this.r
return s==null?this.r=D.K():s},
a1:function(a){var s=this.r
return s==null?null:s.C(a)},
bl:function(){return this.a1(null)},
sbt:function(a){var s,r,q=this
if(a==null)a=new X.iI()
s=q.b
if(s!==a){if(s!=null)s.gt().B(0,q.ga0())
r=q.b
q.b=a
a.gt().n(0,q.ga0())
q.a1(new D.E("camera",r,q.b))}},
sbz:function(a,b){var s,r,q=this
if(b==null)b=X.lm(null)
s=q.c
if(s!==b){if(s!=null)s.gt().B(0,q.ga0())
r=q.c
q.c=b
b.gt().n(0,q.ga0())
q.a1(new D.E("target",r,q.c))}},
sbA:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gt().B(0,r.ga0())
s=r.d
r.d=a
if(a!=null)a.gt().n(0,r.ga0())
r.a1(new D.E("technique",s,r.d))}},
ak:function(a){var s,r=this
a.cZ(r.d)
s=r.c
if(s!=null)s.a4(a)
s=r.b
if(s!=null)s.a4(a)
s=r.e
s.az(0,a)
s.ak(a)
s=r.b
if(s!=null)s.aW(a)
a.cY()},
$iaP:1}
M.cU.prototype={
a1:function(a){var s=this.y
return s==null?null:s.C(a)},
bl:function(){return this.a1(null)},
fK:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.ga0(),q=t.b,p=0;p<b.length;b.length===s||(0,H.p)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.c2()
m=n.a;(m==null?n.a=H.a([],q):m).push(r)}this.a1(new D.aZ())},
fM:function(a,b){var s,r
for(s=b.gU(b),r=this.ga0();s.v();)s.gD(s).gt().B(0,r)
this.a1(new D.b_())},
sbt:function(a){var s,r,q=this
if(a==null)a=X.mh(null)
s=q.b
if(s!==a){if(s!=null)s.gt().B(0,q.ga0())
r=q.b
q.b=a
a.gt().n(0,q.ga0())
q.a1(new D.E("camera",r,q.b))}},
sbz:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gt().B(0,r.ga0())
s=r.c
r.c=b
b.gt().n(0,r.ga0())
r.a1(new D.E("target",s,r.c))}},
sbA:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gt().B(0,r.ga0())
s=r.d
r.d=a
if(a!=null)a.gt().n(0,r.ga0())
r.a1(new D.E("technique",s,r.d))}},
gt:function(){var s=this.y
return s==null?this.y=D.K():s},
ak:function(a){var s,r,q,p=this
a.cZ(p.d)
s=p.c
if(s!=null)s.a4(a)
s=p.b
if(s!=null)s.a4(a)
s=p.d
if(s!=null)s.az(0,a)
for(s=p.e.a,r=new J.ai(s,s.length),q=H.X(r).c;r.v();)q.a(r.d).az(0,a)
for(s=new J.ai(s,s.length),r=H.X(s).c;s.v();)r.a(s.d).ak(a)
if(p.b!=null){a.cy.aT()
a.db.aT()}a.cY()},
$iaP:1}
A.eu.prototype={}
A.i6.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
i4:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
e4:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.av.prototype={
gaA:function(a){var s=this.a?1:0
return s|(this.c?4:0)|0},
i:function(a){var s=this.a?1:0
return""+(s|(this.c?4:0)|0)},
q:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.av))return!1
if(this.a===b.a)s=this.c===b.c
else s=!1
return s}}
A.dc.prototype={
eZ:function(d2,d3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6=u.C,c7="Required uniform value, ",c8=", was not defined or used in shader.",c9=c4.x,d0=new P.a0(""),d1=c9.fr
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
A.q0(c9,d0)
A.q2(c9,d0)
A.q1(c9,d0)
A.q4(c9,d0)
A.q5(c9,d0)
A.q3(c9,d0)
A.q6(c9,d0)
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
c4.ep(0,s.charCodeAt(0)==0?s:s,A.q_(c9))
c4.y=c4.gah(c4).h(0,"posAttr")
c4.Q=c4.gah(c4).h(0,"normAttr")
c4.z=c4.gah(c4).h(0,"binmAttr")
c4.ch=c4.gah(c4).h(0,"txt2DAttr")
c4.cx=c4.gah(c4).h(0,"txtCubeAttr")
c4.cy=c4.gah(c4).h(0,"bendAttr")
if(c9.dy)c4.fy=t.j.a(c4.gG().O(0,"invViewMat"))
if(d1)c4.db=t.j.a(c4.gG().O(0,"objMat"))
if(r)c4.dx=t.j.a(c4.gG().O(0,"viewObjMat"))
d1=t.j
c4.fr=d1.a(c4.gG().O(0,"projViewObjMat"))
if(c9.go)c4.dy=d1.a(c4.gG().O(0,"viewMat"))
if(c9.x1)c4.go=t.bK.a(c4.gG().O(0,"txt2DMat"))
if(c9.x2)c4.id=d1.a(c4.gG().O(0,"txtCubeMat"))
if(c9.y1)c4.k1=d1.a(c4.gG().O(0,"colorMat"))
c4.k3=H.a([],t.p)
s=c9.ba
if(s>0){c4.k2=t.w.a(c4.gG().O(0,"bendMatCount"))
for(n=0;n<s;++n){r=c4.k3
m=c4.r
if(m==null)H.h(P.f(c6))
q="bendValues["+n+"].mat"
l=m.h(0,q)
if(l==null)H.h(P.f(c7+q+c8))
r.push(d1.a(l))}}d1=c9.a
if(d1.a)c4.k4=t.g.a(c4.gG().O(0,"emissionClr"))
if(d1.c)c4.r2=t.a.a(c4.gG().O(0,"emissionTxt"))
d1=c9.b
if(d1.a)c4.rx=t.g.a(c4.gG().O(0,"ambientClr"))
if(d1.c)c4.x1=t.a.a(c4.gG().O(0,"ambientTxt"))
d1=c9.c
if(d1.a)c4.x2=t.g.a(c4.gG().O(0,"diffuseClr"))
if(d1.c)c4.y2=t.a.a(c4.gG().O(0,"diffuseTxt"))
d1=c9.d
if(d1.a)c4.ba=t.g.a(c4.gG().O(0,"invDiffuseClr"))
if(d1.c)c4.bO=t.a.a(c4.gG().O(0,"invDiffuseTxt"))
d1=c9.e
s=d1.a
if(!s)r=d1.c
else r=!0
if(r){c4.e9=t.v.a(c4.gG().O(0,"shininess"))
if(s)c4.e7=t.g.a(c4.gG().O(0,"specularClr"))
if(d1.c)c4.e8=t.a.a(c4.gG().O(0,"specularTxt"))}if(c9.f.c)c4.ea=t.a.a(c4.gG().O(0,"bumpTxt"))
if(c9.db){d1=t.a
c4.eb=d1.a(c4.gG().O(0,"envSampler"))
s=c9.r
if(s.a)c4.ec=t.g.a(c4.gG().O(0,"reflectClr"))
if(s.c)c4.ed=d1.a(c4.gG().O(0,"reflectTxt"))
s=c9.x
r=s.a
if(!r)q=s.c
else q=!0
if(q){c4.ee=t.v.a(c4.gG().O(0,"refraction"))
if(r)c4.ef=t.g.a(c4.gG().O(0,"refractClr"))
if(s.c)c4.eg=d1.a(c4.gG().O(0,"refractTxt"))}}d1=c9.y
if(d1.a)c4.eh=t.v.a(c4.gG().O(0,"alpha"))
if(d1.c)c4.ei=t.a.a(c4.gG().O(0,"alphaTxt"))
if(c9.k1){d1=c9.z
s=d1.length
if(s!==0){r=t.S
c4.cG=P.W(r,t.W)
c4.cH=P.W(r,t.O)
for(r=t.w,q=t.g,p=t.v,o=t.d,k=0;k<d1.length;d1.length===s||(0,H.p)(d1),++k){j=d1[k]
i=j.a
h="barLight"+i
g=H.a([],o)
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
a4=a3}g.push(new A.dE(l,c,b,a4,a3,a2))}c4.cH.m(0,i,g)
f=c4.cG
m=c4.r
if(m==null)H.h(P.f(c6))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.h(P.f(c7+e+c8))
f.m(0,i,r.a(l))}}d1=c9.Q
s=d1.length
if(s!==0){r=t.S
c4.cI=P.W(r,t.W)
c4.cJ=P.W(r,t.m)
for(r=t.w,q=t.g,p=t.G,o=t.V,k=0;k<d1.length;d1.length===s||(0,H.p)(d1),++k){j=d1[k]
i=j.a
h="dirLight"+i
g=H.a([],o)
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
g.push(new A.dF(a7,a6,a5,l,c,a8))}c4.cJ.m(0,i,g)
f=c4.cI
m=c4.r
if(m==null)H.h(P.f(c6))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.h(P.f(c7+e+c8))
f.m(0,i,r.a(l))}}d1=c9.ch
s=d1.length
if(s!==0){r=t.S
c4.cK=P.W(r,t.W)
c4.cL=P.W(r,t.r)
for(r=t.w,q=t.g,p=t.bK,o=t.a,f=t.bw,e=t.v,d=t.B,k=0;k<d1.length;d1.length===s||(0,H.p)(d1),++k){j=d1[k]
i=j.a
h="pointLight"+i
g=H.a([],d)
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
a4=a3}g.push(new A.dH(l,c,b5,b,a8,b6,b7,a4,a3,a2))}c4.cL.m(0,i,g)
a9=c4.cK
m=c4.r
if(m==null)H.h(P.f(c6))
b0=h+"Count"
l=m.h(0,b0)
if(l==null)H.h(P.f(c7+b0+c8))
a9.m(0,i,r.a(l))}}c9=c9.cx
d1=c9.length
if(d1!==0){s=t.S
c4.cM=P.W(s,t.W)
c4.cN=P.W(s,t.R)
for(s=t.w,r=t.g,q=t.v,p=t.bw,o=t.G,f=t.J,k=0;k<c9.length;c9.length===d1||(0,H.p)(c9),++k){j=c9[k]
i=j.a
h="spotLight"+i
g=H.a([],f)
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
g.push(new A.dK(l,c,b,a,a7,a6,c1,c0,b7,c3,c2,a4,a3,a2,a8,b6))}c4.cN.m(0,i,g)
e=c4.cM
m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"Count"
l=m.h(0,d)
if(l==null)H.h(P.f(c7+d+c8))
e.m(0,i,s.a(l))}}}},
ao:function(a,b){if(b!=null&&b.d>=6)if(a!=null)a.df(b)}}
A.bf.prototype={
i:function(a){return"barLight"+this.a}}
A.bh.prototype={
i:function(a){return"dirLight"+this.a}}
A.bo.prototype={
i:function(a){return"pointLight"+this.a}}
A.bq.prototype={
i:function(a){return"spotLight"+this.a}}
A.iW.prototype={
i:function(a){return this.bN}}
A.dE.prototype={}
A.dF.prototype={}
A.dH.prototype={}
A.dK.prototype={}
A.ch.prototype={
ep:function(a,b,c){var s,r,q,p,o,n=this
n.c=b
n.d=c
s=n.du(b,35633)
r=n.du(n.d,35632)
q=n.a
p=q.createProgram()
p.toString
n.e=p
q.attachShader(n.gaL(),s)
q.attachShader(n.gaL(),r)
q.linkProgram(n.gaL())
if(!H.n_(q.getProgramParameter(n.gaL(),35714))){o=q.getProgramInfoLog(n.gaL())
if(o==null)o="undefined log error"
q.deleteProgram(n.e)
H.h(P.f("Failed to link shader: "+o))}n.hA()
n.hC()},
gah:function(a){var s=this.f
if(s==null)throw H.c(P.f("Must initialize the shader prior to getting the attributes."))
return s},
gG:function(){var s=this.r
if(s==null)throw H.c(P.f(u.C))
return s},
gaL:function(){var s=this.e
if(s==null)throw H.c(P.f(u.p))
return s},
a4:function(a){a.a.useProgram(this.e)
this.gah(this).i4()},
du:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.n_(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.f('Error compiling shader "'+H.z(q)+'": '+s))}return q},
hA:function(){var s,r,q,p,o=this,n=u.p,m=H.a([],t.eu),l=o.a,k=H.kz(l.getProgramParameter(o.gaL(),35721))
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
m.push(new A.eu(l,q,p))}o.f=new A.i6(m)},
hC:function(){var s,r,q,p,o,n,m=this,l=u.p,k=H.a([],t.dC),j=m.a,i=H.kz(j.getProgramParameter(m.gaL(),35718))
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
k.push(m.i_(o,n,q,p))}m.r=new A.jJ(k)},
b3:function(a,b,c){var s=this.a
if(a===1)return new A.cn(s,b,c)
else return A.lx(s,this.e,b,a,c)},
fi:function(a,b,c){var s=this.a
if(a===1)return new A.dI(s,b,c)
else return A.lx(s,this.e,b,a,c)},
fj:function(a,b,c){var s=this.a
if(a===1)return new A.dJ(s,b,c)
else return A.lx(s,this.e,b,a,c)},
bH:function(a,b){return new P.h9(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
i_:function(a,b,c,d){var s=this
switch(a){case 5120:return s.b3(b,c,d)
case 5121:return s.b3(b,c,d)
case 5122:return s.b3(b,c,d)
case 5123:return s.b3(b,c,d)
case 5124:return s.b3(b,c,d)
case 5125:return s.b3(b,c,d)
case 5126:return new A.dB(s.a,c,d)
case 35664:return new A.fH(s.a,c,d)
case 35665:return new A.dC(s.a,c,d)
case 35666:return new A.dD(s.a,c,d)
case 35667:return new A.fI(s.a,c,d)
case 35668:return new A.fJ(s.a,c,d)
case 35669:return new A.fK(s.a,c,d)
case 35674:return new A.fL(s.a,c,d)
case 35675:return new A.dG(s.a,c,d)
case 35676:return new A.co(s.a,c,d)
case 35678:return s.fi(b,c,d)
case 35680:return s.fj(b,c,d)
case 35670:throw H.c(s.bH("BOOL",c))
case 35671:throw H.c(s.bH("BOOL_VEC2",c))
case 35672:throw H.c(s.bH("BOOL_VEC3",c))
case 35673:throw H.c(s.bH("BOOL_VEC4",c))
default:throw H.c(P.f("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.dv.prototype={}
A.a3.prototype={}
A.jJ.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
O:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.f("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.w()},
w:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.p)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.cn.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.fI.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.fJ.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.fK.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.fG.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.dB.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.fH.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.dC.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.dD.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.fL.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.dG.prototype={
am:function(a){var s=new Float32Array(H.cy(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.co.prototype={
am:function(a){var s=new Float32Array(H.cy(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.dI.prototype={
i:function(a){return"UniformSampler2D: "+this.c}}
A.dJ.prototype={
df:function(a){var s=a.d,r=this.a,q=this.d
if(s<6)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+this.c}}
F.kx.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cS(q.b,b).cS(q.d.cS(q.c,b),c)
a.sa_(0,new V.I(p.a,p.b,p.c))
a.say(p.A())
q=1-b
s=1-c
a.sdY(new V.ay(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)},
$S:5}
F.kM.prototype={
$2:function(a,b){return V.i1(this.a,this.b,b)},
$S:18}
F.kO.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.i1(-1,1,c),n=this.a.$2(b,c)
q=-q*n
s=p*n
a.sa_(0,new V.I(q,s,o))
a.say(new V.w(q,s,o).A())
a.sdY(new V.ay(1-c,2+c,-1,-1))},
$S:5}
F.kP.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:16}
F.kQ.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:16}
F.l_.prototype={
$3:function(a,b,c){var s=c*3.141592653589793,r=Math.sin(s),q=b*6.283185307179586
q=new V.w(Math.cos(q)*r,Math.cos(s),Math.sin(q)*r).A()
a.sa_(0,new V.I(q.a,q.b,q.c))},
$S:5}
F.ld.prototype={
$2:function(a,b){return 0},
$S:18}
F.lc.prototype={
$3:function(a,b,c){var s,r=this.b.$2(b,c)
if(typeof r!=="number")return H.ng(r)
s=a.f
r=(s!=null?new V.w(s.a,s.b,s.c):V.dO()).A().L(0,this.a+r)
a.sa_(0,new V.I(r.a,r.b,r.c))},
$S:5}
F.lf.prototype={
$1:function(a){return new V.I(Math.cos(a),Math.sin(a),0)},
$S:26}
F.kZ.prototype={
$1:function(a){var s=this.a*a,r=2+Math.cos(s),q=this.b*a
return new V.I(r*Math.cos(q)/2,r*Math.sin(q)/2,Math.sin(s)/2)},
$S:26}
F.kN.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.lZ(l.$1(m),k)
k=J.lZ(l.$1(m+3.141592653589793/n.c),k).aZ(0,j)
s=new V.w(k.a,k.b,k.c).A()
r=$.mD
if(r==null){r=new V.w(1,0,0)
$.mD=r}q=s.aO(!s.q(0,r)?V.dO():r).A()
r=q.aO(s).A()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.L(0,l*k)
k=q.L(0,o*k)
a.sa_(0,j.V(0,new V.I(l.a-k.a,l.b-k.b,l.c-k.c)))},
$S:5}
F.ap.prototype={
b_:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.f(u.D))
if(r!==b.a||r!==c.a)throw H.c(P.f(u.R))
s.e=s.d=null
s.bF(a)
s.bG(b)
s.dI(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gR().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.X()}},
bu:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.b.B(r.gR().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.X()}}s.co()
s.cp()
s.hs()},
bF:function(a){this.a=a
a.gR().b.push(this)},
bG:function(a){this.b=a
a.gR().c.push(this)},
dI:function(a){this.c=a
a.gR().d.push(this)},
co:function(){var s=this.a
if(s!=null)C.b.B(s.gR().b,this)
this.a=null},
cp:function(){var s=this.b
if(s!=null)C.b.B(s.gR().c,this)
this.b=null},
hs:function(){var s=this.c
if(s!=null)C.b.B(s.gR().d,this)
this.c=null},
fb:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.dP()
if(n!=null)q=q.V(0,n)
if(s!=null)q=q.V(0,s)
if(r!=null)q=q.V(0,r)
if(q.es())return p
return q.A()},
fd:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aZ(0,n)
q=new V.w(o.a,o.b,o.c).A()
o=r.aZ(0,n)
return q.aO(new V.w(o.a,o.b,o.c).A()).A()},
cA:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.fb()
if(s==null){s=q.fd()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.X()}return!0},
fa:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.dP()
if(n!=null)q=q.V(0,n)
if(s!=null)q=q.V(0,s)
if(r!=null)q=q.V(0,r)
if(q.es())return p
return q.A()},
fc:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.F().toString
if(Math.abs(p-0)<1e-9){j=b.aZ(0,e)
o=new V.w(j.a,j.b,j.c).A()
if(q.a-r.a<0)o=o.bh(0)}else{n=(j-s.b)/p
j=b.aZ(0,e).L(0,n).V(0,e).aZ(0,h)
o=new V.w(j.a,j.b,j.c).A()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.bh(0)}m=l.d
if(m!=null){m=m.A()
o=m.aO(o).A().aO(m).A()}return o},
cw:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.fa()
if(s==null){s=q.fc()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.X()}return!0},
b2:function(a,b){var s,r=b.a
if(r==null)throw H.c(P.f("May not replace a face's vertex with a vertex which is not attached to a shape."))
s=a.a
if(s!==r)throw H.c(P.f("May not replace a face's vertex with a vertex attached to a different shape."))},
ghU:function(a){var s=this
if(J.G(s.a,s.b))return!0
if(J.G(s.b,s.c))return!0
if(J.G(s.c,s.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
K:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gF(p)
p=a+C.a.av(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gF(o)
p=p+C.a.av(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gF(o)
s=p+C.a.av(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.w()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.w()
return s+((p==null?"-":p)+"}")},
w:function(){return this.K("")}}
F.iA.prototype={}
F.jt.prototype={
bc:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gF(q)
s=c.a
if(q==(s==null?r:s.gF(s))){q=b.b
q=q==null?r:q.gF(q)
s=c.b
if(q==(s==null?r:s.gF(s))){q=b.c
q=q==null?r:q.gF(q)
s=c.c
q=q==(s==null?r:s.gF(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gF(q)
s=c.b
if(q==(s==null?r:s.gF(s))){q=b.b
q=q==null?r:q.gF(q)
s=c.c
if(q==(s==null?r:s.gF(s))){q=b.c
q=q==null?r:q.gF(q)
s=c.a
q=q==(s==null?r:s.gF(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gF(q)
s=c.c
if(q==(s==null?r:s.gF(s))){q=b.b
q=q==null?r:q.gF(q)
s=c.a
if(q==(s==null?r:s.gF(s))){q=b.c
q=q==null?r:q.gF(q)
s=c.b
q=q==(s==null?r:s.gF(s))}else q=!1
return q}else return!1}}}}
F.eR.prototype={
eY:function(a,b){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a line with a start vertex which is not attached to a shape."))
if(r!==b.a)throw H.c(P.f("May not create a line with vertices attached to different shapes."))
s.bF(a)
s.bG(b)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gaa(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.X()}},
bu:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null)){if(!q){r=r.a
if(r!=null)C.b.B(r.gaa(r).b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.X()}}s.co()
s.cp()},
bF:function(a){this.a=a
a.gaa(a).b.push(this)},
bG:function(a){this.b=a
a.gaa(a).c.push(this)},
co:function(){var s=this.a
if(s!=null)C.b.B(s.gaa(s).b,this)
this.a=null},
cp:function(){var s=this.b
if(s!=null)C.b.B(s.gaa(s).c,this)
this.b=null},
b2:function(a,b){var s,r=b.a
if(r==null)throw H.c(P.f("May not replace a line's vertex with a vertex which is not attached to a shape."))
s=a.a
if(s!==r)throw H.c(P.f("May not replace a line's vertex with a vertex attached to a different shape."))},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
K:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gF(s)
s=a+C.a.av(C.c.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gF(r)
return s+C.a.av(C.c.i(r==null?-1:r),0)},
w:function(){return this.K("")}}
F.iN.prototype={}
F.jI.prototype={
bc:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gF(q)
s=c.a
if(q==(s==null?r:s.gF(s))){q=b.b
q=q==null?r:q.gF(q)
s=c.b
return q==(s==null?r:s.gF(s))}else{q=b.a
q=q==null?r:q.gF(q)
s=c.b
if(q==(s==null?r:s.gF(s))){q=b.b
q=q==null?r:q.gF(q)
s=c.a
return q==(s==null?r:s.gF(s))}else return!1}}}
F.fb.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
K:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gF(s)
return a+C.a.av(C.c.i(s),0)},
w:function(){return this.K("")}}
F.jn.prototype={
gS:function(){var s=this.a
return s==null?this.a=new F.y(this,H.a([],t.k)):s},
gaS:function(a){var s=this.b
return s==null?this.b=new F.bO(this,H.a([],t.q)):s},
gaa:function(a){var s=this.c
return s==null?this.c=new F.dt(this,H.a([],t.L)):s},
gR:function(){var s=this.d
return s==null?this.d=new F.ds(this,H.a([],t.u)):s},
gt:function(){var s=this.e
return s==null?this.e=D.K():s},
bd:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.e
if(a0!=null)++a0.d
a1.gS().a3()
s=b.gS().c.length
for(a0=a1.gS().c,r=a0.length,q=t.k,p=0;p<a0.length;a0.length===r||(0,H.p)(a0),++p){o=a0[p]
n=b.a
if(n==null)n=b.a=new F.y(b,H.a([],q))
n.n(0,o.hX())}b.gS().a3()
for(a0=a1.gaS(a1).b,r=a0.length,n=t.q,p=0;p<a0.length;a0.length===r||(0,H.p)(a0),++p){m=a0[p]
l=b.a
if(l==null)l=b.a=new F.y(b,H.a([],q))
k=m.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.a([],q)):i).a3()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
h=l[k]
k=b.b
l=(k==null?b.b=new F.bO(b,H.a([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.a([],q)):k).n(0,h)
l=new F.fb()
if(h.a==null)H.h(P.f("May not create a point with a vertex which is not attached to a shape."))
l.a=h
k=h.b;(k==null?h.b=new F.ba(H.a([],n)):k).b.push(l)
k=l.a
if(k!=null){k=k.a
if(k!=null){j=k.b;(j==null?k.b=new F.bO(k,H.a([],n)):j).b.push(l)}}l=l.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.C(a)}}}for(a0=a1.gaa(a1).b,r=a0.length,n=t.L,p=0;p<a0.length;a0.length===r||(0,H.p)(a0),++p){g=a0[p]
l=b.a
if(l==null)l=b.a=new F.y(b,H.a([],q))
k=g.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.a([],q)):i).a3()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.y(b,H.a([],q)):k
k=g.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.a([],q)):i).a3()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.c
l=(k==null?b.c=new F.dt(b,H.a([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.a([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.y(l,H.a([],q)):k).n(0,e)
new F.eR().eY(f,e)}for(a0=a1.gR().b,r=a0.length,n=t.u,p=0;p<a0.length;a0.length===r||(0,H.p)(a0),++p){d=a0[p]
l=b.a
if(l==null)l=b.a=new F.y(b,H.a([],q))
k=d.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.a([],q)):i).a3()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.y(b,H.a([],q)):k
k=d.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.a([],q)):i).a3()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.a
l=k==null?b.a=new F.y(b,H.a([],q)):k
k=d.c
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.a([],q)):i).a3()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
c=l[k]
k=b.d
l=(k==null?b.d=new F.ds(b,H.a([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.a([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.y(l,H.a([],q)):k).n(0,e)
k=l.a;(k==null?l.a=new F.y(l,H.a([],q)):k).n(0,c)
new F.ap().b_(f,e,c)}a0=b.e
if(a0!=null)a0.aH(0)},
ap:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gR().ap()||!1
if(!r.gS().ap())s=!1
q=r.e
if(q!=null)q.aH(0)
return s},
i7:function(a,b){var s,r,q,p,o=this,n=o.gS().c.length
for(s=t.k,r=0;r<n;++r){q=o.a
q=(q==null?o.a=new F.y(o,H.a([],s)):q).c
if(r>=q.length)return H.d(q,r)
p=q[r]
if(b.bc(0,a,p))return p}return null},
hu:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.gS().n(0,a)
for(s=b.length,r=t.q,q=t.L,p=t.u,o=t.k,n=0;n<b.length;b.length===s||(0,H.p)(b),++n){m=b[n]
while(!0){l=m.d
if(l==null){l=m.d=new F.al(H.a([],p),H.a([],p),H.a([],p))
k=l}else k=l
if(!(l.b.length+l.c.length+l.d.length>0))break
l=k.h(0,0)
k=l.a
if(k==null||l.b==null||l.c==null)H.h(P.f("May not replace a face's vertex when the point has been disposed."))
if(J.G(k,m)){l.b2(m,a)
k=l.a
if(k!=null){j=k.d
C.b.B((j==null?k.d=new F.al(H.a([],p),H.a([],p),H.a([],p)):j).b,l)}l.a=null
l.a=a
k=a.d;(k==null?a.d=new F.al(H.a([],p),H.a([],p),H.a([],p)):k).b.push(l)
i=1}else i=0
if(J.G(l.b,m)){l.b2(m,a)
k=l.b
if(k!=null){j=k.d
C.b.B((j==null?k.d=new F.al(H.a([],p),H.a([],p),H.a([],p)):j).c,l)}l.b=null
l.b=a
k=a.d;(k==null?a.d=new F.al(H.a([],p),H.a([],p),H.a([],p)):k).c.push(l);++i}if(J.G(l.c,m)){l.b2(m,a)
k=l.c
if(k!=null){j=k.d
C.b.B((j==null?k.d=new F.al(H.a([],p),H.a([],p),H.a([],p)):j).d,l)}l.c=null
l.c=a
k=a.d;(k==null?a.d=new F.al(H.a([],p),H.a([],p),H.a([],p)):k).d.push(l);++i}if(i>0){l=l.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.C(null)}}}}while(!0){l=m.c
if(l==null){l=m.c=new F.aE(H.a([],q),H.a([],q))
k=l}else k=l
if(!(l.b.length+l.c.length>0))break
l=k.h(0,0)
k=l.a
if(k==null||l.b==null)H.h(P.f("May not replace a line's vertex when the point has been disposed."))
if(J.G(k,m)){l.b2(m,a)
k=l.a
if(k!=null){j=k.c
C.b.B((j==null?k.c=new F.aE(H.a([],q),H.a([],q)):j).b,l)}l.a=null
l.a=a
k=a.c;(k==null?a.c=new F.aE(H.a([],q),H.a([],q)):k).b.push(l)
i=1}else i=0
if(J.G(l.b,m)){l.b2(m,a)
k=l.b
if(k!=null){j=k.c
C.b.B((j==null?k.c=new F.aE(H.a([],q),H.a([],q)):j).c,l)}l.b=null
l.b=a
k=a.c;(k==null?a.c=new F.aE(H.a([],q),H.a([],q)):k).c.push(l);++i}if(i>0){l=l.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.C(null)}}}}while(!0){l=m.b
if(l==null){l=m.b=new F.ba(H.a([],r))
k=l}else k=l
if(!(l.b.length>0))break
l=k.b
if(0>=l.length)return H.d(l,0)
l=l[0]
k=l.a
if(k==null)H.h(P.f("May not replace a point's vertex when the point has been disposed."))
if(J.G(k,m)){if(a.a==null)H.h(P.f("May not replace a point's vertex with a vertex which is not attached to a shape."))
k=l.a
if(k!=null){j=k.b
C.b.B((j==null?k.b=new F.ba(H.a([],r)):j).b,l)}l.a=null
l.a=a
k=a.b;(k==null?a.b=new F.ba(H.a([],r)):k).b.push(l)
i=1}else i=0
if(i>0){l=l.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.C(null)}}}}l=h.a;(l==null?h.a=new F.y(h,H.a([],o)):l).B(0,m)}},
ey:function(a,b){var s,r,q,p,o,n,m=this,l=m.e
if(l!=null)++l.d
l=m.gS().c
s=H.a(l.slice(0),H.ky(l))
for(l=t.k;s.length!==0;){r=C.b.gi9(s)
C.b.d2(s,0)
q=H.a([],l)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(a.bc(0,r,o)){q.push(o)
C.b.d2(s,p)}}if(q.length>1){n=b.bd(q)
if(n!=null){m.hu(n,q)
s.push(n)}}}m.gS().a3()
m.gaa(m).bX()
m.gR().bX()
m.gaS(m).iB()
m.gaa(m).d3(new F.jI())
m.gR().d3(new F.jt())
l=m.e
if(l!=null)l.aH(0)},
bK:function(){this.ey(new F.dQ(),new F.jd())},
e1:function(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=34962,c={},b=f.gS().c.length,a=$.aU(),a0=a3.a,a1=(a0&a.a)!==0?1:0
if((a0&$.bB().a)!==0)++a1
if((a0&$.bA().a)!==0)++a1
if((a0&$.bV().a)!==0)++a1
if((a0&$.bC().a)!==0)++a1
if((a0&$.eo().a)!==0)++a1
if((a0&$.ep().a)!==0)++a1
if((a0&$.cF().a)!==0)++a1
if((a0&$.bz().a)!==0)++a1
s=a3.gdg(a3)
r=P.eT(b*s,0,!1,t.gR)
c.a=0
q=P.oh(a1,new F.jo(c,f,a3,s*4,b,s,r),t.eT)
a=a2.a
a0=a.createBuffer()
a0.toString
a.bindBuffer(d,a0)
a.bufferData(d,new Float32Array(H.cy(r)),35044)
a.bindBuffer(d,e)
p=new Z.c0(new Z.fT(d,a0),H.a([],t.fv),q,a3)
if(f.gaS(f).b.length!==0){o=H.a([],t.t)
a0=t.q
n=t.k
m=0
while(!0){l=f.b
if(l==null){l=f.b=new F.bO(f,H.a([],a0))
k=l}else k=l
if(!(m<l.b.length))break
l=k.b
if(m>=l.length)return H.d(l,m)
l=l[m].a
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.a([],n)):j).a3()}l=l.e}o.push(l==null?0:l);++m}i=Z.lz(a,34963,o)
p.b.push(new Z.c6(0,o.length,i))}if(f.gaa(f).b.length!==0){o=H.a([],t.t)
a0=t.L
n=t.k
m=0
while(!0){l=f.c
if(l==null){l=f.c=new F.dt(f,H.a([],a0))
k=l}else k=l
if(!(m<l.b.length))break
l=k.b
if(m>=l.length)return H.d(l,m)
h=l[m]
l=h.a
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.a([],n)):j).a3()}l=l.e}o.push(l==null?0:l)
l=h.b
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.a([],n)):j).a3()}l=l.e}o.push(l==null?0:l);++m}i=Z.lz(a,34963,o)
p.b.push(new Z.c6(1,o.length,i))}if(f.gR().b.length!==0){o=H.a([],t.t)
a0=t.u
n=t.k
m=0
while(!0){l=f.d
if(l==null){l=f.d=new F.ds(f,H.a([],a0))
k=l}else k=l
if(!(m<l.b.length))break
l=k.b
if(m>=l.length)return H.d(l,m)
g=l[m]
l=g.a
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.a([],n)):j).a3()}l=l.e}o.push(l==null?0:l)
l=g.b
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.a([],n)):j).a3()}l=l.e}o.push(l==null?0:l)
l=g.c
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.a([],n)):j).a3()}l=l.e}o.push(l==null?0:l);++m}i=Z.lz(a,34963,o)
p.b.push(new Z.c6(4,o.length,i))}return p},
i:function(a){var s=this,r="   ",q=H.a([],t.s)
if(s.gS().c.length!==0){q.push("Vertices:")
q.push(s.gS().K(r))}if(s.gaS(s).b.length!==0){q.push("Points:")
q.push(s.gaS(s).K(r))}if(s.gaa(s).b.length!==0){q.push("Lines:")
q.push(s.gaa(s).K(r))}if(s.gR().b.length!==0){q.push("Faces:")
q.push(s.gR().K(r))}return C.b.j(q,"\n")},
X:function(){var s=this.e
return s==null?null:s.C(null)}}
F.jo.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c.hR(a),e=f.gdg(f),d=g.a,c=d.a
for(s=g.e,r=g.r,q=r.length,p=g.f,o=g.b,n=t.k,m=0;m<s;++m){l=o.a
l=(l==null?o.a=new F.y(o,H.a([],n)):l).c
if(m>=l.length)return H.d(l,m)
k=l[m].ik(f)
j=d.a+m*p
for(l=k.length,i=0;i<l;++i){h=k[i]
if(j>=q)return H.d(r,j)
r[j]=h;++j}}d.a+=e
return new Z.c_(f,e,c*4,g.d)},
$S:48}
F.ds.prototype={
bI:function(a,b,c,d){var s,r=this.a
r.gS().n(0,b)
r.gS().n(0,c)
r.gS().n(0,d)
s=new F.ap()
r=b.a
if(r==null)H.h(P.f(u.D))
if(r!=c.a||r!=d.a)H.h(P.f(u.R))
s.bF(b)
s.bG(c)
s.dI(d)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gR().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.X()}return s},
dQ:function(a){var s,r,q,p,o,n,m,l,k=H.a([],t.u),j=a.length
if(j>0){s=a[0]
for(r=this.a,q=t.k,p=2;p<j;++p){o=p-1
n=a.length
if(o>=n)return H.d(a,o)
o=a[o]
if(p>=n)return H.d(a,p)
n=a[p]
m=r.a;(m==null?r.a=new F.y(r,H.a([],q)):m).n(0,s)
m=r.a;(m==null?r.a=new F.y(r,H.a([],q)):m).n(0,o)
m=r.a;(m==null?r.a=new F.y(r,H.a([],q)):m).n(0,n)
l=new F.ap()
l.b_(s,o,n)
k.push(l)}}return k},
hO:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=H.a([],t.u)
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
if(m){(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,j)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,g)
e=new F.ap()
e.b_(j,i,g)
d.push(e)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,j)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,f)
e=new F.ap()
e.b_(j,g,f)
d.push(e)}else{(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,f)
e=new F.ap()
e.b_(i,g,f)
d.push(e)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,f)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,j)
e=new F.ap()
e.b_(i,f,j)
d.push(e)}m=!m}o=!o}return d},
gl:function(a){return this.b.length},
d3:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gS().c.length-1,q=t.u,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.y(s,H.a([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.d
if(o==null)o=n.d=new F.al(H.a([],q),H.a([],q),H.a([],q))
m=o.b.length+o.c.length+o.d.length-1
for(;m>=0;m=k){o=n.d
l=(o==null?n.d=new F.al(H.a([],q),H.a([],q),H.a([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.d
if(a.bc(0,l,(o==null?n.d=new F.al(H.a([],q),H.a([],q),H.a([],q)):o).h(0,j))){l.bu()
break}}}}},
bX:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(q.ghU(q))q.bu()}},
ap:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.p)(s),++p)if(!s[p].cA())q=!1
return q},
cz:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.p)(s),++p)if(!s[p].cw())q=!1
return q},
i:function(a){return this.w()},
K:function(a){var s,r,q,p=H.a([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].K(a))
return C.b.j(p,"\n")},
w:function(){return this.K("")}}
F.dt.prototype={
gl:function(a){return this.b.length},
d3:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gS().c.length-1,q=t.L,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.y(s,H.a([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.c
if(o==null)o=n.c=new F.aE(H.a([],q),H.a([],q))
m=o.b.length+o.c.length-1
for(;m>=0;m=k){o=n.c
l=(o==null?n.c=new F.aE(H.a([],q),H.a([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.c
if(a.bc(0,l,(o==null?n.c=new F.aE(H.a([],q),H.a([],q)):o).h(0,j))){l.bu()
break}}}}},
bX:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(J.G(q.a,q.b))q.bu()}},
i:function(a){return this.w()},
K:function(a){var s,r=H.a([],t.s),q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.d(q,s)
r.push(q[s].K(a+(""+s+". ")))}return C.b.j(r,"\n")},
w:function(){return this.K("")}}
F.bO.prototype={
gl:function(a){return this.b.length},
iB:function(){var s,r,q,p,o,n,m
for(s=this.b,r=s.length-1,q=t.q;r>=0;--r){if(r>=s.length)return H.d(s,r)
p=s[r].a
if(p==null)o=null
else{n=p.b
p=(n==null?p.b=new F.ba(H.a([],q)):n).b.length
o=p}if((o==null?0:o)>1){if(r>=s.length)return H.d(s,r)
m=s[r]
p=m.a
if(p!=null){p=p.a
if(p!=null){n=p.b
C.b.B((n==null?p.b=new F.bO(p,H.a([],q)):n).b,m)}p=m.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.C(null)}}}p=m.a
if(p!=null){n=p.b
C.b.B((n==null?p.b=new F.ba(H.a([],q)):n).b,m)}m.a=null}}},
i:function(a){return this.w()},
K:function(a){var s,r,q,p=H.a([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].K(a))
return C.b.j(p,"\n")},
w:function(){return this.K("")}}
F.cr.prototype={
cD:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.cs(s.cx,p,m,r,q,o,n,a,l)},
hX:function(){return this.cD(null)},
gaS:function(a){var s=this.b
return s==null?this.b=new F.ba(H.a([],t.q)):s},
gaa:function(a){var s=this.c
if(s==null){s=t.L
s=this.c=new F.aE(H.a([],s),H.a([],s))}return s},
gR:function(){var s=this.d
if(s==null){s=t.u
s=this.d=new F.al(H.a([],s),H.a([],s),H.a([],s))}return s},
gF:function(a){var s=this.a
if(s!=null)s.gS().a3()
return this.e},
sa_:function(a,b){var s
if(!J.G(this.f,b)){this.f=b
s=this.a
if(s!=null)s.X()}},
scW:function(a){var s
a=a==null?null:a.A()
if(!J.G(this.r,a)){this.r=a
s=this.a
if(s!=null)s.X()}},
se_:function(a){var s
a=a==null?null:a.A()
if(!J.G(this.x,a)){this.x=a
s=this.a
if(s!=null)s.X()}},
sd5:function(a){var s
if(!J.G(this.y,a)){this.y=a
s=this.a
if(s!=null)s.X()}},
say:function(a){var s
if(!J.G(this.z,a)){this.z=a
s=this.a
if(s!=null)s.X()}},
saq:function(a,b){var s
if(!J.G(this.Q,b)){this.Q=b
s=this.a
if(s!=null)s.X()}},
seM:function(a,b){var s
if(this.ch!==b){this.ch=b
s=this.a
if(s!=null)s.X()}},
sdY:function(a){var s
if(!J.G(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.X()}},
ik:function(a){var s,r,q,p,o=this,n=null
if(a.q(0,$.aU())){s=o.f
s=s==null?n:H.a([s.a,s.b,s.c],t.n)
return s==null?H.a([0,0,0],t.n):s}else if(a.q(0,$.bB())){s=o.r
s=s==null?n:H.a([s.a,s.b,s.c],t.n)
return s==null?H.a([0,1,0],t.n):s}else if(a.q(0,$.bA())){s=o.x
s=s==null?n:H.a([s.a,s.b,s.c],t.n)
return s==null?H.a([0,0,1],t.n):s}else if(a.q(0,$.bV())){s=o.y
s=s==null?n:H.a([s.a,s.b],t.n)
return s==null?H.a([0,0],t.n):s}else if(a.q(0,$.bC())){s=o.z
s=s==null?n:H.a([s.a,s.b,s.c],t.n)
return s==null?H.a([0,0,0],t.n):s}else if(a.q(0,$.eo())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return H.a([q,p,s==null?1:s],t.n)}else if(a.q(0,$.ep())){s=o.Q
s=s==null?n:s.d6(0)
return s==null?H.a([1,1,1,1],t.n):s}else if(a.q(0,$.cF()))return H.a([o.ch],t.n)
else if(a.q(0,$.bz())){s=o.cx
s=s==null?n:H.a([s.a,s.b,s.c,s.d],t.n)
return s==null?H.a([-1,-1,-1,-1],t.n):s}else return H.a([],t.n)},
cA:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dP()
p.gR().I(0,new F.k4(o))
p.r=o.a.A()
if(r){s.X()
o=s.e
if(o!=null)o.aH(0)}return!0},
cw:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dP()
p.gR().I(0,new F.k3(o))
p.x=o.a.A()
if(r){s.X()
o=s.e
if(o!=null)o.aH(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
K:function(a){var s,r,q=this,p=null,o="-",n=H.a([],t.s)
n.push(C.a.av(C.c.i(q.e),0))
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
w:function(){return this.K("")}}
F.k4.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.V(0,r)}},
$S:9}
F.k3.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.V(0,r)}},
$S:9}
F.y.prototype={
a3:function(){var s,r,q
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
s.X()
return!0},
dR:function(a,b,c,d,e,f,g){var s=F.cs(a,null,b,c,d,e,f,g,0)
this.n(0,s)
return s},
bJ:function(a,b,c,d,e,f){return this.dR(a,b,c,null,d,e,f)},
hP:function(a,b,c,d,e,f){return this.dR(a,b,c,d,e,f,null)},
gl:function(a){return this.c.length},
B:function(a,b){var s,r=this.a
if(b.a!==r)return!1
if(b.gaS(b).b.length===0){s=b.gaa(b)
if(s.b.length===0&&s.c.length===0){s=b.gR()
s=s.b.length===0&&s.c.length===0&&s.d.length===0}else s=!1}else s=!1
if(!s)throw H.c(P.f("May not remove a vertex without first making it empty."))
b.a=null
C.b.B(this.c,b)
r.X()
return this.b=!0},
ap:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)s[q].cA()
return!0},
cz:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)s[q].cw()
return!0},
hT:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.A()
if(!J.G(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.C(null)}}}}}return!0},
i:function(a){return this.w()},
K:function(a){var s,r,q,p
this.a3()
s=H.a([],t.s)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.p)(r),++p)s.push(r[p].K(a))
return C.b.j(s,"\n")},
w:function(){return this.K("")}}
F.al.prototype={
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
I:function(a,b){var s=this
C.b.I(s.b,b)
C.b.I(s.c,new F.jZ(s,b))
C.b.I(s.d,new F.k_(s,b))},
i:function(a){return this.w()},
w:function(){var s,r,q,p=H.a([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].K(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].K(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].K(""))
return C.b.j(p,"\n")}}
F.jZ.prototype={
$1:function(a){if(!J.G(a.a,this.a))this.b.$1(a)},
$S:9}
F.k_.prototype={
$1:function(a){var s=this.a
if(!J.G(a.a,s)&&!J.G(a.b,s))this.b.$1(a)},
$S:9}
F.aE.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.d(r,s)
return r[s]}else{if(b<0)return H.d(r,b)
return r[b]}},
i:function(a){return this.w()},
w:function(){var s,r,q,p=H.a([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].K(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].K(""))
return C.b.j(p,"\n")}}
F.k1.prototype={}
F.dQ.prototype={
bc:function(a,b,c){return J.G(b.f,c.f)}}
F.k2.prototype={}
F.k0.prototype={
bd:function(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=null
for(s=a8.length,r=a7,q=r,p=q,o=p,n=o,m=n,l=0,k=0,j=0,i=0,h=0,g=0,f=0;f<s;++f){e=a8[f]
d=e.f
if(d!=null){m=m==null?d:new V.I(m.a+d.a,m.b+d.b,m.c+d.c);++l}c=e.r
if(c!=null)n=n==null?c:new V.w(n.a+c.a,n.b+c.b,n.c+c.c)
b=e.x
if(b!=null)o=o==null?b:new V.w(o.a+b.a,o.b+b.b,o.c+b.c)
a=e.y
if(a!=null){q=q==null?a:new V.M(q.a+a.a,q.b+a.b);++j}a0=e.z
if(a0!=null){r=r==null?a0:new V.w(r.a+a0.a,r.b+a0.b,r.c+a0.c);++i}a1=e.Q
if(a1!=null){a2=a1.a
a3=a1.b
a4=a1.c
a5=a1.d
if(p==null){a2=[a2,a3,a4,a5]
p=new V.bs(a2[0],a2[1],a2[2],a2[3])}else{a2=[a2,a3,a4,a5]
a3=a2[0]
a4=a2[1]
a5=a2[2]
a2=a2[3]
p=new V.bs(p.a+a3,p.b+a4,p.c+a5,p.d+a2)}++k}g+=e.ch;++h}a6=F.cs(a7,a7,a7,a7,a7,a7,a7,a7,0)
if(l<=0||m==null)a6.sa_(0,a7)
else a6.sa_(0,m.a2(0,l))
if(n==null)a6.scW(a7)
else a6.scW(n.A())
if(o==null)a6.se_(a7)
else a6.se_(o.A())
if(j<=0||q==null)a6.sd5(a7)
else a6.sd5(q.a2(0,j))
if(i<=0||r==null)a6.say(a7)
else a6.say(r.a2(0,i))
if(k<=0||p==null)a6.saq(0,a7)
else{s=p.a2(0,k)
s=[s.a,s.b,s.c,s.d]
a2=s[0]
a3=s[1]
a4=s[2]
s=s[3]
if(a2<0)a2=0
else if(a2>1)a2=1
if(a3<0)a3=0
else if(a3>1)a3=1
if(a4<0)a4=0
else if(a4>1)a4=1
if(s<0)s=0
else if(s>1)s=1
a6.saq(0,new V.ao(a2,a3,a4,s))}if(h<=0)a6.seM(0,0)
else a6.seM(0,g/h)
return a6}}
F.jd.prototype={
bd:function(a){var s,r,q,p=V.dP()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)p=new V.w(p.a+q.a,p.b+q.b,p.c+q.c)}p=p.A()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.p)(a),++r)a[r].scW(p)
return null}}
F.ba.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.w()},
w:function(){var s,r,q,p=H.a([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].K(""))
return C.b.j(p,"\n")}}
O.db.prototype={
gt:function(){var s=this.fr
return s==null?this.fr=D.K():s},
Y:function(a){var s=this.fr
return s==null?null:s.C(a)},
bm:function(){return this.Y(null)},
dE:function(a){this.a=null
this.Y(a)},
hw:function(){return this.dE(null)},
fC:function(a,b){return this.Y(new D.aZ())},
fE:function(a,b){return this.Y(new D.b_())},
gev:function(){var s=this,r=s.dx
if(r==null){r=new D.d2(H.a([],t.i),H.a([],t.U),H.a([],t.o),H.a([],t.D),H.a([],t.e))
r.de(r.gfz(),r.gha(),r.ghe())
r.gt().n(0,s.gdD())
r.geu().n(0,s.gaJ())
s.dx=r}return r},
gcv:function(){var s=this.r
return s==null?this.r=O.eV(this,"ambient"):s},
gcF:function(){var s=this.x
return s==null?this.x=O.eV(this,"diffuse"):s},
gc2:function(){var s=this.z
return s==null?this.z=new O.iZ(new V.Y(0,0,0),this,"specular",new A.av(!1,!1,!1)):s},
gd1:function(){var s=this.cx
return s==null?this.cx=O.eV(this,"reflect"):s},
ds:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.y,a1=new H.Z(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=H.a([],t.i)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.p)(a2),++r){q=a2[r]
p=q.gaE()
o=a1.h(0,q.gaE())
a1.m(0,p,o==null?1:o)}n=H.a([],t.cn)
a1.I(0,new O.j_(b,n))
C.b.bk(n,new O.j0())
m=new H.Z(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=H.a([],t.U)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.p)(a2),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.a([],t.fD)
m.I(0,new O.j1(b,l))
C.b.bk(l,new O.j2())
k=new H.Z(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=H.a([],t.o)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.p)(a2),++r){q=a2[r]
p=q.gaE()
o=k.h(0,q.gaE())
k.m(0,p,o==null?1:o)}j=H.a([],t.eg)
k.I(0,new O.j3(b,j))
C.b.bk(j,new O.j4())
i=new H.Z(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=H.a([],t.D)
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.p)(a0),++r){q=a0[r]
s=q.gaE()
p=i.h(0,q.gaE())
i.m(0,s,p==null?1:p)}h=H.a([],t.c3)
i.I(0,new O.j5(b,h))
C.b.bk(h,new O.j6())
a0=C.c.a9(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.iX(new V.ao(0,0,0,0))
a2=b.f
a2=(a2==null?b.f=O.eV(b,"emission"):a2).c
s=b.gcv().c
p=b.gcF().c
o=b.y
o=(o==null?b.y=O.eV(b,"invDiffuse"):o).c
g=b.gc2().c
f=b.Q
f=(f==null?b.Q=new O.iV(b,"bump",new A.av(!1,!1,!1)):f).c
e=b.gd1().c
d=b.cy
d=(d==null?b.cy=new O.iY(new V.Y(0,0,0),b,"refract",new A.av(!1,!1,!1)):d).c
c=b.db
return A.oj(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.iU(b,"alpha",new A.av(!1,!1,!1)):c).c,n,l,j,h)},
an:function(a,b){if(b!=null)if(!C.b.E(a,b)){b.a=a.length
a.push(b)}},
az:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.aG(m==null?H.a([],t.e):m)
s=H.X(m).c
for(;m.v();){r=s.a(m.d)
q=$.jY
if(q==null)q=$.jY=new V.w(0,0,1)
r.c=q
p=$.jX
r.d=p==null?$.jX=new V.w(0,1,0):p
p=$.jW
r.e=p==null?$.jW=new V.w(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.bZ(q).A()
r.d=n.bZ(r.d).A()
r.e=n.bZ(r.e).A()}}},
eG:function(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.a
if(a9==null){s=a7.ds()
r=s.bN
a9=t.eI.a(b0.fr.h(0,r))
if(a9==null){q=b0.a
p=t.S
o=t.W
a9=new A.dc(s,H.a([],t.p),P.W(p,o),P.W(p,t.O),P.W(p,o),P.W(p,t.m),P.W(p,o),P.W(p,t.r),P.W(p,o),P.W(p,t.R),q,r)
a9.eZ(s,q)
b0.dT(a9)}a9=a7.a=a9
b1.e=null}n=a9.x
m=n.bO
s=b1.e
if(!(s instanceof Z.c0))s=b1.e=null
if(s==null||!s.d.q(0,m)){s=n.k4
if(s){r=b1.d
if(r!=null)r.ap()}r=n.r1
if(r){q=b1.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gR().cz()
q.gS().cz()
q=q.e
if(q!=null)q.aH(0)}}q=n.rx
if(q){p=b1.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.gS().hT()
p=p.e
if(p!=null)p.aH(0)}}p=b1.d
l=p==null?a8:p.e1(new Z.fU(b0.a),m)
if(l==null)return
p=l.aP($.aU())
if(p!=null){o=a9.y
o=o==null?a8:o.c
p.e=o==null?0:o}if(s){s=l.aP($.bB())
if(s!=null){p=a9.Q
p=p==null?a8:p.c
s.e=p==null?1:p}}if(r){s=l.aP($.bA())
if(s!=null){r=a9.z
r=r==null?a8:r.c
s.e=r==null?2:r}}if(n.r2){s=l.aP($.bV())
if(s!=null){r=a9.ch
r=r==null?a8:r.c
s.e=r==null?3:r}}if(q){s=l.aP($.bC())
if(s!=null){r=a9.cx
r=r==null?a8:r.c
s.e=r==null?4:r}}if(n.ry){s=l.aP($.bz())
if(s!=null){r=a9.cy
r=r==null?a8:r.c
s.e=r==null?5:r}}b1.e=l}k=H.a([],t.ga)
a9.a4(b0)
if(n.fr){s=b0.dx
s=s.ga8(s)
r=a9.db
if(r!=null)r.am(s.ai(0,!0))}if(n.fx){s=b0.cx
if(s==null){s=b0.db
r=b0.dx
r=b0.cx=s.ga8(s).L(0,r.ga8(r))
s=r}r=a9.dx
if(r!=null)r.am(s.ai(0,!0))}s=b0.ch
if(s==null){s=b0.dx
s=b0.ch=b0.giz().L(0,s.ga8(s))}r=a9.fr
if(r!=null)r.am(s.ai(0,!0))
if(n.go){s=b0.db
s=s.ga8(s)
r=a9.dy
if(r!=null)r.am(s.ai(0,!0))}if(n.x1){s=$.me
if(s==null){s=new V.df(1,0,0,0,1,0,0,0,1)
$.me=s}r=a9.go
if(r!=null)r.am(s.ai(0,!0))}if(n.x2){s=V.ar()
r=a9.id
if(r!=null)r.am(s.ai(0,!0))}if(n.y1){s=V.ar()
r=a9.k1
if(r!=null)r.am(s.ai(0,!0))}if(n.ba>0){s=a7.e.a
j=s.length
r=a9.k2
if(r!=null)r.a.uniform1i(r.d,j)
for(i=0;i<j;++i){if(i>=s.length)return H.d(s,i)
r=s[i]
q=a9.k3
if(i>=q.length)return H.d(q,i)
q=q[i]
h=new Float32Array(H.cy(r.ai(0,!0)))
q.a.uniformMatrix4fv(q.d,!1,h)}}s=n.a
if(s.a){r=a7.f
r=r==null?a8:r.f
if(r==null)r=new V.Y(0,0,0)
q=a9.k4
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a7.f
a7.an(k,s==null?a8:s.e)
s=a7.f
s=s==null?a8:s.e
a9.ao(a9.r2,s)}if(n.k1){s=n.b
if(s.a){r=a7.r
r=r==null?a8:r.f
if(r==null)r=new V.Y(0,0,0)
q=a9.rx
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a7.r
a7.an(k,s==null?a8:s.e)
s=a7.r
s=s==null?a8:s.e
a9.ao(a9.x1,s)}s=n.c
if(s.a){r=a7.x
r=r==null?a8:r.f
if(r==null)r=new V.Y(0,0,0)
q=a9.x2
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a7.x
a7.an(k,s==null?a8:s.e)
s=a7.x
s=s==null?a8:s.e
a9.ao(a9.y2,s)}s=n.d
if(s.a){r=a7.y
r=r==null?a8:r.f
if(r==null)r=new V.Y(0,0,0)
q=a9.ba
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a7.y
a7.an(k,s==null?a8:s.e)
s=a7.y
s=s==null?a8:s.e
a9.ao(a9.bO,s)}s=n.e
r=s.a
if(!r)q=s.c
else q=!0
if(q){q=a7.z
q=q==null?a8:q.ch
if(q==null)q=100
p=a9.e9
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a7.z
r=r==null?a8:r.f
if(r==null)r=new V.Y(1,1,1)
q=a9.e7
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a7.z
a7.an(k,s==null?a8:s.e)
s=a7.z
s=s==null?a8:s.e
a9.ao(a9.e8,s)}s=n.z
if(s.length>0){g=new H.Z(t.y)
r=a7.dx
r=r==null?a8:r.e
if(r==null)r=H.a([],t.i)
q=r.length
p=t.d
f=0
for(;f<r.length;r.length===q||(0,H.p)(r),++f){e=r[f]
d=e.gaE()
c=g.h(0,d)
if(c==null)c=0
g.m(0,d,c+1)
o=a9.cH.h(0,d)
if(o==null)o=H.a([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
o=e.giP()
a=$.b6
o=o.bB(a==null?$.b6=new V.I(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.giU()
a=$.b6
o=o.bB(a==null?$.b6=new V.I(0,0,0):a)
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gaq(e)
a=b.d
a.a.uniform3f(a.d,o.a,o.b,o.c)
if(e.ge6()){o=e.gdV()
a=b.e
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdW()
a=b.f
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdX()
a=b.r
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.p)(s),++f){q=s[f].a
j=g.h(0,q)
if(j==null)j=0
q=a9.cG.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.Q
if(s.length>0){r=b0.db
a0=r.ga8(r)
a1=new H.Z(t.y)
r=a7.dx
r=r==null?a8:r.f
if(r==null)r=H.a([],t.U)
q=r.length
p=t.V
f=0
for(;f<r.length;r.length===q||(0,H.p)(r),++f){e=r[f]
c=a1.h(0,0)
if(c==null)c=0
a1.m(0,0,c+1)
o=a9.cJ.h(0,0)
if(o==null)o=H.a([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
o=a0.bZ(e.c).A()
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.b
a=b.f
a.a.uniform3f(a.d,o.a,o.b,o.c)}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.p)(s),++f){q=s[f].a
j=a1.h(0,q)
if(j==null)j=0
q=a9.cI.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.ch
if(s.length>0){r=b0.db
a0=r.ga8(r)
a2=new H.Z(t.y)
r=a7.dx
r=r==null?a8:r.r
if(r==null)r=H.a([],t.o)
q=r.length
p=t.B
f=0
for(;f<r.length;r.length===q||(0,H.p)(r),++f){e=r[f]
d=e.gaE()
c=a2.h(0,d)
if(c==null)c=0
a2.m(0,d,c+1)
o=a9.cL.h(0,d)
if(o==null)o=H.a([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
a3=a0.L(0,e.ga8(e))
o=e.ga8(e)
a=$.b6
o=o.bB(a==null?$.b6=new V.I(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=$.b6
o=a3.bB(o==null?$.b6=new V.I(0,0,0):o)
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gaq(e)
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
e.gaV()
o=a3.cR(0)
a=b.d
if(a!=null){h=new Float32Array(H.cy(new V.df(o.a,o.b,o.c,o.e,o.f,o.r,o.y,o.z,o.Q).ai(0,!0)))
a.a.uniformMatrix3fv(a.d,!1,h)}e.gaV()
o=e.gaV()
if(!C.b.E(k,o)){o.a=k.length
k.push(o)}o=e.gaV()
a=o.gbw(o)
if(a){a=b.f
if(a!=null){a4=o.d
a5=a.a
a=a.d
if(a4<6)a5.uniform1i(a,0)
else a5.uniform1i(a,o.a)}}e.gbj()
o=e.geQ()
a=b.x
if(a!=null)a.a.uniform4f(a.d,o.a,o.b,o.c,o.d)
o=e.gbj()
if(!C.b.E(k,o)){o.a=k.length
k.push(o)}o=e.gbj()
a=o.gbw(o)
if(a){a=b.r
if(a!=null){a4=o.d
a5=a.a
a=a.d
if(a4<6)a5.uniform1i(a,0)
else a5.uniform1i(a,o.a)}}if(e.ge6()){o=e.gdV()
a=b.y
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdW()
a=b.z
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdX()
a=b.Q
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.p)(s),++f){q=s[f].a
j=a2.h(0,q)
if(j==null)j=0
q=a9.cK.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.cx
if(s.length>0){r=b0.db
a0=r.ga8(r)
a6=new H.Z(t.y)
r=a7.dx
r=r==null?a8:r.x
if(r==null)r=H.a([],t.D)
q=r.length
p=t.J
f=0
for(;f<r.length;r.length===q||(0,H.p)(r),++f){e=r[f]
d=e.gaE()
c=a6.h(0,d)
if(c==null)c=0
a6.m(0,d,c+1)
o=a9.cN.h(0,d)
if(o==null)o=H.a([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
o=e.giy(e)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.giS(e).A()
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=a0.bB(e.giy(e))
a=b.d
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gaq(e)
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
e.gaV()
o=e.gd9()
a=b.f
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gd4(e)
a=b.r
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gj2()
a=b.x
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gj3()
a=b.y
if(a!=null)a.a.uniform1f(a.d,o)
e.gaV()
o=e.gaV()
if(!C.b.E(k,o)){o.a=k.length
k.push(o)}o=e.gaV()
a=o.gbw(o)
if(a){a=b.dx
if(a!=null){a4=o.gbw(o)
a5=a.a
a=a.d
if(!a4)a5.uniform1i(a,0)
else a5.uniform1i(a,o.gF(o))}}e.gbj()
o=e.geQ()
a=b.z
if(a!=null)a.a.uniform4f(a.d,o.a,o.b,o.c,o.d)
o=e.gbj()
if(!C.b.E(k,o)){o.a=k.length
k.push(o)}o=e.gbj()
a=o.gbw(o)
if(a){a=b.dy
if(a!=null){a4=o.gbw(o)
a5=a.a
a=a.d
if(!a4)a5.uniform1i(a,0)
else a5.uniform1i(a,o.gF(o))}}if(e.giT()){o=e.giR()
a=b.Q
if(a!=null)a.a.uniform1f(a.d,o)
o=e.giQ()
a=b.ch
if(a!=null)a.a.uniform1f(a.d,o)}if(e.ge6()){o=e.gdV()
a=b.cx
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdW()
a=b.cy
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdX()
a=b.db
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.p)(s),++f){q=s[f].a
j=a6.h(0,q)
if(j==null)j=0
q=a9.cM.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}}if(n.f.c){s=a7.Q
a7.an(k,s==null?a8:s.e)
s=a7.Q
s=s==null?a8:s.e
a9.ao(a9.ea,s)}if(n.dy){s=b0.Q
if(s==null){s=b0.db
s=b0.Q=s.ga8(s).cR(0)}r=a9.fy
if(r!=null)r.am(s.ai(0,!0))}if(n.db){a7.an(k,a7.ch)
s=a7.ch
a9.ao(a9.eb,s)
s=n.r
if(s.a){r=a7.cx
r=r==null?a8:r.f
if(r==null)r=new V.Y(1,1,1)
q=a9.ec
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a7.cx
a7.an(k,s==null?a8:s.e)
s=a7.cx
s=s==null?a8:s.e
a9.ao(a9.ed,s)}s=n.x
r=s.a
if(!r)q=s.c
else q=!0
if(q){q=a7.cy
q=q==null?a8:q.ch
if(q==null)q=0
p=a9.ee
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a7.cy
r=r==null?a8:r.f
if(r==null)r=new V.Y(1,1,1)
q=a9.ef
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a7.cy
a7.an(k,s==null?a8:s.e)
s=a7.cy
s=s==null?a8:s.e
a9.ao(a9.eg,s)}}s=n.y
r=s.a
q=!r
if(q)p=s.c
else p=!0
if(p){if(r){r=a7.db
r=r==null?a8:r.f
if(r==null)r=1
p=a9.eh
if(p!=null)p.a.uniform1f(p.d,r)}if(s.c){r=a7.db
a7.an(k,r==null?a8:r.e)
r=a7.db
r=r==null?a8:r.e
a9.ao(a9.ei,r)}r=b0.a
r.enable(3042)
r.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].a4(b0)
r=t.ed.a(b1.e)
r.a4(b0)
r.ak(b0)
r.aW(b0)
if(q)s=s.c
else s=!0
if(s)b0.a.disable(3042)
for(s=b0.a,i=0;i<k.length;++i){r=k[i]
if(r.c){r.c=!1
s.activeTexture(33984+r.a)
s.bindTexture(34067,a8)}}s.useProgram(a8)
a9.gah(a9).e4()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.ds().bN}}
O.j_.prototype={
$2:function(a,b){return this.b.push(new A.bf(a,C.c.a9(b+3,4)*4))},
$S:7}
O.j0.prototype={
$2:function(a,b){return C.c.ar(a.a,b.a)},
$S:52}
O.j1.prototype={
$2:function(a,b){return this.b.push(new A.bh(a,C.c.a9(b+3,4)*4))},
$S:7}
O.j2.prototype={
$2:function(a,b){return C.c.ar(a.a,b.a)},
$S:53}
O.j3.prototype={
$2:function(a,b){return this.b.push(new A.bo(a,C.c.a9(b+3,4)*4))},
$S:7}
O.j4.prototype={
$2:function(a,b){return C.c.ar(a.a,b.a)},
$S:54}
O.j5.prototype={
$2:function(a,b){return this.b.push(new A.bq(a,C.c.a9(b+3,4)*4))},
$S:7}
O.j6.prototype={
$2:function(a,b){return C.c.ar(a.a,b.a)},
$S:55}
O.iU.prototype={
aM:function(){var s,r=this
r.dh()
s=r.f
$.F().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.Y(new D.E(r.b,s,1))}}}
O.dd.prototype={
Y:function(a){return this.a.Y(a)},
bm:function(){return this.Y(null)},
aM:function(){},
cq:function(a){var s,r,q=this
if(!q.c.q(0,a)){s=q.c
if(!s.a)s=s.c
else s=!0
if(s){if(!a.a)s=a.c
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.aM()
s=q.a
s.a=null
s.Y(null)}},
say:function(a){var s,r=this,q=r.c
if(!q.c)r.cq(new A.av(q.a,!1,!0))
q=r.e
if(q!==a){if(q!=null)q.gt().B(0,r.gaJ())
s=r.e
r.e=a
a.gt().n(0,r.gaJ())
r.a.Y(new D.E(r.b+".textureCube",s,r.e))}}}
O.iV.prototype={}
O.de.prototype={
dG:function(a){var s,r=this
if(!r.f.q(0,a)){s=r.f
r.f=a
r.a.Y(new D.E(r.b+".color",s,a))}},
aM:function(){this.dh()
this.dG(new V.Y(1,1,1))},
saq:function(a,b){this.cq(new A.av(!0,!1,this.c.c))
this.dG(b)}}
O.iX.prototype={}
O.iY.prototype={
aM:function(){var s,r=this
r.di()
s=r.ch
$.F().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.Y(new D.E(r.b+".refraction",s,1))}}}
O.iZ.prototype={
dH:function(a){var s=this,r=s.ch
$.F().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.Y(new D.E(s.b+".shininess",r,a))}},
aM:function(){this.di()
this.dH(100)}}
O.du.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.K():s},
Y:function(a){var s=this.e
return s==null?null:s.C(a)},
bm:function(){return this.Y(null)},
eG:function(a,b){var s,r,q,p,o,n,m=this,l=null
if(m.a==null){s=t.dm.a(a.fr.h(0,"Skybox"))
if(s==null){s=new A.dv(a.a,"Skybox")
s.ep(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.x=s.gah(s).h(0,"posAttr")
r=t.v
s.y=r.a(s.gG().h(0,"fov"))
s.z=r.a(s.gG().h(0,"ratio"))
s.Q=t.g.a(s.gG().h(0,"boxClr"))
s.ch=t.a.a(s.gG().h(0,"boxTxt"))
s.cx=t.j.a(s.gG().h(0,"viewMat"))
a.dT(s)}m.a=s}if(b.e==null){r=b.d
r=r==null?l:r.e1(new Z.fU(a.a),$.aU())
if(r==null)r=l
else{q=r.aP($.aU())
if(q!=null){p=m.a
if(p==null)p=l
else{p=p.x
p=p==null?l:p.c}q.e=p==null?0:p}}b.e=r}o=m.c
if(o==null)return
o.a=1
o.a4(a)
r=a.d
q=a.c
p=m.a
if(p!=null){p.a4(a)
n=p.y
if(n!=null)n.a.uniform1f(n.d,1.0471975511965976)
n=p.z
if(n!=null)n.a.uniform1f(n.d,r/q)
r=p.ch
if(r!=null)r.df(o)
r=m.d
q=p.Q
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)
r=a.db
r=r.ga8(r).cR(0)
p=p.cx
if(p!=null)p.am(r.ai(0,!0))}r=b.e
if(r instanceof Z.c0){r.a4(a)
r.ak(a)
r.aW(a)}else b.e=null
r=m.a
if(r!=null){a.a.useProgram(l)
r.gah(r).e4()}o.aW(a)}}
O.ck.prototype={}
T.dy.prototype={}
T.fz.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.K():s},
a4:function(a){var s,r=this
if(!r.c&&r.d>=6){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(34067,r.b)}},
aW:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(34067,null)}}}
T.jx.prototype={
ex:function(a,b){var s,r=this,q=34067,p=a+"/posx"+b,o=a+"/posy"+b,n=a+"/posz"+b,m=a+"/negx"+b,l=a+"/negy"+b,k=a+"/negz"+b,j=r.a,i=j.createTexture()
i.toString
j.bindTexture(q,i)
j.texParameteri(q,10242,10497)
j.texParameteri(q,10243,10497)
j.texParameteri(q,10241,9729)
j.texParameteri(q,10240,9729)
j.bindTexture(q,null)
s=new T.fz(i)
r.b5(s,i,p,34069,!1,!1)
r.b5(s,i,m,34070,!1,!1)
r.b5(s,i,o,34071,!1,!1)
r.b5(s,i,l,34072,!1,!1)
r.b5(s,i,n,34073,!1,!1)
r.b5(s,i,k,34074,!1,!1)
return s},
ew:function(a){return this.ex(a,".png")},
b5:function(a,b,c,d,e,f){var s=document.createElement("img")
s.src=c;++this.d
W.a5(s,"load",new T.jy(this,s,!1,b,!1,d,a),!1)},
hx:function(a,b,c){var s,r,q,p,o,n
b=V.lV(b)
s=a.width
r=V.lV(s==null?512:s)
s=a.height
q=V.lV(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.li()
p.width=r
p.height=q
o=t.ar.a(C.i.eO(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.qo(o.getImageData(0,0,s,n==null?512:n))}}}
T.jy.prototype={
$1:function(a){var s=this,r=s.a,q=r.hx(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,0)
C.a3.iI(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.i3()}++r.e},
$S:3}
X.iE.prototype={
gt:function(){var s=this.x
return s==null?this.x=D.K():s},
aB:function(a){var s=this.x
return s==null?null:s.C(a)},
a4:function(a){var s,r,q,p,o,n,m,l=a.a
l.bindFramebuffer(36160,null)
l.enable(2884)
l.enable(2929)
l.depthFunc(513)
s=l.drawingBufferWidth
if(s==null)s=512
r=l.drawingBufferHeight
if(r==null)r=512
q=this.r
p=C.d.ax(q.a*s)
o=C.d.ax(q.b*r)
n=C.d.ax(q.c*s)
a.c=n
q=C.d.ax(q.d*r)
a.d=q
l.viewport(p,o,n,q)
l.clearDepth(2000)
if(this.b){q=this.a
l.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
if(m>0)l.clear(m)}}
X.iI.prototype={
gt:function(){var s=this.b
return s==null?this.b=D.K():s},
a4:function(a){var s
a.cy.bW(V.ar())
s=V.ar()
a.db.bW(s)},
aW:function(a){a.cy.aT()
a.db.aT()}}
X.f7.prototype={
gt:function(){var s=this.f
return s==null?this.f=D.K():s},
aB:function(a){var s=this.f
return s==null?null:s.C(a)},
fI:function(){return this.aB(null)},
a4:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.b4(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.bW(i)
s=$.ns()
r=q.b
if(r!=null)s=r.bg(0,a,q).L(0,s)
a.db.bW(s)},
aW:function(a){a.cy.aT()
a.db.aT()}}
X.jw.prototype={}
V.aJ.prototype={
bD:function(a){this.b=new P.iG(C.S)
this.c=null
this.d=H.a([],t.F)},
P:function(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.d
if(j.length===0)j.push(H.a([],t.C))
s=a.split("\n")
for(j=s.length,r=t.C,q=!0,p=0;p<j;++p){o=s[p]
if(q)q=!1
else k.d.push(H.a([],r))
n=document.createElement("div")
n.className="codePart"
m=k.b.fh(o,0,o.length)
l=m==null?o:m
l=H.lX(l," ","&nbsp;")
C.Q.eP(n,l)
l=n.style
l.color=b
C.b.gaF(k.d).push(n)}},
eE:function(a,b){var s,r,q,p=this
p.d=H.a([],t.F)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bM()
if(r!=null)for(q=new H.r(s),q=new P.bS(r.d8(new H.bm(q,q.gl(q))).a());q.v();)p.bV(q.gD(q))}}
V.lb.prototype={
$1:function(a){var s=C.d.d7(this.a.gig(),2)
if(s!=="0.00")P.lW(s+" fps")},
$S:56}
V.eB.prototype={
bV:function(a){var s=this
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
bM:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()\\-+*%!&|=.,?:;",h="OpenDoubleStr",g="CloseDoubleStr",f="EscDoubleStr",e="OpenSingleStr",d="CloseSingleStr",c="EscSingleStr",b="Slash",a="Comment",a0="EndComment",a1="MLComment",a2="MLCStar",a3="Whitespace",a4=L.jD()
a4.d=a4.k(0,o)
s=a4.k(0,o).j(0,n)
r=t.t
q=new K.u(H.a([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.S("a","z"))
s.push(K.S("A","Z"))
s=a4.k(0,n).j(0,n)
q=new K.u(H.a([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.S("0","9"))
s.push(K.S("a","z"))
s.push(K.S("A","Z"))
a4.k(0,o).j(0,m).a.push(K.S("0","9"))
a4.k(0,m).j(0,m).a.push(K.S("0","9"))
s=a4.k(0,m).j(0,l)
q=new K.u(H.a([],r))
q.p(new H.r("."))
s.a.push(q)
a4.k(0,l).j(0,k).a.push(K.S("0","9"))
a4.k(0,k).j(0,k).a.push(K.S("0","9"))
q=a4.k(0,o).j(0,j)
s=new K.u(H.a([],r))
s.p(new H.r(i))
q.a.push(s)
s=a4.k(0,j).j(0,j)
q=new K.u(H.a([],r))
q.p(new H.r(i))
s.a.push(q)
q=a4.k(0,o).j(0,h)
s=new K.u(H.a([],r))
s.p(new H.r('"'))
q.a.push(s)
s=a4.k(0,h).j(0,g)
q=new K.u(H.a([],r))
q.p(new H.r('"'))
s.a.push(q)
q=a4.k(0,h).j(0,f)
s=new K.u(H.a([],r))
s.p(new H.r("\\"))
q.a.push(s)
s=a4.k(0,f).j(0,h)
q=new K.u(H.a([],r))
q.p(new H.r('"'))
s.a.push(q)
a4.k(0,h).j(0,h).a.push(new K.aW())
q=a4.k(0,o).j(0,e)
s=new K.u(H.a([],r))
s.p(new H.r("'"))
q.a.push(s)
s=a4.k(0,e).j(0,d)
q=new K.u(H.a([],r))
q.p(new H.r("'"))
s.a.push(q)
q=a4.k(0,e).j(0,c)
s=new K.u(H.a([],r))
s.p(new H.r("\\"))
q.a.push(s)
s=a4.k(0,c).j(0,e)
q=new K.u(H.a([],r))
q.p(new H.r("'"))
s.a.push(q)
a4.k(0,e).j(0,e).a.push(new K.aW())
q=a4.k(0,o).j(0,b)
s=new K.u(H.a([],r))
s.p(new H.r("/"))
q.a.push(s)
s=a4.k(0,b).j(0,a)
q=new K.u(H.a([],r))
q.p(new H.r("/"))
s.a.push(q)
q=a4.k(0,a).j(0,a0)
s=new K.u(H.a([],r))
s.p(new H.r("\n"))
q.a.push(s)
s=a4.k(0,a).j(0,a)
q=t.z
p=H.a([],q)
s.a.push(new K.af(p))
s=new K.u(H.a([],r))
s.p(new H.r("\n"))
p.push(s)
s=a4.k(0,b).j(0,a1)
p=new K.u(H.a([],r))
p.p(new H.r("*"))
s.a.push(p)
p=a4.k(0,a1).j(0,a2)
s=new K.u(H.a([],r))
s.p(new H.r("*"))
p.a.push(s)
s=a4.k(0,a2).j(0,a1)
q=H.a([],q)
s.a.push(new K.af(q))
s=new K.u(H.a([],r))
s.p(new H.r("*"))
q.push(s)
s=a4.k(0,a2).j(0,a0)
q=new K.u(H.a([],r))
q.p(new H.r("/"))
s.a.push(q)
q=a4.k(0,o).j(0,a3)
s=new K.u(H.a([],r))
s.p(new H.r(" \n\t"))
q.a.push(s)
s=a4.k(0,a3).j(0,a3)
r=new K.u(H.a([],r))
r.p(new H.r(" \n\t"))
s.a.push(r)
r=a4.k(0,m)
r.d=r.a.T("Num")
r=a4.k(0,k)
r.d=r.a.T("Num")
r=a4.k(0,j)
r.d=r.a.T("Symbol")
r=a4.k(0,g)
r.d=r.a.T("String")
r=a4.k(0,d)
r.d=r.a.T("String")
r=a4.k(0,a0)
r.d=r.a.T(a)
r=a4.k(0,a3)
r.d=r.a.T(a3)
r=a4.k(0,n)
r=r.d=r.a.T(n)
s=t.s
r.aU(0,"Class",H.a(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aU(0,"Type",H.a(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aU(0,"Reserved",H.a(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a4}}
V.eH.prototype={
bV:function(a){var s=this
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
bM:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()[]\\-+*%!&|=.,?:;",h="Slash",g="Comment",f="EndComment",e="Preprocess",d="EndPreprocess",c="Whitespace",b=L.jD()
b.d=b.k(0,o)
s=b.k(0,o).j(0,n)
r=t.t
q=new K.u(H.a([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.S("a","z"))
s.push(K.S("A","Z"))
s=b.k(0,n).j(0,n)
q=new K.u(H.a([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.S("0","9"))
s.push(K.S("a","z"))
s.push(K.S("A","Z"))
b.k(0,o).j(0,m).a.push(K.S("0","9"))
b.k(0,m).j(0,m).a.push(K.S("0","9"))
s=b.k(0,m).j(0,l)
q=new K.u(H.a([],r))
q.p(new H.r("."))
s.a.push(q)
b.k(0,l).j(0,k).a.push(K.S("0","9"))
b.k(0,k).j(0,k).a.push(K.S("0","9"))
q=b.k(0,o).j(0,j)
s=new K.u(H.a([],r))
s.p(new H.r(i))
q.a.push(s)
s=b.k(0,j).j(0,j)
q=new K.u(H.a([],r))
q.p(new H.r(i))
s.a.push(q)
q=b.k(0,o).j(0,h)
s=new K.u(H.a([],r))
s.p(new H.r("/"))
q.a.push(s)
s=b.k(0,h).j(0,g)
q=new K.u(H.a([],r))
q.p(new H.r("/"))
s.a.push(q)
b.k(0,h).j(0,j).a.push(new K.aW())
q=b.k(0,g).j(0,f)
s=new K.u(H.a([],r))
s.p(new H.r("\n"))
q.a.push(s)
s=b.k(0,g).j(0,g)
q=t.z
p=H.a([],q)
s.a.push(new K.af(p))
s=new K.u(H.a([],r))
s.p(new H.r("\n"))
p.push(s)
s=b.k(0,o).j(0,e)
p=new K.u(H.a([],r))
p.p(new H.r("#"))
s.a.push(p)
p=b.k(0,e).j(0,e)
q=H.a([],q)
p.a.push(new K.af(q))
p=new K.u(H.a([],r))
p.p(new H.r("\n"))
q.push(p)
p=b.k(0,e).j(0,d)
q=new K.u(H.a([],r))
q.p(new H.r("\n"))
p.a.push(q)
q=b.k(0,o).j(0,c)
p=new K.u(H.a([],r))
p.p(new H.r(" \n\t"))
q.a.push(p)
p=b.k(0,c).j(0,c)
r=new K.u(H.a([],r))
r.p(new H.r(" \n\t"))
p.a.push(r)
r=b.k(0,m)
r.d=r.a.T("Num")
r=b.k(0,k)
r.d=r.a.T("Num")
r=b.k(0,j)
r.d=r.a.T("Symbol")
r=b.k(0,f)
r.d=r.a.T(g)
r=b.k(0,d)
r.d=r.a.T(e)
r=b.k(0,c)
r.d=r.a.T(c)
r=b.k(0,n)
r=r.d=r.a.T(n)
p=t.s
r.aU(0,"Type",H.a(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],p))
r.aU(0,"Reserved",H.a(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],p))
r.aU(0,"Builtin",H.a(["gl_FragColor","gl_Position"],p))
return b}}
V.eI.prototype={
bV:function(a){var s=this,r="#111"
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
bM:function(){var s,r,q,p="Start",o="Id",n="Attr",m="Sym",l="OpenStr",k="CloseStr",j="Other",i=L.jD()
i.d=i.k(0,p)
s=i.k(0,p).j(0,o)
r=t.t
q=new K.u(H.a([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.S("a","z"))
s.push(K.S("A","Z"))
s=i.k(0,o).j(0,o)
q=new K.u(H.a([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.S("0","9"))
s.push(K.S("a","z"))
s.push(K.S("A","Z"))
s=i.k(0,o).j(0,n)
q=new K.u(H.a([],r))
q.p(new H.r("="))
s.a.push(q)
s.c=!0
s=i.k(0,p).j(0,m)
q=new K.u(H.a([],r))
q.p(new H.r("</\\-!>="))
s.a.push(q)
q=i.k(0,m).j(0,m)
s=new K.u(H.a([],r))
s.p(new H.r("</\\-!>="))
q.a.push(s)
s=i.k(0,p).j(0,l)
q=new K.u(H.a([],r))
q.p(new H.r('"'))
s.a.push(q)
q=i.k(0,l).j(0,k)
s=new K.u(H.a([],r))
s.p(new H.r('"'))
q.a.push(s)
s=i.k(0,l).j(0,"EscStr")
q=new K.u(H.a([],r))
q.p(new H.r("\\"))
s.a.push(q)
q=i.k(0,"EscStr").j(0,l)
s=new K.u(H.a([],r))
s.p(new H.r('"'))
q.a.push(s)
i.k(0,l).j(0,l).a.push(new K.aW())
i.k(0,p).j(0,j).a.push(new K.aW())
s=i.k(0,j).j(0,j)
q=H.a([],t.z)
s.a.push(new K.af(q))
r=new K.u(H.a([],r))
r.p(new H.r('</\\-!>=_"'))
q.push(r)
q.push(K.S("a","z"))
q.push(K.S("A","Z"))
q=i.k(0,m)
q.d=q.a.T("Symbol")
q=i.k(0,k)
q.d=q.a.T("String")
q=i.k(0,o)
r=q.a.T(o)
q.d=r
r.aU(0,"Reserved",H.a(["DOCTYPE","html","head","meta","link","title","body","script"],t.s))
r=i.k(0,n)
r.d=r.a.T(n)
r=i.k(0,j)
r.d=r.a.T(j)
return i}}
V.f9.prototype={
eE:function(a,b){this.d=H.a([],t.F)
this.P(C.b.j(b,"\n"),"#111")},
bV:function(a){},
bM:function(){return null}}
V.jg.prototype={
bI:function(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=l.a,j=P.my().gd0().h(0,k)
if(j==null)if(d){c.$0()
l.dN(b)
s=!0}else s=!1
else if(j===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
p=l.c
o=J.aT(p)
o.gbL(p).n(0,q)
n=W.o7("radio")
n.checked=s
n.name=k
W.a5(n,"change",new V.jh(l,n,c,b),!1)
q.children.toString
q.appendChild(n).toString
m=r.createElement("span")
m.textContent=b
q.appendChild(m).toString
p=o.gbL(p)
r=r.createElement("br")
r.toString
p.n(0,r)},
aC:function(a,b,c){return this.bI(a,b,c,!1)},
dN:function(a){var s,r,q=P.my(),p=t.N,o=P.og(q.gd0(),p,p)
o.m(0,this.a,a)
s=q.eH(0,o)
p=window.history
p.toString
r=s.gct()
p.replaceState(new P.kk([],[]).c_(""),"",r)}}
V.jh.prototype={
$1:function(a){var s=this,r=s.b.checked
if(r===!0){s.c.$0()
s.a.dN(s.d)}},
$S:3}
V.jp.prototype={
dS:function(a){var s,r,q,p,o,n,m=this.hB(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.r(C.b.ij(a)),s=new P.bS(m.d8(new H.bm(s,s.gl(s))).a());s.v();){r=s.gD(s)
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
if(H.nn(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.ks(C.w,r,C.e,!1)
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
eN:function(a){var s,r,q,p=t.F,o=new V.eB("dart",H.a([],p))
o.bD("dart")
s=new V.eH("glsl",H.a([],p))
s.bD("glsl")
r=new V.eI("html",H.a([],p))
r.bD("html")
q=C.b.ia(H.a([o,s,r],t.g6),new V.js(a))
if(q!=null)return q
p=new V.f9("plain",H.a([],p))
p.bD("plain")
return p},
dP:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.a([],t.t)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(C.a.a6(q,"+")){b2[r]=C.a.aj(q,1)
a8.push(1)
s=!0}else if(C.a.a6(q,"-")){b2[r]=C.a.aj(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.eN(b0)
p.eE(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m).toString
this.a.appendChild(n).toString
l=P.ks(C.w,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.m1()
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
for(e=q.length,a1=0;a1<q.length;q.length===e||(0,H.p)(q),++a1)a0.appendChild(q[a1]).toString
d.appendChild(c).toString
d.appendChild(b).toString
d.appendChild(a0).toString
m.appendChild(d).toString}else for(e=p.d,a2=e.length,a3=b1,a1=0;a1<e.length;e.length===a2||(0,H.p)(e),++a1){q=e[a1]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className=a6;++a3
c.textContent=""+a3
b=o.createElement("td")
b.className=a7
for(a4=C.b.gU(q);a4.v();)b.appendChild(a4.gD(a4)).toString
d.appendChild(c).toString
d.appendChild(b).toString
m.appendChild(d).toString}},
hM:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
hB:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other",f=this.b
if(f!=null)return f
f=L.jD()
f.d=f.k(0,o)
s=f.k(0,o).j(0,n)
r=t.t
q=new K.u(H.a([],r))
q.p(new H.r("*"))
s.a.push(q)
s.c=!0
s=f.k(0,n).j(0,n)
q=t.z
p=H.a([],q)
s.a.push(new K.af(p))
s=new K.u(H.a([],r))
s.p(new H.r("*"))
p.push(s)
s=f.k(0,n).j(0,"BoldEnd")
p=new K.u(H.a([],r))
p.p(new H.r("*"))
s.a.push(p)
s.c=!0
s=f.k(0,o).j(0,m)
p=new K.u(H.a([],r))
p.p(new H.r("_"))
s.a.push(p)
s.c=!0
s=f.k(0,m).j(0,m)
p=H.a([],q)
s.a.push(new K.af(p))
s=new K.u(H.a([],r))
s.p(new H.r("_"))
p.push(s)
s=f.k(0,m).j(0,l)
p=new K.u(H.a([],r))
p.p(new H.r("_"))
s.a.push(p)
s.c=!0
s=f.k(0,o).j(0,k)
p=new K.u(H.a([],r))
p.p(new H.r("`"))
s.a.push(p)
s.c=!0
s=f.k(0,k).j(0,k)
p=H.a([],q)
s.a.push(new K.af(p))
s=new K.u(H.a([],r))
s.p(new H.r("`"))
p.push(s)
s=f.k(0,k).j(0,"CodeEnd")
p=new K.u(H.a([],r))
p.p(new H.r("`"))
s.a.push(p)
s.c=!0
s=f.k(0,o).j(0,j)
p=new K.u(H.a([],r))
p.p(new H.r("["))
s.a.push(p)
s.c=!0
s=f.k(0,j).j(0,i)
p=new K.u(H.a([],r))
p.p(new H.r("|"))
s.a.push(p)
p=f.k(0,j).j(0,h)
s=new K.u(H.a([],r))
s.p(new H.r("]"))
p.a.push(s)
p.c=!0
p=f.k(0,j).j(0,j)
s=H.a([],q)
p.a.push(new K.af(s))
p=new K.u(H.a([],r))
p.p(new H.r("|]"))
s.push(p)
p=f.k(0,i).j(0,h)
s=new K.u(H.a([],r))
s.p(new H.r("]"))
p.a.push(s)
p.c=!0
p=f.k(0,i).j(0,i)
s=H.a([],q)
p.a.push(new K.af(s))
p=new K.u(H.a([],r))
p.p(new H.r("|]"))
s.push(p)
f.k(0,o).j(0,g).a.push(new K.aW())
p=f.k(0,g).j(0,g)
q=H.a([],q)
p.a.push(new K.af(q))
r=new K.u(H.a([],r))
r.p(new H.r("*_`["))
q.push(r)
r=f.k(0,"BoldEnd")
r.d=r.a.T(n)
r=f.k(0,l)
r.d=r.a.T(m)
r=f.k(0,"CodeEnd")
r.d=r.a.T(k)
r=f.k(0,h)
r.d=r.a.T("Link")
r=f.k(0,g)
r.d=r.a.T(g)
return this.b=f}}
V.jr.prototype={
$1:function(a){P.mu(C.m,new V.jq(this.a))},
$S:3}
V.jq.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.ax(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.z(-0.01*s)+"px"
q.top=r},
$S:1}
V.js.prototype={
$1:function(a){var s=a==null?null:a.a
return s===this.a},
$S:57}
T.l0.prototype={
$0:function(){this.a.sae(0,F.lQ(1,null,null,1))},
$S:1}
T.l1.prototype={
$0:function(){this.a.sae(0,F.lQ(8,null,null,8))},
$S:1}
T.l2.prototype={
$0:function(){this.a.sae(0,F.na(!0,40,1))},
$S:1}
T.l3.prototype={
$0:function(){this.a.sae(0,F.na(!1,40,0))},
$S:1}
T.l4.prototype={
$0:function(){this.a.sae(0,F.qD(10,20))},
$S:1}
T.l5.prototype={
$0:function(){var s=F.fj(),r=Math.sqrt(5)/2+0.5,q=F.ah(s,new V.w(-1,r,0)),p=F.ah(s,new V.w(1,r,0)),o=-r,n=F.ah(s,new V.w(-1,o,0)),m=F.ah(s,new V.w(1,o,0)),l=F.ah(s,new V.w(0,-1,o)),k=F.ah(s,new V.w(0,1,o)),j=F.ah(s,new V.w(0,-1,r)),i=F.ah(s,new V.w(0,1,r)),h=F.ah(s,new V.w(r,0,1)),g=F.ah(s,new V.w(r,0,-1)),f=F.ah(s,new V.w(o,0,1)),e=F.ah(s,new V.w(o,0,-1))
F.U(s,q,e,k,2)
F.U(s,q,k,p,2)
F.U(s,q,p,i,2)
F.U(s,q,i,f,2)
F.U(s,q,f,e,2)
F.U(s,p,k,g,2)
F.U(s,k,e,l,2)
F.U(s,e,f,n,2)
F.U(s,f,i,j,2)
F.U(s,i,p,h,2)
F.U(s,m,g,l,2)
F.U(s,m,l,n,2)
F.U(s,m,n,j,2)
F.U(s,m,j,h,2)
F.U(s,m,h,g,2)
F.U(s,l,g,k,2)
F.U(s,n,l,e,2)
F.U(s,j,n,f,2)
F.U(s,h,j,i,2)
F.U(s,g,h,p,2)
s.ey(new F.dQ(),new F.k0())
this.a.sae(0,s)},
$S:1}
T.l6.prototype={
$0:function(){this.a.sae(0,F.nm(6,6))},
$S:1}
T.l7.prototype={
$0:function(){this.a.sae(0,F.qN())},
$S:1}
T.l8.prototype={
$0:function(){this.a.sae(0,F.qC())},
$S:1}
T.l9.prototype={
$1:function(a){var s,r=this.a,q=this.b,p=q.a
p=p==null?null:p.c
s=t.s
r.dP("Vertex Shader","glsl",0,H.a((p==null?"":p).split("\n"),s))
q=q.a
q=q==null?null:q.d
r.dP("Fragment Shader","glsl",0,H.a((q==null?"":q).split("\n"),s))},
$S:2};(function aliases(){var s=J.b.prototype
s.eT=s.i
s=J.bl.prototype
s.eV=s.i
s=P.i.prototype
s.eU=s.c0
s=W.D.prototype
s.c3=s.as
s=W.e2.prototype
s.eW=s.aD
s=K.cY.prototype
s.eS=s.aR
s.c4=s.i
s=O.dd.prototype
s.dh=s.aM
s=O.de.prototype
s.di=s.aM})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"pE","oc",58)
r(P,"qi","oQ",13)
r(P,"qj","oR",13)
r(P,"qk","oS",13)
q(P,"n8","qd",1)
r(W,"rV","it",60)
p(W,"qv",4,null,["$4"],["oT"],22,0)
p(W,"qw",4,null,["$4"],["oU"],22,0)
var j
o(j=E.bI.prototype,"geC",0,0,null,["$1","$0"],["eD","is"],0,0)
o(j,"geA",0,0,null,["$1","$0"],["eB","ip"],0,0)
n(j,"gim","io",8)
n(j,"giq","ir",8)
o(j=E.fA.prototype,"gdk",0,0,null,["$1","$0"],["dm","dl"],0,0)
m(j,"giE","eI",1)
l(j=X.fR.prototype,"gfT","fU",3)
l(j,"gfF","fG",3)
l(j,"gfN","fO",4)
l(j,"gfX","fY",29)
l(j,"gfV","fW",29)
l(j,"gh0","h1",4)
l(j,"gh4","h5",4)
l(j,"gfR","fS",4)
l(j,"gh2","h3",4)
l(j,"gfP","fQ",4)
l(j,"gh6","h7",36)
l(j,"gh8","h9",3)
l(j,"gho","hp",11)
l(j,"ghk","hl",11)
l(j,"ghm","hn",11)
o(D.c1.prototype,"gf2",0,0,null,["$1","$0"],["aI","f3"],0,0)
o(j=D.d2.prototype,"gdA",0,0,null,["$1","$0"],["dB","fZ"],0,0)
l(j,"gha","hb",38)
n(j,"gfz","fA",25)
n(j,"ghe","hf",25)
k(V.a7.prototype,"gl","bv",15)
k(V.w.prototype,"gl","bv",15)
k(V.bs.prototype,"gl","bv",15)
o(j=U.c4.prototype,"gb1",0,0,null,["$1","$0"],["W","ag"],0,0)
n(j,"gfv","fw",21)
n(j,"ghc","hd",21)
o(j=U.dL.prototype,"gb1",0,0,null,["$1","$0"],["W","ag"],0,0)
l(j,"gce","cf",10)
l(j,"gcg","ci",10)
l(j,"gcj","ck",10)
o(j=U.dM.prototype,"gb1",0,0,null,["$1","$0"],["W","ag"],0,0)
l(j,"gce","cf",2)
l(j,"gcg","ci",2)
l(j,"gcj","ck",2)
l(j,"gfn","fo",2)
l(j,"gfp","fq",2)
l(j,"ghI","hJ",2)
l(j,"ghG","hH",2)
l(j,"ghE","hF",2)
l(U.dN.prototype,"gft","fu",2)
o(j=M.cK.prototype,"ga0",0,0,null,["$1","$0"],["a1","bl"],0,0)
n(j,"ghg","hh",20)
n(j,"ghi","hj",20)
o(M.cO.prototype,"ga0",0,0,null,["$1","$0"],["a1","bl"],0,0)
o(j=M.cU.prototype,"ga0",0,0,null,["$1","$0"],["a1","bl"],0,0)
n(j,"gfJ","fK",8)
n(j,"gfL","fM",8)
o(j=O.db.prototype,"gaJ",0,0,null,["$1","$0"],["Y","bm"],0,0)
o(j,"gdD",0,0,null,["$1","$0"],["dE","hw"],0,0)
n(j,"gfB","fC",19)
n(j,"gfD","fE",19)
o(O.dd.prototype,"gaJ",0,0,null,["$1","$0"],["Y","bm"],0,0)
o(O.du.prototype,"gaJ",0,0,null,["$1","$0"],["Y","bm"],0,0)
o(X.f7.prototype,"gfH",0,0,null,["$1","$0"],["aB","fI"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.R,null)
q(P.R,[H.lq,J.b,J.ai,P.N,P.dW,P.i,H.bm,P.eK,H.cV,H.fO,H.cM,H.jG,H.je,H.hA,H.bG,P.O,H.iO,H.eS,H.eN,H.aA,H.hc,P.e8,P.cw,P.bS,P.fW,P.cj,P.fr,P.kw,P.ef,P.kc,P.dV,P.j,P.hP,P.d9,P.dr,P.ex,P.iH,P.ku,P.kt,P.a_,P.bH,P.f6,P.dw,P.h9,P.iD,P.aj,P.a0,P.bT,P.jL,P.hu,W.ij,W.ll,W.lA,W.cv,W.P,W.dl,W.e2,W.hF,W.cW,W.kg,W.hQ,P.kj,P.ea,P.hs,K.aW,K.cY,K.fd,K.u,L.fo,L.fB,L.fC,L.jC,O.ae,O.dg,E.ib,E.bI,E.bZ,E.cd,E.h7,E.ji,E.fA,Z.fT,Z.fU,Z.c0,Z.c6,Z.bt,D.id,D.c2,D.V,X.cI,X.eP,X.iM,X.iS,X.aa,X.ja,X.jE,X.fR,D.c1,V.Y,V.ao,V.iw,V.df,V.bn,V.M,V.I,V.ay,V.ff,V.a7,V.w,V.bs,U.dL,U.dM,U.dN,M.cO,M.cU,A.eu,A.i6,A.av,A.bf,A.bh,A.bo,A.bq,A.iW,A.dE,A.dF,A.dH,A.dK,A.a3,A.jJ,F.ap,F.iA,F.eR,F.iN,F.fb,F.jn,F.ds,F.dt,F.bO,F.cr,F.y,F.al,F.aE,F.k1,F.k2,F.ba,O.ck,O.dd,O.iX,T.jx,X.jw,X.iI,X.f7,V.aJ,V.jg,V.jp])
q(J.b,[J.eL,J.d0,J.bl,J.x,J.c8,J.bk,H.dh,H.a2,W.e,W.i4,W.bD,W.cJ,W.aY,W.L,W.h0,W.aw,W.im,W.io,W.h2,W.cR,W.h4,W.ip,W.l,W.ha,W.aL,W.iF,W.he,W.bK,W.iR,W.j7,W.hi,W.hj,W.aM,W.hk,W.hm,W.aO,W.hq,W.ht,W.aQ,W.hv,W.aR,W.hB,W.at,W.hH,W.jA,W.aD,W.hJ,W.jF,W.jQ,W.hR,W.hT,W.hV,W.hX,W.hZ,P.b1,P.hg,P.b5,P.ho,P.jf,P.hC,P.b7,P.hL,P.i7,P.fY,P.cf,P.hy])
q(J.bl,[J.f8,J.bQ,J.b0])
r(J.iK,J.x)
q(J.c8,[J.d_,J.eM])
q(P.N,[H.d1,P.fF,H.eO,H.fN,H.fh,H.h8,P.et,P.f3,P.aH,P.fP,P.fM,P.ci,P.ey,P.eA])
r(P.d5,P.dW)
q(P.d5,[H.cp,W.fZ,W.a8,P.eF])
r(H.r,H.cp)
q(P.i,[H.n,H.b2,H.bb,P.cZ])
q(H.n,[H.d6,H.d3])
r(H.cS,H.b2)
q(P.eK,[H.eU,H.fV])
r(H.da,H.d6)
r(H.cN,H.cM)
r(H.dm,P.fF)
q(H.bG,[H.fw,H.iL,H.kU,H.kV,H.kW,P.k6,P.k5,P.k7,P.k8,P.kp,P.ko,P.kK,P.ke,P.kf,P.iP,P.iT,P.jU,P.jT,P.iq,P.ir,P.jP,P.jM,P.jN,P.jO,P.kr,P.kq,P.kD,P.kE,P.kF,W.is,W.j8,W.j9,W.jm,W.ju,W.k9,W.jc,W.jb,W.kh,W.ki,W.kn,W.kv,P.kl,P.km,P.kB,P.kL,P.iB,P.iC,P.i8,E.jj,E.jk,E.jl,E.jz,D.iy,D.iz,F.kx,F.kM,F.kO,F.kP,F.kQ,F.l_,F.ld,F.lc,F.lf,F.kZ,F.kN,F.jo,F.k4,F.k3,F.jZ,F.k_,O.j_,O.j0,O.j1,O.j2,O.j3,O.j4,O.j5,O.j6,T.jy,V.lb,V.jh,V.jr,V.jq,V.js,T.l0,T.l1,T.l2,T.l3,T.l4,T.l5,T.l6,T.l7,T.l8,T.l9])
q(H.fw,[H.fp,H.bY])
r(P.d8,P.O)
q(P.d8,[H.Z,W.fX])
r(H.cc,H.a2)
q(H.cc,[H.dY,H.e_])
r(H.dZ,H.dY)
r(H.bM,H.dZ)
r(H.e0,H.e_)
r(H.di,H.e0)
q(H.di,[H.eZ,H.f_,H.f0,H.f1,H.f2,H.dj,H.bN])
r(H.e9,H.h8)
r(P.e5,P.cZ)
r(P.kd,P.kw)
r(P.e1,P.ef)
r(P.dU,P.e1)
r(P.ed,P.d9)
r(P.cq,P.ed)
q(P.ex,[P.i9,P.iu])
r(P.ez,P.fr)
q(P.ez,[P.ia,P.iG,P.jV,P.jS])
r(P.jR,P.iu)
q(P.aH,[P.dq,P.eJ])
r(P.h1,P.bT)
q(W.e,[W.t,W.eE,W.c9,W.aB,W.e3,W.aC,W.ak,W.e6,W.fS,W.ct,P.ew,P.bg])
q(W.t,[W.D,W.aI,W.cu])
q(W.D,[W.v,P.o])
q(W.v,[W.er,W.es,W.bX,W.bE,W.bF,W.bi,W.eG,W.c5,W.c7,W.fi,W.br,W.dx,W.fu,W.fv,W.cl])
r(W.ii,W.aY)
r(W.cP,W.h0)
q(W.aw,[W.ik,W.il])
r(W.h3,W.h2)
r(W.cQ,W.h3)
r(W.h5,W.h4)
r(W.eD,W.h5)
r(W.aq,W.bD)
r(W.hb,W.ha)
r(W.c3,W.hb)
r(W.hf,W.he)
r(W.bJ,W.hf)
r(W.b9,W.l)
q(W.b9,[W.bL,W.as,W.bP])
r(W.eW,W.hi)
r(W.eX,W.hj)
r(W.hl,W.hk)
r(W.eY,W.hl)
r(W.hn,W.hm)
r(W.dk,W.hn)
r(W.hr,W.hq)
r(W.fa,W.hr)
r(W.fg,W.ht)
r(W.e4,W.e3)
r(W.fl,W.e4)
r(W.hw,W.hv)
r(W.fm,W.hw)
r(W.fq,W.hB)
r(W.hI,W.hH)
r(W.fx,W.hI)
r(W.e7,W.e6)
r(W.fy,W.e7)
r(W.hK,W.hJ)
r(W.fD,W.hK)
r(W.bu,W.as)
r(W.hS,W.hR)
r(W.h_,W.hS)
r(W.dR,W.cR)
r(W.hU,W.hT)
r(W.hd,W.hU)
r(W.hW,W.hV)
r(W.dX,W.hW)
r(W.hY,W.hX)
r(W.hx,W.hY)
r(W.i_,W.hZ)
r(W.hE,W.i_)
r(W.h6,W.fX)
r(W.dS,P.cj)
r(W.hG,W.e2)
r(P.kk,P.kj)
r(P.ag,P.hs)
r(P.hh,P.hg)
r(P.eQ,P.hh)
r(P.hp,P.ho)
r(P.f4,P.hp)
r(P.cg,P.o)
r(P.hD,P.hC)
r(P.fs,P.hD)
r(P.hM,P.hL)
r(P.fE,P.hM)
r(P.ev,P.fY)
r(P.f5,P.bg)
r(P.hz,P.hy)
r(P.fn,P.hz)
q(K.cY,[K.af,L.dA])
q(E.ib,[Z.c_,A.ch,T.dy])
q(D.V,[D.aZ,D.b_,D.E,X.fc])
q(X.fc,[X.d7,X.ca,X.cb,X.dz])
q(O.ae,[D.d2,U.c4,M.cK])
q(D.id,[U.ig,U.a1])
r(U.cL,U.a1)
q(A.ch,[A.dc,A.dv])
q(A.a3,[A.cn,A.fI,A.fJ,A.fK,A.fG,A.dB,A.fH,A.dC,A.dD,A.fL,A.dG,A.co,A.dI,A.dJ])
r(F.jt,F.iA)
r(F.jI,F.iN)
r(F.dQ,F.k1)
q(F.k2,[F.k0,F.jd])
q(O.ck,[O.db,O.du])
q(O.dd,[O.iU,O.iV,O.de])
q(O.de,[O.iY,O.iZ])
r(T.fz,T.dy)
r(X.iE,X.jw)
q(V.aJ,[V.eB,V.eH,V.eI,V.f9])
s(H.cp,H.fO)
s(H.dY,P.j)
s(H.dZ,H.cV)
s(H.e_,P.j)
s(H.e0,H.cV)
s(P.dW,P.j)
s(P.ed,P.hP)
s(P.ef,P.dr)
s(W.h0,W.ij)
s(W.h2,P.j)
s(W.h3,W.P)
s(W.h4,P.j)
s(W.h5,W.P)
s(W.ha,P.j)
s(W.hb,W.P)
s(W.he,P.j)
s(W.hf,W.P)
s(W.hi,P.O)
s(W.hj,P.O)
s(W.hk,P.j)
s(W.hl,W.P)
s(W.hm,P.j)
s(W.hn,W.P)
s(W.hq,P.j)
s(W.hr,W.P)
s(W.ht,P.O)
s(W.e3,P.j)
s(W.e4,W.P)
s(W.hv,P.j)
s(W.hw,W.P)
s(W.hB,P.O)
s(W.hH,P.j)
s(W.hI,W.P)
s(W.e6,P.j)
s(W.e7,W.P)
s(W.hJ,P.j)
s(W.hK,W.P)
s(W.hR,P.j)
s(W.hS,W.P)
s(W.hT,P.j)
s(W.hU,W.P)
s(W.hV,P.j)
s(W.hW,W.P)
s(W.hX,P.j)
s(W.hY,W.P)
s(W.hZ,P.j)
s(W.i_,W.P)
s(P.hg,P.j)
s(P.hh,W.P)
s(P.ho,P.j)
s(P.hp,W.P)
s(P.hC,P.j)
s(P.hD,W.P)
s(P.hL,P.j)
s(P.hM,W.P)
s(P.fY,P.O)
s(P.hy,P.j)
s(P.hz,W.P)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",J:"double",a6:"num",m:"String",ad:"bool",aj:"Null",q:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([V?])","~()","~(V)","~(l)","~(as)","~(cr,J,J)","~(m,@)","~(k,k)","~(k,i<bI>)","~(ap)","~(V?)","~(bP)","aj()","~(~())","~(@,@)","J()","J(J)","@()","J(J,J)","~(k,i<bn>)","~(k,i<aP>)","~(k,i<a1?>)","ad(D,m,m,cv)","~(cm,m,k)","ad(t)","~(k,i<ax>)","I(J)","ad(aN)","ad(m)","~(bL)","~(~(V))","m(k)","~(a6)","~(@)","aj(@,@)","~(t,t?)","~(bu)","m(m)","ad(i<ax>)","@(@)","cm(@,@)","~(m,m?)","k(k,k)","~(m[@])","~(m,k)","H<m,m>(H<m,m>,m)","~(R?,R?)","aj(~())","c_(k)","aj(@)","@(m)","~(m,m)","k(bf,bf)","k(bh,bh)","k(bo,bo)","k(bq,bq)","~(jB)","ad(aJ?)","k(@,@)","@(@,m)","m(e)","D(t)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.pb(v.typeUniverse,JSON.parse('{"f8":"bl","bQ":"bl","b0":"bl","qQ":"l","r1":"l","qS":"bg","qR":"e","r8":"e","rb":"e","qP":"o","r2":"o","qT":"v","r5":"v","r3":"t","r0":"t","rB":"ak","qX":"b9","qU":"aI","rc":"aI","ra":"as","r4":"bJ","qY":"L","qZ":"at","r7":"bM","r6":"a2","eL":{"ad":[]},"bl":{"mc":[]},"x":{"q":["1"],"n":["1"],"i":["1"]},"iK":{"x":["1"],"q":["1"],"n":["1"],"i":["1"]},"c8":{"J":[],"a6":[]},"d_":{"J":[],"k":[],"a6":[]},"eM":{"J":[],"a6":[]},"bk":{"m":[]},"d1":{"N":[]},"r":{"j":["k"],"q":["k"],"n":["k"],"i":["k"],"j.E":"k"},"n":{"i":["1"]},"d6":{"n":["1"],"i":["1"]},"b2":{"i":["2"],"i.E":"2"},"cS":{"b2":["1","2"],"n":["2"],"i":["2"],"i.E":"2"},"da":{"d6":["2"],"n":["2"],"i":["2"],"i.E":"2"},"bb":{"i":["1"],"i.E":"1"},"cp":{"j":["1"],"q":["1"],"n":["1"],"i":["1"]},"cM":{"H":["1","2"]},"cN":{"H":["1","2"]},"dm":{"N":[]},"eO":{"N":[]},"fN":{"N":[]},"bG":{"cX":[]},"fw":{"cX":[]},"fp":{"cX":[]},"bY":{"cX":[]},"fh":{"N":[]},"Z":{"O":["1","2"],"H":["1","2"],"O.V":"2"},"d3":{"n":["1"],"i":["1"],"i.E":"1"},"eN":{"mm":[]},"cc":{"A":["1"],"a2":[]},"bM":{"j":["J"],"A":["J"],"q":["J"],"a2":[],"n":["J"],"i":["J"],"j.E":"J"},"di":{"j":["k"],"A":["k"],"q":["k"],"a2":[],"n":["k"],"i":["k"]},"eZ":{"j":["k"],"A":["k"],"q":["k"],"a2":[],"n":["k"],"i":["k"],"j.E":"k"},"f_":{"j":["k"],"A":["k"],"q":["k"],"a2":[],"n":["k"],"i":["k"],"j.E":"k"},"f0":{"j":["k"],"A":["k"],"q":["k"],"a2":[],"n":["k"],"i":["k"],"j.E":"k"},"f1":{"j":["k"],"A":["k"],"q":["k"],"a2":[],"n":["k"],"i":["k"],"j.E":"k"},"f2":{"j":["k"],"A":["k"],"q":["k"],"a2":[],"n":["k"],"i":["k"],"j.E":"k"},"dj":{"j":["k"],"A":["k"],"q":["k"],"a2":[],"n":["k"],"i":["k"],"j.E":"k"},"bN":{"j":["k"],"cm":[],"A":["k"],"q":["k"],"a2":[],"n":["k"],"i":["k"],"j.E":"k"},"h8":{"N":[]},"e9":{"N":[]},"e8":{"jB":[]},"e5":{"i":["1"],"i.E":"1"},"dU":{"dr":["1"],"n":["1"],"i":["1"]},"cZ":{"i":["1"]},"d5":{"j":["1"],"q":["1"],"n":["1"],"i":["1"]},"d8":{"O":["1","2"],"H":["1","2"]},"O":{"H":["1","2"]},"d9":{"H":["1","2"]},"cq":{"H":["1","2"]},"e1":{"dr":["1"],"n":["1"],"i":["1"]},"J":{"a6":[]},"k":{"a6":[]},"q":{"n":["1"],"i":["1"]},"et":{"N":[]},"fF":{"N":[]},"f3":{"N":[]},"aH":{"N":[]},"dq":{"N":[]},"eJ":{"N":[]},"fP":{"N":[]},"fM":{"N":[]},"ci":{"N":[]},"ey":{"N":[]},"f6":{"N":[]},"dw":{"N":[]},"eA":{"N":[]},"bT":{"fQ":[]},"hu":{"fQ":[]},"h1":{"fQ":[]},"v":{"D":[],"t":[],"e":[]},"bi":{"D":[],"t":[],"e":[]},"D":{"t":[],"e":[]},"aq":{"bD":[]},"bL":{"l":[]},"as":{"l":[]},"t":{"e":[]},"aB":{"e":[]},"aC":{"e":[]},"ak":{"e":[]},"bP":{"l":[]},"b9":{"l":[]},"bu":{"as":[],"l":[]},"cv":{"aN":[]},"er":{"D":[],"t":[],"e":[]},"es":{"D":[],"t":[],"e":[]},"bX":{"D":[],"t":[],"e":[]},"bE":{"D":[],"t":[],"e":[]},"bF":{"D":[],"t":[],"e":[]},"aI":{"t":[],"e":[]},"cQ":{"j":["ag<a6>"],"q":["ag<a6>"],"A":["ag<a6>"],"n":["ag<a6>"],"i":["ag<a6>"],"j.E":"ag<a6>"},"cR":{"ag":["a6"]},"eD":{"j":["m"],"q":["m"],"A":["m"],"n":["m"],"i":["m"],"j.E":"m"},"fZ":{"j":["D"],"q":["D"],"n":["D"],"i":["D"],"j.E":"D"},"c3":{"j":["aq"],"q":["aq"],"A":["aq"],"n":["aq"],"i":["aq"],"j.E":"aq"},"eE":{"e":[]},"eG":{"D":[],"t":[],"e":[]},"bJ":{"j":["t"],"q":["t"],"A":["t"],"n":["t"],"i":["t"],"j.E":"t"},"c5":{"D":[],"t":[],"e":[]},"c7":{"D":[],"t":[],"e":[]},"c9":{"e":[]},"eW":{"O":["m","@"],"H":["m","@"],"O.V":"@"},"eX":{"O":["m","@"],"H":["m","@"],"O.V":"@"},"eY":{"j":["aM"],"q":["aM"],"A":["aM"],"n":["aM"],"i":["aM"],"j.E":"aM"},"a8":{"j":["t"],"q":["t"],"n":["t"],"i":["t"],"j.E":"t"},"dk":{"j":["t"],"q":["t"],"A":["t"],"n":["t"],"i":["t"],"j.E":"t"},"fa":{"j":["aO"],"q":["aO"],"A":["aO"],"n":["aO"],"i":["aO"],"j.E":"aO"},"fg":{"O":["m","@"],"H":["m","@"],"O.V":"@"},"fi":{"D":[],"t":[],"e":[]},"fl":{"j":["aB"],"q":["aB"],"A":["aB"],"e":[],"n":["aB"],"i":["aB"],"j.E":"aB"},"fm":{"j":["aQ"],"q":["aQ"],"A":["aQ"],"n":["aQ"],"i":["aQ"],"j.E":"aQ"},"fq":{"O":["m","m"],"H":["m","m"],"O.V":"m"},"br":{"D":[],"t":[],"e":[]},"dx":{"D":[],"t":[],"e":[]},"fu":{"D":[],"t":[],"e":[]},"fv":{"D":[],"t":[],"e":[]},"cl":{"D":[],"t":[],"e":[]},"fx":{"j":["ak"],"q":["ak"],"A":["ak"],"n":["ak"],"i":["ak"],"j.E":"ak"},"fy":{"j":["aC"],"q":["aC"],"A":["aC"],"e":[],"n":["aC"],"i":["aC"],"j.E":"aC"},"fD":{"j":["aD"],"q":["aD"],"A":["aD"],"n":["aD"],"i":["aD"],"j.E":"aD"},"fS":{"e":[]},"ct":{"e":[]},"cu":{"t":[],"e":[]},"h_":{"j":["L"],"q":["L"],"A":["L"],"n":["L"],"i":["L"],"j.E":"L"},"dR":{"ag":["a6"]},"hd":{"j":["aL?"],"q":["aL?"],"A":["aL?"],"n":["aL?"],"i":["aL?"],"j.E":"aL?"},"dX":{"j":["t"],"q":["t"],"A":["t"],"n":["t"],"i":["t"],"j.E":"t"},"hx":{"j":["aR"],"q":["aR"],"A":["aR"],"n":["aR"],"i":["aR"],"j.E":"aR"},"hE":{"j":["at"],"q":["at"],"A":["at"],"n":["at"],"i":["at"],"j.E":"at"},"fX":{"O":["m","m"],"H":["m","m"]},"h6":{"O":["m","m"],"H":["m","m"],"O.V":"m"},"dS":{"cj":["1"]},"dl":{"aN":[]},"e2":{"aN":[]},"hG":{"aN":[]},"hF":{"aN":[]},"ea":{"bK":[]},"eF":{"j":["D"],"q":["D"],"n":["D"],"i":["D"],"j.E":"D"},"ag":{"hs":["1"]},"eQ":{"j":["b1"],"q":["b1"],"n":["b1"],"i":["b1"],"j.E":"b1"},"f4":{"j":["b5"],"q":["b5"],"n":["b5"],"i":["b5"],"j.E":"b5"},"cg":{"o":[],"D":[],"t":[],"e":[]},"fs":{"j":["m"],"q":["m"],"n":["m"],"i":["m"],"j.E":"m"},"o":{"D":[],"t":[],"e":[]},"fE":{"j":["b7"],"q":["b7"],"n":["b7"],"i":["b7"],"j.E":"b7"},"ev":{"O":["m","@"],"H":["m","@"],"O.V":"@"},"ew":{"e":[]},"bg":{"e":[]},"f5":{"e":[]},"fn":{"j":["H<@,@>"],"q":["H<@,@>"],"n":["H<@,@>"],"i":["H<@,@>"],"j.E":"H<@,@>"},"cY":{"b3":[]},"aW":{"b3":[]},"af":{"b3":[]},"fd":{"b3":[]},"u":{"b3":[]},"dA":{"b3":[]},"ae":{"i":["1"],"ae.T":"1"},"aZ":{"V":[]},"b_":{"V":[]},"E":{"V":[]},"d7":{"V":[]},"ca":{"V":[]},"cb":{"V":[]},"fc":{"V":[]},"dz":{"V":[]},"nU":{"ax":[]},"c1":{"ax":[]},"ok":{"ax":[]},"oD":{"ax":[]},"d2":{"ae":["ax"],"i":["ax"],"ae.T":"ax"},"cL":{"a1":[]},"c4":{"ae":["a1?"],"a1":[],"i":["a1?"],"ae.T":"a1?"},"dL":{"a1":[]},"dM":{"a1":[]},"dN":{"a1":[]},"cK":{"ae":["aP"],"aP":[],"i":["aP"],"ae.T":"aP"},"cO":{"aP":[]},"cU":{"aP":[]},"cn":{"a3":[]},"co":{"a3":[]},"dc":{"ch":[]},"dv":{"ch":[]},"fI":{"a3":[]},"fJ":{"a3":[]},"fK":{"a3":[]},"fG":{"a3":[]},"dB":{"a3":[]},"fH":{"a3":[]},"dC":{"a3":[]},"dD":{"a3":[]},"fL":{"a3":[]},"dG":{"a3":[]},"dI":{"a3":[]},"dJ":{"a3":[]},"db":{"ck":[]},"du":{"ck":[]},"fz":{"dy":[]},"eB":{"aJ":[]},"eH":{"aJ":[]},"eI":{"aJ":[]},"f9":{"aJ":[]},"cm":{"q":["k"],"n":["k"],"i":["k"]}}'))
H.pa(v.typeUniverse,JSON.parse('{"ai":1,"n":1,"bm":1,"eU":2,"fV":1,"cV":1,"fO":1,"cp":1,"cM":2,"eS":1,"cc":1,"cj":1,"bS":1,"fr":2,"dV":1,"cZ":1,"d5":1,"d8":2,"hP":2,"d9":2,"e1":1,"dW":1,"ed":2,"ef":1,"ex":2,"ez":2,"eK":1,"dS":1,"P":1,"cW":1,"aZ":1,"b_":1,"E":1}'))
var u={M:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",S:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",b:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",U:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",q:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",h:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",N:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",D:"May not create a face with a first vertex which is not attached to a shape.",R:"May not create a face with vertices attached to different shapes.",p:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.lR
return{cR:s("bX"),fK:s("bD"),Y:s("bE"),eT:s("c_"),ed:s("c0"),gA:s("bF"),ar:s("cJ"),gw:s("n<@>"),h:s("D"),l:s("bI"),bU:s("N"),aD:s("l"),c8:s("aq"),bX:s("c3"),c:s("cX"),x:s("bK"),fS:s("c5"),gk:s("c7"),eu:s("x<eu>"),i:s("x<nU>"),cn:s("x<bf>"),U:s("x<c1>"),fD:s("x<bh>"),C:s("x<bi>"),u:s("x<ap>"),fv:s("x<c6>"),e:s("x<ax>"),L:s("x<eR>"),F:s("x<q<bi>>"),z:s("x<b3>"),fA:s("x<bn>"),Q:s("x<aN>"),q:s("x<fb>"),cG:s("x<M>"),eg:s("x<bo>"),o:s("x<ok>"),ba:s("x<aP>"),D:s("x<oD>"),c3:s("x<bq>"),g9:s("x<cj<R>>"),s:s("x<m>"),ga:s("x<dy>"),gT:s("x<aD>"),ab:s("x<dA>"),gN:s("x<cm>"),dC:s("x<a3>"),d:s("x<dE>"),V:s("x<dF>"),B:s("x<dH>"),J:s("x<dK>"),k:s("x<cr>"),n:s("x<J>"),gn:s("x<@>"),t:s("x<k>"),g6:s("x<aJ?>"),eJ:s("x<a1?>"),bc:s("x<ck?>"),p:s("x<co?>"),b:s("x<~(V)>"),T:s("d0"),eH:s("mc"),M:s("b0"),aU:s("A<@>"),fX:s("Z<k,ad>"),y:s("Z<k,k>"),O:s("q<dE>"),m:s("q<dF>"),r:s("q<dH>"),R:s("q<dK>"),E:s("q<@>"),bv:s("d7"),f:s("H<@,@>"),dv:s("da<m,m>"),gc:s("bn"),bu:s("c9"),Z:s("ca"),bZ:s("cb"),cH:s("dh"),dE:s("a2"),bm:s("bN"),P:s("aj"),K:s("R"),I:s("ag<a6>"),fJ:s("mm"),ew:s("cg"),fg:s("ch"),N:s("m"),g7:s("o"),bY:s("br"),aW:s("cl"),aF:s("jB"),bJ:s("fB"),dr:s("dz"),v:s("dB"),w:s("cn"),g:s("dC"),bw:s("dD"),bK:s("dG"),j:s("co"),G:s("dI"),a:s("dJ"),ak:s("bQ"),dw:s("cq<m,m>"),dD:s("fQ"),h9:s("cu"),ac:s("a8"),cJ:s("ad"),gR:s("J"),A:s("@"),S:s("k"),aw:s("0&*"),_:s("R*"),bG:s("mb<aj>?"),eI:s("dc?"),X:s("R?"),gW:s("cf?"),dm:s("dv?"),dl:s("fo?"),f7:s("fC?"),W:s("cn?"),H:s("a6"),h2:s("~(V)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.p=W.bE.prototype
C.i=W.bF.prototype
C.Q=W.bi.prototype
C.T=J.b.prototype
C.b=J.x.prototype
C.c=J.d_.prototype
C.U=J.d0.prototype
C.d=J.c8.prototype
C.a=J.bk.prototype
C.V=J.b0.prototype
C.a_=H.bN.prototype
C.B=J.f8.prototype
C.a3=P.cf.prototype
C.C=W.dx.prototype
C.o=J.bQ.prototype
C.D=W.bu.prototype
C.E=W.ct.prototype
C.F=new E.bZ("Browser.chrome")
C.q=new E.bZ("Browser.firefox")
C.r=new E.bZ("Browser.edge")
C.G=new E.bZ("Browser.other")
C.a6=new P.ia()
C.H=new P.i9()
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

C.O=new P.f6()
C.e=new P.jR()
C.P=new P.jV()
C.f=new P.kd()
C.m=new P.bH(0)
C.R=new P.bH(5e6)
C.S=new P.iH("element",!1,!1,!1)
C.j=H.a(s([0,0,32776,33792,1,10240,0,0]),t.t)
C.W=H.a(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.s)
C.k=H.a(s([0,0,65490,45055,65535,34815,65534,18431]),t.t)
C.l=H.a(s([0,0,26624,1023,65534,2047,65534,2047]),t.t)
C.X=H.a(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.s)
C.v=H.a(s([]),t.s)
C.Y=H.a(s([0,0,32722,12287,65534,34815,65534,18431]),t.t)
C.w=H.a(s([0,0,65498,45055,65535,34815,65534,18431]),t.t)
C.h=H.a(s([0,0,24576,1023,65534,34815,65534,18431]),t.t)
C.x=H.a(s([0,0,32754,11263,65534,34815,65534,18431]),t.t)
C.y=H.a(s([0,0,65490,12287,65535,34815,65534,18431]),t.t)
C.z=H.a(s(["bind","if","ref","repeat","syntax"]),t.s)
C.n=H.a(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.s)
C.Z=new H.cN(0,{},C.v,H.lR("cN<m,m>"))
C.a0=new E.cd("OperatingSystem.windows")
C.A=new E.cd("OperatingSystem.mac")
C.a1=new E.cd("OperatingSystem.linux")
C.a2=new E.cd("OperatingSystem.other")
C.a4=new P.jS(!1)
C.a5=new P.cw(null,2)})();(function staticFields(){$.ka=null
$.aX=0
$.cH=null
$.m3=null
$.ne=null
$.n7=null
$.nk=null
$.kR=null
$.kY=null
$.lT=null
$.cz=null
$.ei=null
$.ej=null
$.lM=!1
$.aS=C.f
$.am=H.a([],H.lR("x<R>"))
$.bj=null
$.lk=null
$.m9=null
$.m8=null
$.dT=P.W(t.N,t.c)
$.iv=null
$.me=null
$.mg=null
$.a4=null
$.b6=null
$.mo=null
$.bR=null
$.mE=null
$.mD=null
$.jW=null
$.jX=null
$.jY=null
$.mC=null
$.mF=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"r_","nr",function(){return H.qu("_$dart_dartClosure")})
s($,"rd","nt",function(){return H.b8(H.jH({
toString:function(){return"$receiver$"}}))})
s($,"re","nu",function(){return H.b8(H.jH({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"rf","nv",function(){return H.b8(H.jH(null))})
s($,"rg","nw",function(){return H.b8(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"rj","nz",function(){return H.b8(H.jH(void 0))})
s($,"rk","nA",function(){return H.b8(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"ri","ny",function(){return H.b8(H.mw(null))})
s($,"rh","nx",function(){return H.b8(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"rm","nC",function(){return H.b8(H.mw(void 0))})
s($,"rl","nB",function(){return H.b8(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"rC","lY",function(){return P.oP()})
s($,"rn","nD",function(){return new P.jU().$0()})
s($,"ro","nE",function(){return new P.jT().$0()})
s($,"rD","nI",function(){return new Int8Array(H.cy(H.a([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"rG","nK",function(){return P.ow("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"rT","nL",function(){return P.pw()})
s($,"rE","nJ",function(){return P.md(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"rv","nH",function(){return Z.aF(0)})
s($,"rp","nF",function(){return Z.aF(511)})
s($,"rx","aU",function(){return Z.aF(1)})
s($,"rw","bB",function(){return Z.aF(2)})
s($,"rr","bA",function(){return Z.aF(4)})
s($,"ry","bV",function(){return Z.aF(8)})
s($,"rz","bC",function(){return Z.aF(16)})
s($,"rs","eo",function(){return Z.aF(32)})
s($,"rt","ep",function(){return Z.aF(64)})
s($,"ru","nG",function(){return Z.aF(96)})
s($,"rA","cF",function(){return Z.aF(128)})
s($,"rq","bz",function(){return Z.aF(256)})
s($,"qW","nq",function(){return new V.iw()})
r($,"qV","F",function(){return $.nq()})
r($,"r9","ns",function(){var q=V.lu(),p=V.ly(),o=$.mC
return V.mf(q,p,o==null?$.mC=V.oM(0,0,-1):o)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.b,AnimationEffectTiming:J.b,AnimationEffectTimingReadOnly:J.b,AnimationTimeline:J.b,AnimationWorkletGlobalScope:J.b,AuthenticatorAssertionResponse:J.b,AuthenticatorAttestationResponse:J.b,AuthenticatorResponse:J.b,BackgroundFetchFetch:J.b,BackgroundFetchManager:J.b,BackgroundFetchSettledFetch:J.b,BarProp:J.b,BarcodeDetector:J.b,BluetoothRemoteGATTDescriptor:J.b,Body:J.b,BudgetState:J.b,CacheStorage:J.b,CanvasGradient:J.b,CanvasPattern:J.b,Client:J.b,Clients:J.b,CookieStore:J.b,Coordinates:J.b,Credential:J.b,CredentialUserData:J.b,CredentialsContainer:J.b,Crypto:J.b,CryptoKey:J.b,CSS:J.b,CSSVariableReferenceValue:J.b,CustomElementRegistry:J.b,DataTransfer:J.b,DataTransferItem:J.b,DeprecatedStorageInfo:J.b,DeprecatedStorageQuota:J.b,DeprecationReport:J.b,DetectedBarcode:J.b,DetectedFace:J.b,DetectedText:J.b,DeviceAcceleration:J.b,DeviceRotationRate:J.b,DirectoryEntry:J.b,DirectoryReader:J.b,DocumentOrShadowRoot:J.b,DocumentTimeline:J.b,DOMError:J.b,DOMImplementation:J.b,Iterator:J.b,DOMMatrix:J.b,DOMMatrixReadOnly:J.b,DOMParser:J.b,DOMPoint:J.b,DOMPointReadOnly:J.b,DOMQuad:J.b,DOMStringMap:J.b,Entry:J.b,External:J.b,FaceDetector:J.b,FederatedCredential:J.b,FileEntry:J.b,DOMFileSystem:J.b,FontFace:J.b,FontFaceSource:J.b,FormData:J.b,GamepadButton:J.b,GamepadPose:J.b,Geolocation:J.b,Position:J.b,Headers:J.b,HTMLHyperlinkElementUtils:J.b,IdleDeadline:J.b,ImageBitmap:J.b,ImageBitmapRenderingContext:J.b,ImageCapture:J.b,InputDeviceCapabilities:J.b,IntersectionObserver:J.b,IntersectionObserverEntry:J.b,InterventionReport:J.b,KeyframeEffect:J.b,KeyframeEffectReadOnly:J.b,MediaCapabilities:J.b,MediaCapabilitiesInfo:J.b,MediaDeviceInfo:J.b,MediaError:J.b,MediaKeyStatusMap:J.b,MediaKeySystemAccess:J.b,MediaKeys:J.b,MediaKeysPolicy:J.b,MediaMetadata:J.b,MediaSession:J.b,MediaSettingsRange:J.b,MemoryInfo:J.b,MessageChannel:J.b,Metadata:J.b,MutationObserver:J.b,WebKitMutationObserver:J.b,MutationRecord:J.b,NavigationPreloadManager:J.b,Navigator:J.b,NavigatorAutomationInformation:J.b,NavigatorConcurrentHardware:J.b,NavigatorCookies:J.b,NavigatorUserMediaError:J.b,NodeFilter:J.b,NodeIterator:J.b,NonDocumentTypeChildNode:J.b,NonElementParentNode:J.b,NoncedElement:J.b,OffscreenCanvasRenderingContext2D:J.b,OverconstrainedError:J.b,PaintRenderingContext2D:J.b,PaintSize:J.b,PaintWorkletGlobalScope:J.b,PasswordCredential:J.b,Path2D:J.b,PaymentAddress:J.b,PaymentInstruments:J.b,PaymentManager:J.b,PaymentResponse:J.b,PerformanceEntry:J.b,PerformanceLongTaskTiming:J.b,PerformanceMark:J.b,PerformanceMeasure:J.b,PerformanceNavigation:J.b,PerformanceNavigationTiming:J.b,PerformanceObserver:J.b,PerformanceObserverEntryList:J.b,PerformancePaintTiming:J.b,PerformanceResourceTiming:J.b,PerformanceServerTiming:J.b,PerformanceTiming:J.b,Permissions:J.b,PhotoCapabilities:J.b,PositionError:J.b,Presentation:J.b,PresentationReceiver:J.b,PublicKeyCredential:J.b,PushManager:J.b,PushMessageData:J.b,PushSubscription:J.b,PushSubscriptionOptions:J.b,Range:J.b,RelatedApplication:J.b,ReportBody:J.b,ReportingObserver:J.b,ResizeObserver:J.b,ResizeObserverEntry:J.b,RTCCertificate:J.b,RTCIceCandidate:J.b,mozRTCIceCandidate:J.b,RTCLegacyStatsReport:J.b,RTCRtpContributingSource:J.b,RTCRtpReceiver:J.b,RTCRtpSender:J.b,RTCSessionDescription:J.b,mozRTCSessionDescription:J.b,RTCStatsResponse:J.b,Screen:J.b,ScrollState:J.b,ScrollTimeline:J.b,Selection:J.b,SharedArrayBuffer:J.b,SpeechRecognitionAlternative:J.b,SpeechSynthesisVoice:J.b,StaticRange:J.b,StorageManager:J.b,StyleMedia:J.b,StylePropertyMap:J.b,StylePropertyMapReadonly:J.b,SyncManager:J.b,TaskAttributionTiming:J.b,TextDetector:J.b,TextMetrics:J.b,TrackDefault:J.b,TreeWalker:J.b,TrustedHTML:J.b,TrustedScriptURL:J.b,TrustedURL:J.b,UnderlyingSourceBase:J.b,URLSearchParams:J.b,VRCoordinateSystem:J.b,VRDisplayCapabilities:J.b,VREyeParameters:J.b,VRFrameData:J.b,VRFrameOfReference:J.b,VRPose:J.b,VRStageBounds:J.b,VRStageBoundsPoint:J.b,VRStageParameters:J.b,ValidityState:J.b,VideoPlaybackQuality:J.b,VideoTrack:J.b,VTTRegion:J.b,WindowClient:J.b,WorkletAnimation:J.b,WorkletGlobalScope:J.b,XPathEvaluator:J.b,XPathExpression:J.b,XPathNSResolver:J.b,XPathResult:J.b,XMLSerializer:J.b,XSLTProcessor:J.b,Bluetooth:J.b,BluetoothCharacteristicProperties:J.b,BluetoothRemoteGATTServer:J.b,BluetoothRemoteGATTService:J.b,BluetoothUUID:J.b,BudgetService:J.b,Cache:J.b,DOMFileSystemSync:J.b,DirectoryEntrySync:J.b,DirectoryReaderSync:J.b,EntrySync:J.b,FileEntrySync:J.b,FileReaderSync:J.b,FileWriterSync:J.b,HTMLAllCollection:J.b,Mojo:J.b,MojoHandle:J.b,MojoWatcher:J.b,NFC:J.b,PagePopupController:J.b,Report:J.b,Request:J.b,Response:J.b,SubtleCrypto:J.b,USBAlternateInterface:J.b,USBConfiguration:J.b,USBDevice:J.b,USBEndpoint:J.b,USBInTransferResult:J.b,USBInterface:J.b,USBIsochronousInTransferPacket:J.b,USBIsochronousInTransferResult:J.b,USBIsochronousOutTransferPacket:J.b,USBIsochronousOutTransferResult:J.b,USBOutTransferResult:J.b,WorkerLocation:J.b,WorkerNavigator:J.b,Worklet:J.b,IDBCursor:J.b,IDBCursorWithValue:J.b,IDBFactory:J.b,IDBIndex:J.b,IDBKeyRange:J.b,IDBObjectStore:J.b,IDBObservation:J.b,IDBObserver:J.b,IDBObserverChanges:J.b,SVGAngle:J.b,SVGAnimatedAngle:J.b,SVGAnimatedBoolean:J.b,SVGAnimatedEnumeration:J.b,SVGAnimatedInteger:J.b,SVGAnimatedLength:J.b,SVGAnimatedLengthList:J.b,SVGAnimatedNumber:J.b,SVGAnimatedNumberList:J.b,SVGAnimatedPreserveAspectRatio:J.b,SVGAnimatedRect:J.b,SVGAnimatedString:J.b,SVGAnimatedTransformList:J.b,SVGMatrix:J.b,SVGPoint:J.b,SVGPreserveAspectRatio:J.b,SVGRect:J.b,SVGUnitTypes:J.b,AudioListener:J.b,AudioParam:J.b,AudioTrack:J.b,AudioWorkletGlobalScope:J.b,AudioWorkletProcessor:J.b,PeriodicWave:J.b,WebGLActiveInfo:J.b,ANGLEInstancedArrays:J.b,ANGLE_instanced_arrays:J.b,WebGLBuffer:J.b,WebGLCanvas:J.b,WebGLColorBufferFloat:J.b,WebGLCompressedTextureASTC:J.b,WebGLCompressedTextureATC:J.b,WEBGL_compressed_texture_atc:J.b,WebGLCompressedTextureETC1:J.b,WEBGL_compressed_texture_etc1:J.b,WebGLCompressedTextureETC:J.b,WebGLCompressedTexturePVRTC:J.b,WEBGL_compressed_texture_pvrtc:J.b,WebGLCompressedTextureS3TC:J.b,WEBGL_compressed_texture_s3tc:J.b,WebGLCompressedTextureS3TCsRGB:J.b,WebGLDebugRendererInfo:J.b,WEBGL_debug_renderer_info:J.b,WebGLDebugShaders:J.b,WEBGL_debug_shaders:J.b,WebGLDepthTexture:J.b,WEBGL_depth_texture:J.b,WebGLDrawBuffers:J.b,WEBGL_draw_buffers:J.b,EXTsRGB:J.b,EXT_sRGB:J.b,EXTBlendMinMax:J.b,EXT_blend_minmax:J.b,EXTColorBufferFloat:J.b,EXTColorBufferHalfFloat:J.b,EXTDisjointTimerQuery:J.b,EXTDisjointTimerQueryWebGL2:J.b,EXTFragDepth:J.b,EXT_frag_depth:J.b,EXTShaderTextureLOD:J.b,EXT_shader_texture_lod:J.b,EXTTextureFilterAnisotropic:J.b,EXT_texture_filter_anisotropic:J.b,WebGLFramebuffer:J.b,WebGLGetBufferSubDataAsync:J.b,WebGLLoseContext:J.b,WebGLExtensionLoseContext:J.b,WEBGL_lose_context:J.b,OESElementIndexUint:J.b,OES_element_index_uint:J.b,OESStandardDerivatives:J.b,OES_standard_derivatives:J.b,OESTextureFloat:J.b,OES_texture_float:J.b,OESTextureFloatLinear:J.b,OES_texture_float_linear:J.b,OESTextureHalfFloat:J.b,OES_texture_half_float:J.b,OESTextureHalfFloatLinear:J.b,OES_texture_half_float_linear:J.b,OESVertexArrayObject:J.b,OES_vertex_array_object:J.b,WebGLProgram:J.b,WebGLQuery:J.b,WebGLRenderbuffer:J.b,WebGLRenderingContext:J.b,WebGLSampler:J.b,WebGLShader:J.b,WebGLShaderPrecisionFormat:J.b,WebGLSync:J.b,WebGLTexture:J.b,WebGLTimerQueryEXT:J.b,WebGLTransformFeedback:J.b,WebGLUniformLocation:J.b,WebGLVertexArrayObject:J.b,WebGLVertexArrayObjectOES:J.b,WebGL:J.b,WebGL2RenderingContextBase:J.b,Database:J.b,SQLError:J.b,SQLResultSet:J.b,SQLTransaction:J.b,ArrayBuffer:H.dh,DataView:H.a2,ArrayBufferView:H.a2,Float32Array:H.bM,Float64Array:H.bM,Int16Array:H.eZ,Int32Array:H.f_,Int8Array:H.f0,Uint16Array:H.f1,Uint32Array:H.f2,Uint8ClampedArray:H.dj,CanvasPixelArray:H.dj,Uint8Array:H.bN,HTMLAudioElement:W.v,HTMLBRElement:W.v,HTMLButtonElement:W.v,HTMLContentElement:W.v,HTMLDListElement:W.v,HTMLDataElement:W.v,HTMLDataListElement:W.v,HTMLDetailsElement:W.v,HTMLDialogElement:W.v,HTMLEmbedElement:W.v,HTMLFieldSetElement:W.v,HTMLHRElement:W.v,HTMLHeadElement:W.v,HTMLHeadingElement:W.v,HTMLHtmlElement:W.v,HTMLIFrameElement:W.v,HTMLLIElement:W.v,HTMLLabelElement:W.v,HTMLLegendElement:W.v,HTMLLinkElement:W.v,HTMLMapElement:W.v,HTMLMediaElement:W.v,HTMLMenuElement:W.v,HTMLMetaElement:W.v,HTMLMeterElement:W.v,HTMLModElement:W.v,HTMLOListElement:W.v,HTMLObjectElement:W.v,HTMLOptGroupElement:W.v,HTMLOptionElement:W.v,HTMLOutputElement:W.v,HTMLParagraphElement:W.v,HTMLParamElement:W.v,HTMLPictureElement:W.v,HTMLPreElement:W.v,HTMLProgressElement:W.v,HTMLQuoteElement:W.v,HTMLScriptElement:W.v,HTMLShadowElement:W.v,HTMLSlotElement:W.v,HTMLSourceElement:W.v,HTMLSpanElement:W.v,HTMLStyleElement:W.v,HTMLTableCaptionElement:W.v,HTMLTableColElement:W.v,HTMLTextAreaElement:W.v,HTMLTimeElement:W.v,HTMLTitleElement:W.v,HTMLTrackElement:W.v,HTMLUListElement:W.v,HTMLUnknownElement:W.v,HTMLVideoElement:W.v,HTMLDirectoryElement:W.v,HTMLFontElement:W.v,HTMLFrameElement:W.v,HTMLFrameSetElement:W.v,HTMLMarqueeElement:W.v,HTMLElement:W.v,AccessibleNodeList:W.i4,HTMLAnchorElement:W.er,HTMLAreaElement:W.es,HTMLBaseElement:W.bX,Blob:W.bD,HTMLBodyElement:W.bE,HTMLCanvasElement:W.bF,CanvasRenderingContext2D:W.cJ,CDATASection:W.aI,CharacterData:W.aI,Comment:W.aI,ProcessingInstruction:W.aI,Text:W.aI,CSSPerspective:W.ii,CSSCharsetRule:W.L,CSSConditionRule:W.L,CSSFontFaceRule:W.L,CSSGroupingRule:W.L,CSSImportRule:W.L,CSSKeyframeRule:W.L,MozCSSKeyframeRule:W.L,WebKitCSSKeyframeRule:W.L,CSSKeyframesRule:W.L,MozCSSKeyframesRule:W.L,WebKitCSSKeyframesRule:W.L,CSSMediaRule:W.L,CSSNamespaceRule:W.L,CSSPageRule:W.L,CSSRule:W.L,CSSStyleRule:W.L,CSSSupportsRule:W.L,CSSViewportRule:W.L,CSSStyleDeclaration:W.cP,MSStyleCSSProperties:W.cP,CSS2Properties:W.cP,CSSImageValue:W.aw,CSSKeywordValue:W.aw,CSSNumericValue:W.aw,CSSPositionValue:W.aw,CSSResourceValue:W.aw,CSSUnitValue:W.aw,CSSURLImageValue:W.aw,CSSStyleValue:W.aw,CSSMatrixComponent:W.aY,CSSRotation:W.aY,CSSScale:W.aY,CSSSkew:W.aY,CSSTranslation:W.aY,CSSTransformComponent:W.aY,CSSTransformValue:W.ik,CSSUnparsedValue:W.il,DataTransferItemList:W.im,HTMLDivElement:W.bi,DOMException:W.io,ClientRectList:W.cQ,DOMRectList:W.cQ,DOMRectReadOnly:W.cR,DOMStringList:W.eD,DOMTokenList:W.ip,Element:W.D,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,SubmitEvent:W.l,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aq,FileList:W.c3,FileWriter:W.eE,HTMLFormElement:W.eG,Gamepad:W.aL,History:W.iF,HTMLCollection:W.bJ,HTMLFormControlsCollection:W.bJ,HTMLOptionsCollection:W.bJ,ImageData:W.bK,HTMLImageElement:W.c5,HTMLInputElement:W.c7,KeyboardEvent:W.bL,Location:W.iR,MediaList:W.j7,MessagePort:W.c9,MIDIInputMap:W.eW,MIDIOutputMap:W.eX,MimeType:W.aM,MimeTypeArray:W.eY,PointerEvent:W.as,MouseEvent:W.as,DragEvent:W.as,Document:W.t,DocumentFragment:W.t,HTMLDocument:W.t,ShadowRoot:W.t,XMLDocument:W.t,DocumentType:W.t,Node:W.t,NodeList:W.dk,RadioNodeList:W.dk,Plugin:W.aO,PluginArray:W.fa,RTCStatsReport:W.fg,HTMLSelectElement:W.fi,SourceBuffer:W.aB,SourceBufferList:W.fl,SpeechGrammar:W.aQ,SpeechGrammarList:W.fm,SpeechRecognitionResult:W.aR,Storage:W.fq,CSSStyleSheet:W.at,StyleSheet:W.at,HTMLTableCellElement:W.br,HTMLTableDataCellElement:W.br,HTMLTableHeaderCellElement:W.br,HTMLTableElement:W.dx,HTMLTableRowElement:W.fu,HTMLTableSectionElement:W.fv,HTMLTemplateElement:W.cl,TextTrack:W.aC,TextTrackCue:W.ak,VTTCue:W.ak,TextTrackCueList:W.fx,TextTrackList:W.fy,TimeRanges:W.jA,Touch:W.aD,TouchEvent:W.bP,TouchList:W.fD,TrackDefaultList:W.jF,CompositionEvent:W.b9,FocusEvent:W.b9,TextEvent:W.b9,UIEvent:W.b9,URL:W.jQ,VideoTrackList:W.fS,WheelEvent:W.bu,Window:W.ct,DOMWindow:W.ct,Attr:W.cu,CSSRuleList:W.h_,ClientRect:W.dR,DOMRect:W.dR,GamepadList:W.hd,NamedNodeMap:W.dX,MozNamedAttrMap:W.dX,SpeechRecognitionResultList:W.hx,StyleSheetList:W.hE,SVGLength:P.b1,SVGLengthList:P.eQ,SVGNumber:P.b5,SVGNumberList:P.f4,SVGPointList:P.jf,SVGScriptElement:P.cg,SVGStringList:P.fs,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,SVGTransform:P.b7,SVGTransformList:P.fE,AudioBuffer:P.i7,AudioParamMap:P.ev,AudioTrackList:P.ew,AudioContext:P.bg,webkitAudioContext:P.bg,BaseAudioContext:P.bg,OfflineAudioContext:P.f5,WebGL2RenderingContext:P.cf,SQLResultSetRowList:P.fn})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cc.$nativeSuperclassTag="ArrayBufferView"
H.dY.$nativeSuperclassTag="ArrayBufferView"
H.dZ.$nativeSuperclassTag="ArrayBufferView"
H.bM.$nativeSuperclassTag="ArrayBufferView"
H.e_.$nativeSuperclassTag="ArrayBufferView"
H.e0.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
W.e3.$nativeSuperclassTag="EventTarget"
W.e4.$nativeSuperclassTag="EventTarget"
W.e6.$nativeSuperclassTag="EventTarget"
W.e7.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=T.qF
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
