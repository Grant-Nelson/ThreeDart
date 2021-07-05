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
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lK"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lK"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lK(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={lh:function lh(){},
lj:function(a){return new H.cZ("Field '"+a+"' has been assigned during initialization.")},
kO:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
jq:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
oF:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
ql:function(a,b,c){return a},
oj:function(a,b,c,d){if(t.gw.b(a))return new H.cP(a,b,c.L("@<0>").bc(d).L("cP<1,2>"))
return new H.aW(a,b,c.L("@<0>").bc(d).L("aW<1,2>"))},
iE:function(){return new P.cc("No element")},
oa:function(){return new P.cc("Too many elements")},
oD:function(a,b){H.fc(a,0,J.aO(a)-1,b)},
fc:function(a,b,c,d){if(c-b<=32)H.oC(a,b,c,d)
else H.oB(a,b,c,d)},
oC:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.cB(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.as()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
oB:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.a6(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a6(a4+a5,2),f=g-j,e=g+j,d=J.cB(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.as()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.as()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.as()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.as()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.as()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.as()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.as()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.as()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.as()
if(a2>0){s=a1
a1=a0
a0=s}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.J(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
H.fc(a3,a4,r-2,a6)
H.fc(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.J(a6.$2(d.h(a3,r),b),0);)++r
for(;J.J(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}H.fc(a3,r,q,a6)}else H.fc(a3,r,q,a6)},
cZ:function cZ(a){this.a=a},
r:function r(a){this.a=a},
n:function n(){},
d3:function d3(){},
be:function be(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aW:function aW(a,b,c){this.a=a
this.b=b
this.$ti=c},
cP:function cP(a,b,c){this.a=a
this.b=b
this.$ti=c},
eM:function eM(a,b){this.a=null
this.b=a
this.c=b},
d7:function d7(a,b,c){this.a=a
this.b=b
this.$ti=c},
b3:function b3(a,b,c){this.a=a
this.b=b
this.$ti=c},
fP:function fP(a,b){this.a=a
this.b=b},
cS:function cS(){},
fH:function fH(){},
ck:function ck(){},
o1:function(){throw H.c(P.C("Cannot modify unmodifiable Map"))},
no:function(a){var s,r=H.nn(a)
if(r!=null)return r
s="minified:"+a
return s},
nh:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
x:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cD(a)
return s},
dj:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
mg:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
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
dk:function(a){return H.om(a)},
om:function(a){var s,r,q,p
if(a instanceof P.P)return H.an(H.b5(a),null)
if(J.ec(a)===C.U||t.ak.b(a)){s=C.t(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.an(H.b5(a),null)},
on:function(){if(!!self.location)return self.location.href
return null},
mf:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
ov:function(a){var s,r,q,p=H.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.p)(a),++r){q=a[r]
if(!H.hW(q))throw H.c(H.eb(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aY(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.eb(q))}return H.mf(p)},
mh:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.hW(q))throw H.c(H.eb(q))
if(q<0)throw H.c(H.eb(q))
if(q>65535)return H.ov(a)}return H.mf(a)},
ow:function(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
at:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.aY(s,10)|55296)>>>0,s&1023|56320)}}throw H.c(P.a7(a,0,1114111,null,null))},
c7:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ou:function(a){var s=H.c7(a).getFullYear()+0
return s},
os:function(a){var s=H.c7(a).getMonth()+1
return s},
oo:function(a){var s=H.c7(a).getDate()+0
return s},
op:function(a){var s=H.c7(a).getHours()+0
return s},
or:function(a){var s=H.c7(a).getMinutes()+0
return s},
ot:function(a){var s=H.c7(a).getSeconds()+0
return s},
oq:function(a){var s=H.c7(a).getMilliseconds()+0
return s},
nf:function(a){throw H.c(H.eb(a))},
d:function(a,b){if(a==null)J.aO(a)
throw H.c(H.cz(a,b))},
cz:function(a,b){var s,r="index"
if(!H.hW(b))return new P.aA(!0,b,r,null)
s=J.aO(a)
if(b<0||b>=s)return P.O(b,a,r,null,s)
return P.f7(b,r)},
qq:function(a,b,c){if(a>c)return P.a7(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a7(b,a,c,"end",null)
return new P.aA(!0,b,"end",null)},
eb:function(a){return new P.aA(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.eX()
s=new Error()
s.dartException=a
r=H.qM
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qM:function(){return J.cD(this.dartException)},
i:function(a){throw H.c(a)},
p:function(a){throw H.c(P.aE(a))},
b1:function(a){var s,r,q,p,o,n
a=H.nk(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jB(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
jC:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mt:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
li:function(a,b){var s=b==null,r=s?null:b.method
return new H.eG(a,r,s?null:b.receiver)},
ai:function(a){if(a==null)return new H.j9(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bN(a,a.dartException)
return H.qh(a)},
bN:function(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
qh:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aY(r,16)&8191)===10)switch(q){case 438:return H.bN(a,H.li(H.x(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.x(s)+" (Error "+q+")"
return H.bN(a,new H.di(p,e))}}if(a instanceof TypeError){o=$.ns()
n=$.nt()
m=$.nu()
l=$.nv()
k=$.ny()
j=$.nz()
i=$.nx()
$.nw()
h=$.nB()
g=$.nA()
f=o.ap(s)
if(f!=null)return H.bN(a,H.li(s,f))
else{f=n.ap(s)
if(f!=null){f.method="call"
return H.bN(a,H.li(s,f))}else{f=m.ap(s)
if(f==null){f=l.ap(s)
if(f==null){f=k.ap(s)
if(f==null){f=j.ap(s)
if(f==null){f=i.ap(s)
if(f==null){f=l.ap(s)
if(f==null){f=h.ap(s)
if(f==null){f=g.ap(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bN(a,new H.di(s,f==null?e:f.method))}}return H.bN(a,new H.fG(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.dq()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bN(a,new P.aA(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.dq()
return a},
lN:function(a){var s
if(a==null)return new H.hu(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.hu(a)},
qs:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
qA:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.f("Unsupported number of arguments for wrapped closure"))},
cy:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qA)
a.$identity=s
return s},
o0:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.fh().constructor.prototype):Object.create(new H.bS(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aQ
if(typeof r!=="number")return r.W()
$.aQ=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.m0(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.nX(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.m0(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
nX:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.ne,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.nV:H.nU
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
nY:function(a,b,c,d){var s=H.m_
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
m0:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.o_(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nY(r,!p,s,b)
if(r===0){p=$.aQ
if(typeof p!=="number")return p.W()
$.aQ=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.cE
return new Function(p+(o==null?$.cE=H.i9("self"):o)+";return "+n+"."+H.x(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aQ
if(typeof p!=="number")return p.W()
$.aQ=p+1
m+=p
p="return function("+m+"){return this."
o=$.cE
return new Function(p+(o==null?$.cE=H.i9("self"):o)+"."+H.x(s)+"("+m+");}")()},
nZ:function(a,b,c,d){var s=H.m_,r=H.nW
switch(b?-1:a){case 0:throw H.c(new H.fa("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
o_:function(a,b){var s,r,q,p,o,n,m,l=$.cE
if(l==null)l=$.cE=H.i9("self")
s=$.lZ
if(s==null)s=$.lZ=H.i9("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.nZ(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.x(r)+"(this."+s+");"
n=$.aQ
if(typeof n!=="number")return n.W()
$.aQ=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.x(r)+"(this."+s+", "+m+");"
n=$.aQ
if(typeof n!=="number")return n.W()
$.aQ=n+1
return new Function(o+n+"}")()},
lK:function(a,b,c,d,e,f,g){return H.o0(a,b,c,d,!!e,!!f,g)},
nU:function(a,b){return H.hI(v.typeUniverse,H.b5(a.a),b)},
nV:function(a,b){return H.hI(v.typeUniverse,H.b5(a.c),b)},
m_:function(a){return a.a},
nW:function(a){return a.c},
i9:function(a){var s,r,q,p=new H.bS("self","target","receiver","name"),o=J.lg(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.bQ("Field name "+a+" not found."))},
qK:function(a){throw H.c(new P.er(a))},
qu:function(a){return v.getIsolateTag(a)},
qL:function(a){return H.i(new H.cZ(a))},
rT:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qD:function(a){var s,r,q,p,o,n=$.nd.$1(a),m=$.kM[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kT[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.n7.$2(a,n)
if(q!=null){m=$.kM[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kT[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.l2(s)
$.kM[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kT[n]=s
return s}if(p==="-"){o=H.l2(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.ni(a,s)
if(p==="*")throw H.c(P.jF(n))
if(v.leafTags[n]===true){o=H.l2(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.ni(a,s)},
ni:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lP(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
l2:function(a){return J.lP(a,!1,null,!!a.$iA)},
qF:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.l2(s)
else return J.lP(s,c,null,null)},
qy:function(){if(!0===$.lO)return
$.lO=!0
H.qz()},
qz:function(){var s,r,q,p,o,n,m,l
$.kM=Object.create(null)
$.kT=Object.create(null)
H.qx()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.nj.$1(o)
if(n!=null){m=H.qF(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qx:function(){var s,r,q,p,o,n,m=C.J()
m=H.cx(C.K,H.cx(C.L,H.cx(C.u,H.cx(C.u,H.cx(C.M,H.cx(C.N,H.cx(C.O(C.t),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.nd=new H.kP(p)
$.n7=new H.kQ(o)
$.nj=new H.kR(n)},
cx:function(a,b){return a(b)||b},
oe:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.a6("Illegal RegExp pattern ("+String(n)+")",a,null))},
nl:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qr:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nk:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lR:function(a,b,c){var s=H.qJ(a,b,c)
return s},
qJ:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nk(b),'g'),H.qr(c))},
cJ:function cJ(){},
cK:function cK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jB:function jB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
di:function di(a,b){this.a=a
this.b=b},
eG:function eG(a,b,c){this.a=a
this.b=b
this.c=c},
fG:function fG(a){this.a=a},
j9:function j9(a){this.a=a},
hu:function hu(a){this.a=a
this.b=null},
bx:function bx(){},
fo:function fo(){},
fh:function fh(){},
bS:function bS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fa:function fa(a){this.a=a},
W:function W(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iG:function iG(a){this.a=a},
iJ:function iJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d0:function d0(a,b){this.a=a
this.$ti=b},
eK:function eK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
eF:function eF(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cv:function(a){return a},
b4:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cz(b,a))},
pv:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.qq(a,b,c))
return b},
dd:function dd(){},
a_:function a_(){},
c5:function c5(){},
bE:function bE(){},
de:function de(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
df:function df(){},
bF:function bF(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
mn:function(a,b){var s=b.c
return s==null?b.c=H.lA(a,b.z,!0):s},
mm:function(a,b){var s=b.c
return s==null?b.c=H.e1(a,"m6",[b.z]):s},
mo:function(a){var s=a.y
if(s===6||s===7||s===8)return H.mo(a.z)
return s===11||s===12},
oz:function(a){return a.cy},
lM:function(a){return H.lB(v.typeUniverse,a,!1)},
bp:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bp(a,s,a0,a1)
if(r===s)return b
return H.mR(a,r,!0)
case 7:s=b.z
r=H.bp(a,s,a0,a1)
if(r===s)return b
return H.lA(a,r,!0)
case 8:s=b.z
r=H.bp(a,s,a0,a1)
if(r===s)return b
return H.mQ(a,r,!0)
case 9:q=b.Q
p=H.ea(a,q,a0,a1)
if(p===q)return b
return H.e1(a,b.z,p)
case 10:o=b.z
n=H.bp(a,o,a0,a1)
m=b.Q
l=H.ea(a,m,a0,a1)
if(n===o&&l===m)return b
return H.ly(a,n,l)
case 11:k=b.z
j=H.bp(a,k,a0,a1)
i=b.Q
h=H.qe(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mP(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.ea(a,g,a0,a1)
o=b.z
n=H.bp(a,o,a0,a1)
if(f===g&&n===o)return b
return H.lz(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.i1("Attempted to substitute unexpected RTI kind "+c))}},
ea:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bp(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
qf:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bp(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
qe:function(a,b,c,d){var s,r=b.a,q=H.ea(a,r,c,d),p=b.b,o=H.ea(a,p,c,d),n=b.c,m=H.qf(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.h6()
s.a=q
s.b=o
s.c=m
return s},
b:function(a,b){a[v.arrayRti]=b
return a},
qm:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.ne(s)
return a.$S()}return null},
ng:function(a,b){var s
if(H.mo(b))if(a instanceof H.bx){s=H.qm(a)
if(s!=null)return s}return H.b5(a)},
b5:function(a){var s
if(a instanceof P.P){s=a.$ti
return s!=null?s:H.lG(a)}if(Array.isArray(a))return H.ku(a)
return H.lG(J.ec(a))},
ku:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
S:function(a){var s=a.$ti
return s!=null?s:H.lG(a)},
lG:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pD(a,s)},
pD:function(a,b){var s=a instanceof H.bx?a.__proto__.__proto__.constructor:b,r=H.pd(v.typeUniverse,s.name)
b.$ccache=r
return r},
ne:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lB(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pC:function(a){var s,r,q,p=this
if(p===t.K)return H.e7(p,a,H.pH)
if(!H.b6(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.e7(p,a,H.pK)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.hW
else if(r===t.gR||r===t.H)q=H.pG
else if(r===t.N)q=H.pI
else q=r===t.cJ?H.kB:null
if(q!=null)return H.e7(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.qB)){p.r="$i"+s
return H.e7(p,a,H.pJ)}}else if(s===7)return H.e7(p,a,H.pA)
return H.e7(p,a,H.py)},
e7:function(a,b,c){a.b=c
return a.b(b)},
pB:function(a){var s,r=this,q=H.px
if(!H.b6(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.pu
else if(r===t.K)q=H.pt
else{s=H.ed(r)
if(s)q=H.pz}r.a=q
return r.a(a)},
lJ:function(a){var s,r=a.y
if(!H.b6(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&H.lJ(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
py:function(a){var s=this
if(a==null)return H.lJ(s)
return H.T(v.typeUniverse,H.ng(a,s),null,s,null)},
pA:function(a){if(a==null)return!0
return this.z.b(a)},
pJ:function(a){var s,r=this
if(a==null)return H.lJ(r)
s=r.r
if(a instanceof P.P)return!!a[s]
return!!J.ec(a)[s]},
px:function(a){var s,r=this
if(a==null){s=H.ed(r)
if(s)return a}else if(r.b(a))return a
H.n1(a,r)},
pz:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.n1(a,s)},
n1:function(a,b){throw H.c(H.p3(H.mI(a,H.ng(a,b),H.an(b,null))))},
mI:function(a,b,c){var s=P.is(a),r=H.an(b==null?H.b5(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
p3:function(a){return new H.e_("TypeError: "+a)},
a8:function(a,b){return new H.e_("TypeError: "+H.mI(a,null,b))},
pH:function(a){return a!=null},
pt:function(a){if(a!=null)return a
throw H.c(H.a8(a,"Object"))},
pK:function(a){return!0},
pu:function(a){return a},
kB:function(a){return!0===a||!1===a},
n_:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.a8(a,"bool"))},
rH:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a8(a,"bool"))},
rG:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a8(a,"bool?"))},
rI:function(a){if(typeof a=="number")return a
throw H.c(H.a8(a,"double"))},
rK:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a8(a,"double"))},
rJ:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a8(a,"double?"))},
hW:function(a){return typeof a=="number"&&Math.floor(a)===a},
hV:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.a8(a,"int"))},
rM:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a8(a,"int"))},
rL:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a8(a,"int?"))},
pG:function(a){return typeof a=="number"},
rN:function(a){if(typeof a=="number")return a
throw H.c(H.a8(a,"num"))},
rP:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a8(a,"num"))},
rO:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a8(a,"num?"))},
pI:function(a){return typeof a=="string"},
kv:function(a){if(typeof a=="string")return a
throw H.c(H.a8(a,"String"))},
rR:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a8(a,"String"))},
rQ:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a8(a,"String?"))},
qa:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.an(a[q],b)
return s},
n2:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
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
if(l===9){p=H.qg(a.z)
o=a.Q
return o.length!==0?p+("<"+H.qa(o,b)+">"):p}if(l===11)return H.n2(a,b,null)
if(l===12)return H.n2(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
qg:function(a){var s,r=H.nn(a)
if(r!=null)return r
s="minified:"+a
return s},
mS:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
pd:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lB(a,b,!1)
else if(typeof m=="number"){s=m
r=H.e2(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.e1(a,b,q)
n[b]=o
return o}else return m},
pb:function(a,b){return H.mZ(a.tR,b)},
pa:function(a,b){return H.mZ(a.eT,b)},
lB:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mN(H.mL(a,null,b,c))
r.set(b,s)
return s},
hI:function(a,b,c){var s,r,q=b.ch
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
q=H.ly(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bo:function(a,b){b.a=H.pB
b.b=H.pC
return b},
e2:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.au(null,null)
s.y=b
s.cy=c
r=H.bo(a,s)
a.eC.set(c,r)
return r},
mR:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.p8(a,b,r,c)
a.eC.set(r,s)
return s},
p8:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b6(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.au(null,null)
q.y=6
q.z=b
q.cy=c
return H.bo(a,q)},
lA:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.p7(a,b,r,c)
a.eC.set(r,s)
return s},
p7:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b6(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.ed(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.ed(q.z))return q
else return H.mn(a,b)}}p=new H.au(null,null)
p.y=7
p.z=b
p.cy=c
return H.bo(a,p)},
mQ:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.p5(a,b,r,c)
a.eC.set(r,s)
return s},
p5:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b6(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.e1(a,"m6",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.au(null,null)
q.y=8
q.z=b
q.cy=c
return H.bo(a,q)},
p9:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.au(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bo(a,s)
a.eC.set(q,r)
return r},
hH:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
p4:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
e1:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hH(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.au(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bo(a,r)
a.eC.set(p,q)
return q},
ly:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hH(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.au(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bo(a,o)
a.eC.set(q,n)
return n},
mP:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hH(m)
if(j>0){s=l>0?",":""
r=H.hH(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.p4(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.au(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bo(a,o)
a.eC.set(q,r)
return r},
lz:function(a,b,c,d){var s,r=b.cy+("<"+H.hH(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.p6(a,b,c,r,d)
a.eC.set(r,s)
return s},
p6:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bp(a,b,r,0)
m=H.ea(a,c,r,0)
return H.lz(a,n,m,c!==m)}}l=new H.au(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bo(a,l)},
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
case 59:g.push(H.bn(a.u,a.e,g.pop()))
break
case 94:g.push(H.p9(a.u,g.pop()))
break
case 35:g.push(H.e2(a.u,5,"#"))
break
case 64:g.push(H.e2(a.u,2,"@"))
break
case 126:g.push(H.e2(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.lx(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.e1(p,n,o))
else{m=H.bn(p,a.e,n)
switch(m.y){case 11:g.push(H.lz(p,m,o,a.n))
break
default:g.push(H.ly(p,m,o))
break}}break
case 38:H.oZ(a,g)
break
case 42:p=a.u
g.push(H.mR(p,H.bn(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.lA(p,H.bn(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.mQ(p,H.bn(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.h6()
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
H.lx(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.mP(p,H.bn(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.lx(a.u,a.e,o)
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
return H.bn(a.u,a.e,i)},
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
if(n==null)H.i('No "'+p+'" in "'+H.oz(o)+'"')
d.push(H.hI(s,o,n))}else d.push(p)
return m},
oZ:function(a,b){var s=b.pop()
if(0===s){b.push(H.e2(a.u,1,"0&"))
return}if(1===s){b.push(H.e2(a.u,4,"1&"))
return}throw H.c(P.i1("Unexpected extended operation "+H.x(s)))},
bn:function(a,b,c){if(typeof c=="string")return H.e1(a,c,a.sEA)
else if(typeof c=="number")return H.p_(a,b,c)
else return c},
lx:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bn(a,b,c[s])},
p0:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bn(a,b,c[s])},
p_:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.i1("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.i1("Bad index "+c+" for "+b.i(0)))},
T:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.b6(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.b6(b))return!1
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
if(p===6){s=H.mn(a,d)
return H.T(a,b,c,s,e)}if(r===8){if(!H.T(a,b.z,c,d,e))return!1
return H.T(a,H.mm(a,b),c,d,e)}if(r===7){s=H.T(a,t.P,c,d,e)
return s&&H.T(a,b.z,c,d,e)}if(p===8){if(H.T(a,b,c,d.z,e))return!0
return H.T(a,b,c,H.mm(a,d),e)}if(p===7){s=H.T(a,b,c,t.P,e)
return s||H.T(a,b,c,d.z,e)}if(q)return!1
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
for(p=0;p<q;++p)if(!H.T(a,H.hI(a,b,l[p]),c,r[p],e))return!1
return!0},
ed:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b6(a))if(r!==7)if(!(r===6&&H.ed(a.z)))s=r===8&&H.ed(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qB:function(a){var s
if(!H.b6(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
b6:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
mZ:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
au:function au(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
h6:function h6(){this.c=this.b=this.a=null},
h2:function h2(){},
e_:function e_(a){this.a=a},
nn:function(a){return v.mangledGlobalNames[a]},
qG:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lP:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kN:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.lO==null){H.qy()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.jF("Return interceptor for "+H.x(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.k6
if(o==null)o=$.k6=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.qD(a)
if(p!=null)return p
if(typeof a=="function")return C.W
s=Object.getPrototypeOf(a)
if(s==null)return C.B
if(s===Object.prototype)return C.B
if(typeof q=="function"){o=$.k6
if(o==null)o=$.k6=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
ob:function(a,b){if(a<0||a>4294967295)throw H.c(P.a7(a,0,4294967295,"length",null))
return J.oc(new Array(a),b)},
lf:function(a,b){if(a<0)throw H.c(P.bQ("Length must be a non-negative integer: "+a))
return H.b(new Array(a),b.L("w<0>"))},
oc:function(a,b){return J.lg(H.b(a,b.L("w<0>")))},
lg:function(a){a.fixed$length=Array
return a},
od:function(a,b){return J.nN(a,b)},
ec:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cX.prototype
return J.eE.prototype}if(typeof a=="string")return J.bc.prototype
if(a==null)return J.cY.prototype
if(typeof a=="boolean")return J.eD.prototype
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.P)return a
return J.kN(a)},
cB:function(a){if(typeof a=="string")return J.bc.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.P)return a
return J.kN(a)},
hX:function(a){if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.P)return a
return J.kN(a)},
nc:function(a){if(typeof a=="number")return J.c2.prototype
if(typeof a=="string")return J.bc.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bJ.prototype
return a},
qt:function(a){if(typeof a=="string")return J.bc.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bJ.prototype
return a},
aM:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.P)return a
return J.kN(a)},
J:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ec(a).q(a,b)},
lU:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nc(a).M(a,b)},
lV:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nh(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cB(a).h(a,b)},
l7:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.nh(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.hX(a).m(a,b,c)},
nL:function(a,b,c){return J.aM(a).h9(a,b,c)},
nM:function(a,b,c,d){return J.aM(a).hu(a,b,c,d)},
nN:function(a,b){return J.nc(a).an(a,b)},
i_:function(a,b){return J.hX(a).J(a,b)},
eh:function(a,b){return J.hX(a).E(a,b)},
nO:function(a){return J.aM(a).gae(a)},
nP:function(a){return J.aM(a).gbt(a)},
nQ:function(a){return J.aM(a).gdz(a)},
l8:function(a){return J.ec(a).gF(a)},
az:function(a){return J.hX(a).gP(a)},
aO:function(a){return J.cB(a).gl(a)},
lW:function(a){return J.hX(a).ip(a)},
nR:function(a,b){return J.aM(a).is(a,b)},
nS:function(a){return J.qt(a).iB(a)},
cD:function(a){return J.ec(a).i(a)},
a:function a(){},
eD:function eD(){},
cY:function cY(){},
bd:function bd(){},
f1:function f1(){},
bJ:function bJ(){},
aU:function aU(){},
w:function w(a){this.$ti=a},
iF:function iF(a){this.$ti=a},
aa:function aa(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c2:function c2(){},
cX:function cX(){},
eE:function eE(){},
bc:function bc(){}},P={
oP:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.qi()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cy(new P.k2(q),1)).observe(s,{childList:true})
return new P.k1(q,s,r)}else if(self.setImmediate!=null)return P.qj()
return P.qk()},
oQ:function(a){self.scheduleImmediate(H.cy(new P.k3(a),0))},
oR:function(a){self.setImmediate(H.cy(new P.k4(a),0))},
oS:function(a){P.lr(C.m,a)},
lr:function(a,b){var s=C.c.a6(a.a,1000)
return P.p1(s<0?0:s,b)},
ms:function(a,b){var s=C.c.a6(a.a,1000)
return P.p2(s<0?0:s,b)},
p1:function(a,b){var s=new P.dZ()
s.eK(a,b)
return s},
p2:function(a,b){var s=new P.dZ()
s.eL(a,b)
return s},
rE:function(a){return new P.ct(a,1)},
oV:function(){return C.a5},
oW:function(a){return new P.ct(a,3)},
pM:function(a,b){return new P.dW(a,b.L("dW<0>"))},
q7:function(){var s,r
for(s=$.cw;s!=null;s=$.cw){$.e9=null
r=s.b
$.cw=r
if(r==null)$.e8=null
s.a.$0()}},
qd:function(){$.lH=!0
try{P.q7()}finally{$.e9=null
$.lH=!1
if($.cw!=null)$.lT().$1(P.n8())}},
qb:function(a){var s=new P.fQ(a),r=$.e8
if(r==null){$.cw=$.e8=s
if(!$.lH)$.lT().$1(P.n8())}else $.e8=r.b=s},
qc:function(a){var s,r,q,p=$.cw
if(p==null){P.qb(a)
$.e9=$.e8
return}s=new P.fQ(a)
r=$.e9
if(r==null){s.b=p
$.cw=$.e9=s}else{q=r.b
s.b=q
$.e9=r.b=s
if(q==null)$.e8=s}},
mr:function(a,b){var s=$.aL
if(s===C.f)return P.lr(a,b)
return P.lr(a,s.hE(b))},
oH:function(a,b){var s=$.aL
if(s===C.f)return P.ms(a,b)
return P.ms(a,s.dr(b,t.aF))},
n4:function(a,b,c,d,e){P.qc(new P.kE(d,e))},
q8:function(a,b,c,d){var s,r=$.aL
if(r===c)return d.$0()
$.aL=c
s=r
try{r=d.$0()
return r}finally{$.aL=s}},
q9:function(a,b,c,d,e){var s,r=$.aL
if(r===c)return d.$1(e)
$.aL=c
s=r
try{r=d.$1(e)
return r}finally{$.aL=s}},
k2:function k2(a){this.a=a},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
k3:function k3(a){this.a=a},
k4:function k4(a){this.a=a},
dZ:function dZ(){this.c=0},
kl:function kl(a,b){this.a=a
this.b=b},
kk:function kk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ct:function ct(a,b){this.a=a
this.b=b},
bL:function bL(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dW:function dW(a,b){this.a=a
this.$ti=b},
fQ:function fQ(a){this.a=a
this.b=null},
cd:function cd(){},
fj:function fj(){},
ks:function ks(){},
kE:function kE(a,b){this.a=a
this.b=b},
k9:function k9(){},
ka:function ka(a,b){this.a=a
this.b=b},
kb:function kb(a,b,c){this.a=a
this.b=b
this.c=c},
of:function(a,b){return new H.W(a.L("@<0>").bc(b).L("W<1,2>"))},
og:function(a,b,c){return H.qs(a,new H.W(b.L("@<0>").bc(c).L("W<1,2>")))},
U:function(a,b){return new H.W(a.L("@<0>").bc(b).L("W<1,2>"))},
d1:function(a){return new P.dK(a.L("dK<0>"))},
lw:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oX:function(a,b){var s=new P.dL(a,b)
s.c=a.e
return s},
o9:function(a,b,c){var s,r
if(P.lI(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.b([],t.s)
$.ah.push(a)
try{P.pL(a,s)}finally{if(0>=$.ah.length)return H.d($.ah,-1)
$.ah.pop()}r=P.mp(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
le:function(a,b,c){var s,r
if(P.lI(a))return b+"..."+c
s=new P.Z(b)
$.ah.push(a)
try{r=s
r.a=P.mp(r.a,a,", ")}finally{if(0>=$.ah.length)return H.d($.ah,-1)
$.ah.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lI:function(a){var s,r
for(s=$.ah.length,r=0;r<s;++r)if(a===$.ah[r])return!0
return!1},
pL:function(a,b){var s,r,q,p,o,n,m,l=a.gP(a),k=0,j=0
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
oh:function(a,b,c){var s=P.of(b,c)
a.E(0,new P.iK(s,b,c))
return s},
m8:function(a,b){var s,r,q=P.d1(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.p)(a),++r)q.n(0,b.a(a[r]))
return q},
lk:function(a){var s,r={}
if(P.lI(a))return"{...}"
s=new P.Z("")
try{$.ah.push(a)
s.a+="{"
r.a=!0
J.eh(a,new P.iO(r,s))
s.a+="}"}finally{if(0>=$.ah.length)return H.d($.ah,-1)
$.ah.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dK:function dK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
k8:function k8(a){this.a=a
this.c=this.b=null},
dL:function dL(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cW:function cW(){},
iK:function iK(a,b,c){this.a=a
this.b=b
this.c=c},
d2:function d2(){},
j:function j(){},
d5:function d5(){},
iO:function iO(a,b){this.a=a
this.b=b},
L:function L(){},
hJ:function hJ(){},
d6:function d6(){},
cl:function cl(a,b){this.a=a
this.$ti=b},
dm:function dm(){},
dS:function dS(){},
dM:function dM(){},
e3:function e3(){},
e5:function e5(){},
oK:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.oL(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
oL:function(a,b,c,d){var s=a?$.nD():$.nC()
if(s==null)return null
if(0===c&&d===b.length)return P.mz(s,b)
return P.mz(s,b.subarray(c,P.bi(c,d,b.length)))},
mz:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.ai(r)}return null},
lY:function(a,b,c,d,e,f){if(C.c.bp(f,4)!==0)throw H.c(P.a6("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a6("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a6("Invalid base64 padding, more than two '=' characters",a,b))},
ps:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
pr:function(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.cB(a),r=0;r<p;++r){q=s.h(a,b+r)
o[r]=(q&4294967040)>>>0!==0?255:q}return o},
jP:function jP(){},
jO:function jO(){},
i6:function i6(){},
i7:function i7(){},
eo:function eo(){},
eq:function eq(){},
ip:function ip(){},
iD:function iD(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
iC:function iC(a){this.a=a},
jM:function jM(){},
jQ:function jQ(){},
kq:function kq(a){this.b=0
this.c=a},
jN:function jN(a){this.a=a},
kp:function kp(a){this.a=a
this.b=16
this.c=0},
kS:function(a,b){var s=H.mg(a,b)
if(s!=null)return s
throw H.c(P.a6(a,null,null))},
o6:function(a){if(a instanceof H.bx)return a.i(0)
return"Instance of '"+H.dk(a)+"'"},
eL:function(a,b,c,d){var s,r=c?J.lf(a,d):J.ob(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
iL:function(a,b,c){var s,r=H.b([],c.L("w<0>"))
for(s=J.az(a);s.u();)r.push(s.gB(s))
if(b)return r
return J.lg(r)},
oi:function(a,b,c){var s,r,q=J.lf(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
fl:function(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=P.bi(b,c,r)
return H.mh(b>0||c<r?s.slice(b,c):s)}if(t.bm.b(a))return H.ow(a,b,P.bi(b,c,a.length))
return P.oE(a,b,c)},
oE:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.a7(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.a7(c,b,a.length,o,o))
r=J.az(a)
for(q=0;q<b;++q)if(!r.u())throw H.c(P.a7(b,0,q,o,o))
p=[]
if(s)for(;r.u();)p.push(r.gB(r))
else for(q=b;q<c;++q){if(!r.u())throw H.c(P.a7(c,b,q,o,o))
p.push(r.gB(r))}return H.mh(p)},
ox:function(a){return new H.eF(a,H.oe(a,!1,!0,!1,!1,!1))},
mp:function(a,b,c){var s=J.az(b)
if(!s.u())return a
if(c.length===0){do a+=H.x(s.gB(s))
while(s.u())}else{a+=H.x(s.gB(s))
for(;s.u();)a=a+c+H.x(s.gB(s))}return a},
mv:function(){var s=H.on()
if(s!=null)return P.oJ(s)
throw H.c(P.C("'Uri.base' is not supported"))},
ko:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.nJ().b
s=s.test(b)}else s=!1
if(s)return b
r=c.ghT().cc(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.at(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
o2:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
o3:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
et:function(a){if(a>=10)return""+a
return"0"+a},
m2:function(a){return new P.bz(1000*a)},
is:function(a){if(typeof a=="number"||H.kB(a)||null==a)return J.cD(a)
if(typeof a=="string")return JSON.stringify(a)
return P.o6(a)},
i1:function(a){return new P.ek(a)},
bQ:function(a){return new P.aA(!1,null,null,a)},
f7:function(a,b){return new P.dl(null,null,!0,a,b,"Value not in range")},
a7:function(a,b,c,d,e){return new P.dl(b,c,!0,a,d,"Invalid value")},
bi:function(a,b,c){if(0>a||a>c)throw H.c(P.a7(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.a7(b,a,c,"end",null))
return b}return c},
mi:function(a,b){if(a<0)throw H.c(P.a7(a,0,null,b,null))
return a},
O:function(a,b,c,d,e){var s=e==null?J.aO(b):e
return new P.eB(s,!0,a,c,"Index out of range")},
C:function(a){return new P.fI(a)},
jF:function(a){return new P.fF(a)},
lp:function(a){return new P.cc(a)},
aE:function(a){return new P.ep(a)},
f:function(a){return new P.h3(a)},
a6:function(a,b,c){return new P.iy(a,b,c)},
lQ:function(a){H.qG(a)},
oJ:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.D(a5,4)^58)*3|C.a.D(a5,0)^100|C.a.D(a5,1)^97|C.a.D(a5,2)^116|C.a.D(a5,3)^97)>>>0
if(s===0)return P.mu(a4<a4?C.a.v(a5,0,a4):a5,5,a3).gel()
else if(s===32)return P.mu(C.a.v(a5,5,a4),0,a3).gel()}r=P.eL(8,0,!1,t.S)
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
k=!1}else{if(!(m<a4&&m===n+2&&C.a.ac(a5,"..",n)))h=m>n+2&&C.a.ac(a5,"/..",m-3)
else h=!0
if(h){j=a3
k=!1}else{if(q===4)if(C.a.ac(a5,"file",0)){if(p<=0){if(!C.a.ac(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+C.a.v(a5,n,a4)
q-=0
i=s-0
m+=i
l+=i
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=C.a.b3(a5,n,m,"/");++a4
m=f}j="file"}else if(C.a.ac(a5,"http",0)){if(i&&o+3===n&&C.a.ac(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=C.a.b3(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&C.a.ac(a5,"https",0)){if(i&&o+4===n&&C.a.ac(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=C.a.b3(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}else j=a3
if(k){if(a4<a5.length){a5=C.a.v(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new P.ho(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=P.pl(a5,0,q)
else{if(q===0)P.cu(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?P.pm(a5,d,p-1):""
b=P.pi(a5,p,o,!1)
i=o+1
if(i<n){a=H.mg(C.a.v(a5,i,n),a3)
a0=P.pk(a==null?H.i(P.a6("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.pj(a5,n,m,a3,j,b!=null)
a2=m<l?P.lD(a5,m+1,l,a3):a3
return new P.bM(j,c,b,a0,a1,a2,l<a4?P.ph(a5,l+1,a4):a3)},
mx:function(a){var s=t.N
return C.b.hZ(H.b(a.split("&"),t.s),P.U(s,s),new P.jK(C.e))},
oI:function(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jH(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=C.a.V(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=P.kS(C.a.v(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(q>=4)return H.d(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=P.kS(C.a.v(a,r,c),null)
if(o>255)k.$2(l,r)
if(q>=4)return H.d(j,q)
j[q]=o
return j},
mw:function(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.jI(a),c=new P.jJ(d,a)
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
l=C.b.gaE(s)
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
h+=2}else{e=C.c.aY(g,8)
if(h<0||h>=16)return H.d(j,h)
j[h]=e
e=h+1
if(e>=16)return H.d(j,e)
j[e]=g&255
h+=2}}return j},
mT:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cu:function(a,b,c){throw H.c(P.a6(c,a,b))},
pk:function(a,b){if(a!=null&&a===P.mT(b))return null
return a},
pi:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.V(a,b)===91){s=c-1
if(C.a.V(a,s)!==93)P.cu(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.pf(a,r,s)
if(q<s){p=q+1
o=P.mY(a,C.a.ac(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mw(a,r,q)
return C.a.v(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.V(a,n)===58){q=C.a.bx(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mY(a,C.a.ac(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mw(a,b,q)
return"["+C.a.v(a,b,q)+o+"]"}return P.po(a,b,c)},
pf:function(a,b,c){var s=C.a.bx(a,"%",b)
return s>=b&&s<c?s:c},
mY:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.Z(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.V(a,s)
if(p===37){o=P.lE(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.Z("")
m=i.a+=C.a.v(a,r,s)
if(n)o=C.a.v(a,s,s+3)
else if(o==="%")P.cu(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.Z("")
if(r<s){i.a+=C.a.v(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.V(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=C.a.v(a,r,s)
if(i==null){i=new P.Z("")
n=i}else n=i
n.a+=j
n.a+=P.lC(p)
s+=k
r=s}}}if(i==null)return C.a.v(a,b,c)
if(r<c)i.a+=C.a.v(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
po:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.V(a,s)
if(o===37){n=P.lE(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.Z("")
l=C.a.v(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.v(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.d(C.x,m)
m=(C.x[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.Z("")
if(r<s){q.a+=C.a.v(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.d(C.j,m)
m=(C.j[m]&1<<(o&15))!==0}else m=!1
if(m)P.cu(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.V(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=C.a.v(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.Z("")
m=q}else m=q
m.a+=l
m.a+=P.lC(o)
s+=j
r=s}}}}if(q==null)return C.a.v(a,b,c)
if(r<c){l=C.a.v(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
pl:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.mV(C.a.D(a,b)))P.cu(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.D(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.d(C.l,p)
p=(C.l[p]&1<<(q&15))!==0}else p=!1
if(!p)P.cu(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.v(a,b,c)
return P.pe(r?a.toLowerCase():a)},
pe:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
pm:function(a,b,c){return P.e4(a,b,c,C.Z,!1)},
pj:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.e4(a,b,c,C.y,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a1(s,"/"))s="/"+s
return P.pn(s,e,f)},
pn:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a1(a,"/"))return P.pp(a,!s||c)
return P.pq(a)},
lD:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.bQ("Both query and queryParameters specified"))
return P.e4(a,b,c,C.k,!0)}if(d==null)return null
s=new P.Z("")
r.a=""
d.E(0,new P.km(new P.kn(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
ph:function(a,b,c){return P.e4(a,b,c,C.k,!0)},
lE:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.V(a,b+1)
r=C.a.V(a,n)
q=H.kO(s)
p=H.kO(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aY(o,4)
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.at(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.v(a,b,b+3).toUpperCase()
return null},
lC:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=C.a.D(k,a>>>4)
s[2]=C.a.D(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=C.c.hk(a,6*q)&63|r
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
o+=3}}return P.fl(s,0,null)},
e4:function(a,b,c,d,e){var s=P.mX(a,b,c,d,e)
return s==null?C.a.v(a,b,c):s},
mX:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.V(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.d(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lE(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.d(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.cu(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.V(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=P.lC(o)}}if(p==null){p=new P.Z("")
n=p}else n=p
n.a+=C.a.v(a,q,r)
n.a+=H.x(m)
if(typeof l!=="number")return H.nf(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.v(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mW:function(a){if(C.a.a1(a,"."))return!0
return C.a.dR(a,"/.")!==-1},
pq:function(a){var s,r,q,p,o,n,m
if(!P.mW(a))return a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.J(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.d(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
pp:function(a,b){var s,r,q,p,o,n
if(!P.mW(a))return!b?P.mU(a):a
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
r=P.mU(s[0])
if(0>=s.length)return H.d(s,0)
s[0]=r}return C.b.j(s,"/")},
mU:function(a){var s,r,q,p=a.length
if(p>=2&&P.mV(C.a.D(a,0)))for(s=1;s<p;++s){r=C.a.D(a,s)
if(r===58)return C.a.v(a,0,s)+"%3A"+C.a.ai(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.d(C.l,q)
q=(C.l[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
pg:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.D(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.bQ("Invalid URL encoding"))}}return s},
lF:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.D(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.v(a,b,c)
else p=new H.r(C.a.v(a,b,c))}else{p=H.b([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.D(a,o)
if(r>127)throw H.c(P.bQ("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.bQ("Truncated URI"))
p.push(P.pg(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a4.cc(p)},
mV:function(a){var s=a|32
return 97<=s&&s<=122},
mu:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.b([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.D(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.a6(k,a,r))}}if(q<0&&r>b)throw H.c(P.a6(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.D(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaE(j)
if(p!==44||r!==n+7||!C.a.ac(a,"base64",n+1))throw H.c(P.a6("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.I.i7(0,a,m,s)
else{l=P.mX(a,m,s,C.k,!0)
if(l!=null)a=C.a.b3(a,m,s,l)}return new P.jG(a,j,c)},
pw:function(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="?",i="#",h=H.b(new Array(22),t.gN)
for(s=0;s<22;++s)h[s]=new Uint8Array(96)
r=new P.ky(h)
q=new P.kz()
p=new P.kA()
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
n5:function(a,b,c,d,e){var s,r,q,p,o,n,m=$.nK()
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
bz:function bz(a){this.a=a},
ik:function ik(){},
il:function il(){},
K:function K(){},
ek:function ek(a){this.a=a},
fy:function fy(){},
eX:function eX(){},
aA:function aA(a,b,c,d){var _=this
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
eB:function eB(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fI:function fI(a){this.a=a},
fF:function fF(a){this.a=a},
cc:function cc(a){this.a=a},
ep:function ep(a){this.a=a},
f_:function f_(){},
dq:function dq(){},
er:function er(a){this.a=a},
h3:function h3(a){this.a=a},
iy:function iy(a,b,c){this.a=a
this.b=b
this.c=c},
h:function h(){},
eC:function eC(){},
ae:function ae(){},
P:function P(){},
Z:function Z(a){this.a=a},
jK:function jK(a){this.a=a},
jH:function jH(a){this.a=a},
jI:function jI(a){this.a=a},
jJ:function jJ(a,b){this.a=a
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
kn:function kn(a,b){this.a=a
this.b=b},
km:function km(a){this.a=a},
jG:function jG(a,b,c){this.a=a
this.b=b
this.c=c},
ky:function ky(a){this.a=a},
kz:function kz(){},
kA:function kA(){},
ho:function ho(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fW:function fW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
qo:function(a){var s,r,q,p
if(t.x.b(a)){s=J.nQ(a)
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
return new P.e0(r,q,p)},
qn:function(a){if(a instanceof P.e0)return{data:a.a,height:a.b,width:a.c}
return a},
bq:function(a){var s,r,q,p,o
if(a==null)return null
s=P.U(t.N,t.A)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.p)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
n0:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.kB(a))return a
if(t.f.b(a))return P.n9(a)
if(t.r.b(a)){s=[]
J.eh(a,new P.kw(s))
a=s}return a},
n9:function(a){var s={}
J.eh(a,new P.kF(s))
return s},
kf:function kf(){},
kh:function kh(a,b){this.a=a
this.b=b},
ki:function ki(a,b){this.a=a
this.b=b},
e0:function e0(a,b,c){this.a=a
this.b=b
this.c=c},
kw:function kw(a){this.a=a},
kF:function kF(a){this.a=a},
kg:function kg(a,b){this.a=a
this.b=b},
ex:function ex(a,b){this.a=a
this.b=b},
iw:function iw(){},
ix:function ix(){},
hm:function hm(){},
ad:function ad(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aV:function aV(){},
eI:function eI(){},
b_:function b_(){},
eY:function eY(){},
ja:function ja(){},
c9:function c9(){},
fk:function fk(){},
o:function o(){},
b0:function b0(){},
fx:function fx(){},
ha:function ha(){},
hb:function hb(){},
hi:function hi(){},
hj:function hj(){},
hw:function hw(){},
hx:function hx(){},
hF:function hF(){},
hG:function hG(){},
i3:function i3(){},
em:function em(){},
i4:function i4(a){this.a=a},
en:function en(){},
b8:function b8(){},
eZ:function eZ(){},
fS:function fS(){},
c8:function c8(){},
ff:function ff(){},
hs:function hs(){},
ht:function ht(){}},W={
lX:function(){var s=document.createElement("a")
s.toString
return s},
l9:function(){var s=document.createElement("canvas")
s.toString
return s},
o5:function(a,b,c){var s=document.body
s.toString
s=new H.b3(new W.a5(C.p.ao(s,a,b,c)),new W.im(),t.ac.L("b3<j.E>"))
return t.h.a(s.gaQ(s))},
io:function(a){return"wheel"},
cQ:function(a){var s,r,q="element tag unavailable"
try{s=J.aM(a)
s.geh(a)
q=s.geh(a)}catch(r){H.ai(r)}return q},
o8:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.ai(s)}return q},
k7:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mK:function(a,b,c,d){var s=W.k7(W.k7(W.k7(W.k7(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
a2:function(a,b,c,d){var s=new W.dI(a,b,c==null?null:W.n6(new W.k5(c),t.aD),!1)
s.hr()
return s},
mJ:function(a){var s=W.lX(),r=window
s=new W.cs(new W.kc(s,r.location))
s.eD(a)
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
mO:function(){var s=t.N,r=P.m8(C.z,s),q=H.b(["TEMPLATE"],t.s)
s=new W.hA(r,P.d1(s),P.d1(s),P.d1(s),null)
s.eI(null,new H.d7(C.z,new W.kj(),t.dv),q,null)
return s},
n6:function(a,b){var s=$.aL
if(s===C.f)return a
return s.dr(a,b)},
v:function v(){},
i0:function i0(){},
ei:function ei(){},
ej:function ej(){},
bR:function bR(){},
bu:function bu(){},
bv:function bv(){},
bw:function bw(){},
cG:function cG(){},
aB:function aB(){},
ic:function ic(){},
I:function I(){},
cL:function cL(){},
id:function id(){},
ap:function ap(){},
aR:function aR(){},
ie:function ie(){},
ig:function ig(){},
ih:function ih(){},
ba:function ba(){},
ii:function ii(){},
cN:function cN(){},
cO:function cO(){},
ev:function ev(){},
ij:function ij(){},
fT:function fT(a,b){this.a=a
this.b=b},
E:function E(){},
im:function im(){},
l:function l(){},
e:function e(){},
aj:function aj(){},
bX:function bX(){},
ew:function ew(){},
ey:function ey(){},
aF:function aF(){},
iB:function iB(){},
bB:function bB(){},
bC:function bC(){},
bZ:function bZ(){},
c0:function c0(){},
bD:function bD(){},
iM:function iM(){},
j2:function j2(){},
c3:function c3(){},
eP:function eP(){},
j3:function j3(a){this.a=a},
eQ:function eQ(){},
j4:function j4(a){this.a=a},
aG:function aG(){},
eR:function eR(){},
ak:function ak(){},
a5:function a5(a){this.a=a},
t:function t(){},
dg:function dg(){},
aI:function aI(){},
f3:function f3(){},
f9:function f9(){},
jh:function jh(a){this.a=a},
fb:function fb(){},
av:function av(){},
fd:function fd(){},
aJ:function aJ(){},
fe:function fe(){},
aK:function aK(){},
fi:function fi(){},
jp:function jp(a){this.a=a},
al:function al(){},
bl:function bl(){},
dr:function dr(){},
fm:function fm(){},
fn:function fn(){},
cf:function cf(){},
aw:function aw(){},
ag:function ag(){},
fp:function fp(){},
fq:function fq(){},
jv:function jv(){},
ax:function ax(){},
bI:function bI(){},
fw:function fw(){},
jA:function jA(){},
b2:function b2(){},
jL:function jL(){},
fM:function fM(){},
bm:function bm(){},
cq:function cq(){},
cr:function cr(){},
fU:function fU(){},
dH:function dH(){},
h7:function h7(){},
dN:function dN(){},
hr:function hr(){},
hy:function hy(){},
fR:function fR(){},
h0:function h0(a){this.a=a},
ld:function ld(a,b){this.a=a
this.$ti=b},
dI:function dI(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
k5:function k5(a){this.a=a},
lv:function lv(a){this.$ti=a},
cs:function cs(a){this.a=a},
N:function N(){},
dh:function dh(a){this.a=a},
j7:function j7(a){this.a=a},
j6:function j6(a,b,c){this.a=a
this.b=b
this.c=c},
dT:function dT(){},
kd:function kd(){},
ke:function ke(){},
hA:function hA(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kj:function kj(){},
hz:function hz(){},
cT:function cT(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
kc:function kc(a,b){this.a=a
this.b=b},
hK:function hK(a){this.a=a
this.b=0},
kr:function kr(a){this.a=a},
fV:function fV(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
h_:function h_(){},
h4:function h4(){},
h5:function h5(){},
h8:function h8(){},
h9:function h9(){},
hc:function hc(){},
hd:function hd(){},
he:function he(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(){},
hk:function hk(){},
hl:function hl(){},
hn:function hn(){},
dU:function dU(){},
dV:function dV(){},
hp:function hp(){},
hq:function hq(){},
hv:function hv(){},
hB:function hB(){},
hC:function hC(){},
dX:function dX(){},
dY:function dY(){},
hD:function hD(){},
hE:function hE(){},
hL:function hL(){},
hM:function hM(){},
hN:function hN(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(){},
hR:function hR(){},
hS:function hS(){},
hT:function hT(){},
hU:function hU(){}},K={
Q:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.f("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.D(a,0)
r=C.a.D(b,0)
if(s>r){q=r
r=s
s=q}return new K.f6(s,r)},
aP:function aP(){},
cV:function cV(){},
ac:function ac(a){this.a=a},
f6:function f6(a,b){this.a=a
this.b=b},
u:function u(a){this.a=a}},L={
jy:function(){var s=t.N
return new L.jx(P.U(s,t.dl),P.U(s,t.f7),P.d1(s))},
fg:function fg(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
fu:function fu(a,b,c){this.a=a
this.b=b
this.c=c},
fv:function fv(a,b){this.b=a
this.c=b},
jx:function jx(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dt:function dt(a,b){this.b=a
this.c=!1
this.a=b}},O={
la:function(a){return new O.ab(H.b([],a.L("w<0>")),a.L("ab<0>"))},
ab:function ab(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
dc:function dc(a){this.a=a
this.b=null},
m9:function(){var s=O.la(t.gc),r=new O.d9(s)
s.b9(r.gff(),r.gfh())
s=r.gdX()
s.gt().n(0,r.gd4())
s.gdW().n(0,r.gcP())
return r},
eO:function(a,b){return new O.da(new V.V(0,0,0),a,b,new A.aD(!1,!1,!1))},
eu:function eu(){var _=this
_.a=null
_.b=1
_.c=10
_.f=_.e=_.d=!1
_.r=null},
d9:function d9(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
iV:function iV(a,b){this.a=a
this.b=b},
iW:function iW(){},
iX:function iX(a,b){this.a=a
this.b=b},
iY:function iY(){},
iZ:function iZ(a,b){this.a=a
this.b=b},
j_:function j_(){},
j0:function j0(a,b){this.a=a
this.b=b},
j1:function j1(){},
iP:function iP(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c},
eN:function eN(){},
iQ:function iQ(a,b,c){this.a=a
this.b=b
this.c=c},
da:function da(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d},
iS:function iS(a){this.b=a},
iT:function iT(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d},
iU:function iU(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d},
ce:function ce(){}},E={
lc:function(){var s=O.la(t.l),r=new E.bA(s)
s.b9(r.gi8(),r.gib())
r.sah(0,null)
r.sb4(null)
r.sb2(null)
return r},
mG:function(){var s=window.navigator.vendor
s.toString
if(C.a.A(s,"Google"))return C.G
s=window.navigator.userAgent
s.toString
if(C.a.A(s,"Firefox"))return C.q
s=window.navigator.appVersion
s.toString
if(C.a.A(s,"Trident")||C.a.A(s,"Edge"))return C.r
s=window.navigator.appName
s.toString
if(C.a.A(s,"Microsoft"))return C.r
return C.H},
mH:function(){var s=window.navigator.appVersion
s.toString
if(C.a.A(s,"Win"))return C.a1
if(C.a.A(s,"Mac"))return C.A
if(C.a.A(s,"Linux"))return C.a2
return C.a3},
oy:function(a,b){var s
Date.now()
s=t.fA
s=new E.jd(a,new P.X(Date.now(),!1),new P.X(Date.now(),!1),new O.dc(H.b([],s)),new O.dc(H.b([],s)),new O.dc(H.b([],s)),H.b([null],t.bc),P.U(t.N,t.fg))
s.eC(a,b)
return s},
oG:function(a,b,c,d,e){var s,r
if(t.gA.b(a))return E.mq(a,!0,!0,!0,!1)
s=W.l9()
r=s.style
r.width="100%"
r.height="100%"
J.nP(a).n(0,s)
return E.mq(s,!0,!0,!0,!1)},
mq:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.A,l=t.gW.a(C.i.cF(a,"webgl2",P.og(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.c(P.f("Failed to get the rendering context for WebGL."))
s=E.oy(l,a)
m=H.hV(l.getParameter(3379))
H.hV(l.getParameter(34076))
r=H.b([],t.g9)
q=$.iq
p=new X.fK(a,r,(q==null?$.iq=new E.h1(E.mG(),E.mH()):q).a===C.q?0.16666666666666666:0.005555555555555556)
o=document
o.toString
r.push(W.a2(o,"contextmenu",p.gfq(),!1))
r.push(W.a2(a,"focus",p.gfz(),!1))
r.push(W.a2(a,"blur",p.gfj(),!1))
r.push(W.a2(o,"keyup",p.gfD(),!1))
r.push(W.a2(o,"keydown",p.gfB(),!1))
r.push(W.a2(a,"mousedown",p.gfH(),!1))
r.push(W.a2(a,"mouseup",p.gfL(),!1))
r.push(W.a2(a,n,p.gfJ(),!1))
W.io(a)
W.io(a)
r.push(W.a2(a,W.io(a),p.gfN(),!1))
r.push(W.a2(o,n,p.gft(),!1))
r.push(W.a2(o,"mouseup",p.gfv(),!1))
r.push(W.a2(o,"pointerlockchange",p.gfP(),!1))
r.push(W.a2(a,"touchstart",p.gh4(),!1))
r.push(W.a2(a,"touchend",p.gh0(),!1))
r.push(W.a2(a,"touchmove",p.gh2(),!1))
m=new E.ft(a,s,new T.js(l,m),p,new P.X(Date.now(),!1))
m.d6()
return m},
i8:function i8(){},
bA:function bA(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bT:function bT(a){this.b=a},
c6:function c6(a){this.b=a},
h1:function h1(a,b){this.a=a
this.b=b},
jd:function jd(a,b,c,d,e,f,g,h){var _=this
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
je:function je(a){this.a=a},
jf:function jf(a){this.a=a},
jg:function jg(a){this.a=a},
ft:function ft(a,b,c,d,e){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.x=d
_.Q=null
_.cx=!1
_.cy=e
_.db=0},
ju:function ju(a){this.a=a}},Z={
lu:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cv(c)),35044)
a.bindBuffer(b,null)
return new Z.fN(b,s)},
ay:function(a){return new Z.bK(a)},
fN:function fN(a,b){this.a=a
this.b=b},
bU:function bU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
fO:function fO(a){this.a=a},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c_:function c_(a,b,c){this.a=a
this.b=b
this.c=c},
bK:function bK(a){this.a=a}},D={
M:function(){return new D.bW()},
ia:function ia(){},
bW:function bW(){var _=this
_.c=_.b=_.a=null
_.d=0},
it:function it(a){this.a=a},
iu:function iu(a){this.a=a},
Y:function Y(){},
aS:function aS(){},
aT:function aT(){},
y:function y(a,b,c){this.c=a
this.d=b
this.e=c},
d_:function d_(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null},
cb:function cb(a,b,c,d,e,f,g,h){var _=this
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
_.go=null}},X={cF:function cF(a,b){this.a=a
this.b=b},eH:function eH(a,b){this.a=a
this.b=b},iH:function iH(a){this.d=a},d4:function d4(a,b,c){this.x=a
this.c=b
this.d=c},iN:function iN(a,b,c,d){var _=this
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
_.d=e},j5:function j5(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},f5:function f5(){},ds:function ds(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},jz:function jz(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},fK:function fK(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
o7:function(a){var s=new V.ao(0,0,0,1),r=V.ln()
return new X.iz(s,r)},
md:function(a,b){var s,r=new X.f0(1.0471975511965976,0.1)
r.sb2(b)
s=r.c
$.D().toString
if(!(Math.abs(s-a)<1e-9)){r.c=a
r.a5(new D.y("fov",s,a))}s=r.d
$.D().toString
if(!(Math.abs(s-0.1)<1e-9)){r.d=0.1
r.a5(new D.y("near",s,0.1))}s=r.e
$.D().toString
if(!(Math.abs(s-2000)<1e-9)){r.e=2000
r.a5(new D.y("far",s,2000))}return r},
i5:function i5(a,b,c){var _=this
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
iz:function iz(a,b){this.a=a
this.r=b
this.x=null},
f0:function f0(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
jr:function jr(){}},V={
hY:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
qN:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bp(a-b,s)
return(a<0?a+s:a)+b},
B:function(a,b,c){$.D().toString
return C.a.aq(C.d.cD(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cA:function(a,b,c){var s,r,q,p,o,n,m,l=H.b([],t.s)
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.p)(a),++p){o=a[p]
$.D().toString
n=C.a.aq(C.d.cD(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.d(l,m)
s=C.a.aq(l[m],q)
r=l.length
if(m>=r)return H.d(l,m)
l[m]=s}return l},
ee:function(a){return C.d.iy(Math.pow(2,C.d.cp(Math.log(a)/Math.log(2))))},
aZ:function(){var s=$.mc
return s==null?$.mc=V.aY(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aY:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bf(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lm:function(a,b,c){return V.aY(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
ll:function(a,b,c,d){return V.aY(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
mb:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aY(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
me:function(){var s=$.as
return s==null?$.as=new V.R(0,0,0):s},
ln:function(){var s=$.ml
return s==null?$.ml=V.mk(0,0,1,1):s},
mk:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f8(a,b,c,d)},
dF:function(){var s=$.mC
return s==null?$.mC=new V.F(0,0,0):s},
oO:function(){var s=$.jS
return s==null?$.jS=new V.F(-1,0,0):s},
mD:function(){var s=$.jT
return s==null?$.jT=new V.F(0,1,0):s},
lt:function(){var s=$.jU
return s==null?$.jU=new V.F(0,0,1):s},
oM:function(a,b,c){return new V.F(a,b,c)},
oN:function(a){return new V.F(a.a,a.b,a.c)},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ir:function ir(){},
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
bf:function bf(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a0:function a0(a,b){this.a=a
this.b=b},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
bG:function bG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f8:function f8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
am:function am(a,b){this.a=a
this.b=b},
F:function F(a,b,c){this.a=a
this.b=b
this.c=c},
cm:function cm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qH:function(a){P.oH(C.S,new V.l3(a))},
oA:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.a2(n,"scroll",new V.jm(s),!1)
return new V.jk(o)},
aC:function aC(){},
l3:function l3(a){this.a=a},
es:function es(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
ez:function ez(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
eA:function eA(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
f2:function f2(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
jc:function jc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jk:function jk(a){this.a=a
this.b=null},
jm:function jm(a){this.a=a},
jl:function jl(a){this.a=a},
jn:function jn(a){this.a=a},
qE:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="testCanvas",a6=null,a7=V.oA("Test 045"),a8=W.l9()
a8.className="pageLargeCanvas"
a8.id=a5
a7.a.appendChild(a8).toString
s=t.s
a7.dk(H.b(["WIP ([Issue #104|https://github.com/Grant-Nelson/ThreeDart/issues/104]) ","Test of shadow projection with a spot light."],s))
a7.ht(H.b(["shapes"],s))
a7.dk(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(a5)
if(r==null)H.i(P.f("Failed to find an element with the identifier, testCanvas."))
q=E.oG(r,!0,!0,!0,!1)
p=T.lq(a6)
o=new X.i5(p,new V.ao(0,0,0,1),V.ln())
o.saA(0,512)
o.sat(0,512)
n=new V.ao(0,0,0,1)
if(!o.cx.q(0,n)){m=o.cx
o.cx=n
o.a5(new D.y("color",m,n))}l=o.db
$.D().toString
if(!(Math.abs(l-2000)<1e-9)){o.db=2000
o.a5(new D.y("depth",l,2000))}l=o.r
$.D().toString
if(!(Math.abs(l-1)<1e-9)){o.r=1
o.a5(new D.y("autoResizeScalarX",l,1))}l=o.x
$.D().toString
if(!(Math.abs(l-1)<1e-9)){o.x=1
o.a5(new D.y("autoResizeScalarY",l,1))}k=V.ln()
if(!o.dy.q(0,k)){m=o.dy
o.dy=k
o.a5(new D.y("region",m,k))}j=U.iA()
j.n(0,U.by(V.lm(0,0,-4)))
l=q.x
j.n(0,U.my(!0,l))
i=q.f.i5("../resources/Test.png")
n=new V.V(1,1,1)
h=new D.cb(V.me(),V.lt(),V.mD(),V.oO(),new V.V(1,1,1),1.0471975511965976,1.5707963267948966,1.5707963267948966)
m=h.f
h.f=j
j.gt().n(0,h.gbb())
h.X(new D.y("mover",m,h.f))
if(!h.r.q(0,n)){m=h.r
h.r=n
h.X(new D.y("color",m,n))}g=h.x
if(g!==i){if(g!=null)g.gt().K(0,h.gbb())
m=h.x
h.x=i
i.gt().n(0,h.gbb())
h.X(new D.y("texture",m,h.x))}i=h.y
if(i!==p){if(i!=null)i.gt().K(0,h.gbb())
m=h.y
h.y=p
p.gt().n(0,h.gbb())
h.X(new D.y("shadow",m,h.y))}p=h.ch
$.D().toString
if(!(Math.abs(p-0.5)<1e-9)){h.ch=0.5
i=1/(Math.sqrt(2)*Math.tan(h.ch))
h.z=i
h.Q=i*h.cx
h.X(new D.y("fov",p,h.ch))}p=h.cx
$.D().toString
if(!(Math.abs(p-1)<1e-9)){h.cx=1
h.Q=h.z
h.X(new D.y("ratio",p,1))}p=h.cy
$.D().toString
if(!(Math.abs(p-1.5707963267948966)<1e-9)){h.cy=1.5707963267948966
h.X(new D.y("cutoff",p,1.5707963267948966))}p=h.dx
$.D().toString
if(!(Math.abs(p-1.5707963267948966)<1e-9)){h.dx=1.5707963267948966
h.X(new D.y("coneAngle",p,1.5707963267948966))}f=$.mE
if(f==null){f=new V.cm(1,0.00390625,0.0000152587890625,0)
$.mE=f}if(!J.J(h.e,f)){m=h.e
h.e=f
h.X(new D.y("shadowAdjust",m,f))}p=h.dy
$.D().toString
if(!(Math.abs(p-0)<1e-9)){h.dy=0
h.X(new D.y("attenuation0",p,0))}p=h.fr
$.D().toString
if(!(Math.abs(p-0.1)<1e-9)){h.fr=0.1
h.X(new D.y("attenuation1",p,0.1))}p=h.fx
$.D().toString
if(!(Math.abs(p-0)<1e-9)){h.fx=0
h.X(new D.y("attenuation2",p,0))}if(h.db){h.db=!1
h.X(new D.y("enableCutOff",!0,!1))}e=O.m9()
e.gdX().n(0,h)
p=e.gdm()
p.saL(0,new V.V(0.1,0.1,0.1))
p=e.gdA()
p.saL(0,new V.V(0.7,0.7,0.7))
p=e.gbK()
p.saL(0,new V.V(0.3,0.3,0.3))
p=e.gbK()
p.d9(new A.aD(!0,!1,!1))
p.da(100)
d=E.lc()
d.sah(0,F.nm())
c=E.lc()
c.sb2(U.by(V.ll(5,5,5,1)))
p=F.lL(1,a6,a6,1)
p.co()
c.sah(0,p)
b=U.iA()
b.n(0,U.my(!1,l))
b.n(0,U.by(V.mb(3.141592653589793)))
b.n(0,U.by(V.lm(0,0,5)))
a=E.lc()
l=U.iA()
l.n(0,U.by(V.ll(0.1,0.1,0.1,1)))
l.n(0,j)
a.sb2(l)
a.sah(0,F.kG(0,!1,!0,40,1))
l=O.m9()
p=l.gdC()
p.saL(0,new V.V(1,1,1))
a.sb4(l)
a0=M.m5()
a0.sb4(e)
p=a0.e
p.n(0,d)
p.n(0,c)
p.n(0,a)
p=a0.b
if(p!=null)p.sb2(b)
p=U.iA()
p.n(0,U.by(V.ll(-1,1,-1,1)))
l=new U.c1(V.aZ())
l.a=j
j.gt().n(0,l.gaU())
l.U(new D.y("mover",a6,l.a))
p.n(0,l)
a1=Math.cos(3.141592653589793)
a2=Math.sin(3.141592653589793)
p.n(0,U.by(V.aY(a1,-a2,0,0,a2,a1,0,0,0,0,1,0,0,0,0,1)))
p.n(0,U.by(V.lm(0,0,2)))
a3=X.md(0.5,p)
a4=M.m5()
a4.sei(0,o)
p=new O.eu()
$.D().toString
if(!(Math.abs(0)<1e-9))p.a4(new D.y("start",1,1))
l=p.c
$.D().toString
if(!(Math.abs(l-20)<1e-9)){p.c=20
p.a4(new D.y("stop",l,20))}if(!p.f){p.f=!0
p.a4(new D.y("focus",!1,!0))}a4.sb4(p)
p=a4.e
p.n(0,d)
p.n(0,c)
a4.sdu(a3)
p=t.ba
l=H.b([a4,a0],p)
p=new M.cH(H.b([],p))
p.b9(p.gfX(),p.gfZ())
p.a8(0,l)
l=q.d
if(l!==p){if(l!=null)l.gt().K(0,q.gcM())
q.d=p
p.gt().n(0,q.gcM())
q.cN()}r=s.getElementById("shapes")
if(r==null)H.i(P.f("Failed to find shapes for RadioGroup"))
s=new V.jb("shapes",!0,r)
s.aZ(0,"Cube",new V.kV(d))
s.aZ(0,"Cylinder",new V.kW(d))
s.aZ(0,"Bar",new V.kX(d))
s.aZ(0,"Cone",new V.kY(d))
s.aZ(0,"Sphere",new V.kZ(d))
s.di(0,"Toroid",new V.l_(d),!0)
s.aZ(0,"Knot",new V.l0(d))
s=q.Q
if(s==null)s=q.Q=D.M()
p=s.b
s=p==null?s.b=H.b([],t.a):p
s.push(new V.l1(a7,e))
V.qH(q)},
kV:function kV(a){this.a=a},
kW:function kW(a){this.a=a},
kX:function kX(a){this.a=a},
kY:function kY(a){this.a=a},
kZ:function kZ(a){this.a=a},
l_:function l_(a){this.a=a},
l0:function l0(a){this.a=a},
l1:function l1(a,b){this.a=a
this.b=b}},U={
m1:function(){return new U.ib()},
by:function(a){var s=V.aZ(),r=new U.cI(s)
if(!s.q(0,a))r.a=a
return r},
iA:function(){var s=new U.bY(V.aZ(),H.b([],t.eJ))
s.b9(s.geG(),s.gfT())
return s},
my:function(a,b){var s,r,q=U.m1(),p=U.m1(),o=$.jR
if(o==null)o=$.jR=new V.am(0,0)
o=new U.dE(q,p,new X.bg(!1,!1,!1),o,V.aZ())
q.seo(0,!0)
q.sdY(6.283185307179586)
q.se_(0)
q.sa7(0,0)
q.sdZ(100)
q.sab(0)
q.sdw(0.5)
s=o.gaU()
q.gt().n(0,s)
p.seo(0,!0)
p.sdY(6.283185307179586)
p.se_(0)
p.sa7(0,0)
p.sdZ(100)
p.sab(0)
p.sdw(0.5)
p.gt().n(0,s)
q=new X.bg(a,!1,!1)
if(!o.d.q(0,q)){r=o.d
o.d=q
o.U(new D.y("modifiers",r,q))}o.hA(b)
return o},
ib:function ib(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
cI:function cI(a){this.a=a
this.b=null},
bY:function bY(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
c1:function c1(a){var _=this
_.b=_.a=null
_.c=a
_.d=0},
a4:function a4(){},
dE:function dE(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.cx=_.ch=_.r=_.f=!1
_.db=_.cy=0
_.dx=d
_.dy=0
_.fr=e
_.fx=null}},M={
m5:function(){var s,r=O.la(t.l),q=new M.cR(r)
r.b9(q.gfm(),q.gfo())
s=X.o7(null)
q.sdu(null)
q.sei(0,s)
q.sb4(null)
return q},
cH:function cH(a){var _=this
_.f=!1
_.r=null
_.a=a
_.c=_.b=null},
cR:function cR(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
ok:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=""+"MaterialLight_"+a4.gaz(a4)+a5.gaz(a5)+a6.gaz(a6)+a7.gaz(a7)+a8.gaz(a8)+a9.gaz(a9)+b0.gaz(b0)+b1.gaz(b1)+b2.gaz(b2)+"_"
b+=a?"1":"0"
b+=a0?"1":"0"
b+=a1?"1":"0"
b=b+"0_"+a3
s=b3.length
if(s>0){b+="_Bar"
for(r=0;r<b3.length;b3.length===s||(0,H.p)(b3),++r)b+="_"+b3[r].a}s=b4.length
if(s>0){b+="_Dir"
for(r=0;r<b4.length;b4.length===s||(0,H.p)(b4),++r)b+="_"+b4[r].a}s=b5.length
if(s>0){b+="_Point"
for(r=0;r<b5.length;b5.length===s||(0,H.p)(b5),++r)b+="_"+b5[r].a}s=b6.length
if(s>0){b+="_Spot"
for(r=0;r<b6.length;b6.length===s||(0,H.p)(b6),++r)b+="_"+b6[r].a}for(s=b3.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b3[r].b
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
c=$.aN()
if(h){s=$.bt()
c=new Z.bK(c.a|s.a)}if(g)c=new Z.bK(c.a|$.bs().a)
if(f)c=new Z.bK(c.a|$.br().a)
return new A.iR(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
kC:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
kD:function(a,b,c){var s
A.kC(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hZ(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
pR:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.kC(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
pN:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.kD(b,r,"ambient")
b.a+="\n"},
pP:function(a,b){var s,r=a.c
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.kD(b,r,"diffuse")
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
pS:function(a,b){var s,r=a.d
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.kD(b,r,"invDiffuse")
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
pY:function(a,b){var s,r=a.e
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.kD(b,r,"specular")
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
pU:function(a,b){var s,r,q
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
pW:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.kC(b,r,"reflect")
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
pX:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.kC(b,r,"refract")
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
pO:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.hZ(r)
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
pQ:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+s
q=A.hZ(r)
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
pV:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.hZ(r)
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
pZ:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.hZ(r)
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
if(m){s=$.iq
if(s==null)s=$.iq=new E.h1(E.mG(),E.mH())
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
q_:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.Z(""),j=""+"precision mediump float;\n"
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
A.pR(a,k)
A.pN(a,k)
A.pP(a,k)
A.pS(a,k)
A.pY(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.pW(a,k)
A.pX(a,k)}A.pU(a,k)
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
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.p)(p),++n)A.pO(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.p)(p),++n)A.pQ(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.p)(p),++n)A.pV(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.p)(p),++n)A.pZ(a,p[n],k)
A.pT(a,k)}p=k.a+="// === Main ===\n"
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
for(j=a.z,s=j.length,n=0;n<j.length;j.length===s||(0,H.p)(j),++n){q="barLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ai(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.p)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ai(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.p)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ai(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.p)(j),++n){q="spotLight"+j[n].a
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
j=k.a+="   vec4 objClr = vec4("+C.b.j(m," + ")+", alpha);\n"
if(r)j=k.a=j+"   objClr = colorMat*objClr;\n"
j+="   gl_FragColor = objClr;\n"
k.a=j
j=k.a=j+"}\n"
return j.charCodeAt(0)==0?j:j},
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
hZ:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.ai(a,1)},
ls:function(a,b,c,d,e){var s=new A.fz(H.b([],t.t),a,c,e)
s.f=d
s.e=P.eL(d,0,!1,t.S)
return s},
el:function el(a,b,c){this.a=a
this.b=b
this.c=c},
i2:function i2(a){this.a=a},
aD:function aD(a,b,c){this.a=a
this.b=b
this.c=c},
cM:function cM(a,b){var _=this
_.ch=_.Q=_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
d8:function d8(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.iR=_.iQ=_.dL=_.iP=_.iO=_.dK=_.dJ=_.iN=_.iM=_.dI=_.dH=_.iL=_.iK=_.dG=_.iJ=_.iI=_.dF=_.dE=_.bw=_.b0=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.ce=c
_.cf=d
_.cg=e
_.ci=f
_.cj=g
_.ck=h
_.cl=i
_.cm=j
_.iU=_.iT=_.iS=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
b7:function b7(a,b){this.a=a
this.b=b},
b9:function b9(a,b){this.a=a
this.b=b},
bh:function bh(a,b){this.a=a
this.b=b},
bk:function bk(a,b){this.a=a
this.b=b},
iR:function iR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.dE=b7},
dx:function dx(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dy:function dy(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dA:function dA(a,b,c,d,e,f,g,h,i,j){var _=this
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
dD:function dD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ca:function ca(){},
a1:function a1(){},
jE:function jE(a){this.a=a},
ci:function ci(a,b,c){this.a=a
this.c=b
this.d=c},
fB:function fB(a,b,c){this.a=a
this.c=b
this.d=c},
fC:function fC(a,b,c){this.a=a
this.c=b
this.d=c},
fD:function fD(a,b,c){this.a=a
this.c=b
this.d=c},
fz:function fz(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
du:function du(a,b,c){this.a=a
this.c=b
this.d=c},
fA:function fA(a,b,c){this.a=a
this.c=b
this.d=c},
dv:function dv(a,b,c){this.a=a
this.c=b
this.d=c},
dw:function dw(a,b,c){this.a=a
this.c=b
this.d=c},
fE:function fE(a,b,c){this.a=a
this.c=b
this.d=c},
dz:function dz(a,b,c){this.a=a
this.c=b
this.d=c},
cj:function cj(a,b,c){this.a=a
this.c=b
this.d=c},
dB:function dB(a,b,c){this.a=a
this.c=b
this.d=c},
dC:function dC(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lL:function(a,b,c,d){var s=F.lo()
F.e6(s,b,c,d,a,1,0,0,1)
F.e6(s,b,c,d,a,0,1,0,3)
F.e6(s,b,c,d,a,0,0,1,2)
F.e6(s,b,c,d,a,-1,0,0,0)
F.e6(s,b,c,d,a,0,-1,0,0)
F.e6(s,b,c,d,a,0,0,-1,3)
s.aD()
return s},
kx:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
e6:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.F(g,f+a2,e+a3)
i.a=d
s=a2-a3
r=a3-a4
q=a4-a2
p=i.b=new V.F(s+a4,r+a2,q+a3)
o=new V.F(s-a4,r-a2,q-a3)
i.c=o
n=i.d=new V.F(h-a4,f-a2,e-a3)
if(g>0){i.d=p
i.b=n
g=p
h=n}else{g=n
h=p}for(e=g,g=h,h=d,f=o,m=0;m<a5;++m,l=e,e=h,h=g,g=f,f=l){i.a=g
i.b=f
i.c=e
i.d=h}k=F.kx(h)
j=F.kx(g)
a.bk(F.lS(a0,a1,new F.kt(i,F.kx(f),F.kx(e),j,k,c),b))},
nb:function(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(a1<3)throw H.c(P.f("Must have 3 or more sizes for a disk."))
s=F.lo()
r=b?-1:1
q=-6.283185307179586/a1
p=t.k
o=H.b([],p)
n=s.gZ()
m=new V.F(0,0,r).I()
o.push(n.hx(new V.bG(a,-1,-1,-1),new V.ao(1,1,1,1),new V.R(0,0,c),new V.F(0,0,r),new V.a0(0.5,0.5),m))
for(l=0;l<=a1;++l){k=q*l
j=r*Math.sin(k)
i=Math.cos(k)
h=a0.$1(l/a1)
n=s.a
if(n==null)n=s.a=new F.z(s,H.b([],p))
m=new V.F(j,i,r).I()
if(j<0)g=0
else g=j>1?1:j
f=i<0
if(f)e=0
else e=i>1?1:i
if(f)f=0
else f=i>1?1:i
d=F.fL(new V.bG(a,-1,-1,-1),null,new V.ao(g,e,f,1),new V.R(j*h,i*h,c),new V.F(0,0,r),new V.a0(j*0.5+0.5,i*0.5+0.5),m,null,0)
n.n(0,d)
o.push(d)}s.gS().hv(o)
return s},
kG:function(a,b,c,d,e){return F.qp(b,c,1,new F.kH(a,e),d)},
qp:function(a,b,c,d,e){var s
if(e<3)throw H.c(P.f("Must have 3 or more sizes for a cylindrical shape."))
if(c<1)throw H.c(P.f("Must have 1 or more divisionss for a cylindrical shape."))
s=F.lS(c,e,new F.kJ(d),null)
s.aD()
s.c7()
if(b)s.bk(F.nb(3,!1,1,new F.kK(d),e))
if(a)s.bk(F.nb(1,!0,-1,new F.kL(d),e))
return s},
qI:function(a,b){var s=F.lL(a,null,new F.l4(1,new F.l5()),b)
s.c7()
return s},
nm:function(){return F.na(15,30,0.5,1,new F.l6())},
qC:function(){return F.na(12,120,0.3,1,new F.kU(3,2))},
na:function(a,b,c,d,e){var s=F.lS(a,b,new F.kI(e,d,b,c),null)
s.aD()
s.c7()
return s},
lS:function(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null
if(a<1)throw H.c(P.f("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.f("Must have 1 or more divisions of the height for a surface."))
s=F.lo()
r=t.k
q=H.b([],r)
for(p=0;p<=b;++p){o=p/b
n=s.a
if(n==null)n=s.a=new F.z(s,H.b([],r))
if(o<0)m=0
else m=o>1?1:o
l=F.fL(d,d,new V.ao(m,0,0,1),d,d,new V.a0(o,1),d,d,0)
n.n(0,l)
c.$3(l,o,0)
q.push(l.cd(a0))}for(p=1;p<=a;++p){k=p/a
for(n=k>1,m=k<0,j=1-k,i=0;i<=b;++i){o=i/b
h=s.a
if(h==null)h=s.a=new F.z(s,H.b([],r))
if(o<0)g=0
else g=o>1?1:o
if(m)f=0
else f=n?1:k
if(m)e=0
else e=n?1:k
l=F.fL(d,d,new V.ao(g,f,e,1),d,d,new V.a0(o,j),d,d,0)
h.n(0,l)
c.$3(l,o,k)
q.push(l.cd(a0))}}s.gS().hw(a+1,b+1,q)
return s},
lo:function(){return new F.ji()},
fL:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cn()
h=$.nE()
s=$.aN()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.bt().a)!==0)q.r=e
if((r&$.bs().a)!==0)q.x=b
if((r&$.bO().a)!==0)q.y=f
if((r&$.bP().a)!==0)q.z=g
if((r&$.nF().a)!==0)q.Q=c
if((r&$.cC().a)!==0)q.ch=i
if((r&$.br().a)!==0)q.cx=a
return q},
kt:function kt(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kH:function kH(a,b){this.a=a
this.b=b},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
l5:function l5(){},
l4:function l4(a,b){this.a=a
this.b=b},
l6:function l6(){},
kU:function kU(a,b){this.a=a
this.b=b},
kI:function kI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aq:function aq(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iv:function iv(){},
jo:function jo(){},
eJ:function eJ(){this.b=this.a=null},
iI:function iI(){},
jD:function jD(){},
f4:function f4(){this.a=null},
ji:function ji(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
jj:function jj(a,b,c,d,e,f,g){var _=this
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
bH:function bH(a,b){this.a=a
this.b=b},
cn:function cn(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
k0:function k0(a){this.a=a},
k_:function k_(a){this.a=a},
z:function z(a,b){this.a=a
this.b=!1
this.c=b},
co:function co(a,b,c){this.b=a
this.c=b
this.d=c},
jV:function jV(a,b){this.a=a
this.b=b},
jW:function jW(a,b){this.a=a
this.b=b},
cp:function cp(a,b){this.b=a
this.c=b},
jY:function jY(){},
jX:function jX(){},
jZ:function jZ(){},
j8:function j8(){},
dG:function dG(a){this.b=a}},T={
lq:function(a){return new T.fs(a)},
cg:function cg(){},
fr:function fr(){},
fs:function fs(a){var _=this
_.a=0
_.b=a
_.d=_.c=!1
_.x=_.r=_.f=_.e=0
_.y=null},
js:function js(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=0},
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
H.lh.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gF:function(a){return H.dj(a)},
i:function(a){return"Instance of '"+H.dk(a)+"'"}}
J.eD.prototype={
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$ia9:1}
J.cY.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0}}
J.bd.prototype={
gF:function(a){return 0},
i:function(a){return String(a)},
$im7:1}
J.f1.prototype={}
J.bJ.prototype={}
J.aU.prototype={
i:function(a){var s=a[$.nq()]
if(s==null)return this.ex(a)
return"JavaScript function for "+J.cD(s)},
$icU:1}
J.w.prototype={
cz:function(a,b){if(!!a.fixed$length)H.i(P.C("removeAt"))
if(b<0||b>=a.length)throw H.c(P.f7(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var s
if(!!a.fixed$length)H.i(P.C("remove"))
for(s=0;s<a.length;++s)if(J.J(a[s],b)){a.splice(s,1)
return!0}return!1},
a8:function(a,b){if(!!a.fixed$length)H.i(P.C("addAll"))
this.eN(a,b)
return},
eN:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.aE(a))
for(s=0;s<r;++s)a.push(b[s])},
E:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.aE(a))}},
j:function(a,b){var s,r,q=a.length,p=P.eL(q,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.x(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
i3:function(a){return this.j(a,"")},
hY:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.aE(a))}return s},
hZ:function(a,b,c){return this.hY(a,b,c,t.A)},
hX:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.aE(a))}throw H.c(H.iE())},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ghW:function(a){if(a.length>0)return a[0]
throw H.c(H.iE())},
gaE:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.iE())},
dn:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.aE(a))}return!1},
ba:function(a,b){if(!!a.immutable$list)H.i(P.C("sort"))
H.oD(a,b==null?J.pE():b)},
es:function(a){return this.ba(a,null)},
A:function(a,b){var s
for(s=0;s<a.length;++s)if(J.J(a[s],b))return!0
return!1},
i:function(a){return P.le(a,"[","]")},
gP:function(a){return new J.aa(a,a.length)},
gF:function(a){return H.dj(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.i(P.C("set length"))
if(b>a.length)H.ku(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.cz(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.i(P.C("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cz(a,b))
a[b]=c},
$in:1,
$ih:1,
$iq:1}
J.iF.prototype={}
J.aa.prototype={
gB:function(a){return H.S(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.p(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.c2.prototype={
an:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbz(b)
if(this.gbz(a)===s)return 0
if(this.gbz(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbz:function(a){return a===0?1/a<0:a<0},
iy:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.C(""+a+".toInt()"))},
cp:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.C(""+a+".floor()"))},
a3:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.C(""+a+".round()"))},
cD:function(a,b){var s
if(b>20)throw H.c(P.a7(b,0,20,"fractionDigits",null))
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
bp:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
ez:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dd(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dd(a,b)},
dd:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.C("Result of truncating division is "+H.x(s)+": "+H.x(a)+" ~/ "+b))},
aY:function(a,b){var s
if(a>0)s=this.dc(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hk:function(a,b){if(b<0)throw H.c(H.eb(b))
return this.dc(a,b)},
dc:function(a,b){return b>31?0:a>>>b},
$iH:1,
$ia3:1}
J.cX.prototype={$ik:1}
J.eE.prototype={}
J.bc.prototype={
V:function(a,b){if(b<0)throw H.c(H.cz(a,b))
if(b>=a.length)H.i(H.cz(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.c(H.cz(a,b))
return a.charCodeAt(b)},
W:function(a,b){return a+b},
b3:function(a,b,c,d){var s=P.bi(b,c,a.length),r=a.substring(0,b),q=a.substring(s)
return r+d+q},
ac:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a7(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a1:function(a,b){return this.ac(a,b,0)},
v:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.f7(b,null))
if(b>c)throw H.c(P.f7(b,null))
if(c>a.length)throw H.c(P.f7(c,null))
return a.substring(b,c)},
ai:function(a,b){return this.v(a,b,null)},
iB:function(a){return a.toLowerCase()},
M:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.P)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
aq:function(a,b){var s=b-a.length
if(s<=0)return a
return this.M(" ",s)+a},
bx:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a7(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dR:function(a,b){return this.bx(a,b,0)},
hH:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.a7(c,0,s,null,null))
return H.nl(a,b,c)},
A:function(a,b){return this.hH(a,b,0)},
an:function(a,b){var s
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
$im:1}
H.cZ.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.r.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.V(this.a,b)}}
H.n.prototype={}
H.d3.prototype={
gP:function(a){return new H.be(this,this.gl(this))},
bI:function(a,b){return this.ew(0,b)}}
H.be.prototype={
gB:function(a){return H.S(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=J.cB(q),o=p.gl(q)
if(r.b!==o)throw H.c(P.aE(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.J(q,s);++r.c
return!0}}
H.aW.prototype={
gP:function(a){return new H.eM(J.az(this.a),this.b)},
gl:function(a){return J.aO(this.a)},
J:function(a,b){return this.b.$1(J.i_(this.a,b))}}
H.cP.prototype={$in:1}
H.eM.prototype={
u:function(){var s=this,r=s.b
if(r.u()){s.a=s.c.$1(r.gB(r))
return!0}s.a=null
return!1},
gB:function(a){return H.S(this).Q[1].a(this.a)}}
H.d7.prototype={
gl:function(a){return J.aO(this.a)},
J:function(a,b){return this.b.$1(J.i_(this.a,b))}}
H.b3.prototype={
gP:function(a){return new H.fP(J.az(this.a),this.b)}}
H.fP.prototype={
u:function(){var s,r
for(s=this.a,r=this.b;s.u();)if(r.$1(s.gB(s)))return!0
return!1},
gB:function(a){var s=this.a
return s.gB(s)}}
H.cS.prototype={}
H.fH.prototype={
m:function(a,b,c){throw H.c(P.C("Cannot modify an unmodifiable list"))}}
H.ck.prototype={}
H.cJ.prototype={
i:function(a){return P.lk(this)},
m:function(a,b,c){H.o1()},
$iG:1}
H.cK.prototype={
gl:function(a){return this.a},
cb:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.cb(0,b))return null
return this.cX(b)},
cX:function(a){return this.b[a]},
E:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.cX(q))}}}
H.jB.prototype={
ap:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.eG.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.fG.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.j9.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.hu.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bx.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.no(r==null?"unknown":r)+"'"},
$icU:1,
giE:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fo.prototype={}
H.fh.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.no(s)+"'"}}
H.bS.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bS))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gF:function(a){var s,r=this.c
if(r==null)s=H.dj(this.a)
else s=typeof r!=="object"?J.l8(r):H.dj(r)
return(s^H.dj(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.x(this.d)+"' of "+("Instance of '"+H.dk(s)+"'")}}
H.fa.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.W.prototype={
gl:function(a){return this.a},
gby:function(a){return this.a===0},
ga2:function(a){return new H.d0(this,H.S(this).L("d0<1>"))},
giD:function(a){var s=this,r=H.S(s)
return H.oj(s.ga2(s),new H.iG(s),r.c,r.Q[1])},
cb:function(a,b){var s=this.b
if(s==null)return!1
return this.eW(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.br(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.br(p,b)
q=r==null?n:r.b
return q}else return o.i1(b)},
i1:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.cY(p,q.dT(a))
r=q.dU(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cQ(s==null?q.b=q.bX():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cQ(r==null?q.c=q.bX():r,b,c)}else q.i2(b,c)},
i2:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bX()
s=p.dT(a)
r=p.cY(o,s)
if(r==null)p.c1(o,s,[p.bY(a,b)])
else{q=p.dU(r,a)
if(q>=0)r[q].b=b
else r.push(p.bY(a,b))}},
E:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.aE(s))
r=r.c}},
cQ:function(a,b,c){var s=this.br(a,b)
if(s==null)this.c1(a,b,this.bY(b,c))
else s.b=c},
f6:function(){this.r=this.r+1&67108863},
bY:function(a,b){var s,r=this,q=new H.iJ(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.f6()
return q},
dT:function(a){return J.l8(a)&0x3ffffff},
dU:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.J(a[r].a,b))return r
return-1},
i:function(a){return P.lk(this)},
br:function(a,b){return a[b]},
cY:function(a,b){return a[b]},
c1:function(a,b,c){a[b]=c},
f_:function(a,b){delete a[b]},
eW:function(a,b){return this.br(a,b)!=null},
bX:function(){var s="<non-identifier-key>",r=Object.create(null)
this.c1(r,s,r)
this.f_(r,s)
return r}}
H.iG.prototype={
$1:function(a){var s=this.a
return H.S(s).Q[1].a(s.h(0,a))},
$S:function(){return H.S(this.a).L("2(1)")}}
H.iJ.prototype={}
H.d0.prototype={
gl:function(a){return this.a.a},
gP:function(a){var s=this.a,r=new H.eK(s,s.r)
r.c=s.e
return r}}
H.eK.prototype={
gB:function(a){return H.S(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.aE(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kP.prototype={
$1:function(a){return this.a(a)},
$S:37}
H.kQ.prototype={
$2:function(a,b){return this.a(a,b)},
$S:58}
H.kR.prototype={
$1:function(a){return this.a(a)},
$S:49}
H.eF.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imj:1}
H.dd.prototype={$idd:1}
H.a_.prototype={$ia_:1}
H.c5.prototype={
gl:function(a){return a.length},
$iA:1}
H.bE.prototype={
h:function(a,b){H.b4(b,a,a.length)
return a[b]},
m:function(a,b,c){H.b4(b,a,a.length)
a[b]=c},
$in:1,
$ih:1,
$iq:1}
H.de.prototype={
m:function(a,b,c){H.b4(b,a,a.length)
a[b]=c},
$in:1,
$ih:1,
$iq:1}
H.eS.prototype={
h:function(a,b){H.b4(b,a,a.length)
return a[b]}}
H.eT.prototype={
h:function(a,b){H.b4(b,a,a.length)
return a[b]}}
H.eU.prototype={
h:function(a,b){H.b4(b,a,a.length)
return a[b]}}
H.eV.prototype={
h:function(a,b){H.b4(b,a,a.length)
return a[b]}}
H.eW.prototype={
h:function(a,b){H.b4(b,a,a.length)
return a[b]}}
H.df.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b4(b,a,a.length)
return a[b]}}
H.bF.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b4(b,a,a.length)
return a[b]},
$ibF:1,
$ich:1}
H.dO.prototype={}
H.dP.prototype={}
H.dQ.prototype={}
H.dR.prototype={}
H.au.prototype={
L:function(a){return H.hI(v.typeUniverse,this,a)},
bc:function(a){return H.pc(v.typeUniverse,this,a)}}
H.h6.prototype={}
H.h2.prototype={
i:function(a){return this.a}}
H.e_.prototype={}
P.k2.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:48}
P.k1.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:46}
P.k3.prototype={
$0:function(){this.a.$0()},
$S:12}
P.k4.prototype={
$0:function(){this.a.$0()},
$S:12}
P.dZ.prototype={
eK:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cy(new P.kl(this,b),0),a)
else throw H.c(P.C("`setTimeout()` not found."))},
eL:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cy(new P.kk(this,a,Date.now(),b),0),a)
else throw H.c(P.C("Periodic timer."))},
$ijw:1}
P.kl.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:1}
P.kk.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.ez(s,o)}q.c=p
r.d.$1(q)},
$S:12}
P.ct.prototype={
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
if(r instanceof P.ct){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.az(s)
if(o instanceof P.bL){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dW.prototype={
gP:function(a){return new P.bL(this.a())}}
P.fQ.prototype={}
P.cd.prototype={}
P.fj.prototype={}
P.ks.prototype={}
P.kE.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:1}
P.k9.prototype={
iu:function(a){var s,r,q,p=null
try{if(C.f===$.aL){a.$0()
return}P.q8(p,p,this,a)}catch(q){s=H.ai(q)
r=H.lN(q)
P.n4(p,p,this,s,r)}},
iv:function(a,b){var s,r,q,p=null
try{if(C.f===$.aL){a.$1(b)
return}P.q9(p,p,this,a,b)}catch(q){s=H.ai(q)
r=H.lN(q)
P.n4(p,p,this,s,r)}},
iw:function(a,b){return this.iv(a,b,t.A)},
hE:function(a){return new P.ka(this,a)},
dr:function(a,b){return new P.kb(this,a,b)}}
P.ka.prototype={
$0:function(){return this.a.iu(this.b)},
$S:1}
P.kb.prototype={
$1:function(a){return this.a.iw(this.b,a)},
$S:function(){return this.c.L("~(0)")}}
P.dK.prototype={
gP:function(a){var s=new P.dL(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
A:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.eV(b)
return r}},
eV:function(a){var s=this.d
if(s==null)return!1
return this.bU(s[this.bQ(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cS(s==null?q.b=P.lw():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cS(r==null?q.c=P.lw():r,b)}else return q.eM(0,b)},
eM:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.lw()
s=q.bQ(b)
r=p[s]
if(r==null)p[s]=[q.bP(b)]
else{if(q.bU(r,b)>=0)return!1
r.push(q.bP(b))}return!0},
K:function(a,b){if((b&1073741823)===b)return this.h7(this.c,b)
else return this.h6(0,b)},
h6:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bQ(b)
r=n[s]
q=o.bU(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.df(p)
return!0},
cS:function(a,b){if(a[b]!=null)return!1
a[b]=this.bP(b)
return!0},
h7:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.df(s)
delete a[b]
return!0},
cT:function(){this.r=this.r+1&1073741823},
bP:function(a){var s,r=this,q=new P.k8(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cT()
return q},
df:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cT()},
bQ:function(a){return J.l8(a)&1073741823},
bU:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.J(a[r].a,b))return r
return-1}}
P.k8.prototype={}
P.dL.prototype={
gB:function(a){return H.S(this).c.a(this.d)},
u:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.aE(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cW.prototype={}
P.iK.prototype={
$2:function(a,b){this.a.m(0,this.b.a(a),this.c.a(b))},
$S:10}
P.d2.prototype={$in:1,$ih:1,$iq:1}
P.j.prototype={
gP:function(a){return new H.be(a,this.gl(a))},
J:function(a,b){return this.h(a,b)},
E:function(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gl(a))throw H.c(P.aE(a))}},
gby:function(a){return this.gl(a)===0},
iA:function(a,b){var s,r,q,p,o=this
if(o.gby(a)){s=J.lf(0,H.b5(a).L("j.E"))
return s}r=o.h(a,0)
q=P.eL(o.gl(a),r,!0,H.b5(a).L("j.E"))
for(p=1;p<o.gl(a);++p){s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
iz:function(a){return this.iA(a,!0)},
hU:function(a,b,c,d){var s
H.b5(a).L("j.E").a(d)
P.bi(b,c,this.gl(a))
for(s=b;s<c;++s)this.m(a,s,d)},
i:function(a){return P.le(a,"[","]")}}
P.d5.prototype={}
P.iO.prototype={
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
for(s=J.az(this.ga2(a)),r=H.b5(a).L("L.V");s.u();){q=s.gB(s)
b.$2(q,r.a(this.h(a,q)))}},
gl:function(a){return J.aO(this.ga2(a))},
i:function(a){return P.lk(a)},
$iG:1}
P.hJ.prototype={
m:function(a,b,c){throw H.c(P.C("Cannot modify unmodifiable map"))}}
P.d6.prototype={
h:function(a,b){return J.lV(this.a,b)},
m:function(a,b,c){J.l7(this.a,b,c)},
E:function(a,b){J.eh(this.a,b)},
gl:function(a){return J.aO(this.a)},
i:function(a){return J.cD(this.a)},
$iG:1}
P.cl.prototype={}
P.dm.prototype={
a8:function(a,b){var s
for(s=J.az(b);s.u();)this.n(0,s.gB(s))},
i:function(a){return P.le(this,"{","}")},
J:function(a,b){var s,r,q,p,o="index"
H.ql(b,o,t.S)
P.mi(b,o)
for(s=P.oX(this,this.r),r=H.S(s).c,q=0;s.u();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.O(b,this,o,null,q))}}
P.dS.prototype={$in:1,$ih:1}
P.dM.prototype={}
P.e3.prototype={}
P.e5.prototype={}
P.jP.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.ai(r)}return null},
$S:16}
P.jO.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.ai(r)}return null},
$S:16}
P.i6.prototype={
i7:function(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a4=P.bi(a3,a4,a2.length)
s=$.nH()
for(r=s.length,q=a3,p=q,o=null,n=-1,m=-1,l=0;q<a4;q=k){k=q+1
j=C.a.D(a2,q)
if(j===37){i=k+2
if(i<=a4){h=H.kO(C.a.D(a2,k))
g=H.kO(C.a.D(a2,k+1))
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
if(j===61)continue}j=f}if(e!==-2){if(o==null){o=new P.Z("")
d=o}else d=o
c=d.a+=C.a.v(a2,p,q)
d.a=c+H.at(j)
p=k
continue}}throw H.c(P.a6("Invalid base64 data",a2,q))}if(o!=null){r=o.a+=C.a.v(a2,p,a4)
d=r.length
if(n>=0)P.lY(a2,m,a4,n,l,d)
else{b=C.c.bp(d-1,4)+1
if(b===1)throw H.c(P.a6(a0,a2,a4))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return C.a.b3(a2,a3,a4,r.charCodeAt(0)==0?r:r)}a=a4-a3
if(n>=0)P.lY(a2,m,a4,n,l,a)
else{b=C.c.bp(a,4)
if(b===1)throw H.c(P.a6(a0,a2,a4))
if(b>1)a2=C.a.b3(a2,a4,a4,b===2?"==":"=")}return a2}}
P.i7.prototype={}
P.eo.prototype={}
P.eq.prototype={}
P.ip.prototype={}
P.iD.prototype={
i:function(a){return this.a}}
P.iC.prototype={
eX:function(a,b,c){var s,r,q,p,o,n,m,l=null
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
default:m=l}if(m!=null){if(n==null)n=new P.Z("")
if(o>b)n.a+=C.a.v(a,b,o)
n.a+=m
b=o+1}}if(n==null)return l
if(c>b)n.a+=C.a.v(a,b,c)
s=n.a
return s.charCodeAt(0)==0?s:s}}
P.jM.prototype={
ghT:function(){return C.Q}}
P.jQ.prototype={
cc:function(a){var s,r,q,p=P.bi(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.kq(r)
if(q.f1(a,0,p)!==p){C.a.V(a,p-1)
q.c6()}return new Uint8Array(r.subarray(0,H.pv(0,q.b,s)))}}
P.kq.prototype={
c6:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
hs:function(a,b){var s,r,q,p,o,n=this
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
f1:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.V(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.D(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.hs(p,C.a.D(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
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
P.jN.prototype={
cc:function(a){var s=this.a,r=P.oK(s,a,0,null)
if(r!=null)return r
return new P.kp(s).hI(a,0,null,!0)}}
P.kp.prototype={
hI:function(a,b,c,d){var s,r,q,p,o=this,n=P.bi(b,c,J.aO(a))
if(b===n)return""
s=P.pr(a,b,n)
r=o.bR(s,0,n-b,!0)
q=o.b
if((q&1)!==0){p=P.ps(q)
o.b=0
throw H.c(P.a6(p,a,b+o.c))}return r},
bR:function(a,b,c,d){var s,r,q=this
if(c-b>1000){s=C.c.a6(b+c,2)
r=q.bR(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bR(a,s,c,d)}return q.hN(a,b,c,d)},
hN:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.Z(""),f=b+1,e=a.length
if(b<0||b>=e)return H.d(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.D("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.D(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.at(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.at(j)
break
case 65:g.a+=H.at(j);--f
break
default:p=g.a+=H.at(j)
g.a=p+H.at(j)
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
g.a+=H.at(a[l])}else g.a+=P.fl(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.at(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.X.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.X&&this.a===b.a&&!0},
an:function(a,b){return C.c.an(this.a,b.a)},
gF:function(a){var s=this.a
return(s^C.c.aY(s,30))&1073741823},
i:function(a){var s=this,r=P.o2(H.ou(s)),q=P.et(H.os(s)),p=P.et(H.oo(s)),o=P.et(H.op(s)),n=P.et(H.or(s)),m=P.et(H.ot(s)),l=P.o3(H.oq(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bz.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bz&&this.a===b.a},
gF:function(a){return C.c.gF(this.a)},
an:function(a,b){return C.c.an(this.a,b.a)},
i:function(a){var s,r,q,p=new P.il(),o=this.a
if(o<0)return"-"+new P.bz(0-o).i(0)
s=p.$1(C.c.a6(o,6e7)%60)
r=p.$1(C.c.a6(o,1e6)%60)
q=new P.ik().$1(o%1e6)
return""+C.c.a6(o,36e8)+":"+s+":"+r+"."+q}}
P.ik.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:30}
P.il.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:30}
P.K.prototype={}
P.ek.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.is(s)
return"Assertion failed"}}
P.fy.prototype={}
P.eX.prototype={
i:function(a){return"Throw of null."}}
P.aA.prototype={
gbT:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbS:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbT()+o+m
if(!q.a)return l
s=q.gbS()
r=P.is(q.b)
return l+s+": "+r}}
P.dl.prototype={
gbT:function(){return"RangeError"},
gbS:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.x(q):""
else if(q==null)s=": Not greater than or equal to "+H.x(r)
else if(q>r)s=": Not in inclusive range "+H.x(r)+".."+H.x(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.x(r)
return s}}
P.eB.prototype={
gbT:function(){return"RangeError"},
gbS:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl:function(a){return this.f}}
P.fI.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fF.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.cc.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ep.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.is(s)+"."}}
P.f_.prototype={
i:function(a){return"Out of Memory"},
$iK:1}
P.dq.prototype={
i:function(a){return"Stack Overflow"},
$iK:1}
P.er.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.h3.prototype={
i:function(a){return"Exception: "+this.a}}
P.iy.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.v(d,0,75)+"..."
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
i=""}h=C.a.v(d,k,l)
return f+j+h+i+"\n"+C.a.M(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.x(e)+")"):f}}
P.h.prototype={
bI:function(a,b){return new H.b3(this,b,H.S(this).L("b3<h.E>"))},
gl:function(a){var s,r=this.gP(this)
for(s=0;r.u();)++s
return s},
gaQ:function(a){var s,r=this.gP(this)
if(!r.u())throw H.c(H.iE())
s=r.gB(r)
if(r.u())throw H.c(H.oa())
return s},
J:function(a,b){var s,r,q
P.mi(b,"index")
for(s=this.gP(this),r=0;s.u();){q=s.gB(s)
if(b===r)return q;++r}throw H.c(P.O(b,this,"index",null,r))},
i:function(a){return P.o9(this,"(",")")}}
P.eC.prototype={}
P.ae.prototype={
gF:function(a){return P.P.prototype.gF.call(C.V,this)},
i:function(a){return"null"}}
P.P.prototype={constructor:P.P,$iP:1,
q:function(a,b){return this===b},
gF:function(a){return H.dj(this)},
i:function(a){return"Instance of '"+H.dk(this)+"'"},
toString:function(){return this.i(this)}}
P.Z.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jK.prototype={
$2:function(a,b){var s,r,q,p=C.a.dR(b,"=")
if(p===-1){if(b!=="")J.l7(a,P.lF(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.v(b,0,p)
r=C.a.ai(b,p+1)
q=this.a
J.l7(a,P.lF(s,0,s.length,q,!0),P.lF(r,0,r.length,q,!0))}return a},
$S:44}
P.jH.prototype={
$2:function(a,b){throw H.c(P.a6("Illegal IPv4 address, "+a,this.a,b))},
$S:43}
P.jI.prototype={
$2:function(a,b){throw H.c(P.a6("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:42}
P.jJ.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.kS(C.a.v(this.b,a,b),16)
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
else o=H.i(H.lj("_text"))}return o},
gF:function(a){var s=this,r=s.z
if(r==null){r=C.a.gF(s.gc5())
if(s.z==null)s.z=r
else r=H.i(H.lj("hashCode"))}return r},
gcw:function(){var s=this,r=s.Q
if(r==null){r=s.f
r=new P.cl(P.mx(r==null?"":r),t.dw)
if(s.Q==null)s.Q=r
else r=H.i(H.lj("queryParameters"))}return r},
gem:function(){return this.b},
gcq:function(a){var s=this.c
if(s==null)return""
if(C.a.a1(s,"["))return C.a.v(s,1,s.length-1)
return s},
gbD:function(a){var s=this.d
return s==null?P.mT(this.a):s},
gcv:function(a){var s=this.f
return s==null?"":s},
gdM:function(){var s=this.r
return s==null?"":s},
ef:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a1(s,"/"))s="/"+s
q=s
p=P.lD(null,0,0,b)
return new P.bM(n,l,j,k,q,p,o.r)},
gdN:function(){return this.c!=null},
gdQ:function(){return this.f!=null},
gdO:function(){return this.r!=null},
i:function(a){return this.gc5()},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.dD.b(b))if(q.a===b.gbJ())if(q.c!=null===b.gdN())if(q.b===b.gem())if(q.gcq(q)===b.gcq(b))if(q.gbD(q)===b.gbD(b))if(q.e===b.gea(b)){s=q.f
r=s==null
if(!r===b.gdQ()){if(r)s=""
if(s===b.gcv(b)){s=q.r
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
$ifJ:1,
gbJ:function(){return this.a},
gea:function(a){return this.e}}
P.kn.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=P.ko(C.h,a,C.e,!0)
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=P.ko(C.h,b,C.e,!0)}},
$S:40}
P.km.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.az(b),r=this.a;s.u();)r.$2(a,s.gB(s))},
$S:5}
P.jG.prototype={
gel:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.d(m,0)
s=o.a
m=m[0]+1
r=C.a.bx(s,"?",m)
q=s.length
if(r>=0){p=P.e4(s,r+1,q,C.k,!1)
q=r}else p=n
m=o.c=new P.fW("data","",n,n,P.e4(s,m,q,C.y,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.ky.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.d(s,a)
s=s[a]
C.a0.hU(s,0,96,b)
return s},
$S:39}
P.kz.prototype={
$3:function(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=C.a.D(b,r)^96
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:23}
P.kA.prototype={
$3:function(a,b,c){var s,r,q
for(s=C.a.D(b,0),r=C.a.D(b,1);s<=r;++s){q=(s^96)>>>0
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:23}
P.ho.prototype={
gdN:function(){return this.c>0},
gdP:function(){return this.c>0&&this.d+1<this.e},
gdQ:function(){return this.f<this.r},
gdO:function(){return this.r<this.a.length},
gbJ:function(){var s=this.x
return s==null?this.x=this.eU():s},
eU:function(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&C.a.a1(r.a,"http"))return"http"
if(q===5&&C.a.a1(r.a,"https"))return"https"
if(s&&C.a.a1(r.a,"file"))return"file"
if(q===7&&C.a.a1(r.a,"package"))return"package"
return C.a.v(r.a,0,q)},
gem:function(){var s=this.c,r=this.b+3
return s>r?C.a.v(this.a,r,s-1):""},
gcq:function(a){var s=this.c
return s>0?C.a.v(this.a,s,this.d):""},
gbD:function(a){var s,r=this
if(r.gdP())return P.kS(C.a.v(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&C.a.a1(r.a,"http"))return 80
if(s===5&&C.a.a1(r.a,"https"))return 443
return 0},
gea:function(a){return C.a.v(this.a,this.e,this.f)},
gcv:function(a){var s=this.f,r=this.r
return s<r?C.a.v(this.a,s+1,r):""},
gdM:function(){var s=this.r,r=this.a
return s<r.length?C.a.ai(r,s+1):""},
gcw:function(){var s=this
if(s.f>=s.r)return C.a_
return new P.cl(P.mx(s.gcv(s)),t.dw)},
ef:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbJ(),k=l==="file",j=n.c,i=j>0?C.a.v(n.a,n.b+3,j):"",h=n.gdP()?n.gbD(n):m
j=n.c
if(j>0)s=C.a.v(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.v(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a1(r,"/"))r="/"+r
p=P.lD(m,0,0,b)
q=n.r
o=q<j.length?C.a.ai(j,q+1):m
return new P.bM(l,i,s,h,r,p,o)},
gF:function(a){var s=this.y
return s==null?this.y=C.a.gF(this.a):s},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.dD.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifJ:1}
P.fW.prototype={}
W.v.prototype={}
W.i0.prototype={
gl:function(a){return a.length}}
W.ei.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.ej.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bR.prototype={$ibR:1}
W.bu.prototype={$ibu:1}
W.bv.prototype={$ibv:1}
W.bw.prototype={
cF:function(a,b,c){if(c!=null)return a.getContext(b,P.n9(c))
return a.getContext(b)},
eq:function(a,b){return this.cF(a,b,null)},
$ibw:1}
W.cG.prototype={$icG:1}
W.aB.prototype={
gl:function(a){return a.length}}
W.ic.prototype={
gl:function(a){return a.length}}
W.I.prototype={$iI:1}
W.cL.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.id.prototype={}
W.ap.prototype={}
W.aR.prototype={}
W.ie.prototype={
gl:function(a){return a.length}}
W.ig.prototype={
gl:function(a){return a.length}}
W.ih.prototype={
gl:function(a){return a.length}}
W.ba.prototype={$iba:1}
W.ii.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cN.prototype={
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
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$iq:1}
W.cO.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.x(r)+", "
s=a.top
s.toString
return r+H.x(s)+") "+H.x(this.gaA(a))+" x "+H.x(this.gat(a))},
q:function(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=J.aM(b)
if(s===r.gbB(b)){s=a.top
s.toString
s=s===r.gbF(b)&&this.gaA(a)===r.gaA(b)&&this.gat(a)===r.gat(b)}else s=!1}else s=!1
return s},
gF:function(a){var s,r=a.left
r.toString
r=C.d.gF(r)
s=a.top
s.toString
return W.mK(r,C.d.gF(s),C.d.gF(this.gaA(a)),C.d.gF(this.gat(a)))},
gds:function(a){var s=a.bottom
s.toString
return s},
gcZ:function(a){return a.height},
gat:function(a){var s=this.gcZ(a)
s.toString
return s},
gbB:function(a){var s=a.left
s.toString
return s},
gcC:function(a){var s=a.right
s.toString
return s},
gbF:function(a){var s=a.top
s.toString
return s},
gdh:function(a){return a.width},
gaA:function(a){var s=this.gdh(a)
s.toString
return s},
$iad:1}
W.ev.prototype={
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
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$iq:1}
W.ij.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.fT.prototype={
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
gP:function(a){var s=this.iz(this)
return new J.aa(s,s.length)}}
W.E.prototype={
gae:function(a){return new W.h0(a)},
gbt:function(a){var s=a.children
s.toString
return new W.fT(a,s)},
gdv:function(a){var s,r,q,p=a.clientLeft
p.toString
s=a.clientTop
s.toString
r=a.clientWidth
r.toString
q=a.clientHeight
q.toString
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.ad(p,s,r,q,t.I)},
i:function(a){var s=a.localName
s.toString
return s},
ao:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.m4
if(s==null){s=H.b([],t.Q)
r=new W.dh(s)
s.push(W.mJ(null))
s.push(W.mO())
$.m4=r
d=r}else d=s
s=$.m3
if(s==null){s=new W.hK(d)
$.m3=s
c=s}else{s.a=d
c=s}}if($.bb==null){s=document
r=s.implementation.createHTMLDocument("")
r.toString
$.bb=r
r=r.createRange()
r.toString
$.lb=r
r=$.bb.createElement("base")
t.cR.a(r)
s=s.baseURI
s.toString
r.href=s
$.bb.head.appendChild(r).toString}s=$.bb
if(s.body==null){r=s.createElement("body")
s.body=t.Y.a(r)}s=$.bb
if(t.Y.b(a)){s=s.body
s.toString
q=s}else{s.toString
r=a.tagName
r.toString
q=s.createElement(r)
$.bb.body.appendChild(q).toString}s="createContextualFragment" in window.Range.prototype
s.toString
if(s){s=a.tagName
s.toString
s=!C.b.A(C.Y,s)}else s=!1
if(s){$.lb.selectNodeContents(q)
s=$.lb
s=s.createContextualFragment(b)
s.toString
p=s}else{q.innerHTML=b
s=$.bb.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.bb.body)J.lW(q)
c.cG(p)
document.adoptNode(p).toString
return p},
hL:function(a,b,c){return this.ao(a,b,c,null)},
er:function(a,b){var s
a.textContent=null
s=a.appendChild(this.ao(a,b,null,null))
s.toString},
geh:function(a){var s=a.tagName
s.toString
return s},
$iE:1}
W.im.prototype={
$1:function(a){return t.h.b(a)},
$S:24}
W.l.prototype={$il:1}
W.e.prototype={
hu:function(a,b,c,d){if(c!=null)this.eO(a,b,c,!1)},
eO:function(a,b,c,d){return a.addEventListener(b,H.cy(c,1),!1)},
$ie:1}
W.aj.prototype={$iaj:1}
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
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$iq:1,
$ibX:1}
W.ew.prototype={
gl:function(a){return a.length}}
W.ey.prototype={
gl:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.iB.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.bB.prototype={
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
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$iq:1}
W.bC.prototype={
gdz:function(a){var s=a.data
s.toString
return s},
$ibC:1}
W.bZ.prototype={$ibZ:1}
W.c0.prototype={$ic0:1}
W.bD.prototype={$ibD:1}
W.iM.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.j2.prototype={
gl:function(a){return a.length}}
W.c3.prototype={$ic3:1}
W.eP.prototype={
h:function(a,b){return P.bq(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bq(s.value[1]))}},
ga2:function(a){var s=H.b([],t.s)
this.E(a,new W.j3(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iG:1}
W.j3.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.eQ.prototype={
h:function(a,b){return P.bq(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bq(s.value[1]))}},
ga2:function(a){var s=H.b([],t.s)
this.E(a,new W.j4(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iG:1}
W.j4.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.aG.prototype={$iaG:1}
W.eR.prototype={
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
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$iq:1}
W.ak.prototype={$iak:1}
W.a5.prototype={
gaQ:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.lp("No elements"))
if(r>1)throw H.c(P.lp("More than one element"))
s=s.firstChild
s.toString
return s},
a8:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q).toString}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b]).toString},
gP:function(a){var s=this.a.childNodes
return new W.cT(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.t.prototype={
ip:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a).toString},
is:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.nL(s,b,a)}catch(q){H.ai(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.ev(a):s},
h9:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$it:1}
W.dg.prototype={
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
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$iq:1}
W.aI.prototype={
gl:function(a){return a.length},
$iaI:1}
W.f3.prototype={
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
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$iq:1}
W.f9.prototype={
h:function(a,b){return P.bq(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bq(s.value[1]))}},
ga2:function(a){var s=H.b([],t.s)
this.E(a,new W.jh(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iG:1}
W.jh.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.fb.prototype={
gl:function(a){return a.length}}
W.av.prototype={$iav:1}
W.fd.prototype={
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
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$iq:1}
W.aJ.prototype={$iaJ:1}
W.fe.prototype={
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
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$iq:1}
W.aK.prototype={
gl:function(a){return a.length},
$iaK:1}
W.fi.prototype={
h:function(a,b){return a.getItem(H.kv(b))},
m:function(a,b,c){a.setItem(b,c)},
E:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga2:function(a){var s=H.b([],t.s)
this.E(a,new W.jp(s))
return s},
gl:function(a){var s=a.length
s.toString
return s},
$iG:1}
W.jp.prototype={
$2:function(a,b){return this.a.push(a)},
$S:50}
W.al.prototype={$ial:1}
W.bl.prototype={$ibl:1}
W.dr.prototype={
ao:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bL(a,b,c,d)
s=W.o5("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new W.a5(r).a8(0,new W.a5(s))
return r}}
W.fm.prototype={
ao:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bL(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a5(C.D.ao(r,b,c,d))
r=new W.a5(r.gaQ(r))
new W.a5(s).a8(0,new W.a5(r.gaQ(r)))
return s}}
W.fn.prototype={
ao:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bL(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a5(C.D.ao(r,b,c,d))
new W.a5(s).a8(0,new W.a5(r.gaQ(r)))
return s}}
W.cf.prototype={$icf:1}
W.aw.prototype={$iaw:1}
W.ag.prototype={$iag:1}
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
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$iq:1}
W.fq.prototype={
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
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$iq:1}
W.jv.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.ax.prototype={$iax:1}
W.bI.prototype={$ibI:1}
W.fw.prototype={
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
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$iq:1}
W.jA.prototype={
gl:function(a){return a.length}}
W.b2.prototype={}
W.jL.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.fM.prototype={
gl:function(a){return a.length}}
W.bm.prototype={
ghP:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.C("deltaY is not supported"))},
ghO:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.C("deltaX is not supported"))},
$ibm:1}
W.cq.prototype={
ha:function(a,b){var s=a.requestAnimationFrame(H.cy(b,1))
s.toString
return s},
f0:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cr.prototype={$icr:1}
W.fU.prototype={
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
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$iq:1}
W.dH.prototype={
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
r=J.aM(b)
if(s===r.gbB(b)){s=a.top
s.toString
if(s===r.gbF(b)){s=a.width
s.toString
if(s===r.gaA(b)){s=a.height
s.toString
r=s===r.gat(b)
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
return W.mK(p,s,r,C.d.gF(q))},
gcZ:function(a){return a.height},
gat:function(a){var s=a.height
s.toString
return s},
gdh:function(a){return a.width},
gaA:function(a){var s=a.width
s.toString
return s}}
W.h7.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$iq:1}
W.dN.prototype={
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
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$iq:1}
W.hr.prototype={
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
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$iq:1}
W.hy.prototype={
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
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$iq:1}
W.fR.prototype={
E:function(a,b){var s,r,q,p,o
for(s=this.ga2(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.p)(s),++p){o=s[p]
b.$2(o,H.kv(q.getAttribute(o)))}},
ga2:function(a){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=H.b([],t.s)
for(r=m.length,q=t.h9,p=0;p<r;++p){if(p>=m.length)return H.d(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
s.push(n)}}return s}}
W.h0.prototype={
h:function(a,b){return this.a.getAttribute(H.kv(b))},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga2(this).length}}
W.ld.prototype={}
W.dI.prototype={
hr:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.nM(s,this.c,r,!1)}}}
W.k5.prototype={
$1:function(a){return this.a.$1(a)},
$S:3}
W.lv.prototype={}
W.cs.prototype={
eD:function(a){var s
if($.dJ.gby($.dJ)){for(s=0;s<262;++s)$.dJ.m(0,C.X[s],W.qv())
for(s=0;s<12;++s)$.dJ.m(0,C.n[s],W.qw())}},
b_:function(a){return $.nI().A(0,W.cQ(a))},
aC:function(a,b,c){var s=$.dJ.h(0,W.cQ(a)+"::"+b)
if(s==null)s=$.dJ.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iaH:1}
W.N.prototype={
gP:function(a){return new W.cT(a,this.gl(a))}}
W.dh.prototype={
b_:function(a){return C.b.dn(this.a,new W.j7(a))},
aC:function(a,b,c){return C.b.dn(this.a,new W.j6(a,b,c))},
$iaH:1}
W.j7.prototype={
$1:function(a){return a.b_(this.a)},
$S:25}
W.j6.prototype={
$1:function(a){return a.aC(this.a,this.b,this.c)},
$S:25}
W.dT.prototype={
eI:function(a,b,c,d){var s,r,q
this.a.a8(0,c)
s=b.bI(0,new W.kd())
r=b.bI(0,new W.ke())
this.b.a8(0,s)
q=this.c
q.a8(0,C.v)
q.a8(0,r)},
b_:function(a){return this.a.A(0,W.cQ(a))},
aC:function(a,b,c){var s=this,r=W.cQ(a),q=s.c
if(q.A(0,r+"::"+b))return s.d.hy(c)
else if(q.A(0,"*::"+b))return s.d.hy(c)
else{q=s.b
if(q.A(0,r+"::"+b))return!0
else if(q.A(0,"*::"+b))return!0
else if(q.A(0,r+"::*"))return!0
else if(q.A(0,"*::*"))return!0}return!1},
$iaH:1}
W.kd.prototype={
$1:function(a){return!C.b.A(C.n,a)},
$S:26}
W.ke.prototype={
$1:function(a){return C.b.A(C.n,a)},
$S:26}
W.hA.prototype={
aC:function(a,b,c){if(this.ey(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.A(0,b)
return!1}}
W.kj.prototype={
$1:function(a){return"TEMPLATE::"+a},
$S:35}
W.hz.prototype={
b_:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cQ(a)==="foreignObject")return!1
if(s)return!0
return!1},
aC:function(a,b,c){if(b==="is"||C.a.a1(b,"on"))return!1
return this.b_(a)},
$iaH:1}
W.cT.prototype={
u:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.lV(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gB:function(a){return H.S(this).c.a(this.d)}}
W.kc.prototype={}
W.hK.prototype={
cG:function(a){var s,r=new W.kr(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
bg:function(a,b){++this.b
if(b==null||b!==a.parentNode)J.lW(a)
else b.removeChild(a).toString},
he:function(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
try{k=J.nO(a)
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
o=p}l=o}catch(n){H.ai(n)}r="element unprintable"
try{r=J.cD(a)}catch(n){H.ai(n)}try{q=W.cQ(a)
this.hd(a,b,l,r,q,k,j)}catch(n){if(H.ai(n) instanceof P.aA)throw n
else{this.bg(a,b)
p=window
p.toString
p="Removing corrupted element "+H.x(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(p)}}},
hd:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.bg(a,b)
window.toString
s="Removing element due to corrupted attributes on <"+d+">"
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(!m.a.b_(a)){m.bg(a,b)
window.toString
s="Removing disallowed element <"+e+"> from "+H.x(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(g!=null)if(!m.a.aC(a,"is",g)){m.bg(a,b)
window.toString
s="Removing disallowed type extension <"+e+' is="'+g+'">'
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}s=f.ga2(f)
q=H.b(s.slice(0),H.ku(s))
for(p=f.ga2(f).length-1,s=f.a;p>=0;--p){if(p>=q.length)return H.d(q,p)
o=q[p]
r=m.a
n=J.nS(o)
H.kv(o)
if(!r.aC(a,n,s.getAttribute(o))){window.toString
r="Removing disallowed attribute <"+e+" "+o+'="'+H.x(s.getAttribute(o))+'">'
n=typeof console!="undefined"
n.toString
if(n)window.console.warn(r)
s.removeAttribute(o)}}if(t.aW.b(a)){s=a.content
s.toString
m.cG(s)}}}
W.kr.prototype={
$2:function(a,b){var s,r,q,p,o=this.a,n=a.nodeType
n.toString
switch(n){case 1:o.he(a,b)
break
case 8:case 11:case 3:case 4:break
default:o.bg(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){n=r.nextSibling
q=s
q=n==null?q!=null:n!==q
n=q}else n=!1
if(n){n=P.lp("Corrupt HTML")
throw H.c(n)}}catch(p){H.ai(p)
n=s;++o.b
q=n.parentNode
if(a!==q){if(q!=null)q.removeChild(n).toString}else a.removeChild(n).toString
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:34}
W.fV.prototype={}
W.fX.prototype={}
W.fY.prototype={}
W.fZ.prototype={}
W.h_.prototype={}
W.h4.prototype={}
W.h5.prototype={}
W.h8.prototype={}
W.h9.prototype={}
W.hc.prototype={}
W.hd.prototype={}
W.he.prototype={}
W.hf.prototype={}
W.hg.prototype={}
W.hh.prototype={}
W.hk.prototype={}
W.hl.prototype={}
W.hn.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.hp.prototype={}
W.hq.prototype={}
W.hv.prototype={}
W.hB.prototype={}
W.hC.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.hD.prototype={}
W.hE.prototype={}
W.hL.prototype={}
W.hM.prototype={}
W.hN.prototype={}
W.hO.prototype={}
W.hP.prototype={}
W.hQ.prototype={}
W.hR.prototype={}
W.hS.prototype={}
W.hT.prototype={}
W.hU.prototype={}
P.kf.prototype={
cn:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bH:function(a){var s,r,q,p,o,n=this,m={}
if(a==null)return a
if(H.kB(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.X)return new Date(a.a)
if(t.fJ.b(a))throw H.c(P.jF("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.fK.b(a))return a
if(t.bX.b(a))return a
if(t.x.b(a))return a
if(t.bZ.b(a)||t.dE.b(a)||t.bu.b(a))return a
if(t.f.b(a)){s=n.cn(a)
r=n.b
q=r.length
if(s>=q)return H.d(r,s)
p=m.a=r[s]
if(p!=null)return p
p={}
m.a=p
if(s>=q)return H.d(r,s)
r[s]=p
J.eh(a,new P.kh(m,n))
return m.a}if(t.r.b(a)){s=n.cn(a)
m=n.b
if(s>=m.length)return H.d(m,s)
p=m[s]
if(p!=null)return p
return n.hK(a,s)}if(t.eH.b(a)){s=n.cn(a)
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
n.i_(a,new P.ki(m,n))
return m.b}throw H.c(P.jF("structured clone of other type"))},
hK:function(a,b){var s,r,q=J.cB(a),p=q.gl(a),o=new Array(p)
o.toString
s=this.b
if(b>=s.length)return H.d(s,b)
s[b]=o
for(r=0;r<p;++r){s=this.bH(q.h(a,r))
if(r>=o.length)return H.d(o,r)
o[r]=s}return o}}
P.kh.prototype={
$2:function(a,b){this.a.a[a]=this.b.bH(b)},
$S:10}
P.ki.prototype={
$2:function(a,b){this.a.b[a]=this.b.bH(b)},
$S:33}
P.e0.prototype={$ibC:1,
gdz:function(a){return this.a}}
P.kw.prototype={
$1:function(a){this.a.push(P.n0(a))},
$S:31}
P.kF.prototype={
$2:function(a,b){this.a[a]=P.n0(b)},
$S:10}
P.kg.prototype={
i_:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
b.$2(p,a[p])}}}
P.ex.prototype={
gbe:function(){var s=this.b,r=H.S(s)
return new H.aW(new H.b3(s,new P.iw(),r.L("b3<j.E>")),new P.ix(),r.L("aW<j.E,E>"))},
E:function(a,b){C.b.E(P.iL(this.gbe(),!1,t.h),b)},
m:function(a,b,c){var s=this.gbe()
J.nR(s.b.$1(J.i_(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b).toString},
gl:function(a){return J.aO(this.gbe().a)},
h:function(a,b){var s=this.gbe()
return s.b.$1(J.i_(s.a,b))},
gP:function(a){var s=P.iL(this.gbe(),!1,t.h)
return new J.aa(s,s.length)}}
P.iw.prototype={
$1:function(a){return t.h.b(a)},
$S:24}
P.ix.prototype={
$1:function(a){return t.h.a(a)},
$S:60}
P.hm.prototype={
gcC:function(a){return this.$ti.c.a(this.a+this.c)},
gds:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
q:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.I.b(b)){s=o.a
r=J.aM(b)
if(s===r.gbB(b)){q=o.b
if(q===r.gbF(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gcC(b)&&p.a(q+o.d)===r.gds(b)}else s=!1}else s=!1}else s=!1
return s},
gF:function(a){var s=this,r=s.a,q=C.c.gF(r),p=s.b,o=C.c.gF(p),n=s.$ti.c
r=C.c.gF(n.a(r+s.c))
p=C.c.gF(n.a(p+s.d))
return H.oF(H.jq(H.jq(H.jq(H.jq(0,q),o),r),p))}}
P.ad.prototype={
gbB:function(a){return this.a},
gbF:function(a){return this.b},
gaA:function(a){return this.c},
gat:function(a){return this.d}}
P.aV.prototype={$iaV:1}
P.eI.prototype={
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
J:function(a,b){return this.h(a,b)},
$in:1,
$ih:1,
$iq:1}
P.b_.prototype={$ib_:1}
P.eY.prototype={
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
J:function(a,b){return this.h(a,b)},
$in:1,
$ih:1,
$iq:1}
P.ja.prototype={
gl:function(a){return a.length}}
P.c9.prototype={$ic9:1}
P.fk.prototype={
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
J:function(a,b){return this.h(a,b)},
$in:1,
$ih:1,
$iq:1}
P.o.prototype={
gbt:function(a){return new P.ex(a,new W.a5(a))},
ao:function(a,b,c,d){var s,r,q,p,o=H.b([],t.Q)
o.push(W.mJ(null))
o.push(W.mO())
o.push(new W.hz())
c=new W.hK(new W.dh(o))
s='<svg version="1.1">'+b+"</svg>"
o=document
r=o.body
r.toString
q=C.p.hL(r,s,c)
o=o.createDocumentFragment()
o.toString
r=new W.a5(q)
p=r.gaQ(r)
for(;r=p.firstChild,r!=null;)o.appendChild(r).toString
return o},
$io:1}
P.b0.prototype={$ib0:1}
P.fx.prototype={
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
J:function(a,b){return this.h(a,b)},
$in:1,
$ih:1,
$iq:1}
P.ha.prototype={}
P.hb.prototype={}
P.hi.prototype={}
P.hj.prototype={}
P.hw.prototype={}
P.hx.prototype={}
P.hF.prototype={}
P.hG.prototype={}
P.i3.prototype={
gl:function(a){return a.length}}
P.em.prototype={
h:function(a,b){return P.bq(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bq(s.value[1]))}},
ga2:function(a){var s=H.b([],t.s)
this.E(a,new P.i4(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iG:1}
P.i4.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
P.en.prototype={
gl:function(a){return a.length}}
P.b8.prototype={}
P.eZ.prototype={
gl:function(a){return a.length}}
P.fS.prototype={}
P.c8.prototype={
ej:function(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&H.hW(g)){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}if(t.x.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,P.qn(g))
return}if(t.fS.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.bQ("Incorrect number or type of arguments"))},
ix:function(a,b,c,d,e,f,g){return this.ej(a,b,c,d,e,f,g,null,null,null)},
$ic8:1}
P.ff.prototype={
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
J:function(a,b){return this.h(a,b)},
$in:1,
$ih:1,
$iq:1}
P.hs.prototype={}
P.ht.prototype={}
K.aP.prototype={
aO:function(a,b){return!0},
i:function(a){return"all"},
$iaX:1}
K.cV.prototype={
aO:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)if(s[q].aO(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.p)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q},
$iaX:1}
K.ac.prototype={
aO:function(a,b){return!this.eu(0,b)},
i:function(a){return"!["+this.bM(0)+"]"}}
K.f6.prototype={
aO:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var s=H.at(this.a),r=H.at(this.b)
return s+".."+r},
$iaX:1}
K.u.prototype={
p:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.f("May not create a Set with zero characters."))
s=new H.W(t.fX)
for(r=new H.be(a,a.gl(a)),q=H.S(r).c;r.u();)s.m(0,q.a(r.d),!0)
p=P.iL(s.ga2(s),!0,t.S)
C.b.es(p)
this.a=p},
aO:function(a,b){return C.b.A(this.a,b)},
i:function(a){return P.fl(this.a,0,null)},
$iaX:1}
L.fg.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.dt(this.a.k(0,b),H.b([],t.z))
s.push(p)
return p},
hV:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
if(p.aO(0,a))return p}return null},
i:function(a){return this.b},
de:function(){var s,r,q,p,o,n,m=this,l=""+("("+m.b+")"),k=m.d
if(k!=null){l+=" => ["+k.b+"]"
k=m.a.c
s=m.d
if(k.A(0,s==null?null:s.b))l+=" (consume)"
s=m.d
if(s==null)s=null
else{s=s.c
s=s.ga2(s)}s=J.az(s==null?H.b([],t.s):s)
for(;s.u();){r=s.gB(s)
l+="\n"
q=m.d
p=q==null?null:q.c.h(0,r)
if(p==null)p=""
l+="  -- "+r+" => ["+p+"]"
if(k.A(0,p))l+=" (consume)"}}for(k=m.c,s=k.length,o=0;o<k.length;k.length===s||(0,H.p)(k),++o){n=k[o]
l+="\n"
l+="  -- "+(n.b.b+": "+n.bM(0))}return l.charCodeAt(0)==0?l:l}}
L.fu.prototype={
i:function(a){var s=H.lR(this.b,"\n","\\n"),r=H.lR(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fv.prototype={
aP:function(a,b,c){var s,r,q
for(s=c.length,r=this.c,q=0;q<c.length;c.length===s||(0,H.p)(c),++q)r.m(0,c[q],b)},
i:function(a){return this.b}}
L.jx.prototype={
k:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.fg(this,b,H.b([],t.ab))
s.m(0,b,r)}return r},
O:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.fv(a,P.U(s,s))
r.m(0,a,q)}return q},
cE:function(a){return this.iC(a)},
iC:function(a){var s=this
return P.pM(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2
return function $async$cE(a3,a4){if(a3===1){o=a4
q=p}while(true)switch(q){case 0:c=s.d
b=t.t
a0=H.b([],b)
a1=H.b([],b)
a2=H.b([],b)
n=H.S(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a2.length!==0)h=C.b.cz(a2,0)
else{if(!r.u()){q=3
break}h=n.a(r.d)}a1.push(h);++k
g=c==null
f=g?null:c.hV(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.fl(a1,0,null)
throw H.c(P.f("Untokenizable string [state: "+H.x(g?null:c.b)+", index "+k+']: "'+e+'"'))}if(!!a1.fixed$length)H.i(P.C("removeRange"))
P.bi(0,i,a1.length)
a1.splice(0,i-0)
C.b.a8(a2,a1)
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
if(g!=null){e=P.fl(a0,0,null)
g=c.d
if(g==null)l=null
else{d=g.c.h(0,e)
g=new L.fu(d==null?g.b:d,e,k)
l=g}i=a1.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.A(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.oV()
case 1:return P.oW(o)}}},t.bJ)},
i:function(a){var s,r=new P.Z(""),q=this.d
if(q!=null)r.a=""+(q.de()+"\n")
for(q=this.a,q=q.giD(q),q=q.gP(q);q.u();){s=q.gB(q)
if(s!=this.d)r.a+=H.x(s==null?null:s.de())+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.dt.prototype={
i:function(a){return this.b.b+": "+this.bM(0)}}
O.ab.prototype={
cH:function(a,b,c){this.b=b
this.c=a},
b9:function(a,b){return this.cH(a,null,b)},
d3:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
d_:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gl:function(a){return this.a.length},
gP:function(a){var s=this.a
return new J.aa(s,s.length)},
J:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.S(q).L("w<ab.T>")
if(q.d3(H.b([b],p))){s=q.a
r=s.length
s.push(b)
q.d_(r,H.b([b],p))}},
a8:function(a,b){var s,r
if(this.d3(b)){s=this.a
r=s.length
C.b.a8(s,b)
this.d_(r,b)}},
$ih:1}
O.dc.prototype={
gl:function(a){return this.a.length},
gt:function(){var s=this.b
return s==null?this.b=D.M():s},
aT:function(){var s=this.b
return s==null?null:s.G(null)},
ga_:function(a){var s=this.a
if(s.length>0)return C.b.gaE(s)
else return V.aZ()},
ec:function(a){this.a.push(a)
this.aT()},
cu:function(){var s=this.a
if(s.length>0){s.pop()
this.aT()}}}
E.i8.prototype={}
E.bA.prototype={
cR:function(){var s,r,q
this.e=null
for(s=this.y.a,s=new J.aa(s,s.length),r=H.S(s).c;s.u();){q=r.a(s.d)
if(q.f==null)q.cR()}},
sah:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().K(0,s.ge5())
if(b!=null)b.gt().n(0,s.ge5())
s.aw(new D.y("shape",r,b))}},
sb4:function(a){var s=this,r=s.f
if(r!=a){s.f=a
if(r!=null)r.gt().K(0,s.ge7())
if(a!=null)a.gt().n(0,s.ge7())
s.cR()
s.aw(new D.y("technique",r,a))}},
sb2:function(a){var s,r,q=this
if(!J.J(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gt().K(0,q.ge3())
if(a!=null)a.gt().n(0,q.ge3())
r=q.r
q.aw(new D.y("mover",s,r))}},
ay:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.aF(0,b,q)
if(!J.J(o,q.x)){s=q.x
q.x=o
q.aw(new D.y("matrix",s,o))}p=q.f
if(p!=null)p.ay(0,b)
for(p=q.y.a,p=new J.aa(p,p.length),r=H.S(p).c;p.u();)r.a(p.d).ay(0,b)},
ax:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.ga_(q))
else o.push(p.M(0,q.ga_(q)))
q.aT()
a.ed(r.f)
s=C.b.gaE(a.dy)
if(r.d!=null)if(s!=null)s.ee(a,r)
for(p=r.y.a,p=new J.aa(p,p.length),o=H.S(p).c;p.u();)o.a(p.d).ax(a)
a.eb()
q.cu()},
aw:function(a){var s=this.z
return s==null?null:s.G(a)},
a0:function(){return this.aw(null)},
e6:function(a){this.e=null
this.aw(a)},
ig:function(){return this.e6(null)},
e8:function(a){return this.aw(a)},
ih:function(){return this.e8(null)},
e4:function(a){return this.aw(a)},
ie:function(){return this.e4(null)},
e2:function(a){return this.aw(a)},
ia:function(){return this.e2(null)},
i9:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.ge1(),q=t.a,p=0;p<b.length;b.length===s||(0,H.p)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bW()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.a0()},
ic:function(a,b){var s,r
for(s=b.gP(b),r=this.ge1();s.u();)s.gB(s).gt().K(0,r)
this.a0()},
i:function(a){return"Unnamed entity"}}
E.bT.prototype={
i:function(a){return this.b}}
E.c6.prototype={
i:function(a){return this.b}}
E.h1.prototype={}
E.jd.prototype={
eC:function(a,b){var s=this
s.cy.gt().n(0,new E.je(s))
s.db.gt().n(0,new E.jf(s))
s.dx.gt().n(0,new E.jg(s))},
gio:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.ga_(q).M(0,s.ga_(s))
q=s}return q},
gen:function(){var s,r=this,q=r.cx
if(q==null){q=r.db
s=r.dx
s=r.cx=q.ga_(q).M(0,s.ga_(s))
q=s}return q},
ed:function(a){var s=this.dy
return s.push(a==null?C.b.gaE(s):a)},
eb:function(){var s=this.dy
if(s.length>1)s.pop()},
dl:function(a){var s,r=a.b
if(r.length===0)throw H.c(P.f("May not cache a shader with no name."))
s=this.fr
if(s.cb(0,r))throw H.c(P.f('Shader cache already contains a shader by the name "'+r+'".'))
s.m(0,r,a)}}
E.je.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:2}
E.jf.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:2}
E.jg.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:2}
E.ft.prototype={
cO:function(a){this.eg()},
cN:function(){return this.cO(null)},
gi0:function(){var s,r=this,q=Date.now(),p=C.c.a6(P.m2(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.X(q,!1)
return s/p},
d6:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.cp(r*o)
r=s.clientHeight
r.toString
p=C.d.cp(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.mr(C.m,this.git())}},
eg:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.F.f0(s)
r=W.n6(new E.ju(this),t.H)
r.toString
C.F.ha(s,r)}},
ir:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.d6()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.X(p,!1)
q.y=P.m2(p-q.r.a).a*0.000001
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
m.ax(q)}q=n.Q
if(q!=null)q.G(null)}catch(o){s=H.ai(o)
r=H.lN(o)
P.lQ("Error: "+H.x(s))
P.lQ("Stack: "+H.x(r))
throw H.c(s)}}}
E.ju.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.ir()}},
$S:32}
Z.fN.prototype={}
Z.bU.prototype={
am:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ai(q)
r=P.f('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.x(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.fO.prototype={}
Z.bV.prototype={
aN:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
am:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].am(a)}},
bo:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
ax:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=t.s,l=H.b([],m)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
l.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.dk(p.c)+"'")+"]")}o=H.b([],m)
for(m=this.c,s=m.length,q=0;q<m.length;m.length===s||(0,H.p)(m),++q){n=m[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(l,", ")+"\nAttrs:   "+C.b.j(o,", ")}}
Z.c_.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.dk(this.c)+"'")+"]"}}
Z.bK.prototype={
gcJ:function(a){var s=this.a,r=(s&$.aN().a)!==0?3:0
if((s&$.bt().a)!==0)r+=3
if((s&$.bs().a)!==0)r+=3
if((s&$.bO().a)!==0)r+=2
if((s&$.bP().a)!==0)r+=3
if((s&$.ef().a)!==0)r+=3
if((s&$.eg().a)!==0)r+=4
if((s&$.cC().a)!==0)++r
return(s&$.br().a)!==0?r+4:r},
hz:function(a){var s,r=$.aN(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bt()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bs()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bO()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bP()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ef()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.eg()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cC()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.br()
if((q&r.a)!==0)if(s===a)return r
return $.nG()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bK))return!1
return this.a===b.a},
i:function(a){var s=H.b([],t.s),r=this.a
if((r&$.aN().a)!==0)s.push("Pos")
if((r&$.bt().a)!==0)s.push("Norm")
if((r&$.bs().a)!==0)s.push("Binm")
if((r&$.bO().a)!==0)s.push("Txt2D")
if((r&$.bP().a)!==0)s.push("TxtCube")
if((r&$.ef().a)!==0)s.push("Clr3")
if((r&$.eg().a)!==0)s.push("Clr4")
if((r&$.cC().a)!==0)s.push("Weight")
if((r&$.br().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.ia.prototype={}
D.bW.prototype={
n:function(a,b){var s=this.a
return(s==null?this.a=H.b([],t.a):s).push(b)},
K:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.b.A(p,b)
if(p===!0){p=r.a
p=p==null?q:C.b.K(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.b.A(p,b)
if(p===!0){p=r.b
p=p==null?q:C.b.K(p,b)
s=p===!0||s}return s},
G:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.Y():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.b.E(P.iL(p,!0,t.h2),new D.it(s))
r=q.b
if(r!=null){q.b=H.b([],t.a)
C.b.E(r,new D.iu(s))}return!0},
dD:function(){return this.G(null)},
ar:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.G(s)}}}}
D.it.prototype={
$1:function(a){a.$1(this.a)},
$S:29}
D.iu.prototype={
$1:function(a){a.$1(this.a)},
$S:29}
D.Y.prototype={}
D.aS.prototype={}
D.aT.prototype={}
D.y.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.x(this.d)+" => "+H.x(this.e)}}
X.cF.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cF))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.eH.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eH))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.iH.prototype={}
X.d4.prototype={}
X.iN.prototype={
bd:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.a0(o.a+b.a,o.b+b.b)
o=q.a.gbu()
s=$.af
if(s==null)s=$.af=new V.a0(0,0)
r=q.x
q.z=new P.X(p,!1)
q.x=n
return new X.c4(a,s,r,o,n)},
ct:function(a,b){this.r=a.a
return!1},
bm:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bl:function(a,b){var s=this.d
if(s==null)return!1
s.G(this.bd(a,b))
return!0},
il:function(a){return!1},
fG:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.G(new X.d4(c,q.a.gbu(),b))
q.y=new P.X(s,!1)
s=$.af
q.x=s==null?$.af=new V.a0(0,0):s}}
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
X.j5.prototype={
bV:function(a,b,c){var s=this,r=new P.X(Date.now(),!1),q=s.a.gbu(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.c4(a,p,o,q,b)},
ct:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.G(this.bV(a,b,!0))
return!0},
bm:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.G(r.bV(a,b,!0))
return!0},
bl:function(a,b){var s=this.d
if(s==null)return!1
s.G(this.bV(a,b,!1))
return!0},
im:function(a,b){return!1}}
X.f5.prototype={}
X.ds.prototype={}
X.jz.prototype={
bd:function(a,b){var s,r,q,p,o=this,n=new P.X(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.af
if(r==null){r=new V.a0(0,0)
$.af=r
s=r}else s=r}r=o.a.gbu()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.ds(q,p,r,s)},
ik:function(a){var s=this.b
if(s==null)return!1
s.G(this.bd(a,!0))
return!0},
ii:function(a){var s=this.c
if(s==null)return!1
s.G(this.bd(a,!0))
return!0},
ij:function(a){var s=this.d
if(s==null)return!1
s.G(this.bd(a,!1))
return!0}}
X.fK.prototype={
gbA:function(a){var s=this.b
return s==null?this.b=new X.iH(P.d1(t.S)):s},
gav:function(){var s,r=this.c
if(r==null){r=$.af
if(r==null){r=$.af=new V.a0(0,0)
s=r}else s=r
r=this.c=new X.j5(this,r,s,new P.X(Date.now(),!1),new P.X(Date.now(),!1))}return r},
gau:function(){var s=this.d
if(s==null){s=$.af
if(s==null)s=$.af=new V.a0(0,0)
s=this.d=new X.iN(this,s,new P.X(Date.now(),!1),new P.X(Date.now(),!1))}return s},
gb6:function(){var s,r=this.e
if(r==null){r=$.af
if(r==null){r=$.af=new V.a0(0,0)
s=r}else s=r
r=this.e=new X.jz(this,r,s,new P.X(Date.now(),!1),new P.X(Date.now(),!1))}return r},
gbu:function(){var s=this.a
return V.mk(0,0,C.i.gdv(s).c,C.i.gdv(s).d)},
cV:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.eH(p,new X.bg(s,r,q))},
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
aK:function(a){var s,r,q,p
if(a==null){s=$.af
return s==null?$.af=new V.a0(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.a0(r-p,q-s)},
bf:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.am(r,s)},
bZ:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=H.b([],t.cG)
r=a.touches
if(r==null)r=H.b([],t.gT)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.p)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.a3(n)
m=o.pageY
m.toString
C.d.a3(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.a3(l)
l=o.pageY
l.toString
l=C.d.a3(l)
k=j.top
k.toString
s.push(new V.a0(n-m,l-k))}return s},
aH:function(a){var s,r,q,p
if(a==null)return new X.cF(0,new X.bg(!1,!1,!1))
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
return new X.cF(s,new X.bg(r,q,p))},
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
fA:function(a){return this.f=!0},
fk:function(a){return this.f=!1},
fs:function(a){if(this.f&&this.bW(a))a.preventDefault()},
fE:function(a){var s,r=this
if(!r.f)return
s=r.cV(a)
r.gbA(r).d.n(0,s.a)},
fC:function(a){var s,r=this
if(!r.f)return
s=r.cV(a)
r.gbA(r).d.K(0,s.a)},
fI:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aX(a)
if(p.x){s=p.aH(a)
r=p.bf(a)
if(p.gau().ct(s,r))a.preventDefault()
return}s=p.aH(a)
q=p.aK(a)
if(p.gav().ct(s,q))a.preventDefault()},
fM:function(a){var s,r,q,p=this
p.aX(a)
s=p.aH(a)
if(p.x){r=p.bf(a)
if(p.gau().bm(s,r))a.preventDefault()
return}q=p.aK(a)
if(p.gav().bm(s,q))a.preventDefault()},
fw:function(a){var s,r,q,p=this
if(!p.bW(a)){p.aX(a)
s=p.aH(a)
if(p.x){r=p.bf(a)
if(p.gau().bm(s,r))a.preventDefault()
return}q=p.aK(a)
if(p.gav().bm(s,q))a.preventDefault()}},
fK:function(a){var s,r,q,p=this
p.aX(a)
s=p.aH(a)
if(p.x){r=p.bf(a)
if(p.gau().bl(s,r))a.preventDefault()
return}q=p.aK(a)
if(p.gav().bl(s,q))a.preventDefault()},
fu:function(a){var s,r,q,p=this
if(!p.bW(a)){p.aX(a)
s=p.aH(a)
if(p.x){r=p.bf(a)
if(p.gau().bl(s,r))a.preventDefault()
return}q=p.aK(a)
if(p.gav().bl(s,q))a.preventDefault()}},
fO:function(a){var s,r,q=this
q.aX(a)
s=new V.am(C.E.ghO(a),C.E.ghP(a)).M(0,q.Q)
if(q.x){if(q.gau().il(s))a.preventDefault()
return}r=q.aK(a)
if(q.gav().im(s,r))a.preventDefault()},
fQ:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aH(q.y)
r=q.aK(q.y)
q.gau().fG(s,r,p)}},
h5:function(a){var s,r=this
r.a.focus()
r.f=!0
r.c2(a)
s=r.bZ(a)
if(r.gb6().ik(s))a.preventDefault()},
h1:function(a){var s
this.c2(a)
s=this.bZ(a)
if(this.gb6().ii(s))a.preventDefault()},
h3:function(a){var s
this.c2(a)
s=this.bZ(a)
if(this.gb6().ij(s))a.preventDefault()}}
D.d_.prototype={
gt:function(){var s=this.y
return s==null?this.y=D.M():s},
gdW:function(){var s=this.z
return s==null?this.z=D.M():s},
X:function(a){var s=this.y
return s==null?null:s.G(a)},
d2:function(a){var s=this.z
return s==null?null:s.G(a)},
fF:function(){return this.d2(null)},
fS:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.p)(a),++r)if(this.eE(a[r]))return!1
return!0},
fe:function(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=this.gd1(),q=this.x,p=t.a,o=0;o<b.length;b.length===s||(0,H.p)(b),++o){n=b[o]
q.push(n)
m=n.go
if(m==null)m=n.go=new D.bW()
l=m.a;(l==null?m.a=H.b([],p):l).push(r)}this.X(new D.aS())},
fW:function(a,b){var s,r,q,p
for(s=b.gP(b),r=this.gd1(),q=this.e;s.u();){p=s.gB(s)
C.b.K(q,p)
p.gt().K(0,r)}this.X(new D.aT())},
eE:function(a){var s=C.b.A(this.x,a)
return s}}
D.cb.prototype={
X:function(a){var s=this.go
return s==null?null:s.G(a)},
eF:function(){return this.X(null)},
gaf:function(){var s=this.x!=null?1:0,r=this.y!=null?2:0,q=this.db?8:0
return s+r+4+q},
$iar:1}
V.V.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.V))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.ao.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ao))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.B(s.a,3,0)+", "+V.B(s.b,3,0)+", "+V.B(s.c,3,0)+", "+V.B(s.d,3,0)+"]"},
w:function(){var s=this
return"["+V.B(s.a,3,0)+", "+V.B(s.b,3,0)+", "+V.B(s.c,3,0)+", "+V.B(s.d,3,0)+"]"}}
V.ir.prototype={}
V.db.prototype={
aa:function(a,b){var s=this,r=H.b([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.n)
return r},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.db))return!1
s=b.a
$.D().toString
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
i:function(a){var s,r,q,p,o=this,n=t.n,m=V.cA(H.b([o.a,o.d,o.r],n),3,0),l=V.cA(H.b([o.b,o.e,o.x],n),3,0),k=V.cA(H.b([o.c,o.f,o.y],n),3,0)
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
V.bf.prototype={
aa:function(a,b){var s=this,r=H.b([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.n)
return r},
cr:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.D().toString
if(Math.abs(b3-0)<1e-9)return V.aZ()
s=1/b3
r=-l
q=-a2
return V.aY((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
M:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aY(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bG:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.F(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
b7:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.R(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bf))return!1
s=b.a
$.D().toString
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
H:function(a){var s,r,q,p,o,n=this,m=t.n,l=V.cA(H.b([n.a,n.e,n.y,n.cx],m),3,0),k=V.cA(H.b([n.b,n.f,n.z,n.cy],m),3,0),j=V.cA(H.b([n.c,n.r,n.Q,n.db],m),3,0),i=V.cA(H.b([n.d,n.x,n.ch,n.dx],m),3,0)
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
V.a0.prototype={
aG:function(a){return new V.am(a.a-this.a,a.b-this.b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"},
w:function(){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.R.prototype={
W:function(a,b){return new V.R(this.a+b.a,this.b+b.b,this.c+b.c)},
aR:function(a,b){return new V.R(this.a-b.a,this.b-b.b,this.c-b.c)},
M:function(a,b){return new V.R(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.R))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"},
w:function(){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.bG.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bG))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.B(s.a,3,0)+", "+V.B(s.b,3,0)+", "+V.B(s.c,3,0)+", "+V.B(s.d,3,0)+"]"},
w:function(){var s=this
return"["+V.B(s.a,3,0)+", "+V.B(s.b,3,0)+", "+V.B(s.c,3,0)+", "+V.B(s.d,3,0)+"]"}}
V.f8.prototype={
gb1:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.f8))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.B(s.a,3,0)+", "+V.B(s.b,3,0)+", "+V.B(s.c,3,0)+", "+V.B(s.d,3,0)+"]"}}
V.am.prototype={
bi:function(a){return Math.sqrt(this.ak(this))},
ak:function(a){return this.a*a.a+this.b*a.b},
M:function(a,b){return new V.am(this.a*b,this.b*b)},
aB:function(a,b){var s
$.D().toString
if(Math.abs(b-0)<1e-9){s=$.jR
return s==null?$.jR=new V.am(0,0):s}return new V.am(this.a/b,this.b/b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.am))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.F.prototype={
bi:function(a){return Math.sqrt(this.ak(this))},
ak:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cs:function(a,b){return new V.F(V.hY(this.a,a.a,b),V.hY(this.b,a.b,b),V.hY(this.c,a.c,b))},
I:function(){var s=this,r=Math.sqrt(s.ak(s))
if(r===1)return s
return s.aB(0,r)},
aM:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.F(s*r-q*p,q*o-n*r,n*p-s*o)},
W:function(a,b){return new V.F(this.a+b.a,this.b+b.b,this.c+b.c)},
b8:function(a){return new V.F(-this.a,-this.b,-this.c)},
M:function(a,b){return new V.F(this.a*b,this.b*b,this.c*b)},
aB:function(a,b){$.D().toString
if(Math.abs(b-0)<1e-9)return V.dF()
return new V.F(this.a/b,this.b/b,this.c/b)},
dV:function(){$.D().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.F))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"},
w:function(){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.cm.prototype={
bi:function(a){var s=this,r=s.a,q=s.b,p=s.c,o=s.d
return Math.sqrt(r*r+q*q+p*p+o*o)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cm))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.B(s.a,3,0)+", "+V.B(s.b,3,0)+", "+V.B(s.c,3,0)+", "+V.B(s.d,3,0)+"]"}}
U.ib.prototype={
bO:function(a){var s=V.qN(a,this.c,this.b)
return s},
gt:function(){var s=this.y
return s==null?this.y=D.M():s},
U:function(a){var s=this.y
return s==null?null:s.G(a)},
seo:function(a,b){},
sdY:function(a){var s,r=this,q=r.b
$.D().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bO(s)}r.U(new D.y("maximumLocation",q,r.b))}},
se_:function(a){var s,r=this,q=r.c
$.D().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bO(s)}r.U(new D.y("minimumLocation",q,r.c))}},
sa7:function(a,b){var s,r=this
b=r.bO(b)
s=r.d
$.D().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.U(new D.y("location",s,b))}},
sdZ:function(a){var s,r,q=this,p=q.e
$.D().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.U(new D.y("maximumVelocity",p,a))}},
sab:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.D().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.U(new D.y("velocity",r,a))}},
sdw:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.D().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.U(new D.y("dampening",s,a))}},
ay:function(a,b){var s,r,q,p=this,o=p.f
$.D().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa7(0,p.d+s*b)
o=p.x
$.D().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sab(s)}}}
U.cI.prototype={
gt:function(){var s=this.b
return s==null?this.b=D.M():s},
aF:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cI))return!1
return this.a.q(0,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.bY.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.M():s},
U:function(a){var s=this.e
return s==null?null:s.G(a)},
al:function(){return this.U(null)},
eH:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaU(),q=t.a,p=0;p<b.length;b.length===s||(0,H.p)(b),++p){o=b[p]
if(o!=null){n=o.gt()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}this.U(new D.aS())},
fU:function(a,b){var s,r
for(s=b.gP(b),r=this.gaU();s.u();)s.gB(s).gt().K(0,r)
this.U(new D.aT())},
aF:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.aa(o,o.length),n=H.S(o).c,s=null;o.u();){r=n.a(o.d)
if(r!=null){q=r.aF(0,b,c)
s=s==null?q:q.M(0,s)}}p.f=s==null?V.aZ():s
o=p.e
if(o!=null)o.ar(0)}return p.f},
q:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bY))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(p>=q.length)return H.d(q,p)
if(!J.J(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$ia4:1}
U.c1.prototype={
gt:function(){var s=this.b
return s==null?this.b=D.M():s},
U:function(a){var s=this.b
return s==null?null:s.G(a)},
al:function(){return this.U(null)},
aF:function(a,b,c){var s,r=this,q=r.d,p=b.e
if(q<p){r.d=p
q=r.b
if(q!=null)++q.d
q=r.a
s=q==null?null:q.aF(0,b,c).cr(0)
r.c=s==null?V.aZ():s
q=r.b
if(q!=null)q.ar(0)}return r.c},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c1))return!1
if(!J.J(this.a,b.a))return!1
return!0},
i:function(a){return"Invert"},
$ia4:1}
U.a4.prototype={}
U.dE.prototype={
gt:function(){var s=this.fx
return s==null?this.fx=D.M():s},
U:function(a){var s=this.fx
return s==null?null:s.G(a)},
al:function(){return this.U(null)},
hA:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
s=a.gav()
r=s.b
s=r==null?s.b=D.M():r
s.n(0,q.gf7())
s=a.gav()
r=s.d
s=r==null?s.d=D.M():r
s.n(0,q.gf9())
s=a.gav()
r=s.c
s=r==null?s.c=D.M():r
s.n(0,q.gfb())
s=a.gau()
r=s.f
s=r==null?s.f=D.M():r
s.n(0,q.gf2())
s=a.gau()
r=s.d
s=r==null?s.d=D.M():r
s.n(0,q.gf4())
s=a.gb6()
r=s.b
s=r==null?s.b=D.M():r
s.n(0,q.ghp())
s=a.gb6()
r=s.d
s=r==null?s.d=D.M():r
s.n(0,q.ghn())
s=a.gb6()
r=s.c
s=r==null?s.c=D.M():r
s.n(0,q.ghl())
return!0},
aW:function(a){return new V.am(a.a,a.b)},
f8:function(a){var s=this
t.Z.a(a)
if(!s.d.q(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fa:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.aG(a.d)
if(s.ak(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aW(a.y.aG(r).M(0,2).aB(0,s.gb1()))
p=n.c
p.sa7(0,-q.a*2.5+n.cy)
o=n.b
o.sa7(0,-q.b*2.5+n.db)
o.sab(0)
p.sab(0)
n.dx=n.aW(a.z.aG(r).M(0,2).aB(0,s.gb1()))
n.al()},
fc:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.ak(s)>0.0001){r.c.sab(-r.dx.a*10*2.5)
r.b.sab(-r.dx.b*10*2.5)
r.al()}},
f3:function(a){var s=this
if(t.bv.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
f5:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.q(0,a.x.b))return
s=a.c
r=a.d
q=n.aW(a.y.aG(r).M(0,2).aB(0,s.gb1()))
p=n.c
p.sa7(0,-q.a*2.5+n.cy)
o=n.b
o.sa7(0,-q.b*2.5+n.db)
o.sab(0)
p.sab(0)
n.dx=n.aW(a.z.aG(r).M(0,2).aB(0,s.gb1()))
n.al()},
hq:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
ho:function(a){var s,r,q,p,o,n=this
t.dr.a(a)
if(!n.cx)return
if(n.ch){s=a.y.aG(a.d)
if(s.ak(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aW(a.y.aG(r).M(0,2).aB(0,s.gb1()))
p=n.c
p.sa7(0,-q.a*2.5+n.cy)
o=n.b
o.sa7(0,-q.b*2.5+n.db)
o.sab(0)
p.sab(0)
n.dx=n.aW(a.z.aG(r).M(0,2).aB(0,s.gb1()))
n.al()},
hm:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.ak(s)>0.0001){r.c.sab(-r.dx.a*10*2.5)
r.b.sab(-r.dx.b*10*2.5)
r.al()}},
aF:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(o<n){p.dy=n
s=b.y
o=p.c
o.ay(0,s)
n=p.b
n.ay(0,s)
n=V.mb(n.d)
o=o.d
r=Math.cos(o)
q=Math.sin(o)
p.fr=n.M(0,V.aY(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$ia4:1}
M.cH.prototype={
gt:function(){var s=this.r
return s==null?this.r=D.M():s},
ad:function(a){var s=this.r
return s==null?null:s.G(a)},
bN:function(){return this.ad(null)},
fY:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaj(),q=t.a,p=0;p<b.length;b.length===s||(0,H.p)(b),++p){o=b[p].gt()
n=o.a;(n==null?o.a=H.b([],q):n).push(r)}this.ad(new D.aS())},
h_:function(a,b){var s,r
for(s=b.gP(b),r=this.gaj();s.u();)s.gB(s).gt().K(0,r)
this.ad(new D.aT())},
ax:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.aa(s,s.length),r=H.S(s).c;s.u();)r.a(s.d).ax(a)
q.f=!1},
$ibj:1}
M.cR.prototype={
ad:function(a){var s=this.y
return s==null?null:s.G(a)},
bN:function(){return this.ad(null)},
fn:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaj(),q=t.a,p=0;p<b.length;b.length===s||(0,H.p)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bW()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.ad(new D.aS())},
fp:function(a,b){var s,r
for(s=b.gP(b),r=this.gaj();s.u();)s.gB(s).gt().K(0,r)
this.ad(new D.aT())},
sdu:function(a){var s,r,q=this
if(a==null)a=X.md(1.0471975511965976,null)
s=q.b
if(s!==a){if(s!=null)s.gt().K(0,q.gaj())
r=q.b
q.b=a
a.gt().n(0,q.gaj())
q.ad(new D.y("camera",r,q.b))}},
sei:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gt().K(0,r.gaj())
s=r.c
r.c=b
b.gt().n(0,r.gaj())
r.ad(new D.y("target",s,r.c))}},
sb4:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gt().K(0,r.gaj())
s=r.d
r.d=a
if(a!=null)a.gt().n(0,r.gaj())
r.ad(new D.y("technique",s,r.d))}},
gt:function(){var s=this.y
return s==null?this.y=D.M():s},
ax:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
a.ed(h.d)
s=h.c
if(s!=null)s.am(a)
s=h.b
if(s!=null){r=a.c
q=a.d
p=s.c
o=s.d
n=s.e
m=n-o
l=1/Math.tan(p*0.5)
k=V.aY(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.ec(k)
j=$.nr()
i=s.b
if(i!=null)j=i.aF(0,a,s).M(0,j)
a.db.ec(j)}s=h.d
if(s!=null)s.ay(0,a)
for(s=h.e.a,r=new J.aa(s,s.length),q=H.S(r).c;r.u();)q.a(r.d).ay(0,a)
for(s=new J.aa(s,s.length),r=H.S(s).c;s.u();)r.a(s.d).ax(a)
if(h.b!=null){a.cy.cu()
a.db.cu()}s=h.c
if(s!=null)s.bo(a)
a.eb()},
$ibj:1}
A.el.prototype={}
A.i2.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hR:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
dB:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.aD.prototype={
gaz:function(a){var s=this.a?1:0
return s|0},
i:function(a){var s=this.a?1:0
return""+(s|0)},
q:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.aD))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.cM.prototype={}
A.d8.prototype={
eB:function(d2,d3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6=u.C,c7="Required uniform value, ",c8=", was not defined or used in shader.",c9=c4.x,d0=new P.Z(""),d1=c9.fr
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
c4.dS(0,s.charCodeAt(0)==0?s:s,A.q_(c9))
c4.y=c4.gae(c4).h(0,"posAttr")
c4.Q=c4.gae(c4).h(0,"normAttr")
c4.z=c4.gae(c4).h(0,"binmAttr")
c4.ch=c4.gae(c4).h(0,"txt2DAttr")
c4.cx=c4.gae(c4).h(0,"txtCubeAttr")
c4.cy=c4.gae(c4).h(0,"bendAttr")
if(c9.dy)c4.fy=t.j.a(c4.gR().T(0,"invViewMat"))
if(d1)c4.db=t.j.a(c4.gR().T(0,"objMat"))
if(r)c4.dx=t.j.a(c4.gR().T(0,"viewObjMat"))
d1=t.j
c4.fr=d1.a(c4.gR().T(0,"projViewObjMat"))
if(c9.go)c4.dy=d1.a(c4.gR().T(0,"viewMat"))
if(c9.x1)c4.go=t.bK.a(c4.gR().T(0,"txt2DMat"))
if(c9.x2)c4.id=d1.a(c4.gR().T(0,"txtCubeMat"))
if(c9.y1)c4.k1=d1.a(c4.gR().T(0,"colorMat"))
c4.k3=H.b([],t.p)
s=c9.b0
if(s>0){c4.k2=t.w.a(c4.gR().T(0,"bendMatCount"))
for(n=0;n<s;++n){r=c4.k3
m=c4.r
if(m==null)H.i(P.f(c6))
q="bendValues["+n+"].mat"
l=m.h(0,q)
if(l==null)H.i(P.f(c7+q+c8))
r.push(d1.a(l))}}if(c9.a.a)c4.k4=t.g.a(c4.gR().T(0,"emissionClr"))
if(c9.b.a)c4.rx=t.g.a(c4.gR().T(0,"ambientClr"))
if(c9.c.a)c4.x2=t.g.a(c4.gR().T(0,"diffuseClr"))
if(c9.d.a)c4.b0=t.g.a(c4.gR().T(0,"invDiffuseClr"))
d1=c9.e.a
if(!d1)s=!1
else s=!0
if(s){c4.dG=t.v.a(c4.gR().T(0,"shininess"))
if(d1)c4.dF=t.g.a(c4.gR().T(0,"specularClr"))}if(c9.db){c4.dH=t.bz.a(c4.gR().T(0,"envSampler"))
if(c9.r.a)c4.dI=t.g.a(c4.gR().T(0,"reflectClr"))
d1=c9.x.a
if(!d1)s=!1
else s=!0
if(s){c4.dJ=t.v.a(c4.gR().T(0,"refraction"))
if(d1)c4.dK=t.g.a(c4.gR().T(0,"refractClr"))}}if(c9.y.a)c4.dL=t.v.a(c4.gR().T(0,"alpha"))
if(c9.k1){d1=c9.z
s=d1.length
if(s!==0){r=t.S
c4.ce=P.U(r,t.W)
c4.cf=P.U(r,t.O)
for(r=t.w,q=t.g,p=t.v,o=t.c,k=0;k<d1.length;d1.length===s||(0,H.p)(d1),++k){j=d1[k]
i=j.a
h="barLight"+i
g=H.b([],o)
for(f=j.b,e=(i&4)!==0,n=0;n<f;++n){m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"s["+n+"].startPnt"
l=m.h(0,d)
if(l==null)H.i(P.f(c7+d+c8))
q.a(l)
m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"s["+n+"].endPnt"
c=m.h(0,d)
if(c==null)H.i(P.f(c7+d+c8))
q.a(c)
m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"s["+n+"].color"
b=m.h(0,d)
if(b==null)H.i(P.f(c7+d+c8))
q.a(b)
if(e){m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"s["+n+"].att0"
a=m.h(0,d)
if(a==null)H.i(P.f(c7+d+c8))
p.a(a)
m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"s["+n+"].att1"
a0=m.h(0,d)
if(a0==null)H.i(P.f(c7+d+c8))
p.a(a0)
m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"s["+n+"].att2"
a1=m.h(0,d)
if(a1==null)H.i(P.f(c7+d+c8))
p.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c5
a3=a2
a4=a3}g.push(new A.dx(l,c,b,a4,a3,a2))}c4.cf.m(0,i,g)
f=c4.ce
m=c4.r
if(m==null)H.i(P.f(c6))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.i(P.f(c7+e+c8))
f.m(0,i,r.a(l))}}d1=c9.Q
s=d1.length
if(s!==0){r=t.S
c4.cg=P.U(r,t.W)
c4.ci=P.U(r,t.d)
for(r=t.w,q=t.g,p=t.G,o=t.V,k=0;k<d1.length;d1.length===s||(0,H.p)(d1),++k){j=d1[k]
i=j.a
h="dirLight"+i
g=H.b([],o)
for(f=j.b,e=(i&1)!==0,n=0;n<f;++n){if(e){m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"s["+n+"].objUp"
l=m.h(0,d)
if(l==null)H.i(P.f(c7+d+c8))
q.a(l)
m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"s["+n+"].objRight"
c=m.h(0,d)
if(c==null)H.i(P.f(c7+d+c8))
q.a(c)
m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"s["+n+"].objDir"
b=m.h(0,d)
if(b==null)H.i(P.f(c7+d+c8))
q.a(b)
a5=b
a6=c
a7=l}else{a5=c5
a6=a5
a7=a6}m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"s["+n+"].viewDir"
l=m.h(0,d)
if(l==null)H.i(P.f(c7+d+c8))
q.a(l)
m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"s["+n+"].color"
c=m.h(0,d)
if(c==null)H.i(P.f(c7+d+c8))
q.a(c)
if(e){m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"sTexture2D"+n
b=m.h(0,d)
if(b==null)H.i(P.f(c7+d+c8))
p.a(b)
a8=b}else a8=c5
g.push(new A.dy(a7,a6,a5,l,c,a8))}c4.ci.m(0,i,g)
f=c4.cg
m=c4.r
if(m==null)H.i(P.f(c6))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.i(P.f(c7+e+c8))
f.m(0,i,r.a(l))}}d1=c9.ch
s=d1.length
if(s!==0){r=t.S
c4.cj=P.U(r,t.W)
c4.ck=P.U(r,t.m)
for(r=t.w,q=t.g,p=t.bK,o=t.bz,f=t.bw,e=t.v,d=t.B,k=0;k<d1.length;d1.length===s||(0,H.p)(d1),++k){j=d1[k]
i=j.a
h="pointLight"+i
g=H.b([],d)
for(a9=j.b,b0=(i&4)!==0,b1=(i&2)!==0,b2=(i&1)!==0,b3=(i&3)!==0,n=0;n<a9;++n){m=c4.r
if(m==null)H.i(P.f(c6))
b4=h+"s["+n+"].point"
l=m.h(0,b4)
if(l==null)H.i(P.f(c7+b4+c8))
q.a(l)
m=c4.r
if(m==null)H.i(P.f(c6))
b4=h+"s["+n+"].viewPnt"
c=m.h(0,b4)
if(c==null)H.i(P.f(c7+b4+c8))
q.a(c)
m=c4.r
if(m==null)H.i(P.f(c6))
b4=h+"s["+n+"].color"
b=m.h(0,b4)
if(b==null)H.i(P.f(c7+b4+c8))
q.a(b)
if(b3){m=c4.r
if(m==null)H.i(P.f(c6))
b4=h+"s["+n+"].invViewRotMat"
a=m.h(0,b4)
if(a==null)H.i(P.f(c7+b4+c8))
p.a(a)
b5=a}else b5=c5
if(b2){m=c4.r
if(m==null)H.i(P.f(c6))
b4=h+"sTextureCube"+n
a=m.h(0,b4)
if(a==null)H.i(P.f(c7+b4+c8))
o.a(a)
a8=a}else a8=c5
if(b1){m=c4.r
if(m==null)H.i(P.f(c6))
b4=h+"sShadowCube"+n
a=m.h(0,b4)
if(a==null)H.i(P.f(c7+b4+c8))
o.a(a)
m=c4.r
if(m==null)H.i(P.f(c6))
b4=h+"s["+n+"].shadowAdj"
a0=m.h(0,b4)
if(a0==null)H.i(P.f(c7+b4+c8))
f.a(a0)
b6=a
b7=a0}else{b6=c5
b7=b6}if(b0){m=c4.r
if(m==null)H.i(P.f(c6))
b4=h+"s["+n+"].att0"
a=m.h(0,b4)
if(a==null)H.i(P.f(c7+b4+c8))
e.a(a)
m=c4.r
if(m==null)H.i(P.f(c6))
b4=h+"s["+n+"].att1"
a0=m.h(0,b4)
if(a0==null)H.i(P.f(c7+b4+c8))
e.a(a0)
m=c4.r
if(m==null)H.i(P.f(c6))
b4=h+"s["+n+"].att2"
a1=m.h(0,b4)
if(a1==null)H.i(P.f(c7+b4+c8))
e.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c5
a3=a2
a4=a3}g.push(new A.dA(l,c,b5,b,a8,b6,b7,a4,a3,a2))}c4.ck.m(0,i,g)
a9=c4.cj
m=c4.r
if(m==null)H.i(P.f(c6))
b0=h+"Count"
l=m.h(0,b0)
if(l==null)H.i(P.f(c7+b0+c8))
a9.m(0,i,r.a(l))}}c9=c9.cx
d1=c9.length
if(d1!==0){s=t.S
c4.cl=P.U(s,t.W)
c4.cm=P.U(s,t.R)
for(s=t.w,r=t.g,q=t.v,p=t.bw,o=t.G,f=t.J,k=0;k<c9.length;c9.length===d1||(0,H.p)(c9),++k){j=c9[k]
i=j.a
h="spotLight"+i
g=H.b([],f)
for(e=j.b,d=(i&2)!==0,a9=(i&1)!==0,b0=(i&4)!==0,b1=(i&8)!==0,b2=(i&3)!==0,n=0;n<e;++n){m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].objPnt"
l=m.h(0,b3)
if(l==null)H.i(P.f(c7+b3+c8))
r.a(l)
m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].objDir"
c=m.h(0,b3)
if(c==null)H.i(P.f(c7+b3+c8))
r.a(c)
m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].viewPnt"
b=m.h(0,b3)
if(b==null)H.i(P.f(c7+b3+c8))
r.a(b)
m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].color"
a=m.h(0,b3)
if(a==null)H.i(P.f(c7+b3+c8))
r.a(a)
if(b2){m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].objUp"
a0=m.h(0,b3)
if(a0==null)H.i(P.f(c7+b3+c8))
r.a(a0)
m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].objRight"
a1=m.h(0,b3)
if(a1==null)H.i(P.f(c7+b3+c8))
r.a(a1)
m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].tuScalar"
b8=m.h(0,b3)
if(b8==null)H.i(P.f(c7+b3+c8))
q.a(b8)
m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].tvScalar"
b9=m.h(0,b3)
if(b9==null)H.i(P.f(c7+b3+c8))
q.a(b9)
c0=b9
c1=b8
a6=a1
a7=a0}else{c0=c5
c1=c0
a6=c1
a7=a6}if(d){m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].shadowAdj"
a0=m.h(0,b3)
if(a0==null)H.i(P.f(c7+b3+c8))
p.a(a0)
b7=a0}else b7=c5
if(b1){m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].cutoff"
a0=m.h(0,b3)
if(a0==null)H.i(P.f(c7+b3+c8))
q.a(a0)
m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].coneAngle"
a1=m.h(0,b3)
if(a1==null)H.i(P.f(c7+b3+c8))
q.a(a1)
c2=a1
c3=a0}else{c2=c5
c3=c2}if(b0){m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].att0"
a0=m.h(0,b3)
if(a0==null)H.i(P.f(c7+b3+c8))
q.a(a0)
m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].att1"
a1=m.h(0,b3)
if(a1==null)H.i(P.f(c7+b3+c8))
q.a(a1)
m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].att2"
b8=m.h(0,b3)
if(b8==null)H.i(P.f(c7+b3+c8))
q.a(b8)
a2=b8
a3=a1
a4=a0}else{a2=c5
a3=a2
a4=a3}if(a9){m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"sTexture2D"+n
a0=m.h(0,b3)
if(a0==null)H.i(P.f(c7+b3+c8))
o.a(a0)
a8=a0}else a8=c5
if(d){m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"sShadow2D"+n
a0=m.h(0,b3)
if(a0==null)H.i(P.f(c7+b3+c8))
o.a(a0)
b6=a0}else b6=c5
g.push(new A.dD(l,c,b,a,a7,a6,c1,c0,b7,c3,c2,a4,a3,a2,a8,b6))}c4.cm.m(0,i,g)
e=c4.cl
m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"Count"
l=m.h(0,d)
if(l==null)H.i(P.f(c7+d+c8))
e.m(0,i,s.a(l))}}}},
hf:function(a,b){}}
A.b7.prototype={
i:function(a){return"barLight"+this.a}}
A.b9.prototype={
i:function(a){return"dirLight"+this.a}}
A.bh.prototype={
i:function(a){return"pointLight"+this.a}}
A.bk.prototype={
i:function(a){return"spotLight"+this.a}}
A.iR.prototype={
i:function(a){return this.bw}}
A.dx.prototype={}
A.dy.prototype={}
A.dA.prototype={}
A.dD.prototype={}
A.ca.prototype={
dS:function(a,b,c){var s,r,q,p,o,n=this
n.c=b
n.d=c
s=n.cW(b,35633)
r=n.cW(n.d,35632)
q=n.a
p=q.createProgram()
p.toString
n.e=p
q.attachShader(n.gaI(),s)
q.attachShader(n.gaI(),r)
q.linkProgram(n.gaI())
if(!H.n_(q.getProgramParameter(n.gaI(),35714))){o=q.getProgramInfoLog(n.gaI())
if(o==null)o="undefined log error"
q.deleteProgram(n.e)
H.i(P.f("Failed to link shader: "+o))}n.hh()
n.hj()},
gae:function(a){var s=this.f
if(s==null)throw H.c(P.f("Must initialize the shader prior to getting the attributes."))
return s},
gR:function(){var s=this.r
if(s==null)throw H.c(P.f(u.C))
return s},
gaI:function(){var s=this.e
if(s==null)throw H.c(P.f(u.F))
return s},
am:function(a){a.a.useProgram(this.e)
this.gae(this).hR()},
cW:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.n_(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.f('Error compiling shader "'+H.x(q)+'": '+s))}return q},
hh:function(){var s,r,q,p,o=this,n=u.F,m=H.b([],t.eu),l=o.a,k=H.hV(l.getProgramParameter(o.gaI(),35721))
for(s=0;s<k;++s){r=o.e
if(r==null)H.i(P.f(n))
q=l.getActiveAttrib(r,s)
q.toString
r=o.e
if(r==null)H.i(P.f(n))
p=q.name
p.toString
p=l.getAttribLocation(r,p)
p.toString
q=q.name
q.toString
m.push(new A.el(l,q,p))}o.f=new A.i2(m)},
hj:function(){var s,r,q,p,o,n,m=this,l=u.F,k=H.b([],t.dC),j=m.a,i=H.hV(j.getProgramParameter(m.gaI(),35718))
for(s=0;s<i;++s){r=m.e
if(r==null)H.i(P.f(l))
q=j.getActiveUniform(r,s)
q.toString
r=m.e
if(r==null)H.i(P.f(l))
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
k.push(m.hM(o,n,q,p))}m.r=new A.jE(k)},
aV:function(a,b,c){var s=this.a
if(a===1)return new A.ci(s,b,c)
else return A.ls(s,this.e,b,a,c)},
eY:function(a,b,c){var s=this.a
if(a===1)return new A.dB(s,b,c)
else return A.ls(s,this.e,b,a,c)},
eZ:function(a,b,c){var s=this.a
if(a===1)return new A.dC(s,b,c)
else return A.ls(s,this.e,b,a,c)},
bs:function(a,b){return new P.h3(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
hM:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aV(b,c,d)
case 5121:return s.aV(b,c,d)
case 5122:return s.aV(b,c,d)
case 5123:return s.aV(b,c,d)
case 5124:return s.aV(b,c,d)
case 5125:return s.aV(b,c,d)
case 5126:return new A.du(s.a,c,d)
case 35664:return new A.fA(s.a,c,d)
case 35665:return new A.dv(s.a,c,d)
case 35666:return new A.dw(s.a,c,d)
case 35667:return new A.fB(s.a,c,d)
case 35668:return new A.fC(s.a,c,d)
case 35669:return new A.fD(s.a,c,d)
case 35674:return new A.fE(s.a,c,d)
case 35675:return new A.dz(s.a,c,d)
case 35676:return new A.cj(s.a,c,d)
case 35678:return s.eY(b,c,d)
case 35680:return s.eZ(b,c,d)
case 35670:throw H.c(s.bs("BOOL",c))
case 35671:throw H.c(s.bs("BOOL_VEC2",c))
case 35672:throw H.c(s.bs("BOOL_VEC3",c))
case 35673:throw H.c(s.bs("BOOL_VEC4",c))
default:throw H.c(P.f("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.a1.prototype={}
A.jE.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
T:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.f("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.w()},
w:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.p)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.ci.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.fB.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.fC.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.fD.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.fz.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.du.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.fA.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.dv.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.dw.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.fE.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.dz.prototype={
ag:function(a){var s=new Float32Array(H.cv(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.cj.prototype={
ag:function(a){var s=new Float32Array(H.cv(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.dB.prototype={
i:function(a){return"UniformSampler2D: "+this.c}}
A.dC.prototype={
i:function(a){return"UniformSamplerCube: "+this.c}}
F.kt.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cs(q.b,b).cs(q.d.cs(q.c,b),c)
a.sa7(0,new V.R(p.a,p.b,p.c))
a.sek(p.I())
q=1-b
s=1-c
a.sdq(new V.bG(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)},
$S:8}
F.kH.prototype={
$2:function(a,b){return V.hY(this.a,this.b,b)},
$S:17}
F.kJ.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.hY(-1,1,c),n=this.a.$2(b,c)
q=-q*n
s=p*n
a.sa7(0,new V.R(q,s,o))
a.sek(new V.F(q,s,o).I())
a.sdq(new V.bG(1-c,2+c,-1,-1))},
$S:8}
F.kK.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:15}
F.kL.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:15}
F.l5.prototype={
$2:function(a,b){return 0},
$S:17}
F.l4.prototype={
$3:function(a,b,c){var s,r=this.b.$2(b,c)
if(typeof r!=="number")return H.nf(r)
s=a.f
r=(s!=null?new V.F(s.a,s.b,s.c):V.lt()).I().M(0,this.a+r)
a.sa7(0,new V.R(r.a,r.b,r.c))},
$S:8}
F.l6.prototype={
$1:function(a){return new V.R(Math.cos(a),Math.sin(a),0)},
$S:28}
F.kU.prototype={
$1:function(a){var s=this.a*a,r=2+Math.cos(s),q=this.b*a
return new V.R(r*Math.cos(q)/2,r*Math.sin(q)/2,Math.sin(s)/2)},
$S:28}
F.kI.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.lU(l.$1(m),k)
k=J.lU(l.$1(m+3.141592653589793/n.c),k).aR(0,j)
s=new V.F(k.a,k.b,k.c).I()
r=$.mB
if(r==null){r=new V.F(1,0,0)
$.mB=r}q=s.aM(!s.q(0,r)?V.lt():r).I()
r=q.aM(s).I()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.M(0,l*k)
k=q.M(0,o*k)
a.sa7(0,j.W(0,new V.R(l.a-k.a,l.b-k.b,l.c-k.c)))},
$S:8}
F.aq.prototype={
aS:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.c(P.f("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.c3(a)
s.c4(b)
s.hg(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gS().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a0()}},
bh:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.b.K(r.gS().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a0()}}s.c_()
s.c0()
s.h8()},
c3:function(a){this.a=a
a.gS().b.push(this)},
c4:function(a){this.b=a
a.gS().c.push(this)},
hg:function(a){this.c=a
a.gS().d.push(this)},
c_:function(){var s=this.a
if(s!=null)C.b.K(s.gS().b,this)
this.a=null},
c0:function(){var s=this.b
if(s!=null)C.b.K(s.gS().c,this)
this.b=null},
h8:function(){var s=this.c
if(s!=null)C.b.K(s.gS().d,this)
this.c=null},
eR:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.dF()
if(n!=null)q=q.W(0,n)
if(s!=null)q=q.W(0,s)
if(r!=null)q=q.W(0,r)
if(q.dV())return p
return q.I()},
eT:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aR(0,n)
q=new V.F(o.a,o.b,o.c).I()
o=r.aR(0,n)
return q.aM(new V.F(o.a,o.b,o.c).I()).I()},
ca:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.eR()
if(s==null){s=q.eT()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a0()}return!0},
eQ:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.dF()
if(n!=null)q=q.W(0,n)
if(s!=null)q=q.W(0,s)
if(r!=null)q=q.W(0,r)
if(q.dV())return p
return q.I()},
eS:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.D().toString
if(Math.abs(p-0)<1e-9){j=b.aR(0,e)
o=new V.F(j.a,j.b,j.c).I()
if(q.a-r.a<0)o=o.b8(0)}else{n=(j-s.b)/p
j=b.aR(0,e).M(0,n).W(0,e).aR(0,h)
o=new V.F(j.a,j.b,j.c).I()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.b8(0)}m=l.d
if(m!=null){m=m.I()
o=m.aM(o).I().aM(m).I()}return o},
c8:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.eQ()
if(s==null){s=q.eS()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a0()}return!0},
ghG:function(a){var s=this
if(J.J(s.a,s.b))return!0
if(J.J(s.b,s.c))return!0
if(J.J(s.c,s.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
H:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gC(p)
p=a+C.a.aq(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gC(o)
p=p+C.a.aq(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gC(o)
s=p+C.a.aq(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.w()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.w()
return s+((p==null?"-":p)+"}")},
w:function(){return this.H("")}}
F.iv.prototype={}
F.jo.prototype={
bj:function(a,b,c){var s,r=null,q=b.a
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
F.eJ.prototype={
eA:function(a,b){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a line with a start vertex which is not attached to a shape."))
if(r!==b.a)throw H.c(P.f("May not create a line with vertices attached to different shapes."))
s.c3(a)
s.c4(b)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.ga9(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a0()}},
bh:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null)){if(!q){r=r.a
if(r!=null)C.b.K(r.ga9(r).b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a0()}}s.c_()
s.c0()},
c3:function(a){this.a=a
a.ga9(a).b.push(this)},
c4:function(a){this.b=a
a.ga9(a).c.push(this)},
c_:function(){var s=this.a
if(s!=null)C.b.K(s.ga9(s).b,this)
this.a=null},
c0:function(){var s=this.b
if(s!=null)C.b.K(s.ga9(s).c,this)
this.b=null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
H:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gC(s)
s=a+C.a.aq(C.c.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gC(r)
return s+C.a.aq(C.c.i(r==null?-1:r),0)},
w:function(){return this.H("")}}
F.iI.prototype={}
F.jD.prototype={
bj:function(a,b,c){var s,r=null,q=b.a
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
F.f4.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
H:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gC(s)
return a+C.a.aq(C.c.i(s),0)},
w:function(){return this.H("")}}
F.ji.prototype={
gZ:function(){var s=this.a
return s==null?this.a=new F.z(this,H.b([],t.k)):s},
gbn:function(a){var s=this.b
return s==null?this.b=new F.bH(this,H.b([],t.q)):s},
ga9:function(a){var s=this.c
return s==null?this.c=new F.dp(this,H.b([],t.L)):s},
gS:function(){var s=this.d
return s==null?this.d=new F.dn(this,H.b([],t.u)):s},
gt:function(){var s=this.e
return s==null?this.e=D.M():s},
bk:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.e
if(a0!=null)++a0.d
a1.gZ().Y()
s=b.gZ().c.length
for(a0=a1.gZ().c,r=a0.length,q=t.k,p=0;p<a0.length;a0.length===r||(0,H.p)(a0),++p){o=a0[p]
n=b.a
if(n==null)n=b.a=new F.z(b,H.b([],q))
n.n(0,o.hJ())}b.gZ().Y()
for(a0=a1.gbn(a1).b,r=a0.length,n=t.q,p=0;p<a0.length;a0.length===r||(0,H.p)(a0),++p){m=a0[p]
l=b.a
if(l==null)l=b.a=new F.z(b,H.b([],q))
k=m.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).Y()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
h=l[k]
k=b.b
l=(k==null?b.b=new F.bH(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,h)
l=new F.f4()
if(h.a==null)H.i(P.f("May not create a point with a vertex which is not attached to a shape."))
l.a=h
k=h.b;(k==null?h.b=new F.dG(H.b([],n)):k).b.push(l)
k=l.a
if(k!=null){k=k.a
if(k!=null){j=k.b;(j==null?k.b=new F.bH(k,H.b([],n)):j).b.push(l)}}l=l.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.G(a)}}}for(a0=a1.ga9(a1).b,r=a0.length,n=t.L,p=0;p<a0.length;a0.length===r||(0,H.p)(a0),++p){g=a0[p]
l=b.a
if(l==null)l=b.a=new F.z(b,H.b([],q))
k=g.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).Y()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.z(b,H.b([],q)):k
k=g.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).Y()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.c
l=(k==null?b.c=new F.dp(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,e)
new F.eJ().eA(f,e)}for(a0=a1.gS().b,r=a0.length,n=t.u,p=0;p<a0.length;a0.length===r||(0,H.p)(a0),++p){d=a0[p]
l=b.a
if(l==null)l=b.a=new F.z(b,H.b([],q))
k=d.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).Y()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.z(b,H.b([],q)):k
k=d.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).Y()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.a
l=k==null?b.a=new F.z(b,H.b([],q)):k
k=d.c
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).Y()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
c=l[k]
k=b.d
l=(k==null?b.d=new F.dn(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,e)
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,c)
new F.aq().aS(f,e,c)}a0=b.e
if(a0!=null)a0.ar(0)},
aD:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gS().aD()||!1
if(!r.gZ().aD())s=!1
q=r.e
if(q!=null)q.ar(0)
return s},
i6:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.gZ().c
s=H.b(m.slice(0),H.ku(m))
for(m=t.k;s.length!==0;){r=C.b.ghW(s)
C.b.cz(s,0)
q=H.b([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(a.bj(0,r,o)){q.push(o)
C.b.cz(s,p)}}if(q.length>1)b.bk(q)}n.gZ().Y()
n.ga9(n).cA()
n.gS().cA()
n.gbn(n).iq()
n.ga9(n).cB(new F.jD())
n.gS().cB(new F.jo())
m=n.e
if(m!=null)m.ar(0)},
c7:function(){this.i6(new F.jX(),new F.j8())},
co:function(){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
n.gS().co()
for(s=n.gZ().c.length-1,m=t.k;s>=0;--s){r=n.a
r=(r==null?n.a=new F.z(n,H.b([],m)):r).c
if(s>=r.length)return H.d(r,s)
q=r[s]
p=q.r
if(p!=null)q.se0(new V.F(-p.a,-p.b,-p.c))
o=q.x
if(o!=null){o=new V.F(-o.a,-o.b,-o.c).I()
if(!J.J(q.x,o)){q.x=o
r=q.a
if(r!=null){r=r.e
if(r!=null)r.G(null)}}}}m=n.e
if(m!=null)m.ar(0)},
dt:function(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=34962,c={},b=f.gZ().c.length,a=$.aN(),a0=a3.a,a1=(a0&a.a)!==0?1:0
if((a0&$.bt().a)!==0)++a1
if((a0&$.bs().a)!==0)++a1
if((a0&$.bO().a)!==0)++a1
if((a0&$.bP().a)!==0)++a1
if((a0&$.ef().a)!==0)++a1
if((a0&$.eg().a)!==0)++a1
if((a0&$.cC().a)!==0)++a1
if((a0&$.br().a)!==0)++a1
s=a3.gcJ(a3)
r=P.eL(b*s,0,!1,t.gR)
c.a=0
q=P.oi(a1,new F.jj(c,f,a3,s*4,b,s,r),t.eT)
a=a2.a
a0=a.createBuffer()
a0.toString
a.bindBuffer(d,a0)
a.bufferData(d,new Float32Array(H.cv(r)),35044)
a.bindBuffer(d,e)
p=new Z.bV(new Z.fN(d,a0),H.b([],t.fv),q,a3)
if(f.gbn(f).b.length!==0){o=H.b([],t.t)
a0=t.q
n=t.k
m=0
while(!0){l=f.b
if(l==null){l=f.b=new F.bH(f,H.b([],a0))
k=l}else k=l
if(!(m<l.b.length))break
l=k.b
if(m>=l.length)return H.d(l,m)
l=l[m].a
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.z(k,H.b([],n)):j).Y()}l=l.e}o.push(l==null?0:l);++m}i=Z.lu(a,34963,o)
p.b.push(new Z.c_(0,o.length,i))}if(f.ga9(f).b.length!==0){o=H.b([],t.t)
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
if(k!=null){j=k.a;(j==null?k.a=new F.z(k,H.b([],n)):j).Y()}l=l.e}o.push(l==null?0:l)
l=h.b
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.z(k,H.b([],n)):j).Y()}l=l.e}o.push(l==null?0:l);++m}i=Z.lu(a,34963,o)
p.b.push(new Z.c_(1,o.length,i))}if(f.gS().b.length!==0){o=H.b([],t.t)
a0=t.u
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
if(k!=null){j=k.a;(j==null?k.a=new F.z(k,H.b([],n)):j).Y()}l=l.e}o.push(l==null?0:l)
l=g.b
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.z(k,H.b([],n)):j).Y()}l=l.e}o.push(l==null?0:l)
l=g.c
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.z(k,H.b([],n)):j).Y()}l=l.e}o.push(l==null?0:l);++m}i=Z.lu(a,34963,o)
p.b.push(new Z.c_(4,o.length,i))}return p},
i:function(a){var s=this,r="   ",q=H.b([],t.s)
if(s.gZ().c.length!==0){q.push("Vertices:")
q.push(s.gZ().H(r))}if(s.gbn(s).b.length!==0){q.push("Points:")
q.push(s.gbn(s).H(r))}if(s.ga9(s).b.length!==0){q.push("Lines:")
q.push(s.ga9(s).H(r))}if(s.gS().b.length!==0){q.push("Faces:")
q.push(s.gS().H(r))}return C.b.j(q,"\n")},
a0:function(){var s=this.e
return s==null?null:s.G(null)}}
F.jj.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c.hz(a),e=f.gcJ(f),d=g.a,c=d.a
for(s=g.e,r=g.r,q=r.length,p=g.f,o=g.b,n=t.k,m=0;m<s;++m){l=o.a
l=(l==null?o.a=new F.z(o,H.b([],n)):l).c
if(m>=l.length)return H.d(l,m)
k=l[m].i4(f)
j=d.a+m*p
for(l=k.length,i=0;i<l;++i){h=k[i]
if(j>=q)return H.d(r,j)
r[j]=h;++j}}d.a+=e
return new Z.bU(f,e,c*4,g.d)},
$S:47}
F.dn.prototype={
hv:function(a){var s,r,q,p,o,n,m,l,k=H.b([],t.u),j=a.length
if(j>0){s=a[0]
for(r=this.a,q=t.k,p=2;p<j;++p){o=p-1
n=a.length
if(o>=n)return H.d(a,o)
o=a[o]
if(p>=n)return H.d(a,p)
n=a[p]
m=r.a;(m==null?r.a=new F.z(r,H.b([],q)):m).n(0,s)
m=r.a;(m==null?r.a=new F.z(r,H.b([],q)):m).n(0,o)
m=r.a;(m==null?r.a=new F.z(r,H.b([],q)):m).n(0,n)
l=new F.aq()
l.aS(s,o,n)
k.push(l)}}return k},
hw:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=H.b([],t.u)
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
if(m){(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,j)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,g)
e=new F.aq()
e.aS(j,i,g)
d.push(e)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,j)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,f)
e=new F.aq()
e.aS(j,g,f)
d.push(e)}else{(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,f)
e=new F.aq()
e.aS(i,g,f)
d.push(e)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,f)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,j)
e=new F.aq()
e.aS(i,f,j)
d.push(e)}m=!m}o=!o}return d},
gl:function(a){return this.b.length},
cB:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gZ().c.length-1,q=t.u,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.z(s,H.b([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.d
if(o==null)o=n.d=new F.co(H.b([],q),H.b([],q),H.b([],q))
m=o.b.length+o.c.length+o.d.length-1
for(;m>=0;m=k){o=n.d
l=(o==null?n.d=new F.co(H.b([],q),H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.d
if(a.bj(0,l,(o==null?n.d=new F.co(H.b([],q),H.b([],q),H.b([],q)):o).h(0,j))){l.bh()
break}}}}},
cA:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(q.ghG(q))q.bh()}},
aD:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.p)(s),++p)if(!s[p].ca())q=!1
return q},
c9:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.p)(s),++p)if(!s[p].c8())q=!1
return q},
co:function(){var s,r,q,p,o,n,m,l
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
o=p.b
p.b=p.c
p.c=o
n=p.d
if(n!=null)p.d=new V.F(-n.a,-n.b,-n.c)
m=p.e
if(m!=null)p.e=new V.F(-m.a,-m.b,-m.c)
l=p.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.G(null)}}}},
i:function(a){return this.w()},
H:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].H(a))
return C.b.j(p,"\n")},
w:function(){return this.H("")}}
F.dp.prototype={
gl:function(a){return this.b.length},
cB:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gZ().c.length-1,q=t.L,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.z(s,H.b([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.c
if(o==null)o=n.c=new F.cp(H.b([],q),H.b([],q))
m=o.b.length+o.c.length-1
for(;m>=0;m=k){o=n.c
l=(o==null?n.c=new F.cp(H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.c
if(a.bj(0,l,(o==null?n.c=new F.cp(H.b([],q),H.b([],q)):o).h(0,j))){l.bh()
break}}}}},
cA:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(J.J(q.a,q.b))q.bh()}},
i:function(a){return this.w()},
H:function(a){var s,r=H.b([],t.s),q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.d(q,s)
r.push(q[s].H(a+(""+s+". ")))}return C.b.j(r,"\n")},
w:function(){return this.H("")}}
F.bH.prototype={
gl:function(a){return this.b.length},
iq:function(){var s,r,q,p,o,n,m
for(s=this.b,r=s.length-1,q=t.q;r>=0;--r){if(r>=s.length)return H.d(s,r)
p=s[r].a
if(p==null)o=null
else{n=p.b
p=(n==null?p.b=new F.dG(H.b([],q)):n).b.length
o=p}if((o==null?0:o)>1){if(r>=s.length)return H.d(s,r)
m=s[r]
p=m.a
if(p!=null){p=p.a
if(p!=null){n=p.b
C.b.K((n==null?p.b=new F.bH(p,H.b([],q)):n).b,m)}p=m.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.G(null)}}}p=m.a
if(p!=null){n=p.b
C.b.K((n==null?p.b=new F.dG(H.b([],q)):n).b,m)}m.a=null}}},
i:function(a){return this.w()},
H:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].H(a))
return C.b.j(p,"\n")},
w:function(){return this.H("")}}
F.cn.prototype={
cd:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.fL(s.cx,p,m,r,q,o,n,a,l)},
hJ:function(){return this.cd(null)},
ga9:function(a){var s=this.c
if(s==null){s=t.L
s=this.c=new F.cp(H.b([],s),H.b([],s))}return s},
gS:function(){var s=this.d
if(s==null){s=t.u
s=this.d=new F.co(H.b([],s),H.b([],s),H.b([],s))}return s},
gC:function(a){var s=this.a
if(s!=null)s.gZ().Y()
return this.e},
sa7:function(a,b){var s
if(!J.J(this.f,b)){this.f=b
s=this.a
if(s!=null)s.a0()}},
se0:function(a){var s
a=a.I()
if(!J.J(this.r,a)){this.r=a
s=this.a
if(s!=null)s.a0()}},
sek:function(a){var s
if(!J.J(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a0()}},
sdq:function(a){var s
if(!J.J(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.a0()}},
i4:function(a){var s,r,q,p,o=this,n=null
if(a.q(0,$.aN())){s=o.f
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.q(0,$.bt())){s=o.r
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,1,0],t.n):s}else if(a.q(0,$.bs())){s=o.x
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,1],t.n):s}else if(a.q(0,$.bO())){s=o.y
s=s==null?n:H.b([s.a,s.b],t.n)
return s==null?H.b([0,0],t.n):s}else if(a.q(0,$.bP())){s=o.z
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.q(0,$.ef())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return H.b([q,p,s==null?1:s],t.n)}else if(a.q(0,$.eg())){s=o.Q
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([1,1,1,1],t.n):s}else if(a.q(0,$.cC()))return H.b([o.ch],t.n)
else if(a.q(0,$.br())){s=o.cx
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([-1,-1,-1,-1],t.n):s}else return H.b([],t.n)},
ca:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dF()
p.gS().E(0,new F.k0(o))
p.r=o.a.I()
if(r){s.a0()
o=s.e
if(o!=null)o.ar(0)}return!0},
c8:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dF()
p.gS().E(0,new F.k_(o))
p.x=o.a.I()
if(r){s.a0()
o=s.e
if(o!=null)o.ar(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
H:function(a){var s,r,q=this,p=null,o="-",n=H.b([],t.s)
n.push(C.a.aq(C.c.i(q.e),0))
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
F.k0.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.W(0,r)}},
$S:9}
F.k_.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.W(0,r)}},
$S:9}
F.z.prototype={
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
s.a0()
return!0},
hx:function(a,b,c,d,e,f){var s=F.fL(a,null,b,c,d,e,f,null,0)
this.n(0,s)
return s},
gl:function(a){return this.c.length},
aD:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)s[q].ca()
return!0},
c9:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)s[q].c8()
return!0},
hF:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.I()
if(!J.J(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.G(null)}}}}}return!0},
i:function(a){return this.w()},
H:function(a){var s,r,q,p
this.Y()
s=H.b([],t.s)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.p)(r),++p)s.push(r[p].H(a))
return C.b.j(s,"\n")},
w:function(){return this.H("")}}
F.co.prototype={
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
C.b.E(s.c,new F.jV(s,b))
C.b.E(s.d,new F.jW(s,b))},
i:function(a){return this.w()},
w:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].H(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].H(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].H(""))
return C.b.j(p,"\n")}}
F.jV.prototype={
$1:function(a){if(!J.J(a.a,this.a))this.b.$1(a)},
$S:9}
F.jW.prototype={
$1:function(a){var s=this.a
if(!J.J(a.a,s)&&!J.J(a.b,s))this.b.$1(a)},
$S:9}
F.cp.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.d(r,s)
return r[s]}else{if(b<0)return H.d(r,b)
return r[b]}},
i:function(a){return this.w()},
w:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].H(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].H(""))
return C.b.j(p,"\n")}}
F.jY.prototype={}
F.jX.prototype={
bj:function(a,b,c){return J.J(b.f,c.f)}}
F.jZ.prototype={}
F.j8.prototype={
bk:function(a){var s,r,q,p=V.dF()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)p=new V.F(p.a+q.a,p.b+q.b,p.c+q.c)}p=p.I()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.p)(a),++r)a[r].se0(p)
return null}}
F.dG.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.w()},
w:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].H(""))
return C.b.j(p,"\n")}}
O.eu.prototype={
gt:function(){var s=this.r
return s==null?this.r=D.M():s},
a4:function(a){var s=this.r
return s==null?null:s.G(a)},
ay:function(a,b){},
ee:function(a,b){var s,r,q,p=this,o=null,n=p.a
if(n==null){s=p.f
n=t.gO.a(a.fr.h(0,"Grey"+(s?"Point":"View")+"Depth"))
if(n==null){n=new A.cM(a.a,"Grey"+(s?"Point":"View")+"Depth")
r=""+"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n"
q=""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n"
s=s?q+"  float dist = length(loc.xyz);\n":q+"  float dist = loc.z;\n"
s+="  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n"
n.dS(0,r.charCodeAt(0)==0?r:r,s.charCodeAt(0)==0?s:s)
n.x=n.gae(n).h(0,"posAttr")
s=t.v
n.y=s.a(n.gR().h(0,"width"))
n.z=s.a(n.gR().h(0,"stop"))
s=t.j
n.Q=s.a(n.gR().h(0,"viewObjMat"))
n.ch=s.a(n.gR().h(0,"projMat"))
a.dl(n)}n=p.a=n}s=b.e
if((!(s instanceof Z.bV)?b.e=null:s)==null){s=b.d
s=s==null?o:s.dt(new Z.fO(a.a),$.aN())
if(s==null)s=o
else{r=s.aN($.aN())
if(r!=null){q=n.x
q=q==null?o:q.c
r.e=q==null?0:q}}b.e=s}n.am(a)
s=p.b
r=p.c
q=n.y
if(q!=null)q.a.uniform1f(q.d,s-r)
s=p.c
r=n.z
if(r!=null)r.a.uniform1f(r.d,s)
s=a.cy
s=s.ga_(s)
r=n.ch
if(r!=null)r.ag(s.aa(0,!0))
s=a.gen()
r=n.Q
if(r!=null)r.ag(s.aa(0,!0))
s=t.C.a(b.e)
s.am(a)
s.ax(a)
s.bo(a)
a.a.useProgram(o)
n.gae(n).dB()}}
O.d9.prototype={
gt:function(){var s=this.fr
return s==null?this.fr=D.M():s},
a4:function(a){var s=this.fr
return s==null?null:s.G(a)},
eJ:function(){return this.a4(null)},
d5:function(a){this.a=null
this.a4(a)},
hb:function(){return this.d5(null)},
fg:function(a,b){return this.a4(new D.aS())},
fi:function(a,b){return this.a4(new D.aT())},
gdX:function(){var s=this,r=s.dx
if(r==null){r=new D.d_(H.b([],t.i),H.b([],t.U),H.b([],t.o),H.b([],t.D),H.b([],t.e))
r.cH(r.gfd(),r.gfR(),r.gfV())
r.gt().n(0,s.gd4())
r.gdW().n(0,s.gcP())
s.dx=r}return r},
gdC:function(){var s=this.f
return s==null?this.f=O.eO(this,"emission"):s},
gdm:function(){var s=this.r
return s==null?this.r=O.eO(this,"ambient"):s},
gdA:function(){var s=this.x
return s==null?this.x=O.eO(this,"diffuse"):s},
gbK:function(){var s=this.z
return s==null?this.z=new O.iU(new V.V(0,0,0),this,"specular",new A.aD(!1,!1,!1)):s},
cU:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.y,a1=new H.W(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=H.b([],t.i)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.p)(a2),++r){q=a2[r]
p=q.gaf()
o=a1.h(0,q.gaf())
a1.m(0,p,o==null?1:o)}n=H.b([],t.cn)
a1.E(0,new O.iV(b,n))
C.b.ba(n,new O.iW())
m=new H.W(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=H.b([],t.U)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.p)(a2),++r){q=a2[r]
p=q.gaf()
o=m.h(0,q.gaf())
m.m(0,p,o==null?1:o)}l=H.b([],t.fD)
m.E(0,new O.iX(b,l))
C.b.ba(l,new O.iY())
k=new H.W(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=H.b([],t.o)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.p)(a2),++r){q=a2[r]
p=q.gaf()
o=k.h(0,q.gaf())
k.m(0,p,o==null?1:o)}j=H.b([],t.eg)
k.E(0,new O.iZ(b,j))
C.b.ba(j,new O.j_())
i=new H.W(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=H.b([],t.D)
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.p)(a0),++r){q=a0[r]
s=q.gaf()
p=i.h(0,q.gaf())
i.m(0,s,p==null?1:p)}h=H.b([],t.c3)
i.E(0,new O.j0(b,h))
C.b.ba(h,new O.j1())
a0=C.c.a6(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.iS(new V.ao(0,0,0,0))
a2=b.gdC().c
s=b.gdm().c
p=b.gdA().c
o=b.y
o=(o==null?b.y=O.eO(b,"invDiffuse"):o).c
g=b.gbK().c
f=b.Q
f=(f==null?b.Q=new O.iQ(b,"bump",new A.aD(!1,!1,!1)):f).c
e=b.cx
e=(e==null?b.cx=O.eO(b,"reflect"):e).c
d=b.cy
d=(d==null?b.cy=new O.iT(new V.V(0,0,0),b,"refract",new A.aD(!1,!1,!1)):d).c
c=b.db
return A.ok(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.iP(b,"alpha",new A.aD(!1,!1,!1)):c).c,n,l,j,h)},
eP:function(a,b){if(b!=null)if(!C.b.A(a,b)){b.a=a.length
a.push(b)}},
ay:function(a,b){var s,r,q,p,o,n=this.dx
n=J.az(n==null?H.b([],t.e):n)
s=H.S(n).c
for(;n.u();){r=s.a(n.d)
q=$.as
r.a=q==null?$.as=new V.R(0,0,0):q
q=$.jU
r.b=q==null?$.jU=new V.F(0,0,1):q
q=$.jT
r.c=q==null?$.jT=new V.F(0,1,0):q
q=$.jS
r.d=q==null?$.jS=new V.F(-1,0,0):q
p=r.f
if(p!=null){o=p.aF(0,b,r)
r.a=o.b7(r.a)
r.b=o.bG(r.b).I()
r.c=o.bG(r.c).I()
r.d=o.bG(r.d).I()}}},
ee:function(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.a
if(a9==null){s=a7.cU()
r=s.bw
a9=t.eI.a(b0.fr.h(0,r))
if(a9==null){q=b0.a
p=t.S
o=t.W
a9=new A.d8(s,H.b([],t.p),P.U(p,o),P.U(p,t.O),P.U(p,o),P.U(p,t.d),P.U(p,o),P.U(p,t.m),P.U(p,o),P.U(p,t.R),q,r)
a9.eB(s,q)
b0.dl(a9)}a9=a7.a=a9
b1.e=null}n=a9.x
m=n.dE
s=b1.e
if(!(s instanceof Z.bV))s=b1.e=null
if(s==null||!s.d.q(0,m)){s=n.k4
if(s){r=b1.d
if(r!=null)r.aD()}r=n.r1
if(r){q=b1.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gS().c9()
q.gZ().c9()
q=q.e
if(q!=null)q.ar(0)}}q=n.rx
if(q){p=b1.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.gZ().hF()
p=p.e
if(p!=null)p.ar(0)}}p=b1.d
l=p==null?a8:p.dt(new Z.fO(b0.a),m)
if(l==null)return
p=l.aN($.aN())
if(p!=null){o=a9.y
o=o==null?a8:o.c
p.e=o==null?0:o}if(s){s=l.aN($.bt())
if(s!=null){p=a9.Q
p=p==null?a8:p.c
s.e=p==null?1:p}}if(r){s=l.aN($.bs())
if(s!=null){r=a9.z
r=r==null?a8:r.c
s.e=r==null?2:r}}if(n.r2){s=l.aN($.bO())
if(s!=null){r=a9.ch
r=r==null?a8:r.c
s.e=r==null?3:r}}if(q){s=l.aN($.bP())
if(s!=null){r=a9.cx
r=r==null?a8:r.c
s.e=r==null?4:r}}if(n.ry){s=l.aN($.br())
if(s!=null){r=a9.cy
r=r==null?a8:r.c
s.e=r==null?5:r}}b1.e=l}k=H.b([],t.ga)
a9.am(b0)
if(n.fr){s=b0.dx
s=s.ga_(s)
r=a9.db
if(r!=null)r.ag(s.aa(0,!0))}if(n.fx){s=b0.gen()
r=a9.dx
if(r!=null)r.ag(s.aa(0,!0))}s=b0.ch
if(s==null){s=b0.dx
s=b0.ch=b0.gio().M(0,s.ga_(s))}r=a9.fr
if(r!=null)r.ag(s.aa(0,!0))
if(n.go){s=b0.db
s=s.ga_(s)
r=a9.dy
if(r!=null)r.ag(s.aa(0,!0))}if(n.x1){s=$.ma
if(s==null){s=new V.db(1,0,0,0,1,0,0,0,1)
$.ma=s}r=a9.go
if(r!=null)r.ag(s.aa(0,!0))}if(n.x2){s=V.aZ()
r=a9.id
if(r!=null)r.ag(s.aa(0,!0))}if(n.y1){s=V.aZ()
r=a9.k1
if(r!=null)r.ag(s.aa(0,!0))}if(n.b0>0){s=a7.e.a
j=s.length
r=a9.k2
if(r!=null)r.a.uniform1i(r.d,j)
for(i=0;i<j;++i){if(i>=s.length)return H.d(s,i)
r=s[i]
q=a9.k3
if(i>=q.length)return H.d(q,i)
q=q[i]
h=new Float32Array(H.cv(r.aa(0,!0)))
q.a.uniformMatrix4fv(q.d,!1,h)}}if(n.a.a){s=a7.f
s=s==null?a8:s.f
if(s==null)s=new V.V(0,0,0)
r=a9.k4
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}if(n.k1){if(n.b.a){s=a7.r
s=s==null?a8:s.f
if(s==null)s=new V.V(0,0,0)
r=a9.rx
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}if(n.c.a){s=a7.x
s=s==null?a8:s.f
if(s==null)s=new V.V(0,0,0)
r=a9.x2
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}if(n.d.a){s=a7.y
s=s==null?a8:s.f
if(s==null)s=new V.V(0,0,0)
r=a9.b0
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}s=n.e.a
if(!s)r=!1
else r=!0
if(r){r=a7.z
r=r==null?a8:r.ch
if(r==null)r=100
q=a9.dG
if(q!=null)q.a.uniform1f(q.d,r)}if(s){s=a7.z
s=s==null?a8:s.f
if(s==null)s=new V.V(1,1,1)
r=a9.dF
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}s=n.z
if(s.length>0){g=new H.W(t.y)
r=a7.dx
r=r==null?a8:r.e
if(r==null)r=H.b([],t.i)
q=r.length
p=t.c
f=0
for(;f<r.length;r.length===q||(0,H.p)(r),++f){e=r[f]
d=e.gaf()
c=g.h(0,d)
if(c==null)c=0
g.m(0,d,c+1)
o=a9.cf.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
o=e.giG()
a=$.as
o=o.b7(a==null?$.as=new V.R(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.giH()
a=$.as
o=o.b7(a==null?$.as=new V.R(0,0,0):a)
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gaL(e)
a=b.d
a.a.uniform3f(a.d,o.a,o.b,o.c)
if(e.ghS()){o=e.ghB()
a=b.e
if(a!=null)a.a.uniform1f(a.d,o)
o=e.ghC()
a=b.f
if(a!=null)a.a.uniform1f(a.d,o)
o=e.ghD()
a=b.r
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.p)(s),++f){q=s[f].a
j=g.h(0,q)
if(j==null)j=0
q=a9.ce.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.Q
if(s.length>0){r=b0.db
a0=r.ga_(r)
a1=new H.W(t.y)
r=a7.dx
r=r==null?a8:r.f
if(r==null)r=H.b([],t.U)
q=r.length
p=t.V
f=0
for(;f<r.length;r.length===q||(0,H.p)(r),++f){e=r[f]
d=e.gaf()
c=a1.h(0,d)
if(c==null)c=0
a1.m(0,d,c+1)
o=a9.ci.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
o=a0.bG(e.ghQ(e)).I()
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gaL(e)
a=b.f
a.a.uniform3f(a.d,o.a,o.b,o.c)
e.gb5()
o=e.ghQ(e)
a=b.d
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.giV()
a=b.b
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gcC(e)
a=b.c
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gb5()
if(!C.b.A(k,o)){o.a=k.length
k.push(o)}o=e.gb5()
a=o.gbC(o)
if(a){a=b.r
if(a!=null){a2=o.d
a3=a.a
a=a.d
if(!a2)a3.uniform1i(a,0)
else a3.uniform1i(a,o.a)}}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.p)(s),++f){q=s[f].a
j=a1.h(0,q)
if(j==null)j=0
q=a9.cg.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.ch
if(s.length>0){r=b0.db
a0=r.ga_(r)
a4=new H.W(t.y)
r=a7.dx
r=r==null?a8:r.r
if(r==null)r=H.b([],t.o)
q=r.length
p=t.B
f=0
for(;f<r.length;r.length===q||(0,H.p)(r),++f){e=r[f]
d=e.gaf()
c=a4.h(0,d)
if(c==null)c=0
a4.m(0,d,c+1)
o=a9.ck.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
a5=a0.M(0,e.ga_(e))
o=e.ga_(e)
a=$.as
o=o.b7(a==null?$.as=new V.R(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=$.as
o=a5.b7(o==null?$.as=new V.R(0,0,0):o)
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gaL(e)
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
e.gb5()
o=a5.cr(0)
a=b.d
if(a!=null){h=new Float32Array(H.cv(new V.db(o.a,o.b,o.c,o.e,o.f,o.r,o.y,o.z,o.Q).aa(0,!0)))
a.a.uniformMatrix3fv(a.d,!1,h)}e.gb5()
o=e.gb5()
if(!C.b.A(k,o)){o.a=k.length
k.push(o)}o=e.gb5()
a=o.gbC(o)
if(a){a=b.f
if(a!=null){a2=o.gbC(o)
a3=a.a
a=a.d
if(!a2)a3.uniform1i(a,0)
else a3.uniform1i(a,o.gC(o))}}e.gcI()
o=e.giF()
a=b.x
if(a!=null)a.a.uniform4f(a.d,o.a,o.b,o.c,o.d)
o=e.gcI()
if(!C.b.A(k,o)){o.a=k.length
k.push(o)}o=e.gcI()
a=o.gbC(o)
if(a){a=b.r
if(a!=null){a2=o.gbC(o)
a3=a.a
a=a.d
if(!a2)a3.uniform1i(a,0)
else a3.uniform1i(a,o.gC(o))}}if(e.ghS()){o=e.ghB()
a=b.y
if(a!=null)a.a.uniform1f(a.d,o)
o=e.ghC()
a=b.z
if(a!=null)a.a.uniform1f(a.d,o)
o=e.ghD()
a=b.Q
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.p)(s),++f){q=s[f].a
j=a4.h(0,q)
if(j==null)j=0
q=a9.cj.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.cx
if(s.length>0){r=b0.db
a0=r.ga_(r)
a6=new H.W(t.y)
r=a7.dx
r=r==null?a8:r.x
if(r==null)r=H.b([],t.D)
q=r.length
p=t.J
f=0
for(;f<r.length;r.length===q||(0,H.p)(r),++f){e=r[f]
d=e.gaf()
c=a6.h(0,d)
if(c==null)c=0
a6.m(0,d,c+1)
o=a9.cm.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
o=e.a
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.b.I()
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=a0.b7(e.a)
a=b.d
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.r
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
if(e.x!=null||e.y!=null){o=e.c
a=b.f
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.d
a=b.r
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.z
a=b.x
if(a!=null)a.a.uniform1f(a.d,o)
o=e.Q
a=b.y
if(a!=null)a.a.uniform1f(a.d,o)}o=e.x
if(o!=null){if(!C.b.A(k,o)){o.a=k.length
k.push(o)}o=e.x
if(o!=null&&o.d){a=b.dx
if(a!=null){a2=o.d
a3=a.a
a=a.d
if(!a2)a3.uniform1i(a,0)
else a3.uniform1i(a,o.a)}}}if(e.y!=null){o=e.e
if(o==null){o=$.mF
if(o==null){o=new V.cm(0,0,0,0)
$.mF=o}}a=b.z
if(a!=null)a.a.uniform4f(a.d,o.a,o.b,o.c,o.d)
o=e.y
if(o!=null)if(!C.b.A(k,o)){o.a=k.length
k.push(o)}o=e.y
if(o!=null&&o.d){a=b.dy
if(a!=null){a2=o.d
a3=a.a
a=a.d
if(!a2)a3.uniform1i(a,0)
else a3.uniform1i(a,o.a)}}}if(e.db){o=e.cy
a=b.Q
if(a!=null)a.a.uniform1f(a.d,o)
o=e.dx
a=b.ch
if(a!=null)a.a.uniform1f(a.d,o)}o=e.dy
a=b.cx
if(a!=null)a.a.uniform1f(a.d,o)
o=e.fr
a=b.cy
if(a!=null)a.a.uniform1f(a.d,o)
o=e.fx
a=b.db
if(a!=null)a.a.uniform1f(a.d,o)}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.p)(s),++f){q=s[f].a
j=a6.h(0,q)
if(j==null)j=0
q=a9.cl.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}}if(n.dy){s=b0.Q
if(s==null){s=b0.db
s=b0.Q=s.ga_(s).cr(0)}r=a9.fy
if(r!=null)r.ag(s.aa(0,!0))}if(n.db){a7.eP(k,a8)
a9.hf(a9.dH,a8)
if(n.r.a){s=a7.cx
s=s==null?a8:s.f
if(s==null)s=new V.V(1,1,1)
r=a9.dI
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}s=n.x.a
if(!s)r=!1
else r=!0
if(r){r=a7.cy
r=r==null?a8:r.ch
if(r==null)r=0
q=a9.dJ
if(q!=null)q.a.uniform1f(q.d,r)}if(s){s=a7.cy
s=s==null?a8:s.f
if(s==null)s=new V.V(1,1,1)
r=a9.dK
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}}s=n.y.a
r=!s
if(r)q=!1
else q=!0
if(q){if(s){s=a7.db
s=s==null?a8:s.f
if(s==null)s=1
q=a9.dL
if(q!=null)q.a.uniform1f(q.d,s)}s=b0.a
s.enable(3042)
s.blendFunc(770,771)}for(s=b0.a,i=0;i<k.length;++i){q=k[i]
if(!q.c&&q.d){q.c=!0
s.activeTexture(33984+q.a)
s.bindTexture(3553,q.b)}}q=t.C.a(b1.e)
q.am(b0)
q.ax(b0)
q.bo(b0)
if(r)r=!1
else r=!0
if(r)s.disable(3042)
for(i=0;i<k.length;++i){r=k[i]
if(r.c){r.c=!1
s.activeTexture(33984+r.a)
s.bindTexture(3553,a8)}}s.useProgram(a8)
a9.gae(a9).dB()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cU().bw}}
O.iV.prototype={
$2:function(a,b){return this.b.push(new A.b7(a,C.c.a6(b+3,4)*4))},
$S:6}
O.iW.prototype={
$2:function(a,b){return C.c.an(a.a,b.a)},
$S:51}
O.iX.prototype={
$2:function(a,b){return this.b.push(new A.b9(a,C.c.a6(b+3,4)*4))},
$S:6}
O.iY.prototype={
$2:function(a,b){return C.c.an(a.a,b.a)},
$S:52}
O.iZ.prototype={
$2:function(a,b){return this.b.push(new A.bh(a,C.c.a6(b+3,4)*4))},
$S:6}
O.j_.prototype={
$2:function(a,b){return C.c.an(a.a,b.a)},
$S:53}
O.j0.prototype={
$2:function(a,b){return this.b.push(new A.bk(a,C.c.a6(b+3,4)*4))},
$S:6}
O.j1.prototype={
$2:function(a,b){return C.c.an(a.a,b.a)},
$S:54}
O.iP.prototype={
aJ:function(){var s,r=this
r.cK()
s=r.f
$.D().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.a4(new D.y(r.b,s,1))}}}
O.eN.prototype={
aJ:function(){},
d9:function(a){var s,r,q=this
if(!q.c.q(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.aJ()
s=q.a
s.a=null
s.a4(null)}}}
O.iQ.prototype={}
O.da.prototype={
d7:function(a){var s,r=this
if(!r.f.q(0,a)){s=r.f
r.f=a
r.a.a4(new D.y(r.b+".color",s,a))}},
aJ:function(){this.cK()
this.d7(new V.V(1,1,1))},
saL:function(a,b){this.d9(new A.aD(!0,!1,!1))
this.d7(b)}}
O.iS.prototype={}
O.iT.prototype={
aJ:function(){var s,r=this
r.cL()
s=r.ch
$.D().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.a4(new D.y(r.b+".refraction",s,1))}}}
O.iU.prototype={
da:function(a){var s=this,r=s.ch
$.D().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.a4(new D.y(s.b+".shininess",r,a))}},
aJ:function(){this.cL()
this.da(100)}}
O.ce.prototype={}
T.cg.prototype={}
T.fr.prototype={}
T.fs.prototype={
d8:function(){if(!this.d){this.d=!0
var s=this.y
if(s!=null)s.dD()}},
gt:function(){var s=this.y
return s==null?this.y=D.M():s}}
T.js.prototype={
i5:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
o.toString
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=document.createElement("img")
s.src=a
r=T.lq(o)
W.a2(s,"load",new T.jt(this,r,s,!1,o,!1,!1),!1)
return r},
hc:function(a,b,c){var s,r,q,p,o,n
b=V.ee(b)
s=a.width
r=V.ee(s==null?512:s)
s=a.height
q=V.ee(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.l9()
p.width=r
p.height=q
o=t.ar.a(C.i.eq(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.qo(o.getImageData(0,0,s,n==null?512:n))}}}
T.jt.prototype={
$1:function(a){var s,r,q=this,p=q.b,o=q.c,n=o.width
p.e=n==null?512:n
n=o.height
p.f=n==null?512:n
n=q.a
s=n.hc(o,n.b,q.d)
r=o.width
p.r=r==null?512:r
o=o.height
p.x=o==null?512:o
o=n.a
o.bindTexture(3553,q.e)
o.pixelStorei(37440,0)
C.C.ix(o,3553,0,6408,6408,5121,s)
o.bindTexture(3553,null)
p.d8();++n.e},
$S:3}
X.i5.prototype={
gt:function(){var s=this.fr
return s==null?this.fr=D.M():s},
a5:function(a){var s=this.fr
return s==null?null:s.G(a)},
saA:function(a,b){var s,r=this
if(b<1)b=1
s=r.a
if(s!==b){r.y=null
r.c=r.a=b
r.a5(new D.y("width",s,b))}},
sat:function(a,b){var s,r=this
if(b<1)b=1
s=r.b
if(s!==b){r.y=null
r.d=r.b=b
r.a5(new D.y("height",s,b))}},
am:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.y==null){s=a.a
r=h.ch
q=h.a
p=h.b
o=H.hV(s.getParameter(3379))
n=V.ee(q)
m=V.ee(p)
o=V.ee(o)
n=Math.min(n,o)
m=Math.min(m,o)
l=s.createTexture()
l.toString
s.bindTexture(f,l)
s.texParameteri(f,10242,33071)
s.texParameteri(f,10243,33071)
s.texParameteri(f,10241,9729)
s.texParameteri(f,10240,9729)
C.C.ej(s,f,0,6408,n,m,0,6408,5121,g)
s.bindTexture(f,g)
k=T.lq(l)
k.e=q
k.f=p
k.r=n
k.x=m
k.d8()
r.b=k.b
r.c=k.c
r.d=k.d
r.e=k.e
r.f=k.f
r.r=k.r
r.x=k.x
q=r.y
if(q!=null)q.dD()
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
a.c=C.d.a3(r*h.a)
q=j.d
a.d=C.d.a3(q*h.b)
p=h.c
i=C.d.a3(j.a*p)
l=h.d
s.viewport(i,C.d.a3(j.b*l),C.d.a3(r*p),C.d.a3(q*l))
s.clearDepth(h.db)
r=h.cx
q=r.a
p=r.b
l=r.c
r=r.d
s.clearColor(q,p,l,r)
if(16640>0)s.clear(16640)},
bo:function(a){a.a.bindFramebuffer(36160,null)}}
X.iz.prototype={
gt:function(){var s=this.x
return s==null?this.x=D.M():s},
am:function(a){var s,r,q,p,o,n,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
s=m.drawingBufferWidth
if(s==null)s=512
r=m.drawingBufferHeight
if(r==null)r=512
q=this.r
p=C.d.a3(q.a*s)
o=C.d.a3(q.b*r)
n=C.d.a3(q.c*s)
a.c=n
q=C.d.a3(q.d*r)
a.d=q
m.viewport(p,o,n,q)
m.clearDepth(2000)
q=this.a
m.clearColor(q.a,q.b,q.c,q.d)
m.clear(16640)},
bo:function(a){}}
X.f0.prototype={
gt:function(){var s=this.f
return s==null?this.f=D.M():s},
a5:function(a){var s=this.f
return s==null?null:s.G(a)},
fl:function(){return this.a5(null)},
sb2:function(a){var s,r,q=this
if(!J.J(q.b,a)){s=q.b
if(s!=null)s.gt().K(0,q.gd0())
r=q.b
q.b=a
if(a!=null)a.gt().n(0,q.gd0())
q.a5(new D.y("mover",r,q.b))}}}
X.jr.prototype={}
V.aC.prototype={
bq:function(a){this.b=new P.iC(C.T)
this.c=null
this.d=H.b([],t.F)},
N:function(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.d
if(j.length===0)j.push(H.b([],t.E))
s=a.split("\n")
for(j=s.length,r=t.E,q=!0,p=0;p<j;++p){o=s[p]
if(q)q=!1
else k.d.push(H.b([],r))
n=document.createElement("div")
n.className="codePart"
m=k.b.eX(o,0,o.length)
l=m==null?o:m
l=H.lR(l," ","&nbsp;")
C.R.er(n,l)
l=n.style
l.color=b
C.b.gaE(k.d).push(n)}},
e9:function(a,b){var s,r,q,p=this
p.d=H.b([],t.F)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bv()
if(r!=null)for(q=new H.r(s),q=new P.bL(r.cE(new H.be(q,q.gl(q))).a());q.u();)p.bE(q.gB(q))}}
V.l3.prototype={
$1:function(a){var s=C.d.cD(this.a.gi0(),2)
if(s!=="0.00")P.lQ(s+" fps")},
$S:55}
V.es.prototype={
bE:function(a){var s=this
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
bv:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()\\-+*%!&|=.,?:;",h="OpenDoubleStr",g="CloseDoubleStr",f="EscDoubleStr",e="OpenSingleStr",d="CloseSingleStr",c="EscSingleStr",b="Slash",a="Comment",a0="EndComment",a1="MLComment",a2="MLCStar",a3="Whitespace",a4=L.jy()
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
a4.k(0,h).j(0,h).a.push(new K.aP())
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
a4.k(0,e).j(0,e).a.push(new K.aP())
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
r.aP(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aP(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aP(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a4}}
V.ez.prototype={
bE:function(a){var s=this
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
bv:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()[]\\-+*%!&|=.,?:;",h="Slash",g="Comment",f="EndComment",e="Preprocess",d="EndPreprocess",c="Whitespace",b=L.jy()
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
b.k(0,h).j(0,j).a.push(new K.aP())
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
r.aP(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],p))
r.aP(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],p))
r.aP(0,"Builtin",H.b(["gl_FragColor","gl_Position"],p))
return b}}
V.eA.prototype={
bE:function(a){var s=this,r="#111"
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
bv:function(){var s,r,q,p="Start",o="Id",n="Attr",m="Sym",l="OpenStr",k="CloseStr",j="Other",i=L.jy()
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
i.k(0,l).j(0,l).a.push(new K.aP())
i.k(0,p).j(0,j).a.push(new K.aP())
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
r.aP(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],t.s))
r=i.k(0,n)
r.d=r.a.O(n)
r=i.k(0,j)
r.d=r.a.O(j)
return i}}
V.f2.prototype={
e9:function(a,b){this.d=H.b([],t.F)
this.N(C.b.j(b,"\n"),"#111")},
bE:function(a){},
bv:function(){return null}}
V.jb.prototype={
di:function(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=l.a,j=P.mv().gcw().h(0,k)
if(j==null)if(d){c.$0()
l.dg(b)
s=!0}else s=!1
else if(j===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
p=l.c
o=J.aM(p)
o.gbt(p).n(0,q)
n=W.o8("radio")
n.checked=s
n.name=k
W.a2(n,"change",new V.jc(l,n,c,b),!1)
q.children.toString
q.appendChild(n).toString
m=r.createElement("span")
m.textContent=b
q.appendChild(m).toString
p=o.gbt(p)
r=r.createElement("br")
r.toString
p.n(0,r)},
aZ:function(a,b,c){return this.di(a,b,c,!1)},
dg:function(a){var s,r,q=P.mv(),p=t.N,o=P.oh(q.gcw(),p,p)
o.m(0,this.a,a)
s=q.ef(0,o)
p=window.history
p.toString
r=s.gc5()
p.replaceState(new P.kg([],[]).bH(""),"",r)}}
V.jc.prototype={
$1:function(a){var s=this,r=s.b.checked
if(r===!0){s.c.$0()
s.a.dg(s.d)}},
$S:3}
V.jk.prototype={
dk:function(a){var s,r,q,p,o,n,m=this.hi(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.r(C.b.i3(a)),s=new P.bL(m.cE(new H.be(s,s.gl(s))).a());s.u();){r=s.gB(s)
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
if(H.nl(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.ko(C.w,r,C.e,!1)
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
ep:function(a){var s,r,q,p=t.F,o=new V.es("dart",H.b([],p))
o.bq("dart")
s=new V.ez("glsl",H.b([],p))
s.bq("glsl")
r=new V.eA("html",H.b([],p))
r.bq("html")
q=C.b.hX(H.b([o,s,r],t.g6),new V.jn(a))
if(q!=null)return q
p=new V.f2("plain",H.b([],p))
p.bq("plain")
return p},
dj:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.b([],t.t)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(C.a.a1(q,"+")){b2[r]=C.a.ai(q,1)
a8.push(1)
s=!0}else if(C.a.a1(q,"-")){b2[r]=C.a.ai(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.ep(b0)
p.e9(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m).toString
this.a.appendChild(n).toString
l=P.ko(C.w,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.lX()
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
for(a4=C.b.gP(q);a4.u();)b.appendChild(a4.gB(a4)).toString
d.appendChild(c).toString
d.appendChild(b).toString
m.appendChild(d).toString}},
ht:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
hi:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other",f=this.b
if(f!=null)return f
f=L.jy()
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
f.k(0,o).j(0,g).a.push(new K.aP())
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
V.jm.prototype={
$1:function(a){P.mr(C.m,new V.jl(this.a))},
$S:3}
V.jl.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.a3(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.x(-0.01*s)+"px"
q.top=r},
$S:1}
V.jn.prototype={
$1:function(a){var s=a==null?null:a.a
return s===this.a},
$S:56}
V.kV.prototype={
$0:function(){this.a.sah(0,F.lL(1,null,null,1))},
$S:1}
V.kW.prototype={
$0:function(){this.a.sah(0,F.kG(1,!0,!0,40,1))},
$S:1}
V.kX.prototype={
$0:function(){this.a.sah(0,F.kG(0.2,!0,!0,40,0.2))},
$S:1}
V.kY.prototype={
$0:function(){this.a.sah(0,F.kG(1,!0,!1,40,0))},
$S:1}
V.kZ.prototype={
$0:function(){this.a.sah(0,F.qI(6,6))},
$S:1}
V.l_.prototype={
$0:function(){this.a.sah(0,F.nm())},
$S:1}
V.l0.prototype={
$0:function(){this.a.sah(0,F.qC())},
$S:1}
V.l1.prototype={
$1:function(a){var s,r=this.a,q=this.b,p=q.a
p=p==null?null:p.c
s=t.s
r.dj("Vertex Shader","glsl",0,H.b((p==null?"":p).split("\n"),s))
q=q.a
q=q==null?null:q.d
r.dj("Fragment Shader","glsl",0,H.b((q==null?"":q).split("\n"),s))},
$S:2};(function aliases(){var s=J.a.prototype
s.ev=s.i
s=J.bd.prototype
s.ex=s.i
s=P.h.prototype
s.ew=s.bI
s=W.E.prototype
s.bL=s.ao
s=W.dT.prototype
s.ey=s.aC
s=K.cV.prototype
s.eu=s.aO
s.bM=s.i
s=O.eN.prototype
s.cK=s.aJ
s=O.da.prototype
s.cL=s.aJ})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"pE","od",57)
r(P,"qi","oQ",14)
r(P,"qj","oR",14)
r(P,"qk","oS",14)
q(P,"n8","qd",1)
r(W,"rU","io",59)
p(W,"qv",4,null,["$4"],["oT"],20,0)
p(W,"qw",4,null,["$4"],["oU"],20,0)
var j
o(j=E.bA.prototype,"ge5",0,0,null,["$1","$0"],["e6","ig"],0,0)
o(j,"ge7",0,0,null,["$1","$0"],["e8","ih"],0,0)
o(j,"ge3",0,0,null,["$1","$0"],["e4","ie"],0,0)
o(j,"ge1",0,0,null,["$1","$0"],["e2","ia"],0,0)
n(j,"gi8","i9",7)
n(j,"gib","ic",7)
o(j=E.ft.prototype,"gcM",0,0,null,["$1","$0"],["cO","cN"],0,0)
m(j,"git","eg",1)
l(j=X.fK.prototype,"gfz","fA",3)
l(j,"gfj","fk",3)
l(j,"gfq","fs",4)
l(j,"gfD","fE",27)
l(j,"gfB","fC",27)
l(j,"gfH","fI",4)
l(j,"gfL","fM",4)
l(j,"gfv","fw",4)
l(j,"gfJ","fK",4)
l(j,"gft","fu",4)
l(j,"gfN","fO",36)
l(j,"gfP","fQ",3)
l(j,"gh4","h5",11)
l(j,"gh0","h1",11)
l(j,"gh2","h3",11)
o(j=D.d_.prototype,"gd1",0,0,null,["$1","$0"],["d2","fF"],0,0)
l(j,"gfR","fS",38)
n(j,"gfd","fe",22)
n(j,"gfV","fW",22)
o(D.cb.prototype,"gbb",0,0,null,["$1","$0"],["X","eF"],0,0)
k(V.am.prototype,"gl","bi",13)
k(V.F.prototype,"gl","bi",13)
k(V.cm.prototype,"gl","bi",13)
o(j=U.bY.prototype,"gaU",0,0,null,["$1","$0"],["U","al"],0,0)
n(j,"geG","eH",19)
n(j,"gfT","fU",19)
o(U.c1.prototype,"gaU",0,0,null,["$1","$0"],["U","al"],0,0)
o(j=U.dE.prototype,"gaU",0,0,null,["$1","$0"],["U","al"],0,0)
l(j,"gf7","f8",2)
l(j,"gf9","fa",2)
l(j,"gfb","fc",2)
l(j,"gf2","f3",2)
l(j,"gf4","f5",2)
l(j,"ghp","hq",2)
l(j,"ghn","ho",2)
l(j,"ghl","hm",2)
o(j=M.cH.prototype,"gaj",0,0,null,["$1","$0"],["ad","bN"],0,0)
n(j,"gfX","fY",18)
n(j,"gfZ","h_",18)
o(j=M.cR.prototype,"gaj",0,0,null,["$1","$0"],["ad","bN"],0,0)
n(j,"gfm","fn",7)
n(j,"gfo","fp",7)
o(j=O.d9.prototype,"gcP",0,0,null,["$1","$0"],["a4","eJ"],0,0)
o(j,"gd4",0,0,null,["$1","$0"],["d5","hb"],0,0)
n(j,"gff","fg",21)
n(j,"gfh","fi",21)
o(X.f0.prototype,"gd0",0,0,null,["$1","$0"],["a5","fl"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.P,null)
q(P.P,[H.lh,J.a,J.aa,P.K,P.dM,P.h,H.be,P.eC,H.cS,H.fH,H.cJ,H.jB,H.j9,H.hu,H.bx,P.L,H.iJ,H.eK,H.eF,H.au,H.h6,P.dZ,P.ct,P.bL,P.fQ,P.cd,P.fj,P.ks,P.e5,P.k8,P.dL,P.j,P.hJ,P.d6,P.dm,P.eo,P.iD,P.kq,P.kp,P.X,P.bz,P.f_,P.dq,P.h3,P.iy,P.ae,P.Z,P.bM,P.jG,P.ho,W.id,W.ld,W.lv,W.cs,W.N,W.dh,W.dT,W.hz,W.cT,W.kc,W.hK,P.kf,P.e0,P.hm,K.aP,K.cV,K.f6,K.u,L.fg,L.fu,L.fv,L.jx,O.ab,O.dc,E.i8,E.bA,E.bT,E.c6,E.h1,E.jd,E.ft,Z.fN,Z.fO,Z.bV,Z.c_,Z.bK,D.ia,D.bW,D.Y,X.cF,X.eH,X.iH,X.iN,X.bg,X.j5,X.jz,X.fK,D.cb,V.V,V.ao,V.ir,V.db,V.bf,V.a0,V.R,V.bG,V.f8,V.am,V.F,V.cm,U.c1,U.dE,M.cR,A.el,A.i2,A.aD,A.b7,A.b9,A.bh,A.bk,A.iR,A.dx,A.dy,A.dA,A.dD,A.a1,A.jE,F.aq,F.iv,F.eJ,F.iI,F.f4,F.ji,F.dn,F.dp,F.bH,F.cn,F.z,F.co,F.cp,F.jY,F.jZ,F.dG,O.ce,O.eN,O.iS,T.js,X.jr,X.f0,V.aC,V.jb,V.jk])
q(J.a,[J.eD,J.cY,J.bd,J.w,J.c2,J.bc,H.dd,H.a_,W.e,W.i0,W.bu,W.cG,W.aR,W.I,W.fV,W.ap,W.ih,W.ii,W.fX,W.cO,W.fZ,W.ij,W.l,W.h4,W.aF,W.iB,W.h8,W.bC,W.iM,W.j2,W.hc,W.hd,W.aG,W.he,W.hg,W.aI,W.hk,W.hn,W.aJ,W.hp,W.aK,W.hv,W.al,W.hB,W.jv,W.ax,W.hD,W.jA,W.jL,W.hL,W.hN,W.hP,W.hR,W.hT,P.aV,P.ha,P.b_,P.hi,P.ja,P.hw,P.b0,P.hF,P.i3,P.fS,P.c8,P.hs])
q(J.bd,[J.f1,J.bJ,J.aU])
r(J.iF,J.w)
q(J.c2,[J.cX,J.eE])
q(P.K,[H.cZ,P.fy,H.eG,H.fG,H.fa,H.h2,P.ek,P.eX,P.aA,P.fI,P.fF,P.cc,P.ep,P.er])
r(P.d2,P.dM)
q(P.d2,[H.ck,W.fT,W.a5,P.ex])
r(H.r,H.ck)
q(P.h,[H.n,H.aW,H.b3,P.cW])
q(H.n,[H.d3,H.d0])
r(H.cP,H.aW)
q(P.eC,[H.eM,H.fP])
r(H.d7,H.d3)
r(H.cK,H.cJ)
r(H.di,P.fy)
q(H.bx,[H.fo,H.iG,H.kP,H.kQ,H.kR,P.k2,P.k1,P.k3,P.k4,P.kl,P.kk,P.kE,P.ka,P.kb,P.iK,P.iO,P.jP,P.jO,P.ik,P.il,P.jK,P.jH,P.jI,P.jJ,P.kn,P.km,P.ky,P.kz,P.kA,W.im,W.j3,W.j4,W.jh,W.jp,W.k5,W.j7,W.j6,W.kd,W.ke,W.kj,W.kr,P.kh,P.ki,P.kw,P.kF,P.iw,P.ix,P.i4,E.je,E.jf,E.jg,E.ju,D.it,D.iu,F.kt,F.kH,F.kJ,F.kK,F.kL,F.l5,F.l4,F.l6,F.kU,F.kI,F.jj,F.k0,F.k_,F.jV,F.jW,O.iV,O.iW,O.iX,O.iY,O.iZ,O.j_,O.j0,O.j1,T.jt,V.l3,V.jc,V.jm,V.jl,V.jn,V.kV,V.kW,V.kX,V.kY,V.kZ,V.l_,V.l0,V.l1])
q(H.fo,[H.fh,H.bS])
r(P.d5,P.L)
q(P.d5,[H.W,W.fR])
r(H.c5,H.a_)
q(H.c5,[H.dO,H.dQ])
r(H.dP,H.dO)
r(H.bE,H.dP)
r(H.dR,H.dQ)
r(H.de,H.dR)
q(H.de,[H.eS,H.eT,H.eU,H.eV,H.eW,H.df,H.bF])
r(H.e_,H.h2)
r(P.dW,P.cW)
r(P.k9,P.ks)
r(P.dS,P.e5)
r(P.dK,P.dS)
r(P.e3,P.d6)
r(P.cl,P.e3)
q(P.eo,[P.i6,P.ip])
r(P.eq,P.fj)
q(P.eq,[P.i7,P.iC,P.jQ,P.jN])
r(P.jM,P.ip)
q(P.aA,[P.dl,P.eB])
r(P.fW,P.bM)
q(W.e,[W.t,W.ew,W.c3,W.av,W.dU,W.aw,W.ag,W.dX,W.fM,W.cq,P.en,P.b8])
q(W.t,[W.E,W.aB,W.cr])
q(W.E,[W.v,P.o])
q(W.v,[W.ei,W.ej,W.bR,W.bv,W.bw,W.ba,W.ey,W.bZ,W.c0,W.fb,W.bl,W.dr,W.fm,W.fn,W.cf])
r(W.ic,W.aR)
r(W.cL,W.fV)
q(W.ap,[W.ie,W.ig])
r(W.fY,W.fX)
r(W.cN,W.fY)
r(W.h_,W.fZ)
r(W.ev,W.h_)
r(W.aj,W.bu)
r(W.h5,W.h4)
r(W.bX,W.h5)
r(W.h9,W.h8)
r(W.bB,W.h9)
r(W.b2,W.l)
q(W.b2,[W.bD,W.ak,W.bI])
r(W.eP,W.hc)
r(W.eQ,W.hd)
r(W.hf,W.he)
r(W.eR,W.hf)
r(W.hh,W.hg)
r(W.dg,W.hh)
r(W.hl,W.hk)
r(W.f3,W.hl)
r(W.f9,W.hn)
r(W.dV,W.dU)
r(W.fd,W.dV)
r(W.hq,W.hp)
r(W.fe,W.hq)
r(W.fi,W.hv)
r(W.hC,W.hB)
r(W.fp,W.hC)
r(W.dY,W.dX)
r(W.fq,W.dY)
r(W.hE,W.hD)
r(W.fw,W.hE)
r(W.bm,W.ak)
r(W.hM,W.hL)
r(W.fU,W.hM)
r(W.dH,W.cO)
r(W.hO,W.hN)
r(W.h7,W.hO)
r(W.hQ,W.hP)
r(W.dN,W.hQ)
r(W.hS,W.hR)
r(W.hr,W.hS)
r(W.hU,W.hT)
r(W.hy,W.hU)
r(W.h0,W.fR)
r(W.dI,P.cd)
r(W.hA,W.dT)
r(P.kg,P.kf)
r(P.ad,P.hm)
r(P.hb,P.ha)
r(P.eI,P.hb)
r(P.hj,P.hi)
r(P.eY,P.hj)
r(P.c9,P.o)
r(P.hx,P.hw)
r(P.fk,P.hx)
r(P.hG,P.hF)
r(P.fx,P.hG)
r(P.em,P.fS)
r(P.eZ,P.b8)
r(P.ht,P.hs)
r(P.ff,P.ht)
q(K.cV,[K.ac,L.dt])
q(E.i8,[Z.bU,A.ca,T.cg])
q(D.Y,[D.aS,D.aT,D.y,X.f5])
q(X.f5,[X.d4,X.c4,X.ds])
q(O.ab,[D.d_,U.bY,M.cH])
q(D.ia,[U.ib,U.a4])
r(U.cI,U.a4)
q(A.ca,[A.cM,A.d8])
q(A.a1,[A.ci,A.fB,A.fC,A.fD,A.fz,A.du,A.fA,A.dv,A.dw,A.fE,A.dz,A.cj,A.dB,A.dC])
r(F.jo,F.iv)
r(F.jD,F.iI)
r(F.jX,F.jY)
r(F.j8,F.jZ)
q(O.ce,[O.eu,O.d9])
q(O.eN,[O.iP,O.iQ,O.da])
q(O.da,[O.iT,O.iU])
r(T.fr,T.cg)
r(T.fs,T.fr)
q(X.jr,[X.i5,X.iz])
q(V.aC,[V.es,V.ez,V.eA,V.f2])
s(H.ck,H.fH)
s(H.dO,P.j)
s(H.dP,H.cS)
s(H.dQ,P.j)
s(H.dR,H.cS)
s(P.dM,P.j)
s(P.e3,P.hJ)
s(P.e5,P.dm)
s(W.fV,W.id)
s(W.fX,P.j)
s(W.fY,W.N)
s(W.fZ,P.j)
s(W.h_,W.N)
s(W.h4,P.j)
s(W.h5,W.N)
s(W.h8,P.j)
s(W.h9,W.N)
s(W.hc,P.L)
s(W.hd,P.L)
s(W.he,P.j)
s(W.hf,W.N)
s(W.hg,P.j)
s(W.hh,W.N)
s(W.hk,P.j)
s(W.hl,W.N)
s(W.hn,P.L)
s(W.dU,P.j)
s(W.dV,W.N)
s(W.hp,P.j)
s(W.hq,W.N)
s(W.hv,P.L)
s(W.hB,P.j)
s(W.hC,W.N)
s(W.dX,P.j)
s(W.dY,W.N)
s(W.hD,P.j)
s(W.hE,W.N)
s(W.hL,P.j)
s(W.hM,W.N)
s(W.hN,P.j)
s(W.hO,W.N)
s(W.hP,P.j)
s(W.hQ,W.N)
s(W.hR,P.j)
s(W.hS,W.N)
s(W.hT,P.j)
s(W.hU,W.N)
s(P.ha,P.j)
s(P.hb,W.N)
s(P.hi,P.j)
s(P.hj,W.N)
s(P.hw,P.j)
s(P.hx,W.N)
s(P.hF,P.j)
s(P.hG,W.N)
s(P.fS,P.L)
s(P.hs,P.j)
s(P.ht,W.N)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",H:"double",a3:"num",m:"String",a9:"bool",ae:"Null",q:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([Y?])","~()","~(Y)","~(l)","~(ak)","~(m,@)","~(k,k)","~(k,h<bA>)","~(cn,H,H)","~(aq)","~(@,@)","~(bI)","ae()","H()","~(~())","H(H)","@()","H(H,H)","~(k,h<bj>)","~(k,h<a4?>)","a9(E,m,m,cs)","~(k,h<bf>)","~(k,h<ar>)","~(ch,m,k)","a9(t)","a9(aH)","a9(m)","~(bD)","R(H)","~(~(Y))","m(k)","~(@)","~(a3)","ae(@,@)","~(t,t?)","m(m)","~(bm)","@(@)","a9(h<ar>)","ch(@,@)","~(m,m?)","k(k,k)","~(m[@])","~(m,k)","G<m,m>(G<m,m>,m)","~(P?,P?)","ae(~())","bU(k)","ae(@)","@(m)","~(m,m)","k(b7,b7)","k(b9,b9)","k(bh,bh)","k(bk,bk)","~(jw)","a9(aC?)","k(@,@)","@(@,m)","m(e)","E(t)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.pb(v.typeUniverse,JSON.parse('{"f1":"bd","bJ":"bd","aU":"bd","qP":"l","r0":"l","qR":"b8","qQ":"e","r7":"e","ra":"e","qO":"o","r1":"o","qS":"v","r4":"v","r2":"t","r_":"t","rA":"ag","qW":"b2","qT":"aB","rb":"aB","r9":"ak","r3":"bB","qX":"I","qY":"al","r6":"bE","r5":"a_","eD":{"a9":[]},"bd":{"m7":[]},"w":{"q":["1"],"n":["1"],"h":["1"]},"iF":{"w":["1"],"q":["1"],"n":["1"],"h":["1"]},"c2":{"H":[],"a3":[]},"cX":{"H":[],"k":[],"a3":[]},"eE":{"H":[],"a3":[]},"bc":{"m":[]},"cZ":{"K":[]},"r":{"j":["k"],"q":["k"],"n":["k"],"h":["k"],"j.E":"k"},"n":{"h":["1"]},"d3":{"n":["1"],"h":["1"]},"aW":{"h":["2"],"h.E":"2"},"cP":{"aW":["1","2"],"n":["2"],"h":["2"],"h.E":"2"},"d7":{"d3":["2"],"n":["2"],"h":["2"],"h.E":"2"},"b3":{"h":["1"],"h.E":"1"},"ck":{"j":["1"],"q":["1"],"n":["1"],"h":["1"]},"cJ":{"G":["1","2"]},"cK":{"G":["1","2"]},"di":{"K":[]},"eG":{"K":[]},"fG":{"K":[]},"bx":{"cU":[]},"fo":{"cU":[]},"fh":{"cU":[]},"bS":{"cU":[]},"fa":{"K":[]},"W":{"L":["1","2"],"G":["1","2"],"L.V":"2"},"d0":{"n":["1"],"h":["1"],"h.E":"1"},"eF":{"mj":[]},"c5":{"A":["1"],"a_":[]},"bE":{"j":["H"],"A":["H"],"q":["H"],"a_":[],"n":["H"],"h":["H"],"j.E":"H"},"de":{"j":["k"],"A":["k"],"q":["k"],"a_":[],"n":["k"],"h":["k"]},"eS":{"j":["k"],"A":["k"],"q":["k"],"a_":[],"n":["k"],"h":["k"],"j.E":"k"},"eT":{"j":["k"],"A":["k"],"q":["k"],"a_":[],"n":["k"],"h":["k"],"j.E":"k"},"eU":{"j":["k"],"A":["k"],"q":["k"],"a_":[],"n":["k"],"h":["k"],"j.E":"k"},"eV":{"j":["k"],"A":["k"],"q":["k"],"a_":[],"n":["k"],"h":["k"],"j.E":"k"},"eW":{"j":["k"],"A":["k"],"q":["k"],"a_":[],"n":["k"],"h":["k"],"j.E":"k"},"df":{"j":["k"],"A":["k"],"q":["k"],"a_":[],"n":["k"],"h":["k"],"j.E":"k"},"bF":{"j":["k"],"ch":[],"A":["k"],"q":["k"],"a_":[],"n":["k"],"h":["k"],"j.E":"k"},"h2":{"K":[]},"e_":{"K":[]},"dZ":{"jw":[]},"dW":{"h":["1"],"h.E":"1"},"dK":{"dm":["1"],"n":["1"],"h":["1"]},"cW":{"h":["1"]},"d2":{"j":["1"],"q":["1"],"n":["1"],"h":["1"]},"d5":{"L":["1","2"],"G":["1","2"]},"L":{"G":["1","2"]},"d6":{"G":["1","2"]},"cl":{"G":["1","2"]},"dS":{"dm":["1"],"n":["1"],"h":["1"]},"H":{"a3":[]},"k":{"a3":[]},"q":{"n":["1"],"h":["1"]},"ek":{"K":[]},"fy":{"K":[]},"eX":{"K":[]},"aA":{"K":[]},"dl":{"K":[]},"eB":{"K":[]},"fI":{"K":[]},"fF":{"K":[]},"cc":{"K":[]},"ep":{"K":[]},"f_":{"K":[]},"dq":{"K":[]},"er":{"K":[]},"bM":{"fJ":[]},"ho":{"fJ":[]},"fW":{"fJ":[]},"v":{"E":[],"t":[],"e":[]},"ba":{"E":[],"t":[],"e":[]},"E":{"t":[],"e":[]},"aj":{"bu":[]},"bD":{"l":[]},"ak":{"l":[]},"t":{"e":[]},"av":{"e":[]},"aw":{"e":[]},"ag":{"e":[]},"bI":{"l":[]},"b2":{"l":[]},"bm":{"ak":[],"l":[]},"cs":{"aH":[]},"ei":{"E":[],"t":[],"e":[]},"ej":{"E":[],"t":[],"e":[]},"bR":{"E":[],"t":[],"e":[]},"bv":{"E":[],"t":[],"e":[]},"bw":{"E":[],"t":[],"e":[]},"aB":{"t":[],"e":[]},"cN":{"j":["ad<a3>"],"q":["ad<a3>"],"A":["ad<a3>"],"n":["ad<a3>"],"h":["ad<a3>"],"j.E":"ad<a3>"},"cO":{"ad":["a3"]},"ev":{"j":["m"],"q":["m"],"A":["m"],"n":["m"],"h":["m"],"j.E":"m"},"fT":{"j":["E"],"q":["E"],"n":["E"],"h":["E"],"j.E":"E"},"bX":{"j":["aj"],"q":["aj"],"A":["aj"],"n":["aj"],"h":["aj"],"j.E":"aj"},"ew":{"e":[]},"ey":{"E":[],"t":[],"e":[]},"bB":{"j":["t"],"q":["t"],"A":["t"],"n":["t"],"h":["t"],"j.E":"t"},"bZ":{"E":[],"t":[],"e":[]},"c0":{"E":[],"t":[],"e":[]},"c3":{"e":[]},"eP":{"L":["m","@"],"G":["m","@"],"L.V":"@"},"eQ":{"L":["m","@"],"G":["m","@"],"L.V":"@"},"eR":{"j":["aG"],"q":["aG"],"A":["aG"],"n":["aG"],"h":["aG"],"j.E":"aG"},"a5":{"j":["t"],"q":["t"],"n":["t"],"h":["t"],"j.E":"t"},"dg":{"j":["t"],"q":["t"],"A":["t"],"n":["t"],"h":["t"],"j.E":"t"},"f3":{"j":["aI"],"q":["aI"],"A":["aI"],"n":["aI"],"h":["aI"],"j.E":"aI"},"f9":{"L":["m","@"],"G":["m","@"],"L.V":"@"},"fb":{"E":[],"t":[],"e":[]},"fd":{"j":["av"],"q":["av"],"A":["av"],"e":[],"n":["av"],"h":["av"],"j.E":"av"},"fe":{"j":["aJ"],"q":["aJ"],"A":["aJ"],"n":["aJ"],"h":["aJ"],"j.E":"aJ"},"fi":{"L":["m","m"],"G":["m","m"],"L.V":"m"},"bl":{"E":[],"t":[],"e":[]},"dr":{"E":[],"t":[],"e":[]},"fm":{"E":[],"t":[],"e":[]},"fn":{"E":[],"t":[],"e":[]},"cf":{"E":[],"t":[],"e":[]},"fp":{"j":["ag"],"q":["ag"],"A":["ag"],"n":["ag"],"h":["ag"],"j.E":"ag"},"fq":{"j":["aw"],"q":["aw"],"A":["aw"],"e":[],"n":["aw"],"h":["aw"],"j.E":"aw"},"fw":{"j":["ax"],"q":["ax"],"A":["ax"],"n":["ax"],"h":["ax"],"j.E":"ax"},"fM":{"e":[]},"cq":{"e":[]},"cr":{"t":[],"e":[]},"fU":{"j":["I"],"q":["I"],"A":["I"],"n":["I"],"h":["I"],"j.E":"I"},"dH":{"ad":["a3"]},"h7":{"j":["aF?"],"q":["aF?"],"A":["aF?"],"n":["aF?"],"h":["aF?"],"j.E":"aF?"},"dN":{"j":["t"],"q":["t"],"A":["t"],"n":["t"],"h":["t"],"j.E":"t"},"hr":{"j":["aK"],"q":["aK"],"A":["aK"],"n":["aK"],"h":["aK"],"j.E":"aK"},"hy":{"j":["al"],"q":["al"],"A":["al"],"n":["al"],"h":["al"],"j.E":"al"},"fR":{"L":["m","m"],"G":["m","m"]},"h0":{"L":["m","m"],"G":["m","m"],"L.V":"m"},"dI":{"cd":["1"]},"dh":{"aH":[]},"dT":{"aH":[]},"hA":{"aH":[]},"hz":{"aH":[]},"e0":{"bC":[]},"ex":{"j":["E"],"q":["E"],"n":["E"],"h":["E"],"j.E":"E"},"ad":{"hm":["1"]},"eI":{"j":["aV"],"q":["aV"],"n":["aV"],"h":["aV"],"j.E":"aV"},"eY":{"j":["b_"],"q":["b_"],"n":["b_"],"h":["b_"],"j.E":"b_"},"c9":{"o":[],"E":[],"t":[],"e":[]},"fk":{"j":["m"],"q":["m"],"n":["m"],"h":["m"],"j.E":"m"},"o":{"E":[],"t":[],"e":[]},"fx":{"j":["b0"],"q":["b0"],"n":["b0"],"h":["b0"],"j.E":"b0"},"em":{"L":["m","@"],"G":["m","@"],"L.V":"@"},"en":{"e":[]},"b8":{"e":[]},"eZ":{"e":[]},"ff":{"j":["G<@,@>"],"q":["G<@,@>"],"n":["G<@,@>"],"h":["G<@,@>"],"j.E":"G<@,@>"},"cV":{"aX":[]},"aP":{"aX":[]},"ac":{"aX":[]},"f6":{"aX":[]},"u":{"aX":[]},"dt":{"aX":[]},"ab":{"h":["1"],"ab.T":"1"},"aS":{"Y":[]},"aT":{"Y":[]},"y":{"Y":[]},"d4":{"Y":[]},"c4":{"Y":[]},"f5":{"Y":[]},"ds":{"Y":[]},"nT":{"ar":[]},"o4":{"ar":[]},"ol":{"ar":[]},"cb":{"ar":[]},"d_":{"ab":["ar"],"h":["ar"],"ab.T":"ar"},"cI":{"a4":[]},"bY":{"ab":["a4?"],"a4":[],"h":["a4?"],"ab.T":"a4?"},"c1":{"a4":[]},"dE":{"a4":[]},"cH":{"ab":["bj"],"bj":[],"h":["bj"],"ab.T":"bj"},"cR":{"bj":[]},"ci":{"a1":[]},"cj":{"a1":[]},"cM":{"ca":[]},"d8":{"ca":[]},"fB":{"a1":[]},"fC":{"a1":[]},"fD":{"a1":[]},"fz":{"a1":[]},"du":{"a1":[]},"fA":{"a1":[]},"dv":{"a1":[]},"dw":{"a1":[]},"fE":{"a1":[]},"dz":{"a1":[]},"dB":{"a1":[]},"dC":{"a1":[]},"eu":{"ce":[]},"d9":{"ce":[]},"fr":{"cg":[]},"fs":{"cg":[]},"es":{"aC":[]},"ez":{"aC":[]},"eA":{"aC":[]},"f2":{"aC":[]},"ch":{"q":["k"],"n":["k"],"h":["k"]}}'))
H.pa(v.typeUniverse,JSON.parse('{"aa":1,"n":1,"be":1,"eM":2,"fP":1,"cS":1,"fH":1,"ck":1,"cJ":2,"eK":1,"c5":1,"cd":1,"bL":1,"fj":2,"dL":1,"cW":1,"d2":1,"d5":2,"hJ":2,"d6":2,"dS":1,"dM":1,"e3":2,"e5":1,"eo":2,"eq":2,"eC":1,"dI":1,"N":1,"cT":1,"aS":1,"aT":1,"y":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.lM
return{cR:s("bR"),fK:s("bu"),Y:s("bv"),eT:s("bU"),C:s("bV"),gA:s("bw"),ar:s("cG"),gw:s("n<@>"),h:s("E"),l:s("bA"),bU:s("K"),aD:s("l"),c8:s("aj"),bX:s("bX"),b:s("cU"),x:s("bC"),fS:s("bZ"),gk:s("c0"),eu:s("w<el>"),i:s("w<nT>"),cn:s("w<b7>"),U:s("w<o4>"),fD:s("w<b9>"),E:s("w<ba>"),u:s("w<aq>"),fv:s("w<c_>"),e:s("w<ar>"),L:s("w<eJ>"),F:s("w<q<ba>>"),z:s("w<aX>"),fA:s("w<bf>"),Q:s("w<aH>"),q:s("w<f4>"),cG:s("w<a0>"),eg:s("w<bh>"),o:s("w<ol>"),ba:s("w<bj>"),D:s("w<cb>"),c3:s("w<bk>"),g9:s("w<cd<P>>"),s:s("w<m>"),ga:s("w<cg>"),gT:s("w<ax>"),ab:s("w<dt>"),gN:s("w<ch>"),dC:s("w<a1>"),c:s("w<dx>"),V:s("w<dy>"),B:s("w<dA>"),J:s("w<dD>"),k:s("w<cn>"),n:s("w<H>"),gn:s("w<@>"),t:s("w<k>"),g6:s("w<aC?>"),eJ:s("w<a4?>"),bc:s("w<ce?>"),p:s("w<cj?>"),a:s("w<~(Y)>"),T:s("cY"),eH:s("m7"),M:s("aU"),aU:s("A<@>"),fX:s("W<k,a9>"),y:s("W<k,k>"),O:s("q<dx>"),d:s("q<dy>"),m:s("q<dA>"),R:s("q<dD>"),r:s("q<@>"),bv:s("d4"),f:s("G<@,@>"),dv:s("d7<m,m>"),gc:s("bf"),bu:s("c3"),Z:s("c4"),bZ:s("dd"),dE:s("a_"),bm:s("bF"),P:s("ae"),K:s("P"),I:s("ad<a3>"),fJ:s("mj"),ew:s("c9"),fg:s("ca"),N:s("m"),g7:s("o"),bY:s("bl"),aW:s("cf"),aF:s("jw"),bJ:s("fu"),dr:s("ds"),v:s("du"),w:s("ci"),g:s("dv"),bw:s("dw"),bK:s("dz"),j:s("cj"),G:s("dB"),bz:s("dC"),ak:s("bJ"),dw:s("cl<m,m>"),dD:s("fJ"),h9:s("cr"),ac:s("a5"),cJ:s("a9"),gR:s("H"),A:s("@"),S:s("k"),aw:s("0&*"),_:s("P*"),gO:s("cM?"),bG:s("m6<ae>?"),eI:s("d8?"),X:s("P?"),gW:s("c8?"),dl:s("fg?"),f7:s("fv?"),W:s("ci?"),H:s("a3"),h2:s("~(Y)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.p=W.bv.prototype
C.i=W.bw.prototype
C.R=W.ba.prototype
C.U=J.a.prototype
C.b=J.w.prototype
C.c=J.cX.prototype
C.V=J.cY.prototype
C.d=J.c2.prototype
C.a=J.bc.prototype
C.W=J.aU.prototype
C.a0=H.bF.prototype
C.B=J.f1.prototype
C.C=P.c8.prototype
C.D=W.dr.prototype
C.o=J.bJ.prototype
C.E=W.bm.prototype
C.F=W.cq.prototype
C.G=new E.bT("Browser.chrome")
C.q=new E.bT("Browser.firefox")
C.r=new E.bT("Browser.edge")
C.H=new E.bT("Browser.other")
C.a6=new P.i7()
C.I=new P.i6()
C.t=function getTagFallback(o) {
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
C.u=function(hooks) { return hooks; }

C.P=new P.f_()
C.e=new P.jM()
C.Q=new P.jQ()
C.f=new P.k9()
C.m=new P.bz(0)
C.S=new P.bz(5e6)
C.T=new P.iD("element",!1,!1,!1)
C.j=H.b(s([0,0,32776,33792,1,10240,0,0]),t.t)
C.X=H.b(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.s)
C.k=H.b(s([0,0,65490,45055,65535,34815,65534,18431]),t.t)
C.l=H.b(s([0,0,26624,1023,65534,2047,65534,2047]),t.t)
C.Y=H.b(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.s)
C.v=H.b(s([]),t.s)
C.Z=H.b(s([0,0,32722,12287,65534,34815,65534,18431]),t.t)
C.w=H.b(s([0,0,65498,45055,65535,34815,65534,18431]),t.t)
C.h=H.b(s([0,0,24576,1023,65534,34815,65534,18431]),t.t)
C.x=H.b(s([0,0,32754,11263,65534,34815,65534,18431]),t.t)
C.y=H.b(s([0,0,65490,12287,65535,34815,65534,18431]),t.t)
C.z=H.b(s(["bind","if","ref","repeat","syntax"]),t.s)
C.n=H.b(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.s)
C.a_=new H.cK(0,{},C.v,H.lM("cK<m,m>"))
C.a1=new E.c6("OperatingSystem.windows")
C.A=new E.c6("OperatingSystem.mac")
C.a2=new E.c6("OperatingSystem.linux")
C.a3=new E.c6("OperatingSystem.other")
C.a4=new P.jN(!1)
C.a5=new P.ct(null,2)})();(function staticFields(){$.k6=null
$.aQ=0
$.cE=null
$.lZ=null
$.nd=null
$.n7=null
$.nj=null
$.kM=null
$.kT=null
$.lO=null
$.cw=null
$.e8=null
$.e9=null
$.lH=!1
$.aL=C.f
$.ah=H.b([],H.lM("w<P>"))
$.bb=null
$.lb=null
$.m4=null
$.m3=null
$.dJ=P.U(t.N,t.b)
$.iq=null
$.ma=null
$.mc=null
$.af=null
$.as=null
$.ml=null
$.jR=null
$.mC=null
$.mB=null
$.jS=null
$.jT=null
$.jU=null
$.mA=null
$.mF=null
$.mE=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"qZ","nq",function(){return H.qu("_$dart_dartClosure")})
s($,"rc","ns",function(){return H.b1(H.jC({
toString:function(){return"$receiver$"}}))})
s($,"rd","nt",function(){return H.b1(H.jC({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"re","nu",function(){return H.b1(H.jC(null))})
s($,"rf","nv",function(){return H.b1(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"ri","ny",function(){return H.b1(H.jC(void 0))})
s($,"rj","nz",function(){return H.b1(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"rh","nx",function(){return H.b1(H.mt(null))})
s($,"rg","nw",function(){return H.b1(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"rl","nB",function(){return H.b1(H.mt(void 0))})
s($,"rk","nA",function(){return H.b1(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"rB","lT",function(){return P.oP()})
s($,"rm","nC",function(){return new P.jP().$0()})
s($,"rn","nD",function(){return new P.jO().$0()})
s($,"rC","nH",function(){return new Int8Array(H.cv(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"rF","nJ",function(){return P.ox("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"rS","nK",function(){return P.pw()})
s($,"rD","nI",function(){return P.m8(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"ru","nG",function(){return Z.ay(0)})
s($,"ro","nE",function(){return Z.ay(511)})
s($,"rw","aN",function(){return Z.ay(1)})
s($,"rv","bt",function(){return Z.ay(2)})
s($,"rq","bs",function(){return Z.ay(4)})
s($,"rx","bO",function(){return Z.ay(8)})
s($,"ry","bP",function(){return Z.ay(16)})
s($,"rr","ef",function(){return Z.ay(32)})
s($,"rs","eg",function(){return Z.ay(64)})
s($,"rt","nF",function(){return Z.ay(96)})
s($,"rz","cC",function(){return Z.ay(128)})
s($,"rp","br",function(){return Z.ay(256)})
s($,"qV","np",function(){return new V.ir()})
r($,"qU","D",function(){return $.np()})
r($,"r8","nr",function(){var q=V.me(),p=V.mD(),o=$.mA,n=(o==null?$.mA=V.oM(0,0,-1):o).I(),m=p.aM(n).I(),l=n.aM(m),k=V.oN(q)
return V.aY(m.a,l.a,n.a,m.b8(0).ak(k),m.b,l.b,n.b,l.b8(0).ak(k),m.c,l.c,n.c,n.b8(0).ak(k),0,0,0,1)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.dd,DataView:H.a_,ArrayBufferView:H.a_,Float32Array:H.bE,Float64Array:H.bE,Int16Array:H.eS,Int32Array:H.eT,Int8Array:H.eU,Uint16Array:H.eV,Uint32Array:H.eW,Uint8ClampedArray:H.df,CanvasPixelArray:H.df,Uint8Array:H.bF,HTMLAudioElement:W.v,HTMLBRElement:W.v,HTMLButtonElement:W.v,HTMLContentElement:W.v,HTMLDListElement:W.v,HTMLDataElement:W.v,HTMLDataListElement:W.v,HTMLDetailsElement:W.v,HTMLDialogElement:W.v,HTMLEmbedElement:W.v,HTMLFieldSetElement:W.v,HTMLHRElement:W.v,HTMLHeadElement:W.v,HTMLHeadingElement:W.v,HTMLHtmlElement:W.v,HTMLIFrameElement:W.v,HTMLLIElement:W.v,HTMLLabelElement:W.v,HTMLLegendElement:W.v,HTMLLinkElement:W.v,HTMLMapElement:W.v,HTMLMediaElement:W.v,HTMLMenuElement:W.v,HTMLMetaElement:W.v,HTMLMeterElement:W.v,HTMLModElement:W.v,HTMLOListElement:W.v,HTMLObjectElement:W.v,HTMLOptGroupElement:W.v,HTMLOptionElement:W.v,HTMLOutputElement:W.v,HTMLParagraphElement:W.v,HTMLParamElement:W.v,HTMLPictureElement:W.v,HTMLPreElement:W.v,HTMLProgressElement:W.v,HTMLQuoteElement:W.v,HTMLScriptElement:W.v,HTMLShadowElement:W.v,HTMLSlotElement:W.v,HTMLSourceElement:W.v,HTMLSpanElement:W.v,HTMLStyleElement:W.v,HTMLTableCaptionElement:W.v,HTMLTableColElement:W.v,HTMLTextAreaElement:W.v,HTMLTimeElement:W.v,HTMLTitleElement:W.v,HTMLTrackElement:W.v,HTMLUListElement:W.v,HTMLUnknownElement:W.v,HTMLVideoElement:W.v,HTMLDirectoryElement:W.v,HTMLFontElement:W.v,HTMLFrameElement:W.v,HTMLFrameSetElement:W.v,HTMLMarqueeElement:W.v,HTMLElement:W.v,AccessibleNodeList:W.i0,HTMLAnchorElement:W.ei,HTMLAreaElement:W.ej,HTMLBaseElement:W.bR,Blob:W.bu,HTMLBodyElement:W.bv,HTMLCanvasElement:W.bw,CanvasRenderingContext2D:W.cG,CDATASection:W.aB,CharacterData:W.aB,Comment:W.aB,ProcessingInstruction:W.aB,Text:W.aB,CSSPerspective:W.ic,CSSCharsetRule:W.I,CSSConditionRule:W.I,CSSFontFaceRule:W.I,CSSGroupingRule:W.I,CSSImportRule:W.I,CSSKeyframeRule:W.I,MozCSSKeyframeRule:W.I,WebKitCSSKeyframeRule:W.I,CSSKeyframesRule:W.I,MozCSSKeyframesRule:W.I,WebKitCSSKeyframesRule:W.I,CSSMediaRule:W.I,CSSNamespaceRule:W.I,CSSPageRule:W.I,CSSRule:W.I,CSSStyleRule:W.I,CSSSupportsRule:W.I,CSSViewportRule:W.I,CSSStyleDeclaration:W.cL,MSStyleCSSProperties:W.cL,CSS2Properties:W.cL,CSSImageValue:W.ap,CSSKeywordValue:W.ap,CSSNumericValue:W.ap,CSSPositionValue:W.ap,CSSResourceValue:W.ap,CSSUnitValue:W.ap,CSSURLImageValue:W.ap,CSSStyleValue:W.ap,CSSMatrixComponent:W.aR,CSSRotation:W.aR,CSSScale:W.aR,CSSSkew:W.aR,CSSTranslation:W.aR,CSSTransformComponent:W.aR,CSSTransformValue:W.ie,CSSUnparsedValue:W.ig,DataTransferItemList:W.ih,HTMLDivElement:W.ba,DOMException:W.ii,ClientRectList:W.cN,DOMRectList:W.cN,DOMRectReadOnly:W.cO,DOMStringList:W.ev,DOMTokenList:W.ij,Element:W.E,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,SubmitEvent:W.l,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aj,FileList:W.bX,FileWriter:W.ew,HTMLFormElement:W.ey,Gamepad:W.aF,History:W.iB,HTMLCollection:W.bB,HTMLFormControlsCollection:W.bB,HTMLOptionsCollection:W.bB,ImageData:W.bC,HTMLImageElement:W.bZ,HTMLInputElement:W.c0,KeyboardEvent:W.bD,Location:W.iM,MediaList:W.j2,MessagePort:W.c3,MIDIInputMap:W.eP,MIDIOutputMap:W.eQ,MimeType:W.aG,MimeTypeArray:W.eR,PointerEvent:W.ak,MouseEvent:W.ak,DragEvent:W.ak,Document:W.t,DocumentFragment:W.t,HTMLDocument:W.t,ShadowRoot:W.t,XMLDocument:W.t,DocumentType:W.t,Node:W.t,NodeList:W.dg,RadioNodeList:W.dg,Plugin:W.aI,PluginArray:W.f3,RTCStatsReport:W.f9,HTMLSelectElement:W.fb,SourceBuffer:W.av,SourceBufferList:W.fd,SpeechGrammar:W.aJ,SpeechGrammarList:W.fe,SpeechRecognitionResult:W.aK,Storage:W.fi,CSSStyleSheet:W.al,StyleSheet:W.al,HTMLTableCellElement:W.bl,HTMLTableDataCellElement:W.bl,HTMLTableHeaderCellElement:W.bl,HTMLTableElement:W.dr,HTMLTableRowElement:W.fm,HTMLTableSectionElement:W.fn,HTMLTemplateElement:W.cf,TextTrack:W.aw,TextTrackCue:W.ag,VTTCue:W.ag,TextTrackCueList:W.fp,TextTrackList:W.fq,TimeRanges:W.jv,Touch:W.ax,TouchEvent:W.bI,TouchList:W.fw,TrackDefaultList:W.jA,CompositionEvent:W.b2,FocusEvent:W.b2,TextEvent:W.b2,UIEvent:W.b2,URL:W.jL,VideoTrackList:W.fM,WheelEvent:W.bm,Window:W.cq,DOMWindow:W.cq,Attr:W.cr,CSSRuleList:W.fU,ClientRect:W.dH,DOMRect:W.dH,GamepadList:W.h7,NamedNodeMap:W.dN,MozNamedAttrMap:W.dN,SpeechRecognitionResultList:W.hr,StyleSheetList:W.hy,SVGLength:P.aV,SVGLengthList:P.eI,SVGNumber:P.b_,SVGNumberList:P.eY,SVGPointList:P.ja,SVGScriptElement:P.c9,SVGStringList:P.fk,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,SVGTransform:P.b0,SVGTransformList:P.fx,AudioBuffer:P.i3,AudioParamMap:P.em,AudioTrackList:P.en,AudioContext:P.b8,webkitAudioContext:P.b8,BaseAudioContext:P.b8,OfflineAudioContext:P.eZ,WebGL2RenderingContext:P.c8,SQLResultSetRowList:P.ff})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c5.$nativeSuperclassTag="ArrayBufferView"
H.dO.$nativeSuperclassTag="ArrayBufferView"
H.dP.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.dQ.$nativeSuperclassTag="ArrayBufferView"
H.dR.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
W.dU.$nativeSuperclassTag="EventTarget"
W.dV.$nativeSuperclassTag="EventTarget"
W.dX.$nativeSuperclassTag="EventTarget"
W.dY.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=V.qE
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
