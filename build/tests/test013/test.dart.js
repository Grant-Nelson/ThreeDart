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
a[c]=function(){a[c]=function(){H.oz(b)}
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
if(w[s][a])return w[s][a]}}var C={},H={jV:function jV(){},
ms:function(a,b){if(t.U.b(a))return new H.c8(a,b)
return new H.bb(a,b)},
hs:function(){return new P.bM("No element")},
mm:function(){return new P.bM("Too many elements")},
mM:function(a,b){var s=J.aZ(a)
if(typeof s!=="number")return s.a_()
H.e6(a,0,s-1,b)},
e6:function(a,b,c,d){if(c-b<=32)H.mL(a,b,c,d)
else H.mK(a,b,c,d)},
mL:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.bo(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.Z()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
mK:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.a0(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.a0(a6+a7,2),d=e-h,c=e+h,b=J.bo(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
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
a2=s}b.m(a5,g,a)
b.m(a5,e,a1)
b.m(a5,f,a3)
b.m(a5,d,b.h(a5,a6))
b.m(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.F(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.aa()
if(n<0){if(p!==r){b.m(a5,p,b.h(a5,r))
b.m(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.Z()
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
if(typeof i!=="number")return i.Z()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.Z()
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
if(r<g&&q>f){for(;J.F(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.F(a8.$2(b.h(a5,q),a2),0);)--q
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
k:function k(a){this.a=a},
i:function i(){},
ck:function ck(){},
aI:function aI(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bb:function bb(a,b){this.a=a
this.b=b},
c8:function c8(a,b){this.a=a
this.b=b},
cm:function cm(a,b){this.a=null
this.b=a
this.c=b},
cn:function cn(a,b){this.a=a
this.b=b},
bm:function bm(a,b){this.a=a
this.b=b},
eH:function eH(a,b){this.a=a
this.b=b},
cb:function cb(){},
eB:function eB(){},
bP:function bP(){},
lI:function(a){var s,r=H.lH(a)
if(r!=null)return r
s="minified:"+a
return s},
or:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
d:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.af(a)
if(typeof s!="string")throw H.c(H.aT(a))
return s},
cu:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
dZ:function(a){return H.mv(a)},
mv:function(a){var s,r,q
if(a instanceof P.K)return H.a4(H.d4(a),null)
if(J.d3(a)===C.M||t.o.b(a)){s=C.p(a)
if(H.kS(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.kS(q))return q}}return H.a4(H.d4(a),null)},
kS:function(a){var s=a!=="Object"&&a!==""
return s},
kR:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
mE:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.m)(a),++r){q=a[r]
if(!H.d_(q))throw H.c(H.aT(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.bd(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.aT(q))}return H.kR(p)},
mD:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.d_(q))throw H.c(H.aT(q))
if(q<0)throw H.c(H.aT(q))
if(q>65535)return H.mE(a)}return H.kR(a)},
jZ:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.bd(s,10))>>>0,56320|s&1023)}throw H.c(P.aK(a,0,1114111,null,null))},
bJ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mC:function(a){var s=H.bJ(a).getFullYear()+0
return s},
mA:function(a){var s=H.bJ(a).getMonth()+1
return s},
mw:function(a){var s=H.bJ(a).getDate()+0
return s},
mx:function(a){var s=H.bJ(a).getHours()+0
return s},
mz:function(a){var s=H.bJ(a).getMinutes()+0
return s},
mB:function(a){var s=H.bJ(a).getSeconds()+0
return s},
my:function(a){var s=H.bJ(a).getMilliseconds()+0
return s},
p:function(a){throw H.c(H.aT(a))},
e:function(a,b){if(a==null)J.aZ(a)
throw H.c(H.bX(a,b))},
bX:function(a,b){var s,r,q="index"
if(!H.d_(b))return new P.a1(!0,b,q,null)
s=J.aZ(a)
if(!(b<0)){if(typeof s!=="number")return H.p(s)
r=b>=s}else r=!0
if(r)return P.I(b,a,q,null,s)
return P.e_(b,q)},
of:function(a,b,c){if(a>c)return P.aK(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aK(b,a,c,"end",null)
return new P.a1(!0,b,"end",null)},
aT:function(a){return new P.a1(!0,a,null,null)},
o9:function(a){if(typeof a!="number")throw H.c(H.aT(a))
return a},
c:function(a){var s,r
if(a==null)a=new P.dQ()
s=new Error()
s.dartException=a
r=H.oA
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
oA:function(){return J.af(this.dartException)},
q:function(a){throw H.c(a)},
m:function(a){throw H.c(P.b2(a))},
aw:function(a){var s,r,q,p,o,n
a=H.lF(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.iE(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
iF:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
l2:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
kM:function(a,b){return new H.dP(a,b==null?null:b.method)},
jW:function(a,b){var s=b==null,r=s?null:b.method
return new H.dz(a,r,s?null:b.receiver)},
aC:function(a){if(a==null)return new H.i_(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bp(a,a.dartException)
return H.o5(a)},
bp:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
o5:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.bd(r,16)&8191)===10)switch(q){case 438:return H.bp(a,H.jW(H.d(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bp(a,H.kM(H.d(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.lL()
o=$.lM()
n=$.lN()
m=$.lO()
l=$.lR()
k=$.lS()
j=$.lQ()
$.lP()
i=$.lU()
h=$.lT()
g=p.ad(s)
if(g!=null)return H.bp(a,H.jW(s,g))
else{g=o.ad(s)
if(g!=null){g.method="call"
return H.bp(a,H.jW(s,g))}else{g=n.ad(s)
if(g==null){g=m.ad(s)
if(g==null){g=l.ad(s)
if(g==null){g=k.ad(s)
if(g==null){g=j.ad(s)
if(g==null){g=m.ad(s)
if(g==null){g=i.ad(s)
if(g==null){g=h.ad(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bp(a,H.kM(s,g))}}return H.bp(a,new H.eA(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cv()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bp(a,new P.a1(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cv()
return a},
ki:function(a){var s
if(a==null)return new H.fk(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.fk(a)},
oh:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
oq:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.o("Unsupported number of arguments for wrapped closure"))},
bW:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oq)
a.$identity=s
return s},
mg:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.im().constructor.prototype):Object.create(new H.c_(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.al
if(typeof r!=="number")return r.v()
$.al=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.ky(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.mc(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ky(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
mc:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lA,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.ma:H.m9
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
md:function(a,b,c,d){var s=H.kx
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
ky:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.mf(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.md(r,!p,s,b)
if(r===0){p=$.al
if(typeof p!=="number")return p.v()
$.al=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.d(H.jL())+";return "+n+"."+H.d(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.al
if(typeof p!=="number")return p.v()
$.al=p+1
m+=p
return new Function("return function("+m+"){return this."+H.d(H.jL())+"."+H.d(s)+"("+m+");}")()},
me:function(a,b,c,d){var s=H.kx,r=H.mb
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
mf:function(a,b){var s,r,q,p,o,n,m=H.jL(),l=$.kv
if(l==null)l=$.kv=H.ku("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.me(r,!p,s,b)
if(r===1){p="return function(){return this."+H.d(m)+"."+H.d(s)+"(this."+l+");"
o=$.al
if(typeof o!=="number")return o.v()
$.al=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.d(m)+"."+H.d(s)+"(this."+l+", "+n+");"
o=$.al
if(typeof o!=="number")return o.v()
$.al=o+1
return new Function(p+o+"}")()},
kg:function(a,b,c,d,e,f,g){return H.mg(a,b,c,d,!!e,!!f,g)},
m9:function(a,b){return H.fy(v.typeUniverse,H.d4(a.a),b)},
ma:function(a,b){return H.fy(v.typeUniverse,H.d4(a.c),b)},
kx:function(a){return a.a},
mb:function(a){return a.c},
jL:function(){var s=$.kw
return s==null?$.kw=H.ku("self"):s},
ku:function(a){var s,r,q,p=new H.c_("self","target","receiver","name"),o=J.jU(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.jK("Field name "+a+" not found."))},
oz:function(a){throw H.c(new P.di(a))},
ok:function(a){return v.getIsolateTag(a)},
pD:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ot:function(a){var s,r,q,p,o,n=$.lz.$1(a),m=$.jy[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jD[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.lw.$2(a,n)
if(q!=null){m=$.jy[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jD[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.jG(s)
$.jy[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jD[n]=s
return s}if(p==="-"){o=H.jG(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lD(a,s)
if(p==="*")throw H.c(P.l3(n))
if(v.leafTags[n]===true){o=H.jG(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lD(a,s)},
lD:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.kk(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jG:function(a){return J.kk(a,!1,null,!!a.$it)},
ou:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.jG(s)
else return J.kk(s,c,null,null)},
oo:function(){if(!0===$.kj)return
$.kj=!0
H.op()},
op:function(){var s,r,q,p,o,n,m,l
$.jy=Object.create(null)
$.jD=Object.create(null)
H.on()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.lE.$1(o)
if(n!=null){m=H.ou(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
on:function(){var s,r,q,p,o,n,m=C.B()
m=H.bV(C.C,H.bV(C.D,H.bV(C.q,H.bV(C.q,H.bV(C.E,H.bV(C.F,H.bV(C.G(C.p),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.lz=new H.jA(p)
$.lw=new H.jB(o)
$.lE=new H.jC(n)},
bV:function(a,b){return a(b)||b},
mq:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.hl("Illegal RegExp pattern ("+String(n)+")",a))},
lG:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
og:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lF:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kn:function(a,b,c){var s=H.ox(a,b,c)
return s},
ox:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lF(b),'g'),H.og(c))},
iE:function iE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dP:function dP(a,b){this.a=a
this.b=b},
dz:function dz(a,b,c){this.a=a
this.b=b
this.c=c},
eA:function eA(a){this.a=a},
i_:function i_(a){this.a=a},
fk:function fk(a){this.a=a
this.b=null},
bu:function bu(){},
ir:function ir(){},
im:function im(){},
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
hv:function hv(a){this.a=a},
hy:function hy(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aH:function aH(a){this.a=a},
dC:function dC(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jA:function jA(a){this.a=a},
jB:function jB(a){this.a=a},
jC:function jC(a){this.a=a},
hu:function hu(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cY:function(a){return a},
ay:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bX(b,a))},
nj:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.of(a,b,c))
return b},
cq:function cq(){},
bG:function bG(){},
bd:function bd(){},
cp:function cp(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
cr:function cr(){},
dO:function dO(){},
cI:function cI(){},
cJ:function cJ(){},
cK:function cK(){},
cL:function cL(){},
mI:function(a,b){var s=b.c
return s==null?b.c=H.ka(a,b.z,!0):s},
kW:function(a,b){var s=b.c
return s==null?b.c=H.cW(a,"kE",[b.z]):s},
kX:function(a){var s=a.y
if(s===6||s===7||s===8)return H.kX(a.z)
return s===11||s===12},
mH:function(a){return a.cy},
oi:function(a){return H.kb(v.typeUniverse,a,!1)},
aS:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aS(a,s,a0,a1)
if(r===s)return b
return H.lm(a,r,!0)
case 7:s=b.z
r=H.aS(a,s,a0,a1)
if(r===s)return b
return H.ka(a,r,!0)
case 8:s=b.z
r=H.aS(a,s,a0,a1)
if(r===s)return b
return H.ll(a,r,!0)
case 9:q=b.Q
p=H.d2(a,q,a0,a1)
if(p===q)return b
return H.cW(a,b.z,p)
case 10:o=b.z
n=H.aS(a,o,a0,a1)
m=b.Q
l=H.d2(a,m,a0,a1)
if(n===o&&l===m)return b
return H.k8(a,n,l)
case 11:k=b.z
j=H.aS(a,k,a0,a1)
i=b.Q
h=H.o2(a,i,a0,a1)
if(j===k&&h===i)return b
return H.lk(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.d2(a,g,a0,a1)
o=b.z
n=H.aS(a,o,a0,a1)
if(f===g&&n===o)return b
return H.k9(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.fO("Attempted to substitute unexpected RTI kind "+c))}},
d2:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aS(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
o3:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aS(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
o2:function(a,b,c,d){var s,r=b.a,q=H.d2(a,r,c,d),p=b.b,o=H.d2(a,p,c,d),n=b.c,m=H.o3(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.eX()
s.a=q
s.b=o
s.c=m
return s},
pF:function(a,b){a[v.arrayRti]=b
return a},
oa:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.lA(s)
return a.$S()}return null},
lB:function(a,b){var s
if(H.kX(b))if(a instanceof H.bu){s=H.oa(a)
if(s!=null)return s}return H.d4(a)},
d4:function(a){var s
if(a instanceof P.K){s=a.$ti
return s!=null?s:H.kd(a)}if(Array.isArray(a))return H.ng(a)
return H.kd(J.d3(a))},
ng:function(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
np:function(a){var s=a.$ti
return s!=null?s:H.kd(a)},
kd:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.nq(a,s)},
nq:function(a,b){var s=a instanceof H.bu?a.__proto__.__proto__.constructor:b,r=H.nf(v.typeUniverse,s.name)
b.$ccache=r
return r},
lA:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.kb(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
no:function(a){var s,r,q=this,p=t.K
if(q===p)return H.cZ(q,a,H.nu)
if(!H.aB(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.cZ(q,a,H.nx)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.d_
else if(s===t.cb||s===t.H)r=H.nt
else if(s===t.N)r=H.nv
else r=s===t.cB?H.ls:null
if(r!=null)return H.cZ(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.os)){q.r="$i"+p
return H.cZ(q,a,H.nw)}}else if(p===7)return H.cZ(q,a,H.nm)
return H.cZ(q,a,H.nk)},
cZ:function(a,b,c){a.b=c
return a.b(b)},
nn:function(a){var s,r,q=this
if(!H.aB(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.ni
else if(q===t.K)r=H.nh
else r=H.nl
q.a=r
return q.a(a)},
nW:function(a){var s,r=a.y
if(!H.aB(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
nk:function(a){var s=this
if(a==null)return H.nW(s)
return H.N(v.typeUniverse,H.lB(a,s),null,s,null)},
nm:function(a){if(a==null)return!0
return this.z.b(a)},
nw:function(a){var s=this,r=s.r
if(a instanceof P.K)return!!a[r]
return!!J.d3(a)[r]},
pC:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.lq(a,s)},
nl:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.lq(a,s)},
lq:function(a,b){throw H.c(H.n5(H.lc(a,H.lB(a,b),H.a4(b,null))))},
lc:function(a,b,c){var s=P.he(a),r=H.a4(b==null?H.d4(a):b,null)
return s+": type '"+H.d(r)+"' is not a subtype of type '"+H.d(c)+"'"},
n5:function(a){return new H.cU("TypeError: "+a)},
W:function(a,b){return new H.cU("TypeError: "+H.lc(a,null,b))},
nu:function(a){return a!=null},
nh:function(a){return a},
nx:function(a){return!0},
ni:function(a){return a},
ls:function(a){return!0===a||!1===a},
po:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.W(a,"bool"))},
pq:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.W(a,"bool"))},
pp:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.W(a,"bool?"))},
pr:function(a){if(typeof a=="number")return a
throw H.c(H.W(a,"double"))},
pt:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.W(a,"double"))},
ps:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.W(a,"double?"))},
d_:function(a){return typeof a=="number"&&Math.floor(a)===a},
pu:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.W(a,"int"))},
pw:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.W(a,"int"))},
pv:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.W(a,"int?"))},
nt:function(a){return typeof a=="number"},
px:function(a){if(typeof a=="number")return a
throw H.c(H.W(a,"num"))},
pz:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.W(a,"num"))},
py:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.W(a,"num?"))},
nv:function(a){return typeof a=="string"},
pA:function(a){if(typeof a=="string")return a
throw H.c(H.W(a,"String"))},
kc:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.W(a,"String"))},
pB:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.W(a,"String?"))},
nZ:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.b.v(r,H.a4(a[q],b))
return s},
lr:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=[]
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.X,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.e(a6,i)
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
a2+=J.kp(H.a4(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.d(a1)},
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
return J.kp(q===11||q===12?C.b.v("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.d(H.a4(a.z,b))+">"
if(l===9){p=H.o4(a.z)
o=a.Q
return o.length!==0?p+("<"+H.nZ(o,b)+">"):p}if(l===11)return H.lr(a,b,null)
if(l===12)return H.lr(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.e(b,n)
return b[n]}return"?"},
o4:function(a){var s,r=H.lH(a)
if(r!=null)return r
s="minified:"+a
return s},
ln:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
nf:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.kb(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cX(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cW(a,b,q)
n[b]=o
return o}else return m},
nd:function(a,b){return H.lp(a.tR,b)},
nc:function(a,b){return H.lp(a.eT,b)},
kb:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.li(H.lg(a,null,b,c))
r.set(b,s)
return s},
fy:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.li(H.lg(a,b,c,!0))
q.set(c,r)
return r},
ne:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.k8(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aR:function(a,b){b.a=H.nn
b.b=H.no
return b},
cX:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ac(null,null)
s.y=b
s.cy=c
r=H.aR(a,s)
a.eC.set(c,r)
return r},
lm:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.na(a,b,r,c)
a.eC.set(r,s)
return s},
na:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aB(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ac(null,null)
q.y=6
q.z=b
q.cy=c
return H.aR(a,q)},
ka:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.n9(a,b,r,c)
a.eC.set(r,s)
return s},
n9:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aB(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.jE(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.jE(q.z))return q
else return H.mI(a,b)}}p=new H.ac(null,null)
p.y=7
p.z=b
p.cy=c
return H.aR(a,p)},
ll:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.n7(a,b,r,c)
a.eC.set(r,s)
return s},
n7:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aB(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cW(a,"kE",[b])
else if(b===t.P||b===t.T)return t.bc}q=new H.ac(null,null)
q.y=8
q.z=b
q.cy=c
return H.aR(a,q)},
nb:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ac(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aR(a,s)
a.eC.set(q,r)
return r},
fx:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
n6:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cW:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fx(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ac(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aR(a,r)
a.eC.set(p,q)
return q},
k8:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fx(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ac(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aR(a,o)
a.eC.set(q,n)
return n},
lk:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fx(m)
if(j>0){s=l>0?",":""
r=H.fx(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.n6(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ac(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aR(a,o)
a.eC.set(q,r)
return r},
k9:function(a,b,c,d){var s,r=b.cy+("<"+H.fx(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.n8(a,b,c,r,d)
a.eC.set(r,s)
return s},
n8:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aS(a,b,r,0)
m=H.d2(a,c,r,0)
return H.k9(a,n,m,c!==m)}}l=new H.ac(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aR(a,l)},
lg:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
li:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.n_(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.lh(a,r,g,f,!1)
else if(q===46)r=H.lh(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.aQ(a.u,a.e,f.pop()))
break
case 94:f.push(H.nb(a.u,f.pop()))
break
case 35:f.push(H.cX(a.u,5,"#"))
break
case 64:f.push(H.cX(a.u,2,"@"))
break
case 126:f.push(H.cX(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.k7(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.cW(p,n,o))
else{m=H.aQ(p,a.e,n)
switch(m.y){case 11:f.push(H.k9(p,m,o,a.n))
break
default:f.push(H.k8(p,m,o))
break}}break
case 38:H.n0(a,f)
break
case 42:l=a.u
f.push(H.lm(l,H.aQ(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.ka(l,H.aQ(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.ll(l,H.aQ(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.eX()
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
f.push(H.lk(p,H.aQ(p,a.e,f.pop()),k))
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
H.n2(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.aQ(a.u,a.e,h)},
n_:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
lh:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.ln(s,o.z)[p]
if(n==null)H.q('No "'+p+'" in "'+H.mH(o)+'"')
d.push(H.fy(s,o,n))}else d.push(p)
return m},
n0:function(a,b){var s=b.pop()
if(0===s){b.push(H.cX(a.u,1,"0&"))
return}if(1===s){b.push(H.cX(a.u,4,"1&"))
return}throw H.c(P.fO("Unexpected extended operation "+H.d(s)))},
aQ:function(a,b,c){if(typeof c=="string")return H.cW(a,c,a.sEA)
else if(typeof c=="number")return H.n1(a,b,c)
else return c},
k7:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aQ(a,b,c[s])},
n2:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aQ(a,b,c[s])},
n1:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.fO("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.fO("Bad index "+c+" for "+b.i(0)))},
N:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
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
if(q)if(H.N(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.N(a,b.z,c,d,e)
if(p===6){s=d.z
return H.N(a,b,c,s,e)}if(r===8){if(!H.N(a,b.z,c,d,e))return!1
return H.N(a,H.kW(a,b),c,d,e)}if(r===7){s=H.N(a,b.z,c,d,e)
return s}if(p===8){if(H.N(a,b,c,d.z,e))return!0
return H.N(a,b,c,H.kW(a,d),e)}if(p===7){s=H.N(a,b,c,d.z,e)
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
if(!H.N(a,k,c,j,e)||!H.N(a,j,e,k,c))return!1}return H.lt(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.lt(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.ns(a,b,c,d,e)}return!1},
lt:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.N(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.N(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.N(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.N(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.N(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
ns:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.N(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.ln(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.N(a,H.fy(a,b,l[p]),c,r[p],e))return!1
return!0},
jE:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aB(a))if(r!==7)if(!(r===6&&H.jE(a.z)))s=r===8&&H.jE(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
os:function(a){var s
if(!H.aB(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
aB:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
lp:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ac:function ac(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
eX:function eX(){this.c=this.b=this.a=null},
eS:function eS(){},
cU:function cU(a){this.a=a},
lH:function(a){return v.mangledGlobalNames[a]},
ov:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kk:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fK:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.kj==null){H.oo()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.c(P.l3("Return interceptor for "+H.d(s(a,o))))}q=a.constructor
p=q==null?null:q[J.kG()]
if(p!=null)return p
p=H.ot(a)
if(p!=null)return p
if(typeof a=="function")return C.O
s=Object.getPrototypeOf(a)
if(s==null)return C.v
if(s===Object.prototype)return C.v
if(typeof q=="function"){Object.defineProperty(q,J.kG(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
kG:function(){var s=$.le
return s==null?$.le=v.getIsolateTag("_$dart_js"):s},
mn:function(a){if(!H.d_(a))throw H.c(P.kt(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.aK(a,0,4294967295,"length",null))
return J.mo(new Array(a))},
kF:function(a){if(!H.d_(a)||a<0)throw H.c(P.jK("Length must be a non-negative integer: "+H.d(a)))
return new Array(a)},
mo:function(a){return J.jU(a)},
jU:function(a){a.fixed$length=Array
return a},
mp:function(a,b){return J.d8(a,b)},
d3:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cf.prototype
return J.ce.prototype}if(typeof a=="string")return J.ap.prototype
if(a==null)return J.cg.prototype
if(typeof a=="boolean")return J.ht.prototype
if(a.constructor==Array)return J.a7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ah.prototype
return a}if(a instanceof P.K)return a
return J.fK(a)},
oj:function(a){if(typeof a=="number")return J.b8.prototype
if(typeof a=="string")return J.ap.prototype
if(a==null)return a
if(a.constructor==Array)return J.a7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ah.prototype
return a}if(a instanceof P.K)return a
return J.fK(a)},
bo:function(a){if(typeof a=="string")return J.ap.prototype
if(a==null)return a
if(a.constructor==Array)return J.a7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ah.prototype
return a}if(a instanceof P.K)return a
return J.fK(a)},
jz:function(a){if(a==null)return a
if(a.constructor==Array)return J.a7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ah.prototype
return a}if(a instanceof P.K)return a
return J.fK(a)},
ly:function(a){if(typeof a=="number")return J.b8.prototype
if(typeof a=="string")return J.ap.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.bk.prototype
return a},
kh:function(a){if(typeof a=="string")return J.ap.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.bk.prototype
return a},
aA:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ah.prototype
return a}if(a instanceof P.K)return a
return J.fK(a)},
kp:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.oj(a).v(a,b)},
F:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.d3(a).t(a,b)},
kq:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ly(a).u(a,b)},
d7:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.or(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bo(a).h(a,b)},
m_:function(a,b,c){return J.aA(a).fh(a,b,c)},
m0:function(a,b,c,d){return J.aA(a).fG(a,b,c,d)},
d8:function(a,b){return J.ly(a).aM(a,b)},
jJ:function(a,b){return J.bo(a).B(a,b)},
fM:function(a,b){return J.jz(a).D(a,b)},
m1:function(a,b){return J.jz(a).F(a,b)},
m2:function(a){return J.aA(a).gfL(a)},
m3:function(a){return J.aA(a).gd0(a)},
m4:function(a){return J.aA(a).gd3(a)},
Y:function(a){return J.d3(a).gR(a)},
aY:function(a){return J.jz(a).gK(a)},
aZ:function(a){return J.bo(a).gl(a)},
kr:function(a){return J.jz(a).hp(a)},
m5:function(a,b){return J.aA(a).hs(a,b)},
m6:function(a,b,c){return J.kh(a).b7(a,b,c)},
m7:function(a){return J.kh(a).hB(a)},
af:function(a){return J.d3(a).i(a)},
a:function a(){},
ht:function ht(){},
cg:function cg(){},
b9:function b9(){},
dV:function dV(){},
bk:function bk(){},
ah:function ah(){},
a7:function a7(){},
dy:function dy(){},
U:function U(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b8:function b8(){},
cf:function cf(){},
ce:function ce(){},
ap:function ap(){}},P={
mQ:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.o6()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bW(new P.j8(q),1)).observe(s,{childList:true})
return new P.j7(q,s,r)}else if(self.setImmediate!=null)return P.o7()
return P.o8()},
mR:function(a){self.scheduleImmediate(H.bW(new P.j9(a),0))},
mS:function(a){self.setImmediate(H.bW(new P.ja(a),0))},
mT:function(a){P.k2(C.j,a)},
k2:function(a,b){var s=C.c.a0(a.a,1000)
return P.n3(s<0?0:s,b)},
l1:function(a,b){var s=C.c.a0(a.a,1000)
return P.n4(s<0?0:s,b)},
n3:function(a,b){var s=new P.cT()
s.dU(a,b)
return s},
n4:function(a,b){var s=new P.cT()
s.dV(a,b)
return s},
pm:function(a){return new P.bT(a,1)},
mW:function(){return C.W},
mX:function(a){return new P.bT(a,3)},
nz:function(a){return new P.cQ(a)},
nV:function(){var s,r
for(s=$.bU;s!=null;s=$.bU){$.d1=null
r=s.b
$.bU=r
if(r==null)$.d0=null
s.a.$0()}},
o1:function(){$.ke=!0
try{P.nV()}finally{$.d1=null
$.ke=!1
if($.bU!=null)$.ko().$1(P.lx())}},
o_:function(a){var s=new P.eI(a),r=$.d0
if(r==null){$.bU=$.d0=s
if(!$.ke)$.ko().$1(P.lx())}else $.d0=r.b=s},
o0:function(a){var s,r,q,p=$.bU
if(p==null){P.o_(a)
$.d1=$.d0
return}s=new P.eI(a)
r=$.d1
if(r==null){s.b=p
$.bU=$.d1=s}else{q=r.b
s.b=q
$.d1=r.b=s
if(q==null)$.d0=s}},
l0:function(a,b){var s=$.aj
if(s===C.e)return P.k2(a,b)
return P.k2(a,s.fM(b))},
mO:function(a,b){var s=$.aj
if(s===C.e)return P.l1(a,b)
return P.l1(a,s.cY(b,t.l))},
lu:function(a,b,c,d,e){P.o0(new P.jv(d,e))},
nX:function(a,b,c,d){var s,r=$.aj
if(r===c)return d.$0()
$.aj=c
s=r
try{r=d.$0()
return r}finally{$.aj=s}},
nY:function(a,b,c,d,e){var s,r=$.aj
if(r===c)return d.$1(e)
$.aj=c
s=r
try{r=d.$1(e)
return r}finally{$.aj=s}},
j8:function j8(a){this.a=a},
j7:function j7(a,b,c){this.a=a
this.b=b
this.c=c},
j9:function j9(a){this.a=a},
ja:function ja(a){this.a=a},
cT:function cT(){this.c=0},
jp:function jp(a,b){this.a=a
this.b=b},
jo:function jo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bT:function bT(a,b){this.a=a
this.b=b},
bn:function bn(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cQ:function cQ(a){this.a=a},
eI:function eI(a){this.a=a
this.b=null},
eb:function eb(){},
ec:function ec(){},
cx:function cx(){},
js:function js(){},
jv:function jv(a,b){this.a=a
this.b=b},
jh:function jh(){},
ji:function ji(a,b){this.a=a
this.b=b},
jj:function jj(a,b,c){this.a=a
this.b=b
this.c=c},
mr:function(a,b,c){return H.oh(a,new H.v(b.ap("@<0>").cz(c).ap("v<1,2>")))},
kH:function(a,b){return new H.v(a.ap("@<0>").cz(b).ap("v<1,2>"))},
ci:function(a){return new P.cE(a.ap("cE<0>"))},
k6:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
mZ:function(a,b){var s=new P.cF(a,b)
s.c=a.e
return s},
ml:function(a,b,c){var s,r
if(P.kf(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.a0.push(a)
try{P.ny(a,s)}finally{if(0>=$.a0.length)return H.e($.a0,-1)
$.a0.pop()}r=P.kZ(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
jT:function(a,b,c){var s,r
if(P.kf(a))return b+"..."+c
s=new P.aM(b)
$.a0.push(a)
try{r=s
r.a=P.kZ(r.a,a,", ")}finally{if(0>=$.a0.length)return H.e($.a0,-1)
$.a0.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
kf:function(a){var s,r
for(s=$.a0.length,r=0;r<s;++r)if(a===$.a0[r])return!0
return!1},
ny:function(a,b){var s,r,q,p,o,n,m,l=a.gK(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.q())return
s=H.d(l.gC(l))
b.push(s)
k+=s.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return H.e(b,-1)
r=b.pop()
if(0>=b.length)return H.e(b,-1)
q=b.pop()}else{p=l.gC(l);++j
if(!l.q()){if(j<=4){b.push(H.d(p))
return}r=H.d(p)
if(0>=b.length)return H.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gC(l);++j
for(;l.q();p=o,o=n){n=l.gC(l);++j
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
kI:function(a,b){var s,r,q=P.ci(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.m)(a),++r)q.n(0,b.a(a[r]))
return q},
kJ:function(a){var s,r={}
if(P.kf(a))return"{...}"
s=new P.aM("")
try{$.a0.push(a)
s.a+="{"
r.a=!0
J.m1(a,new P.hB(r,s))
s.a+="}"}finally{if(0>=$.a0.length)return H.e($.a0,-1)
$.a0.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cE:function cE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jg:function jg(a){this.a=a
this.c=this.b=null},
cF:function cF(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cd:function cd(){},
cj:function cj(){},
C:function C(){},
dE:function dE(){},
hB:function hB(a,b){this.a=a
this.b=b},
as:function as(){},
cM:function cM(){},
cG:function cG(){},
df:function df(){},
dh:function dh(){},
hb:function hb(){},
hq:function hq(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
hp:function hp(a){this.a=a},
iQ:function iQ(){},
iR:function iR(){},
jq:function jq(a){this.b=0
this.c=a},
mk:function(a){if(a instanceof H.bu)return a.i(0)
return"Instance of '"+H.d(H.dZ(a))+"'"},
jX:function(a,b,c){var s,r=c?J.kF(a):J.mn(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
jY:function(a,b){var s,r=[]
for(s=J.aY(a);s.q();)r.push(s.gC(s))
if(b)return r
return J.jU(r)},
k1:function(a){var s,r=a,q=r.length,p=P.k_(0,null,q)
if(typeof p!=="number")return p.aa()
s=p<q
return H.mD(s?r.slice(0,p):r)},
mF:function(a){return new H.hu(a,H.mq(a,!1,!0,!1,!1,!1))},
kZ:function(a,b,c){var s=J.aY(b)
if(!s.q())return a
if(c.length===0){do a+=H.d(s.gC(s))
while(s.q())}else{a+=H.d(s.gC(s))
for(;s.q();)a=a+c+H.d(s.gC(s))}return a},
lo:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.i){s=$.lZ().b
s=s.test(b)}else s=!1
if(s)return b
r=C.I.fR(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.e(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.jZ(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
mh:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
mi:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dk:function(a){if(a>=10)return""+a
return"0"+a},
kA:function(a){return new P.b3(1000*a)},
he:function(a){if(typeof a=="number"||H.ls(a)||null==a)return J.af(a)
if(typeof a=="string")return JSON.stringify(a)
return P.mk(a)},
fO:function(a){return new P.db(a)},
jK:function(a){return new P.a1(!1,null,null,a)},
kt:function(a,b,c){return new P.a1(!0,a,b,c)},
m8:function(a,b){if(a==null)throw H.c(new P.a1(!1,null,b,"Must not be null"))
return a},
e_:function(a,b){return new P.bK(null,null,!0,a,b,"Value not in range")},
aK:function(a,b,c,d,e){return new P.bK(b,c,!0,a,d,"Invalid value")},
k_:function(a,b,c){var s
if(typeof c!=="number")return H.p(c)
s=a>c
if(s)throw H.c(P.aK(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
s=b>c}else s=!0
if(s)throw H.c(P.aK(b,a,c,"end",null))
return b}return c},
kT:function(a,b){if(a<0)throw H.c(P.aK(a,0,null,b,null))
return a},
I:function(a,b,c,d,e){var s=e==null?J.aZ(b):e
return new P.dv(s,!0,a,c,"Index out of range")},
w:function(a){return new P.eC(a)},
l3:function(a){return new P.ez(a)},
k0:function(a){return new P.bM(a)},
b2:function(a){return new P.dg(a)},
o:function(a){return new P.eU(a)},
km:function(a){H.ov(a)},
az:function az(){},
a6:function a6(a,b){this.a=a
this.b=b},
X:function X(){},
b3:function b3(a){this.a=a},
h7:function h7(){},
h8:function h8(){},
H:function H(){},
db:function db(a){this.a=a},
dQ:function dQ(){},
a1:function a1(a,b,c,d){var _=this
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
dv:function dv(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eC:function eC(a){this.a=a},
ez:function ez(a){this.a=a},
bM:function bM(a){this.a=a},
dg:function dg(a){this.a=a},
dT:function dT(){},
cv:function cv(){},
di:function di(a){this.a=a},
eU:function eU(a){this.a=a},
hl:function hl(a,b){this.a=a
this.b=b},
hn:function hn(){},
r:function r(){},
f:function f(){},
dx:function dx(){},
ar:function ar(){},
dD:function dD(){},
aa:function aa(){},
P:function P(){},
K:function K(){},
L:function L(){},
aM:function aM(a){this.a=a},
od:function(a){var s
if(t.s.b(a)){s=J.m4(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.cV(a.data,a.height,a.width)},
oc:function(a){if(a instanceof P.cV)return{data:a.a,height:a.b,width:a.c}
return a},
aU:function(a){var s,r,q,p,o
if(a==null)return null
s=P.kH(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.m)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
ob:function(a){var s={}
a.F(0,new P.jw(s))
return s},
cV:function cV(a,b,c){this.a=a
this.b=b
this.c=c},
jw:function jw(a){this.a=a},
dq:function dq(a,b){this.a=a
this.b=b},
hj:function hj(){},
hk:function hk(){},
jf:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mY:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
fd:function fd(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bB:function bB(){},
dB:function dB(){},
bH:function bH(){},
dR:function dR(){},
i1:function i1(){},
bL:function bL(){},
ed:function ed(){},
j:function j(){},
bO:function bO(){},
em:function em(){},
f1:function f1(){},
f2:function f2(){},
f9:function f9(){},
fa:function fa(){},
fm:function fm(){},
fn:function fn(){},
fv:function fv(){},
fw:function fw(){},
fR:function fR(){},
fS:function fS(){},
fT:function fT(a){this.a=a},
dc:function dc(){},
aE:function aE(){},
dS:function dS(){},
eJ:function eJ(){},
e1:function e1(){},
e9:function e9(){},
fi:function fi(){},
fj:function fj(){}},W={
ks:function(){var s=document.createElement("a")
return s},
jN:function(){var s=document.createElement("canvas")
return s},
mj:function(a,b,c){var s,r=document.body
r.toString
s=C.m.ac(r,a,b,c)
s.toString
r=new H.bm(new W.T(s),new W.h9())
return t.h.a(r.gaD(r))},
ha:function(a){return"wheel"},
c9:function(a){var s,r,q="element tag unavailable"
try{s=J.aA(a)
if(typeof s.gdu(a)=="string")q=s.gdu(a)}catch(r){H.aC(r)}return q},
je:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lf:function(a,b,c,d){var s=W.je(W.je(W.je(W.je(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
R:function(a,b,c,d){var s=W.lv(new W.jd(c),t.D)
if(s!=null&&!0)J.m0(a,b,s,!1)
return new W.eT(a,b,s,!1)},
ld:function(a){var s=W.ks(),r=window.location
s=new W.bS(new W.jk(s,r))
s.dQ(a)
return s},
mU:function(a,b,c,d){return!0},
mV:function(a,b,c,d){var s,r=d.a,q=r.a
q.href=c
s=q.hostname
r=r.b
if(!(s==r.hostname&&q.port==r.port&&q.protocol==r.protocol))if(s==="")if(q.port===""){r=q.protocol
r=r===":"||r===""}else r=!1
else r=!1
else r=!0
return r},
lj:function(){var s=t.N
s=new W.fq(P.kI(C.t,s),P.ci(s),P.ci(s),P.ci(s),null)
s.dT(null,new H.cn(C.t,new W.jn()),["TEMPLATE"],null)
return s},
lv:function(a,b){var s=$.aj
if(s===C.e)return a
return s.cY(a,b)},
l:function l(){},
fN:function fN(){},
d9:function d9(){},
da:function da(){},
bs:function bs(){},
dd:function dd(){},
b_:function b_(){},
b0:function b0(){},
ag:function ag(){},
h_:function h_(){},
G:function G(){},
c4:function c4(){},
h0:function h0(){},
a5:function a5(){},
am:function am(){},
h1:function h1(){},
h2:function h2(){},
h3:function h3(){},
c5:function c5(){},
h5:function h5(){},
c6:function c6(){},
c7:function c7(){},
dl:function dl(){},
h6:function h6(){},
eK:function eK(a,b){this.a=a
this.b=b},
z:function z(){},
h9:function h9(){},
h:function h(){},
b:function b(){},
b4:function b4(){},
dn:function dn(){},
dp:function dp(){},
dr:function dr(){},
b5:function b5(){},
ho:function ho(){},
b6:function b6(){},
b7:function b7(){},
bA:function bA(){},
ba:function ba(){},
hz:function hz(){},
hR:function hR(){},
hS:function hS(){},
hT:function hT(a){this.a=a},
hU:function hU(){},
hV:function hV(a){this.a=a},
bc:function bc(){},
dI:function dI(){},
a2:function a2(){},
T:function T(a){this.a=a},
u:function u(){},
cs:function cs(){},
be:function be(){},
dX:function dX(){},
i7:function i7(){},
i8:function i8(a){this.a=a},
e3:function e3(){},
aL:function aL(){},
e7:function e7(){},
bg:function bg(){},
e8:function e8(){},
bh:function bh(){},
io:function io(){},
ip:function ip(a){this.a=a},
aN:function aN(){},
cw:function cw(){},
ee:function ee(){},
ef:function ef(){},
bN:function bN(){},
aO:function aO(){},
ai:function ai(){},
eg:function eg(){},
eh:function eh(){},
iy:function iy(){},
bi:function bi(){},
bj:function bj(){},
el:function el(){},
iC:function iC(){},
ax:function ax(){},
iP:function iP(){},
eE:function eE(){},
aP:function aP(){},
bQ:function bQ(){},
bR:function bR(){},
eL:function eL(){},
cD:function cD(){},
eY:function eY(){},
cH:function cH(){},
fh:function fh(){},
fo:function fo(){},
jb:function jb(){},
jc:function jc(a){this.a=a},
jR:function jR(a,b){this.a=a
this.$ti=b},
eT:function eT(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jd:function jd(a){this.a=a},
k5:function k5(a){this.$ti=a},
bS:function bS(a){this.a=a},
E:function E(){},
ct:function ct(a){this.a=a},
hY:function hY(a){this.a=a},
hX:function hX(a,b,c){this.a=a
this.b=b
this.c=c},
cN:function cN(){},
jl:function jl(){},
jm:function jm(){},
fq:function fq(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jn:function jn(){},
fp:function fp(){},
cc:function cc(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
a9:function a9(){},
jk:function jk(a,b){this.a=a
this.b=b},
fz:function fz(a){this.a=a
this.b=!1},
jr:function jr(a){this.a=a},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eV:function eV(){},
eW:function eW(){},
f_:function f_(){},
f0:function f0(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
fb:function fb(){},
fc:function fc(){},
fe:function fe(){},
cO:function cO(){},
cP:function cP(){},
ff:function ff(){},
fg:function fg(){},
fl:function fl(){},
fr:function fr(){},
fs:function fs(){},
cR:function cR(){},
cS:function cS(){},
ft:function ft(){},
fu:function fu(){},
fA:function fA(){},
fB:function fB(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(){}},K={
J:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.o("The given low and high character strings for a Range must have one and only one characters."))
s=C.b.ba(a,0)
r=C.b.ba(b,0)
if(s>r){q=r
r=s
s=q}return new K.i2(s,r)},
n:function(a){var s=new K.i9()
s.dO(a)
return s},
aD:function aD(){},
dt:function dt(){},
Z:function Z(){this.a=null},
i2:function i2(a,b){this.a=a
this.b=b},
i9:function i9(){this.a=null}},L={
iA:function(){var s=new L.iz()
s.a=new H.v(t.V)
s.b=new H.v(t.w)
s.c=P.ci(t.bw)
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
iz:function iz(){var _=this
_.d=_.c=_.b=_.a=null},
iD:function iD(a){this.b=a
this.a=this.c=null}},O={
jO:function(){var s=new O.bv()
s.b9()
return s},
bv:function bv(){this.c=this.b=this.a=null},
co:function co(){this.b=this.a=null},
dF:function dF(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hJ:function hJ(a,b){this.a=a
this.b=b},
hK:function hK(){},
hL:function hL(a,b){this.a=a
this.b=b},
hM:function hM(){},
hN:function hN(a,b){this.a=a
this.b=b},
hO:function hO(){},
hP:function hP(a,b){this.a=a
this.b=b},
hQ:function hQ(){},
hD:function hD(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dG:function dG(){},
hE:function hE(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
at:function at(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hG:function hG(){var _=this
_.e=_.d=_.c=_.b=null},
hH:function hH(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hI:function hI(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
e5:function e5(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
is:function is(){}},E={
kD:function(){var s,r=new E.bx()
r.a=""
r.b=!0
s=O.jO()
r.y=s
s.aP(r.gha(),r.ghd())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sbs(0,null)
return r},
la:function(){if(J.jJ(window.navigator.vendor,"Google"))return C.z
if(J.jJ(window.navigator.userAgent,"Firefox"))return C.n
var s=window.navigator.appVersion
if(J.bo(s).B(s,"Trident")||C.b.B(s,"Edge"))return C.o
if(J.jJ(window.navigator.appName,"Microsoft"))return C.o
return C.A},
lb:function(){var s=window.navigator.appVersion
if(J.bo(s).B(s,"Win"))return C.S
if(C.b.B(s,"Mac"))return C.u
if(C.b.B(s,"Linux"))return C.T
return C.U},
mG:function(a,b){var s=new E.i3(a)
s.dN(a,b)
return s},
mN:function(a,b,c,d,e){var s,r
if(t.B.b(a))return E.l_(a,!0,!0,!0,!1)
s=W.jN()
r=s.style
r.width="100%"
r.height="100%"
J.m3(a).n(0,s)
return E.l_(s,!0,!0,!0,!1)},
l_:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.ei(),n=t.z,m=C.f.ck(a,"webgl2",P.mr(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.q(P.o("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.mG(m,a)
n=new T.iv(m)
m.getParameter(3379)
n.c=m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.eD(a)
s=new X.hw()
s.c=new X.a8(!1,!1,!1)
s.d=P.ci(t.e)
n.b=s
s=new X.hW(n)
s.f=0
s.r=V.aJ()
s.x=V.aJ()
s.ch=s.Q=1
n.c=s
s=new X.hA(n)
s.r=0
s.x=V.aJ()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.iB(n)
s.f=V.aJ()
s.r=V.aJ()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=[]
s=$.hc
n.Q=(s==null?$.hc=new E.eR(E.la(),E.lb()):s).a===C.n?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.R(q,"contextmenu",n.gez(),!1))
n.z.push(W.R(a,"focus",n.geF(),!1))
n.z.push(W.R(a,"blur",n.ges(),!1))
n.z.push(W.R(q,"keyup",n.geJ(),!1))
n.z.push(W.R(q,"keydown",n.geH(),!1))
n.z.push(W.R(a,"mousedown",n.geN(),!1))
n.z.push(W.R(a,"mouseup",n.geR(),!1))
n.z.push(W.R(a,p,n.geP(),!1))
r=n.z
W.ha(a)
W.ha(a)
r.push(W.R(a,W.ha(a),n.geT(),!1))
n.z.push(W.R(q,p,n.geB(),!1))
n.z.push(W.R(q,"mouseup",n.geD(),!1))
n.z.push(W.R(q,"pointerlockchange",n.geV(),!1))
n.z.push(W.R(a,"touchstart",n.gfa(),!1))
n.z.push(W.R(a,"touchend",n.gf6(),!1))
n.z.push(W.R(a,"touchmove",n.gf8(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.a6(Date.now(),!1)
o.db=0
o.cK()
return o},
fV:function fV(){},
bx:function bx(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bt:function bt(a){this.b=a},
bI:function bI(a){this.b=a},
eR:function eR(a,b){this.a=a
this.b=b},
i3:function i3(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i4:function i4(a){this.a=a},
i5:function i5(a){this.a=a},
i6:function i6(a){this.a=a},
ei:function ei(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
ix:function ix(a){this.a=a}},Z={
l9:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cY(c)),35044)
a.bindBuffer(b,null)
return new Z.eF(b,s)},
ae:function(a){return new Z.bl(a)},
eF:function eF(a,b){this.a=a
this.b=b},
fW:function fW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
eG:function eG(a){this.a=a},
c0:function c0(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
dw:function dw(a,b,c){this.a=a
this.b=b
this.c=c},
bl:function bl(a){this.a=a}},D={
B:function(){var s=new D.by()
s.d=0
return s},
fX:function fX(){},
by:function by(){var _=this
_.d=_.c=_.b=_.a=null},
hf:function hf(a){this.a=a},
hg:function hg(a){this.a=a},
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
ch:function ch(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null}},X={de:function de(a,b){this.a=a
this.b=b},dA:function dA(a,b){this.a=a
this.b=b},hw:function hw(){var _=this
_.d=_.c=_.b=_.a=null},cl:function cl(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hA:function hA(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},bE:function bE(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hW:function hW(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bF:function bF(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},dY:function dY(){},cy:function cy(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iB:function iB(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},eD:function eD(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jS:function(a){var s=new X.hm(),r=new V.aF(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.kV
if(r==null){r=V.kU(0,0,1,1)
$.kV=r}s.r=r
return s},
kN:function(a){var s,r,q=new X.dU()
q.c=1.0471975511965976
q.d=0.1
q.e=2000
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gp().n(0,q.gdW())
r=new D.x("mover",s,q.b)
r.b=!0
q.ai(r)}r=q.c
$.A().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
r=new D.x("fov",r,1.0471975511965976)
r.b=!0
q.ai(r)}r=q.d
$.A().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
r=new D.x("near",r,0.1)
r.b=!0
q.ai(r)}r=q.e
$.A().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
r=new D.x("far",r,2000)
r.b=!0
q.ai(r)}return q},
jM:function jM(){},
hm:function hm(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hr:function hr(){this.b=this.a=null},
dU:function dU(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
iq:function iq(){}},V={
fY:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aF(s,r,q,1)},
oC:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.dA(a-b,s)
return(a<0?a+s:a)+b},
D:function(a,b,c){if(a==null)return C.b.ax("null",c)
$.A().toString
return C.b.ax(C.d.dv(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bY:function(a,b,c){var s,r,q,p,o,n,m=[]
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.m)(a),++q){p=V.D(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.e(m,o)
s=C.b.ax(m[o],r)
n=m.length
if(o>=n)return H.e(m,o)
m[o]=s}return m},
kl:function(a){return C.d.hy(Math.pow(2,C.N.c3(Math.log(H.o9(a))/Math.log(2))))},
bD:function(){var s=$.kL
return s==null?$.kL=V.au(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
au:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kK:function(a,b,c){var s=c.E(),r=b.at(s).E(),q=s.at(r),p=new V.y(a.a,a.b,a.c),o=r.M(0).a2(p),n=q.M(0).a2(p),m=s.M(0).a2(p)
return V.au(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
aJ:function(){var s=$.kP
return s==null?$.kP=new V.a3(0,0):s},
kQ:function(){var s=$.av
return s==null?$.av=new V.M(0,0,0):s},
kU:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e0(a,b,c,d)},
cC:function(){var s=$.l7
return s==null?$.l7=new V.y(0,0,0):s},
mP:function(){var s=$.iS
return s==null?$.iS=new V.y(-1,0,0):s},
k4:function(){var s=$.iT
return s==null?$.iT=new V.y(0,1,0):s},
l8:function(){var s=$.iU
return s==null?$.iU=new V.y(0,0,1):s},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hd:function hd(){},
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
a3:function a3(a,b){this.a=a
this.b=b},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e0:function e0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a_:function a_(a,b){this.a=a
this.b=b},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
ow:function(a){P.mO(C.K,new V.jH(a))},
mJ:function(a){var s=new V.ie()
s.dP(a,!0)
return s},
b1:function b1(){},
jH:function jH(a){this.a=a},
dj:function dj(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ds:function ds(a){var _=this
_.a=a
_.d=_.c=_.b=null},
du:function du(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dW:function dW(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ie:function ie(){this.b=this.a=null},
ih:function ih(a){this.a=a},
ig:function ig(a){this.a=a},
ii:function ii(a){this.a=a}},U={
jP:function(){var s=new U.fZ()
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
fZ:function fZ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
c2:function c2(){this.b=this.a=null},
bz:function bz(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
S:function S(){},
cz:function cz(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
cA:function cA(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cB:function cB(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={c1:function c1(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},c3:function c3(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ca:function ca(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ad:function ad(){}},A={
mt:function(a,b){var s=a.aZ,r=new A.hC(b,s)
r.cr(b,s)
r.dM(a,b)
return r},
mu:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="MaterialLight_"+a4.gah(a4)+a5.gah(a5)+a6.gah(a6)+a7.gah(a7)+a8.gah(a8)+a9.gah(a9)+b0.gah(b0)+b1.gah(b1)+b2.gah(b2)+"_"
b+=a?"1":"0"
b+=a0?"1":"0"
b+=a1?"1":"0"
b=b+"0_"+a3
s=b3.length
if(s>0){b+="_Bar"
for(r=0;r<b3.length;b3.length===s||(0,H.m)(b3),++r)b+="_"+H.d(b3[r].a)}s=b4.length
if(s>0){b+="_Dir"
for(r=0;r<b4.length;b4.length===s||(0,H.m)(b4),++r)b+="_"+H.d(b4[r].a)}s=b5.length
if(s>0){b+="_Point"
for(r=0;r<b5.length;b5.length===s||(0,H.m)(b5),++r)b+="_"+H.d(b5[r].a)}s=b6.length
if(s>0){b+="_Spot"
for(r=0;r<b6.length;b6.length===s||(0,H.m)(b6),++r)b+="_"+H.d(b6[r].a)}for(s=b3.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b3[r].b
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
c=$.ak()
if(h){s=$.aX()
c=new Z.bl(c.a|s.a)}if(g){s=$.aW()
c=new Z.bl(c.a|s.a)}if(f){s=$.aV()
c=new Z.bl(c.a|s.a)}return new A.hF(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
jt:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
ju:function(a,b,c){var s
A.jt(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.fL(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
nE:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jt(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
nA:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.ju(b,r,"ambient")
b.a+="\n"},
nC:function(a,b){var s,r=a.c
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.ju(b,r,"diffuse")
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
nF:function(a,b){var s,r=a.d
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.ju(b,r,"invDiffuse")
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
nL:function(a,b){var s,r=a.e
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.ju(b,r,"specular")
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
nH:function(a,b){var s,r,q
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
nJ:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jt(b,r,"reflect")
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
nK:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jt(b,r,"refract")
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
nB:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.d(s)
q=A.fL(r)
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
if(typeof s!=="number")return s.ae()
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
n=[]
if(!a.c.a)s=!1
else s=!0
if(s)n.push("diffuse(norm, normDir)")
if(!a.d.a)s=!1
else s=!0
if(s)n.push("invDiffuse(norm, normDir)")
if(!a.e.a)s=!1
else s=!0
if(s)n.push("specular(norm, normDir)")
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
nD:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+H.d(s)
q=A.fL(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.ae()
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
if(!a.b.a)p=!1
else p=!0
if(p)m.push("ambientColor")
if(a.dx){c.a+=u.k
l=[]
if(!a.c.a)p=!1
else p=!0
if(p)l.push("diffuse(norm, lit.viewDir)")
if(!a.d.a)p=!1
else p=!0
if(p)l.push("invDiffuse(norm, lit.viewDir)")
if(!a.e.a)p=!1
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
nI:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.d(s)
q=A.fL(r)
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
if(typeof s!=="number")return s.ae()
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
if(!a.b.a)p=!1
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
if(!a.c.a)p=!1
else p=!0
if(p)i.push("diffuse(norm, normDir)")
if(!a.d.a)p=!1
else p=!0
if(p)i.push("invDiffuse(norm, normDir)")
if(!a.e.a)p=!1
else p=!0
if(p)i.push("specular(norm, normDir)")
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
nM:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.d(s)
q=A.fL(r)
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
if(typeof s!=="number")return s.ae()
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
if(m){s=$.hc
if(s==null)s=$.hc=new E.eR(E.la(),E.lb())
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
if(!a.b.a)s=!1
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
if(!a.c.a)s=!1
else s=!0
if(s)g.push("diffuse(norm, litVec)")
if(!a.d.a)s=!1
else s=!0
if(s)g.push("invDiffuse(norm, litVec)")
if(!a.e.a)s=!1
else s=!0
if(s)g.push("specular(norm, litVec)")
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
nG:function(a,b){var s,r
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
s=b.a+="   return "+C.a.k(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
nN:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.aM("")
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
A.nE(a,h)
A.nA(a,h)
A.nC(a,h)
A.nF(a,h)
A.nL(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.nJ(a,h)
A.nK(a,h)}A.nH(a,h)
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
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.m)(o),++m)A.nB(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.m)(o),++m)A.nD(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.m)(o),++m)A.nI(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.m)(o),++m)A.nM(a,o[m],h)
A.nG(a,h)}o=h.a+="// === Main ===\n"
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
for(s=a.z,r=s.length,m=0;m<s.length;s.length===r||(0,H.m)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.e(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.am(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.m)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.e(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.am(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.m)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.e(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.am(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.m)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.e(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.am(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)s=!1
else s=!0
if(s)l.push("emissionColor()")
if(!a.r.a)s=!1
else s=!0
if(s)l.push("reflect(refl)")
if(!a.x.a)s=!1
else s=!0
if(s)l.push("refract(refl)")
if(l.length<=0)l.push("vec3(0.0, 0.0, 0.0)")
s=h.a+="   vec4 objClr = vec4("+C.a.k(l," + ")+", alpha);\n"
if(q)s=h.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
h.a=s
s=h.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
nO:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.bh+"];\n"
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
nQ:function(a,b){var s
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
nP:function(a,b){var s
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
nS:function(a,b){var s,r
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
nT:function(a,b){var s,r
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
nR:function(a,b){var s
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
nU:function(a,b){var s
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
fL:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.am(a,1)},
k3:function(a,b,c,d,e){var s=new A.iI(a,c,e)
s.f=d
P.jX(d,0,!1)
return s},
fP:function fP(a,b,c){this.a=a
this.b=b
this.c=c},
fQ:function fQ(a){this.a=a},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
hC:function hC(a,b){var _=this
_.hM=_.hL=_.bi=_.aZ=_.bh=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hZ=_.hY=_.hX=_.c2=_.c1=_.c0=_.c_=_.bZ=_.bY=_.bX=_.bW=_.hW=_.hV=_.df=_.hU=_.hT=_.de=_.dd=_.hS=_.hR=_.dc=_.da=_.hQ=_.hP=_.d9=_.hO=_.hN=_.d8=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fU:function fU(a,b){this.a=a
this.b=b},
h4:function h4(a,b){this.a=a
this.b=b},
i0:function i0(a,b){this.a=a
this.b=b},
il:function il(a,b){this.a=a
this.b=b},
hF:function hF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.bh=b5
_.aZ=b6
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
ik:function ik(a,b){var _=this
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
oB:function(){return F.oe(15,30,0.5,1,new F.jI())},
oe:function(a,b,c,d,e){var s=F.oy(a,b,new F.jx(e,d,b,c))
if(s==null)return null
s.as()
s.h9(new F.j1(),new F.hZ())
return s},
oy:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.kY()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.iW(e,e,new V.aF(n,0,0,1),e,e,new V.a3(p,1),e,e,0)
o.n(0,m)
c.$3(m,p,0)
r.push(m.d2(e))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.iW(e,e,new V.aF(h,g,f,1),e,e,new V.a3(p,k),e,e,0)
i.n(0,m)
c.$3(m,p,l)
r.push(m.d2(e))}}s.d.fI(a+1,b+1,r)
return s},
dm:function(a,b,c){var s=new F.hh(),r=a.a
if(r==null)H.q(P.o("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.q(P.o("May not create a face with vertices attached to different shapes."))
s.fp(a)
s.fq(b)
s.fs(c)
s.a.a.d.b.push(s)
s.a.a.a8()
return s},
kY:function(){var s=new F.ia(),r=new F.iX(s)
r.b=!1
r.c=[]
s.a=r
r=new F.id()
r.b=[]
s.b=r
r=new F.ic(s)
r.b=[]
s.c=r
r=new F.ib(s)
r.b=[]
s.d=r
return s},
iW:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.iV(),p=new F.j4()
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
h=$.lV()
q.e=0
p=$.ak()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.aX().a)!==0?e:r
q.x=(s&$.aW().a)!==0?b:r
q.y=(s&$.bq().a)!==0?f:r
q.z=(s&$.br().a)!==0?g:r
q.Q=(s&$.lW().a)!==0?c:r
q.ch=(s&$.bZ().a)!==0?i:0
q.cx=(s&$.aV().a)!==0?a:r
return q},
jI:function jI(){},
jx:function jx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hh:function hh(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hi:function hi(){},
ij:function ij(){},
hx:function hx(){},
iG:function iG(){},
ia:function ia(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ib:function ib(a){this.a=a
this.b=null},
ic:function ic(a){this.a=a
this.b=null},
id:function id(){this.b=null},
iV:function iV(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j6:function j6(a){this.a=a},
j5:function j5(a){this.a=a},
iX:function iX(a){this.a=a
this.c=this.b=null},
iY:function iY(){this.d=this.c=this.b=null},
iZ:function iZ(a,b){this.a=a
this.b=b},
j_:function j_(a,b){this.a=a
this.b=b},
j0:function j0(){this.c=this.b=null},
j2:function j2(){},
j1:function j1(){},
j3:function j3(){},
hZ:function hZ(){},
j4:function j4(){this.b=null}},T={it:function it(){},iu:function iu(){var _=this
_.e=_.d=_.c=_.b=_.a=null},iv:function iv(a){var _=this
_.a=a
_.e=_.d=_.c=null},iw:function iw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},B={
lC:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="testCanvas",a7=null,a8="modifiers",a9=34067,b0=V.mJ("Test 013"),b1=W.jN()
b1.className="pageLargeCanvas"
b1.id=a6
b0.a.appendChild(b1)
b0.cS(["Test of sky box and cover pass."])
b0.cS(["\xab[Back to Tests|../]"])
s=document.getElementById(a6)
if(s==null)H.q(P.o("Failed to find an element with the identifier, testCanvas."))
r=E.mN(s,!0,!0,!0,!1)
q=new U.bz()
q.b9()
q.aP(q.gek(),q.geZ())
q.e=null
q.f=V.bD()
q.r=0
p=r.x
o=new U.cA()
n=U.jP()
n.scj(0,!0)
n.sc6(6.283185307179586)
n.sc8(0)
n.sa6(0,0)
n.sc7(100)
n.sO(0)
n.sbV(0.5)
o.b=n
m=o.gaH()
n.gp().n(0,m)
n=U.jP()
n.scj(0,!0)
n.sc6(6.283185307179586)
n.sc8(0)
n.sa6(0,0)
n.sc7(100)
n.sO(0)
n.sbV(0.5)
o.c=n
n.gp().n(0,m)
o.d=null
o.r=o.f=o.e=!1
o.y=o.x=2.5
o.Q=4
o.ch=o.cx=!1
o.db=o.cy=0
o.dx=null
o.dy=0
o.fx=o.fr=null
l=new X.a8(!1,!1,!1)
k=o.d
o.d=l
n=new D.x(a8,k,l)
n.b=!0
o.J(n)
n=o.f
if(n!==!1){o.f=!1
n=new D.x("invertX",n,!1)
n.b=!0
o.J(n)}n=o.r
if(n!==!1){o.r=!1
n=new D.x("invertY",n,!1)
n.b=!0
o.J(n)}o.aW(p)
q.n(0,o)
p=r.x
o=new U.cz()
n=U.jP()
n.scj(0,!0)
n.sc6(6.283185307179586)
n.sc8(0)
n.sa6(0,0)
n.sc7(100)
n.sO(0)
n.sbV(0.2)
o.b=n
n.gp().n(0,o.gaH())
o.c=null
o.d=!1
o.e=2.5
o.r=4
o.x=o.y=!1
o.z=0
o.Q=null
o.ch=0
o.cy=o.cx=null
l=new X.a8(!0,!1,!1)
k=o.c
o.c=l
n=new D.x(a8,k,l)
n.b=!0
o.J(n)
o.aW(p)
q.n(0,o)
p=r.x
o=new U.cB()
o.c=0.01
o.e=o.d=0
l=new X.a8(!1,!1,!1)
o.b=l
n=new D.x(a8,a7,l)
n.b=!0
o.J(n)
o.aW(p)
q.n(0,o)
q.n(0,U.kz(V.au(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
j=X.kN(q)
i=X.jS(a7)
if(i.b){i.b=!1
p=new D.x("clearColor",!0,!1)
p.b=!0
i.ai(p)}h=E.kD()
h.sbs(0,F.oB())
g=new O.dF()
p=O.jO()
g.e=p
p.aP(g.geo(),g.geq())
p=new O.at(g,"emission")
p.c=new A.V(!1,!1,!1)
p.f=new V.O(0,0,0)
g.f=p
p=new O.at(g,"ambient")
p.c=new A.V(!1,!1,!1)
p.f=new V.O(0,0,0)
g.r=p
p=new O.at(g,"diffuse")
p.c=new A.V(!1,!1,!1)
p.f=new V.O(0,0,0)
g.x=p
p=new O.at(g,"invDiffuse")
p.c=new A.V(!1,!1,!1)
p.f=new V.O(0,0,0)
g.y=p
p=new O.hI(g,"specular")
p.c=new A.V(!1,!1,!1)
p.f=new V.O(0,0,0)
p.ch=100
g.z=p
p=new O.hE(g,"bump")
p.c=new A.V(!1,!1,!1)
g.Q=p
g.ch=null
p=new O.at(g,"reflect")
p.c=new A.V(!1,!1,!1)
p.f=new V.O(0,0,0)
g.cx=p
p=new O.hH(g,"refract")
p.c=new A.V(!1,!1,!1)
p.f=new V.O(0,0,0)
p.ch=1
g.cy=p
p=new O.hD(g,"alpha")
p.c=new A.V(!1,!1,!1)
p.f=1
g.db=p
p=new D.ch()
p.b9()
p.e=[]
p.f=[]
p.r=[]
p.x=[]
p.z=p.y=null
p.cm(p.gem(),p.geX(),p.gf0())
g.dx=p
o=new O.hG()
o.b=new V.aF(0,0,0,0)
o.c=1
o.d=10
o.e=!1
g.dy=o
o=p.y
p=o==null?p.y=D.B():o
p.n(0,g.gfj())
p=g.dx
o=p.z
p=o==null?p.z=D.B():o
p.n(0,g.gbv())
g.fr=null
p=g.dx
f=V.k4()
o=U.kz(V.kK(V.kQ(),f,new V.y(0,-1,-1)))
e=new V.O(1,1,1)
n=new D.bw()
n.c=new V.O(1,1,1)
n.a=V.l8()
n.d=V.k4()
n.e=V.mP()
k=n.b
n.b=o
o.gp().n(0,n.gdR())
o=new D.x("mover",k,n.b)
o.b=!0
n.an(o)
if(!n.c.t(0,e)){k=n.c
n.c=e
o=new D.x("color",k,e)
o.b=!0
n.an(o)}p.n(0,n)
p=g.r
p.saL(0,new V.O(0,0,1))
p=g.x
p.saL(0,new V.O(0,1,0))
p=g.z
p.saL(0,new V.O(1,0,0))
p=g.z
p.cM(new A.V(!0,!1,!1))
p.cN(10)
p=r.f
o=p.a
d=o.createTexture()
o.bindTexture(a9,d)
o.texParameteri(a9,10242,10497)
o.texParameteri(a9,10243,10497)
o.texParameteri(a9,10241,9729)
o.texParameteri(a9,10240,9729)
o.bindTexture(a9,a7)
c=new T.iu()
c.a=0
c.b=d
c.c=!1
c.d=0
p.aG(c,d,"../resources/maskonaive/posx.jpg",34069,!1,!1)
p.aG(c,d,"../resources/maskonaive/negx.jpg",34070,!1,!1)
p.aG(c,d,"../resources/maskonaive/posy.jpg",34071,!1,!1)
p.aG(c,d,"../resources/maskonaive/negy.jpg",34072,!1,!1)
p.aG(c,d,"../resources/maskonaive/posz.jpg",34073,!1,!1)
p.aG(c,d,"../resources/maskonaive/negz.jpg",34074,!1,!1)
b=new M.c3()
b.a=!0
p=E.kD()
a=F.kY()
o=a.a
n=new V.y(-1,-1,1).E()
a0=o.bf(new V.bf(1,2,4,6),V.fY(255,0,0),new V.M(-1,-1,0),new V.a3(0,1),n,a7)
n=a.a
o=new V.y(1,-1,1).E()
a1=n.bf(new V.bf(0,3,4,6),V.fY(0,0,255),new V.M(1,-1,0),new V.a3(1,1),o,a7)
o=a.a
n=new V.y(1,1,1).E()
a2=o.bf(new V.bf(0,2,5,6),V.fY(0,128,0),new V.M(1,1,0),new V.a3(1,0),n,a7)
n=a.a
o=V.aJ()
m=new V.y(-1,1,1).E()
a3=n.bf(new V.bf(0,2,4,7),V.fY(255,255,0),new V.M(-1,1,0),o,m,a7)
a.d.fH([a0,a1,a2,a3])
a.as()
p.sbs(0,a)
b.e=p
b.saX(a7)
b.sb4(0,a7)
b.sb5(a7)
p=new O.e5()
p.b=1.0471975511965976
p.d=new V.O(1,1,1)
k=p.c
p.c=c
c.gp().n(0,p.gbv())
o=new D.x("boxTexture",k,p.c)
o.b=!0
p.X(o)
b.sb5(p)
b.sb4(0,i)
b.saX(j)
a4=new M.ca()
a4.a=!0
p=O.jO()
a4.e=p
p.aP(a4.gev(),a4.gex())
a4.y=a4.x=a4.r=a4.f=null
a5=X.jS(a7)
a4.saX(a7)
a4.sb4(0,a5)
a4.sb5(a7)
a4.saX(j)
a4.sb5(g)
a4.sb4(0,i)
a4.e.n(0,h)
p=new M.c1()
p.b9()
p.e=!0
p.f=!1
p.r=null
p.aP(p.gf2(),p.gf4())
p.a1(0,[b,a4])
o=r.d
if(o!==p){if(o!=null)o.gp().L(0,r.gct())
r.d=p
p.gp().n(0,r.gct())
r.cu()}p=r.Q
if(p==null)p=r.Q=D.B()
o=p.b
p=o==null?p.b=[]:o
p.push(new B.jF(b,b0))
V.ow(r)},
jF:function jF(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jV.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gR:function(a){return H.cu(a)},
i:function(a){return"Instance of '"+H.d(H.dZ(a))+"'"}}
J.ht.prototype={
i:function(a){return String(a)},
gR:function(a){return a?519018:218159}}
J.cg.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gR:function(a){return 0}}
J.b9.prototype={
gR:function(a){return 0},
i:function(a){return String(a)}}
J.dV.prototype={}
J.bk.prototype={}
J.ah.prototype={
i:function(a){var s=a[$.lK()]
if(s==null)return this.dJ(a)
return"JavaScript function for "+H.d(J.af(s))}}
J.a7.prototype={
cc:function(a,b){if(!!a.fixed$length)H.q(P.w("removeAt"))
if(b<0||b>=a.length)throw H.c(P.e_(b,null))
return a.splice(b,1)[0]},
L:function(a,b){var s
if(!!a.fixed$length)H.q(P.w("remove"))
for(s=0;s<a.length;++s)if(J.F(a[s],b)){a.splice(s,1)
return!0}return!1},
a1:function(a,b){var s,r
if(!!a.fixed$length)H.q(P.w("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.m)(b),++r)a.push(b[r])},
F:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.b2(a))}},
k:function(a,b){var s,r,q=P.jX(a.length,"",!1)
for(s=0;s<a.length;++s){r=H.d(a[s])
if(s>=q.length)return H.e(q,s)
q[s]=r}return q.join(b)},
h6:function(a){return this.k(a,"")},
h3:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.b2(a))}throw H.c(H.hs())},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
gh2:function(a){if(a.length>0)return a[0]
throw H.c(H.hs())},
gbk:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.hs())},
cU:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.b2(a))}return!1},
aR:function(a,b){if(!!a.immutable$list)H.q(P.w("sort"))
H.mM(a,b==null?J.nr():b)},
dF:function(a){return this.aR(a,null)},
B:function(a,b){var s
for(s=0;s<a.length;++s)if(J.F(a[s],b))return!0
return!1},
i:function(a){return P.jT(a,"[","]")},
gK:function(a){return new J.U(a,a.length)},
gR:function(a){return H.cu(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.q(P.w("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bX(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.q(P.w("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bX(a,b))
a[b]=c},
$ii:1,
$if:1}
J.dy.prototype={}
J.U.prototype={
gC:function(a){return this.d},
q:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.m(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.b8.prototype={
aM:function(a,b){var s
if(typeof b!="number")throw H.c(H.aT(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbj(b)
if(this.gbj(a)===s)return 0
if(this.gbj(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbj:function(a){return a===0?1/a<0:a<0},
hy:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.w(""+a+".toInt()"))},
c3:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.w(""+a+".floor()"))},
af:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.w(""+a+".round()"))},
dv:function(a,b){var s
if(b>20)throw H.c(P.aK(b,0,20,"fractionDigits",null))
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
dA:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
dL:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cO(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.cO(a,b)},
cO:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.w("Result of truncating division is "+H.d(s)+": "+H.d(a)+" ~/ "+b))},
bd:function(a,b){var s
if(a>0)s=this.fw(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fw:function(a,b){return b>31?0:a>>>b},
$iX:1,
$iP:1}
J.cf.prototype={$ir:1}
J.ce.prototype={}
J.ap.prototype={
bU:function(a,b){if(b<0)throw H.c(H.bX(a,b))
if(b>=a.length)H.q(H.bX(a,b))
return a.charCodeAt(b)},
ba:function(a,b){if(b>=a.length)throw H.c(H.bX(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(typeof b!="string")throw H.c(P.kt(b,null,null))
return a+b},
bt:function(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
b7:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.e_(b,null))
if(b>c)throw H.c(P.e_(b,null))
if(c>a.length)throw H.c(P.e_(c,null))
return a.substring(b,c)},
am:function(a,b){return this.b7(a,b,null)},
hB:function(a){return a.toLowerCase()},
u:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.H)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ax:function(a,b){var s=b-a.length
if(s<=0)return a
return this.u(" ",s)+a},
fP:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aK(c,0,s,null,null))
return H.lG(a,b,c)},
B:function(a,b){return this.fP(a,b,0)},
aM:function(a,b){var s
if(typeof b!="string")throw H.c(H.aT(b))
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
$iL:1}
H.k.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.b.bU(this.a,b)}}
H.i.prototype={}
H.ck.prototype={
gK:function(a){return new H.aI(this,this.gl(this))},
br:function(a,b){return this.dI(0,b)}}
H.aI.prototype={
gC:function(a){var s=this.d
return s},
q:function(){var s,r=this,q=r.a,p=J.bo(q),o=p.gl(q)
if(r.b!=o)throw H.c(P.b2(q))
s=r.c
if(typeof o!=="number")return H.p(o)
if(s>=o){r.d=null
return!1}r.d=p.D(q,s);++r.c
return!0}}
H.bb.prototype={
gK:function(a){return new H.cm(J.aY(this.a),this.b)},
gl:function(a){return J.aZ(this.a)},
D:function(a,b){return this.b.$1(J.fM(this.a,b))}}
H.c8.prototype={$ii:1}
H.cm.prototype={
q:function(){var s=this,r=s.b
if(r.q()){s.a=s.c.$1(r.gC(r))
return!0}s.a=null
return!1},
gC:function(a){var s=this.a
return s}}
H.cn.prototype={
gl:function(a){return J.aZ(this.a)},
D:function(a,b){return this.b.$1(J.fM(this.a,b))}}
H.bm.prototype={
gK:function(a){return new H.eH(J.aY(this.a),this.b)}}
H.eH.prototype={
q:function(){var s,r
for(s=this.a,r=this.b;s.q();)if(r.$1(s.gC(s)))return!0
return!1},
gC:function(a){var s=this.a
return s.gC(s)}}
H.cb.prototype={}
H.eB.prototype={
m:function(a,b,c){throw H.c(P.w("Cannot modify an unmodifiable list"))}}
H.bP.prototype={}
H.iE.prototype={
ad:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.dz.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.d(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.d(r.a)+")"
return q+p+"' on '"+s+"' ("+H.d(r.a)+")"}}
H.eA.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.i_.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.fk.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bu.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.lI(r==null?"unknown":r)+"'"},
ghE:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ir.prototype={}
H.im.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.lI(s)+"'"}}
H.c_.prototype={
t:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.c_))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gR:function(a){var s,r=this.c
if(r==null)s=H.cu(this.a)
else s=typeof r!=="object"?J.Y(r):H.cu(r)
return(s^H.cu(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.dZ(s))+"'")}}
H.e2.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.v.prototype={
gl:function(a){return this.a},
ga4:function(a){return new H.aH(this)},
ghD:function(a){return H.ms(new H.aH(this),new H.hv(this))},
fQ:function(a,b){var s=this.b
if(s==null)return!1
return this.e6(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bb(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bb(p,b)
q=r==null?n:r.b
return q}else return o.h5(b)},
h5:function(a){var s,r,q=this.d
if(q==null)return null
s=this.cF(q,J.Y(a)&0x3ffffff)
r=this.dh(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.cw(s==null?m.b=m.bL():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.cw(r==null?m.c=m.bL():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bL()
p=J.Y(b)&0x3ffffff
o=m.cF(q,p)
if(o==null)m.bO(q,p,[m.bM(b,c)])
else{n=m.dh(o,b)
if(n>=0)o[n].b=c
else o.push(m.bM(b,c))}}},
F:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.b2(s))
r=r.c}},
cw:function(a,b,c){var s=this.bb(a,b)
if(s==null)this.bO(a,b,this.bM(b,c))
else s.b=c},
eh:function(){this.r=this.r+1&67108863},
bM:function(a,b){var s,r=this,q=new H.hy(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.eh()
return q},
dh:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.F(a[r].a,b))return r
return-1},
i:function(a){return P.kJ(this)},
bb:function(a,b){return a[b]},
cF:function(a,b){return a[b]},
bO:function(a,b,c){a[b]=c},
ea:function(a,b){delete a[b]},
e6:function(a,b){return this.bb(a,b)!=null},
bL:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bO(r,s,r)
this.ea(r,s)
return r}}
H.hv.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.np(this.a).ap("2(1)")}}
H.hy.prototype={}
H.aH.prototype={
gl:function(a){return this.a.a},
gK:function(a){var s=this.a,r=new H.dC(s,s.r)
r.c=s.e
return r}}
H.dC.prototype={
gC:function(a){return this.d},
q:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.b2(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jA.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.jB.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jC.prototype={
$1:function(a){return this.a(a)}}
H.hu.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.cq.prototype={}
H.bG.prototype={
gl:function(a){return a.length},
$it:1}
H.bd.prototype={
h:function(a,b){H.ay(b,a,a.length)
return a[b]},
m:function(a,b,c){H.ay(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.cp.prototype={
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
H.cr.prototype={
gl:function(a){return a.length},
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.dO.prototype={
gl:function(a){return a.length},
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.cI.prototype={}
H.cJ.prototype={}
H.cK.prototype={}
H.cL.prototype={}
H.ac.prototype={
ap:function(a){return H.fy(v.typeUniverse,this,a)},
cz:function(a){return H.ne(v.typeUniverse,this,a)}}
H.eX.prototype={}
H.eS.prototype={
i:function(a){return this.a}}
H.cU.prototype={}
P.j8.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:16}
P.j7.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.j9.prototype={
$0:function(){this.a.$0()}}
P.ja.prototype={
$0:function(){this.a.$0()}}
P.cT.prototype={
dU:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bW(new P.jp(this,b),0),a)
else throw H.c(P.w("`setTimeout()` not found."))},
dV:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bW(new P.jo(this,a,Date.now(),b),0),a)
else throw H.c(P.w("Periodic timer."))},
$icx:1}
P.jp.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jo.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.dL(s,o)}q.c=p
r.d.$1(q)}}
P.bT.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.d(this.a)+")"}}
P.bn.prototype={
gC:function(a){var s=this.c
if(s==null)return this.b
return s.gC(s)},
q:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.q())return!0
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
else{o=J.aY(s)
if(o instanceof P.bn){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.cQ.prototype={
gK:function(a){return new P.bn(this.a())}}
P.eI.prototype={}
P.eb.prototype={}
P.ec.prototype={}
P.cx.prototype={}
P.js.prototype={}
P.jv.prototype={
$0:function(){var s=H.c(this.a)
s.stack=J.af(this.b)
throw s}}
P.jh.prototype={
hu:function(a){var s,r,q,p=null
try{if(C.e===$.aj){a.$0()
return}P.nX(p,p,this,a)}catch(q){s=H.aC(q)
r=H.ki(q)
P.lu(p,p,this,s,r)}},
hv:function(a,b){var s,r,q,p=null
try{if(C.e===$.aj){a.$1(b)
return}P.nY(p,p,this,a,b)}catch(q){s=H.aC(q)
r=H.ki(q)
P.lu(p,p,this,s,r)}},
hw:function(a,b){return this.hv(a,b,t.z)},
fM:function(a){return new P.ji(this,a)},
cY:function(a,b){return new P.jj(this,a,b)}}
P.ji.prototype={
$0:function(){return this.a.hu(this.b)}}
P.jj.prototype={
$1:function(a){return this.a.hw(this.b,a)},
$S:function(){return this.c.ap("~(0)")}}
P.cE.prototype={
gK:function(a){var s=new P.cF(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
B:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.e4(b)
return r}},
e4:function(a){var s=this.d
if(s==null)return!1
return this.bC(s[this.bz(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cA(s==null?q.b=P.k6():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cA(r==null?q.c=P.k6():r,b)}else return q.dY(0,b)},
dY:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.k6()
s=q.bz(b)
r=p[s]
if(r==null)p[s]=[q.by(b)]
else{if(q.bC(r,b)>=0)return!1
r.push(q.by(b))}return!0},
L:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.fd(this.c,b)
else return this.fc(0,b)},
fc:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bz(b)
r=n[s]
q=o.bC(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cQ(p)
return!0},
cA:function(a,b){if(a[b]!=null)return!1
a[b]=this.by(b)
return!0},
fd:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cQ(s)
delete a[b]
return!0},
cB:function(){this.r=1073741823&this.r+1},
by:function(a){var s,r=this,q=new P.jg(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cB()
return q},
cQ:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cB()},
bz:function(a){return J.Y(a)&1073741823},
bC:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.F(a[r].a,b))return r
return-1}}
P.jg.prototype={}
P.cF.prototype={
gC:function(a){return this.d},
q:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.b2(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cd.prototype={}
P.cj.prototype={$ii:1,$if:1}
P.C.prototype={
gK:function(a){return new H.aI(a,this.gl(a))},
D:function(a,b){return this.h(a,b)},
gdi:function(a){return this.gl(a)===0},
hA:function(a,b){var s,r,q,p,o=this
if(o.gdi(a)){s=J.kF(0)
return s}r=o.h(a,0)
q=P.jX(o.gl(a),r,!0)
p=1
while(!0){s=o.gl(a)
if(typeof s!=="number")return H.p(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.e(q,p)
q[p]=s;++p}return q},
hz:function(a){return this.hA(a,!0)},
i:function(a){return P.jT(a,"[","]")}}
P.dE.prototype={}
P.hB.prototype={
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
for(s=J.aY(this.ga4(a));s.q();){r=s.gC(s)
b.$2(r,this.h(a,r))}},
gl:function(a){return J.aZ(this.ga4(a))},
i:function(a){return P.kJ(a)}}
P.cM.prototype={
a1:function(a,b){var s
for(s=J.aY(b);s.q();)this.n(0,s.gC(s))},
i:function(a){return P.jT(this,"{","}")},
D:function(a,b){var s,r,q,p="index"
P.m8(b,p)
P.kT(b,p)
for(s=P.mZ(this,this.r),r=0;s.q();){q=s.d
if(b===r)return q;++r}throw H.c(P.I(b,this,p,null,r))},
$ii:1,
$if:1}
P.cG.prototype={}
P.df.prototype={}
P.dh.prototype={}
P.hb.prototype={}
P.hq.prototype={
i:function(a){return this.a}}
P.hp.prototype={
e7:function(a,b,c){var s,r,q,p,o,n,m=null
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
default:n=m}if(n!=null){if(o==null)o=new P.aM("")
if(p>b)o.a+=C.b.b7(a,b,p)
o.a+=n
b=p+1}}if(o==null)return m
if(c>b)o.a+=J.m6(a,b,c)
s=o.a
return s.charCodeAt(0)==0?s:s}}
P.iQ.prototype={}
P.iR.prototype={
fR:function(a){var s,r,q,p=null,o=P.k_(0,p,a.length)
if(o==null)throw H.c(new P.bK(p,p,!1,p,p,"Invalid range"))
s=o-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.jq(r)
if(q.ec(a,0,o)!==o){C.b.bU(a,o-1)
q.bQ()}return new Uint8Array(r.subarray(0,H.nj(0,q.b,r.length)))}}
P.jq.prototype={
bQ:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.e(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.e(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.e(r,q)
r[q]=189},
fF:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.bQ()
return!1}},
ec:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.b.bU(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.b.ba(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fF(p,C.b.ba(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bQ()}else if(p<=2047){o=l.b
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
P.a6.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.a6&&this.a===b.a&&!0},
aM:function(a,b){return C.c.aM(this.a,b.a)},
gR:function(a){var s=this.a
return(s^C.c.bd(s,30))&1073741823},
i:function(a){var s=this,r=P.mh(H.mC(s)),q=P.dk(H.mA(s)),p=P.dk(H.mw(s)),o=P.dk(H.mx(s)),n=P.dk(H.mz(s)),m=P.dk(H.mB(s)),l=P.mi(H.my(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.X.prototype={}
P.b3.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.b3&&this.a===b.a},
gR:function(a){return C.c.gR(this.a)},
aM:function(a,b){return C.c.aM(this.a,b.a)},
i:function(a){var s,r,q,p=new P.h8(),o=this.a
if(o<0)return"-"+new P.b3(0-o).i(0)
s=p.$1(C.c.a0(o,6e7)%60)
r=p.$1(C.c.a0(o,1e6)%60)
q=new P.h7().$1(o%1e6)
return""+C.c.a0(o,36e8)+":"+H.d(s)+":"+H.d(r)+"."+H.d(q)}}
P.h7.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.h8.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.H.prototype={}
P.db.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.he(s)
return"Assertion failed"}}
P.dQ.prototype={
i:function(a){return"Throw of null."}}
P.a1.prototype={
gbB:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbA:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbB()+o+m
if(!q.a)return l
s=q.gbA()
r=P.he(q.b)
return l+s+": "+r}}
P.bK.prototype={
gbB:function(){return"RangeError"},
gbA:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.d(q):""
else if(q==null)s=": Not greater than or equal to "+H.d(r)
else if(q>r)s=": Not in inclusive range "+H.d(r)+".."+H.d(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.d(r)
return s}}
P.dv.prototype={
gbB:function(){return"RangeError"},
gbA:function(){var s,r=this.b
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
P.dg.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.he(s)+"."}}
P.dT.prototype={
i:function(a){return"Out of Memory"},
$iH:1}
P.cv.prototype={
i:function(a){return"Stack Overflow"},
$iH:1}
P.di.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.eU.prototype={
i:function(a){return"Exception: "+this.a}}
P.hl.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.b.b7(q,0,75)+"..."
return r+"\n"+q}}
P.hn.prototype={}
P.r.prototype={}
P.f.prototype={
br:function(a,b){return new H.bm(this,b)},
gl:function(a){var s,r=this.gK(this)
for(s=0;r.q();)++s
return s},
gaD:function(a){var s,r=this.gK(this)
if(!r.q())throw H.c(H.hs())
s=r.gC(r)
if(r.q())throw H.c(H.mm())
return s},
D:function(a,b){var s,r,q
P.kT(b,"index")
for(s=this.gK(this),r=0;s.q();){q=s.gC(s)
if(b===r)return q;++r}throw H.c(P.I(b,this,"index",null,r))},
i:function(a){return P.ml(this,"(",")")}}
P.dx.prototype={}
P.ar.prototype={$ii:1,$if:1}
P.dD.prototype={}
P.aa.prototype={
gR:function(a){return P.K.prototype.gR.call(C.h,this)},
i:function(a){return"null"}}
P.P.prototype={}
P.K.prototype={constructor:P.K,$iK:1,
t:function(a,b){return this===b},
gR:function(a){return H.cu(this)},
i:function(a){return"Instance of '"+H.d(H.dZ(this))+"'"},
toString:function(){return this.i(this)}}
P.L.prototype={}
P.aM.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.l.prototype={}
W.fN.prototype={
gl:function(a){return a.length}}
W.d9.prototype={
i:function(a){return String(a)}}
W.da.prototype={
i:function(a){return String(a)}}
W.bs.prototype={$ibs:1}
W.dd.prototype={}
W.b_.prototype={$ib_:1}
W.b0.prototype={
ck:function(a,b,c){if(c!=null)return a.getContext(b,P.ob(c))
return a.getContext(b)},
dz:function(a,b){return this.ck(a,b,null)},
$ib0:1}
W.ag.prototype={
gl:function(a){return a.length}}
W.h_.prototype={
gl:function(a){return a.length}}
W.G.prototype={$iG:1}
W.c4.prototype={
gl:function(a){return a.length}}
W.h0.prototype={}
W.a5.prototype={}
W.am.prototype={}
W.h1.prototype={
gl:function(a){return a.length}}
W.h2.prototype={
gl:function(a){return a.length}}
W.h3.prototype={
gl:function(a){return a.length}}
W.c5.prototype={}
W.h5.prototype={
i:function(a){return String(a)}}
W.c6.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.c7.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gaC(a))+" x "+H.d(this.gav(a))},
t:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.aA(b)
s=a.left==s.gbl(b)&&a.top==s.gbp(b)&&this.gaC(a)==s.gaC(b)&&this.gav(a)==s.gav(b)}else s=!1
return s},
gR:function(a){return W.lf(J.Y(a.left),J.Y(a.top),J.Y(this.gaC(a)),J.Y(this.gav(a)))},
gcZ:function(a){return a.bottom},
gav:function(a){return a.height},
gbl:function(a){return a.left},
gcf:function(a){return a.right},
gbp:function(a){return a.top},
gaC:function(a){return a.width},
$iab:1}
W.dl.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.h6.prototype={
gl:function(a){return a.length}}
W.eK.prototype={
gdi:function(a){return this.a.firstElementChild==null},
gl:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
this.a.replaceChild(c,s[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gK:function(a){var s=this.hz(this)
return new J.U(s,s.length)}}
W.z.prototype={
gfL:function(a){return new W.jc(a)},
gd0:function(a){return new W.eK(a,a.children)},
gd1:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.aa()
if(q<0)q=-q*0
if(typeof p!=="number")return p.aa()
if(p<0)p=-p*0
return new P.ab(s,r,q,p,t.I)},
i:function(a){return a.localName},
ac:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.kC
if(s==null){s=[]
r=new W.ct(s)
s.push(W.ld(null))
s.push(W.lj())
$.kC=r
d=r}else d=s
s=$.kB
if(s==null){s=new W.fz(d)
$.kB=s
c=s}else{s.a=d
c=s}}if($.aG==null){s=document
r=s.implementation.createHTMLDocument("")
$.aG=r
$.jQ=r.createRange()
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
$.aG.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.a.B(C.Q,a.tagName)){$.jQ.selectNodeContents(q)
s=$.jQ
p=s.createContextualFragment(b)}else{q.innerHTML=b
p=$.aG.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.aG.body)J.kr(q)
c.cl(p)
document.adoptNode(p)
return p},
fS:function(a,b,c){return this.ac(a,b,c,null)},
dC:function(a,b){a.textContent=null
a.appendChild(this.ac(a,b,null,null))},
gdu:function(a){return a.tagName},
$iz:1}
W.h9.prototype={
$1:function(a){return t.h.b(a)}}
W.h.prototype={$ih:1}
W.b.prototype={
fG:function(a,b,c,d){if(c!=null)this.dZ(a,b,c,!1)},
dZ:function(a,b,c,d){return a.addEventListener(b,H.bW(c,1),!1)},
$ib:1}
W.b4.prototype={$ib4:1}
W.dn.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.dp.prototype={
gl:function(a){return a.length}}
W.dr.prototype={
gl:function(a){return a.length}}
W.b5.prototype={$ib5:1}
W.ho.prototype={
gl:function(a){return a.length}}
W.b6.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.b7.prototype={
gd3:function(a){return a.data},
$ib7:1}
W.bA.prototype={$ibA:1}
W.ba.prototype={$iba:1}
W.hz.prototype={
i:function(a){return String(a)}}
W.hR.prototype={
gl:function(a){return a.length}}
W.hS.prototype={
h:function(a,b){return P.aU(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aU(s.value[1]))}},
ga4:function(a){var s=[]
this.F(a,new W.hT(s))
return s},
gl:function(a){return a.size}}
W.hT.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hU.prototype={
h:function(a,b){return P.aU(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aU(s.value[1]))}},
ga4:function(a){var s=[]
this.F(a,new W.hV(s))
return s},
gl:function(a){return a.size}}
W.hV.prototype={
$2:function(a,b){return this.a.push(a)}}
W.bc.prototype={$ibc:1}
W.dI.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.a2.prototype={$ia2:1}
W.T.prototype={
gaD:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.k0("No elements"))
if(r>1)throw H.c(P.k0("More than one element"))
s=s.firstChild
s.toString
return s},
a1:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q)}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.e(r,b)
s.replaceChild(c,r[b])},
gK:function(a){var s=this.a.childNodes
return new W.cc(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.e(s,b)
return s[b]}}
W.u.prototype={
hp:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
hs:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.m_(s,b,a)}catch(q){H.aC(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.dH(a):s},
fh:function(a,b,c){return a.replaceChild(b,c)},
$iu:1}
W.cs.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.be.prototype={
gl:function(a){return a.length},
$ibe:1}
W.dX.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.i7.prototype={
h:function(a,b){return P.aU(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aU(s.value[1]))}},
ga4:function(a){var s=[]
this.F(a,new W.i8(s))
return s},
gl:function(a){return a.size}}
W.i8.prototype={
$2:function(a,b){return this.a.push(a)}}
W.e3.prototype={
gl:function(a){return a.length}}
W.aL.prototype={$iaL:1}
W.e7.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.bg.prototype={$ibg:1}
W.e8.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
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
W.io.prototype={
h:function(a,b){return a.getItem(H.kc(b))},
F:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga4:function(a){var s=[]
this.F(a,new W.ip(s))
return s},
gl:function(a){return a.length}}
W.ip.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aN.prototype={$iaN:1}
W.cw.prototype={
ac:function(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
s=W.mj("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
s.toString
new W.T(r).a1(0,new W.T(s))
return r}}
W.ee.prototype={
ac:function(a,b,c,d){var s,r,q,p
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.w.ac(s.createElement("table"),b,c,d)
s.toString
s=new W.T(s)
q=s.gaD(s)
q.toString
s=new W.T(q)
p=s.gaD(s)
r.toString
p.toString
new W.T(r).a1(0,new W.T(p))
return r}}
W.ef.prototype={
ac:function(a,b,c,d){var s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.w.ac(s.createElement("table"),b,c,d)
s.toString
s=new W.T(s)
q=s.gaD(s)
r.toString
q.toString
new W.T(r).a1(0,new W.T(q))
return r}}
W.bN.prototype={$ibN:1}
W.aO.prototype={$iaO:1}
W.ai.prototype={$iai:1}
W.eg.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.eh.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.iy.prototype={
gl:function(a){return a.length}}
W.bi.prototype={$ibi:1}
W.bj.prototype={$ibj:1}
W.el.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.iC.prototype={
gl:function(a){return a.length}}
W.ax.prototype={}
W.iP.prototype={
i:function(a){return String(a)}}
W.eE.prototype={
gl:function(a){return a.length}}
W.aP.prototype={
gfV:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.w("deltaY is not supported"))},
gfU:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.w("deltaX is not supported"))},
$iaP:1}
W.bQ.prototype={
fi:function(a,b){return a.requestAnimationFrame(H.bW(b,1))},
eb:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.bR.prototype={$ibR:1}
W.eL.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.cD.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
t:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.aA(b)
s=a.left==s.gbl(b)&&a.top==s.gbp(b)&&a.width==s.gaC(b)&&a.height==s.gav(b)}else s=!1
return s},
gR:function(a){return W.lf(J.Y(a.left),J.Y(a.top),J.Y(a.width),J.Y(a.height))},
gav:function(a){return a.height},
gaC:function(a){return a.width}}
W.eY.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.cH.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.fh.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.fo.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.jb.prototype={
F:function(a,b){var s,r,q,p,o
for(s=this.ga4(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.m)(s),++p){o=s[p]
b.$2(o,q.getAttribute(o))}},
ga4:function(a){var s,r,q,p,o=this.a.attributes,n=[]
for(s=o.length,r=t.x,q=0;q<s;++q){if(q>=o.length)return H.e(o,q)
p=r.a(o[q])
if(p.namespaceURI==null)n.push(p.name)}return n}}
W.jc.prototype={
h:function(a,b){return this.a.getAttribute(H.kc(b))},
gl:function(a){return this.ga4(this).length}}
W.jR.prototype={}
W.eT.prototype={}
W.jd.prototype={
$1:function(a){return this.a.$1(a)}}
W.k5.prototype={}
W.bS.prototype={
dQ:function(a){var s
if($.eZ.a===0){for(s=0;s<262;++s)$.eZ.m(0,C.P[s],W.ol())
for(s=0;s<12;++s)$.eZ.m(0,C.k[s],W.om())}},
aJ:function(a){return $.lY().B(0,W.c9(a))},
ak:function(a,b,c){var s=$.eZ.h(0,H.d(W.c9(a))+"::"+b)
if(s==null)s=$.eZ.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$ia9:1}
W.E.prototype={
gK:function(a){return new W.cc(a,this.gl(a))}}
W.ct.prototype={
aJ:function(a){return C.a.cU(this.a,new W.hY(a))},
ak:function(a,b,c){return C.a.cU(this.a,new W.hX(a,b,c))},
$ia9:1}
W.hY.prototype={
$1:function(a){return a.aJ(this.a)}}
W.hX.prototype={
$1:function(a){return a.ak(this.a,this.b,this.c)}}
W.cN.prototype={
dT:function(a,b,c,d){var s,r,q
this.a.a1(0,c)
s=b.br(0,new W.jl())
r=b.br(0,new W.jm())
this.b.a1(0,s)
q=this.c
q.a1(0,C.R)
q.a1(0,r)},
aJ:function(a){return this.a.B(0,W.c9(a))},
ak:function(a,b,c){var s=this,r=W.c9(a),q=s.c
if(q.B(0,H.d(r)+"::"+b))return s.d.fJ(c)
else if(q.B(0,"*::"+b))return s.d.fJ(c)
else{q=s.b
if(q.B(0,H.d(r)+"::"+b))return!0
else if(q.B(0,"*::"+b))return!0
else if(q.B(0,H.d(r)+"::*"))return!0
else if(q.B(0,"*::*"))return!0}return!1},
$ia9:1}
W.jl.prototype={
$1:function(a){return!C.a.B(C.k,a)}}
W.jm.prototype={
$1:function(a){return C.a.B(C.k,a)}}
W.fq.prototype={
ak:function(a,b,c){if(this.dK(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.B(0,b)
return!1}}
W.jn.prototype={
$1:function(a){return"TEMPLATE::"+H.d(a)}}
W.fp.prototype={
aJ:function(a){var s
if(t.Y.b(a))return!1
s=t.k.b(a)
if(s&&W.c9(a)==="foreignObject")return!1
if(s)return!0
return!1},
ak:function(a,b,c){if(b==="is"||C.b.bt(b,"on"))return!1
return this.aJ(a)},
$ia9:1}
W.cc.prototype={
q:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.d7(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gC:function(a){return this.d}}
W.a9.prototype={}
W.jk.prototype={}
W.fz.prototype={
cl:function(a){var s=this,r=new W.jr(s)
s.b=!1
r.$2(a,null)
for(;s.b;){s.b=!1
r.$2(a,null)}},
aV:function(a,b){var s=this.b=!0
if(b!=null?b!==a.parentNode:s)J.kr(a)
else b.removeChild(a)},
fn:function(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.m2(a)
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
try{r=J.af(a)}catch(p){H.aC(p)}try{q=W.c9(a)
this.fm(a,b,n,r,q,m,l)}catch(p){if(H.aC(p) instanceof P.a1)throw p
else{this.aV(a,b)
window
o="Removing corrupted element "+H.d(r)
if(typeof console!="undefined")window.console.warn(o)}}},
fm:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.aV(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.aJ(a)){m.aV(a,b)
window
s="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.ak(a,"is",g)){m.aV(a,b)
window
s="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}r=f.ga4(f).slice(0)
for(q=f.ga4(f).length-1,s=f.a;q>=0;--q){if(q>=r.length)return H.e(r,q)
p=r[q]
o=m.a
n=J.m7(p)
H.kc(p)
if(!o.ak(a,n,s.getAttribute(p))){window
o="Removing disallowed attribute <"+H.d(e)+" "+p+'="'+H.d(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.f.b(a))m.cl(a.content)}}
W.jr.prototype={
$2:function(a,b){var s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.fn(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.aV(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){q=r.nextSibling
p=s
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.k0("Corrupt HTML")
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
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fe.prototype={}
W.cO.prototype={}
W.cP.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fl.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.cR.prototype={}
W.cS.prototype={}
W.ft.prototype={}
W.fu.prototype={}
W.fA.prototype={}
W.fB.prototype={}
W.fC.prototype={}
W.fD.prototype={}
W.fE.prototype={}
W.fF.prototype={}
W.fG.prototype={}
W.fH.prototype={}
W.fI.prototype={}
W.fJ.prototype={}
P.cV.prototype={$ib7:1,
gd3:function(a){return this.a}}
P.jw.prototype={
$2:function(a,b){this.a[a]=b},
$S:18}
P.dq.prototype={
gbc:function(){return new H.bb(new H.bm(this.b,new P.hj()),new P.hk())},
m:function(a,b,c){var s=this.gbc()
J.m5(s.b.$1(J.fM(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aZ(this.gbc().a)},
h:function(a,b){var s=this.gbc()
return s.b.$1(J.fM(s.a,b))},
gK:function(a){var s=P.jY(this.gbc(),!1)
return new J.U(s,s.length)}}
P.hj.prototype={
$1:function(a){return t.h.b(a)}}
P.hk.prototype={
$1:function(a){return t.h.a(a)}}
P.fd.prototype={
gcf:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.p(r)
return this.$ti.c.a(s+r)},
gcZ:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.p(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.d(s.a)+", "+H.d(s.b)+") "+H.d(s.c)+" x "+H.d(s.d)},
t:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.I.b(b)){s=n.a
r=J.aA(b)
if(s==r.gbl(b)){q=n.b
if(q==r.gbp(b)){p=n.c
if(typeof s!=="number")return s.v()
if(typeof p!=="number")return H.p(p)
o=n.$ti.c
if(o.a(s+p)===r.gcf(b)){s=n.d
if(typeof q!=="number")return q.v()
if(typeof s!=="number")return H.p(s)
r=o.a(q+s)===r.gcZ(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gR:function(a){var s,r=this,q=r.a,p=J.Y(q),o=r.b,n=J.Y(o),m=r.c
if(typeof q!=="number")return q.v()
if(typeof m!=="number")return H.p(m)
s=r.$ti.c
m=C.c.gR(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.v()
if(typeof q!=="number")return H.p(q)
q=C.c.gR(s.a(o+q))
return P.mY(P.jf(P.jf(P.jf(P.jf(0,p),n),m),q))}}
P.ab.prototype={
gbl:function(a){return this.a},
gbp:function(a){return this.b},
gaC:function(a){return this.c},
gav:function(a){return this.d}}
P.bB.prototype={$ibB:1}
P.dB.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.bH.prototype={$ibH:1}
P.dR.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.i1.prototype={
gl:function(a){return a.length}}
P.bL.prototype={$ibL:1}
P.ed.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.j.prototype={
gd0:function(a){return new P.dq(a,new W.T(a))},
ac:function(a,b,c,d){var s,r,q,p,o,n=[]
n.push(W.ld(null))
n.push(W.lj())
n.push(new W.fp())
c=new W.fz(new W.ct(n))
s='<svg version="1.1">'+b+"</svg>"
n=document
r=n.body
r.toString
q=C.m.fS(r,s,c)
p=n.createDocumentFragment()
q.toString
n=new W.T(q)
o=n.gaD(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
$ij:1}
P.bO.prototype={$ibO:1}
P.em.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.f1.prototype={}
P.f2.prototype={}
P.f9.prototype={}
P.fa.prototype={}
P.fm.prototype={}
P.fn.prototype={}
P.fv.prototype={}
P.fw.prototype={}
P.fR.prototype={
gl:function(a){return a.length}}
P.fS.prototype={
h:function(a,b){return P.aU(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aU(s.value[1]))}},
ga4:function(a){var s=[]
this.F(a,new P.fT(s))
return s},
gl:function(a){return a.size}}
P.fT.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dc.prototype={
gl:function(a){return a.length}}
P.aE.prototype={}
P.dS.prototype={
gl:function(a){return a.length}}
P.eJ.prototype={}
P.e1.prototype={
hx:function(a,b,c,d,e,f,g){var s
if(t.s.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.oc(g))
return}if(t.R.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.jK("Incorrect number or type of arguments"))}}
P.e9.prototype={
gl:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
s=P.aU(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.fi.prototype={}
P.fj.prototype={}
K.aD.prototype={
aw:function(a,b){return!0},
i:function(a){return"all"}}
K.dt.prototype={
aw:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)if(s[q].aw(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.m)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.Z.prototype={
aw:function(a,b){return!this.dG(0,b)},
i:function(a){return"!["+this.co(0)+"]"}}
K.i2.prototype={
aw:function(a,b){if(typeof b!=="number")return H.p(b)
return this.a<=b&&this.b>=b},
i:function(a){var s=H.jZ(this.a),r=H.jZ(this.b)
return s+".."+r}}
K.i9.prototype={
dO:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.o("May not create a Set with zero characters."))
s=new H.v(t.E)
for(r=new H.aI(a,a.gl(a));r.q();){q=r.d
s.m(0,q,!0)}p=P.jY(new H.aH(s),!0)
C.a.dF(p)
this.a=p},
aw:function(a,b){return C.a.B(this.a,b)},
i:function(a){return P.k1(this.a)}}
L.ea.prototype={
k:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.iD(this.a.j(0,b))
p.a=[]
p.c=!1
this.c.push(p)
return p},
h1:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
if(p.aw(0,a))return p}return null},
i:function(a){return this.b},
cP:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.B(0,l))m+=" (consume)"
for(l=new H.aH(n.d.c),l=l.gK(l);l.q();){r=l.d
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.d(r)+" => ["+H.d(q)+"]")
m=s.c.B(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.m)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.ej.prototype={
i:function(a){var s=H.kn(this.b,"\n","\\n"),r=H.kn(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.ek.prototype={
az:function(a,b,c){var s,r,q
for(s=c.length,r=0;r<c.length;c.length===s||(0,H.m)(c),++r){q=c[r]
this.c.m(0,q,b)}},
i:function(a){return this.b}}
L.iz.prototype={
j:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.ea(this,b)
s.c=[]
this.a.m(0,b,s)}return s},
I:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.ek(a)
s.c=new H.v(t.i)
this.b.m(0,a,s)}return s},
cg:function(a){return this.hC(a)},
hC:function(a){var s=this
return P.nz(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$cg(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a0.length!==0)j=C.a.cc(a0,0)
else{if(!r.q()){q=3
break}i=r.d
j=i}b.push(j);++m
h=d.h1(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.k1(b)
throw H.c(P.o("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!b.fixed$length)H.q(P.w("removeRange"))
P.k_(0,k,b.length)
b.splice(0,k-0)
C.a.a1(a0,b)
b=[]
c=[]
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
case 6:if(!h.c)c.push(j)
d=h.b
if(d.d!=null){g=P.k1(c)
f=d.d
e=f.c.h(0,g)
n=new L.ej(e==null?f.b:e,g,m)
k=b.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.B(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.mW()
case 1:return P.mX(o)}}},t.j)},
i:function(a){var s,r=new P.aM(""),q=this.d
if(q!=null)r.a=q.cP()+"\n"
for(q=this.a,q=q.ghD(q),q=new H.cm(J.aY(q.a),q.b);q.q();){s=q.a
if(s!=this.d)r.a+=s.cP()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.iD.prototype={
i:function(a){return this.b.b+": "+this.co(0)}}
O.bv.prototype={
b9:function(){this.a=[]
this.c=this.b=null},
cm:function(a,b,c){this.b=b
this.c=a},
aP:function(a,b){return this.cm(a,null,b)},
cI:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
cs:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gl:function(a){return this.a.length},
gK:function(a){var s=this.a
return new J.U(s,s.length)},
D:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.e(s,b)
return s[b]},
n:function(a,b){var s,r
if(this.cI([b])){s=this.a
r=s.length
s.push(b)
this.cs(r,[b])}},
a1:function(a,b){var s,r
if(this.cI(b)){s=this.a
r=s.length
C.a.a1(s,b)
this.cs(r,b)}},
$if:1}
O.co.prototype={
gl:function(a){return this.a.length},
gp:function(){var s=this.b
return s==null?this.b=D.B():s},
aE:function(){var s=this.b
if(s!=null)s.A(null)},
gW:function(a){var s=this.a
if(s.length>0)return C.a.gbk(s)
else return V.bD()},
bo:function(a){var s=this.a
if(a==null)s.push(V.bD())
else s.push(a)
this.aE()},
ay:function(){var s=this.a
if(s.length>0){s.pop()
this.aE()}}}
E.fV.prototype={}
E.bx.prototype={
sbs:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gp().L(0,q.gdn())
s=q.c
if(s!=null)s.gp().n(0,q.gdn())
r=new D.x("shape",p,q.c)
r.b=!0
q.bm(r)}},
ag:function(a,b){var s
for(s=this.y.a,s=new J.U(s,s.length);s.q();)s.d.ag(0,b)},
a9:function(a){var s,r=this,q=a.dx
q.a.push(q.gW(q))
q.aE()
a.cb(r.f)
q=a.dy
s=(q&&C.a).gbk(q)
if(s!=null&&r.d!=null)s.ds(a,r)
for(q=r.y.a,q=new J.U(q,q.length);q.q();)q.d.a9(a)
a.ca()
a.dx.ay()},
bm:function(a){var s=this.z
if(s!=null)s.A(a)},
a8:function(){return this.bm(null)},
dq:function(a){this.e=null
this.bm(a)},
hf:function(){return this.dq(null)},
dm:function(a){this.bm(a)},
hc:function(){return this.dm(null)},
hb:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gdl(),q=0;q<b.length;b.length===s||(0,H.m)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.by()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}this.a8()},
he:function(a,b){var s,r
for(s=b.gK(b),r=this.gdl();s.q();)s.gC(s).gp().L(0,r)
this.a8()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bt.prototype={
i:function(a){return this.b}}
E.bI.prototype={
i:function(a){return this.b}}
E.eR.prototype={}
E.i3.prototype={
dN:function(a,b){var s,r=this
r.d=r.c=512
r.e=0
r.x=r.r=r.f=new P.a6(Date.now(),!1)
r.y=0
r.cx=r.ch=r.Q=r.z=null
s=new O.co()
s.a=[]
s.gp().n(0,new E.i4(r))
r.cy=s
s=new O.co()
s.a=[]
s.gp().n(0,new E.i5(r))
r.db=s
s=new O.co()
s.a=[]
s.gp().n(0,new E.i6(r))
r.dx=s
s=[]
r.dy=s
s.push(null)
r.fr=new H.v(t.G)},
gho:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.gW(q)
s=r.db
s=r.z=q.u(0,s.gW(s))
q=s}return q},
cb:function(a){var s=this.dy
s.push(a==null?(s&&C.a).gbk(s):a)},
ca:function(){var s=this.dy
if(s.length>1)s.pop()},
cT:function(a){var s=a.b
if(s.length===0)throw H.c(P.o("May not cache a shader with no name."))
if(this.fr.fQ(0,s))throw H.c(P.o('Shader cache already contains a shader by the name "'+s+'".'))
this.fr.m(0,s,a)}}
E.i4.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.i5.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.i6.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.ei.prototype={
cv:function(a){this.dt()},
cu:function(){return this.cv(null)},
gh4:function(){var s,r=this,q=Date.now(),p=C.c.a0(P.kA(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.a6(q,!1)
return s/p},
cK:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.u()
if(typeof p!=="number")return H.p(p)
s=C.d.c3(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.u()
r=C.d.c3(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.l0(C.j,q.ght())}},
dt:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.y.eb(s)
r=W.lv(new E.ix(this),t.H)
r.toString
C.y.fi(s,r)}},
hr:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cK()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.a6(p,!1)
q.y=P.kA(p-q.r.a).a*0.000001
p=q.cy
C.a.sl(p.a,0)
p.aE()
p=q.db
C.a.sl(p.a,0)
p.aE()
p=q.dx
C.a.sl(p.a,0)
p.aE()
p=q.dy
p.toString
C.a.sl(p,0)
q.dy.push(null)
m.a9(n.e)}q=n.Q
if(q!=null)q.A(null)}catch(o){s=H.aC(o)
r=H.ki(o)
P.km("Error: "+H.d(s))
P.km("Stack: "+H.d(r))
throw H.c(s)}}}
E.ix.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hr()}}}
Z.eF.prototype={}
Z.fW.prototype={
V:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.aC(q)
r=P.o('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.d(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.d(s.e)+"]"}}
Z.eG.prototype={}
Z.c0.prototype={
au:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
V:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].V(a)},
aN:function(a){var s,r,q
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
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)o.push(s[q].i(0))
p=[]
for(s=this.c,r=s.length,q=0;q<r;++q)p.push(J.af(s[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(o,", ")+"\nAttrs:   "+C.a.k(p,", ")}}
Z.dw.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d(H.dZ(this.c))+"'")+"]"}}
Z.bl.prototype={
gcn:function(a){var s=this.a,r=(s&$.ak().a)!==0?3:0
if((s&$.aX().a)!==0)r+=3
if((s&$.aW().a)!==0)r+=3
if((s&$.bq().a)!==0)r+=2
if((s&$.br().a)!==0)r+=3
if((s&$.d5().a)!==0)r+=3
if((s&$.d6().a)!==0)r+=4
if((s&$.bZ().a)!==0)++r
return(s&$.aV().a)!==0?r+4:r},
fK:function(a){var s,r=$.ak(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.aX()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aW()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bq()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.br()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.d5()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.d6()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bZ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aV()
if((q&r.a)!==0)if(s===a)return r
return $.lX()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bl))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.ak().a)!==0)s.push("Pos")
if((r&$.aX().a)!==0)s.push("Norm")
if((r&$.aW().a)!==0)s.push("Binm")
if((r&$.bq().a)!==0)s.push("Txt2D")
if((r&$.br().a)!==0)s.push("TxtCube")
if((r&$.d5().a)!==0)s.push("Clr3")
if((r&$.d6().a)!==0)s.push("Clr4")
if((r&$.bZ().a)!==0)s.push("Weight")
if((r&$.aV().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.k(s,"|")}}
D.fX.prototype={}
D.by.prototype={
n:function(a,b){var s=this.a;(s==null?this.a=[]:s).push(b)},
L:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.a.B(q,b)
if(q===!0){q=r.a
s=(q&&C.a).L(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.a.B(q,b)
if(q===!0){q=r.b
s=(q&&C.a).L(q,b)||s}return s},
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
return!0}if(!r)C.a.F(P.jY(s,!0),new D.hf(o))
s=p.b
if(s!=null){p.b=[]
C.a.F(s,new D.hg(o))}return!0},
h_:function(){return this.A(null)},
aA:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.A(s)}}}}
D.hf.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.hg.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.Q.prototype={}
D.an.prototype={}
D.ao.prototype={}
D.x.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.de.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.de))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.dA.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dA))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.hw.prototype={
hk:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
hg:function(a){this.c=a.b
this.d.L(0,a.a)
return!1}}
X.cl.prototype={}
X.hA.prototype={
aT:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.u()
s=b.b
r=o.ch
if(typeof s!=="number")return s.u()
q=new V.a3(m.a+l*k,m.b+s*r)
r=o.a.gaK()
p=new X.bE(a,V.aJ(),o.x,r,q)
p.b=!0
o.z=new P.a6(n,!1)
o.x=q
return p},
c9:function(a,b){this.r=a.a
return!1},
b3:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.dB()
if(typeof s!=="number")return s.ae()
this.r=(s&~r)>>>0
return!1},
b2:function(a,b){var s=this.d
if(s==null)return!1
s.A(this.aT(a,b))
return!0},
hl:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaK()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.u()
o=a.b
n=m.cy
if(typeof o!=="number")return o.u()
r=new X.bF(new V.a_(q*p,o*n),s,r)
r.b=!0
l.A(r)
return!0},
eM:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cl(c,p.a.gaK(),b)
q.b=!0
r.A(q)
p.y=new P.a6(s,!1)
p.x=V.aJ()}}
X.a8.prototype={
t:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.a8))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bE.prototype={}
X.hW.prototype={
bD:function(a,b,c){var s=this,r=new P.a6(Date.now(),!1),q=s.a.gaK(),p=new X.bE(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
c9:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.A(this.bD(a,b,!0))
return!0},
b3:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.dB()
if(typeof r!=="number")return r.ae()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.A(s.bD(a,b,!0))
return!0},
b2:function(a,b){var s=this.d
if(s==null)return!1
s.A(this.bD(a,b,!1))
return!0},
hm:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaK()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.u()
p=a.b
o=n.ch
if(typeof p!=="number")return p.u()
s=new X.bF(new V.a_(r*q,p*o),s,b)
s.b=!0
m.A(s)
return!0},
gd6:function(){var s=this.b
return s==null?this.b=D.B():s},
gci:function(){var s=this.c
return s==null?this.c=D.B():s},
gdk:function(){var s=this.d
return s==null?this.d=D.B():s}}
X.bF.prototype={}
X.dY.prototype={}
X.cy.prototype={}
X.iB.prototype={
aT:function(a,b){var s=this,r=new P.a6(Date.now(),!1),q=a.length>0?a[0]:V.aJ(),p=s.a.gaK(),o=new X.cy(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
hj:function(a){var s=this.b
if(s==null)return!1
s.A(this.aT(a,!0))
return!0},
hh:function(a){var s=this.c
if(s==null)return!1
s.A(this.aT(a,!0))
return!0},
hi:function(a){var s=this.d
if(s==null)return!1
s.A(this.aT(a,!1))
return!0}}
X.eD.prototype={
gaK:function(){var s=this.a,r=C.f.gd1(s).c
r.toString
s=C.f.gd1(s).d
s.toString
return V.kU(0,0,r,s)},
cD:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.dA(s,new X.a8(r,a.altKey,a.shiftKey))},
aI:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.a8(r,a.altKey,a.shiftKey)},
bP:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.a8(r,a.altKey,a.shiftKey)},
ar:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.a_()
if(typeof o!=="number")return H.p(o)
s=r.top
if(typeof p!=="number")return p.a_()
if(typeof s!=="number")return H.p(s)
return new V.a3(q-o,p-s)},
aU:function(a){return new V.a_(a.movementX,a.movementY)},
bN:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=[]
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
o=C.d.af(p.pageX)
C.d.af(p.pageY)
n=k.left
if(typeof n!=="number")return H.p(n)
C.d.af(p.pageX)
m=C.d.af(p.pageY)
l=k.top
if(typeof l!=="number")return H.p(l)
j.push(new V.a3(o-n,m-l))}return j},
ao:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.de(s,new X.a8(r,a.altKey,a.shiftKey))},
bE:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.a_()
if(typeof n!=="number")return H.p(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.a_()
if(typeof p!=="number")return H.p(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.p(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.p(p)
p=r<p}else p=!1
return p},
eG:function(a){this.f=!0},
eu:function(a){this.f=!1},
eA:function(a){if(this.f&&this.bE(a))a.preventDefault()},
eK:function(a){var s
if(!this.f)return
s=this.cD(a)
this.b.hk(s)},
eI:function(a){var s
if(!this.f)return
s=this.cD(a)
this.b.hg(s)},
eO:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aI(a)
if(p.x){s=p.ao(a)
r=p.aU(a)
if(p.d.c9(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.ao(a)
q=p.ar(a)
if(p.c.c9(s,q))a.preventDefault()},
eS:function(a){var s,r,q,p=this
p.aI(a)
s=p.ao(a)
if(p.x){r=p.aU(a)
if(p.d.b3(s,r))a.preventDefault()
return}if(p.r)return
q=p.ar(a)
if(p.c.b3(s,q))a.preventDefault()},
eE:function(a){var s,r,q,p=this
if(!p.bE(a)){p.aI(a)
s=p.ao(a)
if(p.x){r=p.aU(a)
if(p.d.b3(s,r))a.preventDefault()
return}if(p.r)return
q=p.ar(a)
if(p.c.b3(s,q))a.preventDefault()}},
eQ:function(a){var s,r,q,p=this
p.aI(a)
s=p.ao(a)
if(p.x){r=p.aU(a)
if(p.d.b2(s,r))a.preventDefault()
return}if(p.r)return
q=p.ar(a)
if(p.c.b2(s,q))a.preventDefault()},
eC:function(a){var s,r,q,p=this
if(!p.bE(a)){p.aI(a)
s=p.ao(a)
if(p.x){r=p.aU(a)
if(p.d.b2(s,r))a.preventDefault()
return}if(p.r)return
q=p.ar(a)
if(p.c.b2(s,q))a.preventDefault()}},
eU:function(a){var s,r,q=this
q.aI(a)
s=new V.a_((a&&C.x).gfU(a),C.x.gfV(a)).u(0,q.Q)
if(q.x){if(q.d.hl(s))a.preventDefault()
return}if(q.r)return
r=q.ar(a)
if(q.c.hm(s,r))a.preventDefault()},
eW:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.ao(q.y)
r=q.ar(q.y)
q.d.eM(s,r,p)}},
fb:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bP(a)
s=r.bN(a)
if(r.e.hj(s))a.preventDefault()},
f7:function(a){var s
this.bP(a)
s=this.bN(a)
if(this.e.hh(s))a.preventDefault()},
f9:function(a){var s
this.bP(a)
s=this.bN(a)
if(this.e.hi(s))a.preventDefault()}}
D.bw.prototype={
an:function(a){var s=this.r
if(s!=null)s.A(a)},
dS:function(){return this.an(null)},
$iaq:1}
D.aq.prototype={}
D.ch.prototype={
an:function(a){var s=this.y
if(s!=null)s.A(a)},
cH:function(a){var s=this.z
if(s!=null)s.A(a)},
eL:function(){return this.cH(null)},
eY:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.m)(a),++r){q=a[r]
if(q==null||this.e5(q))return!1}return!0},
en:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gcG(),q=0;q<b.length;b.length===s||(0,H.m)(b),++q){p=b[q]
if(p instanceof D.bw)this.f.push(p)
o=p.r
if(o==null){o=new D.by()
o.d=0
p.r=o}n=o.a;(n==null?o.a=[]:n).push(r)}s=new D.an()
s.b=!0
this.an(s)},
f1:function(a,b){var s,r,q
for(s=b.gK(b),r=this.gcG();s.q();){q=s.gC(s)
C.a.L(this.e,q)
q.gp().L(0,r)}s=new D.ao()
s.b=!0
this.an(s)},
e5:function(a){var s=C.a.B(this.f,a)
return s}}
V.O.prototype={
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.O))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.aF.prototype={
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aF))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+", "+V.D(s.d,3,0)+"]"}}
V.hd.prototype={}
V.dH.prototype={
a5:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dH))return!1
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
a5:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
c4:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.A().toString
if(Math.abs(b3-0)<1e-9)return V.bD()
s=1/b3
r=-l
q=-a2
return V.au((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
u:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.au(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bq:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.y(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
b6:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.M(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bC))return!1
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
i:function(a){return this.N()},
G:function(a){var s,r,q,p,o,n=this,m=V.bY([n.a,n.e,n.y,n.cx],3,0),l=V.bY([n.b,n.f,n.z,n.cy],3,0),k=V.bY([n.c,n.r,n.Q,n.db],3,0),j=V.bY([n.d,n.x,n.ch,n.dx],3,0),i=m.length
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
N:function(){return this.G("")}}
V.a3.prototype={
Y:function(a){return new V.a_(a.a-this.a,a.b-this.b)},
t:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.M.prototype={
v:function(a,b){return new V.M(this.a+b.a,this.b+b.b,this.c+b.c)},
a_:function(a,b){return new V.M(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.M(this.a*b,this.b*b,this.c*b)},
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.M))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.bf.prototype={
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bf))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+", "+V.D(s.d,3,0)+"]"}}
V.e0.prototype={
ga7:function(){var s=this.c,r=this.d
return s>r?r:s},
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.e0))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+", "+V.D(s.d,3,0)+"]"}}
V.a_.prototype={
c5:function(a){return Math.sqrt(this.a2(this))},
a2:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.u()
if(typeof p!=="number")return H.p(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.p(r)
return q*p+s*r},
u:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.u()
if(typeof b!=="number")return H.p(b)
s=this.b
if(typeof s!=="number")return s.u()
return new V.a_(r*b,s*b)},
U:function(a,b){var s,r
$.A().toString
if(Math.abs(b-0)<1e-9){s=$.l4
return s==null?$.l4=new V.a_(0,0):s}s=this.a
if(typeof s!=="number")return s.U()
r=this.b
if(typeof r!=="number")return r.U()
return new V.a_(s/b,r/b)},
t:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
s=b.a
r=this.a
$.A().toString
if(typeof s!=="number")return s.a_()
if(typeof r!=="number")return H.p(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.a_()
if(typeof r!=="number")return H.p(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.y.prototype={
c5:function(a){return Math.sqrt(this.a2(this))},
a2:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
E:function(){var s=this,r=Math.sqrt(s.a2(s))
if(r===1)return s
return s.U(0,r)},
at:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.y(s*r-q*p,q*o-n*r,n*p-s*o)},
v:function(a,b){return new V.y(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a){return new V.y(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.y(this.a*b,this.b*b,this.c*b)},
U:function(a,b){$.A().toString
if(Math.abs(b-0)<1e-9)return V.cC()
return new V.y(this.a/b,this.b/b,this.c/b)},
dj:function(){$.A().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.y))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
U.fZ.prototype={
bx:function(a){var s=V.oC(a,this.c,this.b)
return s},
gp:function(){var s=this.y
return s==null?this.y=D.B():s},
J:function(a){var s=this.y
if(s!=null)s.A(a)},
scj:function(a,b){},
sc6:function(a){var s,r=this,q=r.b
$.A().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bx(s)}q=new D.x("maximumLocation",q,r.b)
q.b=!0
r.J(q)}},
sc8:function(a){var s,r=this,q=r.c
$.A().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bx(s)}q=new D.x("minimumLocation",q,r.c)
q.b=!0
r.J(q)}},
sa6:function(a,b){var s,r=this
b=r.bx(b)
s=r.d
$.A().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.x("location",s,b)
s.b=!0
r.J(s)}},
sc7:function(a){var s,r,q=this,p=q.e
$.A().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.x("maximumVelocity",p,a)
p.b=!0
q.J(p)}},
sO:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.A().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.x("velocity",r,a)
r.b=!0
s.J(r)}},
sbV:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.A().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.x("dampening",s,a)
s.b=!0
this.J(s)}},
ag:function(a,b){var s,r,q,p=this,o=p.f
$.A().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa6(0,p.d+s*b)
o=p.x
$.A().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sO(s)}}}
U.c2.prototype={
gp:function(){var s=this.b
return s==null?this.b=D.B():s},
aO:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c2))return!1
return J.F(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.bz.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.B():s},
J:function(a){var s=this.e
if(s!=null)s.A(a)},
a3:function(){return this.J(null)},
el:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaH(),q=0;q<b.length;b.length===s||(0,H.m)(b),++q){p=b[q]
if(p!=null){o=p.gp()
n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.an()
s.b=!0
this.J(s)},
f_:function(a,b){var s,r
for(s=b.gK(b),r=this.gaH();s.q();)s.gC(s).gp().L(0,r)
s=new D.ao()
s.b=!0
this.J(s)},
aO:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.aa()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.U(p,p.length),s=null;p.q();){o=p.d
if(o!=null){r=o.aO(0,b,c)
if(r!=null)s=s==null?r:r.u(0,s)}}q.f=s==null?V.bD():s
p=q.e
if(p!=null)p.aA(0)}return q.f},
t:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bz))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.e(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.e(p,r)
if(!J.F(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iS:1}
U.S.prototype={}
U.cz.prototype={
gp:function(){var s=this.cy
return s==null?this.cy=D.B():s},
J:function(a){var s=this.cy
if(s!=null)s.A(a)},
a3:function(){return this.J(null)},
aW:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.c.gd6().n(0,s.gbF())
s.a.c.gdk().n(0,s.gbH())
s.a.c.gci().n(0,s.gbJ())
return!0},
bG:function(a){var s=this
if(!J.F(s.c,s.a.b.c))return
s.x=s.y=!0
s.z=s.b.d},
bI:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.y)return
if(l.x){s=a.y.Y(a.d)
s=s.a2(s)
r=l.r
if(typeof r!=="number")return H.p(r)
if(s<r)return
l.x=!1}if(l.d){s=a.c
s=a.y.Y(a.d).u(0,2).U(0,s.ga7())
l.Q=s
r=l.b
s=s.a
if(typeof s!=="number")return s.u()
q=l.e
if(typeof q!=="number")return H.p(q)
r.sO(s*10*q)}else{s=a.c
r=a.y
q=a.d
p=r.Y(q).u(0,2).U(0,s.ga7())
r=l.b
o=p.a
if(typeof o!=="number")return o.M()
n=l.e
if(typeof n!=="number")return H.p(n)
m=l.z
if(typeof m!=="number")return H.p(m)
r.sa6(0,-o*n+m)
l.b.sO(0)
l.Q=a.z.Y(q).u(0,2).U(0,s.ga7())}l.a3()},
bK:function(a){var s,r,q,p=this
if(!p.y)return
p.y=!1
if(p.x)return
s=p.Q
if(s.a2(s)>0.0001){s=p.b
r=p.Q.a
if(typeof r!=="number")return r.u()
q=p.e
if(typeof q!=="number")return H.p(q)
s.sO(r*10*q)
p.a3()}},
aO:function(a,b,c){var s,r,q,p=this,o=p.ch,n=b.e
if(typeof o!=="number")return o.aa()
if(o<n){p.ch=n
s=b.y
p.b.ag(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
p.cx=V.au(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return p.cx},
$iS:1}
U.cA.prototype={
gp:function(){var s=this.fx
return s==null?this.fx=D.B():s},
J:function(a){var s=this.fx
if(s!=null)s.A(a)},
a3:function(){return this.J(null)},
aW:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.gd6().n(0,q.gbF())
q.a.c.gdk().n(0,q.gbH())
q.a.c.gci().n(0,q.gbJ())
s=q.a.d
r=s.f
s=r==null?s.f=D.B():r
s.n(0,q.ged())
s=q.a.d
r=s.d
s=r==null?s.d=D.B():r
s.n(0,q.gef())
s=q.a.e
r=s.b
s=r==null?s.b=D.B():r
s.n(0,q.gfD())
s=q.a.e
r=s.d
s=r==null?s.d=D.B():r
s.n(0,q.gfB())
s=q.a.e
r=s.c
s=r==null?s.c=D.B():r
s.n(0,q.gfz())
return!0},
aj:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.M()
s=-s}if(this.r){if(typeof r!=="number")return r.M()
r=-r}return new V.a_(s,r)},
bG:function(a){var s=this
t.c.a(a)
if(!J.F(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bI:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.cx)return
if(l.ch){s=a.y.Y(a.d)
s=s.a2(s)
r=l.Q
if(typeof r!=="number")return H.p(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.aj(a.y.Y(a.d).u(0,2).U(0,s.ga7()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.M()
q=l.y
if(typeof q!=="number")return H.p(q)
r.sO(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.M()
r=l.x
if(typeof r!=="number")return H.p(r)
q.sO(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.aj(r.Y(q).u(0,2).U(0,s.ga7()))
r=l.c
o=p.a
if(typeof o!=="number")return o.M()
n=l.y
if(typeof n!=="number")return H.p(n)
m=l.cy
if(typeof m!=="number")return H.p(m)
r.sa6(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.M()
o=l.x
if(typeof o!=="number")return H.p(o)
r=l.db
if(typeof r!=="number")return H.p(r)
m.sa6(0,-n*o+r)
l.b.sO(0)
l.c.sO(0)
l.dx=l.aj(a.z.Y(q).u(0,2).U(0,s.ga7()))}l.a3()},
bK:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a2(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.M()
q=p.y
if(typeof q!=="number")return H.p(q)
s.sO(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.M()
s=p.x
if(typeof s!=="number")return H.p(s)
q.sO(-r*10*s)
p.a3()}},
ee:function(a){var s=this
if(t.cj.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eg:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!J.F(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.aj(r.Y(q).u(0,2).U(0,s.ga7()))
r=l.c
o=p.a
if(typeof o!=="number")return o.M()
n=l.y
if(typeof n!=="number")return H.p(n)
m=l.cy
if(typeof m!=="number")return H.p(m)
r.sa6(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.M()
o=l.x
if(typeof o!=="number")return H.p(o)
r=l.db
if(typeof r!=="number")return H.p(r)
m.sa6(0,-n*o+r)
l.b.sO(0)
l.c.sO(0)
l.dx=l.aj(a.z.Y(q).u(0,2).U(0,s.ga7()))
l.a3()},
fE:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fC:function(a){var s,r,q,p,o,n,m,l=this
t.m.a(a)
if(!l.cx)return
if(l.ch){s=a.y.Y(a.d)
s=s.a2(s)
r=l.Q
if(typeof r!=="number")return H.p(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.aj(a.y.Y(a.d).u(0,2).U(0,s.ga7()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.M()
q=l.y
if(typeof q!=="number")return H.p(q)
r.sO(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.M()
r=l.x
if(typeof r!=="number")return H.p(r)
q.sO(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.aj(r.Y(q).u(0,2).U(0,s.ga7()))
r=l.c
o=p.a
if(typeof o!=="number")return o.M()
n=l.y
if(typeof n!=="number")return H.p(n)
m=l.cy
if(typeof m!=="number")return H.p(m)
r.sa6(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.M()
o=l.x
if(typeof o!=="number")return H.p(o)
r=l.db
if(typeof r!=="number")return H.p(r)
m.sa6(0,-n*o+r)
l.b.sO(0)
l.c.sO(0)
l.dx=l.aj(a.z.Y(q).u(0,2).U(0,s.ga7()))}l.a3()},
fA:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a2(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.M()
q=p.y
if(typeof q!=="number")return H.p(q)
s.sO(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.M()
s=p.x
if(typeof s!=="number")return H.p(s)
q.sO(-r*10*s)
p.a3()}},
aO:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(typeof o!=="number")return o.aa()
if(o<n){p.dy=n
s=b.y
p.c.ag(0,s)
p.b.ag(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
o=V.au(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
n=p.c.d
r=Math.cos(n)
q=Math.sin(n)
p.fr=o.u(0,V.au(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iS:1}
U.cB.prototype={
gp:function(){var s=this.r
return s==null?this.r=D.B():s},
J:function(a){var s=this.r
if(s!=null)s.A(a)},
aW:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.B():r
r=p.gei()
s.n(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.B():q).n(0,r)
return!0},
ej:function(a){var s,r,q,p,o=this
if(!J.F(o.b,o.a.b.c))return
t.F.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.u()
p=s+r*q
if(s!==p){o.d=p
s=new D.x("zoom",s,p)
s.b=!0
o.J(s)}},
aO:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.au(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$iS:1}
M.c1.prototype={
gp:function(){var s=this.r
return s==null?this.r=D.B():s},
T:function(a){var s=this.r
if(s!=null)s.A(a)},
aS:function(){return this.T(null)},
f3:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gS(),q=0;q<b.length;b.length===s||(0,H.m)(b),++q){p=b[q]
if(p!=null){o=p.gp()
n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.an()
s.b=!0
this.T(s)},
f5:function(a,b){var s,r
for(s=b.gK(b),r=this.gS();s.q();)s.gC(s).gp().L(0,r)
s=new D.ao()
s.b=!0
this.T(s)},
a9:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.U(s,s.length);s.q();){r=s.d
if(r!=null)r.a9(a)}q.f=!1},
$iad:1}
M.c3.prototype={
gp:function(){var s=this.r
return s==null?this.r=D.B():s},
T:function(a){var s=this.r
if(s!=null)s.A(a)},
aS:function(){return this.T(null)},
saX:function(a){var s,r,q=this
if(a==null)a=new X.hr()
s=q.b
if(s!==a){if(s!=null)s.gp().L(0,q.gS())
r=q.b
q.b=a
a.gp().n(0,q.gS())
s=new D.x("camera",r,q.b)
s.b=!0
q.T(s)}},
sb4:function(a,b){var s,r,q=this
if(b==null)b=X.jS(null)
s=q.c
if(s!==b){if(s!=null)s.gp().L(0,q.gS())
r=q.c
q.c=b
b.gp().n(0,q.gS())
s=new D.x("target",r,q.c)
s.b=!0
q.T(s)}},
sb5:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gp().L(0,r.gS())
s=r.d
r.d=a
if(a!=null)a.gp().n(0,r.gS())
q=new D.x("technique",s,r.d)
q.b=!0
r.T(q)}},
a9:function(a){var s=this
a.cb(s.d)
s.c.V(a)
s.b.V(a)
s.e.ag(0,a)
s.e.a9(a)
s.b.aN(a)
s.c.toString
a.ca()},
$iad:1}
M.ca.prototype={
T:function(a){var s=this.y
if(s!=null)s.A(a)},
aS:function(){return this.T(null)},
ew:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gS(),q=0;q<b.length;b.length===s||(0,H.m)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.by()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.an()
s.b=!0
this.T(s)},
ey:function(a,b){var s,r
for(s=b.gK(b),r=this.gS();s.q();)s.gC(s).gp().L(0,r)
s=new D.ao()
s.b=!0
this.T(s)},
saX:function(a){var s,r,q=this
if(a==null)a=X.kN(null)
s=q.b
if(s!==a){if(s!=null)s.gp().L(0,q.gS())
r=q.b
q.b=a
a.gp().n(0,q.gS())
s=new D.x("camera",r,q.b)
s.b=!0
q.T(s)}},
sb4:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gp().L(0,r.gS())
s=r.c
r.c=b
b.gp().n(0,r.gS())
q=new D.x("target",s,r.c)
q.b=!0
r.T(q)}},
sb5:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gp().L(0,r.gS())
s=r.d
r.d=a
if(a!=null)a.gp().n(0,r.gS())
q=new D.x("technique",s,r.d)
q.b=!0
r.T(q)}},
gp:function(){var s=this.y
return s==null?this.y=D.B():s},
a9:function(a){var s,r=this
a.cb(r.d)
r.c.V(a)
r.b.V(a)
s=r.d
if(s!=null)s.ag(0,a)
for(s=r.e.a,s=new J.U(s,s.length);s.q();)s.d.ag(0,a)
for(s=r.e.a,s=new J.U(s,s.length);s.q();)s.d.a9(a)
r.b.toString
a.cy.ay()
a.db.ay()
r.c.toString
a.ca()},
$iad:1}
M.ad.prototype={}
A.fP.prototype={}
A.fQ.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
h0:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
d4:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.V.prototype={
gah:function(a){var s=this.a?1:0
return s|0|0},
i:function(a){var s=this.a?1:0
return""+(s|0|0)},
t:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.V))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.hC.prototype={
dM:function(c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2="Required uniform value, ",c3=", was not defined or used in shader.",c4="uniform mat4 objMat;\n"
c0.z=c5
s=new P.aM("")
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
A.nO(c5,s)
A.nQ(c5,s)
A.nP(c5,s)
A.nS(c5,s)
A.nT(c5,s)
A.nR(c5,s)
A.nU(c5,s)
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
c0.dg(0,q.charCodeAt(0)==0?q:q,A.nN(c0.z))
c0.Q=c0.x.h(0,"posAttr")
c0.cx=c0.x.h(0,"normAttr")
c0.ch=c0.x.h(0,"binmAttr")
c0.cy=c0.x.h(0,"txt2DAttr")
c0.db=c0.x.h(0,"txtCubeAttr")
c0.dx=c0.x.h(0,"bendAttr")
if(c5.dy)c0.id=t.q.a(c0.y.P(0,"invViewMat"))
if(r)c0.dy=t.q.a(c0.y.P(0,"objMat"))
if(p)c0.fr=t.q.a(c0.y.P(0,"viewObjMat"))
r=t.q
c0.fy=r.a(c0.y.P(0,"projViewObjMat"))
if(c5.go)c0.fx=r.a(c0.y.P(0,"viewMat"))
if(c5.x1)c0.k1=t.O.a(c0.y.P(0,"txt2DMat"))
if(c5.x2)c0.k2=r.a(c0.y.P(0,"txtCubeMat"))
if(c5.y1)c0.k3=r.a(c0.y.P(0,"colorMat"))
c0.r1=[]
q=c5.bh
if(q>0){c0.k4=c0.y.P(0,"bendMatCount")
for(l=0;l<q;++l){p=c0.r1
o=c0.y
n="bendValues["+l+"].mat"
k=o.h(0,n)
if(k==null)H.q(P.o(c2+n+c3))
p.push(r.a(k))}}if(c5.a.a)c0.r2=t.r.a(c0.y.P(0,"emissionClr"))
if(c5.b.a)c0.x1=t.r.a(c0.y.P(0,"ambientClr"))
if(c5.c.a)c0.y2=t.r.a(c0.y.P(0,"diffuseClr"))
if(c5.d.a)c0.bi=t.r.a(c0.y.P(0,"invDiffuseClr"))
r=c5.e.a
if(!r)q=!1
else q=!0
if(q){c0.d9=t.n.a(c0.y.P(0,"shininess"))
if(r)c0.d8=t.r.a(c0.y.P(0,"specularClr"))}if(c5.db){c0.da=t.Q.a(c0.y.P(0,"envSampler"))
if(c5.r.a)c0.dc=t.r.a(c0.y.P(0,"reflectClr"))
r=c5.x.a
if(!r)q=!1
else q=!0
if(q){c0.dd=t.n.a(c0.y.P(0,"refraction"))
if(r)c0.de=t.r.a(c0.y.P(0,"refractClr"))}}if(c5.y.a)c0.df=t.n.a(c0.y.P(0,"alpha"))
if(c5.k1){r=c5.z
q=r.length
if(q!==0){c0.bW=new H.v(t.J)
c0.bX=new H.v(t.L)
for(p=t.r,o=t.n,j=0;j<r.length;r.length===q||(0,H.m)(r),++j){i=r[j]
h=i.a
g="barLight"+H.d(h)
f=[]
for(n=i.b,l=0;l<n;++l){m=c0.y
e=g+"s["+l+"].startPnt"
k=m.h(0,e)
if(k==null)H.q(P.o(c2+e+c3))
p.a(k)
m=c0.y
e=g+"s["+l+"].endPnt"
d=m.h(0,e)
if(d==null)H.q(P.o(c2+e+c3))
p.a(d)
m=c0.y
e=g+"s["+l+"].color"
c=m.h(0,e)
if(c==null)H.q(P.o(c2+e+c3))
p.a(c)
if(typeof h!=="number")return h.ae()
if((h&4)!==0){m=c0.y
e=g+"s["+l+"].att0"
b=m.h(0,e)
if(b==null)H.q(P.o(c2+e+c3))
o.a(b)
m=c0.y
e=g+"s["+l+"].att1"
a=m.h(0,e)
if(a==null)H.q(P.o(c2+e+c3))
o.a(a)
m=c0.y
e=g+"s["+l+"].att2"
a0=m.h(0,e)
if(a0==null)H.q(P.o(c2+e+c3))
o.a(a0)
a1=a0
a2=a
a3=b}else{a1=c1
a2=a1
a3=a2}f.push(new A.er(k,d,c,a3,a2,a1))}c0.bX.m(0,h,f)
n=c0.bW
m=c0.y
e=g+"Count"
k=m.h(0,e)
if(k==null)H.q(P.o(c2+e+c3))
n.m(0,h,k)}}r=c5.Q
q=r.length
if(q!==0){c0.bY=new H.v(t.J)
c0.bZ=new H.v(t.M)
for(p=t.r,o=t.u,j=0;j<r.length;r.length===q||(0,H.m)(r),++j){i=r[j]
h=i.a
g="dirLight"+H.d(h)
f=[]
for(n=i.b,l=0;l<n;++l){if(typeof h!=="number")return h.ae()
m=(h&1)!==0
if(m){e=c0.y
a4=g+"s["+l+"].objUp"
k=e.h(0,a4)
if(k==null)H.q(P.o(c2+a4+c3))
p.a(k)
e=c0.y
a4=g+"s["+l+"].objRight"
d=e.h(0,a4)
if(d==null)H.q(P.o(c2+a4+c3))
p.a(d)
e=c0.y
a4=g+"s["+l+"].objDir"
c=e.h(0,a4)
if(c==null)H.q(P.o(c2+a4+c3))
p.a(c)
a5=c
a6=d
a7=k}else{a5=c1
a6=a5
a7=a6}e=c0.y
a4=g+"s["+l+"].viewDir"
k=e.h(0,a4)
if(k==null)H.q(P.o(c2+a4+c3))
p.a(k)
e=c0.y
a4=g+"s["+l+"].color"
d=e.h(0,a4)
if(d==null)H.q(P.o(c2+a4+c3))
p.a(d)
if(m){m=c0.y
e=g+"sTexture2D"+l
c=m.h(0,e)
if(c==null)H.q(P.o(c2+e+c3))
o.a(c)
a8=c}else a8=c1
f.push(new A.es(a7,a6,a5,k,d,a8))}c0.bZ.m(0,h,f)
n=c0.bY
m=c0.y
e=g+"Count"
k=m.h(0,e)
if(k==null)H.q(P.o(c2+e+c3))
n.m(0,h,k)}}r=c5.ch
q=r.length
if(q!==0){c0.c_=new H.v(t.J)
c0.c0=new H.v(t.W)
for(p=t.r,o=t.O,n=t.Q,m=t.y,e=t.n,j=0;j<r.length;r.length===q||(0,H.m)(r),++j){i=r[j]
h=i.a
g="pointLight"+H.d(h)
f=[]
for(a4=i.b,l=0;l<a4;++l){a9=c0.y
b0=g+"s["+l+"].point"
k=a9.h(0,b0)
if(k==null)H.q(P.o(c2+b0+c3))
p.a(k)
a9=c0.y
b0=g+"s["+l+"].viewPnt"
d=a9.h(0,b0)
if(d==null)H.q(P.o(c2+b0+c3))
p.a(d)
a9=c0.y
b0=g+"s["+l+"].color"
c=a9.h(0,b0)
if(c==null)H.q(P.o(c2+b0+c3))
p.a(c)
if(typeof h!=="number")return h.ae()
if((h&3)!==0){a9=c0.y
b0=g+"s["+l+"].invViewRotMat"
b=a9.h(0,b0)
if(b==null)H.q(P.o(c2+b0+c3))
o.a(b)
b1=b}else b1=c1
if((h&1)!==0){a9=c0.y
b0=g+"sTextureCube"+l
b=a9.h(0,b0)
if(b==null)H.q(P.o(c2+b0+c3))
n.a(b)
a8=b}else a8=c1
if((h&2)!==0){a9=c0.y
b0=g+"sShadowCube"+l
b=a9.h(0,b0)
if(b==null)H.q(P.o(c2+b0+c3))
n.a(b)
a9=c0.y
b0=g+"s["+l+"].shadowAdj"
a=a9.h(0,b0)
if(a==null)H.q(P.o(c2+b0+c3))
m.a(a)
b2=b
b3=a}else{b2=c1
b3=b2}if((h&4)!==0){a9=c0.y
b0=g+"s["+l+"].att0"
b=a9.h(0,b0)
if(b==null)H.q(P.o(c2+b0+c3))
e.a(b)
a9=c0.y
b0=g+"s["+l+"].att1"
a=a9.h(0,b0)
if(a==null)H.q(P.o(c2+b0+c3))
e.a(a)
a9=c0.y
b0=g+"s["+l+"].att2"
a0=a9.h(0,b0)
if(a0==null)H.q(P.o(c2+b0+c3))
e.a(a0)
a1=a0
a2=a
a3=b}else{a1=c1
a2=a1
a3=a2}f.push(new A.ev(k,d,b1,c,a8,b2,b3,a3,a2,a1))}c0.c0.m(0,h,f)
a4=c0.c_
a9=c0.y
b0=g+"Count"
k=a9.h(0,b0)
if(k==null)H.q(P.o(c2+b0+c3))
a4.m(0,h,k)}}r=c5.cx
q=r.length
if(q!==0){c0.c1=new H.v(t.J)
c0.c2=new H.v(t.d)
for(p=t.r,o=t.n,n=t.y,m=t.u,j=0;j<r.length;r.length===q||(0,H.m)(r),++j){i=r[j]
h=i.a
g="spotLight"+H.d(h)
f=[]
for(e=i.b,l=0;l<e;++l){a4=c0.y
a9=g+"s["+l+"].objPnt"
k=a4.h(0,a9)
if(k==null)H.q(P.o(c2+a9+c3))
p.a(k)
a4=c0.y
a9=g+"s["+l+"].objDir"
d=a4.h(0,a9)
if(d==null)H.q(P.o(c2+a9+c3))
p.a(d)
a4=c0.y
a9=g+"s["+l+"].viewPnt"
c=a4.h(0,a9)
if(c==null)H.q(P.o(c2+a9+c3))
p.a(c)
a4=c0.y
a9=g+"s["+l+"].color"
b=a4.h(0,a9)
if(b==null)H.q(P.o(c2+a9+c3))
p.a(b)
if(typeof h!=="number")return h.ae()
if((h&3)!==0){a4=c0.y
a9=g+"s["+l+"].objUp"
a=a4.h(0,a9)
if(a==null)H.q(P.o(c2+a9+c3))
p.a(a)
a4=c0.y
a9=g+"s["+l+"].objRight"
a0=a4.h(0,a9)
if(a0==null)H.q(P.o(c2+a9+c3))
p.a(a0)
a4=c0.y
a9=g+"s["+l+"].tuScalar"
b4=a4.h(0,a9)
if(b4==null)H.q(P.o(c2+a9+c3))
o.a(b4)
a4=c0.y
a9=g+"s["+l+"].tvScalar"
b5=a4.h(0,a9)
if(b5==null)H.q(P.o(c2+a9+c3))
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
if(a==null)H.q(P.o(c2+b0+c3))
n.a(a)
b3=a}else b3=c1
if((h&8)!==0){a9=c0.y
b0=g+"s["+l+"].cutoff"
a=a9.h(0,b0)
if(a==null)H.q(P.o(c2+b0+c3))
o.a(a)
a9=c0.y
b0=g+"s["+l+"].coneAngle"
a0=a9.h(0,b0)
if(a0==null)H.q(P.o(c2+b0+c3))
o.a(a0)
b8=a0
b9=a}else{b8=c1
b9=b8}if((h&4)!==0){a9=c0.y
b0=g+"s["+l+"].att0"
a=a9.h(0,b0)
if(a==null)H.q(P.o(c2+b0+c3))
o.a(a)
a9=c0.y
b0=g+"s["+l+"].att1"
a0=a9.h(0,b0)
if(a0==null)H.q(P.o(c2+b0+c3))
o.a(a0)
a9=c0.y
b0=g+"s["+l+"].att2"
b4=a9.h(0,b0)
if(b4==null)H.q(P.o(c2+b0+c3))
o.a(b4)
a1=b4
a2=a0
a3=a}else{a1=c1
a2=a1
a3=a2}if((h&1)!==0){a9=c0.y
b0=g+"sTexture2D"+l
a=a9.h(0,b0)
if(a==null)H.q(P.o(c2+b0+c3))
m.a(a)
a8=a}else a8=c1
if(a4){a4=c0.y
a9=g+"sShadow2D"+l
a=a4.h(0,a9)
if(a==null)H.q(P.o(c2+a9+c3))
m.a(a)
b2=a}else b2=c1
f.push(new A.ey(k,d,c,b,a7,a6,b7,b6,b3,b9,b8,a3,a2,a1,a8,b2))}c0.c2.m(0,h,f)
e=c0.c1
a4=c0.y
a9=g+"Count"
k=a4.h(0,a9)
if(k==null)H.q(P.o(c2+a9+c3))
e.m(0,h,k)}}}},
fo:function(a,b){}}
A.fU.prototype={
i:function(a){return"barLight"+H.d(this.a)}}
A.h4.prototype={
i:function(a){return"dirLight"+H.d(this.a)}}
A.i0.prototype={
i:function(a){return"pointLight"+H.d(this.a)}}
A.il.prototype={
i:function(a){return"spotLight"+H.d(this.a)}}
A.hF.prototype={
i:function(a){return this.aZ}}
A.er.prototype={}
A.es.prototype={}
A.ev.prototype={}
A.ey.prototype={}
A.e4.prototype={
cr:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
dg:function(a,b,c){var s,r,q,p=this
p.c=b
p.d=c
p.e=p.cE(b,35633)
p.f=p.cE(p.d,35632)
s=p.a
r=s.createProgram()
p.r=r
s.attachShader(r,p.e)
s.attachShader(p.r,p.f)
s.linkProgram(p.r)
if(!s.getProgramParameter(p.r,35714)){q=s.getProgramInfoLog(p.r)
s.deleteProgram(p.r)
H.q(P.o("Failed to link shader: "+H.d(q)))}p.ft()
p.fv()},
V:function(a){a.a.useProgram(this.r)
this.x.h0()},
cE:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.c(P.o("Error compiling shader '"+H.d(q)+"': "+H.d(s)))}return q},
ft:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.p(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.fP(n,r.name,q))}p.x=new A.fQ(o)},
fv:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.p(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.fT(r.type,r.size,r.name,q))}p.y=new A.iN(o)},
aF:function(a,b,c){var s=this.a
if(a===1)return new A.eo(s,b,c)
else return A.k3(s,this.r,b,a,c)},
e8:function(a,b,c){var s=this.a
if(a===1)return new A.ew(s,b,c)
else return A.k3(s,this.r,b,a,c)},
e9:function(a,b,c){var s=this.a
if(a===1)return new A.ex(s,b,c)
else return A.k3(s,this.r,b,a,c)},
be:function(a,b){return new P.eU(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
fT:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aF(b,c,d)
case 5121:return s.aF(b,c,d)
case 5122:return s.aF(b,c,d)
case 5123:return s.aF(b,c,d)
case 5124:return s.aF(b,c,d)
case 5125:return s.aF(b,c,d)
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
case 35678:return s.e8(b,c,d)
case 35680:return s.e9(b,c,d)
case 35670:throw H.c(s.be("BOOL",c))
case 35671:throw H.c(s.be("BOOL_VEC2",c))
case 35672:throw H.c(s.be("BOOL_VEC3",c))
case 35673:throw H.c(s.be("BOOL_VEC4",c))
default:throw H.c(P.o("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}}
A.ik.prototype={}
A.iH.prototype={}
A.iN.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
P:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.N()},
N:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.m)(s),++p)q+=s[p].i(0)+"\n"
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
ab:function(a){var s=new Float32Array(H.cY(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.d(this.c)}}
A.eu.prototype={
ab:function(a){var s=new Float32Array(H.cY(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.d(this.c)}}
A.ew.prototype={
i:function(a){return"UniformSampler2D: "+H.d(this.c)}}
A.ex.prototype={
dD:function(a){var s=a==null||a.d<6,r=this.a,q=this.d
if(s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}
F.jI.prototype={
$1:function(a){return new V.M(Math.cos(a),Math.sin(a),0)}}
F.jx.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.kq(l.$1(m),k)
k=J.kq(l.$1(m+3.141592653589793/n.c),k).a_(0,j)
s=new V.y(k.a,k.b,k.c).E()
l=$.l6
if(l==null){l=new V.y(1,0,0)
$.l6=l
r=l}else r=l
q=s.at(!J.F(s,r)?V.l8():r).E()
r=q.at(s).E()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.u(0,l*k)
k=q.u(0,o*k)
k=j.v(0,new V.M(l.a-k.a,l.b-k.b,l.c-k.c))
if(!J.F(a.f,k)){a.f=k
l=a.a
if(l!=null)l.a8()}}}
F.hh.prototype={
aY:function(){var s=this
if(!s.gd5()){C.a.L(s.a.a.d.b,s)
s.a.a.a8()}s.fe()
s.ff()
s.fg()},
fp:function(a){this.a=a
a.d.b.push(this)},
fq:function(a){this.b=a
a.d.c.push(this)},
fs:function(a){this.c=a
a.d.d.push(this)},
fe:function(){var s=this.a
if(s!=null){C.a.L(s.d.b,this)
this.a=null}},
ff:function(){var s=this.b
if(s!=null){C.a.L(s.d.c,this)
this.b=null}},
fg:function(){var s=this.c
if(s!=null){C.a.L(s.d.d,this)
this.c=null}},
gd5:function(){return this.a==null||this.b==null||this.c==null},
e1:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.cC()
if(n!=null)q=q.v(0,n)
if(s!=null)q=q.v(0,s)
if(r!=null)q=q.v(0,r)
if(q.dj())return p
return q.E()},
e3:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.a_(0,n)
q=new V.y(o.a,o.b,o.c).E()
o=r.a_(0,n)
return q.at(new V.y(o.a,o.b,o.c).E()).E()},
bT:function(){var s,r=this
if(r.d!=null)return!0
s=r.e1()
if(s==null){s=r.e3()
if(s==null)return!1}r.d=s
r.a.a.a8()
return!0},
e0:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.cC()
if(n!=null)q=q.v(0,n)
if(s!=null)q=q.v(0,s)
if(r!=null)q=q.v(0,r)
if(q.dj())return p
return q.E()},
e2:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.A().toString
if(Math.abs(p-0)<1e-9){j=b.a_(0,e)
o=new V.y(j.a,j.b,j.c).E()
if(q.a-r.a<0)o=o.M(0)}else{n=(j-s.b)/p
j=b.a_(0,e).u(0,n).v(0,e).a_(0,h)
o=new V.y(j.a,j.b,j.c).E()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.M(0)}j=l.d
if(j!=null){m=j.E()
o=m.at(o).E().at(m).E()}return o},
bR:function(){var s,r=this
if(r.e!=null)return!0
s=r.e0()
if(s==null){s=r.e2()
if(s==null)return!1}r.e=s
r.a.a.a8()
return!0},
gfO:function(a){var s=this
if(J.F(s.a,s.b))return!0
if(J.F(s.b,s.c))return!0
if(J.F(s.c,s.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
G:function(a){var s,r,q=this
if(q.gd5())return a+"disposed"
s=a+C.b.ax(J.af(q.a.e),0)+", "+C.b.ax(J.af(q.b.e),0)+", "+C.b.ax(J.af(q.c.e),0)+" {"
r=q.d
s=r!=null?s+(r.i(0)+", "):s+"-, "
r=q.e
return r!=null?s+(r.i(0)+"}"):s+"-}"},
N:function(){return this.G("")}}
F.hi.prototype={}
F.ij.prototype={
b1:function(a,b,c){var s,r=b.a
r.a.a.w()
r=r.e
s=c.a
s.a.a.w()
if(r==s.e){r=b.b
r.a.a.w()
r=r.e
s=c.b
s.a.a.w()
if(r==s.e){r=b.c
r.a.a.w()
r=r.e
s=c.c
s.a.a.w()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.w()
r=r.e
s=c.b
s.a.a.w()
if(r==s.e){r=b.b
r.a.a.w()
r=r.e
s=c.c
s.a.a.w()
if(r==s.e){r=b.c
r.a.a.w()
r=r.e
s=c.a
s.a.a.w()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.w()
r=r.e
s=c.c
s.a.a.w()
if(r==s.e){r=b.b
r.a.a.w()
r=r.e
s=c.a
s.a.a.w()
if(r==s.e){r=b.c
r.a.a.w()
r=r.e
s=c.b
s.a.a.w()
s=r==s.e
r=s}else r=!1
return r}else return!1}}}}
F.hx.prototype={}
F.iG.prototype={
b1:function(a,b,c){var s,r=b.a
r.a.a.w()
r=r.e
s=c.a
s.a.a.w()
if(r==s.e){r=b.b
r.a.a.w()
r=r.e
s=c.b
s.a.a.w()
return r==s.e}else{r=b.a
r.a.a.w()
r=r.e
s=c.b
s.a.a.w()
if(r==s.e){r=b.b
r.a.a.w()
r=r.e
s=c.a
s.a.a.w()
return r==s.e}else return!1}}}
F.ia.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.B():s},
as:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.as()||!1
if(!r.a.as())s=!1
q=r.e
if(q!=null)q.aA(0)
return s},
h9:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
s=n.a.c.slice(0)
for(;s.length!==0;){r=C.a.gh2(s)
C.a.cc(s,0)
if(r!=null){q=[]
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.e(s,p)
o=s[p]
if(o!=null&&a.b1(0,r,o)){q.push(o)
C.a.cc(s,p)}}if(q.length>1)b.h8(q)}}n.a.w()
n.c.cd()
n.d.cd()
n.b.hq()
n.c.ce(new F.iG())
n.d.ce(new F.ij())
m=n.e
if(m!=null)m.aA(0)},
d_:function(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=34962,a3=a1.a.c.length
a5.toString
s=a5.a
r=(s&$.ak().a)!==0?1:0
if((s&$.aX().a)!==0)++r
if((s&$.aW().a)!==0)++r
if((s&$.bq().a)!==0)++r
if((s&$.br().a)!==0)++r
if((s&$.d5().a)!==0)++r
if((s&$.d6().a)!==0)++r
if((s&$.bZ().a)!==0)++r
if((s&$.aV().a)!==0)++r
q=a5.gcn(a5)
p=q*4
s=a3*q
o=new Array(s)
o.fixed$length=Array
n=new Array(r)
n.fixed$length=Array
for(m=0,l=0;l<r;++l){k=a5.fK(l)
j=k.gcn(k)
n[l]=new Z.fW(k,j,m*4,p)
for(i=0;i<a3;++i){h=a1.a.c
if(i>=h.length)return H.e(h,i)
g=h[i].h7(k)
f=m+i*q
for(h=g.length,e=0;e<h;++e){d=g[e]
if(f<0||f>=s)return H.e(o,f)
o[f]=d;++f}}m+=j}s=a4.a
c=s.createBuffer()
s.bindBuffer(a2,c)
s.bufferData(a2,new Float32Array(H.cY(o)),35044)
s.bindBuffer(a2,null)
b=new Z.c0(new Z.eF(a2,c),n,a5)
b.b=[]
a1.b.toString
if(a1.c.b.length!==0){a=[]
for(l=0;h=a1.c.b,l<h.length;++l){h=h[l].a
h.a.a.w()
a.push(h.e)
h=a1.c.b
if(l>=h.length)return H.e(h,l)
h=h[l].b
h.a.a.w()
a.push(h.e)}a0=Z.l9(s,34963,a)
b.b.push(new Z.dw(1,a.length,a0))}if(a1.d.b.length!==0){a=[]
for(l=0;h=a1.d.b,l<h.length;++l){h=h[l].a
h.a.a.w()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.e(h,l)
h=h[l].b
h.a.a.w()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.e(h,l)
h=h[l].c
h.a.a.w()
a.push(h.e)}a0=Z.l9(s,34963,a)
b.b.push(new Z.dw(4,a.length,a0))}return b},
i:function(a){var s=this,r=[]
if(s.a.c.length!==0){r.push("Vertices:")
r.push(s.a.G("   "))}s.b.toString
if(s.c.b.length!==0){r.push("Lines:")
r.push(s.c.G("   "))}if(s.d.b.length!==0){r.push("Faces:")
r.push(s.d.G("   "))}return C.a.k(r,"\n")},
a8:function(){var s=this.e
if(s!=null)s.A(null)}}
F.ib.prototype={
fH:function(a){var s,r,q,p,o=[],n=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.n(0,n)
s.a.n(0,q)
s.a.n(0,p)
o.push(F.dm(n,q,p))}return o},
fI:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=[]
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
f.push(F.dm(k,j,h))
s.a.n(0,k)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.dm(k,h,g))}else{l.n(0,j)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.dm(j,h,g))
s.a.n(0,j)
s.a.n(0,g)
s.a.n(0,k)
f.push(F.dm(j,g,k))}n=!n}p=!p}return f},
gl:function(a){return this.b.length},
ce:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.e(q,r)
p=q[r]
for(q=p.d,o=q.b.length+q.c.length+q.d.length-1;o>=0;--o){n=p.d.h(0,o)
for(m=o-1;m>=0;--m){l=p.d.h(0,m)
if(a.b1(0,n,l)){n.aY()
break}}}}},
cd:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.gfO(q)
if(r)q.aY()}},
as:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.m)(s),++p)if(!s[p].bT())q=!1
return q},
bS:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.m)(s),++p)if(!s[p].bR())q=!1
return q},
i:function(a){return this.N()},
G:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].G(a))
return C.a.k(p,"\n")},
N:function(){return this.G("")}}
F.ic.prototype={
gl:function(a){return this.b.length},
ce:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.e(q,r)
p=q[r]
for(q=p.c,o=q.b.length+q.c.length-1;o>=0;--o){n=p.c.h(0,o)
for(m=o-1;m>=0;--m){l=p.c.h(0,m)
if(a.b1(0,n,l)){n.aY()
break}}}}},
cd:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=J.F(q.a,q.b)
if(r)q.aY()}},
i:function(a){return this.N()},
G:function(a){var s,r,q=[],p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q.push(r[s].G(a+(""+s+". ")))}return C.a.k(q,"\n")},
N:function(){return this.G("")}}
F.id.prototype={
gl:function(a){return 0},
hq:function(){var s,r
for(s=-1;!1;--s){r=this.b
return H.e(r,s)
r=r[s].gi2()
r=r.gi_(r)
if(r.gl(r).Z(0,1)){r=this.b
return H.e(r,s)
r[s].aY()}}},
i:function(a){return this.N()},
G:function(a){var s,r,q=[]
for(s=this.b,r=0;!1;++r){if(r>=0)return H.e(s,r)
q.push(s[r].G(a))}return C.a.k(q,"\n")},
N:function(){return this.G("")}}
F.iV.prototype={
d2:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.iW(s.cx,p,m,r,q,o,n,a,l)},
h7:function(a){var s,r=this
if(a.t(0,$.ak())){s=r.f
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.t(0,$.aX())){s=r.r
if(s==null)return[0,1,0]
else return[s.a,s.b,s.c]}else if(a.t(0,$.aW())){s=r.x
if(s==null)return[0,0,1]
else return[s.a,s.b,s.c]}else if(a.t(0,$.bq())){s=r.y
if(s==null)return[0,0]
else return[s.a,s.b]}else if(a.t(0,$.br())){s=r.z
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.t(0,$.d5())){s=r.Q
if(s==null)return[1,1,1]
else return[s.a,s.b,s.c]}else if(a.t(0,$.d6())){s=r.Q
if(s==null)return[1,1,1,1]
else return[s.a,s.b,s.c,s.d]}else if(a.t(0,$.bZ()))return[r.ch]
else if(a.t(0,$.aV())){s=r.cx
if(s==null)return[-1,-1,-1,-1]
else return[s.a,s.b,s.c,s.d]}else return[]},
bT:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.cC()
r.d.F(0,new F.j6(q))
r.r=q.a.E()
q=r.a
if(q!=null){q.a8()
q=r.a.e
if(q!=null)q.aA(0)}return!0},
bR:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.cC()
r.d.F(0,new F.j5(q))
r.x=q.a.E()
q=r.a
if(q!=null){q.a8()
q=r.a.e
if(q!=null)q.aA(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
G:function(a){var s,r,q=this,p="-",o=[]
o.push(C.b.ax(J.af(q.e),0))
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
N:function(){return this.G("")}}
F.j6.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.v(0,r)}}}
F.j5.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.v(0,r)}}}
F.iX.prototype={
w:function(){var s,r,q,p
if(this.b){s=this.c
r=s.length
for(q=0,p=0;p<r;++p){if(p>=s.length)return H.e(s,p)
s[p].e=q;++q}this.b=!1}},
n:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.o("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a8()
return!0},
bf:function(a,b,c,d,e,f){var s=F.iW(a,null,b,c,null,d,e,f,0)
this.n(0,s)
return s},
gl:function(a){return this.c.length},
as:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)s[q].bT()
return!0},
bS:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)s[q].bR()
return!0},
fN:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
if(p.z==null){o=p.r.E()
if(!J.F(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.A(null)}}}}return!0},
i:function(a){return this.N()},
G:function(a){var s,r,q,p
this.w()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.m)(r),++p)s.push(r[p].G(a))
return C.a.k(s,"\n")},
N:function(){return this.G("")}}
F.iY.prototype={
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
F:function(a,b){var s=this
C.a.F(s.b,b)
C.a.F(s.c,new F.iZ(s,b))
C.a.F(s.d,new F.j_(s,b))},
i:function(a){return this.N()},
N:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].G(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].G(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].G(""))
return C.a.k(p,"\n")}}
F.iZ.prototype={
$1:function(a){if(!J.F(a.a,this.a))this.b.$1(a)}}
F.j_.prototype={
$1:function(a){var s=this.a
if(!J.F(a.a,s)&&!J.F(a.b,s))this.b.$1(a)}}
F.j0.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.e(r,s)
return r[s]}else{if(b<0)return H.e(r,b)
return r[b]}},
i:function(a){return this.N()},
N:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].G(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].G(""))
return C.a.k(p,"\n")}}
F.j2.prototype={}
F.j1.prototype={
b1:function(a,b,c){return J.F(b.f,c.f)}}
F.j3.prototype={}
F.hZ.prototype={
h8:function(a){var s,r,q,p,o,n,m=V.cC()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)m=new V.y(m.a+q.a,m.b+q.b,m.c+q.c)}m=m.E()
for(s=a.length,q=m==null,r=0;r<a.length;a.length===s||(0,H.m)(a),++r){p=a[r]
o=q?null:m.E()
if(!J.F(p.r,o)){p.r=o
n=p.a
if(n!=null){n=n.e
if(n!=null)n.A(null)}}}return null}}
F.j4.prototype={
gl:function(a){return 0},
i:function(a){return this.N()},
N:function(){var s,r,q=[]
for(s=this.b,r=0;!1;++r){if(r>=0)return H.e(s,r)
q.push(s[r].G(""))}return C.a.k(q,"\n")}}
O.dF.prototype={
gp:function(){var s=this.fr
return s==null?this.fr=D.B():s},
X:function(a){var s=this.fr
if(s!=null)s.A(a)},
bw:function(){return this.X(null)},
cJ:function(a){this.a=null
this.X(a)},
fk:function(){return this.cJ(null)},
ep:function(a,b){var s=new D.an()
s.b=!0
this.X(s)},
er:function(a,b){var s=new D.ao()
s.b=!0
this.X(s)},
cC:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.v(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
o=p.gal()
n=d.h(0,p.gal())
d.m(0,o,n==null?1:n)}m=[]
d.F(0,new O.hJ(f,m))
C.a.aR(m,new O.hK())
l=new H.v(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){o=l.h(0,0)
l.m(0,0,o==null?1:o)}k=[]
l.F(0,new O.hL(f,k))
C.a.aR(k,new O.hM())
j=new H.v(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
o=p.gal()
n=j.h(0,p.gal())
j.m(0,o,n==null?1:n)}i=[]
j.F(0,new O.hN(f,i))
C.a.aR(i,new O.hO())
h=new H.v(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.m)(e),++q){p=e[q]
r=p.gal()
o=h.h(0,p.gal())
h.m(0,r,o==null?1:o)}g=[]
h.F(0,new O.hP(f,g))
C.a.aR(g,new O.hQ())
e=C.c.a0(f.e.a.length+3,4)
f.dy.toString
return A.mu(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
e_:function(a,b){},
ag:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.U(s,s.length);s.q();){r=s.d
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
if(o!=null){r.a=o.bq(q).E()
r.d=o.bq(r.d).E()
r.e=o.bq(r.e).E()}}}},
ds:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cC()
s=b4.fr.h(0,b3.aZ)
if(s==null){s=A.mt(b3,b4.a)
b4.cT(s)}b3=b2.a=s
b5.e=null}r=b3.z
q=r.bi
b3=b5.e
if(!(b3 instanceof Z.c0))b3=b5.e=null
if(b3==null||!b3.d.t(0,q)){b3=r.k4
if(b3)b5.d.as()
p=r.r1
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.d.bS()
o.a.bS()
o=o.e
if(o!=null)o.aA(0)}o=r.rx
if(o){n=b5.d
m=n.e
if(m!=null)++m.d
n.a.fN()
n=n.e
if(n!=null)n.aA(0)}l=b5.d.d_(new Z.eG(b4.a),q)
l.au($.ak()).e=b2.a.Q.c
if(b3)l.au($.aX()).e=b2.a.cx.c
if(p)l.au($.aW()).e=b2.a.ch.c
if(r.r2)l.au($.bq()).e=b2.a.cy.c
if(o)l.au($.br()).e=b2.a.db.c
if(r.ry)l.au($.aV()).e=b2.a.dx.c
b5.e=l}k=[]
b2.a.V(b4)
if(r.fr){b3=b2.a
p=b4.dx
p=p.gW(p)
b3=b3.dy
b3.toString
b3.ab(p.a5(0,!0))}if(r.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.gW(p)
o=b4.dx
o=b4.cx=p.u(0,o.gW(o))
p=o}b3=b3.fr
b3.toString
b3.ab(p.a5(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.gho()
o=b4.dx
o=b4.ch=p.u(0,o.gW(o))
p=o}b3=b3.fy
b3.toString
b3.ab(p.a5(0,!0))
if(r.go){b3=b2.a
p=b4.db
p=p.gW(p)
b3=b3.fx
b3.toString
b3.ab(p.a5(0,!0))}if(r.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.ab(C.h.a5(p,!0))}if(r.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.ab(C.h.a5(p,!0))}if(r.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.ab(C.h.a5(p,!0))}if(r.bh>0){j=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,j)
for(i=0;i<j;++i){b3=b2.a
p=b2.e.a
if(i>=p.length)return H.e(p,i)
p=p[i]
b3=b3.r1
if(i>=b3.length)return H.e(b3,i)
b3=b3[i]
h=new Float32Array(H.cY(p.a5(0,!0)))
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
b3=b3.bi
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=r.e.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.z.ch
p=p.d9
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.z.f
b3=b3.d8
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=r.z
if(b3.length>0){g=new H.v(t.a)
for(p=b2.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.m)(p),++f){e=p[f]
d=e.gal()
c=g.h(0,d)
if(c==null)c=0
g.m(0,d,c+1)
b=J.d7(b2.a.bX.h(0,d),c)
n=e.ghF()
m=$.av
n=n.b6(m==null?$.av=new V.M(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.ghK()
m=$.av
n=n.b6(m==null?$.av=new V.M(0,0,0):m)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaL(e)
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
if(e.gd7()){n=e.gcV()
m=b.e
m.a.uniform1f(m.d,n)
n=e.gcW()
m=b.f
m.a.uniform1f(m.d,n)
n=e.gcX()
m=b.r
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.m)(b3),++f){o=b3[f].a
j=g.h(0,o)
if(j==null)j=0
o=b2.a.bW.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.Q
if(b3.length>0){p=b4.db
a=p.gW(p)
a0=new H.v(t.a)
for(p=b2.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.m)(p),++f){e=p[f]
c=a0.h(0,0)
if(c==null)c=0
a0.m(0,0,c+1)
b=J.d7(b2.a.bZ.h(0,0),c)
n=a.bq(e.a).E()
m=b.e
a1=n.a
a2=n.b
n=n.c
m.a.uniform3f(m.d,a1,a2,n)
n=e.c
a2=b.f
a2.a.uniform3f(a2.d,n.a,n.b,n.c)}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.m)(b3),++f){o=b3[f].a
j=a0.h(0,o)
if(j==null)j=0
o=b2.a.bY.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.ch
if(b3.length>0){p=b4.db
a=p.gW(p)
a3=new H.v(t.a)
for(p=b2.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.m)(p),++f){e=p[f]
d=e.gal()
c=a3.h(0,d)
if(c==null)c=0
a3.m(0,d,c+1)
b=J.d7(b2.a.c0.h(0,d),c)
a4=a.u(0,e.gW(e))
n=e.gW(e)
m=$.av
n=n.b6(m==null?$.av=new V.M(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=$.av
n=a4.b6(n==null?$.av=new V.M(0,0,0):n)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaL(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gaB()
n=a4.c4(0)
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
h=new Float32Array(H.cY(new V.dH(m,a1,a2,a5,a6,a7,a8,a9,n).a5(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,h)
e.gaB()
n=e.gaB()
if(!C.a.B(k,n)){n.sb_(0,k.length)
k.push(n)}n=e.gaB()
m=n.gb0(n)
if(m){m=b.f
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}e.gaQ()
n=e.gdE()
m=b.x
m.toString
a1=n.gfX(n)
a2=n.gfY(n)
a5=n.gfZ()
n=n.gfW()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gaQ()
if(!C.a.B(k,n)){n.sb_(0,k.length)
k.push(n)}n=e.gaQ()
m=n.gb0(n)
if(m){m=b.r
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}if(e.gd7()){n=e.gcV()
m=b.y
m.a.uniform1f(m.d,n)
n=e.gcW()
m=b.z
m.a.uniform1f(m.d,n)
n=e.gcX()
m=b.Q
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.m)(b3),++f){o=b3[f].a
j=a3.h(0,o)
if(j==null)j=0
o=b2.a.c_.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.cx
if(b3.length>0){p=b4.db
a=p.gW(p)
b1=new H.v(t.a)
for(p=b2.dx.x,o=p.length,f=0;f<p.length;p.length===o||(0,H.m)(p),++f){e=p[f]
d=e.gal()
c=b1.h(0,d)
if(c==null)c=0
b1.m(0,d,c+1)
b=J.d7(b2.a.c2.h(0,d),c)
n=e.ghn(e)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.ghI(e).E()
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=a.b6(e.ghn(e))
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaL(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gaB()
n=e.gci()
m=b.f
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gcf(e)
m=b.r
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gi0()
m=b.x
m.a.uniform1f(m.d,n)
n=e.gi1()
m=b.y
m.a.uniform1f(m.d,n)
e.gaB()
n=e.gaB()
if(!C.a.B(k,n)){n.sb_(0,k.length)
k.push(n)}n=e.gaB()
m=n.gb0(n)
if(m){m=b.dx
m.toString
a1=n.gb0(n)
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.gb_(n))}e.gaQ()
n=e.gdE()
m=b.z
m.toString
a1=n.gfX(n)
a2=n.gfY(n)
a5=n.gfZ()
n=n.gfW()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gaQ()
if(!C.a.B(k,n)){n.sb_(0,k.length)
k.push(n)}n=e.gaQ()
m=n.gb0(n)
if(m){m=b.dy
m.toString
a1=n.gb0(n)
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.gb_(n))}if(e.ghJ()){n=e.ghH()
m=b.Q
m.a.uniform1f(m.d,n)
n=e.ghG()
m=b.ch
m.a.uniform1f(m.d,n)}if(e.gd7()){n=e.gcV()
m=b.cx
m.a.uniform1f(m.d,n)
n=e.gcW()
m=b.cy
m.a.uniform1f(m.d,n)
n=e.gcX()
m=b.db
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.m)(b3),++f){o=b3[f].a
j=b1.h(0,o)
if(j==null)j=0
o=b2.a.c1.h(0,o)
o.a.uniform1i(o.d,j)}}}if(r.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.gW(p).c4(0)}b3=b3.id
b3.toString
b3.ab(p.a5(0,!0))}if(r.db){b2.e_(k,b2.ch)
b3=b2.a
p=b2.ch
b3.fo(b3.da,p)
if(r.r.a){b3=b2.a
p=b2.cx.f
b3=b3.dc
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=r.x.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.cy.ch
p=p.dd
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.cy.f
b3=b3.de
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}}b3=r.y.a
p=!b3
if(p)o=!1
else o=!0
if(o){if(b3){b3=b2.a
o=b2.db.f
b3=b3.df
b3.a.uniform1f(b3.d,o)}b3=b4.a
b3.enable(3042)
b3.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].V(b4)
b3=b5.e
b3.V(b4)
b3.a9(b4)
b3.aN(b4)
if(p)b3=!1
else b3=!0
if(b3)b4.a.disable(3042)
for(i=0;i<k.length;++i)k[i].aN(b4)
b3=b2.a
b3.toString
b4.a.useProgram(null)
b3.x.d4()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cC().aZ}}
O.hJ.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.fU(a,C.c.a0(b+3,4)*4))}}
O.hK.prototype={
$2:function(a,b){return J.d8(a.a,b.a)}}
O.hL.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.h4(a,C.c.a0(b+3,4)*4))}}
O.hM.prototype={
$2:function(a,b){return J.d8(a.a,b.a)}}
O.hN.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.i0(a,C.c.a0(b+3,4)*4))}}
O.hO.prototype={
$2:function(a,b){return J.d8(a.a,b.a)}}
O.hP.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.il(a,C.c.a0(b+3,4)*4))}}
O.hQ.prototype={
$2:function(a,b){return J.d8(a.a,b.a)}}
O.hD.prototype={
aq:function(){var s,r=this
r.cp()
s=r.f
$.A().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.x(r.b,s,1)
s.b=!0
r.a.X(s)}}}
O.dG.prototype={
aq:function(){},
cM:function(a){var s,r,q=this
if(!q.c.t(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.aq()
s=q.a
s.a=null
s.X(null)}}}
O.hE.prototype={}
O.at.prototype={
cL:function(a){var s,r,q=this
if(!q.f.t(0,a)){s=q.f
q.f=a
r=new D.x(q.b+".color",s,a)
r.b=!0
q.a.X(r)}},
aq:function(){this.cp()
this.cL(new V.O(1,1,1))},
saL:function(a,b){this.cM(new A.V(!0,!1,!1))
this.cL(b)}}
O.hG.prototype={}
O.hH.prototype={
aq:function(){var s,r=this
r.cq()
s=r.ch
$.A().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.x(r.b+".refraction",s,1)
s.b=!0
r.a.X(s)}}}
O.hI.prototype={
cN:function(a){var s=this,r=s.ch
$.A().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.x(s.b+".shininess",r,a)
r.b=!0
s.a.X(r)}},
aq:function(){this.cq()
this.cN(100)}}
O.e5.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.B():s},
X:function(a){var s=this.e
if(s!=null)s.A(a)},
bw:function(){return this.X(null)},
ds:function(a,b){var s,r,q,p,o,n,m=this,l="Skybox"
if(m.a==null){s=a.fr.h(0,l)
if(s==null){r=a.a
s=new A.ik(r,l)
s.cr(r,l)
s.dg(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.z=s.x.h(0,"posAttr")
r=t.n
s.Q=r.a(s.y.h(0,"fov"))
s.ch=r.a(s.y.h(0,"ratio"))
s.cx=t.r.a(s.y.h(0,"boxClr"))
s.cy=t.Q.a(s.y.h(0,"boxTxt"))
s.db=t.q.a(s.y.h(0,"viewMat"))
a.cT(s)}m.a=s}if(b.e==null){r=b.d.d_(new Z.eG(a.a),$.ak())
r.au($.ak()).e=m.a.z.c
b.e=r}r=m.c
if(r!=null){r.a=1
if(!r.c&&r.d>=6){r.c=!0
q=a.a
q.activeTexture(33985)
q.bindTexture(34067,r.b)}}r=a.d
q=a.c
p=m.a
p.V(a)
o=m.b
n=p.Q
n.a.uniform1f(n.d,o)
o=p.ch
o.a.uniform1f(o.d,r/q)
q=m.c
p.cy.dD(q)
q=m.d
r=p.cx
r.a.uniform3f(r.d,q.a,q.b,q.c)
q=a.db
q=q.gW(q).c4(0)
p=p.db
p.toString
p.ab(q.a5(0,!0))
r=b.e
if(r instanceof Z.c0){r.V(a)
r.a9(a)
r.aN(a)}else b.e=null
r=m.a
r.toString
q=a.a
q.useProgram(null)
r.x.d4()
r=m.c
if(r!=null)if(r.c){r.c=!1
q.activeTexture(33984+r.a)
q.bindTexture(34067,null)}}}
O.is.prototype={}
T.it.prototype={}
T.iu.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.B():s}}
T.iv.prototype={
aG:function(a,b,c,d,e,f){var s=document.createElement("img")
s.src=c;++this.d
W.R(s,"load",new T.iw(this,s,!1,b,!1,d,a),!1)},
fl:function(a,b,c){var s,r,q,p
b=V.kl(b)
s=V.kl(a.width)
r=V.kl(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.jN()
q.width=s
q.height=r
p=C.f.dz(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.od(p.getImageData(0,0,q.width,q.height))}}}
T.iw.prototype={
$1:function(a){var s=this,r=s.a,q=r.fl(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,s.e?1:0)
C.V.hx(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.h_()}++r.e}}
X.jM.prototype={}
X.hm.prototype={
gp:function(){var s=this.x
return s==null?this.x=D.B():s},
ai:function(a){var s=this.x
if(s!=null)s.A(a)},
V:function(a){var s,r,q,p,o,n,m,l=this,k=a.a
k.bindFramebuffer(36160,null)
k.enable(2884)
k.enable(2929)
k.depthFunc(513)
s=k.drawingBufferWidth
r=k.drawingBufferHeight
q=l.r
p=q.a
if(typeof s!=="number")return H.p(s)
o=C.d.af(p*s)
p=q.b
if(typeof r!=="number")return H.p(r)
n=C.d.af(p*r)
p=C.d.af(q.c*s)
a.c=p
q=C.d.af(q.d*r)
a.d=q
k.viewport(o,n,p,q)
k.clearDepth(l.c)
if(l.b){q=l.a
k.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
k.clear(m)}}
X.hr.prototype={
gp:function(){var s=this.b
return s==null?this.b=D.B():s},
V:function(a){var s
a.cy.bo(V.bD())
s=V.bD()
a.db.bo(s)},
aN:function(a){a.cy.ay()
a.db.ay()}}
X.dU.prototype={
gp:function(){var s=this.f
return s==null?this.f=D.B():s},
ai:function(a){var s=this.f
if(s!=null)s.A(a)},
dX:function(){return this.ai(null)},
V:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.au(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.bo(i)
p=$.kO
if(p==null){p=V.kQ()
o=V.k4()
n=$.l5
p=V.kK(p,o,n==null?$.l5=new V.y(0,0,-1):n)
$.kO=p
s=p}else s=p
p=q.b
if(p!=null){r=p.aO(0,a,q)
if(r!=null)s=r.u(0,s)}a.db.bo(s)},
aN:function(a){a.cy.ay()
a.db.ay()}}
X.iq.prototype={}
V.b1.prototype={
b8:function(a){this.b=new P.hp(C.L)
this.c=null
this.d=[]},
H:function(a,b){var s,r,q,p,o,n,m,l=this,k=l.d
if(k.length===0)k.push([])
s=a.split("\n")
for(k=s.length,r=!0,q=0;q<k;++q){p=s[q]
if(r)r=!1
else l.d.push([])
o=document.createElement("div")
o.className="codePart"
n=l.b.e7(p,0,p.length)
m=n==null?p:n
C.J.dC(o,H.kn(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.gbk(l.d).push(o)}},
dr:function(a,b){var s,r,q,p=this
p.d=[]
s=C.a.k(b,"\n")
r=p.c
if(r==null)r=p.c=p.bg()
r.toString
q=new H.k(s)
q=new P.bn(r.cg(new H.aI(q,q.gl(q))).a())
for(;q.q();)p.bn(q.gC(q))}}
V.jH.prototype={
$1:function(a){var s=C.d.dv(this.a.gh4(),2)
if(s!=="0.00")P.km(s+" fps")}}
V.dj.prototype={
bn:function(a){var s=this
switch(a.a){case"Class":s.H(a.b,"#551")
break
case"Comment":s.H(a.b,"#777")
break
case"Id":s.H(a.b,"#111")
break
case"Num":s.H(a.b,"#191")
break
case"Reserved":s.H(a.b,"#119")
break
case"String":s.H(a.b,"#171")
break
case"Symbol":s.H(a.b,"#616")
break
case"Type":s.H(a.b,"#B11")
break
case"Whitespace":s.H(a.b,"#111")
break}},
bg:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()\\-+*%!&|=.,?:;",j="OpenDoubleStr",i="CloseDoubleStr",h="EscDoubleStr",g="OpenSingleStr",f="CloseSingleStr",e="EscSingleStr",d="Slash",c="Comment",b="EndComment",a="MLComment",a0="MLCStar",a1="Whitespace",a2=L.iA()
a2.d=a2.j(0,q)
s=a2.j(0,q).k(0,p)
r=K.n(new H.k("_"))
s.a.push(r)
r=K.J("a","z")
s.a.push(r)
r=K.J("A","Z")
s.a.push(r)
r=a2.j(0,p).k(0,p)
s=K.n(new H.k("_"))
r.a.push(s)
s=K.J("0","9")
r.a.push(s)
s=K.J("a","z")
r.a.push(s)
s=K.J("A","Z")
r.a.push(s)
s=a2.j(0,q).k(0,o)
r=K.J("0","9")
s.a.push(r)
r=a2.j(0,o).k(0,o)
s=K.J("0","9")
r.a.push(s)
s=a2.j(0,o).k(0,n)
r=K.n(new H.k("."))
s.a.push(r)
r=a2.j(0,n).k(0,m)
s=K.J("0","9")
r.a.push(s)
s=a2.j(0,m).k(0,m)
r=K.J("0","9")
s.a.push(r)
r=a2.j(0,q).k(0,l)
s=K.n(new H.k(k))
r.a.push(s)
s=a2.j(0,l).k(0,l)
r=K.n(new H.k(k))
s.a.push(r)
r=a2.j(0,q).k(0,j)
s=K.n(new H.k('"'))
r.a.push(s)
s=a2.j(0,j).k(0,i)
r=K.n(new H.k('"'))
s.a.push(r)
r=a2.j(0,j).k(0,h)
s=K.n(new H.k("\\"))
r.a.push(s)
s=a2.j(0,h).k(0,j)
r=K.n(new H.k('"'))
s.a.push(r)
a2.j(0,j).k(0,j).a.push(new K.aD())
r=a2.j(0,q).k(0,g)
s=K.n(new H.k("'"))
r.a.push(s)
s=a2.j(0,g).k(0,f)
r=K.n(new H.k("'"))
s.a.push(r)
r=a2.j(0,g).k(0,e)
s=K.n(new H.k("\\"))
r.a.push(s)
s=a2.j(0,e).k(0,g)
r=K.n(new H.k("'"))
s.a.push(r)
a2.j(0,g).k(0,g).a.push(new K.aD())
r=a2.j(0,q).k(0,d)
s=K.n(new H.k("/"))
r.a.push(s)
s=a2.j(0,d).k(0,c)
r=K.n(new H.k("/"))
s.a.push(r)
r=a2.j(0,c).k(0,b)
s=K.n(new H.k("\n"))
r.a.push(s)
s=a2.j(0,c).k(0,c)
r=new K.Z()
r.a=[]
s.a.push(r)
s=K.n(new H.k("\n"))
r.a.push(s)
s=a2.j(0,d).k(0,a)
r=K.n(new H.k("*"))
s.a.push(r)
r=a2.j(0,a).k(0,a0)
s=K.n(new H.k("*"))
r.a.push(s)
s=a2.j(0,a0).k(0,a)
r=new K.Z()
r.a=[]
s.a.push(r)
s=K.n(new H.k("*"))
r.a.push(s)
s=a2.j(0,a0).k(0,b)
r=K.n(new H.k("/"))
s.a.push(r)
r=a2.j(0,q).k(0,a1)
s=K.n(new H.k(" \n\t"))
r.a.push(s)
s=a2.j(0,a1).k(0,a1)
r=K.n(new H.k(" \n\t"))
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
r.az(0,"Class",["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"])
r.az(0,"Type",["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"])
r.az(0,"Reserved",["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"])
return a2}}
V.ds.prototype={
bn:function(a){var s=this
switch(a.a){case"Builtin":s.H(a.b,"#411")
break
case"Comment":s.H(a.b,"#777")
break
case"Id":s.H(a.b,"#111")
break
case"Num":s.H(a.b,"#191")
break
case"Preprocess":s.H(a.b,"#737")
break
case"Reserved":s.H(a.b,"#119")
break
case"Symbol":s.H(a.b,"#611")
break
case"Type":s.H(a.b,"#171")
break
case"Whitespace":s.H(a.b,"#111")
break}},
bg:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()[]\\-+*%!&|=.,?:;",j="Slash",i="Comment",h="EndComment",g="Preprocess",f="EndPreprocess",e="Whitespace",d=L.iA()
d.d=d.j(0,q)
s=d.j(0,q).k(0,p)
r=K.n(new H.k("_"))
s.a.push(r)
r=K.J("a","z")
s.a.push(r)
r=K.J("A","Z")
s.a.push(r)
r=d.j(0,p).k(0,p)
s=K.n(new H.k("_"))
r.a.push(s)
s=K.J("0","9")
r.a.push(s)
s=K.J("a","z")
r.a.push(s)
s=K.J("A","Z")
r.a.push(s)
s=d.j(0,q).k(0,o)
r=K.J("0","9")
s.a.push(r)
r=d.j(0,o).k(0,o)
s=K.J("0","9")
r.a.push(s)
s=d.j(0,o).k(0,n)
r=K.n(new H.k("."))
s.a.push(r)
r=d.j(0,n).k(0,m)
s=K.J("0","9")
r.a.push(s)
s=d.j(0,m).k(0,m)
r=K.J("0","9")
s.a.push(r)
r=d.j(0,q).k(0,l)
s=K.n(new H.k(k))
r.a.push(s)
s=d.j(0,l).k(0,l)
r=K.n(new H.k(k))
s.a.push(r)
r=d.j(0,q).k(0,j)
s=K.n(new H.k("/"))
r.a.push(s)
s=d.j(0,j).k(0,i)
r=K.n(new H.k("/"))
s.a.push(r)
d.j(0,j).k(0,l).a.push(new K.aD())
r=d.j(0,i).k(0,h)
s=K.n(new H.k("\n"))
r.a.push(s)
s=d.j(0,i).k(0,i)
r=new K.Z()
r.a=[]
s.a.push(r)
s=K.n(new H.k("\n"))
r.a.push(s)
s=d.j(0,q).k(0,g)
r=K.n(new H.k("#"))
s.a.push(r)
r=d.j(0,g).k(0,g)
s=new K.Z()
s.a=[]
r.a.push(s)
r=K.n(new H.k("\n"))
s.a.push(r)
r=d.j(0,g).k(0,f)
s=K.n(new H.k("\n"))
r.a.push(s)
s=d.j(0,q).k(0,e)
r=K.n(new H.k(" \n\t"))
s.a.push(r)
r=d.j(0,e).k(0,e)
s=K.n(new H.k(" \n\t"))
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
s.az(0,"Type",["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"])
s.az(0,"Reserved",["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"])
s.az(0,"Builtin",["gl_FragColor","gl_Position"])
return d}}
V.du.prototype={
bn:function(a){var s=this,r="#111"
switch(a.a){case"Attr":s.H(a.b,"#911")
s.H("=",r)
break
case"Id":s.H(a.b,r)
break
case"Other":s.H(a.b,r)
break
case"Reserved":s.H(a.b,"#119")
break
case"String":s.H(a.b,"#171")
break
case"Symbol":s.H(a.b,"#616")
break}},
bg:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.iA()
j.d=j.j(0,q)
s=j.j(0,q).k(0,p)
r=K.n(new H.k("_"))
s.a.push(r)
r=K.J("a","z")
s.a.push(r)
r=K.J("A","Z")
s.a.push(r)
r=j.j(0,p).k(0,p)
s=K.n(new H.k("_"))
r.a.push(s)
s=K.J("0","9")
r.a.push(s)
s=K.J("a","z")
r.a.push(s)
s=K.J("A","Z")
r.a.push(s)
s=j.j(0,p).k(0,o)
r=K.n(new H.k("="))
s.a.push(r)
s.c=!0
s=j.j(0,q).k(0,n)
r=K.n(new H.k("</\\-!>="))
s.a.push(r)
r=j.j(0,n).k(0,n)
s=K.n(new H.k("</\\-!>="))
r.a.push(s)
s=j.j(0,q).k(0,m)
r=K.n(new H.k('"'))
s.a.push(r)
r=j.j(0,m).k(0,l)
s=K.n(new H.k('"'))
r.a.push(s)
s=j.j(0,m).k(0,"EscStr")
r=K.n(new H.k("\\"))
s.a.push(r)
r=j.j(0,"EscStr").k(0,m)
s=K.n(new H.k('"'))
r.a.push(s)
j.j(0,m).k(0,m).a.push(new K.aD())
j.j(0,q).k(0,k).a.push(new K.aD())
s=j.j(0,k).k(0,k)
r=new K.Z()
r.a=[]
s.a.push(r)
s=K.n(new H.k('</\\-!>=_"'))
r.a.push(s)
s=K.J("a","z")
r.a.push(s)
s=K.J("A","Z")
r.a.push(s)
s=j.j(0,n)
s.d=s.a.I("Symbol")
s=j.j(0,l)
s.d=s.a.I("String")
s=j.j(0,p)
r=s.a.I(p)
s.d=r
r.az(0,"Reserved",["DOCTYPE","html","head","meta","link","title","body","script"])
r=j.j(0,o)
r.d=r.a.I(o)
r=j.j(0,k)
r.d=r.a.I(k)
return j}}
V.dW.prototype={
dr:function(a,b){this.d=[]
this.H(C.a.k(b,"\n"),"#111")},
bn:function(a){},
bg:function(){return null}}
V.ie.prototype={
dP:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.R(o,"scroll",new V.ih(m),!1)},
cS:function(a){var s,r,q,p,o,n,m,l
this.fu()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.a.h6(a)
q.toString
p=new H.k(p)
p=new P.bn(q.cg(new H.aI(p,p.gl(p))).a())
for(;p.q();){q=p.gC(p)
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
if(H.lG(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.e(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.lo(C.r,q,C.i,!1)
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
dw:function(a){var s,r,q,p=new V.dj("dart")
p.b8("dart")
s=new V.ds("glsl")
s.b8("glsl")
r=new V.du("html")
r.b8("html")
q=C.a.h3([p,s,r],new V.ii(a))
if(q!=null)return q
p=new V.dW("plain")
p.b8("plain")
return p},
cR:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=[]
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(J.kh(q).bt(q,"+")){b2[r]=C.b.am(q,1)
a8.push(1)
s=!0}else if(C.b.bt(q,"-")){b2[r]=C.b.am(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.dw(b0)
p.dr(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m)
this.a.appendChild(n)
l=P.lo(C.r,a9,C.i,!1)
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
for(e=q.length,a1=0;a1<q.length;q.length===e||(0,H.m)(q),++a1)a0.appendChild(q[a1])
d.appendChild(c)
d.appendChild(b)
d.appendChild(a0)
m.appendChild(d)}else for(e=p.d,a2=e.length,a3=b1,a1=0;a1<e.length;e.length===a2||(0,H.m)(e),++a1){q=e[a1]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className=a6;++a3
c.textContent=""+a3
b=o.createElement("td")
b.className=a7
for(a4=C.a.gK(q);a4.q();)b.appendChild(a4.gC(a4))
d.appendChild(c)
d.appendChild(b)
m.appendChild(d)}},
fu:function(){var s,r,q,p="Start",o="Bold",n="Italic",m="ItalicEnd",l="Code",k="LinkHead",j="LinkTail",i="LinkEnd",h="Other"
if(this.b!=null)return
s=L.iA()
s.d=s.j(0,p)
r=s.j(0,p).k(0,o)
q=K.n(new H.k("*"))
r.a.push(q)
r.c=!0
r=s.j(0,o).k(0,o)
q=new K.Z()
q.a=[]
r.a.push(q)
r=K.n(new H.k("*"))
q.a.push(r)
r=s.j(0,o).k(0,"BoldEnd")
q=K.n(new H.k("*"))
r.a.push(q)
r.c=!0
r=s.j(0,p).k(0,n)
q=K.n(new H.k("_"))
r.a.push(q)
r.c=!0
r=s.j(0,n).k(0,n)
q=new K.Z()
q.a=[]
r.a.push(q)
r=K.n(new H.k("_"))
q.a.push(r)
r=s.j(0,n).k(0,m)
q=K.n(new H.k("_"))
r.a.push(q)
r.c=!0
r=s.j(0,p).k(0,l)
q=K.n(new H.k("`"))
r.a.push(q)
r.c=!0
r=s.j(0,l).k(0,l)
q=new K.Z()
q.a=[]
r.a.push(q)
r=K.n(new H.k("`"))
q.a.push(r)
r=s.j(0,l).k(0,"CodeEnd")
q=K.n(new H.k("`"))
r.a.push(q)
r.c=!0
r=s.j(0,p).k(0,k)
q=K.n(new H.k("["))
r.a.push(q)
r.c=!0
r=s.j(0,k).k(0,j)
q=K.n(new H.k("|"))
r.a.push(q)
q=s.j(0,k).k(0,i)
r=K.n(new H.k("]"))
q.a.push(r)
q.c=!0
q=s.j(0,k).k(0,k)
r=new K.Z()
r.a=[]
q.a.push(r)
q=K.n(new H.k("|]"))
r.a.push(q)
q=s.j(0,j).k(0,i)
r=K.n(new H.k("]"))
q.a.push(r)
q.c=!0
q=s.j(0,j).k(0,j)
r=new K.Z()
r.a=[]
q.a.push(r)
q=K.n(new H.k("|]"))
r.a.push(q)
s.j(0,p).k(0,h).a.push(new K.aD())
q=s.j(0,h).k(0,h)
r=new K.Z()
r.a=[]
q.a.push(r)
q=K.n(new H.k("*_`["))
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
V.ih.prototype={
$1:function(a){P.l0(C.j,new V.ig(this.a))}}
V.ig.prototype={
$0:function(){var s=C.d.af(document.documentElement.scrollTop),r=this.a.style,q=H.d(-0.01*s)+"px"
r.top=q}}
V.ii.prototype={
$1:function(a){return a.a===this.a}}
B.jF.prototype={
$1:function(a){var s=this.a.d,r=this.b,q=s.a
r.cR("Vertex Shader for Skybox","glsl",0,(q==null?null:q.c).split("\n"))
q=s.a
r.cR("Fragment Shader for Skybox","glsl",0,(q==null?null:q.d).split("\n"))}};(function aliases(){var s=J.a.prototype
s.dH=s.i
s=J.b9.prototype
s.dJ=s.i
s=P.f.prototype
s.dI=s.br
s=W.z.prototype
s.bu=s.ac
s=W.cN.prototype
s.dK=s.ak
s=K.dt.prototype
s.dG=s.aw
s.co=s.i
s=O.dG.prototype
s.cp=s.aq
s=O.at.prototype
s.cq=s.aq})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"nr","mp",21)
r(P,"o6","mR",6)
r(P,"o7","mS",6)
r(P,"o8","mT",6)
q(P,"lx","o1",7)
r(W,"pE","ha",22)
p(W,"ol",4,null,["$4"],["mU"],14,0)
p(W,"om",4,null,["$4"],["mV"],14,0)
var j
o(j=E.bx.prototype,"gdn",0,0,null,["$1","$0"],["dq","hf"],0,0)
o(j,"gdl",0,0,null,["$1","$0"],["dm","hc"],0,0)
n(j,"gha","hb",3)
n(j,"ghd","he",3)
o(j=E.ei.prototype,"gct",0,0,null,["$1","$0"],["cv","cu"],0,0)
m(j,"ght","dt",7)
l(j=X.eD.prototype,"geF","eG",4)
l(j,"ges","eu",4)
l(j,"gez","eA",2)
l(j,"geJ","eK",8)
l(j,"geH","eI",8)
l(j,"geN","eO",2)
l(j,"geR","eS",2)
l(j,"geD","eE",2)
l(j,"geP","eQ",2)
l(j,"geB","eC",2)
l(j,"geT","eU",19)
l(j,"geV","eW",4)
l(j,"gfa","fb",5)
l(j,"gf6","f7",5)
l(j,"gf8","f9",5)
o(D.bw.prototype,"gdR",0,0,null,["$1","$0"],["an","dS"],0,0)
o(j=D.ch.prototype,"gcG",0,0,null,["$1","$0"],["cH","eL"],0,0)
l(j,"geX","eY",20)
n(j,"gem","en",9)
n(j,"gf0","f1",9)
k(V.a_.prototype,"gl","c5",10)
k(V.y.prototype,"gl","c5",10)
o(j=U.bz.prototype,"gaH",0,0,null,["$1","$0"],["J","a3"],0,0)
n(j,"gek","el",11)
n(j,"geZ","f_",11)
o(j=U.cz.prototype,"gaH",0,0,null,["$1","$0"],["J","a3"],0,0)
l(j,"gbF","bG",1)
l(j,"gbH","bI",1)
l(j,"gbJ","bK",1)
o(j=U.cA.prototype,"gaH",0,0,null,["$1","$0"],["J","a3"],0,0)
l(j,"gbF","bG",1)
l(j,"gbH","bI",1)
l(j,"gbJ","bK",1)
l(j,"ged","ee",1)
l(j,"gef","eg",1)
l(j,"gfD","fE",1)
l(j,"gfB","fC",1)
l(j,"gfz","fA",1)
l(U.cB.prototype,"gei","ej",1)
o(j=M.c1.prototype,"gS",0,0,null,["$1","$0"],["T","aS"],0,0)
n(j,"gf2","f3",12)
n(j,"gf4","f5",12)
o(M.c3.prototype,"gS",0,0,null,["$1","$0"],["T","aS"],0,0)
o(j=M.ca.prototype,"gS",0,0,null,["$1","$0"],["T","aS"],0,0)
n(j,"gev","ew",3)
n(j,"gex","ey",3)
o(j=O.dF.prototype,"gbv",0,0,null,["$1","$0"],["X","bw"],0,0)
o(j,"gfj",0,0,null,["$1","$0"],["cJ","fk"],0,0)
n(j,"geo","ep",13)
n(j,"geq","er",13)
o(O.e5.prototype,"gbv",0,0,null,["$1","$0"],["X","bw"],0,0)
o(X.dU.prototype,"gdW",0,0,null,["$1","$0"],["ai","dX"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.K,null)
q(P.K,[H.jV,J.a,J.U,P.cG,P.f,H.aI,P.dx,H.cb,H.eB,H.iE,P.H,H.i_,H.fk,H.bu,P.as,H.hy,H.dC,H.hu,H.ac,H.eX,P.cT,P.bT,P.bn,P.eI,P.eb,P.ec,P.cx,P.js,P.cM,P.jg,P.cF,P.C,P.df,P.hq,P.jq,P.az,P.a6,P.P,P.b3,P.dT,P.cv,P.eU,P.hl,P.hn,P.ar,P.dD,P.aa,P.L,P.aM,W.h0,W.jR,W.k5,W.bS,W.E,W.ct,W.cN,W.fp,W.cc,W.a9,W.jk,W.fz,P.cV,P.fd,K.aD,K.dt,K.i2,K.i9,L.ea,L.ej,L.ek,L.iz,O.bv,O.co,E.fV,E.bx,E.bt,E.bI,E.eR,E.i3,E.ei,Z.eF,Z.eG,Z.c0,Z.dw,Z.bl,D.fX,D.by,D.Q,X.de,X.dA,X.hw,X.hA,X.a8,X.hW,X.iB,X.eD,D.bw,D.aq,V.O,V.aF,V.hd,V.dH,V.bC,V.a3,V.M,V.bf,V.e0,V.a_,V.y,U.cz,U.cA,U.cB,M.c3,M.ca,M.ad,A.fP,A.fQ,A.V,A.fU,A.h4,A.i0,A.il,A.hF,A.er,A.es,A.ev,A.ey,A.iH,A.iN,F.hh,F.hi,F.hx,F.ia,F.ib,F.ic,F.id,F.iV,F.iX,F.iY,F.j0,F.j2,F.j3,F.j4,O.is,O.dG,O.hG,T.iv,X.jM,X.iq,X.hr,X.dU,V.b1,V.ie])
q(J.a,[J.ht,J.cg,J.b9,J.a7,J.b8,J.ap,H.cq,W.b,W.fN,W.dd,W.am,W.G,W.eM,W.a5,W.h3,W.h5,W.eN,W.c7,W.eP,W.h6,W.h,W.eV,W.b5,W.ho,W.f_,W.b7,W.hz,W.hR,W.f3,W.f4,W.bc,W.f5,W.f7,W.be,W.fb,W.fe,W.bg,W.ff,W.bh,W.fl,W.aN,W.fr,W.iy,W.bi,W.ft,W.iC,W.iP,W.fA,W.fC,W.fE,W.fG,W.fI,P.bB,P.f1,P.bH,P.f9,P.i1,P.fm,P.bO,P.fv,P.fR,P.eJ,P.e1,P.fi])
q(J.b9,[J.dV,J.bk,J.ah])
r(J.dy,J.a7)
q(J.b8,[J.cf,J.ce])
r(P.cj,P.cG)
q(P.cj,[H.bP,W.eK,W.T,P.dq])
r(H.k,H.bP)
q(P.f,[H.i,H.bb,H.bm,P.cd])
q(H.i,[H.ck,H.aH])
r(H.c8,H.bb)
q(P.dx,[H.cm,H.eH])
r(H.cn,H.ck)
q(P.H,[H.dP,H.dz,H.eA,H.e2,H.eS,P.db,P.dQ,P.a1,P.eC,P.ez,P.bM,P.dg,P.di])
q(H.bu,[H.ir,H.hv,H.jA,H.jB,H.jC,P.j8,P.j7,P.j9,P.ja,P.jp,P.jo,P.jv,P.ji,P.jj,P.hB,P.h7,P.h8,W.h9,W.hT,W.hV,W.i8,W.ip,W.jd,W.hY,W.hX,W.jl,W.jm,W.jn,W.jr,P.jw,P.hj,P.hk,P.fT,E.i4,E.i5,E.i6,E.ix,D.hf,D.hg,F.jI,F.jx,F.j6,F.j5,F.iZ,F.j_,O.hJ,O.hK,O.hL,O.hM,O.hN,O.hO,O.hP,O.hQ,T.iw,V.jH,V.ih,V.ig,V.ii,B.jF])
q(H.ir,[H.im,H.c_])
r(P.dE,P.as)
q(P.dE,[H.v,W.jb])
r(H.bG,H.cq)
q(H.bG,[H.cI,H.cK])
r(H.cJ,H.cI)
r(H.bd,H.cJ)
r(H.cL,H.cK)
r(H.cp,H.cL)
q(H.cp,[H.dJ,H.dK,H.dL,H.dM,H.dN,H.cr,H.dO])
r(H.cU,H.eS)
r(P.cQ,P.cd)
r(P.jh,P.js)
r(P.cE,P.cM)
r(P.dh,P.ec)
r(P.hb,P.df)
q(P.dh,[P.hp,P.iR])
r(P.iQ,P.hb)
q(P.P,[P.X,P.r])
q(P.a1,[P.bK,P.dv])
q(W.b,[W.u,W.dp,W.aL,W.cO,W.aO,W.ai,W.cR,W.eE,W.bQ,P.dc,P.aE])
q(W.u,[W.z,W.ag,W.bR])
q(W.z,[W.l,P.j])
q(W.l,[W.d9,W.da,W.bs,W.b_,W.b0,W.c5,W.dr,W.bA,W.e3,W.cw,W.ee,W.ef,W.bN])
r(W.h_,W.am)
r(W.c4,W.eM)
q(W.a5,[W.h1,W.h2])
r(W.eO,W.eN)
r(W.c6,W.eO)
r(W.eQ,W.eP)
r(W.dl,W.eQ)
r(W.b4,W.dd)
r(W.eW,W.eV)
r(W.dn,W.eW)
r(W.f0,W.f_)
r(W.b6,W.f0)
r(W.ax,W.h)
q(W.ax,[W.ba,W.a2,W.bj])
r(W.hS,W.f3)
r(W.hU,W.f4)
r(W.f6,W.f5)
r(W.dI,W.f6)
r(W.f8,W.f7)
r(W.cs,W.f8)
r(W.fc,W.fb)
r(W.dX,W.fc)
r(W.i7,W.fe)
r(W.cP,W.cO)
r(W.e7,W.cP)
r(W.fg,W.ff)
r(W.e8,W.fg)
r(W.io,W.fl)
r(W.fs,W.fr)
r(W.eg,W.fs)
r(W.cS,W.cR)
r(W.eh,W.cS)
r(W.fu,W.ft)
r(W.el,W.fu)
r(W.aP,W.a2)
r(W.fB,W.fA)
r(W.eL,W.fB)
r(W.cD,W.c7)
r(W.fD,W.fC)
r(W.eY,W.fD)
r(W.fF,W.fE)
r(W.cH,W.fF)
r(W.fH,W.fG)
r(W.fh,W.fH)
r(W.fJ,W.fI)
r(W.fo,W.fJ)
r(W.jc,W.jb)
r(W.eT,P.eb)
r(W.fq,W.cN)
r(P.ab,P.fd)
r(P.f2,P.f1)
r(P.dB,P.f2)
r(P.fa,P.f9)
r(P.dR,P.fa)
r(P.bL,P.j)
r(P.fn,P.fm)
r(P.ed,P.fn)
r(P.fw,P.fv)
r(P.em,P.fw)
r(P.fS,P.eJ)
r(P.dS,P.aE)
r(P.fj,P.fi)
r(P.e9,P.fj)
q(K.dt,[K.Z,L.iD])
q(E.fV,[Z.fW,A.e4,T.it])
q(D.Q,[D.an,D.ao,D.x,X.dY])
q(X.dY,[X.cl,X.bE,X.bF,X.cy])
q(O.bv,[D.ch,U.bz,M.c1])
q(D.fX,[U.fZ,U.S])
r(U.c2,U.S)
q(A.e4,[A.hC,A.ik])
q(A.iH,[A.eo,A.iK,A.iL,A.iM,A.iI,A.en,A.iJ,A.ep,A.eq,A.iO,A.et,A.eu,A.ew,A.ex])
r(F.ij,F.hi)
r(F.iG,F.hx)
r(F.j1,F.j2)
r(F.hZ,F.j3)
q(O.is,[O.dF,O.e5])
q(O.dG,[O.hD,O.hE,O.at])
q(O.at,[O.hH,O.hI])
r(T.iu,T.it)
r(X.hm,X.iq)
q(V.b1,[V.dj,V.ds,V.du,V.dW])
s(H.bP,H.eB)
s(H.cI,P.C)
s(H.cJ,H.cb)
s(H.cK,P.C)
s(H.cL,H.cb)
s(P.cG,P.C)
s(W.eM,W.h0)
s(W.eN,P.C)
s(W.eO,W.E)
s(W.eP,P.C)
s(W.eQ,W.E)
s(W.eV,P.C)
s(W.eW,W.E)
s(W.f_,P.C)
s(W.f0,W.E)
s(W.f3,P.as)
s(W.f4,P.as)
s(W.f5,P.C)
s(W.f6,W.E)
s(W.f7,P.C)
s(W.f8,W.E)
s(W.fb,P.C)
s(W.fc,W.E)
s(W.fe,P.as)
s(W.cO,P.C)
s(W.cP,W.E)
s(W.ff,P.C)
s(W.fg,W.E)
s(W.fl,P.as)
s(W.fr,P.C)
s(W.fs,W.E)
s(W.cR,P.C)
s(W.cS,W.E)
s(W.ft,P.C)
s(W.fu,W.E)
s(W.fA,P.C)
s(W.fB,W.E)
s(W.fC,P.C)
s(W.fD,W.E)
s(W.fE,P.C)
s(W.fF,W.E)
s(W.fG,P.C)
s(W.fH,W.E)
s(W.fI,P.C)
s(W.fJ,W.E)
s(P.f1,P.C)
s(P.f2,W.E)
s(P.f9,P.C)
s(P.fa,W.E)
s(P.fm,P.C)
s(P.fn,W.E)
s(P.fv,P.C)
s(P.fw,W.E)
s(P.eJ,P.as)
s(P.fi,P.C)
s(P.fj,W.E)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{r:"int",X:"double",P:"num",L:"String",az:"bool",aa:"Null",ar:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([Q*])","~(Q*)","~(a2*)","~(r*,f<bx*>*)","~(h*)","~(bj*)","~(~())","~()","~(ba*)","~(r*,f<aq*>*)","X*()","~(r*,f<S*>*)","~(r*,f<ad*>*)","~(r*,f<bC*>*)","az(z,L,L,bS)","@(@)","aa(@)","aa(K?,K?)","aa(@,@)","~(aP*)","az*(f<aq*>*)","r(@,@)","L(b)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.nd(v.typeUniverse,JSON.parse('{"ah":"b9","dV":"b9","bk":"b9","oE":"h","oO":"h","oG":"aE","oF":"b","oU":"b","oW":"b","oD":"j","oP":"j","oH":"l","oS":"l","oQ":"u","oN":"u","pj":"ai","oL":"ax","oI":"ag","oX":"ag","oV":"a2","oR":"b6","oT":"bd","a7":{"i":["1"],"f":["1"]},"dy":{"i":["1"],"f":["1"]},"b8":{"X":[],"P":[]},"cf":{"X":[],"r":[],"P":[]},"ce":{"X":[],"P":[]},"ap":{"L":[]},"k":{"i":["r"],"f":["r"]},"i":{"f":["1"]},"ck":{"i":["1"],"f":["1"]},"bb":{"f":["2"]},"c8":{"i":["2"],"f":["2"]},"cn":{"i":["2"],"f":["2"]},"bm":{"f":["1"]},"bP":{"i":["1"],"f":["1"]},"dP":{"H":[]},"dz":{"H":[]},"eA":{"H":[]},"e2":{"H":[]},"aH":{"i":["1"],"f":["1"]},"bG":{"t":["1"]},"bd":{"t":["X"],"i":["X"],"f":["X"]},"cp":{"t":["r"],"i":["r"],"f":["r"]},"dJ":{"t":["r"],"i":["r"],"f":["r"]},"dK":{"t":["r"],"i":["r"],"f":["r"]},"dL":{"t":["r"],"i":["r"],"f":["r"]},"dM":{"t":["r"],"i":["r"],"f":["r"]},"dN":{"t":["r"],"i":["r"],"f":["r"]},"cr":{"t":["r"],"i":["r"],"f":["r"]},"dO":{"t":["r"],"i":["r"],"f":["r"]},"eS":{"H":[]},"cU":{"H":[]},"cT":{"cx":[]},"cQ":{"f":["1"]},"cE":{"i":["1"],"f":["1"]},"cd":{"f":["1"]},"cj":{"i":["1"],"f":["1"]},"cM":{"i":["1"],"f":["1"]},"X":{"P":[]},"db":{"H":[]},"dQ":{"H":[]},"a1":{"H":[]},"bK":{"H":[]},"dv":{"H":[]},"eC":{"H":[]},"ez":{"H":[]},"bM":{"H":[]},"dg":{"H":[]},"dT":{"H":[]},"cv":{"H":[]},"di":{"H":[]},"r":{"P":[]},"ar":{"i":["1"],"f":["1"]},"l":{"z":[],"u":[],"b":[]},"d9":{"z":[],"u":[],"b":[]},"da":{"z":[],"u":[],"b":[]},"bs":{"z":[],"u":[],"b":[]},"b_":{"z":[],"u":[],"b":[]},"b0":{"z":[],"u":[],"b":[]},"ag":{"u":[],"b":[]},"c5":{"z":[],"u":[],"b":[]},"c6":{"t":["ab<P>"],"i":["ab<P>"],"f":["ab<P>"]},"c7":{"ab":["P"]},"dl":{"t":["L"],"i":["L"],"f":["L"]},"eK":{"i":["z"],"f":["z"]},"z":{"u":[],"b":[]},"dn":{"t":["b4"],"i":["b4"],"f":["b4"]},"dp":{"b":[]},"dr":{"z":[],"u":[],"b":[]},"b6":{"t":["u"],"i":["u"],"f":["u"]},"bA":{"z":[],"u":[],"b":[]},"ba":{"h":[]},"dI":{"t":["bc"],"i":["bc"],"f":["bc"]},"a2":{"h":[]},"T":{"i":["u"],"f":["u"]},"u":{"b":[]},"cs":{"t":["u"],"i":["u"],"f":["u"]},"dX":{"t":["be"],"i":["be"],"f":["be"]},"e3":{"z":[],"u":[],"b":[]},"aL":{"b":[]},"e7":{"t":["aL"],"b":[],"i":["aL"],"f":["aL"]},"e8":{"t":["bg"],"i":["bg"],"f":["bg"]},"cw":{"z":[],"u":[],"b":[]},"ee":{"z":[],"u":[],"b":[]},"ef":{"z":[],"u":[],"b":[]},"bN":{"z":[],"u":[],"b":[]},"aO":{"b":[]},"ai":{"b":[]},"eg":{"t":["ai"],"i":["ai"],"f":["ai"]},"eh":{"t":["aO"],"b":[],"i":["aO"],"f":["aO"]},"bj":{"h":[]},"el":{"t":["bi"],"i":["bi"],"f":["bi"]},"ax":{"h":[]},"eE":{"b":[]},"aP":{"a2":[],"h":[]},"bQ":{"b":[]},"bR":{"u":[],"b":[]},"eL":{"t":["G"],"i":["G"],"f":["G"]},"cD":{"ab":["P"]},"eY":{"t":["b5?"],"i":["b5?"],"f":["b5?"]},"cH":{"t":["u"],"i":["u"],"f":["u"]},"fh":{"t":["bh"],"i":["bh"],"f":["bh"]},"fo":{"t":["aN"],"i":["aN"],"f":["aN"]},"bS":{"a9":[]},"ct":{"a9":[]},"cN":{"a9":[]},"fq":{"a9":[]},"fp":{"a9":[]},"cV":{"b7":[]},"dq":{"i":["z"],"f":["z"]},"ab":{"fd":["1"]},"dB":{"i":["bB"],"f":["bB"]},"dR":{"i":["bH"],"f":["bH"]},"bL":{"j":[],"z":[],"u":[],"b":[]},"ed":{"i":["L"],"f":["L"]},"j":{"z":[],"u":[],"b":[]},"em":{"i":["bO"],"f":["bO"]},"dc":{"b":[]},"aE":{"b":[]},"dS":{"b":[]},"e9":{"i":["dD<@,@>"],"f":["dD<@,@>"]},"bv":{"f":["1*"]},"an":{"Q":[]},"ao":{"Q":[]},"x":{"Q":[]},"cl":{"Q":[]},"bE":{"Q":[]},"bF":{"Q":[]},"dY":{"Q":[]},"cy":{"Q":[]},"bw":{"aq":[]},"ch":{"f":["aq*"]},"c2":{"S":[]},"bz":{"S":[],"f":["S*"]},"cz":{"S":[]},"cA":{"S":[]},"cB":{"S":[]},"c1":{"ad":[],"f":["ad*"]},"c3":{"ad":[]},"ca":{"ad":[]},"dj":{"b1":[]},"ds":{"b1":[]},"du":{"b1":[]},"dW":{"b1":[]}}'))
H.nc(v.typeUniverse,JSON.parse('{"a7":1,"dy":1,"U":1,"i":1,"ck":1,"aI":1,"bb":2,"c8":2,"cm":2,"cn":2,"bm":1,"eH":1,"cb":1,"eB":1,"bP":1,"aH":1,"dC":1,"bG":1,"bn":1,"cQ":1,"eb":1,"ec":2,"cF":1,"cd":1,"cj":1,"C":1,"dE":2,"as":2,"cM":1,"cG":1,"df":2,"dh":2,"f":1,"dx":1,"ar":1,"eT":1,"E":1,"cc":1,"bv":1,"an":1,"ao":1,"x":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"}
var t=(function rtii(){var s=H.oi
return{v:s("bs"),t:s("b_"),U:s("i<@>"),h:s("z"),C:s("H"),D:s("h"),Z:s("hn"),s:s("b7"),R:s("bA"),b:s("a7<@>"),T:s("cg"),g:s("ah"),p:s("t<@>"),G:s("v<L*,e4*>"),V:s("v<L*,ea*>"),i:s("v<L*,L*>"),w:s("v<L*,ek*>"),L:s("v<r*,ar<er*>*>"),M:s("v<r*,ar<es*>*>"),W:s("v<r*,ar<ev*>*>"),d:s("v<r*,ar<ey*>*>"),J:s("v<r*,eo*>"),E:s("v<r*,az*>"),a:s("v<r*,r*>"),P:s("aa"),K:s("K"),I:s("ab<P>"),Y:s("bL"),N:s("L"),k:s("j"),f:s("bN"),l:s("cx"),o:s("bk"),x:s("bR"),cB:s("az"),cb:s("X"),z:s("@"),S:s("r"),B:s("b0*"),cj:s("cl*"),c:s("bE*"),F:s("bF*"),A:s("0&*"),_:s("K*"),bw:s("L*"),j:s("ej*"),m:s("cy*"),n:s("en*"),r:s("ep*"),y:s("eq*"),O:s("et*"),q:s("eu*"),u:s("ew*"),Q:s("ex*"),e:s("r*"),bc:s("kE<aa>?"),X:s("K?"),H:s("P")}})();(function constants(){var s=hunkHelpers.makeConstList
C.m=W.b_.prototype
C.f=W.b0.prototype
C.J=W.c5.prototype
C.M=J.a.prototype
C.a=J.a7.prototype
C.N=J.ce.prototype
C.c=J.cf.prototype
C.h=J.cg.prototype
C.d=J.b8.prototype
C.b=J.ap.prototype
C.O=J.ah.prototype
C.v=J.dV.prototype
C.V=P.e1.prototype
C.w=W.cw.prototype
C.l=J.bk.prototype
C.x=W.aP.prototype
C.y=W.bQ.prototype
C.z=new E.bt("Browser.chrome")
C.n=new E.bt("Browser.firefox")
C.o=new E.bt("Browser.edge")
C.A=new E.bt("Browser.other")
C.p=function getTagFallback(o) {
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
C.q=function(hooks) { return hooks; }

C.H=new P.dT()
C.i=new P.iQ()
C.I=new P.iR()
C.e=new P.jh()
C.j=new P.b3(0)
C.K=new P.b3(5e6)
C.L=new P.hq("element",!1,!1,!1)
C.P=s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"])
C.Q=s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.R=s([])
C.r=s([0,0,65498,45055,65535,34815,65534,18431])
C.t=s(["bind","if","ref","repeat","syntax"])
C.k=s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"])
C.S=new E.bI("OperatingSystem.windows")
C.u=new E.bI("OperatingSystem.mac")
C.T=new E.bI("OperatingSystem.linux")
C.U=new E.bI("OperatingSystem.other")
C.W=new P.bT(null,2)})();(function staticFields(){$.le=null
$.al=0
$.kw=null
$.kv=null
$.lz=null
$.lw=null
$.lE=null
$.jy=null
$.jD=null
$.kj=null
$.bU=null
$.d0=null
$.d1=null
$.ke=!1
$.aj=C.e
$.a0=[]
$.aG=null
$.jQ=null
$.kC=null
$.kB=null
$.eZ=P.kH(t.N,t.Z)
$.hc=null
$.kL=null
$.kP=null
$.av=null
$.kV=null
$.l4=null
$.l7=null
$.l6=null
$.iS=null
$.iT=null
$.iU=null
$.l5=null
$.kO=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"oM","lK",function(){return H.ok("_$dart_dartClosure")})
s($,"oY","lL",function(){return H.aw(H.iF({
toString:function(){return"$receiver$"}}))})
s($,"oZ","lM",function(){return H.aw(H.iF({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"p_","lN",function(){return H.aw(H.iF(null))})
s($,"p0","lO",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"p3","lR",function(){return H.aw(H.iF(void 0))})
s($,"p4","lS",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"p2","lQ",function(){return H.aw(H.l2(null))})
s($,"p1","lP",function(){return H.aw(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"p6","lU",function(){return H.aw(H.l2(void 0))})
s($,"p5","lT",function(){return H.aw(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"pk","ko",function(){return P.mQ()})
s($,"pn","lZ",function(){return P.mF("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"pl","lY",function(){return P.kI(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"pd","lX",function(){return Z.ae(0)})
s($,"p7","lV",function(){return Z.ae(511)})
s($,"pf","ak",function(){return Z.ae(1)})
s($,"pe","aX",function(){return Z.ae(2)})
s($,"p9","aW",function(){return Z.ae(4)})
s($,"pg","bq",function(){return Z.ae(8)})
s($,"ph","br",function(){return Z.ae(16)})
s($,"pa","d5",function(){return Z.ae(32)})
s($,"pb","d6",function(){return Z.ae(64)})
s($,"pc","lW",function(){return Z.ae(96)})
s($,"pi","bZ",function(){return Z.ae(128)})
s($,"p8","aV",function(){return Z.ae(256)})
s($,"oK","lJ",function(){return new V.hd()})
s($,"oJ","A",function(){return $.lJ()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cq,ArrayBufferView:H.cq,Float32Array:H.bd,Float64Array:H.bd,Int16Array:H.dJ,Int32Array:H.dK,Int8Array:H.dL,Uint16Array:H.dM,Uint32Array:H.dN,Uint8ClampedArray:H.cr,CanvasPixelArray:H.cr,Uint8Array:H.dO,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.fN,HTMLAnchorElement:W.d9,HTMLAreaElement:W.da,HTMLBaseElement:W.bs,Blob:W.dd,HTMLBodyElement:W.b_,HTMLCanvasElement:W.b0,CDATASection:W.ag,CharacterData:W.ag,Comment:W.ag,ProcessingInstruction:W.ag,Text:W.ag,CSSPerspective:W.h_,CSSCharsetRule:W.G,CSSConditionRule:W.G,CSSFontFaceRule:W.G,CSSGroupingRule:W.G,CSSImportRule:W.G,CSSKeyframeRule:W.G,MozCSSKeyframeRule:W.G,WebKitCSSKeyframeRule:W.G,CSSKeyframesRule:W.G,MozCSSKeyframesRule:W.G,WebKitCSSKeyframesRule:W.G,CSSMediaRule:W.G,CSSNamespaceRule:W.G,CSSPageRule:W.G,CSSRule:W.G,CSSStyleRule:W.G,CSSSupportsRule:W.G,CSSViewportRule:W.G,CSSStyleDeclaration:W.c4,MSStyleCSSProperties:W.c4,CSS2Properties:W.c4,CSSImageValue:W.a5,CSSKeywordValue:W.a5,CSSNumericValue:W.a5,CSSPositionValue:W.a5,CSSResourceValue:W.a5,CSSUnitValue:W.a5,CSSURLImageValue:W.a5,CSSStyleValue:W.a5,CSSMatrixComponent:W.am,CSSRotation:W.am,CSSScale:W.am,CSSSkew:W.am,CSSTranslation:W.am,CSSTransformComponent:W.am,CSSTransformValue:W.h1,CSSUnparsedValue:W.h2,DataTransferItemList:W.h3,HTMLDivElement:W.c5,DOMException:W.h5,ClientRectList:W.c6,DOMRectList:W.c6,DOMRectReadOnly:W.c7,DOMStringList:W.dl,DOMTokenList:W.h6,Element:W.z,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,SubmitEvent:W.h,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.b4,FileList:W.dn,FileWriter:W.dp,HTMLFormElement:W.dr,Gamepad:W.b5,History:W.ho,HTMLCollection:W.b6,HTMLFormControlsCollection:W.b6,HTMLOptionsCollection:W.b6,ImageData:W.b7,HTMLImageElement:W.bA,KeyboardEvent:W.ba,Location:W.hz,MediaList:W.hR,MIDIInputMap:W.hS,MIDIOutputMap:W.hU,MimeType:W.bc,MimeTypeArray:W.dI,PointerEvent:W.a2,MouseEvent:W.a2,DragEvent:W.a2,Document:W.u,DocumentFragment:W.u,HTMLDocument:W.u,ShadowRoot:W.u,XMLDocument:W.u,DocumentType:W.u,Node:W.u,NodeList:W.cs,RadioNodeList:W.cs,Plugin:W.be,PluginArray:W.dX,RTCStatsReport:W.i7,HTMLSelectElement:W.e3,SourceBuffer:W.aL,SourceBufferList:W.e7,SpeechGrammar:W.bg,SpeechGrammarList:W.e8,SpeechRecognitionResult:W.bh,Storage:W.io,CSSStyleSheet:W.aN,StyleSheet:W.aN,HTMLTableElement:W.cw,HTMLTableRowElement:W.ee,HTMLTableSectionElement:W.ef,HTMLTemplateElement:W.bN,TextTrack:W.aO,TextTrackCue:W.ai,VTTCue:W.ai,TextTrackCueList:W.eg,TextTrackList:W.eh,TimeRanges:W.iy,Touch:W.bi,TouchEvent:W.bj,TouchList:W.el,TrackDefaultList:W.iC,CompositionEvent:W.ax,FocusEvent:W.ax,TextEvent:W.ax,UIEvent:W.ax,URL:W.iP,VideoTrackList:W.eE,WheelEvent:W.aP,Window:W.bQ,DOMWindow:W.bQ,Attr:W.bR,CSSRuleList:W.eL,ClientRect:W.cD,DOMRect:W.cD,GamepadList:W.eY,NamedNodeMap:W.cH,MozNamedAttrMap:W.cH,SpeechRecognitionResultList:W.fh,StyleSheetList:W.fo,SVGLength:P.bB,SVGLengthList:P.dB,SVGNumber:P.bH,SVGNumberList:P.dR,SVGPointList:P.i1,SVGScriptElement:P.bL,SVGStringList:P.ed,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.bO,SVGTransformList:P.em,AudioBuffer:P.fR,AudioParamMap:P.fS,AudioTrackList:P.dc,AudioContext:P.aE,webkitAudioContext:P.aE,BaseAudioContext:P.aE,OfflineAudioContext:P.dS,WebGL2RenderingContext:P.e1,SQLResultSetRowList:P.e9})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bG.$nativeSuperclassTag="ArrayBufferView"
H.cI.$nativeSuperclassTag="ArrayBufferView"
H.cJ.$nativeSuperclassTag="ArrayBufferView"
H.bd.$nativeSuperclassTag="ArrayBufferView"
H.cK.$nativeSuperclassTag="ArrayBufferView"
H.cL.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
W.cO.$nativeSuperclassTag="EventTarget"
W.cP.$nativeSuperclassTag="EventTarget"
W.cR.$nativeSuperclassTag="EventTarget"
W.cS.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.lC,[])
else B.lC([])})})()
//# sourceMappingURL=test.dart.js.map
