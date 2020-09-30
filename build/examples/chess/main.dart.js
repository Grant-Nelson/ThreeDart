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
a[c]=function(){a[c]=function(){H.qb(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lK"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lK"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lK(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={la:function la(){},
nZ:function(a,b){if(t.U.b(a))return new H.cA(a,b)
return new H.by(a,b)},
nS:function(){return new P.cW("No element")},
on:function(a,b){var s=J.aB(a)
if(typeof s!=="number")return s.t()
H.eF(a,0,s-1,b)},
eF:function(a,b,c,d){if(c-b<=32)H.om(a,b,c,d)
else H.ol(a,b,c,d)},
om:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.bM(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.aj()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
ol:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.a9(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.a9(a6+a7,2),d=e-h,c=e+h,b=J.bM(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.aj()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.aj()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.aj()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.aj()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.aj()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.aj()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.aj()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.aj()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.aj()
if(a4>0){s=a3
a3=a2
a2=s}b.l(a5,g,a)
b.l(a5,e,a1)
b.l(a5,f,a3)
b.l(a5,d,b.h(a5,a6))
b.l(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.C(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.a_()
if(n<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.aj()
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
if(typeof j!=="number")return j.a_()
if(j<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.aj()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.aj()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a_()
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
H.eF(a5,a6,r-2,a8)
H.eF(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.C(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.C(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a_()
m=q-1
if(n<0){b.l(a5,p,b.h(a5,r))
l=r+1
b.l(a5,r,b.h(a5,q))
b.l(a5,q,o)
r=l}else{b.l(a5,p,b.h(a5,q))
b.l(a5,q,o)}q=m
break}}H.eF(a5,r,q,a8)}else H.eF(a5,r,q,a8)},
P:function P(a){this.a=a},
l:function l(){},
c0:function c0(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
by:function by(a,b){this.a=a
this.b=b},
cA:function cA(a,b){this.a=a
this.b=b},
cN:function cN(a,b){this.a=null
this.b=a
this.c=b},
d0:function d0(a,b){this.a=a
this.b=b},
ff:function ff(a,b){this.a=a
this.b=b},
cD:function cD(){},
f9:function f9(){},
ca:function ca(){},
nh:function(a){var s,r=H.ng(a)
if(r!=null)return r
s="minified:"+a
return s},
q2:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
f:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.aj(a)
if(typeof s!="string")throw H.c(H.aq(a))
return s},
cU:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
od:function(a,b){var s,r
if(typeof a!="string")H.n(H.aq(a))
s=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(s==null)return null
if(3>=s.length)return H.e(s,3)
r=s[3]
if(r!=null)return parseInt(a,10)
if(s[2]!=null)return parseInt(a,16)
return null},
oc:function(a){var s,r
if(typeof a!="string")H.n(H.aq(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=J.kV(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
et:function(a){return H.o4(a)},
o4:function(a){var s,r,q
if(a instanceof P.B)return H.ap(H.dw(a),null)
if(J.dv(a)===C.K||t.o.b(a)){s=C.p(a)
if(H.mo(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.mo(q))return q}}return H.ap(H.dw(a),null)},
mo:function(a){var s=a!=="Object"&&a!==""
return s},
mn:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
og:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(!H.cf(q))throw H.c(H.aq(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.bF(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.aq(q))}return H.mn(p)},
of:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.cf(q))throw H.c(H.aq(q))
if(q<0)throw H.c(H.aq(q))
if(q>65535)return H.og(a)}return H.mn(a)},
oe:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.bF(s,10))>>>0,56320|s&1023)}throw H.c(P.b3(a,0,1114111,null,null))},
c7:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ob:function(a){var s=H.c7(a).getFullYear()+0
return s},
o9:function(a){var s=H.c7(a).getMonth()+1
return s},
o5:function(a){var s=H.c7(a).getDate()+0
return s},
o6:function(a){var s=H.c7(a).getHours()+0
return s},
o8:function(a){var s=H.c7(a).getMinutes()+0
return s},
oa:function(a){var s=H.c7(a).getSeconds()+0
return s},
o7:function(a){var s=H.c7(a).getMilliseconds()+0
return s},
b:function(a){throw H.c(H.aq(a))},
e:function(a,b){if(a==null)J.aB(a)
throw H.c(H.ck(a,b))},
ck:function(a,b){var s,r,q="index"
if(!H.cf(b))return new P.as(!0,b,q,null)
s=J.aB(a)
if(!(b<0)){if(typeof s!=="number")return H.b(s)
r=b>=s}else r=!0
if(r)return P.M(b,a,q,null,s)
return P.ew(b,q)},
pQ:function(a,b,c){if(a>c)return P.b3(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.b3(b,a,c,"end",null)
return new P.as(!0,b,"end",null)},
aq:function(a){return new P.as(!0,a,null,null)},
pL:function(a){if(typeof a!="number")throw H.c(H.aq(a))
return a},
c:function(a){var s,r
if(a==null)a=new P.ej()
s=new Error()
s.dartException=a
r=H.qc
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qc:function(){return J.aj(this.dartException)},
n:function(a){throw H.c(a)},
o:function(a){throw H.c(P.ct(a))},
aS:function(a){var s,r,q,p,o,n
a=H.nd(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jz(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
jA:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mA:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
mi:function(a,b){return new H.ei(a,b==null?null:b.method)},
lb:function(a,b){var s=b==null,r=s?null:b.method
return new H.e0(a,r,s?null:b.receiver)},
a5:function(a){if(a==null)return new H.iH(a)
if(a instanceof H.cC)return H.bg(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bg(a,a.dartException)
return H.pH(a)},
bg:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
pH:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.bF(r,16)&8191)===10)switch(q){case 438:return H.bg(a,H.lb(H.f(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bg(a,H.mi(H.f(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.nk()
o=$.nl()
n=$.nm()
m=$.nn()
l=$.nq()
k=$.nr()
j=$.np()
$.no()
i=$.nt()
h=$.ns()
g=p.av(s)
if(g!=null)return H.bg(a,H.lb(s,g))
else{g=o.av(s)
if(g!=null){g.method="call"
return H.bg(a,H.lb(s,g))}else{g=n.av(s)
if(g==null){g=m.av(s)
if(g==null){g=l.av(s)
if(g==null){g=k.av(s)
if(g==null){g=j.av(s)
if(g==null){g=m.av(s)
if(g==null){g=i.av(s)
if(g==null){g=h.av(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bg(a,H.mi(s,g))}}return H.bg(a,new H.f8(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cV()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bg(a,new P.as(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cV()
return a},
bf:function(a){var s
if(a instanceof H.cC)return a.b
if(a==null)return new H.dg(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.dg(a)},
pU:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
q1:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.k("Unsupported number of arguments for wrapped closure"))},
cj:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.q1)
a.$identity=s
return s},
nL:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.jd().constructor.prototype):Object.create(new H.cq(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aI
if(typeof r!=="number")return r.A()
$.aI=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.m0(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.nH(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.m0(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
nH:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.n8,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.nF:H.nE
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
nI:function(a,b,c,d){var s=H.m_
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
m0:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.nK(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nI(r,!p,s,b)
if(r===0){p=$.aI
if(typeof p!=="number")return p.A()
$.aI=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.f(H.l_())+";return "+n+"."+H.f(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aI
if(typeof p!=="number")return p.A()
$.aI=p+1
m+=p
return new Function("return function("+m+"){return this."+H.f(H.l_())+"."+H.f(s)+"("+m+");}")()},
nJ:function(a,b,c,d){var s=H.m_,r=H.nG
switch(b?-1:a){case 0:throw H.c(new H.eB("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
nK:function(a,b){var s,r,q,p,o,n,m=H.l_(),l=$.lY
if(l==null)l=$.lY=H.lX("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nJ(r,!p,s,b)
if(r===1){p="return function(){return this."+H.f(m)+"."+H.f(s)+"(this."+l+");"
o=$.aI
if(typeof o!=="number")return o.A()
$.aI=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.f(m)+"."+H.f(s)+"(this."+l+", "+n+");"
o=$.aI
if(typeof o!=="number")return o.A()
$.aI=o+1
return new Function(p+o+"}")()},
lK:function(a,b,c,d,e,f,g){return H.nL(a,b,c,d,!!e,!!f,g)},
nE:function(a,b){return H.h7(v.typeUniverse,H.dw(a.a),b)},
nF:function(a,b){return H.h7(v.typeUniverse,H.dw(a.c),b)},
m_:function(a){return a.a},
nG:function(a){return a.c},
l_:function(){var s=$.lZ
return s==null?$.lZ=H.lX("self"):s},
lX:function(a){var s,r,q,p=new H.cq("self","target","receiver","name"),o=J.l8(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.kW("Field name "+a+" not found."))},
qb:function(a){throw H.c(new P.dP(a))},
pY:function(a){return v.getIsolateTag(a)},
rw:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
q4:function(a){var s,r,q,p,o,n=$.n7.$1(a),m=$.kF[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kJ[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.n4.$2(a,n)
if(q!=null){m=$.kF[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kJ[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kM(s)
$.kF[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kJ[n]=s
return s}if(p==="-"){o=H.kM(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.nb(a,s)
if(p==="*")throw H.c(P.mB(n))
if(v.leafTags[n]===true){o=H.kM(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.nb(a,s)},
nb:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lP(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kM:function(a){return J.lP(a,!1,null,!!a.$iv)},
q5:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kM(s)
else return J.lP(s,c,null,null)},
q_:function(){if(!0===$.lN)return
$.lN=!0
H.q0()},
q0:function(){var s,r,q,p,o,n,m,l
$.kF=Object.create(null)
$.kJ=Object.create(null)
H.pZ()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.nc.$1(o)
if(n!=null){m=H.q5(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
pZ:function(){var s,r,q,p,o,n,m=C.z()
m=H.ci(C.A,H.ci(C.B,H.ci(C.q,H.ci(C.q,H.ci(C.C,H.ci(C.D,H.ci(C.E(C.p),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.n7=new H.kG(p)
$.n4=new H.kH(o)
$.nc=new H.kI(n)},
ci:function(a,b){return a(b)||b},
ma:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.l5("Illegal RegExp pattern ("+String(n)+")",a))},
ne:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
pT:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nd:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
nf:function(a,b,c){var s=H.qa(a,b,c)
return s},
qa:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nd(b),'g'),H.pT(c))},
jz:function jz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ei:function ei(a,b){this.a=a
this.b=b},
e0:function e0(a,b,c){this.a=a
this.b=b
this.c=c},
f8:function f8(a){this.a=a},
iH:function iH(a){this.a=a},
cC:function cC(a,b){this.a=a
this.b=b},
dg:function dg(a){this.a=a
this.b=null},
bU:function bU(){},
jh:function jh(){},
jd:function jd(){},
cq:function cq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eB:function eB(a){this.a=a},
w:function w(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
i9:function i9(a){this.a=a},
i8:function i8(a){this.a=a},
ii:function ii(a,b){this.a=a
this.b=b
this.c=null},
b_:function b_(a){this.a=a},
e5:function e5(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
i7:function i7(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fD:function fD(a){this.b=a},
jZ:function jZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dq:function(a){return a},
aU:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.ck(b,a))},
oX:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.pQ(a,b,c))
return b},
cR:function cR(){},
c4:function c4(){},
bC:function bC(){},
cQ:function cQ(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
cS:function cS(){},
eh:function eh(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
oj:function(a,b){var s=b.c
return s==null?b.c=H.lF(a,b.z,!0):s},
mt:function(a,b){var s=b.c
return s==null?b.c=H.dn(a,"bq",[b.z]):s},
mu:function(a){var s=a.y
if(s===6||s===7||s===8)return H.mu(a.z)
return s===11||s===12},
oi:function(a){return a.cy},
pV:function(a){return H.lG(v.typeUniverse,a,!1)},
bd:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bd(a,s,a0,a1)
if(r===s)return b
return H.mQ(a,r,!0)
case 7:s=b.z
r=H.bd(a,s,a0,a1)
if(r===s)return b
return H.lF(a,r,!0)
case 8:s=b.z
r=H.bd(a,s,a0,a1)
if(r===s)return b
return H.mP(a,r,!0)
case 9:q=b.Q
p=H.du(a,q,a0,a1)
if(p===q)return b
return H.dn(a,b.z,p)
case 10:o=b.z
n=H.bd(a,o,a0,a1)
m=b.Q
l=H.du(a,m,a0,a1)
if(n===o&&l===m)return b
return H.lD(a,n,l)
case 11:k=b.z
j=H.bd(a,k,a0,a1)
i=b.Q
h=H.pE(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mO(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.du(a,g,a0,a1)
o=b.z
n=H.bd(a,o,a0,a1)
if(f===g&&n===o)return b
return H.lE(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.ho("Attempted to substitute unexpected RTI kind "+c))}},
du:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bd(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
pF:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bd(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
pE:function(a,b,c,d){var s,r=b.a,q=H.du(a,r,c,d),p=b.b,o=H.du(a,p,c,d),n=b.c,m=H.pF(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fx()
s.a=q
s.b=o
s.c=m
return s},
ry:function(a,b){a[v.arrayRti]=b
return a},
pM:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.n8(s)
return a.$S()}return null},
n9:function(a,b){var s
if(H.mu(b))if(a instanceof H.bU){s=H.pM(a)
if(s!=null)return s}return H.dw(a)},
dw:function(a){var s
if(a instanceof P.B){s=a.$ti
return s!=null?s:H.lH(a)}if(Array.isArray(a))return H.oS(a)
return H.lH(J.dv(a))},
oS:function(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
mW:function(a){var s=a.$ti
return s!=null?s:H.lH(a)},
lH:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.p2(a,s)},
p2:function(a,b){var s=a instanceof H.bU?a.__proto__.__proto__.constructor:b,r=H.oR(v.typeUniverse,s.name)
b.$ccache=r
return r},
n8:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lG(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
p1:function(a){var s,r,q=this,p=t.K
if(q===p)return H.dr(q,a,H.p6)
if(!H.aV(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.dr(q,a,H.p9)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.cf
else if(s===t.cb||s===t.H)r=H.p5
else if(s===t.N)r=H.p7
else r=s===t.x?H.mX:null
if(r!=null)return H.dr(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.q3)){q.r="$i"+p
return H.dr(q,a,H.p8)}}else if(p===7)return H.dr(q,a,H.p_)
return H.dr(q,a,H.oY)},
dr:function(a,b,c){a.b=c
return a.b(b)},
p0:function(a){var s,r,q=this
if(!H.aV(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.oV
else if(q===t.K)r=H.oT
else r=H.oZ
q.a=r
return q.a(a)},
py:function(a){var s,r=a.y
if(!H.aV(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
oY:function(a){var s=this
if(a==null)return H.py(s)
return H.Y(v.typeUniverse,H.n9(a,s),null,s,null)},
p_:function(a){if(a==null)return!0
return this.z.b(a)},
p8:function(a){var s=this,r=s.r
if(a instanceof P.B)return!!a[r]
return!!J.dv(a)[r]},
rv:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mU(a,s)},
oZ:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mU(a,s)},
mU:function(a,b){throw H.c(H.oH(H.mH(a,H.n9(a,b),H.ap(b,null))))},
mH:function(a,b,c){var s=P.hU(a),r=H.ap(b==null?H.dw(a):b,null)
return s+": type '"+H.f(r)+"' is not a subtype of type '"+H.f(c)+"'"},
oH:function(a){return new H.dl("TypeError: "+a)},
a6:function(a,b){return new H.dl("TypeError: "+H.mH(a,null,b))},
p6:function(a){return a!=null},
oT:function(a){return a},
p9:function(a){return!0},
oV:function(a){return a},
mX:function(a){return!0===a||!1===a},
rh:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.a6(a,"bool"))},
rj:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a6(a,"bool"))},
ri:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a6(a,"bool?"))},
rk:function(a){if(typeof a=="number")return a
throw H.c(H.a6(a,"double"))},
rm:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a6(a,"double"))},
rl:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a6(a,"double?"))},
cf:function(a){return typeof a=="number"&&Math.floor(a)===a},
rn:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.a6(a,"int"))},
rp:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a6(a,"int"))},
ro:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a6(a,"int?"))},
p5:function(a){return typeof a=="number"},
rq:function(a){if(typeof a=="number")return a
throw H.c(H.a6(a,"num"))},
rs:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a6(a,"num"))},
rr:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a6(a,"num?"))},
p7:function(a){return typeof a=="string"},
rt:function(a){if(typeof a=="string")return a
throw H.c(H.a6(a,"String"))},
oU:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a6(a,"String"))},
ru:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a6(a,"String?"))},
pB:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.b.A(r,H.ap(a[q],b))
return s},
mV:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=[]
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.X,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.e(a6,i)
l=C.b.A(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.b.A(" extends ",H.ap(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.ap(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.b.A(a3,H.ap(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.b.A(a3,H.ap(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.lS(H.ap(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.f(a1)},
ap:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.ap(a.z,b)
return s}if(l===7){r=a.z
s=H.ap(r,b)
q=r.y
return J.lS(q===11||q===12?C.b.A("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.f(H.ap(a.z,b))+">"
if(l===9){p=H.pG(a.z)
o=a.Q
return o.length!==0?p+("<"+H.pB(o,b)+">"):p}if(l===11)return H.mV(a,b,null)
if(l===12)return H.mV(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.e(b,n)
return b[n]}return"?"},
pG:function(a){var s,r=H.ng(a)
if(r!=null)return r
s="minified:"+a
return s},
mR:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
oR:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lG(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dp(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dn(a,b,q)
n[b]=o
return o}else return m},
oP:function(a,b){return H.mT(a.tR,b)},
oO:function(a,b){return H.mT(a.eT,b)},
lG:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mN(H.mL(a,null,b,c))
r.set(b,s)
return s},
h7:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mN(H.mL(a,b,c,!0))
q.set(c,r)
return r},
oQ:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.lD(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bb:function(a,b){b.a=H.p0
b.b=H.p1
return b},
dp:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ay(null,null)
s.y=b
s.cy=c
r=H.bb(a,s)
a.eC.set(c,r)
return r},
mQ:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.oM(a,b,r,c)
a.eC.set(r,s)
return s},
oM:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aV(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ay(null,null)
q.y=6
q.z=b
q.cy=c
return H.bb(a,q)},
lF:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.oL(a,b,r,c)
a.eC.set(r,s)
return s},
oL:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aV(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.kK(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.kK(q.z))return q
else return H.oj(a,b)}}p=new H.ay(null,null)
p.y=7
p.z=b
p.cy=c
return H.bb(a,p)},
mP:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.oJ(a,b,r,c)
a.eC.set(r,s)
return s},
oJ:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aV(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dn(a,"bq",[b])
else if(b===t.P||b===t.T)return t.bc}q=new H.ay(null,null)
q.y=8
q.z=b
q.cy=c
return H.bb(a,q)},
oN:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ay(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bb(a,s)
a.eC.set(q,r)
return r},
h6:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
oI:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dn:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.h6(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ay(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bb(a,r)
a.eC.set(p,q)
return q},
lD:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.h6(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ay(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bb(a,o)
a.eC.set(q,n)
return n},
mO:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.h6(m)
if(j>0){s=l>0?",":""
r=H.h6(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.oI(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ay(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bb(a,o)
a.eC.set(q,r)
return r},
lE:function(a,b,c,d){var s,r=b.cy+("<"+H.h6(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.oK(a,b,c,r,d)
a.eC.set(r,s)
return s},
oK:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bd(a,b,r,0)
m=H.du(a,c,r,0)
return H.lE(a,n,m,c!==m)}}l=new H.ay(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bb(a,l)},
mL:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mN:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.oB(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mM(a,r,g,f,!1)
else if(q===46)r=H.mM(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.ba(a.u,a.e,f.pop()))
break
case 94:f.push(H.oN(a.u,f.pop()))
break
case 35:f.push(H.dp(a.u,5,"#"))
break
case 64:f.push(H.dp(a.u,2,"@"))
break
case 126:f.push(H.dp(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.lC(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.dn(p,n,o))
else{m=H.ba(p,a.e,n)
switch(m.y){case 11:f.push(H.lE(p,m,o,a.n))
break
default:f.push(H.lD(p,m,o))
break}}break
case 38:H.oC(a,f)
break
case 42:l=a.u
f.push(H.mQ(l,H.ba(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.lF(l,H.ba(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.mP(l,H.ba(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.fx()
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
H.lC(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.mO(p,H.ba(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.lC(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.oE(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.ba(a.u,a.e,h)},
oB:function(a,b,c,d){var s,r,q=b-48
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
n=H.mR(s,o.z)[p]
if(n==null)H.n('No "'+p+'" in "'+H.oi(o)+'"')
d.push(H.h7(s,o,n))}else d.push(p)
return m},
oC:function(a,b){var s=b.pop()
if(0===s){b.push(H.dp(a.u,1,"0&"))
return}if(1===s){b.push(H.dp(a.u,4,"1&"))
return}throw H.c(P.ho("Unexpected extended operation "+H.f(s)))},
ba:function(a,b,c){if(typeof c=="string")return H.dn(a,c,a.sEA)
else if(typeof c=="number")return H.oD(a,b,c)
else return c},
lC:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.ba(a,b,c[s])},
oE:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.ba(a,b,c[s])},
oD:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.ho("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.ho("Bad index "+c+" for "+b.i(0)))},
Y:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aV(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aV(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.Y(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.Y(a,b.z,c,d,e)
if(p===6){s=d.z
return H.Y(a,b,c,s,e)}if(r===8){if(!H.Y(a,b.z,c,d,e))return!1
return H.Y(a,H.mt(a,b),c,d,e)}if(r===7){s=H.Y(a,b.z,c,d,e)
return s}if(p===8){if(H.Y(a,b,c,d.z,e))return!0
return H.Y(a,b,c,H.mt(a,d),e)}if(p===7){s=H.Y(a,b,c,d.z,e)
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
if(!H.Y(a,k,c,j,e)||!H.Y(a,j,e,k,c))return!1}return H.mY(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.mY(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.p4(a,b,c,d,e)}return!1},
mY:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
p4:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.Y(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mR(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.Y(a,H.h7(a,b,l[p]),c,r[p],e))return!1
return!0},
kK:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aV(a))if(r!==7)if(!(r===6&&H.kK(a.z)))s=r===8&&H.kK(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
q3:function(a){var s
if(!H.aV(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
aV:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
mT:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ay:function ay(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fx:function fx(){this.c=this.b=this.a=null},
fs:function fs(){},
dl:function dl(a){this.a=a},
ng:function(a){return v.mangledGlobalNames[a]},
q6:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lP:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hi:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.lN==null){H.q_()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.c(P.mB("Return interceptor for "+H.f(s(a,o))))}q=a.constructor
p=q==null?null:q[J.mb()]
if(p!=null)return p
p=H.q4(a)
if(p!=null)return p
if(typeof a=="function")return C.L
s=Object.getPrototypeOf(a)
if(s==null)return C.u
if(s===Object.prototype)return C.u
if(typeof q=="function"){Object.defineProperty(q,J.mb(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
mb:function(){var s=$.mJ
return s==null?$.mJ=v.getIsolateTag("_$dart_js"):s},
m7:function(a){if(!H.cf(a))throw H.c(P.kX(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.b3(a,0,4294967295,"length",null))
return J.l8(new Array(a))},
m8:function(a){if(!H.cf(a)||a<0)throw H.c(P.kW("Length must be a non-negative integer: "+H.f(a)))
return new Array(a)},
l8:function(a){a.fixed$length=Array
return a},
nT:function(a,b){return J.dA(a,b)},
m9:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
nU:function(a,b){var s,r
for(s=a.length;b<s;){r=C.b.bw(a,b)
if(r!==32&&r!==13&&!J.m9(r))break;++b}return b},
l9:function(a,b){var s,r
for(;b>0;b=s){s=b-1
r=C.b.aL(a,s)
if(r!==32&&r!==13&&!J.m9(r))break}return b},
dv:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cI.prototype
return J.cH.prototype}if(typeof a=="string")return J.aM.prototype
if(a==null)return J.bZ.prototype
if(typeof a=="boolean")return J.i6.prototype
if(a.constructor==Array)return J.al.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.B)return a
return J.hi(a)},
pW:function(a){if(typeof a=="number")return J.bv.prototype
if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(a.constructor==Array)return J.al.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.B)return a
return J.hi(a)},
bM:function(a){if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(a.constructor==Array)return J.al.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.B)return a
return J.hi(a)},
lL:function(a){if(a==null)return a
if(a.constructor==Array)return J.al.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.B)return a
return J.hi(a)},
pX:function(a){if(typeof a=="number")return J.bv.prototype
if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.bK.prototype
return a},
lM:function(a){if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.bK.prototype
return a},
bN:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.B)return a
return J.hi(a)},
lS:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pW(a).A(a,b)},
C:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dv(a).m(a,b)},
E:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.q2(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bM(a).h(a,b)},
ny:function(a,b,c){return J.bN(a).hZ(a,b,c)},
nz:function(a,b,c,d){return J.bN(a).ij(a,b,c,d)},
dA:function(a,b){return J.pX(a).aB(a,b)},
kT:function(a,b){return J.bM(a).R(a,b)},
kU:function(a,b){return J.lL(a).F(a,b)},
lT:function(a,b){return J.lL(a).K(a,b)},
lU:function(a){return J.bN(a).gdT(a)},
nA:function(a){return J.bN(a).ge_(a)},
a8:function(a){return J.dv(a).gU(a)},
bR:function(a){return J.lL(a).gS(a)},
aB:function(a){return J.bM(a).gk(a)},
lV:function(a,b){return J.lM(a).iO(a,b)},
nB:function(a,b){return J.bN(a).jp(a,b)},
lW:function(a,b,c){return J.lM(a).bs(a,b,c)},
aj:function(a){return J.dv(a).i(a)},
kV:function(a){return J.lM(a).eF(a)},
a:function a(){},
i6:function i6(){},
bZ:function bZ(){},
bw:function bw(){},
eq:function eq(){},
bK:function bK(){},
aD:function aD(){},
al:function al(){},
e_:function e_(){},
a1:function a1(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bv:function bv(){},
cI:function cI(){},
cH:function cH(){},
aM:function aM(){}},P={
ot:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.pI()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cj(new P.k0(q),1)).observe(s,{childList:true})
return new P.k_(q,s,r)}else if(self.setImmediate!=null)return P.pJ()
return P.pK()},
ou:function(a){self.scheduleImmediate(H.cj(new P.k1(a),0))},
ov:function(a){self.setImmediate(H.cj(new P.k2(a),0))},
ow:function(a){P.lw(C.h,a)},
lw:function(a,b){var s=C.c.a9(a.a,1000)
return P.oF(s<0?0:s,b)},
mz:function(a,b){var s=C.c.a9(a.a,1000)
return P.oG(s<0?0:s,b)},
oF:function(a,b){var s=new P.dk()
s.fj(a,b)
return s},
oG:function(a,b){var s=new P.dk()
s.fk(a,b)
return s},
af:function(a){return new P.fg(new P.a_($.H,a.ab("a_<0>")),a.ab("fg<0>"))},
ae:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
a4:function(a,b){P.oW(a,b)},
ad:function(a,b){b.cq(0,a)},
ac:function(a,b){b.bK(H.a5(a),H.bf(a))},
oW:function(a,b){var s,r,q=new P.ks(b),p=new P.kt(b)
if(a instanceof P.a_)a.dH(q,p,t.z)
else{s=t.z
if(t.e.b(a))a.cT(q,p,s)
else{r=new P.a_($.H,t.v)
r.a=4
r.c=a
r.dH(q,p,s)}}},
ah:function(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.H.ex(new P.kC(s))},
re:function(a){return new P.cd(a,1)},
ox:function(){return C.P},
oy:function(a){return new P.cd(a,3)},
pb:function(a){return new P.dh(a)},
mI:function(a,b){var s,r,q
b.a=1
try{a.cT(new P.k8(b),new P.k9(b),t.P)}catch(q){s=H.a5(q)
r=H.bf(q)
P.q7(new P.ka(b,s,r))}},
k7:function(a,b){var s,r
for(;s=a.a,s===2;)a=a.c
if(s>=4){r=b.bD()
b.a=a.a
b.c=a.c
P.cc(b,r)}else{r=b.c
b.a=2
b.c=a
a.dB(r)}},
cc:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e={},d=e.a=a
for(s=t.e;!0;){r={}
q=d.a===8
if(b==null){if(q){s=d.c
P.kz(f,f,d.b,s.a,s.b)}return}r.a=b
p=b.a
for(d=b;p!=null;d=p,p=o){d.a=null
P.cc(e.a,d)
r.a=p
o=p.a}n=e.a
m=n.c
r.b=q
r.c=m
l=!q
if(l){k=d.c
k=(k&1)!==0||(k&15)===8}else k=!0
if(k){j=d.b.b
if(q){k=n.b===j
k=!(k||k)}else k=!1
if(k){P.kz(f,f,n.b,m.a,m.b)
return}i=$.H
if(i!==j)$.H=j
else i=f
d=d.c
if((d&15)===8)new P.kf(r,e,q).$0()
else if(l){if((d&1)!==0)new P.ke(r,m).$0()}else if((d&2)!==0)new P.kd(e,r).$0()
if(i!=null)$.H=i
d=r.c
if(s.b(d)){h=r.a.b
if(d.a>=4){g=h.c
h.c=null
b=h.bE(g)
h.a=d.a
h.c=d.c
e.a=d
continue}else P.k7(d,h)
return}}h=r.a.b
g=h.c
h.c=null
b=h.bE(g)
d=r.b
n=r.c
if(!d){h.a=4
h.c=n}else{h.a=8
h.c=n}e.a=h
d=h}},
pz:function(a,b){if(t.R.b(a))return b.ex(a)
if(t.b6.b(a))return a
throw H.c(P.kX(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
px:function(){var s,r
for(s=$.cg;s!=null;s=$.cg){$.dt=null
r=s.b
$.cg=r
if(r==null)$.ds=null
s.a.$0()}},
pD:function(){$.lI=!0
try{P.px()}finally{$.dt=null
$.lI=!1
if($.cg!=null)$.lR().$1(P.n5())}},
n0:function(a){var s=new P.fh(a),r=$.ds
if(r==null){$.cg=$.ds=s
if(!$.lI)$.lR().$1(P.n5())}else $.ds=r.b=s},
pC:function(a){var s,r,q,p=$.cg
if(p==null){P.n0(a)
$.dt=$.ds
return}s=new P.fh(a)
r=$.dt
if(r==null){s.b=p
$.cg=$.dt=s}else{q=r.b
s.b=q
$.dt=r.b=s
if(q==null)$.ds=s}},
q7:function(a){var s=null,r=$.H
if(C.e===r){P.ch(s,s,C.e,a)
return}P.ch(s,s,r,r.cl(a))},
qA:function(a){P.hn(a,"stream")
return new P.fW()},
lv:function(a,b){var s=$.H
if(s===C.e)return P.lw(a,b)
return P.lw(a,s.cl(b))},
oq:function(a,b){var s=$.H
if(s===C.e)return P.mz(a,b)
return P.mz(a,s.dR(b,t.M))},
hp:function(a,b){var s=b==null?P.kY(a):b
P.hn(a,"error")
return new P.dE(a,s)},
kY:function(a){var s
if(t.C.b(a)){s=a.gbr()
if(s!=null)return s}return C.H},
kz:function(a,b,c,d,e){P.pC(new P.kA(d,e))},
mZ:function(a,b,c,d){var s,r=$.H
if(r===c)return d.$0()
$.H=c
s=r
try{r=d.$0()
return r}finally{$.H=s}},
n_:function(a,b,c,d,e){var s,r=$.H
if(r===c)return d.$1(e)
$.H=c
s=r
try{r=d.$1(e)
return r}finally{$.H=s}},
pA:function(a,b,c,d,e,f){var s,r=$.H
if(r===c)return d.$2(e,f)
$.H=c
s=r
try{r=d.$2(e,f)
return r}finally{$.H=s}},
ch:function(a,b,c,d){var s=C.e!==c
if(s)d=!(!s||!1)?c.cl(d):c.ip(d)
P.n0(d)},
k0:function k0(a){this.a=a},
k_:function k_(a,b,c){this.a=a
this.b=b
this.c=c},
k1:function k1(a){this.a=a},
k2:function k2(a){this.a=a},
dk:function dk(){this.c=0},
kp:function kp(a,b){this.a=a
this.b=b},
ko:function ko(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fg:function fg(a,b){this.a=a
this.b=!1
this.$ti=b},
ks:function ks(a){this.a=a},
kt:function kt(a){this.a=a},
kC:function kC(a){this.a=a},
cd:function cd(a,b){this.a=a
this.b=b},
ce:function ce(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dh:function dh(a){this.a=a},
d2:function d2(){},
d1:function d1(a,b){this.a=a
this.$ti=b},
d4:function d4(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d},
a_:function a_(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
k4:function k4(a,b){this.a=a
this.b=b},
kc:function kc(a,b){this.a=a
this.b=b},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a},
ka:function ka(a,b,c){this.a=a
this.b=b
this.c=c},
k6:function k6(a,b){this.a=a
this.b=b},
kb:function kb(a,b){this.a=a
this.b=b},
k5:function k5(a,b,c){this.a=a
this.b=b
this.c=c},
kf:function kf(a,b,c){this.a=a
this.b=b
this.c=c},
kg:function kg(a){this.a=a},
ke:function ke(a,b){this.a=a
this.b=b},
kd:function kd(a,b){this.a=a
this.b=b},
fh:function fh(a){this.a=a
this.b=null},
eL:function eL(){},
eM:function eM(){},
fW:function fW(){},
cX:function cX(){},
dE:function dE(a,b){this.a=a
this.b=b},
kr:function kr(){},
kA:function kA(a,b){this.a=a
this.b=b},
kk:function kk(){},
km:function km(a,b){this.a=a
this.b=b},
kl:function kl(a,b){this.a=a
this.b=b},
kn:function kn(a,b,c){this.a=a
this.b=b
this.c=c},
nX:function(a,b,c){return H.pU(a,new H.w(b.ab("@<0>").di(c).ab("w<1,2>")))},
nW:function(a,b){return new H.w(a.ab("@<0>").di(b).ab("w<1,2>"))},
md:function(a){return new P.d5(a.ab("d5<0>"))},
lB:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oA:function(a,b){var s=new P.d6(a,b)
s.c=a.e
return s},
nR:function(a,b,c){var s,r
if(P.lJ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.ag.push(a)
try{P.pa(a,s)}finally{if(0>=$.ag.length)return H.e($.ag,-1)
$.ag.pop()}r=P.mx(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
l7:function(a,b,c){var s,r
if(P.lJ(a))return b+"..."+c
s=new P.bH(b)
$.ag.push(a)
try{r=s
r.a=P.mx(r.a,a,", ")}finally{if(0>=$.ag.length)return H.e($.ag,-1)
$.ag.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lJ:function(a){var s,r
for(s=$.ag.length,r=0;r<s;++r)if(a===$.ag[r])return!0
return!1},
pa:function(a,b){var s,r,q,p,o,n,m,l=a.gS(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.w())return
s=H.f(l.gH(l))
b.push(s)
k+=s.length+2;++j}if(!l.w()){if(j<=5)return
if(0>=b.length)return H.e(b,-1)
r=b.pop()
if(0>=b.length)return H.e(b,-1)
q=b.pop()}else{p=l.gH(l);++j
if(!l.w()){if(j<=4){b.push(H.f(p))
return}r=H.f(p)
if(0>=b.length)return H.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gH(l);++j
for(;l.w();p=o,o=n){n=l.gH(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.e(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.f(p)
r=H.f(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
mf:function(a){var s,r={}
if(P.lJ(a))return"{...}"
s=new P.bH("")
try{$.ag.push(a)
s.a+="{"
r.a=!0
J.lT(a,new P.il(r,s))
s.a+="}"}finally{if(0>=$.ag.length)return H.e($.ag,-1)
$.ag.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
d5:function d5(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
kj:function kj(a){this.a=a
this.c=this.b=null},
d6:function d6(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cG:function cG(){},
cK:function cK(){},
F:function F(){},
cM:function cM(){},
il:function il(a,b){this.a=a
this.b=b},
aE:function aE(){},
dd:function dd(){},
d7:function d7(){},
dK:function dK(){},
dO:function dO(){},
hR:function hR(){},
jK:function jK(){},
jL:function jL(){},
kq:function kq(a){this.b=0
this.c=a},
lO:function(a){var s=H.od(a,null)
if(s!=null)return s
throw H.c(P.l5(a,null))},
pS:function(a){var s=H.oc(a)
if(s!=null)return s
throw H.c(P.l5("Invalid double",a))},
nP:function(a){if(a instanceof H.bU)return a.i(0)
return"Instance of '"+H.f(H.et(a))+"'"},
le:function(a,b,c){var s,r=c?J.m8(a):J.m7(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
lf:function(a,b){var s,r=[]
for(s=J.bR(a);s.w();)r.push(s.gH(s))
if(b)return r
return J.l8(r)},
nY:function(a,b,c){var s,r,q=J.m7(a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.e(q,s)
q[s]=r}return q},
ls:function(a){var s,r=a,q=r.length,p=P.lm(0,null,q)
if(typeof p!=="number")return p.a_()
s=p<q
return H.of(s?r.slice(0,p):r)},
lo:function(a){return new H.i7(a,H.ma(a,!1,!0,!1,!1,!1))},
mx:function(a,b,c){var s=J.bR(b)
if(!s.w())return a
if(c.length===0){do a+=H.f(s.gH(s))
while(s.w())}else{a+=H.f(s.gH(s))
for(;s.w();)a=a+c+H.f(s.gH(s))}return a},
mS:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.j){s=$.nx().b
s=s.test(b)}else s=!1
if(s)return b
r=C.G.iy(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.e(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.oe(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
nN:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
nO:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dQ:function(a){if(a>=10)return""+a
return"0"+a},
m3:function(a){return new P.bo(1000*a)},
hU:function(a){if(typeof a=="number"||H.mX(a)||null==a)return J.aj(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nP(a)},
ho:function(a){return new P.dD(a)},
kW:function(a){return new P.as(!1,null,null,a)},
kX:function(a,b,c){return new P.as(!0,a,b,c)},
hn:function(a,b){if(a==null)throw H.c(new P.as(!1,null,b,"Must not be null"))
return a},
ew:function(a,b){return new P.c8(null,null,!0,a,b,"Value not in range")},
b3:function(a,b,c,d,e){return new P.c8(b,c,!0,a,d,"Invalid value")},
lm:function(a,b,c){var s
if(typeof c!=="number")return H.b(c)
s=a>c
if(s)throw H.c(P.b3(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.b(c)
s=b>c}else s=!0
if(s)throw H.c(P.b3(b,a,c,"end",null))
return b}return c},
mq:function(a,b){if(a<0)throw H.c(P.b3(a,0,null,b,null))
return a},
M:function(a,b,c,d,e){var s=e==null?J.aB(b):e
return new P.dY(s,!0,a,c,"Index out of range")},
x:function(a){return new P.fa(a)},
mB:function(a){return new P.f7(a)},
mw:function(a){return new P.cW(a)},
ct:function(a){return new P.dN(a)},
k:function(a){return new P.fu(a)},
l5:function(a,b){return new P.i_(a,b)},
hj:function(a){H.q6(a)},
bL:function bL(){},
au:function au(a,b){this.a=a
this.b=b},
a7:function a7(){},
bo:function bo(a){this.a=a},
hL:function hL(){},
hM:function hM(){},
I:function I(){},
dD:function dD(a){this.a=a},
ej:function ej(){},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c8:function c8(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dY:function dY(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fa:function fa(a){this.a=a},
f7:function f7(a){this.a=a},
cW:function cW(a){this.a=a},
dN:function dN(a){this.a=a},
em:function em(){},
cV:function cV(){},
dP:function dP(a){this.a=a},
fu:function fu(a){this.a=a},
i_:function i_(a,b){this.a=a
this.b=b},
t:function t(){},
h:function h(){},
dZ:function dZ(){},
aO:function aO(){},
S:function S(){},
W:function W(){},
a0:function a0(){},
B:function B(){},
ln:function ln(){},
aa:function aa(){},
fZ:function fZ(){},
G:function G(){},
bH:function bH(a){this.a=a},
pP:function(a){var s
if(t.s.b(a)){s=J.nA(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.dm(a.data,a.height,a.width)},
pO:function(a){if(a instanceof P.dm)return{data:a.a,height:a.b,width:a.c}
return a},
be:function(a){var s,r,q,p,o
if(a==null)return null
s=P.nW(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
s.l(0,o,a[o])}return s},
pN:function(a){var s={}
a.K(0,new P.kD(s))
return s},
dm:function dm(a,b,c){this.a=a
this.b=b
this.c=c},
kD:function kD(a){this.a=a},
dV:function dV(a,b){this.a=a
this.b=b},
hY:function hY(){},
hZ:function hZ(){},
ki:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oz:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
fO:function fO(){},
ax:function ax(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
c_:function c_(){},
e4:function e4(){},
c5:function c5(){},
ek:function ek(){},
iM:function iM(){},
eN:function eN(){},
m:function m(){},
c9:function c9(){},
eV:function eV(){},
fB:function fB(){},
fC:function fC(){},
fK:function fK(){},
fL:function fL(){},
fX:function fX(){},
fY:function fY(){},
h4:function h4(){},
h5:function h5(){},
hs:function hs(){},
dF:function dF(){},
ht:function ht(a){this.a=a},
dG:function dG(){},
aY:function aY(){},
el:function el(){},
fi:function fi(){},
ey:function ey(){},
eI:function eI(){},
fT:function fT(){},
fU:function fU(){}},W={
nC:function(){var s=document.createElement("a")
return s},
l1:function(){var s=document.createElement("canvas")
return s},
hQ:function(a){return"wheel"},
m5:function(a){return W.nQ(a,null,null).ax(new W.i3(),t.N)},
nQ:function(a,b,c){var s=new P.a_($.H,t.Y),r=new P.d1(s,t.f),q=new XMLHttpRequest()
C.J.j3(q,"GET",a,!0)
W.R(q,"load",new W.i4(q,r),!1)
W.R(q,"error",r.giu(),!1)
q.send()
return s},
m6:function(a){var s=document.createElement("img")
s.src=a
return s},
kh:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mK:function(a,b,c,d){var s=W.kh(W.kh(W.kh(W.kh(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
R:function(a,b,c,d){var s=W.n3(new W.k3(c),t.D)
if(s!=null&&!0)J.nz(a,b,s,!1)
return new W.ft(a,b,s,!1)},
n3:function(a,b){var s=$.H
if(s===C.e)return a
return s.dR(a,b)},
p:function p(){},
hl:function hl(){},
dB:function dB(){},
dC:function dC(){},
dI:function dI(){},
bm:function bm(){},
aC:function aC(){},
hD:function hD(){},
L:function L(){},
cw:function cw(){},
hE:function hE(){},
at:function at(){},
aJ:function aJ(){},
hF:function hF(){},
hG:function hG(){},
hH:function hH(){},
hJ:function hJ(){},
cy:function cy(){},
cz:function cz(){},
dR:function dR(){},
hK:function hK(){},
fk:function fk(a,b){this.a=a
this.b=b},
Q:function Q(){},
i:function i(){},
d:function d(){},
bp:function bp(){},
dT:function dT(){},
dU:function dU(){},
dW:function dW(){},
br:function br(){},
i2:function i2(){},
bs:function bs(){},
aZ:function aZ(){},
i3:function i3(){},
i4:function i4(a,b){this.a=a
this.b=b},
bt:function bt(){},
bu:function bu(){},
bY:function bY(){},
bx:function bx(){},
ij:function ij(){},
iD:function iD(){},
e8:function e8(){},
iE:function iE(a){this.a=a},
e9:function e9(){},
iF:function iF(a){this.a=a},
bA:function bA(){},
ea:function ea(){},
am:function am(){},
fj:function fj(a){this.a=a},
y:function y(){},
cT:function cT(){},
bD:function bD(){},
er:function er(){},
bE:function bE(){},
eA:function eA(){},
iW:function iW(a){this.a=a},
eC:function eC(){},
b4:function b4(){},
eG:function eG(){},
bF:function bF(){},
eH:function eH(){},
bG:function bG(){},
eK:function eK(){},
je:function je(a){this.a=a},
b5:function b5(){},
b6:function b6(){},
b7:function b7(){},
aF:function aF(){},
eO:function eO(){},
eP:function eP(){},
ju:function ju(){},
bI:function bI(){},
bJ:function bJ(){},
eU:function eU(){},
jx:function jx(){},
aT:function aT(){},
jJ:function jJ(){},
fd:function fd(){},
b9:function b9(){},
cb:function cb(){},
fl:function fl(){},
d3:function d3(){},
fy:function fy(){},
d8:function d8(){},
fS:function fS(){},
h_:function h_(){},
l4:function l4(a,b){this.a=a
this.$ti=b},
ft:function ft(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
k3:function k3(a){this.a=a},
lA:function lA(a){this.$ti=a},
K:function K(){},
cE:function cE(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fv:function fv(){},
fw:function fw(){},
fz:function fz(){},
fA:function fA(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(){},
fM:function fM(){},
fN:function fN(){},
fP:function fP(){},
de:function de(){},
df:function df(){},
fQ:function fQ(){},
fR:function fR(){},
fV:function fV(){},
h0:function h0(){},
h1:function h1(){},
di:function di(){},
dj:function dj(){},
h2:function h2(){},
h3:function h3(){},
h8:function h8(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(){},
he:function he(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(){}},K={
a3:function(a){var s=new K.iX()
s.f2(a)
return s},
hm:function hm(){},
dX:function dX(){},
b1:function b1(){this.a=null},
iX:function iX(){this.a=null}},L={eJ:function eJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},eS:function eS(a,b,c){this.a=a
this.b=b
this.c=c},eT:function eT(a){this.b=a
this.c=null},jv:function jv(){var _=this
_.d=_.c=_.b=_.a=null},jy:function jy(a){this.b=a
this.a=this.c=null},
na:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=V.ok("3Dart Chess")
b.b5(["This example is in development and may still have a few issues and glitches."])
s=W.l1()
s.className="pageLargeCanvas"
s.id="targetCanvas"
b.a.appendChild(s)
b.ii(["buttons"])
b.dL(1,"About")
b.b5(["Click and drag to see the board from different angles. ","Click without dragging to select a piece, unselect a piece, or pick which movement should be made. ","The game will start with white's turn."])
b.b5(["3Dart Chess is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ","to create simple browser driven video games. ","This example has no server backing it so currently there is no networked two player mode. ","It would take very little to turn this into a simple online game."])
b.b5(["\xab[Back to Examples List|../../]"])
b.dL(1,"Help wanted")
b.b5(["There is still much to be done, many cool new features, and several little bugs. ","If you would like to contribute to this example, have an idea, find a bug, or just want ","to learn more about it, check out the ","[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/chess]."])
b.b5(["There are tons of ways to contribute. You could even start your own example. ","See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."])
r=new Q.i1()
r.a=!0
q=Q.mv()
b=$.aH()
p=$.aX()
b=b.a
p=p.a
if(typeof b!=="number")return b.W()
if(typeof p!=="number")return H.b(p)
o=b|p
n=$.aG().a
if(typeof n!=="number")return H.b(n)
m=1&n
q.B(new Q.j(1,1),new Q.r((o|m)>>>0))
l=$.cm()
l=l.a
if(typeof l!=="number")return l.W()
k=l|p
q.B(new Q.j(1,2),new Q.r((k|m)>>>0))
j=$.aW()
j=j.a
if(typeof j!=="number")return j.W()
i=j|p
q.B(new Q.j(1,3),new Q.r((i|m)>>>0))
h=$.bh()
h=h.a
if(typeof h!=="number")return h.W()
q.B(new Q.j(1,4),new Q.r((h|p|m)>>>0))
g=$.ai()
g=g.a
if(typeof g!=="number")return g.W()
q.B(new Q.j(1,5),new Q.r((g|p|m)>>>0))
f=2&n
q.B(new Q.j(1,6),new Q.r((i|f)>>>0))
q.B(new Q.j(1,7),new Q.r((k|f)>>>0))
q.B(new Q.j(1,8),new Q.r((o|f)>>>0))
o=$.cn()
o=o.a
if(typeof o!=="number")return o.W()
p=o|p
q.B(new Q.j(2,1),new Q.r((p|m)>>>0))
q.B(new Q.j(2,2),new Q.r((p|f)>>>0))
k=3&n
q.B(new Q.j(2,3),new Q.r((p|k)>>>0))
i=4&n
q.B(new Q.j(2,4),new Q.r((p|i)>>>0))
e=5&n
q.B(new Q.j(2,5),new Q.r((p|e)>>>0))
d=6&n
q.B(new Q.j(2,6),new Q.r((p|d)>>>0))
c=7&n
q.B(new Q.j(2,7),new Q.r((p|c)>>>0))
n=8&n
q.B(new Q.j(2,8),new Q.r((p|n)>>>0))
p=$.Z()
p=p.a
if(typeof p!=="number")return H.b(p)
o|=p
q.B(new Q.j(7,1),new Q.r((o|m)>>>0))
q.B(new Q.j(7,2),new Q.r((o|f)>>>0))
q.B(new Q.j(7,3),new Q.r((o|k)>>>0))
q.B(new Q.j(7,4),new Q.r((o|i)>>>0))
q.B(new Q.j(7,5),new Q.r((o|e)>>>0))
q.B(new Q.j(7,6),new Q.r((o|d)>>>0))
q.B(new Q.j(7,7),new Q.r((o|c)>>>0))
q.B(new Q.j(7,8),new Q.r((o|n)>>>0))
b|=p
q.B(new Q.j(8,1),new Q.r((b|m)>>>0))
o=l|p
q.B(new Q.j(8,2),new Q.r((o|m)>>>0))
n=j|p
q.B(new Q.j(8,3),new Q.r((n|m)>>>0))
q.B(new Q.j(8,4),new Q.r((h|p|m)>>>0))
q.B(new Q.j(8,5),new Q.r((g|p|m)>>>0))
q.B(new Q.j(8,6),new Q.r((n|f)>>>0))
q.B(new Q.j(8,7),new Q.r((o|f)>>>0))
q.B(new Q.j(8,8),new Q.r((b|f)>>>0))
r.c=q
P.lv(C.h,new L.kL(r))},
kL:function kL(a){this.a=a}},O={
l2:function(){var s=new O.bV()
s.bt()
return s},
bV:function bV(){this.c=this.b=this.a=null},
cP:function cP(){this.b=this.a=null},
n6:function(a){var s=C.b.iS(a,"/")
if(s<=0)return a
return C.b.bs(a,0,s)},
n2:function(a){var s,r,q=P.lo("([^\\s]+)")
$.n1=q
s=q.iJ(a)
if(s==null)return[]
q=s.b
if(1>=q.length)return H.e(q,1)
r=q[1]
return[r,C.b.eF(C.b.aY(a,r.length))]},
kB:function(a){var s,r=[],q=P.lo("([^\\s]+)")
$.n1=q
q=new H.jZ(q,a,0)
for(;q.w();){s=q.d.b
if(1>=s.length)return H.e(s,1)
r.push(s[1])}return r},
bc:function(a){var s,r=O.kB(a),q=[],p=r.length
for(s=0;s<p;++s){if(s>=r.length)return H.e(r,s)
q.push(P.pS(r[s]))}return q},
eb:function(a,b,c){return O.o2(a,b,!1)},
o2:function(a,b,c){var s=0,r=P.af(t.aH),q,p=2,o,n=[],m,l,k,j,i,h,g,f
var $async$eb=P.ah(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:p=4
m=O.n6(a)
i=new O.kw(b)
i.b=new H.w(t.l)
l=i
s=7
return P.a4(W.m5(a),$async$eb)
case 7:k=e
s=8
return P.a4(l.aG(k,m,!1),$async$eb)
case 8:h=l.b
q=h
s=1
break
p=2
s=6
break
case 4:p=3
f=o
j=H.a5(f)
P.hj(a+": "+H.f(j))
h=P.k(a+": "+H.f(j))
throw H.c(h)
s=6
break
case 3:s=2
break
case 6:case 1:return P.ad(q,r)
case 2:return P.ac(o,r)}})
return P.ae($async$eb,r)},
aw:function(a,b){var s=null,r=null,q=!1
return O.o3(a,b)},
o3:function(a1,a2){var s=0,r=P.af(t.bK),q,p=2,o,n=[],m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$aw=P.ah(function(a3,a4){if(a3===1){o=a4
s=p}while(true)switch(s){case 0:c=null
b=null
a=!1
p=4
m=O.n6(a1)
i=c
h=new O.kx(a2)
h.b=[]
h.c=[]
h.d=[]
g=new H.w(t.l)
h.e=g
h.f=b
h.r=""
f=O.a2()
e=f.r
e.sp(0,new V.q(0.35,0.35,0.35))
e=f.x
e.sp(0,new V.q(0.65,0.65,0.65))
h.x=f
h.Q=E.N(null,!0,null,"",null,null)
if(i!=null)g.aA(0,i)
h.bG()
l=h
s=7
return P.a4(W.m5(a1),$async$aw)
case 7:k=a4
s=8
return P.a4(l.aG(k,m,a),$async$aw)
case 8:i=b
if(i!=null){g=new O.eu()
g.b=!0
i.C(g)}i=l.giH()
q=i
s=1
break
p=2
s=6
break
case 4:p=3
a0=o
j=H.a5(a0)
P.hj(a1+": "+H.f(j))
i=P.k(a1+": "+H.f(j))
throw H.c(i)
s=6
break
case 3:s=2
break
case 6:case 1:return P.ad(q,r)
case 2:return P.ac(o,r)}})
return P.ae($async$aw,r)},
kw:function kw(a){this.a=a
this.c=this.b=null},
ky:function ky(a){this.a=a
this.b=null},
kx:function kx(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
eu:function eu(){this.b=null},
a2:function(){var s,r=new O.c1(),q=O.l2()
r.e=q
q.bd(r.gfZ(),r.gh0())
q=new O.aP(r,"emission")
q.c=new A.O(!1,!1,!1)
q.f=new V.q(0,0,0)
r.f=q
q=new O.aP(r,"ambient")
q.c=new A.O(!1,!1,!1)
q.f=new V.q(0,0,0)
r.r=q
q=new O.aP(r,"diffuse")
q.c=new A.O(!1,!1,!1)
q.f=new V.q(0,0,0)
r.x=q
q=new O.aP(r,"invDiffuse")
q.c=new A.O(!1,!1,!1)
q.f=new V.q(0,0,0)
r.y=q
q=new O.it(r,"specular")
q.c=new A.O(!1,!1,!1)
q.f=new V.q(0,0,0)
q.ch=100
r.z=q
q=new O.ip(r,"bump")
q.c=new A.O(!1,!1,!1)
r.Q=q
r.ch=null
q=new O.aP(r,"reflect")
q.c=new A.O(!1,!1,!1)
q.f=new V.q(0,0,0)
r.cx=q
q=new O.is(r,"refract")
q.c=new A.O(!1,!1,!1)
q.f=new V.q(0,0,0)
q.ch=1
r.cy=q
q=new O.io(r,"alpha")
q.c=new A.O(!1,!1,!1)
q.f=1
r.db=q
q=new D.cJ()
q.bt()
q.e=[]
q.f=[]
q.r=[]
q.x=[]
q.z=q.y=null
q.d_(q.gfX(),q.ghy(),q.ghC())
r.dx=q
s=new O.ir()
s.b=new V.ak(0,0,0,0)
s.c=1
s.d=10
s.e=!1
r.dy=s
s=q.y
q=s==null?q.y=D.D():s
q.j(0,r.gi0())
q=r.dx
s=q.z
q=s==null?q.z=D.D():s
q.j(0,r.gaI())
r.fr=null
return r},
c1:function c1(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iu:function iu(a,b){this.a=a
this.b=b},
iv:function iv(){},
iw:function iw(a,b){this.a=a
this.b=b},
ix:function ix(){},
iy:function iy(a,b){this.a=a
this.b=b},
iz:function iz(){},
iA:function iA(a,b){this.a=a
this.b=b},
iB:function iB(){},
io:function io(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cO:function cO(){},
ip:function ip(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aP:function aP(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ir:function ir(){var _=this
_.e=_.d=_.c=_.b=null},
is:function is(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
it:function it(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eE:function eE(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
j5:function j5(){this.c=this.b=this.a=null},
ji:function ji(){}},E={
N:function(a,b,c,d,e,f){var s=new E.U()
s.ap(a,b,c,d,e,f)
return s},
mF:function(){if(J.kT(window.navigator.vendor,"Google"))return C.x
if(J.kT(window.navigator.userAgent,"Firefox"))return C.n
var s=window.navigator.appVersion
if(J.bM(s).R(s,"Trident")||C.b.R(s,"Edge"))return C.o
if(J.kT(window.navigator.appName,"Microsoft"))return C.o
return C.y},
mG:function(){var s=window.navigator.appVersion
if(J.bM(s).R(s,"Win"))return C.M
if(C.b.R(s,"Mac"))return C.t
if(C.b.R(s,"Linux"))return C.N
return C.O},
oh:function(a,b){var s=new E.iP(a)
s.f0(a,b)
return s},
oo:function(a,b,c,d,e){var s,r
if(t.B.b(a))return E.my(a,!0,!0,!0,!1)
s=W.l1()
r=s.style
r.width="100%"
r.height="100%"
J.lU(a).j(0,s)
return E.my(s,!0,!0,!0,!1)},
my:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.eQ(),n=t.z,m=C.f.cX(a,"webgl2",P.nX(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.n(P.k("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.oh(m,a)
n=new T.jn(m)
n.b=m.getParameter(3379)
n.c=m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.fb(a)
s=new X.ia()
s.d=P.md(t.cH)
n.b=s
s=new X.iG(n)
s.f=0
s.r=V.b2()
s.x=V.b2()
s.ch=s.Q=1
n.c=s
s=new X.ik(n)
s.r=0
s.x=V.b2()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.jw(n)
s.f=V.b2()
s.r=V.b2()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=[]
s=$.hS
n.Q=(s==null?$.hS=new E.fr(E.mF(),E.mG()):s).a===C.n?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.R(q,"contextmenu",n.gh8(),!1))
n.z.push(W.R(a,"focus",n.ghe(),!1))
n.z.push(W.R(a,"blur",n.gh2(),!1))
n.z.push(W.R(q,"keyup",n.ghk(),!1))
n.z.push(W.R(q,"keydown",n.ghi(),!1))
n.z.push(W.R(a,"mousedown",n.gho(),!1))
n.z.push(W.R(a,"mouseup",n.ghs(),!1))
n.z.push(W.R(a,p,n.ghq(),!1))
r=n.z
W.hQ(a)
W.hQ(a)
r.push(W.R(a,W.hQ(a),n.ghu(),!1))
n.z.push(W.R(q,p,n.gha(),!1))
n.z.push(W.R(q,"mouseup",n.ghc(),!1))
n.z.push(W.R(q,"pointerlockchange",n.ghw(),!1))
n.z.push(W.R(a,"touchstart",n.ghM(),!1))
n.z.push(W.R(a,"touchend",n.ghI(),!1))
n.z.push(W.R(a,"touchmove",n.ghK(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.au(Date.now(),!1)
o.db=0
o.dD()
return o},
hw:function hw(){},
U:function U(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bS:function bS(a){this.b=a},
c6:function c6(a){this.b=a},
fr:function fr(a,b){this.a=a
this.b=b},
iP:function iP(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
iQ:function iQ(a){this.a=a},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
eQ:function eQ(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
jr:function jr(a){this.a=a}},Z={
lz:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.dq(c)),35044)
a.bindBuffer(b,null)
return new Z.fe(b,s)},
aA:function(a){return new Z.b8(a)},
fe:function fe(a,b){this.a=a
this.b=b},
hA:function hA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
d_:function d_(a){this.a=a},
bT:function bT(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
cF:function cF(a,b,c){this.a=a
this.b=b
this.c=c},
b8:function b8(a){this.a=a}},D={
D:function(){var s=new D.bW()
s.d=0
return s},
hB:function hB(){},
bW:function bW(){var _=this
_.d=_.c=_.b=_.a=null},
hV:function hV(a){this.a=a},
hW:function hW(a){this.a=a},
V:function V(){this.b=null},
aK:function aK(){this.b=null},
aL:function aL(){this.b=null},
u:function u(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
m2:function(){var s=new D.cx()
s.c=new V.q(1,1,1)
s.a=V.os()
s.d=V.jP()
s.e=V.or()
s.sp(0,null)
return s},
cx:function cx(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aN:function aN(){},
cJ:function cJ(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null}},X={dJ:function dJ(a,b){this.a=a
this.b=b},e1:function e1(a,b){this.a=a
this.b=b},ia:function ia(){this.d=this.b=this.a=null},cL:function cL(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ik:function ik(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bB:function bB(a,b,c){this.a=a
this.b=b
this.c=c},c3:function c3(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},iG:function iG(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},es:function es(){},cY:function cY(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},jw:function jw(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},fb:function fb(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
l6:function(a){var s=new X.i0(),r=new V.ak(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=V.lp()
s.r=r
return s},
mk:function(a){var s,r,q=new X.eo()
q.c=1.0471975511965976
q.d=0.1
q.e=2000
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gq().j(0,q.gfl())
r=new D.u("mover",s,q.b)
r.b=!0
q.a2(r)}r=q.c
$.z().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
r=new D.u("fov",r,1.0471975511965976)
r.b=!0
q.a2(r)}r=q.d
$.z().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
r=new D.u("near",r,0.1)
r.b=!0
q.a2(r)}r=q.e
$.z().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
r=new D.u("far",r,2000)
r.b=!0
q.a2(r)}return q},
hu:function hu(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
l0:function l0(){},
i0:function i0(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i5:function i5(){this.b=this.a=null},
eo:function eo(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
jg:function jg(){}},V={
l3:function(a){var s,r,q=a.length
if(0>=q)return H.e(a,0)
s=a[0]
if(1>=q)return H.e(a,1)
r=a[1]
if(2>=q)return H.e(a,2)
q=a[2]
if(typeof s!=="number")return s.a_()
if(s<0)s=0
else if(s>1)s=1
if(typeof r!=="number")return r.a_()
if(r<0)r=0
else if(r>1)r=1
if(typeof q!=="number")return q.a_()
if(q<0)q=0
else if(q>1)q=1
return new V.q(s,r,q)},
nM:function(a,b,c){var s,r,q,p,o,n,m,l
a*=6
s=C.d.b9(a)
r=a-s
q=b*(1-c)
p=b*(1-c*r)
o=b*(1-c*(1-r))
switch(s){case 0:n=b>1?1:b
if(o<0)m=0
else m=o>1?1:o
if(q<0)l=0
else l=q>1?1:q
return new V.q(n,m,l)
case 1:if(p<0)n=0
else n=p>1?1:p
m=b>1?1:b
if(q<0)l=0
else l=q>1?1:q
return new V.q(n,m,l)
case 2:if(q<0)n=0
else n=q>1?1:q
m=b>1?1:b
if(o<0)l=0
else l=o>1?1:o
return new V.q(n,m,l)
case 3:if(q<0)n=0
else n=q>1?1:q
if(p<0)m=0
else m=p>1?1:p
l=b>1?1:b
return new V.q(n,m,l)
case 4:if(o<0)n=0
else n=o>1?1:o
if(q<0)m=0
else m=q>1?1:q
l=b>1?1:b
return new V.q(n,m,l)
default:n=b>1?1:b
if(q<0)m=0
else m=q>1?1:q
if(p<0)l=0
else l=p>1?1:p
return new V.q(n,m,l)}},
dL:function(a,b,c,d){var s=a/255,r=b/255,q=c/255,p=d/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
if(p<0)p=0
else if(p>1)p=1
return new V.ak(s,r,q,p)},
qd:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.cY(a-b,s)
return(a<0?a+s:a)+b},
J:function(a,b,c){if(a==null)return C.b.aw("null",c)
$.z().toString
return C.b.aw(C.d.eD(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cl:function(a,b,c){var s,r,q,p,o,n,m=[]
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.o)(a),++q){p=V.J(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.e(m,o)
s=C.b.aw(m[o],r)
n=m.length
if(o>=n)return H.e(m,o)
m[o]=s}return m},
dx:function(a){return C.d.jy(Math.pow(2,C.k.b9(Math.log(H.pL(a))/Math.log(2))))},
bz:function(){var s=$.mh
return s==null?$.mh=V.b0(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
b0:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.c2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
e7:function(a,b,c){return V.b0(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
li:function(a,b,c,d){return V.b0(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
mg:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.b0(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
lh:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.b0(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
lg:function(a,b,c){var s=c.I(),r=b.bk(s).I(),q=s.bk(r),p=new V.A(a.a,a.b,a.c),o=r.M(0).af(p),n=q.M(0).af(p),m=s.M(0).af(p)
return V.b0(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
b2:function(){var s=$.mm
return s==null?$.mm=new V.a9(0,0):s},
lk:function(){var s=$.aQ
return s==null?$.aQ=new V.X(0,0,0):s},
lp:function(){var s=$.ms
return s==null?$.ms=V.mr(0,0,1,1):s},
mr:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ex(a,b,c,d)},
fc:function(){var s=$.mE
return s==null?$.mE=new V.A(0,0,0):s},
or:function(){var s=$.jM
return s==null?$.jM=new V.A(-1,0,0):s},
jP:function(){var s=$.jN
return s==null?$.jN=new V.A(0,1,0):s},
os:function(){var s=$.jO
return s==null?$.jO=new V.A(0,0,1):s},
q:function q(a,b,c){this.a=a
this.b=b
this.c=c},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hT:function hT(){},
e6:function e6(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
c2:function c2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a9:function a9(a,b){this.a=a
this.b=b},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
aR:function aR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ex:function ex(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ao:function ao(a,b){this.a=a
this.b=b},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
q8:function(a){P.oq(C.I,new V.kN(a))},
ok:function(a){var s=new V.j1()
s.f3(a,!0)
return s},
kN:function kN(a){this.a=a},
j1:function j1(){this.b=this.a=null},
j3:function j3(a){this.a=a},
j2:function j2(a){this.a=a}},U={
m1:function(){var s=new U.hC()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
bn:function(a){var s=new U.cu()
s.sV(0,a)
return s},
hC:function hC(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cu:function cu(){this.b=this.a=null},
bX:function bX(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
av:function av(){},
cZ:function cZ(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
m4:function(){var s,r,q=new M.cB()
q.a=!0
s=O.l2()
q.e=s
s.bd(q.gh4(),q.gh6())
q.y=q.x=q.r=q.f=null
r=X.l6(null)
q.sb7(null)
q.sbc(0,r)
return q},
cs:function cs(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
cv:function cv(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cB:function cB(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
az:function az(){}},A={
o_:function(a,b){var s=a.bl,r=new A.im(b,s)
r.bV(b,s)
r.eX(a,b)
return r},
o0:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="MaterialLight_"+a5.gal(a5)+a6.gal(a6)+a7.gal(a7)+a8.gal(a8)+a9.gal(a9)+b0.gal(b0)+b1.gal(b1)+b2.gal(b2)+b3.gal(b3)+"_"
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
b=$.ar()
if(h){s=$.bk()
b=new Z.b8(b.a|s.a)}if(g){s=$.bj()
b=new Z.b8(b.a|s.a)}if(f){s=$.bl()
b=new Z.b8(b.a|s.a)}if(e){s=$.bi()
b=new Z.b8(b.a|s.a)}return new A.iq(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
ku:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kv:function(a,b,c){var s,r="Txt, txt2D).rgb;\n"
A.ku(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hk(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}a.a=s+"}\n"},
pg:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.ku(b,r,"emission")
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
pc:function(a,b){var s,r=a.b
if(!(r.a||r.b||!1))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.kv(b,r,"ambient")
b.a+="\n"},
pe:function(a,b){var s,r=a.c
if(!(r.a||r.b||!1))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.kv(b,r,"diffuse")
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
ph:function(a,b){var s,r=a.d
if(!(r.a||r.b||!1))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.kv(b,r,"invDiffuse")
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
pn:function(a,b){var s,r=a.e
if(!(r.a||r.b||!1))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.kv(b,r,"specular")
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
pj:function(a,b){var s,r,q
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
pl:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.ku(b,r,"reflect")
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
pm:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.ku(b,r,"refract")
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
pd:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.f(s)
q=A.hk(r)
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
if(typeof s!=="number")return s.v()
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
c.a=p+"\n"}o=[]
o.push("lit.color")
if(s)o.push("attenuation")
s=c.a+="   return "+C.a.u(o," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit)\n"
c.a=s
c.a=s+"{\n"
o=[]
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
n=[]
s=a.c
if(s.a||s.b||!1)n.push("diffuse(norm, normDir)")
s=a.d
if(s.a||s.b||!1)n.push("invDiffuse(norm, normDir)")
s=a.e
if(s.a||s.b||!1)n.push("specular(norm, normDir)")
s=c.a+="      highLight = intensity*("+C.a.u(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.u(o," + ")+");\n"
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
pf:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+H.f(s)
q=A.hk(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.v()
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
p=c.a+="uniform "+q+" "+r+"s["+k+"];\n"
if(s)for(o=0;o<k;++o)p=c.a+="uniform sampler2D "+r+"sTexture2D"+o+";\n"
p+="\n"
c.a=p
n=s?", sampler2D txt2D":""
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+n+")\n"
c.a=p
c.a=p+"{\n"
m=[]
p=a.b
if(p.a||p.b||!1)m.push("ambientColor")
if(a.dx){c.a+=u.k
l=[]
p=a.c
if(p.a||p.b||!1)l.push("diffuse(norm, lit.viewDir)")
p=a.d
if(p.a||p.b||!1)l.push("invDiffuse(norm, lit.viewDir)")
p=a.e
if(p.a||p.b||!1)l.push("specular(norm, lit.viewDir)")
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
c.a+="      highLight = intensity*("+C.a.u(l," + ")+");\n"}else c.a+="   highLight = "+C.a.u(l," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.a.u(m," + ")+");\n"
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
if(s){for(s=p,o=0;o<k;++o){c.a+="   if("+r+"Count <= "+o+") return lightAccum;\n"
s=c.a+="   lightAccum += "+r+"Value(norm, "+r+"s["+o+"], "+r+"sTexture2D"+o+");\n"}k=s}else{k=c.a+="   for(int i = 0; i < "+k+"; ++i)\n"
k+="   {\n"
c.a=k
k+="      if(i >= "+r+"Count) break;\n"
c.a=k
k+="      lightAccum += "+r+"Value(norm, "+r+"s[i]);\n"
c.a=k
k=c.a=k+"   }\n"}k+="   return lightAccum;\n"
c.a=k
k+="}\n"
c.a=k
c.a=k+"\n"},
pk:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.f(s)
q=A.hk(r)
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
if(typeof s!=="number")return s.v()
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
c.a=p+"\n"}j=[]
j.push("lit.color")
if(m)j.push("attenuation")
if(s)j.push("textureCube(txtCube, invNormDir).rgb")
p=c.a+="   return "+C.a.u(j," * ")+";\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+k+")\n"
c.a=p
c.a=p+"{\n"
j=[]
p=a.b
if(p.a||p.b||!1)j.push("ambientColor")
if(a.dx){c.a+=u.k
j.push("highLight")
k=s?", txtCube":""
if(n)k+=", shadowCube"
p=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
p+="   vec3 intensity = "+r+"Intensity(normDir, lit"+k+");\n"
c.a=p
c.a=p+"   if(length(intensity) > 0.0001) {\n"
i=[]
p=a.c
if(p.a||p.b||!1)i.push("diffuse(norm, normDir)")
p=a.d
if(p.a||p.b||!1)i.push("invDiffuse(norm, normDir)")
p=a.e
if(p.a||p.b||!1)i.push("specular(norm, normDir)")
p=c.a+="      highLight = intensity*("+C.a.u(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.a.u(j," + ")+");\n"
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
po:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.f(s)
q=A.hk(r)
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
if(typeof s!=="number")return s.v()
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
if(m){s=$.hS
if(s==null)s=$.hS=new E.fr(E.mF(),E.mG())
p=c.a
if(s.b===C.t){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
c.a=s+"\n"}h=[]
if(l)h.push("attenuation")
if(m)h.push("scale")
if(k)h.push("texture2D(txt2D, txtLoc).rgb")
else h.push("vec3(1.0, 1.0, 1.0)")
s=c.a+="   return "+C.a.u(h," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+i+")\n"
c.a=s
c.a=s+"{\n"
h=[]
s=a.b
if(s.a||s.b||!1)h.push("ambientColor")
if(a.dx){c.a+=u.k
h.push("highLight")
i=k?", txt2D":""
if(n)i+=", shadow2D"
s=c.a+="   vec3 intensity = "+r+"Intensity(lit"+i+");\n"
s+="   if(length(intensity) > 0.0001) {\n"
c.a=s
c.a=s+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
g=[]
s=a.c
if(s.a||s.b||!1)g.push("diffuse(norm, litVec)")
s=a.d
if(s.a||s.b||!1)g.push("invDiffuse(norm, litVec)")
s=a.e
if(s.a||s.b||!1)g.push("specular(norm, litVec)")
s=c.a+="      highLight = intensity*("+C.a.u(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.u(h," + ")+");\n"
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
pi:function(a,b){var s,r
if(a.cy>0)return
s=b.a+="// === No Lights ===\n"
s+="\n"
b.a=s
s+="vec3 nonLightValues(vec3 norm)\n"
b.a=s
s+="{\n"
b.a=s
if(a.dx)b.a=s+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
r=[]
s=a.b
if(s.a||s.b||!1)r.push("ambientColor")
s=a.c
if(s.a||s.b||!1)r.push("diffuse(norm, litVec)")
s=a.d
if(s.a||s.b||!1)r.push("invDiffuse(norm, litVec)")
s=a.e
if(s.a||s.b||!1)r.push("specular(norm, litVec)")
s=b.a+="   return "+C.a.u(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
pp:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.bH("")
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
A.pg(a,h)
A.pc(a,h)
A.pe(a,h)
A.ph(a,h)
A.pn(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.pl(a,h)
A.pm(a,h)}A.pj(a,h)
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
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pd(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pf(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pk(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.po(a,o[m],h)
A.pi(a,h)}o=h.a+="// === Main ===\n"
o+="\n"
h.a=o
o+="void main()\n"
h.a=o
o+="{\n"
h.a=o
o=h.a=o+"   float alpha = alphaValue();\n"
if(s){s=o+"   vec3 norm = normal();\n"
h.a=s}else s=o
if(r)s=h.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
l=[]
if(p){h.a=s+u.o
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
if(0>=p.length)return H.e(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.aY(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.e(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.aY(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.e(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.aY(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.e(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.aY(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}s=a.a
if(s.a||s.b||!1)l.push("emissionColor()")
s=a.r
if(s.a||s.b||!1)l.push("reflect(refl)")
s=a.x
if(s.a||s.b||!1)l.push("refract(refl)")
if(l.length<=0)l.push("vec3(0.0, 0.0, 0.0)")
s=h.a+="   vec4 objClr = vec4("+C.a.u(l," + ")+", alpha);\n"
if(q)s=h.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
h.a=s
s=h.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
pq:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.b8+"];\n"
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
ps:function(a,b){var s
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
pr:function(a,b){var s
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
pu:function(a,b){var s,r
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
pv:function(a,b){var s,r
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
pt:function(a,b){var s
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
pw:function(a,b){var s
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
hk:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.aY(a,1)},
lx:function(a,b,c,d,e){var s=new A.jC(a,c,e)
s.f=d
P.le(d,0,!1)
return s},
hq:function hq(a,b,c){this.a=a
this.b=b
this.c=c},
hr:function hr(a){this.a=a},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
im:function im(a,b){var _=this
_.jK=_.e3=_.bL=_.bl=_.b8=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jS=_.jR=_.jQ=_.cC=_.cB=_.cA=_.cz=_.cw=_.cv=_.cu=_.ct=_.jP=_.ef=_.ee=_.jO=_.ed=_.ec=_.eb=_.jN=_.ea=_.e9=_.e8=_.jM=_.e7=_.e6=_.jL=_.e5=_.e4=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hv:function hv(a,b){this.a=a
this.b=b},
hI:function hI(a,b){this.a=a
this.b=b},
iL:function iL(a,b){this.a=a
this.b=b},
j7:function j7(a,b){this.a=a
this.b=b},
iq:function iq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.b8=b5
_.bl=b6
_.bL=b7},
f_:function f_(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
f0:function f0(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
f3:function f3(a,b,c,d,e,f,g,h,i,j){var _=this
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
f6:function f6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
eD:function eD(){},
j4:function j4(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
j6:function j6(a,b){var _=this
_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
jB:function jB(){},
jH:function jH(a){this.a=a},
eX:function eX(a,b,c){this.a=a
this.c=b
this.d=c},
jE:function jE(a,b,c){this.a=a
this.c=b
this.d=c},
jF:function jF(a,b,c){this.a=a
this.c=b
this.d=c},
jG:function jG(a,b,c){this.a=a
this.c=b
this.d=c},
jC:function jC(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
eW:function eW(a,b,c){this.a=a
this.c=b
this.d=c},
jD:function jD(a,b,c){this.a=a
this.c=b
this.d=c},
eY:function eY(a,b,c){this.a=a
this.c=b
this.d=c},
eZ:function eZ(a,b,c){this.a=a
this.c=b
this.d=c},
jI:function jI(a,b,c){this.a=a
this.c=b
this.d=c},
f1:function f1(a,b,c){this.a=a
this.c=b
this.d=c},
f2:function f2(a,b,c){this.a=a
this.c=b
this.d=c},
f4:function f4(a,b,c){this.a=a
this.c=b
this.d=c},
f5:function f5(a,b,c){this.a=a
this.c=b
this.d=c}},F={
pR:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new F.kE()
if(a<3)return null
s=F.lr()
r=-6.283185307179586/a
q=[]
p=s.a
o=new V.A(0,0,1).I()
q.push(p.im(new V.aR(-1,-1,-1,-1),new V.ak(1,1,1,1),new V.X(0,0,0),new V.A(0,0,1),new V.a9(0.5,0.5),o))
for(n=0;n<=a;++n){m=r*n
l=Math.sin(m)
k=Math.cos(m)
j=e.$1(n/a)
p=s.a
if(typeof j!=="number")return H.b(j)
o=new V.A(l,k,1).I()
if(l<0)i=0
else i=l>1?1:l
h=k<0
if(h)g=0
else g=k>1?1:k
if(h)h=0
else h=k>1?1:k
p.toString
f=F.ly(new V.aR(-1,-1,-1,-1),null,new V.ak(i,g,h,1),new V.X(l*j,k*j,0),new V.A(0,0,1),new V.a9(l*0.5+0.5,k*0.5+0.5),o,null,0)
p.j(0,f)
q.push(f)}s.d.ci(q)
return s},
nV:function(a,b){var s=new F.ih(),r=a.a
if(r==null)H.n(P.k("May not create a line with a start vertex which is not attached to a shape."))
if(r!=b.a)H.n(P.k("May not create a line with vertices attached to different shapes."))
s.a=a
a.c.b.push(s)
s.b=b
b.c.c.push(s)
s.a.a.c.b.push(s)
s.a.a.ak()
return s},
lr:function(){var s=new F.iY(),r=new F.jR(s)
r.b=!1
r.c=[]
s.a=r
r=new F.j0(s)
r.b=[]
s.b=r
r=new F.j_(s)
r.b=[]
s.c=r
r=new F.iZ(s)
r.b=[]
s.d=r
return s},
ly:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.jQ(),p=new F.jW()
p.b=[]
q.b=p
p=new F.jV()
p.b=[]
p.c=[]
q.c=p
p=new F.jS()
p.b=[]
p.c=[]
p.d=[]
q.d=p
h=$.nu()
q.e=0
p=$.ar()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.bk().a)!==0?e:r
q.x=(s&$.bj().a)!==0?b:r
q.y=(s&$.bl().a)!==0?f:r
q.z=(s&$.bQ().a)!==0?g:r
q.Q=(s&$.nv().a)!==0?c:r
q.ch=(s&$.co().a)!==0?i:0
q.cx=(s&$.bi().a)!==0?a:r
return q},
kE:function kE(){},
hX:function hX(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ih:function ih(){this.b=this.a=null},
iK:function iK(){this.a=null},
iY:function iY(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iZ:function iZ(a){this.a=a
this.b=null},
j_:function j_(a){this.a=a
this.b=null},
j0:function j0(a){this.a=a
this.b=null},
jQ:function jQ(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jY:function jY(a){this.a=a},
jX:function jX(a){this.a=a},
jR:function jR(a){this.a=a
this.c=this.b=null},
jS:function jS(){this.d=this.c=this.b=null},
jT:function jT(a,b){this.a=a
this.b=b},
jU:function jU(a,b){this.a=a
this.b=b},
jV:function jV(){this.c=this.b=null},
jW:function jW(){this.b=null}},T={
lt:function(a){var s=new T.jl()
s.a=0
s.b=a
s.d=s.c=!1
s.x=s.r=s.f=s.e=0
return s},
dM:function dM(){var _=this
_.ch=_.Q=_.z=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cr:function cr(a,b){this.c=a
this.d=b
this.b=null},
jj:function jj(){},
jk:function jk(){},
jl:function jl(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jm:function jm(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
jn:function jn(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
jp:function jp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jo:function jo(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jq:function jq(a,b,c){this.a=a
this.b=b
this.c=c}},Q={
me:function(a){if(a>=64)return new Q.j(0,0)
return new Q.j(C.c.a9(a,8)+1,C.c.cY(a,8)+1)},
mv:function(){var s=new Q.j8()
s.f4()
return s},
ab:function(a){return new Q.r(a)},
i1:function i1(){this.d=this.c=this.a=null},
j:function j(a,b){this.a=a
this.b=b},
an:function an(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
j8:function j8(){this.c=this.a=null},
j9:function j9(a){this.a=a},
jb:function jb(a){this.a=a},
jc:function jc(a,b){this.a=a
this.b=b},
ja:function ja(a,b,c){this.a=a
this.b=b
this.c=c},
jf:function jf(){this.d=this.c=null},
r:function r(a){this.a=a}},S={
hx:function(a,b,c,d,e,f){var s=null,r=new S.dH(e,f,b,c)
r.ap(s,!0,s,"",s,s)
r.aZ(b,c,e,f)
r.eS(a,b,c,d,e,f)
return r},
nD:function(a,b){var s=null,r=new S.cp(b)
r.ap(s,!0,s,"",s,s)
r.eT(a,b)
return r},
hN:function(a,b,c,d,e,f){var s=null,r=new S.dS()
r.ap(s,!0,s,"",s,s)
r.eU(a,b,c,d,e,f)
return r},
q9:function(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null,a5="modifiers",a6=document,a7=a6.getElementById("targetCanvas")
if(a7==null)H.n(P.k("Failed to find an element with the identifier, targetCanvas."))
s=E.oo(a7,!0,!0,!0,!1)
r=s.x
q=new U.cZ()
p=U.m1()
p.scV(0,!0)
p.scK(6.283185307179586)
p.scL(0)
p.sau(0,0)
p.sel(100)
p.sa5(0)
p.sdZ(0.5)
q.b=p
o=q.gbA()
p.gq().j(0,o)
p=U.m1()
p.scV(0,!0)
p.scK(6.283185307179586)
p.scL(0)
p.sau(0,0)
p.sel(100)
p.sa5(0)
p.sdZ(0.5)
q.c=p
p.gq().j(0,o)
q.d=null
q.r=q.f=q.e=!1
q.y=q.x=2.5
q.Q=4
q.ch=q.cx=!1
q.db=q.cy=0
q.dx=null
q.dy=0
q.fx=q.fr=null
n=new X.bB(!1,!1,!1)
m=q.d
q.d=n
p=new D.u(a5,m,n)
p.b=!0
q.X(p)
p=q.f
if(p!==!1){q.f=!1
p=new D.u("invertX",p,!1)
p.b=!0
q.X(p)}p=q.r
if(p!==!1){q.r=!1
p=new D.u("invertY",p,!1)
p.b=!0
q.X(p)}q.ck(r)
q.b.scL(-1.5707963267948966)
q.b.scK(0)
q.b.sau(0,-0.5)
q.b.scV(0,!1)
r=U.bn(V.li(1.75,1.75,1.75,1))
p=U.bn(V.e7(0,0,15))
o=new U.bX()
o.bt()
o.bd(o.gfV(),o.ghA())
o.aA(0,[q,r,p])
o.e=null
o.f=V.bz()
o.r=0
l=X.mk(o)
k=X.l6(a4)
if(k.b){k.b=!1
r=new D.u("clearColor",!0,!1)
r.b=!0
k.a2(r)}j=S.nD(s,a8)
r=j.k4.a
i=new M.cv()
i.a=!0
q=E.N(a4,!0,a4,"",a4,a4)
h=F.lr()
p=h.a
o=new V.A(-1,-1,1).I()
g=p.bI(new V.aR(1,2,4,6),V.dL(255,0,0,255),new V.X(-1,-1,0),new V.a9(0,1),o,a4)
o=h.a
p=new V.A(1,-1,1).I()
f=o.bI(new V.aR(0,3,4,6),V.dL(0,0,255,255),new V.X(1,-1,0),new V.a9(1,1),p,a4)
p=h.a
o=new V.A(1,1,1).I()
e=p.bI(new V.aR(0,2,5,6),V.dL(0,128,0,255),new V.X(1,1,0),new V.a9(1,0),o,a4)
o=h.a
p=V.b2()
d=new V.A(-1,1,1).I()
c=o.bI(new V.aR(0,2,4,7),V.dL(255,255,0,255),new V.X(-1,1,0),p,d,a4)
h.d.ci([g,f,e,c])
h.b6()
q.sa0(0,h)
i.e=q
i.sb7(a4)
i.sbc(0,a4)
i.sY(a4)
q=new O.eE()
q.b=1.0471975511965976
q.d=new V.q(1,1,1)
if(null!=r){m=q.c
q.c=r
r.gq().j(0,q.gaI())
r=new D.u("boxTexture",m,q.c)
r.b=!0
q.T(r)}i.sY(q)
i.sbc(0,k)
i.sb7(l)
b=M.m4()
b.sbc(0,k)
b.sb7(l)
b.e.j(0,j)
a=new X.hu()
a.d=a.c=a.b=a.a=512
a.e=!0
a.f=!1
a.x=a.r=1
a.ch=T.lt(a4)
a.cx=new V.ak(0,0,0,1)
a.cy=!0
a.db=2000
a.dx=!0
a.dy=V.lp()
a.say(0,512)
a.sas(0,512)
a0=new V.ak(0,0,0,1)
if(!a.cx.m(0,a0)){m=a.cx
a.cx=a0
r=new D.u("color",m,a0)
r.b=!0
a.a2(r)}r=a.db
$.z().toString
if(!(Math.abs(r-2000)<1e-9)){a.db=2000
r=new D.u("depth",r,2000)
r.b=!0
a.a2(r)}if(!a.f){a.f=!0
r=new D.u("autoResize",!1,!0)
r.b=!0
a.a2(r)}r=a.r
$.z().toString
if(!(Math.abs(r-0.5)<1e-9)){a.r=0.5
r=new D.u("autoResizeScalarX",r,0.5)
r.b=!0
a.a2(r)}r=a.x
$.z().toString
if(!(Math.abs(r-0.5)<1e-9)){a.x=0.5
r=new D.u("autoResizeScalarY",r,0.5)
r.b=!0
a.a2(r)}a1=V.lp()
if(!J.C(a.dy,a1)){m=a.dy
a.dy=a1
r=new D.u("region",m,a1)
r.b=!0
a.a2(r)}a2=M.m4()
a2.sbc(0,a)
a2.sb7(l)
a2.e.j(0,j)
r=s.f
q=s.x
p=a.ch
o=new T.dM()
o.a=r
o.z=4
o.ch=o.Q=!1
n=new X.bB(!1,!1,!1)
o.c=n
r=new D.u(a5,a4,n)
r.b=!0
o.bv(r)
r=o.d
if(r!==p){if(r!=null)r.gq().O(0,o.gde())
m=o.d
o.d=p
p.gq().j(0,o.gde())
r=new D.u("texture",m,o.d)
r.b=!0
o.bv(r)}o.ck(q)
r=o.f
if(r==null)r=o.f=D.D()
r.j(0,new S.kO(j,s,a2))
r=o.x
if(r==null)r=o.x=D.D()
r.j(0,new S.kP(j))
r=new M.cs()
r.bt()
r.e=!0
r.f=!1
r.r=null
r.bd(r.ghE(),r.ghG())
r.aA(0,[i,b])
q=s.d
if(q!==r){if(q!=null)q.gq().O(0,s.gda())
s.d=r
r.gq().j(0,s.gda())
s.dc()}a7=a6.getElementById("buttons")
a3=a6.createElement("button")
a3.textContent="Fullscreen"
W.R(a3,"click",new S.kQ(s),!1)
J.lU(a7).j(0,a3)
V.q8(s)},
mc:function(a,b,c,d,e){var s=null,r=new S.e2(d,e,b,c)
r.ap(s,!0,s,"",s,s)
r.aZ(b,c,d,e)
r.eV(a,b,c,d,e)
return r},
id:function(a,b,c,d,e,f){var s=null,r=new S.e3(e,f,b,c)
r.ap(s,!0,s,"",s,s)
r.aZ(b,c,e,f)
r.eW(a,b,c,d,e,f)
return r},
o1:function(a){var s=new S.iC()
s.eY(a)
return s},
mj:function(a,b,c,d,e,f){var s=null,r=new S.en(e,f,b,c)
r.ap(s,!0,s,"",s,s)
r.aZ(b,c,e,f)
r.eZ(a,b,c,d,e,f)
return r},
mp:function(a,b,c,d,e,f){var s=null,r=new S.ev(e,f,b,c)
r.ap(s,!0,s,"",s,s)
r.aZ(b,c,e,f)
r.f_(a,b,c,d,e,f)
return r},
iT:function(a,b,c,d,e,f){var s=null,r=new S.ez(e,f,b,c)
r.ap(s,!0,s,"",s,s)
r.aZ(b,c,e,f)
r.f1(a,b,c,d,e,f)
return r},
op:function(a,b,c,d){var s=null,r=new S.eR(d,b,c)
r.ap(s,!0,s,"",s,s)
r.f5(a,b,c,d)
return r},
dH:function dH(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
hz:function hz(){},
cp:function cp(a){var _=this
_.fy=a
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=null},
dS:function dS(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hP:function hP(){},
kO:function kO(a,b,c){this.a=a
this.b=b
this.c=c},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
e2:function e2(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
ic:function ic(){},
e3:function e3(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
ig:function ig(){},
iC:function iC(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
en:function en(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
iJ:function iJ(){},
ep:function ep(){},
ev:function ev(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
iO:function iO(){},
ez:function ez(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
iV:function iV(){},
eR:function eR(a,b,c){var _=this
_.fy=a
_.id=b
_.k1=c
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=null},
jt:function jt(){}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,Q,S]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.la.prototype={}
J.a.prototype={
m:function(a,b){return a===b},
gU:function(a){return H.cU(a)},
i:function(a){return"Instance of '"+H.f(H.et(a))+"'"}}
J.i6.prototype={
i:function(a){return String(a)},
gU:function(a){return a?519018:218159}}
J.bZ.prototype={
m:function(a,b){return null==b},
i:function(a){return"null"},
gU:function(a){return 0},
$iW:1}
J.bw.prototype={
gU:function(a){return 0},
i:function(a){return String(a)}}
J.eq.prototype={}
J.bK.prototype={}
J.aD.prototype={
i:function(a){var s=a[$.nj()]
if(s==null)return this.eR(a)
return"JavaScript function for "+H.f(J.aj(s))}}
J.al.prototype={
j:function(a,b){if(!!a.fixed$length)H.n(P.x("add"))
a.push(b)},
jn:function(a,b){var s
if(!!a.fixed$length)H.n(P.x("removeAt"))
s=a.length
if(b>=s)throw H.c(P.ew(b,null))
return a.splice(b,1)[0]},
O:function(a,b){var s
if(!!a.fixed$length)H.n(P.x("remove"))
for(s=0;s<a.length;++s)if(J.C(a[s],b)){a.splice(s,1)
return!0}return!1},
aA:function(a,b){var s,r
if(!!a.fixed$length)H.n(P.x("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.o)(b),++r)a.push(b[r])},
K:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.ct(a))}},
u:function(a,b){var s,r,q=P.le(a.length,"",!1)
for(s=0;s<a.length;++s){r=H.f(a[s])
if(s>=q.length)return H.e(q,s)
q[s]=r}return q.join(b)},
iR:function(a){return this.u(a,"")},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
gcH:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.nS())},
bf:function(a,b){if(!!a.immutable$list)H.n(P.x("sort"))
H.on(a,b==null?J.p3():b)},
eO:function(a){return this.bf(a,null)},
R:function(a,b){var s
for(s=0;s<a.length;++s)if(J.C(a[s],b))return!0
return!1},
i:function(a){return P.l7(a,"[","]")},
gS:function(a){return new J.a1(a,a.length)},
gU:function(a){return H.cU(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.n(P.x("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.ck(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.n(P.x("indexed set"))
if(b>=a.length||b<0)throw H.c(H.ck(a,b))
a[b]=c},
$il:1,
$ih:1}
J.e_.prototype={}
J.a1.prototype={
gH:function(a){return this.d},
w:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.o(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bv.prototype={
aB:function(a,b){var s
if(typeof b!="number")throw H.c(H.aq(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbM(b)
if(this.gbM(a)===s)return 0
if(this.gbM(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbM:function(a){return a===0?1/a<0:a<0},
jy:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.x(""+a+".toInt()"))},
b9:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.x(""+a+".floor()"))},
a4:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.x(""+a+".round()"))},
is:function(a,b,c){if(C.c.aB(b,c)>0)throw H.c(H.aq(b))
if(this.aB(a,b)<0)return b
if(this.aB(a,c)>0)return c
return a},
eD:function(a,b){var s
if(b>20)throw H.c(P.b3(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbM(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gU:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
cY:function(a,b){var s
if(typeof b!="number")throw H.c(H.aq(b))
s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
d8:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dG(a,b)},
a9:function(a,b){return(a|0)===a?a/b|0:this.dG(a,b)},
dG:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.x("Result of truncating division is "+H.f(s)+": "+H.f(a)+" ~/ "+b))},
bF:function(a,b){var s
if(a>0)s=this.i7(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
i7:function(a,b){return b>31?0:a>>>b},
$ia7:1,
$ia0:1}
J.cI.prototype={$it:1}
J.cH.prototype={}
J.aM.prototype={
aL:function(a,b){if(b<0)throw H.c(H.ck(a,b))
if(b>=a.length)H.n(H.ck(a,b))
return a.charCodeAt(b)},
bw:function(a,b){if(b>=a.length)throw H.c(H.ck(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!="string")throw H.c(P.kX(b,null,null))
return a+b},
bs:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.ew(b,null))
if(b>c)throw H.c(P.ew(b,null))
if(c>a.length)throw H.c(P.ew(c,null))
return a.substring(b,c)},
aY:function(a,b){return this.bs(a,b,null)},
eF:function(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(this.bw(p,0)===133){s=J.nU(p,1)
if(s===o)return""}else s=0
r=o-1
q=this.aL(p,r)===133?J.l9(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
jB:function(a){var s,r,q
if(typeof a.trimRight!="undefined"){s=a.trimRight()
r=s.length
if(r===0)return s
q=r-1
if(this.aL(s,q)===133)r=J.l9(s,q)}else{r=J.l9(a,a.length)
s=a}if(r===s.length)return s
if(r===0)return""
return s.substring(0,r)},
n:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.F)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
aw:function(a,b){var s=b-a.length
if(s<=0)return a
return this.n(" ",s)+a},
bP:function(a,b){var s=b-a.length
if(s<=0)return a
return a+this.n(" ",s)},
iO:function(a,b){var s=a.indexOf(b,0)
return s},
iS:function(a,b){var s=a.length,r=b.length
if(s+r>s)s-=r
return a.lastIndexOf(b,s)},
iw:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.b3(c,0,s,null,null))
return H.ne(a,b,c)},
R:function(a,b){return this.iw(a,b,0)},
aB:function(a,b){var s
if(typeof b!="string")throw H.c(H.aq(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gU:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gk:function(a){return a.length},
$iG:1}
H.P.prototype={
gk:function(a){return this.a.length},
h:function(a,b){return C.b.aL(this.a,b)}}
H.l.prototype={}
H.c0.prototype={
gH:function(a){var s=this.d
return s},
w:function(){var s,r=this,q=r.a,p=J.bM(q),o=p.gk(q)
if(r.b!=o)throw H.c(P.ct(q))
s=r.c
if(typeof o!=="number")return H.b(o)
if(s>=o){r.d=null
return!1}r.d=p.F(q,s);++r.c
return!0}}
H.by.prototype={
gS:function(a){return new H.cN(J.bR(this.a),this.b)},
gk:function(a){return J.aB(this.a)},
F:function(a,b){return this.b.$1(J.kU(this.a,b))}}
H.cA.prototype={$il:1}
H.cN.prototype={
w:function(){var s=this,r=s.b
if(r.w()){s.a=s.c.$1(r.gH(r))
return!0}s.a=null
return!1},
gH:function(a){var s=this.a
return s}}
H.d0.prototype={
gS:function(a){return new H.ff(J.bR(this.a),this.b)}}
H.ff.prototype={
w:function(){var s,r
for(s=this.a,r=this.b;s.w();)if(r.$1(s.gH(s)))return!0
return!1},
gH:function(a){var s=this.a
return s.gH(s)}}
H.cD.prototype={}
H.f9.prototype={
l:function(a,b,c){throw H.c(P.x("Cannot modify an unmodifiable list"))}}
H.ca.prototype={}
H.jz.prototype={
av:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.ei.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.e0.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.f(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.f(r.a)+")"
return q+p+"' on '"+s+"' ("+H.f(r.a)+")"}}
H.f8.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.iH.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.cC.prototype={}
H.dg.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaa:1}
H.bU.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.nh(r==null?"unknown":r)+"'"},
gjD:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.jh.prototype={}
H.jd.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.nh(s)+"'"}}
H.cq.prototype={
m:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.cq))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gU:function(a){var s,r=this.c
if(r==null)s=H.cU(this.a)
else s=typeof r!=="object"?J.a8(r):H.cU(r)
return(s^H.cU(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.et(s))+"'")}}
H.eB.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.w.prototype={
gk:function(a){return this.a},
gaU:function(a){return new H.b_(this)},
gjC:function(a){return H.nZ(new H.b_(this),new H.i9(this))},
ix:function(a,b){var s=this.b
if(s==null)return!1
return this.fA(s,b)},
aA:function(a,b){J.lT(b,new H.i8(this))},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.by(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.by(p,b)
q=r==null?n:r.b
return q}else return o.iP(b)},
iP:function(a){var s,r,q=this.d
if(q==null)return null
s=this.ds(q,J.a8(a)&0x3ffffff)
r=this.eh(s,a)
if(r<0)return null
return s[r].b},
l:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.df(s==null?m.b=m.c5():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.df(r==null?m.c=m.c5():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.c5()
p=J.a8(b)&0x3ffffff
o=m.ds(q,p)
if(o==null)m.ce(q,p,[m.c6(b,c)])
else{n=m.eh(o,b)
if(n>=0)o[n].b=c
else o.push(m.c6(b,c))}}},
K:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.ct(s))
r=r.c}},
df:function(a,b,c){var s=this.by(a,b)
if(s==null)this.ce(a,b,this.c6(b,c))
else s.b=c},
c6:function(a,b){var s=this,r=new H.ii(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
eh:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.C(a[r].a,b))return r
return-1},
i:function(a){return P.mf(this)},
by:function(a,b){return a[b]},
ds:function(a,b){return a[b]},
ce:function(a,b,c){a[b]=c},
fD:function(a,b){delete a[b]},
fA:function(a,b){return this.by(a,b)!=null},
c5:function(){var s="<non-identifier-key>",r=Object.create(null)
this.ce(r,s,r)
this.fD(r,s)
return r}}
H.i9.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.mW(this.a).ab("2(1)")}}
H.i8.prototype={
$2:function(a,b){this.a.l(0,a,b)},
$S:function(){return H.mW(this.a).ab("W(1,2)")}}
H.ii.prototype={}
H.b_.prototype={
gk:function(a){return this.a.a},
gS:function(a){var s=this.a,r=new H.e5(s,s.r)
r.c=s.e
return r}}
H.e5.prototype={
gH:function(a){return this.d},
w:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.ct(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kG.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.kH.prototype={
$2:function(a,b){return this.a(a,b)}}
H.kI.prototype={
$1:function(a){return this.a(a)}}
H.i7.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
gfU:function(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=H.ma(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,!0)},
iJ:function(a){var s=this.b.exec(a)
if(s==null)return null
return new H.fD(s)},
fF:function(a,b){var s,r=this.gfU()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new H.fD(s)}}
H.fD.prototype={}
H.jZ.prototype={
gH:function(a){var s=this.d
s.toString
return s},
w:function(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.fF(l,s)
if(p!=null){m.d=p
s=p.b
o=s.index
n=o+s[0].length
if(o===n){if(q.b.unicode){s=m.c
q=s+1
if(q<r){s=C.b.aL(l,s)
if(s>=55296&&s<=56319){s=C.b.aL(l,q)
s=s>=56320&&s<=57343}else s=!1}else s=!1}else s=!1
n=(s?n+1:n)+1}m.c=n
return!0}}m.b=m.d=null
return!1}}
H.cR.prototype={}
H.c4.prototype={
gk:function(a){return a.length},
$iv:1}
H.bC.prototype={
h:function(a,b){H.aU(b,a,a.length)
return a[b]},
l:function(a,b,c){H.aU(b,a,a.length)
a[b]=c},
$il:1,
$ih:1}
H.cQ.prototype={
l:function(a,b,c){H.aU(b,a,a.length)
a[b]=c},
$il:1,
$ih:1}
H.ec.prototype={
h:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.ed.prototype={
h:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.ee.prototype={
h:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.ef.prototype={
h:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.eg.prototype={
h:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.cS.prototype={
gk:function(a){return a.length},
h:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.eh.prototype={
gk:function(a){return a.length},
h:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.d9.prototype={}
H.da.prototype={}
H.db.prototype={}
H.dc.prototype={}
H.ay.prototype={
ab:function(a){return H.h7(v.typeUniverse,this,a)},
di:function(a){return H.oQ(v.typeUniverse,this,a)}}
H.fx.prototype={}
H.fs.prototype={
i:function(a){return this.a}}
H.dl.prototype={}
P.k0.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:7}
P.k_.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.k1.prototype={
$0:function(){this.a.$0()}}
P.k2.prototype={
$0:function(){this.a.$0()}}
P.dk.prototype={
fj:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cj(new P.kp(this,b),0),a)
else throw H.c(P.x("`setTimeout()` not found."))},
fk:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cj(new P.ko(this,a,Date.now(),b),0),a)
else throw H.c(P.x("Periodic timer."))},
$icX:1}
P.kp.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.ko.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.d8(s,o)}q.c=p
r.d.$1(q)}}
P.fg.prototype={
cq:function(a,b){var s,r=this
if(!r.b)r.a.dg(b)
else{s=r.a
if(r.$ti.ab("bq<1>").b(b))s.dk(b)
else s.dm(b)}},
bK:function(a,b){var s
if(b==null)b=P.kY(a)
s=this.a
if(this.b)s.bx(a,b)
else s.dh(a,b)}}
P.ks.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:17}
P.kt.prototype={
$2:function(a,b){this.a.$2(1,new H.cC(a,b))},
$S:18}
P.kC.prototype={
$2:function(a,b){this.a(a,b)}}
P.cd.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.ce.prototype={
gH:function(a){var s=this.c
if(s==null)return this.b
return s.gH(s)},
w:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.w())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.cd){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.e(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.bR(s)
if(o instanceof P.ce){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dh.prototype={
gS:function(a){return new P.ce(this.a())}}
P.d2.prototype={
bK:function(a,b){var s
P.hn(a,"error")
s=this.a
if(s.a!==0)throw H.c(P.mw("Future already completed"))
if(b==null)b=P.kY(a)
s.dh(a,b)},
dX:function(a){return this.bK(a,null)}}
P.d1.prototype={
cq:function(a,b){var s=this.a
if(s.a!==0)throw H.c(P.mw("Future already completed"))
s.dg(b)}}
P.d4.prototype={
iU:function(a){if((this.c&15)!==6)return!0
return this.b.b.cS(this.d,a.a)},
iL:function(a){var s=this.e,r=this.b.b
if(t.R.b(s))return r.js(s,a.a,a.b)
else return r.cS(s,a.a)}}
P.a_.prototype={
cT:function(a,b,c){var s,r=$.H
if(r!==C.e)b=b!=null?P.pz(b,r):b
s=new P.a_($.H,c.ab("a_<0>"))
this.bW(new P.d4(s,b==null?1:3,a,b))
return s},
ax:function(a,b){return this.cT(a,null,b)},
dH:function(a,b,c){var s=new P.a_($.H,c.ab("a_<0>"))
this.bW(new P.d4(s,19,a,b))
return s},
bW:function(a){var s,r=this,q=r.a
if(q<=1){a.a=r.c
r.c=a}else{if(q===2){q=r.c
s=q.a
if(s<4){q.bW(a)
return}r.a=s
r.c=q.c}P.ch(null,null,r.b,new P.k4(r,a))}},
dB:function(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=1){r=m.c
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if(s===2){s=m.c
n=s.a
if(n<4){s.dB(a)
return}m.a=n
m.c=s.c}l.a=m.bE(a)
P.ch(null,null,m.b,new P.kc(l,m))}},
bD:function(){var s=this.c
this.c=null
return this.bE(s)},
bE:function(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
fw:function(a){var s,r=this,q=r.$ti
if(q.ab("bq<1>").b(a))if(q.b(a))P.k7(a,r)
else P.mI(a,r)
else{s=r.bD()
r.a=4
r.c=a
P.cc(r,s)}},
dm:function(a){var s=this,r=s.bD()
s.a=4
s.c=a
P.cc(s,r)},
bx:function(a,b){var s=this,r=s.bD(),q=P.hp(a,b)
s.a=8
s.c=q
P.cc(s,r)},
dg:function(a){if(this.$ti.ab("bq<1>").b(a)){this.dk(a)
return}this.fo(a)},
fo:function(a){this.a=1
P.ch(null,null,this.b,new P.k6(this,a))},
dk:function(a){var s=this
if(s.$ti.b(a)){if(a.a===8){s.a=1
P.ch(null,null,s.b,new P.kb(s,a))}else P.k7(a,s)
return}P.mI(a,s)},
dh:function(a,b){this.a=1
P.ch(null,null,this.b,new P.k5(this,a,b))},
$ibq:1}
P.k4.prototype={
$0:function(){P.cc(this.a,this.b)}}
P.kc.prototype={
$0:function(){P.cc(this.b,this.a.a)}}
P.k8.prototype={
$1:function(a){var s=this.a
s.a=0
s.fw(a)},
$S:7}
P.k9.prototype={
$2:function(a,b){this.a.bx(a,b)},
$S:20}
P.ka.prototype={
$0:function(){this.a.bx(this.b,this.c)}}
P.k6.prototype={
$0:function(){this.a.dm(this.b)}}
P.kb.prototype={
$0:function(){P.k7(this.b,this.a)}}
P.k5.prototype={
$0:function(){this.a.bx(this.b,this.c)}}
P.kf.prototype={
$0:function(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.ey(q.d)}catch(p){s=H.a5(p)
r=H.bf(p)
if(m.c){q=m.b.a.c.a
o=s
o=q==null?o==null:q===o
q=o}else q=!1
o=m.a
if(q)o.c=m.b.a.c
else o.c=P.hp(s,r)
o.b=!0
return}if(l instanceof P.a_&&l.a>=4){if(l.a===8){q=m.a
q.c=l.c
q.b=!0}return}if(t.e.b(l)){n=m.b.a
q=m.a
q.c=l.ax(new P.kg(n),t.z)
q.b=!1}}}
P.kg.prototype={
$1:function(a){return this.a},
$S:21}
P.ke.prototype={
$0:function(){var s,r,q,p,o
try{q=this.a
p=q.a
q.c=p.b.b.cS(p.d,this.b)}catch(o){s=H.a5(o)
r=H.bf(o)
q=this.a
q.c=P.hp(s,r)
q.b=!0}}}
P.kd.prototype={
$0:function(){var s,r,q,p,o,n,m,l,k=this
try{s=k.a.a.c
p=k.b
if(p.a.iU(s)&&p.a.e!=null){p.c=p.a.iL(s)
p.b=!1}}catch(o){r=H.a5(o)
q=H.bf(o)
p=k.a.a.c
n=p.a
m=r
l=k.b
if(n==null?m==null:n===m)l.c=p
else l.c=P.hp(r,q)
l.b=!0}}}
P.fh.prototype={}
P.eL.prototype={}
P.eM.prototype={}
P.fW.prototype={}
P.cX.prototype={}
P.dE.prototype={
i:function(a){return H.f(this.a)},
$iI:1,
gbr:function(){return this.b}}
P.kr.prototype={}
P.kA.prototype={
$0:function(){var s=H.c(this.a)
s.stack=J.aj(this.b)
throw s}}
P.kk.prototype={
ju:function(a){var s,r,q,p=null
try{if(C.e===$.H){a.$0()
return}P.mZ(p,p,this,a)}catch(q){s=H.a5(q)
r=H.bf(q)
P.kz(p,p,this,s,r)}},
jw:function(a,b){var s,r,q,p=null
try{if(C.e===$.H){a.$1(b)
return}P.n_(p,p,this,a,b)}catch(q){s=H.a5(q)
r=H.bf(q)
P.kz(p,p,this,s,r)}},
jx:function(a,b){return this.jw(a,b,t.z)},
iq:function(a){return new P.km(this,a)},
ip:function(a){return this.iq(a,t.z)},
cl:function(a){return new P.kl(this,a)},
dR:function(a,b){return new P.kn(this,a,b)},
jr:function(a){if($.H===C.e)return a.$0()
return P.mZ(null,null,this,a)},
ey:function(a){return this.jr(a,t.z)},
jv:function(a,b){if($.H===C.e)return a.$1(b)
return P.n_(null,null,this,a,b)},
cS:function(a,b){return this.jv(a,b,t.z,t.z)},
jt:function(a,b,c){if($.H===C.e)return a.$2(b,c)
return P.pA(null,null,this,a,b,c)},
js:function(a,b,c){return this.jt(a,b,c,t.z,t.z,t.z)},
jm:function(a){return a},
ex:function(a){return this.jm(a,t.z,t.z,t.z)}}
P.km.prototype={
$0:function(){return this.a.ey(this.b)}}
P.kl.prototype={
$0:function(){return this.a.ju(this.b)}}
P.kn.prototype={
$1:function(a){return this.a.jx(this.b,a)},
$S:function(){return this.c.ab("~(0)")}}
P.d5.prototype={
gS:function(a){var s=new P.d6(this,this.r)
s.c=this.e
return s},
gk:function(a){return this.a},
R:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.fv(b)
return r}},
fv:function(a){var s=this.d
if(s==null)return!1
return this.c2(s[this.c_(a)],a)>=0},
j:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.dl(s==null?q.b=P.lB():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.dl(r==null?q.c=P.lB():r,b)}else return q.fu(0,b)},
fu:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.lB()
s=q.c_(b)
r=p[s]
if(r==null)p[s]=[q.bZ(b)]
else{if(q.c2(r,b)>=0)return!1
r.push(q.bZ(b))}return!0},
O:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.hY(this.c,b)
else return this.hX(0,b)},
hX:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.c_(b)
r=n[s]
q=o.c2(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dJ(p)
return!0},
dl:function(a,b){if(a[b]!=null)return!1
a[b]=this.bZ(b)
return!0},
hY:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.dJ(s)
delete a[b]
return!0},
du:function(){this.r=1073741823&this.r+1},
bZ:function(a){var s,r=this,q=new P.kj(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.du()
return q},
dJ:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.du()},
c_:function(a){return J.a8(a)&1073741823},
c2:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.C(a[r].a,b))return r
return-1}}
P.kj.prototype={}
P.d6.prototype={
gH:function(a){return this.d},
w:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.ct(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cG.prototype={}
P.cK.prototype={$il:1,$ih:1}
P.F.prototype={
gS:function(a){return new H.c0(a,this.gk(a))},
F:function(a,b){return this.h(a,b)},
gej:function(a){return this.gk(a)===0},
jz:function(a){var s,r,q,p,o=this
if(o.gej(a)){s=J.m8(0)
return s}r=o.h(a,0)
q=P.le(o.gk(a),r,!0)
p=1
while(!0){s=o.gk(a)
if(typeof s!=="number")return H.b(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.e(q,p)
q[p]=s;++p}return q},
i:function(a){return P.l7(a,"[","]")}}
P.cM.prototype={}
P.il.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.f(a)
r.a=s+": "
r.a+=H.f(b)},
$S:22}
P.aE.prototype={
K:function(a,b){var s,r
for(s=J.bR(this.gaU(a));s.w();){r=s.gH(s)
b.$2(r,this.h(a,r))}},
gk:function(a){return J.aB(this.gaU(a))},
i:function(a){return P.mf(a)},
$iS:1}
P.dd.prototype={
i:function(a){return P.l7(this,"{","}")},
F:function(a,b){var s,r,q,p="index"
P.hn(b,p)
P.mq(b,p)
for(s=P.oA(this,this.r),r=0;s.w();){q=s.d
if(b===r)return q;++r}throw H.c(P.M(b,this,p,null,r))},
$il:1,
$ih:1}
P.d7.prototype={}
P.dK.prototype={}
P.dO.prototype={}
P.hR.prototype={}
P.jK.prototype={}
P.jL.prototype={
iy:function(a){var s,r,q,p=null,o=P.lm(0,p,a.length)
if(o==null)throw H.c(new P.c8(p,p,!1,p,p,"Invalid range"))
s=o-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.kq(r)
if(q.fG(a,0,o)!==o){C.b.aL(a,o-1)
q.cg()}return new Uint8Array(r.subarray(0,H.oX(0,q.b,r.length)))}}
P.kq.prototype={
cg:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.e(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.e(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.e(r,q)
r[q]=189},
ig:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.e(r,q)
r[q]=240|s>>>18
q=n.b=p+1
if(p>=o)return H.e(r,p)
r[p]=128|s>>>12&63
p=n.b=q+1
if(q>=o)return H.e(r,q)
r[q]=128|s>>>6&63
n.b=p+1
if(p>=o)return H.e(r,p)
r[p]=128|s&63
return!0}else{n.cg()
return!1}},
fG:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.b.aL(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.b.bw(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.ig(p,C.b.bw(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.cg()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.e(s,o)
s[o]=192|p>>>6
l.b=m+1
s[m]=128|p&63}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.e(s,o)
s[o]=224|p>>>12
o=l.b=m+1
if(m>=r)return H.e(s,m)
s[m]=128|p>>>6&63
l.b=o+1
if(o>=r)return H.e(s,o)
s[o]=128|p&63}}}return q}}
P.bL.prototype={}
P.au.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.au&&this.a===b.a&&!0},
aB:function(a,b){return C.c.aB(this.a,b.a)},
gU:function(a){var s=this.a
return(s^C.c.bF(s,30))&1073741823},
i:function(a){var s=this,r=P.nN(H.ob(s)),q=P.dQ(H.o9(s)),p=P.dQ(H.o5(s)),o=P.dQ(H.o6(s)),n=P.dQ(H.o8(s)),m=P.dQ(H.oa(s)),l=P.nO(H.o7(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.a7.prototype={}
P.bo.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.bo&&this.a===b.a},
gU:function(a){return C.c.gU(this.a)},
aB:function(a,b){return C.c.aB(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hM(),o=this.a
if(o<0)return"-"+new P.bo(0-o).i(0)
s=p.$1(C.c.a9(o,6e7)%60)
r=p.$1(C.c.a9(o,1e6)%60)
q=new P.hL().$1(o%1e6)
return""+C.c.a9(o,36e8)+":"+H.f(s)+":"+H.f(r)+"."+H.f(q)}}
P.hL.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.hM.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.I.prototype={
gbr:function(){return H.bf(this.$thrownJsError)}}
P.dD.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.hU(s)
return"Assertion failed"}}
P.ej.prototype={
i:function(a){return"Throw of null."}}
P.as.prototype={
gc1:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc0:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gc1()+o+m
if(!q.a)return l
s=q.gc0()
r=P.hU(q.b)
return l+s+": "+r}}
P.c8.prototype={
gc1:function(){return"RangeError"},
gc0:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.f(q):""
else if(q==null)s=": Not greater than or equal to "+H.f(r)
else if(q>r)s=": Not in inclusive range "+H.f(r)+".."+H.f(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.f(r)
return s}}
P.dY.prototype={
gc1:function(){return"RangeError"},
gc0:function(){var s,r=this.b
if(typeof r!=="number")return r.a_()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.f(s)},
gk:function(a){return this.f}}
P.fa.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.f7.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.cW.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dN.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hU(s)+"."}}
P.em.prototype={
i:function(a){return"Out of Memory"},
gbr:function(){return null},
$iI:1}
P.cV.prototype={
i:function(a){return"Stack Overflow"},
gbr:function(){return null},
$iI:1}
P.dP.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.fu.prototype={
i:function(a){return"Exception: "+this.a}}
P.i_.prototype={
i:function(a){var s=this.a,r=s!=null&&""!==s?"FormatException: "+H.f(s):"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=C.b.bs(q,0,75)+"..."
return r+"\n"+q}else return r}}
P.t.prototype={}
P.h.prototype={
gk:function(a){var s,r=this.gS(this)
for(s=0;r.w();)++s
return s},
F:function(a,b){var s,r,q
P.mq(b,"index")
for(s=this.gS(this),r=0;s.w();){q=s.gH(s)
if(b===r)return q;++r}throw H.c(P.M(b,this,"index",null,r))},
i:function(a){return P.nR(this,"(",")")}}
P.dZ.prototype={}
P.aO.prototype={$il:1,$ih:1}
P.S.prototype={}
P.W.prototype={
gU:function(a){return P.B.prototype.gU.call(C.i,this)},
i:function(a){return"null"}}
P.a0.prototype={}
P.B.prototype={constructor:P.B,$iB:1,
m:function(a,b){return this===b},
gU:function(a){return H.cU(this)},
i:function(a){return"Instance of '"+H.f(H.et(this))+"'"},
toString:function(){return this.i(this)}}
P.ln.prototype={}
P.aa.prototype={}
P.fZ.prototype={
i:function(a){return""},
$iaa:1}
P.G.prototype={}
P.bH.prototype={
gk:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.p.prototype={}
W.hl.prototype={
gk:function(a){return a.length}}
W.dB.prototype={
i:function(a){return String(a)}}
W.dC.prototype={
i:function(a){return String(a)}}
W.dI.prototype={}
W.bm.prototype={
cX:function(a,b,c){if(c!=null)return a.getContext(b,P.pN(c))
return a.getContext(b)},
eH:function(a,b){return this.cX(a,b,null)},
$ibm:1}
W.aC.prototype={
gk:function(a){return a.length}}
W.hD.prototype={
gk:function(a){return a.length}}
W.L.prototype={$iL:1}
W.cw.prototype={
gk:function(a){return a.length}}
W.hE.prototype={}
W.at.prototype={}
W.aJ.prototype={}
W.hF.prototype={
gk:function(a){return a.length}}
W.hG.prototype={
gk:function(a){return a.length}}
W.hH.prototype={
gk:function(a){return a.length}}
W.hJ.prototype={
i:function(a){return String(a)}}
W.cy.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$il:1,
$iv:1,
$ih:1}
W.cz.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gay(a))+" x "+H.f(this.gas(a))},
m:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.bN(b)
s=a.left==s.gbN(b)&&a.top==s.gbR(b)&&this.gay(a)==s.gay(b)&&this.gas(a)==s.gas(b)}else s=!1
return s},
gU:function(a){return W.mK(J.a8(a.left),J.a8(a.top),J.a8(this.gay(a)),J.a8(this.gas(a)))},
gdS:function(a){return a.bottom},
gas:function(a){return a.height},
gbN:function(a){return a.left},
gcR:function(a){return a.right},
gbR:function(a){return a.top},
gay:function(a){return a.width},
$iax:1}
W.dR.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$il:1,
$iv:1,
$ih:1}
W.hK.prototype={
gk:function(a){return a.length}}
W.fk.prototype={
gej:function(a){return this.a.firstElementChild==null},
gk:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
return t.h.a(s[b])},
l:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
this.a.replaceChild(c,s[b])},
j:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var s=this.jz(this)
return new J.a1(s,s.length)}}
W.Q.prototype={
gdT:function(a){return new W.fk(a,a.children)},
gdW:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.a_()
if(q<0)q=-q*0
if(typeof p!=="number")return p.a_()
if(p<0)p=-p*0
return new P.ax(s,r,q,p,t.I)},
i:function(a){return a.localName},
$iQ:1}
W.i.prototype={$ii:1}
W.d.prototype={
ij:function(a,b,c,d){if(c!=null)this.fn(a,b,c,!1)},
fn:function(a,b,c,d){return a.addEventListener(b,H.cj(c,1),!1)},
$id:1}
W.bp.prototype={$ibp:1}
W.dT.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$il:1,
$iv:1,
$ih:1}
W.dU.prototype={
gk:function(a){return a.length}}
W.dW.prototype={
gk:function(a){return a.length}}
W.br.prototype={$ibr:1}
W.i2.prototype={
gk:function(a){return a.length}}
W.bs.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$il:1,
$iv:1,
$ih:1}
W.aZ.prototype={
j3:function(a,b,c,d){return a.open(b,c,!0)},
$iaZ:1}
W.i3.prototype={
$1:function(a){return a.responseText}}
W.i4.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.status
if(typeof o!=="number")return o.cW()
s=o>=200&&o<300
r=o>307&&o<400
o=s||o===0||o===304||r
q=this.b
if(o)q.cq(0,p)
else q.dX(a)}}
W.bt.prototype={}
W.bu.prototype={
ge_:function(a){return a.data},
$ibu:1}
W.bY.prototype={$ibY:1}
W.bx.prototype={$ibx:1}
W.ij.prototype={
i:function(a){return String(a)}}
W.iD.prototype={
gk:function(a){return a.length}}
W.e8.prototype={
h:function(a,b){return P.be(a.get(b))},
K:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.be(s.value[1]))}},
gaU:function(a){var s=[]
this.K(a,new W.iE(s))
return s},
gk:function(a){return a.size},
$iS:1}
W.iE.prototype={
$2:function(a,b){return this.a.push(a)}}
W.e9.prototype={
h:function(a,b){return P.be(a.get(b))},
K:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.be(s.value[1]))}},
gaU:function(a){var s=[]
this.K(a,new W.iF(s))
return s},
gk:function(a){return a.size},
$iS:1}
W.iF.prototype={
$2:function(a,b){return this.a.push(a)}}
W.bA.prototype={$ibA:1}
W.ea.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$il:1,
$iv:1,
$ih:1}
W.am.prototype={$iam:1}
W.fj.prototype={
l:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.e(r,b)
s.replaceChild(c,r[b])},
gS:function(a){var s=this.a.childNodes
return new W.cE(s,s.length)},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.e(s,b)
return s[b]}}
W.y.prototype={
jp:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.ny(s,b,a)}catch(q){H.a5(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.eQ(a):s},
hZ:function(a,b,c){return a.replaceChild(b,c)},
$iy:1}
W.cT.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$il:1,
$iv:1,
$ih:1}
W.bD.prototype={
gk:function(a){return a.length},
$ibD:1}
W.er.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$il:1,
$iv:1,
$ih:1}
W.bE.prototype={$ibE:1}
W.eA.prototype={
h:function(a,b){return P.be(a.get(b))},
K:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.be(s.value[1]))}},
gaU:function(a){var s=[]
this.K(a,new W.iW(s))
return s},
gk:function(a){return a.size},
$iS:1}
W.iW.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eC.prototype={
gk:function(a){return a.length}}
W.b4.prototype={$ib4:1}
W.eG.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$il:1,
$iv:1,
$ih:1}
W.bF.prototype={$ibF:1}
W.eH.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$il:1,
$iv:1,
$ih:1}
W.bG.prototype={
gk:function(a){return a.length},
$ibG:1}
W.eK.prototype={
h:function(a,b){return a.getItem(H.oU(b))},
K:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gaU:function(a){var s=[]
this.K(a,new W.je(s))
return s},
gk:function(a){return a.length},
$iS:1}
W.je.prototype={
$2:function(a,b){return this.a.push(a)}}
W.b5.prototype={$ib5:1}
W.b6.prototype={$ib6:1}
W.b7.prototype={$ib7:1}
W.aF.prototype={$iaF:1}
W.eO.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$il:1,
$iv:1,
$ih:1}
W.eP.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$il:1,
$iv:1,
$ih:1}
W.ju.prototype={
gk:function(a){return a.length}}
W.bI.prototype={$ibI:1}
W.bJ.prototype={$ibJ:1}
W.eU.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$il:1,
$iv:1,
$ih:1}
W.jx.prototype={
gk:function(a){return a.length}}
W.aT.prototype={}
W.jJ.prototype={
i:function(a){return String(a)}}
W.fd.prototype={
gk:function(a){return a.length}}
W.b9.prototype={
giB:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.x("deltaY is not supported"))},
giA:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.x("deltaX is not supported"))},
$ib9:1}
W.cb.prototype={
i_:function(a,b){return a.requestAnimationFrame(H.cj(b,1))},
fE:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.fl.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$il:1,
$iv:1,
$ih:1}
W.d3.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
m:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.bN(b)
s=a.left==s.gbN(b)&&a.top==s.gbR(b)&&a.width==s.gay(b)&&a.height==s.gas(b)}else s=!1
return s},
gU:function(a){return W.mK(J.a8(a.left),J.a8(a.top),J.a8(a.width),J.a8(a.height))},
gas:function(a){return a.height},
gay:function(a){return a.width}}
W.fy.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$il:1,
$iv:1,
$ih:1}
W.d8.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$il:1,
$iv:1,
$ih:1}
W.fS.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$il:1,
$iv:1,
$ih:1}
W.h_.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$il:1,
$iv:1,
$ih:1}
W.l4.prototype={}
W.ft.prototype={}
W.k3.prototype={
$1:function(a){return this.a.$1(a)}}
W.lA.prototype={}
W.K.prototype={
gS:function(a){return new W.cE(a,this.gk(a))}}
W.cE.prototype={
w:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.E(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gH:function(a){return this.d}}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fv.prototype={}
W.fw.prototype={}
W.fz.prototype={}
W.fA.prototype={}
W.fE.prototype={}
W.fF.prototype={}
W.fG.prototype={}
W.fH.prototype={}
W.fI.prototype={}
W.fJ.prototype={}
W.fM.prototype={}
W.fN.prototype={}
W.fP.prototype={}
W.de.prototype={}
W.df.prototype={}
W.fQ.prototype={}
W.fR.prototype={}
W.fV.prototype={}
W.h0.prototype={}
W.h1.prototype={}
W.di.prototype={}
W.dj.prototype={}
W.h2.prototype={}
W.h3.prototype={}
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
P.dm.prototype={$ibu:1,
ge_:function(a){return this.a}}
P.kD.prototype={
$2:function(a,b){this.a[a]=b},
$S:23}
P.dV.prototype={
gbz:function(){return new H.by(new H.d0(this.b,new P.hY()),new P.hZ())},
l:function(a,b,c){var s=this.gbz()
J.nB(s.b.$1(J.kU(s.a,b)),c)},
j:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.aB(this.gbz().a)},
h:function(a,b){var s=this.gbz()
return s.b.$1(J.kU(s.a,b))},
gS:function(a){var s=P.lf(this.gbz(),!1)
return new J.a1(s,s.length)}}
P.hY.prototype={
$1:function(a){return t.h.b(a)}}
P.hZ.prototype={
$1:function(a){return t.h.a(a)}}
P.fO.prototype={
gcR:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.b(r)
return this.$ti.c.a(s+r)},
gdS:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.b(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.f(s.a)+", "+H.f(s.b)+") "+H.f(s.c)+" x "+H.f(s.d)},
m:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.I.b(b)){s=n.a
r=J.bN(b)
if(s==r.gbN(b)){q=n.b
if(q==r.gbR(b)){p=n.c
if(typeof s!=="number")return s.A()
if(typeof p!=="number")return H.b(p)
o=n.$ti.c
if(o.a(s+p)===r.gcR(b)){s=n.d
if(typeof q!=="number")return q.A()
if(typeof s!=="number")return H.b(s)
r=o.a(q+s)===r.gdS(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gU:function(a){var s,r=this,q=r.a,p=J.a8(q),o=r.b,n=J.a8(o),m=r.c
if(typeof q!=="number")return q.A()
if(typeof m!=="number")return H.b(m)
s=r.$ti.c
m=C.c.gU(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.A()
if(typeof q!=="number")return H.b(q)
q=C.c.gU(s.a(o+q))
return P.oz(P.ki(P.ki(P.ki(P.ki(0,p),n),m),q))}}
P.ax.prototype={
gbN:function(a){return this.a},
gbR:function(a){return this.b},
gay:function(a){return this.c},
gas:function(a){return this.d}}
P.c_.prototype={$ic_:1}
P.e4.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$il:1,
$ih:1}
P.c5.prototype={$ic5:1}
P.ek.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$il:1,
$ih:1}
P.iM.prototype={
gk:function(a){return a.length}}
P.eN.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$il:1,
$ih:1}
P.m.prototype={
gdT:function(a){return new P.dV(a,new W.fj(a))}}
P.c9.prototype={$ic9:1}
P.eV.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$il:1,
$ih:1}
P.fB.prototype={}
P.fC.prototype={}
P.fK.prototype={}
P.fL.prototype={}
P.fX.prototype={}
P.fY.prototype={}
P.h4.prototype={}
P.h5.prototype={}
P.hs.prototype={
gk:function(a){return a.length}}
P.dF.prototype={
h:function(a,b){return P.be(a.get(b))},
K:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.be(s.value[1]))}},
gaU:function(a){var s=[]
this.K(a,new P.ht(s))
return s},
gk:function(a){return a.size},
$iS:1}
P.ht.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dG.prototype={
gk:function(a){return a.length}}
P.aY.prototype={}
P.el.prototype={
gk:function(a){return a.length}}
P.fi.prototype={}
P.ey.prototype={
eA:function(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&H.cf(g)){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}if(t.s.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,P.pO(g))
return}if(t.k.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.kW("Incorrect number or type of arguments"))},
ez:function(a,b,c,d,e,f,g){return this.eA(a,b,c,d,e,f,g,null,null,null)}}
P.eI.prototype={
gk:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
s=P.be(a.item(b))
s.toString
return s},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$il:1,
$ih:1}
P.fT.prototype={}
P.fU.prototype={}
K.hm.prototype={
ba:function(a,b){return!0},
i:function(a){return"all"}}
K.dX.prototype={
ba:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)if(s[q].ba(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.b1.prototype={
ba:function(a,b){return!this.eP(0,b)},
i:function(a){return"!["+this.d5(0)+"]"}}
K.iX.prototype={
f2:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.k("May not create a Set with zero characters."))
s=new H.w(t.E)
for(r=new H.c0(a,a.gk(a));r.w();){q=r.d
s.l(0,q,!0)}p=P.lf(new H.b_(s),!0)
C.a.eO(p)
this.a=p},
ba:function(a,b){return C.a.R(this.a,b)},
i:function(a){return P.ls(this.a)}}
L.eJ.prototype={
u:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.jy(this.a.N(0,b))
p.a=[]
p.c=!1
this.c.push(p)
return p},
iI:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.ba(0,a))return p}return null},
i:function(a){return this.b},
dI:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.R(0,l))m+=" (consume)"
for(l=new H.b_(n.d.c),l=l.gS(l);l.w();){r=l.d
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.f(r)+" => ["+H.f(q)+"]")
m=s.c.R(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.o)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.eS.prototype={
i:function(a){var s=H.nf(this.b,"\n","\\n"),r=H.nf(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.eT.prototype={
i:function(a){return this.b}}
L.jv.prototype={
N:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.eJ(this,b)
s.c=[]
this.a.l(0,b,s)}return s},
bp:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.eT(a)
s.c=new H.w(t.i)
this.b.l(0,a,s)}return s},
eE:function(a){return this.jA(a)},
jA:function(a){var s=this
return P.pb(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$eE(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a0.length!==0)j=C.a.jn(a0,0)
else{if(!r.w()){q=3
break}i=r.d
j=i}b.push(j);++m
h=d.iI(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.ls(b)
throw H.c(P.k("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!b.fixed$length)H.n(P.x("removeRange"))
P.lm(0,k,b.length)
b.splice(0,k-0)
C.a.aA(a0,b)
b=[]
c=[]
d=s.d
q=!s.c.R(0,n.a)?7:8
break
case 7:q=9
return n
case 9:case 8:m=l
n=null
k=0
q=5
break
case 6:if(!h.c)c.push(j)
d=h.b
if(d.d!=null){g=P.ls(c)
f=d.d
e=f.c.h(0,g)
n=new L.eS(e==null?f.b:e,g,m)
k=b.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.R(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.ox()
case 1:return P.oy(o)}}},t.j)},
i:function(a){var s,r=new P.bH(""),q=this.d
if(q!=null)r.a=q.dI()+"\n"
for(q=this.a,q=q.gjC(q),q=new H.cN(J.bR(q.a),q.b);q.w();){s=q.a
if(s!=this.d)r.a+=s.dI()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.jy.prototype={
i:function(a){return this.b.b+": "+this.d5(0)}}
O.bV.prototype={
bt:function(){this.a=[]
this.c=this.b=null},
d_:function(a,b,c){this.b=b
this.c=a},
bd:function(a,b){return this.d_(a,null,b)},
aR:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
d9:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gk:function(a){return this.a.length},
gS:function(a){var s=this.a
return new J.a1(s,s.length)},
F:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.e(s,b)
return s[b]},
j:function(a,b){var s,r
if(this.aR([b])){s=this.a
r=s.length
s.push(b)
this.d9(r,[b])}},
aA:function(a,b){var s,r
if(this.aR(b)){s=this.a
r=s.length
C.a.aA(s,b)
this.d9(r,b)}},
$ih:1}
O.cP.prototype={
gk:function(a){return this.a.length},
gq:function(){var s=this.b
return s==null?this.b=D.D():s},
b_:function(){var s=this.b
if(s!=null)s.C(null)},
gV:function(a){var s=this.a
if(s.length>0)return C.a.gcH(s)
else return V.bz()},
bQ:function(a){var s=this.a
if(a==null)s.push(V.bz())
else s.push(a)
this.b_()},
aW:function(){var s=this.a
if(s.length>0){s.pop()
this.b_()}}}
E.hw.prototype={}
E.U.prototype={
ap:function(a,b,c,d,e,f){var s,r=this
r.a=d
r.b=b
r.x=r.r=r.f=r.e=r.d=r.c=null
s=O.l2()
r.y=s
s.bd(r.giW(),r.giZ())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sa0(0,e)
r.sY(f)
r.sbO(c)
if(a!=null)r.y.aA(0,a)},
dj:function(){var s,r
this.e=null
for(s=this.y.a,s=new J.a1(s,s.length);s.w();){r=s.d
if(r.f==null)r.dj()}},
sa0:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gq().O(0,q.ger())
s=q.c
if(s!=null)s.gq().j(0,q.ger())
r=new D.u("shape",p,q.c)
r.b=!0
q.aE(r)}},
sY:function(a){var s,r,q=this,p=q.f
if(p!=a){if(p!=null)p.gq().O(0,q.geu())
s=q.f
q.f=a
if(a!=null)a.gq().j(0,q.geu())
q.dj()
r=new D.u("technique",s,q.f)
r.b=!0
q.aE(r)}},
sbO:function(a){var s,r,q=this
if(!J.C(q.r,a)){s=q.r
if(s!=null)s.gq().O(0,q.gep())
if(a!=null)a.gq().j(0,q.gep())
q.r=a
r=new D.u("mover",s,a)
r.b=!0
q.aE(r)}},
aH:function(a,b){var s,r,q=this,p=q.r,o=p!=null?p.a:null
if(!J.C(o,q.x)){s=q.x
q.x=o
r=new D.u("matrix",s,o)
r.b=!0
q.aE(r)}p=q.f
if(p!=null)p.aH(0,b)
for(p=q.y.a,p=new J.a1(p,p.length);p.w();)p.d.aH(0,b)},
ac:function(a){var s,r,q,p,o=this
if(!o.b)return
s=a.dx
r=o.x
q=s.a
if(r==null)q.push(s.gV(s))
else q.push(r.n(0,s.gV(s)))
s.b_()
a.cO(o.f)
s=a.dy
p=(s&&C.a).gcH(s)
if(p!=null&&o.d!=null)p.cP(a,o)
for(s=o.y.a,s=new J.a1(s,s.length);s.w();)s.d.ac(a)
a.cN()
a.dx.aW()},
aE:function(a){var s=this.z
if(s!=null)s.C(a)},
ak:function(){return this.aE(null)},
es:function(a){this.e=null
this.aE(a)},
j1:function(){return this.es(null)},
ev:function(a){this.aE(a)},
j2:function(){return this.ev(null)},
eq:function(a){this.aE(a)},
j0:function(){return this.eq(null)},
eo:function(a){this.aE(a)},
iY:function(){return this.eo(null)},
iX:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gen(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bW()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}this.ak()},
j_:function(a,b){var s,r
for(s=b.gS(b),r=this.gen();s.w();)s.gH(s).gq().O(0,r)
this.ak()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bS.prototype={
i:function(a){return this.b}}
E.c6.prototype={
i:function(a){return this.b}}
E.fr.prototype={}
E.iP.prototype={
f0:function(a,b){var s,r=this
r.d=r.c=512
r.e=0
r.x=r.r=r.f=new P.au(Date.now(),!1)
r.y=0
r.cx=r.ch=r.Q=r.z=null
s=new O.cP()
s.a=[]
s.gq().j(0,new E.iQ(r))
r.cy=s
s=new O.cP()
s.a=[]
s.gq().j(0,new E.iR(r))
r.db=s
s=new O.cP()
s.a=[]
s.gq().j(0,new E.iS(r))
r.dx=s
s=[]
r.dy=s
s.push(null)
r.fr=new H.w(t.F)},
gjl:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.gV(q)
s=r.db
s=r.z=q.n(0,s.gV(s))
q=s}return q},
gew:function(){var s,r=this,q=r.ch
if(q==null){q=r.gjl()
s=r.dx
s=r.ch=q.n(0,s.gV(s))
q=s}return q},
cO:function(a){var s=this.dy
s.push(a==null?(s&&C.a).gcH(s):a)},
cN:function(){var s=this.dy
if(s.length>1)s.pop()},
cj:function(a){var s=a.b
if(s.length===0)throw H.c(P.k("May not cache a shader with no name."))
if(this.fr.ix(0,s))throw H.c(P.k('Shader cache already contains a shader by the name "'+s+'".'))
this.fr.l(0,s,a)}}
E.iQ.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.iR.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.iS.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.eQ.prototype={
dd:function(a){this.cQ()},
dc:function(){return this.dd(null)},
giK:function(){var s,r=this,q=Date.now(),p=C.c.a9(P.m3(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.au(q,!1)
return s/p},
dD:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.n()
if(typeof p!=="number")return H.b(p)
s=C.d.b9(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.n()
r=C.d.b9(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.lv(C.h,q.gjq())}},
cQ:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.w.fE(s)
r=W.n3(new E.jr(this),t.H)
r.toString
C.w.i_(s,r)}},
ac:function(a){var s,r,q,p,o,n=this
a=a
try{++n.db
n.cx=!1
n.dD()
if(a==null)a=n.d
if(a!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.au(p,!1)
q.y=P.m3(p-q.r.a).a*0.000001
p=q.cy
C.a.sk(p.a,0)
p.b_()
p=q.db
C.a.sk(p.a,0)
p.b_()
p=q.dx
C.a.sk(p.a,0)
p.b_()
p=q.dy
p.toString
C.a.sk(p,0)
q.dy.push(null)
a.ac(n.e)}}catch(o){s=H.a5(o)
r=H.bf(o)
P.hj("Error: "+H.f(s))
P.hj("Stack: "+H.f(r))
throw H.c(s)}},
jo:function(){return this.ac(null)}}
E.jr.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.jo()}}}
Z.fe.prototype={}
Z.hA.prototype={
P:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.a5(q)
r=P.k('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.f(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.f(s.e)+"]"}}
Z.d_.prototype={}
Z.bT.prototype={
aN:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
P:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].P(a)},
ai:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
ac:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.e(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)o.push(s[q].i(0))
p=[]
for(s=this.c,r=s.length,q=0;q<r;++q)p.push(J.aj(s[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.u(o,", ")+"\nAttrs:   "+C.a.u(p,", ")}}
Z.cF.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.et(this.c))+"'")+"]"}}
Z.b8.prototype={
gd3:function(a){var s=this.a,r=(s&$.ar().a)!==0?3:0
if((s&$.bk().a)!==0)r+=3
if((s&$.bj().a)!==0)r+=3
if((s&$.bl().a)!==0)r+=2
if((s&$.bQ().a)!==0)r+=3
if((s&$.dy().a)!==0)r+=3
if((s&$.dz().a)!==0)r+=4
if((s&$.co().a)!==0)++r
return(s&$.bi().a)!==0?r+4:r},
io:function(a){var s,r=$.ar(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bk()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bj()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bl()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bQ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dy()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dz()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.co()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bi()
if((q&r.a)!==0)if(s===a)return r
return $.nw()},
m:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b8))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.ar().a)!==0)s.push("Pos")
if((r&$.bk().a)!==0)s.push("Norm")
if((r&$.bj().a)!==0)s.push("Binm")
if((r&$.bl().a)!==0)s.push("Txt2D")
if((r&$.bQ().a)!==0)s.push("TxtCube")
if((r&$.dy().a)!==0)s.push("Clr3")
if((r&$.dz().a)!==0)s.push("Clr4")
if((r&$.co().a)!==0)s.push("Weight")
if((r&$.bi().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.u(s,"|")}}
D.hB.prototype={}
D.bW.prototype={
j:function(a,b){var s=this.a;(s==null?this.a=[]:s).push(b)},
O:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.a.R(q,b)
if(q===!0){q=r.a
s=(q&&C.a).O(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.a.R(q,b)
if(q===!0){q=r.b
s=(q&&C.a).O(q,b)||s}return s},
C:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.V()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.a.K(P.lf(s,!0),new D.hV(o))
s=p.b
if(s!=null){p.b=[]
C.a.K(s,new D.hW(o))}return!0},
cs:function(){return this.C(null)},
bb:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.C(s)}}}}
D.hV.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.hW.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.V.prototype={}
D.aK.prototype={}
D.aL.prototype={}
D.u.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
O.kw.prototype={
aG:function(a,b,c){return this.jj(a,b,!1)},
jj:function(a,b,c){var s=0,r=P.af(t.z),q=this
var $async$aG=P.ah(function(d,e){if(d===1)return P.ac(e,r)
while(true)switch(s){case 0:s=2
return P.a4(q.aF(a.split("\n"),b,!1),$async$aG)
case 2:return P.ad(null,r)}})
return P.ae($async$aG,r)},
aF:function(a,b,c){return this.jh(a,b,!1)},
jh:function(a,b,c){var s=0,r=P.af(t.z),q,p=2,o,n=[],m=this,l,k,j,i,h,g
var $async$aF=P.ah(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:h=0
case 3:if(!!0){s=4
break}k=h
j=a.length
if(typeof k!=="number"){q=k.a_()
s=1
break}if(!(k<j)){s=4
break}p=6
k=h
if(k>>>0!==k||k>=j){q=H.e(a,k)
s=1
break}s=9
return P.a4(m.ae(a[k],b,!1),$async$aF)
case 9:p=2
s=8
break
case 6:p=5
g=o
l=H.a5(g)
k=h
if(typeof k!=="number"){q=k.A()
s=1
break}throw H.c(P.k("Line "+H.f(k+1)+": "+H.f(l)))
s=8
break
case 5:s=2
break
case 8:k=h
if(typeof k!=="number"){q=k.A()
s=1
break}h=k+1
s=3
break
case 4:case 1:return P.ad(q,r)
case 2:return P.ac(o,r)}})
return P.ae($async$aF,r)},
ae:function(a,b,c){return this.jf(a,b,!1)},
jf:function(a,b,c){var s=0,r=P.af(t.z),q,p=2,o,n=[],m=this,l,k,j,i,h,g,f,e
var $async$ae=P.ah(function(d,a0){if(d===1){o=a0
s=p}while(true)switch(s){case 0:a=a
p=4
l=J.lV(a,"#")
i=l
if(typeof i!=="number"){q=i.cW()
s=1
break}if(i>=0)a=J.lW(a,0,l)
a=J.kV(a)
if(J.aB(a)<=0){s=1
break}k=O.n2(a)
if(J.aB(k)<1){s=1
break}case 7:switch(J.E(k,0)){case"newmtl":s=9
break
case"Ka":s=10
break
case"Kd":s=11
break
case"Ks":s=12
break
case"Ns":s=13
break
case"d":s=14
break
case"Tr":s=15
break
case"map_Ka":s=16
break
case"map_Kd":s=17
break
case"map_Ks":s=18
break
case"map_d":s=19
break
case"map_bump":s=20
break
case"bump":s=21
break
default:s=22
break}break
case 9:i=J.E(k,1)
h=O.a2()
m.c=h
m.b.l(0,i,h)
s=1
break
case 10:g=O.bc(J.E(k,1))
m.c.r.sp(0,V.l3(g))
s=1
break
case 11:g=O.bc(J.E(k,1))
m.c.x.sp(0,V.l3(g))
s=1
break
case 12:g=O.bc(J.E(k,1))
m.c.z.sp(0,V.l3(g))
s=1
break
case 13:g=O.bc(J.E(k,1))
i=g.length
if(i!==1)H.n(P.k("Shininess may only have 1 number."))
h=m.c.z
if(0>=i){q=H.e(g,0)
s=1
break}h.saa(g[0])
s=1
break
case 14:g=O.bc(J.E(k,1))
i=g.length
if(i!==1)H.n(P.k("Alpha may only have 1 number."))
h=m.c.db
if(0>=i){q=H.e(g,0)
s=1
break}h.sal(0,g[0])
s=1
break
case 15:g=O.bc(J.E(k,1))
i=g.length
if(i!==1)H.n(P.k("Alpha may only have 1 number."))
h=m.c.db
if(0>=i){q=H.e(g,0)
s=1
break}i=g[0]
if(typeof i!=="number"){q=H.b(i)
s=1
break}h.sal(0,1-i)
s=1
break
case 16:s=23
return P.a4(m.c8(J.E(k,1),b),$async$ae)
case 23:s=1
break
case 17:s=24
return P.a4(m.c9(J.E(k,1),b),$async$ae)
case 24:s=1
break
case 18:s=25
return P.a4(m.ca(J.E(k,1),b),$async$ae)
case 25:s=1
break
case 19:s=26
return P.a4(m.c7(J.E(k,1),b),$async$ae)
case 26:s=1
break
case 20:s=27
return P.a4(m.bB(J.E(k,1),b),$async$ae)
case 27:s=1
break
case 21:s=28
return P.a4(m.bB(J.E(k,1),b),$async$ae)
case 28:s=1
break
case 22:s=1
break
case 8:p=2
s=6
break
case 4:p=3
e=o
j=H.a5(e)
i=P.k('Line: "'+H.f(a)+'": '+H.f(j))
throw H.c(i)
s=6
break
case 3:s=2
break
case 6:case 1:return P.ad(q,r)
case 2:return P.ac(o,r)}})
return P.ae($async$ae,r)},
c8:function(a,b){return this.hP(a,b)},
hP:function(a,b){var s=0,r=P.af(t.z),q=this,p,o
var $async$c8=P.ah(function(c,d){if(c===1)return P.ac(d,r)
while(true)switch(s){case 0:p=b+"/"+a
o=q.c
o.r.sag(q.a.at(p))
return P.ad(null,r)}})
return P.ae($async$c8,r)},
c9:function(a,b){return this.hR(a,b)},
hR:function(a,b){var s=0,r=P.af(t.z),q=this,p,o
var $async$c9=P.ah(function(c,d){if(c===1)return P.ac(d,r)
while(true)switch(s){case 0:p=b+"/"+a
o=q.c
o.x.sag(q.a.at(p))
return P.ad(null,r)}})
return P.ae($async$c9,r)},
ca:function(a,b){return this.hW(a,b)},
hW:function(a,b){var s=0,r=P.af(t.z),q=this,p,o
var $async$ca=P.ah(function(c,d){if(c===1)return P.ac(d,r)
while(true)switch(s){case 0:p=b+"/"+a
o=q.c
o.z.sag(q.a.at(p))
return P.ad(null,r)}})
return P.ae($async$ca,r)},
c7:function(a,b){return this.hO(a,b)},
hO:function(a,b){var s=0,r=P.af(t.z),q=this,p,o
var $async$c7=P.ah(function(c,d){if(c===1)return P.ac(d,r)
while(true)switch(s){case 0:p=b+"/"+a
o=q.c
o.db.sag(q.a.at(p))
return P.ad(null,r)}})
return P.ae($async$c7,r)},
bB:function(a,b){return this.hQ(a,b)},
hQ:function(a,b){var s=0,r=P.af(t.z),q=this,p,o
var $async$bB=P.ah(function(c,d){if(c===1)return P.ac(d,r)
while(true)switch(s){case 0:p=b+"/"+a
o=q.c
o.Q.sag(q.a.at(p))
return P.ad(null,r)}})
return P.ae($async$bB,r)}}
O.ky.prototype={}
O.kx.prototype={
giH:function(){var s=this.Q,r=s.y.a,q=r.length
if(q===1){if(0>=q)return H.e(r,0)
return r[0]}return s},
aG:function(a,b,c){return this.jk(a,b,!1)},
jk:function(a,b,c){var s=0,r=P.af(t.z),q=this
var $async$aG=P.ah(function(d,e){if(d===1)return P.ac(e,r)
while(true)switch(s){case 0:s=2
return P.a4(q.aF(a.split("\n"),b,!1),$async$aG)
case 2:return P.ad(null,r)}})
return P.ae($async$aG,r)},
aF:function(a,b,c){return this.ji(a,b,!1)},
ji:function(a,b,c){var s=0,r=P.af(t.z),q,p=2,o,n=[],m=this,l,k,j,i,h,g
var $async$aF=P.ah(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:h=0
case 3:if(!!0){s=4
break}k=h
j=a.length
if(typeof k!=="number"){q=k.a_()
s=1
break}if(!(k<j)){s=4
break}p=6
k=h
if(k>>>0!==k||k>=j){q=H.e(a,k)
s=1
break}s=9
return P.a4(m.ae(a[k],b,!1),$async$aF)
case 9:p=2
s=8
break
case 6:p=5
g=o
l=H.a5(g)
k=h
if(typeof k!=="number"){q=k.A()
s=1
break}throw H.c(P.k("Line "+H.f(k+1)+": "+H.f(l)))
s=8
break
case 5:s=2
break
case 8:k=h
if(typeof k!=="number"){q=k.A()
s=1
break}h=k+1
s=3
break
case 4:case 1:return P.ad(q,r)
case 2:return P.ac(o,r)}})
return P.ae($async$aF,r)},
ae:function(a,b,c){return this.jg(a,b,!1)},
jg:function(a,b,a0){var s=0,r=P.af(t.z),q,p=2,o,n=[],m=this,l,k,j,i,h,g,f,e,d,c
var $async$ae=P.ah(function(a1,a2){if(a1===1){o=a2
s=p}while(true)switch(s){case 0:a=a
p=4
l=J.lV(a,"#")
i=l
if(typeof i!=="number"){q=i.cW()
s=1
break}if(i>=0)a=J.lW(a,0,l)
a=J.kV(a)
if(J.aB(a)<=0){s=1
break}k=O.n2(a)
if(J.aB(k)<1){s=1
break}case 7:switch(J.E(k,0)){case"v":s=9
break
case"vt":s=10
break
case"vn":s=11
break
case"p":s=12
break
case"l":s=13
break
case"f":s=14
break
case"mtllib":s=15
break
case"usemtl":s=16
break
case"g":s=17
break
case"o":s=18
break
default:s=19
break}break
case 9:h=O.bc(J.E(k,1))
i=h.length
if(i<3)H.n(P.k("Positions must have at least 3 numbers."))
if(i>4)H.n(P.k("Positions must have at most than 4 numbers."))
if(i===4){if(3>=i){q=H.e(h,3)
s=1
break}g=h[3]
$.z().toString
if(typeof g!=="number"){q=g.t()
s=1
break}if(!(Math.abs(g-1)<1e-9))H.n(P.k("Currently, non-one w values in positions are not supported."))}g=m.b
if(0>=i){q=H.e(h,0)
s=1
break}f=h[0]
if(1>=i){q=H.e(h,1)
s=1
break}e=h[1]
if(2>=i){q=H.e(h,2)
s=1
break}e=[f,e,h[2]]
e=new O.ky(new V.X(e[0],e[1],e[2]))
e.b=[]
g.push(e)
s=1
break
case 10:h=O.bc(J.E(k,1))
i=h.length
if(i<2)H.n(P.k("Textures must have at least 2 numbers."))
if(i>3)H.n(P.k("Textures must have at most than 3 numbers."))
if(i===3){if(2>=i){q=H.e(h,2)
s=1
break}g=h[2]
$.z().toString
if(typeof g!=="number"){q=g.t()
s=1
break}if(!(Math.abs(g-0)<1e-9))H.n(P.k("Currently, non-zero z values in textures are not supported."))}g=m.c
if(0>=i){q=H.e(h,0)
s=1
break}f=h[0]
if(1>=i){q=H.e(h,1)
s=1
break}f=[f,h[1]]
g.push(new V.a9(f[0],f[1]))
s=1
break
case 11:h=O.bc(J.E(k,1))
i=h.length
if(i!==3)H.n(P.k("Normals must have exactly 3 numbers."))
g=m.d
if(0>=i){q=H.e(h,0)
s=1
break}f=h[0]
if(1>=i){q=H.e(h,1)
s=1
break}e=h[1]
if(2>=i){q=H.e(h,2)
s=1
break}g.push(new V.A(f,e,h[2]))
s=1
break
case 12:m.hV(J.E(k,1))
s=1
break
case 13:m.hT(J.E(k,1))
s=1
break
case 14:m.hS(J.E(k,1))
s=1
break
case 15:s=20
return P.a4(m.bC(J.E(k,1),b,!1),$async$ae)
case 20:s=1
break
case 16:i=J.E(k,1)
m.x=m.e.h(0,i)
m.bG()
s=1
break
case 17:m.r=J.E(k,1)
m.bG()
s=1
break
case 18:m.r=J.E(k,1)
m.bG()
s=1
break
case 19:s=1
break
case 8:p=2
s=6
break
case 4:p=3
c=o
j=H.a5(c)
i=P.k('Line: "'+H.f(a)+'": '+H.f(j))
throw H.c(i)
s=6
break
case 3:s=2
break
case 6:case 1:return P.ad(q,r)
case 2:return P.ac(o,r)}})
return P.ae($async$ae,r)},
bG:function(){var s,r,q,p=this
if(p.z==null||p.y.a.c.length!==0){s=F.lr()
p.y=s
s=E.N(null,!0,null,"",s,null)
p.z=s
p.Q.y.j(0,s)
for(s=p.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)C.a.sk(s[q].b,0)}p.z.sY(p.x)
p.z.a=p.r},
bX:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=", was out of range [-",e=null,d=a.split("/"),c=d.length
if(0>=c)return H.e(d,0)
s=P.lO(d[0])
r=g.b.length
if(typeof s!=="number")return s.a_()
if(s<-r||s>r||s===0)throw H.c(P.k("The position index, "+s+f+r+".."+r+"] or 0."))
if(s<0)s=r+s+1;--s
if(c>1){q=d[1]
if(q!=null&&q.length>0){p=P.lO(q)
o=g.c
r=o.length
if(typeof p!=="number")return p.a_()
if(p<-r||p>r||p===0)throw H.c(P.k("The texture index, "+p+f+r+".."+r+"] or 0."))
if(p<0)p=r+p+1
n=p-1
if(n<0||n>=r)return H.e(o,n)
m=o[n]}else m=e}else m=e
if(c>2){q=d[2]
if(q!=null&&q.length>0){l=P.lO(q)
c=g.d
r=c.length
if(typeof l!=="number")return l.a_()
if(l<-r||l>r||l===0)throw H.c(P.k("The normal index, "+l+f+r+".."+r+"] or 0."))
if(l<0)l=r+l+1
o=l-1
if(o<0||o>=r)return H.e(c,o)
k=c[o]}else k=e}else k=e
c=g.b
if(s<0||s>=c.length)return H.e(c,s)
j=c[s]
for(c=j.b,o=c.length,i=0;i<c.length;c.length===o||(0,H.o)(c),++i){h=c[i]
if(J.C(h.y,m)&&J.C(h.r,k))return h}h=F.ly(e,e,e,e,e,e,e,e,0)
c=j.a
if(!J.C(h.f,c)){h.f=c
c=h.a
if(c!=null)c.ak()}if(!J.C(h.y,m)){h.y=m
c=h.a
if(c!=null)c.ak()}k=k==null?e:k.I()
if(!J.C(h.r,k)){h.r=k
c=h.a
if(c!=null)c.ak()}g.y.a.j(0,h)
j.b.push(h)
return h},
hV:function(a){var s,r=O.kB(a),q=[],p=r.length
for(s=0;s<p;++s){if(s>=r.length)return H.e(r,s)
q.push(this.bX(r[s]))}this.y.b.il(q)},
hT:function(a){var s,r=O.kB(a),q=[],p=r.length
for(s=0;s<p;++s){if(s>=r.length)return H.e(r,s)
q.push(this.bX(r[s]))}this.y.c.ik(q)},
hS:function(a){var s,r=O.kB(a),q=[],p=r.length
for(s=0;s<p;++s){if(s>=r.length)return H.e(r,s)
q.push(this.bX(r[s]))}this.y.d.ci(q)},
bC:function(a,b,c){return this.hU(a,b,!1)},
hU:function(a,b,c){var s=0,r=P.af(t.z),q=this,p
var $async$bC=P.ah(function(d,e){if(d===1)return P.ac(e,r)
while(true)switch(s){case 0:s=2
return P.a4(O.eb(b+"/"+a,q.a,!1),$async$bC)
case 2:p=e
q.e.aA(0,p)
return P.ad(null,r)}})
return P.ae($async$bC,r)}}
O.eu.prototype={}
X.dJ.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dJ))return!1
if(this.a!=b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.e1.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e1))return!1
if(this.a!=b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.ia.prototype={
j8:function(a){this.d.j(0,a.a)
return!1},
j4:function(a){this.d.O(0,a.a)
return!1}}
X.cL.prototype={}
X.ik.prototype={
bi:function(a,b){var s,r,q,p,o,n=this,m=Date.now(),l=n.x,k=b.a,j=n.Q
if(typeof k!=="number")return k.n()
s=b.b
r=n.ch
if(typeof s!=="number")return s.n()
q=l.a
if(typeof q!=="number")return q.A()
l=l.b
if(typeof l!=="number")return l.A()
p=new V.a9(q+k*j,l+s*r)
r=n.a.gbJ()
o=new X.c3(a,V.b2(),n.x,r,p)
o.b=!0
n.z=new P.au(m,!1)
n.x=p
return o},
cM:function(a,b){this.r=a.a
return!1},
bo:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.eI()
if(typeof s!=="number")return s.v()
this.r=(s&~r)>>>0
return!1},
bn:function(a,b){var s=this.d
if(s==null)return!1
s.C(this.bi(a,b))
return!0},
j9:function(a){return!1},
hn:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cL(c,p.a.gbJ(),b)
q.b=!0
r.C(q)
p.y=new P.au(s,!1)
p.x=V.b2()}}
X.bB.prototype={
m:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.bB))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.c3.prototype={}
X.iG.prototype={
c3:function(a,b,c){var s=this,r=new P.au(Date.now(),!1),q=s.a.gbJ(),p=new X.c3(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
cM:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.C(this.c3(a,b,!0))
return!0},
bo:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.eI()
if(typeof r!=="number")return r.v()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.C(s.c3(a,b,!0))
return!0},
bn:function(a,b){var s=this.d
if(s==null)return!1
s.C(this.c3(a,b,!1))
return!0},
ja:function(a,b){return!1},
ge0:function(){var s=this.b
return s==null?this.b=D.D():s},
gcU:function(){var s=this.c
return s==null?this.c=D.D():s},
gbm:function(){var s=this.d
return s==null?this.d=D.D():s}}
X.es.prototype={}
X.cY.prototype={}
X.jw.prototype={
bi:function(a,b){var s=this,r=new P.au(Date.now(),!1),q=a.length>0?a[0]:V.b2(),p=s.a.gbJ(),o=new X.cY(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
j7:function(a){var s=this.b
if(s==null)return!1
s.C(this.bi(a,!0))
return!0},
j5:function(a){var s=this.c
if(s==null)return!1
s.C(this.bi(a,!0))
return!0},
j6:function(a){var s=this.d
if(s==null)return!1
s.C(this.bi(a,!1))
return!0},
gd4:function(a){var s=this.b
return s==null?this.b=D.D():s},
ge2:function(a){var s=this.c
return s==null?this.c=D.D():s},
gbm:function(){var s=this.d
return s==null?this.d=D.D():s}}
X.fb.prototype={
gbJ:function(){var s=this.a,r=C.f.gdW(s).c
r.toString
s=C.f.gdW(s).d
s.toString
return V.mr(0,0,r,s)},
dq:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.e1(s,new X.bB(r,a.altKey,a.shiftKey))},
b4:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
cf:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
aS:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.t()
if(typeof o!=="number")return H.b(o)
s=r.top
if(typeof p!=="number")return p.t()
if(typeof s!=="number")return H.b(s)
return new V.a9(q-o,p-s)},
bj:function(a){return new V.ao(a.movementX,a.movementY)},
cb:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=[]
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=C.d.a4(p.pageX)
C.d.a4(p.pageY)
n=k.left
if(typeof n!=="number")return H.b(n)
C.d.a4(p.pageX)
m=C.d.a4(p.pageY)
l=k.top
if(typeof l!=="number")return H.b(l)
j.push(new V.a9(o-n,m-l))}return j},
aP:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.dJ(s,new X.bB(r,a.altKey,a.shiftKey))},
c4:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.t()
if(typeof n!=="number")return H.b(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.t()
if(typeof p!=="number")return H.b(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.b(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.b(p)
p=r<p}else p=!1
return p},
hf:function(a){this.f=!0},
h3:function(a){this.f=!1},
h9:function(a){if(this.f&&this.c4(a))a.preventDefault()},
hl:function(a){var s
if(!this.f)return
s=this.dq(a)
this.b.j8(s)},
hj:function(a){var s
if(!this.f)return
s=this.dq(a)
this.b.j4(s)},
hp:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.b4(a)
if(p.x){s=p.aP(a)
r=p.bj(a)
if(p.d.cM(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.aP(a)
q=p.aS(a)
if(p.c.cM(s,q))a.preventDefault()},
ht:function(a){var s,r,q,p=this
p.b4(a)
s=p.aP(a)
if(p.x){r=p.bj(a)
if(p.d.bo(s,r))a.preventDefault()
return}if(p.r)return
q=p.aS(a)
if(p.c.bo(s,q))a.preventDefault()},
hd:function(a){var s,r,q,p=this
if(!p.c4(a)){p.b4(a)
s=p.aP(a)
if(p.x){r=p.bj(a)
if(p.d.bo(s,r))a.preventDefault()
return}if(p.r)return
q=p.aS(a)
if(p.c.bo(s,q))a.preventDefault()}},
hr:function(a){var s,r,q,p=this
p.b4(a)
s=p.aP(a)
if(p.x){r=p.bj(a)
if(p.d.bn(s,r))a.preventDefault()
return}if(p.r)return
q=p.aS(a)
if(p.c.bn(s,q))a.preventDefault()},
hb:function(a){var s,r,q,p=this
if(!p.c4(a)){p.b4(a)
s=p.aP(a)
if(p.x){r=p.bj(a)
if(p.d.bn(s,r))a.preventDefault()
return}if(p.r)return
q=p.aS(a)
if(p.c.bn(s,q))a.preventDefault()}},
hv:function(a){var s,r,q=this
q.b4(a)
s=new V.ao((a&&C.v).giA(a),C.v.giB(a)).n(0,q.Q)
if(q.x){if(q.d.j9(s))a.preventDefault()
return}if(q.r)return
r=q.aS(a)
if(q.c.ja(s,r))a.preventDefault()},
hx:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aP(q.y)
r=q.aS(q.y)
q.d.hn(s,r,p)}},
hN:function(a){var s,r=this
r.a.focus()
r.f=!0
r.cf(a)
s=r.cb(a)
if(r.e.j7(s))a.preventDefault()},
hJ:function(a){var s
this.cf(a)
s=this.cb(a)
if(this.e.j5(s))a.preventDefault()},
hL:function(a){var s
this.cf(a)
s=this.cb(a)
if(this.e.j6(s))a.preventDefault()}}
D.cx.prototype={
bu:function(a){var s=this.r
if(s!=null)s.C(a)},
sp:function(a,b){var s,r,q=this
if(b==null)b=new V.q(1,1,1)
if(!q.c.m(0,b)){s=q.c
q.c=b
r=new D.u("color",s,b)
r.b=!0
q.bu(r)}},
$iaN:1}
D.aN.prototype={}
D.cJ.prototype={
bu:function(a){var s=this.y
if(s!=null)s.C(a)},
dw:function(a){var s=this.z
if(s!=null)s.C(a)},
hm:function(){return this.dw(null)},
hz:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(q==null||this.fz(q))return!1}return!0},
fY:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gdv(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
if(p instanceof D.cx)this.f.push(p)
o=p.r
if(o==null){o=new D.bW()
o.d=0
p.r=o}n=o.a;(n==null?o.a=[]:n).push(r)}s=new D.aK()
s.b=!0
this.bu(s)},
hD:function(a,b){var s,r,q
for(s=b.gS(b),r=this.gdv();s.w();){q=s.gH(s)
C.a.O(this.e,q)
q.gq().O(0,r)}s=new D.aL()
s.b=!0
this.bu(s)},
fz:function(a){var s=C.a.R(this.f,a)
return s}}
V.q.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.q))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}}
V.ak.prototype={
eG:function(){var s=this
return new V.ak(Math.floor(s.a*255)/255,Math.floor(s.b*255)/255,Math.floor(s.c*255)/255,Math.floor(s.d*255)/255)},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ak))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.J(s.a,3,0)+", "+V.J(s.b,3,0)+", "+V.J(s.c,3,0)+", "+V.J(s.d,3,0)+"]"}}
V.hT.prototype={}
V.e6.prototype={
ah:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
m:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.e6))return!1
s=b.a
r=q.a
$.z().toString
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.d
r=q.d
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.e
r=q.e
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.f
r=q.f
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.r
r=q.r
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.x
r=q.x
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.y
r=q.y
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){var s,r,q,p,o=this,n=V.cl([o.a,o.d,o.r],3,0),m=V.cl([o.b,o.e,o.x],3,0),l=V.cl([o.c,o.f,o.y],3,0),k=n.length
if(0>=k)return H.e(n,0)
s="["+n[0]+", "
r=m.length
if(0>=r)return H.e(m,0)
s=s+m[0]+", "
q=l.length
if(0>=q)return H.e(l,0)
s=s+l[0]+",\n"
if(1>=k)return H.e(n,1)
p=" "+n[1]+", "
if(1>=r)return H.e(m,1)
p=p+m[1]+", "
if(1>=q)return H.e(l,1)
p=s+(p+l[1]+",\n")
if(2>=k)return H.e(n,2)
k=" "+n[2]+", "
if(2>=r)return H.e(m,2)
k=k+m[2]+", "
if(2>=q)return H.e(l,2)
return p+(k+l[2]+"]")}}
V.c2.prototype={
ah:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
cG:function(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a,b3=b1.f
if(typeof b2!=="number")return b2.n()
if(typeof b3!=="number")return H.b(b3)
s=b1.b
r=b1.e
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
q=b2*b3-s*r
p=b1.r
if(typeof p!=="number")return H.b(p)
o=b1.c
if(typeof o!=="number")return o.n()
n=b2*p-o*r
m=b1.x
l=b1.d
k=b2*m-l*r
j=s*p-o*b3
i=s*m-l*b3
h=o*m-l*p
g=b1.y
f=b1.cy
if(typeof g!=="number")return g.n()
e=b1.z
d=b1.cx
if(typeof e!=="number")return e.n()
c=g*f-e*d
b=b1.db
a=b1.Q
if(typeof a!=="number")return a.n()
a0=g*b-a*d
a1=b1.dx
a2=b1.ch
a3=g*a1-a2*d
a4=e*b-a*f
a5=e*a1-a2*f
a6=a*a1-a2*b
a7=q*a6-n*a5+k*a4+j*a3-i*a0+h*c
$.z().toString
if(Math.abs(a7-0)<1e-9)return V.bz()
a8=1/a7
a9=-r
b0=-d
return V.b0((b3*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(b2*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-b3*a3+m*c)*a8,(-b2*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+b3*a0-p*c)*a8,(b2*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
n:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a,b3=b5.a
if(typeof b2!=="number")return b2.n()
if(typeof b3!=="number")return H.b(b3)
s=b1.b
r=b5.e
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
q=b1.c
p=b5.y
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.b(p)
o=b1.d
n=b5.cx
m=b5.b
if(typeof m!=="number")return H.b(m)
l=b5.f
if(typeof l!=="number")return H.b(l)
k=b5.z
if(typeof k!=="number")return H.b(k)
j=b5.cy
i=b5.c
if(typeof i!=="number")return H.b(i)
h=b5.r
if(typeof h!=="number")return H.b(h)
g=b5.Q
if(typeof g!=="number")return H.b(g)
f=b5.db
e=b5.d
d=b5.x
c=b5.ch
b=b5.dx
a=b1.e
if(typeof a!=="number")return a.n()
a0=b1.f
if(typeof a0!=="number")return a0.n()
a1=b1.r
if(typeof a1!=="number")return a1.n()
a2=b1.x
a3=b1.y
if(typeof a3!=="number")return a3.n()
a4=b1.z
if(typeof a4!=="number")return a4.n()
a5=b1.Q
if(typeof a5!=="number")return a5.n()
a6=b1.ch
a7=b1.cx
a8=b1.cy
a9=b1.db
b0=b1.dx
return V.b0(b2*b3+s*r+q*p+o*n,b2*m+s*l+q*k+o*j,b2*i+s*h+q*g+o*f,b2*e+s*d+q*c+o*b,a*b3+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*b3+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*b3+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
bS:function(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=a.a
if(typeof h!=="number")return h.n()
if(typeof g!=="number")return H.b(g)
s=i.b
r=a.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
q=i.c
p=a.c
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.b(p)
o=i.e
if(typeof o!=="number")return o.n()
n=i.f
if(typeof n!=="number")return n.n()
m=i.r
if(typeof m!=="number")return m.n()
l=i.y
if(typeof l!=="number")return l.n()
k=i.z
if(typeof k!=="number")return k.n()
j=i.Q
if(typeof j!=="number")return j.n()
return new V.A(h*g+s*r+q*p,o*g+n*r+m*p,l*g+k*r+j*p)},
bq:function(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=a.a
if(typeof h!=="number")return h.n()
if(typeof g!=="number")return H.b(g)
s=i.b
r=a.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
q=i.c
p=a.c
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.b(p)
o=i.e
if(typeof o!=="number")return o.n()
n=i.f
if(typeof n!=="number")return n.n()
m=i.r
if(typeof m!=="number")return m.n()
l=i.y
if(typeof l!=="number")return l.n()
k=i.z
if(typeof k!=="number")return k.n()
j=i.Q
if(typeof j!=="number")return j.n()
return new V.X(h*g+s*r+q*p+i.d,o*g+n*r+m*p+i.x,l*g+k*r+j*p+i.ch)},
m:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.c2))return!1
s=b.a
r=q.a
$.z().toString
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.d-q.d)<1e-9))return!1
s=b.e
r=q.e
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.f
r=q.f
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.r
r=q.r
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.x-q.x)<1e-9))return!1
s=b.y
r=q.y
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.z
r=q.z
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.Q
r=q.Q
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.ch-q.ch)<1e-9))return!1
if(!(Math.abs(b.cx-q.cx)<1e-9))return!1
if(!(Math.abs(b.cy-q.cy)<1e-9))return!1
if(!(Math.abs(b.db-q.db)<1e-9))return!1
if(!(Math.abs(b.dx-q.dx)<1e-9))return!1
return!0},
i:function(a){return this.L()},
E:function(a){var s,r,q,p,o,n=this,m=V.cl([n.a,n.e,n.y,n.cx],3,0),l=V.cl([n.b,n.f,n.z,n.cy],3,0),k=V.cl([n.c,n.r,n.Q,n.db],3,0),j=V.cl([n.d,n.x,n.ch,n.dx],3,0),i=m.length
if(0>=i)return H.e(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.e(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.e(k,0)
s=s+k[0]+", "
p=j.length
if(0>=p)return H.e(j,0)
s=s+j[0]+",\n"
o=a+" "
if(1>=i)return H.e(m,1)
o=o+m[1]+", "
if(1>=r)return H.e(l,1)
o=o+l[1]+", "
if(1>=q)return H.e(k,1)
o=o+k[1]+", "
if(1>=p)return H.e(j,1)
o=s+(o+j[1]+",\n")
s=a+" "
if(2>=i)return H.e(m,2)
s=s+m[2]+", "
if(2>=r)return H.e(l,2)
s=s+l[2]+", "
if(2>=q)return H.e(k,2)
s=s+k[2]+", "
if(2>=p)return H.e(j,2)
s=o+(s+j[2]+",\n")
o=a+" "
if(3>=i)return H.e(m,3)
o=o+m[3]+", "
if(3>=r)return H.e(l,3)
o=o+l[3]+", "
if(3>=q)return H.e(k,3)
o=o+k[3]+", "
if(3>=p)return H.e(j,3)
return s+(o+j[3]+"]")},
L:function(){return this.E("")}}
V.a9.prototype={
am:function(a){var s,r,q=a.a,p=this.a
if(typeof q!=="number")return q.t()
if(typeof p!=="number")return H.b(p)
s=a.b
r=this.b
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
return new V.ao(q-p,s-r)},
m:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
s=b.a
r=this.a
$.z().toString
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+"]"}}
V.X.prototype={
t:function(a,b){var s,r,q,p,o=this.a,n=b.a
if(typeof o!=="number")return o.t()
if(typeof n!=="number")return H.b(n)
s=this.b
r=b.b
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.t()
if(typeof p!=="number")return H.b(p)
return new V.X(o-n,s-r,q-p)},
m:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.X))return!1
s=b.a
r=q.a
$.z().toString
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}}
V.aR.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aR))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.J(s.a,3,0)+", "+V.J(s.b,3,0)+", "+V.J(s.c,3,0)+", "+V.J(s.d,3,0)+"]"}}
V.ex.prototype={
gaO:function(){var s=this.c,r=this.d
return s>r?r:s},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ex))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.J(s.a,3,0)+", "+V.J(s.b,3,0)+", "+V.J(s.c,3,0)+", "+V.J(s.d,3,0)+"]"}}
V.ao.prototype={
cI:function(a){return Math.sqrt(this.af(this))},
af:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.b(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
return q*p+s*r},
n:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.n()
if(typeof b!=="number")return H.b(b)
s=this.b
if(typeof s!=="number")return s.n()
return new V.ao(r*b,s*b)},
Z:function(a,b){var s,r
$.z().toString
if(Math.abs(b-0)<1e-9){s=$.mC
return s==null?$.mC=new V.ao(0,0):s}s=this.a
if(typeof s!=="number")return s.Z()
r=this.b
if(typeof r!=="number")return r.Z()
return new V.ao(s/b,r/b)},
m:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ao))return!1
s=b.a
r=this.a
$.z().toString
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+"]"}}
V.A.prototype={
cI:function(a){return Math.sqrt(this.af(this))},
af:function(a){var s,r,q,p,o=this.a,n=a.a
if(typeof o!=="number")return o.n()
if(typeof n!=="number")return H.b(n)
s=this.b
r=a.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.b(p)
return o*n+s*r+q*p},
I:function(){var s=this,r=Math.sqrt(s.af(s))
if(r===1)return s
return s.Z(0,r)},
bk:function(a){var s,r,q,p,o=this.b,n=a.c
if(typeof o!=="number")return o.n()
if(typeof n!=="number")return H.b(n)
s=this.c
r=a.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.b(r)
q=a.a
if(typeof q!=="number")return H.b(q)
p=this.a
if(typeof p!=="number")return p.n()
return new V.A(o*n-s*r,s*q-p*n,p*r-o*q)},
A:function(a,b){var s,r,q,p,o=this.a,n=b.a
if(typeof o!=="number")return o.A()
if(typeof n!=="number")return H.b(n)
s=this.b
r=b.b
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.b(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.A()
if(typeof p!=="number")return H.b(p)
return new V.A(o+n,s+r,q+p)},
M:function(a){var s,r,q=this.a
if(typeof q!=="number")return q.M()
s=this.b
if(typeof s!=="number")return s.M()
r=this.c
if(typeof r!=="number")return r.M()
return new V.A(-q,-s,-r)},
Z:function(a,b){var s,r,q
$.z().toString
if(Math.abs(b-0)<1e-9)return V.fc()
s=this.a
if(typeof s!=="number")return s.Z()
r=this.b
if(typeof r!=="number")return r.Z()
q=this.c
if(typeof q!=="number")return q.Z()
return new V.A(s/b,r/b,q/b)},
ek:function(){var s=this.a
$.z().toString
if(typeof s!=="number")return H.b(s)
if(!(Math.abs(0-s)<1e-9))return!1
s=this.b
if(typeof s!=="number")return H.b(s)
if(!(Math.abs(0-s)<1e-9))return!1
s=this.c
if(typeof s!=="number")return H.b(s)
if(!(Math.abs(0-s)<1e-9))return!1
return!0},
m:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.A))return!1
s=b.a
r=q.a
$.z().toString
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.b(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}}
U.hC.prototype={
bY:function(a){var s=this.a,r=this.c,q=this.b
if(s)return V.qd(a,r,q)
else{if(a<r)s=r
else s=a>q?q:a
return s}},
gq:function(){var s=this.y
return s==null?this.y=D.D():s},
X:function(a){var s=this.y
if(s!=null)s.C(a)},
scV:function(a,b){var s=this.a
if(s!==b){this.a=b
s=new D.u("wrap",s,b)
s.b=!0
this.X(s)}},
scK:function(a){var s,r=this,q=r.b
$.z().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bY(s)}q=new D.u("maximumLocation",q,r.b)
q.b=!0
r.X(q)}},
scL:function(a){var s,r=this,q=r.c
$.z().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bY(s)}q=new D.u("minimumLocation",q,r.c)
q.b=!0
r.X(q)}},
sau:function(a,b){var s,r=this
b=r.bY(b)
s=r.d
$.z().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.u("location",s,b)
s.b=!0
r.X(s)}},
sel:function(a){var s,r,q=this,p=q.e
$.z().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.u("maximumVelocity",p,a)
p.b=!0
q.X(p)}},
sa5:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.z().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.u("velocity",r,a)
r.b=!0
s.X(r)}},
sdZ:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.z().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.u("dampening",s,a)
s.b=!0
this.X(s)}},
aH:function(a,b){var s,r,q,p=this,o=p.f
$.z().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sau(0,p.d+s*b)
o=p.x
$.z().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sa5(s)}}}
U.cu.prototype={
gq:function(){var s=this.b
return s==null?this.b=D.D():s},
sV:function(a,b){var s,r,q,p=this
if(b==null)b=V.bz()
if(!J.C(p.a,b)){s=p.a
p.a=b
r=new D.u("matrix",s,b)
r.b=!0
q=p.b
if(q!=null)q.C(r)}},
bT:function(a,b,c){return this.a},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cu))return!1
return J.C(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.bX.prototype={
gq:function(){var s=this.e
return s==null?this.e=D.D():s},
X:function(a){var s=this.e
if(s!=null)s.C(a)},
aK:function(){return this.X(null)},
fW:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gbA(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
if(p!=null){o=p.gq()
n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.aK()
s.b=!0
this.X(s)},
hB:function(a,b){var s,r
for(s=b.gS(b),r=this.gbA();s.w();)s.gH(s).gq().O(0,r)
s=new D.aL()
s.b=!0
this.X(s)},
bT:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.a_()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.a1(p,p.length),s=null;p.w();){o=p.d
if(o!=null){r=o.bT(0,b,c)
if(r!=null)s=s==null?r:r.n(0,s)}}q.f=s==null?V.bz():s
p=q.e
if(p!=null)p.bb(0)}return q.f},
m:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bX))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.e(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.e(p,r)
if(!J.C(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iav:1}
U.av.prototype={}
U.cZ.prototype={
gq:function(){var s=this.fx
return s==null?this.fx=D.D():s},
X:function(a){var s=this.fx
if(s!=null)s.C(a)},
aK:function(){return this.X(null)},
ck:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.ge0().j(0,q.gf6())
q.a.c.gbm().j(0,q.gf8())
q.a.c.gcU().j(0,q.gfa())
s=q.a.d
r=s.f
s=r==null?s.f=D.D():r
s.j(0,q.gfJ())
s=q.a.d
r=s.d
s=r==null?s.d=D.D():r
s.j(0,q.gfL())
s=q.a.e
s.gd4(s).j(0,q.gfg())
q.a.e.gbm().j(0,q.gfe())
s=q.a.e
s.ge2(s).j(0,q.gfc())
return!0},
aJ:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.M()
s=-s}if(this.r){if(typeof r!=="number")return r.M()
r=-r}return new V.ao(s,r)},
f7:function(a){var s=this
t.d.a(a)
if(!J.C(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
f9:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!l.cx)return
if(l.ch){s=a.y.am(a.d)
s=s.af(s)
r=l.Q
if(typeof r!=="number")return H.b(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.aJ(a.y.am(a.d).n(0,2).Z(0,s.gaO()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.M()
q=l.y
if(typeof q!=="number")return H.b(q)
r.sa5(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.M()
r=l.x
if(typeof r!=="number")return H.b(r)
q.sa5(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.aJ(r.am(q).n(0,2).Z(0,s.gaO()))
r=l.c
o=p.a
if(typeof o!=="number")return o.M()
n=l.y
if(typeof n!=="number")return H.b(n)
m=l.cy
if(typeof m!=="number")return H.b(m)
r.sau(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.M()
o=l.x
if(typeof o!=="number")return H.b(o)
r=l.db
if(typeof r!=="number")return H.b(r)
m.sau(0,-n*o+r)
l.b.sa5(0)
l.c.sa5(0)
l.dx=l.aJ(a.z.am(q).n(0,2).Z(0,s.gaO()))}l.aK()},
fb:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.af(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.M()
q=p.y
if(typeof q!=="number")return H.b(q)
s.sa5(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.M()
s=p.x
if(typeof s!=="number")return H.b(s)
q.sa5(-r*10*s)
p.aK()}},
fK:function(a){var s=this
if(t.cj.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
fM:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!J.C(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.aJ(r.am(q).n(0,2).Z(0,s.gaO()))
r=l.c
o=p.a
if(typeof o!=="number")return o.M()
n=l.y
if(typeof n!=="number")return H.b(n)
m=l.cy
if(typeof m!=="number")return H.b(m)
r.sau(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.M()
o=l.x
if(typeof o!=="number")return H.b(o)
r=l.db
if(typeof r!=="number")return H.b(r)
m.sau(0,-n*o+r)
l.b.sa5(0)
l.c.sa5(0)
l.dx=l.aJ(a.z.am(q).n(0,2).Z(0,s.gaO()))
l.aK()},
fh:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
ff:function(a){var s,r,q,p,o,n,m,l=this
t.m.a(a)
if(!l.cx)return
if(l.ch){s=a.y.am(a.d)
s=s.af(s)
r=l.Q
if(typeof r!=="number")return H.b(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.aJ(a.y.am(a.d).n(0,2).Z(0,s.gaO()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.M()
q=l.y
if(typeof q!=="number")return H.b(q)
r.sa5(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.M()
r=l.x
if(typeof r!=="number")return H.b(r)
q.sa5(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.aJ(r.am(q).n(0,2).Z(0,s.gaO()))
r=l.c
o=p.a
if(typeof o!=="number")return o.M()
n=l.y
if(typeof n!=="number")return H.b(n)
m=l.cy
if(typeof m!=="number")return H.b(m)
r.sau(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.M()
o=l.x
if(typeof o!=="number")return H.b(o)
r=l.db
if(typeof r!=="number")return H.b(r)
m.sau(0,-n*o+r)
l.b.sa5(0)
l.c.sa5(0)
l.dx=l.aJ(a.z.am(q).n(0,2).Z(0,s.gaO()))}l.aK()},
fd:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.af(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.M()
q=p.y
if(typeof q!=="number")return H.b(q)
s.sa5(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.M()
s=p.x
if(typeof s!=="number")return H.b(s)
q.sa5(-r*10*s)
p.aK()}},
bT:function(a,b,c){var s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a_()
if(q<p){r.dy=p
s=b.y
r.c.aH(0,s)
r.b.aH(0,s)
r.fr=V.mg(r.b.d).n(0,V.lh(r.c.d))}return r.fr},
$iav:1}
M.cs.prototype={
gq:function(){var s=this.r
return s==null?this.r=D.D():s},
a1:function(a){var s=this.r
if(s!=null)s.C(a)},
bg:function(){return this.a1(null)},
hF:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.ga6(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
if(p!=null){o=p.gq()
n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.aK()
s.b=!0
this.a1(s)},
hH:function(a,b){var s,r
for(s=b.gS(b),r=this.ga6();s.w();)s.gH(s).gq().O(0,r)
s=new D.aL()
s.b=!0
this.a1(s)},
ac:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.a1(s,s.length);s.w();){r=s.d
if(r!=null)r.ac(a)}q.f=!1},
$iaz:1}
M.cv.prototype={
gq:function(){var s=this.r
return s==null?this.r=D.D():s},
a1:function(a){var s=this.r
if(s!=null)s.C(a)},
bg:function(){return this.a1(null)},
sb7:function(a){var s,r,q=this
if(a==null)a=new X.i5()
s=q.b
if(s!==a){if(s!=null)s.gq().O(0,q.ga6())
r=q.b
q.b=a
a.gq().j(0,q.ga6())
s=new D.u("camera",r,q.b)
s.b=!0
q.a1(s)}},
sbc:function(a,b){var s,r,q=this
if(b==null)b=X.l6(null)
s=q.c
if(s!==b){if(s!=null)s.gq().O(0,q.ga6())
r=q.c
q.c=b
b.gq().j(0,q.ga6())
s=new D.u("target",r,q.c)
s.b=!0
q.a1(s)}},
sY:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gq().O(0,r.ga6())
s=r.d
r.d=a
if(a!=null)a.gq().j(0,r.ga6())
q=new D.u("technique",s,r.d)
q.b=!0
r.a1(q)}},
ac:function(a){var s=this
a.cO(s.d)
s.c.P(a)
s.b.P(a)
s.e.aH(0,a)
s.e.ac(a)
s.b.ai(a)
s.c.toString
a.cN()},
$iaz:1}
M.cB.prototype={
a1:function(a){var s=this.y
if(s!=null)s.C(a)},
bg:function(){return this.a1(null)},
h5:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.ga6(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bW()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.aK()
s.b=!0
this.a1(s)},
h7:function(a,b){var s,r
for(s=b.gS(b),r=this.ga6();s.w();)s.gH(s).gq().O(0,r)
s=new D.aL()
s.b=!0
this.a1(s)},
sb7:function(a){var s,r,q=this
if(a==null)a=X.mk(null)
s=q.b
if(s!==a){if(s!=null)s.gq().O(0,q.ga6())
r=q.b
q.b=a
a.gq().j(0,q.ga6())
s=new D.u("camera",r,q.b)
s.b=!0
q.a1(s)}},
sbc:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gq().O(0,r.ga6())
s=r.c
r.c=b
b.gq().j(0,r.ga6())
q=new D.u("target",s,r.c)
q.b=!0
r.a1(q)}},
gq:function(){var s=this.y
return s==null?this.y=D.D():s},
ac:function(a){var s,r=this
a.cO(r.d)
r.c.P(a)
r.b.P(a)
for(s=r.e.a,s=new J.a1(s,s.length);s.w();)s.d.aH(0,a)
for(s=r.e.a,s=new J.a1(s,s.length);s.w();)s.d.ac(a)
r.b.toString
a.cy.aW()
a.db.aW()
r.c.ai(a)
a.cN()},
$iaz:1}
M.az.prototype={}
A.hq.prototype={}
A.hr.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
iG:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
cr:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.O.prototype={
gal:function(a){var s=this.a?1:0,r=this.b?2:0
return s|r|0},
i:function(a){var s=this.a?1:0,r=this.b?2:0
return""+(s|r|0)},
m:function(a,b){if(b==null)return!1
if(!(b instanceof A.O))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.im.prototype={
eX:function(c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2="Required uniform value, ",c3=", was not defined or used in shader.",c4="uniform mat4 objMat;\n"
c0.z=c5
s=new P.bH("")
r=c5.fr
if(r){s.a=c4
q=c4}else q=""
p=c5.fx
q=(p?s.a=q+"uniform mat4 viewObjMat;\n":q)+"uniform mat4 projViewObjMat;\n"
s.a=q
q+="\n"
s.a=q
q=s.a=q+"attribute vec3 posAttr;\n"
o=c5.k4
if(o){q+="attribute vec3 normAttr;\n"
s.a=q}n=c5.r1
s.a=(n?s.a=q+"attribute vec3 binmAttr;\n":q)+"\n"
A.pq(c5,s)
A.ps(c5,s)
A.pr(c5,s)
A.pu(c5,s)
A.pv(c5,s)
A.pt(c5,s)
A.pw(c5,s)
q=s.a+="vec4 getPos()\n"
q+="{\n"
s.a=q
m=c5.ry
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
s.a=q}if(c5.r2){q+="   txt2D = getTxt2D();\n"
s.a=q}if(c5.rx){q+="   txtCube = getTxtCube();\n"
s.a=q}if(c5.k2){q+="   objPos = getObjPos();\n"
s.a=q}q=(c5.k3?s.a=q+"   viewPos = getViewPos();\n":q)+"   gl_Position = getPos();\n"
s.a=q
q+="}\n"
s.a=q
q=s.a=q+"\n"
c0.cF(0,q.charCodeAt(0)==0?q:q,A.pp(c0.z))
c0.Q=c0.x.h(0,"posAttr")
c0.cx=c0.x.h(0,"normAttr")
c0.ch=c0.x.h(0,"binmAttr")
c0.cy=c0.x.h(0,"txt2DAttr")
c0.db=c0.x.h(0,"txtCubeAttr")
c0.dx=c0.x.h(0,"bendAttr")
if(c5.dy)c0.id=t.q.a(c0.y.G(0,"invViewMat"))
if(r)c0.dy=t.q.a(c0.y.G(0,"objMat"))
if(p)c0.fr=t.q.a(c0.y.G(0,"viewObjMat"))
r=t.q
c0.fy=r.a(c0.y.G(0,"projViewObjMat"))
if(c5.go)c0.fx=r.a(c0.y.G(0,"viewMat"))
if(c5.x1)c0.k1=t.O.a(c0.y.G(0,"txt2DMat"))
if(c5.x2)c0.k2=r.a(c0.y.G(0,"txtCubeMat"))
if(c5.y1)c0.k3=r.a(c0.y.G(0,"colorMat"))
c0.r1=[]
q=c5.b8
if(q>0){c0.k4=c0.y.G(0,"bendMatCount")
for(l=0;l<q;++l){p=c0.r1
o=c0.y
n="bendValues["+l+"].mat"
k=o.h(0,n)
if(k==null)H.n(P.k(c2+n+c3))
p.push(r.a(k))}}r=c5.a
if(r.a)c0.r2=t.r.a(c0.y.G(0,"emissionClr"))
if(r.b)c0.rx=t.c.a(c0.y.G(0,"emissionTxt"))
r=c5.b
if(r.a)c0.x1=t.r.a(c0.y.G(0,"ambientClr"))
if(r.b)c0.x2=t.c.a(c0.y.G(0,"ambientTxt"))
r=c5.c
if(r.a)c0.y2=t.r.a(c0.y.G(0,"diffuseClr"))
if(r.b)c0.b8=t.c.a(c0.y.G(0,"diffuseTxt"))
r=c5.d
if(r.a)c0.bL=t.r.a(c0.y.G(0,"invDiffuseClr"))
if(r.b)c0.e3=t.c.a(c0.y.G(0,"invDiffuseTxt"))
r=c5.e
q=r.a
if(q||r.b||!1){c0.e6=t.n.a(c0.y.G(0,"shininess"))
if(q)c0.e4=t.r.a(c0.y.G(0,"specularClr"))
if(r.b)c0.e5=t.c.a(c0.y.G(0,"specularTxt"))}if(c5.f.b)c0.e7=t.c.a(c0.y.G(0,"bumpTxt"))
if(c5.db){c0.e8=t.Q.a(c0.y.G(0,"envSampler"))
r=c5.r
if(r.a)c0.e9=t.r.a(c0.y.G(0,"reflectClr"))
if(r.b)c0.ea=t.c.a(c0.y.G(0,"reflectTxt"))
r=c5.x
q=r.a
if(q||r.b||!1){c0.eb=t.n.a(c0.y.G(0,"refraction"))
if(q)c0.ec=t.r.a(c0.y.G(0,"refractClr"))
if(r.b)c0.ed=t.c.a(c0.y.G(0,"refractTxt"))}}r=c5.y
if(r.a)c0.ee=t.n.a(c0.y.G(0,"alpha"))
if(r.b)c0.ef=t.c.a(c0.y.G(0,"alphaTxt"))
if(c5.k1){r=c5.z
q=r.length
if(q!==0){c0.ct=new H.w(t.J)
c0.cu=new H.w(t.t)
for(p=t.r,o=t.n,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="barLight"+H.f(h)
f=[]
for(n=i.b,l=0;l<n;++l){m=c0.y
e=g+"s["+l+"].startPnt"
k=m.h(0,e)
if(k==null)H.n(P.k(c2+e+c3))
p.a(k)
m=c0.y
e=g+"s["+l+"].endPnt"
d=m.h(0,e)
if(d==null)H.n(P.k(c2+e+c3))
p.a(d)
m=c0.y
e=g+"s["+l+"].color"
c=m.h(0,e)
if(c==null)H.n(P.k(c2+e+c3))
p.a(c)
if(typeof h!=="number")return h.v()
if((h&4)!==0){m=c0.y
e=g+"s["+l+"].att0"
b=m.h(0,e)
if(b==null)H.n(P.k(c2+e+c3))
o.a(b)
m=c0.y
e=g+"s["+l+"].att1"
a=m.h(0,e)
if(a==null)H.n(P.k(c2+e+c3))
o.a(a)
m=c0.y
e=g+"s["+l+"].att2"
a0=m.h(0,e)
if(a0==null)H.n(P.k(c2+e+c3))
o.a(a0)
a1=a0
a2=a
a3=b}else{a1=c1
a2=a1
a3=a2}f.push(new A.f_(k,d,c,a3,a2,a1))}c0.cu.l(0,h,f)
n=c0.ct
m=c0.y
e=g+"Count"
k=m.h(0,e)
if(k==null)H.n(P.k(c2+e+c3))
n.l(0,h,k)}}r=c5.Q
q=r.length
if(q!==0){c0.cv=new H.w(t.J)
c0.cw=new H.w(t.G)
for(p=t.r,o=t.c,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="dirLight"+H.f(h)
f=[]
for(n=i.b,l=0;l<n;++l){if(typeof h!=="number")return h.v()
m=(h&1)!==0
if(m){e=c0.y
a4=g+"s["+l+"].objUp"
k=e.h(0,a4)
if(k==null)H.n(P.k(c2+a4+c3))
p.a(k)
e=c0.y
a4=g+"s["+l+"].objRight"
d=e.h(0,a4)
if(d==null)H.n(P.k(c2+a4+c3))
p.a(d)
e=c0.y
a4=g+"s["+l+"].objDir"
c=e.h(0,a4)
if(c==null)H.n(P.k(c2+a4+c3))
p.a(c)
a5=c
a6=d
a7=k}else{a5=c1
a6=a5
a7=a6}e=c0.y
a4=g+"s["+l+"].viewDir"
k=e.h(0,a4)
if(k==null)H.n(P.k(c2+a4+c3))
p.a(k)
e=c0.y
a4=g+"s["+l+"].color"
d=e.h(0,a4)
if(d==null)H.n(P.k(c2+a4+c3))
p.a(d)
if(m){m=c0.y
e=g+"sTexture2D"+l
c=m.h(0,e)
if(c==null)H.n(P.k(c2+e+c3))
o.a(c)
a8=c}else a8=c1
f.push(new A.f0(a7,a6,a5,k,d,a8))}c0.cw.l(0,h,f)
n=c0.cv
m=c0.y
e=g+"Count"
k=m.h(0,e)
if(k==null)H.n(P.k(c2+e+c3))
n.l(0,h,k)}}r=c5.ch
q=r.length
if(q!==0){c0.cz=new H.w(t.J)
c0.cA=new H.w(t.W)
for(p=t.r,o=t.O,n=t.Q,m=t.y,e=t.n,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="pointLight"+H.f(h)
f=[]
for(a4=i.b,l=0;l<a4;++l){a9=c0.y
b0=g+"s["+l+"].point"
k=a9.h(0,b0)
if(k==null)H.n(P.k(c2+b0+c3))
p.a(k)
a9=c0.y
b0=g+"s["+l+"].viewPnt"
d=a9.h(0,b0)
if(d==null)H.n(P.k(c2+b0+c3))
p.a(d)
a9=c0.y
b0=g+"s["+l+"].color"
c=a9.h(0,b0)
if(c==null)H.n(P.k(c2+b0+c3))
p.a(c)
if(typeof h!=="number")return h.v()
if((h&3)!==0){a9=c0.y
b0=g+"s["+l+"].invViewRotMat"
b=a9.h(0,b0)
if(b==null)H.n(P.k(c2+b0+c3))
o.a(b)
b1=b}else b1=c1
if((h&1)!==0){a9=c0.y
b0=g+"sTextureCube"+l
b=a9.h(0,b0)
if(b==null)H.n(P.k(c2+b0+c3))
n.a(b)
a8=b}else a8=c1
if((h&2)!==0){a9=c0.y
b0=g+"sShadowCube"+l
b=a9.h(0,b0)
if(b==null)H.n(P.k(c2+b0+c3))
n.a(b)
a9=c0.y
b0=g+"s["+l+"].shadowAdj"
a=a9.h(0,b0)
if(a==null)H.n(P.k(c2+b0+c3))
m.a(a)
b2=b
b3=a}else{b2=c1
b3=b2}if((h&4)!==0){a9=c0.y
b0=g+"s["+l+"].att0"
b=a9.h(0,b0)
if(b==null)H.n(P.k(c2+b0+c3))
e.a(b)
a9=c0.y
b0=g+"s["+l+"].att1"
a=a9.h(0,b0)
if(a==null)H.n(P.k(c2+b0+c3))
e.a(a)
a9=c0.y
b0=g+"s["+l+"].att2"
a0=a9.h(0,b0)
if(a0==null)H.n(P.k(c2+b0+c3))
e.a(a0)
a1=a0
a2=a
a3=b}else{a1=c1
a2=a1
a3=a2}f.push(new A.f3(k,d,b1,c,a8,b2,b3,a3,a2,a1))}c0.cA.l(0,h,f)
a4=c0.cz
a9=c0.y
b0=g+"Count"
k=a9.h(0,b0)
if(k==null)H.n(P.k(c2+b0+c3))
a4.l(0,h,k)}}r=c5.cx
q=r.length
if(q!==0){c0.cB=new H.w(t.J)
c0.cC=new H.w(t.L)
for(p=t.r,o=t.n,n=t.y,m=t.c,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="spotLight"+H.f(h)
f=[]
for(e=i.b,l=0;l<e;++l){a4=c0.y
a9=g+"s["+l+"].objPnt"
k=a4.h(0,a9)
if(k==null)H.n(P.k(c2+a9+c3))
p.a(k)
a4=c0.y
a9=g+"s["+l+"].objDir"
d=a4.h(0,a9)
if(d==null)H.n(P.k(c2+a9+c3))
p.a(d)
a4=c0.y
a9=g+"s["+l+"].viewPnt"
c=a4.h(0,a9)
if(c==null)H.n(P.k(c2+a9+c3))
p.a(c)
a4=c0.y
a9=g+"s["+l+"].color"
b=a4.h(0,a9)
if(b==null)H.n(P.k(c2+a9+c3))
p.a(b)
if(typeof h!=="number")return h.v()
if((h&3)!==0){a4=c0.y
a9=g+"s["+l+"].objUp"
a=a4.h(0,a9)
if(a==null)H.n(P.k(c2+a9+c3))
p.a(a)
a4=c0.y
a9=g+"s["+l+"].objRight"
a0=a4.h(0,a9)
if(a0==null)H.n(P.k(c2+a9+c3))
p.a(a0)
a4=c0.y
a9=g+"s["+l+"].tuScalar"
b4=a4.h(0,a9)
if(b4==null)H.n(P.k(c2+a9+c3))
o.a(b4)
a4=c0.y
a9=g+"s["+l+"].tvScalar"
b5=a4.h(0,a9)
if(b5==null)H.n(P.k(c2+a9+c3))
o.a(b5)
b6=b5
b7=b4
a6=a0
a7=a}else{b6=c1
b7=b6
a6=b7
a7=a6}a4=(h&2)!==0
if(a4){a9=c0.y
b0=g+"s["+l+"].shadowAdj"
a=a9.h(0,b0)
if(a==null)H.n(P.k(c2+b0+c3))
n.a(a)
b3=a}else b3=c1
if((h&8)!==0){a9=c0.y
b0=g+"s["+l+"].cutoff"
a=a9.h(0,b0)
if(a==null)H.n(P.k(c2+b0+c3))
o.a(a)
a9=c0.y
b0=g+"s["+l+"].coneAngle"
a0=a9.h(0,b0)
if(a0==null)H.n(P.k(c2+b0+c3))
o.a(a0)
b8=a0
b9=a}else{b8=c1
b9=b8}if((h&4)!==0){a9=c0.y
b0=g+"s["+l+"].att0"
a=a9.h(0,b0)
if(a==null)H.n(P.k(c2+b0+c3))
o.a(a)
a9=c0.y
b0=g+"s["+l+"].att1"
a0=a9.h(0,b0)
if(a0==null)H.n(P.k(c2+b0+c3))
o.a(a0)
a9=c0.y
b0=g+"s["+l+"].att2"
b4=a9.h(0,b0)
if(b4==null)H.n(P.k(c2+b0+c3))
o.a(b4)
a1=b4
a2=a0
a3=a}else{a1=c1
a2=a1
a3=a2}if((h&1)!==0){a9=c0.y
b0=g+"sTexture2D"+l
a=a9.h(0,b0)
if(a==null)H.n(P.k(c2+b0+c3))
m.a(a)
a8=a}else a8=c1
if(a4){a4=c0.y
a9=g+"sShadow2D"+l
a=a4.h(0,a9)
if(a==null)H.n(P.k(c2+a9+c3))
m.a(a)
b2=a}else b2=c1
f.push(new A.f6(k,d,c,b,a7,a6,b7,b6,b3,b9,b8,a3,a2,a1,a8,b2))}c0.cC.l(0,h,f)
e=c0.cB
a4=c0.y
a9=g+"Count"
k=a4.h(0,a9)
if(k==null)H.n(P.k(c2+a9+c3))
e.l(0,h,k)}}}},
az:function(a,b){if(b!=null&&b.d)a.eM(b)},
i3:function(a,b){if(b!=null&&b.d>=6)a.d1(b)}}
A.hv.prototype={
i:function(a){return"barLight"+H.f(this.a)}}
A.hI.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.iL.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.j7.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.iq.prototype={
i:function(a){return this.bl}}
A.f_.prototype={}
A.f0.prototype={}
A.f3.prototype={}
A.f6.prototype={}
A.eD.prototype={
bV:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
cF:function(a,b,c){var s,r,q,p=this
p.c=b
p.d=c
p.e=p.dr(b,35633)
p.f=p.dr(p.d,35632)
s=p.a
r=s.createProgram()
p.r=r
s.attachShader(r,p.e)
s.attachShader(p.r,p.f)
s.linkProgram(p.r)
if(!s.getProgramParameter(p.r,35714)){q=s.getProgramInfoLog(p.r)
s.deleteProgram(p.r)
H.n(P.k("Failed to link shader: "+H.f(q)))}p.i4()
p.i6()},
P:function(a){a.a.useProgram(this.r)
this.x.iG()},
dr:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.c(P.k("Error compiling shader '"+H.f(q)+"': "+H.f(s)))}return q},
i4:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.b(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.hq(n,r.name,q))}p.x=new A.hr(o)},
i6:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.b(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.iz(r.type,r.size,r.name,q))}p.y=new A.jH(o)},
b0:function(a,b,c){var s=this.a
if(a===1)return new A.eX(s,b,c)
else return A.lx(s,this.r,b,a,c)},
fB:function(a,b,c){var s=this.a
if(a===1)return new A.f4(s,b,c)
else return A.lx(s,this.r,b,a,c)},
fC:function(a,b,c){var s=this.a
if(a===1)return new A.f5(s,b,c)
else return A.lx(s,this.r,b,a,c)},
bH:function(a,b){return new P.fu(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
iz:function(a,b,c,d){var s=this
switch(a){case 5120:return s.b0(b,c,d)
case 5121:return s.b0(b,c,d)
case 5122:return s.b0(b,c,d)
case 5123:return s.b0(b,c,d)
case 5124:return s.b0(b,c,d)
case 5125:return s.b0(b,c,d)
case 5126:return new A.eW(s.a,c,d)
case 35664:return new A.jD(s.a,c,d)
case 35665:return new A.eY(s.a,c,d)
case 35666:return new A.eZ(s.a,c,d)
case 35667:return new A.jE(s.a,c,d)
case 35668:return new A.jF(s.a,c,d)
case 35669:return new A.jG(s.a,c,d)
case 35674:return new A.jI(s.a,c,d)
case 35675:return new A.f1(s.a,c,d)
case 35676:return new A.f2(s.a,c,d)
case 35678:return s.fB(b,c,d)
case 35680:return s.fC(b,c,d)
case 35670:throw H.c(s.bH("BOOL",c))
case 35671:throw H.c(s.bH("BOOL_VEC2",c))
case 35672:throw H.c(s.bH("BOOL_VEC3",c))
case 35673:throw H.c(s.bH("BOOL_VEC4",c))
default:throw H.c(P.k("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.j4.prototype={}
A.j6.prototype={}
A.jB.prototype={}
A.jH.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
G:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.k("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.L()},
L:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.eX.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.jE.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.jF.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.jG.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.jC.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.eW.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.jD.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.eY.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.eZ.prototype={
eK:function(a){var s=a.a,r=a.b,q=a.c,p=a.d
return this.a.uniform4f(this.d,s,r,q,p)},
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.jI.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.f1.prototype={
an:function(a){var s=new Float32Array(H.dq(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.f2.prototype={
an:function(a){var s=new Float32Array(H.dq(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.f4.prototype={
eM:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.f5.prototype={
d1:function(a){var s=a==null||a.d<6,r=this.a,q=this.d
if(s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.kE.prototype={
$1:function(a){return 1}}
F.hX.prototype={
fq:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.fc()
if(n!=null)q=q.A(0,n)
if(s!=null)q=q.A(0,s)
if(r!=null)q=q.A(0,r)
if(q.ek())return p
return q.I()},
ft:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.t(0,n)
q=new V.A(o.a,o.b,o.c).I()
o=r.t(0,n)
return q.bk(new V.A(o.a,o.b,o.c).I()).I()},
cp:function(){var s,r=this
if(r.d!=null)return!0
s=r.fq()
if(s==null){s=r.ft()
if(s==null)return!1}r.d=s
r.a.a.ak()
return!0},
fp:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.fc()
if(n!=null)q=q.A(0,n)
if(s!=null)q=q.A(0,s)
if(r!=null)q=q.A(0,r)
if(q.ek())return p
return q.I()},
fs:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
i=q.b
if(typeof j!=="number")return j.t()
if(typeof i!=="number")return H.b(i)
p=j-i
$.z().toString
if(Math.abs(p-0)<1e-9){j=b.t(0,e)
o=new V.A(j.a,j.b,j.c).I()
j=q.a
r=r.a
if(typeof j!=="number")return j.t()
if(typeof r!=="number")return H.b(r)
if(j-r<0)o=o.M(0)}else{i=s.b
if(typeof i!=="number")return H.b(i)
n=(j-i)/p
i=b.t(0,e)
j=i.a
if(typeof j!=="number")return j.n()
g=i.b
if(typeof g!=="number")return g.n()
i=i.c
if(typeof i!=="number")return i.n()
f=e.a
if(typeof f!=="number")return H.b(f)
d=e.b
if(typeof d!=="number")return H.b(d)
c=e.c
if(typeof c!=="number")return H.b(c)
c=new V.X(j*n+f,g*n+d,i*n+c).t(0,h)
o=new V.A(c.a,c.b,c.c).I()
q=q.a
r=r.a
if(typeof q!=="number")return q.t()
if(typeof r!=="number")return H.b(r)
s=s.a
if(typeof s!=="number")return H.b(s)
if((q-r)*n+r-s<0)o=o.M(0)}j=l.d
if(j!=null){m=j.I()
o=m.bk(o).I().bk(m).I()}return o},
cn:function(){var s,r=this
if(r.e!=null)return!0
s=r.fp()
if(s==null){s=r.fs()
if(s==null)return!1}r.e=s
r.a.a.ak()
return!0},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
E:function(a){var s,r=this,q=r.a
if(q==null||r.b==null||r.c==null)return a+"disposed"
s=a+C.b.aw(J.aj(q.e),0)+", "+C.b.aw(J.aj(r.b.e),0)+", "+C.b.aw(J.aj(r.c.e),0)+" {"
q=r.d
s=q!=null?s+(q.i(0)+", "):s+"-, "
q=r.e
return q!=null?s+(q.i(0)+"}"):s+"-}"},
L:function(){return this.E("")}}
F.ih.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
E:function(a){var s=this.a
if(s==null||this.b==null)return a+"disposed"
return a+C.b.aw(J.aj(s.e),0)+", "+C.b.aw(J.aj(this.b.e),0)},
L:function(){return this.E("")}}
F.iK.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
E:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.b.aw(J.aj(s.e),0)},
L:function(){return this.E("")}}
F.iY.prototype={
gq:function(){var s=this.e
return s==null?this.e=D.D():s},
b6:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.b6()||!1
if(!r.a.b6())s=!1
q=r.e
if(q!=null)q.bb(0)
return s},
cm:function(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=34962,a3=a1.a.c.length
a5.toString
s=a5.a
r=(s&$.ar().a)!==0?1:0
if((s&$.bk().a)!==0)++r
if((s&$.bj().a)!==0)++r
if((s&$.bl().a)!==0)++r
if((s&$.bQ().a)!==0)++r
if((s&$.dy().a)!==0)++r
if((s&$.dz().a)!==0)++r
if((s&$.co().a)!==0)++r
if((s&$.bi().a)!==0)++r
q=a5.gd3(a5)
p=q*4
s=a3*q
o=new Array(s)
o.fixed$length=Array
n=new Array(r)
n.fixed$length=Array
for(m=0,l=0;l<r;++l){k=a5.io(l)
j=k.gd3(k)
n[l]=new Z.hA(k,j,m*4,p)
for(i=0;i<a3;++i){h=a1.a.c
if(i>=h.length)return H.e(h,i)
g=h[i].iT(k)
f=m+i*q
for(h=g.length,e=0;e<h;++e){d=g[e]
if(f<0||f>=s)return H.e(o,f)
o[f]=d;++f}}m+=j}s=a4.a
c=s.createBuffer()
s.bindBuffer(a2,c)
s.bufferData(a2,new Float32Array(H.dq(o)),35044)
s.bindBuffer(a2,null)
b=new Z.bT(new Z.fe(a2,c),n,a5)
b.b=[]
if(a1.b.b.length!==0){a=[]
for(l=0;h=a1.b.b,l<h.length;++l){h=h[l].a
h.a.a.aT()
a.push(h.e)}a0=Z.lz(s,34963,a)
b.b.push(new Z.cF(0,a.length,a0))}if(a1.c.b.length!==0){a=[]
for(l=0;h=a1.c.b,l<h.length;++l){h=h[l].a
h.a.a.aT()
a.push(h.e)
h=a1.c.b
if(l>=h.length)return H.e(h,l)
h=h[l].b
h.a.a.aT()
a.push(h.e)}a0=Z.lz(s,34963,a)
b.b.push(new Z.cF(1,a.length,a0))}if(a1.d.b.length!==0){a=[]
for(l=0;h=a1.d.b,l<h.length;++l){h=h[l].a
h.a.a.aT()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.e(h,l)
h=h[l].b
h.a.a.aT()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.e(h,l)
h=h[l].c
h.a.a.aT()
a.push(h.e)}a0=Z.lz(s,34963,a)
b.b.push(new Z.cF(4,a.length,a0))}return b},
i:function(a){var s=this,r="   ",q=[]
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.E(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.E(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.E(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.E(r))}return C.a.u(q,"\n")},
ak:function(){var s=this.e
if(s!=null)s.C(null)}}
F.iZ.prototype={
ci:function(a){var s,r,q,p,o,n,m,l=[],k=a.length
if(k>0){s=a[0]
for(r=this.a,q=2;q<k;++q){p=q-1
o=a.length
if(p>=o)return H.e(a,p)
p=a[p]
if(q>=o)return H.e(a,q)
o=a[q]
r.a.j(0,s)
r.a.j(0,p)
r.a.j(0,o)
n=new F.hX()
m=s.a
if(m==null)H.n(P.k("May not create a face with a first vertex which is not attached to a shape."))
if(m!=p.a||m!=o.a)H.n(P.k("May not create a face with vertices attached to different shapes."))
n.a=s
s.d.b.push(n)
n.b=p
p.d.c.push(n)
n.c=o
o.d.d.push(n)
n.a.a.d.b.push(n)
p=n.a.a.e
if(p!=null)p.C(null)
l.push(n)}}return l},
gk:function(a){return this.b.length},
b6:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].cp())q=!1
return q},
co:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].cn())q=!1
return q},
i:function(a){return this.L()},
E:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(a))
return C.a.u(p,"\n")},
L:function(){return this.E("")}}
F.j_.prototype={
ik:function(a){var s,r,q,p,o=[],n=a.length
for(s=this.a,r=1;r<n;r+=2){q=r-1
p=a.length
if(q>=p)return H.e(a,q)
q=a[q]
if(r>=p)return H.e(a,r)
p=a[r]
s.a.j(0,q)
s.a.j(0,p)
o.push(F.nV(q,p))}return o},
gk:function(a){return this.b.length},
i:function(a){return this.L()},
E:function(a){var s,r,q=[],p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q.push(r[s].E(a+(""+s+". ")))}return C.a.u(q,"\n")},
L:function(){return this.E("")}}
F.j0.prototype={
il:function(a){var s,r,q,p,o=[],n=a.length
for(s=this.a,r=0;r<n;++r){if(r>=a.length)return H.e(a,r)
q=a[r]
s.a.j(0,q)
p=new F.iK()
if(q.a==null)H.n(P.k("May not create a point with a vertex which is not attached to a shape."))
p.a=q
q.b.b.push(p)
p.a.a.b.b.push(p)
q=p.a.a.e
if(q!=null)q.C(null)
o.push(p)}return o},
gk:function(a){return this.b.length},
i:function(a){return this.L()},
E:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(a))
return C.a.u(p,"\n")},
L:function(){return this.E("")}}
F.jQ.prototype={
iT:function(a){var s,r=this
if(a.m(0,$.ar())){s=r.f
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.m(0,$.bk())){s=r.r
if(s==null)return[0,1,0]
else return[s.a,s.b,s.c]}else if(a.m(0,$.bj())){s=r.x
if(s==null)return[0,0,1]
else return[s.a,s.b,s.c]}else if(a.m(0,$.bl())){s=r.y
if(s==null)return[0,0]
else return[s.a,s.b]}else if(a.m(0,$.bQ())){s=r.z
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.m(0,$.dy())){s=r.Q
if(s==null)return[1,1,1]
else return[s.a,s.b,s.c]}else if(a.m(0,$.dz())){s=r.Q
if(s==null)return[1,1,1,1]
else return[s.a,s.b,s.c,s.d]}else if(a.m(0,$.co()))return[r.ch]
else if(a.m(0,$.bi())){s=r.cx
if(s==null)return[-1,-1,-1,-1]
else return[s.a,s.b,s.c,s.d]}else return[]},
cp:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.fc()
r.d.K(0,new F.jY(q))
r.r=q.a.I()
q=r.a
if(q!=null){q.ak()
q=r.a.e
if(q!=null)q.bb(0)}return!0},
cn:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.fc()
r.d.K(0,new F.jX(q))
r.x=q.a.I()
q=r.a
if(q!=null){q.ak()
q=r.a.e
if(q!=null)q.bb(0)}return!0},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
E:function(a){var s,r,q=this,p="-",o=[]
o.push(C.b.aw(J.aj(q.e),0))
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
o.push(V.J(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.i(0))
else o.push(p)
r=C.a.u(o,", ")
return a+"{"+r+"}"},
L:function(){return this.E("")}}
F.jY.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.A(0,r)}}}
F.jX.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.A(0,r)}}}
F.jR.prototype={
aT:function(){},
j:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.k("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.ak()
return!0},
dM:function(a,b,c,d,e,f,g){var s=F.ly(a,null,b,c,d,e,f,g,0)
this.j(0,s)
return s},
bI:function(a,b,c,d,e,f){return this.dM(a,b,c,null,d,e,f)},
im:function(a,b,c,d,e,f){return this.dM(a,b,c,d,e,f,null)},
gk:function(a){return this.c.length},
b6:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].cp()
return!0},
co:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].cn()
return!0},
ir:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.z==null){o=p.r.I()
if(!J.C(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.C(null)}}}}return!0},
i:function(a){return this.L()},
E:function(a){var s,r,q,p
this.aT()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p)s.push(r[p].E(a))
return C.a.u(s,"\n")},
L:function(){return this.E("")}}
F.jS.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
K:function(a,b){var s=this
C.a.K(s.b,b)
C.a.K(s.c,new F.jT(s,b))
C.a.K(s.d,new F.jU(s,b))},
i:function(a){return this.L()},
L:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
return C.a.u(p,"\n")}}
F.jT.prototype={
$1:function(a){if(!J.C(a.a,this.a))this.b.$1(a)}}
F.jU.prototype={
$1:function(a){var s=this.a
if(!J.C(a.a,s)&&!J.C(a.b,s))this.b.$1(a)}}
F.jV.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.L()},
L:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
return C.a.u(p,"\n")}}
F.jW.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.L()},
L:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
return C.a.u(p,"\n")}}
O.c1.prototype={
gq:function(){var s=this.fr
return s==null?this.fr=D.D():s},
T:function(a){var s=this.fr
if(s!=null)s.C(a)},
bh:function(){return this.T(null)},
dC:function(a){this.a=null
this.T(a)},
i1:function(){return this.dC(null)},
h_:function(a,b){var s=new D.aK()
s.b=!0
this.T(s)},
h1:function(a,b){var s=new D.aL()
s.b=!0
this.T(s)},
sad:function(a){var s,r=this,q=r.ch
if(q!=a){if(q!=null)q.gq().O(0,r.gaI())
s=r.ch
r.ch=a
if(a!=null)a.gq().j(0,r.gaI())
q=new D.u("environment",s,r.ch)
q.b=!0
r.T(q)}},
dn:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.w(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.gaM()
n=d.h(0,p.gaM())
d.l(0,o,n==null?1:n)}m=[]
d.K(0,new O.iu(f,m))
C.a.bf(m,new O.iv())
l=new H.w(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){o=l.h(0,0)
l.l(0,0,o==null?1:o)}k=[]
l.K(0,new O.iw(f,k))
C.a.bf(k,new O.ix())
j=new H.w(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.gaM()
n=j.h(0,p.gaM())
j.l(0,o,n==null?1:n)}i=[]
j.K(0,new O.iy(f,i))
C.a.bf(i,new O.iz())
h=new H.w(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.o)(e),++q){p=e[q]
r=p.gaM()
o=h.h(0,p.gaM())
h.l(0,r,o==null?1:o)}g=[]
h.K(0,new O.iA(f,g))
C.a.bf(g,new O.iB())
e=C.c.a9(f.e.a.length+3,4)
f.dy.toString
return A.o0(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
aq:function(a,b){if(b!=null)if(!C.a.R(a,b)){b.saC(0,a.length)
a.push(b)}},
aH:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.a1(s,s.length);s.w();){r=s.d
r.toString
q=$.jO
if(q==null)q=$.jO=new V.A(0,0,1)
r.a=q
p=$.jN
r.d=p==null?$.jN=new V.A(0,1,0):p
p=$.jM
r.e=p==null?$.jM=new V.A(-1,0,0):p
p=r.b
if(p!=null){o=p.a
if(o!=null){r.a=o.bS(q).I()
r.d=o.bS(r.d).I()
r.e=o.bS(r.e).I()}}}},
cP:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.dn()
s=b4.fr.h(0,b3.bl)
if(s==null){s=A.o_(b3,b4.a)
b4.cj(s)}b3=b2.a=s
b5.e=null}r=b3.z
q=r.bL
b3=b5.e
if(!(b3 instanceof Z.bT))b3=b5.e=null
if(b3==null||!b3.d.m(0,q)){b3=r.k4
if(b3)b5.d.b6()
p=r.r1
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.d.co()
o.a.co()
o=o.e
if(o!=null)o.bb(0)}o=r.rx
if(o){n=b5.d
m=n.e
if(m!=null)++m.d
n.a.ir()
n=n.e
if(n!=null)n.bb(0)}l=b5.d.cm(new Z.d_(b4.a),q)
l.aN($.ar()).e=b2.a.Q.c
if(b3)l.aN($.bk()).e=b2.a.cx.c
if(p)l.aN($.bj()).e=b2.a.ch.c
if(r.r2)l.aN($.bl()).e=b2.a.cy.c
if(o)l.aN($.bQ()).e=b2.a.db.c
if(r.ry)l.aN($.bi()).e=b2.a.dx.c
b5.e=l}k=[]
b2.a.P(b4)
if(r.fr){b3=b2.a
p=b4.dx
p=p.gV(p)
b3=b3.dy
b3.toString
b3.an(p.ah(0,!0))}if(r.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.gV(p)
o=b4.dx
o=b4.cx=p.n(0,o.gV(o))
p=o}b3=b3.fr
b3.toString
b3.an(p.ah(0,!0))}b3=b2.a
p=b4.gew()
b3=b3.fy
b3.toString
b3.an(p.ah(0,!0))
if(r.go){b3=b2.a
p=b4.db
p=p.gV(p)
b3=b3.fx
b3.toString
b3.an(p.ah(0,!0))}if(r.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.an(C.i.ah(p,!0))}if(r.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.an(C.i.ah(p,!0))}if(r.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.an(C.i.ah(p,!0))}if(r.b8>0){j=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,j)
for(i=0;i<j;++i){b3=b2.a
p=b2.e.a
if(i>=p.length)return H.e(p,i)
p=p[i]
b3=b3.r1
if(i>=b3.length)return H.e(b3,i)
b3=b3[i]
h=new Float32Array(H.dq(p.ah(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,h)}}b3=r.a
if(b3.a){p=b2.a
o=b2.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.aq(k,b2.f.d)
b3=b2.a
p=b2.f.d
b3.az(b3.rx,p)}if(r.k1){b3=r.b
if(b3.a){p=b2.a
o=b2.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.aq(k,b2.r.d)
b3=b2.a
p=b2.r.d
b3.az(b3.x2,p)}b3=r.c
if(b3.a){p=b2.a
o=b2.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.aq(k,b2.x.d)
b3=b2.a
p=b2.x.d
b3.az(b3.b8,p)}b3=r.d
if(b3.a){p=b2.a
o=b2.y.f
p=p.bL
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.aq(k,b2.y.d)
b3=b2.a
p=b2.y.d
b3.az(b3.e3,p)}b3=r.e
p=b3.a
if(p||b3.b||!1){o=b2.a
n=b2.z.ch
o=o.e6
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.z.f
p=p.e4
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.aq(k,b2.z.d)
b3=b2.a
p=b2.z.d
b3.az(b3.e5,p)}b3=r.z
if(b3.length>0){g=new H.w(t.a)
for(p=b2.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gaM()
c=g.h(0,d)
if(c==null)c=0
g.l(0,d,c+1)
b=J.E(b2.a.cu.h(0,d),c)
n=e.gjE()
m=$.aQ
n=n.bq(m==null?$.aQ=new V.X(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gjJ()
m=$.aQ
n=n.bq(m==null?$.aQ=new V.X(0,0,0):m)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gp(e)
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
if(e.ge1()){n=e.gdO()
m=b.e
m.a.uniform1f(m.d,n)
n=e.gdP()
m=b.f
m.a.uniform1f(m.d,n)
n=e.gdQ()
m=b.r
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.o)(b3),++f){o=b3[f].a
j=g.h(0,o)
if(j==null)j=0
o=b2.a.ct.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.Q
if(b3.length>0){p=b4.db
a=p.gV(p)
a0=new H.w(t.a)
for(p=b2.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
c=a0.h(0,0)
if(c==null)c=0
a0.l(0,0,c+1)
b=J.E(b2.a.cw.h(0,0),c)
n=a.bS(e.a).I()
m=b.e
a1=n.a
a2=n.b
n=n.c
m.a.uniform3f(m.d,a1,a2,n)
n=e.c
a2=b.f
a2.a.uniform3f(a2.d,n.a,n.b,n.c)}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.o)(b3),++f){o=b3[f].a
j=a0.h(0,o)
if(j==null)j=0
o=b2.a.cv.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.ch
if(b3.length>0){p=b4.db
a=p.gV(p)
a3=new H.w(t.a)
for(p=b2.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gaM()
c=a3.h(0,d)
if(c==null)c=0
a3.l(0,d,c+1)
b=J.E(b2.a.cA.h(0,d),c)
a4=a.n(0,e.gV(e))
n=e.gV(e)
m=$.aQ
n=n.bq(m==null?$.aQ=new V.X(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=$.aQ
n=a4.bq(n==null?$.aQ=new V.X(0,0,0):n)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gp(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gaX()
n=a4.cG(0)
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
h=new Float32Array(H.dq(new V.e6(m,a1,a2,a5,a6,a7,a8,a9,n).ah(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,h)
e.gaX()
n=e.gaX()
if(!C.a.R(k,n)){n.saC(0,k.length)
k.push(n)}n=e.gaX()
m=n.gcJ(n)
if(m){m=b.f
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}e.gbe()
n=e.geN()
m=b.x
m.toString
a1=n.giD(n)
a2=n.giE(n)
a5=n.giF()
n=n.giC()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gbe()
if(!C.a.R(k,n)){n.saC(0,k.length)
k.push(n)}n=e.gbe()
m=n.gcJ(n)
if(m){m=b.r
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}if(e.ge1()){n=e.gdO()
m=b.y
m.a.uniform1f(m.d,n)
n=e.gdP()
m=b.z
m.a.uniform1f(m.d,n)
n=e.gdQ()
m=b.Q
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.o)(b3),++f){o=b3[f].a
j=a3.h(0,o)
if(j==null)j=0
o=b2.a.cz.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.cx
if(b3.length>0){p=b4.db
a=p.gV(p)
b1=new H.w(t.a)
for(p=b2.dx.x,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gaM()
c=b1.h(0,d)
if(c==null)c=0
b1.l(0,d,c+1)
b=J.E(b2.a.cC.h(0,d),c)
n=e.gje(e)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gjH(e).I()
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=a.bq(e.gje(e))
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gp(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gaX()
n=e.gcU()
m=b.f
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gcR(e)
m=b.r
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gjT()
m=b.x
m.a.uniform1f(m.d,n)
n=e.gjU()
m=b.y
m.a.uniform1f(m.d,n)
e.gaX()
n=e.gaX()
if(!C.a.R(k,n)){n.saC(0,k.length)
k.push(n)}n=e.gaX()
m=n.gcJ(n)
if(m){m=b.dx
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}e.gbe()
n=e.geN()
m=b.z
m.toString
a1=n.giD(n)
a2=n.giE(n)
a5=n.giF()
n=n.giC()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gbe()
if(!C.a.R(k,n)){n.saC(0,k.length)
k.push(n)}n=e.gbe()
m=n.gcJ(n)
if(m){m=b.dy
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}if(e.gjI()){n=e.gjG()
m=b.Q
m.a.uniform1f(m.d,n)
n=e.gjF()
m=b.ch
m.a.uniform1f(m.d,n)}if(e.ge1()){n=e.gdO()
m=b.cx
m.a.uniform1f(m.d,n)
n=e.gdP()
m=b.cy
m.a.uniform1f(m.d,n)
n=e.gdQ()
m=b.db
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.o)(b3),++f){o=b3[f].a
j=b1.h(0,o)
if(j==null)j=0
o=b2.a.cB.h(0,o)
o.a.uniform1i(o.d,j)}}}if(r.f.b){b2.aq(k,b2.Q.d)
b3=b2.a
p=b2.Q.d
b3.az(b3.e7,p)}if(r.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.gV(p).cG(0)}b3=b3.id
b3.toString
b3.an(p.ah(0,!0))}if(r.db){b2.aq(k,b2.ch)
b3=b2.a
p=b2.ch
b3.i3(b3.e8,p)
b3=r.r
if(b3.a){p=b2.a
o=b2.cx.f
p=p.e9
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.aq(k,b2.cx.d)
b3=b2.a
p=b2.cx.d
b3.az(b3.ea,p)}b3=r.x
p=b3.a
if(p||b3.b||!1){o=b2.a
n=b2.cy.ch
o=o.eb
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.cy.f
p=p.ec
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.aq(k,b2.cy.d)
b3=b2.a
p=b2.cy.d
b3.az(b3.ed,p)}}b3=r.y
p=b3.a
o=!p
if(!o||b3.b||!1){if(p){p=b2.a
n=b2.db.f
p=p.ee
p.a.uniform1f(p.d,n)}if(b3.b){b2.aq(k,b2.db.d)
p=b2.a
n=b2.db.d
p.az(p.ef,n)}p=b4.a
p.enable(3042)
p.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].P(b4)
p=b5.e
p.P(b4)
p.ac(b4)
p.ai(b4)
if(!o||b3.b||!1)b4.a.disable(3042)
for(i=0;i<k.length;++i)k[i].ai(b4)
b3=b2.a
b3.toString
b4.a.useProgram(null)
b3.x.cr()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.dn().bl}}
O.iu.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.hv(a,C.c.a9(b+3,4)*4))}}
O.iv.prototype={
$2:function(a,b){return J.dA(a.a,b.a)}}
O.iw.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.hI(a,C.c.a9(b+3,4)*4))}}
O.ix.prototype={
$2:function(a,b){return J.dA(a.a,b.a)}}
O.iy.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.iL(a,C.c.a9(b+3,4)*4))}}
O.iz.prototype={
$2:function(a,b){return J.dA(a.a,b.a)}}
O.iA.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.j7(a,C.c.a9(b+3,4)*4))}}
O.iB.prototype={
$2:function(a,b){return J.dA(a.a,b.a)}}
O.io.prototype={
cc:function(a){var s=this,r=s.f
$.z().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.u(s.b,r,a)
r.b=!0
s.a.T(r)}},
aQ:function(){this.d6()
this.cc(1)},
sal:function(a,b){var s,r=this
if(b==null)b=1
s=r.c.b
if(b<=0){r.ar(new A.O(!1,s,!1))
r.cc(0)}else{r.ar(new A.O(!0,s,!1))
r.cc(b>=1?1:b)}}}
O.cO.prototype={
T:function(a){return this.a.T(a)},
bh:function(){return this.T(null)},
aQ:function(){},
ar:function(a){var s,r,q=this
if(!q.c.m(0,a)){s=q.c
if(s.a||s.b||!1)r=!(a.a||a.b||!1)
else r=!0
q.c=a
if(r)q.aQ()
s=q.a
s.a=null
s.T(null)}},
sag:function(a){var s,r=this,q=r.c
if(!q.b)r.ar(new A.O(q.a,!0,!1))
q=r.d
if(q!==a){if(q!=null)q.gq().O(0,r.gaI())
s=r.d
r.d=a
a.gq().j(0,r.gaI())
q=new D.u(r.b+".texture2D",s,r.d)
q.b=!0
r.a.T(q)}}}
O.ip.prototype={}
O.aP.prototype={
b3:function(a){var s,r,q=this
if(!q.f.m(0,a)){s=q.f
q.f=a
r=new D.u(q.b+".color",s,a)
r.b=!0
q.a.T(r)}},
aQ:function(){this.d6()
this.b3(new V.q(1,1,1))},
sp:function(a,b){this.ar(new A.O(!0,this.c.b,!1))
this.b3(b)}}
O.ir.prototype={}
O.is.prototype={
aQ:function(){var s,r=this
r.d7()
s=r.ch
$.z().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.u(r.b+".refraction",s,1)
s.b=!0
r.a.T(s)}}}
O.it.prototype={
cd:function(a){var s=this,r=s.ch
$.z().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.u(s.b+".shininess",r,a)
r.b=!0
s.a.T(r)}},
aQ:function(){this.d7()
this.cd(100)},
saa:function(a){var s,r=this
if(a==null)a=100
s=r.c.b
if(a<=0){r.ar(new A.O(!1,s,!1))
r.cd(0)}else{r.ar(new A.O(!0,s,!1))
r.cd(a)}}}
O.eE.prototype={
gq:function(){var s=this.e
return s==null?this.e=D.D():s},
T:function(a){var s=this.e
if(s!=null)s.C(a)},
bh:function(){return this.T(null)},
cP:function(a,b){var s,r,q,p,o,n,m=this,l="Skybox"
if(m.a==null){s=a.fr.h(0,l)
if(s==null){r=a.a
s=new A.j4(r,l)
s.bV(r,l)
s.cF(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.z=s.x.h(0,"posAttr")
r=t.n
s.Q=r.a(s.y.h(0,"fov"))
s.ch=r.a(s.y.h(0,"ratio"))
s.cx=t.r.a(s.y.h(0,"boxClr"))
s.cy=t.Q.a(s.y.h(0,"boxTxt"))
s.db=t.q.a(s.y.h(0,"viewMat"))
a.cj(s)}m.a=s}if(b.e==null){r=b.d.cm(new Z.d_(a.a),$.ar())
r.aN($.ar()).e=m.a.z.c
b.e=r}r=m.c
if(r!=null){r.a=1
r.P(a)}r=a.d
q=a.c
p=m.a
p.P(a)
o=m.b
n=p.Q
n.a.uniform1f(n.d,o)
o=p.ch
o.a.uniform1f(o.d,r/q)
q=m.c
p.cy.d1(q)
q=m.d
r=p.cx
r.a.uniform3f(r.d,q.a,q.b,q.c)
q=a.db
q=q.gV(q).cG(0)
p=p.db
p.toString
p.an(q.ah(0,!0))
r=b.e
if(r instanceof Z.bT){r.P(a)
r.ac(a)
r.ai(a)}else b.e=null
r=m.a
r.toString
a.a.useProgram(null)
r.x.cr()
r=m.c
if(r!=null)r.ai(a)}}
O.j5.prototype={
gq:function(){var s=this.c
return s==null?this.c=D.D():s},
aH:function(a,b){},
cP:function(a,b){var s,r,q,p=this,o="SolidColor",n=p.a
if(n==null){s=a.fr.h(0,o)
if(s==null){n=a.a
s=new A.j6(n,o)
s.bV(n,o)
s.cF(0,"uniform mat4 projViewObjMat;                       \n                                                   \nattribute vec3 posAttr;                            \n                                                   \nvoid main()                                        \n{                                                  \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0); \n}                                                  \n","precision mediump float; \n                         \nuniform vec4 color;      \n                         \nvoid main()              \n{                        \n   gl_FragColor = color; \n}                        \n")
s.z=s.x.h(0,"posAttr")
s.Q=t.y.a(s.y.h(0,"color"))
s.ch=t.q.a(s.y.h(0,"projViewObjMat"))
a.cj(s)}p.a=s
n=s}r=b.e
if((!(r instanceof Z.bT)?b.e=null:r)==null){n=b.d.cm(new Z.d_(a.a),$.ar())
r=n.aN($.ar())
q=p.a
r.e=q.z.c
b.e=n
n=q}n.P(a)
r=p.b
n.Q.eK(r)
r=a.gew()
n=n.ch
n.toString
n.an(r.ah(0,!0))
r=b.e
r.P(a)
r.ac(a)
r.ai(a)
r=p.a
r.toString
a.a.useProgram(null)
r.x.cr()}}
O.ji.prototype={}
T.dM.prototype={
bv:function(a){},
fi:function(){return this.bv(null)},
ck:function(a){var s,r=this
if(r.b!=null)return!1
r.b=a
a.c.ge0().j(0,r.gfO())
r.b.c.gbm().j(0,r.gfQ())
r.b.c.gcU().j(0,r.gfS())
s=r.b.e
s.gd4(s).j(0,r.gic())
r.b.e.gbm().j(0,r.gia())
s=r.b.e
s.ge2(s).j(0,r.gi8())
return!0},
fP:function(a){if(!t.d.a(a).x.b.m(0,this.c))return
this.ch=this.Q=!0},
fR:function(a){var s,r=this
if(!r.Q)return
if(r.ch){t.d.a(a)
s=a.y.am(a.d)
if(s.af(s)<r.z)return
r.ch=!1}},
fT:function(a){var s=this
if(!s.Q)return
s.Q=!1
if(!s.ch)return
s.dz(a)},
ie:function(a){this.ch=this.Q=!0},
ib:function(a){var s,r=this
if(!r.Q)return
if(r.ch){t.m.a(a)
s=a.y.am(a.d)
if(s.af(s)<r.z)return
r.ch=!1}},
i9:function(a){var s=this
if(!s.Q)return
s.Q=!1
if(!s.ch)return
s.dz(a)},
dz:function(a){var s,r,q,p,o,n,m,l,k,j,i=this
t.d.a(a)
s=new D.V()
s.b=!0
r=i.f
if(r!=null)r.C(s)
s=a.d
r=s.a
q=a.c
if(typeof r!=="number")return r.Z()
p=r/q.c
s=s.b
if(typeof s!=="number")return s.Z()
o=s/q.d
q=i.a
s=i.d
r=s.r
if(typeof r!=="number")return r.t()
n=C.k.b9(p*(r-1))
r=s.x
if(typeof r!=="number")return r.t()
m=C.k.b9(o*(r-1))
q=q.a
r=s.x
if(typeof r!=="number")return r.t()
l=r-1-m
q.bindFramebuffer(36160,q.createFramebuffer())
q.readBuffer(36064)
q.framebufferTexture2D(36160,36064,3553,s.b,0)
k=new Uint8Array(4)
q.readPixels(n,l,1,1,6408,5121,k)
q.bindFramebuffer(36160,null)
new T.jq(k,1,1).fH()
s=k.length
if(0>=s)return H.e(k,0)
r=k[0]
if(1>=s)return H.e(k,1)
q=k[1]
if(2>=s)return H.e(k,2)
j=k[2]
if(3>=s)return H.e(k,3)
j=new T.cr(new V.ao(p,o),V.dL(r,q,j,k[3]))
j.b=!0
q=i.x
if(q!=null)q.C(j)}}
T.cr.prototype={
i:function(a){return"ColorPicker: "+this.c.i(0)+" => "+this.d.i(0)}}
T.jj.prototype={}
T.jk.prototype={}
T.jl.prototype={
dF:function(){if(!this.d){this.d=!0
var s=this.y
if(s!=null)s.cs()}},
saC:function(a,b){this.a=b},
gq:function(){var s=this.y
return s==null?this.y=D.D():s},
P:function(a){var s,r=this
if(!r.c&&r.d){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(3553,r.b)}},
ai:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(3553,null)}}}
T.jm.prototype={
saC:function(a,b){this.a=b},
gq:function(){var s=this.e
return s==null?this.e=D.D():s},
P:function(a){var s,r=this
if(!r.c&&r.d>=6){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(34067,r.b)}},
ai:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(34067,null)}}}
T.jn.prototype={
at:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=W.m6(a)
r=T.lt(o)
W.R(s,"load",new T.jp(this,r,s,!1,o,!1,!1),!1)
return r},
b2:function(a,b,c,d,e,f){var s=W.m6(c);++this.d
W.R(s,"load",new T.jo(this,s,!1,b,!1,d,a),!1)},
dE:function(a,b,c){var s,r,q,p
b=V.dx(b)
s=V.dx(a.width)
r=V.dx(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.l1()
q.width=s
q.height=r
p=C.f.eH(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.pP(p.getImageData(0,0,q.width,q.height))}}}
T.jp.prototype={
$1:function(a){var s,r,q=this,p=3553,o=q.b,n=q.c
o.e=n.width
o.f=n.height
s=q.a
r=s.dE(n,s.b,q.d)
o.r=n.width
o.x=n.height
n=s.a
n.bindTexture(p,q.e)
n.pixelStorei(37440,q.f?1:0)
C.l.ez(n,p,0,6408,6408,5121,r)
if(q.r)n.generateMipmap(p)
n.bindTexture(p,null)
o.dF();++s.e}}
T.jo.prototype={
$1:function(a){var s=this,r=s.a,q=r.dE(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,s.e?1:0)
C.l.ez(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.cs()}++r.e}}
T.jq.prototype={
fH:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.c
if(typeof d!=="number")return d.d8()
s=C.c.a9(d,2)
r=this.b
q=this.a
p=q.length
o=r*4
for(;s>=0;--s){n=o*s
m=o*(d-1-s)
for(l=0;l<r;++l){k=4*l
j=n+k
i=m+k
for(h=0;h<4;++h){g=j+h
f=i+h
if(g<0||g>=p)return H.e(q,g)
e=q[g]
if(f<0||f>=p)return H.e(q,f)
q[g]=q[f]
q[f]=e}}}}}
X.hu.prototype={
gq:function(){var s=this.fr
return s==null?this.fr=D.D():s},
a2:function(a){var s=this.fr
if(s!=null)s.C(a)},
say:function(a,b){var s,r=this
if(b<1)b=1
s=r.a
if(s!==b){r.y=null
r.c=r.a=b
s=new D.u("width",s,b)
s.b=!0
r.a2(s)}},
sas:function(a,b){var s,r=this
if(b<1)b=1
s=r.b
if(s!==b){r.y=null
r.d=r.b=b
s=new D.u("height",s,b)
s.b=!0
r.a2(s)}},
P:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=3553,d=36161,c=36160
if(g.f){s=a.a
r=s.drawingBufferWidth
q=g.r
if(typeof r!=="number")return r.n()
g.say(0,C.d.a4(r*q))
s=s.drawingBufferHeight
q=g.x
if(typeof s!=="number")return s.n()
g.sas(0,C.d.a4(s*q))}if(g.y==null){s=a.a
r=g.ch
q=g.a
p=g.b
o=s.getParameter(3379)
n=V.dx(q)
m=V.dx(p)
o=V.dx(o)
n=Math.min(n,o)
m=Math.min(m,o)
l=s.createTexture()
s.bindTexture(e,l)
s.texParameteri(e,10242,33071)
s.texParameteri(e,10243,33071)
s.texParameteri(e,10241,9729)
s.texParameteri(e,10240,9729)
C.l.eA(s,e,0,6408,n,m,0,6408,5121,f)
s.bindTexture(e,f)
k=T.lt(l)
k.e=q
k.f=p
k.r=n
k.x=m
k.dF()
r.b=k.b
r.c=k.c
r.d=k.d
r.e=k.e
r.f=k.f
r.r=k.r
r.x=k.x
r=r.y
if(r!=null)r.cs()
r=g.ch
q=r.b
g.z=q
g.c=r.r
g.d=r.x
s.bindTexture(e,q)
r=s.createRenderbuffer()
g.Q=r
s.bindRenderbuffer(d,r)
s.renderbufferStorage(d,33189,g.c,g.d)
r=s.createFramebuffer()
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
r=g.dy
q=r.c
a.c=C.d.a4(q*g.a)
p=r.d
a.d=C.d.a4(p*g.b)
j=r.a
i=g.c
if(typeof i!=="number")return H.b(i)
h=C.d.a4(j*i)
r=r.b
j=g.d
if(typeof j!=="number")return H.b(j)
s.viewport(h,C.d.a4(r*j),C.d.a4(q*i),C.d.a4(p*j))
s.clearDepth(g.db)
r=g.cx
s.clearColor(r.a,r.b,r.c,r.d)
s.clear(16640)},
ai:function(a){a.a.bindFramebuffer(36160,null)}}
X.l0.prototype={}
X.i0.prototype={
gq:function(){var s=this.x
return s==null?this.x=D.D():s},
a2:function(a){var s=this.x
if(s!=null)s.C(a)},
P:function(a){var s,r,q,p,o,n,m,l=this,k=a.a
k.bindFramebuffer(36160,null)
k.enable(2884)
k.enable(2929)
k.depthFunc(513)
s=k.drawingBufferWidth
r=k.drawingBufferHeight
q=l.r
p=q.a
if(typeof s!=="number")return H.b(s)
o=C.d.a4(p*s)
p=q.b
if(typeof r!=="number")return H.b(r)
n=C.d.a4(p*r)
p=C.d.a4(q.c*s)
a.c=p
q=C.d.a4(q.d*r)
a.d=q
k.viewport(o,n,p,q)
k.clearDepth(l.c)
if(l.b){q=l.a
k.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
k.clear(m)},
ai:function(a){}}
X.i5.prototype={
gq:function(){var s=this.b
return s==null?this.b=D.D():s},
P:function(a){var s
a.cy.bQ(V.bz())
s=V.bz()
a.db.bQ(s)},
ai:function(a){a.cy.aW()
a.db.aW()}}
X.eo.prototype={
gq:function(){var s=this.f
return s==null?this.f=D.D():s},
a2:function(a){var s=this.f
if(s!=null)s.C(a)},
fm:function(){return this.a2(null)},
P:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.b0(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.bQ(i)
p=$.ml
if(p==null){p=V.lk()
o=V.jP()
n=$.mD
p=V.lg(p,o,n==null?$.mD=new V.A(0,0,-1):n)
$.ml=p
s=p}else s=p
p=q.b
if(p!=null){r=p.bT(0,a,q)
if(r!=null)s=r.n(0,s)}a.db.bQ(s)},
ai:function(a){a.cy.aW()
a.db.aW()}}
X.jg.prototype={}
V.kN.prototype={
$1:function(a){var s=C.d.eD(this.a.giK(),2)
if(s!=="0.00")P.hj(s+" fps")}}
V.j1.prototype={
f3:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.R(o,"scroll",new V.j3(m),!1)},
dL:function(a,b){var s,r,q,p,o
a=C.c.is(a,0,4)
s=P.mS(C.r,b,C.j,!1)
r=document.createElement("div")
r.className="textHeader"
r.id=s
q=r.style
p=""+(28-a*3)+"px"
q.fontSize=p
o=W.nC()
o.href="#"+s
o.textContent=b
r.appendChild(o)
this.a.appendChild(r)},
b5:function(a){var s,r,q,p,o,n,m,l
this.i5()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.a.iR(a)
q.toString
p=new H.P(p)
p=new P.ce(q.eE(new H.c0(p,p.gk(p))).a())
for(;p.w();){q=p.gH(p)
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
if(H.ne(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.e(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.mS(C.r,q,C.j,!1)
m=s.createElement("a")
m.className="linkPar"
m.href="#"+l
m.textContent=q
r.appendChild(m)}break
case"Other":o=s.createElement("div")
o.className="normalPar"
o.textContent=q.b
r.appendChild(o)
break}}this.a.appendChild(r)},
ii:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
k.id="shellTable"
s=k.style
s.width="100%"
s.padding="0px"
s.marginLeft=m
s.marginRight=m
this.a.appendChild(k)
r=k.insertRow(-1)
s=t.u
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
i5:function(){var s,r,q,p="Start",o="Bold",n="Italic",m="ItalicEnd",l="Code",k="LinkHead",j="LinkTail",i="LinkEnd",h="Other"
if(this.b!=null)return
s=new L.jv()
s.a=new H.w(t.V)
s.b=new H.w(t.w)
s.c=P.md(t.bw)
s.d=s.N(0,p)
r=s.N(0,p).u(0,o)
q=K.a3(new H.P("*"))
r.a.push(q)
r.c=!0
r=s.N(0,o).u(0,o)
q=new K.b1()
q.a=[]
r.a.push(q)
r=K.a3(new H.P("*"))
q.a.push(r)
r=s.N(0,o).u(0,"BoldEnd")
q=K.a3(new H.P("*"))
r.a.push(q)
r.c=!0
r=s.N(0,p).u(0,n)
q=K.a3(new H.P("_"))
r.a.push(q)
r.c=!0
r=s.N(0,n).u(0,n)
q=new K.b1()
q.a=[]
r.a.push(q)
r=K.a3(new H.P("_"))
q.a.push(r)
r=s.N(0,n).u(0,m)
q=K.a3(new H.P("_"))
r.a.push(q)
r.c=!0
r=s.N(0,p).u(0,l)
q=K.a3(new H.P("`"))
r.a.push(q)
r.c=!0
r=s.N(0,l).u(0,l)
q=new K.b1()
q.a=[]
r.a.push(q)
r=K.a3(new H.P("`"))
q.a.push(r)
r=s.N(0,l).u(0,"CodeEnd")
q=K.a3(new H.P("`"))
r.a.push(q)
r.c=!0
r=s.N(0,p).u(0,k)
q=K.a3(new H.P("["))
r.a.push(q)
r.c=!0
r=s.N(0,k).u(0,j)
q=K.a3(new H.P("|"))
r.a.push(q)
q=s.N(0,k).u(0,i)
r=K.a3(new H.P("]"))
q.a.push(r)
q.c=!0
q=s.N(0,k).u(0,k)
r=new K.b1()
r.a=[]
q.a.push(r)
q=K.a3(new H.P("|]"))
r.a.push(q)
q=s.N(0,j).u(0,i)
r=K.a3(new H.P("]"))
q.a.push(r)
q.c=!0
q=s.N(0,j).u(0,j)
r=new K.b1()
r.a=[]
q.a.push(r)
q=K.a3(new H.P("|]"))
r.a.push(q)
s.N(0,p).u(0,h).a.push(new K.hm())
q=s.N(0,h).u(0,h)
r=new K.b1()
r.a=[]
q.a.push(r)
q=K.a3(new H.P("*_`["))
r.a.push(q)
q=s.N(0,"BoldEnd")
q.d=q.a.bp(o)
q=s.N(0,m)
q.d=q.a.bp(n)
q=s.N(0,"CodeEnd")
q.d=q.a.bp(l)
q=s.N(0,i)
q.d=q.a.bp("Link")
q=s.N(0,h)
q.d=q.a.bp(h)
this.b=s}}
V.j3.prototype={
$1:function(a){P.lv(C.h,new V.j2(this.a))}}
V.j2.prototype={
$0:function(){var s=C.d.a4(document.documentElement.scrollTop),r=this.a.style,q=H.f(-0.01*s)+"px"
r.top=q}}
Q.i1.prototype={}
Q.j.prototype={
gaD:function(){var s=this.a
if(s>=1)if(s<=8){s=this.b
s=s>=1&&s<=8}else s=!1
else s=!1
return s},
gaC:function(a){return this.gaD()?(this.a-1)*8+(this.b-1):-1},
i:function(a){return""+this.a+" "+this.b},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof Q.j))return!1
if(b.a!==this.a)return!1
if(b.b!==this.b)return!1
return!0}}
Q.an.prototype={
i:function(a){var s=this,r=s.d,q=r!=null?", "+r.i(0)+" => "+H.f(s.e):""
return s.a+", "+s.b.i(0)+" => "+s.c.i(0)+q}}
Q.j8.prototype={
f4:function(){this.a=P.nY(64,new Q.j9($.T().a),!1)
this.c=null},
dY:function(){var s,r,q,p,o=Q.mv()
for(s=o.a,r=this.a,q=0;q<64;++q){if(q>=r.length)return H.e(r,q)
p=r[q]
if(q>=s.length)return H.e(s,q)
s[q]=p}return o},
D:function(a){var s,r
if(!a.gaD())return $.kS()
s=a.gaC(a)
r=this.a
if(s<0||s>=r.length)return H.e(r,s)
return new Q.r(r[s])},
B:function(a,b){var s,r,q
if(!a.gaD())return!1
s=this.a
r=a.gaC(a)
q=b.a
if(r<0||r>=s.length)return H.e(s,r)
s[r]=q
return!0},
cD:function(a){var s,r,q=a.a,p=$.kR(),o=p.a
if(typeof q!=="number")return q.v()
if(typeof o!=="number")return H.b(o)
s=new Q.r((q&o)>>>0)
for(r=0;q=this.a,r<q.length;++r){q=q[r]
o=p.a
if(typeof q!=="number")return q.v()
if(typeof o!=="number")return H.b(o)
if(new Q.r((q&o)>>>0).m(0,s))return Q.me(r)}return new Q.j(0,0)},
dN:function(a){var s=this,r=a.b,q=s.D(r),p=a.d,o=p!=null?s.D(p):null,n=$.T()
s.B(r,n)
r=o!=null
if(r)s.B(p,n)
p=$.bO()
n=q.a
p=p.a
if(typeof n!=="number")return n.W()
if(typeof p!=="number")return H.b(p)
s.B(a.c,new Q.r((n|p)>>>0))
if(r&&a.e!=null){r=o.a
if(typeof r!=="number")return r.W()
s.B(a.e,new Q.r((r|p)>>>0))}},
iv:function(a){if(this.ei(a)){if(!this.iM(a))return 2
return 1}return 0},
ei:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=$.bh(),e=a?$.Z():$.aX()
f=f.a
e=e.a
if(typeof f!=="number")return f.W()
if(typeof e!=="number")return H.b(e)
s=$.aG().a
if(typeof s!=="number")return H.b(s)
r=g.cD(new Q.r((f|e|1&s)>>>0))
if(!r.gaD())return!1
q=a?-1:1
f=r.a
e=f+q
s=r.b
p=s+1
o=!a
n=$.cn()
if(g.J(new Q.j(e,p),o,[n]))return!0
m=s+-1
if(g.J(new Q.j(e,m),o,[n]))return!0
e=f+2
n=$.cm()
if(g.J(new Q.j(e,p),o,[n]))return!0
if(g.J(new Q.j(e,m),o,[n]))return!0
e=f+1
l=s+2
if(g.J(new Q.j(e,l),o,[n]))return!0
k=f+-1
if(g.J(new Q.j(k,l),o,[n]))return!0
l=f+-2
if(g.J(new Q.j(l,p),o,[n]))return!0
if(g.J(new Q.j(l,m),o,[n]))return!0
l=s+-2
if(g.J(new Q.j(e,l),o,[n]))return!0
if(g.J(new Q.j(k,l),o,[n]))return!0
for(n=f>=1,l=f<=8,j=1;j<8;++j){i=s+j
h=new Q.j(f,i)
if(g.J(h,o,[$.aH(),$.ai()]))return!0
if(!(n&&l&&i>=1&&i<=8&&g.D(h).a==$.T().a))break}for(j=1;j<8;++j){i=s+-j
h=new Q.j(f,i)
if(g.J(h,o,[$.aH(),$.ai()]))return!0
if(!(n&&l&&i>=1&&i<=8&&g.D(h).a==$.T().a))break}for(n=s>=1,l=s<=8,j=1;j<8;++j){i=f+j
h=new Q.j(i,s)
if(g.J(h,o,[$.aH(),$.ai()]))return!0
if(!(i>=1&&i<=8&&n&&l&&g.D(h).a==$.T().a))break}for(j=1;j<8;++j){i=f+-j
h=new Q.j(i,s)
if(g.J(h,o,[$.aH(),$.ai()]))return!0
if(!(i>=1&&i<=8&&n&&l&&g.D(h).a==$.T().a))break}for(j=1;j<8;++j){n=f+j
l=s+j
h=new Q.j(n,l)
if(g.J(h,o,[$.aW(),$.ai()]))return!0
if(!(n>=1&&n<=8&&l>=1&&l<=8&&g.D(h).a==$.T().a))break}for(j=1;j<8;++j){n=f+j
l=s+-j
h=new Q.j(n,l)
if(g.J(h,o,[$.aW(),$.ai()]))return!0
if(!(n>=1&&n<=8&&l>=1&&l<=8&&g.D(h).a==$.T().a))break}for(j=1;j<8;++j){n=f+-j
l=s+j
h=new Q.j(n,l)
if(g.J(h,o,[$.aW(),$.ai()]))return!0
if(!(n>=1&&n<=8&&l>=1&&l<=8&&g.D(h).a==$.T().a))break}for(j=1;j<8;++j){n=-j
l=f+n
n=s+n
h=new Q.j(l,n)
if(g.J(h,o,[$.aW(),$.ai()]))return!0
if(!(l>=1&&l<=8&&n>=1&&n<=8&&g.D(h).a==$.T().a))break}n=$.bh()
if(g.J(new Q.j(e,p),o,[n]))return!0
if(g.J(new Q.j(e,s),o,[n]))return!0
if(g.J(new Q.j(e,m),o,[n]))return!0
if(g.J(new Q.j(f,m),o,[n]))return!0
if(g.J(new Q.j(k,m),o,[n]))return!0
if(g.J(new Q.j(k,s),o,[n]))return!0
if(g.J(new Q.j(k,p),o,[n]))return!0
if(g.J(new Q.j(f,p),o,[n]))return!0
return!1},
J:function(a,b,c){var s,r,q,p,o,n
if(a.gaD()){s=this.D(a)
s.toString
r=s.a
q=$.Z().a
if(typeof r!=="number")return r.v()
if(typeof q!=="number")return H.b(q)
if((r&q)>>>0===q===b){q=$.bP()
p=q.a
if(typeof p!=="number")return H.b(p)
o=new Q.r((r&p)>>>0)
for(n=c.length-1;n>=0;--n){if(n>=c.length)return H.e(c,n)
r=c[n].a
p=q.a
if(typeof r!=="number")return r.v()
if(typeof p!=="number")return H.b(p)
if(o.m(0,new Q.r((r&p)>>>0)))return!0}}}return!1},
iM:function(a){var s,r,q
for(s=0;s<64;++s){r=this.a
if(s>=r.length)return H.e(r,s)
r=r[s]
if(r!=$.T().a){q=$.Z().a
if(typeof r!=="number")return r.v()
if(typeof q!=="number")return H.b(q)
q=(r&q)>>>0===q===a
r=q}else r=!1
if(r)if(this.iN(Q.me(s)))return!0}return!1},
iN:function(a){var s={}
s.a=!1
this.cE(new Q.jb(s),a)
return s.a},
iQ:function(a){var s={}
s.a=!1
this.cE(new Q.jc(s,a),a.b)
return s.a},
cE:function(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1="Pawn en passent "
if(!a3.gaD())return
s=a.D(a3)
r=new Q.ja(a,s,a2)
q=s.a
p=$.bP().a
if(typeof q!=="number")return q.v()
if(typeof p!=="number")return H.b(p)
o=new Q.r((q&p)>>>0)
if(o.m(0,$.cn())){s=a.D(a3)
s.toString
q=s.a
p=$.Z().a
if(typeof q!=="number")return q.v()
if(typeof p!=="number")return H.b(p)
n=(q&p)>>>0===p
m=$.bO().a
if(typeof m!=="number")return H.b(m)
l=n?-1:1
k=a3.a
j=k+l
i=a3.b
h=new Q.j(j,i)
g=a.D(h).a
f=$.T().a
if(g==f){r.$1(new Q.an("Pawn move to "+h.i(0),a3,h,a0,a0))
if((q&m)>>>0!==m){h=new Q.j(k+(l+l),i)
if(a.D(h).a==f)r.$1(new Q.an("Pawn move to "+h.i(0),a3,h,a0,a0))}}q=i+-1
h=new Q.j(j,q)
e=a.D(h)
g=e.a
d=$.kS().a
if(g!=d)if(g!=f){if(typeof g!=="number")return g.v()
g=(g&p)>>>0===p!==n}else g=!1
else g=!1
if(g)r.$1(new Q.an("Pawn take "+e.gaV()+" at "+h.i(0),a3,h,h,a0));++i
h=new Q.j(j,i)
e=a.D(h)
g=e.a
if(g!=d)if(g!=f){if(typeof g!=="number")return g.v()
g=(g&p)>>>0===p!==n}else g=!1
else g=!1
if(g)r.$1(new Q.an("Pawn take "+e.gaV()+" at "+h.i(0),a3,h,h,a0))
if(a.c!=null)g=k===(n?4:5)
else g=!1
if(g){h=new Q.j(j,q)
if(h.gaD()&&a.D(h).a==f){c=new Q.j(k,q)
e=a.D(c)
g=e.a
if(g!=f){if(typeof g!=="number")return g.v()
g=(g&p)>>>0===p!==n}else g=!1
if(g){b=a.c.D(new Q.j(k+(l+l),q))
q=b.a
if(typeof q!=="number")return q.v()
if((q&m)>>>0!==m&&b.cZ(e))r.$1(new Q.an(a1+e.gaV()+" at "+h.i(0),a3,h,c,a0))}}h=new Q.j(j,i)
if(h.gaD()&&a.D(h).a==f){c=new Q.j(k,i)
e=a.D(c)
q=e.a
if(q!=f){if(typeof q!=="number")return q.v()
q=(q&p)>>>0===p!==n}else q=!1
if(q){b=a.c.D(new Q.j(k+(l+l),i))
q=b.a
if(typeof q!=="number")return q.v()
if((q&m)>>>0!==m&&b.cZ(e))r.$1(new Q.an(a1+e.gaV()+" at "+h.i(0),a3,h,c,a0))}}}}else if(o.m(0,$.aH()))a.i2(r,a3)
else if(o.m(0,$.cm())){a.a3(r,a3,2,1)
a.a3(r,a3,2,-1)
a.a3(r,a3,1,2)
a.a3(r,a3,-1,2)
a.a3(r,a3,-2,1)
a.a3(r,a3,-2,-1)
a.a3(r,a3,1,-2)
a.a3(r,a3,-1,-2)}else if(o.m(0,$.aW())){a.a8(r,a3,1,1)
a.a8(r,a3,1,-1)
a.a8(r,a3,-1,-1)
a.a8(r,a3,-1,1)}else if(o.m(0,$.ai())){a.a8(r,a3,1,1)
a.a8(r,a3,1,0)
a.a8(r,a3,1,-1)
a.a8(r,a3,0,-1)
a.a8(r,a3,-1,-1)
a.a8(r,a3,-1,0)
a.a8(r,a3,-1,1)
a.a8(r,a3,0,1)}else if(o.m(0,$.bh()))a.fI(r,a3)},
a3:function(a,b,c,d){var s,r,q,p,o,n=new Q.j(b.a+c,b.b+d)
if(!n.gaD())return!0
s=this.D(b)
r=this.D(n)
q=r.a
if(q==$.T().a){a.$1(new Q.an(s.gaV()+" move to "+n.i(0),b,n,null,null))
return!1}s.toString
p=s.a
o=$.Z().a
if(typeof p!=="number")return p.v()
if(typeof o!=="number")return H.b(o)
if(typeof q!=="number")return q.v()
q=(q&o)>>>0===o!==((p&o)>>>0===o)
if(q)a.$1(new Q.an(s.gaV()+" take "+r.gaV()+" at "+n.i(0),b,n,n,null))
return!0},
a8:function(a,b,c,d){var s
for(s=1;s<8;++s)if(this.a3(a,b,c*s,d*s))return},
i2:function(a,b){var s,r,q,p,o,n,m,l=this,k=l.D(b)
k.toString
s=k.a
r=$.Z().a
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.b(r)
q=$.bO().a
if(typeof q!=="number")return H.b(q)
l.a8(a,b,0,1)
l.a8(a,b,0,-1)
l.a8(a,b,1,0)
l.a8(a,b,-1,0)
if((s&q)>>>0!==q){p=new Q.j((s&r)>>>0===r?8:1,4)
s=l.D(p).a
r=$.bP().a
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.b(r)
if(new Q.r((s&r)>>>0).m(0,$.bh())&&(s&q)>>>0!==q){s=b.b
o=s>4?-1:1
m=s+o
s=b.a
while(!0){if(!(m!==4)){n=!0
break}if(l.D(new Q.j(s,m)).a!=$.T().a){n=!1
break}m+=o}if(n){s=p.a
r=4-o-o
a.$1(new Q.an("Rook castles with King",b,new Q.j(s,r+o),p,new Q.j(s,r)))}}}},
fI:function(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.D(b)
h.toString
s=h.a
r=$.bO().a
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.b(r)
i.a3(a,b,1,1)
i.a3(a,b,1,0)
i.a3(a,b,1,-1)
i.a3(a,b,0,-1)
i.a3(a,b,-1,-1)
i.a3(a,b,-1,0)
i.a3(a,b,-1,1)
i.a3(a,b,0,1)
if((s&r)>>>0!==r)for(s=b.a,r=b.b,q=1;q<=8;q+=7){p=new Q.j(s,q)
o=i.D(p).a
n=$.bP().a
if(typeof o!=="number")return o.v()
if(typeof n!=="number")return H.b(n)
if(new Q.r((o&n)>>>0).m(0,$.aH())){n=$.bO().a
if(typeof n!=="number")return H.b(n)
n=(o&n)>>>0!==n
o=n}else o=!1
if(o){m=r>q?-1:1
k=r+m
j=k
while(!0){if(!(j!==q)){l=!0
break}if(i.D(new Q.j(s,j)).a!=$.T().a){l=!1
break}j+=m}if(l){o=k+m
a.$1(new Q.an("King castles with Rook",b,new Q.j(s,o),p,new Q.j(s,o-m)))}}}},
i:function(a){var s,r,q,p,o,n,m,l,k=0
while(!0){if(!(k<64)){s=!1
break}r=this.a
if(k>=r.length)return H.e(r,k)
r=r[k]
q=$.bO().a
if(typeof r!=="number")return r.v()
if(typeof q!=="number")return H.b(q)
if((r&q)>>>0===q){s=!0
break}++k}p=new Q.jf()
p.d=!1
r=new Array(64)
r.fixed$length=Array
p.c=r
p.d=!0
for(o=0;o<8;o=n)for(n=o+1,r=(n-1)*8,m=0;m<8;m=l){l=m+1
k=r+(l-1)
q=this.a
if(k<0||k>=q.length)return H.e(q,k)
p.eJ(o,m,new Q.r(q[k]).eC(0,!1,s))}return p.i(0)}}
Q.j9.prototype={
$1:function(a){return this.a}}
Q.jb.prototype={
$1:function(a){this.a.a=!0}}
Q.jc.prototype={
$1:function(a){var s,r=this.a
if(r.a)return
s=this.b
if(a.b.m(0,s.b)&&a.c.m(0,s.c)&&J.C(a.d,s.d)&&J.C(a.e,s.e))r.a=!0}}
Q.ja.prototype={
$1:function(a){var s,r,q=this.a.dY()
q.dN(a)
s=this.b
s.toString
s=s.a
r=$.Z().a
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.b(r)
if(!q.ei((s&r)>>>0===r))this.c.$1(a)}}
Q.jf.prototype={
dt:function(a,b){var s=a*8+b
if(s>=64)return-1
return s},
eJ:function(a,b,c){var s,r=this.dt(a,b)
if(r<0)return
s=this.c
if(r>=s.length)return H.e(s,r)
s[r]=c},
fN:function(){var s,r,q,p,o=this.c,n=o.length
if(n<=0)return 0
s=o[0]
r=(s==null?"":s).length
for(q=1;q<n;++q){s=o[q]
p=(s==null?"":s).length
if(p>r)r=p}return r},
i:function(a){var s,r,q,p,o,n,m,l=this,k=[],j=l.fN()
if(l.d){s=C.b.bP("",2+C.c.a9(j-1,2))
for(r=j+1,q=0;q<8;){++q
s+=C.b.bP(" "+q,r)}k.push(C.b.jB(s))
p=2}else p=0
for(o=0;o<8;++o){s=l.d?C.b.bP(""+(o+1),p):""
for(q=0;q<8;++q){if(l.d||q!==0)s+="|"
n=l.dt(o,q)
r=l.c
if(n<0||n>=r.length)return H.e(r,n)
m=r[n]
s+=C.b.bP(m==null?"":m,j)}k.push(l.d?s+"|":s)}return C.a.u(k,"\n")}}
Q.r.prototype={
W:function(a,b){var s=this.a,r=b.a
if(typeof s!=="number")return s.W()
if(typeof r!=="number")return H.b(r)
return new Q.r((s|r)>>>0)},
cZ:function(a){var s,r=this.a,q=$.kR().a
if(typeof r!=="number")return r.v()
if(typeof q!=="number")return H.b(q)
s=a.a
if(typeof s!=="number")return s.v()
return(r&q)>>>0===(s&q)>>>0},
m:function(a,b){var s
if(b==null)return!1
if(!(b instanceof Q.r))return!1
s=b.a
return this.a==s},
git:function(){var s,r=this.a,q=$.lQ().a
if(typeof r!=="number")return r.v()
if(typeof q!=="number")return H.b(q)
s=new Q.r((r&q)>>>0)
if(s.m(0,$.aX()))return"B"
if(s.m(0,$.Z()))return"W"
return" "},
gjd:function(){var s,r=this.a,q=$.bP().a
if(typeof r!=="number")return r.v()
if(typeof q!=="number")return H.b(q)
s=new Q.r((r&q)>>>0)
if(s.m(0,$.cn()))return"P"
if(s.m(0,$.aH()))return"R"
if(s.m(0,$.cm()))return"H"
if(s.m(0,$.aW()))return"B"
if(s.m(0,$.ai()))return"Q"
if(s.m(0,$.bh()))return"K"
return" "},
giV:function(){var s=this.a,r=$.aG().a
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.b(r)
r=(s&r)>>>0
if(r===$.T().a)return" "
return""+r},
gaV:function(){var s,r=this.a,q=$.bP().a
if(typeof r!=="number")return r.v()
if(typeof q!=="number")return H.b(q)
s=new Q.r((r&q)>>>0)
if(s.m(0,$.cn()))return"Pawn"
if(s.m(0,$.aH()))return"Rook"
if(s.m(0,$.cm()))return"Knight"
if(s.m(0,$.aW()))return"Bishop"
if(s.m(0,$.ai()))return"Queen"
if(s.m(0,$.bh()))return"King"
return"Empty"},
eC:function(a,b,c){var s,r,q=this,p=q.a
if(p==$.T().a)return""
if(c){s=$.bO().a
if(typeof p!=="number")return p.v()
if(typeof s!=="number")return H.b(s)
r=(p&s)>>>0===s?"+":" "}else r=""
r=r+q.git()+q.gjd()
return b?r+q.giV():r},
i:function(a){return this.eC(a,!0,!0)}}
S.dH.prototype={
eS:function(a,b,c,d,e,f){var s,r,q,p,o=null
if($.hy==null){$.hy=E.N(o,!0,o,"color bishop shape",o,o)
$.kZ=E.N(o,!0,o,"pick bishop shape",o,o)
O.aw("./resources/bishop.obj",a.f).ax(new S.hz(),t.P)}s=this.k3
r=s?"white":"black"
q=r+(" bishop "+d)
r=$.aW()
s=s?$.Z():$.aX()
r=r.a
s=s.a
if(typeof r!=="number")return r.W()
if(typeof s!=="number")return H.b(s)
p=$.aG().a
if(typeof p!=="number")return H.b(p)
this.b1(q,new Q.r((r|s|d&p)>>>0),$.hy,$.kZ)}}
S.hz.prototype={
$1:function(a){$.hy.sa0(0,a.c)
$.kZ.sa0(0,a.c)}}
S.cp.prototype={
eT:function(a,b){var s,r,q,p,o,n,m,l=this,k=null
l.go=[]
l.id=[]
l.k1=[]
l.k4=S.o1(a)
l.a="board"
l.r1=!1
for(s=1;s<=8;++s)for(r=1;r<=8;++r){q=S.op(a,l,(s+r)%2===0,new Q.j(s,r))
l.id.push(q)
p=l.y
if(p.aR([q])){o=p.a
n=o.length
o.push(q)
p=p.c
if(p!=null)p.$2(n,[q])}}for(s=1;s<=8;++s){p=S.mj(a,l,!0,s,0,0.7)
l.go.push(p)
o=l.y
if(o.aR([p])){m=o.a
n=m.length
m.push(p)
o=o.c
if(o!=null)o.$2(n,[p])}p=S.mj(a,l,!1,s,0,0.7)
l.go.push(p)
o=l.y
if(o.aR([p])){m=o.a
n=m.length
m.push(p)
o=o.c
if(o!=null)o.$2(n,[p])}}l.a7(0,S.iT(a,l,!0,1,0,0.7))
l.a7(0,S.iT(a,l,!0,2,0,0.7))
l.a7(0,S.iT(a,l,!1,1,0,0.7))
l.a7(0,S.iT(a,l,!1,2,0,0.7))
l.a7(0,S.id(a,l,!0,1,0,0.7))
l.a7(0,S.id(a,l,!0,2,3.141592653589793,0.7))
l.a7(0,S.id(a,l,!1,1,0,0.7))
l.a7(0,S.id(a,l,!1,2,3.141592653589793,0.7))
l.a7(0,S.hx(a,l,!0,1,-1.5707963267948966,0.8))
l.a7(0,S.hx(a,l,!0,2,1.5707963267948966,0.8))
l.a7(0,S.hx(a,l,!1,1,-1.5707963267948966,0.8))
l.a7(0,S.hx(a,l,!1,2,1.5707963267948966,0.8))
l.a7(0,S.mp(a,l,!0,1,0,1))
l.a7(0,S.mp(a,l,!1,1,0,1))
l.a7(0,S.mc(a,l,!0,1.5707963267948966,0.9))
l.a7(0,S.mc(a,l,!1,1.5707963267948966,0.9))
p=E.N(k,!0,k,"",k,k)
l.k3=p
l.y.j(0,p)
l.k3.y.j(0,S.hN(a,l,0,0,0,0))
l.k3.y.j(0,S.hN(a,l,8,0,1.5707963267948966,1))
l.k3.y.j(0,S.hN(a,l,8,8,3.141592653589793,2))
l.k3.y.j(0,S.hN(a,l,0,8,4.71238898038469,3))
p=F.pR(30)
o=l.k4.db
o=E.N(k,!0,U.bn(V.e7(0,-0.5,0).n(0,V.mg(-1.5707963267948966)).n(0,V.li(12,12,12,1))),"",p,o)
l.k2=o
l.y.j(0,o)
o=l.fy
p=o.d
if(p==null)p=o.d=D.D()
p.j(0,l.ghg())
l.d0(o.c)},
a7:function(a,b){this.go.push(b)
this.y.j(0,b)},
jb:function(a){var s,r,q,p,o,n=this
for(s=n.go,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(J.C(p.ry.b,a)){n.dA(p.fy)
return}}for(s=n.id,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){o=s[q]
if(J.C(o.r1.b,a)){n.dA(o.fy)
return}}},
dA:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
for(s=h.k1,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.c.m(0,a)||J.C(p.d,a)){s=h.fy
o=s.c.D(p.b)
o.toString
r=o.a
n=$.Z().a
if(typeof r!=="number")return r.v()
if(typeof n!=="number")return H.b(n)
if((r&n)>>>0===n!==s.a)H.n(P.k("may not make a move movement out-of-turn"))
if(!s.c.iQ(p))H.n(P.k("not a valid move: "+p.i(0)))
r=s.c
m=r.dY()
m.c=r
s.c=m
m.dN(p)
r=!s.a
s.a=r
s.c.iv(r)
s=s.d
if(s!=null)s.C(null)
s=h.k1
s.toString
C.a.sk(s,0)
return}}s=h.fy
l=s.c.D(a)
r=l.a
if(r!=$.T().a){n=$.Z().a
if(typeof r!=="number")return r.v()
if(typeof n!=="number")return H.b(n)
n=(r&n)>>>0===n!==s.a}else n=!0
if(n)return
o=h.eg(l)
k=o!=null&&o.r1
h.dU()
h.dV()
if(!k){o=h.eg(l)
if(o!=null){o.sbU(0,!0)
j=h.eB(o.fy)
if(j!=null)j.sbU(0,!0)}if(r==$.kS().a)H.n(P.k("may not get movements for an out-of-bounds piece"))
n=$.Z().a
if(typeof r!=="number")return r.v()
if(typeof n!=="number")return H.b(n)
if((r&n)>>>0===n!==s.a)H.n(P.k("may not get movements out-of-turn"))
s=s.c
r=s.cD(l)
i=[]
s.cE(C.a.gih(i),r)
h.k1=i
h.eL(i)}},
hh:function(a){var s=this
s.dU()
s.dV()
s.d0(s.fy.c)},
eg:function(a){var s,r,q,p,o,n=a.a,m=$.kR(),l=m.a
if(typeof n!=="number")return n.v()
if(typeof l!=="number")return H.b(l)
s=new Q.r((n&l)>>>0)
for(n=this.go,l=n.length,r=0;r<n.length;n.length===l||(0,H.o)(n),++r){q=n[r]
p=q.k4.a
o=m.a
if(typeof p!=="number")return p.v()
if(typeof o!=="number")return H.b(o)
if(new Q.r((p&o)>>>0).m(0,s))return q}return null},
jc:function(a){var s,r,q,p
for(s=this.go,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(J.C(p.fy,a))return p}return null},
eB:function(a){var s,r,q,p
for(s=this.id,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.fy.m(0,a))return p}return null},
dU:function(){var s,r,q,p,o
for(s=this.go,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(!1!==p.r2){p.r1=p.r2=!1
p.ao()}}for(s=this.id,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){o=s[q]
if(!1!==o.k3){o.k2=o.k3=!1
o.ao()}}},
dV:function(){var s,r,q,p,o
for(s=this.go,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(!1!==p.r1){p.r2=p.r1=!1
p.ao()}}for(s=this.id,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){o=s[q]
if(!1!==o.k2){o.k3=o.k2=!1
o.ao()}}},
sd2:function(a){var s,r,q,p,o,n,m=this
if(a!==m.r1){m.r1=a
s=m.k2.b=!a
m.k3.b=s
for(r=m.go,q=r.length,p=0;p<q;++p){o=r[p]
if(a!==o.rx){o.rx=a
o.x1.b=s
o.x2.b=a}}for(r=m.id,q=r.length,p=0;p<q;++p){n=r[p]
if(a!==n.k4){n.k4=a
n.r2.b=s
n.rx.b=a}}}},
d0:function(a){var s,r,q,p,o,n
for(s=this.go,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=a.cD(p.k4)
if(!J.C(p.fy,o)){p.fy=o
p.dK()}n=o.a
if(n>=1)if(n<=8){n=o.b
n=n>=1&&n<=8}else n=!1
else n=!1
p.b=n}},
eL:function(a){var s,r,q,p,o,n
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
p=this.eB(q.c)
if(!0!==p.k3){p.k3=!0
p.k2=!1
p.ao()}o=q.d
if(o!=null){n=this.jc(o)
if(!0!==n.r2){n.r2=!0
n.r1=!1
n.ao()}}}}}
S.dS.prototype={
eU:function(a,b,c,d,e,f){var s,r=this,q=null
if($.hO==null){$.hO=E.N(q,!0,q,"edge shape",q,q)
O.aw("./resources/edge.obj",a.f).ax(new S.hP(),t.P)}r.sbO(U.bn(V.e7(c-4,0,d-4).n(0,V.lh(e))))
r.a="edge"
r.y.j(0,$.hO)
s=b.k4.cy
if(f>=s.length)return H.e(s,f)
r.sY(s[f])}}
S.hP.prototype={
$1:function(a){$.hO.sa0(0,a.c)}}
S.kO.prototype={
$1:function(a){var s,r=this.a
r.sd2(!0)
s=this.b
s.ac(this.c)
r.sd2(!1)
s.cQ()}}
S.kP.prototype={
$1:function(a){this.a.jb(t.bL.a(a).d.eG())}}
S.kQ.prototype={
$1:function(a){this.a.b.webkitRequestFullscreen()
return null}}
S.e2.prototype={
eV:function(a,b,c,d,e){var s,r,q,p,o=null
if($.ib==null){$.ib=E.N(o,!0,o,"color king shape",o,o)
$.lc=E.N(o,!0,o,"pick king shape",o,o)
O.aw("./resources/king.obj",a.f).ax(new S.ic(),t.P)}s=this.k3
r=(s?"white":"black")+" king"
q=$.bh()
s=s?$.Z():$.aX()
q=q.a
s=s.a
if(typeof q!=="number")return q.W()
if(typeof s!=="number")return H.b(s)
p=$.aG().a
if(typeof p!=="number")return H.b(p)
this.b1(r,new Q.r((q|s|1&p)>>>0),$.ib,$.lc)}}
S.ic.prototype={
$1:function(a){$.ib.sa0(0,a.c)
$.lc.sa0(0,a.c)}}
S.e3.prototype={
eW:function(a,b,c,d,e,f){var s,r,q,p,o=null
if($.ie==null){$.ie=E.N(o,!0,o,"color knight shape",o,o)
$.ld=E.N(o,!0,o,"pick knight shape",o,o)
O.aw("./resources/knight.obj",a.f).ax(new S.ig(),t.P)}s=this.k3
r=s?"white":"black"
q=r+(" knight "+d)
r=$.cm()
s=s?$.Z():$.aX()
r=r.a
s=s.a
if(typeof r!=="number")return r.W()
if(typeof s!=="number")return H.b(s)
p=$.aG().a
if(typeof p!=="number")return H.b(p)
this.b1(q,new Q.r((r|s|d&p)>>>0),$.ie,$.ld)}}
S.ig.prototype={
$1:function(a){$.ie.sa0(0,a.c)
$.ld.sa0(0,a.c)}}
S.iC.prototype={
eY:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=34067,d=a.f,c=d.a,b=c.createTexture()
c.bindTexture(e,b)
c.texParameteri(e,10242,10497)
c.texParameteri(e,10243,10497)
c.texParameteri(e,10241,9729)
c.texParameteri(e,10240,9729)
c.bindTexture(e,null)
s=new T.jm()
s.a=0
s.b=b
s.c=!1
s.d=0
d.b2(s,b,"resources/posx.png",34069,!1,!1)
d.b2(s,b,"resources/negx.png",34070,!1,!1)
d.b2(s,b,"resources/posy.png",34071,!1,!1)
d.b2(s,b,"resources/negy.png",34072,!1,!1)
d.b2(s,b,"resources/posz.png",34073,!1,!1)
d.b2(s,b,"resources/negz.png",34074,!1,!1)
f.a=s
r=D.m2()
r.sp(0,new V.q(1,0.9,0.8))
r.b=U.bn(V.lg(V.lk(),V.jP(),new V.A(0,-1,-0.25)))
q=D.m2()
q.sp(0,new V.q(0,0.1,0.3))
q.b=U.bn(V.lg(V.lk(),V.jP(),new V.A(0,1,0.25)))
p=new V.q(0.15,0.15,0.15)
d=O.a2()
c=d.x
c.sp(0,new V.q(0.6,0.6,0.6))
c=d.r
c.sp(0,new V.q(0.4,0.4,0.4))
d.z.sp(0,new V.q(1,1,1))
d.z.saa(60)
d.sad(f.a)
d.cx.sp(0,p)
d.dx.j(0,r)
d.dx.j(0,q)
f.b=d
d=O.a2()
c=d.x
c.sp(0,new V.q(0.2,0.2,0.2))
c=d.r
c.sp(0,new V.q(0.1,0.1,0.1))
d.z.sp(0,new V.q(1,1,1))
d.z.saa(60)
d.sad(f.a)
d.cx.sp(0,p)
d.dx.j(0,r)
d.dx.j(0,q)
f.c=d
d=O.a2()
c=d.x
c.sp(0,new V.q(0.6,0,0))
c=d.r
c.sp(0,new V.q(0.8,0,0))
d.z.sp(0,new V.q(1,1,1))
d.z.saa(100)
d.sad(f.a)
d.cx.sp(0,p)
d.dx.j(0,r)
d.dx.j(0,q)
f.d=d
d=O.a2()
c=d.x
c.sp(0,new V.q(0.2,0,0))
c=d.r
c.sp(0,new V.q(0.6,0,0))
d.z.sp(0,new V.q(1,1,1))
d.z.saa(100)
d.sad(f.a)
d.cx.sp(0,p)
d.dx.j(0,r)
d.dx.j(0,q)
f.e=d
d=O.a2()
c=d.x
c.sp(0,new V.q(0.5,0.5,0))
c=d.r
c.sp(0,new V.q(0.7,0.7,0))
d.z.sp(0,new V.q(1,1,1))
d.z.saa(100)
d.sad(f.a)
d.cx.sp(0,p)
d.dx.j(0,r)
d.dx.j(0,q)
f.f=d
d=O.a2()
c=d.x
c.sp(0,new V.q(0.1,0.1,0))
c=d.r
c.sp(0,new V.q(0.5,0.5,0))
d.z.sp(0,new V.q(1,1,1))
d.z.saa(100)
d.sad(f.a)
d.cx.sp(0,p)
d.dx.j(0,r)
d.dx.j(0,q)
f.r=d
o=new V.q(0.075,0.075,0.075)
d=O.a2()
c=d.x
c.sp(0,new V.q(0.6,0.6,0.6))
c=d.r
c.sp(0,new V.q(0.4,0.4,0.4))
d.z.sp(0,new V.q(1,1,1))
d.z.saa(60)
d.sad(f.a)
d.cx.sp(0,o)
d.dx.j(0,r)
d.dx.j(0,q)
f.x=d
d=O.a2()
c=d.x
c.sp(0,new V.q(0.2,0.2,0.2))
c=d.r
c.sp(0,new V.q(0.1,0.1,0.1))
d.z.sp(0,new V.q(1,1,1))
d.z.saa(60)
d.sad(f.a)
d.cx.sp(0,o)
d.dx.j(0,r)
d.dx.j(0,q)
f.y=d
d=O.a2()
c=d.x
c.sp(0,new V.q(0.6,0,0))
c=d.r
c.sp(0,new V.q(0.8,0,0))
d.z.sp(0,new V.q(1,1,1))
d.z.saa(100)
d.sad(f.a)
d.cx.sp(0,o)
d.dx.j(0,r)
d.dx.j(0,q)
f.z=d
d=O.a2()
c=d.x
c.sp(0,new V.q(0.2,0,0))
c=d.r
c.sp(0,new V.q(0.6,0,0))
d.z.sp(0,new V.q(1,1,1))
d.z.saa(100)
d.sad(f.a)
d.cx.sp(0,o)
d.dx.j(0,r)
d.dx.j(0,q)
f.Q=d
d=O.a2()
c=d.x
c.sp(0,new V.q(0.5,0.5,0))
c=d.r
c.sp(0,new V.q(0.7,0.7,0))
d.z.sp(0,new V.q(1,1,1))
d.z.saa(100)
d.sad(f.a)
d.cx.sp(0,o)
d.dx.j(0,r)
d.dx.j(0,q)
f.ch=d
d=O.a2()
c=d.x
c.sp(0,new V.q(0.1,0.1,0))
c=d.r
c.sp(0,new V.q(0.5,0.5,0))
d.z.sp(0,new V.q(1,1,1))
d.z.saa(100)
d.sad(f.a)
d.cx.sp(0,o)
d.dx.j(0,r)
d.dx.j(0,q)
f.cx=d
f.cy=[]
for(n=0;n<4;++n){m=a.f.at("resources/edge"+n+".png")
l=a.f.at("resources/edge"+n+"Normal.png")
d=f.cy
c=O.a2()
c.Q.sag(l)
k=c.x
k.ar(new A.O(!0,k.c.b,!1))
k.b3(new V.q(0.6,0.6,0.6))
c.x.sag(m)
k=c.r
k.ar(new A.O(!0,k.c.b,!1))
k.b3(new V.q(0.4,0.4,0.4))
c.r.sag(m)
k=c.z
k.ar(new A.O(!0,k.c.b,!1))
k.b3(new V.q(1,1,1))
c.z.saa(80)
c.sad(f.a)
k=c.cx
k.ar(new A.O(!0,k.c.b,!1))
k.b3(new V.q(0.1,0.1,0.1))
k=c.dx
if(k.aR([r])){j=k.a
i=j.length
j.push(r)
k=k.c
if(k!=null)k.$2(i,[r])}k=c.dx
if(k.aR([q])){j=k.a
i=j.length
j.push(q)
k=k.c
if(k!=null)k.$2(i,[q])}d.push(c)}h=a.f.at("resources/tableColor.png")
g=a.f.at("resources/tableSpec.png")
d=O.a2()
c=d.x
c.sp(0,new V.q(0.6,0.6,0.6))
d.x.sag(h)
c=d.r
c.sp(0,new V.q(0.4,0.4,0.4))
d.r.sag(h)
d.z.sp(0,new V.q(1,1,1))
d.z.saa(80)
d.z.sag(g)
d.sad(f.a)
d.cx.sag(g)
d.Q.sag(a.f.at("resources/tableNormal.png"))
d.dx.j(0,r)
d.dx.j(0,q)
f.db=d},
em:function(a){var s=V.nM(a/96,1,1),r=new V.ak(s.a,s.b,s.c,1).eG()
s=new O.j5()
s.b=r
return s}}
S.en.prototype={
eZ:function(a,b,c,d,e,f){var s,r,q,p,o=null
if($.iI==null){$.iI=E.N(o,!0,o,"color pawn shape",o,o)
$.lj=E.N(o,!0,o,"pick pawn shape",o,o)
O.aw("./resources/pawn.obj",a.f).ax(new S.iJ(),t.P)}s=this.k3
r=s?"white":"black"
q=r+(" pawn "+d)
r=$.cn()
s=s?$.Z():$.aX()
r=r.a
s=s.a
if(typeof r!=="number")return r.W()
if(typeof s!=="number")return H.b(s)
p=$.aG().a
if(typeof p!=="number")return H.b(p)
this.b1(q,new Q.r((r|s|d&p)>>>0),$.iI,$.lj)}}
S.iJ.prototype={
$1:function(a){$.iI.sa0(0,a.c)
$.lj.sa0(0,a.c)}}
S.ep.prototype={
aZ:function(a,b,c,d){var s=this
s.fy=new Q.j(0,0)
s.k1=U.bn(null)
s.k4=$.T()
s.rx=s.r2=s.r1=!1},
b1:function(a,b,c,d){var s=this,r=null,q=s.k2
s.ry=q.k4.em(q.y.a.length)
s.k4=b
s.x1=E.N([c],!0,r,"color "+a,r,r)
s.x2=E.N([d],!1,r,"pick "+a,r,s.ry)
s.sbO(s.k1)
s.a=a
s.y.j(0,s.x1)
s.y.j(0,s.x2)
s.dK()
s.ao()},
sbU:function(a,b){var s=this
if(b!==s.r1){s.r1=b
s.r2=!1
s.ao()}},
dK:function(){var s=this,r=s.k1,q=s.fy,p=s.id
p=V.e7(q.a-4.5,0,q.b-4.5).n(0,V.lh(s.go)).n(0,V.li(p,p,p,1))
r.sV(0,p)
return p},
ao:function(){var s,r,q=this
if(q.k3)if(q.r1)q.sY(q.k2.k4.d)
else{s=q.r2
r=q.k2.k4
if(s)q.sY(r.f)
else q.sY(r.b)}else if(q.r1)q.sY(q.k2.k4.e)
else{s=q.r2
r=q.k2.k4
if(s)q.sY(r.r)
else q.sY(r.c)}}}
S.ev.prototype={
f_:function(a,b,c,d,e,f){var s,r,q,p,o=null
if($.iN==null){$.iN=E.N(o,!0,o,"color queen shape",o,o)
$.ll=E.N(o,!0,o,"pick queen shape",o,o)
O.aw("./resources/queen.obj",a.f).ax(new S.iO(),t.P)}s=this.k3
r=s?"white":"black"
q=r+(" queen "+d)
r=$.ai()
s=s?$.Z():$.aX()
r=r.a
s=s.a
if(typeof r!=="number")return r.W()
if(typeof s!=="number")return H.b(s)
p=$.aG().a
if(typeof p!=="number")return H.b(p)
this.b1(q,new Q.r((r|s|d&p)>>>0),$.iN,$.ll)}}
S.iO.prototype={
$1:function(a){$.iN.sa0(0,a.c)
$.ll.sa0(0,a.c)}}
S.ez.prototype={
f1:function(a,b,c,d,e,f){var s,r,q,p,o=null,n="rook shape"
if($.iU==null){$.iU=E.N(o,!0,o,n,o,o)
$.lq=E.N(o,!0,o,n,o,o)
O.aw("./resources/rook.obj",a.f).ax(new S.iV(),t.P)}s=this.k3
r=s?"white":"black"
q=r+(" rook "+d)
r=$.aH()
s=s?$.Z():$.aX()
r=r.a
s=s.a
if(typeof r!=="number")return r.W()
if(typeof s!=="number")return H.b(s)
p=$.aG().a
if(typeof p!=="number")return H.b(p)
this.b1(q,new Q.r((r|s|d&p)>>>0),$.iU,$.lq)}}
S.iV.prototype={
$1:function(a){$.iU.sa0(0,a.c)
$.lq.sa0(0,a.c)}}
S.eR.prototype={
f5:function(a,b,c,d){var s,r,q,p,o=this,n=null
if($.js==null){$.js=E.N(n,!0,n,"color tile shape",n,n)
$.lu=E.N(n,!0,n,"pick tile shape",n,n)
O.aw("./resources/tile.obj",a.f).ax(new S.jt(),t.P)}o.k4=o.k3=o.k2=!1
s=o.k1?"white":"black"
r=o.fy
q=r.a
r=r.b
p=s+(" tile "+q+" "+r)
s=o.id
o.r1=s.k4.em(s.y.a.length)
o.r2=E.N([$.js],!0,n,"color "+p,n,n)
o.rx=E.N([$.lu],!1,n,"pick "+p,n,o.r1)
o.sbO(U.bn(V.e7(q-4.5,0,r-4.5)))
o.a=p
o.y.j(0,o.r2)
o.y.j(0,o.rx)
o.ao()},
sbU:function(a,b){var s=this
if(b!==s.k2){s.k2=b
s.k3=!1
s.ao()}},
ao:function(){var s,r,q=this
if(q.k1)if(q.k2)q.sY(q.id.k4.z)
else{s=q.k3
r=q.id.k4
if(s)q.sY(r.ch)
else q.sY(r.x)}else if(q.k2)q.sY(q.id.k4.Q)
else{s=q.k3
r=q.id.k4
if(s)q.sY(r.cx)
else q.sY(r.y)}}}
S.jt.prototype={
$1:function(a){$.js.sa0(0,a.c)
$.lu.sa0(0,a.c)}}
L.kL.prototype={
$0:function(){return S.q9(this.a)}};(function aliases(){var s=J.a.prototype
s.eQ=s.i
s=J.bw.prototype
s.eR=s.i
s=K.dX.prototype
s.eP=s.ba
s.d5=s.i
s=O.cO.prototype
s.d6=s.aQ
s=O.aP.prototype
s.d7=s.aQ})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_1,p=hunkHelpers._static_0,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"p3","nT",26)
r(J.al.prototype,"gih","j",15)
q(P,"pI","ou",6)
q(P,"pJ","ov",6)
q(P,"pK","ow",6)
p(P,"n5","pD",8)
o(P.d2.prototype,"giu",0,1,null,["$2","$1"],["bK","dX"],19,0)
q(W,"rx","hQ",27)
var j
o(j=E.U.prototype,"ger",0,0,null,["$1","$0"],["es","j1"],0,0)
o(j,"geu",0,0,null,["$1","$0"],["ev","j2"],0,0)
o(j,"gep",0,0,null,["$1","$0"],["eq","j0"],0,0)
o(j,"gen",0,0,null,["$1","$0"],["eo","iY"],0,0)
n(j,"giW","iX",3)
n(j,"giZ","j_",3)
o(j=E.eQ.prototype,"gda",0,0,null,["$1","$0"],["dd","dc"],0,0)
m(j,"gjq","cQ",8)
l(j=X.fb.prototype,"ghe","hf",4)
l(j,"gh2","h3",4)
l(j,"gh8","h9",2)
l(j,"ghk","hl",9)
l(j,"ghi","hj",9)
l(j,"gho","hp",2)
l(j,"ghs","ht",2)
l(j,"ghc","hd",2)
l(j,"ghq","hr",2)
l(j,"gha","hb",2)
l(j,"ghu","hv",24)
l(j,"ghw","hx",4)
l(j,"ghM","hN",5)
l(j,"ghI","hJ",5)
l(j,"ghK","hL",5)
o(j=D.cJ.prototype,"gdv",0,0,null,["$1","$0"],["dw","hm"],0,0)
l(j,"ghy","hz",25)
n(j,"gfX","fY",10)
n(j,"ghC","hD",10)
k(V.ao.prototype,"gk","cI",11)
k(V.A.prototype,"gk","cI",11)
o(j=U.bX.prototype,"gbA",0,0,null,["$1","$0"],["X","aK"],0,0)
n(j,"gfV","fW",12)
n(j,"ghA","hB",12)
o(j=U.cZ.prototype,"gbA",0,0,null,["$1","$0"],["X","aK"],0,0)
l(j,"gf6","f7",1)
l(j,"gf8","f9",1)
l(j,"gfa","fb",1)
l(j,"gfJ","fK",1)
l(j,"gfL","fM",1)
l(j,"gfg","fh",1)
l(j,"gfe","ff",1)
l(j,"gfc","fd",1)
o(j=M.cs.prototype,"ga6",0,0,null,["$1","$0"],["a1","bg"],0,0)
n(j,"ghE","hF",13)
n(j,"ghG","hH",13)
o(M.cv.prototype,"ga6",0,0,null,["$1","$0"],["a1","bg"],0,0)
o(j=M.cB.prototype,"ga6",0,0,null,["$1","$0"],["a1","bg"],0,0)
n(j,"gh4","h5",3)
n(j,"gh6","h7",3)
o(j=O.c1.prototype,"gaI",0,0,null,["$1","$0"],["T","bh"],0,0)
o(j,"gi0",0,0,null,["$1","$0"],["dC","i1"],0,0)
n(j,"gfZ","h_",14)
n(j,"gh0","h1",14)
o(O.cO.prototype,"gaI",0,0,null,["$1","$0"],["T","bh"],0,0)
o(O.eE.prototype,"gaI",0,0,null,["$1","$0"],["T","bh"],0,0)
o(j=T.dM.prototype,"gde",0,0,null,["$1","$0"],["bv","fi"],0,0)
l(j,"gfO","fP",1)
l(j,"gfQ","fR",1)
l(j,"gfS","fT",1)
l(j,"gic","ie",1)
l(j,"gia","ib",1)
l(j,"gi8","i9",1)
o(X.eo.prototype,"gfl",0,0,null,["$1","$0"],["a2","fm"],0,0)
l(S.cp.prototype,"ghg","hh",1)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.B,null)
q(P.B,[H.la,J.a,J.a1,P.d7,P.h,H.c0,P.dZ,H.cD,H.f9,H.jz,P.I,H.iH,H.cC,H.dg,H.bU,P.aE,H.ii,H.e5,H.i7,H.fD,H.jZ,H.ay,H.fx,P.dk,P.fg,P.cd,P.ce,P.d2,P.d4,P.a_,P.fh,P.eL,P.eM,P.fW,P.cX,P.dE,P.kr,P.dd,P.kj,P.d6,P.F,P.dK,P.kq,P.bL,P.au,P.a0,P.bo,P.em,P.cV,P.fu,P.i_,P.aO,P.S,P.W,P.ln,P.aa,P.fZ,P.G,P.bH,W.hE,W.l4,W.lA,W.K,W.cE,P.dm,P.fO,K.hm,K.dX,K.iX,L.eJ,L.eS,L.eT,L.jv,O.bV,O.cP,E.hw,E.U,E.bS,E.c6,E.fr,E.iP,E.eQ,Z.fe,Z.d_,Z.bT,Z.cF,Z.b8,D.hB,D.bW,D.V,O.kw,O.ky,O.kx,X.dJ,X.e1,X.ia,X.ik,X.bB,X.iG,X.jw,X.fb,D.cx,D.aN,V.q,V.ak,V.hT,V.e6,V.c2,V.a9,V.X,V.aR,V.ex,V.ao,V.A,U.cZ,M.cv,M.cB,M.az,A.hq,A.hr,A.O,A.hv,A.hI,A.iL,A.j7,A.iq,A.f_,A.f0,A.f3,A.f6,A.jB,A.jH,F.hX,F.ih,F.iK,F.iY,F.iZ,F.j_,F.j0,F.jQ,F.jR,F.jS,F.jV,F.jW,O.ji,O.cO,O.ir,T.dM,T.jn,T.jq,X.jg,X.l0,X.i5,X.eo,V.j1,Q.i1,Q.j,Q.an,Q.j8,Q.jf,Q.r,S.iC])
q(J.a,[J.i6,J.bZ,J.bw,J.al,J.bv,J.aM,H.cR,W.d,W.hl,W.dI,W.aJ,W.L,W.fm,W.at,W.hH,W.hJ,W.fn,W.cz,W.fp,W.hK,W.i,W.fv,W.br,W.i2,W.fz,W.bu,W.ij,W.iD,W.fE,W.fF,W.bA,W.fG,W.fI,W.bD,W.fM,W.fP,W.bF,W.fQ,W.bG,W.fV,W.b5,W.h0,W.ju,W.bI,W.h2,W.jx,W.jJ,W.h8,W.ha,W.hc,W.he,W.hg,P.c_,P.fB,P.c5,P.fK,P.iM,P.fX,P.c9,P.h4,P.hs,P.fi,P.ey,P.fT])
q(J.bw,[J.eq,J.bK,J.aD])
r(J.e_,J.al)
q(J.bv,[J.cI,J.cH])
r(P.cK,P.d7)
q(P.cK,[H.ca,W.fk,W.fj,P.dV])
r(H.P,H.ca)
q(P.h,[H.l,H.by,H.d0,P.cG])
r(H.cA,H.by)
q(P.dZ,[H.cN,H.ff])
q(P.I,[H.ei,H.e0,H.f8,H.eB,H.fs,P.dD,P.ej,P.as,P.fa,P.f7,P.cW,P.dN,P.dP])
q(H.bU,[H.jh,H.i9,H.i8,H.kG,H.kH,H.kI,P.k0,P.k_,P.k1,P.k2,P.kp,P.ko,P.ks,P.kt,P.kC,P.k4,P.kc,P.k8,P.k9,P.ka,P.k6,P.kb,P.k5,P.kf,P.kg,P.ke,P.kd,P.kA,P.km,P.kl,P.kn,P.il,P.hL,P.hM,W.i3,W.i4,W.iE,W.iF,W.iW,W.je,W.k3,P.kD,P.hY,P.hZ,P.ht,E.iQ,E.iR,E.iS,E.jr,D.hV,D.hW,F.kE,F.jY,F.jX,F.jT,F.jU,O.iu,O.iv,O.iw,O.ix,O.iy,O.iz,O.iA,O.iB,T.jp,T.jo,V.kN,V.j3,V.j2,Q.j9,Q.jb,Q.jc,Q.ja,S.hz,S.hP,S.kO,S.kP,S.kQ,S.ic,S.ig,S.iJ,S.iO,S.iV,S.jt,L.kL])
q(H.jh,[H.jd,H.cq])
r(P.cM,P.aE)
r(H.w,P.cM)
r(H.b_,H.l)
r(H.c4,H.cR)
q(H.c4,[H.d9,H.db])
r(H.da,H.d9)
r(H.bC,H.da)
r(H.dc,H.db)
r(H.cQ,H.dc)
q(H.cQ,[H.ec,H.ed,H.ee,H.ef,H.eg,H.cS,H.eh])
r(H.dl,H.fs)
r(P.dh,P.cG)
r(P.d1,P.d2)
r(P.kk,P.kr)
r(P.d5,P.dd)
r(P.dO,P.eM)
r(P.hR,P.dK)
r(P.jK,P.hR)
r(P.jL,P.dO)
q(P.a0,[P.a7,P.t])
q(P.as,[P.c8,P.dY])
q(W.d,[W.y,W.dU,W.bt,W.b4,W.de,W.b7,W.aF,W.di,W.fd,W.cb,P.dG,P.aY])
q(W.y,[W.Q,W.aC])
q(W.Q,[W.p,P.m])
q(W.p,[W.dB,W.dC,W.bm,W.dW,W.bY,W.eC,W.b6])
r(W.hD,W.aJ)
r(W.cw,W.fm)
q(W.at,[W.hF,W.hG])
r(W.fo,W.fn)
r(W.cy,W.fo)
r(W.fq,W.fp)
r(W.dR,W.fq)
r(W.bp,W.dI)
r(W.fw,W.fv)
r(W.dT,W.fw)
r(W.fA,W.fz)
r(W.bs,W.fA)
r(W.aZ,W.bt)
q(W.i,[W.aT,W.bE])
q(W.aT,[W.bx,W.am,W.bJ])
r(W.e8,W.fE)
r(W.e9,W.fF)
r(W.fH,W.fG)
r(W.ea,W.fH)
r(W.fJ,W.fI)
r(W.cT,W.fJ)
r(W.fN,W.fM)
r(W.er,W.fN)
r(W.eA,W.fP)
r(W.df,W.de)
r(W.eG,W.df)
r(W.fR,W.fQ)
r(W.eH,W.fR)
r(W.eK,W.fV)
r(W.h1,W.h0)
r(W.eO,W.h1)
r(W.dj,W.di)
r(W.eP,W.dj)
r(W.h3,W.h2)
r(W.eU,W.h3)
r(W.b9,W.am)
r(W.h9,W.h8)
r(W.fl,W.h9)
r(W.d3,W.cz)
r(W.hb,W.ha)
r(W.fy,W.hb)
r(W.hd,W.hc)
r(W.d8,W.hd)
r(W.hf,W.he)
r(W.fS,W.hf)
r(W.hh,W.hg)
r(W.h_,W.hh)
r(W.ft,P.eL)
r(P.ax,P.fO)
r(P.fC,P.fB)
r(P.e4,P.fC)
r(P.fL,P.fK)
r(P.ek,P.fL)
r(P.fY,P.fX)
r(P.eN,P.fY)
r(P.h5,P.h4)
r(P.eV,P.h5)
r(P.dF,P.fi)
r(P.el,P.aY)
r(P.fU,P.fT)
r(P.eI,P.fU)
q(K.dX,[K.b1,L.jy])
q(E.hw,[Z.hA,A.eD,T.jj])
q(D.V,[D.aK,D.aL,D.u,O.eu,X.es,T.cr])
q(X.es,[X.cL,X.c3,X.cY])
q(O.bV,[D.cJ,U.bX,M.cs])
q(D.hB,[U.hC,U.av])
r(U.cu,U.av)
q(A.eD,[A.im,A.j4,A.j6])
q(A.jB,[A.eX,A.jE,A.jF,A.jG,A.jC,A.eW,A.jD,A.eY,A.eZ,A.jI,A.f1,A.f2,A.f4,A.f5])
q(O.ji,[O.c1,O.eE,O.j5])
q(O.cO,[O.io,O.ip,O.aP])
q(O.aP,[O.is,O.it])
q(T.jj,[T.jk,T.jm])
r(T.jl,T.jk)
q(X.jg,[X.hu,X.i0])
q(E.U,[S.ep,S.cp,S.dS,S.eR])
q(S.ep,[S.dH,S.e2,S.e3,S.en,S.ev,S.ez])
s(H.ca,H.f9)
s(H.d9,P.F)
s(H.da,H.cD)
s(H.db,P.F)
s(H.dc,H.cD)
s(P.d7,P.F)
s(W.fm,W.hE)
s(W.fn,P.F)
s(W.fo,W.K)
s(W.fp,P.F)
s(W.fq,W.K)
s(W.fv,P.F)
s(W.fw,W.K)
s(W.fz,P.F)
s(W.fA,W.K)
s(W.fE,P.aE)
s(W.fF,P.aE)
s(W.fG,P.F)
s(W.fH,W.K)
s(W.fI,P.F)
s(W.fJ,W.K)
s(W.fM,P.F)
s(W.fN,W.K)
s(W.fP,P.aE)
s(W.de,P.F)
s(W.df,W.K)
s(W.fQ,P.F)
s(W.fR,W.K)
s(W.fV,P.aE)
s(W.h0,P.F)
s(W.h1,W.K)
s(W.di,P.F)
s(W.dj,W.K)
s(W.h2,P.F)
s(W.h3,W.K)
s(W.h8,P.F)
s(W.h9,W.K)
s(W.ha,P.F)
s(W.hb,W.K)
s(W.hc,P.F)
s(W.hd,W.K)
s(W.he,P.F)
s(W.hf,W.K)
s(W.hg,P.F)
s(W.hh,W.K)
s(P.fB,P.F)
s(P.fC,W.K)
s(P.fK,P.F)
s(P.fL,W.K)
s(P.fX,P.F)
s(P.fY,W.K)
s(P.h4,P.F)
s(P.h5,W.K)
s(P.fi,P.aE)
s(P.fT,P.F)
s(P.fU,W.K)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{t:"int",a7:"double",a0:"num",G:"String",bL:"bool",W:"Null",aO:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([V*])","~(V*)","~(am*)","~(t*,h<U*>*)","~(i*)","~(bJ*)","~(~())","W(@)","~()","~(bx*)","~(t*,h<aN*>*)","a7*()","~(t*,h<av*>*)","~(t*,h<az*>*)","~(t*,h<c2*>*)","~(B?)","@(@)","~(@)","W(@,aa)","~(B[aa?])","W(B,aa)","a_<@>(@)","W(B?,B?)","W(@,@)","~(b9*)","bL*(h<aN*>*)","t(@,@)","G(d)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.oP(v.typeUniverse,JSON.parse('{"aD":"bw","eq":"bw","bK":"bw","qf":"i","qp":"i","qh":"aY","qg":"d","qx":"d","qz":"d","qe":"m","qr":"m","rf":"bE","qi":"p","qv":"p","qs":"y","qo":"y","rc":"aF","qm":"aT","qj":"aC","qB":"aC","qy":"am","qu":"bt","qt":"bs","qw":"bC","bZ":{"W":[]},"al":{"l":["1"],"h":["1"]},"e_":{"l":["1"],"h":["1"]},"bv":{"a7":[],"a0":[]},"cI":{"a7":[],"t":[],"a0":[]},"cH":{"a7":[],"a0":[]},"aM":{"G":[]},"P":{"l":["t"],"h":["t"]},"l":{"h":["1"]},"by":{"h":["2"]},"cA":{"l":["2"],"h":["2"]},"d0":{"h":["1"]},"ca":{"l":["1"],"h":["1"]},"ei":{"I":[]},"e0":{"I":[]},"f8":{"I":[]},"dg":{"aa":[]},"eB":{"I":[]},"w":{"S":["1","2"]},"b_":{"l":["1"],"h":["1"]},"c4":{"v":["1"]},"bC":{"v":["a7"],"l":["a7"],"h":["a7"]},"cQ":{"v":["t"],"l":["t"],"h":["t"]},"ec":{"v":["t"],"l":["t"],"h":["t"]},"ed":{"v":["t"],"l":["t"],"h":["t"]},"ee":{"v":["t"],"l":["t"],"h":["t"]},"ef":{"v":["t"],"l":["t"],"h":["t"]},"eg":{"v":["t"],"l":["t"],"h":["t"]},"cS":{"v":["t"],"l":["t"],"h":["t"]},"eh":{"v":["t"],"l":["t"],"h":["t"]},"fs":{"I":[]},"dl":{"I":[]},"dk":{"cX":[]},"dh":{"h":["1"]},"d1":{"d2":["1"]},"a_":{"bq":["1"]},"dE":{"I":[]},"d5":{"l":["1"],"h":["1"]},"cG":{"h":["1"]},"cK":{"l":["1"],"h":["1"]},"cM":{"S":["1","2"]},"aE":{"S":["1","2"]},"dd":{"l":["1"],"h":["1"]},"a7":{"a0":[]},"dD":{"I":[]},"ej":{"I":[]},"as":{"I":[]},"c8":{"I":[]},"dY":{"I":[]},"fa":{"I":[]},"f7":{"I":[]},"cW":{"I":[]},"dN":{"I":[]},"em":{"I":[]},"cV":{"I":[]},"dP":{"I":[]},"t":{"a0":[]},"aO":{"l":["1"],"h":["1"]},"fZ":{"aa":[]},"p":{"Q":[],"y":[],"d":[]},"dB":{"Q":[],"y":[],"d":[]},"dC":{"Q":[],"y":[],"d":[]},"bm":{"Q":[],"y":[],"d":[]},"aC":{"y":[],"d":[]},"cy":{"v":["ax<a0>"],"l":["ax<a0>"],"h":["ax<a0>"]},"cz":{"ax":["a0"]},"dR":{"v":["G"],"l":["G"],"h":["G"]},"fk":{"l":["Q"],"h":["Q"]},"Q":{"y":[],"d":[]},"dT":{"v":["bp"],"l":["bp"],"h":["bp"]},"dU":{"d":[]},"dW":{"Q":[],"y":[],"d":[]},"bs":{"v":["y"],"l":["y"],"h":["y"]},"aZ":{"d":[]},"bt":{"d":[]},"bY":{"Q":[],"y":[],"d":[]},"bx":{"i":[]},"e8":{"S":["G","@"]},"e9":{"S":["G","@"]},"ea":{"v":["bA"],"l":["bA"],"h":["bA"]},"am":{"i":[]},"fj":{"l":["y"],"h":["y"]},"y":{"d":[]},"cT":{"v":["y"],"l":["y"],"h":["y"]},"er":{"v":["bD"],"l":["bD"],"h":["bD"]},"bE":{"i":[]},"eA":{"S":["G","@"]},"eC":{"Q":[],"y":[],"d":[]},"b4":{"d":[]},"eG":{"v":["b4"],"d":[],"l":["b4"],"h":["b4"]},"eH":{"v":["bF"],"l":["bF"],"h":["bF"]},"eK":{"S":["G","G"]},"b6":{"Q":[],"y":[],"d":[]},"b7":{"d":[]},"aF":{"d":[]},"eO":{"v":["aF"],"l":["aF"],"h":["aF"]},"eP":{"v":["b7"],"d":[],"l":["b7"],"h":["b7"]},"bJ":{"i":[]},"eU":{"v":["bI"],"l":["bI"],"h":["bI"]},"aT":{"i":[]},"fd":{"d":[]},"b9":{"am":[],"i":[]},"cb":{"d":[]},"fl":{"v":["L"],"l":["L"],"h":["L"]},"d3":{"ax":["a0"]},"fy":{"v":["br?"],"l":["br?"],"h":["br?"]},"d8":{"v":["y"],"l":["y"],"h":["y"]},"fS":{"v":["bG"],"l":["bG"],"h":["bG"]},"h_":{"v":["b5"],"l":["b5"],"h":["b5"]},"dm":{"bu":[]},"dV":{"l":["Q"],"h":["Q"]},"ax":{"fO":["1"]},"e4":{"l":["c_"],"h":["c_"]},"ek":{"l":["c5"],"h":["c5"]},"eN":{"l":["G"],"h":["G"]},"m":{"Q":[],"y":[],"d":[]},"eV":{"l":["c9"],"h":["c9"]},"dF":{"S":["G","@"]},"dG":{"d":[]},"aY":{"d":[]},"el":{"d":[]},"eI":{"l":["S<@,@>"],"h":["S<@,@>"]},"bV":{"h":["1*"]},"aK":{"V":[]},"aL":{"V":[]},"u":{"V":[]},"eu":{"V":[]},"cL":{"V":[]},"c3":{"V":[]},"es":{"V":[]},"cY":{"V":[]},"cx":{"aN":[]},"cJ":{"h":["aN*"]},"cu":{"av":[]},"bX":{"av":[],"h":["av*"]},"cZ":{"av":[]},"cs":{"az":[],"h":["az*"]},"cv":{"az":[]},"cB":{"az":[]},"cr":{"V":[]},"dH":{"U":[]},"cp":{"U":[]},"dS":{"U":[]},"e2":{"U":[]},"e3":{"U":[]},"en":{"U":[]},"ep":{"U":[]},"ev":{"U":[]},"ez":{"U":[]},"eR":{"U":[]}}'))
H.oO(v.typeUniverse,JSON.parse('{"al":1,"e_":1,"a1":1,"l":1,"c0":1,"by":2,"cA":2,"cN":2,"d0":1,"ff":1,"cD":1,"f9":1,"ca":1,"b_":1,"e5":1,"c4":1,"ce":1,"dh":1,"d4":2,"eL":1,"eM":2,"fW":1,"d6":1,"cG":1,"cK":1,"F":1,"cM":2,"aE":2,"dd":1,"d7":1,"dK":2,"dO":2,"h":1,"dZ":1,"aO":1,"ft":1,"K":1,"cE":1,"bV":1,"aK":1,"aL":1,"u":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"}
var t=(function rtii(){var s=H.pV
return{U:s("l<@>"),h:s("Q"),C:s("I"),D:s("i"),Z:s("qq"),e:s("bq<@>"),s:s("bu"),k:s("bY"),b:s("al<@>"),T:s("bZ"),g:s("aD"),p:s("v<@>"),l:s("w<G*,c1*>"),F:s("w<G*,eD*>"),V:s("w<G*,eJ*>"),i:s("w<G*,G*>"),w:s("w<G*,eT*>"),t:s("w<t*,aO<f_*>*>"),G:s("w<t*,aO<f0*>*>"),W:s("w<t*,aO<f3*>*>"),L:s("w<t*,aO<f6*>*>"),J:s("w<t*,eX*>"),E:s("w<t*,bL*>"),a:s("w<t*,t*>"),P:s("W"),K:s("B"),I:s("ax<a0>"),N:s("G"),u:s("b6"),M:s("cX"),o:s("bK"),f:s("d1<aZ>"),Y:s("a_<aZ>"),v:s("a_<@>"),x:s("bL"),cb:s("a7"),z:s("@"),b6:s("@(B)"),R:s("@(B,aa)"),S:s("t"),B:s("bm*"),bL:s("cr*"),bK:s("U*"),cj:s("cL*"),aH:s("S<G*,c1*>*"),d:s("c3*"),A:s("0&*"),_:s("B*"),bw:s("G*"),j:s("eS*"),m:s("cY*"),n:s("eW*"),r:s("eY*"),y:s("eZ*"),O:s("f1*"),q:s("f2*"),c:s("f4*"),Q:s("f5*"),cH:s("t*"),bc:s("bq<W>?"),X:s("B?"),H:s("a0")}})();(function constants(){var s=hunkHelpers.makeConstList
C.f=W.bm.prototype
C.J=W.aZ.prototype
C.K=J.a.prototype
C.a=J.al.prototype
C.k=J.cH.prototype
C.c=J.cI.prototype
C.i=J.bZ.prototype
C.d=J.bv.prototype
C.b=J.aM.prototype
C.L=J.aD.prototype
C.u=J.eq.prototype
C.l=P.ey.prototype
C.m=J.bK.prototype
C.v=W.b9.prototype
C.w=W.cb.prototype
C.x=new E.bS("Browser.chrome")
C.n=new E.bS("Browser.firefox")
C.o=new E.bS("Browser.edge")
C.y=new E.bS("Browser.other")
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.z=function() {
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
C.E=function(getTagFallback) {
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
C.A=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.B=function(hooks) {
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
C.D=function(hooks) {
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
C.C=function(hooks) {
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
C.q=function(hooks) { return hooks; }

C.F=new P.em()
C.j=new P.jK()
C.G=new P.jL()
C.e=new P.kk()
C.H=new P.fZ()
C.h=new P.bo(0)
C.I=new P.bo(5e6)
C.r=s([0,0,65498,45055,65535,34815,65534,18431])
C.M=new E.c6("OperatingSystem.windows")
C.t=new E.c6("OperatingSystem.mac")
C.N=new E.c6("OperatingSystem.linux")
C.O=new E.c6("OperatingSystem.other")
C.P=new P.cd(null,2)})();(function staticFields(){$.mJ=null
$.aI=0
$.lZ=null
$.lY=null
$.n7=null
$.n4=null
$.nc=null
$.kF=null
$.kJ=null
$.lN=null
$.cg=null
$.ds=null
$.dt=null
$.lI=!1
$.H=C.e
$.ag=[]
$.hS=null
$.n1=null
$.mh=null
$.mm=null
$.aQ=null
$.ms=null
$.mC=null
$.mE=null
$.jM=null
$.jN=null
$.jO=null
$.mD=null
$.ml=null
$.hy=null
$.kZ=null
$.hO=null
$.ib=null
$.lc=null
$.ie=null
$.ld=null
$.iI=null
$.lj=null
$.iN=null
$.ll=null
$.iU=null
$.lq=null
$.js=null
$.lu=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"qn","nj",function(){return H.pY("_$dart_dartClosure")})
s($,"qR","nk",function(){return H.aS(H.jA({
toString:function(){return"$receiver$"}}))})
s($,"qS","nl",function(){return H.aS(H.jA({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"qT","nm",function(){return H.aS(H.jA(null))})
s($,"qU","nn",function(){return H.aS(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"qX","nq",function(){return H.aS(H.jA(void 0))})
s($,"qY","nr",function(){return H.aS(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"qW","np",function(){return H.aS(H.mA(null))})
s($,"qV","no",function(){return H.aS(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"r_","nt",function(){return H.aS(H.mA(void 0))})
s($,"qZ","ns",function(){return H.aS(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"rd","lR",function(){return P.ot()})
s($,"rg","nx",function(){return P.lo("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"r6","nw",function(){return Z.aA(0)})
s($,"r0","nu",function(){return Z.aA(511)})
s($,"r8","ar",function(){return Z.aA(1)})
s($,"r7","bk",function(){return Z.aA(2)})
s($,"r2","bj",function(){return Z.aA(4)})
s($,"r9","bl",function(){return Z.aA(8)})
s($,"ra","bQ",function(){return Z.aA(16)})
s($,"r3","dy",function(){return Z.aA(32)})
s($,"r4","dz",function(){return Z.aA(64)})
s($,"r5","nv",function(){return Z.aA(96)})
s($,"rb","co",function(){return Z.aA(128)})
s($,"r1","bi",function(){return Z.aA(256)})
s($,"ql","ni",function(){return new V.hT()})
s($,"qk","z",function(){return $.ni()})
s($,"qL","kS",function(){return Q.ab(-1)})
s($,"qG","T",function(){return Q.ab(0)})
s($,"qK","bO",function(){return Q.ab(4096)})
s($,"qF","aG",function(){return Q.ab(15)})
s($,"qH","kR",function(){return $.lQ().W(0,$.bP()).W(0,$.aG())})
s($,"qD","aX",function(){return Q.ab(256)})
s($,"qQ","Z",function(){return Q.ab(512)})
s($,"qE","lQ",function(){return Q.ab(768)})
s($,"qM","cn",function(){return Q.ab(16)})
s($,"qP","aH",function(){return Q.ab(32)})
s($,"qJ","cm",function(){return Q.ab(48)})
s($,"qC","aW",function(){return Q.ab(64)})
s($,"qO","ai",function(){return Q.ab(80)})
s($,"qI","bh",function(){return Q.ab(96)})
s($,"qN","bP",function(){return Q.ab(240)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cR,ArrayBufferView:H.cR,Float32Array:H.bC,Float64Array:H.bC,Int16Array:H.ec,Int32Array:H.ed,Int8Array:H.ee,Uint16Array:H.ef,Uint32Array:H.eg,Uint8ClampedArray:H.cS,CanvasPixelArray:H.cS,Uint8Array:H.eh,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLBaseElement:W.p,HTMLBodyElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLDivElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLInputElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableColElement:W.p,HTMLTableElement:W.p,HTMLTableRowElement:W.p,HTMLTableSectionElement:W.p,HTMLTemplateElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.hl,HTMLAnchorElement:W.dB,HTMLAreaElement:W.dC,Blob:W.dI,HTMLCanvasElement:W.bm,CDATASection:W.aC,CharacterData:W.aC,Comment:W.aC,ProcessingInstruction:W.aC,Text:W.aC,CSSPerspective:W.hD,CSSCharsetRule:W.L,CSSConditionRule:W.L,CSSFontFaceRule:W.L,CSSGroupingRule:W.L,CSSImportRule:W.L,CSSKeyframeRule:W.L,MozCSSKeyframeRule:W.L,WebKitCSSKeyframeRule:W.L,CSSKeyframesRule:W.L,MozCSSKeyframesRule:W.L,WebKitCSSKeyframesRule:W.L,CSSMediaRule:W.L,CSSNamespaceRule:W.L,CSSPageRule:W.L,CSSRule:W.L,CSSStyleRule:W.L,CSSSupportsRule:W.L,CSSViewportRule:W.L,CSSStyleDeclaration:W.cw,MSStyleCSSProperties:W.cw,CSS2Properties:W.cw,CSSImageValue:W.at,CSSKeywordValue:W.at,CSSNumericValue:W.at,CSSPositionValue:W.at,CSSResourceValue:W.at,CSSUnitValue:W.at,CSSURLImageValue:W.at,CSSStyleValue:W.at,CSSMatrixComponent:W.aJ,CSSRotation:W.aJ,CSSScale:W.aJ,CSSSkew:W.aJ,CSSTranslation:W.aJ,CSSTransformComponent:W.aJ,CSSTransformValue:W.hF,CSSUnparsedValue:W.hG,DataTransferItemList:W.hH,DOMException:W.hJ,ClientRectList:W.cy,DOMRectList:W.cy,DOMRectReadOnly:W.cz,DOMStringList:W.dR,DOMTokenList:W.hK,Element:W.Q,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,SubmitEvent:W.i,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.bp,FileList:W.dT,FileWriter:W.dU,HTMLFormElement:W.dW,Gamepad:W.br,History:W.i2,HTMLCollection:W.bs,HTMLFormControlsCollection:W.bs,HTMLOptionsCollection:W.bs,XMLHttpRequest:W.aZ,XMLHttpRequestUpload:W.bt,XMLHttpRequestEventTarget:W.bt,ImageData:W.bu,HTMLImageElement:W.bY,KeyboardEvent:W.bx,Location:W.ij,MediaList:W.iD,MIDIInputMap:W.e8,MIDIOutputMap:W.e9,MimeType:W.bA,MimeTypeArray:W.ea,PointerEvent:W.am,MouseEvent:W.am,DragEvent:W.am,Document:W.y,DocumentFragment:W.y,HTMLDocument:W.y,ShadowRoot:W.y,XMLDocument:W.y,Attr:W.y,DocumentType:W.y,Node:W.y,NodeList:W.cT,RadioNodeList:W.cT,Plugin:W.bD,PluginArray:W.er,ProgressEvent:W.bE,ResourceProgressEvent:W.bE,RTCStatsReport:W.eA,HTMLSelectElement:W.eC,SourceBuffer:W.b4,SourceBufferList:W.eG,SpeechGrammar:W.bF,SpeechGrammarList:W.eH,SpeechRecognitionResult:W.bG,Storage:W.eK,CSSStyleSheet:W.b5,StyleSheet:W.b5,HTMLTableCellElement:W.b6,HTMLTableDataCellElement:W.b6,HTMLTableHeaderCellElement:W.b6,TextTrack:W.b7,TextTrackCue:W.aF,VTTCue:W.aF,TextTrackCueList:W.eO,TextTrackList:W.eP,TimeRanges:W.ju,Touch:W.bI,TouchEvent:W.bJ,TouchList:W.eU,TrackDefaultList:W.jx,CompositionEvent:W.aT,FocusEvent:W.aT,TextEvent:W.aT,UIEvent:W.aT,URL:W.jJ,VideoTrackList:W.fd,WheelEvent:W.b9,Window:W.cb,DOMWindow:W.cb,CSSRuleList:W.fl,ClientRect:W.d3,DOMRect:W.d3,GamepadList:W.fy,NamedNodeMap:W.d8,MozNamedAttrMap:W.d8,SpeechRecognitionResultList:W.fS,StyleSheetList:W.h_,SVGLength:P.c_,SVGLengthList:P.e4,SVGNumber:P.c5,SVGNumberList:P.ek,SVGPointList:P.iM,SVGStringList:P.eN,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGScriptElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGTransform:P.c9,SVGTransformList:P.eV,AudioBuffer:P.hs,AudioParamMap:P.dF,AudioTrackList:P.dG,AudioContext:P.aY,webkitAudioContext:P.aY,BaseAudioContext:P.aY,OfflineAudioContext:P.el,WebGL2RenderingContext:P.ey,SQLResultSetRowList:P.eI})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,ProgressEvent:true,ResourceProgressEvent:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c4.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
H.da.$nativeSuperclassTag="ArrayBufferView"
H.bC.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
W.de.$nativeSuperclassTag="EventTarget"
W.df.$nativeSuperclassTag="EventTarget"
W.di.$nativeSuperclassTag="EventTarget"
W.dj.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(L.na,[])
else L.na([])})})()
//# sourceMappingURL=main.dart.js.map
