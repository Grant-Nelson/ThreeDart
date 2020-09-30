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
a[c]=function(){a[c]=function(){H.ox(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kg"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kg"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.kg(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={jT:function jT(){},
mp:function(a,b){if(t.U.b(a))return new H.c8(a,b)
return new H.be(a,b)},
jR:function(){return new P.bM("No element")},
mi:function(){return new P.bM("Too many elements")},
mJ:function(a,b){var s=J.b1(a)
if(typeof s!=="number")return s.a3()
H.e6(a,0,s-1,b)},
e6:function(a,b,c,d){if(c-b<=32)H.mI(a,b,c,d)
else H.mH(a,b,c,d)},
mI:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.bp(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a2()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
mH:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.Z(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.Z(a6+a7,2),d=e-h,c=e+h,b=J.bp(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.a2()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a2()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.a2()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a2()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.a2()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.a2()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.a2()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a2()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a2()
if(a4>0){s=a3
a3=a2
a2=s}b.m(a5,g,a)
b.m(a5,e,a1)
b.m(a5,f,a3)
b.m(a5,d,b.h(a5,a6))
b.m(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.L(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.aa()
if(n<0){if(p!==r){b.m(a5,p,b.h(a5,r))
b.m(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a2()
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
if(typeof j!=="number")return j.aa()
if(j<0){if(p!==r){b.m(a5,p,b.h(a5,r))
b.m(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.a2()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.a2()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.aa()
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
H.e6(a5,a6,r-2,a8)
H.e6(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.L(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.L(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.m(a5,p,b.h(a5,r))
b.m(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.aa()
m=q-1
if(n<0){b.m(a5,p,b.h(a5,r))
l=r+1
b.m(a5,r,b.h(a5,q))
b.m(a5,q,o)
r=l}else{b.m(a5,p,b.h(a5,q))
b.m(a5,q,o)}q=m
break}}H.e6(a5,r,q,a8)}else H.e6(a5,r,q,a8)},
l:function l(a){this.a=a},
i:function i(){},
cm:function cm(){},
aI:function aI(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
be:function be(a,b){this.a=a
this.b=b},
c8:function c8(a,b){this.a=a
this.b=b},
co:function co(a,b){this.a=null
this.b=a
this.c=b},
cp:function cp(a,b){this.a=a
this.b=b},
bn:function bn(a,b){this.a=a
this.b=b},
eI:function eI(a,b){this.a=a
this.b=b},
cc:function cc(){},
eB:function eB(){},
bP:function bP(){},
lE:function(a){var s,r=H.lD(a)
if(r!=null)return r
s="minified:"+a
return s},
op:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
d:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.Z(a)
if(typeof s!="string")throw H.c(H.aV(a))
return s},
cx:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
dZ:function(a){return H.ms(a)},
ms:function(a){var s,r,q
if(a instanceof P.J)return H.a5(H.d7(a),null)
if(J.d6(a)===C.N||t.o.b(a)){s=C.p(a)
if(H.kT(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.kT(q))return q}}return H.a5(H.d7(a),null)},
kT:function(a){var s=a!=="Object"&&a!==""
return s},
kS:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
mB:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.k)(a),++r){q=a[r]
if(!H.d2(q))throw H.c(H.aV(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.be(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.aV(q))}return H.kS(p)},
mA:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.d2(q))throw H.c(H.aV(q))
if(q<0)throw H.c(H.aV(q))
if(q>65535)return H.mB(a)}return H.kS(a)},
jX:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.be(s,10))>>>0,56320|s&1023)}throw H.c(P.aL(a,0,1114111,null,null))},
bJ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mz:function(a){var s=H.bJ(a).getFullYear()+0
return s},
mx:function(a){var s=H.bJ(a).getMonth()+1
return s},
mt:function(a){var s=H.bJ(a).getDate()+0
return s},
mu:function(a){var s=H.bJ(a).getHours()+0
return s},
mw:function(a){var s=H.bJ(a).getMinutes()+0
return s},
my:function(a){var s=H.bJ(a).getSeconds()+0
return s},
mv:function(a){var s=H.bJ(a).getMilliseconds()+0
return s},
q:function(a){throw H.c(H.aV(a))},
e:function(a,b){if(a==null)J.b1(a)
throw H.c(H.bX(a,b))},
bX:function(a,b){var s,r,q="index"
if(!H.d2(b))return new P.a2(!0,b,q,null)
s=J.b1(a)
if(!(b<0)){if(typeof s!=="number")return H.q(s)
r=b>=s}else r=!0
if(r)return P.H(b,a,q,null,s)
return P.e_(b,q)},
oc:function(a,b,c){if(a>c)return P.aL(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aL(b,a,c,"end",null)
return new P.a2(!0,b,"end",null)},
aV:function(a){return new P.a2(!0,a,null,null)},
o7:function(a){if(typeof a!="number")throw H.c(H.aV(a))
return a},
c:function(a){var s,r
if(a==null)a=new P.dQ()
s=new Error()
s.dartException=a
r=H.oy
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
oy:function(){return J.Z(this.dartException)},
p:function(a){throw H.c(a)},
k:function(a){throw H.c(P.b5(a))},
aw:function(a){var s,r,q,p,o,n
a=H.lB(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.iF(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
iG:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
l2:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
kN:function(a,b){return new H.dP(a,b==null?null:b.method)},
jU:function(a,b){var s=b==null,r=s?null:b.method
return new H.dA(a,r,s?null:b.receiver)},
aC:function(a){if(a==null)return new H.hY(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bq(a,a.dartException)
return H.o3(a)},
bq:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
o3:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.be(r,16)&8191)===10)switch(q){case 438:return H.bq(a,H.jU(H.d(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bq(a,H.kN(H.d(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.lH()
o=$.lI()
n=$.lJ()
m=$.lK()
l=$.lN()
k=$.lO()
j=$.lM()
$.lL()
i=$.lQ()
h=$.lP()
g=p.ae(s)
if(g!=null)return H.bq(a,H.jU(s,g))
else{g=o.ae(s)
if(g!=null){g.method="call"
return H.bq(a,H.jU(s,g))}else{g=n.ae(s)
if(g==null){g=m.ae(s)
if(g==null){g=l.ae(s)
if(g==null){g=k.ae(s)
if(g==null){g=j.ae(s)
if(g==null){g=m.ae(s)
if(g==null){g=i.ae(s)
if(g==null){g=h.ae(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bq(a,H.kN(s,g))}}return H.bq(a,new H.eA(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cy()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bq(a,new P.a2(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cy()
return a},
ki:function(a){var s
if(a==null)return new H.fl(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.fl(a)},
oe:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
oo:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.o("Unsupported number of arguments for wrapped closure"))},
bW:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oo)
a.$identity=s
return s},
mc:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.ik().constructor.prototype):Object.create(new H.c_(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.al
if(typeof r!=="number")return r.u()
$.al=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.ky(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.m8(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ky(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
m8:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lw,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.m6:H.m5
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
m9:function(a,b,c,d){var s=H.kx
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
ky:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.mb(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.m9(r,!p,s,b)
if(r===0){p=$.al
if(typeof p!=="number")return p.u()
$.al=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.d(H.jI())+";return "+n+"."+H.d(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.al
if(typeof p!=="number")return p.u()
$.al=p+1
m+=p
return new Function("return function("+m+"){return this."+H.d(H.jI())+"."+H.d(s)+"("+m+");}")()},
ma:function(a,b,c,d){var s=H.kx,r=H.m7
switch(b?-1:a){case 0:throw H.c(new H.e2("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
mb:function(a,b){var s,r,q,p,o,n,m=H.jI(),l=$.kv
if(l==null)l=$.kv=H.ku("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.ma(r,!p,s,b)
if(r===1){p="return function(){return this."+H.d(m)+"."+H.d(s)+"(this."+l+");"
o=$.al
if(typeof o!=="number")return o.u()
$.al=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.d(m)+"."+H.d(s)+"(this."+l+", "+n+");"
o=$.al
if(typeof o!=="number")return o.u()
$.al=o+1
return new Function(p+o+"}")()},
kg:function(a,b,c,d,e,f,g){return H.mc(a,b,c,d,!!e,!!f,g)},
m5:function(a,b){return H.fz(v.typeUniverse,H.d7(a.a),b)},
m6:function(a,b){return H.fz(v.typeUniverse,H.d7(a.c),b)},
kx:function(a){return a.a},
m7:function(a){return a.c},
jI:function(){var s=$.kw
return s==null?$.kw=H.ku("self"):s},
ku:function(a){var s,r,q,p=new H.c_("self","target","receiver","name"),o=J.jS(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.jH("Field name "+a+" not found."))},
ox:function(a){throw H.c(new P.dl(a))},
oi:function(a){return v.getIsolateTag(a)},
pA:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
or:function(a){var s,r,q,p,o,n=$.lv.$1(a),m=$.jw[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jB[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.lt.$2(a,n)
if(q!=null){m=$.jw[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jB[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.jE(s)
$.jw[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jB[n]=s
return s}if(p==="-"){o=H.jE(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lz(a,s)
if(p==="*")throw H.c(P.l3(n))
if(v.leafTags[n]===true){o=H.jE(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lz(a,s)},
lz:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.kl(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jE:function(a){return J.kl(a,!1,null,!!a.$it)},
os:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.jE(s)
else return J.kl(s,c,null,null)},
om:function(){if(!0===$.kj)return
$.kj=!0
H.on()},
on:function(){var s,r,q,p,o,n,m,l
$.jw=Object.create(null)
$.jB=Object.create(null)
H.ol()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.lA.$1(o)
if(n!=null){m=H.os(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
ol:function(){var s,r,q,p,o,n,m=C.C()
m=H.bV(C.D,H.bV(C.E,H.bV(C.q,H.bV(C.q,H.bV(C.F,H.bV(C.G,H.bV(C.H(C.p),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.lv=new H.jy(p)
$.lt=new H.jz(o)
$.lA=new H.jA(n)},
bV:function(a,b){return a(b)||b},
mm:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.hl("Illegal RegExp pattern ("+String(n)+")",a))},
lC:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
od:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lB:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ko:function(a,b,c){var s=H.ov(a,b,c)
return s},
ov:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lB(b),'g'),H.od(c))},
iF:function iF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dP:function dP(a,b){this.a=a
this.b=b},
dA:function dA(a,b,c){this.a=a
this.b=b
this.c=c},
eA:function eA(a){this.a=a},
hY:function hY(a){this.a=a},
fl:function fl(a){this.a=a
this.b=null},
bu:function bu(){},
ip:function ip(){},
ik:function ik(){},
c_:function c_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e2:function e2(a){this.a=a},
v:function v(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hu:function hu(a){this.a=a},
hx:function hx(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aH:function aH(a){this.a=a},
dD:function dD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jy:function jy(a){this.a=a},
jz:function jz(a){this.a=a},
jA:function jA(a){this.a=a},
ht:function ht(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d0:function(a){return a},
ay:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bX(b,a))},
nh:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.oc(a,b,c))
return b},
ct:function ct(){},
bG:function bG(){},
bg:function bg(){},
cs:function cs(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
cu:function cu(){},
dO:function dO(){},
cK:function cK(){},
cL:function cL(){},
cM:function cM(){},
cN:function cN(){},
mF:function(a,b){var s=b.c
return s==null?b.c=H.ka(a,b.z,!0):s},
kX:function(a,b){var s=b.c
return s==null?b.c=H.cY(a,"kE",[b.z]):s},
kY:function(a){var s=a.y
if(s===6||s===7||s===8)return H.kY(a.z)
return s===11||s===12},
mE:function(a){return a.cy},
of:function(a){return H.kb(v.typeUniverse,a,!1)},
aU:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aU(a,s,a0,a1)
if(r===s)return b
return H.lj(a,r,!0)
case 7:s=b.z
r=H.aU(a,s,a0,a1)
if(r===s)return b
return H.ka(a,r,!0)
case 8:s=b.z
r=H.aU(a,s,a0,a1)
if(r===s)return b
return H.li(a,r,!0)
case 9:q=b.Q
p=H.d5(a,q,a0,a1)
if(p===q)return b
return H.cY(a,b.z,p)
case 10:o=b.z
n=H.aU(a,o,a0,a1)
m=b.Q
l=H.d5(a,m,a0,a1)
if(n===o&&l===m)return b
return H.k8(a,n,l)
case 11:k=b.z
j=H.aU(a,k,a0,a1)
i=b.Q
h=H.o0(a,i,a0,a1)
if(j===k&&h===i)return b
return H.lh(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.d5(a,g,a0,a1)
o=b.z
n=H.aU(a,o,a0,a1)
if(f===g&&n===o)return b
return H.k9(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.fP("Attempted to substitute unexpected RTI kind "+c))}},
d5:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aU(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
o1:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aU(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
o0:function(a,b,c,d){var s,r=b.a,q=H.d5(a,r,c,d),p=b.b,o=H.d5(a,p,c,d),n=b.c,m=H.o1(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.eY()
s.a=q
s.b=o
s.c=m
return s},
pC:function(a,b){a[v.arrayRti]=b
return a},
o8:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.lw(s)
return a.$S()}return null},
lx:function(a,b){var s
if(H.kY(b))if(a instanceof H.bu){s=H.o8(a)
if(s!=null)return s}return H.d7(a)},
d7:function(a){var s
if(a instanceof P.J){s=a.$ti
return s!=null?s:H.kd(a)}if(Array.isArray(a))return H.ne(a)
return H.kd(J.d6(a))},
ne:function(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
nn:function(a){var s=a.$ti
return s!=null?s:H.kd(a)},
kd:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.no(a,s)},
no:function(a,b){var s=a instanceof H.bu?a.__proto__.__proto__.constructor:b,r=H.nd(v.typeUniverse,s.name)
b.$ccache=r
return r},
lw:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.kb(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
nm:function(a){var s,r,q=this,p=t.K
if(q===p)return H.d1(q,a,H.ns)
if(!H.aB(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.d1(q,a,H.nv)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.d2
else if(s===t.cb||s===t.H)r=H.nr
else if(s===t.N)r=H.nt
else r=s===t.cB?H.lp:null
if(r!=null)return H.d1(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.oq)){q.r="$i"+p
return H.d1(q,a,H.nu)}}else if(p===7)return H.d1(q,a,H.nk)
return H.d1(q,a,H.ni)},
d1:function(a,b,c){a.b=c
return a.b(b)},
nl:function(a){var s,r,q=this
if(!H.aB(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.ng
else if(q===t.K)r=H.nf
else r=H.nj
q.a=r
return q.a(a)},
nU:function(a){var s,r=a.y
if(!H.aB(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
ni:function(a){var s=this
if(a==null)return H.nU(s)
return H.M(v.typeUniverse,H.lx(a,s),null,s,null)},
nk:function(a){if(a==null)return!0
return this.z.b(a)},
nu:function(a){var s=this,r=s.r
if(a instanceof P.J)return!!a[r]
return!!J.d6(a)[r]},
pz:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.ln(a,s)},
nj:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.ln(a,s)},
ln:function(a,b){throw H.c(H.n3(H.l9(a,H.lx(a,b),H.a5(b,null))))},
l9:function(a,b,c){var s=P.hf(a),r=H.a5(b==null?H.d7(a):b,null)
return s+": type '"+H.d(r)+"' is not a subtype of type '"+H.d(c)+"'"},
n3:function(a){return new H.cW("TypeError: "+a)},
W:function(a,b){return new H.cW("TypeError: "+H.l9(a,null,b))},
ns:function(a){return a!=null},
nf:function(a){return a},
nv:function(a){return!0},
ng:function(a){return a},
lp:function(a){return!0===a||!1===a},
pl:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.W(a,"bool"))},
pn:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.W(a,"bool"))},
pm:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.W(a,"bool?"))},
po:function(a){if(typeof a=="number")return a
throw H.c(H.W(a,"double"))},
pq:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.W(a,"double"))},
pp:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.W(a,"double?"))},
d2:function(a){return typeof a=="number"&&Math.floor(a)===a},
pr:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.W(a,"int"))},
pt:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.W(a,"int"))},
ps:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.W(a,"int?"))},
nr:function(a){return typeof a=="number"},
pu:function(a){if(typeof a=="number")return a
throw H.c(H.W(a,"num"))},
pw:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.W(a,"num"))},
pv:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.W(a,"num?"))},
nt:function(a){return typeof a=="string"},
px:function(a){if(typeof a=="string")return a
throw H.c(H.W(a,"String"))},
kc:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.W(a,"String"))},
py:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.W(a,"String?"))},
nX:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.b.u(r,H.a5(a[q],b))
return s},
lo:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=[]
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.X,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.e(a6,i)
l=C.b.u(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.b.u(" extends ",H.a5(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.a5(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.b.u(a3,H.a5(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.b.u(a3,H.a5(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.kq(H.a5(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.d(a1)},
a5:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.a5(a.z,b)
return s}if(l===7){r=a.z
s=H.a5(r,b)
q=r.y
return J.kq(q===11||q===12?C.b.u("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.d(H.a5(a.z,b))+">"
if(l===9){p=H.o2(a.z)
o=a.Q
return o.length!==0?p+("<"+H.nX(o,b)+">"):p}if(l===11)return H.lo(a,b,null)
if(l===12)return H.lo(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.e(b,n)
return b[n]}return"?"},
o2:function(a){var s,r=H.lD(a)
if(r!=null)return r
s="minified:"+a
return s},
lk:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
nd:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.kb(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cZ(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cY(a,b,q)
n[b]=o
return o}else return m},
nb:function(a,b){return H.lm(a.tR,b)},
na:function(a,b){return H.lm(a.eT,b)},
kb:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.lf(H.ld(a,null,b,c))
r.set(b,s)
return s},
fz:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.lf(H.ld(a,b,c,!0))
q.set(c,r)
return r},
nc:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.k8(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aT:function(a,b){b.a=H.nl
b.b=H.nm
return b},
cZ:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ad(null,null)
s.y=b
s.cy=c
r=H.aT(a,s)
a.eC.set(c,r)
return r},
lj:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.n8(a,b,r,c)
a.eC.set(r,s)
return s},
n8:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aB(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ad(null,null)
q.y=6
q.z=b
q.cy=c
return H.aT(a,q)},
ka:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.n7(a,b,r,c)
a.eC.set(r,s)
return s},
n7:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aB(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.jC(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.jC(q.z))return q
else return H.mF(a,b)}}p=new H.ad(null,null)
p.y=7
p.z=b
p.cy=c
return H.aT(a,p)},
li:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.n5(a,b,r,c)
a.eC.set(r,s)
return s},
n5:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aB(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cY(a,"kE",[b])
else if(b===t.P||b===t.T)return t.bc}q=new H.ad(null,null)
q.y=8
q.z=b
q.cy=c
return H.aT(a,q)},
n9:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ad(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aT(a,s)
a.eC.set(q,r)
return r},
fy:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
n4:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cY:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fy(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ad(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aT(a,r)
a.eC.set(p,q)
return q},
k8:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fy(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ad(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aT(a,o)
a.eC.set(q,n)
return n},
lh:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fy(m)
if(j>0){s=l>0?",":""
r=H.fy(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.n4(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ad(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aT(a,o)
a.eC.set(q,r)
return r},
k9:function(a,b,c,d){var s,r=b.cy+("<"+H.fy(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.n6(a,b,c,r,d)
a.eC.set(r,s)
return s},
n6:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aU(a,b,r,0)
m=H.d5(a,c,r,0)
return H.k9(a,n,m,c!==m)}}l=new H.ad(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aT(a,l)},
ld:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
lf:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.mY(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.le(a,r,g,f,!1)
else if(q===46)r=H.le(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.aS(a.u,a.e,f.pop()))
break
case 94:f.push(H.n9(a.u,f.pop()))
break
case 35:f.push(H.cZ(a.u,5,"#"))
break
case 64:f.push(H.cZ(a.u,2,"@"))
break
case 126:f.push(H.cZ(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.k7(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.cY(p,n,o))
else{m=H.aS(p,a.e,n)
switch(m.y){case 11:f.push(H.k9(p,m,o,a.n))
break
default:f.push(H.k8(p,m,o))
break}}break
case 38:H.mZ(a,f)
break
case 42:l=a.u
f.push(H.lj(l,H.aS(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.ka(l,H.aS(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.li(l,H.aS(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.eY()
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
H.k7(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.lh(p,H.aS(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.k7(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.n0(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.aS(a.u,a.e,h)},
mY:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
le:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.lk(s,o.z)[p]
if(n==null)H.p('No "'+p+'" in "'+H.mE(o)+'"')
d.push(H.fz(s,o,n))}else d.push(p)
return m},
mZ:function(a,b){var s=b.pop()
if(0===s){b.push(H.cZ(a.u,1,"0&"))
return}if(1===s){b.push(H.cZ(a.u,4,"1&"))
return}throw H.c(P.fP("Unexpected extended operation "+H.d(s)))},
aS:function(a,b,c){if(typeof c=="string")return H.cY(a,c,a.sEA)
else if(typeof c=="number")return H.n_(a,b,c)
else return c},
k7:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aS(a,b,c[s])},
n0:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aS(a,b,c[s])},
n_:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.fP("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.fP("Bad index "+c+" for "+b.i(0)))},
M:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aB(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aB(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.M(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.M(a,b.z,c,d,e)
if(p===6){s=d.z
return H.M(a,b,c,s,e)}if(r===8){if(!H.M(a,b.z,c,d,e))return!1
return H.M(a,H.kX(a,b),c,d,e)}if(r===7){s=H.M(a,b.z,c,d,e)
return s}if(p===8){if(H.M(a,b,c,d.z,e))return!0
return H.M(a,b,c,H.kX(a,d),e)}if(p===7){s=H.M(a,b,c,d.z,e)
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
if(!H.M(a,k,c,j,e)||!H.M(a,j,e,k,c))return!1}return H.lq(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.lq(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.nq(a,b,c,d,e)}return!1},
lq:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.M(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.M(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.M(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.M(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.M(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
nq:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.M(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.lk(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.M(a,H.fz(a,b,l[p]),c,r[p],e))return!1
return!0},
jC:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aB(a))if(r!==7)if(!(r===6&&H.jC(a.z)))s=r===8&&H.jC(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
oq:function(a){var s
if(!H.aB(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
aB:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
lm:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ad:function ad(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
eY:function eY(){this.c=this.b=this.a=null},
eT:function eT(){},
cW:function cW(a){this.a=a},
lD:function(a){return v.mangledGlobalNames[a]},
ot:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kl:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fL:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.kj==null){H.om()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.c(P.l3("Return interceptor for "+H.d(s(a,o))))}q=a.constructor
p=q==null?null:q[J.kH()]
if(p!=null)return p
p=H.or(a)
if(p!=null)return p
if(typeof a=="function")return C.P
s=Object.getPrototypeOf(a)
if(s==null)return C.v
if(s===Object.prototype)return C.v
if(typeof q=="function"){Object.defineProperty(q,J.kH(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
kH:function(){var s=$.lb
return s==null?$.lb=v.getIsolateTag("_$dart_js"):s},
mj:function(a){if(!H.d2(a))throw H.c(P.kt(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.aL(a,0,4294967295,"length",null))
return J.mk(new Array(a))},
kG:function(a){if(!H.d2(a)||a<0)throw H.c(P.jH("Length must be a non-negative integer: "+H.d(a)))
return new Array(a)},
mk:function(a){return J.jS(a)},
jS:function(a){a.fixed$length=Array
return a},
ml:function(a,b){return J.db(a,b)},
d6:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ch.prototype
return J.cg.prototype}if(typeof a=="string")return J.ap.prototype
if(a==null)return J.ci.prototype
if(typeof a=="boolean")return J.hs.prototype
if(a.constructor==Array)return J.a8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ah.prototype
return a}if(a instanceof P.J)return a
return J.fL(a)},
og:function(a){if(typeof a=="number")return J.bb.prototype
if(typeof a=="string")return J.ap.prototype
if(a==null)return a
if(a.constructor==Array)return J.a8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ah.prototype
return a}if(a instanceof P.J)return a
return J.fL(a)},
bp:function(a){if(typeof a=="string")return J.ap.prototype
if(a==null)return a
if(a.constructor==Array)return J.a8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ah.prototype
return a}if(a instanceof P.J)return a
return J.fL(a)},
jx:function(a){if(a==null)return a
if(a.constructor==Array)return J.a8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ah.prototype
return a}if(a instanceof P.J)return a
return J.fL(a)},
oh:function(a){if(typeof a=="number")return J.bb.prototype
if(typeof a=="string")return J.ap.prototype
if(a==null)return a
if(!(a instanceof P.J))return J.bm.prototype
return a},
kh:function(a){if(typeof a=="string")return J.ap.prototype
if(a==null)return a
if(!(a instanceof P.J))return J.bm.prototype
return a},
aA:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ah.prototype
return a}if(a instanceof P.J)return a
return J.fL(a)},
kq:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.og(a).u(a,b)},
L:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.d6(a).q(a,b)},
da:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.op(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bp(a).h(a,b)},
lW:function(a,b,c){return J.aA(a).fj(a,b,c)},
lX:function(a,b,c,d){return J.aA(a).fE(a,b,c,d)},
db:function(a,b){return J.oh(a).aN(a,b)},
jG:function(a,b){return J.bp(a).w(a,b)},
fN:function(a,b){return J.jx(a).D(a,b)},
lY:function(a,b){return J.jx(a).F(a,b)},
lZ:function(a){return J.aA(a).gfJ(a)},
m_:function(a){return J.aA(a).gd_(a)},
m0:function(a){return J.aA(a).gd1(a)},
Y:function(a){return J.d6(a).gR(a)},
b0:function(a){return J.jx(a).gL(a)},
b1:function(a){return J.bp(a).gl(a)},
kr:function(a){return J.jx(a).hl(a)},
m1:function(a,b){return J.aA(a).ho(a,b)},
m2:function(a,b,c){return J.kh(a).b8(a,b,c)},
m3:function(a){return J.kh(a).hx(a)},
Z:function(a){return J.d6(a).i(a)},
a:function a(){},
hs:function hs(){},
ci:function ci(){},
bc:function bc(){},
dV:function dV(){},
bm:function bm(){},
ah:function ah(){},
a8:function a8(){},
dz:function dz(){},
U:function U(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bb:function bb(){},
ch:function ch(){},
cg:function cg(){},
ap:function ap(){}},P={
mO:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.o4()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bW(new P.j5(q),1)).observe(s,{childList:true})
return new P.j4(q,s,r)}else if(self.setImmediate!=null)return P.o5()
return P.o6()},
mP:function(a){self.scheduleImmediate(H.bW(new P.j6(a),0))},
mQ:function(a){self.setImmediate(H.bW(new P.j7(a),0))},
mR:function(a){P.k1(C.j,a)},
k1:function(a,b){var s=C.c.Z(a.a,1000)
return P.n1(s<0?0:s,b)},
l1:function(a,b){var s=C.c.Z(a.a,1000)
return P.n2(s<0?0:s,b)},
n1:function(a,b){var s=new P.cV()
s.e_(a,b)
return s},
n2:function(a,b){var s=new P.cV()
s.e0(a,b)
return s},
pj:function(a){return new P.bT(a,1)},
mU:function(){return C.W},
mV:function(a){return new P.bT(a,3)},
nx:function(a){return new P.cS(a)},
nT:function(){var s,r
for(s=$.bU;s!=null;s=$.bU){$.d4=null
r=s.b
$.bU=r
if(r==null)$.d3=null
s.a.$0()}},
o_:function(){$.ke=!0
try{P.nT()}finally{$.d4=null
$.ke=!1
if($.bU!=null)$.kp().$1(P.lu())}},
nY:function(a){var s=new P.eJ(a),r=$.d3
if(r==null){$.bU=$.d3=s
if(!$.ke)$.kp().$1(P.lu())}else $.d3=r.b=s},
nZ:function(a){var s,r,q,p=$.bU
if(p==null){P.nY(a)
$.d4=$.d3
return}s=new P.eJ(a)
r=$.d4
if(r==null){s.b=p
$.bU=$.d4=s}else{q=r.b
s.b=q
$.d4=r.b=s
if(q==null)$.d3=s}},
l0:function(a,b){var s=$.aj
if(s===C.e)return P.k1(a,b)
return P.k1(a,s.fK(b))},
mL:function(a,b){var s=$.aj
if(s===C.e)return P.l1(a,b)
return P.l1(a,s.cX(b,t.l))},
lr:function(a,b,c,d,e){P.nZ(new P.ju(d,e))},
nV:function(a,b,c,d){var s,r=$.aj
if(r===c)return d.$0()
$.aj=c
s=r
try{r=d.$0()
return r}finally{$.aj=s}},
nW:function(a,b,c,d,e){var s,r=$.aj
if(r===c)return d.$1(e)
$.aj=c
s=r
try{r=d.$1(e)
return r}finally{$.aj=s}},
j5:function j5(a){this.a=a},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
cV:function cV(){this.c=0},
jm:function jm(a,b){this.a=a
this.b=b},
jl:function jl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bT:function bT(a,b){this.a=a
this.b=b},
bo:function bo(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cS:function cS(a){this.a=a},
eJ:function eJ(a){this.a=a
this.b=null},
eb:function eb(){},
ec:function ec(){},
cA:function cA(){},
jp:function jp(){},
ju:function ju(a,b){this.a=a
this.b=b},
je:function je(){},
jf:function jf(a,b){this.a=a
this.b=b},
jg:function jg(a,b,c){this.a=a
this.b=b
this.c=c},
mo:function(a,b,c){return H.oe(a,new H.v(b.as("@<0>").cw(c).as("v<1,2>")))},
kI:function(a,b){return new H.v(a.as("@<0>").cw(b).as("v<1,2>"))},
ck:function(a){return new P.cG(a.as("cG<0>"))},
k6:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
mX:function(a,b){var s=new P.cH(a,b)
s.c=a.e
return s},
mh:function(a,b,c){var s,r
if(P.kf(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.a1.push(a)
try{P.nw(a,s)}finally{if(0>=$.a1.length)return H.e($.a1,-1)
$.a1.pop()}r=P.kZ(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
jQ:function(a,b,c){var s,r
if(P.kf(a))return b+"..."+c
s=new P.aN(b)
$.a1.push(a)
try{r=s
r.a=P.kZ(r.a,a,", ")}finally{if(0>=$.a1.length)return H.e($.a1,-1)
$.a1.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
kf:function(a){var s,r
for(s=$.a1.length,r=0;r<s;++r)if(a===$.a1[r])return!0
return!1},
nw:function(a,b){var s,r,q,p,o,n,m,l=a.gL(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.t())return
s=H.d(l.gC(l))
b.push(s)
k+=s.length+2;++j}if(!l.t()){if(j<=5)return
if(0>=b.length)return H.e(b,-1)
r=b.pop()
if(0>=b.length)return H.e(b,-1)
q=b.pop()}else{p=l.gC(l);++j
if(!l.t()){if(j<=4){b.push(H.d(p))
return}r=H.d(p)
if(0>=b.length)return H.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gC(l);++j
for(;l.t();p=o,o=n){n=l.gC(l);++j
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
kJ:function(a,b){var s,r,q=P.ck(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.k)(a),++r)q.n(0,b.a(a[r]))
return q},
kK:function(a){var s,r={}
if(P.kf(a))return"{...}"
s=new P.aN("")
try{$.a1.push(a)
s.a+="{"
r.a=!0
J.lY(a,new P.hA(r,s))
s.a+="}"}finally{if(0>=$.a1.length)return H.e($.a1,-1)
$.a1.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cG:function cG(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jd:function jd(a){this.a=a
this.c=this.b=null},
cH:function cH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cf:function cf(){},
cl:function cl(){},
C:function C(){},
dF:function dF(){},
hA:function hA(a,b){this.a=a
this.b=b},
as:function as(){},
cO:function cO(){},
cI:function cI(){},
di:function di(){},
dk:function dk(){},
hc:function hc(){},
hq:function hq(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
hp:function hp(a){this.a=a},
iQ:function iQ(){},
iR:function iR(){},
jn:function jn(a){this.b=0
this.c=a},
mg:function(a){if(a instanceof H.bu)return a.i(0)
return"Instance of '"+H.d(H.dZ(a))+"'"},
jV:function(a,b,c){var s,r=c?J.kG(a):J.mj(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
jW:function(a,b){var s,r=[]
for(s=J.b0(a);s.t();)r.push(s.gC(s))
if(b)return r
return J.jS(r)},
k0:function(a){var s,r=a,q=r.length,p=P.jY(0,null,q)
if(typeof p!=="number")return p.aa()
s=p<q
return H.mA(s?r.slice(0,p):r)},
mC:function(a){return new H.ht(a,H.mm(a,!1,!0,!1,!1,!1))},
kZ:function(a,b,c){var s=J.b0(b)
if(!s.t())return a
if(c.length===0){do a+=H.d(s.gC(s))
while(s.t())}else{a+=H.d(s.gC(s))
for(;s.t();)a=a+c+H.d(s.gC(s))}return a},
ll:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.i){s=$.lV().b
s=s.test(b)}else s=!1
if(s)return b
r=C.J.fO(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.e(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.jX(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
md:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
me:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dn:function(a){if(a>=10)return""+a
return"0"+a},
kA:function(a){return new P.b6(1000*a)},
hf:function(a){if(typeof a=="number"||H.lp(a)||null==a)return J.Z(a)
if(typeof a=="string")return JSON.stringify(a)
return P.mg(a)},
fP:function(a){return new P.de(a)},
jH:function(a){return new P.a2(!1,null,null,a)},
kt:function(a,b,c){return new P.a2(!0,a,b,c)},
m4:function(a,b){if(a==null)throw H.c(new P.a2(!1,null,b,"Must not be null"))
return a},
e_:function(a,b){return new P.bK(null,null,!0,a,b,"Value not in range")},
aL:function(a,b,c,d,e){return new P.bK(b,c,!0,a,d,"Invalid value")},
jY:function(a,b,c){var s
if(typeof c!=="number")return H.q(c)
s=a>c
if(s)throw H.c(P.aL(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.q(c)
s=b>c}else s=!0
if(s)throw H.c(P.aL(b,a,c,"end",null))
return b}return c},
kU:function(a,b){if(a<0)throw H.c(P.aL(a,0,null,b,null))
return a},
H:function(a,b,c,d,e){var s=e==null?J.b1(b):e
return new P.dx(s,!0,a,c,"Index out of range")},
w:function(a){return new P.eC(a)},
l3:function(a){return new P.ez(a)},
k_:function(a){return new P.bM(a)},
b5:function(a){return new P.dj(a)},
o:function(a){return new P.eV(a)},
kn:function(a){H.ot(a)},
az:function az(){},
a7:function a7(a,b){this.a=a
this.b=b},
X:function X(){},
b6:function b6(a){this.a=a},
h8:function h8(){},
h9:function h9(){},
G:function G(){},
de:function de(a){this.a=a},
dQ:function dQ(){},
a2:function a2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bK:function bK(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dx:function dx(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eC:function eC(a){this.a=a},
ez:function ez(a){this.a=a},
bM:function bM(a){this.a=a},
dj:function dj(a){this.a=a},
dT:function dT(){},
cy:function cy(){},
dl:function dl(a){this.a=a},
eV:function eV(a){this.a=a},
hl:function hl(a,b){this.a=a
this.b=b},
hn:function hn(){},
r:function r(){},
f:function f(){},
dy:function dy(){},
ar:function ar(){},
dE:function dE(){},
ab:function ab(){},
O:function O(){},
J:function J(){},
K:function K(){},
aN:function aN(a){this.a=a},
ob:function(a){var s
if(t.s.b(a)){s=J.m0(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.cX(a.data,a.height,a.width)},
oa:function(a){if(a instanceof P.cX)return{data:a.a,height:a.b,width:a.c}
return a},
aW:function(a){var s,r,q,p,o
if(a==null)return null
s=P.kI(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.k)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
o9:function(a){var s={}
a.F(0,new P.jv(s))
return s},
cX:function cX(a,b,c){this.a=a
this.b=b
this.c=c},
jv:function jv(a){this.a=a},
ds:function ds(a,b){this.a=a
this.b=b},
hj:function hj(){},
hk:function hk(){},
jc:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mW:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
fe:function fe(){},
ac:function ac(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bB:function bB(){},
dC:function dC(){},
bH:function bH(){},
dR:function dR(){},
i0:function i0(){},
bL:function bL(){},
ed:function ed(){},
j:function j(){},
bO:function bO(){},
em:function em(){},
f2:function f2(){},
f3:function f3(){},
fa:function fa(){},
fb:function fb(){},
fn:function fn(){},
fo:function fo(){},
fw:function fw(){},
fx:function fx(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(a){this.a=a},
df:function df(){},
aE:function aE(){},
dS:function dS(){},
eK:function eK(){},
e1:function e1(){},
e9:function e9(){},
fj:function fj(){},
fk:function fk(){}},W={
ks:function(){var s=document.createElement("a")
return s},
jK:function(){var s=document.createElement("canvas")
return s},
mf:function(a,b,c){var s,r=document.body
r.toString
s=C.m.ad(r,a,b,c)
s.toString
r=new H.bn(new W.T(s),new W.ha())
return t.h.a(r.gaE(r))},
hb:function(a){return"wheel"},
c9:function(a){var s,r,q="element tag unavailable"
try{s=J.aA(a)
if(typeof s.gdA(a)=="string")q=s.gdA(a)}catch(r){H.aC(r)}return q},
kF:function(a){var s=document.createElement("img")
s.src=a
return s},
jb:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lc:function(a,b,c,d){var s=W.jb(W.jb(W.jb(W.jb(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
N:function(a,b,c,d){var s=W.ls(new W.ja(c),t.D)
if(s!=null&&!0)J.lX(a,b,s,!1)
return new W.eU(a,b,s,!1)},
la:function(a){var s=W.ks(),r=window.location
s=new W.bS(new W.jh(s,r))
s.dW(a)
return s},
mS:function(a,b,c,d){return!0},
mT:function(a,b,c,d){var s,r=d.a,q=r.a
q.href=c
s=q.hostname
r=r.b
if(!(s==r.hostname&&q.port==r.port&&q.protocol==r.protocol))if(s==="")if(q.port===""){r=q.protocol
r=r===":"||r===""}else r=!1
else r=!1
else r=!0
return r},
lg:function(){var s=t.N
s=new W.fr(P.kJ(C.t,s),P.ck(s),P.ck(s),P.ck(s),null)
s.dZ(null,new H.cp(C.t,new W.jk()),["TEMPLATE"],null)
return s},
ls:function(a,b){var s=$.aj
if(s===C.e)return a
return s.cX(a,b)},
m:function m(){},
fO:function fO(){},
dc:function dc(){},
dd:function dd(){},
bs:function bs(){},
dg:function dg(){},
b2:function b2(){},
b3:function b3(){},
ag:function ag(){},
h0:function h0(){},
F:function F(){},
c4:function c4(){},
h1:function h1(){},
a6:function a6(){},
am:function am(){},
h2:function h2(){},
h3:function h3(){},
h4:function h4(){},
c5:function c5(){},
h6:function h6(){},
c6:function c6(){},
c7:function c7(){},
dp:function dp(){},
h7:function h7(){},
eL:function eL(a,b){this.a=a
this.b=b},
z:function z(){},
ha:function ha(){},
h:function h(){},
b:function b(){},
b7:function b7(){},
dq:function dq(){},
dr:function dr(){},
dt:function dt(){},
b8:function b8(){},
ho:function ho(){},
b9:function b9(){},
ba:function ba(){},
bA:function bA(){},
bd:function bd(){},
hy:function hy(){},
hQ:function hQ(){},
hR:function hR(){},
hS:function hS(a){this.a=a},
hT:function hT(){},
hU:function hU(a){this.a=a},
bf:function bf(){},
dI:function dI(){},
a3:function a3(){},
T:function T(a){this.a=a},
u:function u(){},
cv:function cv(){},
bh:function bh(){},
dX:function dX(){},
i6:function i6(){},
i7:function i7(a){this.a=a},
e3:function e3(){},
aM:function aM(){},
e7:function e7(){},
bi:function bi(){},
e8:function e8(){},
bj:function bj(){},
il:function il(){},
im:function im(a){this.a=a},
aO:function aO(){},
cz:function cz(){},
ee:function ee(){},
ef:function ef(){},
bN:function bN(){},
aP:function aP(){},
ai:function ai(){},
eg:function eg(){},
eh:function eh(){},
iz:function iz(){},
bk:function bk(){},
bl:function bl(){},
el:function el(){},
iD:function iD(){},
ax:function ax(){},
iP:function iP(){},
eF:function eF(){},
aR:function aR(){},
bQ:function bQ(){},
bR:function bR(){},
eM:function eM(){},
cF:function cF(){},
eZ:function eZ(){},
cJ:function cJ(){},
fi:function fi(){},
fp:function fp(){},
j8:function j8(){},
j9:function j9(a){this.a=a},
jO:function jO(a,b){this.a=a
this.$ti=b},
eU:function eU(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ja:function ja(a){this.a=a},
k5:function k5(a){this.$ti=a},
bS:function bS(a){this.a=a},
E:function E(){},
cw:function cw(a){this.a=a},
hX:function hX(a){this.a=a},
hW:function hW(a,b,c){this.a=a
this.b=b
this.c=c},
cP:function cP(){},
ji:function ji(){},
jj:function jj(){},
fr:function fr(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jk:function jk(){},
fq:function fq(){},
cd:function cd(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aa:function aa(){},
jh:function jh(a,b){this.a=a
this.b=b},
fA:function fA(a){this.a=a
this.b=!1},
jo:function jo(a){this.a=a},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eW:function eW(){},
eX:function eX(){},
f0:function f0(){},
f1:function f1(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fc:function fc(){},
fd:function fd(){},
ff:function ff(){},
cQ:function cQ(){},
cR:function cR(){},
fg:function fg(){},
fh:function fh(){},
fm:function fm(){},
fs:function fs(){},
ft:function ft(){},
cT:function cT(){},
cU:function cU(){},
fu:function fu(){},
fv:function fv(){},
fB:function fB(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(){},
fK:function fK(){}},K={
I:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.o("The given low and high character strings for a Range must have one and only one characters."))
s=C.b.bb(a,0)
r=C.b.bb(b,0)
if(s>r){q=r
r=s
s=q}return new K.i1(s,r)},
n:function(a){var s=new K.i8()
s.dU(a)
return s},
aD:function aD(){},
dv:function dv(){},
a_:function a_(){this.a=null},
i1:function i1(a,b){this.a=a
this.b=b},
i8:function i8(){this.a=null}},L={
iB:function(){var s=new L.iA()
s.a=new H.v(t.V)
s.b=new H.v(t.w)
s.c=P.ck(t.bw)
return s},
ea:function ea(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ej:function ej(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(a){this.b=a
this.c=null},
iA:function iA(){var _=this
_.d=_.c=_.b=_.a=null},
iE:function iE(a){this.b=a
this.a=this.c=null}},O={
jL:function(){var s=new O.bv()
s.ba()
return s},
bv:function bv(){this.c=this.b=this.a=null},
cr:function cr(){this.b=this.a=null},
dG:function dG(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hI:function hI(a,b){this.a=a
this.b=b},
hJ:function hJ(){},
hK:function hK(a,b){this.a=a
this.b=b},
hL:function hL(){},
hM:function hM(a,b){this.a=a
this.b=b},
hN:function hN(){},
hO:function hO(a,b){this.a=a
this.b=b},
hP:function hP(){},
hC:function hC(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cq:function cq(){},
hD:function hD(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
at:function at(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hF:function hF(){var _=this
_.e=_.d=_.c=_.b=null},
hG:function hG(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hH:function hH(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
e5:function e5(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iq:function iq(){}},E={
kD:function(){var s,r=new E.bx()
r.a=""
r.b=!0
s=O.jL()
r.y=s
s.aQ(r.gh6(),r.gh9())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sbs(0,null)
return r},
l7:function(){if(J.jG(window.navigator.vendor,"Google"))return C.A
if(J.jG(window.navigator.userAgent,"Firefox"))return C.n
var s=window.navigator.appVersion
if(J.bp(s).w(s,"Trident")||C.b.w(s,"Edge"))return C.o
if(J.jG(window.navigator.appName,"Microsoft"))return C.o
return C.B},
l8:function(){var s=window.navigator.appVersion
if(J.bp(s).w(s,"Win"))return C.T
if(C.b.w(s,"Mac"))return C.u
if(C.b.w(s,"Linux"))return C.U
return C.V},
mD:function(a,b){var s=new E.i2(a)
s.dT(a,b)
return s},
mK:function(a,b,c,d,e){var s,r
if(t.B.b(a))return E.l_(a,!0,!0,!0,!1)
s=W.jK()
r=s.style
r.width="100%"
r.height="100%"
J.m_(a).n(0,s)
return E.l_(s,!0,!0,!0,!1)},
l_:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.ei(),n=t.z,m=C.f.cj(a,"webgl2",P.mo(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.p(P.o("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.mD(m,a)
n=new T.iv(m)
n.b=m.getParameter(3379)
n.c=m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.eD(a)
s=new X.hv()
s.c=new X.a9(!1,!1,!1)
s.d=P.ck(t.e)
n.b=s
s=new X.hV(n)
s.f=0
s.r=V.aJ()
s.x=V.aJ()
s.ch=s.Q=1
n.c=s
s=new X.hz(n)
s.r=0
s.x=V.aJ()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.iC(n)
s.f=V.aJ()
s.r=V.aJ()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=[]
s=$.hd
n.Q=(s==null?$.hd=new E.eS(E.l7(),E.l8()):s).a===C.n?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.N(q,"contextmenu",n.geE(),!1))
n.z.push(W.N(a,"focus",n.geK(),!1))
n.z.push(W.N(a,"blur",n.gew(),!1))
n.z.push(W.N(q,"keyup",n.geO(),!1))
n.z.push(W.N(q,"keydown",n.geM(),!1))
n.z.push(W.N(a,"mousedown",n.geS(),!1))
n.z.push(W.N(a,"mouseup",n.geW(),!1))
n.z.push(W.N(a,p,n.geU(),!1))
r=n.z
W.hb(a)
W.hb(a)
r.push(W.N(a,W.hb(a),n.geY(),!1))
n.z.push(W.N(q,p,n.geG(),!1))
n.z.push(W.N(q,"mouseup",n.geI(),!1))
n.z.push(W.N(q,"pointerlockchange",n.gf_(),!1))
n.z.push(W.N(a,"touchstart",n.gff(),!1))
n.z.push(W.N(a,"touchend",n.gfb(),!1))
n.z.push(W.N(a,"touchmove",n.gfd(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.a7(Date.now(),!1)
o.db=0
o.cJ()
return o},
fW:function fW(){},
bx:function bx(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bt:function bt(a){this.b=a},
bI:function bI(a){this.b=a},
eS:function eS(a,b){this.a=a
this.b=b},
i2:function i2(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i3:function i3(a){this.a=a},
i4:function i4(a){this.a=a},
i5:function i5(a){this.a=a},
ei:function ei(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
iy:function iy(a){this.a=a}},Z={
k4:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.d0(c)),35044)
a.bindBuffer(b,null)
return new Z.eG(b,s)},
af:function(a){return new Z.aQ(a)},
eG:function eG(a,b){this.a=a
this.b=b},
fX:function fX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
eH:function eH(a){this.a=a},
c0:function c0(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
ce:function ce(a,b,c){this.a=a
this.b=b
this.c=c},
aQ:function aQ(a){this.a=a}},D={
A:function(){var s=new D.by()
s.d=0
return s},
fY:function fY(){},
by:function by(){var _=this
_.d=_.c=_.b=_.a=null},
hg:function hg(a){this.a=a},
hh:function hh(a){this.a=a},
Q:function Q(){this.b=null},
an:function an(){this.b=null},
ao:function ao(){this.b=null},
x:function x(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
bw:function bw(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aq:function aq(){},
cj:function cj(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null}},X={dh:function dh(a,b){this.a=a
this.b=b},dB:function dB(a,b){this.a=a
this.b=b},hv:function hv(){var _=this
_.d=_.c=_.b=_.a=null},cn:function cn(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hz:function hz(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},bE:function bE(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hV:function hV(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bF:function bF(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},dY:function dY(){},cB:function cB(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iC:function iC(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},eD:function eD(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jP:function(a){var s=new X.hm(),r=new V.aF(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.kW
if(r==null){r=V.kV(0,0,1,1)
$.kW=r}s.r=r
return s},
kO:function(a){var s,r,q=new X.dU()
q.c=1.0471975511965976
q.d=0.1
q.e=2000
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gp().n(0,q.gey())
r=new D.x("mover",s,q.b)
r.b=!0
q.am(r)}r=q.c
$.B().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
r=new D.x("fov",r,1.0471975511965976)
r.b=!0
q.am(r)}r=q.d
$.B().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
r=new D.x("near",r,0.1)
r.b=!0
q.am(r)}r=q.e
$.B().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
r=new D.x("far",r,2000)
r.b=!0
q.am(r)}return q},
jJ:function jJ(){},
hm:function hm(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hr:function hr(){this.b=this.a=null},
dU:function dU(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
io:function io(){}},V={
fZ:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aF(s,r,q,1)},
kk:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
oz:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.dF(a-b,s)
return(a<0?a+s:a)+b},
D:function(a,b,c){if(a==null)return C.b.af("null",c)
$.B().toString
return C.b.af(C.d.dC(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bY:function(a,b,c){var s,r,q,p,o,n,m=[]
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.k)(a),++q){p=V.D(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.e(m,o)
s=C.b.af(m[o],r)
n=m.length
if(o>=n)return H.e(m,o)
m[o]=s}return m},
km:function(a){return C.d.hu(Math.pow(2,C.O.c2(Math.log(H.o7(a))/Math.log(2))))},
bD:function(){var s=$.kM
return s==null?$.kM=V.au(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
au:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kL:function(a,b,c){var s=c.I(),r=b.b0(s).I(),q=s.b0(r),p=new V.y(a.a,a.b,a.c),o=r.M(0).a0(p),n=q.M(0).a0(p),m=s.M(0).a0(p)
return V.au(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
aJ:function(){var s=$.kQ
return s==null?$.kQ=new V.a4(0,0):s},
kR:function(){var s=$.av
return s==null?$.av=new V.R(0,0,0):s},
kV:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e0(a,b,c,d)},
eE:function(){var s=$.l6
return s==null?$.l6=new V.y(0,0,0):s},
mM:function(){var s=$.iS
return s==null?$.iS=new V.y(-1,0,0):s},
k3:function(){var s=$.iT
return s==null?$.iT=new V.y(0,1,0):s},
mN:function(){var s=$.iU
return s==null?$.iU=new V.y(0,0,1):s},
P:function P(a,b,c){this.a=a
this.b=b
this.c=c},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
he:function he(){},
dH:function dH(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bC:function bC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a4:function a4(a,b){this.a=a
this.b=b},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e0:function e0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a0:function a0(a,b){this.a=a
this.b=b},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
ou:function(a){P.mL(C.L,new V.jF(a))},
mG:function(a){var s=new V.id()
s.dV(a,!0)
return s},
b4:function b4(){},
jF:function jF(a){this.a=a},
dm:function dm(a){var _=this
_.a=a
_.d=_.c=_.b=null},
du:function du(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dw:function dw(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dW:function dW(a){var _=this
_.a=a
_.d=_.c=_.b=null},
id:function id(){this.b=this.a=null},
ig:function ig(a){this.a=a},
ie:function ie(a){this.a=a},
ih:function ih(a){this.a=a}},U={
jM:function(){var s=new U.h_()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
kz:function(a){var s=new U.c2()
s.a=a
return s},
h_:function h_(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
c2:function c2(){this.b=this.a=null},
bz:function bz(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
S:function S(){},
cC:function cC(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
cD:function cD(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cE:function cE(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={c1:function c1(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},c3:function c3(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ca:function ca(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ae:function ae(){}},A={
mq:function(a,b){var s=a.b1,r=new A.hB(b,s)
r.cq(b,s)
r.dS(a,b)
return r},
mr:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="MaterialLight_"+a5.gak(a5)+a6.gak(a6)+a7.gak(a7)+a8.gak(a8)+a9.gak(a9)+b0.gak(b0)+b1.gak(b1)+b2.gak(b2)+b3.gak(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.k)(b4),++r)a+="_"+H.d(b4[r].a)}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.k)(b5),++r)a+="_"+H.d(b5[r].a)}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.k)(b6),++r)a+="_"+H.d(b6[r].a)}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.k)(b7),++r)a+="_"+H.d(b7[r].a)}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
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
b=$.ak()
if(h){s=$.aZ()
b=new Z.aQ(b.a|s.a)}if(g){s=$.aY()
b=new Z.aQ(b.a|s.a)}if(f){s=$.b_()
b=new Z.aQ(b.a|s.a)}if(e){s=$.aX()
b=new Z.aQ(b.a|s.a)}return new A.hE(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
js:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
jt:function(a,b,c){var s,r="Txt, txt2D).rgb;\n"
A.js(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.fM(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}a.a=s+"}\n"},
nC:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.js(b,r,"emission")
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
ny:function(a,b){var s,r=a.b
if(!(r.a||r.b||!1))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.jt(b,r,"ambient")
b.a+="\n"},
nA:function(a,b){var s,r=a.c
if(!(r.a||r.b||!1))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.jt(b,r,"diffuse")
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
nD:function(a,b){var s,r=a.d
if(!(r.a||r.b||!1))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.jt(b,r,"invDiffuse")
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
nJ:function(a,b){var s,r=a.e
if(!(r.a||r.b||!1))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.jt(b,r,"specular")
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
nF:function(a,b){var s,r,q
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
nH:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.js(b,r,"reflect")
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
nI:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.js(b,r,"refract")
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
nz:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.d(s)
q=A.fM(r)
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
if(typeof s!=="number")return s.ag()
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
nB:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+H.d(s)
q=A.fM(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.ag()
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
nG:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.d(s)
q=A.fM(r)
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
if(typeof s!=="number")return s.ag()
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
nK:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.d(s)
q=A.fM(r)
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
if(typeof s!=="number")return s.ag()
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
if(m){s=$.hd
if(s==null)s=$.hd=new E.eS(E.l7(),E.l8())
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
nE:function(a,b){var s,r
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
nL:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.aN("")
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
A.nC(a,h)
A.ny(a,h)
A.nA(a,h)
A.nD(a,h)
A.nJ(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.nH(a,h)
A.nI(a,h)}A.nF(a,h)
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
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.k)(o),++m)A.nz(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.k)(o),++m)A.nB(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.k)(o),++m)A.nG(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.k)(o),++m)A.nK(a,o[m],h)
A.nE(a,h)}o=h.a+="// === Main ===\n"
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
for(s=a.z,r=s.length,m=0;m<s.length;s.length===r||(0,H.k)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.e(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.ap(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.k)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.e(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.ap(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.k)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.e(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.ap(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.k)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.e(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.ap(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}s=a.a
if(s.a||s.b||!1)l.push("emissionColor()")
s=a.r
if(s.a||s.b||!1)l.push("reflect(refl)")
s=a.x
if(s.a||s.b||!1)l.push("refract(refl)")
if(l.length<=0)l.push("vec3(0.0, 0.0, 0.0)")
s=h.a+="   vec4 objClr = vec4("+C.a.k(l," + ")+", alpha);\n"
if(q)s=h.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
h.a=s
s=h.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
nM:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.aO+"];\n"
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
nO:function(a,b){var s
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
nN:function(a,b){var s
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
nQ:function(a,b){var s,r
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
nR:function(a,b){var s,r
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
nP:function(a,b){var s
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
nS:function(a,b){var s
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
fM:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.ap(a,1)},
k2:function(a,b,c,d,e){var s=new A.iI(a,c,e)
s.f=d
P.jV(d,0,!1)
return s},
fQ:function fQ(a,b,c){this.a=a
this.b=b
this.c=c},
fR:function fR(a){this.a=a},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
hB:function hB(a,b){var _=this
_.hH=_.d6=_.bi=_.b1=_.aO=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hP=_.hO=_.hN=_.c1=_.c0=_.c_=_.bZ=_.bY=_.bX=_.bW=_.bV=_.hM=_.dj=_.di=_.hL=_.dh=_.dg=_.df=_.hK=_.de=_.dd=_.dc=_.hJ=_.da=_.d9=_.hI=_.d8=_.d7=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fV:function fV(a,b){this.a=a
this.b=b},
h5:function h5(a,b){this.a=a
this.b=b},
i_:function i_(a,b){this.a=a
this.b=b},
ij:function ij(a,b){this.a=a
this.b=b},
hE:function hE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.aO=b5
_.b1=b6
_.bi=b7},
er:function er(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
es:function es(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ev:function ev(a,b,c,d,e,f,g,h,i,j){var _=this
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
ey:function ey(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
e4:function e4(){},
ii:function ii(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
iH:function iH(){},
iN:function iN(a){this.a=a},
eo:function eo(a,b,c){this.a=a
this.c=b
this.d=c},
iK:function iK(a,b,c){this.a=a
this.c=b
this.d=c},
iL:function iL(a,b,c){this.a=a
this.c=b
this.d=c},
iM:function iM(a,b,c){this.a=a
this.c=b
this.d=c},
iI:function iI(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
en:function en(a,b,c){this.a=a
this.c=b
this.d=c},
iJ:function iJ(a,b,c){this.a=a
this.c=b
this.d=c},
ep:function ep(a,b,c){this.a=a
this.c=b
this.d=c},
eq:function eq(a,b,c){this.a=a
this.c=b
this.d=c},
iO:function iO(a,b,c){this.a=a
this.c=b
this.d=c},
et:function et(a,b,c){this.a=a
this.c=b
this.d=c},
eu:function eu(a,b,c){this.a=a
this.c=b
this.d=c},
ew:function ew(a,b,c){this.a=a
this.c=b
this.d=c},
ex:function ex(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jr:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
d_:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.y(f,e+a3,d+a4)
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
h.d=g}k=F.jr(g)
j=F.jr(f)
i=F.ow(a1,a2,new F.jq(h,F.jr(e),F.jr(d),j,k,a0),b)
if(i!=null)a.h5(i)},
ow:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.jZ()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.iW(e,e,new V.aF(n,0,0,1),e,e,new V.a4(p,1),e,e,0)
o.n(0,m)
c.$3(m,p,0)
r.push(m.bT(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.iW(e,e,new V.aF(h,g,f,1),e,e,new V.a4(p,k),e,e,0)
i.n(0,m)
c.$3(m,p,l)
r.push(m.bT(d))}}s.d.fG(a+1,b+1,r)
return s},
cb:function(a,b,c){var s=new F.hi(),r=a.a
if(r==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.p(P.o("May not create a face with vertices attached to different shapes."))
s.a=a
a.d.b.push(s)
s.b=b
b.d.c.push(s)
s.c=c
c.d.d.push(s)
s.a.a.d.b.push(s)
s.a.a.a1()
return s},
mn:function(a,b){var s=new F.hw(),r=a.a
if(r==null)H.p(P.o("May not create a line with a start vertex which is not attached to a shape."))
if(r!=b.a)H.p(P.o("May not create a line with vertices attached to different shapes."))
s.a=a
a.c.b.push(s)
s.b=b
b.c.c.push(s)
s.a.a.c.b.push(s)
s.a.a.a1()
return s},
jZ:function(){var s=new F.i9(),r=new F.iX(s)
r.b=!1
r.c=[]
s.a=r
r=new F.ic(s)
r.b=[]
s.b=r
r=new F.ib(s)
r.b=[]
s.c=r
r=new F.ia(s)
r.b=[]
s.d=r
return s},
iW:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.iV(),p=new F.j1()
p.b=[]
q.b=p
p=new F.j0()
p.b=[]
p.c=[]
q.c=p
p=new F.iY()
p.b=[]
p.c=[]
p.d=[]
q.d=p
h=$.lR()
q.e=0
p=$.ak()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.aZ().a)!==0?e:r
q.x=(s&$.aY().a)!==0?b:r
q.y=(s&$.b_().a)!==0?f:r
q.z=(s&$.br().a)!==0?g:r
q.Q=(s&$.lS().a)!==0?c:r
q.ch=(s&$.bZ().a)!==0?i:0
q.cx=(s&$.aX().a)!==0?a:r
return q},
jq:function jq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hi:function hi(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hw:function hw(){this.b=this.a=null},
hZ:function hZ(){this.a=null},
i9:function i9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ia:function ia(a){this.a=a
this.b=null},
ib:function ib(a){this.a=a
this.b=null},
ic:function ic(a){this.a=a
this.b=null},
iV:function iV(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j3:function j3(a){this.a=a},
j2:function j2(a){this.a=a},
iX:function iX(a){this.a=a
this.c=this.b=null},
iY:function iY(){this.d=this.c=this.b=null},
iZ:function iZ(a,b){this.a=a
this.b=b},
j_:function j_(a,b){this.a=a
this.b=b},
j0:function j0(){this.c=this.b=null},
j1:function j1(){this.b=null}},T={ir:function ir(){},is:function is(){},it:function it(){var _=this
_.y=_.d=_.c=_.b=_.a=null},iu:function iu(){var _=this
_.e=_.d=_.c=_.b=_.a=null},iv:function iv(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},ix:function ix(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},iw:function iw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},Q={
ly:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7="testCanvas",a8=null,a9=34067,b0="modifiers",b1=V.mG("Test 019"),b2=W.jK()
b2.className="pageLargeCanvas"
b2.id=a7
b1.a.appendChild(b2)
b1.cR(["A test of the Material Lighting shader with an alpha texture. ","There are no mapped reflections, this is actually transparent."])
b1.cR(["\xab[Back to Tests|../]"])
s=document.getElementById(a7)
if(s==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
r=E.mK(s,!0,!0,!0,!1)
q=E.kD()
p=F.jZ()
F.d_(p,a8,a8,1,1,1,0,0,1)
F.d_(p,a8,a8,1,1,0,1,0,3)
F.d_(p,a8,a8,1,1,0,0,1,2)
F.d_(p,a8,a8,1,1,-1,0,0,0)
F.d_(p,a8,a8,1,1,0,-1,0,0)
F.d_(p,a8,a8,1,1,0,0,-1,3)
p.av()
q.sbs(0,p)
o=X.jP(a8)
if(o.b){o.b=!1
n=new D.x("clearColor",!0,!1)
n.b=!0
o.am(n)}n=r.f
m=n.a
l=m.createTexture()
m.bindTexture(a9,l)
m.texParameteri(a9,10242,10497)
m.texParameteri(a9,10243,10497)
m.texParameteri(a9,10241,9729)
m.texParameteri(a9,10240,9729)
m.bindTexture(a9,a8)
k=new T.iu()
k.a=0
k.b=l
k.c=!1
k.d=0
n.aJ(k,l,"../resources/maskonaive/posx.jpg",34069,!1,!1)
n.aJ(k,l,"../resources/maskonaive/negx.jpg",34070,!1,!1)
n.aJ(k,l,"../resources/maskonaive/posy.jpg",34071,!1,!1)
n.aJ(k,l,"../resources/maskonaive/negy.jpg",34072,!1,!1)
n.aJ(k,l,"../resources/maskonaive/posz.jpg",34073,!1,!1)
n.aJ(k,l,"../resources/maskonaive/negz.jpg",34074,!1,!1)
j=r.f.h4("../resources/AlphaWeave.png")
i=new O.dG()
n=O.jL()
i.e=n
n.aQ(i.ger(),i.geu())
n=new O.at(i,"emission")
n.c=new A.V(!1,!1,!1)
n.f=new V.P(0,0,0)
i.f=n
n=new O.at(i,"ambient")
n.c=new A.V(!1,!1,!1)
n.f=new V.P(0,0,0)
i.r=n
n=new O.at(i,"diffuse")
n.c=new A.V(!1,!1,!1)
n.f=new V.P(0,0,0)
i.x=n
n=new O.at(i,"invDiffuse")
n.c=new A.V(!1,!1,!1)
n.f=new V.P(0,0,0)
i.y=n
n=new O.hH(i,"specular")
n.c=new A.V(!1,!1,!1)
n.f=new V.P(0,0,0)
n.ch=100
i.z=n
n=new O.hD(i,"bump")
n.c=new A.V(!1,!1,!1)
i.Q=n
i.ch=null
n=new O.at(i,"reflect")
n.c=new A.V(!1,!1,!1)
n.f=new V.P(0,0,0)
i.cx=n
n=new O.hG(i,"refract")
n.c=new A.V(!1,!1,!1)
n.f=new V.P(0,0,0)
n.ch=1
i.cy=n
n=new O.hC(i,"alpha")
n.c=new A.V(!1,!1,!1)
n.f=1
i.db=n
n=new D.cj()
n.ba()
n.e=[]
n.f=[]
n.r=[]
n.x=[]
n.z=n.y=null
n.cl(n.gep(),n.gf1(),n.gf5())
i.dx=n
m=new O.hF()
m.b=new V.aF(0,0,0,0)
m.c=1
m.d=10
m.e=!1
i.dy=m
m=n.y
n=m==null?n.y=D.A():m
n.n(0,i.gfl())
n=i.dx
m=n.z
n=m==null?n.z=D.A():m
n.n(0,i.gaH())
i.fr=null
n=i.dx
h=V.k3()
m=U.kz(V.kL(V.kR(),h,new V.y(1,-2,-3)))
g=new V.P(1,1,1)
f=new D.bw()
f.c=new V.P(1,1,1)
f.a=V.mN()
f.d=V.k3()
f.e=V.mM()
e=f.b
f.b=m
m.gp().n(0,f.gdX())
m=new D.x("mover",e,f.b)
m.b=!0
f.aq(m)
if(!f.c.q(0,g)){e=f.c
f.c=g
m=new D.x("color",e,g)
m.b=!0
f.aq(m)}n.n(0,f)
n=i.r
n.sb_(0,new V.P(0.5,0.5,0.5))
n=i.x
n.sb_(0,new V.P(0.6,0.6,0.6))
i.r.sce(j)
i.x.sce(j)
i.db.sce(j)
d=new U.bz()
d.ba()
d.aQ(d.gen(),d.gf3())
d.e=null
d.f=V.bD()
d.r=0
n=r.x
m=new U.cD()
f=U.jM()
f.sci(0,!0)
f.sc7(6.283185307179586)
f.sc9(0)
f.sa7(0,0)
f.sc8(100)
f.sN(0)
f.sbU(0.5)
m.b=f
c=m.gaG()
f.gp().n(0,c)
f=U.jM()
f.sci(0,!0)
f.sc7(6.283185307179586)
f.sc9(0)
f.sa7(0,0)
f.sc8(100)
f.sN(0)
f.sbU(0.5)
m.c=f
f.gp().n(0,c)
m.d=null
m.r=m.f=m.e=!1
m.y=m.x=2.5
m.Q=4
m.ch=m.cx=!1
m.db=m.cy=0
m.dx=null
m.dy=0
m.fx=m.fr=null
b=new X.a9(!1,!1,!1)
e=m.d
m.d=b
f=new D.x(b0,e,b)
f.b=!0
m.K(f)
f=m.f
if(f!==!1){m.f=!1
f=new D.x("invertX",f,!1)
f.b=!0
m.K(f)}f=m.r
if(f!==!1){m.r=!1
f=new D.x("invertY",f,!1)
f.b=!0
m.K(f)}m.aY(n)
d.n(0,m)
n=r.x
m=new U.cC()
f=U.jM()
f.sci(0,!0)
f.sc7(6.283185307179586)
f.sc9(0)
f.sa7(0,0)
f.sc8(100)
f.sN(0)
f.sbU(0.2)
m.b=f
f.gp().n(0,m.gaG())
m.c=null
m.d=!1
m.e=2.5
m.r=4
m.x=m.y=!1
m.z=0
m.Q=null
m.ch=0
m.cy=m.cx=null
b=new X.a9(!0,!1,!1)
e=m.c
m.c=b
f=new D.x(b0,e,b)
f.b=!0
m.K(f)
m.aY(n)
d.n(0,m)
n=r.x
m=new U.cE()
m.c=0.01
m.e=m.d=0
b=new X.a9(!1,!1,!1)
m.b=b
f=new D.x(b0,a8,b)
f.b=!0
m.K(f)
m.aY(n)
d.n(0,m)
d.n(0,U.kz(V.au(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
a=X.kO(d)
a0=new M.c3()
a0.a=!0
n=E.kD()
p=F.jZ()
m=p.a
f=new V.y(-1,-1,1).I()
a1=m.bg(new V.aK(1,2,4,6),V.fZ(255,0,0),new V.R(-1,-1,0),new V.a4(0,1),f,a8)
f=p.a
m=new V.y(1,-1,1).I()
a2=f.bg(new V.aK(0,3,4,6),V.fZ(0,0,255),new V.R(1,-1,0),new V.a4(1,1),m,a8)
m=p.a
f=new V.y(1,1,1).I()
a3=m.bg(new V.aK(0,2,5,6),V.fZ(0,128,0),new V.R(1,1,0),new V.a4(1,0),f,a8)
f=p.a
m=V.aJ()
c=new V.y(-1,1,1).I()
a4=f.bg(new V.aK(0,2,4,7),V.fZ(255,255,0),new V.R(-1,1,0),m,c,a8)
p.d.fF([a1,a2,a3,a4])
p.av()
n.sbs(0,p)
a0.e=n
a0.saZ(a8)
a0.sb4(0,a8)
a0.sb5(a8)
n=new O.e5()
n.b=1.0471975511965976
n.d=new V.P(1,1,1)
e=n.c
n.c=k
k.gp().n(0,n.gaH())
m=new D.x("boxTexture",e,n.c)
m.b=!0
n.P(m)
a0.sb5(n)
a0.sb4(0,o)
a0.saZ(a)
a5=new M.ca()
a5.a=!0
n=O.jL()
a5.e=n
n.aQ(a5.geA(),a5.geC())
a5.y=a5.x=a5.r=a5.f=null
a6=X.jP(a8)
a5.saZ(a8)
a5.sb4(0,a6)
a5.sb5(a8)
a5.saZ(a)
a5.sb5(i)
a5.sb4(0,o)
a5.e.n(0,q)
n=new M.c1()
n.ba()
n.e=!0
n.f=!1
n.r=null
n.aQ(n.gf7(),n.gf9())
n.a_(0,[a0,a5])
m=r.d
if(m!==n){if(m!=null)m.gp().O(0,r.gcs())
r.d=n
n.gp().n(0,r.gcs())
r.ct()}n=r.Q
if(n==null)n=r.Q=D.A()
m=n.b
n=m==null?n.b=[]:m
n.push(new Q.jD(b1,i))
V.ou(r)},
jD:function jD(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,Q]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jT.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gR:function(a){return H.cx(a)},
i:function(a){return"Instance of '"+H.d(H.dZ(a))+"'"}}
J.hs.prototype={
i:function(a){return String(a)},
gR:function(a){return a?519018:218159}}
J.ci.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gR:function(a){return 0}}
J.bc.prototype={
gR:function(a){return 0},
i:function(a){return String(a)}}
J.dV.prototype={}
J.bm.prototype={}
J.ah.prototype={
i:function(a){var s=a[$.lG()]
if(s==null)return this.dP(a)
return"JavaScript function for "+H.d(J.Z(s))}}
J.a8.prototype={
hm:function(a,b){var s
if(!!a.fixed$length)H.p(P.w("removeAt"))
s=a.length
if(b>=s)throw H.c(P.e_(b,null))
return a.splice(b,1)[0]},
O:function(a,b){var s
if(!!a.fixed$length)H.p(P.w("remove"))
for(s=0;s<a.length;++s)if(J.L(a[s],b)){a.splice(s,1)
return!0}return!1},
a_:function(a,b){var s,r
if(!!a.fixed$length)H.p(P.w("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.k)(b),++r)a.push(b[r])},
F:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.b5(a))}},
k:function(a,b){var s,r,q=P.jV(a.length,"",!1)
for(s=0;s<a.length;++s){r=H.d(a[s])
if(s>=q.length)return H.e(q,s)
q[s]=r}return q.join(b)},
h2:function(a){return this.k(a,"")},
h_:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.b5(a))}throw H.c(H.jR())},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
gbk:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.jR())},
cT:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.b5(a))}return!1},
aS:function(a,b){if(!!a.immutable$list)H.p(P.w("sort"))
H.mJ(a,b==null?J.np():b)},
dL:function(a){return this.aS(a,null)},
w:function(a,b){var s
for(s=0;s<a.length;++s)if(J.L(a[s],b))return!0
return!1},
i:function(a){return P.jQ(a,"[","]")},
gL:function(a){return new J.U(a,a.length)},
gR:function(a){return H.cx(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.p(P.w("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bX(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.p(P.w("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bX(a,b))
a[b]=c},
$ii:1,
$if:1}
J.dz.prototype={}
J.U.prototype={
gC:function(a){return this.d},
t:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.k(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bb.prototype={
aN:function(a,b){var s
if(typeof b!="number")throw H.c(H.aV(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbj(b)
if(this.gbj(a)===s)return 0
if(this.gbj(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbj:function(a){return a===0?1/a<0:a<0},
hu:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.w(""+a+".toInt()"))},
c2:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.w(""+a+".floor()"))},
ai:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.w(""+a+".round()"))},
dC:function(a,b){var s
if(b>20)throw H.c(P.aL(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbj(a))return"-"+s
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
dF:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
dR:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cN(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.cN(a,b)},
cN:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.w("Result of truncating division is "+H.d(s)+": "+H.d(a)+" ~/ "+b))},
be:function(a,b){var s
if(a>0)s=this.fu(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fu:function(a,b){return b>31?0:a>>>b},
$iX:1,
$iO:1}
J.ch.prototype={$ir:1}
J.cg.prototype={}
J.ap.prototype={
bS:function(a,b){if(b<0)throw H.c(H.bX(a,b))
if(b>=a.length)H.p(H.bX(a,b))
return a.charCodeAt(b)},
bb:function(a,b){if(b>=a.length)throw H.c(H.bX(a,b))
return a.charCodeAt(b)},
u:function(a,b){if(typeof b!="string")throw H.c(P.kt(b,null,null))
return a+b},
bt:function(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
b8:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.e_(b,null))
if(b>c)throw H.c(P.e_(b,null))
if(c>a.length)throw H.c(P.e_(c,null))
return a.substring(b,c)},
ap:function(a,b){return this.b8(a,b,null)},
hx:function(a){return a.toLowerCase()},
v:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.I)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
af:function(a,b){var s=b-a.length
if(s<=0)return a
return this.v(" ",s)+a},
fM:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aL(c,0,s,null,null))
return H.lC(a,b,c)},
w:function(a,b){return this.fM(a,b,0)},
aN:function(a,b){var s
if(typeof b!="string")throw H.c(H.aV(b))
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
gl:function(a){return a.length},
$iK:1}
H.l.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.b.bS(this.a,b)}}
H.i.prototype={}
H.cm.prototype={
gL:function(a){return new H.aI(this,this.gl(this))},
br:function(a,b){return this.dO(0,b)}}
H.aI.prototype={
gC:function(a){var s=this.d
return s},
t:function(){var s,r=this,q=r.a,p=J.bp(q),o=p.gl(q)
if(r.b!=o)throw H.c(P.b5(q))
s=r.c
if(typeof o!=="number")return H.q(o)
if(s>=o){r.d=null
return!1}r.d=p.D(q,s);++r.c
return!0}}
H.be.prototype={
gL:function(a){return new H.co(J.b0(this.a),this.b)},
gl:function(a){return J.b1(this.a)},
D:function(a,b){return this.b.$1(J.fN(this.a,b))}}
H.c8.prototype={$ii:1}
H.co.prototype={
t:function(){var s=this,r=s.b
if(r.t()){s.a=s.c.$1(r.gC(r))
return!0}s.a=null
return!1},
gC:function(a){var s=this.a
return s}}
H.cp.prototype={
gl:function(a){return J.b1(this.a)},
D:function(a,b){return this.b.$1(J.fN(this.a,b))}}
H.bn.prototype={
gL:function(a){return new H.eI(J.b0(this.a),this.b)}}
H.eI.prototype={
t:function(){var s,r
for(s=this.a,r=this.b;s.t();)if(r.$1(s.gC(s)))return!0
return!1},
gC:function(a){var s=this.a
return s.gC(s)}}
H.cc.prototype={}
H.eB.prototype={
m:function(a,b,c){throw H.c(P.w("Cannot modify an unmodifiable list"))}}
H.bP.prototype={}
H.iF.prototype={
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
H.dP.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dA.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.d(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.d(r.a)+")"
return q+p+"' on '"+s+"' ("+H.d(r.a)+")"}}
H.eA.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.hY.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.fl.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bu.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.lE(r==null?"unknown":r)+"'"},
ghA:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ip.prototype={}
H.ik.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.lE(s)+"'"}}
H.c_.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.c_))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gR:function(a){var s,r=this.c
if(r==null)s=H.cx(this.a)
else s=typeof r!=="object"?J.Y(r):H.cx(r)
return(s^H.cx(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.dZ(s))+"'")}}
H.e2.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.v.prototype={
gl:function(a){return this.a},
ga5:function(a){return new H.aH(this)},
ghz:function(a){return H.mp(new H.aH(this),new H.hu(this))},
fN:function(a,b){var s=this.b
if(s==null)return!1
return this.e9(s,b)},
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
s=this.cE(q,J.Y(a)&0x3ffffff)
r=this.dl(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.cv(s==null?m.b=m.bJ():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.cv(r==null?m.c=m.bJ():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bJ()
p=J.Y(b)&0x3ffffff
o=m.cE(q,p)
if(o==null)m.bM(q,p,[m.bK(b,c)])
else{n=m.dl(o,b)
if(n>=0)o[n].b=c
else o.push(m.bK(b,c))}}},
F:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.b5(s))
r=r.c}},
cv:function(a,b,c){var s=this.bc(a,b)
if(s==null)this.bM(a,b,this.bK(b,c))
else s.b=c},
ek:function(){this.r=this.r+1&67108863},
bK:function(a,b){var s,r=this,q=new H.hx(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.ek()
return q},
dl:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.L(a[r].a,b))return r
return-1},
i:function(a){return P.kK(this)},
bc:function(a,b){return a[b]},
cE:function(a,b){return a[b]},
bM:function(a,b,c){a[b]=c},
ed:function(a,b){delete a[b]},
e9:function(a,b){return this.bc(a,b)!=null},
bJ:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bM(r,s,r)
this.ed(r,s)
return r}}
H.hu.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.nn(this.a).as("2(1)")}}
H.hx.prototype={}
H.aH.prototype={
gl:function(a){return this.a.a},
gL:function(a){var s=this.a,r=new H.dD(s,s.r)
r.c=s.e
return r}}
H.dD.prototype={
gC:function(a){return this.d},
t:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.b5(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jy.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.jz.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jA.prototype={
$1:function(a){return this.a(a)}}
H.ht.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.ct.prototype={}
H.bG.prototype={
gl:function(a){return a.length},
$it:1}
H.bg.prototype={
h:function(a,b){H.ay(b,a,a.length)
return a[b]},
m:function(a,b,c){H.ay(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.cs.prototype={
m:function(a,b,c){H.ay(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.dJ.prototype={
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.dK.prototype={
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.dL.prototype={
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.dM.prototype={
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.dN.prototype={
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.cu.prototype={
gl:function(a){return a.length},
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.dO.prototype={
gl:function(a){return a.length},
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.cK.prototype={}
H.cL.prototype={}
H.cM.prototype={}
H.cN.prototype={}
H.ad.prototype={
as:function(a){return H.fz(v.typeUniverse,this,a)},
cw:function(a){return H.nc(v.typeUniverse,this,a)}}
H.eY.prototype={}
H.eT.prototype={
i:function(a){return this.a}}
H.cW.prototype={}
P.j5.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:16}
P.j4.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.j6.prototype={
$0:function(){this.a.$0()}}
P.j7.prototype={
$0:function(){this.a.$0()}}
P.cV.prototype={
e_:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bW(new P.jm(this,b),0),a)
else throw H.c(P.w("`setTimeout()` not found."))},
e0:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bW(new P.jl(this,a,Date.now(),b),0),a)
else throw H.c(P.w("Periodic timer."))},
$icA:1}
P.jm.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jl.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.dR(s,o)}q.c=p
r.d.$1(q)}}
P.bT.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.d(this.a)+")"}}
P.bo.prototype={
gC:function(a){var s=this.c
if(s==null)return this.b
return s.gC(s)},
t:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.t())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bT){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.e(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.b0(s)
if(o instanceof P.bo){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.cS.prototype={
gL:function(a){return new P.bo(this.a())}}
P.eJ.prototype={}
P.eb.prototype={}
P.ec.prototype={}
P.cA.prototype={}
P.jp.prototype={}
P.ju.prototype={
$0:function(){var s=H.c(this.a)
s.stack=J.Z(this.b)
throw s}}
P.je.prototype={
hq:function(a){var s,r,q,p=null
try{if(C.e===$.aj){a.$0()
return}P.nV(p,p,this,a)}catch(q){s=H.aC(q)
r=H.ki(q)
P.lr(p,p,this,s,r)}},
hr:function(a,b){var s,r,q,p=null
try{if(C.e===$.aj){a.$1(b)
return}P.nW(p,p,this,a,b)}catch(q){s=H.aC(q)
r=H.ki(q)
P.lr(p,p,this,s,r)}},
hs:function(a,b){return this.hr(a,b,t.z)},
fK:function(a){return new P.jf(this,a)},
cX:function(a,b){return new P.jg(this,a,b)}}
P.jf.prototype={
$0:function(){return this.a.hq(this.b)}}
P.jg.prototype={
$1:function(a){return this.a.hs(this.b,a)},
$S:function(){return this.c.as("~(0)")}}
P.cG.prototype={
gL:function(a){var s=new P.cH(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
w:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.e7(b)
return r}},
e7:function(a){var s=this.d
if(s==null)return!1
return this.bA(s[this.bx(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cz(s==null?q.b=P.k6():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cz(r==null?q.c=P.k6():r,b)}else return q.e1(0,b)},
e1:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.k6()
s=q.bx(b)
r=p[s]
if(r==null)p[s]=[q.bw(b)]
else{if(q.bA(r,b)>=0)return!1
r.push(q.bw(b))}return!0},
O:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.fi(this.c,b)
else return this.fh(0,b)},
fh:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bx(b)
r=n[s]
q=o.bA(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cP(p)
return!0},
cz:function(a,b){if(a[b]!=null)return!1
a[b]=this.bw(b)
return!0},
fi:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cP(s)
delete a[b]
return!0},
cA:function(){this.r=1073741823&this.r+1},
bw:function(a){var s,r=this,q=new P.jd(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cA()
return q},
cP:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cA()},
bx:function(a){return J.Y(a)&1073741823},
bA:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.L(a[r].a,b))return r
return-1}}
P.jd.prototype={}
P.cH.prototype={
gC:function(a){return this.d},
t:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.b5(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cf.prototype={}
P.cl.prototype={$ii:1,$if:1}
P.C.prototype={
gL:function(a){return new H.aI(a,this.gl(a))},
D:function(a,b){return this.h(a,b)},
gdm:function(a){return this.gl(a)===0},
hw:function(a,b){var s,r,q,p,o=this
if(o.gdm(a)){s=J.kG(0)
return s}r=o.h(a,0)
q=P.jV(o.gl(a),r,!0)
p=1
while(!0){s=o.gl(a)
if(typeof s!=="number")return H.q(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.e(q,p)
q[p]=s;++p}return q},
hv:function(a){return this.hw(a,!0)},
i:function(a){return P.jQ(a,"[","]")}}
P.dF.prototype={}
P.hA.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.d(a)
r.a=s+": "
r.a+=H.d(b)},
$S:17}
P.as.prototype={
F:function(a,b){var s,r
for(s=J.b0(this.ga5(a));s.t();){r=s.gC(s)
b.$2(r,this.h(a,r))}},
gl:function(a){return J.b1(this.ga5(a))},
i:function(a){return P.kK(a)}}
P.cO.prototype={
a_:function(a,b){var s
for(s=J.b0(b);s.t();)this.n(0,s.gC(s))},
i:function(a){return P.jQ(this,"{","}")},
D:function(a,b){var s,r,q,p="index"
P.m4(b,p)
P.kU(b,p)
for(s=P.mX(this,this.r),r=0;s.t();){q=s.d
if(b===r)return q;++r}throw H.c(P.H(b,this,p,null,r))},
$ii:1,
$if:1}
P.cI.prototype={}
P.di.prototype={}
P.dk.prototype={}
P.hc.prototype={}
P.hq.prototype={
i:function(a){return this.a}}
P.hp.prototype={
ea:function(a,b,c){var s,r,q,p,o,n,m=null
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
default:n=m}if(n!=null){if(o==null)o=new P.aN("")
if(p>b)o.a+=C.b.b8(a,b,p)
o.a+=n
b=p+1}}if(o==null)return m
if(c>b)o.a+=J.m2(a,b,c)
s=o.a
return s.charCodeAt(0)==0?s:s}}
P.iQ.prototype={}
P.iR.prototype={
fO:function(a){var s,r,q,p=null,o=P.jY(0,p,a.length)
if(o==null)throw H.c(new P.bK(p,p,!1,p,p,"Invalid range"))
s=o-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.jn(r)
if(q.ef(a,0,o)!==o){C.b.bS(a,o-1)
q.bO()}return new Uint8Array(r.subarray(0,H.nh(0,q.b,r.length)))}}
P.jn.prototype={
bO:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.e(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.e(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.e(r,q)
r[q]=189},
fD:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.bO()
return!1}},
ef:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.b.bS(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.b.bb(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fD(p,C.b.bb(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bO()}else if(p<=2047){o=l.b
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
P.az.prototype={}
P.a7.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.a7&&this.a===b.a&&!0},
aN:function(a,b){return C.c.aN(this.a,b.a)},
gR:function(a){var s=this.a
return(s^C.c.be(s,30))&1073741823},
i:function(a){var s=this,r=P.md(H.mz(s)),q=P.dn(H.mx(s)),p=P.dn(H.mt(s)),o=P.dn(H.mu(s)),n=P.dn(H.mw(s)),m=P.dn(H.my(s)),l=P.me(H.mv(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.X.prototype={}
P.b6.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.b6&&this.a===b.a},
gR:function(a){return C.c.gR(this.a)},
aN:function(a,b){return C.c.aN(this.a,b.a)},
i:function(a){var s,r,q,p=new P.h9(),o=this.a
if(o<0)return"-"+new P.b6(0-o).i(0)
s=p.$1(C.c.Z(o,6e7)%60)
r=p.$1(C.c.Z(o,1e6)%60)
q=new P.h8().$1(o%1e6)
return""+C.c.Z(o,36e8)+":"+H.d(s)+":"+H.d(r)+"."+H.d(q)}}
P.h8.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.h9.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.G.prototype={}
P.de.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.hf(s)
return"Assertion failed"}}
P.dQ.prototype={
i:function(a){return"Throw of null."}}
P.a2.prototype={
gbz:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gby:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbz()+o+m
if(!q.a)return l
s=q.gby()
r=P.hf(q.b)
return l+s+": "+r}}
P.bK.prototype={
gbz:function(){return"RangeError"},
gby:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.d(q):""
else if(q==null)s=": Not greater than or equal to "+H.d(r)
else if(q>r)s=": Not in inclusive range "+H.d(r)+".."+H.d(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.d(r)
return s}}
P.dx.prototype={
gbz:function(){return"RangeError"},
gby:function(){var s,r=this.b
if(typeof r!=="number")return r.aa()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.d(s)},
gl:function(a){return this.f}}
P.eC.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ez.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.bM.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dj.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hf(s)+"."}}
P.dT.prototype={
i:function(a){return"Out of Memory"},
$iG:1}
P.cy.prototype={
i:function(a){return"Stack Overflow"},
$iG:1}
P.dl.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.eV.prototype={
i:function(a){return"Exception: "+this.a}}
P.hl.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.b.b8(q,0,75)+"..."
return r+"\n"+q}}
P.hn.prototype={}
P.r.prototype={}
P.f.prototype={
br:function(a,b){return new H.bn(this,b)},
gl:function(a){var s,r=this.gL(this)
for(s=0;r.t();)++s
return s},
gaE:function(a){var s,r=this.gL(this)
if(!r.t())throw H.c(H.jR())
s=r.gC(r)
if(r.t())throw H.c(H.mi())
return s},
D:function(a,b){var s,r,q
P.kU(b,"index")
for(s=this.gL(this),r=0;s.t();){q=s.gC(s)
if(b===r)return q;++r}throw H.c(P.H(b,this,"index",null,r))},
i:function(a){return P.mh(this,"(",")")}}
P.dy.prototype={}
P.ar.prototype={$ii:1,$if:1}
P.dE.prototype={}
P.ab.prototype={
gR:function(a){return P.J.prototype.gR.call(C.h,this)},
i:function(a){return"null"}}
P.O.prototype={}
P.J.prototype={constructor:P.J,$iJ:1,
q:function(a,b){return this===b},
gR:function(a){return H.cx(this)},
i:function(a){return"Instance of '"+H.d(H.dZ(this))+"'"},
toString:function(){return this.i(this)}}
P.K.prototype={}
P.aN.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.m.prototype={}
W.fO.prototype={
gl:function(a){return a.length}}
W.dc.prototype={
i:function(a){return String(a)}}
W.dd.prototype={
i:function(a){return String(a)}}
W.bs.prototype={$ibs:1}
W.dg.prototype={}
W.b2.prototype={$ib2:1}
W.b3.prototype={
cj:function(a,b,c){if(c!=null)return a.getContext(b,P.o9(c))
return a.getContext(b)},
dE:function(a,b){return this.cj(a,b,null)},
$ib3:1}
W.ag.prototype={
gl:function(a){return a.length}}
W.h0.prototype={
gl:function(a){return a.length}}
W.F.prototype={$iF:1}
W.c4.prototype={
gl:function(a){return a.length}}
W.h1.prototype={}
W.a6.prototype={}
W.am.prototype={}
W.h2.prototype={
gl:function(a){return a.length}}
W.h3.prototype={
gl:function(a){return a.length}}
W.h4.prototype={
gl:function(a){return a.length}}
W.c5.prototype={}
W.h6.prototype={
i:function(a){return String(a)}}
W.c6.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.c7.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gaD(a))+" x "+H.d(this.gax(a))},
q:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.aA(b)
s=a.left==s.gbl(b)&&a.top==s.gbp(b)&&this.gaD(a)==s.gaD(b)&&this.gax(a)==s.gax(b)}else s=!1
return s},
gR:function(a){return W.lc(J.Y(a.left),J.Y(a.top),J.Y(this.gaD(a)),J.Y(this.gax(a)))},
gcY:function(a){return a.bottom},
gax:function(a){return a.height},
gbl:function(a){return a.left},
gcd:function(a){return a.right},
gbp:function(a){return a.top},
gaD:function(a){return a.width},
$iac:1}
W.dp.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.h7.prototype={
gl:function(a){return a.length}}
W.eL.prototype={
gdm:function(a){return this.a.firstElementChild==null},
gl:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
this.a.replaceChild(c,s[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gL:function(a){var s=this.hv(this)
return new J.U(s,s.length)}}
W.z.prototype={
gfJ:function(a){return new W.j9(a)},
gd_:function(a){return new W.eL(a,a.children)},
gd0:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.aa()
if(q<0)q=-q*0
if(typeof p!=="number")return p.aa()
if(p<0)p=-p*0
return new P.ac(s,r,q,p,t.I)},
i:function(a){return a.localName},
ad:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.kC
if(s==null){s=[]
r=new W.cw(s)
s.push(W.la(null))
s.push(W.lg())
$.kC=r
d=r}else d=s
s=$.kB
if(s==null){s=new W.fA(d)
$.kB=s
c=s}else{s.a=d
c=s}}if($.aG==null){s=document
r=s.implementation.createHTMLDocument("")
$.aG=r
$.jN=r.createRange()
r=$.aG.createElement("base")
t.v.a(r)
r.href=s.baseURI
$.aG.head.appendChild(r)}s=$.aG
if(s.body==null){r=s.createElement("body")
s.body=t.t.a(r)}s=$.aG
if(t.t.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.aG.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.a.w(C.R,a.tagName)){$.jN.selectNodeContents(q)
s=$.jN
p=s.createContextualFragment(b)}else{q.innerHTML=b
p=$.aG.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.aG.body)J.kr(q)
c.ck(p)
document.adoptNode(p)
return p},
fQ:function(a,b,c){return this.ad(a,b,c,null)},
dH:function(a,b){a.textContent=null
a.appendChild(this.ad(a,b,null,null))},
gdA:function(a){return a.tagName},
$iz:1}
W.ha.prototype={
$1:function(a){return t.h.b(a)}}
W.h.prototype={$ih:1}
W.b.prototype={
fE:function(a,b,c,d){if(c!=null)this.e2(a,b,c,!1)},
e2:function(a,b,c,d){return a.addEventListener(b,H.bW(c,1),!1)},
$ib:1}
W.b7.prototype={$ib7:1}
W.dq.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.dr.prototype={
gl:function(a){return a.length}}
W.dt.prototype={
gl:function(a){return a.length}}
W.b8.prototype={$ib8:1}
W.ho.prototype={
gl:function(a){return a.length}}
W.b9.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.ba.prototype={
gd1:function(a){return a.data},
$iba:1}
W.bA.prototype={$ibA:1}
W.bd.prototype={$ibd:1}
W.hy.prototype={
i:function(a){return String(a)}}
W.hQ.prototype={
gl:function(a){return a.length}}
W.hR.prototype={
h:function(a,b){return P.aW(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aW(s.value[1]))}},
ga5:function(a){var s=[]
this.F(a,new W.hS(s))
return s},
gl:function(a){return a.size}}
W.hS.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hT.prototype={
h:function(a,b){return P.aW(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aW(s.value[1]))}},
ga5:function(a){var s=[]
this.F(a,new W.hU(s))
return s},
gl:function(a){return a.size}}
W.hU.prototype={
$2:function(a,b){return this.a.push(a)}}
W.bf.prototype={$ibf:1}
W.dI.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.a3.prototype={$ia3:1}
W.T.prototype={
gaE:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.k_("No elements"))
if(r>1)throw H.c(P.k_("More than one element"))
s=s.firstChild
s.toString
return s},
a_:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q)}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.e(r,b)
s.replaceChild(c,r[b])},
gL:function(a){var s=this.a.childNodes
return new W.cd(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.e(s,b)
return s[b]}}
W.u.prototype={
hl:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
ho:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.lW(s,b,a)}catch(q){H.aC(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.dN(a):s},
fj:function(a,b,c){return a.replaceChild(b,c)},
$iu:1}
W.cv.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.bh.prototype={
gl:function(a){return a.length},
$ibh:1}
W.dX.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.i6.prototype={
h:function(a,b){return P.aW(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aW(s.value[1]))}},
ga5:function(a){var s=[]
this.F(a,new W.i7(s))
return s},
gl:function(a){return a.size}}
W.i7.prototype={
$2:function(a,b){return this.a.push(a)}}
W.e3.prototype={
gl:function(a){return a.length}}
W.aM.prototype={$iaM:1}
W.e7.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.bi.prototype={$ibi:1}
W.e8.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.bj.prototype={
gl:function(a){return a.length},
$ibj:1}
W.il.prototype={
h:function(a,b){return a.getItem(H.kc(b))},
F:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga5:function(a){var s=[]
this.F(a,new W.im(s))
return s},
gl:function(a){return a.length}}
W.im.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aO.prototype={$iaO:1}
W.cz.prototype={
ad:function(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
s=W.mf("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
s.toString
new W.T(r).a_(0,new W.T(s))
return r}}
W.ee.prototype={
ad:function(a,b,c,d){var s,r,q,p
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.x.ad(s.createElement("table"),b,c,d)
s.toString
s=new W.T(s)
q=s.gaE(s)
q.toString
s=new W.T(q)
p=s.gaE(s)
r.toString
p.toString
new W.T(r).a_(0,new W.T(p))
return r}}
W.ef.prototype={
ad:function(a,b,c,d){var s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.x.ad(s.createElement("table"),b,c,d)
s.toString
s=new W.T(s)
q=s.gaE(s)
r.toString
q.toString
new W.T(r).a_(0,new W.T(q))
return r}}
W.bN.prototype={$ibN:1}
W.aP.prototype={$iaP:1}
W.ai.prototype={$iai:1}
W.eg.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.eh.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.iz.prototype={
gl:function(a){return a.length}}
W.bk.prototype={$ibk:1}
W.bl.prototype={$ibl:1}
W.el.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.iD.prototype={
gl:function(a){return a.length}}
W.ax.prototype={}
W.iP.prototype={
i:function(a){return String(a)}}
W.eF.prototype={
gl:function(a){return a.length}}
W.aR.prototype={
gfT:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.w("deltaY is not supported"))},
gfS:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.w("deltaX is not supported"))},
$iaR:1}
W.bQ.prototype={
fk:function(a,b){return a.requestAnimationFrame(H.bW(b,1))},
ee:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.bR.prototype={$ibR:1}
W.eM.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.cF.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
q:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.aA(b)
s=a.left==s.gbl(b)&&a.top==s.gbp(b)&&a.width==s.gaD(b)&&a.height==s.gax(b)}else s=!1
return s},
gR:function(a){return W.lc(J.Y(a.left),J.Y(a.top),J.Y(a.width),J.Y(a.height))},
gax:function(a){return a.height},
gaD:function(a){return a.width}}
W.eZ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.cJ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.fi.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.fp.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.j8.prototype={
F:function(a,b){var s,r,q,p,o
for(s=this.ga5(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.k)(s),++p){o=s[p]
b.$2(o,q.getAttribute(o))}},
ga5:function(a){var s,r,q,p,o=this.a.attributes,n=[]
for(s=o.length,r=t.x,q=0;q<s;++q){if(q>=o.length)return H.e(o,q)
p=r.a(o[q])
if(p.namespaceURI==null)n.push(p.name)}return n}}
W.j9.prototype={
h:function(a,b){return this.a.getAttribute(H.kc(b))},
gl:function(a){return this.ga5(this).length}}
W.jO.prototype={}
W.eU.prototype={}
W.ja.prototype={
$1:function(a){return this.a.$1(a)}}
W.k5.prototype={}
W.bS.prototype={
dW:function(a){var s
if($.f_.a===0){for(s=0;s<262;++s)$.f_.m(0,C.Q[s],W.oj())
for(s=0;s<12;++s)$.f_.m(0,C.k[s],W.ok())}},
aL:function(a){return $.lU().w(0,W.c9(a))},
an:function(a,b,c){var s=$.f_.h(0,H.d(W.c9(a))+"::"+b)
if(s==null)s=$.f_.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iaa:1}
W.E.prototype={
gL:function(a){return new W.cd(a,this.gl(a))}}
W.cw.prototype={
aL:function(a){return C.a.cT(this.a,new W.hX(a))},
an:function(a,b,c){return C.a.cT(this.a,new W.hW(a,b,c))},
$iaa:1}
W.hX.prototype={
$1:function(a){return a.aL(this.a)}}
W.hW.prototype={
$1:function(a){return a.an(this.a,this.b,this.c)}}
W.cP.prototype={
dZ:function(a,b,c,d){var s,r,q
this.a.a_(0,c)
s=b.br(0,new W.ji())
r=b.br(0,new W.jj())
this.b.a_(0,s)
q=this.c
q.a_(0,C.S)
q.a_(0,r)},
aL:function(a){return this.a.w(0,W.c9(a))},
an:function(a,b,c){var s=this,r=W.c9(a),q=s.c
if(q.w(0,H.d(r)+"::"+b))return s.d.fH(c)
else if(q.w(0,"*::"+b))return s.d.fH(c)
else{q=s.b
if(q.w(0,H.d(r)+"::"+b))return!0
else if(q.w(0,"*::"+b))return!0
else if(q.w(0,H.d(r)+"::*"))return!0
else if(q.w(0,"*::*"))return!0}return!1},
$iaa:1}
W.ji.prototype={
$1:function(a){return!C.a.w(C.k,a)}}
W.jj.prototype={
$1:function(a){return C.a.w(C.k,a)}}
W.fr.prototype={
an:function(a,b,c){if(this.dQ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.w(0,b)
return!1}}
W.jk.prototype={
$1:function(a){return"TEMPLATE::"+H.d(a)}}
W.fq.prototype={
aL:function(a){var s
if(t.Y.b(a))return!1
s=t.k.b(a)
if(s&&W.c9(a)==="foreignObject")return!1
if(s)return!0
return!1},
an:function(a,b,c){if(b==="is"||C.b.bt(b,"on"))return!1
return this.aL(a)},
$iaa:1}
W.cd.prototype={
t:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.da(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gC:function(a){return this.d}}
W.aa.prototype={}
W.jh.prototype={}
W.fA.prototype={
ck:function(a){var s=this,r=new W.jo(s)
s.b=!1
r.$2(a,null)
for(;s.b;){s.b=!1
r.$2(a,null)}},
aX:function(a,b){var s=this.b=!0
if(b!=null?b!==a.parentNode:s)J.kr(a)
else b.removeChild(a)},
fo:function(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.lZ(a)
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
n=s?!0:!(a.attributes instanceof NamedNodeMap)}catch(p){H.aC(p)}r="element unprintable"
try{r=J.Z(a)}catch(p){H.aC(p)}try{q=W.c9(a)
this.fn(a,b,n,r,q,m,l)}catch(p){if(H.aC(p) instanceof P.a2)throw p
else{this.aX(a,b)
window
o="Removing corrupted element "+H.d(r)
if(typeof console!="undefined")window.console.warn(o)}}},
fn:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.aX(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.aL(a)){m.aX(a,b)
window
s="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.an(a,"is",g)){m.aX(a,b)
window
s="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}r=f.ga5(f).slice(0)
for(q=f.ga5(f).length-1,s=f.a;q>=0;--q){if(q>=r.length)return H.e(r,q)
p=r[q]
o=m.a
n=J.m3(p)
H.kc(p)
if(!o.an(a,n,s.getAttribute(p))){window
o="Removing disallowed attribute <"+H.d(e)+" "+p+'="'+H.d(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.f.b(a))m.ck(a.content)}}
W.jo.prototype={
$2:function(a,b){var s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.fo(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.aX(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){q=r.nextSibling
p=s
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.k_("Corrupt HTML")
throw H.c(q)}}catch(o){H.aC(o)
q=s
n.b=!0
p=q.parentNode
p=a==null?p!=null:a!==p
if(p){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}}}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.ff.prototype={}
W.cQ.prototype={}
W.cR.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fm.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.cT.prototype={}
W.cU.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fB.prototype={}
W.fC.prototype={}
W.fD.prototype={}
W.fE.prototype={}
W.fF.prototype={}
W.fG.prototype={}
W.fH.prototype={}
W.fI.prototype={}
W.fJ.prototype={}
W.fK.prototype={}
P.cX.prototype={$iba:1,
gd1:function(a){return this.a}}
P.jv.prototype={
$2:function(a,b){this.a[a]=b},
$S:18}
P.ds.prototype={
gbd:function(){return new H.be(new H.bn(this.b,new P.hj()),new P.hk())},
m:function(a,b,c){var s=this.gbd()
J.m1(s.b.$1(J.fN(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.b1(this.gbd().a)},
h:function(a,b){var s=this.gbd()
return s.b.$1(J.fN(s.a,b))},
gL:function(a){var s=P.jW(this.gbd(),!1)
return new J.U(s,s.length)}}
P.hj.prototype={
$1:function(a){return t.h.b(a)}}
P.hk.prototype={
$1:function(a){return t.h.a(a)}}
P.fe.prototype={
gcd:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.q(r)
return this.$ti.c.a(s+r)},
gcY:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.q(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.d(s.a)+", "+H.d(s.b)+") "+H.d(s.c)+" x "+H.d(s.d)},
q:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.I.b(b)){s=n.a
r=J.aA(b)
if(s==r.gbl(b)){q=n.b
if(q==r.gbp(b)){p=n.c
if(typeof s!=="number")return s.u()
if(typeof p!=="number")return H.q(p)
o=n.$ti.c
if(o.a(s+p)===r.gcd(b)){s=n.d
if(typeof q!=="number")return q.u()
if(typeof s!=="number")return H.q(s)
r=o.a(q+s)===r.gcY(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gR:function(a){var s,r=this,q=r.a,p=J.Y(q),o=r.b,n=J.Y(o),m=r.c
if(typeof q!=="number")return q.u()
if(typeof m!=="number")return H.q(m)
s=r.$ti.c
m=C.c.gR(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.u()
if(typeof q!=="number")return H.q(q)
q=C.c.gR(s.a(o+q))
return P.mW(P.jc(P.jc(P.jc(P.jc(0,p),n),m),q))}}
P.ac.prototype={
gbl:function(a){return this.a},
gbp:function(a){return this.b},
gaD:function(a){return this.c},
gax:function(a){return this.d}}
P.bB.prototype={$ibB:1}
P.dC.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.bH.prototype={$ibH:1}
P.dR.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.i0.prototype={
gl:function(a){return a.length}}
P.bL.prototype={$ibL:1}
P.ed.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.j.prototype={
gd_:function(a){return new P.ds(a,new W.T(a))},
ad:function(a,b,c,d){var s,r,q,p,o,n=[]
n.push(W.la(null))
n.push(W.lg())
n.push(new W.fq())
c=new W.fA(new W.cw(n))
s='<svg version="1.1">'+b+"</svg>"
n=document
r=n.body
r.toString
q=C.m.fQ(r,s,c)
p=n.createDocumentFragment()
q.toString
n=new W.T(q)
o=n.gaE(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
$ij:1}
P.bO.prototype={$ibO:1}
P.em.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.f2.prototype={}
P.f3.prototype={}
P.fa.prototype={}
P.fb.prototype={}
P.fn.prototype={}
P.fo.prototype={}
P.fw.prototype={}
P.fx.prototype={}
P.fS.prototype={
gl:function(a){return a.length}}
P.fT.prototype={
h:function(a,b){return P.aW(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aW(s.value[1]))}},
ga5:function(a){var s=[]
this.F(a,new P.fU(s))
return s},
gl:function(a){return a.size}}
P.fU.prototype={
$2:function(a,b){return this.a.push(a)}}
P.df.prototype={
gl:function(a){return a.length}}
P.aE.prototype={}
P.dS.prototype={
gl:function(a){return a.length}}
P.eK.prototype={}
P.e1.prototype={
dB:function(a,b,c,d,e,f,g){var s
if(t.s.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.oa(g))
return}if(t.R.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.jH("Incorrect number or type of arguments"))}}
P.e9.prototype={
gl:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
s=P.aW(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.fj.prototype={}
P.fk.prototype={}
K.aD.prototype={
ay:function(a,b){return!0},
i:function(a){return"all"}}
K.dv.prototype={
ay:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)if(s[q].ay(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.k)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.a_.prototype={
ay:function(a,b){return!this.dM(0,b)},
i:function(a){return"!["+this.cn(0)+"]"}}
K.i1.prototype={
ay:function(a,b){if(typeof b!=="number")return H.q(b)
return this.a<=b&&this.b>=b},
i:function(a){var s=H.jX(this.a),r=H.jX(this.b)
return s+".."+r}}
K.i8.prototype={
dU:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.o("May not create a Set with zero characters."))
s=new H.v(t.E)
for(r=new H.aI(a,a.gl(a));r.t();){q=r.d
s.m(0,q,!0)}p=P.jW(new H.aH(s),!0)
C.a.dL(p)
this.a=p},
ay:function(a,b){return C.a.w(this.a,b)},
i:function(a){return P.k0(this.a)}}
L.ea.prototype={
k:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.iE(this.a.j(0,b))
p.a=[]
p.c=!1
this.c.push(p)
return p},
fZ:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q){p=s[q]
if(p.ay(0,a))return p}return null},
i:function(a){return this.b},
cO:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.w(0,l))m+=" (consume)"
for(l=new H.aH(n.d.c),l=l.gL(l);l.t();){r=l.d
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.d(r)+" => ["+H.d(q)+"]")
m=s.c.w(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.k)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.ej.prototype={
i:function(a){var s=H.ko(this.b,"\n","\\n"),r=H.ko(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.ek.prototype={
aA:function(a,b,c){var s,r,q
for(s=c.length,r=0;r<c.length;c.length===s||(0,H.k)(c),++r){q=c[r]
this.c.m(0,q,b)}},
i:function(a){return this.b}}
L.iA.prototype={
j:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.ea(this,b)
s.c=[]
this.a.m(0,b,s)}return s},
J:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.ek(a)
s.c=new H.v(t.i)
this.b.m(0,a,s)}return s},
cf:function(a){return this.hy(a)},
hy:function(a){var s=this
return P.nx(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$cf(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a0.length!==0)j=C.a.hm(a0,0)
else{if(!r.t()){q=3
break}i=r.d
j=i}b.push(j);++m
h=d.fZ(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.k0(b)
throw H.c(P.o("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!b.fixed$length)H.p(P.w("removeRange"))
P.jY(0,k,b.length)
b.splice(0,k-0)
C.a.a_(a0,b)
b=[]
c=[]
d=s.d
q=!s.c.w(0,n.a)?7:8
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
if(d.d!=null){g=P.k0(c)
f=d.d
e=f.c.h(0,g)
n=new L.ej(e==null?f.b:e,g,m)
k=b.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.w(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.mU()
case 1:return P.mV(o)}}},t.j)},
i:function(a){var s,r=new P.aN(""),q=this.d
if(q!=null)r.a=q.cO()+"\n"
for(q=this.a,q=q.ghz(q),q=new H.co(J.b0(q.a),q.b);q.t();){s=q.a
if(s!=this.d)r.a+=s.cO()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.iE.prototype={
i:function(a){return this.b.b+": "+this.cn(0)}}
O.bv.prototype={
ba:function(){this.a=[]
this.c=this.b=null},
cl:function(a,b,c){this.b=b
this.c=a},
aQ:function(a,b){return this.cl(a,null,b)},
cH:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
cr:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gl:function(a){return this.a.length},
gL:function(a){var s=this.a
return new J.U(s,s.length)},
D:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.e(s,b)
return s[b]},
n:function(a,b){var s,r
if(this.cH([b])){s=this.a
r=s.length
s.push(b)
this.cr(r,[b])}},
a_:function(a,b){var s,r
if(this.cH(b)){s=this.a
r=s.length
C.a.a_(s,b)
this.cr(r,b)}},
$if:1}
O.cr.prototype={
gl:function(a){return this.a.length},
gp:function(){var s=this.b
return s==null?this.b=D.A():s},
aF:function(){var s=this.b
if(s!=null)s.A(null)},
gW:function(a){var s=this.a
if(s.length>0)return C.a.gbk(s)
else return V.bD()},
bo:function(a){var s=this.a
if(a==null)s.push(V.bD())
else s.push(a)
this.aF()},
az:function(){var s=this.a
if(s.length>0){s.pop()
this.aF()}}}
E.fW.prototype={}
E.bx.prototype={
sbs:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gp().O(0,q.gdt())
s=q.c
if(s!=null)s.gp().n(0,q.gdt())
r=new D.x("shape",p,q.c)
r.b=!0
q.bm(r)}},
aj:function(a,b){var s
for(s=this.y.a,s=new J.U(s,s.length);s.t();)s.d.aj(0,b)},
a9:function(a){var s,r=this,q=a.dx
q.a.push(q.gW(q))
q.aF()
a.cc(r.f)
q=a.dy
s=(q&&C.a).gbk(q)
if(s!=null&&r.d!=null)s.dw(a,r)
for(q=r.y.a,q=new J.U(q,q.length);q.t();)q.d.a9(a)
a.cb()
a.dx.az()},
bm:function(a){var s=this.z
if(s!=null)s.A(a)},
a1:function(){return this.bm(null)},
du:function(a){this.e=null
this.bm(a)},
hb:function(){return this.du(null)},
ds:function(a){this.bm(a)},
h8:function(){return this.ds(null)},
h7:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gdr(),q=0;q<b.length;b.length===s||(0,H.k)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.by()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}this.a1()},
ha:function(a,b){var s,r
for(s=b.gL(b),r=this.gdr();s.t();)s.gC(s).gp().O(0,r)
this.a1()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bt.prototype={
i:function(a){return this.b}}
E.bI.prototype={
i:function(a){return this.b}}
E.eS.prototype={}
E.i2.prototype={
dT:function(a,b){var s,r=this
r.d=r.c=512
r.e=0
r.x=r.r=r.f=new P.a7(Date.now(),!1)
r.y=0
r.cx=r.ch=r.Q=r.z=null
s=new O.cr()
s.a=[]
s.gp().n(0,new E.i3(r))
r.cy=s
s=new O.cr()
s.a=[]
s.gp().n(0,new E.i4(r))
r.db=s
s=new O.cr()
s.a=[]
s.gp().n(0,new E.i5(r))
r.dx=s
s=[]
r.dy=s
s.push(null)
r.fr=new H.v(t.G)},
ghk:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.gW(q)
s=r.db
s=r.z=q.v(0,s.gW(s))
q=s}return q},
cc:function(a){var s=this.dy
s.push(a==null?(s&&C.a).gbk(s):a)},
cb:function(){var s=this.dy
if(s.length>1)s.pop()},
cS:function(a){var s=a.b
if(s.length===0)throw H.c(P.o("May not cache a shader with no name."))
if(this.fr.fN(0,s))throw H.c(P.o('Shader cache already contains a shader by the name "'+s+'".'))
this.fr.m(0,s,a)}}
E.i3.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.i4.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.i5.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.ei.prototype={
cu:function(a){this.dz()},
ct:function(){return this.cu(null)},
gh0:function(){var s,r=this,q=Date.now(),p=C.c.Z(P.kA(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.a7(q,!1)
return s/p},
cJ:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.v()
if(typeof p!=="number")return H.q(p)
s=C.d.c2(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.v()
r=C.d.c2(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.l0(C.j,q.ghp())}},
dz:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.z.ee(s)
r=W.ls(new E.iy(this),t.H)
r.toString
C.z.fk(s,r)}},
hn:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cJ()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.a7(p,!1)
q.y=P.kA(p-q.r.a).a*0.000001
p=q.cy
C.a.sl(p.a,0)
p.aF()
p=q.db
C.a.sl(p.a,0)
p.aF()
p=q.dx
C.a.sl(p.a,0)
p.aF()
p=q.dy
p.toString
C.a.sl(p,0)
q.dy.push(null)
m.a9(n.e)}q=n.Q
if(q!=null)q.A(null)}catch(o){s=H.aC(o)
r=H.ki(o)
P.kn("Error: "+H.d(s))
P.kn("Stack: "+H.d(r))
throw H.c(s)}}}
E.iy.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hn()}}}
Z.eG.prototype={}
Z.fX.prototype={
X:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.aC(q)
r=P.o('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.d(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.d(s.e)+"]"}}
Z.eH.prototype={}
Z.c0.prototype={
aw:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
X:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].X(a)},
b7:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
a9:function(a){var s,r,q,p,o,n=this.b.length
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
for(s=this.c,r=s.length,q=0;q<r;++q)p.push(J.Z(s[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(o,", ")+"\nAttrs:   "+C.a.k(p,", ")}}
Z.ce.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d(H.dZ(this.c))+"'")+"]"}}
Z.aQ.prototype={
gcm:function(a){var s=this.a,r=(s&$.ak().a)!==0?3:0
if((s&$.aZ().a)!==0)r+=3
if((s&$.aY().a)!==0)r+=3
if((s&$.b_().a)!==0)r+=2
if((s&$.br().a)!==0)r+=3
if((s&$.d8().a)!==0)r+=3
if((s&$.d9().a)!==0)r+=4
if((s&$.bZ().a)!==0)++r
return(s&$.aX().a)!==0?r+4:r},
fI:function(a){var s,r=$.ak(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.aZ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aY()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b_()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.br()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.d8()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.d9()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bZ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aX()
if((q&r.a)!==0)if(s===a)return r
return $.lT()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aQ))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.ak().a)!==0)s.push("Pos")
if((r&$.aZ().a)!==0)s.push("Norm")
if((r&$.aY().a)!==0)s.push("Binm")
if((r&$.b_().a)!==0)s.push("Txt2D")
if((r&$.br().a)!==0)s.push("TxtCube")
if((r&$.d8().a)!==0)s.push("Clr3")
if((r&$.d9().a)!==0)s.push("Clr4")
if((r&$.bZ().a)!==0)s.push("Weight")
if((r&$.aX().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.k(s,"|")}}
D.fY.prototype={}
D.by.prototype={
n:function(a,b){var s=this.a;(s==null?this.a=[]:s).push(b)},
O:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.a.w(q,b)
if(q===!0){q=r.a
s=(q&&C.a).O(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.a.w(q,b)
if(q===!0){q=r.b
s=(q&&C.a).O(q,b)||s}return s},
A:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.Q()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.a.F(P.jW(s,!0),new D.hg(o))
s=p.b
if(s!=null){p.b=[]
C.a.F(s,new D.hh(o))}return!0},
d4:function(){return this.A(null)},
aB:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.A(s)}}}}
D.hg.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.hh.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.Q.prototype={}
D.an.prototype={}
D.ao.prototype={}
D.x.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.dh.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dh))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.dB.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dB))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.hv.prototype={
hg:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
hc:function(a){this.c=a.b
this.d.O(0,a.a)
return!1}}
X.cn.prototype={}
X.hz.prototype={
aV:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.v()
s=b.b
r=o.ch
if(typeof s!=="number")return s.v()
q=new V.a4(m.a+l*k,m.b+s*r)
r=o.a.gaM()
p=new X.bE(a,V.aJ(),o.x,r,q)
p.b=!0
o.z=new P.a7(n,!1)
o.x=q
return p},
ca:function(a,b){this.r=a.a
return!1},
b3:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.dG()
if(typeof s!=="number")return s.ag()
this.r=(s&~r)>>>0
return!1},
b2:function(a,b){var s=this.d
if(s==null)return!1
s.A(this.aV(a,b))
return!0},
hh:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaM()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.v()
o=a.b
n=m.cy
if(typeof o!=="number")return o.v()
r=new X.bF(new V.a0(q*p,o*n),s,r)
r.b=!0
l.A(r)
return!0},
eR:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cn(c,p.a.gaM(),b)
q.b=!0
r.A(q)
p.y=new P.a7(s,!1)
p.x=V.aJ()}}
X.a9.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.a9))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bE.prototype={}
X.hV.prototype={
bB:function(a,b,c){var s=this,r=new P.a7(Date.now(),!1),q=s.a.gaM(),p=new X.bE(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
ca:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.A(this.bB(a,b,!0))
return!0},
b3:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.dG()
if(typeof r!=="number")return r.ag()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.A(s.bB(a,b,!0))
return!0},
b2:function(a,b){var s=this.d
if(s==null)return!1
s.A(this.bB(a,b,!1))
return!0},
hi:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaM()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.v()
p=a.b
o=n.ch
if(typeof p!=="number")return p.v()
s=new X.bF(new V.a0(r*q,p*o),s,b)
s.b=!0
m.A(s)
return!0},
gd3:function(){var s=this.b
return s==null?this.b=D.A():s},
gcg:function(){var s=this.c
return s==null?this.c=D.A():s},
gdq:function(){var s=this.d
return s==null?this.d=D.A():s}}
X.bF.prototype={}
X.dY.prototype={}
X.cB.prototype={}
X.iC.prototype={
aV:function(a,b){var s=this,r=new P.a7(Date.now(),!1),q=a.length>0?a[0]:V.aJ(),p=s.a.gaM(),o=new X.cB(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
hf:function(a){var s=this.b
if(s==null)return!1
s.A(this.aV(a,!0))
return!0},
hd:function(a){var s=this.c
if(s==null)return!1
s.A(this.aV(a,!0))
return!0},
he:function(a){var s=this.d
if(s==null)return!1
s.A(this.aV(a,!1))
return!0}}
X.eD.prototype={
gaM:function(){var s=this.a,r=C.f.gd0(s).c
r.toString
s=C.f.gd0(s).d
s.toString
return V.kV(0,0,r,s)},
cC:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.dB(s,new X.a9(r,a.altKey,a.shiftKey))},
aK:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.a9(r,a.altKey,a.shiftKey)},
bN:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.a9(r,a.altKey,a.shiftKey)},
au:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.a3()
if(typeof o!=="number")return H.q(o)
s=r.top
if(typeof p!=="number")return p.a3()
if(typeof s!=="number")return H.q(s)
return new V.a4(q-o,p-s)},
aW:function(a){return new V.a0(a.movementX,a.movementY)},
bL:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=[]
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q){p=s[q]
o=C.d.ai(p.pageX)
C.d.ai(p.pageY)
n=k.left
if(typeof n!=="number")return H.q(n)
C.d.ai(p.pageX)
m=C.d.ai(p.pageY)
l=k.top
if(typeof l!=="number")return H.q(l)
j.push(new V.a4(o-n,m-l))}return j},
ar:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.dh(s,new X.a9(r,a.altKey,a.shiftKey))},
bC:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.a3()
if(typeof n!=="number")return H.q(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.a3()
if(typeof p!=="number")return H.q(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.q(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.q(p)
p=r<p}else p=!1
return p},
eL:function(a){this.f=!0},
ex:function(a){this.f=!1},
eF:function(a){if(this.f&&this.bC(a))a.preventDefault()},
eP:function(a){var s
if(!this.f)return
s=this.cC(a)
this.b.hg(s)},
eN:function(a){var s
if(!this.f)return
s=this.cC(a)
this.b.hc(s)},
eT:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aK(a)
if(p.x){s=p.ar(a)
r=p.aW(a)
if(p.d.ca(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.ar(a)
q=p.au(a)
if(p.c.ca(s,q))a.preventDefault()},
eX:function(a){var s,r,q,p=this
p.aK(a)
s=p.ar(a)
if(p.x){r=p.aW(a)
if(p.d.b3(s,r))a.preventDefault()
return}if(p.r)return
q=p.au(a)
if(p.c.b3(s,q))a.preventDefault()},
eJ:function(a){var s,r,q,p=this
if(!p.bC(a)){p.aK(a)
s=p.ar(a)
if(p.x){r=p.aW(a)
if(p.d.b3(s,r))a.preventDefault()
return}if(p.r)return
q=p.au(a)
if(p.c.b3(s,q))a.preventDefault()}},
eV:function(a){var s,r,q,p=this
p.aK(a)
s=p.ar(a)
if(p.x){r=p.aW(a)
if(p.d.b2(s,r))a.preventDefault()
return}if(p.r)return
q=p.au(a)
if(p.c.b2(s,q))a.preventDefault()},
eH:function(a){var s,r,q,p=this
if(!p.bC(a)){p.aK(a)
s=p.ar(a)
if(p.x){r=p.aW(a)
if(p.d.b2(s,r))a.preventDefault()
return}if(p.r)return
q=p.au(a)
if(p.c.b2(s,q))a.preventDefault()}},
eZ:function(a){var s,r,q=this
q.aK(a)
s=new V.a0((a&&C.y).gfS(a),C.y.gfT(a)).v(0,q.Q)
if(q.x){if(q.d.hh(s))a.preventDefault()
return}if(q.r)return
r=q.au(a)
if(q.c.hi(s,r))a.preventDefault()},
f0:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.ar(q.y)
r=q.au(q.y)
q.d.eR(s,r,p)}},
fg:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bN(a)
s=r.bL(a)
if(r.e.hf(s))a.preventDefault()},
fc:function(a){var s
this.bN(a)
s=this.bL(a)
if(this.e.hd(s))a.preventDefault()},
fe:function(a){var s
this.bN(a)
s=this.bL(a)
if(this.e.he(s))a.preventDefault()}}
D.bw.prototype={
aq:function(a){var s=this.r
if(s!=null)s.A(a)},
dY:function(){return this.aq(null)},
$iaq:1}
D.aq.prototype={}
D.cj.prototype={
aq:function(a){var s=this.y
if(s!=null)s.A(a)},
cG:function(a){var s=this.z
if(s!=null)s.A(a)},
eQ:function(){return this.cG(null)},
f2:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.k)(a),++r){q=a[r]
if(q==null||this.e8(q))return!1}return!0},
eq:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gcF(),q=0;q<b.length;b.length===s||(0,H.k)(b),++q){p=b[q]
if(p instanceof D.bw)this.f.push(p)
o=p.r
if(o==null){o=new D.by()
o.d=0
p.r=o}n=o.a;(n==null?o.a=[]:n).push(r)}s=new D.an()
s.b=!0
this.aq(s)},
f6:function(a,b){var s,r,q
for(s=b.gL(b),r=this.gcF();s.t();){q=s.gC(s)
C.a.O(this.e,q)
q.gp().O(0,r)}s=new D.ao()
s.b=!0
this.aq(s)},
e8:function(a){var s=C.a.w(this.f,a)
return s}}
V.P.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.P))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.aF.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aF))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+", "+V.D(s.d,3,0)+"]"}}
V.he.prototype={}
V.dH.prototype={
a6:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dH))return!1
s=b.a
$.B().toString
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
i:function(a){var s,r,q,p,o=this,n=V.bY([o.a,o.d,o.r],3,0),m=V.bY([o.b,o.e,o.x],3,0),l=V.bY([o.c,o.f,o.y],3,0),k=n.length
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
V.bC.prototype={
a6:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
c3:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.B().toString
if(Math.abs(b3-0)<1e-9)return V.bD()
s=1/b3
r=-l
q=-a2
return V.au((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
v:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.au(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bq:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.y(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
b6:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.R(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bC))return!1
s=b.a
$.B().toString
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
B:function(a){var s,r,q,p,o,n=this,m=V.bY([n.a,n.e,n.y,n.cx],3,0),l=V.bY([n.b,n.f,n.z,n.cy],3,0),k=V.bY([n.c,n.r,n.Q,n.db],3,0),j=V.bY([n.d,n.x,n.ch,n.dx],3,0),i=m.length
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
H:function(){return this.B("")}}
V.a4.prototype={
Y:function(a){return new V.a0(a.a-this.a,a.b-this.b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.R.prototype={
a3:function(a,b){return new V.R(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.R))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.aK.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aK))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+", "+V.D(s.d,3,0)+"]"}}
V.e0.prototype={
ga8:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.e0))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+", "+V.D(s.d,3,0)+"]"}}
V.a0.prototype={
c4:function(a){return Math.sqrt(this.a0(this))},
a0:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.v()
if(typeof p!=="number")return H.q(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.q(r)
return q*p+s*r},
v:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.v()
if(typeof b!=="number")return H.q(b)
s=this.b
if(typeof s!=="number")return s.v()
return new V.a0(r*b,s*b)},
U:function(a,b){var s,r
$.B().toString
if(Math.abs(b-0)<1e-9){s=$.l4
return s==null?$.l4=new V.a0(0,0):s}s=this.a
if(typeof s!=="number")return s.U()
r=this.b
if(typeof r!=="number")return r.U()
return new V.a0(s/b,r/b)},
q:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
s=b.a
r=this.a
$.B().toString
if(typeof s!=="number")return s.a3()
if(typeof r!=="number")return H.q(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.a3()
if(typeof r!=="number")return H.q(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.y.prototype={
c4:function(a){return Math.sqrt(this.a0(this))},
a0:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c5:function(a,b){return new V.y(V.kk(this.a,a.a,b),V.kk(this.b,a.b,b),V.kk(this.c,a.c,b))},
I:function(){var s=this,r=Math.sqrt(s.a0(s))
if(r===1)return s
return s.U(0,r)},
b0:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.y(s*r-q*p,q*o-n*r,n*p-s*o)},
u:function(a,b){return new V.y(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a){return new V.y(-this.a,-this.b,-this.c)},
U:function(a,b){$.B().toString
if(Math.abs(b-0)<1e-9)return V.eE()
return new V.y(this.a/b,this.b/b,this.c/b)},
dn:function(){$.B().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.y))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
U.h_.prototype={
bv:function(a){var s=V.oz(a,this.c,this.b)
return s},
gp:function(){var s=this.y
return s==null?this.y=D.A():s},
K:function(a){var s=this.y
if(s!=null)s.A(a)},
sci:function(a,b){},
sc7:function(a){var s,r=this,q=r.b
$.B().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bv(s)}q=new D.x("maximumLocation",q,r.b)
q.b=!0
r.K(q)}},
sc9:function(a){var s,r=this,q=r.c
$.B().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bv(s)}q=new D.x("minimumLocation",q,r.c)
q.b=!0
r.K(q)}},
sa7:function(a,b){var s,r=this
b=r.bv(b)
s=r.d
$.B().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.x("location",s,b)
s.b=!0
r.K(s)}},
sc8:function(a){var s,r,q=this,p=q.e
$.B().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.x("maximumVelocity",p,a)
p.b=!0
q.K(p)}},
sN:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.B().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.x("velocity",r,a)
r.b=!0
s.K(r)}},
sbU:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.B().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.x("dampening",s,a)
s.b=!0
this.K(s)}},
aj:function(a,b){var s,r,q,p=this,o=p.f
$.B().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa7(0,p.d+s*b)
o=p.x
$.B().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sN(s)}}}
U.c2.prototype={
gp:function(){var s=this.b
return s==null?this.b=D.A():s},
aP:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c2))return!1
return J.L(this.a,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")}}
U.bz.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.A():s},
K:function(a){var s=this.e
if(s!=null)s.A(a)},
a4:function(){return this.K(null)},
eo:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaG(),q=0;q<b.length;b.length===s||(0,H.k)(b),++q){p=b[q]
if(p!=null){o=p.gp()
n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.an()
s.b=!0
this.K(s)},
f4:function(a,b){var s,r
for(s=b.gL(b),r=this.gaG();s.t();)s.gC(s).gp().O(0,r)
s=new D.ao()
s.b=!0
this.K(s)},
aP:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.aa()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.U(p,p.length),s=null;p.t();){o=p.d
if(o!=null){r=o.aP(0,b,c)
if(r!=null)s=s==null?r:r.v(0,s)}}q.f=s==null?V.bD():s
p=q.e
if(p!=null)p.aB(0)}return q.f},
q:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bz))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.e(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.e(p,r)
if(!J.L(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iS:1}
U.S.prototype={}
U.cC.prototype={
gp:function(){var s=this.cy
return s==null?this.cy=D.A():s},
K:function(a){var s=this.cy
if(s!=null)s.A(a)},
a4:function(){return this.K(null)},
aY:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.c.gd3().n(0,s.gbD())
s.a.c.gdq().n(0,s.gbF())
s.a.c.gcg().n(0,s.gbH())
return!0},
bE:function(a){var s=this
if(!J.L(s.c,s.a.b.c))return
s.x=s.y=!0
s.z=s.b.d},
bG:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!l.y)return
if(l.x){s=a.y.Y(a.d)
s=s.a0(s)
r=l.r
if(typeof r!=="number")return H.q(r)
if(s<r)return
l.x=!1}if(l.d){s=a.c
s=a.y.Y(a.d).v(0,2).U(0,s.ga8())
l.Q=s
r=l.b
s=s.a
if(typeof s!=="number")return s.v()
q=l.e
if(typeof q!=="number")return H.q(q)
r.sN(s*10*q)}else{s=a.c
r=a.y
q=a.d
p=r.Y(q).v(0,2).U(0,s.ga8())
r=l.b
o=p.a
if(typeof o!=="number")return o.M()
n=l.e
if(typeof n!=="number")return H.q(n)
m=l.z
if(typeof m!=="number")return H.q(m)
r.sa7(0,-o*n+m)
l.b.sN(0)
l.Q=a.z.Y(q).v(0,2).U(0,s.ga8())}l.a4()},
bI:function(a){var s,r,q,p=this
if(!p.y)return
p.y=!1
if(p.x)return
s=p.Q
if(s.a0(s)>0.0001){s=p.b
r=p.Q.a
if(typeof r!=="number")return r.v()
q=p.e
if(typeof q!=="number")return H.q(q)
s.sN(r*10*q)
p.a4()}},
aP:function(a,b,c){var s,r,q,p=this,o=p.ch,n=b.e
if(typeof o!=="number")return o.aa()
if(o<n){p.ch=n
s=b.y
p.b.aj(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
p.cx=V.au(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return p.cx},
$iS:1}
U.cD.prototype={
gp:function(){var s=this.fx
return s==null?this.fx=D.A():s},
K:function(a){var s=this.fx
if(s!=null)s.A(a)},
a4:function(){return this.K(null)},
aY:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.gd3().n(0,q.gbD())
q.a.c.gdq().n(0,q.gbF())
q.a.c.gcg().n(0,q.gbH())
s=q.a.d
r=s.f
s=r==null?s.f=D.A():r
s.n(0,q.geg())
s=q.a.d
r=s.d
s=r==null?s.d=D.A():r
s.n(0,q.gei())
s=q.a.e
r=s.b
s=r==null?s.b=D.A():r
s.n(0,q.gfB())
s=q.a.e
r=s.d
s=r==null?s.d=D.A():r
s.n(0,q.gfz())
s=q.a.e
r=s.c
s=r==null?s.c=D.A():r
s.n(0,q.gfv())
return!0},
al:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.M()
s=-s}if(this.r){if(typeof r!=="number")return r.M()
r=-r}return new V.a0(s,r)},
bE:function(a){var s=this
t.d.a(a)
if(!J.L(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bG:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!l.cx)return
if(l.ch){s=a.y.Y(a.d)
s=s.a0(s)
r=l.Q
if(typeof r!=="number")return H.q(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.al(a.y.Y(a.d).v(0,2).U(0,s.ga8()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.M()
q=l.y
if(typeof q!=="number")return H.q(q)
r.sN(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.M()
r=l.x
if(typeof r!=="number")return H.q(r)
q.sN(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.al(r.Y(q).v(0,2).U(0,s.ga8()))
r=l.c
o=p.a
if(typeof o!=="number")return o.M()
n=l.y
if(typeof n!=="number")return H.q(n)
m=l.cy
if(typeof m!=="number")return H.q(m)
r.sa7(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.M()
o=l.x
if(typeof o!=="number")return H.q(o)
r=l.db
if(typeof r!=="number")return H.q(r)
m.sa7(0,-n*o+r)
l.b.sN(0)
l.c.sN(0)
l.dx=l.al(a.z.Y(q).v(0,2).U(0,s.ga8()))}l.a4()},
bI:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a0(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.M()
q=p.y
if(typeof q!=="number")return H.q(q)
s.sN(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.M()
s=p.x
if(typeof s!=="number")return H.q(s)
q.sN(-r*10*s)
p.a4()}},
eh:function(a){var s=this
if(t.cj.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
ej:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!J.L(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.al(r.Y(q).v(0,2).U(0,s.ga8()))
r=l.c
o=p.a
if(typeof o!=="number")return o.M()
n=l.y
if(typeof n!=="number")return H.q(n)
m=l.cy
if(typeof m!=="number")return H.q(m)
r.sa7(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.M()
o=l.x
if(typeof o!=="number")return H.q(o)
r=l.db
if(typeof r!=="number")return H.q(r)
m.sa7(0,-n*o+r)
l.b.sN(0)
l.c.sN(0)
l.dx=l.al(a.z.Y(q).v(0,2).U(0,s.ga8()))
l.a4()},
fC:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fA:function(a){var s,r,q,p,o,n,m,l=this
t.m.a(a)
if(!l.cx)return
if(l.ch){s=a.y.Y(a.d)
s=s.a0(s)
r=l.Q
if(typeof r!=="number")return H.q(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.al(a.y.Y(a.d).v(0,2).U(0,s.ga8()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.M()
q=l.y
if(typeof q!=="number")return H.q(q)
r.sN(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.M()
r=l.x
if(typeof r!=="number")return H.q(r)
q.sN(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.al(r.Y(q).v(0,2).U(0,s.ga8()))
r=l.c
o=p.a
if(typeof o!=="number")return o.M()
n=l.y
if(typeof n!=="number")return H.q(n)
m=l.cy
if(typeof m!=="number")return H.q(m)
r.sa7(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.M()
o=l.x
if(typeof o!=="number")return H.q(o)
r=l.db
if(typeof r!=="number")return H.q(r)
m.sa7(0,-n*o+r)
l.b.sN(0)
l.c.sN(0)
l.dx=l.al(a.z.Y(q).v(0,2).U(0,s.ga8()))}l.a4()},
fw:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a0(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.M()
q=p.y
if(typeof q!=="number")return H.q(q)
s.sN(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.M()
s=p.x
if(typeof s!=="number")return H.q(s)
q.sN(-r*10*s)
p.a4()}},
aP:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(typeof o!=="number")return o.aa()
if(o<n){p.dy=n
s=b.y
p.c.aj(0,s)
p.b.aj(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
o=V.au(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
n=p.c.d
r=Math.cos(n)
q=Math.sin(n)
p.fr=o.v(0,V.au(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iS:1}
U.cE.prototype={
gp:function(){var s=this.r
return s==null?this.r=D.A():s},
K:function(a){var s=this.r
if(s!=null)s.A(a)},
aY:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.A():r
r=p.gel()
s.n(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.A():q).n(0,r)
return!0},
em:function(a){var s,r,q,p,o=this
if(!J.L(o.b,o.a.b.c))return
t.F.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.v()
p=s+r*q
if(s!==p){o.d=p
s=new D.x("zoom",s,p)
s.b=!0
o.K(s)}},
aP:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.au(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$iS:1}
M.c1.prototype={
gp:function(){var s=this.r
return s==null?this.r=D.A():s},
T:function(a){var s=this.r
if(s!=null)s.A(a)},
aT:function(){return this.T(null)},
f8:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gS(),q=0;q<b.length;b.length===s||(0,H.k)(b),++q){p=b[q]
if(p!=null){o=p.gp()
n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.an()
s.b=!0
this.T(s)},
fa:function(a,b){var s,r
for(s=b.gL(b),r=this.gS();s.t();)s.gC(s).gp().O(0,r)
s=new D.ao()
s.b=!0
this.T(s)},
a9:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.U(s,s.length);s.t();){r=s.d
if(r!=null)r.a9(a)}q.f=!1},
$iae:1}
M.c3.prototype={
gp:function(){var s=this.r
return s==null?this.r=D.A():s},
T:function(a){var s=this.r
if(s!=null)s.A(a)},
aT:function(){return this.T(null)},
saZ:function(a){var s,r,q=this
if(a==null)a=new X.hr()
s=q.b
if(s!==a){if(s!=null)s.gp().O(0,q.gS())
r=q.b
q.b=a
a.gp().n(0,q.gS())
s=new D.x("camera",r,q.b)
s.b=!0
q.T(s)}},
sb4:function(a,b){var s,r,q=this
if(b==null)b=X.jP(null)
s=q.c
if(s!==b){if(s!=null)s.gp().O(0,q.gS())
r=q.c
q.c=b
b.gp().n(0,q.gS())
s=new D.x("target",r,q.c)
s.b=!0
q.T(s)}},
sb5:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gp().O(0,r.gS())
s=r.d
r.d=a
if(a!=null)a.gp().n(0,r.gS())
q=new D.x("technique",s,r.d)
q.b=!0
r.T(q)}},
a9:function(a){var s=this
a.cc(s.d)
s.c.X(a)
s.b.X(a)
s.e.aj(0,a)
s.e.a9(a)
s.b.b7(a)
s.c.toString
a.cb()},
$iae:1}
M.ca.prototype={
T:function(a){var s=this.y
if(s!=null)s.A(a)},
aT:function(){return this.T(null)},
eB:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gS(),q=0;q<b.length;b.length===s||(0,H.k)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.by()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.an()
s.b=!0
this.T(s)},
eD:function(a,b){var s,r
for(s=b.gL(b),r=this.gS();s.t();)s.gC(s).gp().O(0,r)
s=new D.ao()
s.b=!0
this.T(s)},
saZ:function(a){var s,r,q=this
if(a==null)a=X.kO(null)
s=q.b
if(s!==a){if(s!=null)s.gp().O(0,q.gS())
r=q.b
q.b=a
a.gp().n(0,q.gS())
s=new D.x("camera",r,q.b)
s.b=!0
q.T(s)}},
sb4:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gp().O(0,r.gS())
s=r.c
r.c=b
b.gp().n(0,r.gS())
q=new D.x("target",s,r.c)
q.b=!0
r.T(q)}},
sb5:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gp().O(0,r.gS())
s=r.d
r.d=a
if(a!=null)a.gp().n(0,r.gS())
q=new D.x("technique",s,r.d)
q.b=!0
r.T(q)}},
gp:function(){var s=this.y
return s==null?this.y=D.A():s},
a9:function(a){var s,r=this
a.cc(r.d)
r.c.X(a)
r.b.X(a)
s=r.d
if(s!=null)s.aj(0,a)
for(s=r.e.a,s=new J.U(s,s.length);s.t();)s.d.aj(0,a)
for(s=r.e.a,s=new J.U(s,s.length);s.t();)s.d.a9(a)
r.b.toString
a.cy.az()
a.db.az()
r.c.toString
a.cb()},
$iae:1}
M.ae.prototype={}
A.fQ.prototype={}
A.fR.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
fY:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
d2:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.V.prototype={
gak:function(a){var s=this.a?1:0,r=this.b?2:0
return s|r|0},
i:function(a){var s=this.a?1:0,r=this.b?2:0
return""+(s|r|0)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof A.V))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.hB.prototype={
dS:function(c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2="Required uniform value, ",c3=", was not defined or used in shader.",c4="uniform mat4 objMat;\n"
c0.z=c5
s=new P.aN("")
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
A.nM(c5,s)
A.nO(c5,s)
A.nN(c5,s)
A.nQ(c5,s)
A.nR(c5,s)
A.nP(c5,s)
A.nS(c5,s)
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
c0.dk(0,q.charCodeAt(0)==0?q:q,A.nL(c0.z))
c0.Q=c0.x.h(0,"posAttr")
c0.cx=c0.x.h(0,"normAttr")
c0.ch=c0.x.h(0,"binmAttr")
c0.cy=c0.x.h(0,"txt2DAttr")
c0.db=c0.x.h(0,"txtCubeAttr")
c0.dx=c0.x.h(0,"bendAttr")
if(c5.dy)c0.id=t.q.a(c0.y.E(0,"invViewMat"))
if(r)c0.dy=t.q.a(c0.y.E(0,"objMat"))
if(p)c0.fr=t.q.a(c0.y.E(0,"viewObjMat"))
r=t.q
c0.fy=r.a(c0.y.E(0,"projViewObjMat"))
if(c5.go)c0.fx=r.a(c0.y.E(0,"viewMat"))
if(c5.x1)c0.k1=t.O.a(c0.y.E(0,"txt2DMat"))
if(c5.x2)c0.k2=r.a(c0.y.E(0,"txtCubeMat"))
if(c5.y1)c0.k3=r.a(c0.y.E(0,"colorMat"))
c0.r1=[]
q=c5.aO
if(q>0){c0.k4=c0.y.E(0,"bendMatCount")
for(l=0;l<q;++l){p=c0.r1
o=c0.y
n="bendValues["+l+"].mat"
k=o.h(0,n)
if(k==null)H.p(P.o(c2+n+c3))
p.push(r.a(k))}}r=c5.a
if(r.a)c0.r2=t.r.a(c0.y.E(0,"emissionClr"))
if(r.b)c0.rx=t.c.a(c0.y.E(0,"emissionTxt"))
r=c5.b
if(r.a)c0.x1=t.r.a(c0.y.E(0,"ambientClr"))
if(r.b)c0.x2=t.c.a(c0.y.E(0,"ambientTxt"))
r=c5.c
if(r.a)c0.y2=t.r.a(c0.y.E(0,"diffuseClr"))
if(r.b)c0.aO=t.c.a(c0.y.E(0,"diffuseTxt"))
r=c5.d
if(r.a)c0.bi=t.r.a(c0.y.E(0,"invDiffuseClr"))
if(r.b)c0.d6=t.c.a(c0.y.E(0,"invDiffuseTxt"))
r=c5.e
q=r.a
if(q||r.b||!1){c0.d9=t.n.a(c0.y.E(0,"shininess"))
if(q)c0.d7=t.r.a(c0.y.E(0,"specularClr"))
if(r.b)c0.d8=t.c.a(c0.y.E(0,"specularTxt"))}if(c5.f.b)c0.da=t.c.a(c0.y.E(0,"bumpTxt"))
if(c5.db){c0.dc=t.Q.a(c0.y.E(0,"envSampler"))
r=c5.r
if(r.a)c0.dd=t.r.a(c0.y.E(0,"reflectClr"))
if(r.b)c0.de=t.c.a(c0.y.E(0,"reflectTxt"))
r=c5.x
q=r.a
if(q||r.b||!1){c0.df=t.n.a(c0.y.E(0,"refraction"))
if(q)c0.dg=t.r.a(c0.y.E(0,"refractClr"))
if(r.b)c0.dh=t.c.a(c0.y.E(0,"refractTxt"))}}r=c5.y
if(r.a)c0.di=t.n.a(c0.y.E(0,"alpha"))
if(r.b)c0.dj=t.c.a(c0.y.E(0,"alphaTxt"))
if(c5.k1){r=c5.z
q=r.length
if(q!==0){c0.bV=new H.v(t.J)
c0.bW=new H.v(t.u)
for(p=t.r,o=t.n,j=0;j<r.length;r.length===q||(0,H.k)(r),++j){i=r[j]
h=i.a
g="barLight"+H.d(h)
f=[]
for(n=i.b,l=0;l<n;++l){m=c0.y
e=g+"s["+l+"].startPnt"
k=m.h(0,e)
if(k==null)H.p(P.o(c2+e+c3))
p.a(k)
m=c0.y
e=g+"s["+l+"].endPnt"
d=m.h(0,e)
if(d==null)H.p(P.o(c2+e+c3))
p.a(d)
m=c0.y
e=g+"s["+l+"].color"
c=m.h(0,e)
if(c==null)H.p(P.o(c2+e+c3))
p.a(c)
if(typeof h!=="number")return h.ag()
if((h&4)!==0){m=c0.y
e=g+"s["+l+"].att0"
b=m.h(0,e)
if(b==null)H.p(P.o(c2+e+c3))
o.a(b)
m=c0.y
e=g+"s["+l+"].att1"
a=m.h(0,e)
if(a==null)H.p(P.o(c2+e+c3))
o.a(a)
m=c0.y
e=g+"s["+l+"].att2"
a0=m.h(0,e)
if(a0==null)H.p(P.o(c2+e+c3))
o.a(a0)
a1=a0
a2=a
a3=b}else{a1=c1
a2=a1
a3=a2}f.push(new A.er(k,d,c,a3,a2,a1))}c0.bW.m(0,h,f)
n=c0.bV
m=c0.y
e=g+"Count"
k=m.h(0,e)
if(k==null)H.p(P.o(c2+e+c3))
n.m(0,h,k)}}r=c5.Q
q=r.length
if(q!==0){c0.bX=new H.v(t.J)
c0.bY=new H.v(t.L)
for(p=t.r,o=t.c,j=0;j<r.length;r.length===q||(0,H.k)(r),++j){i=r[j]
h=i.a
g="dirLight"+H.d(h)
f=[]
for(n=i.b,l=0;l<n;++l){if(typeof h!=="number")return h.ag()
m=(h&1)!==0
if(m){e=c0.y
a4=g+"s["+l+"].objUp"
k=e.h(0,a4)
if(k==null)H.p(P.o(c2+a4+c3))
p.a(k)
e=c0.y
a4=g+"s["+l+"].objRight"
d=e.h(0,a4)
if(d==null)H.p(P.o(c2+a4+c3))
p.a(d)
e=c0.y
a4=g+"s["+l+"].objDir"
c=e.h(0,a4)
if(c==null)H.p(P.o(c2+a4+c3))
p.a(c)
a5=c
a6=d
a7=k}else{a5=c1
a6=a5
a7=a6}e=c0.y
a4=g+"s["+l+"].viewDir"
k=e.h(0,a4)
if(k==null)H.p(P.o(c2+a4+c3))
p.a(k)
e=c0.y
a4=g+"s["+l+"].color"
d=e.h(0,a4)
if(d==null)H.p(P.o(c2+a4+c3))
p.a(d)
if(m){m=c0.y
e=g+"sTexture2D"+l
c=m.h(0,e)
if(c==null)H.p(P.o(c2+e+c3))
o.a(c)
a8=c}else a8=c1
f.push(new A.es(a7,a6,a5,k,d,a8))}c0.bY.m(0,h,f)
n=c0.bX
m=c0.y
e=g+"Count"
k=m.h(0,e)
if(k==null)H.p(P.o(c2+e+c3))
n.m(0,h,k)}}r=c5.ch
q=r.length
if(q!==0){c0.bZ=new H.v(t.J)
c0.c_=new H.v(t.W)
for(p=t.r,o=t.O,n=t.Q,m=t.y,e=t.n,j=0;j<r.length;r.length===q||(0,H.k)(r),++j){i=r[j]
h=i.a
g="pointLight"+H.d(h)
f=[]
for(a4=i.b,l=0;l<a4;++l){a9=c0.y
b0=g+"s["+l+"].point"
k=a9.h(0,b0)
if(k==null)H.p(P.o(c2+b0+c3))
p.a(k)
a9=c0.y
b0=g+"s["+l+"].viewPnt"
d=a9.h(0,b0)
if(d==null)H.p(P.o(c2+b0+c3))
p.a(d)
a9=c0.y
b0=g+"s["+l+"].color"
c=a9.h(0,b0)
if(c==null)H.p(P.o(c2+b0+c3))
p.a(c)
if(typeof h!=="number")return h.ag()
if((h&3)!==0){a9=c0.y
b0=g+"s["+l+"].invViewRotMat"
b=a9.h(0,b0)
if(b==null)H.p(P.o(c2+b0+c3))
o.a(b)
b1=b}else b1=c1
if((h&1)!==0){a9=c0.y
b0=g+"sTextureCube"+l
b=a9.h(0,b0)
if(b==null)H.p(P.o(c2+b0+c3))
n.a(b)
a8=b}else a8=c1
if((h&2)!==0){a9=c0.y
b0=g+"sShadowCube"+l
b=a9.h(0,b0)
if(b==null)H.p(P.o(c2+b0+c3))
n.a(b)
a9=c0.y
b0=g+"s["+l+"].shadowAdj"
a=a9.h(0,b0)
if(a==null)H.p(P.o(c2+b0+c3))
m.a(a)
b2=b
b3=a}else{b2=c1
b3=b2}if((h&4)!==0){a9=c0.y
b0=g+"s["+l+"].att0"
b=a9.h(0,b0)
if(b==null)H.p(P.o(c2+b0+c3))
e.a(b)
a9=c0.y
b0=g+"s["+l+"].att1"
a=a9.h(0,b0)
if(a==null)H.p(P.o(c2+b0+c3))
e.a(a)
a9=c0.y
b0=g+"s["+l+"].att2"
a0=a9.h(0,b0)
if(a0==null)H.p(P.o(c2+b0+c3))
e.a(a0)
a1=a0
a2=a
a3=b}else{a1=c1
a2=a1
a3=a2}f.push(new A.ev(k,d,b1,c,a8,b2,b3,a3,a2,a1))}c0.c_.m(0,h,f)
a4=c0.bZ
a9=c0.y
b0=g+"Count"
k=a9.h(0,b0)
if(k==null)H.p(P.o(c2+b0+c3))
a4.m(0,h,k)}}r=c5.cx
q=r.length
if(q!==0){c0.c0=new H.v(t.J)
c0.c1=new H.v(t.M)
for(p=t.r,o=t.n,n=t.y,m=t.c,j=0;j<r.length;r.length===q||(0,H.k)(r),++j){i=r[j]
h=i.a
g="spotLight"+H.d(h)
f=[]
for(e=i.b,l=0;l<e;++l){a4=c0.y
a9=g+"s["+l+"].objPnt"
k=a4.h(0,a9)
if(k==null)H.p(P.o(c2+a9+c3))
p.a(k)
a4=c0.y
a9=g+"s["+l+"].objDir"
d=a4.h(0,a9)
if(d==null)H.p(P.o(c2+a9+c3))
p.a(d)
a4=c0.y
a9=g+"s["+l+"].viewPnt"
c=a4.h(0,a9)
if(c==null)H.p(P.o(c2+a9+c3))
p.a(c)
a4=c0.y
a9=g+"s["+l+"].color"
b=a4.h(0,a9)
if(b==null)H.p(P.o(c2+a9+c3))
p.a(b)
if(typeof h!=="number")return h.ag()
if((h&3)!==0){a4=c0.y
a9=g+"s["+l+"].objUp"
a=a4.h(0,a9)
if(a==null)H.p(P.o(c2+a9+c3))
p.a(a)
a4=c0.y
a9=g+"s["+l+"].objRight"
a0=a4.h(0,a9)
if(a0==null)H.p(P.o(c2+a9+c3))
p.a(a0)
a4=c0.y
a9=g+"s["+l+"].tuScalar"
b4=a4.h(0,a9)
if(b4==null)H.p(P.o(c2+a9+c3))
o.a(b4)
a4=c0.y
a9=g+"s["+l+"].tvScalar"
b5=a4.h(0,a9)
if(b5==null)H.p(P.o(c2+a9+c3))
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
if(a==null)H.p(P.o(c2+b0+c3))
n.a(a)
b3=a}else b3=c1
if((h&8)!==0){a9=c0.y
b0=g+"s["+l+"].cutoff"
a=a9.h(0,b0)
if(a==null)H.p(P.o(c2+b0+c3))
o.a(a)
a9=c0.y
b0=g+"s["+l+"].coneAngle"
a0=a9.h(0,b0)
if(a0==null)H.p(P.o(c2+b0+c3))
o.a(a0)
b8=a0
b9=a}else{b8=c1
b9=b8}if((h&4)!==0){a9=c0.y
b0=g+"s["+l+"].att0"
a=a9.h(0,b0)
if(a==null)H.p(P.o(c2+b0+c3))
o.a(a)
a9=c0.y
b0=g+"s["+l+"].att1"
a0=a9.h(0,b0)
if(a0==null)H.p(P.o(c2+b0+c3))
o.a(a0)
a9=c0.y
b0=g+"s["+l+"].att2"
b4=a9.h(0,b0)
if(b4==null)H.p(P.o(c2+b0+c3))
o.a(b4)
a1=b4
a2=a0
a3=a}else{a1=c1
a2=a1
a3=a2}if((h&1)!==0){a9=c0.y
b0=g+"sTexture2D"+l
a=a9.h(0,b0)
if(a==null)H.p(P.o(c2+b0+c3))
m.a(a)
a8=a}else a8=c1
if(a4){a4=c0.y
a9=g+"sShadow2D"+l
a=a4.h(0,a9)
if(a==null)H.p(P.o(c2+a9+c3))
m.a(a)
b2=a}else b2=c1
f.push(new A.ey(k,d,c,b,a7,a6,b7,b6,b3,b9,b8,a3,a2,a1,a8,b2))}c0.c1.m(0,h,f)
e=c0.c0
a4=c0.y
a9=g+"Count"
k=a4.h(0,a9)
if(k==null)H.p(P.o(c2+a9+c3))
e.m(0,h,k)}}}},
ah:function(a,b){if(b!=null&&b.d)a.dI(b)},
fp:function(a,b){}}
A.fV.prototype={
i:function(a){return"barLight"+H.d(this.a)}}
A.h5.prototype={
i:function(a){return"dirLight"+H.d(this.a)}}
A.i_.prototype={
i:function(a){return"pointLight"+H.d(this.a)}}
A.ij.prototype={
i:function(a){return"spotLight"+H.d(this.a)}}
A.hE.prototype={
i:function(a){return this.b1}}
A.er.prototype={}
A.es.prototype={}
A.ev.prototype={}
A.ey.prototype={}
A.e4.prototype={
cq:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
dk:function(a,b,c){var s,r,q,p=this
p.c=b
p.d=c
p.e=p.cD(b,35633)
p.f=p.cD(p.d,35632)
s=p.a
r=s.createProgram()
p.r=r
s.attachShader(r,p.e)
s.attachShader(p.r,p.f)
s.linkProgram(p.r)
if(!s.getProgramParameter(p.r,35714)){q=s.getProgramInfoLog(p.r)
s.deleteProgram(p.r)
H.p(P.o("Failed to link shader: "+H.d(q)))}p.fq()
p.ft()},
X:function(a){a.a.useProgram(this.r)
this.x.fY()},
cD:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.c(P.o("Error compiling shader '"+H.d(q)+"': "+H.d(s)))}return q},
fq:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.q(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.fQ(n,r.name,q))}p.x=new A.fR(o)},
ft:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.q(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.fR(r.type,r.size,r.name,q))}p.y=new A.iN(o)},
aI:function(a,b,c){var s=this.a
if(a===1)return new A.eo(s,b,c)
else return A.k2(s,this.r,b,a,c)},
eb:function(a,b,c){var s=this.a
if(a===1)return new A.ew(s,b,c)
else return A.k2(s,this.r,b,a,c)},
ec:function(a,b,c){var s=this.a
if(a===1)return new A.ex(s,b,c)
else return A.k2(s,this.r,b,a,c)},
bf:function(a,b){return new P.eV(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
fR:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aI(b,c,d)
case 5121:return s.aI(b,c,d)
case 5122:return s.aI(b,c,d)
case 5123:return s.aI(b,c,d)
case 5124:return s.aI(b,c,d)
case 5125:return s.aI(b,c,d)
case 5126:return new A.en(s.a,c,d)
case 35664:return new A.iJ(s.a,c,d)
case 35665:return new A.ep(s.a,c,d)
case 35666:return new A.eq(s.a,c,d)
case 35667:return new A.iK(s.a,c,d)
case 35668:return new A.iL(s.a,c,d)
case 35669:return new A.iM(s.a,c,d)
case 35674:return new A.iO(s.a,c,d)
case 35675:return new A.et(s.a,c,d)
case 35676:return new A.eu(s.a,c,d)
case 35678:return s.eb(b,c,d)
case 35680:return s.ec(b,c,d)
case 35670:throw H.c(s.bf("BOOL",c))
case 35671:throw H.c(s.bf("BOOL_VEC2",c))
case 35672:throw H.c(s.bf("BOOL_VEC3",c))
case 35673:throw H.c(s.bf("BOOL_VEC4",c))
default:throw H.c(P.o("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}}
A.ii.prototype={}
A.iH.prototype={}
A.iN.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
E:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.H()},
H:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.k)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.eo.prototype={
i:function(a){return"Uniform1i: "+H.d(this.c)}}
A.iK.prototype={
i:function(a){return"Uniform2i: "+H.d(this.c)}}
A.iL.prototype={
i:function(a){return"Uniform3i: "+H.d(this.c)}}
A.iM.prototype={
i:function(a){return"Uniform4i: "+H.d(this.c)}}
A.iI.prototype={
i:function(a){return"Uniform1iv: "+H.d(this.c)}}
A.en.prototype={
i:function(a){return"Uniform1f: "+H.d(this.c)}}
A.iJ.prototype={
i:function(a){return"Uniform2f: "+H.d(this.c)}}
A.ep.prototype={
i:function(a){return"Uniform3f: "+H.d(this.c)}}
A.eq.prototype={
i:function(a){return"Uniform4f: "+H.d(this.c)}}
A.iO.prototype={
i:function(a){return"Uniform1Mat2 "+H.d(this.c)}}
A.et.prototype={
ab:function(a){var s=new Float32Array(H.d0(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.d(this.c)}}
A.eu.prototype={
ab:function(a){var s=new Float32Array(H.d0(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.d(this.c)}}
A.ew.prototype={
dI:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+H.d(this.c)}}
A.ex.prototype={
dJ:function(a){var s=a==null||a.d<6,r=this.a,q=this.d
if(s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}
F.jq.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.c5(q.b,b).c5(q.d.c5(q.c,b),c)
q=new V.R(p.a,p.b,p.c)
if(!J.L(a.f,q)){a.f=q
q=a.a
if(q!=null)q.a1()}a.sht(p.I())
q=1-b
s=1-c
s=new V.aK(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.L(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.a1()}}}
F.hi.prototype={
e4:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.eE()
if(n!=null)q=q.u(0,n)
if(s!=null)q=q.u(0,s)
if(r!=null)q=q.u(0,r)
if(q.dn())return p
return q.I()},
e6:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.a3(0,n)
q=new V.y(o.a,o.b,o.c).I()
o=r.a3(0,n)
return q.b0(new V.y(o.a,o.b,o.c).I()).I()},
bR:function(){var s,r=this
if(r.d!=null)return!0
s=r.e4()
if(s==null){s=r.e6()
if(s==null)return!1}r.d=s
r.a.a.a1()
return!0},
e3:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.eE()
if(n!=null)q=q.u(0,n)
if(s!=null)q=q.u(0,s)
if(r!=null)q=q.u(0,r)
if(q.dn())return p
return q.I()},
e5:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.B().toString
if(Math.abs(p-0)<1e-9){j=b.a3(0,e)
o=new V.y(j.a,j.b,j.c).I()
if(q.a-r.a<0)o=o.M(0)}else{n=(j-s.b)/p
j=b.a3(0,e)
j=new V.R(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).a3(0,h)
o=new V.y(j.a,j.b,j.c).I()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.M(0)}j=l.d
if(j!=null){m=j.I()
o=m.b0(o).I().b0(m).I()}return o},
bP:function(){var s,r=this
if(r.e!=null)return!0
s=r.e3()
if(s==null){s=r.e5()
if(s==null)return!1}r.e=s
r.a.a.a1()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
B:function(a){var s,r=this,q=r.a
if(q==null||r.b==null||r.c==null)return a+"disposed"
s=a+C.b.af(J.Z(q.e),0)+", "+C.b.af(J.Z(r.b.e),0)+", "+C.b.af(J.Z(r.c.e),0)+" {"
q=r.d
s=q!=null?s+(q.i(0)+", "):s+"-, "
q=r.e
return q!=null?s+(q.i(0)+"}"):s+"-}"},
H:function(){return this.B("")}}
F.hw.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
B:function(a){var s=this.a
if(s==null||this.b==null)return a+"disposed"
return a+C.b.af(J.Z(s.e),0)+", "+C.b.af(J.Z(this.b.e),0)},
H:function(){return this.B("")}}
F.hZ.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
B:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.b.af(J.Z(s.e),0)},
H:function(){return this.B("")}}
F.i9.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.A():s},
h5:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.V()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.k)(e),++q){p=e[q]
f.a.n(0,p.fP())}f.a.V()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.k)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.V()
m=m.e
if(typeof m!=="number")return m.u()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
l=n[m]
f.b.a.a.n(0,l)
m=new F.hZ()
if(l.a==null)H.p(P.o("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.A(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.k)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.V()
m=m.e
if(typeof m!=="number")return m.u()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.V()
n=n.e
if(typeof n!=="number")return n.u()
n+=s
m=m.c
if(n>=m.length)return H.e(m,n)
i=m[n]
n=f.c.a
n.a.n(0,j)
n.a.n(0,i)
F.mn(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.k)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.V()
m=m.e
if(typeof m!=="number")return m.u()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.V()
n=n.e
if(typeof n!=="number")return n.u()
n+=s
m=m.c
if(n>=m.length)return H.e(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.V()
m=m.e
if(typeof m!=="number")return m.u()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
g=n[m]
m=f.d.a
m.a.n(0,j)
m.a.n(0,i)
m.a.n(0,g)
F.cb(j,i,g)}e=f.e
if(e!=null)e.aB(0)},
av:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.av()||!1
if(!r.a.av())s=!1
q=r.e
if(q!=null)q.aB(0)
return s},
cZ:function(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=34962,a3=a1.a.c.length
a5.toString
s=a5.a
r=(s&$.ak().a)!==0?1:0
if((s&$.aZ().a)!==0)++r
if((s&$.aY().a)!==0)++r
if((s&$.b_().a)!==0)++r
if((s&$.br().a)!==0)++r
if((s&$.d8().a)!==0)++r
if((s&$.d9().a)!==0)++r
if((s&$.bZ().a)!==0)++r
if((s&$.aX().a)!==0)++r
q=a5.gcm(a5)
p=q*4
s=a3*q
o=new Array(s)
o.fixed$length=Array
n=new Array(r)
n.fixed$length=Array
for(m=0,l=0;l<r;++l){k=a5.fI(l)
j=k.gcm(k)
n[l]=new Z.fX(k,j,m*4,p)
for(i=0;i<a3;++i){h=a1.a.c
if(i>=h.length)return H.e(h,i)
g=h[i].h3(k)
f=m+i*q
for(h=g.length,e=0;e<h;++e){d=g[e]
if(f<0||f>=s)return H.e(o,f)
o[f]=d;++f}}m+=j}s=a4.a
c=s.createBuffer()
s.bindBuffer(a2,c)
s.bufferData(a2,new Float32Array(H.d0(o)),35044)
s.bindBuffer(a2,null)
b=new Z.c0(new Z.eG(a2,c),n,a5)
b.b=[]
if(a1.b.b.length!==0){a=[]
for(l=0;h=a1.b.b,l<h.length;++l){h=h[l].a
h.a.a.V()
a.push(h.e)}a0=Z.k4(s,34963,a)
b.b.push(new Z.ce(0,a.length,a0))}if(a1.c.b.length!==0){a=[]
for(l=0;h=a1.c.b,l<h.length;++l){h=h[l].a
h.a.a.V()
a.push(h.e)
h=a1.c.b
if(l>=h.length)return H.e(h,l)
h=h[l].b
h.a.a.V()
a.push(h.e)}a0=Z.k4(s,34963,a)
b.b.push(new Z.ce(1,a.length,a0))}if(a1.d.b.length!==0){a=[]
for(l=0;h=a1.d.b,l<h.length;++l){h=h[l].a
h.a.a.V()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.e(h,l)
h=h[l].b
h.a.a.V()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.e(h,l)
h=h[l].c
h.a.a.V()
a.push(h.e)}a0=Z.k4(s,34963,a)
b.b.push(new Z.ce(4,a.length,a0))}return b},
i:function(a){var s=this,r="   ",q=[]
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.B(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.B(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.B(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.B(r))}return C.a.k(q,"\n")},
a1:function(){var s=this.e
if(s!=null)s.A(null)}}
F.ia.prototype={
fF:function(a){var s,r,q,p,o=[],n=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.n(0,n)
s.a.n(0,q)
s.a.n(0,p)
o.push(F.cb(n,q,p))}return o},
fG:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=[]
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
if(n){l.n(0,k)
s.a.n(0,j)
s.a.n(0,h)
f.push(F.cb(k,j,h))
s.a.n(0,k)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.cb(k,h,g))}else{l.n(0,j)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.cb(j,h,g))
s.a.n(0,j)
s.a.n(0,g)
s.a.n(0,k)
f.push(F.cb(j,g,k))}n=!n}p=!p}return f},
gl:function(a){return this.b.length},
av:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.k)(s),++p)if(!s[p].bR())q=!1
return q},
bQ:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.k)(s),++p)if(!s[p].bP())q=!1
return q},
i:function(a){return this.H()},
B:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)p.push(s[q].B(a))
return C.a.k(p,"\n")},
H:function(){return this.B("")}}
F.ib.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.H()},
B:function(a){var s,r,q=[],p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q.push(r[s].B(a+(""+s+". ")))}return C.a.k(q,"\n")},
H:function(){return this.B("")}}
F.ic.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.H()},
B:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)p.push(s[q].B(a))
return C.a.k(p,"\n")},
H:function(){return this.B("")}}
F.iV.prototype={
bT:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.iW(s.cx,p,m,r,q,o,n,a,l)},
fP:function(){return this.bT(null)},
sht:function(a){var s
if(!J.L(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a1()}},
h3:function(a){var s,r=this
if(a.q(0,$.ak())){s=r.f
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.q(0,$.aZ())){s=r.r
if(s==null)return[0,1,0]
else return[s.a,s.b,s.c]}else if(a.q(0,$.aY())){s=r.x
if(s==null)return[0,0,1]
else return[s.a,s.b,s.c]}else if(a.q(0,$.b_())){s=r.y
if(s==null)return[0,0]
else return[s.a,s.b]}else if(a.q(0,$.br())){s=r.z
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.q(0,$.d8())){s=r.Q
if(s==null)return[1,1,1]
else return[s.a,s.b,s.c]}else if(a.q(0,$.d9())){s=r.Q
if(s==null)return[1,1,1,1]
else return[s.a,s.b,s.c,s.d]}else if(a.q(0,$.bZ()))return[r.ch]
else if(a.q(0,$.aX())){s=r.cx
if(s==null)return[-1,-1,-1,-1]
else return[s.a,s.b,s.c,s.d]}else return[]},
bR:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.eE()
r.d.F(0,new F.j3(q))
r.r=q.a.I()
q=r.a
if(q!=null){q.a1()
q=r.a.e
if(q!=null)q.aB(0)}return!0},
bP:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.eE()
r.d.F(0,new F.j2(q))
r.x=q.a.I()
q=r.a
if(q!=null){q.a1()
q=r.a.e
if(q!=null)q.aB(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
B:function(a){var s,r,q=this,p="-",o=[]
o.push(C.b.af(J.Z(q.e),0))
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
r=C.a.k(o,", ")
return a+"{"+r+"}"},
H:function(){return this.B("")}}
F.j3.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.u(0,r)}}}
F.j2.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.u(0,r)}}}
F.iX.prototype={
V:function(){},
n:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.o("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a1()
return!0},
bg:function(a,b,c,d,e,f){var s=F.iW(a,null,b,c,null,d,e,f,0)
this.n(0,s)
return s},
gl:function(a){return this.c.length},
av:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)s[q].bR()
return!0},
bQ:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)s[q].bP()
return!0},
fL:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q){p=s[q]
if(p.z==null){o=p.r.I()
if(!J.L(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.A(null)}}}}return!0},
i:function(a){return this.H()},
B:function(a){var s,r,q,p
this.V()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.k)(r),++p)s.push(r[p].B(a))
return C.a.k(s,"\n")},
H:function(){return this.B("")}}
F.iY.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
F:function(a,b){var s=this
C.a.F(s.b,b)
C.a.F(s.c,new F.iZ(s,b))
C.a.F(s.d,new F.j_(s,b))},
i:function(a){return this.H()},
H:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)p.push(s[q].B(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)p.push(s[q].B(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)p.push(s[q].B(""))
return C.a.k(p,"\n")}}
F.iZ.prototype={
$1:function(a){if(!J.L(a.a,this.a))this.b.$1(a)}}
F.j_.prototype={
$1:function(a){var s=this.a
if(!J.L(a.a,s)&&!J.L(a.b,s))this.b.$1(a)}}
F.j0.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.H()},
H:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)p.push(s[q].B(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)p.push(s[q].B(""))
return C.a.k(p,"\n")}}
F.j1.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.H()},
H:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)p.push(s[q].B(""))
return C.a.k(p,"\n")}}
O.dG.prototype={
gp:function(){var s=this.fr
return s==null?this.fr=D.A():s},
P:function(a){var s=this.fr
if(s!=null)s.A(a)},
aU:function(){return this.P(null)},
cI:function(a){this.a=null
this.P(a)},
fm:function(){return this.cI(null)},
es:function(a,b){var s=new D.an()
s.b=!0
this.P(s)},
ev:function(a,b){var s=new D.ao()
s.b=!0
this.P(s)},
cB:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.v(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q){p=s[q]
o=p.gao()
n=d.h(0,p.gao())
d.m(0,o,n==null?1:n)}m=[]
d.F(0,new O.hI(f,m))
C.a.aS(m,new O.hJ())
l=new H.v(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q){o=l.h(0,0)
l.m(0,0,o==null?1:o)}k=[]
l.F(0,new O.hK(f,k))
C.a.aS(k,new O.hL())
j=new H.v(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q){p=s[q]
o=p.gao()
n=j.h(0,p.gao())
j.m(0,o,n==null?1:n)}i=[]
j.F(0,new O.hM(f,i))
C.a.aS(i,new O.hN())
h=new H.v(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.k)(e),++q){p=e[q]
r=p.gao()
o=h.h(0,p.gao())
h.m(0,r,o==null?1:o)}g=[]
h.F(0,new O.hO(f,g))
C.a.aS(g,new O.hP())
e=C.c.Z(f.e.a.length+3,4)
f.dy.toString
return A.mr(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
ac:function(a,b){if(b!=null)if(!C.a.w(a,b)){b.a=a.length
a.push(b)}},
aj:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.U(s,s.length);s.t();){r=s.d
r.toString
q=$.iU
if(q==null)q=$.iU=new V.y(0,0,1)
r.a=q
p=$.iT
r.d=p==null?$.iT=new V.y(0,1,0):p
p=$.iS
r.e=p==null?$.iS=new V.y(-1,0,0):p
p=r.b
if(p!=null){o=p.a
if(o!=null){r.a=o.bq(q).I()
r.d=o.bq(r.d).I()
r.e=o.bq(r.e).I()}}}},
dw:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cB()
s=b4.fr.h(0,b3.b1)
if(s==null){s=A.mq(b3,b4.a)
b4.cS(s)}b3=b2.a=s
b5.e=null}r=b3.z
q=r.bi
b3=b5.e
if(!(b3 instanceof Z.c0))b3=b5.e=null
if(b3==null||!b3.d.q(0,q)){b3=r.k4
if(b3)b5.d.av()
p=r.r1
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.d.bQ()
o.a.bQ()
o=o.e
if(o!=null)o.aB(0)}o=r.rx
if(o){n=b5.d
m=n.e
if(m!=null)++m.d
n.a.fL()
n=n.e
if(n!=null)n.aB(0)}l=b5.d.cZ(new Z.eH(b4.a),q)
l.aw($.ak()).e=b2.a.Q.c
if(b3)l.aw($.aZ()).e=b2.a.cx.c
if(p)l.aw($.aY()).e=b2.a.ch.c
if(r.r2)l.aw($.b_()).e=b2.a.cy.c
if(o)l.aw($.br()).e=b2.a.db.c
if(r.ry)l.aw($.aX()).e=b2.a.dx.c
b5.e=l}k=[]
b2.a.X(b4)
if(r.fr){b3=b2.a
p=b4.dx
p=p.gW(p)
b3=b3.dy
b3.toString
b3.ab(p.a6(0,!0))}if(r.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.gW(p)
o=b4.dx
o=b4.cx=p.v(0,o.gW(o))
p=o}b3=b3.fr
b3.toString
b3.ab(p.a6(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.ghk()
o=b4.dx
o=b4.ch=p.v(0,o.gW(o))
p=o}b3=b3.fy
b3.toString
b3.ab(p.a6(0,!0))
if(r.go){b3=b2.a
p=b4.db
p=p.gW(p)
b3=b3.fx
b3.toString
b3.ab(p.a6(0,!0))}if(r.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.ab(C.h.a6(p,!0))}if(r.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.ab(C.h.a6(p,!0))}if(r.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.ab(C.h.a6(p,!0))}if(r.aO>0){j=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,j)
for(i=0;i<j;++i){b3=b2.a
p=b2.e.a
if(i>=p.length)return H.e(p,i)
p=p[i]
b3=b3.r1
if(i>=b3.length)return H.e(b3,i)
b3=b3[i]
h=new Float32Array(H.d0(p.a6(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,h)}}b3=r.a
if(b3.a){p=b2.a
o=b2.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.ac(k,b2.f.d)
b3=b2.a
p=b2.f.d
b3.ah(b3.rx,p)}if(r.k1){b3=r.b
if(b3.a){p=b2.a
o=b2.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.ac(k,b2.r.d)
b3=b2.a
p=b2.r.d
b3.ah(b3.x2,p)}b3=r.c
if(b3.a){p=b2.a
o=b2.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.ac(k,b2.x.d)
b3=b2.a
p=b2.x.d
b3.ah(b3.aO,p)}b3=r.d
if(b3.a){p=b2.a
o=b2.y.f
p=p.bi
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.ac(k,b2.y.d)
b3=b2.a
p=b2.y.d
b3.ah(b3.d6,p)}b3=r.e
p=b3.a
if(p||b3.b||!1){o=b2.a
n=b2.z.ch
o=o.d9
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.z.f
p=p.d7
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.ac(k,b2.z.d)
b3=b2.a
p=b2.z.d
b3.ah(b3.d8,p)}b3=r.z
if(b3.length>0){g=new H.v(t.a)
for(p=b2.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.k)(p),++f){e=p[f]
d=e.gao()
c=g.h(0,d)
if(c==null)c=0
g.m(0,d,c+1)
b=J.da(b2.a.bW.h(0,d),c)
n=e.ghB()
m=$.av
n=n.b6(m==null?$.av=new V.R(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.ghG()
m=$.av
n=n.b6(m==null?$.av=new V.R(0,0,0):m)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gb_(e)
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
if(e.gd5()){n=e.gcU()
m=b.e
m.a.uniform1f(m.d,n)
n=e.gcV()
m=b.f
m.a.uniform1f(m.d,n)
n=e.gcW()
m=b.r
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.k)(b3),++f){o=b3[f].a
j=g.h(0,o)
if(j==null)j=0
o=b2.a.bV.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.Q
if(b3.length>0){p=b4.db
a=p.gW(p)
a0=new H.v(t.a)
for(p=b2.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.k)(p),++f){e=p[f]
c=a0.h(0,0)
if(c==null)c=0
a0.m(0,0,c+1)
b=J.da(b2.a.bY.h(0,0),c)
n=a.bq(e.a).I()
m=b.e
a1=n.a
a2=n.b
n=n.c
m.a.uniform3f(m.d,a1,a2,n)
n=e.c
a2=b.f
a2.a.uniform3f(a2.d,n.a,n.b,n.c)}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.k)(b3),++f){o=b3[f].a
j=a0.h(0,o)
if(j==null)j=0
o=b2.a.bX.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.ch
if(b3.length>0){p=b4.db
a=p.gW(p)
a3=new H.v(t.a)
for(p=b2.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.k)(p),++f){e=p[f]
d=e.gao()
c=a3.h(0,d)
if(c==null)c=0
a3.m(0,d,c+1)
b=J.da(b2.a.c_.h(0,d),c)
a4=a.v(0,e.gW(e))
n=e.gW(e)
m=$.av
n=n.b6(m==null?$.av=new V.R(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=$.av
n=a4.b6(n==null?$.av=new V.R(0,0,0):n)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gb_(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gaC()
n=a4.c3(0)
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
h=new Float32Array(H.d0(new V.dH(m,a1,a2,a5,a6,a7,a8,a9,n).a6(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,h)
e.gaC()
n=e.gaC()
if(!C.a.w(k,n)){n.a=k.length
k.push(n)}n=e.gaC()
m=n.gc6(n)
if(m){m=b.f
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}e.gaR()
n=e.gdK()
m=b.x
m.toString
a1=n.gfV(n)
a2=n.gfW(n)
a5=n.gfX()
n=n.gfU()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gaR()
if(!C.a.w(k,n)){n.a=k.length
k.push(n)}n=e.gaR()
m=n.gc6(n)
if(m){m=b.r
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}if(e.gd5()){n=e.gcU()
m=b.y
m.a.uniform1f(m.d,n)
n=e.gcV()
m=b.z
m.a.uniform1f(m.d,n)
n=e.gcW()
m=b.Q
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.k)(b3),++f){o=b3[f].a
j=a3.h(0,o)
if(j==null)j=0
o=b2.a.bZ.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.cx
if(b3.length>0){p=b4.db
a=p.gW(p)
b1=new H.v(t.a)
for(p=b2.dx.x,o=p.length,f=0;f<p.length;p.length===o||(0,H.k)(p),++f){e=p[f]
d=e.gao()
c=b1.h(0,d)
if(c==null)c=0
b1.m(0,d,c+1)
b=J.da(b2.a.c1.h(0,d),c)
n=e.ghj(e)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.ghE(e).I()
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=a.b6(e.ghj(e))
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gb_(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gaC()
n=e.gcg()
m=b.f
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gcd(e)
m=b.r
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.ghQ()
m=b.x
m.a.uniform1f(m.d,n)
n=e.ghR()
m=b.y
m.a.uniform1f(m.d,n)
e.gaC()
n=e.gaC()
if(!C.a.w(k,n)){n.a=k.length
k.push(n)}n=e.gaC()
m=n.gc6(n)
if(m){m=b.dx
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}e.gaR()
n=e.gdK()
m=b.z
m.toString
a1=n.gfV(n)
a2=n.gfW(n)
a5=n.gfX()
n=n.gfU()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gaR()
if(!C.a.w(k,n)){n.a=k.length
k.push(n)}n=e.gaR()
m=n.gc6(n)
if(m){m=b.dy
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}if(e.ghF()){n=e.ghD()
m=b.Q
m.a.uniform1f(m.d,n)
n=e.ghC()
m=b.ch
m.a.uniform1f(m.d,n)}if(e.gd5()){n=e.gcU()
m=b.cx
m.a.uniform1f(m.d,n)
n=e.gcV()
m=b.cy
m.a.uniform1f(m.d,n)
n=e.gcW()
m=b.db
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.k)(b3),++f){o=b3[f].a
j=b1.h(0,o)
if(j==null)j=0
o=b2.a.c0.h(0,o)
o.a.uniform1i(o.d,j)}}}if(r.f.b){b2.ac(k,b2.Q.d)
b3=b2.a
p=b2.Q.d
b3.ah(b3.da,p)}if(r.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.gW(p).c3(0)}b3=b3.id
b3.toString
b3.ab(p.a6(0,!0))}if(r.db){b2.ac(k,b2.ch)
b3=b2.a
p=b2.ch
b3.fp(b3.dc,p)
b3=r.r
if(b3.a){p=b2.a
o=b2.cx.f
p=p.dd
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.ac(k,b2.cx.d)
b3=b2.a
p=b2.cx.d
b3.ah(b3.de,p)}b3=r.x
p=b3.a
if(p||b3.b||!1){o=b2.a
n=b2.cy.ch
o=o.df
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.cy.f
p=p.dg
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.ac(k,b2.cy.d)
b3=b2.a
p=b2.cy.d
b3.ah(b3.dh,p)}}b3=r.y
p=b3.a
o=!p
if(!o||b3.b||!1){if(p){p=b2.a
n=b2.db.f
p=p.di
p.a.uniform1f(p.d,n)}if(b3.b){b2.ac(k,b2.db.d)
p=b2.a
n=b2.db.d
p.ah(p.dj,n)}p=b4.a
p.enable(3042)
p.blendFunc(770,771)}for(p=b4.a,i=0;i<k.length;++i){n=k[i]
if(!n.c&&n.d){n.c=!0
p.activeTexture(33984+n.a)
p.bindTexture(3553,n.b)}}n=b5.e
n.X(b4)
n.a9(b4)
n.b7(b4)
if(!o||b3.b||!1)p.disable(3042)
for(i=0;i<k.length;++i){b3=k[i]
if(b3.c){b3.c=!1
p.activeTexture(33984+b3.a)
p.bindTexture(3553,null)}}b3=b2.a
b3.toString
p.useProgram(null)
b3.x.d2()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cB().b1}}
O.hI.prototype={
$2:function(a,b){if(typeof b!=="number")return b.u()
return this.b.push(new A.fV(a,C.c.Z(b+3,4)*4))}}
O.hJ.prototype={
$2:function(a,b){return J.db(a.a,b.a)}}
O.hK.prototype={
$2:function(a,b){if(typeof b!=="number")return b.u()
return this.b.push(new A.h5(a,C.c.Z(b+3,4)*4))}}
O.hL.prototype={
$2:function(a,b){return J.db(a.a,b.a)}}
O.hM.prototype={
$2:function(a,b){if(typeof b!=="number")return b.u()
return this.b.push(new A.i_(a,C.c.Z(b+3,4)*4))}}
O.hN.prototype={
$2:function(a,b){return J.db(a.a,b.a)}}
O.hO.prototype={
$2:function(a,b){if(typeof b!=="number")return b.u()
return this.b.push(new A.ij(a,C.c.Z(b+3,4)*4))}}
O.hP.prototype={
$2:function(a,b){return J.db(a.a,b.a)}}
O.hC.prototype={
at:function(){var s,r=this
r.co()
s=r.f
$.B().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.x(r.b,s,1)
s.b=!0
r.a.P(s)}}}
O.cq.prototype={
P:function(a){return this.a.P(a)},
aU:function(){return this.P(null)},
at:function(){},
cM:function(a){var s,r,q=this
if(!q.c.q(0,a)){s=q.c
if(s.a||s.b||!1)r=!(a.a||a.b||!1)
else r=!0
q.c=a
if(r)q.at()
s=q.a
s.a=null
s.P(null)}},
sce:function(a){var s,r=this,q=r.c
if(!q.b)r.cM(new A.V(q.a,!0,!1))
q=r.d
if(q!==a){if(q!=null)q.gp().O(0,r.gaH())
s=r.d
r.d=a
a.gp().n(0,r.gaH())
q=new D.x(r.b+".texture2D",s,r.d)
q.b=!0
r.a.P(q)}}}
O.hD.prototype={}
O.at.prototype={
cL:function(a){var s,r,q=this
if(!q.f.q(0,a)){s=q.f
q.f=a
r=new D.x(q.b+".color",s,a)
r.b=!0
q.a.P(r)}},
at:function(){this.co()
this.cL(new V.P(1,1,1))},
sb_:function(a,b){this.cM(new A.V(!0,this.c.b,!1))
this.cL(b)}}
O.hF.prototype={}
O.hG.prototype={
at:function(){var s,r=this
r.cp()
s=r.ch
$.B().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.x(r.b+".refraction",s,1)
s.b=!0
r.a.P(s)}}}
O.hH.prototype={
at:function(){var s,r=this
r.cp()
s=r.ch
$.B().toString
if(!(Math.abs(s-100)<1e-9)){r.ch=100
s=new D.x(r.b+".shininess",s,100)
s.b=!0
r.a.P(s)}}}
O.e5.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.A():s},
P:function(a){var s=this.e
if(s!=null)s.A(a)},
aU:function(){return this.P(null)},
dw:function(a,b){var s,r,q,p,o,n,m=this,l="Skybox"
if(m.a==null){s=a.fr.h(0,l)
if(s==null){r=a.a
s=new A.ii(r,l)
s.cq(r,l)
s.dk(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.z=s.x.h(0,"posAttr")
r=t.n
s.Q=r.a(s.y.h(0,"fov"))
s.ch=r.a(s.y.h(0,"ratio"))
s.cx=t.r.a(s.y.h(0,"boxClr"))
s.cy=t.Q.a(s.y.h(0,"boxTxt"))
s.db=t.q.a(s.y.h(0,"viewMat"))
a.cS(s)}m.a=s}if(b.e==null){r=b.d.cZ(new Z.eH(a.a),$.ak())
r.aw($.ak()).e=m.a.z.c
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
p.cy.dJ(q)
q=m.d
r=p.cx
r.a.uniform3f(r.d,q.a,q.b,q.c)
q=a.db
q=q.gW(q).c3(0)
p=p.db
p.toString
p.ab(q.a6(0,!0))
r=b.e
if(r instanceof Z.c0){r.X(a)
r.a9(a)
r.b7(a)}else b.e=null
r=m.a
r.toString
q=a.a
q.useProgram(null)
r.x.d2()
r=m.c
if(r!=null)if(r.c){r.c=!1
q.activeTexture(33984+r.a)
q.bindTexture(34067,null)}}}
O.iq.prototype={}
T.ir.prototype={}
T.is.prototype={}
T.it.prototype={
gp:function(){var s=this.y
return s==null?this.y=D.A():s}}
T.iu.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.A():s}}
T.iv.prototype={
h4:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=W.kF(a)
r=new T.it()
r.a=0
r.b=o
r.d=r.c=!1
W.N(s,"load",new T.ix(this,r,s,!1,o,!1,!1),!1)
return r},
aJ:function(a,b,c,d,e,f){var s=W.kF(c);++this.d
W.N(s,"load",new T.iw(this,s,!1,b,!1,d,a),!1)},
cK:function(a,b,c){var s,r,q,p
b=V.km(b)
s=V.km(a.width)
r=V.km(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.jK()
q.width=s
q.height=r
p=C.f.dE(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.ob(p.getImageData(0,0,q.width,q.height))}}}
T.ix.prototype={
$1:function(a){var s,r,q=this,p=3553,o=q.c
o.width
o.height
s=q.a
r=s.cK(o,s.b,q.d)
o.width
o.height
o=s.a
o.bindTexture(p,q.e)
o.pixelStorei(37440,q.f?1:0)
C.w.dB(o,p,0,6408,6408,5121,r)
if(q.r)o.generateMipmap(p)
o.bindTexture(p,null)
o=q.b
if(!o.d){o.d=!0
o=o.y
if(o!=null)o.d4()}++s.e}}
T.iw.prototype={
$1:function(a){var s=this,r=s.a,q=r.cK(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,s.e?1:0)
C.w.dB(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.d4()}++r.e}}
X.jJ.prototype={}
X.hm.prototype={
gp:function(){var s=this.x
return s==null?this.x=D.A():s},
am:function(a){var s=this.x
if(s!=null)s.A(a)},
X:function(a){var s,r,q,p,o,n,m,l=this,k=a.a
k.bindFramebuffer(36160,null)
k.enable(2884)
k.enable(2929)
k.depthFunc(513)
s=k.drawingBufferWidth
r=k.drawingBufferHeight
q=l.r
p=q.a
if(typeof s!=="number")return H.q(s)
o=C.d.ai(p*s)
p=q.b
if(typeof r!=="number")return H.q(r)
n=C.d.ai(p*r)
p=C.d.ai(q.c*s)
a.c=p
q=C.d.ai(q.d*r)
a.d=q
k.viewport(o,n,p,q)
k.clearDepth(l.c)
if(l.b){q=l.a
k.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
k.clear(m)}}
X.hr.prototype={
gp:function(){var s=this.b
return s==null?this.b=D.A():s},
X:function(a){var s
a.cy.bo(V.bD())
s=V.bD()
a.db.bo(s)},
b7:function(a){a.cy.az()
a.db.az()}}
X.dU.prototype={
gp:function(){var s=this.f
return s==null?this.f=D.A():s},
am:function(a){var s=this.f
if(s!=null)s.A(a)},
ez:function(){return this.am(null)},
X:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.au(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.bo(i)
p=$.kP
if(p==null){p=V.kR()
o=V.k3()
n=$.l5
p=V.kL(p,o,n==null?$.l5=new V.y(0,0,-1):n)
$.kP=p
s=p}else s=p
p=q.b
if(p!=null){r=p.aP(0,a,q)
if(r!=null)s=r.v(0,s)}a.db.bo(s)},
b7:function(a){a.cy.az()
a.db.az()}}
X.io.prototype={}
V.b4.prototype={
b9:function(a){this.b=new P.hp(C.M)
this.c=null
this.d=[]},
G:function(a,b){var s,r,q,p,o,n,m,l=this,k=l.d
if(k.length===0)k.push([])
s=a.split("\n")
for(k=s.length,r=!0,q=0;q<k;++q){p=s[q]
if(r)r=!1
else l.d.push([])
o=document.createElement("div")
o.className="codePart"
n=l.b.ea(p,0,p.length)
m=n==null?p:n
C.K.dH(o,H.ko(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.gbk(l.d).push(o)}},
dv:function(a,b){var s,r,q,p=this
p.d=[]
s=C.a.k(b,"\n")
r=p.c
if(r==null)r=p.c=p.bh()
r.toString
q=new H.l(s)
q=new P.bo(r.cf(new H.aI(q,q.gl(q))).a())
for(;q.t();)p.bn(q.gC(q))}}
V.jF.prototype={
$1:function(a){var s=C.d.dC(this.a.gh0(),2)
if(s!=="0.00")P.kn(s+" fps")}}
V.dm.prototype={
bn:function(a){var s=this
switch(a.a){case"Class":s.G(a.b,"#551")
break
case"Comment":s.G(a.b,"#777")
break
case"Id":s.G(a.b,"#111")
break
case"Num":s.G(a.b,"#191")
break
case"Reserved":s.G(a.b,"#119")
break
case"String":s.G(a.b,"#171")
break
case"Symbol":s.G(a.b,"#616")
break
case"Type":s.G(a.b,"#B11")
break
case"Whitespace":s.G(a.b,"#111")
break}},
bh:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()\\-+*%!&|=.,?:;",j="OpenDoubleStr",i="CloseDoubleStr",h="EscDoubleStr",g="OpenSingleStr",f="CloseSingleStr",e="EscSingleStr",d="Slash",c="Comment",b="EndComment",a="MLComment",a0="MLCStar",a1="Whitespace",a2=L.iB()
a2.d=a2.j(0,q)
s=a2.j(0,q).k(0,p)
r=K.n(new H.l("_"))
s.a.push(r)
r=K.I("a","z")
s.a.push(r)
r=K.I("A","Z")
s.a.push(r)
r=a2.j(0,p).k(0,p)
s=K.n(new H.l("_"))
r.a.push(s)
s=K.I("0","9")
r.a.push(s)
s=K.I("a","z")
r.a.push(s)
s=K.I("A","Z")
r.a.push(s)
s=a2.j(0,q).k(0,o)
r=K.I("0","9")
s.a.push(r)
r=a2.j(0,o).k(0,o)
s=K.I("0","9")
r.a.push(s)
s=a2.j(0,o).k(0,n)
r=K.n(new H.l("."))
s.a.push(r)
r=a2.j(0,n).k(0,m)
s=K.I("0","9")
r.a.push(s)
s=a2.j(0,m).k(0,m)
r=K.I("0","9")
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
a2.j(0,j).k(0,j).a.push(new K.aD())
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
a2.j(0,g).k(0,g).a.push(new K.aD())
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
r=new K.a_()
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
r=new K.a_()
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
r.d=r.a.J("Num")
r=a2.j(0,m)
r.d=r.a.J("Num")
r=a2.j(0,l)
r.d=r.a.J("Symbol")
r=a2.j(0,i)
r.d=r.a.J("String")
r=a2.j(0,f)
r.d=r.a.J("String")
r=a2.j(0,b)
r.d=r.a.J(c)
r=a2.j(0,a1)
r.d=r.a.J(a1)
r=a2.j(0,p)
r=r.d=r.a.J(p)
r.aA(0,"Class",["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"])
r.aA(0,"Type",["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"])
r.aA(0,"Reserved",["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"])
return a2}}
V.du.prototype={
bn:function(a){var s=this
switch(a.a){case"Builtin":s.G(a.b,"#411")
break
case"Comment":s.G(a.b,"#777")
break
case"Id":s.G(a.b,"#111")
break
case"Num":s.G(a.b,"#191")
break
case"Preprocess":s.G(a.b,"#737")
break
case"Reserved":s.G(a.b,"#119")
break
case"Symbol":s.G(a.b,"#611")
break
case"Type":s.G(a.b,"#171")
break
case"Whitespace":s.G(a.b,"#111")
break}},
bh:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()[]\\-+*%!&|=.,?:;",j="Slash",i="Comment",h="EndComment",g="Preprocess",f="EndPreprocess",e="Whitespace",d=L.iB()
d.d=d.j(0,q)
s=d.j(0,q).k(0,p)
r=K.n(new H.l("_"))
s.a.push(r)
r=K.I("a","z")
s.a.push(r)
r=K.I("A","Z")
s.a.push(r)
r=d.j(0,p).k(0,p)
s=K.n(new H.l("_"))
r.a.push(s)
s=K.I("0","9")
r.a.push(s)
s=K.I("a","z")
r.a.push(s)
s=K.I("A","Z")
r.a.push(s)
s=d.j(0,q).k(0,o)
r=K.I("0","9")
s.a.push(r)
r=d.j(0,o).k(0,o)
s=K.I("0","9")
r.a.push(s)
s=d.j(0,o).k(0,n)
r=K.n(new H.l("."))
s.a.push(r)
r=d.j(0,n).k(0,m)
s=K.I("0","9")
r.a.push(s)
s=d.j(0,m).k(0,m)
r=K.I("0","9")
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
d.j(0,j).k(0,l).a.push(new K.aD())
r=d.j(0,i).k(0,h)
s=K.n(new H.l("\n"))
r.a.push(s)
s=d.j(0,i).k(0,i)
r=new K.a_()
r.a=[]
s.a.push(r)
s=K.n(new H.l("\n"))
r.a.push(s)
s=d.j(0,q).k(0,g)
r=K.n(new H.l("#"))
s.a.push(r)
r=d.j(0,g).k(0,g)
s=new K.a_()
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
s.d=s.a.J("Num")
s=d.j(0,m)
s.d=s.a.J("Num")
s=d.j(0,l)
s.d=s.a.J("Symbol")
s=d.j(0,h)
s.d=s.a.J(i)
s=d.j(0,f)
s.d=s.a.J(g)
s=d.j(0,e)
s.d=s.a.J(e)
s=d.j(0,p)
s=s.d=s.a.J(p)
s.aA(0,"Type",["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"])
s.aA(0,"Reserved",["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"])
s.aA(0,"Builtin",["gl_FragColor","gl_Position"])
return d}}
V.dw.prototype={
bn:function(a){var s=this,r="#111"
switch(a.a){case"Attr":s.G(a.b,"#911")
s.G("=",r)
break
case"Id":s.G(a.b,r)
break
case"Other":s.G(a.b,r)
break
case"Reserved":s.G(a.b,"#119")
break
case"String":s.G(a.b,"#171")
break
case"Symbol":s.G(a.b,"#616")
break}},
bh:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.iB()
j.d=j.j(0,q)
s=j.j(0,q).k(0,p)
r=K.n(new H.l("_"))
s.a.push(r)
r=K.I("a","z")
s.a.push(r)
r=K.I("A","Z")
s.a.push(r)
r=j.j(0,p).k(0,p)
s=K.n(new H.l("_"))
r.a.push(s)
s=K.I("0","9")
r.a.push(s)
s=K.I("a","z")
r.a.push(s)
s=K.I("A","Z")
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
j.j(0,m).k(0,m).a.push(new K.aD())
j.j(0,q).k(0,k).a.push(new K.aD())
s=j.j(0,k).k(0,k)
r=new K.a_()
r.a=[]
s.a.push(r)
s=K.n(new H.l('</\\-!>=_"'))
r.a.push(s)
s=K.I("a","z")
r.a.push(s)
s=K.I("A","Z")
r.a.push(s)
s=j.j(0,n)
s.d=s.a.J("Symbol")
s=j.j(0,l)
s.d=s.a.J("String")
s=j.j(0,p)
r=s.a.J(p)
s.d=r
r.aA(0,"Reserved",["DOCTYPE","html","head","meta","link","title","body","script"])
r=j.j(0,o)
r.d=r.a.J(o)
r=j.j(0,k)
r.d=r.a.J(k)
return j}}
V.dW.prototype={
dv:function(a,b){this.d=[]
this.G(C.a.k(b,"\n"),"#111")},
bn:function(a){},
bh:function(){return null}}
V.id.prototype={
dV:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.N(o,"scroll",new V.ig(m),!1)},
cR:function(a){var s,r,q,p,o,n,m,l
this.fs()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.a.h2(a)
q.toString
p=new H.l(p)
p=new P.bo(q.cf(new H.aI(p,p.gl(p))).a())
for(;p.t();){q=p.gC(p)
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
if(H.lC(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.e(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.ll(C.r,q,C.i,!1)
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
dD:function(a){var s,r,q,p=new V.dm("dart")
p.b9("dart")
s=new V.du("glsl")
s.b9("glsl")
r=new V.dw("html")
r.b9("html")
q=C.a.h_([p,s,r],new V.ih(a))
if(q!=null)return q
p=new V.dW("plain")
p.b9("plain")
return p},
cQ:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=[]
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(J.kh(q).bt(q,"+")){b2[r]=C.b.ap(q,1)
a8.push(1)
s=!0}else if(C.b.bt(q,"-")){b2[r]=C.b.ap(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.dD(b0)
p.dv(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m)
this.a.appendChild(n)
l=P.ll(C.r,a9,C.i,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.ks()
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
for(a4=C.a.gL(q);a4.t();)b.appendChild(a4.gC(a4))
d.appendChild(c)
d.appendChild(b)
m.appendChild(d)}},
fs:function(){var s,r,q,p="Start",o="Bold",n="Italic",m="ItalicEnd",l="Code",k="LinkHead",j="LinkTail",i="LinkEnd",h="Other"
if(this.b!=null)return
s=L.iB()
s.d=s.j(0,p)
r=s.j(0,p).k(0,o)
q=K.n(new H.l("*"))
r.a.push(q)
r.c=!0
r=s.j(0,o).k(0,o)
q=new K.a_()
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
q=new K.a_()
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
q=new K.a_()
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
r=new K.a_()
r.a=[]
q.a.push(r)
q=K.n(new H.l("|]"))
r.a.push(q)
q=s.j(0,j).k(0,i)
r=K.n(new H.l("]"))
q.a.push(r)
q.c=!0
q=s.j(0,j).k(0,j)
r=new K.a_()
r.a=[]
q.a.push(r)
q=K.n(new H.l("|]"))
r.a.push(q)
s.j(0,p).k(0,h).a.push(new K.aD())
q=s.j(0,h).k(0,h)
r=new K.a_()
r.a=[]
q.a.push(r)
q=K.n(new H.l("*_`["))
r.a.push(q)
q=s.j(0,"BoldEnd")
q.d=q.a.J(o)
q=s.j(0,m)
q.d=q.a.J(n)
q=s.j(0,"CodeEnd")
q.d=q.a.J(l)
q=s.j(0,i)
q.d=q.a.J("Link")
q=s.j(0,h)
q.d=q.a.J(h)
this.b=s}}
V.ig.prototype={
$1:function(a){P.l0(C.j,new V.ie(this.a))}}
V.ie.prototype={
$0:function(){var s=C.d.ai(document.documentElement.scrollTop),r=this.a.style,q=H.d(-0.01*s)+"px"
r.top=q}}
V.ih.prototype={
$1:function(a){return a.a===this.a}}
Q.jD.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.a
s.cQ("Vertex Shader","glsl",0,(q==null?null:q.c).split("\n"))
r=r.a
s.cQ("Fragment Shader","glsl",0,(r==null?null:r.d).split("\n"))}};(function aliases(){var s=J.a.prototype
s.dN=s.i
s=J.bc.prototype
s.dP=s.i
s=P.f.prototype
s.dO=s.br
s=W.z.prototype
s.bu=s.ad
s=W.cP.prototype
s.dQ=s.an
s=K.dv.prototype
s.dM=s.ay
s.cn=s.i
s=O.cq.prototype
s.co=s.at
s=O.at.prototype
s.cp=s.at})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"np","ml",21)
r(P,"o4","mP",6)
r(P,"o5","mQ",6)
r(P,"o6","mR",6)
q(P,"lu","o_",7)
r(W,"pB","hb",22)
p(W,"oj",4,null,["$4"],["mS"],14,0)
p(W,"ok",4,null,["$4"],["mT"],14,0)
var j
o(j=E.bx.prototype,"gdt",0,0,null,["$1","$0"],["du","hb"],0,0)
o(j,"gdr",0,0,null,["$1","$0"],["ds","h8"],0,0)
n(j,"gh6","h7",3)
n(j,"gh9","ha",3)
o(j=E.ei.prototype,"gcs",0,0,null,["$1","$0"],["cu","ct"],0,0)
m(j,"ghp","dz",7)
l(j=X.eD.prototype,"geK","eL",4)
l(j,"gew","ex",4)
l(j,"geE","eF",2)
l(j,"geO","eP",8)
l(j,"geM","eN",8)
l(j,"geS","eT",2)
l(j,"geW","eX",2)
l(j,"geI","eJ",2)
l(j,"geU","eV",2)
l(j,"geG","eH",2)
l(j,"geY","eZ",19)
l(j,"gf_","f0",4)
l(j,"gff","fg",5)
l(j,"gfb","fc",5)
l(j,"gfd","fe",5)
o(D.bw.prototype,"gdX",0,0,null,["$1","$0"],["aq","dY"],0,0)
o(j=D.cj.prototype,"gcF",0,0,null,["$1","$0"],["cG","eQ"],0,0)
l(j,"gf1","f2",20)
n(j,"gep","eq",9)
n(j,"gf5","f6",9)
k(V.a0.prototype,"gl","c4",10)
k(V.y.prototype,"gl","c4",10)
o(j=U.bz.prototype,"gaG",0,0,null,["$1","$0"],["K","a4"],0,0)
n(j,"gen","eo",11)
n(j,"gf3","f4",11)
o(j=U.cC.prototype,"gaG",0,0,null,["$1","$0"],["K","a4"],0,0)
l(j,"gbD","bE",1)
l(j,"gbF","bG",1)
l(j,"gbH","bI",1)
o(j=U.cD.prototype,"gaG",0,0,null,["$1","$0"],["K","a4"],0,0)
l(j,"gbD","bE",1)
l(j,"gbF","bG",1)
l(j,"gbH","bI",1)
l(j,"geg","eh",1)
l(j,"gei","ej",1)
l(j,"gfB","fC",1)
l(j,"gfz","fA",1)
l(j,"gfv","fw",1)
l(U.cE.prototype,"gel","em",1)
o(j=M.c1.prototype,"gS",0,0,null,["$1","$0"],["T","aT"],0,0)
n(j,"gf7","f8",12)
n(j,"gf9","fa",12)
o(M.c3.prototype,"gS",0,0,null,["$1","$0"],["T","aT"],0,0)
o(j=M.ca.prototype,"gS",0,0,null,["$1","$0"],["T","aT"],0,0)
n(j,"geA","eB",3)
n(j,"geC","eD",3)
o(j=O.dG.prototype,"gaH",0,0,null,["$1","$0"],["P","aU"],0,0)
o(j,"gfl",0,0,null,["$1","$0"],["cI","fm"],0,0)
n(j,"ger","es",13)
n(j,"geu","ev",13)
o(O.cq.prototype,"gaH",0,0,null,["$1","$0"],["P","aU"],0,0)
o(O.e5.prototype,"gaH",0,0,null,["$1","$0"],["P","aU"],0,0)
o(X.dU.prototype,"gey",0,0,null,["$1","$0"],["am","ez"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.J,null)
q(P.J,[H.jT,J.a,J.U,P.cI,P.f,H.aI,P.dy,H.cc,H.eB,H.iF,P.G,H.hY,H.fl,H.bu,P.as,H.hx,H.dD,H.ht,H.ad,H.eY,P.cV,P.bT,P.bo,P.eJ,P.eb,P.ec,P.cA,P.jp,P.cO,P.jd,P.cH,P.C,P.di,P.hq,P.jn,P.az,P.a7,P.O,P.b6,P.dT,P.cy,P.eV,P.hl,P.hn,P.ar,P.dE,P.ab,P.K,P.aN,W.h1,W.jO,W.k5,W.bS,W.E,W.cw,W.cP,W.fq,W.cd,W.aa,W.jh,W.fA,P.cX,P.fe,K.aD,K.dv,K.i1,K.i8,L.ea,L.ej,L.ek,L.iA,O.bv,O.cr,E.fW,E.bx,E.bt,E.bI,E.eS,E.i2,E.ei,Z.eG,Z.eH,Z.c0,Z.ce,Z.aQ,D.fY,D.by,D.Q,X.dh,X.dB,X.hv,X.hz,X.a9,X.hV,X.iC,X.eD,D.bw,D.aq,V.P,V.aF,V.he,V.dH,V.bC,V.a4,V.R,V.aK,V.e0,V.a0,V.y,U.cC,U.cD,U.cE,M.c3,M.ca,M.ae,A.fQ,A.fR,A.V,A.fV,A.h5,A.i_,A.ij,A.hE,A.er,A.es,A.ev,A.ey,A.iH,A.iN,F.hi,F.hw,F.hZ,F.i9,F.ia,F.ib,F.ic,F.iV,F.iX,F.iY,F.j0,F.j1,O.iq,O.cq,O.hF,T.iv,X.jJ,X.io,X.hr,X.dU,V.b4,V.id])
q(J.a,[J.hs,J.ci,J.bc,J.a8,J.bb,J.ap,H.ct,W.b,W.fO,W.dg,W.am,W.F,W.eN,W.a6,W.h4,W.h6,W.eO,W.c7,W.eQ,W.h7,W.h,W.eW,W.b8,W.ho,W.f0,W.ba,W.hy,W.hQ,W.f4,W.f5,W.bf,W.f6,W.f8,W.bh,W.fc,W.ff,W.bi,W.fg,W.bj,W.fm,W.aO,W.fs,W.iz,W.bk,W.fu,W.iD,W.iP,W.fB,W.fD,W.fF,W.fH,W.fJ,P.bB,P.f2,P.bH,P.fa,P.i0,P.fn,P.bO,P.fw,P.fS,P.eK,P.e1,P.fj])
q(J.bc,[J.dV,J.bm,J.ah])
r(J.dz,J.a8)
q(J.bb,[J.ch,J.cg])
r(P.cl,P.cI)
q(P.cl,[H.bP,W.eL,W.T,P.ds])
r(H.l,H.bP)
q(P.f,[H.i,H.be,H.bn,P.cf])
q(H.i,[H.cm,H.aH])
r(H.c8,H.be)
q(P.dy,[H.co,H.eI])
r(H.cp,H.cm)
q(P.G,[H.dP,H.dA,H.eA,H.e2,H.eT,P.de,P.dQ,P.a2,P.eC,P.ez,P.bM,P.dj,P.dl])
q(H.bu,[H.ip,H.hu,H.jy,H.jz,H.jA,P.j5,P.j4,P.j6,P.j7,P.jm,P.jl,P.ju,P.jf,P.jg,P.hA,P.h8,P.h9,W.ha,W.hS,W.hU,W.i7,W.im,W.ja,W.hX,W.hW,W.ji,W.jj,W.jk,W.jo,P.jv,P.hj,P.hk,P.fU,E.i3,E.i4,E.i5,E.iy,D.hg,D.hh,F.jq,F.j3,F.j2,F.iZ,F.j_,O.hI,O.hJ,O.hK,O.hL,O.hM,O.hN,O.hO,O.hP,T.ix,T.iw,V.jF,V.ig,V.ie,V.ih,Q.jD])
q(H.ip,[H.ik,H.c_])
r(P.dF,P.as)
q(P.dF,[H.v,W.j8])
r(H.bG,H.ct)
q(H.bG,[H.cK,H.cM])
r(H.cL,H.cK)
r(H.bg,H.cL)
r(H.cN,H.cM)
r(H.cs,H.cN)
q(H.cs,[H.dJ,H.dK,H.dL,H.dM,H.dN,H.cu,H.dO])
r(H.cW,H.eT)
r(P.cS,P.cf)
r(P.je,P.jp)
r(P.cG,P.cO)
r(P.dk,P.ec)
r(P.hc,P.di)
q(P.dk,[P.hp,P.iR])
r(P.iQ,P.hc)
q(P.O,[P.X,P.r])
q(P.a2,[P.bK,P.dx])
q(W.b,[W.u,W.dr,W.aM,W.cQ,W.aP,W.ai,W.cT,W.eF,W.bQ,P.df,P.aE])
q(W.u,[W.z,W.ag,W.bR])
q(W.z,[W.m,P.j])
q(W.m,[W.dc,W.dd,W.bs,W.b2,W.b3,W.c5,W.dt,W.bA,W.e3,W.cz,W.ee,W.ef,W.bN])
r(W.h0,W.am)
r(W.c4,W.eN)
q(W.a6,[W.h2,W.h3])
r(W.eP,W.eO)
r(W.c6,W.eP)
r(W.eR,W.eQ)
r(W.dp,W.eR)
r(W.b7,W.dg)
r(W.eX,W.eW)
r(W.dq,W.eX)
r(W.f1,W.f0)
r(W.b9,W.f1)
r(W.ax,W.h)
q(W.ax,[W.bd,W.a3,W.bl])
r(W.hR,W.f4)
r(W.hT,W.f5)
r(W.f7,W.f6)
r(W.dI,W.f7)
r(W.f9,W.f8)
r(W.cv,W.f9)
r(W.fd,W.fc)
r(W.dX,W.fd)
r(W.i6,W.ff)
r(W.cR,W.cQ)
r(W.e7,W.cR)
r(W.fh,W.fg)
r(W.e8,W.fh)
r(W.il,W.fm)
r(W.ft,W.fs)
r(W.eg,W.ft)
r(W.cU,W.cT)
r(W.eh,W.cU)
r(W.fv,W.fu)
r(W.el,W.fv)
r(W.aR,W.a3)
r(W.fC,W.fB)
r(W.eM,W.fC)
r(W.cF,W.c7)
r(W.fE,W.fD)
r(W.eZ,W.fE)
r(W.fG,W.fF)
r(W.cJ,W.fG)
r(W.fI,W.fH)
r(W.fi,W.fI)
r(W.fK,W.fJ)
r(W.fp,W.fK)
r(W.j9,W.j8)
r(W.eU,P.eb)
r(W.fr,W.cP)
r(P.ac,P.fe)
r(P.f3,P.f2)
r(P.dC,P.f3)
r(P.fb,P.fa)
r(P.dR,P.fb)
r(P.bL,P.j)
r(P.fo,P.fn)
r(P.ed,P.fo)
r(P.fx,P.fw)
r(P.em,P.fx)
r(P.fT,P.eK)
r(P.dS,P.aE)
r(P.fk,P.fj)
r(P.e9,P.fk)
q(K.dv,[K.a_,L.iE])
q(E.fW,[Z.fX,A.e4,T.ir])
q(D.Q,[D.an,D.ao,D.x,X.dY])
q(X.dY,[X.cn,X.bE,X.bF,X.cB])
q(O.bv,[D.cj,U.bz,M.c1])
q(D.fY,[U.h_,U.S])
r(U.c2,U.S)
q(A.e4,[A.hB,A.ii])
q(A.iH,[A.eo,A.iK,A.iL,A.iM,A.iI,A.en,A.iJ,A.ep,A.eq,A.iO,A.et,A.eu,A.ew,A.ex])
q(O.iq,[O.dG,O.e5])
q(O.cq,[O.hC,O.hD,O.at])
q(O.at,[O.hG,O.hH])
q(T.ir,[T.is,T.iu])
r(T.it,T.is)
r(X.hm,X.io)
q(V.b4,[V.dm,V.du,V.dw,V.dW])
s(H.bP,H.eB)
s(H.cK,P.C)
s(H.cL,H.cc)
s(H.cM,P.C)
s(H.cN,H.cc)
s(P.cI,P.C)
s(W.eN,W.h1)
s(W.eO,P.C)
s(W.eP,W.E)
s(W.eQ,P.C)
s(W.eR,W.E)
s(W.eW,P.C)
s(W.eX,W.E)
s(W.f0,P.C)
s(W.f1,W.E)
s(W.f4,P.as)
s(W.f5,P.as)
s(W.f6,P.C)
s(W.f7,W.E)
s(W.f8,P.C)
s(W.f9,W.E)
s(W.fc,P.C)
s(W.fd,W.E)
s(W.ff,P.as)
s(W.cQ,P.C)
s(W.cR,W.E)
s(W.fg,P.C)
s(W.fh,W.E)
s(W.fm,P.as)
s(W.fs,P.C)
s(W.ft,W.E)
s(W.cT,P.C)
s(W.cU,W.E)
s(W.fu,P.C)
s(W.fv,W.E)
s(W.fB,P.C)
s(W.fC,W.E)
s(W.fD,P.C)
s(W.fE,W.E)
s(W.fF,P.C)
s(W.fG,W.E)
s(W.fH,P.C)
s(W.fI,W.E)
s(W.fJ,P.C)
s(W.fK,W.E)
s(P.f2,P.C)
s(P.f3,W.E)
s(P.fa,P.C)
s(P.fb,W.E)
s(P.fn,P.C)
s(P.fo,W.E)
s(P.fw,P.C)
s(P.fx,W.E)
s(P.eK,P.as)
s(P.fj,P.C)
s(P.fk,W.E)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{r:"int",X:"double",O:"num",K:"String",az:"bool",ab:"Null",ar:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([Q*])","~(Q*)","~(a3*)","~(r*,f<bx*>*)","~(h*)","~(bl*)","~(~())","~()","~(bd*)","~(r*,f<aq*>*)","X*()","~(r*,f<S*>*)","~(r*,f<ae*>*)","~(r*,f<bC*>*)","az(z,K,K,bS)","@(@)","ab(@)","ab(J?,J?)","ab(@,@)","~(aR*)","az*(f<aq*>*)","r(@,@)","K(b)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.nb(v.typeUniverse,JSON.parse('{"ah":"bc","dV":"bc","bm":"bc","oB":"h","oL":"h","oD":"aE","oC":"b","oR":"b","oT":"b","oA":"j","oM":"j","oE":"m","oP":"m","oN":"u","oK":"u","pg":"ai","oI":"ax","oF":"ag","oU":"ag","oS":"a3","oO":"b9","oQ":"bg","a8":{"i":["1"],"f":["1"]},"dz":{"i":["1"],"f":["1"]},"bb":{"X":[],"O":[]},"ch":{"X":[],"r":[],"O":[]},"cg":{"X":[],"O":[]},"ap":{"K":[]},"l":{"i":["r"],"f":["r"]},"i":{"f":["1"]},"cm":{"i":["1"],"f":["1"]},"be":{"f":["2"]},"c8":{"i":["2"],"f":["2"]},"cp":{"i":["2"],"f":["2"]},"bn":{"f":["1"]},"bP":{"i":["1"],"f":["1"]},"dP":{"G":[]},"dA":{"G":[]},"eA":{"G":[]},"e2":{"G":[]},"aH":{"i":["1"],"f":["1"]},"bG":{"t":["1"]},"bg":{"t":["X"],"i":["X"],"f":["X"]},"cs":{"t":["r"],"i":["r"],"f":["r"]},"dJ":{"t":["r"],"i":["r"],"f":["r"]},"dK":{"t":["r"],"i":["r"],"f":["r"]},"dL":{"t":["r"],"i":["r"],"f":["r"]},"dM":{"t":["r"],"i":["r"],"f":["r"]},"dN":{"t":["r"],"i":["r"],"f":["r"]},"cu":{"t":["r"],"i":["r"],"f":["r"]},"dO":{"t":["r"],"i":["r"],"f":["r"]},"eT":{"G":[]},"cW":{"G":[]},"cV":{"cA":[]},"cS":{"f":["1"]},"cG":{"i":["1"],"f":["1"]},"cf":{"f":["1"]},"cl":{"i":["1"],"f":["1"]},"cO":{"i":["1"],"f":["1"]},"X":{"O":[]},"de":{"G":[]},"dQ":{"G":[]},"a2":{"G":[]},"bK":{"G":[]},"dx":{"G":[]},"eC":{"G":[]},"ez":{"G":[]},"bM":{"G":[]},"dj":{"G":[]},"dT":{"G":[]},"cy":{"G":[]},"dl":{"G":[]},"r":{"O":[]},"ar":{"i":["1"],"f":["1"]},"m":{"z":[],"u":[],"b":[]},"dc":{"z":[],"u":[],"b":[]},"dd":{"z":[],"u":[],"b":[]},"bs":{"z":[],"u":[],"b":[]},"b2":{"z":[],"u":[],"b":[]},"b3":{"z":[],"u":[],"b":[]},"ag":{"u":[],"b":[]},"c5":{"z":[],"u":[],"b":[]},"c6":{"t":["ac<O>"],"i":["ac<O>"],"f":["ac<O>"]},"c7":{"ac":["O"]},"dp":{"t":["K"],"i":["K"],"f":["K"]},"eL":{"i":["z"],"f":["z"]},"z":{"u":[],"b":[]},"dq":{"t":["b7"],"i":["b7"],"f":["b7"]},"dr":{"b":[]},"dt":{"z":[],"u":[],"b":[]},"b9":{"t":["u"],"i":["u"],"f":["u"]},"bA":{"z":[],"u":[],"b":[]},"bd":{"h":[]},"dI":{"t":["bf"],"i":["bf"],"f":["bf"]},"a3":{"h":[]},"T":{"i":["u"],"f":["u"]},"u":{"b":[]},"cv":{"t":["u"],"i":["u"],"f":["u"]},"dX":{"t":["bh"],"i":["bh"],"f":["bh"]},"e3":{"z":[],"u":[],"b":[]},"aM":{"b":[]},"e7":{"t":["aM"],"b":[],"i":["aM"],"f":["aM"]},"e8":{"t":["bi"],"i":["bi"],"f":["bi"]},"cz":{"z":[],"u":[],"b":[]},"ee":{"z":[],"u":[],"b":[]},"ef":{"z":[],"u":[],"b":[]},"bN":{"z":[],"u":[],"b":[]},"aP":{"b":[]},"ai":{"b":[]},"eg":{"t":["ai"],"i":["ai"],"f":["ai"]},"eh":{"t":["aP"],"b":[],"i":["aP"],"f":["aP"]},"bl":{"h":[]},"el":{"t":["bk"],"i":["bk"],"f":["bk"]},"ax":{"h":[]},"eF":{"b":[]},"aR":{"a3":[],"h":[]},"bQ":{"b":[]},"bR":{"u":[],"b":[]},"eM":{"t":["F"],"i":["F"],"f":["F"]},"cF":{"ac":["O"]},"eZ":{"t":["b8?"],"i":["b8?"],"f":["b8?"]},"cJ":{"t":["u"],"i":["u"],"f":["u"]},"fi":{"t":["bj"],"i":["bj"],"f":["bj"]},"fp":{"t":["aO"],"i":["aO"],"f":["aO"]},"bS":{"aa":[]},"cw":{"aa":[]},"cP":{"aa":[]},"fr":{"aa":[]},"fq":{"aa":[]},"cX":{"ba":[]},"ds":{"i":["z"],"f":["z"]},"ac":{"fe":["1"]},"dC":{"i":["bB"],"f":["bB"]},"dR":{"i":["bH"],"f":["bH"]},"bL":{"j":[],"z":[],"u":[],"b":[]},"ed":{"i":["K"],"f":["K"]},"j":{"z":[],"u":[],"b":[]},"em":{"i":["bO"],"f":["bO"]},"df":{"b":[]},"aE":{"b":[]},"dS":{"b":[]},"e9":{"i":["dE<@,@>"],"f":["dE<@,@>"]},"bv":{"f":["1*"]},"an":{"Q":[]},"ao":{"Q":[]},"x":{"Q":[]},"cn":{"Q":[]},"bE":{"Q":[]},"bF":{"Q":[]},"dY":{"Q":[]},"cB":{"Q":[]},"bw":{"aq":[]},"cj":{"f":["aq*"]},"c2":{"S":[]},"bz":{"S":[],"f":["S*"]},"cC":{"S":[]},"cD":{"S":[]},"cE":{"S":[]},"c1":{"ae":[],"f":["ae*"]},"c3":{"ae":[]},"ca":{"ae":[]},"dm":{"b4":[]},"du":{"b4":[]},"dw":{"b4":[]},"dW":{"b4":[]}}'))
H.na(v.typeUniverse,JSON.parse('{"a8":1,"dz":1,"U":1,"i":1,"cm":1,"aI":1,"be":2,"c8":2,"co":2,"cp":2,"bn":1,"eI":1,"cc":1,"eB":1,"bP":1,"aH":1,"dD":1,"bG":1,"bo":1,"cS":1,"eb":1,"ec":2,"cH":1,"cf":1,"cl":1,"C":1,"dF":2,"as":2,"cO":1,"cI":1,"di":2,"dk":2,"f":1,"dy":1,"ar":1,"eU":1,"E":1,"cd":1,"bv":1,"an":1,"ao":1,"x":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"}
var t=(function rtii(){var s=H.of
return{v:s("bs"),t:s("b2"),U:s("i<@>"),h:s("z"),C:s("G"),D:s("h"),Z:s("hn"),s:s("ba"),R:s("bA"),b:s("a8<@>"),T:s("ci"),g:s("ah"),p:s("t<@>"),G:s("v<K*,e4*>"),V:s("v<K*,ea*>"),i:s("v<K*,K*>"),w:s("v<K*,ek*>"),u:s("v<r*,ar<er*>*>"),L:s("v<r*,ar<es*>*>"),W:s("v<r*,ar<ev*>*>"),M:s("v<r*,ar<ey*>*>"),J:s("v<r*,eo*>"),E:s("v<r*,az*>"),a:s("v<r*,r*>"),P:s("ab"),K:s("J"),I:s("ac<O>"),Y:s("bL"),N:s("K"),k:s("j"),f:s("bN"),l:s("cA"),o:s("bm"),x:s("bR"),cB:s("az"),cb:s("X"),z:s("@"),S:s("r"),B:s("b3*"),cj:s("cn*"),d:s("bE*"),F:s("bF*"),A:s("0&*"),_:s("J*"),bw:s("K*"),j:s("ej*"),m:s("cB*"),n:s("en*"),r:s("ep*"),y:s("eq*"),O:s("et*"),q:s("eu*"),c:s("ew*"),Q:s("ex*"),e:s("r*"),bc:s("kE<ab>?"),X:s("J?"),H:s("O")}})();(function constants(){var s=hunkHelpers.makeConstList
C.m=W.b2.prototype
C.f=W.b3.prototype
C.K=W.c5.prototype
C.N=J.a.prototype
C.a=J.a8.prototype
C.O=J.cg.prototype
C.c=J.ch.prototype
C.h=J.ci.prototype
C.d=J.bb.prototype
C.b=J.ap.prototype
C.P=J.ah.prototype
C.v=J.dV.prototype
C.w=P.e1.prototype
C.x=W.cz.prototype
C.l=J.bm.prototype
C.y=W.aR.prototype
C.z=W.bQ.prototype
C.A=new E.bt("Browser.chrome")
C.n=new E.bt("Browser.firefox")
C.o=new E.bt("Browser.edge")
C.B=new E.bt("Browser.other")
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.C=function() {
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
C.H=function(getTagFallback) {
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
C.D=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.E=function(hooks) {
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
C.G=function(hooks) {
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
C.F=function(hooks) {
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

C.I=new P.dT()
C.i=new P.iQ()
C.J=new P.iR()
C.e=new P.je()
C.j=new P.b6(0)
C.L=new P.b6(5e6)
C.M=new P.hq("element",!1,!1,!1)
C.Q=s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"])
C.R=s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.S=s([])
C.r=s([0,0,65498,45055,65535,34815,65534,18431])
C.t=s(["bind","if","ref","repeat","syntax"])
C.k=s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"])
C.T=new E.bI("OperatingSystem.windows")
C.u=new E.bI("OperatingSystem.mac")
C.U=new E.bI("OperatingSystem.linux")
C.V=new E.bI("OperatingSystem.other")
C.W=new P.bT(null,2)})();(function staticFields(){$.lb=null
$.al=0
$.kw=null
$.kv=null
$.lv=null
$.lt=null
$.lA=null
$.jw=null
$.jB=null
$.kj=null
$.bU=null
$.d3=null
$.d4=null
$.ke=!1
$.aj=C.e
$.a1=[]
$.aG=null
$.jN=null
$.kC=null
$.kB=null
$.f_=P.kI(t.N,t.Z)
$.hd=null
$.kM=null
$.kQ=null
$.av=null
$.kW=null
$.l4=null
$.l6=null
$.iS=null
$.iT=null
$.iU=null
$.l5=null
$.kP=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"oJ","lG",function(){return H.oi("_$dart_dartClosure")})
s($,"oV","lH",function(){return H.aw(H.iG({
toString:function(){return"$receiver$"}}))})
s($,"oW","lI",function(){return H.aw(H.iG({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"oX","lJ",function(){return H.aw(H.iG(null))})
s($,"oY","lK",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"p0","lN",function(){return H.aw(H.iG(void 0))})
s($,"p1","lO",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"p_","lM",function(){return H.aw(H.l2(null))})
s($,"oZ","lL",function(){return H.aw(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"p3","lQ",function(){return H.aw(H.l2(void 0))})
s($,"p2","lP",function(){return H.aw(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"ph","kp",function(){return P.mO()})
s($,"pk","lV",function(){return P.mC("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"pi","lU",function(){return P.kJ(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"pa","lT",function(){return Z.af(0)})
s($,"p4","lR",function(){return Z.af(511)})
s($,"pc","ak",function(){return Z.af(1)})
s($,"pb","aZ",function(){return Z.af(2)})
s($,"p6","aY",function(){return Z.af(4)})
s($,"pd","b_",function(){return Z.af(8)})
s($,"pe","br",function(){return Z.af(16)})
s($,"p7","d8",function(){return Z.af(32)})
s($,"p8","d9",function(){return Z.af(64)})
s($,"p9","lS",function(){return Z.af(96)})
s($,"pf","bZ",function(){return Z.af(128)})
s($,"p5","aX",function(){return Z.af(256)})
s($,"oH","lF",function(){return new V.he()})
s($,"oG","B",function(){return $.lF()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.ct,ArrayBufferView:H.ct,Float32Array:H.bg,Float64Array:H.bg,Int16Array:H.dJ,Int32Array:H.dK,Int8Array:H.dL,Uint16Array:H.dM,Uint32Array:H.dN,Uint8ClampedArray:H.cu,CanvasPixelArray:H.cu,Uint8Array:H.dO,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLInputElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTextAreaElement:W.m,HTMLTimeElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLFrameSetElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,AccessibleNodeList:W.fO,HTMLAnchorElement:W.dc,HTMLAreaElement:W.dd,HTMLBaseElement:W.bs,Blob:W.dg,HTMLBodyElement:W.b2,HTMLCanvasElement:W.b3,CDATASection:W.ag,CharacterData:W.ag,Comment:W.ag,ProcessingInstruction:W.ag,Text:W.ag,CSSPerspective:W.h0,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.c4,MSStyleCSSProperties:W.c4,CSS2Properties:W.c4,CSSImageValue:W.a6,CSSKeywordValue:W.a6,CSSNumericValue:W.a6,CSSPositionValue:W.a6,CSSResourceValue:W.a6,CSSUnitValue:W.a6,CSSURLImageValue:W.a6,CSSStyleValue:W.a6,CSSMatrixComponent:W.am,CSSRotation:W.am,CSSScale:W.am,CSSSkew:W.am,CSSTranslation:W.am,CSSTransformComponent:W.am,CSSTransformValue:W.h2,CSSUnparsedValue:W.h3,DataTransferItemList:W.h4,HTMLDivElement:W.c5,DOMException:W.h6,ClientRectList:W.c6,DOMRectList:W.c6,DOMRectReadOnly:W.c7,DOMStringList:W.dp,DOMTokenList:W.h7,Element:W.z,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,SubmitEvent:W.h,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.b7,FileList:W.dq,FileWriter:W.dr,HTMLFormElement:W.dt,Gamepad:W.b8,History:W.ho,HTMLCollection:W.b9,HTMLFormControlsCollection:W.b9,HTMLOptionsCollection:W.b9,ImageData:W.ba,HTMLImageElement:W.bA,KeyboardEvent:W.bd,Location:W.hy,MediaList:W.hQ,MIDIInputMap:W.hR,MIDIOutputMap:W.hT,MimeType:W.bf,MimeTypeArray:W.dI,PointerEvent:W.a3,MouseEvent:W.a3,DragEvent:W.a3,Document:W.u,DocumentFragment:W.u,HTMLDocument:W.u,ShadowRoot:W.u,XMLDocument:W.u,DocumentType:W.u,Node:W.u,NodeList:W.cv,RadioNodeList:W.cv,Plugin:W.bh,PluginArray:W.dX,RTCStatsReport:W.i6,HTMLSelectElement:W.e3,SourceBuffer:W.aM,SourceBufferList:W.e7,SpeechGrammar:W.bi,SpeechGrammarList:W.e8,SpeechRecognitionResult:W.bj,Storage:W.il,CSSStyleSheet:W.aO,StyleSheet:W.aO,HTMLTableElement:W.cz,HTMLTableRowElement:W.ee,HTMLTableSectionElement:W.ef,HTMLTemplateElement:W.bN,TextTrack:W.aP,TextTrackCue:W.ai,VTTCue:W.ai,TextTrackCueList:W.eg,TextTrackList:W.eh,TimeRanges:W.iz,Touch:W.bk,TouchEvent:W.bl,TouchList:W.el,TrackDefaultList:W.iD,CompositionEvent:W.ax,FocusEvent:W.ax,TextEvent:W.ax,UIEvent:W.ax,URL:W.iP,VideoTrackList:W.eF,WheelEvent:W.aR,Window:W.bQ,DOMWindow:W.bQ,Attr:W.bR,CSSRuleList:W.eM,ClientRect:W.cF,DOMRect:W.cF,GamepadList:W.eZ,NamedNodeMap:W.cJ,MozNamedAttrMap:W.cJ,SpeechRecognitionResultList:W.fi,StyleSheetList:W.fp,SVGLength:P.bB,SVGLengthList:P.dC,SVGNumber:P.bH,SVGNumberList:P.dR,SVGPointList:P.i0,SVGScriptElement:P.bL,SVGStringList:P.ed,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.bO,SVGTransformList:P.em,AudioBuffer:P.fS,AudioParamMap:P.fT,AudioTrackList:P.df,AudioContext:P.aE,webkitAudioContext:P.aE,BaseAudioContext:P.aE,OfflineAudioContext:P.dS,WebGL2RenderingContext:P.e1,SQLResultSetRowList:P.e9})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bG.$nativeSuperclassTag="ArrayBufferView"
H.cK.$nativeSuperclassTag="ArrayBufferView"
H.cL.$nativeSuperclassTag="ArrayBufferView"
H.bg.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.cs.$nativeSuperclassTag="ArrayBufferView"
W.cQ.$nativeSuperclassTag="EventTarget"
W.cR.$nativeSuperclassTag="EventTarget"
W.cT.$nativeSuperclassTag="EventTarget"
W.cU.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Q.ly,[])
else Q.ly([])})})()
//# sourceMappingURL=test.dart.js.map
