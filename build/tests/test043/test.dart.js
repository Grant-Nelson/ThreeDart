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
a[c]=function(){a[c]=function(){H.p3(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.kE(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={kh:function kh(){},
ne:function(a,b,c,d){P.eu(b,"start")
if(c!=null){P.eu(c,"end")
if(b>c)H.p(P.ap(b,0,c,"start",null))}return new H.cN(a,b,c,d.w("cN<0>"))},
mR:function(a,b,c,d){if(t.W.b(a))return new H.cm(a,b,c.w("@<0>").bf(d).w("cm<1,2>"))
return new H.aL(a,b,c.w("@<0>").bf(d).w("aL<1,2>"))},
l2:function(){return new P.bz("No element")},
mL:function(){return new P.bz("Too many elements")},
mK:function(){return new P.bz("Too few elements")},
nd:function(a,b){var s=J.au(a)
if(typeof s!=="number")return s.a2()
H.eE(a,0,s-1,b)},
eE:function(a,b,c,d){if(c-b<=32)H.nc(a,b,c,d)
else H.nb(a,b,c,d)},
nc:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.aW(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a8()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
nb:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.a_(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.a_(a6+a7,2),d=e-h,c=e+h,b=J.aW(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.a8()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a8()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.a8()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a8()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.a8()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.a8()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.a8()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a8()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a8()
if(a4>0){s=a3
a3=a2
a2=s}b.l(a5,g,a)
b.l(a5,e,a1)
b.l(a5,f,a3)
b.l(a5,d,b.h(a5,a6))
b.l(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.H(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.ad()
if(n<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a8()
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
if(typeof j!=="number")return j.ad()
if(j<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.a8()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.a8()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.ad()
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
H.eE(a5,a6,r-2,a8)
H.eE(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.H(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.H(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.ad()
m=q-1
if(n<0){b.l(a5,p,b.h(a5,r))
l=r+1
b.l(a5,r,b.h(a5,q))
b.l(a5,q,o)
r=l}else{b.l(a5,p,b.h(a5,q))
b.l(a5,q,o)}q=m
break}}H.eE(a5,r,q,a8)}else H.eE(a5,r,q,a8)},
O:function O(a){this.a=a},
l:function l(){},
bP:function bP(){},
cN:function cN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bx:function bx(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aL:function aL(a,b,c){this.a=a
this.b=b
this.$ti=c},
cm:function cm(a,b,c){this.a=a
this.b=b
this.$ti=c},
cC:function cC(a,b){this.a=null
this.b=a
this.c=b},
cD:function cD(a,b,c){this.a=a
this.b=b
this.$ti=c},
aT:function aT(a,b,c){this.a=a
this.b=b
this.$ti=c},
ff:function ff(a,b){this.a=a
this.b=b},
cr:function cr(){},
f8:function f8(){},
c0:function c0(){},
m7:function(a){var s,r=H.m6(a)
if(r!=null)return r
s="minified:"+a
return s},
oU:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
e:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a9(a)
if(typeof s!="string")throw H.c(H.bc(a))
return s},
cJ:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
es:function(a){return H.mW(a)},
mW:function(a){var s,r,q
if(a instanceof P.K)return H.aj(H.aY(a),null)
if(J.dr(a)===C.R||t.ak.b(a)){s=C.q(a)
if(H.lk(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.lk(q))return q}}return H.aj(H.aY(a),null)},
lk:function(a){var s=a!=="Object"&&a!==""
return s},
lj:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
n5:function(a){var s,r,q,p=H.b([],t.dC)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(!H.c8(q))throw H.c(H.bc(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.bi(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.bc(q))}return H.lj(p)},
n4:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.c8(q))throw H.c(H.bc(q))
if(q<0)throw H.c(H.bc(q))
if(q>65535)return H.n5(a)}return H.lj(a)},
n3:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.bi(s,10))>>>0,56320|s&1023)}throw H.c(P.ap(a,0,1114111,null,null))},
bV:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
n2:function(a){var s=H.bV(a).getFullYear()+0
return s},
n0:function(a){var s=H.bV(a).getMonth()+1
return s},
mX:function(a){var s=H.bV(a).getDate()+0
return s},
mY:function(a){var s=H.bV(a).getHours()+0
return s},
n_:function(a){var s=H.bV(a).getMinutes()+0
return s},
n1:function(a){var s=H.bV(a).getSeconds()+0
return s},
mZ:function(a){var s=H.bV(a).getMilliseconds()+0
return s},
v:function(a){throw H.c(H.bc(a))},
f:function(a,b){if(a==null)J.au(a)
throw H.c(H.cc(a,b))},
cc:function(a,b){var s,r,q="index"
if(!H.c8(b))return new P.ae(!0,b,q,null)
s=J.au(a)
if(!(b<0)){if(typeof s!=="number")return H.v(s)
r=b>=s}else r=!0
if(r)return P.J(b,a,q,null,s)
return P.et(b,q)},
oH:function(a,b,c){if(a>c)return P.ap(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.ap(b,a,c,"end",null)
return new P.ae(!0,b,"end",null)},
bc:function(a){return new P.ae(!0,a,null,null)},
oE:function(a){if(typeof a!="number")throw H.c(H.bc(a))
return a},
c:function(a){var s,r
if(a==null)a=new P.eh()
s=new Error()
s.dartException=a
r=H.p4
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
p4:function(){return J.a9(this.dartException)},
p:function(a){throw H.c(a)},
o:function(a){throw H.c(P.bn(a))},
aR:function(a){var s,r,q,p,o,n
a=H.m3(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.j6(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
j7:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
lt:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
le:function(a,b){return new H.eg(a,b==null?null:b.method)},
ki:function(a,b){var s=b==null,r=s?null:b.method
return new H.e0(a,r,s?null:b.receiver)},
b_:function(a){if(a==null)return new H.iw(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bF(a,a.dartException)
return H.oA(a)},
bF:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
oA:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.bi(r,16)&8191)===10)switch(q){case 438:return H.bF(a,H.ki(H.e(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bF(a,H.le(H.e(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.ma()
o=$.mb()
n=$.mc()
m=$.md()
l=$.mg()
k=$.mh()
j=$.mf()
$.me()
i=$.mj()
h=$.mi()
g=p.am(s)
if(g!=null)return H.bF(a,H.ki(s,g))
else{g=o.am(s)
if(g!=null){g.method="call"
return H.bF(a,H.ki(s,g))}else{g=n.am(s)
if(g==null){g=m.am(s)
if(g==null){g=l.am(s)
if(g==null){g=k.am(s)
if(g==null){g=j.am(s)
if(g==null){g=m.am(s)
if(g==null){g=i.am(s)
if(g==null){g=h.am(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bF(a,H.le(s,g))}}return H.bF(a,new H.f7(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cL()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bF(a,new P.ae(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cL()
return a},
kF:function(a){var s
if(a==null)return new H.fV(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.fV(a)},
oJ:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
oT:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.q("Unsupported number of arguments for wrapped closure"))},
cb:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oT)
a.$identity=s
return s},
mD:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.iQ().constructor.prototype):Object.create(new H.cf(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aF
if(typeof r!=="number")return r.v()
$.aF=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.kU(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.mz(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kU(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
mz:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lZ,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.mx:H.mw
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
mA:function(a,b,c,d){var s=H.kT
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
kU:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.mC(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.mA(r,!p,s,b)
if(r===0){p=$.aF
if(typeof p!=="number")return p.v()
$.aF=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.e(H.k8())+";return "+n+"."+H.e(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aF
if(typeof p!=="number")return p.v()
$.aF=p+1
m+=p
return new Function("return function("+m+"){return this."+H.e(H.k8())+"."+H.e(s)+"("+m+");}")()},
mB:function(a,b,c,d){var s=H.kT,r=H.my
switch(b?-1:a){case 0:throw H.c(new H.eA("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
mC:function(a,b){var s,r,q,p,o,n,m=H.k8(),l=$.kR
if(l==null)l=$.kR=H.kQ("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.mB(r,!p,s,b)
if(r===1){p="return function(){return this."+H.e(m)+"."+H.e(s)+"(this."+l+");"
o=$.aF
if(typeof o!=="number")return o.v()
$.aF=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.e(m)+"."+H.e(s)+"(this."+l+", "+n+");"
o=$.aF
if(typeof o!=="number")return o.v()
$.aF=o+1
return new Function(p+o+"}")()},
kE:function(a,b,c,d,e,f,g){return H.mD(a,b,c,d,!!e,!!f,g)},
mw:function(a,b){return H.h8(v.typeUniverse,H.aY(a.a),b)},
mx:function(a,b){return H.h8(v.typeUniverse,H.aY(a.c),b)},
kT:function(a){return a.a},
my:function(a){return a.c},
k8:function(){var s=$.kS
return s==null?$.kS=H.kQ("self"):s},
kQ:function(a){var s,r,q,p=new H.cf("self","target","receiver","name"),o=J.kg(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.k7("Field name "+a+" not found."))},
p3:function(a){throw H.c(new P.dP(a))},
oN:function(a){return v.getIsolateTag(a)},
q7:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oW:function(a){var s,r,q,p,o,n=$.lY.$1(a),m=$.jT[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jY[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.lT.$2(a,n)
if(q!=null){m=$.jT[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jY[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.k2(s)
$.jT[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jY[n]=s
return s}if(p==="-"){o=H.k2(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.m1(a,s)
if(p==="*")throw H.c(P.kp(n))
if(v.leafTags[n]===true){o=H.k2(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.m1(a,s)},
m1:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.kI(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
k2:function(a){return J.kI(a,!1,null,!!a.$iy)},
oX:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.k2(s)
else return J.kI(s,c,null,null)},
oR:function(){if(!0===$.kG)return
$.kG=!0
H.oS()},
oS:function(){var s,r,q,p,o,n,m,l
$.jT=Object.create(null)
$.jY=Object.create(null)
H.oQ()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.m2.$1(o)
if(n!=null){m=H.oX(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
oQ:function(){var s,r,q,p,o,n,m=C.G()
m=H.ca(C.H,H.ca(C.I,H.ca(C.r,H.ca(C.r,H.ca(C.J,H.ca(C.K,H.ca(C.L(C.q),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.lY=new H.jV(p)
$.lT=new H.jW(o)
$.m2=new H.jX(n)},
ca:function(a,b){return a(b)||b},
mO:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.hT("Illegal RegExp pattern ("+String(n)+")",a))},
m4:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
oI:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
m3:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
m5:function(a,b,c){var s=H.p_(a,b,c)
return s},
p_:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.m3(b),'g'),H.oI(c))},
p0:function(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return H.p1(a,s,s+b.length,c)},
p1:function(a,b,c,d){var s=a.substring(0,b),r=a.substring(c)
return s+d+r},
j6:function j6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eg:function eg(a,b){this.a=a
this.b=b},
e0:function e0(a,b,c){this.a=a
this.b=b
this.c=c},
f7:function f7(a){this.a=a},
iw:function iw(a){this.a=a},
fV:function fV(a){this.a=a
this.b=null},
bJ:function bJ(){},
iU:function iU(){},
iQ:function iQ(){},
cf:function cf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eA:function eA(a){this.a=a},
B:function B(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
i0:function i0(a){this.a=a},
i2:function i2(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
am:function am(a,b){this.a=a
this.$ti=b},
e4:function e4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jV:function jV(a){this.a=a},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
hZ:function hZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iS:function iS(a,b){this.a=a
this.c=b},
kv:function kv(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
c7:function(a){return a},
aU:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cc(b,a))},
nP:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.oH(a,b,c))
return b},
cG:function cG(){},
bS:function bS(){},
b2:function b2(){},
aa:function aa(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
bT:function bT(){},
ef:function ef(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
d8:function d8(){},
n9:function(a,b){var s=b.c
return s==null?b.c=H.ky(a,b.z,!0):s},
ll:function(a,b){var s=b.c
return s==null?b.c=H.dj(a,"l0",[b.z]):s},
lm:function(a){var s=a.y
if(s===6||s===7||s===8)return H.lm(a.z)
return s===11||s===12},
n8:function(a){return a.cy},
lX:function(a){return H.kz(v.typeUniverse,a,!1)},
bb:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bb(a,s,a0,a1)
if(r===s)return b
return H.lJ(a,r,!0)
case 7:s=b.z
r=H.bb(a,s,a0,a1)
if(r===s)return b
return H.ky(a,r,!0)
case 8:s=b.z
r=H.bb(a,s,a0,a1)
if(r===s)return b
return H.lI(a,r,!0)
case 9:q=b.Q
p=H.dq(a,q,a0,a1)
if(p===q)return b
return H.dj(a,b.z,p)
case 10:o=b.z
n=H.bb(a,o,a0,a1)
m=b.Q
l=H.dq(a,m,a0,a1)
if(n===o&&l===m)return b
return H.kw(a,n,l)
case 11:k=b.z
j=H.bb(a,k,a0,a1)
i=b.Q
h=H.ox(a,i,a0,a1)
if(j===k&&h===i)return b
return H.lH(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dq(a,g,a0,a1)
o=b.z
n=H.bb(a,o,a0,a1)
if(f===g&&n===o)return b
return H.kx(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.ho("Attempted to substitute unexpected RTI kind "+c))}},
dq:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bb(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
oy:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bb(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
ox:function(a,b,c,d){var s,r=b.a,q=H.dq(a,r,c,d),p=b.b,o=H.dq(a,p,c,d),n=b.c,m=H.oy(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fx()
s.a=q
s.b=o
s.c=m
return s},
b:function(a,b){a[v.arrayRti]=b
return a},
oF:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.lZ(s)
return a.$S()}return null},
m_:function(a,b){var s
if(H.lm(b))if(a instanceof H.bJ){s=H.oF(a)
if(s!=null)return s}return H.aY(a)},
aY:function(a){var s
if(a instanceof P.K){s=a.$ti
return s!=null?s:H.kB(a)}if(Array.isArray(a))return H.lM(a)
return H.kB(J.dr(a))},
lM:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
bE:function(a){var s=a.$ti
return s!=null?s:H.kB(a)},
kB:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.nV(a,s)},
nV:function(a,b){var s=a instanceof H.bJ?a.__proto__.__proto__.constructor:b,r=H.nL(v.typeUniverse,s.name)
b.$ccache=r
return r},
lZ:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.kz(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
nU:function(a){var s,r,q=this,p=t.K
if(q===p)return H.dm(q,a,H.nZ)
if(!H.aZ(q))if(!(q===t.c))p=q===p
else p=!0
else p=!0
if(p)return H.dm(q,a,H.o1)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.c8
else if(s===t.gR||s===t.H)r=H.nY
else if(s===t.N)r=H.o_
else r=s===t.cJ?H.lP:null
if(r!=null)return H.dm(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.oV)){q.r="$i"+p
return H.dm(q,a,H.o0)}}else if(p===7)return H.dm(q,a,H.nS)
return H.dm(q,a,H.nQ)},
dm:function(a,b,c){a.b=c
return a.b(b)},
nT:function(a){var s,r,q=this
if(!H.aZ(q))if(!(q===t.c))s=q===t.K
else s=!0
else s=!0
if(s)r=H.nO
else if(q===t.K)r=H.nN
else r=H.nR
q.a=r
return q.a(a)},
oq:function(a){var s,r=a.y
if(!H.aZ(a))if(!(a===t.c))s=a===t.K
else s=!0
else s=!0
return s||a===t.F||r===7||a===t.P||a===t.T},
nQ:function(a){var s=this
if(a==null)return H.oq(s)
return H.V(v.typeUniverse,H.m_(a,s),null,s,null)},
nS:function(a){if(a==null)return!0
return this.z.b(a)},
o0:function(a){var s=this,r=s.r
if(a instanceof P.K)return!!a[r]
return!!J.dr(a)[r]},
q6:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.lN(a,s)},
nR:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.lN(a,s)},
lN:function(a,b){throw H.c(H.nB(H.lz(a,H.m_(a,b),H.aj(b,null))))},
lz:function(a,b,c){var s=P.hO(a),r=H.aj(b==null?H.aY(a):b,null)
return s+": type '"+H.e(r)+"' is not a subtype of type '"+H.e(c)+"'"},
nB:function(a){return new H.dh("TypeError: "+a)},
a6:function(a,b){return new H.dh("TypeError: "+H.lz(a,null,b))},
nZ:function(a){return a!=null},
nN:function(a){return a},
o1:function(a){return!0},
nO:function(a){return a},
lP:function(a){return!0===a||!1===a},
pT:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.a6(a,"bool"))},
pV:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a6(a,"bool"))},
pU:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a6(a,"bool?"))},
pW:function(a){if(typeof a=="number")return a
throw H.c(H.a6(a,"double"))},
pY:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a6(a,"double"))},
pX:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a6(a,"double?"))},
c8:function(a){return typeof a=="number"&&Math.floor(a)===a},
pZ:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.a6(a,"int"))},
q0:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a6(a,"int"))},
q_:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a6(a,"int?"))},
nY:function(a){return typeof a=="number"},
q1:function(a){if(typeof a=="number")return a
throw H.c(H.a6(a,"num"))},
q3:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a6(a,"num"))},
q2:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a6(a,"num?"))},
o_:function(a){return typeof a=="string"},
q4:function(a){if(typeof a=="string")return a
throw H.c(H.a6(a,"String"))},
kA:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a6(a,"String"))},
q5:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a6(a,"String?"))},
ot:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.b.v(r,H.aj(a[q],b))
return s},
lO:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=H.b([],t.s)
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.X,n=t.c,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.f(a6,i)
l=C.b.v(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.b.v(" extends ",H.aj(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.aj(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.b.v(a3,H.aj(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.b.v(a3,H.aj(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.kL(H.aj(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.e(a1)},
aj:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.aj(a.z,b)
return s}if(l===7){r=a.z
s=H.aj(r,b)
q=r.y
return J.kL(q===11||q===12?C.b.v("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.e(H.aj(a.z,b))+">"
if(l===9){p=H.oz(a.z)
o=a.Q
return o.length!==0?p+("<"+H.ot(o,b)+">"):p}if(l===11)return H.lO(a,b,null)
if(l===12)return H.lO(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.f(b,n)
return b[n]}return"?"},
oz:function(a){var s,r=H.m6(a)
if(r!=null)return r
s="minified:"+a
return s},
lK:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
nL:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.kz(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dk(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dj(a,b,q)
n[b]=o
return o}else return m},
nJ:function(a,b){return H.lL(a.tR,b)},
nI:function(a,b){return H.lL(a.eT,b)},
kz:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.lF(H.lD(a,null,b,c))
r.set(b,s)
return s},
h8:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.lF(H.lD(a,b,c,!0))
q.set(c,r)
return r},
nK:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.kw(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
ba:function(a,b){b.a=H.nT
b.b=H.nU
return b},
dk:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.aq(null,null)
s.y=b
s.cy=c
r=H.ba(a,s)
a.eC.set(c,r)
return r},
lJ:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.nG(a,b,r,c)
a.eC.set(r,s)
return s},
nG:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aZ(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.aq(null,null)
q.y=6
q.z=b
q.cy=c
return H.ba(a,q)},
ky:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.nF(a,b,r,c)
a.eC.set(r,s)
return s},
nF:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aZ(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.jZ(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.F)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.jZ(q.z))return q
else return H.n9(a,b)}}p=new H.aq(null,null)
p.y=7
p.z=b
p.cy=c
return H.ba(a,p)},
lI:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.nD(a,b,r,c)
a.eC.set(r,s)
return s},
nD:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aZ(b))if(!(b===t.c))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dj(a,"l0",[b])
else if(b===t.P||b===t.T)return t.eH}q=new H.aq(null,null)
q.y=8
q.z=b
q.cy=c
return H.ba(a,q)},
nH:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.aq(null,null)
s.y=13
s.z=b
s.cy=q
r=H.ba(a,s)
a.eC.set(q,r)
return r},
h7:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
nC:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dj:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.h7(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.aq(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.ba(a,r)
a.eC.set(p,q)
return q},
kw:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.h7(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aq(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.ba(a,o)
a.eC.set(q,n)
return n},
lH:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.h7(m)
if(j>0){s=l>0?",":""
r=H.h7(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.nC(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aq(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.ba(a,o)
a.eC.set(q,r)
return r},
kx:function(a,b,c,d){var s,r=b.cy+("<"+H.h7(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.nE(a,b,c,r,d)
a.eC.set(r,s)
return s},
nE:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bb(a,b,r,0)
m=H.dq(a,c,r,0)
return H.kx(a,n,m,c!==m)}}l=new H.aq(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.ba(a,l)},
lD:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
lF:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.nv(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.lE(a,r,g,f,!1)
else if(q===46)r=H.lE(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.b9(a.u,a.e,f.pop()))
break
case 94:f.push(H.nH(a.u,f.pop()))
break
case 35:f.push(H.dk(a.u,5,"#"))
break
case 64:f.push(H.dk(a.u,2,"@"))
break
case 126:f.push(H.dk(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.ku(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.dj(p,n,o))
else{m=H.b9(p,a.e,n)
switch(m.y){case 11:f.push(H.kx(p,m,o,a.n))
break
default:f.push(H.kw(p,m,o))
break}}break
case 38:H.nw(a,f)
break
case 42:l=a.u
f.push(H.lJ(l,H.b9(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.ky(l,H.b9(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.lI(l,H.b9(l,a.e,f.pop()),a.n))
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
H.ku(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.lH(p,H.b9(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.ku(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.ny(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.b9(a.u,a.e,h)},
nv:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
lE:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.lK(s,o.z)[p]
if(n==null)H.p('No "'+p+'" in "'+H.n8(o)+'"')
d.push(H.h8(s,o,n))}else d.push(p)
return m},
nw:function(a,b){var s=b.pop()
if(0===s){b.push(H.dk(a.u,1,"0&"))
return}if(1===s){b.push(H.dk(a.u,4,"1&"))
return}throw H.c(P.ho("Unexpected extended operation "+H.e(s)))},
b9:function(a,b,c){if(typeof c=="string")return H.dj(a,c,a.sEA)
else if(typeof c=="number")return H.nx(a,b,c)
else return c},
ku:function(a,b,c){var s,r=c.length
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
if(q!==9)throw H.c(P.ho("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.ho("Bad index "+c+" for "+b.i(0)))},
V:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aZ(d))if(!(d===t.c))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aZ(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.V(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.V(a,b.z,c,d,e)
if(p===6){s=d.z
return H.V(a,b,c,s,e)}if(r===8){if(!H.V(a,b.z,c,d,e))return!1
return H.V(a,H.ll(a,b),c,d,e)}if(r===7){s=H.V(a,b.z,c,d,e)
return s}if(p===8){if(H.V(a,b,c,d.z,e))return!0
return H.V(a,b,c,H.ll(a,d),e)}if(p===7){s=H.V(a,b,c,d.z,e)
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
if(!H.V(a,k,c,j,e)||!H.V(a,j,e,k,c))return!1}return H.lQ(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.lQ(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.nX(a,b,c,d,e)}return!1},
lQ:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.V(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.V(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.V(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.V(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.V(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
nX:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.V(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.lK(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.V(a,H.h8(a,b,l[p]),c,r[p],e))return!1
return!0},
jZ:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aZ(a))if(r!==7)if(!(r===6&&H.jZ(a.z)))s=r===8&&H.jZ(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
oV:function(a){var s
if(!H.aZ(a))if(!(a===t.c))s=a===t.K
else s=!0
else s=!0
return s},
aZ:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
lL:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
aq:function aq(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fx:function fx(){this.c=this.b=this.a=null},
fs:function fs(){},
dh:function dh(a){this.a=a},
m6:function(a){return v.mangledGlobalNames[a]},
oY:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kI:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hk:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.kG==null){H.oR()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.c(P.kp("Return interceptor for "+H.e(s(a,o))))}q=a.constructor
p=q==null?null:q[J.l5()]
if(p!=null)return p
p=H.oW(a)
if(p!=null)return p
if(typeof a=="function")return C.S
s=Object.getPrototypeOf(a)
if(s==null)return C.y
if(s===Object.prototype)return C.y
if(typeof q=="function"){Object.defineProperty(q,J.l5(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
l5:function(){var s=$.lB
return s==null?$.lB=v.getIsolateTag("_$dart_js"):s},
l3:function(a,b){if(!H.c8(a))throw H.c(P.kP(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ap(a,0,4294967295,"length",null))
return J.mM(new Array(a),b)},
l4:function(a,b){if(!H.c8(a)||a<0)throw H.c(P.k7("Length must be a non-negative integer: "+H.e(a)))
return H.b(new Array(a),b.w("t<0>"))},
mM:function(a,b){return J.kg(H.b(a,b.w("t<0>")))},
kg:function(a){a.fixed$length=Array
return a},
mN:function(a,b){return J.dw(a,b)},
dr:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cv.prototype
return J.cu.prototype}if(typeof a=="string")return J.aJ.prototype
if(a==null)return J.cw.prototype
if(typeof a=="boolean")return J.hY.prototype
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.K)return a
return J.hk(a)},
oK:function(a){if(typeof a=="number")return J.bu.prototype
if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.K)return a
return J.hk(a)},
aW:function(a){if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.K)return a
return J.hk(a)},
jU:function(a){if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.K)return a
return J.hk(a)},
oL:function(a){if(typeof a=="number")return J.bu.prototype
if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.bD.prototype
return a},
oM:function(a){if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.bD.prototype
return a},
aX:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.K)return a
return J.hk(a)},
kL:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.oK(a).v(a,b)},
H:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dr(a).n(a,b)},
dv:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.oU(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aW(a).h(a,b)},
mp:function(a,b,c){return J.aX(a).h_(a,b,c)},
mq:function(a,b,c,d){return J.aX(a).hk(a,b,c,d)},
dw:function(a,b){return J.oL(a).aW(a,b)},
k5:function(a,b){return J.aW(a).A(a,b)},
dx:function(a,b){return J.jU(a).B(a,b)},
mr:function(a,b){return J.jU(a).H(a,b)},
ms:function(a){return J.aX(a).ghp(a)},
k6:function(a){return J.aX(a).gdg(a)},
kM:function(a){return J.aX(a).gdi(a)},
a8:function(a){return J.dr(a).gR(a)},
bi:function(a){return J.jU(a).gL(a)},
au:function(a){return J.aW(a).gj(a)},
kN:function(a){return J.jU(a).i3(a)},
mt:function(a,b){return J.aX(a).i6(a,b)},
mu:function(a){return J.oM(a).ig(a)},
a9:function(a){return J.dr(a).i(a)},
a:function a(){},
hY:function hY(){},
cw:function cw(){},
bv:function bv(){},
em:function em(){},
bD:function bD(){},
ay:function ay(){},
t:function t(a){this.$ti=a},
i_:function i_(a){this.$ti=a},
a_:function a_(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bu:function bu(){},
cv:function cv(){},
cu:function cu(){},
aJ:function aJ(){}},P={
nl:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.oB()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cb(new P.ju(q),1)).observe(s,{childList:true})
return new P.jt(q,s,r)}else if(self.setImmediate!=null)return P.oC()
return P.oD()},
nm:function(a){self.scheduleImmediate(H.cb(new P.jv(a),0))},
nn:function(a){self.setImmediate(H.cb(new P.jw(a),0))},
no:function(a){P.kn(C.j,a)},
kn:function(a,b){var s=C.c.a_(a.a,1000)
return P.nz(s<0?0:s,b)},
ls:function(a,b){var s=C.c.a_(a.a,1000)
return P.nA(s<0?0:s,b)},
nz:function(a,b){var s=new P.dg()
s.es(a,b)
return s},
nA:function(a,b){var s=new P.dg()
s.eu(a,b)
return s},
pR:function(a){return new P.c5(a,1)},
nr:function(){return C.a0},
ns:function(a){return new P.c5(a,3)},
o3:function(a,b){return new P.dd(a,b.w("dd<0>"))},
op:function(){var s,r
for(s=$.c9;s!=null;s=$.c9){$.dp=null
r=s.b
$.c9=r
if(r==null)$.dn=null
s.a.$0()}},
ow:function(){$.kC=!0
try{P.op()}finally{$.dp=null
$.kC=!1
if($.c9!=null)$.kK().$1(P.lU())}},
ou:function(a){var s=new P.fg(a),r=$.dn
if(r==null){$.c9=$.dn=s
if(!$.kC)$.kK().$1(P.lU())}else $.dn=r.b=s},
ov:function(a){var s,r,q,p=$.c9
if(p==null){P.ou(a)
$.dp=$.dn
return}s=new P.fg(a)
r=$.dp
if(r==null){s.b=p
$.c9=$.dp=s}else{q=r.b
s.b=q
$.dp=r.b=s
if(q==null)$.dn=s}},
lr:function(a,b){var s=$.aE
if(s===C.e)return P.kn(a,b)
return P.kn(a,s.hq(b))},
ni:function(a,b){var s=$.aE
if(s===C.e)return P.ls(a,b)
return P.ls(a,s.de(b,t.aF))},
lR:function(a,b,c,d,e){P.ov(new P.jR(d,e))},
or:function(a,b,c,d){var s,r=$.aE
if(r===c)return d.$0()
$.aE=c
s=r
try{r=d.$0()
return r}finally{$.aE=s}},
os:function(a,b,c,d,e){var s,r=$.aE
if(r===c)return d.$1(e)
$.aE=c
s=r
try{r=d.$1(e)
return r}finally{$.aE=s}},
ju:function ju(a){this.a=a},
jt:function jt(a,b,c){this.a=a
this.b=b
this.c=c},
jv:function jv(a){this.a=a},
jw:function jw(a){this.a=a},
dg:function dg(){this.c=0},
jJ:function jJ(a,b){this.a=a
this.b=b},
jI:function jI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c5:function c5(a,b){this.a=a
this.b=b},
c6:function c6(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dd:function dd(a,b){this.a=a
this.$ti=b},
fg:function fg(a){this.a=a
this.b=null},
cM:function cM(){},
eM:function eM(){},
cP:function cP(){},
jM:function jM(){},
jR:function jR(a,b){this.a=a
this.b=b},
jB:function jB(){},
jC:function jC(a,b){this.a=a
this.b=b},
jD:function jD(a,b,c){this.a=a
this.b=b
this.c=c},
mQ:function(a,b,c){return H.oJ(a,new H.B(b.w("@<0>").bf(c).w("B<1,2>")))},
l6:function(a,b){return new H.B(a.w("@<0>").bf(b).w("B<1,2>"))},
cy:function(a){return new P.d1(a.w("d1<0>"))},
kt:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
nu:function(a,b){var s=new P.d2(a,b)
s.c=a.e
return s},
mJ:function(a,b,c){var s,r
if(P.kD(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.b([],t.s)
$.ad.push(a)
try{P.o2(a,s)}finally{if(0>=$.ad.length)return H.f($.ad,-1)
$.ad.pop()}r=P.ln(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
kf:function(a,b,c){var s,r
if(P.kD(a))return b+"..."+c
s=new P.bA(b)
$.ad.push(a)
try{r=s
r.a=P.ln(r.a,a,", ")}finally{if(0>=$.ad.length)return H.f($.ad,-1)
$.ad.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
kD:function(a){var s,r
for(s=$.ad.length,r=0;r<s;++r)if(a===$.ad[r])return!0
return!1},
o2:function(a,b){var s,r,q,p,o,n,m,l=a.gL(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.q())return
s=H.e(l.gE(l))
b.push(s)
k+=s.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return H.f(b,-1)
r=b.pop()
if(0>=b.length)return H.f(b,-1)
q=b.pop()}else{p=l.gE(l);++j
if(!l.q()){if(j<=4){b.push(H.e(p))
return}r=H.e(p)
if(0>=b.length)return H.f(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gE(l);++j
for(;l.q();p=o,o=n){n=l.gE(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.f(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.e(p)
r=H.e(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
l7:function(a,b){var s,r,q=P.cy(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)q.k(0,b.a(a[r]))
return q},
l8:function(a){var s,r={}
if(P.kD(a))return"{...}"
s=new P.bA("")
try{$.ad.push(a)
s.a+="{"
r.a=!0
J.mr(a,new P.i6(r,s))
s.a+="}"}finally{if(0>=$.ad.length)return H.f($.ad,-1)
$.ad.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
d1:function d1(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jA:function jA(a){this.a=a
this.c=this.b=null},
d2:function d2(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ct:function ct(){},
cz:function cz(){},
i:function i(){},
cB:function cB(){},
i6:function i6(a,b){this.a=a
this.b=b},
U:function U(){},
d9:function d9(){},
d3:function d3(){},
dK:function dK(){},
dO:function dO(){},
hL:function hL(){},
jf:function jf(){},
jg:function jg(){},
jK:function jK(a){this.b=0
this.c=a},
mI:function(a){if(a instanceof H.bJ)return a.i(0)
return"Instance of '"+H.e(H.es(a))+"'"},
i3:function(a,b,c,d){var s,r=c?J.l4(a,d):J.l3(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
kj:function(a,b,c){var s,r=H.b([],c.w("t<0>"))
for(s=J.bi(a);s.q();)r.push(s.gE(s))
if(b)return r
return J.kg(r)},
km:function(a){var s,r=a,q=r.length,p=P.iy(0,null,q)
if(typeof p!=="number")return p.ad()
s=p<q
return H.n4(s?r.slice(0,p):r)},
n6:function(a){return new H.hZ(a,H.mO(a,!1,!0,!1,!1,!1))},
ln:function(a,b,c){var s=J.bi(b)
if(!s.q())return a
if(c.length===0){do a+=H.e(s.gE(s))
while(s.q())}else{a+=H.e(s.gE(s))
for(;s.q();)a=a+c+H.e(s.gE(s))}return a},
nM:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.t){s=$.mo().b
s=s.test(b)}else s=!1
if(s)return b
r=C.N.hu(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.f(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.n3(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
mF:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
mG:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dQ:function(a){if(a>=10)return""+a
return"0"+a},
kX:function(a){return new P.bp(1000*a)},
hO:function(a){if(typeof a=="number"||H.lP(a)||null==a)return J.a9(a)
if(typeof a=="string")return JSON.stringify(a)
return P.mI(a)},
ho:function(a){return new P.dA(a)},
k7:function(a){return new P.ae(!1,null,null,a)},
kP:function(a,b,c){return new P.ae(!0,a,b,c)},
mv:function(a,b){if(a==null)throw H.c(new P.ae(!1,null,b,"Must not be null"))
return a},
et:function(a,b){return new P.bW(null,null,!0,a,b,"Value not in range")},
ap:function(a,b,c,d,e){return new P.bW(b,c,!0,a,d,"Invalid value")},
iy:function(a,b,c){var s
if(0<=a){if(typeof c!=="number")return H.v(c)
s=a>c}else s=!0
if(s)throw H.c(P.ap(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.v(c)
s=b>c}else s=!0
if(s)throw H.c(P.ap(b,a,c,"end",null))
return b}return c},
eu:function(a,b){if(a<0)throw H.c(P.ap(a,0,null,b,null))
return a},
J:function(a,b,c,d,e){var s=e==null?J.au(b):e
return new P.dZ(s,!0,a,c,"Index out of range")},
z:function(a){return new P.f9(a)},
kp:function(a){return new P.f6(a)},
iP:function(a){return new P.bz(a)},
bn:function(a){return new P.dN(a)},
q:function(a){return new P.fu(a)},
kJ:function(a){H.oY(a)},
aV:function aV(){},
al:function al(a,b){this.a=a
this.b=b},
W:function W(){},
bp:function bp(a){this.a=a},
hH:function hH(){},
hI:function hI(){},
M:function M(){},
dA:function dA(a){this.a=a},
eh:function eh(){},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bW:function bW(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dZ:function dZ(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
f9:function f9(a){this.a=a},
f6:function f6(a){this.a=a},
bz:function bz(a){this.a=a},
dN:function dN(a){this.a=a},
ek:function ek(){},
cL:function cL(){},
dP:function dP(a){this.a=a},
fu:function fu(a){this.a=a},
hT:function hT(a,b){this.a=a
this.b=b},
hV:function hV(){},
k:function k(){},
h:function h(){},
e_:function e_(){},
n:function n(){},
N:function N(){},
ao:function ao(){},
P:function P(){},
K:function K(){},
kk:function kk(){},
x:function x(){},
bA:function bA(a){this.a=a},
lW:function(a){var s
if(t.u.b(a)){s=J.kM(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.di(a.data,a.height,a.width)},
lV:function(a){if(a instanceof P.di)return{data:a.a,height:a.b,width:a.c}
return a},
bd:function(a){var s,r,q,p,o
if(a==null)return null
s=P.l6(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
s.l(0,o,a[o])}return s},
oG:function(a){var s={}
a.H(0,new P.jS(s))
return s},
di:function di(a,b,c){this.a=a
this.b=b
this.c=c},
jS:function jS(a){this.a=a},
dW:function dW(a,b){this.a=a
this.b=b},
hR:function hR(){},
hS:function hS(){},
jz:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nt:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
fO:function fO(){},
a4:function a4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aK:function aK(){},
e2:function e2(){},
aO:function aO(){},
ei:function ei(){},
ix:function ix(){},
bY:function bY(){},
eN:function eN(){},
m:function m(){},
aQ:function aQ(){},
eZ:function eZ(){},
fC:function fC(){},
fD:function fD(){},
fK:function fK(){},
fL:function fL(){},
fX:function fX(){},
fY:function fY(){},
h5:function h5(){},
h6:function h6(){},
hq:function hq(){},
dC:function dC(){},
hr:function hr(a){this.a=a},
dD:function dD(){},
b0:function b0(){},
ej:function ej(){},
fi:function fi(){},
ey:function ey(){},
eJ:function eJ(){},
fT:function fT(){},
fU:function fU(){}},W={
kO:function(){var s=document.createElement("a")
return s},
hw:function(){var s=document.createElement("canvas")
return s},
mH:function(a,b,c){var s,r=document.body
r.toString
s=C.n.ak(r,a,b,c)
s.toString
r=new H.aT(new W.Z(s),new W.hJ(),t.ac.w("aT<i.E>"))
return t.h.a(r.gaM(r))},
hK:function(a){return"wheel"},
cn:function(a){var s,r,q="element tag unavailable"
try{s=J.aX(a)
if(typeof s.gdU(a)=="string")q=s.gdU(a)}catch(r){H.b_(r)}return q},
jy:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lC:function(a,b,c,d){var s=W.jy(W.jy(W.jy(W.jy(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
X:function(a,b,c,d){var s=W.lS(new W.jx(c),t.G)
if(s!=null&&!0)J.mq(a,b,s,!1)
return new W.ft(a,b,s,!1)},
lA:function(a){var s=W.kO(),r=window.location
s=new W.c4(new W.jE(s,r))
s.ef(a)
return s},
np:function(a,b,c,d){return!0},
nq:function(a,b,c,d){var s,r=d.a,q=r.a
q.href=c
s=q.hostname
r=r.b
if(!(s==r.hostname&&q.port==r.port&&q.protocol==r.protocol))if(s==="")if(q.port===""){r=q.protocol
r=r===":"||r===""}else r=!1
else r=!1
else r=!0
return r},
lG:function(){var s=t.N,r=P.l7(C.w,s),q=H.b(["TEMPLATE"],t.s)
s=new W.h0(r,P.cy(s),P.cy(s),P.cy(s),null)
s.eq(null,new H.cD(C.w,new W.jH(),t.eM),q,null)
return s},
lS:function(a,b){var s=$.aE
if(s===C.e)return a
return s.de(a,b)},
r:function r(){},
hm:function hm(){},
dy:function dy(){},
dz:function dz(){},
bH:function bH(){},
dG:function dG(){},
bj:function bj(){},
bl:function bl(){},
bm:function bm(){},
dJ:function dJ(){},
av:function av(){},
hA:function hA(){},
G:function G(){},
cj:function cj(){},
hB:function hB(){},
ak:function ak(){},
aG:function aG(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(){},
hF:function hF(){},
ck:function ck(){},
cl:function cl(){},
dS:function dS(){},
hG:function hG(){},
fj:function fj(a,b){this.a=a
this.b=b},
C:function C(){},
hJ:function hJ(){},
j:function j(){},
d:function d(){},
aw:function aw(){},
dU:function dU(){},
dV:function dV(){},
dX:function dX(){},
ax:function ax(){},
hW:function hW(){},
bs:function bs(){},
bt:function bt(){},
bN:function bN(){},
bw:function bw(){},
i4:function i4(){},
iq:function iq(){},
e7:function e7(){},
ir:function ir(a){this.a=a},
e8:function e8(){},
is:function is(a){this.a=a},
az:function az(){},
e9:function e9(){},
ag:function ag(){},
Z:function Z(a){this.a=a},
w:function w(){},
cH:function cH(){},
aA:function aA(){},
en:function en(){},
ez:function ez(){},
iD:function iD(a){this.a=a},
eB:function eB(){},
ar:function ar(){},
eF:function eF(){},
aB:function aB(){},
eG:function eG(){},
aC:function aC(){},
eL:function eL(){},
iR:function iR(a){this.a=a},
ai:function ai(){},
b6:function b6(){},
cO:function cO(){},
eO:function eO(){},
eP:function eP(){},
bZ:function bZ(){},
as:function as(){},
ac:function ac(){},
eR:function eR(){},
eS:function eS(){},
j2:function j2(){},
aD:function aD(){},
bC:function bC(){},
eY:function eY(){},
j5:function j5(){},
aS:function aS(){},
je:function je(){},
fd:function fd(){},
b8:function b8(){},
c2:function c2(){},
c3:function c3(){},
fk:function fk(){},
d0:function d0(){},
fy:function fy(){},
d4:function d4(){},
fS:function fS(){},
fZ:function fZ(){},
fh:function fh(){},
fq:function fq(a){this.a=a},
kd:function kd(a,b){this.a=a
this.$ti=b},
ft:function ft(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jx:function jx(a){this.a=a},
ks:function ks(a){this.$ti=a},
c4:function c4(a){this.a=a},
I:function I(){},
cI:function cI(a){this.a=a},
iv:function iv(a){this.a=a},
iu:function iu(a,b,c){this.a=a
this.b=b
this.c=c},
da:function da(){},
jF:function jF(){},
jG:function jG(){},
h0:function h0(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jH:function jH(){},
h_:function h_(){},
cs:function cs(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
ah:function ah(){},
jE:function jE(a,b){this.a=a
this.b=b},
h9:function h9(a){this.a=a
this.b=!1},
jL:function jL(a){this.a=a},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fv:function fv(){},
fw:function fw(){},
fA:function fA(){},
fB:function fB(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(){},
fM:function fM(){},
fN:function fN(){},
fP:function fP(){},
db:function db(){},
dc:function dc(){},
fQ:function fQ(){},
fR:function fR(){},
fW:function fW(){},
h1:function h1(){},
h2:function h2(){},
de:function de(){},
df:function df(){},
h3:function h3(){},
h4:function h4(){},
ha:function ha(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(){},
he:function he(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
hj:function hj(){}},K={
a3:function(a){var s=new K.iE()
s.ec(a)
return s},
hn:function hn(){},
dY:function dY(){},
i7:function i7(){},
b3:function b3(){this.a=null},
iE:function iE(){this.a=null}},L={eK:function eK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},eW:function eW(a,b,c){this.a=a
this.b=b
this.c=c},eX:function eX(a){this.b=a
this.c=null},j3:function j3(){var _=this
_.d=_.c=_.b=_.a=null},f_:function f_(a){this.b=a
this.a=this.c=null}},O={
hy:function(a){var s=new O.Q(a.w("Q<0>"))
s.bc(a)
return s},
Q:function Q(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cF:function cF(){this.b=this.a=null},
e5:function e5(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ig:function ig(a,b){this.a=a
this.b=b},
ih:function ih(){},
ii:function ii(a,b){this.a=a
this.b=b},
ij:function ij(){},
ik:function ik(a,b){this.a=a
this.b=b},
il:function il(){},
im:function im(a,b){this.a=a
this.b=b},
io:function io(){},
i9:function i9(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cE:function cE(){},
ia:function ia(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aM:function aM(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ic:function ic(){var _=this
_.e=_.d=_.c=_.b=null},
id:function id(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ie:function ie(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eD:function eD(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iN:function iN(){this.c=this.b=this.a=null},
eQ:function eQ(){},
eU:function eU(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bB:function bB(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
co:function(a){var s,r=new E.bq()
r.a=""
r.b=!0
s=O.hy(t.l)
r.y=s
s.aL(r.ghM(),r.ghP())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.scB(0,a)
r.saK(null)
r.scm(null)
return r},
lx:function(){if(J.k5(window.navigator.vendor,"Google"))return C.D
if(J.k5(window.navigator.userAgent,"Firefox"))return C.o
var s=window.navigator.appVersion
if(J.aW(s).A(s,"Trident")||C.b.A(s,"Edge"))return C.p
if(J.k5(window.navigator.appName,"Microsoft"))return C.p
return C.E},
ly:function(){var s=window.navigator.appVersion
if(J.aW(s).A(s,"Win"))return C.Y
if(C.b.A(s,"Mac"))return C.x
if(C.b.A(s,"Linux"))return C.Z
return C.a_},
n7:function(a,b){var s=new E.iz(a)
s.eb(a,b)
return s},
nh:function(a,b,c,d,e){var s,r
if(t.fr.b(a))return E.lq(a,!0,!0,!0,!1)
s=W.hw()
r=s.style
r.width="100%"
r.height="100%"
J.k6(a).k(0,s)
return E.lq(s,!0,!0,!0,!1)},
lq:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.eV(),n=t.z,m=C.f.cu(a,"webgl2",P.mQ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.p(P.q("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.n7(m,a)
n=new T.iZ(m)
m.getParameter(3379)
n.c=m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.fa(a)
s=new X.i1()
s.c=new X.af(!1,!1,!1)
s.d=P.cy(t.e)
n.b=s
s=new X.it(n)
s.f=0
s.r=V.b4()
s.x=V.b4()
s.ch=s.Q=1
n.c=s
s=new X.i5(n)
s.r=0
s.x=V.b4()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.j4(n)
s.f=V.b4()
s.r=V.b4()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=H.b([],t.eG)
s=$.hM
n.Q=(s==null?$.hM=new E.fr(E.lx(),E.ly()):s).a===C.o?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.X(q,"contextmenu",n.gfd(),!1))
n.z.push(W.X(a,"focus",n.gfn(),!1))
n.z.push(W.X(a,"blur",n.gf7(),!1))
n.z.push(W.X(q,"keyup",n.gfs(),!1))
n.z.push(W.X(q,"keydown",n.gfp(),!1))
n.z.push(W.X(a,"mousedown",n.gfw(),!1))
n.z.push(W.X(a,"mouseup",n.gfC(),!1))
n.z.push(W.X(a,p,n.gfA(),!1))
r=n.z
W.hK(a)
W.hK(a)
r.push(W.X(a,W.hK(a),n.gfE(),!1))
n.z.push(W.X(q,p,n.gff(),!1))
n.z.push(W.X(q,"mouseup",n.gfh(),!1))
n.z.push(W.X(q,"pointerlockchange",n.gfG(),!1))
n.z.push(W.X(a,"touchstart",n.gfW(),!1))
n.z.push(W.X(a,"touchend",n.gfS(),!1))
n.z.push(W.X(a,"touchmove",n.gfU(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.al(Date.now(),!1)
o.db=0
o.d1()
return o},
ht:function ht(){},
bq:function bq(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bI:function bI(a){this.b=a},
bU:function bU(a){this.b=a},
fr:function fr(a,b){this.a=a
this.b=b},
iz:function iz(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
iA:function iA(a){this.a=a},
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
eV:function eV(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
j1:function j1(a){this.a=a}},Z={
kr:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.c7(c)),35044)
a.bindBuffer(b,null)
return new Z.fe(b,s)},
at:function(a){return new Z.b7(a)},
fe:function fe(a,b){this.a=a
this.b=b},
dH:function dH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
c1:function c1(a){this.a=a},
bk:function bk(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bO:function bO(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(a){this.a=a}},D={
D:function(){var s=new D.br()
s.d=0
return s},
hx:function hx(){},
br:function br(){var _=this
_.d=_.c=_.b=_.a=null},
hP:function hP(a){this.a=a},
hQ:function hQ(a){this.a=a},
R:function R(){this.b=null},
aH:function aH(){this.b=null},
aI:function aI(){this.b=null},
u:function u(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
kW:function(a,b){var s,r,q=new D.bo()
q.c=new V.L(1,1,1)
q.a=V.nk()
q.d=V.kq()
q.e=V.nj()
s=q.b
q.b=b
b.gm().k(0,q.geg())
r=new D.u("mover",s,q.b)
r.b=!0
q.aB(r)
if(!q.c.n(0,a)){s=q.c
q.c=a
r=new D.u("color",s,a)
r.b=!0
q.aB(r)}return q},
dE:function dE(){},
bo:function bo(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
T:function T(){},
cx:function cx(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
ep:function ep(){},
eH:function eH(){}},X={dI:function dI(a,b){this.a=a
this.b=b},e1:function e1(a,b){this.a=a
this.b=b},i1:function i1(){var _=this
_.d=_.c=_.b=_.a=null},cA:function cA(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},i5:function i5(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},af:function af(a,b,c){this.a=a
this.b=b
this.c=c},bQ:function bQ(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},it:function it(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bR:function bR(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},eq:function eq(){},cQ:function cQ(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},j4:function j4(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},fa:function fa(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ke:function(a,b){var s=new X.hU(),r=new V.a0(0,0,0,1)
s.a=r
s.b=a
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=V.ex()
s.r=r
return s},
lf:function(a){var s,r,q=new X.el()
q.c=1.0471975511965976
q.d=0.1
q.e=2000
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gm().k(0,q.gev())
r=new D.u("mover",s,q.b)
r.b=!0
q.Z(r)}r=q.c
$.A().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
r=new D.u("fov",r,1.0471975511965976)
r.b=!0
q.Z(r)}r=q.d
$.A().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
r=new D.u("near",r,0.1)
r.b=!0
q.Z(r)}r=q.e
$.A().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
r=new D.u("far",r,2000)
r.b=!0
q.Z(r)}return q},
hs:function hs(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
k9:function k9(){},
hU:function hU(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hX:function hX(){this.b=this.a=null},
el:function el(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
iT:function iT(){}},V={
mE:function(a,b,c){var s,r,q,p,o,n,m,l
a*=6
s=C.d.aX(a)
r=a-s
q=b*(1-c)
p=b*(1-c*r)
o=b*(1-c*(1-r))
switch(s){case 0:n=b>1?1:b
if(o<0)m=0
else m=o>1?1:o
if(q<0)l=0
else l=q>1?1:q
return new V.L(n,m,l)
case 1:if(p<0)n=0
else n=p>1?1:p
m=b>1?1:b
if(q<0)l=0
else l=q>1?1:q
return new V.L(n,m,l)
case 2:if(q<0)n=0
else n=q>1?1:q
m=b>1?1:b
if(o<0)l=0
else l=o>1?1:o
return new V.L(n,m,l)
case 3:if(q<0)n=0
else n=q>1?1:q
if(p<0)m=0
else m=p>1?1:p
l=b>1?1:b
return new V.L(n,m,l)
case 4:if(o<0)n=0
else n=o>1?1:o
if(q<0)m=0
else m=q>1?1:q
l=b>1?1:b
return new V.L(n,m,l)
default:n=b>1?1:b
if(q<0)m=0
else m=q>1?1:q
if(p<0)l=0
else l=p>1?1:p
return new V.L(n,m,l)}},
dL:function(a,b,c,d){var s=a/255,r=b/255,q=c/255,p=d/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
if(p<0)p=0
else if(p>1)p=1
return new V.a0(s,r,q,p)},
kH:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
k4:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bz(a-b,s)
return(a<0?a+s:a)+b},
F:function(a,b,c){if(a==null)return C.b.an("null",c)
$.A().toString
return C.b.an(C.d.dW(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cd:function(a,b,c){var s,r,q,p,o,n,m=H.b([],t.i)
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.o)(a),++q){p=V.F(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.f(m,o)
s=C.b.an(m[o],r)
n=m.length
if(o>=n)return H.f(m,o)
m[o]=s}return m},
ds:function(a){return C.d.ic(Math.pow(2,C.k.aX(Math.log(H.oE(a))/Math.log(2))))},
by:function(){var s=$.ip
return s==null?$.ip=V.aN(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aN:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.an(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mV:function(a,b,c){return V.aN(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
mU:function(a,b,c){return V.aN(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
la:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aN(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
lb:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aN(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
lc:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aN(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)},
ld:function(a,b,c,d){d=V.kq()
return V.l9(V.li(),d,new V.E(a,b,c))},
l9:function(a,b,c){var s=c.J(),r=b.b6(s).J(),q=s.b6(r),p=new V.E(a.a,a.b,a.c),o=r.N(0).a1(p),n=q.N(0).a1(p),m=s.N(0).a1(p)
return V.aN(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
b4:function(){var s=$.lh
return s==null?$.lh=new V.ab(0,0):s},
li:function(){var s=$.aP
return s==null?$.aP=new V.Y(0,0,0):s},
ex:function(){var s=$.cK
return s==null?$.cK=V.ew(0,0,1,1):s},
ew:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ev(a,b,c,d)},
fb:function(){var s=$.lw
return s==null?$.lw=new V.E(0,0,0):s},
nj:function(){var s=$.jh
return s==null?$.jh=new V.E(-1,0,0):s},
kq:function(){var s=$.ji
return s==null?$.ji=new V.E(0,1,0):s},
nk:function(){var s=$.jj
return s==null?$.jj=new V.E(0,0,1):s},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
a0:function a0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hN:function hN(){},
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
an:function an(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
b5:function b5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ev:function ev(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a5:function a5(a,b){this.a=a
this.b=b},
E:function E(a,b,c){this.a=a
this.b=b
this.c=c},
oZ:function(a){P.ni(C.Q,new V.k3(a))},
na:function(a){var s=new V.iJ()
s.ed(a,!0)
return s},
hu:function hu(a){this.a=a
this.c=this.b=null},
hv:function hv(a){this.a=a},
k3:function k3(a){this.a=a},
iJ:function iJ(){this.b=this.a=null},
iL:function iL(a){this.a=a},
iK:function iK(a){this.a=a}},U={
ka:function(){var s=new U.hz()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
kb:function(a){var s=new U.bL()
s.a=a
return s},
l1:function(){var s=new U.bM()
s.bc(t.ah)
s.aL(s.gei(),s.gfK())
s.e=null
s.f=V.by()
s.r=0
return s},
hz:function hz(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bL:function bL(){this.b=this.a=null},
bM:function bM(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
S:function S(){},
bX:function bX(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cY:function cY(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
cZ:function cZ(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d_:function d_(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
kV:function(){var s,r,q,p,o,n,m,l,k,j=null,i=new M.ci()
i.a=!0
s=E.co(j)
r=F.kl()
q=r.a
p=new V.E(-1,-1,1).J()
o=q.bk(new V.b5(1,2,4,6),V.dL(255,0,0,255),new V.Y(-1,-1,0),new V.ab(0,1),p,j)
p=r.a
q=new V.E(1,-1,1).J()
n=p.bk(new V.b5(0,3,4,6),V.dL(0,0,255,255),new V.Y(1,-1,0),new V.ab(1,1),q,j)
q=r.a
p=new V.E(1,1,1).J()
m=q.bk(new V.b5(0,2,5,6),V.dL(0,128,0,255),new V.Y(1,1,0),new V.ab(1,0),p,j)
p=r.a
q=V.b4()
l=new V.E(-1,1,1).J()
k=p.bk(new V.b5(0,2,4,7),V.dL(255,255,0,255),new V.Y(-1,1,0),q,l,j)
r.d.hl(H.b([o,n,m,k],t.j))
r.aG()
s.scB(0,r)
i.e=s
i.saT(j)
i.saJ(0,j)
i.saK(j)
return i},
l_:function(){var s,r,q=new M.cp()
q.a=!0
s=O.hy(t.l)
q.e=s
s.aL(q.gf9(),q.gfb())
q.y=q.x=q.r=q.f=null
r=X.ke(!0,null)
q.saT(null)
q.saJ(0,r)
return q},
ch:function ch(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ci:function ci(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cp:function cp(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a2:function a2(){}},A={
mS:function(a,b){var s=a.aH,r=new A.i8(b,s)
r.bd(b,s)
r.ea(a,b)
return r},
mT:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="MaterialLight_"+a5.gat(a5)+a6.gat(a6)+a7.gat(a7)+a8.gat(a8)+a9.gat(a9)+b0.gat(b0)+b1.gat(b1)+b2.gat(b2)+b3.gat(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.o)(b4),++r)a+="_"+H.e(b4[r].a)}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.o)(b5),++r)a+="_"+H.e(b5[r].a)}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.o)(b6),++r)a+="_"+H.e(b6[r].a)}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.o)(b7),++r)a+="_"+H.e(b7[r].a)}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
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
b=$.a7()
if(h){s=$.bg()
b=new Z.b7(b.a|s.a)}if(g){s=$.bf()
b=new Z.b7(b.a|s.a)}if(f){s=$.bh()
b=new Z.b7(b.a|s.a)}if(e){s=$.be()
b=new Z.b7(b.a|s.a)}return new A.ib(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,!1,f,e,!1,a1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
jP:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
jQ:function(a,b,c){var s,r="Txt, txtCube).rgb;\n"
A.jP(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hl(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.c){s+="   "+c+"Color = "+c+"Clr*textureCube("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.c){s+="   "+c+"Color = textureCube("+c+r
a.a=s}a.a=s+"}\n"},
o8:function(a,b){var s,r=a.a,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jP(b,r,"emission")
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
o4:function(a,b){var s,r=a.b
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.jQ(b,r,"ambient")
b.a+="\n"},
o6:function(a,b){var s,r=a.c
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.jQ(b,r,"diffuse")
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
o9:function(a,b){var s,r=a.d
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.jQ(b,r,"invDiffuse")
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
of:function(a,b){var s,r=a.e
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.jQ(b,r,"specular")
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
ob:function(a,b){var s,r,q
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
od:function(a,b){var s,r=a.r,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jP(b,r,"reflect")
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
oe:function(a,b){var s,r=a.x,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jP(b,r,"refract")
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
o5:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.e(s)
q=A.hl(r)
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
if(typeof s!=="number")return s.aq()
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
s=c.a+="   return "+C.a.p(o," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit)\n"
c.a=s
c.a=s+"{\n"
o=H.b([],p)
s=a.b
if(!s.a)s=s.c
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
s=c.a+="      highLight = intensity*("+C.a.p(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.p(o," + ")+");\n"
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
o7:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+H.e(s)
q=A.hl(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.aq()
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
if(!l.a)l=l.c
else l=!0
if(l)m.push("ambientColor")
if(a.dx){c.a+=u.k
k=H.b([],p)
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
c.a+="      highLight = intensity*("+C.a.p(k," + ")+");\n"}else c.a+="   highLight = "+C.a.p(k," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.a.p(m," + ")+");\n"
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
oc:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.e(s)
q=A.hl(r)
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
if(typeof s!=="number")return s.aq()
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
m=c.a+="   return "+C.a.p(j," * ")+";\n"
m+="}\n"
c.a=m
m+="\n"
c.a=m
m+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+k+")\n"
c.a=m
c.a=m+"{\n"
j=H.b([],p)
m=a.b
if(!m.a)m=m.c
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
p=c.a+="      highLight = intensity*("+C.a.p(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.a.p(j," + ")+");\n"
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
og:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.e(s)
q=A.hl(r)
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
if(typeof s!=="number")return s.aq()
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
if(m){s=$.hM
if(s==null)s=$.hM=new E.fr(E.lx(),E.ly())
p=c.a
if(s.b===C.x){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
p=c.a+="   return "+C.a.p(h," * ")+";\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+i+")\n"
c.a=p
c.a=p+"{\n"
h=H.b([],s)
p=a.b
if(!p.a)p=p.c
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
s=c.a+="      highLight = intensity*("+C.a.p(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.p(h," + ")+");\n"
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
oa:function(a,b){var s,r
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
s=b.a+="   return "+C.a.p(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
oh:function(a){var s,r,q,p,o,n,m,l,k,j="   lightAccum += all",i="precision mediump float;\n\n",h="precision mediump float;\n\nvarying vec3 normalVec;\n",g=new P.bA("")
g.a="precision mediump float;\n"
g.a=i
s=a.k4
if(s){g.a=h
r=h}else r=i
if(a.r1){r+="varying vec3 binormalVec;\n"
g.a=r}if(a.r2){r+="varying vec2 txt2D;\n"
g.a=r}if(a.rx){r+="varying vec3 txtCube;\n"
g.a=r}if(a.k2){r+="varying vec3 objPos;\n"
g.a=r}r=g.a=(a.k3?g.a=r+"varying vec3 viewPos;\n":r)+"\n"
q=a.y1
if(q){r+="uniform mat4 colorMat;\n"
g.a=r}if(a.go){r+="uniform mat4 viewMat;\n"
g.a=r}if(a.dy)r=g.a=r+"uniform mat4 invViewMat;\n"
g.a=r+"\n"
A.o8(a,g)
A.o4(a,g)
A.o6(a,g)
A.o9(a,g)
A.of(a,g)
r=a.db
if(r){p=g.a+="// === Environmental ===\n"
p+="\n"
g.a=p
p+="uniform samplerCube envSampler;\n"
g.a=p
g.a=p+"\n"
A.od(a,g)
A.oe(a,g)}A.ob(a,g)
p=g.a+="// === Alpha ===\n"
p=g.a=p+"\n"
o=a.y
n=o.a
if(n){p+="uniform float alpha;\n"
g.a=p}o=o.c
p=(o?g.a=p+"uniform samplerCube alphaTxt;\n":p)+"float alphaValue()\n"
g.a=p
p=g.a=p+"{\n"
if(!n)m=o
else m=!0
if(!m)p=g.a=p+"   return 1.0;\n"
else if(o){if(n){p+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
g.a=p}else{p+="   float a = textureCube(alphaTxt, txtCube).a;\n"
g.a=p}p+="   if (a <= 0.000001) discard;\n"
g.a=p
p+="   return a;\n"
g.a=p}else if(n){p+="   return alpha;\n"
g.a=p}p+="}\n"
g.a=p
g.a=p+"\n"
p=a.k1
if(p){for(o=a.z,n=o.length,l=0;l<o.length;o.length===n||(0,H.o)(o),++l)A.o5(a,o[l],g)
for(o=a.Q,n=o.length,l=0;l<o.length;o.length===n||(0,H.o)(o),++l)A.o7(a,o[l],g)
for(o=a.ch,n=o.length,l=0;l<o.length;o.length===n||(0,H.o)(o),++l)A.oc(a,o[l],g)
for(o=a.cx,n=o.length,l=0;l<o.length;o.length===n||(0,H.o)(o),++l)A.og(a,o[l],g)
A.oa(a,g)}o=g.a+="// === Main ===\n"
o+="\n"
g.a=o
o+="void main()\n"
g.a=o
o+="{\n"
g.a=o
o=g.a=o+"   float alpha = alphaValue();\n"
s=s?g.a=o+"   vec3 norm = normal();\n":o
if(r)g.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
k=H.b([],t.i)
if(p){g.a+=u.o
k.push("lightAccum")
s=a.b
if(!s.a)s=s.c
else s=!0
if(s)g.a+="   setAmbientColor();\n"
s=a.c
if(!s.a)s=s.c
else s=!0
if(s)g.a+="   setDiffuseColor();\n"
s=a.d
if(!s.a)s=s.c
else s=!0
if(s)g.a+="   setInvDiffuseColor();\n"
s=a.e
if(!s.a)s=s.c
else s=!0
if(s)g.a+="   setSpecularColor();\n"
for(s=a.z,r=s.length,l=0;l<s.length;s.length===r||(0,H.o)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.f(p,0)
g.a+=j+(p[0].toUpperCase()+C.b.b1(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,l=0;l<s.length;s.length===r||(0,H.o)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.f(p,0)
g.a+=j+(p[0].toUpperCase()+C.b.b1(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,l=0;l<s.length;s.length===r||(0,H.o)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.f(p,0)
g.a+=j+(p[0].toUpperCase()+C.b.b1(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,l=0;l<s.length;s.length===r||(0,H.o)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.f(p,0)
g.a+=j+(p[0].toUpperCase()+C.b.b1(p,1))+"Values(norm);\n"}if(a.cy<=0)g.a+="   lightAccum += nonLightValues(norm);\n"}s=a.a
if(!s.a)s=s.c
else s=!0
if(s)k.push("emissionColor()")
s=a.r
if(!s.a)s=s.c
else s=!0
if(s)k.push("reflect(refl)")
s=a.x
if(!s.a)s=s.c
else s=!0
if(s)k.push("refract(refl)")
if(k.length<=0)k.push("vec3(0.0, 0.0, 0.0)")
s=g.a+="   vec4 objClr = vec4("+C.a.p(k," + ")+", alpha);\n"
if(q)s=g.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
g.a=s
s=g.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
oi:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.bo+"];\n"
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
ok:function(a,b){var s
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
oj:function(a,b){var s
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
om:function(a,b){var s,r
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
on:function(a,b){var s,r
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
ol:function(a,b){var s
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
oo:function(a,b){var s
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
hl:function(a){if(0>=a.length)return H.f(a,0)
return a[0].toUpperCase()+C.b.b1(a,1)},
ng:function(a,b){var s,r,q,p
for(s=0,r="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";s<a;++s)r=r+("uniform sampler2D txt"+s+";\n")+("uniform mat4 clrMat"+s+";\n")+("uniform vec2 srcLoc"+s+";\n")+("uniform vec2 srcSize"+s+";\n")+("uniform vec2 destLoc"+s+";\n")+("uniform vec2 destSize"+s+";\n")+("uniform int flip"+s+";\n")
r+="\nvec4 clrAccum;\n"
q=b===C.P
r=(q||b===C.v?r+"float colorCount;\n":r)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.O)r+="      clrAccum += color;\n"
else if(b===C.h)r+="      clrAccum = mix(clrAccum, color, color.a);\n"
else r=q?r+"      clrAccum += color;\n      colorCount += 1.0;\n":r+"      clrAccum = color;\n      colorCount = 1.0;\n"
r+="   }\n}\n\nvoid layoutAll()\n{\n"
p=b===C.v
if(p)for(s=a-1;s>=0;--s)r=r+("   if(txtCount > "+s+")\n")+"   {\n"+("     layout(txt"+s+", clrMat"+s+", srcLoc"+s+", srcSize"+s+", destLoc"+s+", destSize"+s+", flip"+s+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(s=0;s<a;++s)r=r+("   if(txtCount <= "+s+") return;\n")+("   layout(txt"+s+", clrMat"+s+", srcLoc"+s+", srcSize"+s+", destLoc"+s+", destSize"+s+", flip"+s+");\n")
r+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(q)r+="   colorCount = 1.0;\n"
else if(p)r+="   colorCount = 0.0;\n"
r+="   layoutAll();\n"
r=(q?r+"   clrAccum = clrAccum/colorCount;\n":r)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return r.charCodeAt(0)==0?r:r},
nf:function(a,b,c){var s="TextureLayout_"+a+"_"+C.c.i(b.a),r=new A.iY(c,s)
r.bd(c,s)
r.ee(a,b,c)
return r},
ko:function(a,b,c,d,e){var s=new A.j8(a,c,e)
s.f=d
P.i3(d,0,!1,t.e)
return s},
dB:function dB(a,b,c){this.a=a
this.b=b
this.c=c},
hp:function hp(a){this.a=a},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
i8:function i8(a,b){var _=this
_.dm=_.is=_.bp=_.aH=_.bo=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iA=_.iz=_.iy=_.cc=_.cb=_.ca=_.c9=_.c8=_.c7=_.c6=_.c5=_.dC=_.ix=_.dB=_.dA=_.iw=_.dz=_.dw=_.dv=_.iv=_.du=_.dt=_.ds=_.iu=_.dr=_.dq=_.it=_.dn=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dF:function dF(a,b){this.a=a
this.b=b},
dR:function dR(a,b){this.a=a
this.b=b},
er:function er(a,b){this.a=a
this.b=b},
eI:function eI(a,b){this.a=a
this.b=b},
ib:function ib(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.bo=b5
_.aH=b6
_.bp=b7},
cS:function cS(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cT:function cT(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cV:function cV(a,b,c,d,e,f,g,h,i,j){var _=this
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
cX:function cX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
eC:function eC(){},
bK:function bK(a,b){this.a=a
this.b=b},
iM:function iM(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
iO:function iO(a,b){var _=this
_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
iY:function iY(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
f0:function f0(){},
jc:function jc(a){this.a=a},
c_:function c_(a,b,c){this.a=a
this.c=b
this.d=c},
j9:function j9(a,b,c){this.a=a
this.c=b
this.d=c},
ja:function ja(a,b,c){this.a=a
this.c=b
this.d=c},
jb:function jb(a,b,c){this.a=a
this.c=b
this.d=c},
j8:function j8(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
f1:function f1(a,b,c){this.a=a
this.c=b
this.d=c},
cR:function cR(a,b,c){this.a=a
this.c=b
this.d=c},
f2:function f2(a,b,c){this.a=a
this.c=b
this.d=c},
f3:function f3(a,b,c){this.a=a
this.c=b
this.d=c},
jd:function jd(a,b,c){this.a=a
this.c=b
this.d=c},
f4:function f4(a,b,c){this.a=a
this.c=b
this.d=c},
cU:function cU(a,b,c){this.a=a
this.c=b
this.d=c},
cW:function cW(a,b,c){this.a=a
this.c=b
this.d=c},
f5:function f5(a,b,c){this.a=a
this.c=b
this.d=c},
m0:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7="testCanvas",b8=null,b9="modifiers",c0=V.na("Test 043"),c1=W.hw()
c1.className="pageLargeCanvas"
c1.id=b7
c0.a.appendChild(c1)
s=t.i
c0.d8(H.b(["Test of the color picker, used to read the color of a pixel from a texture. It uses a back buffer with solid colored entities to pick which one to move. Also testing out the ability to screen shot a back buffer."],s))
c0.hj(H.b(["buttons"],s))
c0.d8(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(b7)
if(r==null)H.p(P.q("Failed to find an element with the identifier, testCanvas."))
q=E.nh(r,!0,!0,!0,!1)
p=U.l1()
c0=q.x
o=new U.cZ()
n=U.ka()
n.scs(0,!0)
n.scj(6.283185307179586)
n.scl(0)
n.sag(0,0)
n.sck(100)
n.sP(0)
n.sc0(0.5)
o.b=n
m=o.gaQ()
n.gm().k(0,m)
n=U.ka()
n.scs(0,!0)
n.scj(6.283185307179586)
n.scl(0)
n.sag(0,0)
n.sck(100)
n.sP(0)
n.sc0(0.5)
o.c=n
n.gm().k(0,m)
o.d=null
o.r=o.f=o.e=!1
o.y=o.x=2.5
o.Q=4
o.ch=o.cx=!1
o.db=o.cy=0
o.dx=null
o.dy=0
o.fx=o.fr=null
l=new X.af(!1,!1,!1)
k=o.d
o.d=l
n=new D.u(b9,k,l)
n.b=!0
o.G(n)
n=o.f
if(n!==!1){o.f=!1
n=new D.u("invertX",n,!1)
n.b=!0
o.G(n)}n=o.r
if(n!==!1){o.r=!1
n=new D.u("invertY",n,!1)
n.b=!0
o.G(n)}o.aF(c0)
p.k(0,o)
c0=q.x
o=new U.cY()
n=U.ka()
n.scs(0,!0)
n.scj(6.283185307179586)
n.scl(0)
n.sag(0,0)
n.sck(100)
n.sP(0)
n.sc0(0.2)
o.b=n
n.gm().k(0,o.gaQ())
o.c=null
o.d=!1
o.e=2.5
o.r=4
o.x=o.y=!1
o.z=0
o.Q=null
o.ch=0
o.cy=o.cx=null
l=new X.af(!0,!1,!1)
k=o.c
o.c=l
n=new D.u(b9,k,l)
n.b=!0
o.G(n)
o.aF(c0)
p.k(0,o)
c0=q.x
o=new U.d_()
o.c=0.01
o.e=o.d=0
l=new X.af(!1,!1,!1)
o.b=l
n=new D.u(b9,b8,l)
n.b=!0
o.G(n)
o.aF(c0)
p.k(0,o)
p.k(0,U.kb(V.mV(0,0,5)))
j=X.lf(p)
i=q.f.dG("../resources/diceColor")
h=new O.e5()
c0=O.hy(t.hc)
h.e=c0
c0.aL(h.gf3(),h.gf5())
c0=new O.aM(h,"emission")
c0.c=new A.a1(!1,!1,!1)
c0.f=new V.L(0,0,0)
h.f=c0
c0=new O.aM(h,"ambient")
c0.c=new A.a1(!1,!1,!1)
c0.f=new V.L(0,0,0)
h.r=c0
c0=new O.aM(h,"diffuse")
c0.c=new A.a1(!1,!1,!1)
c0.f=new V.L(0,0,0)
h.x=c0
c0=new O.aM(h,"invDiffuse")
c0.c=new A.a1(!1,!1,!1)
c0.f=new V.L(0,0,0)
h.y=c0
c0=new O.ie(h,"specular")
c0.c=new A.a1(!1,!1,!1)
c0.f=new V.L(0,0,0)
c0.ch=100
h.z=c0
c0=new O.ia(h,"bump")
c0.c=new A.a1(!1,!1,!1)
h.Q=c0
h.ch=null
c0=new O.aM(h,"reflect")
c0.c=new A.a1(!1,!1,!1)
c0.f=new V.L(0,0,0)
h.cx=c0
c0=new O.id(h,"refract")
c0.c=new A.a1(!1,!1,!1)
c0.f=new V.L(0,0,0)
c0.ch=1
h.cy=c0
c0=new O.i9(h,"alpha")
c0.c=new A.a1(!1,!1,!1)
c0.f=1
h.db=c0
c0=new D.cx()
c0.bc(t.gj)
c0.e=H.b([],t.bb)
c0.f=H.b([],t.cP)
c0.r=H.b([],t.eb)
c0.x=H.b([],t.du)
c0.z=c0.y=null
c0.cz(c0.gf1(),c0.gfI(),c0.gfM())
h.dx=c0
o=new O.ic()
o.b=new V.a0(0,0,0,0)
o.c=1
o.d=10
o.e=!1
h.dy=o
o=c0.y
c0=o==null?c0.y=D.D():o
c0.k(0,h.gh1())
c0=h.dx
o=c0.z
c0=o==null?c0.z=D.D():o
c0.k(0,h.ga9())
h.fr=null
c0=h.dx
o=U.kb(V.ld(-1,-1,-1,b8))
c0.k(0,D.kW(new V.L(1,0.9,0.9),o))
c0=h.dx
o=U.kb(V.ld(1,1,2,b8))
c0.k(0,D.kW(new V.L(0.2,0.2,0.35),o))
c0=h.r
c0.saV(0,new V.L(0.2,0.2,0.2))
h.r.sb9(i)
c0=h.x
c0.saV(0,new V.L(0.8,0.8,0.8))
h.x.sb9(i)
c0=h.z
c0.saV(0,new V.L(0.7,0.7,0.7))
c0=h.z
c0.bS(new A.a1(!0,!1,c0.c.c))
c0.d4(10)
h.Q.sb9(q.f.dG("../resources/diceBumpMap"))
g=H.b([],t.bN)
f=H.b([],t.ai)
e=F.kl()
F.dl(e,b8,b8,1,1,1,0,0,1)
F.dl(e,b8,b8,1,1,0,1,0,3)
F.dl(e,b8,b8,1,1,0,0,1,2)
F.dl(e,b8,b8,1,1,-1,0,0,0)
F.dl(e,b8,b8,1,1,0,-1,0,0)
F.dl(e,b8,b8,1,1,0,0,-1,3)
e.aG()
d=E.co(e)
c=E.co(b8)
b=E.co(b8)
for(a=-1.6;a<=1.7;a+=0.8)for(a0=-1.6;a0<=1.7;a0+=0.8)for(a1=-1.6;a1<=1.7;a1+=0.8){a2=new V.an(1,0,0,a,0,1,0,a0,0,0,1,a1,0,0,0,1).t(0,new V.an(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
p=new U.bX()
p.r=p.f=p.e=p.d=p.c=p.b=p.a=0
p.sdY(0)
p.sdQ(0,0)
p.sdT(0)
c0=p.d
$.A().toString
if(!(Math.abs(c0-0)<1e-9)){p.d=0
c0=new D.u("deltaYaw",c0,0)
c0.b=!0
o=p.y
if(o!=null)o.u(c0)}p.sc1(0)
p.sc2(0)
g.push(p)
a3=U.l1()
c0=H.bE(a3).w("t<Q.T*>")
if(a3.aw(H.b([p],c0))){o=a3.a
a4=o.length
o.push(p)
o=H.b([p],c0)
n=a3.c
if(n!=null)n.$2(a4,o)}o=new U.bL()
o.sS(0,a2)
if(a3.aw(H.b([o],c0))){n=a3.a
a4=n.length
n.push(o)
c0=H.b([o],c0)
o=a3.c
if(o!=null)o.$2(a4,c0)}a5=E.co(b8)
a5.saK(h)
a5.scm(a3)
c0=a5.y
o=c0.$ti.w("t<Q.T*>")
if(c0.aw(H.b([d],o))){n=c0.a
a4=n.length
n.push(d)
o=H.b([d],o)
c0=c0.c
if(c0!=null)c0.$2(a4,o)}c0=c.y
o=c0.$ti.w("t<Q.T*>")
if(c0.aw(H.b([a5],o))){n=c0.a
a4=n.length
n.push(a5)
o=H.b([a5],o)
c0=c0.c
if(c0!=null)c0.$2(a4,o)}c0=V.mE(f.length/125,1,1)
i=new V.a0(Math.floor(c0.a*255)/255,Math.floor(c0.b*255)/255,Math.floor(c0.c*255)/255,Math.floor(255)/255)
f.push(i)
a6=E.co(b8)
c0=new O.iN()
c0.b=i
a6.saK(c0)
a6.scm(a3)
c0=a6.y
o=c0.$ti.w("t<Q.T*>")
if(c0.aw(H.b([d],o))){n=c0.a
a4=n.length
n.push(d)
o=H.b([d],o)
c0=c0.c
if(c0!=null)c0.$2(a4,o)}c0=b.y
o=c0.$ti.w("t<Q.T*>")
if(c0.aw(H.b([a6],o))){n=c0.a
a4=n.length
n.push(a6)
o=H.b([a6],o)
c0=c0.c
if(c0!=null)c0.$2(a4,o)}}a7=new X.hs()
a7.d=a7.c=a7.b=a7.a=512
a7.e=!0
a7.f=!1
a7.x=a7.r=1
a7.ch=T.lo(b8)
a7.cx=new V.a0(0,0,0,1)
a7.cy=!0
a7.db=2000
a7.dx=!0
a7.dy=V.ex()
a7.sap(0,512)
a7.sal(0,512)
i=new V.a0(0,0,0,1)
if(!a7.cx.n(0,i)){k=a7.cx
a7.cx=i
c0=new D.u("color",k,i)
c0.b=!0
a7.Z(c0)}c0=a7.db
$.A().toString
if(!(Math.abs(c0-2000)<1e-9)){a7.db=2000
c0=new D.u("depth",c0,2000)
c0.b=!0
a7.Z(c0)}if(!a7.f){a7.f=!0
c0=new D.u("autoResize",!1,!0)
c0.b=!0
a7.Z(c0)}c0=a7.r
$.A().toString
if(!(Math.abs(c0-0.5)<1e-9)){a7.r=0.5
c0=new D.u("autoResizeScalarX",c0,0.5)
c0.b=!0
a7.Z(c0)}c0=a7.x
$.A().toString
if(!(Math.abs(c0-0.5)<1e-9)){a7.x=0.5
c0=new D.u("autoResizeScalarY",c0,0.5)
c0.b=!0
a7.Z(c0)}a8=V.ex()
if(!J.H(a7.dy,a8)){k=a7.dy
a7.dy=a8
c0=new D.u("region",k,a8)
c0.b=!0
a7.Z(c0)}a9=M.l_()
a9.e.k(0,b)
a9.saJ(0,a7)
a9.saT(j)
b0=X.ke(!1,b8)
b1=M.l_()
b1.e.k(0,c)
b1.saJ(0,b0)
b1.saT(j)
c0=q.f.dH("../resources/maskonaive",".jpg")
b2=M.kV()
o=new O.eD()
o.b=1.0471975511965976
o.d=new V.L(1,1,1)
k=o.c
o.c=c0
c0.gm().k(0,o.ga9())
c0=new D.u("boxTexture",k,o.c)
c0.b=!0
o.C(c0)
b2.saK(o)
b2.saJ(0,b0)
b2.saT(j)
b3=new O.eU()
b3.a=new V.a0(0,0,0,0)
c0=O.hy(t.au)
b3.c=c0
c0.aL(b3.gfj(),b3.gfl())
b3.d=0
b3.e=null
b3.r=b3.f=C.h
b4=new V.a0(0,0,0,0)
if(!b3.a.n(0,b4)){k=b3.a
b3.a=b4
c0=new D.u("backColor",k,b4)
c0.b=!0
b3.C(c0)}c0=b3.f
if(c0!==C.h){b3.f=C.h
c0=new D.u("blend",c0,C.h)
c0.b=!0
b3.C(c0)}c0=b3.c
o=new O.bB()
o.sao(b8)
a2=V.by()
if(!J.H(o.b,a2)){k=o.b
o.b=a2
n=new D.u("colorMatrix",k,a2)
n.b=!0
o.C(n)}b5=V.ex()
if(!J.H(o.c,b5)){k=o.c
o.c=b5
n=new D.u("source",k,b5)
n.b=!0
o.C(n)}o.sdj(0,b8)
if(o.e!==!1){o.e=!1
n=new D.u("flip",!0,!1)
n.b=!0
o.C(n)}o.f=null
o.sdj(0,V.ew(0,0.75,0.25,0.25))
o.sao(a7.ch)
c0.k(0,o)
b6=M.kV()
b6.saK(b3)
b6.saJ(0,b0)
c0=q.z
if(c0==null)c0=q.z=D.D()
c0.k(0,new A.k_(g))
c0=q.f
o=q.x
n=a7.ch
m=new T.dM()
m.a=c0
m.z=4
m.ch=m.Q=!1
l=new X.af(!1,!1,!1)
m.c=l
c0=new D.u(b9,b8,l)
c0.b=!0
m.be(c0)
c0=m.d
if(c0!==n){if(c0!=null)c0.gm().M(0,m.gcM())
k=m.d
m.d=n
n.gm().k(0,m.gcM())
c0=new D.u("texture",k,m.d)
c0.b=!0
m.be(c0)}m.aF(o)
c0=m.x
if(c0==null)c0=m.x=D.D()
c0.k(0,new A.k0(f,g))
c0=H.b([a9,b2,b1,b6],t.f2)
o=new M.ch()
o.bc(t.bn)
o.e=!0
o.f=!1
o.r=null
o.aL(o.gfO(),o.gfQ())
o.a4(0,c0)
c0=q.d
if(c0!==o){if(c0!=null)c0.gm().M(0,q.gcJ())
q.d=o
o.gm().k(0,q.gcJ())
q.cK()}c0=new V.hu("buttons")
s=s.getElementById("buttons")
c0.b=s
if(s==null)H.p("Failed to find buttons for ButtonGroup")
c0.c=H.b([],t.cQ)
c0.hi(0,"Back target snapshot",new A.k1(q,a7))
V.oZ(q)},
k_:function k_(a){this.a=a},
k0:function k0(a,b){this.a=a
this.b=b},
k1:function k1(a,b){this.a=a
this.b=b}},F={
jO:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
dl:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.E(f,e+a3,d+a4)
h.a=c
s=a3-a4
r=a4-a5
q=a5-a3
p=h.b=new V.E(s+a5,r+a3,q+a4)
o=new V.E(s-a5,r-a3,q-a4)
h.c=o
n=h.d=new V.E(g-a5,e-a3,d-a4)
if(f>0){h.d=p
h.b=n
f=p
g=n}else{f=n
g=p}for(d=f,f=g,g=c,e=o,m=0;m<a6;++m,l=d,d=g,g=f,f=e,e=l){h.a=f
h.b=e
h.c=d
h.d=g}k=F.jO(g)
j=F.jO(f)
i=F.p2(a1,a2,new F.jN(h,F.jO(e),F.jO(d),j,k,a0),b)
if(i!=null)a.hL(i)},
p2:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.kl()
r=H.b([],t.j)
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.jk(e,e,new V.a0(n,0,0,1),e,e,new V.ab(p,1),e,e,0)
o.k(0,m)
c.$3(m,p,0)
r.push(m.c_(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.jk(e,e,new V.a0(h,g,f,1),e,e,new V.ab(p,k),e,e,0)
i.k(0,m)
c.$3(m,p,l)
r.push(m.c_(d))}}s.d.hm(a+1,b+1,r)
return s},
cq:function(a,b,c){var s=new F.dT(),r=a.a
if(r==null)H.p(P.q("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.p(P.q("May not create a face with vertices attached to different shapes."))
s.a=a
a.d.b.push(s)
s.b=b
b.d.c.push(s)
s.c=c
c.d.d.push(s)
s.a.a.d.b.push(s)
s.a.a.a5()
return s},
mP:function(a,b){var s=new F.e3(),r=a.a
if(r==null)H.p(P.q("May not create a line with a start vertex which is not attached to a shape."))
if(r!=b.a)H.p(P.q("May not create a line with vertices attached to different shapes."))
s.a=a
a.c.b.push(s)
s.b=b
b.c.c.push(s)
s.a.a.c.b.push(s)
s.a.a.a5()
return s},
kl:function(){var s=new F.iF(),r=new F.jl(s)
r.b=!1
r.c=H.b([],t.j)
s.a=r
r=new F.iI(s)
r.b=H.b([],t.k)
s.b=r
r=new F.iH(s)
r.b=H.b([],t.B)
s.c=r
r=new F.iG(s)
r.b=H.b([],t.b)
s.d=r
s.e=null
return s},
jk:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.fc(),p=new F.jq()
p.b=H.b([],t.k)
q.b=p
p=new F.jp()
s=t.B
p.b=H.b([],s)
p.c=H.b([],s)
q.c=p
p=new F.jm()
s=t.b
p.b=H.b([],s)
p.c=H.b([],s)
p.d=H.b([],s)
q.d=p
h=$.mk()
q.e=0
p=$.a7()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.bg().a)!==0?e:r
q.x=(s&$.bf().a)!==0?b:r
q.y=(s&$.bG().a)!==0?f:r
q.z=(s&$.bh().a)!==0?g:r
q.Q=(s&$.ml().a)!==0?c:r
q.ch=(s&$.ce().a)!==0?i:0
q.cx=(s&$.be().a)!==0?a:r
return q},
jN:function jN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dT:function dT(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
e3:function e3(){this.b=this.a=null},
eo:function eo(){this.a=null},
iF:function iF(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iG:function iG(a){this.a=a
this.b=null},
iH:function iH(a){this.a=a
this.b=null},
iI:function iI(a){this.a=a
this.b=null},
fc:function fc(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
js:function js(a){this.a=a},
jr:function jr(a){this.a=a},
jl:function jl(a){this.a=a
this.c=this.b=null},
jm:function jm(){this.d=this.c=this.b=null},
jn:function jn(a,b){this.a=a
this.b=b},
jo:function jo(a,b){this.a=a
this.b=b},
jp:function jp(){this.c=this.b=null},
jq:function jq(){this.b=null}},T={
lo:function(a){var s=new T.iW()
s.a=0
s.b=a
s.d=s.c=!1
s.x=s.r=s.f=s.e=0
return s},
lp:function(a,b,c,d,e,f,g){var s,r,q
if(f==null)f=0
if(g==null)g=0
if(e==null)e=b.r
if(d==null)d=b.x
s=b.x
a.bindFramebuffer(36160,a.createFramebuffer())
a.readBuffer(36064)
a.framebufferTexture2D(36160,36064,3553,b.b,0)
r=new Uint8Array(e*d*4)
a.readPixels(f,s-d-g,e,d,6408,5121,r)
a.bindFramebuffer(36160,null)
q=new T.j0(r,e,d)
q.eM()
return q},
dM:function dM(){var _=this
_.ch=_.Q=_.z=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cg:function cg(a,b){this.c=a
this.d=b
this.b=null},
eT:function eT(){},
iV:function iV(){},
iW:function iW(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iX:function iX(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iZ:function iZ(a){var _=this
_.a=a
_.e=_.d=_.c=null},
j_:function j_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
j0:function j0(a,b,c){this.a=a
this.b=b
this.c=c}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kh.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gR:function(a){return H.cJ(a)},
i:function(a){return"Instance of '"+H.e(H.es(a))+"'"}}
J.hY.prototype={
i:function(a){return String(a)},
gR:function(a){return a?519018:218159}}
J.cw.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gR:function(a){return 0}}
J.bv.prototype={
gR:function(a){return 0},
i:function(a){return String(a)}}
J.em.prototype={}
J.bD.prototype={}
J.ay.prototype={
i:function(a){var s=a[$.m9()]
if(s==null)return this.e7(a)
return"JavaScript function for "+H.e(J.a9(s))}}
J.t.prototype={
i4:function(a,b){var s
if(!!a.fixed$length)H.p(P.z("removeAt"))
s=a.length
if(b>=s)throw H.c(P.et(b,null))
return a.splice(b,1)[0]},
M:function(a,b){var s
if(!!a.fixed$length)H.p(P.z("remove"))
for(s=0;s<a.length;++s)if(J.H(a[s],b)){a.splice(s,1)
return!0}return!1},
a4:function(a,b){var s,r
if(!!a.fixed$length)H.p(P.z("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.o)(b),++r)a.push(b[r])},
H:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.bn(a))}},
p:function(a,b){var s,r,q=P.i3(a.length,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.e(a[s])
if(s>=q.length)return H.f(q,s)
q[s]=r}return q.join(b)},
hJ:function(a){return this.p(a,"")},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
gce:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.l2())},
d9:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.bn(a))}return!1},
b0:function(a,b){if(!!a.immutable$list)H.p(P.z("sort"))
H.nd(a,b==null?J.nW():b)},
e2:function(a){return this.b0(a,null)},
A:function(a,b){var s
for(s=0;s<a.length;++s)if(J.H(a[s],b))return!0
return!1},
i:function(a){return P.kf(a,"[","]")},
gL:function(a){return new J.a_(a,a.length)},
gR:function(a){return H.cJ(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.p(P.z("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.cc(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.p(P.z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cc(a,b))
a[b]=c},
$il:1,
$ih:1,
$in:1}
J.i_.prototype={}
J.a_.prototype={
gE:function(a){return this.d},
q:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.o(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bu.prototype={
aW:function(a,b){var s
if(typeof b!="number")throw H.c(H.bc(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbr(b)
if(this.gbr(a)===s)return 0
if(this.gbr(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbr:function(a){return a===0?1/a<0:a<0},
ic:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.z(""+a+".toInt()"))},
aX:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.z(""+a+".floor()"))},
U:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.z(""+a+".round()"))},
dW:function(a,b){var s
if(b>20)throw H.c(P.ap(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbr(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gR:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
bz:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
e9:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d5(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.d5(a,b)},
d5:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.z("Result of truncating division is "+H.e(s)+": "+H.e(a)+" ~/ "+b))},
bi:function(a,b){var s
if(a>0)s=this.h9(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
h9:function(a,b){return b>31?0:a>>>b},
$iW:1,
$iP:1}
J.cv.prototype={$ik:1}
J.cu.prototype={}
J.aJ.prototype={
bZ:function(a,b){if(b<0)throw H.c(H.cc(a,b))
if(b>=a.length)H.p(H.cc(a,b))
return a.charCodeAt(b)},
cQ:function(a,b){if(b>=a.length)throw H.c(H.cc(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(typeof b!="string")throw H.c(P.kP(b,null,null))
return a+b},
e3:function(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
cE:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.et(b,null))
if(b>c)throw H.c(P.et(b,null))
if(c>a.length)throw H.c(P.et(c,null))
return a.substring(b,c)},
b1:function(a,b){return this.cE(a,b,null)},
ig:function(a){return a.toLowerCase()},
t:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.M)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
an:function(a,b){var s=b-a.length
if(s<=0)return a
return this.t(" ",s)+a},
hs:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.ap(c,0,s,null,null))
return H.m4(a,b,c)},
A:function(a,b){return this.hs(a,b,0)},
aW:function(a,b){var s
if(typeof b!="string")throw H.c(H.bc(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gR:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gj:function(a){return a.length},
$ix:1}
H.O.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.b.bZ(this.a,b)}}
H.l.prototype={}
H.bP.prototype={
gL:function(a){return new H.bx(this,this.gj(this))},
by:function(a,b){return this.e6(0,b)}}
H.cN.prototype={
geJ:function(){var s,r=J.au(this.a),q=this.c
if(q!=null){if(typeof r!=="number")return H.v(r)
s=q>r}else s=!0
if(s)return r
return q},
gha:function(){var s=J.au(this.a),r=this.b
if(typeof s!=="number")return H.v(s)
if(r>s)return s
return r},
gj:function(a){var s,r=J.au(this.a),q=this.b
if(typeof r!=="number")return H.v(r)
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.a2()
return s-q},
B:function(a,b){var s,r=this,q=r.gha()
if(typeof q!=="number")return q.v()
s=q+b
if(b>=0){q=r.geJ()
if(typeof q!=="number")return H.v(q)
q=s>=q}else q=!0
if(q)throw H.c(P.J(b,r,"index",null,null))
return J.dx(r.a,s)},
cr:function(a,b){var s,r,q,p,o=this,n=o.b,m=o.a,l=J.aW(m),k=l.gj(m),j=o.c
if(j!=null){if(typeof k!=="number")return H.v(k)
s=j<k}else s=!1
if(s)k=j
if(typeof k!=="number")return k.a2()
r=k-n
if(r<=0){m=J.l3(0,o.$ti.c)
return m}q=P.i3(r,l.B(m,n),!1,o.$ti.c)
for(p=1;p<r;++p){s=l.B(m,n+p)
if(p>=q.length)return H.f(q,p)
q[p]=s
s=l.gj(m)
if(typeof s!=="number")return s.ad()
if(s<k)throw H.c(P.bn(o))}return q}}
H.bx.prototype={
gE:function(a){var s=this.d
return s},
q:function(){var s,r=this,q=r.a,p=J.aW(q),o=p.gj(q)
if(r.b!=o)throw H.c(P.bn(q))
s=r.c
if(typeof o!=="number")return H.v(o)
if(s>=o){r.d=null
return!1}r.d=p.B(q,s);++r.c
return!0}}
H.aL.prototype={
gL:function(a){return new H.cC(J.bi(this.a),this.b)},
gj:function(a){return J.au(this.a)},
B:function(a,b){return this.b.$1(J.dx(this.a,b))}}
H.cm.prototype={$il:1}
H.cC.prototype={
q:function(){var s=this,r=s.b
if(r.q()){s.a=s.c.$1(r.gE(r))
return!0}s.a=null
return!1},
gE:function(a){var s=this.a
return s}}
H.cD.prototype={
gj:function(a){return J.au(this.a)},
B:function(a,b){return this.b.$1(J.dx(this.a,b))}}
H.aT.prototype={
gL:function(a){return new H.ff(J.bi(this.a),this.b)}}
H.ff.prototype={
q:function(){var s,r
for(s=this.a,r=this.b;s.q();)if(r.$1(s.gE(s)))return!0
return!1},
gE:function(a){var s=this.a
return s.gE(s)}}
H.cr.prototype={}
H.f8.prototype={
l:function(a,b,c){throw H.c(P.z("Cannot modify an unmodifiable list"))},
V:function(a,b,c,d,e){throw H.c(P.z("Cannot modify an unmodifiable list"))},
au:function(a,b,c,d){return this.V(a,b,c,d,0)}}
H.c0.prototype={}
H.j6.prototype={
am:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.eg.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.e0.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.e(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.e(r.a)+")"
return q+p+"' on '"+s+"' ("+H.e(r.a)+")"}}
H.f7.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.iw.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.fV.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bJ.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.m7(r==null?"unknown":r)+"'"},
gik:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iU.prototype={}
H.iQ.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.m7(s)+"'"}}
H.cf.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.cf))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gR:function(a){var s,r=this.c
if(r==null)s=H.cJ(this.a)
else s=typeof r!=="object"?J.a8(r):H.cJ(r)
return(s^H.cJ(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.es(s))+"'")}}
H.eA.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.B.prototype={
gj:function(a){return this.a},
gab:function(a){return new H.am(this,H.bE(this).w("am<1>"))},
gij:function(a){var s=H.bE(this)
return H.mR(new H.am(this,s.w("am<1>")),new H.i0(this),s.c,s.Q[1])},
ht:function(a,b){var s=this.b
if(s==null)return!1
return this.eF(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bg(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bg(p,b)
q=r==null?n:r.b
return q}else return o.hI(b)},
hI:function(a){var s,r,q=this.d
if(q==null)return null
s=this.cW(q,J.a8(a)&0x3ffffff)
r=this.dD(s,a)
if(r<0)return null
return s[r].b},
l:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.cN(s==null?m.b=m.bP():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.cN(r==null?m.c=m.bP():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bP()
p=J.a8(b)&0x3ffffff
o=m.cW(q,p)
if(o==null)m.bT(q,p,[m.bQ(b,c)])
else{n=m.dD(o,b)
if(n>=0)o[n].b=c
else o.push(m.bQ(b,c))}}},
H:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.bn(s))
r=r.c}},
cN:function(a,b,c){var s=this.bg(a,b)
if(s==null)this.bT(a,b,this.bQ(b,c))
else s.b=c},
eT:function(){this.r=this.r+1&67108863},
bQ:function(a,b){var s,r=this,q=new H.i2(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.eT()
return q},
dD:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.H(a[r].a,b))return r
return-1},
i:function(a){return P.l8(this)},
bg:function(a,b){return a[b]},
cW:function(a,b){return a[b]},
bT:function(a,b,c){a[b]=c},
eI:function(a,b){delete a[b]},
eF:function(a,b){return this.bg(a,b)!=null},
bP:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bT(r,s,r)
this.eI(r,s)
return r}}
H.i0.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.bE(this.a).w("2(1)")}}
H.i2.prototype={}
H.am.prototype={
gj:function(a){return this.a.a},
gL:function(a){var s=this.a,r=new H.e4(s,s.r)
r.c=s.e
return r}}
H.e4.prototype={
gE:function(a){return this.d},
q:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.bn(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jV.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.jW.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jX.prototype={
$1:function(a){return this.a(a)}}
H.hZ.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.iS.prototype={}
H.kv.prototype={
q:function(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new H.iS(s,o)
q.c=r===q.c?r+1:r
return!0},
gE:function(a){var s=this.d
s.toString
return s}}
H.cG.prototype={
eN:function(a,b,c,d){var s=P.ap(b,0,c,d,null)
throw H.c(s)},
cP:function(a,b,c,d){if(b>>>0!==b||b>c)this.eN(a,b,c,d)}}
H.bS.prototype={
gj:function(a){return a.length},
d3:function(a,b,c,d,e){var s,r,q=a.length
this.cP(a,b,q,"start")
this.cP(a,c,q,"end")
if(b>c)throw H.c(P.ap(b,0,c,null,null))
s=c-b
r=d.length
if(r-e<s)throw H.c(P.iP("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iy:1}
H.b2.prototype={
h:function(a,b){H.aU(b,a,a.length)
return a[b]},
l:function(a,b,c){H.aU(b,a,a.length)
a[b]=c},
V:function(a,b,c,d,e){if(t.d4.b(d)){this.d3(a,b,c,d,e)
return}this.cG(a,b,c,d,e)},
au:function(a,b,c,d){return this.V(a,b,c,d,0)},
$il:1,
$ih:1,
$in:1}
H.aa.prototype={
l:function(a,b,c){H.aU(b,a,a.length)
a[b]=c},
V:function(a,b,c,d,e){if(t.eB.b(d)){this.d3(a,b,c,d,e)
return}this.cG(a,b,c,d,e)},
au:function(a,b,c,d){return this.V(a,b,c,d,0)},
$il:1,
$ih:1,
$in:1}
H.ea.prototype={
h:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.eb.prototype={
h:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.ec.prototype={
h:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.ed.prototype={
h:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.ee.prototype={
h:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.bT.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.ef.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.d5.prototype={}
H.d6.prototype={}
H.d7.prototype={}
H.d8.prototype={}
H.aq.prototype={
w:function(a){return H.h8(v.typeUniverse,this,a)},
bf:function(a){return H.nK(v.typeUniverse,this,a)}}
H.fx.prototype={}
H.fs.prototype={
i:function(a){return this.a}}
H.dh.prototype={}
P.ju.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:17}
P.jt.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.jv.prototype={
$0:function(){this.a.$0()}}
P.jw.prototype={
$0:function(){this.a.$0()}}
P.dg.prototype={
es:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cb(new P.jJ(this,b),0),a)
else throw H.c(P.z("`setTimeout()` not found."))},
eu:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cb(new P.jI(this,a,Date.now(),b),0),a)
else throw H.c(P.z("Periodic timer."))},
$icP:1}
P.jJ.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jI.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.e9(s,o)}q.c=p
r.d.$1(q)}}
P.c5.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.c6.prototype={
gE:function(a){var s=this.c
if(s==null)return this.b
return s.gE(s)},
q:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.q())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.c5){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.f(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.bi(s)
if(o instanceof P.c6){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dd.prototype={
gL:function(a){return new P.c6(this.a())}}
P.fg.prototype={}
P.cM.prototype={}
P.eM.prototype={}
P.cP.prototype={}
P.jM.prototype={}
P.jR.prototype={
$0:function(){var s=H.c(this.a)
s.stack=J.a9(this.b)
throw s}}
P.jB.prototype={
i8:function(a){var s,r,q,p=null
try{if(C.e===$.aE){a.$0()
return}P.or(p,p,this,a)}catch(q){s=H.b_(q)
r=H.kF(q)
P.lR(p,p,this,s,r)}},
i9:function(a,b){var s,r,q,p=null
try{if(C.e===$.aE){a.$1(b)
return}P.os(p,p,this,a,b)}catch(q){s=H.b_(q)
r=H.kF(q)
P.lR(p,p,this,s,r)}},
ia:function(a,b){return this.i9(a,b,t.z)},
hq:function(a){return new P.jC(this,a)},
de:function(a,b){return new P.jD(this,a,b)}}
P.jC.prototype={
$0:function(){return this.a.i8(this.b)}}
P.jD.prototype={
$1:function(a){return this.a.ia(this.b,a)},
$S:function(){return this.c.w("~(0)")}}
P.d1.prototype={
gL:function(a){var s=new P.d2(this,this.r)
s.c=this.e
return s},
gj:function(a){return this.a},
A:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.eD(b)
return r}},
eD:function(a){var s=this.d
if(s==null)return!1
return this.bM(s[this.bJ(a)],a)>=0},
k:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cR(s==null?q.b=P.kt():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cR(r==null?q.c=P.kt():r,b)}else return q.ex(0,b)},
ex:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.kt()
s=q.bJ(b)
r=p[s]
if(r==null)p[s]=[q.bI(b)]
else{if(q.bM(r,b)>=0)return!1
r.push(q.bI(b))}return!0},
M:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.fZ(this.c,b)
else return this.fY(0,b)},
fY:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bJ(b)
r=n[s]
q=o.bM(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.d7(p)
return!0},
cR:function(a,b){if(a[b]!=null)return!1
a[b]=this.bI(b)
return!0},
fZ:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.d7(s)
delete a[b]
return!0},
cS:function(){this.r=1073741823&this.r+1},
bI:function(a){var s,r=this,q=new P.jA(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cS()
return q},
d7:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cS()},
bJ:function(a){return J.a8(a)&1073741823},
bM:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.H(a[r].a,b))return r
return-1}}
P.jA.prototype={}
P.d2.prototype={
gE:function(a){return this.d},
q:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.bn(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.ct.prototype={}
P.cz.prototype={$il:1,$ih:1,$in:1}
P.i.prototype={
gL:function(a){return new H.bx(a,this.gj(a))},
B:function(a,b){return this.h(a,b)},
gdE:function(a){return this.gj(a)===0},
cr:function(a,b){var s,r,q,p,o=this
if(o.gdE(a)){s=J.l4(0,H.aY(a).w("i.E"))
return s}r=o.h(a,0)
q=P.i3(o.gj(a),r,!0,H.aY(a).w("i.E"))
p=1
while(!0){s=o.gj(a)
if(typeof s!=="number")return H.v(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.f(q,p)
q[p]=s;++p}return q},
ie:function(a){return this.cr(a,!0)},
V:function(a,b,c,d,e){var s,r,q,p,o,n
P.iy(b,c,this.gj(a))
s=c-b
if(s===0)return
P.eu(e,"skipCount")
if(H.aY(a).w("n<i.E>").b(d)){r=e
q=d}else{q=H.ne(d,e,null,H.aY(d).w("i.E")).cr(0,!1)
r=0}p=J.aW(q)
o=p.gj(q)
if(typeof o!=="number")return H.v(o)
if(r+s>o)throw H.c(H.mK())
if(r<b)for(n=s-1;n>=0;--n)this.l(a,b+n,p.h(q,r+n))
else for(n=0;n<s;++n)this.l(a,b+n,p.h(q,r+n))},
au:function(a,b,c,d){return this.V(a,b,c,d,0)},
e_:function(a,b,c){this.au(a,b,b+c.length,c)},
i:function(a){return P.kf(a,"[","]")}}
P.cB.prototype={}
P.i6.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.e(a)
r.a=s+": "
r.a+=H.e(b)},
$S:18}
P.U.prototype={
H:function(a,b){var s,r
for(s=J.bi(this.gab(a));s.q();){r=s.gE(s)
b.$2(r,this.h(a,r))}},
gj:function(a){return J.au(this.gab(a))},
i:function(a){return P.l8(a)},
$iN:1}
P.d9.prototype={
a4:function(a,b){var s
for(s=J.bi(b);s.q();)this.k(0,s.gE(s))},
i:function(a){return P.kf(this,"{","}")},
B:function(a,b){var s,r,q,p="index"
P.mv(b,p)
P.eu(b,p)
for(s=P.nu(this,this.r),r=0;s.q();){q=s.d
if(b===r)return q;++r}throw H.c(P.J(b,this,p,null,r))},
$il:1,
$ih:1}
P.d3.prototype={}
P.dK.prototype={}
P.dO.prototype={}
P.hL.prototype={}
P.jf.prototype={}
P.jg.prototype={
hu:function(a){var s,r,q,p=null,o=P.iy(0,p,a.length)
if(o==null)throw H.c(new P.bW(p,p,!1,p,p,"Invalid range"))
s=o-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.jK(r)
if(q.eL(a,0,o)!==o){C.b.bZ(a,o-1)
q.bV()}return new Uint8Array(r.subarray(0,H.nP(0,q.b,r.length)))}}
P.jK.prototype={
bV:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.f(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.f(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.f(r,q)
r[q]=189},
hh:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.f(r,q)
r[q]=240|s>>>18
q=n.b=p+1
if(p>=o)return H.f(r,p)
r[p]=128|s>>>12&63
p=n.b=q+1
if(q>=o)return H.f(r,q)
r[q]=128|s>>>6&63
n.b=p+1
if(p>=o)return H.f(r,p)
r[p]=128|s&63
return!0}else{n.bV()
return!1}},
eL:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.b.bZ(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.b.cQ(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.hh(p,C.b.cQ(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bV()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.f(s,o)
s[o]=192|p>>>6
l.b=m+1
s[m]=128|p&63}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.f(s,o)
s[o]=224|p>>>12
o=l.b=m+1
if(m>=r)return H.f(s,m)
s[m]=128|p>>>6&63
l.b=o+1
if(o>=r)return H.f(s,o)
s[o]=128|p&63}}}return q}}
P.aV.prototype={}
P.al.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.al&&this.a===b.a&&!0},
aW:function(a,b){return C.c.aW(this.a,b.a)},
gR:function(a){var s=this.a
return(s^C.c.bi(s,30))&1073741823},
i:function(a){var s=this,r=P.mF(H.n2(s)),q=P.dQ(H.n0(s)),p=P.dQ(H.mX(s)),o=P.dQ(H.mY(s)),n=P.dQ(H.n_(s)),m=P.dQ(H.n1(s)),l=P.mG(H.mZ(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.W.prototype={}
P.bp.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.bp&&this.a===b.a},
gR:function(a){return C.c.gR(this.a)},
aW:function(a,b){return C.c.aW(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hI(),o=this.a
if(o<0)return"-"+new P.bp(0-o).i(0)
s=p.$1(C.c.a_(o,6e7)%60)
r=p.$1(C.c.a_(o,1e6)%60)
q=new P.hH().$1(o%1e6)
return""+C.c.a_(o,36e8)+":"+H.e(s)+":"+H.e(r)+"."+H.e(q)}}
P.hH.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.hI.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.M.prototype={}
P.dA.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.hO(s)
return"Assertion failed"}}
P.eh.prototype={
i:function(a){return"Throw of null."}}
P.ae.prototype={
gbL:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbK:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+H.e(n),l=q.gbL()+o+m
if(!q.a)return l
s=q.gbK()
r=P.hO(q.b)
return l+s+": "+r}}
P.bW.prototype={
gbL:function(){return"RangeError"},
gbK:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.e(q):""
else if(q==null)s=": Not greater than or equal to "+H.e(r)
else if(q>r)s=": Not in inclusive range "+H.e(r)+".."+H.e(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.e(r)
return s}}
P.dZ.prototype={
gbL:function(){return"RangeError"},
gbK:function(){var s,r=this.b
if(typeof r!=="number")return r.ad()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.e(s)},
gj:function(a){return this.f}}
P.f9.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.f6.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.bz.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dN.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hO(s)+"."}}
P.ek.prototype={
i:function(a){return"Out of Memory"},
$iM:1}
P.cL.prototype={
i:function(a){return"Stack Overflow"},
$iM:1}
P.dP.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.fu.prototype={
i:function(a){return"Exception: "+this.a}}
P.hT.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.b.cE(q,0,75)+"..."
return r+"\n"+q}}
P.hV.prototype={}
P.k.prototype={}
P.h.prototype={
by:function(a,b){return new H.aT(this,b,H.bE(this).w("aT<h.E>"))},
gj:function(a){var s,r=this.gL(this)
for(s=0;r.q();)++s
return s},
gaM:function(a){var s,r=this.gL(this)
if(!r.q())throw H.c(H.l2())
s=r.gE(r)
if(r.q())throw H.c(H.mL())
return s},
B:function(a,b){var s,r,q
P.eu(b,"index")
for(s=this.gL(this),r=0;s.q();){q=s.gE(s)
if(b===r)return q;++r}throw H.c(P.J(b,this,"index",null,r))},
i:function(a){return P.mJ(this,"(",")")}}
P.e_.prototype={}
P.n.prototype={$il:1,$ih:1}
P.N.prototype={}
P.ao.prototype={
gR:function(a){return P.K.prototype.gR.call(C.i,this)},
i:function(a){return"null"}}
P.P.prototype={}
P.K.prototype={constructor:P.K,$iK:1,
n:function(a,b){return this===b},
gR:function(a){return H.cJ(this)},
i:function(a){return"Instance of '"+H.e(H.es(this))+"'"},
toString:function(){return this.i(this)}}
P.kk.prototype={}
P.x.prototype={}
P.bA.prototype={
gj:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.r.prototype={}
W.hm.prototype={
gj:function(a){return a.length}}
W.dy.prototype={
i:function(a){return String(a)}}
W.dz.prototype={
i:function(a){return String(a)}}
W.bH.prototype={$ibH:1}
W.dG.prototype={}
W.bj.prototype={$ibj:1}
W.bl.prototype={$ibl:1}
W.bm.prototype={
cu:function(a,b,c){if(c!=null)return a.getContext(b,P.oG(c))
return a.getContext(b)},
ct:function(a,b){return this.cu(a,b,null)},
$ibm:1}
W.dJ.prototype={
hx:function(a,b,c){var s=P.lW(a.createImageData(b,c))
return s},
i2:function(a,b,c,d){a.putImageData(P.lV(b),c,d)
return}}
W.av.prototype={
gj:function(a){return a.length}}
W.hA.prototype={
gj:function(a){return a.length}}
W.G.prototype={$iG:1}
W.cj.prototype={
gj:function(a){return a.length}}
W.hB.prototype={}
W.ak.prototype={}
W.aG.prototype={}
W.hC.prototype={
gj:function(a){return a.length}}
W.hD.prototype={
gj:function(a){return a.length}}
W.hE.prototype={
gj:function(a){return a.length}}
W.hF.prototype={
i:function(a){return String(a)}}
W.ck.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$il:1,
$iy:1,
$ih:1,
$in:1}
W.cl.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gap(a))+" x "+H.e(this.gal(a))},
n:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.aX(b)
s=a.left==s.gbs(b)&&a.top==s.gbv(b)&&this.gap(a)==s.gap(b)&&this.gal(a)==s.gal(b)}else s=!1
return s},
gR:function(a){return W.lC(J.a8(a.left),J.a8(a.top),J.a8(this.gap(a)),J.a8(this.gal(a)))},
gdf:function(a){return a.bottom},
gal:function(a){return a.height},
gbs:function(a){return a.left},
gcq:function(a){return a.right},
gbv:function(a){return a.top},
gap:function(a){return a.width},
$ia4:1}
W.dS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$il:1,
$iy:1,
$ih:1,
$in:1}
W.hG.prototype={
gj:function(a){return a.length}}
W.fj.prototype={
gdE:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.f(s,b)
return t.h.a(s[b])},
l:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.f(s,b)
this.a.replaceChild(c,s[b])},
k:function(a,b){this.a.appendChild(b)
return b},
gL:function(a){var s=this.ie(this)
return new J.a_(s,s.length)},
V:function(a,b,c,d,e){throw H.c(P.kp(null))},
au:function(a,b,c,d){return this.V(a,b,c,d,0)}}
W.C.prototype={
ghp:function(a){return new W.fq(a)},
gdg:function(a){return new W.fj(a,a.children)},
gdh:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.ad()
if(q<0)q=-q*0
if(typeof p!=="number")return p.ad()
if(p<0)p=-p*0
return new P.a4(s,r,q,p,t.I)},
i:function(a){return a.localName},
ak:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.kZ
if(s==null){s=H.b([],t.o)
r=new W.cI(s)
s.push(W.lA(null))
s.push(W.lG())
$.kZ=r
d=r}else d=s
s=$.kY
if(s==null){s=new W.h9(d)
$.kY=s
c=s}else{s.a=d
c=s}}if($.b1==null){s=document
r=s.implementation.createHTMLDocument("")
$.b1=r
$.kc=r.createRange()
r=$.b1.createElement("base")
t.v.a(r)
r.href=s.baseURI
$.b1.head.appendChild(r)}s=$.b1
if(s.body==null){r=s.createElement("body")
s.body=t.Y.a(r)}s=$.b1
if(t.Y.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.b1.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.a.A(C.U,a.tagName)){$.kc.selectNodeContents(q)
s=$.kc
p=s.createContextualFragment(b)}else{q.innerHTML=b
p=$.b1.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.b1.body)J.kN(q)
c.cv(p)
document.adoptNode(p)
return p},
hw:function(a,b,c){return this.ak(a,b,c,null)},
e0:function(a,b){a.textContent=null
a.appendChild(this.ak(a,b,null,null))},
gdU:function(a){return a.tagName},
$iC:1}
W.hJ.prototype={
$1:function(a){return t.h.b(a)}}
W.j.prototype={$ij:1}
W.d.prototype={
hk:function(a,b,c,d){if(c!=null)this.ey(a,b,c,!1)},
ey:function(a,b,c,d){return a.addEventListener(b,H.cb(c,1),!1)},
$id:1}
W.aw.prototype={$iaw:1}
W.dU.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$il:1,
$iy:1,
$ih:1,
$in:1}
W.dV.prototype={
gj:function(a){return a.length}}
W.dX.prototype={
gj:function(a){return a.length}}
W.ax.prototype={$iax:1}
W.hW.prototype={
gj:function(a){return a.length}}
W.bs.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$il:1,
$iy:1,
$ih:1,
$in:1}
W.bt.prototype={
gdi:function(a){return a.data},
$ibt:1}
W.bN.prototype={$ibN:1}
W.bw.prototype={$ibw:1}
W.i4.prototype={
i:function(a){return String(a)}}
W.iq.prototype={
gj:function(a){return a.length}}
W.e7.prototype={
h:function(a,b){return P.bd(a.get(b))},
H:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bd(s.value[1]))}},
gab:function(a){var s=H.b([],t.s)
this.H(a,new W.ir(s))
return s},
gj:function(a){return a.size},
$iN:1}
W.ir.prototype={
$2:function(a,b){return this.a.push(a)}}
W.e8.prototype={
h:function(a,b){return P.bd(a.get(b))},
H:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bd(s.value[1]))}},
gab:function(a){var s=H.b([],t.s)
this.H(a,new W.is(s))
return s},
gj:function(a){return a.size},
$iN:1}
W.is.prototype={
$2:function(a,b){return this.a.push(a)}}
W.az.prototype={$iaz:1}
W.e9.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$il:1,
$iy:1,
$ih:1,
$in:1}
W.ag.prototype={$iag:1}
W.Z.prototype={
gaM:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.iP("No elements"))
if(r>1)throw H.c(P.iP("More than one element"))
s=s.firstChild
s.toString
return s},
a4:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q)}return},
l:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.f(r,b)
s.replaceChild(c,r[b])},
gL:function(a){var s=this.a.childNodes
return new W.cs(s,s.length)},
V:function(a,b,c,d,e){throw H.c(P.z("Cannot setRange on Node list"))},
au:function(a,b,c,d){return this.V(a,b,c,d,0)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.f(s,b)
return s[b]}}
W.w.prototype={
i3:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
i6:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.mp(s,b,a)}catch(q){H.b_(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.e5(a):s},
h_:function(a,b,c){return a.replaceChild(b,c)},
$iw:1}
W.cH.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$il:1,
$iy:1,
$ih:1,
$in:1}
W.aA.prototype={
gj:function(a){return a.length},
$iaA:1}
W.en.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$il:1,
$iy:1,
$ih:1,
$in:1}
W.ez.prototype={
h:function(a,b){return P.bd(a.get(b))},
H:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bd(s.value[1]))}},
gab:function(a){var s=H.b([],t.s)
this.H(a,new W.iD(s))
return s},
gj:function(a){return a.size},
$iN:1}
W.iD.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eB.prototype={
gj:function(a){return a.length}}
W.ar.prototype={$iar:1}
W.eF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$il:1,
$iy:1,
$ih:1,
$in:1}
W.aB.prototype={$iaB:1}
W.eG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$il:1,
$iy:1,
$ih:1,
$in:1}
W.aC.prototype={
gj:function(a){return a.length},
$iaC:1}
W.eL.prototype={
h:function(a,b){return a.getItem(H.kA(b))},
H:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gab:function(a){var s=H.b([],t.s)
this.H(a,new W.iR(s))
return s},
gj:function(a){return a.length},
$iN:1}
W.iR.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ai.prototype={$iai:1}
W.b6.prototype={$ib6:1}
W.cO.prototype={
ak:function(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.bA(a,b,c,d)
s=W.mH("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
s.toString
new W.Z(r).a4(0,new W.Z(s))
return r}}
W.eO.prototype={
ak:function(a,b,c,d){var s,r,q,p
if("createContextualFragment" in window.Range.prototype)return this.bA(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.A.ak(s.createElement("table"),b,c,d)
s.toString
s=new W.Z(s)
q=s.gaM(s)
q.toString
s=new W.Z(q)
p=s.gaM(s)
r.toString
p.toString
new W.Z(r).a4(0,new W.Z(p))
return r}}
W.eP.prototype={
ak:function(a,b,c,d){var s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bA(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.A.ak(s.createElement("table"),b,c,d)
s.toString
s=new W.Z(s)
q=s.gaM(s)
r.toString
q.toString
new W.Z(r).a4(0,new W.Z(q))
return r}}
W.bZ.prototype={$ibZ:1}
W.as.prototype={$ias:1}
W.ac.prototype={$iac:1}
W.eR.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$il:1,
$iy:1,
$ih:1,
$in:1}
W.eS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$il:1,
$iy:1,
$ih:1,
$in:1}
W.j2.prototype={
gj:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.bC.prototype={$ibC:1}
W.eY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$il:1,
$iy:1,
$ih:1,
$in:1}
W.j5.prototype={
gj:function(a){return a.length}}
W.aS.prototype={}
W.je.prototype={
i:function(a){return String(a)}}
W.fd.prototype={
gj:function(a){return a.length}}
W.b8.prototype={
ghA:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.z("deltaY is not supported"))},
ghz:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.z("deltaX is not supported"))},
$ib8:1}
W.c2.prototype={
h0:function(a,b){return a.requestAnimationFrame(H.cb(b,1))},
eK:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.c3.prototype={$ic3:1}
W.fk.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$il:1,
$iy:1,
$ih:1,
$in:1}
W.d0.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
n:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.aX(b)
s=a.left==s.gbs(b)&&a.top==s.gbv(b)&&a.width==s.gap(b)&&a.height==s.gal(b)}else s=!1
return s},
gR:function(a){return W.lC(J.a8(a.left),J.a8(a.top),J.a8(a.width),J.a8(a.height))},
gal:function(a){return a.height},
gap:function(a){return a.width}}
W.fy.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$il:1,
$iy:1,
$ih:1,
$in:1}
W.d4.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$il:1,
$iy:1,
$ih:1,
$in:1}
W.fS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$il:1,
$iy:1,
$ih:1,
$in:1}
W.fZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$il:1,
$iy:1,
$ih:1,
$in:1}
W.fh.prototype={
H:function(a,b){var s,r,q,p,o
for(s=this.gab(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
b.$2(o,q.getAttribute(o))}},
gab:function(a){var s,r,q,p,o=this.a.attributes,n=H.b([],t.s)
for(s=o.length,r=t.gH,q=0;q<s;++q){if(q>=o.length)return H.f(o,q)
p=r.a(o[q])
if(p.namespaceURI==null)n.push(p.name)}return n}}
W.fq.prototype={
h:function(a,b){return this.a.getAttribute(H.kA(b))},
gj:function(a){return this.gab(this).length}}
W.kd.prototype={}
W.ft.prototype={}
W.jx.prototype={
$1:function(a){return this.a.$1(a)}}
W.ks.prototype={}
W.c4.prototype={
ef:function(a){var s
if($.fz.a===0){for(s=0;s<262;++s)$.fz.l(0,C.T[s],W.oO())
for(s=0;s<12;++s)$.fz.l(0,C.l[s],W.oP())}},
aS:function(a){return $.mn().A(0,W.cn(a))},
ax:function(a,b,c){var s=$.fz.h(0,H.e(W.cn(a))+"::"+b)
if(s==null)s=$.fz.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iah:1}
W.I.prototype={
gL:function(a){return new W.cs(a,this.gj(a))},
V:function(a,b,c,d,e){throw H.c(P.z("Cannot setRange on immutable List."))},
au:function(a,b,c,d){return this.V(a,b,c,d,0)}}
W.cI.prototype={
aS:function(a){return C.a.d9(this.a,new W.iv(a))},
ax:function(a,b,c){return C.a.d9(this.a,new W.iu(a,b,c))},
$iah:1}
W.iv.prototype={
$1:function(a){return a.aS(this.a)}}
W.iu.prototype={
$1:function(a){return a.ax(this.a,this.b,this.c)}}
W.da.prototype={
eq:function(a,b,c,d){var s,r,q
this.a.a4(0,c)
s=b.by(0,new W.jF())
r=b.by(0,new W.jG())
this.b.a4(0,s)
q=this.c
q.a4(0,C.V)
q.a4(0,r)},
aS:function(a){return this.a.A(0,W.cn(a))},
ax:function(a,b,c){var s=this,r=W.cn(a),q=s.c
if(q.A(0,H.e(r)+"::"+b))return s.d.hn(c)
else if(q.A(0,"*::"+b))return s.d.hn(c)
else{q=s.b
if(q.A(0,H.e(r)+"::"+b))return!0
else if(q.A(0,"*::"+b))return!0
else if(q.A(0,H.e(r)+"::*"))return!0
else if(q.A(0,"*::*"))return!0}return!1},
$iah:1}
W.jF.prototype={
$1:function(a){return!C.a.A(C.l,a)}}
W.jG.prototype={
$1:function(a){return C.a.A(C.l,a)}}
W.h0.prototype={
ax:function(a,b,c){if(this.e8(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.A(0,b)
return!1}}
W.jH.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.h_.prototype={
aS:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cn(a)==="foreignObject")return!1
if(s)return!0
return!1},
ax:function(a,b,c){if(b==="is"||C.b.e3(b,"on"))return!1
return this.aS(a)},
$iah:1}
W.cs.prototype={
q:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.dv(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gE:function(a){return this.d}}
W.ah.prototype={}
W.jE.prototype={}
W.h9.prototype={
cv:function(a){var s=this,r=new W.jL(s)
s.b=!1
r.$2(a,null)
for(;s.b;){s.b=!1
r.$2(a,null)}},
b5:function(a,b){var s=this.b=!0
if(b!=null?b!==a.parentNode:s)J.kN(a)
else b.removeChild(a)},
h5:function(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.ms(a)
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
n=s?!0:!(a.attributes instanceof NamedNodeMap)}catch(p){H.b_(p)}r="element unprintable"
try{r=J.a9(a)}catch(p){H.b_(p)}try{q=W.cn(a)
this.h4(a,b,n,r,q,m,l)}catch(p){if(H.b_(p) instanceof P.ae)throw p
else{this.b5(a,b)
window
o="Removing corrupted element "+H.e(r)
if(typeof console!="undefined")window.console.warn(o)}}},
h4:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.b5(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.aS(a)){m.b5(a,b)
window
s="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.ax(a,"is",g)){m.b5(a,b)
window
s="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}s=f.gab(f)
r=H.b(s.slice(0),H.lM(s).w("t<1>"))
for(q=f.gab(f).length-1,s=f.a;q>=0;--q){if(q>=r.length)return H.f(r,q)
p=r[q]
o=m.a
n=J.mu(p)
H.kA(p)
if(!o.ax(a,n,s.getAttribute(p))){window
o="Removing disallowed attribute <"+H.e(e)+" "+p+'="'+H.e(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.aW.b(a))m.cv(a.content)}}
W.jL.prototype={
$2:function(a,b){var s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.h5(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.b5(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){q=r.nextSibling
p=s
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.iP("Corrupt HTML")
throw H.c(q)}}catch(o){H.b_(o)
q=s
n.b=!0
p=q.parentNode
p=a==null?p!=null:a!==p
if(p){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}}}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fv.prototype={}
W.fw.prototype={}
W.fA.prototype={}
W.fB.prototype={}
W.fE.prototype={}
W.fF.prototype={}
W.fG.prototype={}
W.fH.prototype={}
W.fI.prototype={}
W.fJ.prototype={}
W.fM.prototype={}
W.fN.prototype={}
W.fP.prototype={}
W.db.prototype={}
W.dc.prototype={}
W.fQ.prototype={}
W.fR.prototype={}
W.fW.prototype={}
W.h1.prototype={}
W.h2.prototype={}
W.de.prototype={}
W.df.prototype={}
W.h3.prototype={}
W.h4.prototype={}
W.ha.prototype={}
W.hb.prototype={}
W.hc.prototype={}
W.hd.prototype={}
W.he.prototype={}
W.hf.prototype={}
W.hg.prototype={}
W.hh.prototype={}
W.hi.prototype={}
W.hj.prototype={}
P.di.prototype={$ibt:1,
gdi:function(a){return this.a}}
P.jS.prototype={
$2:function(a,b){this.a[a]=b},
$S:19}
P.dW.prototype={
gbh:function(){var s=this.b,r=H.bE(s)
return new H.aL(new H.aT(s,new P.hR(),r.w("aT<i.E>")),new P.hS(),r.w("aL<i.E,C>"))},
l:function(a,b,c){var s=this.gbh()
J.mt(s.b.$1(J.dx(s.a,b)),c)},
k:function(a,b){this.b.a.appendChild(b)},
V:function(a,b,c,d,e){throw H.c(P.z("Cannot setRange on filtered list"))},
au:function(a,b,c,d){return this.V(a,b,c,d,0)},
gj:function(a){return J.au(this.gbh().a)},
h:function(a,b){var s=this.gbh()
return s.b.$1(J.dx(s.a,b))},
gL:function(a){var s=P.kj(this.gbh(),!1,t.h)
return new J.a_(s,s.length)}}
P.hR.prototype={
$1:function(a){return t.h.b(a)}}
P.hS.prototype={
$1:function(a){return t.h.a(a)}}
P.fO.prototype={
gcq:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.v(r)
return this.$ti.c.a(s+r)},
gdf:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.v(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.e(s.a)+", "+H.e(s.b)+") "+H.e(s.c)+" x "+H.e(s.d)},
n:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.I.b(b)){s=n.a
r=J.aX(b)
if(s==r.gbs(b)){q=n.b
if(q==r.gbv(b)){p=n.c
if(typeof s!=="number")return s.v()
if(typeof p!=="number")return H.v(p)
o=n.$ti.c
if(o.a(s+p)===r.gcq(b)){s=n.d
if(typeof q!=="number")return q.v()
if(typeof s!=="number")return H.v(s)
r=o.a(q+s)===r.gdf(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gR:function(a){var s,r=this,q=r.a,p=J.a8(q),o=r.b,n=J.a8(o),m=r.c
if(typeof q!=="number")return q.v()
if(typeof m!=="number")return H.v(m)
s=r.$ti.c
m=C.c.gR(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.v()
if(typeof q!=="number")return H.v(q)
q=C.c.gR(s.a(o+q))
return P.nt(P.jz(P.jz(P.jz(P.jz(0,p),n),m),q))}}
P.a4.prototype={
gbs:function(a){return this.a},
gbv:function(a){return this.b},
gap:function(a){return this.c},
gal:function(a){return this.d}}
P.aK.prototype={$iaK:1}
P.e2.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.aO.prototype={$iaO:1}
P.ei.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.ix.prototype={
gj:function(a){return a.length}}
P.bY.prototype={$ibY:1}
P.eN.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.m.prototype={
gdg:function(a){return new P.dW(a,new W.Z(a))},
ak:function(a,b,c,d){var s,r,q,p,o,n=H.b([],t.o)
n.push(W.lA(null))
n.push(W.lG())
n.push(new W.h_())
c=new W.h9(new W.cI(n))
s='<svg version="1.1">'+b+"</svg>"
n=document
r=n.body
r.toString
q=C.n.hw(r,s,c)
p=n.createDocumentFragment()
q.toString
n=new W.Z(q)
o=n.gaM(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
$im:1}
P.aQ.prototype={$iaQ:1}
P.eZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.fC.prototype={}
P.fD.prototype={}
P.fK.prototype={}
P.fL.prototype={}
P.fX.prototype={}
P.fY.prototype={}
P.h5.prototype={}
P.h6.prototype={}
P.hq.prototype={
gj:function(a){return a.length}}
P.dC.prototype={
h:function(a,b){return P.bd(a.get(b))},
H:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bd(s.value[1]))}},
gab:function(a){var s=H.b([],t.s)
this.H(a,new P.hr(s))
return s},
gj:function(a){return a.size},
$iN:1}
P.hr.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dD.prototype={
gj:function(a){return a.length}}
P.b0.prototype={}
P.ej.prototype={
gj:function(a){return a.length}}
P.fi.prototype={}
P.ey.prototype={
dV:function(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&H.c8(g)){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}if(t.u.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,P.lV(g))
return}if(t.fS.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.k7("Incorrect number or type of arguments"))},
ib:function(a,b,c,d,e,f,g){return this.dV(a,b,c,d,e,f,g,null,null,null)}}
P.eJ.prototype={
gj:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
s=P.bd(a.item(b))
s.toString
return s},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.fT.prototype={}
P.fU.prototype={}
K.hn.prototype={
aY:function(a,b){return!0},
i:function(a){return"all"}}
K.dY.prototype={
aY:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)if(s[q].aY(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.i7.prototype={}
K.b3.prototype={
aY:function(a,b){return!this.e4(0,b)},
i:function(a){return"!["+this.cF(0)+"]"}}
K.iE.prototype={
ec:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.q("May not create a Set with zero characters."))
s=new H.B(t.E)
for(r=new H.bx(a,a.gj(a));r.q();){q=r.d
s.l(0,q,!0)}p=P.kj(new H.am(s,t.fU),!0,t.e)
C.a.e2(p)
this.a=p},
aY:function(a,b){return C.a.A(this.a,b)},
i:function(a){return P.km(this.a)}}
L.eK.prototype={
p:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.f_(this.a.K(0,b))
p.a=H.b([],t.L)
p.c=!1
this.c.push(p)
return p},
hG:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.aY(0,a))return p}return null},
i:function(a){return this.b},
d6:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.A(0,l))m+=" (consume)"
for(l=n.d.c,l=new H.am(l,H.bE(l).w("am<1>")),l=l.gL(l);l.q();){r=l.d
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.e(r)+" => ["+H.e(q)+"]")
m=s.c.A(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.o)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.eW.prototype={
i:function(a){var s=H.m5(this.b,"\n","\\n"),r=H.m5(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.eX.prototype={
i:function(a){return this.b}}
L.j3.prototype={
K:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.eK(this,b)
s.c=H.b([],t.br)
this.a.l(0,b,s)}return s},
ba:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.eX(a)
s.c=new H.B(t.dO)
this.b.l(0,a,s)}return s},
dX:function(a){return this.ih(a)},
ih:function(a){var s=this
return P.o3(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$dX(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.V
b=H.b([],c)
a0=H.b([],c)
a1=H.b([],c)
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a1.length!==0)j=C.a.i4(a1,0)
else{if(!r.q()){q=3
break}i=r.d
j=i}a0.push(j);++m
h=d.hG(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.km(a0)
throw H.c(P.q("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!a0.fixed$length)H.p(P.z("removeRange"))
P.iy(0,k,a0.length)
a0.splice(0,k-0)
C.a.a4(a1,a0)
a0=H.b([],c)
b=H.b([],c)
d=s.d
q=!s.c.A(0,n.a)?7:8
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
if(d.d!=null){g=P.km(b)
f=d.d
e=f.c.h(0,g)
n=new L.eW(e==null?f.b:e,g,m)
k=a0.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.A(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.nr()
case 1:return P.ns(o)}}},t.bc)},
i:function(a){var s,r=new P.bA(""),q=this.d
if(q!=null)r.a=q.d6()+"\n"
for(q=this.a,q=q.gij(q),q=new H.cC(J.bi(q.a),q.b);q.q();){s=q.a
if(s!=this.d)r.a+=s.d6()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.f_.prototype={
i:function(a){return this.b.b+": "+this.cF(0)}}
O.Q.prototype={
bc:function(a){this.a=H.b([],a.w("t<0*>"))
this.c=this.b=null},
cz:function(a,b,c){this.b=b
this.c=a},
aL:function(a,b){return this.cz(a,null,b)},
aw:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
cX:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gj:function(a){return this.a.length},
gL:function(a){var s=this.a
return new J.a_(s,s.length)},
B:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.f(s,b)
return s[b]},
k:function(a,b){var s,r,q=this,p=H.bE(q).w("t<Q.T*>")
if(q.aw(H.b([b],p))){s=q.a
r=s.length
s.push(b)
q.cX(r,H.b([b],p))}},
a4:function(a,b){var s,r
if(this.aw(b)){s=this.a
r=s.length
C.a.a4(s,b)
this.cX(r,b)}},
$ih:1}
O.cF.prototype={
gj:function(a){return this.a.length},
gm:function(){var s=this.b
return s==null?this.b=D.D():s},
aN:function(){var s=this.b
if(s!=null)s.u(null)},
gS:function(a){var s=this.a
if(s.length>0)return C.a.gce(s)
else return V.by()},
bt:function(a){var s=this.a
if(a==null)s.push(V.by())
else s.push(a)
this.aN()},
aI:function(){var s=this.a
if(s.length>0){s.pop()
this.aN()}}}
E.ht.prototype={}
E.bq.prototype={
cO:function(){var s,r
this.e=null
for(s=this.y.a,s=new J.a_(s,s.length);s.q();){r=s.d
if(r.f==null)r.cO()}},
scB:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gm().M(0,q.gdM())
s=q.c
if(s!=null)s.gm().k(0,q.gdM())
r=new D.u("shape",p,q.c)
r.b=!0
q.as(r)}},
saK:function(a){var s,r,q=this,p=q.f
if(p!=a){if(p!=null)p.gm().M(0,q.gdO())
s=q.f
q.f=a
if(a!=null)a.gm().k(0,q.gdO())
q.cO()
r=new D.u("technique",s,q.f)
r.b=!0
q.as(r)}},
scm:function(a){var s,r,q=this
if(!J.H(q.r,a)){s=q.r
if(s!=null)s.gm().M(0,q.gdK())
if(a!=null)a.gm().k(0,q.gdK())
q.r=a
r=new D.u("mover",s,a)
r.b=!0
q.as(r)}},
a7:function(a,b){var s,r,q=this,p=q.r,o=p!=null?p.aA(0,b,q):null
if(!J.H(o,q.x)){s=q.x
q.x=o
r=new D.u("matrix",s,o)
r.b=!0
q.as(r)}p=q.f
if(p!=null)p.a7(0,b)
for(p=q.y.a,p=new J.a_(p,p.length);p.q();)p.d.a7(0,b)},
a6:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.gS(q))
else o.push(p.t(0,q.gS(q)))
q.aN()
a.cp(r.f)
q=a.dy
s=(q&&C.a).gce(q)
if(s!=null&&r.d!=null)s.bu(a,r)
for(q=r.y.a,q=new J.a_(q,q.length);q.q();)q.d.a6(a)
a.co()
a.dx.aI()},
as:function(a){var s=this.z
if(s!=null)s.u(a)},
a5:function(){return this.as(null)},
dN:function(a){this.e=null
this.as(a)},
hS:function(){return this.dN(null)},
dP:function(a){this.as(a)},
hT:function(){return this.dP(null)},
dL:function(a){this.as(a)},
hR:function(){return this.dL(null)},
dJ:function(a){this.as(a)},
hO:function(){return this.dJ(null)},
hN:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gdI(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.br()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}this.a5()},
hQ:function(a,b){var s,r
for(s=b.gL(b),r=this.gdI();s.q();)s.gE(s).gm().M(0,r)
this.a5()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bI.prototype={
i:function(a){return this.b}}
E.bU.prototype={
i:function(a){return this.b}}
E.fr.prototype={}
E.iz.prototype={
eb:function(a,b){var s,r,q=this
q.d=q.c=512
q.e=0
q.x=q.r=q.f=new P.al(Date.now(),!1)
q.y=0
q.cx=q.ch=q.Q=q.z=null
s=new O.cF()
r=t.h8
s.a=H.b([],r)
s.gm().k(0,new E.iA(q))
q.cy=s
s=new O.cF()
s.a=H.b([],r)
s.gm().k(0,new E.iB(q))
q.db=s
s=new O.cF()
s.a=H.b([],r)
s.gm().k(0,new E.iC(q))
q.dx=s
s=H.b([],t.fG)
q.dy=s
s.push(null)
q.fr=new H.B(t.h9)},
gi1:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.gS(q)
s=r.db
s=r.z=q.t(0,s.gS(s))
q=s}return q},
gdR:function(){var s,r=this,q=r.ch
if(q==null){q=r.gi1()
s=r.dx
s=r.ch=q.t(0,s.gS(s))
q=s}return q},
cp:function(a){var s=this.dy
s.push(a==null?(s&&C.a).gce(s):a)},
co:function(){var s=this.dy
if(s.length>1)s.pop()},
bl:function(a){var s=a.b
if(s.length===0)throw H.c(P.q("May not cache a shader with no name."))
if(this.fr.ht(0,s))throw H.c(P.q('Shader cache already contains a shader by the name "'+s+'".'))
this.fr.l(0,s,a)}}
E.iA.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.iB.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.iC.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.eV.prototype={
cL:function(a){this.dS()},
cK:function(){return this.cL(null)},
ghH:function(){var s,r=this,q=Date.now(),p=C.c.a_(P.kX(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.al(q,!1)
return s/p},
d1:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.t()
if(typeof p!=="number")return H.v(p)
s=C.d.aX(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.t()
r=C.d.aX(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.lr(C.j,q.gi7())}},
dS:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.C.eK(s)
r=W.lS(new E.j1(this),t.H)
r.toString
C.C.h0(s,r)}},
i5:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.d1()
q=n.z
if(q!=null)q.u(null)
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.al(p,!1)
q.y=P.kX(p-q.r.a).a*0.000001
p=q.cy
C.a.sj(p.a,0)
p.aN()
p=q.db
C.a.sj(p.a,0)
p.aN()
p=q.dx
C.a.sj(p.a,0)
p.aN()
p=q.dy
p.toString
C.a.sj(p,0)
q.dy.push(null)
m.a6(n.e)}}catch(o){s=H.b_(o)
r=H.kF(o)
P.kJ("Error: "+H.e(s))
P.kJ("Stack: "+H.e(r))
throw H.c(s)}}}
E.j1.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.i5()}}}
Z.fe.prototype={}
Z.dH.prototype={
O:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.b_(q)
r=P.q('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.e(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.e(s.e)+"]"}}
Z.c1.prototype={}
Z.bk.prototype={
ar:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
O:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].O(a)},
ac:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
a6:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.f(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=t.i,n=H.b([],o)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)n.push(s[q].i(0))
p=H.b([],o)
for(o=this.c,s=o.length,q=0;q<s;++q)p.push(J.a9(o[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.p(n,", ")+"\nAttrs:   "+C.a.p(p,", ")}}
Z.bO.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.es(this.c))+"'")+"]"}}
Z.b7.prototype={
gcC:function(a){var s=this.a,r=(s&$.a7().a)!==0?3:0
if((s&$.bg().a)!==0)r+=3
if((s&$.bf().a)!==0)r+=3
if((s&$.bG().a)!==0)r+=2
if((s&$.bh().a)!==0)r+=3
if((s&$.dt().a)!==0)r+=3
if((s&$.du().a)!==0)r+=4
if((s&$.ce().a)!==0)++r
return(s&$.be().a)!==0?r+4:r},
ho:function(a){var s,r=$.a7(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bg()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bf()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bG()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bh()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dt()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.du()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ce()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.be()
if((q&r.a)!==0)if(s===a)return r
return $.mm()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b7))return!1
return this.a===b.a},
i:function(a){var s=H.b([],t.i),r=this.a
if((r&$.a7().a)!==0)s.push("Pos")
if((r&$.bg().a)!==0)s.push("Norm")
if((r&$.bf().a)!==0)s.push("Binm")
if((r&$.bG().a)!==0)s.push("Txt2D")
if((r&$.bh().a)!==0)s.push("TxtCube")
if((r&$.dt().a)!==0)s.push("Clr3")
if((r&$.du().a)!==0)s.push("Clr4")
if((r&$.ce().a)!==0)s.push("Weight")
if((r&$.be().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.p(s,"|")}}
D.hx.prototype={}
D.br.prototype={
k:function(a,b){var s=this.a;(s==null?this.a=H.b([],t.f):s).push(b)},
M:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.a.A(q,b)
if(q===!0){q=r.a
s=(q&&C.a).M(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.a.A(q,b)
if(q===!0){q=r.b
s=(q&&C.a).M(q,b)||s}return s},
u:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.R()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.a.H(P.kj(s,!0,t.dm),new D.hP(o))
s=p.b
if(s!=null){p.b=H.b([],t.f)
C.a.H(s,new D.hQ(o))}return!0},
c4:function(){return this.u(null)},
az:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.u(s)}}}}
D.hP.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.hQ.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.R.prototype={}
D.aH.prototype={}
D.aI.prototype={}
D.u.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.dI.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dI))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.e1.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e1))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.i1.prototype={
hY:function(a){this.c=a.b
this.d.k(0,a.a)
return!1},
hU:function(a){this.c=a.b
this.d.M(0,a.a)
return!1}}
X.cA.prototype={}
X.i5.prototype={
b3:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.t()
s=b.b
r=o.ch
if(typeof s!=="number")return s.t()
q=new V.ab(m.a+l*k,m.b+s*r)
r=o.a.gaU()
p=new X.bQ(a,V.b4(),o.x,r,q)
p.b=!0
o.z=new P.al(n,!1)
o.x=q
return p},
cn:function(a,b){this.r=a.a
return!1},
b8:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.dZ()
if(typeof s!=="number")return s.aq()
this.r=(s&~r)>>>0
return!1},
b7:function(a,b){var s=this.d
if(s==null)return!1
s.u(this.b3(a,b))
return!0},
hZ:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaU()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.t()
o=a.b
n=m.cy
if(typeof o!=="number")return o.t()
r=new X.bR(new V.a5(q*p,o*n),s,r)
r.b=!0
l.u(r)
return!0},
fv:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cA(c,p.a.gaU(),b)
q.b=!0
r.u(q)
p.y=new P.al(s,!1)
p.x=V.b4()}}
X.af.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.af))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bQ.prototype={}
X.it.prototype={
bN:function(a,b,c){var s=this,r=new P.al(Date.now(),!1),q=s.a.gaU(),p=new X.bQ(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
cn:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.u(this.bN(a,b,!0))
return!0},
b8:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.dZ()
if(typeof r!=="number")return r.aq()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.u(s.bN(a,b,!0))
return!0},
b7:function(a,b){var s=this.d
if(s==null)return!1
s.u(this.bN(a,b,!1))
return!0},
i_:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaU()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.t()
p=a.b
o=n.ch
if(typeof p!=="number")return p.t()
s=new X.bR(new V.a5(r*q,p*o),s,b)
s.b=!0
m.u(s)
return!0},
gc3:function(){var s=this.b
return s==null?this.b=D.D():s},
gbx:function(){var s=this.c
return s==null?this.c=D.D():s},
gaZ:function(){var s=this.d
return s==null?this.d=D.D():s}}
X.bR.prototype={}
X.eq.prototype={}
X.cQ.prototype={}
X.j4.prototype={
b3:function(a,b){var s=this,r=new P.al(Date.now(),!1),q=a.length>0?a[0]:V.b4(),p=s.a.gaU(),o=new X.cQ(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
hX:function(a){var s=this.b
if(s==null)return!1
s.u(this.b3(a,!0))
return!0},
hV:function(a){var s=this.c
if(s==null)return!1
s.u(this.b3(a,!0))
return!0},
hW:function(a){var s=this.d
if(s==null)return!1
s.u(this.b3(a,!1))
return!0},
gcD:function(a){var s=this.b
return s==null?this.b=D.D():s},
gdl:function(a){var s=this.c
return s==null?this.c=D.D():s},
gaZ:function(){var s=this.d
return s==null?this.d=D.D():s}}
X.fa.prototype={
gaU:function(){var s=this.a,r=C.f.gdh(s).c
r.toString
s=C.f.gdh(s).d
s.toString
return V.ew(0,0,r,s)},
cU:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.e1(s,new X.af(r,a.altKey,a.shiftKey))},
aR:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.af(r,a.altKey,a.shiftKey)},
bU:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.af(r,a.altKey,a.shiftKey)},
aE:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.a2()
if(typeof o!=="number")return H.v(o)
s=r.top
if(typeof p!=="number")return p.a2()
if(typeof s!=="number")return H.v(s)
return new V.ab(q-o,p-s)},
b4:function(a){return new V.a5(a.movementX,a.movementY)},
bR:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=H.b([],t.cS)
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=C.d.U(p.pageX)
C.d.U(p.pageY)
n=k.left
if(typeof n!=="number")return H.v(n)
C.d.U(p.pageX)
m=C.d.U(p.pageY)
l=k.top
if(typeof l!=="number")return H.v(l)
j.push(new V.ab(o-n,m-l))}return j},
aC:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.dI(s,new X.af(r,a.altKey,a.shiftKey))},
bO:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.a2()
if(typeof n!=="number")return H.v(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.a2()
if(typeof p!=="number")return H.v(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.v(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.v(p)
p=r<p}else p=!1
return p},
fo:function(a){this.f=!0},
f8:function(a){this.f=!1},
fe:function(a){if(this.f&&this.bO(a))a.preventDefault()},
ft:function(a){var s
if(!this.f)return
s=this.cU(a)
this.b.hY(s)},
fq:function(a){var s
if(!this.f)return
s=this.cU(a)
this.b.hU(s)},
fz:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aR(a)
if(p.x){s=p.aC(a)
r=p.b4(a)
if(p.d.cn(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.aC(a)
q=p.aE(a)
if(p.c.cn(s,q))a.preventDefault()},
fD:function(a){var s,r,q,p=this
p.aR(a)
s=p.aC(a)
if(p.x){r=p.b4(a)
if(p.d.b8(s,r))a.preventDefault()
return}if(p.r)return
q=p.aE(a)
if(p.c.b8(s,q))a.preventDefault()},
fi:function(a){var s,r,q,p=this
if(!p.bO(a)){p.aR(a)
s=p.aC(a)
if(p.x){r=p.b4(a)
if(p.d.b8(s,r))a.preventDefault()
return}if(p.r)return
q=p.aE(a)
if(p.c.b8(s,q))a.preventDefault()}},
fB:function(a){var s,r,q,p=this
p.aR(a)
s=p.aC(a)
if(p.x){r=p.b4(a)
if(p.d.b7(s,r))a.preventDefault()
return}if(p.r)return
q=p.aE(a)
if(p.c.b7(s,q))a.preventDefault()},
fg:function(a){var s,r,q,p=this
if(!p.bO(a)){p.aR(a)
s=p.aC(a)
if(p.x){r=p.b4(a)
if(p.d.b7(s,r))a.preventDefault()
return}if(p.r)return
q=p.aE(a)
if(p.c.b7(s,q))a.preventDefault()}},
fF:function(a){var s,r,q=this
q.aR(a)
s=new V.a5((a&&C.B).ghz(a),C.B.ghA(a)).t(0,q.Q)
if(q.x){if(q.d.hZ(s))a.preventDefault()
return}if(q.r)return
r=q.aE(a)
if(q.c.i_(s,r))a.preventDefault()},
fH:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aC(q.y)
r=q.aE(q.y)
q.d.fv(s,r,p)}},
fX:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bU(a)
s=r.bR(a)
if(r.e.hX(s))a.preventDefault()},
fT:function(a){var s
this.bU(a)
s=this.bR(a)
if(this.e.hV(s))a.preventDefault()},
fV:function(a){var s
this.bU(a)
s=this.bR(a)
if(this.e.hW(s))a.preventDefault()}}
D.dE.prototype={$iT:1}
D.bo.prototype={
aB:function(a){var s=this.r
if(s!=null)s.u(a)},
eh:function(){return this.aB(null)},
$iT:1}
D.T.prototype={}
D.cx.prototype={
aB:function(a){var s=this.y
if(s!=null)s.u(a)},
cZ:function(a){var s=this.z
if(s!=null)s.u(a)},
fu:function(){return this.cZ(null)},
fJ:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(q==null||this.eE(q))return!1}return!0},
f2:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gcY(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o instanceof D.bo)this.f.push(o)
n=o.r
if(n==null){n=new D.br()
n.d=0
o.r=n}m=n.a;(m==null?n.a=H.b([],q):m).push(r)}s=new D.aH()
s.b=!0
this.aB(s)},
fN:function(a,b){var s,r,q
for(s=b.gL(b),r=this.gcY();s.q();){q=s.gE(s)
C.a.M(this.e,q)
q.gm().M(0,r)}s=new D.aI()
s.b=!0
this.aB(s)},
eE:function(a){var s=C.a.A(this.f,a)
return s}}
D.ep.prototype={$iT:1}
D.eH.prototype={$iT:1}
V.L.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.L))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.a0.prototype={
ii:function(){var s=this
return new V.a0(Math.floor(s.a*255)/255,Math.floor(s.b*255)/255,Math.floor(s.c*255)/255,Math.floor(s.d*255)/255)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a0))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.F(s.a,3,0)+", "+V.F(s.b,3,0)+", "+V.F(s.c,3,0)+", "+V.F(s.d,3,0)+"]"}}
V.hN.prototype={}
V.e6.prototype={
a3:function(a,b){var s=this,r=H.b([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.m)
return r},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.e6))return!1
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
i:function(a){var s,r,q,p,o=this,n=t.m,m=V.cd(H.b([o.a,o.d,o.r],n),3,0),l=V.cd(H.b([o.b,o.e,o.x],n),3,0),k=V.cd(H.b([o.c,o.f,o.y],n),3,0)
n=m.length
if(0>=n)return H.f(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.f(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.f(k,0)
s=s+k[0]+",\n"
if(1>=n)return H.f(m,1)
p=" "+m[1]+", "
if(1>=r)return H.f(l,1)
p=p+l[1]+", "
if(1>=q)return H.f(k,1)
p=s+(p+k[1]+",\n")
if(2>=n)return H.f(m,2)
n=" "+m[2]+", "
if(2>=r)return H.f(l,2)
n=n+l[2]+", "
if(2>=q)return H.f(k,2)
return p+(n+k[2]+"]")}}
V.an.prototype={
a3:function(a,b){var s=this,r=H.b([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.m)
return r},
cd:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.A().toString
if(Math.abs(b3-0)<1e-9)return V.by()
s=1/b3
r=-l
q=-a2
return V.aN((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
t:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aN(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bw:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.E(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bb:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.Y(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.an))return!1
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
i:function(a){return this.I()},
D:function(a){var s,r,q,p,o,n=this,m=t.m,l=V.cd(H.b([n.a,n.e,n.y,n.cx],m),3,0),k=V.cd(H.b([n.b,n.f,n.z,n.cy],m),3,0),j=V.cd(H.b([n.c,n.r,n.Q,n.db],m),3,0),i=V.cd(H.b([n.d,n.x,n.ch,n.dx],m),3,0)
m=l.length
if(0>=m)return H.f(l,0)
s="["+l[0]+", "
r=k.length
if(0>=r)return H.f(k,0)
s=s+k[0]+", "
q=j.length
if(0>=q)return H.f(j,0)
s=s+j[0]+", "
p=i.length
if(0>=p)return H.f(i,0)
s=s+i[0]+",\n"
o=a+" "
if(1>=m)return H.f(l,1)
o=o+l[1]+", "
if(1>=r)return H.f(k,1)
o=o+k[1]+", "
if(1>=q)return H.f(j,1)
o=o+j[1]+", "
if(1>=p)return H.f(i,1)
o=s+(o+i[1]+",\n")
s=a+" "
if(2>=m)return H.f(l,2)
s=s+l[2]+", "
if(2>=r)return H.f(k,2)
s=s+k[2]+", "
if(2>=q)return H.f(j,2)
s=s+j[2]+", "
if(2>=p)return H.f(i,2)
s=o+(s+i[2]+",\n")
o=a+" "
if(3>=m)return H.f(l,3)
o=o+l[3]+", "
if(3>=r)return H.f(k,3)
o=o+k[3]+", "
if(3>=q)return H.f(j,3)
o=o+j[3]+", "
if(3>=p)return H.f(i,3)
return s+(o+i[3]+"]")},
I:function(){return this.D("")}}
V.ab.prototype={
X:function(a){return new V.a5(a.a-this.a,a.b-this.b)},
n:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.Y.prototype={
a2:function(a,b){return new V.Y(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.Y))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.b5.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.b5))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.F(s.a,3,0)+", "+V.F(s.b,3,0)+", "+V.F(s.c,3,0)+", "+V.F(s.d,3,0)+"]"}}
V.ev.prototype={
gah:function(){var s=this.c,r=this.d
return s>r?r:s},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ev))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.F(s.a,3,0)+", "+V.F(s.b,3,0)+", "+V.F(s.c,3,0)+", "+V.F(s.d,3,0)+"]"}}
V.a5.prototype={
cf:function(a){return Math.sqrt(this.a1(this))},
a1:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.t()
if(typeof p!=="number")return H.v(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.v(r)
return q*p+s*r},
t:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.t()
if(typeof b!=="number")return H.v(b)
s=this.b
if(typeof s!=="number")return s.t()
return new V.a5(r*b,s*b)},
Y:function(a,b){var s,r
$.A().toString
if(Math.abs(b-0)<1e-9){s=$.lu
return s==null?$.lu=new V.a5(0,0):s}s=this.a
if(typeof s!=="number")return s.Y()
r=this.b
if(typeof r!=="number")return r.Y()
return new V.a5(s/b,r/b)},
n:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
s=b.a
r=this.a
$.A().toString
if(typeof s!=="number")return s.a2()
if(typeof r!=="number")return H.v(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.a2()
if(typeof r!=="number")return H.v(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.E.prototype={
cf:function(a){return Math.sqrt(this.a1(this))},
a1:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cg:function(a,b){return new V.E(V.kH(this.a,a.a,b),V.kH(this.b,a.b,b),V.kH(this.c,a.c,b))},
J:function(){var s=this,r=Math.sqrt(s.a1(s))
if(r===1)return s
return s.Y(0,r)},
b6:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.E(s*r-q*p,q*o-n*r,n*p-s*o)},
v:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a){return new V.E(-this.a,-this.b,-this.c)},
Y:function(a,b){$.A().toString
if(Math.abs(b-0)<1e-9)return V.fb()
return new V.E(this.a/b,this.b/b,this.c/b)},
dF:function(){$.A().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.E))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
U.hz.prototype={
bH:function(a){var s=V.k4(a,this.c,this.b)
return s},
gm:function(){var s=this.y
return s==null?this.y=D.D():s},
G:function(a){var s=this.y
if(s!=null)s.u(a)},
scs:function(a,b){},
scj:function(a){var s,r=this,q=r.b
$.A().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bH(s)}q=new D.u("maximumLocation",q,r.b)
q.b=!0
r.G(q)}},
scl:function(a){var s,r=this,q=r.c
$.A().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bH(s)}q=new D.u("minimumLocation",q,r.c)
q.b=!0
r.G(q)}},
sag:function(a,b){var s,r=this
b=r.bH(b)
s=r.d
$.A().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.u("location",s,b)
s.b=!0
r.G(s)}},
sck:function(a){var s,r,q=this,p=q.e
$.A().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.u("maximumVelocity",p,a)
p.b=!0
q.G(p)}},
sP:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.A().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.u("velocity",r,a)
r.b=!0
s.G(r)}},
sc0:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.A().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.u("dampening",s,a)
s.b=!0
this.G(s)}},
a7:function(a,b){var s,r,q,p=this,o=p.f
$.A().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sag(0,p.d+s*b)
o=p.x
$.A().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sP(s)}}}
U.bL.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.D():s},
sS:function(a,b){var s,r,q,p=this
if(!J.H(p.a,b)){s=p.a
p.a=b
r=new D.u("matrix",s,b)
r.b=!0
q=p.b
if(q!=null)q.u(r)}},
aA:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bL))return!1
return J.H(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")}}
U.bM.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.D():s},
G:function(a){var s=this.e
if(s!=null)s.u(a)},
aa:function(){return this.G(null)},
ej:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaQ(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.gm()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}s=new D.aH()
s.b=!0
this.G(s)},
fL:function(a,b){var s,r
for(s=b.gL(b),r=this.gaQ();s.q();)s.gE(s).gm().M(0,r)
s=new D.aI()
s.b=!0
this.G(s)},
aA:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.ad()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.a_(p,p.length),s=null;p.q();){o=p.d
if(o!=null){r=o.aA(0,b,c)
if(r!=null)s=s==null?r:r.t(0,s)}}q.f=s==null?V.by():s
p=q.e
if(p!=null)p.az(0)}return q.f},
n:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bM))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.f(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.f(p,r)
if(!J.H(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iS:1}
U.S.prototype={}
U.bX.prototype={
gm:function(){var s=this.y
return s==null?this.y=D.D():s},
G:function(a){var s=this.y
if(s!=null)s.u(a)},
sdY:function(a){var s
a=V.k4(a,0,6.283185307179586)
s=this.a
$.A().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
s=new D.u("yaw",s,a)
s.b=!0
this.G(s)}},
sdQ:function(a,b){var s
b=V.k4(b,0,6.283185307179586)
s=this.b
$.A().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
s=new D.u("pitch",s,b)
s.b=!0
this.G(s)}},
sdT:function(a){var s
a=V.k4(a,0,6.283185307179586)
s=this.c
$.A().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
s=new D.u("roll",s,a)
s.b=!0
this.G(s)}},
sc1:function(a){var s=this.e
$.A().toString
if(!(Math.abs(s-a)<1e-9)){this.e=a
s=new D.u("deltaPitch",s,a)
s.b=!0
this.G(s)}},
sc2:function(a){var s=this.f
$.A().toString
if(!(Math.abs(s-a)<1e-9)){this.f=a
s=new D.u("deltaRoll",s,a)
s.b=!0
this.G(s)}},
aA:function(a,b,c){var s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.sdY(s.a+s.d*b.y)
s.sdQ(0,s.b+s.e*b.y)
s.sdT(s.c+s.f*b.y)
s.x=V.lc(s.c).t(0,V.lb(s.b)).t(0,V.la(s.a))
r=s.y
if(r!=null)r.az(0)}return s.x},
n:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.bX))return!1
s=q.a
r=b.a
$.A().toString
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(q.b-b.b)<1e-9))return!1
if(!(Math.abs(q.c-b.c)<1e-9))return!1
if(!(Math.abs(q.d-b.d)<1e-9))return!1
if(!(Math.abs(q.e-b.e)<1e-9))return!1
if(!(Math.abs(q.f-b.f)<1e-9))return!1
return!0},
i:function(a){var s=this
return"Rotator: ["+V.F(s.a,3,0)+", "+V.F(s.b,3,0)+", "+V.F(s.c,3,0)+"], ["+V.F(s.d,3,0)+", "+V.F(s.e,3,0)+", "+V.F(s.f,3,0)+"]"}}
U.cY.prototype={
gm:function(){var s=this.cy
return s==null?this.cy=D.D():s},
G:function(a){var s=this.cy
if(s!=null)s.u(a)},
aa:function(){return this.G(null)},
aF:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.c.gc3().k(0,s.gbB())
s.a.c.gaZ().k(0,s.gbD())
s.a.c.gbx().k(0,s.gbF())
return!0},
bC:function(a){var s=this
if(!J.H(s.c,s.a.b.c))return
s.x=s.y=!0
s.z=s.b.d},
bE:function(a){var s,r,q,p,o,n,m,l=this
t._.a(a)
if(!l.y)return
if(l.x){s=a.y.X(a.d)
s=s.a1(s)
r=l.r
if(typeof r!=="number")return H.v(r)
if(s<r)return
l.x=!1}if(l.d){s=a.c
s=a.y.X(a.d).t(0,2).Y(0,s.gah())
l.Q=s
r=l.b
s=s.a
if(typeof s!=="number")return s.t()
q=l.e
if(typeof q!=="number")return H.v(q)
r.sP(s*10*q)}else{s=a.c
r=a.y
q=a.d
p=r.X(q).t(0,2).Y(0,s.gah())
r=l.b
o=p.a
if(typeof o!=="number")return o.N()
n=l.e
if(typeof n!=="number")return H.v(n)
m=l.z
if(typeof m!=="number")return H.v(m)
r.sag(0,-o*n+m)
l.b.sP(0)
l.Q=a.z.X(q).t(0,2).Y(0,s.gah())}l.aa()},
bG:function(a){var s,r,q,p=this
if(!p.y)return
p.y=!1
if(p.x)return
s=p.Q
if(s.a1(s)>0.0001){s=p.b
r=p.Q.a
if(typeof r!=="number")return r.t()
q=p.e
if(typeof q!=="number")return H.v(q)
s.sP(r*10*q)
p.aa()}},
aA:function(a,b,c){var s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.ad()
if(q<p){r.ch=p
s=b.y
r.b.a7(0,s)
r.cx=V.lc(r.b.d)}return r.cx},
$iS:1}
U.cZ.prototype={
gm:function(){var s=this.fx
return s==null?this.fx=D.D():s},
G:function(a){var s=this.fx
if(s!=null)s.u(a)},
aa:function(){return this.G(null)},
aF:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.gc3().k(0,q.gbB())
q.a.c.gaZ().k(0,q.gbD())
q.a.c.gbx().k(0,q.gbF())
s=q.a.d
r=s.f
s=r==null?s.f=D.D():r
s.k(0,q.geP())
s=q.a.d
r=s.d
s=r==null?s.d=D.D():r
s.k(0,q.geR())
s=q.a.e
s.gcD(s).k(0,q.geo())
q.a.e.gaZ().k(0,q.gem())
s=q.a.e
s.gdl(s).k(0,q.gek())
return!0},
av:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.N()
s=-s}if(this.r){if(typeof r!=="number")return r.N()
r=-r}return new V.a5(s,r)},
bC:function(a){var s=this
t._.a(a)
if(!J.H(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bE:function(a){var s,r,q,p,o,n,m,l=this
t._.a(a)
if(!l.cx)return
if(l.ch){s=a.y.X(a.d)
s=s.a1(s)
r=l.Q
if(typeof r!=="number")return H.v(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.av(a.y.X(a.d).t(0,2).Y(0,s.gah()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.N()
q=l.y
if(typeof q!=="number")return H.v(q)
r.sP(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.N()
r=l.x
if(typeof r!=="number")return H.v(r)
q.sP(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.av(r.X(q).t(0,2).Y(0,s.gah()))
r=l.c
o=p.a
if(typeof o!=="number")return o.N()
n=l.y
if(typeof n!=="number")return H.v(n)
m=l.cy
if(typeof m!=="number")return H.v(m)
r.sag(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.N()
o=l.x
if(typeof o!=="number")return H.v(o)
r=l.db
if(typeof r!=="number")return H.v(r)
m.sag(0,-n*o+r)
l.b.sP(0)
l.c.sP(0)
l.dx=l.av(a.z.X(q).t(0,2).Y(0,s.gah()))}l.aa()},
bG:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a1(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.N()
q=p.y
if(typeof q!=="number")return H.v(q)
s.sP(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.N()
s=p.x
if(typeof s!=="number")return H.v(s)
q.sP(-r*10*s)
p.aa()}},
eQ:function(a){var s=this
if(t.dn.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eS:function(a){var s,r,q,p,o,n,m,l=this
t._.a(a)
if(!J.H(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.av(r.X(q).t(0,2).Y(0,s.gah()))
r=l.c
o=p.a
if(typeof o!=="number")return o.N()
n=l.y
if(typeof n!=="number")return H.v(n)
m=l.cy
if(typeof m!=="number")return H.v(m)
r.sag(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.N()
o=l.x
if(typeof o!=="number")return H.v(o)
r=l.db
if(typeof r!=="number")return H.v(r)
m.sag(0,-n*o+r)
l.b.sP(0)
l.c.sP(0)
l.dx=l.av(a.z.X(q).t(0,2).Y(0,s.gah()))
l.aa()},
ep:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
en:function(a){var s,r,q,p,o,n,m,l=this
t.p.a(a)
if(!l.cx)return
if(l.ch){s=a.y.X(a.d)
s=s.a1(s)
r=l.Q
if(typeof r!=="number")return H.v(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.av(a.y.X(a.d).t(0,2).Y(0,s.gah()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.N()
q=l.y
if(typeof q!=="number")return H.v(q)
r.sP(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.N()
r=l.x
if(typeof r!=="number")return H.v(r)
q.sP(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.av(r.X(q).t(0,2).Y(0,s.gah()))
r=l.c
o=p.a
if(typeof o!=="number")return o.N()
n=l.y
if(typeof n!=="number")return H.v(n)
m=l.cy
if(typeof m!=="number")return H.v(m)
r.sag(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.N()
o=l.x
if(typeof o!=="number")return H.v(o)
r=l.db
if(typeof r!=="number")return H.v(r)
m.sag(0,-n*o+r)
l.b.sP(0)
l.c.sP(0)
l.dx=l.av(a.z.X(q).t(0,2).Y(0,s.gah()))}l.aa()},
el:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a1(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.N()
q=p.y
if(typeof q!=="number")return H.v(q)
s.sP(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.N()
s=p.x
if(typeof s!=="number")return H.v(s)
q.sP(-r*10*s)
p.aa()}},
aA:function(a,b,c){var s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.ad()
if(q<p){r.dy=p
s=b.y
r.c.a7(0,s)
r.b.a7(0,s)
r.fr=V.la(r.b.d).t(0,V.lb(r.c.d))}return r.fr},
$iS:1}
U.d_.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.D():s},
G:function(a){var s=this.r
if(s!=null)s.u(a)},
aF:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.D():r
r=p.gf_()
s.k(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.D():q).k(0,r)
return!0},
f0:function(a){var s,r,q,p,o=this
if(!J.H(o.b,o.a.b.c))return
t.a3.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.t()
p=s+r*q
if(s!==p){o.d=p
s=new D.u("zoom",s,p)
s.b=!0
o.G(s)}},
aA:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.mU(s,s,s)}return r.f},
$iS:1}
M.ch.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.D():s},
T:function(a){var s=this.r
if(s!=null)s.u(a)},
b2:function(){return this.T(null)},
fP:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gW(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.gm()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}s=new D.aH()
s.b=!0
this.T(s)},
fR:function(a,b){var s,r
for(s=b.gL(b),r=this.gW();s.q();)s.gE(s).gm().M(0,r)
s=new D.aI()
s.b=!0
this.T(s)},
a6:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.a_(s,s.length);s.q();){r=s.d
if(r!=null)r.a6(a)}q.f=!1},
$ia2:1}
M.ci.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.D():s},
T:function(a){var s=this.r
if(s!=null)s.u(a)},
b2:function(){return this.T(null)},
saT:function(a){var s,r,q=this
if(a==null)a=new X.hX()
s=q.b
if(s!==a){if(s!=null)s.gm().M(0,q.gW())
r=q.b
q.b=a
a.gm().k(0,q.gW())
s=new D.u("camera",r,q.b)
s.b=!0
q.T(s)}},
saJ:function(a,b){var s,r,q=this
if(b==null)b=X.ke(!0,null)
s=q.c
if(s!==b){if(s!=null)s.gm().M(0,q.gW())
r=q.c
q.c=b
b.gm().k(0,q.gW())
s=new D.u("target",r,q.c)
s.b=!0
q.T(s)}},
saK:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gm().M(0,r.gW())
s=r.d
r.d=a
if(a!=null)a.gm().k(0,r.gW())
q=new D.u("technique",s,r.d)
q.b=!0
r.T(q)}},
a6:function(a){var s,r=this
a.cp(r.d)
r.c.O(a)
r.b.O(a)
s=r.d
if(s!=null)s.a7(0,a)
r.e.a7(0,a)
r.e.a6(a)
r.b.ac(a)
r.c.toString
a.co()},
$ia2:1}
M.cp.prototype={
T:function(a){var s=this.y
if(s!=null)s.u(a)},
b2:function(){return this.T(null)},
fa:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gW(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.br()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}s=new D.aH()
s.b=!0
this.T(s)},
fc:function(a,b){var s,r
for(s=b.gL(b),r=this.gW();s.q();)s.gE(s).gm().M(0,r)
s=new D.aI()
s.b=!0
this.T(s)},
saT:function(a){var s,r,q=this
if(a==null)a=X.lf(null)
s=q.b
if(s!==a){if(s!=null)s.gm().M(0,q.gW())
r=q.b
q.b=a
a.gm().k(0,q.gW())
s=new D.u("camera",r,q.b)
s.b=!0
q.T(s)}},
saJ:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gm().M(0,r.gW())
s=r.c
r.c=b
b.gm().k(0,r.gW())
q=new D.u("target",s,r.c)
q.b=!0
r.T(q)}},
gm:function(){var s=this.y
return s==null?this.y=D.D():s},
a6:function(a){var s,r=this
a.cp(r.d)
r.c.O(a)
r.b.O(a)
for(s=r.e.a,s=new J.a_(s,s.length);s.q();)s.d.a7(0,a)
for(s=r.e.a,s=new J.a_(s,s.length);s.q();)s.d.a6(a)
r.b.toString
a.cy.aI()
a.db.aI()
r.c.ac(a)
a.co()},
$ia2:1}
M.a2.prototype={}
A.dB.prototype={}
A.hp.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hF:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
bn:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.a1.prototype={
gat:function(a){var s=this.a?1:0,r=this.c?4:0
return s|0|r},
i:function(a){var s=this.a?1:0,r=this.c?4:0
return""+(s|0|r)},
n:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.a1))return!1
if(this.a===b.a)s=this.c===b.c
else s=!1
return s}}
A.i8.prototype={
ea:function(c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3="Required uniform value, ",c4=", was not defined or used in shader.",c5="uniform mat4 objMat;\n"
c1.z=c6
s=new P.bA("")
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
A.oi(c6,s)
A.ok(c6,s)
A.oj(c6,s)
A.om(c6,s)
A.on(c6,s)
A.ol(c6,s)
A.oo(c6,s)
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
c1.bq(0,q.charCodeAt(0)==0?q:q,A.oh(c1.z))
c1.Q=c1.x.h(0,"posAttr")
c1.cx=c1.x.h(0,"normAttr")
c1.ch=c1.x.h(0,"binmAttr")
c1.cy=c1.x.h(0,"txt2DAttr")
c1.db=c1.x.h(0,"txtCubeAttr")
c1.dx=c1.x.h(0,"bendAttr")
if(c6.dy)c1.id=t.q.a(c1.y.F(0,"invViewMat"))
if(r)c1.dy=t.q.a(c1.y.F(0,"objMat"))
if(p)c1.fr=t.q.a(c1.y.F(0,"viewObjMat"))
r=t.q
c1.fy=r.a(c1.y.F(0,"projViewObjMat"))
if(c6.go)c1.fx=r.a(c1.y.F(0,"viewMat"))
if(c6.x1)c1.k1=t.R.a(c1.y.F(0,"txt2DMat"))
if(c6.x2)c1.k2=r.a(c1.y.F(0,"txtCubeMat"))
if(c6.y1)c1.k3=r.a(c1.y.F(0,"colorMat"))
c1.r1=H.b([],t.O)
q=c6.bo
if(q>0){c1.k4=c1.y.F(0,"bendMatCount")
for(l=0;l<q;++l){p=c1.r1
o=c1.y
n="bendValues["+l+"].mat"
k=o.h(0,n)
if(k==null)H.p(P.q(c3+n+c4))
p.push(r.a(k))}}r=c6.a
if(r.a)c1.r2=t.r.a(c1.y.F(0,"emissionClr"))
if(r.c)c1.ry=t.Q.a(c1.y.F(0,"emissionTxt"))
r=c6.b
if(r.a)c1.x1=t.r.a(c1.y.F(0,"ambientClr"))
if(r.c)c1.y1=t.Q.a(c1.y.F(0,"ambientTxt"))
r=c6.c
if(r.a)c1.y2=t.r.a(c1.y.F(0,"diffuseClr"))
if(r.c)c1.aH=t.Q.a(c1.y.F(0,"diffuseTxt"))
r=c6.d
if(r.a)c1.bp=t.r.a(c1.y.F(0,"invDiffuseClr"))
if(r.c)c1.dm=t.Q.a(c1.y.F(0,"invDiffuseTxt"))
r=c6.e
q=r.a
if(!q)p=r.c
else p=!0
if(p){c1.dr=t.n.a(c1.y.F(0,"shininess"))
if(q)c1.dn=t.r.a(c1.y.F(0,"specularClr"))
if(r.c)c1.dq=t.Q.a(c1.y.F(0,"specularTxt"))}if(c6.f.c)c1.ds=t.Q.a(c1.y.F(0,"bumpTxt"))
if(c6.db){r=t.Q
c1.dt=r.a(c1.y.F(0,"envSampler"))
q=c6.r
if(q.a)c1.du=t.r.a(c1.y.F(0,"reflectClr"))
if(q.c)c1.dv=r.a(c1.y.F(0,"reflectTxt"))
q=c6.x
p=q.a
if(!p)o=q.c
else o=!0
if(o){c1.dw=t.n.a(c1.y.F(0,"refraction"))
if(p)c1.dz=t.r.a(c1.y.F(0,"refractClr"))
if(q.c)c1.dA=r.a(c1.y.F(0,"refractTxt"))}}r=c6.y
if(r.a)c1.dB=t.n.a(c1.y.F(0,"alpha"))
if(r.c)c1.dC=t.Q.a(c1.y.F(0,"alphaTxt"))
if(c6.k1){r=c6.z
q=r.length
if(q!==0){c1.c5=new H.B(t.J)
c1.c6=new H.B(t.en)
for(p=t.r,o=t.n,n=t.d6,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="barLight"+H.e(h)
f=H.b([],n)
for(m=i.b,l=0;l<m;++l){e=c1.y
d=g+"s["+l+"].startPnt"
k=e.h(0,d)
if(k==null)H.p(P.q(c3+d+c4))
p.a(k)
e=c1.y
d=g+"s["+l+"].endPnt"
c=e.h(0,d)
if(c==null)H.p(P.q(c3+d+c4))
p.a(c)
e=c1.y
d=g+"s["+l+"].color"
b=e.h(0,d)
if(b==null)H.p(P.q(c3+d+c4))
p.a(b)
if(typeof h!=="number")return h.aq()
if((h&4)!==0){e=c1.y
d=g+"s["+l+"].att0"
a=e.h(0,d)
if(a==null)H.p(P.q(c3+d+c4))
o.a(a)
e=c1.y
d=g+"s["+l+"].att1"
a0=e.h(0,d)
if(a0==null)H.p(P.q(c3+d+c4))
o.a(a0)
e=c1.y
d=g+"s["+l+"].att2"
a1=e.h(0,d)
if(a1==null)H.p(P.q(c3+d+c4))
o.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c2
a3=a2
a4=a3}f.push(new A.cS(k,c,b,a4,a3,a2))}c1.c6.l(0,h,f)
m=c1.c5
e=c1.y
d=g+"Count"
k=e.h(0,d)
if(k==null)H.p(P.q(c3+d+c4))
m.l(0,h,k)}}r=c6.Q
q=r.length
if(q!==0){c1.c7=new H.B(t.J)
c1.c8=new H.B(t.af)
for(p=t.r,o=t.t,n=t.dv,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="dirLight"+H.e(h)
f=H.b([],n)
for(m=i.b,l=0;l<m;++l){if(typeof h!=="number")return h.aq()
e=(h&1)!==0
if(e){d=c1.y
a5=g+"s["+l+"].objUp"
k=d.h(0,a5)
if(k==null)H.p(P.q(c3+a5+c4))
p.a(k)
d=c1.y
a5=g+"s["+l+"].objRight"
c=d.h(0,a5)
if(c==null)H.p(P.q(c3+a5+c4))
p.a(c)
d=c1.y
a5=g+"s["+l+"].objDir"
b=d.h(0,a5)
if(b==null)H.p(P.q(c3+a5+c4))
p.a(b)
a6=b
a7=c
a8=k}else{a6=c2
a7=a6
a8=a7}d=c1.y
a5=g+"s["+l+"].viewDir"
k=d.h(0,a5)
if(k==null)H.p(P.q(c3+a5+c4))
p.a(k)
d=c1.y
a5=g+"s["+l+"].color"
c=d.h(0,a5)
if(c==null)H.p(P.q(c3+a5+c4))
p.a(c)
if(e){e=c1.y
d=g+"sTexture2D"+l
b=e.h(0,d)
if(b==null)H.p(P.q(c3+d+c4))
o.a(b)
a9=b}else a9=c2
f.push(new A.cT(a8,a7,a6,k,c,a9))}c1.c8.l(0,h,f)
m=c1.c7
e=c1.y
d=g+"Count"
k=e.h(0,d)
if(k==null)H.p(P.q(c3+d+c4))
m.l(0,h,k)}}r=c6.ch
q=r.length
if(q!==0){c1.c9=new H.B(t.J)
c1.ca=new H.B(t.gr)
for(p=t.r,o=t.R,n=t.Q,m=t.y,e=t.n,d=t.by,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="pointLight"+H.e(h)
f=H.b([],d)
for(a5=i.b,l=0;l<a5;++l){b0=c1.y
b1=g+"s["+l+"].point"
k=b0.h(0,b1)
if(k==null)H.p(P.q(c3+b1+c4))
p.a(k)
b0=c1.y
b1=g+"s["+l+"].viewPnt"
c=b0.h(0,b1)
if(c==null)H.p(P.q(c3+b1+c4))
p.a(c)
b0=c1.y
b1=g+"s["+l+"].color"
b=b0.h(0,b1)
if(b==null)H.p(P.q(c3+b1+c4))
p.a(b)
if(typeof h!=="number")return h.aq()
if((h&3)!==0){b0=c1.y
b1=g+"s["+l+"].invViewRotMat"
a=b0.h(0,b1)
if(a==null)H.p(P.q(c3+b1+c4))
o.a(a)
b2=a}else b2=c2
if((h&1)!==0){b0=c1.y
b1=g+"sTextureCube"+l
a=b0.h(0,b1)
if(a==null)H.p(P.q(c3+b1+c4))
n.a(a)
a9=a}else a9=c2
if((h&2)!==0){b0=c1.y
b1=g+"sShadowCube"+l
a=b0.h(0,b1)
if(a==null)H.p(P.q(c3+b1+c4))
n.a(a)
b0=c1.y
b1=g+"s["+l+"].shadowAdj"
a0=b0.h(0,b1)
if(a0==null)H.p(P.q(c3+b1+c4))
m.a(a0)
b3=a
b4=a0}else{b3=c2
b4=b3}if((h&4)!==0){b0=c1.y
b1=g+"s["+l+"].att0"
a=b0.h(0,b1)
if(a==null)H.p(P.q(c3+b1+c4))
e.a(a)
b0=c1.y
b1=g+"s["+l+"].att1"
a0=b0.h(0,b1)
if(a0==null)H.p(P.q(c3+b1+c4))
e.a(a0)
b0=c1.y
b1=g+"s["+l+"].att2"
a1=b0.h(0,b1)
if(a1==null)H.p(P.q(c3+b1+c4))
e.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c2
a3=a2
a4=a3}f.push(new A.cV(k,c,b2,b,a9,b3,b4,a4,a3,a2))}c1.ca.l(0,h,f)
a5=c1.c9
b0=c1.y
b1=g+"Count"
k=b0.h(0,b1)
if(k==null)H.p(P.q(c3+b1+c4))
a5.l(0,h,k)}}r=c6.cx
q=r.length
if(q!==0){c1.cb=new H.B(t.J)
c1.cc=new H.B(t.gb)
for(p=t.r,o=t.n,n=t.y,m=t.t,e=t.fF,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="spotLight"+H.e(h)
f=H.b([],e)
for(d=i.b,l=0;l<d;++l){a5=c1.y
b0=g+"s["+l+"].objPnt"
k=a5.h(0,b0)
if(k==null)H.p(P.q(c3+b0+c4))
p.a(k)
a5=c1.y
b0=g+"s["+l+"].objDir"
c=a5.h(0,b0)
if(c==null)H.p(P.q(c3+b0+c4))
p.a(c)
a5=c1.y
b0=g+"s["+l+"].viewPnt"
b=a5.h(0,b0)
if(b==null)H.p(P.q(c3+b0+c4))
p.a(b)
a5=c1.y
b0=g+"s["+l+"].color"
a=a5.h(0,b0)
if(a==null)H.p(P.q(c3+b0+c4))
p.a(a)
if(typeof h!=="number")return h.aq()
if((h&3)!==0){a5=c1.y
b0=g+"s["+l+"].objUp"
a0=a5.h(0,b0)
if(a0==null)H.p(P.q(c3+b0+c4))
p.a(a0)
a5=c1.y
b0=g+"s["+l+"].objRight"
a1=a5.h(0,b0)
if(a1==null)H.p(P.q(c3+b0+c4))
p.a(a1)
a5=c1.y
b0=g+"s["+l+"].tuScalar"
b5=a5.h(0,b0)
if(b5==null)H.p(P.q(c3+b0+c4))
o.a(b5)
a5=c1.y
b0=g+"s["+l+"].tvScalar"
b6=a5.h(0,b0)
if(b6==null)H.p(P.q(c3+b0+c4))
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
if(a0==null)H.p(P.q(c3+b1+c4))
n.a(a0)
b4=a0}else b4=c2
if((h&8)!==0){b0=c1.y
b1=g+"s["+l+"].cutoff"
a0=b0.h(0,b1)
if(a0==null)H.p(P.q(c3+b1+c4))
o.a(a0)
b0=c1.y
b1=g+"s["+l+"].coneAngle"
a1=b0.h(0,b1)
if(a1==null)H.p(P.q(c3+b1+c4))
o.a(a1)
b9=a1
c0=a0}else{b9=c2
c0=b9}if((h&4)!==0){b0=c1.y
b1=g+"s["+l+"].att0"
a0=b0.h(0,b1)
if(a0==null)H.p(P.q(c3+b1+c4))
o.a(a0)
b0=c1.y
b1=g+"s["+l+"].att1"
a1=b0.h(0,b1)
if(a1==null)H.p(P.q(c3+b1+c4))
o.a(a1)
b0=c1.y
b1=g+"s["+l+"].att2"
b5=b0.h(0,b1)
if(b5==null)H.p(P.q(c3+b1+c4))
o.a(b5)
a2=b5
a3=a1
a4=a0}else{a2=c2
a3=a2
a4=a3}if((h&1)!==0){b0=c1.y
b1=g+"sTexture2D"+l
a0=b0.h(0,b1)
if(a0==null)H.p(P.q(c3+b1+c4))
m.a(a0)
a9=a0}else a9=c2
if(a5){a5=c1.y
b0=g+"sShadow2D"+l
a0=a5.h(0,b0)
if(a0==null)H.p(P.q(c3+b0+c4))
m.a(a0)
b3=a0}else b3=c2
f.push(new A.cX(k,c,b,a,a8,a7,b8,b7,b4,c0,b9,a4,a3,a2,a9,b3))}c1.cc.l(0,h,f)
d=c1.cb
a5=c1.y
b0=g+"Count"
k=a5.h(0,b0)
if(k==null)H.p(P.q(c3+b0+c4))
d.l(0,h,k)}}}},
aj:function(a,b){if(b!=null&&b.d>=6)a.cA(b)}}
A.dF.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.dR.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.er.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.eI.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.ib.prototype={
i:function(a){return this.aH}}
A.cS.prototype={}
A.cT.prototype={}
A.cV.prototype={}
A.cX.prototype={}
A.eC.prototype={
bd:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
bq:function(a,b,c){var s,r,q,p=this
p.c=b
p.d=c
p.e=p.cV(b,35633)
p.f=p.cV(p.d,35632)
s=p.a
r=s.createProgram()
p.r=r
s.attachShader(r,p.e)
s.attachShader(p.r,p.f)
s.linkProgram(p.r)
if(!s.getProgramParameter(p.r,35714)){q=s.getProgramInfoLog(p.r)
s.deleteProgram(p.r)
H.p(P.q("Failed to link shader: "+H.e(q)))}p.h6()
p.h8()},
O:function(a){a.a.useProgram(this.r)
this.x.hF()},
cV:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.c(P.q("Error compiling shader '"+H.e(q)+"': "+H.e(s)))}return q},
h6:function(){var s,r,q,p=this,o=H.b([],t.x),n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.v(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.dB(n,r.name,q))}p.x=new A.hp(o)},
h8:function(){var s,r,q,p=this,o=H.b([],t.fj),n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.v(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.hy(r.type,r.size,r.name,q))}p.y=new A.jc(o)},
aO:function(a,b,c){var s=this.a
if(a===1)return new A.c_(s,b,c)
else return A.ko(s,this.r,b,a,c)},
eG:function(a,b,c){var s=this.a
if(a===1)return new A.cW(s,b,c)
else return A.ko(s,this.r,b,a,c)},
eH:function(a,b,c){var s=this.a
if(a===1)return new A.f5(s,b,c)
else return A.ko(s,this.r,b,a,c)},
bj:function(a,b){return new P.fu(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hy:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aO(b,c,d)
case 5121:return s.aO(b,c,d)
case 5122:return s.aO(b,c,d)
case 5123:return s.aO(b,c,d)
case 5124:return s.aO(b,c,d)
case 5125:return s.aO(b,c,d)
case 5126:return new A.f1(s.a,c,d)
case 35664:return new A.cR(s.a,c,d)
case 35665:return new A.f2(s.a,c,d)
case 35666:return new A.f3(s.a,c,d)
case 35667:return new A.j9(s.a,c,d)
case 35668:return new A.ja(s.a,c,d)
case 35669:return new A.jb(s.a,c,d)
case 35674:return new A.jd(s.a,c,d)
case 35675:return new A.f4(s.a,c,d)
case 35676:return new A.cU(s.a,c,d)
case 35678:return s.eG(b,c,d)
case 35680:return s.eH(b,c,d)
case 35670:throw H.c(s.bj("BOOL",c))
case 35671:throw H.c(s.bj("BOOL_VEC2",c))
case 35672:throw H.c(s.bj("BOOL_VEC3",c))
case 35673:throw H.c(s.bj("BOOL_VEC4",c))
default:throw H.c(P.q("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.bK.prototype={
i:function(a){return this.b}}
A.iM.prototype={}
A.iO.prototype={}
A.iY.prototype={
ee:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i="Required uniform value, ",h=", was not defined or used in shader."
j.bq(0,u.j.charCodeAt(0)==0?u.j:u.j,A.ng(a,b))
j.z=j.x.h(0,"posAttr")
s=t.dF
j.Q=s.a(j.y.F(0,"txtCount"))
j.ch=t.y.a(j.y.F(0,"backClr"))
j.cx=H.b([],t.ga)
j.cy=H.b([],t.O)
r=t.dA
j.db=H.b([],r)
j.dx=H.b([],r)
j.dy=H.b([],r)
j.fr=H.b([],r)
j.fx=H.b([],t.D)
for(r=t.aq,q=t.q,p=t.t,o=0;o<a;++o){n=j.cx
m=j.y
l="txt"+o
k=m.h(0,l)
if(k==null)H.p(P.q(i+l+h))
n.push(p.a(k))
n=j.cy
m=j.y
l="clrMat"+o
k=m.h(0,l)
if(k==null)H.p(P.q(i+l+h))
n.push(q.a(k))
n=j.db
m=j.y
l="srcLoc"+o
k=m.h(0,l)
if(k==null)H.p(P.q(i+l+h))
n.push(r.a(k))
n=j.dx
m=j.y
l="srcSize"+o
k=m.h(0,l)
if(k==null)H.p(P.q(i+l+h))
n.push(r.a(k))
n=j.dy
m=j.y
l="destLoc"+o
k=m.h(0,l)
if(k==null)H.p(P.q(i+l+h))
n.push(r.a(k))
n=j.fr
m=j.y
l="destSize"+o
k=m.h(0,l)
if(k==null)H.p(P.q(i+l+h))
n.push(r.a(k))
n=j.fx
m=j.y
l="flip"+o
k=m.h(0,l)
if(k==null)H.p(P.q(i+l+h))
n.push(s.a(k))}}}
A.f0.prototype={}
A.jc.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
F:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.I()},
I:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.c_.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.j9.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.ja.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.jb.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.j8.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.f1.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.cR.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.f2.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.f3.prototype={
cw:function(a){var s=a.a,r=a.b,q=a.c,p=a.d
return this.a.uniform4f(this.d,s,r,q,p)},
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.jd.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.f4.prototype={
ae:function(a){var s=new Float32Array(H.c7(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.cU.prototype={
ae:function(a){var s=new Float32Array(H.c7(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.cW.prototype={
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.f5.prototype={
cA:function(a){var s=a==null||a.d<6,r=this.a,q=this.d
if(s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jN.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cg(q.b,b).cg(q.d.cg(q.c,b),c)
q=new V.Y(p.a,p.b,p.c)
if(!J.H(a.f,q)){a.f=q
q=a.a
if(q!=null)q.a5()}a.sb9(p.J())
q=1-b
s=1-c
s=new V.b5(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.H(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.a5()}}}
F.dT.prototype={
eA:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.fb()
if(n!=null)q=q.v(0,n)
if(s!=null)q=q.v(0,s)
if(r!=null)q=q.v(0,r)
if(q.dF())return p
return q.J()},
eC:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.a2(0,n)
q=new V.E(o.a,o.b,o.c).J()
o=r.a2(0,n)
return q.b6(new V.E(o.a,o.b,o.c).J()).J()},
bY:function(){var s,r=this
if(r.d!=null)return!0
s=r.eA()
if(s==null){s=r.eC()
if(s==null)return!1}r.d=s
r.a.a.a5()
return!0},
ez:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.fb()
if(n!=null)q=q.v(0,n)
if(s!=null)q=q.v(0,s)
if(r!=null)q=q.v(0,r)
if(q.dF())return p
return q.J()},
eB:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.A().toString
if(Math.abs(p-0)<1e-9){j=b.a2(0,e)
o=new V.E(j.a,j.b,j.c).J()
if(q.a-r.a<0)o=o.N(0)}else{n=(j-s.b)/p
j=b.a2(0,e)
j=new V.Y(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).a2(0,h)
o=new V.E(j.a,j.b,j.c).J()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.N(0)}j=l.d
if(j!=null){m=j.J()
o=m.b6(o).J().b6(m).J()}return o},
bW:function(){var s,r=this
if(r.e!=null)return!0
s=r.ez()
if(s==null){s=r.eB()
if(s==null)return!1}r.e=s
r.a.a.a5()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
D:function(a){var s,r=this,q=r.a
if(q==null||r.b==null||r.c==null)return a+"disposed"
s=a+C.b.an(J.a9(q.e),0)+", "+C.b.an(J.a9(r.b.e),0)+", "+C.b.an(J.a9(r.c.e),0)+" {"
q=r.d
s=q!=null?s+(q.i(0)+", "):s+"-, "
q=r.e
return q!=null?s+(q.i(0)+"}"):s+"-}"},
I:function(){return this.D("")}}
F.e3.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
D:function(a){var s=this.a
if(s==null||this.b==null)return a+"disposed"
return a+C.b.an(J.a9(s.e),0)+", "+C.b.an(J.a9(this.b.e),0)},
I:function(){return this.D("")}}
F.eo.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
D:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.b.an(J.a9(s.e),0)},
I:function(){return this.D("")}}
F.iF.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.D():s},
hL:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.a0()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){p=e[q]
f.a.k(0,p.hv())}f.a.a0()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.a0()
m=m.e
if(typeof m!=="number")return m.v()
m+=s
n=n.c
if(m>=n.length)return H.f(n,m)
l=n[m]
f.b.a.a.k(0,l)
m=new F.eo()
if(l.a==null)H.p(P.q("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.u(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.a0()
m=m.e
if(typeof m!=="number")return m.v()
m+=s
n=n.c
if(m>=n.length)return H.f(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.a0()
n=n.e
if(typeof n!=="number")return n.v()
n+=s
m=m.c
if(n>=m.length)return H.f(m,n)
i=m[n]
n=f.c.a
n.a.k(0,j)
n.a.k(0,i)
F.mP(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.a0()
m=m.e
if(typeof m!=="number")return m.v()
m+=s
n=n.c
if(m>=n.length)return H.f(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.a0()
n=n.e
if(typeof n!=="number")return n.v()
n+=s
m=m.c
if(n>=m.length)return H.f(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.a0()
m=m.e
if(typeof m!=="number")return m.v()
m+=s
n=n.c
if(m>=n.length)return H.f(n,m)
g=n[m]
m=f.d.a
m.a.k(0,j)
m.a.k(0,i)
m.a.k(0,g)
F.cq(j,i,g)}e=f.e
if(e!=null)e.az(0)},
aG:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.aG()||!1
if(!r.a.aG())s=!1
q=r.e
if(q!=null)q.az(0)
return s},
bm:function(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=34962,a4=a2.a.c.length
a6.toString
s=a6.a
r=(s&$.a7().a)!==0?1:0
if((s&$.bg().a)!==0)++r
if((s&$.bf().a)!==0)++r
if((s&$.bG().a)!==0)++r
if((s&$.bh().a)!==0)++r
if((s&$.dt().a)!==0)++r
if((s&$.du().a)!==0)++r
if((s&$.ce().a)!==0)++r
if((s&$.be().a)!==0)++r
q=a6.gcC(a6)
p=q*4
s=new Array(a4*q)
s.fixed$length=Array
o=H.b(s,t.m)
s=new Array(r)
s.fixed$length=Array
n=H.b(s,t.g0)
for(s=o.length,m=n.length,l=0,k=0;k<r;++k){j=a6.ho(k)
i=j.gcC(j)
if(k>=m)return H.f(n,k)
n[k]=new Z.dH(j,i,l*4,p)
for(h=0;h<a4;++h){g=a2.a.c
if(h>=g.length)return H.f(g,h)
f=g[h].hK(j)
e=l+h*q
for(g=f.length,d=0;d<g;++d){c=f[d]
if(e<0||e>=s)return H.f(o,e)
o[e]=c;++e}}l+=i}s=a5.a
b=s.createBuffer()
s.bindBuffer(a3,b)
s.bufferData(a3,new Float32Array(H.c7(o)),35044)
s.bindBuffer(a3,null)
a=new Z.bk(new Z.fe(a3,b),n,a6)
a.b=H.b([],t.aZ)
if(a2.b.b.length!==0){a0=H.b([],t.V)
for(k=0;m=a2.b.b,k<m.length;++k){m=m[k].a
m.a.a.a0()
a0.push(m.e)}a1=Z.kr(s,34963,a0)
a.b.push(new Z.bO(0,a0.length,a1))}if(a2.c.b.length!==0){a0=H.b([],t.V)
for(k=0;m=a2.c.b,k<m.length;++k){m=m[k].a
m.a.a.a0()
a0.push(m.e)
m=a2.c.b
if(k>=m.length)return H.f(m,k)
m=m[k].b
m.a.a.a0()
a0.push(m.e)}a1=Z.kr(s,34963,a0)
a.b.push(new Z.bO(1,a0.length,a1))}if(a2.d.b.length!==0){a0=H.b([],t.V)
for(k=0;m=a2.d.b,k<m.length;++k){m=m[k].a
m.a.a.a0()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.f(m,k)
m=m[k].b
m.a.a.a0()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.f(m,k)
m=m[k].c
m.a.a.a0()
a0.push(m.e)}a1=Z.kr(s,34963,a0)
a.b.push(new Z.bO(4,a0.length,a1))}return a},
i:function(a){var s=this,r="   ",q=H.b([],t.i)
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.D(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.D(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.D(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.D(r))}return C.a.p(q,"\n")},
a5:function(){var s=this.e
if(s!=null)s.u(null)}}
F.iG.prototype={
hl:function(a){var s,r,q,p,o=H.b([],t.b),n=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.k(0,n)
s.a.k(0,q)
s.a.k(0,p)
o.push(F.cq(n,q,p))}return o},
hm:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=H.b([],t.b)
for(s=this.a,r=b,q=0,p=!1,o=1;o<a;++o,++q,++r){for(n=p,m=1;m<b;++m,r=i){l=c.length
if(q<0||q>=l)return H.f(c,q)
k=c[q];++q
if(q>=l)return H.f(c,q)
j=c[q]
i=r+1
if(i<0||i>=l)return H.f(c,i)
h=c[i]
if(r<0||r>=l)return H.f(c,r)
g=c[r]
l=s.a
if(n){l.k(0,k)
s.a.k(0,j)
s.a.k(0,h)
f.push(F.cq(k,j,h))
s.a.k(0,k)
s.a.k(0,h)
s.a.k(0,g)
f.push(F.cq(k,h,g))}else{l.k(0,j)
s.a.k(0,h)
s.a.k(0,g)
f.push(F.cq(j,h,g))
s.a.k(0,j)
s.a.k(0,g)
s.a.k(0,k)
f.push(F.cq(j,g,k))}n=!n}p=!p}return f},
gj:function(a){return this.b.length},
aG:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].bY())q=!1
return q},
bX:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].bW())q=!1
return q},
i:function(a){return this.I()},
D:function(a){var s,r,q,p=H.b([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].D(a))
return C.a.p(p,"\n")},
I:function(){return this.D("")}}
F.iH.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.I()},
D:function(a){var s,r,q=H.b([],t.i),p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.f(r,s)
q.push(r[s].D(a+(""+s+". ")))}return C.a.p(q,"\n")},
I:function(){return this.D("")}}
F.iI.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.I()},
D:function(a){var s,r,q,p=H.b([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].D(a))
return C.a.p(p,"\n")},
I:function(){return this.D("")}}
F.fc.prototype={
c_:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.jk(s.cx,p,m,r,q,o,n,a,l)},
hv:function(){return this.c_(null)},
sb9:function(a){var s
if(!J.H(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a5()}},
hK:function(a){var s,r,q=this
if(a.n(0,$.a7())){s=q.f
r=t.m
if(s==null)return H.b([0,0,0],r)
else return H.b([s.a,s.b,s.c],r)}else if(a.n(0,$.bg())){s=q.r
r=t.m
if(s==null)return H.b([0,1,0],r)
else return H.b([s.a,s.b,s.c],r)}else if(a.n(0,$.bf())){s=q.x
r=t.m
if(s==null)return H.b([0,0,1],r)
else return H.b([s.a,s.b,s.c],r)}else if(a.n(0,$.bG())){s=q.y
r=t.m
if(s==null)return H.b([0,0],r)
else return H.b([s.a,s.b],r)}else if(a.n(0,$.bh())){s=q.z
r=t.m
if(s==null)return H.b([0,0,0],r)
else return H.b([s.a,s.b,s.c],r)}else if(a.n(0,$.dt())){s=q.Q
r=t.m
if(s==null)return H.b([1,1,1],r)
else return H.b([s.a,s.b,s.c],r)}else if(a.n(0,$.du())){s=q.Q
r=t.m
if(s==null)return H.b([1,1,1,1],r)
else return H.b([s.a,s.b,s.c,s.d],r)}else if(a.n(0,$.ce()))return H.b([q.ch],t.m)
else if(a.n(0,$.be())){s=q.cx
r=t.m
if(s==null)return H.b([-1,-1,-1,-1],r)
else return H.b([s.a,s.b,s.c,s.d],r)}else return H.b([],t.m)},
bY:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.fb()
r.d.H(0,new F.js(q))
r.r=q.a.J()
q=r.a
if(q!=null){q.a5()
q=r.a.e
if(q!=null)q.az(0)}return!0},
bW:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.fb()
r.d.H(0,new F.jr(q))
r.x=q.a.J()
q=r.a
if(q!=null){q.a5()
q=r.a.e
if(q!=null)q.az(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
D:function(a){var s,r,q=this,p="-",o=H.b([],t.i)
o.push(C.b.an(J.a9(q.e),0))
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
o.push(V.F(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.i(0))
else o.push(p)
r=C.a.p(o,", ")
return a+"{"+r+"}"},
I:function(){return this.D("")}}
F.js.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.v(0,r)}}}
F.jr.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.v(0,r)}}}
F.jl.prototype={
a0:function(){},
k:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.q("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a5()
return!0},
bk:function(a,b,c,d,e,f){var s=F.jk(a,null,b,c,null,d,e,f,0)
this.k(0,s)
return s},
gj:function(a){return this.c.length},
aG:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].bY()
return!0},
bX:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].bW()
return!0},
hr:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.z==null){o=p.r.J()
if(!J.H(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.u(null)}}}}return!0},
i:function(a){return this.I()},
D:function(a){var s,r,q,p
this.a0()
s=H.b([],t.i)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p)s.push(r[p].D(a))
return C.a.p(s,"\n")},
I:function(){return this.D("")}}
F.jm.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
H:function(a,b){var s=this
C.a.H(s.b,b)
C.a.H(s.c,new F.jn(s,b))
C.a.H(s.d,new F.jo(s,b))},
i:function(a){return this.I()},
I:function(){var s,r,q,p=H.b([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].D(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].D(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].D(""))
return C.a.p(p,"\n")}}
F.jn.prototype={
$1:function(a){if(!J.H(a.a,this.a))this.b.$1(a)}}
F.jo.prototype={
$1:function(a){var s=this.a
if(!J.H(a.a,s)&&!J.H(a.b,s))this.b.$1(a)}}
F.jp.prototype={
gj:function(a){return this.b.length+this.c.length},
i:function(a){return this.I()},
I:function(){var s,r,q,p=H.b([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].D(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].D(""))
return C.a.p(p,"\n")}}
F.jq.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.I()},
I:function(){var s,r,q,p=H.b([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].D(""))
return C.a.p(p,"\n")}}
O.e5.prototype={
gm:function(){var s=this.fr
return s==null?this.fr=D.D():s},
C:function(a){var s=this.fr
if(s!=null)s.u(a)},
af:function(){return this.C(null)},
d0:function(a){this.a=null
this.C(a)},
h2:function(){return this.d0(null)},
f4:function(a,b){var s=new D.aH()
s.b=!0
this.C(s)},
f6:function(a,b){var s=new D.aI()
s.b=!0
this.C(s)},
cT:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.B(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.gay()
n=d.h(0,p.gay())
d.l(0,o,n==null?1:n)}m=H.b([],t.U)
d.H(0,new O.ig(f,m))
C.a.b0(m,new O.ih())
l=new H.B(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){o=l.h(0,0)
l.l(0,0,o==null?1:o)}k=H.b([],t.M)
l.H(0,new O.ii(f,k))
C.a.b0(k,new O.ij())
j=new H.B(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.gay()
n=j.h(0,p.gay())
j.l(0,o,n==null?1:n)}i=H.b([],t.d1)
j.H(0,new O.ik(f,i))
C.a.b0(i,new O.il())
h=new H.B(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.o)(e),++q){p=e[q]
r=p.gay()
o=h.h(0,p.gay())
h.l(0,r,o==null?1:o)}g=H.b([],t.gk)
h.H(0,new O.im(f,g))
C.a.b0(g,new O.io())
e=C.c.a_(f.e.a.length+3,4)
f.dy.toString
return A.mT(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
ai:function(a,b){if(b!=null)if(!C.a.A(a,b)){b.a=a.length
a.push(b)}},
a7:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.a_(s,s.length);s.q();){r=s.d
r.toString
q=$.jj
if(q==null)q=$.jj=new V.E(0,0,1)
r.a=q
p=$.ji
r.d=p==null?$.ji=new V.E(0,1,0):p
p=$.jh
r.e=p==null?$.jh=new V.E(-1,0,0):p
p=r.b
if(p!=null){o=p.a
if(o!=null){r.a=o.bw(q).J()
r.d=o.bw(r.d).J()
r.e=o.bw(r.e).J()}}}},
bu:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cT()
s=b4.fr.h(0,b3.aH)
if(s==null){s=A.mS(b3,b4.a)
b4.bl(s)}b3=b2.a=s
b5.e=null}r=b3.z
q=r.bp
b3=b5.e
if(!(b3 instanceof Z.bk))b3=b5.e=null
if(b3==null||!b3.d.n(0,q)){b3=r.k4
if(b3)b5.d.aG()
p=r.r1
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.d.bX()
o.a.bX()
o=o.e
if(o!=null)o.az(0)}o=r.rx
if(o){n=b5.d
m=n.e
if(m!=null)++m.d
n.a.hr()
n=n.e
if(n!=null)n.az(0)}l=b5.d.bm(new Z.c1(b4.a),q)
l.ar($.a7()).e=b2.a.Q.c
if(b3)l.ar($.bg()).e=b2.a.cx.c
if(p)l.ar($.bf()).e=b2.a.ch.c
if(r.r2)l.ar($.bG()).e=b2.a.cy.c
if(o)l.ar($.bh()).e=b2.a.db.c
if(r.ry)l.ar($.be()).e=b2.a.dx.c
b5.e=l}k=H.b([],t.A)
b2.a.O(b4)
if(r.fr){b3=b2.a
p=b4.dx
p=p.gS(p)
b3=b3.dy
b3.toString
b3.ae(p.a3(0,!0))}if(r.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.gS(p)
o=b4.dx
o=b4.cx=p.t(0,o.gS(o))
p=o}b3=b3.fr
b3.toString
b3.ae(p.a3(0,!0))}b3=b2.a
p=b4.gdR()
b3=b3.fy
b3.toString
b3.ae(p.a3(0,!0))
if(r.go){b3=b2.a
p=b4.db
p=p.gS(p)
b3=b3.fx
b3.toString
b3.ae(p.a3(0,!0))}if(r.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.ae(C.i.a3(p,!0))}if(r.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.ae(C.i.a3(p,!0))}if(r.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.ae(C.i.a3(p,!0))}if(r.bo>0){j=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,j)
for(i=0;i<j;++i){b3=b2.a
p=b2.e.a
if(i>=p.length)return H.f(p,i)
p=p[i]
b3=b3.r1
if(i>=b3.length)return H.f(b3,i)
b3=b3[i]
h=new Float32Array(H.c7(p.a3(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,h)}}b3=r.a
if(b3.a){p=b2.a
o=b2.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ai(k,b2.f.e)
b3=b2.a
p=b2.f.e
b3.aj(b3.ry,p)}if(r.k1){b3=r.b
if(b3.a){p=b2.a
o=b2.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ai(k,b2.r.e)
b3=b2.a
p=b2.r.e
b3.aj(b3.y1,p)}b3=r.c
if(b3.a){p=b2.a
o=b2.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ai(k,b2.x.e)
b3=b2.a
p=b2.x.e
b3.aj(b3.aH,p)}b3=r.d
if(b3.a){p=b2.a
o=b2.y.f
p=p.bp
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ai(k,b2.y.e)
b3=b2.a
p=b2.y.e
b3.aj(b3.dm,p)}b3=r.e
p=b3.a
if(!p)o=b3.c
else o=!0
if(o){o=b2.a
n=b2.z.ch
o=o.dr
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.z.f
p=p.dn
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ai(k,b2.z.e)
b3=b2.a
p=b2.z.e
b3.aj(b3.dq,p)}b3=r.z
if(b3.length>0){g=new H.B(t.a)
for(p=b2.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gay()
c=g.h(0,d)
if(c==null)c=0
g.l(0,d,c+1)
b=J.dv(b2.a.c6.h(0,d),c)
n=e.gil()
m=$.aP
n=n.bb(m==null?$.aP=new V.Y(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gir()
m=$.aP
n=n.bb(m==null?$.aP=new V.Y(0,0,0):m)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaV(e)
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
if(e.gdk()){n=e.gda()
m=b.e
m.a.uniform1f(m.d,n)
n=e.gdc()
m=b.f
m.a.uniform1f(m.d,n)
n=e.gdd()
m=b.r
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.o)(b3),++f){o=b3[f].a
j=g.h(0,o)
if(j==null)j=0
o=b2.a.c5.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.Q
if(b3.length>0){p=b4.db
a=p.gS(p)
a0=new H.B(t.a)
for(p=b2.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
c=a0.h(0,0)
if(c==null)c=0
a0.l(0,0,c+1)
b=J.dv(b2.a.c8.h(0,0),c)
n=a.bw(e.a).J()
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
o=b2.a.c7.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.ch
if(b3.length>0){p=b4.db
a=p.gS(p)
a3=new H.B(t.a)
for(p=b2.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gay()
c=a3.h(0,d)
if(c==null)c=0
a3.l(0,d,c+1)
b=J.dv(b2.a.ca.h(0,d),c)
a4=a.t(0,e.gS(e))
n=e.gS(e)
m=$.aP
n=n.bb(m==null?$.aP=new V.Y(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=$.aP
n=a4.bb(n==null?$.aP=new V.Y(0,0,0):n)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaV(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gao()
n=a4.cd(0)
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
h=new Float32Array(H.c7(new V.e6(m,a1,a2,a5,a6,a7,a8,a9,n).a3(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,h)
e.gao()
n=e.gao()
if(!C.a.A(k,n)){n.a=k.length
k.push(n)}n=e.gao()
m=n.gci(n)
if(m){m=b.f
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}e.gb_()
n=e.ge1()
m=b.x
m.toString
a1=n.ghC(n)
a2=n.ghD(n)
a5=n.ghE()
n=n.ghB()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gb_()
if(!C.a.A(k,n)){n.a=k.length
k.push(n)}n=e.gb_()
m=n.gci(n)
if(m){m=b.r
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}if(e.gdk()){n=e.gda()
m=b.y
m.a.uniform1f(m.d,n)
n=e.gdc()
m=b.z
m.a.uniform1f(m.d,n)
n=e.gdd()
m=b.Q
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.o)(b3),++f){o=b3[f].a
j=a3.h(0,o)
if(j==null)j=0
o=b2.a.c9.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.cx
if(b3.length>0){p=b4.db
a=p.gS(p)
b1=new H.B(t.a)
for(p=b2.dx.x,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gay()
c=b1.h(0,d)
if(c==null)c=0
b1.l(0,d,c+1)
b=J.dv(b2.a.cc.h(0,d),c)
n=e.gi0(e)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gip(e).J()
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=a.bb(e.gi0(e))
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaV(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gao()
n=e.gbx()
m=b.f
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gcq(e)
m=b.r
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.giB()
m=b.x
m.a.uniform1f(m.d,n)
n=e.giC()
m=b.y
m.a.uniform1f(m.d,n)
e.gao()
n=e.gao()
if(!C.a.A(k,n)){n.a=k.length
k.push(n)}n=e.gao()
m=n.gci(n)
if(m){m=b.dx
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}e.gb_()
n=e.ge1()
m=b.z
m.toString
a1=n.ghC(n)
a2=n.ghD(n)
a5=n.ghE()
n=n.ghB()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gb_()
if(!C.a.A(k,n)){n.a=k.length
k.push(n)}n=e.gb_()
m=n.gci(n)
if(m){m=b.dy
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}if(e.giq()){n=e.gio()
m=b.Q
m.a.uniform1f(m.d,n)
n=e.gim()
m=b.ch
m.a.uniform1f(m.d,n)}if(e.gdk()){n=e.gda()
m=b.cx
m.a.uniform1f(m.d,n)
n=e.gdc()
m=b.cy
m.a.uniform1f(m.d,n)
n=e.gdd()
m=b.db
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.o)(b3),++f){o=b3[f].a
j=b1.h(0,o)
if(j==null)j=0
o=b2.a.cb.h(0,o)
o.a.uniform1i(o.d,j)}}}if(r.f.c){b2.ai(k,b2.Q.e)
b3=b2.a
p=b2.Q.e
b3.aj(b3.ds,p)}if(r.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.gS(p).cd(0)}b3=b3.id
b3.toString
b3.ae(p.a3(0,!0))}if(r.db){b2.ai(k,b2.ch)
b3=b2.a
p=b2.ch
b3.aj(b3.dt,p)
b3=r.r
if(b3.a){p=b2.a
o=b2.cx.f
p=p.du
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ai(k,b2.cx.e)
b3=b2.a
p=b2.cx.e
b3.aj(b3.dv,p)}b3=r.x
p=b3.a
if(!p)o=b3.c
else o=!0
if(o){o=b2.a
n=b2.cy.ch
o=o.dw
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.cy.f
p=p.dz
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ai(k,b2.cy.e)
b3=b2.a
p=b2.cy.e
b3.aj(b3.dA,p)}}b3=r.y
p=b3.a
o=!p
if(o)n=b3.c
else n=!0
if(n){if(p){p=b2.a
n=b2.db.f
p=p.dB
p.a.uniform1f(p.d,n)}if(b3.c){b2.ai(k,b2.db.e)
p=b2.a
n=b2.db.e
p.aj(p.dC,n)}p=b4.a
p.enable(3042)
p.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].O(b4)
p=b5.e
p.O(b4)
p.a6(b4)
p.ac(b4)
if(o)b3=b3.c
else b3=!0
if(b3)b4.a.disable(3042)
for(b3=b4.a,i=0;i<k.length;++i){p=k[i]
if(p.c){p.c=!1
b3.activeTexture(33984+p.a)
b3.bindTexture(34067,null)}}p=b2.a
p.toString
b3.useProgram(null)
p.x.bn()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cT().aH}}
O.ig.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.dF(a,C.c.a_(b+3,4)*4))}}
O.ih.prototype={
$2:function(a,b){return J.dw(a.a,b.a)}}
O.ii.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.dR(a,C.c.a_(b+3,4)*4))}}
O.ij.prototype={
$2:function(a,b){return J.dw(a.a,b.a)}}
O.ik.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.er(a,C.c.a_(b+3,4)*4))}}
O.il.prototype={
$2:function(a,b){return J.dw(a.a,b.a)}}
O.im.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.eI(a,C.c.a_(b+3,4)*4))}}
O.io.prototype={
$2:function(a,b){return J.dw(a.a,b.a)}}
O.i9.prototype={
aD:function(){var s,r=this
r.cH()
s=r.f
$.A().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.u(r.b,s,1)
s.b=!0
r.a.C(s)}}}
O.cE.prototype={
C:function(a){return this.a.C(a)},
af:function(){return this.C(null)},
aD:function(){},
bS:function(a){var s,r,q=this
if(!q.c.n(0,a)){s=q.c
if(!s.a)s=s.c
else s=!0
if(s){if(!a.a)s=a.c
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.aD()
s=q.a
s.a=null
s.C(null)}},
sb9:function(a){var s,r=this,q=r.c
if(!q.c)r.bS(new A.a1(q.a,!1,!0))
q=r.e
if(q!==a){if(q!=null)q.gm().M(0,r.ga9())
s=r.e
r.e=a
a.gm().k(0,r.ga9())
q=new D.u(r.b+".textureCube",s,r.e)
q.b=!0
r.a.C(q)}}}
O.ia.prototype={}
O.aM.prototype={
d2:function(a){var s,r,q=this
if(!q.f.n(0,a)){s=q.f
q.f=a
r=new D.u(q.b+".color",s,a)
r.b=!0
q.a.C(r)}},
aD:function(){this.cH()
this.d2(new V.L(1,1,1))},
saV:function(a,b){this.bS(new A.a1(!0,!1,this.c.c))
this.d2(b)}}
O.ic.prototype={}
O.id.prototype={
aD:function(){var s,r=this
r.cI()
s=r.ch
$.A().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.u(r.b+".refraction",s,1)
s.b=!0
r.a.C(s)}}}
O.ie.prototype={
d4:function(a){var s=this,r=s.ch
$.A().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.u(s.b+".shininess",r,a)
r.b=!0
s.a.C(r)}},
aD:function(){this.cI()
this.d4(100)}}
O.eD.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.D():s},
C:function(a){var s=this.e
if(s!=null)s.u(a)},
af:function(){return this.C(null)},
a7:function(a,b){},
bu:function(a,b){var s,r,q,p,o,n,m=this,l="Skybox"
if(m.a==null){s=a.fr.h(0,l)
if(s==null){r=a.a
s=new A.iM(r,l)
s.bd(r,l)
s.bq(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.z=s.x.h(0,"posAttr")
r=t.n
s.Q=r.a(s.y.h(0,"fov"))
s.ch=r.a(s.y.h(0,"ratio"))
s.cx=t.r.a(s.y.h(0,"boxClr"))
s.cy=t.Q.a(s.y.h(0,"boxTxt"))
s.db=t.q.a(s.y.h(0,"viewMat"))
a.bl(s)}m.a=s}if(b.e==null){r=b.d.bm(new Z.c1(a.a),$.a7())
r.ar($.a7()).e=m.a.z.c
b.e=r}r=m.c
if(r!=null){r.a=1
r.O(a)}r=a.d
q=a.c
p=m.a
p.O(a)
o=m.b
n=p.Q
n.a.uniform1f(n.d,o)
o=p.ch
o.a.uniform1f(o.d,r/q)
q=m.c
p.cy.cA(q)
q=m.d
r=p.cx
r.a.uniform3f(r.d,q.a,q.b,q.c)
q=a.db
q=q.gS(q).cd(0)
p=p.db
p.toString
p.ae(q.a3(0,!0))
r=b.e
if(r instanceof Z.bk){r.O(a)
r.a6(a)
r.ac(a)}else b.e=null
r=m.a
r.toString
a.a.useProgram(null)
r.x.bn()
r=m.c
if(r!=null)r.ac(a)}}
O.iN.prototype={
gm:function(){var s=this.c
return s==null?this.c=D.D():s},
a7:function(a,b){},
bu:function(a,b){var s,r,q,p=this,o="SolidColor",n=p.a
if(n==null){s=a.fr.h(0,o)
if(s==null){n=a.a
s=new A.iO(n,o)
s.bd(n,o)
s.bq(0,"uniform mat4 projViewObjMat;                       \n                                                   \nattribute vec3 posAttr;                            \n                                                   \nvoid main()                                        \n{                                                  \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0); \n}                                                  \n","precision mediump float; \n                         \nuniform vec4 color;      \n                         \nvoid main()              \n{                        \n   gl_FragColor = color; \n}                        \n")
s.z=s.x.h(0,"posAttr")
s.Q=t.y.a(s.y.h(0,"color"))
s.ch=t.q.a(s.y.h(0,"projViewObjMat"))
a.bl(s)}p.a=s
n=s}r=b.e
if((!(r instanceof Z.bk)?b.e=null:r)==null){n=b.d.bm(new Z.c1(a.a),$.a7())
r=n.ar($.a7())
q=p.a
r.e=q.z.c
b.e=n
n=q}n.O(a)
r=p.b
n.Q.cw(r)
r=a.gdR()
n=n.ch
n.toString
n.ae(r.a3(0,!0))
r=b.e
r.O(a)
r.a6(a)
r.ac(a)
r=p.a
r.toString
a.a.useProgram(null)
r.x.bn()}}
O.eQ.prototype={}
O.eU.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.D():s},
C:function(a){var s=this.e
if(s!=null)s.u(a)},
af:function(){return this.C(null)},
fk:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.ga9(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.f
if(n==null){n=new D.br()
n.d=0
o.f=n}m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}this.af()},
fm:function(a,b){var s,r
for(s=b.gL(b),r=this.ga9();s.q();)s.gE(s).gm().M(0,r)
this.af()},
a7:function(a,b){},
eO:function(a){a=C.c.a_(a+3,4)*4
if(a<=0)return 4
return a},
bu:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.eO(h.c.a.length)
if(g!==h.d||h.f!=h.r){h.d=g
h.r=h.f
h.b=null}s=h.b
if(s==null){s=h.f
r="TextureLayout_"+g+"_"+C.c.i(s.a)
q=a.fr.h(0,r)
if(q==null){q=A.nf(g,s,a.a)
a.bl(q)}h.b=q
s=q}if(b.e==null){s=b.d.bm(new Z.c1(a.a),$.a7())
r=s.ar($.a7())
p=h.b
r.e=p.z.c
b.e=s
s=p}s.O(a)
o=H.b([],t.A)
for(n=0,m=0;s=h.c.a,m<s.length;++m){l=s[m]
if(l!=null&&l.a!=null){s=l.a
if(s!=null)if(!C.a.A(o,s)){s.a=o.length
o.push(s)}s=h.b
r=l.a
s=s.cx
if(n>=s.length)return H.f(s,n)
s=s[n]
p=r==null||!r.d
k=s.a
s=s.d
if(p)k.uniform1i(s,0)
else k.uniform1i(s,r.a)
s=h.b
r=l.b
s=s.cy
if(n>=s.length)return H.f(s,n)
s=s[n]
if(r==null){r=$.ip
if(r==null){r=new V.an(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.ip=r}}j=new Float32Array(H.c7(r.a3(0,!0)))
s.a.uniformMatrix4fv(s.d,!1,j)
s=h.b
i=l.c
s.toString
if(i==null){r=$.cK
if(r==null){r=V.ew(0,0,1,1)
$.cK=r
i=r}else i=r}r=s.db
if(n>=r.length)return H.f(r,n)
r=r[n]
r.a.uniform2f(r.d,i.a,i.b)
s=s.dx
if(n>=s.length)return H.f(s,n)
s=s[n]
s.a.uniform2f(s.d,i.c,i.d)
s=h.b
i=l.d
s.toString
if(i==null){r=$.cK
if(r==null){r=V.ew(0,0,1,1)
$.cK=r
i=r}else i=r}r=s.dy
if(n>=r.length)return H.f(r,n)
r=r[n]
r.a.uniform2f(r.d,i.a,i.b)
s=s.fr
if(n>=s.length)return H.f(s,n)
s=s[n]
s.a.uniform2f(s.d,i.c,i.d)
s=h.b
r=l.e
s=s.fx
if(n>=s.length)return H.f(s,n)
s=s[n]
r=r?1:0
s.a.uniform1i(s.d,r);++n}}s=h.b.Q
s.a.uniform1i(s.d,n)
s=h.b
r=h.a
s.ch.cw(r)
for(s=a.a,m=0;m<o.length;++m){r=o[m]
if(!r.c&&r.d){r.c=!0
s.activeTexture(33984+r.a)
s.bindTexture(3553,r.b)}}r=b.e
if(r instanceof Z.bk){r.O(a)
r.a6(a)
r.ac(a)}else b.e=null
r=h.b
r.toString
s.useProgram(null)
r.x.bn()
for(m=0;m<o.length;++m){r=o[m]
if(r.c){r.c=!1
s.activeTexture(33984+r.a)
s.bindTexture(3553,null)}}}}
O.bB.prototype={
C:function(a){var s=this.f
if(s!=null)s.u(a)},
af:function(){return this.C(null)},
sao:function(a){var s,r=this,q=r.a
if(q!=a){if(q!=null)q.gm().M(0,r.ga9())
s=r.a
r.a=a
if(a!=null)a.gm().k(0,r.ga9())
q=new D.u("texture",s,r.a)
q.b=!0
r.C(q)}},
sdj:function(a,b){var s,r,q=this
if(b==null)b=V.ex()
if(!J.H(q.d,b)){s=q.d
q.d=b
r=new D.u("destination",s,b)
r.b=!0
q.C(r)}}}
T.dM.prototype={
be:function(a){},
er:function(){return this.be(null)},
aF:function(a){var s,r=this
if(r.b!=null)return!1
r.b=a
a.c.gc3().k(0,r.geU())
r.b.c.gaZ().k(0,r.geW())
r.b.c.gbx().k(0,r.geY())
s=r.b.e
s.gcD(s).k(0,r.ghf())
r.b.e.gaZ().k(0,r.ghd())
s=r.b.e
s.gdl(s).k(0,r.ghb())
return!0},
eV:function(a){if(!t._.a(a).x.b.n(0,this.c))return
this.ch=this.Q=!0},
eX:function(a){var s,r=this
if(!r.Q)return
if(r.ch){t._.a(a)
s=a.y.X(a.d)
if(s.a1(s)<r.z)return
r.ch=!1}},
eZ:function(a){var s=this
if(!s.Q)return
s.Q=!1
if(!s.ch)return
s.d_(a)},
hg:function(a){this.ch=this.Q=!0},
he:function(a){var s,r=this
if(!r.Q)return
if(r.ch){t.p.a(a)
s=a.y.X(a.d)
if(s.a1(s)<r.z)return
r.ch=!1}},
hc:function(a){var s=this
if(!s.Q)return
s.Q=!1
if(!s.ch)return
s.d_(a)},
d_:function(a){var s,r,q,p,o,n,m,l,k,j,i,h
t._.a(a)
s=a.d
r=s.a
q=a.c
p=r/q.c
o=s.b/q.d
q=this.a
s=this.d
n=T.lp(q.a,s,!0,1,1,C.k.aX(p*(s.r-1)),C.k.aX(o*(s.x-1)))
s=n.b
m=C.c.bz(0,s)
l=C.c.bz(0,n.c)
k=(m+l*s)*4
s=n.a
r=s.length
if(k<0||k>=r)return H.f(s,k)
q=s[k]
j=k+1
if(j>=r)return H.f(s,j)
j=s[j]
i=k+2
if(i>=r)return H.f(s,i)
i=s[i]
h=k+3
if(h>=r)return H.f(s,h)
h=new T.cg(new V.a5(p,o),V.dL(q,j,i,s[h]))
h.b=!0
s=this.x
if(s!=null)s.u(h)}}
T.cg.prototype={
i:function(a){return"ColorPicker: "+this.c.i(0)+" => "+this.d.i(0)}}
T.eT.prototype={}
T.iV.prototype={}
T.iW.prototype={
gm:function(){var s=this.y
return s==null?this.y=D.D():s}}
T.iX.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.D():s},
O:function(a){var s,r=this
if(!r.c&&r.d>=6){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(34067,r.b)}},
ac:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(34067,null)}}}
T.iZ.prototype={
dH:function(a,b){var s,r=this,q=34067,p=a+"/posx"+b,o=a+"/posy"+b,n=a+"/posz"+b,m=a+"/negx"+b,l=a+"/negy"+b,k=a+"/negz"+b,j=r.a,i=j.createTexture()
j.bindTexture(q,i)
j.texParameteri(q,10242,10497)
j.texParameteri(q,10243,10497)
j.texParameteri(q,10241,9729)
j.texParameteri(q,10240,9729)
j.bindTexture(q,null)
s=new T.iX()
s.a=0
s.b=i
s.c=!1
s.d=0
r.aP(s,i,p,34069,!1,!1)
r.aP(s,i,m,34070,!1,!1)
r.aP(s,i,o,34071,!1,!1)
r.aP(s,i,l,34072,!1,!1)
r.aP(s,i,n,34073,!1,!1)
r.aP(s,i,k,34074,!1,!1)
return s},
dG:function(a){return this.dH(a,".png")},
aP:function(a,b,c,d,e,f){var s=document.createElement("img")
s.src=c;++this.d
W.X(s,"load",new T.j_(this,s,!1,b,!1,d,a),!1)},
h3:function(a,b,c){var s,r,q,p
b=V.ds(b)
s=V.ds(a.width)
r=V.ds(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.hw()
q.width=s
q.height=r
p=C.f.ct(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.lW(p.getImageData(0,0,q.width,q.height))}}}
T.j_.prototype={
$1:function(a){var s=this,r=s.a,q=r.h3(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,s.e?1:0)
C.z.ib(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.c4()}++r.e}}
T.j0.prototype={
eM:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=this.c,r=C.c.a_(s,2),q=this.b,p=this.a,o=p.length,n=q*4,--s;r>=0;--r){m=n*r
l=n*(s-r)
for(k=0;k<q;++k){j=4*k
i=m+j
h=l+j
for(g=0;g<4;++g){f=i+g
e=h+g
if(f<0||f>=o)return H.f(p,f)
d=p[f]
if(e<0||e>=o)return H.f(p,e)
p[f]=p[e]
p[e]=d}}}}}
X.hs.prototype={
gm:function(){var s=this.fr
return s==null?this.fr=D.D():s},
Z:function(a){var s=this.fr
if(s!=null)s.u(a)},
sap:function(a,b){var s,r=this
if(b<1)b=1
s=r.a
if(s!==b){r.y=null
r.c=r.a=b
s=new D.u("width",s,b)
s.b=!0
r.Z(s)}},
sal:function(a,b){var s,r=this
if(b<1)b=1
s=r.b
if(s!==b){r.y=null
r.d=r.b=b
s=new D.u("height",s,b)
s.b=!0
r.Z(s)}},
O:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=3553,d=36161,c=36160
if(g.f){s=a.a
r=s.drawingBufferWidth
q=g.r
if(typeof r!=="number")return r.t()
g.sap(0,C.d.U(r*q))
s=s.drawingBufferHeight
q=g.x
if(typeof s!=="number")return s.t()
g.sal(0,C.d.U(s*q))}if(g.y==null){s=a.a
r=g.ch
q=g.a
p=g.b
o=s.getParameter(3379)
n=V.ds(q)
m=V.ds(p)
o=V.ds(o)
n=Math.min(n,o)
m=Math.min(m,o)
l=s.createTexture()
s.bindTexture(e,l)
s.texParameteri(e,10242,33071)
s.texParameteri(e,10243,33071)
s.texParameteri(e,10241,9729)
s.texParameteri(e,10240,9729)
C.z.dV(s,e,0,6408,n,m,0,6408,5121,f)
s.bindTexture(e,f)
k=T.lo(l)
k.e=q
k.f=p
k.r=n
k.x=m
if(!k.d){k.d=!0
q=k.y
if(q!=null)q.c4()}r.b=k.b
r.c=k.c
r.d=k.d
r.e=k.e
r.f=k.f
r.r=k.r
r.x=k.x
r=r.y
if(r!=null)r.c4()
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
a.c=C.d.U(q*g.a)
p=r.d
a.d=C.d.U(p*g.b)
j=r.a
i=g.c
h=C.d.U(j*i)
r=r.b
j=g.d
s.viewport(h,C.d.U(r*j),C.d.U(q*i),C.d.U(p*j))
s.clearDepth(g.db)
r=g.cx
s.clearColor(r.a,r.b,r.c,r.d)
s.clear(16640)},
ac:function(a){a.a.bindFramebuffer(36160,null)}}
X.k9.prototype={}
X.hU.prototype={
gm:function(){var s=this.x
return s==null?this.x=D.D():s},
O:function(a){var s,r,q,p,o,n,m,l=this,k=a.a
k.bindFramebuffer(36160,null)
k.enable(2884)
k.enable(2929)
k.depthFunc(513)
s=k.drawingBufferWidth
r=k.drawingBufferHeight
q=l.r
p=q.a
if(typeof s!=="number")return H.v(s)
o=C.d.U(p*s)
p=q.b
if(typeof r!=="number")return H.v(r)
n=C.d.U(p*r)
p=C.d.U(q.c*s)
a.c=p
q=C.d.U(q.d*r)
a.d=q
k.viewport(o,n,p,q)
k.clearDepth(l.c)
if(l.b){q=l.a
k.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
k.clear(m)},
ac:function(a){}}
X.hX.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.D():s},
O:function(a){var s
a.cy.bt(V.by())
s=V.by()
a.db.bt(s)},
ac:function(a){a.cy.aI()
a.db.aI()}}
X.el.prototype={
gm:function(){var s=this.f
return s==null?this.f=D.D():s},
Z:function(a){var s=this.f
if(s!=null)s.u(a)},
ew:function(){return this.Z(null)},
O:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.aN(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.bt(i)
p=$.lg
if(p==null){p=V.li()
o=V.kq()
n=$.lv
p=V.l9(p,o,n==null?$.lv=new V.E(0,0,-1):n)
$.lg=p
s=p}else s=p
p=q.b
if(p!=null){r=p.aA(0,a,q)
if(r!=null)s=r.t(0,s)}a.db.bt(s)},
ac:function(a){a.cy.aI()
a.db.aI()}}
X.iT.prototype={}
V.hu.prototype={
hi:function(a,b,c){var s,r,q,p=this
if(p.b==null)return
s=document
r=s.createElement("button")
q=r.style
q.whiteSpace="nowrap"
C.F.e0(r,b)
W.X(r,"click",new V.hv(c),!1)
J.k6(p.b).k(0,r)
J.k6(p.b).k(0,s.createElement("br"))
p.c.push(r)}}
V.hv.prototype={
$1:function(a){return this.a.$0()}}
V.k3.prototype={
$1:function(a){var s=C.d.dW(this.a.ghH(),2)
if(s!=="0.00")P.kJ(s+" fps")}}
V.iJ.prototype={
ed:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.X(o,"scroll",new V.iL(m),!1)},
d8:function(a){var s,r,q,p,o,n,m,l
this.h7()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.a.hJ(a)
q.toString
p=new H.O(p)
p=new P.c6(q.dX(new H.bx(p,p.gj(p))).a())
for(;p.q();){q=p.gE(p)
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
if(H.m4(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.f(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.nM(C.W,q,C.t,!1)
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
hj:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
h7:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other"
if(this.b!=null)return
s=new L.j3()
s.a=new H.B(t.cn)
s.b=new H.B(t.w)
s.c=P.cy(t.dV)
s.d=s.K(0,o)
r=s.K(0,o).p(0,n)
q=K.a3(new H.O("*"))
r.a.push(q)
r.c=!0
r=s.K(0,n).p(0,n)
q=new K.b3()
p=t.L
q.a=H.b([],p)
r.a.push(q)
r=K.a3(new H.O("*"))
q.a.push(r)
r=s.K(0,n).p(0,"BoldEnd")
q=K.a3(new H.O("*"))
r.a.push(q)
r.c=!0
r=s.K(0,o).p(0,m)
q=K.a3(new H.O("_"))
r.a.push(q)
r.c=!0
r=s.K(0,m).p(0,m)
q=new K.b3()
q.a=H.b([],p)
r.a.push(q)
r=K.a3(new H.O("_"))
q.a.push(r)
r=s.K(0,m).p(0,l)
q=K.a3(new H.O("_"))
r.a.push(q)
r.c=!0
r=s.K(0,o).p(0,k)
q=K.a3(new H.O("`"))
r.a.push(q)
r.c=!0
r=s.K(0,k).p(0,k)
q=new K.b3()
q.a=H.b([],p)
r.a.push(q)
r=K.a3(new H.O("`"))
q.a.push(r)
r=s.K(0,k).p(0,"CodeEnd")
q=K.a3(new H.O("`"))
r.a.push(q)
r.c=!0
r=s.K(0,o).p(0,j)
q=K.a3(new H.O("["))
r.a.push(q)
r.c=!0
r=s.K(0,j).p(0,i)
q=K.a3(new H.O("|"))
r.a.push(q)
q=s.K(0,j).p(0,h)
r=K.a3(new H.O("]"))
q.a.push(r)
q.c=!0
q=s.K(0,j).p(0,j)
r=new K.b3()
r.a=H.b([],p)
q.a.push(r)
q=K.a3(new H.O("|]"))
r.a.push(q)
q=s.K(0,i).p(0,h)
r=K.a3(new H.O("]"))
q.a.push(r)
q.c=!0
q=s.K(0,i).p(0,i)
r=new K.b3()
r.a=H.b([],p)
q.a.push(r)
q=K.a3(new H.O("|]"))
r.a.push(q)
s.K(0,o).p(0,g).a.push(new K.hn())
q=s.K(0,g).p(0,g)
r=new K.b3()
r.a=H.b([],p)
q.a.push(r)
q=K.a3(new H.O("*_`["))
r.a.push(q)
q=s.K(0,"BoldEnd")
q.d=q.a.ba(n)
q=s.K(0,l)
q.d=q.a.ba(m)
q=s.K(0,"CodeEnd")
q.d=q.a.ba(k)
q=s.K(0,h)
q.d=q.a.ba("Link")
q=s.K(0,g)
q.d=q.a.ba(g)
this.b=s}}
V.iL.prototype={
$1:function(a){P.lr(C.j,new V.iK(this.a))}}
V.iK.prototype={
$0:function(){var s=C.d.U(document.documentElement.scrollTop),r=this.a.style,q=H.e(-0.01*s)+"px"
r.top=q}}
A.k_.prototype={
$1:function(a){var s,r,q
for(s=this.a,r=0;r<s.length;++r){q=s[r]
q.sc1(0.99*q.e)
q.sc2(0.99*q.f)}}}
A.k0.prototype={
$1:function(a){var s,r,q,p=t.d.a(a).d.ii()
for(s=this.a,r=0;r<s.length;++r)if(s[r].n(0,p)){s=this.b
if(r>=s.length)return H.f(s,r)
q=s[r]
q.sc1(1.21)
q.sc2(1.31)
break}}}
A.k1.prototype={
$0:function(){var s,r,q,p,o,n=null,m="image/png",l=T.lp(this.a.f.a,this.b.ch,!0,n,n,n,n),k=W.hw(),j=l.b
k.width=j
s=l.c
k.height=s
r=C.f.ct(k,"2d")
q=(r&&C.u).hx(r,j,s)
C.X.e_(J.kM(q),0,l.a)
C.u.i2(r,q,0,0)
l=k.toDataURL(m,100)
l.toString
p=H.p0(l,m,"image/octet-stream",0)
o=W.kO()
o.setAttribute("download","backBuffer.png")
o.setAttribute("href",p)
o.click()}};(function aliases(){var s=J.a.prototype
s.e5=s.i
s=J.bv.prototype
s.e7=s.i
s=P.i.prototype
s.cG=s.V
s=P.h.prototype
s.e6=s.by
s=W.C.prototype
s.bA=s.ak
s=W.da.prototype
s.e8=s.ax
s=K.dY.prototype
s.e4=s.aY
s.cF=s.i
s=O.cE.prototype
s.cH=s.aD
s=O.aM.prototype
s.cI=s.aD})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"nW","mN",22)
r(P,"oB","nm",6)
r(P,"oC","nn",6)
r(P,"oD","no",6)
q(P,"lU","ow",7)
r(W,"q8","hK",23)
p(W,"oO",4,null,["$4"],["np"],15,0)
p(W,"oP",4,null,["$4"],["nq"],15,0)
var j
o(j=E.bq.prototype,"gdM",0,0,null,["$1","$0"],["dN","hS"],0,0)
o(j,"gdO",0,0,null,["$1","$0"],["dP","hT"],0,0)
o(j,"gdK",0,0,null,["$1","$0"],["dL","hR"],0,0)
o(j,"gdI",0,0,null,["$1","$0"],["dJ","hO"],0,0)
n(j,"ghM","hN",3)
n(j,"ghP","hQ",3)
o(j=E.eV.prototype,"gcJ",0,0,null,["$1","$0"],["cL","cK"],0,0)
m(j,"gi7","dS",7)
l(j=X.fa.prototype,"gfn","fo",4)
l(j,"gf7","f8",4)
l(j,"gfd","fe",2)
l(j,"gfs","ft",8)
l(j,"gfp","fq",8)
l(j,"gfw","fz",2)
l(j,"gfC","fD",2)
l(j,"gfh","fi",2)
l(j,"gfA","fB",2)
l(j,"gff","fg",2)
l(j,"gfE","fF",20)
l(j,"gfG","fH",4)
l(j,"gfW","fX",5)
l(j,"gfS","fT",5)
l(j,"gfU","fV",5)
o(D.bo.prototype,"geg",0,0,null,["$1","$0"],["aB","eh"],0,0)
o(j=D.cx.prototype,"gcY",0,0,null,["$1","$0"],["cZ","fu"],0,0)
l(j,"gfI","fJ",21)
n(j,"gf1","f2",9)
n(j,"gfM","fN",9)
k(V.a5.prototype,"gj","cf",10)
k(V.E.prototype,"gj","cf",10)
o(j=U.bM.prototype,"gaQ",0,0,null,["$1","$0"],["G","aa"],0,0)
n(j,"gei","ej",11)
n(j,"gfK","fL",11)
o(j=U.cY.prototype,"gaQ",0,0,null,["$1","$0"],["G","aa"],0,0)
l(j,"gbB","bC",1)
l(j,"gbD","bE",1)
l(j,"gbF","bG",1)
o(j=U.cZ.prototype,"gaQ",0,0,null,["$1","$0"],["G","aa"],0,0)
l(j,"gbB","bC",1)
l(j,"gbD","bE",1)
l(j,"gbF","bG",1)
l(j,"geP","eQ",1)
l(j,"geR","eS",1)
l(j,"geo","ep",1)
l(j,"gem","en",1)
l(j,"gek","el",1)
l(U.d_.prototype,"gf_","f0",1)
o(j=M.ch.prototype,"gW",0,0,null,["$1","$0"],["T","b2"],0,0)
n(j,"gfO","fP",12)
n(j,"gfQ","fR",12)
o(M.ci.prototype,"gW",0,0,null,["$1","$0"],["T","b2"],0,0)
o(j=M.cp.prototype,"gW",0,0,null,["$1","$0"],["T","b2"],0,0)
n(j,"gf9","fa",3)
n(j,"gfb","fc",3)
o(j=O.e5.prototype,"ga9",0,0,null,["$1","$0"],["C","af"],0,0)
o(j,"gh1",0,0,null,["$1","$0"],["d0","h2"],0,0)
n(j,"gf3","f4",13)
n(j,"gf5","f6",13)
o(O.cE.prototype,"ga9",0,0,null,["$1","$0"],["C","af"],0,0)
o(O.eD.prototype,"ga9",0,0,null,["$1","$0"],["C","af"],0,0)
o(j=O.eU.prototype,"ga9",0,0,null,["$1","$0"],["C","af"],0,0)
n(j,"gfj","fk",14)
n(j,"gfl","fm",14)
o(O.bB.prototype,"ga9",0,0,null,["$1","$0"],["C","af"],0,0)
o(j=T.dM.prototype,"gcM",0,0,null,["$1","$0"],["be","er"],0,0)
l(j,"geU","eV",1)
l(j,"geW","eX",1)
l(j,"geY","eZ",1)
l(j,"ghf","hg",1)
l(j,"ghd","he",1)
l(j,"ghb","hc",1)
o(X.el.prototype,"gev",0,0,null,["$1","$0"],["Z","ew"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.K,null)
q(P.K,[H.kh,J.a,J.a_,P.d3,P.h,H.bx,P.e_,H.cr,H.f8,H.j6,P.M,H.iw,H.fV,H.bJ,P.U,H.i2,H.e4,H.hZ,H.iS,H.kv,H.aq,H.fx,P.dg,P.c5,P.c6,P.fg,P.cM,P.eM,P.cP,P.jM,P.d9,P.jA,P.d2,P.i,P.dK,P.jK,P.aV,P.al,P.P,P.bp,P.ek,P.cL,P.fu,P.hT,P.hV,P.n,P.N,P.ao,P.kk,P.x,P.bA,W.hB,W.kd,W.ks,W.c4,W.I,W.cI,W.da,W.h_,W.cs,W.ah,W.jE,W.h9,P.di,P.fO,K.hn,K.dY,K.i7,K.iE,L.eK,L.eW,L.eX,L.j3,O.Q,O.cF,E.ht,E.bq,E.bI,E.bU,E.fr,E.iz,E.eV,Z.fe,Z.c1,Z.bk,Z.bO,Z.b7,D.hx,D.br,D.R,X.dI,X.e1,X.i1,X.i5,X.af,X.it,X.j4,X.fa,D.dE,D.bo,D.T,D.ep,D.eH,V.L,V.a0,V.hN,V.e6,V.an,V.ab,V.Y,V.b5,V.ev,V.a5,V.E,U.cY,U.cZ,U.d_,M.ci,M.cp,M.a2,A.dB,A.hp,A.a1,A.dF,A.dR,A.er,A.eI,A.ib,A.cS,A.cT,A.cV,A.cX,A.bK,A.f0,A.jc,F.dT,F.e3,F.eo,F.iF,F.iG,F.iH,F.iI,F.fc,F.jl,F.jm,F.jp,F.jq,O.eQ,O.cE,O.ic,O.bB,T.dM,T.iZ,T.j0,X.iT,X.k9,X.hX,X.el,V.hu,V.iJ])
q(J.a,[J.hY,J.cw,J.bv,J.t,J.bu,J.aJ,H.cG,W.d,W.hm,W.dG,W.dJ,W.aG,W.G,W.fl,W.ak,W.hE,W.hF,W.fm,W.cl,W.fo,W.hG,W.j,W.fv,W.ax,W.hW,W.fA,W.bt,W.i4,W.iq,W.fE,W.fF,W.az,W.fG,W.fI,W.aA,W.fM,W.fP,W.aB,W.fQ,W.aC,W.fW,W.ai,W.h1,W.j2,W.aD,W.h3,W.j5,W.je,W.ha,W.hc,W.he,W.hg,W.hi,P.aK,P.fC,P.aO,P.fK,P.ix,P.fX,P.aQ,P.h5,P.hq,P.fi,P.ey,P.fT])
q(J.bv,[J.em,J.bD,J.ay])
r(J.i_,J.t)
q(J.bu,[J.cv,J.cu])
r(P.cz,P.d3)
q(P.cz,[H.c0,W.fj,W.Z,P.dW])
r(H.O,H.c0)
q(P.h,[H.l,H.aL,H.aT,P.ct])
q(H.l,[H.bP,H.am])
q(H.bP,[H.cN,H.cD])
r(H.cm,H.aL)
q(P.e_,[H.cC,H.ff])
q(P.M,[H.eg,H.e0,H.f7,H.eA,H.fs,P.dA,P.eh,P.ae,P.f9,P.f6,P.bz,P.dN,P.dP])
q(H.bJ,[H.iU,H.i0,H.jV,H.jW,H.jX,P.ju,P.jt,P.jv,P.jw,P.jJ,P.jI,P.jR,P.jC,P.jD,P.i6,P.hH,P.hI,W.hJ,W.ir,W.is,W.iD,W.iR,W.jx,W.iv,W.iu,W.jF,W.jG,W.jH,W.jL,P.jS,P.hR,P.hS,P.hr,E.iA,E.iB,E.iC,E.j1,D.hP,D.hQ,F.jN,F.js,F.jr,F.jn,F.jo,O.ig,O.ih,O.ii,O.ij,O.ik,O.il,O.im,O.io,T.j_,V.hv,V.k3,V.iL,V.iK,A.k_,A.k0,A.k1])
q(H.iU,[H.iQ,H.cf])
r(P.cB,P.U)
q(P.cB,[H.B,W.fh])
r(H.bS,H.cG)
q(H.bS,[H.d5,H.d7])
r(H.d6,H.d5)
r(H.b2,H.d6)
r(H.d8,H.d7)
r(H.aa,H.d8)
q(H.aa,[H.ea,H.eb,H.ec,H.ed,H.ee,H.bT,H.ef])
r(H.dh,H.fs)
r(P.dd,P.ct)
r(P.jB,P.jM)
r(P.d1,P.d9)
r(P.dO,P.eM)
r(P.hL,P.dK)
r(P.jf,P.hL)
r(P.jg,P.dO)
q(P.P,[P.W,P.k])
q(P.ae,[P.bW,P.dZ])
q(W.d,[W.w,W.dV,W.ar,W.db,W.as,W.ac,W.de,W.fd,W.c2,P.dD,P.b0])
q(W.w,[W.C,W.av,W.c3])
q(W.C,[W.r,P.m])
q(W.r,[W.dy,W.dz,W.bH,W.bj,W.bl,W.bm,W.dX,W.bN,W.eB,W.b6,W.cO,W.eO,W.eP,W.bZ])
r(W.hA,W.aG)
r(W.cj,W.fl)
q(W.ak,[W.hC,W.hD])
r(W.fn,W.fm)
r(W.ck,W.fn)
r(W.fp,W.fo)
r(W.dS,W.fp)
r(W.aw,W.dG)
r(W.fw,W.fv)
r(W.dU,W.fw)
r(W.fB,W.fA)
r(W.bs,W.fB)
r(W.aS,W.j)
q(W.aS,[W.bw,W.ag,W.bC])
r(W.e7,W.fE)
r(W.e8,W.fF)
r(W.fH,W.fG)
r(W.e9,W.fH)
r(W.fJ,W.fI)
r(W.cH,W.fJ)
r(W.fN,W.fM)
r(W.en,W.fN)
r(W.ez,W.fP)
r(W.dc,W.db)
r(W.eF,W.dc)
r(W.fR,W.fQ)
r(W.eG,W.fR)
r(W.eL,W.fW)
r(W.h2,W.h1)
r(W.eR,W.h2)
r(W.df,W.de)
r(W.eS,W.df)
r(W.h4,W.h3)
r(W.eY,W.h4)
r(W.b8,W.ag)
r(W.hb,W.ha)
r(W.fk,W.hb)
r(W.d0,W.cl)
r(W.hd,W.hc)
r(W.fy,W.hd)
r(W.hf,W.he)
r(W.d4,W.hf)
r(W.hh,W.hg)
r(W.fS,W.hh)
r(W.hj,W.hi)
r(W.fZ,W.hj)
r(W.fq,W.fh)
r(W.ft,P.cM)
r(W.h0,W.da)
r(P.a4,P.fO)
r(P.fD,P.fC)
r(P.e2,P.fD)
r(P.fL,P.fK)
r(P.ei,P.fL)
r(P.bY,P.m)
r(P.fY,P.fX)
r(P.eN,P.fY)
r(P.h6,P.h5)
r(P.eZ,P.h6)
r(P.dC,P.fi)
r(P.ej,P.b0)
r(P.fU,P.fT)
r(P.eJ,P.fU)
q(K.dY,[K.b3,L.f_])
q(E.ht,[Z.dH,A.eC,T.eT])
q(D.R,[D.aH,D.aI,D.u,X.eq,T.cg])
q(X.eq,[X.cA,X.bQ,X.bR,X.cQ])
q(O.Q,[D.cx,U.bM,M.ch])
q(D.hx,[U.hz,U.S])
q(U.S,[U.bL,U.bX])
q(A.eC,[A.i8,A.iM,A.iO,A.iY])
q(A.f0,[A.c_,A.j9,A.ja,A.jb,A.j8,A.f1,A.cR,A.f2,A.f3,A.jd,A.f4,A.cU,A.cW,A.f5])
q(O.eQ,[O.e5,O.eD,O.iN,O.eU])
q(O.cE,[O.i9,O.ia,O.aM])
q(O.aM,[O.id,O.ie])
q(T.eT,[T.iV,T.iX])
r(T.iW,T.iV)
q(X.iT,[X.hs,X.hU])
s(H.c0,H.f8)
s(H.d5,P.i)
s(H.d6,H.cr)
s(H.d7,P.i)
s(H.d8,H.cr)
s(P.d3,P.i)
s(W.fl,W.hB)
s(W.fm,P.i)
s(W.fn,W.I)
s(W.fo,P.i)
s(W.fp,W.I)
s(W.fv,P.i)
s(W.fw,W.I)
s(W.fA,P.i)
s(W.fB,W.I)
s(W.fE,P.U)
s(W.fF,P.U)
s(W.fG,P.i)
s(W.fH,W.I)
s(W.fI,P.i)
s(W.fJ,W.I)
s(W.fM,P.i)
s(W.fN,W.I)
s(W.fP,P.U)
s(W.db,P.i)
s(W.dc,W.I)
s(W.fQ,P.i)
s(W.fR,W.I)
s(W.fW,P.U)
s(W.h1,P.i)
s(W.h2,W.I)
s(W.de,P.i)
s(W.df,W.I)
s(W.h3,P.i)
s(W.h4,W.I)
s(W.ha,P.i)
s(W.hb,W.I)
s(W.hc,P.i)
s(W.hd,W.I)
s(W.he,P.i)
s(W.hf,W.I)
s(W.hg,P.i)
s(W.hh,W.I)
s(W.hi,P.i)
s(W.hj,W.I)
s(P.fC,P.i)
s(P.fD,W.I)
s(P.fK,P.i)
s(P.fL,W.I)
s(P.fX,P.i)
s(P.fY,W.I)
s(P.h5,P.i)
s(P.h6,W.I)
s(P.fi,P.U)
s(P.fT,P.i)
s(P.fU,W.I)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",W:"double",P:"num",x:"String",aV:"bool",ao:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([R*])","~(R*)","~(ag*)","~(k*,h<bq*>*)","~(j*)","~(bC*)","~(~())","~()","~(bw*)","~(k*,h<T*>*)","W*()","~(k*,h<S*>*)","~(k*,h<a2*>*)","~(k*,h<an*>*)","~(k*,h<bB*>*)","aV(C,x,x,c4)","@(@)","ao(@)","ao(K?,K?)","ao(@,@)","~(b8*)","aV*(h<T*>*)","k(@,@)","x(d)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.nJ(v.typeUniverse,JSON.parse('{"ay":"bv","em":"bv","bD":"bv","p6":"j","pi":"j","p8":"b0","p7":"d","po":"d","pq":"d","p5":"m","pj":"m","p9":"r","pm":"r","pk":"w","ph":"w","pO":"ac","pd":"aS","pa":"av","pr":"av","pp":"ag","pl":"bs","pe":"G","pf":"ai","pn":"b2","t":{"n":["1"],"l":["1"],"h":["1"]},"i_":{"t":["1"],"n":["1"],"l":["1"],"h":["1"]},"bu":{"W":[],"P":[]},"cv":{"W":[],"k":[],"P":[]},"cu":{"W":[],"P":[]},"aJ":{"x":[]},"O":{"i":["k"],"n":["k"],"l":["k"],"h":["k"],"i.E":"k"},"l":{"h":["1"]},"bP":{"l":["1"],"h":["1"]},"cN":{"bP":["1"],"l":["1"],"h":["1"],"h.E":"1"},"aL":{"h":["2"],"h.E":"2"},"cm":{"aL":["1","2"],"l":["2"],"h":["2"],"h.E":"2"},"cD":{"bP":["2"],"l":["2"],"h":["2"],"h.E":"2"},"aT":{"h":["1"],"h.E":"1"},"c0":{"i":["1"],"n":["1"],"l":["1"],"h":["1"]},"eg":{"M":[]},"e0":{"M":[]},"f7":{"M":[]},"eA":{"M":[]},"B":{"U":["1","2"],"N":["1","2"]},"am":{"l":["1"],"h":["1"],"h.E":"1"},"bS":{"y":["1"]},"b2":{"i":["W"],"y":["W"],"n":["W"],"l":["W"],"h":["W"],"i.E":"W"},"aa":{"i":["k"],"y":["k"],"n":["k"],"l":["k"],"h":["k"]},"ea":{"aa":[],"i":["k"],"y":["k"],"n":["k"],"l":["k"],"h":["k"],"i.E":"k"},"eb":{"aa":[],"i":["k"],"y":["k"],"n":["k"],"l":["k"],"h":["k"],"i.E":"k"},"ec":{"aa":[],"i":["k"],"y":["k"],"n":["k"],"l":["k"],"h":["k"],"i.E":"k"},"ed":{"aa":[],"i":["k"],"y":["k"],"n":["k"],"l":["k"],"h":["k"],"i.E":"k"},"ee":{"aa":[],"i":["k"],"y":["k"],"n":["k"],"l":["k"],"h":["k"],"i.E":"k"},"bT":{"aa":[],"i":["k"],"y":["k"],"n":["k"],"l":["k"],"h":["k"],"i.E":"k"},"ef":{"aa":[],"i":["k"],"y":["k"],"n":["k"],"l":["k"],"h":["k"],"i.E":"k"},"fs":{"M":[]},"dh":{"M":[]},"dg":{"cP":[]},"dd":{"h":["1"],"h.E":"1"},"d1":{"d9":["1"],"l":["1"],"h":["1"]},"ct":{"h":["1"]},"cz":{"i":["1"],"n":["1"],"l":["1"],"h":["1"]},"cB":{"U":["1","2"],"N":["1","2"]},"U":{"N":["1","2"]},"d9":{"l":["1"],"h":["1"]},"W":{"P":[]},"dA":{"M":[]},"eh":{"M":[]},"ae":{"M":[]},"bW":{"M":[]},"dZ":{"M":[]},"f9":{"M":[]},"f6":{"M":[]},"bz":{"M":[]},"dN":{"M":[]},"ek":{"M":[]},"cL":{"M":[]},"dP":{"M":[]},"k":{"P":[]},"n":{"l":["1"],"h":["1"]},"r":{"C":[],"w":[],"d":[]},"dy":{"C":[],"w":[],"d":[]},"dz":{"C":[],"w":[],"d":[]},"bH":{"C":[],"w":[],"d":[]},"bj":{"C":[],"w":[],"d":[]},"bl":{"C":[],"w":[],"d":[]},"bm":{"C":[],"w":[],"d":[]},"av":{"w":[],"d":[]},"ck":{"i":["a4<P>"],"n":["a4<P>"],"y":["a4<P>"],"l":["a4<P>"],"h":["a4<P>"],"i.E":"a4<P>"},"cl":{"a4":["P"]},"dS":{"i":["x"],"n":["x"],"y":["x"],"l":["x"],"h":["x"],"i.E":"x"},"fj":{"i":["C"],"n":["C"],"l":["C"],"h":["C"],"i.E":"C"},"C":{"w":[],"d":[]},"dU":{"i":["aw"],"n":["aw"],"y":["aw"],"l":["aw"],"h":["aw"],"i.E":"aw"},"dV":{"d":[]},"dX":{"C":[],"w":[],"d":[]},"bs":{"i":["w"],"n":["w"],"y":["w"],"l":["w"],"h":["w"],"i.E":"w"},"bN":{"C":[],"w":[],"d":[]},"bw":{"j":[]},"e7":{"U":["x","@"],"N":["x","@"]},"e8":{"U":["x","@"],"N":["x","@"]},"e9":{"i":["az"],"n":["az"],"y":["az"],"l":["az"],"h":["az"],"i.E":"az"},"ag":{"j":[]},"Z":{"i":["w"],"n":["w"],"l":["w"],"h":["w"],"i.E":"w"},"w":{"d":[]},"cH":{"i":["w"],"n":["w"],"y":["w"],"l":["w"],"h":["w"],"i.E":"w"},"en":{"i":["aA"],"n":["aA"],"y":["aA"],"l":["aA"],"h":["aA"],"i.E":"aA"},"ez":{"U":["x","@"],"N":["x","@"]},"eB":{"C":[],"w":[],"d":[]},"ar":{"d":[]},"eF":{"i":["ar"],"n":["ar"],"y":["ar"],"d":[],"l":["ar"],"h":["ar"],"i.E":"ar"},"eG":{"i":["aB"],"n":["aB"],"y":["aB"],"l":["aB"],"h":["aB"],"i.E":"aB"},"eL":{"U":["x","x"],"N":["x","x"]},"b6":{"C":[],"w":[],"d":[]},"cO":{"C":[],"w":[],"d":[]},"eO":{"C":[],"w":[],"d":[]},"eP":{"C":[],"w":[],"d":[]},"bZ":{"C":[],"w":[],"d":[]},"as":{"d":[]},"ac":{"d":[]},"eR":{"i":["ac"],"n":["ac"],"y":["ac"],"l":["ac"],"h":["ac"],"i.E":"ac"},"eS":{"i":["as"],"n":["as"],"y":["as"],"d":[],"l":["as"],"h":["as"],"i.E":"as"},"bC":{"j":[]},"eY":{"i":["aD"],"n":["aD"],"y":["aD"],"l":["aD"],"h":["aD"],"i.E":"aD"},"aS":{"j":[]},"fd":{"d":[]},"b8":{"ag":[],"j":[]},"c2":{"d":[]},"c3":{"w":[],"d":[]},"fk":{"i":["G"],"n":["G"],"y":["G"],"l":["G"],"h":["G"],"i.E":"G"},"d0":{"a4":["P"]},"fy":{"i":["ax?"],"n":["ax?"],"y":["ax?"],"l":["ax?"],"h":["ax?"],"i.E":"ax?"},"d4":{"i":["w"],"n":["w"],"y":["w"],"l":["w"],"h":["w"],"i.E":"w"},"fS":{"i":["aC"],"n":["aC"],"y":["aC"],"l":["aC"],"h":["aC"],"i.E":"aC"},"fZ":{"i":["ai"],"n":["ai"],"y":["ai"],"l":["ai"],"h":["ai"],"i.E":"ai"},"fh":{"U":["x","x"],"N":["x","x"]},"fq":{"U":["x","x"],"N":["x","x"]},"c4":{"ah":[]},"cI":{"ah":[]},"da":{"ah":[]},"h0":{"ah":[]},"h_":{"ah":[]},"di":{"bt":[]},"dW":{"i":["C"],"n":["C"],"l":["C"],"h":["C"],"i.E":"C"},"a4":{"fO":["1"]},"e2":{"i":["aK"],"n":["aK"],"l":["aK"],"h":["aK"],"i.E":"aK"},"ei":{"i":["aO"],"n":["aO"],"l":["aO"],"h":["aO"],"i.E":"aO"},"bY":{"m":[],"C":[],"w":[],"d":[]},"eN":{"i":["x"],"n":["x"],"l":["x"],"h":["x"],"i.E":"x"},"m":{"C":[],"w":[],"d":[]},"eZ":{"i":["aQ"],"n":["aQ"],"l":["aQ"],"h":["aQ"],"i.E":"aQ"},"dC":{"U":["x","@"],"N":["x","@"]},"dD":{"d":[]},"b0":{"d":[]},"ej":{"d":[]},"eJ":{"i":["N<@,@>"],"n":["N<@,@>"],"l":["N<@,@>"],"h":["N<@,@>"],"i.E":"N<@,@>"},"Q":{"h":["1*"],"Q.T":"1"},"aH":{"R":[]},"aI":{"R":[]},"u":{"R":[]},"cA":{"R":[]},"bQ":{"R":[]},"bR":{"R":[]},"eq":{"R":[]},"cQ":{"R":[]},"dE":{"T":[]},"bo":{"T":[]},"cx":{"Q":["T*"],"h":["T*"],"Q.T":"T*"},"ep":{"T":[]},"eH":{"T":[]},"bL":{"S":[]},"bM":{"Q":["S*"],"S":[],"h":["S*"],"Q.T":"S*"},"bX":{"S":[]},"cY":{"S":[]},"cZ":{"S":[]},"d_":{"S":[]},"ch":{"Q":["a2*"],"a2":[],"h":["a2*"],"Q.T":"a2*"},"ci":{"a2":[]},"cp":{"a2":[]},"cg":{"R":[]}}'))
H.nI(v.typeUniverse,JSON.parse('{"a_":1,"l":1,"bx":1,"cC":2,"ff":1,"cr":1,"f8":1,"c0":1,"e4":1,"bS":1,"c6":1,"cM":1,"eM":2,"d2":1,"ct":1,"cz":1,"cB":2,"d3":1,"dK":2,"dO":2,"e_":1,"ft":1,"I":1,"cs":1,"aH":1,"aI":1,"u":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",j:"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n"}
var t=(function rtii(){var s=H.lX
return{v:s("bH"),Y:s("bj"),W:s("l<@>"),h:s("C"),C:s("M"),G:s("j"),Z:s("hV"),u:s("bt"),fS:s("bN"),o:s("t<ah>"),s:s("t<x>"),gn:s("t<@>"),dC:s("t<k>"),x:s("t<dB*>"),bb:s("t<dE*>"),U:s("t<dF*>"),g0:s("t<dH*>"),cQ:s("t<bl*>"),ai:s("t<a0*>"),cP:s("t<bo*>"),M:s("t<dR*>"),b:s("t<dT*>"),aZ:s("t<bO*>"),B:s("t<e3*>"),L:s("t<i7*>"),h8:s("t<an*>"),eb:s("t<ep*>"),cS:s("t<ab*>"),d1:s("t<er*>"),k:s("t<eo*>"),bN:s("t<bX*>"),f2:s("t<a2*>"),du:s("t<eH*>"),gk:s("t<eI*>"),eG:s("t<cM<K*>*>"),i:s("t<x*>"),fG:s("t<eQ*>"),A:s("t<eT*>"),br:s("t<f_*>"),fj:s("t<f0*>"),D:s("t<c_*>"),dA:s("t<cR*>"),d6:s("t<cS*>"),dv:s("t<cT*>"),O:s("t<cU*>"),by:s("t<cV*>"),ga:s("t<cW*>"),fF:s("t<cX*>"),j:s("t<fc*>"),m:s("t<W*>"),V:s("t<k*>"),f:s("t<~(R*)*>"),T:s("cw"),g:s("ay"),aU:s("y<@>"),h9:s("B<x*,eC*>"),cn:s("B<x*,eK*>"),dO:s("B<x*,x*>"),w:s("B<x*,eX*>"),en:s("B<k*,n<cS*>*>"),af:s("B<k*,n<cT*>*>"),gr:s("B<k*,n<cV*>*>"),gb:s("B<k*,n<cX*>*>"),J:s("B<k*,c_*>"),E:s("B<k*,aV*>"),a:s("B<k*,k*>"),fU:s("am<k*>"),eM:s("cD<x*,x>"),d4:s("b2"),eB:s("aa"),P:s("ao"),K:s("K"),I:s("a4<P>"),ew:s("bY"),N:s("x"),g7:s("m"),bY:s("b6"),aW:s("bZ"),aF:s("cP"),ak:s("bD"),gH:s("c3"),ac:s("Z"),cJ:s("aV"),gR:s("W"),z:s("@"),S:s("k"),fr:s("bm*"),d:s("cg*"),l:s("bq*"),gj:s("T*"),dn:s("cA*"),hc:s("an*"),_:s("bQ*"),a3:s("bR*"),ah:s("S*"),F:s("0&*"),c:s("K*"),bn:s("a2*"),dV:s("x*"),au:s("bB*"),bc:s("eW*"),p:s("cQ*"),n:s("f1*"),dF:s("c_*"),aq:s("cR*"),r:s("f2*"),y:s("f3*"),R:s("f4*"),q:s("cU*"),t:s("cW*"),Q:s("f5*"),e:s("k*"),dm:s("~(R*)*"),eH:s("l0<ao>?"),X:s("K?"),H:s("P")}})();(function constants(){var s=hunkHelpers.makeConstList
C.n=W.bj.prototype
C.F=W.bl.prototype
C.f=W.bm.prototype
C.u=W.dJ.prototype
C.R=J.a.prototype
C.a=J.t.prototype
C.k=J.cu.prototype
C.c=J.cv.prototype
C.i=J.cw.prototype
C.d=J.bu.prototype
C.b=J.aJ.prototype
C.S=J.ay.prototype
C.X=H.bT.prototype
C.y=J.em.prototype
C.z=P.ey.prototype
C.A=W.cO.prototype
C.m=J.bD.prototype
C.B=W.b8.prototype
C.C=W.c2.prototype
C.D=new E.bI("Browser.chrome")
C.o=new E.bI("Browser.firefox")
C.p=new E.bI("Browser.edge")
C.E=new E.bI("Browser.other")
C.q=function getTagFallback(o) {
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
C.r=function(hooks) { return hooks; }

C.M=new P.ek()
C.t=new P.jf()
C.N=new P.jg()
C.e=new P.jB()
C.v=new A.bK(0,"ColorBlendType.Overwrite")
C.O=new A.bK(1,"ColorBlendType.Additive")
C.P=new A.bK(2,"ColorBlendType.Average")
C.h=new A.bK(3,"ColorBlendType.AlphaBlend")
C.j=new P.bp(0)
C.Q=new P.bp(5e6)
C.T=H.b(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.i)
C.U=H.b(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.i)
C.V=H.b(s([]),t.i)
C.W=H.b(s([0,0,65498,45055,65535,34815,65534,18431]),t.V)
C.w=H.b(s(["bind","if","ref","repeat","syntax"]),t.i)
C.l=H.b(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.i)
C.Y=new E.bU("OperatingSystem.windows")
C.x=new E.bU("OperatingSystem.mac")
C.Z=new E.bU("OperatingSystem.linux")
C.a_=new E.bU("OperatingSystem.other")
C.a0=new P.c5(null,2)})();(function staticFields(){$.lB=null
$.aF=0
$.kS=null
$.kR=null
$.lY=null
$.lT=null
$.m2=null
$.jT=null
$.jY=null
$.kG=null
$.c9=null
$.dn=null
$.dp=null
$.kC=!1
$.aE=C.e
$.ad=H.b([],H.lX("t<K>"))
$.b1=null
$.kc=null
$.kZ=null
$.kY=null
$.fz=P.l6(t.N,t.Z)
$.hM=null
$.ip=null
$.lh=null
$.aP=null
$.cK=null
$.lu=null
$.lw=null
$.jh=null
$.ji=null
$.jj=null
$.lv=null
$.lg=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"pg","m9",function(){return H.oN("_$dart_dartClosure")})
s($,"ps","ma",function(){return H.aR(H.j7({
toString:function(){return"$receiver$"}}))})
s($,"pt","mb",function(){return H.aR(H.j7({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"pu","mc",function(){return H.aR(H.j7(null))})
s($,"pv","md",function(){return H.aR(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"py","mg",function(){return H.aR(H.j7(void 0))})
s($,"pz","mh",function(){return H.aR(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"px","mf",function(){return H.aR(H.lt(null))})
s($,"pw","me",function(){return H.aR(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"pB","mj",function(){return H.aR(H.lt(void 0))})
s($,"pA","mi",function(){return H.aR(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"pP","kK",function(){return P.nl()})
s($,"pS","mo",function(){return P.n6("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"pQ","mn",function(){return P.l7(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"pI","mm",function(){return Z.at(0)})
s($,"pC","mk",function(){return Z.at(511)})
s($,"pK","a7",function(){return Z.at(1)})
s($,"pJ","bg",function(){return Z.at(2)})
s($,"pE","bf",function(){return Z.at(4)})
s($,"pL","bG",function(){return Z.at(8)})
s($,"pM","bh",function(){return Z.at(16)})
s($,"pF","dt",function(){return Z.at(32)})
s($,"pG","du",function(){return Z.at(64)})
s($,"pH","ml",function(){return Z.at(96)})
s($,"pN","ce",function(){return Z.at(128)})
s($,"pD","be",function(){return Z.at(256)})
s($,"pc","m8",function(){return new V.hN()})
s($,"pb","A",function(){return $.m8()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cG,ArrayBufferView:H.cG,Float32Array:H.b2,Float64Array:H.b2,Int16Array:H.ea,Int32Array:H.eb,Int8Array:H.ec,Uint16Array:H.ed,Uint32Array:H.ee,Uint8ClampedArray:H.bT,CanvasPixelArray:H.bT,Uint8Array:H.ef,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLDivElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLInputElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableColElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.hm,HTMLAnchorElement:W.dy,HTMLAreaElement:W.dz,HTMLBaseElement:W.bH,Blob:W.dG,HTMLBodyElement:W.bj,HTMLButtonElement:W.bl,HTMLCanvasElement:W.bm,CanvasRenderingContext2D:W.dJ,CDATASection:W.av,CharacterData:W.av,Comment:W.av,ProcessingInstruction:W.av,Text:W.av,CSSPerspective:W.hA,CSSCharsetRule:W.G,CSSConditionRule:W.G,CSSFontFaceRule:W.G,CSSGroupingRule:W.G,CSSImportRule:W.G,CSSKeyframeRule:W.G,MozCSSKeyframeRule:W.G,WebKitCSSKeyframeRule:W.G,CSSKeyframesRule:W.G,MozCSSKeyframesRule:W.G,WebKitCSSKeyframesRule:W.G,CSSMediaRule:W.G,CSSNamespaceRule:W.G,CSSPageRule:W.G,CSSRule:W.G,CSSStyleRule:W.G,CSSSupportsRule:W.G,CSSViewportRule:W.G,CSSStyleDeclaration:W.cj,MSStyleCSSProperties:W.cj,CSS2Properties:W.cj,CSSImageValue:W.ak,CSSKeywordValue:W.ak,CSSNumericValue:W.ak,CSSPositionValue:W.ak,CSSResourceValue:W.ak,CSSUnitValue:W.ak,CSSURLImageValue:W.ak,CSSStyleValue:W.ak,CSSMatrixComponent:W.aG,CSSRotation:W.aG,CSSScale:W.aG,CSSSkew:W.aG,CSSTranslation:W.aG,CSSTransformComponent:W.aG,CSSTransformValue:W.hC,CSSUnparsedValue:W.hD,DataTransferItemList:W.hE,DOMException:W.hF,ClientRectList:W.ck,DOMRectList:W.ck,DOMRectReadOnly:W.cl,DOMStringList:W.dS,DOMTokenList:W.hG,Element:W.C,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,SubmitEvent:W.j,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aw,FileList:W.dU,FileWriter:W.dV,HTMLFormElement:W.dX,Gamepad:W.ax,History:W.hW,HTMLCollection:W.bs,HTMLFormControlsCollection:W.bs,HTMLOptionsCollection:W.bs,ImageData:W.bt,HTMLImageElement:W.bN,KeyboardEvent:W.bw,Location:W.i4,MediaList:W.iq,MIDIInputMap:W.e7,MIDIOutputMap:W.e8,MimeType:W.az,MimeTypeArray:W.e9,PointerEvent:W.ag,MouseEvent:W.ag,DragEvent:W.ag,Document:W.w,DocumentFragment:W.w,HTMLDocument:W.w,ShadowRoot:W.w,XMLDocument:W.w,DocumentType:W.w,Node:W.w,NodeList:W.cH,RadioNodeList:W.cH,Plugin:W.aA,PluginArray:W.en,RTCStatsReport:W.ez,HTMLSelectElement:W.eB,SourceBuffer:W.ar,SourceBufferList:W.eF,SpeechGrammar:W.aB,SpeechGrammarList:W.eG,SpeechRecognitionResult:W.aC,Storage:W.eL,CSSStyleSheet:W.ai,StyleSheet:W.ai,HTMLTableCellElement:W.b6,HTMLTableDataCellElement:W.b6,HTMLTableHeaderCellElement:W.b6,HTMLTableElement:W.cO,HTMLTableRowElement:W.eO,HTMLTableSectionElement:W.eP,HTMLTemplateElement:W.bZ,TextTrack:W.as,TextTrackCue:W.ac,VTTCue:W.ac,TextTrackCueList:W.eR,TextTrackList:W.eS,TimeRanges:W.j2,Touch:W.aD,TouchEvent:W.bC,TouchList:W.eY,TrackDefaultList:W.j5,CompositionEvent:W.aS,FocusEvent:W.aS,TextEvent:W.aS,UIEvent:W.aS,URL:W.je,VideoTrackList:W.fd,WheelEvent:W.b8,Window:W.c2,DOMWindow:W.c2,Attr:W.c3,CSSRuleList:W.fk,ClientRect:W.d0,DOMRect:W.d0,GamepadList:W.fy,NamedNodeMap:W.d4,MozNamedAttrMap:W.d4,SpeechRecognitionResultList:W.fS,StyleSheetList:W.fZ,SVGLength:P.aK,SVGLengthList:P.e2,SVGNumber:P.aO,SVGNumberList:P.ei,SVGPointList:P.ix,SVGScriptElement:P.bY,SVGStringList:P.eN,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,SVGTransform:P.aQ,SVGTransformList:P.eZ,AudioBuffer:P.hq,AudioParamMap:P.dC,AudioTrackList:P.dD,AudioContext:P.b0,webkitAudioContext:P.b0,BaseAudioContext:P.b0,OfflineAudioContext:P.ej,WebGL2RenderingContext:P.ey,SQLResultSetRowList:P.eJ})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bS.$nativeSuperclassTag="ArrayBufferView"
H.d5.$nativeSuperclassTag="ArrayBufferView"
H.d6.$nativeSuperclassTag="ArrayBufferView"
H.b2.$nativeSuperclassTag="ArrayBufferView"
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.aa.$nativeSuperclassTag="ArrayBufferView"
W.db.$nativeSuperclassTag="EventTarget"
W.dc.$nativeSuperclassTag="EventTarget"
W.de.$nativeSuperclassTag="EventTarget"
W.df.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(A.m0,[])
else A.m0([])})})()
//# sourceMappingURL=test.dart.js.map
