(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}var z=function(){var s=function(){}
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
if(typeof n=='function')n.name=o}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){H.qw(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lw(this,a,b,c,true,false,e).prototype
return s}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var s=[]
for(var r=0;r<h.length;r++){var q=h[r]
if(typeof q=='string')q=a[q]
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
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var s=0;s<w.length;s++){if(w[s]==C)continue
if(w[s][a])return w[s][a]}}var C={},H={l4:function l4(){},
l6:function(a){return new H.eh(a)},
kG:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
o7:function(a,b,c,d){if(t.G.b(a))return new H.cv(a,b,c.H("@<0>").b2(d).H("cv<1,2>"))
return new H.aU(a,b,c.H("@<0>").b2(d).H("aU<1,2>"))},
il:function(){return new P.c6("No element")},
nZ:function(){return new P.c6("Too many elements")},
os:function(a,b){var s=J.aM(a)
if(typeof s!=="number")return s.a_()
H.eR(a,0,s-1,b)},
eR:function(a,b,c,d){if(c-b<=32)H.or(a,b,c,d)
else H.oq(a,b,c,d)},
or:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.b3(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a3()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
oq:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.a8(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.a8(a6+a7,2),d=e-h,c=e+h,b=J.b3(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.a3()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a3()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.a3()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a3()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.a3()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.a3()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.a3()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a3()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a3()
if(a4>0){s=a3
a3=a2
a2=s}b.m(a5,g,a)
b.m(a5,e,a1)
b.m(a5,f,a3)
b.m(a5,d,b.h(a5,a6))
b.m(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.I(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.ah()
if(n<0){if(p!==r){b.m(a5,p,b.h(a5,r))
b.m(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a3()
if(n>0){--q
continue}else{m=q-1
if(n<0){b.m(a5,p,b.h(a5,r))
l=r+1
b.m(a5,r,b.h(a5,q))
b.m(a5,q,o)
q=m
r=l
break}else{b.m(a5,p,b.h(a5,q))
b.m(a5,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=b.h(a5,p)
j=a8.$2(o,a0)
if(typeof j!=="number")return j.ah()
if(j<0){if(p!==r){b.m(a5,p,b.h(a5,r))
b.m(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.a3()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.a3()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.ah()
m=q-1
if(n<0){b.m(a5,p,b.h(a5,r))
l=r+1
b.m(a5,r,b.h(a5,q))
b.m(a5,q,o)
r=l}else{b.m(a5,p,b.h(a5,q))
b.m(a5,q,o)}q=m
break}}}}k=!1}a4=r-1
b.m(a5,a6,b.h(a5,a4))
b.m(a5,a4,a0)
a4=q+1
b.m(a5,a7,b.h(a5,a4))
b.m(a5,a4,a2)
H.eR(a5,a6,r-2,a8)
H.eR(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.I(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.I(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.m(a5,p,b.h(a5,r))
b.m(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.ah()
m=q-1
if(n<0){b.m(a5,p,b.h(a5,r))
l=r+1
b.m(a5,r,b.h(a5,q))
b.m(a5,q,o)
r=l}else{b.m(a5,p,b.h(a5,q))
b.m(a5,q,o)}q=m
break}}H.eR(a5,r,q,a8)}else H.eR(a5,r,q,a8)},
eh:function eh(a){this.a=a},
o:function o(a){this.a=a},
l:function l(){},
cJ:function cJ(){},
bd:function bd(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aU:function aU(a,b,c){this.a=a
this.b=b
this.$ti=c},
cv:function cv(a,b,c){this.a=a
this.b=b
this.$ti=c},
ek:function ek(a,b){this.a=null
this.b=a
this.c=b},
cN:function cN(a,b,c){this.a=a
this.b=b
this.$ti=c},
b1:function b1(a,b,c){this.a=a
this.b=b
this.$ti=c},
fw:function fw(a,b){this.a=a
this.b=b},
cy:function cy(){},
fp:function fp(){},
c8:function c8(){},
nT:function(){throw H.b(P.A("Cannot modify unmodifiable Map"))},
ne:function(a){var s,r=H.nd(a)
if(r!=null)return r
s="minified:"+a
return s},
n7:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
f:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.ao(a)
if(typeof s!="string")throw H.b(H.ay(a))
return s},
cV:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
mb:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.d(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.b(P.a3(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.D(q,o)|32)>r)return n}return parseInt(a,b)},
eI:function(a){return H.oa(a)},
oa:function(a){var s,r,q
if(a instanceof P.N)return H.al(H.bN(a),null)
if(J.dE(a)===C.V||t.ak.b(a)){s=C.v(a)
if(H.ma(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.ma(q))return q}}return H.al(H.bN(a),null)},
ma:function(a){var s=a!=="Object"&&a!==""
return s},
ob:function(){if(!!self.location)return self.location.href
return null},
m9:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
oj:function(a){var s,r,q,p=H.c([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){q=a[r]
if(!H.bM(q))throw H.b(H.ay(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aR(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.b(H.ay(q))}return H.m9(p)},
mc:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.bM(q))throw H.b(H.ay(q))
if(q<0)throw H.b(H.ay(q))
if(q>65535)return H.oj(a)}return H.m9(a)},
ok:function(a,b,c){var s,r,q,p
if(typeof c!=="number")return c.iw()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
if(q<c)p=q
else p=c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
as:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.aR(s,10))>>>0,56320|s&1023)}}throw H.b(P.a3(a,0,1114111,null,null))},
c3:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oi:function(a){var s=H.c3(a).getFullYear()+0
return s},
og:function(a){var s=H.c3(a).getMonth()+1
return s},
oc:function(a){var s=H.c3(a).getDate()+0
return s},
od:function(a){var s=H.c3(a).getHours()+0
return s},
of:function(a){var s=H.c3(a).getMinutes()+0
return s},
oh:function(a){var s=H.c3(a).getSeconds()+0
return s},
oe:function(a){var s=H.c3(a).getMilliseconds()+0
return s},
u:function(a){throw H.b(H.ay(a))},
d:function(a,b){if(a==null)J.aM(a)
throw H.b(H.cj(a,b))},
cj:function(a,b){var s,r,q="index"
if(!H.bM(b))return new P.ag(!0,b,q,null)
s=J.aM(a)
if(!(b<0)){if(typeof s!=="number")return H.u(s)
r=b>=s}else r=!0
if(r)return P.O(b,a,q,null,s)
return P.eJ(b,q)},
qe:function(a,b,c){if(a>c)return P.a3(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a3(b,a,c,"end",null)
return new P.ag(!0,b,"end",null)},
ay:function(a){return new P.ag(!0,a,null,null)},
q8:function(a){if(typeof a!="number")throw H.b(H.ay(a))
return a},
b:function(a){var s,r
if(a==null)a=new P.ex()
s=new Error()
s.dartException=a
r=H.qx
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qx:function(){return J.ao(this.dartException)},
r:function(a){throw H.b(a)},
q:function(a){throw H.b(P.aO(a))},
b_:function(a){var s,r,q,p,o,n
a=H.nb(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.ju(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
jv:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mp:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
m4:function(a,b){return new H.ew(a,b==null?null:b.method)},
l5:function(a,b){var s=b==null,r=s?null:b.method
return new H.ef(a,r,s?null:b.receiver)},
am:function(a){if(a==null)return new H.iV(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bO(a,a.dartException)
return H.q4(a)},
bO:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
q4:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aR(r,16)&8191)===10)switch(q){case 438:return H.bO(a,H.l5(H.f(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bO(a,H.m4(H.f(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.nh()
o=$.ni()
n=$.nj()
m=$.nk()
l=$.nn()
k=$.no()
j=$.nm()
$.nl()
i=$.nq()
h=$.np()
g=p.aq(s)
if(g!=null)return H.bO(a,H.l5(s,g))
else{g=o.aq(s)
if(g!=null){g.method="call"
return H.bO(a,H.l5(s,g))}else{g=n.aq(s)
if(g==null){g=m.aq(s)
if(g==null){g=l.aq(s)
if(g==null){g=k.aq(s)
if(g==null){g=j.aq(s)
if(g==null){g=m.aq(s)
if(g==null){g=i.aq(s)
if(g==null){g=h.aq(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bO(a,H.m4(s,g))}}return H.bO(a,new H.fo(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cW()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bO(a,new P.ag(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cW()
return a},
ly:function(a){var s
if(a==null)return new H.hc(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.hc(a)},
qg:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
qo:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.v("Unsupported number of arguments for wrapped closure"))},
ci:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qo)
a.$identity=s
return s},
nS:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.eY().constructor.prototype):Object.create(new H.bS(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aN
if(typeof r!=="number")return r.B()
$.aN=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.lO(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.nO(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lO(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
nO:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.n5,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
s=c?H.nM:H.nL
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.b("Error in functionType of tearoff")},
nP:function(a,b,c,d){var s=H.lN
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lO:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.nR(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nP(r,!p,s,b)
if(r===0){p=$.aN
if(typeof p!=="number")return p.B()
$.aN=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.f(H.kU())+";return "+n+"."+H.f(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aN
if(typeof p!=="number")return p.B()
$.aN=p+1
m+=p
return new Function("return function("+m+"){return this."+H.f(H.kU())+"."+H.f(s)+"("+m+");}")()},
nQ:function(a,b,c,d){var s=H.lN,r=H.nN
switch(b?-1:a){case 0:throw H.b(new H.eN("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
nR:function(a,b){var s,r,q,p,o,n,m=H.kU(),l=$.lL
if(l==null)l=$.lL=H.lK("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nQ(r,!p,s,b)
if(r===1){p="return function(){return this."+H.f(m)+"."+H.f(s)+"(this."+l+");"
o=$.aN
if(typeof o!=="number")return o.B()
$.aN=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.f(m)+"."+H.f(s)+"(this."+l+", "+n+");"
o=$.aN
if(typeof o!=="number")return o.B()
$.aN=o+1
return new Function(p+o+"}")()},
lw:function(a,b,c,d,e,f,g){return H.nS(a,b,c,d,!!e,!!f,g)},
nL:function(a,b){return H.hq(v.typeUniverse,H.bN(a.a),b)},
nM:function(a,b){return H.hq(v.typeUniverse,H.bN(a.c),b)},
lN:function(a){return a.a},
nN:function(a){return a.c},
kU:function(){var s=$.lM
return s==null?$.lM=H.lK("self"):s},
lK:function(a){var s,r,q,p=new H.bS("self","target","receiver","name"),o=J.l3(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.b(P.bQ("Field name "+a+" not found."))},
qw:function(a){throw H.b(new P.dY(a))},
qi:function(a){return v.getIsolateTag(a)},
rF:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qq:function(a){var s,r,q,p,o,n=$.n4.$1(a),m=$.kF[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kK[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.n1.$2(a,n)
if(q!=null){m=$.kF[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kK[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kO(s)
$.kF[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kK[n]=s
return s}if(p==="-"){o=H.kO(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.n9(a,s)
if(p==="*")throw H.b(P.jE(n))
if(v.leafTags[n]===true){o=H.kO(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.n9(a,s)},
n9:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lA(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kO:function(a){return J.lA(a,!1,null,!!a.$iz)},
qr:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kO(s)
else return J.lA(s,c,null,null)},
qm:function(){if(!0===$.lz)return
$.lz=!0
H.qn()},
qn:function(){var s,r,q,p,o,n,m,l
$.kF=Object.create(null)
$.kK=Object.create(null)
H.ql()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.na.$1(o)
if(n!=null){m=H.qr(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
ql:function(){var s,r,q,p,o,n,m=C.K()
m=H.ch(C.L,H.ch(C.M,H.ch(C.w,H.ch(C.w,H.ch(C.N,H.ch(C.O,H.ch(C.P(C.v),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.n4=new H.kH(p)
$.n1=new H.kI(o)
$.na=new H.kJ(n)},
ch:function(a,b){return a(b)||b},
o2:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.b(P.a2("Illegal RegExp pattern ("+String(n)+")",a,null))},
nc:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qf:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nb:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lC:function(a,b,c){var s=H.qu(a,b,c)
return s},
qu:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nb(b),'g'),H.qf(c))},
cp:function cp(){},
cq:function cq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ju:function ju(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ew:function ew(a,b){this.a=a
this.b=b},
ef:function ef(a,b,c){this.a=a
this.b=b
this.c=c},
fo:function fo(a){this.a=a},
iV:function iV(a){this.a=a},
hc:function hc(a){this.a=a
this.b=null},
bv:function bv(){},
f4:function f4(){},
eY:function eY(){},
bS:function bS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eN:function eN(a){this.a=a},
C:function C(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
io:function io(a){this.a=a},
is:function is(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cG:function cG(a,b){this.a=a
this.$ti=b},
ej:function ej(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
ee:function ee(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cf:function(a){return a},
b2:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.cj(b,a))},
pi:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.b(H.qe(a,b,c))
return b},
cQ:function cQ(){},
W:function W(){},
c0:function c0(){},
bF:function bF(){},
cR:function cR(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
cS:function cS(){},
c1:function c1(){},
dg:function dg(){},
dh:function dh(){},
di:function di(){},
dj:function dj(){},
oo:function(a,b){var s=b.c
return s==null?b.c=H.lk(a,b.z,!0):s},
mi:function(a,b){var s=b.c
return s==null?b.c=H.dv(a,"lW",[b.z]):s},
mj:function(a){var s=a.y
if(s===6||s===7||s===8)return H.mj(a.z)
return s===11||s===12},
on:function(a){return a.cy},
lx:function(a){return H.ll(v.typeUniverse,a,!1)},
bn:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bn(a,s,a0,a1)
if(r===s)return b
return H.mN(a,r,!0)
case 7:s=b.z
r=H.bn(a,s,a0,a1)
if(r===s)return b
return H.lk(a,r,!0)
case 8:s=b.z
r=H.bn(a,s,a0,a1)
if(r===s)return b
return H.mM(a,r,!0)
case 9:q=b.Q
p=H.dD(a,q,a0,a1)
if(p===q)return b
return H.dv(a,b.z,p)
case 10:o=b.z
n=H.bn(a,o,a0,a1)
m=b.Q
l=H.dD(a,m,a0,a1)
if(n===o&&l===m)return b
return H.li(a,n,l)
case 11:k=b.z
j=H.bn(a,k,a0,a1)
i=b.Q
h=H.q1(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mL(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dD(a,g,a0,a1)
o=b.z
n=H.bn(a,o,a0,a1)
if(f===g&&n===o)return b
return H.lj(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.b(P.hJ("Attempted to substitute unexpected RTI kind "+c))}},
dD:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bn(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
q2:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bn(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
q1:function(a,b,c,d){var s,r=b.a,q=H.dD(a,r,c,d),p=b.b,o=H.dD(a,p,c,d),n=b.c,m=H.q2(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fP()
s.a=q
s.b=o
s.c=m
return s},
c:function(a,b){a[v.arrayRti]=b
return a},
q9:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.n5(s)
return a.$S()}return null},
n6:function(a,b){var s
if(H.mj(b))if(a instanceof H.bv){s=H.q9(a)
if(s!=null)return s}return H.bN(a)},
bN:function(a){var s
if(a instanceof P.N){s=a.$ti
return s!=null?s:H.ls(a)}if(Array.isArray(a))return H.lq(a)
return H.ls(J.dE(a))},
lq:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
dA:function(a){var s=a.$ti
return s!=null?s:H.ls(a)},
ls:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pp(a,s)},
pp:function(a,b){var s=a instanceof H.bv?a.__proto__.__proto__.constructor:b,r=H.p0(v.typeUniverse,s.name)
b.$ccache=r
return r},
n5:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.ll(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
po:function(a){var s,r,q=this,p=t.K
if(q===p)return H.dz(q,a,H.pt)
if(!H.b4(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.dz(q,a,H.pw)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.bM
else if(s===t.gR||s===t.H)r=H.ps
else if(s===t.N)r=H.pu
else r=s===t.cJ?H.lt:null
if(r!=null)return H.dz(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.qp)){q.r="$i"+p
return H.dz(q,a,H.pv)}}else if(p===7)return H.dz(q,a,H.pm)
return H.dz(q,a,H.pk)},
dz:function(a,b,c){a.b=c
return a.b(b)},
pn:function(a){var s,r,q=this
if(!H.b4(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.ph
else if(q===t.K)r=H.pg
else r=H.pl
q.a=r
return q.a(a)},
pV:function(a){var s,r=a.y
if(!H.b4(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.F||r===7||a===t.P||a===t.T},
pk:function(a){var s=this
if(a==null)return H.pV(s)
return H.Z(v.typeUniverse,H.n6(a,s),null,s,null)},
pm:function(a){if(a==null)return!0
return this.z.b(a)},
pv:function(a){var s=this,r=s.r
if(a instanceof P.N)return!!a[r]
return!!J.dE(a)[r]},
rD:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mW(a,s)},
pl:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mW(a,s)},
mW:function(a,b){throw H.b(H.oR(H.mD(a,H.n6(a,b),H.al(b,null))))},
mD:function(a,b,c){var s=P.i8(a),r=H.al(b==null?H.bN(a):b,null)
return s+": type '"+H.f(r)+"' is not a subtype of type '"+H.f(c)+"'"},
oR:function(a){return new H.dt("TypeError: "+a)},
a9:function(a,b){return new H.dt("TypeError: "+H.mD(a,null,b))},
pt:function(a){return a!=null},
pg:function(a){return a},
pw:function(a){return!0},
ph:function(a){return a},
lt:function(a){return!0===a||!1===a},
rp:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.b(H.a9(a,"bool"))},
rr:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a9(a,"bool"))},
rq:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a9(a,"bool?"))},
rs:function(a){if(typeof a=="number")return a
throw H.b(H.a9(a,"double"))},
ru:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a9(a,"double"))},
rt:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a9(a,"double?"))},
bM:function(a){return typeof a=="number"&&Math.floor(a)===a},
rv:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.b(H.a9(a,"int"))},
rx:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a9(a,"int"))},
rw:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a9(a,"int?"))},
ps:function(a){return typeof a=="number"},
ry:function(a){if(typeof a=="number")return a
throw H.b(H.a9(a,"num"))},
rA:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a9(a,"num"))},
rz:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a9(a,"num?"))},
pu:function(a){return typeof a=="string"},
rB:function(a){if(typeof a=="string")return a
throw H.b(H.a9(a,"String"))},
lr:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a9(a,"String"))},
rC:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a9(a,"String?"))},
pY:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.a.B(r,H.al(a[q],b))
return s},
mX:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=H.c([],t.s)
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.W,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.d(a6,i)
l=C.a.B(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.a.B(" extends ",H.al(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.al(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.a.B(a3,H.al(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.a.B(a3,H.al(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.lE(H.al(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.f(a1)},
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
return J.lE(q===11||q===12?C.a.B("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.f(H.al(a.z,b))+">"
if(l===9){p=H.q3(a.z)
o=a.Q
return o.length!==0?p+("<"+H.pY(o,b)+">"):p}if(l===11)return H.mX(a,b,null)
if(l===12)return H.mX(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
q3:function(a){var s,r=H.nd(a)
if(r!=null)return r
s="minified:"+a
return s},
mO:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
p0:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.ll(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dw(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dv(a,b,q)
n[b]=o
return o}else return m},
oZ:function(a,b){return H.mV(a.tR,b)},
oY:function(a,b){return H.mV(a.eT,b)},
ll:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mJ(H.mH(a,null,b,c))
r.set(b,s)
return s},
hq:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mJ(H.mH(a,b,c,!0))
q.set(c,r)
return r},
p_:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.li(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bm:function(a,b){b.a=H.pn
b.b=H.po
return b},
dw:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.at(null,null)
s.y=b
s.cy=c
r=H.bm(a,s)
a.eC.set(c,r)
return r},
mN:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.oW(a,b,r,c)
a.eC.set(r,s)
return s},
oW:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b4(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.at(null,null)
q.y=6
q.z=b
q.cy=c
return H.bm(a,q)},
lk:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.oV(a,b,r,c)
a.eC.set(r,s)
return s},
oV:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b4(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.kL(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.F)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.kL(q.z))return q
else return H.oo(a,b)}}p=new H.at(null,null)
p.y=7
p.z=b
p.cy=c
return H.bm(a,p)},
mM:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.oT(a,b,r,c)
a.eC.set(r,s)
return s},
oT:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b4(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dv(a,"lW",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.at(null,null)
q.y=8
q.z=b
q.cy=c
return H.bm(a,q)},
oX:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.at(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bm(a,s)
a.eC.set(q,r)
return r},
hp:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
oS:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dv:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hp(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.at(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bm(a,r)
a.eC.set(p,q)
return q},
li:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hp(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.at(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bm(a,o)
a.eC.set(q,n)
return n},
mL:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hp(m)
if(j>0){s=l>0?",":""
r=H.hp(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.oS(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.at(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bm(a,o)
a.eC.set(q,r)
return r},
lj:function(a,b,c,d){var s,r=b.cy+("<"+H.hp(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.oU(a,b,c,r,d)
a.eC.set(r,s)
return s},
oU:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bn(a,b,r,0)
m=H.dD(a,c,r,0)
return H.lj(a,n,m,c!==m)}}l=new H.at(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bm(a,l)},
mH:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mJ:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.oL(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mI(a,r,g,f,!1)
else if(q===46)r=H.mI(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.bl(a.u,a.e,f.pop()))
break
case 94:f.push(H.oX(a.u,f.pop()))
break
case 35:f.push(H.dw(a.u,5,"#"))
break
case 64:f.push(H.dw(a.u,2,"@"))
break
case 126:f.push(H.dw(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.lh(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.dv(p,n,o))
else{m=H.bl(p,a.e,n)
switch(m.y){case 11:f.push(H.lj(p,m,o,a.n))
break
default:f.push(H.li(p,m,o))
break}}break
case 38:H.oM(a,f)
break
case 42:l=a.u
f.push(H.mN(l,H.bl(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.lk(l,H.bl(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.mM(l,H.bl(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.fP()
j=p.sEA
i=p.sEA
n=f.pop()
if(typeof n=="number")switch(n){case-1:j=f.pop()
break
case-2:i=f.pop()
break
default:f.push(n)
break}else f.push(n)
o=f.splice(a.p)
H.lh(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.mL(p,H.bl(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.lh(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.oO(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.bl(a.u,a.e,h)},
oL:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mI:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.mO(s,o.z)[p]
if(n==null)H.r('No "'+p+'" in "'+H.on(o)+'"')
d.push(H.hq(s,o,n))}else d.push(p)
return m},
oM:function(a,b){var s=b.pop()
if(0===s){b.push(H.dw(a.u,1,"0&"))
return}if(1===s){b.push(H.dw(a.u,4,"1&"))
return}throw H.b(P.hJ("Unexpected extended operation "+H.f(s)))},
bl:function(a,b,c){if(typeof c=="string")return H.dv(a,c,a.sEA)
else if(typeof c=="number")return H.oN(a,b,c)
else return c},
lh:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bl(a,b,c[s])},
oO:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bl(a,b,c[s])},
oN:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.b(P.hJ("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.b(P.hJ("Bad index "+c+" for "+b.i(0)))},
Z:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.b4(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.b4(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.Z(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.Z(a,b.z,c,d,e)
if(p===6){s=d.z
return H.Z(a,b,c,s,e)}if(r===8){if(!H.Z(a,b.z,c,d,e))return!1
return H.Z(a,H.mi(a,b),c,d,e)}if(r===7){s=H.Z(a,b.z,c,d,e)
return s}if(p===8){if(H.Z(a,b,c,d.z,e))return!0
return H.Z(a,b,c,H.mi(a,d),e)}if(p===7){s=H.Z(a,b,c,d.z,e)
return s}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.Z)return!0
if(p===12){if(b===t.g)return!0
if(r!==12)return!1
o=b.Q
n=d.Q
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!H.Z(a,k,c,j,e)||!H.Z(a,j,e,k,c))return!1}return H.mY(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.mY(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.pr(a,b,c,d,e)}return!1},
mY:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.Z(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.Z(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.Z(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.Z(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.Z(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
pr:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.Z(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mO(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.Z(a,H.hq(a,b,l[p]),c,r[p],e))return!1
return!0},
kL:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b4(a))if(r!==7)if(!(r===6&&H.kL(a.z)))s=r===8&&H.kL(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qp:function(a){var s
if(!H.b4(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
b4:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.W},
mV:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
at:function at(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fP:function fP(){this.c=this.b=this.a=null},
fK:function fK(){},
dt:function dt(a){this.a=a},
nd:function(a){return v.mangledGlobalNames[a]},
qs:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lA:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hE:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.lz==null){H.qm()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.b(P.jE("Return interceptor for "+H.f(s(a,o))))}q=a.constructor
p=q==null?null:q[J.lY()]
if(p!=null)return p
p=H.qq(a)
if(p!=null)return p
if(typeof a=="function")return C.X
s=Object.getPrototypeOf(a)
if(s==null)return C.D
if(s===Object.prototype)return C.D
if(typeof q=="function"){Object.defineProperty(q,J.lY(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
lY:function(){var s=$.mF
return s==null?$.mF=v.getIsolateTag("_$dart_js"):s},
o_:function(a,b){if(!H.bM(a))throw H.b(P.lI(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.b(P.a3(a,0,4294967295,"length",null))
return J.o0(new Array(a),b)},
l2:function(a,b){if(!H.bM(a)||a<0)throw H.b(P.bQ("Length must be a non-negative integer: "+H.f(a)))
return H.c(new Array(a),b.H("w<0>"))},
o0:function(a,b){return J.l3(H.c(a,b.H("w<0>")))},
l3:function(a){a.fixed$length=Array
return a},
o1:function(a,b){return J.dJ(a,b)},
dE:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cD.prototype
return J.cC.prototype}if(typeof a=="string")return J.aS.prototype
if(a==null)return J.cE.prototype
if(typeof a=="boolean")return J.ed.prototype
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.N)return a
return J.hE(a)},
qh:function(a){if(typeof a=="number")return J.bC.prototype
if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.N)return a
return J.hE(a)},
b3:function(a){if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.N)return a
return J.hE(a)},
hD:function(a){if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.N)return a
return J.hE(a)},
n3:function(a){if(typeof a=="number")return J.bC.prototype
if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bJ.prototype
return a},
dF:function(a){if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bJ.prototype
return a},
aL:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.N)return a
return J.hE(a)},
lE:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.qh(a).B(a,b)},
I:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dE(a).u(a,b)},
lF:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.n3(a).v(a,b)},
cm:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n7(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b3(a).h(a,b)},
kR:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.n7(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.hD(a).m(a,b,c)},
nA:function(a,b){return J.dF(a).D(a,b)},
nB:function(a,b,c){return J.aL(a).h0(a,b,c)},
nC:function(a,b,c,d){return J.aL(a).hn(a,b,c,d)},
nD:function(a,b){return J.dF(a).V(a,b)},
dJ:function(a,b){return J.n3(a).aV(a,b)},
kS:function(a,b){return J.b3(a).F(a,b)},
hH:function(a,b){return J.hD(a).G(a,b)},
nE:function(a,b,c,d){return J.aL(a).hK(a,b,c,d)},
kT:function(a,b){return J.hD(a).A(a,b)},
nF:function(a){return J.aL(a).ghs(a)},
dK:function(a){return J.aL(a).gdC(a)},
nG:function(a){return J.aL(a).gdG(a)},
af:function(a){return J.dE(a).gP(a)},
b6:function(a){return J.hD(a).gM(a)},
aM:function(a){return J.b3(a).gl(a)},
lG:function(a){return J.hD(a).ig(a)},
nH:function(a,b){return J.aL(a).ij(a,b)},
nI:function(a,b,c){return J.dF(a).q(a,b,c)},
nJ:function(a){return J.dF(a).is(a)},
ao:function(a){return J.dE(a).i(a)},
a:function a(){},
ed:function ed(){},
cE:function cE(){},
bc:function bc(){},
eC:function eC(){},
bJ:function bJ(){},
aE:function aE(){},
w:function w(a){this.$ti=a},
im:function im(a){this.$ti=a},
a5:function a5(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bC:function bC(){},
cD:function cD(){},
cC:function cC(){},
aS:function aS(){}},P={
oB:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.q5()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.ci(new P.k5(q),1)).observe(s,{childList:true})
return new P.k4(q,s,r)}else if(self.setImmediate!=null)return P.q6()
return P.q7()},
oC:function(a){self.scheduleImmediate(H.ci(new P.k6(a),0))},
oD:function(a){self.setImmediate(H.ci(new P.k7(a),0))},
oE:function(a){P.lc(C.n,a)},
lc:function(a,b){var s=C.c.a8(a.a,1000)
return P.oP(s<0?0:s,b)},
mo:function(a,b){var s=C.c.a8(a.a,1000)
return P.oQ(s<0?0:s,b)},
oP:function(a,b){var s=new P.ds()
s.eB(a,b)
return s},
oQ:function(a,b){var s=new P.ds()
s.eC(a,b)
return s},
rn:function(a){return new P.cd(a,1)},
oH:function(){return C.a5},
oI:function(a){return new P.cd(a,3)},
py:function(a,b){return new P.dp(a,b.H("dp<0>"))},
pU:function(){var s,r
for(s=$.cg;s!=null;s=$.cg){$.dC=null
r=s.b
$.cg=r
if(r==null)$.dB=null
s.a.$0()}},
q0:function(){$.lu=!0
try{P.pU()}finally{$.dC=null
$.lu=!1
if($.cg!=null)$.lD().$1(P.n2())}},
pZ:function(a){var s=new P.fx(a),r=$.dB
if(r==null){$.cg=$.dB=s
if(!$.lu)$.lD().$1(P.n2())}else $.dB=r.b=s},
q_:function(a){var s,r,q,p=$.cg
if(p==null){P.pZ(a)
$.dC=$.dB
return}s=new P.fx(a)
r=$.dC
if(r==null){s.b=p
$.cg=$.dC=s}else{q=r.b
s.b=q
$.dC=r.b=s
if(q==null)$.dB=s}},
mn:function(a,b){var s=$.aK
if(s===C.f)return P.lc(a,b)
return P.lc(a,s.ht(b))},
ov:function(a,b){var s=$.aK
if(s===C.f)return P.mo(a,b)
return P.mo(a,s.dw(b,t.aF))},
mZ:function(a,b,c,d,e){P.q_(new P.kC(d,e))},
pW:function(a,b,c,d){var s,r=$.aK
if(r===c)return d.$0()
$.aK=c
s=r
try{r=d.$0()
return r}finally{$.aK=s}},
pX:function(a,b,c,d,e){var s,r=$.aK
if(r===c)return d.$1(e)
$.aK=c
s=r
try{r=d.$1(e)
return r}finally{$.aK=s}},
k5:function k5(a){this.a=a},
k4:function k4(a,b,c){this.a=a
this.b=b
this.c=c},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
ds:function ds(){this.c=0},
ko:function ko(a,b){this.a=a
this.b=b},
kn:function kn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cd:function cd(a,b){this.a=a
this.b=b},
bK:function bK(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dp:function dp(a,b){this.a=a
this.$ti=b},
fx:function fx(a){this.a=a
this.b=null},
cX:function cX(){},
f_:function f_(){},
cZ:function cZ(){},
kv:function kv(){},
kC:function kC(a,b){this.a=a
this.b=b},
kc:function kc(){},
kd:function kd(a,b){this.a=a
this.b=b},
ke:function ke(a,b,c){this.a=a
this.b=b
this.c=c},
o3:function(a,b){return new H.C(a.H("@<0>").b2(b).H("C<1,2>"))},
o4:function(a,b,c){return H.qg(a,new H.C(b.H("@<0>").b2(c).H("C<1,2>")))},
l7:function(a,b){return new H.C(a.H("@<0>").b2(b).H("C<1,2>"))},
cH:function(a){return new P.dc(a.H("dc<0>"))},
lg:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oK:function(a,b){var s=new P.dd(a,b)
s.c=a.e
return s},
nY:function(a,b,c){var s,r
if(P.lv(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.c([],t.s)
$.ae.push(a)
try{P.px(a,s)}finally{if(0>=$.ae.length)return H.d($.ae,-1)
$.ae.pop()}r=P.ml(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
l1:function(a,b,c){var s,r
if(P.lv(a))return b+"..."+c
s=new P.R(b)
$.ae.push(a)
try{r=s
r.a=P.ml(r.a,a,", ")}finally{if(0>=$.ae.length)return H.d($.ae,-1)
$.ae.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lv:function(a){var s,r
for(s=$.ae.length,r=0;r<s;++r)if(a===$.ae[r])return!0
return!1},
px:function(a,b){var s,r,q,p,o,n,m,l=a.gM(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.t())return
s=H.f(l.gw(l))
b.push(s)
k+=s.length+2;++j}if(!l.t()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gw(l);++j
if(!l.t()){if(j<=4){b.push(H.f(p))
return}r=H.f(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gw(l);++j
for(;l.t();p=o,o=n){n=l.gw(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.f(p)
r=H.f(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
o5:function(a,b,c){var s=P.o3(b,c)
a.A(0,new P.it(s,b,c))
return s},
lZ:function(a,b){var s,r,q=P.cH(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)q.n(0,b.a(a[r]))
return q},
l8:function(a){var s,r={}
if(P.lv(a))return"{...}"
s=new P.R("")
try{$.ae.push(a)
s.a+="{"
r.a=!0
J.kT(a,new P.iy(r,s))
s.a+="}"}finally{if(0>=$.ae.length)return H.d($.ae,-1)
$.ae.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dc:function dc(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
kb:function kb(a){this.a=a
this.c=this.b=null},
dd:function dd(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cB:function cB(){},
it:function it(a,b,c){this.a=a
this.b=b
this.c=c},
cI:function cI(){},
i:function i(){},
cL:function cL(){},
iy:function iy(a,b){this.a=a
this.b=b},
U:function U(){},
hr:function hr(){},
cM:function cM(){},
c9:function c9(a,b){this.a=a
this.$ti=b},
dk:function dk(){},
de:function de(){},
dx:function dx(){},
oy:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.oz(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
oz:function(a,b,c,d){var s=a?$.ns():$.nr()
if(s==null)return null
if(0===c&&d===b.length)return P.mu(s,b)
return P.mu(s,b.subarray(c,P.bg(c,d,b.length)))},
mu:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.am(r)}return null},
lJ:function(a,b,c,d,e,f){if(C.c.bh(f,4)!==0)throw H.b(P.a2("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.b(P.a2("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.b(P.a2("Invalid base64 padding, more than two '=' characters",a,b))},
pf:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
pe:function(a,b,c){var s,r,q,p,o,n
if(typeof c!=="number")return c.a_()
s=c-b
r=new Uint8Array(s)
for(q=r.length,p=J.b3(a),o=0;o<s;++o){n=p.h(a,b+o)
if(typeof n!=="number")return n.an()
if((n&4294967040)>>>0!==0)n=255
if(o>=q)return H.d(r,o)
r[o]=n}return r},
jN:function jN(){},
jO:function jO(){},
hO:function hO(){},
hP:function hP(){},
dV:function dV(){},
dX:function dX(){},
i5:function i5(){},
ij:function ij(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
ii:function ii(a){this.a=a},
jL:function jL(){},
jP:function jP(){},
kt:function kt(a){this.b=0
this.c=a},
jM:function jM(a){this.a=a},
ks:function ks(a){this.a=a
this.b=16
this.c=0},
hF:function(a,b){var s=H.mb(a,b)
if(s!=null)return s
throw H.b(P.a2(a,null,null))},
nX:function(a){if(a instanceof H.bv)return a.i(0)
return"Instance of '"+H.f(H.eI(a))+"'"},
iu:function(a,b,c,d){var s,r=c?J.l2(a,d):J.o_(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
iv:function(a,b,c){var s,r=H.c([],c.H("w<0>"))
for(s=J.b6(a);s.t();)r.push(s.gw(s))
if(b)return r
return J.l3(r)},
o6:function(a,b,c){var s,r,q=J.l2(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
f1:function(a,b,c){var s,r,q
if(Array.isArray(a)){s=a
r=s.length
c=P.bg(b,c,r)
if(b<=0){if(typeof c!=="number")return c.ah()
q=c<r}else q=!0
return H.mc(q?s.slice(b,c):s)}if(t.bm.b(a))return H.ok(a,b,P.bg(b,c,a.length))
return P.ot(a,b,c)},
ot:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.b(P.a3(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.b(P.a3(c,b,a.length,o,o))
r=J.b6(a)
for(q=0;q<b;++q)if(!r.t())throw H.b(P.a3(b,0,q,o,o))
p=[]
if(s)for(;r.t();)p.push(r.gw(r))
else for(q=b;q<c;++q){if(!r.t())throw H.b(P.a3(c,b,q,o,o))
p.push(r.gw(r))}return H.mc(p)},
ol:function(a){return new H.ee(a,H.o2(a,!1,!0,!1,!1,!1))},
ml:function(a,b,c){var s=J.b6(b)
if(!s.t())return a
if(c.length===0){do a+=H.f(s.gw(s))
while(s.t())}else{a+=H.f(s.gw(s))
for(;s.t();)a=a+c+H.f(s.gw(s))}return a},
mr:function(){var s=H.ob()
if(s!=null)return P.ox(s)
throw H.b(P.A("'Uri.base' is not supported"))},
kr:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.ny().b
if(typeof b!="string")H.r(H.ay(b))
s=s.test(b)}else s=!1
if(s)return b
r=c.ghJ().c9(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.as(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
nU:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
nV:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
e_:function(a){if(a>=10)return""+a
return"0"+a},
lR:function(a){return new P.bx(1000*a)},
i8:function(a){if(typeof a=="number"||H.lt(a)||null==a)return J.ao(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nX(a)},
hJ:function(a){return new P.dN(a)},
bQ:function(a){return new P.ag(!1,null,null,a)},
lI:function(a,b,c){return new P.ag(!0,a,b,c)},
nK:function(a,b){if(a==null)throw H.b(new P.ag(!1,null,b,"Must not be null"))
return a},
md:function(a){var s=null
return new P.c4(s,s,!1,s,s,a)},
eJ:function(a,b){return new P.c4(null,null,!0,a,b,"Value not in range")},
a3:function(a,b,c,d,e){return new P.c4(b,c,!0,a,d,"Invalid value")},
bg:function(a,b,c){var s
if(0<=a){if(typeof c!=="number")return H.u(c)
s=a>c}else s=!0
if(s)throw H.b(P.a3(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.u(c)
s=b>c}else s=!0
if(s)throw H.b(P.a3(b,a,c,"end",null))
return b}return c},
me:function(a,b){if(a<0)throw H.b(P.a3(a,0,null,b,null))
return a},
O:function(a,b,c,d,e){var s=e==null?J.aM(b):e
return new P.eb(s,!0,a,c,"Index out of range")},
A:function(a){return new P.fq(a)},
jE:function(a){return new P.fn(a)},
la:function(a){return new P.c6(a)},
aO:function(a){return new P.dW(a)},
v:function(a){return new P.fM(a)},
a2:function(a,b,c){return new P.ie(a,b,c)},
lB:function(a){H.qs(a)},
ox:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.D(a5,4)^58)*3|C.a.D(a5,0)^100|C.a.D(a5,1)^97|C.a.D(a5,2)^116|C.a.D(a5,3)^97)>>>0
if(s===0)return P.mq(a4<a4?C.a.q(a5,0,a4):a5,5,a3).gec()
else if(s===32)return P.mq(C.a.q(a5,5,a4),0,a3).gec()}r=P.iu(8,0,!1,t.S)
q=r.length
if(0>=q)return H.d(r,0)
r[0]=0
if(1>=q)return H.d(r,1)
r[1]=-1
if(2>=q)return H.d(r,2)
r[2]=-1
if(7>=q)return H.d(r,7)
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.n_(a5,0,a4,0,r)>=14){if(7>=r.length)return H.d(r,7)
r[7]=a4}if(1>=r.length)return H.d(r,1)
p=r[1]
if(p>=0)if(P.n_(a5,0,p,20,r)===20){if(7>=r.length)return H.d(r,7)
r[7]=p}q=r.length
if(2>=q)return H.d(r,2)
o=r[2]+1
if(3>=q)return H.d(r,3)
n=r[3]
if(4>=q)return H.d(r,4)
m=r[4]
if(5>=q)return H.d(r,5)
l=r[5]
if(6>=q)return H.d(r,6)
k=r[6]
if(k<l)l=k
if(m<o)m=l
else if(m<=p)m=p+1
if(n<o)n=m
if(7>=q)return H.d(r,7)
j=r[7]<0
if(j)if(o>p+3){i=a3
j=!1}else{q=n>0
if(q&&n+1===m){i=a3
j=!1}else{if(!(l<a4&&l===m+2&&C.a.ad(a5,"..",m)))h=l>m+2&&C.a.ad(a5,"/..",l-3)
else h=!0
if(h){i=a3
j=!1}else{if(p===4)if(C.a.ad(a5,"file",0)){if(o<=0){if(!C.a.ad(a5,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+C.a.q(a5,m,a4)
p-=0
q=s-0
l+=q
k+=q
a4=a5.length
o=7
n=7
m=7}else if(m===l){++k
f=l+1
a5=C.a.aW(a5,m,l,"/");++a4
l=f}i="file"}else if(C.a.ad(a5,"http",0)){if(q&&n+3===m&&C.a.ad(a5,"80",n+1)){k-=3
e=m-3
l-=3
a5=C.a.aW(a5,n,m,"")
a4-=3
m=e}i="http"}else i=a3
else if(p===5&&C.a.ad(a5,"https",0)){if(q&&n+4===m&&C.a.ad(a5,"443",n+1)){k-=4
e=m-4
l-=4
a5=C.a.aW(a5,n,m,"")
a4-=3
m=e}i="https"}else i=a3
j=!0}}}else i=a3
if(j){if(a4<a5.length){a5=C.a.q(a5,0,a4)
p-=0
o-=0
n-=0
m-=0
l-=0
k-=0}return new P.h6(a5,p,o,n,m,l,k,i)}if(i==null)if(p>0)i=P.p8(a5,0,p)
else{if(p===0)P.ce(a5,0,"Invalid empty scheme")
i=""}if(o>0){d=p+3
c=d<o?P.p9(a5,d,o-1):""
b=P.p5(a5,o,n,!1)
q=n+1
if(q<m){a=H.mb(C.a.q(a5,q,m),a3)
a0=P.p7(a==null?H.r(P.a2("Invalid port",a5,q)):a,i)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.p6(a5,m,l,a3,i,b!=null)
a2=l<k?P.ln(a5,l+1,k,a3):a3
return new P.bL(i,c,b,a0,a1,a2,k<a4?P.p4(a5,k+1,a4):a3)},
mt:function(a){var s=t.N
return C.b.hP(H.c(a.split("&"),t.s),P.l7(s,s),new P.jJ(C.e))},
ow:function(a,b,c){var s,r,q,p,o,n,m,l="IPv4 address should contain exactly 4 parts",k="each part must be in the range 0..255",j=new P.jG(a),i=new Uint8Array(4)
for(s=i.length,r=b,q=r,p=0;r<c;++r){o=C.a.V(a,r)
if(o!==46){if((o^48)>9)j.$2("invalid character",r)}else{if(p===3)j.$2(l,r)
n=P.hF(C.a.q(a,q,r),null)
if(typeof n!=="number")return n.a3()
if(n>255)j.$2(k,q)
m=p+1
if(p>=s)return H.d(i,p)
i[p]=n
q=r+1
p=m}}if(p!==3)j.$2(l,c)
n=P.hF(C.a.q(a,q,c),null)
if(typeof n!=="number")return n.a3()
if(n>255)j.$2(k,q)
if(p>=s)return H.d(i,p)
i[p]=n
return i},
ms:function(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new P.jH(a),b=new P.jI(c,a)
if(a.length<2)c.$1("address is too short")
s=H.c([],t.t)
for(r=a0,q=r,p=!1,o=!1;r<a1;++r){n=C.a.V(a,r)
if(n===58){if(r===a0){++r
if(C.a.V(a,r)!==58)c.$2("invalid start colon.",r)
q=r}if(r===q){if(p)c.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(b.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)c.$1("too few parts")
m=q===a1
l=C.b.gay(s)
if(m&&l!==-1)c.$2("expected a part after last `:`",a1)
if(!m)if(!o)s.push(b.$2(q,a1))
else{k=P.ow(a,q,a1)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)c.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)c.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.d(j,g)
j[g]=0
d=g+1
if(d>=i)return H.d(j,d)
j[d]=0
g+=2}else{d=C.c.aR(f,8)
if(g<0||g>=i)return H.d(j,g)
j[g]=d
d=g+1
if(d>=i)return H.d(j,d)
j[d]=f&255
g+=2}}return j},
mP:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
ce:function(a,b,c){throw H.b(P.a2(c,a,b))},
p7:function(a,b){if(a!=null&&a===P.mP(b))return null
return a},
p5:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.V(a,b)===91){s=c-1
if(C.a.V(a,s)!==93)P.ce(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.p2(a,r,s)
if(q<s){p=q+1
o=P.mU(a,C.a.ad(a,"25",p)?q+3:p,s,"%25")}else o=""
P.ms(a,r,q)
return C.a.q(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.V(a,n)===58){q=C.a.br(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mU(a,C.a.ad(a,"25",p)?q+3:p,c,"%25")}else o=""
P.ms(a,b,q)
return"["+C.a.q(a,b,q)+o+"]"}return P.pb(a,b,c)},
p2:function(a,b,c){var s=C.a.br(a,"%",b)
return s>=b&&s<c?s:c},
mU:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.R(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.V(a,s)
if(p===37){o=P.lo(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.R("")
m=i.a+=C.a.q(a,r,s)
if(n)o=C.a.q(a,s,s+3)
else if(o==="%")P.ce(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.R("")
if(r<s){i.a+=C.a.q(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.V(a,s+1)
if((l&64512)===56320){p=65536|(p&1023)<<10|l&1023
k=2}else k=1}else k=1
j=C.a.q(a,r,s)
if(i==null){i=new P.R("")
n=i}else n=i
n.a+=j
n.a+=P.lm(p)
s+=k
r=s}}}if(i==null)return C.a.q(a,b,c)
if(r<c)i.a+=C.a.q(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
pb:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.V(a,s)
if(o===37){n=P.lo(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.R("")
l=C.a.q(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.q(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.d(C.z,m)
m=(C.z[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.R("")
if(r<s){q.a+=C.a.q(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.d(C.k,m)
m=(C.k[m]&1<<(o&15))!==0}else m=!1
if(m)P.ce(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.V(a,s+1)
if((i&64512)===56320){o=65536|(o&1023)<<10|i&1023
j=2}else j=1}else j=1
l=C.a.q(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.R("")
m=q}else m=q
m.a+=l
m.a+=P.lm(o)
s+=j
r=s}}}}if(q==null)return C.a.q(a,b,c)
if(r<c){l=C.a.q(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
p8:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.mR(C.a.D(a,b)))P.ce(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.D(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.d(C.m,p)
p=(C.m[p]&1<<(q&15))!==0}else p=!1
if(!p)P.ce(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.q(a,b,c)
return P.p1(r?a.toLowerCase():a)},
p1:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
p9:function(a,b,c){return P.dy(a,b,c,C.a_,!1)},
p6:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dy(a,b,c,C.A,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.aa(s,"/"))s="/"+s
return P.pa(s,e,f)},
pa:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.aa(a,"/"))return P.pc(a,!s||c)
return P.pd(a)},
ln:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.b(P.bQ("Both query and queryParameters specified"))
return P.dy(a,b,c,C.l,!0)}if(d==null)return null
s=new P.R("")
r.a=""
d.A(0,new P.kp(new P.kq(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
p4:function(a,b,c){return P.dy(a,b,c,C.l,!0)},
lo:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.V(a,b+1)
r=C.a.V(a,n)
q=H.kG(s)
p=H.kG(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aR(o,4)
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.as(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.q(a,b,b+3).toUpperCase()
return null},
lm:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
r=s.length
if(0>=r)return H.d(s,0)
s[0]=37
q=C.a.D(k,a>>>4)
if(1>=r)return H.d(s,1)
s[1]=q
q=C.a.D(k,a&15)
if(2>=r)return H.d(s,2)
s[2]=q}else{if(a>2047)if(a>65535){p=240
o=4}else{p=224
o=3}else{p=192
o=2}s=new Uint8Array(3*o)
for(r=s.length,n=0;--o,o>=0;p=128){m=C.c.hd(a,6*o)&63|p
if(n>=r)return H.d(s,n)
s[n]=37
q=n+1
l=C.a.D(k,m>>>4)
if(q>=r)return H.d(s,q)
s[q]=l
l=n+2
q=C.a.D(k,m&15)
if(l>=r)return H.d(s,l)
s[l]=q
n+=3}}return P.f1(s,0,null)},
dy:function(a,b,c,d,e){var s=P.mT(a,b,c,d,e)
return s==null?C.a.q(a,b,c):s},
mT:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.V(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.d(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lo(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.d(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.ce(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.V(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.lm(o)}}if(p==null){p=new P.R("")
n=p}else n=p
n.a+=C.a.q(a,q,r)
n.a+=H.f(m)
if(typeof l!=="number")return H.u(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.q(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mS:function(a){if(C.a.aa(a,"."))return!0
return C.a.dV(a,"/.")!==-1},
pd:function(a){var s,r,q,p,o,n,m
if(!P.mS(a))return a
s=H.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.I(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.d(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
pc:function(a,b){var s,r,q,p,o,n
if(!P.mS(a))return!b?P.mQ(a):a
s=H.c([],t.s)
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
r=P.mQ(s[0])
if(0>=s.length)return H.d(s,0)
s[0]=r}return C.b.j(s,"/")},
mQ:function(a){var s,r,q,p=a.length
if(p>=2&&P.mR(J.nA(a,0)))for(s=1;s<p;++s){r=C.a.D(a,s)
if(r===58)return C.a.q(a,0,s)+"%3A"+C.a.ai(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.d(C.m,q)
q=(C.m[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
p3:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.D(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.b(P.bQ("Invalid URL encoding"))}}return s},
lp:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.D(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.q(a,b,c)
else p=new H.o(C.a.q(a,b,c))}else{p=H.c([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.D(a,o)
if(r>127)throw H.b(P.bQ("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.b(P.bQ("Truncated URI"))
p.push(P.p3(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a4.c9(p)},
mR:function(a){var s=a|32
return 97<=s&&s<=122},
mq:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.c([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.D(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.b(P.a2(k,a,r))}}if(q<0&&r>b)throw H.b(P.a2(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.D(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gay(j)
if(p!==44||r!==n+7||!C.a.ad(a,"base64",n+1))throw H.b(P.a2("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.J.hZ(0,a,m,s)
else{l=P.mT(a,m,s,C.l,!0)
if(l!=null)a=C.a.aW(a,m,s,l)}return new P.jF(a,j,c)},
pj:function(){var s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",r=".",q=":",p="/",o="?",n="#",m=P.o6(22,new P.kx(),t.gc),l=new P.kw(m),k=new P.ky(),j=new P.kz(),i=l.$2(0,225)
k.$3(i,s,1)
k.$3(i,r,14)
k.$3(i,q,34)
k.$3(i,p,3)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(14,225)
k.$3(i,s,1)
k.$3(i,r,15)
k.$3(i,q,34)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(15,225)
k.$3(i,s,1)
k.$3(i,"%",225)
k.$3(i,q,34)
k.$3(i,p,9)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(1,225)
k.$3(i,s,1)
k.$3(i,q,34)
k.$3(i,p,10)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(2,235)
k.$3(i,s,139)
k.$3(i,p,131)
k.$3(i,r,146)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(3,235)
k.$3(i,s,11)
k.$3(i,p,68)
k.$3(i,r,18)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(4,229)
k.$3(i,s,5)
j.$3(i,"AZ",229)
k.$3(i,q,102)
k.$3(i,"@",68)
k.$3(i,"[",232)
k.$3(i,p,138)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(5,229)
k.$3(i,s,5)
j.$3(i,"AZ",229)
k.$3(i,q,102)
k.$3(i,"@",68)
k.$3(i,p,138)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(6,231)
j.$3(i,"19",7)
k.$3(i,"@",68)
k.$3(i,p,138)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(7,231)
j.$3(i,"09",7)
k.$3(i,"@",68)
k.$3(i,p,138)
k.$3(i,o,172)
k.$3(i,n,205)
k.$3(l.$2(8,8),"]",5)
i=l.$2(9,235)
k.$3(i,s,11)
k.$3(i,r,16)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(16,235)
k.$3(i,s,11)
k.$3(i,r,17)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(17,235)
k.$3(i,s,11)
k.$3(i,p,9)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(10,235)
k.$3(i,s,11)
k.$3(i,r,18)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(18,235)
k.$3(i,s,11)
k.$3(i,r,19)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(19,235)
k.$3(i,s,11)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(11,235)
k.$3(i,s,11)
k.$3(i,p,10)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(12,236)
k.$3(i,s,12)
k.$3(i,o,12)
k.$3(i,n,205)
i=l.$2(13,237)
k.$3(i,s,13)
k.$3(i,o,13)
j.$3(l.$2(20,245),"az",21)
i=l.$2(21,245)
j.$3(i,"az",21)
j.$3(i,"09",21)
k.$3(i,"+-.",21)
return m},
n_:function(a,b,c,d,e){var s,r,q,p,o,n=$.nz()
for(s=b;s<c;++s){if(d<0||d>=n.length)return H.d(n,d)
r=n[d]
q=C.a.D(a,s)^96
if(q>95)q=31
if(q>=r.length)return H.d(r,q)
p=r[q]
d=p&31
o=p>>>5
if(o>=8)return H.d(e,o)
e[o]=s}return d},
az:function az(){},
ah:function ah(a,b){this.a=a
this.b=b},
a_:function a_(){},
bx:function bx(a){this.a=a},
i1:function i1(){},
i2:function i2(){},
L:function L(){},
dN:function dN(a){this.a=a},
ex:function ex(){},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c4:function c4(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eb:function eb(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fq:function fq(a){this.a=a},
fn:function fn(a){this.a=a},
c6:function c6(a){this.a=a},
dW:function dW(a){this.a=a},
eA:function eA(){},
cW:function cW(){},
dY:function dY(a){this.a=a},
fM:function fM(a){this.a=a},
ie:function ie(a,b,c){this.a=a
this.b=b
this.c=c},
aC:function aC(){},
k:function k(){},
h:function h(){},
ec:function ec(){},
n:function n(){},
H:function H(){},
ar:function ar(){},
Q:function Q(){},
N:function N(){},
y:function y(){},
R:function R(a){this.a=a},
jJ:function jJ(a){this.a=a},
jG:function jG(a){this.a=a},
jH:function jH(a){this.a=a},
jI:function jI(a,b){this.a=a
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
kq:function kq(a,b){this.a=a
this.b=b},
kp:function kp(a){this.a=a},
jF:function jF(a,b,c){this.a=a
this.b=b
this.c=c},
kx:function kx(){},
kw:function kw(a){this.a=a},
ky:function ky(){},
kz:function kz(){},
h6:function h6(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fD:function fD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
qc:function(a){var s
if(t.v.b(a)){s=J.nG(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.du(a.data,a.height,a.width)},
qb:function(a){if(a instanceof P.du)return{data:a.a,height:a.b,width:a.c}
return a},
bo:function(a){var s,r,q,p,o
if(a==null)return null
s=P.l7(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
qa:function(a){var s={}
a.A(0,new P.kD(s))
return s},
ki:function ki(){},
kk:function kk(a,b){this.a=a
this.b=b},
kl:function kl(a,b){this.a=a
this.b=b},
du:function du(a,b,c){this.a=a
this.b=b
this.c=c},
kD:function kD(a){this.a=a},
kj:function kj(a,b){this.a=a
this.b=b},
e6:function e6(a,b){this.a=a
this.b=b},
ic:function ic(){},
id:function id(){},
ka:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oJ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
h4:function h4(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aT:function aT(){},
ei:function ei(){},
aX:function aX(){},
ey:function ey(){},
iX:function iX(){},
c5:function c5(){},
f0:function f0(){},
m:function m(){},
aZ:function aZ(){},
fd:function fd(){},
fT:function fT(){},
fU:function fU(){},
h0:function h0(){},
h1:function h1(){},
he:function he(){},
hf:function hf(){},
hn:function hn(){},
ho:function ho(){},
bi:function bi(){},
hL:function hL(){},
dP:function dP(){},
hM:function hM(a){this.a=a},
dQ:function dQ(){},
b8:function b8(){},
ez:function ez(){},
fz:function fz(){},
eL:function eL(){},
eW:function eW(){},
ha:function ha(){},
hb:function hb(){}},W={
lH:function(){var s=document.createElement("a")
return s},
kW:function(){var s=document.createElement("canvas")
return s},
nW:function(a,b,c){var s,r=document.body
r.toString
s=C.r.ao(r,a,b,c)
s.toString
r=new H.b1(new W.a1(s),new W.i3(),t.ac.H("b1<i.E>"))
return t.h.a(r.gaL(r))},
i4:function(a){return"wheel"},
cw:function(a){var s,r,q="element tag unavailable"
try{s=J.aL(a)
if(typeof s.ge8(a)=="string")q=s.ge8(a)}catch(r){H.am(r)}return q},
l0:function(a){var s=document.createElement("img")
if(a!=null)s.src=a
return s},
k9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mG:function(a,b,c,d){var s=W.k9(W.k9(W.k9(W.k9(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
Y:function(a,b,c,d){var s=new W.fL(a,b,c==null?null:W.n0(new W.k8(c),t.aD),!1)
s.hk()
return s},
mE:function(a){var s=W.lH(),r=window.location
s=new W.cc(new W.kf(s,r))
s.ex(a)
return s},
oF:function(a,b,c,d){return!0},
oG:function(a,b,c,d){var s,r=d.a,q=r.a
q.href=c
s=q.hostname
r=r.b
if(!(s==r.hostname&&q.port==r.port&&q.protocol==r.protocol))if(s==="")if(q.port===""){r=q.protocol
r=r===":"||r===""}else r=!1
else r=!1
else r=!0
return r},
mK:function(){var s=t.N,r=P.lZ(C.B,s),q=H.c(["TEMPLATE"],t.s)
s=new W.hi(r,P.cH(s),P.cH(s),P.cH(s),null)
s.eA(null,new H.cN(C.B,new W.km(),t.eM),q,null)
return s},
n0:function(a,b){var s=$.aK
if(s===C.f)return a
return s.dw(a,b)},
p:function p(){},
hI:function hI(){},
dL:function dL(){},
dM:function dM(){},
bR:function bR(){},
bs:function bs(){},
bt:function bt(){},
bu:function bu(){},
aA:function aA(){},
hU:function hU(){},
J:function J(){},
cs:function cs(){},
hV:function hV(){},
ap:function ap(){},
aP:function aP(){},
hW:function hW(){},
hX:function hX(){},
hY:function hY(){},
ba:function ba(){},
i_:function i_(){},
ct:function ct(){},
cu:function cu(){},
e2:function e2(){},
i0:function i0(){},
fA:function fA(a,b){this.a=a
this.b=b},
D:function D(){},
i3:function i3(){},
j:function j(){},
e:function e(){},
ai:function ai(){},
bW:function bW(){},
e5:function e5(){},
e7:function e7(){},
aD:function aD(){},
ih:function ih(){},
bz:function bz(){},
bA:function bA(){},
bB:function bB(){},
bD:function bD(){},
iw:function iw(){},
iO:function iO(){},
bY:function bY(){},
eo:function eo(){},
iP:function iP(a){this.a=a},
ep:function ep(){},
iQ:function iQ(a){this.a=a},
aF:function aF(){},
eq:function eq(){},
aj:function aj(){},
a1:function a1(a){this.a=a},
x:function x(){},
cT:function cT(){},
aG:function aG(){},
eE:function eE(){},
eM:function eM(){},
j2:function j2(a){this.a=a},
eO:function eO(){},
au:function au(){},
eS:function eS(){},
aH:function aH(){},
eT:function eT(){},
aI:function aI(){},
eZ:function eZ(){},
jd:function jd(a){this.a=a},
av:function av(){},
bh:function bh(){},
cY:function cY(){},
f2:function f2(){},
f3:function f3(){},
c7:function c7(){},
aw:function aw(){},
ac:function ac(){},
f6:function f6(){},
f7:function f7(){},
jp:function jp(){},
aJ:function aJ(){},
bI:function bI(){},
fc:function fc(){},
jt:function jt(){},
b0:function b0(){},
jK:function jK(){},
fu:function fu(){},
bk:function bk(){},
ca:function ca(){},
cb:function cb(){},
fB:function fB(){},
da:function da(){},
fQ:function fQ(){},
df:function df(){},
h9:function h9(){},
hg:function hg(){},
fy:function fy(){},
fI:function fI(a){this.a=a},
l_:function l_(a,b){this.a=a
this.$ti=b},
fL:function fL(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
k8:function k8(a){this.a=a},
lf:function lf(a){this.$ti=a},
cc:function cc(a){this.a=a},
M:function M(){},
cU:function cU(a){this.a=a},
iT:function iT(a){this.a=a},
iS:function iS(a,b,c){this.a=a
this.b=b
this.c=c},
dl:function dl(){},
kg:function kg(){},
kh:function kh(){},
hi:function hi(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
km:function km(){},
hh:function hh(){},
cz:function cz(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
ak:function ak(){},
kf:function kf(a,b){this.a=a
this.b=b},
hs:function hs(a){this.a=a
this.b=!1},
ku:function ku(a){this.a=a},
fC:function fC(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
fN:function fN(){},
fO:function fO(){},
fR:function fR(){},
fS:function fS(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
h_:function h_(){},
h2:function h2(){},
h3:function h3(){},
h5:function h5(){},
dm:function dm(){},
dn:function dn(){},
h7:function h7(){},
h8:function h8(){},
hd:function hd(){},
hj:function hj(){},
hk:function hk(){},
dq:function dq(){},
dr:function dr(){},
hl:function hl(){},
hm:function hm(){},
ht:function ht(){},
hu:function hu(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){},
hz:function hz(){},
hA:function hA(){},
hB:function hB(){},
hC:function hC(){}},K={
P:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.b(P.v("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.D(a,0)
r=C.a.D(b,0)
if(s>r){q=r
r=s
s=q}return new K.iY(s,r)},
t:function(a){var s=new K.j3()
s.ev(a)
return s},
b7:function b7(){},
e9:function e9(){},
iz:function iz(){},
aa:function aa(){this.a=null},
iY:function iY(a,b){this.a=a
this.b=b},
j3:function j3(){this.a=null}},L={
jr:function(){var s=new L.jq()
s.a=new H.C(t.cn)
s.b=new H.C(t.dL)
s.c=P.cH(t.X)
return s},
eX:function eX(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fa:function fa(a,b,c){this.a=a
this.b=b
this.c=c},
fb:function fb(a){this.b=a
this.c=null},
jq:function jq(){var _=this
_.d=_.c=_.b=_.a=null},
fe:function fe(a){this.b=a
this.a=this.c=null}},O={
kX:function(a){var s=new O.a6(a.H("a6<0>"))
s.bj(a)
return s},
a6:function a6(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cP:function cP(){this.b=this.a=null},
hZ:function hZ(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
el:function el(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iG:function iG(a,b){this.a=a
this.b=b},
iH:function iH(){},
iI:function iI(a,b){this.a=a
this.b=b},
iJ:function iJ(){},
iK:function iK(a,b){this.a=a
this.b=b},
iL:function iL(){},
iM:function iM(a,b){this.a=a
this.b=b},
iN:function iN(){},
iA:function iA(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
en:function en(){},
iB:function iB(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aV:function aV(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
iD:function iD(){var _=this
_.e=_.d=_.c=_.b=null},
iE:function iE(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
iF:function iF(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eP:function eP(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
f5:function f5(){}},E={
lU:function(){var s,r=new E.by()
r.a=""
r.b=!0
s=O.kX(t.l)
r.y=s
s.aZ(r.gi_(),r.gi2())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sbE(0,null)
return r},
mB:function(){if(J.kS(window.navigator.vendor,"Google"))return C.H
if(J.kS(window.navigator.userAgent,"Firefox"))return C.t
var s=window.navigator.appVersion
if(J.b3(s).F(s,"Trident")||C.a.F(s,"Edge"))return C.u
if(J.kS(window.navigator.appName,"Microsoft"))return C.u
return C.I},
mC:function(){var s=window.navigator.appVersion
if(J.b3(s).F(s,"Win"))return C.a1
if(C.a.F(s,"Mac"))return C.C
if(C.a.F(s,"Linux"))return C.a2
return C.a3},
om:function(a,b){var s=new E.iZ(a)
s.eu(a,b)
return s},
ou:function(a,b,c,d,e){var s,r
if(t.fr.b(a))return E.mm(a,!0,!0,!0,!1)
s=W.kW()
r=s.style
r.width="100%"
r.height="100%"
J.dK(a).n(0,s)
return E.mm(s,!0,!0,!0,!1)},
mm:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.f9(),n=t.z,m=C.i.cM(a,"webgl2",P.o4(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.r(P.v("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.om(m,a)
n=new T.jl(m)
n.b=m.getParameter(3379)
n.c=m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.fs(a)
s=new X.ip()
s.c=new X.aq(!1,!1,!1)
s.d=P.cH(t.e)
n.b=s
s=new X.iR(n)
s.f=0
s.r=V.bf()
s.x=V.bf()
s.ch=s.Q=1
n.c=s
s=new X.ix(n)
s.r=0
s.x=V.bf()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.js(n)
s.f=V.bf()
s.r=V.bf()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=H.c([],t.eG)
s=$.i6
n.Q=(s==null?$.i6=new E.fJ(E.mB(),E.mC()):s).a===C.t?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.Y(q,"contextmenu",n.gff(),!1))
n.z.push(W.Y(a,"focus",n.gfl(),!1))
n.z.push(W.Y(a,"blur",n.gf9(),!1))
n.z.push(W.Y(q,"keyup",n.gfp(),!1))
n.z.push(W.Y(q,"keydown",n.gfn(),!1))
n.z.push(W.Y(a,"mousedown",n.gfu(),!1))
n.z.push(W.Y(a,"mouseup",n.gfA(),!1))
n.z.push(W.Y(a,p,n.gfw(),!1))
r=n.z
W.i4(a)
W.i4(a)
r.push(W.Y(a,W.i4(a),n.gfC(),!1))
n.z.push(W.Y(q,p,n.gfh(),!1))
n.z.push(W.Y(q,"mouseup",n.gfj(),!1))
n.z.push(W.Y(q,"pointerlockchange",n.gfE(),!1))
n.z.push(W.Y(a,"touchstart",n.gfU(),!1))
n.z.push(W.Y(a,"touchend",n.gfQ(),!1))
n.z.push(W.Y(a,"touchmove",n.gfS(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.ah(Date.now(),!1)
o.db=0
o.da()
return o},
hQ:function hQ(){},
by:function by(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bT:function bT(a){this.b=a},
c2:function c2(a){this.b=a},
fJ:function fJ(a,b){this.a=a
this.b=b},
iZ:function iZ(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
f9:function f9(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
jo:function jo(a){this.a=a}},Z={
mA:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cf(c)),35044)
a.bindBuffer(b,null)
return new Z.fv(b,s)},
ax:function(a){return new Z.bj(a)},
fv:function fv(a,b){this.a=a
this.b=b},
dT:function dT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
d9:function d9(a){this.a=a},
bU:function bU(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
cA:function cA(a,b,c){this.a=a
this.b=b
this.c=c},
bj:function bj(a){this.a=a}},D={
F:function(){var s=new D.bV()
s.d=0
return s},
hR:function hR(){},
bV:function bV(){var _=this
_.d=_.c=_.b=_.a=null},
i9:function i9(a){this.a=a},
ia:function ia(a){this.a=a},
S:function S(){this.b=null},
aQ:function aQ(){this.b=null},
aR:function aR(){this.b=null},
B:function B(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
dR:function dR(){},
bw:function bw(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
T:function T(){},
cF:function cF(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
eF:function eF(){},
eU:function eU(){}},X={dU:function dU(a,b){this.a=a
this.b=b},eg:function eg(a,b){this.a=a
this.b=b},ip:function ip(){var _=this
_.d=_.c=_.b=_.a=null},cK:function cK(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ix:function ix(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aq:function aq(a,b,c){this.a=a
this.b=b
this.c=c},bZ:function bZ(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},iR:function iR(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c_:function c_(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},eG:function eG(){},d_:function d_(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},js:function js(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},fs:function fs(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lV:function(a){var s=new X.ig(),r=new V.aB(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=V.l9()
s.r=r
return s},
m5:function(a){var s,r,q=new X.eB()
q.c=1.0471975511965976
q.d=0.1
q.e=2000
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gp().n(0,q.geD())
r=new D.B("mover",s,q.b)
r.b=!0
q.a0(r)}r=q.c
$.E().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
r=new D.B("fov",r,1.0471975511965976)
r.b=!0
q.a0(r)}r=q.d
$.E().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
r=new D.B("near",r,0.1)
r.b=!0
q.a0(r)}r=q.e
$.E().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
r=new D.B("far",r,2000)
r.b=!0
q.a0(r)}return q},
hN:function hN(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
kV:function kV(){},
ig:function ig(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ik:function ik(){this.b=this.a=null},
eB:function eB(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
je:function je(){},
n8:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="testCanvas",a7=null,a8="bumpMaps",a9="modifiers",b0=34067,b1=V.op("Test 029"),b2=W.kW()
b2.className="pageLargeCanvas"
b2.id=a6
b1.a.appendChild(b2)
s=t.i
b1.dr(H.c(["Test of bump distort pass. It renders the scene to a back buffer then ","paints that back buffer texture to the front buffer with a distortion."],s))
b1.hm(H.c(["bumpMaps"],s))
b1.dr(H.c(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(a6)
if(r==null)H.r(P.v("Failed to find an element with the identifier, testCanvas."))
q=E.ou(r,!0,!0,!0,!1)
p=new U.bX()
p.bj(t.ah)
p.aZ(p.gf1(),p.gfI())
p.e=null
p.f=V.bE()
p.r=0
o=q.x
n=new U.d6()
m=U.kY()
m.scL(0,!0)
m.scv(6.283185307179586)
m.scz(0)
m.saj(0,0)
m.scw(100)
m.sU(0)
m.sca(0.5)
n.b=m
l=n.gaP()
m.gp().n(0,l)
m=U.kY()
m.scL(0,!0)
m.scv(6.283185307179586)
m.scz(0)
m.saj(0,0)
m.scw(100)
m.sU(0)
m.sca(0.5)
n.c=m
m.gp().n(0,l)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
k=new X.aq(!1,!1,!1)
j=n.d
n.d=k
m=new D.B(a9,j,k)
m.b=!0
n.O(m)
m=n.f
if(m!==!1){n.f=!1
m=new D.B("invertX",m,!1)
m.b=!0
n.O(m)}m=n.r
if(m!==!1){n.r=!1
m=new D.B("invertY",m,!1)
m.b=!0
n.O(m)}n.b7(o)
p.n(0,n)
o=q.x
n=new U.d5()
m=U.kY()
m.scL(0,!0)
m.scv(6.283185307179586)
m.scz(0)
m.saj(0,0)
m.scw(100)
m.sU(0)
m.sca(0.2)
n.b=m
m.gp().n(0,n.gaP())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
k=new X.aq(!0,!1,!1)
j=n.c
n.c=k
m=new D.B(a9,j,k)
m.b=!0
n.O(m)
n.b7(o)
p.n(0,n)
o=q.x
n=new U.d7()
n.c=0.01
n.e=n.d=0
k=new X.aq(!1,!1,!1)
n.b=k
m=new D.B(a9,a7,k)
m.b=!0
n.O(m)
n.b7(o)
p.n(0,n)
p.n(0,U.lP(V.aW(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
i=X.m5(p)
h=new X.hN()
h.d=h.c=h.b=h.a=512
h.e=!0
h.f=!1
h.x=h.r=1
h.ch=T.lb(a7)
h.cx=new V.aB(0,0,0,1)
h.cy=!0
h.db=2000
h.dx=!0
h.dy=V.l9()
h.sar(0,512)
h.sap(0,512)
g=new V.aB(0,0,0,1)
if(!h.cx.u(0,g)){j=h.cx
h.cx=g
o=new D.B("color",j,g)
o.b=!0
h.a0(o)}if(h.cy){h.cy=!1
o=new D.B("clearColor",!0,!1)
o.b=!0
h.a0(o)}o=h.db
$.E().toString
if(!(Math.abs(o-2000)<1e-9)){h.db=2000
o=new D.B("depth",o,2000)
o.b=!0
h.a0(o)}if(!h.f){h.f=!0
o=new D.B("autoResize",!1,!0)
o.b=!0
h.a0(o)}o=h.r
$.E().toString
if(!(Math.abs(o-1)<1e-9)){h.r=1
o=new D.B("autoResizeScalarX",o,1)
o.b=!0
h.a0(o)}o=h.x
$.E().toString
if(!(Math.abs(o-1)<1e-9)){h.x=1
o=new D.B("autoResizeScalarY",o,1)
o.b=!0
h.a0(o)}f=V.l9()
if(!J.I(h.dy,f)){j=h.dy
h.dy=f
o=new D.B("region",j,f)
o.b=!0
h.a0(o)}e=E.lU()
e.sbE(0,F.qy())
d=new O.el()
o=O.kX(t.hc)
d.e=o
o.aZ(d.gf5(),d.gf7())
o=new O.aV(d,"emission")
o.c=new A.a7(!1,!1,!1)
o.f=new V.a0(0,0,0)
d.f=o
o=new O.aV(d,"ambient")
o.c=new A.a7(!1,!1,!1)
o.f=new V.a0(0,0,0)
d.r=o
o=new O.aV(d,"diffuse")
o.c=new A.a7(!1,!1,!1)
o.f=new V.a0(0,0,0)
d.x=o
o=new O.aV(d,"invDiffuse")
o.c=new A.a7(!1,!1,!1)
o.f=new V.a0(0,0,0)
d.y=o
o=new O.iF(d,"specular")
o.c=new A.a7(!1,!1,!1)
o.f=new V.a0(0,0,0)
o.ch=100
d.z=o
o=new O.iB(d,"bump")
o.c=new A.a7(!1,!1,!1)
d.Q=o
d.ch=null
o=new O.aV(d,"reflect")
o.c=new A.a7(!1,!1,!1)
o.f=new V.a0(0,0,0)
d.cx=o
o=new O.iE(d,"refract")
o.c=new A.a7(!1,!1,!1)
o.f=new V.a0(0,0,0)
o.ch=1
d.cy=o
o=new O.iA(d,"alpha")
o.c=new A.a7(!1,!1,!1)
o.f=1
d.db=o
o=new D.cF()
o.bj(t.gj)
o.e=H.c([],t.bb)
o.f=H.c([],t.cP)
o.r=H.c([],t.eb)
o.x=H.c([],t.du)
o.z=o.y=null
o.cO(o.gf3(),o.gfG(),o.gfK())
d.dx=o
n=new O.iD()
n.b=new V.aB(0,0,0,0)
n.c=1
n.d=10
n.e=!1
d.dy=n
n=o.y
o=n==null?o.y=D.F():n
o.n(0,d.gh2())
o=d.dx
n=o.z
o=n==null?o.z=D.F():n
o.n(0,d.gbH())
d.fr=null
o=d.dx
c=V.le()
n=U.lP(V.m1(V.m8(),c,new V.G(0,-1,-1)))
g=new V.a0(1,1,1)
m=new D.bw()
m.c=new V.a0(1,1,1)
m.a=V.mz()
m.d=V.le()
m.e=V.oA()
j=m.b
m.b=n
n.gp().n(0,m.gey())
n=new D.B("mover",j,m.b)
n.b=!0
m.az(n)
if(!m.c.u(0,g)){j=m.c
m.c=g
n=new D.B("color",j,g)
n.b=!0
m.az(n)}o.n(0,m)
o=d.r
o.saU(0,new V.a0(0,0,1))
o=d.x
o.saU(0,new V.a0(0,1,0))
o=d.z
o.saU(0,new V.a0(1,0,0))
o=d.z
o.df(new A.a7(!0,!1,!1))
o.dg(10)
o=q.f
n=o.a
b=n.createTexture()
n.bindTexture(b0,b)
n.texParameteri(b0,10242,10497)
n.texParameteri(b0,10243,10497)
n.texParameteri(b0,10241,9729)
n.texParameteri(b0,10240,9729)
n.bindTexture(b0,a7)
a=new T.jk()
a.a=0
a.b=b
a.c=!1
a.d=0
o.aO(a,b,"../resources/maskonaive/posx.jpg",34069,!1,!1)
o.aO(a,b,"../resources/maskonaive/negx.jpg",34070,!1,!1)
o.aO(a,b,"../resources/maskonaive/posy.jpg",34071,!1,!1)
o.aO(a,b,"../resources/maskonaive/negy.jpg",34072,!1,!1)
o.aO(a,b,"../resources/maskonaive/posz.jpg",34073,!1,!1)
o.aO(a,b,"../resources/maskonaive/negz.jpg",34074,!1,!1)
a0=M.lQ()
o=new O.eP()
o.b=1.0471975511965976
o.d=new V.a0(1,1,1)
j=o.c
o.c=a
a.gp().n(0,o.gbH())
n=new D.B("boxTexture",j,o.c)
n.b=!0
o.a7(n)
a0.saX(o)
a0.sbf(0,h)
a0.sb8(i)
a1=new M.cx()
a1.a=!0
o=O.kX(t.l)
a1.e=o
o.aZ(a1.gfb(),a1.gfd())
a1.y=a1.x=a1.r=a1.f=null
a2=X.lV(a7)
a1.sb8(a7)
a1.sbf(0,a2)
a1.saX(a7)
a1.sb8(i)
a1.saX(d)
a1.sbf(0,h)
a1.e.n(0,e)
a3=new O.hZ()
a3.sdE(a7)
a3.sdB(a7)
a4=V.m0()
if(!J.I(a3.d,a4)){a3.d=a4
a3.as()}a4=V.m0()
if(!J.I(a3.e,a4)){a3.e=a4
a3.as()}a3.sdA(a7)
a3.sdE(h.ch)
a3.sdA(V.m2(0.05,0.05,0.05))
a5=M.lQ()
a5.saX(a3)
o=H.c([a0,a1,a5],t.f2)
n=new M.cn()
n.bj(t.bn)
n.e=!0
n.f=!1
n.r=null
n.aZ(n.gfM(),n.gfO())
n.ab(0,o)
o=q.d
if(o!==n){if(o!=null)o.gp().R(0,q.gcU())
q.d=n
n.gp().n(0,q.gcU())
q.cV()}o=new V.jg(a8,new X.kM(a3,q))
s=s.getElementById(a8)
o.c=s
if(s==null)H.r("Failed to find bumpMaps for Texture2DGroup")
o.dn(0,"../resources/BumpMap1.png",!0)
o.n(0,"../resources/BumpMap2.png")
o.n(0,"../resources/BumpMap3.png")
o.n(0,"../resources/BumpMap4.png")
o.n(0,"../resources/BumpMap5.png")
o.n(0,"../resources/ScrewBumpMap.png")
o.n(0,"../resources/CtrlPnlBumpMap.png")
s=q.Q
if(s==null)s=q.Q=D.F()
o=s.b
s=o==null?s.b=H.c([],t.f):o
s.push(new X.kN(b1,a3))
V.qt(q)},
kM:function kM(a,b){this.a=a
this.b=b},
kN:function kN(a,b){this.a=a
this.b=b}},V={
hS:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aB(s,r,q,1)},
qz:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bh(a-b,s)
return(a<0?a+s:a)+b},
K:function(a,b,c){if(a==null)return C.a.aG("null",c)
$.E().toString
return C.a.aG(C.d.eb(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
ck:function(a,b,c){var s,r,q,p,o,n,m=H.c([],t.i)
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.q)(a),++q){p=V.K(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.d(m,o)
s=C.a.aG(m[o],r)
n=m.length
if(o>=n)return H.d(m,o)
m[o]=s}return m},
dG:function(a){return C.d.ip(Math.pow(2,C.W.cn(Math.log(H.q8(a))/Math.log(2))))},
m0:function(){var s=$.m_
return s==null?$.m_=new V.cO(1,0,0,0,1,0,0,0,1):s},
bE:function(){var s=$.m3
return s==null?$.m3=V.aW(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aW:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.be(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m2:function(a,b,c){return V.aW(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
m1:function(a,b,c){var s=c.I(),r=b.aE(s).I(),q=s.aE(r),p=new V.G(a.a,a.b,a.c),o=r.S(0).ac(p),n=q.S(0).ac(p),m=s.S(0).ac(p)
return V.aW(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
bf:function(){var s=$.m7
return s==null?$.m7=new V.ab(0,0):s},
m8:function(){var s=$.aY
return s==null?$.aY=new V.X(0,0,0):s},
l9:function(){var s=$.mh
return s==null?$.mh=V.mg(0,0,1,1):s},
mg:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eK(a,b,c,d)},
d8:function(){var s=$.my
return s==null?$.my=new V.G(0,0,0):s},
oA:function(){var s=$.jQ
return s==null?$.jQ=new V.G(-1,0,0):s},
le:function(){var s=$.jR
return s==null?$.jR=new V.G(0,1,0):s},
mz:function(){var s=$.jS
return s==null?$.jS=new V.G(0,0,1):s},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i7:function i7(){},
cO:function cO(a,b,c,d,e,f,g,h,i){var _=this
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
ab:function ab(a,b){this.a=a
this.b=b},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
bG:function bG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eK:function eK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ad:function ad(a,b){this.a=a
this.b=b},
G:function G(a,b,c){this.a=a
this.b=b
this.c=c},
qt:function(a){P.ov(C.T,new V.kP(a))},
op:function(a){var s=new V.j8()
s.ew(a,!0)
return s},
b9:function b9(){},
kP:function kP(a){this.a=a},
dZ:function dZ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
e8:function e8(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ea:function ea(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eD:function eD(a){var _=this
_.a=a
_.d=_.c=_.b=null},
j8:function j8(){this.b=this.a=null},
ja:function ja(a){this.a=a},
j9:function j9(a){this.a=a},
jb:function jb(a){this.a=a},
jg:function jg(a,b){this.a=a
this.c=null
this.d=b},
ji:function ji(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jh:function jh(){}},U={
kY:function(){var s=new U.hT()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
lP:function(a){var s=new U.co()
s.a=a
return s},
hT:function hT(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
co:function co(){this.b=this.a=null},
bX:function bX(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
V:function V(){},
d5:function d5(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
d6:function d6(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d7:function d7(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
lQ:function(){var s,r,q,p,o,n,m,l,k,j=null,i=new M.cr()
i.a=!0
s=E.lU()
r=F.mk()
q=r.a
p=new V.G(-1,-1,1).I()
o=q.bn(new V.bG(1,2,4,6),V.hS(255,0,0),new V.X(-1,-1,0),new V.ab(0,1),p,j)
p=r.a
q=new V.G(1,-1,1).I()
n=p.bn(new V.bG(0,3,4,6),V.hS(0,0,255),new V.X(1,-1,0),new V.ab(1,1),q,j)
q=r.a
p=new V.G(1,1,1).I()
m=q.bn(new V.bG(0,2,5,6),V.hS(0,128,0),new V.X(1,1,0),new V.ab(1,0),p,j)
p=r.a
q=V.bf()
l=new V.G(-1,1,1).I()
k=p.bn(new V.bG(0,2,4,7),V.hS(255,255,0),new V.X(-1,1,0),q,l,j)
r.d.ho(H.c([o,n,m,k],t.j))
r.aD()
s.sbE(0,r)
i.e=s
i.sb8(j)
i.sbf(0,j)
i.saX(j)
return i},
cn:function cn(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
cr:function cr(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cx:function cx(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a4:function a4(){}},A={
o8:function(a,b){var s=a.ba,r=new A.em(b,s)
r.bG(b,s)
r.es(a,b)
return r},
o9:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="MaterialLight_"+a4.gau(a4)+a5.gau(a5)+a6.gau(a6)+a7.gau(a7)+a8.gau(a8)+a9.gau(a9)+b0.gau(b0)+b1.gau(b1)+b2.gau(b2)+"_"
b+=a?"1":"0"
b+=a0?"1":"0"
b+=a1?"1":"0"
b=b+"0_"+a3
s=b3.length
if(s>0){b+="_Bar"
for(r=0;r<b3.length;b3.length===s||(0,H.q)(b3),++r)b+="_"+H.f(b3[r].a)}s=b4.length
if(s>0){b+="_Dir"
for(r=0;r<b4.length;b4.length===s||(0,H.q)(b4),++r)b+="_"+H.f(b4[r].a)}s=b5.length
if(s>0){b+="_Point"
for(r=0;r<b5.length;b5.length===s||(0,H.q)(b5),++r)b+="_"+H.f(b5[r].a)}s=b6.length
if(s>0){b+="_Spot"
for(r=0;r<b6.length;b6.length===s||(0,H.q)(b6),++r)b+="_"+H.f(b6[r].a)}for(s=b3.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b3[r].b
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
c=$.an()
if(h){s=$.br()
c=new Z.bj(c.a|s.a)}if(g){s=$.bq()
c=new Z.bj(c.a|s.a)}if(f){s=$.bp()
c=new Z.bj(c.a|s.a)}return new A.iC(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
kA:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
kB:function(a,b,c){var s
A.kA(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hG(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
pD:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.kA(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
pz:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.kB(b,r,"ambient")
b.a+="\n"},
pB:function(a,b){var s,r=a.c
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.kB(b,r,"diffuse")
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
pE:function(a,b){var s,r=a.d
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.kB(b,r,"invDiffuse")
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
pK:function(a,b){var s,r=a.e
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.kB(b,r,"specular")
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
pG:function(a,b){var s,r,q
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
pI:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.kA(b,r,"reflect")
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
pJ:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.kA(b,r,"refract")
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
pA:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.f(s)
q=A.hG(r)
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
if(typeof s!=="number")return s.an()
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
c.a=p+"\n"}p=t.i
o=H.c([],p)
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
o=H.c([],p)
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
n=H.c([],p)
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
pC:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+H.f(s)
q=A.hG(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.an()
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
p=t.i
m=H.c([],p)
if(!a.b.a)l=!1
else l=!0
if(l)m.push("ambientColor")
if(a.dx){c.a+=u.k
k=H.c([],p)
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
pH:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.f(s)
q=A.hG(r)
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
if(typeof s!=="number")return s.an()
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
c.a=p+"\n"}p=t.i
j=H.c([],p)
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
j=H.c([],p)
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
i=H.c([],p)
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
pL:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.f(s)
q=A.hG(r)
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
if(typeof s!=="number")return s.an()
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
if(m){s=$.i6
if(s==null)s=$.i6=new E.fJ(E.mB(),E.mC())
p=c.a
if(s.b===C.C){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
c.a=s+"\n"}s=t.i
h=H.c([],s)
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
h=H.c([],s)
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
g=H.c([],s)
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
pF:function(a,b){var s,r
if(a.cy>0)return
s=b.a+="// === No Lights ===\n"
s+="\n"
b.a=s
s+="vec3 nonLightValues(vec3 norm)\n"
b.a=s
s+="{\n"
b.a=s
if(a.dx)b.a=s+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
r=H.c([],t.i)
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
pM:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.R("")
h.a="precision mediump float;\n"
h.a=j
s=a.k4
if(s){h.a=i
r=i}else r=j
if(a.r1){r+="varying vec3 binormalVec;\n"
h.a=r}if(a.r2){r+="varying vec2 txt2D;\n"
h.a=r}if(a.rx){r+="varying vec3 txtCube;\n"
h.a=r}if(a.k2){r+="varying vec3 objPos;\n"
h.a=r}r=h.a=(a.k3?h.a=r+"varying vec3 viewPos;\n":r)+"\n"
q=a.y1
if(q){r+="uniform mat4 colorMat;\n"
h.a=r}if(a.go){r+="uniform mat4 viewMat;\n"
h.a=r}if(a.dy)r=h.a=r+"uniform mat4 invViewMat;\n"
h.a=r+"\n"
A.pD(a,h)
A.pz(a,h)
A.pB(a,h)
A.pE(a,h)
A.pK(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.pI(a,h)
A.pJ(a,h)}A.pG(a,h)
p=h.a+="// === Alpha ===\n"
p=h.a=p+"\n"
o=a.y.a
if(o)p=h.a=p+"uniform float alpha;\n"
p+="float alphaValue()\n"
h.a=p
p=h.a=p+"{\n"
if(!o)n=!1
else n=!0
if(!n)p=h.a=p+"   return 1.0;\n"
else if(o){p+="   return alpha;\n"
h.a=p}p+="}\n"
h.a=p
h.a=p+"\n"
p=a.k1
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.q)(o),++m)A.pA(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.q)(o),++m)A.pC(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.q)(o),++m)A.pH(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.q)(o),++m)A.pL(a,o[m],h)
A.pF(a,h)}o=h.a+="// === Main ===\n"
o+="\n"
h.a=o
o+="void main()\n"
h.a=o
o+="{\n"
h.a=o
o=h.a=o+"   float alpha = alphaValue();\n"
s=s?h.a=o+"   vec3 norm = normal();\n":o
if(r)h.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
l=H.c([],t.i)
if(p){h.a+=u.o
l.push("lightAccum")
if(!a.b.a)s=!1
else s=!0
if(s)h.a+="   setAmbientColor();\n"
if(!a.c.a)s=!1
else s=!0
if(s)h.a+="   setDiffuseColor();\n"
if(!a.d.a)s=!1
else s=!0
if(s)h.a+="   setInvDiffuseColor();\n"
if(!a.e.a)s=!1
else s=!0
if(s)h.a+="   setSpecularColor();\n"
for(s=a.z,r=s.length,m=0;m<s.length;s.length===r||(0,H.q)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ai(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.q)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ai(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.q)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ai(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.q)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ai(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)s=!1
else s=!0
if(s)l.push("emissionColor()")
if(!a.r.a)s=!1
else s=!0
if(s)l.push("reflect(refl)")
if(!a.x.a)s=!1
else s=!0
if(s)l.push("refract(refl)")
if(l.length<=0)l.push("vec3(0.0, 0.0, 0.0)")
s=h.a+="   vec4 objClr = vec4("+C.b.j(l," + ")+", alpha);\n"
if(q)s=h.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
h.a=s
s=h.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
pN:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.bp+"];\n"
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
pP:function(a,b){var s
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
pO:function(a,b){var s
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
pR:function(a,b){var s,r
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
pS:function(a,b){var s,r
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
pQ:function(a,b){var s
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
pT:function(a,b){var s
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
hG:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.ai(a,1)},
ld:function(a,b,c,d,e){var s=new A.jx(a,c,e)
s.f=d
P.iu(d,0,!1,t.e)
return s},
dO:function dO(a,b,c){this.a=a
this.b=b
this.c=c},
hK:function hK(a){this.a=a},
a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},
e1:function e1(a,b){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
em:function em(a,b){var _=this
_.iE=_.iD=_.bq=_.ba=_.bp=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iR=_.iQ=_.iP=_.cl=_.ck=_.cj=_.ci=_.cg=_.cf=_.ce=_.cd=_.iO=_.iN=_.dQ=_.iM=_.iL=_.dP=_.dO=_.iK=_.iJ=_.dN=_.dM=_.iI=_.iH=_.dL=_.iG=_.iF=_.dK=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dS:function dS(a,b){this.a=a
this.b=b},
e0:function e0(a,b){this.a=a
this.b=b},
eH:function eH(a,b){this.a=a
this.b=b},
eV:function eV(a,b){this.a=a
this.b=b},
iC:function iC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.bp=b5
_.ba=b6
_.bq=b7},
d0:function d0(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d1:function d1(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d3:function d3(a,b,c,d,e,f,g,h,i,j){var _=this
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
d4:function d4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bH:function bH(){},
eQ:function eQ(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ff:function ff(){},
jC:function jC(a){this.a=a},
fh:function fh(a,b,c){this.a=a
this.c=b
this.d=c},
jz:function jz(a,b,c){this.a=a
this.c=b
this.d=c},
jA:function jA(a,b,c){this.a=a
this.c=b
this.d=c},
jB:function jB(a,b,c){this.a=a
this.c=b
this.d=c},
jx:function jx(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
fg:function fg(a,b,c){this.a=a
this.c=b
this.d=c},
jy:function jy(a,b,c){this.a=a
this.c=b
this.d=c},
fi:function fi(a,b,c){this.a=a
this.c=b
this.d=c},
fj:function fj(a,b,c){this.a=a
this.c=b
this.d=c},
jD:function jD(a,b,c){this.a=a
this.c=b
this.d=c},
fk:function fk(a,b,c){this.a=a
this.c=b
this.d=c},
d2:function d2(a,b,c){this.a=a
this.c=b
this.d=c},
fl:function fl(a,b,c){this.a=a
this.c=b
this.d=c},
fm:function fm(a,b,c){this.a=a
this.c=b
this.d=c}},F={
qy:function(){return F.qd(15,30,0.5,1,new F.kQ())},
qd:function(a,b,c,d,e){var s=F.qv(a,b,new F.kE(e,d,b,c))
if(s==null)return null
s.aD()
s.hY(new F.jZ(),new F.iU())
return s},
qv:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.mk()
r=H.c([],t.j)
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.jT(e,e,new V.aB(n,0,0,1),e,e,new V.ab(p,1),e,e,0)
o.n(0,m)
c.$3(m,p,0)
r.push(m.dF(e))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.jT(e,e,new V.aB(h,g,f,1),e,e,new V.ab(p,k),e,e,0)
i.n(0,m)
c.$3(m,p,l)
r.push(m.dF(e))}}s.d.hp(a+1,b+1,r)
return s},
e4:function(a,b,c){var s=new F.e3(),r=a.a
if(r==null)H.r(P.v("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.r(P.v("May not create a face with vertices attached to different shapes."))
s.h7(a)
s.h8(b)
s.h9(c)
s.a.a.d.b.push(s)
s.a.a.al()
return s},
mk:function(){var s=new F.j4(),r=new F.jU(s)
r.b=!1
r.c=H.c([],t.j)
s.a=r
r=new F.j7()
r.b=H.c([],t.p)
s.b=r
r=new F.j6(s)
r.b=H.c([],t.L)
s.c=r
r=new F.j5(s)
r.b=H.c([],t.b)
s.d=r
s.e=null
return s},
jT:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.ft(),p=new F.k1()
p.b=H.c([],t.p)
q.b=p
p=new F.jY()
s=t.L
p.b=H.c([],s)
p.c=H.c([],s)
q.c=p
p=new F.jV()
s=t.b
p.b=H.c([],s)
p.c=H.c([],s)
p.d=H.c([],s)
q.d=p
h=$.nt()
q.e=0
p=$.an()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.br().a)!==0?e:r
q.x=(s&$.bq().a)!==0?b:r
q.y=(s&$.b5().a)!==0?f:r
q.z=(s&$.bP().a)!==0?g:r
q.Q=(s&$.nu().a)!==0?c:r
q.ch=(s&$.cl().a)!==0?i:0
q.cx=(s&$.bp().a)!==0?a:r
return q},
kQ:function kQ(){},
kE:function kE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e3:function e3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ib:function ib(){},
jc:function jc(){},
iq:function iq(){},
ir:function ir(){},
jw:function jw(){},
iW:function iW(){},
j4:function j4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
j5:function j5(a){this.a=a
this.b=null},
j6:function j6(a){this.a=a
this.b=null},
j7:function j7(){this.b=null},
ft:function ft(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
k3:function k3(a){this.a=a},
k2:function k2(a){this.a=a},
jU:function jU(a){this.a=a
this.c=this.b=null},
jV:function jV(){this.d=this.c=this.b=null},
jW:function jW(a,b){this.a=a
this.b=b},
jX:function jX(a,b){this.a=a
this.b=b},
jY:function jY(){this.c=this.b=null},
k_:function k_(){},
jZ:function jZ(){},
k0:function k0(){},
iU:function iU(){},
k1:function k1(){this.b=null}},T={
lb:function(a){var s=new T.jj()
s.a=0
s.b=a
s.d=s.c=!1
s.x=s.r=s.f=s.e=0
return s},
f8:function f8(){},
jf:function jf(){},
jj:function jj(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jk:function jk(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
jl:function jl(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
jn:function jn(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jm:function jm(a,b,c,d,e,f,g){var _=this
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
H.l4.prototype={}
J.a.prototype={
u:function(a,b){return a===b},
gP:function(a){return H.cV(a)},
i:function(a){return"Instance of '"+H.f(H.eI(a))+"'"}}
J.ed.prototype={
i:function(a){return String(a)},
gP:function(a){return a?519018:218159},
$iaz:1}
J.cE.prototype={
u:function(a,b){return null==b},
i:function(a){return"null"},
gP:function(a){return 0}}
J.bc.prototype={
gP:function(a){return 0},
i:function(a){return String(a)},
$ilX:1}
J.eC.prototype={}
J.bJ.prototype={}
J.aE.prototype={
i:function(a){var s=a[$.ng()]
if(s==null)return this.ep(a)
return"JavaScript function for "+H.f(J.ao(s))},
$iaC:1}
J.w.prototype={
cE:function(a,b){if(!!a.fixed$length)H.r(P.A("removeAt"))
if(b<0||b>=a.length)throw H.b(P.eJ(b,null))
return a.splice(b,1)[0]},
R:function(a,b){var s
if(!!a.fixed$length)H.r(P.A("remove"))
for(s=0;s<a.length;++s)if(J.I(a[s],b)){a.splice(s,1)
return!0}return!1},
ab:function(a,b){var s,r
if(!!a.fixed$length)H.r(P.A("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.q)(b),++r)a.push(b[r])},
A:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.b(P.aO(a))}},
j:function(a,b){var s,r,q=P.iu(a.length,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.f(a[s])
if(s>=q.length)return H.d(q,s)
q[s]=r}return q.join(b)},
hU:function(a){return this.j(a,"")},
hO:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.b(P.aO(a))}return s},
hP:function(a,b,c){return this.hO(a,b,c,t.z)},
hN:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.b(P.aO(a))}throw H.b(H.il())},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ghM:function(a){if(a.length>0)return a[0]
throw H.b(H.il())},
gay:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.b(H.il())},
ds:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.b(P.aO(a))}return!1},
b0:function(a,b){if(!!a.immutable$list)H.r(P.A("sort"))
H.os(a,b==null?J.pq():b)},
el:function(a){return this.b0(a,null)},
F:function(a,b){var s
for(s=0;s<a.length;++s)if(J.I(a[s],b))return!0
return!1},
i:function(a){return P.l1(a,"[","]")},
gM:function(a){return new J.a5(a,a.length)},
gP:function(a){return H.cV(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.A("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.b(H.cj(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.r(P.A("indexed set"))
if(b>=a.length||b<0)throw H.b(H.cj(a,b))
a[b]=c},
$il:1,
$ih:1,
$in:1}
J.im.prototype={}
J.a5.prototype={
gw:function(a){return this.d},
t:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.b(H.q(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bC.prototype={
aV:function(a,b){var s
if(typeof b!="number")throw H.b(H.ay(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbt(b)
if(this.gbt(a)===s)return 0
if(this.gbt(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbt:function(a){return a===0?1/a<0:a<0},
ip:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.b(P.A(""+a+".toInt()"))},
cn:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.b(P.A(""+a+".floor()"))},
Z:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.A(""+a+".round()"))},
eb:function(a,b){var s
if(b>20)throw H.b(P.a3(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbt(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gP:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
bh:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
er:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dj(a,b)},
a8:function(a,b){return(a|0)===a?a/b|0:this.dj(a,b)},
dj:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.b(P.A("Result of truncating division is "+H.f(s)+": "+H.f(a)+" ~/ "+b))},
aR:function(a,b){var s
if(a>0)s=this.di(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hd:function(a,b){if(b<0)throw H.b(H.ay(b))
return this.di(a,b)},
di:function(a,b){return b>31?0:a>>>b},
$ia_:1,
$iQ:1}
J.cD.prototype={$ik:1}
J.cC.prototype={}
J.aS.prototype={
V:function(a,b){if(b<0)throw H.b(H.cj(a,b))
if(b>=a.length)H.r(H.cj(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.b(H.cj(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!="string")throw H.b(P.lI(b,null,null))
return a+b},
aW:function(a,b,c,d){var s,r,q=P.bg(b,c,a.length)
if(!H.bM(q))H.r(H.ay(q))
s=a.substring(0,b)
r=a.substring(q)
return s+d+r},
ad:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a3(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
aa:function(a,b){return this.ad(a,b,0)},
q:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.eJ(b,null))
if(b>c)throw H.b(P.eJ(b,null))
if(c>a.length)throw H.b(P.eJ(c,null))
return a.substring(b,c)},
ai:function(a,b){return this.q(a,b,null)},
is:function(a){return a.toLowerCase()},
v:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.Q)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
aG:function(a,b){var s=b-a.length
if(s<=0)return a
return this.v(" ",s)+a},
br:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a3(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dV:function(a,b){return this.br(a,b,0)},
hw:function(a,b,c){var s=a.length
if(c>s)throw H.b(P.a3(c,0,s,null,null))
return H.nc(a,b,c)},
F:function(a,b){return this.hw(a,b,0)},
aV:function(a,b){var s
if(typeof b!="string")throw H.b(H.ay(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gP:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gl:function(a){return a.length},
$iy:1}
H.eh.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.o.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.V(this.a,b)}}
H.l.prototype={}
H.cJ.prototype={
gM:function(a){return new H.bd(this,this.gl(this))},
bC:function(a,b){return this.eo(0,b)}}
H.bd.prototype={
gw:function(a){var s=this.d
return s},
t:function(){var s,r=this,q=r.a,p=J.b3(q),o=p.gl(q)
if(r.b!=o)throw H.b(P.aO(q))
s=r.c
if(typeof o!=="number")return H.u(o)
if(s>=o){r.d=null
return!1}r.d=p.G(q,s);++r.c
return!0}}
H.aU.prototype={
gM:function(a){return new H.ek(J.b6(this.a),this.b)},
gl:function(a){return J.aM(this.a)},
G:function(a,b){return this.b.$1(J.hH(this.a,b))}}
H.cv.prototype={$il:1}
H.ek.prototype={
t:function(){var s=this,r=s.b
if(r.t()){s.a=s.c.$1(r.gw(r))
return!0}s.a=null
return!1},
gw:function(a){var s=this.a
return s}}
H.cN.prototype={
gl:function(a){return J.aM(this.a)},
G:function(a,b){return this.b.$1(J.hH(this.a,b))}}
H.b1.prototype={
gM:function(a){return new H.fw(J.b6(this.a),this.b)}}
H.fw.prototype={
t:function(){var s,r
for(s=this.a,r=this.b;s.t();)if(r.$1(s.gw(s)))return!0
return!1},
gw:function(a){var s=this.a
return s.gw(s)}}
H.cy.prototype={}
H.fp.prototype={
m:function(a,b,c){throw H.b(P.A("Cannot modify an unmodifiable list"))}}
H.c8.prototype={}
H.cp.prototype={
i:function(a){return P.l8(this)},
m:function(a,b,c){H.nT()},
$iH:1}
H.cq.prototype={
gl:function(a){return this.a},
c8:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.c8(0,b))return null
return this.d2(b)},
d2:function(a){return this.b[a]},
A:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.d2(q))}}}
H.ju.prototype={
aq:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.ew.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.ef.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.f(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.f(r.a)+")"
return q+p+"' on '"+s+"' ("+H.f(r.a)+")"}}
H.fo.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.iV.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.hc.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bv.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.ne(r==null?"unknown":r)+"'"},
$iaC:1,
giv:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.f4.prototype={}
H.eY.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.ne(s)+"'"}}
H.bS.prototype={
u:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bS))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gP:function(a){var s,r=this.c
if(r==null)s=H.cV(this.a)
else s=typeof r!=="object"?J.af(r):H.cV(r)
return(s^H.cV(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.eI(s))+"'")}}
H.eN.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.C.prototype={
gl:function(a){return this.a},
gbs:function(a){return this.a===0},
ga4:function(a){return new H.cG(this,H.dA(this).H("cG<1>"))},
giu:function(a){var s=this,r=H.dA(s)
return H.o7(s.ga4(s),new H.io(s),r.c,r.Q[1])},
c8:function(a,b){var s=this.b
if(s==null)return!1
return this.eO(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bl(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bl(p,b)
q=r==null?n:r.b
return q}else return o.hS(b)},
hS:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.d3(p,q.dW(a))
r=q.dX(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cX(s==null?q.b=q.bX():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cX(r==null?q.c=q.bX():r,b,c)}else q.hT(b,c)},
hT:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bX()
s=p.dW(a)
r=p.d3(o,s)
if(r==null)p.c_(o,s,[p.bY(a,b)])
else{q=p.dX(r,a)
if(q>=0)r[q].b=b
else r.push(p.bY(a,b))}},
A:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.b(P.aO(s))
r=r.c}},
cX:function(a,b,c){var s=this.bl(a,b)
if(s==null)this.c_(a,b,this.bY(b,c))
else s.b=c},
eZ:function(){this.r=this.r+1&67108863},
bY:function(a,b){var s,r=this,q=new H.is(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.eZ()
return q},
dW:function(a){return J.af(a)&0x3ffffff},
dX:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.I(a[r].a,b))return r
return-1},
i:function(a){return P.l8(this)},
bl:function(a,b){return a[b]},
d3:function(a,b){return a[b]},
c_:function(a,b,c){a[b]=c},
eS:function(a,b){delete a[b]},
eO:function(a,b){return this.bl(a,b)!=null},
bX:function(){var s="<non-identifier-key>",r=Object.create(null)
this.c_(r,s,r)
this.eS(r,s)
return r}}
H.io.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.dA(this.a).H("2(1)")}}
H.is.prototype={}
H.cG.prototype={
gl:function(a){return this.a.a},
gM:function(a){var s=this.a,r=new H.ej(s,s.r)
r.c=s.e
return r}}
H.ej.prototype={
gw:function(a){return this.d},
t:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.b(P.aO(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kH.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.kI.prototype={
$2:function(a,b){return this.a(a,b)}}
H.kJ.prototype={
$1:function(a){return this.a(a)}}
H.ee.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imf:1}
H.cQ.prototype={$icQ:1}
H.W.prototype={$iW:1}
H.c0.prototype={
gl:function(a){return a.length},
$iz:1}
H.bF.prototype={
h:function(a,b){H.b2(b,a,a.length)
return a[b]},
m:function(a,b,c){H.b2(b,a,a.length)
a[b]=c},
$il:1,
$ih:1,
$in:1}
H.cR.prototype={
m:function(a,b,c){H.b2(b,a,a.length)
a[b]=c},
$il:1,
$ih:1,
$in:1}
H.er.prototype={
h:function(a,b){H.b2(b,a,a.length)
return a[b]}}
H.es.prototype={
h:function(a,b){H.b2(b,a,a.length)
return a[b]}}
H.et.prototype={
h:function(a,b){H.b2(b,a,a.length)
return a[b]}}
H.eu.prototype={
h:function(a,b){H.b2(b,a,a.length)
return a[b]}}
H.ev.prototype={
h:function(a,b){H.b2(b,a,a.length)
return a[b]}}
H.cS.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b2(b,a,a.length)
return a[b]}}
H.c1.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b2(b,a,a.length)
return a[b]},
$ic1:1,
$ibi:1}
H.dg.prototype={}
H.dh.prototype={}
H.di.prototype={}
H.dj.prototype={}
H.at.prototype={
H:function(a){return H.hq(v.typeUniverse,this,a)},
b2:function(a){return H.p_(v.typeUniverse,this,a)}}
H.fP.prototype={}
H.fK.prototype={
i:function(a){return this.a}}
H.dt.prototype={}
P.k5.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:17}
P.k4.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.k6.prototype={
$0:function(){this.a.$0()}}
P.k7.prototype={
$0:function(){this.a.$0()}}
P.ds.prototype={
eB:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ci(new P.ko(this,b),0),a)
else throw H.b(P.A("`setTimeout()` not found."))},
eC:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ci(new P.kn(this,a,Date.now(),b),0),a)
else throw H.b(P.A("Periodic timer."))},
$icZ:1}
P.ko.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.kn.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.er(s,o)}q.c=p
r.d.$1(q)}}
P.cd.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.bK.prototype={
gw:function(a){var s=this.c
if(s==null)return this.b
return s.gw(s)},
t:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.t())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.cd){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.b6(s)
if(o instanceof P.bK){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dp.prototype={
gM:function(a){return new P.bK(this.a())}}
P.fx.prototype={}
P.cX.prototype={}
P.f_.prototype={}
P.cZ.prototype={}
P.kv.prototype={}
P.kC.prototype={
$0:function(){var s=H.b(this.a)
s.stack=J.ao(this.b)
throw s}}
P.kc.prototype={
il:function(a){var s,r,q,p=null
try{if(C.f===$.aK){a.$0()
return}P.pW(p,p,this,a)}catch(q){s=H.am(q)
r=H.ly(q)
P.mZ(p,p,this,s,r)}},
im:function(a,b){var s,r,q,p=null
try{if(C.f===$.aK){a.$1(b)
return}P.pX(p,p,this,a,b)}catch(q){s=H.am(q)
r=H.ly(q)
P.mZ(p,p,this,s,r)}},
io:function(a,b){return this.im(a,b,t.z)},
ht:function(a){return new P.kd(this,a)},
dw:function(a,b){return new P.ke(this,a,b)}}
P.kd.prototype={
$0:function(){return this.a.il(this.b)}}
P.ke.prototype={
$1:function(a){return this.a.io(this.b,a)},
$S:function(){return this.c.H("~(0)")}}
P.dc.prototype={
gM:function(a){var s=new P.dd(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
F:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.eL(b)
return r}},
eL:function(a){var s=this.d
if(s==null)return!1
return this.bO(s[this.bK(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cY(s==null?q.b=P.lg():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cY(r==null?q.c=P.lg():r,b)}else return q.eF(0,b)},
eF:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.lg()
s=q.bK(b)
r=p[s]
if(r==null)p[s]=[q.bJ(b)]
else{if(q.bO(r,b)>=0)return!1
r.push(q.bJ(b))}return!0},
R:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.fX(this.c,b)
else return this.fW(0,b)},
fW:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bK(b)
r=n[s]
q=o.bO(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dl(p)
return!0},
cY:function(a,b){if(a[b]!=null)return!1
a[b]=this.bJ(b)
return!0},
fX:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.dl(s)
delete a[b]
return!0},
cZ:function(){this.r=1073741823&this.r+1},
bJ:function(a){var s,r=this,q=new P.kb(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cZ()
return q},
dl:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cZ()},
bK:function(a){return J.af(a)&1073741823},
bO:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.I(a[r].a,b))return r
return-1}}
P.kb.prototype={}
P.dd.prototype={
gw:function(a){return this.d},
t:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.b(P.aO(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cB.prototype={}
P.it.prototype={
$2:function(a,b){this.a.m(0,this.b.a(a),this.c.a(b))},
$S:3}
P.cI.prototype={$il:1,$ih:1,$in:1}
P.i.prototype={
gM:function(a){return new H.bd(a,this.gl(a))},
G:function(a,b){return this.h(a,b)},
A:function(a,b){var s,r=this.gl(a)
if(typeof r!=="number")return H.u(r)
s=0
for(;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gl(a))throw H.b(P.aO(a))}},
gbs:function(a){return this.gl(a)===0},
ir:function(a,b){var s,r,q,p,o=this
if(o.gbs(a)){s=J.l2(0,H.bN(a).H("i.E"))
return s}r=o.h(a,0)
q=P.iu(o.gl(a),r,!0,H.bN(a).H("i.E"))
p=1
while(!0){s=o.gl(a)
if(typeof s!=="number")return H.u(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s;++p}return q},
iq:function(a){return this.ir(a,!0)},
hK:function(a,b,c,d){var s
P.bg(b,c,this.gl(a))
for(s=b;s<c;++s)this.m(a,s,d)},
i:function(a){return P.l1(a,"[","]")}}
P.cL.prototype={}
P.iy.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.f(a)
r.a=s+": "
r.a+=H.f(b)},
$S:18}
P.U.prototype={
A:function(a,b){var s,r
for(s=J.b6(this.ga4(a));s.t();){r=s.gw(s)
b.$2(r,this.h(a,r))}},
gl:function(a){return J.aM(this.ga4(a))},
i:function(a){return P.l8(a)},
$iH:1}
P.hr.prototype={
m:function(a,b,c){throw H.b(P.A("Cannot modify unmodifiable map"))}}
P.cM.prototype={
h:function(a,b){return J.cm(this.a,b)},
m:function(a,b,c){J.kR(this.a,b,c)},
A:function(a,b){J.kT(this.a,b)},
gl:function(a){return J.aM(this.a)},
i:function(a){return J.ao(this.a)},
$iH:1}
P.c9.prototype={}
P.dk.prototype={
ab:function(a,b){var s
for(s=J.b6(b);s.t();)this.n(0,s.gw(s))},
i:function(a){return P.l1(this,"{","}")},
G:function(a,b){var s,r,q,p="index"
P.nK(b,p)
P.me(b,p)
for(s=P.oK(this,this.r),r=0;s.t();){q=s.d
if(b===r)return q;++r}throw H.b(P.O(b,this,p,null,r))},
$il:1,
$ih:1}
P.de.prototype={}
P.dx.prototype={}
P.jN.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.am(r)}return null}}
P.jO.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.am(r)}return null}}
P.hO.prototype={
hZ:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a3=P.bg(a2,a3,a1.length)
if(a3==null)throw H.b(P.md("Invalid range"))
s=$.nw()
for(r=a2,q=r,p=null,o=-1,n=-1,m=0;r<a3;r=l){l=r+1
k=C.a.D(a1,r)
if(k===37){j=l+2
if(j<=a3){i=H.kG(C.a.D(a1,l))
h=H.kG(C.a.D(a1,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.d(s,g)
f=s[g]
if(f>=0){g=C.a.V("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?null:p.a.length
if(e==null)e=0
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new P.R("")
e=p}else e=p
d=e.a+=C.a.q(a1,q,r)
e.a=d+H.as(k)
q=l
continue}}throw H.b(P.a2("Invalid base64 data",a1,r))}if(p!=null){e=p.a+=C.a.q(a1,q,a3)
d=e.length
if(o>=0)P.lJ(a1,n,a3,o,m,d)
else{c=C.c.bh(d-1,4)+1
if(c===1)throw H.b(P.a2(a,a1,a3))
for(;c<4;){e+="="
p.a=e;++c}}e=p.a
return C.a.aW(a1,a2,a3,e.charCodeAt(0)==0?e:e)}b=a3-a2
if(o>=0)P.lJ(a1,n,a3,o,m,b)
else{c=C.c.bh(b,4)
if(c===1)throw H.b(P.a2(a,a1,a3))
if(c>1)a1=C.a.aW(a1,a3,a3,c===2?"==":"=")}return a1}}
P.hP.prototype={}
P.dV.prototype={}
P.dX.prototype={}
P.i5.prototype={}
P.ij.prototype={
i:function(a){return this.a}}
P.ii.prototype={
eP:function(a,b,c){var s,r,q,p,o,n,m=null
for(s=this.a,r=s.e,q=s.d,s=s.c,p=b,o=m;p<c;++p){if(p>=a.length)return H.d(a,p)
switch(a[p]){case"&":n="&amp;"
break
case'"':n=s?"&quot;":m
break
case"'":n=q?"&#39;":m
break
case"<":n="&lt;"
break
case">":n="&gt;"
break
case"/":n=r?"&#47;":m
break
default:n=m}if(n!=null){if(o==null)o=new P.R("")
if(p>b)o.a+=C.a.q(a,b,p)
o.a+=n
b=p+1}}if(o==null)return m
if(c>b)o.a+=J.nI(a,b,c)
s=o.a
return s.charCodeAt(0)==0?s:s}}
P.jL.prototype={
ghJ:function(){return C.R}}
P.jP.prototype={
c9:function(a){var s,r,q,p=P.bg(0,null,a.length)
if(p==null)throw H.b(P.md("Invalid range"))
s=p-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.kt(r)
if(q.eU(a,0,p)!==p){J.nD(a,p-1)
q.c2()}return new Uint8Array(r.subarray(0,H.pi(0,q.b,r.length)))}}
P.kt.prototype={
c2:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
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
r[q]=240|s>>>18
q=n.b=p+1
if(p>=o)return H.d(r,p)
r[p]=128|s>>>12&63
p=n.b=q+1
if(q>=o)return H.d(r,q)
r[q]=128|s>>>6&63
n.b=p+1
if(p>=o)return H.d(r,p)
r[p]=128|s&63
return!0}else{n.c2()
return!1}},
eU:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.V(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.D(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.hl(p,C.a.D(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.c2()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.d(s,o)
s[o]=192|p>>>6
l.b=m+1
s[m]=128|p&63}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.d(s,o)
s[o]=224|p>>>12
o=l.b=m+1
if(m>=r)return H.d(s,m)
s[m]=128|p>>>6&63
l.b=o+1
if(o>=r)return H.d(s,o)
s[o]=128|p&63}}}return q}}
P.jM.prototype={
c9:function(a){var s=this.a,r=P.oy(s,a,0,null)
if(r!=null)return r
return new P.ks(s).hx(a,0,null,!0)}}
P.ks.prototype={
hx:function(a,b,c,d){var s,r,q,p,o=this,n=P.bg(b,c,J.aM(a))
if(b===n)return""
s=P.pe(a,b,n)
if(typeof n!=="number")return n.a_()
n-=b
r=o.bL(s,0,n,!0)
q=o.b
if((q&1)!==0){p=P.pf(q)
o.b=0
throw H.b(P.a2(p,a,b+o.c))}return r},
bL:function(a,b,c,d){var s,r,q=this
if(typeof c!=="number")return c.a_()
if(c-b>1000){s=C.c.a8(b+c,2)
r=q.bL(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bL(a,s,c,d)}return q.hB(a,b,c,d)},
hB:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.R(""),f=b+1,e=a.length
if(b<0||b>=e)return H.d(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.D("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.D(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.as(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.as(j)
break
case 65:g.a+=H.as(j);--f
break
default:p=g.a+=H.as(j)
g.a=p+H.as(j)
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
g.a+=H.as(a[l])}else g.a+=P.f1(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.as(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.az.prototype={}
P.ah.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.ah&&this.a===b.a&&!0},
aV:function(a,b){return C.c.aV(this.a,b.a)},
gP:function(a){var s=this.a
return(s^C.c.aR(s,30))&1073741823},
i:function(a){var s=this,r=P.nU(H.oi(s)),q=P.e_(H.og(s)),p=P.e_(H.oc(s)),o=P.e_(H.od(s)),n=P.e_(H.of(s)),m=P.e_(H.oh(s)),l=P.nV(H.oe(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.a_.prototype={}
P.bx.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.bx&&this.a===b.a},
gP:function(a){return C.c.gP(this.a)},
aV:function(a,b){return C.c.aV(this.a,b.a)},
i:function(a){var s,r,q,p=new P.i2(),o=this.a
if(o<0)return"-"+new P.bx(0-o).i(0)
s=p.$1(C.c.a8(o,6e7)%60)
r=p.$1(C.c.a8(o,1e6)%60)
q=new P.i1().$1(o%1e6)
return""+C.c.a8(o,36e8)+":"+H.f(s)+":"+H.f(r)+"."+H.f(q)}}
P.i1.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.i2.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.L.prototype={}
P.dN.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.i8(s)
return"Assertion failed"}}
P.ex.prototype={
i:function(a){return"Throw of null."}}
P.ag.prototype={
gbN:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbM:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbN()+o+m
if(!q.a)return l
s=q.gbM()
r=P.i8(q.b)
return l+s+": "+r}}
P.c4.prototype={
gbN:function(){return"RangeError"},
gbM:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.f(q):""
else if(q==null)s=": Not greater than or equal to "+H.f(r)
else if(q>r)s=": Not in inclusive range "+H.f(r)+".."+H.f(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.f(r)
return s}}
P.eb.prototype={
gbN:function(){return"RangeError"},
gbM:function(){var s,r=this.b
if(typeof r!=="number")return r.ah()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.f(s)},
gl:function(a){return this.f}}
P.fq.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fn.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.c6.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dW.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.i8(s)+"."}}
P.eA.prototype={
i:function(a){return"Out of Memory"},
$iL:1}
P.cW.prototype={
i:function(a){return"Stack Overflow"},
$iL:1}
P.dY.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.fM.prototype={
i:function(a){return"Exception: "+this.a}}
P.ie.prototype={
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
i=""}h=C.a.q(d,k,l)
return f+j+h+i+"\n"+C.a.v(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.f(e)+")"):f}}
P.aC.prototype={}
P.k.prototype={}
P.h.prototype={
bC:function(a,b){return new H.b1(this,b,H.dA(this).H("b1<h.E>"))},
gl:function(a){var s,r=this.gM(this)
for(s=0;r.t();)++s
return s},
gaL:function(a){var s,r=this.gM(this)
if(!r.t())throw H.b(H.il())
s=r.gw(r)
if(r.t())throw H.b(H.nZ())
return s},
G:function(a,b){var s,r,q
P.me(b,"index")
for(s=this.gM(this),r=0;s.t();){q=s.gw(s)
if(b===r)return q;++r}throw H.b(P.O(b,this,"index",null,r))},
i:function(a){return P.nY(this,"(",")")}}
P.ec.prototype={}
P.n.prototype={$il:1,$ih:1}
P.H.prototype={}
P.ar.prototype={
gP:function(a){return P.N.prototype.gP.call(C.j,this)},
i:function(a){return"null"}}
P.Q.prototype={}
P.N.prototype={constructor:P.N,$iN:1,
u:function(a,b){return this===b},
gP:function(a){return H.cV(this)},
i:function(a){return"Instance of '"+H.f(H.eI(this))+"'"},
toString:function(){return this.i(this)}}
P.y.prototype={}
P.R.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jJ.prototype={
$2:function(a,b){var s,r,q,p=J.dF(b).dV(b,"=")
if(p===-1){if(b!=="")J.kR(a,P.lp(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.q(b,0,p)
r=C.a.ai(b,p+1)
q=this.a
J.kR(a,P.lp(s,0,s.length,q,!0),P.lp(r,0,r.length,q,!0))}return a}}
P.jG.prototype={
$2:function(a,b){throw H.b(P.a2("Illegal IPv4 address, "+a,this.a,b))}}
P.jH.prototype={
$2:function(a,b){throw H.b(P.a2("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.jI.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.hF(C.a.q(this.b,a,b),16)
if(typeof s!=="number")return s.ah()
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s}}
P.bL.prototype={
gc1:function(){var s,r,q,p=this,o=p.x
if(o==null){o=p.a
s=o.length!==0?o+":":""
r=p.c
q=r==null
if(!q||o==="file"){o=s+"//"
s=p.b
if(s.length!==0)o=o+s+"@"
if(!q)o+=r
s=p.d
if(s!=null)o=o+":"+H.f(s)}else o=s
o+=p.e
s=p.f
if(s!=null)o=o+"?"+s
s=p.r
if(s!=null)o=o+"#"+s
o=o.charCodeAt(0)==0?o:o
if(p.x==null)p.x=o
else o=H.r(H.l6("Field '_text' has been assigned during initialization."))}return o},
gP:function(a){var s=this,r=s.z
if(r==null){r=C.a.gP(s.gc1())
if(s.z==null)s.z=r
else r=H.r(H.l6("Field 'hashCode' has been assigned during initialization."))}return r},
gcD:function(){var s=this,r=s.Q
if(r==null){r=new P.c9(P.mt(s.gbe(s)),t.U)
if(s.Q==null)s.Q=r
else r=H.r(H.l6("Field 'queryParameters' has been assigned during initialization."))}return r},
ged:function(){return this.b},
gcp:function(a){var s=this.c
if(s==null)return""
if(C.a.aa(s,"["))return C.a.q(s,1,s.length-1)
return s},
gbw:function(a){var s=this.d
return s==null?P.mP(this.a):s},
gbe:function(a){var s=this.f
return s==null?"":s},
gco:function(){var s=this.r
return s==null?"":s},
e6:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.aa(s,"/"))s="/"+s
q=s
p=P.ln(null,0,0,b)
return new P.bL(n,l,j,k,q,p,o.r)},
gdR:function(){return this.c!=null},
gdU:function(){return this.f!=null},
gdS:function(){return this.r!=null},
i:function(a){return this.gc1()},
u:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return t.R.b(b)&&s.a===b.gbD()&&s.c!=null===b.gdR()&&s.b===b.ged()&&s.gcp(s)===b.gcp(b)&&s.gbw(s)===b.gbw(b)&&s.e===b.ge4(b)&&s.f!=null===b.gdU()&&s.gbe(s)===b.gbe(b)&&s.r!=null===b.gdS()&&s.gco()===b.gco()},
$ifr:1,
gbD:function(){return this.a},
ge4:function(a){return this.e}}
P.kq.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=H.f(P.kr(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=H.f(P.kr(C.h,b,C.e,!0))}}}
P.kp.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.b6(b),r=this.a;s.t();)r.$2(a,s.gw(s))}}
P.jF.prototype={
gec:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.d(m,0)
s=o.a
m=m[0]+1
r=C.a.br(s,"?",m)
q=s.length
if(r>=0){p=P.dy(s,r+1,q,C.l,!1)
q=r}else p=n
m=o.c=new P.fD("data","",n,n,P.dy(s,m,q,C.A,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.kx.prototype={
$1:function(a){return new Uint8Array(96)}}
P.kw.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.d(s,a)
s=s[a]
J.nE(s,0,96,b)
return s},
$S:19}
P.ky.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=b.length,r=a.length,q=0;q<s;++q){p=C.a.D(b,q)^96
if(p>=r)return H.d(a,p)
a[p]=c}}}
P.kz.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=C.a.D(b,0),r=C.a.D(b,1),q=a.length;s<=r;++s){p=(s^96)>>>0
if(p>=q)return H.d(a,p)
a[p]=c}}}
P.h6.prototype={
gdR:function(){return this.c>0},
gdT:function(){return this.c>0&&this.d+1<this.e},
gdU:function(){return this.f<this.r},
gdS:function(){return this.r<this.a.length},
gd4:function(){return this.b===4&&C.a.aa(this.a,"http")},
gd5:function(){return this.b===5&&C.a.aa(this.a,"https")},
gbD:function(){var s=this.x
return s==null?this.x=this.eM():s},
eM:function(){var s=this,r=s.b
if(r<=0)return""
if(s.gd4())return"http"
if(s.gd5())return"https"
if(r===4&&C.a.aa(s.a,"file"))return"file"
if(r===7&&C.a.aa(s.a,"package"))return"package"
return C.a.q(s.a,0,r)},
ged:function(){var s=this.c,r=this.b+3
return s>r?C.a.q(this.a,r,s-1):""},
gcp:function(a){var s=this.c
return s>0?C.a.q(this.a,s,this.d):""},
gbw:function(a){var s=this
if(s.gdT())return P.hF(C.a.q(s.a,s.d+1,s.e),null)
if(s.gd4())return 80
if(s.gd5())return 443
return 0},
ge4:function(a){return C.a.q(this.a,this.e,this.f)},
gbe:function(a){var s=this.f,r=this.r
return s<r?C.a.q(this.a,s+1,r):""},
gco:function(){var s=this.r,r=this.a
return s<r.length?C.a.ai(r,s+1):""},
gcD:function(){var s=this
if(s.f>=s.r)return C.a0
return new P.c9(P.mt(s.gbe(s)),t.U)},
e6:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbD(),k=l==="file",j=n.c,i=j>0?C.a.q(n.a,n.b+3,j):"",h=n.gdT()?n.gbw(n):m
j=n.c
if(j>0)s=C.a.q(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.q(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.aa(r,"/"))r="/"+r
p=P.ln(m,0,0,b)
q=n.r
o=q<j.length?C.a.ai(j,q+1):m
return new P.bL(l,i,s,h,r,p,o)},
gP:function(a){var s=this.y
return s==null?this.y=C.a.gP(this.a):s},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifr:1}
P.fD.prototype={}
W.p.prototype={}
W.hI.prototype={
gl:function(a){return a.length}}
W.dL.prototype={
i:function(a){return String(a)}}
W.dM.prototype={
i:function(a){return String(a)}}
W.bR.prototype={$ibR:1}
W.bs.prototype={$ibs:1}
W.bt.prototype={$ibt:1}
W.bu.prototype={
cM:function(a,b,c){if(c!=null)return a.getContext(b,P.qa(c))
return a.getContext(b)},
ef:function(a,b){return this.cM(a,b,null)},
$ibu:1}
W.aA.prototype={
gl:function(a){return a.length}}
W.hU.prototype={
gl:function(a){return a.length}}
W.J.prototype={$iJ:1}
W.cs.prototype={
gl:function(a){return a.length}}
W.hV.prototype={}
W.ap.prototype={}
W.aP.prototype={}
W.hW.prototype={
gl:function(a){return a.length}}
W.hX.prototype={
gl:function(a){return a.length}}
W.hY.prototype={
gl:function(a){return a.length}}
W.ba.prototype={$iba:1}
W.i_.prototype={
i:function(a){return String(a)}}
W.ct.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iz:1,
$ih:1,
$in:1}
W.cu.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gar(a))+" x "+H.f(this.gap(a))},
u:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.aL(b)
s=a.left==s.gbu(b)&&a.top==s.gbz(b)&&this.gar(a)==s.gar(b)&&this.gap(a)==s.gap(b)}else s=!1
return s},
gP:function(a){return W.mG(J.af(a.left),J.af(a.top),J.af(this.gar(a)),J.af(this.gap(a)))},
gdz:function(a){return a.bottom},
gap:function(a){return a.height},
gbu:function(a){return a.left},
gcI:function(a){return a.right},
gbz:function(a){return a.top},
gar:function(a){return a.width},
$ia8:1}
W.e2.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iz:1,
$ih:1,
$in:1}
W.i0.prototype={
gl:function(a){return a.length}}
W.fA.prototype={
gbs:function(a){return this.a.firstElementChild==null},
gl:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gM:function(a){var s=this.iq(this)
return new J.a5(s,s.length)}}
W.D.prototype={
ghs:function(a){return new W.fI(a)},
gdC:function(a){return new W.fA(a,a.children)},
gdD:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.ah()
if(q<0)q=-q*0
if(typeof p!=="number")return p.ah()
if(p<0)p=-p*0
return new P.a8(s,r,q,p,t.I)},
i:function(a){return a.localName},
ao:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.lT
if(s==null){s=H.c([],t.o)
r=new W.cU(s)
s.push(W.mE(null))
s.push(W.mK())
$.lT=r
d=r}else d=s
s=$.lS
if(s==null){s=new W.hs(d)
$.lS=s
c=s}else{s.a=d
c=s}}if($.bb==null){s=document
r=s.implementation.createHTMLDocument("")
$.bb=r
$.kZ=r.createRange()
r=$.bb.createElement("base")
t.D.a(r)
r.href=s.baseURI
$.bb.head.appendChild(r)}s=$.bb
if(s.body==null){r=s.createElement("body")
s.body=t.Y.a(r)}s=$.bb
if(t.Y.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.bb.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.b.F(C.Z,a.tagName)){$.kZ.selectNodeContents(q)
s=$.kZ
p=s.createContextualFragment(b)}else{q.innerHTML=b
p=$.bb.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.bb.body)J.lG(q)
c.cN(p)
document.adoptNode(p)
return p},
hz:function(a,b,c){return this.ao(a,b,c,null)},
eh:function(a,b){a.textContent=null
a.appendChild(this.ao(a,b,null,null))},
ge8:function(a){return a.tagName},
$iD:1}
W.i3.prototype={
$1:function(a){return t.h.b(a)}}
W.j.prototype={$ij:1}
W.e.prototype={
hn:function(a,b,c,d){if(c!=null)this.eG(a,b,c,!1)},
eG:function(a,b,c,d){return a.addEventListener(b,H.ci(c,1),!1)},
$ie:1}
W.ai.prototype={$iai:1}
W.bW.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iz:1,
$ih:1,
$in:1,
$ibW:1}
W.e5.prototype={
gl:function(a){return a.length}}
W.e7.prototype={
gl:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.ih.prototype={
gl:function(a){return a.length}}
W.bz.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iz:1,
$ih:1,
$in:1}
W.bA.prototype={
gdG:function(a){return a.data},
$ibA:1}
W.bB.prototype={$ibB:1}
W.bD.prototype={$ibD:1}
W.iw.prototype={
i:function(a){return String(a)}}
W.iO.prototype={
gl:function(a){return a.length}}
W.bY.prototype={$ibY:1}
W.eo.prototype={
h:function(a,b){return P.bo(a.get(b))},
A:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bo(s.value[1]))}},
ga4:function(a){var s=H.c([],t.s)
this.A(a,new W.iP(s))
return s},
gl:function(a){return a.size},
m:function(a,b,c){throw H.b(P.A("Not supported"))},
$iH:1}
W.iP.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ep.prototype={
h:function(a,b){return P.bo(a.get(b))},
A:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bo(s.value[1]))}},
ga4:function(a){var s=H.c([],t.s)
this.A(a,new W.iQ(s))
return s},
gl:function(a){return a.size},
m:function(a,b,c){throw H.b(P.A("Not supported"))},
$iH:1}
W.iQ.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aF.prototype={$iaF:1}
W.eq.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iz:1,
$ih:1,
$in:1}
W.aj.prototype={$iaj:1}
W.a1.prototype={
gaL:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.b(P.la("No elements"))
if(r>1)throw H.b(P.la("More than one element"))
s=s.firstChild
s.toString
return s},
ab:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q)}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b])},
gM:function(a){var s=this.a.childNodes
return new W.cz(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.x.prototype={
ig:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
ij:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.nB(s,b,a)}catch(q){H.am(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.en(a):s},
h0:function(a,b,c){return a.replaceChild(b,c)},
$ix:1}
W.cT.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iz:1,
$ih:1,
$in:1}
W.aG.prototype={
gl:function(a){return a.length},
$iaG:1}
W.eE.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iz:1,
$ih:1,
$in:1}
W.eM.prototype={
h:function(a,b){return P.bo(a.get(b))},
A:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bo(s.value[1]))}},
ga4:function(a){var s=H.c([],t.s)
this.A(a,new W.j2(s))
return s},
gl:function(a){return a.size},
m:function(a,b,c){throw H.b(P.A("Not supported"))},
$iH:1}
W.j2.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eO.prototype={
gl:function(a){return a.length}}
W.au.prototype={$iau:1}
W.eS.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iz:1,
$ih:1,
$in:1}
W.aH.prototype={$iaH:1}
W.eT.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iz:1,
$ih:1,
$in:1}
W.aI.prototype={
gl:function(a){return a.length},
$iaI:1}
W.eZ.prototype={
h:function(a,b){return a.getItem(H.lr(b))},
m:function(a,b,c){a.setItem(b,c)},
A:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga4:function(a){var s=H.c([],t.s)
this.A(a,new W.jd(s))
return s},
gl:function(a){return a.length},
$iH:1}
W.jd.prototype={
$2:function(a,b){return this.a.push(a)}}
W.av.prototype={$iav:1}
W.bh.prototype={$ibh:1}
W.cY.prototype={
ao:function(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.bF(a,b,c,d)
s=W.nW("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
s.toString
new W.a1(r).ab(0,new W.a1(s))
return r}}
W.f2.prototype={
ao:function(a,b,c,d){var s,r,q,p
if("createContextualFragment" in window.Range.prototype)return this.bF(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.E.ao(s.createElement("table"),b,c,d)
s.toString
s=new W.a1(s)
q=s.gaL(s)
q.toString
s=new W.a1(q)
p=s.gaL(s)
r.toString
p.toString
new W.a1(r).ab(0,new W.a1(p))
return r}}
W.f3.prototype={
ao:function(a,b,c,d){var s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bF(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.E.ao(s.createElement("table"),b,c,d)
s.toString
s=new W.a1(s)
q=s.gaL(s)
r.toString
q.toString
new W.a1(r).ab(0,new W.a1(q))
return r}}
W.c7.prototype={$ic7:1}
W.aw.prototype={$iaw:1}
W.ac.prototype={$iac:1}
W.f6.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iz:1,
$ih:1,
$in:1}
W.f7.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iz:1,
$ih:1,
$in:1}
W.jp.prototype={
gl:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.bI.prototype={$ibI:1}
W.fc.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iz:1,
$ih:1,
$in:1}
W.jt.prototype={
gl:function(a){return a.length}}
W.b0.prototype={}
W.jK.prototype={
i:function(a){return String(a)}}
W.fu.prototype={
gl:function(a){return a.length}}
W.bk.prototype={
ghD:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.A("deltaY is not supported"))},
ghC:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.b(P.A("deltaX is not supported"))},
$ibk:1}
W.ca.prototype={
h1:function(a,b){return a.requestAnimationFrame(H.ci(b,1))},
eT:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cb.prototype={$icb:1}
W.fB.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iz:1,
$ih:1,
$in:1}
W.da.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
u:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.aL(b)
s=a.left==s.gbu(b)&&a.top==s.gbz(b)&&a.width==s.gar(b)&&a.height==s.gap(b)}else s=!1
return s},
gP:function(a){return W.mG(J.af(a.left),J.af(a.top),J.af(a.width),J.af(a.height))},
gap:function(a){return a.height},
gar:function(a){return a.width}}
W.fQ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iz:1,
$ih:1,
$in:1}
W.df.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iz:1,
$ih:1,
$in:1}
W.h9.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iz:1,
$ih:1,
$in:1}
W.hg.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iz:1,
$ih:1,
$in:1}
W.fy.prototype={
A:function(a,b){var s,r,q,p,o
for(s=this.ga4(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
b.$2(o,q.getAttribute(o))}},
ga4:function(a){var s,r,q,p,o=this.a.attributes,n=H.c([],t.s)
for(s=o.length,r=t.gH,q=0;q<s;++q){if(q>=o.length)return H.d(o,q)
p=r.a(o[q])
if(p.namespaceURI==null)n.push(p.name)}return n}}
W.fI.prototype={
h:function(a,b){return this.a.getAttribute(H.lr(b))},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga4(this).length}}
W.l_.prototype={}
W.fL.prototype={
hk:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.nC(s,this.c,r,!1)}}}
W.k8.prototype={
$1:function(a){return this.a.$1(a)}}
W.lf.prototype={}
W.cc.prototype={
ex:function(a){var s
if($.db.gbs($.db)){for(s=0;s<262;++s)$.db.m(0,C.Y[s],W.qj())
for(s=0;s<12;++s)$.db.m(0,C.o[s],W.qk())}},
aS:function(a){return $.nx().F(0,W.cw(a))},
aw:function(a,b,c){var s=$.db.h(0,H.f(W.cw(a))+"::"+b)
if(s==null)s=$.db.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iak:1}
W.M.prototype={
gM:function(a){return new W.cz(a,this.gl(a))}}
W.cU.prototype={
aS:function(a){return C.b.ds(this.a,new W.iT(a))},
aw:function(a,b,c){return C.b.ds(this.a,new W.iS(a,b,c))},
$iak:1}
W.iT.prototype={
$1:function(a){return a.aS(this.a)}}
W.iS.prototype={
$1:function(a){return a.aw(this.a,this.b,this.c)}}
W.dl.prototype={
eA:function(a,b,c,d){var s,r,q
this.a.ab(0,c)
s=b.bC(0,new W.kg())
r=b.bC(0,new W.kh())
this.b.ab(0,s)
q=this.c
q.ab(0,C.x)
q.ab(0,r)},
aS:function(a){return this.a.F(0,W.cw(a))},
aw:function(a,b,c){var s=this,r=W.cw(a),q=s.c
if(q.F(0,H.f(r)+"::"+b))return s.d.hq(c)
else if(q.F(0,"*::"+b))return s.d.hq(c)
else{q=s.b
if(q.F(0,H.f(r)+"::"+b))return!0
else if(q.F(0,"*::"+b))return!0
else if(q.F(0,H.f(r)+"::*"))return!0
else if(q.F(0,"*::*"))return!0}return!1},
$iak:1}
W.kg.prototype={
$1:function(a){return!C.b.F(C.o,a)}}
W.kh.prototype={
$1:function(a){return C.b.F(C.o,a)}}
W.hi.prototype={
aw:function(a,b,c){if(this.eq(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.F(0,b)
return!1}}
W.km.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)}}
W.hh.prototype={
aS:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cw(a)==="foreignObject")return!1
if(s)return!0
return!1},
aw:function(a,b,c){if(b==="is"||C.a.aa(b,"on"))return!1
return this.aS(a)},
$iak:1}
W.cz.prototype={
t:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.cm(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gw:function(a){return this.d}}
W.ak.prototype={}
W.kf.prototype={}
W.hs.prototype={
cN:function(a){var s=this,r=new W.ku(s)
s.b=!1
r.$2(a,null)
for(;s.b;){s.b=!1
r.$2(a,null)}},
b6:function(a,b){var s=this.b=!0
if(b!=null?b!==a.parentNode:s)J.lG(a)
else b.removeChild(a)},
h5:function(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.nF(a)
l=m.a.getAttribute("is")
s=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
if(c.id=='lastChild'||c.name=='lastChild'||c.id=='previousSibling'||c.name=='previousSibling'||c.id=='children'||c.name=='children')return true
var k=c.childNodes
if(c.lastChild&&c.lastChild!==k[k.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var j=0
if(c.children)j=c.children.length
for(var i=0;i<j;i++){var h=c.children[i]
if(h.id=='attributes'||h.name=='attributes'||h.id=='lastChild'||h.name=='lastChild'||h.id=='previousSibling'||h.name=='previousSibling'||h.id=='children'||h.name=='children')return true}return false}(a)
n=s?!0:!(a.attributes instanceof NamedNodeMap)}catch(p){H.am(p)}r="element unprintable"
try{r=J.ao(a)}catch(p){H.am(p)}try{q=W.cw(a)
this.h4(a,b,n,r,q,m,l)}catch(p){if(H.am(p) instanceof P.ag)throw p
else{this.b6(a,b)
window
o="Removing corrupted element "+H.f(r)
if(typeof console!="undefined")window.console.warn(o)}}},
h4:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.b6(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.aS(a)){m.b6(a,b)
window
s="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.aw(a,"is",g)){m.b6(a,b)
window
s="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}s=f.ga4(f)
r=H.c(s.slice(0),H.lq(s).H("w<1>"))
for(q=f.ga4(f).length-1,s=f.a;q>=0;--q){if(q>=r.length)return H.d(r,q)
p=r[q]
o=m.a
n=J.nJ(p)
H.lr(p)
if(!o.aw(a,n,s.getAttribute(p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.aW.b(a))m.cN(a.content)}}
W.ku.prototype={
$2:function(a,b){var s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.h5(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.b6(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){q=r.nextSibling
p=s
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.la("Corrupt HTML")
throw H.b(q)}}catch(o){H.am(o)
q=s
n.b=!0
p=q.parentNode
p=a==null?p!=null:a!==p
if(p){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}}}
W.fC.prototype={}
W.fE.prototype={}
W.fF.prototype={}
W.fG.prototype={}
W.fH.prototype={}
W.fN.prototype={}
W.fO.prototype={}
W.fR.prototype={}
W.fS.prototype={}
W.fV.prototype={}
W.fW.prototype={}
W.fX.prototype={}
W.fY.prototype={}
W.fZ.prototype={}
W.h_.prototype={}
W.h2.prototype={}
W.h3.prototype={}
W.h5.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.h7.prototype={}
W.h8.prototype={}
W.hd.prototype={}
W.hj.prototype={}
W.hk.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.hl.prototype={}
W.hm.prototype={}
W.ht.prototype={}
W.hu.prototype={}
W.hv.prototype={}
W.hw.prototype={}
W.hx.prototype={}
W.hy.prototype={}
W.hz.prototype={}
W.hA.prototype={}
W.hB.prototype={}
W.hC.prototype={}
P.ki.prototype={
cm:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bB:function(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(H.lt(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.ah)return new Date(a.a)
if(t.fv.b(a))throw H.b(P.jE("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.d.b(a))return a
if(t.bX.b(a))return a
if(t.v.b(a))return a
if(t.bZ.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.eO.b(a)){s=o.cm(a)
r=o.b
q=r.length
if(s>=q)return H.d(r,s)
p=n.a=r[s]
if(p!=null)return p
p={}
n.a=p
if(s>=q)return H.d(r,s)
r[s]=p
J.kT(a,new P.kk(n,o))
return n.a}if(t.aH.b(a)){s=o.cm(a)
n=o.b
if(s>=n.length)return H.d(n,s)
p=n[s]
if(p!=null)return p
return o.hy(a,s)}if(t.eH.b(a)){s=o.cm(a)
r=o.b
q=r.length
if(s>=q)return H.d(r,s)
p=n.b=r[s]
if(p!=null)return p
p={}
n.b=p
if(s>=q)return H.d(r,s)
r[s]=p
o.hQ(a,new P.kl(n,o))
return n.b}throw H.b(P.jE("structured clone of other type"))},
hy:function(a,b){var s,r=J.b3(a),q=r.gl(a),p=new Array(q),o=this.b
if(b>=o.length)return H.d(o,b)
o[b]=p
if(typeof q!=="number")return H.u(q)
s=0
for(;s<q;++s){o=this.bB(r.h(a,s))
if(s>=p.length)return H.d(p,s)
p[s]=o}return p}}
P.kk.prototype={
$2:function(a,b){this.a.a[a]=this.b.bB(b)},
$S:3}
P.kl.prototype={
$2:function(a,b){this.a.b[a]=this.b.bB(b)},
$S:3}
P.du.prototype={$ibA:1,
gdG:function(a){return this.a}}
P.kD.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.kj.prototype={
hQ:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<r;++q){p=s[q]
b.$2(p,a[p])}}}
P.e6.prototype={
gb4:function(){var s=this.b,r=H.dA(s)
return new H.aU(new H.b1(s,new P.ic(),r.H("b1<i.E>")),new P.id(),r.H("aU<i.E,D>"))},
A:function(a,b){C.b.A(P.iv(this.gb4(),!1,t.h),b)},
m:function(a,b,c){var s=this.gb4()
J.nH(s.b.$1(J.hH(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aM(this.gb4().a)},
h:function(a,b){var s=this.gb4()
return s.b.$1(J.hH(s.a,b))},
gM:function(a){var s=P.iv(this.gb4(),!1,t.h)
return new J.a5(s,s.length)}}
P.ic.prototype={
$1:function(a){return t.h.b(a)}}
P.id.prototype={
$1:function(a){return t.h.a(a)}}
P.h4.prototype={
gcI:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.B()
if(typeof r!=="number")return H.u(r)
return this.$ti.c.a(s+r)},
gdz:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.B()
if(typeof r!=="number")return H.u(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.f(s.a)+", "+H.f(s.b)+") "+H.f(s.c)+" x "+H.f(s.d)},
u:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.I.b(b)){s=n.a
r=J.aL(b)
if(s==r.gbu(b)){q=n.b
if(q==r.gbz(b)){p=n.c
if(typeof s!=="number")return s.B()
if(typeof p!=="number")return H.u(p)
o=n.$ti.c
if(o.a(s+p)===r.gcI(b)){s=n.d
if(typeof q!=="number")return q.B()
if(typeof s!=="number")return H.u(s)
r=o.a(q+s)===r.gdz(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gP:function(a){var s,r=this,q=r.a,p=J.af(q),o=r.b,n=J.af(o),m=r.c
if(typeof q!=="number")return q.B()
if(typeof m!=="number")return H.u(m)
s=r.$ti.c
m=C.c.gP(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.B()
if(typeof q!=="number")return H.u(q)
q=C.c.gP(s.a(o+q))
return P.oJ(P.ka(P.ka(P.ka(P.ka(0,p),n),m),q))}}
P.a8.prototype={
gbu:function(a){return this.a},
gbz:function(a){return this.b},
gar:function(a){return this.c},
gap:function(a){return this.d}}
P.aT.prototype={$iaT:1}
P.ei.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.aX.prototype={$iaX:1}
P.ey.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.iX.prototype={
gl:function(a){return a.length}}
P.c5.prototype={$ic5:1}
P.f0.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.m.prototype={
gdC:function(a){return new P.e6(a,new W.a1(a))},
ao:function(a,b,c,d){var s,r,q,p,o,n=H.c([],t.o)
n.push(W.mE(null))
n.push(W.mK())
n.push(new W.hh())
c=new W.hs(new W.cU(n))
s='<svg version="1.1">'+b+"</svg>"
n=document
r=n.body
r.toString
q=C.r.hz(r,s,c)
p=n.createDocumentFragment()
q.toString
n=new W.a1(q)
o=n.gaL(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
$im:1}
P.aZ.prototype={$iaZ:1}
P.fd.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.fT.prototype={}
P.fU.prototype={}
P.h0.prototype={}
P.h1.prototype={}
P.he.prototype={}
P.hf.prototype={}
P.hn.prototype={}
P.ho.prototype={}
P.bi.prototype={$il:1,$ih:1,$in:1}
P.hL.prototype={
gl:function(a){return a.length}}
P.dP.prototype={
h:function(a,b){return P.bo(a.get(b))},
A:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bo(s.value[1]))}},
ga4:function(a){var s=H.c([],t.s)
this.A(a,new P.hM(s))
return s},
gl:function(a){return a.size},
m:function(a,b,c){throw H.b(P.A("Not supported"))},
$iH:1}
P.hM.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dQ.prototype={
gl:function(a){return a.length}}
P.b8.prototype={}
P.ez.prototype={
gl:function(a){return a.length}}
P.fz.prototype={}
P.eL.prototype={
ea:function(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&H.bM(g)){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}if(t.v.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,P.qb(g))
return}if(t.fS.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.b(P.bQ("Incorrect number or type of arguments"))},
e9:function(a,b,c,d,e,f,g){return this.ea(a,b,c,d,e,f,g,null,null,null)}}
P.eW.prototype={
gl:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
s=P.bo(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.ha.prototype={}
P.hb.prototype={}
K.b7.prototype={
aF:function(a,b){return!0},
i:function(a){return"all"}}
K.e9.prototype={
aF:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)if(s[q].aF(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.iz.prototype={}
K.aa.prototype={
aF:function(a,b){return!this.em(0,b)},
i:function(a){return"!["+this.cQ(0)+"]"}}
K.iY.prototype={
aF:function(a,b){if(typeof b!=="number")return H.u(b)
return this.a<=b&&this.b>=b},
i:function(a){var s=H.as(this.a),r=H.as(this.b)
return s+".."+r}}
K.j3.prototype={
ev:function(a){var s,r,q,p
if(a.a.length<=0)throw H.b(P.v("May not create a Set with zero characters."))
s=new H.C(t.E)
for(r=new H.bd(a,a.gl(a));r.t();){q=r.d
s.m(0,q,!0)}p=P.iv(s.ga4(s),!0,t.e)
C.b.el(p)
this.a=p},
aF:function(a,b){return C.b.F(this.a,b)},
i:function(a){return P.f1(this.a,0,null)}}
L.eX.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.fe(this.a.k(0,b))
p.a=H.c([],t.B)
p.c=!1
this.c.push(p)
return p},
hL:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.aF(0,a))return p}return null},
i:function(a){return this.b},
dk:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.F(0,l))m+=" (consume)"
for(l=n.d.c,l=l.ga4(l),l=l.gM(l);l.t();){r=l.gw(l)
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.f(r)+" => ["+H.f(q)+"]")
m=s.c.F(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.q)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.fa.prototype={
i:function(a){var s=H.lC(this.b,"\n","\\n"),r=H.lC(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fb.prototype={
aI:function(a,b,c){var s,r,q
for(s=c.length,r=0;r<c.length;c.length===s||(0,H.q)(c),++r){q=c[r]
this.c.m(0,q,b)}},
i:function(a){return this.b}}
L.jq.prototype={
k:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.eX(this,b)
s.c=H.c([],t.br)
this.a.m(0,b,s)}return s},
N:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.fb(a)
s.c=new H.C(t.dO)
this.b.m(0,a,s)}return s},
cJ:function(a){return this.it(a)},
it:function(a){var s=this
return P.py(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$cJ(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.V
b=H.c([],c)
a0=H.c([],c)
a1=H.c([],c)
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a1.length!==0)j=C.b.cE(a1,0)
else{if(!r.t()){q=3
break}i=r.d
j=i}a0.push(j);++m
h=d.hL(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.f1(a0,0,null)
throw H.b(P.v("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!a0.fixed$length)H.r(P.A("removeRange"))
P.bg(0,k,a0.length)
a0.splice(0,k-0)
C.b.ab(a1,a0)
a0=H.c([],c)
b=H.c([],c)
d=s.d
q=!s.c.F(0,n.a)?7:8
break
case 7:q=9
return n
case 9:case 8:m=l
n=null
k=0
q=5
break
case 6:if(!h.c)b.push(j)
d=h.b
if(d.d!=null){g=P.f1(b,0,null)
f=d.d
e=f.c.h(0,g)
n=new L.fa(e==null?f.b:e,g,m)
k=a0.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.F(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.oH()
case 1:return P.oI(o)}}},t.eB)},
i:function(a){var s,r=new P.R(""),q=this.d
if(q!=null)r.a=q.dk()+"\n"
for(q=this.a,q=q.giu(q),q=q.gM(q);q.t();){s=q.gw(q)
if(s!=this.d)r.a+=s.dk()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.fe.prototype={
i:function(a){return this.b.b+": "+this.cQ(0)}}
O.a6.prototype={
bj:function(a){this.a=H.c([],a.H("w<0*>"))
this.c=this.b=null},
cO:function(a,b,c){this.b=b
this.c=a},
aZ:function(a,b){return this.cO(a,null,b)},
d8:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
cT:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gl:function(a){return this.a.length},
gM:function(a){var s=this.a
return new J.a5(s,s.length)},
G:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.dA(q).H("w<a6.T*>")
if(q.d8(H.c([b],p))){s=q.a
r=s.length
s.push(b)
q.cT(r,H.c([b],p))}},
ab:function(a,b){var s,r
if(this.d8(b)){s=this.a
r=s.length
C.b.ab(s,b)
this.cT(r,b)}},
$ih:1}
O.cP.prototype={
gl:function(a){return this.a.length},
gp:function(){var s=this.b
return s==null?this.b=D.F():s},
aM:function(){var s=this.b
if(s!=null)s.C(null)},
ga5:function(a){var s=this.a
if(s.length>0)return C.b.gay(s)
else return V.bE()},
by:function(a){var s=this.a
if(a==null)s.push(V.bE())
else s.push(a)
this.aM()},
aH:function(){var s=this.a
if(s.length>0){s.pop()
this.aM()}}}
E.hQ.prototype={}
E.by.prototype={
sbE:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gp().R(0,q.ge1())
s=q.c
if(s!=null)s.gp().n(0,q.ge1())
r=new D.B("shape",p,q.c)
r.b=!0
q.bv(r)}},
ag:function(a,b){var s
for(s=this.y.a,s=new J.a5(s,s.length);s.t();)s.d.ag(0,b)},
af:function(a){var s,r=this,q=a.dx
q.a.push(q.ga5(q))
q.aM()
a.cC(r.f)
q=a.dy
s=(q&&C.b).gay(q)
if(s!=null&&r.d!=null)s.cH(a,r)
for(q=r.y.a,q=new J.a5(q,q.length);q.t();)q.d.af(a)
a.cB()
a.dx.aH()},
bv:function(a){var s=this.z
if(s!=null)s.C(a)},
al:function(){return this.bv(null)},
e2:function(a){this.e=null
this.bv(a)},
i4:function(){return this.e2(null)},
e0:function(a){this.bv(a)},
i1:function(){return this.e0(null)},
i0:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.ge_(),q=t.f,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bV()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.c([],q):m).push(r)}}this.al()},
i3:function(a,b){var s,r
for(s=b.gM(b),r=this.ge_();s.t();)s.gw(s).gp().R(0,r)
this.al()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bT.prototype={
i:function(a){return this.b}}
E.c2.prototype={
i:function(a){return this.b}}
E.fJ.prototype={}
E.iZ.prototype={
eu:function(a,b){var s,r,q=this
q.d=q.c=512
q.e=0
q.x=q.r=q.f=new P.ah(Date.now(),!1)
q.y=0
q.cx=q.ch=q.Q=q.z=null
s=new O.cP()
r=t.h8
s.a=H.c([],r)
s.gp().n(0,new E.j_(q))
q.cy=s
s=new O.cP()
s.a=H.c([],r)
s.gp().n(0,new E.j0(q))
q.db=s
s=new O.cP()
s.a=H.c([],r)
s.gp().n(0,new E.j1(q))
q.dx=s
s=H.c([],t.fG)
q.dy=s
s.push(null)
q.fr=new H.C(t.h9)},
gie:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.ga5(q)
s=r.db
s=r.z=q.v(0,s.ga5(s))
q=s}return q},
ge5:function(){var s,r=this,q=r.ch
if(q==null){q=r.gie()
s=r.dx
s=r.ch=q.v(0,s.ga5(s))
q=s}return q},
cC:function(a){var s=this.dy
s.push(a==null?(s&&C.b).gay(s):a)},
cB:function(){var s=this.dy
if(s.length>1)s.pop()},
c3:function(a){var s=a.b
if(s.length===0)throw H.b(P.v("May not cache a shader with no name."))
if(this.fr.c8(0,s))throw H.b(P.v('Shader cache already contains a shader by the name "'+s+'".'))
this.fr.m(0,s,a)}}
E.j_.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.j0.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.j1.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.f9.prototype={
cW:function(a){this.e7()},
cV:function(){return this.cW(null)},
ghR:function(){var s,r=this,q=Date.now(),p=C.c.a8(P.lR(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.ah(q,!1)
return s/p},
da:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.v()
if(typeof p!=="number")return H.u(p)
s=C.d.cn(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.v()
r=C.d.cn(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.mn(C.n,q.gik())}},
e7:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.G.eT(s)
r=W.n0(new E.jo(this),t.H)
r.toString
C.G.h1(s,r)}},
ii:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.da()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.ah(p,!1)
q.y=P.lR(p-q.r.a).a*0.000001
p=q.cy
C.b.sl(p.a,0)
p.aM()
p=q.db
C.b.sl(p.a,0)
p.aM()
p=q.dx
C.b.sl(p.a,0)
p.aM()
p=q.dy
p.toString
C.b.sl(p,0)
q.dy.push(null)
m.af(n.e)}q=n.Q
if(q!=null)q.C(null)}catch(o){s=H.am(o)
r=H.ly(o)
P.lB("Error: "+H.f(s))
P.lB("Stack: "+H.f(r))
throw H.b(s)}}}
E.jo.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.ii()}}}
Z.fv.prototype={}
Z.dT.prototype={
Y:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.am(q)
r=P.v('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.f(s))
throw H.b(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.f(s.e)+"]"}}
Z.d9.prototype={}
Z.bU.prototype={
at:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
Y:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].Y(a)},
am:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
af:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.d(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=t.i,n=H.c([],o)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)n.push(s[q].i(0))
p=H.c([],o)
for(o=this.c,s=o.length,q=0;q<s;++q)p.push(J.ao(o[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(n,", ")+"\nAttrs:   "+C.b.j(p,", ")}}
Z.cA.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.eI(this.c))+"'")+"]"}}
Z.bj.prototype={
gcP:function(a){var s=this.a,r=(s&$.an().a)!==0?3:0
if((s&$.br().a)!==0)r+=3
if((s&$.bq().a)!==0)r+=3
if((s&$.b5().a)!==0)r+=2
if((s&$.bP().a)!==0)r+=3
if((s&$.dH().a)!==0)r+=3
if((s&$.dI().a)!==0)r+=4
if((s&$.cl().a)!==0)++r
return(s&$.bp().a)!==0?r+4:r},
hr:function(a){var s,r=$.an(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.br()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bq()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b5()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bP()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dH()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dI()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cl()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bp()
if((q&r.a)!==0)if(s===a)return r
return $.nv()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bj))return!1
return this.a===b.a},
i:function(a){var s=H.c([],t.i),r=this.a
if((r&$.an().a)!==0)s.push("Pos")
if((r&$.br().a)!==0)s.push("Norm")
if((r&$.bq().a)!==0)s.push("Binm")
if((r&$.b5().a)!==0)s.push("Txt2D")
if((r&$.bP().a)!==0)s.push("TxtCube")
if((r&$.dH().a)!==0)s.push("Clr3")
if((r&$.dI().a)!==0)s.push("Clr4")
if((r&$.cl().a)!==0)s.push("Weight")
if((r&$.bp().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.hR.prototype={}
D.bV.prototype={
n:function(a,b){var s=this.a;(s==null?this.a=H.c([],t.f):s).push(b)},
R:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.b.F(q,b)
if(q===!0){q=r.a
s=(q&&C.b).R(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.b.F(q,b)
if(q===!0){q=r.b
s=(q&&C.b).R(q,b)||s}return s},
C:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.S()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.b.A(P.iv(s,!0,t.dm),new D.i9(o))
s=p.b
if(s!=null){p.b=H.c([],t.f)
C.b.A(s,new D.ia(o))}return!0},
cc:function(){return this.C(null)},
aJ:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.C(s)}}}}
D.i9.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.ia.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.S.prototype={}
D.aQ.prototype={}
D.aR.prototype={}
D.B.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.dU.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dU))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.eg.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eg))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.ip.prototype={
i9:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
i5:function(a){this.c=a.b
this.d.R(0,a.a)
return!1}}
X.cK.prototype={}
X.ix.prototype={
b3:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.v()
s=b.b
r=o.ch
if(typeof s!=="number")return s.v()
q=new V.ab(m.a+l*k,m.b+s*r)
r=o.a.gaT()
p=new X.bZ(a,V.bf(),o.x,r,q)
p.b=!0
o.z=new P.ah(n,!1)
o.x=q
return p},
cA:function(a,b){this.r=a.a
return!1},
bd:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.eg()
if(typeof s!=="number")return s.an()
this.r=(s&~r)>>>0
return!1},
bc:function(a,b){var s=this.d
if(s==null)return!1
s.C(this.b3(a,b))
return!0},
ia:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaT()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.v()
o=a.b
n=m.cy
if(typeof o!=="number")return o.v()
r=new X.c_(new V.ad(q*p,o*n),s,r)
r.b=!0
l.C(r)
return!0},
ft:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cK(c,p.a.gaT(),b)
q.b=!0
r.C(q)
p.y=new P.ah(s,!1)
p.x=V.bf()}}
X.aq.prototype={
u:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.aq))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bZ.prototype={}
X.iR.prototype={
bP:function(a,b,c){var s=this,r=new P.ah(Date.now(),!1),q=s.a.gaT(),p=new X.bZ(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
cA:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.C(this.bP(a,b,!0))
return!0},
bd:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.eg()
if(typeof r!=="number")return r.an()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.C(s.bP(a,b,!0))
return!0},
bc:function(a,b){var s=this.d
if(s==null)return!1
s.C(this.bP(a,b,!1))
return!0},
ib:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaT()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.v()
p=a.b
o=n.ch
if(typeof p!=="number")return p.v()
s=new X.c_(new V.ad(r*q,p*o),s,b)
s.b=!0
m.C(s)
return!0},
gdI:function(){var s=this.b
return s==null?this.b=D.F():s},
gcK:function(){var s=this.c
return s==null?this.c=D.F():s},
gdZ:function(){var s=this.d
return s==null?this.d=D.F():s}}
X.c_.prototype={}
X.eG.prototype={}
X.d_.prototype={}
X.js.prototype={
b3:function(a,b){var s=this,r=new P.ah(Date.now(),!1),q=a.length>0?a[0]:V.bf(),p=s.a.gaT(),o=new X.d_(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
i8:function(a){var s=this.b
if(s==null)return!1
s.C(this.b3(a,!0))
return!0},
i6:function(a){var s=this.c
if(s==null)return!1
s.C(this.b3(a,!0))
return!0},
i7:function(a){var s=this.d
if(s==null)return!1
s.C(this.b3(a,!1))
return!0}}
X.fs.prototype={
gaT:function(){var s=this.a,r=C.i.gdD(s).c
r.toString
s=C.i.gdD(s).d
s.toString
return V.mg(0,0,r,s)},
d0:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.eg(s,new X.aq(r,a.altKey,a.shiftKey))},
aQ:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.aq(r,a.altKey,a.shiftKey)},
c0:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.aq(r,a.altKey,a.shiftKey)},
aC:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.a_()
if(typeof o!=="number")return H.u(o)
s=r.top
if(typeof p!=="number")return p.a_()
if(typeof s!=="number")return H.u(s)
return new V.ab(q-o,p-s)},
b5:function(a){return new V.ad(a.movementX,a.movementY)},
bZ:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=H.c([],t.cS)
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
o=C.d.Z(p.pageX)
C.d.Z(p.pageY)
n=k.left
if(typeof n!=="number")return H.u(n)
C.d.Z(p.pageX)
m=C.d.Z(p.pageY)
l=k.top
if(typeof l!=="number")return H.u(l)
j.push(new V.ab(o-n,m-l))}return j},
aA:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.dU(s,new X.aq(r,a.altKey,a.shiftKey))},
bQ:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.a_()
if(typeof n!=="number")return H.u(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.a_()
if(typeof p!=="number")return H.u(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.u(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.u(p)
p=r<p}else p=!1
return p},
fm:function(a){this.f=!0},
fa:function(a){this.f=!1},
fg:function(a){if(this.f&&this.bQ(a))a.preventDefault()},
fq:function(a){var s
if(!this.f)return
s=this.d0(a)
this.b.i9(s)},
fo:function(a){var s
if(!this.f)return
s=this.d0(a)
this.b.i5(s)},
fv:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aQ(a)
if(p.x){s=p.aA(a)
r=p.b5(a)
if(p.d.cA(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.aA(a)
q=p.aC(a)
if(p.c.cA(s,q))a.preventDefault()},
fB:function(a){var s,r,q,p=this
p.aQ(a)
s=p.aA(a)
if(p.x){r=p.b5(a)
if(p.d.bd(s,r))a.preventDefault()
return}if(p.r)return
q=p.aC(a)
if(p.c.bd(s,q))a.preventDefault()},
fk:function(a){var s,r,q,p=this
if(!p.bQ(a)){p.aQ(a)
s=p.aA(a)
if(p.x){r=p.b5(a)
if(p.d.bd(s,r))a.preventDefault()
return}if(p.r)return
q=p.aC(a)
if(p.c.bd(s,q))a.preventDefault()}},
fz:function(a){var s,r,q,p=this
p.aQ(a)
s=p.aA(a)
if(p.x){r=p.b5(a)
if(p.d.bc(s,r))a.preventDefault()
return}if(p.r)return
q=p.aC(a)
if(p.c.bc(s,q))a.preventDefault()},
fi:function(a){var s,r,q,p=this
if(!p.bQ(a)){p.aQ(a)
s=p.aA(a)
if(p.x){r=p.b5(a)
if(p.d.bc(s,r))a.preventDefault()
return}if(p.r)return
q=p.aC(a)
if(p.c.bc(s,q))a.preventDefault()}},
fD:function(a){var s,r,q=this
q.aQ(a)
s=new V.ad((a&&C.F).ghC(a),C.F.ghD(a)).v(0,q.Q)
if(q.x){if(q.d.ia(s))a.preventDefault()
return}if(q.r)return
r=q.aC(a)
if(q.c.ib(s,r))a.preventDefault()},
fF:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aA(q.y)
r=q.aC(q.y)
q.d.ft(s,r,p)}},
fV:function(a){var s,r=this
r.a.focus()
r.f=!0
r.c0(a)
s=r.bZ(a)
if(r.e.i8(s))a.preventDefault()},
fR:function(a){var s
this.c0(a)
s=this.bZ(a)
if(this.e.i6(s))a.preventDefault()},
fT:function(a){var s
this.c0(a)
s=this.bZ(a)
if(this.e.i7(s))a.preventDefault()}}
D.dR.prototype={$iT:1}
D.bw.prototype={
az:function(a){var s=this.r
if(s!=null)s.C(a)},
ez:function(){return this.az(null)},
$iT:1}
D.T.prototype={}
D.cF.prototype={
az:function(a){var s=this.y
if(s!=null)s.C(a)},
d7:function(a){var s=this.z
if(s!=null)s.C(a)},
fs:function(){return this.d7(null)},
fH:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){q=a[r]
if(q==null||this.eN(q))return!1}return!0},
f4:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gd6(),q=t.f,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o instanceof D.bw)this.f.push(o)
n=o.r
if(n==null){n=new D.bV()
n.d=0
o.r=n}m=n.a;(m==null?n.a=H.c([],q):m).push(r)}s=new D.aQ()
s.b=!0
this.az(s)},
fL:function(a,b){var s,r,q
for(s=b.gM(b),r=this.gd6();s.t();){q=s.gw(s)
C.b.R(this.e,q)
q.gp().R(0,r)}s=new D.aR()
s.b=!0
this.az(s)},
eN:function(a){var s=C.b.F(this.f,a)
return s}}
D.eF.prototype={$iT:1}
D.eU.prototype={$iT:1}
V.a0.prototype={
u:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a0))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.aB.prototype={
u:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aB))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.K(s.a,3,0)+", "+V.K(s.b,3,0)+", "+V.K(s.c,3,0)+", "+V.K(s.d,3,0)+"]"}}
V.i7.prototype={}
V.cO.prototype={
a1:function(a,b){var s=this,r=H.c([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.m)
return r},
u:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cO))return!1
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
i:function(a){var s,r,q,p,o=this,n=t.m,m=V.ck(H.c([o.a,o.d,o.r],n),3,0),l=V.ck(H.c([o.b,o.e,o.x],n),3,0),k=V.ck(H.c([o.c,o.f,o.y],n),3,0)
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
a1:function(a,b){var s=this,r=H.c([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.m)
return r},
cs:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.E().toString
if(Math.abs(b3-0)<1e-9)return V.bE()
s=1/b3
r=-l
q=-a2
return V.aW((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
v:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aW(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bA:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.G(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bg:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.X(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
u:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.be))return!1
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
i:function(a){return this.T()},
J:function(a){var s,r,q,p,o,n=this,m=t.m,l=V.ck(H.c([n.a,n.e,n.y,n.cx],m),3,0),k=V.ck(H.c([n.b,n.f,n.z,n.cy],m),3,0),j=V.ck(H.c([n.c,n.r,n.Q,n.db],m),3,0),i=V.ck(H.c([n.d,n.x,n.ch,n.dx],m),3,0)
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
T:function(){return this.J("")}}
V.ab.prototype={
a9:function(a){return new V.ad(a.a-this.a,a.b-this.b)},
u:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.X.prototype={
B:function(a,b){return new V.X(this.a+b.a,this.b+b.b,this.c+b.c)},
a_:function(a,b){return new V.X(this.a-b.a,this.b-b.b,this.c-b.c)},
v:function(a,b){return new V.X(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.X))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.bG.prototype={
u:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bG))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.K(s.a,3,0)+", "+V.K(s.b,3,0)+", "+V.K(s.c,3,0)+", "+V.K(s.d,3,0)+"]"}}
V.eK.prototype={
gak:function(){var s=this.c,r=this.d
return s>r?r:s},
u:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eK))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.K(s.a,3,0)+", "+V.K(s.b,3,0)+", "+V.K(s.c,3,0)+", "+V.K(s.d,3,0)+"]"}}
V.ad.prototype={
ct:function(a){return Math.sqrt(this.ac(this))},
ac:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.v()
if(typeof p!=="number")return H.u(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.u(r)
return q*p+s*r},
v:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.v()
if(typeof b!=="number")return H.u(b)
s=this.b
if(typeof s!=="number")return s.v()
return new V.ad(r*b,s*b)},
a2:function(a,b){var s,r
$.E().toString
if(Math.abs(b-0)<1e-9){s=$.mv
return s==null?$.mv=new V.ad(0,0):s}s=this.a
if(typeof s!=="number")return s.a2()
r=this.b
if(typeof r!=="number")return r.a2()
return new V.ad(s/b,r/b)},
u:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ad))return!1
s=b.a
r=this.a
$.E().toString
if(typeof s!=="number")return s.a_()
if(typeof r!=="number")return H.u(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.a_()
if(typeof r!=="number")return H.u(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.G.prototype={
ct:function(a){return Math.sqrt(this.ac(this))},
ac:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
I:function(){var s=this,r=Math.sqrt(s.ac(s))
if(r===1)return s
return s.a2(0,r)},
aE:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.G(s*r-q*p,q*o-n*r,n*p-s*o)},
B:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a){return new V.G(-this.a,-this.b,-this.c)},
v:function(a,b){return new V.G(this.a*b,this.b*b,this.c*b)},
a2:function(a,b){$.E().toString
if(Math.abs(b-0)<1e-9)return V.d8()
return new V.G(this.a/b,this.b/b,this.c/b)},
dY:function(){$.E().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
u:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.G))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
U.hT.prototype={
bI:function(a){var s=V.qz(a,this.c,this.b)
return s},
gp:function(){var s=this.y
return s==null?this.y=D.F():s},
O:function(a){var s=this.y
if(s!=null)s.C(a)},
scL:function(a,b){},
scv:function(a){var s,r=this,q=r.b
$.E().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bI(s)}q=new D.B("maximumLocation",q,r.b)
q.b=!0
r.O(q)}},
scz:function(a){var s,r=this,q=r.c
$.E().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bI(s)}q=new D.B("minimumLocation",q,r.c)
q.b=!0
r.O(q)}},
saj:function(a,b){var s,r=this
b=r.bI(b)
s=r.d
$.E().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.B("location",s,b)
s.b=!0
r.O(s)}},
scw:function(a){var s,r,q=this,p=q.e
$.E().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.B("maximumVelocity",p,a)
p.b=!0
q.O(p)}},
sU:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.E().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.B("velocity",r,a)
r.b=!0
s.O(r)}},
sca:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.E().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.B("dampening",s,a)
s.b=!0
this.O(s)}},
ag:function(a,b){var s,r,q,p=this,o=p.f
$.E().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.saj(0,p.d+s*b)
o=p.x
$.E().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sU(s)}}}
U.co.prototype={
gp:function(){var s=this.b
return s==null?this.b=D.F():s},
aY:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.co))return!1
return J.I(this.a,b.a)},
i:function(a){return"Constant: "+this.a.J("          ")}}
U.bX.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.F():s},
O:function(a){var s=this.e
if(s!=null)s.C(a)},
ae:function(){return this.O(null)},
f2:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaP(),q=t.f,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.gp()
m=n.a;(m==null?n.a=H.c([],q):m).push(r)}}s=new D.aQ()
s.b=!0
this.O(s)},
fJ:function(a,b){var s,r
for(s=b.gM(b),r=this.gaP();s.t();)s.gw(s).gp().R(0,r)
s=new D.aR()
s.b=!0
this.O(s)},
aY:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.ah()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.a5(p,p.length),s=null;p.t();){o=p.d
if(o!=null){r=o.aY(0,b,c)
if(r!=null)s=s==null?r:r.v(0,s)}}q.f=s==null?V.bE():s
p=q.e
if(p!=null)p.aJ(0)}return q.f},
u:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bX))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.d(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.d(p,r)
if(!J.I(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iV:1}
U.V.prototype={}
U.d5.prototype={
gp:function(){var s=this.cy
return s==null?this.cy=D.F():s},
O:function(a){var s=this.cy
if(s!=null)s.C(a)},
ae:function(){return this.O(null)},
b7:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.c.gdI().n(0,s.gbR())
s.a.c.gdZ().n(0,s.gbT())
s.a.c.gcK().n(0,s.gbV())
return!0},
bS:function(a){var s=this
if(!J.I(s.c,s.a.b.c))return
s.x=s.y=!0
s.z=s.b.d},
bU:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.y)return
if(l.x){s=a.y.a9(a.d)
s=s.ac(s)
r=l.r
if(typeof r!=="number")return H.u(r)
if(s<r)return
l.x=!1}if(l.d){s=a.c
s=a.y.a9(a.d).v(0,2).a2(0,s.gak())
l.Q=s
r=l.b
s=s.a
if(typeof s!=="number")return s.v()
q=l.e
if(typeof q!=="number")return H.u(q)
r.sU(s*10*q)}else{s=a.c
r=a.y
q=a.d
p=r.a9(q).v(0,2).a2(0,s.gak())
r=l.b
o=p.a
if(typeof o!=="number")return o.S()
n=l.e
if(typeof n!=="number")return H.u(n)
m=l.z
if(typeof m!=="number")return H.u(m)
r.saj(0,-o*n+m)
l.b.sU(0)
l.Q=a.z.a9(q).v(0,2).a2(0,s.gak())}l.ae()},
bW:function(a){var s,r,q,p=this
if(!p.y)return
p.y=!1
if(p.x)return
s=p.Q
if(s.ac(s)>0.0001){s=p.b
r=p.Q.a
if(typeof r!=="number")return r.v()
q=p.e
if(typeof q!=="number")return H.u(q)
s.sU(r*10*q)
p.ae()}},
aY:function(a,b,c){var s,r,q,p=this,o=p.ch,n=b.e
if(typeof o!=="number")return o.ah()
if(o<n){p.ch=n
s=b.y
p.b.ag(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
p.cx=V.aW(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return p.cx},
$iV:1}
U.d6.prototype={
gp:function(){var s=this.fx
return s==null?this.fx=D.F():s},
O:function(a){var s=this.fx
if(s!=null)s.C(a)},
ae:function(){return this.O(null)},
b7:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.gdI().n(0,q.gbR())
q.a.c.gdZ().n(0,q.gbT())
q.a.c.gcK().n(0,q.gbV())
s=q.a.d
r=s.f
s=r==null?s.f=D.F():r
s.n(0,q.geV())
s=q.a.d
r=s.d
s=r==null?s.d=D.F():r
s.n(0,q.geX())
s=q.a.e
r=s.b
s=r==null?s.b=D.F():r
s.n(0,q.ghi())
s=q.a.e
r=s.d
s=r==null?s.d=D.F():r
s.n(0,q.ghg())
s=q.a.e
r=s.c
s=r==null?s.c=D.F():r
s.n(0,q.ghe())
return!0},
av:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.S()
s=-s}if(this.r){if(typeof r!=="number")return r.S()
r=-r}return new V.ad(s,r)},
bS:function(a){var s=this
t.c.a(a)
if(!J.I(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bU:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a9(a.d)
s=s.ac(s)
r=l.Q
if(typeof r!=="number")return H.u(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.av(a.y.a9(a.d).v(0,2).a2(0,s.gak()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.S()
q=l.y
if(typeof q!=="number")return H.u(q)
r.sU(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.S()
r=l.x
if(typeof r!=="number")return H.u(r)
q.sU(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.av(r.a9(q).v(0,2).a2(0,s.gak()))
r=l.c
o=p.a
if(typeof o!=="number")return o.S()
n=l.y
if(typeof n!=="number")return H.u(n)
m=l.cy
if(typeof m!=="number")return H.u(m)
r.saj(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.S()
o=l.x
if(typeof o!=="number")return H.u(o)
r=l.db
if(typeof r!=="number")return H.u(r)
m.saj(0,-n*o+r)
l.b.sU(0)
l.c.sU(0)
l.dx=l.av(a.z.a9(q).v(0,2).a2(0,s.gak()))}l.ae()},
bW:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.ac(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.S()
q=p.y
if(typeof q!=="number")return H.u(q)
s.sU(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.S()
s=p.x
if(typeof s!=="number")return H.u(s)
q.sU(-r*10*s)
p.ae()}},
eW:function(a){var s=this
if(t.dn.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eY:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!J.I(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.av(r.a9(q).v(0,2).a2(0,s.gak()))
r=l.c
o=p.a
if(typeof o!=="number")return o.S()
n=l.y
if(typeof n!=="number")return H.u(n)
m=l.cy
if(typeof m!=="number")return H.u(m)
r.saj(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.S()
o=l.x
if(typeof o!=="number")return H.u(o)
r=l.db
if(typeof r!=="number")return H.u(r)
m.saj(0,-n*o+r)
l.b.sU(0)
l.c.sU(0)
l.dx=l.av(a.z.a9(q).v(0,2).a2(0,s.gak()))
l.ae()},
hj:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
hh:function(a){var s,r,q,p,o,n,m,l=this
t.eP.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a9(a.d)
s=s.ac(s)
r=l.Q
if(typeof r!=="number")return H.u(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.av(a.y.a9(a.d).v(0,2).a2(0,s.gak()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.S()
q=l.y
if(typeof q!=="number")return H.u(q)
r.sU(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.S()
r=l.x
if(typeof r!=="number")return H.u(r)
q.sU(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.av(r.a9(q).v(0,2).a2(0,s.gak()))
r=l.c
o=p.a
if(typeof o!=="number")return o.S()
n=l.y
if(typeof n!=="number")return H.u(n)
m=l.cy
if(typeof m!=="number")return H.u(m)
r.saj(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.S()
o=l.x
if(typeof o!=="number")return H.u(o)
r=l.db
if(typeof r!=="number")return H.u(r)
m.saj(0,-n*o+r)
l.b.sU(0)
l.c.sU(0)
l.dx=l.av(a.z.a9(q).v(0,2).a2(0,s.gak()))}l.ae()},
hf:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.ac(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.S()
q=p.y
if(typeof q!=="number")return H.u(q)
s.sU(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.S()
s=p.x
if(typeof s!=="number")return H.u(s)
q.sU(-r*10*s)
p.ae()}},
aY:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(typeof o!=="number")return o.ah()
if(o<n){p.dy=n
s=b.y
p.c.ag(0,s)
p.b.ag(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
o=V.aW(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
n=p.c.d
r=Math.cos(n)
q=Math.sin(n)
p.fr=o.v(0,V.aW(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iV:1}
U.d7.prototype={
gp:function(){var s=this.r
return s==null?this.r=D.F():s},
O:function(a){var s=this.r
if(s!=null)s.C(a)},
b7:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.F():r
r=p.gf_()
s.n(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.F():q).n(0,r)
return!0},
f0:function(a){var s,r,q,p,o=this
if(!J.I(o.b,o.a.b.c))return
t.a3.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.v()
p=s+r*q
if(s!==p){o.d=p
s=new D.B("zoom",s,p)
s.b=!0
o.O(s)}},
aY:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.m2(s,s,s)}return r.f},
$iV:1}
M.cn.prototype={
gp:function(){var s=this.r
return s==null?this.r=D.F():s},
X:function(a){var s=this.r
if(s!=null)s.C(a)},
b1:function(){return this.X(null)},
fN:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gW(),q=t.f,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.gp()
m=n.a;(m==null?n.a=H.c([],q):m).push(r)}}s=new D.aQ()
s.b=!0
this.X(s)},
fP:function(a,b){var s,r
for(s=b.gM(b),r=this.gW();s.t();)s.gw(s).gp().R(0,r)
s=new D.aR()
s.b=!0
this.X(s)},
af:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.a5(s,s.length);s.t();){r=s.d
if(r!=null)r.af(a)}q.f=!1},
$ia4:1}
M.cr.prototype={
gp:function(){var s=this.r
return s==null?this.r=D.F():s},
X:function(a){var s=this.r
if(s!=null)s.C(a)},
b1:function(){return this.X(null)},
sb8:function(a){var s,r,q=this
if(a==null)a=new X.ik()
s=q.b
if(s!==a){if(s!=null)s.gp().R(0,q.gW())
r=q.b
q.b=a
a.gp().n(0,q.gW())
s=new D.B("camera",r,q.b)
s.b=!0
q.X(s)}},
sbf:function(a,b){var s,r,q=this
if(b==null)b=X.lV(null)
s=q.c
if(s!==b){if(s!=null)s.gp().R(0,q.gW())
r=q.c
q.c=b
b.gp().n(0,q.gW())
s=new D.B("target",r,q.c)
s.b=!0
q.X(s)}},
saX:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gp().R(0,r.gW())
s=r.d
r.d=a
if(a!=null)a.gp().n(0,r.gW())
q=new D.B("technique",s,r.d)
q.b=!0
r.X(q)}},
af:function(a){var s,r=this
a.cC(r.d)
r.c.Y(a)
r.b.Y(a)
s=r.d
if(s!=null)s.ag(0,a)
r.e.ag(0,a)
r.e.af(a)
r.b.am(a)
r.c.am(a)
a.cB()},
$ia4:1}
M.cx.prototype={
X:function(a){var s=this.y
if(s!=null)s.C(a)},
b1:function(){return this.X(null)},
fc:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gW(),q=t.f,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bV()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.c([],q):m).push(r)}}s=new D.aQ()
s.b=!0
this.X(s)},
fe:function(a,b){var s,r
for(s=b.gM(b),r=this.gW();s.t();)s.gw(s).gp().R(0,r)
s=new D.aR()
s.b=!0
this.X(s)},
sb8:function(a){var s,r,q=this
if(a==null)a=X.m5(null)
s=q.b
if(s!==a){if(s!=null)s.gp().R(0,q.gW())
r=q.b
q.b=a
a.gp().n(0,q.gW())
s=new D.B("camera",r,q.b)
s.b=!0
q.X(s)}},
sbf:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gp().R(0,r.gW())
s=r.c
r.c=b
b.gp().n(0,r.gW())
q=new D.B("target",s,r.c)
q.b=!0
r.X(q)}},
saX:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gp().R(0,r.gW())
s=r.d
r.d=a
if(a!=null)a.gp().n(0,r.gW())
q=new D.B("technique",s,r.d)
q.b=!0
r.X(q)}},
gp:function(){var s=this.y
return s==null?this.y=D.F():s},
af:function(a){var s,r=this
a.cC(r.d)
r.c.Y(a)
r.b.Y(a)
s=r.d
if(s!=null)s.ag(0,a)
for(s=r.e.a,s=new J.a5(s,s.length);s.t();)s.d.ag(0,a)
for(s=r.e.a,s=new J.a5(s,s.length);s.t();)s.d.af(a)
r.b.toString
a.cy.aH()
a.db.aH()
r.c.am(a)
a.cB()},
$ia4:1}
M.a4.prototype={}
A.dO.prototype={}
A.hK.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hI:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
cb:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.a7.prototype={
gau:function(a){var s=this.a?1:0
return s|0|0},
i:function(a){var s=this.a?1:0
return""+(s|0|0)},
u:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.a7))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.e1.prototype={
dh:function(a,b){if(b!=null&&b.d)a.ei(b)}}
A.em.prototype={
es:function(c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3="Required uniform value, ",c4=", was not defined or used in shader.",c5="uniform mat4 objMat;\n"
c1.z=c6
s=new P.R("")
r=c6.fr
if(r){s.a=c5
q=c5}else q=""
p=c6.fx
q=(p?s.a=q+"uniform mat4 viewObjMat;\n":q)+"uniform mat4 projViewObjMat;\n"
s.a=q
q+="\n"
s.a=q
q=s.a=q+"attribute vec3 posAttr;\n"
o=c6.k4
if(o){q+="attribute vec3 normAttr;\n"
s.a=q}n=c6.r1
s.a=(n?s.a=q+"attribute vec3 binmAttr;\n":q)+"\n"
A.pN(c6,s)
A.pP(c6,s)
A.pO(c6,s)
A.pR(c6,s)
A.pS(c6,s)
A.pQ(c6,s)
A.pT(c6,s)
q=s.a+="vec4 getPos()\n"
q+="{\n"
s.a=q
m=c6.ry
q+="   return projViewObjMat*vec4("+(m?"bendPos":"posAttr")+", 1.0);\n"
s.a=q
q+="}\n"
s.a=q
q+="\n"
s.a=q
q+="void main()\n"
s.a=q
q=s.a=q+"{\n"
if(m){q+="   setupBendData();\n"
s.a=q}if(o){q+="   normalVec = getNorm();\n"
s.a=q}if(n){q+="   binormalVec = getBinm();\n"
s.a=q}if(c6.r2){q+="   txt2D = getTxt2D();\n"
s.a=q}if(c6.rx){q+="   txtCube = getTxtCube();\n"
s.a=q}if(c6.k2){q+="   objPos = getObjPos();\n"
s.a=q}q=(c6.k3?s.a=q+"   viewPos = getViewPos();\n":q)+"   gl_Position = getPos();\n"
s.a=q
q+="}\n"
s.a=q
q=s.a=q+"\n"
c1.cr(0,q.charCodeAt(0)==0?q:q,A.pM(c1.z))
c1.Q=c1.x.h(0,"posAttr")
c1.cx=c1.x.h(0,"normAttr")
c1.ch=c1.x.h(0,"binmAttr")
c1.cy=c1.x.h(0,"txt2DAttr")
c1.db=c1.x.h(0,"txtCubeAttr")
c1.dx=c1.x.h(0,"bendAttr")
if(c6.dy)c1.id=t.q.a(c1.y.L(0,"invViewMat"))
if(r)c1.dy=t.q.a(c1.y.L(0,"objMat"))
if(p)c1.fr=t.q.a(c1.y.L(0,"viewObjMat"))
r=t.q
c1.fy=r.a(c1.y.L(0,"projViewObjMat"))
if(c6.go)c1.fx=r.a(c1.y.L(0,"viewMat"))
if(c6.x1)c1.k1=t.O.a(c1.y.L(0,"txt2DMat"))
if(c6.x2)c1.k2=r.a(c1.y.L(0,"txtCubeMat"))
if(c6.y1)c1.k3=r.a(c1.y.L(0,"colorMat"))
c1.r1=H.c([],t.hg)
q=c6.bp
if(q>0){c1.k4=c1.y.L(0,"bendMatCount")
for(l=0;l<q;++l){p=c1.r1
o=c1.y
n="bendValues["+l+"].mat"
k=o.h(0,n)
if(k==null)H.r(P.v(c3+n+c4))
p.push(r.a(k))}}if(c6.a.a)c1.r2=t.r.a(c1.y.L(0,"emissionClr"))
if(c6.b.a)c1.x1=t.r.a(c1.y.L(0,"ambientClr"))
if(c6.c.a)c1.y2=t.r.a(c1.y.L(0,"diffuseClr"))
if(c6.d.a)c1.bq=t.r.a(c1.y.L(0,"invDiffuseClr"))
r=c6.e.a
if(!r)q=!1
else q=!0
if(q){c1.dL=t.n.a(c1.y.L(0,"shininess"))
if(r)c1.dK=t.r.a(c1.y.L(0,"specularClr"))}if(c6.db){c1.dM=t.Q.a(c1.y.L(0,"envSampler"))
if(c6.r.a)c1.dN=t.r.a(c1.y.L(0,"reflectClr"))
r=c6.x.a
if(!r)q=!1
else q=!0
if(q){c1.dO=t.n.a(c1.y.L(0,"refraction"))
if(r)c1.dP=t.r.a(c1.y.L(0,"refractClr"))}}if(c6.y.a)c1.dQ=t.n.a(c1.y.L(0,"alpha"))
if(c6.k1){r=c6.z
q=r.length
if(q!==0){c1.cd=new H.C(t.J)
c1.ce=new H.C(t.en)
for(p=t.r,o=t.n,n=t.d6,j=0;j<r.length;r.length===q||(0,H.q)(r),++j){i=r[j]
h=i.a
g="barLight"+H.f(h)
f=H.c([],n)
for(m=i.b,l=0;l<m;++l){e=c1.y
d=g+"s["+l+"].startPnt"
k=e.h(0,d)
if(k==null)H.r(P.v(c3+d+c4))
p.a(k)
e=c1.y
d=g+"s["+l+"].endPnt"
c=e.h(0,d)
if(c==null)H.r(P.v(c3+d+c4))
p.a(c)
e=c1.y
d=g+"s["+l+"].color"
b=e.h(0,d)
if(b==null)H.r(P.v(c3+d+c4))
p.a(b)
if(typeof h!=="number")return h.an()
if((h&4)!==0){e=c1.y
d=g+"s["+l+"].att0"
a=e.h(0,d)
if(a==null)H.r(P.v(c3+d+c4))
o.a(a)
e=c1.y
d=g+"s["+l+"].att1"
a0=e.h(0,d)
if(a0==null)H.r(P.v(c3+d+c4))
o.a(a0)
e=c1.y
d=g+"s["+l+"].att2"
a1=e.h(0,d)
if(a1==null)H.r(P.v(c3+d+c4))
o.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c2
a3=a2
a4=a3}f.push(new A.d0(k,c,b,a4,a3,a2))}c1.ce.m(0,h,f)
m=c1.cd
e=c1.y
d=g+"Count"
k=e.h(0,d)
if(k==null)H.r(P.v(c3+d+c4))
m.m(0,h,k)}}r=c6.Q
q=r.length
if(q!==0){c1.cf=new H.C(t.J)
c1.cg=new H.C(t.af)
for(p=t.r,o=t.w,n=t.dv,j=0;j<r.length;r.length===q||(0,H.q)(r),++j){i=r[j]
h=i.a
g="dirLight"+H.f(h)
f=H.c([],n)
for(m=i.b,l=0;l<m;++l){if(typeof h!=="number")return h.an()
e=(h&1)!==0
if(e){d=c1.y
a5=g+"s["+l+"].objUp"
k=d.h(0,a5)
if(k==null)H.r(P.v(c3+a5+c4))
p.a(k)
d=c1.y
a5=g+"s["+l+"].objRight"
c=d.h(0,a5)
if(c==null)H.r(P.v(c3+a5+c4))
p.a(c)
d=c1.y
a5=g+"s["+l+"].objDir"
b=d.h(0,a5)
if(b==null)H.r(P.v(c3+a5+c4))
p.a(b)
a6=b
a7=c
a8=k}else{a6=c2
a7=a6
a8=a7}d=c1.y
a5=g+"s["+l+"].viewDir"
k=d.h(0,a5)
if(k==null)H.r(P.v(c3+a5+c4))
p.a(k)
d=c1.y
a5=g+"s["+l+"].color"
c=d.h(0,a5)
if(c==null)H.r(P.v(c3+a5+c4))
p.a(c)
if(e){e=c1.y
d=g+"sTexture2D"+l
b=e.h(0,d)
if(b==null)H.r(P.v(c3+d+c4))
o.a(b)
a9=b}else a9=c2
f.push(new A.d1(a8,a7,a6,k,c,a9))}c1.cg.m(0,h,f)
m=c1.cf
e=c1.y
d=g+"Count"
k=e.h(0,d)
if(k==null)H.r(P.v(c3+d+c4))
m.m(0,h,k)}}r=c6.ch
q=r.length
if(q!==0){c1.ci=new H.C(t.J)
c1.cj=new H.C(t.gr)
for(p=t.r,o=t.O,n=t.Q,m=t.y,e=t.n,d=t.by,j=0;j<r.length;r.length===q||(0,H.q)(r),++j){i=r[j]
h=i.a
g="pointLight"+H.f(h)
f=H.c([],d)
for(a5=i.b,l=0;l<a5;++l){b0=c1.y
b1=g+"s["+l+"].point"
k=b0.h(0,b1)
if(k==null)H.r(P.v(c3+b1+c4))
p.a(k)
b0=c1.y
b1=g+"s["+l+"].viewPnt"
c=b0.h(0,b1)
if(c==null)H.r(P.v(c3+b1+c4))
p.a(c)
b0=c1.y
b1=g+"s["+l+"].color"
b=b0.h(0,b1)
if(b==null)H.r(P.v(c3+b1+c4))
p.a(b)
if(typeof h!=="number")return h.an()
if((h&3)!==0){b0=c1.y
b1=g+"s["+l+"].invViewRotMat"
a=b0.h(0,b1)
if(a==null)H.r(P.v(c3+b1+c4))
o.a(a)
b2=a}else b2=c2
if((h&1)!==0){b0=c1.y
b1=g+"sTextureCube"+l
a=b0.h(0,b1)
if(a==null)H.r(P.v(c3+b1+c4))
n.a(a)
a9=a}else a9=c2
if((h&2)!==0){b0=c1.y
b1=g+"sShadowCube"+l
a=b0.h(0,b1)
if(a==null)H.r(P.v(c3+b1+c4))
n.a(a)
b0=c1.y
b1=g+"s["+l+"].shadowAdj"
a0=b0.h(0,b1)
if(a0==null)H.r(P.v(c3+b1+c4))
m.a(a0)
b3=a
b4=a0}else{b3=c2
b4=b3}if((h&4)!==0){b0=c1.y
b1=g+"s["+l+"].att0"
a=b0.h(0,b1)
if(a==null)H.r(P.v(c3+b1+c4))
e.a(a)
b0=c1.y
b1=g+"s["+l+"].att1"
a0=b0.h(0,b1)
if(a0==null)H.r(P.v(c3+b1+c4))
e.a(a0)
b0=c1.y
b1=g+"s["+l+"].att2"
a1=b0.h(0,b1)
if(a1==null)H.r(P.v(c3+b1+c4))
e.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c2
a3=a2
a4=a3}f.push(new A.d3(k,c,b2,b,a9,b3,b4,a4,a3,a2))}c1.cj.m(0,h,f)
a5=c1.ci
b0=c1.y
b1=g+"Count"
k=b0.h(0,b1)
if(k==null)H.r(P.v(c3+b1+c4))
a5.m(0,h,k)}}r=c6.cx
q=r.length
if(q!==0){c1.ck=new H.C(t.J)
c1.cl=new H.C(t.gb)
for(p=t.r,o=t.n,n=t.y,m=t.w,e=t.fF,j=0;j<r.length;r.length===q||(0,H.q)(r),++j){i=r[j]
h=i.a
g="spotLight"+H.f(h)
f=H.c([],e)
for(d=i.b,l=0;l<d;++l){a5=c1.y
b0=g+"s["+l+"].objPnt"
k=a5.h(0,b0)
if(k==null)H.r(P.v(c3+b0+c4))
p.a(k)
a5=c1.y
b0=g+"s["+l+"].objDir"
c=a5.h(0,b0)
if(c==null)H.r(P.v(c3+b0+c4))
p.a(c)
a5=c1.y
b0=g+"s["+l+"].viewPnt"
b=a5.h(0,b0)
if(b==null)H.r(P.v(c3+b0+c4))
p.a(b)
a5=c1.y
b0=g+"s["+l+"].color"
a=a5.h(0,b0)
if(a==null)H.r(P.v(c3+b0+c4))
p.a(a)
if(typeof h!=="number")return h.an()
if((h&3)!==0){a5=c1.y
b0=g+"s["+l+"].objUp"
a0=a5.h(0,b0)
if(a0==null)H.r(P.v(c3+b0+c4))
p.a(a0)
a5=c1.y
b0=g+"s["+l+"].objRight"
a1=a5.h(0,b0)
if(a1==null)H.r(P.v(c3+b0+c4))
p.a(a1)
a5=c1.y
b0=g+"s["+l+"].tuScalar"
b5=a5.h(0,b0)
if(b5==null)H.r(P.v(c3+b0+c4))
o.a(b5)
a5=c1.y
b0=g+"s["+l+"].tvScalar"
b6=a5.h(0,b0)
if(b6==null)H.r(P.v(c3+b0+c4))
o.a(b6)
b7=b6
b8=b5
a7=a1
a8=a0}else{b7=c2
b8=b7
a7=b8
a8=a7}a5=(h&2)!==0
if(a5){b0=c1.y
b1=g+"s["+l+"].shadowAdj"
a0=b0.h(0,b1)
if(a0==null)H.r(P.v(c3+b1+c4))
n.a(a0)
b4=a0}else b4=c2
if((h&8)!==0){b0=c1.y
b1=g+"s["+l+"].cutoff"
a0=b0.h(0,b1)
if(a0==null)H.r(P.v(c3+b1+c4))
o.a(a0)
b0=c1.y
b1=g+"s["+l+"].coneAngle"
a1=b0.h(0,b1)
if(a1==null)H.r(P.v(c3+b1+c4))
o.a(a1)
b9=a1
c0=a0}else{b9=c2
c0=b9}if((h&4)!==0){b0=c1.y
b1=g+"s["+l+"].att0"
a0=b0.h(0,b1)
if(a0==null)H.r(P.v(c3+b1+c4))
o.a(a0)
b0=c1.y
b1=g+"s["+l+"].att1"
a1=b0.h(0,b1)
if(a1==null)H.r(P.v(c3+b1+c4))
o.a(a1)
b0=c1.y
b1=g+"s["+l+"].att2"
b5=b0.h(0,b1)
if(b5==null)H.r(P.v(c3+b1+c4))
o.a(b5)
a2=b5
a3=a1
a4=a0}else{a2=c2
a3=a2
a4=a3}if((h&1)!==0){b0=c1.y
b1=g+"sTexture2D"+l
a0=b0.h(0,b1)
if(a0==null)H.r(P.v(c3+b1+c4))
m.a(a0)
a9=a0}else a9=c2
if(a5){a5=c1.y
b0=g+"sShadow2D"+l
a0=a5.h(0,b0)
if(a0==null)H.r(P.v(c3+b0+c4))
m.a(a0)
b3=a0}else b3=c2
f.push(new A.d4(k,c,b,a,a8,a7,b8,b7,b4,c0,b9,a4,a3,a2,a9,b3))}c1.cl.m(0,h,f)
d=c1.ck
a5=c1.y
b0=g+"Count"
k=a5.h(0,b0)
if(k==null)H.r(P.v(c3+b0+c4))
d.m(0,h,k)}}}},
h6:function(a,b){}}
A.dS.prototype={
i:function(a){return"barLight"+H.f(this.a)}}
A.e0.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.eH.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.eV.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.iC.prototype={
i:function(a){return this.ba}}
A.d0.prototype={}
A.d1.prototype={}
A.d3.prototype={}
A.d4.prototype={}
A.bH.prototype={
bG:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
cr:function(a,b,c){var s,r,q,p=this
p.c=b
p.d=c
p.e=p.d1(b,35633)
p.f=p.d1(p.d,35632)
s=p.a
r=s.createProgram()
p.r=r
s.attachShader(r,p.e)
s.attachShader(p.r,p.f)
s.linkProgram(p.r)
if(!s.getProgramParameter(p.r,35714)){q=s.getProgramInfoLog(p.r)
s.deleteProgram(p.r)
H.r(P.v("Failed to link shader: "+H.f(q)))}p.ha()
p.hc()},
Y:function(a){a.a.useProgram(this.r)
this.x.hI()},
d1:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.b(P.v("Error compiling shader '"+H.f(q)+"': "+H.f(s)))}return q},
ha:function(){var s,r,q,p=this,o=H.c([],t.x),n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.u(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.dO(n,r.name,q))}p.x=new A.hK(o)},
hc:function(){var s,r,q,p=this,o=H.c([],t.fj),n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.u(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.hA(r.type,r.size,r.name,q))}p.y=new A.jC(o)},
aN:function(a,b,c){var s=this.a
if(a===1)return new A.fh(s,b,c)
else return A.ld(s,this.r,b,a,c)},
eQ:function(a,b,c){var s=this.a
if(a===1)return new A.fl(s,b,c)
else return A.ld(s,this.r,b,a,c)},
eR:function(a,b,c){var s=this.a
if(a===1)return new A.fm(s,b,c)
else return A.ld(s,this.r,b,a,c)},
bm:function(a,b){return new P.fM(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
hA:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aN(b,c,d)
case 5121:return s.aN(b,c,d)
case 5122:return s.aN(b,c,d)
case 5123:return s.aN(b,c,d)
case 5124:return s.aN(b,c,d)
case 5125:return s.aN(b,c,d)
case 5126:return new A.fg(s.a,c,d)
case 35664:return new A.jy(s.a,c,d)
case 35665:return new A.fi(s.a,c,d)
case 35666:return new A.fj(s.a,c,d)
case 35667:return new A.jz(s.a,c,d)
case 35668:return new A.jA(s.a,c,d)
case 35669:return new A.jB(s.a,c,d)
case 35674:return new A.jD(s.a,c,d)
case 35675:return new A.fk(s.a,c,d)
case 35676:return new A.d2(s.a,c,d)
case 35678:return s.eQ(b,c,d)
case 35680:return s.eR(b,c,d)
case 35670:throw H.b(s.bm("BOOL",c))
case 35671:throw H.b(s.bm("BOOL_VEC2",c))
case 35672:throw H.b(s.bm("BOOL_VEC3",c))
case 35673:throw H.b(s.bm("BOOL_VEC4",c))
default:throw H.b(P.v("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.eQ.prototype={}
A.ff.prototype={}
A.jC.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
L:function(a,b){var s=this.h(0,b)
if(s==null)throw H.b(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.T()},
T:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.fh.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.jz.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.jA.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.jB.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.jx.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.fg.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.jy.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.fi.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.fj.prototype={
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.jD.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.fk.prototype={
a6:function(a){var s=new Float32Array(H.cf(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.d2.prototype={
a6:function(a){var s=new Float32Array(H.cf(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.fl.prototype={
ei:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.fm.prototype={
ej:function(a){var s=a==null||a.d<6,r=this.a,q=this.d
if(s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.kQ.prototype={
$1:function(a){return new V.X(Math.cos(a),Math.sin(a),0)}}
F.kE.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.lF(l.$1(m),k)
k=J.lF(l.$1(m+3.141592653589793/n.c),k).a_(0,j)
s=new V.G(k.a,k.b,k.c).I()
l=$.mx
if(l==null){l=new V.G(1,0,0)
$.mx=l
r=l}else r=l
q=s.aE(!J.I(s,r)?V.mz():r).I()
r=q.aE(s).I()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.v(0,l*k)
k=q.v(0,o*k)
k=j.B(0,new V.X(l.a-k.a,l.b-k.b,l.c-k.c))
if(!J.I(a.f,k)){a.f=k
l=a.a
if(l!=null)l.al()}}}
F.e3.prototype={
b9:function(){var s=this
if(!s.gdH()){C.b.R(s.a.a.d.b,s)
s.a.a.al()}s.fY()
s.fZ()
s.h_()},
h7:function(a){this.a=a
a.d.b.push(this)},
h8:function(a){this.b=a
a.d.c.push(this)},
h9:function(a){this.c=a
a.d.d.push(this)},
fY:function(){var s=this.a
if(s!=null){C.b.R(s.d.b,this)
this.a=null}},
fZ:function(){var s=this.b
if(s!=null){C.b.R(s.d.c,this)
this.b=null}},
h_:function(){var s=this.c
if(s!=null){C.b.R(s.d.d,this)
this.c=null}},
gdH:function(){return this.a==null||this.b==null||this.c==null},
eI:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.d8()
if(n!=null)q=q.B(0,n)
if(s!=null)q=q.B(0,s)
if(r!=null)q=q.B(0,r)
if(q.dY())return p
return q.I()},
eK:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.a_(0,n)
q=new V.G(o.a,o.b,o.c).I()
o=r.a_(0,n)
return q.aE(new V.G(o.a,o.b,o.c).I()).I()},
c7:function(){var s,r=this
if(r.d!=null)return!0
s=r.eI()
if(s==null){s=r.eK()
if(s==null)return!1}r.d=s
r.a.a.al()
return!0},
eH:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.d8()
if(n!=null)q=q.B(0,n)
if(s!=null)q=q.B(0,s)
if(r!=null)q=q.B(0,r)
if(q.dY())return p
return q.I()},
eJ:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.E().toString
if(Math.abs(p-0)<1e-9){j=b.a_(0,e)
o=new V.G(j.a,j.b,j.c).I()
if(q.a-r.a<0)o=o.S(0)}else{n=(j-s.b)/p
j=b.a_(0,e).v(0,n).B(0,e).a_(0,h)
o=new V.G(j.a,j.b,j.c).I()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.S(0)}j=l.d
if(j!=null){m=j.I()
o=m.aE(o).I().aE(m).I()}return o},
c5:function(){var s,r=this
if(r.e!=null)return!0
s=r.eH()
if(s==null){s=r.eJ()
if(s==null)return!1}r.e=s
r.a.a.al()
return!0},
ghv:function(a){var s=this
if(J.I(s.a,s.b))return!0
if(J.I(s.b,s.c))return!0
if(J.I(s.c,s.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.T()},
J:function(a){var s,r,q=this
if(q.gdH())return a+"disposed"
s=a+C.a.aG(J.ao(q.a.e),0)+", "+C.a.aG(J.ao(q.b.e),0)+", "+C.a.aG(J.ao(q.c.e),0)+" {"
r=q.d
s=r!=null?s+(r.i(0)+", "):s+"-, "
r=q.e
return r!=null?s+(r.i(0)+"}"):s+"-}"},
T:function(){return this.J("")}}
F.ib.prototype={}
F.jc.prototype={
bb:function(a,b,c){var s,r=b.a
r.a.a.E()
r=r.e
s=c.a
s.a.a.E()
if(r==s.e){r=b.b
r.a.a.E()
r=r.e
s=c.b
s.a.a.E()
if(r==s.e){r=b.c
r.a.a.E()
r=r.e
s=c.c
s.a.a.E()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.E()
r=r.e
s=c.b
s.a.a.E()
if(r==s.e){r=b.b
r.a.a.E()
r=r.e
s=c.c
s.a.a.E()
if(r==s.e){r=b.c
r.a.a.E()
r=r.e
s=c.a
s.a.a.E()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.E()
r=r.e
s=c.c
s.a.a.E()
if(r==s.e){r=b.b
r.a.a.E()
r=r.e
s=c.a
s.a.a.E()
if(r==s.e){r=b.c
r.a.a.E()
r=r.e
s=c.b
s.a.a.E()
s=r==s.e
r=s}else r=!1
return r}else return!1}}}}
F.iq.prototype={}
F.ir.prototype={}
F.jw.prototype={
bb:function(a,b,c){var s,r=b.a
r.a.a.E()
r=r.e
s=c.a
s.a.a.E()
if(r==s.e){r=b.b
r.a.a.E()
r=r.e
s=c.b
s.a.a.E()
return r==s.e}else{r=b.a
r.a.a.E()
r=r.e
s=c.b
s.a.a.E()
if(r==s.e){r=b.b
r.a.a.E()
r=r.e
s=c.a
s.a.a.E()
return r==s.e}else return!1}}}
F.iW.prototype={}
F.j4.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.F():s},
aD:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.aD()||!1
if(!r.a.aD())s=!1
q=r.e
if(q!=null)q.aJ(0)
return s},
hY:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.a.c
s=H.c(m.slice(0),H.lq(m).H("w<1>"))
for(m=t.j;s.length!==0;){r=C.b.ghM(s)
C.b.cE(s,0)
if(r!=null){q=H.c([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(o!=null&&a.bb(0,r,o)){q.push(o)
C.b.cE(s,p)}}if(q.length>1)b.hX(q)}}n.a.E()
n.c.cF()
n.d.cF()
n.b.ih()
n.c.cG(new F.jw())
n.d.cG(new F.jc())
m=n.e
if(m!=null)m.aJ(0)},
c4:function(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=34962,a4=a2.a.c.length
a6.toString
s=a6.a
r=(s&$.an().a)!==0?1:0
if((s&$.br().a)!==0)++r
if((s&$.bq().a)!==0)++r
if((s&$.b5().a)!==0)++r
if((s&$.bP().a)!==0)++r
if((s&$.dH().a)!==0)++r
if((s&$.dI().a)!==0)++r
if((s&$.cl().a)!==0)++r
if((s&$.bp().a)!==0)++r
q=a6.gcP(a6)
p=q*4
s=new Array(a4*q)
s.fixed$length=Array
o=H.c(s,t.m)
s=new Array(r)
s.fixed$length=Array
n=H.c(s,t.g0)
for(s=o.length,m=n.length,l=0,k=0;k<r;++k){j=a6.hr(k)
i=j.gcP(j)
if(k>=m)return H.d(n,k)
n[k]=new Z.dT(j,i,l*4,p)
for(h=0;h<a4;++h){g=a2.a.c
if(h>=g.length)return H.d(g,h)
f=g[h].hV(j)
e=l+h*q
for(g=f.length,d=0;d<g;++d){c=f[d]
if(e<0||e>=s)return H.d(o,e)
o[e]=c;++e}}l+=i}s=a5.a
b=s.createBuffer()
s.bindBuffer(a3,b)
s.bufferData(a3,new Float32Array(H.cf(o)),35044)
s.bindBuffer(a3,null)
a=new Z.bU(new Z.fv(a3,b),n,a6)
a.b=H.c([],t.aZ)
a2.b.toString
if(a2.c.b.length!==0){a0=H.c([],t.V)
for(k=0;m=a2.c.b,k<m.length;++k){m=m[k].a
m.a.a.E()
a0.push(m.e)
m=a2.c.b
if(k>=m.length)return H.d(m,k)
m=m[k].b
m.a.a.E()
a0.push(m.e)}a1=Z.mA(s,34963,a0)
a.b.push(new Z.cA(1,a0.length,a1))}if(a2.d.b.length!==0){a0=H.c([],t.V)
for(k=0;m=a2.d.b,k<m.length;++k){m=m[k].a
m.a.a.E()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.d(m,k)
m=m[k].b
m.a.a.E()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.d(m,k)
m=m[k].c
m.a.a.E()
a0.push(m.e)}a1=Z.mA(s,34963,a0)
a.b.push(new Z.cA(4,a0.length,a1))}return a},
i:function(a){var s=this,r=H.c([],t.i)
if(s.a.c.length!==0){r.push("Vertices:")
r.push(s.a.J("   "))}s.b.toString
if(s.c.b.length!==0){r.push("Lines:")
r.push(s.c.J("   "))}if(s.d.b.length!==0){r.push("Faces:")
r.push(s.d.J("   "))}return C.b.j(r,"\n")},
al:function(){var s=this.e
if(s!=null)s.C(null)}}
F.j5.prototype={
ho:function(a){var s,r,q,p,o=H.c([],t.b),n=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.n(0,n)
s.a.n(0,q)
s.a.n(0,p)
o.push(F.e4(n,q,p))}return o},
hp:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=H.c([],t.b)
for(s=this.a,r=b,q=0,p=!1,o=1;o<a;++o,++q,++r){for(n=p,m=1;m<b;++m,r=i){l=c.length
if(q<0||q>=l)return H.d(c,q)
k=c[q];++q
if(q>=l)return H.d(c,q)
j=c[q]
i=r+1
if(i<0||i>=l)return H.d(c,i)
h=c[i]
if(r<0||r>=l)return H.d(c,r)
g=c[r]
l=s.a
if(n){l.n(0,k)
s.a.n(0,j)
s.a.n(0,h)
f.push(F.e4(k,j,h))
s.a.n(0,k)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.e4(k,h,g))}else{l.n(0,j)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.e4(j,h,g))
s.a.n(0,j)
s.a.n(0,g)
s.a.n(0,k)
f.push(F.e4(j,g,k))}n=!n}p=!p}return f},
gl:function(a){return this.b.length},
cG:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.d(q,r)
p=q[r]
for(q=p.d,o=q.b.length+q.c.length+q.d.length-1;o>=0;--o){n=p.d.h(0,o)
for(m=o-1;m>=0;--m){l=p.d.h(0,m)
if(a.bb(0,n,l)){n.b9()
break}}}}},
cF:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.d(r,s)
q=r[s]
r=q.ghv(q)
if(r)q.b9()}},
aD:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].c7())q=!1
return q},
c6:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].c5())q=!1
return q},
i:function(a){return this.T()},
J:function(a){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].J(a))
return C.b.j(p,"\n")},
T:function(){return this.J("")}}
F.j6.prototype={
gl:function(a){return this.b.length},
cG:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.d(q,r)
p=q[r]
for(q=p.c,o=q.b.length+q.c.length-1;o>=0;--o){n=p.c.h(0,o)
for(m=o-1;m>=0;--m){l=p.c.h(0,m)
if(a.bb(0,n,l)){n.b9()
break}}}}},
cF:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.d(r,s)
q=r[s]
r=J.I(q.a,q.b)
if(r)q.b9()}},
i:function(a){return this.T()},
J:function(a){var s,r,q=H.c([],t.i),p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.d(r,s)
q.push(r[s].J(a+(""+s+". ")))}return C.b.j(q,"\n")},
T:function(){return this.J("")}}
F.j7.prototype={
gl:function(a){return 0},
ih:function(){var s,r
for(s=-1;!1;--s){r=this.b
return H.d(r,s)
r=r[s].giV()
r=r.giS(r)
if(r.gl(r).a3(0,1)){r=this.b
return H.d(r,s)
r[s].b9()}}},
i:function(a){return this.T()},
J:function(a){var s,r,q=H.c([],t.i)
for(s=this.b,r=0;!1;++r){if(r>=0)return H.d(s,r)
q.push(s[r].J(a))}return C.b.j(q,"\n")},
T:function(){return this.J("")}}
F.ft.prototype={
dF:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.jT(s.cx,p,m,r,q,o,n,a,l)},
hV:function(a){var s,r,q=this
if(a.u(0,$.an())){s=q.f
r=t.m
if(s==null)return H.c([0,0,0],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.u(0,$.br())){s=q.r
r=t.m
if(s==null)return H.c([0,1,0],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.u(0,$.bq())){s=q.x
r=t.m
if(s==null)return H.c([0,0,1],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.u(0,$.b5())){s=q.y
r=t.m
if(s==null)return H.c([0,0],r)
else return H.c([s.a,s.b],r)}else if(a.u(0,$.bP())){s=q.z
r=t.m
if(s==null)return H.c([0,0,0],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.u(0,$.dH())){s=q.Q
r=t.m
if(s==null)return H.c([1,1,1],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.u(0,$.dI())){s=q.Q
r=t.m
if(s==null)return H.c([1,1,1,1],r)
else return H.c([s.a,s.b,s.c,s.d],r)}else if(a.u(0,$.cl()))return H.c([q.ch],t.m)
else if(a.u(0,$.bp())){s=q.cx
r=t.m
if(s==null)return H.c([-1,-1,-1,-1],r)
else return H.c([s.a,s.b,s.c,s.d],r)}else return H.c([],t.m)},
c7:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.d8()
r.d.A(0,new F.k3(q))
r.r=q.a.I()
q=r.a
if(q!=null){q.al()
q=r.a.e
if(q!=null)q.aJ(0)}return!0},
c5:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.d8()
r.d.A(0,new F.k2(q))
r.x=q.a.I()
q=r.a
if(q!=null){q.al()
q=r.a.e
if(q!=null)q.aJ(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.T()},
J:function(a){var s,r,q=this,p="-",o=H.c([],t.i)
o.push(C.a.aG(J.ao(q.e),0))
s=q.f
if(s!=null)o.push(s.i(0))
else o.push(p)
s=q.r
if(s!=null)o.push(s.i(0))
else o.push(p)
s=q.x
if(s!=null)o.push(s.i(0))
else o.push(p)
s=q.y
if(s!=null)o.push(s.i(0))
else o.push(p)
s=q.z
if(s!=null)o.push(s.i(0))
else o.push(p)
s=q.Q
if(s!=null)o.push(s.i(0))
else o.push(p)
o.push(V.K(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.i(0))
else o.push(p)
r=C.b.j(o,", ")
return a+"{"+r+"}"},
T:function(){return this.J("")}}
F.k3.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.B(0,r)}}}
F.k2.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.B(0,r)}}}
F.jU.prototype={
E:function(){var s,r,q,p
if(this.b){s=this.c
r=s.length
for(q=0,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
s[p].e=q;++q}this.b=!1}},
n:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.b(P.v("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.al()
return!0},
bn:function(a,b,c,d,e,f){var s=F.jT(a,null,b,c,null,d,e,f,0)
this.n(0,s)
return s},
gl:function(a){return this.c.length},
aD:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].c7()
return!0},
c6:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].c5()
return!0},
hu:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.z==null){o=p.r.I()
if(!J.I(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.C(null)}}}}return!0},
i:function(a){return this.T()},
J:function(a){var s,r,q,p
this.E()
s=H.c([],t.i)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p)s.push(r[p].J(a))
return C.b.j(s,"\n")},
T:function(){return this.J("")}}
F.jV.prototype={
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
A:function(a,b){var s=this
C.b.A(s.b,b)
C.b.A(s.c,new F.jW(s,b))
C.b.A(s.d,new F.jX(s,b))},
i:function(a){return this.T()},
T:function(){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].J(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].J(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].J(""))
return C.b.j(p,"\n")}}
F.jW.prototype={
$1:function(a){if(!J.I(a.a,this.a))this.b.$1(a)}}
F.jX.prototype={
$1:function(a){var s=this.a
if(!J.I(a.a,s)&&!J.I(a.b,s))this.b.$1(a)}}
F.jY.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.d(r,s)
return r[s]}else{if(b<0)return H.d(r,b)
return r[b]}},
i:function(a){return this.T()},
T:function(){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].J(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].J(""))
return C.b.j(p,"\n")}}
F.k_.prototype={}
F.jZ.prototype={
bb:function(a,b,c){return J.I(b.f,c.f)}}
F.k0.prototype={}
F.iU.prototype={
hX:function(a){var s,r,q,p,o,n,m=V.d8()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)m=new V.G(m.a+q.a,m.b+q.b,m.c+q.c)}m=m.I()
for(s=a.length,q=m==null,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){p=a[r]
o=q?null:m.I()
if(!J.I(p.r,o)){p.r=o
n=p.a
if(n!=null){n=n.e
if(n!=null)n.C(null)}}}return null}}
F.k1.prototype={
gl:function(a){return 0},
i:function(a){return this.T()},
T:function(){var s,r,q=H.c([],t.i)
for(s=this.b,r=0;!1;++r){if(r>=0)return H.d(s,r)
q.push(s[r].J(""))}return C.b.j(q,"\n")}}
O.hZ.prototype={
gp:function(){var s=this.r
return s==null?this.r=D.F():s},
as:function(){var s=this.r
if(s!=null)s.C(null)},
sdE:function(a){if(this.b!=a){this.b=a
this.as()}},
sdB:function(a){if(this.c!=a){this.c=a
this.as()}},
sdA:function(a){var s=a==null?V.bE():a
this.f=s
if(!J.I(s,a)){this.f=a
this.as()}},
ag:function(a,b){},
bk:function(a,b){if(b!=null)if(!C.b.F(a,b)){b.a=a.length
a.push(b)}},
cH:function(a,b){var s,r,q,p,o,n,m,l=this,k="Distort"
if(l.a==null){s=a.fr.h(0,k)
if(s==null){r=a.a
s=new A.e1(r,k)
s.bG(r,k)
s.cr(0,"uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n","precision mediump float;                           \n                                                   \nuniform sampler2D colorTxt;                        \nuniform sampler2D bumpTxt;                         \nuniform mat4 bumpMat;                              \n                                                   \nvarying vec2 colorTxt2D;                           \nvarying vec2 bumpTxt2D;                            \n                                                   \nvec2 offset()                                      \n{                                                  \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb; \n   txt2D = normalize(txt2D*2.0 - 1.0);             \n   return (bumpMat * vec4(txt2D, 1.0)).xy;         \n}                                                  \n                                                   \nvoid main()                                        \n{                                                  \n   vec2 txt2D = colorTxt2D + offset();             \n   gl_FragColor = texture2D(colorTxt, txt2D);      \n}                                                  \n")
s.z=s.x.h(0,"posAttr")
s.Q=s.x.h(0,"txt2DAttr")
r=t.q
s.ch=r.a(s.y.L(0,"projViewObjMat"))
q=t.O
s.cx=q.a(s.y.L(0,"colorTxt2DMat"))
s.cy=q.a(s.y.L(0,"bumpTxt2DMat"))
q=t.w
s.db=q.a(s.y.L(0,"colorTxt"))
s.dx=q.a(s.y.L(0,"bumpTxt"))
s.dy=r.a(s.y.L(0,"bumpMat"))
a.c3(s)}l.a=s}if(b.e==null){r=b.d
q=$.an()
p=$.b5()
p=r.c4(new Z.d9(a.a),new Z.bj(q.a|p.a))
p.at($.an()).e=l.a.z.c
p.at($.b5()).e=l.a.Q.c
b.e=p}o=H.c([],t.A)
l.bk(o,l.b)
l.bk(o,l.c)
for(r=a.a,n=0;n<o.length;++n){q=o[n]
if(!q.c&&q.d){q.c=!0
r.activeTexture(33984+q.a)
r.bindTexture(3553,q.b)}}q=l.a
q.Y(a)
p=l.b
q.dh(q.db,p)
p=l.c
q.dh(q.dx,p)
p=a.ge5()
m=q.ch
m.toString
m.a6(p.a1(0,!0))
p=l.d
m=q.cx
m.toString
m.a6(p.a1(0,!0))
p=l.e
m=q.cy
m.toString
m.a6(p.a1(0,!0))
p=l.f
q=q.dy
q.toString
q.a6(p.a1(0,!0))
q=b.e
if(q instanceof Z.bU){q.Y(a)
q.af(a)
q.am(a)}else b.e=null
q=l.a
q.toString
r.useProgram(null)
q.x.cb()
for(n=0;n<o.length;++n){q=o[n]
if(q.c){q.c=!1
r.activeTexture(33984+q.a)
r.bindTexture(3553,null)}}}}
O.el.prototype={
gp:function(){var s=this.fr
return s==null?this.fr=D.F():s},
a7:function(a){var s=this.fr
if(s!=null)s.C(a)},
as:function(){return this.a7(null)},
d9:function(a){this.a=null
this.a7(a)},
h3:function(){return this.d9(null)},
f6:function(a,b){var s=new D.aQ()
s.b=!0
this.a7(s)},
f8:function(a,b){var s=new D.aR()
s.b=!0
this.a7(s)},
d_:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.C(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
o=p.gax()
n=d.h(0,p.gax())
d.m(0,o,n==null?1:n)}m=H.c([],t.am)
d.A(0,new O.iG(f,m))
C.b.b0(m,new O.iH())
l=new H.C(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){o=l.h(0,0)
l.m(0,0,o==null?1:o)}k=H.c([],t.M)
l.A(0,new O.iI(f,k))
C.b.b0(k,new O.iJ())
j=new H.C(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
o=p.gax()
n=j.h(0,p.gax())
j.m(0,o,n==null?1:n)}i=H.c([],t.d1)
j.A(0,new O.iK(f,i))
C.b.b0(i,new O.iL())
h=new H.C(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.q)(e),++q){p=e[q]
r=p.gax()
o=h.h(0,p.gax())
h.m(0,r,o==null?1:o)}g=H.c([],t.gk)
h.A(0,new O.iM(f,g))
C.b.b0(g,new O.iN())
e=C.c.a8(f.e.a.length+3,4)
f.dy.toString
return A.o9(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
bk:function(a,b){},
ag:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.a5(s,s.length);s.t();){r=s.d
r.toString
q=$.jS
if(q==null)q=$.jS=new V.G(0,0,1)
r.a=q
p=$.jR
r.d=p==null?$.jR=new V.G(0,1,0):p
p=$.jQ
r.e=p==null?$.jQ=new V.G(-1,0,0):p
p=r.b
if(p!=null){o=p.a
if(o!=null){r.a=o.bA(q).I()
r.d=o.bA(r.d).I()
r.e=o.bA(r.e).I()}}}},
cH:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.d_()
s=b4.fr.h(0,b3.ba)
if(s==null){s=A.o8(b3,b4.a)
b4.c3(s)}b3=b2.a=s
b5.e=null}r=b3.z
q=r.bq
b3=b5.e
if(!(b3 instanceof Z.bU))b3=b5.e=null
if(b3==null||!b3.d.u(0,q)){b3=r.k4
if(b3)b5.d.aD()
p=r.r1
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.d.c6()
o.a.c6()
o=o.e
if(o!=null)o.aJ(0)}o=r.rx
if(o){n=b5.d
m=n.e
if(m!=null)++m.d
n.a.hu()
n=n.e
if(n!=null)n.aJ(0)}l=b5.d.c4(new Z.d9(b4.a),q)
l.at($.an()).e=b2.a.Q.c
if(b3)l.at($.br()).e=b2.a.cx.c
if(p)l.at($.bq()).e=b2.a.ch.c
if(r.r2)l.at($.b5()).e=b2.a.cy.c
if(o)l.at($.bP()).e=b2.a.db.c
if(r.ry)l.at($.bp()).e=b2.a.dx.c
b5.e=l}k=H.c([],t.A)
b2.a.Y(b4)
if(r.fr){b3=b2.a
p=b4.dx
p=p.ga5(p)
b3=b3.dy
b3.toString
b3.a6(p.a1(0,!0))}if(r.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.ga5(p)
o=b4.dx
o=b4.cx=p.v(0,o.ga5(o))
p=o}b3=b3.fr
b3.toString
b3.a6(p.a1(0,!0))}b3=b2.a
p=b4.ge5()
b3=b3.fy
b3.toString
b3.a6(p.a1(0,!0))
if(r.go){b3=b2.a
p=b4.db
p=p.ga5(p)
b3=b3.fx
b3.toString
b3.a6(p.a1(0,!0))}if(r.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.a6(C.j.a1(p,!0))}if(r.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.a6(C.j.a1(p,!0))}if(r.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.a6(C.j.a1(p,!0))}if(r.bp>0){j=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,j)
for(i=0;i<j;++i){b3=b2.a
p=b2.e.a
if(i>=p.length)return H.d(p,i)
p=p[i]
b3=b3.r1
if(i>=b3.length)return H.d(b3,i)
b3=b3[i]
h=new Float32Array(H.cf(p.a1(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,h)}}if(r.a.a){b3=b2.a
p=b2.f.f
b3=b3.r2
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}if(r.k1){if(r.b.a){b3=b2.a
p=b2.r.f
b3=b3.x1
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}if(r.c.a){b3=b2.a
p=b2.x.f
b3=b3.y2
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}if(r.d.a){b3=b2.a
p=b2.y.f
b3=b3.bq
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=r.e.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.z.ch
p=p.dL
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.z.f
b3=b3.dK
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=r.z
if(b3.length>0){g=new H.C(t.a)
for(p=b2.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.q)(p),++f){e=p[f]
d=e.gax()
c=g.h(0,d)
if(c==null)c=0
g.m(0,d,c+1)
b=J.cm(b2.a.ce.h(0,d),c)
n=e.gix()
m=$.aY
n=n.bg(m==null?$.aY=new V.X(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.giC()
m=$.aY
n=n.bg(m==null?$.aY=new V.X(0,0,0):m)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaU(e)
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
if(e.gdJ()){n=e.gdt()
m=b.e
m.a.uniform1f(m.d,n)
n=e.gdu()
m=b.f
m.a.uniform1f(m.d,n)
n=e.gdv()
m=b.r
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.q)(b3),++f){o=b3[f].a
j=g.h(0,o)
if(j==null)j=0
o=b2.a.cd.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.Q
if(b3.length>0){p=b4.db
a=p.ga5(p)
a0=new H.C(t.a)
for(p=b2.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.q)(p),++f){e=p[f]
c=a0.h(0,0)
if(c==null)c=0
a0.m(0,0,c+1)
b=J.cm(b2.a.cg.h(0,0),c)
n=a.bA(e.a).I()
m=b.e
a1=n.a
a2=n.b
n=n.c
m.a.uniform3f(m.d,a1,a2,n)
n=e.c
a2=b.f
a2.a.uniform3f(a2.d,n.a,n.b,n.c)}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.q)(b3),++f){o=b3[f].a
j=a0.h(0,o)
if(j==null)j=0
o=b2.a.cf.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.ch
if(b3.length>0){p=b4.db
a=p.ga5(p)
a3=new H.C(t.a)
for(p=b2.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.q)(p),++f){e=p[f]
d=e.gax()
c=a3.h(0,d)
if(c==null)c=0
a3.m(0,d,c+1)
b=J.cm(b2.a.cj.h(0,d),c)
a4=a.v(0,e.ga5(e))
n=e.ga5(e)
m=$.aY
n=n.bg(m==null?$.aY=new V.X(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=$.aY
n=a4.bg(n==null?$.aY=new V.X(0,0,0):n)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaU(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gaK()
n=a4.cs(0)
m=n.a
a1=n.b
a2=n.c
a5=n.e
a6=n.f
a7=n.r
a8=n.y
a9=n.z
n=n.Q
b0=b.d
b0.toString
h=new Float32Array(H.cf(new V.cO(m,a1,a2,a5,a6,a7,a8,a9,n).a1(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,h)
e.gaK()
n=e.gaK()
if(!C.b.F(k,n)){n.scq(0,k.length)
k.push(n)}n=e.gaK()
m=n.gcu(n)
if(m){m=b.f
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}e.gb_()
n=e.gek()
m=b.x
m.toString
a1=n.ghF(n)
a2=n.ghG(n)
a5=n.ghH()
n=n.ghE()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gb_()
if(!C.b.F(k,n)){n.scq(0,k.length)
k.push(n)}n=e.gb_()
m=n.gcu(n)
if(m){m=b.r
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}if(e.gdJ()){n=e.gdt()
m=b.y
m.a.uniform1f(m.d,n)
n=e.gdu()
m=b.z
m.a.uniform1f(m.d,n)
n=e.gdv()
m=b.Q
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.q)(b3),++f){o=b3[f].a
j=a3.h(0,o)
if(j==null)j=0
o=b2.a.ci.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.cx
if(b3.length>0){p=b4.db
a=p.ga5(p)
b1=new H.C(t.a)
for(p=b2.dx.x,o=p.length,f=0;f<p.length;p.length===o||(0,H.q)(p),++f){e=p[f]
d=e.gax()
c=b1.h(0,d)
if(c==null)c=0
b1.m(0,d,c+1)
b=J.cm(b2.a.cl.h(0,d),c)
n=e.gic(e)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.giA(e).I()
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=a.bg(e.gic(e))
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaU(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gaK()
n=e.gcK()
m=b.f
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gcI(e)
m=b.r
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.giT()
m=b.x
m.a.uniform1f(m.d,n)
n=e.giU()
m=b.y
m.a.uniform1f(m.d,n)
e.gaK()
n=e.gaK()
if(!C.b.F(k,n)){n.scq(0,k.length)
k.push(n)}n=e.gaK()
m=n.gcu(n)
if(m){m=b.dx
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}e.gb_()
n=e.gek()
m=b.z
m.toString
a1=n.ghF(n)
a2=n.ghG(n)
a5=n.ghH()
n=n.ghE()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gb_()
if(!C.b.F(k,n)){n.scq(0,k.length)
k.push(n)}n=e.gb_()
m=n.gcu(n)
if(m){m=b.dy
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}if(e.giB()){n=e.giz()
m=b.Q
m.a.uniform1f(m.d,n)
n=e.giy()
m=b.ch
m.a.uniform1f(m.d,n)}if(e.gdJ()){n=e.gdt()
m=b.cx
m.a.uniform1f(m.d,n)
n=e.gdu()
m=b.cy
m.a.uniform1f(m.d,n)
n=e.gdv()
m=b.db
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.q)(b3),++f){o=b3[f].a
j=b1.h(0,o)
if(j==null)j=0
o=b2.a.ck.h(0,o)
o.a.uniform1i(o.d,j)}}}if(r.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.ga5(p).cs(0)}b3=b3.id
b3.toString
b3.a6(p.a1(0,!0))}if(r.db){b2.bk(k,b2.ch)
b3=b2.a
p=b2.ch
b3.h6(b3.dM,p)
if(r.r.a){b3=b2.a
p=b2.cx.f
b3=b3.dN
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=r.x.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.cy.ch
p=p.dO
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.cy.f
b3=b3.dP
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}}b3=r.y.a
p=!b3
if(p)o=!1
else o=!0
if(o){if(b3){b3=b2.a
o=b2.db.f
b3=b3.dQ
b3.a.uniform1f(b3.d,o)}b3=b4.a
b3.enable(3042)
b3.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].Y(b4)
b3=b5.e
b3.Y(b4)
b3.af(b4)
b3.am(b4)
if(p)b3=!1
else b3=!0
if(b3)b4.a.disable(3042)
for(i=0;i<k.length;++i)k[i].am(b4)
b3=b2.a
b3.toString
b4.a.useProgram(null)
b3.x.cb()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.d_().ba}}
O.iG.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.dS(a,C.c.a8(b+3,4)*4))}}
O.iH.prototype={
$2:function(a,b){return J.dJ(a.a,b.a)}}
O.iI.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.e0(a,C.c.a8(b+3,4)*4))}}
O.iJ.prototype={
$2:function(a,b){return J.dJ(a.a,b.a)}}
O.iK.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.eH(a,C.c.a8(b+3,4)*4))}}
O.iL.prototype={
$2:function(a,b){return J.dJ(a.a,b.a)}}
O.iM.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.eV(a,C.c.a8(b+3,4)*4))}}
O.iN.prototype={
$2:function(a,b){return J.dJ(a.a,b.a)}}
O.iA.prototype={
aB:function(){var s,r=this
r.cR()
s=r.f
$.E().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.B(r.b,s,1)
s.b=!0
r.a.a7(s)}}}
O.en.prototype={
aB:function(){},
df:function(a){var s,r,q=this
if(!q.c.u(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.aB()
s=q.a
s.a=null
s.a7(null)}}}
O.iB.prototype={}
O.aV.prototype={
dd:function(a){var s,r,q=this
if(!q.f.u(0,a)){s=q.f
q.f=a
r=new D.B(q.b+".color",s,a)
r.b=!0
q.a.a7(r)}},
aB:function(){this.cR()
this.dd(new V.a0(1,1,1))},
saU:function(a,b){this.df(new A.a7(!0,!1,!1))
this.dd(b)}}
O.iD.prototype={}
O.iE.prototype={
aB:function(){var s,r=this
r.cS()
s=r.ch
$.E().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.B(r.b+".refraction",s,1)
s.b=!0
r.a.a7(s)}}}
O.iF.prototype={
dg:function(a){var s=this,r=s.ch
$.E().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.B(s.b+".shininess",r,a)
r.b=!0
s.a.a7(r)}},
aB:function(){this.cS()
this.dg(100)}}
O.eP.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.F():s},
a7:function(a){var s=this.e
if(s!=null)s.C(a)},
as:function(){return this.a7(null)},
ag:function(a,b){},
cH:function(a,b){var s,r,q,p,o,n,m=this,l="Skybox"
if(m.a==null){s=a.fr.h(0,l)
if(s==null){r=a.a
s=new A.eQ(r,l)
s.bG(r,l)
s.cr(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.z=s.x.h(0,"posAttr")
r=t.n
s.Q=r.a(s.y.h(0,"fov"))
s.ch=r.a(s.y.h(0,"ratio"))
s.cx=t.r.a(s.y.h(0,"boxClr"))
s.cy=t.Q.a(s.y.h(0,"boxTxt"))
s.db=t.q.a(s.y.h(0,"viewMat"))
a.c3(s)}m.a=s}if(b.e==null){r=b.d.c4(new Z.d9(a.a),$.an())
r.at($.an()).e=m.a.z.c
b.e=r}r=m.c
if(r!=null){r.a=1
if(!r.c&&r.d>=6){r.c=!0
q=a.a
q.activeTexture(33985)
q.bindTexture(34067,r.b)}}r=a.d
q=a.c
p=m.a
p.Y(a)
o=m.b
n=p.Q
n.a.uniform1f(n.d,o)
o=p.ch
o.a.uniform1f(o.d,r/q)
q=m.c
p.cy.ej(q)
q=m.d
r=p.cx
r.a.uniform3f(r.d,q.a,q.b,q.c)
q=a.db
q=q.ga5(q).cs(0)
p=p.db
p.toString
p.a6(q.a1(0,!0))
r=b.e
if(r instanceof Z.bU){r.Y(a)
r.af(a)
r.am(a)}else b.e=null
r=m.a
r.toString
q=a.a
q.useProgram(null)
r.x.cb()
r=m.c
if(r!=null)if(r.c){r.c=!1
q.activeTexture(33984+r.a)
q.bindTexture(34067,null)}}}
O.f5.prototype={}
T.f8.prototype={}
T.jf.prototype={}
T.jj.prototype={
de:function(){if(!this.d){this.d=!0
var s=this.y
if(s!=null)s.cc()}}}
T.jk.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.F():s}}
T.jl.prototype={
hW:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=W.l0(a)
r=T.lb(o)
W.Y(s,"load",new T.jn(this,r,s,!1,o,!1,!1),!1)
return r},
aO:function(a,b,c,d,e,f){var s=W.l0(c);++this.d
W.Y(s,"load",new T.jm(this,s,!1,b,!1,d,a),!1)},
dc:function(a,b,c){var s,r,q,p
b=V.dG(b)
s=V.dG(a.width)
r=V.dG(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.kW()
q.width=s
q.height=r
p=C.i.ef(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.qc(p.getImageData(0,0,q.width,q.height))}}}
T.jn.prototype={
$1:function(a){var s,r,q=this,p=3553,o=q.b,n=q.c
o.e=n.width
o.f=n.height
s=q.a
r=s.dc(n,s.b,q.d)
o.r=n.width
o.x=n.height
n=s.a
n.bindTexture(p,q.e)
n.pixelStorei(37440,q.f?1:0)
C.p.e9(n,p,0,6408,6408,5121,r)
if(q.r)n.generateMipmap(p)
n.bindTexture(p,null)
o.de();++s.e}}
T.jm.prototype={
$1:function(a){var s=this,r=s.a,q=r.dc(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,s.e?1:0)
C.p.e9(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.cc()}++r.e}}
X.hN.prototype={
gp:function(){var s=this.fr
return s==null?this.fr=D.F():s},
a0:function(a){var s=this.fr
if(s!=null)s.C(a)},
sar:function(a,b){var s,r=this
if(b<1)b=1
s=r.a
if(s!==b){r.y=null
r.c=r.a=b
s=new D.B("width",s,b)
s.b=!0
r.a0(s)}},
sap:function(a,b){var s,r=this
if(b<1)b=1
s=r.b
if(s!==b){r.y=null
r.d=r.b=b
s=new D.B("height",s,b)
s.b=!0
r.a0(s)}},
Y:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=3553,c=36161,b=36160
if(f.f){s=a.a
r=s.drawingBufferWidth
q=f.r
if(typeof r!=="number")return r.v()
f.sar(0,C.c.Z(r*q))
s=s.drawingBufferHeight
q=f.x
if(typeof s!=="number")return s.v()
f.sap(0,C.c.Z(s*q))}if(f.y==null){s=a.a
r=f.ch
q=f.a
p=f.b
o=s.getParameter(3379)
n=V.dG(q)
m=V.dG(p)
o=V.dG(o)
n=Math.min(n,o)
m=Math.min(m,o)
l=s.createTexture()
s.bindTexture(d,l)
s.texParameteri(d,10242,33071)
s.texParameteri(d,10243,33071)
s.texParameteri(d,10241,9729)
s.texParameteri(d,10240,9729)
C.p.ea(s,d,0,6408,n,m,0,6408,5121,e)
s.bindTexture(d,e)
k=T.lb(l)
k.e=q
k.f=p
k.r=n
k.x=m
k.de()
r.b=k.b
r.c=k.c
r.d=k.d
r.e=k.e
r.f=k.f
r.r=k.r
r.x=k.x
r=r.y
if(r!=null)r.cc()
r=f.ch
q=r.b
f.z=q
f.c=r.r
f.d=r.x
s.bindTexture(d,q)
r=s.createRenderbuffer()
f.Q=r
s.bindRenderbuffer(c,r)
s.renderbufferStorage(c,33189,f.c,f.d)
r=s.createFramebuffer()
f.y=r
s.bindFramebuffer(b,r)
s.framebufferTexture2D(b,36064,d,f.z,0)
s.framebufferRenderbuffer(b,36096,c,f.Q)
s.bindTexture(d,e)
s.bindRenderbuffer(c,e)
s.bindFramebuffer(b,e)}s=a.a
s.bindFramebuffer(b,f.y)
s.enable(2884)
s.enable(2929)
s.depthFunc(513)
r=f.dy
q=r.c
a.c=C.d.Z(q*f.a)
p=r.d
a.d=C.d.Z(p*f.b)
j=r.a
i=f.c
if(typeof i!=="number")return H.u(i)
h=C.d.Z(j*i)
r=r.b
j=f.d
if(typeof j!=="number")return H.u(j)
s.viewport(h,C.d.Z(r*j),C.d.Z(q*i),C.d.Z(p*j))
s.clearDepth(f.db)
if(f.cy){r=f.cx
s.clearColor(r.a,r.b,r.c,r.d)
g=16640}else g=256
if(g>0)s.clear(g)},
am:function(a){a.a.bindFramebuffer(36160,null)}}
X.kV.prototype={}
X.ig.prototype={
gp:function(){var s=this.x
return s==null?this.x=D.F():s},
Y:function(a){var s,r,q,p,o,n,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
s=m.drawingBufferWidth
r=m.drawingBufferHeight
q=this.r
p=q.a
if(typeof s!=="number")return H.u(s)
o=C.d.Z(p*s)
p=q.b
if(typeof r!=="number")return H.u(r)
n=C.d.Z(p*r)
p=C.d.Z(q.c*s)
a.c=p
q=C.d.Z(q.d*r)
a.d=q
m.viewport(o,n,p,q)
m.clearDepth(this.c)
q=this.a
m.clearColor(q.a,q.b,q.c,q.d)
m.clear(16640)},
am:function(a){}}
X.ik.prototype={
gp:function(){var s=this.b
return s==null?this.b=D.F():s},
Y:function(a){var s
a.cy.by(V.bE())
s=V.bE()
a.db.by(s)},
am:function(a){a.cy.aH()
a.db.aH()}}
X.eB.prototype={
gp:function(){var s=this.f
return s==null?this.f=D.F():s},
a0:function(a){var s=this.f
if(s!=null)s.C(a)},
eE:function(){return this.a0(null)},
Y:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.aW(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.by(i)
p=$.m6
if(p==null){p=V.m8()
o=V.le()
n=$.mw
p=V.m1(p,o,n==null?$.mw=new V.G(0,0,-1):n)
$.m6=p
s=p}else s=p
p=q.b
if(p!=null){r=p.aY(0,a,q)
if(r!=null)s=r.v(0,s)}a.db.by(s)},
am:function(a){a.cy.aH()
a.db.aH()}}
X.je.prototype={}
V.b9.prototype={
bi:function(a){this.b=new P.ii(C.U)
this.c=null
this.d=H.c([],t.u)},
K:function(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.d
if(j.length===0)j.push(H.c([],t.k))
s=a.split("\n")
for(j=s.length,r=t.k,q=!0,p=0;p<j;++p){o=s[p]
if(q)q=!1
else k.d.push(H.c([],r))
n=document.createElement("div")
n.className="codePart"
m=k.b.eP(o,0,o.length)
l=m==null?o:m
C.S.eh(n,H.lC(l," ","&nbsp;"))
l=n.style
l.color=b
C.b.gay(k.d).push(n)}},
e3:function(a,b){var s,r,q,p=this
p.d=H.c([],t.u)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bo()
r.toString
q=new H.o(s)
q=new P.bK(r.cJ(new H.bd(q,q.gl(q))).a())
for(;q.t();)p.bx(q.gw(q))}}
V.kP.prototype={
$1:function(a){var s=C.d.eb(this.a.ghR(),2)
if(s!=="0.00")P.lB(s+" fps")}}
V.dZ.prototype={
bx:function(a){var s=this
switch(a.a){case"Class":s.K(a.b,"#551")
break
case"Comment":s.K(a.b,"#777")
break
case"Id":s.K(a.b,"#111")
break
case"Num":s.K(a.b,"#191")
break
case"Reserved":s.K(a.b,"#119")
break
case"String":s.K(a.b,"#171")
break
case"Symbol":s.K(a.b,"#616")
break
case"Type":s.K(a.b,"#B11")
break
case"Whitespace":s.K(a.b,"#111")
break}},
bo:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()\\-+*%!&|=.,?:;",i="OpenDoubleStr",h="CloseDoubleStr",g="EscDoubleStr",f="OpenSingleStr",e="CloseSingleStr",d="EscSingleStr",c="Slash",b="Comment",a="EndComment",a0="MLComment",a1="MLCStar",a2="Whitespace",a3=L.jr()
a3.d=a3.k(0,p)
s=a3.k(0,p).j(0,o)
r=K.t(new H.o("_"))
s.a.push(r)
r=K.P("a","z")
s.a.push(r)
r=K.P("A","Z")
s.a.push(r)
r=a3.k(0,o).j(0,o)
s=K.t(new H.o("_"))
r.a.push(s)
s=K.P("0","9")
r.a.push(s)
s=K.P("a","z")
r.a.push(s)
s=K.P("A","Z")
r.a.push(s)
s=a3.k(0,p).j(0,n)
r=K.P("0","9")
s.a.push(r)
r=a3.k(0,n).j(0,n)
s=K.P("0","9")
r.a.push(s)
s=a3.k(0,n).j(0,m)
r=K.t(new H.o("."))
s.a.push(r)
r=a3.k(0,m).j(0,l)
s=K.P("0","9")
r.a.push(s)
s=a3.k(0,l).j(0,l)
r=K.P("0","9")
s.a.push(r)
r=a3.k(0,p).j(0,k)
s=K.t(new H.o(j))
r.a.push(s)
s=a3.k(0,k).j(0,k)
r=K.t(new H.o(j))
s.a.push(r)
r=a3.k(0,p).j(0,i)
s=K.t(new H.o('"'))
r.a.push(s)
s=a3.k(0,i).j(0,h)
r=K.t(new H.o('"'))
s.a.push(r)
r=a3.k(0,i).j(0,g)
s=K.t(new H.o("\\"))
r.a.push(s)
s=a3.k(0,g).j(0,i)
r=K.t(new H.o('"'))
s.a.push(r)
a3.k(0,i).j(0,i).a.push(new K.b7())
r=a3.k(0,p).j(0,f)
s=K.t(new H.o("'"))
r.a.push(s)
s=a3.k(0,f).j(0,e)
r=K.t(new H.o("'"))
s.a.push(r)
r=a3.k(0,f).j(0,d)
s=K.t(new H.o("\\"))
r.a.push(s)
s=a3.k(0,d).j(0,f)
r=K.t(new H.o("'"))
s.a.push(r)
a3.k(0,f).j(0,f).a.push(new K.b7())
r=a3.k(0,p).j(0,c)
s=K.t(new H.o("/"))
r.a.push(s)
s=a3.k(0,c).j(0,b)
r=K.t(new H.o("/"))
s.a.push(r)
r=a3.k(0,b).j(0,a)
s=K.t(new H.o("\n"))
r.a.push(s)
s=a3.k(0,b).j(0,b)
r=new K.aa()
q=t.B
r.a=H.c([],q)
s.a.push(r)
s=K.t(new H.o("\n"))
r.a.push(s)
s=a3.k(0,c).j(0,a0)
r=K.t(new H.o("*"))
s.a.push(r)
r=a3.k(0,a0).j(0,a1)
s=K.t(new H.o("*"))
r.a.push(s)
s=a3.k(0,a1).j(0,a0)
r=new K.aa()
r.a=H.c([],q)
s.a.push(r)
s=K.t(new H.o("*"))
r.a.push(s)
s=a3.k(0,a1).j(0,a)
r=K.t(new H.o("/"))
s.a.push(r)
r=a3.k(0,p).j(0,a2)
s=K.t(new H.o(" \n\t"))
r.a.push(s)
s=a3.k(0,a2).j(0,a2)
r=K.t(new H.o(" \n\t"))
s.a.push(r)
r=a3.k(0,n)
r.d=r.a.N("Num")
r=a3.k(0,l)
r.d=r.a.N("Num")
r=a3.k(0,k)
r.d=r.a.N("Symbol")
r=a3.k(0,h)
r.d=r.a.N("String")
r=a3.k(0,e)
r.d=r.a.N("String")
r=a3.k(0,a)
r.d=r.a.N(b)
r=a3.k(0,a2)
r.d=r.a.N(a2)
r=a3.k(0,o)
r=r.d=r.a.N(o)
s=t.i
r.aI(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aI(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aI(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a3}}
V.e8.prototype={
bx:function(a){var s=this
switch(a.a){case"Builtin":s.K(a.b,"#411")
break
case"Comment":s.K(a.b,"#777")
break
case"Id":s.K(a.b,"#111")
break
case"Num":s.K(a.b,"#191")
break
case"Preprocess":s.K(a.b,"#737")
break
case"Reserved":s.K(a.b,"#119")
break
case"Symbol":s.K(a.b,"#611")
break
case"Type":s.K(a.b,"#171")
break
case"Whitespace":s.K(a.b,"#111")
break}},
bo:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()[]\\-+*%!&|=.,?:;",i="Slash",h="Comment",g="EndComment",f="Preprocess",e="EndPreprocess",d="Whitespace",c=L.jr()
c.d=c.k(0,p)
s=c.k(0,p).j(0,o)
r=K.t(new H.o("_"))
s.a.push(r)
r=K.P("a","z")
s.a.push(r)
r=K.P("A","Z")
s.a.push(r)
r=c.k(0,o).j(0,o)
s=K.t(new H.o("_"))
r.a.push(s)
s=K.P("0","9")
r.a.push(s)
s=K.P("a","z")
r.a.push(s)
s=K.P("A","Z")
r.a.push(s)
s=c.k(0,p).j(0,n)
r=K.P("0","9")
s.a.push(r)
r=c.k(0,n).j(0,n)
s=K.P("0","9")
r.a.push(s)
s=c.k(0,n).j(0,m)
r=K.t(new H.o("."))
s.a.push(r)
r=c.k(0,m).j(0,l)
s=K.P("0","9")
r.a.push(s)
s=c.k(0,l).j(0,l)
r=K.P("0","9")
s.a.push(r)
r=c.k(0,p).j(0,k)
s=K.t(new H.o(j))
r.a.push(s)
s=c.k(0,k).j(0,k)
r=K.t(new H.o(j))
s.a.push(r)
r=c.k(0,p).j(0,i)
s=K.t(new H.o("/"))
r.a.push(s)
s=c.k(0,i).j(0,h)
r=K.t(new H.o("/"))
s.a.push(r)
c.k(0,i).j(0,k).a.push(new K.b7())
r=c.k(0,h).j(0,g)
s=K.t(new H.o("\n"))
r.a.push(s)
s=c.k(0,h).j(0,h)
r=new K.aa()
q=t.B
r.a=H.c([],q)
s.a.push(r)
s=K.t(new H.o("\n"))
r.a.push(s)
s=c.k(0,p).j(0,f)
r=K.t(new H.o("#"))
s.a.push(r)
r=c.k(0,f).j(0,f)
s=new K.aa()
s.a=H.c([],q)
r.a.push(s)
r=K.t(new H.o("\n"))
s.a.push(r)
r=c.k(0,f).j(0,e)
s=K.t(new H.o("\n"))
r.a.push(s)
s=c.k(0,p).j(0,d)
r=K.t(new H.o(" \n\t"))
s.a.push(r)
r=c.k(0,d).j(0,d)
s=K.t(new H.o(" \n\t"))
r.a.push(s)
s=c.k(0,n)
s.d=s.a.N("Num")
s=c.k(0,l)
s.d=s.a.N("Num")
s=c.k(0,k)
s.d=s.a.N("Symbol")
s=c.k(0,g)
s.d=s.a.N(h)
s=c.k(0,e)
s.d=s.a.N(f)
s=c.k(0,d)
s.d=s.a.N(d)
s=c.k(0,o)
s=s.d=s.a.N(o)
r=t.i
s.aI(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],r))
s.aI(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],r))
s.aI(0,"Builtin",H.c(["gl_FragColor","gl_Position"],r))
return c}}
V.ea.prototype={
bx:function(a){var s=this,r="#111"
switch(a.a){case"Attr":s.K(a.b,"#911")
s.K("=",r)
break
case"Id":s.K(a.b,r)
break
case"Other":s.K(a.b,r)
break
case"Reserved":s.K(a.b,"#119")
break
case"String":s.K(a.b,"#171")
break
case"Symbol":s.K(a.b,"#616")
break}},
bo:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.jr()
j.d=j.k(0,q)
s=j.k(0,q).j(0,p)
r=K.t(new H.o("_"))
s.a.push(r)
r=K.P("a","z")
s.a.push(r)
r=K.P("A","Z")
s.a.push(r)
r=j.k(0,p).j(0,p)
s=K.t(new H.o("_"))
r.a.push(s)
s=K.P("0","9")
r.a.push(s)
s=K.P("a","z")
r.a.push(s)
s=K.P("A","Z")
r.a.push(s)
s=j.k(0,p).j(0,o)
r=K.t(new H.o("="))
s.a.push(r)
s.c=!0
s=j.k(0,q).j(0,n)
r=K.t(new H.o("</\\-!>="))
s.a.push(r)
r=j.k(0,n).j(0,n)
s=K.t(new H.o("</\\-!>="))
r.a.push(s)
s=j.k(0,q).j(0,m)
r=K.t(new H.o('"'))
s.a.push(r)
r=j.k(0,m).j(0,l)
s=K.t(new H.o('"'))
r.a.push(s)
s=j.k(0,m).j(0,"EscStr")
r=K.t(new H.o("\\"))
s.a.push(r)
r=j.k(0,"EscStr").j(0,m)
s=K.t(new H.o('"'))
r.a.push(s)
j.k(0,m).j(0,m).a.push(new K.b7())
j.k(0,q).j(0,k).a.push(new K.b7())
s=j.k(0,k).j(0,k)
r=new K.aa()
r.a=H.c([],t.B)
s.a.push(r)
s=K.t(new H.o('</\\-!>=_"'))
r.a.push(s)
s=K.P("a","z")
r.a.push(s)
s=K.P("A","Z")
r.a.push(s)
s=j.k(0,n)
s.d=s.a.N("Symbol")
s=j.k(0,l)
s.d=s.a.N("String")
s=j.k(0,p)
r=s.a.N(p)
s.d=r
r.aI(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],t.i))
r=j.k(0,o)
r.d=r.a.N(o)
r=j.k(0,k)
r.d=r.a.N(k)
return j}}
V.eD.prototype={
e3:function(a,b){this.d=H.c([],t.u)
this.K(C.b.j(b,"\n"),"#111")},
bx:function(a){},
bo:function(){return null}}
V.j8.prototype={
ew:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
m.className="scrollTop"
n.appendChild(m)
s=o.createElement("div")
s.className="scrollPage"
n.appendChild(s)
r=o.createElement("div")
r.className="pageCenter"
s.appendChild(r)
if(a.length!==0){o.title=a
q=o.createElement("div")
q.className="pageTitle"
q.textContent=a
r.appendChild(q)}p=o.createElement("div")
this.a=p
r.appendChild(p)
this.b=null
W.Y(o,"scroll",new V.ja(m),!1)},
dr:function(a){var s,r,q,p,o,n,m,l
this.hb()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.b.hU(a)
q.toString
p=new H.o(p)
p=new P.bK(q.cJ(new H.bd(p,p.gl(p))).a())
for(;p.t();){q=p.gw(p)
switch(q.a){case"Bold":o=s.createElement("div")
o.className="boldPar"
o.textContent=q.b
r.appendChild(o)
break
case"Italic":o=s.createElement("div")
o.className="italicPar"
o.textContent=q.b
r.appendChild(o)
break
case"Code":o=s.createElement("div")
o.className="codePar"
o.textContent=q.b
r.appendChild(o)
break
case"Link":q=q.b
if(H.nc(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.d(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.kr(C.y,q,C.e,!1)
m=s.createElement("a")
m.className="linkPar"
m.href="#"+H.f(l)
m.textContent=q
r.appendChild(m)}break
case"Other":o=s.createElement("div")
o.className="normalPar"
o.textContent=q.b
r.appendChild(o)
break}}this.a.appendChild(r)},
ee:function(a){var s,r,q,p=new V.dZ("dart")
p.bi("dart")
s=new V.e8("glsl")
s.bi("glsl")
r=new V.ea("html")
r.bi("html")
q=C.b.hN(H.c([p,s,r],t.b7),new V.jb(a))
if(q!=null)return q
p=new V.eD("plain")
p.bi("plain")
return p},
dq:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.c([],t.V)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(J.dF(q).aa(q,"+")){b2[r]=C.a.ai(q,1)
a8.push(1)
s=!0}else if(C.a.aa(q,"-")){b2[r]=C.a.ai(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.ee(b0)
p.e3(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m)
this.a.appendChild(n)
l=P.kr(C.y,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.lH()
h.href="#"+H.f(l)
h.textContent=a9
i.appendChild(h)
j.appendChild(i)
k.appendChild(j)
m.appendChild(k)
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
for(e=q.length,a1=0;a1<q.length;q.length===e||(0,H.q)(q),++a1)a0.appendChild(q[a1])
d.appendChild(c)
d.appendChild(b)
d.appendChild(a0)
m.appendChild(d)}else for(e=p.d,a2=e.length,a3=b1,a1=0;a1<e.length;e.length===a2||(0,H.q)(e),++a1){q=e[a1]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className=a6;++a3
c.textContent=""+a3
b=o.createElement("td")
b.className=a7
for(a4=C.b.gM(q);a4.t();)b.appendChild(a4.gw(a4))
d.appendChild(c)
d.appendChild(b)
m.appendChild(d)}},
hm:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
k.id="shellTable"
s=k.style
s.width="100%"
s.padding="0px"
s.marginLeft=m
s.marginRight=m
this.a.appendChild(k)
r=k.insertRow(-1)
s=t.bY
q=s.a(r.insertCell(-1)).style
q.textAlign="center"
q.verticalAlign="top"
q.marginLeft=m
q.marginRight=m
for(p=0;p<1;++p){o=l.createElement("div")
o.id=a[p]
q=o.style
q.textAlign="left"
q=o.style
q.verticalAlign="top"
n=s.a(r.insertCell(-1))
q=n.style
q.textAlign="center"
q.verticalAlign="top"
q.marginLeft=m
q.marginRight=m
n.appendChild(o)}},
hb:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other"
if(this.b!=null)return
s=L.jr()
s.d=s.k(0,o)
r=s.k(0,o).j(0,n)
q=K.t(new H.o("*"))
r.a.push(q)
r.c=!0
r=s.k(0,n).j(0,n)
q=new K.aa()
p=t.B
q.a=H.c([],p)
r.a.push(q)
r=K.t(new H.o("*"))
q.a.push(r)
r=s.k(0,n).j(0,"BoldEnd")
q=K.t(new H.o("*"))
r.a.push(q)
r.c=!0
r=s.k(0,o).j(0,m)
q=K.t(new H.o("_"))
r.a.push(q)
r.c=!0
r=s.k(0,m).j(0,m)
q=new K.aa()
q.a=H.c([],p)
r.a.push(q)
r=K.t(new H.o("_"))
q.a.push(r)
r=s.k(0,m).j(0,l)
q=K.t(new H.o("_"))
r.a.push(q)
r.c=!0
r=s.k(0,o).j(0,k)
q=K.t(new H.o("`"))
r.a.push(q)
r.c=!0
r=s.k(0,k).j(0,k)
q=new K.aa()
q.a=H.c([],p)
r.a.push(q)
r=K.t(new H.o("`"))
q.a.push(r)
r=s.k(0,k).j(0,"CodeEnd")
q=K.t(new H.o("`"))
r.a.push(q)
r.c=!0
r=s.k(0,o).j(0,j)
q=K.t(new H.o("["))
r.a.push(q)
r.c=!0
r=s.k(0,j).j(0,i)
q=K.t(new H.o("|"))
r.a.push(q)
q=s.k(0,j).j(0,h)
r=K.t(new H.o("]"))
q.a.push(r)
q.c=!0
q=s.k(0,j).j(0,j)
r=new K.aa()
r.a=H.c([],p)
q.a.push(r)
q=K.t(new H.o("|]"))
r.a.push(q)
q=s.k(0,i).j(0,h)
r=K.t(new H.o("]"))
q.a.push(r)
q.c=!0
q=s.k(0,i).j(0,i)
r=new K.aa()
r.a=H.c([],p)
q.a.push(r)
q=K.t(new H.o("|]"))
r.a.push(q)
s.k(0,o).j(0,g).a.push(new K.b7())
q=s.k(0,g).j(0,g)
r=new K.aa()
r.a=H.c([],p)
q.a.push(r)
q=K.t(new H.o("*_`["))
r.a.push(q)
q=s.k(0,"BoldEnd")
q.d=q.a.N(n)
q=s.k(0,l)
q.d=q.a.N(m)
q=s.k(0,"CodeEnd")
q.d=q.a.N(k)
q=s.k(0,h)
q.d=q.a.N("Link")
q=s.k(0,g)
q.d=q.a.N(g)
this.b=s}}
V.ja.prototype={
$1:function(a){P.mn(C.n,new V.j9(this.a))}}
V.j9.prototype={
$0:function(){var s=C.d.Z(document.documentElement.scrollTop),r=this.a.style,q=H.f(-0.01*s)+"px"
r.top=q}}
V.jb.prototype={
$1:function(a){return a.a===this.a}}
V.jg.prototype={
dn:function(a,b,c){var s,r,q,p,o=this,n=W.l0(null)
n.src=b
n.width=64
n.height=64
s=n.style
s.border="solid 2px white"
s=J.dK(o.c)
r=s.gl(s)
W.Y(n,"click",new V.ji(o,n,b,r),!1)
J.dK(o.c).n(0,n)
J.dK(o.c).n(0,document.createElement("br"))
q=P.mr().gcD().h(0,H.f(o.a))
if(q==null){o.dm(r)
p=c}else p=P.hF(q,null)==r
if(p)n.click()},
n:function(a,b){return this.dn(a,b,!1)},
dm:function(a){var s,r,q=P.mr(),p=t.X,o=P.o5(q.gcD(),p,p)
o.m(0,this.a,H.f(a))
s=q.e6(0,o)
p=window.history
r=s.gc1()
p.toString
p.replaceState(new P.kj([],[]).bB(""),"",r)}}
V.ji.prototype={
$1:function(a){var s=this,r=s.a,q=J.dK(r.c)
q.A(q,new V.jh())
q=s.b.style
q.border="solid 2px black"
r.d.$1(s.c)
r.dm(s.d)}}
V.jh.prototype={
$1:function(a){var s
if(t.eN.b(a)){s=a.style
s.border="solid 2px white"}}}
X.kM.prototype={
$1:function(a){this.a.sdB(this.b.f.hW(a))}}
X.kN.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.a,p=t.s
s.dq("Vertex Shader for distort","glsl",0,H.c((q==null?null:q.c).split("\n"),p))
r=r.a
s.dq("Fragment Shader for distort","glsl",0,H.c((r==null?null:r.d).split("\n"),p))}};(function aliases(){var s=J.a.prototype
s.en=s.i
s=J.bc.prototype
s.ep=s.i
s=P.h.prototype
s.eo=s.bC
s=W.D.prototype
s.bF=s.ao
s=W.dl.prototype
s.eq=s.aw
s=K.e9.prototype
s.em=s.aF
s.cQ=s.i
s=O.en.prototype
s.cR=s.aB
s=O.aV.prototype
s.cS=s.aB})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"pq","o1",22)
r(P,"q5","oC",7)
r(P,"q6","oD",7)
r(P,"q7","oE",7)
q(P,"n2","q0",8)
r(W,"rG","i4",23)
p(W,"qj",4,null,["$4"],["oF"],15,0)
p(W,"qk",4,null,["$4"],["oG"],15,0)
var j
o(j=E.by.prototype,"ge1",0,0,null,["$1","$0"],["e2","i4"],0,0)
o(j,"ge_",0,0,null,["$1","$0"],["e0","i1"],0,0)
n(j,"gi_","i0",4)
n(j,"gi2","i3",4)
o(j=E.f9.prototype,"gcU",0,0,null,["$1","$0"],["cW","cV"],0,0)
m(j,"gik","e7",8)
l(j=X.fs.prototype,"gfl","fm",5)
l(j,"gf9","fa",5)
l(j,"gff","fg",2)
l(j,"gfp","fq",9)
l(j,"gfn","fo",9)
l(j,"gfu","fv",2)
l(j,"gfA","fB",2)
l(j,"gfj","fk",2)
l(j,"gfw","fz",2)
l(j,"gfh","fi",2)
l(j,"gfC","fD",20)
l(j,"gfE","fF",5)
l(j,"gfU","fV",6)
l(j,"gfQ","fR",6)
l(j,"gfS","fT",6)
o(D.bw.prototype,"gey",0,0,null,["$1","$0"],["az","ez"],0,0)
o(j=D.cF.prototype,"gd6",0,0,null,["$1","$0"],["d7","fs"],0,0)
l(j,"gfG","fH",21)
n(j,"gf3","f4",10)
n(j,"gfK","fL",10)
k(V.ad.prototype,"gl","ct",11)
k(V.G.prototype,"gl","ct",11)
o(j=U.bX.prototype,"gaP",0,0,null,["$1","$0"],["O","ae"],0,0)
n(j,"gf1","f2",12)
n(j,"gfI","fJ",12)
o(j=U.d5.prototype,"gaP",0,0,null,["$1","$0"],["O","ae"],0,0)
l(j,"gbR","bS",1)
l(j,"gbT","bU",1)
l(j,"gbV","bW",1)
o(j=U.d6.prototype,"gaP",0,0,null,["$1","$0"],["O","ae"],0,0)
l(j,"gbR","bS",1)
l(j,"gbT","bU",1)
l(j,"gbV","bW",1)
l(j,"geV","eW",1)
l(j,"geX","eY",1)
l(j,"ghi","hj",1)
l(j,"ghg","hh",1)
l(j,"ghe","hf",1)
l(U.d7.prototype,"gf_","f0",1)
o(j=M.cn.prototype,"gW",0,0,null,["$1","$0"],["X","b1"],0,0)
n(j,"gfM","fN",13)
n(j,"gfO","fP",13)
o(M.cr.prototype,"gW",0,0,null,["$1","$0"],["X","b1"],0,0)
o(j=M.cx.prototype,"gW",0,0,null,["$1","$0"],["X","b1"],0,0)
n(j,"gfb","fc",4)
n(j,"gfd","fe",4)
o(j=O.el.prototype,"gbH",0,0,null,["$1","$0"],["a7","as"],0,0)
o(j,"gh2",0,0,null,["$1","$0"],["d9","h3"],0,0)
n(j,"gf5","f6",14)
n(j,"gf7","f8",14)
o(O.eP.prototype,"gbH",0,0,null,["$1","$0"],["a7","as"],0,0)
o(X.eB.prototype,"geD",0,0,null,["$1","$0"],["a0","eE"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.N,null)
q(P.N,[H.l4,J.a,J.a5,P.L,P.de,P.h,H.bd,P.ec,H.cy,H.fp,H.cp,H.ju,H.iV,H.hc,H.bv,P.U,H.is,H.ej,H.ee,H.at,H.fP,P.ds,P.cd,P.bK,P.fx,P.cX,P.f_,P.cZ,P.kv,P.dk,P.kb,P.dd,P.i,P.hr,P.cM,P.dV,P.ij,P.kt,P.ks,P.az,P.ah,P.Q,P.bx,P.eA,P.cW,P.fM,P.ie,P.aC,P.n,P.H,P.ar,P.y,P.R,P.bL,P.jF,P.h6,W.hV,W.l_,W.lf,W.cc,W.M,W.cU,W.dl,W.hh,W.cz,W.ak,W.kf,W.hs,P.ki,P.du,P.h4,P.bi,K.b7,K.e9,K.iz,K.iY,K.j3,L.eX,L.fa,L.fb,L.jq,O.a6,O.cP,E.hQ,E.by,E.bT,E.c2,E.fJ,E.iZ,E.f9,Z.fv,Z.d9,Z.bU,Z.cA,Z.bj,D.hR,D.bV,D.S,X.dU,X.eg,X.ip,X.ix,X.aq,X.iR,X.js,X.fs,D.dR,D.bw,D.T,D.eF,D.eU,V.a0,V.aB,V.i7,V.cO,V.be,V.ab,V.X,V.bG,V.eK,V.ad,V.G,U.d5,U.d6,U.d7,M.cr,M.cx,M.a4,A.dO,A.hK,A.a7,A.dS,A.e0,A.eH,A.eV,A.iC,A.d0,A.d1,A.d3,A.d4,A.ff,A.jC,F.e3,F.ib,F.iq,F.ir,F.iW,F.j4,F.j5,F.j6,F.j7,F.ft,F.jU,F.jV,F.jY,F.k_,F.k0,F.k1,O.f5,O.en,O.iD,T.jl,X.je,X.kV,X.ik,X.eB,V.b9,V.j8,V.jg])
q(J.a,[J.ed,J.cE,J.bc,J.w,J.bC,J.aS,H.cQ,H.W,W.e,W.hI,W.bs,W.aP,W.J,W.fC,W.ap,W.hY,W.i_,W.fE,W.cu,W.fG,W.i0,W.j,W.fN,W.aD,W.ih,W.fR,W.bA,W.iw,W.iO,W.fV,W.fW,W.aF,W.fX,W.fZ,W.aG,W.h2,W.h5,W.aH,W.h7,W.aI,W.hd,W.av,W.hj,W.jp,W.aJ,W.hl,W.jt,W.jK,W.ht,W.hv,W.hx,W.hz,W.hB,P.aT,P.fT,P.aX,P.h0,P.iX,P.he,P.aZ,P.hn,P.hL,P.fz,P.eL,P.ha])
q(J.bc,[J.eC,J.bJ,J.aE])
r(J.im,J.w)
q(J.bC,[J.cD,J.cC])
q(P.L,[H.eh,H.ew,H.ef,H.fo,H.eN,H.fK,P.dN,P.ex,P.ag,P.fq,P.fn,P.c6,P.dW,P.dY])
r(P.cI,P.de)
q(P.cI,[H.c8,W.fA,W.a1,P.e6])
r(H.o,H.c8)
q(P.h,[H.l,H.aU,H.b1,P.cB])
q(H.l,[H.cJ,H.cG])
r(H.cv,H.aU)
q(P.ec,[H.ek,H.fw])
r(H.cN,H.cJ)
r(H.cq,H.cp)
q(H.bv,[H.f4,H.io,H.kH,H.kI,H.kJ,P.k5,P.k4,P.k6,P.k7,P.ko,P.kn,P.kC,P.kd,P.ke,P.it,P.iy,P.jN,P.jO,P.i1,P.i2,P.jJ,P.jG,P.jH,P.jI,P.kq,P.kp,P.kx,P.kw,P.ky,P.kz,W.i3,W.iP,W.iQ,W.j2,W.jd,W.k8,W.iT,W.iS,W.kg,W.kh,W.km,W.ku,P.kk,P.kl,P.kD,P.ic,P.id,P.hM,E.j_,E.j0,E.j1,E.jo,D.i9,D.ia,F.kQ,F.kE,F.k3,F.k2,F.jW,F.jX,O.iG,O.iH,O.iI,O.iJ,O.iK,O.iL,O.iM,O.iN,T.jn,T.jm,V.kP,V.ja,V.j9,V.jb,V.ji,V.jh,X.kM,X.kN])
q(H.f4,[H.eY,H.bS])
r(P.cL,P.U)
q(P.cL,[H.C,W.fy])
r(H.c0,H.W)
q(H.c0,[H.dg,H.di])
r(H.dh,H.dg)
r(H.bF,H.dh)
r(H.dj,H.di)
r(H.cR,H.dj)
q(H.cR,[H.er,H.es,H.et,H.eu,H.ev,H.cS,H.c1])
r(H.dt,H.fK)
r(P.dp,P.cB)
r(P.kc,P.kv)
r(P.dc,P.dk)
r(P.dx,P.cM)
r(P.c9,P.dx)
q(P.dV,[P.hO,P.i5])
r(P.dX,P.f_)
q(P.dX,[P.hP,P.ii,P.jP,P.jM])
r(P.jL,P.i5)
q(P.Q,[P.a_,P.k])
q(P.ag,[P.c4,P.eb])
r(P.fD,P.bL)
q(W.e,[W.x,W.e5,W.bY,W.au,W.dm,W.aw,W.ac,W.dq,W.fu,W.ca,P.dQ,P.b8])
q(W.x,[W.D,W.aA,W.cb])
q(W.D,[W.p,P.m])
q(W.p,[W.dL,W.dM,W.bR,W.bt,W.bu,W.ba,W.e7,W.bB,W.eO,W.bh,W.cY,W.f2,W.f3,W.c7])
r(W.hU,W.aP)
r(W.cs,W.fC)
q(W.ap,[W.hW,W.hX])
r(W.fF,W.fE)
r(W.ct,W.fF)
r(W.fH,W.fG)
r(W.e2,W.fH)
r(W.ai,W.bs)
r(W.fO,W.fN)
r(W.bW,W.fO)
r(W.fS,W.fR)
r(W.bz,W.fS)
r(W.b0,W.j)
q(W.b0,[W.bD,W.aj,W.bI])
r(W.eo,W.fV)
r(W.ep,W.fW)
r(W.fY,W.fX)
r(W.eq,W.fY)
r(W.h_,W.fZ)
r(W.cT,W.h_)
r(W.h3,W.h2)
r(W.eE,W.h3)
r(W.eM,W.h5)
r(W.dn,W.dm)
r(W.eS,W.dn)
r(W.h8,W.h7)
r(W.eT,W.h8)
r(W.eZ,W.hd)
r(W.hk,W.hj)
r(W.f6,W.hk)
r(W.dr,W.dq)
r(W.f7,W.dr)
r(W.hm,W.hl)
r(W.fc,W.hm)
r(W.bk,W.aj)
r(W.hu,W.ht)
r(W.fB,W.hu)
r(W.da,W.cu)
r(W.hw,W.hv)
r(W.fQ,W.hw)
r(W.hy,W.hx)
r(W.df,W.hy)
r(W.hA,W.hz)
r(W.h9,W.hA)
r(W.hC,W.hB)
r(W.hg,W.hC)
r(W.fI,W.fy)
r(W.fL,P.cX)
r(W.hi,W.dl)
r(P.kj,P.ki)
r(P.a8,P.h4)
r(P.fU,P.fT)
r(P.ei,P.fU)
r(P.h1,P.h0)
r(P.ey,P.h1)
r(P.c5,P.m)
r(P.hf,P.he)
r(P.f0,P.hf)
r(P.ho,P.hn)
r(P.fd,P.ho)
r(P.dP,P.fz)
r(P.ez,P.b8)
r(P.hb,P.ha)
r(P.eW,P.hb)
q(K.e9,[K.aa,L.fe])
q(E.hQ,[Z.dT,A.bH,T.f8])
q(D.S,[D.aQ,D.aR,D.B,X.eG])
q(X.eG,[X.cK,X.bZ,X.c_,X.d_])
q(O.a6,[D.cF,U.bX,M.cn])
q(D.hR,[U.hT,U.V])
r(U.co,U.V)
q(A.bH,[A.e1,A.em,A.eQ])
q(A.ff,[A.fh,A.jz,A.jA,A.jB,A.jx,A.fg,A.jy,A.fi,A.fj,A.jD,A.fk,A.d2,A.fl,A.fm])
r(F.jc,F.ib)
r(F.jw,F.ir)
r(F.jZ,F.k_)
r(F.iU,F.k0)
q(O.f5,[O.hZ,O.el,O.eP])
q(O.en,[O.iA,O.iB,O.aV])
q(O.aV,[O.iE,O.iF])
q(T.f8,[T.jf,T.jk])
r(T.jj,T.jf)
q(X.je,[X.hN,X.ig])
q(V.b9,[V.dZ,V.e8,V.ea,V.eD])
s(H.c8,H.fp)
s(H.dg,P.i)
s(H.dh,H.cy)
s(H.di,P.i)
s(H.dj,H.cy)
s(P.de,P.i)
s(P.dx,P.hr)
s(W.fC,W.hV)
s(W.fE,P.i)
s(W.fF,W.M)
s(W.fG,P.i)
s(W.fH,W.M)
s(W.fN,P.i)
s(W.fO,W.M)
s(W.fR,P.i)
s(W.fS,W.M)
s(W.fV,P.U)
s(W.fW,P.U)
s(W.fX,P.i)
s(W.fY,W.M)
s(W.fZ,P.i)
s(W.h_,W.M)
s(W.h2,P.i)
s(W.h3,W.M)
s(W.h5,P.U)
s(W.dm,P.i)
s(W.dn,W.M)
s(W.h7,P.i)
s(W.h8,W.M)
s(W.hd,P.U)
s(W.hj,P.i)
s(W.hk,W.M)
s(W.dq,P.i)
s(W.dr,W.M)
s(W.hl,P.i)
s(W.hm,W.M)
s(W.ht,P.i)
s(W.hu,W.M)
s(W.hv,P.i)
s(W.hw,W.M)
s(W.hx,P.i)
s(W.hy,W.M)
s(W.hz,P.i)
s(W.hA,W.M)
s(W.hB,P.i)
s(W.hC,W.M)
s(P.fT,P.i)
s(P.fU,W.M)
s(P.h0,P.i)
s(P.h1,W.M)
s(P.he,P.i)
s(P.hf,W.M)
s(P.hn,P.i)
s(P.ho,W.M)
s(P.fz,P.U)
s(P.ha,P.i)
s(P.hb,W.M)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",a_:"double",Q:"num",y:"String",az:"bool",ar:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([S*])","~(S*)","~(aj*)","ar(@,@)","~(k*,h<by*>*)","~(j*)","~(bI*)","~(~())","~()","~(bD*)","~(k*,h<T*>*)","a_*()","~(k*,h<V*>*)","~(k*,h<a4*>*)","~(k*,h<be*>*)","az(D,y,y,cc)","@(@)","ar(@)","ar(N?,N?)","bi(@,@)","~(bk*)","az*(h<T*>*)","k(@,@)","y(e)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.oZ(v.typeUniverse,JSON.parse('{"aE":"bc","eC":"bc","bJ":"bc","qB":"j","qL":"j","qD":"b8","qC":"e","qS":"e","qU":"e","qA":"m","qM":"m","qE":"p","qP":"p","qN":"x","qK":"x","rj":"ac","qI":"b0","qF":"aA","qV":"aA","qT":"aj","qO":"bz","qR":"bF","qQ":"W","ed":{"az":[]},"bc":{"lX":[],"aC":[]},"w":{"n":["1"],"l":["1"],"h":["1"]},"im":{"w":["1"],"n":["1"],"l":["1"],"h":["1"]},"bC":{"a_":[],"Q":[]},"cD":{"a_":[],"k":[],"Q":[]},"cC":{"a_":[],"Q":[]},"aS":{"y":[]},"eh":{"L":[]},"o":{"i":["k"],"n":["k"],"l":["k"],"h":["k"],"i.E":"k"},"l":{"h":["1"]},"cJ":{"l":["1"],"h":["1"]},"aU":{"h":["2"],"h.E":"2"},"cv":{"aU":["1","2"],"l":["2"],"h":["2"],"h.E":"2"},"cN":{"cJ":["2"],"l":["2"],"h":["2"],"h.E":"2"},"b1":{"h":["1"],"h.E":"1"},"c8":{"i":["1"],"n":["1"],"l":["1"],"h":["1"]},"cp":{"H":["1","2"]},"cq":{"H":["1","2"]},"ew":{"L":[]},"ef":{"L":[]},"fo":{"L":[]},"bv":{"aC":[]},"f4":{"aC":[]},"eY":{"aC":[]},"bS":{"aC":[]},"eN":{"L":[]},"C":{"U":["1","2"],"H":["1","2"]},"cG":{"l":["1"],"h":["1"],"h.E":"1"},"ee":{"mf":[]},"c0":{"z":["1"],"W":[]},"bF":{"i":["a_"],"z":["a_"],"n":["a_"],"W":[],"l":["a_"],"h":["a_"],"i.E":"a_"},"cR":{"i":["k"],"z":["k"],"n":["k"],"W":[],"l":["k"],"h":["k"]},"er":{"i":["k"],"z":["k"],"n":["k"],"W":[],"l":["k"],"h":["k"],"i.E":"k"},"es":{"i":["k"],"z":["k"],"n":["k"],"W":[],"l":["k"],"h":["k"],"i.E":"k"},"et":{"i":["k"],"z":["k"],"n":["k"],"W":[],"l":["k"],"h":["k"],"i.E":"k"},"eu":{"i":["k"],"z":["k"],"n":["k"],"W":[],"l":["k"],"h":["k"],"i.E":"k"},"ev":{"i":["k"],"z":["k"],"n":["k"],"W":[],"l":["k"],"h":["k"],"i.E":"k"},"cS":{"i":["k"],"z":["k"],"n":["k"],"W":[],"l":["k"],"h":["k"],"i.E":"k"},"c1":{"i":["k"],"bi":[],"z":["k"],"n":["k"],"W":[],"l":["k"],"h":["k"],"i.E":"k"},"fK":{"L":[]},"dt":{"L":[]},"ds":{"cZ":[]},"dp":{"h":["1"],"h.E":"1"},"dc":{"dk":["1"],"l":["1"],"h":["1"]},"cB":{"h":["1"]},"cI":{"i":["1"],"n":["1"],"l":["1"],"h":["1"]},"cL":{"U":["1","2"],"H":["1","2"]},"U":{"H":["1","2"]},"cM":{"H":["1","2"]},"c9":{"H":["1","2"]},"dk":{"l":["1"],"h":["1"]},"a_":{"Q":[]},"dN":{"L":[]},"ex":{"L":[]},"ag":{"L":[]},"c4":{"L":[]},"eb":{"L":[]},"fq":{"L":[]},"fn":{"L":[]},"c6":{"L":[]},"dW":{"L":[]},"eA":{"L":[]},"cW":{"L":[]},"dY":{"L":[]},"k":{"Q":[]},"n":{"l":["1"],"h":["1"]},"bL":{"fr":[]},"h6":{"fr":[]},"fD":{"fr":[]},"p":{"D":[],"x":[],"e":[]},"dL":{"D":[],"x":[],"e":[]},"dM":{"D":[],"x":[],"e":[]},"bR":{"D":[],"x":[],"e":[]},"bt":{"D":[],"x":[],"e":[]},"bu":{"D":[],"x":[],"e":[]},"aA":{"x":[],"e":[]},"ba":{"D":[],"x":[],"e":[]},"ct":{"i":["a8<Q>"],"n":["a8<Q>"],"z":["a8<Q>"],"l":["a8<Q>"],"h":["a8<Q>"],"i.E":"a8<Q>"},"cu":{"a8":["Q"]},"e2":{"i":["y"],"n":["y"],"z":["y"],"l":["y"],"h":["y"],"i.E":"y"},"fA":{"i":["D"],"n":["D"],"l":["D"],"h":["D"],"i.E":"D"},"D":{"x":[],"e":[]},"ai":{"bs":[]},"bW":{"i":["ai"],"n":["ai"],"z":["ai"],"l":["ai"],"h":["ai"],"i.E":"ai"},"e5":{"e":[]},"e7":{"D":[],"x":[],"e":[]},"bz":{"i":["x"],"n":["x"],"z":["x"],"l":["x"],"h":["x"],"i.E":"x"},"bB":{"D":[],"x":[],"e":[]},"bD":{"j":[]},"bY":{"e":[]},"eo":{"U":["y","@"],"H":["y","@"]},"ep":{"U":["y","@"],"H":["y","@"]},"eq":{"i":["aF"],"n":["aF"],"z":["aF"],"l":["aF"],"h":["aF"],"i.E":"aF"},"aj":{"j":[]},"a1":{"i":["x"],"n":["x"],"l":["x"],"h":["x"],"i.E":"x"},"x":{"e":[]},"cT":{"i":["x"],"n":["x"],"z":["x"],"l":["x"],"h":["x"],"i.E":"x"},"eE":{"i":["aG"],"n":["aG"],"z":["aG"],"l":["aG"],"h":["aG"],"i.E":"aG"},"eM":{"U":["y","@"],"H":["y","@"]},"eO":{"D":[],"x":[],"e":[]},"au":{"e":[]},"eS":{"i":["au"],"n":["au"],"z":["au"],"e":[],"l":["au"],"h":["au"],"i.E":"au"},"eT":{"i":["aH"],"n":["aH"],"z":["aH"],"l":["aH"],"h":["aH"],"i.E":"aH"},"eZ":{"U":["y","y"],"H":["y","y"]},"bh":{"D":[],"x":[],"e":[]},"cY":{"D":[],"x":[],"e":[]},"f2":{"D":[],"x":[],"e":[]},"f3":{"D":[],"x":[],"e":[]},"c7":{"D":[],"x":[],"e":[]},"aw":{"e":[]},"ac":{"e":[]},"f6":{"i":["ac"],"n":["ac"],"z":["ac"],"l":["ac"],"h":["ac"],"i.E":"ac"},"f7":{"i":["aw"],"n":["aw"],"z":["aw"],"e":[],"l":["aw"],"h":["aw"],"i.E":"aw"},"bI":{"j":[]},"fc":{"i":["aJ"],"n":["aJ"],"z":["aJ"],"l":["aJ"],"h":["aJ"],"i.E":"aJ"},"b0":{"j":[]},"fu":{"e":[]},"bk":{"aj":[],"j":[]},"ca":{"e":[]},"cb":{"x":[],"e":[]},"fB":{"i":["J"],"n":["J"],"z":["J"],"l":["J"],"h":["J"],"i.E":"J"},"da":{"a8":["Q"]},"fQ":{"i":["aD?"],"n":["aD?"],"z":["aD?"],"l":["aD?"],"h":["aD?"],"i.E":"aD?"},"df":{"i":["x"],"n":["x"],"z":["x"],"l":["x"],"h":["x"],"i.E":"x"},"h9":{"i":["aI"],"n":["aI"],"z":["aI"],"l":["aI"],"h":["aI"],"i.E":"aI"},"hg":{"i":["av"],"n":["av"],"z":["av"],"l":["av"],"h":["av"],"i.E":"av"},"fy":{"U":["y","y"],"H":["y","y"]},"fI":{"U":["y","y"],"H":["y","y"]},"cc":{"ak":[]},"cU":{"ak":[]},"dl":{"ak":[]},"hi":{"ak":[]},"hh":{"ak":[]},"du":{"bA":[]},"e6":{"i":["D"],"n":["D"],"l":["D"],"h":["D"],"i.E":"D"},"a8":{"h4":["1"]},"ei":{"i":["aT"],"n":["aT"],"l":["aT"],"h":["aT"],"i.E":"aT"},"ey":{"i":["aX"],"n":["aX"],"l":["aX"],"h":["aX"],"i.E":"aX"},"c5":{"m":[],"D":[],"x":[],"e":[]},"f0":{"i":["y"],"n":["y"],"l":["y"],"h":["y"],"i.E":"y"},"m":{"D":[],"x":[],"e":[]},"fd":{"i":["aZ"],"n":["aZ"],"l":["aZ"],"h":["aZ"],"i.E":"aZ"},"bi":{"n":["k"],"l":["k"],"h":["k"]},"dP":{"U":["y","@"],"H":["y","@"]},"dQ":{"e":[]},"b8":{"e":[]},"ez":{"e":[]},"eW":{"i":["H<@,@>"],"n":["H<@,@>"],"l":["H<@,@>"],"h":["H<@,@>"],"i.E":"H<@,@>"},"a6":{"h":["1*"],"a6.T":"1"},"aQ":{"S":[]},"aR":{"S":[]},"B":{"S":[]},"cK":{"S":[]},"bZ":{"S":[]},"c_":{"S":[]},"eG":{"S":[]},"d_":{"S":[]},"dR":{"T":[]},"bw":{"T":[]},"cF":{"a6":["T*"],"h":["T*"],"a6.T":"T*"},"eF":{"T":[]},"eU":{"T":[]},"co":{"V":[]},"bX":{"a6":["V*"],"V":[],"h":["V*"],"a6.T":"V*"},"d5":{"V":[]},"d6":{"V":[]},"d7":{"V":[]},"cn":{"a6":["a4*"],"a4":[],"h":["a4*"],"a6.T":"a4*"},"cr":{"a4":[]},"cx":{"a4":[]},"e1":{"bH":[]},"em":{"bH":[]},"eQ":{"bH":[]},"dZ":{"b9":[]},"e8":{"b9":[]},"ea":{"b9":[]},"eD":{"b9":[]}}'))
H.oY(v.typeUniverse,JSON.parse('{"a5":1,"l":1,"bd":1,"ek":2,"fw":1,"cy":1,"fp":1,"c8":1,"cp":2,"ej":1,"c0":1,"bK":1,"cX":1,"f_":2,"dd":1,"cB":1,"cI":1,"cL":2,"hr":2,"cM":2,"de":1,"dx":2,"dV":2,"dX":2,"ec":1,"fL":1,"M":1,"cz":1,"aQ":1,"aR":1,"B":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"}
var t=(function rtii(){var s=H.lx
return{D:s("bR"),d:s("bs"),Y:s("bt"),G:s("l<@>"),h:s("D"),C:s("L"),aD:s("j"),c8:s("ai"),bX:s("bW"),Z:s("aC"),v:s("bA"),fS:s("bB"),o:s("w<ak>"),s:s("w<y>"),gn:s("w<@>"),t:s("w<k>"),x:s("w<dO*>"),bb:s("w<dR*>"),am:s("w<dS*>"),g0:s("w<dT*>"),b7:s("w<b9*>"),cP:s("w<bw*>"),M:s("w<e0*>"),k:s("w<ba*>"),b:s("w<e3*>"),aZ:s("w<cA*>"),L:s("w<iq*>"),u:s("w<n<ba*>*>"),B:s("w<iz*>"),h8:s("w<be*>"),eb:s("w<eF*>"),cS:s("w<ab*>"),d1:s("w<eH*>"),p:s("w<iW*>"),f2:s("w<a4*>"),du:s("w<eU*>"),gk:s("w<eV*>"),eG:s("w<cX<N*>*>"),i:s("w<y*>"),fG:s("w<f5*>"),A:s("w<f8*>"),br:s("w<fe*>"),fj:s("w<ff*>"),d6:s("w<d0*>"),dv:s("w<d1*>"),hg:s("w<d2*>"),by:s("w<d3*>"),fF:s("w<d4*>"),j:s("w<ft*>"),m:s("w<a_*>"),V:s("w<k*>"),f:s("w<~(S*)*>"),T:s("cE"),eH:s("lX"),g:s("aE"),aU:s("z<@>"),h9:s("C<y*,bH*>"),cn:s("C<y*,eX*>"),dO:s("C<y*,y*>"),dL:s("C<y*,fb*>"),en:s("C<k*,n<d0*>*>"),af:s("C<k*,n<d1*>*>"),gr:s("C<k*,n<d3*>*>"),gb:s("C<k*,n<d4*>*>"),J:s("C<k*,fh*>"),E:s("C<k*,az*>"),a:s("C<k*,k*>"),aH:s("n<@>"),eO:s("H<@,@>"),eM:s("cN<y*,y>"),bK:s("bY"),bZ:s("cQ"),dD:s("W"),bm:s("c1"),P:s("ar"),K:s("N"),I:s("a8<Q>"),fv:s("mf"),ew:s("c5"),N:s("y"),g7:s("m"),bY:s("bh"),aW:s("c7"),aF:s("cZ"),gc:s("bi"),ak:s("bJ"),U:s("c9<y,y>"),R:s("fr"),gH:s("cb"),ac:s("a1"),cJ:s("az"),gR:s("a_"),z:s("@"),S:s("k"),fr:s("bu*"),l:s("by*"),eN:s("bB*"),gj:s("T*"),dn:s("cK*"),hc:s("be*"),c:s("bZ*"),a3:s("c_*"),ah:s("V*"),F:s("0&*"),_:s("N*"),bn:s("a4*"),X:s("y*"),eB:s("fa*"),eP:s("d_*"),n:s("fg*"),r:s("fi*"),y:s("fj*"),O:s("fk*"),q:s("d2*"),w:s("fl*"),Q:s("fm*"),e:s("k*"),dm:s("~(S*)*"),bG:s("lW<ar>?"),W:s("N?"),H:s("Q")}})();(function constants(){var s=hunkHelpers.makeConstList
C.r=W.bt.prototype
C.i=W.bu.prototype
C.S=W.ba.prototype
C.V=J.a.prototype
C.b=J.w.prototype
C.W=J.cC.prototype
C.c=J.cD.prototype
C.j=J.cE.prototype
C.d=J.bC.prototype
C.a=J.aS.prototype
C.X=J.aE.prototype
C.D=J.eC.prototype
C.p=P.eL.prototype
C.E=W.cY.prototype
C.q=J.bJ.prototype
C.F=W.bk.prototype
C.G=W.ca.prototype
C.H=new E.bT("Browser.chrome")
C.t=new E.bT("Browser.firefox")
C.u=new E.bT("Browser.edge")
C.I=new E.bT("Browser.other")
C.a6=new P.hP()
C.J=new P.hO()
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.K=function() {
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
C.P=function(getTagFallback) {
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
C.L=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.M=function(hooks) {
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
C.O=function(hooks) {
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
C.N=function(hooks) {
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

C.Q=new P.eA()
C.e=new P.jL()
C.R=new P.jP()
C.f=new P.kc()
C.n=new P.bx(0)
C.T=new P.bx(5e6)
C.U=new P.ij("element",!1,!1,!1)
C.k=H.c(s([0,0,32776,33792,1,10240,0,0]),t.V)
C.Y=H.c(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.i)
C.l=H.c(s([0,0,65490,45055,65535,34815,65534,18431]),t.V)
C.m=H.c(s([0,0,26624,1023,65534,2047,65534,2047]),t.V)
C.Z=H.c(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.i)
C.x=H.c(s([]),t.i)
C.a_=H.c(s([0,0,32722,12287,65534,34815,65534,18431]),t.V)
C.y=H.c(s([0,0,65498,45055,65535,34815,65534,18431]),t.V)
C.h=H.c(s([0,0,24576,1023,65534,34815,65534,18431]),t.V)
C.z=H.c(s([0,0,32754,11263,65534,34815,65534,18431]),t.V)
C.A=H.c(s([0,0,65490,12287,65535,34815,65534,18431]),t.V)
C.B=H.c(s(["bind","if","ref","repeat","syntax"]),t.i)
C.o=H.c(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.i)
C.a0=new H.cq(0,{},C.x,H.lx("cq<y*,y*>"))
C.a1=new E.c2("OperatingSystem.windows")
C.C=new E.c2("OperatingSystem.mac")
C.a2=new E.c2("OperatingSystem.linux")
C.a3=new E.c2("OperatingSystem.other")
C.a4=new P.jM(!1)
C.a5=new P.cd(null,2)})();(function staticFields(){$.mF=null
$.aN=0
$.lM=null
$.lL=null
$.n4=null
$.n1=null
$.na=null
$.kF=null
$.kK=null
$.lz=null
$.cg=null
$.dB=null
$.dC=null
$.lu=!1
$.aK=C.f
$.ae=H.c([],H.lx("w<N>"))
$.bb=null
$.kZ=null
$.lT=null
$.lS=null
$.db=P.l7(t.N,t.Z)
$.i6=null
$.m_=null
$.m3=null
$.m7=null
$.aY=null
$.mh=null
$.mv=null
$.my=null
$.mx=null
$.jQ=null
$.jR=null
$.jS=null
$.mw=null
$.m6=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"qJ","ng",function(){return H.qi("_$dart_dartClosure")})
s($,"qW","nh",function(){return H.b_(H.jv({
toString:function(){return"$receiver$"}}))})
s($,"qX","ni",function(){return H.b_(H.jv({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"qY","nj",function(){return H.b_(H.jv(null))})
s($,"qZ","nk",function(){return H.b_(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"r1","nn",function(){return H.b_(H.jv(void 0))})
s($,"r2","no",function(){return H.b_(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"r0","nm",function(){return H.b_(H.mp(null))})
s($,"r_","nl",function(){return H.b_(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"r4","nq",function(){return H.b_(H.mp(void 0))})
s($,"r3","np",function(){return H.b_(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"rk","lD",function(){return P.oB()})
s($,"r5","nr",function(){return new P.jN().$0()})
s($,"r6","ns",function(){return new P.jO().$0()})
s($,"rl","nw",function(){return new Int8Array(H.cf(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"ro","ny",function(){return P.ol("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"rE","nz",function(){return P.pj()})
s($,"rm","nx",function(){return P.lZ(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"rd","nv",function(){return Z.ax(0)})
s($,"r7","nt",function(){return Z.ax(511)})
s($,"rf","an",function(){return Z.ax(1)})
s($,"re","br",function(){return Z.ax(2)})
s($,"r9","bq",function(){return Z.ax(4)})
s($,"rg","b5",function(){return Z.ax(8)})
s($,"rh","bP",function(){return Z.ax(16)})
s($,"ra","dH",function(){return Z.ax(32)})
s($,"rb","dI",function(){return Z.ax(64)})
s($,"rc","nu",function(){return Z.ax(96)})
s($,"ri","cl",function(){return Z.ax(128)})
s($,"r8","bp",function(){return Z.ax(256)})
s($,"qH","nf",function(){return new V.i7()})
s($,"qG","E",function(){return $.nf()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cQ,DataView:H.W,ArrayBufferView:H.W,Float32Array:H.bF,Float64Array:H.bF,Int16Array:H.er,Int32Array:H.es,Int8Array:H.et,Uint16Array:H.eu,Uint32Array:H.ev,Uint8ClampedArray:H.cS,CanvasPixelArray:H.cS,Uint8Array:H.c1,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLInputElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableColElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.hI,HTMLAnchorElement:W.dL,HTMLAreaElement:W.dM,HTMLBaseElement:W.bR,Blob:W.bs,HTMLBodyElement:W.bt,HTMLCanvasElement:W.bu,CDATASection:W.aA,CharacterData:W.aA,Comment:W.aA,ProcessingInstruction:W.aA,Text:W.aA,CSSPerspective:W.hU,CSSCharsetRule:W.J,CSSConditionRule:W.J,CSSFontFaceRule:W.J,CSSGroupingRule:W.J,CSSImportRule:W.J,CSSKeyframeRule:W.J,MozCSSKeyframeRule:W.J,WebKitCSSKeyframeRule:W.J,CSSKeyframesRule:W.J,MozCSSKeyframesRule:W.J,WebKitCSSKeyframesRule:W.J,CSSMediaRule:W.J,CSSNamespaceRule:W.J,CSSPageRule:W.J,CSSRule:W.J,CSSStyleRule:W.J,CSSSupportsRule:W.J,CSSViewportRule:W.J,CSSStyleDeclaration:W.cs,MSStyleCSSProperties:W.cs,CSS2Properties:W.cs,CSSImageValue:W.ap,CSSKeywordValue:W.ap,CSSNumericValue:W.ap,CSSPositionValue:W.ap,CSSResourceValue:W.ap,CSSUnitValue:W.ap,CSSURLImageValue:W.ap,CSSStyleValue:W.ap,CSSMatrixComponent:W.aP,CSSRotation:W.aP,CSSScale:W.aP,CSSSkew:W.aP,CSSTranslation:W.aP,CSSTransformComponent:W.aP,CSSTransformValue:W.hW,CSSUnparsedValue:W.hX,DataTransferItemList:W.hY,HTMLDivElement:W.ba,DOMException:W.i_,ClientRectList:W.ct,DOMRectList:W.ct,DOMRectReadOnly:W.cu,DOMStringList:W.e2,DOMTokenList:W.i0,Element:W.D,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,SubmitEvent:W.j,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ai,FileList:W.bW,FileWriter:W.e5,HTMLFormElement:W.e7,Gamepad:W.aD,History:W.ih,HTMLCollection:W.bz,HTMLFormControlsCollection:W.bz,HTMLOptionsCollection:W.bz,ImageData:W.bA,HTMLImageElement:W.bB,KeyboardEvent:W.bD,Location:W.iw,MediaList:W.iO,MessagePort:W.bY,MIDIInputMap:W.eo,MIDIOutputMap:W.ep,MimeType:W.aF,MimeTypeArray:W.eq,PointerEvent:W.aj,MouseEvent:W.aj,DragEvent:W.aj,Document:W.x,DocumentFragment:W.x,HTMLDocument:W.x,ShadowRoot:W.x,XMLDocument:W.x,DocumentType:W.x,Node:W.x,NodeList:W.cT,RadioNodeList:W.cT,Plugin:W.aG,PluginArray:W.eE,RTCStatsReport:W.eM,HTMLSelectElement:W.eO,SourceBuffer:W.au,SourceBufferList:W.eS,SpeechGrammar:W.aH,SpeechGrammarList:W.eT,SpeechRecognitionResult:W.aI,Storage:W.eZ,CSSStyleSheet:W.av,StyleSheet:W.av,HTMLTableCellElement:W.bh,HTMLTableDataCellElement:W.bh,HTMLTableHeaderCellElement:W.bh,HTMLTableElement:W.cY,HTMLTableRowElement:W.f2,HTMLTableSectionElement:W.f3,HTMLTemplateElement:W.c7,TextTrack:W.aw,TextTrackCue:W.ac,VTTCue:W.ac,TextTrackCueList:W.f6,TextTrackList:W.f7,TimeRanges:W.jp,Touch:W.aJ,TouchEvent:W.bI,TouchList:W.fc,TrackDefaultList:W.jt,CompositionEvent:W.b0,FocusEvent:W.b0,TextEvent:W.b0,UIEvent:W.b0,URL:W.jK,VideoTrackList:W.fu,WheelEvent:W.bk,Window:W.ca,DOMWindow:W.ca,Attr:W.cb,CSSRuleList:W.fB,ClientRect:W.da,DOMRect:W.da,GamepadList:W.fQ,NamedNodeMap:W.df,MozNamedAttrMap:W.df,SpeechRecognitionResultList:W.h9,StyleSheetList:W.hg,SVGLength:P.aT,SVGLengthList:P.ei,SVGNumber:P.aX,SVGNumberList:P.ey,SVGPointList:P.iX,SVGScriptElement:P.c5,SVGStringList:P.f0,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,SVGTransform:P.aZ,SVGTransformList:P.fd,AudioBuffer:P.hL,AudioParamMap:P.dP,AudioTrackList:P.dQ,AudioContext:P.b8,webkitAudioContext:P.b8,BaseAudioContext:P.b8,OfflineAudioContext:P.ez,WebGL2RenderingContext:P.eL,SQLResultSetRowList:P.eW})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c0.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.bF.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
H.dj.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
W.dm.$nativeSuperclassTag="EventTarget"
W.dn.$nativeSuperclassTag="EventTarget"
W.dq.$nativeSuperclassTag="EventTarget"
W.dr.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.n8,[])
else X.n8([])})})()
//# sourceMappingURL=test.dart.js.map
