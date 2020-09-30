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
a[c]=function(){a[c]=function(){H.qA(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lB"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lB"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lB(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={l8:function l8(){},
la:function(a){return new H.el(a)},
kx:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
oa:function(a,b,c,d){if(t.gw.b(a))return new H.cv(a,b,c.I("@<0>").b6(d).I("cv<1,2>"))
return new H.aU(a,b,c.I("@<0>").b6(d).I("aU<1,2>"))},
l5:function(){return new P.c6("No element")},
o0:function(){return new P.c6("Too many elements")},
ox:function(a,b){var s=J.aN(a)
if(typeof s!=="number")return s.a1()
H.eW(a,0,s-1,b)},
eW:function(a,b,c,d){if(c-b<=32)H.ow(a,b,c,d)
else H.ov(a,b,c,d)},
ow:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.b4(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a6()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
ov:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.a7(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.a7(a6+a7,2),d=e-h,c=e+h,b=J.b4(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.a6()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a6()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.a6()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a6()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.a6()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.a6()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.a6()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a6()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a6()
if(a4>0){s=a3
a3=a2
a2=s}b.l(a5,g,a)
b.l(a5,e,a1)
b.l(a5,f,a3)
b.l(a5,d,b.h(a5,a6))
b.l(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.N(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.ak()
if(n<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a6()
if(n>0){--q
continue}else{m=q-1
if(n<0){b.l(a5,p,b.h(a5,r))
l=r+1
b.l(a5,r,b.h(a5,q))
b.l(a5,q,o)
q=m
r=l
break}else{b.l(a5,p,b.h(a5,q))
b.l(a5,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=b.h(a5,p)
j=a8.$2(o,a0)
if(typeof j!=="number")return j.ak()
if(j<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.a6()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.a6()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.ak()
m=q-1
if(n<0){b.l(a5,p,b.h(a5,r))
l=r+1
b.l(a5,r,b.h(a5,q))
b.l(a5,q,o)
r=l}else{b.l(a5,p,b.h(a5,q))
b.l(a5,q,o)}q=m
break}}}}k=!1}a4=r-1
b.l(a5,a6,b.h(a5,a4))
b.l(a5,a4,a0)
a4=q+1
b.l(a5,a7,b.h(a5,a4))
b.l(a5,a4,a2)
H.eW(a5,a6,r-2,a8)
H.eW(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.N(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.N(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.ak()
m=q-1
if(n<0){b.l(a5,p,b.h(a5,r))
l=r+1
b.l(a5,r,b.h(a5,q))
b.l(a5,q,o)
r=l}else{b.l(a5,p,b.h(a5,q))
b.l(a5,q,o)}q=m
break}}H.eW(a5,r,q,a8)}else H.eW(a5,r,q,a8)},
el:function el(a){this.a=a},
p:function p(a){this.a=a},
l:function l(){},
cL:function cL(){},
be:function be(a,b){var _=this
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
ep:function ep(a,b){this.a=null
this.b=a
this.c=b},
cP:function cP(a,b,c){this.a=a
this.b=b
this.$ti=c},
b2:function b2(a,b,c){this.a=a
this.b=b
this.$ti=c},
fD:function fD(a,b){this.a=a
this.b=b},
cA:function cA(){},
fv:function fv(){},
c8:function c8(){},
nU:function(){throw H.c(P.B("Cannot modify unmodifiable Map"))},
nf:function(a){var s,r=H.ne(a)
if(r!=null)return r
s="minified:"+a
return s},
n8:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
f:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a5(a)
if(typeof s!="string")throw H.c(H.ao(a))
return s},
cY:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
md:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.d(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.c(P.a1(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.D(q,o)|32)>r)return n}return parseInt(a,b)},
eN:function(a){return H.of(a)},
of:function(a){var s,r,q
if(a instanceof P.M)return H.an(H.bL(a),null)
if(J.dI(a)===C.V||t.ak.b(a)){s=C.v(a)
if(H.mc(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.mc(q))return q}}return H.an(H.bL(a),null)},
mc:function(a){var s=a!=="Object"&&a!==""
return s},
og:function(){if(!!self.location)return self.location.href
return null},
mb:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
oo:function(a){var s,r,q,p=H.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(!H.bK(q))throw H.c(H.ao(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aV(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.ao(q))}return H.mb(p)},
me:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.bK(q))throw H.c(H.ao(q))
if(q<0)throw H.c(H.ao(q))
if(q>65535)return H.oo(a)}return H.mb(a)},
op:function(a,b,c){var s,r,q,p
if(typeof c!=="number")return c.ir()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
if(q<c)p=q
else p=c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
at:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.aV(s,10))>>>0,56320|s&1023)}}throw H.c(P.a1(a,0,1114111,null,null))},
c3:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
on:function(a){var s=H.c3(a).getFullYear()+0
return s},
ol:function(a){var s=H.c3(a).getMonth()+1
return s},
oh:function(a){var s=H.c3(a).getDate()+0
return s},
oi:function(a){var s=H.c3(a).getHours()+0
return s},
ok:function(a){var s=H.c3(a).getMinutes()+0
return s},
om:function(a){var s=H.c3(a).getSeconds()+0
return s},
oj:function(a){var s=H.c3(a).getMilliseconds()+0
return s},
v:function(a){throw H.c(H.ao(a))},
d:function(a,b){if(a==null)J.aN(a)
throw H.c(H.cj(a,b))},
cj:function(a,b){var s,r,q="index"
if(!H.bK(b))return new P.ai(!0,b,q,null)
s=J.aN(a)
if(!(b<0)){if(typeof s!=="number")return H.v(s)
r=b>=s}else r=!0
if(r)return P.O(b,a,q,null,s)
return P.eO(b,q)},
qh:function(a,b,c){if(a>c)return P.a1(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a1(b,a,c,"end",null)
return new P.ai(!0,b,"end",null)},
ao:function(a){return new P.ai(!0,a,null,null)},
qc:function(a){if(typeof a!="number")throw H.c(H.ao(a))
return a},
c:function(a){var s,r
if(a==null)a=new P.eB()
s=new Error()
s.dartException=a
r=H.qB
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qB:function(){return J.a5(this.dartException)},
q:function(a){throw H.c(a)},
o:function(a){throw H.c(P.ba(a))},
b_:function(a){var s,r,q,p,o,n
a=H.nc(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jr(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
js:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mq:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
m7:function(a,b){return new H.eA(a,b==null?null:b.method)},
l9:function(a,b){var s=b==null,r=s?null:b.method
return new H.ej(a,r,s?null:b.receiver)},
ag:function(a){if(a==null)return new H.iV(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bM(a,a.dartException)
return H.q8(a)},
bM:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
q8:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aV(r,16)&8191)===10)switch(q){case 438:return H.bM(a,H.l9(H.f(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bM(a,H.m7(H.f(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.ni()
o=$.nj()
n=$.nk()
m=$.nl()
l=$.no()
k=$.np()
j=$.nn()
$.nm()
i=$.nr()
h=$.nq()
g=p.at(s)
if(g!=null)return H.bM(a,H.l9(s,g))
else{g=o.at(s)
if(g!=null){g.method="call"
return H.bM(a,H.l9(s,g))}else{g=n.at(s)
if(g==null){g=m.at(s)
if(g==null){g=l.at(s)
if(g==null){g=k.at(s)
if(g==null){g=j.at(s)
if(g==null){g=m.at(s)
if(g==null){g=i.at(s)
if(g==null){g=h.at(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bM(a,H.m7(s,g))}}return H.bM(a,new H.fu(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cZ()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bM(a,new P.ai(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cZ()
return a},
lD:function(a){var s
if(a==null)return new H.hj(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.hj(a)},
qj:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
qs:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.u("Unsupported number of arguments for wrapped closure"))},
ci:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qs)
a.$identity=s
return s},
nT:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.f2().constructor.prototype):Object.create(new H.bQ(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aO
if(typeof r!=="number")return r.w()
$.aO=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.lU(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.nP(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lU(a,n,f)
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
nQ:function(a,b,c,d){var s=H.lT
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lU:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.nS(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nQ(r,!p,s,b)
if(r===0){p=$.aO
if(typeof p!=="number")return p.w()
$.aO=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.f(H.kX())+";return "+n+"."+H.f(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aO
if(typeof p!=="number")return p.w()
$.aO=p+1
m+=p
return new Function("return function("+m+"){return this."+H.f(H.kX())+"."+H.f(s)+"("+m+");}")()},
nR:function(a,b,c,d){var s=H.lT,r=H.nO
switch(b?-1:a){case 0:throw H.c(new H.eS("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
nS:function(a,b){var s,r,q,p,o,n,m=H.kX(),l=$.lR
if(l==null)l=$.lR=H.lQ("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nR(r,!p,s,b)
if(r===1){p="return function(){return this."+H.f(m)+"."+H.f(s)+"(this."+l+");"
o=$.aO
if(typeof o!=="number")return o.w()
$.aO=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.f(m)+"."+H.f(s)+"(this."+l+", "+n+");"
o=$.aO
if(typeof o!=="number")return o.w()
$.aO=o+1
return new Function(p+o+"}")()},
lB:function(a,b,c,d,e,f,g){return H.nT(a,b,c,d,!!e,!!f,g)},
nM:function(a,b){return H.hx(v.typeUniverse,H.bL(a.a),b)},
nN:function(a,b){return H.hx(v.typeUniverse,H.bL(a.c),b)},
lT:function(a){return a.a},
nO:function(a){return a.c},
kX:function(){var s=$.lS
return s==null?$.lS=H.lQ("self"):s},
lQ:function(a){var s,r,q,p=new H.bQ("self","target","receiver","name"),o=J.l7(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.bO("Field name "+a+" not found."))},
qA:function(a){throw H.c(new P.e0(a))},
qm:function(a){return v.getIsolateTag(a)},
rI:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qu:function(a){var s,r,q,p,o,n=$.n5.$1(a),m=$.kw[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kC[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.n3.$2(a,n)
if(q!=null){m=$.kw[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kC[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kR(s)
$.kw[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kC[n]=s
return s}if(p==="-"){o=H.kR(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.na(a,s)
if(p==="*")throw H.c(P.jz(n))
if(v.leafTags[n]===true){o=H.kR(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.na(a,s)},
na:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lG(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kR:function(a){return J.lG(a,!1,null,!!a.$iA)},
qv:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kR(s)
else return J.lG(s,c,null,null)},
qq:function(){if(!0===$.lE)return
$.lE=!0
H.qr()},
qr:function(){var s,r,q,p,o,n,m,l
$.kw=Object.create(null)
$.kC=Object.create(null)
H.qp()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.nb.$1(o)
if(n!=null){m=H.qv(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qp:function(){var s,r,q,p,o,n,m=C.K()
m=H.ch(C.L,H.ch(C.M,H.ch(C.w,H.ch(C.w,H.ch(C.N,H.ch(C.O,H.ch(C.P(C.v),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.n5=new H.ky(p)
$.n3=new H.kz(o)
$.nb=new H.kA(n)},
ch:function(a,b){return a(b)||b},
o4:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.a3("Illegal RegExp pattern ("+String(n)+")",a,null))},
nd:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qi:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nc:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lI:function(a,b,c){var s=H.qy(a,b,c)
return s},
qy:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nc(b),'g'),H.qi(c))},
cp:function cp(){},
cq:function cq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jr:function jr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eA:function eA(a,b){this.a=a
this.b=b},
ej:function ej(a,b,c){this.a=a
this.b=b
this.c=c},
fu:function fu(a){this.a=a},
iV:function iV(a){this.a=a},
hj:function hj(a){this.a=a
this.b=null},
bx:function bx(){},
f9:function f9(){},
f2:function f2(){},
bQ:function bQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eS:function eS(a){this.a=a},
C:function C(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
is:function is(a){this.a=a},
iu:function iu(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cI:function cI(a,b){this.a=a
this.$ti=b},
eo:function eo(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ky:function ky(a){this.a=a},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
ei:function ei(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cf:function(a){return a},
od:function(a){return new Int8Array(a)},
b3:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cj(b,a))},
pm:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.qh(a,b,c))
return b},
cT:function cT(){},
W:function W(){},
c0:function c0(){},
bE:function bE(){},
cU:function cU(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
cV:function cV(){},
c1:function c1(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
dm:function dm(){},
ot:function(a,b){var s=b.c
return s==null?b.c=H.lq(a,b.z,!0):s},
mk:function(a,b){var s=b.c
return s==null?b.c=H.dy(a,"m_",[b.z]):s},
ml:function(a){var s=a.y
if(s===6||s===7||s===8)return H.ml(a.z)
return s===11||s===12},
os:function(a){return a.cy},
lC:function(a){return H.lr(v.typeUniverse,a,!1)},
bo:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bo(a,s,a0,a1)
if(r===s)return b
return H.mP(a,r,!0)
case 7:s=b.z
r=H.bo(a,s,a0,a1)
if(r===s)return b
return H.lq(a,r,!0)
case 8:s=b.z
r=H.bo(a,s,a0,a1)
if(r===s)return b
return H.mO(a,r,!0)
case 9:q=b.Q
p=H.dH(a,q,a0,a1)
if(p===q)return b
return H.dy(a,b.z,p)
case 10:o=b.z
n=H.bo(a,o,a0,a1)
m=b.Q
l=H.dH(a,m,a0,a1)
if(n===o&&l===m)return b
return H.lo(a,n,l)
case 11:k=b.z
j=H.bo(a,k,a0,a1)
i=b.Q
h=H.q5(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mN(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dH(a,g,a0,a1)
o=b.z
n=H.bo(a,o,a0,a1)
if(f===g&&n===o)return b
return H.lp(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.hP("Attempted to substitute unexpected RTI kind "+c))}},
dH:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bo(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
q6:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bo(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
q5:function(a,b,c,d){var s,r=b.a,q=H.dH(a,r,c,d),p=b.b,o=H.dH(a,p,c,d),n=b.c,m=H.q6(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fW()
s.a=q
s.b=o
s.c=m
return s},
b:function(a,b){a[v.arrayRti]=b
return a},
qd:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.n6(s)
return a.$S()}return null},
n7:function(a,b){var s
if(H.ml(b))if(a instanceof H.bx){s=H.qd(a)
if(s!=null)return s}return H.bL(a)},
bL:function(a){var s
if(a instanceof P.M){s=a.$ti
return s!=null?s:H.lx(a)}if(Array.isArray(a))return H.km(a)
return H.lx(J.dI(a))},
km:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
dE:function(a){var s=a.$ti
return s!=null?s:H.lx(a)},
lx:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pt(a,s)},
pt:function(a,b){var s=a instanceof H.bx?a.__proto__.__proto__.constructor:b,r=H.p4(v.typeUniverse,s.name)
b.$ccache=r
return r},
n6:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lr(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
ps:function(a){var s,r,q=this,p=t.K
if(q===p)return H.dD(q,a,H.px)
if(!H.b5(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.dD(q,a,H.pA)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.bK
else if(s===t.gR||s===t.H)r=H.pw
else if(s===t.N)r=H.py
else r=s===t.cJ?H.ly:null
if(r!=null)return H.dD(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.qt)){q.r="$i"+p
return H.dD(q,a,H.pz)}}else if(p===7)return H.dD(q,a,H.pq)
return H.dD(q,a,H.po)},
dD:function(a,b,c){a.b=c
return a.b(b)},
pr:function(a){var s,r,q=this
if(!H.b5(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.pl
else if(q===t.K)r=H.pk
else r=H.pp
q.a=r
return q.a(a)},
pZ:function(a){var s,r=a.y
if(!H.b5(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.F||r===7||a===t.P||a===t.T},
po:function(a){var s=this
if(a==null)return H.pZ(s)
return H.Y(v.typeUniverse,H.n7(a,s),null,s,null)},
pq:function(a){if(a==null)return!0
return this.z.b(a)},
pz:function(a){var s=this,r=s.r
if(a instanceof P.M)return!!a[r]
return!!J.dI(a)[r]},
rG:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mY(a,s)},
pp:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mY(a,s)},
mY:function(a,b){throw H.c(H.oV(H.mF(a,H.n7(a,b),H.an(b,null))))},
mF:function(a,b,c){var s=P.id(a),r=H.an(b==null?H.bL(a):b,null)
return s+": type '"+H.f(r)+"' is not a subtype of type '"+H.f(c)+"'"},
oV:function(a){return new H.dw("TypeError: "+a)},
ab:function(a,b){return new H.dw("TypeError: "+H.mF(a,null,b))},
px:function(a){return a!=null},
pk:function(a){return a},
pA:function(a){return!0},
pl:function(a){return a},
ly:function(a){return!0===a||!1===a},
rs:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.ab(a,"bool"))},
ru:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ab(a,"bool"))},
rt:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ab(a,"bool?"))},
rv:function(a){if(typeof a=="number")return a
throw H.c(H.ab(a,"double"))},
rx:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"double"))},
rw:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"double?"))},
bK:function(a){return typeof a=="number"&&Math.floor(a)===a},
ry:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.ab(a,"int"))},
rA:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ab(a,"int"))},
rz:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ab(a,"int?"))},
pw:function(a){return typeof a=="number"},
rB:function(a){if(typeof a=="number")return a
throw H.c(H.ab(a,"num"))},
rD:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"num"))},
rC:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"num?"))},
py:function(a){return typeof a=="string"},
rE:function(a){if(typeof a=="string")return a
throw H.c(H.ab(a,"String"))},
lw:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ab(a,"String"))},
rF:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ab(a,"String?"))},
q1:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.a.w(r,H.an(a[q],b))
return s},
mZ:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=H.b([],t.s)
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.W,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.d(a6,i)
l=C.a.w(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.a.w(" extends ",H.an(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.an(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.a.w(a3,H.an(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.a.w(a3,H.an(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.lK(H.an(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.f(a1)},
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
return J.lK(q===11||q===12?C.a.w("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.f(H.an(a.z,b))+">"
if(l===9){p=H.q7(a.z)
o=a.Q
return o.length!==0?p+("<"+H.q1(o,b)+">"):p}if(l===11)return H.mZ(a,b,null)
if(l===12)return H.mZ(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
q7:function(a){var s,r=H.ne(a)
if(r!=null)return r
s="minified:"+a
return s},
mQ:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
p4:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lr(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dz(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dy(a,b,q)
n[b]=o
return o}else return m},
p2:function(a,b){return H.mX(a.tR,b)},
p1:function(a,b){return H.mX(a.eT,b)},
lr:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mL(H.mJ(a,null,b,c))
r.set(b,s)
return s},
hx:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mL(H.mJ(a,b,c,!0))
q.set(c,r)
return r},
p3:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.lo(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bn:function(a,b){b.a=H.pr
b.b=H.ps
return b},
dz:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.au(null,null)
s.y=b
s.cy=c
r=H.bn(a,s)
a.eC.set(c,r)
return r},
mP:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.p_(a,b,r,c)
a.eC.set(r,s)
return s},
p_:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b5(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.au(null,null)
q.y=6
q.z=b
q.cy=c
return H.bn(a,q)},
lq:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.oZ(a,b,r,c)
a.eC.set(r,s)
return s},
oZ:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b5(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.kD(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.F)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.kD(q.z))return q
else return H.ot(a,b)}}p=new H.au(null,null)
p.y=7
p.z=b
p.cy=c
return H.bn(a,p)},
mO:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.oX(a,b,r,c)
a.eC.set(r,s)
return s},
oX:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b5(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dy(a,"m_",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.au(null,null)
q.y=8
q.z=b
q.cy=c
return H.bn(a,q)},
p0:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.au(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bn(a,s)
a.eC.set(q,r)
return r},
hw:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
oW:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dy:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hw(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.au(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bn(a,r)
a.eC.set(p,q)
return q},
lo:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hw(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.au(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bn(a,o)
a.eC.set(q,n)
return n},
mN:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hw(m)
if(j>0){s=l>0?",":""
r=H.hw(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.oW(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.au(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bn(a,o)
a.eC.set(q,r)
return r},
lp:function(a,b,c,d){var s,r=b.cy+("<"+H.hw(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.oY(a,b,c,r,d)
a.eC.set(r,s)
return s},
oY:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bo(a,b,r,0)
m=H.dH(a,c,r,0)
return H.lp(a,n,m,c!==m)}}l=new H.au(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bn(a,l)},
mJ:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mL:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.oP(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mK(a,r,g,f,!1)
else if(q===46)r=H.mK(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.bm(a.u,a.e,f.pop()))
break
case 94:f.push(H.p0(a.u,f.pop()))
break
case 35:f.push(H.dz(a.u,5,"#"))
break
case 64:f.push(H.dz(a.u,2,"@"))
break
case 126:f.push(H.dz(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.ln(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.dy(p,n,o))
else{m=H.bm(p,a.e,n)
switch(m.y){case 11:f.push(H.lp(p,m,o,a.n))
break
default:f.push(H.lo(p,m,o))
break}}break
case 38:H.oQ(a,f)
break
case 42:l=a.u
f.push(H.mP(l,H.bm(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.lq(l,H.bm(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.mO(l,H.bm(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.fW()
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
H.ln(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.mN(p,H.bm(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.ln(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.oS(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.bm(a.u,a.e,h)},
oP:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mK:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.mQ(s,o.z)[p]
if(n==null)H.q('No "'+p+'" in "'+H.os(o)+'"')
d.push(H.hx(s,o,n))}else d.push(p)
return m},
oQ:function(a,b){var s=b.pop()
if(0===s){b.push(H.dz(a.u,1,"0&"))
return}if(1===s){b.push(H.dz(a.u,4,"1&"))
return}throw H.c(P.hP("Unexpected extended operation "+H.f(s)))},
bm:function(a,b,c){if(typeof c=="string")return H.dy(a,c,a.sEA)
else if(typeof c=="number")return H.oR(a,b,c)
else return c},
ln:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bm(a,b,c[s])},
oS:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bm(a,b,c[s])},
oR:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.hP("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.hP("Bad index "+c+" for "+b.i(0)))},
Y:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.b5(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.b5(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.Y(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.Y(a,b.z,c,d,e)
if(p===6){s=d.z
return H.Y(a,b,c,s,e)}if(r===8){if(!H.Y(a,b.z,c,d,e))return!1
return H.Y(a,H.mk(a,b),c,d,e)}if(r===7){s=H.Y(a,b.z,c,d,e)
return s}if(p===8){if(H.Y(a,b,c,d.z,e))return!0
return H.Y(a,b,c,H.mk(a,d),e)}if(p===7){s=H.Y(a,b,c,d.z,e)
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
if(!H.Y(a,k,c,j,e)||!H.Y(a,j,e,k,c))return!1}return H.n_(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.n_(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.pv(a,b,c,d,e)}return!1},
n_:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.Y(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.Y(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.Y(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.Y(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.Y(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
pv:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.Y(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mQ(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.Y(a,H.hx(a,b,l[p]),c,r[p],e))return!1
return!0},
kD:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b5(a))if(r!==7)if(!(r===6&&H.kD(a.z)))s=r===8&&H.kD(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qt:function(a){var s
if(!H.b5(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
b5:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.W},
mX:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
au:function au(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fW:function fW(){this.c=this.b=this.a=null},
fR:function fR(){},
dw:function dw(a){this.a=a},
ne:function(a){return v.mangledGlobalNames[a]},
qw:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lG:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hL:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.lE==null){H.qq()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.c(P.jz("Return interceptor for "+H.f(s(a,o))))}q=a.constructor
p=q==null?null:q[J.m3()]
if(p!=null)return p
p=H.qu(a)
if(p!=null)return p
if(typeof a=="function")return C.X
s=Object.getPrototypeOf(a)
if(s==null)return C.D
if(s===Object.prototype)return C.D
if(typeof q=="function"){Object.defineProperty(q,J.m3(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
m3:function(){var s=$.mH
return s==null?$.mH=v.getIsolateTag("_$dart_js"):s},
o1:function(a,b){if(!H.bK(a))throw H.c(P.lN(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a1(a,0,4294967295,"length",null))
return J.o2(new Array(a),b)},
l6:function(a,b){if(!H.bK(a)||a<0)throw H.c(P.bO("Length must be a non-negative integer: "+H.f(a)))
return H.b(new Array(a),b.I("x<0>"))},
o2:function(a,b){return J.l7(H.b(a,b.I("x<0>")))},
l7:function(a){a.fixed$length=Array
return a},
o3:function(a,b){return J.dN(a,b)},
dI:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cF.prototype
return J.cE.prototype}if(typeof a=="string")return J.aS.prototype
if(a==null)return J.cG.prototype
if(typeof a=="boolean")return J.eh.prototype
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.M)return a
return J.hL(a)},
qk:function(a){if(typeof a=="number")return J.bC.prototype
if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.M)return a
return J.hL(a)},
b4:function(a){if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.M)return a
return J.hL(a)},
hK:function(a){if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.M)return a
return J.hL(a)},
ql:function(a){if(typeof a=="number")return J.bC.prototype
if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bH.prototype
return a},
dJ:function(a){if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bH.prototype
return a},
aL:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.M)return a
return J.hL(a)},
lK:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.qk(a).w(a,b)},
N:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dI(a).t(a,b)},
cm:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n8(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b4(a).h(a,b)},
kT:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.n8(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.hK(a).l(a,b,c)},
nB:function(a,b){return J.dJ(a).D(a,b)},
nC:function(a,b,c){return J.aL(a).h3(a,b,c)},
nD:function(a,b,c,d){return J.aL(a).hn(a,b,c,d)},
nE:function(a,b){return J.dJ(a).Y(a,b)},
dN:function(a,b){return J.ql(a).aZ(a,b)},
kU:function(a,b){return J.b4(a).B(a,b)},
hN:function(a,b){return J.hK(a).G(a,b)},
nF:function(a,b,c,d){return J.aL(a).hG(a,b,c,d)},
kV:function(a,b){return J.hK(a).F(a,b)},
nG:function(a){return J.aL(a).ghs(a)},
kW:function(a){return J.aL(a).gdC(a)},
nH:function(a){return J.aL(a).gdF(a)},
ah:function(a){return J.dI(a).gP(a)},
b6:function(a){return J.hK(a).gM(a)},
aN:function(a){return J.b4(a).gm(a)},
lL:function(a){return J.hK(a).i8(a)},
nI:function(a,b){return J.aL(a).ib(a,b)},
nJ:function(a,b,c){return J.dJ(a).u(a,b,c)},
nK:function(a){return J.dJ(a).im(a)},
a5:function(a){return J.dI(a).i(a)},
a:function a(){},
eh:function eh(){},
cG:function cG(){},
bd:function bd(){},
eG:function eG(){},
bH:function bH(){},
aE:function aE(){},
x:function x(a){this.$ti=a},
ir:function ir(a){this.$ti=a},
a6:function a6(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bC:function bC(){},
cF:function cF(){},
cE:function cE(){},
aS:function aS(){}},P={
oF:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.q9()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.ci(new P.jV(q),1)).observe(s,{childList:true})
return new P.jU(q,s,r)}else if(self.setImmediate!=null)return P.qa()
return P.qb()},
oG:function(a){self.scheduleImmediate(H.ci(new P.jW(a),0))},
oH:function(a){self.setImmediate(H.ci(new P.jX(a),0))},
oI:function(a){P.li(C.n,a)},
li:function(a,b){var s=C.c.a7(a.a,1000)
return P.oT(s<0?0:s,b)},
mp:function(a,b){var s=C.c.a7(a.a,1000)
return P.oU(s<0?0:s,b)},
oT:function(a,b){var s=new P.dv()
s.eH(a,b)
return s},
oU:function(a,b){var s=new P.dv()
s.eI(a,b)
return s},
rq:function(a){return new P.cd(a,1)},
oL:function(){return C.a5},
oM:function(a){return new P.cd(a,3)},
pC:function(a,b){return new P.ds(a,b.I("ds<0>"))},
pY:function(){var s,r
for(s=$.cg;s!=null;s=$.cg){$.dG=null
r=s.b
$.cg=r
if(r==null)$.dF=null
s.a.$0()}},
q4:function(){$.lz=!0
try{P.pY()}finally{$.dG=null
$.lz=!1
if($.cg!=null)$.lJ().$1(P.n4())}},
q2:function(a){var s=new P.fE(a),r=$.dF
if(r==null){$.cg=$.dF=s
if(!$.lz)$.lJ().$1(P.n4())}else $.dF=r.b=s},
q3:function(a){var s,r,q,p=$.cg
if(p==null){P.q2(a)
$.dG=$.dF
return}s=new P.fE(a)
r=$.dG
if(r==null){s.b=p
$.cg=$.dG=s}else{q=r.b
s.b=q
$.dG=r.b=s
if(q==null)$.dF=s}},
mo:function(a,b){var s=$.aK
if(s===C.f)return P.li(a,b)
return P.li(a,s.ht(b))},
oA:function(a,b){var s=$.aK
if(s===C.f)return P.mp(a,b)
return P.mp(a,s.dA(b,t.aF))},
n0:function(a,b,c,d,e){P.q3(new P.ku(d,e))},
q_:function(a,b,c,d){var s,r=$.aK
if(r===c)return d.$0()
$.aK=c
s=r
try{r=d.$0()
return r}finally{$.aK=s}},
q0:function(a,b,c,d,e){var s,r=$.aK
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
dv:function dv(){this.c=0},
kd:function kd(a,b){this.a=a
this.b=b},
kc:function kc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cd:function cd(a,b){this.a=a
this.b=b},
bI:function bI(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ds:function ds(a,b){this.a=a
this.$ti=b},
fE:function fE(a){this.a=a
this.b=null},
d_:function d_(){},
f4:function f4(){},
d1:function d1(){},
kk:function kk(){},
ku:function ku(a,b){this.a=a
this.b=b},
k1:function k1(){},
k2:function k2(a,b){this.a=a
this.b=b},
k3:function k3(a,b,c){this.a=a
this.b=b
this.c=c},
o6:function(a,b){return new H.C(a.I("@<0>").b6(b).I("C<1,2>"))},
o7:function(a,b,c){return H.qj(a,new H.C(b.I("@<0>").b6(c).I("C<1,2>")))},
lb:function(a,b){return new H.C(a.I("@<0>").b6(b).I("C<1,2>"))},
cJ:function(a){return new P.df(a.I("df<0>"))},
lm:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oO:function(a,b){var s=new P.dg(a,b)
s.c=a.e
return s},
o_:function(a,b,c){var s,r
if(P.lA(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.b([],t.s)
$.af.push(a)
try{P.pB(a,s)}finally{if(0>=$.af.length)return H.d($.af,-1)
$.af.pop()}r=P.mm(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
l4:function(a,b,c){var s,r
if(P.lA(a))return b+"..."+c
s=new P.Q(b)
$.af.push(a)
try{r=s
r.a=P.mm(r.a,a,", ")}finally{if(0>=$.af.length)return H.d($.af,-1)
$.af.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lA:function(a){var s,r
for(s=$.af.length,r=0;r<s;++r)if(a===$.af[r])return!0
return!1},
pB:function(a,b){var s,r,q,p,o,n,m,l=a.gM(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.v())return
s=H.f(l.gA(l))
b.push(s)
k+=s.length+2;++j}if(!l.v()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gA(l);++j
if(!l.v()){if(j<=4){b.push(H.f(p))
return}r=H.f(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gA(l);++j
for(;l.v();p=o,o=n){n=l.gA(l);++j
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
o8:function(a,b,c){var s=P.o6(b,c)
a.F(0,new P.iv(s,b,c))
return s},
m4:function(a,b){var s,r,q=P.cJ(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)q.n(0,b.a(a[r]))
return q},
ld:function(a){var s,r={}
if(P.lA(a))return"{...}"
s=new P.Q("")
try{$.af.push(a)
s.a+="{"
r.a=!0
J.kV(a,new P.iz(r,s))
s.a+="}"}finally{if(0>=$.af.length)return H.d($.af,-1)
$.af.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
df:function df(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
k0:function k0(a){this.a=a
this.c=this.b=null},
dg:function dg(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cD:function cD(){},
iv:function iv(a,b,c){this.a=a
this.b=b
this.c=c},
cK:function cK(){},
i:function i(){},
cN:function cN(){},
iz:function iz(a,b){this.a=a
this.b=b},
U:function U(){},
hy:function hy(){},
cO:function cO(){},
c9:function c9(a,b){this.a=a
this.$ti=b},
dn:function dn(){},
dh:function dh(){},
dA:function dA(){},
oD:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.oE(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
oE:function(a,b,c,d){var s=a?$.nt():$.ns()
if(s==null)return null
if(0===c&&d===b.length)return P.mv(s,b)
return P.mv(s,b.subarray(c,P.bi(c,d,b.length)))},
mv:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.ag(r)}return null},
lP:function(a,b,c,d,e,f){if(C.c.bl(f,4)!==0)throw H.c(P.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a3("Invalid base64 padding, more than two '=' characters",a,b))},
pj:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
pi:function(a,b,c){var s,r,q,p,o,n
if(typeof c!=="number")return c.a1()
s=c-b
r=new Uint8Array(s)
for(q=r.length,p=J.b4(a),o=0;o<s;++o){n=p.h(a,b+o)
if(typeof n!=="number")return n.ap()
if((n&4294967040)>>>0!==0)n=255
if(o>=q)return H.d(r,o)
r[o]=n}return r},
jI:function jI(){},
jJ:function jJ(){},
hU:function hU(){},
hV:function hV(){},
dY:function dY(){},
e_:function e_(){},
ia:function ia(){},
ip:function ip(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
io:function io(a){this.a=a},
jG:function jG(){},
jK:function jK(){},
ki:function ki(a){this.b=0
this.c=a},
jH:function jH(a){this.a=a},
kh:function kh(a){this.a=a
this.b=16
this.c=0},
kB:function(a,b){var s=H.md(a,b)
if(s!=null)return s
throw H.c(P.a3(a,null,null))},
nY:function(a){if(a instanceof H.bx)return a.i(0)
return"Instance of '"+H.f(H.eN(a))+"'"},
iw:function(a,b,c,d){var s,r=c?J.l6(a,d):J.o1(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
lc:function(a,b,c){var s,r=H.b([],c.I("x<0>"))
for(s=J.b6(a);s.v();)r.push(s.gA(s))
if(b)return r
return J.l7(r)},
o9:function(a,b,c){var s,r,q=J.l6(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
f6:function(a,b,c){var s,r,q
if(Array.isArray(a)){s=a
r=s.length
c=P.bi(b,c,r)
if(b<=0){if(typeof c!=="number")return c.ak()
q=c<r}else q=!0
return H.me(q?s.slice(b,c):s)}if(t.bm.b(a))return H.op(a,b,P.bi(b,c,a.length))
return P.oy(a,b,c)},
oy:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.a1(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.a1(c,b,a.length,o,o))
r=J.b6(a)
for(q=0;q<b;++q)if(!r.v())throw H.c(P.a1(b,0,q,o,o))
p=[]
if(s)for(;r.v();)p.push(r.gA(r))
else for(q=b;q<c;++q){if(!r.v())throw H.c(P.a1(c,b,q,o,o))
p.push(r.gA(r))}return H.me(p)},
oq:function(a){return new H.ei(a,H.o4(a,!1,!0,!1,!1,!1))},
mm:function(a,b,c){var s=J.b6(b)
if(!s.v())return a
if(c.length===0){do a+=H.f(s.gA(s))
while(s.v())}else{a+=H.f(s.gA(s))
for(;s.v();)a=a+c+H.f(s.gA(s))}return a},
ms:function(){var s=H.og()
if(s!=null)return P.oC(s)
throw H.c(P.B("'Uri.base' is not supported"))},
kg:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.nz().b
if(typeof b!="string")H.q(H.ao(b))
s=s.test(b)}else s=!1
if(s)return b
r=c.ghF().ce(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.at(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
nV:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
nW:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
e2:function(a){if(a>=10)return""+a
return"0"+a},
lV:function(a){return new P.by(1000*a)},
id:function(a){if(typeof a=="number"||H.ly(a)||null==a)return J.a5(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nY(a)},
hP:function(a){return new P.dQ(a)},
bO:function(a){return new P.ai(!1,null,null,a)},
lN:function(a,b,c){return new P.ai(!0,a,b,c)},
nL:function(a,b){if(a==null)throw H.c(new P.ai(!1,null,b,"Must not be null"))
return a},
mf:function(a){var s=null
return new P.c4(s,s,!1,s,s,a)},
eO:function(a,b){return new P.c4(null,null,!0,a,b,"Value not in range")},
a1:function(a,b,c,d,e){return new P.c4(b,c,!0,a,d,"Invalid value")},
bi:function(a,b,c){var s
if(0<=a){if(typeof c!=="number")return H.v(c)
s=a>c}else s=!0
if(s)throw H.c(P.a1(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.v(c)
s=b>c}else s=!0
if(s)throw H.c(P.a1(b,a,c,"end",null))
return b}return c},
mg:function(a,b){if(a<0)throw H.c(P.a1(a,0,null,b,null))
return a},
O:function(a,b,c,d,e){var s=e==null?J.aN(b):e
return new P.ef(s,!0,a,c,"Index out of range")},
B:function(a){return new P.fw(a)},
jz:function(a){return new P.ft(a)},
lg:function(a){return new P.c6(a)},
ba:function(a){return new P.dZ(a)},
u:function(a){return new P.fT(a)},
a3:function(a,b,c){return new P.ij(a,b,c)},
lH:function(a){H.qw(a)},
oC:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.D(a5,4)^58)*3|C.a.D(a5,0)^100|C.a.D(a5,1)^97|C.a.D(a5,2)^116|C.a.D(a5,3)^97)>>>0
if(s===0)return P.mr(a4<a4?C.a.u(a5,0,a4):a5,5,a3).gek()
else if(s===32)return P.mr(C.a.u(a5,5,a4),0,a3).gek()}r=P.iw(8,0,!1,t.S)
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
if(P.n1(a5,0,a4,0,r)>=14){if(7>=r.length)return H.d(r,7)
r[7]=a4}if(1>=r.length)return H.d(r,1)
p=r[1]
if(p>=0)if(P.n1(a5,0,p,20,r)===20){if(7>=r.length)return H.d(r,7)
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
j=!1}else{if(!(l<a4&&l===m+2&&C.a.ah(a5,"..",m)))h=l>m+2&&C.a.ah(a5,"/..",l-3)
else h=!0
if(h){i=a3
j=!1}else{if(p===4)if(C.a.ah(a5,"file",0)){if(o<=0){if(!C.a.ah(a5,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+C.a.u(a5,m,a4)
p-=0
q=s-0
l+=q
k+=q
a4=a5.length
o=7
n=7
m=7}else if(m===l){++k
f=l+1
a5=C.a.b0(a5,m,l,"/");++a4
l=f}i="file"}else if(C.a.ah(a5,"http",0)){if(q&&n+3===m&&C.a.ah(a5,"80",n+1)){k-=3
e=m-3
l-=3
a5=C.a.b0(a5,n,m,"")
a4-=3
m=e}i="http"}else i=a3
else if(p===5&&C.a.ah(a5,"https",0)){if(q&&n+4===m&&C.a.ah(a5,"443",n+1)){k-=4
e=m-4
l-=4
a5=C.a.b0(a5,n,m,"")
a4-=3
m=e}i="https"}else i=a3
j=!0}}}else i=a3
if(j){if(a4<a5.length){a5=C.a.u(a5,0,a4)
p-=0
o-=0
n-=0
m-=0
l-=0
k-=0}return new P.hd(a5,p,o,n,m,l,k,i)}if(i==null)if(p>0)i=P.pc(a5,0,p)
else{if(p===0)P.ce(a5,0,"Invalid empty scheme")
i=""}if(o>0){d=p+3
c=d<o?P.pd(a5,d,o-1):""
b=P.p9(a5,o,n,!1)
q=n+1
if(q<m){a=H.md(C.a.u(a5,q,m),a3)
a0=P.pb(a==null?H.q(P.a3("Invalid port",a5,q)):a,i)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.pa(a5,m,l,a3,i,b!=null)
a2=l<k?P.lt(a5,l+1,k,a3):a3
return new P.bJ(i,c,b,a0,a1,a2,k<a4?P.p8(a5,k+1,a4):a3)},
mu:function(a){var s=t.N
return C.b.hK(H.b(a.split("&"),t.s),P.lb(s,s),new P.jE(C.e))},
oB:function(a,b,c){var s,r,q,p,o,n,m,l="IPv4 address should contain exactly 4 parts",k="each part must be in the range 0..255",j=new P.jB(a),i=new Uint8Array(4)
for(s=i.length,r=b,q=r,p=0;r<c;++r){o=C.a.Y(a,r)
if(o!==46){if((o^48)>9)j.$2("invalid character",r)}else{if(p===3)j.$2(l,r)
n=P.kB(C.a.u(a,q,r),null)
if(typeof n!=="number")return n.a6()
if(n>255)j.$2(k,q)
m=p+1
if(p>=s)return H.d(i,p)
i[p]=n
q=r+1
p=m}}if(p!==3)j.$2(l,c)
n=P.kB(C.a.u(a,q,c),null)
if(typeof n!=="number")return n.a6()
if(n>255)j.$2(k,q)
if(p>=s)return H.d(i,p)
i[p]=n
return i},
mt:function(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new P.jC(a),b=new P.jD(c,a)
if(a.length<2)c.$1("address is too short")
s=H.b([],t.t)
for(r=a0,q=r,p=!1,o=!1;r<a1;++r){n=C.a.Y(a,r)
if(n===58){if(r===a0){++r
if(C.a.Y(a,r)!==58)c.$2("invalid start colon.",r)
q=r}if(r===q){if(p)c.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(b.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)c.$1("too few parts")
m=q===a1
l=C.b.gaD(s)
if(m&&l!==-1)c.$2("expected a part after last `:`",a1)
if(!m)if(!o)s.push(b.$2(q,a1))
else{k=P.oB(a,q,a1)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)c.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)c.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.d(j,g)
j[g]=0
d=g+1
if(d>=i)return H.d(j,d)
j[d]=0
g+=2}else{d=C.c.aV(f,8)
if(g<0||g>=i)return H.d(j,g)
j[g]=d
d=g+1
if(d>=i)return H.d(j,d)
j[d]=f&255
g+=2}}return j},
mR:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
ce:function(a,b,c){throw H.c(P.a3(c,a,b))},
pb:function(a,b){if(a!=null&&a===P.mR(b))return null
return a},
p9:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.Y(a,b)===91){s=c-1
if(C.a.Y(a,s)!==93)P.ce(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.p6(a,r,s)
if(q<s){p=q+1
o=P.mW(a,C.a.ah(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mt(a,r,q)
return C.a.u(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.Y(a,n)===58){q=C.a.bu(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mW(a,C.a.ah(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mt(a,b,q)
return"["+C.a.u(a,b,q)+o+"]"}return P.pf(a,b,c)},
p6:function(a,b,c){var s=C.a.bu(a,"%",b)
return s>=b&&s<c?s:c},
mW:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.Q(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.Y(a,s)
if(p===37){o=P.lu(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.Q("")
m=i.a+=C.a.u(a,r,s)
if(n)o=C.a.u(a,s,s+3)
else if(o==="%")P.ce(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.Q("")
if(r<s){i.a+=C.a.u(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.Y(a,s+1)
if((l&64512)===56320){p=65536|(p&1023)<<10|l&1023
k=2}else k=1}else k=1
j=C.a.u(a,r,s)
if(i==null){i=new P.Q("")
n=i}else n=i
n.a+=j
n.a+=P.ls(p)
s+=k
r=s}}}if(i==null)return C.a.u(a,b,c)
if(r<c)i.a+=C.a.u(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
pf:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.Y(a,s)
if(o===37){n=P.lu(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.Q("")
l=C.a.u(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.u(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.d(C.z,m)
m=(C.z[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.Q("")
if(r<s){q.a+=C.a.u(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.d(C.k,m)
m=(C.k[m]&1<<(o&15))!==0}else m=!1
if(m)P.ce(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.Y(a,s+1)
if((i&64512)===56320){o=65536|(o&1023)<<10|i&1023
j=2}else j=1}else j=1
l=C.a.u(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.Q("")
m=q}else m=q
m.a+=l
m.a+=P.ls(o)
s+=j
r=s}}}}if(q==null)return C.a.u(a,b,c)
if(r<c){l=C.a.u(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
pc:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.mT(C.a.D(a,b)))P.ce(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.D(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.d(C.m,p)
p=(C.m[p]&1<<(q&15))!==0}else p=!1
if(!p)P.ce(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.u(a,b,c)
return P.p5(r?a.toLowerCase():a)},
p5:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
pd:function(a,b,c){return P.dB(a,b,c,C.a_,!1)},
pa:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dB(a,b,c,C.A,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.aa(s,"/"))s="/"+s
return P.pe(s,e,f)},
pe:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.aa(a,"/"))return P.pg(a,!s||c)
return P.ph(a)},
lt:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.bO("Both query and queryParameters specified"))
return P.dB(a,b,c,C.l,!0)}if(d==null)return null
s=new P.Q("")
r.a=""
d.F(0,new P.ke(new P.kf(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
p8:function(a,b,c){return P.dB(a,b,c,C.l,!0)},
lu:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.Y(a,b+1)
r=C.a.Y(a,n)
q=H.kx(s)
p=H.kx(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aV(o,4)
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.at(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.u(a,b,b+3).toUpperCase()
return null},
ls:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
n+=3}}return P.f6(s,0,null)},
dB:function(a,b,c,d,e){var s=P.mV(a,b,c,d,e)
return s==null?C.a.u(a,b,c):s},
mV:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.Y(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.d(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lu(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.d(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.ce(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.Y(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.ls(o)}}if(p==null){p=new P.Q("")
n=p}else n=p
n.a+=C.a.u(a,q,r)
n.a+=H.f(m)
if(typeof l!=="number")return H.v(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.u(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mU:function(a){if(C.a.aa(a,"."))return!0
return C.a.e2(a,"/.")!==-1},
ph:function(a){var s,r,q,p,o,n,m
if(!P.mU(a))return a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.N(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.d(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
pg:function(a,b){var s,r,q,p,o,n
if(!P.mU(a))return!b?P.mS(a):a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gaD(s)!==".."){if(0>=s.length)return H.d(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.d(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gaD(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.d(s,0)
r=P.mS(s[0])
if(0>=s.length)return H.d(s,0)
s[0]=r}return C.b.j(s,"/")},
mS:function(a){var s,r,q,p=a.length
if(p>=2&&P.mT(J.nB(a,0)))for(s=1;s<p;++s){r=C.a.D(a,s)
if(r===58)return C.a.u(a,0,s)+"%3A"+C.a.al(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.d(C.m,q)
q=(C.m[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
p7:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.D(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.bO("Invalid URL encoding"))}}return s},
lv:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.D(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.u(a,b,c)
else p=new H.p(C.a.u(a,b,c))}else{p=H.b([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.D(a,o)
if(r>127)throw H.c(P.bO("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.bO("Truncated URI"))
p.push(P.p7(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a4.ce(p)},
mT:function(a){var s=a|32
return 97<=s&&s<=122},
mr:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.b([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.D(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.a3(k,a,r))}}if(q<0&&r>b)throw H.c(P.a3(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.D(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaD(j)
if(p!==44||r!==n+7||!C.a.ah(a,"base64",n+1))throw H.c(P.a3("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.J.hT(0,a,m,s)
else{l=P.mV(a,m,s,C.l,!0)
if(l!=null)a=C.a.b0(a,m,s,l)}return new P.jA(a,j,c)},
pn:function(){var s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",r=".",q=":",p="/",o="?",n="#",m=P.o9(22,new P.kp(),t.gc),l=new P.ko(m),k=new P.kq(),j=new P.kr(),i=l.$2(0,225)
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
n1:function(a,b,c,d,e){var s,r,q,p,o,n=$.nA()
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
aj:function aj(a,b){this.a=a
this.b=b},
Z:function Z(){},
by:function by(a){this.a=a},
i6:function i6(){},
i7:function i7(){},
K:function K(){},
dQ:function dQ(a){this.a=a},
eB:function eB(){},
ai:function ai(a,b,c,d){var _=this
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
ef:function ef(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fw:function fw(a){this.a=a},
ft:function ft(a){this.a=a},
c6:function c6(a){this.a=a},
dZ:function dZ(a){this.a=a},
eE:function eE(){},
cZ:function cZ(){},
e0:function e0(a){this.a=a},
fT:function fT(a){this.a=a},
ij:function ij(a,b,c){this.a=a
this.b=b
this.c=c},
aC:function aC(){},
k:function k(){},
h:function h(){},
eg:function eg(){},
n:function n(){},
G:function G(){},
as:function as(){},
R:function R(){},
M:function M(){},
y:function y(){},
Q:function Q(a){this.a=a},
jE:function jE(a){this.a=a},
jB:function jB(a){this.a=a},
jC:function jC(a){this.a=a},
jD:function jD(a,b){this.a=a
this.b=b},
bJ:function bJ(a,b,c,d,e,f,g){var _=this
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
jA:function jA(a,b,c){this.a=a
this.b=b
this.c=c},
kp:function kp(){},
ko:function ko(a){this.a=a},
kq:function kq(){},
kr:function kr(){},
hd:function hd(a,b,c,d,e,f,g,h){var _=this
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
qg:function(a){var s
if(t.v.b(a)){s=J.nH(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.dx(a.data,a.height,a.width)},
qf:function(a){if(a instanceof P.dx)return{data:a.a,height:a.b,width:a.c}
return a},
bp:function(a){var s,r,q,p,o
if(a==null)return null
s=P.lb(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
s.l(0,o,a[o])}return s},
qe:function(a){var s={}
a.F(0,new P.kv(s))
return s},
k7:function k7(){},
k9:function k9(a,b){this.a=a
this.b=b},
ka:function ka(a,b){this.a=a
this.b=b},
dx:function dx(a,b,c){this.a=a
this.b=b
this.c=c},
kv:function kv(a){this.a=a},
k8:function k8(a,b){this.a=a
this.b=b},
e8:function e8(a,b){this.a=a
this.b=b},
ih:function ih(){},
ii:function ii(){},
k_:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oN:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
hb:function hb(){},
aa:function aa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aT:function aT(){},
em:function em(){},
aX:function aX(){},
eC:function eC(){},
iW:function iW(){},
c5:function c5(){},
f5:function f5(){},
m:function m(){},
aZ:function aZ(){},
fi:function fi(){},
h_:function h_(){},
h0:function h0(){},
h7:function h7(){},
h8:function h8(){},
hl:function hl(){},
hm:function hm(){},
hu:function hu(){},
hv:function hv(){},
bk:function bk(){},
hR:function hR(){},
dS:function dS(){},
hS:function hS(a){this.a=a},
dT:function dT(){},
b8:function b8(){},
eD:function eD(){},
fG:function fG(){},
eQ:function eQ(){},
f0:function f0(){},
hh:function hh(){},
hi:function hi(){}},W={
lM:function(){var s=document.createElement("a")
return s},
kZ:function(){var s=document.createElement("canvas")
return s},
nX:function(a,b,c){var s,r=document.body
r.toString
s=C.r.ar(r,a,b,c)
s.toString
r=new H.b2(new W.a2(s),new W.i8(),t.ac.I("b2<i.E>"))
return t.h.a(r.gaO(r))},
i9:function(a){return"wheel"},
cw:function(a){var s,r,q="element tag unavailable"
try{s=J.aL(a)
if(typeof s.geg(a)=="string")q=s.geg(a)}catch(r){H.ag(r)}return q},
m1:function(a){var s=document.createElement("img")
s.src=a
return s},
nZ:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.ag(s)}return q},
jZ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mI:function(a,b,c,d){var s=W.jZ(W.jZ(W.jZ(W.jZ(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
X:function(a,b,c,d){var s=new W.fS(a,b,c==null?null:W.n2(new W.jY(c),t.aD),!1)
s.hk()
return s},
mG:function(a){var s=W.lM(),r=window.location
s=new W.cc(new W.k4(s,r))
s.eF(a)
return s},
oJ:function(a,b,c,d){return!0},
oK:function(a,b,c,d){var s,r=d.a,q=r.a
q.href=c
s=q.hostname
r=r.b
if(!(s==r.hostname&&q.port==r.port&&q.protocol==r.protocol))if(s==="")if(q.port===""){r=q.protocol
r=r===":"||r===""}else r=!1
else r=!1
else r=!0
return r},
mM:function(){var s=t.N,r=P.m4(C.B,s),q=H.b(["TEMPLATE"],t.s)
s=new W.hp(r,P.cJ(s),P.cJ(s),P.cJ(s),null)
s.eG(null,new H.cP(C.B,new W.kb(),t.eM),q,null)
return s},
n2:function(a,b){var s=$.aK
if(s===C.f)return a
return s.dA(a,b)},
r:function r(){},
hO:function hO(){},
dO:function dO(){},
dP:function dP(){},
bP:function bP(){},
bt:function bt(){},
bu:function bu(){},
bw:function bw(){},
aA:function aA(){},
i_:function i_(){},
I:function I(){},
cs:function cs(){},
i0:function i0(){},
aq:function aq(){},
aP:function aP(){},
i1:function i1(){},
i2:function i2(){},
i3:function i3(){},
bb:function bb(){},
i4:function i4(){},
ct:function ct(){},
cu:function cu(){},
e5:function e5(){},
i5:function i5(){},
fH:function fH(a,b){this.a=a
this.b=b},
D:function D(){},
i8:function i8(){},
j:function j(){},
e:function e(){},
ak:function ak(){},
bS:function bS(){},
e7:function e7(){},
e9:function e9(){},
aD:function aD(){},
im:function im(){},
bA:function bA(){},
bB:function bB(){},
bU:function bU(){},
bW:function bW(){},
bD:function bD(){},
ix:function ix(){},
iP:function iP(){},
bY:function bY(){},
es:function es(){},
iQ:function iQ(a){this.a=a},
et:function et(){},
iR:function iR(a){this.a=a},
aF:function aF(){},
eu:function eu(){},
al:function al(){},
a2:function a2(a){this.a=a},
w:function w(){},
cW:function cW(){},
aG:function aG(){},
eI:function eI(){},
eR:function eR(){},
j3:function j3(a){this.a=a},
eT:function eT(){},
av:function av(){},
eX:function eX(){},
aH:function aH(){},
eY:function eY(){},
aI:function aI(){},
f3:function f3(){},
jd:function jd(a){this.a=a},
aw:function aw(){},
bj:function bj(){},
d0:function d0(){},
f7:function f7(){},
f8:function f8(){},
c7:function c7(){},
ax:function ax(){},
ae:function ae(){},
fb:function fb(){},
fc:function fc(){},
jm:function jm(){},
aJ:function aJ(){},
bG:function bG(){},
fh:function fh(){},
jq:function jq(){},
b0:function b0(){},
jF:function jF(){},
fB:function fB(){},
bl:function bl(){},
ca:function ca(){},
cb:function cb(){},
fI:function fI(){},
dd:function dd(){},
fX:function fX(){},
di:function di(){},
hg:function hg(){},
hn:function hn(){},
fF:function fF(){},
fP:function fP(a){this.a=a},
l3:function l3(a,b){this.a=a
this.$ti=b},
fS:function fS(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jY:function jY(a){this.a=a},
ll:function ll(a){this.$ti=a},
cc:function cc(a){this.a=a},
L:function L(){},
cX:function cX(a){this.a=a},
iU:function iU(a){this.a=a},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c},
dp:function dp(){},
k5:function k5(){},
k6:function k6(){},
hp:function hp(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kb:function kb(){},
ho:function ho(){},
cB:function cB(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
am:function am(){},
k4:function k4(a,b){this.a=a
this.b=b},
hz:function hz(a){this.a=a
this.b=!1},
kj:function kj(a){this.a=a},
fJ:function fJ(){},
fL:function fL(){},
fM:function fM(){},
fN:function fN(){},
fO:function fO(){},
fU:function fU(){},
fV:function fV(){},
fY:function fY(){},
fZ:function fZ(){},
h1:function h1(){},
h2:function h2(){},
h3:function h3(){},
h4:function h4(){},
h5:function h5(){},
h6:function h6(){},
h9:function h9(){},
ha:function ha(){},
hc:function hc(){},
dq:function dq(){},
dr:function dr(){},
he:function he(){},
hf:function hf(){},
hk:function hk(){},
hq:function hq(){},
hr:function hr(){},
dt:function dt(){},
du:function du(){},
hs:function hs(){},
ht:function ht(){},
hA:function hA(){},
hB:function hB(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(){},
hF:function hF(){},
hG:function hG(){},
hH:function hH(){},
hI:function hI(){},
hJ:function hJ(){}},K={
P:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.u("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.D(a,0)
r=C.a.D(b,0)
if(s>r){q=r
r=s
s=q}return new K.iZ(s,r)},
t:function(a){var s=new K.j4()
s.eD(a)
return s},
b7:function b7(){},
ed:function ed(){},
iA:function iA(){},
ac:function ac(){this.a=null},
iZ:function iZ(a,b){this.a=a
this.b=b},
j4:function j4(){this.a=null},
n9:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="testCanvas",a4=null,a5="blurValue",a6="modifiers",a7=34067,a8=V.ou("Test 041"),a9=W.kZ()
a9.className="pageLargeCanvas"
a9.id=a3
a8.a.appendChild(a9)
s=t.i
a8.dt(H.b(["Test of the Gaussian blur technique with a solid blur value for the whole image."],s))
a8.hm(H.b(["blurValue"],s))
a8.dt(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(a3)
if(r==null)H.q(P.u("Failed to find an element with the identifier, testCanvas."))
q=E.oz(r,!0,!0,!0,!1)
p=new U.bT()
p.bn(t.ah)
p.b3(p.gf7(),p.gfO())
p.e=null
p.f=V.bX()
p.r=0
o=q.x
n=new U.d9()
m=U.l0()
m.scL(0,!0)
m.scB(6.283185307179586)
m.scD(0)
m.san(0,0)
m.scC(100)
m.sV(0)
m.scg(0.5)
n.b=m
l=n.gaT()
m.gp().n(0,l)
m=U.l0()
m.scL(0,!0)
m.scB(6.283185307179586)
m.scD(0)
m.san(0,0)
m.scC(100)
m.sV(0)
m.scg(0.5)
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
k=new X.ar(!1,!1,!1)
j=n.d
n.d=k
m=new D.z(a6,j,k)
m.b=!0
n.O(m)
m=n.f
if(m!==!1){n.f=!1
m=new D.z("invertX",m,!1)
m.b=!0
n.O(m)}m=n.r
if(m!==!1){n.r=!1
m=new D.z("invertY",m,!1)
m.b=!0
n.O(m)}n.ba(o)
p.n(0,n)
o=q.x
n=new U.d8()
m=U.l0()
m.scL(0,!0)
m.scB(6.283185307179586)
m.scD(0)
m.san(0,0)
m.scC(100)
m.sV(0)
m.scg(0.2)
n.b=m
m.gp().n(0,n.gaT())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
k=new X.ar(!0,!1,!1)
j=n.c
n.c=k
m=new D.z(a6,j,k)
m.b=!0
n.O(m)
n.ba(o)
p.n(0,n)
o=q.x
n=new U.da()
n.c=0.01
n.e=n.d=0
k=new X.ar(!1,!1,!1)
n.b=k
m=new D.z(a6,a4,k)
m.b=!0
n.O(m)
n.ba(o)
p.n(0,n)
i=V.aW(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
o=new U.co()
o.a=i
p.n(0,o)
h=X.m8(p)
g=new O.eq()
o=O.l_(t.hc)
g.e=o
o.b3(g.gfb(),g.gfd())
o=new O.aV(g,"emission")
o.c=new A.a9(!1,!1,!1)
o.f=new V.a8(0,0,0)
g.f=o
o=new O.aV(g,"ambient")
o.c=new A.a9(!1,!1,!1)
o.f=new V.a8(0,0,0)
g.r=o
o=new O.aV(g,"diffuse")
o.c=new A.a9(!1,!1,!1)
o.f=new V.a8(0,0,0)
g.x=o
o=new O.aV(g,"invDiffuse")
o.c=new A.a9(!1,!1,!1)
o.f=new V.a8(0,0,0)
g.y=o
o=new O.iG(g,"specular")
o.c=new A.a9(!1,!1,!1)
o.f=new V.a8(0,0,0)
o.ch=100
g.z=o
o=new O.iC(g,"bump")
o.c=new A.a9(!1,!1,!1)
g.Q=o
g.ch=null
o=new O.aV(g,"reflect")
o.c=new A.a9(!1,!1,!1)
o.f=new V.a8(0,0,0)
g.cx=o
o=new O.iF(g,"refract")
o.c=new A.a9(!1,!1,!1)
o.f=new V.a8(0,0,0)
o.ch=1
g.cy=o
o=new O.iB(g,"alpha")
o.c=new A.a9(!1,!1,!1)
o.f=1
g.db=o
o=new D.cH()
o.bn(t.gj)
o.e=H.b([],t.bb)
o.f=H.b([],t.cP)
o.r=H.b([],t.eb)
o.x=H.b([],t.du)
o.z=o.y=null
o.cO(o.gf9(),o.gfM(),o.gfQ())
g.dx=o
n=new O.iE()
n.b=new V.aB(0,0,0,0)
n.c=1
n.d=10
n.e=!1
g.dy=n
n=o.y
o=n==null?o.y=D.F():n
o.n(0,g.gh5())
o=g.dx
n=o.z
o=n==null?o.z=D.F():n
o.n(0,g.gay())
g.fr=null
o=g.r
o.saY(0,new V.a8(0.3,0.3,0.3))
o=g.x
o.saY(0,new V.a8(0.8,0.8,0.8))
o=g.x
n=q.f.hR("../resources/Test.png")
m=o.c
if(!m.b)o.dj(new A.a9(m.a,!0,!1))
m=o.d
if(m!==n){if(m!=null)m.gp().U(0,o.gay())
j=o.d
o.d=n
n.gp().n(0,o.gay())
n=new D.z(o.b+".texture2D",j,o.d)
n.b=!0
o.a.J(n)}f=X.lO(!0,!1)
e=new M.cx()
e.a=!0
o=O.l_(t.l)
e.e=o
o.b3(e.gfh(),e.gfj())
e.y=e.x=e.r=e.f=null
d=X.lZ(a4)
e.sbc(a4)
e.sb1(0,d)
e.sbj(a4)
o=e.e
c=F.lf()
F.dC(c,a4,a4,1,1,1,0,0,1)
F.dC(c,a4,a4,1,1,0,1,0,3)
F.dC(c,a4,a4,1,1,0,0,1,2)
F.dC(c,a4,a4,1,1,-1,0,0,0)
F.dC(c,a4,a4,1,1,0,-1,0,0)
F.dC(c,a4,a4,1,1,0,0,-1,3)
c.aJ()
o.n(0,E.lY(c))
e.sbj(g)
e.sb1(0,f)
e.sbc(h)
o=q.f
n=o.a
b=n.createTexture()
n.bindTexture(a7,b)
n.texParameteri(a7,10242,10497)
n.texParameteri(a7,10243,10497)
n.texParameteri(a7,10241,9729)
n.texParameteri(a7,10240,9729)
n.bindTexture(a7,a4)
a=new T.jh()
a.a=0
a.b=b
a.c=!1
a.d=0
o.aS(a,b,"../resources/maskonaive/posx.jpg",34069,!1,!1)
o.aS(a,b,"../resources/maskonaive/negx.jpg",34070,!1,!1)
o.aS(a,b,"../resources/maskonaive/posy.jpg",34071,!1,!1)
o.aS(a,b,"../resources/maskonaive/negy.jpg",34072,!1,!1)
o.aS(a,b,"../resources/maskonaive/posz.jpg",34073,!1,!1)
o.aS(a,b,"../resources/maskonaive/negz.jpg",34074,!1,!1)
a0=M.l1(a4,a4)
o=new O.eU()
o.b=1.0471975511965976
o.d=new V.a8(1,1,1)
j=o.c
o.c=a
a.gp().n(0,o.gay())
n=new D.z("boxTexture",j,o.c)
n.b=!0
o.J(n)
a0.sbj(o)
a0.sb1(0,f)
a0.sbc(h)
o=f.ch
a1=new M.cC()
a1.a=!0
a1.c=X.lO(!0,!1)
n=O.m0(a4,a4)
m=a1.gW()
n.gp().n(0,m)
a1.d=n
a1.e=M.l1(a1.c,n)
n=a1.c.ch
l=$.mx
n=O.m0(l==null?$.mx=new V.a4(0,1):l,n)
n.gp().n(0,m)
a1.f=n
a1.r=M.l1(a4,n)
a1.d.sbb(0)
a1.f.sbb(0)
a1.d.sdE(o)
a1.d.sc8(a4)
a1.f.sc8(a4)
a1.d.scJ(a4)
a1.f.scJ(a4)
a1.d.sc7(a4)
a1.f.sc7(a4)
a1.r.sb1(0,a4)
o=H.b([a0,e,a1],t.f2)
n=new M.cn()
n.bn(t.bn)
n.e=!0
n.f=!1
n.r=null
n.b3(n.gfS(),n.gfU())
n.ac(0,o)
o=q.d
if(o!==n){if(o!=null)o.gp().U(0,q.gcX())
q.d=n
n.gp().n(0,q.gcX())
q.cY()}a2=new K.kE(a1)
o=new V.iX(a5)
s=s.getElementById(a5)
o.c=s
if(s==null)H.q("Failed to find blurValue for RadioGroup")
o.dr(0,"0.0",new K.kF(a2),!0)
o.aq(0,"0.1",new K.kG(a2))
o.aq(0,"0.2",new K.kJ(a2))
o.aq(0,"0.3",new K.kK(a2))
o.aq(0,"0.4",new K.kL(a2))
o.aq(0,"0.5",new K.kM(a2))
o.aq(0,"0.6",new K.kN(a2))
o.aq(0,"0.7",new K.kO(a2))
o.aq(0,"0.8",new K.kP(a2))
o.aq(0,"0.9",new K.kQ(a2))
o.aq(0,"1.0",new K.kH(a2))
s=q.Q
if(s==null)s=q.Q=D.F()
o=s.b
s=o==null?s.b=H.b([],t.f):o
s.push(new K.kI(a8,a1))
V.qx(q)},
kE:function kE(a){this.a=a},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a,b){this.a=a
this.b=b}},L={
jo:function(){var s=new L.jn()
s.a=new H.C(t.cn)
s.b=new H.C(t.w)
s.c=P.cJ(t.X)
return s},
f1:function f1(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ff:function ff(a,b,c){this.a=a
this.b=b
this.c=c},
fg:function fg(a){this.b=a
this.c=null},
jn:function jn(){var _=this
_.d=_.c=_.b=_.a=null},
fj:function fj(a){this.b=a
this.a=this.c=null}},O={
l_:function(a){var s=new O.a7(a.I("a7<0>"))
s.bn(a)
return s},
a7:function a7(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cS:function cS(){this.b=this.a=null},
m0:function(a,b){var s,r,q,p=new O.ec()
p.r=0
p.scJ(null)
p.sc7(null)
if(a==null){s=$.mw
if(s==null){s=new V.a4(1,0)
$.mw=s
r=s}else r=s}else r=a
if(!J.N(p.d,r)){q=p.d
p.d=r
s=new D.z("blurDirection",q,r)
s.b=!0
p.J(s)}p.sdE(b)
p.sc8(null)
p.sbb(0)
return p},
ec:function ec(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eq:function eq(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(){},
iJ:function iJ(a,b){this.a=a
this.b=b},
iK:function iK(){},
iL:function iL(a,b){this.a=a
this.b=b},
iM:function iM(){},
iN:function iN(a,b){this.a=a
this.b=b},
iO:function iO(){},
iB:function iB(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cQ:function cQ(){},
iC:function iC(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aV:function aV(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
iE:function iE(){var _=this
_.e=_.d=_.c=_.b=null},
iF:function iF(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
iG:function iG(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eU:function eU(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fa:function fa(){}},E={
lY:function(a){var s,r=new E.bz()
r.a=""
r.b=!0
s=O.l_(t.l)
r.y=s
s.b3(r.ghU(),r.ghX())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.scQ(0,a)
return r},
mD:function(){if(J.kU(window.navigator.vendor,"Google"))return C.H
if(J.kU(window.navigator.userAgent,"Firefox"))return C.t
var s=window.navigator.appVersion
if(J.b4(s).B(s,"Trident")||C.a.B(s,"Edge"))return C.u
if(J.kU(window.navigator.appName,"Microsoft"))return C.u
return C.I},
mE:function(){var s=window.navigator.appVersion
if(J.b4(s).B(s,"Win"))return C.a1
if(C.a.B(s,"Mac"))return C.C
if(C.a.B(s,"Linux"))return C.a2
return C.a3},
or:function(a,b){var s=new E.j_(a)
s.eC(a,b)
return s},
oz:function(a,b,c,d,e){var s,r
if(t.fr.b(a))return E.mn(a,!0,!0,!0,!1)
s=W.kZ()
r=s.style
r.width="100%"
r.height="100%"
J.kW(a).n(0,s)
return E.mn(s,!0,!0,!0,!1)},
mn:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.fe(),n=t.z,m=C.j.cM(a,"webgl2",P.o7(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.q(P.u("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.or(m,a)
n=new T.ji(m)
n.b=m.getParameter(3379)
n.c=m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.fy(a)
s=new X.it()
s.c=new X.ar(!1,!1,!1)
s.d=P.cJ(t.e)
n.b=s
s=new X.iS(n)
s.f=0
s.r=V.bg()
s.x=V.bg()
s.ch=s.Q=1
n.c=s
s=new X.iy(n)
s.r=0
s.x=V.bg()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.jp(n)
s.f=V.bg()
s.r=V.bg()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=H.b([],t.eG)
s=$.ib
n.Q=(s==null?$.ib=new E.fQ(E.mD(),E.mE()):s).a===C.t?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.X(q,"contextmenu",n.gfl(),!1))
n.z.push(W.X(a,"focus",n.gfs(),!1))
n.z.push(W.X(a,"blur",n.gff(),!1))
n.z.push(W.X(q,"keyup",n.gfw(),!1))
n.z.push(W.X(q,"keydown",n.gfu(),!1))
n.z.push(W.X(a,"mousedown",n.gfC(),!1))
n.z.push(W.X(a,"mouseup",n.gfG(),!1))
n.z.push(W.X(a,p,n.gfE(),!1))
r=n.z
W.i9(a)
W.i9(a)
r.push(W.X(a,W.i9(a),n.gfI(),!1))
n.z.push(W.X(q,p,n.gfn(),!1))
n.z.push(W.X(q,"mouseup",n.gfp(),!1))
n.z.push(W.X(q,"pointerlockchange",n.gfK(),!1))
n.z.push(W.X(a,"touchstart",n.gh_(),!1))
n.z.push(W.X(a,"touchend",n.gfW(),!1))
n.z.push(W.X(a,"touchmove",n.gfY(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.aj(Date.now(),!1)
o.db=0
o.df()
return o},
hW:function hW(){},
bz:function bz(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bR:function bR(a){this.b=a},
c2:function c2(a){this.b=a},
fQ:function fQ(a,b){this.a=a
this.b=b},
j_:function j_(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
j2:function j2(a){this.a=a},
fe:function fe(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
jl:function jl(a){this.a=a}},Z={
lk:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cf(c)),35044)
a.bindBuffer(b,null)
return new Z.fC(b,s)},
ay:function(a){return new Z.b1(a)},
fC:function fC(a,b){this.a=a
this.b=b},
dW:function dW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dc:function dc(a){this.a=a},
bv:function bv(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bV:function bV(a,b,c){this.a=a
this.b=b
this.c=c},
b1:function b1(a){this.a=a}},D={
F:function(){var s=new D.cy()
s.d=0
return s},
hX:function hX(){},
cy:function cy(){var _=this
_.d=_.c=_.b=_.a=null},
ie:function ie(a){this.a=a},
ig:function ig(a){this.a=a},
S:function S(){this.b=null},
aQ:function aQ(){this.b=null},
aR:function aR(){this.b=null},
z:function z(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
dU:function dU(){},
e3:function e3(){},
T:function T(){},
cH:function cH(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
eK:function eK(){},
eZ:function eZ(){}},X={dX:function dX(a,b){this.a=a
this.b=b},ek:function ek(a,b){this.a=a
this.b=b},it:function it(){var _=this
_.d=_.c=_.b=_.a=null},cM:function cM(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},iy:function iy(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ar:function ar(a,b,c){this.a=a
this.b=b
this.c=c},bZ:function bZ(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},iS:function iS(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c_:function c_(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},eL:function eL(){},d2:function d2(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},jp:function jp(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},fy:function fy(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lO:function(a,b){var s,r,q,p,o=new X.hT()
o.d=o.c=o.b=o.a=512
o.e=!0
o.f=!1
o.x=o.r=1
o.ch=T.lh(null)
o.cx=new V.aB(0,0,0,1)
o.cy=!0
o.db=2000
o.dx=!0
o.dy=V.le()
o.sax(0,512)
o.sas(0,512)
s=new V.aB(0,0,0,1)
if(!o.cx.t(0,s)){r=o.cx
o.cx=s
q=new D.z("color",r,s)
q.b=!0
o.a0(q)}if(o.cy){o.cy=!1
q=new D.z("clearColor",!0,!1)
q.b=!0
o.a0(q)}q=o.db
$.E().toString
if(!(Math.abs(q-2000)<1e-9)){o.db=2000
q=new D.z("depth",q,2000)
q.b=!0
o.a0(q)}if(!o.f){o.f=!0
q=new D.z("autoResize",!1,!0)
q.b=!0
o.a0(q)}q=o.r
$.E().toString
if(!(Math.abs(q-1)<1e-9)){o.r=1
q=new D.z("autoResizeScalarX",q,1)
q.b=!0
o.a0(q)}q=o.x
$.E().toString
if(!(Math.abs(q-1)<1e-9)){o.x=1
q=new D.z("autoResizeScalarY",q,1)
q.b=!0
o.a0(q)}p=V.le()
if(!J.N(o.dy,p)){r=o.dy
o.dy=p
q=new D.z("region",r,p)
q.b=!0
o.a0(q)}return o},
lZ:function(a){var s=new X.ik(),r=new V.aB(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=V.le()
s.r=r
return s},
m8:function(a){var s,r,q=new X.eF()
q.c=1.0471975511965976
q.d=0.1
q.e=2000
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gp().n(0,q.geJ())
r=new D.z("mover",s,q.b)
r.b=!0
q.a0(r)}r=q.c
$.E().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
r=new D.z("fov",r,1.0471975511965976)
r.b=!0
q.a0(r)}r=q.d
$.E().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
r=new D.z("near",r,0.1)
r.b=!0
q.a0(r)}r=q.e
$.E().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
r=new D.z("far",r,2000)
r.b=!0
q.a0(r)}return q},
hT:function hT(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
kY:function kY(){},
ik:function ik(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iq:function iq(){this.b=this.a=null},
eF:function eF(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
je:function je(){}},V={
hY:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aB(s,r,q,1)},
lF:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
qC:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bl(a-b,s)
return(a<0?a+s:a)+b},
H:function(a,b,c){if(a==null)return C.a.au("null",c)
$.E().toString
return C.a.au(C.d.ej(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
ck:function(a,b,c){var s,r,q,p,o,n,m=H.b([],t.i)
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.o)(a),++q){p=V.H(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.d(m,o)
s=C.a.au(m[o],r)
n=m.length
if(o>=n)return H.d(m,o)
m[o]=s}return m},
dK:function(a){return C.d.ij(Math.pow(2,C.W.ct(Math.log(H.qc(a))/Math.log(2))))},
bX:function(){var s=$.m6
return s==null?$.m6=V.aW(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aW:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bf(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bg:function(){var s=$.ma
return s==null?$.ma=new V.ad(0,0):s},
oe:function(){var s=$.aY
return s==null?$.aY=new V.a0(0,0,0):s},
le:function(){var s=$.mj
return s==null?$.mj=V.mi(0,0,1,1):s},
mi:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eP(a,b,c,d)},
fz:function(){var s=$.mB
return s==null?$.mB=new V.J(0,0,0):s},
a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ic:function ic(){},
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
ad:function ad(a,b){this.a=a
this.b=b},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
bh:function bh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eP:function eP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a4:function a4(a,b){this.a=a
this.b=b},
J:function J(a,b,c){this.a=a
this.b=b
this.c=c},
db:function db(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qx:function(a){P.oA(C.T,new V.kS(a))},
ou:function(a){var s=new V.j9()
s.eE(a,!0)
return s},
b9:function b9(){},
kS:function kS(a){this.a=a},
e1:function e1(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ea:function ea(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ee:function ee(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eH:function eH(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iX:function iX(a){this.a=a
this.c=null},
iY:function iY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j9:function j9(){this.b=this.a=null},
jb:function jb(a){this.a=a},
ja:function ja(a){this.a=a},
jc:function jc(a){this.a=a}},U={
l0:function(){var s=new U.hZ()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
hZ:function hZ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
co:function co(){this.b=this.a=null},
bT:function bT(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
V:function V(){},
d8:function d8(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
d9:function d9(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
da:function da(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
l1:function(a,b){var s,r,q,p,o,n,m,l,k,j=null,i=new M.cr()
i.a=!0
s=E.lY(j)
r=F.lf()
q=r.a
p=new V.J(-1,-1,1).S()
o=q.br(new V.bh(1,2,4,6),V.hY(255,0,0),new V.a0(-1,-1,0),new V.ad(0,1),p,j)
p=r.a
q=new V.J(1,-1,1).S()
n=p.br(new V.bh(0,3,4,6),V.hY(0,0,255),new V.a0(1,-1,0),new V.ad(1,1),q,j)
q=r.a
p=new V.J(1,1,1).S()
m=q.br(new V.bh(0,2,5,6),V.hY(0,128,0),new V.a0(1,1,0),new V.ad(1,0),p,j)
p=r.a
q=V.bg()
l=new V.J(-1,1,1).S()
k=p.br(new V.bh(0,2,4,7),V.hY(255,255,0),new V.a0(-1,1,0),q,l,j)
r.d.ho(H.b([o,n,m,k],t.j))
r.aJ()
s.scQ(0,r)
i.e=s
i.sbc(j)
i.sb1(0,a)
i.sbj(b)
return i},
cn:function cn(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
cr:function cr(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cx:function cx(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cC:function cC(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a_:function a_(){}},A={
ob:function(a,b){var s=a.be,r=new A.er(b,s)
r.bK(b,s)
r.eB(a,b)
return r},
oc:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="MaterialLight_"+a5.gaA(a5)+a6.gaA(a6)+a7.gaA(a7)+a8.gaA(a8)+a9.gaA(a9)+b0.gaA(b0)+b1.gaA(b1)+b2.gaA(b2)+b3.gaA(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.o)(b4),++r)a+="_"+H.f(b4[r].a)}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.o)(b5),++r)a+="_"+H.f(b5[r].a)}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.o)(b6),++r)a+="_"+H.f(b6[r].a)}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.o)(b7),++r)a+="_"+H.f(b7[r].a)}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
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
b=$.ap()
if(h){s=$.bs()
b=new Z.b1(b.a|s.a)}if(g){s=$.br()
b=new Z.b1(b.a|s.a)}if(f){s=$.aM()
b=new Z.b1(b.a|s.a)}if(e){s=$.bq()
b=new Z.b1(b.a|s.a)}return new A.iD(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
ks:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kt:function(a,b,c){var s,r="Txt, txt2D).rgb;\n"
A.ks(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hM(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}a.a=s+"}\n"},
pH:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.ks(b,r,"emission")
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
pD:function(a,b){var s,r=a.b
if(!(r.a||r.b||!1))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.kt(b,r,"ambient")
b.a+="\n"},
pF:function(a,b){var s,r=a.c
if(!(r.a||r.b||!1))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.kt(b,r,"diffuse")
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
pI:function(a,b){var s,r=a.d
if(!(r.a||r.b||!1))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.kt(b,r,"invDiffuse")
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
pO:function(a,b){var s,r=a.e
if(!(r.a||r.b||!1))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.kt(b,r,"specular")
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
pK:function(a,b){var s,r,q
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
pM:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.ks(b,r,"reflect")
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
pN:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.ks(b,r,"refract")
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
pE:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.f(s)
q=A.hM(r)
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
if(typeof s!=="number")return s.ap()
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
pG:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+H.f(s)
q=A.hM(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.ap()
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
pL:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.f(s)
q=A.hM(r)
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
if(typeof s!=="number")return s.ap()
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
pP:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.f(s)
q=A.hM(r)
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
if(typeof s!=="number")return s.ap()
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
if(m){s=$.ib
if(s==null)s=$.ib=new E.fQ(E.mD(),E.mE())
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
pJ:function(a,b){var s,r
if(a.cy>0)return
s=b.a+="// === No Lights ===\n"
s+="\n"
b.a=s
s+="vec3 nonLightValues(vec3 norm)\n"
b.a=s
s+="{\n"
b.a=s
if(a.dx)b.a=s+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
r=H.b([],t.i)
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
pQ:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.Q("")
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
A.pH(a,h)
A.pD(a,h)
A.pF(a,h)
A.pI(a,h)
A.pO(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.pM(a,h)
A.pN(a,h)}A.pK(a,h)
p=h.a+="// === Alpha ===\n"
p=h.a=p+"\n"
o=a.y
n=o.a
if(n){p+="uniform float alpha;\n"
h.a=p}o=o.b
if(o)p=h.a=p+"uniform sampler2D alphaTxt;\n"
p+="float alphaValue()\n"
h.a=p
p=h.a=p+"{\n"
if(!(n||o||!1))p=h.a=p+"   return 1.0;\n"
else if(o||!1){if(n){if(o){p+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
h.a=p}}else if(o){p+="   float a = texture2D(alphaTxt, txt2D).a;\n"
h.a=p}p+="   if (a <= 0.000001) discard;\n"
h.a=p
p+="   return a;\n"
h.a=p}else if(n){p+="   return alpha;\n"
h.a=p}p+="}\n"
h.a=p
h.a=p+"\n"
p=a.k1
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pE(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pG(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pL(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pP(a,o[m],h)
A.pJ(a,h)}o=h.a+="// === Main ===\n"
o+="\n"
h.a=o
o+="void main()\n"
h.a=o
o+="{\n"
h.a=o
o=h.a=o+"   float alpha = alphaValue();\n"
s=s?h.a=o+"   vec3 norm = normal();\n":o
if(r)h.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
l=H.b([],t.i)
if(p){h.a+=u.o
l.push("lightAccum")
s=a.b
if(s.a||s.b||!1)h.a+="   setAmbientColor();\n"
s=a.c
if(s.a||s.b||!1)h.a+="   setDiffuseColor();\n"
s=a.d
if(s.a||s.b||!1)h.a+="   setInvDiffuseColor();\n"
s=a.e
if(s.a||s.b||!1)h.a+="   setSpecularColor();\n"
for(s=a.z,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.al(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.al(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.al(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.al(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}s=a.a
if(s.a||s.b||!1)l.push("emissionColor()")
s=a.r
if(s.a||s.b||!1)l.push("reflect(refl)")
s=a.x
if(s.a||s.b||!1)l.push("refract(refl)")
if(l.length<=0)l.push("vec3(0.0, 0.0, 0.0)")
s=h.a+="   vec4 objClr = vec4("+C.b.j(l," + ")+", alpha);\n"
if(q)s=h.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
h.a=s
s=h.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
pR:function(a,b){var s,r,q
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
pT:function(a,b){var s
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
pS:function(a,b){var s
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
pV:function(a,b){var s,r
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
pW:function(a,b){var s,r
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
pU:function(a,b){var s
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
pX:function(a,b){var s
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
hM:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.al(a,1)},
lj:function(a,b,c,d,e){var s=new A.jt(a,c,e)
s.f=d
P.iw(d,0,!1,t.e)
return s},
dR:function dR(a,b,c){this.a=a
this.b=b
this.c=c},
hQ:function hQ(a){this.a=a},
a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},
eb:function eb(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
il:function il(a,b){this.a=a
this.b=b},
er:function er(a,b){var _=this
_.ix=_.dM=_.bt=_.be=_.b_=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iF=_.iE=_.iD=_.cr=_.cq=_.cp=_.co=_.cn=_.cm=_.cl=_.ck=_.iC=_.dY=_.dX=_.iB=_.dW=_.dV=_.dU=_.iA=_.dT=_.dS=_.dR=_.iz=_.dQ=_.dP=_.iy=_.dO=_.dN=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dV:function dV(a,b){this.a=a
this.b=b},
e4:function e4(a,b){this.a=a
this.b=b},
eM:function eM(a,b){this.a=a
this.b=b},
f_:function f_(a,b){this.a=a
this.b=b},
iD:function iD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.be=b6
_.bt=b7},
d3:function d3(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d4:function d4(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d6:function d6(a,b,c,d,e,f,g,h,i,j){var _=this
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
d7:function d7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bF:function bF(){},
eV:function eV(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fk:function fk(){},
jx:function jx(a){this.a=a},
fm:function fm(a,b,c){this.a=a
this.c=b
this.d=c},
ju:function ju(a,b,c){this.a=a
this.c=b
this.d=c},
jv:function jv(a,b,c){this.a=a
this.c=b
this.d=c},
jw:function jw(a,b,c){this.a=a
this.c=b
this.d=c},
jt:function jt(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
fl:function fl(a,b,c){this.a=a
this.c=b
this.d=c},
fn:function fn(a,b,c){this.a=a
this.c=b
this.d=c},
fo:function fo(a,b,c){this.a=a
this.c=b
this.d=c},
fp:function fp(a,b,c){this.a=a
this.c=b
this.d=c},
jy:function jy(a,b,c){this.a=a
this.c=b
this.d=c},
fq:function fq(a,b,c){this.a=a
this.c=b
this.d=c},
d5:function d5(a,b,c){this.a=a
this.c=b
this.d=c},
fr:function fr(a,b,c){this.a=a
this.c=b
this.d=c},
fs:function fs(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kn:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
dC:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.J(f,e+a3,d+a4)
h.a=c
s=a3-a4
r=a4-a5
q=a5-a3
p=h.b=new V.J(s+a5,r+a3,q+a4)
o=new V.J(s-a5,r-a3,q-a4)
h.c=o
n=h.d=new V.J(g-a5,e-a3,d-a4)
if(f>0){h.d=p
h.b=n
f=p
g=n}else{f=n
g=p}for(d=f,f=g,g=c,e=o,m=0;m<a6;++m,l=d,d=g,g=f,f=e,e=l){h.a=f
h.b=e
h.c=d
h.d=g}k=F.kn(g)
j=F.kn(f)
i=F.qz(a1,a2,new F.kl(h,F.kn(e),F.kn(d),j,k,a0),b)
if(i!=null)a.hS(i)},
qz:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.lf()
r=H.b([],t.j)
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.jL(e,e,new V.aB(n,0,0,1),e,e,new V.ad(p,1),e,e,0)
o.n(0,m)
c.$3(m,p,0)
r.push(m.cf(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.jL(e,e,new V.aB(h,g,f,1),e,e,new V.ad(p,k),e,e,0)
i.n(0,m)
c.$3(m,p,l)
r.push(m.cf(d))}}s.d.hp(a+1,b+1,r)
return s},
cz:function(a,b,c){var s=new F.e6(),r=a.a
if(r==null)H.q(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.q(P.u("May not create a face with vertices attached to different shapes."))
s.a=a
a.d.b.push(s)
s.b=b
b.d.c.push(s)
s.c=c
c.d.d.push(s)
s.a.a.d.b.push(s)
s.a.a.ae()
return s},
o5:function(a,b){var s=new F.en(),r=a.a
if(r==null)H.q(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(r!=b.a)H.q(P.u("May not create a line with vertices attached to different shapes."))
s.a=a
a.c.b.push(s)
s.b=b
b.c.c.push(s)
s.a.a.c.b.push(s)
s.a.a.ae()
return s},
lf:function(){var s=new F.j5(),r=new F.jM(s)
r.b=!1
r.c=H.b([],t.j)
s.a=r
r=new F.j8(s)
r.b=H.b([],t.p)
s.b=r
r=new F.j7(s)
r.b=H.b([],t.L)
s.c=r
r=new F.j6(s)
r.b=H.b([],t.b)
s.d=r
s.e=null
return s},
jL:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.fA(),p=new F.jR()
p.b=H.b([],t.p)
q.b=p
p=new F.jQ()
s=t.L
p.b=H.b([],s)
p.c=H.b([],s)
q.c=p
p=new F.jN()
s=t.b
p.b=H.b([],s)
p.c=H.b([],s)
p.d=H.b([],s)
q.d=p
h=$.nu()
q.e=0
p=$.ap()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.bs().a)!==0?e:r
q.x=(s&$.br().a)!==0?b:r
q.y=(s&$.aM().a)!==0?f:r
q.z=(s&$.bN().a)!==0?g:r
q.Q=(s&$.nv().a)!==0?c:r
q.ch=(s&$.cl().a)!==0?i:0
q.cx=(s&$.bq().a)!==0?a:r
return q},
kl:function kl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
e6:function e6(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
en:function en(){this.b=this.a=null},
eJ:function eJ(){this.a=null},
j5:function j5(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
j6:function j6(a){this.a=a
this.b=null},
j7:function j7(a){this.a=a
this.b=null},
j8:function j8(a){this.a=a
this.b=null},
fA:function fA(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jT:function jT(a){this.a=a},
jS:function jS(a){this.a=a},
jM:function jM(a){this.a=a
this.c=this.b=null},
jN:function jN(){this.d=this.c=this.b=null},
jO:function jO(a,b){this.a=a
this.b=b},
jP:function jP(a,b){this.a=a
this.b=b},
jQ:function jQ(){this.c=this.b=null},
jR:function jR(){this.b=null}},T={
lh:function(a){var s=new T.jg()
s.a=0
s.b=a
s.d=s.c=!1
s.x=s.r=s.f=s.e=0
return s},
fd:function fd(){},
jf:function jf(){},
jg:function jg(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jh:function jh(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ji:function ji(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
jk:function jk(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jj:function jj(a,b,c,d,e,f,g){var _=this
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
H.l8.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gP:function(a){return H.cY(a)},
i:function(a){return"Instance of '"+H.f(H.eN(a))+"'"}}
J.eh.prototype={
i:function(a){return String(a)},
gP:function(a){return a?519018:218159},
$iaz:1}
J.cG.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gP:function(a){return 0}}
J.bd.prototype={
gP:function(a){return 0},
i:function(a){return String(a)},
$im2:1}
J.eG.prototype={}
J.bH.prototype={}
J.aE.prototype={
i:function(a){var s=a[$.nh()]
if(s==null)return this.ey(a)
return"JavaScript function for "+H.f(J.a5(s))},
$iaC:1}
J.x.prototype={
i9:function(a,b){var s
if(!!a.fixed$length)H.q(P.B("removeAt"))
s=a.length
if(b>=s)throw H.c(P.eO(b,null))
return a.splice(b,1)[0]},
U:function(a,b){var s
if(!!a.fixed$length)H.q(P.B("remove"))
for(s=0;s<a.length;++s)if(J.N(a[s],b)){a.splice(s,1)
return!0}return!1},
ac:function(a,b){var s,r
if(!!a.fixed$length)H.q(P.B("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.o)(b),++r)a.push(b[r])},
F:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.ba(a))}},
j:function(a,b){var s,r,q=P.iw(a.length,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.f(a[s])
if(s>=q.length)return H.d(q,s)
q[s]=r}return q.join(b)},
hP:function(a){return this.j(a,"")},
hJ:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.ba(a))}return s},
hK:function(a,b,c){return this.hJ(a,b,c,t.z)},
hI:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.ba(a))}throw H.c(H.l5())},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
cS:function(a,b){var s=a.length
if(b>s)throw H.c(P.a1(b,0,s,"start",null))
if(b===s)return H.b([],H.km(a))
return H.b(a.slice(b,s),H.km(a))},
gaD:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.l5())},
du:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.ba(a))}return!1},
b5:function(a,b){if(!!a.immutable$list)H.q(P.B("sort"))
H.ox(a,b==null?J.pu():b)},
eu:function(a){return this.b5(a,null)},
B:function(a,b){var s
for(s=0;s<a.length;++s)if(J.N(a[s],b))return!0
return!1},
i:function(a){return P.l4(a,"[","]")},
gM:function(a){return new J.a6(a,a.length)},
gP:function(a){return H.cY(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.q(P.B("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.cj(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.q(P.B("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cj(a,b))
a[b]=c},
$il:1,
$ih:1,
$in:1}
J.ir.prototype={}
J.a6.prototype={
gA:function(a){return this.d},
v:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.o(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bC.prototype={
aZ:function(a,b){var s
if(typeof b!="number")throw H.c(H.ao(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbw(b)
if(this.gbw(a)===s)return 0
if(this.gbw(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbw:function(a){return a===0?1/a<0:a<0},
ij:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.B(""+a+".toInt()"))},
ct:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.B(""+a+".floor()"))},
a_:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.B(""+a+".round()"))},
ej:function(a,b){var s
if(b>20)throw H.c(P.a1(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbw(a))return"-"+s
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
q:function(a,b){if(typeof b!="number")throw H.c(H.ao(b))
return a*b},
bl:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
eA:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dl(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.dl(a,b)},
dl:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.B("Result of truncating division is "+H.f(s)+": "+H.f(a)+" ~/ "+b))},
aV:function(a,b){var s
if(a>0)s=this.dk(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hd:function(a,b){if(b<0)throw H.c(H.ao(b))
return this.dk(a,b)},
dk:function(a,b){return b>31?0:a>>>b},
$iZ:1,
$iR:1}
J.cF.prototype={$ik:1}
J.cE.prototype={}
J.aS.prototype={
Y:function(a,b){if(b<0)throw H.c(H.cj(a,b))
if(b>=a.length)H.q(H.cj(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.c(H.cj(a,b))
return a.charCodeAt(b)},
w:function(a,b){if(typeof b!="string")throw H.c(P.lN(b,null,null))
return a+b},
b0:function(a,b,c,d){var s,r,q=P.bi(b,c,a.length)
if(!H.bK(q))H.q(H.ao(q))
s=a.substring(0,b)
r=a.substring(q)
return s+d+r},
ah:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a1(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
aa:function(a,b){return this.ah(a,b,0)},
u:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.eO(b,null))
if(b>c)throw H.c(P.eO(b,null))
if(c>a.length)throw H.c(P.eO(c,null))
return a.substring(b,c)},
al:function(a,b){return this.u(a,b,null)},
im:function(a){return a.toLowerCase()},
q:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.Q)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
au:function(a,b){var s=b-a.length
if(s<=0)return a
return this.q(" ",s)+a},
bu:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a1(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
e2:function(a,b){return this.bu(a,b,0)},
hv:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.a1(c,0,s,null,null))
return H.nd(a,b,c)},
B:function(a,b){return this.hv(a,b,0)},
aZ:function(a,b){var s
if(typeof b!="string")throw H.c(H.ao(b))
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
gm:function(a){return a.length},
$iy:1}
H.el.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.p.prototype={
gm:function(a){return this.a.length},
h:function(a,b){return C.a.Y(this.a,b)}}
H.l.prototype={}
H.cL.prototype={
gM:function(a){return new H.be(this,this.gm(this))},
bH:function(a,b){return this.ex(0,b)}}
H.be.prototype={
gA:function(a){var s=this.d
return s},
v:function(){var s,r=this,q=r.a,p=J.b4(q),o=p.gm(q)
if(r.b!=o)throw H.c(P.ba(q))
s=r.c
if(typeof o!=="number")return H.v(o)
if(s>=o){r.d=null
return!1}r.d=p.G(q,s);++r.c
return!0}}
H.aU.prototype={
gM:function(a){return new H.ep(J.b6(this.a),this.b)},
gm:function(a){return J.aN(this.a)},
G:function(a,b){return this.b.$1(J.hN(this.a,b))}}
H.cv.prototype={$il:1}
H.ep.prototype={
v:function(){var s=this,r=s.b
if(r.v()){s.a=s.c.$1(r.gA(r))
return!0}s.a=null
return!1},
gA:function(a){var s=this.a
return s}}
H.cP.prototype={
gm:function(a){return J.aN(this.a)},
G:function(a,b){return this.b.$1(J.hN(this.a,b))}}
H.b2.prototype={
gM:function(a){return new H.fD(J.b6(this.a),this.b)}}
H.fD.prototype={
v:function(){var s,r
for(s=this.a,r=this.b;s.v();)if(r.$1(s.gA(s)))return!0
return!1},
gA:function(a){var s=this.a
return s.gA(s)}}
H.cA.prototype={}
H.fv.prototype={
l:function(a,b,c){throw H.c(P.B("Cannot modify an unmodifiable list"))}}
H.c8.prototype={}
H.cp.prototype={
i:function(a){return P.ld(this)},
l:function(a,b,c){H.nU()},
$iG:1}
H.cq.prototype={
gm:function(a){return this.a},
cd:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.cd(0,b))return null
return this.d6(b)},
d6:function(a){return this.b[a]},
F:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.d6(q))}}}
H.jr.prototype={
at:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.eA.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.ej.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.f(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.f(r.a)+")"
return q+p+"' on '"+s+"' ("+H.f(r.a)+")"}}
H.fu.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.iV.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.hj.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bx.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.nf(r==null?"unknown":r)+"'"},
$iaC:1,
giq:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.f9.prototype={}
H.f2.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.nf(s)+"'"}}
H.bQ.prototype={
t:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bQ))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gP:function(a){var s,r=this.c
if(r==null)s=H.cY(this.a)
else s=typeof r!=="object"?J.ah(r):H.cY(r)
return(s^H.cY(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.eN(s))+"'")}}
H.eS.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.C.prototype={
gm:function(a){return this.a},
gbv:function(a){return this.a===0},
ga3:function(a){return new H.cI(this,H.dE(this).I("cI<1>"))},
gip:function(a){var s=this,r=H.dE(s)
return H.oa(s.ga3(s),new H.is(s),r.c,r.Q[1])},
cd:function(a,b){var s=this.b
if(s==null)return!1
return this.eU(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bo(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bo(p,b)
q=r==null?n:r.b
return q}else return o.hN(b)},
hN:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.d7(p,q.e3(a))
r=q.e4(s,a)
if(r<0)return null
return s[r].b},
l:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.d0(s==null?q.b=q.c_():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.d0(r==null?q.c=q.c_():r,b,c)}else q.hO(b,c)},
hO:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.c_()
s=p.e3(a)
r=p.d7(o,s)
if(r==null)p.c2(o,s,[p.c0(a,b)])
else{q=p.e4(r,a)
if(q>=0)r[q].b=b
else r.push(p.c0(a,b))}},
F:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.ba(s))
r=r.c}},
d0:function(a,b,c){var s=this.bo(a,b)
if(s==null)this.c2(a,b,this.c0(b,c))
else s.b=c},
f4:function(){this.r=this.r+1&67108863},
c0:function(a,b){var s,r=this,q=new H.iu(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.f4()
return q},
e3:function(a){return J.ah(a)&0x3ffffff},
e4:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.N(a[r].a,b))return r
return-1},
i:function(a){return P.ld(this)},
bo:function(a,b){return a[b]},
d7:function(a,b){return a[b]},
c2:function(a,b,c){a[b]=c},
eY:function(a,b){delete a[b]},
eU:function(a,b){return this.bo(a,b)!=null},
c_:function(){var s="<non-identifier-key>",r=Object.create(null)
this.c2(r,s,r)
this.eY(r,s)
return r}}
H.is.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.dE(this.a).I("2(1)")}}
H.iu.prototype={}
H.cI.prototype={
gm:function(a){return this.a.a},
gM:function(a){var s=this.a,r=new H.eo(s,s.r)
r.c=s.e
return r}}
H.eo.prototype={
gA:function(a){return this.d},
v:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.ba(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.ky.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.kz.prototype={
$2:function(a,b){return this.a(a,b)}}
H.kA.prototype={
$1:function(a){return this.a(a)}}
H.ei.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imh:1}
H.cT.prototype={$icT:1}
H.W.prototype={$iW:1}
H.c0.prototype={
gm:function(a){return a.length},
$iA:1}
H.bE.prototype={
h:function(a,b){H.b3(b,a,a.length)
return a[b]},
l:function(a,b,c){H.b3(b,a,a.length)
a[b]=c},
$il:1,
$ih:1,
$in:1}
H.cU.prototype={
l:function(a,b,c){H.b3(b,a,a.length)
a[b]=c},
$il:1,
$ih:1,
$in:1}
H.ev.prototype={
h:function(a,b){H.b3(b,a,a.length)
return a[b]}}
H.ew.prototype={
h:function(a,b){H.b3(b,a,a.length)
return a[b]}}
H.ex.prototype={
h:function(a,b){H.b3(b,a,a.length)
return a[b]}}
H.ey.prototype={
h:function(a,b){H.b3(b,a,a.length)
return a[b]}}
H.ez.prototype={
h:function(a,b){H.b3(b,a,a.length)
return a[b]}}
H.cV.prototype={
gm:function(a){return a.length},
h:function(a,b){H.b3(b,a,a.length)
return a[b]}}
H.c1.prototype={
gm:function(a){return a.length},
h:function(a,b){H.b3(b,a,a.length)
return a[b]},
$ic1:1,
$ibk:1}
H.dj.prototype={}
H.dk.prototype={}
H.dl.prototype={}
H.dm.prototype={}
H.au.prototype={
I:function(a){return H.hx(v.typeUniverse,this,a)},
b6:function(a){return H.p3(v.typeUniverse,this,a)}}
H.fW.prototype={}
H.fR.prototype={
i:function(a){return this.a}}
H.dw.prototype={}
P.jV.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:17}
P.jU.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.jW.prototype={
$0:function(){this.a.$0()}}
P.jX.prototype={
$0:function(){this.a.$0()}}
P.dv.prototype={
eH:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ci(new P.kd(this,b),0),a)
else throw H.c(P.B("`setTimeout()` not found."))},
eI:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ci(new P.kc(this,a,Date.now(),b),0),a)
else throw H.c(P.B("Periodic timer."))},
$id1:1}
P.kd.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.kc.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.eA(s,o)}q.c=p
r.d.$1(q)}}
P.cd.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.bI.prototype={
gA:function(a){var s=this.c
if(s==null)return this.b
return s.gA(s)},
v:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.v())return!0
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
if(o instanceof P.bI){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.ds.prototype={
gM:function(a){return new P.bI(this.a())}}
P.fE.prototype={}
P.d_.prototype={}
P.f4.prototype={}
P.d1.prototype={}
P.kk.prototype={}
P.ku.prototype={
$0:function(){var s=H.c(this.a)
s.stack=J.a5(this.b)
throw s}}
P.k1.prototype={
ie:function(a){var s,r,q,p=null
try{if(C.f===$.aK){a.$0()
return}P.q_(p,p,this,a)}catch(q){s=H.ag(q)
r=H.lD(q)
P.n0(p,p,this,s,r)}},
ig:function(a,b){var s,r,q,p=null
try{if(C.f===$.aK){a.$1(b)
return}P.q0(p,p,this,a,b)}catch(q){s=H.ag(q)
r=H.lD(q)
P.n0(p,p,this,s,r)}},
ih:function(a,b){return this.ig(a,b,t.z)},
ht:function(a){return new P.k2(this,a)},
dA:function(a,b){return new P.k3(this,a,b)}}
P.k2.prototype={
$0:function(){return this.a.ie(this.b)}}
P.k3.prototype={
$1:function(a){return this.a.ih(this.b,a)},
$S:function(){return this.c.I("~(0)")}}
P.df.prototype={
gM:function(a){var s=new P.dg(this,this.r)
s.c=this.e
return s},
gm:function(a){return this.a},
B:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.eR(b)
return r}},
eR:function(a){var s=this.d
if(s==null)return!1
return this.bR(s[this.bN(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.d1(s==null?q.b=P.lm():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.d1(r==null?q.c=P.lm():r,b)}else return q.eL(0,b)},
eL:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.lm()
s=q.bN(b)
r=p[s]
if(r==null)p[s]=[q.bM(b)]
else{if(q.bR(r,b)>=0)return!1
r.push(q.bM(b))}return!0},
U:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.h2(this.c,b)
else return this.h1(0,b)},
h1:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bN(b)
r=n[s]
q=o.bR(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dn(p)
return!0},
d1:function(a,b){if(a[b]!=null)return!1
a[b]=this.bM(b)
return!0},
h2:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.dn(s)
delete a[b]
return!0},
d2:function(){this.r=1073741823&this.r+1},
bM:function(a){var s,r=this,q=new P.k0(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.d2()
return q},
dn:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.d2()},
bN:function(a){return J.ah(a)&1073741823},
bR:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.N(a[r].a,b))return r
return-1}}
P.k0.prototype={}
P.dg.prototype={
gA:function(a){return this.d},
v:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.ba(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cD.prototype={}
P.iv.prototype={
$2:function(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:3}
P.cK.prototype={$il:1,$ih:1,$in:1}
P.i.prototype={
gM:function(a){return new H.be(a,this.gm(a))},
G:function(a,b){return this.h(a,b)},
gbv:function(a){return this.gm(a)===0},
il:function(a,b){var s,r,q,p,o=this
if(o.gbv(a)){s=J.l6(0,H.bL(a).I("i.E"))
return s}r=o.h(a,0)
q=P.iw(o.gm(a),r,!0,H.bL(a).I("i.E"))
p=1
while(!0){s=o.gm(a)
if(typeof s!=="number")return H.v(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s;++p}return q},
ik:function(a){return this.il(a,!0)},
hG:function(a,b,c,d){var s
P.bi(b,c,this.gm(a))
for(s=b;s<c;++s)this.l(a,s,d)},
i:function(a){return P.l4(a,"[","]")}}
P.cN.prototype={}
P.iz.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.f(a)
r.a=s+": "
r.a+=H.f(b)},
$S:18}
P.U.prototype={
F:function(a,b){var s,r
for(s=J.b6(this.ga3(a));s.v();){r=s.gA(s)
b.$2(r,this.h(a,r))}},
gm:function(a){return J.aN(this.ga3(a))},
i:function(a){return P.ld(a)},
$iG:1}
P.hy.prototype={
l:function(a,b,c){throw H.c(P.B("Cannot modify unmodifiable map"))}}
P.cO.prototype={
h:function(a,b){return J.cm(this.a,b)},
l:function(a,b,c){J.kT(this.a,b,c)},
F:function(a,b){J.kV(this.a,b)},
gm:function(a){return J.aN(this.a)},
i:function(a){return J.a5(this.a)},
$iG:1}
P.c9.prototype={}
P.dn.prototype={
ac:function(a,b){var s
for(s=J.b6(b);s.v();)this.n(0,s.gA(s))},
i:function(a){return P.l4(this,"{","}")},
G:function(a,b){var s,r,q,p="index"
P.nL(b,p)
P.mg(b,p)
for(s=P.oO(this,this.r),r=0;s.v();){q=s.d
if(b===r)return q;++r}throw H.c(P.O(b,this,p,null,r))},
$il:1,
$ih:1}
P.dh.prototype={}
P.dA.prototype={}
P.jI.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.ag(r)}return null}}
P.jJ.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.ag(r)}return null}}
P.hU.prototype={
hT:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a3=P.bi(a2,a3,a1.length)
if(a3==null)throw H.c(P.mf("Invalid range"))
s=$.nx()
for(r=a2,q=r,p=null,o=-1,n=-1,m=0;r<a3;r=l){l=r+1
k=C.a.D(a1,r)
if(k===37){j=l+2
if(j<=a3){i=H.kx(C.a.D(a1,l))
h=H.kx(C.a.D(a1,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.d(s,g)
f=s[g]
if(f>=0){g=C.a.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?null:p.a.length
if(e==null)e=0
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new P.Q("")
e=p}else e=p
d=e.a+=C.a.u(a1,q,r)
e.a=d+H.at(k)
q=l
continue}}throw H.c(P.a3("Invalid base64 data",a1,r))}if(p!=null){e=p.a+=C.a.u(a1,q,a3)
d=e.length
if(o>=0)P.lP(a1,n,a3,o,m,d)
else{c=C.c.bl(d-1,4)+1
if(c===1)throw H.c(P.a3(a,a1,a3))
for(;c<4;){e+="="
p.a=e;++c}}e=p.a
return C.a.b0(a1,a2,a3,e.charCodeAt(0)==0?e:e)}b=a3-a2
if(o>=0)P.lP(a1,n,a3,o,m,b)
else{c=C.c.bl(b,4)
if(c===1)throw H.c(P.a3(a,a1,a3))
if(c>1)a1=C.a.b0(a1,a3,a3,c===2?"==":"=")}return a1}}
P.hV.prototype={}
P.dY.prototype={}
P.e_.prototype={}
P.ia.prototype={}
P.ip.prototype={
i:function(a){return this.a}}
P.io.prototype={
eV:function(a,b,c){var s,r,q,p,o,n,m=null
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
default:n=m}if(n!=null){if(o==null)o=new P.Q("")
if(p>b)o.a+=C.a.u(a,b,p)
o.a+=n
b=p+1}}if(o==null)return m
if(c>b)o.a+=J.nJ(a,b,c)
s=o.a
return s.charCodeAt(0)==0?s:s}}
P.jG.prototype={
ghF:function(){return C.R}}
P.jK.prototype={
ce:function(a){var s,r,q,p=P.bi(0,null,a.length)
if(p==null)throw H.c(P.mf("Invalid range"))
s=p-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.ki(r)
if(q.f_(a,0,p)!==p){J.nE(a,p-1)
q.c5()}return new Uint8Array(r.subarray(0,H.pm(0,q.b,r.length)))}}
P.ki.prototype={
c5:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
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
return!0}else{n.c5()
return!1}},
f_:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.Y(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.D(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.hl(p,C.a.D(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.c5()}else if(p<=2047){o=l.b
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
P.jH.prototype={
ce:function(a){var s=this.a,r=P.oD(s,a,0,null)
if(r!=null)return r
return new P.kh(s).hw(a,0,null,!0)}}
P.kh.prototype={
hw:function(a,b,c,d){var s,r,q,p,o=this,n=P.bi(b,c,J.aN(a))
if(b===n)return""
s=P.pi(a,b,n)
if(typeof n!=="number")return n.a1()
n-=b
r=o.bO(s,0,n,!0)
q=o.b
if((q&1)!==0){p=P.pj(q)
o.b=0
throw H.c(P.a3(p,a,b+o.c))}return r},
bO:function(a,b,c,d){var s,r,q=this
if(typeof c!=="number")return c.a1()
if(c-b>1000){s=C.c.a7(b+c,2)
r=q.bO(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bO(a,s,c,d)}return q.hB(a,b,c,d)},
hB:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.Q(""),f=b+1,e=a.length
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
g.a+=H.at(a[l])}else g.a+=P.f6(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.at(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.az.prototype={}
P.aj.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.aj&&this.a===b.a&&!0},
aZ:function(a,b){return C.c.aZ(this.a,b.a)},
gP:function(a){var s=this.a
return(s^C.c.aV(s,30))&1073741823},
i:function(a){var s=this,r=P.nV(H.on(s)),q=P.e2(H.ol(s)),p=P.e2(H.oh(s)),o=P.e2(H.oi(s)),n=P.e2(H.ok(s)),m=P.e2(H.om(s)),l=P.nW(H.oj(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.Z.prototype={}
P.by.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.by&&this.a===b.a},
gP:function(a){return C.c.gP(this.a)},
aZ:function(a,b){return C.c.aZ(this.a,b.a)},
i:function(a){var s,r,q,p=new P.i7(),o=this.a
if(o<0)return"-"+new P.by(0-o).i(0)
s=p.$1(C.c.a7(o,6e7)%60)
r=p.$1(C.c.a7(o,1e6)%60)
q=new P.i6().$1(o%1e6)
return""+C.c.a7(o,36e8)+":"+H.f(s)+":"+H.f(r)+"."+H.f(q)}}
P.i6.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.i7.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.K.prototype={}
P.dQ.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.id(s)
return"Assertion failed"}}
P.eB.prototype={
i:function(a){return"Throw of null."}}
P.ai.prototype={
gbQ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbP:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbQ()+o+m
if(!q.a)return l
s=q.gbP()
r=P.id(q.b)
return l+s+": "+r}}
P.c4.prototype={
gbQ:function(){return"RangeError"},
gbP:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.f(q):""
else if(q==null)s=": Not greater than or equal to "+H.f(r)
else if(q>r)s=": Not in inclusive range "+H.f(r)+".."+H.f(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.f(r)
return s}}
P.ef.prototype={
gbQ:function(){return"RangeError"},
gbP:function(){var s,r=this.b
if(typeof r!=="number")return r.ak()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.f(s)},
gm:function(a){return this.f}}
P.fw.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ft.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.c6.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dZ.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.id(s)+"."}}
P.eE.prototype={
i:function(a){return"Out of Memory"},
$iK:1}
P.cZ.prototype={
i:function(a){return"Stack Overflow"},
$iK:1}
P.e0.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.fT.prototype={
i:function(a){return"Exception: "+this.a}}
P.ij.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.u(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.D(d,o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}f=r>1?f+(" (at line "+r+", character "+(e-q+1)+")\n"):f+(" (at character "+(e+1)+")\n")
m=d.length
for(o=e;o<m;++o){n=C.a.Y(d,o)
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
return f+j+h+i+"\n"+C.a.q(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.f(e)+")"):f}}
P.aC.prototype={}
P.k.prototype={}
P.h.prototype={
bH:function(a,b){return new H.b2(this,b,H.dE(this).I("b2<h.E>"))},
gm:function(a){var s,r=this.gM(this)
for(s=0;r.v();)++s
return s},
gaO:function(a){var s,r=this.gM(this)
if(!r.v())throw H.c(H.l5())
s=r.gA(r)
if(r.v())throw H.c(H.o0())
return s},
G:function(a,b){var s,r,q
P.mg(b,"index")
for(s=this.gM(this),r=0;s.v();){q=s.gA(s)
if(b===r)return q;++r}throw H.c(P.O(b,this,"index",null,r))},
i:function(a){return P.o_(this,"(",")")}}
P.eg.prototype={}
P.n.prototype={$il:1,$ih:1}
P.G.prototype={}
P.as.prototype={
gP:function(a){return P.M.prototype.gP.call(C.i,this)},
i:function(a){return"null"}}
P.R.prototype={}
P.M.prototype={constructor:P.M,$iM:1,
t:function(a,b){return this===b},
gP:function(a){return H.cY(this)},
i:function(a){return"Instance of '"+H.f(H.eN(this))+"'"},
toString:function(){return this.i(this)}}
P.y.prototype={}
P.Q.prototype={
gm:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jE.prototype={
$2:function(a,b){var s,r,q,p=J.dJ(b).e2(b,"=")
if(p===-1){if(b!=="")J.kT(a,P.lv(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.u(b,0,p)
r=C.a.al(b,p+1)
q=this.a
J.kT(a,P.lv(s,0,s.length,q,!0),P.lv(r,0,r.length,q,!0))}return a}}
P.jB.prototype={
$2:function(a,b){throw H.c(P.a3("Illegal IPv4 address, "+a,this.a,b))}}
P.jC.prototype={
$2:function(a,b){throw H.c(P.a3("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.jD.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.kB(C.a.u(this.b,a,b),16)
if(typeof s!=="number")return s.ak()
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s}}
P.bJ.prototype={
gc4:function(){var s,r,q,p=this,o=p.x
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
else o=H.q(H.la("Field '_text' has been assigned during initialization."))}return o},
gP:function(a){var s=this,r=s.z
if(r==null){r=C.a.gP(s.gc4())
if(s.z==null)s.z=r
else r=H.q(H.la("Field 'hashCode' has been assigned during initialization."))}return r},
gcH:function(){var s=this,r=s.Q
if(r==null){r=new P.c9(P.mu(s.gbi(s)),t.U)
if(s.Q==null)s.Q=r
else r=H.q(H.la("Field 'queryParameters' has been assigned during initialization."))}return r},
gel:function(){return this.b},
gcv:function(a){var s=this.c
if(s==null)return""
if(C.a.aa(s,"["))return C.a.u(s,1,s.length-1)
return s},
gbA:function(a){var s=this.d
return s==null?P.mR(this.a):s},
gbi:function(a){var s=this.f
return s==null?"":s},
gcu:function(){var s=this.r
return s==null?"":s},
ee:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.aa(s,"/"))s="/"+s
q=s
p=P.lt(null,0,0,b)
return new P.bJ(n,l,j,k,q,p,o.r)},
gdZ:function(){return this.c!=null},
ge1:function(){return this.f!=null},
ge_:function(){return this.r!=null},
i:function(a){return this.gc4()},
t:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return t.R.b(b)&&s.a===b.gbI()&&s.c!=null===b.gdZ()&&s.b===b.gel()&&s.gcv(s)===b.gcv(b)&&s.gbA(s)===b.gbA(b)&&s.e===b.gec(b)&&s.f!=null===b.ge1()&&s.gbi(s)===b.gbi(b)&&s.r!=null===b.ge_()&&s.gcu()===b.gcu()},
$ifx:1,
gbI:function(){return this.a},
gec:function(a){return this.e}}
P.kf.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=H.f(P.kg(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=H.f(P.kg(C.h,b,C.e,!0))}}}
P.ke.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.b6(b),r=this.a;s.v();)r.$2(a,s.gA(s))}}
P.jA.prototype={
gek:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.d(m,0)
s=o.a
m=m[0]+1
r=C.a.bu(s,"?",m)
q=s.length
if(r>=0){p=P.dB(s,r+1,q,C.l,!1)
q=r}else p=n
m=o.c=new P.fK("data","",n,n,P.dB(s,m,q,C.A,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.kp.prototype={
$1:function(a){return new Uint8Array(96)}}
P.ko.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.d(s,a)
s=s[a]
J.nF(s,0,96,b)
return s},
$S:19}
P.kq.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=b.length,r=a.length,q=0;q<s;++q){p=C.a.D(b,q)^96
if(p>=r)return H.d(a,p)
a[p]=c}}}
P.kr.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=C.a.D(b,0),r=C.a.D(b,1),q=a.length;s<=r;++s){p=(s^96)>>>0
if(p>=q)return H.d(a,p)
a[p]=c}}}
P.hd.prototype={
gdZ:function(){return this.c>0},
ge0:function(){return this.c>0&&this.d+1<this.e},
ge1:function(){return this.f<this.r},
ge_:function(){return this.r<this.a.length},
gd8:function(){return this.b===4&&C.a.aa(this.a,"http")},
gd9:function(){return this.b===5&&C.a.aa(this.a,"https")},
gbI:function(){var s=this.x
return s==null?this.x=this.eS():s},
eS:function(){var s=this,r=s.b
if(r<=0)return""
if(s.gd8())return"http"
if(s.gd9())return"https"
if(r===4&&C.a.aa(s.a,"file"))return"file"
if(r===7&&C.a.aa(s.a,"package"))return"package"
return C.a.u(s.a,0,r)},
gel:function(){var s=this.c,r=this.b+3
return s>r?C.a.u(this.a,r,s-1):""},
gcv:function(a){var s=this.c
return s>0?C.a.u(this.a,s,this.d):""},
gbA:function(a){var s=this
if(s.ge0())return P.kB(C.a.u(s.a,s.d+1,s.e),null)
if(s.gd8())return 80
if(s.gd9())return 443
return 0},
gec:function(a){return C.a.u(this.a,this.e,this.f)},
gbi:function(a){var s=this.f,r=this.r
return s<r?C.a.u(this.a,s+1,r):""},
gcu:function(){var s=this.r,r=this.a
return s<r.length?C.a.al(r,s+1):""},
gcH:function(){var s=this
if(s.f>=s.r)return C.a0
return new P.c9(P.mu(s.gbi(s)),t.U)},
ee:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbI(),k=l==="file",j=n.c,i=j>0?C.a.u(n.a,n.b+3,j):"",h=n.ge0()?n.gbA(n):m
j=n.c
if(j>0)s=C.a.u(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.u(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.aa(r,"/"))r="/"+r
p=P.lt(m,0,0,b)
q=n.r
o=q<j.length?C.a.al(j,q+1):m
return new P.bJ(l,i,s,h,r,p,o)},
gP:function(a){var s=this.y
return s==null?this.y=C.a.gP(this.a):s},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifx:1}
P.fK.prototype={}
W.r.prototype={}
W.hO.prototype={
gm:function(a){return a.length}}
W.dO.prototype={
i:function(a){return String(a)}}
W.dP.prototype={
i:function(a){return String(a)}}
W.bP.prototype={$ibP:1}
W.bt.prototype={$ibt:1}
W.bu.prototype={$ibu:1}
W.bw.prototype={
cM:function(a,b,c){if(c!=null)return a.getContext(b,P.qe(c))
return a.getContext(b)},
en:function(a,b){return this.cM(a,b,null)},
$ibw:1}
W.aA.prototype={
gm:function(a){return a.length}}
W.i_.prototype={
gm:function(a){return a.length}}
W.I.prototype={$iI:1}
W.cs.prototype={
gm:function(a){return a.length}}
W.i0.prototype={}
W.aq.prototype={}
W.aP.prototype={}
W.i1.prototype={
gm:function(a){return a.length}}
W.i2.prototype={
gm:function(a){return a.length}}
W.i3.prototype={
gm:function(a){return a.length}}
W.bb.prototype={$ibb:1}
W.i4.prototype={
i:function(a){return String(a)}}
W.ct.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.cu.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gax(a))+" x "+H.f(this.gas(a))},
t:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.aL(b)
s=a.left==s.gbx(b)&&a.top==s.gbE(b)&&this.gax(a)==s.gax(b)&&this.gas(a)==s.gas(b)}else s=!1
return s},
gP:function(a){return W.mI(J.ah(a.left),J.ah(a.top),J.ah(this.gax(a)),J.ah(this.gas(a)))},
gdB:function(a){return a.bottom},
gas:function(a){return a.height},
gbx:function(a){return a.left},
gbD:function(a){return a.right},
gbE:function(a){return a.top},
gax:function(a){return a.width},
$iaa:1}
W.e5.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.i5.prototype={
gm:function(a){return a.length}}
W.fH.prototype={
gbv:function(a){return this.a.firstElementChild==null},
gm:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
l:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gM:function(a){var s=this.ik(this)
return new J.a6(s,s.length)}}
W.D.prototype={
ghs:function(a){return new W.fP(a)},
gdC:function(a){return new W.fH(a,a.children)},
gdD:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.ak()
if(q<0)q=-q*0
if(typeof p!=="number")return p.ak()
if(p<0)p=-p*0
return new P.aa(s,r,q,p,t.I)},
i:function(a){return a.localName},
ar:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.lX
if(s==null){s=H.b([],t.o)
r=new W.cX(s)
s.push(W.mG(null))
s.push(W.mM())
$.lX=r
d=r}else d=s
s=$.lW
if(s==null){s=new W.hz(d)
$.lW=s
c=s}else{s.a=d
c=s}}if($.bc==null){s=document
r=s.implementation.createHTMLDocument("")
$.bc=r
$.l2=r.createRange()
r=$.bc.createElement("base")
t.D.a(r)
r.href=s.baseURI
$.bc.head.appendChild(r)}s=$.bc
if(s.body==null){r=s.createElement("body")
s.body=t.Y.a(r)}s=$.bc
if(t.Y.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.bc.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.b.B(C.Z,a.tagName)){$.l2.selectNodeContents(q)
s=$.l2
p=s.createContextualFragment(b)}else{q.innerHTML=b
p=$.bc.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.bc.body)J.lL(q)
c.cN(p)
document.adoptNode(p)
return p},
hz:function(a,b,c){return this.ar(a,b,c,null)},
ep:function(a,b){a.textContent=null
a.appendChild(this.ar(a,b,null,null))},
geg:function(a){return a.tagName},
$iD:1}
W.i8.prototype={
$1:function(a){return t.h.b(a)}}
W.j.prototype={$ij:1}
W.e.prototype={
hn:function(a,b,c,d){if(c!=null)this.eM(a,b,c,!1)},
eM:function(a,b,c,d){return a.addEventListener(b,H.ci(c,1),!1)},
$ie:1}
W.ak.prototype={$iak:1}
W.bS.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1,
$ibS:1}
W.e7.prototype={
gm:function(a){return a.length}}
W.e9.prototype={
gm:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.im.prototype={
gm:function(a){return a.length}}
W.bA.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.bB.prototype={
gdF:function(a){return a.data},
$ibB:1}
W.bU.prototype={$ibU:1}
W.bW.prototype={$ibW:1}
W.bD.prototype={$ibD:1}
W.ix.prototype={
i:function(a){return String(a)}}
W.iP.prototype={
gm:function(a){return a.length}}
W.bY.prototype={$ibY:1}
W.es.prototype={
h:function(a,b){return P.bp(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bp(s.value[1]))}},
ga3:function(a){var s=H.b([],t.s)
this.F(a,new W.iQ(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.B("Not supported"))},
$iG:1}
W.iQ.prototype={
$2:function(a,b){return this.a.push(a)}}
W.et.prototype={
h:function(a,b){return P.bp(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bp(s.value[1]))}},
ga3:function(a){var s=H.b([],t.s)
this.F(a,new W.iR(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.B("Not supported"))},
$iG:1}
W.iR.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aF.prototype={$iaF:1}
W.eu.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.al.prototype={$ial:1}
W.a2.prototype={
gaO:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.lg("No elements"))
if(r>1)throw H.c(P.lg("More than one element"))
s=s.firstChild
s.toString
return s},
ac:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q)}return},
l:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b])},
gM:function(a){var s=this.a.childNodes
return new W.cB(s,s.length)},
gm:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.w.prototype={
i8:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
ib:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.nC(s,b,a)}catch(q){H.ag(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.ew(a):s},
h3:function(a,b,c){return a.replaceChild(b,c)},
$iw:1}
W.cW.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.aG.prototype={
gm:function(a){return a.length},
$iaG:1}
W.eI.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.eR.prototype={
h:function(a,b){return P.bp(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bp(s.value[1]))}},
ga3:function(a){var s=H.b([],t.s)
this.F(a,new W.j3(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.B("Not supported"))},
$iG:1}
W.j3.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eT.prototype={
gm:function(a){return a.length}}
W.av.prototype={$iav:1}
W.eX.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.aH.prototype={$iaH:1}
W.eY.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.aI.prototype={
gm:function(a){return a.length},
$iaI:1}
W.f3.prototype={
h:function(a,b){return a.getItem(H.lw(b))},
l:function(a,b,c){a.setItem(b,c)},
F:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga3:function(a){var s=H.b([],t.s)
this.F(a,new W.jd(s))
return s},
gm:function(a){return a.length},
$iG:1}
W.jd.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aw.prototype={$iaw:1}
W.bj.prototype={$ibj:1}
W.d0.prototype={
ar:function(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.bJ(a,b,c,d)
s=W.nX("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
s.toString
new W.a2(r).ac(0,new W.a2(s))
return r}}
W.f7.prototype={
ar:function(a,b,c,d){var s,r,q,p
if("createContextualFragment" in window.Range.prototype)return this.bJ(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.E.ar(s.createElement("table"),b,c,d)
s.toString
s=new W.a2(s)
q=s.gaO(s)
q.toString
s=new W.a2(q)
p=s.gaO(s)
r.toString
p.toString
new W.a2(r).ac(0,new W.a2(p))
return r}}
W.f8.prototype={
ar:function(a,b,c,d){var s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bJ(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.E.ar(s.createElement("table"),b,c,d)
s.toString
s=new W.a2(s)
q=s.gaO(s)
r.toString
q.toString
new W.a2(r).ac(0,new W.a2(q))
return r}}
W.c7.prototype={$ic7:1}
W.ax.prototype={$iax:1}
W.ae.prototype={$iae:1}
W.fb.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.fc.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.jm.prototype={
gm:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.bG.prototype={$ibG:1}
W.fh.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.jq.prototype={
gm:function(a){return a.length}}
W.b0.prototype={}
W.jF.prototype={
i:function(a){return String(a)}}
W.fB.prototype={
gm:function(a){return a.length}}
W.bl.prototype={
ghD:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.B("deltaY is not supported"))},
ghC:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.B("deltaX is not supported"))},
$ibl:1}
W.ca.prototype={
h4:function(a,b){return a.requestAnimationFrame(H.ci(b,1))},
eZ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cb.prototype={$icb:1}
W.fI.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.dd.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
t:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.aL(b)
s=a.left==s.gbx(b)&&a.top==s.gbE(b)&&a.width==s.gax(b)&&a.height==s.gas(b)}else s=!1
return s},
gP:function(a){return W.mI(J.ah(a.left),J.ah(a.top),J.ah(a.width),J.ah(a.height))},
gas:function(a){return a.height},
gax:function(a){return a.width}}
W.fX.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.di.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.hg.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.hn.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.fF.prototype={
F:function(a,b){var s,r,q,p,o
for(s=this.ga3(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
b.$2(o,q.getAttribute(o))}},
ga3:function(a){var s,r,q,p,o=this.a.attributes,n=H.b([],t.s)
for(s=o.length,r=t.gH,q=0;q<s;++q){if(q>=o.length)return H.d(o,q)
p=r.a(o[q])
if(p.namespaceURI==null)n.push(p.name)}return n}}
W.fP.prototype={
h:function(a,b){return this.a.getAttribute(H.lw(b))},
l:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.ga3(this).length}}
W.l3.prototype={}
W.fS.prototype={
hk:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.nD(s,this.c,r,!1)}}}
W.jY.prototype={
$1:function(a){return this.a.$1(a)}}
W.ll.prototype={}
W.cc.prototype={
eF:function(a){var s
if($.de.gbv($.de)){for(s=0;s<262;++s)$.de.l(0,C.Y[s],W.qn())
for(s=0;s<12;++s)$.de.l(0,C.o[s],W.qo())}},
aW:function(a){return $.ny().B(0,W.cw(a))},
aC:function(a,b,c){var s=$.de.h(0,H.f(W.cw(a))+"::"+b)
if(s==null)s=$.de.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iam:1}
W.L.prototype={
gM:function(a){return new W.cB(a,this.gm(a))}}
W.cX.prototype={
aW:function(a){return C.b.du(this.a,new W.iU(a))},
aC:function(a,b,c){return C.b.du(this.a,new W.iT(a,b,c))},
$iam:1}
W.iU.prototype={
$1:function(a){return a.aW(this.a)}}
W.iT.prototype={
$1:function(a){return a.aC(this.a,this.b,this.c)}}
W.dp.prototype={
eG:function(a,b,c,d){var s,r,q
this.a.ac(0,c)
s=b.bH(0,new W.k5())
r=b.bH(0,new W.k6())
this.b.ac(0,s)
q=this.c
q.ac(0,C.x)
q.ac(0,r)},
aW:function(a){return this.a.B(0,W.cw(a))},
aC:function(a,b,c){var s=this,r=W.cw(a),q=s.c
if(q.B(0,H.f(r)+"::"+b))return s.d.hq(c)
else if(q.B(0,"*::"+b))return s.d.hq(c)
else{q=s.b
if(q.B(0,H.f(r)+"::"+b))return!0
else if(q.B(0,"*::"+b))return!0
else if(q.B(0,H.f(r)+"::*"))return!0
else if(q.B(0,"*::*"))return!0}return!1},
$iam:1}
W.k5.prototype={
$1:function(a){return!C.b.B(C.o,a)}}
W.k6.prototype={
$1:function(a){return C.b.B(C.o,a)}}
W.hp.prototype={
aC:function(a,b,c){if(this.ez(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.B(0,b)
return!1}}
W.kb.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)}}
W.ho.prototype={
aW:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cw(a)==="foreignObject")return!1
if(s)return!0
return!1},
aC:function(a,b,c){if(b==="is"||C.a.aa(b,"on"))return!1
return this.aW(a)},
$iam:1}
W.cB.prototype={
v:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.cm(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gA:function(a){return this.d}}
W.am.prototype={}
W.k4.prototype={}
W.hz.prototype={
cN:function(a){var s=this,r=new W.kj(s)
s.b=!1
r.$2(a,null)
for(;s.b;){s.b=!1
r.$2(a,null)}},
b9:function(a,b){var s=this.b=!0
if(b!=null?b!==a.parentNode:s)J.lL(a)
else b.removeChild(a)},
h8:function(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.nG(a)
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
n=s?!0:!(a.attributes instanceof NamedNodeMap)}catch(p){H.ag(p)}r="element unprintable"
try{r=J.a5(a)}catch(p){H.ag(p)}try{q=W.cw(a)
this.h7(a,b,n,r,q,m,l)}catch(p){if(H.ag(p) instanceof P.ai)throw p
else{this.b9(a,b)
window
o="Removing corrupted element "+H.f(r)
if(typeof console!="undefined")window.console.warn(o)}}},
h7:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.b9(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.aW(a)){m.b9(a,b)
window
s="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.aC(a,"is",g)){m.b9(a,b)
window
s="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}s=f.ga3(f)
r=H.b(s.slice(0),H.km(s).I("x<1>"))
for(q=f.ga3(f).length-1,s=f.a;q>=0;--q){if(q>=r.length)return H.d(r,q)
p=r[q]
o=m.a
n=J.nK(p)
H.lw(p)
if(!o.aC(a,n,s.getAttribute(p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.aW.b(a))m.cN(a.content)}}
W.kj.prototype={
$2:function(a,b){var s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.h8(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.b9(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){q=r.nextSibling
p=s
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.lg("Corrupt HTML")
throw H.c(q)}}catch(o){H.ag(o)
q=s
n.b=!0
p=q.parentNode
p=a==null?p!=null:a!==p
if(p){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}}}
W.fJ.prototype={}
W.fL.prototype={}
W.fM.prototype={}
W.fN.prototype={}
W.fO.prototype={}
W.fU.prototype={}
W.fV.prototype={}
W.fY.prototype={}
W.fZ.prototype={}
W.h1.prototype={}
W.h2.prototype={}
W.h3.prototype={}
W.h4.prototype={}
W.h5.prototype={}
W.h6.prototype={}
W.h9.prototype={}
W.ha.prototype={}
W.hc.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.he.prototype={}
W.hf.prototype={}
W.hk.prototype={}
W.hq.prototype={}
W.hr.prototype={}
W.dt.prototype={}
W.du.prototype={}
W.hs.prototype={}
W.ht.prototype={}
W.hA.prototype={}
W.hB.prototype={}
W.hC.prototype={}
W.hD.prototype={}
W.hE.prototype={}
W.hF.prototype={}
W.hG.prototype={}
W.hH.prototype={}
W.hI.prototype={}
W.hJ.prototype={}
P.k7.prototype={
cs:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bG:function(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(H.ly(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.aj)return new Date(a.a)
if(t.fv.b(a))throw H.c(P.jz("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.G.b(a))return a
if(t.bX.b(a))return a
if(t.v.b(a))return a
if(t.bZ.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.eO.b(a)){s=o.cs(a)
r=o.b
q=r.length
if(s>=q)return H.d(r,s)
p=n.a=r[s]
if(p!=null)return p
p={}
n.a=p
if(s>=q)return H.d(r,s)
r[s]=p
J.kV(a,new P.k9(n,o))
return n.a}if(t.aH.b(a)){s=o.cs(a)
n=o.b
if(s>=n.length)return H.d(n,s)
p=n[s]
if(p!=null)return p
return o.hy(a,s)}if(t.eH.b(a)){s=o.cs(a)
r=o.b
q=r.length
if(s>=q)return H.d(r,s)
p=n.b=r[s]
if(p!=null)return p
p={}
n.b=p
if(s>=q)return H.d(r,s)
r[s]=p
o.hL(a,new P.ka(n,o))
return n.b}throw H.c(P.jz("structured clone of other type"))},
hy:function(a,b){var s,r=J.b4(a),q=r.gm(a),p=new Array(q),o=this.b
if(b>=o.length)return H.d(o,b)
o[b]=p
if(typeof q!=="number")return H.v(q)
s=0
for(;s<q;++s){o=this.bG(r.h(a,s))
if(s>=p.length)return H.d(p,s)
p[s]=o}return p}}
P.k9.prototype={
$2:function(a,b){this.a.a[a]=this.b.bG(b)},
$S:3}
P.ka.prototype={
$2:function(a,b){this.a.b[a]=this.b.bG(b)},
$S:3}
P.dx.prototype={$ibB:1,
gdF:function(a){return this.a}}
P.kv.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.k8.prototype={
hL:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<r;++q){p=s[q]
b.$2(p,a[p])}}}
P.e8.prototype={
gbp:function(){var s=this.b,r=H.dE(s)
return new H.aU(new H.b2(s,new P.ih(),r.I("b2<i.E>")),new P.ii(),r.I("aU<i.E,D>"))},
l:function(a,b,c){var s=this.gbp()
J.nI(s.b.$1(J.hN(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.aN(this.gbp().a)},
h:function(a,b){var s=this.gbp()
return s.b.$1(J.hN(s.a,b))},
gM:function(a){var s=P.lc(this.gbp(),!1,t.h)
return new J.a6(s,s.length)}}
P.ih.prototype={
$1:function(a){return t.h.b(a)}}
P.ii.prototype={
$1:function(a){return t.h.a(a)}}
P.hb.prototype={
gbD:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.v(r)
return this.$ti.c.a(s+r)},
gdB:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.v(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.f(s.a)+", "+H.f(s.b)+") "+H.f(s.c)+" x "+H.f(s.d)},
t:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.I.b(b)){s=n.a
r=J.aL(b)
if(s==r.gbx(b)){q=n.b
if(q==r.gbE(b)){p=n.c
if(typeof s!=="number")return s.w()
if(typeof p!=="number")return H.v(p)
o=n.$ti.c
if(o.a(s+p)===r.gbD(b)){s=n.d
if(typeof q!=="number")return q.w()
if(typeof s!=="number")return H.v(s)
r=o.a(q+s)===r.gdB(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gP:function(a){var s,r=this,q=r.a,p=J.ah(q),o=r.b,n=J.ah(o),m=r.c
if(typeof q!=="number")return q.w()
if(typeof m!=="number")return H.v(m)
s=r.$ti.c
m=C.c.gP(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.w()
if(typeof q!=="number")return H.v(q)
q=C.c.gP(s.a(o+q))
return P.oN(P.k_(P.k_(P.k_(P.k_(0,p),n),m),q))}}
P.aa.prototype={
gbx:function(a){return this.a},
gbE:function(a){return this.b},
gax:function(a){return this.c},
gas:function(a){return this.d}}
P.aT.prototype={$iaT:1}
P.em.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.aX.prototype={$iaX:1}
P.eC.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.iW.prototype={
gm:function(a){return a.length}}
P.c5.prototype={$ic5:1}
P.f5.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.m.prototype={
gdC:function(a){return new P.e8(a,new W.a2(a))},
ar:function(a,b,c,d){var s,r,q,p,o,n=H.b([],t.o)
n.push(W.mG(null))
n.push(W.mM())
n.push(new W.ho())
c=new W.hz(new W.cX(n))
s='<svg version="1.1">'+b+"</svg>"
n=document
r=n.body
r.toString
q=C.r.hz(r,s,c)
p=n.createDocumentFragment()
q.toString
n=new W.a2(q)
o=n.gaO(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
$im:1}
P.aZ.prototype={$iaZ:1}
P.fi.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.h_.prototype={}
P.h0.prototype={}
P.h7.prototype={}
P.h8.prototype={}
P.hl.prototype={}
P.hm.prototype={}
P.hu.prototype={}
P.hv.prototype={}
P.bk.prototype={$il:1,$ih:1,$in:1}
P.hR.prototype={
gm:function(a){return a.length}}
P.dS.prototype={
h:function(a,b){return P.bp(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bp(s.value[1]))}},
ga3:function(a){var s=H.b([],t.s)
this.F(a,new P.hS(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.B("Not supported"))},
$iG:1}
P.hS.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dT.prototype={
gm:function(a){return a.length}}
P.b8.prototype={}
P.eD.prototype={
gm:function(a){return a.length}}
P.fG.prototype={}
P.eQ.prototype={
ei:function(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&H.bK(g)){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}if(t.v.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,P.qf(g))
return}if(t.fS.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.bO("Incorrect number or type of arguments"))},
eh:function(a,b,c,d,e,f,g){return this.ei(a,b,c,d,e,f,g,null,null,null)}}
P.f0.prototype={
gm:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
s=P.bp(a.item(b))
s.toString
return s},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.hh.prototype={}
P.hi.prototype={}
K.b7.prototype={
aK:function(a,b){return!0},
i:function(a){return"all"}}
K.ed.prototype={
aK:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)if(s[q].aK(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.iA.prototype={}
K.ac.prototype={
aK:function(a,b){return!this.ev(0,b)},
i:function(a){return"!["+this.cT(0)+"]"}}
K.iZ.prototype={
aK:function(a,b){if(typeof b!=="number")return H.v(b)
return this.a<=b&&this.b>=b},
i:function(a){var s=H.at(this.a),r=H.at(this.b)
return s+".."+r}}
K.j4.prototype={
eD:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.u("May not create a Set with zero characters."))
s=new H.C(t.E)
for(r=new H.be(a,a.gm(a));r.v();){q=r.d
s.l(0,q,!0)}p=P.lc(s.ga3(s),!0,t.e)
C.b.eu(p)
this.a=p},
aK:function(a,b){return C.b.B(this.a,b)},
i:function(a){return P.f6(this.a,0,null)}}
L.f1.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.fj(this.a.k(0,b))
p.a=H.b([],t.B)
p.c=!1
this.c.push(p)
return p},
hH:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.aK(0,a))return p}return null},
i:function(a){return this.b},
dm:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.B(0,l))m+=" (consume)"
for(l=n.d.c,l=l.ga3(l),l=l.gM(l);l.v();){r=l.gA(l)
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.f(r)+" => ["+H.f(q)+"]")
m=s.c.B(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.o)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.ff.prototype={
i:function(a){var s=H.lI(this.b,"\n","\\n"),r=H.lI(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fg.prototype={
aM:function(a,b,c){var s,r,q
for(s=c.length,r=0;r<c.length;c.length===s||(0,H.o)(c),++r){q=c[r]
this.c.l(0,q,b)}},
i:function(a){return this.b}}
L.jn.prototype={
k:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.f1(this,b)
s.c=H.b([],t.br)
this.a.l(0,b,s)}return s},
N:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.fg(a)
s.c=new H.C(t.dO)
this.b.l(0,a,s)}return s},
cK:function(a){return this.io(a)},
io:function(a){var s=this
return P.pC(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$cK(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.V
b=H.b([],c)
a0=H.b([],c)
a1=H.b([],c)
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a1.length!==0)j=C.b.i9(a1,0)
else{if(!r.v()){q=3
break}i=r.d
j=i}a0.push(j);++m
h=d.hH(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.f6(a0,0,null)
throw H.c(P.u("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!a0.fixed$length)H.q(P.B("removeRange"))
P.bi(0,k,a0.length)
a0.splice(0,k-0)
C.b.ac(a1,a0)
a0=H.b([],c)
b=H.b([],c)
d=s.d
q=!s.c.B(0,n.a)?7:8
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
if(d.d!=null){g=P.f6(b,0,null)
f=d.d
e=f.c.h(0,g)
n=new L.ff(e==null?f.b:e,g,m)
k=a0.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.B(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.oL()
case 1:return P.oM(o)}}},t.eB)},
i:function(a){var s,r=new P.Q(""),q=this.d
if(q!=null)r.a=q.dm()+"\n"
for(q=this.a,q=q.gip(q),q=q.gM(q);q.v();){s=q.gA(q)
if(s!=this.d)r.a+=s.dm()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.fj.prototype={
i:function(a){return this.b.b+": "+this.cT(0)}}
O.a7.prototype={
bn:function(a){this.a=H.b([],a.I("x<0*>"))
this.c=this.b=null},
cO:function(a,b,c){this.b=b
this.c=a},
b3:function(a,b){return this.cO(a,null,b)},
dd:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
cW:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gm:function(a){return this.a.length},
gM:function(a){var s=this.a
return new J.a6(s,s.length)},
G:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.dE(q).I("x<a7.T*>")
if(q.dd(H.b([b],p))){s=q.a
r=s.length
s.push(b)
q.cW(r,H.b([b],p))}},
ac:function(a,b){var s,r
if(this.dd(b)){s=this.a
r=s.length
C.b.ac(s,b)
this.cW(r,b)}},
$ih:1}
O.cS.prototype={
gm:function(a){return this.a.length},
gp:function(){var s=this.b
return s==null?this.b=D.F():s},
aP:function(){var s=this.b
if(s!=null)s.C(null)},
ga4:function(a){var s=this.a
if(s.length>0)return C.b.gaD(s)
else return V.bX()},
bC:function(a){var s=this.a
if(a==null)s.push(V.bX())
else s.push(a)
this.aP()},
aL:function(){var s=this.a
if(s.length>0){s.pop()
this.aP()}}}
E.hW.prototype={}
E.bz.prototype={
scQ:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gp().U(0,q.ge9())
s=q.c
if(s!=null)s.gp().n(0,q.ge9())
r=new D.z("shape",p,q.c)
r.b=!0
q.bz(r)}},
af:function(a,b){var s
for(s=this.y.a,s=new J.a6(s,s.length);s.v();)s.d.af(0,b)},
a5:function(a){var s,r=this,q=a.dx
q.a.push(q.ga4(q))
q.aP()
a.cG(r.f)
q=a.dy
s=(q&&C.b).gaD(q)
if(s!=null&&r.d!=null)s.cI(a,r)
for(q=r.y.a,q=new J.a6(q,q.length);q.v();)q.d.a5(a)
a.cF()
a.dx.aL()},
bz:function(a){var s=this.z
if(s!=null)s.C(a)},
ae:function(){return this.bz(null)},
ea:function(a){this.e=null
this.bz(a)},
hZ:function(){return this.ea(null)},
e8:function(a){this.bz(a)},
hW:function(){return this.e8(null)},
hV:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.ge7(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.cy()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}this.ae()},
hY:function(a,b){var s,r
for(s=b.gM(b),r=this.ge7();s.v();)s.gA(s).gp().U(0,r)
this.ae()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bR.prototype={
i:function(a){return this.b}}
E.c2.prototype={
i:function(a){return this.b}}
E.fQ.prototype={}
E.j_.prototype={
eC:function(a,b){var s,r,q=this
q.d=q.c=512
q.e=0
q.x=q.r=q.f=new P.aj(Date.now(),!1)
q.y=0
q.cx=q.ch=q.Q=q.z=null
s=new O.cS()
r=t.h8
s.a=H.b([],r)
s.gp().n(0,new E.j0(q))
q.cy=s
s=new O.cS()
s.a=H.b([],r)
s.gp().n(0,new E.j1(q))
q.db=s
s=new O.cS()
s.a=H.b([],r)
s.gp().n(0,new E.j2(q))
q.dx=s
s=H.b([],t.fG)
q.dy=s
s.push(null)
q.fr=new H.C(t.h9)},
gi7:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.ga4(q)
s=r.db
s=r.z=q.q(0,s.ga4(s))
q=s}return q},
ged:function(){var s,r=this,q=r.ch
if(q==null){q=r.gi7()
s=r.dx
s=r.ch=q.q(0,s.ga4(s))
q=s}return q},
cG:function(a){var s=this.dy
s.push(a==null?(s&&C.b).gaD(s):a)},
cF:function(){var s=this.dy
if(s.length>1)s.pop()},
c6:function(a){var s=a.b
if(s.length===0)throw H.c(P.u("May not cache a shader with no name."))
if(this.fr.cd(0,s))throw H.c(P.u('Shader cache already contains a shader by the name "'+s+'".'))
this.fr.l(0,s,a)}}
E.j0.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.j1.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.j2.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.fe.prototype={
cZ:function(a){this.ef()},
cY:function(){return this.cZ(null)},
ghM:function(){var s,r=this,q=Date.now(),p=C.c.a7(P.lV(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.aj(q,!1)
return s/p},
df:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.q()
if(typeof p!=="number")return H.v(p)
s=C.d.ct(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.q()
r=C.d.ct(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.mo(C.n,q.gic())}},
ef:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.G.eZ(s)
r=W.n2(new E.jl(this),t.H)
r.toString
C.G.h4(s,r)}},
ia:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.df()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.aj(p,!1)
q.y=P.lV(p-q.r.a).a*0.000001
p=q.cy
C.b.sm(p.a,0)
p.aP()
p=q.db
C.b.sm(p.a,0)
p.aP()
p=q.dx
C.b.sm(p.a,0)
p.aP()
p=q.dy
p.toString
C.b.sm(p,0)
q.dy.push(null)
m.a5(n.e)}q=n.Q
if(q!=null)q.C(null)}catch(o){s=H.ag(o)
r=H.lD(o)
P.lH("Error: "+H.f(s))
P.lH("Stack: "+H.f(r))
throw H.c(s)}}}
E.jl.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.ia()}}}
Z.fC.prototype={}
Z.dW.prototype={
X:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ag(q)
r=P.u('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.f(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.f(s.e)+"]"}}
Z.dc.prototype={}
Z.bv.prototype={
az:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
X:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].X(a)},
aw:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
a5:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.d(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=t.i,n=H.b([],o)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)n.push(s[q].i(0))
p=H.b([],o)
for(o=this.c,s=o.length,q=0;q<s;++q)p.push(J.a5(o[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(n,", ")+"\nAttrs:   "+C.b.j(p,", ")}}
Z.bV.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.eN(this.c))+"'")+"]"}}
Z.b1.prototype={
gcR:function(a){var s=this.a,r=(s&$.ap().a)!==0?3:0
if((s&$.bs().a)!==0)r+=3
if((s&$.br().a)!==0)r+=3
if((s&$.aM().a)!==0)r+=2
if((s&$.bN().a)!==0)r+=3
if((s&$.dL().a)!==0)r+=3
if((s&$.dM().a)!==0)r+=4
if((s&$.cl().a)!==0)++r
return(s&$.bq().a)!==0?r+4:r},
hr:function(a){var s,r=$.ap(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bs()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.br()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aM()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bN()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dL()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dM()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cl()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bq()
if((q&r.a)!==0)if(s===a)return r
return $.nw()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b1))return!1
return this.a===b.a},
i:function(a){var s=H.b([],t.i),r=this.a
if((r&$.ap().a)!==0)s.push("Pos")
if((r&$.bs().a)!==0)s.push("Norm")
if((r&$.br().a)!==0)s.push("Binm")
if((r&$.aM().a)!==0)s.push("Txt2D")
if((r&$.bN().a)!==0)s.push("TxtCube")
if((r&$.dL().a)!==0)s.push("Clr3")
if((r&$.dM().a)!==0)s.push("Clr4")
if((r&$.cl().a)!==0)s.push("Weight")
if((r&$.bq().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.hX.prototype={}
D.cy.prototype={
n:function(a,b){var s=this.a;(s==null?this.a=H.b([],t.f):s).push(b)},
U:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.b.B(q,b)
if(q===!0){q=r.a
s=(q&&C.b).U(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.b.B(q,b)
if(q===!0){q=r.b
s=(q&&C.b).U(q,b)||s}return s},
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
return!0}if(!r)C.b.F(P.lc(s,!0,t.dm),new D.ie(o))
s=p.b
if(s!=null){p.b=H.b([],t.f)
C.b.F(s,new D.ig(o))}return!0},
cj:function(){return this.C(null)},
aN:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.C(s)}}}}
D.ie.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.ig.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.S.prototype={}
D.aQ.prototype={}
D.aR.prototype={}
D.z.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.dX.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dX))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.ek.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ek))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.it.prototype={
i3:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
i_:function(a){this.c=a.b
this.d.U(0,a.a)
return!1}}
X.cM.prototype={}
X.iy.prototype={
b7:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.q()
s=b.b
r=o.ch
if(typeof s!=="number")return s.q()
q=new V.ad(m.a+l*k,m.b+s*r)
r=o.a.gaX()
p=new X.bZ(a,V.bg(),o.x,r,q)
p.b=!0
o.z=new P.aj(n,!1)
o.x=q
return p},
cE:function(a,b){this.r=a.a
return!1},
bh:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.eo()
if(typeof s!=="number")return s.ap()
this.r=(s&~r)>>>0
return!1},
bg:function(a,b){var s=this.d
if(s==null)return!1
s.C(this.b7(a,b))
return!0},
i4:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaX()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.q()
o=a.b
n=m.cy
if(typeof o!=="number")return o.q()
r=new X.c_(new V.a4(q*p,o*n),s,r)
r.b=!0
l.C(r)
return!0},
fB:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cM(c,p.a.gaX(),b)
q.b=!0
r.C(q)
p.y=new P.aj(s,!1)
p.x=V.bg()}}
X.ar.prototype={
t:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.ar))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bZ.prototype={}
X.iS.prototype={
bS:function(a,b,c){var s=this,r=new P.aj(Date.now(),!1),q=s.a.gaX(),p=new X.bZ(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
cE:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.C(this.bS(a,b,!0))
return!0},
bh:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.eo()
if(typeof r!=="number")return r.ap()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.C(s.bS(a,b,!0))
return!0},
bg:function(a,b){var s=this.d
if(s==null)return!1
s.C(this.bS(a,b,!1))
return!0},
i5:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaX()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.q()
p=a.b
o=n.ch
if(typeof p!=="number")return p.q()
s=new X.c_(new V.a4(r*q,p*o),s,b)
s.b=!0
m.C(s)
return!0},
gdH:function(){var s=this.b
return s==null?this.b=D.F():s},
gbF:function(){var s=this.c
return s==null?this.c=D.F():s},
ge6:function(){var s=this.d
return s==null?this.d=D.F():s}}
X.c_.prototype={}
X.eL.prototype={}
X.d2.prototype={}
X.jp.prototype={
b7:function(a,b){var s=this,r=new P.aj(Date.now(),!1),q=a.length>0?a[0]:V.bg(),p=s.a.gaX(),o=new X.d2(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
i2:function(a){var s=this.b
if(s==null)return!1
s.C(this.b7(a,!0))
return!0},
i0:function(a){var s=this.c
if(s==null)return!1
s.C(this.b7(a,!0))
return!0},
i1:function(a){var s=this.d
if(s==null)return!1
s.C(this.b7(a,!1))
return!0}}
X.fy.prototype={
gaX:function(){var s=this.a,r=C.j.gdD(s).c
r.toString
s=C.j.gdD(s).d
s.toString
return V.mi(0,0,r,s)},
d4:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.ek(s,new X.ar(r,a.altKey,a.shiftKey))},
aU:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.ar(r,a.altKey,a.shiftKey)},
c3:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.ar(r,a.altKey,a.shiftKey)},
aI:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.a1()
if(typeof o!=="number")return H.v(o)
s=r.top
if(typeof p!=="number")return p.a1()
if(typeof s!=="number")return H.v(s)
return new V.ad(q-o,p-s)},
b8:function(a){return new V.a4(a.movementX,a.movementY)},
c1:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=H.b([],t.cS)
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=C.d.a_(p.pageX)
C.d.a_(p.pageY)
n=k.left
if(typeof n!=="number")return H.v(n)
C.d.a_(p.pageX)
m=C.d.a_(p.pageY)
l=k.top
if(typeof l!=="number")return H.v(l)
j.push(new V.ad(o-n,m-l))}return j},
aG:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.dX(s,new X.ar(r,a.altKey,a.shiftKey))},
bT:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.a1()
if(typeof n!=="number")return H.v(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.a1()
if(typeof p!=="number")return H.v(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.v(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.v(p)
p=r<p}else p=!1
return p},
ft:function(a){this.f=!0},
fg:function(a){this.f=!1},
fm:function(a){if(this.f&&this.bT(a))a.preventDefault()},
fz:function(a){var s
if(!this.f)return
s=this.d4(a)
this.b.i3(s)},
fv:function(a){var s
if(!this.f)return
s=this.d4(a)
this.b.i_(s)},
fD:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aU(a)
if(p.x){s=p.aG(a)
r=p.b8(a)
if(p.d.cE(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.aG(a)
q=p.aI(a)
if(p.c.cE(s,q))a.preventDefault()},
fH:function(a){var s,r,q,p=this
p.aU(a)
s=p.aG(a)
if(p.x){r=p.b8(a)
if(p.d.bh(s,r))a.preventDefault()
return}if(p.r)return
q=p.aI(a)
if(p.c.bh(s,q))a.preventDefault()},
fq:function(a){var s,r,q,p=this
if(!p.bT(a)){p.aU(a)
s=p.aG(a)
if(p.x){r=p.b8(a)
if(p.d.bh(s,r))a.preventDefault()
return}if(p.r)return
q=p.aI(a)
if(p.c.bh(s,q))a.preventDefault()}},
fF:function(a){var s,r,q,p=this
p.aU(a)
s=p.aG(a)
if(p.x){r=p.b8(a)
if(p.d.bg(s,r))a.preventDefault()
return}if(p.r)return
q=p.aI(a)
if(p.c.bg(s,q))a.preventDefault()},
fo:function(a){var s,r,q,p=this
if(!p.bT(a)){p.aU(a)
s=p.aG(a)
if(p.x){r=p.b8(a)
if(p.d.bg(s,r))a.preventDefault()
return}if(p.r)return
q=p.aI(a)
if(p.c.bg(s,q))a.preventDefault()}},
fJ:function(a){var s,r,q=this
q.aU(a)
s=new V.a4((a&&C.F).ghC(a),C.F.ghD(a)).q(0,q.Q)
if(q.x){if(q.d.i4(s))a.preventDefault()
return}if(q.r)return
r=q.aI(a)
if(q.c.i5(s,r))a.preventDefault()},
fL:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aG(q.y)
r=q.aI(q.y)
q.d.fB(s,r,p)}},
h0:function(a){var s,r=this
r.a.focus()
r.f=!0
r.c3(a)
s=r.c1(a)
if(r.e.i2(s))a.preventDefault()},
fX:function(a){var s
this.c3(a)
s=this.c1(a)
if(this.e.i0(s))a.preventDefault()},
fZ:function(a){var s
this.c3(a)
s=this.c1(a)
if(this.e.i1(s))a.preventDefault()}}
D.dU.prototype={$iT:1}
D.e3.prototype={$iT:1}
D.T.prototype={}
D.cH.prototype={
d_:function(a){var s=this.y
if(s!=null)s.C(a)},
dc:function(a){var s=this.z
if(s!=null)s.C(a)},
fA:function(){return this.dc(null)},
fN:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(q==null||this.eT(q))return!1}return!0},
fa:function(a,b){var s,r,q,p
for(s=b.length,r=this.gda(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
p.gp().n(0,r)}s=new D.aQ()
s.b=!0
this.d_(s)},
fR:function(a,b){var s,r,q
for(s=b.gM(b),r=this.gda();s.v();){q=s.gA(s)
C.b.U(this.e,q)
q.gp().U(0,r)}s=new D.aR()
s.b=!0
this.d_(s)},
eT:function(a){var s=C.b.B(this.e,a)
return s}}
D.eK.prototype={$iT:1}
D.eZ.prototype={$iT:1}
V.a8.prototype={
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a8))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.aB.prototype={
t:function(a,b){var s,r=this
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
return"["+V.H(s.a,3,0)+", "+V.H(s.b,3,0)+", "+V.H(s.c,3,0)+", "+V.H(s.d,3,0)+"]"}}
V.ic.prototype={}
V.cR.prototype={
a8:function(a,b){var s=this,r=H.b([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.m)
return r},
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cR))return!1
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
i:function(a){var s,r,q,p,o=this,n=t.m,m=V.ck(H.b([o.a,o.d,o.r],n),3,0),l=V.ck(H.b([o.b,o.e,o.x],n),3,0),k=V.ck(H.b([o.c,o.f,o.y],n),3,0)
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
a8:function(a,b){var s=this,r=H.b([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.m)
return r},
cz:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.E().toString
if(Math.abs(b3-0)<1e-9)return V.bX()
s=1/b3
r=-l
q=-a2
return V.aW((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
q:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aW(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bk:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.a0(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bf))return!1
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
i:function(a){return this.L()},
E:function(a){var s,r,q,p,o,n=this,m=t.m,l=V.ck(H.b([n.a,n.e,n.y,n.cx],m),3,0),k=V.ck(H.b([n.b,n.f,n.z,n.cy],m),3,0),j=V.ck(H.b([n.c,n.r,n.Q,n.db],m),3,0),i=V.ck(H.b([n.d,n.x,n.ch,n.dx],m),3,0)
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
L:function(){return this.E("")}}
V.ad.prototype={
a9:function(a){return new V.a4(a.a-this.a,a.b-this.b)},
t:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ad))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.a0.prototype={
a1:function(a,b){return new V.a0(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a0))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.bh.prototype={
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bh))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.H(s.a,3,0)+", "+V.H(s.b,3,0)+", "+V.H(s.c,3,0)+", "+V.H(s.d,3,0)+"]"}}
V.eP.prototype={
gao:function(){var s=this.c,r=this.d
return s>r?r:s},
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eP))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.H(s.a,3,0)+", "+V.H(s.b,3,0)+", "+V.H(s.c,3,0)+", "+V.H(s.d,3,0)+"]"}}
V.a4.prototype={
bf:function(a){return Math.sqrt(this.ad(this))},
ad:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.q()
if(typeof p!=="number")return H.v(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.v(r)
return q*p+s*r},
q:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.q()
if(typeof b!=="number")return H.v(b)
s=this.b
if(typeof s!=="number")return s.q()
return new V.a4(r*b,s*b)},
Z:function(a,b){var s,r
$.E().toString
if(Math.abs(b-0)<1e-9){s=$.my
return s==null?$.my=new V.a4(0,0):s}s=this.a
if(typeof s!=="number")return s.Z()
r=this.b
if(typeof r!=="number")return r.Z()
return new V.a4(s/b,r/b)},
t:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
s=b.a
r=this.a
$.E().toString
if(typeof s!=="number")return s.a1()
if(typeof r!=="number")return H.v(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.a1()
if(typeof r!=="number")return H.v(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.J.prototype={
bf:function(a){return Math.sqrt(this.ad(this))},
ad:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cA:function(a,b){return new V.J(V.lF(this.a,a.a,b),V.lF(this.b,a.b,b),V.lF(this.c,a.c,b))},
S:function(){var s=this,r=Math.sqrt(s.ad(s))
if(r===1)return s
return s.Z(0,r)},
bd:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.J(s*r-q*p,q*o-n*r,n*p-s*o)},
w:function(a,b){return new V.J(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a){return new V.J(-this.a,-this.b,-this.c)},
Z:function(a,b){$.E().toString
if(Math.abs(b-0)<1e-9)return V.fz()
return new V.J(this.a/b,this.b/b,this.c/b)},
e5:function(){$.E().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.J))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.db.prototype={
bf:function(a){var s=this,r=s.a,q=s.b,p=s.c,o=s.d
return Math.sqrt(r*r+q*q+p*p+o*o)},
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.db))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.H(s.a,3,0)+", "+V.H(s.b,3,0)+", "+V.H(s.c,3,0)+", "+V.H(s.d,3,0)+"]"}}
U.hZ.prototype={
bL:function(a){var s=V.qC(a,this.c,this.b)
return s},
gp:function(){var s=this.y
return s==null?this.y=D.F():s},
O:function(a){var s=this.y
if(s!=null)s.C(a)},
scL:function(a,b){},
scB:function(a){var s,r=this,q=r.b
$.E().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bL(s)}q=new D.z("maximumLocation",q,r.b)
q.b=!0
r.O(q)}},
scD:function(a){var s,r=this,q=r.c
$.E().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bL(s)}q=new D.z("minimumLocation",q,r.c)
q.b=!0
r.O(q)}},
san:function(a,b){var s,r=this
b=r.bL(b)
s=r.d
$.E().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.z("location",s,b)
s.b=!0
r.O(s)}},
scC:function(a){var s,r,q=this,p=q.e
$.E().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.z("maximumVelocity",p,a)
p.b=!0
q.O(p)}},
sV:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.E().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.z("velocity",r,a)
r.b=!0
s.O(r)}},
scg:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.E().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.z("dampening",s,a)
s.b=!0
this.O(s)}},
af:function(a,b){var s,r,q,p=this,o=p.f
$.E().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
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
s=q}p.sV(s)}}}
U.co.prototype={
gp:function(){var s=this.b
return s==null?this.b=D.F():s},
b2:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.co))return!1
return J.N(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.bT.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.F():s},
O:function(a){var s=this.e
if(s!=null)s.C(a)},
ai:function(){return this.O(null)},
f8:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaT(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.gp()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}s=new D.aQ()
s.b=!0
this.O(s)},
fP:function(a,b){var s,r
for(s=b.gM(b),r=this.gaT();s.v();)s.gA(s).gp().U(0,r)
s=new D.aR()
s.b=!0
this.O(s)},
b2:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.ak()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.a6(p,p.length),s=null;p.v();){o=p.d
if(o!=null){r=o.b2(0,b,c)
if(r!=null)s=s==null?r:r.q(0,s)}}q.f=s==null?V.bX():s
p=q.e
if(p!=null)p.aN(0)}return q.f},
t:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bT))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.d(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.d(p,r)
if(!J.N(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iV:1}
U.V.prototype={}
U.d8.prototype={
gp:function(){var s=this.cy
return s==null?this.cy=D.F():s},
O:function(a){var s=this.cy
if(s!=null)s.C(a)},
ai:function(){return this.O(null)},
ba:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.c.gdH().n(0,s.gbU())
s.a.c.ge6().n(0,s.gbW())
s.a.c.gbF().n(0,s.gbY())
return!0},
bV:function(a){var s=this
if(!J.N(s.c,s.a.b.c))return
s.x=s.y=!0
s.z=s.b.d},
bX:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!l.y)return
if(l.x){s=a.y.a9(a.d)
s=s.ad(s)
r=l.r
if(typeof r!=="number")return H.v(r)
if(s<r)return
l.x=!1}if(l.d){s=a.c
s=a.y.a9(a.d).q(0,2).Z(0,s.gao())
l.Q=s
r=l.b
s=s.a
if(typeof s!=="number")return s.q()
q=l.e
if(typeof q!=="number")return H.v(q)
r.sV(s*10*q)}else{s=a.c
r=a.y
q=a.d
p=r.a9(q).q(0,2).Z(0,s.gao())
r=l.b
o=p.a
if(typeof o!=="number")return o.R()
n=l.e
if(typeof n!=="number")return H.v(n)
m=l.z
if(typeof m!=="number")return H.v(m)
r.san(0,-o*n+m)
l.b.sV(0)
l.Q=a.z.a9(q).q(0,2).Z(0,s.gao())}l.ai()},
bZ:function(a){var s,r,q,p=this
if(!p.y)return
p.y=!1
if(p.x)return
s=p.Q
if(s.ad(s)>0.0001){s=p.b
r=p.Q.a
if(typeof r!=="number")return r.q()
q=p.e
if(typeof q!=="number")return H.v(q)
s.sV(r*10*q)
p.ai()}},
b2:function(a,b,c){var s,r,q,p=this,o=p.ch,n=b.e
if(typeof o!=="number")return o.ak()
if(o<n){p.ch=n
s=b.y
p.b.af(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
p.cx=V.aW(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return p.cx},
$iV:1}
U.d9.prototype={
gp:function(){var s=this.fx
return s==null?this.fx=D.F():s},
O:function(a){var s=this.fx
if(s!=null)s.C(a)},
ai:function(){return this.O(null)},
ba:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.gdH().n(0,q.gbU())
q.a.c.ge6().n(0,q.gbW())
q.a.c.gbF().n(0,q.gbY())
s=q.a.d
r=s.f
s=r==null?s.f=D.F():r
s.n(0,q.gf0())
s=q.a.d
r=s.d
s=r==null?s.d=D.F():r
s.n(0,q.gf2())
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
aB:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.R()
s=-s}if(this.r){if(typeof r!=="number")return r.R()
r=-r}return new V.a4(s,r)},
bV:function(a){var s=this
t.d.a(a)
if(!J.N(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bX:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a9(a.d)
s=s.ad(s)
r=l.Q
if(typeof r!=="number")return H.v(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.aB(a.y.a9(a.d).q(0,2).Z(0,s.gao()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.R()
q=l.y
if(typeof q!=="number")return H.v(q)
r.sV(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.R()
r=l.x
if(typeof r!=="number")return H.v(r)
q.sV(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.aB(r.a9(q).q(0,2).Z(0,s.gao()))
r=l.c
o=p.a
if(typeof o!=="number")return o.R()
n=l.y
if(typeof n!=="number")return H.v(n)
m=l.cy
if(typeof m!=="number")return H.v(m)
r.san(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.R()
o=l.x
if(typeof o!=="number")return H.v(o)
r=l.db
if(typeof r!=="number")return H.v(r)
m.san(0,-n*o+r)
l.b.sV(0)
l.c.sV(0)
l.dx=l.aB(a.z.a9(q).q(0,2).Z(0,s.gao()))}l.ai()},
bZ:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.ad(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.R()
q=p.y
if(typeof q!=="number")return H.v(q)
s.sV(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.R()
s=p.x
if(typeof s!=="number")return H.v(s)
q.sV(-r*10*s)
p.ai()}},
f1:function(a){var s=this
if(t.dn.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
f3:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!J.N(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.aB(r.a9(q).q(0,2).Z(0,s.gao()))
r=l.c
o=p.a
if(typeof o!=="number")return o.R()
n=l.y
if(typeof n!=="number")return H.v(n)
m=l.cy
if(typeof m!=="number")return H.v(m)
r.san(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.R()
o=l.x
if(typeof o!=="number")return H.v(o)
r=l.db
if(typeof r!=="number")return H.v(r)
m.san(0,-n*o+r)
l.b.sV(0)
l.c.sV(0)
l.dx=l.aB(a.z.a9(q).q(0,2).Z(0,s.gao()))
l.ai()},
hj:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
hh:function(a){var s,r,q,p,o,n,m,l=this
t.eP.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a9(a.d)
s=s.ad(s)
r=l.Q
if(typeof r!=="number")return H.v(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.aB(a.y.a9(a.d).q(0,2).Z(0,s.gao()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.R()
q=l.y
if(typeof q!=="number")return H.v(q)
r.sV(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.R()
r=l.x
if(typeof r!=="number")return H.v(r)
q.sV(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.aB(r.a9(q).q(0,2).Z(0,s.gao()))
r=l.c
o=p.a
if(typeof o!=="number")return o.R()
n=l.y
if(typeof n!=="number")return H.v(n)
m=l.cy
if(typeof m!=="number")return H.v(m)
r.san(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.R()
o=l.x
if(typeof o!=="number")return H.v(o)
r=l.db
if(typeof r!=="number")return H.v(r)
m.san(0,-n*o+r)
l.b.sV(0)
l.c.sV(0)
l.dx=l.aB(a.z.a9(q).q(0,2).Z(0,s.gao()))}l.ai()},
hf:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.ad(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.R()
q=p.y
if(typeof q!=="number")return H.v(q)
s.sV(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.R()
s=p.x
if(typeof s!=="number")return H.v(s)
q.sV(-r*10*s)
p.ai()}},
b2:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(typeof o!=="number")return o.ak()
if(o<n){p.dy=n
s=b.y
p.c.af(0,s)
p.b.af(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
o=V.aW(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
n=p.c.d
r=Math.cos(n)
q=Math.sin(n)
p.fr=o.q(0,V.aW(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iV:1}
U.da.prototype={
gp:function(){var s=this.r
return s==null?this.r=D.F():s},
O:function(a){var s=this.r
if(s!=null)s.C(a)},
ba:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.F():r
r=p.gf5()
s.n(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.F():q).n(0,r)
return!0},
f6:function(a){var s,r,q,p,o=this
if(!J.N(o.b,o.a.b.c))return
t.a3.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.q()
p=s+r*q
if(s!==p){o.d=p
s=new D.z("zoom",s,p)
s.b=!0
o.O(s)}},
b2:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.aW(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$iV:1}
M.cn.prototype={
gp:function(){var s=this.r
return s==null?this.r=D.F():s},
T:function(a){var s=this.r
if(s!=null)s.C(a)},
aE:function(){return this.T(null)},
fT:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gW(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.gp()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}s=new D.aQ()
s.b=!0
this.T(s)},
fV:function(a,b){var s,r
for(s=b.gM(b),r=this.gW();s.v();)s.gA(s).gp().U(0,r)
s=new D.aR()
s.b=!0
this.T(s)},
a5:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.a6(s,s.length);s.v();){r=s.d
if(r!=null)r.a5(a)}q.f=!1},
$ia_:1}
M.cr.prototype={
gp:function(){var s=this.r
return s==null?this.r=D.F():s},
T:function(a){var s=this.r
if(s!=null)s.C(a)},
aE:function(){return this.T(null)},
sbc:function(a){var s,r,q=this
if(a==null)a=new X.iq()
s=q.b
if(s!==a){if(s!=null)s.gp().U(0,q.gW())
r=q.b
q.b=a
a.gp().n(0,q.gW())
s=new D.z("camera",r,q.b)
s.b=!0
q.T(s)}},
sb1:function(a,b){var s,r,q=this
if(b==null)b=X.lZ(null)
s=q.c
if(s!==b){if(s!=null)s.gp().U(0,q.gW())
r=q.c
q.c=b
b.gp().n(0,q.gW())
s=new D.z("target",r,q.c)
s.b=!0
q.T(s)}},
sbj:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gp().U(0,r.gW())
s=r.d
r.d=a
if(a!=null)a.gp().n(0,r.gW())
q=new D.z("technique",s,r.d)
q.b=!0
r.T(q)}},
a5:function(a){var s,r=this
a.cG(r.d)
r.c.X(a)
r.b.X(a)
s=r.d
if(s!=null)s.af(0,a)
r.e.af(0,a)
r.e.a5(a)
r.b.aw(a)
r.c.aw(a)
a.cF()},
$ia_:1}
M.cx.prototype={
T:function(a){var s=this.y
if(s!=null)s.C(a)},
aE:function(){return this.T(null)},
fi:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gW(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.cy()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}s=new D.aQ()
s.b=!0
this.T(s)},
fk:function(a,b){var s,r
for(s=b.gM(b),r=this.gW();s.v();)s.gA(s).gp().U(0,r)
s=new D.aR()
s.b=!0
this.T(s)},
sbc:function(a){var s,r,q=this
if(a==null)a=X.m8(null)
s=q.b
if(s!==a){if(s!=null)s.gp().U(0,q.gW())
r=q.b
q.b=a
a.gp().n(0,q.gW())
s=new D.z("camera",r,q.b)
s.b=!0
q.T(s)}},
sb1:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gp().U(0,r.gW())
s=r.c
r.c=b
b.gp().n(0,r.gW())
q=new D.z("target",s,r.c)
q.b=!0
r.T(q)}},
sbj:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gp().U(0,r.gW())
s=r.d
r.d=a
if(a!=null)a.gp().n(0,r.gW())
q=new D.z("technique",s,r.d)
q.b=!0
r.T(q)}},
gp:function(){var s=this.y
return s==null?this.y=D.F():s},
a5:function(a){var s,r=this
a.cG(r.d)
r.c.X(a)
r.b.X(a)
s=r.d
if(s!=null)s.af(0,a)
for(s=r.e.a,s=new J.a6(s,s.length);s.v();)s.d.af(0,a)
for(s=r.e.a,s=new J.a6(s,s.length);s.v();)s.d.a5(a)
r.b.toString
a.cy.aL()
a.db.aL()
r.c.aw(a)
a.cF()},
$ia_:1}
M.cC.prototype={
gp:function(){var s=this.b
return s==null?this.b=D.F():s},
T:function(a){var s=this.b
if(s!=null)s.C(a)},
aE:function(){return this.T(null)},
a5:function(a){var s=this.e
if(s!=null)s.a5(a)
s=this.r
if(s!=null)s.a5(a)},
$ia_:1}
M.a_.prototype={}
A.dR.prototype={}
A.hQ.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hE:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
ci:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.a9.prototype={
gaA:function(a){var s=this.a?1:0,r=this.b?2:0
return s|r|0},
i:function(a){var s=this.a?1:0,r=this.b?2:0
return""+(s|r|0)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof A.a9))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.eb.prototype={
aj:function(a,b){if(b!=null&&b.d)a.cP(b)}}
A.il.prototype={
aQ:function(a,b,c,d){var s,r,q,p,o=c.length
if(0>=o)return H.d(c,0)
s=c[0]
$.E().toString
r=Math.abs(s-0)<1e-9
if(r){if(0>=d.length)return H.d(d,0)
q=d[0]
d=C.b.cS(d,1)
c=C.b.cS(c,1);--o}else q=0
s=a.a+="vec4 blur"+b+"()\n"
s+="{\n"
a.a=s
if(r)s=a.a+="  vec4 color = texture2D(colorTxt, txt2D)*"+H.f(q)+";\n"
else s=a.a=s+"  vec4 color = vec4(0.0);\n"
s=a.a=s+"  vec2 offset;\n"
for(p=0;p<o;++p){if(p>=c.length)return H.d(c,p)
a.a+="  offset = blurScale * "+H.f(c[p])+";\n"
if(p>=d.length)return H.d(d,p)
a.a+="  color += texture2D(colorTxt, txt2D + offset) * "+H.f(d[p])+";\n"
if(p>=d.length)return H.d(d,p)
s=a.a+="  color += texture2D(colorTxt, txt2D - offset) * "+H.f(d[p])+";\n"}s+="  return color; \n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
i:function(a){return this.b}}
A.er.prototype={
eB:function(c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3="Required uniform value, ",c4=", was not defined or used in shader.",c5="uniform mat4 objMat;\n"
c1.z=c6
s=new P.Q("")
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
A.pR(c6,s)
A.pT(c6,s)
A.pS(c6,s)
A.pV(c6,s)
A.pW(c6,s)
A.pU(c6,s)
A.pX(c6,s)
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
c1.cw(0,q.charCodeAt(0)==0?q:q,A.pQ(c1.z))
c1.Q=c1.x.h(0,"posAttr")
c1.cx=c1.x.h(0,"normAttr")
c1.ch=c1.x.h(0,"binmAttr")
c1.cy=c1.x.h(0,"txt2DAttr")
c1.db=c1.x.h(0,"txtCubeAttr")
c1.dx=c1.x.h(0,"bendAttr")
if(c6.dy)c1.id=t.q.a(c1.y.H(0,"invViewMat"))
if(r)c1.dy=t.q.a(c1.y.H(0,"objMat"))
if(p)c1.fr=t.q.a(c1.y.H(0,"viewObjMat"))
r=t.q
c1.fy=r.a(c1.y.H(0,"projViewObjMat"))
if(c6.go)c1.fx=r.a(c1.y.H(0,"viewMat"))
if(c6.x1)c1.k1=t.O.a(c1.y.H(0,"txt2DMat"))
if(c6.x2)c1.k2=r.a(c1.y.H(0,"txtCubeMat"))
if(c6.y1)c1.k3=r.a(c1.y.H(0,"colorMat"))
c1.r1=H.b([],t.hg)
q=c6.b_
if(q>0){c1.k4=c1.y.H(0,"bendMatCount")
for(l=0;l<q;++l){p=c1.r1
o=c1.y
n="bendValues["+l+"].mat"
k=o.h(0,n)
if(k==null)H.q(P.u(c3+n+c4))
p.push(r.a(k))}}r=c6.a
if(r.a)c1.r2=t.r.a(c1.y.H(0,"emissionClr"))
if(r.b)c1.rx=t.c.a(c1.y.H(0,"emissionTxt"))
r=c6.b
if(r.a)c1.x1=t.r.a(c1.y.H(0,"ambientClr"))
if(r.b)c1.x2=t.c.a(c1.y.H(0,"ambientTxt"))
r=c6.c
if(r.a)c1.y2=t.r.a(c1.y.H(0,"diffuseClr"))
if(r.b)c1.b_=t.c.a(c1.y.H(0,"diffuseTxt"))
r=c6.d
if(r.a)c1.bt=t.r.a(c1.y.H(0,"invDiffuseClr"))
if(r.b)c1.dM=t.c.a(c1.y.H(0,"invDiffuseTxt"))
r=c6.e
q=r.a
if(q||r.b||!1){c1.dP=t.n.a(c1.y.H(0,"shininess"))
if(q)c1.dN=t.r.a(c1.y.H(0,"specularClr"))
if(r.b)c1.dO=t.c.a(c1.y.H(0,"specularTxt"))}if(c6.f.b)c1.dQ=t.c.a(c1.y.H(0,"bumpTxt"))
if(c6.db){c1.dR=t.Q.a(c1.y.H(0,"envSampler"))
r=c6.r
if(r.a)c1.dS=t.r.a(c1.y.H(0,"reflectClr"))
if(r.b)c1.dT=t.c.a(c1.y.H(0,"reflectTxt"))
r=c6.x
q=r.a
if(q||r.b||!1){c1.dU=t.n.a(c1.y.H(0,"refraction"))
if(q)c1.dV=t.r.a(c1.y.H(0,"refractClr"))
if(r.b)c1.dW=t.c.a(c1.y.H(0,"refractTxt"))}}r=c6.y
if(r.a)c1.dX=t.n.a(c1.y.H(0,"alpha"))
if(r.b)c1.dY=t.c.a(c1.y.H(0,"alphaTxt"))
if(c6.k1){r=c6.z
q=r.length
if(q!==0){c1.ck=new H.C(t.J)
c1.cl=new H.C(t.en)
for(p=t.r,o=t.n,n=t.d6,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="barLight"+H.f(h)
f=H.b([],n)
for(m=i.b,l=0;l<m;++l){e=c1.y
d=g+"s["+l+"].startPnt"
k=e.h(0,d)
if(k==null)H.q(P.u(c3+d+c4))
p.a(k)
e=c1.y
d=g+"s["+l+"].endPnt"
c=e.h(0,d)
if(c==null)H.q(P.u(c3+d+c4))
p.a(c)
e=c1.y
d=g+"s["+l+"].color"
b=e.h(0,d)
if(b==null)H.q(P.u(c3+d+c4))
p.a(b)
if(typeof h!=="number")return h.ap()
if((h&4)!==0){e=c1.y
d=g+"s["+l+"].att0"
a=e.h(0,d)
if(a==null)H.q(P.u(c3+d+c4))
o.a(a)
e=c1.y
d=g+"s["+l+"].att1"
a0=e.h(0,d)
if(a0==null)H.q(P.u(c3+d+c4))
o.a(a0)
e=c1.y
d=g+"s["+l+"].att2"
a1=e.h(0,d)
if(a1==null)H.q(P.u(c3+d+c4))
o.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c2
a3=a2
a4=a3}f.push(new A.d3(k,c,b,a4,a3,a2))}c1.cl.l(0,h,f)
m=c1.ck
e=c1.y
d=g+"Count"
k=e.h(0,d)
if(k==null)H.q(P.u(c3+d+c4))
m.l(0,h,k)}}r=c6.Q
q=r.length
if(q!==0){c1.cm=new H.C(t.J)
c1.cn=new H.C(t.af)
for(p=t.r,o=t.c,n=t.dv,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="dirLight"+H.f(h)
f=H.b([],n)
for(m=i.b,l=0;l<m;++l){if(typeof h!=="number")return h.ap()
e=(h&1)!==0
if(e){d=c1.y
a5=g+"s["+l+"].objUp"
k=d.h(0,a5)
if(k==null)H.q(P.u(c3+a5+c4))
p.a(k)
d=c1.y
a5=g+"s["+l+"].objRight"
c=d.h(0,a5)
if(c==null)H.q(P.u(c3+a5+c4))
p.a(c)
d=c1.y
a5=g+"s["+l+"].objDir"
b=d.h(0,a5)
if(b==null)H.q(P.u(c3+a5+c4))
p.a(b)
a6=b
a7=c
a8=k}else{a6=c2
a7=a6
a8=a7}d=c1.y
a5=g+"s["+l+"].viewDir"
k=d.h(0,a5)
if(k==null)H.q(P.u(c3+a5+c4))
p.a(k)
d=c1.y
a5=g+"s["+l+"].color"
c=d.h(0,a5)
if(c==null)H.q(P.u(c3+a5+c4))
p.a(c)
if(e){e=c1.y
d=g+"sTexture2D"+l
b=e.h(0,d)
if(b==null)H.q(P.u(c3+d+c4))
o.a(b)
a9=b}else a9=c2
f.push(new A.d4(a8,a7,a6,k,c,a9))}c1.cn.l(0,h,f)
m=c1.cm
e=c1.y
d=g+"Count"
k=e.h(0,d)
if(k==null)H.q(P.u(c3+d+c4))
m.l(0,h,k)}}r=c6.ch
q=r.length
if(q!==0){c1.co=new H.C(t.J)
c1.cp=new H.C(t.gr)
for(p=t.r,o=t.O,n=t.Q,m=t.y,e=t.n,d=t.by,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="pointLight"+H.f(h)
f=H.b([],d)
for(a5=i.b,l=0;l<a5;++l){b0=c1.y
b1=g+"s["+l+"].point"
k=b0.h(0,b1)
if(k==null)H.q(P.u(c3+b1+c4))
p.a(k)
b0=c1.y
b1=g+"s["+l+"].viewPnt"
c=b0.h(0,b1)
if(c==null)H.q(P.u(c3+b1+c4))
p.a(c)
b0=c1.y
b1=g+"s["+l+"].color"
b=b0.h(0,b1)
if(b==null)H.q(P.u(c3+b1+c4))
p.a(b)
if(typeof h!=="number")return h.ap()
if((h&3)!==0){b0=c1.y
b1=g+"s["+l+"].invViewRotMat"
a=b0.h(0,b1)
if(a==null)H.q(P.u(c3+b1+c4))
o.a(a)
b2=a}else b2=c2
if((h&1)!==0){b0=c1.y
b1=g+"sTextureCube"+l
a=b0.h(0,b1)
if(a==null)H.q(P.u(c3+b1+c4))
n.a(a)
a9=a}else a9=c2
if((h&2)!==0){b0=c1.y
b1=g+"sShadowCube"+l
a=b0.h(0,b1)
if(a==null)H.q(P.u(c3+b1+c4))
n.a(a)
b0=c1.y
b1=g+"s["+l+"].shadowAdj"
a0=b0.h(0,b1)
if(a0==null)H.q(P.u(c3+b1+c4))
m.a(a0)
b3=a
b4=a0}else{b3=c2
b4=b3}if((h&4)!==0){b0=c1.y
b1=g+"s["+l+"].att0"
a=b0.h(0,b1)
if(a==null)H.q(P.u(c3+b1+c4))
e.a(a)
b0=c1.y
b1=g+"s["+l+"].att1"
a0=b0.h(0,b1)
if(a0==null)H.q(P.u(c3+b1+c4))
e.a(a0)
b0=c1.y
b1=g+"s["+l+"].att2"
a1=b0.h(0,b1)
if(a1==null)H.q(P.u(c3+b1+c4))
e.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c2
a3=a2
a4=a3}f.push(new A.d6(k,c,b2,b,a9,b3,b4,a4,a3,a2))}c1.cp.l(0,h,f)
a5=c1.co
b0=c1.y
b1=g+"Count"
k=b0.h(0,b1)
if(k==null)H.q(P.u(c3+b1+c4))
a5.l(0,h,k)}}r=c6.cx
q=r.length
if(q!==0){c1.cq=new H.C(t.J)
c1.cr=new H.C(t.gb)
for(p=t.r,o=t.n,n=t.y,m=t.c,e=t.fF,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="spotLight"+H.f(h)
f=H.b([],e)
for(d=i.b,l=0;l<d;++l){a5=c1.y
b0=g+"s["+l+"].objPnt"
k=a5.h(0,b0)
if(k==null)H.q(P.u(c3+b0+c4))
p.a(k)
a5=c1.y
b0=g+"s["+l+"].objDir"
c=a5.h(0,b0)
if(c==null)H.q(P.u(c3+b0+c4))
p.a(c)
a5=c1.y
b0=g+"s["+l+"].viewPnt"
b=a5.h(0,b0)
if(b==null)H.q(P.u(c3+b0+c4))
p.a(b)
a5=c1.y
b0=g+"s["+l+"].color"
a=a5.h(0,b0)
if(a==null)H.q(P.u(c3+b0+c4))
p.a(a)
if(typeof h!=="number")return h.ap()
if((h&3)!==0){a5=c1.y
b0=g+"s["+l+"].objUp"
a0=a5.h(0,b0)
if(a0==null)H.q(P.u(c3+b0+c4))
p.a(a0)
a5=c1.y
b0=g+"s["+l+"].objRight"
a1=a5.h(0,b0)
if(a1==null)H.q(P.u(c3+b0+c4))
p.a(a1)
a5=c1.y
b0=g+"s["+l+"].tuScalar"
b5=a5.h(0,b0)
if(b5==null)H.q(P.u(c3+b0+c4))
o.a(b5)
a5=c1.y
b0=g+"s["+l+"].tvScalar"
b6=a5.h(0,b0)
if(b6==null)H.q(P.u(c3+b0+c4))
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
if(a0==null)H.q(P.u(c3+b1+c4))
n.a(a0)
b4=a0}else b4=c2
if((h&8)!==0){b0=c1.y
b1=g+"s["+l+"].cutoff"
a0=b0.h(0,b1)
if(a0==null)H.q(P.u(c3+b1+c4))
o.a(a0)
b0=c1.y
b1=g+"s["+l+"].coneAngle"
a1=b0.h(0,b1)
if(a1==null)H.q(P.u(c3+b1+c4))
o.a(a1)
b9=a1
c0=a0}else{b9=c2
c0=b9}if((h&4)!==0){b0=c1.y
b1=g+"s["+l+"].att0"
a0=b0.h(0,b1)
if(a0==null)H.q(P.u(c3+b1+c4))
o.a(a0)
b0=c1.y
b1=g+"s["+l+"].att1"
a1=b0.h(0,b1)
if(a1==null)H.q(P.u(c3+b1+c4))
o.a(a1)
b0=c1.y
b1=g+"s["+l+"].att2"
b5=b0.h(0,b1)
if(b5==null)H.q(P.u(c3+b1+c4))
o.a(b5)
a2=b5
a3=a1
a4=a0}else{a2=c2
a3=a2
a4=a3}if((h&1)!==0){b0=c1.y
b1=g+"sTexture2D"+l
a0=b0.h(0,b1)
if(a0==null)H.q(P.u(c3+b1+c4))
m.a(a0)
a9=a0}else a9=c2
if(a5){a5=c1.y
b0=g+"sShadow2D"+l
a0=a5.h(0,b0)
if(a0==null)H.q(P.u(c3+b0+c4))
m.a(a0)
b3=a0}else b3=c2
f.push(new A.d7(k,c,b,a,a8,a7,b8,b7,b4,c0,b9,a4,a3,a2,a9,b3))}c1.cr.l(0,h,f)
d=c1.cq
a5=c1.y
b0=g+"Count"
k=a5.h(0,b0)
if(k==null)H.q(P.u(c3+b0+c4))
d.l(0,h,k)}}}},
aj:function(a,b){if(b!=null&&b.d)a.cP(b)},
h9:function(a,b){}}
A.dV.prototype={
i:function(a){return"barLight"+H.f(this.a)}}
A.e4.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.eM.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.f_.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.iD.prototype={
i:function(a){return this.be}}
A.d3.prototype={}
A.d4.prototype={}
A.d6.prototype={}
A.d7.prototype={}
A.bF.prototype={
bK:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
cw:function(a,b,c){var s,r,q,p=this
p.c=b
p.d=c
p.e=p.d5(b,35633)
p.f=p.d5(p.d,35632)
s=p.a
r=s.createProgram()
p.r=r
s.attachShader(r,p.e)
s.attachShader(p.r,p.f)
s.linkProgram(p.r)
if(!s.getProgramParameter(p.r,35714)){q=s.getProgramInfoLog(p.r)
s.deleteProgram(p.r)
H.q(P.u("Failed to link shader: "+H.f(q)))}p.ha()
p.hc()},
X:function(a){a.a.useProgram(this.r)
this.x.hE()},
d5:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.c(P.u("Error compiling shader '"+H.f(q)+"': "+H.f(s)))}return q},
ha:function(){var s,r,q,p=this,o=H.b([],t.x),n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.v(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.dR(n,r.name,q))}p.x=new A.hQ(o)},
hc:function(){var s,r,q,p=this,o=H.b([],t.fj),n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.v(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.hA(r.type,r.size,r.name,q))}p.y=new A.jx(o)},
aR:function(a,b,c){var s=this.a
if(a===1)return new A.fm(s,b,c)
else return A.lj(s,this.r,b,a,c)},
eW:function(a,b,c){var s=this.a
if(a===1)return new A.fr(s,b,c)
else return A.lj(s,this.r,b,a,c)},
eX:function(a,b,c){var s=this.a
if(a===1)return new A.fs(s,b,c)
else return A.lj(s,this.r,b,a,c)},
bq:function(a,b){return new P.fT(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
hA:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aR(b,c,d)
case 5121:return s.aR(b,c,d)
case 5122:return s.aR(b,c,d)
case 5123:return s.aR(b,c,d)
case 5124:return s.aR(b,c,d)
case 5125:return s.aR(b,c,d)
case 5126:return new A.fl(s.a,c,d)
case 35664:return new A.fn(s.a,c,d)
case 35665:return new A.fo(s.a,c,d)
case 35666:return new A.fp(s.a,c,d)
case 35667:return new A.ju(s.a,c,d)
case 35668:return new A.jv(s.a,c,d)
case 35669:return new A.jw(s.a,c,d)
case 35674:return new A.jy(s.a,c,d)
case 35675:return new A.fq(s.a,c,d)
case 35676:return new A.d5(s.a,c,d)
case 35678:return s.eW(b,c,d)
case 35680:return s.eX(b,c,d)
case 35670:throw H.c(s.bq("BOOL",c))
case 35671:throw H.c(s.bq("BOOL_VEC2",c))
case 35672:throw H.c(s.bq("BOOL_VEC3",c))
case 35673:throw H.c(s.bq("BOOL_VEC4",c))
default:throw H.c(P.u("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.eV.prototype={}
A.fk.prototype={}
A.jx.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
H:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.L()},
L:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.fm.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.ju.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.jv.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.jw.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.jt.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.fl.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.fn.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.fo.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.fp.prototype={
er:function(a){var s=a.a,r=a.b,q=a.c,p=a.d
return this.a.uniform4f(this.d,s,r,q,p)},
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.jy.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.fq.prototype={
ag:function(a){var s=new Float32Array(H.cf(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.d5.prototype={
ag:function(a){var s=new Float32Array(H.cf(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.fr.prototype={
cP:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.fs.prototype={
eq:function(a){var s=a==null||a.d<6,r=this.a,q=this.d
if(s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.kl.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cA(q.b,b).cA(q.d.cA(q.c,b),c)
q=new V.a0(p.a,p.b,p.c)
if(!J.N(a.f,q)){a.f=q
q=a.a
if(q!=null)q.ae()}a.sii(p.S())
q=1-b
s=1-c
s=new V.bh(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.N(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.ae()}}}
F.e6.prototype={
eO:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.fz()
if(n!=null)q=q.w(0,n)
if(s!=null)q=q.w(0,s)
if(r!=null)q=q.w(0,r)
if(q.e5())return p
return q.S()},
eQ:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.a1(0,n)
q=new V.J(o.a,o.b,o.c).S()
o=r.a1(0,n)
return q.bd(new V.J(o.a,o.b,o.c).S()).S()},
cc:function(){var s,r=this
if(r.d!=null)return!0
s=r.eO()
if(s==null){s=r.eQ()
if(s==null)return!1}r.d=s
r.a.a.ae()
return!0},
eN:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.fz()
if(n!=null)q=q.w(0,n)
if(s!=null)q=q.w(0,s)
if(r!=null)q=q.w(0,r)
if(q.e5())return p
return q.S()},
eP:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.E().toString
if(Math.abs(p-0)<1e-9){j=b.a1(0,e)
o=new V.J(j.a,j.b,j.c).S()
if(q.a-r.a<0)o=o.R(0)}else{n=(j-s.b)/p
j=b.a1(0,e)
j=new V.a0(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).a1(0,h)
o=new V.J(j.a,j.b,j.c).S()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.R(0)}j=l.d
if(j!=null){m=j.S()
o=m.bd(o).S().bd(m).S()}return o},
ca:function(){var s,r=this
if(r.e!=null)return!0
s=r.eN()
if(s==null){s=r.eP()
if(s==null)return!1}r.e=s
r.a.a.ae()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
E:function(a){var s,r=this,q=r.a
if(q==null||r.b==null||r.c==null)return a+"disposed"
s=a+C.a.au(J.a5(q.e),0)+", "+C.a.au(J.a5(r.b.e),0)+", "+C.a.au(J.a5(r.c.e),0)+" {"
q=r.d
s=q!=null?s+(q.i(0)+", "):s+"-, "
q=r.e
return q!=null?s+(q.i(0)+"}"):s+"-}"},
L:function(){return this.E("")}}
F.en.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
E:function(a){var s=this.a
if(s==null||this.b==null)return a+"disposed"
return a+C.a.au(J.a5(s.e),0)+", "+C.a.au(J.a5(this.b.e),0)},
L:function(){return this.E("")}}
F.eJ.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
E:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.a.au(J.a5(s.e),0)},
L:function(){return this.E("")}}
F.j5.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.F():s},
hS:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.a2()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){p=e[q]
f.a.n(0,p.hx())}f.a.a2()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.a2()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
l=n[m]
f.b.a.a.n(0,l)
m=new F.eJ()
if(l.a==null)H.q(P.u("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.C(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.a2()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.a2()
n=n.e
if(typeof n!=="number")return n.w()
n+=s
m=m.c
if(n>=m.length)return H.d(m,n)
i=m[n]
n=f.c.a
n.a.n(0,j)
n.a.n(0,i)
F.o5(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.a2()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.a2()
n=n.e
if(typeof n!=="number")return n.w()
n+=s
m=m.c
if(n>=m.length)return H.d(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.a2()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
g=n[m]
m=f.d.a
m.a.n(0,j)
m.a.n(0,i)
m.a.n(0,g)
F.cz(j,i,g)}e=f.e
if(e!=null)e.aN(0)},
aJ:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.aJ()||!1
if(!r.a.aJ())s=!1
q=r.e
if(q!=null)q.aN(0)
return s},
c9:function(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=34962,a4=a2.a.c.length
a6.toString
s=a6.a
r=(s&$.ap().a)!==0?1:0
if((s&$.bs().a)!==0)++r
if((s&$.br().a)!==0)++r
if((s&$.aM().a)!==0)++r
if((s&$.bN().a)!==0)++r
if((s&$.dL().a)!==0)++r
if((s&$.dM().a)!==0)++r
if((s&$.cl().a)!==0)++r
if((s&$.bq().a)!==0)++r
q=a6.gcR(a6)
p=q*4
s=new Array(a4*q)
s.fixed$length=Array
o=H.b(s,t.m)
s=new Array(r)
s.fixed$length=Array
n=H.b(s,t.g0)
for(s=o.length,m=n.length,l=0,k=0;k<r;++k){j=a6.hr(k)
i=j.gcR(j)
if(k>=m)return H.d(n,k)
n[k]=new Z.dW(j,i,l*4,p)
for(h=0;h<a4;++h){g=a2.a.c
if(h>=g.length)return H.d(g,h)
f=g[h].hQ(j)
e=l+h*q
for(g=f.length,d=0;d<g;++d){c=f[d]
if(e<0||e>=s)return H.d(o,e)
o[e]=c;++e}}l+=i}s=a5.a
b=s.createBuffer()
s.bindBuffer(a3,b)
s.bufferData(a3,new Float32Array(H.cf(o)),35044)
s.bindBuffer(a3,null)
a=new Z.bv(new Z.fC(a3,b),n,a6)
a.b=H.b([],t.aZ)
if(a2.b.b.length!==0){a0=H.b([],t.V)
for(k=0;m=a2.b.b,k<m.length;++k){m=m[k].a
m.a.a.a2()
a0.push(m.e)}a1=Z.lk(s,34963,a0)
a.b.push(new Z.bV(0,a0.length,a1))}if(a2.c.b.length!==0){a0=H.b([],t.V)
for(k=0;m=a2.c.b,k<m.length;++k){m=m[k].a
m.a.a.a2()
a0.push(m.e)
m=a2.c.b
if(k>=m.length)return H.d(m,k)
m=m[k].b
m.a.a.a2()
a0.push(m.e)}a1=Z.lk(s,34963,a0)
a.b.push(new Z.bV(1,a0.length,a1))}if(a2.d.b.length!==0){a0=H.b([],t.V)
for(k=0;m=a2.d.b,k<m.length;++k){m=m[k].a
m.a.a.a2()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.d(m,k)
m=m[k].b
m.a.a.a2()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.d(m,k)
m=m[k].c
m.a.a.a2()
a0.push(m.e)}a1=Z.lk(s,34963,a0)
a.b.push(new Z.bV(4,a0.length,a1))}return a},
i:function(a){var s=this,r="   ",q=H.b([],t.i)
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.E(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.E(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.E(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.E(r))}return C.b.j(q,"\n")},
ae:function(){var s=this.e
if(s!=null)s.C(null)}}
F.j6.prototype={
ho:function(a){var s,r,q,p,o=H.b([],t.b),n=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.n(0,n)
s.a.n(0,q)
s.a.n(0,p)
o.push(F.cz(n,q,p))}return o},
hp:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=H.b([],t.b)
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
f.push(F.cz(k,j,h))
s.a.n(0,k)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.cz(k,h,g))}else{l.n(0,j)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.cz(j,h,g))
s.a.n(0,j)
s.a.n(0,g)
s.a.n(0,k)
f.push(F.cz(j,g,k))}n=!n}p=!p}return f},
gm:function(a){return this.b.length},
aJ:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].cc())q=!1
return q},
cb:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].ca())q=!1
return q},
i:function(a){return this.L()},
E:function(a){var s,r,q,p=H.b([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(a))
return C.b.j(p,"\n")},
L:function(){return this.E("")}}
F.j7.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.L()},
E:function(a){var s,r,q=H.b([],t.i),p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.d(r,s)
q.push(r[s].E(a+(""+s+". ")))}return C.b.j(q,"\n")},
L:function(){return this.E("")}}
F.j8.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.L()},
E:function(a){var s,r,q,p=H.b([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(a))
return C.b.j(p,"\n")},
L:function(){return this.E("")}}
F.fA.prototype={
cf:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.jL(s.cx,p,m,r,q,o,n,a,l)},
hx:function(){return this.cf(null)},
sii:function(a){var s
if(!J.N(this.z,a)){this.z=a
s=this.a
if(s!=null)s.ae()}},
hQ:function(a){var s,r,q=this
if(a.t(0,$.ap())){s=q.f
r=t.m
if(s==null)return H.b([0,0,0],r)
else return H.b([s.a,s.b,s.c],r)}else if(a.t(0,$.bs())){s=q.r
r=t.m
if(s==null)return H.b([0,1,0],r)
else return H.b([s.a,s.b,s.c],r)}else if(a.t(0,$.br())){s=q.x
r=t.m
if(s==null)return H.b([0,0,1],r)
else return H.b([s.a,s.b,s.c],r)}else if(a.t(0,$.aM())){s=q.y
r=t.m
if(s==null)return H.b([0,0],r)
else return H.b([s.a,s.b],r)}else if(a.t(0,$.bN())){s=q.z
r=t.m
if(s==null)return H.b([0,0,0],r)
else return H.b([s.a,s.b,s.c],r)}else if(a.t(0,$.dL())){s=q.Q
r=t.m
if(s==null)return H.b([1,1,1],r)
else return H.b([s.a,s.b,s.c],r)}else if(a.t(0,$.dM())){s=q.Q
r=t.m
if(s==null)return H.b([1,1,1,1],r)
else return H.b([s.a,s.b,s.c,s.d],r)}else if(a.t(0,$.cl()))return H.b([q.ch],t.m)
else if(a.t(0,$.bq())){s=q.cx
r=t.m
if(s==null)return H.b([-1,-1,-1,-1],r)
else return H.b([s.a,s.b,s.c,s.d],r)}else return H.b([],t.m)},
cc:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.fz()
r.d.F(0,new F.jT(q))
r.r=q.a.S()
q=r.a
if(q!=null){q.ae()
q=r.a.e
if(q!=null)q.aN(0)}return!0},
ca:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.fz()
r.d.F(0,new F.jS(q))
r.x=q.a.S()
q=r.a
if(q!=null){q.ae()
q=r.a.e
if(q!=null)q.aN(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
E:function(a){var s,r,q=this,p="-",o=H.b([],t.i)
o.push(C.a.au(J.a5(q.e),0))
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
o.push(V.H(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.i(0))
else o.push(p)
r=C.b.j(o,", ")
return a+"{"+r+"}"},
L:function(){return this.E("")}}
F.jT.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.w(0,r)}}}
F.jS.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.w(0,r)}}}
F.jM.prototype={
a2:function(){},
n:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.u("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.ae()
return!0},
br:function(a,b,c,d,e,f){var s=F.jL(a,null,b,c,null,d,e,f,0)
this.n(0,s)
return s},
gm:function(a){return this.c.length},
aJ:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].cc()
return!0},
cb:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].ca()
return!0},
hu:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.z==null){o=p.r.S()
if(!J.N(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.C(null)}}}}return!0},
i:function(a){return this.L()},
E:function(a){var s,r,q,p
this.a2()
s=H.b([],t.i)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p)s.push(r[p].E(a))
return C.b.j(s,"\n")},
L:function(){return this.E("")}}
F.jN.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
F:function(a,b){var s=this
C.b.F(s.b,b)
C.b.F(s.c,new F.jO(s,b))
C.b.F(s.d,new F.jP(s,b))},
i:function(a){return this.L()},
L:function(){var s,r,q,p=H.b([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
return C.b.j(p,"\n")}}
F.jO.prototype={
$1:function(a){if(!J.N(a.a,this.a))this.b.$1(a)}}
F.jP.prototype={
$1:function(a){var s=this.a
if(!J.N(a.a,s)&&!J.N(a.b,s))this.b.$1(a)}}
F.jQ.prototype={
gm:function(a){return this.b.length+this.c.length},
i:function(a){return this.L()},
L:function(){var s,r,q,p=H.b([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
return C.b.j(p,"\n")}}
F.jR.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.L()},
L:function(){var s,r,q,p=H.b([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
return C.b.j(p,"\n")}}
O.ec.prototype={
gp:function(){var s=this.x
return s==null?this.x=D.F():s},
J:function(a){var s=this.x
if(s!=null)s.C(a)},
aF:function(){return this.J(null)},
sbb:function(a){var s=this.r
$.E().toString
if(!(Math.abs(s-a)<1e-9)){this.r=a
s=new D.z("blurValue",s,a)
s.b=!0
this.J(s)}},
sdE:function(a){var s,r=this,q=r.e
if(q!=a){if(q!=null)q.gp().U(0,r.gay())
s=r.e
r.e=a
if(a!=null)a.gp().n(0,r.gay())
q=new D.z("colorTexture",s,r.e)
q.b=!0
r.J(q)}},
sc8:function(a){},
scJ:function(a){var s,r=this,q=$.m5
if(q==null){q=new V.cR(1,0,0,0,1,0,0,0,1)
$.m5=q
a=q}else a=q
if(!J.N(r.b,a)){s=r.b
r.b=a
q=new D.z("textureMatrix",s,a)
q.b=!0
r.J(q)}},
sc7:function(a){var s,r=this,q=$.mC
if(q==null){q=new V.db(1,0.00390625,0.0000152587890625,0)
$.mC=q
a=q}else a=q
if(!J.N(r.c,a)){s=r.c
r.c=a
q=new D.z("blurAdjust",s,a)
q.b=!0
r.J(q)}},
af:function(a,b){},
ab:function(a,b){if(b!=null)if(!C.b.B(a,b)){b.a=a.length
a.push(b)}},
cI:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.a
if(f==null){s="GaussianBlur_0".charCodeAt(0)==0?"GaussianBlur_0":"GaussianBlur_0"
r=a.fr.h(0,s)
if(r==null){f=a.a
r=new A.eb(f,s)
r.bK(f,s)
q=r.z=new A.il(!1,s)
p=new P.Q("")
p.a="precision mediump float;\n"
p.a="precision mediump float;\n\n"
p.a="precision mediump float;\n\nuniform sampler2D colorTxt;\n"
p.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\n"
p.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\nuniform vec2 blurScale;\n"
p.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\nuniform vec2 blurScale;\n\n"
p.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\nuniform vec2 blurScale;\n\nvarying vec2 txt2D;\n"
p.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\nuniform vec2 blurScale;\n\nvarying vec2 txt2D;\n\n"
f=t.m
q.aQ(p,3,H.b([0.75],f),H.b([0.5],f))
q.aQ(p,6,H.b([0.42857,2.14286],f),H.b([0.41667,0.08333],f))
q.aQ(p,9,H.b([0,1.8],f),H.b([0.5122,0.2439],f))
q.aQ(p,12,H.b([0,1.38462,3.23077],f),H.b([0.22703,0.31622,0.07027],f))
q.aQ(p,15,H.b([0.9375,2.8125],f),H.b([0.36184,0.13816],f))
q.aQ(p,18,H.b([0.47368,2.36842,4.26316],f),H.b([0.29916,0.16318,0.03766],f))
f=p.a+="void main()\n"
f+="{\n"
p.a=f
f+="   float blurOffset = abs(blurValue);\n"
p.a=f
f+="\n"
p.a=f
f+="   if     (blurOffset < 0.15) gl_FragColor = texture2D(colorTxt, txt2D);\n"
p.a=f
f+="   else if(blurOffset < 0.3)  gl_FragColor = blur3();\n"
p.a=f
f+="   else if(blurOffset < 0.45) gl_FragColor = blur6();\n"
p.a=f
f+="   else if(blurOffset < 0.6)  gl_FragColor = blur9();\n"
p.a=f
f+="   else if(blurOffset < 0.75) gl_FragColor = blur12();\n"
p.a=f
f+="   else if(blurOffset < 0.9)  gl_FragColor = blur15();\n"
p.a=f
f+="   else                       gl_FragColor = blur18();\n"
p.a=f
f=p.a=f+"}\n"
r.cw(0,u.f.charCodeAt(0)==0?u.f:u.f,f.charCodeAt(0)==0?f:f)
r.Q=r.x.h(0,"posAttr")
r.ch=r.x.h(0,"txtAttr")
r.cx=t.q.a(r.y.h(0,"projViewObjMat"))
r.cy=t.O.a(r.y.h(0,"txt2DMat"))
r.dy=t.c.a(r.y.h(0,"colorTxt"))
r.dx=t.aq.a(r.y.h(0,"blurScale"))
r.fx=t.n.a(r.y.h(0,"blurValue"))
a.c6(r)}f=g.a=r
b.e=null}q=f.z
f=b.e
if((!(f instanceof Z.bv)?b.e=null:f)==null){f=b.d
o=$.ap()
n=$.aM()
n=f.c9(new Z.dc(a.a),new Z.b1(o.a|n.a))
n.az($.ap()).e=g.a.Q.c
n.az($.aM()).e=g.a.ch.c
b.e=n}m=H.b([],t.A)
g.ab(m,g.e)
f=q.a
if(f)g.ab(m,g.f)
for(l=0;l<m.length;++l)m[l].X(a)
o=g.a
o.X(a)
n=g.e
o.aj(o.dy,n)
n=g.b
k=o.cy
k.toString
k.ag(n.a8(0,!0))
n=g.d
k=n.a
j=a.c
if(typeof k!=="number")return k.Z()
n=n.b
i=a.d
if(typeof n!=="number")return n.Z()
h=o.dx
h.a.uniform2f(h.d,k/j,n/i)
i=a.ged()
o=o.cx
o.toString
o.ag(i.a8(0,!0))
o=g.a
if(f){f=g.f
o.aj(o.fr,f)
f=g.c
o.db.er(f)}else{f=g.r
o=o.fx
o.a.uniform1f(o.d,f)}f=b.e
if(f instanceof Z.bv){f.X(a)
f.a5(a)
f.aw(a)}else b.e=null
f=g.a
f.toString
o=a.a
o.useProgram(null)
f.x.ci()
for(l=0;l<m.length;++l){f=m[l]
if(f.c){f.c=!1
o.activeTexture(33984+f.a)
o.bindTexture(3553,null)}}}}
O.eq.prototype={
gp:function(){var s=this.fr
return s==null?this.fr=D.F():s},
J:function(a){var s=this.fr
if(s!=null)s.C(a)},
aF:function(){return this.J(null)},
de:function(a){this.a=null
this.J(a)},
h6:function(){return this.de(null)},
fc:function(a,b){var s=new D.aQ()
s.b=!0
this.J(s)},
fe:function(a,b){var s=new D.aR()
s.b=!0
this.J(s)},
d3:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.C(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.gam()
n=d.h(0,p.gam())
d.l(0,o,n==null?1:n)}m=H.b([],t.am)
d.F(0,new O.iH(f,m))
C.b.b5(m,new O.iI())
l=new H.C(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.gam()
n=l.h(0,p.gam())
l.l(0,o,n==null?1:n)}k=H.b([],t.M)
l.F(0,new O.iJ(f,k))
C.b.b5(k,new O.iK())
j=new H.C(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.gam()
n=j.h(0,p.gam())
j.l(0,o,n==null?1:n)}i=H.b([],t.d1)
j.F(0,new O.iL(f,i))
C.b.b5(i,new O.iM())
h=new H.C(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.o)(e),++q){p=e[q]
r=p.gam()
o=h.h(0,p.gam())
h.l(0,r,o==null?1:o)}g=H.b([],t.cz)
h.F(0,new O.iN(f,g))
C.b.b5(g,new O.iO())
e=C.c.a7(f.e.a.length+3,4)
f.dy.toString
return A.oc(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
ab:function(a,b){if(b!=null)if(!C.b.B(a,b)){b.a=a.length
a.push(b)}},
af:function(a,b){var s
for(s=this.dx.a,s=new J.a6(s,s.length);s.v();)C.i.af(s.d,b)},
cI:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.d3()
s=b4.fr.h(0,b3.be)
if(s==null){s=A.ob(b3,b4.a)
b4.c6(s)}b3=b2.a=s
b5.e=null}r=b3.z
q=r.bt
b3=b5.e
if(!(b3 instanceof Z.bv))b3=b5.e=null
if(b3==null||!b3.d.t(0,q)){b3=r.k4
if(b3)b5.d.aJ()
p=r.r1
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.d.cb()
o.a.cb()
o=o.e
if(o!=null)o.aN(0)}o=r.rx
if(o){n=b5.d
m=n.e
if(m!=null)++m.d
n.a.hu()
n=n.e
if(n!=null)n.aN(0)}l=b5.d.c9(new Z.dc(b4.a),q)
l.az($.ap()).e=b2.a.Q.c
if(b3)l.az($.bs()).e=b2.a.cx.c
if(p)l.az($.br()).e=b2.a.ch.c
if(r.r2)l.az($.aM()).e=b2.a.cy.c
if(o)l.az($.bN()).e=b2.a.db.c
if(r.ry)l.az($.bq()).e=b2.a.dx.c
b5.e=l}k=H.b([],t.A)
b2.a.X(b4)
if(r.fr){b3=b2.a
p=b4.dx
p=p.ga4(p)
b3=b3.dy
b3.toString
b3.ag(p.a8(0,!0))}if(r.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.ga4(p)
o=b4.dx
o=b4.cx=p.q(0,o.ga4(o))
p=o}b3=b3.fr
b3.toString
b3.ag(p.a8(0,!0))}b3=b2.a
p=b4.ged()
b3=b3.fy
b3.toString
b3.ag(p.a8(0,!0))
if(r.go){b3=b2.a
p=b4.db
p=p.ga4(p)
b3=b3.fx
b3.toString
b3.ag(p.a8(0,!0))}if(r.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.ag(C.i.a8(p,!0))}if(r.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.ag(C.i.a8(p,!0))}if(r.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.ag(C.i.a8(p,!0))}if(r.b_>0){j=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,j)
for(i=0;i<j;++i){b3=b2.a
p=b2.e.a
if(i>=p.length)return H.d(p,i)
p=p[i]
b3=b3.r1
if(i>=b3.length)return H.d(b3,i)
b3=b3[i]
h=new Float32Array(H.cf(p.a8(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,h)}}b3=r.a
if(b3.a){p=b2.a
o=b2.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.ab(k,b2.f.d)
b3=b2.a
p=b2.f.d
b3.aj(b3.rx,p)}if(r.k1){b3=r.b
if(b3.a){p=b2.a
o=b2.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.ab(k,b2.r.d)
b3=b2.a
p=b2.r.d
b3.aj(b3.x2,p)}b3=r.c
if(b3.a){p=b2.a
o=b2.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.ab(k,b2.x.d)
b3=b2.a
p=b2.x.d
b3.aj(b3.b_,p)}b3=r.d
if(b3.a){p=b2.a
o=b2.y.f
p=p.bt
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.ab(k,b2.y.d)
b3=b2.a
p=b2.y.d
b3.aj(b3.dM,p)}b3=r.e
p=b3.a
if(p||b3.b||!1){o=b2.a
n=b2.z.ch
o=o.dP
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.z.f
p=p.dN
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.ab(k,b2.z.d)
b3=b2.a
p=b2.z.d
b3.aj(b3.dO,p)}b3=r.z
if(b3.length>0){g=new H.C(t.a)
for(p=b2.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gam()
c=g.h(0,d)
if(c==null)c=0
g.l(0,d,c+1)
b=J.cm(b2.a.cl.h(0,d),c)
n=e.gis()
m=$.aY
n=n.bk(m==null?$.aY=new V.a0(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.giw()
m=$.aY
n=n.bk(m==null?$.aY=new V.a0(0,0,0):m)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaY(e)
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
if(e.gdL()){n=e.gdv()
m=b.e
m.a.uniform1f(m.d,n)
n=e.gdw()
m=b.f
m.a.uniform1f(m.d,n)
n=e.gdz()
m=b.r
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.o)(b3),++f){o=b3[f].a
j=g.h(0,o)
if(j==null)j=0
o=b2.a.ck.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.Q
if(b3.length>0){p=b4.db
a=p.ga4(p)
a0=new H.C(t.a)
for(p=b2.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gam()
c=a0.h(0,d)
if(c==null)c=0
a0.l(0,d,c+1)
b=J.cm(b2.a.cn.h(0,d),c)
n=e.gdG(e)
n=new V.J(C.d.q(a.a,n.gdI(n))+C.d.q(a.b,n.gdJ(n))+C.d.q(a.c,n.gdK()),C.d.q(a.e,n.gdI(n))+C.d.q(a.f,n.gdJ(n))+C.d.q(a.r,n.gdK()),C.d.q(a.y,n.gdI(n))+C.d.q(a.z,n.gdJ(n))+C.d.q(a.Q,n.gdK())).S()
m=b.e
a1=n.a
a2=n.b
n=n.c
m.a.uniform3f(m.d,a1,a2,n)
n=e.gaY(e)
a2=b.f
a2.a.uniform3f(a2.d,n.a,n.b,n.c)
e.gav()
n=e.gdG(e)
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gbF()
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gbD(e)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gav()
if(!C.b.B(k,n)){n.a=k.length
k.push(n)}n=e.gav()
m=n.gby(n)
if(m){m=b.r
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.o)(b3),++f){o=b3[f].a
j=a0.h(0,o)
if(j==null)j=0
o=b2.a.cm.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.ch
if(b3.length>0){p=b4.db
a=p.ga4(p)
a3=new H.C(t.a)
for(p=b2.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gam()
c=a3.h(0,d)
if(c==null)c=0
a3.l(0,d,c+1)
b=J.cm(b2.a.cp.h(0,d),c)
a4=a.q(0,e.ga4(e))
n=e.ga4(e)
m=$.aY
n=n.bk(m==null?$.aY=new V.a0(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=$.aY
n=a4.bk(n==null?$.aY=new V.a0(0,0,0):n)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaY(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gav()
n=a4.cz(0)
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
h=new Float32Array(H.cf(new V.cR(m,a1,a2,a5,a6,a7,a8,a9,n).a8(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,h)
e.gav()
n=e.gav()
if(!C.b.B(k,n)){n.a=k.length
k.push(n)}n=e.gav()
m=n.gby(n)
if(m){m=b.f
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}e.gb4()
n=e.ges()
m=b.x
m.a.uniform4f(m.d,n.a,n.b,n.c,n.d)
n=e.gb4()
if(!C.b.B(k,n)){n.a=k.length
k.push(n)}n=e.gb4()
m=n.gby(n)
if(m){m=b.r
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}if(e.gdL()){n=e.gdv()
m=b.y
m.a.uniform1f(m.d,n)
n=e.gdw()
m=b.z
m.a.uniform1f(m.d,n)
n=e.gdz()
m=b.Q
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.o)(b3),++f){o=b3[f].a
j=a3.h(0,o)
if(j==null)j=0
o=b2.a.co.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.cx
if(b3.length>0){p=b4.db
a=p.ga4(p)
b1=new H.C(t.a)
for(p=b2.dx.x,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gam()
c=b1.h(0,d)
if(c==null)c=0
b1.l(0,d,c+1)
b=J.cm(b2.a.cr.h(0,d),c)
n=e.gi6(e)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gdG(e).S()
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=a.bk(e.gi6(e))
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaY(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gav()
n=e.gbF()
m=b.f
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gbD(e)
m=b.r
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.giG()
m=b.x
m.a.uniform1f(m.d,n)
n=e.giH()
m=b.y
m.a.uniform1f(m.d,n)
e.gav()
n=e.gav()
if(!C.b.B(k,n)){n.a=k.length
k.push(n)}n=e.gav()
m=n.gby(n)
if(m){m=b.dx
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}e.gb4()
n=e.ges()
m=b.z
m.a.uniform4f(m.d,n.a,n.b,n.c,n.d)
n=e.gb4()
if(!C.b.B(k,n)){n.a=k.length
k.push(n)}n=e.gb4()
m=n.gby(n)
if(m){m=b.dy
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}if(e.giv()){n=e.giu()
m=b.Q
m.a.uniform1f(m.d,n)
n=e.git()
m=b.ch
m.a.uniform1f(m.d,n)}if(e.gdL()){n=e.gdv()
m=b.cx
m.a.uniform1f(m.d,n)
n=e.gdw()
m=b.cy
m.a.uniform1f(m.d,n)
n=e.gdz()
m=b.db
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.o)(b3),++f){o=b3[f].a
j=b1.h(0,o)
if(j==null)j=0
o=b2.a.cq.h(0,o)
o.a.uniform1i(o.d,j)}}}if(r.f.b){b2.ab(k,b2.Q.d)
b3=b2.a
p=b2.Q.d
b3.aj(b3.dQ,p)}if(r.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.ga4(p).cz(0)}b3=b3.id
b3.toString
b3.ag(p.a8(0,!0))}if(r.db){b2.ab(k,b2.ch)
b3=b2.a
p=b2.ch
b3.h9(b3.dR,p)
b3=r.r
if(b3.a){p=b2.a
o=b2.cx.f
p=p.dS
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.ab(k,b2.cx.d)
b3=b2.a
p=b2.cx.d
b3.aj(b3.dT,p)}b3=r.x
p=b3.a
if(p||b3.b||!1){o=b2.a
n=b2.cy.ch
o=o.dU
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.cy.f
p=p.dV
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.ab(k,b2.cy.d)
b3=b2.a
p=b2.cy.d
b3.aj(b3.dW,p)}}b3=r.y
p=b3.a
o=!p
if(!o||b3.b||!1){if(p){p=b2.a
n=b2.db.f
p=p.dX
p.a.uniform1f(p.d,n)}if(b3.b){b2.ab(k,b2.db.d)
p=b2.a
n=b2.db.d
p.aj(p.dY,n)}p=b4.a
p.enable(3042)
p.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].X(b4)
p=b5.e
p.X(b4)
p.a5(b4)
p.aw(b4)
if(!o||b3.b||!1)b4.a.disable(3042)
for(b3=b4.a,i=0;i<k.length;++i){p=k[i]
if(p.c){p.c=!1
b3.activeTexture(33984+p.a)
b3.bindTexture(3553,null)}}p=b2.a
p.toString
b3.useProgram(null)
p.x.ci()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.d3().be}}
O.iH.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.dV(a,C.c.a7(b+3,4)*4))}}
O.iI.prototype={
$2:function(a,b){return J.dN(a.a,b.a)}}
O.iJ.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.e4(a,C.c.a7(b+3,4)*4))}}
O.iK.prototype={
$2:function(a,b){return J.dN(a.a,b.a)}}
O.iL.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.eM(a,C.c.a7(b+3,4)*4))}}
O.iM.prototype={
$2:function(a,b){return J.dN(a.a,b.a)}}
O.iN.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.f_(a,C.c.a7(b+3,4)*4))}}
O.iO.prototype={
$2:function(a,b){return J.dN(a.a,b.a)}}
O.iB.prototype={
aH:function(){var s,r=this
r.cU()
s=r.f
$.E().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.z(r.b,s,1)
s.b=!0
r.a.J(s)}}}
O.cQ.prototype={
J:function(a){return this.a.J(a)},
aF:function(){return this.J(null)},
aH:function(){},
dj:function(a){var s,r,q=this
if(!q.c.t(0,a)){s=q.c
if(s.a||s.b||!1)r=!(a.a||a.b||!1)
else r=!0
q.c=a
if(r)q.aH()
s=q.a
s.a=null
s.J(null)}}}
O.iC.prototype={}
O.aV.prototype={
dh:function(a){var s,r,q=this
if(!q.f.t(0,a)){s=q.f
q.f=a
r=new D.z(q.b+".color",s,a)
r.b=!0
q.a.J(r)}},
aH:function(){this.cU()
this.dh(new V.a8(1,1,1))},
saY:function(a,b){this.dj(new A.a9(!0,this.c.b,!1))
this.dh(b)}}
O.iE.prototype={}
O.iF.prototype={
aH:function(){var s,r=this
r.cV()
s=r.ch
$.E().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.z(r.b+".refraction",s,1)
s.b=!0
r.a.J(s)}}}
O.iG.prototype={
aH:function(){var s,r=this
r.cV()
s=r.ch
$.E().toString
if(!(Math.abs(s-100)<1e-9)){r.ch=100
s=new D.z(r.b+".shininess",s,100)
s.b=!0
r.a.J(s)}}}
O.eU.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.F():s},
J:function(a){var s=this.e
if(s!=null)s.C(a)},
aF:function(){return this.J(null)},
af:function(a,b){},
cI:function(a,b){var s,r,q,p,o,n,m=this,l="Skybox"
if(m.a==null){s=a.fr.h(0,l)
if(s==null){r=a.a
s=new A.eV(r,l)
s.bK(r,l)
s.cw(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.z=s.x.h(0,"posAttr")
r=t.n
s.Q=r.a(s.y.h(0,"fov"))
s.ch=r.a(s.y.h(0,"ratio"))
s.cx=t.r.a(s.y.h(0,"boxClr"))
s.cy=t.Q.a(s.y.h(0,"boxTxt"))
s.db=t.q.a(s.y.h(0,"viewMat"))
a.c6(s)}m.a=s}if(b.e==null){r=b.d.c9(new Z.dc(a.a),$.ap())
r.az($.ap()).e=m.a.z.c
b.e=r}r=m.c
if(r!=null){r.a=1
if(!r.c&&r.d>=6){r.c=!0
q=a.a
q.activeTexture(33985)
q.bindTexture(34067,r.b)}}r=a.d
q=a.c
p=m.a
p.X(a)
o=m.b
n=p.Q
n.a.uniform1f(n.d,o)
o=p.ch
o.a.uniform1f(o.d,r/q)
q=m.c
p.cy.eq(q)
q=m.d
r=p.cx
r.a.uniform3f(r.d,q.a,q.b,q.c)
q=a.db
q=q.ga4(q).cz(0)
p=p.db
p.toString
p.ag(q.a8(0,!0))
r=b.e
if(r instanceof Z.bv){r.X(a)
r.a5(a)
r.aw(a)}else b.e=null
r=m.a
r.toString
q=a.a
q.useProgram(null)
r.x.ci()
r=m.c
if(r!=null)if(r.c){r.c=!1
q.activeTexture(33984+r.a)
q.bindTexture(34067,null)}}}
O.fa.prototype={}
T.fd.prototype={}
T.jf.prototype={}
T.jg.prototype={
di:function(){if(!this.d){this.d=!0
var s=this.y
if(s!=null)s.cj()}},
gp:function(){var s=this.y
return s==null?this.y=D.F():s},
X:function(a){var s,r=this
if(!r.c&&r.d){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(3553,r.b)}}}
T.jh.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.F():s}}
T.ji.prototype={
hR:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=W.m1(a)
r=T.lh(o)
W.X(s,"load",new T.jk(this,r,s,!1,o,!1,!1),!1)
return r},
aS:function(a,b,c,d,e,f){var s=W.m1(c);++this.d
W.X(s,"load",new T.jj(this,s,!1,b,!1,d,a),!1)},
dg:function(a,b,c){var s,r,q,p
b=V.dK(b)
s=V.dK(a.width)
r=V.dK(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.kZ()
q.width=s
q.height=r
p=C.j.en(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.qg(p.getImageData(0,0,q.width,q.height))}}}
T.jk.prototype={
$1:function(a){var s,r,q=this,p=3553,o=q.b,n=q.c
o.e=n.width
o.f=n.height
s=q.a
r=s.dg(n,s.b,q.d)
o.r=n.width
o.x=n.height
n=s.a
n.bindTexture(p,q.e)
n.pixelStorei(37440,q.f?1:0)
C.p.eh(n,p,0,6408,6408,5121,r)
if(q.r)n.generateMipmap(p)
n.bindTexture(p,null)
o.di();++s.e}}
T.jj.prototype={
$1:function(a){var s=this,r=s.a,q=r.dg(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,s.e?1:0)
C.p.eh(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.cj()}++r.e}}
X.hT.prototype={
gp:function(){var s=this.fr
return s==null?this.fr=D.F():s},
a0:function(a){var s=this.fr
if(s!=null)s.C(a)},
sax:function(a,b){var s,r=this
if(b<1)b=1
s=r.a
if(s!==b){r.y=null
r.c=r.a=b
s=new D.z("width",s,b)
s.b=!0
r.a0(s)}},
sas:function(a,b){var s,r=this
if(b<1)b=1
s=r.b
if(s!==b){r.y=null
r.d=r.b=b
s=new D.z("height",s,b)
s.b=!0
r.a0(s)}},
X:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=3553,c=36161,b=36160
if(f.f){s=a.a
r=s.drawingBufferWidth
q=f.r
if(typeof r!=="number")return r.q()
f.sax(0,C.c.a_(r*q))
s=s.drawingBufferHeight
q=f.x
if(typeof s!=="number")return s.q()
f.sas(0,C.c.a_(s*q))}if(f.y==null){s=a.a
r=f.ch
q=f.a
p=f.b
o=s.getParameter(3379)
n=V.dK(q)
m=V.dK(p)
o=V.dK(o)
n=Math.min(n,o)
m=Math.min(m,o)
l=s.createTexture()
s.bindTexture(d,l)
s.texParameteri(d,10242,33071)
s.texParameteri(d,10243,33071)
s.texParameteri(d,10241,9729)
s.texParameteri(d,10240,9729)
C.p.ei(s,d,0,6408,n,m,0,6408,5121,e)
s.bindTexture(d,e)
k=T.lh(l)
k.e=q
k.f=p
k.r=n
k.x=m
k.di()
r.b=k.b
r.c=k.c
r.d=k.d
r.e=k.e
r.f=k.f
r.r=k.r
r.x=k.x
r=r.y
if(r!=null)r.cj()
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
a.c=C.d.a_(q*f.a)
p=r.d
a.d=C.d.a_(p*f.b)
j=r.a
i=f.c
if(typeof i!=="number")return H.v(i)
h=C.d.a_(j*i)
r=r.b
j=f.d
if(typeof j!=="number")return H.v(j)
s.viewport(h,C.d.a_(r*j),C.d.a_(q*i),C.d.a_(p*j))
s.clearDepth(f.db)
if(f.cy){r=f.cx
s.clearColor(r.a,r.b,r.c,r.d)
g=16640}else g=256
if(g>0)s.clear(g)},
aw:function(a){a.a.bindFramebuffer(36160,null)}}
X.kY.prototype={}
X.ik.prototype={
gp:function(){var s=this.x
return s==null?this.x=D.F():s},
X:function(a){var s,r,q,p,o,n,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
s=m.drawingBufferWidth
r=m.drawingBufferHeight
q=this.r
p=q.a
if(typeof s!=="number")return H.v(s)
o=C.d.a_(p*s)
p=q.b
if(typeof r!=="number")return H.v(r)
n=C.d.a_(p*r)
p=C.d.a_(q.c*s)
a.c=p
q=C.d.a_(q.d*r)
a.d=q
m.viewport(o,n,p,q)
m.clearDepth(this.c)
q=this.a
m.clearColor(q.a,q.b,q.c,q.d)
m.clear(16640)},
aw:function(a){}}
X.iq.prototype={
gp:function(){var s=this.b
return s==null?this.b=D.F():s},
X:function(a){var s
a.cy.bC(V.bX())
s=V.bX()
a.db.bC(s)},
aw:function(a){a.cy.aL()
a.db.aL()}}
X.eF.prototype={
gp:function(){var s=this.f
return s==null?this.f=D.F():s},
a0:function(a){var s=this.f
if(s!=null)s.C(a)},
eK:function(){return this.a0(null)},
X:function(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.c,h=a.d,g=j.c,f=j.d,e=j.e,d=e-f,c=1/Math.tan(g*0.5),b=V.aW(-c/(i/h),0,0,0,0,c,0,0,0,0,e/d,-e*f/d,0,0,1,0)
a.cy.bC(b)
i=$.m9
if(i==null){i=V.oe()
h=$.mA
if(h==null)h=$.mA=new V.J(0,1,0)
g=$.mz
s=(g==null?$.mz=new V.J(0,0,-1):g).S()
r=h.bd(s).S()
q=s.bd(r)
p=new V.J(i.a,i.b,i.c)
o=r.R(0).ad(p)
n=q.R(0).ad(p)
m=s.R(0).ad(p)
i=V.aW(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)
$.m9=i
l=i}else l=i
i=j.b
if(i!=null){k=i.b2(0,a,j)
if(k!=null)l=k.q(0,l)}a.db.bC(l)},
aw:function(a){a.cy.aL()
a.db.aL()}}
X.je.prototype={}
V.b9.prototype={
bm:function(a){this.b=new P.io(C.U)
this.c=null
this.d=H.b([],t.u)},
K:function(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.d
if(j.length===0)j.push(H.b([],t.k))
s=a.split("\n")
for(j=s.length,r=t.k,q=!0,p=0;p<j;++p){o=s[p]
if(q)q=!1
else k.d.push(H.b([],r))
n=document.createElement("div")
n.className="codePart"
m=k.b.eV(o,0,o.length)
l=m==null?o:m
C.S.ep(n,H.lI(l," ","&nbsp;"))
l=n.style
l.color=b
C.b.gaD(k.d).push(n)}},
eb:function(a,b){var s,r,q,p=this
p.d=H.b([],t.u)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bs()
r.toString
q=new H.p(s)
q=new P.bI(r.cK(new H.be(q,q.gm(q))).a())
for(;q.v();)p.bB(q.gA(q))}}
V.kS.prototype={
$1:function(a){var s=C.d.ej(this.a.ghM(),2)
if(s!=="0.00")P.lH(s+" fps")}}
V.e1.prototype={
bB:function(a){var s=this
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
bs:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()\\-+*%!&|=.,?:;",i="OpenDoubleStr",h="CloseDoubleStr",g="EscDoubleStr",f="OpenSingleStr",e="CloseSingleStr",d="EscSingleStr",c="Slash",b="Comment",a="EndComment",a0="MLComment",a1="MLCStar",a2="Whitespace",a3=L.jo()
a3.d=a3.k(0,p)
s=a3.k(0,p).j(0,o)
r=K.t(new H.p("_"))
s.a.push(r)
r=K.P("a","z")
s.a.push(r)
r=K.P("A","Z")
s.a.push(r)
r=a3.k(0,o).j(0,o)
s=K.t(new H.p("_"))
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
r=K.t(new H.p("."))
s.a.push(r)
r=a3.k(0,m).j(0,l)
s=K.P("0","9")
r.a.push(s)
s=a3.k(0,l).j(0,l)
r=K.P("0","9")
s.a.push(r)
r=a3.k(0,p).j(0,k)
s=K.t(new H.p(j))
r.a.push(s)
s=a3.k(0,k).j(0,k)
r=K.t(new H.p(j))
s.a.push(r)
r=a3.k(0,p).j(0,i)
s=K.t(new H.p('"'))
r.a.push(s)
s=a3.k(0,i).j(0,h)
r=K.t(new H.p('"'))
s.a.push(r)
r=a3.k(0,i).j(0,g)
s=K.t(new H.p("\\"))
r.a.push(s)
s=a3.k(0,g).j(0,i)
r=K.t(new H.p('"'))
s.a.push(r)
a3.k(0,i).j(0,i).a.push(new K.b7())
r=a3.k(0,p).j(0,f)
s=K.t(new H.p("'"))
r.a.push(s)
s=a3.k(0,f).j(0,e)
r=K.t(new H.p("'"))
s.a.push(r)
r=a3.k(0,f).j(0,d)
s=K.t(new H.p("\\"))
r.a.push(s)
s=a3.k(0,d).j(0,f)
r=K.t(new H.p("'"))
s.a.push(r)
a3.k(0,f).j(0,f).a.push(new K.b7())
r=a3.k(0,p).j(0,c)
s=K.t(new H.p("/"))
r.a.push(s)
s=a3.k(0,c).j(0,b)
r=K.t(new H.p("/"))
s.a.push(r)
r=a3.k(0,b).j(0,a)
s=K.t(new H.p("\n"))
r.a.push(s)
s=a3.k(0,b).j(0,b)
r=new K.ac()
q=t.B
r.a=H.b([],q)
s.a.push(r)
s=K.t(new H.p("\n"))
r.a.push(s)
s=a3.k(0,c).j(0,a0)
r=K.t(new H.p("*"))
s.a.push(r)
r=a3.k(0,a0).j(0,a1)
s=K.t(new H.p("*"))
r.a.push(s)
s=a3.k(0,a1).j(0,a0)
r=new K.ac()
r.a=H.b([],q)
s.a.push(r)
s=K.t(new H.p("*"))
r.a.push(s)
s=a3.k(0,a1).j(0,a)
r=K.t(new H.p("/"))
s.a.push(r)
r=a3.k(0,p).j(0,a2)
s=K.t(new H.p(" \n\t"))
r.a.push(s)
s=a3.k(0,a2).j(0,a2)
r=K.t(new H.p(" \n\t"))
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
r.aM(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aM(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aM(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a3}}
V.ea.prototype={
bB:function(a){var s=this
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
bs:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()[]\\-+*%!&|=.,?:;",i="Slash",h="Comment",g="EndComment",f="Preprocess",e="EndPreprocess",d="Whitespace",c=L.jo()
c.d=c.k(0,p)
s=c.k(0,p).j(0,o)
r=K.t(new H.p("_"))
s.a.push(r)
r=K.P("a","z")
s.a.push(r)
r=K.P("A","Z")
s.a.push(r)
r=c.k(0,o).j(0,o)
s=K.t(new H.p("_"))
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
r=K.t(new H.p("."))
s.a.push(r)
r=c.k(0,m).j(0,l)
s=K.P("0","9")
r.a.push(s)
s=c.k(0,l).j(0,l)
r=K.P("0","9")
s.a.push(r)
r=c.k(0,p).j(0,k)
s=K.t(new H.p(j))
r.a.push(s)
s=c.k(0,k).j(0,k)
r=K.t(new H.p(j))
s.a.push(r)
r=c.k(0,p).j(0,i)
s=K.t(new H.p("/"))
r.a.push(s)
s=c.k(0,i).j(0,h)
r=K.t(new H.p("/"))
s.a.push(r)
c.k(0,i).j(0,k).a.push(new K.b7())
r=c.k(0,h).j(0,g)
s=K.t(new H.p("\n"))
r.a.push(s)
s=c.k(0,h).j(0,h)
r=new K.ac()
q=t.B
r.a=H.b([],q)
s.a.push(r)
s=K.t(new H.p("\n"))
r.a.push(s)
s=c.k(0,p).j(0,f)
r=K.t(new H.p("#"))
s.a.push(r)
r=c.k(0,f).j(0,f)
s=new K.ac()
s.a=H.b([],q)
r.a.push(s)
r=K.t(new H.p("\n"))
s.a.push(r)
r=c.k(0,f).j(0,e)
s=K.t(new H.p("\n"))
r.a.push(s)
s=c.k(0,p).j(0,d)
r=K.t(new H.p(" \n\t"))
s.a.push(r)
r=c.k(0,d).j(0,d)
s=K.t(new H.p(" \n\t"))
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
s.aM(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],r))
s.aM(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],r))
s.aM(0,"Builtin",H.b(["gl_FragColor","gl_Position"],r))
return c}}
V.ee.prototype={
bB:function(a){var s=this,r="#111"
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
bs:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.jo()
j.d=j.k(0,q)
s=j.k(0,q).j(0,p)
r=K.t(new H.p("_"))
s.a.push(r)
r=K.P("a","z")
s.a.push(r)
r=K.P("A","Z")
s.a.push(r)
r=j.k(0,p).j(0,p)
s=K.t(new H.p("_"))
r.a.push(s)
s=K.P("0","9")
r.a.push(s)
s=K.P("a","z")
r.a.push(s)
s=K.P("A","Z")
r.a.push(s)
s=j.k(0,p).j(0,o)
r=K.t(new H.p("="))
s.a.push(r)
s.c=!0
s=j.k(0,q).j(0,n)
r=K.t(new H.p("</\\-!>="))
s.a.push(r)
r=j.k(0,n).j(0,n)
s=K.t(new H.p("</\\-!>="))
r.a.push(s)
s=j.k(0,q).j(0,m)
r=K.t(new H.p('"'))
s.a.push(r)
r=j.k(0,m).j(0,l)
s=K.t(new H.p('"'))
r.a.push(s)
s=j.k(0,m).j(0,"EscStr")
r=K.t(new H.p("\\"))
s.a.push(r)
r=j.k(0,"EscStr").j(0,m)
s=K.t(new H.p('"'))
r.a.push(s)
j.k(0,m).j(0,m).a.push(new K.b7())
j.k(0,q).j(0,k).a.push(new K.b7())
s=j.k(0,k).j(0,k)
r=new K.ac()
r.a=H.b([],t.B)
s.a.push(r)
s=K.t(new H.p('</\\-!>=_"'))
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
r.aM(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],t.i))
r=j.k(0,o)
r.d=r.a.N(o)
r=j.k(0,k)
r.d=r.a.N(k)
return j}}
V.eH.prototype={
eb:function(a,b){this.d=H.b([],t.u)
this.K(C.b.j(b,"\n"),"#111")},
bB:function(a){},
bs:function(){return null}}
V.iX.prototype={
dr:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this
if(k.c==null)return
s=k.a
r=P.ms().gcH().h(0,H.f(s))
if(r==null)if(d){c.$0()
k.dq(b)
q=!0}else q=!1
else if(r===b){c.$0()
q=!0}else q=!1
p=document
o=p.createElement("label")
n=o.style
n.whiteSpace="nowrap"
J.kW(k.c).n(0,o)
m=W.nZ("radio")
m.checked=q
m.name=s
W.X(m,"change",new V.iY(k,m,c,b),!1)
o.children
o.appendChild(m)
l=p.createElement("span")
l.textContent=b
o.children
o.appendChild(l)
J.kW(k.c).n(0,p.createElement("br"))},
aq:function(a,b,c){return this.dr(a,b,c,!1)},
dq:function(a){var s,r,q=P.ms(),p=t.X,o=P.o8(q.gcH(),p,p)
o.l(0,this.a,a)
s=q.ee(0,o)
p=window.history
r=s.gc4()
p.toString
p.replaceState(new P.k8([],[]).bG(""),"",r)}}
V.iY.prototype={
$1:function(a){var s=this
if(s.b.checked){s.c.$0()
s.a.dq(s.d)}}}
V.j9.prototype={
eE:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.X(o,"scroll",new V.jb(m),!1)},
dt:function(a){var s,r,q,p,o,n,m,l
this.hb()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.b.hP(a)
q.toString
p=new H.p(p)
p=new P.bI(q.cK(new H.be(p,p.gm(p))).a())
for(;p.v();){q=p.gA(p)
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
if(H.nd(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.d(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.kg(C.y,q,C.e,!1)
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
em:function(a){var s,r,q,p=new V.e1("dart")
p.bm("dart")
s=new V.ea("glsl")
s.bm("glsl")
r=new V.ee("html")
r.bm("html")
q=C.b.hI(H.b([p,s,r],t.b7),new V.jc(a))
if(q!=null)return q
p=new V.eH("plain")
p.bm("plain")
return p},
ds:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.b([],t.V)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(J.dJ(q).aa(q,"+")){b2[r]=C.a.al(q,1)
a8.push(1)
s=!0}else if(C.a.aa(q,"-")){b2[r]=C.a.al(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.em(b0)
p.eb(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m)
this.a.appendChild(n)
l=P.kg(C.y,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.lM()
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
for(e=q.length,a1=0;a1<q.length;q.length===e||(0,H.o)(q),++a1)a0.appendChild(q[a1])
d.appendChild(c)
d.appendChild(b)
d.appendChild(a0)
m.appendChild(d)}else for(e=p.d,a2=e.length,a3=b1,a1=0;a1<e.length;e.length===a2||(0,H.o)(e),++a1){q=e[a1]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className=a6;++a3
c.textContent=""+a3
b=o.createElement("td")
b.className=a7
for(a4=C.b.gM(q);a4.v();)b.appendChild(a4.gA(a4))
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
s=L.jo()
s.d=s.k(0,o)
r=s.k(0,o).j(0,n)
q=K.t(new H.p("*"))
r.a.push(q)
r.c=!0
r=s.k(0,n).j(0,n)
q=new K.ac()
p=t.B
q.a=H.b([],p)
r.a.push(q)
r=K.t(new H.p("*"))
q.a.push(r)
r=s.k(0,n).j(0,"BoldEnd")
q=K.t(new H.p("*"))
r.a.push(q)
r.c=!0
r=s.k(0,o).j(0,m)
q=K.t(new H.p("_"))
r.a.push(q)
r.c=!0
r=s.k(0,m).j(0,m)
q=new K.ac()
q.a=H.b([],p)
r.a.push(q)
r=K.t(new H.p("_"))
q.a.push(r)
r=s.k(0,m).j(0,l)
q=K.t(new H.p("_"))
r.a.push(q)
r.c=!0
r=s.k(0,o).j(0,k)
q=K.t(new H.p("`"))
r.a.push(q)
r.c=!0
r=s.k(0,k).j(0,k)
q=new K.ac()
q.a=H.b([],p)
r.a.push(q)
r=K.t(new H.p("`"))
q.a.push(r)
r=s.k(0,k).j(0,"CodeEnd")
q=K.t(new H.p("`"))
r.a.push(q)
r.c=!0
r=s.k(0,o).j(0,j)
q=K.t(new H.p("["))
r.a.push(q)
r.c=!0
r=s.k(0,j).j(0,i)
q=K.t(new H.p("|"))
r.a.push(q)
q=s.k(0,j).j(0,h)
r=K.t(new H.p("]"))
q.a.push(r)
q.c=!0
q=s.k(0,j).j(0,j)
r=new K.ac()
r.a=H.b([],p)
q.a.push(r)
q=K.t(new H.p("|]"))
r.a.push(q)
q=s.k(0,i).j(0,h)
r=K.t(new H.p("]"))
q.a.push(r)
q.c=!0
q=s.k(0,i).j(0,i)
r=new K.ac()
r.a=H.b([],p)
q.a.push(r)
q=K.t(new H.p("|]"))
r.a.push(q)
s.k(0,o).j(0,g).a.push(new K.b7())
q=s.k(0,g).j(0,g)
r=new K.ac()
r.a=H.b([],p)
q.a.push(r)
q=K.t(new H.p("*_`["))
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
V.jb.prototype={
$1:function(a){P.mo(C.n,new V.ja(this.a))}}
V.ja.prototype={
$0:function(){var s=C.d.a_(document.documentElement.scrollTop),r=this.a.style,q=H.f(-0.01*s)+"px"
r.top=q}}
V.jc.prototype={
$1:function(a){return a.a===this.a}}
K.kE.prototype={
$1:function(a){var s=this.a
s.d.sbb(a)
s.f.sbb(a)}}
K.kF.prototype={
$0:function(){this.a.$1(0)}}
K.kG.prototype={
$0:function(){this.a.$1(0.1)}}
K.kJ.prototype={
$0:function(){this.a.$1(0.2)}}
K.kK.prototype={
$0:function(){this.a.$1(0.3)}}
K.kL.prototype={
$0:function(){this.a.$1(0.4)}}
K.kM.prototype={
$0:function(){this.a.$1(0.5)}}
K.kN.prototype={
$0:function(){this.a.$1(0.6)}}
K.kO.prototype={
$0:function(){this.a.$1(0.7)}}
K.kP.prototype={
$0:function(){this.a.$1(0.8)}}
K.kQ.prototype={
$0:function(){this.a.$1(0.9)}}
K.kH.prototype={
$0:function(){this.a.$1(1)}}
K.kI.prototype={
$1:function(a){var s,r=null,q=this.a,p=this.b,o=p.d
if(o==null)o=r
else{o=o.a
o=o==null?r:o.c}s=t.s
q.ds("Vertex Shader","glsl",0,H.b(o.split("\n"),s))
p=p.d
if(p==null)p=r
else{p=p.a
p=p==null?r:p.d}q.ds("Fragment Shader","glsl",0,H.b(p.split("\n"),s))}};(function aliases(){var s=J.a.prototype
s.ew=s.i
s=J.bd.prototype
s.ey=s.i
s=P.h.prototype
s.ex=s.bH
s=W.D.prototype
s.bJ=s.ar
s=W.dp.prototype
s.ez=s.aC
s=K.ed.prototype
s.ev=s.aK
s.cT=s.i
s=O.cQ.prototype
s.cU=s.aH
s=O.aV.prototype
s.cV=s.aH})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"pu","o3",22)
r(P,"q9","oG",8)
r(P,"qa","oH",8)
r(P,"qb","oI",8)
q(P,"n4","q4",9)
r(W,"rJ","i9",23)
p(W,"qn",4,null,["$4"],["oJ"],15,0)
p(W,"qo",4,null,["$4"],["oK"],15,0)
var j
o(j=E.bz.prototype,"ge9",0,0,null,["$1","$0"],["ea","hZ"],0,0)
o(j,"ge7",0,0,null,["$1","$0"],["e8","hW"],0,0)
n(j,"ghU","hV",4)
n(j,"ghX","hY",4)
o(j=E.fe.prototype,"gcX",0,0,null,["$1","$0"],["cZ","cY"],0,0)
m(j,"gic","ef",9)
l(j=X.fy.prototype,"gfs","ft",5)
l(j,"gff","fg",5)
l(j,"gfl","fm",2)
l(j,"gfw","fz",10)
l(j,"gfu","fv",10)
l(j,"gfC","fD",2)
l(j,"gfG","fH",2)
l(j,"gfp","fq",2)
l(j,"gfE","fF",2)
l(j,"gfn","fo",2)
l(j,"gfI","fJ",20)
l(j,"gfK","fL",5)
l(j,"gh_","h0",6)
l(j,"gfW","fX",6)
l(j,"gfY","fZ",6)
o(j=D.cH.prototype,"gda",0,0,null,["$1","$0"],["dc","fA"],0,0)
l(j,"gfM","fN",21)
n(j,"gf9","fa",11)
n(j,"gfQ","fR",11)
k(V.a4.prototype,"gm","bf",7)
k(V.J.prototype,"gm","bf",7)
k(V.db.prototype,"gm","bf",7)
o(j=U.bT.prototype,"gaT",0,0,null,["$1","$0"],["O","ai"],0,0)
n(j,"gf7","f8",12)
n(j,"gfO","fP",12)
o(j=U.d8.prototype,"gaT",0,0,null,["$1","$0"],["O","ai"],0,0)
l(j,"gbU","bV",1)
l(j,"gbW","bX",1)
l(j,"gbY","bZ",1)
o(j=U.d9.prototype,"gaT",0,0,null,["$1","$0"],["O","ai"],0,0)
l(j,"gbU","bV",1)
l(j,"gbW","bX",1)
l(j,"gbY","bZ",1)
l(j,"gf0","f1",1)
l(j,"gf2","f3",1)
l(j,"ghi","hj",1)
l(j,"ghg","hh",1)
l(j,"ghe","hf",1)
l(U.da.prototype,"gf5","f6",1)
o(j=M.cn.prototype,"gW",0,0,null,["$1","$0"],["T","aE"],0,0)
n(j,"gfS","fT",13)
n(j,"gfU","fV",13)
o(M.cr.prototype,"gW",0,0,null,["$1","$0"],["T","aE"],0,0)
o(j=M.cx.prototype,"gW",0,0,null,["$1","$0"],["T","aE"],0,0)
n(j,"gfh","fi",4)
n(j,"gfj","fk",4)
o(M.cC.prototype,"gW",0,0,null,["$1","$0"],["T","aE"],0,0)
o(O.ec.prototype,"gay",0,0,null,["$1","$0"],["J","aF"],0,0)
o(j=O.eq.prototype,"gay",0,0,null,["$1","$0"],["J","aF"],0,0)
o(j,"gh5",0,0,null,["$1","$0"],["de","h6"],0,0)
n(j,"gfb","fc",14)
n(j,"gfd","fe",14)
o(O.cQ.prototype,"gay",0,0,null,["$1","$0"],["J","aF"],0,0)
o(O.eU.prototype,"gay",0,0,null,["$1","$0"],["J","aF"],0,0)
o(X.eF.prototype,"geJ",0,0,null,["$1","$0"],["a0","eK"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.M,null)
q(P.M,[H.l8,J.a,J.a6,P.K,P.dh,P.h,H.be,P.eg,H.cA,H.fv,H.cp,H.jr,H.iV,H.hj,H.bx,P.U,H.iu,H.eo,H.ei,H.au,H.fW,P.dv,P.cd,P.bI,P.fE,P.d_,P.f4,P.d1,P.kk,P.dn,P.k0,P.dg,P.i,P.hy,P.cO,P.dY,P.ip,P.ki,P.kh,P.az,P.aj,P.R,P.by,P.eE,P.cZ,P.fT,P.ij,P.aC,P.n,P.G,P.as,P.y,P.Q,P.bJ,P.jA,P.hd,W.i0,W.l3,W.ll,W.cc,W.L,W.cX,W.dp,W.ho,W.cB,W.am,W.k4,W.hz,P.k7,P.dx,P.hb,P.bk,K.b7,K.ed,K.iA,K.iZ,K.j4,L.f1,L.ff,L.fg,L.jn,O.a7,O.cS,E.hW,E.bz,E.bR,E.c2,E.fQ,E.j_,E.fe,Z.fC,Z.dc,Z.bv,Z.bV,Z.b1,D.hX,D.cy,D.S,X.dX,X.ek,X.it,X.iy,X.ar,X.iS,X.jp,X.fy,D.dU,D.e3,D.T,D.eK,D.eZ,V.a8,V.aB,V.ic,V.cR,V.bf,V.ad,V.a0,V.bh,V.eP,V.a4,V.J,V.db,U.d8,U.d9,U.da,M.cr,M.cx,M.cC,M.a_,A.dR,A.hQ,A.a9,A.il,A.dV,A.e4,A.eM,A.f_,A.iD,A.d3,A.d4,A.d6,A.d7,A.fk,A.jx,F.e6,F.en,F.eJ,F.j5,F.j6,F.j7,F.j8,F.fA,F.jM,F.jN,F.jQ,F.jR,O.fa,O.cQ,O.iE,T.ji,X.je,X.kY,X.iq,X.eF,V.b9,V.iX,V.j9])
q(J.a,[J.eh,J.cG,J.bd,J.x,J.bC,J.aS,H.cT,H.W,W.e,W.hO,W.bt,W.aP,W.I,W.fJ,W.aq,W.i3,W.i4,W.fL,W.cu,W.fN,W.i5,W.j,W.fU,W.aD,W.im,W.fY,W.bB,W.ix,W.iP,W.h1,W.h2,W.aF,W.h3,W.h5,W.aG,W.h9,W.hc,W.aH,W.he,W.aI,W.hk,W.aw,W.hq,W.jm,W.aJ,W.hs,W.jq,W.jF,W.hA,W.hC,W.hE,W.hG,W.hI,P.aT,P.h_,P.aX,P.h7,P.iW,P.hl,P.aZ,P.hu,P.hR,P.fG,P.eQ,P.hh])
q(J.bd,[J.eG,J.bH,J.aE])
r(J.ir,J.x)
q(J.bC,[J.cF,J.cE])
q(P.K,[H.el,H.eA,H.ej,H.fu,H.eS,H.fR,P.dQ,P.eB,P.ai,P.fw,P.ft,P.c6,P.dZ,P.e0])
r(P.cK,P.dh)
q(P.cK,[H.c8,W.fH,W.a2,P.e8])
r(H.p,H.c8)
q(P.h,[H.l,H.aU,H.b2,P.cD])
q(H.l,[H.cL,H.cI])
r(H.cv,H.aU)
q(P.eg,[H.ep,H.fD])
r(H.cP,H.cL)
r(H.cq,H.cp)
q(H.bx,[H.f9,H.is,H.ky,H.kz,H.kA,P.jV,P.jU,P.jW,P.jX,P.kd,P.kc,P.ku,P.k2,P.k3,P.iv,P.iz,P.jI,P.jJ,P.i6,P.i7,P.jE,P.jB,P.jC,P.jD,P.kf,P.ke,P.kp,P.ko,P.kq,P.kr,W.i8,W.iQ,W.iR,W.j3,W.jd,W.jY,W.iU,W.iT,W.k5,W.k6,W.kb,W.kj,P.k9,P.ka,P.kv,P.ih,P.ii,P.hS,E.j0,E.j1,E.j2,E.jl,D.ie,D.ig,F.kl,F.jT,F.jS,F.jO,F.jP,O.iH,O.iI,O.iJ,O.iK,O.iL,O.iM,O.iN,O.iO,T.jk,T.jj,V.kS,V.iY,V.jb,V.ja,V.jc,K.kE,K.kF,K.kG,K.kJ,K.kK,K.kL,K.kM,K.kN,K.kO,K.kP,K.kQ,K.kH,K.kI])
q(H.f9,[H.f2,H.bQ])
r(P.cN,P.U)
q(P.cN,[H.C,W.fF])
r(H.c0,H.W)
q(H.c0,[H.dj,H.dl])
r(H.dk,H.dj)
r(H.bE,H.dk)
r(H.dm,H.dl)
r(H.cU,H.dm)
q(H.cU,[H.ev,H.ew,H.ex,H.ey,H.ez,H.cV,H.c1])
r(H.dw,H.fR)
r(P.ds,P.cD)
r(P.k1,P.kk)
r(P.df,P.dn)
r(P.dA,P.cO)
r(P.c9,P.dA)
q(P.dY,[P.hU,P.ia])
r(P.e_,P.f4)
q(P.e_,[P.hV,P.io,P.jK,P.jH])
r(P.jG,P.ia)
q(P.R,[P.Z,P.k])
q(P.ai,[P.c4,P.ef])
r(P.fK,P.bJ)
q(W.e,[W.w,W.e7,W.bY,W.av,W.dq,W.ax,W.ae,W.dt,W.fB,W.ca,P.dT,P.b8])
q(W.w,[W.D,W.aA,W.cb])
q(W.D,[W.r,P.m])
q(W.r,[W.dO,W.dP,W.bP,W.bu,W.bw,W.bb,W.e9,W.bU,W.bW,W.eT,W.bj,W.d0,W.f7,W.f8,W.c7])
r(W.i_,W.aP)
r(W.cs,W.fJ)
q(W.aq,[W.i1,W.i2])
r(W.fM,W.fL)
r(W.ct,W.fM)
r(W.fO,W.fN)
r(W.e5,W.fO)
r(W.ak,W.bt)
r(W.fV,W.fU)
r(W.bS,W.fV)
r(W.fZ,W.fY)
r(W.bA,W.fZ)
r(W.b0,W.j)
q(W.b0,[W.bD,W.al,W.bG])
r(W.es,W.h1)
r(W.et,W.h2)
r(W.h4,W.h3)
r(W.eu,W.h4)
r(W.h6,W.h5)
r(W.cW,W.h6)
r(W.ha,W.h9)
r(W.eI,W.ha)
r(W.eR,W.hc)
r(W.dr,W.dq)
r(W.eX,W.dr)
r(W.hf,W.he)
r(W.eY,W.hf)
r(W.f3,W.hk)
r(W.hr,W.hq)
r(W.fb,W.hr)
r(W.du,W.dt)
r(W.fc,W.du)
r(W.ht,W.hs)
r(W.fh,W.ht)
r(W.bl,W.al)
r(W.hB,W.hA)
r(W.fI,W.hB)
r(W.dd,W.cu)
r(W.hD,W.hC)
r(W.fX,W.hD)
r(W.hF,W.hE)
r(W.di,W.hF)
r(W.hH,W.hG)
r(W.hg,W.hH)
r(W.hJ,W.hI)
r(W.hn,W.hJ)
r(W.fP,W.fF)
r(W.fS,P.d_)
r(W.hp,W.dp)
r(P.k8,P.k7)
r(P.aa,P.hb)
r(P.h0,P.h_)
r(P.em,P.h0)
r(P.h8,P.h7)
r(P.eC,P.h8)
r(P.c5,P.m)
r(P.hm,P.hl)
r(P.f5,P.hm)
r(P.hv,P.hu)
r(P.fi,P.hv)
r(P.dS,P.fG)
r(P.eD,P.b8)
r(P.hi,P.hh)
r(P.f0,P.hi)
q(K.ed,[K.ac,L.fj])
q(E.hW,[Z.dW,A.bF,T.fd])
q(D.S,[D.aQ,D.aR,D.z,X.eL])
q(X.eL,[X.cM,X.bZ,X.c_,X.d2])
q(O.a7,[D.cH,U.bT,M.cn])
q(D.hX,[U.hZ,U.V])
r(U.co,U.V)
q(A.bF,[A.eb,A.er,A.eV])
q(A.fk,[A.fm,A.ju,A.jv,A.jw,A.jt,A.fl,A.fn,A.fo,A.fp,A.jy,A.fq,A.d5,A.fr,A.fs])
q(O.fa,[O.ec,O.eq,O.eU])
q(O.cQ,[O.iB,O.iC,O.aV])
q(O.aV,[O.iF,O.iG])
q(T.fd,[T.jf,T.jh])
r(T.jg,T.jf)
q(X.je,[X.hT,X.ik])
q(V.b9,[V.e1,V.ea,V.ee,V.eH])
s(H.c8,H.fv)
s(H.dj,P.i)
s(H.dk,H.cA)
s(H.dl,P.i)
s(H.dm,H.cA)
s(P.dh,P.i)
s(P.dA,P.hy)
s(W.fJ,W.i0)
s(W.fL,P.i)
s(W.fM,W.L)
s(W.fN,P.i)
s(W.fO,W.L)
s(W.fU,P.i)
s(W.fV,W.L)
s(W.fY,P.i)
s(W.fZ,W.L)
s(W.h1,P.U)
s(W.h2,P.U)
s(W.h3,P.i)
s(W.h4,W.L)
s(W.h5,P.i)
s(W.h6,W.L)
s(W.h9,P.i)
s(W.ha,W.L)
s(W.hc,P.U)
s(W.dq,P.i)
s(W.dr,W.L)
s(W.he,P.i)
s(W.hf,W.L)
s(W.hk,P.U)
s(W.hq,P.i)
s(W.hr,W.L)
s(W.dt,P.i)
s(W.du,W.L)
s(W.hs,P.i)
s(W.ht,W.L)
s(W.hA,P.i)
s(W.hB,W.L)
s(W.hC,P.i)
s(W.hD,W.L)
s(W.hE,P.i)
s(W.hF,W.L)
s(W.hG,P.i)
s(W.hH,W.L)
s(W.hI,P.i)
s(W.hJ,W.L)
s(P.h_,P.i)
s(P.h0,W.L)
s(P.h7,P.i)
s(P.h8,W.L)
s(P.hl,P.i)
s(P.hm,W.L)
s(P.hu,P.i)
s(P.hv,W.L)
s(P.fG,P.U)
s(P.hh,P.i)
s(P.hi,W.L)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",Z:"double",R:"num",y:"String",az:"bool",as:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([S*])","~(S*)","~(al*)","as(@,@)","~(k*,h<bz*>*)","~(j*)","~(bG*)","Z*()","~(~())","~()","~(bD*)","~(k*,h<T*>*)","~(k*,h<V*>*)","~(k*,h<a_*>*)","~(k*,h<bf*>*)","az(D,y,y,cc)","@(@)","as(@)","as(M?,M?)","bk(@,@)","~(bl*)","az*(h<T*>*)","k(@,@)","y(e)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.p2(v.typeUniverse,JSON.parse('{"aE":"bd","eG":"bd","bH":"bd","qE":"j","qO":"j","qG":"b8","qF":"e","qV":"e","qX":"e","qD":"m","qP":"m","qH":"r","qS":"r","qQ":"w","qN":"w","rm":"ae","qL":"b0","qI":"aA","qY":"aA","qW":"al","qR":"bA","qU":"bE","qT":"W","eh":{"az":[]},"bd":{"m2":[],"aC":[]},"x":{"n":["1"],"l":["1"],"h":["1"]},"ir":{"x":["1"],"n":["1"],"l":["1"],"h":["1"]},"bC":{"Z":[],"R":[]},"cF":{"Z":[],"k":[],"R":[]},"cE":{"Z":[],"R":[]},"aS":{"y":[]},"el":{"K":[]},"p":{"i":["k"],"n":["k"],"l":["k"],"h":["k"],"i.E":"k"},"l":{"h":["1"]},"cL":{"l":["1"],"h":["1"]},"aU":{"h":["2"],"h.E":"2"},"cv":{"aU":["1","2"],"l":["2"],"h":["2"],"h.E":"2"},"cP":{"cL":["2"],"l":["2"],"h":["2"],"h.E":"2"},"b2":{"h":["1"],"h.E":"1"},"c8":{"i":["1"],"n":["1"],"l":["1"],"h":["1"]},"cp":{"G":["1","2"]},"cq":{"G":["1","2"]},"eA":{"K":[]},"ej":{"K":[]},"fu":{"K":[]},"bx":{"aC":[]},"f9":{"aC":[]},"f2":{"aC":[]},"bQ":{"aC":[]},"eS":{"K":[]},"C":{"U":["1","2"],"G":["1","2"]},"cI":{"l":["1"],"h":["1"],"h.E":"1"},"ei":{"mh":[]},"c0":{"A":["1"],"W":[]},"bE":{"i":["Z"],"A":["Z"],"n":["Z"],"W":[],"l":["Z"],"h":["Z"],"i.E":"Z"},"cU":{"i":["k"],"A":["k"],"n":["k"],"W":[],"l":["k"],"h":["k"]},"ev":{"i":["k"],"A":["k"],"n":["k"],"W":[],"l":["k"],"h":["k"],"i.E":"k"},"ew":{"i":["k"],"A":["k"],"n":["k"],"W":[],"l":["k"],"h":["k"],"i.E":"k"},"ex":{"i":["k"],"A":["k"],"n":["k"],"W":[],"l":["k"],"h":["k"],"i.E":"k"},"ey":{"i":["k"],"A":["k"],"n":["k"],"W":[],"l":["k"],"h":["k"],"i.E":"k"},"ez":{"i":["k"],"A":["k"],"n":["k"],"W":[],"l":["k"],"h":["k"],"i.E":"k"},"cV":{"i":["k"],"A":["k"],"n":["k"],"W":[],"l":["k"],"h":["k"],"i.E":"k"},"c1":{"i":["k"],"bk":[],"A":["k"],"n":["k"],"W":[],"l":["k"],"h":["k"],"i.E":"k"},"fR":{"K":[]},"dw":{"K":[]},"dv":{"d1":[]},"ds":{"h":["1"],"h.E":"1"},"df":{"dn":["1"],"l":["1"],"h":["1"]},"cD":{"h":["1"]},"cK":{"i":["1"],"n":["1"],"l":["1"],"h":["1"]},"cN":{"U":["1","2"],"G":["1","2"]},"U":{"G":["1","2"]},"cO":{"G":["1","2"]},"c9":{"G":["1","2"]},"dn":{"l":["1"],"h":["1"]},"Z":{"R":[]},"dQ":{"K":[]},"eB":{"K":[]},"ai":{"K":[]},"c4":{"K":[]},"ef":{"K":[]},"fw":{"K":[]},"ft":{"K":[]},"c6":{"K":[]},"dZ":{"K":[]},"eE":{"K":[]},"cZ":{"K":[]},"e0":{"K":[]},"k":{"R":[]},"n":{"l":["1"],"h":["1"]},"bJ":{"fx":[]},"hd":{"fx":[]},"fK":{"fx":[]},"r":{"D":[],"w":[],"e":[]},"dO":{"D":[],"w":[],"e":[]},"dP":{"D":[],"w":[],"e":[]},"bP":{"D":[],"w":[],"e":[]},"bu":{"D":[],"w":[],"e":[]},"bw":{"D":[],"w":[],"e":[]},"aA":{"w":[],"e":[]},"bb":{"D":[],"w":[],"e":[]},"ct":{"i":["aa<R>"],"n":["aa<R>"],"A":["aa<R>"],"l":["aa<R>"],"h":["aa<R>"],"i.E":"aa<R>"},"cu":{"aa":["R"]},"e5":{"i":["y"],"n":["y"],"A":["y"],"l":["y"],"h":["y"],"i.E":"y"},"fH":{"i":["D"],"n":["D"],"l":["D"],"h":["D"],"i.E":"D"},"D":{"w":[],"e":[]},"ak":{"bt":[]},"bS":{"i":["ak"],"n":["ak"],"A":["ak"],"l":["ak"],"h":["ak"],"i.E":"ak"},"e7":{"e":[]},"e9":{"D":[],"w":[],"e":[]},"bA":{"i":["w"],"n":["w"],"A":["w"],"l":["w"],"h":["w"],"i.E":"w"},"bU":{"D":[],"w":[],"e":[]},"bW":{"D":[],"w":[],"e":[]},"bD":{"j":[]},"bY":{"e":[]},"es":{"U":["y","@"],"G":["y","@"]},"et":{"U":["y","@"],"G":["y","@"]},"eu":{"i":["aF"],"n":["aF"],"A":["aF"],"l":["aF"],"h":["aF"],"i.E":"aF"},"al":{"j":[]},"a2":{"i":["w"],"n":["w"],"l":["w"],"h":["w"],"i.E":"w"},"w":{"e":[]},"cW":{"i":["w"],"n":["w"],"A":["w"],"l":["w"],"h":["w"],"i.E":"w"},"eI":{"i":["aG"],"n":["aG"],"A":["aG"],"l":["aG"],"h":["aG"],"i.E":"aG"},"eR":{"U":["y","@"],"G":["y","@"]},"eT":{"D":[],"w":[],"e":[]},"av":{"e":[]},"eX":{"i":["av"],"n":["av"],"A":["av"],"e":[],"l":["av"],"h":["av"],"i.E":"av"},"eY":{"i":["aH"],"n":["aH"],"A":["aH"],"l":["aH"],"h":["aH"],"i.E":"aH"},"f3":{"U":["y","y"],"G":["y","y"]},"bj":{"D":[],"w":[],"e":[]},"d0":{"D":[],"w":[],"e":[]},"f7":{"D":[],"w":[],"e":[]},"f8":{"D":[],"w":[],"e":[]},"c7":{"D":[],"w":[],"e":[]},"ax":{"e":[]},"ae":{"e":[]},"fb":{"i":["ae"],"n":["ae"],"A":["ae"],"l":["ae"],"h":["ae"],"i.E":"ae"},"fc":{"i":["ax"],"n":["ax"],"A":["ax"],"e":[],"l":["ax"],"h":["ax"],"i.E":"ax"},"bG":{"j":[]},"fh":{"i":["aJ"],"n":["aJ"],"A":["aJ"],"l":["aJ"],"h":["aJ"],"i.E":"aJ"},"b0":{"j":[]},"fB":{"e":[]},"bl":{"al":[],"j":[]},"ca":{"e":[]},"cb":{"w":[],"e":[]},"fI":{"i":["I"],"n":["I"],"A":["I"],"l":["I"],"h":["I"],"i.E":"I"},"dd":{"aa":["R"]},"fX":{"i":["aD?"],"n":["aD?"],"A":["aD?"],"l":["aD?"],"h":["aD?"],"i.E":"aD?"},"di":{"i":["w"],"n":["w"],"A":["w"],"l":["w"],"h":["w"],"i.E":"w"},"hg":{"i":["aI"],"n":["aI"],"A":["aI"],"l":["aI"],"h":["aI"],"i.E":"aI"},"hn":{"i":["aw"],"n":["aw"],"A":["aw"],"l":["aw"],"h":["aw"],"i.E":"aw"},"fF":{"U":["y","y"],"G":["y","y"]},"fP":{"U":["y","y"],"G":["y","y"]},"cc":{"am":[]},"cX":{"am":[]},"dp":{"am":[]},"hp":{"am":[]},"ho":{"am":[]},"dx":{"bB":[]},"e8":{"i":["D"],"n":["D"],"l":["D"],"h":["D"],"i.E":"D"},"aa":{"hb":["1"]},"em":{"i":["aT"],"n":["aT"],"l":["aT"],"h":["aT"],"i.E":"aT"},"eC":{"i":["aX"],"n":["aX"],"l":["aX"],"h":["aX"],"i.E":"aX"},"c5":{"m":[],"D":[],"w":[],"e":[]},"f5":{"i":["y"],"n":["y"],"l":["y"],"h":["y"],"i.E":"y"},"m":{"D":[],"w":[],"e":[]},"fi":{"i":["aZ"],"n":["aZ"],"l":["aZ"],"h":["aZ"],"i.E":"aZ"},"bk":{"n":["k"],"l":["k"],"h":["k"]},"dS":{"U":["y","@"],"G":["y","@"]},"dT":{"e":[]},"b8":{"e":[]},"eD":{"e":[]},"f0":{"i":["G<@,@>"],"n":["G<@,@>"],"l":["G<@,@>"],"h":["G<@,@>"],"i.E":"G<@,@>"},"a7":{"h":["1*"],"a7.T":"1"},"aQ":{"S":[]},"aR":{"S":[]},"z":{"S":[]},"cM":{"S":[]},"bZ":{"S":[]},"c_":{"S":[]},"eL":{"S":[]},"d2":{"S":[]},"dU":{"T":[]},"e3":{"T":[]},"cH":{"a7":["T*"],"h":["T*"],"a7.T":"T*"},"eK":{"T":[]},"eZ":{"T":[]},"co":{"V":[]},"bT":{"a7":["V*"],"V":[],"h":["V*"],"a7.T":"V*"},"d8":{"V":[]},"d9":{"V":[]},"da":{"V":[]},"cn":{"a7":["a_*"],"a_":[],"h":["a_*"],"a7.T":"a_*"},"cr":{"a_":[]},"cx":{"a_":[]},"cC":{"a_":[]},"eb":{"bF":[]},"er":{"bF":[]},"eV":{"bF":[]},"e1":{"b9":[]},"ea":{"b9":[]},"ee":{"b9":[]},"eH":{"b9":[]}}'))
H.p1(v.typeUniverse,JSON.parse('{"a6":1,"l":1,"be":1,"ep":2,"fD":1,"cA":1,"fv":1,"c8":1,"cp":2,"eo":1,"c0":1,"bI":1,"d_":1,"f4":2,"dg":1,"cD":1,"cK":1,"cN":2,"hy":2,"cO":2,"dh":1,"dA":2,"dY":2,"e_":2,"eg":1,"fS":1,"L":1,"cB":1,"aQ":1,"aR":1,"z":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",f:"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n"}
var t=(function rtii(){var s=H.lC
return{D:s("bP"),G:s("bt"),Y:s("bu"),gw:s("l<@>"),h:s("D"),C:s("K"),aD:s("j"),c8:s("ak"),bX:s("bS"),Z:s("aC"),v:s("bB"),fS:s("bU"),gk:s("bW"),o:s("x<am>"),s:s("x<y>"),gn:s("x<@>"),t:s("x<k>"),x:s("x<dR*>"),bb:s("x<dU*>"),am:s("x<dV*>"),g0:s("x<dW*>"),b7:s("x<b9*>"),cP:s("x<e3*>"),M:s("x<e4*>"),k:s("x<bb*>"),b:s("x<e6*>"),aZ:s("x<bV*>"),L:s("x<en*>"),u:s("x<n<bb*>*>"),B:s("x<iA*>"),h8:s("x<bf*>"),eb:s("x<eK*>"),cS:s("x<ad*>"),d1:s("x<eM*>"),p:s("x<eJ*>"),f2:s("x<a_*>"),du:s("x<eZ*>"),cz:s("x<f_*>"),eG:s("x<d_<M*>*>"),i:s("x<y*>"),fG:s("x<fa*>"),A:s("x<fd*>"),br:s("x<fj*>"),fj:s("x<fk*>"),d6:s("x<d3*>"),dv:s("x<d4*>"),hg:s("x<d5*>"),by:s("x<d6*>"),fF:s("x<d7*>"),j:s("x<fA*>"),m:s("x<Z*>"),V:s("x<k*>"),f:s("x<~(S*)*>"),T:s("cG"),eH:s("m2"),g:s("aE"),aU:s("A<@>"),h9:s("C<y*,bF*>"),cn:s("C<y*,f1*>"),dO:s("C<y*,y*>"),w:s("C<y*,fg*>"),en:s("C<k*,n<d3*>*>"),af:s("C<k*,n<d4*>*>"),gr:s("C<k*,n<d6*>*>"),gb:s("C<k*,n<d7*>*>"),J:s("C<k*,fm*>"),E:s("C<k*,az*>"),a:s("C<k*,k*>"),aH:s("n<@>"),eO:s("G<@,@>"),eM:s("cP<y*,y>"),bK:s("bY"),bZ:s("cT"),dD:s("W"),bm:s("c1"),P:s("as"),K:s("M"),I:s("aa<R>"),fv:s("mh"),ew:s("c5"),N:s("y"),g7:s("m"),bY:s("bj"),aW:s("c7"),aF:s("d1"),gc:s("bk"),ak:s("bH"),U:s("c9<y,y>"),R:s("fx"),gH:s("cb"),ac:s("a2"),cJ:s("az"),gR:s("Z"),z:s("@"),S:s("k"),fr:s("bw*"),l:s("bz*"),gj:s("T*"),dn:s("cM*"),hc:s("bf*"),d:s("bZ*"),a3:s("c_*"),ah:s("V*"),F:s("0&*"),_:s("M*"),bn:s("a_*"),X:s("y*"),eB:s("ff*"),eP:s("d2*"),n:s("fl*"),aq:s("fn*"),r:s("fo*"),y:s("fp*"),O:s("fq*"),q:s("d5*"),c:s("fr*"),Q:s("fs*"),e:s("k*"),dm:s("~(S*)*"),bG:s("m_<as>?"),W:s("M?"),H:s("R")}})();(function constants(){var s=hunkHelpers.makeConstList
C.r=W.bu.prototype
C.j=W.bw.prototype
C.S=W.bb.prototype
C.V=J.a.prototype
C.b=J.x.prototype
C.W=J.cE.prototype
C.c=J.cF.prototype
C.i=J.cG.prototype
C.d=J.bC.prototype
C.a=J.aS.prototype
C.X=J.aE.prototype
C.D=J.eG.prototype
C.p=P.eQ.prototype
C.E=W.d0.prototype
C.q=J.bH.prototype
C.F=W.bl.prototype
C.G=W.ca.prototype
C.H=new E.bR("Browser.chrome")
C.t=new E.bR("Browser.firefox")
C.u=new E.bR("Browser.edge")
C.I=new E.bR("Browser.other")
C.a6=new P.hV()
C.J=new P.hU()
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

C.Q=new P.eE()
C.e=new P.jG()
C.R=new P.jK()
C.f=new P.k1()
C.n=new P.by(0)
C.T=new P.by(5e6)
C.U=new P.ip("element",!1,!1,!1)
C.k=H.b(s([0,0,32776,33792,1,10240,0,0]),t.V)
C.Y=H.b(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.i)
C.l=H.b(s([0,0,65490,45055,65535,34815,65534,18431]),t.V)
C.m=H.b(s([0,0,26624,1023,65534,2047,65534,2047]),t.V)
C.Z=H.b(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.i)
C.x=H.b(s([]),t.i)
C.a_=H.b(s([0,0,32722,12287,65534,34815,65534,18431]),t.V)
C.y=H.b(s([0,0,65498,45055,65535,34815,65534,18431]),t.V)
C.h=H.b(s([0,0,24576,1023,65534,34815,65534,18431]),t.V)
C.z=H.b(s([0,0,32754,11263,65534,34815,65534,18431]),t.V)
C.A=H.b(s([0,0,65490,12287,65535,34815,65534,18431]),t.V)
C.B=H.b(s(["bind","if","ref","repeat","syntax"]),t.i)
C.o=H.b(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.i)
C.a0=new H.cq(0,{},C.x,H.lC("cq<y*,y*>"))
C.a1=new E.c2("OperatingSystem.windows")
C.C=new E.c2("OperatingSystem.mac")
C.a2=new E.c2("OperatingSystem.linux")
C.a3=new E.c2("OperatingSystem.other")
C.a4=new P.jH(!1)
C.a5=new P.cd(null,2)})();(function staticFields(){$.mH=null
$.aO=0
$.lS=null
$.lR=null
$.n5=null
$.n3=null
$.nb=null
$.kw=null
$.kC=null
$.lE=null
$.cg=null
$.dF=null
$.dG=null
$.lz=!1
$.aK=C.f
$.af=H.b([],H.lC("x<M>"))
$.bc=null
$.l2=null
$.lX=null
$.lW=null
$.de=P.lb(t.N,t.Z)
$.ib=null
$.m5=null
$.m6=null
$.ma=null
$.aY=null
$.mj=null
$.my=null
$.mw=null
$.mx=null
$.mB=null
$.mA=null
$.mz=null
$.mC=null
$.m9=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"qM","nh",function(){return H.qm("_$dart_dartClosure")})
s($,"qZ","ni",function(){return H.b_(H.js({
toString:function(){return"$receiver$"}}))})
s($,"r_","nj",function(){return H.b_(H.js({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"r0","nk",function(){return H.b_(H.js(null))})
s($,"r1","nl",function(){return H.b_(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"r4","no",function(){return H.b_(H.js(void 0))})
s($,"r5","np",function(){return H.b_(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"r3","nn",function(){return H.b_(H.mq(null))})
s($,"r2","nm",function(){return H.b_(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"r7","nr",function(){return H.b_(H.mq(void 0))})
s($,"r6","nq",function(){return H.b_(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"rn","lJ",function(){return P.oF()})
s($,"r8","ns",function(){return new P.jI().$0()})
s($,"r9","nt",function(){return new P.jJ().$0()})
s($,"ro","nx",function(){return H.od(H.cf(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"rr","nz",function(){return P.oq("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"rH","nA",function(){return P.pn()})
s($,"rp","ny",function(){return P.m4(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"rg","nw",function(){return Z.ay(0)})
s($,"ra","nu",function(){return Z.ay(511)})
s($,"ri","ap",function(){return Z.ay(1)})
s($,"rh","bs",function(){return Z.ay(2)})
s($,"rc","br",function(){return Z.ay(4)})
s($,"rj","aM",function(){return Z.ay(8)})
s($,"rk","bN",function(){return Z.ay(16)})
s($,"rd","dL",function(){return Z.ay(32)})
s($,"re","dM",function(){return Z.ay(64)})
s($,"rf","nv",function(){return Z.ay(96)})
s($,"rl","cl",function(){return Z.ay(128)})
s($,"rb","bq",function(){return Z.ay(256)})
s($,"qK","ng",function(){return new V.ic()})
s($,"qJ","E",function(){return $.ng()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cT,DataView:H.W,ArrayBufferView:H.W,Float32Array:H.bE,Float64Array:H.bE,Int16Array:H.ev,Int32Array:H.ew,Int8Array:H.ex,Uint16Array:H.ey,Uint32Array:H.ez,Uint8ClampedArray:H.cV,CanvasPixelArray:H.cV,Uint8Array:H.c1,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableColElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.hO,HTMLAnchorElement:W.dO,HTMLAreaElement:W.dP,HTMLBaseElement:W.bP,Blob:W.bt,HTMLBodyElement:W.bu,HTMLCanvasElement:W.bw,CDATASection:W.aA,CharacterData:W.aA,Comment:W.aA,ProcessingInstruction:W.aA,Text:W.aA,CSSPerspective:W.i_,CSSCharsetRule:W.I,CSSConditionRule:W.I,CSSFontFaceRule:W.I,CSSGroupingRule:W.I,CSSImportRule:W.I,CSSKeyframeRule:W.I,MozCSSKeyframeRule:W.I,WebKitCSSKeyframeRule:W.I,CSSKeyframesRule:W.I,MozCSSKeyframesRule:W.I,WebKitCSSKeyframesRule:W.I,CSSMediaRule:W.I,CSSNamespaceRule:W.I,CSSPageRule:W.I,CSSRule:W.I,CSSStyleRule:W.I,CSSSupportsRule:W.I,CSSViewportRule:W.I,CSSStyleDeclaration:W.cs,MSStyleCSSProperties:W.cs,CSS2Properties:W.cs,CSSImageValue:W.aq,CSSKeywordValue:W.aq,CSSNumericValue:W.aq,CSSPositionValue:W.aq,CSSResourceValue:W.aq,CSSUnitValue:W.aq,CSSURLImageValue:W.aq,CSSStyleValue:W.aq,CSSMatrixComponent:W.aP,CSSRotation:W.aP,CSSScale:W.aP,CSSSkew:W.aP,CSSTranslation:W.aP,CSSTransformComponent:W.aP,CSSTransformValue:W.i1,CSSUnparsedValue:W.i2,DataTransferItemList:W.i3,HTMLDivElement:W.bb,DOMException:W.i4,ClientRectList:W.ct,DOMRectList:W.ct,DOMRectReadOnly:W.cu,DOMStringList:W.e5,DOMTokenList:W.i5,Element:W.D,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,SubmitEvent:W.j,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ak,FileList:W.bS,FileWriter:W.e7,HTMLFormElement:W.e9,Gamepad:W.aD,History:W.im,HTMLCollection:W.bA,HTMLFormControlsCollection:W.bA,HTMLOptionsCollection:W.bA,ImageData:W.bB,HTMLImageElement:W.bU,HTMLInputElement:W.bW,KeyboardEvent:W.bD,Location:W.ix,MediaList:W.iP,MessagePort:W.bY,MIDIInputMap:W.es,MIDIOutputMap:W.et,MimeType:W.aF,MimeTypeArray:W.eu,PointerEvent:W.al,MouseEvent:W.al,DragEvent:W.al,Document:W.w,DocumentFragment:W.w,HTMLDocument:W.w,ShadowRoot:W.w,XMLDocument:W.w,DocumentType:W.w,Node:W.w,NodeList:W.cW,RadioNodeList:W.cW,Plugin:W.aG,PluginArray:W.eI,RTCStatsReport:W.eR,HTMLSelectElement:W.eT,SourceBuffer:W.av,SourceBufferList:W.eX,SpeechGrammar:W.aH,SpeechGrammarList:W.eY,SpeechRecognitionResult:W.aI,Storage:W.f3,CSSStyleSheet:W.aw,StyleSheet:W.aw,HTMLTableCellElement:W.bj,HTMLTableDataCellElement:W.bj,HTMLTableHeaderCellElement:W.bj,HTMLTableElement:W.d0,HTMLTableRowElement:W.f7,HTMLTableSectionElement:W.f8,HTMLTemplateElement:W.c7,TextTrack:W.ax,TextTrackCue:W.ae,VTTCue:W.ae,TextTrackCueList:W.fb,TextTrackList:W.fc,TimeRanges:W.jm,Touch:W.aJ,TouchEvent:W.bG,TouchList:W.fh,TrackDefaultList:W.jq,CompositionEvent:W.b0,FocusEvent:W.b0,TextEvent:W.b0,UIEvent:W.b0,URL:W.jF,VideoTrackList:W.fB,WheelEvent:W.bl,Window:W.ca,DOMWindow:W.ca,Attr:W.cb,CSSRuleList:W.fI,ClientRect:W.dd,DOMRect:W.dd,GamepadList:W.fX,NamedNodeMap:W.di,MozNamedAttrMap:W.di,SpeechRecognitionResultList:W.hg,StyleSheetList:W.hn,SVGLength:P.aT,SVGLengthList:P.em,SVGNumber:P.aX,SVGNumberList:P.eC,SVGPointList:P.iW,SVGScriptElement:P.c5,SVGStringList:P.f5,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,SVGTransform:P.aZ,SVGTransformList:P.fi,AudioBuffer:P.hR,AudioParamMap:P.dS,AudioTrackList:P.dT,AudioContext:P.b8,webkitAudioContext:P.b8,BaseAudioContext:P.b8,OfflineAudioContext:P.eD,WebGL2RenderingContext:P.eQ,SQLResultSetRowList:P.f0})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c0.$nativeSuperclassTag="ArrayBufferView"
H.dj.$nativeSuperclassTag="ArrayBufferView"
H.dk.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.dl.$nativeSuperclassTag="ArrayBufferView"
H.dm.$nativeSuperclassTag="ArrayBufferView"
H.cU.$nativeSuperclassTag="ArrayBufferView"
W.dq.$nativeSuperclassTag="EventTarget"
W.dr.$nativeSuperclassTag="EventTarget"
W.dt.$nativeSuperclassTag="EventTarget"
W.du.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.n9,[])
else K.n9([])})})()
//# sourceMappingURL=test.dart.js.map
