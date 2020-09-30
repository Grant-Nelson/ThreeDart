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
a[c]=function(){a[c]=function(){H.o5(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jS"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jS"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.jS(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={jw:function jw(){},
lZ:function(a,b){if(t.O.b(a))return new H.bY(a,b)
return new H.b3(a,b)},
kd:function(){return new P.dU("No element")},
mj:function(a,b){var s=J.bj(a)
if(typeof s!=="number")return s.a5()
H.dP(a,0,s-1,b)},
dP:function(a,b,c,d){if(c-b<=32)H.mi(a,b,c,d)
else H.mh(a,b,c,d)},
mi:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.bf(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a8()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
mh:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.a2(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.a2(a6+a7,2),d=e-h,c=e+h,b=J.bf(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
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
a2=s}b.k(a5,g,a)
b.k(a5,e,a1)
b.k(a5,f,a3)
b.k(a5,d,b.h(a5,a6))
b.k(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.x(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.ak()
if(n<0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a8()
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
if(typeof i!=="number")return i.a8()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.a8()
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
H.dP(a5,a6,r-2,a8)
H.dP(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.x(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.x(a8.$2(b.h(a5,q),a2),0);)--q
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
break}}H.dP(a5,r,q,a8)}else H.dP(a5,r,q,a8)},
H:function H(a){this.a=a},
i:function i(){},
bt:function bt(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b3:function b3(a,b){this.a=a
this.b=b},
bY:function bY(a,b){this.a=a
this.b=b},
ca:function ca(a,b){this.a=null
this.b=a
this.c=b},
cr:function cr(a,b){this.a=a
this.b=b},
eo:function eo(a,b){this.a=a
this.b=b},
c0:function c0(){},
ej:function ej(){},
bE:function bE(){},
li:function(a){var s,r=H.lh(a)
if(r!=null)return r
s="minified:"+a
return s},
nZ:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
e:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a0(a)
if(typeof s!="string")throw H.c(H.aR(a))
return s},
ch:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
dH:function(a){return H.m1(a)},
m1:function(a){var s,r,q
if(a instanceof P.G)return H.a4(H.cS(a),null)
if(J.cR(a)===C.K||t.o.b(a)){s=C.o(a)
if(H.kt(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.kt(q))return q}}return H.a4(H.cS(a),null)},
kt:function(a){var s=a!=="Object"&&a!==""
return s},
ks:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
mb:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.m)(a),++r){q=a[r]
if(!H.bJ(q))throw H.c(H.aR(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.be(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.aR(q))}return H.ks(p)},
ma:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.bJ(q))throw H.c(H.aR(q))
if(q<0)throw H.c(H.aR(q))
if(q>65535)return H.mb(a)}return H.ks(a)},
m9:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.be(s,10))>>>0,56320|s&1023)}throw H.c(P.aJ(a,0,1114111,null,null))},
bz:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
m8:function(a){var s=H.bz(a).getFullYear()+0
return s},
m6:function(a){var s=H.bz(a).getMonth()+1
return s},
m2:function(a){var s=H.bz(a).getDate()+0
return s},
m3:function(a){var s=H.bz(a).getHours()+0
return s},
m5:function(a){var s=H.bz(a).getMinutes()+0
return s},
m7:function(a){var s=H.bz(a).getSeconds()+0
return s},
m4:function(a){var s=H.bz(a).getMilliseconds()+0
return s},
q:function(a){throw H.c(H.aR(a))},
d:function(a,b){if(a==null)J.bj(a)
throw H.c(H.bN(a,b))},
bN:function(a,b){var s,r,q="index"
if(!H.bJ(b))return new P.a5(!0,b,q,null)
s=J.bj(a)
if(!(b<0)){if(typeof s!=="number")return H.q(s)
r=b>=s}else r=!0
if(r)return P.F(b,a,q,null,s)
return P.dI(b,q)},
nP:function(a,b,c){if(a>c)return P.aJ(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aJ(b,a,c,"end",null)
return new P.a5(!0,b,"end",null)},
aR:function(a){return new P.a5(!0,a,null,null)},
nJ:function(a){if(typeof a!="number")throw H.c(H.aR(a))
return a},
c:function(a){var s,r
if(a==null)a=new P.dz()
s=new Error()
s.dartException=a
r=H.o6
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
o6:function(){return J.a0(this.dartException)},
n:function(a){throw H.c(a)},
m:function(a){throw H.c(P.bS(a))},
aw:function(a){var s,r,q,p,o,n
a=H.ld(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.il(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
im:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
kD:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
kn:function(a,b){return new H.dy(a,b==null?null:b.method)},
jx:function(a,b){var s=b==null,r=s?null:b.method
return new H.dh(a,r,s?null:b.receiver)},
fq:function(a){if(a==null)return new H.hG(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bh(a,a.dartException)
return H.nF(a)},
bh:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
nF:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.be(r,16)&8191)===10)switch(q){case 438:return H.bh(a,H.jx(H.e(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bh(a,H.kn(H.e(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.ll()
o=$.lm()
n=$.ln()
m=$.lo()
l=$.lr()
k=$.ls()
j=$.lq()
$.lp()
i=$.lu()
h=$.lt()
g=p.ae(s)
if(g!=null)return H.bh(a,H.jx(s,g))
else{g=o.ae(s)
if(g!=null){g.method="call"
return H.bh(a,H.jx(s,g))}else{g=n.ae(s)
if(g==null){g=m.ae(s)
if(g==null){g=l.ae(s)
if(g==null){g=k.ae(s)
if(g==null){g=j.ae(s)
if(g==null){g=m.ae(s)
if(g==null){g=i.ae(s)
if(g==null){g=h.ae(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bh(a,H.kn(s,g))}}return H.bh(a,new H.ei(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.ck()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bh(a,new P.a5(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.ck()
return a},
jU:function(a){var s
if(a==null)return new H.f1(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.f1(a)},
nR:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
nY:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.l("Unsupported number of arguments for wrapped closure"))},
bM:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nY)
a.$identity=s
return s},
lN:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.i1().constructor.prototype):Object.create(new H.bQ(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.am
if(typeof r!=="number")return r.v()
$.am=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.k7(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.lJ(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.k7(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
lJ:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.l8,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.lH:H.lG
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
lK:function(a,b,c,d){var s=H.k6
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
k7:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.lM(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.lK(r,!p,s,b)
if(r===0){p=$.am
if(typeof p!=="number")return p.v()
$.am=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.e(H.jm())+";return "+n+"."+H.e(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.am
if(typeof p!=="number")return p.v()
$.am=p+1
m+=p
return new Function("return function("+m+"){return this."+H.e(H.jm())+"."+H.e(s)+"("+m+");}")()},
lL:function(a,b,c,d){var s=H.k6,r=H.lI
switch(b?-1:a){case 0:throw H.c(new H.dL("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
lM:function(a,b){var s,r,q,p,o,n,m=H.jm(),l=$.k4
if(l==null)l=$.k4=H.k3("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lL(r,!p,s,b)
if(r===1){p="return function(){return this."+H.e(m)+"."+H.e(s)+"(this."+l+");"
o=$.am
if(typeof o!=="number")return o.v()
$.am=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.e(m)+"."+H.e(s)+"(this."+l+", "+n+");"
o=$.am
if(typeof o!=="number")return o.v()
$.am=o+1
return new Function(p+o+"}")()},
jS:function(a,b,c,d,e,f,g){return H.lN(a,b,c,d,!!e,!!f,g)},
lG:function(a,b){return H.fd(v.typeUniverse,H.cS(a.a),b)},
lH:function(a,b){return H.fd(v.typeUniverse,H.cS(a.c),b)},
k6:function(a){return a.a},
lI:function(a){return a.c},
jm:function(){var s=$.k5
return s==null?$.k5=H.k3("self"):s},
k3:function(a){var s,r,q,p=new H.bQ("self","target","receiver","name"),o=J.jv(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.jl("Field name "+a+" not found."))},
o5:function(a){throw H.c(new P.d6(a))},
nU:function(a){return v.getIsolateTag(a)},
p9:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
o0:function(a){var s,r,q,p,o,n=$.l7.$1(a),m=$.ja[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.je[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.l4.$2(a,n)
if(q!=null){m=$.ja[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.je[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.jg(s)
$.ja[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.je[n]=s
return s}if(p==="-"){o=H.jg(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lb(a,s)
if(p==="*")throw H.c(P.kE(n))
if(v.leafTags[n]===true){o=H.jg(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lb(a,s)},
lb:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.jX(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jg:function(a){return J.jX(a,!1,null,!!a.$ir)},
o1:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.jg(s)
else return J.jX(s,c,null,null)},
nW:function(){if(!0===$.jV)return
$.jV=!0
H.nX()},
nX:function(){var s,r,q,p,o,n,m,l
$.ja=Object.create(null)
$.je=Object.create(null)
H.nV()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.lc.$1(o)
if(n!=null){m=H.o1(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
nV:function(){var s,r,q,p,o,n,m=C.z()
m=H.bL(C.A,H.bL(C.B,H.bL(C.p,H.bL(C.p,H.bL(C.C,H.bL(C.D,H.bL(C.E(C.o),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.l7=new H.jb(p)
$.l4=new H.jc(o)
$.lc=new H.jd(n)},
bL:function(a,b){return a(b)||b},
lV:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.h3("Illegal RegExp pattern ("+String(n)+")",a))},
le:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
nQ:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
ld:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lf:function(a,b,c){var s=H.o4(a,b,c)
return s},
o4:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.ld(b),'g'),H.nQ(c))},
il:function il(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dy:function dy(a,b){this.a=a
this.b=b},
dh:function dh(a,b,c){this.a=a
this.b=b
this.c=c},
ei:function ei(a){this.a=a},
hG:function hG(a){this.a=a},
f1:function f1(a){this.a=a
this.b=null},
bl:function bl(){},
i5:function i5(){},
i1:function i1(){},
bQ:function bQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dL:function dL(a){this.a=a},
t:function t(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
h9:function h9(a){this.a=a},
hd:function hd(a,b){this.a=a
this.b=b
this.c=null},
aE:function aE(a){this.a=a},
dk:function dk(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jb:function jb(a){this.a=a},
jc:function jc(a){this.a=a},
jd:function jd(a){this.a=a},
h8:function h8(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bI:function(a){return a},
ay:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bN(b,a))},
mT:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.nP(a,b,c))
return b},
ce:function ce(){},
bw:function bw(){},
b6:function b6(){},
cd:function cd(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){},
du:function du(){},
dv:function dv(){},
cf:function cf(){},
dw:function dw(){},
cx:function cx(){},
cy:function cy(){},
cz:function cz(){},
cA:function cA(){},
mf:function(a,b){var s=b.c
return s==null?b.c=H.jN(a,b.z,!0):s},
kv:function(a,b){var s=b.c
return s==null?b.c=H.cK(a,"kb",[b.z]):s},
kw:function(a){var s=a.y
if(s===6||s===7||s===8)return H.kw(a.z)
return s===11||s===12},
me:function(a){return a.cy},
nS:function(a){return H.jO(v.typeUniverse,a,!1)},
aQ:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aQ(a,s,a0,a1)
if(r===s)return b
return H.kW(a,r,!0)
case 7:s=b.z
r=H.aQ(a,s,a0,a1)
if(r===s)return b
return H.jN(a,r,!0)
case 8:s=b.z
r=H.aQ(a,s,a0,a1)
if(r===s)return b
return H.kV(a,r,!0)
case 9:q=b.Q
p=H.cQ(a,q,a0,a1)
if(p===q)return b
return H.cK(a,b.z,p)
case 10:o=b.z
n=H.aQ(a,o,a0,a1)
m=b.Q
l=H.cQ(a,m,a0,a1)
if(n===o&&l===m)return b
return H.jL(a,n,l)
case 11:k=b.z
j=H.aQ(a,k,a0,a1)
i=b.Q
h=H.nC(a,i,a0,a1)
if(j===k&&h===i)return b
return H.kU(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.cQ(a,g,a0,a1)
o=b.z
n=H.aQ(a,o,a0,a1)
if(f===g&&n===o)return b
return H.jM(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.ft("Attempted to substitute unexpected RTI kind "+c))}},
cQ:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aQ(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
nD:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aQ(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
nC:function(a,b,c,d){var s,r=b.a,q=H.cQ(a,r,c,d),p=b.b,o=H.cQ(a,p,c,d),n=b.c,m=H.nD(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.eF()
s.a=q
s.b=o
s.c=m
return s},
pb:function(a,b){a[v.arrayRti]=b
return a},
nK:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.l8(s)
return a.$S()}return null},
l9:function(a,b){var s
if(H.kw(b))if(a instanceof H.bl){s=H.nK(a)
if(s!=null)return s}return H.cS(a)},
cS:function(a){var s
if(a instanceof P.G){s=a.$ti
return s!=null?s:H.jP(a)}if(Array.isArray(a))return H.mP(a)
return H.jP(J.cR(a))},
mP:function(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
mZ:function(a){var s=a.$ti
return s!=null?s:H.jP(a)},
jP:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.n_(a,s)},
n_:function(a,b){var s=a instanceof H.bl?a.__proto__.__proto__.constructor:b,r=H.mN(v.typeUniverse,s.name)
b.$ccache=r
return r},
l8:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.jO(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
mY:function(a){var s,r,q=this,p=t.K
if(q===p)return H.cN(q,a,H.n3)
if(!H.az(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.cN(q,a,H.n6)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.bJ
else if(s===t.Y||s===t.H)r=H.n2
else if(s===t.R)r=H.n4
else r=s===t.v?H.l0:null
if(r!=null)return H.cN(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.o_)){q.r="$i"+p
return H.cN(q,a,H.n5)}}else if(p===7)return H.cN(q,a,H.mW)
return H.cN(q,a,H.mU)},
cN:function(a,b,c){a.b=c
return a.b(b)},
mX:function(a){var s,r,q=this
if(!H.az(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.mS
else if(q===t.K)r=H.mQ
else r=H.mV
q.a=r
return q.a(a)},
nv:function(a){var s,r=a.y
if(!H.az(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
mU:function(a){var s=this
if(a==null)return H.nv(s)
return H.L(v.typeUniverse,H.l9(a,s),null,s,null)},
mW:function(a){if(a==null)return!0
return this.z.b(a)},
n5:function(a){var s=this,r=s.r
if(a instanceof P.G)return!!a[r]
return!!J.cR(a)[r]},
p8:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.kZ(a,s)},
mV:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.kZ(a,s)},
kZ:function(a,b){throw H.c(H.mD(H.kO(a,H.l9(a,b),H.a4(b,null))))},
kO:function(a,b,c){var s=P.fX(a),r=H.a4(b==null?H.cS(a):b,null)
return s+": type '"+H.e(r)+"' is not a subtype of type '"+H.e(c)+"'"},
mD:function(a){return new H.cI("TypeError: "+a)},
U:function(a,b){return new H.cI("TypeError: "+H.kO(a,null,b))},
n3:function(a){return a!=null},
mQ:function(a){return a},
n6:function(a){return!0},
mS:function(a){return a},
l0:function(a){return!0===a||!1===a},
oV:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.U(a,"bool"))},
oX:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.U(a,"bool"))},
oW:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.U(a,"bool?"))},
oY:function(a){if(typeof a=="number")return a
throw H.c(H.U(a,"double"))},
p_:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"double"))},
oZ:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"double?"))},
bJ:function(a){return typeof a=="number"&&Math.floor(a)===a},
p0:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.U(a,"int"))},
p2:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.U(a,"int"))},
p1:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.U(a,"int?"))},
n2:function(a){return typeof a=="number"},
p3:function(a){if(typeof a=="number")return a
throw H.c(H.U(a,"num"))},
p5:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"num"))},
p4:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"num?"))},
n4:function(a){return typeof a=="string"},
p6:function(a){if(typeof a=="string")return a
throw H.c(H.U(a,"String"))},
mR:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.U(a,"String"))},
p7:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.U(a,"String?"))},
ny:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.b.v(r,H.a4(a[q],b))
return s},
l_:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=[]
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.X,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.d(a6,i)
l=C.b.v(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.b.v(" extends ",H.a4(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.a4(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.b.v(a3,H.a4(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.b.v(a3,H.a4(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.k_(H.a4(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.e(a1)},
a4:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.a4(a.z,b)
return s}if(l===7){r=a.z
s=H.a4(r,b)
q=r.y
return J.k_(q===11||q===12?C.b.v("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.e(H.a4(a.z,b))+">"
if(l===9){p=H.nE(a.z)
o=a.Q
return o.length!==0?p+("<"+H.ny(o,b)+">"):p}if(l===11)return H.l_(a,b,null)
if(l===12)return H.l_(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
nE:function(a){var s,r=H.lh(a)
if(r!=null)return r
s="minified:"+a
return s},
kX:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
mN:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.jO(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cL(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cK(a,b,q)
n[b]=o
return o}else return m},
mL:function(a,b){return H.kY(a.tR,b)},
mK:function(a,b){return H.kY(a.eT,b)},
jO:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.kT(H.kR(a,null,b,c))
r.set(b,s)
return s},
fd:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.kT(H.kR(a,b,c,!0))
q.set(c,r)
return r},
mM:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.jL(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aP:function(a,b){b.a=H.mX
b.b=H.mY
return b},
cL:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ab(null,null)
s.y=b
s.cy=c
r=H.aP(a,s)
a.eC.set(c,r)
return r},
kW:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.mI(a,b,r,c)
a.eC.set(r,s)
return s},
mI:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.az(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ab(null,null)
q.y=6
q.z=b
q.cy=c
return H.aP(a,q)},
jN:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.mH(a,b,r,c)
a.eC.set(r,s)
return s},
mH:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.az(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.jf(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.jf(q.z))return q
else return H.mf(a,b)}}p=new H.ab(null,null)
p.y=7
p.z=b
p.cy=c
return H.aP(a,p)},
kV:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.mF(a,b,r,c)
a.eC.set(r,s)
return s},
mF:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.az(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cK(a,"kb",[b])
else if(b===t.P||b===t.T)return t.bc}q=new H.ab(null,null)
q.y=8
q.z=b
q.cy=c
return H.aP(a,q)},
mJ:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ab(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aP(a,s)
a.eC.set(q,r)
return r},
fc:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
mE:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cK:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fc(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ab(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aP(a,r)
a.eC.set(p,q)
return q},
jL:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fc(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ab(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aP(a,o)
a.eC.set(q,n)
return n},
kU:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fc(m)
if(j>0){s=l>0?",":""
r=H.fc(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.mE(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ab(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aP(a,o)
a.eC.set(q,r)
return r},
jM:function(a,b,c,d){var s,r=b.cy+("<"+H.fc(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.mG(a,b,c,r,d)
a.eC.set(r,s)
return s},
mG:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aQ(a,b,r,0)
m=H.cQ(a,c,r,0)
return H.jM(a,n,m,c!==m)}}l=new H.ab(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aP(a,l)},
kR:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
kT:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.mx(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.kS(a,r,g,f,!1)
else if(q===46)r=H.kS(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.aO(a.u,a.e,f.pop()))
break
case 94:f.push(H.mJ(a.u,f.pop()))
break
case 35:f.push(H.cL(a.u,5,"#"))
break
case 64:f.push(H.cL(a.u,2,"@"))
break
case 126:f.push(H.cL(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.jK(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.cK(p,n,o))
else{m=H.aO(p,a.e,n)
switch(m.y){case 11:f.push(H.jM(p,m,o,a.n))
break
default:f.push(H.jL(p,m,o))
break}}break
case 38:H.my(a,f)
break
case 42:l=a.u
f.push(H.kW(l,H.aO(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.jN(l,H.aO(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.kV(l,H.aO(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.eF()
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
H.jK(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.kU(p,H.aO(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.jK(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.mA(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.aO(a.u,a.e,h)},
mx:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
kS:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.kX(s,o.z)[p]
if(n==null)H.n('No "'+p+'" in "'+H.me(o)+'"')
d.push(H.fd(s,o,n))}else d.push(p)
return m},
my:function(a,b){var s=b.pop()
if(0===s){b.push(H.cL(a.u,1,"0&"))
return}if(1===s){b.push(H.cL(a.u,4,"1&"))
return}throw H.c(P.ft("Unexpected extended operation "+H.e(s)))},
aO:function(a,b,c){if(typeof c=="string")return H.cK(a,c,a.sEA)
else if(typeof c=="number")return H.mz(a,b,c)
else return c},
jK:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aO(a,b,c[s])},
mA:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aO(a,b,c[s])},
mz:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.ft("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.ft("Bad index "+c+" for "+b.i(0)))},
L:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.az(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.az(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.L(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.L(a,b.z,c,d,e)
if(p===6){s=d.z
return H.L(a,b,c,s,e)}if(r===8){if(!H.L(a,b.z,c,d,e))return!1
return H.L(a,H.kv(a,b),c,d,e)}if(r===7){s=H.L(a,b.z,c,d,e)
return s}if(p===8){if(H.L(a,b,c,d.z,e))return!0
return H.L(a,b,c,H.kv(a,d),e)}if(p===7){s=H.L(a,b,c,d.z,e)
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
if(!H.L(a,k,c,j,e)||!H.L(a,j,e,k,c))return!1}return H.l1(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.l1(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.n1(a,b,c,d,e)}return!1},
l1:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
n1:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.L(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.kX(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.L(a,H.fd(a,b,l[p]),c,r[p],e))return!1
return!0},
jf:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.az(a))if(r!==7)if(!(r===6&&H.jf(a.z)))s=r===8&&H.jf(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
o_:function(a){var s
if(!H.az(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
az:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
kY:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ab:function ab(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
eF:function eF(){this.c=this.b=this.a=null},
eA:function eA(){},
cI:function cI(a){this.a=a},
lh:function(a){return v.mangledGlobalNames[a]},
o2:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jX:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fo:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.jV==null){H.nW()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.c(P.kE("Return interceptor for "+H.e(s(a,o))))}q=a.constructor
p=q==null?null:q[J.kf()]
if(p!=null)return p
p=H.o0(a)
if(p!=null)return p
if(typeof a=="function")return C.M
s=Object.getPrototypeOf(a)
if(s==null)return C.t
if(s===Object.prototype)return C.t
if(typeof q=="function"){Object.defineProperty(q,J.kf(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
kf:function(){var s=$.kP
return s==null?$.kP=v.getIsolateTag("_$dart_js"):s},
lS:function(a){if(!H.bJ(a))throw H.c(P.k1(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.aJ(a,0,4294967295,"length",null))
return J.lT(new Array(a))},
ke:function(a){if(!H.bJ(a)||a<0)throw H.c(P.jl("Length must be a non-negative integer: "+H.e(a)))
return new Array(a)},
lT:function(a){return J.jv(a)},
jv:function(a){a.fixed$length=Array
return a},
lU:function(a,b){return J.cX(a,b)},
cR:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c5.prototype
return J.c4.prototype}if(typeof a=="string")return J.aD.prototype
if(a==null)return J.c6.prototype
if(typeof a=="boolean")return J.h7.prototype
if(a.constructor==Array)return J.a8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.G)return a
return J.fo(a)},
nT:function(a){if(typeof a=="number")return J.b0.prototype
if(typeof a=="string")return J.aD.prototype
if(a==null)return a
if(a.constructor==Array)return J.a8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.G)return a
return J.fo(a)},
bf:function(a){if(typeof a=="string")return J.aD.prototype
if(a==null)return a
if(a.constructor==Array)return J.a8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.G)return a
return J.fo(a)},
jT:function(a){if(a==null)return a
if(a.constructor==Array)return J.a8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.G)return a
return J.fo(a)},
l6:function(a){if(typeof a=="number")return J.b0.prototype
if(typeof a=="string")return J.aD.prototype
if(a==null)return a
if(!(a instanceof P.G))return J.bD.prototype
return a},
bg:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.G)return a
return J.fo(a)},
k_:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.nT(a).v(a,b)},
x:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cR(a).n(a,b)},
k0:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.l6(a).t(a,b)},
cW:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nZ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bf(a).h(a,b)},
lz:function(a,b,c){return J.bg(a).fn(a,b,c)},
lA:function(a,b,c,d){return J.bg(a).fH(a,b,c,d)},
cX:function(a,b){return J.l6(a).aM(a,b)},
jj:function(a,b){return J.bf(a).L(a,b)},
jk:function(a,b){return J.jT(a).F(a,b)},
lB:function(a,b){return J.jT(a).I(a,b)},
lC:function(a){return J.bg(a).gcX(a)},
lD:function(a){return J.bg(a).gd0(a)},
W:function(a){return J.cR(a).gR(a)},
bi:function(a){return J.jT(a).gM(a)},
bj:function(a){return J.bf(a).gj(a)},
lE:function(a,b){return J.bg(a).ho(a,b)},
a0:function(a){return J.cR(a).i(a)},
a:function a(){},
h7:function h7(){},
c6:function c6(){},
b1:function b1(){},
dE:function dE(){},
bD:function bD(){},
af:function af(){},
a8:function a8(){},
dg:function dg(){},
T:function T(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b0:function b0(){},
c5:function c5(){},
c4:function c4(){},
aD:function aD(){}},P={
mp:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.nG()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bM(new P.iQ(q),1)).observe(s,{childList:true})
return new P.iP(q,s,r)}else if(self.setImmediate!=null)return P.nH()
return P.nI()},
mq:function(a){self.scheduleImmediate(H.bM(new P.iR(a),0))},
mr:function(a){self.setImmediate(H.bM(new P.iS(a),0))},
ms:function(a){P.jE(C.k,a)},
jE:function(a,b){var s=C.c.a2(a.a,1000)
return P.mB(s<0?0:s,b)},
kC:function(a,b){var s=C.c.a2(a.a,1000)
return P.mC(s<0?0:s,b)},
mB:function(a,b){var s=new P.cH()
s.dX(a,b)
return s},
mC:function(a,b){var s=new P.cH()
s.dY(a,b)
return s},
oT:function(a){return new P.bG(a,1)},
mt:function(){return C.R},
mu:function(a){return new P.bG(a,3)},
n8:function(a){return new P.cE(a)},
nu:function(){var s,r
for(s=$.bK;s!=null;s=$.bK){$.cP=null
r=s.b
$.bK=r
if(r==null)$.cO=null
s.a.$0()}},
nB:function(){$.jQ=!0
try{P.nu()}finally{$.cP=null
$.jQ=!1
if($.bK!=null)$.jZ().$1(P.l5())}},
nz:function(a){var s=new P.ep(a),r=$.cO
if(r==null){$.bK=$.cO=s
if(!$.jQ)$.jZ().$1(P.l5())}else $.cO=r.b=s},
nA:function(a){var s,r,q,p=$.bK
if(p==null){P.nz(a)
$.cP=$.cO
return}s=new P.ep(a)
r=$.cP
if(r==null){s.b=p
$.bK=$.cP=s}else{q=r.b
s.b=q
$.cP=r.b=s
if(q==null)$.cO=s}},
kB:function(a,b){var s=$.ai
if(s===C.e)return P.jE(a,b)
return P.jE(a,s.fL(b))},
mn:function(a,b){var s=$.ai
if(s===C.e)return P.kC(a,b)
return P.kC(a,s.cS(b,t.W))},
l2:function(a,b,c,d,e){P.nA(new P.j7(d,e))},
nw:function(a,b,c,d){var s,r=$.ai
if(r===c)return d.$0()
$.ai=c
s=r
try{r=d.$0()
return r}finally{$.ai=s}},
nx:function(a,b,c,d,e){var s,r=$.ai
if(r===c)return d.$1(e)
$.ai=c
s=r
try{r=d.$1(e)
return r}finally{$.ai=s}},
iQ:function iQ(a){this.a=a},
iP:function iP(a,b,c){this.a=a
this.b=b
this.c=c},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
cH:function cH(){this.c=0},
j0:function j0(a,b){this.a=a
this.b=b},
j_:function j_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bG:function bG(a,b){this.a=a
this.b=b},
bH:function bH(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cE:function cE(a){this.a=a},
ep:function ep(a){this.a=a
this.b=null},
dV:function dV(){},
dW:function dW(){},
cl:function cl(){},
j2:function j2(){},
j7:function j7(a,b){this.a=a
this.b=b},
iX:function iX(){},
iY:function iY(a,b){this.a=a
this.b=b},
iZ:function iZ(a,b,c){this.a=a
this.b=b
this.c=c},
lY:function(a,b,c){return H.nR(a,new H.t(b.au("@<0>").cp(c).au("t<1,2>")))},
lX:function(a,b){return new H.t(a.au("@<0>").cp(b).au("t<1,2>"))},
kg:function(a){return new P.ct(a.au("ct<0>"))},
jJ:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
mw:function(a,b){var s=new P.cu(a,b)
s.c=a.e
return s},
lR:function(a,b,c){var s,r
if(P.jR(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.a_.push(a)
try{P.n7(a,s)}finally{if(0>=$.a_.length)return H.d($.a_,-1)
$.a_.pop()}r=P.kx(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
ju:function(a,b,c){var s,r
if(P.jR(a))return b+"..."+c
s=new P.ba(b)
$.a_.push(a)
try{r=s
r.a=P.kx(r.a,a,", ")}finally{if(0>=$.a_.length)return H.d($.a_,-1)
$.a_.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jR:function(a){var s,r
for(s=$.a_.length,r=0;r<s;++r)if(a===$.a_[r])return!0
return!1},
n7:function(a,b){var s,r,q,p,o,n,m,l=a.gM(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.w())return
s=H.e(l.gH(l))
b.push(s)
k+=s.length+2;++j}if(!l.w()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gH(l);++j
if(!l.w()){if(j<=4){b.push(H.e(p))
return}r=H.e(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gH(l);++j
for(;l.w();p=o,o=n){n=l.gH(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.e(p)
r=H.e(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
kh:function(a){var s,r={}
if(P.jR(a))return"{...}"
s=new P.ba("")
try{$.a_.push(a)
s.a+="{"
r.a=!0
J.lB(a,new P.hg(r,s))
s.a+="}"}finally{if(0>=$.a_.length)return H.d($.a_,-1)
$.a_.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
ct:function ct(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iW:function iW(a){this.a=a
this.c=this.b=null},
cu:function cu(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c3:function c3(){},
c8:function c8(){},
A:function A(){},
dm:function dm(){},
hg:function hg(a,b){this.a=a
this.b=b},
as:function as(){},
cB:function cB(){},
cv:function cv(){},
d3:function d3(){},
d5:function d5(){},
fU:function fU(){},
ix:function ix(){},
iy:function iy(){},
j1:function j1(a){this.b=0
this.c=a},
lQ:function(a){if(a instanceof H.bl)return a.i(0)
return"Instance of '"+H.e(H.dH(a))+"'"},
jy:function(a,b,c){var s,r=c?J.ke(a):J.lS(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
jz:function(a,b){var s,r=[]
for(s=J.bi(a);s.w();)r.push(s.gH(s))
if(b)return r
return J.jv(r)},
jD:function(a){var s,r=a,q=r.length,p=P.jB(0,null,q)
if(typeof p!=="number")return p.ak()
s=p<q
return H.ma(s?r.slice(0,p):r)},
mc:function(a){return new H.h8(a,H.lV(a,!1,!0,!1,!1,!1))},
kx:function(a,b,c){var s=J.bi(b)
if(!s.w())return a
if(c.length===0){do a+=H.e(s.gH(s))
while(s.w())}else{a+=H.e(s.gH(s))
for(;s.w();)a=a+c+H.e(s.gH(s))}return a},
mO:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.q){s=$.ly().b
s=s.test(b)}else s=!1
if(s)return b
r=C.G.fP(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.m9(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
lO:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
lP:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d7:function(a){if(a>=10)return""+a
return"0"+a},
k9:function(a){return new P.aV(1000*a)},
fX:function(a){if(typeof a=="number"||H.l0(a)||null==a)return J.a0(a)
if(typeof a=="string")return JSON.stringify(a)
return P.lQ(a)},
ft:function(a){return new P.d_(a)},
jl:function(a){return new P.a5(!1,null,null,a)},
k1:function(a,b,c){return new P.a5(!0,a,b,c)},
lF:function(a,b){if(a==null)throw H.c(new P.a5(!1,null,b,"Must not be null"))
return a},
dI:function(a,b){return new P.bA(null,null,!0,a,b,"Value not in range")},
aJ:function(a,b,c,d,e){return new P.bA(b,c,!0,a,d,"Invalid value")},
jB:function(a,b,c){var s
if(typeof c!=="number")return H.q(c)
s=a>c
if(s)throw H.c(P.aJ(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.q(c)
s=b>c}else s=!0
if(s)throw H.c(P.aJ(b,a,c,"end",null))
return b}return c},
ku:function(a,b){if(a<0)throw H.c(P.aJ(a,0,null,b,null))
return a},
F:function(a,b,c,d,e){var s=e==null?J.bj(b):e
return new P.de(s,!0,a,c,"Index out of range")},
u:function(a){return new P.ek(a)},
kE:function(a){return new P.eh(a)},
bS:function(a){return new P.d4(a)},
l:function(a){return new P.eC(a)},
jY:function(a){H.o2(a)},
be:function be(){},
a7:function a7(a,b){this.a=a
this.b=b},
V:function V(){},
aV:function aV(a){this.a=a},
fR:function fR(){},
fS:function fS(){},
E:function E(){},
d_:function d_(a){this.a=a},
dz:function dz(){},
a5:function a5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bA:function bA(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
de:function de(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ek:function ek(a){this.a=a},
eh:function eh(a){this.a=a},
dU:function dU(a){this.a=a},
d4:function d4(a){this.a=a},
dC:function dC(){},
ck:function ck(){},
d6:function d6(a){this.a=a},
eC:function eC(a){this.a=a},
h3:function h3(a,b){this.a=a
this.b=b},
o:function o(){},
f:function f(){},
df:function df(){},
ar:function ar(){},
dl:function dl(){},
a9:function a9(){},
N:function N(){},
G:function G(){},
K:function K(){},
ba:function ba(a){this.a=a},
nN:function(a){var s
if(t.s.b(a)){s=J.lD(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.cJ(a.data,a.height,a.width)},
nM:function(a){if(a instanceof P.cJ)return{data:a.a,height:a.b,width:a.c}
return a},
aS:function(a){var s,r,q,p,o
if(a==null)return null
s=P.lX(t.R,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.m)(r),++p){o=r[p]
s.k(0,o,a[o])}return s},
nL:function(a){var s={}
a.I(0,new P.j8(s))
return s},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.c=c},
j8:function j8(a){this.a=a},
db:function db(a,b){this.a=a
this.b=b},
h1:function h1(){},
h2:function h2(){},
iV:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mv:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
eV:function eV(){},
aa:function aa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bs:function bs(){},
dj:function dj(){},
bx:function bx(){},
dA:function dA(){},
hJ:function hJ(){},
dX:function dX(){},
j:function j(){},
bC:function bC(){},
e4:function e4(){},
eJ:function eJ(){},
eK:function eK(){},
eR:function eR(){},
eS:function eS(){},
f3:function f3(){},
f4:function f4(){},
fa:function fa(){},
fb:function fb(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(a){this.a=a},
d0:function d0(){},
aB:function aB(){},
dB:function dB(){},
eq:function eq(){},
dK:function dK(){},
dS:function dS(){},
f_:function f_(){},
f0:function f0(){}},W={
jo:function(){var s=document.createElement("canvas")
return s},
fT:function(a){return"wheel"},
iU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kQ:function(a,b,c,d){var s=W.iU(W.iU(W.iU(W.iU(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
Q:function(a,b,c,d){var s=W.l3(new W.iT(c),t.D)
if(s!=null&&!0)J.lA(a,b,s,!1)
return new W.eB(a,b,s,!1)},
l3:function(a,b){var s=$.ai
if(s===C.e)return a
return s.cS(a,b)},
k:function k(){},
fr:function fr(){},
cY:function cY(){},
cZ:function cZ(){},
d1:function d1(){},
aU:function aU(){},
ae:function ae(){},
fH:function fH(){},
D:function D(){},
bV:function bV(){},
fI:function fI(){},
a6:function a6(){},
an:function an(){},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(){},
fP:function fP(){},
bW:function bW(){},
bX:function bX(){},
d8:function d8(){},
fQ:function fQ(){},
es:function es(a,b){this.a=a
this.b=b},
I:function I(){},
h:function h(){},
b:function b(){},
aX:function aX(){},
d9:function d9(){},
da:function da(){},
dc:function dc(){},
aY:function aY(){},
h5:function h5(){},
aZ:function aZ(){},
b_:function b_(){},
br:function br(){},
b2:function b2(){},
he:function he(){},
hx:function hx(){},
hy:function hy(){},
hz:function hz(a){this.a=a},
hA:function hA(){},
hB:function hB(a){this.a=a},
b5:function b5(){},
dq:function dq(){},
a1:function a1(){},
er:function er(a){this.a=a},
v:function v(){},
cg:function cg(){},
b7:function b7(){},
dF:function dF(){},
hP:function hP(){},
hQ:function hQ(a){this.a=a},
dM:function dM(){},
aK:function aK(){},
dQ:function dQ(){},
b8:function b8(){},
dR:function dR(){},
b9:function b9(){},
i2:function i2(){},
i3:function i3(a){this.a=a},
aL:function aL(){},
aM:function aM(){},
ah:function ah(){},
dY:function dY(){},
dZ:function dZ(){},
ig:function ig(){},
bb:function bb(){},
bc:function bc(){},
e3:function e3(){},
ij:function ij(){},
ax:function ax(){},
iw:function iw(){},
em:function em(){},
aN:function aN(){},
bF:function bF(){},
et:function et(){},
cs:function cs(){},
eG:function eG(){},
cw:function cw(){},
eZ:function eZ(){},
f5:function f5(){},
js:function js(a,b){this.a=a
this.$ti=b},
eB:function eB(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iT:function iT(a){this.a=a},
jI:function jI(a){this.$ti=a},
C:function C(){},
c1:function c1(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
eD:function eD(){},
eE:function eE(){},
eH:function eH(){},
eI:function eI(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eT:function eT(){},
eU:function eU(){},
eW:function eW(){},
cC:function cC(){},
cD:function cD(){},
eX:function eX(){},
eY:function eY(){},
f2:function f2(){},
f6:function f6(){},
f7:function f7(){},
cF:function cF(){},
cG:function cG(){},
f8:function f8(){},
f9:function f9(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){}},K={
S:function(a){var s=new K.hR()
s.dQ(a)
return s},
fs:function fs(){},
dd:function dd(){},
aG:function aG(){this.a=null},
hR:function hR(){this.a=null}},L={dT:function dT(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},e1:function e1(a,b,c){this.a=a
this.b=b
this.c=c},e2:function e2(a){this.b=a
this.c=null},ih:function ih(){var _=this
_.d=_.c=_.b=_.a=null},ik:function ik(a){this.b=a
this.a=this.c=null}},O={
fE:function(){var s=new O.bm()
s.ba()
return s},
bm:function bm(){this.c=this.b=this.a=null},
cc:function cc(){this.b=this.a=null},
kz:function(a,b,c){var s,r,q,p=new O.bB(),o=p.a
p.a=c
c.gm().l(0,p.gaa())
s=new D.p("texture",o,p.a)
s.b=!0
p.D(s)
r=V.au()
if(!J.x(p.b,r)){o=p.b
p.b=r
s=new D.p("colorMatrix",o,r)
s.b=!0
p.D(s)}q=V.hK()
if(!J.x(p.c,q)){o=p.c
p.c=q
s=new D.p("source",o,q)
s.b=!0
p.D(s)}if(!J.x(p.d,a)){o=p.d
p.d=a
s=new D.p("destination",o,a)
s.b=!0
p.D(s)}if(p.e!==b){p.e=b
s=new D.p("flip",!b,b)
s.b=!0
p.D(s)}p.f=null
return p},
fN:function fN(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dn:function dn(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ho:function ho(a,b){this.a=a
this.b=b},
hp:function hp(){},
hq:function hq(a,b){this.a=a
this.b=b},
hr:function hr(){},
hs:function hs(a,b){this.a=a
this.b=b},
ht:function ht(){},
hu:function hu(a,b){this.a=a
this.b=b},
hv:function hv(){},
hi:function hi(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dp:function dp(){},
hj:function hj(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
at:function at(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hl:function hl(){var _=this
_.e=_.d=_.c=_.b=null},
hm:function hm(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hn:function hn(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dx:function dx(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dO:function dO(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i6:function i6(){},
e_:function e_(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bB:function bB(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
jr:function(){var s,r=new E.bp()
r.a=""
r.b=!0
s=O.fE()
r.y=s
s.aE(r.gh6(),r.gh9())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sb9(0,null)
r.sb3(null)
return r},
kM:function(){if(J.jj(window.navigator.vendor,"Google"))return C.x
if(J.jj(window.navigator.userAgent,"Firefox"))return C.m
var s=window.navigator.appVersion
if(J.bf(s).L(s,"Trident")||C.b.L(s,"Edge"))return C.n
if(J.jj(window.navigator.appName,"Microsoft"))return C.n
return C.y},
kN:function(){var s=window.navigator.appVersion
if(J.bf(s).L(s,"Win"))return C.O
if(C.b.L(s,"Mac"))return C.r
if(C.b.L(s,"Linux"))return C.P
return C.Q},
md:function(a,b){var s=new E.hL(a)
s.dP(a,b)
return s},
mm:function(a,b,c,d,e){var s,r
if(t.B.b(a))return E.kA(a,!0,!0,!0,!1)
s=W.jo()
r=s.style
r.width="100%"
r.height="100%"
J.lC(a).l(0,s)
return E.kA(s,!0,!0,!0,!1)},
kA:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.e0(),n=t.z,m=C.f.cb(a,"webgl2",P.lY(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.n(P.l("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.md(m,a)
n=new T.ic(m)
m.getParameter(3379)
n.c=m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.el(a)
s=new X.ha()
s.c=new X.ag(!1,!1,!1)
s.d=P.kg(t.e)
n.b=s
s=new X.hC(n)
s.f=0
s.r=V.aH()
s.x=V.aH()
s.ch=s.Q=1
n.c=s
s=new X.hf(n)
s.r=0
s.x=V.aH()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.ii(n)
s.f=V.aH()
s.r=V.aH()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=[]
s=$.fV
n.Q=(s==null?$.fV=new E.ez(E.kM(),E.kN()):s).a===C.m?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.Q(q,"contextmenu",n.geD(),!1))
n.z.push(W.Q(a,"focus",n.geN(),!1))
n.z.push(W.Q(a,"blur",n.gex(),!1))
n.z.push(W.Q(q,"keyup",n.geR(),!1))
n.z.push(W.Q(q,"keydown",n.geP(),!1))
n.z.push(W.Q(a,"mousedown",n.geV(),!1))
n.z.push(W.Q(a,"mouseup",n.geZ(),!1))
n.z.push(W.Q(a,p,n.geX(),!1))
r=n.z
W.fT(a)
W.fT(a)
r.push(W.Q(a,W.fT(a),n.gf0(),!1))
n.z.push(W.Q(q,p,n.geF(),!1))
n.z.push(W.Q(q,"mouseup",n.geH(),!1))
n.z.push(W.Q(q,"pointerlockchange",n.gf2(),!1))
n.z.push(W.Q(a,"touchstart",n.gfi(),!1))
n.z.push(W.Q(a,"touchend",n.gfe(),!1))
n.z.push(W.Q(a,"touchmove",n.gfg(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.a7(Date.now(),!1)
o.db=0
o.cE()
return o},
fB:function fB(){},
bp:function bp(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bk:function bk(a){this.b=a},
by:function by(a){this.b=a},
ez:function ez(a,b){this.a=a
this.b=b},
hL:function hL(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hM:function hM(a){this.a=a},
hN:function hN(a){this.a=a},
hO:function hO(a){this.a=a},
e0:function e0(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
ie:function ie(a){this.a=a}},Z={
jH:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.bI(c)),35044)
a.bindBuffer(b,null)
return new Z.en(b,s)},
ad:function(a){return new Z.a3(a)},
en:function en(a,b){this.a=a
this.b=b},
fC:function fC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
bd:function bd(a){this.a=a},
aC:function aC(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
c2:function c2(a,b,c){this.a=a
this.b=b
this.c=c},
a3:function a3(a){this.a=a}},D={
z:function(){var s=new D.aW()
s.d=0
return s},
fD:function fD(){},
aW:function aW(){var _=this
_.d=_.c=_.b=_.a=null},
fY:function fY(a){this.a=a},
fZ:function fZ(a){this.a=a},
P:function P(){this.b=null},
ao:function ao(){this.b=null},
ap:function ap(){this.b=null},
p:function p(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
bo:function bo(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aq:function aq(){},
c7:function c7(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null}},X={d2:function d2(a,b){this.a=a
this.b=b},di:function di(a,b){this.a=a
this.b=b},ha:function ha(){var _=this
_.d=_.c=_.b=_.a=null},c9:function c9(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hf:function hf(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ag:function ag(a,b,c){this.a=a
this.b=b
this.c=c},bu:function bu(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hC:function hC(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bv:function bv(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},dG:function dG(){},cm:function cm(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ii:function ii(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},el:function el(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
k2:function(a,b,c){var s,r,q,p=new X.fz()
p.d=p.c=p.b=p.a=512
p.e=!0
p.f=!1
p.x=p.r=1
p.ch=T.ky(null)
p.cx=new V.X(0,0,0,1)
p.cy=!0
p.db=2000
p.dx=!0
p.dy=V.hK()
p.sai(0,512)
p.sad(0,512)
if(c==null)c=new V.X(0,0,0,1)
if(!p.cx.n(0,c)){s=p.cx
p.cx=c
r=new D.p("color",s,c)
r.b=!0
p.Y(r)}if(p.cy!==b){p.cy=b
r=new D.p("clearColor",!b,b)
r.b=!0
p.Y(r)}r=p.db
$.y().toString
if(!(Math.abs(r-2000)<1e-9)){p.db=2000
r=new D.p("depth",r,2000)
r.b=!0
p.Y(r)}if(!p.f){p.f=!0
r=new D.p("autoResize",!1,!0)
r.b=!0
p.Y(r)}r=p.r
$.y().toString
if(!(Math.abs(r-1)<1e-9)){p.r=1
r=new D.p("autoResizeScalarX",r,1)
r.b=!0
p.Y(r)}r=p.x
$.y().toString
if(!(Math.abs(r-1)<1e-9)){p.x=1
r=new D.p("autoResizeScalarY",r,1)
r.b=!0
p.Y(r)}q=V.hK()
if(!J.x(p.dy,q)){s=p.dy
p.dy=q
r=new D.p("region",s,q)
r.b=!0
p.Y(r)}return p},
jt:function(a,b){var s=new X.h4(),r=new V.X(0,0,0,1)
s.a=r
s.b=a
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=V.hK()
s.r=r
return s},
ko:function(a){var s,r=new X.dD()
r.c=1.0471975511965976
r.d=0.1
r.e=2000
r.sb3(a)
s=r.c
$.y().toString
if(!(Math.abs(s-1.0471975511965976)<1e-9)){r.c=1.0471975511965976
s=new D.p("fov",s,1.0471975511965976)
s.b=!0
r.Y(s)}s=r.d
$.y().toString
if(!(Math.abs(s-0.1)<1e-9)){r.d=0.1
s=new D.p("near",s,0.1)
s.b=!0
r.Y(s)}s=r.e
$.y().toString
if(!(Math.abs(s-2000)<1e-9)){r.e=2000
s=new D.p("far",s,2000)
s.b=!0
r.Y(s)}return r},
fz:function fz(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jn:function jn(){},
h4:function h4(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h6:function h6(){this.b=this.a=null},
dD:function dD(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
i4:function i4(){}},V={
fF:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.X(s,r,q,1)},
jW:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
o8:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.dE(a-b,s)
return(a<0?a+s:a)+b},
B:function(a,b,c){if(a==null)return C.b.af("null",c)
$.y().toString
return C.b.af(C.d.dz(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bO:function(a,b,c){var s,r,q,p,o,n,m=[]
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.m)(a),++q){p=V.B(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.d(m,o)
s=C.b.af(m[o],r)
n=m.length
if(o>=n)return H.d(m,o)
m[o]=s}return m},
cT:function(a){return C.d.hv(Math.pow(2,C.L.bW(Math.log(H.nJ(a))/Math.log(2))))},
jA:function(){var s=$.ki
return s==null?$.ki=new V.cb(1,0,0,0,1,0,0,0,1):s},
au:function(){var s=$.hw
return s==null?$.hw=V.aF(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aF:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.b4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kl:function(a,b,c){return V.aF(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kk:function(a,b,c){return V.aF(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
kj:function(a,b,c){var s=c.E(),r=b.ax(s).E(),q=s.ax(r),p=new V.w(a.a,a.b,a.c),o=r.N(0).ab(p),n=q.N(0).ab(p),m=s.N(0).ab(p)
return V.aF(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
aH:function(){var s=$.kq
return s==null?$.kq=new V.a2(0,0):s},
kr:function(){var s=$.av
return s==null?$.av=new V.J(0,0,0):s},
hK:function(){var s=$.cj
return s==null?$.cj=V.ci(0,0,1,1):s},
ci:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dJ(a,b,c,d)},
cq:function(){var s=$.kK
return s==null?$.kK=new V.w(0,0,0):s},
mo:function(){var s=$.iz
return s==null?$.iz=new V.w(-1,0,0):s},
jG:function(){var s=$.iA
return s==null?$.iA=new V.w(0,1,0):s},
kL:function(){var s=$.iB
return s==null?$.iB=new V.w(0,0,1):s},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
X:function X(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fW:function fW(){},
cb:function cb(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
b4:function b4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a2:function a2(a,b){this.a=a
this.b=b},
J:function J(a,b,c){this.a=a
this.b=b
this.c=c},
aI:function aI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dJ:function dJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Z:function Z(a,b){this.a=a
this.b=b},
w:function w(a,b,c){this.a=a
this.b=b
this.c=c},
o3:function(a){P.mn(C.J,new V.jh(a))},
mg:function(a){var s=new V.hW()
s.dR(a,!0)
return s},
jh:function jh(a){this.a=a},
hW:function hW(){this.b=this.a=null},
hY:function hY(a){this.a=a},
hX:function hX(a){this.a=a}},U={
k8:function(){var s=new U.fG()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
jp:function(a){var s=new U.bT()
s.a=a
return s},
kc:function(){var s=new U.bq()
s.ba()
s.aE(s.gdV(),s.gf6())
s.e=null
s.f=V.au()
s.r=0
return s},
kF:function(a,b){var s,r,q,p=new U.co(),o=U.k8()
o.sdC(0,!0)
o.sdk(6.283185307179586)
o.sdm(0)
o.sa9(0,0)
o.sdl(100)
o.sX(0)
o.sd_(0.5)
p.b=o
s=p.gbb()
o.gm().l(0,s)
o=U.k8()
o.sdC(0,!0)
o.sdk(6.283185307179586)
o.sdm(0)
o.sa9(0,0)
o.sdl(100)
o.sX(0)
o.sd_(0.5)
p.c=o
o.gm().l(0,s)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
r=new X.ag(a,!1,!1)
q=p.d
p.d=r
o=new D.p("modifiers",q,r)
o.b=!0
p.O(o)
o=p.f
if(o!==!1){p.f=!1
o=new D.p("invertX",o,!1)
o.b=!0
p.O(o)}o=p.r
if(o!==!1){p.r=!1
o=new D.p("invertY",o,!1)
o.b=!0
p.O(o)}p.bI(b)
return p},
kG:function(a,b){var s,r,q=new U.cp()
q.c=0.01
q.e=q.d=0
s=new X.ag(a,!1,!1)
q.b=s
r=new D.p("modifiers",null,s)
r.b=!0
q.O(r)
q.bI(b)
return q},
fG:function fG(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bT:function bT(){this.b=this.a=null},
bq:function bq(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
Y:function Y(){},
co:function co(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cp:function cp(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
jq:function(){var s,r,q,p,o,n,m,l,k,j=null,i=new M.bU()
i.a=!0
s=E.jr()
r=F.jC()
q=r.a
p=new V.w(-1,-1,1).E()
o=q.bh(new V.aI(1,2,4,6),V.fF(255,0,0),new V.J(-1,-1,0),new V.a2(0,1),p,j)
p=r.a
q=new V.w(1,-1,1).E()
n=p.bh(new V.aI(0,3,4,6),V.fF(0,0,255),new V.J(1,-1,0),new V.a2(1,1),q,j)
q=r.a
p=new V.w(1,1,1).E()
m=q.bh(new V.aI(0,2,5,6),V.fF(0,128,0),new V.J(1,1,0),new V.a2(1,0),p,j)
p=r.a
q=V.aH()
l=new V.w(-1,1,1).E()
k=p.bh(new V.aI(0,2,4,7),V.fF(255,255,0),new V.J(-1,1,0),q,l,j)
r.d.fI([o,n,m,k])
r.al()
s.sb9(0,r)
i.e=s
i.saY(j)
i.saC(0,j)
i.sar(j)
return i},
ka:function(){var s,r,q=new M.bZ()
q.a=!0
s=O.fE()
q.e=s
s.aE(q.gez(),q.geB())
q.y=q.x=q.r=q.f=null
r=X.jt(!0,null)
q.saY(null)
q.saC(0,r)
q.sar(null)
return q},
bR:function bR(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
bU:function bU(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bZ:function bZ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ac:function ac(){}},A={
m_:function(a,b){var s=a.ay,r=new A.hh(b,s)
r.aS(b,s)
r.dO(a,b)
return r},
m0:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="MaterialLight_"+a5.gag(a5)+a6.gag(a6)+a7.gag(a7)+a8.gag(a8)+a9.gag(a9)+b0.gag(b0)+b1.gag(b1)+b2.gag(b2)+b3.gag(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.m)(b4),++r)a+="_"+H.e(b4[r].a)}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.m)(b5),++r)a+="_"+H.e(b5[r].a)}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.m)(b6),++r)a+="_"+H.e(b6[r].a)}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.m)(b7),++r)a+="_"+H.e(b7[r].a)}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
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
b=$.R()
if(h){s=$.ak()
b=new Z.a3(b.a|s.a)}if(g){s=$.aj()
b=new Z.a3(b.a|s.a)}if(f){s=$.al()
b=new Z.a3(b.a|s.a)}if(e){s=$.aT()
b=new Z.a3(b.a|s.a)}return new A.hk(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,!1,f,e,!1,a1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
j5:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
j6:function(a,b,c){var s,r="Txt, txtCube).rgb;\n"
A.j5(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.fp(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.c){s+="   "+c+"Color = "+c+"Clr*textureCube("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.c){s+="   "+c+"Color = textureCube("+c+r
a.a=s}a.a=s+"}\n"},
nd:function(a,b){var s,r=a.a,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.j5(b,r,"emission")
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
n9:function(a,b){var s,r=a.b
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.j6(b,r,"ambient")
b.a+="\n"},
nb:function(a,b){var s,r=a.c
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.j6(b,r,"diffuse")
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
ne:function(a,b){var s,r=a.d
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.j6(b,r,"invDiffuse")
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
nk:function(a,b){var s,r=a.e
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.j6(b,r,"specular")
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
ng:function(a,b){var s,r,q
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
ni:function(a,b){var s,r=a.r,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.j5(b,r,"reflect")
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
nj:function(a,b){var s,r=a.x,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.j5(b,r,"refract")
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
na:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.e(s)
q=A.fp(r)
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
p+=u.u
c.a=p
p+=u.z
c.a=p
c.a=p+"\n"}o=[]
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
o=[]
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
n=[]
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
nc:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+H.e(s)
q=A.fp(r)
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
if(!p.a)p=p.c
else p=!0
if(p)m.push("ambientColor")
if(a.dx){c.a+=u.k
l=[]
p=a.c
if(!p.a)p=p.c
else p=!0
if(p)l.push("diffuse(norm, lit.viewDir)")
p=a.d
if(!p.a)p=p.c
else p=!0
if(p)l.push("invDiffuse(norm, lit.viewDir)")
p=a.e
if(!p.a)p=p.c
else p=!0
if(p)l.push("specular(norm, lit.viewDir)")
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
c.a+="      highLight = intensity*("+C.a.p(l," + ")+");\n"}else c.a+="   highLight = "+C.a.p(l," + ")+";\n"
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
nh:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.e(s)
q=A.fp(r)
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
p=c.a+="   return "+C.a.p(j," * ")+";\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+k+")\n"
c.a=p
c.a=p+"{\n"
j=[]
p=a.b
if(!p.a)p=p.c
else p=!0
if(p)j.push("ambientColor")
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
nl:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.e(s)
q=A.fp(r)
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
if(m){s=$.fV
if(s==null)s=$.fV=new E.ez(E.kM(),E.kN())
p=c.a
if(s.b===C.r){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
s=c.a+="   return "+C.a.p(h," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+i+")\n"
c.a=s
c.a=s+"{\n"
h=[]
s=a.b
if(!s.a)s=s.c
else s=!0
if(s)h.push("ambientColor")
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
nf:function(a,b){var s,r
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
nm:function(a){var s,r,q,p,o,n,m,l,k,j="   lightAccum += all",i="precision mediump float;\n\n",h=u.f,g=new P.ba("")
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
A.nd(a,g)
A.n9(a,g)
A.nb(a,g)
A.ne(a,g)
A.nk(a,g)
r=a.db
if(r){p=g.a+="// === Environmental ===\n"
p+="\n"
g.a=p
p+="uniform samplerCube envSampler;\n"
g.a=p
g.a=p+"\n"
A.ni(a,g)
A.nj(a,g)}A.ng(a,g)
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
if(p){for(o=a.z,n=o.length,l=0;l<o.length;o.length===n||(0,H.m)(o),++l)A.na(a,o[l],g)
for(o=a.Q,n=o.length,l=0;l<o.length;o.length===n||(0,H.m)(o),++l)A.nc(a,o[l],g)
for(o=a.ch,n=o.length,l=0;l<o.length;o.length===n||(0,H.m)(o),++l)A.nh(a,o[l],g)
for(o=a.cx,n=o.length,l=0;l<o.length;o.length===n||(0,H.m)(o),++l)A.nl(a,o[l],g)
A.nf(a,g)}o=g.a+="// === Main ===\n"
o+="\n"
g.a=o
o+="void main()\n"
g.a=o
o+="{\n"
g.a=o
o=g.a=o+"   float alpha = alphaValue();\n"
if(s){s=o+"   vec3 norm = normal();\n"
g.a=s}else s=o
if(r)s=g.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
k=[]
if(p){g.a=s+u.o
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
for(s=a.z,r=s.length,l=0;l<s.length;s.length===r||(0,H.m)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.d(p,0)
g.a+=j+(p[0].toUpperCase()+C.b.aR(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,l=0;l<s.length;s.length===r||(0,H.m)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.d(p,0)
g.a+=j+(p[0].toUpperCase()+C.b.aR(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,l=0;l<s.length;s.length===r||(0,H.m)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.d(p,0)
g.a+=j+(p[0].toUpperCase()+C.b.aR(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,l=0;l<s.length;s.length===r||(0,H.m)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.d(p,0)
g.a+=j+(p[0].toUpperCase()+C.b.aR(p,1))+"Values(norm);\n"}if(a.cy<=0)g.a+="   lightAccum += nonLightValues(norm);\n"}s=a.a
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
nn:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.bj+"];\n"
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
np:function(a,b){var s
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
no:function(a,b){var s
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
nr:function(a,b){var s,r
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
ns:function(a,b){var s,r
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
nq:function(a,b){var s
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
nt:function(a,b){var s
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
km:function(a){var s,r,q,p,o,n
if(!a.a)s=a.c
else s=!0
r=a.c
q="Normal_"+a.gag(a)
p=$.R()
o=$.ak()
o=p.a|o.a
n=new Z.a3(o)
if(s)n=new Z.a3(o|$.aj().a)
return new A.hF(a,s,!1,r,q,r?new Z.a3(n.a|$.al().a):n)},
fp:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.b.aR(a,1)},
ml:function(a,b){var s,r,q,p
for(s=0,r="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";s<a;++s)r=r+("uniform sampler2D txt"+s+";\n")+("uniform mat4 clrMat"+s+";\n")+("uniform vec2 srcLoc"+s+";\n")+("uniform vec2 srcSize"+s+";\n")+("uniform vec2 destLoc"+s+";\n")+("uniform vec2 destSize"+s+";\n")+("uniform int flip"+s+";\n")
r+="\nvec4 clrAccum;\n"
q=b===C.I
r=(q||b===C.i?r+"float colorCount;\n":r)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.H)r+="      clrAccum += color;\n"
else if(b===C.j)r+="      clrAccum = mix(clrAccum, color, color.a);\n"
else r=q?r+"      clrAccum += color;\n      colorCount += 1.0;\n":r+"      clrAccum = color;\n      colorCount = 1.0;\n"
r+="   }\n}\n\nvoid layoutAll()\n{\n"
p=b===C.i
if(p)for(s=a-1;s>=0;--s)r=r+("   if(txtCount > "+s+")\n")+"   {\n"+("     layout(txt"+s+", clrMat"+s+", srcLoc"+s+", srcSize"+s+", destLoc"+s+", destSize"+s+", flip"+s+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(s=0;s<a;++s)r=r+("   if(txtCount <= "+s+") return;\n")+("   layout(txt"+s+", clrMat"+s+", srcLoc"+s+", srcSize"+s+", destLoc"+s+", destSize"+s+", flip"+s+");\n")
r+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(q)r+="   colorCount = 1.0;\n"
else if(p)r+="   colorCount = 0.0;\n"
r+="   layoutAll();\n"
r=(q?r+"   clrAccum = clrAccum/colorCount;\n":r)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return r.charCodeAt(0)==0?r:r},
mk:function(a,b,c){var s="TextureLayout_"+a+"_"+C.c.i(b.a),r=new A.ib(c,s)
r.aS(c,s)
r.dS(a,b,c)
return r},
jF:function(a,b,c,d,e){var s=new A.iq(a,c,e)
s.f=d
P.jy(d,0,!1)
return s},
fu:function fu(a,b,c){this.a=a
this.b=b
this.c=c},
fv:function fv(a){this.a=a},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
fO:function fO(a,b){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hh:function hh(a,b){var _=this
_.d2=_.hG=_.bk=_.ay=_.bj=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hO=_.hN=_.hM=_.bV=_.bU=_.bT=_.bS=_.bR=_.bQ=_.bP=_.bO=_.df=_.hL=_.de=_.dd=_.hK=_.dc=_.da=_.d9=_.hJ=_.d8=_.d7=_.d6=_.hI=_.d5=_.d4=_.hH=_.d3=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fA:function fA(a,b){this.a=a
this.b=b},
fM:function fM(a,b){this.a=a
this.b=b},
hI:function hI(a,b){this.a=a
this.b=b},
i0:function i0(a,b){this.a=a
this.b=b},
hk:function hk(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.bj=b5
_.ay=b6
_.bk=b7},
e9:function e9(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ea:function ea(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ed:function ed(a,b,c,d,e,f,g,h,i,j){var _=this
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
eg:function eg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
hD:function hD(a,b){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hF:function hF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dN:function dN(){},
bn:function bn(a,b){this.a=a
this.b=b},
i_:function i_(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ib:function ib(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ip:function ip(){},
iu:function iu(a){this.a=a},
cn:function cn(a,b,c){this.a=a
this.c=b
this.d=c},
ir:function ir(a,b,c){this.a=a
this.c=b
this.d=c},
is:function is(a,b,c){this.a=a
this.c=b
this.d=c},
it:function it(a,b,c){this.a=a
this.c=b
this.d=c},
iq:function iq(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
e5:function e5(a,b,c){this.a=a
this.c=b
this.d=c},
e6:function e6(a,b,c){this.a=a
this.c=b
this.d=c},
e7:function e7(a,b,c){this.a=a
this.c=b
this.d=c},
e8:function e8(a,b,c){this.a=a
this.c=b
this.d=c},
iv:function iv(a,b,c){this.a=a
this.c=b
this.d=c},
eb:function eb(a,b,c){this.a=a
this.c=b
this.d=c},
ec:function ec(a,b,c){this.a=a
this.c=b
this.d=c},
ee:function ee(a,b,c){this.a=a
this.c=b
this.d=c},
ef:function ef(a,b,c){this.a=a
this.c=b
this.d=c}},F={
j4:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
cM:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.w(f,e+a3,d+a4)
h.a=c
s=a3-a4
r=a4-a5
q=a5-a3
p=h.b=new V.w(s+a5,r+a3,q+a4)
o=new V.w(s-a5,r-a3,q-a4)
h.c=o
n=h.d=new V.w(g-a5,e-a3,d-a4)
if(f>0){h.d=p
h.b=n
f=p
g=n}else{f=n
g=p}for(d=f,f=g,g=c,e=o,m=0;m<a6;++m,l=d,d=g,g=f,f=e,e=l){h.a=f
h.b=e
h.c=d
h.d=g}k=F.j4(g)
j=F.j4(f)
i=F.lg(a1,a2,new F.j3(h,F.j4(e),F.j4(d),j,k,a0),b)
if(i!=null)a.c2(i)},
o7:function(){return F.nO(15,30,0.5,1,new F.ji())},
nO:function(a,b,c,d,e){var s=F.lg(a,b,new F.j9(e,d,b,c),null)
if(s==null)return null
s.al()
s.h5(new F.iJ(),new F.hE())
return s},
lg:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.jC()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.iD(e,e,new V.X(n,0,0,1),e,e,new V.a2(p,1),e,e,0)
o.l(0,m)
c.$3(m,p,0)
r.push(m.bM(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.iD(e,e,new V.X(h,g,f,1),e,e,new V.a2(p,k),e,e,0)
i.l(0,m)
c.$3(m,p,l)
r.push(m.bM(d))}}s.d.fJ(a+1,b+1,r)
return s},
c_:function(a,b,c){var s=new F.h_(),r=a.a
if(r==null)H.n(P.l("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.n(P.l("May not create a face with vertices attached to different shapes."))
s.bF(a)
s.bG(b)
s.ft(c)
s.a.a.d.b.push(s)
s.a.a.a0()
return s},
lW:function(a,b){var s=new F.hb(),r=a.a
if(r==null)H.n(P.l("May not create a line with a start vertex which is not attached to a shape."))
if(r!=b.a)H.n(P.l("May not create a line with vertices attached to different shapes."))
s.bF(a)
s.bG(b)
s.a.a.c.b.push(s)
s.a.a.a0()
return s},
jC:function(){var s=new F.hS(),r=new F.iE(s)
r.b=!1
r.c=[]
s.a=r
r=new F.hV(s)
r.b=[]
s.b=r
r=new F.hU(s)
r.b=[]
s.c=r
r=new F.hT(s)
r.b=[]
s.d=r
return s},
iD:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.iC(),p=new F.iM()
p.b=[]
q.b=p
p=new F.iI()
p.b=[]
p.c=[]
q.c=p
p=new F.iF()
p.b=[]
p.c=[]
p.d=[]
q.d=p
h=$.lv()
q.e=0
p=$.R()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.ak().a)!==0?e:r
q.x=(s&$.aj().a)!==0?b:r
q.y=(s&$.aA().a)!==0?f:r
q.z=(s&$.al().a)!==0?g:r
q.Q=(s&$.lw().a)!==0?c:r
q.ch=(s&$.bP().a)!==0?i:0
q.cx=(s&$.aT().a)!==0?a:r
return q},
j3:function j3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ji:function ji(){},
j9:function j9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h_:function h_(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h0:function h0(){},
hZ:function hZ(){},
hb:function hb(){this.b=this.a=null},
hc:function hc(){},
io:function io(){},
hH:function hH(){this.a=null},
hS:function hS(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hT:function hT(a){this.a=a
this.b=null},
hU:function hU(a){this.a=a
this.b=null},
hV:function hV(a){this.a=a
this.b=null},
iC:function iC(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iO:function iO(a){this.a=a},
iN:function iN(a){this.a=a},
iE:function iE(a){this.a=a
this.c=this.b=null},
iF:function iF(){this.d=this.c=this.b=null},
iG:function iG(a,b){this.a=a
this.b=b},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(){this.c=this.b=null},
iK:function iK(){},
iJ:function iJ(){},
iL:function iL(){},
hE:function hE(){},
iM:function iM(){this.b=null}},T={
ky:function(a){var s=new T.i9()
s.a=0
s.b=a
s.d=s.c=!1
s.x=s.r=s.f=s.e=0
return s},
i7:function i7(){},
i8:function i8(){},
i9:function i9(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ia:function ia(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ic:function ic(a){var _=this
_.a=a
_.e=_.d=_.c=null},
id:function id(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},S={
la:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="testCanvas",a7=null,a8=V.mg("Test 031"),a9=W.jo()
a9.className="pageLargeCanvas"
a9.id=a6
a8.a.appendChild(a9)
a8.cO(["A test of the Distortion cover with a dynamic normal map. ","The distortion map is generated into one back buffer. ","The scene is generated into another back buffer. ","The two parts are combined with a Distortion cover. ","Use mouse to rotate cube in normal map and Ctrl plus mouse ","to rotate scene."])
a8.cO(["\xab[Back to Tests|../]"])
s=document.getElementById(a6)
if(s==null)H.n(P.l("Failed to find an element with the identifier, testCanvas."))
r=E.mm(s,!0,!0,!0,!1)
q=E.jr()
p=F.jC()
F.cM(p,a7,a7,1,1,1,0,0,1)
F.cM(p,a7,a7,1,1,0,1,0,3)
F.cM(p,a7,a7,1,1,0,0,1,2)
F.cM(p,a7,a7,1,1,-1,0,0,0)
F.cM(p,a7,a7,1,1,0,-1,0,0)
F.cM(p,a7,a7,1,1,0,0,-1,3)
p.al()
q.sb9(0,p)
a8=U.kc()
a8.l(0,U.kF(!1,r.x))
a8.l(0,U.kG(!1,r.x))
q.sb3(a8)
o=new O.dx()
o.b=V.jA()
o.c=V.au()
o.d=new A.O(!1,!1,!1)
o.cF(a7)
o.cG(a7)
o.U()
o.r=null
a8=r.f.h4("../resources/diceBumpMap")
n=o.d
if(!n.c){o.d=new A.O(n.a,!1,!0)
o.cF(a7)
o.a=null}o.cG(a8)
m=X.k2(!0,!0,new V.X(0.5,0.5,1,1))
l=M.ka()
l.sar(o)
l.saC(0,m)
l.e.l(0,q)
l.b.sb3(U.jp(V.kl(0,0,5)))
k=U.kc()
k.l(0,U.kF(!0,r.x))
k.l(0,U.kG(!0,r.x))
k.l(0,U.jp(V.kl(0,0,5)))
j=X.ko(k)
i=X.k2(!0,!1,a7)
h=E.jr()
h.sb9(0,F.o7())
g=new O.dn()
a8=O.fE()
g.e=a8
a8.aE(g.ges(),g.gev())
a8=new O.at(g,"emission")
a8.c=new A.O(!1,!1,!1)
a8.f=new V.M(0,0,0)
g.f=a8
a8=new O.at(g,"ambient")
a8.c=new A.O(!1,!1,!1)
a8.f=new V.M(0,0,0)
g.r=a8
a8=new O.at(g,"diffuse")
a8.c=new A.O(!1,!1,!1)
a8.f=new V.M(0,0,0)
g.x=a8
a8=new O.at(g,"invDiffuse")
a8.c=new A.O(!1,!1,!1)
a8.f=new V.M(0,0,0)
g.y=a8
a8=new O.hn(g,"specular")
a8.c=new A.O(!1,!1,!1)
a8.f=new V.M(0,0,0)
a8.ch=100
g.z=a8
a8=new O.hj(g,"bump")
a8.c=new A.O(!1,!1,!1)
g.Q=a8
g.ch=null
a8=new O.at(g,"reflect")
a8.c=new A.O(!1,!1,!1)
a8.f=new V.M(0,0,0)
g.cx=a8
a8=new O.hm(g,"refract")
a8.c=new A.O(!1,!1,!1)
a8.f=new V.M(0,0,0)
a8.ch=1
g.cy=a8
a8=new O.hi(g,"alpha")
a8.c=new A.O(!1,!1,!1)
a8.f=1
g.db=a8
a8=new D.c7()
a8.ba()
a8.e=[]
a8.f=[]
a8.r=[]
a8.x=[]
a8.z=a8.y=null
a8.cc(a8.geq(),a8.gf4(),a8.gf8())
g.dx=a8
n=new O.hl()
n.b=new V.X(0,0,0,0)
n.c=1
n.d=10
n.e=!1
g.dy=n
n=a8.y
a8=n==null?a8.y=D.z():n
a8.l(0,g.gfp())
a8=g.dx
n=a8.z
a8=n==null?a8.z=D.z():n
a8.l(0,g.gaa())
g.fr=null
a8=g.dx
f=V.jG()
n=U.jp(V.kj(V.kr(),f,new V.w(0,-1,-1)))
e=new V.M(1,1,1)
d=new D.bo()
d.c=new V.M(1,1,1)
d.a=V.kL()
d.d=V.jG()
d.e=V.mo()
c=d.b
d.b=n
n.gm().l(0,d.gdT())
n=new D.p("mover",c,d.b)
n.b=!0
d.as(n)
if(!d.c.n(0,e)){c=d.c
d.c=e
n=new D.p("color",c,e)
n.b=!0
d.as(n)}a8.l(0,d)
a8=g.r
a8.saL(0,new V.M(0,0,1))
a8=g.x
a8.saL(0,new V.M(0,1,0))
a8=g.z
a8.saL(0,new V.M(1,0,0))
a8=g.z
a8.cI(new A.O(!0,!1,a8.c.c))
a8.cJ(10)
a8=r.f.dj("../resources/maskonaive",".jpg")
b=M.jq()
n=new O.dO()
n.b=1.0471975511965976
n.d=new V.M(1,1,1)
c=n.c
n.c=a8
a8.gm().l(0,n.gaa())
a8=new D.p("boxTexture",c,n.c)
a8.b=!0
n.D(a8)
b.sar(n)
b.saC(0,i)
b.saY(j)
a=M.ka()
a.saY(j)
a.sar(g)
a.saC(0,i)
a.e.l(0,h)
a0=new O.fN()
a0.scZ(a7)
a0.scW(a7)
a1=V.jA()
if(!J.x(a0.d,a1)){a0.d=a1
a0.U()}a1=V.jA()
if(!J.x(a0.e,a1)){a0.e=a1
a0.U()}a0.scV(a7)
a0.scZ(i.ch)
a0.scW(m.ch)
a0.scV(V.kk(0.05,0.05,0.05))
a2=M.jq()
a2.sar(a0)
a3=new O.e_()
a3.a=new V.X(0,0,0,0)
a8=O.fE()
a3.c=a8
a8.aE(a3.geJ(),a3.geL())
a3.d=0
a3.e=null
a3.r=a3.f=C.j
a4=new V.X(0,0,0,0)
if(!a3.a.n(0,a4)){c=a3.a
a3.a=a4
a8=new D.p("backColor",c,a4)
a8.b=!0
a3.D(a8)}a3.scT(C.j)
a3.scT(C.i)
a8=a3.c
n=m.ch
a8.l(0,O.kz(V.ci(0,0.8,0.2,0.2),!0,n))
n=a3.c
a8=i.ch
n.l(0,O.kz(V.ci(0,0.6,0.2,0.2),!1,a8))
a5=M.jq()
a5.saC(0,X.jt(!1,a7))
a5.sar(a3)
a8=new M.bR()
a8.ba()
a8.e=!0
a8.f=!1
a8.r=null
a8.aE(a8.gfa(),a8.gfc())
a8.bg(0,[b,a,l,a2,a5])
n=r.d
if(n!==a8){if(n!=null)n.gm().C(0,r.gck())
r.d=a8
a8.gm().l(0,r.gck())
r.cl()}V.o3(r)}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,S]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jw.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gR:function(a){return H.ch(a)},
i:function(a){return"Instance of '"+H.e(H.dH(a))+"'"}}
J.h7.prototype={
i:function(a){return String(a)},
gR:function(a){return a?519018:218159}}
J.c6.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gR:function(a){return 0}}
J.b1.prototype={
gR:function(a){return 0},
i:function(a){return String(a)}}
J.dE.prototype={}
J.bD.prototype={}
J.af.prototype={
i:function(a){var s=a[$.lk()]
if(s==null)return this.dM(a)
return"JavaScript function for "+H.e(J.a0(s))}}
J.a8.prototype={
c7:function(a,b){if(!!a.fixed$length)H.n(P.u("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dI(b,null))
return a.splice(b,1)[0]},
C:function(a,b){var s
if(!!a.fixed$length)H.n(P.u("remove"))
for(s=0;s<a.length;++s)if(J.x(a[s],b)){a.splice(s,1)
return!0}return!1},
bg:function(a,b){var s,r
if(!!a.fixed$length)H.n(P.u("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.m)(b),++r)a.push(b[r])},
I:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.bS(a))}},
p:function(a,b){var s,r,q=P.jy(a.length,"",!1)
for(s=0;s<a.length;++s){r=H.e(a[s])
if(s>=q.length)return H.d(q,s)
q[s]=r}return q.join(b)},
h2:function(a){return this.p(a,"")},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
gh_:function(a){if(a.length>0)return a[0]
throw H.c(H.kd())},
gbZ:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.kd())},
aQ:function(a,b){if(!!a.immutable$list)H.n(P.u("sort"))
H.mj(a,b==null?J.n0():b)},
dJ:function(a){return this.aQ(a,null)},
L:function(a,b){var s
for(s=0;s<a.length;++s)if(J.x(a[s],b))return!0
return!1},
i:function(a){return P.ju(a,"[","]")},
gM:function(a){return new J.T(a,a.length)},
gR:function(a){return H.ch(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.n(P.u("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bN(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.n(P.u("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bN(a,b))
a[b]=c},
$ii:1,
$if:1}
J.dg.prototype={}
J.T.prototype={
gH:function(a){return this.d},
w:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.m(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.b0.prototype={
aM:function(a,b){var s
if(typeof b!="number")throw H.c(H.aR(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbl(b)
if(this.gbl(a)===s)return 0
if(this.gbl(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbl:function(a){return a===0?1/a<0:a<0},
hv:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.u(""+a+".toInt()"))},
bW:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.u(""+a+".floor()"))},
W:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.u(""+a+".round()"))},
dz:function(a,b){var s
if(b>20)throw H.c(P.aJ(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbl(a))return"-"+s
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
dE:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
dN:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cL(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.cL(a,b)},
cL:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.u("Result of truncating division is "+H.e(s)+": "+H.e(a)+" ~/ "+b))},
be:function(a,b){var s
if(a>0)s=this.fz(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fz:function(a,b){return b>31?0:a>>>b},
$iV:1,
$iN:1}
J.c5.prototype={$io:1}
J.c4.prototype={}
J.aD.prototype={
bL:function(a,b){if(b<0)throw H.c(H.bN(a,b))
if(b>=a.length)H.n(H.bN(a,b))
return a.charCodeAt(b)},
cq:function(a,b){if(b>=a.length)throw H.c(H.bN(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(typeof b!="string")throw H.c(P.k1(b,null,null))
return a+b},
cf:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.dI(b,null))
if(b>c)throw H.c(P.dI(b,null))
if(c>a.length)throw H.c(P.dI(c,null))
return a.substring(b,c)},
aR:function(a,b){return this.cf(a,b,null)},
t:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.F)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
af:function(a,b){var s=b-a.length
if(s<=0)return a
return this.t(" ",s)+a},
fN:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aJ(c,0,s,null,null))
return H.le(a,b,c)},
L:function(a,b){return this.fN(a,b,0)},
aM:function(a,b){var s
if(typeof b!="string")throw H.c(H.aR(b))
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
$iK:1}
H.H.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.b.bL(this.a,b)}}
H.i.prototype={}
H.bt.prototype={
gH:function(a){var s=this.d
return s},
w:function(){var s,r=this,q=r.a,p=J.bf(q),o=p.gj(q)
if(r.b!=o)throw H.c(P.bS(q))
s=r.c
if(typeof o!=="number")return H.q(o)
if(s>=o){r.d=null
return!1}r.d=p.F(q,s);++r.c
return!0}}
H.b3.prototype={
gM:function(a){return new H.ca(J.bi(this.a),this.b)},
gj:function(a){return J.bj(this.a)},
F:function(a,b){return this.b.$1(J.jk(this.a,b))}}
H.bY.prototype={$ii:1}
H.ca.prototype={
w:function(){var s=this,r=s.b
if(r.w()){s.a=s.c.$1(r.gH(r))
return!0}s.a=null
return!1},
gH:function(a){var s=this.a
return s}}
H.cr.prototype={
gM:function(a){return new H.eo(J.bi(this.a),this.b)}}
H.eo.prototype={
w:function(){var s,r
for(s=this.a,r=this.b;s.w();)if(r.$1(s.gH(s)))return!0
return!1},
gH:function(a){var s=this.a
return s.gH(s)}}
H.c0.prototype={}
H.ej.prototype={
k:function(a,b,c){throw H.c(P.u("Cannot modify an unmodifiable list"))}}
H.bE.prototype={}
H.il.prototype={
ae:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.dy.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dh.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.e(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.e(r.a)+")"
return q+p+"' on '"+s+"' ("+H.e(r.a)+")"}}
H.ei.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.hG.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.f1.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bl.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.li(r==null?"unknown":r)+"'"},
ghz:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i5.prototype={}
H.i1.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.li(s)+"'"}}
H.bQ.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bQ))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gR:function(a){var s,r=this.c
if(r==null)s=H.ch(this.a)
else s=typeof r!=="object"?J.W(r):H.ch(r)
return(s^H.ch(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.dH(s))+"'")}}
H.dL.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.t.prototype={
gj:function(a){return this.a},
gaz:function(a){return new H.aE(this)},
ghy:function(a){return H.lZ(new H.aE(this),new H.h9(this))},
fO:function(a,b){var s=this.b
if(s==null)return!1
return this.e7(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bc(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bc(p,b)
q=r==null?n:r.b
return q}else return o.h1(b)},
h1:function(a){var s,r,q=this.d
if(q==null)return null
s=this.cv(q,J.W(a)&0x3ffffff)
r=this.dg(s,a)
if(r<0)return null
return s[r].b},
k:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.co(s==null?m.b=m.by():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.co(r==null?m.c=m.by():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.by()
p=J.W(b)&0x3ffffff
o=m.cv(q,p)
if(o==null)m.bD(q,p,[m.bz(b,c)])
else{n=m.dg(o,b)
if(n>=0)o[n].b=c
else o.push(m.bz(b,c))}}},
I:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.bS(s))
r=r.c}},
co:function(a,b,c){var s=this.bc(a,b)
if(s==null)this.bD(a,b,this.bz(b,c))
else s.b=c},
bz:function(a,b){var s=this,r=new H.hd(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
dg:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1},
i:function(a){return P.kh(this)},
bc:function(a,b){return a[b]},
cv:function(a,b){return a[b]},
bD:function(a,b,c){a[b]=c},
ea:function(a,b){delete a[b]},
e7:function(a,b){return this.bc(a,b)!=null},
by:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bD(r,s,r)
this.ea(r,s)
return r}}
H.h9.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.mZ(this.a).au("2(1)")}}
H.hd.prototype={}
H.aE.prototype={
gj:function(a){return this.a.a},
gM:function(a){var s=this.a,r=new H.dk(s,s.r)
r.c=s.e
return r}}
H.dk.prototype={
gH:function(a){return this.d},
w:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.bS(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jb.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.jc.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jd.prototype={
$1:function(a){return this.a(a)}}
H.h8.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.ce.prototype={}
H.bw.prototype={
gj:function(a){return a.length},
$ir:1}
H.b6.prototype={
h:function(a,b){H.ay(b,a,a.length)
return a[b]},
k:function(a,b,c){H.ay(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.cd.prototype={
k:function(a,b,c){H.ay(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.dr.prototype={
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.ds.prototype={
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.dt.prototype={
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.du.prototype={
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.dv.prototype={
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.cf.prototype={
gj:function(a){return a.length},
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.dw.prototype={
gj:function(a){return a.length},
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.cx.prototype={}
H.cy.prototype={}
H.cz.prototype={}
H.cA.prototype={}
H.ab.prototype={
au:function(a){return H.fd(v.typeUniverse,this,a)},
cp:function(a){return H.mM(v.typeUniverse,this,a)}}
H.eF.prototype={}
H.eA.prototype={
i:function(a){return this.a}}
H.cI.prototype={}
P.iQ.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:16}
P.iP.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.iR.prototype={
$0:function(){this.a.$0()}}
P.iS.prototype={
$0:function(){this.a.$0()}}
P.cH.prototype={
dX:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bM(new P.j0(this,b),0),a)
else throw H.c(P.u("`setTimeout()` not found."))},
dY:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bM(new P.j_(this,a,Date.now(),b),0),a)
else throw H.c(P.u("Periodic timer."))},
$icl:1}
P.j0.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.j_.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.dN(s,o)}q.c=p
r.d.$1(q)}}
P.bG.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.bH.prototype={
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
if(r instanceof P.bG){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.bi(s)
if(o instanceof P.bH){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.cE.prototype={
gM:function(a){return new P.bH(this.a())}}
P.ep.prototype={}
P.dV.prototype={}
P.dW.prototype={}
P.cl.prototype={}
P.j2.prototype={}
P.j7.prototype={
$0:function(){var s=H.c(this.a)
s.stack=J.a0(this.b)
throw s}}
P.iX.prototype={
hq:function(a){var s,r,q,p=null
try{if(C.e===$.ai){a.$0()
return}P.nw(p,p,this,a)}catch(q){s=H.fq(q)
r=H.jU(q)
P.l2(p,p,this,s,r)}},
hr:function(a,b){var s,r,q,p=null
try{if(C.e===$.ai){a.$1(b)
return}P.nx(p,p,this,a,b)}catch(q){s=H.fq(q)
r=H.jU(q)
P.l2(p,p,this,s,r)}},
hs:function(a,b){return this.hr(a,b,t.z)},
fL:function(a){return new P.iY(this,a)},
cS:function(a,b){return new P.iZ(this,a,b)}}
P.iY.prototype={
$0:function(){return this.a.hq(this.b)}}
P.iZ.prototype={
$1:function(a){return this.a.hs(this.b,a)},
$S:function(){return this.c.au("~(0)")}}
P.ct.prototype={
gM:function(a){var s=new P.cu(this,this.r)
s.c=this.e
return s},
gj:function(a){return this.a},
L:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.e5(b)
return r}},
e5:function(a){var s=this.d
if(s==null)return!1
return this.bv(s[this.bs(a)],a)>=0},
l:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cr(s==null?q.b=P.jJ():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cr(r==null?q.c=P.jJ():r,b)}else return q.e_(0,b)},
e_:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.jJ()
s=q.bs(b)
r=p[s]
if(r==null)p[s]=[q.br(b)]
else{if(q.bv(r,b)>=0)return!1
r.push(q.br(b))}return!0},
C:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.fl(this.c,b)
else return this.fk(0,b)},
fk:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bs(b)
r=n[s]
q=o.bv(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cN(p)
return!0},
cr:function(a,b){if(a[b]!=null)return!1
a[b]=this.br(b)
return!0},
fl:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cN(s)
delete a[b]
return!0},
cw:function(){this.r=1073741823&this.r+1},
br:function(a){var s,r=this,q=new P.iW(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cw()
return q},
cN:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cw()},
bs:function(a){return J.W(a)&1073741823},
bv:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1}}
P.iW.prototype={}
P.cu.prototype={
gH:function(a){return this.d},
w:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.bS(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.c3.prototype={}
P.c8.prototype={$ii:1,$if:1}
P.A.prototype={
gM:function(a){return new H.bt(a,this.gj(a))},
F:function(a,b){return this.h(a,b)},
gdh:function(a){return this.gj(a)===0},
hw:function(a){var s,r,q,p,o=this
if(o.gdh(a)){s=J.ke(0)
return s}r=o.h(a,0)
q=P.jy(o.gj(a),r,!0)
p=1
while(!0){s=o.gj(a)
if(typeof s!=="number")return H.q(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s;++p}return q},
i:function(a){return P.ju(a,"[","]")}}
P.dm.prototype={}
P.hg.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.e(a)
r.a=s+": "
r.a+=H.e(b)},
$S:17}
P.as.prototype={
I:function(a,b){var s,r
for(s=J.bi(this.gaz(a));s.w();){r=s.gH(s)
b.$2(r,this.h(a,r))}},
gj:function(a){return J.bj(this.gaz(a))},
i:function(a){return P.kh(a)}}
P.cB.prototype={
i:function(a){return P.ju(this,"{","}")},
F:function(a,b){var s,r,q,p="index"
P.lF(b,p)
P.ku(b,p)
for(s=P.mw(this,this.r),r=0;s.w();){q=s.d
if(b===r)return q;++r}throw H.c(P.F(b,this,p,null,r))},
$ii:1,
$if:1}
P.cv.prototype={}
P.d3.prototype={}
P.d5.prototype={}
P.fU.prototype={}
P.ix.prototype={}
P.iy.prototype={
fP:function(a){var s,r,q,p=null,o=P.jB(0,p,a.length)
if(o==null)throw H.c(new P.bA(p,p,!1,p,p,"Invalid range"))
s=o-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.j1(r)
if(q.ec(a,0,o)!==o){C.b.bL(a,o-1)
q.bH()}return new Uint8Array(r.subarray(0,H.mT(0,q.b,r.length)))}}
P.j1.prototype={
bH:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
fG:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.bH()
return!1}},
ec:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.b.bL(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.b.cq(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fG(p,C.b.cq(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bH()}else if(p<=2047){o=l.b
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
P.be.prototype={}
P.a7.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.a7&&this.a===b.a&&!0},
aM:function(a,b){return C.c.aM(this.a,b.a)},
gR:function(a){var s=this.a
return(s^C.c.be(s,30))&1073741823},
i:function(a){var s=this,r=P.lO(H.m8(s)),q=P.d7(H.m6(s)),p=P.d7(H.m2(s)),o=P.d7(H.m3(s)),n=P.d7(H.m5(s)),m=P.d7(H.m7(s)),l=P.lP(H.m4(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.V.prototype={}
P.aV.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aV&&this.a===b.a},
gR:function(a){return C.c.gR(this.a)},
aM:function(a,b){return C.c.aM(this.a,b.a)},
i:function(a){var s,r,q,p=new P.fS(),o=this.a
if(o<0)return"-"+new P.aV(0-o).i(0)
s=p.$1(C.c.a2(o,6e7)%60)
r=p.$1(C.c.a2(o,1e6)%60)
q=new P.fR().$1(o%1e6)
return""+C.c.a2(o,36e8)+":"+H.e(s)+":"+H.e(r)+"."+H.e(q)}}
P.fR.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fS.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.E.prototype={}
P.d_.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.fX(s)
return"Assertion failed"}}
P.dz.prototype={
i:function(a){return"Throw of null."}}
P.a5.prototype={
gbu:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbt:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbu()+o+m
if(!q.a)return l
s=q.gbt()
r=P.fX(q.b)
return l+s+": "+r}}
P.bA.prototype={
gbu:function(){return"RangeError"},
gbt:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.e(q):""
else if(q==null)s=": Not greater than or equal to "+H.e(r)
else if(q>r)s=": Not in inclusive range "+H.e(r)+".."+H.e(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.e(r)
return s}}
P.de.prototype={
gbu:function(){return"RangeError"},
gbt:function(){var s,r=this.b
if(typeof r!=="number")return r.ak()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.e(s)},
gj:function(a){return this.f}}
P.ek.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.eh.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.dU.prototype={
i:function(a){return"Bad state: "+this.a}}
P.d4.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fX(s)+"."}}
P.dC.prototype={
i:function(a){return"Out of Memory"},
$iE:1}
P.ck.prototype={
i:function(a){return"Stack Overflow"},
$iE:1}
P.d6.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.eC.prototype={
i:function(a){return"Exception: "+this.a}}
P.h3.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.b.cf(q,0,75)+"..."
return r+"\n"+q}}
P.o.prototype={}
P.f.prototype={
gj:function(a){var s,r=this.gM(this)
for(s=0;r.w();)++s
return s},
F:function(a,b){var s,r,q
P.ku(b,"index")
for(s=this.gM(this),r=0;s.w();){q=s.gH(s)
if(b===r)return q;++r}throw H.c(P.F(b,this,"index",null,r))},
i:function(a){return P.lR(this,"(",")")}}
P.df.prototype={}
P.ar.prototype={$ii:1,$if:1}
P.dl.prototype={}
P.a9.prototype={
gR:function(a){return P.G.prototype.gR.call(C.h,this)},
i:function(a){return"null"}}
P.N.prototype={}
P.G.prototype={constructor:P.G,$iG:1,
n:function(a,b){return this===b},
gR:function(a){return H.ch(this)},
i:function(a){return"Instance of '"+H.e(H.dH(this))+"'"},
toString:function(){return this.i(this)}}
P.K.prototype={}
P.ba.prototype={
gj:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.k.prototype={}
W.fr.prototype={
gj:function(a){return a.length}}
W.cY.prototype={
i:function(a){return String(a)}}
W.cZ.prototype={
i:function(a){return String(a)}}
W.d1.prototype={}
W.aU.prototype={
cb:function(a,b,c){if(c!=null)return a.getContext(b,P.nL(c))
return a.getContext(b)},
dD:function(a,b){return this.cb(a,b,null)},
$iaU:1}
W.ae.prototype={
gj:function(a){return a.length}}
W.fH.prototype={
gj:function(a){return a.length}}
W.D.prototype={$iD:1}
W.bV.prototype={
gj:function(a){return a.length}}
W.fI.prototype={}
W.a6.prototype={}
W.an.prototype={}
W.fJ.prototype={
gj:function(a){return a.length}}
W.fK.prototype={
gj:function(a){return a.length}}
W.fL.prototype={
gj:function(a){return a.length}}
W.fP.prototype={
i:function(a){return String(a)}}
W.bW.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.bX.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gai(a))+" x "+H.e(this.gad(a))},
n:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.bg(b)
s=a.left==s.gbm(b)&&a.top==s.gbo(b)&&this.gai(a)==s.gai(b)&&this.gad(a)==s.gad(b)}else s=!1
return s},
gR:function(a){return W.kQ(J.W(a.left),J.W(a.top),J.W(this.gai(a)),J.W(this.gad(a)))},
gcU:function(a){return a.bottom},
gad:function(a){return a.height},
gbm:function(a){return a.left},
gca:function(a){return a.right},
gbo:function(a){return a.top},
gai:function(a){return a.width},
$iaa:1}
W.d8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.fQ.prototype={
gj:function(a){return a.length}}
W.es.prototype={
gdh:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
k:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b])},
l:function(a,b){this.a.appendChild(b)
return b},
gM:function(a){var s=this.hw(this)
return new J.T(s,s.length)}}
W.I.prototype={
gcX:function(a){return new W.es(a,a.children)},
gcY:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.ak()
if(q<0)q=-q*0
if(typeof p!=="number")return p.ak()
if(p<0)p=-p*0
return new P.aa(s,r,q,p,t.I)},
i:function(a){return a.localName},
$iI:1}
W.h.prototype={$ih:1}
W.b.prototype={
fH:function(a,b,c,d){if(c!=null)this.e0(a,b,c,!1)},
e0:function(a,b,c,d){return a.addEventListener(b,H.bM(c,1),!1)},
$ib:1}
W.aX.prototype={$iaX:1}
W.d9.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.da.prototype={
gj:function(a){return a.length}}
W.dc.prototype={
gj:function(a){return a.length}}
W.aY.prototype={$iaY:1}
W.h5.prototype={
gj:function(a){return a.length}}
W.aZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.b_.prototype={
gd0:function(a){return a.data},
$ib_:1}
W.br.prototype={$ibr:1}
W.b2.prototype={$ib2:1}
W.he.prototype={
i:function(a){return String(a)}}
W.hx.prototype={
gj:function(a){return a.length}}
W.hy.prototype={
h:function(a,b){return P.aS(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aS(s.value[1]))}},
gaz:function(a){var s=[]
this.I(a,new W.hz(s))
return s},
gj:function(a){return a.size}}
W.hz.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hA.prototype={
h:function(a,b){return P.aS(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aS(s.value[1]))}},
gaz:function(a){var s=[]
this.I(a,new W.hB(s))
return s},
gj:function(a){return a.size}}
W.hB.prototype={
$2:function(a,b){return this.a.push(a)}}
W.b5.prototype={$ib5:1}
W.dq.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.a1.prototype={$ia1:1}
W.er.prototype={
k:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b])},
gM:function(a){var s=this.a.childNodes
return new W.c1(s,s.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.v.prototype={
ho:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.lz(s,b,a)}catch(q){H.fq(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.dL(a):s},
fn:function(a,b,c){return a.replaceChild(b,c)},
$iv:1}
W.cg.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.b7.prototype={
gj:function(a){return a.length},
$ib7:1}
W.dF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.hP.prototype={
h:function(a,b){return P.aS(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aS(s.value[1]))}},
gaz:function(a){var s=[]
this.I(a,new W.hQ(s))
return s},
gj:function(a){return a.size}}
W.hQ.prototype={
$2:function(a,b){return this.a.push(a)}}
W.dM.prototype={
gj:function(a){return a.length}}
W.aK.prototype={$iaK:1}
W.dQ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.b8.prototype={$ib8:1}
W.dR.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.b9.prototype={
gj:function(a){return a.length},
$ib9:1}
W.i2.prototype={
h:function(a,b){return a.getItem(H.mR(b))},
I:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gaz:function(a){var s=[]
this.I(a,new W.i3(s))
return s},
gj:function(a){return a.length}}
W.i3.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aL.prototype={$iaL:1}
W.aM.prototype={$iaM:1}
W.ah.prototype={$iah:1}
W.dY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.dZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.ig.prototype={
gj:function(a){return a.length}}
W.bb.prototype={$ibb:1}
W.bc.prototype={$ibc:1}
W.e3.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.ij.prototype={
gj:function(a){return a.length}}
W.ax.prototype={}
W.iw.prototype={
i:function(a){return String(a)}}
W.em.prototype={
gj:function(a){return a.length}}
W.aN.prototype={
gfT:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.u("deltaY is not supported"))},
gfS:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.u("deltaX is not supported"))},
$iaN:1}
W.bF.prototype={
fo:function(a,b){return a.requestAnimationFrame(H.bM(b,1))},
eb:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.et.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.cs.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
n:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.bg(b)
s=a.left==s.gbm(b)&&a.top==s.gbo(b)&&a.width==s.gai(b)&&a.height==s.gad(b)}else s=!1
return s},
gR:function(a){return W.kQ(J.W(a.left),J.W(a.top),J.W(a.width),J.W(a.height))},
gad:function(a){return a.height},
gai:function(a){return a.width}}
W.eG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.cw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.eZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.f5.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.js.prototype={}
W.eB.prototype={}
W.iT.prototype={
$1:function(a){return this.a.$1(a)}}
W.jI.prototype={}
W.C.prototype={
gM:function(a){return new W.c1(a,this.gj(a))}}
W.c1.prototype={
w:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.cW(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gH:function(a){return this.d}}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eW.prototype={}
W.cC.prototype={}
W.cD.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.f2.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.cF.prototype={}
W.cG.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
P.cJ.prototype={$ib_:1,
gd0:function(a){return this.a}}
P.j8.prototype={
$2:function(a,b){this.a[a]=b},
$S:18}
P.db.prototype={
gbd:function(){return new H.b3(new H.cr(this.b,new P.h1()),new P.h2())},
k:function(a,b,c){var s=this.gbd()
J.lE(s.b.$1(J.jk(s.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.bj(this.gbd().a)},
h:function(a,b){var s=this.gbd()
return s.b.$1(J.jk(s.a,b))},
gM:function(a){var s=P.jz(this.gbd(),!1)
return new J.T(s,s.length)}}
P.h1.prototype={
$1:function(a){return t.h.b(a)}}
P.h2.prototype={
$1:function(a){return t.h.a(a)}}
P.eV.prototype={
gca:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.q(r)
return this.$ti.c.a(s+r)},
gcU:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.q(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.e(s.a)+", "+H.e(s.b)+") "+H.e(s.c)+" x "+H.e(s.d)},
n:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.I.b(b)){s=n.a
r=J.bg(b)
if(s==r.gbm(b)){q=n.b
if(q==r.gbo(b)){p=n.c
if(typeof s!=="number")return s.v()
if(typeof p!=="number")return H.q(p)
o=n.$ti.c
if(o.a(s+p)===r.gca(b)){s=n.d
if(typeof q!=="number")return q.v()
if(typeof s!=="number")return H.q(s)
r=o.a(q+s)===r.gcU(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gR:function(a){var s,r=this,q=r.a,p=J.W(q),o=r.b,n=J.W(o),m=r.c
if(typeof q!=="number")return q.v()
if(typeof m!=="number")return H.q(m)
s=r.$ti.c
m=C.c.gR(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.v()
if(typeof q!=="number")return H.q(q)
q=C.c.gR(s.a(o+q))
return P.mv(P.iV(P.iV(P.iV(P.iV(0,p),n),m),q))}}
P.aa.prototype={
gbm:function(a){return this.a},
gbo:function(a){return this.b},
gai:function(a){return this.c},
gad:function(a){return this.d}}
P.bs.prototype={$ibs:1}
P.dj.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.bx.prototype={$ibx:1}
P.dA.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.hJ.prototype={
gj:function(a){return a.length}}
P.dX.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.j.prototype={
gcX:function(a){return new P.db(a,new W.er(a))}}
P.bC.prototype={$ibC:1}
P.e4.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.eJ.prototype={}
P.eK.prototype={}
P.eR.prototype={}
P.eS.prototype={}
P.f3.prototype={}
P.f4.prototype={}
P.fa.prototype={}
P.fb.prototype={}
P.fw.prototype={
gj:function(a){return a.length}}
P.fx.prototype={
h:function(a,b){return P.aS(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aS(s.value[1]))}},
gaz:function(a){var s=[]
this.I(a,new P.fy(s))
return s},
gj:function(a){return a.size}}
P.fy.prototype={
$2:function(a,b){return this.a.push(a)}}
P.d0.prototype={
gj:function(a){return a.length}}
P.aB.prototype={}
P.dB.prototype={
gj:function(a){return a.length}}
P.eq.prototype={}
P.dK.prototype={
dw:function(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&H.bJ(g)){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}if(t.s.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,P.nM(g))
return}if(t.k.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.jl("Incorrect number or type of arguments"))},
ht:function(a,b,c,d,e,f,g){return this.dw(a,b,c,d,e,f,g,null,null,null)}}
P.dS.prototype={
gj:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
s=P.aS(a.item(b))
s.toString
return s},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.f_.prototype={}
P.f0.prototype={}
K.fs.prototype={
aN:function(a,b){return!0},
i:function(a){return"all"}}
K.dd.prototype={
aN:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)if(s[q].aN(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.m)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.aG.prototype={
aN:function(a,b){return!this.dK(0,b)},
i:function(a){return"!["+this.cg(0)+"]"}}
K.hR.prototype={
dQ:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.l("May not create a Set with zero characters."))
s=new H.t(t.E)
for(r=new H.bt(a,a.gj(a));r.w();){q=r.d
s.k(0,q,!0)}p=P.jz(new H.aE(s),!0)
C.a.dJ(p)
this.a=p},
aN:function(a,b){return C.a.L(this.a,b)},
i:function(a){return P.jD(this.a)}}
L.dT.prototype={
p:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.ik(this.a.K(0,b))
p.a=[]
p.c=!1
this.c.push(p)
return p},
fZ:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
if(p.aN(0,a))return p}return null},
i:function(a){return this.b},
cM:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.L(0,l))m+=" (consume)"
for(l=new H.aE(n.d.c),l=l.gM(l);l.w();){r=l.d
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.e(r)+" => ["+H.e(q)+"]")
m=s.c.L(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.m)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.e1.prototype={
i:function(a){var s=H.lf(this.b,"\n","\\n"),r=H.lf(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.e2.prototype={
i:function(a){return this.b}}
L.ih.prototype={
K:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.dT(this,b)
s.c=[]
this.a.k(0,b,s)}return s},
b7:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.e2(a)
s.c=new H.t(t.i)
this.b.k(0,a,s)}return s},
dA:function(a){return this.hx(a)},
hx:function(a){var s=this
return P.n8(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$dA(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a0.length!==0)j=C.a.c7(a0,0)
else{if(!r.w()){q=3
break}i=r.d
j=i}b.push(j);++m
h=d.fZ(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.jD(b)
throw H.c(P.l("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!b.fixed$length)H.n(P.u("removeRange"))
P.jB(0,k,b.length)
b.splice(0,k-0)
C.a.bg(a0,b)
b=[]
c=[]
d=s.d
q=!s.c.L(0,n.a)?7:8
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
if(d.d!=null){g=P.jD(c)
f=d.d
e=f.c.h(0,g)
n=new L.e1(e==null?f.b:e,g,m)
k=b.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.L(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.mt()
case 1:return P.mu(o)}}},t.j)},
i:function(a){var s,r=new P.ba(""),q=this.d
if(q!=null)r.a=q.cM()+"\n"
for(q=this.a,q=q.ghy(q),q=new H.ca(J.bi(q.a),q.b);q.w();){s=q.a
if(s!=this.d)r.a+=s.cM()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.ik.prototype={
i:function(a){return this.b.b+": "+this.cg(0)}}
O.bm.prototype={
ba:function(){this.a=[]
this.c=this.b=null},
cc:function(a,b,c){this.b=b
this.c=a},
aE:function(a,b){return this.cc(a,null,b)},
cC:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
cz:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gj:function(a){return this.a.length},
gM:function(a){var s=this.a
return new J.T(s,s.length)},
F:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
l:function(a,b){var s,r
if(this.cC([b])){s=this.a
r=s.length
s.push(b)
this.cz(r,[b])}},
bg:function(a,b){var s,r
if(this.cC(b)){s=this.a
r=s.length
C.a.bg(s,b)
this.cz(r,b)}},
$if:1}
O.cc.prototype={
gj:function(a){return this.a.length},
gm:function(){var s=this.b
return s==null?this.b=D.z():s},
aF:function(){var s=this.b
if(s!=null)s.A(null)},
gZ:function(a){var s=this.a
if(s.length>0)return C.a.gbZ(s)
else return V.au()},
bn:function(a){var s=this.a
if(a==null)s.push(V.au())
else s.push(a)
this.aF()},
aB:function(){var s=this.a
if(s.length>0){s.pop()
this.aF()}}}
E.fB.prototype={}
E.bp.prototype={
sb9:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gm().C(0,q.gdt())
s=q.c
if(s!=null)s.gm().l(0,q.gdt())
r=new D.p("shape",p,q.c)
r.b=!0
q.aA(r)}},
sb3:function(a){var s,r,q=this
if(!J.x(q.r,a)){s=q.r
if(s!=null)s.gm().C(0,q.gdr())
if(a!=null)a.gm().l(0,q.gdr())
q.r=a
r=new D.p("mover",s,a)
r.b=!0
q.aA(r)}},
a6:function(a,b){var s,r,q=this,p=q.r,o=p!=null?p.aO(0,b,q):null
if(!J.x(o,q.x)){s=q.x
q.x=o
r=new D.p("matrix",s,o)
r.b=!0
q.aA(r)}for(p=q.y.a,p=new J.T(p,p.length);p.w();)p.d.a6(0,b)},
a4:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.gZ(q))
else o.push(p.t(0,q.gZ(q)))
q.aF()
a.c6(r.f)
q=a.dy
s=(q&&C.a).gbZ(q)
if(s!=null&&r.d!=null)s.b6(a,r)
for(q=r.y.a,q=new J.T(q,q.length);q.w();)q.d.a4(a)
a.c4()
a.dx.aB()},
aA:function(a){var s=this.z
if(s!=null)s.A(a)},
a0:function(){return this.aA(null)},
du:function(a){this.e=null
this.aA(a)},
hc:function(){return this.du(null)},
ds:function(a){this.aA(a)},
hb:function(){return this.ds(null)},
dq:function(a){this.aA(a)},
h8:function(){return this.dq(null)},
h7:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gdn(),q=0;q<b.length;b.length===s||(0,H.m)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.aW()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}this.a0()},
ha:function(a,b){var s,r
for(s=b.gM(b),r=this.gdn();s.w();)s.gH(s).gm().C(0,r)
this.a0()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bk.prototype={
i:function(a){return this.b}}
E.by.prototype={
i:function(a){return this.b}}
E.ez.prototype={}
E.hL.prototype={
dP:function(a,b){var s,r=this
r.d=r.c=512
r.e=0
r.x=r.r=r.f=new P.a7(Date.now(),!1)
r.y=0
r.cx=r.ch=r.Q=r.z=null
s=new O.cc()
s.a=[]
s.gm().l(0,new E.hM(r))
r.cy=s
s=new O.cc()
s.a=[]
s.gm().l(0,new E.hN(r))
r.db=s
s=new O.cc()
s.a=[]
s.gm().l(0,new E.hO(r))
r.dx=s
s=[]
r.dy=s
s.push(null)
r.fr=new H.t(t.G)},
ghl:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.gZ(q)
s=r.db
s=r.z=q.t(0,s.gZ(s))
q=s}return q},
gc5:function(){var s,r=this,q=r.ch
if(q==null){q=r.ghl()
s=r.dx
s=r.ch=q.t(0,s.gZ(s))
q=s}return q},
gdB:function(){var s,r=this,q=r.cx
if(q==null){q=r.db
q=q.gZ(q)
s=r.dx
s=r.cx=q.t(0,s.gZ(s))
q=s}return q},
c6:function(a){var s=this.dy
s.push(a==null?(s&&C.a).gbZ(s):a)},
c4:function(){var s=this.dy
if(s.length>1)s.pop()},
aW:function(a){var s=a.b
if(s.length===0)throw H.c(P.l("May not cache a shader with no name."))
if(this.fr.fO(0,s))throw H.c(P.l('Shader cache already contains a shader by the name "'+s+'".'))
this.fr.k(0,s,a)}}
E.hM.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.hN.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.hO.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.e0.prototype={
cm:function(a){this.dv()},
cl:function(){return this.cm(null)},
gh0:function(){var s,r=this,q=Date.now(),p=C.c.a2(P.k9(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.a7(q,!1)
return s/p},
cE:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.t()
if(typeof p!=="number")return H.q(p)
s=C.d.bW(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.t()
r=C.d.bW(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.kB(C.k,q.ghp())}},
dv:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.w.eb(s)
r=W.l3(new E.ie(this),t.H)
r.toString
C.w.fo(s,r)}},
hn:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cE()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.a7(p,!1)
q.y=P.k9(p-q.r.a).a*0.000001
p=q.cy
C.a.sj(p.a,0)
p.aF()
p=q.db
C.a.sj(p.a,0)
p.aF()
p=q.dx
C.a.sj(p.a,0)
p.aF()
p=q.dy
p.toString
C.a.sj(p,0)
q.dy.push(null)
m.a4(n.e)}}catch(o){s=H.fq(o)
r=H.jU(o)
P.jY("Error: "+H.e(s))
P.jY("Stack: "+H.e(r))
throw H.c(s)}}}
E.ie.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hn()}}}
Z.en.prototype={}
Z.fC.prototype={
G:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.fq(q)
r=P.l('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.e(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.e(s.e)+"]"}}
Z.bd.prototype={}
Z.aC.prototype={
a3:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
G:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].G(a)},
a1:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
a4:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.d(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)o.push(s[q].i(0))
p=[]
for(s=this.c,r=s.length,q=0;q<r;++q)p.push(J.a0(s[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.p(o,", ")+"\nAttrs:   "+C.a.p(p,", ")}}
Z.c2.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.dH(this.c))+"'")+"]"}}
Z.a3.prototype={
gce:function(a){var s=this.a,r=(s&$.R().a)!==0?3:0
if((s&$.ak().a)!==0)r+=3
if((s&$.aj().a)!==0)r+=3
if((s&$.aA().a)!==0)r+=2
if((s&$.al().a)!==0)r+=3
if((s&$.cU().a)!==0)r+=3
if((s&$.cV().a)!==0)r+=4
if((s&$.bP().a)!==0)++r
return(s&$.aT().a)!==0?r+4:r},
fK:function(a){var s,r=$.R(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.ak()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aj()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aA()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.al()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cU()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cV()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bP()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aT()
if((q&r.a)!==0)if(s===a)return r
return $.lx()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.a3))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.R().a)!==0)s.push("Pos")
if((r&$.ak().a)!==0)s.push("Norm")
if((r&$.aj().a)!==0)s.push("Binm")
if((r&$.aA().a)!==0)s.push("Txt2D")
if((r&$.al().a)!==0)s.push("TxtCube")
if((r&$.cU().a)!==0)s.push("Clr3")
if((r&$.cV().a)!==0)s.push("Clr4")
if((r&$.bP().a)!==0)s.push("Weight")
if((r&$.aT().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.p(s,"|")}}
D.fD.prototype={}
D.aW.prototype={
l:function(a,b){var s=this.a;(s==null?this.a=[]:s).push(b)},
C:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.a.L(q,b)
if(q===!0){q=r.a
s=(q&&C.a).C(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.a.L(q,b)
if(q===!0){q=r.b
s=(q&&C.a).C(q,b)||s}return s},
A:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.P()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.a.I(P.jz(s,!0),new D.fY(o))
s=p.b
if(s!=null){p.b=[]
C.a.I(s,new D.fZ(o))}return!0},
bN:function(){return this.A(null)},
aq:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.A(s)}}}}
D.fY.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.fZ.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.P.prototype={}
D.ao.prototype={}
D.ap.prototype={}
D.p.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.d2.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d2))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.di.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.di))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.ha.prototype={
hh:function(a){this.c=a.b
this.d.l(0,a.a)
return!1},
hd:function(a){this.c=a.b
this.d.C(0,a.a)
return!1}}
X.c9.prototype={}
X.hf.prototype={
aU:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.t()
s=b.b
r=o.ch
if(typeof s!=="number")return s.t()
q=new V.a2(m.a+l*k,m.b+s*r)
r=o.a.gaK()
p=new X.bu(a,V.aH(),o.x,r,q)
p.b=!0
o.z=new P.a7(n,!1)
o.x=q
return p},
c3:function(a,b){this.r=a.a
return!1},
b5:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.dF()
if(typeof s!=="number")return s.aj()
this.r=(s&~r)>>>0
return!1},
b4:function(a,b){var s=this.d
if(s==null)return!1
s.A(this.aU(a,b))
return!0},
hi:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaK()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.t()
o=a.b
n=m.cy
if(typeof o!=="number")return o.t()
r=new X.bv(new V.Z(q*p,o*n),s,r)
r.b=!0
l.A(r)
return!0},
eU:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.c9(c,p.a.gaK(),b)
q.b=!0
r.A(q)
p.y=new P.a7(s,!1)
p.x=V.aH()}}
X.ag.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.ag))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bu.prototype={}
X.hC.prototype={
bw:function(a,b,c){var s=this,r=new P.a7(Date.now(),!1),q=s.a.gaK(),p=new X.bu(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
c3:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.A(this.bw(a,b,!0))
return!0},
b5:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.dF()
if(typeof r!=="number")return r.aj()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.A(s.bw(a,b,!0))
return!0},
b4:function(a,b){var s=this.d
if(s==null)return!1
s.A(this.bw(a,b,!1))
return!0},
hj:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaK()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.t()
p=a.b
o=n.ch
if(typeof p!=="number")return p.t()
s=new X.bv(new V.Z(r*q,p*o),s,b)
s.b=!0
m.A(s)
return!0}}
X.bv.prototype={}
X.dG.prototype={}
X.cm.prototype={}
X.ii.prototype={
aU:function(a,b){var s=this,r=new P.a7(Date.now(),!1),q=a.length>0?a[0]:V.aH(),p=s.a.gaK(),o=new X.cm(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
hg:function(a){var s=this.b
if(s==null)return!1
s.A(this.aU(a,!0))
return!0},
he:function(a){var s=this.c
if(s==null)return!1
s.A(this.aU(a,!0))
return!0},
hf:function(a){var s=this.d
if(s==null)return!1
s.A(this.aU(a,!1))
return!0}}
X.el.prototype={
gaK:function(){var s=this.a,r=C.f.gcY(s).c
r.toString
s=C.f.gcY(s).d
s.toString
return V.ci(0,0,r,s)},
ct:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.di(s,new X.ag(r,a.altKey,a.shiftKey))},
aI:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.ag(r,a.altKey,a.shiftKey)},
bE:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.ag(r,a.altKey,a.shiftKey)},
aw:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.a5()
if(typeof o!=="number")return H.q(o)
s=r.top
if(typeof p!=="number")return p.a5()
if(typeof s!=="number")return H.q(s)
return new V.a2(q-o,p-s)},
aV:function(a){return new V.Z(a.movementX,a.movementY)},
bA:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=[]
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
o=C.d.W(p.pageX)
C.d.W(p.pageY)
n=k.left
if(typeof n!=="number")return H.q(n)
C.d.W(p.pageX)
m=C.d.W(p.pageY)
l=k.top
if(typeof l!=="number")return H.q(l)
j.push(new V.a2(o-n,m-l))}return j},
at:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.d2(s,new X.ag(r,a.altKey,a.shiftKey))},
bx:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.a5()
if(typeof n!=="number")return H.q(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.a5()
if(typeof p!=="number")return H.q(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.q(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.q(p)
p=r<p}else p=!1
return p},
eO:function(a){this.f=!0},
ey:function(a){this.f=!1},
eE:function(a){if(this.f&&this.bx(a))a.preventDefault()},
eS:function(a){var s
if(!this.f)return
s=this.ct(a)
this.b.hh(s)},
eQ:function(a){var s
if(!this.f)return
s=this.ct(a)
this.b.hd(s)},
eW:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aI(a)
if(p.x){s=p.at(a)
r=p.aV(a)
if(p.d.c3(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.at(a)
q=p.aw(a)
if(p.c.c3(s,q))a.preventDefault()},
f_:function(a){var s,r,q,p=this
p.aI(a)
s=p.at(a)
if(p.x){r=p.aV(a)
if(p.d.b5(s,r))a.preventDefault()
return}if(p.r)return
q=p.aw(a)
if(p.c.b5(s,q))a.preventDefault()},
eI:function(a){var s,r,q,p=this
if(!p.bx(a)){p.aI(a)
s=p.at(a)
if(p.x){r=p.aV(a)
if(p.d.b5(s,r))a.preventDefault()
return}if(p.r)return
q=p.aw(a)
if(p.c.b5(s,q))a.preventDefault()}},
eY:function(a){var s,r,q,p=this
p.aI(a)
s=p.at(a)
if(p.x){r=p.aV(a)
if(p.d.b4(s,r))a.preventDefault()
return}if(p.r)return
q=p.aw(a)
if(p.c.b4(s,q))a.preventDefault()},
eG:function(a){var s,r,q,p=this
if(!p.bx(a)){p.aI(a)
s=p.at(a)
if(p.x){r=p.aV(a)
if(p.d.b4(s,r))a.preventDefault()
return}if(p.r)return
q=p.aw(a)
if(p.c.b4(s,q))a.preventDefault()}},
f1:function(a){var s,r,q=this
q.aI(a)
s=new V.Z((a&&C.v).gfS(a),C.v.gfT(a)).t(0,q.Q)
if(q.x){if(q.d.hi(s))a.preventDefault()
return}if(q.r)return
r=q.aw(a)
if(q.c.hj(s,r))a.preventDefault()},
f3:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.at(q.y)
r=q.aw(q.y)
q.d.eU(s,r,p)}},
fj:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bE(a)
s=r.bA(a)
if(r.e.hg(s))a.preventDefault()},
ff:function(a){var s
this.bE(a)
s=this.bA(a)
if(this.e.he(s))a.preventDefault()},
fh:function(a){var s
this.bE(a)
s=this.bA(a)
if(this.e.hf(s))a.preventDefault()}}
D.bo.prototype={
as:function(a){var s=this.r
if(s!=null)s.A(a)},
dU:function(){return this.as(null)},
$iaq:1}
D.aq.prototype={}
D.c7.prototype={
as:function(a){var s=this.y
if(s!=null)s.A(a)},
cB:function(a){var s=this.z
if(s!=null)s.A(a)},
eT:function(){return this.cB(null)},
f5:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.m)(a),++r){q=a[r]
if(q==null||this.e6(q))return!1}return!0},
er:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gcA(),q=0;q<b.length;b.length===s||(0,H.m)(b),++q){p=b[q]
if(p instanceof D.bo)this.f.push(p)
o=p.r
if(o==null){o=new D.aW()
o.d=0
p.r=o}n=o.a;(n==null?o.a=[]:n).push(r)}s=new D.ao()
s.b=!0
this.as(s)},
f9:function(a,b){var s,r,q
for(s=b.gM(b),r=this.gcA();s.w();){q=s.gH(s)
C.a.C(this.e,q)
q.gm().C(0,r)}s=new D.ap()
s.b=!0
this.as(s)},
e6:function(a){var s=C.a.L(this.f,a)
return s}}
V.M.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.M))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.X.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.X))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.B(s.a,3,0)+", "+V.B(s.b,3,0)+", "+V.B(s.c,3,0)+", "+V.B(s.d,3,0)+"]"}}
V.fW.prototype={}
V.cb.prototype={
P:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cb))return!1
s=b.a
$.y().toString
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
i:function(a){var s,r,q,p,o=this,n=V.bO([o.a,o.d,o.r],3,0),m=V.bO([o.b,o.e,o.x],3,0),l=V.bO([o.c,o.f,o.y],3,0),k=n.length
if(0>=k)return H.d(n,0)
s="["+n[0]+", "
r=m.length
if(0>=r)return H.d(m,0)
s=s+m[0]+", "
q=l.length
if(0>=q)return H.d(l,0)
s=s+l[0]+",\n"
if(1>=k)return H.d(n,1)
p=" "+n[1]+", "
if(1>=r)return H.d(m,1)
p=p+m[1]+", "
if(1>=q)return H.d(l,1)
p=s+(p+l[1]+",\n")
if(2>=k)return H.d(n,2)
k=" "+n[2]+", "
if(2>=r)return H.d(m,2)
k=k+m[2]+", "
if(2>=q)return H.d(l,2)
return p+(k+l[2]+"]")}}
V.b4.prototype={
P:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
bY:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.y().toString
if(Math.abs(b3-0)<1e-9)return V.au()
s=1/b3
r=-l
q=-a2
return V.aF((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
t:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aF(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bp:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.w(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
b8:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.J(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.b4))return!1
s=b.a
$.y().toString
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
i:function(a){return this.J()},
B:function(a){var s,r,q,p,o,n=this,m=V.bO([n.a,n.e,n.y,n.cx],3,0),l=V.bO([n.b,n.f,n.z,n.cy],3,0),k=V.bO([n.c,n.r,n.Q,n.db],3,0),j=V.bO([n.d,n.x,n.ch,n.dx],3,0),i=m.length
if(0>=i)return H.d(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.d(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.d(k,0)
s=s+k[0]+", "
p=j.length
if(0>=p)return H.d(j,0)
s=s+j[0]+",\n"
o=a+" "
if(1>=i)return H.d(m,1)
o=o+m[1]+", "
if(1>=r)return H.d(l,1)
o=o+l[1]+", "
if(1>=q)return H.d(k,1)
o=o+k[1]+", "
if(1>=p)return H.d(j,1)
o=s+(o+j[1]+",\n")
s=a+" "
if(2>=i)return H.d(m,2)
s=s+m[2]+", "
if(2>=r)return H.d(l,2)
s=s+l[2]+", "
if(2>=q)return H.d(k,2)
s=s+k[2]+", "
if(2>=p)return H.d(j,2)
s=o+(s+j[2]+",\n")
o=a+" "
if(3>=i)return H.d(m,3)
o=o+m[3]+", "
if(3>=r)return H.d(l,3)
o=o+l[3]+", "
if(3>=q)return H.d(k,3)
o=o+k[3]+", "
if(3>=p)return H.d(j,3)
return s+(o+j[3]+"]")},
J:function(){return this.B("")}}
V.a2.prototype={
ah:function(a){return new V.Z(a.a-this.a,a.b-this.b)},
n:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.J.prototype={
v:function(a,b){return new V.J(this.a+b.a,this.b+b.b,this.c+b.c)},
a5:function(a,b){return new V.J(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){return new V.J(this.a*b,this.b*b,this.c*b)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.J))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.aI.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aI))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.B(s.a,3,0)+", "+V.B(s.b,3,0)+", "+V.B(s.c,3,0)+", "+V.B(s.d,3,0)+"]"}}
V.dJ.prototype={
gap:function(){var s=this.c,r=this.d
return s>r?r:s},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dJ))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.B(s.a,3,0)+", "+V.B(s.b,3,0)+", "+V.B(s.c,3,0)+", "+V.B(s.d,3,0)+"]"}}
V.Z.prototype={
c_:function(a){return Math.sqrt(this.ab(this))},
ab:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.t()
if(typeof p!=="number")return H.q(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.q(r)
return q*p+s*r},
t:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.t()
if(typeof b!=="number")return H.q(b)
s=this.b
if(typeof s!=="number")return s.t()
return new V.Z(r*b,s*b)},
a7:function(a,b){var s,r
$.y().toString
if(Math.abs(b-0)<1e-9){s=$.kH
return s==null?$.kH=new V.Z(0,0):s}s=this.a
if(typeof s!=="number")return s.a7()
r=this.b
if(typeof r!=="number")return r.a7()
return new V.Z(s/b,r/b)},
n:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
s=b.a
r=this.a
$.y().toString
if(typeof s!=="number")return s.a5()
if(typeof r!=="number")return H.q(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.a5()
if(typeof r!=="number")return H.q(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.w.prototype={
c_:function(a){return Math.sqrt(this.ab(this))},
ab:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c0:function(a,b){return new V.w(V.jW(this.a,a.a,b),V.jW(this.b,a.b,b),V.jW(this.c,a.c,b))},
E:function(){var s=this,r=Math.sqrt(s.ab(s))
if(r===1)return s
return s.a7(0,r)},
ax:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.w(s*r-q*p,q*o-n*r,n*p-s*o)},
v:function(a,b){return new V.w(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a){return new V.w(-this.a,-this.b,-this.c)},
t:function(a,b){return new V.w(this.a*b,this.b*b,this.c*b)},
a7:function(a,b){$.y().toString
if(Math.abs(b-0)<1e-9)return V.cq()
return new V.w(this.a/b,this.b/b,this.c/b)},
di:function(){$.y().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.w))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
U.fG.prototype={
bq:function(a){var s=V.o8(a,this.c,this.b)
return s},
gm:function(){var s=this.y
return s==null?this.y=D.z():s},
O:function(a){var s=this.y
if(s!=null)s.A(a)},
sdC:function(a,b){},
sdk:function(a){var s,r=this,q=r.b
$.y().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bq(s)}q=new D.p("maximumLocation",q,r.b)
q.b=!0
r.O(q)}},
sdm:function(a){var s,r=this,q=r.c
$.y().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bq(s)}q=new D.p("minimumLocation",q,r.c)
q.b=!0
r.O(q)}},
sa9:function(a,b){var s,r=this
b=r.bq(b)
s=r.d
$.y().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.p("location",s,b)
s.b=!0
r.O(s)}},
sdl:function(a){var s,r,q=this,p=q.e
$.y().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.p("maximumVelocity",p,a)
p.b=!0
q.O(p)}},
sX:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.y().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.p("velocity",r,a)
r.b=!0
s.O(r)}},
sd_:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.y().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.p("dampening",s,a)
s.b=!0
this.O(s)}},
a6:function(a,b){var s,r,q,p=this,o=p.f
$.y().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa9(0,p.d+s*b)
o=p.x
$.y().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sX(s)}}}
U.bT.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.z():s},
aO:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bT))return!1
return J.x(this.a,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")}}
U.bq.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.z():s},
O:function(a){var s=this.e
if(s!=null)s.A(a)},
am:function(){return this.O(null)},
dW:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gbb(),q=0;q<b.length;b.length===s||(0,H.m)(b),++q){p=b[q]
if(p!=null){o=p.gm()
n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.ao()
s.b=!0
this.O(s)},
f7:function(a,b){var s,r
for(s=b.gM(b),r=this.gbb();s.w();)s.gH(s).gm().C(0,r)
s=new D.ap()
s.b=!0
this.O(s)},
aO:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.ak()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.T(p,p.length),s=null;p.w();){o=p.d
if(o!=null){r=o.aO(0,b,c)
if(r!=null)s=s==null?r:r.t(0,s)}}q.f=s==null?V.au():s
p=q.e
if(p!=null)p.aq(0)}return q.f},
n:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bq))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.d(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.d(p,r)
if(!J.x(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iY:1}
U.Y.prototype={}
U.co.prototype={
gm:function(){var s=this.fx
return s==null?this.fx=D.z():s},
O:function(a){var s=this.fx
if(s!=null)s.A(a)},
am:function(){return this.O(null)},
bI:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
s=a.c
r=s.b
s=r==null?s.b=D.z():r
s.l(0,q.gei())
s=q.a.c
r=s.d
s=r==null?s.d=D.z():r
s.l(0,q.gek())
s=q.a.c
r=s.c
s=r==null?s.c=D.z():r
s.l(0,q.gem())
s=q.a.d
r=s.f
s=r==null?s.f=D.z():r
s.l(0,q.gee())
s=q.a.d
r=s.d
s=r==null?s.d=D.z():r
s.l(0,q.geg())
s=q.a.e
r=s.b
s=r==null?s.b=D.z():r
s.l(0,q.gfE())
s=q.a.e
r=s.d
s=r==null?s.d=D.z():r
s.l(0,q.gfC())
s=q.a.e
r=s.c
s=r==null?s.c=D.z():r
s.l(0,q.gfA())
return!0},
an:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.N()
s=-s}if(this.r){if(typeof r!=="number")return r.N()
r=-r}return new V.Z(s,r)},
ej:function(a){var s=this
t.d.a(a)
if(!J.x(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
el:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!l.cx)return
if(l.ch){s=a.y.ah(a.d)
s=s.ab(s)
r=l.Q
if(typeof r!=="number")return H.q(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.an(a.y.ah(a.d).t(0,2).a7(0,s.gap()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.N()
q=l.y
if(typeof q!=="number")return H.q(q)
r.sX(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.N()
r=l.x
if(typeof r!=="number")return H.q(r)
q.sX(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.an(r.ah(q).t(0,2).a7(0,s.gap()))
r=l.c
o=p.a
if(typeof o!=="number")return o.N()
n=l.y
if(typeof n!=="number")return H.q(n)
m=l.cy
if(typeof m!=="number")return H.q(m)
r.sa9(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.N()
o=l.x
if(typeof o!=="number")return H.q(o)
r=l.db
if(typeof r!=="number")return H.q(r)
m.sa9(0,-n*o+r)
l.b.sX(0)
l.c.sX(0)
l.dx=l.an(a.z.ah(q).t(0,2).a7(0,s.gap()))}l.am()},
en:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.ab(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.N()
q=p.y
if(typeof q!=="number")return H.q(q)
s.sX(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.N()
s=p.x
if(typeof s!=="number")return H.q(s)
q.sX(-r*10*s)
p.am()}},
ef:function(a){var s=this
if(t.x.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eh:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!J.x(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.an(r.ah(q).t(0,2).a7(0,s.gap()))
r=l.c
o=p.a
if(typeof o!=="number")return o.N()
n=l.y
if(typeof n!=="number")return H.q(n)
m=l.cy
if(typeof m!=="number")return H.q(m)
r.sa9(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.N()
o=l.x
if(typeof o!=="number")return H.q(o)
r=l.db
if(typeof r!=="number")return H.q(r)
m.sa9(0,-n*o+r)
l.b.sX(0)
l.c.sX(0)
l.dx=l.an(a.z.ah(q).t(0,2).a7(0,s.gap()))
l.am()},
fF:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fD:function(a){var s,r,q,p,o,n,m,l=this
t.m.a(a)
if(!l.cx)return
if(l.ch){s=a.y.ah(a.d)
s=s.ab(s)
r=l.Q
if(typeof r!=="number")return H.q(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.an(a.y.ah(a.d).t(0,2).a7(0,s.gap()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.N()
q=l.y
if(typeof q!=="number")return H.q(q)
r.sX(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.N()
r=l.x
if(typeof r!=="number")return H.q(r)
q.sX(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.an(r.ah(q).t(0,2).a7(0,s.gap()))
r=l.c
o=p.a
if(typeof o!=="number")return o.N()
n=l.y
if(typeof n!=="number")return H.q(n)
m=l.cy
if(typeof m!=="number")return H.q(m)
r.sa9(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.N()
o=l.x
if(typeof o!=="number")return H.q(o)
r=l.db
if(typeof r!=="number")return H.q(r)
m.sa9(0,-n*o+r)
l.b.sX(0)
l.c.sX(0)
l.dx=l.an(a.z.ah(q).t(0,2).a7(0,s.gap()))}l.am()},
fB:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.ab(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.N()
q=p.y
if(typeof q!=="number")return H.q(q)
s.sX(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.N()
s=p.x
if(typeof s!=="number")return H.q(s)
q.sX(-r*10*s)
p.am()}},
aO:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(typeof o!=="number")return o.ak()
if(o<n){p.dy=n
s=b.y
p.c.a6(0,s)
p.b.a6(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
o=V.aF(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
n=p.c.d
r=Math.cos(n)
q=Math.sin(n)
p.fr=o.t(0,V.aF(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iY:1}
U.cp.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.z():s},
O:function(a){var s=this.r
if(s!=null)s.A(a)},
bI:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.z():r
r=p.geo()
s.l(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.z():q).l(0,r)
return!0},
ep:function(a){var s,r,q,p,o=this
if(!J.x(o.b,o.a.b.c))return
t.F.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.t()
p=s+r*q
if(s!==p){o.d=p
s=new D.p("zoom",s,p)
s.b=!0
o.O(s)}},
aO:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.kk(s,s,s)}return r.f},
$iY:1}
M.bR.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.z():s},
T:function(a){var s=this.r
if(s!=null)s.A(a)},
aT:function(){return this.T(null)},
fb:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gS(),q=0;q<b.length;b.length===s||(0,H.m)(b),++q){p=b[q]
if(p!=null){o=p.gm()
n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.ao()
s.b=!0
this.T(s)},
fd:function(a,b){var s,r
for(s=b.gM(b),r=this.gS();s.w();)s.gH(s).gm().C(0,r)
s=new D.ap()
s.b=!0
this.T(s)},
a4:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.T(s,s.length);s.w();){r=s.d
if(r!=null)r.a4(a)}q.f=!1},
$iac:1}
M.bU.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.z():s},
T:function(a){var s=this.r
if(s!=null)s.A(a)},
aT:function(){return this.T(null)},
saY:function(a){var s,r,q=this
if(a==null)a=new X.h6()
s=q.b
if(s!==a){if(s!=null)s.gm().C(0,q.gS())
r=q.b
q.b=a
a.gm().l(0,q.gS())
s=new D.p("camera",r,q.b)
s.b=!0
q.T(s)}},
saC:function(a,b){var s,r,q=this
if(b==null)b=X.jt(!0,null)
s=q.c
if(s!==b){if(s!=null)s.gm().C(0,q.gS())
r=q.c
q.c=b
b.gm().l(0,q.gS())
s=new D.p("target",r,q.c)
s.b=!0
q.T(s)}},
sar:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gm().C(0,r.gS())
s=r.d
r.d=a
if(a!=null)a.gm().l(0,r.gS())
q=new D.p("technique",s,r.d)
q.b=!0
r.T(q)}},
a4:function(a){var s,r=this
a.c6(r.d)
r.c.G(a)
r.b.G(a)
s=r.d
if(s!=null)s.a6(0,a)
r.e.a6(0,a)
r.e.a4(a)
r.b.a1(a)
r.c.a1(a)
a.c4()},
$iac:1}
M.bZ.prototype={
T:function(a){var s=this.y
if(s!=null)s.A(a)},
aT:function(){return this.T(null)},
eA:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gS(),q=0;q<b.length;b.length===s||(0,H.m)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.aW()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.ao()
s.b=!0
this.T(s)},
eC:function(a,b){var s,r
for(s=b.gM(b),r=this.gS();s.w();)s.gH(s).gm().C(0,r)
s=new D.ap()
s.b=!0
this.T(s)},
saY:function(a){var s,r,q=this
if(a==null)a=X.ko(null)
s=q.b
if(s!==a){if(s!=null)s.gm().C(0,q.gS())
r=q.b
q.b=a
a.gm().l(0,q.gS())
s=new D.p("camera",r,q.b)
s.b=!0
q.T(s)}},
saC:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gm().C(0,r.gS())
s=r.c
r.c=b
b.gm().l(0,r.gS())
q=new D.p("target",s,r.c)
q.b=!0
r.T(q)}},
sar:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gm().C(0,r.gS())
s=r.d
r.d=a
if(a!=null)a.gm().l(0,r.gS())
q=new D.p("technique",s,r.d)
q.b=!0
r.T(q)}},
gm:function(){var s=this.y
return s==null?this.y=D.z():s},
a4:function(a){var s,r=this
a.c6(r.d)
r.c.G(a)
r.b.G(a)
s=r.d
if(s!=null)s.a6(0,a)
for(s=r.e.a,s=new J.T(s,s.length);s.w();)s.d.a6(0,a)
for(s=r.e.a,s=new J.T(s,s.length);s.w();)s.d.a4(a)
r.b.toString
a.cy.aB()
a.db.aB()
r.c.a1(a)
a.c4()},
$iac:1}
M.ac.prototype={}
A.fu.prototype={}
A.fv.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
fY:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
aZ:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.O.prototype={
gag:function(a){var s=this.a?1:0,r=this.c?4:0
return s|0|r},
i:function(a){var s=this.a?1:0,r=this.c?4:0
return""+(s|0|r)},
n:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.O))return!1
if(this.a===b.a)s=this.c===b.c
else s=!1
return s}}
A.fO.prototype={
cK:function(a,b){if(b!=null&&b.d)a.dH(b)}}
A.hh.prototype={
dO:function(c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2="Required uniform value, ",c3=", was not defined or used in shader.",c4="uniform mat4 objMat;\n"
c0.z=c5
s=new P.ba("")
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
A.nn(c5,s)
A.np(c5,s)
A.no(c5,s)
A.nr(c5,s)
A.ns(c5,s)
A.nq(c5,s)
A.nt(c5,s)
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
c0.b1(0,q.charCodeAt(0)==0?q:q,A.nm(c0.z))
c0.Q=c0.x.h(0,"posAttr")
c0.cx=c0.x.h(0,"normAttr")
c0.ch=c0.x.h(0,"binmAttr")
c0.cy=c0.x.h(0,"txt2DAttr")
c0.db=c0.x.h(0,"txtCubeAttr")
c0.dx=c0.x.h(0,"bendAttr")
if(c5.dy)c0.id=t.q.a(c0.y.u(0,"invViewMat"))
if(r)c0.dy=t.q.a(c0.y.u(0,"objMat"))
if(p)c0.fr=t.q.a(c0.y.u(0,"viewObjMat"))
r=t.q
c0.fy=r.a(c0.y.u(0,"projViewObjMat"))
if(c5.go)c0.fx=r.a(c0.y.u(0,"viewMat"))
if(c5.x1)c0.k1=t.N.a(c0.y.u(0,"txt2DMat"))
if(c5.x2)c0.k2=r.a(c0.y.u(0,"txtCubeMat"))
if(c5.y1)c0.k3=r.a(c0.y.u(0,"colorMat"))
c0.r1=[]
q=c5.bj
if(q>0){c0.k4=c0.y.u(0,"bendMatCount")
for(l=0;l<q;++l){p=c0.r1
o=c0.y
n="bendValues["+l+"].mat"
k=o.h(0,n)
if(k==null)H.n(P.l(c2+n+c3))
p.push(r.a(k))}}r=c5.a
if(r.a)c0.r2=t.r.a(c0.y.u(0,"emissionClr"))
if(r.c)c0.ry=t.Q.a(c0.y.u(0,"emissionTxt"))
r=c5.b
if(r.a)c0.x1=t.r.a(c0.y.u(0,"ambientClr"))
if(r.c)c0.y1=t.Q.a(c0.y.u(0,"ambientTxt"))
r=c5.c
if(r.a)c0.y2=t.r.a(c0.y.u(0,"diffuseClr"))
if(r.c)c0.ay=t.Q.a(c0.y.u(0,"diffuseTxt"))
r=c5.d
if(r.a)c0.bk=t.r.a(c0.y.u(0,"invDiffuseClr"))
if(r.c)c0.d2=t.Q.a(c0.y.u(0,"invDiffuseTxt"))
r=c5.e
q=r.a
if(!q)p=r.c
else p=!0
if(p){c0.d5=t.n.a(c0.y.u(0,"shininess"))
if(q)c0.d3=t.r.a(c0.y.u(0,"specularClr"))
if(r.c)c0.d4=t.Q.a(c0.y.u(0,"specularTxt"))}if(c5.f.c)c0.d6=t.Q.a(c0.y.u(0,"bumpTxt"))
if(c5.db){r=t.Q
c0.d7=r.a(c0.y.u(0,"envSampler"))
q=c5.r
if(q.a)c0.d8=t.r.a(c0.y.u(0,"reflectClr"))
if(q.c)c0.d9=r.a(c0.y.u(0,"reflectTxt"))
q=c5.x
p=q.a
if(!p)o=q.c
else o=!0
if(o){c0.da=t.n.a(c0.y.u(0,"refraction"))
if(p)c0.dc=t.r.a(c0.y.u(0,"refractClr"))
if(q.c)c0.dd=r.a(c0.y.u(0,"refractTxt"))}}r=c5.y
if(r.a)c0.de=t.n.a(c0.y.u(0,"alpha"))
if(r.c)c0.df=t.Q.a(c0.y.u(0,"alphaTxt"))
if(c5.k1){r=c5.z
q=r.length
if(q!==0){c0.bO=new H.t(t.J)
c0.bP=new H.t(t.t)
for(p=t.r,o=t.n,j=0;j<r.length;r.length===q||(0,H.m)(r),++j){i=r[j]
h=i.a
g="barLight"+H.e(h)
f=[]
for(n=i.b,l=0;l<n;++l){m=c0.y
e=g+"s["+l+"].startPnt"
k=m.h(0,e)
if(k==null)H.n(P.l(c2+e+c3))
p.a(k)
m=c0.y
e=g+"s["+l+"].endPnt"
d=m.h(0,e)
if(d==null)H.n(P.l(c2+e+c3))
p.a(d)
m=c0.y
e=g+"s["+l+"].color"
c=m.h(0,e)
if(c==null)H.n(P.l(c2+e+c3))
p.a(c)
if(typeof h!=="number")return h.aj()
if((h&4)!==0){m=c0.y
e=g+"s["+l+"].att0"
b=m.h(0,e)
if(b==null)H.n(P.l(c2+e+c3))
o.a(b)
m=c0.y
e=g+"s["+l+"].att1"
a=m.h(0,e)
if(a==null)H.n(P.l(c2+e+c3))
o.a(a)
m=c0.y
e=g+"s["+l+"].att2"
a0=m.h(0,e)
if(a0==null)H.n(P.l(c2+e+c3))
o.a(a0)
a1=a0
a2=a
a3=b}else{a1=c1
a2=a1
a3=a2}f.push(new A.e9(k,d,c,a3,a2,a1))}c0.bP.k(0,h,f)
n=c0.bO
m=c0.y
e=g+"Count"
k=m.h(0,e)
if(k==null)H.n(P.l(c2+e+c3))
n.k(0,h,k)}}r=c5.Q
q=r.length
if(q!==0){c0.bQ=new H.t(t.J)
c0.bR=new H.t(t.L)
for(p=t.r,o=t.c,j=0;j<r.length;r.length===q||(0,H.m)(r),++j){i=r[j]
h=i.a
g="dirLight"+H.e(h)
f=[]
for(n=i.b,l=0;l<n;++l){if(typeof h!=="number")return h.aj()
m=(h&1)!==0
if(m){e=c0.y
a4=g+"s["+l+"].objUp"
k=e.h(0,a4)
if(k==null)H.n(P.l(c2+a4+c3))
p.a(k)
e=c0.y
a4=g+"s["+l+"].objRight"
d=e.h(0,a4)
if(d==null)H.n(P.l(c2+a4+c3))
p.a(d)
e=c0.y
a4=g+"s["+l+"].objDir"
c=e.h(0,a4)
if(c==null)H.n(P.l(c2+a4+c3))
p.a(c)
a5=c
a6=d
a7=k}else{a5=c1
a6=a5
a7=a6}e=c0.y
a4=g+"s["+l+"].viewDir"
k=e.h(0,a4)
if(k==null)H.n(P.l(c2+a4+c3))
p.a(k)
e=c0.y
a4=g+"s["+l+"].color"
d=e.h(0,a4)
if(d==null)H.n(P.l(c2+a4+c3))
p.a(d)
if(m){m=c0.y
e=g+"sTexture2D"+l
c=m.h(0,e)
if(c==null)H.n(P.l(c2+e+c3))
o.a(c)
a8=c}else a8=c1
f.push(new A.ea(a7,a6,a5,k,d,a8))}c0.bR.k(0,h,f)
n=c0.bQ
m=c0.y
e=g+"Count"
k=m.h(0,e)
if(k==null)H.n(P.l(c2+e+c3))
n.k(0,h,k)}}r=c5.ch
q=r.length
if(q!==0){c0.bS=new H.t(t.J)
c0.bT=new H.t(t.U)
for(p=t.r,o=t.N,n=t.Q,m=t.y,e=t.n,j=0;j<r.length;r.length===q||(0,H.m)(r),++j){i=r[j]
h=i.a
g="pointLight"+H.e(h)
f=[]
for(a4=i.b,l=0;l<a4;++l){a9=c0.y
b0=g+"s["+l+"].point"
k=a9.h(0,b0)
if(k==null)H.n(P.l(c2+b0+c3))
p.a(k)
a9=c0.y
b0=g+"s["+l+"].viewPnt"
d=a9.h(0,b0)
if(d==null)H.n(P.l(c2+b0+c3))
p.a(d)
a9=c0.y
b0=g+"s["+l+"].color"
c=a9.h(0,b0)
if(c==null)H.n(P.l(c2+b0+c3))
p.a(c)
if(typeof h!=="number")return h.aj()
if((h&3)!==0){a9=c0.y
b0=g+"s["+l+"].invViewRotMat"
b=a9.h(0,b0)
if(b==null)H.n(P.l(c2+b0+c3))
o.a(b)
b1=b}else b1=c1
if((h&1)!==0){a9=c0.y
b0=g+"sTextureCube"+l
b=a9.h(0,b0)
if(b==null)H.n(P.l(c2+b0+c3))
n.a(b)
a8=b}else a8=c1
if((h&2)!==0){a9=c0.y
b0=g+"sShadowCube"+l
b=a9.h(0,b0)
if(b==null)H.n(P.l(c2+b0+c3))
n.a(b)
a9=c0.y
b0=g+"s["+l+"].shadowAdj"
a=a9.h(0,b0)
if(a==null)H.n(P.l(c2+b0+c3))
m.a(a)
b2=b
b3=a}else{b2=c1
b3=b2}if((h&4)!==0){a9=c0.y
b0=g+"s["+l+"].att0"
b=a9.h(0,b0)
if(b==null)H.n(P.l(c2+b0+c3))
e.a(b)
a9=c0.y
b0=g+"s["+l+"].att1"
a=a9.h(0,b0)
if(a==null)H.n(P.l(c2+b0+c3))
e.a(a)
a9=c0.y
b0=g+"s["+l+"].att2"
a0=a9.h(0,b0)
if(a0==null)H.n(P.l(c2+b0+c3))
e.a(a0)
a1=a0
a2=a
a3=b}else{a1=c1
a2=a1
a3=a2}f.push(new A.ed(k,d,b1,c,a8,b2,b3,a3,a2,a1))}c0.bT.k(0,h,f)
a4=c0.bS
a9=c0.y
b0=g+"Count"
k=a9.h(0,b0)
if(k==null)H.n(P.l(c2+b0+c3))
a4.k(0,h,k)}}r=c5.cx
q=r.length
if(q!==0){c0.bU=new H.t(t.J)
c0.bV=new H.t(t.M)
for(p=t.r,o=t.n,n=t.y,m=t.c,j=0;j<r.length;r.length===q||(0,H.m)(r),++j){i=r[j]
h=i.a
g="spotLight"+H.e(h)
f=[]
for(e=i.b,l=0;l<e;++l){a4=c0.y
a9=g+"s["+l+"].objPnt"
k=a4.h(0,a9)
if(k==null)H.n(P.l(c2+a9+c3))
p.a(k)
a4=c0.y
a9=g+"s["+l+"].objDir"
d=a4.h(0,a9)
if(d==null)H.n(P.l(c2+a9+c3))
p.a(d)
a4=c0.y
a9=g+"s["+l+"].viewPnt"
c=a4.h(0,a9)
if(c==null)H.n(P.l(c2+a9+c3))
p.a(c)
a4=c0.y
a9=g+"s["+l+"].color"
b=a4.h(0,a9)
if(b==null)H.n(P.l(c2+a9+c3))
p.a(b)
if(typeof h!=="number")return h.aj()
if((h&3)!==0){a4=c0.y
a9=g+"s["+l+"].objUp"
a=a4.h(0,a9)
if(a==null)H.n(P.l(c2+a9+c3))
p.a(a)
a4=c0.y
a9=g+"s["+l+"].objRight"
a0=a4.h(0,a9)
if(a0==null)H.n(P.l(c2+a9+c3))
p.a(a0)
a4=c0.y
a9=g+"s["+l+"].tuScalar"
b4=a4.h(0,a9)
if(b4==null)H.n(P.l(c2+a9+c3))
o.a(b4)
a4=c0.y
a9=g+"s["+l+"].tvScalar"
b5=a4.h(0,a9)
if(b5==null)H.n(P.l(c2+a9+c3))
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
if(a==null)H.n(P.l(c2+b0+c3))
n.a(a)
b3=a}else b3=c1
if((h&8)!==0){a9=c0.y
b0=g+"s["+l+"].cutoff"
a=a9.h(0,b0)
if(a==null)H.n(P.l(c2+b0+c3))
o.a(a)
a9=c0.y
b0=g+"s["+l+"].coneAngle"
a0=a9.h(0,b0)
if(a0==null)H.n(P.l(c2+b0+c3))
o.a(a0)
b8=a0
b9=a}else{b8=c1
b9=b8}if((h&4)!==0){a9=c0.y
b0=g+"s["+l+"].att0"
a=a9.h(0,b0)
if(a==null)H.n(P.l(c2+b0+c3))
o.a(a)
a9=c0.y
b0=g+"s["+l+"].att1"
a0=a9.h(0,b0)
if(a0==null)H.n(P.l(c2+b0+c3))
o.a(a0)
a9=c0.y
b0=g+"s["+l+"].att2"
b4=a9.h(0,b0)
if(b4==null)H.n(P.l(c2+b0+c3))
o.a(b4)
a1=b4
a2=a0
a3=a}else{a1=c1
a2=a1
a3=a2}if((h&1)!==0){a9=c0.y
b0=g+"sTexture2D"+l
a=a9.h(0,b0)
if(a==null)H.n(P.l(c2+b0+c3))
m.a(a)
a8=a}else a8=c1
if(a4){a4=c0.y
a9=g+"sShadow2D"+l
a=a4.h(0,a9)
if(a==null)H.n(P.l(c2+a9+c3))
m.a(a)
b2=a}else b2=c1
f.push(new A.eg(k,d,c,b,a7,a6,b7,b6,b3,b9,b8,a3,a2,a1,a8,b2))}c0.bV.k(0,h,f)
e=c0.bU
a4=c0.y
a9=g+"Count"
k=a4.h(0,a9)
if(k==null)H.n(P.l(c2+a9+c3))
e.k(0,h,k)}}}},
ac:function(a,b){}}
A.fA.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.fM.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.hI.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.i0.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.hk.prototype={
i:function(a){return this.ay}}
A.e9.prototype={}
A.ea.prototype={}
A.ed.prototype={}
A.eg.prototype={}
A.hD.prototype={}
A.hF.prototype={
i:function(a){return this.e}}
A.dN.prototype={
aS:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
b1:function(a,b,c){var s,r,q,p=this
p.c=b
p.d=c
p.e=p.cu(b,35633)
p.f=p.cu(p.d,35632)
s=p.a
r=s.createProgram()
p.r=r
s.attachShader(r,p.e)
s.attachShader(p.r,p.f)
s.linkProgram(p.r)
if(!s.getProgramParameter(p.r,35714)){q=s.getProgramInfoLog(p.r)
s.deleteProgram(p.r)
H.n(P.l("Failed to link shader: "+H.e(q)))}p.fu()
p.fw()},
G:function(a){a.a.useProgram(this.r)
this.x.fY()},
cu:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.c(P.l("Error compiling shader '"+H.e(q)+"': "+H.e(s)))}return q},
fu:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.q(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.fu(n,r.name,q))}p.x=new A.fv(o)},
fw:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.q(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.fR(r.type,r.size,r.name,q))}p.y=new A.iu(o)},
aG:function(a,b,c){var s=this.a
if(a===1)return new A.cn(s,b,c)
else return A.jF(s,this.r,b,a,c)},
e8:function(a,b,c){var s=this.a
if(a===1)return new A.ee(s,b,c)
else return A.jF(s,this.r,b,a,c)},
e9:function(a,b,c){var s=this.a
if(a===1)return new A.ef(s,b,c)
else return A.jF(s,this.r,b,a,c)},
bf:function(a,b){return new P.eC(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
fR:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aG(b,c,d)
case 5121:return s.aG(b,c,d)
case 5122:return s.aG(b,c,d)
case 5123:return s.aG(b,c,d)
case 5124:return s.aG(b,c,d)
case 5125:return s.aG(b,c,d)
case 5126:return new A.e5(s.a,c,d)
case 35664:return new A.e6(s.a,c,d)
case 35665:return new A.e7(s.a,c,d)
case 35666:return new A.e8(s.a,c,d)
case 35667:return new A.ir(s.a,c,d)
case 35668:return new A.is(s.a,c,d)
case 35669:return new A.it(s.a,c,d)
case 35674:return new A.iv(s.a,c,d)
case 35675:return new A.eb(s.a,c,d)
case 35676:return new A.ec(s.a,c,d)
case 35678:return s.e8(b,c,d)
case 35680:return s.e9(b,c,d)
case 35670:throw H.c(s.bf("BOOL",c))
case 35671:throw H.c(s.bf("BOOL_VEC2",c))
case 35672:throw H.c(s.bf("BOOL_VEC3",c))
case 35673:throw H.c(s.bf("BOOL_VEC4",c))
default:throw H.c(P.l("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.bn.prototype={
i:function(a){return this.b}}
A.i_.prototype={}
A.ib.prototype={
dS:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i="Required uniform value, ",h=", was not defined or used in shader."
j.b1(0,u.j.charCodeAt(0)==0?u.j:u.j,A.ml(a,b))
j.z=j.x.h(0,"posAttr")
s=t.l
j.Q=s.a(j.y.u(0,"txtCount"))
j.ch=t.y.a(j.y.u(0,"backClr"))
j.cx=[]
j.cy=[]
j.db=[]
j.dx=[]
j.dy=[]
j.fr=[]
j.fx=[]
for(r=t.u,q=t.q,p=t.c,o=0;o<a;++o){n=j.cx
m=j.y
l="txt"+o
k=m.h(0,l)
if(k==null)H.n(P.l(i+l+h))
n.push(p.a(k))
n=j.cy
m=j.y
l="clrMat"+o
k=m.h(0,l)
if(k==null)H.n(P.l(i+l+h))
n.push(q.a(k))
n=j.db
m=j.y
l="srcLoc"+o
k=m.h(0,l)
if(k==null)H.n(P.l(i+l+h))
n.push(r.a(k))
n=j.dx
m=j.y
l="srcSize"+o
k=m.h(0,l)
if(k==null)H.n(P.l(i+l+h))
n.push(r.a(k))
n=j.dy
m=j.y
l="destLoc"+o
k=m.h(0,l)
if(k==null)H.n(P.l(i+l+h))
n.push(r.a(k))
n=j.fr
m=j.y
l="destSize"+o
k=m.h(0,l)
if(k==null)H.n(P.l(i+l+h))
n.push(r.a(k))
n=j.fx
m=j.y
l="flip"+o
k=m.h(0,l)
if(k==null)H.n(P.l(i+l+h))
n.push(s.a(k))}}}
A.ip.prototype={}
A.iu.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
u:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.l("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.J()},
J:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.m)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.cn.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.ir.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.is.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.it.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.iq.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.e5.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.e6.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.e7.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.e8.prototype={
dG:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iv.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.eb.prototype={
V:function(a){var s=new Float32Array(H.bI(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.ec.prototype={
V:function(a){var s=new Float32Array(H.bI(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.ee.prototype={
dH:function(a){var s=a==null||!a.d,r=this.a,q=this.d
if(s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.ef.prototype={
cd:function(a){var s=a==null||a.d<6,r=this.a,q=this.d
if(s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.j3.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.c0(q.b,b).c0(q.d.c0(q.c,b),c)
a.sa9(0,new V.J(p.a,p.b,p.c))
a.shu(p.E())
q=1-b
s=1-c
s=new V.aI(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.x(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.a0()}}}
F.ji.prototype={
$1:function(a){return new V.J(Math.cos(a),Math.sin(a),0)}}
F.j9.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.k0(l.$1(m),k)
k=J.k0(l.$1(m+3.141592653589793/n.c),k).a5(0,j)
s=new V.w(k.a,k.b,k.c).E()
l=$.kJ
if(l==null){l=new V.w(1,0,0)
$.kJ=l
r=l}else r=l
q=s.ax(!J.x(s,r)?V.kL():r).E()
r=q.ax(s).E()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.t(0,l*k)
k=q.t(0,o*k)
a.sa9(0,j.v(0,new V.J(l.a-k.a,l.b-k.b,l.c-k.c)))}}
F.h_.prototype={
b_:function(){var s=this
if(!s.gb0()){C.a.C(s.a.a.d.b,s)
s.a.a.a0()}s.bB()
s.bC()
s.fm()},
bF:function(a){this.a=a
a.d.b.push(this)},
bG:function(a){this.b=a
a.d.c.push(this)},
ft:function(a){this.c=a
a.d.d.push(this)},
bB:function(){var s=this.a
if(s!=null){C.a.C(s.d.b,this)
this.a=null}},
bC:function(){var s=this.b
if(s!=null){C.a.C(s.d.c,this)
this.b=null}},
fm:function(){var s=this.c
if(s!=null){C.a.C(s.d.d,this)
this.c=null}},
gb0:function(){return this.a==null||this.b==null||this.c==null},
e2:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.cq()
if(n!=null)q=q.v(0,n)
if(s!=null)q=q.v(0,s)
if(r!=null)q=q.v(0,r)
if(q.di())return p
return q.E()},
e4:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.a5(0,n)
q=new V.w(o.a,o.b,o.c).E()
o=r.a5(0,n)
return q.ax(new V.w(o.a,o.b,o.c).E()).E()},
bK:function(){var s,r=this
if(r.d!=null)return!0
s=r.e2()
if(s==null){s=r.e4()
if(s==null)return!1}r.d=s
r.a.a.a0()
return!0},
e1:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.cq()
if(n!=null)q=q.v(0,n)
if(s!=null)q=q.v(0,s)
if(r!=null)q=q.v(0,r)
if(q.di())return p
return q.E()},
e3:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.y().toString
if(Math.abs(p-0)<1e-9){j=b.a5(0,e)
o=new V.w(j.a,j.b,j.c).E()
if(q.a-r.a<0)o=o.N(0)}else{n=(j-s.b)/p
j=b.a5(0,e).t(0,n).v(0,e).a5(0,h)
o=new V.w(j.a,j.b,j.c).E()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.N(0)}j=l.d
if(j!=null){m=j.E()
o=m.ax(o).E().ax(m).E()}return o},
bJ:function(){var s,r=this
if(r.e!=null)return!0
s=r.e1()
if(s==null){s=r.e3()
if(s==null)return!1}r.e=s
r.a.a.a0()
return!0},
gfM:function(a){var s=this
if(J.x(s.a,s.b))return!0
if(J.x(s.b,s.c))return!0
if(J.x(s.c,s.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
B:function(a){var s,r,q=this
if(q.gb0())return a+"disposed"
s=a+C.b.af(J.a0(q.a.e),0)+", "+C.b.af(J.a0(q.b.e),0)+", "+C.b.af(J.a0(q.c.e),0)+" {"
r=q.d
s=r!=null?s+(r.i(0)+", "):s+"-, "
r=q.e
return r!=null?s+(r.i(0)+"}"):s+"-}"},
J:function(){return this.B("")}}
F.h0.prototype={}
F.hZ.prototype={
b2:function(a,b,c){var s,r=b.a
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
F.hb.prototype={
b_:function(){var s=this
if(!s.gb0()){C.a.C(s.a.a.c.b,s)
s.a.a.a0()}s.bB()
s.bC()},
bF:function(a){this.a=a
a.c.b.push(this)},
bG:function(a){this.b=a
a.c.c.push(this)},
bB:function(){var s=this.a
if(s!=null){C.a.C(s.c.b,this)
this.a=null}},
bC:function(){var s=this.b
if(s!=null){C.a.C(s.c.c,this)
this.b=null}},
gb0:function(){return this.a==null||this.b==null},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
B:function(a){if(this.gb0())return a+"disposed"
return a+C.b.af(J.a0(this.a.e),0)+", "+C.b.af(J.a0(this.b.e),0)},
J:function(){return this.B("")}}
F.hc.prototype={}
F.io.prototype={
b2:function(a,b,c){var s,r=b.a
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
F.hH.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
B:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.b.af(J.a0(s.e),0)},
J:function(){return this.B("")}}
F.hS.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.z():s},
c2:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.q()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.m)(e),++q){p=e[q]
f.a.l(0,p.fQ())}f.a.q()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.m)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.q()
m=m.e
if(typeof m!=="number")return m.v()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
l=n[m]
f.b.a.a.l(0,l)
m=new F.hH()
if(l.a==null)H.n(P.l("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.A(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.m)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.q()
m=m.e
if(typeof m!=="number")return m.v()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.q()
n=n.e
if(typeof n!=="number")return n.v()
n+=s
m=m.c
if(n>=m.length)return H.d(m,n)
i=m[n]
n=f.c.a
n.a.l(0,j)
n.a.l(0,i)
F.lW(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.m)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.q()
m=m.e
if(typeof m!=="number")return m.v()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.q()
n=n.e
if(typeof n!=="number")return n.v()
n+=s
m=m.c
if(n>=m.length)return H.d(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.q()
m=m.e
if(typeof m!=="number")return m.v()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
g=n[m]
m=f.d.a
m.a.l(0,j)
m.a.l(0,i)
m.a.l(0,g)
F.c_(j,i,g)}e=f.e
if(e!=null)e.aq(0)},
al:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.al()||!1
if(!r.a.al())s=!1
q=r.e
if(q!=null)q.aq(0)
return s},
aJ:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.aJ()||!1
if(!r.a.aJ())s=!1
q=r.e
if(q!=null)q.aq(0)
return s},
bi:function(){var s=this.e
if(s!=null)++s.d
this.a.bi()
s=this.e
if(s!=null)s.aq(0)
return!0},
h5:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
s=n.a.c.slice(0)
for(;s.length!==0;){r=C.a.gh_(s)
C.a.c7(s,0)
if(r!=null){q=[]
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(o!=null&&a.b2(0,r,o)){q.push(o)
C.a.c7(s,p)}}if(q.length>1)b.c2(q)}}n.a.q()
n.c.c8()
n.d.c8()
n.b.hm()
n.c.c9(new F.io())
n.d.c9(new F.hZ())
m=n.e
if(m!=null)m.aq(0)},
aX:function(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=34962,a3=a1.a.c.length
a5.toString
s=a5.a
r=(s&$.R().a)!==0?1:0
if((s&$.ak().a)!==0)++r
if((s&$.aj().a)!==0)++r
if((s&$.aA().a)!==0)++r
if((s&$.al().a)!==0)++r
if((s&$.cU().a)!==0)++r
if((s&$.cV().a)!==0)++r
if((s&$.bP().a)!==0)++r
if((s&$.aT().a)!==0)++r
q=a5.gce(a5)
p=q*4
s=a3*q
o=new Array(s)
o.fixed$length=Array
n=new Array(r)
n.fixed$length=Array
for(m=0,l=0;l<r;++l){k=a5.fK(l)
j=k.gce(k)
n[l]=new Z.fC(k,j,m*4,p)
for(i=0;i<a3;++i){h=a1.a.c
if(i>=h.length)return H.d(h,i)
g=h[i].h3(k)
f=m+i*q
for(h=g.length,e=0;e<h;++e){d=g[e]
if(f<0||f>=s)return H.d(o,f)
o[f]=d;++f}}m+=j}s=a4.a
c=s.createBuffer()
s.bindBuffer(a2,c)
s.bufferData(a2,new Float32Array(H.bI(o)),35044)
s.bindBuffer(a2,null)
b=new Z.aC(new Z.en(a2,c),n,a5)
b.b=[]
if(a1.b.b.length!==0){a=[]
for(l=0;h=a1.b.b,l<h.length;++l){h=h[l].a
h.a.a.q()
a.push(h.e)}a0=Z.jH(s,34963,a)
b.b.push(new Z.c2(0,a.length,a0))}if(a1.c.b.length!==0){a=[]
for(l=0;h=a1.c.b,l<h.length;++l){h=h[l].a
h.a.a.q()
a.push(h.e)
h=a1.c.b
if(l>=h.length)return H.d(h,l)
h=h[l].b
h.a.a.q()
a.push(h.e)}a0=Z.jH(s,34963,a)
b.b.push(new Z.c2(1,a.length,a0))}if(a1.d.b.length!==0){a=[]
for(l=0;h=a1.d.b,l<h.length;++l){h=h[l].a
h.a.a.q()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.d(h,l)
h=h[l].b
h.a.a.q()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.d(h,l)
h=h[l].c
h.a.a.q()
a.push(h.e)}a0=Z.jH(s,34963,a)
b.b.push(new Z.c2(4,a.length,a0))}return b},
i:function(a){var s=this,r="   ",q=[]
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.B(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.B(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.B(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.B(r))}return C.a.p(q,"\n")},
a0:function(){var s=this.e
if(s!=null)s.A(null)}}
F.hT.prototype={
fI:function(a){var s,r,q,p,o=[],n=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.l(0,n)
s.a.l(0,q)
s.a.l(0,p)
o.push(F.c_(n,q,p))}return o},
fJ:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=[]
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
if(n){l.l(0,k)
s.a.l(0,j)
s.a.l(0,h)
f.push(F.c_(k,j,h))
s.a.l(0,k)
s.a.l(0,h)
s.a.l(0,g)
f.push(F.c_(k,h,g))}else{l.l(0,j)
s.a.l(0,h)
s.a.l(0,g)
f.push(F.c_(j,h,g))
s.a.l(0,j)
s.a.l(0,g)
s.a.l(0,k)
f.push(F.c_(j,g,k))}n=!n}p=!p}return f},
gj:function(a){return this.b.length},
c9:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.d(q,r)
p=q[r]
for(q=p.d,o=q.b.length+q.c.length+q.d.length-1;o>=0;--o){n=p.d.h(0,o)
for(m=o-1;m>=0;--m){l=p.d.h(0,m)
if(a.b2(0,n,l)){n.b_()
break}}}}},
c8:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.d(r,s)
q=r[s]
r=q.gfM(q)
if(r)q.b_()}},
al:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.m)(s),++p)if(!s[p].bK())q=!1
return q},
aJ:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.m)(s),++p)if(!s[p].bJ())q=!1
return q},
i:function(a){return this.J()},
B:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].B(a))
return C.a.p(p,"\n")},
J:function(){return this.B("")}}
F.hU.prototype={
gj:function(a){return this.b.length},
c9:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.d(q,r)
p=q[r]
for(q=p.c,o=q.b.length+q.c.length-1;o>=0;--o){n=p.c.h(0,o)
for(m=o-1;m>=0;--m){l=p.c.h(0,m)
if(a.b2(0,n,l)){n.b_()
break}}}}},
c8:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.d(r,s)
q=r[s]
r=J.x(q.a,q.b)
if(r)q.b_()}},
i:function(a){return this.J()},
B:function(a){var s,r,q=[],p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.d(r,s)
q.push(r[s].B(a+(""+s+". ")))}return C.a.p(q,"\n")},
J:function(){return this.B("")}}
F.hV.prototype={
gj:function(a){return this.b.length},
hm:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.d(r,s)
r=r[s]
q=r.a
if(q.b.b.length>1){q=q.a
C.a.C(q.b.b,r)
q=r.a.a.e
if(q!=null)q.A(null)
q=r.a
if(q!=null){C.a.C(q.b.b,r)
r.a=null}}}},
i:function(a){return this.J()},
B:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].B(a))
return C.a.p(p,"\n")},
J:function(){return this.B("")}}
F.iC.prototype={
bM:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.iD(s.cx,p,m,r,q,o,n,a,l)},
fQ:function(){return this.bM(null)},
sa9:function(a,b){var s
if(!J.x(this.f,b)){this.f=b
s=this.a
if(s!=null)s.a0()}},
shu:function(a){var s
if(!J.x(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a0()}},
h3:function(a){var s,r=this
if(a.n(0,$.R())){s=r.f
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.n(0,$.ak())){s=r.r
if(s==null)return[0,1,0]
else return[s.a,s.b,s.c]}else if(a.n(0,$.aj())){s=r.x
if(s==null)return[0,0,1]
else return[s.a,s.b,s.c]}else if(a.n(0,$.aA())){s=r.y
if(s==null)return[0,0]
else return[s.a,s.b]}else if(a.n(0,$.al())){s=r.z
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.n(0,$.cU())){s=r.Q
if(s==null)return[1,1,1]
else return[s.a,s.b,s.c]}else if(a.n(0,$.cV())){s=r.Q
if(s==null)return[1,1,1,1]
else return[s.a,s.b,s.c,s.d]}else if(a.n(0,$.bP()))return[r.ch]
else if(a.n(0,$.aT())){s=r.cx
if(s==null)return[-1,-1,-1,-1]
else return[s.a,s.b,s.c,s.d]}else return[]},
bK:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.cq()
r.d.I(0,new F.iO(q))
r.r=q.a.E()
q=r.a
if(q!=null){q.a0()
q=r.a.e
if(q!=null)q.aq(0)}return!0},
bJ:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.cq()
r.d.I(0,new F.iN(q))
r.x=q.a.E()
q=r.a
if(q!=null){q.a0()
q=r.a.e
if(q!=null)q.aq(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
B:function(a){var s,r,q=this,p="-",o=[]
o.push(C.b.af(J.a0(q.e),0))
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
o.push(V.B(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.i(0))
else o.push(p)
r=C.a.p(o,", ")
return a+"{"+r+"}"},
J:function(){return this.B("")}}
F.iO.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.v(0,r)}}}
F.iN.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.v(0,r)}}}
F.iE.prototype={
q:function(){var s,r,q,p
if(this.b){s=this.c
r=s.length
for(q=0,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
s[p].e=q;++q}this.b=!1}},
l:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.l("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a0()
return!0},
bh:function(a,b,c,d,e,f){var s=F.iD(a,null,b,c,null,d,e,f,0)
this.l(0,s)
return s},
gj:function(a){return this.c.length},
al:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)s[q].bK()
return!0},
aJ:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)s[q].bJ()
return!0},
bi:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
if(p.z==null){o=p.r.E()
if(!J.x(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.A(null)}}}}return!0},
i:function(a){return this.J()},
B:function(a){var s,r,q,p
this.q()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.m)(r),++p)s.push(r[p].B(a))
return C.a.p(s,"\n")},
J:function(){return this.B("")}}
F.iF.prototype={
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
I:function(a,b){var s=this
C.a.I(s.b,b)
C.a.I(s.c,new F.iG(s,b))
C.a.I(s.d,new F.iH(s,b))},
i:function(a){return this.J()},
J:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].B(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].B(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].B(""))
return C.a.p(p,"\n")}}
F.iG.prototype={
$1:function(a){if(!J.x(a.a,this.a))this.b.$1(a)}}
F.iH.prototype={
$1:function(a){var s=this.a
if(!J.x(a.a,s)&&!J.x(a.b,s))this.b.$1(a)}}
F.iI.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.d(r,s)
return r[s]}else{if(b<0)return H.d(r,b)
return r[b]}},
i:function(a){return this.J()},
J:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].B(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].B(""))
return C.a.p(p,"\n")}}
F.iK.prototype={}
F.iJ.prototype={
b2:function(a,b,c){return J.x(b.f,c.f)}}
F.iL.prototype={}
F.hE.prototype={
c2:function(a){var s,r,q,p,o,n,m=V.cq()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)m=new V.w(m.a+q.a,m.b+q.b,m.c+q.c)}m=m.E()
for(s=a.length,q=m==null,r=0;r<a.length;a.length===s||(0,H.m)(a),++r){p=a[r]
o=q?null:m.E()
if(!J.x(p.r,o)){p.r=o
n=p.a
if(n!=null){n=n.e
if(n!=null)n.A(null)}}}return null}}
F.iM.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.J()},
J:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].B(""))
return C.a.p(p,"\n")}}
O.fN.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.z():s},
U:function(){var s=this.r
if(s!=null)s.A(null)},
scZ:function(a){if(this.b!=a){this.b=a
this.U()}},
scW:function(a){if(this.c!=a){this.c=a
this.U()}},
scV:function(a){var s=a==null?V.au():a
this.f=s
if(!J.x(s,a)){this.f=a
this.U()}},
a6:function(a,b){},
a_:function(a,b){if(b!=null)if(!C.a.L(a,b)){b.a=a.length
a.push(b)}},
b6:function(a,b){var s,r,q,p,o,n,m=this,l="Distort"
if(m.a==null){s=a.fr.h(0,l)
if(s==null){r=a.a
s=new A.fO(r,l)
s.aS(r,l)
s.b1(0,"uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n","precision mediump float;                           \n                                                   \nuniform sampler2D colorTxt;                        \nuniform sampler2D bumpTxt;                         \nuniform mat4 bumpMat;                              \n                                                   \nvarying vec2 colorTxt2D;                           \nvarying vec2 bumpTxt2D;                            \n                                                   \nvec2 offset()                                      \n{                                                  \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb; \n   txt2D = normalize(txt2D*2.0 - 1.0);             \n   return (bumpMat * vec4(txt2D, 1.0)).xy;         \n}                                                  \n                                                   \nvoid main()                                        \n{                                                  \n   vec2 txt2D = colorTxt2D + offset();             \n   gl_FragColor = texture2D(colorTxt, txt2D);      \n}                                                  \n")
s.z=s.x.h(0,"posAttr")
s.Q=s.x.h(0,"txt2DAttr")
r=t.q
s.ch=r.a(s.y.u(0,"projViewObjMat"))
q=t.N
s.cx=q.a(s.y.u(0,"colorTxt2DMat"))
s.cy=q.a(s.y.u(0,"bumpTxt2DMat"))
q=t.c
s.db=q.a(s.y.u(0,"colorTxt"))
s.dx=q.a(s.y.u(0,"bumpTxt"))
s.dy=r.a(s.y.u(0,"bumpMat"))
a.aW(s)}m.a=s}if(b.e==null){r=b.d
q=$.R()
p=$.aA()
p=r.aX(new Z.bd(a.a),new Z.a3(q.a|p.a))
p.a3($.R()).e=m.a.z.c
p.a3($.aA()).e=m.a.Q.c
b.e=p}o=[]
m.a_(o,m.b)
m.a_(o,m.c)
for(n=0;n<o.length;++n)o[n].G(a)
r=m.a
r.G(a)
q=m.b
r.cK(r.db,q)
q=m.c
r.cK(r.dx,q)
q=a.gc5()
p=r.ch
p.toString
p.V(q.P(0,!0))
q=m.d
p=r.cx
p.toString
p.V(q.P(0,!0))
q=m.e
p=r.cy
p.toString
p.V(q.P(0,!0))
q=m.f
r=r.dy
r.toString
r.V(q.P(0,!0))
r=b.e
if(r instanceof Z.aC){r.G(a)
r.a4(a)
r.a1(a)}else b.e=null
r=m.a
r.toString
q=a.a
q.useProgram(null)
r.x.aZ()
for(n=0;n<o.length;++n){r=o[n]
if(r.c){r.c=!1
q.activeTexture(33984+r.a)
q.bindTexture(3553,null)}}}}
O.dn.prototype={
gm:function(){var s=this.fr
return s==null?this.fr=D.z():s},
D:function(a){var s=this.fr
if(s!=null)s.A(a)},
U:function(){return this.D(null)},
cD:function(a){this.a=null
this.D(a)},
fq:function(){return this.cD(null)},
eu:function(a,b){var s=new D.ao()
s.b=!0
this.D(s)},
ew:function(a,b){var s=new D.ap()
s.b=!0
this.D(s)},
cs:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.t(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
o=p.gao()
n=d.h(0,p.gao())
d.k(0,o,n==null?1:n)}m=[]
d.I(0,new O.ho(f,m))
C.a.aQ(m,new O.hp())
l=new H.t(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){o=l.h(0,0)
l.k(0,0,o==null?1:o)}k=[]
l.I(0,new O.hq(f,k))
C.a.aQ(k,new O.hr())
j=new H.t(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
o=p.gao()
n=j.h(0,p.gao())
j.k(0,o,n==null?1:n)}i=[]
j.I(0,new O.hs(f,i))
C.a.aQ(i,new O.ht())
h=new H.t(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.m)(e),++q){p=e[q]
r=p.gao()
o=h.h(0,p.gao())
h.k(0,r,o==null?1:o)}g=[]
h.I(0,new O.hu(f,g))
C.a.aQ(g,new O.hv())
e=C.c.a2(f.e.a.length+3,4)
f.dy.toString
return A.m0(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
a_:function(a,b){},
a6:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.T(s,s.length);s.w();){r=s.d
r.toString
q=$.iB
if(q==null)q=$.iB=new V.w(0,0,1)
r.a=q
p=$.iA
r.d=p==null?$.iA=new V.w(0,1,0):p
p=$.iz
r.e=p==null?$.iz=new V.w(-1,0,0):p
p=r.b
if(p!=null){o=p.a
if(o!=null){r.a=o.bp(q).E()
r.d=o.bp(r.d).E()
r.e=o.bp(r.e).E()}}}},
b6:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cs()
s=b4.fr.h(0,b3.ay)
if(s==null){s=A.m_(b3,b4.a)
b4.aW(s)}b3=b2.a=s
b5.e=null}r=b3.z
q=r.bk
b3=b5.e
if(!(b3 instanceof Z.aC))b3=b5.e=null
if(b3==null||!b3.d.n(0,q)){b3=r.k4
if(b3)b5.d.al()
p=r.r1
if(p)b5.d.aJ()
o=r.rx
if(o)b5.d.bi()
n=b5.d.aX(new Z.bd(b4.a),q)
n.a3($.R()).e=b2.a.Q.c
if(b3)n.a3($.ak()).e=b2.a.cx.c
if(p)n.a3($.aj()).e=b2.a.ch.c
if(r.r2)n.a3($.aA()).e=b2.a.cy.c
if(o)n.a3($.al()).e=b2.a.db.c
if(r.ry)n.a3($.aT()).e=b2.a.dx.c
b5.e=n}m=[]
b2.a.G(b4)
if(r.fr){b3=b2.a
p=b4.dx
p=p.gZ(p)
b3=b3.dy
b3.toString
b3.V(p.P(0,!0))}if(r.fx){b3=b2.a
p=b4.gdB()
b3=b3.fr
b3.toString
b3.V(p.P(0,!0))}b3=b2.a
p=b4.gc5()
b3=b3.fy
b3.toString
b3.V(p.P(0,!0))
if(r.go){b3=b2.a
p=b4.db
p=p.gZ(p)
b3=b3.fx
b3.toString
b3.V(p.P(0,!0))}if(r.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.V(C.h.P(p,!0))}if(r.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.V(C.h.P(p,!0))}if(r.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.V(C.h.P(p,!0))}if(r.bj>0){l=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,l)
for(k=0;k<l;++k){b3=b2.a
p=b2.e.a
if(k>=p.length)return H.d(p,k)
p=p[k]
b3=b3.r1
if(k>=b3.length)return H.d(b3,k)
b3=b3[k]
j=new Float32Array(H.bI(p.P(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,j)}}b3=r.a
if(b3.a){p=b2.a
o=b2.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a_(m,b2.f.e)
b3=b2.a
p=b2.f.e
b3.ac(b3.ry,p)}if(r.k1){b3=r.b
if(b3.a){p=b2.a
o=b2.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a_(m,b2.r.e)
b3=b2.a
p=b2.r.e
b3.ac(b3.y1,p)}b3=r.c
if(b3.a){p=b2.a
o=b2.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a_(m,b2.x.e)
b3=b2.a
p=b2.x.e
b3.ac(b3.ay,p)}b3=r.d
if(b3.a){p=b2.a
o=b2.y.f
p=p.bk
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a_(m,b2.y.e)
b3=b2.a
p=b2.y.e
b3.ac(b3.d2,p)}b3=r.e
p=b3.a
if(!p)o=b3.c
else o=!0
if(o){o=b2.a
i=b2.z.ch
o=o.d5
o.a.uniform1f(o.d,i)}if(p){p=b2.a
o=b2.z.f
p=p.d3
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a_(m,b2.z.e)
b3=b2.a
p=b2.z.e
b3.ac(b3.d4,p)}b3=r.z
if(b3.length>0){h=new H.t(t.a)
for(p=b2.dx.e,o=p.length,g=0;g<p.length;p.length===o||(0,H.m)(p),++g){f=p[g]
e=f.gao()
d=h.h(0,e)
if(d==null)d=0
h.k(0,e,d+1)
c=J.cW(b2.a.bP.h(0,e),d)
i=f.ghA()
b=$.av
i=i.b8(b==null?$.av=new V.J(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.ghF()
b=$.av
i=i.b8(b==null?$.av=new V.J(0,0,0):b)
b=c.c
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.gaL(f)
b=c.d
b.a.uniform3f(b.d,i.a,i.b,i.c)
if(f.gd1()){i=f.gcP()
b=c.e
b.a.uniform1f(b.d,i)
i=f.gcQ()
b=c.f
b.a.uniform1f(b.d,i)
i=f.gcR()
b=c.r
b.a.uniform1f(b.d,i)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.m)(b3),++g){o=b3[g].a
l=h.h(0,o)
if(l==null)l=0
o=b2.a.bO.h(0,o)
o.a.uniform1i(o.d,l)}}b3=r.Q
if(b3.length>0){p=b4.db
a=p.gZ(p)
a0=new H.t(t.a)
for(p=b2.dx.f,o=p.length,g=0;g<p.length;p.length===o||(0,H.m)(p),++g){f=p[g]
d=a0.h(0,0)
if(d==null)d=0
a0.k(0,0,d+1)
c=J.cW(b2.a.bR.h(0,0),d)
i=a.bp(f.a).E()
b=c.e
a1=i.a
a2=i.b
i=i.c
b.a.uniform3f(b.d,a1,a2,i)
i=f.c
a2=c.f
a2.a.uniform3f(a2.d,i.a,i.b,i.c)}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.m)(b3),++g){o=b3[g].a
l=a0.h(0,o)
if(l==null)l=0
o=b2.a.bQ.h(0,o)
o.a.uniform1i(o.d,l)}}b3=r.ch
if(b3.length>0){p=b4.db
a=p.gZ(p)
a3=new H.t(t.a)
for(p=b2.dx.r,o=p.length,g=0;g<p.length;p.length===o||(0,H.m)(p),++g){f=p[g]
e=f.gao()
d=a3.h(0,e)
if(d==null)d=0
a3.k(0,e,d+1)
c=J.cW(b2.a.bT.h(0,e),d)
a4=a.t(0,f.gZ(f))
i=f.gZ(f)
b=$.av
i=i.b8(b==null?$.av=new V.J(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=$.av
i=a4.b8(i==null?$.av=new V.J(0,0,0):i)
b=c.c
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.gaL(f)
b=c.e
b.a.uniform3f(b.d,i.a,i.b,i.c)
f.gaD()
i=a4.bY(0)
b=i.a
a1=i.b
a2=i.c
a5=i.e
a6=i.f
a7=i.r
a8=i.y
a9=i.z
i=i.Q
b0=c.d
b0.toString
j=new Float32Array(H.bI(new V.cb(b,a1,a2,a5,a6,a7,a8,a9,i).P(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,j)
f.gaD()
i=f.gaD()
if(!C.a.L(m,i)){i.sbX(0,m.length)
m.push(i)}i=f.gaD()
b=i.gc1(i)
if(b){b=c.f
a1=i.d
a2=b.a
b=b.d
if(a1<6)a2.uniform1i(b,0)
else a2.uniform1i(b,i.a)}f.gaP()
i=f.gdI()
b=c.x
b.toString
a1=i.gfV(i)
a2=i.gfW(i)
a5=i.gfX()
i=i.gfU()
b.a.uniform4f(b.d,a1,a2,a5,i)
i=f.gaP()
if(!C.a.L(m,i)){i.sbX(0,m.length)
m.push(i)}i=f.gaP()
b=i.gc1(i)
if(b){b=c.r
a1=i.d
a2=b.a
b=b.d
if(a1<6)a2.uniform1i(b,0)
else a2.uniform1i(b,i.a)}if(f.gd1()){i=f.gcP()
b=c.y
b.a.uniform1f(b.d,i)
i=f.gcQ()
b=c.z
b.a.uniform1f(b.d,i)
i=f.gcR()
b=c.Q
b.a.uniform1f(b.d,i)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.m)(b3),++g){o=b3[g].a
l=a3.h(0,o)
if(l==null)l=0
o=b2.a.bS.h(0,o)
o.a.uniform1i(o.d,l)}}b3=r.cx
if(b3.length>0){p=b4.db
a=p.gZ(p)
b1=new H.t(t.a)
for(p=b2.dx.x,o=p.length,g=0;g<p.length;p.length===o||(0,H.m)(p),++g){f=p[g]
e=f.gao()
d=b1.h(0,e)
if(d==null)d=0
b1.k(0,e,d+1)
c=J.cW(b2.a.bV.h(0,e),d)
i=f.ghk(f)
b=c.b
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.ghD(f).E()
b=c.c
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=a.b8(f.ghk(f))
b=c.d
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.gaL(f)
b=c.e
b.a.uniform3f(b.d,i.a,i.b,i.c)
f.gaD()
i=f.ghR()
b=c.f
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.gca(f)
b=c.r
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.ghP()
b=c.x
b.a.uniform1f(b.d,i)
i=f.ghQ()
b=c.y
b.a.uniform1f(b.d,i)
f.gaD()
i=f.gaD()
if(!C.a.L(m,i)){i.sbX(0,m.length)
m.push(i)}i=f.gaD()
b=i.gc1(i)
if(b){b=c.dx
a1=i.d
a2=b.a
b=b.d
if(!a1)a2.uniform1i(b,0)
else a2.uniform1i(b,i.a)}f.gaP()
i=f.gdI()
b=c.z
b.toString
a1=i.gfV(i)
a2=i.gfW(i)
a5=i.gfX()
i=i.gfU()
b.a.uniform4f(b.d,a1,a2,a5,i)
i=f.gaP()
if(!C.a.L(m,i)){i.sbX(0,m.length)
m.push(i)}i=f.gaP()
b=i.gc1(i)
if(b){b=c.dy
a1=i.d
a2=b.a
b=b.d
if(!a1)a2.uniform1i(b,0)
else a2.uniform1i(b,i.a)}if(f.ghE()){i=f.ghC()
b=c.Q
b.a.uniform1f(b.d,i)
i=f.ghB()
b=c.ch
b.a.uniform1f(b.d,i)}if(f.gd1()){i=f.gcP()
b=c.cx
b.a.uniform1f(b.d,i)
i=f.gcQ()
b=c.cy
b.a.uniform1f(b.d,i)
i=f.gcR()
b=c.db
b.a.uniform1f(b.d,i)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.m)(b3),++g){o=b3[g].a
l=b1.h(0,o)
if(l==null)l=0
o=b2.a.bU.h(0,o)
o.a.uniform1i(o.d,l)}}}if(r.f.c){b2.a_(m,b2.Q.e)
b3=b2.a
p=b2.Q.e
b3.ac(b3.d6,p)}if(r.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.gZ(p).bY(0)}b3=b3.id
b3.toString
b3.V(p.P(0,!0))}if(r.db){b2.a_(m,b2.ch)
b3=b2.a
p=b2.ch
b3.ac(b3.d7,p)
b3=r.r
if(b3.a){p=b2.a
o=b2.cx.f
p=p.d8
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a_(m,b2.cx.e)
b3=b2.a
p=b2.cx.e
b3.ac(b3.d9,p)}b3=r.x
p=b3.a
if(!p)o=b3.c
else o=!0
if(o){o=b2.a
i=b2.cy.ch
o=o.da
o.a.uniform1f(o.d,i)}if(p){p=b2.a
o=b2.cy.f
p=p.dc
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a_(m,b2.cy.e)
b3=b2.a
p=b2.cy.e
b3.ac(b3.dd,p)}}b3=r.y
p=b3.a
o=!p
if(o)i=b3.c
else i=!0
if(i){if(p){p=b2.a
i=b2.db.f
p=p.de
p.a.uniform1f(p.d,i)}if(b3.c){b2.a_(m,b2.db.e)
p=b2.a
i=b2.db.e
p.ac(p.df,i)}p=b4.a
p.enable(3042)
p.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].G(b4)
p=b5.e
p.G(b4)
p.a4(b4)
p.a1(b4)
if(o)b3=b3.c
else b3=!0
if(b3)b4.a.disable(3042)
for(k=0;k<m.length;++k)m[k].a1(b4)
b3=b2.a
b3.toString
b4.a.useProgram(null)
b3.x.aZ()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cs().ay}}
O.ho.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.fA(a,C.c.a2(b+3,4)*4))}}
O.hp.prototype={
$2:function(a,b){return J.cX(a.a,b.a)}}
O.hq.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.fM(a,C.c.a2(b+3,4)*4))}}
O.hr.prototype={
$2:function(a,b){return J.cX(a.a,b.a)}}
O.hs.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.hI(a,C.c.a2(b+3,4)*4))}}
O.ht.prototype={
$2:function(a,b){return J.cX(a.a,b.a)}}
O.hu.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.i0(a,C.c.a2(b+3,4)*4))}}
O.hv.prototype={
$2:function(a,b){return J.cX(a.a,b.a)}}
O.hi.prototype={
av:function(){var s,r=this
r.ci()
s=r.f
$.y().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.p(r.b,s,1)
s.b=!0
r.a.D(s)}}}
O.dp.prototype={
av:function(){},
cI:function(a){var s,r,q=this
if(!q.c.n(0,a)){s=q.c
if(!s.a)s=s.c
else s=!0
if(s){if(!a.a)s=a.c
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.av()
s=q.a
s.a=null
s.D(null)}}}
O.hj.prototype={}
O.at.prototype={
cH:function(a){var s,r,q=this
if(!q.f.n(0,a)){s=q.f
q.f=a
r=new D.p(q.b+".color",s,a)
r.b=!0
q.a.D(r)}},
av:function(){this.ci()
this.cH(new V.M(1,1,1))},
saL:function(a,b){this.cI(new A.O(!0,!1,this.c.c))
this.cH(b)}}
O.hl.prototype={}
O.hm.prototype={
av:function(){var s,r=this
r.cj()
s=r.ch
$.y().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.p(r.b+".refraction",s,1)
s.b=!0
r.a.D(s)}}}
O.hn.prototype={
cJ:function(a){var s=this,r=s.ch
$.y().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.p(s.b+".shininess",r,a)
r.b=!0
s.a.D(r)}},
av:function(){this.cj()
this.cJ(100)}}
O.dx.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.z():s},
D:function(a){var s=this.r
if(s!=null)s.A(a)},
U:function(){return this.D(null)},
cF:function(a){},
cG:function(a){var s,r=this,q=r.f
if(q!=a){if(q!=null)q.gm().C(0,r.gaa())
s=r.f
r.f=a
if(a!=null)a.gm().l(0,r.gaa())
q=new D.p("bumpyTextureCube",s,r.f)
q.b=!0
r.D(q)}},
a_:function(a,b){if(b!=null)if(!C.a.L(a,b)){b.a=a.length
a.push(b)}},
a6:function(a,b){},
b6:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="varying vec3 txtCube;\n",f=h.a
if(f==null){f=A.km(h.d)
s=f.e
r=a.fr.h(0,s)
if(r==null){q=a.a
r=new A.hD(q,s)
r.aS(q,s)
r.z=f
s=f.d
q=(s?"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\nuniform mat4 txtCubeMat;\n":"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\n")+"\nattribute vec3 posAttr;\nattribute vec3 normAttr;\n"
p=f.b
if(p)q+="attribute vec3 binmAttr;\n"
q=(s?q+"attribute vec3 txtCubeAttr;\n":q)+"\nvarying vec3 normalVec;\n"
if(p)q+="varying vec3 binormalVec;\n"
q=(s?q+g:q)+"\nvoid main()\n{\n   normalVec = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz;\n"
if(p)q+="   binormalVec = normalize(viewObjMat*vec4(binmAttr, 0.0)).xyz;\n"
q=(s?q+"   txtCube = (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":q)+"   gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n"
p=p?"precision mediump float;\n\nvarying vec3 normalVec;\nvarying vec3 binormalVec;\n":u.f
p=(s?p+g:p)+"\n"
if(f.a.c)p+="uniform samplerCube bumpTxt;\n"
p+="\nvec3 normal()\n{\n"
f=f.a
o=f.a
if(!o)n=f.c
else n=!0
if(!n||o)p+="   return normalize(normalVec);\n"
else p+="   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n   vec3 n = normalize(normalVec);\n   vec3 b = normalize(binormalVec);\n   vec3 c = normalize(cross(b, n));\n   b = cross(n, c);\n   mat3 mat = mat3( b.x,  b.y,  b.z,\n                   -c.x, -c.y, -c.z,\n                    n.x,  n.y,  n.z);\n   return mat * normalize(2.0*color - 1.0);\n"
p+="}\n\nvoid main()\n{\n   vec3 norm = normal();\n   norm = -norm*0.5 + 0.5;\n   gl_FragColor = vec4(norm.x, 1.0-norm.y, norm.z, 1.0);\n}\n"
r.b1(0,q.charCodeAt(0)==0?q:q,p.charCodeAt(0)==0?p:p)
r.Q=r.x.h(0,"posAttr")
r.cx=r.x.h(0,"normAttr")
r.ch=r.x.h(0,"binmAttr")
r.cy=r.x.h(0,"txt2DAttr")
r.db=r.x.h(0,"txtCubeAttr")
p=t.q
r.dx=p.a(r.y.u(0,"viewObjMat"))
r.dy=p.a(r.y.u(0,"projViewObjMat"))
if(s)r.fx=p.a(r.y.u(0,"txtCubeMat"))
if(f.c)r.go=t.Q.a(r.y.u(0,"bumpTxt"))
a.aW(r)}f=h.a=r
b.e=null}m=f.z
l=m.f
f=b.e
if(!(f instanceof Z.aC))f=b.e=null
if(f==null||!f.d.n(0,l)){b.d.al()
f=m.b
if(f)b.d.aJ()
s=m.d
if(s)b.d.bi()
k=b.d.aX(new Z.bd(a.a),l)
k.a3($.R()).e=h.a.Q.c
k.a3($.ak()).e=h.a.cx.c
if(f)k.a3($.aj()).e=h.a.ch.c
if(s)k.a3($.al()).e=h.a.db.c
b.e=k}j=[]
h.a.G(a)
f=h.a
s=a.gdB()
f=f.dx
f.toString
f.V(s.P(0,!0))
s=h.a
f=a.gc5()
s=s.dy
s.toString
s.V(f.P(0,!0))
if(m.d){f=h.a
s=h.c
f=f.fx
f.toString
f.V(s.P(0,!0))}if(m.a.c){h.a_(j,h.f)
f=h.a
s=h.f
f=f.go
if(s!=null&&s.d>=6)f.cd(s)}for(i=0;i<j.length;++i)j[i].G(a)
f=b.e
f.G(a)
f.a4(a)
f.a1(a)
for(f=a.a,i=0;i<j.length;++i){s=j[i]
if(s.c){s.c=!1
f.activeTexture(33984+s.a)
f.bindTexture(34067,null)}}s=h.a
s.toString
f.useProgram(null)
s.x.aZ()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return A.km(this.d).e}}
O.dO.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.z():s},
D:function(a){var s=this.e
if(s!=null)s.A(a)},
U:function(){return this.D(null)},
a6:function(a,b){},
b6:function(a,b){var s,r,q,p,o,n,m=this,l="Skybox"
if(m.a==null){s=a.fr.h(0,l)
if(s==null){r=a.a
s=new A.i_(r,l)
s.aS(r,l)
s.b1(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.z=s.x.h(0,"posAttr")
r=t.n
s.Q=r.a(s.y.h(0,"fov"))
s.ch=r.a(s.y.h(0,"ratio"))
s.cx=t.r.a(s.y.h(0,"boxClr"))
s.cy=t.Q.a(s.y.h(0,"boxTxt"))
s.db=t.q.a(s.y.h(0,"viewMat"))
a.aW(s)}m.a=s}if(b.e==null){r=b.d.aX(new Z.bd(a.a),$.R())
r.a3($.R()).e=m.a.z.c
b.e=r}r=m.c
if(r!=null){r.a=1
r.G(a)}r=a.d
q=a.c
p=m.a
p.G(a)
o=m.b
n=p.Q
n.a.uniform1f(n.d,o)
o=p.ch
o.a.uniform1f(o.d,r/q)
q=m.c
p.cy.cd(q)
q=m.d
r=p.cx
r.a.uniform3f(r.d,q.a,q.b,q.c)
q=a.db
q=q.gZ(q).bY(0)
p=p.db
p.toString
p.V(q.P(0,!0))
r=b.e
if(r instanceof Z.aC){r.G(a)
r.a4(a)
r.a1(a)}else b.e=null
r=m.a
r.toString
a.a.useProgram(null)
r.x.aZ()
r=m.c
if(r!=null)r.a1(a)}}
O.i6.prototype={}
O.e_.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.z():s},
D:function(a){var s=this.e
if(s!=null)s.A(a)},
U:function(){return this.D(null)},
eK:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaa(),q=0;q<b.length;b.length===s||(0,H.m)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.aW()
o.d=0
p.f=o}n=o.a;(n==null?o.a=[]:n).push(r)}}this.U()},
eM:function(a,b){var s,r
for(s=b.gM(b),r=this.gaa();s.w();)s.gH(s).gm().C(0,r)
this.U()},
scT:function(a){var s=this.f
if(s!==a){this.f=a
s=new D.p("blend",s,a)
s.b=!0
this.D(s)}},
a6:function(a,b){},
ed:function(a){a=C.c.a2(a+3,4)*4
if(a<=0)return 4
return a},
b6:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.ed(h.c.a.length)
if(g!==h.d||h.f!=h.r){h.d=g
h.r=h.f
h.b=null}s=h.b
if(s==null){s=h.f
r="TextureLayout_"+g+"_"+C.c.i(s.a)
q=a.fr.h(0,r)
if(q==null){q=A.mk(g,s,a.a)
a.aW(q)}h.b=q
s=q}if(b.e==null){s=b.d.aX(new Z.bd(a.a),$.R())
r=s.a3($.R())
p=h.b
r.e=p.z.c
b.e=s
s=p}s.G(a)
o=[]
for(n=0,m=0;s=h.c.a,m<s.length;++m){l=s[m]
if(l!=null&&l.a!=null){s=l.a
if(s!=null)if(!C.a.L(o,s)){s.a=o.length
o.push(s)}s=h.b
r=l.a
s=s.cx
if(n>=s.length)return H.d(s,n)
s=s[n]
p=r==null||!r.d
k=s.a
s=s.d
if(p)k.uniform1i(s,0)
else k.uniform1i(s,r.a)
s=h.b
r=l.b
s=s.cy
if(n>=s.length)return H.d(s,n)
s=s[n]
if(r==null){r=$.hw
if(r==null){r=new V.b4(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.hw=r}}j=new Float32Array(H.bI(r.P(0,!0)))
s.a.uniformMatrix4fv(s.d,!1,j)
s=h.b
i=l.c
s.toString
if(i==null){r=$.cj
if(r==null){r=V.ci(0,0,1,1)
$.cj=r
i=r}else i=r}r=s.db
if(n>=r.length)return H.d(r,n)
r=r[n]
r.a.uniform2f(r.d,i.a,i.b)
s=s.dx
if(n>=s.length)return H.d(s,n)
s=s[n]
s.a.uniform2f(s.d,i.c,i.d)
s=h.b
i=l.d
s.toString
if(i==null){r=$.cj
if(r==null){r=V.ci(0,0,1,1)
$.cj=r
i=r}else i=r}r=s.dy
if(n>=r.length)return H.d(r,n)
r=r[n]
r.a.uniform2f(r.d,i.a,i.b)
s=s.fr
if(n>=s.length)return H.d(s,n)
s=s[n]
s.a.uniform2f(s.d,i.c,i.d)
s=h.b
r=l.e
s=s.fx
if(n>=s.length)return H.d(s,n)
s=s[n]
r=r?1:0
s.a.uniform1i(s.d,r);++n}}s=h.b.Q
s.a.uniform1i(s.d,n)
s=h.b
r=h.a
s.ch.dG(r)
for(m=0;m<o.length;++m)o[m].G(a)
s=b.e
if(s instanceof Z.aC){s.G(a)
s.a4(a)
s.a1(a)}else b.e=null
s=h.b
s.toString
r=a.a
r.useProgram(null)
s.x.aZ()
for(m=0;m<o.length;++m){s=o[m]
if(s.c){s.c=!1
r.activeTexture(33984+s.a)
r.bindTexture(3553,null)}}}}
O.bB.prototype={
D:function(a){var s=this.f
if(s!=null)s.A(a)},
U:function(){return this.D(null)}}
T.i7.prototype={}
T.i8.prototype={}
T.i9.prototype={
gm:function(){var s=this.y
return s==null?this.y=D.z():s},
G:function(a){var s,r=this
if(!r.c&&r.d){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(3553,r.b)}}}
T.ia.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.z():s},
G:function(a){var s,r=this
if(!r.c&&r.d>=6){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(34067,r.b)}},
a1:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(34067,null)}}}
T.ic.prototype={
dj:function(a,b){var s,r=this,q=34067,p=a+"/posx"+b,o=a+"/posy"+b,n=a+"/posz"+b,m=a+"/negx"+b,l=a+"/negy"+b,k=a+"/negz"+b,j=r.a,i=j.createTexture()
j.bindTexture(q,i)
j.texParameteri(q,10242,10497)
j.texParameteri(q,10243,10497)
j.texParameteri(q,10241,9729)
j.texParameteri(q,10240,9729)
j.bindTexture(q,null)
s=new T.ia()
s.a=0
s.b=i
s.c=!1
s.d=0
r.aH(s,i,p,34069,!1,!1)
r.aH(s,i,m,34070,!1,!1)
r.aH(s,i,o,34071,!1,!1)
r.aH(s,i,l,34072,!1,!1)
r.aH(s,i,n,34073,!1,!1)
r.aH(s,i,k,34074,!1,!1)
return s},
h4:function(a){return this.dj(a,".png")},
aH:function(a,b,c,d,e,f){var s=document.createElement("img")
s.src=c;++this.d
W.Q(s,"load",new T.id(this,s,!1,b,!1,d,a),!1)},
fs:function(a,b,c){var s,r,q,p
b=V.cT(b)
s=V.cT(a.width)
r=V.cT(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.jo()
q.width=s
q.height=r
p=C.f.dD(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.nN(p.getImageData(0,0,q.width,q.height))}}}
T.id.prototype={
$1:function(a){var s=this,r=s.a,q=r.fs(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,s.e?1:0)
C.u.ht(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.bN()}++r.e}}
X.fz.prototype={
gm:function(){var s=this.fr
return s==null?this.fr=D.z():s},
Y:function(a){var s=this.fr
if(s!=null)s.A(a)},
sai:function(a,b){var s,r=this
if(b<1)b=1
s=r.a
if(s!==b){r.y=null
r.c=r.a=b
s=new D.p("width",s,b)
s.b=!0
r.Y(s)}},
sad:function(a,b){var s,r=this
if(b<1)b=1
s=r.b
if(s!==b){r.y=null
r.d=r.b=b
s=new D.p("height",s,b)
s.b=!0
r.Y(s)}},
G:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=3553,c=36161,b=36160
if(f.f){s=a.a
r=s.drawingBufferWidth
q=f.r
if(typeof r!=="number")return r.t()
f.sai(0,C.c.W(r*q))
s=s.drawingBufferHeight
q=f.x
if(typeof s!=="number")return s.t()
f.sad(0,C.c.W(s*q))}if(f.y==null){s=a.a
r=f.ch
q=f.a
p=f.b
o=s.getParameter(3379)
n=V.cT(q)
m=V.cT(p)
o=V.cT(o)
n=Math.min(n,o)
m=Math.min(m,o)
l=s.createTexture()
s.bindTexture(d,l)
s.texParameteri(d,10242,33071)
s.texParameteri(d,10243,33071)
s.texParameteri(d,10241,9729)
s.texParameteri(d,10240,9729)
C.u.dw(s,d,0,6408,n,m,0,6408,5121,e)
s.bindTexture(d,e)
k=T.ky(l)
k.e=q
k.f=p
k.r=n
k.x=m
if(!k.d){k.d=!0
q=k.y
if(q!=null)q.bN()}r.b=k.b
r.c=k.c
r.d=k.d
r.e=k.e
r.f=k.f
r.r=k.r
r.x=k.x
r=r.y
if(r!=null)r.bN()
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
a.c=C.d.W(q*f.a)
p=r.d
a.d=C.d.W(p*f.b)
j=r.a
i=f.c
h=C.d.W(j*i)
r=r.b
j=f.d
s.viewport(h,C.d.W(r*j),C.d.W(q*i),C.d.W(p*j))
s.clearDepth(f.db)
if(f.cy){r=f.cx
s.clearColor(r.a,r.b,r.c,r.d)
g=16640}else g=256
if(g>0)s.clear(g)},
a1:function(a){a.a.bindFramebuffer(36160,null)}}
X.jn.prototype={}
X.h4.prototype={
gm:function(){var s=this.x
return s==null?this.x=D.z():s},
G:function(a){var s,r,q,p,o,n,m,l=this,k=a.a
k.bindFramebuffer(36160,null)
k.enable(2884)
k.enable(2929)
k.depthFunc(513)
s=k.drawingBufferWidth
r=k.drawingBufferHeight
q=l.r
p=q.a
if(typeof s!=="number")return H.q(s)
o=C.d.W(p*s)
p=q.b
if(typeof r!=="number")return H.q(r)
n=C.d.W(p*r)
p=C.d.W(q.c*s)
a.c=p
q=C.d.W(q.d*r)
a.d=q
k.viewport(o,n,p,q)
k.clearDepth(l.c)
if(l.b){q=l.a
k.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
k.clear(m)},
a1:function(a){}}
X.h6.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.z():s},
G:function(a){var s
a.cy.bn(V.au())
s=V.au()
a.db.bn(s)},
a1:function(a){a.cy.aB()
a.db.aB()}}
X.dD.prototype={
gm:function(){var s=this.f
return s==null?this.f=D.z():s},
Y:function(a){var s=this.f
if(s!=null)s.A(a)},
dZ:function(){return this.Y(null)},
sb3:function(a){var s,r,q=this
if(!J.x(q.b,a)){s=q.b
if(s!=null)s.gm().C(0,q.gcn())
r=q.b
q.b=a
if(a!=null)a.gm().l(0,q.gcn())
s=new D.p("mover",r,q.b)
s.b=!0
q.Y(s)}},
G:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.aF(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.bn(i)
p=$.kp
if(p==null){p=V.kr()
o=V.jG()
n=$.kI
p=V.kj(p,o,n==null?$.kI=new V.w(0,0,-1):n)
$.kp=p
s=p}else s=p
p=q.b
if(p!=null){r=p.aO(0,a,q)
if(r!=null)s=r.t(0,s)}a.db.bn(s)},
a1:function(a){a.cy.aB()
a.db.aB()}}
X.i4.prototype={}
V.jh.prototype={
$1:function(a){var s=C.d.dz(this.a.gh0(),2)
if(s!=="0.00")P.jY(s+" fps")}}
V.hW.prototype={
dR:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.Q(o,"scroll",new V.hY(m),!1)},
cO:function(a){var s,r,q,p,o,n,m,l
this.fv()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.a.h2(a)
q.toString
p=new H.H(p)
p=new P.bH(q.dA(new H.bt(p,p.gj(p))).a())
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
if(H.le(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.d(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.mO(C.N,q,C.q,!1)
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
fv:function(){var s,r,q,p="Start",o="Bold",n="Italic",m="ItalicEnd",l="Code",k="LinkHead",j="LinkTail",i="LinkEnd",h="Other"
if(this.b!=null)return
s=new L.ih()
s.a=new H.t(t.V)
s.b=new H.t(t.w)
s.c=P.kg(t.f)
s.d=s.K(0,p)
r=s.K(0,p).p(0,o)
q=K.S(new H.H("*"))
r.a.push(q)
r.c=!0
r=s.K(0,o).p(0,o)
q=new K.aG()
q.a=[]
r.a.push(q)
r=K.S(new H.H("*"))
q.a.push(r)
r=s.K(0,o).p(0,"BoldEnd")
q=K.S(new H.H("*"))
r.a.push(q)
r.c=!0
r=s.K(0,p).p(0,n)
q=K.S(new H.H("_"))
r.a.push(q)
r.c=!0
r=s.K(0,n).p(0,n)
q=new K.aG()
q.a=[]
r.a.push(q)
r=K.S(new H.H("_"))
q.a.push(r)
r=s.K(0,n).p(0,m)
q=K.S(new H.H("_"))
r.a.push(q)
r.c=!0
r=s.K(0,p).p(0,l)
q=K.S(new H.H("`"))
r.a.push(q)
r.c=!0
r=s.K(0,l).p(0,l)
q=new K.aG()
q.a=[]
r.a.push(q)
r=K.S(new H.H("`"))
q.a.push(r)
r=s.K(0,l).p(0,"CodeEnd")
q=K.S(new H.H("`"))
r.a.push(q)
r.c=!0
r=s.K(0,p).p(0,k)
q=K.S(new H.H("["))
r.a.push(q)
r.c=!0
r=s.K(0,k).p(0,j)
q=K.S(new H.H("|"))
r.a.push(q)
q=s.K(0,k).p(0,i)
r=K.S(new H.H("]"))
q.a.push(r)
q.c=!0
q=s.K(0,k).p(0,k)
r=new K.aG()
r.a=[]
q.a.push(r)
q=K.S(new H.H("|]"))
r.a.push(q)
q=s.K(0,j).p(0,i)
r=K.S(new H.H("]"))
q.a.push(r)
q.c=!0
q=s.K(0,j).p(0,j)
r=new K.aG()
r.a=[]
q.a.push(r)
q=K.S(new H.H("|]"))
r.a.push(q)
s.K(0,p).p(0,h).a.push(new K.fs())
q=s.K(0,h).p(0,h)
r=new K.aG()
r.a=[]
q.a.push(r)
q=K.S(new H.H("*_`["))
r.a.push(q)
q=s.K(0,"BoldEnd")
q.d=q.a.b7(o)
q=s.K(0,m)
q.d=q.a.b7(n)
q=s.K(0,"CodeEnd")
q.d=q.a.b7(l)
q=s.K(0,i)
q.d=q.a.b7("Link")
q=s.K(0,h)
q.d=q.a.b7(h)
this.b=s}}
V.hY.prototype={
$1:function(a){P.kB(C.k,new V.hX(this.a))}}
V.hX.prototype={
$0:function(){var s=C.d.W(document.documentElement.scrollTop),r=this.a.style,q=H.e(-0.01*s)+"px"
r.top=q}};(function aliases(){var s=J.a.prototype
s.dL=s.i
s=J.b1.prototype
s.dM=s.i
s=K.dd.prototype
s.dK=s.aN
s.cg=s.i
s=O.dp.prototype
s.ci=s.av
s=O.at.prototype
s.cj=s.av})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"n0","lU",21)
r(P,"nG","mq",6)
r(P,"nH","mr",6)
r(P,"nI","ms",6)
q(P,"l5","nB",7)
r(W,"pa","fT",22)
var k
p(k=E.bp.prototype,"gdt",0,0,null,["$1","$0"],["du","hc"],0,0)
p(k,"gdr",0,0,null,["$1","$0"],["ds","hb"],0,0)
p(k,"gdn",0,0,null,["$1","$0"],["dq","h8"],0,0)
o(k,"gh6","h7",3)
o(k,"gh9","ha",3)
p(k=E.e0.prototype,"gck",0,0,null,["$1","$0"],["cm","cl"],0,0)
n(k,"ghp","dv",7)
m(k=X.el.prototype,"geN","eO",4)
m(k,"gex","ey",4)
m(k,"geD","eE",2)
m(k,"geR","eS",8)
m(k,"geP","eQ",8)
m(k,"geV","eW",2)
m(k,"geZ","f_",2)
m(k,"geH","eI",2)
m(k,"geX","eY",2)
m(k,"geF","eG",2)
m(k,"gf0","f1",19)
m(k,"gf2","f3",4)
m(k,"gfi","fj",5)
m(k,"gfe","ff",5)
m(k,"gfg","fh",5)
p(D.bo.prototype,"gdT",0,0,null,["$1","$0"],["as","dU"],0,0)
p(k=D.c7.prototype,"gcA",0,0,null,["$1","$0"],["cB","eT"],0,0)
m(k,"gf4","f5",20)
o(k,"geq","er",9)
o(k,"gf8","f9",9)
l(V.Z.prototype,"gj","c_",10)
l(V.w.prototype,"gj","c_",10)
p(k=U.bq.prototype,"gbb",0,0,null,["$1","$0"],["O","am"],0,0)
o(k,"gdV","dW",11)
o(k,"gf6","f7",11)
p(k=U.co.prototype,"gbb",0,0,null,["$1","$0"],["O","am"],0,0)
m(k,"gei","ej",1)
m(k,"gek","el",1)
m(k,"gem","en",1)
m(k,"gee","ef",1)
m(k,"geg","eh",1)
m(k,"gfE","fF",1)
m(k,"gfC","fD",1)
m(k,"gfA","fB",1)
m(U.cp.prototype,"geo","ep",1)
p(k=M.bR.prototype,"gS",0,0,null,["$1","$0"],["T","aT"],0,0)
o(k,"gfa","fb",12)
o(k,"gfc","fd",12)
p(M.bU.prototype,"gS",0,0,null,["$1","$0"],["T","aT"],0,0)
p(k=M.bZ.prototype,"gS",0,0,null,["$1","$0"],["T","aT"],0,0)
o(k,"gez","eA",3)
o(k,"geB","eC",3)
p(k=O.dn.prototype,"gaa",0,0,null,["$1","$0"],["D","U"],0,0)
p(k,"gfp",0,0,null,["$1","$0"],["cD","fq"],0,0)
o(k,"ges","eu",13)
o(k,"gev","ew",13)
p(O.dx.prototype,"gaa",0,0,null,["$1","$0"],["D","U"],0,0)
p(O.dO.prototype,"gaa",0,0,null,["$1","$0"],["D","U"],0,0)
p(k=O.e_.prototype,"gaa",0,0,null,["$1","$0"],["D","U"],0,0)
o(k,"geJ","eK",14)
o(k,"geL","eM",14)
p(O.bB.prototype,"gaa",0,0,null,["$1","$0"],["D","U"],0,0)
p(X.dD.prototype,"gcn",0,0,null,["$1","$0"],["Y","dZ"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.G,null)
q(P.G,[H.jw,J.a,J.T,P.cv,P.f,H.bt,P.df,H.c0,H.ej,H.il,P.E,H.hG,H.f1,H.bl,P.as,H.hd,H.dk,H.h8,H.ab,H.eF,P.cH,P.bG,P.bH,P.ep,P.dV,P.dW,P.cl,P.j2,P.cB,P.iW,P.cu,P.A,P.d3,P.j1,P.be,P.a7,P.N,P.aV,P.dC,P.ck,P.eC,P.h3,P.ar,P.dl,P.a9,P.K,P.ba,W.fI,W.js,W.jI,W.C,W.c1,P.cJ,P.eV,K.fs,K.dd,K.hR,L.dT,L.e1,L.e2,L.ih,O.bm,O.cc,E.fB,E.bp,E.bk,E.by,E.ez,E.hL,E.e0,Z.en,Z.bd,Z.aC,Z.c2,Z.a3,D.fD,D.aW,D.P,X.d2,X.di,X.ha,X.hf,X.ag,X.hC,X.ii,X.el,D.bo,D.aq,V.M,V.X,V.fW,V.cb,V.b4,V.a2,V.J,V.aI,V.dJ,V.Z,V.w,U.co,U.cp,M.bU,M.bZ,M.ac,A.fu,A.fv,A.O,A.fA,A.fM,A.hI,A.i0,A.hk,A.e9,A.ea,A.ed,A.eg,A.hF,A.bn,A.ip,A.iu,F.h_,F.h0,F.hb,F.hc,F.hH,F.hS,F.hT,F.hU,F.hV,F.iC,F.iE,F.iF,F.iI,F.iK,F.iL,F.iM,O.i6,O.dp,O.hl,O.bB,T.ic,X.i4,X.jn,X.h6,X.dD,V.hW])
q(J.a,[J.h7,J.c6,J.b1,J.a8,J.b0,J.aD,H.ce,W.b,W.fr,W.d1,W.an,W.D,W.eu,W.a6,W.fL,W.fP,W.ev,W.bX,W.ex,W.fQ,W.h,W.eD,W.aY,W.h5,W.eH,W.b_,W.he,W.hx,W.eL,W.eM,W.b5,W.eN,W.eP,W.b7,W.eT,W.eW,W.b8,W.eX,W.b9,W.f2,W.aL,W.f6,W.ig,W.bb,W.f8,W.ij,W.iw,W.fe,W.fg,W.fi,W.fk,W.fm,P.bs,P.eJ,P.bx,P.eR,P.hJ,P.f3,P.bC,P.fa,P.fw,P.eq,P.dK,P.f_])
q(J.b1,[J.dE,J.bD,J.af])
r(J.dg,J.a8)
q(J.b0,[J.c5,J.c4])
r(P.c8,P.cv)
q(P.c8,[H.bE,W.es,W.er,P.db])
r(H.H,H.bE)
q(P.f,[H.i,H.b3,H.cr,P.c3])
r(H.bY,H.b3)
q(P.df,[H.ca,H.eo])
q(P.E,[H.dy,H.dh,H.ei,H.dL,H.eA,P.d_,P.dz,P.a5,P.ek,P.eh,P.dU,P.d4,P.d6])
q(H.bl,[H.i5,H.h9,H.jb,H.jc,H.jd,P.iQ,P.iP,P.iR,P.iS,P.j0,P.j_,P.j7,P.iY,P.iZ,P.hg,P.fR,P.fS,W.hz,W.hB,W.hQ,W.i3,W.iT,P.j8,P.h1,P.h2,P.fy,E.hM,E.hN,E.hO,E.ie,D.fY,D.fZ,F.j3,F.ji,F.j9,F.iO,F.iN,F.iG,F.iH,O.ho,O.hp,O.hq,O.hr,O.hs,O.ht,O.hu,O.hv,T.id,V.jh,V.hY,V.hX])
q(H.i5,[H.i1,H.bQ])
r(P.dm,P.as)
r(H.t,P.dm)
r(H.aE,H.i)
r(H.bw,H.ce)
q(H.bw,[H.cx,H.cz])
r(H.cy,H.cx)
r(H.b6,H.cy)
r(H.cA,H.cz)
r(H.cd,H.cA)
q(H.cd,[H.dr,H.ds,H.dt,H.du,H.dv,H.cf,H.dw])
r(H.cI,H.eA)
r(P.cE,P.c3)
r(P.iX,P.j2)
r(P.ct,P.cB)
r(P.d5,P.dW)
r(P.fU,P.d3)
r(P.ix,P.fU)
r(P.iy,P.d5)
q(P.N,[P.V,P.o])
q(P.a5,[P.bA,P.de])
q(W.b,[W.v,W.da,W.aK,W.cC,W.aM,W.ah,W.cF,W.em,W.bF,P.d0,P.aB])
q(W.v,[W.I,W.ae])
q(W.I,[W.k,P.j])
q(W.k,[W.cY,W.cZ,W.aU,W.dc,W.br,W.dM])
r(W.fH,W.an)
r(W.bV,W.eu)
q(W.a6,[W.fJ,W.fK])
r(W.ew,W.ev)
r(W.bW,W.ew)
r(W.ey,W.ex)
r(W.d8,W.ey)
r(W.aX,W.d1)
r(W.eE,W.eD)
r(W.d9,W.eE)
r(W.eI,W.eH)
r(W.aZ,W.eI)
r(W.ax,W.h)
q(W.ax,[W.b2,W.a1,W.bc])
r(W.hy,W.eL)
r(W.hA,W.eM)
r(W.eO,W.eN)
r(W.dq,W.eO)
r(W.eQ,W.eP)
r(W.cg,W.eQ)
r(W.eU,W.eT)
r(W.dF,W.eU)
r(W.hP,W.eW)
r(W.cD,W.cC)
r(W.dQ,W.cD)
r(W.eY,W.eX)
r(W.dR,W.eY)
r(W.i2,W.f2)
r(W.f7,W.f6)
r(W.dY,W.f7)
r(W.cG,W.cF)
r(W.dZ,W.cG)
r(W.f9,W.f8)
r(W.e3,W.f9)
r(W.aN,W.a1)
r(W.ff,W.fe)
r(W.et,W.ff)
r(W.cs,W.bX)
r(W.fh,W.fg)
r(W.eG,W.fh)
r(W.fj,W.fi)
r(W.cw,W.fj)
r(W.fl,W.fk)
r(W.eZ,W.fl)
r(W.fn,W.fm)
r(W.f5,W.fn)
r(W.eB,P.dV)
r(P.aa,P.eV)
r(P.eK,P.eJ)
r(P.dj,P.eK)
r(P.eS,P.eR)
r(P.dA,P.eS)
r(P.f4,P.f3)
r(P.dX,P.f4)
r(P.fb,P.fa)
r(P.e4,P.fb)
r(P.fx,P.eq)
r(P.dB,P.aB)
r(P.f0,P.f_)
r(P.dS,P.f0)
q(K.dd,[K.aG,L.ik])
q(E.fB,[Z.fC,A.dN,T.i7])
q(D.P,[D.ao,D.ap,D.p,X.dG])
q(X.dG,[X.c9,X.bu,X.bv,X.cm])
q(O.bm,[D.c7,U.bq,M.bR])
q(D.fD,[U.fG,U.Y])
r(U.bT,U.Y)
q(A.dN,[A.fO,A.hh,A.hD,A.i_,A.ib])
q(A.ip,[A.cn,A.ir,A.is,A.it,A.iq,A.e5,A.e6,A.e7,A.e8,A.iv,A.eb,A.ec,A.ee,A.ef])
r(F.hZ,F.h0)
r(F.io,F.hc)
r(F.iJ,F.iK)
r(F.hE,F.iL)
q(O.i6,[O.fN,O.dn,O.dx,O.dO,O.e_])
q(O.dp,[O.hi,O.hj,O.at])
q(O.at,[O.hm,O.hn])
q(T.i7,[T.i8,T.ia])
r(T.i9,T.i8)
q(X.i4,[X.fz,X.h4])
s(H.bE,H.ej)
s(H.cx,P.A)
s(H.cy,H.c0)
s(H.cz,P.A)
s(H.cA,H.c0)
s(P.cv,P.A)
s(W.eu,W.fI)
s(W.ev,P.A)
s(W.ew,W.C)
s(W.ex,P.A)
s(W.ey,W.C)
s(W.eD,P.A)
s(W.eE,W.C)
s(W.eH,P.A)
s(W.eI,W.C)
s(W.eL,P.as)
s(W.eM,P.as)
s(W.eN,P.A)
s(W.eO,W.C)
s(W.eP,P.A)
s(W.eQ,W.C)
s(W.eT,P.A)
s(W.eU,W.C)
s(W.eW,P.as)
s(W.cC,P.A)
s(W.cD,W.C)
s(W.eX,P.A)
s(W.eY,W.C)
s(W.f2,P.as)
s(W.f6,P.A)
s(W.f7,W.C)
s(W.cF,P.A)
s(W.cG,W.C)
s(W.f8,P.A)
s(W.f9,W.C)
s(W.fe,P.A)
s(W.ff,W.C)
s(W.fg,P.A)
s(W.fh,W.C)
s(W.fi,P.A)
s(W.fj,W.C)
s(W.fk,P.A)
s(W.fl,W.C)
s(W.fm,P.A)
s(W.fn,W.C)
s(P.eJ,P.A)
s(P.eK,W.C)
s(P.eR,P.A)
s(P.eS,W.C)
s(P.f3,P.A)
s(P.f4,W.C)
s(P.fa,P.A)
s(P.fb,W.C)
s(P.eq,P.as)
s(P.f_,P.A)
s(P.f0,W.C)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{o:"int",V:"double",N:"num",K:"String",be:"bool",a9:"Null",ar:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([P*])","~(P*)","~(a1*)","~(o*,f<bp*>*)","~(h*)","~(bc*)","~(~())","~()","~(b2*)","~(o*,f<aq*>*)","V*()","~(o*,f<Y*>*)","~(o*,f<ac*>*)","~(o*,f<b4*>*)","~(o*,f<bB*>*)","@(@)","a9(@)","a9(G?,G?)","a9(@,@)","~(aN*)","be*(f<aq*>*)","o(@,@)","K(b)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.mL(v.typeUniverse,JSON.parse('{"af":"b1","dE":"b1","bD":"b1","oa":"h","ok":"h","oc":"aB","ob":"b","or":"b","ot":"b","o9":"j","om":"j","od":"k","op":"k","on":"v","oj":"v","oR":"ah","oh":"ax","oe":"ae","ou":"ae","os":"a1","oo":"aZ","oq":"b6","a8":{"i":["1"],"f":["1"]},"dg":{"i":["1"],"f":["1"]},"b0":{"V":[],"N":[]},"c5":{"V":[],"o":[],"N":[]},"c4":{"V":[],"N":[]},"aD":{"K":[]},"H":{"i":["o"],"f":["o"]},"i":{"f":["1"]},"b3":{"f":["2"]},"bY":{"i":["2"],"f":["2"]},"cr":{"f":["1"]},"bE":{"i":["1"],"f":["1"]},"dy":{"E":[]},"dh":{"E":[]},"ei":{"E":[]},"dL":{"E":[]},"aE":{"i":["1"],"f":["1"]},"bw":{"r":["1"]},"b6":{"r":["V"],"i":["V"],"f":["V"]},"cd":{"r":["o"],"i":["o"],"f":["o"]},"dr":{"r":["o"],"i":["o"],"f":["o"]},"ds":{"r":["o"],"i":["o"],"f":["o"]},"dt":{"r":["o"],"i":["o"],"f":["o"]},"du":{"r":["o"],"i":["o"],"f":["o"]},"dv":{"r":["o"],"i":["o"],"f":["o"]},"cf":{"r":["o"],"i":["o"],"f":["o"]},"dw":{"r":["o"],"i":["o"],"f":["o"]},"eA":{"E":[]},"cI":{"E":[]},"cH":{"cl":[]},"cE":{"f":["1"]},"ct":{"i":["1"],"f":["1"]},"c3":{"f":["1"]},"c8":{"i":["1"],"f":["1"]},"cB":{"i":["1"],"f":["1"]},"V":{"N":[]},"d_":{"E":[]},"dz":{"E":[]},"a5":{"E":[]},"bA":{"E":[]},"de":{"E":[]},"ek":{"E":[]},"eh":{"E":[]},"dU":{"E":[]},"d4":{"E":[]},"dC":{"E":[]},"ck":{"E":[]},"d6":{"E":[]},"o":{"N":[]},"ar":{"i":["1"],"f":["1"]},"k":{"I":[],"v":[],"b":[]},"cY":{"I":[],"v":[],"b":[]},"cZ":{"I":[],"v":[],"b":[]},"aU":{"I":[],"v":[],"b":[]},"ae":{"v":[],"b":[]},"bW":{"r":["aa<N>"],"i":["aa<N>"],"f":["aa<N>"]},"bX":{"aa":["N"]},"d8":{"r":["K"],"i":["K"],"f":["K"]},"es":{"i":["I"],"f":["I"]},"I":{"v":[],"b":[]},"d9":{"r":["aX"],"i":["aX"],"f":["aX"]},"da":{"b":[]},"dc":{"I":[],"v":[],"b":[]},"aZ":{"r":["v"],"i":["v"],"f":["v"]},"br":{"I":[],"v":[],"b":[]},"b2":{"h":[]},"dq":{"r":["b5"],"i":["b5"],"f":["b5"]},"a1":{"h":[]},"er":{"i":["v"],"f":["v"]},"v":{"b":[]},"cg":{"r":["v"],"i":["v"],"f":["v"]},"dF":{"r":["b7"],"i":["b7"],"f":["b7"]},"dM":{"I":[],"v":[],"b":[]},"aK":{"b":[]},"dQ":{"r":["aK"],"b":[],"i":["aK"],"f":["aK"]},"dR":{"r":["b8"],"i":["b8"],"f":["b8"]},"aM":{"b":[]},"ah":{"b":[]},"dY":{"r":["ah"],"i":["ah"],"f":["ah"]},"dZ":{"r":["aM"],"b":[],"i":["aM"],"f":["aM"]},"bc":{"h":[]},"e3":{"r":["bb"],"i":["bb"],"f":["bb"]},"ax":{"h":[]},"em":{"b":[]},"aN":{"a1":[],"h":[]},"bF":{"b":[]},"et":{"r":["D"],"i":["D"],"f":["D"]},"cs":{"aa":["N"]},"eG":{"r":["aY?"],"i":["aY?"],"f":["aY?"]},"cw":{"r":["v"],"i":["v"],"f":["v"]},"eZ":{"r":["b9"],"i":["b9"],"f":["b9"]},"f5":{"r":["aL"],"i":["aL"],"f":["aL"]},"cJ":{"b_":[]},"db":{"i":["I"],"f":["I"]},"aa":{"eV":["1"]},"dj":{"i":["bs"],"f":["bs"]},"dA":{"i":["bx"],"f":["bx"]},"dX":{"i":["K"],"f":["K"]},"j":{"I":[],"v":[],"b":[]},"e4":{"i":["bC"],"f":["bC"]},"d0":{"b":[]},"aB":{"b":[]},"dB":{"b":[]},"dS":{"i":["dl<@,@>"],"f":["dl<@,@>"]},"bm":{"f":["1*"]},"ao":{"P":[]},"ap":{"P":[]},"p":{"P":[]},"c9":{"P":[]},"bu":{"P":[]},"bv":{"P":[]},"dG":{"P":[]},"cm":{"P":[]},"bo":{"aq":[]},"c7":{"f":["aq*"]},"bT":{"Y":[]},"bq":{"Y":[],"f":["Y*"]},"co":{"Y":[]},"cp":{"Y":[]},"bR":{"ac":[],"f":["ac*"]},"bU":{"ac":[]},"bZ":{"ac":[]}}'))
H.mK(v.typeUniverse,JSON.parse('{"a8":1,"dg":1,"T":1,"i":1,"bt":1,"b3":2,"bY":2,"ca":2,"cr":1,"eo":1,"c0":1,"ej":1,"bE":1,"aE":1,"dk":1,"bw":1,"bH":1,"cE":1,"dV":1,"dW":2,"cu":1,"c3":1,"c8":1,"A":1,"dm":2,"as":2,"cB":1,"cv":1,"d3":2,"d5":2,"f":1,"df":1,"ar":1,"eB":1,"C":1,"c1":1,"bm":1,"ao":1,"ap":1,"p":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",j:"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",f:"precision mediump float;\n\nvarying vec3 normalVec;\n"}
var t=(function rtii(){var s=H.nS
return{O:s("i<@>"),h:s("I"),C:s("E"),D:s("h"),Z:s("ol"),s:s("b_"),k:s("br"),b:s("a8<@>"),T:s("c6"),g:s("af"),p:s("r<@>"),G:s("t<K*,dN*>"),V:s("t<K*,dT*>"),i:s("t<K*,K*>"),w:s("t<K*,e2*>"),t:s("t<o*,ar<e9*>*>"),L:s("t<o*,ar<ea*>*>"),U:s("t<o*,ar<ed*>*>"),M:s("t<o*,ar<eg*>*>"),J:s("t<o*,cn*>"),E:s("t<o*,be*>"),a:s("t<o*,o*>"),P:s("a9"),K:s("G"),I:s("aa<N>"),R:s("K"),W:s("cl"),o:s("bD"),v:s("be"),Y:s("V"),z:s("@"),S:s("o"),B:s("aU*"),x:s("c9*"),d:s("bu*"),F:s("bv*"),A:s("0&*"),_:s("G*"),f:s("K*"),j:s("e1*"),m:s("cm*"),n:s("e5*"),l:s("cn*"),u:s("e6*"),r:s("e7*"),y:s("e8*"),N:s("eb*"),q:s("ec*"),c:s("ee*"),Q:s("ef*"),e:s("o*"),bc:s("kb<a9>?"),X:s("G?"),H:s("N")}})();(function constants(){var s=hunkHelpers.makeConstList
C.f=W.aU.prototype
C.K=J.a.prototype
C.a=J.a8.prototype
C.L=J.c4.prototype
C.c=J.c5.prototype
C.h=J.c6.prototype
C.d=J.b0.prototype
C.b=J.aD.prototype
C.M=J.af.prototype
C.t=J.dE.prototype
C.u=P.dK.prototype
C.l=J.bD.prototype
C.v=W.aN.prototype
C.w=W.bF.prototype
C.x=new E.bk("Browser.chrome")
C.m=new E.bk("Browser.firefox")
C.n=new E.bk("Browser.edge")
C.y=new E.bk("Browser.other")
C.o=function getTagFallback(o) {
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
C.p=function(hooks) { return hooks; }

C.F=new P.dC()
C.q=new P.ix()
C.G=new P.iy()
C.e=new P.iX()
C.i=new A.bn(0,"ColorBlendType.Overwrite")
C.H=new A.bn(1,"ColorBlendType.Additive")
C.I=new A.bn(2,"ColorBlendType.Average")
C.j=new A.bn(3,"ColorBlendType.AlphaBlend")
C.k=new P.aV(0)
C.J=new P.aV(5e6)
C.N=s([0,0,65498,45055,65535,34815,65534,18431])
C.O=new E.by("OperatingSystem.windows")
C.r=new E.by("OperatingSystem.mac")
C.P=new E.by("OperatingSystem.linux")
C.Q=new E.by("OperatingSystem.other")
C.R=new P.bG(null,2)})();(function staticFields(){$.kP=null
$.am=0
$.k5=null
$.k4=null
$.l7=null
$.l4=null
$.lc=null
$.ja=null
$.je=null
$.jV=null
$.bK=null
$.cO=null
$.cP=null
$.jQ=!1
$.ai=C.e
$.a_=[]
$.fV=null
$.ki=null
$.hw=null
$.kq=null
$.av=null
$.cj=null
$.kH=null
$.kK=null
$.kJ=null
$.iz=null
$.iA=null
$.iB=null
$.kI=null
$.kp=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"oi","lk",function(){return H.nU("_$dart_dartClosure")})
s($,"ov","ll",function(){return H.aw(H.im({
toString:function(){return"$receiver$"}}))})
s($,"ow","lm",function(){return H.aw(H.im({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"ox","ln",function(){return H.aw(H.im(null))})
s($,"oy","lo",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"oB","lr",function(){return H.aw(H.im(void 0))})
s($,"oC","ls",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"oA","lq",function(){return H.aw(H.kD(null))})
s($,"oz","lp",function(){return H.aw(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"oE","lu",function(){return H.aw(H.kD(void 0))})
s($,"oD","lt",function(){return H.aw(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"oS","jZ",function(){return P.mp()})
s($,"oU","ly",function(){return P.mc("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"oL","lx",function(){return Z.ad(0)})
s($,"oF","lv",function(){return Z.ad(511)})
s($,"oN","R",function(){return Z.ad(1)})
s($,"oM","ak",function(){return Z.ad(2)})
s($,"oH","aj",function(){return Z.ad(4)})
s($,"oO","aA",function(){return Z.ad(8)})
s($,"oP","al",function(){return Z.ad(16)})
s($,"oI","cU",function(){return Z.ad(32)})
s($,"oJ","cV",function(){return Z.ad(64)})
s($,"oK","lw",function(){return Z.ad(96)})
s($,"oQ","bP",function(){return Z.ad(128)})
s($,"oG","aT",function(){return Z.ad(256)})
s($,"og","lj",function(){return new V.fW()})
s($,"of","y",function(){return $.lj()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.ce,ArrayBufferView:H.ce,Float32Array:H.b6,Float64Array:H.b6,Int16Array:H.dr,Int32Array:H.ds,Int8Array:H.dt,Uint16Array:H.du,Uint32Array:H.dv,Uint8ClampedArray:H.cf,CanvasPixelArray:H.cf,Uint8Array:H.dw,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLBodyElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLDivElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTableElement:W.k,HTMLTableRowElement:W.k,HTMLTableSectionElement:W.k,HTMLTemplateElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.fr,HTMLAnchorElement:W.cY,HTMLAreaElement:W.cZ,Blob:W.d1,HTMLCanvasElement:W.aU,CDATASection:W.ae,CharacterData:W.ae,Comment:W.ae,ProcessingInstruction:W.ae,Text:W.ae,CSSPerspective:W.fH,CSSCharsetRule:W.D,CSSConditionRule:W.D,CSSFontFaceRule:W.D,CSSGroupingRule:W.D,CSSImportRule:W.D,CSSKeyframeRule:W.D,MozCSSKeyframeRule:W.D,WebKitCSSKeyframeRule:W.D,CSSKeyframesRule:W.D,MozCSSKeyframesRule:W.D,WebKitCSSKeyframesRule:W.D,CSSMediaRule:W.D,CSSNamespaceRule:W.D,CSSPageRule:W.D,CSSRule:W.D,CSSStyleRule:W.D,CSSSupportsRule:W.D,CSSViewportRule:W.D,CSSStyleDeclaration:W.bV,MSStyleCSSProperties:W.bV,CSS2Properties:W.bV,CSSImageValue:W.a6,CSSKeywordValue:W.a6,CSSNumericValue:W.a6,CSSPositionValue:W.a6,CSSResourceValue:W.a6,CSSUnitValue:W.a6,CSSURLImageValue:W.a6,CSSStyleValue:W.a6,CSSMatrixComponent:W.an,CSSRotation:W.an,CSSScale:W.an,CSSSkew:W.an,CSSTranslation:W.an,CSSTransformComponent:W.an,CSSTransformValue:W.fJ,CSSUnparsedValue:W.fK,DataTransferItemList:W.fL,DOMException:W.fP,ClientRectList:W.bW,DOMRectList:W.bW,DOMRectReadOnly:W.bX,DOMStringList:W.d8,DOMTokenList:W.fQ,Element:W.I,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,SubmitEvent:W.h,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.aX,FileList:W.d9,FileWriter:W.da,HTMLFormElement:W.dc,Gamepad:W.aY,History:W.h5,HTMLCollection:W.aZ,HTMLFormControlsCollection:W.aZ,HTMLOptionsCollection:W.aZ,ImageData:W.b_,HTMLImageElement:W.br,KeyboardEvent:W.b2,Location:W.he,MediaList:W.hx,MIDIInputMap:W.hy,MIDIOutputMap:W.hA,MimeType:W.b5,MimeTypeArray:W.dq,PointerEvent:W.a1,MouseEvent:W.a1,DragEvent:W.a1,Document:W.v,DocumentFragment:W.v,HTMLDocument:W.v,ShadowRoot:W.v,XMLDocument:W.v,Attr:W.v,DocumentType:W.v,Node:W.v,NodeList:W.cg,RadioNodeList:W.cg,Plugin:W.b7,PluginArray:W.dF,RTCStatsReport:W.hP,HTMLSelectElement:W.dM,SourceBuffer:W.aK,SourceBufferList:W.dQ,SpeechGrammar:W.b8,SpeechGrammarList:W.dR,SpeechRecognitionResult:W.b9,Storage:W.i2,CSSStyleSheet:W.aL,StyleSheet:W.aL,TextTrack:W.aM,TextTrackCue:W.ah,VTTCue:W.ah,TextTrackCueList:W.dY,TextTrackList:W.dZ,TimeRanges:W.ig,Touch:W.bb,TouchEvent:W.bc,TouchList:W.e3,TrackDefaultList:W.ij,CompositionEvent:W.ax,FocusEvent:W.ax,TextEvent:W.ax,UIEvent:W.ax,URL:W.iw,VideoTrackList:W.em,WheelEvent:W.aN,Window:W.bF,DOMWindow:W.bF,CSSRuleList:W.et,ClientRect:W.cs,DOMRect:W.cs,GamepadList:W.eG,NamedNodeMap:W.cw,MozNamedAttrMap:W.cw,SpeechRecognitionResultList:W.eZ,StyleSheetList:W.f5,SVGLength:P.bs,SVGLengthList:P.dj,SVGNumber:P.bx,SVGNumberList:P.dA,SVGPointList:P.hJ,SVGStringList:P.dX,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGScriptElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGTransform:P.bC,SVGTransformList:P.e4,AudioBuffer:P.fw,AudioParamMap:P.fx,AudioTrackList:P.d0,AudioContext:P.aB,webkitAudioContext:P.aB,BaseAudioContext:P.aB,OfflineAudioContext:P.dB,WebGL2RenderingContext:P.dK,SQLResultSetRowList:P.dS})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bw.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
H.cy.$nativeSuperclassTag="ArrayBufferView"
H.b6.$nativeSuperclassTag="ArrayBufferView"
H.cz.$nativeSuperclassTag="ArrayBufferView"
H.cA.$nativeSuperclassTag="ArrayBufferView"
H.cd.$nativeSuperclassTag="ArrayBufferView"
W.cC.$nativeSuperclassTag="EventTarget"
W.cD.$nativeSuperclassTag="EventTarget"
W.cF.$nativeSuperclassTag="EventTarget"
W.cG.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(S.la,[])
else S.la([])})})()
//# sourceMappingURL=test.dart.js.map
