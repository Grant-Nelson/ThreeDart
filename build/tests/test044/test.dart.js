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
a[c]=function(){a[c]=function(){H.oh(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.k2"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.k2"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.k2(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={jF:function jF(){},
m9:function(a,b){if(t.U.b(a))return new H.bX(a,b)
return new H.b9(a,b)},
hc:function(){return new P.bD("No element")},
m3:function(){return new P.bD("Too many elements")},
mu:function(a,b){var s=J.aU(a)
if(typeof s!=="number")return s.U()
H.dV(a,0,s-1,b)},
dV:function(a,b,c,d){if(c-b<=32)H.mt(a,b,c,d)
else H.ms(a,b,c,d)},
mt:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.bk(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.T()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
ms:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.S(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.S(a6+a7,2),d=e-h,c=e+h,b=J.bk(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.T()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.T()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.T()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.T()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.T()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.T()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.T()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.T()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.T()
if(a4>0){s=a3
a3=a2
a2=s}b.m(a5,g,a)
b.m(a5,e,a1)
b.m(a5,f,a3)
b.m(a5,d,b.h(a5,a6))
b.m(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.H(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.az()
if(n<0){if(p!==r){b.m(a5,p,b.h(a5,r))
b.m(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.T()
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
if(typeof j!=="number")return j.az()
if(j<0){if(p!==r){b.m(a5,p,b.h(a5,r))
b.m(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.T()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.T()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.az()
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
H.dV(a5,a6,r-2,a8)
H.dV(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.H(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.H(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.m(a5,p,b.h(a5,r))
b.m(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.az()
m=q-1
if(n<0){b.m(a5,p,b.h(a5,r))
l=r+1
b.m(a5,r,b.h(a5,q))
b.m(a5,q,o)
r=l}else{b.m(a5,p,b.h(a5,q))
b.m(a5,q,o)}q=m
break}}H.dV(a5,r,q,a8)}else H.dV(a5,r,q,a8)},
l:function l(a){this.a=a},
i:function i(){},
c8:function c8(){},
ay:function ay(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b9:function b9(a,b){this.a=a
this.b=b},
bX:function bX(a,b){this.a=a
this.b=b},
c9:function c9(a,b){this.a=null
this.b=a
this.c=b},
ca:function ca(a,b){this.a=a
this.b=b},
bi:function bi(a,b){this.a=a
this.b=b},
eu:function eu(a,b){this.a=a
this.b=b},
bZ:function bZ(){},
ep:function ep(){},
bG:function bG(){},
lo:function(a){var s,r=H.ln(a)
if(r!=null)return r
s="minified:"+a
return s},
o9:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
d:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.T(a)
if(typeof s!="string")throw H.c(H.aL(a))
return s},
cj:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
dN:function(a){return H.mc(a)},
mc:function(a){var s,r,q
if(a instanceof P.I)return H.a_(H.cR(a),null)
if(J.cQ(a)===C.M||t.o.b(a)){s=C.o(a)
if(H.kD(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.kD(q))return q}}return H.a_(H.cR(a),null)},
kD:function(a){var s=a!=="Object"&&a!==""
return s},
kC:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
ml:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.k)(a),++r){q=a[r]
if(!H.cM(q))throw H.c(H.aL(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aX(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.aL(q))}return H.kC(p)},
mk:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.cM(q))throw H.c(H.aL(q))
if(q<0)throw H.c(H.aL(q))
if(q>65535)return H.ml(a)}return H.kC(a)},
jK:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.aX(s,10))>>>0,56320|s&1023)}throw H.c(P.aB(a,0,1114111,null,null))},
bA:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mj:function(a){var s=H.bA(a).getFullYear()+0
return s},
mh:function(a){var s=H.bA(a).getMonth()+1
return s},
md:function(a){var s=H.bA(a).getDate()+0
return s},
me:function(a){var s=H.bA(a).getHours()+0
return s},
mg:function(a){var s=H.bA(a).getMinutes()+0
return s},
mi:function(a){var s=H.bA(a).getSeconds()+0
return s},
mf:function(a){var s=H.bA(a).getMilliseconds()+0
return s},
K:function(a){throw H.c(H.aL(a))},
e:function(a,b){if(a==null)J.aU(a)
throw H.c(H.bP(a,b))},
bP:function(a,b){var s,r,q="index"
if(!H.cM(b))return new P.W(!0,b,q,null)
s=J.aU(a)
if(!(b<0)){if(typeof s!=="number")return H.K(s)
r=b>=s}else r=!0
if(r)return P.F(b,a,q,null,s)
return P.dO(b,q)},
nX:function(a,b,c){if(a>c)return P.aB(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aB(b,a,c,"end",null)
return new P.W(!0,b,"end",null)},
aL:function(a){return new P.W(!0,a,null,null)},
nS:function(a){if(typeof a!="number")throw H.c(H.aL(a))
return a},
c:function(a){var s,r
if(a==null)a=new P.dD()
s=new Error()
s.dartException=a
r=H.oi
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
oi:function(){return J.T(this.dartException)},
p:function(a){throw H.c(a)},
k:function(a){throw H.c(P.aY(a))},
an:function(a){var s,r,q,p,o,n
a=H.ll(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.ir(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
is:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
kN:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ky:function(a,b){return new H.dC(a,b==null?null:b.method)},
jG:function(a,b){var s=b==null,r=s?null:b.method
return new H.dm(a,r,s?null:b.receiver)},
as:function(a){if(a==null)return new H.hM(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bl(a,a.dartException)
return H.nO(a)},
bl:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
nO:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aX(r,16)&8191)===10)switch(q){case 438:return H.bl(a,H.jG(H.d(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bl(a,H.ky(H.d(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.lr()
o=$.ls()
n=$.lt()
m=$.lu()
l=$.lx()
k=$.ly()
j=$.lw()
$.lv()
i=$.lA()
h=$.lz()
g=p.a_(s)
if(g!=null)return H.bl(a,H.jG(s,g))
else{g=o.a_(s)
if(g!=null){g.method="call"
return H.bl(a,H.jG(s,g))}else{g=n.a_(s)
if(g==null){g=m.a_(s)
if(g==null){g=l.a_(s)
if(g==null){g=k.a_(s)
if(g==null){g=j.a_(s)
if(g==null){g=m.a_(s)
if(g==null){g=i.a_(s)
if(g==null){g=h.a_(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bl(a,H.ky(s,g))}}return H.bl(a,new H.eo(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.ck()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bl(a,new P.W(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.ck()
return a},
k4:function(a){var s
if(a==null)return new H.f7(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.f7(a)},
nZ:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
o8:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.o("Unsupported number of arguments for wrapped closure"))},
bO:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.o8)
a.$identity=s
return s},
lX:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.i7().constructor.prototype):Object.create(new H.bS(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.ae
if(typeof r!=="number")return r.A()
$.ae=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.kl(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.lT(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kl(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
lT:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lg,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.lR:H.lQ
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
lU:function(a,b,c,d){var s=H.kk
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
kl:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.lW(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.lU(r,!p,s,b)
if(r===0){p=$.ae
if(typeof p!=="number")return p.A()
$.ae=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.d(H.jx())+";return "+n+"."+H.d(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.ae
if(typeof p!=="number")return p.A()
$.ae=p+1
m+=p
return new Function("return function("+m+"){return this."+H.d(H.jx())+"."+H.d(s)+"("+m+");}")()},
lV:function(a,b,c,d){var s=H.kk,r=H.lS
switch(b?-1:a){case 0:throw H.c(new H.dS("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
lW:function(a,b){var s,r,q,p,o,n,m=H.jx(),l=$.ki
if(l==null)l=$.ki=H.kh("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lV(r,!p,s,b)
if(r===1){p="return function(){return this."+H.d(m)+"."+H.d(s)+"(this."+l+");"
o=$.ae
if(typeof o!=="number")return o.A()
$.ae=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.d(m)+"."+H.d(s)+"(this."+l+", "+n+");"
o=$.ae
if(typeof o!=="number")return o.A()
$.ae=o+1
return new Function(p+o+"}")()},
k2:function(a,b,c,d,e,f,g){return H.lX(a,b,c,d,!!e,!!f,g)},
lQ:function(a,b){return H.fl(v.typeUniverse,H.cR(a.a),b)},
lR:function(a,b){return H.fl(v.typeUniverse,H.cR(a.c),b)},
kk:function(a){return a.a},
lS:function(a){return a.c},
jx:function(){var s=$.kj
return s==null?$.kj=H.kh("self"):s},
kh:function(a){var s,r,q,p=new H.bS("self","target","receiver","name"),o=J.jE(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.jw("Field name "+a+" not found."))},
oh:function(a){throw H.c(new P.d6(a))},
o2:function(a){return v.getIsolateTag(a)},
pj:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ob:function(a){var s,r,q,p,o,n=$.lf.$1(a),m=$.jl[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jq[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.ld.$2(a,n)
if(q!=null){m=$.jl[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jq[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.jt(s)
$.jl[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jq[n]=s
return s}if(p==="-"){o=H.jt(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lj(a,s)
if(p==="*")throw H.c(P.kO(n))
if(v.leafTags[n]===true){o=H.jt(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lj(a,s)},
lj:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.k7(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jt:function(a){return J.k7(a,!1,null,!!a.$ir)},
oc:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.jt(s)
else return J.k7(s,c,null,null)},
o6:function(){if(!0===$.k5)return
$.k5=!0
H.o7()},
o7:function(){var s,r,q,p,o,n,m,l
$.jl=Object.create(null)
$.jq=Object.create(null)
H.o5()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.lk.$1(o)
if(n!=null){m=H.oc(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
o5:function(){var s,r,q,p,o,n,m=C.B()
m=H.bN(C.C,H.bN(C.D,H.bN(C.p,H.bN(C.p,H.bN(C.E,H.bN(C.F,H.bN(C.G(C.o),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.lf=new H.jn(p)
$.ld=new H.jo(o)
$.lk=new H.jp(n)},
bN:function(a,b){return a(b)||b},
m7:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.h6("Illegal RegExp pattern ("+String(n)+")",a))},
lm:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
nY:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
ll:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ka:function(a,b,c){var s=H.of(a,b,c)
return s},
of:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.ll(b),'g'),H.nY(c))},
ir:function ir(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dC:function dC(a,b){this.a=a
this.b=b},
dm:function dm(a,b,c){this.a=a
this.b=b
this.c=c},
eo:function eo(a){this.a=a},
hM:function hM(a){this.a=a},
f7:function f7(a){this.a=a
this.b=null},
bp:function bp(){},
ib:function ib(){},
i7:function i7(){},
bS:function bS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dS:function dS(a){this.a=a},
u:function u(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hf:function hf(a){this.a=a},
hj:function hj(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ax:function ax(a){this.a=a},
dq:function dq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jn:function jn(a){this.a=a},
jo:function jo(a){this.a=a},
jp:function jp(a){this.a=a},
he:function he(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cK:function(a){return a},
ap:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bP(b,a))},
n1:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.nX(a,b,c))
return b},
cf:function cf(){},
bx:function bx(){},
bb:function bb(){},
ce:function ce(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
cg:function cg(){},
dB:function dB(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
mq:function(a,b){var s=b.c
return s==null?b.c=H.jX(a,b.z,!0):s},
kG:function(a,b){var s=b.c
return s==null?b.c=H.cH(a,"kq",[b.z]):s},
kH:function(a){var s=a.y
if(s===6||s===7||s===8)return H.kH(a.z)
return s===11||s===12},
mp:function(a){return a.cy},
o_:function(a){return H.jY(v.typeUniverse,a,!1)},
aK:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aK(a,s,a0,a1)
if(r===s)return b
return H.l3(a,r,!0)
case 7:s=b.z
r=H.aK(a,s,a0,a1)
if(r===s)return b
return H.jX(a,r,!0)
case 8:s=b.z
r=H.aK(a,s,a0,a1)
if(r===s)return b
return H.l2(a,r,!0)
case 9:q=b.Q
p=H.cP(a,q,a0,a1)
if(p===q)return b
return H.cH(a,b.z,p)
case 10:o=b.z
n=H.aK(a,o,a0,a1)
m=b.Q
l=H.cP(a,m,a0,a1)
if(n===o&&l===m)return b
return H.jV(a,n,l)
case 11:k=b.z
j=H.aK(a,k,a0,a1)
i=b.Q
h=H.nL(a,i,a0,a1)
if(j===k&&h===i)return b
return H.l1(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.cP(a,g,a0,a1)
o=b.z
n=H.aK(a,o,a0,a1)
if(f===g&&n===o)return b
return H.jW(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.fB("Attempted to substitute unexpected RTI kind "+c))}},
cP:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aK(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
nM:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aK(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
nL:function(a,b,c,d){var s,r=b.a,q=H.cP(a,r,c,d),p=b.b,o=H.cP(a,p,c,d),n=b.c,m=H.nM(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.eK()
s.a=q
s.b=o
s.c=m
return s},
pl:function(a,b){a[v.arrayRti]=b
return a},
nT:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.lg(s)
return a.$S()}return null},
lh:function(a,b){var s
if(H.kH(b))if(a instanceof H.bp){s=H.nT(a)
if(s!=null)return s}return H.cR(a)},
cR:function(a){var s
if(a instanceof P.I){s=a.$ti
return s!=null?s:H.k_(a)}if(Array.isArray(a))return H.mZ(a)
return H.k_(J.cQ(a))},
mZ:function(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
n7:function(a){var s=a.$ti
return s!=null?s:H.k_(a)},
k_:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.n8(a,s)},
n8:function(a,b){var s=a instanceof H.bp?a.__proto__.__proto__.constructor:b,r=H.mY(v.typeUniverse,s.name)
b.$ccache=r
return r},
lg:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.jY(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
n6:function(a){var s,r,q=this,p=t.K
if(q===p)return H.cL(q,a,H.nc)
if(!H.ar(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.cL(q,a,H.nf)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.cM
else if(s===t.l||s===t.H)r=H.nb
else if(s===t.N)r=H.nd
else r=s===t.k?H.l9:null
if(r!=null)return H.cL(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.oa)){q.r="$i"+p
return H.cL(q,a,H.ne)}}else if(p===7)return H.cL(q,a,H.n4)
return H.cL(q,a,H.n2)},
cL:function(a,b,c){a.b=c
return a.b(b)},
n5:function(a){var s,r,q=this
if(!H.ar(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.n0
else if(q===t.K)r=H.n_
else r=H.n3
q.a=r
return q.a(a)},
nE:function(a){var s,r=a.y
if(!H.ar(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
n2:function(a){var s=this
if(a==null)return H.nE(s)
return H.L(v.typeUniverse,H.lh(a,s),null,s,null)},
n4:function(a){if(a==null)return!0
return this.z.b(a)},
ne:function(a){var s=this,r=s.r
if(a instanceof P.I)return!!a[r]
return!!J.cQ(a)[r]},
pi:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.l7(a,s)},
n3:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.l7(a,s)},
l7:function(a,b){throw H.c(H.mO(H.kU(a,H.lh(a,b),H.a_(b,null))))},
kU:function(a,b,c){var s=P.h_(a),r=H.a_(b==null?H.cR(a):b,null)
return s+": type '"+H.d(r)+"' is not a subtype of type '"+H.d(c)+"'"},
mO:function(a){return new H.cF("TypeError: "+a)},
R:function(a,b){return new H.cF("TypeError: "+H.kU(a,null,b))},
nc:function(a){return a!=null},
n_:function(a){return a},
nf:function(a){return!0},
n0:function(a){return a},
l9:function(a){return!0===a||!1===a},
p4:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.R(a,"bool"))},
p6:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.R(a,"bool"))},
p5:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.R(a,"bool?"))},
p7:function(a){if(typeof a=="number")return a
throw H.c(H.R(a,"double"))},
p9:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.R(a,"double"))},
p8:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.R(a,"double?"))},
cM:function(a){return typeof a=="number"&&Math.floor(a)===a},
pa:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.R(a,"int"))},
pc:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.R(a,"int"))},
pb:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.R(a,"int?"))},
nb:function(a){return typeof a=="number"},
pd:function(a){if(typeof a=="number")return a
throw H.c(H.R(a,"num"))},
pf:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.R(a,"num"))},
pe:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.R(a,"num?"))},
nd:function(a){return typeof a=="string"},
pg:function(a){if(typeof a=="string")return a
throw H.c(H.R(a,"String"))},
jZ:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.R(a,"String"))},
ph:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.R(a,"String?"))},
nH:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.b.A(r,H.a_(a[q],b))
return s},
l8:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
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
if(!j)l+=C.b.A(" extends ",H.a_(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.a_(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.b.A(a3,H.a_(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.b.A(a3,H.a_(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.kd(H.a_(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.d(a1)},
a_:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.a_(a.z,b)
return s}if(l===7){r=a.z
s=H.a_(r,b)
q=r.y
return J.kd(q===11||q===12?C.b.A("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.d(H.a_(a.z,b))+">"
if(l===9){p=H.nN(a.z)
o=a.Q
return o.length!==0?p+("<"+H.nH(o,b)+">"):p}if(l===11)return H.l8(a,b,null)
if(l===12)return H.l8(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.e(b,n)
return b[n]}return"?"},
nN:function(a){var s,r=H.ln(a)
if(r!=null)return r
s="minified:"+a
return s},
l4:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
mY:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.jY(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cI(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cH(a,b,q)
n[b]=o
return o}else return m},
mW:function(a,b){return H.l6(a.tR,b)},
mV:function(a,b){return H.l6(a.eT,b)},
jY:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.l_(H.kY(a,null,b,c))
r.set(b,s)
return s},
fl:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.l_(H.kY(a,b,c,!0))
q.set(c,r)
return r},
mX:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.jV(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aJ:function(a,b){b.a=H.n5
b.b=H.n6
return b},
cI:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.a6(null,null)
s.y=b
s.cy=c
r=H.aJ(a,s)
a.eC.set(c,r)
return r},
l3:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.mT(a,b,r,c)
a.eC.set(r,s)
return s},
mT:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.ar(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.a6(null,null)
q.y=6
q.z=b
q.cy=c
return H.aJ(a,q)},
jX:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.mS(a,b,r,c)
a.eC.set(r,s)
return s},
mS:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.ar(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.jr(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.jr(q.z))return q
else return H.mq(a,b)}}p=new H.a6(null,null)
p.y=7
p.z=b
p.cy=c
return H.aJ(a,p)},
l2:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.mQ(a,b,r,c)
a.eC.set(r,s)
return s},
mQ:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.ar(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cH(a,"kq",[b])
else if(b===t.P||b===t.T)return t.bc}q=new H.a6(null,null)
q.y=8
q.z=b
q.cy=c
return H.aJ(a,q)},
mU:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.a6(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aJ(a,s)
a.eC.set(q,r)
return r},
fk:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
mP:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cH:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fk(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.a6(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aJ(a,r)
a.eC.set(p,q)
return q},
jV:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fk(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.a6(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aJ(a,o)
a.eC.set(q,n)
return n},
l1:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fk(m)
if(j>0){s=l>0?",":""
r=H.fk(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.mP(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.a6(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aJ(a,o)
a.eC.set(q,r)
return r},
jW:function(a,b,c,d){var s,r=b.cy+("<"+H.fk(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.mR(a,b,c,r,d)
a.eC.set(r,s)
return s},
mR:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aK(a,b,r,0)
m=H.cP(a,c,r,0)
return H.jW(a,n,m,c!==m)}}l=new H.a6(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aJ(a,l)},
kY:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
l_:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.mI(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.kZ(a,r,g,f,!1)
else if(q===46)r=H.kZ(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.aI(a.u,a.e,f.pop()))
break
case 94:f.push(H.mU(a.u,f.pop()))
break
case 35:f.push(H.cI(a.u,5,"#"))
break
case 64:f.push(H.cI(a.u,2,"@"))
break
case 126:f.push(H.cI(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.jU(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.cH(p,n,o))
else{m=H.aI(p,a.e,n)
switch(m.y){case 11:f.push(H.jW(p,m,o,a.n))
break
default:f.push(H.jV(p,m,o))
break}}break
case 38:H.mJ(a,f)
break
case 42:l=a.u
f.push(H.l3(l,H.aI(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.jX(l,H.aI(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.l2(l,H.aI(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.eK()
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
H.jU(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.l1(p,H.aI(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.jU(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.mL(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.aI(a.u,a.e,h)},
mI:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
kZ:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.l4(s,o.z)[p]
if(n==null)H.p('No "'+p+'" in "'+H.mp(o)+'"')
d.push(H.fl(s,o,n))}else d.push(p)
return m},
mJ:function(a,b){var s=b.pop()
if(0===s){b.push(H.cI(a.u,1,"0&"))
return}if(1===s){b.push(H.cI(a.u,4,"1&"))
return}throw H.c(P.fB("Unexpected extended operation "+H.d(s)))},
aI:function(a,b,c){if(typeof c=="string")return H.cH(a,c,a.sEA)
else if(typeof c=="number")return H.mK(a,b,c)
else return c},
jU:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aI(a,b,c[s])},
mL:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aI(a,b,c[s])},
mK:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.fB("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.fB("Bad index "+c+" for "+b.i(0)))},
L:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.ar(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.ar(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.L(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.L(a,b.z,c,d,e)
if(p===6){s=d.z
return H.L(a,b,c,s,e)}if(r===8){if(!H.L(a,b.z,c,d,e))return!1
return H.L(a,H.kG(a,b),c,d,e)}if(r===7){s=H.L(a,b.z,c,d,e)
return s}if(p===8){if(H.L(a,b,c,d.z,e))return!0
return H.L(a,b,c,H.kG(a,d),e)}if(p===7){s=H.L(a,b,c,d.z,e)
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
if(!H.L(a,k,c,j,e)||!H.L(a,j,e,k,c))return!1}return H.la(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.la(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.na(a,b,c,d,e)}return!1},
la:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.L(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.L(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.L(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.L(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.L(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
na:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.L(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.l4(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.L(a,H.fl(a,b,l[p]),c,r[p],e))return!1
return!0},
jr:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.ar(a))if(r!==7)if(!(r===6&&H.jr(a.z)))s=r===8&&H.jr(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
oa:function(a){var s
if(!H.ar(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
ar:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
l6:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
a6:function a6(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
eK:function eK(){this.c=this.b=this.a=null},
eF:function eF(){},
cF:function cF(a){this.a=a},
ln:function(a){return v.mangledGlobalNames[a]},
od:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
k7:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fx:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.k5==null){H.o6()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.c(P.kO("Return interceptor for "+H.d(s(a,o))))}q=a.constructor
p=q==null?null:q[J.ks()]
if(p!=null)return p
p=H.ob(a)
if(p!=null)return p
if(typeof a=="function")return C.O
s=Object.getPrototypeOf(a)
if(s==null)return C.v
if(s===Object.prototype)return C.v
if(typeof q=="function"){Object.defineProperty(q,J.ks(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
ks:function(){var s=$.kW
return s==null?$.kW=v.getIsolateTag("_$dart_js"):s},
m4:function(a){if(!H.cM(a))throw H.c(P.kg(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.aB(a,0,4294967295,"length",null))
return J.m5(new Array(a))},
kr:function(a){if(!H.cM(a)||a<0)throw H.c(P.jw("Length must be a non-negative integer: "+H.d(a)))
return new Array(a)},
m5:function(a){return J.jE(a)},
jE:function(a){a.fixed$length=Array
return a},
m6:function(a,b){return J.cV(a,b)},
cQ:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c3.prototype
return J.c2.prototype}if(typeof a=="string")return J.ah.prototype
if(a==null)return J.c4.prototype
if(typeof a=="boolean")return J.hd.prototype
if(a.constructor==Array)return J.a3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a9.prototype
return a}if(a instanceof P.I)return a
return J.fx(a)},
o0:function(a){if(typeof a=="number")return J.b6.prototype
if(typeof a=="string")return J.ah.prototype
if(a==null)return a
if(a.constructor==Array)return J.a3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a9.prototype
return a}if(a instanceof P.I)return a
return J.fx(a)},
bk:function(a){if(typeof a=="string")return J.ah.prototype
if(a==null)return a
if(a.constructor==Array)return J.a3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a9.prototype
return a}if(a instanceof P.I)return a
return J.fx(a)},
jm:function(a){if(a==null)return a
if(a.constructor==Array)return J.a3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a9.prototype
return a}if(a instanceof P.I)return a
return J.fx(a)},
o1:function(a){if(typeof a=="number")return J.b6.prototype
if(typeof a=="string")return J.ah.prototype
if(a==null)return a
if(!(a instanceof P.I))return J.bh.prototype
return a},
k3:function(a){if(typeof a=="string")return J.ah.prototype
if(a==null)return a
if(!(a instanceof P.I))return J.bh.prototype
return a},
aN:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.a9.prototype
return a}if(a instanceof P.I)return a
return J.fx(a)},
kd:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.o0(a).A(a,b)},
H:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cQ(a).n(a,b)},
cU:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.o9(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bk(a).h(a,b)},
lG:function(a,b,c){return J.aN(a).eL(a,b,c)},
lH:function(a,b,c,d){return J.aN(a).f0(a,b,c,d)},
cV:function(a,b){return J.o1(a).at(a,b)},
jv:function(a,b){return J.bk(a).u(a,b)},
fz:function(a,b){return J.jm(a).C(a,b)},
lI:function(a,b){return J.jm(a).E(a,b)},
lJ:function(a){return J.aN(a).gf4(a)},
lK:function(a){return J.aN(a).gcs(a)},
lL:function(a){return J.aN(a).gct(a)},
a0:function(a){return J.cQ(a).gO(a)},
aT:function(a){return J.jm(a).gK(a)},
aU:function(a){return J.bk(a).gl(a)},
ke:function(a){return J.jm(a).fQ(a)},
lM:function(a,b){return J.aN(a).fU(a,b)},
lN:function(a,b,c){return J.k3(a).aR(a,b,c)},
lO:function(a){return J.k3(a).h3(a)},
T:function(a){return J.cQ(a).i(a)},
a:function a(){},
hd:function hd(){},
c4:function c4(){},
b7:function b7(){},
dI:function dI(){},
bh:function bh(){},
a9:function a9(){},
a3:function a3(){},
dl:function dl(){},
X:function X(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b6:function b6(){},
c3:function c3(){},
c2:function c2(){},
ah:function ah(){}},P={
mz:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.nP()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bO(new P.iW(q),1)).observe(s,{childList:true})
return new P.iV(q,s,r)}else if(self.setImmediate!=null)return P.nQ()
return P.nR()},
mA:function(a){self.scheduleImmediate(H.bO(new P.iX(a),0))},
mB:function(a){self.setImmediate(H.bO(new P.iY(a),0))},
mC:function(a){P.jO(C.i,a)},
jO:function(a,b){var s=C.c.S(a.a,1000)
return P.mM(s<0?0:s,b)},
kM:function(a,b){var s=C.c.S(a.a,1000)
return P.mN(s<0?0:s,b)},
mM:function(a,b){var s=new P.cE()
s.dD(a,b)
return s},
mN:function(a,b){var s=new P.cE()
s.dE(a,b)
return s},
p2:function(a){return new P.bL(a,1)},
mF:function(){return C.W},
mG:function(a){return new P.bL(a,3)},
nh:function(a){return new P.cB(a)},
nD:function(){var s,r
for(s=$.bM;s!=null;s=$.bM){$.cO=null
r=s.b
$.bM=r
if(r==null)$.cN=null
s.a.$0()}},
nK:function(){$.k0=!0
try{P.nD()}finally{$.cO=null
$.k0=!1
if($.bM!=null)$.kc().$1(P.le())}},
nI:function(a){var s=new P.ev(a),r=$.cN
if(r==null){$.bM=$.cN=s
if(!$.k0)$.kc().$1(P.le())}else $.cN=r.b=s},
nJ:function(a){var s,r,q,p=$.bM
if(p==null){P.nI(a)
$.cO=$.cN
return}s=new P.ev(a)
r=$.cO
if(r==null){s.b=p
$.bM=$.cO=s}else{q=r.b
s.b=q
$.cO=r.b=s
if(q==null)$.cN=s}},
kL:function(a,b){var s=$.ac
if(s===C.e)return P.jO(a,b)
return P.jO(a,s.f5(b))},
mw:function(a,b){var s=$.ac
if(s===C.e)return P.kM(a,b)
return P.kM(a,s.cr(b,t.d))},
lb:function(a,b,c,d,e){P.nJ(new P.jj(d,e))},
nF:function(a,b,c,d){var s,r=$.ac
if(r===c)return d.$0()
$.ac=c
s=r
try{r=d.$0()
return r}finally{$.ac=s}},
nG:function(a,b,c,d,e){var s,r=$.ac
if(r===c)return d.$1(e)
$.ac=c
s=r
try{r=d.$1(e)
return r}finally{$.ac=s}},
iW:function iW(a){this.a=a},
iV:function iV(a,b,c){this.a=a
this.b=b
this.c=c},
iX:function iX(a){this.a=a},
iY:function iY(a){this.a=a},
cE:function cE(){this.c=0},
jb:function jb(a,b){this.a=a
this.b=b},
ja:function ja(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bL:function bL(a,b){this.a=a
this.b=b},
bj:function bj(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cB:function cB(a){this.a=a},
ev:function ev(a){this.a=a
this.b=null},
e_:function e_(){},
e0:function e0(){},
cm:function cm(){},
je:function je(){},
jj:function jj(a,b){this.a=a
this.b=b},
j3:function j3(){},
j4:function j4(a,b){this.a=a
this.b=b},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
m8:function(a,b,c){return H.nZ(a,new H.u(b.ae("@<0>").c3(c).ae("u<1,2>")))},
kt:function(a,b){return new H.u(a.ae("@<0>").c3(b).ae("u<1,2>"))},
c6:function(a){return new P.cp(a.ae("cp<0>"))},
jT:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
mH:function(a,b){var s=new P.cq(a,b)
s.c=a.e
return s},
m2:function(a,b,c){var s,r
if(P.k1(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.V.push(a)
try{P.ng(a,s)}finally{if(0>=$.V.length)return H.e($.V,-1)
$.V.pop()}r=P.kJ(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
jD:function(a,b,c){var s,r
if(P.k1(a))return b+"..."+c
s=new P.aD(b)
$.V.push(a)
try{r=s
r.a=P.kJ(r.a,a,", ")}finally{if(0>=$.V.length)return H.e($.V,-1)
$.V.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
k1:function(a){var s,r
for(s=$.V.length,r=0;r<s;++r)if(a===$.V[r])return!0
return!1},
ng:function(a,b){var s,r,q,p,o,n,m,l=a.gK(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.t())return
s=H.d(l.gD(l))
b.push(s)
k+=s.length+2;++j}if(!l.t()){if(j<=5)return
if(0>=b.length)return H.e(b,-1)
r=b.pop()
if(0>=b.length)return H.e(b,-1)
q=b.pop()}else{p=l.gD(l);++j
if(!l.t()){if(j<=4){b.push(H.d(p))
return}r=H.d(p)
if(0>=b.length)return H.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gD(l);++j
for(;l.t();p=o,o=n){n=l.gD(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.e(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.d(p)
r=H.d(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
ku:function(a,b){var s,r,q=P.c6(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.k)(a),++r)q.p(0,b.a(a[r]))
return q},
kv:function(a){var s,r={}
if(P.k1(a))return"{...}"
s=new P.aD("")
try{$.V.push(a)
s.a+="{"
r.a=!0
J.lI(a,new P.hm(r,s))
s.a+="}"}finally{if(0>=$.V.length)return H.e($.V,-1)
$.V.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cp:function cp(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
j2:function j2(a){this.a=a
this.c=this.b=null},
cq:function cq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c1:function c1(){},
c7:function c7(){},
z:function z(){},
ds:function ds(){},
hm:function hm(a,b){this.a=a
this.b=b},
ak:function ak(){},
cx:function cx(){},
cr:function cr(){},
d2:function d2(){},
d5:function d5(){},
fX:function fX(){},
hb:function hb(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
ha:function ha(a){this.a=a},
iD:function iD(){},
iE:function iE(){},
jc:function jc(a){this.b=0
this.c=a},
m0:function(a){if(a instanceof H.bp)return a.i(0)
return"Instance of '"+H.d(H.dN(a))+"'"},
jH:function(a,b,c){var s,r=c?J.kr(a):J.m4(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
jI:function(a,b){var s,r=[]
for(s=J.aT(a);s.t();)r.push(s.gD(s))
if(b)return r
return J.jE(r)},
jN:function(a){var s,r=a,q=r.length,p=P.jL(0,null,q)
if(typeof p!=="number")return p.az()
s=p<q
return H.mk(s?r.slice(0,p):r)},
mm:function(a){return new H.he(a,H.m7(a,!1,!0,!1,!1,!1))},
kJ:function(a,b,c){var s=J.aT(b)
if(!s.t())return a
if(c.length===0){do a+=H.d(s.gD(s))
while(s.t())}else{a+=H.d(s.gD(s))
for(;s.t();)a=a+c+H.d(s.gD(s))}return a},
l5:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.h){s=$.lF().b
s=s.test(b)}else s=!1
if(s)return b
r=C.I.fb(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.e(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.jK(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
lY:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
lZ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d8:function(a){if(a>=10)return""+a
return"0"+a},
kn:function(a){return new P.b_(1000*a)},
h_:function(a){if(typeof a=="number"||H.l9(a)||null==a)return J.T(a)
if(typeof a=="string")return JSON.stringify(a)
return P.m0(a)},
fB:function(a){return new P.cY(a)},
jw:function(a){return new P.W(!1,null,null,a)},
kg:function(a,b,c){return new P.W(!0,a,b,c)},
lP:function(a,b){if(a==null)throw H.c(new P.W(!1,null,b,"Must not be null"))
return a},
dO:function(a,b){return new P.bB(null,null,!0,a,b,"Value not in range")},
aB:function(a,b,c,d,e){return new P.bB(b,c,!0,a,d,"Invalid value")},
jL:function(a,b,c){var s
if(typeof c!=="number")return H.K(c)
s=a>c
if(s)throw H.c(P.aB(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.K(c)
s=b>c}else s=!0
if(s)throw H.c(P.aB(b,a,c,"end",null))
return b}return c},
kE:function(a,b){if(a<0)throw H.c(P.aB(a,0,null,b,null))
return a},
F:function(a,b,c,d,e){var s=e==null?J.aU(b):e
return new P.dj(s,!0,a,c,"Index out of range")},
v:function(a){return new P.eq(a)},
kO:function(a){return new P.en(a)},
jM:function(a){return new P.bD(a)},
aY:function(a){return new P.d3(a)},
o:function(a){return new P.eH(a)},
k9:function(a){H.od(a)},
aq:function aq(){},
aZ:function aZ(a,b){this.a=a
this.b=b},
S:function S(){},
b_:function b_(a){this.a=a},
fT:function fT(){},
fU:function fU(){},
E:function E(){},
cY:function cY(a){this.a=a},
dD:function dD(){},
W:function W(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bB:function bB(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dj:function dj(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eq:function eq(a){this.a=a},
en:function en(a){this.a=a},
bD:function bD(a){this.a=a},
d3:function d3(a){this.a=a},
dG:function dG(){},
ck:function ck(){},
d6:function d6(a){this.a=a},
eH:function eH(a){this.a=a},
h6:function h6(a,b){this.a=a
this.b=b},
h8:function h8(){},
q:function q(){},
f:function f(){},
dk:function dk(){},
aj:function aj(){},
dr:function dr(){},
a5:function a5(){},
M:function M(){},
I:function I(){},
J:function J(){},
aD:function aD(a){this.a=a},
nW:function(a){var s
if(t.I.b(a)){s=J.lL(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.cG(a.data,a.height,a.width)},
nV:function(a){if(a instanceof P.cG)return{data:a.a,height:a.b,width:a.c}
return a},
aM:function(a){var s,r,q,p,o
if(a==null)return null
s=P.kt(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.k)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
nU:function(a){var s={}
a.E(0,new P.jk(s))
return s},
cG:function cG(a,b,c){this.a=a
this.b=b
this.c=c},
jk:function jk(a){this.a=a},
de:function de(a,b){this.a=a
this.b=b},
h4:function h4(){},
h5:function h5(){},
f0:function f0(){},
aa:function aa(){},
bv:function bv(){},
dp:function dp(){},
by:function by(){},
dE:function dE(){},
hP:function hP(){},
bC:function bC(){},
e1:function e1(){},
j:function j(){},
bF:function bF(){},
ea:function ea(){},
eP:function eP(){},
eQ:function eQ(){},
eX:function eX(){},
eY:function eY(){},
f9:function f9(){},
fa:function fa(){},
fi:function fi(){},
fj:function fj(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(a){this.a=a},
cZ:function cZ(){},
au:function au(){},
dF:function dF(){},
ew:function ew(){},
dQ:function dQ(){},
dY:function dY(){},
f5:function f5(){},
f6:function f6(){}},W={
kf:function(){var s=document.createElement("a")
return s},
jz:function(){var s=document.createElement("canvas")
return s},
m_:function(a,b,c){var s,r=document.body
r.toString
s=C.l.Z(r,a,b,c)
s.toString
r=new H.bi(new W.Q(s),new W.fV())
return t.h.a(r.gal(r))},
fW:function(a){return"wheel"},
bY:function(a){var s,r,q="element tag unavailable"
try{s=J.aN(a)
if(typeof s.gd4(a)=="string")q=s.gd4(a)}catch(r){H.as(r)}return q},
j1:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kX:function(a,b,c,d){var s=W.j1(W.j1(W.j1(W.j1(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
N:function(a,b,c,d){var s=W.lc(new W.j0(c),t.D)
if(s!=null&&!0)J.lH(a,b,s,!1)
return new W.eG(a,b,s,!1)},
kV:function(a){var s=W.kf(),r=window.location
s=new W.bK(new W.j6(s,r))
s.dw(a)
return s},
mD:function(a,b,c,d){return!0},
mE:function(a,b,c,d){var s,r=d.a,q=r.a
q.href=c
s=q.hostname
r=r.b
if(!(s==r.hostname&&q.port==r.port&&q.protocol==r.protocol))if(s==="")if(q.port===""){r=q.protocol
r=r===":"||r===""}else r=!1
else r=!1
else r=!0
return r},
l0:function(){var s=t.N
s=new W.fd(P.ku(C.t,s),P.c6(s),P.c6(s),P.c6(s),null)
s.dC(null,new H.ca(C.t,new W.j9()),["TEMPLATE"],null)
return s},
lc:function(a,b){var s=$.ac
if(s===C.e)return a
return s.cr(a,b)},
m:function m(){},
fA:function fA(){},
cW:function cW(){},
cX:function cX(){},
bn:function bn(){},
d_:function d_(){},
aV:function aV(){},
aW:function aW(){},
a8:function a8(){},
fL:function fL(){},
D:function D(){},
bT:function bT(){},
fM:function fM(){},
a1:function a1(){},
af:function af(){},
fN:function fN(){},
fO:function fO(){},
fP:function fP(){},
bU:function bU(){},
fR:function fR(){},
bV:function bV(){},
bW:function bW(){},
d9:function d9(){},
fS:function fS(){},
ex:function ex(a,b){this.a=a
this.b=b},
x:function x(){},
fV:function fV(){},
h:function h(){},
b:function b(){},
b0:function b0(){},
dc:function dc(){},
dd:function dd(){},
df:function df(){},
b1:function b1(){},
h9:function h9(){},
b2:function b2(){},
b3:function b3(){},
bu:function bu(){},
b8:function b8(){},
hk:function hk(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(a){this.a=a},
hF:function hF(){},
hG:function hG(a){this.a=a},
ba:function ba(){},
dv:function dv(){},
Y:function Y(){},
Q:function Q(a){this.a=a},
t:function t(){},
ch:function ch(){},
bc:function bc(){},
dK:function dK(){},
hV:function hV(){},
hW:function hW(a){this.a=a},
dT:function dT(){},
aC:function aC(){},
dW:function dW(){},
bd:function bd(){},
dX:function dX(){},
be:function be(){},
i8:function i8(){},
i9:function i9(a){this.a=a},
aE:function aE(){},
cl:function cl(){},
e2:function e2(){},
e3:function e3(){},
bE:function bE(){},
aF:function aF(){},
ab:function ab(){},
e4:function e4(){},
e5:function e5(){},
ik:function ik(){},
bf:function bf(){},
bg:function bg(){},
e9:function e9(){},
ip:function ip(){},
ao:function ao(){},
iC:function iC(){},
es:function es(){},
aH:function aH(){},
bI:function bI(){},
bJ:function bJ(){},
ey:function ey(){},
co:function co(){},
eL:function eL(){},
cs:function cs(){},
f4:function f4(){},
fb:function fb(){},
iZ:function iZ(){},
j_:function j_(a){this.a=a},
jC:function jC(a,b){this.a=a
this.$ti=b},
eG:function eG(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
j0:function j0(a){this.a=a},
jS:function jS(a){this.$ti=a},
bK:function bK(a){this.a=a},
C:function C(){},
ci:function ci(a){this.a=a},
hK:function hK(a){this.a=a},
hJ:function hJ(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(){},
j7:function j7(){},
j8:function j8(){},
fd:function fd(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
j9:function j9(){},
fc:function fc(){},
c_:function c_(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
a4:function a4(){},
j6:function j6(a,b){this.a=a
this.b=b},
fm:function fm(a){this.a=a
this.b=!1},
jd:function jd(a){this.a=a},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eI:function eI(){},
eJ:function eJ(){},
eN:function eN(){},
eO:function eO(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eZ:function eZ(){},
f_:function f_(){},
f1:function f1(){},
cz:function cz(){},
cA:function cA(){},
f2:function f2(){},
f3:function f3(){},
f8:function f8(){},
fe:function fe(){},
ff:function ff(){},
cC:function cC(){},
cD:function cD(){},
fg:function fg(){},
fh:function fh(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){}},K={
G:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.o("The given low and high character strings for a Range must have one and only one characters."))
s=C.b.aU(a,0)
r=C.b.aU(b,0)
if(s>r){q=r
r=s
s=q}return new K.hQ(s,r)},
n:function(a){var s=new K.hX()
s.dt(a)
return s},
at:function at(){},
dh:function dh(){},
U:function U(){this.a=null},
hQ:function hQ(a,b){this.a=a
this.b=b},
hX:function hX(){this.a=null}},L={
im:function(){var s=new L.il()
s.a=new H.u(t.V)
s.b=new H.u(t.w)
s.c=P.c6(t.m)
return s},
dZ:function dZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e7:function e7(a,b,c){this.a=a
this.b=b
this.c=c},
e8:function e8(a){this.b=a
this.c=null},
il:function il(){var _=this
_.d=_.c=_.b=_.a=null},
iq:function iq(a){this.b=a
this.a=this.c=null}},O={
jA:function(){var s=new O.bq()
s.bY()
return s},
bq:function bq(){this.c=this.b=this.a=null},
cc:function cc(){this.b=this.a=null},
dt:function dt(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hu:function hu(a,b){this.a=a
this.b=b},
hv:function hv(){},
hw:function hw(a,b){this.a=a
this.b=b},
hx:function hx(){},
hy:function hy(a,b){this.a=a
this.b=b},
hz:function hz(){},
hA:function hA(a,b){this.a=a
this.b=b},
hB:function hB(){},
ho:function ho(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cb:function cb(){},
hp:function hp(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
al:function al(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hr:function hr(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
hs:function hs(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ht:function ht(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ic:function ic(){}},E={
kS:function(){if(J.jv(window.navigator.vendor,"Google"))return C.z
if(J.jv(window.navigator.userAgent,"Firefox"))return C.m
var s=window.navigator.appVersion
if(J.bk(s).u(s,"Trident")||C.b.u(s,"Edge"))return C.n
if(J.jv(window.navigator.appName,"Microsoft"))return C.n
return C.A},
kT:function(){var s=window.navigator.appVersion
if(J.bk(s).u(s,"Win"))return C.S
if(C.b.u(s,"Mac"))return C.u
if(C.b.u(s,"Linux"))return C.T
return C.U},
mo:function(a,b){var s=new E.hR(a)
s.ds(a,b)
return s},
mv:function(a,b,c,d,e){var s,r
if(t.B.b(a))return E.kK(a,!0,!0,!0,!1)
s=W.jz()
r=s.style
r.width="100%"
r.height="100%"
J.lK(a).p(0,s)
return E.kK(s,!0,!0,!0,!1)},
kK:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.e6(),n=t.z,m=C.q.bQ(a,"webgl2",P.m8(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.p(P.o("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.mo(m,a)
n=new T.ih(m)
n.b=m.getParameter(3379)
m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.er(a)
s=new X.hg()
s.d=P.c6(t.e)
n.b=s
s=new X.hH(n)
s.f=0
s.r=V.dL()
s.x=V.dL()
s.ch=s.Q=1
n.c=s
s=new X.hl(n)
s.r=0
s.x=V.dL()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.io(n)
s.f=V.dL()
s.r=V.dL()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=[]
s=$.fY
n.Q=(s==null?$.fY=new E.eE(E.kS(),E.kT()):s).a===C.m?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.N(q,"contextmenu",n.ge8(),!1))
n.z.push(W.N(a,"focus",n.gee(),!1))
n.z.push(W.N(a,"blur",n.ge2(),!1))
n.z.push(W.N(q,"keyup",n.gei(),!1))
n.z.push(W.N(q,"keydown",n.geg(),!1))
n.z.push(W.N(a,"mousedown",n.gem(),!1))
n.z.push(W.N(a,"mouseup",n.geq(),!1))
n.z.push(W.N(a,p,n.geo(),!1))
r=n.z
W.fW(a)
W.fW(a)
r.push(W.N(a,W.fW(a),n.ges(),!1))
n.z.push(W.N(q,p,n.gea(),!1))
n.z.push(W.N(q,"mouseup",n.gec(),!1))
n.z.push(W.N(q,"pointerlockchange",n.gev(),!1))
n.z.push(W.N(a,"touchstart",n.geG(),!1))
n.z.push(W.N(a,"touchend",n.geC(),!1))
n.z.push(W.N(a,"touchmove",n.geE(),!1))
o.ch=!0
o.cx=!1
o.cy=new P.aZ(Date.now(),!1)
o.db=0
o.cd()
return o},
fI:function fI(){},
bs:function bs(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bo:function bo(a){this.b=a},
bz:function bz(a){this.b=a},
eE:function eE(a,b){this.a=a
this.b=b},
hR:function hR(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hS:function hS(a){this.a=a},
hT:function hT(a){this.a=a},
hU:function hU(a){this.a=a},
e6:function e6(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.f=_.e=_.d=_.c=_.b=null},
ij:function ij(a){this.a=a}},Z={
jR:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cK(c)),35044)
a.bindBuffer(b,null)
return new Z.et(b,s)},
a7:function(a){return new Z.aG(a)},
et:function et(a,b){this.a=a
this.b=b},
fJ:function fJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iU:function iU(a){this.a=a},
d0:function d0(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
c0:function c0(a,b,c){this.a=a
this.b=b
this.c=c},
aG:function aG(a){this.a=a}},D={
a2:function(){var s=new D.bt()
s.d=0
return s},
fK:function fK(){},
bt:function bt(){var _=this
_.d=_.c=_.b=_.a=null},
h0:function h0(a){this.a=a},
h1:function h1(a){this.a=a},
ag:function ag(){this.b=null},
b4:function b4(){this.b=null},
b5:function b5(){this.b=null},
B:function B(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
br:function br(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ai:function ai(){},
c5:function c5(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null}},X={d1:function d1(a,b){this.a=a
this.b=b},dn:function dn(a,b){this.a=a
this.b=b},hg:function hg(){this.d=this.b=this.a=null},hl:function hl(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cd:function cd(a,b,c){this.a=a
this.b=b
this.c=c},hH:function hH(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},io:function io(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},er:function er(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
m1:function(a){var s=new X.h7(),r=V.ad(1)
s.a=new V.av(0,0,0,r)
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.kF
if(r==null){r=V.mn(0,0,1,1)
$.kF=r}s.r=r
return s},
jy:function jy(){},
h7:function h7(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dH:function dH(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ia:function ia(){}},V={
k6:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
ad:function(a){var s
if(a<0)s=0
else s=a>1?1:a
return s},
kb:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.dd(a-b,s)
return(a<0?a+s:a)+b},
w:function(a,b,c){if(a==null)return C.b.a0("null",c)
$.A().toString
return C.b.a0(C.d.d6(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bQ:function(a,b,c){var s,r,q,p,o,n,m=[]
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.k)(a),++q){p=V.w(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.e(m,o)
s=C.b.a0(m[o],r)
n=m.length
if(o>=n)return H.e(m,o)
m[o]=s}return m},
k8:function(a){return C.d.h0(Math.pow(2,C.N.bF(Math.log(H.nS(a))/Math.log(2))))},
jJ:function(){var s=$.kx
return s==null?$.kx=V.az(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
az:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kw:function(a,b,c){var s=c.J(),r=b.aG(s).J(),q=s.aG(r),p=new V.y(a.a,a.b,a.c),o=r.aA(0).aJ(p),n=q.aA(0).aJ(p),m=s.aA(0).aJ(p)
return V.az(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
dL:function(){var s=$.kA
return s==null?$.kA=new V.aA(0,0):s},
kB:function(){var s=$.am
return s==null?$.am=new V.Z(0,0,0):s},
mn:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dP(a,b,c,d)},
cn:function(){var s=$.kQ
return s==null?$.kQ=new V.y(0,0,0):s},
mx:function(){var s=$.iF
return s==null?$.iF=new V.y(-1,0,0):s},
jQ:function(){var s=$.iG
return s==null?$.iG=new V.y(0,1,0):s},
my:function(){var s=$.iH
return s==null?$.iH=new V.y(0,0,1):s},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fZ:function fZ(){},
du:function du(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bw:function bw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aA:function aA(a,b){this.a=a
this.b=b},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
dM:function dM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dP:function dP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bH:function bH(a,b){this.a=a
this.b=b},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
oe:function(a){P.mw(C.K,new V.ju(a))},
mr:function(a){var s=new V.i1()
s.dv(a,!0)
return s},
aX:function aX(){},
ju:function ju(a){this.a=a},
d7:function d7(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dg:function dg(a){var _=this
_.a=a
_.d=_.c=_.b=null},
di:function di(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dJ:function dJ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i1:function i1(){this.b=this.a=null},
i3:function i3(a){this.a=a},
i2:function i2(a){this.a=a},
i4:function i4(a){this.a=a}},U={
km:function(a){var s=new U.d4()
s.a=a
return s},
d4:function d4(){this.b=this.a=null},
hI:function hI(){},
dR:function dR(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={da:function da(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
ma:function(a,b){var s=a.aK,r=new A.hn(b,s)
r.du(b,s)
r.dr(a,b)
return r},
mb:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="MaterialLight_"+a5.ga5(a5)+a6.ga5(a6)+a7.ga5(a7)+a8.ga5(a8)+a9.ga5(a9)+b0.ga5(b0)+b1.ga5(b1)+b2.ga5(b2)+b3.ga5(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+(a3?"1":"0")+"_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.k)(b4),++r)a+="_"+H.d(b4[r].a)}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.k)(b5),++r)a+="_"+H.d(b5[r].a)}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.k)(b6),++r)a+="_"+H.d(b6[r].a)}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.k)(b7),++r)a+="_"+H.d(b7[r].a)}for(s=b4.length,q=a3,p=0,r=0;r<s;++r,q=!0)p+=b4[r].b
for(o=b5.length,r=0;r<o;++r,q=!0)p+=b5[r].b
for(o=b6.length,r=0;r<o;++r,q=!0)p+=b6[r].b
for(n=b7.length,r=0;r<n;++r,q=!0)p+=b7[r].b
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
d=h||g||j||a3
c=l&&i
a0=a0&&f
b=$.aR()
if(h){s=$.aQ()
b=new Z.aG(b.a|s.a)}if(g){s=$.aP()
b=new Z.aG(b.a|s.a)}if(f){s=$.aS()
b=new Z.aG(b.a|s.a)}if(e){s=$.aO()
b=new Z.aG(b.a|s.a)}return new A.hq(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,p,m,i,m,q,d,!0,c,!1,k,q,j,h,g,f,!1,e,a0,!1,a2,a3,a4,a.charCodeAt(0)==0?a:a,b)},
jh:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
ji:function(a,b,c){var s,r="Txt, txt2D).rgb;\n"
A.jh(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.fy(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}a.a=s+"}\n"},
nm:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jh(b,r,"emission")
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
ni:function(a,b){var s,r=a.b
if(!(r.a||r.b||!1))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.ji(b,r,"ambient")
b.a+="\n"},
nk:function(a,b){var s,r=a.c
if(!(r.a||r.b||!1))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.ji(b,r,"diffuse")
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
nn:function(a,b){var s,r=a.d
if(!(r.a||r.b||!1))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.ji(b,r,"invDiffuse")
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
nt:function(a,b){var s,r=a.e
if(!(r.a||r.b||!1))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.ji(b,r,"specular")
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
np:function(a,b){var s,r,q
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
nr:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jh(b,r,"reflect")
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
ns:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jh(b,r,"refract")
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
nj:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.d(s)
q=A.fy(r)
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
if(typeof s!=="number")return s.a1()
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
s=c.a+="   return "+C.a.k(o," * ")+";\n"
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
s=c.a+="      highLight = intensity*("+C.a.k(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.k(o," + ")+");\n"
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
nl:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+H.d(s)
q=A.fy(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.a1()
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
c.a+="      highLight = intensity*("+C.a.k(l," + ")+");\n"}else c.a+="   highLight = "+C.a.k(l," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.a.k(m," + ")+");\n"
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
nq:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.d(s)
q=A.fy(r)
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
if(typeof s!=="number")return s.a1()
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
p=c.a+="   return "+C.a.k(j," * ")+";\n"
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
p=c.a+="      highLight = intensity*("+C.a.k(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.a.k(j," + ")+");\n"
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
nu:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.d(s)
q=A.fy(r)
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
if(typeof s!=="number")return s.a1()
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
if(m){s=$.fY
if(s==null)s=$.fY=new E.eE(E.kS(),E.kT())
p=c.a
if(s.b===C.u){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
s=c.a+="   return "+C.a.k(h," * ")+";\n"
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
s=c.a+="      highLight = intensity*("+C.a.k(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.k(h," + ")+");\n"
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
no:function(a,b){var s,r
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
s=b.a+="   return "+C.a.k(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
nv:function(a){var s,r,q,p,o,n,m,l,k,j="   lightAccum += all",i="precision mediump float;\n\n",h="precision mediump float;\n\nvarying vec3 normalVec;\n",g=new P.aD("")
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
g.a=r}if(a.dy){r+="uniform mat4 invViewMat;\n"
g.a=r}p=a.y2
if(p){r+="uniform vec4 fogColor;\n"
g.a=r
r+="uniform float fogStop;\n"
g.a=r
r=g.a=r+"uniform float fogWidth;\n"}g.a=r+"\n"
A.nm(a,g)
A.ni(a,g)
A.nk(a,g)
A.nn(a,g)
A.nt(a,g)
r=a.db
if(r){o=g.a+="// === Environmental ===\n"
o+="\n"
g.a=o
o+="uniform samplerCube envSampler;\n"
g.a=o
g.a=o+"\n"
A.nr(a,g)
A.ns(a,g)}A.np(a,g)
o=g.a+="// === Alpha ===\n"
o=g.a=o+"\n"
n=a.y
m=n.a
if(m){o+="uniform float alpha;\n"
g.a=o}n=n.b
if(n)o=g.a=o+"uniform sampler2D alphaTxt;\n"
o+="float alphaValue()\n"
g.a=o
o=g.a=o+"{\n"
if(!(m||n||!1))o=g.a=o+"   return 1.0;\n"
else if(n||!1){if(m){if(n){o+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
g.a=o}}else if(n){o+="   float a = texture2D(alphaTxt, txt2D).a;\n"
g.a=o}o+="   if (a <= 0.000001) discard;\n"
g.a=o
o+="   return a;\n"
g.a=o}else if(m){o+="   return alpha;\n"
g.a=o}o+="}\n"
g.a=o
g.a=o+"\n"
o=a.k1
if(o){for(n=a.z,m=n.length,l=0;l<n.length;n.length===m||(0,H.k)(n),++l)A.nj(a,n[l],g)
for(n=a.Q,m=n.length,l=0;l<n.length;n.length===m||(0,H.k)(n),++l)A.nl(a,n[l],g)
for(n=a.ch,m=n.length,l=0;l<n.length;n.length===m||(0,H.k)(n),++l)A.nq(a,n[l],g)
for(n=a.cx,m=n.length,l=0;l<n.length;n.length===m||(0,H.k)(n),++l)A.nu(a,n[l],g)
A.no(a,g)}n=g.a+="// === Main ===\n"
n+="\n"
g.a=n
n+="void main()\n"
g.a=n
n+="{\n"
g.a=n
n=g.a=n+"   float alpha = alphaValue();\n"
if(s){s=n+"   vec3 norm = normal();\n"
g.a=s}else s=n
if(r)s=g.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
k=[]
if(o){g.a=s+u.o
k.push("lightAccum")
s=a.b
if(s.a||s.b||!1)g.a+="   setAmbientColor();\n"
s=a.c
if(s.a||s.b||!1)g.a+="   setDiffuseColor();\n"
s=a.d
if(s.a||s.b||!1)g.a+="   setInvDiffuseColor();\n"
s=a.e
if(s.a||s.b||!1)g.a+="   setSpecularColor();\n"
for(s=a.z,r=s.length,l=0;l<s.length;s.length===r||(0,H.k)(s),++l){o=s[l].i(0)
if(0>=o.length)return H.e(o,0)
g.a+=j+(o[0].toUpperCase()+C.b.aa(o,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,l=0;l<s.length;s.length===r||(0,H.k)(s),++l){o=s[l].i(0)
if(0>=o.length)return H.e(o,0)
g.a+=j+(o[0].toUpperCase()+C.b.aa(o,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,l=0;l<s.length;s.length===r||(0,H.k)(s),++l){o=s[l].i(0)
if(0>=o.length)return H.e(o,0)
g.a+=j+(o[0].toUpperCase()+C.b.aa(o,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,l=0;l<s.length;s.length===r||(0,H.k)(s),++l){o=s[l].i(0)
if(0>=o.length)return H.e(o,0)
g.a+=j+(o[0].toUpperCase()+C.b.aa(o,1))+"Values(norm);\n"}if(a.cy<=0)g.a+="   lightAccum += nonLightValues(norm);\n"}s=a.a
if(s.a||s.b||!1)k.push("emissionColor()")
s=a.r
if(s.a||s.b||!1)k.push("reflect(refl)")
s=a.x
if(s.a||s.b||!1)k.push("refract(refl)")
if(k.length<=0)k.push("vec3(0.0, 0.0, 0.0)")
s=g.a+="   vec4 objClr = vec4("+C.a.k(k," + ")+", alpha);\n"
if(q){s+="   objClr = colorMat*objClr;\n"
g.a=s}if(p){s+="   float fogFactor = (viewPos.z-fogStop) / fogWidth;\n"
g.a=s
s=g.a=s+"   objClr = mix(fogColor, objClr, clamp(fogFactor, 0.0, 1.0));\n"}s+="   gl_FragColor = objClr;\n"
g.a=s
s=g.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
nw:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.au+"];\n"
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
ny:function(a,b){var s
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
nx:function(a,b){var s
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
nA:function(a,b){var s,r
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
nB:function(a,b){var s,r
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
nz:function(a,b){var s
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
nC:function(a,b){var s
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
fy:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.aa(a,1)},
jP:function(a,b,c,d,e){var s=new A.iv(a,c,e)
s.f=d
P.jH(d,0,!1)
return s},
fC:function fC(a,b,c){this.a=a
this.b=b
this.c=c},
fD:function fD(a){this.a=a},
P:function P(a,b,c){this.a=a
this.b=b
this.c=c},
hn:function hn(a,b){var _=this
_.he=_.cv=_.b_=_.aK=_.au=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.cM=_.cL=_.cK=_.bE=_.bD=_.bC=_.bB=_.bA=_.bz=_.by=_.bx=_.hj=_.cJ=_.cI=_.hi=_.cH=_.cG=_.cF=_.hh=_.cE=_.cD=_.cC=_.hg=_.cB=_.cA=_.hf=_.cz=_.cw=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fH:function fH(a,b){this.a=a
this.b=b},
fQ:function fQ(a,b){this.a=a
this.b=b},
hO:function hO(a,b){this.a=a
this.b=b},
i6:function i6(a,b){this.a=a
this.b=b},
hq:function hq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.au=b5
_.aK=b6
_.b_=b7},
ef:function ef(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eg:function eg(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ej:function ej(a,b,c,d,e,f,g,h,i,j){var _=this
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
em:function em(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dU:function dU(){},
iu:function iu(){},
iA:function iA(a){this.a=a},
ec:function ec(a,b,c){this.a=a
this.c=b
this.d=c},
ix:function ix(a,b,c){this.a=a
this.c=b
this.d=c},
iy:function iy(a,b,c){this.a=a
this.c=b
this.d=c},
iz:function iz(a,b,c){this.a=a
this.c=b
this.d=c},
iv:function iv(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
eb:function eb(a,b,c){this.a=a
this.c=b
this.d=c},
iw:function iw(a,b,c){this.a=a
this.c=b
this.d=c},
ed:function ed(a,b,c){this.a=a
this.c=b
this.d=c},
ee:function ee(a,b,c){this.a=a
this.c=b
this.d=c},
iB:function iB(a,b,c){this.a=a
this.c=b
this.d=c},
eh:function eh(a,b,c){this.a=a
this.c=b
this.d=c},
ei:function ei(a,b,c){this.a=a
this.c=b
this.d=c},
ek:function ek(a,b,c){this.a=a
this.c=b
this.d=c},
el:function el(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jg:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
cJ:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.y(f,e+a3,d+a4)
h.a=c
s=a3-a4
r=a4-a5
q=a5-a3
p=h.b=new V.y(s+a5,r+a3,q+a4)
o=new V.y(s-a5,r-a3,q-a4)
h.c=o
n=h.d=new V.y(g-a5,e-a3,d-a4)
if(f>0){h.d=p
h.b=n
f=p
g=n}else{f=n
g=p}for(d=f,f=g,g=c,e=o,m=0;m<a6;++m,l=d,d=g,g=f,f=e,e=l){h.a=f
h.b=e
h.c=d
h.d=g}k=F.jg(g)
j=F.jg(f)
i=F.og(a1,a2,new F.jf(h,F.jg(e),F.jg(d),j,k,a0),b)
if(i!=null)a.bJ(i)},
og:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(a<1)return null
if(b<1)return null
s=F.kI()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
m=o.cl(new V.av(n,0,0,1),new V.aA(p,1))
c.$3(m,p,0)
r.push(m.bv(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
m=i.cl(new V.av(h,g,f,1),new V.aA(p,k))
c.$3(m,p,l)
r.push(m.bv(d))}}s.d.f1(a+1,b+1,r)
return s},
db:function(a,b,c){var s=new F.h2(),r=a.a
if(r==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.p(P.o("May not create a face with vertices attached to different shapes."))
s.eT(a)
s.eU(b)
s.eV(c)
s.a.a.d.b.push(s)
s.a.a.R()
return s},
kI:function(){var s=new F.hY(),r=new F.iJ(s)
r.b=!1
r.c=[]
s.a=r
r=new F.i0(s)
r.b=[]
s.b=r
r=new F.i_(s)
r.b=[]
s.c=r
r=new F.hZ(s)
r.b=[]
s.d=r
return s},
kR:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.iI(),p=new F.iR()
p.b=[]
q.b=p
p=new F.iN()
p.b=[]
p.c=[]
q.c=p
p=new F.iK()
p.b=[]
p.c=[]
p.d=[]
q.d=p
h=$.lB()
q.e=0
p=$.aR()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.aQ().a)!==0?e:r
q.x=(s&$.aP().a)!==0?b:r
q.y=(s&$.aS().a)!==0?f:r
q.z=(s&$.bm().a)!==0?g:r
q.Q=(s&$.lC().a)!==0?c:r
q.ch=(s&$.bR().a)!==0?i:0
q.cx=(s&$.aO().a)!==0?a:r
return q},
jf:function jf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h2:function h2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h3:function h3(){},
i5:function i5(){},
hh:function hh(){this.b=this.a=null},
hi:function hi(){},
it:function it(){},
hN:function hN(){this.a=null},
hY:function hY(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hZ:function hZ(a){this.a=a
this.b=null},
i_:function i_(a){this.a=a
this.b=null},
i0:function i0(a){this.a=a
this.b=null},
iI:function iI(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iT:function iT(a){this.a=a},
iS:function iS(a){this.a=a},
iJ:function iJ(a){this.a=a
this.c=this.b=null},
iK:function iK(){this.d=this.c=this.b=null},
iL:function iL(a,b){this.a=a
this.b=b},
iM:function iM(a,b){this.a=a
this.b=b},
iN:function iN(){this.c=this.b=null},
iP:function iP(){},
iO:function iO(){},
iQ:function iQ(){},
hL:function hL(){},
iR:function iR(){this.b=null}},T={id:function id(){},ie:function ie(){},ig:function ig(){var _=this
_.y=_.d=_.c=_.b=_.a=null},ih:function ih(a){var _=this
_.a=a
_.e=_.d=_.b=null},ii:function ii(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},G={
li:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="testCanvas",d=null,c=V.mr("Test 044"),b=W.jz()
b.className="pageLargeCanvas"
b.id=e
c.a.appendChild(b)
c.cm(["A test of the Material Lighting shader with fog. ","This test is similar to test 005 except with fog."])
c.cm(["\xab[Back to Tests|../]"])
s=document.getElementById(e)
if(s==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
r=E.mv(s,!0,!0,!0,!1)
q=new E.bs()
q.a=""
q.b=!0
p=O.jA()
q.y=p
p.b7(q.gfA(),q.gfD())
q.dy=q.dx=q.db=q.cy=q.cx=q.ch=q.Q=q.z=null
q.sbT(0,d)
q.saN(d)
o=F.kI()
F.cJ(o,d,d,1,1,1,0,0,1)
F.cJ(o,d,d,1,1,0,1,0,3)
F.cJ(o,d,d,1,1,0,0,1,2)
F.cJ(o,d,d,1,1,-1,0,0,0)
F.cJ(o,d,d,1,1,0,-1,0,0)
F.cJ(o,d,d,1,1,0,0,-1,3)
o.as()
o.fz(new F.iO(),new F.hL())
q.sbT(0,o)
p=new U.dR()
p.r=p.f=p.e=p.d=p.c=p.b=p.a=0
p.sd8(0)
p.scZ(0,0)
p.sd3(0)
n=p.d
$.A().toString
if(!(Math.abs(n-0.1)<1e-9)){p.d=0.1
n=new D.B("deltaYaw",n,0.1)
n.b=!0
p.ap(n)}n=p.e
$.A().toString
if(!(Math.abs(n-0.21)<1e-9)){p.e=0.21
n=new D.B("deltaPitch",n,0.21)
n.b=!0
p.ap(n)}n=p.f
$.A().toString
if(!(Math.abs(n-0.32)<1e-9)){p.f=0.32
n=new D.B("deltaRoll",n,0.32)
n.b=!0
p.ap(n)}q.saN(p)
m=r.f.bI("../resources/CtrlPnlColor.png")
l=new O.dt()
p=O.jA()
l.e=p
p.b7(l.gdZ(),l.ge0())
p=new O.al(l,"emission")
p.c=new A.P(!1,!1,!1)
p.f=new V.O(0,0,0)
l.f=p
p=new O.al(l,"ambient")
p.c=new A.P(!1,!1,!1)
p.f=new V.O(0,0,0)
l.r=p
p=new O.al(l,"diffuse")
p.c=new A.P(!1,!1,!1)
p.f=new V.O(0,0,0)
l.x=p
p=new O.al(l,"invDiffuse")
p.c=new A.P(!1,!1,!1)
p.f=new V.O(0,0,0)
l.y=p
p=new O.ht(l,"specular")
p.c=new A.P(!1,!1,!1)
p.f=new V.O(0,0,0)
p.ch=100
l.z=p
p=new O.hp(l,"bump")
p.c=new A.P(!1,!1,!1)
l.Q=p
l.ch=null
p=new O.al(l,"reflect")
p.c=new A.P(!1,!1,!1)
p.f=new V.O(0,0,0)
l.cx=p
p=new O.hs(l,"refract")
p.c=new A.P(!1,!1,!1)
p.f=new V.O(0,0,0)
p.ch=1
l.cy=p
p=new O.ho(l,"alpha")
p.c=new A.P(!1,!1,!1)
p.f=1
l.db=p
p=new D.c5()
p.bY()
p.e=[]
p.f=[]
p.r=[]
p.x=[]
p.z=p.y=null
p.bS(p.gdX(),p.gey(),p.geA())
l.dx=p
n=new O.hr(l)
n.b=new V.av(0,0,0,0)
n.c=1
n.d=10
n.e=!1
l.dy=n
n=p.y
p=n==null?p.y=D.a2():n
p.p(0,l.geN())
p=l.dx
n=p.z
p=n==null?p.z=D.a2():n
p.p(0,l.gaT())
l.fr=null
p=l.dy
k=new V.av(V.ad(1),V.ad(1),V.ad(1),V.ad(1))
if(!p.b.n(0,k)){p.sbw(0,!0)
p.b=k
p.a.L(d)}p=l.dy
if(p.c!==4){p.sbw(0,!0)
p.c=4
p.a.L(d)}p=l.dy
if(p.d!==5){p.sbw(0,!0)
p.d=5
p.a.L(d)}p=l.dx
j=V.jQ()
n=U.km(V.kw(V.kB(),j,new V.y(1,-1,-3)))
k=new V.O(1,1,1)
i=new D.br()
i.c=new V.O(1,1,1)
i.a=V.my()
i.d=V.jQ()
i.e=V.mx()
h=i.b
i.b=n
n.gB().p(0,i.gdz())
n=new D.B("mover",h,i.b)
n.b=!0
i.ab(n)
if(!i.c.n(0,k)){h=i.c
i.c=k
n=new D.B("color",h,k)
n.b=!0
i.ab(n)}p.p(0,i)
l.f.sb3(r.f.bI("../resources/CtrlPnlEmission.png"))
l.r.saF(0,new V.O(V.ad(0.2),V.ad(0.2),V.ad(0.2)))
l.x.saF(0,new V.O(V.ad(0.8),V.ad(0.8),V.ad(0.8)))
l.r.sb3(m)
l.x.sb3(m)
l.z.sb3(r.f.bI("../resources/CtrlPnlSpecular.png"))
p=l.z
p.bm(new A.P(!0,p.c.b,!1))
p.cf(10)
p=new M.da()
p.a=!0
n=O.jA()
p.e=n
n.b7(p.ge4(),p.ge6())
p.y=p.x=p.r=p.f=null
g=X.m1(d)
f=new X.dH()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.saN(d)
n=f.c
$.A().toString
if(!(Math.abs(n-1.0471975511965976)<1e-9)){f.c=1.0471975511965976
n=new D.B("fov",n,1.0471975511965976)
n.b=!0
f.an(n)}n=f.d
$.A().toString
if(!(Math.abs(n-0.1)<1e-9)){f.d=0.1
n=new D.B("near",n,0.1)
n.b=!0
f.an(n)}n=f.e
$.A().toString
if(!(Math.abs(n-2000)<1e-9)){f.e=2000
n=new D.B("far",n,2000)
n.b=!0
f.an(n)}n=p.b
if(n!==f){if(n!=null)n.gB().G(0,p.ga6())
h=p.b
p.b=f
f.gB().p(0,p.ga6())
n=new D.B("camera",h,p.b)
n.b=!0
p.ac(n)}n=p.c
if(n!==g){if(n!=null)n.gB().G(0,p.ga6())
h=p.c
p.c=g
g.gB().p(0,p.ga6())
n=new D.B("target",h,p.c)
n.b=!0
p.ac(n)}p.sd5(d)
p.sd5(l)
p.e.p(0,q)
p.b.saN(U.km(V.az(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
n=r.d
if(n!==p){if(n!=null)n.gB().G(0,r.gbZ())
r.d=p
p.gB().p(0,r.gbZ())
r.c_()}p=r.Q
if(p==null)p=r.Q=D.a2()
n=p.b
p=n==null?p.b=[]:n
p.push(new G.js(c,l))
V.oe(r)},
js:function js(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,G]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jF.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gO:function(a){return H.cj(a)},
i:function(a){return"Instance of '"+H.d(H.dN(a))+"'"}}
J.hd.prototype={
i:function(a){return String(a)},
gO:function(a){return a?519018:218159}}
J.c4.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gO:function(a){return 0}}
J.b7.prototype={
gO:function(a){return 0},
i:function(a){return String(a)}}
J.dI.prototype={}
J.bh.prototype={}
J.a9.prototype={
i:function(a){var s=a[$.lq()]
if(s==null)return this.dm(a)
return"JavaScript function for "+H.d(J.T(s))}}
J.a3.prototype={
bM:function(a,b){if(!!a.fixed$length)H.p(P.v("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dO(b,null))
return a.splice(b,1)[0]},
G:function(a,b){var s
if(!!a.fixed$length)H.p(P.v("remove"))
for(s=0;s<a.length;++s)if(J.H(a[s],b)){a.splice(s,1)
return!0}return!1},
Y:function(a,b){var s,r
if(!!a.fixed$length)H.p(P.v("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.k)(b),++r)a.push(b[r])},
E:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.aY(a))}},
k:function(a,b){var s,r,q=P.jH(a.length,"",!1)
for(s=0;s<a.length;++s){r=H.d(a[s])
if(s>=q.length)return H.e(q,s)
q[s]=r}return q.join(b)},
fv:function(a){return this.k(a,"")},
fq:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.aY(a))}throw H.c(H.hc())},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
gfp:function(a){if(a.length>0)return a[0]
throw H.c(H.hc())},
gb1:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.hc())},
cn:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.aY(a))}return!1},
aC:function(a,b){if(!!a.immutable$list)H.p(P.v("sort"))
H.mu(a,b==null?J.n9():b)},
di:function(a){return this.aC(a,null)},
u:function(a,b){var s
for(s=0;s<a.length;++s)if(J.H(a[s],b))return!0
return!1},
i:function(a){return P.jD(a,"[","]")},
gK:function(a){return new J.X(a,a.length)},
gO:function(a){return H.cj(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.p(P.v("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bP(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.p(P.v("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bP(a,b))
a[b]=c},
$ii:1,
$if:1}
J.dl.prototype={}
J.X.prototype={
gD:function(a){return this.d},
t:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.k(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.b6.prototype={
at:function(a,b){var s
if(typeof b!="number")throw H.c(H.aL(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gb0(b)
if(this.gb0(a)===s)return 0
if(this.gb0(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb0:function(a){return a===0?1/a<0:a<0},
h0:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.v(""+a+".toInt()"))},
bF:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.v(""+a+".floor()"))},
a4:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.v(""+a+".round()"))},
d6:function(a,b){var s
if(b>20)throw H.c(P.aB(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gb0(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gO:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
dd:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
dq:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cg(a,b)},
S:function(a,b){return(a|0)===a?a/b|0:this.cg(a,b)},
cg:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.v("Result of truncating division is "+H.d(s)+": "+H.d(a)+" ~/ "+b))},
aX:function(a,b){var s
if(a>0)s=this.eZ(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
eZ:function(a,b){return b>31?0:a>>>b},
$iS:1,
$iM:1}
J.c3.prototype={$iq:1}
J.c2.prototype={}
J.ah.prototype={
bu:function(a,b){if(b<0)throw H.c(H.bP(a,b))
if(b>=a.length)H.p(H.bP(a,b))
return a.charCodeAt(b)},
aU:function(a,b){if(b>=a.length)throw H.c(H.bP(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!="string")throw H.c(P.kg(b,null,null))
return a+b},
b8:function(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
aR:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.dO(b,null))
if(b>c)throw H.c(P.dO(b,null))
if(c>a.length)throw H.c(P.dO(c,null))
return a.substring(b,c)},
aa:function(a,b){return this.aR(a,b,null)},
h3:function(a){return a.toLowerCase()},
N:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.H)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
a0:function(a,b){var s=b-a.length
if(s<=0)return a
return this.N(" ",s)+a},
f9:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aB(c,0,s,null,null))
return H.lm(a,b,c)},
u:function(a,b){return this.f9(a,b,0)},
at:function(a,b){var s
if(typeof b!="string")throw H.c(H.aL(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gO:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gl:function(a){return a.length},
$iJ:1}
H.l.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.b.bu(this.a,b)}}
H.i.prototype={}
H.c8.prototype={
gK:function(a){return new H.ay(this,this.gl(this))},
b6:function(a,b){return this.dl(0,b)}}
H.ay.prototype={
gD:function(a){var s=this.d
return s},
t:function(){var s,r=this,q=r.a,p=J.bk(q),o=p.gl(q)
if(r.b!=o)throw H.c(P.aY(q))
s=r.c
if(typeof o!=="number")return H.K(o)
if(s>=o){r.d=null
return!1}r.d=p.C(q,s);++r.c
return!0}}
H.b9.prototype={
gK:function(a){return new H.c9(J.aT(this.a),this.b)},
gl:function(a){return J.aU(this.a)},
C:function(a,b){return this.b.$1(J.fz(this.a,b))}}
H.bX.prototype={$ii:1}
H.c9.prototype={
t:function(){var s=this,r=s.b
if(r.t()){s.a=s.c.$1(r.gD(r))
return!0}s.a=null
return!1},
gD:function(a){var s=this.a
return s}}
H.ca.prototype={
gl:function(a){return J.aU(this.a)},
C:function(a,b){return this.b.$1(J.fz(this.a,b))}}
H.bi.prototype={
gK:function(a){return new H.eu(J.aT(this.a),this.b)}}
H.eu.prototype={
t:function(){var s,r
for(s=this.a,r=this.b;s.t();)if(r.$1(s.gD(s)))return!0
return!1},
gD:function(a){var s=this.a
return s.gD(s)}}
H.bZ.prototype={}
H.ep.prototype={
m:function(a,b,c){throw H.c(P.v("Cannot modify an unmodifiable list"))}}
H.bG.prototype={}
H.ir.prototype={
a_:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.dC.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dm.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.d(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.d(r.a)+")"
return q+p+"' on '"+s+"' ("+H.d(r.a)+")"}}
H.eo.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.hM.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.f7.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bp.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.lo(r==null?"unknown":r)+"'"},
gh7:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ib.prototype={}
H.i7.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.lo(s)+"'"}}
H.bS.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bS))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gO:function(a){var s,r=this.c
if(r==null)s=H.cj(this.a)
else s=typeof r!=="object"?J.a0(r):H.cj(r)
return(s^H.cj(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.dN(s))+"'")}}
H.dS.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.u.prototype={
gl:function(a){return this.a},
gV:function(a){return new H.ax(this)},
gh6:function(a){return H.m9(new H.ax(this),new H.hf(this))},
fa:function(a,b){var s=this.b
if(s==null)return!1
return this.dO(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.aV(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.aV(p,b)
q=r==null?n:r.b
return q}else return o.fu(b)},
fu:function(a){var s,r,q=this.d
if(q==null)return null
s=this.c9(q,J.a0(a)&0x3ffffff)
r=this.cN(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.c2(s==null?m.b=m.bh():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.c2(r==null?m.c=m.bh():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bh()
p=J.a0(b)&0x3ffffff
o=m.c9(q,p)
if(o==null)m.bn(q,p,[m.bi(b,c)])
else{n=m.cN(o,b)
if(n>=0)o[n].b=c
else o.push(m.bi(b,c))}}},
E:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.aY(s))
r=r.c}},
c2:function(a,b,c){var s=this.aV(a,b)
if(s==null)this.bn(a,b,this.bi(b,c))
else s.b=c},
dV:function(){this.r=this.r+1&67108863},
bi:function(a,b){var s,r=this,q=new H.hj(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.dV()
return q},
cN:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.H(a[r].a,b))return r
return-1},
i:function(a){return P.kv(this)},
aV:function(a,b){return a[b]},
c9:function(a,b){return a[b]},
bn:function(a,b,c){a[b]=c},
dS:function(a,b){delete a[b]},
dO:function(a,b){return this.aV(a,b)!=null},
bh:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bn(r,s,r)
this.dS(r,s)
return r}}
H.hf.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.n7(this.a).ae("2(1)")}}
H.hj.prototype={}
H.ax.prototype={
gl:function(a){return this.a.a},
gK:function(a){var s=this.a,r=new H.dq(s,s.r)
r.c=s.e
return r}}
H.dq.prototype={
gD:function(a){return this.d},
t:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.aY(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jn.prototype={
$1:function(a){return this.a(a)},
$S:12}
H.jo.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jp.prototype={
$1:function(a){return this.a(a)}}
H.he.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.cf.prototype={}
H.bx.prototype={
gl:function(a){return a.length},
$ir:1}
H.bb.prototype={
h:function(a,b){H.ap(b,a,a.length)
return a[b]},
m:function(a,b,c){H.ap(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.ce.prototype={
m:function(a,b,c){H.ap(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.dw.prototype={
h:function(a,b){H.ap(b,a,a.length)
return a[b]}}
H.dx.prototype={
h:function(a,b){H.ap(b,a,a.length)
return a[b]}}
H.dy.prototype={
h:function(a,b){H.ap(b,a,a.length)
return a[b]}}
H.dz.prototype={
h:function(a,b){H.ap(b,a,a.length)
return a[b]}}
H.dA.prototype={
h:function(a,b){H.ap(b,a,a.length)
return a[b]}}
H.cg.prototype={
gl:function(a){return a.length},
h:function(a,b){H.ap(b,a,a.length)
return a[b]}}
H.dB.prototype={
gl:function(a){return a.length},
h:function(a,b){H.ap(b,a,a.length)
return a[b]}}
H.ct.prototype={}
H.cu.prototype={}
H.cv.prototype={}
H.cw.prototype={}
H.a6.prototype={
ae:function(a){return H.fl(v.typeUniverse,this,a)},
c3:function(a){return H.mX(v.typeUniverse,this,a)}}
H.eK.prototype={}
H.eF.prototype={
i:function(a){return this.a}}
H.cF.prototype={}
P.iW.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:13}
P.iV.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.iX.prototype={
$0:function(){this.a.$0()}}
P.iY.prototype={
$0:function(){this.a.$0()}}
P.cE.prototype={
dD:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bO(new P.jb(this,b),0),a)
else throw H.c(P.v("`setTimeout()` not found."))},
dE:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bO(new P.ja(this,a,Date.now(),b),0),a)
else throw H.c(P.v("Periodic timer."))},
$icm:1}
P.jb.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.ja.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.dq(s,o)}q.c=p
r.d.$1(q)}}
P.bL.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.d(this.a)+")"}}
P.bj.prototype={
gD:function(a){var s=this.c
if(s==null)return this.b
return s.gD(s)},
t:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.t())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bL){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.e(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aT(s)
if(o instanceof P.bj){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.cB.prototype={
gK:function(a){return new P.bj(this.a())}}
P.ev.prototype={}
P.e_.prototype={}
P.e0.prototype={}
P.cm.prototype={}
P.je.prototype={}
P.jj.prototype={
$0:function(){var s=H.c(this.a)
s.stack=J.T(this.b)
throw s}}
P.j3.prototype={
fW:function(a){var s,r,q,p=null
try{if(C.e===$.ac){a.$0()
return}P.nF(p,p,this,a)}catch(q){s=H.as(q)
r=H.k4(q)
P.lb(p,p,this,s,r)}},
fX:function(a,b){var s,r,q,p=null
try{if(C.e===$.ac){a.$1(b)
return}P.nG(p,p,this,a,b)}catch(q){s=H.as(q)
r=H.k4(q)
P.lb(p,p,this,s,r)}},
fY:function(a,b){return this.fX(a,b,t.z)},
f5:function(a){return new P.j4(this,a)},
cr:function(a,b){return new P.j5(this,a,b)}}
P.j4.prototype={
$0:function(){return this.a.fW(this.b)}}
P.j5.prototype={
$1:function(a){return this.a.fY(this.b,a)},
$S:function(){return this.c.ae("~(0)")}}
P.cp.prototype={
gK:function(a){var s=new P.cq(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
u:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.dM(b)
return r}},
dM:function(a){var s=this.d
if(s==null)return!1
return this.bf(s[this.bc(a)],a)>=0},
p:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.c4(s==null?q.b=P.jT():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.c4(r==null?q.c=P.jT():r,b)}else return q.dG(0,b)},
dG:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.jT()
s=q.bc(b)
r=p[s]
if(r==null)p[s]=[q.bb(b)]
else{if(q.bf(r,b)>=0)return!1
r.push(q.bb(b))}return!0},
G:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.eJ(this.c,b)
else return this.eI(0,b)},
eI:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bc(b)
r=n[s]
q=o.bf(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cj(p)
return!0},
c4:function(a,b){if(a[b]!=null)return!1
a[b]=this.bb(b)
return!0},
eJ:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cj(s)
delete a[b]
return!0},
c5:function(){this.r=1073741823&this.r+1},
bb:function(a){var s,r=this,q=new P.j2(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.c5()
return q},
cj:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.c5()},
bc:function(a){return J.a0(a)&1073741823},
bf:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.H(a[r].a,b))return r
return-1}}
P.j2.prototype={}
P.cq.prototype={
gD:function(a){return this.d},
t:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.aY(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.c1.prototype={}
P.c7.prototype={$ii:1,$if:1}
P.z.prototype={
gK:function(a){return new H.ay(a,this.gl(a))},
C:function(a,b){return this.h(a,b)},
gcP:function(a){return this.gl(a)===0},
h2:function(a,b){var s,r,q,p,o=this
if(o.gcP(a)){s=J.kr(0)
return s}r=o.h(a,0)
q=P.jH(o.gl(a),r,!0)
p=1
while(!0){s=o.gl(a)
if(typeof s!=="number")return H.K(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.e(q,p)
q[p]=s;++p}return q},
h1:function(a){return this.h2(a,!0)},
i:function(a){return P.jD(a,"[","]")}}
P.ds.prototype={}
P.hm.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.d(a)
r.a=s+": "
r.a+=H.d(b)},
$S:14}
P.ak.prototype={
E:function(a,b){var s,r
for(s=J.aT(this.gV(a));s.t();){r=s.gD(s)
b.$2(r,this.h(a,r))}},
gl:function(a){return J.aU(this.gV(a))},
i:function(a){return P.kv(a)}}
P.cx.prototype={
Y:function(a,b){var s
for(s=J.aT(b);s.t();)this.p(0,s.gD(s))},
i:function(a){return P.jD(this,"{","}")},
C:function(a,b){var s,r,q,p="index"
P.lP(b,p)
P.kE(b,p)
for(s=P.mH(this,this.r),r=0;s.t();){q=s.d
if(b===r)return q;++r}throw H.c(P.F(b,this,p,null,r))},
$ii:1,
$if:1}
P.cr.prototype={}
P.d2.prototype={}
P.d5.prototype={}
P.fX.prototype={}
P.hb.prototype={
i:function(a){return this.a}}
P.ha.prototype={
dP:function(a,b,c){var s,r,q,p,o,n,m=null
for(s=this.a,r=s.e,q=s.d,s=s.c,p=b,o=m;p<c;++p){if(p>=a.length)return H.e(a,p)
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
default:n=m}if(n!=null){if(o==null)o=new P.aD("")
if(p>b)o.a+=C.b.aR(a,b,p)
o.a+=n
b=p+1}}if(o==null)return m
if(c>b)o.a+=J.lN(a,b,c)
s=o.a
return s.charCodeAt(0)==0?s:s}}
P.iD.prototype={}
P.iE.prototype={
fb:function(a){var s,r,q,p=null,o=P.jL(0,p,a.length)
if(o==null)throw H.c(new P.bB(p,p,!1,p,p,"Invalid range"))
s=o-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.jc(r)
if(q.dU(a,0,o)!==o){C.b.bu(a,o-1)
q.bp()}return new Uint8Array(r.subarray(0,H.n1(0,q.b,r.length)))}}
P.jc.prototype={
bp:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.e(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.e(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.e(r,q)
r[q]=189},
f_:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.bp()
return!1}},
dU:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.b.bu(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.b.aU(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.f_(p,C.b.aU(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bp()}else if(p<=2047){o=l.b
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
P.aq.prototype={}
P.aZ.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aZ&&this.a===b.a&&!0},
at:function(a,b){return C.c.at(this.a,b.a)},
gO:function(a){var s=this.a
return(s^C.c.aX(s,30))&1073741823},
i:function(a){var s=this,r=P.lY(H.mj(s)),q=P.d8(H.mh(s)),p=P.d8(H.md(s)),o=P.d8(H.me(s)),n=P.d8(H.mg(s)),m=P.d8(H.mi(s)),l=P.lZ(H.mf(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.S.prototype={}
P.b_.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.b_&&this.a===b.a},
gO:function(a){return C.c.gO(this.a)},
at:function(a,b){return C.c.at(this.a,b.a)},
i:function(a){var s,r,q,p=new P.fU(),o=this.a
if(o<0)return"-"+new P.b_(0-o).i(0)
s=p.$1(C.c.S(o,6e7)%60)
r=p.$1(C.c.S(o,1e6)%60)
q=new P.fT().$1(o%1e6)
return""+C.c.S(o,36e8)+":"+H.d(s)+":"+H.d(r)+"."+H.d(q)}}
P.fT.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fU.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.E.prototype={}
P.cY.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.h_(s)
return"Assertion failed"}}
P.dD.prototype={
i:function(a){return"Throw of null."}}
P.W.prototype={
gbe:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbd:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbe()+o+m
if(!q.a)return l
s=q.gbd()
r=P.h_(q.b)
return l+s+": "+r}}
P.bB.prototype={
gbe:function(){return"RangeError"},
gbd:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.d(q):""
else if(q==null)s=": Not greater than or equal to "+H.d(r)
else if(q>r)s=": Not in inclusive range "+H.d(r)+".."+H.d(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.d(r)
return s}}
P.dj.prototype={
gbe:function(){return"RangeError"},
gbd:function(){var s,r=this.b
if(typeof r!=="number")return r.az()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.d(s)},
gl:function(a){return this.f}}
P.eq.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.en.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.bD.prototype={
i:function(a){return"Bad state: "+this.a}}
P.d3.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.h_(s)+"."}}
P.dG.prototype={
i:function(a){return"Out of Memory"},
$iE:1}
P.ck.prototype={
i:function(a){return"Stack Overflow"},
$iE:1}
P.d6.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.eH.prototype={
i:function(a){return"Exception: "+this.a}}
P.h6.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.b.aR(q,0,75)+"..."
return r+"\n"+q}}
P.h8.prototype={}
P.q.prototype={}
P.f.prototype={
b6:function(a,b){return new H.bi(this,b)},
gl:function(a){var s,r=this.gK(this)
for(s=0;r.t();)++s
return s},
gal:function(a){var s,r=this.gK(this)
if(!r.t())throw H.c(H.hc())
s=r.gD(r)
if(r.t())throw H.c(H.m3())
return s},
C:function(a,b){var s,r,q
P.kE(b,"index")
for(s=this.gK(this),r=0;s.t();){q=s.gD(s)
if(b===r)return q;++r}throw H.c(P.F(b,this,"index",null,r))},
i:function(a){return P.m2(this,"(",")")}}
P.dk.prototype={}
P.aj.prototype={$ii:1,$if:1}
P.dr.prototype={}
P.a5.prototype={
gO:function(a){return P.I.prototype.gO.call(C.f,this)},
i:function(a){return"null"}}
P.M.prototype={}
P.I.prototype={constructor:P.I,$iI:1,
n:function(a,b){return this===b},
gO:function(a){return H.cj(this)},
i:function(a){return"Instance of '"+H.d(H.dN(this))+"'"},
toString:function(){return this.i(this)}}
P.J.prototype={}
P.aD.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.m.prototype={}
W.fA.prototype={
gl:function(a){return a.length}}
W.cW.prototype={
i:function(a){return String(a)}}
W.cX.prototype={
i:function(a){return String(a)}}
W.bn.prototype={$ibn:1}
W.d_.prototype={}
W.aV.prototype={$iaV:1}
W.aW.prototype={
bQ:function(a,b,c){if(c!=null)return a.getContext(b,P.nU(c))
return a.getContext(b)},
dc:function(a,b){return this.bQ(a,b,null)},
$iaW:1}
W.a8.prototype={
gl:function(a){return a.length}}
W.fL.prototype={
gl:function(a){return a.length}}
W.D.prototype={$iD:1}
W.bT.prototype={
gl:function(a){return a.length}}
W.fM.prototype={}
W.a1.prototype={}
W.af.prototype={}
W.fN.prototype={
gl:function(a){return a.length}}
W.fO.prototype={
gl:function(a){return a.length}}
W.fP.prototype={
gl:function(a){return a.length}}
W.bU.prototype={}
W.fR.prototype={
i:function(a){return String(a)}}
W.bV.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.bW.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gay(a))+" x "+H.d(this.gaw(a))},
n:function(a,b){var s
if(b==null)return!1
if(t.L.b(b)){s=J.aN(b)
s=a.left==s.gcR(b)&&a.top==s.gd7(b)&&this.gay(a)==s.gay(b)&&this.gaw(a)==s.gaw(b)}else s=!1
return s},
gO:function(a){return W.kX(J.a0(a.left),J.a0(a.top),J.a0(this.gay(a)),J.a0(this.gaw(a)))},
gaw:function(a){return a.height},
gcR:function(a){return a.left},
gd7:function(a){return a.top},
gay:function(a){return a.width},
$iaa:1}
W.d9.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.fS.prototype={
gl:function(a){return a.length}}
W.ex.prototype={
gcP:function(a){return this.a.firstElementChild==null},
gl:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
this.a.replaceChild(c,s[b])},
p:function(a,b){this.a.appendChild(b)
return b},
gK:function(a){var s=this.h1(this)
return new J.X(s,s.length)}}
W.x.prototype={
gf4:function(a){return new W.j_(a)},
gcs:function(a){return new W.ex(a,a.children)},
i:function(a){return a.localName},
Z:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.kp
if(s==null){s=[]
r=new W.ci(s)
s.push(W.kV(null))
s.push(W.l0())
$.kp=r
d=r}else d=s
s=$.ko
if(s==null){s=new W.fm(d)
$.ko=s
c=s}else{s.a=d
c=s}}if($.aw==null){s=document
r=s.implementation.createHTMLDocument("")
$.aw=r
$.jB=r.createRange()
r=$.aw.createElement("base")
t.v.a(r)
r.href=s.baseURI
$.aw.head.appendChild(r)}s=$.aw
if(s.body==null){r=s.createElement("body")
s.body=t.t.a(r)}s=$.aw
if(t.t.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.aw.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.Q,a.tagName)){$.jB.selectNodeContents(q)
s=$.jB
p=s.createContextualFragment(b)}else{q.innerHTML=b
p=$.aw.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.aw.body)J.ke(q)
c.bR(p)
document.adoptNode(p)
return p},
fd:function(a,b,c){return this.Z(a,b,c,null)},
df:function(a,b){a.textContent=null
a.appendChild(this.Z(a,b,null,null))},
gd4:function(a){return a.tagName},
$ix:1}
W.fV.prototype={
$1:function(a){return t.h.b(a)}}
W.h.prototype={$ih:1}
W.b.prototype={
f0:function(a,b,c,d){if(c!=null)this.dH(a,b,c,!1)},
dH:function(a,b,c,d){return a.addEventListener(b,H.bO(c,1),!1)},
$ib:1}
W.b0.prototype={$ib0:1}
W.dc.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.dd.prototype={
gl:function(a){return a.length}}
W.df.prototype={
gl:function(a){return a.length}}
W.b1.prototype={$ib1:1}
W.h9.prototype={
gl:function(a){return a.length}}
W.b2.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.b3.prototype={
gct:function(a){return a.data},
$ib3:1}
W.bu.prototype={$ibu:1}
W.b8.prototype={$ib8:1}
W.hk.prototype={
i:function(a){return String(a)}}
W.hC.prototype={
gl:function(a){return a.length}}
W.hD.prototype={
h:function(a,b){return P.aM(a.get(b))},
E:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aM(s.value[1]))}},
gV:function(a){var s=[]
this.E(a,new W.hE(s))
return s},
gl:function(a){return a.size}}
W.hE.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hF.prototype={
h:function(a,b){return P.aM(a.get(b))},
E:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aM(s.value[1]))}},
gV:function(a){var s=[]
this.E(a,new W.hG(s))
return s},
gl:function(a){return a.size}}
W.hG.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ba.prototype={$iba:1}
W.dv.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.Y.prototype={$iY:1}
W.Q.prototype={
gal:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.jM("No elements"))
if(r>1)throw H.c(P.jM("More than one element"))
s=s.firstChild
s.toString
return s},
Y:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q)}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.e(r,b)
s.replaceChild(c,r[b])},
gK:function(a){var s=this.a.childNodes
return new W.c_(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.e(s,b)
return s[b]}}
W.t.prototype={
fQ:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
fU:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.lG(s,b,a)}catch(q){H.as(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.dk(a):s},
eL:function(a,b,c){return a.replaceChild(b,c)},
$it:1}
W.ch.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.bc.prototype={
gl:function(a){return a.length},
$ibc:1}
W.dK.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.hV.prototype={
h:function(a,b){return P.aM(a.get(b))},
E:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aM(s.value[1]))}},
gV:function(a){var s=[]
this.E(a,new W.hW(s))
return s},
gl:function(a){return a.size}}
W.hW.prototype={
$2:function(a,b){return this.a.push(a)}}
W.dT.prototype={
gl:function(a){return a.length}}
W.aC.prototype={$iaC:1}
W.dW.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.bd.prototype={$ibd:1}
W.dX.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.be.prototype={
gl:function(a){return a.length},
$ibe:1}
W.i8.prototype={
h:function(a,b){return a.getItem(H.jZ(b))},
E:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gV:function(a){var s=[]
this.E(a,new W.i9(s))
return s},
gl:function(a){return a.length}}
W.i9.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aE.prototype={$iaE:1}
W.cl.prototype={
Z:function(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.b9(a,b,c,d)
s=W.m_("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
s.toString
new W.Q(r).Y(0,new W.Q(s))
return r}}
W.e2.prototype={
Z:function(a,b,c,d){var s,r,q,p
if("createContextualFragment" in window.Range.prototype)return this.b9(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.w.Z(s.createElement("table"),b,c,d)
s.toString
s=new W.Q(s)
q=s.gal(s)
q.toString
s=new W.Q(q)
p=s.gal(s)
r.toString
p.toString
new W.Q(r).Y(0,new W.Q(p))
return r}}
W.e3.prototype={
Z:function(a,b,c,d){var s,r,q
if("createContextualFragment" in window.Range.prototype)return this.b9(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.w.Z(s.createElement("table"),b,c,d)
s.toString
s=new W.Q(s)
q=s.gal(s)
r.toString
q.toString
new W.Q(r).Y(0,new W.Q(q))
return r}}
W.bE.prototype={$ibE:1}
W.aF.prototype={$iaF:1}
W.ab.prototype={$iab:1}
W.e4.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.e5.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.ik.prototype={
gl:function(a){return a.length}}
W.bf.prototype={$ibf:1}
W.bg.prototype={$ibg:1}
W.e9.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.ip.prototype={
gl:function(a){return a.length}}
W.ao.prototype={}
W.iC.prototype={
i:function(a){return String(a)}}
W.es.prototype={
gl:function(a){return a.length}}
W.aH.prototype={
gfg:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.v("deltaY is not supported"))},
gff:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.v("deltaX is not supported"))},
$iaH:1}
W.bI.prototype={
eM:function(a,b){return a.requestAnimationFrame(H.bO(b,1))},
dT:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.bJ.prototype={$ibJ:1}
W.ey.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.co.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
n:function(a,b){var s
if(b==null)return!1
if(t.L.b(b)){s=J.aN(b)
s=a.left==s.gcR(b)&&a.top==s.gd7(b)&&a.width==s.gay(b)&&a.height==s.gaw(b)}else s=!1
return s},
gO:function(a){return W.kX(J.a0(a.left),J.a0(a.top),J.a0(a.width),J.a0(a.height))},
gaw:function(a){return a.height},
gay:function(a){return a.width}}
W.eL.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.cs.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.f4.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.fb.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.iZ.prototype={
E:function(a,b){var s,r,q,p,o
for(s=this.gV(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.k)(s),++p){o=s[p]
b.$2(o,q.getAttribute(o))}},
gV:function(a){var s,r,q,p,o=this.a.attributes,n=[]
for(s=o.length,r=t.x,q=0;q<s;++q){if(q>=o.length)return H.e(o,q)
p=r.a(o[q])
if(p.namespaceURI==null)n.push(p.name)}return n}}
W.j_.prototype={
h:function(a,b){return this.a.getAttribute(H.jZ(b))},
gl:function(a){return this.gV(this).length}}
W.jC.prototype={}
W.eG.prototype={}
W.j0.prototype={
$1:function(a){return this.a.$1(a)}}
W.jS.prototype={}
W.bK.prototype={
dw:function(a){var s
if($.eM.a===0){for(s=0;s<262;++s)$.eM.m(0,C.P[s],W.o3())
for(s=0;s<12;++s)$.eM.m(0,C.j[s],W.o4())}},
ar:function(a){return $.lE().u(0,W.bY(a))},
a7:function(a,b,c){var s=$.eM.h(0,H.d(W.bY(a))+"::"+b)
if(s==null)s=$.eM.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$ia4:1}
W.C.prototype={
gK:function(a){return new W.c_(a,this.gl(a))}}
W.ci.prototype={
ar:function(a){return C.a.cn(this.a,new W.hK(a))},
a7:function(a,b,c){return C.a.cn(this.a,new W.hJ(a,b,c))},
$ia4:1}
W.hK.prototype={
$1:function(a){return a.ar(this.a)}}
W.hJ.prototype={
$1:function(a){return a.a7(this.a,this.b,this.c)}}
W.cy.prototype={
dC:function(a,b,c,d){var s,r,q
this.a.Y(0,c)
s=b.b6(0,new W.j7())
r=b.b6(0,new W.j8())
this.b.Y(0,s)
q=this.c
q.Y(0,C.R)
q.Y(0,r)},
ar:function(a){return this.a.u(0,W.bY(a))},
a7:function(a,b,c){var s=this,r=W.bY(a),q=s.c
if(q.u(0,H.d(r)+"::"+b))return s.d.f2(c)
else if(q.u(0,"*::"+b))return s.d.f2(c)
else{q=s.b
if(q.u(0,H.d(r)+"::"+b))return!0
else if(q.u(0,"*::"+b))return!0
else if(q.u(0,H.d(r)+"::*"))return!0
else if(q.u(0,"*::*"))return!0}return!1},
$ia4:1}
W.j7.prototype={
$1:function(a){return!C.a.u(C.j,a)}}
W.j8.prototype={
$1:function(a){return C.a.u(C.j,a)}}
W.fd.prototype={
a7:function(a,b,c){if(this.dn(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.u(0,b)
return!1}}
W.j9.prototype={
$1:function(a){return"TEMPLATE::"+H.d(a)}}
W.fc.prototype={
ar:function(a){var s
if(t.Y.b(a))return!1
s=t.u.b(a)
if(s&&W.bY(a)==="foreignObject")return!1
if(s)return!0
return!1},
a7:function(a,b,c){if(b==="is"||C.b.b8(b,"on"))return!1
return this.ar(a)},
$ia4:1}
W.c_.prototype={
t:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.cU(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gD:function(a){return this.d}}
W.a4.prototype={}
W.j6.prototype={}
W.fm.prototype={
bR:function(a){var s=this,r=new W.jd(s)
s.b=!1
r.$2(a,null)
for(;s.b;){s.b=!1
r.$2(a,null)}},
aE:function(a,b){var s=this.b=!0
if(b!=null?b!==a.parentNode:s)J.ke(a)
else b.removeChild(a)},
eR:function(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.lJ(a)
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
n=s?!0:!(a.attributes instanceof NamedNodeMap)}catch(p){H.as(p)}r="element unprintable"
try{r=J.T(a)}catch(p){H.as(p)}try{q=W.bY(a)
this.eQ(a,b,n,r,q,m,l)}catch(p){if(H.as(p) instanceof P.W)throw p
else{this.aE(a,b)
window
o="Removing corrupted element "+H.d(r)
if(typeof console!="undefined")window.console.warn(o)}}},
eQ:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.aE(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.ar(a)){m.aE(a,b)
window
s="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.a7(a,"is",g)){m.aE(a,b)
window
s="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}r=f.gV(f).slice(0)
for(q=f.gV(f).length-1,s=f.a;q>=0;--q){if(q>=r.length)return H.e(r,q)
p=r[q]
o=m.a
n=J.lO(p)
H.jZ(p)
if(!o.a7(a,n,s.getAttribute(p))){window
o="Removing disallowed attribute <"+H.d(e)+" "+p+'="'+H.d(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.f.b(a))m.bR(a.content)}}
W.jd.prototype={
$2:function(a,b){var s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.eR(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.aE(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){q=r.nextSibling
p=s
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.jM("Corrupt HTML")
throw H.c(q)}}catch(o){H.as(o)
q=s
n.b=!0
p=q.parentNode
p=a==null?p!=null:a!==p
if(p){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}}}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f1.prototype={}
W.cz.prototype={}
W.cA.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.f8.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.cC.prototype={}
W.cD.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fw.prototype={}
P.cG.prototype={$ib3:1,
gct:function(a){return this.a}}
P.jk.prototype={
$2:function(a,b){this.a[a]=b},
$S:15}
P.de.prototype={
gaW:function(){return new H.b9(new H.bi(this.b,new P.h4()),new P.h5())},
m:function(a,b,c){var s=this.gaW()
J.lM(s.b.$1(J.fz(s.a,b)),c)},
p:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aU(this.gaW().a)},
h:function(a,b){var s=this.gaW()
return s.b.$1(J.fz(s.a,b))},
gK:function(a){var s=P.jI(this.gaW(),!1)
return new J.X(s,s.length)}}
P.h4.prototype={
$1:function(a){return t.h.b(a)}}
P.h5.prototype={
$1:function(a){return t.h.a(a)}}
P.f0.prototype={}
P.aa.prototype={}
P.bv.prototype={$ibv:1}
P.dp.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.by.prototype={$iby:1}
P.dE.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.hP.prototype={
gl:function(a){return a.length}}
P.bC.prototype={$ibC:1}
P.e1.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.j.prototype={
gcs:function(a){return new P.de(a,new W.Q(a))},
Z:function(a,b,c,d){var s,r,q,p,o,n=[]
n.push(W.kV(null))
n.push(W.l0())
n.push(new W.fc())
c=new W.fm(new W.ci(n))
s='<svg version="1.1">'+b+"</svg>"
n=document
r=n.body
r.toString
q=C.l.fd(r,s,c)
p=n.createDocumentFragment()
q.toString
n=new W.Q(q)
o=n.gal(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
$ij:1}
P.bF.prototype={$ibF:1}
P.ea.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.eP.prototype={}
P.eQ.prototype={}
P.eX.prototype={}
P.eY.prototype={}
P.f9.prototype={}
P.fa.prototype={}
P.fi.prototype={}
P.fj.prototype={}
P.fE.prototype={
gl:function(a){return a.length}}
P.fF.prototype={
h:function(a,b){return P.aM(a.get(b))},
E:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aM(s.value[1]))}},
gV:function(a){var s=[]
this.E(a,new P.fG(s))
return s},
gl:function(a){return a.size}}
P.fG.prototype={
$2:function(a,b){return this.a.push(a)}}
P.cZ.prototype={
gl:function(a){return a.length}}
P.au.prototype={}
P.dF.prototype={
gl:function(a){return a.length}}
P.ew.prototype={}
P.dQ.prototype={
fZ:function(a,b,c,d,e,f,g){var s
if(t.I.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.nV(g))
return}if(t.R.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.jw("Incorrect number or type of arguments"))}}
P.dY.prototype={
gl:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
s=P.aM(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.f5.prototype={}
P.f6.prototype={}
K.at.prototype={
ah:function(a,b){return!0},
i:function(a){return"all"}}
K.dh.prototype={
ah:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)if(s[q].ah(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.k)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.U.prototype={
ah:function(a,b){return!this.dj(0,b)},
i:function(a){return"!["+this.bV(0)+"]"}}
K.hQ.prototype={
ah:function(a,b){if(typeof b!=="number")return H.K(b)
return this.a<=b&&this.b>=b},
i:function(a){var s=H.jK(this.a),r=H.jK(this.b)
return s+".."+r}}
K.hX.prototype={
dt:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.o("May not create a Set with zero characters."))
s=new H.u(t.E)
for(r=new H.ay(a,a.gl(a));r.t();){q=r.d
s.m(0,q,!0)}p=P.jI(new H.ax(s),!0)
C.a.di(p)
this.a=p},
ah:function(a,b){return C.a.u(this.a,b)},
i:function(a){return P.jN(this.a)}}
L.dZ.prototype={
k:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.iq(this.a.j(0,b))
p.a=[]
p.c=!1
this.c.push(p)
return p},
fo:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q){p=s[q]
if(p.ah(0,a))return p}return null},
i:function(a){return this.b},
ci:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.u(0,l))m+=" (consume)"
for(l=new H.ax(n.d.c),l=l.gK(l);l.t();){r=l.d
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.d(r)+" => ["+H.d(q)+"]")
m=s.c.u(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.k)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.e7.prototype={
i:function(a){var s=H.ka(this.b,"\n","\\n"),r=H.ka(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.e8.prototype={
aj:function(a,b,c){var s,r,q
for(s=c.length,r=0;r<c.length;c.length===s||(0,H.k)(c),++r){q=c[r]
this.c.m(0,q,b)}},
i:function(a){return this.b}}
L.il.prototype={
j:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.dZ(this,b)
s.c=[]
this.a.m(0,b,s)}return s},
I:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.e8(a)
s.c=new H.u(t.i)
this.b.m(0,a,s)}return s},
bP:function(a){return this.h4(a)},
h4:function(a){var s=this
return P.nh(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$bP(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a0.length!==0)j=C.a.bM(a0,0)
else{if(!r.t()){q=3
break}i=r.d
j=i}b.push(j);++m
h=d.fo(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.jN(b)
throw H.c(P.o("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!b.fixed$length)H.p(P.v("removeRange"))
P.jL(0,k,b.length)
b.splice(0,k-0)
C.a.Y(a0,b)
b=[]
c=[]
d=s.d
q=!s.c.u(0,n.a)?7:8
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
if(d.d!=null){g=P.jN(c)
f=d.d
e=f.c.h(0,g)
n=new L.e7(e==null?f.b:e,g,m)
k=b.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.u(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.mF()
case 1:return P.mG(o)}}},t.j)},
i:function(a){var s,r=new P.aD(""),q=this.d
if(q!=null)r.a=q.ci()+"\n"
for(q=this.a,q=q.gh6(q),q=new H.c9(J.aT(q.a),q.b);q.t();){s=q.a
if(s!=this.d)r.a+=s.ci()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.iq.prototype={
i:function(a){return this.b.b+": "+this.bV(0)}}
O.bq.prototype={
bY:function(){this.a=[]
this.c=this.b=null},
bS:function(a,b,c){this.b=b
this.c=a},
b7:function(a,b){return this.bS(a,null,b)},
ex:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
dW:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gl:function(a){return this.a.length},
gK:function(a){var s=this.a
return new J.X(s,s.length)},
C:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.e(s,b)
return s[b]},
p:function(a,b){var s,r
if(this.ex([b])){s=this.a
r=s.length
s.push(b)
this.dW(r,[b])}},
$if:1}
O.cc.prototype={
gl:function(a){return this.a.length},
gB:function(){var s=this.b
return s==null?this.b=D.a2():s},
am:function(){var s=this.b
if(s!=null)s.M(null)},
gP:function(a){var s=this.a
if(s.length>0)return C.a.gb1(s)
else return V.jJ()},
d0:function(a){var s=this.a
if(a==null)s.push(V.jJ())
else s.push(a)
this.am()},
bL:function(){var s=this.a
if(s.length>0){s.pop()
this.am()}}}
E.fI.prototype={}
E.bs.prototype={
sbT:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gB().G(0,q.gcW())
s=q.c
if(s!=null)s.gB().p(0,q.gcW())
r=new D.B("shape",p,q.c)
r.b=!0
q.ai(r)}},
saN:function(a){var s,r,q=this
if(!J.H(q.r,a)){s=q.r
if(s!=null)s.gB().G(0,q.gcU())
if(a!=null)a.gB().p(0,q.gcU())
q.r=a
r=new D.B("mover",s,a)
r.b=!0
q.ai(r)}},
b5:function(a,b){var s,r,q,p,o,n,m,l=this,k=l.r
if(k!=null){s=k.r
r=b.e
if(s<r){k.r=r
s=k.y
if(s!=null)++s.d
k.sd8(k.a+k.d*b.y)
k.scZ(0,k.b+k.e*b.y)
k.sd3(k.c+k.f*b.y)
s=k.c
q=Math.cos(s)
p=Math.sin(s)
s=V.az(q,-p,0,0,p,q,0,0,0,0,1,0,0,0,0,1)
r=k.b
q=Math.cos(r)
p=Math.sin(r)
s=s.N(0,V.az(q,0,-p,0,0,1,0,0,p,0,q,0,0,0,0,1))
r=k.a
q=Math.cos(r)
p=Math.sin(r)
k.x=s.N(0,V.az(1,0,0,0,0,q,-p,0,0,p,q,0,0,0,0,1))
s=k.y
if(s!=null)s.a9(0)}o=k.x}else o=null
if(!J.H(o,l.x)){n=l.x
l.x=o
m=new D.B("matrix",n,o)
m.b=!0
l.ai(m)}for(k=l.y.a,k=new J.X(k,k.length);k.t();)k.d.b5(0,b)},
ax:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.gP(q))
else o.push(p.N(0,q.gP(q)))
q.am()
a.d1(r.f)
q=a.dy
s=(q&&C.a).gb1(q)
if(s!=null&&r.d!=null)s.fT(a,r)
for(q=r.y.a,q=new J.X(q,q.length);q.t();)q.d.ax(a)
a.d_()
a.dx.bL()},
ai:function(a){var s=this.z
if(s!=null)s.M(a)},
R:function(){return this.ai(null)},
cX:function(a){this.e=null
this.ai(a)},
fG:function(){return this.cX(null)},
cV:function(a){this.ai(a)},
fF:function(){return this.cV(null)},
cT:function(a){this.ai(a)},
fC:function(){return this.cT(null)},
fB:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gcS(),q=0;q<b.length;b.length===s||(0,H.k)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bt()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}this.R()},
fE:function(a,b){var s,r
for(s=b.gK(b),r=this.gcS();s.t();)s.gD(s).gB().G(0,r)
this.R()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bo.prototype={
i:function(a){return this.b}}
E.bz.prototype={
i:function(a){return this.b}}
E.eE.prototype={}
E.hR.prototype={
ds:function(a,b){var s,r=this
r.d=r.c=512
r.e=0
r.x=r.r=r.f=new P.aZ(Date.now(),!1)
r.y=0
r.cx=r.ch=r.Q=r.z=null
s=new O.cc()
s.a=[]
s.gB().p(0,new E.hS(r))
r.cy=s
s=new O.cc()
s.a=[]
s.gB().p(0,new E.hT(r))
r.db=s
s=new O.cc()
s.a=[]
s.gB().p(0,new E.hU(r))
r.dx=s
s=[]
r.dy=s
s.push(null)
r.fr=new H.u(t.F)},
gfP:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.gP(q)
s=r.db
s=r.z=q.N(0,s.gP(s))
q=s}return q},
d1:function(a){var s=this.dy
s.push(a==null?(s&&C.a).gb1(s):a)},
d_:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.hS.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.hT.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.hU.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.e6.prototype={
c0:function(a){this.d2()},
c_:function(){return this.c0(null)},
gfs:function(){var s,r=this,q=Date.now(),p=C.c.S(P.kn(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.aZ(q,!1)
return s/p},
cd:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.N()
if(typeof p!=="number")return H.K(p)
s=C.d.bF(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.N()
r=C.d.bF(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.kL(C.i,q.gfV())}},
d2:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.y.dT(s)
r=W.lc(new E.ij(this),t.H)
r.toString
C.y.eM(s,r)}},
fS:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cd()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.aZ(p,!1)
q.y=P.kn(p-q.r.a).a*0.000001
p=q.cy
C.a.sl(p.a,0)
p.am()
p=q.db
C.a.sl(p.a,0)
p.am()
p=q.dx
C.a.sl(p.a,0)
p.am()
p=q.dy
p.toString
C.a.sl(p,0)
q.dy.push(null)
m.ax(n.e)}q=n.Q
if(q!=null)q.M(null)}catch(o){s=H.as(o)
r=H.k4(o)
P.k9("Error: "+H.d(s))
P.k9("Stack: "+H.d(r))
throw H.c(s)}}}
E.ij.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.fS()}}}
Z.et.prototype={}
Z.fJ.prototype={
bq:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.as(q)
r=P.o('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.d(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.d(s.e)+"]"}}
Z.iU.prototype={}
Z.d0.prototype={
av:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
bq:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].bq(a)},
h5:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
ax:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.e(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)o.push(s[q].i(0))
p=[]
for(s=this.c,r=s.length,q=0;q<r;++q)p.push(J.T(s[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(o,", ")+"\nAttrs:   "+C.a.k(p,", ")}}
Z.c0.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d(H.dN(this.c))+"'")+"]"}}
Z.aG.prototype={
gbU:function(a){var s=this.a,r=(s&$.aR().a)!==0?3:0
if((s&$.aQ().a)!==0)r+=3
if((s&$.aP().a)!==0)r+=3
if((s&$.aS().a)!==0)r+=2
if((s&$.bm().a)!==0)r+=3
if((s&$.cS().a)!==0)r+=3
if((s&$.cT().a)!==0)r+=4
if((s&$.bR().a)!==0)++r
return(s&$.aO().a)!==0?r+4:r},
f3:function(a){var s,r=$.aR(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.aQ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aP()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aS()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bm()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cS()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cT()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bR()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aO()
if((q&r.a)!==0)if(s===a)return r
return $.lD()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aG))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.aR().a)!==0)s.push("Pos")
if((r&$.aQ().a)!==0)s.push("Norm")
if((r&$.aP().a)!==0)s.push("Binm")
if((r&$.aS().a)!==0)s.push("Txt2D")
if((r&$.bm().a)!==0)s.push("TxtCube")
if((r&$.cS().a)!==0)s.push("Clr3")
if((r&$.cT().a)!==0)s.push("Clr4")
if((r&$.bR().a)!==0)s.push("Weight")
if((r&$.aO().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.k(s,"|")}}
D.fK.prototype={}
D.bt.prototype={
p:function(a,b){var s=this.a;(s==null?this.a=[]:s).push(b)},
G:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.a.u(q,b)
if(q===!0){q=r.a
s=(q&&C.a).G(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.a.u(q,b)
if(q===!0){q=r.b
s=(q&&C.a).G(q,b)||s}return s},
M:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.ag()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.a.E(P.jI(s,!0),new D.h0(o))
s=p.b
if(s!=null){p.b=[]
C.a.E(s,new D.h1(o))}return!0},
fm:function(){return this.M(null)},
a9:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.M(s)}}}}
D.h0.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.h1.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.ag.prototype={}
D.b4.prototype={}
D.b5.prototype={}
D.B.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.d1.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d1))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.dn.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dn))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.hg.prototype={
fL:function(a){this.d.p(0,a.a)
return!1},
fH:function(a){this.d.G(0,a.a)
return!1}}
X.hl.prototype={
bK:function(a,b){this.r=a.a
return!1},
aP:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.de()
if(typeof s!=="number")return s.a1()
this.r=(s&~r)>>>0
return!1},
aO:function(a,b){return!1},
fM:function(a){return!1},
el:function(a,b,c){return}}
X.cd.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.cd))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.hH.prototype={
bK:function(a,b){this.f=a.a
return!1},
aP:function(a,b){var s=this.f,r=a.a
if(typeof r!=="number")return r.de()
if(typeof s!=="number")return s.a1()
this.f=(s&~r)>>>0
return!1},
aO:function(a,b){return!1},
fN:function(a,b){return!1}}
X.io.prototype={
fK:function(a){return!1},
fI:function(a){return!1},
fJ:function(a){return!1}}
X.er.prototype={
c7:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.dn(s,new X.cd(r,a.altKey,a.shiftKey))},
aq:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
bo:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
ag:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.U()
if(typeof o!=="number")return H.K(o)
s=r.top
if(typeof p!=="number")return p.U()
if(typeof s!=="number")return H.K(s)
return new V.aA(q-o,p-s)},
aD:function(a){return new V.bH(a.movementX,a.movementY)},
bj:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=[]
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q){p=s[q]
o=C.d.a4(p.pageX)
C.d.a4(p.pageY)
n=k.left
if(typeof n!=="number")return H.K(n)
C.d.a4(p.pageX)
m=C.d.a4(p.pageY)
l=k.top
if(typeof l!=="number")return H.K(l)
j.push(new V.aA(o-n,m-l))}return j},
ad:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.d1(s,new X.cd(r,a.altKey,a.shiftKey))},
bg:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.U()
if(typeof n!=="number")return H.K(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.U()
if(typeof p!=="number")return H.K(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.K(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.K(p)
p=r<p}else p=!1
return p},
ef:function(a){this.f=!0},
e3:function(a){this.f=!1},
e9:function(a){if(this.f&&this.bg(a))a.preventDefault()},
ej:function(a){var s
if(!this.f)return
s=this.c7(a)
this.b.fL(s)},
eh:function(a){var s
if(!this.f)return
s=this.c7(a)
this.b.fH(s)},
en:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aq(a)
if(p.x){s=p.ad(a)
r=p.aD(a)
if(p.d.bK(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.ad(a)
q=p.ag(a)
if(p.c.bK(s,q))a.preventDefault()},
er:function(a){var s,r,q,p=this
p.aq(a)
s=p.ad(a)
if(p.x){r=p.aD(a)
if(p.d.aP(s,r))a.preventDefault()
return}if(p.r)return
q=p.ag(a)
if(p.c.aP(s,q))a.preventDefault()},
ed:function(a){var s,r,q,p=this
if(!p.bg(a)){p.aq(a)
s=p.ad(a)
if(p.x){r=p.aD(a)
if(p.d.aP(s,r))a.preventDefault()
return}if(p.r)return
q=p.ag(a)
if(p.c.aP(s,q))a.preventDefault()}},
ep:function(a){var s,r,q,p=this
p.aq(a)
s=p.ad(a)
if(p.x){r=p.aD(a)
if(p.d.aO(s,r))a.preventDefault()
return}if(p.r)return
q=p.ag(a)
if(p.c.aO(s,q))a.preventDefault()},
eb:function(a){var s,r,q,p=this
if(!p.bg(a)){p.aq(a)
s=p.ad(a)
if(p.x){r=p.aD(a)
if(p.d.aO(s,r))a.preventDefault()
return}if(p.r)return
q=p.ag(a)
if(p.c.aO(s,q))a.preventDefault()}},
eu:function(a){var s,r,q,p,o,n=this
n.aq(a)
s=(a&&C.x).gff(a)
r=C.x.gfg(a)
q=n.Q
if(typeof s!=="number")return s.N()
if(typeof q!=="number")return H.K(q)
if(typeof r!=="number")return r.N()
p=new V.bH(s*q,r*q)
if(n.x){if(n.d.fM(p))a.preventDefault()
return}if(n.r)return
o=n.ag(a)
if(n.c.fN(p,o))a.preventDefault()},
ew:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.ad(q.y)
r=q.ag(q.y)
q.d.el(s,r,p)}},
eH:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bo(a)
s=r.bj(a)
if(r.e.fK(s))a.preventDefault()},
eD:function(a){var s
this.bo(a)
s=this.bj(a)
if(this.e.fI(s))a.preventDefault()},
eF:function(a){var s
this.bo(a)
s=this.bj(a)
if(this.e.fJ(s))a.preventDefault()}}
D.br.prototype={
ab:function(a){var s=this.r
if(s!=null)s.M(a)},
dA:function(){return this.ab(null)},
$iai:1}
D.ai.prototype={}
D.c5.prototype={
ab:function(a){var s=this.y
if(s!=null)s.M(a)},
cb:function(a){var s=this.z
if(s!=null)s.M(a)},
ek:function(){return this.cb(null)},
ez:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.k)(a),++r){q=a[r]
if(q==null||this.dN(q))return!1}return!0},
dY:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gca(),q=0;q<b.length;b.length===s||(0,H.k)(b),++q){p=b[q]
if(p instanceof D.br)this.f.push(p)
o=p.r
if(o==null){o=new D.bt()
o.d=0
p.r=o}n=o.a;(n==null?o.a=[]:n).push(r)}s=new D.b4()
s.b=!0
this.ab(s)},
eB:function(a,b){var s,r,q
for(s=b.gK(b),r=this.gca();s.t();){q=s.gD(s)
C.a.G(this.e,q)
q.gB().G(0,r)}s=new D.b5()
s.b=!0
this.ab(s)},
dN:function(a){var s=C.a.u(this.f,a)
return s}}
V.O.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.O))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+", "+V.w(this.c,3,0)+"]"}}
V.av.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.av))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.w(s.a,3,0)+", "+V.w(s.b,3,0)+", "+V.w(s.c,3,0)+", "+V.w(s.d,3,0)+"]"}}
V.fZ.prototype={}
V.du.prototype={
W:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.du))return!1
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
i:function(a){var s,r,q,p,o=this,n=V.bQ([o.a,o.d,o.r],3,0),m=V.bQ([o.b,o.e,o.x],3,0),l=V.bQ([o.c,o.f,o.y],3,0),k=n.length
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
V.bw.prototype={
W:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
cO:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.A().toString
if(Math.abs(b3-0)<1e-9)return V.jJ()
s=1/b3
r=-l
q=-a2
return V.az((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
N:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.az(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
b4:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.y(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
aQ:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.Z(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bw))return!1
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
i:function(a){return this.H()},
v:function(a){var s,r,q,p,o,n=this,m=V.bQ([n.a,n.e,n.y,n.cx],3,0),l=V.bQ([n.b,n.f,n.z,n.cy],3,0),k=V.bQ([n.c,n.r,n.Q,n.db],3,0),j=V.bQ([n.d,n.x,n.ch,n.dx],3,0),i=m.length
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
H:function(){return this.v("")}}
V.aA.prototype={
n:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aA))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+"]"}}
V.Z.prototype={
U:function(a,b){return new V.Z(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.Z))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+", "+V.w(this.c,3,0)+"]"}}
V.dM.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dM))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.w(s.a,3,0)+", "+V.w(s.b,3,0)+", "+V.w(s.c,3,0)+", "+V.w(s.d,3,0)+"]"}}
V.dP.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dP))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.w(s.a,3,0)+", "+V.w(s.b,3,0)+", "+V.w(s.c,3,0)+", "+V.w(s.d,3,0)+"]"}}
V.bH.prototype={
bG:function(a){var s,r=this.a
if(typeof r!=="number")return r.N()
s=this.b
if(typeof s!=="number")return s.N()
return Math.sqrt(r*r+s*s)},
n:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bH))return!1
s=b.a
r=this.a
$.A().toString
if(typeof s!=="number")return s.U()
if(typeof r!=="number")return H.K(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.U()
if(typeof r!=="number")return H.K(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+"]"}}
V.y.prototype={
bG:function(a){return Math.sqrt(this.aJ(this))},
aJ:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bH:function(a,b){return new V.y(V.k6(this.a,a.a,b),V.k6(this.b,a.b,b),V.k6(this.c,a.c,b))},
J:function(){var s=this,r=Math.sqrt(s.aJ(s))
if(r===1)return s
return s.d9(0,r)},
aG:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.y(s*r-q*p,q*o-n*r,n*p-s*o)},
A:function(a,b){return new V.y(this.a+b.a,this.b+b.b,this.c+b.c)},
aA:function(a){return new V.y(-this.a,-this.b,-this.c)},
d9:function(a,b){$.A().toString
if(Math.abs(b-0)<1e-9)return V.cn()
return new V.y(this.a/b,this.b/b,this.c/b)},
cQ:function(){$.A().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.y))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+", "+V.w(this.c,3,0)+"]"}}
U.d4.prototype={
gB:function(){var s=this.b
return s==null?this.b=D.a2():s},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d4))return!1
return J.H(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")}}
U.hI.prototype={}
U.dR.prototype={
gB:function(){var s=this.y
return s==null?this.y=D.a2():s},
ap:function(a){var s=this.y
if(s!=null)s.M(a)},
sd8:function(a){var s
a=V.kb(a,0,6.283185307179586)
s=this.a
$.A().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
s=new D.B("yaw",s,a)
s.b=!0
this.ap(s)}},
scZ:function(a,b){var s
b=V.kb(b,0,6.283185307179586)
s=this.b
$.A().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
s=new D.B("pitch",s,b)
s.b=!0
this.ap(s)}},
sd3:function(a){var s
a=V.kb(a,0,6.283185307179586)
s=this.c
$.A().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
s=new D.B("roll",s,a)
s.b=!0
this.ap(s)}},
n:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.dR))return!1
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
return"Rotator: ["+V.w(s.a,3,0)+", "+V.w(s.b,3,0)+", "+V.w(s.c,3,0)+"], ["+V.w(s.d,3,0)+", "+V.w(s.e,3,0)+", "+V.w(s.f,3,0)+"]"}}
M.da.prototype={
ac:function(a){var s=this.y
if(s!=null)s.M(a)},
dB:function(){return this.ac(null)},
e5:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.ga6(),q=0;q<b.length;b.length===s||(0,H.k)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bt()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.b4()
s.b=!0
this.ac(s)},
e7:function(a,b){var s,r
for(s=b.gK(b),r=this.ga6();s.t();)s.gD(s).gB().G(0,r)
s=new D.b5()
s.b=!0
this.ac(s)},
sd5:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gB().G(0,r.ga6())
s=r.d
r.d=a
if(a!=null)a.gB().p(0,r.ga6())
q=new D.B("technique",s,r.d)
q.b=!0
r.ac(q)}},
gB:function(){var s=this.y
return s==null?this.y=D.a2():s},
ax:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.d1(d.d)
s=d.c
s.toString
r=a.a
r.bindFramebuffer(36160,null)
r.enable(2884)
r.enable(2929)
r.depthFunc(513)
q=r.drawingBufferWidth
p=r.drawingBufferHeight
o=s.r
n=o.a
if(typeof q!=="number")return H.K(q)
m=C.d.a4(n*q)
n=o.b
if(typeof p!=="number")return H.K(p)
l=C.d.a4(n*p)
n=C.d.a4(o.c*q)
a.c=n
o=C.d.a4(o.d*p)
a.d=o
r.viewport(m,l,n,o)
r.clearDepth(s.c)
s=s.a
r.clearColor(s.a,s.b,s.c,s.d)
r.clear(16640)
s=d.b
r=a.c
o=a.d
n=s.c
k=s.d
j=s.e
i=j-k
h=1/Math.tan(n*0.5)
g=V.az(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.d0(g)
r=$.kz
if(r==null){r=V.kB()
o=V.jQ()
n=$.kP
r=V.kw(r,o,n==null?$.kP=new V.y(0,0,-1):n)
$.kz=r
f=r}else f=r
s=s.b
if(s!=null){e=s.a
if(e!=null)f=e.N(0,f)}a.db.d0(f)
s=d.d
if(s!=null)s.b5(0,a)
for(s=d.e.a,s=new J.X(s,s.length);s.t();)s.d.b5(0,a)
for(s=d.e.a,s=new J.X(s,s.length);s.t();)s.d.ax(a)
d.b.toString
a.cy.bL()
a.db.bL()
d.c.toString
a.d_()}}
A.fC.prototype={}
A.fD.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
fn:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
fh:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.P.prototype={
ga5:function(a){var s=this.a?1:0,r=this.b?2:0
return s|r|0},
i:function(a){var s=this.a?1:0,r=this.b?2:0
return""+(s|r|0)},
n:function(a,b){if(b==null)return!1
if(!(b instanceof A.P))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.hn.prototype={
dr:function(c8,c9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5="Required uniform value, ",c6=", was not defined or used in shader.",c7="uniform mat4 objMat;\n"
c3.z=c8
s=new P.aD("")
r=c8.fr
if(r){s.a=c7
q=c7}else q=""
p=c8.fx
q=(p?s.a=q+"uniform mat4 viewObjMat;\n":q)+"uniform mat4 projViewObjMat;\n"
s.a=q
q+="\n"
s.a=q
q=s.a=q+"attribute vec3 posAttr;\n"
o=c8.k4
if(o){q+="attribute vec3 normAttr;\n"
s.a=q}n=c8.r1
s.a=(n?s.a=q+"attribute vec3 binmAttr;\n":q)+"\n"
A.nw(c8,s)
A.ny(c8,s)
A.nx(c8,s)
A.nA(c8,s)
A.nB(c8,s)
A.nz(c8,s)
A.nC(c8,s)
q=s.a+="vec4 getPos()\n"
q+="{\n"
s.a=q
m=c8.ry
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
s.a=q}if(c8.r2){q+="   txt2D = getTxt2D();\n"
s.a=q}if(c8.rx){q+="   txtCube = getTxtCube();\n"
s.a=q}if(c8.k2){q+="   objPos = getObjPos();\n"
s.a=q}q=(c8.k3?s.a=q+"   viewPos = getViewPos();\n":q)+"   gl_Position = getPos();\n"
s.a=q
q+="}\n"
s.a=q
q=s.a=q+"\n"
l=q.charCodeAt(0)==0?q:q
k=A.nv(c3.z)
c3.c=l
c3.d=k
c3.e=c3.c8(l,35633)
c3.f=c3.c8(c3.d,35632)
q=c3.a
o=q.createProgram()
c3.r=o
q.attachShader(o,c3.e)
q.attachShader(c3.r,c3.f)
q.linkProgram(c3.r)
if(!q.getProgramParameter(c3.r,35714)){j=q.getProgramInfoLog(c3.r)
q.deleteProgram(c3.r)
H.p(P.o("Failed to link shader: "+H.d(j)))}c3.eW()
c3.eY()
c3.Q=c3.x.h(0,"posAttr")
c3.cx=c3.x.h(0,"normAttr")
c3.ch=c3.x.h(0,"binmAttr")
c3.cy=c3.x.h(0,"txt2DAttr")
c3.db=c3.x.h(0,"txtCubeAttr")
c3.dx=c3.x.h(0,"bendAttr")
if(c8.dy)c3.id=t.q.a(c3.y.w(0,"invViewMat"))
if(r)c3.dy=t.q.a(c3.y.w(0,"objMat"))
if(p)c3.fr=t.q.a(c3.y.w(0,"viewObjMat"))
r=t.q
c3.fy=r.a(c3.y.w(0,"projViewObjMat"))
if(c8.go)c3.fx=r.a(c3.y.w(0,"viewMat"))
if(c8.x1)c3.k1=t.O.a(c3.y.w(0,"txt2DMat"))
if(c8.x2)c3.k2=r.a(c3.y.w(0,"txtCubeMat"))
if(c8.y1)c3.k3=r.a(c3.y.w(0,"colorMat"))
c3.r1=[]
q=c8.au
if(q>0){c3.k4=c3.y.w(0,"bendMatCount")
for(i=0;i<q;++i){p=c3.r1
o=c3.y
n="bendValues["+i+"].mat"
h=o.h(0,n)
if(h==null)H.p(P.o(c5+n+c6))
p.push(r.a(h))}}r=c8.a
if(r.a)c3.r2=t.r.a(c3.y.w(0,"emissionClr"))
if(r.b)c3.rx=t.c.a(c3.y.w(0,"emissionTxt"))
r=c8.b
if(r.a)c3.x1=t.r.a(c3.y.w(0,"ambientClr"))
if(r.b)c3.x2=t.c.a(c3.y.w(0,"ambientTxt"))
r=c8.c
if(r.a)c3.y2=t.r.a(c3.y.w(0,"diffuseClr"))
if(r.b)c3.au=t.c.a(c3.y.w(0,"diffuseTxt"))
r=c8.d
if(r.a)c3.b_=t.r.a(c3.y.w(0,"invDiffuseClr"))
if(r.b)c3.cv=t.c.a(c3.y.w(0,"invDiffuseTxt"))
r=c8.e
q=r.a
if(q||r.b||!1){c3.cA=t.n.a(c3.y.w(0,"shininess"))
if(q)c3.cw=t.r.a(c3.y.w(0,"specularClr"))
if(r.b)c3.cz=t.c.a(c3.y.w(0,"specularTxt"))}if(c8.f.b)c3.cB=t.c.a(c3.y.w(0,"bumpTxt"))
if(c8.db){c3.cC=t.Q.a(c3.y.w(0,"envSampler"))
r=c8.r
if(r.a)c3.cD=t.r.a(c3.y.w(0,"reflectClr"))
if(r.b)c3.cE=t.c.a(c3.y.w(0,"reflectTxt"))
r=c8.x
q=r.a
if(q||r.b||!1){c3.cF=t.n.a(c3.y.w(0,"refraction"))
if(q)c3.cG=t.r.a(c3.y.w(0,"refractClr"))
if(r.b)c3.cH=t.c.a(c3.y.w(0,"refractTxt"))}}r=c8.y
if(r.a)c3.cI=t.n.a(c3.y.w(0,"alpha"))
if(r.b)c3.cJ=t.c.a(c3.y.w(0,"alphaTxt"))
if(c8.k1){r=c8.z
q=r.length
if(q!==0){c3.bx=new H.u(t.J)
c3.by=new H.u(t.s)
for(p=t.r,o=t.n,g=0;g<r.length;r.length===q||(0,H.k)(r),++g){f=r[g]
e=f.a
d="barLight"+H.d(e)
c=[]
for(n=f.b,i=0;i<n;++i){m=c3.y
b=d+"s["+i+"].startPnt"
h=m.h(0,b)
if(h==null)H.p(P.o(c5+b+c6))
p.a(h)
m=c3.y
b=d+"s["+i+"].endPnt"
a=m.h(0,b)
if(a==null)H.p(P.o(c5+b+c6))
p.a(a)
m=c3.y
b=d+"s["+i+"].color"
a0=m.h(0,b)
if(a0==null)H.p(P.o(c5+b+c6))
p.a(a0)
if(typeof e!=="number")return e.a1()
if((e&4)!==0){m=c3.y
b=d+"s["+i+"].att0"
a1=m.h(0,b)
if(a1==null)H.p(P.o(c5+b+c6))
o.a(a1)
m=c3.y
b=d+"s["+i+"].att1"
a2=m.h(0,b)
if(a2==null)H.p(P.o(c5+b+c6))
o.a(a2)
m=c3.y
b=d+"s["+i+"].att2"
a3=m.h(0,b)
if(a3==null)H.p(P.o(c5+b+c6))
o.a(a3)
a4=a3
a5=a2
a6=a1}else{a4=c4
a5=a4
a6=a5}c.push(new A.ef(h,a,a0,a6,a5,a4))}c3.by.m(0,e,c)
n=c3.bx
m=c3.y
b=d+"Count"
h=m.h(0,b)
if(h==null)H.p(P.o(c5+b+c6))
n.m(0,e,h)}}r=c8.Q
q=r.length
if(q!==0){c3.bz=new H.u(t.J)
c3.bA=new H.u(t.G)
for(p=t.r,o=t.c,g=0;g<r.length;r.length===q||(0,H.k)(r),++g){f=r[g]
e=f.a
d="dirLight"+H.d(e)
c=[]
for(n=f.b,i=0;i<n;++i){if(typeof e!=="number")return e.a1()
m=(e&1)!==0
if(m){b=c3.y
a7=d+"s["+i+"].objUp"
h=b.h(0,a7)
if(h==null)H.p(P.o(c5+a7+c6))
p.a(h)
b=c3.y
a7=d+"s["+i+"].objRight"
a=b.h(0,a7)
if(a==null)H.p(P.o(c5+a7+c6))
p.a(a)
b=c3.y
a7=d+"s["+i+"].objDir"
a0=b.h(0,a7)
if(a0==null)H.p(P.o(c5+a7+c6))
p.a(a0)
a8=a0
a9=a
b0=h}else{a8=c4
a9=a8
b0=a9}b=c3.y
a7=d+"s["+i+"].viewDir"
h=b.h(0,a7)
if(h==null)H.p(P.o(c5+a7+c6))
p.a(h)
b=c3.y
a7=d+"s["+i+"].color"
a=b.h(0,a7)
if(a==null)H.p(P.o(c5+a7+c6))
p.a(a)
if(m){m=c3.y
b=d+"sTexture2D"+i
a0=m.h(0,b)
if(a0==null)H.p(P.o(c5+b+c6))
o.a(a0)
b1=a0}else b1=c4
c.push(new A.eg(b0,a9,a8,h,a,b1))}c3.bA.m(0,e,c)
n=c3.bz
m=c3.y
b=d+"Count"
h=m.h(0,b)
if(h==null)H.p(P.o(c5+b+c6))
n.m(0,e,h)}}r=c8.ch
q=r.length
if(q!==0){c3.bB=new H.u(t.J)
c3.bC=new H.u(t.W)
for(p=t.r,o=t.O,n=t.Q,m=t.y,b=t.n,g=0;g<r.length;r.length===q||(0,H.k)(r),++g){f=r[g]
e=f.a
d="pointLight"+H.d(e)
c=[]
for(a7=f.b,i=0;i<a7;++i){b2=c3.y
b3=d+"s["+i+"].point"
h=b2.h(0,b3)
if(h==null)H.p(P.o(c5+b3+c6))
p.a(h)
b2=c3.y
b3=d+"s["+i+"].viewPnt"
a=b2.h(0,b3)
if(a==null)H.p(P.o(c5+b3+c6))
p.a(a)
b2=c3.y
b3=d+"s["+i+"].color"
a0=b2.h(0,b3)
if(a0==null)H.p(P.o(c5+b3+c6))
p.a(a0)
if(typeof e!=="number")return e.a1()
if((e&3)!==0){b2=c3.y
b3=d+"s["+i+"].invViewRotMat"
a1=b2.h(0,b3)
if(a1==null)H.p(P.o(c5+b3+c6))
o.a(a1)
b4=a1}else b4=c4
if((e&1)!==0){b2=c3.y
b3=d+"sTextureCube"+i
a1=b2.h(0,b3)
if(a1==null)H.p(P.o(c5+b3+c6))
n.a(a1)
b1=a1}else b1=c4
if((e&2)!==0){b2=c3.y
b3=d+"sShadowCube"+i
a1=b2.h(0,b3)
if(a1==null)H.p(P.o(c5+b3+c6))
n.a(a1)
b2=c3.y
b3=d+"s["+i+"].shadowAdj"
a2=b2.h(0,b3)
if(a2==null)H.p(P.o(c5+b3+c6))
m.a(a2)
b5=a1
b6=a2}else{b5=c4
b6=b5}if((e&4)!==0){b2=c3.y
b3=d+"s["+i+"].att0"
a1=b2.h(0,b3)
if(a1==null)H.p(P.o(c5+b3+c6))
b.a(a1)
b2=c3.y
b3=d+"s["+i+"].att1"
a2=b2.h(0,b3)
if(a2==null)H.p(P.o(c5+b3+c6))
b.a(a2)
b2=c3.y
b3=d+"s["+i+"].att2"
a3=b2.h(0,b3)
if(a3==null)H.p(P.o(c5+b3+c6))
b.a(a3)
a4=a3
a5=a2
a6=a1}else{a4=c4
a5=a4
a6=a5}c.push(new A.ej(h,a,b4,a0,b1,b5,b6,a6,a5,a4))}c3.bC.m(0,e,c)
a7=c3.bB
b2=c3.y
b3=d+"Count"
h=b2.h(0,b3)
if(h==null)H.p(P.o(c5+b3+c6))
a7.m(0,e,h)}}r=c8.cx
q=r.length
if(q!==0){c3.bD=new H.u(t.J)
c3.bE=new H.u(t.M)
for(p=t.r,o=t.n,n=t.y,m=t.c,g=0;g<r.length;r.length===q||(0,H.k)(r),++g){f=r[g]
e=f.a
d="spotLight"+H.d(e)
c=[]
for(b=f.b,i=0;i<b;++i){a7=c3.y
b2=d+"s["+i+"].objPnt"
h=a7.h(0,b2)
if(h==null)H.p(P.o(c5+b2+c6))
p.a(h)
a7=c3.y
b2=d+"s["+i+"].objDir"
a=a7.h(0,b2)
if(a==null)H.p(P.o(c5+b2+c6))
p.a(a)
a7=c3.y
b2=d+"s["+i+"].viewPnt"
a0=a7.h(0,b2)
if(a0==null)H.p(P.o(c5+b2+c6))
p.a(a0)
a7=c3.y
b2=d+"s["+i+"].color"
a1=a7.h(0,b2)
if(a1==null)H.p(P.o(c5+b2+c6))
p.a(a1)
if(typeof e!=="number")return e.a1()
if((e&3)!==0){a7=c3.y
b2=d+"s["+i+"].objUp"
a2=a7.h(0,b2)
if(a2==null)H.p(P.o(c5+b2+c6))
p.a(a2)
a7=c3.y
b2=d+"s["+i+"].objRight"
a3=a7.h(0,b2)
if(a3==null)H.p(P.o(c5+b2+c6))
p.a(a3)
a7=c3.y
b2=d+"s["+i+"].tuScalar"
b7=a7.h(0,b2)
if(b7==null)H.p(P.o(c5+b2+c6))
o.a(b7)
a7=c3.y
b2=d+"s["+i+"].tvScalar"
b8=a7.h(0,b2)
if(b8==null)H.p(P.o(c5+b2+c6))
o.a(b8)
b9=b8
c0=b7
a9=a3
b0=a2}else{b9=c4
c0=b9
a9=c0
b0=a9}a7=(e&2)!==0
if(a7){b2=c3.y
b3=d+"s["+i+"].shadowAdj"
a2=b2.h(0,b3)
if(a2==null)H.p(P.o(c5+b3+c6))
n.a(a2)
b6=a2}else b6=c4
if((e&8)!==0){b2=c3.y
b3=d+"s["+i+"].cutoff"
a2=b2.h(0,b3)
if(a2==null)H.p(P.o(c5+b3+c6))
o.a(a2)
b2=c3.y
b3=d+"s["+i+"].coneAngle"
a3=b2.h(0,b3)
if(a3==null)H.p(P.o(c5+b3+c6))
o.a(a3)
c1=a3
c2=a2}else{c1=c4
c2=c1}if((e&4)!==0){b2=c3.y
b3=d+"s["+i+"].att0"
a2=b2.h(0,b3)
if(a2==null)H.p(P.o(c5+b3+c6))
o.a(a2)
b2=c3.y
b3=d+"s["+i+"].att1"
a3=b2.h(0,b3)
if(a3==null)H.p(P.o(c5+b3+c6))
o.a(a3)
b2=c3.y
b3=d+"s["+i+"].att2"
b7=b2.h(0,b3)
if(b7==null)H.p(P.o(c5+b3+c6))
o.a(b7)
a4=b7
a5=a3
a6=a2}else{a4=c4
a5=a4
a6=a5}if((e&1)!==0){b2=c3.y
b3=d+"sTexture2D"+i
a2=b2.h(0,b3)
if(a2==null)H.p(P.o(c5+b3+c6))
m.a(a2)
b1=a2}else b1=c4
if(a7){a7=c3.y
b2=d+"sShadow2D"+i
a2=a7.h(0,b2)
if(a2==null)H.p(P.o(c5+b2+c6))
m.a(a2)
b5=a2}else b5=c4
c.push(new A.em(h,a,a0,a1,b0,a9,c0,b9,b6,c2,c1,a6,a5,a4,b1,b5))}c3.bE.m(0,e,c)
b=c3.bD
a7=c3.y
b2=d+"Count"
h=a7.h(0,b2)
if(h==null)H.p(P.o(c5+b2+c6))
b.m(0,e,h)}}}if(c8.y2){c3.cK=c3.y.w(0,"fogColor")
c3.cL=c3.y.w(0,"fogStop")
c3.cM=c3.y.w(0,"fogWidth")}},
a3:function(a,b){if(b!=null&&b.d)a.dg(b)},
eS:function(a,b){}}
A.fH.prototype={
i:function(a){return"barLight"+H.d(this.a)}}
A.fQ.prototype={
i:function(a){return"dirLight"+H.d(this.a)}}
A.hO.prototype={
i:function(a){return"pointLight"+H.d(this.a)}}
A.i6.prototype={
i:function(a){return"spotLight"+H.d(this.a)}}
A.hq.prototype={
i:function(a){return this.aK}}
A.ef.prototype={}
A.eg.prototype={}
A.ej.prototype={}
A.em.prototype={}
A.dU.prototype={
du:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
c8:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.c(P.o("Error compiling shader '"+H.d(q)+"': "+H.d(s)))}return q},
eW:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.K(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.fC(n,r.name,q))}p.x=new A.fD(o)},
eY:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.K(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.fe(r.type,r.size,r.name,q))}p.y=new A.iA(o)},
ao:function(a,b,c){var s=this.a
if(a===1)return new A.ec(s,b,c)
else return A.jP(s,this.r,b,a,c)},
dQ:function(a,b,c){var s=this.a
if(a===1)return new A.ek(s,b,c)
else return A.jP(s,this.r,b,a,c)},
dR:function(a,b,c){var s=this.a
if(a===1)return new A.el(s,b,c)
else return A.jP(s,this.r,b,a,c)},
aY:function(a,b){return new P.eH(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
fe:function(a,b,c,d){var s=this
switch(a){case 5120:return s.ao(b,c,d)
case 5121:return s.ao(b,c,d)
case 5122:return s.ao(b,c,d)
case 5123:return s.ao(b,c,d)
case 5124:return s.ao(b,c,d)
case 5125:return s.ao(b,c,d)
case 5126:return new A.eb(s.a,c,d)
case 35664:return new A.iw(s.a,c,d)
case 35665:return new A.ed(s.a,c,d)
case 35666:return new A.ee(s.a,c,d)
case 35667:return new A.ix(s.a,c,d)
case 35668:return new A.iy(s.a,c,d)
case 35669:return new A.iz(s.a,c,d)
case 35674:return new A.iB(s.a,c,d)
case 35675:return new A.eh(s.a,c,d)
case 35676:return new A.ei(s.a,c,d)
case 35678:return s.dQ(b,c,d)
case 35680:return s.dR(b,c,d)
case 35670:throw H.c(s.aY("BOOL",c))
case 35671:throw H.c(s.aY("BOOL_VEC2",c))
case 35672:throw H.c(s.aY("BOOL_VEC3",c))
case 35673:throw H.c(s.aY("BOOL_VEC4",c))
default:throw H.c(P.o("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}}
A.iu.prototype={}
A.iA.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
w:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.H()},
H:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.k)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.ec.prototype={
i:function(a){return"Uniform1i: "+H.d(this.c)}}
A.ix.prototype={
i:function(a){return"Uniform2i: "+H.d(this.c)}}
A.iy.prototype={
i:function(a){return"Uniform3i: "+H.d(this.c)}}
A.iz.prototype={
i:function(a){return"Uniform4i: "+H.d(this.c)}}
A.iv.prototype={
i:function(a){return"Uniform1iv: "+H.d(this.c)}}
A.eb.prototype={
i:function(a){return"Uniform1f: "+H.d(this.c)}}
A.iw.prototype={
i:function(a){return"Uniform2f: "+H.d(this.c)}}
A.ed.prototype={
i:function(a){return"Uniform3f: "+H.d(this.c)}}
A.ee.prototype={
i:function(a){return"Uniform4f: "+H.d(this.c)}}
A.iB.prototype={
i:function(a){return"Uniform1Mat2 "+H.d(this.c)}}
A.eh.prototype={
a2:function(a){var s=new Float32Array(H.cK(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.d(this.c)}}
A.ei.prototype={
a2:function(a){var s=new Float32Array(H.cK(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.d(this.c)}}
A.ek.prototype={
dg:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+H.d(this.c)}}
A.el.prototype={
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}
F.jf.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.bH(q.b,b).bH(q.d.bH(q.c,b),c)
q=new V.Z(p.a,p.b,p.c)
if(!J.H(a.f,q)){a.f=q
q=a.a
if(q!=null)q.R()}a.sh_(p.J())
q=1-b
s=1-c
s=new V.dM(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.H(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.R()}}}
F.h2.prototype={
aH:function(){var s=this
if(!s.gaI()){C.a.G(s.a.a.d.b,s)
s.a.a.R()}s.bk()
s.bl()
s.eK()},
eT:function(a){this.a=a
a.d.b.push(this)},
eU:function(a){this.b=a
a.d.c.push(this)},
eV:function(a){this.c=a
a.d.d.push(this)},
bk:function(){var s=this.a
if(s!=null){C.a.G(s.d.b,this)
this.a=null}},
bl:function(){var s=this.b
if(s!=null){C.a.G(s.d.c,this)
this.b=null}},
eK:function(){var s=this.c
if(s!=null){C.a.G(s.d.d,this)
this.c=null}},
gaI:function(){return this.a==null||this.b==null||this.c==null},
dJ:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.cn()
if(n!=null)q=q.A(0,n)
if(s!=null)q=q.A(0,s)
if(r!=null)q=q.A(0,r)
if(q.cQ())return p
return q.J()},
dL:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.U(0,n)
q=new V.y(o.a,o.b,o.c).J()
o=r.U(0,n)
return q.aG(new V.y(o.a,o.b,o.c).J()).J()},
bt:function(){var s,r=this
if(r.d!=null)return!0
s=r.dJ()
if(s==null){s=r.dL()
if(s==null)return!1}r.d=s
r.a.a.R()
return!0},
dI:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.cn()
if(n!=null)q=q.A(0,n)
if(s!=null)q=q.A(0,s)
if(r!=null)q=q.A(0,r)
if(q.cQ())return p
return q.J()},
dK:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.A().toString
if(Math.abs(p-0)<1e-9){j=b.U(0,e)
o=new V.y(j.a,j.b,j.c).J()
if(q.a-r.a<0)o=o.aA(0)}else{n=(j-s.b)/p
j=b.U(0,e)
j=new V.Z(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).U(0,h)
o=new V.y(j.a,j.b,j.c).J()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.aA(0)}j=l.d
if(j!=null){m=j.J()
o=m.aG(o).J().aG(m).J()}return o},
br:function(){var s,r=this
if(r.e!=null)return!0
s=r.dI()
if(s==null){s=r.dK()
if(s==null)return!1}r.e=s
r.a.a.R()
return!0},
gf8:function(a){var s=this
if(J.H(s.a,s.b))return!0
if(J.H(s.b,s.c))return!0
if(J.H(s.c,s.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
v:function(a){var s,r,q=this
if(q.gaI())return a+"disposed"
s=a+C.b.a0(J.T(q.a.e),0)+", "+C.b.a0(J.T(q.b.e),0)+", "+C.b.a0(J.T(q.c.e),0)+" {"
r=q.d
s=r!=null?s+(r.i(0)+", "):s+"-, "
r=q.e
return r!=null?s+(r.i(0)+"}"):s+"-}"},
H:function(){return this.v("")}}
F.h3.prototype={}
F.i5.prototype={
aM:function(a,b,c){var s,r=b.a
r.a.a.q()
r=r.e
s=c.a
s.a.a.q()
if(r==s.e){r=b.b
r.a.a.q()
r=r.e
s=c.b
s.a.a.q()
if(r==s.e){r=b.c
r.a.a.q()
r=r.e
s=c.c
s.a.a.q()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.q()
r=r.e
s=c.b
s.a.a.q()
if(r==s.e){r=b.b
r.a.a.q()
r=r.e
s=c.c
s.a.a.q()
if(r==s.e){r=b.c
r.a.a.q()
r=r.e
s=c.a
s.a.a.q()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.q()
r=r.e
s=c.c
s.a.a.q()
if(r==s.e){r=b.b
r.a.a.q()
r=r.e
s=c.a
s.a.a.q()
if(r==s.e){r=b.c
r.a.a.q()
r=r.e
s=c.b
s.a.a.q()
s=r==s.e
r=s}else r=!1
return r}else return!1}}}}
F.hh.prototype={
aH:function(){var s=this
if(!s.gaI()){C.a.G(s.a.a.c.b,s)
s.a.a.R()}s.bk()
s.bl()},
bk:function(){var s=this.a
if(s!=null){C.a.G(s.c.b,this)
this.a=null}},
bl:function(){var s=this.b
if(s!=null){C.a.G(s.c.c,this)
this.b=null}},
gaI:function(){return this.a==null||this.b==null},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
v:function(a){if(this.gaI())return a+"disposed"
return a+C.b.a0(J.T(this.a.e),0)+", "+C.b.a0(J.T(this.b.e),0)},
H:function(){return this.v("")}}
F.hi.prototype={}
F.it.prototype={
aM:function(a,b,c){var s,r=b.a
r.a.a.q()
r=r.e
s=c.a
s.a.a.q()
if(r==s.e){r=b.b
r.a.a.q()
r=r.e
s=c.b
s.a.a.q()
return r==s.e}else{r=b.a
r.a.a.q()
r=r.e
s=c.b
s.a.a.q()
if(r==s.e){r=b.b
r.a.a.q()
r=r.e
s=c.a
s.a.a.q()
return r==s.e}else return!1}}}
F.hN.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
v:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.b.a0(J.T(s.e),0)},
H:function(){return this.v("")}}
F.hY.prototype={
gB:function(){var s=this.e
return s==null?this.e=D.a2():s},
bJ:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.q()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.k)(e),++q){p=e[q]
f.a.p(0,p.fc())}f.a.q()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.k)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.q()
m=m.e
if(typeof m!=="number")return m.A()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
l=n[m]
f.b.a.a.p(0,l)
m=new F.hN()
if(l.a==null)H.p(P.o("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.M(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.k)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.q()
m=m.e
if(typeof m!=="number")return m.A()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.q()
n=n.e
if(typeof n!=="number")return n.A()
n+=s
m=m.c
if(n>=m.length)return H.e(m,n)
i=m[n]
n=f.c.a
n.a.p(0,j)
n.a.p(0,i)
n=new F.hh()
m=j.a
if(m==null)H.p(P.o("May not create a line with a start vertex which is not attached to a shape."))
if(m!=i.a)H.p(P.o("May not create a line with vertices attached to different shapes."))
n.a=j
j.c.b.push(n)
n.b=i
i.c.c.push(n)
n.a.a.c.b.push(n)
n=n.a.a.e
if(n!=null)n.M(null)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.k)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.q()
m=m.e
if(typeof m!=="number")return m.A()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.q()
n=n.e
if(typeof n!=="number")return n.A()
n+=s
m=m.c
if(n>=m.length)return H.e(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.q()
m=m.e
if(typeof m!=="number")return m.A()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
g=n[m]
m=f.d.a
m.a.p(0,j)
m.a.p(0,i)
m.a.p(0,g)
F.db(j,i,g)}e=f.e
if(e!=null)e.a9(0)},
as:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.as()||!1
if(!r.a.as())s=!1
q=r.e
if(q!=null)q.a9(0)
return s},
fz:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
s=n.a.c.slice(0)
for(;s.length!==0;){r=C.a.gfp(s)
C.a.bM(s,0)
if(r!=null){q=[]
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.e(s,p)
o=s[p]
if(o!=null&&a.aM(0,r,o)){q.push(o)
C.a.bM(s,p)}}if(q.length>1)b.bJ(q)}}n.a.q()
n.c.bN()
n.d.bN()
n.b.fR()
n.c.bO(new F.it())
n.d.bO(new F.i5())
m=n.e
if(m!=null)m.a9(0)},
f6:function(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=34962,a3=a1.a.c.length
a5.toString
s=a5.a
r=(s&$.aR().a)!==0?1:0
if((s&$.aQ().a)!==0)++r
if((s&$.aP().a)!==0)++r
if((s&$.aS().a)!==0)++r
if((s&$.bm().a)!==0)++r
if((s&$.cS().a)!==0)++r
if((s&$.cT().a)!==0)++r
if((s&$.bR().a)!==0)++r
if((s&$.aO().a)!==0)++r
q=a5.gbU(a5)
p=q*4
s=a3*q
o=new Array(s)
o.fixed$length=Array
n=new Array(r)
n.fixed$length=Array
for(m=0,l=0;l<r;++l){k=a5.f3(l)
j=k.gbU(k)
n[l]=new Z.fJ(k,j,m*4,p)
for(i=0;i<a3;++i){h=a1.a.c
if(i>=h.length)return H.e(h,i)
g=h[i].fw(k)
f=m+i*q
for(h=g.length,e=0;e<h;++e){d=g[e]
if(f<0||f>=s)return H.e(o,f)
o[f]=d;++f}}m+=j}s=a4.a
c=s.createBuffer()
s.bindBuffer(a2,c)
s.bufferData(a2,new Float32Array(H.cK(o)),35044)
s.bindBuffer(a2,null)
b=new Z.d0(new Z.et(a2,c),n,a5)
b.b=[]
if(a1.b.b.length!==0){a=[]
for(l=0;h=a1.b.b,l<h.length;++l){h=h[l].a
h.a.a.q()
a.push(h.e)}a0=Z.jR(s,34963,a)
b.b.push(new Z.c0(0,a.length,a0))}if(a1.c.b.length!==0){a=[]
for(l=0;h=a1.c.b,l<h.length;++l){h=h[l].a
h.a.a.q()
a.push(h.e)
h=a1.c.b
if(l>=h.length)return H.e(h,l)
h=h[l].b
h.a.a.q()
a.push(h.e)}a0=Z.jR(s,34963,a)
b.b.push(new Z.c0(1,a.length,a0))}if(a1.d.b.length!==0){a=[]
for(l=0;h=a1.d.b,l<h.length;++l){h=h[l].a
h.a.a.q()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.e(h,l)
h=h[l].b
h.a.a.q()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.e(h,l)
h=h[l].c
h.a.a.q()
a.push(h.e)}a0=Z.jR(s,34963,a)
b.b.push(new Z.c0(4,a.length,a0))}return b},
i:function(a){var s=this,r="   ",q=[]
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.v(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.v(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.v(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.v(r))}return C.a.k(q,"\n")},
R:function(){var s=this.e
if(s!=null)s.M(null)}}
F.hZ.prototype={
f1:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=[]
for(s=this.a,r=b,q=0,p=!1,o=1;o<a;++o,++q,++r){for(n=p,m=1;m<b;++m,r=i){l=c.length
if(q<0||q>=l)return H.e(c,q)
k=c[q];++q
if(q>=l)return H.e(c,q)
j=c[q]
i=r+1
if(i<0||i>=l)return H.e(c,i)
h=c[i]
if(r<0||r>=l)return H.e(c,r)
g=c[r]
l=s.a
if(n){l.p(0,k)
s.a.p(0,j)
s.a.p(0,h)
f.push(F.db(k,j,h))
s.a.p(0,k)
s.a.p(0,h)
s.a.p(0,g)
f.push(F.db(k,h,g))}else{l.p(0,j)
s.a.p(0,h)
s.a.p(0,g)
f.push(F.db(j,h,g))
s.a.p(0,j)
s.a.p(0,g)
s.a.p(0,k)
f.push(F.db(j,g,k))}n=!n}p=!p}return f},
gl:function(a){return this.b.length},
bO:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.e(q,r)
p=q[r]
for(q=p.d,o=q.b.length+q.c.length+q.d.length-1;o>=0;--o){n=p.d.h(0,o)
for(m=o-1;m>=0;--m){l=p.d.h(0,m)
if(a.aM(0,n,l)){n.aH()
break}}}}},
bN:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.gf8(q)
if(r)q.aH()}},
as:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.k)(s),++p)if(!s[p].bt())q=!1
return q},
bs:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.k)(s),++p)if(!s[p].br())q=!1
return q},
i:function(a){return this.H()},
v:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)p.push(s[q].v(a))
return C.a.k(p,"\n")},
H:function(){return this.v("")}}
F.i_.prototype={
gl:function(a){return this.b.length},
bO:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.e(q,r)
p=q[r]
for(q=p.c,o=q.b.length+q.c.length-1;o>=0;--o){n=p.c.h(0,o)
for(m=o-1;m>=0;--m){l=p.c.h(0,m)
if(a.aM(0,n,l)){n.aH()
break}}}}},
bN:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=J.H(q.a,q.b)
if(r)q.aH()}},
i:function(a){return this.H()},
v:function(a){var s,r,q=[],p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q.push(r[s].v(a+(""+s+". ")))}return C.a.k(q,"\n")},
H:function(){return this.v("")}}
F.i0.prototype={
gl:function(a){return this.b.length},
fR:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.e(r,s)
r=r[s]
q=r.a
if(q.b.b.length>1){q=q.a
C.a.G(q.b.b,r)
q=r.a.a.e
if(q!=null)q.M(null)
q=r.a
if(q!=null){C.a.G(q.b.b,r)
r.a=null}}}},
i:function(a){return this.H()},
v:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)p.push(s[q].v(a))
return C.a.k(p,"\n")},
H:function(){return this.v("")}}
F.iI.prototype={
bv:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.kR(s.cx,p,m,r,q,o,n,a,l)},
fc:function(){return this.bv(null)},
sh_:function(a){var s
if(!J.H(this.z,a)){this.z=a
s=this.a
if(s!=null)s.R()}},
fw:function(a){var s,r=this
if(a.n(0,$.aR())){s=r.f
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.n(0,$.aQ())){s=r.r
if(s==null)return[0,1,0]
else return[s.a,s.b,s.c]}else if(a.n(0,$.aP())){s=r.x
if(s==null)return[0,0,1]
else return[s.a,s.b,s.c]}else if(a.n(0,$.aS())){s=r.y
if(s==null)return[0,0]
else return[s.a,s.b]}else if(a.n(0,$.bm())){s=r.z
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.n(0,$.cS())){s=r.Q
if(s==null)return[1,1,1]
else return[s.a,s.b,s.c]}else if(a.n(0,$.cT())){s=r.Q
if(s==null)return[1,1,1,1]
else return[s.a,s.b,s.c,s.d]}else if(a.n(0,$.bR()))return[r.ch]
else if(a.n(0,$.aO())){s=r.cx
if(s==null)return[-1,-1,-1,-1]
else return[s.a,s.b,s.c,s.d]}else return[]},
bt:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.cn()
r.d.E(0,new F.iT(q))
r.r=q.a.J()
q=r.a
if(q!=null){q.R()
q=r.a.e
if(q!=null)q.a9(0)}return!0},
br:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.cn()
r.d.E(0,new F.iS(q))
r.x=q.a.J()
q=r.a
if(q!=null){q.R()
q=r.a.e
if(q!=null)q.a9(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
v:function(a){var s,r,q=this,p="-",o=[]
o.push(C.b.a0(J.T(q.e),0))
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
o.push(V.w(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.i(0))
else o.push(p)
r=C.a.k(o,", ")
return a+"{"+r+"}"},
H:function(){return this.v("")}}
F.iT.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.A(0,r)}}}
F.iS.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.A(0,r)}}}
F.iJ.prototype={
q:function(){var s,r,q,p
if(this.b){s=this.c
r=s.length
for(q=0,p=0;p<r;++p){if(p>=s.length)return H.e(s,p)
s[p].e=q;++q}this.b=!1}},
p:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.o("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.R()
return!0},
cl:function(a,b){var s=null,r=F.kR(s,s,a,s,s,b,s,s,0)
this.p(0,r)
return r},
gl:function(a){return this.c.length},
as:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)s[q].bt()
return!0},
bs:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)s[q].br()
return!0},
f7:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q){p=s[q]
if(p.z==null){o=p.r.J()
if(!J.H(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.M(null)}}}}return!0},
i:function(a){return this.H()},
v:function(a){var s,r,q,p
this.q()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.k)(r),++p)s.push(r[p].v(a))
return C.a.k(s,"\n")},
H:function(){return this.v("")}}
F.iK.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b<q){if(b<0)return H.e(r,b)
return r[b]}b-=q
r=this.c
s=r.length
if(b<s){if(b<0)return H.e(r,b)
return r[b]}b-=s
r=this.d
if(b<0||b>=r.length)return H.e(r,b)
return r[b]},
E:function(a,b){var s=this
C.a.E(s.b,b)
C.a.E(s.c,new F.iL(s,b))
C.a.E(s.d,new F.iM(s,b))},
i:function(a){return this.H()},
H:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)p.push(s[q].v(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)p.push(s[q].v(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)p.push(s[q].v(""))
return C.a.k(p,"\n")}}
F.iL.prototype={
$1:function(a){if(!J.H(a.a,this.a))this.b.$1(a)}}
F.iM.prototype={
$1:function(a){var s=this.a
if(!J.H(a.a,s)&&!J.H(a.b,s))this.b.$1(a)}}
F.iN.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.e(r,s)
return r[s]}else{if(b<0)return H.e(r,b)
return r[b]}},
i:function(a){return this.H()},
H:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)p.push(s[q].v(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)p.push(s[q].v(""))
return C.a.k(p,"\n")}}
F.iP.prototype={}
F.iO.prototype={
aM:function(a,b,c){return J.H(b.f,c.f)}}
F.iQ.prototype={}
F.hL.prototype={
bJ:function(a){var s,r,q,p,o,n,m=V.cn()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)m=new V.y(m.a+q.a,m.b+q.b,m.c+q.c)}m=m.J()
for(s=a.length,q=m==null,r=0;r<a.length;a.length===s||(0,H.k)(a),++r){p=a[r]
o=q?null:m.J()
if(!J.H(p.r,o)){p.r=o
n=p.a
if(n!=null){n=n.e
if(n!=null)n.M(null)}}}return null}}
F.iR.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.H()},
H:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)p.push(s[q].v(""))
return C.a.k(p,"\n")}}
O.dt.prototype={
gB:function(){var s=this.fr
return s==null?this.fr=D.a2():s},
L:function(a){var s=this.fr
if(s!=null)s.M(a)},
ba:function(){return this.L(null)},
cc:function(a){this.a=null
this.L(a)},
eO:function(){return this.cc(null)},
e_:function(a,b){var s=new D.b4()
s.b=!0
this.L(s)},
e1:function(a,b){var s=new D.b5()
s.b=!0
this.L(s)},
c6:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.u(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q){p=s[q]
o=p.ga8()
n=d.h(0,p.ga8())
d.m(0,o,n==null?1:n)}m=[]
d.E(0,new O.hu(f,m))
C.a.aC(m,new O.hv())
l=new H.u(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q){o=l.h(0,0)
l.m(0,0,o==null?1:o)}k=[]
l.E(0,new O.hw(f,k))
C.a.aC(k,new O.hx())
j=new H.u(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q){p=s[q]
o=p.ga8()
n=j.h(0,p.ga8())
j.m(0,o,n==null?1:n)}i=[]
j.E(0,new O.hy(f,i))
C.a.aC(i,new O.hz())
h=new H.u(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.k)(e),++q){p=e[q]
r=p.ga8()
o=h.h(0,p.ga8())
h.m(0,r,o==null?1:o)}g=[]
h.E(0,new O.hA(f,g))
C.a.aC(g,new O.hB())
e=C.c.S(f.e.a.length+3,4)
return A.mb(!1,!1,!1,f.dy.e,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
X:function(a,b){if(b!=null)if(!C.a.u(a,b)){b.a=a.length
a.push(b)}},
b5:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.X(s,s.length);s.t();){r=s.d
r.toString
q=$.iH
if(q==null)q=$.iH=new V.y(0,0,1)
r.a=q
p=$.iG
r.d=p==null?$.iG=new V.y(0,1,0):p
p=$.iF
r.e=p==null?$.iF=new V.y(-1,0,0):p
p=r.b
if(p!=null){o=p.a
if(o!=null){r.a=o.b4(q).J()
r.d=o.b4(r.d).J()
r.e=o.b4(r.e).J()}}}},
fT:function(b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.c6()
s=b6.fr.h(0,b5.aK)
if(s==null){s=A.ma(b5,b6.a)
r=s.b
if(r.length===0)H.p(P.o("May not cache a shader with no name."))
if(b6.fr.fa(0,r))H.p(P.o('Shader cache already contains a shader by the name "'+r+'".'))
b6.fr.m(0,r,s)}b5=b4.a=s
b7.e=null}q=b5.z
p=q.b_
b5=b7.e
if(!(b5 instanceof Z.d0))b5=b7.e=null
if(b5==null||!b5.d.n(0,p)){b5=q.k4
if(b5)b7.d.as()
o=q.r1
if(o){n=b7.d
m=n.e
if(m!=null)++m.d
n.d.bs()
n.a.bs()
n=n.e
if(n!=null)n.a9(0)}n=q.rx
if(n){m=b7.d
l=m.e
if(l!=null)++l.d
m.a.f7()
m=m.e
if(m!=null)m.a9(0)}k=b7.d.f6(new Z.iU(b6.a),p)
k.av($.aR()).e=b4.a.Q.c
if(b5)k.av($.aQ()).e=b4.a.cx.c
if(o)k.av($.aP()).e=b4.a.ch.c
if(q.r2)k.av($.aS()).e=b4.a.cy.c
if(n)k.av($.bm()).e=b4.a.db.c
if(q.ry)k.av($.aO()).e=b4.a.dx.c
b7.e=k}j=[]
b5=b4.a
o=b6.a
o.useProgram(b5.r)
b5.x.fn()
if(q.fr){b5=b4.a
n=b6.dx
n=n.gP(n)
b5=b5.dy
b5.toString
b5.a2(n.W(0,!0))}if(q.fx){b5=b4.a
n=b6.cx
if(n==null){n=b6.db
n=n.gP(n)
m=b6.dx
m=b6.cx=n.N(0,m.gP(m))
n=m}b5=b5.fr
b5.toString
b5.a2(n.W(0,!0))}b5=b4.a
n=b6.ch
if(n==null){n=b6.gfP()
m=b6.dx
m=b6.ch=n.N(0,m.gP(m))
n=m}b5=b5.fy
b5.toString
b5.a2(n.W(0,!0))
if(q.go){b5=b4.a
n=b6.db
n=n.gP(n)
b5=b5.fx
b5.toString
b5.a2(n.W(0,!0))}if(q.x1){b5=b4.a
n=b4.b
b5=b5.k1
b5.toString
b5.a2(C.f.W(n,!0))}if(q.x2){b5=b4.a
n=b4.c
b5=b5.k2
b5.toString
b5.a2(C.f.W(n,!0))}if(q.y1){b5=b4.a
n=b4.d
b5=b5.k3
b5.toString
b5.a2(C.f.W(n,!0))}if(q.au>0){i=b4.e.a.length
b5=b4.a.k4
b5.a.uniform1i(b5.d,i)
for(h=0;h<i;++h){b5=b4.a
n=b4.e.a
if(h>=n.length)return H.e(n,h)
n=n[h]
b5=b5.r1
if(h>=b5.length)return H.e(b5,h)
b5=b5[h]
g=new Float32Array(H.cK(n.W(0,!0)))
b5.a.uniformMatrix4fv(b5.d,!1,g)}}b5=q.a
if(b5.a){n=b4.a
m=b4.f.f
n=n.r2
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.X(j,b4.f.d)
b5=b4.a
n=b4.f.d
b5.a3(b5.rx,n)}if(q.k1){b5=q.b
if(b5.a){n=b4.a
m=b4.r.f
n=n.x1
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.X(j,b4.r.d)
b5=b4.a
n=b4.r.d
b5.a3(b5.x2,n)}b5=q.c
if(b5.a){n=b4.a
m=b4.x.f
n=n.y2
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.X(j,b4.x.d)
b5=b4.a
n=b4.x.d
b5.a3(b5.au,n)}b5=q.d
if(b5.a){n=b4.a
m=b4.y.f
n=n.b_
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.X(j,b4.y.d)
b5=b4.a
n=b4.y.d
b5.a3(b5.cv,n)}b5=q.e
n=b5.a
if(n||b5.b||!1){m=b4.a
l=b4.z.ch
m=m.cA
m.a.uniform1f(m.d,l)}if(n){n=b4.a
m=b4.z.f
n=n.cw
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.X(j,b4.z.d)
b5=b4.a
n=b4.z.d
b5.a3(b5.cz,n)}b5=q.z
if(b5.length>0){f=new H.u(t.a)
for(n=b4.dx.e,m=n.length,e=0;e<n.length;n.length===m||(0,H.k)(n),++e){d=n[e]
c=d.ga8()
b=f.h(0,c)
if(b==null)b=0
f.m(0,c,b+1)
a=J.cU(b4.a.by.h(0,c),b)
l=d.gh8()
a0=$.am
l=l.aQ(a0==null?$.am=new V.Z(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.ghd()
a0=$.am
l=l.aQ(a0==null?$.am=new V.Z(0,0,0):a0)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaF(d)
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
if(d.gcu()){l=d.gco()
a0=a.e
a0.a.uniform1f(a0.d,l)
l=d.gcp()
a0=a.f
a0.a.uniform1f(a0.d,l)
l=d.gcq()
a0=a.r
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.k)(b5),++e){m=b5[e].a
i=f.h(0,m)
if(i==null)i=0
m=b4.a.bx.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.Q
if(b5.length>0){n=b6.db
a1=n.gP(n)
a2=new H.u(t.a)
for(n=b4.dx.f,m=n.length,e=0;e<n.length;n.length===m||(0,H.k)(n),++e){d=n[e]
b=a2.h(0,0)
if(b==null)b=0
a2.m(0,0,b+1)
a=J.cU(b4.a.bA.h(0,0),b)
l=a1.b4(d.a).J()
a0=a.e
a3=l.a
a4=l.b
l=l.c
a0.a.uniform3f(a0.d,a3,a4,l)
l=d.c
a4=a.f
a4.a.uniform3f(a4.d,l.a,l.b,l.c)}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.k)(b5),++e){m=b5[e].a
i=a2.h(0,m)
if(i==null)i=0
m=b4.a.bz.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.ch
if(b5.length>0){n=b6.db
a1=n.gP(n)
a5=new H.u(t.a)
for(n=b4.dx.r,m=n.length,e=0;e<n.length;n.length===m||(0,H.k)(n),++e){d=n[e]
c=d.ga8()
b=a5.h(0,c)
if(b==null)b=0
a5.m(0,c,b+1)
a=J.cU(b4.a.bC.h(0,c),b)
a6=a1.N(0,d.gP(d))
l=d.gP(d)
a0=$.am
l=l.aQ(a0==null?$.am=new V.Z(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=$.am
l=a6.aQ(l==null?$.am=new V.Z(0,0,0):l)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaF(d)
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
d.gak()
l=a6.cO(0)
a0=l.a
a3=l.b
a4=l.c
a7=l.e
a8=l.f
a9=l.r
b0=l.y
b1=l.z
l=l.Q
b2=a.d
b2.toString
g=new Float32Array(H.cK(new V.du(a0,a3,a4,a7,a8,a9,b0,b1,l).W(0,!0)))
b2.a.uniformMatrix3fv(b2.d,!1,g)
d.gak()
l=d.gak()
if(!C.a.u(j,l)){l.a=j.length
j.push(l)}l=d.gak()
a0=l.gaL(l)
if(a0){a0=a.f
a0.toString
a3=l.gaL(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gft(l))}d.gaB()
l=d.gdh()
a0=a.x
a0.toString
a3=l.gfj(l)
a4=l.gfk(l)
a7=l.gfl()
l=l.gfi()
a0.a.uniform4f(a0.d,a3,a4,a7,l)
l=d.gaB()
if(!C.a.u(j,l)){l.a=j.length
j.push(l)}l=d.gaB()
a0=l.gaL(l)
if(a0){a0=a.r
a0.toString
a3=l.gaL(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gft(l))}if(d.gcu()){l=d.gco()
a0=a.y
a0.a.uniform1f(a0.d,l)
l=d.gcp()
a0=a.z
a0.a.uniform1f(a0.d,l)
l=d.gcq()
a0=a.Q
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.k)(b5),++e){m=b5[e].a
i=a5.h(0,m)
if(i==null)i=0
m=b4.a.bB.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.cx
if(b5.length>0){n=b6.db
a1=n.gP(n)
b3=new H.u(t.a)
for(n=b4.dx.x,m=n.length,e=0;e<n.length;n.length===m||(0,H.k)(n),++e){d=n[e]
c=d.ga8()
b=b3.h(0,c)
if(b==null)b=0
b3.m(0,c,b+1)
a=J.cU(b4.a.bE.h(0,c),b)
l=d.gfO(d)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.ghb(d).J()
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=a1.aQ(d.gfO(d))
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaF(d)
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
d.gak()
l=d.ghn()
a0=a.f
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.ghk(d)
a0=a.r
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.ghl()
a0=a.x
a0.a.uniform1f(a0.d,l)
l=d.ghm()
a0=a.y
a0.a.uniform1f(a0.d,l)
d.gak()
l=d.gak()
if(!C.a.u(j,l)){l.a=j.length
j.push(l)}l=d.gak()
a0=l.gaL(l)
if(a0){a0=a.dx
a3=l.d
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.a)}d.gaB()
l=d.gdh()
a0=a.z
a0.toString
a3=l.gfj(l)
a4=l.gfk(l)
a7=l.gfl()
l=l.gfi()
a0.a.uniform4f(a0.d,a3,a4,a7,l)
l=d.gaB()
if(!C.a.u(j,l)){l.a=j.length
j.push(l)}l=d.gaB()
a0=l.gaL(l)
if(a0){a0=a.dy
a3=l.d
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.a)}if(d.ghc()){l=d.gha()
a0=a.Q
a0.a.uniform1f(a0.d,l)
l=d.gh9()
a0=a.ch
a0.a.uniform1f(a0.d,l)}if(d.gcu()){l=d.gco()
a0=a.cx
a0.a.uniform1f(a0.d,l)
l=d.gcp()
a0=a.cy
a0.a.uniform1f(a0.d,l)
l=d.gcq()
a0=a.db
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.k)(b5),++e){m=b5[e].a
i=b3.h(0,m)
if(i==null)i=0
m=b4.a.bD.h(0,m)
m.a.uniform1i(m.d,i)}}}if(q.f.b){b4.X(j,b4.Q.d)
b5=b4.a
n=b4.Q.d
b5.a3(b5.cB,n)}if(q.dy){b5=b4.a
n=b6.Q
if(n==null){n=b6.db
n=b6.Q=n.gP(n).cO(0)}b5=b5.id
b5.toString
b5.a2(n.W(0,!0))}if(q.db){b4.X(j,b4.ch)
b5=b4.a
n=b4.ch
b5.eS(b5.cC,n)
b5=q.r
if(b5.a){n=b4.a
m=b4.cx.f
n=n.cD
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.X(j,b4.cx.d)
b5=b4.a
n=b4.cx.d
b5.a3(b5.cE,n)}b5=q.x
n=b5.a
if(n||b5.b||!1){m=b4.a
l=b4.cy.ch
m=m.cF
m.a.uniform1f(m.d,l)}if(n){n=b4.a
m=b4.cy.f
n=n.cG
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.X(j,b4.cy.d)
b5=b4.a
n=b4.cy.d
b5.a3(b5.cH,n)}}if(q.y2){b5=b4.a
n=b4.dy.b
b5=b5.cK
b5.a.uniform4f(b5.d,n.a,n.b,n.c,n.d)
n=b4.a
b5=b4.dy.d
n=n.cL
n.a.uniform1f(n.d,b5)
b5=b4.a
n=b4.dy
m=n.c
n=n.d
b5=b5.cM
b5.a.uniform1f(b5.d,m-n)}b5=q.y
n=b5.a
m=!n
if(!m||b5.b||!1){if(n){n=b4.a
l=b4.db.f
n=n.cI
n.a.uniform1f(n.d,l)}if(b5.b){b4.X(j,b4.db.d)
n=b4.a
l=b4.db.d
n.a3(n.cJ,l)}o.enable(3042)
o.blendFunc(770,771)}for(h=0;h<j.length;++h){n=j[h]
if(!n.c&&n.d){n.c=!0
o.activeTexture(33984+n.a)
o.bindTexture(3553,n.b)}}n=b7.e
n.bq(b6)
n.ax(b6)
n.h5(b6)
if(!m||b5.b||!1)o.disable(3042)
for(h=0;h<j.length;++h){b5=j[h]
if(b5.c){b5.c=!1
o.activeTexture(33984+b5.a)
o.bindTexture(3553,null)}}b5=b4.a
b5.toString
o.useProgram(null)
b5.x.fh()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.c6().aK}}
O.hu.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.fH(a,C.c.S(b+3,4)*4))}}
O.hv.prototype={
$2:function(a,b){return J.cV(a.a,b.a)}}
O.hw.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.fQ(a,C.c.S(b+3,4)*4))}}
O.hx.prototype={
$2:function(a,b){return J.cV(a.a,b.a)}}
O.hy.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.hO(a,C.c.S(b+3,4)*4))}}
O.hz.prototype={
$2:function(a,b){return J.cV(a.a,b.a)}}
O.hA.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.i6(a,C.c.S(b+3,4)*4))}}
O.hB.prototype={
$2:function(a,b){return J.cV(a.a,b.a)}}
O.ho.prototype={
af:function(){var s,r=this
r.bW()
s=r.f
$.A().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.B(r.b,s,1)
s.b=!0
r.a.L(s)}}}
O.cb.prototype={
L:function(a){return this.a.L(a)},
ba:function(){return this.L(null)},
af:function(){},
bm:function(a){var s,r,q=this
if(!q.c.n(0,a)){s=q.c
if(s.a||s.b||!1)r=!(a.a||a.b||!1)
else r=!0
q.c=a
if(r)q.af()
s=q.a
s.a=null
s.L(null)}},
sb3:function(a){var s,r=this,q=r.c
if(!q.b)r.bm(new A.P(q.a,!0,!1))
q=r.d
if(q!==a){if(q!=null)q.gB().G(0,r.gaT())
s=r.d
r.d=a
a.gB().p(0,r.gaT())
q=new D.B(r.b+".texture2D",s,r.d)
q.b=!0
r.a.L(q)}}}
O.hp.prototype={}
O.al.prototype={
ce:function(a){var s,r,q=this
if(!q.f.n(0,a)){s=q.f
q.f=a
r=new D.B(q.b+".color",s,a)
r.b=!0
q.a.L(r)}},
af:function(){this.bW()
this.ce(new V.O(1,1,1))},
saF:function(a,b){this.bm(new A.P(!0,this.c.b,!1))
this.ce(b)}}
O.hr.prototype={
sbw:function(a,b){var s
if(!this.e){this.e=!0
s=this.a
s.a=null
s.L(null)}}}
O.hs.prototype={
af:function(){var s,r=this
r.bX()
s=r.ch
$.A().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.B(r.b+".refraction",s,1)
s.b=!0
r.a.L(s)}}}
O.ht.prototype={
cf:function(a){var s=this,r=s.ch
$.A().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.B(s.b+".shininess",r,a)
r.b=!0
s.a.L(r)}},
af:function(){this.bX()
this.cf(100)}}
O.ic.prototype={}
T.id.prototype={}
T.ie.prototype={}
T.ig.prototype={
gB:function(){var s=this.y
return s==null?this.y=D.a2():s}}
T.ih.prototype={
bI:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.ig()
r.a=0
r.b=o
r.d=r.c=!1
W.N(s,"load",new T.ii(this,r,s,!1,o,!1,!1),!1)
return r},
eP:function(a,b,c){var s,r,q,p
b=V.k8(b)
s=V.k8(a.width)
r=V.k8(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.jz()
q.width=s
q.height=r
p=C.q.dc(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.nW(p.getImageData(0,0,q.width,q.height))}}}
T.ii.prototype={
$1:function(a){var s,r,q=this,p=3553,o=q.c
o.width
o.height
s=q.a
r=s.eP(o,s.b,q.d)
o.width
o.height
o=s.a
o.bindTexture(p,q.e)
o.pixelStorei(37440,q.f?1:0)
C.V.fZ(o,p,0,6408,6408,5121,r)
if(q.r)o.generateMipmap(p)
o.bindTexture(p,null)
o=q.b
if(!o.d){o.d=!0
o=o.y
if(o!=null)o.fm()}++s.e}}
X.jy.prototype={}
X.h7.prototype={
gB:function(){var s=this.x
return s==null?this.x=D.a2():s}}
X.dH.prototype={
gB:function(){var s=this.f
return s==null?this.f=D.a2():s},
an:function(a){var s=this.f
if(s!=null)s.M(a)},
dF:function(){return this.an(null)},
saN:function(a){var s,r,q=this
if(!J.H(q.b,a)){s=q.b
if(s!=null)s.gB().G(0,q.gc1())
r=q.b
q.b=a
if(a!=null)a.gB().p(0,q.gc1())
s=new D.B("mover",r,q.b)
s.b=!0
q.an(s)}}}
X.ia.prototype={}
V.aX.prototype={
aS:function(a){this.b=new P.ha(C.L)
this.c=null
this.d=[]},
F:function(a,b){var s,r,q,p,o,n,m,l=this,k=l.d
if(k.length===0)k.push([])
s=a.split("\n")
for(k=s.length,r=!0,q=0;q<k;++q){p=s[q]
if(r)r=!1
else l.d.push([])
o=document.createElement("div")
o.className="codePart"
n=l.b.dP(p,0,p.length)
m=n==null?p:n
C.J.df(o,H.ka(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.gb1(l.d).push(o)}},
cY:function(a,b){var s,r,q,p=this
p.d=[]
s=C.a.k(b,"\n")
r=p.c
if(r==null)r=p.c=p.aZ()
r.toString
q=new H.l(s)
q=new P.bj(r.bP(new H.ay(q,q.gl(q))).a())
for(;q.t();)p.b2(q.gD(q))}}
V.ju.prototype={
$1:function(a){var s=C.d.d6(this.a.gfs(),2)
if(s!=="0.00")P.k9(s+" fps")}}
V.d7.prototype={
b2:function(a){var s=this
switch(a.a){case"Class":s.F(a.b,"#551")
break
case"Comment":s.F(a.b,"#777")
break
case"Id":s.F(a.b,"#111")
break
case"Num":s.F(a.b,"#191")
break
case"Reserved":s.F(a.b,"#119")
break
case"String":s.F(a.b,"#171")
break
case"Symbol":s.F(a.b,"#616")
break
case"Type":s.F(a.b,"#B11")
break
case"Whitespace":s.F(a.b,"#111")
break}},
aZ:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()\\-+*%!&|=.,?:;",j="OpenDoubleStr",i="CloseDoubleStr",h="EscDoubleStr",g="OpenSingleStr",f="CloseSingleStr",e="EscSingleStr",d="Slash",c="Comment",b="EndComment",a="MLComment",a0="MLCStar",a1="Whitespace",a2=L.im()
a2.d=a2.j(0,q)
s=a2.j(0,q).k(0,p)
r=K.n(new H.l("_"))
s.a.push(r)
r=K.G("a","z")
s.a.push(r)
r=K.G("A","Z")
s.a.push(r)
r=a2.j(0,p).k(0,p)
s=K.n(new H.l("_"))
r.a.push(s)
s=K.G("0","9")
r.a.push(s)
s=K.G("a","z")
r.a.push(s)
s=K.G("A","Z")
r.a.push(s)
s=a2.j(0,q).k(0,o)
r=K.G("0","9")
s.a.push(r)
r=a2.j(0,o).k(0,o)
s=K.G("0","9")
r.a.push(s)
s=a2.j(0,o).k(0,n)
r=K.n(new H.l("."))
s.a.push(r)
r=a2.j(0,n).k(0,m)
s=K.G("0","9")
r.a.push(s)
s=a2.j(0,m).k(0,m)
r=K.G("0","9")
s.a.push(r)
r=a2.j(0,q).k(0,l)
s=K.n(new H.l(k))
r.a.push(s)
s=a2.j(0,l).k(0,l)
r=K.n(new H.l(k))
s.a.push(r)
r=a2.j(0,q).k(0,j)
s=K.n(new H.l('"'))
r.a.push(s)
s=a2.j(0,j).k(0,i)
r=K.n(new H.l('"'))
s.a.push(r)
r=a2.j(0,j).k(0,h)
s=K.n(new H.l("\\"))
r.a.push(s)
s=a2.j(0,h).k(0,j)
r=K.n(new H.l('"'))
s.a.push(r)
a2.j(0,j).k(0,j).a.push(new K.at())
r=a2.j(0,q).k(0,g)
s=K.n(new H.l("'"))
r.a.push(s)
s=a2.j(0,g).k(0,f)
r=K.n(new H.l("'"))
s.a.push(r)
r=a2.j(0,g).k(0,e)
s=K.n(new H.l("\\"))
r.a.push(s)
s=a2.j(0,e).k(0,g)
r=K.n(new H.l("'"))
s.a.push(r)
a2.j(0,g).k(0,g).a.push(new K.at())
r=a2.j(0,q).k(0,d)
s=K.n(new H.l("/"))
r.a.push(s)
s=a2.j(0,d).k(0,c)
r=K.n(new H.l("/"))
s.a.push(r)
r=a2.j(0,c).k(0,b)
s=K.n(new H.l("\n"))
r.a.push(s)
s=a2.j(0,c).k(0,c)
r=new K.U()
r.a=[]
s.a.push(r)
s=K.n(new H.l("\n"))
r.a.push(s)
s=a2.j(0,d).k(0,a)
r=K.n(new H.l("*"))
s.a.push(r)
r=a2.j(0,a).k(0,a0)
s=K.n(new H.l("*"))
r.a.push(s)
s=a2.j(0,a0).k(0,a)
r=new K.U()
r.a=[]
s.a.push(r)
s=K.n(new H.l("*"))
r.a.push(s)
s=a2.j(0,a0).k(0,b)
r=K.n(new H.l("/"))
s.a.push(r)
r=a2.j(0,q).k(0,a1)
s=K.n(new H.l(" \n\t"))
r.a.push(s)
s=a2.j(0,a1).k(0,a1)
r=K.n(new H.l(" \n\t"))
s.a.push(r)
r=a2.j(0,o)
r.d=r.a.I("Num")
r=a2.j(0,m)
r.d=r.a.I("Num")
r=a2.j(0,l)
r.d=r.a.I("Symbol")
r=a2.j(0,i)
r.d=r.a.I("String")
r=a2.j(0,f)
r.d=r.a.I("String")
r=a2.j(0,b)
r.d=r.a.I(c)
r=a2.j(0,a1)
r.d=r.a.I(a1)
r=a2.j(0,p)
r=r.d=r.a.I(p)
r.aj(0,"Class",["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"])
r.aj(0,"Type",["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"])
r.aj(0,"Reserved",["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"])
return a2}}
V.dg.prototype={
b2:function(a){var s=this
switch(a.a){case"Builtin":s.F(a.b,"#411")
break
case"Comment":s.F(a.b,"#777")
break
case"Id":s.F(a.b,"#111")
break
case"Num":s.F(a.b,"#191")
break
case"Preprocess":s.F(a.b,"#737")
break
case"Reserved":s.F(a.b,"#119")
break
case"Symbol":s.F(a.b,"#611")
break
case"Type":s.F(a.b,"#171")
break
case"Whitespace":s.F(a.b,"#111")
break}},
aZ:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()[]\\-+*%!&|=.,?:;",j="Slash",i="Comment",h="EndComment",g="Preprocess",f="EndPreprocess",e="Whitespace",d=L.im()
d.d=d.j(0,q)
s=d.j(0,q).k(0,p)
r=K.n(new H.l("_"))
s.a.push(r)
r=K.G("a","z")
s.a.push(r)
r=K.G("A","Z")
s.a.push(r)
r=d.j(0,p).k(0,p)
s=K.n(new H.l("_"))
r.a.push(s)
s=K.G("0","9")
r.a.push(s)
s=K.G("a","z")
r.a.push(s)
s=K.G("A","Z")
r.a.push(s)
s=d.j(0,q).k(0,o)
r=K.G("0","9")
s.a.push(r)
r=d.j(0,o).k(0,o)
s=K.G("0","9")
r.a.push(s)
s=d.j(0,o).k(0,n)
r=K.n(new H.l("."))
s.a.push(r)
r=d.j(0,n).k(0,m)
s=K.G("0","9")
r.a.push(s)
s=d.j(0,m).k(0,m)
r=K.G("0","9")
s.a.push(r)
r=d.j(0,q).k(0,l)
s=K.n(new H.l(k))
r.a.push(s)
s=d.j(0,l).k(0,l)
r=K.n(new H.l(k))
s.a.push(r)
r=d.j(0,q).k(0,j)
s=K.n(new H.l("/"))
r.a.push(s)
s=d.j(0,j).k(0,i)
r=K.n(new H.l("/"))
s.a.push(r)
d.j(0,j).k(0,l).a.push(new K.at())
r=d.j(0,i).k(0,h)
s=K.n(new H.l("\n"))
r.a.push(s)
s=d.j(0,i).k(0,i)
r=new K.U()
r.a=[]
s.a.push(r)
s=K.n(new H.l("\n"))
r.a.push(s)
s=d.j(0,q).k(0,g)
r=K.n(new H.l("#"))
s.a.push(r)
r=d.j(0,g).k(0,g)
s=new K.U()
s.a=[]
r.a.push(s)
r=K.n(new H.l("\n"))
s.a.push(r)
r=d.j(0,g).k(0,f)
s=K.n(new H.l("\n"))
r.a.push(s)
s=d.j(0,q).k(0,e)
r=K.n(new H.l(" \n\t"))
s.a.push(r)
r=d.j(0,e).k(0,e)
s=K.n(new H.l(" \n\t"))
r.a.push(s)
s=d.j(0,o)
s.d=s.a.I("Num")
s=d.j(0,m)
s.d=s.a.I("Num")
s=d.j(0,l)
s.d=s.a.I("Symbol")
s=d.j(0,h)
s.d=s.a.I(i)
s=d.j(0,f)
s.d=s.a.I(g)
s=d.j(0,e)
s.d=s.a.I(e)
s=d.j(0,p)
s=s.d=s.a.I(p)
s.aj(0,"Type",["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"])
s.aj(0,"Reserved",["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"])
s.aj(0,"Builtin",["gl_FragColor","gl_Position"])
return d}}
V.di.prototype={
b2:function(a){var s=this,r="#111"
switch(a.a){case"Attr":s.F(a.b,"#911")
s.F("=",r)
break
case"Id":s.F(a.b,r)
break
case"Other":s.F(a.b,r)
break
case"Reserved":s.F(a.b,"#119")
break
case"String":s.F(a.b,"#171")
break
case"Symbol":s.F(a.b,"#616")
break}},
aZ:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.im()
j.d=j.j(0,q)
s=j.j(0,q).k(0,p)
r=K.n(new H.l("_"))
s.a.push(r)
r=K.G("a","z")
s.a.push(r)
r=K.G("A","Z")
s.a.push(r)
r=j.j(0,p).k(0,p)
s=K.n(new H.l("_"))
r.a.push(s)
s=K.G("0","9")
r.a.push(s)
s=K.G("a","z")
r.a.push(s)
s=K.G("A","Z")
r.a.push(s)
s=j.j(0,p).k(0,o)
r=K.n(new H.l("="))
s.a.push(r)
s.c=!0
s=j.j(0,q).k(0,n)
r=K.n(new H.l("</\\-!>="))
s.a.push(r)
r=j.j(0,n).k(0,n)
s=K.n(new H.l("</\\-!>="))
r.a.push(s)
s=j.j(0,q).k(0,m)
r=K.n(new H.l('"'))
s.a.push(r)
r=j.j(0,m).k(0,l)
s=K.n(new H.l('"'))
r.a.push(s)
s=j.j(0,m).k(0,"EscStr")
r=K.n(new H.l("\\"))
s.a.push(r)
r=j.j(0,"EscStr").k(0,m)
s=K.n(new H.l('"'))
r.a.push(s)
j.j(0,m).k(0,m).a.push(new K.at())
j.j(0,q).k(0,k).a.push(new K.at())
s=j.j(0,k).k(0,k)
r=new K.U()
r.a=[]
s.a.push(r)
s=K.n(new H.l('</\\-!>=_"'))
r.a.push(s)
s=K.G("a","z")
r.a.push(s)
s=K.G("A","Z")
r.a.push(s)
s=j.j(0,n)
s.d=s.a.I("Symbol")
s=j.j(0,l)
s.d=s.a.I("String")
s=j.j(0,p)
r=s.a.I(p)
s.d=r
r.aj(0,"Reserved",["DOCTYPE","html","head","meta","link","title","body","script"])
r=j.j(0,o)
r.d=r.a.I(o)
r=j.j(0,k)
r.d=r.a.I(k)
return j}}
V.dJ.prototype={
cY:function(a,b){this.d=[]
this.F(C.a.k(b,"\n"),"#111")},
b2:function(a){},
aZ:function(){return null}}
V.i1.prototype={
dv:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.N(o,"scroll",new V.i3(m),!1)},
cm:function(a){var s,r,q,p,o,n,m,l
this.eX()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.a.fv(a)
q.toString
p=new H.l(p)
p=new P.bj(q.bP(new H.ay(p,p.gl(p))).a())
for(;p.t();){q=p.gD(p)
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
if(H.lm(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.e(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.l5(C.r,q,C.h,!1)
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
da:function(a){var s,r,q,p=new V.d7("dart")
p.aS("dart")
s=new V.dg("glsl")
s.aS("glsl")
r=new V.di("html")
r.aS("html")
q=C.a.fq([p,s,r],new V.i4(a))
if(q!=null)return q
p=new V.dJ("plain")
p.aS("plain")
return p},
ck:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=[]
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(J.k3(q).b8(q,"+")){b2[r]=C.b.aa(q,1)
a8.push(1)
s=!0}else if(C.b.b8(q,"-")){b2[r]=C.b.aa(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.da(b0)
p.cY(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m)
this.a.appendChild(n)
l=P.l5(C.r,a9,C.h,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.kf()
h.href="#"+l
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
if(r>=a8.length)return H.e(a8,r)
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
for(e=q.length,a1=0;a1<q.length;q.length===e||(0,H.k)(q),++a1)a0.appendChild(q[a1])
d.appendChild(c)
d.appendChild(b)
d.appendChild(a0)
m.appendChild(d)}else for(e=p.d,a2=e.length,a3=b1,a1=0;a1<e.length;e.length===a2||(0,H.k)(e),++a1){q=e[a1]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className=a6;++a3
c.textContent=""+a3
b=o.createElement("td")
b.className=a7
for(a4=C.a.gK(q);a4.t();)b.appendChild(a4.gD(a4))
d.appendChild(c)
d.appendChild(b)
m.appendChild(d)}},
eX:function(){var s,r,q,p="Start",o="Bold",n="Italic",m="ItalicEnd",l="Code",k="LinkHead",j="LinkTail",i="LinkEnd",h="Other"
if(this.b!=null)return
s=L.im()
s.d=s.j(0,p)
r=s.j(0,p).k(0,o)
q=K.n(new H.l("*"))
r.a.push(q)
r.c=!0
r=s.j(0,o).k(0,o)
q=new K.U()
q.a=[]
r.a.push(q)
r=K.n(new H.l("*"))
q.a.push(r)
r=s.j(0,o).k(0,"BoldEnd")
q=K.n(new H.l("*"))
r.a.push(q)
r.c=!0
r=s.j(0,p).k(0,n)
q=K.n(new H.l("_"))
r.a.push(q)
r.c=!0
r=s.j(0,n).k(0,n)
q=new K.U()
q.a=[]
r.a.push(q)
r=K.n(new H.l("_"))
q.a.push(r)
r=s.j(0,n).k(0,m)
q=K.n(new H.l("_"))
r.a.push(q)
r.c=!0
r=s.j(0,p).k(0,l)
q=K.n(new H.l("`"))
r.a.push(q)
r.c=!0
r=s.j(0,l).k(0,l)
q=new K.U()
q.a=[]
r.a.push(q)
r=K.n(new H.l("`"))
q.a.push(r)
r=s.j(0,l).k(0,"CodeEnd")
q=K.n(new H.l("`"))
r.a.push(q)
r.c=!0
r=s.j(0,p).k(0,k)
q=K.n(new H.l("["))
r.a.push(q)
r.c=!0
r=s.j(0,k).k(0,j)
q=K.n(new H.l("|"))
r.a.push(q)
q=s.j(0,k).k(0,i)
r=K.n(new H.l("]"))
q.a.push(r)
q.c=!0
q=s.j(0,k).k(0,k)
r=new K.U()
r.a=[]
q.a.push(r)
q=K.n(new H.l("|]"))
r.a.push(q)
q=s.j(0,j).k(0,i)
r=K.n(new H.l("]"))
q.a.push(r)
q.c=!0
q=s.j(0,j).k(0,j)
r=new K.U()
r.a=[]
q.a.push(r)
q=K.n(new H.l("|]"))
r.a.push(q)
s.j(0,p).k(0,h).a.push(new K.at())
q=s.j(0,h).k(0,h)
r=new K.U()
r.a=[]
q.a.push(r)
q=K.n(new H.l("*_`["))
r.a.push(q)
q=s.j(0,"BoldEnd")
q.d=q.a.I(o)
q=s.j(0,m)
q.d=q.a.I(n)
q=s.j(0,"CodeEnd")
q.d=q.a.I(l)
q=s.j(0,i)
q.d=q.a.I("Link")
q=s.j(0,h)
q.d=q.a.I(h)
this.b=s}}
V.i3.prototype={
$1:function(a){P.kL(C.i,new V.i2(this.a))}}
V.i2.prototype={
$0:function(){var s=C.d.a4(document.documentElement.scrollTop),r=this.a.style,q=H.d(-0.01*s)+"px"
r.top=q}}
V.i4.prototype={
$1:function(a){return a.a===this.a}}
G.js.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.a
s.ck("Vertex Shader","glsl",0,(q==null?null:q.c).split("\n"))
r=r.a
s.ck("Fragment Shader","glsl",0,(r==null?null:r.d).split("\n"))}};(function aliases(){var s=J.a.prototype
s.dk=s.i
s=J.b7.prototype
s.dm=s.i
s=P.f.prototype
s.dl=s.b6
s=W.x.prototype
s.b9=s.Z
s=W.cy.prototype
s.dn=s.a7
s=K.dh.prototype
s.dj=s.ah
s.bV=s.i
s=O.cb.prototype
s.bW=s.af
s=O.al.prototype
s.bX=s.af})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"n9","m6",18)
r(P,"nP","mA",5)
r(P,"nQ","mB",5)
r(P,"nR","mC",5)
q(P,"le","nK",6)
r(W,"pk","fW",19)
p(W,"o3",4,null,["$4"],["mD"],11,0)
p(W,"o4",4,null,["$4"],["mE"],11,0)
var j
o(j=E.bs.prototype,"gcW",0,0,null,["$1","$0"],["cX","fG"],0,0)
o(j,"gcU",0,0,null,["$1","$0"],["cV","fF"],0,0)
o(j,"gcS",0,0,null,["$1","$0"],["cT","fC"],0,0)
n(j,"gfA","fB",2)
n(j,"gfD","fE",2)
o(j=E.e6.prototype,"gbZ",0,0,null,["$1","$0"],["c0","c_"],0,0)
m(j,"gfV","d2",6)
l(j=X.er.prototype,"gee","ef",3)
l(j,"ge2","e3",3)
l(j,"ge8","e9",1)
l(j,"gei","ej",7)
l(j,"geg","eh",7)
l(j,"gem","en",1)
l(j,"geq","er",1)
l(j,"gec","ed",1)
l(j,"geo","ep",1)
l(j,"gea","eb",1)
l(j,"ges","eu",16)
l(j,"gev","ew",3)
l(j,"geG","eH",4)
l(j,"geC","eD",4)
l(j,"geE","eF",4)
o(D.br.prototype,"gdz",0,0,null,["$1","$0"],["ab","dA"],0,0)
o(j=D.c5.prototype,"gca",0,0,null,["$1","$0"],["cb","ek"],0,0)
l(j,"gey","ez",17)
n(j,"gdX","dY",8)
n(j,"geA","eB",8)
k(V.bH.prototype,"gl","bG",9)
k(V.y.prototype,"gl","bG",9)
o(j=M.da.prototype,"ga6",0,0,null,["$1","$0"],["ac","dB"],0,0)
n(j,"ge4","e5",2)
n(j,"ge6","e7",2)
o(j=O.dt.prototype,"gaT",0,0,null,["$1","$0"],["L","ba"],0,0)
o(j,"geN",0,0,null,["$1","$0"],["cc","eO"],0,0)
n(j,"gdZ","e_",10)
n(j,"ge0","e1",10)
o(O.cb.prototype,"gaT",0,0,null,["$1","$0"],["L","ba"],0,0)
o(X.dH.prototype,"gc1",0,0,null,["$1","$0"],["an","dF"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.I,null)
q(P.I,[H.jF,J.a,J.X,P.cr,P.f,H.ay,P.dk,H.bZ,H.ep,H.ir,P.E,H.hM,H.f7,H.bp,P.ak,H.hj,H.dq,H.he,H.a6,H.eK,P.cE,P.bL,P.bj,P.ev,P.e_,P.e0,P.cm,P.je,P.cx,P.j2,P.cq,P.z,P.d2,P.hb,P.jc,P.aq,P.aZ,P.M,P.b_,P.dG,P.ck,P.eH,P.h6,P.h8,P.aj,P.dr,P.a5,P.J,P.aD,W.fM,W.jC,W.jS,W.bK,W.C,W.ci,W.cy,W.fc,W.c_,W.a4,W.j6,W.fm,P.cG,P.f0,K.at,K.dh,K.hQ,K.hX,L.dZ,L.e7,L.e8,L.il,O.bq,O.cc,E.fI,E.bs,E.bo,E.bz,E.eE,E.hR,E.e6,Z.et,Z.iU,Z.d0,Z.c0,Z.aG,D.fK,D.bt,D.ag,X.d1,X.dn,X.hg,X.hl,X.cd,X.hH,X.io,X.er,D.br,D.ai,V.O,V.av,V.fZ,V.du,V.bw,V.aA,V.Z,V.dM,V.dP,V.bH,V.y,M.da,A.fC,A.fD,A.P,A.fH,A.fQ,A.hO,A.i6,A.hq,A.ef,A.eg,A.ej,A.em,A.iu,A.iA,F.h2,F.h3,F.hh,F.hi,F.hN,F.hY,F.hZ,F.i_,F.i0,F.iI,F.iJ,F.iK,F.iN,F.iP,F.iQ,F.iR,O.ic,O.cb,O.hr,T.ih,X.jy,X.ia,X.dH,V.aX,V.i1])
q(J.a,[J.hd,J.c4,J.b7,J.a3,J.b6,J.ah,H.cf,W.b,W.fA,W.d_,W.af,W.D,W.ez,W.a1,W.fP,W.fR,W.eA,W.bW,W.eC,W.fS,W.h,W.eI,W.b1,W.h9,W.eN,W.b3,W.hk,W.hC,W.eR,W.eS,W.ba,W.eT,W.eV,W.bc,W.eZ,W.f1,W.bd,W.f2,W.be,W.f8,W.aE,W.fe,W.ik,W.bf,W.fg,W.ip,W.iC,W.fn,W.fp,W.fr,W.ft,W.fv,P.bv,P.eP,P.by,P.eX,P.hP,P.f9,P.bF,P.fi,P.fE,P.ew,P.dQ,P.f5])
q(J.b7,[J.dI,J.bh,J.a9])
r(J.dl,J.a3)
q(J.b6,[J.c3,J.c2])
r(P.c7,P.cr)
q(P.c7,[H.bG,W.ex,W.Q,P.de])
r(H.l,H.bG)
q(P.f,[H.i,H.b9,H.bi,P.c1])
q(H.i,[H.c8,H.ax])
r(H.bX,H.b9)
q(P.dk,[H.c9,H.eu])
r(H.ca,H.c8)
q(P.E,[H.dC,H.dm,H.eo,H.dS,H.eF,P.cY,P.dD,P.W,P.eq,P.en,P.bD,P.d3,P.d6])
q(H.bp,[H.ib,H.hf,H.jn,H.jo,H.jp,P.iW,P.iV,P.iX,P.iY,P.jb,P.ja,P.jj,P.j4,P.j5,P.hm,P.fT,P.fU,W.fV,W.hE,W.hG,W.hW,W.i9,W.j0,W.hK,W.hJ,W.j7,W.j8,W.j9,W.jd,P.jk,P.h4,P.h5,P.fG,E.hS,E.hT,E.hU,E.ij,D.h0,D.h1,F.jf,F.iT,F.iS,F.iL,F.iM,O.hu,O.hv,O.hw,O.hx,O.hy,O.hz,O.hA,O.hB,T.ii,V.ju,V.i3,V.i2,V.i4,G.js])
q(H.ib,[H.i7,H.bS])
r(P.ds,P.ak)
q(P.ds,[H.u,W.iZ])
r(H.bx,H.cf)
q(H.bx,[H.ct,H.cv])
r(H.cu,H.ct)
r(H.bb,H.cu)
r(H.cw,H.cv)
r(H.ce,H.cw)
q(H.ce,[H.dw,H.dx,H.dy,H.dz,H.dA,H.cg,H.dB])
r(H.cF,H.eF)
r(P.cB,P.c1)
r(P.j3,P.je)
r(P.cp,P.cx)
r(P.d5,P.e0)
r(P.fX,P.d2)
q(P.d5,[P.ha,P.iE])
r(P.iD,P.fX)
q(P.M,[P.S,P.q])
q(P.W,[P.bB,P.dj])
q(W.b,[W.t,W.dd,W.aC,W.cz,W.aF,W.ab,W.cC,W.es,W.bI,P.cZ,P.au])
q(W.t,[W.x,W.a8,W.bJ])
q(W.x,[W.m,P.j])
q(W.m,[W.cW,W.cX,W.bn,W.aV,W.aW,W.bU,W.df,W.bu,W.dT,W.cl,W.e2,W.e3,W.bE])
r(W.fL,W.af)
r(W.bT,W.ez)
q(W.a1,[W.fN,W.fO])
r(W.eB,W.eA)
r(W.bV,W.eB)
r(W.eD,W.eC)
r(W.d9,W.eD)
r(W.b0,W.d_)
r(W.eJ,W.eI)
r(W.dc,W.eJ)
r(W.eO,W.eN)
r(W.b2,W.eO)
r(W.ao,W.h)
q(W.ao,[W.b8,W.Y,W.bg])
r(W.hD,W.eR)
r(W.hF,W.eS)
r(W.eU,W.eT)
r(W.dv,W.eU)
r(W.eW,W.eV)
r(W.ch,W.eW)
r(W.f_,W.eZ)
r(W.dK,W.f_)
r(W.hV,W.f1)
r(W.cA,W.cz)
r(W.dW,W.cA)
r(W.f3,W.f2)
r(W.dX,W.f3)
r(W.i8,W.f8)
r(W.ff,W.fe)
r(W.e4,W.ff)
r(W.cD,W.cC)
r(W.e5,W.cD)
r(W.fh,W.fg)
r(W.e9,W.fh)
r(W.aH,W.Y)
r(W.fo,W.fn)
r(W.ey,W.fo)
r(W.co,W.bW)
r(W.fq,W.fp)
r(W.eL,W.fq)
r(W.fs,W.fr)
r(W.cs,W.fs)
r(W.fu,W.ft)
r(W.f4,W.fu)
r(W.fw,W.fv)
r(W.fb,W.fw)
r(W.j_,W.iZ)
r(W.eG,P.e_)
r(W.fd,W.cy)
r(P.aa,P.f0)
r(P.eQ,P.eP)
r(P.dp,P.eQ)
r(P.eY,P.eX)
r(P.dE,P.eY)
r(P.bC,P.j)
r(P.fa,P.f9)
r(P.e1,P.fa)
r(P.fj,P.fi)
r(P.ea,P.fj)
r(P.fF,P.ew)
r(P.dF,P.au)
r(P.f6,P.f5)
r(P.dY,P.f6)
q(K.dh,[K.U,L.iq])
q(E.fI,[Z.fJ,A.dU,T.id])
q(D.ag,[D.b4,D.b5,D.B])
r(D.c5,O.bq)
r(U.hI,D.fK)
q(U.hI,[U.d4,U.dR])
r(A.hn,A.dU)
q(A.iu,[A.ec,A.ix,A.iy,A.iz,A.iv,A.eb,A.iw,A.ed,A.ee,A.iB,A.eh,A.ei,A.ek,A.el])
r(F.i5,F.h3)
r(F.it,F.hi)
r(F.iO,F.iP)
r(F.hL,F.iQ)
r(O.dt,O.ic)
q(O.cb,[O.ho,O.hp,O.al])
q(O.al,[O.hs,O.ht])
r(T.ie,T.id)
r(T.ig,T.ie)
r(X.h7,X.ia)
q(V.aX,[V.d7,V.dg,V.di,V.dJ])
s(H.bG,H.ep)
s(H.ct,P.z)
s(H.cu,H.bZ)
s(H.cv,P.z)
s(H.cw,H.bZ)
s(P.cr,P.z)
s(W.ez,W.fM)
s(W.eA,P.z)
s(W.eB,W.C)
s(W.eC,P.z)
s(W.eD,W.C)
s(W.eI,P.z)
s(W.eJ,W.C)
s(W.eN,P.z)
s(W.eO,W.C)
s(W.eR,P.ak)
s(W.eS,P.ak)
s(W.eT,P.z)
s(W.eU,W.C)
s(W.eV,P.z)
s(W.eW,W.C)
s(W.eZ,P.z)
s(W.f_,W.C)
s(W.f1,P.ak)
s(W.cz,P.z)
s(W.cA,W.C)
s(W.f2,P.z)
s(W.f3,W.C)
s(W.f8,P.ak)
s(W.fe,P.z)
s(W.ff,W.C)
s(W.cC,P.z)
s(W.cD,W.C)
s(W.fg,P.z)
s(W.fh,W.C)
s(W.fn,P.z)
s(W.fo,W.C)
s(W.fp,P.z)
s(W.fq,W.C)
s(W.fr,P.z)
s(W.fs,W.C)
s(W.ft,P.z)
s(W.fu,W.C)
s(W.fv,P.z)
s(W.fw,W.C)
s(P.eP,P.z)
s(P.eQ,W.C)
s(P.eX,P.z)
s(P.eY,W.C)
s(P.f9,P.z)
s(P.fa,W.C)
s(P.fi,P.z)
s(P.fj,W.C)
s(P.ew,P.ak)
s(P.f5,P.z)
s(P.f6,W.C)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{q:"int",S:"double",M:"num",J:"String",aq:"bool",a5:"Null",aj:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([ag*])","~(Y*)","~(q*,f<bs*>*)","~(h*)","~(bg*)","~(~())","~()","~(b8*)","~(q*,f<ai*>*)","S*()","~(q*,f<bw*>*)","aq(x,J,J,bK)","@(@)","a5(@)","a5(I?,I?)","a5(@,@)","~(aH*)","aq*(f<ai*>*)","q(@,@)","J(b)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.mW(v.typeUniverse,JSON.parse('{"a9":"b7","dI":"b7","bh":"b7","ok":"h","ou":"h","om":"au","ol":"b","oA":"b","oC":"b","oj":"j","ov":"j","on":"m","oy":"m","ow":"t","ot":"t","p_":"ab","or":"ao","oo":"a8","oD":"a8","oB":"Y","ox":"b2","oz":"bb","a3":{"i":["1"],"f":["1"]},"dl":{"i":["1"],"f":["1"]},"b6":{"S":[],"M":[]},"c3":{"S":[],"q":[],"M":[]},"c2":{"S":[],"M":[]},"ah":{"J":[]},"l":{"i":["q"],"f":["q"]},"i":{"f":["1"]},"c8":{"i":["1"],"f":["1"]},"b9":{"f":["2"]},"bX":{"i":["2"],"f":["2"]},"ca":{"i":["2"],"f":["2"]},"bi":{"f":["1"]},"bG":{"i":["1"],"f":["1"]},"dC":{"E":[]},"dm":{"E":[]},"eo":{"E":[]},"dS":{"E":[]},"ax":{"i":["1"],"f":["1"]},"bx":{"r":["1"]},"bb":{"r":["S"],"i":["S"],"f":["S"]},"ce":{"r":["q"],"i":["q"],"f":["q"]},"dw":{"r":["q"],"i":["q"],"f":["q"]},"dx":{"r":["q"],"i":["q"],"f":["q"]},"dy":{"r":["q"],"i":["q"],"f":["q"]},"dz":{"r":["q"],"i":["q"],"f":["q"]},"dA":{"r":["q"],"i":["q"],"f":["q"]},"cg":{"r":["q"],"i":["q"],"f":["q"]},"dB":{"r":["q"],"i":["q"],"f":["q"]},"eF":{"E":[]},"cF":{"E":[]},"cE":{"cm":[]},"cB":{"f":["1"]},"cp":{"i":["1"],"f":["1"]},"c1":{"f":["1"]},"c7":{"i":["1"],"f":["1"]},"cx":{"i":["1"],"f":["1"]},"S":{"M":[]},"cY":{"E":[]},"dD":{"E":[]},"W":{"E":[]},"bB":{"E":[]},"dj":{"E":[]},"eq":{"E":[]},"en":{"E":[]},"bD":{"E":[]},"d3":{"E":[]},"dG":{"E":[]},"ck":{"E":[]},"d6":{"E":[]},"q":{"M":[]},"aj":{"i":["1"],"f":["1"]},"m":{"x":[],"t":[],"b":[]},"cW":{"x":[],"t":[],"b":[]},"cX":{"x":[],"t":[],"b":[]},"bn":{"x":[],"t":[],"b":[]},"aV":{"x":[],"t":[],"b":[]},"aW":{"x":[],"t":[],"b":[]},"a8":{"t":[],"b":[]},"bU":{"x":[],"t":[],"b":[]},"bV":{"r":["aa<M>"],"i":["aa<M>"],"f":["aa<M>"]},"bW":{"aa":["M"]},"d9":{"r":["J"],"i":["J"],"f":["J"]},"ex":{"i":["x"],"f":["x"]},"x":{"t":[],"b":[]},"dc":{"r":["b0"],"i":["b0"],"f":["b0"]},"dd":{"b":[]},"df":{"x":[],"t":[],"b":[]},"b2":{"r":["t"],"i":["t"],"f":["t"]},"bu":{"x":[],"t":[],"b":[]},"b8":{"h":[]},"dv":{"r":["ba"],"i":["ba"],"f":["ba"]},"Y":{"h":[]},"Q":{"i":["t"],"f":["t"]},"t":{"b":[]},"ch":{"r":["t"],"i":["t"],"f":["t"]},"dK":{"r":["bc"],"i":["bc"],"f":["bc"]},"dT":{"x":[],"t":[],"b":[]},"aC":{"b":[]},"dW":{"r":["aC"],"b":[],"i":["aC"],"f":["aC"]},"dX":{"r":["bd"],"i":["bd"],"f":["bd"]},"cl":{"x":[],"t":[],"b":[]},"e2":{"x":[],"t":[],"b":[]},"e3":{"x":[],"t":[],"b":[]},"bE":{"x":[],"t":[],"b":[]},"aF":{"b":[]},"ab":{"b":[]},"e4":{"r":["ab"],"i":["ab"],"f":["ab"]},"e5":{"r":["aF"],"b":[],"i":["aF"],"f":["aF"]},"bg":{"h":[]},"e9":{"r":["bf"],"i":["bf"],"f":["bf"]},"ao":{"h":[]},"es":{"b":[]},"aH":{"Y":[],"h":[]},"bI":{"b":[]},"bJ":{"t":[],"b":[]},"ey":{"r":["D"],"i":["D"],"f":["D"]},"co":{"aa":["M"]},"eL":{"r":["b1?"],"i":["b1?"],"f":["b1?"]},"cs":{"r":["t"],"i":["t"],"f":["t"]},"f4":{"r":["be"],"i":["be"],"f":["be"]},"fb":{"r":["aE"],"i":["aE"],"f":["aE"]},"bK":{"a4":[]},"ci":{"a4":[]},"cy":{"a4":[]},"fd":{"a4":[]},"fc":{"a4":[]},"cG":{"b3":[]},"de":{"i":["x"],"f":["x"]},"aa":{"f0":["1"]},"dp":{"i":["bv"],"f":["bv"]},"dE":{"i":["by"],"f":["by"]},"bC":{"j":[],"x":[],"t":[],"b":[]},"e1":{"i":["J"],"f":["J"]},"j":{"x":[],"t":[],"b":[]},"ea":{"i":["bF"],"f":["bF"]},"cZ":{"b":[]},"au":{"b":[]},"dF":{"b":[]},"dY":{"i":["dr<@,@>"],"f":["dr<@,@>"]},"bq":{"f":["1*"]},"b4":{"ag":[]},"b5":{"ag":[]},"B":{"ag":[]},"br":{"ai":[]},"c5":{"f":["ai*"]},"d7":{"aX":[]},"dg":{"aX":[]},"di":{"aX":[]},"dJ":{"aX":[]}}'))
H.mV(v.typeUniverse,JSON.parse('{"a3":1,"dl":1,"X":1,"i":1,"c8":1,"ay":1,"b9":2,"bX":2,"c9":2,"ca":2,"bi":1,"eu":1,"bZ":1,"ep":1,"bG":1,"ax":1,"dq":1,"bx":1,"bj":1,"cB":1,"e_":1,"e0":2,"cq":1,"c1":1,"c7":1,"z":1,"ds":2,"ak":2,"cx":1,"cr":1,"d2":2,"d5":2,"f":1,"dk":1,"aj":1,"eG":1,"C":1,"c_":1,"bq":1,"b4":1,"b5":1,"B":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"}
var t=(function rtii(){var s=H.o_
return{v:s("bn"),t:s("aV"),U:s("i<@>"),h:s("x"),C:s("E"),D:s("h"),Z:s("h8"),I:s("b3"),R:s("bu"),b:s("a3<@>"),T:s("c4"),g:s("a9"),p:s("r<@>"),F:s("u<J*,dU*>"),V:s("u<J*,dZ*>"),i:s("u<J*,J*>"),w:s("u<J*,e8*>"),s:s("u<q*,aj<ef*>*>"),G:s("u<q*,aj<eg*>*>"),W:s("u<q*,aj<ej*>*>"),M:s("u<q*,aj<em*>*>"),J:s("u<q*,ec*>"),E:s("u<q*,aq*>"),a:s("u<q*,q*>"),P:s("a5"),K:s("I"),L:s("aa<M>"),Y:s("bC"),N:s("J"),u:s("j"),f:s("bE"),d:s("cm"),o:s("bh"),x:s("bJ"),k:s("aq"),l:s("S"),z:s("@"),S:s("q"),B:s("aW*"),A:s("0&*"),_:s("I*"),m:s("J*"),j:s("e7*"),n:s("eb*"),r:s("ed*"),y:s("ee*"),O:s("eh*"),q:s("ei*"),c:s("ek*"),Q:s("el*"),e:s("q*"),bc:s("kq<a5>?"),X:s("I?"),H:s("M")}})();(function constants(){var s=hunkHelpers.makeConstList
C.l=W.aV.prototype
C.q=W.aW.prototype
C.J=W.bU.prototype
C.M=J.a.prototype
C.a=J.a3.prototype
C.N=J.c2.prototype
C.c=J.c3.prototype
C.f=J.c4.prototype
C.d=J.b6.prototype
C.b=J.ah.prototype
C.O=J.a9.prototype
C.v=J.dI.prototype
C.V=P.dQ.prototype
C.w=W.cl.prototype
C.k=J.bh.prototype
C.x=W.aH.prototype
C.y=W.bI.prototype
C.z=new E.bo("Browser.chrome")
C.m=new E.bo("Browser.firefox")
C.n=new E.bo("Browser.edge")
C.A=new E.bo("Browser.other")
C.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.B=function() {
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
C.G=function(getTagFallback) {
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
C.C=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.D=function(hooks) {
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
C.F=function(hooks) {
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
C.E=function(hooks) {
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
C.p=function(hooks) { return hooks; }

C.H=new P.dG()
C.h=new P.iD()
C.I=new P.iE()
C.e=new P.j3()
C.i=new P.b_(0)
C.K=new P.b_(5e6)
C.L=new P.hb("element",!1,!1,!1)
C.P=s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"])
C.Q=s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.R=s([])
C.r=s([0,0,65498,45055,65535,34815,65534,18431])
C.t=s(["bind","if","ref","repeat","syntax"])
C.j=s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"])
C.S=new E.bz("OperatingSystem.windows")
C.u=new E.bz("OperatingSystem.mac")
C.T=new E.bz("OperatingSystem.linux")
C.U=new E.bz("OperatingSystem.other")
C.W=new P.bL(null,2)})();(function staticFields(){$.kW=null
$.ae=0
$.kj=null
$.ki=null
$.lf=null
$.ld=null
$.lk=null
$.jl=null
$.jq=null
$.k5=null
$.bM=null
$.cN=null
$.cO=null
$.k0=!1
$.ac=C.e
$.V=[]
$.aw=null
$.jB=null
$.kp=null
$.ko=null
$.eM=P.kt(t.N,t.Z)
$.fY=null
$.kx=null
$.kA=null
$.am=null
$.kF=null
$.kQ=null
$.iF=null
$.iG=null
$.iH=null
$.kP=null
$.kz=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"os","lq",function(){return H.o2("_$dart_dartClosure")})
s($,"oE","lr",function(){return H.an(H.is({
toString:function(){return"$receiver$"}}))})
s($,"oF","ls",function(){return H.an(H.is({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"oG","lt",function(){return H.an(H.is(null))})
s($,"oH","lu",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"oK","lx",function(){return H.an(H.is(void 0))})
s($,"oL","ly",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"oJ","lw",function(){return H.an(H.kN(null))})
s($,"oI","lv",function(){return H.an(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"oN","lA",function(){return H.an(H.kN(void 0))})
s($,"oM","lz",function(){return H.an(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"p0","kc",function(){return P.mz()})
s($,"p3","lF",function(){return P.mm("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"p1","lE",function(){return P.ku(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"oU","lD",function(){return Z.a7(0)})
s($,"oO","lB",function(){return Z.a7(511)})
s($,"oW","aR",function(){return Z.a7(1)})
s($,"oV","aQ",function(){return Z.a7(2)})
s($,"oQ","aP",function(){return Z.a7(4)})
s($,"oX","aS",function(){return Z.a7(8)})
s($,"oY","bm",function(){return Z.a7(16)})
s($,"oR","cS",function(){return Z.a7(32)})
s($,"oS","cT",function(){return Z.a7(64)})
s($,"oT","lC",function(){return Z.a7(96)})
s($,"oZ","bR",function(){return Z.a7(128)})
s($,"oP","aO",function(){return Z.a7(256)})
s($,"oq","lp",function(){return new V.fZ()})
s($,"op","A",function(){return $.lp()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cf,ArrayBufferView:H.cf,Float32Array:H.bb,Float64Array:H.bb,Int16Array:H.dw,Int32Array:H.dx,Int8Array:H.dy,Uint16Array:H.dz,Uint32Array:H.dA,Uint8ClampedArray:H.cg,CanvasPixelArray:H.cg,Uint8Array:H.dB,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLInputElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTextAreaElement:W.m,HTMLTimeElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLFrameSetElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,AccessibleNodeList:W.fA,HTMLAnchorElement:W.cW,HTMLAreaElement:W.cX,HTMLBaseElement:W.bn,Blob:W.d_,HTMLBodyElement:W.aV,HTMLCanvasElement:W.aW,CDATASection:W.a8,CharacterData:W.a8,Comment:W.a8,ProcessingInstruction:W.a8,Text:W.a8,CSSPerspective:W.fL,CSSCharsetRule:W.D,CSSConditionRule:W.D,CSSFontFaceRule:W.D,CSSGroupingRule:W.D,CSSImportRule:W.D,CSSKeyframeRule:W.D,MozCSSKeyframeRule:W.D,WebKitCSSKeyframeRule:W.D,CSSKeyframesRule:W.D,MozCSSKeyframesRule:W.D,WebKitCSSKeyframesRule:W.D,CSSMediaRule:W.D,CSSNamespaceRule:W.D,CSSPageRule:W.D,CSSRule:W.D,CSSStyleRule:W.D,CSSSupportsRule:W.D,CSSViewportRule:W.D,CSSStyleDeclaration:W.bT,MSStyleCSSProperties:W.bT,CSS2Properties:W.bT,CSSImageValue:W.a1,CSSKeywordValue:W.a1,CSSNumericValue:W.a1,CSSPositionValue:W.a1,CSSResourceValue:W.a1,CSSUnitValue:W.a1,CSSURLImageValue:W.a1,CSSStyleValue:W.a1,CSSMatrixComponent:W.af,CSSRotation:W.af,CSSScale:W.af,CSSSkew:W.af,CSSTranslation:W.af,CSSTransformComponent:W.af,CSSTransformValue:W.fN,CSSUnparsedValue:W.fO,DataTransferItemList:W.fP,HTMLDivElement:W.bU,DOMException:W.fR,ClientRectList:W.bV,DOMRectList:W.bV,DOMRectReadOnly:W.bW,DOMStringList:W.d9,DOMTokenList:W.fS,Element:W.x,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,SubmitEvent:W.h,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.b0,FileList:W.dc,FileWriter:W.dd,HTMLFormElement:W.df,Gamepad:W.b1,History:W.h9,HTMLCollection:W.b2,HTMLFormControlsCollection:W.b2,HTMLOptionsCollection:W.b2,ImageData:W.b3,HTMLImageElement:W.bu,KeyboardEvent:W.b8,Location:W.hk,MediaList:W.hC,MIDIInputMap:W.hD,MIDIOutputMap:W.hF,MimeType:W.ba,MimeTypeArray:W.dv,PointerEvent:W.Y,MouseEvent:W.Y,DragEvent:W.Y,Document:W.t,DocumentFragment:W.t,HTMLDocument:W.t,ShadowRoot:W.t,XMLDocument:W.t,DocumentType:W.t,Node:W.t,NodeList:W.ch,RadioNodeList:W.ch,Plugin:W.bc,PluginArray:W.dK,RTCStatsReport:W.hV,HTMLSelectElement:W.dT,SourceBuffer:W.aC,SourceBufferList:W.dW,SpeechGrammar:W.bd,SpeechGrammarList:W.dX,SpeechRecognitionResult:W.be,Storage:W.i8,CSSStyleSheet:W.aE,StyleSheet:W.aE,HTMLTableElement:W.cl,HTMLTableRowElement:W.e2,HTMLTableSectionElement:W.e3,HTMLTemplateElement:W.bE,TextTrack:W.aF,TextTrackCue:W.ab,VTTCue:W.ab,TextTrackCueList:W.e4,TextTrackList:W.e5,TimeRanges:W.ik,Touch:W.bf,TouchEvent:W.bg,TouchList:W.e9,TrackDefaultList:W.ip,CompositionEvent:W.ao,FocusEvent:W.ao,TextEvent:W.ao,UIEvent:W.ao,URL:W.iC,VideoTrackList:W.es,WheelEvent:W.aH,Window:W.bI,DOMWindow:W.bI,Attr:W.bJ,CSSRuleList:W.ey,ClientRect:W.co,DOMRect:W.co,GamepadList:W.eL,NamedNodeMap:W.cs,MozNamedAttrMap:W.cs,SpeechRecognitionResultList:W.f4,StyleSheetList:W.fb,SVGLength:P.bv,SVGLengthList:P.dp,SVGNumber:P.by,SVGNumberList:P.dE,SVGPointList:P.hP,SVGScriptElement:P.bC,SVGStringList:P.e1,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.bF,SVGTransformList:P.ea,AudioBuffer:P.fE,AudioParamMap:P.fF,AudioTrackList:P.cZ,AudioContext:P.au,webkitAudioContext:P.au,BaseAudioContext:P.au,OfflineAudioContext:P.dF,WebGL2RenderingContext:P.dQ,SQLResultSetRowList:P.dY})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bx.$nativeSuperclassTag="ArrayBufferView"
H.ct.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
H.bb.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.ce.$nativeSuperclassTag="ArrayBufferView"
W.cz.$nativeSuperclassTag="EventTarget"
W.cA.$nativeSuperclassTag="EventTarget"
W.cC.$nativeSuperclassTag="EventTarget"
W.cD.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(G.li,[])
else G.li([])})})()
//# sourceMappingURL=test.dart.js.map
