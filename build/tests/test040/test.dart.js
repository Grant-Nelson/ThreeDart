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
a[c]=function(){a[c]=function(){H.pZ(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.l3"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.l3"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.l3(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={kD:function kD(){},
kF:function(a){return new H.e4(a)},
k4:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
nz:function(a,b){if(t.gw.b(a))return new H.cm(a,b)
return new H.bu(a,b)},
lt:function(){return new P.eJ("No element")},
nW:function(a,b){var s=J.b1(a)
if(typeof s!=="number")return s.v()
H.eC(a,0,s-1,b)},
eC:function(a,b,c,d){if(c-b<=32)H.nV(a,b,c,d)
else H.nU(a,b,c,d)},
nV:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.aY(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.Z()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
nU:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.a2(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.a2(a6+a7,2),d=e-h,c=e+h,b=J.aY(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.Z()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.Z()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.Z()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.Z()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.Z()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.Z()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.Z()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.Z()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.Z()
if(a4>0){s=a3
a3=a2
a2=s}b.k(a5,g,a)
b.k(a5,e,a1)
b.k(a5,f,a3)
b.k(a5,d,b.h(a5,a6))
b.k(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.C(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.ak()
if(n<0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.Z()
if(n>0){--q
continue}else{m=q-1
if(n<0){b.k(a5,p,b.h(a5,r))
l=r+1
b.k(a5,r,b.h(a5,q))
b.k(a5,q,o)
q=m
r=l
break}else{b.k(a5,p,b.h(a5,q))
b.k(a5,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=b.h(a5,p)
j=a8.$2(o,a0)
if(typeof j!=="number")return j.ak()
if(j<0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.Z()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.Z()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.ak()
m=q-1
if(n<0){b.k(a5,p,b.h(a5,r))
l=r+1
b.k(a5,r,b.h(a5,q))
b.k(a5,q,o)
r=l}else{b.k(a5,p,b.h(a5,q))
b.k(a5,q,o)}q=m
break}}}}k=!1}a4=r-1
b.k(a5,a6,b.h(a5,a4))
b.k(a5,a4,a0)
a4=q+1
b.k(a5,a7,b.h(a5,a4))
b.k(a5,a4,a2)
H.eC(a5,a6,r-2,a8)
H.eC(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.C(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.C(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.ak()
m=q-1
if(n<0){b.k(a5,p,b.h(a5,r))
l=r+1
b.k(a5,r,b.h(a5,q))
b.k(a5,q,o)
r=l}else{b.k(a5,p,b.h(a5,q))
b.k(a5,q,o)}q=m
break}}H.eC(a5,r,q,a8)}else H.eC(a5,r,q,a8)},
e4:function e4(a){this.a=a},
N:function N(a){this.a=a},
m:function m(){},
bP:function bP(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bu:function bu(a,b){this.a=a
this.b=b},
cm:function cm(a,b){this.a=a
this.b=b},
e8:function e8(a,b){this.a=null
this.b=a
this.c=b},
d0:function d0(a,b){this.a=a
this.b=b},
fe:function fe(a,b){this.a=a
this.b=b},
cp:function cp(){},
f7:function f7(){},
bZ:function bZ(){},
nk:function(){throw H.c(P.z("Cannot modify unmodifiable Map"))},
mM:function(a){var s,r=H.mL(a)
if(r!=null)return r
s="minified:"+a
return s},
mC:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
f:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a9(a)
if(typeof s!="string")throw H.c(H.ad(a))
return s},
cJ:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
lJ:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.b(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.c(P.a0(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.G(q,o)|32)>r)return n}return parseInt(a,b)},
ev:function(a){return H.nE(a)},
nE:function(a){var s,r,q
if(a instanceof P.L)return H.aj(H.bC(a),null)
if(J.dt(a)===C.R||t.ak.b(a)){s=C.u(a)
if(H.lI(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.lI(q))return q}}return H.aj(H.bC(a),null)},
lI:function(a){var s=a!=="Object"&&a!==""
return s},
nF:function(){if(!!self.location)return self.location.href
return null},
lH:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
nN:function(a){var s,r,q,p=H.d([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.u)(a),++r){q=a[r]
if(!H.bB(q))throw H.c(H.ad(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aP(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.ad(q))}return H.lH(p)},
lK:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.bB(q))throw H.c(H.ad(q))
if(q<0)throw H.c(H.ad(q))
if(q>65535)return H.nN(a)}return H.lH(a)},
nO:function(a,b,c){var s,r,q,p
if(typeof c!=="number")return c.ix()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
if(q<c)p=q
else p=c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aS:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.aP(s,10))>>>0,56320|s&1023)}}throw H.c(P.a0(a,0,1114111,null,null))},
bW:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nM:function(a){var s=H.bW(a).getFullYear()+0
return s},
nK:function(a){var s=H.bW(a).getMonth()+1
return s},
nG:function(a){var s=H.bW(a).getDate()+0
return s},
nH:function(a){var s=H.bW(a).getHours()+0
return s},
nJ:function(a){var s=H.bW(a).getMinutes()+0
return s},
nL:function(a){var s=H.bW(a).getSeconds()+0
return s},
nI:function(a){var s=H.bW(a).getMilliseconds()+0
return s},
h:function(a){throw H.c(H.ad(a))},
b:function(a,b){if(a==null)J.b1(a)
throw H.c(H.ca(a,b))},
ca:function(a,b){var s,r,q="index"
if(!H.bB(b))return new P.ak(!0,b,q,null)
s=J.b1(a)
if(!(b<0)){if(typeof s!=="number")return H.h(s)
r=b>=s}else r=!0
if(r)return P.M(b,a,q,null,s)
return P.ew(b,q)},
pH:function(a,b,c){if(a>c)return P.a0(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a0(b,a,c,"end",null)
return new P.ak(!0,b,"end",null)},
ad:function(a){return new P.ak(!0,a,null,null)},
pC:function(a){if(typeof a!="number")throw H.c(H.ad(a))
return a},
c:function(a){var s,r
if(a==null)a=new P.el()
s=new Error()
s.dartException=a
r=H.q_
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
q_:function(){return J.a9(this.dartException)},
p:function(a){throw H.c(a)},
u:function(a){throw H.c(P.bJ(a))},
aU:function(a){var s,r,q,p,o,n
a=H.mG(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.d([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.iY(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
iZ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
lV:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
lD:function(a,b){return new H.ek(a,b==null?null:b.method)},
kE:function(a,b){var s=b==null,r=s?null:b.method
return new H.e2(a,r,s?null:b.receiver)},
bj:function(a){if(a==null)return new H.it(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bD(a,a.dartException)
return H.py(a)},
bD:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
py:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aP(r,16)&8191)===10)switch(q){case 438:return H.bD(a,H.kE(H.f(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bD(a,H.lD(H.f(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.mP()
o=$.mQ()
n=$.mR()
m=$.mS()
l=$.mV()
k=$.mW()
j=$.mU()
$.mT()
i=$.mY()
h=$.mX()
g=p.aq(s)
if(g!=null)return H.bD(a,H.kE(s,g))
else{g=o.aq(s)
if(g!=null){g.method="call"
return H.bD(a,H.kE(s,g))}else{g=n.aq(s)
if(g==null){g=m.aq(s)
if(g==null){g=l.aq(s)
if(g==null){g=k.aq(s)
if(g==null){g=j.aq(s)
if(g==null){g=m.aq(s)
if(g==null){g=i.aq(s)
if(g==null){g=h.aq(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bD(a,H.lD(s,g))}}return H.bD(a,new H.f6(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cN()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bD(a,new P.ak(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cN()
return a},
l6:function(a){var s
if(a==null)return new H.fU(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.fU(a)},
pJ:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
pR:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.t("Unsupported number of arguments for wrapped closure"))},
c9:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pR)
a.$identity=s
return s},
nj:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.iK().constructor.prototype):Object.create(new H.cd(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aH
if(typeof r!=="number")return r.q()
$.aH=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.ll(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.nf(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ll(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
nf:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mA,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.nd:H.nc
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
ng:function(a,b,c,d){var s=H.lk
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
ll:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.ni(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.ng(r,!p,s,b)
if(r===0){p=$.aH
if(typeof p!=="number")return p.q()
$.aH=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.f(H.kt())+";return "+n+"."+H.f(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aH
if(typeof p!=="number")return p.q()
$.aH=p+1
m+=p
return new Function("return function("+m+"){return this."+H.f(H.kt())+"."+H.f(s)+"("+m+");}")()},
nh:function(a,b,c,d){var s=H.lk,r=H.ne
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
ni:function(a,b){var s,r,q,p,o,n,m=H.kt(),l=$.li
if(l==null)l=$.li=H.lh("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nh(r,!p,s,b)
if(r===1){p="return function(){return this."+H.f(m)+"."+H.f(s)+"(this."+l+");"
o=$.aH
if(typeof o!=="number")return o.q()
$.aH=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.f(m)+"."+H.f(s)+"(this."+l+", "+n+");"
o=$.aH
if(typeof o!=="number")return o.q()
$.aH=o+1
return new Function(p+o+"}")()},
l3:function(a,b,c,d,e,f,g){return H.nj(a,b,c,d,!!e,!!f,g)},
nc:function(a,b){return H.h5(v.typeUniverse,H.bC(a.a),b)},
nd:function(a,b){return H.h5(v.typeUniverse,H.bC(a.c),b)},
lk:function(a){return a.a},
ne:function(a){return a.c},
kt:function(){var s=$.lj
return s==null?$.lj=H.lh("self"):s},
lh:function(a){var s,r,q,p=new H.cd("self","target","receiver","name"),o=J.kC(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.bF("Field name "+a+" not found."))},
pZ:function(a){throw H.c(new P.dM(a))},
pM:function(a){return v.getIsolateTag(a)},
r5:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pT:function(a){var s,r,q,p,o,n=$.mz.$1(a),m=$.k0[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.k9[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.mx.$2(a,n)
if(q!=null){m=$.k0[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.k9[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.ki(s)
$.k0[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.k9[n]=s
return s}if(p==="-"){o=H.ki(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.mE(a,s)
if(p==="*")throw H.c(P.j6(n))
if(v.leafTags[n]===true){o=H.ki(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.mE(a,s)},
mE:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.l9(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
ki:function(a){return J.l9(a,!1,null,!!a.$iy)},
pU:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.ki(s)
else return J.l9(s,c,null,null)},
pP:function(){if(!0===$.l7)return
$.l7=!0
H.pQ()},
pQ:function(){var s,r,q,p,o,n,m,l
$.k0=Object.create(null)
$.k9=Object.create(null)
H.pO()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.mF.$1(o)
if(n!=null){m=H.pU(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
pO:function(){var s,r,q,p,o,n,m=C.G()
m=H.c8(C.H,H.c8(C.I,H.c8(C.v,H.c8(C.v,H.c8(C.J,H.c8(C.K,H.c8(C.L(C.u),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.mz=new H.k5(p)
$.mx=new H.k6(o)
$.mF=new H.k7(n)},
c8:function(a,b){return a(b)||b},
nt:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.a2("Illegal RegExp pattern ("+String(n)+")",a,null))},
mI:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
pI:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mG:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
mJ:function(a,b,c){var s=H.pY(a,b,c)
return s},
pY:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mG(b),'g'),H.pI(c))},
cg:function cg(){},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iY:function iY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ek:function ek(a,b){this.a=a
this.b=b},
e2:function e2(a,b,c){this.a=a
this.b=b
this.c=c},
f6:function f6(a){this.a=a},
it:function it(a){this.a=a},
fU:function fU(a){this.a=a
this.b=null},
bH:function bH(){},
iN:function iN(){},
iK:function iK(){},
cd:function cd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eA:function eA(a){this.a=a},
A:function A(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hZ:function hZ(a){this.a=a},
i1:function i1(a,b){this.a=a
this.b=b
this.c=null},
cx:function cx(a){this.a=a},
e7:function e7(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
k5:function k5(a){this.a=a},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
e1:function e1(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c6:function(a){return a},
nC:function(a){return new Int8Array(a)},
aW:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.ca(b,a))},
oM:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.pH(a,b,c))
return b},
cF:function cF(){},
U:function U(){},
bT:function bT(){},
bv:function bv(){},
cG:function cG(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
cH:function cH(){},
bU:function bU(){},
d6:function d6(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
nS:function(a,b){var s=b.c
return s==null?b.c=H.kT(a,b.z,!0):s},
lO:function(a,b){var s=b.c
return s==null?b.c=H.dj(a,"lq",[b.z]):s},
lP:function(a){var s=a.y
if(s===6||s===7||s===8)return H.lP(a.z)
return s===11||s===12},
nR:function(a){return a.cy},
l4:function(a){return H.kU(v.typeUniverse,a,!1)},
bg:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bg(a,s,a0,a1)
if(r===s)return b
return H.mh(a,r,!0)
case 7:s=b.z
r=H.bg(a,s,a0,a1)
if(r===s)return b
return H.kT(a,r,!0)
case 8:s=b.z
r=H.bg(a,s,a0,a1)
if(r===s)return b
return H.mg(a,r,!0)
case 9:q=b.Q
p=H.ds(a,q,a0,a1)
if(p===q)return b
return H.dj(a,b.z,p)
case 10:o=b.z
n=H.bg(a,o,a0,a1)
m=b.Q
l=H.ds(a,m,a0,a1)
if(n===o&&l===m)return b
return H.kR(a,n,l)
case 11:k=b.z
j=H.bg(a,k,a0,a1)
i=b.Q
h=H.pv(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mf(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.ds(a,g,a0,a1)
o=b.z
n=H.bg(a,o,a0,a1)
if(f===g&&n===o)return b
return H.kS(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.hl("Attempted to substitute unexpected RTI kind "+c))}},
ds:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bg(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
pw:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bg(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
pv:function(a,b,c,d){var s,r=b.a,q=H.ds(a,r,c,d),p=b.b,o=H.ds(a,p,c,d),n=b.c,m=H.pw(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fw()
s.a=q
s.b=o
s.c=m
return s},
d:function(a,b){a[v.arrayRti]=b
return a},
pD:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.mA(s)
return a.$S()}return null},
mB:function(a,b){var s
if(H.lP(b))if(a instanceof H.bH){s=H.pD(a)
if(s!=null)return s}return H.bC(a)},
bC:function(a){var s
if(a instanceof P.L){s=a.$ti
return s!=null?s:H.l_(a)}if(Array.isArray(a))return H.jR(a)
return H.l_(J.dt(a))},
jR:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
ms:function(a){var s=a.$ti
return s!=null?s:H.l_(a)},
l_:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.oT(a,s)},
oT:function(a,b){var s=a instanceof H.bH?a.__proto__.__proto__.constructor:b,r=H.ot(v.typeUniverse,s.name)
b.$ccache=r
return r},
mA:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.kU(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
oS:function(a){var s,r,q=this,p=t.K
if(q===p)return H.dp(q,a,H.oX)
if(!H.aZ(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.dp(q,a,H.p_)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.bB
else if(s===t.gR||s===t.H)r=H.oW
else if(s===t.N)r=H.oY
else r=s===t.cJ?H.l0:null
if(r!=null)return H.dp(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.pS)){q.r="$i"+p
return H.dp(q,a,H.oZ)}}else if(p===7)return H.dp(q,a,H.oQ)
return H.dp(q,a,H.oO)},
dp:function(a,b,c){a.b=c
return a.b(b)},
oR:function(a){var s,r,q=this
if(!H.aZ(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.oL
else if(q===t.K)r=H.oJ
else r=H.oP
q.a=r
return q.a(a)},
po:function(a){var s,r=a.y
if(!H.aZ(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.F||r===7||a===t.P||a===t.T},
oO:function(a){var s=this
if(a==null)return H.po(s)
return H.V(v.typeUniverse,H.mB(a,s),null,s,null)},
oQ:function(a){if(a==null)return!0
return this.z.b(a)},
oZ:function(a){var s=this,r=s.r
if(a instanceof P.L)return!!a[r]
return!!J.dt(a)[r]},
r3:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mq(a,s)},
oP:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mq(a,s)},
mq:function(a,b){throw H.c(H.oj(H.m9(a,H.mB(a,b),H.aj(b,null))))},
m9:function(a,b,c){var s=P.hN(a),r=H.aj(b==null?H.bC(a):b,null)
return s+": type '"+H.f(r)+"' is not a subtype of type '"+H.f(c)+"'"},
oj:function(a){return new H.dh("TypeError: "+a)},
a8:function(a,b){return new H.dh("TypeError: "+H.m9(a,null,b))},
oX:function(a){return a!=null},
oJ:function(a){return a},
p_:function(a){return!0},
oL:function(a){return a},
l0:function(a){return!0===a||!1===a},
qQ:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.a8(a,"bool"))},
qS:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a8(a,"bool"))},
qR:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a8(a,"bool?"))},
qT:function(a){if(typeof a=="number")return a
throw H.c(H.a8(a,"double"))},
qV:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a8(a,"double"))},
qU:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a8(a,"double?"))},
bB:function(a){return typeof a=="number"&&Math.floor(a)===a},
qW:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.a8(a,"int"))},
qY:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a8(a,"int"))},
qX:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a8(a,"int?"))},
oW:function(a){return typeof a=="number"},
qZ:function(a){if(typeof a=="number")return a
throw H.c(H.a8(a,"num"))},
r0:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a8(a,"num"))},
r_:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a8(a,"num?"))},
oY:function(a){return typeof a=="string"},
r1:function(a){if(typeof a=="string")return a
throw H.c(H.a8(a,"String"))},
oK:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a8(a,"String"))},
r2:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a8(a,"String?"))},
pr:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.a.q(r,H.aj(a[q],b))
return s},
mr:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=H.d([],t.s)
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.Y,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.b(a6,i)
l=C.a.q(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.a.q(" extends ",H.aj(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.aj(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.a.q(a3,H.aj(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.a.q(a3,H.aj(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.le(H.aj(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.f(a1)},
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
return J.le(q===11||q===12?C.a.q("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.f(H.aj(a.z,b))+">"
if(l===9){p=H.px(a.z)
o=a.Q
return o.length!==0?p+("<"+H.pr(o,b)+">"):p}if(l===11)return H.mr(a,b,null)
if(l===12)return H.mr(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.b(b,n)
return b[n]}return"?"},
px:function(a){var s,r=H.mL(a)
if(r!=null)return r
s="minified:"+a
return s},
mi:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
ot:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.kU(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dk(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dj(a,b,q)
n[b]=o
return o}else return m},
or:function(a,b){return H.mp(a.tR,b)},
oq:function(a,b){return H.mp(a.eT,b)},
kU:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.me(H.mc(a,null,b,c))
r.set(b,s)
return s},
h5:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.me(H.mc(a,b,c,!0))
q.set(c,r)
return r},
os:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.kR(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bf:function(a,b){b.a=H.oR
b.b=H.oS
return b},
dk:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.an(null,null)
s.y=b
s.cy=c
r=H.bf(a,s)
a.eC.set(c,r)
return r},
mh:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.oo(a,b,r,c)
a.eC.set(r,s)
return s},
oo:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aZ(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.an(null,null)
q.y=6
q.z=b
q.cy=c
return H.bf(a,q)},
kT:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.on(a,b,r,c)
a.eC.set(r,s)
return s},
on:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aZ(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.ka(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.F)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.ka(q.z))return q
else return H.nS(a,b)}}p=new H.an(null,null)
p.y=7
p.z=b
p.cy=c
return H.bf(a,p)},
mg:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.ol(a,b,r,c)
a.eC.set(r,s)
return s},
ol:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aZ(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dj(a,"lq",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.an(null,null)
q.y=8
q.z=b
q.cy=c
return H.bf(a,q)},
op:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.an(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bf(a,s)
a.eC.set(q,r)
return r},
h4:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
ok:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dj:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.h4(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.an(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bf(a,r)
a.eC.set(p,q)
return q},
kR:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.h4(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.an(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bf(a,o)
a.eC.set(q,n)
return n},
mf:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.h4(m)
if(j>0){s=l>0?",":""
r=H.h4(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.ok(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.an(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bf(a,o)
a.eC.set(q,r)
return r},
kS:function(a,b,c,d){var s,r=b.cy+("<"+H.h4(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.om(a,b,c,r,d)
a.eC.set(r,s)
return s},
om:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bg(a,b,r,0)
m=H.ds(a,c,r,0)
return H.kS(a,n,m,c!==m)}}l=new H.an(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bf(a,l)},
mc:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
me:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.od(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.md(a,r,g,f,!1)
else if(q===46)r=H.md(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.be(a.u,a.e,f.pop()))
break
case 94:f.push(H.op(a.u,f.pop()))
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
H.kQ(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.dj(p,n,o))
else{m=H.be(p,a.e,n)
switch(m.y){case 11:f.push(H.kS(p,m,o,a.n))
break
default:f.push(H.kR(p,m,o))
break}}break
case 38:H.oe(a,f)
break
case 42:l=a.u
f.push(H.mh(l,H.be(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.kT(l,H.be(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.mg(l,H.be(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.fw()
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
H.kQ(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.mf(p,H.be(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.kQ(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.og(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.be(a.u,a.e,h)},
od:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
md:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.mi(s,o.z)[p]
if(n==null)H.p('No "'+p+'" in "'+H.nR(o)+'"')
d.push(H.h5(s,o,n))}else d.push(p)
return m},
oe:function(a,b){var s=b.pop()
if(0===s){b.push(H.dk(a.u,1,"0&"))
return}if(1===s){b.push(H.dk(a.u,4,"1&"))
return}throw H.c(P.hl("Unexpected extended operation "+H.f(s)))},
be:function(a,b,c){if(typeof c=="string")return H.dj(a,c,a.sEA)
else if(typeof c=="number")return H.of(a,b,c)
else return c},
kQ:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.be(a,b,c[s])},
og:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.be(a,b,c[s])},
of:function(a,b,c){var s,r,q=b.y
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
V:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aZ(d))if(!(d===t._))s=d===t.K
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
return H.V(a,H.lO(a,b),c,d,e)}if(r===7){s=H.V(a,b.z,c,d,e)
return s}if(p===8){if(H.V(a,b,c,d.z,e))return!0
return H.V(a,b,c,H.lO(a,d),e)}if(p===7){s=H.V(a,b,c,d.z,e)
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
if(!H.V(a,k,c,j,e)||!H.V(a,j,e,k,c))return!1}return H.mt(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.mt(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.oV(a,b,c,d,e)}return!1},
mt:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
oV:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.V(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mi(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.V(a,H.h5(a,b,l[p]),c,r[p],e))return!1
return!0},
ka:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aZ(a))if(r!==7)if(!(r===6&&H.ka(a.z)))s=r===8&&H.ka(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
pS:function(a){var s
if(!H.aZ(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
aZ:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.Y},
mp:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
an:function an(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fw:function fw(){this.c=this.b=this.a=null},
fr:function fr(){},
dh:function dh(a){this.a=a},
mL:function(a){return v.mangledGlobalNames[a]},
pV:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
l9:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hh:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.l7==null){H.pP()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.c(P.j6("Return interceptor for "+H.f(s(a,o))))}q=a.constructor
p=q==null?null:q[J.lv()]
if(p!=null)return p
p=H.pT(a)
if(p!=null)return p
if(typeof a=="function")return C.T
s=Object.getPrototypeOf(a)
if(s==null)return C.z
if(s===Object.prototype)return C.z
if(typeof q=="function"){Object.defineProperty(q,J.lv(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
lv:function(){var s=$.ma
return s==null?$.ma=v.getIsolateTag("_$dart_js"):s},
nq:function(a,b){if(!H.bB(a))throw H.c(P.lf(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a0(a,0,4294967295,"length",null))
return J.nr(new Array(a),b)},
kB:function(a,b){if(!H.bB(a)||a<0)throw H.c(P.bF("Length must be a non-negative integer: "+H.f(a)))
return H.d(new Array(a),b.X("v<0>"))},
nr:function(a,b){return J.kC(H.d(a,b.X("v<0>")))},
kC:function(a){a.fixed$length=Array
return a},
ns:function(a,b){return J.dx(a,b)},
dt:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cu.prototype
return J.ct.prototype}if(typeof a=="string")return J.aL.prototype
if(a==null)return J.cv.prototype
if(typeof a=="boolean")return J.e0.prototype
if(a.constructor==Array)return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.av.prototype
return a}if(a instanceof P.L)return a
return J.hh(a)},
pK:function(a){if(typeof a=="number")return J.bs.prototype
if(typeof a=="string")return J.aL.prototype
if(a==null)return a
if(a.constructor==Array)return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.av.prototype
return a}if(a instanceof P.L)return a
return J.hh(a)},
aY:function(a){if(typeof a=="string")return J.aL.prototype
if(a==null)return a
if(a.constructor==Array)return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.av.prototype
return a}if(a instanceof P.L)return a
return J.hh(a)},
k1:function(a){if(a==null)return a
if(a.constructor==Array)return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.av.prototype
return a}if(a instanceof P.L)return a
return J.hh(a)},
pL:function(a){if(typeof a=="number")return J.bs.prototype
if(typeof a=="string")return J.aL.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bz.prototype
return a},
l5:function(a){if(typeof a=="string")return J.aL.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bz.prototype
return a},
bi:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.av.prototype
return a}if(a instanceof P.L)return a
return J.hh(a)},
le:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pK(a).q(a,b)},
C:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dt(a).p(a,b)},
cc:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mC(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aY(a).h(a,b)},
kn:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.mC(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.k1(a).k(a,b,c)},
n4:function(a,b){return J.l5(a).G(a,b)},
n5:function(a,b,c){return J.bi(a).h3(a,b,c)},
n6:function(a,b,c,d){return J.bi(a).hn(a,b,c,d)},
n7:function(a,b){return J.l5(a).W(a,b)},
dx:function(a,b){return J.pL(a).aT(a,b)},
ko:function(a,b){return J.aY(a).S(a,b)},
kp:function(a,b){return J.k1(a).J(a,b)},
n8:function(a,b,c,d){return J.bi(a).hJ(a,b,c,d)},
kq:function(a,b){return J.k1(a).I(a,b)},
kr:function(a){return J.bi(a).gdh(a)},
n9:function(a){return J.bi(a).gdl(a)},
ae:function(a){return J.dt(a).gP(a)},
bl:function(a){return J.k1(a).gR(a)},
b1:function(a){return J.aY(a).gl(a)},
na:function(a,b){return J.bi(a).ii(a,b)},
a9:function(a){return J.dt(a).i(a)},
a:function a(){},
e0:function e0(){},
cv:function cv(){},
b5:function b5(){},
eq:function eq(){},
bz:function bz(){},
av:function av(){},
v:function v(a){this.$ti=a},
hY:function hY(a){this.$ti=a},
a1:function a1(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bs:function bs(){},
cu:function cu(){},
ct:function ct(){},
aL:function aL(){}},P={
o5:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.pz()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.c9(new P.jv(q),1)).observe(s,{childList:true})
return new P.ju(q,s,r)}else if(self.setImmediate!=null)return P.pA()
return P.pB()},
o6:function(a){self.scheduleImmediate(H.c9(new P.jw(a),0))},
o7:function(a){self.setImmediate(H.c9(new P.jx(a),0))},
o8:function(a){P.kK(C.p,a)},
kK:function(a,b){var s=C.c.a2(a.a,1000)
return P.oh(s<0?0:s,b)},
lU:function(a,b){var s=C.c.a2(a.a,1000)
return P.oi(s<0?0:s,b)},
oh:function(a,b){var s=new P.dg()
s.ez(a,b)
return s},
oi:function(a,b){var s=new P.dg()
s.eA(a,b)
return s},
qO:function(a){return new P.c3(a,1)},
o9:function(){return C.a1},
oa:function(a){return new P.c3(a,3)},
p1:function(a){return new P.dd(a)},
pn:function(){var s,r
for(s=$.c7;s!=null;s=$.c7){$.dr=null
r=s.b
$.c7=r
if(r==null)$.dq=null
s.a.$0()}},
pu:function(){$.l1=!0
try{P.pn()}finally{$.dr=null
$.l1=!1
if($.c7!=null)$.ld().$1(P.my())}},
ps:function(a){var s=new P.ff(a),r=$.dq
if(r==null){$.c7=$.dq=s
if(!$.l1)$.ld().$1(P.my())}else $.dq=r.b=s},
pt:function(a){var s,r,q,p=$.c7
if(p==null){P.ps(a)
$.dr=$.dq
return}s=new P.ff(a)
r=$.dr
if(r==null){s.b=p
$.c7=$.dr=s}else{q=r.b
s.b=q
$.dr=r.b=s
if(q==null)$.dq=s}},
lT:function(a,b){var s=$.aF
if(s===C.f)return P.kK(a,b)
return P.kK(a,s.hv(b))},
o0:function(a,b){var s=$.aF
if(s===C.f)return P.lU(a,b)
return P.lU(a,s.de(b,t.aF))},
mu:function(a,b,c,d,e){P.pt(new P.jZ(d,e))},
pp:function(a,b,c,d){var s,r=$.aF
if(r===c)return d.$0()
$.aF=c
s=r
try{r=d.$0()
return r}finally{$.aF=s}},
pq:function(a,b,c,d,e){var s,r=$.aF
if(r===c)return d.$1(e)
$.aF=c
s=r
try{r=d.$1(e)
return r}finally{$.aF=s}},
jv:function jv(a){this.a=a},
ju:function ju(a,b,c){this.a=a
this.b=b
this.c=c},
jw:function jw(a){this.a=a},
jx:function jx(a){this.a=a},
dg:function dg(){this.c=0},
jK:function jK(a,b){this.a=a
this.b=b},
jJ:function jJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c3:function c3(a,b){this.a=a
this.b=b},
c4:function c4(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dd:function dd(a){this.a=a},
ff:function ff(a){this.a=a
this.b=null},
cO:function cO(){},
eL:function eL(){},
cP:function cP(){},
jP:function jP(){},
jZ:function jZ(a,b){this.a=a
this.b=b},
jC:function jC(){},
jD:function jD(a,b){this.a=a
this.b=b},
jE:function jE(a,b,c){this.a=a
this.b=b
this.c=c},
nv:function(a,b){return new H.A(a.X("@<0>").bH(b).X("A<1,2>"))},
nw:function(a,b,c){return H.pJ(a,new H.A(b.X("@<0>").bH(c).X("A<1,2>")))},
lw:function(a,b){return new H.A(a.X("@<0>").bH(b).X("A<1,2>"))},
lx:function(a){return new P.d2(a.X("d2<0>"))},
kP:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oc:function(a,b){var s=new P.d3(a,b)
s.c=a.e
return s},
np:function(a,b,c){var s,r
if(P.l2(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.d([],t.s)
$.ac.push(a)
try{P.p0(a,s)}finally{if(0>=$.ac.length)return H.b($.ac,-1)
$.ac.pop()}r=P.lQ(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
kA:function(a,b,c){var s,r
if(P.l2(a))return b+"..."+c
s=new P.Q(b)
$.ac.push(a)
try{r=s
r.a=P.lQ(r.a,a,", ")}finally{if(0>=$.ac.length)return H.b($.ac,-1)
$.ac.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
l2:function(a){var s,r
for(s=$.ac.length,r=0;r<s;++r)if(a===$.ac[r])return!0
return!1},
p0:function(a,b){var s,r,q,p,o,n,m,l=a.gR(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.w())return
s=H.f(l.gE(l))
b.push(s)
k+=s.length+2;++j}if(!l.w()){if(j<=5)return
if(0>=b.length)return H.b(b,-1)
r=b.pop()
if(0>=b.length)return H.b(b,-1)
q=b.pop()}else{p=l.gE(l);++j
if(!l.w()){if(j<=4){b.push(H.f(p))
return}r=H.f(p)
if(0>=b.length)return H.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gE(l);++j
for(;l.w();p=o,o=n){n=l.gE(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.b(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.f(p)
r=H.f(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
nx:function(a,b,c){var s=P.nv(b,c)
a.I(0,new P.i2(s,b,c))
return s},
kH:function(a){var s,r={}
if(P.l2(a))return"{...}"
s=new P.Q("")
try{$.ac.push(a)
s.a+="{"
r.a=!0
J.kq(a,new P.i6(r,s))
s.a+="}"}finally{if(0>=$.ac.length)return H.b($.ac,-1)
$.ac.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
d2:function d2(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jB:function jB(a){this.a=a
this.c=this.b=null},
d3:function d3(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cs:function cs(){},
i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(){},
j:function j(){},
cA:function cA(){},
i6:function i6(a,b){this.a=a
this.b=b},
aw:function aw(){},
h6:function h6(){},
cB:function cB(){},
c_:function c_(a,b){this.a=a
this.$ti=b},
da:function da(){},
d4:function d4(){},
dl:function dl(){},
o3:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.o4(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
o4:function(a,b,c,d){var s=a?$.n_():$.mZ()
if(s==null)return null
if(0===c&&d===b.length)return P.lZ(s,b)
return P.lZ(s,b.subarray(c,P.b9(c,d,b.length)))},
lZ:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.bj(r)}return null},
lg:function(a,b,c,d,e,f){if(C.c.ay(f,4)!==0)throw H.c(P.a2("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a2("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a2("Invalid base64 padding, more than two '=' characters",a,b))},
oI:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
oH:function(a,b,c){var s,r,q,p,o,n
if(typeof c!=="number")return c.v()
s=c-b
r=new Uint8Array(s)
for(q=r.length,p=J.aY(a),o=0;o<s;++o){n=p.h(a,b+o)
if(typeof n!=="number")return n.aj()
if((n&4294967040)>>>0!==0)n=255
if(o>=q)return H.b(r,o)
r[o]=n}return r},
jf:function jf(){},
jg:function jg(){},
hq:function hq(){},
hr:function hr(){},
dJ:function dJ(){},
dL:function dL(){},
hK:function hK(){},
jd:function jd(){},
jh:function jh(){},
jO:function jO(a){this.b=0
this.c=a},
je:function je(a){this.a=a},
jN:function jN(a){this.a=a
this.b=16
this.c=0},
k8:function(a,b){var s=H.lJ(a,b)
if(s!=null)return s
throw H.c(P.a2(a,null,null))},
nn:function(a){if(a instanceof H.bH)return a.i(0)
return"Instance of '"+H.f(H.ev(a))+"'"},
i3:function(a,b,c,d){var s,r=c?J.kB(a,d):J.nq(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
kG:function(a,b,c){var s,r=H.d([],c.X("v<0>"))
for(s=J.bl(a);s.w();)r.push(s.gE(s))
if(b)return r
return J.kC(r)},
ny:function(a,b,c){var s,r,q=J.kB(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.b(q,s)
q[s]=r}return q},
eN:function(a,b,c){var s,r,q
if(Array.isArray(a)){s=a
r=s.length
c=P.b9(b,c,r)
if(b<=0){if(typeof c!=="number")return c.ak()
q=c<r}else q=!0
return H.lK(q?s.slice(b,c):s)}if(t.bm.b(a))return H.nO(a,b,P.b9(b,c,a.length))
return P.nX(a,b,c)},
nX:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.a0(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.a0(c,b,a.length,o,o))
r=J.bl(a)
for(q=0;q<b;++q)if(!r.w())throw H.c(P.a0(b,0,q,o,o))
p=[]
if(s)for(;r.w();)p.push(r.gE(r))
else for(q=b;q<c;++q){if(!r.w())throw H.c(P.a0(c,b,q,o,o))
p.push(r.gE(r))}return H.lK(p)},
nP:function(a){return new H.e1(a,H.nt(a,!1,!0,!1,!1,!1))},
lQ:function(a,b,c){var s=J.bl(b)
if(!s.w())return a
if(c.length===0){do a+=H.f(s.gE(s))
while(s.w())}else{a+=H.f(s.gE(s))
for(;s.w();)a=a+c+H.f(s.gE(s))}return a},
kM:function(){var s=H.nF()
if(s!=null)return P.o2(s)
throw H.c(P.z("'Uri.base' is not supported"))},
kZ:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.n2().b
if(typeof b!="string")H.p(H.ad(b))
s=s.test(b)}else s=!1
if(s)return b
r=c.ghI().c9(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.b(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.aS(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
nl:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
nm:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dN:function(a){if(a>=10)return""+a
return"0"+a},
lo:function(a){return new P.bo(1000*a)},
hN:function(a){if(typeof a=="number"||H.l0(a)||null==a)return J.a9(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nn(a)},
hl:function(a){return new P.dA(a)},
bF:function(a){return new P.ak(!1,null,null,a)},
lf:function(a,b,c){return new P.ak(!0,a,b,c)},
nb:function(a,b){if(a==null)throw H.c(new P.ak(!1,null,b,"Must not be null"))
return a},
lL:function(a){var s=null
return new P.bX(s,s,!1,s,s,a)},
ew:function(a,b){return new P.bX(null,null,!0,a,b,"Value not in range")},
a0:function(a,b,c,d,e){return new P.bX(b,c,!0,a,d,"Invalid value")},
b9:function(a,b,c){var s
if(0<=a){if(typeof c!=="number")return H.h(c)
s=a>c}else s=!0
if(s)throw H.c(P.a0(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.h(c)
s=b>c}else s=!0
if(s)throw H.c(P.a0(b,a,c,"end",null))
return b}return c},
lM:function(a,b){if(a<0)throw H.c(P.a0(a,0,null,b,null))
return a},
M:function(a,b,c,d,e){var s=e==null?J.b1(b):e
return new P.dZ(s,!0,a,c,"Index out of range")},
z:function(a){return new P.f8(a)},
j6:function(a){return new P.f5(a)},
bJ:function(a){return new P.dK(a)},
t:function(a){return new P.ft(a)},
a2:function(a,b,c){return new P.hT(a,b,c)},
la:function(a){H.pV(a)},
o2:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.G(a5,4)^58)*3|C.a.G(a5,0)^100|C.a.G(a5,1)^97|C.a.G(a5,2)^116|C.a.G(a5,3)^97)>>>0
if(s===0)return P.lW(a4<a4?C.a.t(a5,0,a4):a5,5,a3).gec()
else if(s===32)return P.lW(C.a.t(a5,5,a4),0,a3).gec()}r=P.i3(8,0,!1,t.S)
q=r.length
if(0>=q)return H.b(r,0)
r[0]=0
if(1>=q)return H.b(r,1)
r[1]=-1
if(2>=q)return H.b(r,2)
r[2]=-1
if(7>=q)return H.b(r,7)
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.mv(a5,0,a4,0,r)>=14){if(7>=r.length)return H.b(r,7)
r[7]=a4}if(1>=r.length)return H.b(r,1)
p=r[1]
if(p>=0)if(P.mv(a5,0,p,20,r)===20){if(7>=r.length)return H.b(r,7)
r[7]=p}q=r.length
if(2>=q)return H.b(r,2)
o=r[2]+1
if(3>=q)return H.b(r,3)
n=r[3]
if(4>=q)return H.b(r,4)
m=r[4]
if(5>=q)return H.b(r,5)
l=r[5]
if(6>=q)return H.b(r,6)
k=r[6]
if(k<l)l=k
if(m<o)m=l
else if(m<=p)m=p+1
if(n<o)n=m
if(7>=q)return H.b(r,7)
j=r[7]<0
if(j)if(o>p+3){i=a3
j=!1}else{q=n>0
if(q&&n+1===m){i=a3
j=!1}else{if(!(l<a4&&l===m+2&&C.a.ac(a5,"..",m)))h=l>m+2&&C.a.ac(a5,"/..",l-3)
else h=!0
if(h){i=a3
j=!1}else{if(p===4)if(C.a.ac(a5,"file",0)){if(o<=0){if(!C.a.ac(a5,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+C.a.t(a5,m,a4)
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
l=f}i="file"}else if(C.a.ac(a5,"http",0)){if(q&&n+3===m&&C.a.ac(a5,"80",n+1)){k-=3
e=m-3
l-=3
a5=C.a.aW(a5,n,m,"")
a4-=3
m=e}i="http"}else i=a3
else if(p===5&&C.a.ac(a5,"https",0)){if(q&&n+4===m&&C.a.ac(a5,"443",n+1)){k-=4
e=m-4
l-=4
a5=C.a.aW(a5,n,m,"")
a4-=3
m=e}i="https"}else i=a3
j=!0}}}else i=a3
if(j){if(a4<a5.length){a5=C.a.t(a5,0,a4)
p-=0
o-=0
n-=0
m-=0
l-=0
k-=0}return new P.fO(a5,p,o,n,m,l,k,i)}if(i==null)if(p>0)i=P.oB(a5,0,p)
else{if(p===0)P.c5(a5,0,"Invalid empty scheme")
i=""}if(o>0){d=p+3
c=d<o?P.oC(a5,d,o-1):""
b=P.oy(a5,o,n,!1)
q=n+1
if(q<m){a=H.lJ(C.a.t(a5,q,m),a3)
a0=P.oA(a==null?H.p(P.a2("Invalid port",a5,q)):a,i)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.oz(a5,m,l,a3,i,b!=null)
a2=l<k?P.kW(a5,l+1,k,a3):a3
return new P.bA(i,c,b,a0,a1,a2,k<a4?P.ox(a5,k+1,a4):a3)},
lY:function(a){var s=t.N
return C.b.hN(H.d(a.split("&"),t.s),P.lw(s,s),new P.jb(C.e))},
o1:function(a,b,c){var s,r,q,p,o,n,m,l="IPv4 address should contain exactly 4 parts",k="each part must be in the range 0..255",j=new P.j8(a),i=new Uint8Array(4)
for(s=i.length,r=b,q=r,p=0;r<c;++r){o=C.a.W(a,r)
if(o!==46){if((o^48)>9)j.$2("invalid character",r)}else{if(p===3)j.$2(l,r)
n=P.k8(C.a.t(a,q,r),null)
if(typeof n!=="number")return n.Z()
if(n>255)j.$2(k,q)
m=p+1
if(p>=s)return H.b(i,p)
i[p]=n
q=r+1
p=m}}if(p!==3)j.$2(l,c)
n=P.k8(C.a.t(a,q,c),null)
if(typeof n!=="number")return n.Z()
if(n>255)j.$2(k,q)
if(p>=s)return H.b(i,p)
i[p]=n
return i},
lX:function(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new P.j9(a),b=new P.ja(c,a)
if(a.length<2)c.$1("address is too short")
s=H.d([],t.t)
for(r=a0,q=r,p=!1,o=!1;r<a1;++r){n=C.a.W(a,r)
if(n===58){if(r===a0){++r
if(C.a.W(a,r)!==58)c.$2("invalid start colon.",r)
q=r}if(r===q){if(p)c.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(b.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)c.$1("too few parts")
m=q===a1
l=C.b.gaI(s)
if(m&&l!==-1)c.$2("expected a part after last `:`",a1)
if(!m)if(!o)s.push(b.$2(q,a1))
else{k=P.o1(a,q,a1)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)c.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)c.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.b(j,g)
j[g]=0
d=g+1
if(d>=i)return H.b(j,d)
j[d]=0
g+=2}else{d=C.c.aP(f,8)
if(g<0||g>=i)return H.b(j,g)
j[g]=d
d=g+1
if(d>=i)return H.b(j,d)
j[d]=f&255
g+=2}}return j},
mj:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
c5:function(a,b,c){throw H.c(P.a2(c,a,b))},
oA:function(a,b){if(a!=null&&a===P.mj(b))return null
return a},
oy:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.W(a,b)===91){s=c-1
if(C.a.W(a,s)!==93)P.c5(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.ov(a,r,s)
if(q<s){p=q+1
o=P.mo(a,C.a.ac(a,"25",p)?q+3:p,s,"%25")}else o=""
P.lX(a,r,q)
return C.a.t(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.W(a,n)===58){q=C.a.bs(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mo(a,C.a.ac(a,"25",p)?q+3:p,c,"%25")}else o=""
P.lX(a,b,q)
return"["+C.a.t(a,b,q)+o+"]"}return P.oE(a,b,c)},
ov:function(a,b,c){var s=C.a.bs(a,"%",b)
return s>=b&&s<c?s:c},
mo:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.Q(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.W(a,s)
if(p===37){o=P.kX(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.Q("")
m=i.a+=C.a.t(a,r,s)
if(n)o=C.a.t(a,s,s+3)
else if(o==="%")P.c5(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.b(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.Q("")
if(r<s){i.a+=C.a.t(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.W(a,s+1)
if((l&64512)===56320){p=65536|(p&1023)<<10|l&1023
k=2}else k=1}else k=1
j=C.a.t(a,r,s)
if(i==null){i=new P.Q("")
n=i}else n=i
n.a+=j
n.a+=P.kV(p)
s+=k
r=s}}}if(i==null)return C.a.t(a,b,c)
if(r<c)i.a+=C.a.t(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
oE:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.W(a,s)
if(o===37){n=P.kX(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.Q("")
l=C.a.t(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.t(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.b(C.w,m)
m=(C.w[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.Q("")
if(r<s){q.a+=C.a.t(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.b(C.k,m)
m=(C.k[m]&1<<(o&15))!==0}else m=!1
if(m)P.c5(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.W(a,s+1)
if((i&64512)===56320){o=65536|(o&1023)<<10|i&1023
j=2}else j=1}else j=1
l=C.a.t(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.Q("")
m=q}else m=q
m.a+=l
m.a+=P.kV(o)
s+=j
r=s}}}}if(q==null)return C.a.t(a,b,c)
if(r<c){l=C.a.t(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
oB:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.ml(C.a.G(a,b)))P.c5(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.G(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.b(C.m,p)
p=(C.m[p]&1<<(q&15))!==0}else p=!1
if(!p)P.c5(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.t(a,b,c)
return P.ou(r?a.toLowerCase():a)},
ou:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oC:function(a,b,c){return P.dm(a,b,c,C.V,!1)},
oz:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dm(a,b,c,C.x,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.al(s,"/"))s="/"+s
return P.oD(s,e,f)},
oD:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.al(a,"/"))return P.oF(a,!s||c)
return P.oG(a)},
kW:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.bF("Both query and queryParameters specified"))
return P.dm(a,b,c,C.l,!0)}if(d==null)return null
s=new P.Q("")
r.a=""
d.I(0,new P.jL(new P.jM(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
ox:function(a,b,c){return P.dm(a,b,c,C.l,!0)},
kX:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.W(a,b+1)
r=C.a.W(a,n)
q=H.k4(s)
p=H.k4(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aP(o,4)
if(n>=8)return H.b(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.aS(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.t(a,b,b+3).toUpperCase()
return null},
kV:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
r=s.length
if(0>=r)return H.b(s,0)
s[0]=37
q=C.a.G(k,a>>>4)
if(1>=r)return H.b(s,1)
s[1]=q
q=C.a.G(k,a&15)
if(2>=r)return H.b(s,2)
s[2]=q}else{if(a>2047)if(a>65535){p=240
o=4}else{p=224
o=3}else{p=192
o=2}s=new Uint8Array(3*o)
for(r=s.length,n=0;--o,o>=0;p=128){m=C.c.hd(a,6*o)&63|p
if(n>=r)return H.b(s,n)
s[n]=37
q=n+1
l=C.a.G(k,m>>>4)
if(q>=r)return H.b(s,q)
s[q]=l
l=n+2
q=C.a.G(k,m&15)
if(l>=r)return H.b(s,l)
s[l]=q
n+=3}}return P.eN(s,0,null)},
dm:function(a,b,c,d,e){var s=P.mn(a,b,c,d,e)
return s==null?C.a.t(a,b,c):s},
mn:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.W(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.b(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.kX(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.b(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.c5(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.W(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.kV(o)}}if(p==null){p=new P.Q("")
n=p}else n=p
n.a+=C.a.t(a,q,r)
n.a+=H.f(m)
if(typeof l!=="number")return H.h(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.t(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mm:function(a){if(C.a.al(a,"."))return!0
return C.a.dM(a,"/.")!==-1},
oG:function(a){var s,r,q,p,o,n,m
if(!P.mm(a))return a
s=H.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.C(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.b(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.u(s,"/")},
oF:function(a,b){var s,r,q,p,o,n
if(!P.mm(a))return!b?P.mk(a):a
s=H.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gaI(s)!==".."){if(0>=s.length)return H.b(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.b(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gaI(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.b(s,0)
r=P.mk(s[0])
if(0>=s.length)return H.b(s,0)
s[0]=r}return C.b.u(s,"/")},
mk:function(a){var s,r,q,p=a.length
if(p>=2&&P.ml(J.n4(a,0)))for(s=1;s<p;++s){r=C.a.G(a,s)
if(r===58)return C.a.t(a,0,s)+"%3A"+C.a.am(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.b(C.m,q)
q=(C.m[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
ow:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.G(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.bF("Invalid URL encoding"))}}return s},
kY:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.G(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.t(a,b,c)
else p=new H.N(C.a.t(a,b,c))}else{p=H.d([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.G(a,o)
if(r>127)throw H.c(P.bF("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.bF("Truncated URI"))
p.push(P.ow(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a0.c9(p)},
ml:function(a){var s=a|32
return 97<=s&&s<=122},
lW:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.d([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.G(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.a2(k,a,r))}}if(q<0&&r>b)throw H.c(P.a2(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.G(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaI(j)
if(p!==44||r!==n+7||!C.a.ac(a,"base64",n+1))throw H.c(P.a2("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.F.hW(0,a,m,s)
else{l=P.mn(a,m,s,C.l,!0)
if(l!=null)a=C.a.aW(a,m,s,l)}return new P.j7(a,j,c)},
oN:function(){var s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",r=".",q=":",p="/",o="?",n="#",m=P.ny(22,new P.jU(),t.gc),l=new P.jT(m),k=new P.jV(),j=new P.jW(),i=l.$2(0,225)
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
mv:function(a,b,c,d,e){var s,r,q,p,o,n=$.n3()
for(s=b;s<c;++s){if(d<0||d>=n.length)return H.b(n,d)
r=n[d]
q=C.a.G(a,s)^96
if(q>95)q=31
if(q>=r.length)return H.b(r,q)
p=r[q]
d=p&31
o=p>>>5
if(o>=8)return H.b(e,o)
e[o]=s}return d},
aX:function aX(){},
ag:function ag(a,b){this.a=a
this.b=b},
W:function W(){},
bo:function bo(a){this.a=a},
hH:function hH(){},
hI:function hI(){},
J:function J(){},
dA:function dA(a){this.a=a},
el:function el(){},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bX:function bX(a,b,c,d,e,f){var _=this
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
f8:function f8(a){this.a=a},
f5:function f5(a){this.a=a},
eJ:function eJ(a){this.a=a},
dK:function dK(a){this.a=a},
eo:function eo(){},
cN:function cN(){},
dM:function dM(a){this.a=a},
ft:function ft(a){this.a=a},
hT:function hT(a,b,c){this.a=a
this.b=b
this.c=c},
k:function k(){},
i:function i(){},
e_:function e_(){},
o:function o(){},
H:function H(){},
am:function am(){},
P:function P(){},
L:function L(){},
B:function B(){},
Q:function Q(a){this.a=a},
jb:function jb(a){this.a=a},
j8:function j8(a){this.a=a},
j9:function j9(a){this.a=a},
ja:function ja(a,b){this.a=a
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
jM:function jM(a,b){this.a=a
this.b=b},
jL:function jL(a){this.a=a},
j7:function j7(a,b,c){this.a=a
this.b=b
this.c=c},
jU:function jU(){},
jT:function jT(a){this.a=a},
jV:function jV(){},
jW:function jW(){},
fO:function fO(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fl:function fl(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
pG:function(a){var s
if(t.u.b(a)){s=J.n9(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.di(a.data,a.height,a.width)},
pF:function(a){if(a instanceof P.di)return{data:a.a,height:a.b,width:a.c}
return a},
bh:function(a){var s,r,q,p,o
if(a==null)return null
s=P.lw(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.u)(r),++p){o=r[p]
s.k(0,o,a[o])}return s},
pE:function(a){var s={}
a.I(0,new P.k_(s))
return s},
jF:function jF(){},
jH:function jH(a,b){this.a=a
this.b=b},
jI:function jI(a,b){this.a=a
this.b=b},
di:function di(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(a){this.a=a},
jG:function jG(a,b){this.a=a
this.b=b},
dU:function dU(a,b){this.a=a
this.b=b},
hR:function hR(){},
hS:function hS(){},
jA:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ob:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
fM:function fM(){},
a7:function a7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aM:function aM(){},
e5:function e5(){},
aP:function aP(){},
em:function em(){},
iu:function iu(){},
eM:function eM(){},
n:function n(){},
aT:function aT(){},
eY:function eY(){},
fA:function fA(){},
fB:function fB(){},
fI:function fI(){},
fJ:function fJ(){},
fW:function fW(){},
fX:function fX(){},
h2:function h2(){},
h3:function h3(){},
bc:function bc(){},
hn:function hn(){},
dC:function dC(){},
ho:function ho(a){this.a=a},
dD:function dD(){},
b2:function b2(){},
en:function en(){},
fg:function fg(){},
ey:function ey(){},
eH:function eH(){},
fS:function fS(){},
fT:function fT(){}},W={
kv:function(){var s=document.createElement("canvas")
return s},
hJ:function(a){return"wheel"},
no:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.bj(s)}return q},
jz:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mb:function(a,b,c,d){var s=W.jz(W.jz(W.jz(W.jz(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
Y:function(a,b,c,d){var s=new W.fs(a,b,c==null?null:W.mw(new W.jy(c),t.aD),!1)
s.hk()
return s},
mw:function(a,b){var s=$.aF
if(s===C.f)return a
return s.de(a,b)},
q:function q(){},
hj:function hj(){},
dy:function dy(){},
dz:function dz(){},
bm:function bm(){},
bn:function bn(){},
at:function at(){},
hz:function hz(){},
I:function I(){},
cj:function cj(){},
hA:function hA(){},
al:function al(){},
aI:function aI(){},
hB:function hB(){},
hC:function hC(){},
hD:function hD(){},
hF:function hF(){},
ck:function ck(){},
cl:function cl(){},
dR:function dR(){},
hG:function hG(){},
fi:function fi(a,b){this.a=a
this.b=b},
G:function G(){},
l:function l(){},
e:function e(){},
ah:function ah(){},
bK:function bK(){},
dT:function dT(){},
dV:function dV(){},
au:function au(){},
hW:function hW(){},
bq:function bq(){},
br:function br(){},
bM:function bM(){},
bO:function bO(){},
dI:function dI(){},
bt:function bt(){},
i4:function i4(){},
io:function io(){},
bQ:function bQ(){},
ec:function ec(){},
ip:function ip(a){this.a=a},
ed:function ed(){},
iq:function iq(a){this.a=a},
ay:function ay(){},
ee:function ee(){},
ai:function ai(){},
fh:function fh(a){this.a=a},
w:function w(){},
cI:function cI(){},
aA:function aA(){},
er:function er(){},
ez:function ez(){},
iA:function iA(a){this.a=a},
eB:function eB(){},
ao:function ao(){},
eD:function eD(){},
aB:function aB(){},
eE:function eE(){},
aC:function aC(){},
eK:function eK(){},
iL:function iL(a){this.a=a},
ap:function ap(){},
bb:function bb(){},
aq:function aq(){},
ab:function ab(){},
eP:function eP(){},
eQ:function eQ(){},
iU:function iU(){},
aD:function aD(){},
by:function by(){},
eX:function eX(){},
iX:function iX(){},
aV:function aV(){},
jc:function jc(){},
fc:function fc(){},
bd:function bd(){},
c2:function c2(){},
fj:function fj(){},
d1:function d1(){},
fx:function fx(){},
d5:function d5(){},
fR:function fR(){},
fY:function fY(){},
ky:function ky(a,b){this.a=a
this.$ti=b},
fs:function fs(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jy:function jy(a){this.a=a},
kO:function kO(a){this.$ti=a},
K:function K(){},
cq:function cq(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
fk:function fk(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fu:function fu(){},
fv:function fv(){},
fy:function fy(){},
fz:function fz(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
fK:function fK(){},
fL:function fL(){},
fN:function fN(){},
db:function db(){},
dc:function dc(){},
fP:function fP(){},
fQ:function fQ(){},
fV:function fV(){},
fZ:function fZ(){},
h_:function h_(){},
de:function de(){},
df:function df(){},
h0:function h0(){},
h1:function h1(){},
h7:function h7(){},
h8:function h8(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(){},
he:function he(){},
hf:function hf(){},
hg:function hg(){}},K={
a3:function(a){var s=new K.iB()
s.er(a)
return s},
hk:function hk(){},
dY:function dY(){},
i7:function i7(){},
b7:function b7(){this.a=null},
iB:function iB(){this.a=null},
mD:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2="testCanvas",b3=null,b4="controls",b5="modifiers",b6={},b7=V.nT("Test 040"),b8=W.kv()
b8.className="pageLargeCanvas"
b8.id=b2
b7.a.appendChild(b8)
s=t.i
b7.dc(H.d(["A combination of bump mapping with height map and specular map."],s))
b7.hm(H.d(["controls"],s))
b7.dc(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(b2)
if(r==null)H.p(P.t("Failed to find an element with the identifier, testCanvas."))
q=E.o_(r,!0,!0,!0,!1)
p=q.f.bw("../resources/gravel/colorLarge.png")
o=q.f.bw("../resources/gravel/bumpLarge.png")
n=q.f.bw("../resources/gravel/specularSmall.png")
m=q.f.bw("../resources/gravel/heightSmall.png")
b7=U.ln(V.lC(0,0,2))
l=new U.cM()
l.r=l.f=l.e=l.d=l.c=l.b=l.a=0
l.seg(0)
l.se3(0,0)
l.se7(0)
k=l.d
$.x().toString
if(!(Math.abs(k-0.6)<1e-9)){l.d=0.6
k=new D.r("deltaYaw",k,0.6)
k.b=!0
l.K(k)}k=l.e
$.x().toString
if(!(Math.abs(k-0.1)<1e-9)){l.e=0.1
k=new D.r("deltaPitch",k,0.1)
k.b=!0
l.K(k)}k=l.f
$.x().toString
if(!(Math.abs(k-0)<1e-9)){l.f=0
k=new D.r("deltaRoll",k,0)
k.b=!0
l.K(k)}k=t.dk
j=U.ls(H.d([b7,l],k))
i=E.kx(F.pX(0.03))
i.sb9(j)
l=O.ly()
b7=l.f
b7.saS(0,new V.Z(1,1,1))
i.sas(l)
h=new V.Z(1,1,1)
g=new D.bw()
g.c=new V.Z(1,1,1)
g.r=1
g.y=g.x=0
g.z=!0
g.a=V.b6()
f=g.b
g.b=j
j.gn().m(0,g.gev())
b7=new D.r("mover",f,g.b)
b7.b=!0
g.ag(b7)
if(!g.c.p(0,h)){f=g.c
g.c=h
b7=new D.r("color",f,h)
b7.b=!0
g.ag(b7)}e=V.m6()
if(!J.C(g.f,e)){f=g.f
g.f=e
b7=new D.r("shadowAdjust",f,e)
b7.b=!0
g.ag(b7)}b7=g.r
$.x().toString
if(!(Math.abs(b7-0.5)<1e-9)){g.r=0.5
b7=new D.r("attenuation0",b7,0.5)
b7.b=!0
g.ag(b7)}b7=g.x
$.x().toString
if(!(Math.abs(b7-0.1)<1e-9)){g.x=0.1
b7=new D.r("attenuation1",b7,0.1)
b7.b=!0
g.ag(b7)}b7=g.y
$.x().toString
if(!(Math.abs(b7-0)<1e-9)){g.y=0
b7=new D.r("attenuation2",b7,0)
b7.b=!0
g.ag(b7)}d=F.mH()
c=E.kx(d)
b6.a=null
m.gn().m(0,new K.kb(b6,q,m))
b=X.lE()
b7=q.x
l=new U.cY()
a=U.lm()
a.sef(0,!0)
a.sdS(6.283185307179586)
a.sdU(0)
a.saa(0,0)
a.sdT(100)
a.sa0(0)
a.sdk(0.5)
l.b=a
a0=l.gbk()
a.gn().m(0,a0)
a=U.lm()
a.sef(0,!0)
a.sdS(6.283185307179586)
a.sdU(0)
a.saa(0,0)
a.sdT(100)
a.sa0(0)
a.sdk(0.5)
l.c=a
a.gn().m(0,a0)
l.d=null
l.r=l.f=l.e=!1
l.y=l.x=2.5
l.Q=4
l.ch=l.cx=!1
l.db=l.cy=0
l.dx=null
l.dy=0
l.fx=l.fr=null
a1=new X.az(!1,!1,!1)
f=l.d
l.d=a1
a=new D.r(b5,f,a1)
a.b=!0
l.K(a)
a=l.f
if(a!==!1){l.f=!1
a=new D.r("invertX",a,!1)
a.b=!0
l.K(a)}a=l.r
if(a!==!1){l.r=!1
a=new D.r("invertY",a,!1)
a.b=!0
l.K(a)}l.c1(b7)
b7=q.x
a=new U.cZ()
a.c=0.01
a.e=a.d=0
a1=new X.az(!1,!1,!1)
a.b=a1
a0=new D.r(b5,b3,a1)
a0.b=!0
a.K(a0)
a.c1(b7)
b.sb9(U.ls(H.d([l,a,U.ln(V.lC(0,0,5))],k)))
a2=O.ly()
a2.dx.m(0,g)
b7=a2.r
b7.saS(0,new V.Z(0.3,0.3,0.3))
a2.x.saS(0,new V.Z(1,1,1))
b7=a2.z
b7.bl(new A.a_(!0,b7.c.b,!1))
b7.d4(40)
a3=X.ks(!0,1,1,!0)
b7=t.aN
a4=M.lp(H.d([c,i],b7))
a4.sas(a2)
a4.sc7(b)
a4.saJ(0,a3)
a5=X.ks(!0,0.5,0.5,!0)
a6=M.lp(H.d([c,i],b7))
a6.sc7(b)
a6.saJ(0,a5)
b7=new O.hE()
b7.b=1
b7.c=10
b7.f=b7.e=b7.d=!1
$.x().toString
if(!(Math.abs(0.5)<1e-9)){b7.b=0.5
l=new D.r("start",1,0.5)
l.b=!0
b7.B(l)}l=b7.c
$.x().toString
if(!(Math.abs(l-5.5)<1e-9)){b7.c=5.5
l=new D.r("stop",l,5.5)
l.b=!0
b7.B(l)}a6.sas(b7)
b7=new V.c0(-1,0,0,1)
l=a3.ch
k=a5.ch
a7=new M.cr()
a7.a=!0
a7.c=X.ks(!0,1,1,!1)
a=O.lr(b3,b3)
a0=a7.gU()
a.gn().m(0,a0)
a7.d=a
a7.e=M.kw(a7.c,a)
a=a7.c.ch
a8=$.m0
a=O.lr(a8==null?$.m0=new V.a4(0,1):a8,a)
a.gn().m(0,a0)
a7.f=a
a7.r=M.kw(b3,a)
a7.d.sc3(0)
a7.f.sc3(0)
a7.d.sdj(l)
a7.d.sb1(k)
a7.f.sb1(k)
a7.d.scv(b3)
a7.f.scv(b3)
a7.d.sc2(b7)
a7.f.sc2(b7)
a7.r.saJ(0,b3)
a9=new O.eS()
a9.a=new V.af(0,0,0,0)
b7=O.hw(t.au)
a9.c=b7
b7.aK(a9.gfm(),a9.gfo())
a9.d=0
a9.e=null
a9.r=a9.f=C.o
b0=new V.af(0,0,0,0)
if(!a9.a.p(0,b0)){f=a9.a
a9.a=b0
b7=new D.r("backColor",f,b0)
b7.b=!0
a9.B(b7)}a9.sdf(C.o)
a9.sdf(C.n)
b7=a9.c
l=a5.ch
b7.m(0,O.lR(V.cK(0,0.8,0.2,0.2),l))
l=a9.c
b7=a3.ch
l.m(0,O.lR(V.cK(0,0.6,0.2,0.2),b7))
b1=M.kw(b3,b3)
b1.saJ(0,X.kz(!1,b3))
b1.sas(a9)
b7=H.d([a4,a6,a7,b1],t.f2)
l=new M.ce()
l.bg(t.bn)
l.e=!0
l.f=!1
l.r=null
l.aK(l.gfR(),l.gfT())
l.aQ(0,b7)
b7=q.d
if(b7!==l){if(b7!=null)b7.gn().D(0,q.gcI())
q.d=l
l.gn().m(0,q.gcI())
q.cJ()}b7=new V.hu(b4)
s=s.getElementById(b4)
b7.c=s
if(s==null)H.p("Failed to find controls for CheckGroup")
b7.d=H.d([],t.aM)
b7.da(0,"Color",new K.kc(a2,p),!0)
b7.b0(0,"Specular",new K.kd(a2,n))
b7.b0(0,"Bump",new K.ke(a2,o))
b7.b0(0,"Height",new K.kf(b6,c,d))
b7.b0(0,"Blur",new K.kg(a7,a5))
b7.b0(0,"Passes",new K.kh(b1,a9))
V.pW(q)},
kb:function kb(a,b,c){this.a=a
this.b=b
this.c=c},
kc:function kc(a,b){this.a=a
this.b=b},
kd:function kd(a,b){this.a=a
this.b=b},
ke:function ke(a,b){this.a=a
this.b=b},
kf:function kf(a,b,c){this.a=a
this.b=b
this.c=c},
kg:function kg(a,b){this.a=a
this.b=b},
kh:function kh(a,b){this.a=a
this.b=b}},L={eI:function eI(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},eV:function eV(a,b,c){this.a=a
this.b=b
this.c=c},eW:function eW(a){this.b=a
this.c=null},iV:function iV(){var _=this
_.d=_.c=_.b=_.a=null},eZ:function eZ(a){this.b=a
this.a=this.c=null}},O={
hw:function(a){var s=new O.a6(a.X("a6<0>"))
s.bg(a)
return s},
a6:function a6(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cD:function cD(){this.b=this.a=null},
lr:function(a,b){var s,r,q,p=new O.dX()
p.r=0
p.scv(null)
p.sc2(null)
if(a==null){s=$.m_
if(s==null){s=new V.a4(1,0)
$.m_=s
r=s}else r=s}else r=a
if(!J.C(p.d,r)){q=p.d
p.d=r
s=new D.r("blurDirection",q,r)
s.b=!0
p.B(s)}p.sdj(b)
p.sb1(null)
p.sc3(0)
return p},
ly:function(){var s,r=new O.ea(),q=O.hw(t.hc)
r.e=q
q.aK(r.gf6(),r.gf8())
q=new O.aN(r,"emission")
q.c=new A.a_(!1,!1,!1)
q.f=new V.Z(0,0,0)
r.f=q
q=new O.aN(r,"ambient")
q.c=new A.a_(!1,!1,!1)
q.f=new V.Z(0,0,0)
r.r=q
q=new O.aN(r,"diffuse")
q.c=new A.a_(!1,!1,!1)
q.f=new V.Z(0,0,0)
r.x=q
q=new O.aN(r,"invDiffuse")
q.c=new A.a_(!1,!1,!1)
q.f=new V.Z(0,0,0)
r.y=q
q=new O.id(r,"specular")
q.c=new A.a_(!1,!1,!1)
q.f=new V.Z(0,0,0)
q.ch=100
r.z=q
q=new O.i9(r,"bump")
q.c=new A.a_(!1,!1,!1)
r.Q=q
r.ch=null
q=new O.aN(r,"reflect")
q.c=new A.a_(!1,!1,!1)
q.f=new V.Z(0,0,0)
r.cx=q
q=new O.ic(r,"refract")
q.c=new A.a_(!1,!1,!1)
q.f=new V.Z(0,0,0)
q.ch=1
r.cy=q
q=new O.i8(r,"alpha")
q.c=new A.a_(!1,!1,!1)
q.f=1
r.db=q
q=new D.cw()
q.bg(t.gj)
q.e=H.d([],t.bb)
q.f=H.d([],t.cP)
q.r=H.d([],t.eb)
q.x=H.d([],t.du)
q.z=q.y=null
q.cz(q.gf4(),q.gfL(),q.gfP())
r.dx=q
s=new O.ib()
s.b=new V.af(0,0,0,0)
s.c=1
s.d=10
s.e=!1
r.dy=s
s=q.y
q=s==null?q.y=D.E():s
q.m(0,r.gh5())
q=r.dx
s=q.z
q=s==null?q.z=D.E():s
q.m(0,r.ga6())
r.fr=null
return r},
lR:function(a,b){var s,r,q,p=new O.bx(),o=p.a
p.a=b
b.gn().m(0,p.ga6())
s=new D.r("texture",o,p.a)
s.b=!0
p.B(s)
r=V.b6()
if(!J.C(p.b,r)){o=p.b
p.b=r
s=new D.r("colorMatrix",o,r)
s.b=!0
p.B(s)}q=V.iv()
if(!J.C(p.c,q)){o=p.c
p.c=q
s=new D.r("source",o,q)
s.b=!0
p.B(s)}if(!J.C(p.d,a)){o=p.d
p.d=a
s=new D.r("destination",o,a)
s.b=!0
p.B(s)}if(p.e!==!1){p.e=!1
s=new D.r("flip",!0,!1)
s.b=!0
p.B(s)}p.f=null
return p},
hE:function hE(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dX:function dX(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ea:function ea(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ie:function ie(a,b){this.a=a
this.b=b},
ig:function ig(){},
ih:function ih(a,b){this.a=a
this.b=b},
ii:function ii(){},
ij:function ij(a,b){this.a=a
this.b=b},
ik:function ik(){},
il:function il(a,b){this.a=a
this.b=b},
im:function im(){},
i8:function i8(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cC:function cC(){},
i9:function i9(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aN:function aN(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ib:function ib(){var _=this
_.e=_.d=_.c=_.b=null},
ic:function ic(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
id:function id(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eO:function eO(){},
eS:function eS(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bx:function bx(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
kx:function(a){var s,r=new E.b4()
r.a=""
r.b=!0
s=O.hw(t.l)
r.y=s
s.aK(r.ghX(),r.gi_())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sbG(0,a)
r.sas(null)
r.sb9(null)
return r},
m7:function(){if(J.ko(window.navigator.vendor,"Google"))return C.D
if(J.ko(window.navigator.userAgent,"Firefox"))return C.r
var s=window.navigator.appVersion
if(J.aY(s).S(s,"Trident")||C.a.S(s,"Edge"))return C.t
if(J.ko(window.navigator.appName,"Microsoft"))return C.t
return C.E},
m8:function(){var s=window.navigator.appVersion
if(J.aY(s).S(s,"Win"))return C.Y
if(C.a.S(s,"Mac"))return C.y
if(C.a.S(s,"Linux"))return C.Z
return C.a_},
nQ:function(a,b){var s=new E.iw(a)
s.eq(a,b)
return s},
o_:function(a,b,c,d,e){var s,r
if(t.fr.b(a))return E.lS(a,!0,!0,!0,!1)
s=W.kv()
r=s.style
r.width="100%"
r.height="100%"
J.kr(a).m(0,s)
return E.lS(s,!0,!0,!0,!1)},
lS:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.eU(),n=t.z,m=C.i.cw(a,"webgl2",P.nw(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.p(P.t("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.nQ(m,a)
n=new T.iQ(m)
n.b=m.getParameter(3379)
m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.fa(a)
s=new X.i_()
s.c=new X.az(!1,!1,!1)
s.d=P.lx(t.e)
n.b=s
s=new X.ir(n)
s.f=0
s.r=V.b8()
s.x=V.b8()
s.ch=s.Q=1
n.c=s
s=new X.i5(n)
s.r=0
s.x=V.b8()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.iW(n)
s.f=V.b8()
s.r=V.b8()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=H.d([],t.eG)
s=$.hL
n.Q=(s==null?$.hL=new E.fq(E.m7(),E.m8()):s).a===C.r?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.Y(q,"contextmenu",n.gfg(),!1))
n.z.push(W.Y(a,"focus",n.gfq(),!1))
n.z.push(W.Y(a,"blur",n.gfa(),!1))
n.z.push(W.Y(q,"keyup",n.gfv(),!1))
n.z.push(W.Y(q,"keydown",n.gft(),!1))
n.z.push(W.Y(a,"mousedown",n.gfB(),!1))
n.z.push(W.Y(a,"mouseup",n.gfF(),!1))
n.z.push(W.Y(a,p,n.gfD(),!1))
r=n.z
W.hJ(a)
W.hJ(a)
r.push(W.Y(a,W.hJ(a),n.gfH(),!1))
n.z.push(W.Y(q,p,n.gfi(),!1))
n.z.push(W.Y(q,"mouseup",n.gfk(),!1))
n.z.push(W.Y(q,"pointerlockchange",n.gfJ(),!1))
n.z.push(W.Y(a,"touchstart",n.gfZ(),!1))
n.z.push(W.Y(a,"touchend",n.gfV(),!1))
n.z.push(W.Y(a,"touchmove",n.gfX(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.ag(Date.now(),!1)
o.db=0
o.d1()
return o},
hs:function hs(){},
b4:function b4(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bG:function bG(a){this.b=a},
bV:function bV(a){this.b=a},
fq:function fq(a,b){this.a=a
this.b=b},
iw:function iw(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ix:function ix(a){this.a=a},
iy:function iy(a){this.a=a},
iz:function iz(a){this.a=a},
eU:function eU(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
iT:function iT(a){this.a=a}},Z={
kN:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.c6(c)),35044)
a.bindBuffer(b,null)
return new Z.fd(b,s)},
ar:function(a){return new Z.aE(a)},
fd:function fd(a,b){this.a=a
this.b=b},
dG:function dG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
c1:function c1(a){this.a=a},
b3:function b3(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bN:function bN(a,b,c){this.a=a
this.b=b
this.c=c},
aE:function aE(a){this.a=a}},D={
E:function(){var s=new D.bp()
s.d=0
return s},
ht:function ht(){},
bp:function bp(){var _=this
_.d=_.c=_.b=_.a=null},
hO:function hO(a){this.a=a},
hP:function hP(a){this.a=a},
R:function R(){this.b=null},
aJ:function aJ(){this.b=null},
aK:function aK(){this.b=null},
r:function r(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
dE:function dE(){},
dP:function dP(){},
S:function S(){},
cw:function cw(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
bw:function bw(){var _=this
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eF:function eF(){}},X={dH:function dH(a,b){this.a=a
this.b=b},e3:function e3(a,b){this.a=a
this.b=b},i_:function i_(){var _=this
_.d=_.c=_.b=_.a=null},cz:function cz(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},i5:function i5(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},az:function az(a,b,c){this.a=a
this.b=b
this.c=c},bR:function bR(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},ir:function ir(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bS:function bS(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},et:function et(){},cQ:function cQ(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iW:function iW(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},fa:function fa(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ks:function(a,b,c,d){var s,r,q,p,o=new X.hp()
o.d=o.c=o.b=o.a=512
o.e=!0
o.f=!1
o.x=o.r=1
o.ch=T.kJ(null)
o.cx=new V.af(0,0,0,1)
o.cy=!0
o.db=2000
o.dx=!0
o.dy=V.iv()
o.sau(0,512)
o.sao(0,512)
s=new V.af(0,0,0,1)
if(!o.cx.p(0,s)){r=o.cx
o.cx=s
q=new D.r("color",r,s)
q.b=!0
o.a1(q)}if(o.cy!==d){o.cy=d
q=new D.r("clearColor",!d,d)
q.b=!0
o.a1(q)}q=o.db
$.x().toString
if(!(Math.abs(q-2000)<1e-9)){o.db=2000
q=new D.r("depth",q,2000)
q.b=!0
o.a1(q)}if(!o.f){o.f=!0
q=new D.r("autoResize",!1,!0)
q.b=!0
o.a1(q)}q=o.r
$.x().toString
if(!(Math.abs(q-b)<1e-9)){o.r=b
q=new D.r("autoResizeScalarX",q,b)
q.b=!0
o.a1(q)}q=o.x
$.x().toString
if(!(Math.abs(q-c)<1e-9)){o.x=c
q=new D.r("autoResizeScalarY",q,c)
q.b=!0
o.a1(q)}p=V.iv()
if(!J.C(o.dy,p)){r=o.dy
o.dy=p
q=new D.r("region",r,p)
q.b=!0
o.a1(q)}return o},
kz:function(a,b){var s=new X.hU(),r=new V.af(0,0,0,1)
s.a=r
s.b=a
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=V.iv()
s.r=r
return s},
lE:function(){var s,r=new X.ep()
r.c=1.0471975511965976
r.d=0.1
r.e=2000
r.sb9(null)
s=r.c
$.x().toString
if(!(Math.abs(s-1.0471975511965976)<1e-9)){r.c=1.0471975511965976
s=new D.r("fov",s,1.0471975511965976)
s.b=!0
r.a1(s)}s=r.d
$.x().toString
if(!(Math.abs(s-0.1)<1e-9)){r.d=0.1
s=new D.r("near",s,0.1)
s.b=!0
r.a1(s)}s=r.e
$.x().toString
if(!(Math.abs(s-2000)<1e-9)){r.e=2000
s=new D.r("far",s,2000)
s.b=!0
r.a1(s)}return r},
hp:function hp(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ku:function ku(){},
hU:function hU(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hX:function hX(){this.b=this.a=null},
ep:function ep(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
iM:function iM(){}},V={
hx:function(a,b,c,d){var s=a/255,r=b/255,q=c/255,p=d/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
if(p<0)p=0
else if(p>1)p=1
return new V.af(s,r,q,p)},
l8:function(a,b,c){var s
if(c<=0)s=a
else if(c>=1)s=b
else{if(typeof b!=="number")return b.v()
if(typeof a!=="number")return H.h(a)
s=a+c*(b-a)}return s},
km:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.ay(a-b,s)
return(a<0?a+s:a)+b},
D:function(a,b,c){if(a==null)return C.a.ar("null",c)
$.x().toString
return C.a.ar(C.d.ea(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cb:function(a,b,c){var s,r,q,p,o,n,m=H.d([],t.i)
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.u)(a),++q){p=V.D(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.b(m,o)
s=C.a.ar(m[o],r)
n=m.length
if(o>=n)return H.b(m,o)
m[o]=s}return m},
du:function(a){return C.d.ip(Math.pow(2,C.S.b6(Math.log(H.pC(a))/Math.log(2))))},
b6:function(){var s=$.cE
return s==null?$.cE=V.aO(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aO:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ax(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lC:function(a,b,c){return V.aO(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lA:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aO(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
lB:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aO(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
b8:function(){var s=$.lG
return s==null?$.lG=new V.aa(0,0):s},
nD:function(){var s=$.aQ
return s==null?$.aQ=new V.O(0,0,0):s},
iv:function(){var s=$.cL
return s==null?$.cL=V.cK(0,0,1,1):s},
cK:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ex(a,b,c,d)},
d_:function(){var s=$.m4
return s==null?$.m4=new V.F(0,0,0):s},
m6:function(){var s=$.m5
return s==null?$.m5=new V.c0(1,0.00390625,0.0000152587890625,0):s},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hM:function hM(){},
eb:function eb(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ax:function ax(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aa:function aa(a,b){this.a=a
this.b=b},
O:function O(a,b,c){this.a=a
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
a4:function a4(a,b){this.a=a
this.b=b},
F:function F(a,b,c){this.a=a
this.b=b
this.c=c},
c0:function c0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pW:function(a){P.o0(C.Q,new V.kj(a))},
nT:function(a){var s=new V.iG()
s.es(a,!0)
return s},
hu:function hu(a){this.a=a
this.d=this.c=null},
hv:function hv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kj:function kj(a){this.a=a},
iG:function iG(){this.b=this.a=null},
iI:function iI(a){this.a=a},
iH:function iH(a){this.a=a}},U={
lm:function(){var s=new U.hy()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
ln:function(a){var s=new U.cf()
s.a=a
return s},
ls:function(a){var s=new U.bL()
s.bg(t.ah)
s.aK(s.gex(),s.gfN())
s.aQ(0,a)
s.e=null
s.f=V.b6()
s.r=0
return s},
hy:function hy(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cf:function cf(){this.b=this.a=null},
bL:function bL(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
T:function T(){},
cM:function cM(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cY:function cY(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cZ:function cZ(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
kw:function(a,b){var s,r,q,p=new M.ci()
p.a=!0
s=E.kx(null)
s.sbG(0,F.mH())
p.e=s
r=new X.hX()
q=p.b
p.b=r
r.gn().m(0,p.gU())
s=new D.r("camera",q,p.b)
s.b=!0
p.T(s)
p.saJ(0,a)
p.sas(b)
return p},
lp:function(a){var s,r,q=new M.cn()
q.a=!0
s=O.hw(t.l)
q.e=s
s.aK(q.gfc(),q.gfe())
q.y=q.x=q.r=q.f=null
r=X.kz(!0,null)
q.sc7(null)
q.saJ(0,r)
q.sas(null)
q.e.aQ(0,a)
return q},
ce:function ce(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ci:function ci(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cn:function cn(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cr:function cr(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
X:function X(){}},A={
nA:function(a,b){var s=a.b5,r=new A.e9(b,s)
r.bh(b,s)
r.ep(a,b)
return r},
nB:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="MaterialLight_"+a5.gax(a5)+a6.gax(a6)+a7.gax(a7)+a8.gax(a8)+a9.gax(a9)+b0.gax(b0)+b1.gax(b1)+b2.gax(b2)+b3.gax(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.u)(b4),++r)a+="_"+H.f(b4[r].a)}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.u)(b5),++r)a+="_"+H.f(b5[r].a)}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.u)(b6),++r)a+="_"+H.f(b6[r].a)}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.u)(b7),++r)a+="_"+H.f(b7[r].a)}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
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
b=$.a5()
if(h){s=$.aG()
b=new Z.aE(b.a|s.a)}if(g){s=$.b0()
b=new Z.aE(b.a|s.a)}if(f){s=$.as()
b=new Z.aE(b.a|s.a)}if(e){s=$.b_()
b=new Z.aE(b.a|s.a)}return new A.ia(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
jX:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
jY:function(a,b,c){var s,r="Txt, txt2D).rgb;\n"
A.jX(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hi(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}a.a=s+"}\n"},
p6:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jX(b,r,"emission")
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
p2:function(a,b){var s,r=a.b
if(!(r.a||r.b||!1))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.jY(b,r,"ambient")
b.a+="\n"},
p4:function(a,b){var s,r=a.c
if(!(r.a||r.b||!1))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.jY(b,r,"diffuse")
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
p7:function(a,b){var s,r=a.d
if(!(r.a||r.b||!1))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.jY(b,r,"invDiffuse")
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
pd:function(a,b){var s,r=a.e
if(!(r.a||r.b||!1))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.jY(b,r,"specular")
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
p9:function(a,b){var s,r,q
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
pb:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jX(b,r,"reflect")
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
pc:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jX(b,r,"refract")
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
p3:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.f(s)
q=A.hi(r)
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
if(typeof s!=="number")return s.aj()
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
c.a=p+"\n"}p=t.i
o=H.d([],p)
o.push("lit.color")
if(s)o.push("attenuation")
s=c.a+="   return "+C.b.u(o," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit)\n"
c.a=s
c.a=s+"{\n"
o=H.d([],p)
s=a.b
if(s.a||s.b||!1)o.push("ambientColor")
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
n=H.d([],p)
s=a.c
if(s.a||s.b||!1)n.push("diffuse(norm, normDir)")
s=a.d
if(s.a||s.b||!1)n.push("invDiffuse(norm, normDir)")
s=a.e
if(s.a||s.b||!1)n.push("specular(norm, normDir)")
s=c.a+="      highLight = intensity*("+C.b.u(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.u(o," + ")+");\n"
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
p5:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+H.f(s)
q=A.hi(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.aj()
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
m=H.d([],p)
l=a.b
if(l.a||l.b||!1)m.push("ambientColor")
if(a.dx){c.a+=u.h
k=H.d([],p)
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
c.a+="      highLight = intensity*("+C.b.u(k," + ")+");\n"}else c.a+="   highLight = "+C.b.u(k," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.b.u(m," + ")+");\n"
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
pa:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.f(s)
q=A.hi(r)
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
if(typeof s!=="number")return s.aj()
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
c.a=p+"\n"}p=t.i
j=H.d([],p)
j.push("lit.color")
if(m)j.push("attenuation")
if(s)j.push("textureCube(txtCube, invNormDir).rgb")
m=c.a+="   return "+C.b.u(j," * ")+";\n"
m+="}\n"
c.a=m
m+="\n"
c.a=m
m+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+k+")\n"
c.a=m
c.a=m+"{\n"
j=H.d([],p)
m=a.b
if(m.a||m.b||!1)j.push("ambientColor")
if(a.dx){c.a+=u.h
j.push("highLight")
k=s?", txtCube":""
if(n)k+=", shadowCube"
m=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
m+="   vec3 intensity = "+r+"Intensity(normDir, lit"+k+");\n"
c.a=m
c.a=m+"   if(length(intensity) > 0.0001) {\n"
i=H.d([],p)
p=a.c
if(p.a||p.b||!1)i.push("diffuse(norm, normDir)")
p=a.d
if(p.a||p.b||!1)i.push("invDiffuse(norm, normDir)")
p=a.e
if(p.a||p.b||!1)i.push("specular(norm, normDir)")
p=c.a+="      highLight = intensity*("+C.b.u(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.b.u(j," + ")+");\n"
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
pe:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.f(s)
q=A.hi(r)
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
if(typeof s!=="number")return s.aj()
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
if(m){s=$.hL
if(s==null)s=$.hL=new E.fq(E.m7(),E.m8())
p=c.a
if(s.b===C.y){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
c.a=s+"\n"}s=t.i
h=H.d([],s)
if(l)h.push("attenuation")
if(m)h.push("scale")
if(k)h.push("texture2D(txt2D, txtLoc).rgb")
else h.push("vec3(1.0, 1.0, 1.0)")
p=c.a+="   return "+C.b.u(h," * ")+";\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+i+")\n"
c.a=p
c.a=p+"{\n"
h=H.d([],s)
p=a.b
if(p.a||p.b||!1)h.push("ambientColor")
if(a.dx){c.a+=u.h
h.push("highLight")
i=k?", txt2D":""
if(n)i+=", shadow2D"
p=c.a+="   vec3 intensity = "+r+"Intensity(lit"+i+");\n"
p+="   if(length(intensity) > 0.0001) {\n"
c.a=p
c.a=p+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
g=H.d([],s)
s=a.c
if(s.a||s.b||!1)g.push("diffuse(norm, litVec)")
s=a.d
if(s.a||s.b||!1)g.push("invDiffuse(norm, litVec)")
s=a.e
if(s.a||s.b||!1)g.push("specular(norm, litVec)")
s=c.a+="      highLight = intensity*("+C.b.u(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.u(h," + ")+");\n"
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
p8:function(a,b){var s,r
if(a.cy>0)return
s=b.a+="// === No Lights ===\n"
s+="\n"
b.a=s
s+="vec3 nonLightValues(vec3 norm)\n"
b.a=s
s+="{\n"
b.a=s
if(a.dx)b.a=s+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
r=H.d([],t.i)
s=a.b
if(s.a||s.b||!1)r.push("ambientColor")
s=a.c
if(s.a||s.b||!1)r.push("diffuse(norm, litVec)")
s=a.d
if(s.a||s.b||!1)r.push("invDiffuse(norm, litVec)")
s=a.e
if(s.a||s.b||!1)r.push("specular(norm, litVec)")
s=b.a+="   return "+C.b.u(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
pf:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.Q("")
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
A.p6(a,h)
A.p2(a,h)
A.p4(a,h)
A.p7(a,h)
A.pd(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.pb(a,h)
A.pc(a,h)}A.p9(a,h)
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
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.u)(o),++m)A.p3(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.u)(o),++m)A.p5(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.u)(o),++m)A.pa(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.u)(o),++m)A.pe(a,o[m],h)
A.p8(a,h)}o=h.a+="// === Main ===\n"
o+="\n"
h.a=o
o+="void main()\n"
h.a=o
o+="{\n"
h.a=o
o=h.a=o+"   float alpha = alphaValue();\n"
s=s?h.a=o+"   vec3 norm = normal();\n":o
if(r)h.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
l=H.d([],t.i)
if(p){h.a+=u.N
l.push("lightAccum")
s=a.b
if(s.a||s.b||!1)h.a+="   setAmbientColor();\n"
s=a.c
if(s.a||s.b||!1)h.a+="   setDiffuseColor();\n"
s=a.d
if(s.a||s.b||!1)h.a+="   setInvDiffuseColor();\n"
s=a.e
if(s.a||s.b||!1)h.a+="   setSpecularColor();\n"
for(s=a.z,r=s.length,m=0;m<s.length;s.length===r||(0,H.u)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.b(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.am(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.u)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.b(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.am(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.u)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.b(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.am(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.u)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.b(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.am(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}s=a.a
if(s.a||s.b||!1)l.push("emissionColor()")
s=a.r
if(s.a||s.b||!1)l.push("reflect(refl)")
s=a.x
if(s.a||s.b||!1)l.push("refract(refl)")
if(l.length<=0)l.push("vec3(0.0, 0.0, 0.0)")
s=h.a+="   vec4 objClr = vec4("+C.b.u(l," + ")+", alpha);\n"
if(q)s=h.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
h.a=s
s=h.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
pg:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.aU+"];\n"
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
pi:function(a,b){var s
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
ph:function(a,b){var s
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
pk:function(a,b){var s,r
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
pl:function(a,b){var s,r
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
pj:function(a,b){var s
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
pm:function(a,b){var s
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
hi:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.am(a,1)},
nZ:function(a,b){var s,r,q,p
for(s=0,r="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";s<a;++s)r=r+("uniform sampler2D txt"+s+";\n")+("uniform mat4 clrMat"+s+";\n")+("uniform vec2 srcLoc"+s+";\n")+("uniform vec2 srcSize"+s+";\n")+("uniform vec2 destLoc"+s+";\n")+("uniform vec2 destSize"+s+";\n")+("uniform int flip"+s+";\n")
r+="\nvec4 clrAccum;\n"
q=b===C.P
r=(q||b===C.n?r+"float colorCount;\n":r)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.O)r+="      clrAccum += color;\n"
else if(b===C.o)r+="      clrAccum = mix(clrAccum, color, color.a);\n"
else r=q?r+"      clrAccum += color;\n      colorCount += 1.0;\n":r+"      clrAccum = color;\n      colorCount = 1.0;\n"
r+="   }\n}\n\nvoid layoutAll()\n{\n"
p=b===C.n
if(p)for(s=a-1;s>=0;--s)r=r+("   if(txtCount > "+s+")\n")+"   {\n"+("     layout(txt"+s+", clrMat"+s+", srcLoc"+s+", srcSize"+s+", destLoc"+s+", destSize"+s+", flip"+s+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(s=0;s<a;++s)r=r+("   if(txtCount <= "+s+") return;\n")+("   layout(txt"+s+", clrMat"+s+", srcLoc"+s+", srcSize"+s+", destLoc"+s+", destSize"+s+", flip"+s+");\n")
r+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(q)r+="   colorCount = 1.0;\n"
else if(p)r+="   colorCount = 0.0;\n"
r+="   layoutAll();\n"
r=(q?r+"   clrAccum = clrAccum/colorCount;\n":r)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return r.charCodeAt(0)==0?r:r},
nY:function(a,b,c){var s="TextureLayout_"+a+"_"+C.c.i(b.a),r=new A.eT(c,s)
r.bh(c,s)
r.eu(a,b,c)
return r},
kL:function(a,b,c,d,e){var s=new A.j0(a,c,e)
s.f=d
P.i3(d,0,!1,t.e)
return s},
dB:function dB(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(a){this.a=a},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
dO:function dO(a,b){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dW:function dW(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hV:function hV(a,b){this.a=a
this.b=b},
e9:function e9(a,b){var _=this
_.iE=_.dt=_.br=_.b5=_.aU=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iM=_.iL=_.iK=_.cj=_.ci=_.cg=_.cf=_.ce=_.cd=_.cc=_.cb=_.iJ=_.dH=_.dG=_.iI=_.dF=_.dE=_.dD=_.iH=_.dC=_.dB=_.dA=_.iG=_.dz=_.dw=_.iF=_.dv=_.du=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dF:function dF(a,b){this.a=a
this.b=b},
dQ:function dQ(a,b){this.a=a
this.b=b},
eu:function eu(a,b){this.a=a
this.b=b},
eG:function eG(a,b){this.a=a
this.b=b},
ia:function ia(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.aU=b5
_.b5=b6
_.br=b7},
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
ba:function ba(){},
bI:function bI(a,b){this.a=a
this.b=b},
eT:function eT(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
f_:function f_(){},
j4:function j4(a){this.a=a},
bY:function bY(a,b,c){this.a=a
this.c=b
this.d=c},
j1:function j1(a,b,c){this.a=a
this.c=b
this.d=c},
j2:function j2(a,b,c){this.a=a
this.c=b
this.d=c},
j3:function j3(a,b,c){this.a=a
this.c=b
this.d=c},
j0:function j0(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
f0:function f0(a,b,c){this.a=a
this.c=b
this.d=c},
cR:function cR(a,b,c){this.a=a
this.c=b
this.d=c},
f1:function f1(a,b,c){this.a=a
this.c=b
this.d=c},
f2:function f2(a,b,c){this.a=a
this.c=b
this.d=c},
j5:function j5(a,b,c){this.a=a
this.c=b
this.d=c},
f3:function f3(a,b,c){this.a=a
this.c=b
this.d=c},
cU:function cU(a,b,c){this.a=a
this.c=b
this.d=c},
cW:function cW(a,b,c){this.a=a
this.c=b
this.d=c},
f4:function f4(a,b,c){this.a=a
this.c=b
this.d=c}},F={
mH:function(){var s,r,q,p,o=null,n=F.kI(),m=n.a,l=new V.F(-1,-1,1).L(),k=m.bn(new V.aR(1,2,4,6),V.hx(255,0,0,255),new V.O(-1,-1,0),new V.aa(0,1),l,o)
l=n.a
m=new V.F(1,-1,1).L()
s=l.bn(new V.aR(0,3,4,6),V.hx(0,0,255,255),new V.O(1,-1,0),new V.aa(1,1),m,o)
m=n.a
l=new V.F(1,1,1).L()
r=m.bn(new V.aR(0,2,5,6),V.hx(0,128,0,255),new V.O(1,1,0),new V.aa(1,0),l,o)
l=n.a
m=V.b8()
q=new V.F(-1,1,1).L()
p=l.bn(new V.aR(0,2,4,7),V.hx(255,255,0,255),new V.O(-1,1,0),m,q,o)
n.d.ho(H.d([k,s,r,p],t.j))
n.av()
return n},
jS:function(a){var s,r=a.a
if(typeof r!=="number")return r.Z()
s=r>0?1:0
r=a.b
if(typeof r!=="number")return r.Z()
if(r>0)s+=2
r=a.c
if(typeof r!=="number")return r.Z()
return(r>0?s+4:s)*2},
dn:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.F(f,e+a3,d+a4)
h.a=c
s=a3-a4
r=a4-a5
q=a5-a3
p=h.b=new V.F(s+a5,r+a3,q+a4)
o=new V.F(s-a5,r-a3,q-a4)
h.c=o
n=h.d=new V.F(g-a5,e-a3,d-a4)
if(f>0){h.d=p
h.b=n
f=p
g=n}else{f=n
g=p}for(d=f,f=g,g=c,e=o,m=0;m<a6;++m,l=d,d=g,g=f,f=e,e=l){h.a=f
h.b=e
h.c=d
h.d=g}k=F.jS(g)
j=F.jS(f)
i=F.mK(a1,a2,new F.jQ(h,F.jS(e),F.jS(d),j,k,a0),b)
if(i!=null)a.co(i)},
pX:function(a){var s,r,q=null,p={}
p.a=s
p.a=null
p.a=new F.kk()
p=new F.kl(p,a)
r=F.kI()
F.dn(r,q,p,8,8,1,0,0,1)
F.dn(r,q,p,8,8,0,1,0,3)
F.dn(r,q,p,8,8,0,0,1,2)
F.dn(r,q,p,8,8,-1,0,0,0)
F.dn(r,q,p,8,8,0,-1,0,0)
F.dn(r,q,p,8,8,0,0,-1,3)
r.av()
r.hV(new F.jo(),new F.is())
return r},
pN:function(a,b){var s,r={}
r.a=s
r.a=null
r.a=new F.k2()
return F.mK(b,a,new F.k3(r),null)},
mK:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.kI()
r=H.d([],t.j)
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.ji(e,e,new V.af(n,0,0,1),e,e,new V.aa(p,1),e,e,0)
o.m(0,m)
c.$3(m,p,0)
r.push(m.ca(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.ji(e,e,new V.af(h,g,f,1),e,e,new V.aa(p,k),e,e,0)
i.m(0,m)
c.$3(m,p,l)
r.push(m.ca(d))}}s.d.hp(a+1,b+1,r)
return s},
co:function(a,b,c){var s=new F.dS(),r=a.a
if(r==null)H.p(P.t("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.p(P.t("May not create a face with vertices attached to different shapes."))
s.bY(a)
s.bZ(b)
s.h9(c)
s.a.a.d.b.push(s)
s.a.a.a4()
return s},
nu:function(a,b){var s=new F.e6(),r=a.a
if(r==null)H.p(P.t("May not create a line with a start vertex which is not attached to a shape."))
if(r!=b.a)H.p(P.t("May not create a line with vertices attached to different shapes."))
s.bY(a)
s.bZ(b)
s.a.a.c.b.push(s)
s.a.a.a4()
return s},
kI:function(){var s=new F.iC(),r=new F.jj(s)
r.b=!1
r.c=H.d([],t.j)
s.a=r
r=new F.iF(s)
r.b=H.d([],t.k)
s.b=r
r=new F.iE(s)
r.b=H.d([],t.B)
s.c=r
r=new F.iD(s)
r.b=H.d([],t.b)
s.d=r
s.e=null
return s},
ji:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.fb(),p=new F.jr()
p.b=H.d([],t.k)
q.b=p
p=new F.jn()
s=t.B
p.b=H.d([],s)
p.c=H.d([],s)
q.c=p
p=new F.jk()
s=t.b
p.b=H.d([],s)
p.c=H.d([],s)
p.d=H.d([],s)
q.d=p
h=$.lb()
q.e=0
p=$.a5()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.aG().a)!==0?e:r
q.x=(s&$.b0().a)!==0?b:r
q.y=(s&$.as().a)!==0?f:r
q.z=(s&$.bk().a)!==0?g:r
q.Q=(s&$.lc().a)!==0?c:r
q.ch=(s&$.bE().a)!==0?i:0
q.cx=(s&$.b_().a)!==0?a:r
return q},
jQ:function jQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kk:function kk(){},
kl:function kl(a,b){this.a=a
this.b=b},
k2:function k2(){},
k3:function k3(a){this.a=a},
dS:function dS(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hQ:function hQ(){},
iJ:function iJ(){},
e6:function e6(){this.b=this.a=null},
i0:function i0(){},
j_:function j_(){},
es:function es(){this.a=null},
iC:function iC(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iD:function iD(a){this.a=a
this.b=null},
iE:function iE(a){this.a=a
this.b=null},
iF:function iF(a){this.a=a
this.b=null},
fb:function fb(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jt:function jt(a){this.a=a},
js:function js(a){this.a=a},
jj:function jj(a){this.a=a
this.c=this.b=null},
jk:function jk(){this.d=this.c=this.b=null},
jl:function jl(a,b){this.a=a
this.b=b},
jm:function jm(a,b){this.a=a
this.b=b},
jn:function jn(){this.c=this.b=null},
jp:function jp(){},
jo:function jo(){},
jq:function jq(){},
is:function is(){},
jr:function jr(){this.b=null}},T={
kJ:function(a){var s=new T.iP()
s.a=0
s.b=a
s.d=s.c=!1
s.x=s.r=s.f=s.e=0
return s},
eR:function eR(){},
iO:function iO(){},
iP:function iP(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iQ:function iQ(a){var _=this
_.a=a
_.e=_.d=_.b=null},
iR:function iR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iS:function iS(a,b,c){this.a=a
this.b=b
this.c=c}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kD.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gP:function(a){return H.cJ(a)},
i:function(a){return"Instance of '"+H.f(H.ev(a))+"'"}}
J.e0.prototype={
i:function(a){return String(a)},
gP:function(a){return a?519018:218159},
$iaX:1}
J.cv.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gP:function(a){return 0}}
J.b5.prototype={
gP:function(a){return 0},
i:function(a){return String(a)},
$ilu:1}
J.eq.prototype={}
J.bz.prototype={}
J.av.prototype={
i:function(a){var s=a[$.mO()]
if(s==null)return this.eo(a)
return"JavaScript function for "+H.f(J.a9(s))}}
J.v.prototype={
cs:function(a,b){if(!!a.fixed$length)H.p(P.z("removeAt"))
if(b<0||b>=a.length)throw H.c(P.ew(b,null))
return a.splice(b,1)[0]},
D:function(a,b){var s
if(!!a.fixed$length)H.p(P.z("remove"))
for(s=0;s<a.length;++s)if(J.C(a[s],b)){a.splice(s,1)
return!0}return!1},
aQ:function(a,b){var s,r
if(!!a.fixed$length)H.p(P.z("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.u)(b),++r)a.push(b[r])},
I:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.bJ(a))}},
u:function(a,b){var s,r,q=P.i3(a.length,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.f(a[s])
if(s>=q.length)return H.b(q,s)
q[s]=r}return q.join(b)},
hT:function(a){return this.u(a,"")},
hM:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.bJ(a))}return s},
hN:function(a,b,c){return this.hM(a,b,c,t.z)},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
cD:function(a,b){var s=a.length
if(b>s)throw H.c(P.a0(b,0,s,"start",null))
if(b===s)return H.d([],H.jR(a))
return H.d(a.slice(b,s),H.jR(a))},
ghL:function(a){if(a.length>0)return a[0]
throw H.c(H.lt())},
gaI:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.lt())},
aY:function(a,b){if(!!a.immutable$list)H.p(P.z("sort"))
H.nW(a,b==null?J.oU():b)},
el:function(a){return this.aY(a,null)},
S:function(a,b){var s
for(s=0;s<a.length;++s)if(J.C(a[s],b))return!0
return!1},
i:function(a){return P.kA(a,"[","]")},
gR:function(a){return new J.a1(a,a.length)},
gP:function(a){return H.cJ(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.p(P.z("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.ca(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.p(P.z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.ca(a,b))
a[b]=c},
$im:1,
$ii:1,
$io:1}
J.hY.prototype={}
J.a1.prototype={
gE:function(a){return this.d},
w:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.u(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bs.prototype={
aT:function(a,b){var s
if(typeof b!="number")throw H.c(H.ad(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbu(b)
if(this.gbu(a)===s)return 0
if(this.gbu(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbu:function(a){return a===0?1/a<0:a<0},
ip:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.z(""+a+".toInt()"))},
b6:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.z(""+a+".floor()"))},
a_:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.z(""+a+".round()"))},
ea:function(a,b){var s
if(b>20)throw H.c(P.a0(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbu(a))return"-"+s
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
j:function(a,b){if(typeof b!="number")throw H.c(H.ad(b))
return a*b},
ay:function(a,b){var s
if(typeof b!="number")throw H.c(H.ad(b))
s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
cH:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d6(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.d6(a,b)},
d6:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.z("Result of truncating division is "+H.f(s)+": "+H.f(a)+" ~/ "+b))},
aP:function(a,b){var s
if(a>0)s=this.d5(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hd:function(a,b){if(b<0)throw H.c(H.ad(b))
return this.d5(a,b)},
d5:function(a,b){return b>31?0:a>>>b},
$iW:1,
$iP:1}
J.cu.prototype={$ik:1}
J.ct.prototype={}
J.aL.prototype={
W:function(a,b){if(b<0)throw H.c(H.ca(a,b))
if(b>=a.length)H.p(H.ca(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.c(H.ca(a,b))
return a.charCodeAt(b)},
q:function(a,b){if(typeof b!="string")throw H.c(P.lf(b,null,null))
return a+b},
aW:function(a,b,c,d){var s,r,q=P.b9(b,c,a.length)
if(!H.bB(q))H.p(H.ad(q))
s=a.substring(0,b)
r=a.substring(q)
return s+d+r},
ac:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a0(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
al:function(a,b){return this.ac(a,b,0)},
t:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.ew(b,null))
if(b>c)throw H.c(P.ew(b,null))
if(c>a.length)throw H.c(P.ew(c,null))
return a.substring(b,c)},
am:function(a,b){return this.t(a,b,null)},
j:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.M)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ar:function(a,b){var s=b-a.length
if(s<=0)return a
return this.j(" ",s)+a},
i4:function(a,b,c){var s=b-a.length
if(s<=0)return a
return a+this.j(c,s)},
bs:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a0(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dM:function(a,b){return this.bs(a,b,0)},
hy:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.a0(c,0,s,null,null))
return H.mI(a,b,c)},
S:function(a,b){return this.hy(a,b,0)},
aT:function(a,b){var s
if(typeof b!="string")throw H.c(H.ad(b))
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
$iB:1}
H.e4.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.N.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.W(this.a,b)}}
H.m.prototype={}
H.bP.prototype={
gE:function(a){var s=this.d
return s},
w:function(){var s,r=this,q=r.a,p=J.aY(q),o=p.gl(q)
if(r.b!=o)throw H.c(P.bJ(q))
s=r.c
if(typeof o!=="number")return H.h(o)
if(s>=o){r.d=null
return!1}r.d=p.J(q,s);++r.c
return!0}}
H.bu.prototype={
gR:function(a){return new H.e8(J.bl(this.a),this.b)},
gl:function(a){return J.b1(this.a)},
J:function(a,b){return this.b.$1(J.kp(this.a,b))}}
H.cm.prototype={$im:1}
H.e8.prototype={
w:function(){var s=this,r=s.b
if(r.w()){s.a=s.c.$1(r.gE(r))
return!0}s.a=null
return!1},
gE:function(a){var s=this.a
return s}}
H.d0.prototype={
gR:function(a){return new H.fe(J.bl(this.a),this.b)}}
H.fe.prototype={
w:function(){var s,r
for(s=this.a,r=this.b;s.w();)if(r.$1(s.gE(s)))return!0
return!1},
gE:function(a){var s=this.a
return s.gE(s)}}
H.cp.prototype={}
H.f7.prototype={
k:function(a,b,c){throw H.c(P.z("Cannot modify an unmodifiable list"))}}
H.bZ.prototype={}
H.cg.prototype={
i:function(a){return P.kH(this)},
k:function(a,b,c){H.nk()},
$iH:1}
H.ch.prototype={
gl:function(a){return this.a},
c8:function(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.c8(0,b))return null
return this.cS(b)},
cS:function(a){return this.b[a]},
I:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.cS(q))}}}
H.iY.prototype={
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
H.ek.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.e2.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.f(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.f(r.a)+")"
return q+p+"' on '"+s+"' ("+H.f(r.a)+")"}}
H.f6.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.it.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.fU.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bH.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.mM(r==null?"unknown":r)+"'"},
giw:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iN.prototype={}
H.iK.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.mM(s)+"'"}}
H.cd.prototype={
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.cd))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gP:function(a){var s,r=this.c
if(r==null)s=H.cJ(this.a)
else s=typeof r!=="object"?J.ae(r):H.cJ(r)
return(s^H.cJ(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.ev(s))+"'")}}
H.eA.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.A.prototype={
gl:function(a){return this.a},
gap:function(a){return new H.cx(this)},
giv:function(a){return H.nz(this.gap(this),new H.hZ(this))},
c8:function(a,b){var s=this.b
if(s==null)return!1
return this.eL(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bi(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bi(p,b)
q=r==null?n:r.b
return q}else return o.hQ(b)},
hQ:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.cT(p,q.dN(a))
r=q.dO(s,a)
if(r<0)return null
return s[r].b},
k:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cM(s==null?q.b=q.bR():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cM(r==null?q.c=q.bR():r,b,c)}else q.hR(b,c)},
hR:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bR()
s=p.dN(a)
r=p.cT(o,s)
if(r==null)p.bW(o,s,[p.bS(a,b)])
else{q=p.dO(r,a)
if(q>=0)r[q].b=b
else r.push(p.bS(a,b))}},
I:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.bJ(s))
r=r.c}},
cM:function(a,b,c){var s=this.bi(a,b)
if(s==null)this.bW(a,b,this.bS(b,c))
else s.b=c},
bS:function(a,b){var s=this,r=new H.i1(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
dN:function(a){return J.ae(a)&0x3ffffff},
dO:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.C(a[r].a,b))return r
return-1},
i:function(a){return P.kH(this)},
bi:function(a,b){return a[b]},
cT:function(a,b){return a[b]},
bW:function(a,b,c){a[b]=c},
eO:function(a,b){delete a[b]},
eL:function(a,b){return this.bi(a,b)!=null},
bR:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bW(r,s,r)
this.eO(r,s)
return r}}
H.hZ.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.ms(this.a).X("2(1)")}}
H.i1.prototype={}
H.cx.prototype={
gl:function(a){return this.a.a},
gR:function(a){var s=this.a,r=new H.e7(s,s.r)
r.c=s.e
return r}}
H.e7.prototype={
gE:function(a){return this.d},
w:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.bJ(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.k5.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.k6.prototype={
$2:function(a,b){return this.a(a,b)}}
H.k7.prototype={
$1:function(a){return this.a(a)}}
H.e1.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ilN:1}
H.cF.prototype={$icF:1}
H.U.prototype={$iU:1}
H.bT.prototype={
gl:function(a){return a.length},
$iy:1}
H.bv.prototype={
h:function(a,b){H.aW(b,a,a.length)
return a[b]},
k:function(a,b,c){H.aW(b,a,a.length)
a[b]=c},
$im:1,
$ii:1,
$io:1}
H.cG.prototype={
k:function(a,b,c){H.aW(b,a,a.length)
a[b]=c},
$im:1,
$ii:1,
$io:1}
H.ef.prototype={
h:function(a,b){H.aW(b,a,a.length)
return a[b]}}
H.eg.prototype={
h:function(a,b){H.aW(b,a,a.length)
return a[b]}}
H.eh.prototype={
h:function(a,b){H.aW(b,a,a.length)
return a[b]}}
H.ei.prototype={
h:function(a,b){H.aW(b,a,a.length)
return a[b]}}
H.ej.prototype={
h:function(a,b){H.aW(b,a,a.length)
return a[b]}}
H.cH.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aW(b,a,a.length)
return a[b]}}
H.bU.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aW(b,a,a.length)
return a[b]},
$ibU:1,
$ibc:1}
H.d6.prototype={}
H.d7.prototype={}
H.d8.prototype={}
H.d9.prototype={}
H.an.prototype={
X:function(a){return H.h5(v.typeUniverse,this,a)},
bH:function(a){return H.os(v.typeUniverse,this,a)}}
H.fw.prototype={}
H.fr.prototype={
i:function(a){return this.a}}
H.dh.prototype={}
P.jv.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:17}
P.ju.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.jw.prototype={
$0:function(){this.a.$0()}}
P.jx.prototype={
$0:function(){this.a.$0()}}
P.dg.prototype={
ez:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c9(new P.jK(this,b),0),a)
else throw H.c(P.z("`setTimeout()` not found."))},
eA:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c9(new P.jJ(this,a,Date.now(),b),0),a)
else throw H.c(P.z("Periodic timer."))},
$icP:1}
P.jK.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jJ.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.cH(s,o)}q.c=p
r.d.$1(q)}}
P.c3.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.c4.prototype={
gE:function(a){var s=this.c
if(s==null)return this.b
return s.gE(s)},
w:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.w())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.c3){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.b(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.bl(s)
if(o instanceof P.c4){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dd.prototype={
gR:function(a){return new P.c4(this.a())}}
P.ff.prototype={}
P.cO.prototype={}
P.eL.prototype={}
P.cP.prototype={}
P.jP.prototype={}
P.jZ.prototype={
$0:function(){var s=H.c(this.a)
s.stack=J.a9(this.b)
throw s}}
P.jC.prototype={
ik:function(a){var s,r,q,p=null
try{if(C.f===$.aF){a.$0()
return}P.pp(p,p,this,a)}catch(q){s=H.bj(q)
r=H.l6(q)
P.mu(p,p,this,s,r)}},
il:function(a,b){var s,r,q,p=null
try{if(C.f===$.aF){a.$1(b)
return}P.pq(p,p,this,a,b)}catch(q){s=H.bj(q)
r=H.l6(q)
P.mu(p,p,this,s,r)}},
im:function(a,b){return this.il(a,b,t.z)},
hv:function(a){return new P.jD(this,a)},
de:function(a,b){return new P.jE(this,a,b)}}
P.jD.prototype={
$0:function(){return this.a.ik(this.b)}}
P.jE.prototype={
$1:function(a){return this.a.im(this.b,a)},
$S:function(){return this.c.X("~(0)")}}
P.d2.prototype={
gR:function(a){var s=new P.d3(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
S:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.eI(b)
return r}},
eI:function(a){var s=this.d
if(s==null)return!1
return this.bO(s[this.bK(a)],a)>=0},
m:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cO(s==null?q.b=P.kP():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cO(r==null?q.c=P.kP():r,b)}else return q.eC(0,b)},
eC:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.kP()
s=q.bK(b)
r=p[s]
if(r==null)p[s]=[q.bJ(b)]
else{if(q.bO(r,b)>=0)return!1
r.push(q.bJ(b))}return!0},
D:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.h1(this.c,b)
else return this.h0(0,b)},
h0:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bK(b)
r=n[s]
q=o.bO(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.d8(p)
return!0},
cO:function(a,b){if(a[b]!=null)return!1
a[b]=this.bJ(b)
return!0},
h1:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.d8(s)
delete a[b]
return!0},
cW:function(){this.r=1073741823&this.r+1},
bJ:function(a){var s,r=this,q=new P.jB(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cW()
return q},
d8:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cW()},
bK:function(a){return J.ae(a)&1073741823},
bO:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.C(a[r].a,b))return r
return-1}}
P.jB.prototype={}
P.d3.prototype={
gE:function(a){return this.d},
w:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.bJ(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cs.prototype={}
P.i2.prototype={
$2:function(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:3}
P.cy.prototype={$im:1,$ii:1,$io:1}
P.j.prototype={
gR:function(a){return new H.bP(a,this.gl(a))},
J:function(a,b){return this.h(a,b)},
gdP:function(a){return this.gl(a)===0},
iq:function(a){var s,r,q,p,o=this
if(o.gdP(a)){s=J.kB(0,H.bC(a).X("j.E"))
return s}r=o.h(a,0)
q=P.i3(o.gl(a),r,!0,H.bC(a).X("j.E"))
p=1
while(!0){s=o.gl(a)
if(typeof s!=="number")return H.h(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.b(q,p)
q[p]=s;++p}return q},
hJ:function(a,b,c,d){var s
P.b9(b,c,this.gl(a))
for(s=b;s<c;++s)this.k(a,s,d)},
i:function(a){return P.kA(a,"[","]")}}
P.cA.prototype={}
P.i6.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.f(a)
r.a=s+": "
r.a+=H.f(b)},
$S:18}
P.aw.prototype={
I:function(a,b){var s,r
for(s=J.bl(this.gap(a));s.w();){r=s.gE(s)
b.$2(r,this.h(a,r))}},
gl:function(a){return J.b1(this.gap(a))},
i:function(a){return P.kH(a)},
$iH:1}
P.h6.prototype={
k:function(a,b,c){throw H.c(P.z("Cannot modify unmodifiable map"))}}
P.cB.prototype={
h:function(a,b){return J.cc(this.a,b)},
k:function(a,b,c){J.kn(this.a,b,c)},
I:function(a,b){J.kq(this.a,b)},
gl:function(a){return J.b1(this.a)},
i:function(a){return J.a9(this.a)},
$iH:1}
P.c_.prototype={}
P.da.prototype={
i:function(a){return P.kA(this,"{","}")},
J:function(a,b){var s,r,q,p="index"
P.nb(b,p)
P.lM(b,p)
for(s=P.oc(this,this.r),r=0;s.w();){q=s.d
if(b===r)return q;++r}throw H.c(P.M(b,this,p,null,r))},
$im:1,
$ii:1}
P.d4.prototype={}
P.dl.prototype={}
P.jf.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.bj(r)}return null}}
P.jg.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.bj(r)}return null}}
P.hq.prototype={
hW:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a3=P.b9(a2,a3,a1.length)
if(a3==null)throw H.c(P.lL("Invalid range"))
s=$.n1()
for(r=a2,q=r,p=null,o=-1,n=-1,m=0;r<a3;r=l){l=r+1
k=C.a.G(a1,r)
if(k===37){j=l+2
if(j<=a3){i=H.k4(C.a.G(a1,l))
h=H.k4(C.a.G(a1,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.b(s,g)
f=s[g]
if(f>=0){g=C.a.W("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?null:p.a.length
if(e==null)e=0
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new P.Q("")
e=p}else e=p
d=e.a+=C.a.t(a1,q,r)
e.a=d+H.aS(k)
q=l
continue}}throw H.c(P.a2("Invalid base64 data",a1,r))}if(p!=null){e=p.a+=C.a.t(a1,q,a3)
d=e.length
if(o>=0)P.lg(a1,n,a3,o,m,d)
else{c=C.c.ay(d-1,4)+1
if(c===1)throw H.c(P.a2(a,a1,a3))
for(;c<4;){e+="="
p.a=e;++c}}e=p.a
return C.a.aW(a1,a2,a3,e.charCodeAt(0)==0?e:e)}b=a3-a2
if(o>=0)P.lg(a1,n,a3,o,m,b)
else{c=C.c.ay(b,4)
if(c===1)throw H.c(P.a2(a,a1,a3))
if(c>1)a1=C.a.aW(a1,a3,a3,c===2?"==":"=")}return a1}}
P.hr.prototype={}
P.dJ.prototype={}
P.dL.prototype={}
P.hK.prototype={}
P.jd.prototype={
ghI:function(){return C.N}}
P.jh.prototype={
c9:function(a){var s,r,q,p=P.b9(0,null,a.length)
if(p==null)throw H.c(P.lL("Invalid range"))
s=p-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.jO(r)
if(q.eQ(a,0,p)!==p){J.n7(a,p-1)
q.c0()}return new Uint8Array(r.subarray(0,H.oM(0,q.b,r.length)))}}
P.jO.prototype={
c0:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.b(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.b(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.b(r,q)
r[q]=189},
hl:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.b(r,q)
r[q]=240|s>>>18
q=n.b=p+1
if(p>=o)return H.b(r,p)
r[p]=128|s>>>12&63
p=n.b=q+1
if(q>=o)return H.b(r,q)
r[q]=128|s>>>6&63
n.b=p+1
if(p>=o)return H.b(r,p)
r[p]=128|s&63
return!0}else{n.c0()
return!1}},
eQ:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.W(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.G(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.hl(p,C.a.G(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.c0()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.b(s,o)
s[o]=192|p>>>6
l.b=m+1
s[m]=128|p&63}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.b(s,o)
s[o]=224|p>>>12
o=l.b=m+1
if(m>=r)return H.b(s,m)
s[m]=128|p>>>6&63
l.b=o+1
if(o>=r)return H.b(s,o)
s[o]=128|p&63}}}return q}}
P.je.prototype={
c9:function(a){var s=this.a,r=P.o3(s,a,0,null)
if(r!=null)return r
return new P.jN(s).hz(a,0,null,!0)}}
P.jN.prototype={
hz:function(a,b,c,d){var s,r,q,p,o=this,n=P.b9(b,c,J.b1(a))
if(b===n)return""
s=P.oH(a,b,n)
if(typeof n!=="number")return n.v()
n-=b
r=o.bL(s,0,n,!0)
q=o.b
if((q&1)!==0){p=P.oI(q)
o.b=0
throw H.c(P.a2(p,a,b+o.c))}return r},
bL:function(a,b,c,d){var s,r,q=this
if(typeof c!=="number")return c.v()
if(c-b>1000){s=C.c.a2(b+c,2)
r=q.bL(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bL(a,s,c,d)}return q.hD(a,b,c,d)},
hD:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.Q(""),f=b+1,e=a.length
if(b<0||b>=e)return H.b(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.G("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.G(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.aS(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.aS(j)
break
case 65:g.a+=H.aS(j);--f
break
default:p=g.a+=H.aS(j)
g.a=p+H.aS(j)
break}else{k.b=i
k.c=f-1
return""}i=0}if(f===c)break $label0$0
o=f+1
if(f<0||f>=e)return H.b(a,f)
s=a[f]}o=f+1
if(f<0||f>=e)return H.b(a,f)
s=a[f]
if(s<128){while(!0){if(!(o<c)){n=c
break}m=o+1
if(o<0||o>=e)return H.b(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-f<20)for(l=f;l<n;++l){if(l>=e)return H.b(a,l)
g.a+=H.aS(a[l])}else g.a+=P.eN(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.aS(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.aX.prototype={}
P.ag.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.ag&&this.a===b.a&&!0},
aT:function(a,b){return C.c.aT(this.a,b.a)},
gP:function(a){var s=this.a
return(s^C.c.aP(s,30))&1073741823},
i:function(a){var s=this,r=P.nl(H.nM(s)),q=P.dN(H.nK(s)),p=P.dN(H.nG(s)),o=P.dN(H.nH(s)),n=P.dN(H.nJ(s)),m=P.dN(H.nL(s)),l=P.nm(H.nI(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.W.prototype={}
P.bo.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.bo&&this.a===b.a},
gP:function(a){return C.c.gP(this.a)},
aT:function(a,b){return C.c.aT(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hI(),o=this.a
if(o<0)return"-"+new P.bo(0-o).i(0)
s=p.$1(C.c.a2(o,6e7)%60)
r=p.$1(C.c.a2(o,1e6)%60)
q=new P.hH().$1(o%1e6)
return""+C.c.a2(o,36e8)+":"+H.f(s)+":"+H.f(r)+"."+H.f(q)}}
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
P.J.prototype={}
P.dA.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.hN(s)
return"Assertion failed"}}
P.el.prototype={
i:function(a){return"Throw of null."}}
P.ak.prototype={
gbN:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbM:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbN()+o+m
if(!q.a)return l
s=q.gbM()
r=P.hN(q.b)
return l+s+": "+r}}
P.bX.prototype={
gbN:function(){return"RangeError"},
gbM:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.f(q):""
else if(q==null)s=": Not greater than or equal to "+H.f(r)
else if(q>r)s=": Not in inclusive range "+H.f(r)+".."+H.f(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.f(r)
return s}}
P.dZ.prototype={
gbN:function(){return"RangeError"},
gbM:function(){var s,r=this.b
if(typeof r!=="number")return r.ak()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.f(s)},
gl:function(a){return this.f}}
P.f8.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.f5.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.eJ.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dK.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hN(s)+"."}}
P.eo.prototype={
i:function(a){return"Out of Memory"},
$iJ:1}
P.cN.prototype={
i:function(a){return"Stack Overflow"},
$iJ:1}
P.dM.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.ft.prototype={
i:function(a){return"Exception: "+this.a}}
P.hT.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.t(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.G(d,o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}f=r>1?f+(" (at line "+r+", character "+(e-q+1)+")\n"):f+(" (at character "+(e+1)+")\n")
m=d.length
for(o=e;o<m;++o){n=C.a.W(d,o)
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
return f+j+h+i+"\n"+C.a.j(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.f(e)+")"):f}}
P.k.prototype={}
P.i.prototype={
gl:function(a){var s,r=this.gR(this)
for(s=0;r.w();)++s
return s},
J:function(a,b){var s,r,q
P.lM(b,"index")
for(s=this.gR(this),r=0;s.w();){q=s.gE(s)
if(b===r)return q;++r}throw H.c(P.M(b,this,"index",null,r))},
i:function(a){return P.np(this,"(",")")}}
P.e_.prototype={}
P.o.prototype={$im:1,$ii:1}
P.H.prototype={}
P.am.prototype={
gP:function(a){return P.L.prototype.gP.call(C.j,this)},
i:function(a){return"null"}}
P.P.prototype={}
P.L.prototype={constructor:P.L,$iL:1,
p:function(a,b){return this===b},
gP:function(a){return H.cJ(this)},
i:function(a){return"Instance of '"+H.f(H.ev(this))+"'"},
toString:function(){return this.i(this)}}
P.B.prototype={}
P.Q.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jb.prototype={
$2:function(a,b){var s,r,q,p=J.l5(b).dM(b,"=")
if(p===-1){if(b!=="")J.kn(a,P.kY(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.t(b,0,p)
r=C.a.am(b,p+1)
q=this.a
J.kn(a,P.kY(s,0,s.length,q,!0),P.kY(r,0,r.length,q,!0))}return a}}
P.j8.prototype={
$2:function(a,b){throw H.c(P.a2("Illegal IPv4 address, "+a,this.a,b))}}
P.j9.prototype={
$2:function(a,b){throw H.c(P.a2("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.ja.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.k8(C.a.t(this.b,a,b),16)
if(typeof s!=="number")return s.ak()
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s}}
P.bA.prototype={
gc_:function(){var s,r,q,p=this,o=p.x
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
else o=H.p(H.kF("Field '_text' has been assigned during initialization."))}return o},
gP:function(a){var s=this,r=s.z
if(r==null){r=C.a.gP(s.gc_())
if(s.z==null)s.z=r
else r=H.p(H.kF("Field 'hashCode' has been assigned during initialization."))}return r},
gbz:function(){var s=this,r=s.Q
if(r==null){r=new P.c_(P.lY(s.gbd(s)),t.U)
if(s.Q==null)s.Q=r
else r=H.p(H.kF("Field 'queryParameters' has been assigned during initialization."))}return r},
ged:function(){return this.b},
gcm:function(a){var s=this.c
if(s==null)return""
if(C.a.al(s,"["))return C.a.t(s,1,s.length-1)
return s},
gbx:function(a){var s=this.d
return s==null?P.mj(this.a):s},
gbd:function(a){var s=this.f
return s==null?"":s},
gcl:function(){var s=this.r
return s==null?"":s},
e5:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.al(s,"/"))s="/"+s
q=s
p=P.kW(null,0,0,b)
return new P.bA(n,l,j,k,q,p,o.r)},
gdI:function(){return this.c!=null},
gdL:function(){return this.f!=null},
gdJ:function(){return this.r!=null},
i:function(a){return this.gc_()},
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return t.R.b(b)&&s.a===b.gbF()&&s.c!=null===b.gdI()&&s.b===b.ged()&&s.gcm(s)===b.gcm(b)&&s.gbx(s)===b.gbx(b)&&s.e===b.ge2(b)&&s.f!=null===b.gdL()&&s.gbd(s)===b.gbd(b)&&s.r!=null===b.gdJ()&&s.gcl()===b.gcl()},
$if9:1,
gbF:function(){return this.a},
ge2:function(a){return this.e}}
P.jM.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=H.f(P.kZ(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=H.f(P.kZ(C.h,b,C.e,!0))}}}
P.jL.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.bl(b),r=this.a;s.w();)r.$2(a,s.gE(s))}}
P.j7.prototype={
gec:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.b(m,0)
s=o.a
m=m[0]+1
r=C.a.bs(s,"?",m)
q=s.length
if(r>=0){p=P.dm(s,r+1,q,C.l,!1)
q=r}else p=n
m=o.c=new P.fl("data","",n,n,P.dm(s,m,q,C.x,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.b(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.jU.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jT.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.b(s,a)
s=s[a]
J.n8(s,0,96,b)
return s},
$S:19}
P.jV.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=b.length,r=a.length,q=0;q<s;++q){p=C.a.G(b,q)^96
if(p>=r)return H.b(a,p)
a[p]=c}}}
P.jW.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=C.a.G(b,0),r=C.a.G(b,1),q=a.length;s<=r;++s){p=(s^96)>>>0
if(p>=q)return H.b(a,p)
a[p]=c}}}
P.fO.prototype={
gdI:function(){return this.c>0},
gdK:function(){return this.c>0&&this.d+1<this.e},
gdL:function(){return this.f<this.r},
gdJ:function(){return this.r<this.a.length},
gcU:function(){return this.b===4&&C.a.al(this.a,"http")},
gcV:function(){return this.b===5&&C.a.al(this.a,"https")},
gbF:function(){var s=this.x
return s==null?this.x=this.eJ():s},
eJ:function(){var s=this,r=s.b
if(r<=0)return""
if(s.gcU())return"http"
if(s.gcV())return"https"
if(r===4&&C.a.al(s.a,"file"))return"file"
if(r===7&&C.a.al(s.a,"package"))return"package"
return C.a.t(s.a,0,r)},
ged:function(){var s=this.c,r=this.b+3
return s>r?C.a.t(this.a,r,s-1):""},
gcm:function(a){var s=this.c
return s>0?C.a.t(this.a,s,this.d):""},
gbx:function(a){var s=this
if(s.gdK())return P.k8(C.a.t(s.a,s.d+1,s.e),null)
if(s.gcU())return 80
if(s.gcV())return 443
return 0},
ge2:function(a){return C.a.t(this.a,this.e,this.f)},
gbd:function(a){var s=this.f,r=this.r
return s<r?C.a.t(this.a,s+1,r):""},
gcl:function(){var s=this.r,r=this.a
return s<r.length?C.a.am(r,s+1):""},
gbz:function(){var s=this
if(s.f>=s.r)return C.X
return new P.c_(P.lY(s.gbd(s)),t.U)},
e5:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbF(),k=l==="file",j=n.c,i=j>0?C.a.t(n.a,n.b+3,j):"",h=n.gdK()?n.gbx(n):m
j=n.c
if(j>0)s=C.a.t(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.t(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.al(r,"/"))r="/"+r
p=P.kW(m,0,0,b)
q=n.r
o=q<j.length?C.a.am(j,q+1):m
return new P.bA(l,i,s,h,r,p,o)},
gP:function(a){var s=this.y
return s==null?this.y=C.a.gP(this.a):s},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$if9:1}
P.fl.prototype={}
W.q.prototype={}
W.hj.prototype={
gl:function(a){return a.length}}
W.dy.prototype={
i:function(a){return String(a)}}
W.dz.prototype={
i:function(a){return String(a)}}
W.bm.prototype={$ibm:1}
W.bn.prototype={
cw:function(a,b,c){if(c!=null)return a.getContext(b,P.pE(c))
return a.getContext(b)},
eh:function(a,b){return this.cw(a,b,null)},
$ibn:1}
W.at.prototype={
gl:function(a){return a.length}}
W.hz.prototype={
gl:function(a){return a.length}}
W.I.prototype={$iI:1}
W.cj.prototype={
gl:function(a){return a.length}}
W.hA.prototype={}
W.al.prototype={}
W.aI.prototype={}
W.hB.prototype={
gl:function(a){return a.length}}
W.hC.prototype={
gl:function(a){return a.length}}
W.hD.prototype={
gl:function(a){return a.length}}
W.hF.prototype={
i:function(a){return String(a)}}
W.ck.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iy:1,
$ii:1,
$io:1}
W.cl.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gau(a))+" x "+H.f(this.gao(a))},
p:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.bi(b)
s=a.left==s.gbv(b)&&a.top==s.gbD(b)&&this.gau(a)==s.gau(b)&&this.gao(a)==s.gao(b)}else s=!1
return s},
gP:function(a){return W.mb(J.ae(a.left),J.ae(a.top),J.ae(this.gau(a)),J.ae(this.gao(a)))},
gdg:function(a){return a.bottom},
gao:function(a){return a.height},
gbv:function(a){return a.left},
gbB:function(a){return a.right},
gbD:function(a){return a.top},
gau:function(a){return a.width},
$ia7:1}
W.dR.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iy:1,
$ii:1,
$io:1}
W.hG.prototype={
gl:function(a){return a.length}}
W.fi.prototype={
gdP:function(a){return this.a.firstElementChild==null},
gl:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.b(s,b)
return t.h.a(s[b])},
k:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.b(s,b)
this.a.replaceChild(c,s[b])},
m:function(a,b){this.a.appendChild(b)
return b},
gR:function(a){var s=this.iq(this)
return new J.a1(s,s.length)}}
W.G.prototype={
gdh:function(a){return new W.fi(a,a.children)},
gdi:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.ak()
if(q<0)q=-q*0
if(typeof p!=="number")return p.ak()
if(p<0)p=-p*0
return new P.a7(s,r,q,p,t.I)},
i:function(a){return a.localName},
$iG:1}
W.l.prototype={$il:1}
W.e.prototype={
hn:function(a,b,c,d){if(c!=null)this.eD(a,b,c,!1)},
eD:function(a,b,c,d){return a.addEventListener(b,H.c9(c,1),!1)},
$ie:1}
W.ah.prototype={$iah:1}
W.bK.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iy:1,
$ii:1,
$io:1,
$ibK:1}
W.dT.prototype={
gl:function(a){return a.length}}
W.dV.prototype={
gl:function(a){return a.length}}
W.au.prototype={$iau:1}
W.hW.prototype={
gl:function(a){return a.length}}
W.bq.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iy:1,
$ii:1,
$io:1}
W.br.prototype={
gdl:function(a){return a.data},
$ibr:1}
W.bM.prototype={$ibM:1}
W.bO.prototype={$ibO:1}
W.dI.prototype={$iG:1,$ie:1,$iw:1}
W.bt.prototype={$ibt:1}
W.i4.prototype={
i:function(a){return String(a)}}
W.io.prototype={
gl:function(a){return a.length}}
W.bQ.prototype={$ibQ:1}
W.ec.prototype={
h:function(a,b){return P.bh(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bh(s.value[1]))}},
gap:function(a){var s=H.d([],t.s)
this.I(a,new W.ip(s))
return s},
gl:function(a){return a.size},
k:function(a,b,c){throw H.c(P.z("Not supported"))},
$iH:1}
W.ip.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ed.prototype={
h:function(a,b){return P.bh(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bh(s.value[1]))}},
gap:function(a){var s=H.d([],t.s)
this.I(a,new W.iq(s))
return s},
gl:function(a){return a.size},
k:function(a,b,c){throw H.c(P.z("Not supported"))},
$iH:1}
W.iq.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ay.prototype={$iay:1}
W.ee.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iy:1,
$ii:1,
$io:1}
W.ai.prototype={$iai:1}
W.fh.prototype={
k:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.b(r,b)
s.replaceChild(c,r[b])},
gR:function(a){var s=this.a.childNodes
return new W.cq(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.b(s,b)
return s[b]}}
W.w.prototype={
ii:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.n5(s,b,a)}catch(q){H.bj(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.en(a):s},
h3:function(a,b,c){return a.replaceChild(b,c)},
$iw:1}
W.cI.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iy:1,
$ii:1,
$io:1}
W.aA.prototype={
gl:function(a){return a.length},
$iaA:1}
W.er.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iy:1,
$ii:1,
$io:1}
W.ez.prototype={
h:function(a,b){return P.bh(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bh(s.value[1]))}},
gap:function(a){var s=H.d([],t.s)
this.I(a,new W.iA(s))
return s},
gl:function(a){return a.size},
k:function(a,b,c){throw H.c(P.z("Not supported"))},
$iH:1}
W.iA.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eB.prototype={
gl:function(a){return a.length}}
W.ao.prototype={$iao:1}
W.eD.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iy:1,
$ii:1,
$io:1}
W.aB.prototype={$iaB:1}
W.eE.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iy:1,
$ii:1,
$io:1}
W.aC.prototype={
gl:function(a){return a.length},
$iaC:1}
W.eK.prototype={
h:function(a,b){return a.getItem(H.oK(b))},
k:function(a,b,c){a.setItem(b,c)},
I:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gap:function(a){var s=H.d([],t.s)
this.I(a,new W.iL(s))
return s},
gl:function(a){return a.length},
$iH:1}
W.iL.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ap.prototype={$iap:1}
W.bb.prototype={$ibb:1}
W.aq.prototype={$iaq:1}
W.ab.prototype={$iab:1}
W.eP.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iy:1,
$ii:1,
$io:1}
W.eQ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iy:1,
$ii:1,
$io:1}
W.iU.prototype={
gl:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.by.prototype={$iby:1}
W.eX.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iy:1,
$ii:1,
$io:1}
W.iX.prototype={
gl:function(a){return a.length}}
W.aV.prototype={}
W.jc.prototype={
i:function(a){return String(a)}}
W.fc.prototype={
gl:function(a){return a.length}}
W.bd.prototype={
ghF:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.z("deltaY is not supported"))},
ghE:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.z("deltaX is not supported"))},
$ibd:1}
W.c2.prototype={
h4:function(a,b){return a.requestAnimationFrame(H.c9(b,1))},
eP:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.fj.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iy:1,
$ii:1,
$io:1}
W.d1.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
p:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.bi(b)
s=a.left==s.gbv(b)&&a.top==s.gbD(b)&&a.width==s.gau(b)&&a.height==s.gao(b)}else s=!1
return s},
gP:function(a){return W.mb(J.ae(a.left),J.ae(a.top),J.ae(a.width),J.ae(a.height))},
gao:function(a){return a.height},
gau:function(a){return a.width}}
W.fx.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iy:1,
$ii:1,
$io:1}
W.d5.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iy:1,
$ii:1,
$io:1}
W.fR.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iy:1,
$ii:1,
$io:1}
W.fY.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iy:1,
$ii:1,
$io:1}
W.ky.prototype={}
W.fs.prototype={
hk:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.n6(s,this.c,r,!1)}}}
W.jy.prototype={
$1:function(a){return this.a.$1(a)}}
W.kO.prototype={}
W.K.prototype={
gR:function(a){return new W.cq(a,this.gl(a))}}
W.cq.prototype={
w:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.cc(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gE:function(a){return this.d}}
W.fk.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fy.prototype={}
W.fz.prototype={}
W.fC.prototype={}
W.fD.prototype={}
W.fE.prototype={}
W.fF.prototype={}
W.fG.prototype={}
W.fH.prototype={}
W.fK.prototype={}
W.fL.prototype={}
W.fN.prototype={}
W.db.prototype={}
W.dc.prototype={}
W.fP.prototype={}
W.fQ.prototype={}
W.fV.prototype={}
W.fZ.prototype={}
W.h_.prototype={}
W.de.prototype={}
W.df.prototype={}
W.h0.prototype={}
W.h1.prototype={}
W.h7.prototype={}
W.h8.prototype={}
W.h9.prototype={}
W.ha.prototype={}
W.hb.prototype={}
W.hc.prototype={}
W.hd.prototype={}
W.he.prototype={}
W.hf.prototype={}
W.hg.prototype={}
P.jF.prototype={
ck:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bE:function(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(H.l0(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.ag)return new Date(a.a)
if(t.fv.b(a))throw H.c(P.j6("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.G.b(a))return a
if(t.bX.b(a))return a
if(t.u.b(a))return a
if(t.o.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.eO.b(a)){s=o.ck(a)
r=o.b
q=r.length
if(s>=q)return H.b(r,s)
p=n.a=r[s]
if(p!=null)return p
p={}
n.a=p
if(s>=q)return H.b(r,s)
r[s]=p
J.kq(a,new P.jH(n,o))
return n.a}if(t.aH.b(a)){s=o.ck(a)
n=o.b
if(s>=n.length)return H.b(n,s)
p=n[s]
if(p!=null)return p
return o.hB(a,s)}if(t.eH.b(a)){s=o.ck(a)
r=o.b
q=r.length
if(s>=q)return H.b(r,s)
p=n.b=r[s]
if(p!=null)return p
p={}
n.b=p
if(s>=q)return H.b(r,s)
r[s]=p
o.hO(a,new P.jI(n,o))
return n.b}throw H.c(P.j6("structured clone of other type"))},
hB:function(a,b){var s,r=J.aY(a),q=r.gl(a),p=new Array(q),o=this.b
if(b>=o.length)return H.b(o,b)
o[b]=p
if(typeof q!=="number")return H.h(q)
s=0
for(;s<q;++s){o=this.bE(r.h(a,s))
if(s>=p.length)return H.b(p,s)
p[s]=o}return p}}
P.jH.prototype={
$2:function(a,b){this.a.a[a]=this.b.bE(b)},
$S:3}
P.jI.prototype={
$2:function(a,b){this.a.b[a]=this.b.bE(b)},
$S:3}
P.di.prototype={$ibr:1,
gdl:function(a){return this.a}}
P.k_.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jG.prototype={
hO:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<r;++q){p=s[q]
b.$2(p,a[p])}}}
P.dU.prototype={
gbj:function(){return new H.bu(new H.d0(this.b,new P.hR()),new P.hS())},
k:function(a,b,c){var s=this.gbj()
J.na(s.b.$1(J.kp(s.a,b)),c)},
m:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.b1(this.gbj().a)},
h:function(a,b){var s=this.gbj()
return s.b.$1(J.kp(s.a,b))},
gR:function(a){var s=P.kG(this.gbj(),!1,t.h)
return new J.a1(s,s.length)}}
P.hR.prototype={
$1:function(a){return t.h.b(a)}}
P.hS.prototype={
$1:function(a){return t.h.a(a)}}
P.fM.prototype={
gbB:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.h(r)
return this.$ti.c.a(s+r)},
gdg:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.h(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.f(s.a)+", "+H.f(s.b)+") "+H.f(s.c)+" x "+H.f(s.d)},
p:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.I.b(b)){s=n.a
r=J.bi(b)
if(s==r.gbv(b)){q=n.b
if(q==r.gbD(b)){p=n.c
if(typeof s!=="number")return s.q()
if(typeof p!=="number")return H.h(p)
o=n.$ti.c
if(o.a(s+p)===r.gbB(b)){s=n.d
if(typeof q!=="number")return q.q()
if(typeof s!=="number")return H.h(s)
r=o.a(q+s)===r.gdg(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gP:function(a){var s,r=this,q=r.a,p=J.ae(q),o=r.b,n=J.ae(o),m=r.c
if(typeof q!=="number")return q.q()
if(typeof m!=="number")return H.h(m)
s=r.$ti.c
m=C.c.gP(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.q()
if(typeof q!=="number")return H.h(q)
q=C.c.gP(s.a(o+q))
return P.ob(P.jA(P.jA(P.jA(P.jA(0,p),n),m),q))}}
P.a7.prototype={
gbv:function(a){return this.a},
gbD:function(a){return this.b},
gau:function(a){return this.c},
gao:function(a){return this.d}}
P.aM.prototype={$iaM:1}
P.e5.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$im:1,
$ii:1,
$io:1}
P.aP.prototype={$iaP:1}
P.em.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$im:1,
$ii:1,
$io:1}
P.iu.prototype={
gl:function(a){return a.length}}
P.eM.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$im:1,
$ii:1,
$io:1}
P.n.prototype={
gdh:function(a){return new P.dU(a,new W.fh(a))}}
P.aT.prototype={$iaT:1}
P.eY.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$im:1,
$ii:1,
$io:1}
P.fA.prototype={}
P.fB.prototype={}
P.fI.prototype={}
P.fJ.prototype={}
P.fW.prototype={}
P.fX.prototype={}
P.h2.prototype={}
P.h3.prototype={}
P.bc.prototype={$im:1,$ii:1,$io:1}
P.hn.prototype={
gl:function(a){return a.length}}
P.dC.prototype={
h:function(a,b){return P.bh(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bh(s.value[1]))}},
gap:function(a){var s=H.d([],t.s)
this.I(a,new P.ho(s))
return s},
gl:function(a){return a.size},
k:function(a,b,c){throw H.c(P.z("Not supported"))},
$iH:1}
P.ho.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dD.prototype={
gl:function(a){return a.length}}
P.b2.prototype={}
P.en.prototype={
gl:function(a){return a.length}}
P.fg.prototype={}
P.ey.prototype={
e8:function(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&H.bB(g)){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}if(t.u.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,P.pF(g))
return}if(t.fS.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.bF("Incorrect number or type of arguments"))},
io:function(a,b,c,d,e,f,g){return this.e8(a,b,c,d,e,f,g,null,null,null)}}
P.eH.prototype={
gl:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
s=P.bh(a.item(b))
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$im:1,
$ii:1,
$io:1}
P.fS.prototype={}
P.fT.prototype={}
K.hk.prototype={
aV:function(a,b){return!0},
i:function(a){return"all"}}
K.dY.prototype={
aV:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q)if(s[q].aV(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.u)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.i7.prototype={}
K.b7.prototype={
aV:function(a,b){return!this.em(0,b)},
i:function(a){return"!["+this.cE(0)+"]"}}
K.iB.prototype={
er:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.t("May not create a Set with zero characters."))
s=new H.A(t.E)
for(r=new H.bP(a,a.gl(a));r.w();){q=r.d
s.k(0,q,!0)}p=P.kG(s.gap(s),!0,t.e)
C.b.el(p)
this.a=p},
aV:function(a,b){return C.b.S(this.a,b)},
i:function(a){return P.eN(this.a,0,null)}}
L.eI.prototype={
u:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.eZ(this.a.O(0,b))
p.a=H.d([],t.L)
p.c=!1
this.c.push(p)
return p},
hK:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
if(p.aV(0,a))return p}return null},
i:function(a){return this.b},
d7:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.S(0,l))m+=" (consume)"
for(l=n.d.c,l=l.gap(l),l=l.gR(l);l.w();){r=l.gE(l)
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.f(r)+" => ["+H.f(q)+"]")
m=s.c.S(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.u)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.eV.prototype={
i:function(a){var s=H.mJ(this.b,"\n","\\n"),r=H.mJ(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.eW.prototype={
i:function(a){return this.b}}
L.iV.prototype={
O:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.eI(this,b)
s.c=H.d([],t.br)
this.a.k(0,b,s)}return s},
be:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.eW(a)
s.c=new H.A(t.dO)
this.b.k(0,a,s)}return s},
eb:function(a){return this.ir(a)},
ir:function(a){var s=this
return P.p1(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$eb(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.V
b=H.d([],c)
a0=H.d([],c)
a1=H.d([],c)
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a1.length!==0)j=C.b.cs(a1,0)
else{if(!r.w()){q=3
break}i=r.d
j=i}a0.push(j);++m
h=d.hK(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.eN(a0,0,null)
throw H.c(P.t("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!a0.fixed$length)H.p(P.z("removeRange"))
P.b9(0,k,a0.length)
a0.splice(0,k-0)
C.b.aQ(a1,a0)
a0=H.d([],c)
b=H.d([],c)
d=s.d
q=!s.c.S(0,n.a)?7:8
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
if(d.d!=null){g=P.eN(b,0,null)
f=d.d
e=f.c.h(0,g)
n=new L.eV(e==null?f.b:e,g,m)
k=a0.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.S(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.o9()
case 1:return P.oa(o)}}},t.eB)},
i:function(a){var s,r=new P.Q(""),q=this.d
if(q!=null)r.a=q.d7()+"\n"
for(q=this.a,q=q.giv(q),q=q.gR(q);q.w();){s=q.gE(q)
if(s!=this.d)r.a+=s.d7()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.eZ.prototype={
i:function(a){return this.b.b+": "+this.cE(0)}}
O.a6.prototype={
bg:function(a){this.a=H.d([],a.X("v<0*>"))
this.c=this.b=null},
cz:function(a,b,c){this.b=b
this.c=a},
aK:function(a,b){return this.cz(a,null,b)},
d_:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
cX:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gl:function(a){return this.a.length},
gR:function(a){var s=this.a
return new J.a1(s,s.length)},
J:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.b(s,b)
return s[b]},
m:function(a,b){var s,r,q=this,p=H.ms(q).X("v<a6.T*>")
if(q.d_(H.d([b],p))){s=q.a
r=s.length
s.push(b)
q.cX(r,H.d([b],p))}},
aQ:function(a,b){var s,r
if(this.d_(b)){s=this.a
r=s.length
C.b.aQ(s,b)
this.cX(r,b)}},
$ii:1}
O.cD.prototype={
gl:function(a){return this.a.length},
gn:function(){var s=this.b
return s==null?this.b=D.E():s},
aL:function(){var s=this.b
if(s!=null)s.C(null)},
ga7:function(a){var s=this.a
if(s.length>0)return C.b.gaI(s)
else return V.b6()},
by:function(a){var s=this.a
if(a==null)s.push(V.b6())
else s.push(a)
this.aL()},
bc:function(){var s=this.a
if(s.length>0){s.pop()
this.aL()}}}
E.hs.prototype={}
E.b4.prototype={
cN:function(){var s,r
this.e=null
for(s=this.y.a,s=new J.a1(s,s.length);s.w();){r=s.d
if(r.f==null)r.cN()}},
sbG:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gn().D(0,q.gdZ())
s=q.c
if(s!=null)s.gn().m(0,q.gdZ())
r=new D.r("shape",p,q.c)
r.b=!0
q.aw(r)}},
sas:function(a){var s,r,q=this,p=q.f
if(p!=a){if(p!=null)p.gn().D(0,q.ge0())
s=q.f
q.f=a
if(a!=null)a.gn().m(0,q.ge0())
q.cN()
r=new D.r("technique",s,q.f)
r.b=!0
q.aw(r)}},
sb9:function(a){var s,r,q=this
if(!J.C(q.r,a)){s=q.r
if(s!=null)s.gn().D(0,q.gdX())
if(a!=null)a.gn().m(0,q.gdX())
q.r=a
r=new D.r("mover",s,a)
r.b=!0
q.aw(r)}},
ab:function(a,b){var s,r,q=this,p=q.r,o=p!=null?p.aD(0,b,q):null
if(!J.C(o,q.x)){s=q.x
q.x=o
r=new D.r("matrix",s,o)
r.b=!0
q.aw(r)}p=q.f
if(p!=null)p.ab(0,b)
for(p=q.y.a,p=new J.a1(p,p.length);p.w();)p.d.ab(0,b)},
a3:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.ga7(q))
else o.push(p.j(0,q.ga7(q)))
q.aL()
a.cr(r.f)
q=a.dy
s=(q&&C.b).gaI(q)
if(s!=null&&r.d!=null)s.bA(a,r)
for(q=r.y.a,q=new J.a1(q,q.length);q.w();)q.d.a3(a)
a.cq()
a.dx.bc()},
aw:function(a){var s=this.z
if(s!=null)s.C(a)},
a4:function(){return this.aw(null)},
e_:function(a){this.e=null
this.aw(a)},
i2:function(){return this.e_(null)},
e1:function(a){this.aw(a)},
i3:function(){return this.e1(null)},
dY:function(a){this.aw(a)},
i1:function(){return this.dY(null)},
dW:function(a){this.aw(a)},
hZ:function(){return this.dW(null)},
hY:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gdV(),q=t.f,p=0;p<b.length;b.length===s||(0,H.u)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bp()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}this.a4()},
i0:function(a,b){var s,r
for(s=b.gR(b),r=this.gdV();s.w();)s.gE(s).gn().D(0,r)
this.a4()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bG.prototype={
i:function(a){return this.b}}
E.bV.prototype={
i:function(a){return this.b}}
E.fq.prototype={}
E.iw.prototype={
eq:function(a,b){var s,r,q=this
q.d=q.c=512
q.e=0
q.x=q.r=q.f=new P.ag(Date.now(),!1)
q.y=0
q.cx=q.ch=q.Q=q.z=null
s=new O.cD()
r=t.p
s.a=H.d([],r)
s.gn().m(0,new E.ix(q))
q.cy=s
s=new O.cD()
s.a=H.d([],r)
s.gn().m(0,new E.iy(q))
q.db=s
s=new O.cD()
s.a=H.d([],r)
s.gn().m(0,new E.iz(q))
q.dx=s
s=H.d([],t.fG)
q.dy=s
s.push(null)
q.fr=new H.A(t.h9)},
gie:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.ga7(q)
s=r.db
s=r.z=q.j(0,s.ga7(s))
q=s}return q},
ge4:function(){var s,r=this,q=r.ch
if(q==null){q=r.gie()
s=r.dx
s=r.ch=q.j(0,s.ga7(s))
q=s}return q},
gee:function(){var s,r=this,q=r.cx
if(q==null){q=r.db
q=q.ga7(q)
s=r.dx
s=r.cx=q.j(0,s.ga7(s))
q=s}return q},
cr:function(a){var s=this.dy
s.push(a==null?(s&&C.b).gaI(s):a)},
cq:function(){var s=this.dy
if(s.length>1)s.pop()},
bo:function(a){var s=a.b
if(s.length===0)throw H.c(P.t("May not cache a shader with no name."))
if(this.fr.c8(0,s))throw H.c(P.t('Shader cache already contains a shader by the name "'+s+'".'))
this.fr.k(0,s,a)}}
E.ix.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.iy.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.iz.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.eU.prototype={
cK:function(a){this.e6()},
cJ:function(){return this.cK(null)},
ghP:function(){var s,r=this,q=Date.now(),p=C.c.a2(P.lo(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.ag(q,!1)
return s/p},
d1:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.j()
if(typeof p!=="number")return H.h(p)
s=C.d.b6(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.j()
r=C.d.b6(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.lT(C.p,q.gij())}},
e6:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.C.eP(s)
r=W.mw(new E.iT(this),t.H)
r.toString
C.C.h4(s,r)}},
ih:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.d1()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.ag(p,!1)
q.y=P.lo(p-q.r.a).a*0.000001
p=q.cy
C.b.sl(p.a,0)
p.aL()
p=q.db
C.b.sl(p.a,0)
p.aL()
p=q.dx
C.b.sl(p.a,0)
p.aL()
p=q.dy
p.toString
C.b.sl(p,0)
q.dy.push(null)
m.a3(n.e)}}catch(o){s=H.bj(o)
r=H.l6(o)
P.la("Error: "+H.f(s))
P.la("Stack: "+H.f(r))
throw H.c(s)}}}
E.iT.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.ih()}}}
Z.fd.prototype={}
Z.dG.prototype={
V:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.bj(q)
r=P.t('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.f(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.f(s.e)+"]"}}
Z.c1.prototype={}
Z.b3.prototype={
an:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
V:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].V(a)},
aC:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
a3:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.b(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=t.i,n=H.d([],o)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q)n.push(s[q].i(0))
p=H.d([],o)
for(o=this.c,s=o.length,q=0;q<s;++q)p.push(J.a9(o[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.u(n,", ")+"\nAttrs:   "+C.b.u(p,", ")}}
Z.bN.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.ev(this.c))+"'")+"]"}}
Z.aE.prototype={
gcC:function(a){var s=this.a,r=(s&$.a5().a)!==0?3:0
if((s&$.aG().a)!==0)r+=3
if((s&$.b0().a)!==0)r+=3
if((s&$.as().a)!==0)r+=2
if((s&$.bk().a)!==0)r+=3
if((s&$.dv().a)!==0)r+=3
if((s&$.dw().a)!==0)r+=4
if((s&$.bE().a)!==0)++r
return(s&$.b_().a)!==0?r+4:r},
hr:function(a){var s,r=$.a5(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.aG()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b0()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.as()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bk()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dv()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dw()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bE()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b_()
if((q&r.a)!==0)if(s===a)return r
return $.n0()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aE))return!1
return this.a===b.a},
i:function(a){var s=H.d([],t.i),r=this.a
if((r&$.a5().a)!==0)s.push("Pos")
if((r&$.aG().a)!==0)s.push("Norm")
if((r&$.b0().a)!==0)s.push("Binm")
if((r&$.as().a)!==0)s.push("Txt2D")
if((r&$.bk().a)!==0)s.push("TxtCube")
if((r&$.dv().a)!==0)s.push("Clr3")
if((r&$.dw().a)!==0)s.push("Clr4")
if((r&$.bE().a)!==0)s.push("Weight")
if((r&$.b_().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.u(s,"|")}}
D.ht.prototype={}
D.bp.prototype={
m:function(a,b){var s=this.a;(s==null?this.a=H.d([],t.f):s).push(b)},
D:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.b.S(q,b)
if(q===!0){q=r.a
s=(q&&C.b).D(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.b.S(q,b)
if(q===!0){q=r.b
s=(q&&C.b).D(q,b)||s}return s},
C:function(a){var s,r,q,p=this,o={}
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
return!0}if(!r)C.b.I(P.kG(s,!0,t.dm),new D.hO(o))
s=p.b
if(s!=null){p.b=H.d([],t.f)
C.b.I(s,new D.hP(o))}return!0},
ds:function(){return this.C(null)},
af:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.C(s)}}}}
D.hO.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.hP.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.R.prototype={}
D.aJ.prototype={}
D.aK.prototype={}
D.r.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.dH.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dH))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.e3.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e3))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.i_.prototype={
i9:function(a){this.c=a.b
this.d.m(0,a.a)
return!1},
i5:function(a){this.c=a.b
this.d.D(0,a.a)
return!1}}
X.cz.prototype={}
X.i5.prototype={
aZ:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.j()
s=b.b
r=o.ch
if(typeof s!=="number")return s.j()
q=new V.aa(m.a+l*k,m.b+s*r)
r=o.a.gaR()
p=new X.bR(a,V.b8(),o.x,r,q)
p.b=!0
o.z=new P.ag(n,!1)
o.x=q
return p},
cp:function(a,b){this.r=a.a
return!1},
bb:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.ei()
if(typeof s!=="number")return s.aj()
this.r=(s&~r)>>>0
return!1},
ba:function(a,b){var s=this.d
if(s==null)return!1
s.C(this.aZ(a,b))
return!0},
ia:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaR()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.j()
o=a.b
n=m.cy
if(typeof o!=="number")return o.j()
r=new X.bS(new V.a4(q*p,o*n),s,r)
r.b=!0
l.C(r)
return!0},
fA:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cz(c,p.a.gaR(),b)
q.b=!0
r.C(q)
p.y=new P.ag(s,!1)
p.x=V.b8()}}
X.az.prototype={
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.az))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bR.prototype={}
X.ir.prototype={
bP:function(a,b,c){var s=this,r=new P.ag(Date.now(),!1),q=s.a.gaR(),p=new X.bR(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
cp:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.C(this.bP(a,b,!0))
return!0},
bb:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.ei()
if(typeof r!=="number")return r.aj()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.C(s.bP(a,b,!0))
return!0},
ba:function(a,b){var s=this.d
if(s==null)return!1
s.C(this.bP(a,b,!1))
return!0},
ib:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaR()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.j()
p=a.b
o=n.ch
if(typeof p!=="number")return p.j()
s=new X.bS(new V.a4(r*q,p*o),s,b)
s.b=!0
m.C(s)
return!0}}
X.bS.prototype={}
X.et.prototype={}
X.cQ.prototype={}
X.iW.prototype={
aZ:function(a,b){var s=this,r=new P.ag(Date.now(),!1),q=a.length>0?a[0]:V.b8(),p=s.a.gaR(),o=new X.cQ(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
i8:function(a){var s=this.b
if(s==null)return!1
s.C(this.aZ(a,!0))
return!0},
i6:function(a){var s=this.c
if(s==null)return!1
s.C(this.aZ(a,!0))
return!0},
i7:function(a){var s=this.d
if(s==null)return!1
s.C(this.aZ(a,!1))
return!0}}
X.fa.prototype={
gaR:function(){var s=this.a,r=C.i.gdi(s).c
r.toString
s=C.i.gdi(s).d
s.toString
return V.cK(0,0,r,s)},
cQ:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.e3(s,new X.az(r,a.altKey,a.shiftKey))},
aO:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.az(r,a.altKey,a.shiftKey)},
bX:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.az(r,a.altKey,a.shiftKey)},
aH:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.v()
if(typeof o!=="number")return H.h(o)
s=r.top
if(typeof p!=="number")return p.v()
if(typeof s!=="number")return H.h(s)
return new V.aa(q-o,p-s)},
b_:function(a){return new V.a4(a.movementX,a.movementY)},
bT:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=H.d([],t.cS)
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
o=C.d.a_(p.pageX)
C.d.a_(p.pageY)
n=k.left
if(typeof n!=="number")return H.h(n)
C.d.a_(p.pageX)
m=C.d.a_(p.pageY)
l=k.top
if(typeof l!=="number")return H.h(l)
j.push(new V.aa(o-n,m-l))}return j},
aF:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.dH(s,new X.az(r,a.altKey,a.shiftKey))},
bQ:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.v()
if(typeof n!=="number")return H.h(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.v()
if(typeof p!=="number")return H.h(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.h(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.h(p)
p=r<p}else p=!1
return p},
fs:function(a){this.f=!0},
fb:function(a){this.f=!1},
fh:function(a){if(this.f&&this.bQ(a))a.preventDefault()},
fw:function(a){var s
if(!this.f)return
s=this.cQ(a)
this.b.i9(s)},
fu:function(a){var s
if(!this.f)return
s=this.cQ(a)
this.b.i5(s)},
fC:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aO(a)
if(p.x){s=p.aF(a)
r=p.b_(a)
if(p.d.cp(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.aF(a)
q=p.aH(a)
if(p.c.cp(s,q))a.preventDefault()},
fG:function(a){var s,r,q,p=this
p.aO(a)
s=p.aF(a)
if(p.x){r=p.b_(a)
if(p.d.bb(s,r))a.preventDefault()
return}if(p.r)return
q=p.aH(a)
if(p.c.bb(s,q))a.preventDefault()},
fl:function(a){var s,r,q,p=this
if(!p.bQ(a)){p.aO(a)
s=p.aF(a)
if(p.x){r=p.b_(a)
if(p.d.bb(s,r))a.preventDefault()
return}if(p.r)return
q=p.aH(a)
if(p.c.bb(s,q))a.preventDefault()}},
fE:function(a){var s,r,q,p=this
p.aO(a)
s=p.aF(a)
if(p.x){r=p.b_(a)
if(p.d.ba(s,r))a.preventDefault()
return}if(p.r)return
q=p.aH(a)
if(p.c.ba(s,q))a.preventDefault()},
fj:function(a){var s,r,q,p=this
if(!p.bQ(a)){p.aO(a)
s=p.aF(a)
if(p.x){r=p.b_(a)
if(p.d.ba(s,r))a.preventDefault()
return}if(p.r)return
q=p.aH(a)
if(p.c.ba(s,q))a.preventDefault()}},
fI:function(a){var s,r,q=this
q.aO(a)
s=new V.a4((a&&C.B).ghE(a),C.B.ghF(a)).j(0,q.Q)
if(q.x){if(q.d.ia(s))a.preventDefault()
return}if(q.r)return
r=q.aH(a)
if(q.c.ib(s,r))a.preventDefault()},
fK:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aF(q.y)
r=q.aH(q.y)
q.d.fA(s,r,p)}},
h_:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bX(a)
s=r.bT(a)
if(r.e.i8(s))a.preventDefault()},
fW:function(a){var s
this.bX(a)
s=this.bT(a)
if(this.e.i6(s))a.preventDefault()},
fY:function(a){var s
this.bX(a)
s=this.bT(a)
if(this.e.i7(s))a.preventDefault()}}
D.dE.prototype={$iS:1}
D.dP.prototype={$iS:1}
D.S.prototype={}
D.cw.prototype={
ag:function(a){var s=this.y
if(s!=null)s.C(a)},
cZ:function(a){var s=this.z
if(s!=null)s.C(a)},
fz:function(){return this.cZ(null)},
fM:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.u)(a),++r){q=a[r]
if(q==null||this.eK(q))return!1}return!0},
f5:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gcY(),q=t.f,p=0;p<b.length;b.length===s||(0,H.u)(b),++p){o=b[p]
if(o instanceof D.bw)this.r.push(o)
n=o.Q
if(n==null){n=new D.bp()
n.d=0
o.Q=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}s=new D.aJ()
s.b=!0
this.ag(s)},
fQ:function(a,b){var s,r,q
for(s=b.gR(b),r=this.gcY();s.w();){q=s.gE(s)
C.b.D(this.e,q)
q.gn().D(0,r)}s=new D.aK()
s.b=!0
this.ag(s)},
eK:function(a){var s=C.b.S(this.r,a)
return s}}
D.bw.prototype={
ag:function(a){var s=this.Q
if(s!=null)s.C(a)},
ew:function(){return this.ag(null)},
gae:function(){return 4},
$iS:1}
D.eF.prototype={$iS:1}
V.Z.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.Z))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.af.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.af))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+", "+V.D(s.d,3,0)+"]"}}
V.hM.prototype={}
V.eb.prototype={
a5:function(a,b){var s=this,r=H.d([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.m)
return r},
p:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.eb))return!1
s=b.a
r=q.a
$.x().toString
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.d
r=q.d
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.e
r=q.e
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.f
r=q.f
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.r
r=q.r
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.x
r=q.x
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.y
r=q.y
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){var s,r,q,p,o=this,n=t.m,m=V.cb(H.d([o.a,o.d,o.r],n),3,0),l=V.cb(H.d([o.b,o.e,o.x],n),3,0),k=V.cb(H.d([o.c,o.f,o.y],n),3,0)
n=m.length
if(0>=n)return H.b(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.b(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.b(k,0)
s=s+k[0]+",\n"
if(1>=n)return H.b(m,1)
p=" "+m[1]+", "
if(1>=r)return H.b(l,1)
p=p+l[1]+", "
if(1>=q)return H.b(k,1)
p=s+(p+k[1]+",\n")
if(2>=n)return H.b(m,2)
n=" "+m[2]+", "
if(2>=r)return H.b(l,2)
n=n+l[2]+", "
if(2>=q)return H.b(k,2)
return p+(n+k[2]+"]")}}
V.ax.prototype={
a5:function(a,b){var s=this,r=H.d([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.m)
return r},
hS:function(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a,b3=b1.f
if(typeof b2!=="number")return b2.j()
if(typeof b3!=="number")return H.h(b3)
s=b1.b
r=b1.e
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.h(r)
q=b2*b3-s*r
p=b1.r
if(typeof p!=="number")return H.h(p)
o=b1.c
if(typeof o!=="number")return o.j()
n=b2*p-o*r
m=b1.x
l=b1.d
k=b2*m-l*r
j=s*p-o*b3
i=s*m-l*b3
h=o*m-l*p
g=b1.y
f=b1.cy
if(typeof g!=="number")return g.j()
e=b1.z
d=b1.cx
if(typeof e!=="number")return e.j()
c=g*f-e*d
b=b1.db
a=b1.Q
if(typeof a!=="number")return a.j()
a0=g*b-a*d
a1=b1.dx
a2=b1.ch
a3=g*a1-a2*d
a4=e*b-a*f
a5=e*a1-a2*f
a6=a*a1-a2*b
a7=q*a6-n*a5+k*a4+j*a3-i*a0+h*c
$.x().toString
if(Math.abs(a7-0)<1e-9)return V.b6()
a8=1/a7
a9=-r
b0=-d
return V.aO((b3*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(b2*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-b3*a3+m*c)*a8,(-b2*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+b3*a0-p*c)*a8,(b2*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
j:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a,b3=b5.a
if(typeof b2!=="number")return b2.j()
if(typeof b3!=="number")return H.h(b3)
s=b1.b
r=b5.e
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.h(r)
q=b1.c
p=b5.y
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.h(p)
o=b1.d
n=b5.cx
m=b5.b
if(typeof m!=="number")return H.h(m)
l=b5.f
if(typeof l!=="number")return H.h(l)
k=b5.z
if(typeof k!=="number")return H.h(k)
j=b5.cy
i=b5.c
if(typeof i!=="number")return H.h(i)
h=b5.r
if(typeof h!=="number")return H.h(h)
g=b5.Q
if(typeof g!=="number")return H.h(g)
f=b5.db
e=b5.d
d=b5.x
c=b5.ch
b=b5.dx
a=b1.e
if(typeof a!=="number")return a.j()
a0=b1.f
if(typeof a0!=="number")return a0.j()
a1=b1.r
if(typeof a1!=="number")return a1.j()
a2=b1.x
a3=b1.y
if(typeof a3!=="number")return a3.j()
a4=b1.z
if(typeof a4!=="number")return a4.j()
a5=b1.Q
if(typeof a5!=="number")return a5.j()
a6=b1.ch
a7=b1.cx
a8=b1.cy
a9=b1.db
b0=b1.dx
return V.aO(b2*b3+s*r+q*p+o*n,b2*m+s*l+q*k+o*j,b2*i+s*h+q*g+o*f,b2*e+s*d+q*c+o*b,a*b3+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*b3+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*b3+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
bf:function(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=a.a
if(typeof h!=="number")return h.j()
if(typeof g!=="number")return H.h(g)
s=i.b
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.h(r)
q=i.c
p=a.c
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.h(p)
o=i.e
if(typeof o!=="number")return o.j()
n=i.f
if(typeof n!=="number")return n.j()
m=i.r
if(typeof m!=="number")return m.j()
l=i.y
if(typeof l!=="number")return l.j()
k=i.z
if(typeof k!=="number")return k.j()
j=i.Q
if(typeof j!=="number")return j.j()
return new V.O(h*g+s*r+q*p+i.d,o*g+n*r+m*p+i.x,l*g+k*r+j*p+i.ch)},
p:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.ax))return!1
s=b.a
r=q.a
$.x().toString
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.d-q.d)<1e-9))return!1
s=b.e
r=q.e
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.f
r=q.f
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.r
r=q.r
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.x-q.x)<1e-9))return!1
s=b.y
r=q.y
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.z
r=q.z
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.Q
r=q.Q
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.ch-q.ch)<1e-9))return!1
if(!(Math.abs(b.cx-q.cx)<1e-9))return!1
if(!(Math.abs(b.cy-q.cy)<1e-9))return!1
if(!(Math.abs(b.db-q.db)<1e-9))return!1
if(!(Math.abs(b.dx-q.dx)<1e-9))return!1
return!0},
i:function(a){return this.M()},
F:function(a){var s,r,q,p,o,n=this,m=t.m,l=V.cb(H.d([n.a,n.e,n.y,n.cx],m),3,0),k=V.cb(H.d([n.b,n.f,n.z,n.cy],m),3,0),j=V.cb(H.d([n.c,n.r,n.Q,n.db],m),3,0),i=V.cb(H.d([n.d,n.x,n.ch,n.dx],m),3,0)
m=l.length
if(0>=m)return H.b(l,0)
s="["+l[0]+", "
r=k.length
if(0>=r)return H.b(k,0)
s=s+k[0]+", "
q=j.length
if(0>=q)return H.b(j,0)
s=s+j[0]+", "
p=i.length
if(0>=p)return H.b(i,0)
s=s+i[0]+",\n"
o=a+" "
if(1>=m)return H.b(l,1)
o=o+l[1]+", "
if(1>=r)return H.b(k,1)
o=o+k[1]+", "
if(1>=q)return H.b(j,1)
o=o+j[1]+", "
if(1>=p)return H.b(i,1)
o=s+(o+i[1]+",\n")
s=a+" "
if(2>=m)return H.b(l,2)
s=s+l[2]+", "
if(2>=r)return H.b(k,2)
s=s+k[2]+", "
if(2>=q)return H.b(j,2)
s=s+j[2]+", "
if(2>=p)return H.b(i,2)
s=o+(s+i[2]+",\n")
o=a+" "
if(3>=m)return H.b(l,3)
o=o+l[3]+", "
if(3>=r)return H.b(k,3)
o=o+k[3]+", "
if(3>=q)return H.b(j,3)
o=o+j[3]+", "
if(3>=p)return H.b(i,3)
return s+(o+i[3]+"]")},
M:function(){return this.F("")}}
V.aa.prototype={
at:function(a){return new V.a4(a.a-this.a,a.b-this.b)},
p:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.O.prototype={
q:function(a,b){var s,r,q,p,o=this.a,n=b.a
if(typeof o!=="number")return o.q()
if(typeof n!=="number")return H.h(n)
s=this.b
r=b.b
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.h(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.q()
if(typeof p!=="number")return H.h(p)
return new V.O(o+n,s+r,q+p)},
v:function(a,b){var s,r,q,p,o=this.a,n=b.a
if(typeof o!=="number")return o.v()
if(typeof n!=="number")return H.h(n)
s=this.b
r=b.b
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.v()
if(typeof p!=="number")return H.h(p)
return new V.O(o-n,s-r,q-p)},
p:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.O))return!1
s=b.a
r=q.a
$.x().toString
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.aR.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aR))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+", "+V.D(s.d,3,0)+"]"}}
V.ex.prototype={
gaB:function(){var s=this.c,r=this.d
return s>r?r:s},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ex))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+", "+V.D(s.d,3,0)+"]"}}
V.a4.prototype={
b7:function(a){return Math.sqrt(this.ai(this))},
ai:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.h(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.h(r)
return q*p+s*r},
j:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.j()
if(typeof b!=="number")return H.h(b)
s=this.b
if(typeof s!=="number")return s.j()
return new V.a4(r*b,s*b)},
Y:function(a,b){var s,r
$.x().toString
if(Math.abs(b-0)<1e-9){s=$.m1
return s==null?$.m1=new V.a4(0,0):s}s=this.a
if(typeof s!=="number")return s.Y()
r=this.b
if(typeof r!=="number")return r.Y()
return new V.a4(s/b,r/b)},
p:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
s=b.a
r=this.a
$.x().toString
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.F.prototype={
b7:function(a){return Math.sqrt(this.ai(this))},
ai:function(a){var s,r,q,p,o=this.a,n=a.a
if(typeof o!=="number")return o.j()
if(typeof n!=="number")return H.h(n)
s=this.b
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.h(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.h(p)
return o*n+s*r+q*p},
cn:function(a,b){return new V.F(V.l8(this.a,a.a,b),V.l8(this.b,a.b,b),V.l8(this.c,a.c,b))},
L:function(){var s=this,r=Math.sqrt(s.ai(s))
if(r===1)return s
return s.Y(0,r)},
b2:function(a){var s,r,q,p,o=this.b,n=a.c
if(typeof o!=="number")return o.j()
if(typeof n!=="number")return H.h(n)
s=this.c
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.h(r)
q=a.a
if(typeof q!=="number")return H.h(q)
p=this.a
if(typeof p!=="number")return p.j()
return new V.F(o*n-s*r,s*q-p*n,p*r-o*q)},
q:function(a,b){var s,r,q,p,o=this.a,n=b.a
if(typeof o!=="number")return o.q()
if(typeof n!=="number")return H.h(n)
s=this.b
r=b.b
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.h(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.q()
if(typeof p!=="number")return H.h(p)
return new V.F(o+n,s+r,q+p)},
N:function(a){var s,r,q=this.a
if(typeof q!=="number")return q.N()
s=this.b
if(typeof s!=="number")return s.N()
r=this.c
if(typeof r!=="number")return r.N()
return new V.F(-q,-s,-r)},
j:function(a,b){var s,r,q=this.a
if(typeof q!=="number")return q.j()
s=this.b
if(typeof s!=="number")return s.j()
r=this.c
if(typeof r!=="number")return r.j()
return new V.F(q*b,s*b,r*b)},
Y:function(a,b){var s,r,q
$.x().toString
if(Math.abs(b-0)<1e-9)return V.d_()
s=this.a
if(typeof s!=="number")return s.Y()
r=this.b
if(typeof r!=="number")return r.Y()
q=this.c
if(typeof q!=="number")return q.Y()
return new V.F(s/b,r/b,q/b)},
dQ:function(){var s=this.a
$.x().toString
if(typeof s!=="number")return H.h(s)
if(!(Math.abs(0-s)<1e-9))return!1
s=this.b
if(typeof s!=="number")return H.h(s)
if(!(Math.abs(0-s)<1e-9))return!1
s=this.c
if(typeof s!=="number")return H.h(s)
if(!(Math.abs(0-s)<1e-9))return!1
return!0},
p:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.F))return!1
s=b.a
r=q.a
$.x().toString
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.c0.prototype={
b7:function(a){var s=this,r=s.a,q=s.b,p=s.c,o=s.d
return Math.sqrt(r*r+q*q+p*p+o*o)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.c0))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+", "+V.D(s.d,3,0)+"]"}}
U.hy.prototype={
bI:function(a){var s=V.km(a,this.c,this.b)
return s},
gn:function(){var s=this.y
return s==null?this.y=D.E():s},
K:function(a){var s=this.y
if(s!=null)s.C(a)},
sef:function(a,b){},
sdS:function(a){var s,r=this,q=r.b
$.x().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bI(s)}q=new D.r("maximumLocation",q,r.b)
q.b=!0
r.K(q)}},
sdU:function(a){var s,r=this,q=r.c
$.x().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bI(s)}q=new D.r("minimumLocation",q,r.c)
q.b=!0
r.K(q)}},
saa:function(a,b){var s,r=this
b=r.bI(b)
s=r.d
$.x().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.r("location",s,b)
s.b=!0
r.K(s)}},
sdT:function(a){var s,r,q=this,p=q.e
$.x().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.r("maximumVelocity",p,a)
p.b=!0
q.K(p)}},
sa0:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.x().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.r("velocity",r,a)
r.b=!0
s.K(r)}},
sdk:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.x().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.r("dampening",s,a)
s.b=!0
this.K(s)}},
ab:function(a,b){var s,r,q,p=this,o=p.f
$.x().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.saa(0,p.d+s*b)
o=p.x
$.x().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sa0(s)}}}
U.cf.prototype={
gn:function(){var s=this.b
return s==null?this.b=D.E():s},
aD:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cf))return!1
return J.C(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")}}
U.bL.prototype={
gn:function(){var s=this.e
return s==null?this.e=D.E():s},
K:function(a){var s=this.e
if(s!=null)s.C(a)},
aA:function(){return this.K(null)},
ey:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gbk(),q=t.f,p=0;p<b.length;b.length===s||(0,H.u)(b),++p){o=b[p]
if(o!=null){n=o.gn()
m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.aJ()
s.b=!0
this.K(s)},
fO:function(a,b){var s,r
for(s=b.gR(b),r=this.gbk();s.w();)s.gE(s).gn().D(0,r)
s=new D.aK()
s.b=!0
this.K(s)},
aD:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.ak()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.a1(p,p.length),s=null;p.w();){o=p.d
if(o!=null){r=o.aD(0,b,c)
if(r!=null)s=s==null?r:r.j(0,s)}}q.f=s==null?V.b6():s
p=q.e
if(p!=null)p.af(0)}return q.f},
p:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bL))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.b(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.b(p,r)
if(!J.C(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iT:1}
U.T.prototype={}
U.cM.prototype={
gn:function(){var s=this.y
return s==null?this.y=D.E():s},
K:function(a){var s=this.y
if(s!=null)s.C(a)},
seg:function(a){var s
a=V.km(a,0,6.283185307179586)
s=this.a
$.x().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
s=new D.r("yaw",s,a)
s.b=!0
this.K(s)}},
se3:function(a,b){var s
b=V.km(b,0,6.283185307179586)
s=this.b
$.x().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
s=new D.r("pitch",s,b)
s.b=!0
this.K(s)}},
se7:function(a){var s
a=V.km(a,0,6.283185307179586)
s=this.c
$.x().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
s=new D.r("roll",s,a)
s.b=!0
this.K(s)}},
aD:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(p<o){q.r=o
p=q.y
if(p!=null)++p.d
q.seg(q.a+q.d*b.y)
q.se3(0,q.b+q.e*b.y)
q.se7(q.c+q.f*b.y)
p=q.c
s=Math.cos(p)
r=Math.sin(p)
q.x=V.aO(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1).j(0,V.lB(q.b)).j(0,V.lA(q.a))
p=q.y
if(p!=null)p.af(0)}return q.x},
p:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.cM))return!1
s=q.a
r=b.a
$.x().toString
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(q.b-b.b)<1e-9))return!1
if(!(Math.abs(q.c-b.c)<1e-9))return!1
if(!(Math.abs(q.d-b.d)<1e-9))return!1
if(!(Math.abs(q.e-b.e)<1e-9))return!1
if(!(Math.abs(q.f-b.f)<1e-9))return!1
return!0},
i:function(a){var s=this
return"Rotator: ["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+"], ["+V.D(s.d,3,0)+", "+V.D(s.e,3,0)+", "+V.D(s.f,3,0)+"]"}}
U.cY.prototype={
gn:function(){var s=this.fx
return s==null?this.fx=D.E():s},
K:function(a){var s=this.fx
if(s!=null)s.C(a)},
aA:function(){return this.K(null)},
c1:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
s=a.c
r=s.b
s=r==null?s.b=D.E():r
s.m(0,q.geX())
s=q.a.c
r=s.d
s=r==null?s.d=D.E():r
s.m(0,q.geZ())
s=q.a.c
r=s.c
s=r==null?s.c=D.E():r
s.m(0,q.gf0())
s=q.a.d
r=s.f
s=r==null?s.f=D.E():r
s.m(0,q.geT())
s=q.a.d
r=s.d
s=r==null?s.d=D.E():r
s.m(0,q.geV())
s=q.a.e
r=s.b
s=r==null?s.b=D.E():r
s.m(0,q.ghi())
s=q.a.e
r=s.d
s=r==null?s.d=D.E():r
s.m(0,q.ghg())
s=q.a.e
r=s.c
s=r==null?s.c=D.E():r
s.m(0,q.ghe())
return!0},
az:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.N()
s=-s}if(this.r){if(typeof r!=="number")return r.N()
r=-r}return new V.a4(s,r)},
eY:function(a){var s=this
t.d.a(a)
if(!J.C(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
f_:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!l.cx)return
if(l.ch){s=a.y.at(a.d)
s=s.ai(s)
r=l.Q
if(typeof r!=="number")return H.h(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.az(a.y.at(a.d).j(0,2).Y(0,s.gaB()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.N()
q=l.y
if(typeof q!=="number")return H.h(q)
r.sa0(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.N()
r=l.x
if(typeof r!=="number")return H.h(r)
q.sa0(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.az(r.at(q).j(0,2).Y(0,s.gaB()))
r=l.c
o=p.a
if(typeof o!=="number")return o.N()
n=l.y
if(typeof n!=="number")return H.h(n)
m=l.cy
if(typeof m!=="number")return H.h(m)
r.saa(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.N()
o=l.x
if(typeof o!=="number")return H.h(o)
r=l.db
if(typeof r!=="number")return H.h(r)
m.saa(0,-n*o+r)
l.b.sa0(0)
l.c.sa0(0)
l.dx=l.az(a.z.at(q).j(0,2).Y(0,s.gaB()))}l.aA()},
f1:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.ai(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.N()
q=p.y
if(typeof q!=="number")return H.h(q)
s.sa0(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.N()
s=p.x
if(typeof s!=="number")return H.h(s)
q.sa0(-r*10*s)
p.aA()}},
eU:function(a){var s=this
if(t.dn.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eW:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!J.C(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.az(r.at(q).j(0,2).Y(0,s.gaB()))
r=l.c
o=p.a
if(typeof o!=="number")return o.N()
n=l.y
if(typeof n!=="number")return H.h(n)
m=l.cy
if(typeof m!=="number")return H.h(m)
r.saa(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.N()
o=l.x
if(typeof o!=="number")return H.h(o)
r=l.db
if(typeof r!=="number")return H.h(r)
m.saa(0,-n*o+r)
l.b.sa0(0)
l.c.sa0(0)
l.dx=l.az(a.z.at(q).j(0,2).Y(0,s.gaB()))
l.aA()},
hj:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
hh:function(a){var s,r,q,p,o,n,m,l=this
t.eP.a(a)
if(!l.cx)return
if(l.ch){s=a.y.at(a.d)
s=s.ai(s)
r=l.Q
if(typeof r!=="number")return H.h(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.az(a.y.at(a.d).j(0,2).Y(0,s.gaB()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.N()
q=l.y
if(typeof q!=="number")return H.h(q)
r.sa0(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.N()
r=l.x
if(typeof r!=="number")return H.h(r)
q.sa0(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.az(r.at(q).j(0,2).Y(0,s.gaB()))
r=l.c
o=p.a
if(typeof o!=="number")return o.N()
n=l.y
if(typeof n!=="number")return H.h(n)
m=l.cy
if(typeof m!=="number")return H.h(m)
r.saa(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.N()
o=l.x
if(typeof o!=="number")return H.h(o)
r=l.db
if(typeof r!=="number")return H.h(r)
m.saa(0,-n*o+r)
l.b.sa0(0)
l.c.sa0(0)
l.dx=l.az(a.z.at(q).j(0,2).Y(0,s.gaB()))}l.aA()},
hf:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.ai(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.N()
q=p.y
if(typeof q!=="number")return H.h(q)
s.sa0(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.N()
s=p.x
if(typeof s!=="number")return H.h(s)
q.sa0(-r*10*s)
p.aA()}},
aD:function(a,b,c){var s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.ak()
if(q<p){r.dy=p
s=b.y
r.c.ab(0,s)
r.b.ab(0,s)
r.fr=V.lA(r.b.d).j(0,V.lB(r.c.d))}return r.fr},
$iT:1}
U.cZ.prototype={
gn:function(){var s=this.r
return s==null?this.r=D.E():s},
K:function(a){var s=this.r
if(s!=null)s.C(a)},
c1:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.E():r
r=p.gf2()
s.m(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.E():q).m(0,r)
return!0},
f3:function(a){var s,r,q,p,o=this
if(!J.C(o.b,o.a.b.c))return
t.a3.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.j()
p=s+r*q
if(s!==p){o.d=p
s=new D.r("zoom",s,p)
s.b=!0
o.K(s)}},
aD:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.aO(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$iT:1}
M.ce.prototype={
gn:function(){var s=this.r
return s==null?this.r=D.E():s},
T:function(a){var s=this.r
if(s!=null)s.C(a)},
aE:function(){return this.T(null)},
fS:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gU(),q=t.f,p=0;p<b.length;b.length===s||(0,H.u)(b),++p){o=b[p]
if(o!=null){n=o.gn()
m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.aJ()
s.b=!0
this.T(s)},
fU:function(a,b){var s,r
for(s=b.gR(b),r=this.gU();s.w();)s.gE(s).gn().D(0,r)
s=new D.aK()
s.b=!0
this.T(s)},
a3:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.a1(s,s.length);s.w();){r=s.d
if(r!=null)r.a3(a)}q.f=!1},
$iX:1}
M.ci.prototype={
gn:function(){var s=this.r
return s==null?this.r=D.E():s},
T:function(a){var s=this.r
if(s!=null)s.C(a)},
aE:function(){return this.T(null)},
saJ:function(a,b){var s,r,q=this
if(b==null)b=X.kz(!0,null)
s=q.c
if(s!==b){if(s!=null)s.gn().D(0,q.gU())
r=q.c
q.c=b
b.gn().m(0,q.gU())
s=new D.r("target",r,q.c)
s.b=!0
q.T(s)}},
sas:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gn().D(0,r.gU())
s=r.d
r.d=a
if(a!=null)a.gn().m(0,r.gU())
q=new D.r("technique",s,r.d)
q.b=!0
r.T(q)}},
a3:function(a){var s,r,q=this
a.cr(q.d)
q.c.V(a)
q.b.toString
a.cy.by(V.b6())
s=V.b6()
a.db.by(s)
r=q.d
if(r!=null)r.ab(0,a)
q.e.ab(0,a)
q.e.a3(a)
q.b.toString
a.cy.bc()
a.db.bc()
q.c.aC(a)
a.cq()},
$iX:1}
M.cn.prototype={
T:function(a){var s=this.y
if(s!=null)s.C(a)},
aE:function(){return this.T(null)},
fd:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gU(),q=t.f,p=0;p<b.length;b.length===s||(0,H.u)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bp()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.aJ()
s.b=!0
this.T(s)},
ff:function(a,b){var s,r
for(s=b.gR(b),r=this.gU();s.w();)s.gE(s).gn().D(0,r)
s=new D.aK()
s.b=!0
this.T(s)},
sc7:function(a){var s,r,q=this
if(a==null)a=X.lE()
s=q.b
if(s!==a){if(s!=null)s.gn().D(0,q.gU())
r=q.b
q.b=a
a.gn().m(0,q.gU())
s=new D.r("camera",r,q.b)
s.b=!0
q.T(s)}},
saJ:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gn().D(0,r.gU())
s=r.c
r.c=b
b.gn().m(0,r.gU())
q=new D.r("target",s,r.c)
q.b=!0
r.T(q)}},
sas:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gn().D(0,r.gU())
s=r.d
r.d=a
if(a!=null)a.gn().m(0,r.gU())
q=new D.r("technique",s,r.d)
q.b=!0
r.T(q)}},
gn:function(){var s=this.y
return s==null?this.y=D.E():s},
a3:function(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
a0.cr(a.d)
a.c.V(a0)
s=a.b
r=a0.c
q=a0.d
p=s.c
o=s.d
n=s.e
m=n-o
l=1/Math.tan(p*0.5)
k=V.aO(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a0.cy.by(k)
r=$.lF
if(r==null){r=V.nD()
q=$.m3
if(q==null)q=$.m3=new V.F(0,1,0)
p=$.m2
j=(p==null?$.m2=new V.F(0,0,-1):p).L()
i=q.b2(j).L()
h=j.b2(i)
g=new V.F(r.a,r.b,r.c)
f=i.N(0).ai(g)
e=h.N(0).ai(g)
d=j.N(0).ai(g)
r=V.aO(i.a,h.a,j.a,f,i.b,h.b,j.b,e,i.c,h.c,j.c,d,0,0,0,1)
$.lF=r
c=r}else c=r
r=s.b
if(r!=null){b=r.aD(0,a0,s)
if(b!=null)c=b.j(0,c)}a0.db.by(c)
s=a.d
if(s!=null)s.ab(0,a0)
for(s=a.e.a,s=new J.a1(s,s.length);s.w();)s.d.ab(0,a0)
for(s=a.e.a,s=new J.a1(s,s.length);s.w();)s.d.a3(a0)
a.b.toString
a0.cy.bc()
a0.db.bc()
a.c.aC(a0)
a0.cq()},
$iX:1}
M.cr.prototype={
gn:function(){var s=this.b
return s==null?this.b=D.E():s},
T:function(a){var s=this.b
if(s!=null)s.C(a)},
aE:function(){return this.T(null)},
a3:function(a){var s=this.e
if(s!=null)s.a3(a)
s=this.r
if(s!=null)s.a3(a)},
$iX:1}
M.X.prototype={}
A.dB.prototype={}
A.hm.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hG:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
bq:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.a_.prototype={
gax:function(a){var s=this.a?1:0,r=this.b?2:0
return s|r|0},
i:function(a){var s=this.a?1:0,r=this.b?2:0
return""+(s|r|0)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof A.a_))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.dO.prototype={}
A.dW.prototype={
ad:function(a,b){if(b!=null&&b.d)a.cA(b)}}
A.hV.prototype={
aM:function(a,b,c,d){var s,r,q,p,o=c.length
if(0>=o)return H.b(c,0)
s=c[0]
$.x().toString
r=Math.abs(s-0)<1e-9
if(r){if(0>=d.length)return H.b(d,0)
q=d[0]
d=C.b.cD(d,1)
c=C.b.cD(c,1);--o}else q=0
s=a.a+="vec4 blur"+b+"()\n"
s+="{\n"
a.a=s
if(r)s=a.a+="  vec4 color = texture2D(colorTxt, txt2D)*"+H.f(q)+";\n"
else s=a.a=s+"  vec4 color = vec4(0.0);\n"
s=a.a=s+"  vec2 offset;\n"
for(p=0;p<o;++p){if(p>=c.length)return H.b(c,p)
a.a+="  offset = blurScale * "+H.f(c[p])+";\n"
if(p>=d.length)return H.b(d,p)
a.a+="  color += texture2D(colorTxt, txt2D + offset) * "+H.f(d[p])+";\n"
if(p>=d.length)return H.b(d,p)
s=a.a+="  color += texture2D(colorTxt, txt2D - offset) * "+H.f(d[p])+";\n"}s+="  return color; \n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
i:function(a){return this.b}}
A.e9.prototype={
ep:function(c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3="Required uniform value, ",c4=", was not defined or used in shader.",c5="uniform mat4 objMat;\n"
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
A.pg(c6,s)
A.pi(c6,s)
A.ph(c6,s)
A.pk(c6,s)
A.pl(c6,s)
A.pj(c6,s)
A.pm(c6,s)
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
c1.bt(0,q.charCodeAt(0)==0?q:q,A.pf(c1.z))
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
c1.r1=H.d([],t.W)
q=c6.aU
if(q>0){c1.k4=c1.y.H(0,"bendMatCount")
for(l=0;l<q;++l){p=c1.r1
o=c1.y
n="bendValues["+l+"].mat"
k=o.h(0,n)
if(k==null)H.p(P.t(c3+n+c4))
p.push(r.a(k))}}r=c6.a
if(r.a)c1.r2=t.r.a(c1.y.H(0,"emissionClr"))
if(r.b)c1.rx=t.c.a(c1.y.H(0,"emissionTxt"))
r=c6.b
if(r.a)c1.x1=t.r.a(c1.y.H(0,"ambientClr"))
if(r.b)c1.x2=t.c.a(c1.y.H(0,"ambientTxt"))
r=c6.c
if(r.a)c1.y2=t.r.a(c1.y.H(0,"diffuseClr"))
if(r.b)c1.aU=t.c.a(c1.y.H(0,"diffuseTxt"))
r=c6.d
if(r.a)c1.br=t.r.a(c1.y.H(0,"invDiffuseClr"))
if(r.b)c1.dt=t.c.a(c1.y.H(0,"invDiffuseTxt"))
r=c6.e
q=r.a
if(q||r.b||!1){c1.dw=t.n.a(c1.y.H(0,"shininess"))
if(q)c1.du=t.r.a(c1.y.H(0,"specularClr"))
if(r.b)c1.dv=t.c.a(c1.y.H(0,"specularTxt"))}if(c6.f.b)c1.dz=t.c.a(c1.y.H(0,"bumpTxt"))
if(c6.db){c1.dA=t.Q.a(c1.y.H(0,"envSampler"))
r=c6.r
if(r.a)c1.dB=t.r.a(c1.y.H(0,"reflectClr"))
if(r.b)c1.dC=t.c.a(c1.y.H(0,"reflectTxt"))
r=c6.x
q=r.a
if(q||r.b||!1){c1.dD=t.n.a(c1.y.H(0,"refraction"))
if(q)c1.dE=t.r.a(c1.y.H(0,"refractClr"))
if(r.b)c1.dF=t.c.a(c1.y.H(0,"refractTxt"))}}r=c6.y
if(r.a)c1.dG=t.n.a(c1.y.H(0,"alpha"))
if(r.b)c1.dH=t.c.a(c1.y.H(0,"alphaTxt"))
if(c6.k1){r=c6.z
q=r.length
if(q!==0){c1.cb=new H.A(t.J)
c1.cc=new H.A(t.en)
for(p=t.r,o=t.n,n=t.d6,j=0;j<r.length;r.length===q||(0,H.u)(r),++j){i=r[j]
h=i.a
g="barLight"+H.f(h)
f=H.d([],n)
for(m=i.b,l=0;l<m;++l){e=c1.y
d=g+"s["+l+"].startPnt"
k=e.h(0,d)
if(k==null)H.p(P.t(c3+d+c4))
p.a(k)
e=c1.y
d=g+"s["+l+"].endPnt"
c=e.h(0,d)
if(c==null)H.p(P.t(c3+d+c4))
p.a(c)
e=c1.y
d=g+"s["+l+"].color"
b=e.h(0,d)
if(b==null)H.p(P.t(c3+d+c4))
p.a(b)
if(typeof h!=="number")return h.aj()
if((h&4)!==0){e=c1.y
d=g+"s["+l+"].att0"
a=e.h(0,d)
if(a==null)H.p(P.t(c3+d+c4))
o.a(a)
e=c1.y
d=g+"s["+l+"].att1"
a0=e.h(0,d)
if(a0==null)H.p(P.t(c3+d+c4))
o.a(a0)
e=c1.y
d=g+"s["+l+"].att2"
a1=e.h(0,d)
if(a1==null)H.p(P.t(c3+d+c4))
o.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c2
a3=a2
a4=a3}f.push(new A.cS(k,c,b,a4,a3,a2))}c1.cc.k(0,h,f)
m=c1.cb
e=c1.y
d=g+"Count"
k=e.h(0,d)
if(k==null)H.p(P.t(c3+d+c4))
m.k(0,h,k)}}r=c6.Q
q=r.length
if(q!==0){c1.cd=new H.A(t.J)
c1.ce=new H.A(t.af)
for(p=t.r,o=t.c,n=t.dv,j=0;j<r.length;r.length===q||(0,H.u)(r),++j){i=r[j]
h=i.a
g="dirLight"+H.f(h)
f=H.d([],n)
for(m=i.b,l=0;l<m;++l){if(typeof h!=="number")return h.aj()
e=(h&1)!==0
if(e){d=c1.y
a5=g+"s["+l+"].objUp"
k=d.h(0,a5)
if(k==null)H.p(P.t(c3+a5+c4))
p.a(k)
d=c1.y
a5=g+"s["+l+"].objRight"
c=d.h(0,a5)
if(c==null)H.p(P.t(c3+a5+c4))
p.a(c)
d=c1.y
a5=g+"s["+l+"].objDir"
b=d.h(0,a5)
if(b==null)H.p(P.t(c3+a5+c4))
p.a(b)
a6=b
a7=c
a8=k}else{a6=c2
a7=a6
a8=a7}d=c1.y
a5=g+"s["+l+"].viewDir"
k=d.h(0,a5)
if(k==null)H.p(P.t(c3+a5+c4))
p.a(k)
d=c1.y
a5=g+"s["+l+"].color"
c=d.h(0,a5)
if(c==null)H.p(P.t(c3+a5+c4))
p.a(c)
if(e){e=c1.y
d=g+"sTexture2D"+l
b=e.h(0,d)
if(b==null)H.p(P.t(c3+d+c4))
o.a(b)
a9=b}else a9=c2
f.push(new A.cT(a8,a7,a6,k,c,a9))}c1.ce.k(0,h,f)
m=c1.cd
e=c1.y
d=g+"Count"
k=e.h(0,d)
if(k==null)H.p(P.t(c3+d+c4))
m.k(0,h,k)}}r=c6.ch
q=r.length
if(q!==0){c1.cf=new H.A(t.J)
c1.cg=new H.A(t.gr)
for(p=t.r,o=t.O,n=t.Q,m=t.y,e=t.n,d=t.by,j=0;j<r.length;r.length===q||(0,H.u)(r),++j){i=r[j]
h=i.a
g="pointLight"+H.f(h)
f=H.d([],d)
for(a5=i.b,l=0;l<a5;++l){b0=c1.y
b1=g+"s["+l+"].point"
k=b0.h(0,b1)
if(k==null)H.p(P.t(c3+b1+c4))
p.a(k)
b0=c1.y
b1=g+"s["+l+"].viewPnt"
c=b0.h(0,b1)
if(c==null)H.p(P.t(c3+b1+c4))
p.a(c)
b0=c1.y
b1=g+"s["+l+"].color"
b=b0.h(0,b1)
if(b==null)H.p(P.t(c3+b1+c4))
p.a(b)
if(typeof h!=="number")return h.aj()
if((h&3)!==0){b0=c1.y
b1=g+"s["+l+"].invViewRotMat"
a=b0.h(0,b1)
if(a==null)H.p(P.t(c3+b1+c4))
o.a(a)
b2=a}else b2=c2
if((h&1)!==0){b0=c1.y
b1=g+"sTextureCube"+l
a=b0.h(0,b1)
if(a==null)H.p(P.t(c3+b1+c4))
n.a(a)
a9=a}else a9=c2
if((h&2)!==0){b0=c1.y
b1=g+"sShadowCube"+l
a=b0.h(0,b1)
if(a==null)H.p(P.t(c3+b1+c4))
n.a(a)
b0=c1.y
b1=g+"s["+l+"].shadowAdj"
a0=b0.h(0,b1)
if(a0==null)H.p(P.t(c3+b1+c4))
m.a(a0)
b3=a
b4=a0}else{b3=c2
b4=b3}if((h&4)!==0){b0=c1.y
b1=g+"s["+l+"].att0"
a=b0.h(0,b1)
if(a==null)H.p(P.t(c3+b1+c4))
e.a(a)
b0=c1.y
b1=g+"s["+l+"].att1"
a0=b0.h(0,b1)
if(a0==null)H.p(P.t(c3+b1+c4))
e.a(a0)
b0=c1.y
b1=g+"s["+l+"].att2"
a1=b0.h(0,b1)
if(a1==null)H.p(P.t(c3+b1+c4))
e.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c2
a3=a2
a4=a3}f.push(new A.cV(k,c,b2,b,a9,b3,b4,a4,a3,a2))}c1.cg.k(0,h,f)
a5=c1.cf
b0=c1.y
b1=g+"Count"
k=b0.h(0,b1)
if(k==null)H.p(P.t(c3+b1+c4))
a5.k(0,h,k)}}r=c6.cx
q=r.length
if(q!==0){c1.ci=new H.A(t.J)
c1.cj=new H.A(t.gb)
for(p=t.r,o=t.n,n=t.y,m=t.c,e=t.fF,j=0;j<r.length;r.length===q||(0,H.u)(r),++j){i=r[j]
h=i.a
g="spotLight"+H.f(h)
f=H.d([],e)
for(d=i.b,l=0;l<d;++l){a5=c1.y
b0=g+"s["+l+"].objPnt"
k=a5.h(0,b0)
if(k==null)H.p(P.t(c3+b0+c4))
p.a(k)
a5=c1.y
b0=g+"s["+l+"].objDir"
c=a5.h(0,b0)
if(c==null)H.p(P.t(c3+b0+c4))
p.a(c)
a5=c1.y
b0=g+"s["+l+"].viewPnt"
b=a5.h(0,b0)
if(b==null)H.p(P.t(c3+b0+c4))
p.a(b)
a5=c1.y
b0=g+"s["+l+"].color"
a=a5.h(0,b0)
if(a==null)H.p(P.t(c3+b0+c4))
p.a(a)
if(typeof h!=="number")return h.aj()
if((h&3)!==0){a5=c1.y
b0=g+"s["+l+"].objUp"
a0=a5.h(0,b0)
if(a0==null)H.p(P.t(c3+b0+c4))
p.a(a0)
a5=c1.y
b0=g+"s["+l+"].objRight"
a1=a5.h(0,b0)
if(a1==null)H.p(P.t(c3+b0+c4))
p.a(a1)
a5=c1.y
b0=g+"s["+l+"].tuScalar"
b5=a5.h(0,b0)
if(b5==null)H.p(P.t(c3+b0+c4))
o.a(b5)
a5=c1.y
b0=g+"s["+l+"].tvScalar"
b6=a5.h(0,b0)
if(b6==null)H.p(P.t(c3+b0+c4))
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
if(a0==null)H.p(P.t(c3+b1+c4))
n.a(a0)
b4=a0}else b4=c2
if((h&8)!==0){b0=c1.y
b1=g+"s["+l+"].cutoff"
a0=b0.h(0,b1)
if(a0==null)H.p(P.t(c3+b1+c4))
o.a(a0)
b0=c1.y
b1=g+"s["+l+"].coneAngle"
a1=b0.h(0,b1)
if(a1==null)H.p(P.t(c3+b1+c4))
o.a(a1)
b9=a1
c0=a0}else{b9=c2
c0=b9}if((h&4)!==0){b0=c1.y
b1=g+"s["+l+"].att0"
a0=b0.h(0,b1)
if(a0==null)H.p(P.t(c3+b1+c4))
o.a(a0)
b0=c1.y
b1=g+"s["+l+"].att1"
a1=b0.h(0,b1)
if(a1==null)H.p(P.t(c3+b1+c4))
o.a(a1)
b0=c1.y
b1=g+"s["+l+"].att2"
b5=b0.h(0,b1)
if(b5==null)H.p(P.t(c3+b1+c4))
o.a(b5)
a2=b5
a3=a1
a4=a0}else{a2=c2
a3=a2
a4=a3}if((h&1)!==0){b0=c1.y
b1=g+"sTexture2D"+l
a0=b0.h(0,b1)
if(a0==null)H.p(P.t(c3+b1+c4))
m.a(a0)
a9=a0}else a9=c2
if(a5){a5=c1.y
b0=g+"sShadow2D"+l
a0=a5.h(0,b0)
if(a0==null)H.p(P.t(c3+b0+c4))
m.a(a0)
b3=a0}else b3=c2
f.push(new A.cX(k,c,b,a,a8,a7,b8,b7,b4,c0,b9,a4,a3,a2,a9,b3))}c1.cj.k(0,h,f)
d=c1.ci
a5=c1.y
b0=g+"Count"
k=a5.h(0,b0)
if(k==null)H.p(P.t(c3+b0+c4))
d.k(0,h,k)}}}},
ad:function(a,b){if(b!=null&&b.d)a.cA(b)},
h8:function(a,b){}}
A.dF.prototype={
i:function(a){return"barLight"+H.f(this.a)}}
A.dQ.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.eu.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.eG.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.ia.prototype={
i:function(a){return this.b5}}
A.cS.prototype={}
A.cT.prototype={}
A.cV.prototype={}
A.cX.prototype={}
A.ba.prototype={
bh:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
bt:function(a,b,c){var s,r,q,p=this
p.c=b
p.d=c
p.e=p.cR(b,35633)
p.f=p.cR(p.d,35632)
s=p.a
r=s.createProgram()
p.r=r
s.attachShader(r,p.e)
s.attachShader(p.r,p.f)
s.linkProgram(p.r)
if(!s.getProgramParameter(p.r,35714)){q=s.getProgramInfoLog(p.r)
s.deleteProgram(p.r)
H.p(P.t("Failed to link shader: "+H.f(q)))}p.ha()
p.hc()},
V:function(a){a.a.useProgram(this.r)
this.x.hG()},
cR:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.c(P.t("Error compiling shader '"+H.f(q)+"': "+H.f(s)))}return q},
ha:function(){var s,r,q,p=this,o=H.d([],t.x),n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.h(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.dB(n,r.name,q))}p.x=new A.hm(o)},
hc:function(){var s,r,q,p=this,o=H.d([],t.fj),n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.h(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.hC(r.type,r.size,r.name,q))}p.y=new A.j4(o)},
aN:function(a,b,c){var s=this.a
if(a===1)return new A.bY(s,b,c)
else return A.kL(s,this.r,b,a,c)},
eM:function(a,b,c){var s=this.a
if(a===1)return new A.cW(s,b,c)
else return A.kL(s,this.r,b,a,c)},
eN:function(a,b,c){var s=this.a
if(a===1)return new A.f4(s,b,c)
else return A.kL(s,this.r,b,a,c)},
bm:function(a,b){return new P.ft(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
hC:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aN(b,c,d)
case 5121:return s.aN(b,c,d)
case 5122:return s.aN(b,c,d)
case 5123:return s.aN(b,c,d)
case 5124:return s.aN(b,c,d)
case 5125:return s.aN(b,c,d)
case 5126:return new A.f0(s.a,c,d)
case 35664:return new A.cR(s.a,c,d)
case 35665:return new A.f1(s.a,c,d)
case 35666:return new A.f2(s.a,c,d)
case 35667:return new A.j1(s.a,c,d)
case 35668:return new A.j2(s.a,c,d)
case 35669:return new A.j3(s.a,c,d)
case 35674:return new A.j5(s.a,c,d)
case 35675:return new A.f3(s.a,c,d)
case 35676:return new A.cU(s.a,c,d)
case 35678:return s.eM(b,c,d)
case 35680:return s.eN(b,c,d)
case 35670:throw H.c(s.bm("BOOL",c))
case 35671:throw H.c(s.bm("BOOL_VEC2",c))
case 35672:throw H.c(s.bm("BOOL_VEC3",c))
case 35673:throw H.c(s.bm("BOOL_VEC4",c))
default:throw H.c(P.t("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.bI.prototype={
i:function(a){return this.b}}
A.eT.prototype={
eu:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i="Required uniform value, ",h=", was not defined or used in shader."
j.bt(0,u.Y.charCodeAt(0)==0?u.Y:u.Y,A.nZ(a,b))
j.z=j.x.h(0,"posAttr")
s=t.dF
j.Q=s.a(j.y.H(0,"txtCount"))
j.ch=t.y.a(j.y.H(0,"backClr"))
j.cx=H.d([],t.ga)
j.cy=H.d([],t.W)
r=t.dA
j.db=H.d([],r)
j.dx=H.d([],r)
j.dy=H.d([],r)
j.fr=H.d([],r)
j.fx=H.d([],t.D)
for(r=t.v,q=t.q,p=t.c,o=0;o<a;++o){n=j.cx
m=j.y
l="txt"+o
k=m.h(0,l)
if(k==null)H.p(P.t(i+l+h))
n.push(p.a(k))
n=j.cy
m=j.y
l="clrMat"+o
k=m.h(0,l)
if(k==null)H.p(P.t(i+l+h))
n.push(q.a(k))
n=j.db
m=j.y
l="srcLoc"+o
k=m.h(0,l)
if(k==null)H.p(P.t(i+l+h))
n.push(r.a(k))
n=j.dx
m=j.y
l="srcSize"+o
k=m.h(0,l)
if(k==null)H.p(P.t(i+l+h))
n.push(r.a(k))
n=j.dy
m=j.y
l="destLoc"+o
k=m.h(0,l)
if(k==null)H.p(P.t(i+l+h))
n.push(r.a(k))
n=j.fr
m=j.y
l="destSize"+o
k=m.h(0,l)
if(k==null)H.p(P.t(i+l+h))
n.push(r.a(k))
n=j.fx
m=j.y
l="flip"+o
k=m.h(0,l)
if(k==null)H.p(P.t(i+l+h))
n.push(s.a(k))}}}
A.f_.prototype={}
A.j4.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
H:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.M()},
M:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.u)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.bY.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.j1.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.j2.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.j3.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.j0.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.f0.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.cR.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.f1.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.f2.prototype={
ek:function(a){var s=a.a,r=a.b,q=a.c,p=a.d
return this.a.uniform4f(this.d,s,r,q,p)},
ej:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.j5.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.f3.prototype={
a8:function(a){var s=new Float32Array(H.c6(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.cU.prototype={
a8:function(a){var s=new Float32Array(H.c6(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.cW.prototype={
cA:function(a){var s=a==null||!a.d,r=this.a,q=this.d
if(s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.f4.prototype={
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.jQ.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cn(q.b,b).cn(q.d.cn(q.c,b),c)
a.saa(0,new V.O(p.a,p.b,p.c))
a.se9(p.L())
q=1-b
s=1-c
a.sdd(new V.aR(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
r.f.$3(a,b,c)}}
F.kk.prototype={
$2:function(a,b){return 0}}
F.kl.prototype={
$3:function(a,b,c){var s,r=this.a.a.$2(b,c)
if(typeof r!=="number")return H.h(r)
s=a.f
r=new V.F(s.a,s.b,s.c).L().j(0,this.b+r)
a.saa(0,new V.O(r.a,r.b,r.c))}}
F.k2.prototype={
$2:function(a,b){return 0}}
F.k3.prototype={
$3:function(a,b,c){var s,r,q=b*2-1,p=c*2-1
a.saa(0,new V.O(q,p,this.a.a.$2(b,c)))
a.se9(new V.F(q,p,1).L())
s=1-b
r=1-c
a.sdd(new V.aR(b*c,2+s*c,4+b*r,6+s*r))}}
F.dS.prototype={
b3:function(){var s=this
if(!s.gb4()){C.b.D(s.a.a.d.b,s)
s.a.a.a4()}s.bU()
s.bV()
s.h2()},
bY:function(a){this.a=a
a.d.b.push(this)},
bZ:function(a){this.b=a
a.d.c.push(this)},
h9:function(a){this.c=a
a.d.d.push(this)},
bU:function(){var s=this.a
if(s!=null){C.b.D(s.d.b,this)
this.a=null}},
bV:function(){var s=this.b
if(s!=null){C.b.D(s.d.c,this)
this.b=null}},
h2:function(){var s=this.c
if(s!=null){C.b.D(s.d.d,this)
this.c=null}},
gb4:function(){return this.a==null||this.b==null||this.c==null},
eF:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.d_()
if(n!=null)q=q.q(0,n)
if(s!=null)q=q.q(0,s)
if(r!=null)q=q.q(0,r)
if(q.dQ())return p
return q.L()},
eH:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.v(0,n)
q=new V.F(o.a,o.b,o.c).L()
o=r.v(0,n)
return q.b2(new V.F(o.a,o.b,o.c).L()).L()},
c6:function(){var s,r=this
if(r.d!=null)return!0
s=r.eF()
if(s==null){s=r.eH()
if(s==null)return!1}r.d=s
r.a.a.a4()
return!0},
eE:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.d_()
if(n!=null)q=q.q(0,n)
if(s!=null)q=q.q(0,s)
if(r!=null)q=q.q(0,r)
if(q.dQ())return p
return q.L()},
eG:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.x().toString
if(Math.abs(p-0)<1e-9){j=b.v(0,e)
o=new V.F(j.a,j.b,j.c).L()
if(q.a-r.a<0)o=o.N(0)}else{n=(j-s.b)/p
j=b.v(0,e)
i=j.a
if(typeof i!=="number")return i.j()
g=j.b
if(typeof g!=="number")return g.j()
j=j.c
if(typeof j!=="number")return j.j()
j=new V.O(i*n,g*n,j*n).q(0,e).v(0,h)
o=new V.F(j.a,j.b,j.c).L()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.N(0)}j=l.d
if(j!=null){m=j.L()
o=m.b2(o).L().b2(m).L()}return o},
c4:function(){var s,r=this
if(r.e!=null)return!0
s=r.eE()
if(s==null){s=r.eG()
if(s==null)return!1}r.e=s
r.a.a.a4()
return!0},
ghx:function(a){var s=this
if(J.C(s.a,s.b))return!0
if(J.C(s.b,s.c))return!0
if(J.C(s.c,s.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
F:function(a){var s,r,q=this
if(q.gb4())return a+"disposed"
s=a+C.a.ar(J.a9(q.a.e),0)+", "+C.a.ar(J.a9(q.b.e),0)+", "+C.a.ar(J.a9(q.c.e),0)+" {"
r=q.d
s=r!=null?s+(r.i(0)+", "):s+"-, "
r=q.e
return r!=null?s+(r.i(0)+"}"):s+"-}"},
M:function(){return this.F("")}}
F.hQ.prototype={}
F.iJ.prototype={
b8:function(a,b,c){var s,r=b.a
r.a.a.A()
r=r.e
s=c.a
s.a.a.A()
if(r==s.e){r=b.b
r.a.a.A()
r=r.e
s=c.b
s.a.a.A()
if(r==s.e){r=b.c
r.a.a.A()
r=r.e
s=c.c
s.a.a.A()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.A()
r=r.e
s=c.b
s.a.a.A()
if(r==s.e){r=b.b
r.a.a.A()
r=r.e
s=c.c
s.a.a.A()
if(r==s.e){r=b.c
r.a.a.A()
r=r.e
s=c.a
s.a.a.A()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.A()
r=r.e
s=c.c
s.a.a.A()
if(r==s.e){r=b.b
r.a.a.A()
r=r.e
s=c.a
s.a.a.A()
if(r==s.e){r=b.c
r.a.a.A()
r=r.e
s=c.b
s.a.a.A()
s=r==s.e
r=s}else r=!1
return r}else return!1}}}}
F.e6.prototype={
b3:function(){var s=this
if(!s.gb4()){C.b.D(s.a.a.c.b,s)
s.a.a.a4()}s.bU()
s.bV()},
bY:function(a){this.a=a
a.c.b.push(this)},
bZ:function(a){this.b=a
a.c.c.push(this)},
bU:function(){var s=this.a
if(s!=null){C.b.D(s.c.b,this)
this.a=null}},
bV:function(){var s=this.b
if(s!=null){C.b.D(s.c.c,this)
this.b=null}},
gb4:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
F:function(a){if(this.gb4())return a+"disposed"
return a+C.a.ar(J.a9(this.a.e),0)+", "+C.a.ar(J.a9(this.b.e),0)},
M:function(){return this.F("")}}
F.i0.prototype={}
F.j_.prototype={
b8:function(a,b,c){var s,r=b.a
r.a.a.A()
r=r.e
s=c.a
s.a.a.A()
if(r==s.e){r=b.b
r.a.a.A()
r=r.e
s=c.b
s.a.a.A()
return r==s.e}else{r=b.a
r.a.a.A()
r=r.e
s=c.b
s.a.a.A()
if(r==s.e){r=b.b
r.a.a.A()
r=r.e
s=c.a
s.a.a.A()
return r==s.e}else return!1}}}
F.es.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
F:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.a.ar(J.a9(s.e),0)},
M:function(){return this.F("")}}
F.iC.prototype={
gn:function(){var s=this.e
return s==null?this.e=D.E():s},
co:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.A()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.u)(e),++q){p=e[q]
f.a.m(0,p.hA())}f.a.A()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.u)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.A()
m=m.e
if(typeof m!=="number")return m.q()
m+=s
n=n.c
if(m>=n.length)return H.b(n,m)
l=n[m]
f.b.a.a.m(0,l)
m=new F.es()
if(l.a==null)H.p(P.t("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.C(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.u)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.A()
m=m.e
if(typeof m!=="number")return m.q()
m+=s
n=n.c
if(m>=n.length)return H.b(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.q()
n+=s
m=m.c
if(n>=m.length)return H.b(m,n)
i=m[n]
n=f.c.a
n.a.m(0,j)
n.a.m(0,i)
F.nu(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.u)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.A()
m=m.e
if(typeof m!=="number")return m.q()
m+=s
n=n.c
if(m>=n.length)return H.b(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.q()
n+=s
m=m.c
if(n>=m.length)return H.b(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.A()
m=m.e
if(typeof m!=="number")return m.q()
m+=s
n=n.c
if(m>=n.length)return H.b(n,m)
g=n[m]
m=f.d.a
m.a.m(0,j)
m.a.m(0,i)
m.a.m(0,g)
F.co(j,i,g)}e=f.e
if(e!=null)e.af(0)},
av:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.av()||!1
if(!r.a.av())s=!1
q=r.e
if(q!=null)q.af(0)
return s},
hq:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.e
if(a!=null)++a.d
for(s=b.a.c.length-1,a=a0.b,r=a0.a,q=r.length,p=a0.c,o=a-1;s>=0;--s){n=b.a.c
if(s>=n.length)return H.b(n,s)
m=n[s]
n=m.y
l=C.d.b6(n.a*o)
n=n.b
if(typeof p!=="number")return p.v()
k=C.d.b6(n*(p-1))
l=l>=0?C.c.ay(l,a):a+C.c.ay(l,a)
j=(l+(k>=0?C.c.ay(k,p):p+C.c.ay(k,p))*a)*4
if(j<0||j>=q)return H.b(r,j)
n=r[j]
i=j+1
if(i>=q)return H.b(r,i)
i=r[i]
h=j+2
if(h>=q)return H.b(r,h)
h=r[h]
g=j+3
if(g>=q)return H.b(r,g)
n/=255
i/=255
h/=255
g=r[g]/255
if(n<0)n=0
else if(n>1)n=1
if(i<0)i=0
else if(i>1)i=1
if(h<0)h=0
else if(h>1)h=1
if(!(g<0))if(g>1)g=1
f=(n+i+h)*a1/3
n=m.f
i=m.r
h=i.a
if(typeof h!=="number")return h.j()
g=i.b
if(typeof g!=="number")return g.j()
i=i.c
if(typeof i!=="number")return i.j()
e=n.a
if(typeof e!=="number")return e.q()
d=n.b
if(typeof d!=="number")return d.q()
c=n.c
if(typeof c!=="number")return c.q()
i=new V.O(e+h*f,d+g*f,c+i*f)
if(!n.p(0,i)){m.f=i
n=m.a
if(n!=null){n=n.e
if(n!=null)n.C(null)}}}a=b.e
if(a!=null)a.af(0)},
it:function(a){var s,r,q,p,o=this.e
if(o!=null)++o.d
for(o=this.a,s=o.c.length-1,r=a.a;s>=0;--s){q=o.c
if(s>=q.length)return H.b(q,s)
p=q[s]
if((r&$.a5().a)===0)p.f=null
if((r&$.aG().a)===0)p.r=null
if((r&$.b0().a)===0)p.x=null
if((r&$.as().a)===0)p.y=null
if((r&$.bk().a)===0)p.z=null
if((r&$.lc().a)===0)p.Q=null
if((r&$.bE().a)===0)p.ch=0
if((r&$.b_().a)===0)p.cx=null}o=this.e
if(o!=null)o.af(0)},
is:function(a){var s,r,q,p=this.e
if(p!=null)++p.d
for(p=this.d,s=p.b.length-1;s>=0;--s){r=p.b
if(s>=r.length)return H.b(r,s)
q=r[s]
q.d=null}p=this.e
if(p!=null)p.af(0)},
hV:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.a.c
s=H.d(m.slice(0),H.jR(m).X("v<1>"))
for(m=t.j;s.length!==0;){r=C.b.ghL(s)
C.b.cs(s,0)
if(r!=null){q=H.d([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.b(s,p)
o=s[p]
if(o!=null&&a.b8(0,r,o)){q.push(o)
C.b.cs(s,p)}}if(q.length>1)b.co(q)}}n.a.A()
n.c.ct()
n.d.ct()
n.b.ig()
n.c.cu(new F.j_())
n.d.cu(new F.iJ())
m=n.e
if(m!=null)m.af(0)},
bp:function(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=34962,a4=a2.a.c.length
a6.toString
s=a6.a
r=(s&$.a5().a)!==0?1:0
if((s&$.aG().a)!==0)++r
if((s&$.b0().a)!==0)++r
if((s&$.as().a)!==0)++r
if((s&$.bk().a)!==0)++r
if((s&$.dv().a)!==0)++r
if((s&$.dw().a)!==0)++r
if((s&$.bE().a)!==0)++r
if((s&$.b_().a)!==0)++r
q=a6.gcC(a6)
p=q*4
s=new Array(a4*q)
s.fixed$length=Array
o=H.d(s,t.m)
s=new Array(r)
s.fixed$length=Array
n=H.d(s,t.g0)
for(s=o.length,m=n.length,l=0,k=0;k<r;++k){j=a6.hr(k)
i=j.gcC(j)
if(k>=m)return H.b(n,k)
n[k]=new Z.dG(j,i,l*4,p)
for(h=0;h<a4;++h){g=a2.a.c
if(h>=g.length)return H.b(g,h)
f=g[h].hU(j)
e=l+h*q
for(g=f.length,d=0;d<g;++d){c=f[d]
if(e<0||e>=s)return H.b(o,e)
o[e]=c;++e}}l+=i}s=a5.a
b=s.createBuffer()
s.bindBuffer(a3,b)
s.bufferData(a3,new Float32Array(H.c6(o)),35044)
s.bindBuffer(a3,null)
a=new Z.b3(new Z.fd(a3,b),n,a6)
a.b=H.d([],t.aZ)
if(a2.b.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.b.b,k<m.length;++k){m=m[k].a
m.a.a.A()
a0.push(m.e)}a1=Z.kN(s,34963,a0)
a.b.push(new Z.bN(0,a0.length,a1))}if(a2.c.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.c.b,k<m.length;++k){m=m[k].a
m.a.a.A()
a0.push(m.e)
m=a2.c.b
if(k>=m.length)return H.b(m,k)
m=m[k].b
m.a.a.A()
a0.push(m.e)}a1=Z.kN(s,34963,a0)
a.b.push(new Z.bN(1,a0.length,a1))}if(a2.d.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.d.b,k<m.length;++k){m=m[k].a
m.a.a.A()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.b(m,k)
m=m[k].b
m.a.a.A()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.b(m,k)
m=m[k].c
m.a.a.A()
a0.push(m.e)}a1=Z.kN(s,34963,a0)
a.b.push(new Z.bN(4,a0.length,a1))}return a},
i:function(a){var s=this,r="   ",q=H.d([],t.i)
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.F(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.F(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.F(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.F(r))}return C.b.u(q,"\n")},
a4:function(){var s=this.e
if(s!=null)s.C(null)}}
F.iD.prototype={
ho:function(a){var s,r,q,p,o=H.d([],t.b),n=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.m(0,n)
s.a.m(0,q)
s.a.m(0,p)
o.push(F.co(n,q,p))}return o},
hp:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=H.d([],t.b)
for(s=this.a,r=b,q=0,p=!1,o=1;o<a;++o,++q,++r){for(n=p,m=1;m<b;++m,r=i){l=c.length
if(q<0||q>=l)return H.b(c,q)
k=c[q];++q
if(q>=l)return H.b(c,q)
j=c[q]
i=r+1
if(i<0||i>=l)return H.b(c,i)
h=c[i]
if(r<0||r>=l)return H.b(c,r)
g=c[r]
l=s.a
if(n){l.m(0,k)
s.a.m(0,j)
s.a.m(0,h)
f.push(F.co(k,j,h))
s.a.m(0,k)
s.a.m(0,h)
s.a.m(0,g)
f.push(F.co(k,h,g))}else{l.m(0,j)
s.a.m(0,h)
s.a.m(0,g)
f.push(F.co(j,h,g))
s.a.m(0,j)
s.a.m(0,g)
s.a.m(0,k)
f.push(F.co(j,g,k))}n=!n}p=!p}return f},
gl:function(a){return this.b.length},
cu:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.b(q,r)
p=q[r]
for(q=p.d,o=q.b.length+q.c.length+q.d.length-1;o>=0;--o){n=p.d.h(0,o)
for(m=o-1;m>=0;--m){l=p.d.h(0,m)
if(a.b8(0,n,l)){n.b3()
break}}}}},
ct:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.b(r,s)
q=r[s]
r=q.ghx(q)
if(r)q.b3()}},
av:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.u)(s),++p)if(!s[p].c6())q=!1
return q},
c5:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.u)(s),++p)if(!s[p].c4())q=!1
return q},
i:function(a){return this.M()},
F:function(a){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q)p.push(s[q].F(a))
return C.b.u(p,"\n")},
M:function(){return this.F("")}}
F.iE.prototype={
gl:function(a){return this.b.length},
cu:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.b(q,r)
p=q[r]
for(q=p.c,o=q.b.length+q.c.length-1;o>=0;--o){n=p.c.h(0,o)
for(m=o-1;m>=0;--m){l=p.c.h(0,m)
if(a.b8(0,n,l)){n.b3()
break}}}}},
ct:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.b(r,s)
q=r[s]
r=J.C(q.a,q.b)
if(r)q.b3()}},
i:function(a){return this.M()},
F:function(a){var s,r,q=H.d([],t.i),p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.b(r,s)
q.push(r[s].F(a+(""+s+". ")))}return C.b.u(q,"\n")},
M:function(){return this.F("")}}
F.iF.prototype={
gl:function(a){return this.b.length},
ig:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.b(r,s)
r=r[s]
q=r.a
if(q.b.b.length>1){q=q.a
C.b.D(q.b.b,r)
q=r.a.a.e
if(q!=null)q.C(null)
q=r.a
if(q!=null){C.b.D(q.b.b,r)
r.a=null}}}},
i:function(a){return this.M()},
F:function(a){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q)p.push(s[q].F(a))
return C.b.u(p,"\n")},
M:function(){return this.F("")}}
F.fb.prototype={
ca:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.ji(s.cx,p,m,r,q,o,n,a,l)},
hA:function(){return this.ca(null)},
saa:function(a,b){var s
if(!J.C(this.f,b)){this.f=b
s=this.a
if(s!=null)s.a4()}},
se9:function(a){var s
if(!J.C(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a4()}},
sdd:function(a){var s
if(!J.C(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.a4()}},
hU:function(a){var s,r,q=this
if(a.p(0,$.a5())){s=q.f
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.aG())){s=q.r
r=t.m
if(s==null)return H.d([0,1,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.b0())){s=q.x
r=t.m
if(s==null)return H.d([0,0,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.as())){s=q.y
r=t.m
if(s==null)return H.d([0,0],r)
else return H.d([s.a,s.b],r)}else if(a.p(0,$.bk())){s=q.z
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.dv())){s=q.Q
r=t.m
if(s==null)return H.d([1,1,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.dw())){s=q.Q
r=t.m
if(s==null)return H.d([1,1,1,1],r)
else return H.d([s.a,s.b,s.c,s.d],r)}else if(a.p(0,$.bE()))return H.d([q.ch],t.m)
else if(a.p(0,$.b_())){s=q.cx
r=t.m
if(s==null)return H.d([-1,-1,-1,-1],r)
else return H.d([s.a,s.b,s.c,s.d],r)}else return H.d([],t.m)},
c6:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.d_()
r.d.I(0,new F.jt(q))
r.r=q.a.L()
q=r.a
if(q!=null){q.a4()
q=r.a.e
if(q!=null)q.af(0)}return!0},
c4:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.d_()
r.d.I(0,new F.js(q))
r.x=q.a.L()
q=r.a
if(q!=null){q.a4()
q=r.a.e
if(q!=null)q.af(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
F:function(a){var s,r,q=this,p="-",o=H.d([],t.i)
o.push(C.a.ar(J.a9(q.e),0))
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
o.push(V.D(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.i(0))
else o.push(p)
r=C.b.u(o,", ")
return a+"{"+r+"}"},
M:function(){return this.F("")}}
F.jt.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.q(0,r)}}}
F.js.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.q(0,r)}}}
F.jj.prototype={
A:function(){var s,r,q,p
if(this.b){s=this.c
r=s.length
for(q=0,p=0;p<r;++p){if(p>=s.length)return H.b(s,p)
s[p].e=q;++q}this.b=!1}},
m:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.t("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a4()
return!0},
bn:function(a,b,c,d,e,f){var s=F.ji(a,null,b,c,null,d,e,f,0)
this.m(0,s)
return s},
gl:function(a){return this.c.length},
av:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q)s[q].c6()
return!0},
c5:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q)s[q].c4()
return!0},
hw:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
if(p.z==null){o=p.r.L()
if(!J.C(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.C(null)}}}}return!0},
i:function(a){return this.M()},
F:function(a){var s,r,q,p
this.A()
s=H.d([],t.i)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.u)(r),++p)s.push(r[p].F(a))
return C.b.u(s,"\n")},
M:function(){return this.F("")}}
F.jk.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b<q){if(b<0)return H.b(r,b)
return r[b]}b-=q
r=this.c
s=r.length
if(b<s){if(b<0)return H.b(r,b)
return r[b]}b-=s
r=this.d
if(b<0||b>=r.length)return H.b(r,b)
return r[b]},
I:function(a,b){var s=this
C.b.I(s.b,b)
C.b.I(s.c,new F.jl(s,b))
C.b.I(s.d,new F.jm(s,b))},
i:function(a){return this.M()},
M:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q)p.push(s[q].F(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q)p.push(s[q].F(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q)p.push(s[q].F(""))
return C.b.u(p,"\n")}}
F.jl.prototype={
$1:function(a){if(!J.C(a.a,this.a))this.b.$1(a)}}
F.jm.prototype={
$1:function(a){var s=this.a
if(!J.C(a.a,s)&&!J.C(a.b,s))this.b.$1(a)}}
F.jn.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.b(r,s)
return r[s]}else{if(b<0)return H.b(r,b)
return r[b]}},
i:function(a){return this.M()},
M:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q)p.push(s[q].F(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q)p.push(s[q].F(""))
return C.b.u(p,"\n")}}
F.jp.prototype={}
F.jo.prototype={
b8:function(a,b,c){return J.C(b.f,c.f)}}
F.jq.prototype={}
F.is.prototype={
co:function(a){var s,r,q,p,o,n,m,l,k,j,i=V.d_()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null){p=i.a
o=q.a
if(typeof p!=="number")return p.q()
if(typeof o!=="number")return H.h(o)
n=i.b
m=q.b
if(typeof n!=="number")return n.q()
if(typeof m!=="number")return H.h(m)
l=i.c
q=q.c
if(typeof l!=="number")return l.q()
if(typeof q!=="number")return H.h(q)
i=new V.F(p+o,n+m,l+q)}}i=i.L()
for(s=a.length,q=i==null,r=0;r<a.length;a.length===s||(0,H.u)(a),++r){k=a[r]
j=q?null:i.L()
if(!J.C(k.r,j)){k.r=j
p=k.a
if(p!=null){p=p.e
if(p!=null)p.C(null)}}}return null}}
F.jr.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.M()},
M:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q)p.push(s[q].F(""))
return C.b.u(p,"\n")}}
O.hE.prototype={
gn:function(){var s=this.r
return s==null?this.r=D.E():s},
B:function(a){var s=this.r
if(s!=null)s.C(a)},
ab:function(a,b){},
bA:function(a,b){var s,r,q,p,o=this,n="GreyViewDepth",m=o.a
if(m==null){s=a.fr.h(0,n)
if(s==null){m=a.a
s=new A.dO(m,n)
s.bh(m,n)
s.bt(0,u.d.charCodeAt(0)==0?u.d:u.d,u.H.charCodeAt(0)==0?u.H:u.H)
s.z=s.x.h(0,"posAttr")
m=t.n
s.Q=m.a(s.y.h(0,"width"))
s.ch=m.a(s.y.h(0,"stop"))
m=t.q
s.cx=m.a(s.y.h(0,"viewObjMat"))
s.cy=m.a(s.y.h(0,"projMat"))
a.bo(s)}o.a=s
m=s}r=b.e
if((!(r instanceof Z.b3)?b.e=null:r)==null){m=b.d.bp(new Z.c1(a.a),$.a5())
r=m.an($.a5())
q=o.a
r.e=q.z.c
b.e=m
m=q}m.V(a)
r=o.b
q=o.c
p=m.Q
p.a.uniform1f(p.d,r-q)
q=o.c
r=m.ch
r.a.uniform1f(r.d,q)
q=a.cy
q=q.ga7(q)
r=m.cy
r.toString
r.a8(q.a5(0,!0))
q=a.gee()
m=m.cx
m.toString
m.a8(q.a5(0,!0))
m=b.e
m.V(a)
m.a3(a)
m.aC(a)
m=o.a
m.toString
a.a.useProgram(null)
m.x.bq()}}
O.dX.prototype={
gn:function(){var s=this.x
return s==null?this.x=D.E():s},
B:function(a){var s=this.x
if(s!=null)s.C(a)},
ah:function(){return this.B(null)},
sc3:function(a){var s=this.r
$.x().toString
if(!(Math.abs(s-a)<1e-9)){this.r=a
s=new D.r("blurValue",s,a)
s.b=!0
this.B(s)}},
sdj:function(a){var s,r=this,q=r.e
if(q!=a){if(q!=null)q.gn().D(0,r.ga6())
s=r.e
r.e=a
if(a!=null)a.gn().m(0,r.ga6())
q=new D.r("colorTexture",s,r.e)
q.b=!0
r.B(q)}},
sb1:function(a){var s,r,q=this,p=q.f
if(p!=a){if(p!=null)p.gn().D(0,q.ga6())
s=q.f
q.f=a
if(a!=null)a.gn().m(0,q.ga6())
p=new D.r("blurTexture",s,q.f)
r=p.b=!0
q.B(p)
p=q.f==null
if(!(p&&s!=null))p=!p&&s==null
else p=r
if(p){q.a=null
q.B(null)}}},
scv:function(a){var s,r=this,q=$.lz
if(q==null){q=new V.eb(1,0,0,0,1,0,0,0,1)
$.lz=q
a=q}else a=q
if(!J.C(r.b,a)){s=r.b
r.b=a
q=new D.r("textureMatrix",s,a)
q.b=!0
r.B(q)}},
sc2:function(a){var s,r,q=this
if(a==null)a=V.m6()
if(!J.C(q.c,a)){s=q.c
q.c=a
r=new D.r("blurAdjust",s,a)
r.b=!0
q.B(r)}},
ab:function(a,b){},
a9:function(a,b){if(b!=null)if(!C.b.S(a,b)){b.a=a.length
a.push(b)}},
bA:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a
if(e==null){s=f.f!=null
e="GaussianBlur_"+(s?"1":"0")
r=e.charCodeAt(0)==0?e:e
q=a.fr.h(0,r)
if(q==null){e=a.a
q=new A.dW(e,r)
q.bh(e,r)
p=q.z=new A.hV(s,r)
o=new P.Q("")
o.a="precision mediump float;\n"
o.a="precision mediump float;\n\n"
o.a="precision mediump float;\n\nuniform sampler2D colorTxt;\n"
if(s){o.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform sampler2D blurTxt;\n"
e=o.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform sampler2D blurTxt;\nuniform vec4 blurAdj;\n"}else e=o.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\n"
e+="uniform vec2 blurScale;\n"
o.a=e
e+="\n"
o.a=e
e+="varying vec2 txt2D;\n"
o.a=e
o.a=e+"\n"
e=t.m
p.aM(o,3,H.d([0.75],e),H.d([0.5],e))
p.aM(o,6,H.d([0.42857,2.14286],e),H.d([0.41667,0.08333],e))
p.aM(o,9,H.d([0,1.8],e),H.d([0.5122,0.2439],e))
p.aM(o,12,H.d([0,1.38462,3.23077],e),H.d([0.22703,0.31622,0.07027],e))
p.aM(o,15,H.d([0.9375,2.8125],e),H.d([0.36184,0.13816],e))
p.aM(o,18,H.d([0.47368,2.36842,4.26316],e),H.d([0.29916,0.16318,0.03766],e))
e=o.a+="void main()\n"
e=o.a=e+"{\n"
e=(s?o.a=e+"   float blurValue = dot(texture2D(blurTxt, txt2D), blurAdj);\n":e)+"   float blurOffset = abs(blurValue);\n"
o.a=e
e+="\n"
o.a=e
e+="   if     (blurOffset < 0.15) gl_FragColor = texture2D(colorTxt, txt2D);\n"
o.a=e
e+="   else if(blurOffset < 0.3)  gl_FragColor = blur3();\n"
o.a=e
e+="   else if(blurOffset < 0.45) gl_FragColor = blur6();\n"
o.a=e
e+="   else if(blurOffset < 0.6)  gl_FragColor = blur9();\n"
o.a=e
e+="   else if(blurOffset < 0.75) gl_FragColor = blur12();\n"
o.a=e
e+="   else if(blurOffset < 0.9)  gl_FragColor = blur15();\n"
o.a=e
e+="   else                       gl_FragColor = blur18();\n"
o.a=e
e=o.a=e+"}\n"
q.bt(0,u.A.charCodeAt(0)==0?u.A:u.A,e.charCodeAt(0)==0?e:e)
q.Q=q.x.h(0,"posAttr")
q.ch=q.x.h(0,"txtAttr")
q.cx=t.q.a(q.y.h(0,"projViewObjMat"))
q.cy=t.O.a(q.y.h(0,"txt2DMat"))
e=t.c
q.dy=e.a(q.y.h(0,"colorTxt"))
q.dx=t.v.a(q.y.h(0,"blurScale"))
n=q.y
if(s){q.fr=e.a(n.h(0,"blurTxt"))
q.db=t.y.a(q.y.h(0,"blurAdj"))}else q.fx=t.n.a(n.h(0,"blurValue"))
a.bo(q)}e=f.a=q
b.e=null}p=e.z
e=b.e
if((!(e instanceof Z.b3)?b.e=null:e)==null){e=b.d
n=$.a5()
m=$.as()
m=e.bp(new Z.c1(a.a),new Z.aE(n.a|m.a))
m.an($.a5()).e=f.a.Q.c
m.an($.as()).e=f.a.ch.c
b.e=m}l=H.d([],t.A)
f.a9(l,f.e)
e=p.a
if(e)f.a9(l,f.f)
for(k=0;k<l.length;++k)l[k].V(a)
n=f.a
n.V(a)
m=f.e
n.ad(n.dy,m)
m=f.b
j=n.cy
j.toString
j.a8(m.a5(0,!0))
m=f.d
j=m.a
i=a.c
if(typeof j!=="number")return j.Y()
m=m.b
h=a.d
if(typeof m!=="number")return m.Y()
g=n.dx
g.a.uniform2f(g.d,j/i,m/h)
h=a.ge4()
n=n.cx
n.toString
n.a8(h.a5(0,!0))
n=f.a
if(e){e=f.f
n.ad(n.fr,e)
e=f.c
n.db.ek(e)}else{e=f.r
n=n.fx
n.a.uniform1f(n.d,e)}e=b.e
if(e instanceof Z.b3){e.V(a)
e.a3(a)
e.aC(a)}else b.e=null
e=f.a
e.toString
n=a.a
n.useProgram(null)
e.x.bq()
for(k=0;k<l.length;++k){e=l[k]
if(e.c){e.c=!1
n.activeTexture(33984+e.a)
n.bindTexture(3553,null)}}}}
O.ea.prototype={
gn:function(){var s=this.fr
return s==null?this.fr=D.E():s},
B:function(a){var s=this.fr
if(s!=null)s.C(a)},
ah:function(){return this.B(null)},
d0:function(a){this.a=null
this.B(a)},
h6:function(){return this.d0(null)},
f7:function(a,b){var s=new D.aJ()
s.b=!0
this.B(s)},
f9:function(a,b){var s=new D.aK()
s.b=!0
this.B(s)},
cP:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.A(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
o=p.gae()
n=d.h(0,p.gae())
d.k(0,o,n==null?1:n)}m=H.d([],t.am)
d.I(0,new O.ie(f,m))
C.b.aY(m,new O.ig())
l=new H.A(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
o=p.gae()
n=l.h(0,p.gae())
l.k(0,o,n==null?1:n)}k=H.d([],t.M)
l.I(0,new O.ih(f,k))
C.b.aY(k,new O.ii())
j=new H.A(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
o=p.gae()
n=j.h(0,p.gae())
j.k(0,o,n==null?1:n)}i=H.d([],t.d1)
j.I(0,new O.ij(f,i))
C.b.aY(i,new O.ik())
h=new H.A(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.u)(e),++q){p=e[q]
r=p.gae()
o=h.h(0,p.gae())
h.k(0,r,o==null?1:o)}g=H.d([],t.cz)
h.I(0,new O.il(f,g))
C.b.aY(g,new O.im())
e=C.c.a2(f.e.a.length+3,4)
f.dy.toString
return A.nB(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
a9:function(a,b){if(b!=null)if(!C.b.S(a,b)){b.a=a.length
a.push(b)}},
ab:function(a,b){var s,r,q
for(s=this.dx.a,s=new J.a1(s,s.length);s.w();){r=s.d
r.toString
q=$.cE
r.a=q==null?$.cE=new V.ax(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):q
q=r.b
if(q!=null)r.a=q.aD(0,b,r)}},
bA:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cP()
s=b4.fr.h(0,b3.b5)
if(s==null){s=A.nA(b3,b4.a)
b4.bo(s)}b3=b2.a=s
b5.e=null}r=b3.z
q=r.br
b3=b5.e
if(!(b3 instanceof Z.b3))b3=b5.e=null
if(b3==null||!b3.d.p(0,q)){b3=r.k4
if(b3)b5.d.av()
p=r.r1
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.d.c5()
o.a.c5()
o=o.e
if(o!=null)o.af(0)}o=r.rx
if(o){n=b5.d
m=n.e
if(m!=null)++m.d
n.a.hw()
n=n.e
if(n!=null)n.af(0)}l=b5.d.bp(new Z.c1(b4.a),q)
l.an($.a5()).e=b2.a.Q.c
if(b3)l.an($.aG()).e=b2.a.cx.c
if(p)l.an($.b0()).e=b2.a.ch.c
if(r.r2)l.an($.as()).e=b2.a.cy.c
if(o)l.an($.bk()).e=b2.a.db.c
if(r.ry)l.an($.b_()).e=b2.a.dx.c
b5.e=l}k=H.d([],t.A)
b2.a.V(b4)
if(r.fr){b3=b2.a
p=b4.dx
p=p.ga7(p)
b3=b3.dy
b3.toString
b3.a8(p.a5(0,!0))}if(r.fx){b3=b2.a
p=b4.gee()
b3=b3.fr
b3.toString
b3.a8(p.a5(0,!0))}b3=b2.a
p=b4.ge4()
b3=b3.fy
b3.toString
b3.a8(p.a5(0,!0))
if(r.go){b3=b2.a
p=b4.db
p=p.ga7(p)
b3=b3.fx
b3.toString
b3.a8(p.a5(0,!0))}if(r.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.a8(C.j.a5(p,!0))}if(r.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.a8(C.j.a5(p,!0))}if(r.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.a8(C.j.a5(p,!0))}if(r.aU>0){j=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,j)
for(i=0;i<j;++i){b3=b2.a
p=b2.e.a
if(i>=p.length)return H.b(p,i)
p=p[i]
b3=b3.r1
if(i>=b3.length)return H.b(b3,i)
b3=b3[i]
h=new Float32Array(H.c6(p.a5(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,h)}}b3=r.a
if(b3.a){p=b2.a
o=b2.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a9(k,b2.f.d)
b3=b2.a
p=b2.f.d
b3.ad(b3.rx,p)}if(r.k1){b3=r.b
if(b3.a){p=b2.a
o=b2.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a9(k,b2.r.d)
b3=b2.a
p=b2.r.d
b3.ad(b3.x2,p)}b3=r.c
if(b3.a){p=b2.a
o=b2.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a9(k,b2.x.d)
b3=b2.a
p=b2.x.d
b3.ad(b3.aU,p)}b3=r.d
if(b3.a){p=b2.a
o=b2.y.f
p=p.br
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a9(k,b2.y.d)
b3=b2.a
p=b2.y.d
b3.ad(b3.dt,p)}b3=r.e
p=b3.a
if(p||b3.b||!1){o=b2.a
n=b2.z.ch
o=o.dw
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.z.f
p=p.du
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a9(k,b2.z.d)
b3=b2.a
p=b2.z.d
b3.ad(b3.dv,p)}b3=r.z
if(b3.length>0){g=new H.A(t.a)
for(p=b2.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.u)(p),++f){e=p[f]
d=e.gae()
c=g.h(0,d)
if(c==null)c=0
g.k(0,d,c+1)
b=J.cc(b2.a.cc.h(0,d),c)
n=e.giz()
m=$.aQ
n=n.bf(m==null?$.aQ=new V.O(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.giD()
m=$.aQ
n=n.bf(m==null?$.aQ=new V.O(0,0,0):m)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaS(e)
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
if(e.ghH()){n=e.ghs()
m=b.e
m.a.uniform1f(m.d,n)
n=e.ght()
m=b.f
m.a.uniform1f(m.d,n)
n=e.ghu()
m=b.r
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.u)(b3),++f){o=b3[f].a
j=g.h(0,o)
if(j==null)j=0
o=b2.a.cb.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.Q
if(b3.length>0){p=b4.db
a=p.ga7(p)
a0=new H.A(t.a)
for(p=b2.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.u)(p),++f){e=p[f]
d=e.gae()
c=a0.h(0,d)
if(c==null)c=0
a0.k(0,d,c+1)
b=J.cc(b2.a.ce.h(0,d),c)
n=e.gdm(e)
m=a.a
a1=n.gdn(n)
if(typeof m!=="number")return m.j()
a1=C.d.j(m,a1)
m=a.b
a2=n.gdq(n)
if(typeof m!=="number")return m.j()
a2=C.d.j(m,a2)
m=a.c
a3=n.gdr()
if(typeof m!=="number")return m.j()
a3=C.d.j(m,a3)
m=a.e
a4=n.gdn(n)
if(typeof m!=="number")return m.j()
a4=C.d.j(m,a4)
m=a.f
a5=n.gdq(n)
if(typeof m!=="number")return m.j()
a5=C.d.j(m,a5)
m=a.r
a6=n.gdr()
if(typeof m!=="number")return m.j()
a6=C.d.j(m,a6)
m=a.y
a7=n.gdn(n)
if(typeof m!=="number")return m.j()
a7=C.d.j(m,a7)
m=a.z
a8=n.gdq(n)
if(typeof m!=="number")return m.j()
a8=C.d.j(m,a8)
m=a.Q
n=n.gdr()
if(typeof m!=="number")return m.j()
n=new V.F(a1+a2+a3,a4+a5+a6,a7+a8+C.d.j(m,n)).L()
m=b.e
a8=n.a
a7=n.b
n=n.c
m.a.uniform3f(m.d,a8,a7,n)
n=e.gaS(e)
a7=b.f
a7.a.uniform3f(a7.d,n.a,n.b,n.c)
e.gaX()
n=e.gdm(e)
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.giu()
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gbB(e)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaX()
if(!C.b.S(k,n)){n.a=k.length
k.push(n)}n=e.gaX()
m=n.gdR(n)
if(m){m=b.r
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.u)(b3),++f){o=b3[f].a
j=a0.h(0,o)
if(j==null)j=0
o=b2.a.cd.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.ch
if(b3.length>0){p=b4.db
a=p.ga7(p)
a9=new H.A(t.a)
for(p=b2.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.u)(p),++f){e=p[f]
d=e.gae()
c=a9.h(0,d)
if(c==null)c=0
a9.k(0,d,c+1)
b=J.cc(b2.a.cg.h(0,d),c)
b0=a.j(0,e.a)
n=e.a
m=$.aQ
n=n.bf(m==null?$.aQ=new V.O(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=$.aQ
n=b0.bf(n==null?$.aQ=new V.O(0,0,0):n)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.c
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.r
m=b.y
m.a.uniform1f(m.d,n)
n=e.x
m=b.z
m.a.uniform1f(m.d,n)
n=e.y
m=b.Q
m.a.uniform1f(m.d,n)}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.u)(b3),++f){o=b3[f].a
j=a9.h(0,o)
if(j==null)j=0
o=b2.a.cf.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.cx
if(b3.length>0){p=b4.db
a=p.ga7(p)
b1=new H.A(t.a)
for(p=b2.dx.x,o=p.length,f=0;f<p.length;p.length===o||(0,H.u)(p),++f){e=p[f]
d=e.gae()
c=b1.h(0,d)
if(c==null)c=0
b1.k(0,d,c+1)
b=J.cc(b2.a.cj.h(0,d),c)
n=e.gic(e)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gdm(e).L()
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=a.bf(e.gic(e))
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaS(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gaX()
n=e.giu()
m=b.f
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gbB(e)
m=b.r
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.giN()
m=b.x
m.a.uniform1f(m.d,n)
n=e.giO()
m=b.y
m.a.uniform1f(m.d,n)
e.gaX()
n=e.gaX()
if(!C.b.S(k,n)){n.a=k.length
k.push(n)}n=e.gaX()
m=n.gdR(n)
if(m){m=b.dx
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}e.gcB()
n=e.giy()
m=b.z
m.a.uniform4f(m.d,n.a,n.b,n.c,n.d)
n=e.gcB()
if(!C.b.S(k,n)){n.a=k.length
k.push(n)}n=e.gcB()
m=n.gdR(n)
if(m){m=b.dy
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}if(e.giC()){n=e.giB()
m=b.Q
m.a.uniform1f(m.d,n)
n=e.giA()
m=b.ch
m.a.uniform1f(m.d,n)}if(e.ghH()){n=e.ghs()
m=b.cx
m.a.uniform1f(m.d,n)
n=e.ght()
m=b.cy
m.a.uniform1f(m.d,n)
n=e.ghu()
m=b.db
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.u)(b3),++f){o=b3[f].a
j=b1.h(0,o)
if(j==null)j=0
o=b2.a.ci.h(0,o)
o.a.uniform1i(o.d,j)}}}if(r.f.b){b2.a9(k,b2.Q.d)
b3=b2.a
p=b2.Q.d
b3.ad(b3.dz,p)}if(r.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.ga7(p).hS(0)}b3=b3.id
b3.toString
b3.a8(p.a5(0,!0))}if(r.db){b2.a9(k,b2.ch)
b3=b2.a
p=b2.ch
b3.h8(b3.dA,p)
b3=r.r
if(b3.a){p=b2.a
o=b2.cx.f
p=p.dB
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a9(k,b2.cx.d)
b3=b2.a
p=b2.cx.d
b3.ad(b3.dC,p)}b3=r.x
p=b3.a
if(p||b3.b||!1){o=b2.a
n=b2.cy.ch
o=o.dD
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.cy.f
p=p.dE
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a9(k,b2.cy.d)
b3=b2.a
p=b2.cy.d
b3.ad(b3.dF,p)}}b3=r.y
p=b3.a
o=!p
if(!o||b3.b||!1){if(p){p=b2.a
n=b2.db.f
p=p.dG
p.a.uniform1f(p.d,n)}if(b3.b){b2.a9(k,b2.db.d)
p=b2.a
n=b2.db.d
p.ad(p.dH,n)}p=b4.a
p.enable(3042)
p.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].V(b4)
p=b5.e
p.V(b4)
p.a3(b4)
p.aC(b4)
if(!o||b3.b||!1)b4.a.disable(3042)
for(b3=b4.a,i=0;i<k.length;++i){p=k[i]
if(p.c){p.c=!1
b3.activeTexture(33984+p.a)
b3.bindTexture(3553,null)}}p=b2.a
p.toString
b3.useProgram(null)
p.x.bq()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cP().b5}}
O.ie.prototype={
$2:function(a,b){if(typeof b!=="number")return b.q()
return this.b.push(new A.dF(a,C.c.a2(b+3,4)*4))}}
O.ig.prototype={
$2:function(a,b){return J.dx(a.a,b.a)}}
O.ih.prototype={
$2:function(a,b){if(typeof b!=="number")return b.q()
return this.b.push(new A.dQ(a,C.c.a2(b+3,4)*4))}}
O.ii.prototype={
$2:function(a,b){return J.dx(a.a,b.a)}}
O.ij.prototype={
$2:function(a,b){if(typeof b!=="number")return b.q()
return this.b.push(new A.eu(a,C.c.a2(b+3,4)*4))}}
O.ik.prototype={
$2:function(a,b){return J.dx(a.a,b.a)}}
O.il.prototype={
$2:function(a,b){if(typeof b!=="number")return b.q()
return this.b.push(new A.eG(a,C.c.a2(b+3,4)*4))}}
O.im.prototype={
$2:function(a,b){return J.dx(a.a,b.a)}}
O.i8.prototype={
aG:function(){var s,r=this
r.cF()
s=r.f
$.x().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.r(r.b,s,1)
s.b=!0
r.a.B(s)}}}
O.cC.prototype={
B:function(a){return this.a.B(a)},
ah:function(){return this.B(null)},
aG:function(){},
bl:function(a){var s,r,q=this
if(!q.c.p(0,a)){s=q.c
if(s.a||s.b||!1)r=!(a.a||a.b||!1)
else r=!0
q.c=a
if(r)q.aG()
s=q.a
s.a=null
s.B(null)}},
sbC:function(a){var s,r,q=this,p=a==null
if(p){s=q.c
q.bl(new A.a_(s.a,!1,!1))}else{s=q.c
if(!s.b)q.bl(new A.a_(s.a,!0,!1))}s=q.d
if(s!=a){if(s!=null)s.gn().D(0,q.ga6())
r=q.d
q.d=a
if(!p)a.gn().m(0,q.ga6())
p=new D.r(q.b+".texture2D",r,q.d)
p.b=!0
q.a.B(p)}}}
O.i9.prototype={}
O.aN.prototype={
d2:function(a){var s,r,q=this
if(!q.f.p(0,a)){s=q.f
q.f=a
r=new D.r(q.b+".color",s,a)
r.b=!0
q.a.B(r)}},
aG:function(){this.cF()
this.d2(new V.Z(1,1,1))},
saS:function(a,b){this.bl(new A.a_(!0,this.c.b,!1))
this.d2(b)}}
O.ib.prototype={}
O.ic.prototype={
aG:function(){var s,r=this
r.cG()
s=r.ch
$.x().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.r(r.b+".refraction",s,1)
s.b=!0
r.a.B(s)}}}
O.id.prototype={
d4:function(a){var s=this,r=s.ch
$.x().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.r(s.b+".shininess",r,a)
r.b=!0
s.a.B(r)}},
aG:function(){this.cG()
this.d4(100)}}
O.eO.prototype={}
O.eS.prototype={
gn:function(){var s=this.e
return s==null?this.e=D.E():s},
B:function(a){var s=this.e
if(s!=null)s.C(a)},
ah:function(){return this.B(null)},
fn:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.ga6(),q=t.f,p=0;p<b.length;b.length===s||(0,H.u)(b),++p){o=b[p]
if(o!=null){n=o.f
if(n==null){n=new D.bp()
n.d=0
o.f=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}this.ah()},
fp:function(a,b){var s,r
for(s=b.gR(b),r=this.ga6();s.w();)s.gE(s).gn().D(0,r)
this.ah()},
sdf:function(a){var s=this.f
if(s!==a){this.f=a
s=new D.r("blend",s,a)
s.b=!0
this.B(s)}},
ab:function(a,b){},
eS:function(a){a=C.c.a2(a+3,4)*4
if(a<=0)return 4
return a},
bA:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.eS(h.c.a.length)
if(g!==h.d||h.f!=h.r){h.d=g
h.r=h.f
h.b=null}s=h.b
if(s==null){s=h.f
r="TextureLayout_"+g+"_"+C.c.i(s.a)
q=a.fr.h(0,r)
if(q==null){q=A.nY(g,s,a.a)
a.bo(q)}h.b=q
s=q}if(b.e==null){s=b.d.bp(new Z.c1(a.a),$.a5())
r=s.an($.a5())
p=h.b
r.e=p.z.c
b.e=s
s=p}s.V(a)
o=H.d([],t.A)
for(n=0,m=0;s=h.c.a,m<s.length;++m){l=s[m]
if(l!=null&&l.a!=null){s=l.a
if(s!=null)if(!C.b.S(o,s)){s.a=o.length
o.push(s)}s=h.b
r=l.a
s=s.cx
if(n>=s.length)return H.b(s,n)
s=s[n]
p=r==null||!r.d
k=s.a
s=s.d
if(p)k.uniform1i(s,0)
else k.uniform1i(s,r.a)
s=h.b
r=l.b
s=s.cy
if(n>=s.length)return H.b(s,n)
s=s[n]
if(r==null){r=$.cE
if(r==null){r=new V.ax(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.cE=r}}j=new Float32Array(H.c6(r.a5(0,!0)))
s.a.uniformMatrix4fv(s.d,!1,j)
s=h.b
i=l.c
s.toString
if(i==null){r=$.cL
if(r==null){r=V.cK(0,0,1,1)
$.cL=r
i=r}else i=r}r=s.db
if(n>=r.length)return H.b(r,n)
r=r[n]
r.a.uniform2f(r.d,i.a,i.b)
s=s.dx
if(n>=s.length)return H.b(s,n)
s=s[n]
s.a.uniform2f(s.d,i.c,i.d)
s=h.b
i=l.d
s.toString
if(i==null){r=$.cL
if(r==null){r=V.cK(0,0,1,1)
$.cL=r
i=r}else i=r}r=s.dy
if(n>=r.length)return H.b(r,n)
r=r[n]
r.a.uniform2f(r.d,i.a,i.b)
s=s.fr
if(n>=s.length)return H.b(s,n)
s=s[n]
s.a.uniform2f(s.d,i.c,i.d)
s=h.b
r=l.e
s=s.fx
if(n>=s.length)return H.b(s,n)
s=s[n]
r=r?1:0
s.a.uniform1i(s.d,r);++n}}s=h.b.Q
s.a.uniform1i(s.d,n)
s=h.b
r=h.a
s.ch.ej(r)
for(m=0;m<o.length;++m)o[m].V(a)
s=b.e
if(s instanceof Z.b3){s.V(a)
s.a3(a)
s.aC(a)}else b.e=null
s=h.b
s.toString
r=a.a
r.useProgram(null)
s.x.bq()
for(m=0;m<o.length;++m){s=o[m]
if(s.c){s.c=!1
r.activeTexture(33984+s.a)
r.bindTexture(3553,null)}}}}
O.bx.prototype={
B:function(a){var s=this.f
if(s!=null)s.C(a)},
ah:function(){return this.B(null)}}
T.eR.prototype={}
T.iO.prototype={}
T.iP.prototype={
d3:function(){if(!this.d){this.d=!0
var s=this.y
if(s!=null)s.ds()}},
gn:function(){var s=this.y
return s==null?this.y=D.E():s},
V:function(a){var s,r=this
if(!r.c&&r.d){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(3553,r.b)}}}
T.iQ.prototype={
bw:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=document.createElement("img")
s.src=a
r=T.kJ(o)
W.Y(s,"load",new T.iR(this,r,s,!1,o,!1,!1),!1)
return r},
h7:function(a,b,c){var s,r,q,p
b=V.du(b)
s=V.du(a.width)
r=V.du(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.kv()
q.width=s
q.height=r
p=C.i.eh(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.pG(p.getImageData(0,0,q.width,q.height))}}}
T.iR.prototype={
$1:function(a){var s,r,q=this,p=3553,o=q.b,n=q.c
o.e=n.width
o.f=n.height
s=q.a
r=s.h7(n,s.b,q.d)
o.r=n.width
o.x=n.height
n=s.a
n.bindTexture(p,q.e)
n.pixelStorei(37440,q.f?1:0)
C.A.io(n,p,0,6408,6408,5121,r)
if(q.r)n.generateMipmap(p)
n.bindTexture(p,null)
o.d3();++s.e}}
T.iS.prototype={
eR:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.c
if(typeof d!=="number")return d.cH()
s=C.c.a2(d,2)
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
if(g<0||g>=p)return H.b(q,g)
e=q[g]
if(f<0||f>=p)return H.b(q,f)
q[g]=q[f]
q[f]=e}}}}}
X.hp.prototype={
gn:function(){var s=this.fr
return s==null?this.fr=D.E():s},
a1:function(a){var s=this.fr
if(s!=null)s.C(a)},
sau:function(a,b){var s,r=this
if(b<1)b=1
s=r.a
if(s!==b){r.y=null
r.c=r.a=b
s=new D.r("width",s,b)
s.b=!0
r.a1(s)}},
sao:function(a,b){var s,r=this
if(b<1)b=1
s=r.b
if(s!==b){r.y=null
r.d=r.b=b
s=new D.r("height",s,b)
s.b=!0
r.a1(s)}},
V:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=3553,c=36161,b=36160
if(f.f){s=a.a
r=s.drawingBufferWidth
q=f.r
if(typeof r!=="number")return r.j()
f.sau(0,C.d.a_(r*q))
s=s.drawingBufferHeight
q=f.x
if(typeof s!=="number")return s.j()
f.sao(0,C.d.a_(s*q))}if(f.y==null){s=a.a
r=f.ch
q=f.a
p=f.b
o=s.getParameter(3379)
n=V.du(q)
m=V.du(p)
o=V.du(o)
n=Math.min(n,o)
m=Math.min(m,o)
l=s.createTexture()
s.bindTexture(d,l)
s.texParameteri(d,10242,33071)
s.texParameteri(d,10243,33071)
s.texParameteri(d,10241,9729)
s.texParameteri(d,10240,9729)
C.A.e8(s,d,0,6408,n,m,0,6408,5121,e)
s.bindTexture(d,e)
k=T.kJ(l)
k.e=q
k.f=p
k.r=n
k.x=m
k.d3()
r.b=k.b
r.c=k.c
r.d=k.d
r.e=k.e
r.f=k.f
r.r=k.r
r.x=k.x
r=r.y
if(r!=null)r.ds()
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
if(typeof i!=="number")return H.h(i)
h=C.d.a_(j*i)
r=r.b
j=f.d
if(typeof j!=="number")return H.h(j)
s.viewport(h,C.d.a_(r*j),C.d.a_(q*i),C.d.a_(p*j))
s.clearDepth(f.db)
if(f.cy){r=f.cx
s.clearColor(r.a,r.b,r.c,r.d)
g=16640}else g=256
if(g>0)s.clear(g)},
aC:function(a){a.a.bindFramebuffer(36160,null)}}
X.ku.prototype={}
X.hU.prototype={
gn:function(){var s=this.x
return s==null?this.x=D.E():s},
V:function(a){var s,r,q,p,o,n,m,l=this,k=a.a
k.bindFramebuffer(36160,null)
k.enable(2884)
k.enable(2929)
k.depthFunc(513)
s=k.drawingBufferWidth
r=k.drawingBufferHeight
q=l.r
p=q.a
if(typeof s!=="number")return H.h(s)
o=C.d.a_(p*s)
p=q.b
if(typeof r!=="number")return H.h(r)
n=C.d.a_(p*r)
p=C.d.a_(q.c*s)
a.c=p
q=C.d.a_(q.d*r)
a.d=q
k.viewport(o,n,p,q)
k.clearDepth(l.c)
if(l.b){q=l.a
k.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
k.clear(m)},
aC:function(a){}}
X.hX.prototype={
gn:function(){var s=this.b
return s==null?this.b=D.E():s}}
X.ep.prototype={
gn:function(){var s=this.f
return s==null?this.f=D.E():s},
a1:function(a){var s=this.f
if(s!=null)s.C(a)},
eB:function(){return this.a1(null)},
sb9:function(a){var s,r,q=this
if(!J.C(q.b,a)){s=q.b
if(s!=null)s.gn().D(0,q.gcL())
r=q.b
q.b=a
if(a!=null)a.gn().m(0,q.gcL())
s=new D.r("mover",r,q.b)
s.b=!0
q.a1(s)}}}
X.iM.prototype={}
V.hu.prototype={
da:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if(j.c==null)return
s=j.d.length
r=P.kM().gbz().h(0,j.a)
if(r==null||r.length<=s){q=d
p=!0}else{if(s>=r.length)return H.b(r,s)
q=r[s]==="1"
p=!1}c.$1(q)
o=document
n=o.createElement("label")
m=n.style
m.whiteSpace="nowrap"
J.kr(j.c).m(0,n)
l=W.no("checkbox")
l.checked=q
W.Y(l,"change",new V.hv(j,c,l,s),!1)
n.children
n.appendChild(l)
k=o.createElement("span")
k.textContent=b
n.children
n.appendChild(k)
J.kr(j.c).m(0,o.createElement("br"))
j.d.push(l)
if(p)j.d9(s,q)},
b0:function(a,b,c){return this.da(a,b,c,!1)},
d9:function(a,b){var s,r,q,p,o,n=this.a,m=P.kM().gbz().h(0,n)
if(m==null)m=""
s=m.length
if(s<a)m=C.a.i4(m,a-s+1,"0")
r=a>0?C.a.t(m,0,a):""
r+=b?"1":"0"
s=a+1
if(s<m.length)r+=C.a.am(m,s)
q=P.kM()
s=t.X
p=P.nx(q.gbz(),s,s)
p.k(0,n,r)
o=q.e5(0,p)
n=window.history
s=o.gc_()
n.toString
n.replaceState(new P.jG([],[]).bE(""),"",s)}}
V.hv.prototype={
$1:function(a){var s=this,r=s.c
s.b.$1(r.checked)
s.a.d9(s.d,r.checked)}}
V.kj.prototype={
$1:function(a){var s=C.d.ea(this.a.ghP(),2)
if(s!=="0.00")P.la(s+" fps")}}
V.iG.prototype={
es:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.Y(o,"scroll",new V.iI(m),!1)},
dc:function(a){var s,r,q,p,o,n,m,l
this.hb()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.b.hT(a)
q.toString
p=new H.N(p)
p=new P.c4(q.eb(new H.bP(p,p.gl(p))).a())
for(;p.w();){q=p.gE(p)
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
if(H.mI(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.b(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.kZ(C.W,q,C.e,!1)
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
s=new L.iV()
s.a=new H.A(t.cn)
s.b=new H.A(t.w)
s.c=P.lx(t.X)
s.d=s.O(0,o)
r=s.O(0,o).u(0,n)
q=K.a3(new H.N("*"))
r.a.push(q)
r.c=!0
r=s.O(0,n).u(0,n)
q=new K.b7()
p=t.L
q.a=H.d([],p)
r.a.push(q)
r=K.a3(new H.N("*"))
q.a.push(r)
r=s.O(0,n).u(0,"BoldEnd")
q=K.a3(new H.N("*"))
r.a.push(q)
r.c=!0
r=s.O(0,o).u(0,m)
q=K.a3(new H.N("_"))
r.a.push(q)
r.c=!0
r=s.O(0,m).u(0,m)
q=new K.b7()
q.a=H.d([],p)
r.a.push(q)
r=K.a3(new H.N("_"))
q.a.push(r)
r=s.O(0,m).u(0,l)
q=K.a3(new H.N("_"))
r.a.push(q)
r.c=!0
r=s.O(0,o).u(0,k)
q=K.a3(new H.N("`"))
r.a.push(q)
r.c=!0
r=s.O(0,k).u(0,k)
q=new K.b7()
q.a=H.d([],p)
r.a.push(q)
r=K.a3(new H.N("`"))
q.a.push(r)
r=s.O(0,k).u(0,"CodeEnd")
q=K.a3(new H.N("`"))
r.a.push(q)
r.c=!0
r=s.O(0,o).u(0,j)
q=K.a3(new H.N("["))
r.a.push(q)
r.c=!0
r=s.O(0,j).u(0,i)
q=K.a3(new H.N("|"))
r.a.push(q)
q=s.O(0,j).u(0,h)
r=K.a3(new H.N("]"))
q.a.push(r)
q.c=!0
q=s.O(0,j).u(0,j)
r=new K.b7()
r.a=H.d([],p)
q.a.push(r)
q=K.a3(new H.N("|]"))
r.a.push(q)
q=s.O(0,i).u(0,h)
r=K.a3(new H.N("]"))
q.a.push(r)
q.c=!0
q=s.O(0,i).u(0,i)
r=new K.b7()
r.a=H.d([],p)
q.a.push(r)
q=K.a3(new H.N("|]"))
r.a.push(q)
s.O(0,o).u(0,g).a.push(new K.hk())
q=s.O(0,g).u(0,g)
r=new K.b7()
r.a=H.d([],p)
q.a.push(r)
q=K.a3(new H.N("*_`["))
r.a.push(q)
q=s.O(0,"BoldEnd")
q.d=q.a.be(n)
q=s.O(0,l)
q.d=q.a.be(m)
q=s.O(0,"CodeEnd")
q.d=q.a.be(k)
q=s.O(0,h)
q.d=q.a.be("Link")
q=s.O(0,g)
q.d=q.a.be(g)
this.b=s}}
V.iI.prototype={
$1:function(a){P.lT(C.p,new V.iH(this.a))}}
V.iH.prototype={
$0:function(){var s=C.d.a_(document.documentElement.scrollTop),r=this.a.style,q=H.f(-0.01*s)+"px"
r.top=q}}
K.kb.prototype={
$1:function(a){var s,r,q,p,o,n=this.c,m=this.b.f.a,l=n.r,k=n.x
if(typeof k!=="number")return k.v()
s=k-k-0
m.bindFramebuffer(36160,m.createFramebuffer())
m.readBuffer(36064)
m.framebufferTexture2D(36160,36064,3553,n.b,0)
if(typeof l!=="number")return l.j()
if(typeof k!=="number")return H.h(k)
r=new Uint8Array(l*k*4)
m.readPixels(0,s,l,k,6408,5121,r)
m.bindFramebuffer(36160,null)
q=new T.iS(r,l,k)
q.eR()
p=F.pN(150,150)
n=this.a
n.a=p
p.av()
n.a.hq(q,0.05)
m=n.a
o=$.aG()
o.toString
m.it(new Z.aE($.lb().a&~o.a))
n.a.is(!1)
n.a.av()}}
K.kc.prototype={
$1:function(a){var s=this.a,r=s.r
r.sbC(a?this.b:null)
s=s.x
s.sbC(a?this.b:null)}}
K.kd.prototype={
$1:function(a){var s=this.a.z
s.sbC(a?this.b:null)}}
K.ke.prototype={
$1:function(a){var s=this.a.Q
s.sbC(a?this.b:null)}}
K.kf.prototype={
$1:function(a){var s=a?this.a.a:this.c
this.b.sbG(0,s)}}
K.kg.prototype={
$1:function(a){var s=this.a,r=a?this.b.ch:null
s.d.sb1(r)
s.f.sb1(r)}}
K.kh.prototype={
$1:function(a){var s=a?this.b:null
this.a.sas(s)}};(function aliases(){var s=J.a.prototype
s.en=s.i
s=J.b5.prototype
s.eo=s.i
s=K.dY.prototype
s.em=s.aV
s.cE=s.i
s=O.cC.prototype
s.cF=s.aG
s=O.aN.prototype
s.cG=s.aG})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"oU","ns",22)
r(P,"pz","o6",8)
r(P,"pA","o7",8)
r(P,"pB","o8",8)
q(P,"my","pu",9)
r(W,"r6","hJ",23)
var k
p(k=E.b4.prototype,"gdZ",0,0,null,["$1","$0"],["e_","i2"],0,0)
p(k,"ge0",0,0,null,["$1","$0"],["e1","i3"],0,0)
p(k,"gdX",0,0,null,["$1","$0"],["dY","i1"],0,0)
p(k,"gdV",0,0,null,["$1","$0"],["dW","hZ"],0,0)
o(k,"ghX","hY",4)
o(k,"gi_","i0",4)
p(k=E.eU.prototype,"gcI",0,0,null,["$1","$0"],["cK","cJ"],0,0)
n(k,"gij","e6",9)
m(k=X.fa.prototype,"gfq","fs",5)
m(k,"gfa","fb",5)
m(k,"gfg","fh",2)
m(k,"gfv","fw",10)
m(k,"gft","fu",10)
m(k,"gfB","fC",2)
m(k,"gfF","fG",2)
m(k,"gfk","fl",2)
m(k,"gfD","fE",2)
m(k,"gfi","fj",2)
m(k,"gfH","fI",20)
m(k,"gfJ","fK",5)
m(k,"gfZ","h_",6)
m(k,"gfV","fW",6)
m(k,"gfX","fY",6)
p(k=D.cw.prototype,"gcY",0,0,null,["$1","$0"],["cZ","fz"],0,0)
m(k,"gfL","fM",21)
o(k,"gf4","f5",11)
o(k,"gfP","fQ",11)
p(D.bw.prototype,"gev",0,0,null,["$1","$0"],["ag","ew"],0,0)
l(V.a4.prototype,"gl","b7",7)
l(V.F.prototype,"gl","b7",7)
l(V.c0.prototype,"gl","b7",7)
p(k=U.bL.prototype,"gbk",0,0,null,["$1","$0"],["K","aA"],0,0)
o(k,"gex","ey",12)
o(k,"gfN","fO",12)
p(k=U.cY.prototype,"gbk",0,0,null,["$1","$0"],["K","aA"],0,0)
m(k,"geX","eY",1)
m(k,"geZ","f_",1)
m(k,"gf0","f1",1)
m(k,"geT","eU",1)
m(k,"geV","eW",1)
m(k,"ghi","hj",1)
m(k,"ghg","hh",1)
m(k,"ghe","hf",1)
m(U.cZ.prototype,"gf2","f3",1)
p(k=M.ce.prototype,"gU",0,0,null,["$1","$0"],["T","aE"],0,0)
o(k,"gfR","fS",13)
o(k,"gfT","fU",13)
p(M.ci.prototype,"gU",0,0,null,["$1","$0"],["T","aE"],0,0)
p(k=M.cn.prototype,"gU",0,0,null,["$1","$0"],["T","aE"],0,0)
o(k,"gfc","fd",4)
o(k,"gfe","ff",4)
p(M.cr.prototype,"gU",0,0,null,["$1","$0"],["T","aE"],0,0)
p(O.dX.prototype,"ga6",0,0,null,["$1","$0"],["B","ah"],0,0)
p(k=O.ea.prototype,"ga6",0,0,null,["$1","$0"],["B","ah"],0,0)
p(k,"gh5",0,0,null,["$1","$0"],["d0","h6"],0,0)
o(k,"gf6","f7",14)
o(k,"gf8","f9",14)
p(O.cC.prototype,"ga6",0,0,null,["$1","$0"],["B","ah"],0,0)
p(k=O.eS.prototype,"ga6",0,0,null,["$1","$0"],["B","ah"],0,0)
o(k,"gfm","fn",15)
o(k,"gfo","fp",15)
p(O.bx.prototype,"ga6",0,0,null,["$1","$0"],["B","ah"],0,0)
p(X.ep.prototype,"gcL",0,0,null,["$1","$0"],["a1","eB"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.L,null)
q(P.L,[H.kD,J.a,J.a1,P.J,P.d4,P.i,H.bP,P.e_,H.cp,H.f7,H.cg,H.iY,H.it,H.fU,H.bH,P.aw,H.i1,H.e7,H.e1,H.an,H.fw,P.dg,P.c3,P.c4,P.ff,P.cO,P.eL,P.cP,P.jP,P.da,P.jB,P.d3,P.j,P.h6,P.cB,P.dJ,P.jO,P.jN,P.aX,P.ag,P.P,P.bo,P.eo,P.cN,P.ft,P.hT,P.o,P.H,P.am,P.B,P.Q,P.bA,P.j7,P.fO,W.hA,W.dI,W.ky,W.kO,W.K,W.cq,P.jF,P.di,P.fM,P.bc,K.hk,K.dY,K.i7,K.iB,L.eI,L.eV,L.eW,L.iV,O.a6,O.cD,E.hs,E.b4,E.bG,E.bV,E.fq,E.iw,E.eU,Z.fd,Z.c1,Z.b3,Z.bN,Z.aE,D.ht,D.bp,D.R,X.dH,X.e3,X.i_,X.i5,X.az,X.ir,X.iW,X.fa,D.dE,D.dP,D.S,D.bw,D.eF,V.Z,V.af,V.hM,V.eb,V.ax,V.aa,V.O,V.aR,V.ex,V.a4,V.F,V.c0,U.cY,U.cZ,M.ci,M.cn,M.cr,M.X,A.dB,A.hm,A.a_,A.hV,A.dF,A.dQ,A.eu,A.eG,A.ia,A.cS,A.cT,A.cV,A.cX,A.bI,A.f_,A.j4,F.dS,F.hQ,F.e6,F.i0,F.es,F.iC,F.iD,F.iE,F.iF,F.fb,F.jj,F.jk,F.jn,F.jp,F.jq,F.jr,O.eO,O.cC,O.ib,O.bx,T.iQ,T.iS,X.iM,X.ku,X.hX,X.ep,V.hu,V.iG])
q(J.a,[J.e0,J.cv,J.b5,J.v,J.bs,J.aL,H.cF,H.U,W.e,W.hj,W.bm,W.aI,W.I,W.fk,W.al,W.hD,W.hF,W.fm,W.cl,W.fo,W.hG,W.l,W.fu,W.au,W.hW,W.fy,W.br,W.i4,W.io,W.fC,W.fD,W.ay,W.fE,W.fG,W.aA,W.fK,W.fN,W.aB,W.fP,W.aC,W.fV,W.ap,W.fZ,W.iU,W.aD,W.h0,W.iX,W.jc,W.h7,W.h9,W.hb,W.hd,W.hf,P.aM,P.fA,P.aP,P.fI,P.iu,P.fW,P.aT,P.h2,P.hn,P.fg,P.ey,P.fS])
q(J.b5,[J.eq,J.bz,J.av])
r(J.hY,J.v)
q(J.bs,[J.cu,J.ct])
q(P.J,[H.e4,H.ek,H.e2,H.f6,H.eA,H.fr,P.dA,P.el,P.ak,P.f8,P.f5,P.eJ,P.dK,P.dM])
r(P.cy,P.d4)
q(P.cy,[H.bZ,W.fi,W.fh,P.dU])
r(H.N,H.bZ)
q(P.i,[H.m,H.bu,H.d0,P.cs])
r(H.cm,H.bu)
q(P.e_,[H.e8,H.fe])
r(H.ch,H.cg)
q(H.bH,[H.iN,H.hZ,H.k5,H.k6,H.k7,P.jv,P.ju,P.jw,P.jx,P.jK,P.jJ,P.jZ,P.jD,P.jE,P.i2,P.i6,P.jf,P.jg,P.hH,P.hI,P.jb,P.j8,P.j9,P.ja,P.jM,P.jL,P.jU,P.jT,P.jV,P.jW,W.ip,W.iq,W.iA,W.iL,W.jy,P.jH,P.jI,P.k_,P.hR,P.hS,P.ho,E.ix,E.iy,E.iz,E.iT,D.hO,D.hP,F.jQ,F.kk,F.kl,F.k2,F.k3,F.jt,F.js,F.jl,F.jm,O.ie,O.ig,O.ih,O.ii,O.ij,O.ik,O.il,O.im,T.iR,V.hv,V.kj,V.iI,V.iH,K.kb,K.kc,K.kd,K.ke,K.kf,K.kg,K.kh])
q(H.iN,[H.iK,H.cd])
r(P.cA,P.aw)
r(H.A,P.cA)
r(H.cx,H.m)
r(H.bT,H.U)
q(H.bT,[H.d6,H.d8])
r(H.d7,H.d6)
r(H.bv,H.d7)
r(H.d9,H.d8)
r(H.cG,H.d9)
q(H.cG,[H.ef,H.eg,H.eh,H.ei,H.ej,H.cH,H.bU])
r(H.dh,H.fr)
r(P.dd,P.cs)
r(P.jC,P.jP)
r(P.d2,P.da)
r(P.dl,P.cB)
r(P.c_,P.dl)
q(P.dJ,[P.hq,P.hK])
r(P.dL,P.eL)
q(P.dL,[P.hr,P.jh,P.je])
r(P.jd,P.hK)
q(P.P,[P.W,P.k])
q(P.ak,[P.bX,P.dZ])
r(P.fl,P.bA)
q(W.e,[W.w,W.dT,W.bQ,W.ao,W.db,W.aq,W.ab,W.de,W.fc,W.c2,P.dD,P.b2])
q(W.w,[W.G,W.at])
q(W.G,[W.q,P.n])
q(W.q,[W.dy,W.dz,W.bn,W.dV,W.bM,W.bO,W.eB,W.bb])
r(W.hz,W.aI)
r(W.cj,W.fk)
q(W.al,[W.hB,W.hC])
r(W.fn,W.fm)
r(W.ck,W.fn)
r(W.fp,W.fo)
r(W.dR,W.fp)
r(W.ah,W.bm)
r(W.fv,W.fu)
r(W.bK,W.fv)
r(W.fz,W.fy)
r(W.bq,W.fz)
r(W.aV,W.l)
q(W.aV,[W.bt,W.ai,W.by])
r(W.ec,W.fC)
r(W.ed,W.fD)
r(W.fF,W.fE)
r(W.ee,W.fF)
r(W.fH,W.fG)
r(W.cI,W.fH)
r(W.fL,W.fK)
r(W.er,W.fL)
r(W.ez,W.fN)
r(W.dc,W.db)
r(W.eD,W.dc)
r(W.fQ,W.fP)
r(W.eE,W.fQ)
r(W.eK,W.fV)
r(W.h_,W.fZ)
r(W.eP,W.h_)
r(W.df,W.de)
r(W.eQ,W.df)
r(W.h1,W.h0)
r(W.eX,W.h1)
r(W.bd,W.ai)
r(W.h8,W.h7)
r(W.fj,W.h8)
r(W.d1,W.cl)
r(W.ha,W.h9)
r(W.fx,W.ha)
r(W.hc,W.hb)
r(W.d5,W.hc)
r(W.he,W.hd)
r(W.fR,W.he)
r(W.hg,W.hf)
r(W.fY,W.hg)
r(W.fs,P.cO)
r(P.jG,P.jF)
r(P.a7,P.fM)
r(P.fB,P.fA)
r(P.e5,P.fB)
r(P.fJ,P.fI)
r(P.em,P.fJ)
r(P.fX,P.fW)
r(P.eM,P.fX)
r(P.h3,P.h2)
r(P.eY,P.h3)
r(P.dC,P.fg)
r(P.en,P.b2)
r(P.fT,P.fS)
r(P.eH,P.fT)
q(K.dY,[K.b7,L.eZ])
q(E.hs,[Z.dG,A.ba,T.eR])
q(D.R,[D.aJ,D.aK,D.r,X.et])
q(X.et,[X.cz,X.bR,X.bS,X.cQ])
q(O.a6,[D.cw,U.bL,M.ce])
q(D.ht,[U.hy,U.T])
q(U.T,[U.cf,U.cM])
q(A.ba,[A.dO,A.dW,A.e9,A.eT])
q(A.f_,[A.bY,A.j1,A.j2,A.j3,A.j0,A.f0,A.cR,A.f1,A.f2,A.j5,A.f3,A.cU,A.cW,A.f4])
r(F.iJ,F.hQ)
r(F.j_,F.i0)
r(F.jo,F.jp)
r(F.is,F.jq)
q(O.eO,[O.hE,O.dX,O.ea,O.eS])
q(O.cC,[O.i8,O.i9,O.aN])
q(O.aN,[O.ic,O.id])
r(T.iO,T.eR)
r(T.iP,T.iO)
q(X.iM,[X.hp,X.hU])
s(H.bZ,H.f7)
s(H.d6,P.j)
s(H.d7,H.cp)
s(H.d8,P.j)
s(H.d9,H.cp)
s(P.d4,P.j)
s(P.dl,P.h6)
s(W.fk,W.hA)
s(W.fm,P.j)
s(W.fn,W.K)
s(W.fo,P.j)
s(W.fp,W.K)
s(W.fu,P.j)
s(W.fv,W.K)
s(W.fy,P.j)
s(W.fz,W.K)
s(W.fC,P.aw)
s(W.fD,P.aw)
s(W.fE,P.j)
s(W.fF,W.K)
s(W.fG,P.j)
s(W.fH,W.K)
s(W.fK,P.j)
s(W.fL,W.K)
s(W.fN,P.aw)
s(W.db,P.j)
s(W.dc,W.K)
s(W.fP,P.j)
s(W.fQ,W.K)
s(W.fV,P.aw)
s(W.fZ,P.j)
s(W.h_,W.K)
s(W.de,P.j)
s(W.df,W.K)
s(W.h0,P.j)
s(W.h1,W.K)
s(W.h7,P.j)
s(W.h8,W.K)
s(W.h9,P.j)
s(W.ha,W.K)
s(W.hb,P.j)
s(W.hc,W.K)
s(W.hd,P.j)
s(W.he,W.K)
s(W.hf,P.j)
s(W.hg,W.K)
s(P.fA,P.j)
s(P.fB,W.K)
s(P.fI,P.j)
s(P.fJ,W.K)
s(P.fW,P.j)
s(P.fX,W.K)
s(P.h2,P.j)
s(P.h3,W.K)
s(P.fg,P.aw)
s(P.fS,P.j)
s(P.fT,W.K)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",W:"double",P:"num",B:"String",aX:"bool",am:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([R*])","~(R*)","~(ai*)","am(@,@)","~(k*,i<b4*>*)","~(l*)","~(by*)","W*()","~(~())","~()","~(bt*)","~(k*,i<S*>*)","~(k*,i<T*>*)","~(k*,i<X*>*)","~(k*,i<ax*>*)","~(k*,i<bx*>*)","@(@)","am(@)","am(L?,L?)","bc(@,@)","~(bd*)","aX*(i<S*>*)","k(@,@)","B(e)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.or(v.typeUniverse,JSON.parse('{"av":"b5","eq":"b5","bz":"b5","q1":"l","qb":"l","q3":"b2","q2":"e","qj":"e","ql":"e","q0":"n","qd":"n","q4":"q","qg":"q","qe":"w","qa":"w","qL":"ab","q8":"aV","q5":"at","qm":"at","qk":"ai","qf":"bq","qi":"bv","qh":"U","e0":{"aX":[]},"b5":{"lu":[]},"v":{"o":["1"],"m":["1"],"i":["1"]},"hY":{"v":["1"],"o":["1"],"m":["1"],"i":["1"]},"bs":{"W":[],"P":[]},"cu":{"W":[],"k":[],"P":[]},"ct":{"W":[],"P":[]},"aL":{"B":[]},"e4":{"J":[]},"N":{"j":["k"],"o":["k"],"m":["k"],"i":["k"],"j.E":"k"},"m":{"i":["1"]},"bu":{"i":["2"]},"cm":{"m":["2"],"i":["2"]},"d0":{"i":["1"]},"bZ":{"j":["1"],"o":["1"],"m":["1"],"i":["1"]},"cg":{"H":["1","2"]},"ch":{"H":["1","2"]},"ek":{"J":[]},"e2":{"J":[]},"f6":{"J":[]},"eA":{"J":[]},"A":{"H":["1","2"]},"cx":{"m":["1"],"i":["1"]},"e1":{"lN":[]},"bT":{"y":["1"],"U":[]},"bv":{"j":["W"],"y":["W"],"o":["W"],"U":[],"m":["W"],"i":["W"],"j.E":"W"},"cG":{"j":["k"],"y":["k"],"o":["k"],"U":[],"m":["k"],"i":["k"]},"ef":{"j":["k"],"y":["k"],"o":["k"],"U":[],"m":["k"],"i":["k"],"j.E":"k"},"eg":{"j":["k"],"y":["k"],"o":["k"],"U":[],"m":["k"],"i":["k"],"j.E":"k"},"eh":{"j":["k"],"y":["k"],"o":["k"],"U":[],"m":["k"],"i":["k"],"j.E":"k"},"ei":{"j":["k"],"y":["k"],"o":["k"],"U":[],"m":["k"],"i":["k"],"j.E":"k"},"ej":{"j":["k"],"y":["k"],"o":["k"],"U":[],"m":["k"],"i":["k"],"j.E":"k"},"cH":{"j":["k"],"y":["k"],"o":["k"],"U":[],"m":["k"],"i":["k"],"j.E":"k"},"bU":{"j":["k"],"bc":[],"y":["k"],"o":["k"],"U":[],"m":["k"],"i":["k"],"j.E":"k"},"fr":{"J":[]},"dh":{"J":[]},"dg":{"cP":[]},"dd":{"i":["1"]},"d2":{"m":["1"],"i":["1"]},"cs":{"i":["1"]},"cy":{"j":["1"],"o":["1"],"m":["1"],"i":["1"]},"cA":{"H":["1","2"]},"aw":{"H":["1","2"]},"cB":{"H":["1","2"]},"c_":{"H":["1","2"]},"da":{"m":["1"],"i":["1"]},"W":{"P":[]},"dA":{"J":[]},"el":{"J":[]},"ak":{"J":[]},"bX":{"J":[]},"dZ":{"J":[]},"f8":{"J":[]},"f5":{"J":[]},"eJ":{"J":[]},"dK":{"J":[]},"eo":{"J":[]},"cN":{"J":[]},"dM":{"J":[]},"k":{"P":[]},"o":{"m":["1"],"i":["1"]},"bA":{"f9":[]},"fO":{"f9":[]},"fl":{"f9":[]},"q":{"G":[],"w":[],"e":[]},"dy":{"G":[],"w":[],"e":[]},"dz":{"G":[],"w":[],"e":[]},"bn":{"G":[],"w":[],"e":[]},"at":{"w":[],"e":[]},"ck":{"j":["a7<P>"],"o":["a7<P>"],"y":["a7<P>"],"m":["a7<P>"],"i":["a7<P>"],"j.E":"a7<P>"},"cl":{"a7":["P"]},"dR":{"j":["B"],"o":["B"],"y":["B"],"m":["B"],"i":["B"],"j.E":"B"},"fi":{"j":["G"],"o":["G"],"m":["G"],"i":["G"],"j.E":"G"},"G":{"w":[],"e":[]},"ah":{"bm":[]},"bK":{"j":["ah"],"o":["ah"],"y":["ah"],"m":["ah"],"i":["ah"],"j.E":"ah"},"dT":{"e":[]},"dV":{"G":[],"w":[],"e":[]},"bq":{"j":["w"],"o":["w"],"y":["w"],"m":["w"],"i":["w"],"j.E":"w"},"bM":{"G":[],"w":[],"e":[]},"bO":{"G":[],"w":[],"e":[]},"dI":{"G":[],"w":[],"e":[]},"bt":{"l":[]},"bQ":{"e":[]},"ec":{"H":["B","@"]},"ed":{"H":["B","@"]},"ee":{"j":["ay"],"o":["ay"],"y":["ay"],"m":["ay"],"i":["ay"],"j.E":"ay"},"ai":{"l":[]},"fh":{"j":["w"],"o":["w"],"m":["w"],"i":["w"],"j.E":"w"},"w":{"e":[]},"cI":{"j":["w"],"o":["w"],"y":["w"],"m":["w"],"i":["w"],"j.E":"w"},"er":{"j":["aA"],"o":["aA"],"y":["aA"],"m":["aA"],"i":["aA"],"j.E":"aA"},"ez":{"H":["B","@"]},"eB":{"G":[],"w":[],"e":[]},"ao":{"e":[]},"eD":{"j":["ao"],"o":["ao"],"y":["ao"],"e":[],"m":["ao"],"i":["ao"],"j.E":"ao"},"eE":{"j":["aB"],"o":["aB"],"y":["aB"],"m":["aB"],"i":["aB"],"j.E":"aB"},"eK":{"H":["B","B"]},"bb":{"G":[],"w":[],"e":[]},"aq":{"e":[]},"ab":{"e":[]},"eP":{"j":["ab"],"o":["ab"],"y":["ab"],"m":["ab"],"i":["ab"],"j.E":"ab"},"eQ":{"j":["aq"],"o":["aq"],"y":["aq"],"e":[],"m":["aq"],"i":["aq"],"j.E":"aq"},"by":{"l":[]},"eX":{"j":["aD"],"o":["aD"],"y":["aD"],"m":["aD"],"i":["aD"],"j.E":"aD"},"aV":{"l":[]},"fc":{"e":[]},"bd":{"ai":[],"l":[]},"c2":{"e":[]},"fj":{"j":["I"],"o":["I"],"y":["I"],"m":["I"],"i":["I"],"j.E":"I"},"d1":{"a7":["P"]},"fx":{"j":["au?"],"o":["au?"],"y":["au?"],"m":["au?"],"i":["au?"],"j.E":"au?"},"d5":{"j":["w"],"o":["w"],"y":["w"],"m":["w"],"i":["w"],"j.E":"w"},"fR":{"j":["aC"],"o":["aC"],"y":["aC"],"m":["aC"],"i":["aC"],"j.E":"aC"},"fY":{"j":["ap"],"o":["ap"],"y":["ap"],"m":["ap"],"i":["ap"],"j.E":"ap"},"di":{"br":[]},"dU":{"j":["G"],"o":["G"],"m":["G"],"i":["G"],"j.E":"G"},"a7":{"fM":["1"]},"e5":{"j":["aM"],"o":["aM"],"m":["aM"],"i":["aM"],"j.E":"aM"},"em":{"j":["aP"],"o":["aP"],"m":["aP"],"i":["aP"],"j.E":"aP"},"eM":{"j":["B"],"o":["B"],"m":["B"],"i":["B"],"j.E":"B"},"n":{"G":[],"w":[],"e":[]},"eY":{"j":["aT"],"o":["aT"],"m":["aT"],"i":["aT"],"j.E":"aT"},"bc":{"o":["k"],"m":["k"],"i":["k"]},"dC":{"H":["B","@"]},"dD":{"e":[]},"b2":{"e":[]},"en":{"e":[]},"eH":{"j":["H<@,@>"],"o":["H<@,@>"],"m":["H<@,@>"],"i":["H<@,@>"],"j.E":"H<@,@>"},"a6":{"i":["1*"],"a6.T":"1"},"aJ":{"R":[]},"aK":{"R":[]},"r":{"R":[]},"cz":{"R":[]},"bR":{"R":[]},"bS":{"R":[]},"et":{"R":[]},"cQ":{"R":[]},"dE":{"S":[]},"dP":{"S":[]},"cw":{"a6":["S*"],"i":["S*"],"a6.T":"S*"},"bw":{"S":[]},"eF":{"S":[]},"cf":{"T":[]},"bL":{"a6":["T*"],"T":[],"i":["T*"],"a6.T":"T*"},"cM":{"T":[]},"cY":{"T":[]},"cZ":{"T":[]},"ce":{"a6":["X*"],"X":[],"i":["X*"],"a6.T":"X*"},"ci":{"X":[]},"cn":{"X":[]},"cr":{"X":[]},"dO":{"ba":[]},"dW":{"ba":[]},"e9":{"ba":[]},"eT":{"ba":[]}}'))
H.oq(v.typeUniverse,JSON.parse('{"a1":1,"m":1,"bP":1,"bu":2,"cm":2,"e8":2,"d0":1,"fe":1,"cp":1,"f7":1,"bZ":1,"cg":2,"cx":1,"e7":1,"bT":1,"c4":1,"dd":1,"cO":1,"eL":2,"d3":1,"cs":1,"cy":1,"cA":2,"aw":2,"h6":2,"cB":2,"da":1,"d4":1,"dl":2,"dJ":2,"dL":2,"i":1,"e_":1,"fs":1,"K":1,"cq":1,"aJ":1,"aK":1,"r":1}'))
var u={M:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",S:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",b:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",U:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",q:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",h:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",N:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",Y:"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",H:"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n",A:"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n",d:"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n"}
var t=(function rtii(){var s=H.l4
return{G:s("bm"),gw:s("m<@>"),h:s("G"),C:s("J"),aD:s("l"),c8:s("ah"),bX:s("bK"),Z:s("qc"),u:s("br"),fS:s("bM"),gk:s("bO"),s:s("v<B>"),gn:s("v<@>"),t:s("v<k>"),x:s("v<dB*>"),bb:s("v<dE*>"),am:s("v<dF*>"),g0:s("v<dG*>"),aM:s("v<dI*>"),cP:s("v<dP*>"),M:s("v<dQ*>"),aN:s("v<b4*>"),b:s("v<dS*>"),aZ:s("v<bN*>"),B:s("v<e6*>"),L:s("v<i7*>"),p:s("v<ax*>"),dk:s("v<T*>"),eb:s("v<bw*>"),cS:s("v<aa*>"),d1:s("v<eu*>"),k:s("v<es*>"),f2:s("v<X*>"),du:s("v<eF*>"),cz:s("v<eG*>"),eG:s("v<cO<L*>*>"),i:s("v<B*>"),fG:s("v<eO*>"),A:s("v<eR*>"),br:s("v<eZ*>"),fj:s("v<f_*>"),D:s("v<bY*>"),dA:s("v<cR*>"),d6:s("v<cS*>"),dv:s("v<cT*>"),W:s("v<cU*>"),by:s("v<cV*>"),ga:s("v<cW*>"),fF:s("v<cX*>"),j:s("v<fb*>"),m:s("v<W*>"),V:s("v<k*>"),f:s("v<~(R*)*>"),T:s("cv"),eH:s("lu"),g:s("av"),aU:s("y<@>"),h9:s("A<B*,ba*>"),cn:s("A<B*,eI*>"),dO:s("A<B*,B*>"),w:s("A<B*,eW*>"),en:s("A<k*,o<cS*>*>"),af:s("A<k*,o<cT*>*>"),gr:s("A<k*,o<cV*>*>"),gb:s("A<k*,o<cX*>*>"),J:s("A<k*,bY*>"),E:s("A<k*,aX*>"),a:s("A<k*,k*>"),aH:s("o<@>"),eO:s("H<@,@>"),bK:s("bQ"),o:s("cF"),dD:s("U"),bm:s("bU"),P:s("am"),K:s("L"),I:s("a7<P>"),fv:s("lN"),N:s("B"),bY:s("bb"),aF:s("cP"),gc:s("bc"),ak:s("bz"),U:s("c_<B,B>"),R:s("f9"),cJ:s("aX"),gR:s("W"),z:s("@"),S:s("k"),fr:s("bn*"),l:s("b4*"),gj:s("S*"),dn:s("cz*"),hc:s("ax*"),d:s("bR*"),a3:s("bS*"),ah:s("T*"),F:s("0&*"),_:s("L*"),bn:s("X*"),X:s("B*"),au:s("bx*"),eB:s("eV*"),eP:s("cQ*"),n:s("f0*"),dF:s("bY*"),v:s("cR*"),r:s("f1*"),y:s("f2*"),O:s("f3*"),q:s("cU*"),c:s("cW*"),Q:s("f4*"),e:s("k*"),dm:s("~(R*)*"),bG:s("lq<am>?"),Y:s("L?"),H:s("P")}})();(function constants(){var s=hunkHelpers.makeConstList
C.i=W.bn.prototype
C.R=J.a.prototype
C.b=J.v.prototype
C.S=J.ct.prototype
C.c=J.cu.prototype
C.j=J.cv.prototype
C.d=J.bs.prototype
C.a=J.aL.prototype
C.T=J.av.prototype
C.z=J.eq.prototype
C.A=P.ey.prototype
C.q=J.bz.prototype
C.B=W.bd.prototype
C.C=W.c2.prototype
C.D=new E.bG("Browser.chrome")
C.r=new E.bG("Browser.firefox")
C.t=new E.bG("Browser.edge")
C.E=new E.bG("Browser.other")
C.a2=new P.hr()
C.F=new P.hq()
C.u=function getTagFallback(o) {
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
C.v=function(hooks) { return hooks; }

C.M=new P.eo()
C.e=new P.jd()
C.N=new P.jh()
C.f=new P.jC()
C.n=new A.bI(0,"ColorBlendType.Overwrite")
C.O=new A.bI(1,"ColorBlendType.Additive")
C.P=new A.bI(2,"ColorBlendType.Average")
C.o=new A.bI(3,"ColorBlendType.AlphaBlend")
C.p=new P.bo(0)
C.Q=new P.bo(5e6)
C.k=H.d(s([0,0,32776,33792,1,10240,0,0]),t.V)
C.l=H.d(s([0,0,65490,45055,65535,34815,65534,18431]),t.V)
C.m=H.d(s([0,0,26624,1023,65534,2047,65534,2047]),t.V)
C.V=H.d(s([0,0,32722,12287,65534,34815,65534,18431]),t.V)
C.W=H.d(s([0,0,65498,45055,65535,34815,65534,18431]),t.V)
C.h=H.d(s([0,0,24576,1023,65534,34815,65534,18431]),t.V)
C.w=H.d(s([0,0,32754,11263,65534,34815,65534,18431]),t.V)
C.x=H.d(s([0,0,65490,12287,65535,34815,65534,18431]),t.V)
C.U=H.d(s([]),t.i)
C.X=new H.ch(0,{},C.U,H.l4("ch<B*,B*>"))
C.Y=new E.bV("OperatingSystem.windows")
C.y=new E.bV("OperatingSystem.mac")
C.Z=new E.bV("OperatingSystem.linux")
C.a_=new E.bV("OperatingSystem.other")
C.a0=new P.je(!1)
C.a1=new P.c3(null,2)})();(function staticFields(){$.ma=null
$.aH=0
$.lj=null
$.li=null
$.mz=null
$.mx=null
$.mF=null
$.k0=null
$.k9=null
$.l7=null
$.c7=null
$.dq=null
$.dr=null
$.l1=!1
$.aF=C.f
$.ac=H.d([],H.l4("v<L>"))
$.hL=null
$.lz=null
$.cE=null
$.lG=null
$.aQ=null
$.cL=null
$.m1=null
$.m_=null
$.m0=null
$.m4=null
$.m3=null
$.m2=null
$.m5=null
$.lF=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"q9","mO",function(){return H.pM("_$dart_dartClosure")})
s($,"qn","mP",function(){return H.aU(H.iZ({
toString:function(){return"$receiver$"}}))})
s($,"qo","mQ",function(){return H.aU(H.iZ({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"qp","mR",function(){return H.aU(H.iZ(null))})
s($,"qq","mS",function(){return H.aU(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"qt","mV",function(){return H.aU(H.iZ(void 0))})
s($,"qu","mW",function(){return H.aU(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"qs","mU",function(){return H.aU(H.lV(null))})
s($,"qr","mT",function(){return H.aU(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"qw","mY",function(){return H.aU(H.lV(void 0))})
s($,"qv","mX",function(){return H.aU(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"qM","ld",function(){return P.o5()})
s($,"qx","mZ",function(){return new P.jf().$0()})
s($,"qy","n_",function(){return new P.jg().$0()})
s($,"qN","n1",function(){return H.nC(H.c6(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"qP","n2",function(){return P.nP("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"r4","n3",function(){return P.oN()})
s($,"qF","n0",function(){return Z.ar(0)})
s($,"qz","lb",function(){return Z.ar(511)})
s($,"qH","a5",function(){return Z.ar(1)})
s($,"qG","aG",function(){return Z.ar(2)})
s($,"qB","b0",function(){return Z.ar(4)})
s($,"qI","as",function(){return Z.ar(8)})
s($,"qJ","bk",function(){return Z.ar(16)})
s($,"qC","dv",function(){return Z.ar(32)})
s($,"qD","dw",function(){return Z.ar(64)})
s($,"qE","lc",function(){return Z.ar(96)})
s($,"qK","bE",function(){return Z.ar(128)})
s($,"qA","b_",function(){return Z.ar(256)})
s($,"q7","mN",function(){return new V.hM()})
s($,"q6","x",function(){return $.mN()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cF,DataView:H.U,ArrayBufferView:H.U,Float32Array:H.bv,Float64Array:H.bv,Int16Array:H.ef,Int32Array:H.eg,Int8Array:H.eh,Uint16Array:H.ei,Uint32Array:H.ej,Uint8ClampedArray:H.cH,CanvasPixelArray:H.cH,Uint8Array:H.bU,HTMLAudioElement:W.q,HTMLBRElement:W.q,HTMLBaseElement:W.q,HTMLBodyElement:W.q,HTMLButtonElement:W.q,HTMLContentElement:W.q,HTMLDListElement:W.q,HTMLDataElement:W.q,HTMLDataListElement:W.q,HTMLDetailsElement:W.q,HTMLDialogElement:W.q,HTMLDivElement:W.q,HTMLEmbedElement:W.q,HTMLFieldSetElement:W.q,HTMLHRElement:W.q,HTMLHeadElement:W.q,HTMLHeadingElement:W.q,HTMLHtmlElement:W.q,HTMLIFrameElement:W.q,HTMLLIElement:W.q,HTMLLabelElement:W.q,HTMLLegendElement:W.q,HTMLLinkElement:W.q,HTMLMapElement:W.q,HTMLMediaElement:W.q,HTMLMenuElement:W.q,HTMLMetaElement:W.q,HTMLMeterElement:W.q,HTMLModElement:W.q,HTMLOListElement:W.q,HTMLObjectElement:W.q,HTMLOptGroupElement:W.q,HTMLOptionElement:W.q,HTMLOutputElement:W.q,HTMLParagraphElement:W.q,HTMLParamElement:W.q,HTMLPictureElement:W.q,HTMLPreElement:W.q,HTMLProgressElement:W.q,HTMLQuoteElement:W.q,HTMLScriptElement:W.q,HTMLShadowElement:W.q,HTMLSlotElement:W.q,HTMLSourceElement:W.q,HTMLSpanElement:W.q,HTMLStyleElement:W.q,HTMLTableCaptionElement:W.q,HTMLTableColElement:W.q,HTMLTableElement:W.q,HTMLTableRowElement:W.q,HTMLTableSectionElement:W.q,HTMLTemplateElement:W.q,HTMLTextAreaElement:W.q,HTMLTimeElement:W.q,HTMLTitleElement:W.q,HTMLTrackElement:W.q,HTMLUListElement:W.q,HTMLUnknownElement:W.q,HTMLVideoElement:W.q,HTMLDirectoryElement:W.q,HTMLFontElement:W.q,HTMLFrameElement:W.q,HTMLFrameSetElement:W.q,HTMLMarqueeElement:W.q,HTMLElement:W.q,AccessibleNodeList:W.hj,HTMLAnchorElement:W.dy,HTMLAreaElement:W.dz,Blob:W.bm,HTMLCanvasElement:W.bn,CDATASection:W.at,CharacterData:W.at,Comment:W.at,ProcessingInstruction:W.at,Text:W.at,CSSPerspective:W.hz,CSSCharsetRule:W.I,CSSConditionRule:W.I,CSSFontFaceRule:W.I,CSSGroupingRule:W.I,CSSImportRule:W.I,CSSKeyframeRule:W.I,MozCSSKeyframeRule:W.I,WebKitCSSKeyframeRule:W.I,CSSKeyframesRule:W.I,MozCSSKeyframesRule:W.I,WebKitCSSKeyframesRule:W.I,CSSMediaRule:W.I,CSSNamespaceRule:W.I,CSSPageRule:W.I,CSSRule:W.I,CSSStyleRule:W.I,CSSSupportsRule:W.I,CSSViewportRule:W.I,CSSStyleDeclaration:W.cj,MSStyleCSSProperties:W.cj,CSS2Properties:W.cj,CSSImageValue:W.al,CSSKeywordValue:W.al,CSSNumericValue:W.al,CSSPositionValue:W.al,CSSResourceValue:W.al,CSSUnitValue:W.al,CSSURLImageValue:W.al,CSSStyleValue:W.al,CSSMatrixComponent:W.aI,CSSRotation:W.aI,CSSScale:W.aI,CSSSkew:W.aI,CSSTranslation:W.aI,CSSTransformComponent:W.aI,CSSTransformValue:W.hB,CSSUnparsedValue:W.hC,DataTransferItemList:W.hD,DOMException:W.hF,ClientRectList:W.ck,DOMRectList:W.ck,DOMRectReadOnly:W.cl,DOMStringList:W.dR,DOMTokenList:W.hG,Element:W.G,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,SubmitEvent:W.l,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ah,FileList:W.bK,FileWriter:W.dT,HTMLFormElement:W.dV,Gamepad:W.au,History:W.hW,HTMLCollection:W.bq,HTMLFormControlsCollection:W.bq,HTMLOptionsCollection:W.bq,ImageData:W.br,HTMLImageElement:W.bM,HTMLInputElement:W.bO,KeyboardEvent:W.bt,Location:W.i4,MediaList:W.io,MessagePort:W.bQ,MIDIInputMap:W.ec,MIDIOutputMap:W.ed,MimeType:W.ay,MimeTypeArray:W.ee,PointerEvent:W.ai,MouseEvent:W.ai,DragEvent:W.ai,Document:W.w,DocumentFragment:W.w,HTMLDocument:W.w,ShadowRoot:W.w,XMLDocument:W.w,Attr:W.w,DocumentType:W.w,Node:W.w,NodeList:W.cI,RadioNodeList:W.cI,Plugin:W.aA,PluginArray:W.er,RTCStatsReport:W.ez,HTMLSelectElement:W.eB,SourceBuffer:W.ao,SourceBufferList:W.eD,SpeechGrammar:W.aB,SpeechGrammarList:W.eE,SpeechRecognitionResult:W.aC,Storage:W.eK,CSSStyleSheet:W.ap,StyleSheet:W.ap,HTMLTableCellElement:W.bb,HTMLTableDataCellElement:W.bb,HTMLTableHeaderCellElement:W.bb,TextTrack:W.aq,TextTrackCue:W.ab,VTTCue:W.ab,TextTrackCueList:W.eP,TextTrackList:W.eQ,TimeRanges:W.iU,Touch:W.aD,TouchEvent:W.by,TouchList:W.eX,TrackDefaultList:W.iX,CompositionEvent:W.aV,FocusEvent:W.aV,TextEvent:W.aV,UIEvent:W.aV,URL:W.jc,VideoTrackList:W.fc,WheelEvent:W.bd,Window:W.c2,DOMWindow:W.c2,CSSRuleList:W.fj,ClientRect:W.d1,DOMRect:W.d1,GamepadList:W.fx,NamedNodeMap:W.d5,MozNamedAttrMap:W.d5,SpeechRecognitionResultList:W.fR,StyleSheetList:W.fY,SVGLength:P.aM,SVGLengthList:P.e5,SVGNumber:P.aP,SVGNumberList:P.em,SVGPointList:P.iu,SVGStringList:P.eM,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGScriptElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,SVGTransform:P.aT,SVGTransformList:P.eY,AudioBuffer:P.hn,AudioParamMap:P.dC,AudioTrackList:P.dD,AudioContext:P.b2,webkitAudioContext:P.b2,BaseAudioContext:P.b2,OfflineAudioContext:P.en,WebGL2RenderingContext:P.ey,SQLResultSetRowList:P.eH})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bT.$nativeSuperclassTag="ArrayBufferView"
H.d6.$nativeSuperclassTag="ArrayBufferView"
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.bv.$nativeSuperclassTag="ArrayBufferView"
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
H.cG.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(K.mD,[])
else K.mD([])})})()
//# sourceMappingURL=test.dart.js.map
