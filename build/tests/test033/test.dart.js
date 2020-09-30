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
a[c]=function(){a[c]=function(){H.nz(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.jx(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={j9:function j9(){},
lq:function(a,b){if(t.U.b(a))return new H.bS(a,b)
return new H.b2(a,b)},
lj:function(){return new P.dM("No element")},
lN:function(a,b){var s=J.bi(a)
if(typeof s!=="number")return s.X()
H.dH(a,0,s-1,b)},
dH:function(a,b,c,d){if(c-b<=32)H.lM(a,b,c,d)
else H.lL(a,b,c,d)},
lM:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.bd(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a0()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
lL:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.Y(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.Y(a6+a7,2),d=e-h,c=e+h,b=J.bd(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.a0()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a0()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.a0()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a0()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.a0()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.a0()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.a0()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a0()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a0()
if(a4>0){s=a3
a3=a2
a2=s}b.k(a5,g,a)
b.k(a5,e,a1)
b.k(a5,f,a3)
b.k(a5,d,b.h(a5,a6))
b.k(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.B(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.a6()
if(n<0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a0()
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
if(typeof j!=="number")return j.a6()
if(j<0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.a0()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.a0()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a6()
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
H.dH(a5,a6,r-2,a8)
H.dH(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.B(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.B(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a6()
m=q-1
if(n<0){b.k(a5,p,b.h(a5,r))
l=r+1
b.k(a5,r,b.h(a5,q))
b.k(a5,q,o)
r=l}else{b.k(a5,p,b.h(a5,q))
b.k(a5,q,o)}q=m
break}}H.dH(a5,r,q,a8)}else H.dH(a5,r,q,a8)},
H:function H(a){this.a=a},
i:function i(){},
br:function br(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b2:function b2(a,b){this.a=a
this.b=b},
bS:function bS(a,b){this.a=a
this.b=b},
c4:function c4(a,b){this.a=null
this.b=a
this.c=b},
ci:function ci(a,b){this.a=a
this.b=b},
ei:function ei(a,b){this.a=a
this.b=b},
bV:function bV(){},
eb:function eb(){},
bB:function bB(){},
kK:function(a){var s,r=H.kJ(a)
if(r!=null)return r
s="minified:"+a
return s},
nr:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
d:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.Z(a)
if(typeof s!="string")throw H.c(H.aN(a))
return s},
cb:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
dz:function(a){return H.lu(a)},
lu:function(a){var s,r,q
if(a instanceof P.G)return H.a1(H.cL(a),null)
if(J.cK(a)===C.F||t.o.b(a)){s=C.m(a)
if(H.k1(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.k1(q))return q}}return H.a1(H.cL(a),null)},
k1:function(a){var s=a!=="Object"&&a!==""
return s},
k0:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
lE:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.l)(a),++r){q=a[r]
if(!H.cG(q))throw H.c(H.aN(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.b6(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.aN(q))}return H.k0(p)},
lD:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.cG(q))throw H.c(H.aN(q))
if(q<0)throw H.c(H.aN(q))
if(q>65535)return H.lE(a)}return H.k0(a)},
lC:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.b6(s,10))>>>0,56320|s&1023)}throw H.c(P.aD(a,0,1114111,null,null))},
bx:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lB:function(a){var s=H.bx(a).getFullYear()+0
return s},
lz:function(a){var s=H.bx(a).getMonth()+1
return s},
lv:function(a){var s=H.bx(a).getDate()+0
return s},
lw:function(a){var s=H.bx(a).getHours()+0
return s},
ly:function(a){var s=H.bx(a).getMinutes()+0
return s},
lA:function(a){var s=H.bx(a).getSeconds()+0
return s},
lx:function(a){var s=H.bx(a).getMilliseconds()+0
return s},
o:function(a){throw H.c(H.aN(a))},
e:function(a,b){if(a==null)J.bi(a)
throw H.c(H.bI(a,b))},
bI:function(a,b){var s,r,q="index"
if(!H.cG(b))return new P.a2(!0,b,q,null)
s=J.bi(a)
if(!(b<0)){if(typeof s!=="number")return H.o(s)
r=b>=s}else r=!0
if(r)return P.F(b,a,q,null,s)
return P.dA(b,q)},
ng:function(a,b,c){if(a>c)return P.aD(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aD(b,a,c,"end",null)
return new P.a2(!0,b,"end",null)},
aN:function(a){return new P.a2(!0,a,null,null)},
nb:function(a){if(typeof a!="number")throw H.c(H.aN(a))
return a},
c:function(a){var s,r
if(a==null)a=new P.dr()
s=new Error()
s.dartException=a
r=H.nA
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
nA:function(){return J.Z(this.dartException)},
n:function(a){throw H.c(a)},
l:function(a){throw H.c(P.bN(a))},
ar:function(a){var s,r,q,p,o,n
a=H.kG(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.i4(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
i5:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
ka:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jX:function(a,b){return new H.dq(a,b==null?null:b.method)},
ja:function(a,b){var s=b==null,r=s?null:b.method
return new H.da(a,r,s?null:b.receiver)},
fk:function(a){if(a==null)return new H.ht(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bf(a,a.dartException)
return H.n7(a)},
bf:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
n7:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.b6(r,16)&8191)===10)switch(q){case 438:return H.bf(a,H.ja(H.d(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bf(a,H.jX(H.d(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.kN()
o=$.kO()
n=$.kP()
m=$.kQ()
l=$.kT()
k=$.kU()
j=$.kS()
$.kR()
i=$.kW()
h=$.kV()
g=p.aa(s)
if(g!=null)return H.bf(a,H.ja(s,g))
else{g=o.aa(s)
if(g!=null){g.method="call"
return H.bf(a,H.ja(s,g))}else{g=n.aa(s)
if(g==null){g=m.aa(s)
if(g==null){g=l.aa(s)
if(g==null){g=k.aa(s)
if(g==null){g=j.aa(s)
if(g==null){g=m.aa(s)
if(g==null){g=i.aa(s)
if(g==null){g=h.aa(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bf(a,H.jX(s,g))}}return H.bf(a,new H.ea(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cc()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bf(a,new P.a2(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cc()
return a},
jz:function(a){var s
if(a==null)return new H.eW(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.eW(a)},
ni:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
nq:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.m("Unsupported number of arguments for wrapped closure"))},
bH:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nq)
a.$identity=s
return s},
le:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.hP().constructor.prototype):Object.create(new H.bL(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.ag
if(typeof r!=="number")return r.t()
$.ag=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.jM(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.la(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.jM(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
la:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.kB,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.l8:H.l7
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
lb:function(a,b,c,d){var s=H.jL
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
jM:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.ld(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.lb(r,!p,s,b)
if(r===0){p=$.ag
if(typeof p!=="number")return p.t()
$.ag=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.d(H.j1())+";return "+n+"."+H.d(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.ag
if(typeof p!=="number")return p.t()
$.ag=p+1
m+=p
return new Function("return function("+m+"){return this."+H.d(H.j1())+"."+H.d(s)+"("+m+");}")()},
lc:function(a,b,c,d){var s=H.jL,r=H.l9
switch(b?-1:a){case 0:throw H.c(new H.dD("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
ld:function(a,b){var s,r,q,p,o,n,m=H.j1(),l=$.jJ
if(l==null)l=$.jJ=H.jI("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lc(r,!p,s,b)
if(r===1){p="return function(){return this."+H.d(m)+"."+H.d(s)+"(this."+l+");"
o=$.ag
if(typeof o!=="number")return o.t()
$.ag=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.d(m)+"."+H.d(s)+"(this."+l+", "+n+");"
o=$.ag
if(typeof o!=="number")return o.t()
$.ag=o+1
return new Function(p+o+"}")()},
jx:function(a,b,c,d,e,f,g){return H.le(a,b,c,d,!!e,!!f,g)},
l7:function(a,b){return H.f7(v.typeUniverse,H.cL(a.a),b)},
l8:function(a,b){return H.f7(v.typeUniverse,H.cL(a.c),b)},
jL:function(a){return a.a},
l9:function(a){return a.c},
j1:function(){var s=$.jK
return s==null?$.jK=H.jI("self"):s},
jI:function(a){var s,r,q,p=new H.bL("self","target","receiver","name"),o=J.j8(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.j0("Field name "+a+" not found."))},
nz:function(a){throw H.c(new P.d_(a))},
nm:function(a){return v.getIsolateTag(a)},
oC:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nt:function(a){var s,r,q,p,o,n=$.kA.$1(a),m=$.iR[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iV[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.ky.$2(a,n)
if(q!=null){m=$.iR[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iV[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.iX(s)
$.iR[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.iV[n]=s
return s}if(p==="-"){o=H.iX(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kE(a,s)
if(p==="*")throw H.c(P.kb(n))
if(v.leafTags[n]===true){o=H.iX(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kE(a,s)},
kE:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.jC(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
iX:function(a){return J.jC(a,!1,null,!!a.$iq)},
nu:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.iX(s)
else return J.jC(s,c,null,null)},
no:function(){if(!0===$.jA)return
$.jA=!0
H.np()},
np:function(){var s,r,q,p,o,n,m,l
$.iR=Object.create(null)
$.iV=Object.create(null)
H.nn()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.kF.$1(o)
if(n!=null){m=H.nu(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
nn:function(){var s,r,q,p,o,n,m=C.w()
m=H.bG(C.x,H.bG(C.y,H.bG(C.n,H.bG(C.n,H.bG(C.z,H.bG(C.A,H.bG(C.B(C.m),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.kA=new H.iS(p)
$.ky=new H.iT(o)
$.kF=new H.iU(n)},
bG:function(a,b){return a(b)||b},
lm:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.fV("Illegal RegExp pattern ("+String(n)+")",a))},
kH:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
nh:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kG:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kI:function(a,b,c){var s=H.nx(a,b,c)
return s},
nx:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kG(b),'g'),H.nh(c))},
i4:function i4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dq:function dq(a,b){this.a=a
this.b=b},
da:function da(a,b,c){this.a=a
this.b=b
this.c=c},
ea:function ea(a){this.a=a},
ht:function ht(a){this.a=a},
eW:function eW(a){this.a=a
this.b=null},
bk:function bk(){},
hT:function hT(){},
hP:function hP(){},
bL:function bL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dD:function dD(a){this.a=a},
t:function t(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
h1:function h1(a){this.a=a},
h4:function h4(a,b){this.a=a
this.b=b
this.c=null},
ay:function ay(a){this.a=a},
dd:function dd(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iS:function iS(a){this.a=a},
iT:function iT(a){this.a=a},
iU:function iU(a){this.a=a},
h0:function h0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cE:function(a){return a},
at:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bI(b,a))},
ml:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.ng(a,b,c))
return b},
c8:function c8(){},
bu:function bu(){},
b5:function b5(){},
c7:function c7(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
dm:function dm(){},
dn:function dn(){},
c9:function c9(){},
dp:function dp(){},
co:function co(){},
cp:function cp(){},
cq:function cq(){},
cr:function cr(){},
lJ:function(a,b){var s=b.c
return s==null?b.c=H.js(a,b.z,!0):s},
k4:function(a,b){var s=b.c
return s==null?b.c=H.cB(a,"jP",[b.z]):s},
k5:function(a){var s=a.y
if(s===6||s===7||s===8)return H.k5(a.z)
return s===11||s===12},
lI:function(a){return a.cy},
nj:function(a){return H.jt(v.typeUniverse,a,!1)},
aM:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aM(a,s,a0,a1)
if(r===s)return b
return H.kp(a,r,!0)
case 7:s=b.z
r=H.aM(a,s,a0,a1)
if(r===s)return b
return H.js(a,r,!0)
case 8:s=b.z
r=H.aM(a,s,a0,a1)
if(r===s)return b
return H.ko(a,r,!0)
case 9:q=b.Q
p=H.cJ(a,q,a0,a1)
if(p===q)return b
return H.cB(a,b.z,p)
case 10:o=b.z
n=H.aM(a,o,a0,a1)
m=b.Q
l=H.cJ(a,m,a0,a1)
if(n===o&&l===m)return b
return H.jq(a,n,l)
case 11:k=b.z
j=H.aM(a,k,a0,a1)
i=b.Q
h=H.n4(a,i,a0,a1)
if(j===k&&h===i)return b
return H.kn(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.cJ(a,g,a0,a1)
o=b.z
n=H.aM(a,o,a0,a1)
if(f===g&&n===o)return b
return H.jr(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.fn("Attempted to substitute unexpected RTI kind "+c))}},
cJ:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aM(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
n5:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aM(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
n4:function(a,b,c,d){var s,r=b.a,q=H.cJ(a,r,c,d),p=b.b,o=H.cJ(a,p,c,d),n=b.c,m=H.n5(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.ez()
s.a=q
s.b=o
s.c=m
return s},
oE:function(a,b){a[v.arrayRti]=b
return a},
nc:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.kB(s)
return a.$S()}return null},
kC:function(a,b){var s
if(H.k5(b))if(a instanceof H.bk){s=H.nc(a)
if(s!=null)return s}return H.cL(a)},
cL:function(a){var s
if(a instanceof P.G){s=a.$ti
return s!=null?s:H.ju(a)}if(Array.isArray(a))return H.mh(a)
return H.ju(J.cK(a))},
mh:function(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
mr:function(a){var s=a.$ti
return s!=null?s:H.ju(a)},
ju:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.ms(a,s)},
ms:function(a,b){var s=a instanceof H.bk?a.__proto__.__proto__.constructor:b,r=H.mf(v.typeUniverse,s.name)
b.$ccache=r
return r},
kB:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.jt(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
mq:function(a){var s,r,q=this,p=t.K
if(q===p)return H.cF(q,a,H.mw)
if(!H.au(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.cF(q,a,H.mz)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.cG
else if(s===t.d||s===t.H)r=H.mv
else if(s===t.N)r=H.mx
else r=s===t.v?H.ku:null
if(r!=null)return H.cF(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.ns)){q.r="$i"+p
return H.cF(q,a,H.my)}}else if(p===7)return H.cF(q,a,H.mo)
return H.cF(q,a,H.mm)},
cF:function(a,b,c){a.b=c
return a.b(b)},
mp:function(a){var s,r,q=this
if(!H.au(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.mk
else if(q===t.K)r=H.mi
else r=H.mn
q.a=r
return q.a(a)},
mY:function(a){var s,r=a.y
if(!H.au(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
mm:function(a){var s=this
if(a==null)return H.mY(s)
return H.L(v.typeUniverse,H.kC(a,s),null,s,null)},
mo:function(a){if(a==null)return!0
return this.z.b(a)},
my:function(a){var s=this,r=s.r
if(a instanceof P.G)return!!a[r]
return!!J.cK(a)[r]},
oB:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.ks(a,s)},
mn:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.ks(a,s)},
ks:function(a,b){throw H.c(H.m5(H.kh(a,H.kC(a,b),H.a1(b,null))))},
kh:function(a,b,c){var s=P.fP(a),r=H.a1(b==null?H.cL(a):b,null)
return s+": type '"+H.d(r)+"' is not a subtype of type '"+H.d(c)+"'"},
m5:function(a){return new H.cz("TypeError: "+a)},
U:function(a,b){return new H.cz("TypeError: "+H.kh(a,null,b))},
mw:function(a){return a!=null},
mi:function(a){return a},
mz:function(a){return!0},
mk:function(a){return a},
ku:function(a){return!0===a||!1===a},
on:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.U(a,"bool"))},
op:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.U(a,"bool"))},
oo:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.U(a,"bool?"))},
oq:function(a){if(typeof a=="number")return a
throw H.c(H.U(a,"double"))},
os:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"double"))},
or:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"double?"))},
cG:function(a){return typeof a=="number"&&Math.floor(a)===a},
ot:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.U(a,"int"))},
ov:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.U(a,"int"))},
ou:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.U(a,"int?"))},
mv:function(a){return typeof a=="number"},
ow:function(a){if(typeof a=="number")return a
throw H.c(H.U(a,"num"))},
oy:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"num"))},
ox:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"num?"))},
mx:function(a){return typeof a=="string"},
oz:function(a){if(typeof a=="string")return a
throw H.c(H.U(a,"String"))},
mj:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.U(a,"String"))},
oA:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.U(a,"String?"))},
n0:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.b.t(r,H.a1(a[q],b))
return s},
kt:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=[]
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.X,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.e(a6,i)
l=C.b.t(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.b.t(" extends ",H.a1(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.a1(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.b.t(a3,H.a1(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.b.t(a3,H.a1(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.jG(H.a1(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.d(a1)},
a1:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.a1(a.z,b)
return s}if(l===7){r=a.z
s=H.a1(r,b)
q=r.y
return J.jG(q===11||q===12?C.b.t("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.d(H.a1(a.z,b))+">"
if(l===9){p=H.n6(a.z)
o=a.Q
return o.length!==0?p+("<"+H.n0(o,b)+">"):p}if(l===11)return H.kt(a,b,null)
if(l===12)return H.kt(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.e(b,n)
return b[n]}return"?"},
n6:function(a){var s,r=H.kJ(a)
if(r!=null)return r
s="minified:"+a
return s},
kq:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
mf:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.jt(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cC(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cB(a,b,q)
n[b]=o
return o}else return m},
md:function(a,b){return H.kr(a.tR,b)},
mc:function(a,b){return H.kr(a.eT,b)},
jt:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.km(H.kk(a,null,b,c))
r.set(b,s)
return s},
f7:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.km(H.kk(a,b,c,!0))
q.set(c,r)
return r},
me:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.jq(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aL:function(a,b){b.a=H.mp
b.b=H.mq
return b},
cC:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.a9(null,null)
s.y=b
s.cy=c
r=H.aL(a,s)
a.eC.set(c,r)
return r},
kp:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.ma(a,b,r,c)
a.eC.set(r,s)
return s},
ma:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.au(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.a9(null,null)
q.y=6
q.z=b
q.cy=c
return H.aL(a,q)},
js:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.m9(a,b,r,c)
a.eC.set(r,s)
return s},
m9:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.au(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.iW(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.iW(q.z))return q
else return H.lJ(a,b)}}p=new H.a9(null,null)
p.y=7
p.z=b
p.cy=c
return H.aL(a,p)},
ko:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.m7(a,b,r,c)
a.eC.set(r,s)
return s},
m7:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.au(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cB(a,"jP",[b])
else if(b===t.P||b===t.T)return t.k}q=new H.a9(null,null)
q.y=8
q.z=b
q.cy=c
return H.aL(a,q)},
mb:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.a9(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aL(a,s)
a.eC.set(q,r)
return r},
f6:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
m6:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cB:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.f6(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.a9(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aL(a,r)
a.eC.set(p,q)
return q},
jq:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.f6(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.a9(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aL(a,o)
a.eC.set(q,n)
return n},
kn:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.f6(m)
if(j>0){s=l>0?",":""
r=H.f6(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.m6(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.a9(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aL(a,o)
a.eC.set(q,r)
return r},
jr:function(a,b,c,d){var s,r=b.cy+("<"+H.f6(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.m8(a,b,c,r,d)
a.eC.set(r,s)
return s},
m8:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aM(a,b,r,0)
m=H.cJ(a,c,r,0)
return H.jr(a,n,m,c!==m)}}l=new H.a9(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aL(a,l)},
kk:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
km:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.m_(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.kl(a,r,g,f,!1)
else if(q===46)r=H.kl(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.aK(a.u,a.e,f.pop()))
break
case 94:f.push(H.mb(a.u,f.pop()))
break
case 35:f.push(H.cC(a.u,5,"#"))
break
case 64:f.push(H.cC(a.u,2,"@"))
break
case 126:f.push(H.cC(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.jp(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.cB(p,n,o))
else{m=H.aK(p,a.e,n)
switch(m.y){case 11:f.push(H.jr(p,m,o,a.n))
break
default:f.push(H.jq(p,m,o))
break}}break
case 38:H.m0(a,f)
break
case 42:l=a.u
f.push(H.kp(l,H.aK(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.js(l,H.aK(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.ko(l,H.aK(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.ez()
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
H.jp(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.kn(p,H.aK(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.jp(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.m2(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.aK(a.u,a.e,h)},
m_:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
kl:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.kq(s,o.z)[p]
if(n==null)H.n('No "'+p+'" in "'+H.lI(o)+'"')
d.push(H.f7(s,o,n))}else d.push(p)
return m},
m0:function(a,b){var s=b.pop()
if(0===s){b.push(H.cC(a.u,1,"0&"))
return}if(1===s){b.push(H.cC(a.u,4,"1&"))
return}throw H.c(P.fn("Unexpected extended operation "+H.d(s)))},
aK:function(a,b,c){if(typeof c=="string")return H.cB(a,c,a.sEA)
else if(typeof c=="number")return H.m1(a,b,c)
else return c},
jp:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aK(a,b,c[s])},
m2:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aK(a,b,c[s])},
m1:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.fn("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.fn("Bad index "+c+" for "+b.i(0)))},
L:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.au(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.au(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.L(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.L(a,b.z,c,d,e)
if(p===6){s=d.z
return H.L(a,b,c,s,e)}if(r===8){if(!H.L(a,b.z,c,d,e))return!1
return H.L(a,H.k4(a,b),c,d,e)}if(r===7){s=H.L(a,b.z,c,d,e)
return s}if(p===8){if(H.L(a,b,c,d.z,e))return!0
return H.L(a,b,c,H.k4(a,d),e)}if(p===7){s=H.L(a,b,c,d.z,e)
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
if(!H.L(a,k,c,j,e)||!H.L(a,j,e,k,c))return!1}return H.kv(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.kv(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.mu(a,b,c,d,e)}return!1},
kv:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
mu:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.L(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.kq(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.L(a,H.f7(a,b,l[p]),c,r[p],e))return!1
return!0},
iW:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.au(a))if(r!==7)if(!(r===6&&H.iW(a.z)))s=r===8&&H.iW(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
ns:function(a){var s
if(!H.au(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
au:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
kr:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
a9:function a9(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
ez:function ez(){this.c=this.b=this.a=null},
eu:function eu(){},
cz:function cz(a){this.a=a},
kJ:function(a){return v.mangledGlobalNames[a]},
nv:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jC:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fi:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.jA==null){H.no()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.c(P.kb("Return interceptor for "+H.d(s(a,o))))}q=a.constructor
p=q==null?null:q[J.jR()]
if(p!=null)return p
p=H.nt(a)
if(p!=null)return p
if(typeof a=="function")return C.H
s=Object.getPrototypeOf(a)
if(s==null)return C.q
if(s===Object.prototype)return C.q
if(typeof q=="function"){Object.defineProperty(q,J.jR(),{value:C.j,enumerable:false,writable:true,configurable:true})
return C.j}return C.j},
jR:function(){var s=$.ki
return s==null?$.ki=v.getIsolateTag("_$dart_js"):s},
lk:function(a){if(!H.cG(a))throw H.c(P.jH(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.aD(a,0,4294967295,"length",null))
return J.j8(new Array(a))},
jQ:function(a){if(!H.cG(a)||a<0)throw H.c(P.j0("Length must be a non-negative integer: "+H.d(a)))
return new Array(a)},
j8:function(a){a.fixed$length=Array
return a},
ll:function(a,b){return J.cP(a,b)},
cK:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c_.prototype
return J.bZ.prototype}if(typeof a=="string")return J.ax.prototype
if(a==null)return J.c0.prototype
if(typeof a=="boolean")return J.h_.prototype
if(a.constructor==Array)return J.a5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ac.prototype
return a}if(a instanceof P.G)return a
return J.fi(a)},
nk:function(a){if(typeof a=="number")return J.b_.prototype
if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(a.constructor==Array)return J.a5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ac.prototype
return a}if(a instanceof P.G)return a
return J.fi(a)},
bd:function(a){if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(a.constructor==Array)return J.a5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ac.prototype
return a}if(a instanceof P.G)return a
return J.fi(a)},
jy:function(a){if(a==null)return a
if(a.constructor==Array)return J.a5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ac.prototype
return a}if(a instanceof P.G)return a
return J.fi(a)},
nl:function(a){if(typeof a=="number")return J.b_.prototype
if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(!(a instanceof P.G))return J.bA.prototype
return a},
be:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ac.prototype
return a}if(a instanceof P.G)return a
return J.fi(a)},
jG:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.nk(a).t(a,b)},
B:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cK(a).n(a,b)},
cO:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nr(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bd(a).h(a,b)},
l0:function(a,b,c){return J.be(a).eX(a,b,c)},
l1:function(a,b,c,d){return J.be(a).fc(a,b,c,d)},
cP:function(a,b){return J.nl(a).aI(a,b)},
iZ:function(a,b){return J.bd(a).K(a,b)},
j_:function(a,b){return J.jy(a).A(a,b)},
l2:function(a,b){return J.jy(a).C(a,b)},
l3:function(a){return J.be(a).gcK(a)},
l4:function(a){return J.be(a).gcM(a)},
W:function(a){return J.cK(a).gR(a)},
bh:function(a){return J.jy(a).gT(a)},
bi:function(a){return J.bd(a).gj(a)},
l5:function(a,b){return J.be(a).fX(a,b)},
Z:function(a){return J.cK(a).i(a)},
a:function a(){},
h_:function h_(){},
c0:function c0(){},
b0:function b0(){},
dw:function dw(){},
bA:function bA(){},
ac:function ac(){},
a5:function a5(){},
d9:function d9(){},
Q:function Q(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b_:function b_(){},
c_:function c_(){},
bZ:function bZ(){},
ax:function ax(){}},P={
lS:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.n8()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bH(new P.ix(q),1)).observe(s,{childList:true})
return new P.iw(q,s,r)}else if(self.setImmediate!=null)return P.n9()
return P.na()},
lT:function(a){self.scheduleImmediate(H.bH(new P.iy(a),0))},
lU:function(a){self.setImmediate(H.bH(new P.iz(a),0))},
lV:function(a){P.jj(C.i,a)},
jj:function(a,b){var s=C.c.Y(a.a,1000)
return P.m3(s<0?0:s,b)},
k9:function(a,b){var s=C.c.Y(a.a,1000)
return P.m4(s<0?0:s,b)},
m3:function(a,b){var s=new P.cy()
s.dH(a,b)
return s},
m4:function(a,b){var s=new P.cy()
s.dI(a,b)
return s},
ol:function(a){return new P.bD(a,1)},
lW:function(){return C.N},
lX:function(a){return new P.bD(a,3)},
mB:function(a){return new P.cv(a)},
mX:function(){var s,r
for(s=$.bF;s!=null;s=$.bF){$.cI=null
r=s.b
$.bF=r
if(r==null)$.cH=null
s.a.$0()}},
n3:function(){$.jv=!0
try{P.mX()}finally{$.cI=null
$.jv=!1
if($.bF!=null)$.jF().$1(P.kz())}},
n1:function(a){var s=new P.ej(a),r=$.cH
if(r==null){$.bF=$.cH=s
if(!$.jv)$.jF().$1(P.kz())}else $.cH=r.b=s},
n2:function(a){var s,r,q,p=$.bF
if(p==null){P.n1(a)
$.cI=$.cH
return}s=new P.ej(a)
r=$.cI
if(r==null){s.b=p
$.bF=$.cI=s}else{q=r.b
s.b=q
$.cI=r.b=s
if(q==null)$.cH=s}},
k8:function(a,b){var s=$.ae
if(s===C.e)return P.jj(a,b)
return P.jj(a,s.fg(b))},
lP:function(a,b){var s=$.ae
if(s===C.e)return P.k9(a,b)
return P.k9(a,s.cH(b,t.Y))},
kw:function(a,b,c,d,e){P.n2(new P.iP(d,e))},
mZ:function(a,b,c,d){var s,r=$.ae
if(r===c)return d.$0()
$.ae=c
s=r
try{r=d.$0()
return r}finally{$.ae=s}},
n_:function(a,b,c,d,e){var s,r=$.ae
if(r===c)return d.$1(e)
$.ae=c
s=r
try{r=d.$1(e)
return r}finally{$.ae=s}},
ix:function ix(a){this.a=a},
iw:function iw(a,b,c){this.a=a
this.b=b
this.c=c},
iy:function iy(a){this.a=a},
iz:function iz(a){this.a=a},
cy:function cy(){this.c=0},
iI:function iI(a,b){this.a=a
this.b=b},
iH:function iH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bD:function bD(a,b){this.a=a
this.b=b},
bE:function bE(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cv:function cv(a){this.a=a},
ej:function ej(a){this.a=a
this.b=null},
dO:function dO(){},
dP:function dP(){},
cd:function cd(){},
iK:function iK(){},
iP:function iP(a,b){this.a=a
this.b=b},
iE:function iE(){},
iF:function iF(a,b){this.a=a
this.b=b},
iG:function iG(a,b,c){this.a=a
this.b=b
this.c=c},
lp:function(a,b,c){return H.ni(a,new H.t(b.al("@<0>").cj(c).al("t<1,2>")))},
lo:function(a,b){return new H.t(a.al("@<0>").cj(b).al("t<1,2>"))},
jS:function(a){return new P.ck(a.al("ck<0>"))},
jo:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
lZ:function(a,b){var s=new P.cl(a,b)
s.c=a.e
return s},
li:function(a,b,c){var s,r
if(P.jw(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.Y.push(a)
try{P.mA(a,s)}finally{if(0>=$.Y.length)return H.e($.Y,-1)
$.Y.pop()}r=P.k6(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
j7:function(a,b,c){var s,r
if(P.jw(a))return b+"..."+c
s=new P.b9(b)
$.Y.push(a)
try{r=s
r.a=P.k6(r.a,a,", ")}finally{if(0>=$.Y.length)return H.e($.Y,-1)
$.Y.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jw:function(a){var s,r
for(s=$.Y.length,r=0;r<s;++r)if(a===$.Y[r])return!0
return!1},
mA:function(a,b){var s,r,q,p,o,n,m,l=a.gT(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.u())return
s=H.d(l.gI(l))
b.push(s)
k+=s.length+2;++j}if(!l.u()){if(j<=5)return
if(0>=b.length)return H.e(b,-1)
r=b.pop()
if(0>=b.length)return H.e(b,-1)
q=b.pop()}else{p=l.gI(l);++j
if(!l.u()){if(j<=4){b.push(H.d(p))
return}r=H.d(p)
if(0>=b.length)return H.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gI(l);++j
for(;l.u();p=o,o=n){n=l.gI(l);++j
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
jT:function(a){var s,r={}
if(P.jw(a))return"{...}"
s=new P.b9("")
try{$.Y.push(a)
s.a+="{"
r.a=!0
J.l2(a,new P.h7(r,s))
s.a+="}"}finally{if(0>=$.Y.length)return H.e($.Y,-1)
$.Y.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
ck:function ck(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iD:function iD(a){this.a=a
this.c=this.b=null},
cl:function cl(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bY:function bY(){},
c2:function c2(){},
z:function z(){},
df:function df(){},
h7:function h7(a,b){this.a=a
this.b=b},
an:function an(){},
cs:function cs(){},
cm:function cm(){},
cW:function cW(){},
cZ:function cZ(){},
fL:function fL(){},
ig:function ig(){},
ih:function ih(){},
iJ:function iJ(a){this.b=0
this.c=a},
lh:function(a){if(a instanceof H.bk)return a.i(0)
return"Instance of '"+H.d(H.dz(a))+"'"},
jb:function(a,b,c){var s,r=c?J.jQ(a):J.lk(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
jc:function(a,b){var s,r=[]
for(s=J.bh(a);s.u();)r.push(s.gI(s))
if(b)return r
return J.j8(r)},
ji:function(a){var s,r=a,q=r.length,p=P.jg(0,null,q)
if(typeof p!=="number")return p.a6()
s=p<q
return H.lD(s?r.slice(0,p):r)},
lF:function(a){return new H.h0(a,H.lm(a,!1,!0,!1,!1,!1))},
k6:function(a,b,c){var s=J.bh(b)
if(!s.u())return a
if(c.length===0){do a+=H.d(s.gI(s))
while(s.u())}else{a+=H.d(s.gI(s))
for(;s.u();)a=a+c+H.d(s.gI(s))}return a},
mg:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.o){s=$.l_().b
s=s.test(b)}else s=!1
if(s)return b
r=C.D.fk(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.e(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.lC(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
lf:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
lg:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d0:function(a){if(a>=10)return""+a
return"0"+a},
jO:function(a){return new P.aV(1000*a)},
fP:function(a){if(typeof a=="number"||H.ku(a)||null==a)return J.Z(a)
if(typeof a=="string")return JSON.stringify(a)
return P.lh(a)},
fn:function(a){return new P.cS(a)},
j0:function(a){return new P.a2(!1,null,null,a)},
jH:function(a,b,c){return new P.a2(!0,a,b,c)},
l6:function(a,b){if(a==null)throw H.c(new P.a2(!1,null,b,"Must not be null"))
return a},
dA:function(a,b){return new P.by(null,null,!0,a,b,"Value not in range")},
aD:function(a,b,c,d,e){return new P.by(b,c,!0,a,d,"Invalid value")},
jg:function(a,b,c){var s
if(typeof c!=="number")return H.o(c)
s=a>c
if(s)throw H.c(P.aD(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
s=b>c}else s=!0
if(s)throw H.c(P.aD(b,a,c,"end",null))
return b}return c},
k2:function(a,b){if(a<0)throw H.c(P.aD(a,0,null,b,null))
return a},
F:function(a,b,c,d,e){var s=e==null?J.bi(b):e
return new P.d7(s,!0,a,c,"Index out of range")},
u:function(a){return new P.ec(a)},
kb:function(a){return new P.e9(a)},
bN:function(a){return new P.cX(a)},
m:function(a){return new P.ew(a)},
jE:function(a){H.nv(a)},
bc:function bc(){},
a4:function a4(a,b){this.a=a
this.b=b},
V:function V(){},
aV:function aV(a){this.a=a},
fI:function fI(){},
fJ:function fJ(){},
E:function E(){},
cS:function cS(a){this.a=a},
dr:function dr(){},
a2:function a2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
by:function by(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
d7:function d7(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ec:function ec(a){this.a=a},
e9:function e9(a){this.a=a},
dM:function dM(a){this.a=a},
cX:function cX(a){this.a=a},
du:function du(){},
cc:function cc(){},
d_:function d_(a){this.a=a},
ew:function ew(a){this.a=a},
fV:function fV(a,b){this.a=a
this.b=b},
p:function p(){},
f:function f(){},
d8:function d8(){},
am:function am(){},
de:function de(){},
a7:function a7(){},
M:function M(){},
G:function G(){},
J:function J(){},
b9:function b9(a){this.a=a},
nf:function(a){var s
if(t.s.b(a)){s=J.l4(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.cA(a.data,a.height,a.width)},
ne:function(a){if(a instanceof P.cA)return{data:a.a,height:a.b,width:a.c}
return a},
aO:function(a){var s,r,q,p,o
if(a==null)return null
s=P.lo(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.l)(r),++p){o=r[p]
s.k(0,o,a[o])}return s},
nd:function(a){var s={}
a.C(0,new P.iQ(s))
return s},
cA:function cA(a,b,c){this.a=a
this.b=b
this.c=c},
iQ:function iQ(a){this.a=a},
d4:function d4(a,b){this.a=a
this.b=b},
fT:function fT(){},
fU:function fU(){},
iC:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lY:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
eP:function eP(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bq:function bq(){},
dc:function dc(){},
bv:function bv(){},
ds:function ds(){},
hw:function hw(){},
dQ:function dQ(){},
j:function j(){},
bz:function bz(){},
dX:function dX(){},
eD:function eD(){},
eE:function eE(){},
eL:function eL(){},
eM:function eM(){},
eY:function eY(){},
eZ:function eZ(){},
f4:function f4(){},
f5:function f5(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(a){this.a=a},
cT:function cT(){},
av:function av(){},
dt:function dt(){},
ek:function ek(){},
dC:function dC(){},
dK:function dK(){},
eU:function eU(){},
eV:function eV(){}},W={
j3:function(){var s=document.createElement("canvas")
return s},
fK:function(a){return"wheel"},
iB:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kj:function(a,b,c,d){var s=W.iB(W.iB(W.iB(W.iB(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
P:function(a,b,c,d){var s=W.kx(new W.iA(c),t.D)
if(s!=null&&!0)J.l1(a,b,s,!1)
return new W.ev(a,b,s,!1)},
kx:function(a,b){var s=$.ae
if(s===C.e)return a
return s.cH(a,b)},
k:function k(){},
fl:function fl(){},
cQ:function cQ(){},
cR:function cR(){},
cU:function cU(){},
aT:function aT(){},
ab:function ab(){},
fA:function fA(){},
D:function D(){},
bP:function bP(){},
fB:function fB(){},
a3:function a3(){},
ah:function ah(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(){},
fG:function fG(){},
bQ:function bQ(){},
bR:function bR(){},
d1:function d1(){},
fH:function fH(){},
em:function em(a,b){this.a=a
this.b=b},
I:function I(){},
h:function h(){},
b:function b(){},
aW:function aW(){},
d2:function d2(){},
d3:function d3(){},
d5:function d5(){},
aX:function aX(){},
fY:function fY(){},
aY:function aY(){},
aZ:function aZ(){},
bp:function bp(){},
b1:function b1(){},
h5:function h5(){},
hn:function hn(){},
ho:function ho(){},
hp:function hp(a){this.a=a},
hq:function hq(){},
hr:function hr(a){this.a=a},
b4:function b4(){},
di:function di(){},
a_:function a_(){},
el:function el(a){this.a=a},
v:function v(){},
ca:function ca(){},
b6:function b6(){},
dx:function dx(){},
hC:function hC(){},
hD:function hD(a){this.a=a},
dE:function dE(){},
aF:function aF(){},
dI:function dI(){},
b7:function b7(){},
dJ:function dJ(){},
b8:function b8(){},
hQ:function hQ(){},
hR:function hR(a){this.a=a},
aG:function aG(){},
aH:function aH(){},
ad:function ad(){},
dR:function dR(){},
dS:function dS(){},
i_:function i_(){},
ba:function ba(){},
bb:function bb(){},
dW:function dW(){},
i2:function i2(){},
as:function as(){},
ie:function ie(){},
ef:function ef(){},
aJ:function aJ(){},
bC:function bC(){},
en:function en(){},
cj:function cj(){},
eA:function eA(){},
cn:function cn(){},
eT:function eT(){},
f_:function f_(){},
j5:function j5(a,b){this.a=a
this.$ti=b},
ev:function ev(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iA:function iA(a){this.a=a},
jn:function jn(a){this.$ti=a},
C:function C(){},
bW:function bW(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
ex:function ex(){},
ey:function ey(){},
eB:function eB(){},
eC:function eC(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eN:function eN(){},
eO:function eO(){},
eQ:function eQ(){},
ct:function ct(){},
cu:function cu(){},
eR:function eR(){},
eS:function eS(){},
eX:function eX(){},
f0:function f0(){},
f1:function f1(){},
cw:function cw(){},
cx:function cx(){},
f2:function f2(){},
f3:function f3(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){}},K={
T:function(a){var s=new K.hF()
s.dB(a)
return s},
fm:function fm(){},
d6:function d6(){},
aA:function aA(){this.a=null},
hF:function hF(){this.a=null},
kD:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="testCanvas",b1=null,b2="modifiers",b3=V.lK("Test 033"),b4=W.j3()
b4.className="pageLargeCanvas"
b4.id=b0
b3.a.appendChild(b4)
b3.cC(["Test of a Stereoscopic scene."])
b3.cC(["\xab[Back to Tests|../]"])
s=document.getElementById(b0)
if(s==null)H.n(P.m("Failed to find an element with the identifier, testCanvas."))
r=E.lO(s,!0,!0,!0,!1)
q=F.jh()
F.cD(q,b1,b1,1,1,1,0,0,1)
F.cD(q,b1,b1,1,1,0,1,0,3)
F.cD(q,b1,b1,1,1,0,0,1,2)
F.cD(q,b1,b1,1,1,-1,0,0,0)
F.cD(q,b1,b1,1,1,0,-1,0,0)
F.cD(q,b1,b1,1,1,0,0,-1,3)
q.ao()
p=E.fM(q)
o=E.fM(b1)
for(n=-1.6;n<=1.7;n+=0.8)for(m=-1.6;m<=1.7;m+=0.8)for(l=-1.6;l<=1.7;l+=0.8){k=new V.az(1,0,0,n,0,1,0,m,0,0,1,l,0,0,0,1).q(0,new V.az(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
j=E.fM(b1)
b3=new U.bm()
b3.sL(0,k)
j.sd9(b3)
b3=j.y
if(b3.aS([p])){i=b3.a
h=i.length
i.push(p)
b3=b3.c
if(b3!=null)b3.$2(h,[p])}b3=o.y
if(b3.aS([j])){i=b3.a
h=i.length
i.push(j)
b3=b3.c
if(b3!=null)b3.$2(h,[j])}}g=r.f.d6("../resources/diceColor")
f=new O.dg()
b3=O.fx()
f.e=b3
b3.aL(f.ge8(),f.gea())
b3=new O.ao(f,"emission")
b3.c=new A.R(!1,!1,!1)
b3.f=new V.K(0,0,0)
f.f=b3
b3=new O.ao(f,"ambient")
b3.c=new A.R(!1,!1,!1)
b3.f=new V.K(0,0,0)
f.r=b3
b3=new O.ao(f,"diffuse")
b3.c=new A.R(!1,!1,!1)
b3.f=new V.K(0,0,0)
f.x=b3
b3=new O.ao(f,"invDiffuse")
b3.c=new A.R(!1,!1,!1)
b3.f=new V.K(0,0,0)
f.y=b3
b3=new O.he(f,"specular")
b3.c=new A.R(!1,!1,!1)
b3.f=new V.K(0,0,0)
b3.ch=100
f.z=b3
b3=new O.ha(f,"bump")
b3.c=new A.R(!1,!1,!1)
f.Q=b3
f.ch=null
b3=new O.ao(f,"reflect")
b3.c=new A.R(!1,!1,!1)
b3.f=new V.K(0,0,0)
f.cx=b3
b3=new O.hd(f,"refract")
b3.c=new A.R(!1,!1,!1)
b3.f=new V.K(0,0,0)
b3.ch=1
f.cy=b3
b3=new O.h9(f,"alpha")
b3.c=new A.R(!1,!1,!1)
b3.f=1
f.db=b3
b3=new D.c1()
b3.bg()
b3.e=[]
b3.f=[]
b3.r=[]
b3.x=[]
b3.z=b3.y=null
b3.c5(b3.ge4(),b3.geH(),b3.geL())
f.dx=b3
i=new O.hc()
i.b=new V.aw(0,0,0,0)
i.c=1
i.d=10
i.e=!1
f.dy=i
i=b3.y
b3=i==null?b3.y=D.y():i
b3.l(0,f.geZ())
b3=f.dx
i=b3.z
b3=i==null?b3.z=D.y():i
b3.l(0,f.gaD())
f.fr=null
b3=f.dx
i=U.cY(V.jV(-1,-1,-1,b1))
b3.l(0,D.jN(new V.K(1,0.9,0.9),i))
b3=f.dx
i=U.cY(V.jV(1,1,2,b1))
b3.l(0,D.jN(new V.K(0.2,0.2,0.35),i))
b3=f.r
b3.saH(0,new V.K(0.2,0.2,0.2))
f.r.sb1(g)
b3=f.x
b3.saH(0,new V.K(0.8,0.8,0.8))
f.x.sb1(g)
b3=f.z
b3.saH(0,new V.K(0.7,0.7,0.7))
b3=f.z
b3.bz(new A.R(!0,!1,b3.c.c))
b3.cw(10)
f.Q.sb1(r.f.d6("../resources/diceBumpMap"))
e=U.j6(b1)
b3=r.x
i=new U.cg()
d=U.j4()
d.sc3(0,!0)
d.sbW(6.283185307179586)
d.sbY(0)
d.sa4(0,0)
d.sbX(100)
d.sM(0)
d.sbI(0.5)
i.b=d
c=i.gaA()
d.gm().l(0,c)
d=U.j4()
d.sc3(0,!0)
d.sbW(6.283185307179586)
d.sbY(0)
d.sa4(0,0)
d.sbX(100)
d.sM(0)
d.sbI(0.5)
i.c=d
d.gm().l(0,c)
i.d=null
i.r=i.f=i.e=!1
i.y=i.x=2.5
i.Q=4
i.ch=i.cx=!1
i.db=i.cy=0
i.dx=null
i.dy=0
i.fx=i.fr=null
b=new X.a6(!1,!1,!1)
a=i.d
i.d=b
d=new D.r(b2,a,b)
d.b=!0
i.G(d)
d=i.f
if(d!==!1){i.f=!1
d=new D.r("invertX",d,!1)
d.b=!0
i.G(d)}d=i.r
if(d!==!1){i.r=!1
d=new D.r("invertY",d,!1)
d.b=!0
i.G(d)}i.aU(b3)
e.l(0,i)
b3=r.x
i=new U.cf()
d=U.j4()
d.sc3(0,!0)
d.sbW(6.283185307179586)
d.sbY(0)
d.sa4(0,0)
d.sbX(100)
d.sM(0)
d.sbI(0.2)
i.b=d
d.gm().l(0,i.gaA())
i.c=null
i.d=!1
i.e=2.5
i.r=4
i.x=i.y=!1
i.z=0
i.Q=null
i.ch=0
i.cy=i.cx=null
b=new X.a6(!0,!1,!1)
a=i.c
i.c=b
d=new D.r(b2,a,b)
d.b=!0
i.G(d)
i.aU(b3)
e.l(0,i)
b3=r.x
i=new U.ch()
i.c=0.01
i.e=i.d=0
b=new X.a6(!1,!1,!1)
i.b=b
d=new D.r(b2,b1,b)
d.b=!0
i.G(d)
i.aU(b3)
e.l(0,i)
e.l(0,U.cY(V.je(0,0,6)))
a0=X.fX(b1)
if(a0.b){a0.b=!1
b3=new D.r("clearColor",!0,!1)
b3.b=!0
a0.ad(b3)}b3=r.f.d7("../resources/maskonaive",".jpg")
a1=new M.bO()
a1.a=!0
i=E.fM(b1)
q=F.jh()
d=q.a
c=new V.w(-1,-1,1).E()
a2=d.b8(new V.aC(1,2,4,6),V.fy(255,0,0),new V.O(-1,-1,0),new V.a0(0,1),c,b1)
c=q.a
d=new V.w(1,-1,1).E()
a3=c.b8(new V.aC(0,3,4,6),V.fy(0,0,255),new V.O(1,-1,0),new V.a0(1,1),d,b1)
d=q.a
c=new V.w(1,1,1).E()
a4=d.b8(new V.aC(0,2,5,6),V.fy(0,128,0),new V.O(1,1,0),new V.a0(1,0),c,b1)
c=q.a
d=V.aB()
a5=new V.w(-1,1,1).E()
a6=c.b8(new V.aC(0,2,4,7),V.fy(255,255,0),new V.O(-1,1,0),d,a5,b1)
q.d.fd([a2,a3,a4,a6])
q.ao()
i.sc7(0,q)
a1.e=i
a1.saV(b1)
a1.sb_(0,b1)
a1.sb0(b1)
i=new O.dG()
i.b=1.0471975511965976
i.d=new V.K(1,1,1)
a=i.c
i.c=b3
b3.gm().l(0,i.gaD())
b3=new D.r("boxTexture",a,i.c)
b3.b=!0
i.P(b3)
a1.sb0(i)
a7=new M.bT()
a7.a=!0
b3=O.fx()
a7.e=b3
b3.aL(a7.gee(),a7.geg())
a7.y=a7.x=a7.r=a7.f=null
a8=X.fX(b1)
a7.saV(b1)
a7.sb_(0,a8)
a7.sb0(b1)
a7.sb0(f)
a7.e.l(0,o)
b3=[a1,a7]
i=new M.dN()
i.a=!0
d=U.cY(b1)
i.b=d
c=U.cY(b1)
i.c=c
d=U.j6([null,d])
i.d=d
c=U.j6([null,c])
i.e=c
i.f=X.jf(d)
i.r=X.jf(c)
i.x=V.hx(0,0,0.5,1)
i.y=V.hx(0.5,0,0.5,1)
c=O.fx()
i.Q=c
c.aL(i.ge6(),i.geN())
i.Q.aF(0,b3)
i.ch=0.1
i.cx=12
i.db=i.cy=null
d=i.d.a
if(0>=d.length)return H.e(d,0)
if(!J.B(d[0],e)){d=i.d
c=d.a
if(0>=c.length)return H.e(c,0)
a=c[0]
d.k(0,0,e)
i.e.k(0,0,e)
d=new D.r("cameraMover",a,e)
d.b=!0
i.O(d)}d=i.z
if(d!==a0){if(d!=null)d.gm().J(0,i.gN())
a=i.z
i.z=a0
a0.gm().l(0,i.gN())
d=new D.r("target",a,i.z)
d.b=!0
i.O(d)}i.Q.aF(0,b3)
i.ch=0.1
i.cx=12
a9=Math.atan2(0.1,12)
b3=i.b
d=i.ch
if(typeof d!=="number")return d.H()
b3.sL(0,V.je(-d,0,0).q(0,V.jd(a9)))
i.c.sL(0,V.je(i.ch,0,0).q(0,V.jd(-a9)))
b3=r.d
if(b3!==i){if(b3!=null)b3.gm().J(0,r.gce())
r.d=i
i.gm().l(0,r.gce())
r.cf()}V.nw(r)}},L={dL:function dL(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},dU:function dU(a,b,c){this.a=a
this.b=b
this.c=c},dV:function dV(a){this.b=a
this.c=null},i0:function i0(){var _=this
_.d=_.c=_.b=_.a=null},i3:function i3(a){this.b=a
this.a=this.c=null}},O={
fx:function(){var s=new O.bl()
s.bg()
return s},
bl:function bl(){var _=this
_.d=_.c=_.b=_.a=null},
c6:function c6(){this.b=this.a=null},
dg:function dg(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hf:function hf(a,b){this.a=a
this.b=b},
hg:function hg(){},
hh:function hh(a,b){this.a=a
this.b=b},
hi:function hi(){},
hj:function hj(a,b){this.a=a
this.b=b},
hk:function hk(){},
hl:function hl(a,b){this.a=a
this.b=b},
hm:function hm(){},
h9:function h9(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c5:function c5(){},
ha:function ha(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ao:function ao(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hc:function hc(){var _=this
_.e=_.d=_.c=_.b=null},
hd:function hd(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
he:function he(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dG:function dG(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hU:function hU(){}},E={
fM:function(a){var s,r=new E.bn()
r.a=""
r.b=!0
s=O.fx()
r.y=s
s.aL(r.gfF(),r.gfI())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sc7(0,a)
r.sd9(null)
return r},
kf:function(){if(J.iZ(window.navigator.vendor,"Google"))return C.u
if(J.iZ(window.navigator.userAgent,"Firefox"))return C.k
var s=window.navigator.appVersion
if(J.bd(s).K(s,"Trident")||C.b.K(s,"Edge"))return C.l
if(J.iZ(window.navigator.appName,"Microsoft"))return C.l
return C.v},
kg:function(){var s=window.navigator.appVersion
if(J.bd(s).K(s,"Win"))return C.J
if(C.b.K(s,"Mac"))return C.p
if(C.b.K(s,"Linux"))return C.K
return C.L},
lH:function(a,b){var s=new E.hy(a)
s.dA(a,b)
return s},
lO:function(a,b,c,d,e){var s,r
if(t.B.b(a))return E.k7(a,!0,!0,!0,!1)
s=W.j3()
r=s.style
r.width="100%"
r.height="100%"
J.l3(a).l(0,s)
return E.k7(s,!0,!0,!0,!1)},
k7:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.dT(),n=t.z,m=C.f.c4(a,"webgl2",P.lp(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.n(P.m("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.lH(m,a)
n=new T.hX(m)
m.getParameter(3379)
n.c=m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.ed(a)
s=new X.h2()
s.c=new X.a6(!1,!1,!1)
s.d=P.jS(t.e)
n.b=s
s=new X.hs(n)
s.f=0
s.r=V.aB()
s.x=V.aB()
s.ch=s.Q=1
n.c=s
s=new X.h6(n)
s.r=0
s.x=V.aB()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.i1(n)
s.f=V.aB()
s.r=V.aB()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=[]
s=$.fN
n.Q=(s==null?$.fN=new E.et(E.kf(),E.kg()):s).a===C.k?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.P(q,"contextmenu",n.gei(),!1))
n.z.push(W.P(a,"focus",n.geo(),!1))
n.z.push(W.P(a,"blur",n.gec(),!1))
n.z.push(W.P(q,"keyup",n.ges(),!1))
n.z.push(W.P(q,"keydown",n.geq(),!1))
n.z.push(W.P(a,"mousedown",n.gex(),!1))
n.z.push(W.P(a,"mouseup",n.geB(),!1))
n.z.push(W.P(a,p,n.gez(),!1))
r=n.z
W.fK(a)
W.fK(a)
r.push(W.P(a,W.fK(a),n.geD(),!1))
n.z.push(W.P(q,p,n.gek(),!1))
n.z.push(W.P(q,"mouseup",n.gem(),!1))
n.z.push(W.P(q,"pointerlockchange",n.geF(),!1))
n.z.push(W.P(a,"touchstart",n.geT(),!1))
n.z.push(W.P(a,"touchend",n.geP(),!1))
n.z.push(W.P(a,"touchmove",n.geR(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.a4(Date.now(),!1)
o.db=0
o.cu()
return o},
fu:function fu(){},
bn:function bn(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bj:function bj(a){this.b=a},
bw:function bw(a){this.b=a},
et:function et(a,b){this.a=a
this.b=b},
hy:function hy(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hz:function hz(a){this.a=a},
hA:function hA(a){this.a=a},
hB:function hB(a){this.a=a},
dT:function dT(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
hZ:function hZ(a){this.a=a}},Z={
jm:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cE(c)),35044)
a.bindBuffer(b,null)
return new Z.eg(b,s)},
aa:function(a){return new Z.aI(a)},
eg:function eg(a,b){this.a=a
this.b=b},
fv:function fv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
eh:function eh(a){this.a=a},
bM:function bM(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bX:function bX(a,b,c){this.a=a
this.b=b
this.c=c},
aI:function aI(a){this.a=a}},D={
y:function(){var s=new D.ai()
s.d=0
return s},
fw:function fw(){},
ai:function ai(){var _=this
_.d=_.c=_.b=_.a=null},
fQ:function fQ(a){this.a=a},
fR:function fR(a){this.a=a},
N:function N(){this.b=null},
aj:function aj(){this.b=null},
ak:function ak(){this.b=null},
r:function r(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
jN:function(a,b){var s,r,q=new D.aU()
q.c=new V.K(1,1,1)
q.a=V.lR()
q.d=V.jl()
q.e=V.lQ()
s=q.b
q.b=b
b.gm().l(0,q.gdD())
r=new D.r("mover",s,q.b)
r.b=!0
q.aj(r)
if(!q.c.n(0,a)){s=q.c
q.c=a
r=new D.r("color",s,a)
r.b=!0
q.aj(r)}return q},
aU:function aU(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
al:function al(){},
c1:function c1(){var _=this
_.d=_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null}},X={cV:function cV(a,b){this.a=a
this.b=b},db:function db(a,b){this.a=a
this.b=b},h2:function h2(){var _=this
_.d=_.c=_.b=_.a=null},c3:function c3(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h6:function h6(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},bs:function bs(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hs:function hs(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bt:function bt(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},dy:function dy(){},ce:function ce(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},i1:function i1(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ed:function ed(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
fX:function(a){var s=new X.fW(),r=new V.aw(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=V.lG()
s.r=r
return s},
jf:function(a){var s,r,q=new X.dv()
q.c=1.0471975511965976
q.d=0.1
q.e=2000
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gm().l(0,q.gdJ())
r=new D.r("mover",s,q.b)
r.b=!0
q.ad(r)}r=q.c
$.x().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
r=new D.r("fov",r,1.0471975511965976)
r.b=!0
q.ad(r)}r=q.d
$.x().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
r=new D.r("near",r,0.1)
r.b=!0
q.ad(r)}r=q.e
$.x().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
r=new D.r("far",r,2000)
r.b=!0
q.ad(r)}return q},
j2:function j2(){},
fW:function fW(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fZ:function fZ(){this.b=this.a=null},
dv:function dv(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hS:function hS(){}},V={
fy:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aw(s,r,q,1)},
jB:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
nB:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.dn(a-b,s)
return(a<0?a+s:a)+b},
A:function(a,b,c){if(a==null)return C.b.ab("null",c)
$.x().toString
return C.b.ab(C.d.dk(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bJ:function(a,b,c){var s,r,q,p,o,n,m=[]
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.l)(a),++q){p=V.A(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.e(m,o)
s=C.b.ab(m[o],r)
n=m.length
if(o>=n)return H.e(m,o)
m[o]=s}return m},
jD:function(a){return C.d.h2(Math.pow(2,C.G.bR(Math.log(H.nb(a))/Math.log(2))))},
b3:function(){var s=$.jW
return s==null?$.jW=V.ap(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
ap:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.az(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
je:function(a,b,c){return V.ap(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lt:function(a,b,c){return V.ap(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
jd:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.ap(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
jV:function(a,b,c,d){d=V.jl()
return V.jU(V.k_(),d,new V.w(a,b,c))},
jU:function(a,b,c){var s=c.E(),r=b.aW(s).E(),q=s.aW(r),p=new V.w(a.a,a.b,a.c),o=r.H(0).Z(p),n=q.H(0).Z(p),m=s.H(0).Z(p)
return V.ap(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
aB:function(){var s=$.jZ
return s==null?$.jZ=new V.a0(0,0):s},
k_:function(){var s=$.aq
return s==null?$.aq=new V.O(0,0,0):s},
lG:function(){var s=$.k3
return s==null?$.k3=V.hx(0,0,1,1):s},
hx:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dB(a,b,c,d)},
ee:function(){var s=$.ke
return s==null?$.ke=new V.w(0,0,0):s},
lQ:function(){var s=$.ii
return s==null?$.ii=new V.w(-1,0,0):s},
jl:function(){var s=$.ij
return s==null?$.ij=new V.w(0,1,0):s},
lR:function(){var s=$.ik
return s==null?$.ik=new V.w(0,0,1):s},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fO:function fO(){},
dh:function dh(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
az:function az(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dB:function dB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
X:function X(a,b){this.a=a
this.b=b},
w:function w(a,b,c){this.a=a
this.b=b
this.c=c},
nw:function(a){P.lP(C.E,new V.iY(a))},
lK:function(a){var s=new V.hK()
s.dC(a,!0)
return s},
iY:function iY(a){this.a=a},
hK:function hK(){this.b=this.a=null},
hM:function hM(a){this.a=a},
hL:function hL(a){this.a=a}},U={
j4:function(){var s=new U.fz()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
cY:function(a){var s=new U.bm()
s.sL(0,a)
return s},
j6:function(a){var s=new U.bo()
s.bg()
s.aL(s.gdF(),s.geJ())
if(a!=null)s.aF(0,a)
s.e=null
s.f=V.b3()
s.r=0
return s},
fz:function fz(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bm:function bm(){this.b=this.a=null},
bo:function bo(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
S:function S(){},
cf:function cf(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
cg:function cg(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ch:function ch(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={bO:function bO(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},bT:function bT(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aE:function aE(){},hE:function hE(){},dN:function dN(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
lr:function(a,b){var s=a.ap,r=new A.h8(b,s)
r.cd(b,s)
r.dz(a,b)
return r},
ls:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="MaterialLight_"+a5.gag(a5)+a6.gag(a6)+a7.gag(a7)+a8.gag(a8)+a9.gag(a9)+b0.gag(b0)+b1.gag(b1)+b2.gag(b2)+b3.gag(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.l)(b4),++r)a+="_"+H.d(b4[r].a)}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.l)(b5),++r)a+="_"+H.d(b5[r].a)}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.l)(b6),++r)a+="_"+H.d(b6[r].a)}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.l)(b7),++r)a+="_"+H.d(b7[r].a)}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
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
b=$.af()
if(h){s=$.aR()
b=new Z.aI(b.a|s.a)}if(g){s=$.aQ()
b=new Z.aI(b.a|s.a)}if(f){s=$.aS()
b=new Z.aI(b.a|s.a)}if(e){s=$.aP()
b=new Z.aI(b.a|s.a)}return new A.hb(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,!1,f,e,!1,a1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
iN:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
iO:function(a,b,c){var s,r="Txt, txtCube).rgb;\n"
A.iN(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.fj(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.c){s+="   "+c+"Color = "+c+"Clr*textureCube("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.c){s+="   "+c+"Color = textureCube("+c+r
a.a=s}a.a=s+"}\n"},
mG:function(a,b){var s,r=a.a,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.iN(b,r,"emission")
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
mC:function(a,b){var s,r=a.b
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.iO(b,r,"ambient")
b.a+="\n"},
mE:function(a,b){var s,r=a.c
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.iO(b,r,"diffuse")
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
mH:function(a,b){var s,r=a.d
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.iO(b,r,"invDiffuse")
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
mN:function(a,b){var s,r=a.e
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.iO(b,r,"specular")
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
mJ:function(a,b){var s,r,q
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
mL:function(a,b){var s,r=a.r,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.iN(b,r,"reflect")
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
mM:function(a,b){var s,r=a.x,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.iN(b,r,"refract")
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
mD:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.d(s)
q=A.fj(r)
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
if(typeof s!=="number")return s.ac()
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
mF:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+H.d(s)
q=A.fj(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.ac()
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
mK:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.d(s)
q=A.fj(r)
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
if(typeof s!=="number")return s.ac()
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
mO:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.d(s)
q=A.fj(r)
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
if(typeof s!=="number")return s.ac()
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
if(m){s=$.fN
if(s==null)s=$.fN=new E.et(E.kf(),E.kg())
p=c.a
if(s.b===C.p){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
mI:function(a,b){var s,r
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
mP:function(a){var s,r,q,p,o,n,m,l,k,j="   lightAccum += all",i="precision mediump float;\n\n",h="precision mediump float;\n\nvarying vec3 normalVec;\n",g=new P.b9("")
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
A.mG(a,g)
A.mC(a,g)
A.mE(a,g)
A.mH(a,g)
A.mN(a,g)
r=a.db
if(r){p=g.a+="// === Environmental ===\n"
p+="\n"
g.a=p
p+="uniform samplerCube envSampler;\n"
g.a=p
g.a=p+"\n"
A.mL(a,g)
A.mM(a,g)}A.mJ(a,g)
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
if(p){for(o=a.z,n=o.length,l=0;l<o.length;o.length===n||(0,H.l)(o),++l)A.mD(a,o[l],g)
for(o=a.Q,n=o.length,l=0;l<o.length;o.length===n||(0,H.l)(o),++l)A.mF(a,o[l],g)
for(o=a.ch,n=o.length,l=0;l<o.length;o.length===n||(0,H.l)(o),++l)A.mK(a,o[l],g)
for(o=a.cx,n=o.length,l=0;l<o.length;o.length===n||(0,H.l)(o),++l)A.mO(a,o[l],g)
A.mI(a,g)}o=g.a+="// === Main ===\n"
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
for(s=a.z,r=s.length,l=0;l<s.length;s.length===r||(0,H.l)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.e(p,0)
g.a+=j+(p[0].toUpperCase()+C.b.aO(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,l=0;l<s.length;s.length===r||(0,H.l)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.e(p,0)
g.a+=j+(p[0].toUpperCase()+C.b.aO(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,l=0;l<s.length;s.length===r||(0,H.l)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.e(p,0)
g.a+=j+(p[0].toUpperCase()+C.b.aO(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,l=0;l<s.length;s.length===r||(0,H.l)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.e(p,0)
g.a+=j+(p[0].toUpperCase()+C.b.aO(p,1))+"Values(norm);\n"}if(a.cy<=0)g.a+="   lightAccum += nonLightValues(norm);\n"}s=a.a
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
mQ:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.b9+"];\n"
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
mS:function(a,b){var s
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
mR:function(a,b){var s
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
mU:function(a,b){var s,r
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
mV:function(a,b){var s,r
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
mT:function(a,b){var s
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
mW:function(a,b){var s
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
fj:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.aO(a,1)},
jk:function(a,b,c,d,e){var s=new A.i7(a,c,e)
s.f=d
P.jb(d,0,!1)
return s},
fo:function fo(a,b,c){this.a=a
this.b=b
this.c=c},
fp:function fp(a){this.a=a},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
h8:function h8(a,b){var _=this
_.cQ=_.hd=_.ba=_.ap=_.b9=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hl=_.hk=_.hj=_.bQ=_.bP=_.bO=_.bN=_.bM=_.bL=_.bK=_.bJ=_.d1=_.hi=_.d0=_.d_=_.hh=_.cZ=_.cY=_.cX=_.hg=_.cW=_.cV=_.cU=_.hf=_.cT=_.cS=_.he=_.cR=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ft:function ft(a,b){this.a=a
this.b=b},
fF:function fF(a,b){this.a=a
this.b=b},
hv:function hv(a,b){this.a=a
this.b=b},
hO:function hO(a,b){this.a=a
this.b=b},
hb:function hb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.b9=b5
_.ap=b6
_.ba=b7},
e1:function e1(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
e2:function e2(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
e5:function e5(a,b,c,d,e,f,g,h,i,j){var _=this
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
e8:function e8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dF:function dF(){},
hN:function hN(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i6:function i6(){},
ic:function ic(a){this.a=a},
dZ:function dZ(a,b,c){this.a=a
this.c=b
this.d=c},
i9:function i9(a,b,c){this.a=a
this.c=b
this.d=c},
ia:function ia(a,b,c){this.a=a
this.c=b
this.d=c},
ib:function ib(a,b,c){this.a=a
this.c=b
this.d=c},
i7:function i7(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
dY:function dY(a,b,c){this.a=a
this.c=b
this.d=c},
i8:function i8(a,b,c){this.a=a
this.c=b
this.d=c},
e_:function e_(a,b,c){this.a=a
this.c=b
this.d=c},
e0:function e0(a,b,c){this.a=a
this.c=b
this.d=c},
id:function id(a,b,c){this.a=a
this.c=b
this.d=c},
e3:function e3(a,b,c){this.a=a
this.c=b
this.d=c},
e4:function e4(a,b,c){this.a=a
this.c=b
this.d=c},
e6:function e6(a,b,c){this.a=a
this.c=b
this.d=c},
e7:function e7(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iM:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
cD:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.w(f,e+a3,d+a4)
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
h.d=g}k=F.iM(g)
j=F.iM(f)
i=F.ny(a1,a2,new F.iL(h,F.iM(e),F.iM(d),j,k,a0),b)
if(i!=null)a.fE(i)},
ny:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.jh()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.im(e,e,new V.aw(n,0,0,1),e,e,new V.a0(p,1),e,e,0)
o.l(0,m)
c.$3(m,p,0)
r.push(m.bH(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.im(e,e,new V.aw(h,g,f,1),e,e,new V.a0(p,k),e,e,0)
i.l(0,m)
c.$3(m,p,l)
r.push(m.bH(d))}}s.d.fe(a+1,b+1,r)
return s},
bU:function(a,b,c){var s=new F.fS(),r=a.a
if(r==null)H.n(P.m("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.n(P.m("May not create a face with vertices attached to different shapes."))
s.a=a
a.d.b.push(s)
s.b=b
b.d.c.push(s)
s.c=c
c.d.d.push(s)
s.a.a.d.b.push(s)
s.a.a.a_()
return s},
ln:function(a,b){var s=new F.h3(),r=a.a
if(r==null)H.n(P.m("May not create a line with a start vertex which is not attached to a shape."))
if(r!=b.a)H.n(P.m("May not create a line with vertices attached to different shapes."))
s.a=a
a.c.b.push(s)
s.b=b
b.c.c.push(s)
s.a.a.c.b.push(s)
s.a.a.a_()
return s},
jh:function(){var s=new F.hG(),r=new F.io(s)
r.b=!1
r.c=[]
s.a=r
r=new F.hJ(s)
r.b=[]
s.b=r
r=new F.hI(s)
r.b=[]
s.c=r
r=new F.hH(s)
r.b=[]
s.d=r
return s},
im:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.il(),p=new F.it()
p.b=[]
q.b=p
p=new F.is()
p.b=[]
p.c=[]
q.c=p
p=new F.ip()
p.b=[]
p.c=[]
p.d=[]
q.d=p
h=$.kX()
q.e=0
p=$.af()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.aR().a)!==0?e:r
q.x=(s&$.aQ().a)!==0?b:r
q.y=(s&$.bg().a)!==0?f:r
q.z=(s&$.aS().a)!==0?g:r
q.Q=(s&$.kY().a)!==0?c:r
q.ch=(s&$.bK().a)!==0?i:0
q.cx=(s&$.aP().a)!==0?a:r
return q},
iL:function iL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fS:function fS(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h3:function h3(){this.b=this.a=null},
hu:function hu(){this.a=null},
hG:function hG(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hH:function hH(a){this.a=a
this.b=null},
hI:function hI(a){this.a=a
this.b=null},
hJ:function hJ(a){this.a=a
this.b=null},
il:function il(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iv:function iv(a){this.a=a},
iu:function iu(a){this.a=a},
io:function io(a){this.a=a
this.c=this.b=null},
ip:function ip(){this.d=this.c=this.b=null},
iq:function iq(a,b){this.a=a
this.b=b},
ir:function ir(a,b){this.a=a
this.b=b},
is:function is(){this.c=this.b=null},
it:function it(){this.b=null}},T={hV:function hV(){},hW:function hW(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hX:function hX(a){var _=this
_.a=a
_.e=_.d=_.c=null},hY:function hY(a,b,c,d,e,f,g){var _=this
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
H.j9.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gR:function(a){return H.cb(a)},
i:function(a){return"Instance of '"+H.d(H.dz(a))+"'"}}
J.h_.prototype={
i:function(a){return String(a)},
gR:function(a){return a?519018:218159}}
J.c0.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gR:function(a){return 0}}
J.b0.prototype={
gR:function(a){return 0},
i:function(a){return String(a)}}
J.dw.prototype={}
J.bA.prototype={}
J.ac.prototype={
i:function(a){var s=a[$.kM()]
if(s==null)return this.dv(a)
return"JavaScript function for "+H.d(J.Z(s))}}
J.a5.prototype={
fV:function(a,b){var s
if(!!a.fixed$length)H.n(P.u("removeAt"))
s=a.length
if(b>=s)throw H.c(P.dA(b,null))
return a.splice(b,1)[0]},
J:function(a,b){var s
if(!!a.fixed$length)H.n(P.u("remove"))
for(s=0;s<a.length;++s)if(J.B(a[s],b)){a.splice(s,1)
return!0}return!1},
aF:function(a,b){var s,r
if(!!a.fixed$length)H.n(P.u("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.l)(b),++r)a.push(b[r])},
C:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.bN(a))}},
p:function(a,b){var s,r,q=P.jb(a.length,"",!1)
for(s=0;s<a.length;++s){r=H.d(a[s])
if(s>=q.length)return H.e(q,s)
q[s]=r}return q.join(b)},
fC:function(a){return this.p(a,"")},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
gbT:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.lj())},
aN:function(a,b){if(!!a.immutable$list)H.n(P.u("sort"))
H.lN(a,b==null?J.mt():b)},
ds:function(a){return this.aN(a,null)},
K:function(a,b){var s
for(s=0;s<a.length;++s)if(J.B(a[s],b))return!0
return!1},
i:function(a){return P.j7(a,"[","]")},
gT:function(a){return new J.Q(a,a.length)},
gR:function(a){return H.cb(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.n(P.u("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bI(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.n(P.u("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bI(a,b))
a[b]=c},
$ii:1,
$if:1}
J.d9.prototype={}
J.Q.prototype={
gI:function(a){return this.d},
u:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.l(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.b_.prototype={
aI:function(a,b){var s
if(typeof b!="number")throw H.c(H.aN(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbb(b)
if(this.gbb(a)===s)return 0
if(this.gbb(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbb:function(a){return a===0?1/a<0:a<0},
h2:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.u(""+a+".toInt()"))},
bR:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.u(""+a+".floor()"))},
ae:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.u(""+a+".round()"))},
dk:function(a,b){var s
if(b>20)throw H.c(P.aD(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbb(a))return"-"+s
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
dn:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
dw:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cz(a,b)},
Y:function(a,b){return(a|0)===a?a/b|0:this.cz(a,b)},
cz:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.u("Result of truncating division is "+H.d(s)+": "+H.d(a)+" ~/ "+b))},
b6:function(a,b){var s
if(a>0)s=this.f4(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
f4:function(a,b){return b>31?0:a>>>b},
$iV:1,
$iM:1}
J.c_.prototype={$ip:1}
J.bZ.prototype={}
J.ax.prototype={
bG:function(a,b){if(b<0)throw H.c(H.bI(a,b))
if(b>=a.length)H.n(H.bI(a,b))
return a.charCodeAt(b)},
ck:function(a,b){if(b>=a.length)throw H.c(H.bI(a,b))
return a.charCodeAt(b)},
t:function(a,b){if(typeof b!="string")throw H.c(P.jH(b,null,null))
return a+b},
c9:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.dA(b,null))
if(b>c)throw H.c(P.dA(b,null))
if(c>a.length)throw H.c(P.dA(c,null))
return a.substring(b,c)},
aO:function(a,b){return this.c9(a,b,null)},
q:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.C)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ab:function(a,b){var s=b-a.length
if(s<=0)return a
return this.q(" ",s)+a},
fi:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aD(c,0,s,null,null))
return H.kH(a,b,c)},
K:function(a,b){return this.fi(a,b,0)},
aI:function(a,b){var s
if(typeof b!="string")throw H.c(H.aN(b))
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
$iJ:1}
H.H.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.b.bG(this.a,b)}}
H.i.prototype={}
H.br.prototype={
gI:function(a){var s=this.d
return s},
u:function(){var s,r=this,q=r.a,p=J.bd(q),o=p.gj(q)
if(r.b!=o)throw H.c(P.bN(q))
s=r.c
if(typeof o!=="number")return H.o(o)
if(s>=o){r.d=null
return!1}r.d=p.A(q,s);++r.c
return!0}}
H.b2.prototype={
gT:function(a){return new H.c4(J.bh(this.a),this.b)},
gj:function(a){return J.bi(this.a)},
A:function(a,b){return this.b.$1(J.j_(this.a,b))}}
H.bS.prototype={$ii:1}
H.c4.prototype={
u:function(){var s=this,r=s.b
if(r.u()){s.a=s.c.$1(r.gI(r))
return!0}s.a=null
return!1},
gI:function(a){var s=this.a
return s}}
H.ci.prototype={
gT:function(a){return new H.ei(J.bh(this.a),this.b)}}
H.ei.prototype={
u:function(){var s,r
for(s=this.a,r=this.b;s.u();)if(r.$1(s.gI(s)))return!0
return!1},
gI:function(a){var s=this.a
return s.gI(s)}}
H.bV.prototype={}
H.eb.prototype={
k:function(a,b,c){throw H.c(P.u("Cannot modify an unmodifiable list"))}}
H.bB.prototype={}
H.i4.prototype={
aa:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.dq.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.da.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.d(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.d(r.a)+")"
return q+p+"' on '"+s+"' ("+H.d(r.a)+")"}}
H.ea.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.ht.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.eW.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bk.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.kK(r==null?"unknown":r)+"'"},
gh6:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hT.prototype={}
H.hP.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.kK(s)+"'"}}
H.bL.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bL))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gR:function(a){var s,r=this.c
if(r==null)s=H.cb(this.a)
else s=typeof r!=="object"?J.W(r):H.cb(r)
return(s^H.cb(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.dz(s))+"'")}}
H.dD.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.t.prototype={
gj:function(a){return this.a},
gas:function(a){return new H.ay(this)},
gh5:function(a){return H.lq(new H.ay(this),new H.h1(this))},
fj:function(a,b){var s=this.b
if(s==null)return!1
return this.dT(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.b4(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.b4(p,b)
q=r==null?n:r.b
return q}else return o.fB(b)},
fB:function(a){var s,r,q=this.d
if(q==null)return null
s=this.cp(q,J.W(a)&0x3ffffff)
r=this.d3(s,a)
if(r<0)return null
return s[r].b},
k:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.ci(s==null?m.b=m.bv():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.ci(r==null?m.c=m.bv():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bv()
p=J.W(b)&0x3ffffff
o=m.cp(q,p)
if(o==null)m.bA(q,p,[m.bw(b,c)])
else{n=m.d3(o,b)
if(n>=0)o[n].b=c
else o.push(m.bw(b,c))}}},
C:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.bN(s))
r=r.c}},
ci:function(a,b,c){var s=this.b4(a,b)
if(s==null)this.bA(a,b,this.bw(b,c))
else s.b=c},
bw:function(a,b){var s=this,r=new H.h4(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
d3:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.B(a[r].a,b))return r
return-1},
i:function(a){return P.jT(this)},
b4:function(a,b){return a[b]},
cp:function(a,b){return a[b]},
bA:function(a,b,c){a[b]=c},
dW:function(a,b){delete a[b]},
dT:function(a,b){return this.b4(a,b)!=null},
bv:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bA(r,s,r)
this.dW(r,s)
return r}}
H.h1.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.mr(this.a).al("2(1)")}}
H.h4.prototype={}
H.ay.prototype={
gj:function(a){return this.a.a},
gT:function(a){var s=this.a,r=new H.dd(s,s.r)
r.c=s.e
return r}}
H.dd.prototype={
gI:function(a){return this.d},
u:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.bN(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.iS.prototype={
$1:function(a){return this.a(a)},
$S:14}
H.iT.prototype={
$2:function(a,b){return this.a(a,b)}}
H.iU.prototype={
$1:function(a){return this.a(a)}}
H.h0.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.c8.prototype={}
H.bu.prototype={
gj:function(a){return a.length},
$iq:1}
H.b5.prototype={
h:function(a,b){H.at(b,a,a.length)
return a[b]},
k:function(a,b,c){H.at(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.c7.prototype={
k:function(a,b,c){H.at(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.dj.prototype={
h:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.dk.prototype={
h:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.dl.prototype={
h:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.dm.prototype={
h:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.dn.prototype={
h:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.c9.prototype={
gj:function(a){return a.length},
h:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.dp.prototype={
gj:function(a){return a.length},
h:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.co.prototype={}
H.cp.prototype={}
H.cq.prototype={}
H.cr.prototype={}
H.a9.prototype={
al:function(a){return H.f7(v.typeUniverse,this,a)},
cj:function(a){return H.me(v.typeUniverse,this,a)}}
H.ez.prototype={}
H.eu.prototype={
i:function(a){return this.a}}
H.cz.prototype={}
P.ix.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:15}
P.iw.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.iy.prototype={
$0:function(){this.a.$0()}}
P.iz.prototype={
$0:function(){this.a.$0()}}
P.cy.prototype={
dH:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bH(new P.iI(this,b),0),a)
else throw H.c(P.u("`setTimeout()` not found."))},
dI:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bH(new P.iH(this,a,Date.now(),b),0),a)
else throw H.c(P.u("Periodic timer."))},
$icd:1}
P.iI.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iH.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.dw(s,o)}q.c=p
r.d.$1(q)}}
P.bD.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.d(this.a)+")"}}
P.bE.prototype={
gI:function(a){var s=this.c
if(s==null)return this.b
return s.gI(s)},
u:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.u())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bD){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.e(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.bh(s)
if(o instanceof P.bE){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.cv.prototype={
gT:function(a){return new P.bE(this.a())}}
P.ej.prototype={}
P.dO.prototype={}
P.dP.prototype={}
P.cd.prototype={}
P.iK.prototype={}
P.iP.prototype={
$0:function(){var s=H.c(this.a)
s.stack=J.Z(this.b)
throw s}}
P.iE.prototype={
fZ:function(a){var s,r,q,p=null
try{if(C.e===$.ae){a.$0()
return}P.mZ(p,p,this,a)}catch(q){s=H.fk(q)
r=H.jz(q)
P.kw(p,p,this,s,r)}},
h_:function(a,b){var s,r,q,p=null
try{if(C.e===$.ae){a.$1(b)
return}P.n_(p,p,this,a,b)}catch(q){s=H.fk(q)
r=H.jz(q)
P.kw(p,p,this,s,r)}},
h0:function(a,b){return this.h_(a,b,t.z)},
fg:function(a){return new P.iF(this,a)},
cH:function(a,b){return new P.iG(this,a,b)}}
P.iF.prototype={
$0:function(){return this.a.fZ(this.b)}}
P.iG.prototype={
$1:function(a){return this.a.h0(this.b,a)},
$S:function(){return this.c.al("~(0)")}}
P.ck.prototype={
gT:function(a){var s=new P.cl(this,this.r)
s.c=this.e
return s},
gj:function(a){return this.a},
K:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.dR(b)
return r}},
dR:function(a){var s=this.d
if(s==null)return!1
return this.bm(s[this.bj(a)],a)>=0},
l:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cl(s==null?q.b=P.jo():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cl(r==null?q.c=P.jo():r,b)}else return q.dL(0,b)},
dL:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.jo()
s=q.bj(b)
r=p[s]
if(r==null)p[s]=[q.bi(b)]
else{if(q.bm(r,b)>=0)return!1
r.push(q.bi(b))}return!0},
J:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.eW(this.c,b)
else return this.eV(0,b)},
eV:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bj(b)
r=n[s]
q=o.bm(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cB(p)
return!0},
cl:function(a,b){if(a[b]!=null)return!1
a[b]=this.bi(b)
return!0},
eW:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cB(s)
delete a[b]
return!0},
cq:function(){this.r=1073741823&this.r+1},
bi:function(a){var s,r=this,q=new P.iD(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cq()
return q},
cB:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cq()},
bj:function(a){return J.W(a)&1073741823},
bm:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.B(a[r].a,b))return r
return-1}}
P.iD.prototype={}
P.cl.prototype={
gI:function(a){return this.d},
u:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.bN(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.bY.prototype={}
P.c2.prototype={$ii:1,$if:1}
P.z.prototype={
gT:function(a){return new H.br(a,this.gj(a))},
A:function(a,b){return this.h(a,b)},
gd4:function(a){return this.gj(a)===0},
h3:function(a){var s,r,q,p,o=this
if(o.gd4(a)){s=J.jQ(0)
return s}r=o.h(a,0)
q=P.jb(o.gj(a),r,!0)
p=1
while(!0){s=o.gj(a)
if(typeof s!=="number")return H.o(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.e(q,p)
q[p]=s;++p}return q},
i:function(a){return P.j7(a,"[","]")}}
P.df.prototype={}
P.h7.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.d(a)
r.a=s+": "
r.a+=H.d(b)},
$S:16}
P.an.prototype={
C:function(a,b){var s,r
for(s=J.bh(this.gas(a));s.u();){r=s.gI(s)
b.$2(r,this.h(a,r))}},
gj:function(a){return J.bi(this.gas(a))},
i:function(a){return P.jT(a)}}
P.cs.prototype={
i:function(a){return P.j7(this,"{","}")},
A:function(a,b){var s,r,q,p="index"
P.l6(b,p)
P.k2(b,p)
for(s=P.lZ(this,this.r),r=0;s.u();){q=s.d
if(b===r)return q;++r}throw H.c(P.F(b,this,p,null,r))},
$ii:1,
$if:1}
P.cm.prototype={}
P.cW.prototype={}
P.cZ.prototype={}
P.fL.prototype={}
P.ig.prototype={}
P.ih.prototype={
fk:function(a){var s,r,q,p=null,o=P.jg(0,p,a.length)
if(o==null)throw H.c(new P.by(p,p,!1,p,p,"Invalid range"))
s=o-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.iJ(r)
if(q.dY(a,0,o)!==o){C.b.bG(a,o-1)
q.bC()}return new Uint8Array(r.subarray(0,H.ml(0,q.b,r.length)))}}
P.iJ.prototype={
bC:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.e(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.e(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.e(r,q)
r[q]=189},
fb:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.bC()
return!1}},
dY:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.b.bG(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.b.ck(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fb(p,C.b.ck(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bC()}else if(p<=2047){o=l.b
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
P.bc.prototype={}
P.a4.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.a4&&this.a===b.a&&!0},
aI:function(a,b){return C.c.aI(this.a,b.a)},
gR:function(a){var s=this.a
return(s^C.c.b6(s,30))&1073741823},
i:function(a){var s=this,r=P.lf(H.lB(s)),q=P.d0(H.lz(s)),p=P.d0(H.lv(s)),o=P.d0(H.lw(s)),n=P.d0(H.ly(s)),m=P.d0(H.lA(s)),l=P.lg(H.lx(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.V.prototype={}
P.aV.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aV&&this.a===b.a},
gR:function(a){return C.c.gR(this.a)},
aI:function(a,b){return C.c.aI(this.a,b.a)},
i:function(a){var s,r,q,p=new P.fJ(),o=this.a
if(o<0)return"-"+new P.aV(0-o).i(0)
s=p.$1(C.c.Y(o,6e7)%60)
r=p.$1(C.c.Y(o,1e6)%60)
q=new P.fI().$1(o%1e6)
return""+C.c.Y(o,36e8)+":"+H.d(s)+":"+H.d(r)+"."+H.d(q)}}
P.fI.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fJ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.E.prototype={}
P.cS.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.fP(s)
return"Assertion failed"}}
P.dr.prototype={
i:function(a){return"Throw of null."}}
P.a2.prototype={
gbl:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbk:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbl()+o+m
if(!q.a)return l
s=q.gbk()
r=P.fP(q.b)
return l+s+": "+r}}
P.by.prototype={
gbl:function(){return"RangeError"},
gbk:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.d(q):""
else if(q==null)s=": Not greater than or equal to "+H.d(r)
else if(q>r)s=": Not in inclusive range "+H.d(r)+".."+H.d(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.d(r)
return s}}
P.d7.prototype={
gbl:function(){return"RangeError"},
gbk:function(){var s,r=this.b
if(typeof r!=="number")return r.a6()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.d(s)},
gj:function(a){return this.f}}
P.ec.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.e9.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.dM.prototype={
i:function(a){return"Bad state: "+this.a}}
P.cX.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fP(s)+"."}}
P.du.prototype={
i:function(a){return"Out of Memory"},
$iE:1}
P.cc.prototype={
i:function(a){return"Stack Overflow"},
$iE:1}
P.d_.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.ew.prototype={
i:function(a){return"Exception: "+this.a}}
P.fV.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.b.c9(q,0,75)+"..."
return r+"\n"+q}}
P.p.prototype={}
P.f.prototype={
gj:function(a){var s,r=this.gT(this)
for(s=0;r.u();)++s
return s},
A:function(a,b){var s,r,q
P.k2(b,"index")
for(s=this.gT(this),r=0;s.u();){q=s.gI(s)
if(b===r)return q;++r}throw H.c(P.F(b,this,"index",null,r))},
i:function(a){return P.li(this,"(",")")}}
P.d8.prototype={}
P.am.prototype={$ii:1,$if:1}
P.de.prototype={}
P.a7.prototype={
gR:function(a){return P.G.prototype.gR.call(C.h,this)},
i:function(a){return"null"}}
P.M.prototype={}
P.G.prototype={constructor:P.G,$iG:1,
n:function(a,b){return this===b},
gR:function(a){return H.cb(this)},
i:function(a){return"Instance of '"+H.d(H.dz(this))+"'"},
toString:function(){return this.i(this)}}
P.J.prototype={}
P.b9.prototype={
gj:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.k.prototype={}
W.fl.prototype={
gj:function(a){return a.length}}
W.cQ.prototype={
i:function(a){return String(a)}}
W.cR.prototype={
i:function(a){return String(a)}}
W.cU.prototype={}
W.aT.prototype={
c4:function(a,b,c){if(c!=null)return a.getContext(b,P.nd(c))
return a.getContext(b)},
dm:function(a,b){return this.c4(a,b,null)},
$iaT:1}
W.ab.prototype={
gj:function(a){return a.length}}
W.fA.prototype={
gj:function(a){return a.length}}
W.D.prototype={$iD:1}
W.bP.prototype={
gj:function(a){return a.length}}
W.fB.prototype={}
W.a3.prototype={}
W.ah.prototype={}
W.fC.prototype={
gj:function(a){return a.length}}
W.fD.prototype={
gj:function(a){return a.length}}
W.fE.prototype={
gj:function(a){return a.length}}
W.fG.prototype={
i:function(a){return String(a)}}
W.bQ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.bR.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gay(a))+" x "+H.d(this.gar(a))},
n:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.be(b)
s=a.left==s.gbc(b)&&a.top==s.gbe(b)&&this.gay(a)==s.gay(b)&&this.gar(a)==s.gar(b)}else s=!1
return s},
gR:function(a){return W.kj(J.W(a.left),J.W(a.top),J.W(this.gay(a)),J.W(this.gar(a)))},
gcI:function(a){return a.bottom},
gar:function(a){return a.height},
gbc:function(a){return a.left},
gc1:function(a){return a.right},
gbe:function(a){return a.top},
gay:function(a){return a.width},
$ia8:1}
W.d1.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.fH.prototype={
gj:function(a){return a.length}}
W.em.prototype={
gd4:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
return t.h.a(s[b])},
k:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
this.a.replaceChild(c,s[b])},
l:function(a,b){this.a.appendChild(b)
return b},
gT:function(a){var s=this.h3(this)
return new J.Q(s,s.length)}}
W.I.prototype={
gcK:function(a){return new W.em(a,a.children)},
gcL:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.a6()
if(q<0)q=-q*0
if(typeof p!=="number")return p.a6()
if(p<0)p=-p*0
return new P.a8(s,r,q,p,t.I)},
i:function(a){return a.localName},
$iI:1}
W.h.prototype={$ih:1}
W.b.prototype={
fc:function(a,b,c,d){if(c!=null)this.dM(a,b,c,!1)},
dM:function(a,b,c,d){return a.addEventListener(b,H.bH(c,1),!1)},
$ib:1}
W.aW.prototype={$iaW:1}
W.d2.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.d3.prototype={
gj:function(a){return a.length}}
W.d5.prototype={
gj:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.fY.prototype={
gj:function(a){return a.length}}
W.aY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.aZ.prototype={
gcM:function(a){return a.data},
$iaZ:1}
W.bp.prototype={$ibp:1}
W.b1.prototype={$ib1:1}
W.h5.prototype={
i:function(a){return String(a)}}
W.hn.prototype={
gj:function(a){return a.length}}
W.ho.prototype={
h:function(a,b){return P.aO(a.get(b))},
C:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aO(s.value[1]))}},
gas:function(a){var s=[]
this.C(a,new W.hp(s))
return s},
gj:function(a){return a.size}}
W.hp.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hq.prototype={
h:function(a,b){return P.aO(a.get(b))},
C:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aO(s.value[1]))}},
gas:function(a){var s=[]
this.C(a,new W.hr(s))
return s},
gj:function(a){return a.size}}
W.hr.prototype={
$2:function(a,b){return this.a.push(a)}}
W.b4.prototype={$ib4:1}
W.di.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.a_.prototype={$ia_:1}
W.el.prototype={
k:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.e(r,b)
s.replaceChild(c,r[b])},
gT:function(a){var s=this.a.childNodes
return new W.bW(s,s.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.e(s,b)
return s[b]}}
W.v.prototype={
fX:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.l0(s,b,a)}catch(q){H.fk(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.du(a):s},
eX:function(a,b,c){return a.replaceChild(b,c)},
$iv:1}
W.ca.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.b6.prototype={
gj:function(a){return a.length},
$ib6:1}
W.dx.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.hC.prototype={
h:function(a,b){return P.aO(a.get(b))},
C:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aO(s.value[1]))}},
gas:function(a){var s=[]
this.C(a,new W.hD(s))
return s},
gj:function(a){return a.size}}
W.hD.prototype={
$2:function(a,b){return this.a.push(a)}}
W.dE.prototype={
gj:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.dI.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.b7.prototype={$ib7:1}
W.dJ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.b8.prototype={
gj:function(a){return a.length},
$ib8:1}
W.hQ.prototype={
h:function(a,b){return a.getItem(H.mj(b))},
C:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gas:function(a){var s=[]
this.C(a,new W.hR(s))
return s},
gj:function(a){return a.length}}
W.hR.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aG.prototype={$iaG:1}
W.aH.prototype={$iaH:1}
W.ad.prototype={$iad:1}
W.dR.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.dS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.i_.prototype={
gj:function(a){return a.length}}
W.ba.prototype={$iba:1}
W.bb.prototype={$ibb:1}
W.dW.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.i2.prototype={
gj:function(a){return a.length}}
W.as.prototype={}
W.ie.prototype={
i:function(a){return String(a)}}
W.ef.prototype={
gj:function(a){return a.length}}
W.aJ.prototype={
gfo:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.u("deltaY is not supported"))},
gfn:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.u("deltaX is not supported"))},
$iaJ:1}
W.bC.prototype={
eY:function(a,b){return a.requestAnimationFrame(H.bH(b,1))},
dX:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.en.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.cj.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
n:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.be(b)
s=a.left==s.gbc(b)&&a.top==s.gbe(b)&&a.width==s.gay(b)&&a.height==s.gar(b)}else s=!1
return s},
gR:function(a){return W.kj(J.W(a.left),J.W(a.top),J.W(a.width),J.W(a.height))},
gar:function(a){return a.height},
gay:function(a){return a.width}}
W.eA.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.cn.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.eT.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.f_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.j5.prototype={}
W.ev.prototype={}
W.iA.prototype={
$1:function(a){return this.a.$1(a)}}
W.jn.prototype={}
W.C.prototype={
gT:function(a){return new W.bW(a,this.gj(a))}}
W.bW.prototype={
u:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.cO(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gI:function(a){return this.d}}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eQ.prototype={}
W.ct.prototype={}
W.cu.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eX.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.cw.prototype={}
W.cx.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
P.cA.prototype={$iaZ:1,
gcM:function(a){return this.a}}
P.iQ.prototype={
$2:function(a,b){this.a[a]=b},
$S:17}
P.d4.prototype={
gb5:function(){return new H.b2(new H.ci(this.b,new P.fT()),new P.fU())},
k:function(a,b,c){var s=this.gb5()
J.l5(s.b.$1(J.j_(s.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.bi(this.gb5().a)},
h:function(a,b){var s=this.gb5()
return s.b.$1(J.j_(s.a,b))},
gT:function(a){var s=P.jc(this.gb5(),!1)
return new J.Q(s,s.length)}}
P.fT.prototype={
$1:function(a){return t.h.b(a)}}
P.fU.prototype={
$1:function(a){return t.h.a(a)}}
P.eP.prototype={
gc1:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.o(r)
return this.$ti.c.a(s+r)},
gcI:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.o(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.d(s.a)+", "+H.d(s.b)+") "+H.d(s.c)+" x "+H.d(s.d)},
n:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.I.b(b)){s=n.a
r=J.be(b)
if(s==r.gbc(b)){q=n.b
if(q==r.gbe(b)){p=n.c
if(typeof s!=="number")return s.t()
if(typeof p!=="number")return H.o(p)
o=n.$ti.c
if(o.a(s+p)===r.gc1(b)){s=n.d
if(typeof q!=="number")return q.t()
if(typeof s!=="number")return H.o(s)
r=o.a(q+s)===r.gcI(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gR:function(a){var s,r=this,q=r.a,p=J.W(q),o=r.b,n=J.W(o),m=r.c
if(typeof q!=="number")return q.t()
if(typeof m!=="number")return H.o(m)
s=r.$ti.c
m=C.c.gR(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.t()
if(typeof q!=="number")return H.o(q)
q=C.c.gR(s.a(o+q))
return P.lY(P.iC(P.iC(P.iC(P.iC(0,p),n),m),q))}}
P.a8.prototype={
gbc:function(a){return this.a},
gbe:function(a){return this.b},
gay:function(a){return this.c},
gar:function(a){return this.d}}
P.bq.prototype={$ibq:1}
P.dc.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.bv.prototype={$ibv:1}
P.ds.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.hw.prototype={
gj:function(a){return a.length}}
P.dQ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.j.prototype={
gcK:function(a){return new P.d4(a,new W.el(a))}}
P.bz.prototype={$ibz:1}
P.dX.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.eD.prototype={}
P.eE.prototype={}
P.eL.prototype={}
P.eM.prototype={}
P.eY.prototype={}
P.eZ.prototype={}
P.f4.prototype={}
P.f5.prototype={}
P.fq.prototype={
gj:function(a){return a.length}}
P.fr.prototype={
h:function(a,b){return P.aO(a.get(b))},
C:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aO(s.value[1]))}},
gas:function(a){var s=[]
this.C(a,new P.fs(s))
return s},
gj:function(a){return a.size}}
P.fs.prototype={
$2:function(a,b){return this.a.push(a)}}
P.cT.prototype={
gj:function(a){return a.length}}
P.av.prototype={}
P.dt.prototype={
gj:function(a){return a.length}}
P.ek.prototype={}
P.dC.prototype={
h1:function(a,b,c,d,e,f,g){var s
if(t.s.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.ne(g))
return}if(t.R.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.j0("Incorrect number or type of arguments"))}}
P.dK.prototype={
gj:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
s=P.aO(a.item(b))
s.toString
return s},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.eU.prototype={}
P.eV.prototype={}
K.fm.prototype={
aJ:function(a,b){return!0},
i:function(a){return"all"}}
K.d6.prototype={
aJ:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)if(s[q].aJ(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.l)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.aA.prototype={
aJ:function(a,b){return!this.dt(0,b)},
i:function(a){return"!["+this.ca(0)+"]"}}
K.hF.prototype={
dB:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.m("May not create a Set with zero characters."))
s=new H.t(t.E)
for(r=new H.br(a,a.gj(a));r.u();){q=r.d
s.k(0,q,!0)}p=P.jc(new H.ay(s),!0)
C.a.ds(p)
this.a=p},
aJ:function(a,b){return C.a.K(this.a,b)},
i:function(a){return P.ji(this.a)}}
L.dL.prototype={
p:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.i3(this.a.F(0,b))
p.a=[]
p.c=!1
this.c.push(p)
return p},
fw:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
if(p.aJ(0,a))return p}return null},
i:function(a){return this.b},
cA:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.K(0,l))m+=" (consume)"
for(l=new H.ay(n.d.c),l=l.gT(l);l.u();){r=l.d
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.d(r)+" => ["+H.d(q)+"]")
m=s.c.K(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.l)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.dU.prototype={
i:function(a){var s=H.kI(this.b,"\n","\\n"),r=H.kI(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.dV.prototype={
i:function(a){return this.b}}
L.i0.prototype={
F:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.dL(this,b)
s.c=[]
this.a.k(0,b,s)}return s},
b2:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.dV(a)
s.c=new H.t(t.i)
this.b.k(0,a,s)}return s},
dl:function(a){return this.h4(a)},
h4:function(a){var s=this
return P.mB(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$dl(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a0.length!==0)j=C.a.fV(a0,0)
else{if(!r.u()){q=3
break}i=r.d
j=i}b.push(j);++m
h=d.fw(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.ji(b)
throw H.c(P.m("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!b.fixed$length)H.n(P.u("removeRange"))
P.jg(0,k,b.length)
b.splice(0,k-0)
C.a.aF(a0,b)
b=[]
c=[]
d=s.d
q=!s.c.K(0,n.a)?7:8
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
if(d.d!=null){g=P.ji(c)
f=d.d
e=f.c.h(0,g)
n=new L.dU(e==null?f.b:e,g,m)
k=b.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.K(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.lW()
case 1:return P.lX(o)}}},t.j)},
i:function(a){var s,r=new P.b9(""),q=this.d
if(q!=null)r.a=q.cA()+"\n"
for(q=this.a,q=q.gh5(q),q=new H.c4(J.bh(q.a),q.b);q.u();){s=q.a
if(s!=this.d)r.a+=s.cA()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.i3.prototype={
i:function(a){return this.b.b+": "+this.ca(0)}}
O.bl.prototype={
bg:function(){var s=this
s.a=[]
s.d=s.c=s.b=null},
c5:function(a,b,c){this.b=b
this.c=a
this.d=c},
aL:function(a,b){return this.c5(a,null,b)},
aS:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
bx:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gj:function(a){return this.a.length},
gT:function(a){var s=this.a
return new J.Q(s,s.length)},
A:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.e(s,b)
return s[b]},
l:function(a,b){var s,r
if(this.aS([b])){s=this.a
r=s.length
s.push(b)
this.bx(r,[b])}},
aF:function(a,b){var s,r
if(this.aS(b)){s=this.a
r=s.length
C.a.aF(s,b)
this.bx(r,b)}},
k:function(a,b,c){var s,r=this,q=r.a
if(b>=q.length)return H.e(q,b)
s=q[b]
if(!J.B(s,c)&&r.aS([c])){q=r.a
if(b>=q.length)return H.e(q,b)
q[b]=c
q=r.d
if(q!=null)q.$2(b,[s])
r.bx(b,[c])}},
$if:1}
O.c6.prototype={
gj:function(a){return this.a.length},
gm:function(){var s=this.b
return s==null?this.b=D.y():s},
az:function(){var s=this.b
if(s!=null)s.v(null)},
gL:function(a){var s=this.a
if(s.length>0)return C.a.gbT(s)
else return V.b3()},
bd:function(a){var s=this.a
if(a==null)s.push(V.b3())
else s.push(a)
this.az()},
au:function(){var s=this.a
if(s.length>0){s.pop()
this.az()}}}
E.fu.prototype={}
E.bn.prototype={
sc7:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gm().J(0,q.gdf())
s=q.c
if(s!=null)s.gm().l(0,q.gdf())
r=new D.r("shape",p,q.c)
r.b=!0
q.at(r)}},
sd9:function(a){var s,r,q=this
if(!J.B(q.r,a)){s=q.r
if(s!=null)s.gm().J(0,q.gdd())
if(a!=null)a.gm().l(0,q.gdd())
q.r=a
r=new D.r("mover",s,a)
r.b=!0
q.at(r)}},
af:function(a,b){var s,r,q=this,p=q.r,o=p!=null?p.a:null
if(!J.B(o,q.x)){s=q.x
q.x=o
r=new D.r("matrix",s,o)
r.b=!0
q.at(r)}for(p=q.y.a,p=new J.Q(p,p.length);p.u();)p.d.af(0,b)},
a2:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.gL(q))
else o.push(p.q(0,q.gL(q)))
q.az()
a.c0(r.f)
q=a.dy
s=(q&&C.a).gbT(q)
if(s!=null&&r.d!=null)s.di(a,r)
for(q=r.y.a,q=new J.Q(q,q.length);q.u();)q.d.a2(a)
a.c_()
a.dx.au()},
at:function(a){var s=this.z
if(s!=null)s.v(a)},
a_:function(){return this.at(null)},
dg:function(a){this.e=null
this.at(a)},
fL:function(){return this.dg(null)},
de:function(a){this.at(a)},
fK:function(){return this.de(null)},
dc:function(a){this.at(a)},
fH:function(){return this.dc(null)},
fG:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gda(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.ai()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}this.a_()},
fJ:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gda(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.ai()
o.d=0
p.z=o}o.J(0,r)}}this.a_()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bj.prototype={
i:function(a){return this.b}}
E.bw.prototype={
i:function(a){return this.b}}
E.et.prototype={}
E.hy.prototype={
dA:function(a,b){var s,r=this
r.d=r.c=512
r.e=0
r.x=r.r=r.f=new P.a4(Date.now(),!1)
r.y=0
r.cx=r.ch=r.Q=r.z=null
s=new O.c6()
s.a=[]
s.gm().l(0,new E.hz(r))
r.cy=s
s=new O.c6()
s.a=[]
s.gm().l(0,new E.hA(r))
r.db=s
s=new O.c6()
s.a=[]
s.gm().l(0,new E.hB(r))
r.dx=s
s=[]
r.dy=s
s.push(null)
r.fr=new H.t(t.G)},
gfU:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.gL(q)
s=r.db
s=r.z=q.q(0,s.gL(s))
q=s}return q},
c0:function(a){var s=this.dy
s.push(a==null?(s&&C.a).gbT(s):a)},
c_:function(){var s=this.dy
if(s.length>1)s.pop()},
cD:function(a){var s=a.b
if(s.length===0)throw H.c(P.m("May not cache a shader with no name."))
if(this.fr.fj(0,s))throw H.c(P.m('Shader cache already contains a shader by the name "'+s+'".'))
this.fr.k(0,s,a)}}
E.hz.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.hA.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.hB.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.dT.prototype={
cg:function(a){this.dj()},
cf:function(){return this.cg(null)},
gfz:function(){var s,r=this,q=Date.now(),p=C.c.Y(P.jO(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.a4(q,!1)
return s/p},
cu:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.q()
if(typeof p!=="number")return H.o(p)
s=C.d.bR(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.q()
r=C.d.bR(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.k8(C.i,q.gfY())}},
dj:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.t.dX(s)
r=W.kx(new E.hZ(this),t.H)
r.toString
C.t.eY(s,r)}},
fW:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cu()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.a4(p,!1)
q.y=P.jO(p-q.r.a).a*0.000001
p=q.cy
C.a.sj(p.a,0)
p.az()
p=q.db
C.a.sj(p.a,0)
p.az()
p=q.dx
C.a.sj(p.a,0)
p.az()
p=q.dy
p.toString
C.a.sj(p,0)
q.dy.push(null)
m.a2(n.e)}}catch(o){s=H.fk(o)
r=H.jz(o)
P.jE("Error: "+H.d(s))
P.jE("Stack: "+H.d(r))
throw H.c(s)}}}
E.hZ.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.fW()}}}
Z.eg.prototype={}
Z.fv.prototype={
S:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.fk(q)
r=P.m('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.d(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.d(s.e)+"]"}}
Z.eh.prototype={}
Z.bM.prototype={
aq:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
S:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].S(a)},
ax:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
a2:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.e(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)o.push(s[q].i(0))
p=[]
for(s=this.c,r=s.length,q=0;q<r;++q)p.push(J.Z(s[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.p(o,", ")+"\nAttrs:   "+C.a.p(p,", ")}}
Z.bX.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d(H.dz(this.c))+"'")+"]"}}
Z.aI.prototype={
gc8:function(a){var s=this.a,r=(s&$.af().a)!==0?3:0
if((s&$.aR().a)!==0)r+=3
if((s&$.aQ().a)!==0)r+=3
if((s&$.bg().a)!==0)r+=2
if((s&$.aS().a)!==0)r+=3
if((s&$.cM().a)!==0)r+=3
if((s&$.cN().a)!==0)r+=4
if((s&$.bK().a)!==0)++r
return(s&$.aP().a)!==0?r+4:r},
ff:function(a){var s,r=$.af(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.aR()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aQ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bg()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aS()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cM()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cN()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bK()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aP()
if((q&r.a)!==0)if(s===a)return r
return $.kZ()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aI))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.af().a)!==0)s.push("Pos")
if((r&$.aR().a)!==0)s.push("Norm")
if((r&$.aQ().a)!==0)s.push("Binm")
if((r&$.bg().a)!==0)s.push("Txt2D")
if((r&$.aS().a)!==0)s.push("TxtCube")
if((r&$.cM().a)!==0)s.push("Clr3")
if((r&$.cN().a)!==0)s.push("Clr4")
if((r&$.bK().a)!==0)s.push("Weight")
if((r&$.aP().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.p(s,"|")}}
D.fw.prototype={}
D.ai.prototype={
l:function(a,b){var s=this.a;(s==null?this.a=[]:s).push(b)},
J:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.a.K(q,b)
if(q===!0){q=r.a
s=(q&&C.a).J(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.a.K(q,b)
if(q===!0){q=r.b
s=(q&&C.a).J(q,b)||s}return s},
v:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.N()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.a.C(P.jc(s,!0),new D.fQ(o))
s=p.b
if(s!=null){p.b=[]
C.a.C(s,new D.fR(o))}return!0},
fu:function(){return this.v(null)},
av:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.v(s)}}}}
D.fQ.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.fR.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.N.prototype={}
D.aj.prototype={}
D.ak.prototype={}
D.r.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.cV.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cV))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.db.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.db))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.h2.prototype={
fQ:function(a){this.c=a.b
this.d.l(0,a.a)
return!1},
fM:function(a){this.c=a.b
this.d.J(0,a.a)
return!1}}
X.c3.prototype={}
X.h6.prototype={
aQ:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.q()
s=b.b
r=o.ch
if(typeof s!=="number")return s.q()
q=new V.a0(m.a+l*k,m.b+s*r)
r=o.a.gaG()
p=new X.bs(a,V.aB(),o.x,r,q)
p.b=!0
o.z=new P.a4(n,!1)
o.x=q
return p},
bZ:function(a,b){this.r=a.a
return!1},
aZ:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.dq()
if(typeof s!=="number")return s.ac()
this.r=(s&~r)>>>0
return!1},
aY:function(a,b){var s=this.d
if(s==null)return!1
s.v(this.aQ(a,b))
return!0},
fR:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaG()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.q()
o=a.b
n=m.cy
if(typeof o!=="number")return o.q()
r=new X.bt(new V.X(q*p,o*n),s,r)
r.b=!0
l.v(r)
return!0},
ew:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.c3(c,p.a.gaG(),b)
q.b=!0
r.v(q)
p.y=new P.a4(s,!1)
p.x=V.aB()}}
X.a6.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.a6))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bs.prototype={}
X.hs.prototype={
bn:function(a,b,c){var s=this,r=new P.a4(Date.now(),!1),q=s.a.gaG(),p=new X.bs(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
bZ:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.v(this.bn(a,b,!0))
return!0},
aZ:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.dq()
if(typeof r!=="number")return r.ac()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.v(s.bn(a,b,!0))
return!0},
aY:function(a,b){var s=this.d
if(s==null)return!1
s.v(this.bn(a,b,!1))
return!0},
fS:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaG()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.q()
p=a.b
o=n.ch
if(typeof p!=="number")return p.q()
s=new X.bt(new V.X(r*q,p*o),s,b)
s.b=!0
m.v(s)
return!0},
gcO:function(){var s=this.b
return s==null?this.b=D.y():s},
gc2:function(){var s=this.c
return s==null?this.c=D.y():s},
gd8:function(){var s=this.d
return s==null?this.d=D.y():s}}
X.bt.prototype={}
X.dy.prototype={}
X.ce.prototype={}
X.i1.prototype={
aQ:function(a,b){var s=this,r=new P.a4(Date.now(),!1),q=a.length>0?a[0]:V.aB(),p=s.a.gaG(),o=new X.ce(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
fP:function(a){var s=this.b
if(s==null)return!1
s.v(this.aQ(a,!0))
return!0},
fN:function(a){var s=this.c
if(s==null)return!1
s.v(this.aQ(a,!0))
return!0},
fO:function(a){var s=this.d
if(s==null)return!1
s.v(this.aQ(a,!1))
return!0}}
X.ed.prototype={
gaG:function(){var s=this.a,r=C.f.gcL(s).c
r.toString
s=C.f.gcL(s).d
s.toString
return V.hx(0,0,r,s)},
cn:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.db(s,new X.a6(r,a.altKey,a.shiftKey))},
aE:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.a6(r,a.altKey,a.shiftKey)},
bB:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.a6(r,a.altKey,a.shiftKey)},
an:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.X()
if(typeof o!=="number")return H.o(o)
s=r.top
if(typeof p!=="number")return p.X()
if(typeof s!=="number")return H.o(s)
return new V.a0(q-o,p-s)},
aT:function(a){return new V.X(a.movementX,a.movementY)},
by:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=[]
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
o=C.d.ae(p.pageX)
C.d.ae(p.pageY)
n=k.left
if(typeof n!=="number")return H.o(n)
C.d.ae(p.pageX)
m=C.d.ae(p.pageY)
l=k.top
if(typeof l!=="number")return H.o(l)
j.push(new V.a0(o-n,m-l))}return j},
ak:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.cV(s,new X.a6(r,a.altKey,a.shiftKey))},
bo:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.X()
if(typeof n!=="number")return H.o(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.X()
if(typeof p!=="number")return H.o(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.o(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.o(p)
p=r<p}else p=!1
return p},
ep:function(a){this.f=!0},
ed:function(a){this.f=!1},
ej:function(a){if(this.f&&this.bo(a))a.preventDefault()},
eu:function(a){var s
if(!this.f)return
s=this.cn(a)
this.b.fQ(s)},
er:function(a){var s
if(!this.f)return
s=this.cn(a)
this.b.fM(s)},
ey:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aE(a)
if(p.x){s=p.ak(a)
r=p.aT(a)
if(p.d.bZ(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.ak(a)
q=p.an(a)
if(p.c.bZ(s,q))a.preventDefault()},
eC:function(a){var s,r,q,p=this
p.aE(a)
s=p.ak(a)
if(p.x){r=p.aT(a)
if(p.d.aZ(s,r))a.preventDefault()
return}if(p.r)return
q=p.an(a)
if(p.c.aZ(s,q))a.preventDefault()},
en:function(a){var s,r,q,p=this
if(!p.bo(a)){p.aE(a)
s=p.ak(a)
if(p.x){r=p.aT(a)
if(p.d.aZ(s,r))a.preventDefault()
return}if(p.r)return
q=p.an(a)
if(p.c.aZ(s,q))a.preventDefault()}},
eA:function(a){var s,r,q,p=this
p.aE(a)
s=p.ak(a)
if(p.x){r=p.aT(a)
if(p.d.aY(s,r))a.preventDefault()
return}if(p.r)return
q=p.an(a)
if(p.c.aY(s,q))a.preventDefault()},
el:function(a){var s,r,q,p=this
if(!p.bo(a)){p.aE(a)
s=p.ak(a)
if(p.x){r=p.aT(a)
if(p.d.aY(s,r))a.preventDefault()
return}if(p.r)return
q=p.an(a)
if(p.c.aY(s,q))a.preventDefault()}},
eE:function(a){var s,r,q=this
q.aE(a)
s=new V.X((a&&C.r).gfn(a),C.r.gfo(a)).q(0,q.Q)
if(q.x){if(q.d.fR(s))a.preventDefault()
return}if(q.r)return
r=q.an(a)
if(q.c.fS(s,r))a.preventDefault()},
eG:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.ak(q.y)
r=q.an(q.y)
q.d.ew(s,r,p)}},
eU:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bB(a)
s=r.by(a)
if(r.e.fP(s))a.preventDefault()},
eQ:function(a){var s
this.bB(a)
s=this.by(a)
if(this.e.fN(s))a.preventDefault()},
eS:function(a){var s
this.bB(a)
s=this.by(a)
if(this.e.fO(s))a.preventDefault()}}
D.aU.prototype={
aj:function(a){var s=this.r
if(s!=null)s.v(a)},
dE:function(){return this.aj(null)},
$ial:1}
D.al.prototype={}
D.c1.prototype={
aj:function(a){var s=this.y
if(s!=null)s.v(a)},
cs:function(a){var s=this.z
if(s!=null)s.v(a)},
ev:function(){return this.cs(null)},
eI:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.l)(a),++r){q=a[r]
if(q==null||this.dS(q))return!1}return!0},
e5:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gcr(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
if(p instanceof D.aU)this.f.push(p)
o=p.r
if(o==null){o=new D.ai()
o.d=0
p.r=o}n=o.a;(n==null?o.a=[]:n).push(r)}s=new D.aj()
s.b=!0
this.aj(s)},
eM:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gcr(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
if(p instanceof D.aU)C.a.J(this.f,p)
o=p.r
if(o==null){o=new D.ai()
o.d=0
p.r=o}o.J(0,r)}s=new D.ak()
s.b=!0
this.aj(s)},
dS:function(a){var s=C.a.K(this.f,a)
return s}}
V.K.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.K))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.aw.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aw))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"}}
V.fO.prototype={}
V.dh.prototype={
a3:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dh))return!1
s=b.a
$.x().toString
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
i:function(a){var s,r,q,p,o=this,n=V.bJ([o.a,o.d,o.r],3,0),m=V.bJ([o.b,o.e,o.x],3,0),l=V.bJ([o.c,o.f,o.y],3,0),k=n.length
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
V.az.prototype={
a3:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
bS:function(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.a,a5=a3.f,a6=a3.b,a7=a3.e,a8=a4*a5-a6*a7,a9=a3.r,b0=a3.c,b1=a4*a9-b0*a7,b2=a3.x,b3=a3.d
if(typeof b3!=="number")return b3.q()
s=a4*b2-b3*a7
r=a6*a9-b0*a5
q=a6*b2-b3*a5
p=b0*b2-b3*a9
o=a3.y
n=a3.cy
m=a3.z
l=a3.cx
k=o*n-m*l
j=a3.db
i=a3.Q
h=o*j-i*l
g=a3.dx
f=a3.ch
e=o*g-f*l
d=m*j-i*n
c=m*g-f*n
b=i*g-f*j
a=a8*b-b1*c+s*d+r*e-q*h+p*k
$.x().toString
if(Math.abs(a-0)<1e-9)return V.b3()
a0=1/a
a1=-a7
a2=-l
return V.ap((a5*b-a9*c+b2*d)*a0,(-a6*b+b0*c-b3*d)*a0,(n*p-j*q+g*r)*a0,(-m*p+i*q-f*r)*a0,(a1*b+a9*e-b2*h)*a0,(a4*b-b0*e+b3*h)*a0,(a2*p+j*s-g*b1)*a0,(o*p-i*s+f*b1)*a0,(a7*c-a5*e+b2*k)*a0,(-a4*c+a6*e-b3*k)*a0,(l*q-n*s+g*a8)*a0,(-o*q+m*s-f*a8)*a0,(a1*d+a5*h-a9*k)*a0,(a4*d-a6*h+b0*k)*a0,(a2*r+n*b1-j*a8)*a0,(o*r-m*b1+i*a8)*a0)},
q:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.a,a7=b5.a,a8=a5.b,a9=b5.e,b0=a5.c,b1=b5.y,b2=a5.d,b3=b5.cx
if(typeof b2!=="number")return b2.q()
s=b5.b
r=b5.f
q=b5.z
p=b5.cy
o=b5.c
n=b5.r
m=b5.Q
l=b5.db
k=b5.d
if(typeof k!=="number")return H.o(k)
j=b5.x
i=b5.ch
h=b5.dx
g=a5.e
f=a5.f
e=a5.r
d=a5.x
c=a5.y
b=a5.z
a=a5.Q
a0=a5.ch
a1=a5.cx
a2=a5.cy
a3=a5.db
a4=a5.dx
return V.ap(a6*a7+a8*a9+b0*b1+b2*b3,a6*s+a8*r+b0*q+b2*p,a6*o+a8*n+b0*m+b2*l,a6*k+a8*j+b0*i+b2*h,g*a7+f*a9+e*b1+d*b3,g*s+f*r+e*q+d*p,g*o+f*n+e*m+d*l,g*k+f*j+e*i+d*h,c*a7+b*a9+a*b1+a0*b3,c*s+b*r+a*q+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,a1*a7+a2*a9+a3*b1+a4*b3,a1*s+a2*r+a3*q+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h)},
bf:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.w(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
b3:function(a){var s=this,r=a.a,q=a.b,p=a.c,o=s.d
if(typeof o!=="number")return H.o(o)
return new V.O(s.a*r+s.b*q+s.c*p+o,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
n:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.az))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-q.a)<1e-9))return!1
if(!(Math.abs(b.b-q.b)<1e-9))return!1
if(!(Math.abs(b.c-q.c)<1e-9))return!1
s=b.d
r=q.d
if(typeof s!=="number")return s.X()
if(typeof r!=="number")return H.o(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.e-q.e)<1e-9))return!1
if(!(Math.abs(b.f-q.f)<1e-9))return!1
if(!(Math.abs(b.r-q.r)<1e-9))return!1
if(!(Math.abs(b.x-q.x)<1e-9))return!1
if(!(Math.abs(b.y-q.y)<1e-9))return!1
if(!(Math.abs(b.z-q.z)<1e-9))return!1
if(!(Math.abs(b.Q-q.Q)<1e-9))return!1
if(!(Math.abs(b.ch-q.ch)<1e-9))return!1
if(!(Math.abs(b.cx-q.cx)<1e-9))return!1
if(!(Math.abs(b.cy-q.cy)<1e-9))return!1
if(!(Math.abs(b.db-q.db)<1e-9))return!1
if(!(Math.abs(b.dx-q.dx)<1e-9))return!1
return!0},
i:function(a){return this.D()},
w:function(a){var s,r,q,p,o,n=this,m=V.bJ([n.a,n.e,n.y,n.cx],3,0),l=V.bJ([n.b,n.f,n.z,n.cy],3,0),k=V.bJ([n.c,n.r,n.Q,n.db],3,0),j=V.bJ([n.d,n.x,n.ch,n.dx],3,0),i=m.length
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
D:function(){return this.w("")}}
V.a0.prototype={
W:function(a){return new V.X(a.a-this.a,a.b-this.b)},
n:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.O.prototype={
X:function(a,b){return new V.O(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.O))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.aC.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aC))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"}}
V.dB.prototype={
ga5:function(){var s=this.c,r=this.d
return s>r?r:s},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dB))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"}}
V.X.prototype={
bU:function(a){return Math.sqrt(this.Z(this))},
Z:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.q()
if(typeof p!=="number")return H.o(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.o(r)
return q*p+s*r},
q:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.q()
if(typeof b!=="number")return H.o(b)
s=this.b
if(typeof s!=="number")return s.q()
return new V.X(r*b,s*b)},
U:function(a,b){var s,r
$.x().toString
if(Math.abs(b-0)<1e-9){s=$.kc
return s==null?$.kc=new V.X(0,0):s}s=this.a
if(typeof s!=="number")return s.U()
r=this.b
if(typeof r!=="number")return r.U()
return new V.X(s/b,r/b)},
n:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
s=b.a
r=this.a
$.x().toString
if(typeof s!=="number")return s.X()
if(typeof r!=="number")return H.o(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.X()
if(typeof r!=="number")return H.o(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.w.prototype={
bU:function(a){return Math.sqrt(this.Z(this))},
Z:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bV:function(a,b){return new V.w(V.jB(this.a,a.a,b),V.jB(this.b,a.b,b),V.jB(this.c,a.c,b))},
E:function(){var s=this,r=Math.sqrt(s.Z(s))
if(r===1)return s
return s.U(0,r)},
aW:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.w(s*r-q*p,q*o-n*r,n*p-s*o)},
t:function(a,b){return new V.w(this.a+b.a,this.b+b.b,this.c+b.c)},
H:function(a){return new V.w(-this.a,-this.b,-this.c)},
U:function(a,b){$.x().toString
if(Math.abs(b-0)<1e-9)return V.ee()
return new V.w(this.a/b,this.b/b,this.c/b)},
d5:function(){$.x().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.w))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
U.fz.prototype={
bh:function(a){var s=V.nB(a,this.c,this.b)
return s},
gm:function(){var s=this.y
return s==null?this.y=D.y():s},
G:function(a){var s=this.y
if(s!=null)s.v(a)},
sc3:function(a,b){},
sbW:function(a){var s,r=this,q=r.b
$.x().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bh(s)}q=new D.r("maximumLocation",q,r.b)
q.b=!0
r.G(q)}},
sbY:function(a){var s,r=this,q=r.c
$.x().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bh(s)}q=new D.r("minimumLocation",q,r.c)
q.b=!0
r.G(q)}},
sa4:function(a,b){var s,r=this
b=r.bh(b)
s=r.d
$.x().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.r("location",s,b)
s.b=!0
r.G(s)}},
sbX:function(a){var s,r,q=this,p=q.e
$.x().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.r("maximumVelocity",p,a)
p.b=!0
q.G(p)}},
sM:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.x().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.r("velocity",r,a)
r.b=!0
s.G(r)}},
sbI:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.x().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.r("dampening",s,a)
s.b=!0
this.G(s)}},
af:function(a,b){var s,r,q,p=this,o=p.f
$.x().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa4(0,p.d+s*b)
o=p.x
$.x().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sM(s)}}}
U.bm.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.y():s},
sL:function(a,b){var s,r,q,p=this
if(b==null)b=V.b3()
if(!J.B(p.a,b)){s=p.a
p.a=b
r=new D.r("matrix",s,b)
r.b=!0
q=p.b
if(q!=null)q.v(r)}},
aK:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bm))return!1
return J.B(this.a,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")}}
U.bo.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.y():s},
G:function(a){var s=this.e
if(s!=null)s.v(a)},
a1:function(){return this.G(null)},
dG:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaA(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
if(p!=null){o=p.gm()
n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.aj()
s.b=!0
this.G(s)},
eK:function(a,b){var s,r,q,p
for(s=b.length,r=this.gaA(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
if(p!=null)p.gm().J(0,r)}s=new D.ak()
s.b=!0
this.G(s)},
aK:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.a6()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.Q(p,p.length),s=null;p.u();){o=p.d
if(o!=null){r=o.aK(0,b,c)
if(r!=null)s=s==null?r:r.q(0,s)}}q.f=s==null?V.b3():s
p=q.e
if(p!=null)p.av(0)}return q.f},
n:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bo))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.e(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.e(p,r)
if(!J.B(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iS:1}
U.S.prototype={}
U.cf.prototype={
gm:function(){var s=this.cy
return s==null?this.cy=D.y():s},
G:function(a){var s=this.cy
if(s!=null)s.v(a)},
a1:function(){return this.G(null)},
aU:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.c.gcO().l(0,s.gbp())
s.a.c.gd8().l(0,s.gbr())
s.a.c.gc2().l(0,s.gbt())
return!0},
bq:function(a){var s=this
if(!J.B(s.c,s.a.b.c))return
s.x=s.y=!0
s.z=s.b.d},
bs:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.y)return
if(l.x){s=a.y.W(a.d)
s=s.Z(s)
r=l.r
if(typeof r!=="number")return H.o(r)
if(s<r)return
l.x=!1}if(l.d){s=a.c
s=a.y.W(a.d).q(0,2).U(0,s.ga5())
l.Q=s
r=l.b
s=s.a
if(typeof s!=="number")return s.q()
q=l.e
if(typeof q!=="number")return H.o(q)
r.sM(s*10*q)}else{s=a.c
r=a.y
q=a.d
p=r.W(q).q(0,2).U(0,s.ga5())
r=l.b
o=p.a
if(typeof o!=="number")return o.H()
n=l.e
if(typeof n!=="number")return H.o(n)
m=l.z
if(typeof m!=="number")return H.o(m)
r.sa4(0,-o*n+m)
l.b.sM(0)
l.Q=a.z.W(q).q(0,2).U(0,s.ga5())}l.a1()},
bu:function(a){var s,r,q,p=this
if(!p.y)return
p.y=!1
if(p.x)return
s=p.Q
if(s.Z(s)>0.0001){s=p.b
r=p.Q.a
if(typeof r!=="number")return r.q()
q=p.e
if(typeof q!=="number")return H.o(q)
s.sM(r*10*q)
p.a1()}},
aK:function(a,b,c){var s,r,q,p=this,o=p.ch,n=b.e
if(typeof o!=="number")return o.a6()
if(o<n){p.ch=n
s=b.y
p.b.af(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
p.cx=V.ap(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return p.cx},
$iS:1}
U.cg.prototype={
gm:function(){var s=this.fx
return s==null?this.fx=D.y():s},
G:function(a){var s=this.fx
if(s!=null)s.v(a)},
a1:function(){return this.G(null)},
aU:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.gcO().l(0,q.gbp())
q.a.c.gd8().l(0,q.gbr())
q.a.c.gc2().l(0,q.gbt())
s=q.a.d
r=s.f
s=r==null?s.f=D.y():r
s.l(0,q.gdZ())
s=q.a.d
r=s.d
s=r==null?s.d=D.y():r
s.l(0,q.ge0())
s=q.a.e
r=s.b
s=r==null?s.b=D.y():r
s.l(0,q.gf9())
s=q.a.e
r=s.d
s=r==null?s.d=D.y():r
s.l(0,q.gf7())
s=q.a.e
r=s.c
s=r==null?s.c=D.y():r
s.l(0,q.gf5())
return!0},
ah:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.H()
s=-s}if(this.r){if(typeof r!=="number")return r.H()
r=-r}return new V.X(s,r)},
bq:function(a){var s=this
t.c.a(a)
if(!J.B(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bs:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.cx)return
if(l.ch){s=a.y.W(a.d)
s=s.Z(s)
r=l.Q
if(typeof r!=="number")return H.o(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.ah(a.y.W(a.d).q(0,2).U(0,s.ga5()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.H()
q=l.y
if(typeof q!=="number")return H.o(q)
r.sM(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.H()
r=l.x
if(typeof r!=="number")return H.o(r)
q.sM(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.ah(r.W(q).q(0,2).U(0,s.ga5()))
r=l.c
o=p.a
if(typeof o!=="number")return o.H()
n=l.y
if(typeof n!=="number")return H.o(n)
m=l.cy
if(typeof m!=="number")return H.o(m)
r.sa4(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.H()
o=l.x
if(typeof o!=="number")return H.o(o)
r=l.db
if(typeof r!=="number")return H.o(r)
m.sa4(0,-n*o+r)
l.b.sM(0)
l.c.sM(0)
l.dx=l.ah(a.z.W(q).q(0,2).U(0,s.ga5()))}l.a1()},
bu:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.Z(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.H()
q=p.y
if(typeof q!=="number")return H.o(q)
s.sM(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.H()
s=p.x
if(typeof s!=="number")return H.o(s)
q.sM(-r*10*s)
p.a1()}},
e_:function(a){var s=this
if(t.x.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
e1:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!J.B(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.ah(r.W(q).q(0,2).U(0,s.ga5()))
r=l.c
o=p.a
if(typeof o!=="number")return o.H()
n=l.y
if(typeof n!=="number")return H.o(n)
m=l.cy
if(typeof m!=="number")return H.o(m)
r.sa4(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.H()
o=l.x
if(typeof o!=="number")return H.o(o)
r=l.db
if(typeof r!=="number")return H.o(r)
m.sa4(0,-n*o+r)
l.b.sM(0)
l.c.sM(0)
l.dx=l.ah(a.z.W(q).q(0,2).U(0,s.ga5()))
l.a1()},
fa:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
f8:function(a){var s,r,q,p,o,n,m,l=this
t.m.a(a)
if(!l.cx)return
if(l.ch){s=a.y.W(a.d)
s=s.Z(s)
r=l.Q
if(typeof r!=="number")return H.o(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.ah(a.y.W(a.d).q(0,2).U(0,s.ga5()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.H()
q=l.y
if(typeof q!=="number")return H.o(q)
r.sM(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.H()
r=l.x
if(typeof r!=="number")return H.o(r)
q.sM(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.ah(r.W(q).q(0,2).U(0,s.ga5()))
r=l.c
o=p.a
if(typeof o!=="number")return o.H()
n=l.y
if(typeof n!=="number")return H.o(n)
m=l.cy
if(typeof m!=="number")return H.o(m)
r.sa4(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.H()
o=l.x
if(typeof o!=="number")return H.o(o)
r=l.db
if(typeof r!=="number")return H.o(r)
m.sa4(0,-n*o+r)
l.b.sM(0)
l.c.sM(0)
l.dx=l.ah(a.z.W(q).q(0,2).U(0,s.ga5()))}l.a1()},
f6:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.Z(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.H()
q=p.y
if(typeof q!=="number")return H.o(q)
s.sM(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.H()
s=p.x
if(typeof s!=="number")return H.o(s)
q.sM(-r*10*s)
p.a1()}},
aK:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(typeof o!=="number")return o.a6()
if(o<n){p.dy=n
s=b.y
p.c.af(0,s)
p.b.af(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
p.fr=V.ap(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1).q(0,V.jd(p.c.d))}return p.fr},
$iS:1}
U.ch.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.y():s},
G:function(a){var s=this.r
if(s!=null)s.v(a)},
aU:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.y():r
r=p.ge2()
s.l(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.y():q).l(0,r)
return!0},
e3:function(a){var s,r,q,p,o=this
if(!J.B(o.b,o.a.b.c))return
t.F.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.q()
p=s+r*q
if(s!==p){o.d=p
s=new D.r("zoom",s,p)
s.b=!0
o.G(s)}},
aK:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.lt(s,s,s)}return r.f},
$iS:1}
M.bO.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.y():s},
O:function(a){var s=this.r
if(s!=null)s.v(a)},
aP:function(){return this.O(null)},
saV:function(a){var s,r,q=this
if(a==null)a=new X.fZ()
s=q.b
if(s!==a){if(s!=null)s.gm().J(0,q.gN())
r=q.b
q.b=a
a.gm().l(0,q.gN())
s=new D.r("camera",r,q.b)
s.b=!0
q.O(s)}},
sb_:function(a,b){var s,r,q=this
if(b==null)b=X.fX(null)
s=q.c
if(s!==b){if(s!=null)s.gm().J(0,q.gN())
r=q.c
q.c=b
b.gm().l(0,q.gN())
s=new D.r("target",r,q.c)
s.b=!0
q.O(s)}},
sb0:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gm().J(0,r.gN())
s=r.d
r.d=a
if(a!=null)a.gm().l(0,r.gN())
q=new D.r("technique",s,r.d)
q.b=!0
r.O(q)}},
a2:function(a){var s=this
a.c0(s.d)
s.c.S(a)
s.b.S(a)
s.e.af(0,a)
s.e.a2(a)
s.b.ax(a)
s.c.toString
a.c_()},
$iaE:1}
M.bT.prototype={
O:function(a){var s=this.y
if(s!=null)s.v(a)},
aP:function(){return this.O(null)},
ef:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gN(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.ai()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.aj()
s.b=!0
this.O(s)},
eh:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gN(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.ai()
o.d=0
p.z=o}o.J(0,r)}}s=new D.ak()
s.b=!0
this.O(s)},
saV:function(a){var s,r,q=this
if(a==null)a=X.jf(null)
s=q.b
if(s!==a){if(s!=null)s.gm().J(0,q.gN())
r=q.b
q.b=a
a.gm().l(0,q.gN())
s=new D.r("camera",r,q.b)
s.b=!0
q.O(s)}},
sb_:function(a,b){var s,r,q=this
if(b==null)b=X.fX(null)
s=q.c
if(s!==b){if(s!=null)s.gm().J(0,q.gN())
r=q.c
q.c=b
b.gm().l(0,q.gN())
s=new D.r("target",r,q.c)
s.b=!0
q.O(s)}},
sb0:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gm().J(0,r.gN())
s=r.d
r.d=a
if(a!=null)a.gm().l(0,r.gN())
q=new D.r("technique",s,r.d)
q.b=!0
r.O(q)}},
gm:function(){var s=this.y
return s==null?this.y=D.y():s},
a2:function(a){var s,r=this
a.c0(r.d)
r.c.S(a)
r.b.S(a)
s=r.d
if(s!=null)s.af(0,a)
for(s=r.e.a,s=new J.Q(s,s.length);s.u();)s.d.af(0,a)
for(s=r.e.a,s=new J.Q(s,s.length);s.u();)s.d.a2(a)
r.b.toString
a.cy.au()
a.db.au()
r.c.toString
a.c_()},
$iaE:1}
M.aE.prototype={}
M.hE.prototype={}
M.dN.prototype={
gm:function(){var s=this.db
return s==null?this.db=D.y():s},
O:function(a){var s=this.db
if(s!=null)s.v(a)},
aP:function(){return this.O(null)},
e7:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gN(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
if(p!=null){o=p.gm()
n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.aj()
s.b=!0
this.O(s)},
eO:function(a,b){var s,r,q,p
for(s=b.length,r=this.gN(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
if(p!=null)p.gm().J(0,r)}s=new D.ak()
s.b=!0
this.O(s)},
a2:function(a){var s,r,q=this
q.z.sdh(0,q.x)
for(s=q.Q.a,s=new J.Q(s,s.length);s.u();){r=s.d
r.sb_(0,q.z)
r.saV(q.f)
r.a2(a)}q.z.sdh(0,q.y)
for(s=q.Q.a,s=new J.Q(s,s.length);s.u();){r=s.d
r.sb_(0,q.z)
r.saV(q.r)
r.a2(a)}}}
A.fo.prototype={}
A.fp.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
fv:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
cN:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.R.prototype={
gag:function(a){var s=this.a?1:0,r=this.c?4:0
return s|0|r},
i:function(a){var s=this.a?1:0,r=this.c?4:0
return""+(s|0|r)},
n:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.R))return!1
if(this.a===b.a)s=this.c===b.c
else s=!1
return s}}
A.h8.prototype={
dz:function(c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2="Required uniform value, ",c3=", was not defined or used in shader.",c4="uniform mat4 objMat;\n"
c0.z=c5
s=new P.b9("")
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
A.mQ(c5,s)
A.mS(c5,s)
A.mR(c5,s)
A.mU(c5,s)
A.mV(c5,s)
A.mT(c5,s)
A.mW(c5,s)
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
c0.d2(0,q.charCodeAt(0)==0?q:q,A.mP(c0.z))
c0.Q=c0.x.h(0,"posAttr")
c0.cx=c0.x.h(0,"normAttr")
c0.ch=c0.x.h(0,"binmAttr")
c0.cy=c0.x.h(0,"txt2DAttr")
c0.db=c0.x.h(0,"txtCubeAttr")
c0.dx=c0.x.h(0,"bendAttr")
if(c5.dy)c0.id=t.q.a(c0.y.B(0,"invViewMat"))
if(r)c0.dy=t.q.a(c0.y.B(0,"objMat"))
if(p)c0.fr=t.q.a(c0.y.B(0,"viewObjMat"))
r=t.q
c0.fy=r.a(c0.y.B(0,"projViewObjMat"))
if(c5.go)c0.fx=r.a(c0.y.B(0,"viewMat"))
if(c5.x1)c0.k1=t.O.a(c0.y.B(0,"txt2DMat"))
if(c5.x2)c0.k2=r.a(c0.y.B(0,"txtCubeMat"))
if(c5.y1)c0.k3=r.a(c0.y.B(0,"colorMat"))
c0.r1=[]
q=c5.b9
if(q>0){c0.k4=c0.y.B(0,"bendMatCount")
for(l=0;l<q;++l){p=c0.r1
o=c0.y
n="bendValues["+l+"].mat"
k=o.h(0,n)
if(k==null)H.n(P.m(c2+n+c3))
p.push(r.a(k))}}r=c5.a
if(r.a)c0.r2=t.r.a(c0.y.B(0,"emissionClr"))
if(r.c)c0.ry=t.Q.a(c0.y.B(0,"emissionTxt"))
r=c5.b
if(r.a)c0.x1=t.r.a(c0.y.B(0,"ambientClr"))
if(r.c)c0.y1=t.Q.a(c0.y.B(0,"ambientTxt"))
r=c5.c
if(r.a)c0.y2=t.r.a(c0.y.B(0,"diffuseClr"))
if(r.c)c0.ap=t.Q.a(c0.y.B(0,"diffuseTxt"))
r=c5.d
if(r.a)c0.ba=t.r.a(c0.y.B(0,"invDiffuseClr"))
if(r.c)c0.cQ=t.Q.a(c0.y.B(0,"invDiffuseTxt"))
r=c5.e
q=r.a
if(!q)p=r.c
else p=!0
if(p){c0.cT=t.n.a(c0.y.B(0,"shininess"))
if(q)c0.cR=t.r.a(c0.y.B(0,"specularClr"))
if(r.c)c0.cS=t.Q.a(c0.y.B(0,"specularTxt"))}if(c5.f.c)c0.cU=t.Q.a(c0.y.B(0,"bumpTxt"))
if(c5.db){r=t.Q
c0.cV=r.a(c0.y.B(0,"envSampler"))
q=c5.r
if(q.a)c0.cW=t.r.a(c0.y.B(0,"reflectClr"))
if(q.c)c0.cX=r.a(c0.y.B(0,"reflectTxt"))
q=c5.x
p=q.a
if(!p)o=q.c
else o=!0
if(o){c0.cY=t.n.a(c0.y.B(0,"refraction"))
if(p)c0.cZ=t.r.a(c0.y.B(0,"refractClr"))
if(q.c)c0.d_=r.a(c0.y.B(0,"refractTxt"))}}r=c5.y
if(r.a)c0.d0=t.n.a(c0.y.B(0,"alpha"))
if(r.c)c0.d1=t.Q.a(c0.y.B(0,"alphaTxt"))
if(c5.k1){r=c5.z
q=r.length
if(q!==0){c0.bJ=new H.t(t.J)
c0.bK=new H.t(t.u)
for(p=t.r,o=t.n,j=0;j<r.length;r.length===q||(0,H.l)(r),++j){i=r[j]
h=i.a
g="barLight"+H.d(h)
f=[]
for(n=i.b,l=0;l<n;++l){m=c0.y
e=g+"s["+l+"].startPnt"
k=m.h(0,e)
if(k==null)H.n(P.m(c2+e+c3))
p.a(k)
m=c0.y
e=g+"s["+l+"].endPnt"
d=m.h(0,e)
if(d==null)H.n(P.m(c2+e+c3))
p.a(d)
m=c0.y
e=g+"s["+l+"].color"
c=m.h(0,e)
if(c==null)H.n(P.m(c2+e+c3))
p.a(c)
if(typeof h!=="number")return h.ac()
if((h&4)!==0){m=c0.y
e=g+"s["+l+"].att0"
b=m.h(0,e)
if(b==null)H.n(P.m(c2+e+c3))
o.a(b)
m=c0.y
e=g+"s["+l+"].att1"
a=m.h(0,e)
if(a==null)H.n(P.m(c2+e+c3))
o.a(a)
m=c0.y
e=g+"s["+l+"].att2"
a0=m.h(0,e)
if(a0==null)H.n(P.m(c2+e+c3))
o.a(a0)
a1=a0
a2=a
a3=b}else{a1=c1
a2=a1
a3=a2}f.push(new A.e1(k,d,c,a3,a2,a1))}c0.bK.k(0,h,f)
n=c0.bJ
m=c0.y
e=g+"Count"
k=m.h(0,e)
if(k==null)H.n(P.m(c2+e+c3))
n.k(0,h,k)}}r=c5.Q
q=r.length
if(q!==0){c0.bL=new H.t(t.J)
c0.bM=new H.t(t.L)
for(p=t.r,o=t.t,j=0;j<r.length;r.length===q||(0,H.l)(r),++j){i=r[j]
h=i.a
g="dirLight"+H.d(h)
f=[]
for(n=i.b,l=0;l<n;++l){if(typeof h!=="number")return h.ac()
m=(h&1)!==0
if(m){e=c0.y
a4=g+"s["+l+"].objUp"
k=e.h(0,a4)
if(k==null)H.n(P.m(c2+a4+c3))
p.a(k)
e=c0.y
a4=g+"s["+l+"].objRight"
d=e.h(0,a4)
if(d==null)H.n(P.m(c2+a4+c3))
p.a(d)
e=c0.y
a4=g+"s["+l+"].objDir"
c=e.h(0,a4)
if(c==null)H.n(P.m(c2+a4+c3))
p.a(c)
a5=c
a6=d
a7=k}else{a5=c1
a6=a5
a7=a6}e=c0.y
a4=g+"s["+l+"].viewDir"
k=e.h(0,a4)
if(k==null)H.n(P.m(c2+a4+c3))
p.a(k)
e=c0.y
a4=g+"s["+l+"].color"
d=e.h(0,a4)
if(d==null)H.n(P.m(c2+a4+c3))
p.a(d)
if(m){m=c0.y
e=g+"sTexture2D"+l
c=m.h(0,e)
if(c==null)H.n(P.m(c2+e+c3))
o.a(c)
a8=c}else a8=c1
f.push(new A.e2(a7,a6,a5,k,d,a8))}c0.bM.k(0,h,f)
n=c0.bL
m=c0.y
e=g+"Count"
k=m.h(0,e)
if(k==null)H.n(P.m(c2+e+c3))
n.k(0,h,k)}}r=c5.ch
q=r.length
if(q!==0){c0.bN=new H.t(t.J)
c0.bO=new H.t(t.W)
for(p=t.r,o=t.O,n=t.Q,m=t.y,e=t.n,j=0;j<r.length;r.length===q||(0,H.l)(r),++j){i=r[j]
h=i.a
g="pointLight"+H.d(h)
f=[]
for(a4=i.b,l=0;l<a4;++l){a9=c0.y
b0=g+"s["+l+"].point"
k=a9.h(0,b0)
if(k==null)H.n(P.m(c2+b0+c3))
p.a(k)
a9=c0.y
b0=g+"s["+l+"].viewPnt"
d=a9.h(0,b0)
if(d==null)H.n(P.m(c2+b0+c3))
p.a(d)
a9=c0.y
b0=g+"s["+l+"].color"
c=a9.h(0,b0)
if(c==null)H.n(P.m(c2+b0+c3))
p.a(c)
if(typeof h!=="number")return h.ac()
if((h&3)!==0){a9=c0.y
b0=g+"s["+l+"].invViewRotMat"
b=a9.h(0,b0)
if(b==null)H.n(P.m(c2+b0+c3))
o.a(b)
b1=b}else b1=c1
if((h&1)!==0){a9=c0.y
b0=g+"sTextureCube"+l
b=a9.h(0,b0)
if(b==null)H.n(P.m(c2+b0+c3))
n.a(b)
a8=b}else a8=c1
if((h&2)!==0){a9=c0.y
b0=g+"sShadowCube"+l
b=a9.h(0,b0)
if(b==null)H.n(P.m(c2+b0+c3))
n.a(b)
a9=c0.y
b0=g+"s["+l+"].shadowAdj"
a=a9.h(0,b0)
if(a==null)H.n(P.m(c2+b0+c3))
m.a(a)
b2=b
b3=a}else{b2=c1
b3=b2}if((h&4)!==0){a9=c0.y
b0=g+"s["+l+"].att0"
b=a9.h(0,b0)
if(b==null)H.n(P.m(c2+b0+c3))
e.a(b)
a9=c0.y
b0=g+"s["+l+"].att1"
a=a9.h(0,b0)
if(a==null)H.n(P.m(c2+b0+c3))
e.a(a)
a9=c0.y
b0=g+"s["+l+"].att2"
a0=a9.h(0,b0)
if(a0==null)H.n(P.m(c2+b0+c3))
e.a(a0)
a1=a0
a2=a
a3=b}else{a1=c1
a2=a1
a3=a2}f.push(new A.e5(k,d,b1,c,a8,b2,b3,a3,a2,a1))}c0.bO.k(0,h,f)
a4=c0.bN
a9=c0.y
b0=g+"Count"
k=a9.h(0,b0)
if(k==null)H.n(P.m(c2+b0+c3))
a4.k(0,h,k)}}r=c5.cx
q=r.length
if(q!==0){c0.bP=new H.t(t.J)
c0.bQ=new H.t(t.M)
for(p=t.r,o=t.n,n=t.y,m=t.t,j=0;j<r.length;r.length===q||(0,H.l)(r),++j){i=r[j]
h=i.a
g="spotLight"+H.d(h)
f=[]
for(e=i.b,l=0;l<e;++l){a4=c0.y
a9=g+"s["+l+"].objPnt"
k=a4.h(0,a9)
if(k==null)H.n(P.m(c2+a9+c3))
p.a(k)
a4=c0.y
a9=g+"s["+l+"].objDir"
d=a4.h(0,a9)
if(d==null)H.n(P.m(c2+a9+c3))
p.a(d)
a4=c0.y
a9=g+"s["+l+"].viewPnt"
c=a4.h(0,a9)
if(c==null)H.n(P.m(c2+a9+c3))
p.a(c)
a4=c0.y
a9=g+"s["+l+"].color"
b=a4.h(0,a9)
if(b==null)H.n(P.m(c2+a9+c3))
p.a(b)
if(typeof h!=="number")return h.ac()
if((h&3)!==0){a4=c0.y
a9=g+"s["+l+"].objUp"
a=a4.h(0,a9)
if(a==null)H.n(P.m(c2+a9+c3))
p.a(a)
a4=c0.y
a9=g+"s["+l+"].objRight"
a0=a4.h(0,a9)
if(a0==null)H.n(P.m(c2+a9+c3))
p.a(a0)
a4=c0.y
a9=g+"s["+l+"].tuScalar"
b4=a4.h(0,a9)
if(b4==null)H.n(P.m(c2+a9+c3))
o.a(b4)
a4=c0.y
a9=g+"s["+l+"].tvScalar"
b5=a4.h(0,a9)
if(b5==null)H.n(P.m(c2+a9+c3))
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
if(a==null)H.n(P.m(c2+b0+c3))
n.a(a)
b3=a}else b3=c1
if((h&8)!==0){a9=c0.y
b0=g+"s["+l+"].cutoff"
a=a9.h(0,b0)
if(a==null)H.n(P.m(c2+b0+c3))
o.a(a)
a9=c0.y
b0=g+"s["+l+"].coneAngle"
a0=a9.h(0,b0)
if(a0==null)H.n(P.m(c2+b0+c3))
o.a(a0)
b8=a0
b9=a}else{b8=c1
b9=b8}if((h&4)!==0){a9=c0.y
b0=g+"s["+l+"].att0"
a=a9.h(0,b0)
if(a==null)H.n(P.m(c2+b0+c3))
o.a(a)
a9=c0.y
b0=g+"s["+l+"].att1"
a0=a9.h(0,b0)
if(a0==null)H.n(P.m(c2+b0+c3))
o.a(a0)
a9=c0.y
b0=g+"s["+l+"].att2"
b4=a9.h(0,b0)
if(b4==null)H.n(P.m(c2+b0+c3))
o.a(b4)
a1=b4
a2=a0
a3=a}else{a1=c1
a2=a1
a3=a2}if((h&1)!==0){a9=c0.y
b0=g+"sTexture2D"+l
a=a9.h(0,b0)
if(a==null)H.n(P.m(c2+b0+c3))
m.a(a)
a8=a}else a8=c1
if(a4){a4=c0.y
a9=g+"sShadow2D"+l
a=a4.h(0,a9)
if(a==null)H.n(P.m(c2+a9+c3))
m.a(a)
b2=a}else b2=c1
f.push(new A.e8(k,d,c,b,a7,a6,b7,b6,b3,b9,b8,a3,a2,a1,a8,b2))}c0.bQ.k(0,h,f)
e=c0.bP
a4=c0.y
a9=g+"Count"
k=a4.h(0,a9)
if(k==null)H.n(P.m(c2+a9+c3))
e.k(0,h,k)}}}},
a9:function(a,b){if(b!=null&&b.d>=6)a.c6(b)}}
A.ft.prototype={
i:function(a){return"barLight"+H.d(this.a)}}
A.fF.prototype={
i:function(a){return"dirLight"+H.d(this.a)}}
A.hv.prototype={
i:function(a){return"pointLight"+H.d(this.a)}}
A.hO.prototype={
i:function(a){return"spotLight"+H.d(this.a)}}
A.hb.prototype={
i:function(a){return this.ap}}
A.e1.prototype={}
A.e2.prototype={}
A.e5.prototype={}
A.e8.prototype={}
A.dF.prototype={
cd:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
d2:function(a,b,c){var s,r,q,p=this
p.c=b
p.d=c
p.e=p.co(b,35633)
p.f=p.co(p.d,35632)
s=p.a
r=s.createProgram()
p.r=r
s.attachShader(r,p.e)
s.attachShader(p.r,p.f)
s.linkProgram(p.r)
if(!s.getProgramParameter(p.r,35714)){q=s.getProgramInfoLog(p.r)
s.deleteProgram(p.r)
H.n(P.m("Failed to link shader: "+H.d(q)))}p.f1()
p.f3()},
S:function(a){a.a.useProgram(this.r)
this.x.fv()},
co:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.c(P.m("Error compiling shader '"+H.d(q)+"': "+H.d(s)))}return q},
f1:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.o(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.fo(n,r.name,q))}p.x=new A.fp(o)},
f3:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.o(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.fm(r.type,r.size,r.name,q))}p.y=new A.ic(o)},
aB:function(a,b,c){var s=this.a
if(a===1)return new A.dZ(s,b,c)
else return A.jk(s,this.r,b,a,c)},
dU:function(a,b,c){var s=this.a
if(a===1)return new A.e6(s,b,c)
else return A.jk(s,this.r,b,a,c)},
dV:function(a,b,c){var s=this.a
if(a===1)return new A.e7(s,b,c)
else return A.jk(s,this.r,b,a,c)},
b7:function(a,b){return new P.ew(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
fm:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aB(b,c,d)
case 5121:return s.aB(b,c,d)
case 5122:return s.aB(b,c,d)
case 5123:return s.aB(b,c,d)
case 5124:return s.aB(b,c,d)
case 5125:return s.aB(b,c,d)
case 5126:return new A.dY(s.a,c,d)
case 35664:return new A.i8(s.a,c,d)
case 35665:return new A.e_(s.a,c,d)
case 35666:return new A.e0(s.a,c,d)
case 35667:return new A.i9(s.a,c,d)
case 35668:return new A.ia(s.a,c,d)
case 35669:return new A.ib(s.a,c,d)
case 35674:return new A.id(s.a,c,d)
case 35675:return new A.e3(s.a,c,d)
case 35676:return new A.e4(s.a,c,d)
case 35678:return s.dU(b,c,d)
case 35680:return s.dV(b,c,d)
case 35670:throw H.c(s.b7("BOOL",c))
case 35671:throw H.c(s.b7("BOOL_VEC2",c))
case 35672:throw H.c(s.b7("BOOL_VEC3",c))
case 35673:throw H.c(s.b7("BOOL_VEC4",c))
default:throw H.c(P.m("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}}
A.hN.prototype={}
A.i6.prototype={}
A.ic.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
B:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.m("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.D()},
D:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.l)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.dZ.prototype={
i:function(a){return"Uniform1i: "+H.d(this.c)}}
A.i9.prototype={
i:function(a){return"Uniform2i: "+H.d(this.c)}}
A.ia.prototype={
i:function(a){return"Uniform3i: "+H.d(this.c)}}
A.ib.prototype={
i:function(a){return"Uniform4i: "+H.d(this.c)}}
A.i7.prototype={
i:function(a){return"Uniform1iv: "+H.d(this.c)}}
A.dY.prototype={
i:function(a){return"Uniform1f: "+H.d(this.c)}}
A.i8.prototype={
i:function(a){return"Uniform2f: "+H.d(this.c)}}
A.e_.prototype={
i:function(a){return"Uniform3f: "+H.d(this.c)}}
A.e0.prototype={
i:function(a){return"Uniform4f: "+H.d(this.c)}}
A.id.prototype={
i:function(a){return"Uniform1Mat2 "+H.d(this.c)}}
A.e3.prototype={
a7:function(a){var s=new Float32Array(H.cE(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.d(this.c)}}
A.e4.prototype={
a7:function(a){var s=new Float32Array(H.cE(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.d(this.c)}}
A.e6.prototype={
i:function(a){return"UniformSampler2D: "+H.d(this.c)}}
A.e7.prototype={
c6:function(a){var s=a==null||a.d<6,r=this.a,q=this.d
if(s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}
F.iL.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.bV(q.b,b).bV(q.d.bV(q.c,b),c)
q=new V.O(p.a,p.b,p.c)
if(!J.B(a.f,q)){a.f=q
q=a.a
if(q!=null)q.a_()}a.sb1(p.E())
q=1-b
s=1-c
s=new V.aC(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.B(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.a_()}}}
F.fS.prototype={
dO:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.ee()
if(n!=null)q=q.t(0,n)
if(s!=null)q=q.t(0,s)
if(r!=null)q=q.t(0,r)
if(q.d5())return p
return q.E()},
dQ:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.X(0,n)
q=new V.w(o.a,o.b,o.c).E()
o=r.X(0,n)
return q.aW(new V.w(o.a,o.b,o.c).E()).E()},
bF:function(){var s,r=this
if(r.d!=null)return!0
s=r.dO()
if(s==null){s=r.dQ()
if(s==null)return!1}r.d=s
r.a.a.a_()
return!0},
dN:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.ee()
if(n!=null)q=q.t(0,n)
if(s!=null)q=q.t(0,s)
if(r!=null)q=q.t(0,r)
if(q.d5())return p
return q.E()},
dP:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.x().toString
if(Math.abs(p-0)<1e-9){j=b.X(0,e)
o=new V.w(j.a,j.b,j.c).E()
if(q.a-r.a<0)o=o.H(0)}else{n=(j-s.b)/p
j=b.X(0,e)
j=new V.O(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).X(0,h)
o=new V.w(j.a,j.b,j.c).E()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.H(0)}j=l.d
if(j!=null){m=j.E()
o=m.aW(o).E().aW(m).E()}return o},
bD:function(){var s,r=this
if(r.e!=null)return!0
s=r.dN()
if(s==null){s=r.dP()
if(s==null)return!1}r.e=s
r.a.a.a_()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.D()},
w:function(a){var s,r=this,q=r.a
if(q==null||r.b==null||r.c==null)return a+"disposed"
s=a+C.b.ab(J.Z(q.e),0)+", "+C.b.ab(J.Z(r.b.e),0)+", "+C.b.ab(J.Z(r.c.e),0)+" {"
q=r.d
s=q!=null?s+(q.i(0)+", "):s+"-, "
q=r.e
return q!=null?s+(q.i(0)+"}"):s+"-}"},
D:function(){return this.w("")}}
F.h3.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.D()},
w:function(a){var s=this.a
if(s==null||this.b==null)return a+"disposed"
return a+C.b.ab(J.Z(s.e),0)+", "+C.b.ab(J.Z(this.b.e),0)},
D:function(){return this.w("")}}
F.hu.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.D()},
w:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.b.ab(J.Z(s.e),0)},
D:function(){return this.w("")}}
F.hG.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.y():s},
fE:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.V()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.l)(e),++q){p=e[q]
f.a.l(0,p.fl())}f.a.V()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.l)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.V()
m=m.e
if(typeof m!=="number")return m.t()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
l=n[m]
f.b.a.a.l(0,l)
m=new F.hu()
if(l.a==null)H.n(P.m("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.v(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.l)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.V()
m=m.e
if(typeof m!=="number")return m.t()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.V()
n=n.e
if(typeof n!=="number")return n.t()
n+=s
m=m.c
if(n>=m.length)return H.e(m,n)
i=m[n]
n=f.c.a
n.a.l(0,j)
n.a.l(0,i)
F.ln(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.l)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.V()
m=m.e
if(typeof m!=="number")return m.t()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.V()
n=n.e
if(typeof n!=="number")return n.t()
n+=s
m=m.c
if(n>=m.length)return H.e(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.V()
m=m.e
if(typeof m!=="number")return m.t()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
g=n[m]
m=f.d.a
m.a.l(0,j)
m.a.l(0,i)
m.a.l(0,g)
F.bU(j,i,g)}e=f.e
if(e!=null)e.av(0)},
ao:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.ao()||!1
if(!r.a.ao())s=!1
q=r.e
if(q!=null)q.av(0)
return s},
cJ:function(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=34962,a3=a1.a.c.length
a5.toString
s=a5.a
r=(s&$.af().a)!==0?1:0
if((s&$.aR().a)!==0)++r
if((s&$.aQ().a)!==0)++r
if((s&$.bg().a)!==0)++r
if((s&$.aS().a)!==0)++r
if((s&$.cM().a)!==0)++r
if((s&$.cN().a)!==0)++r
if((s&$.bK().a)!==0)++r
if((s&$.aP().a)!==0)++r
q=a5.gc8(a5)
p=q*4
s=a3*q
o=new Array(s)
o.fixed$length=Array
n=new Array(r)
n.fixed$length=Array
for(m=0,l=0;l<r;++l){k=a5.ff(l)
j=k.gc8(k)
n[l]=new Z.fv(k,j,m*4,p)
for(i=0;i<a3;++i){h=a1.a.c
if(i>=h.length)return H.e(h,i)
g=h[i].fD(k)
f=m+i*q
for(h=g.length,e=0;e<h;++e){d=g[e]
if(f<0||f>=s)return H.e(o,f)
o[f]=d;++f}}m+=j}s=a4.a
c=s.createBuffer()
s.bindBuffer(a2,c)
s.bufferData(a2,new Float32Array(H.cE(o)),35044)
s.bindBuffer(a2,null)
b=new Z.bM(new Z.eg(a2,c),n,a5)
b.b=[]
if(a1.b.b.length!==0){a=[]
for(l=0;h=a1.b.b,l<h.length;++l){h=h[l].a
h.a.a.V()
a.push(h.e)}a0=Z.jm(s,34963,a)
b.b.push(new Z.bX(0,a.length,a0))}if(a1.c.b.length!==0){a=[]
for(l=0;h=a1.c.b,l<h.length;++l){h=h[l].a
h.a.a.V()
a.push(h.e)
h=a1.c.b
if(l>=h.length)return H.e(h,l)
h=h[l].b
h.a.a.V()
a.push(h.e)}a0=Z.jm(s,34963,a)
b.b.push(new Z.bX(1,a.length,a0))}if(a1.d.b.length!==0){a=[]
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
a.push(h.e)}a0=Z.jm(s,34963,a)
b.b.push(new Z.bX(4,a.length,a0))}return b},
i:function(a){var s=this,r="   ",q=[]
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.w(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.w(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.w(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.w(r))}return C.a.p(q,"\n")},
a_:function(){var s=this.e
if(s!=null)s.v(null)}}
F.hH.prototype={
fd:function(a){var s,r,q,p,o=[],n=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.l(0,n)
s.a.l(0,q)
s.a.l(0,p)
o.push(F.bU(n,q,p))}return o},
fe:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=[]
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
if(n){l.l(0,k)
s.a.l(0,j)
s.a.l(0,h)
f.push(F.bU(k,j,h))
s.a.l(0,k)
s.a.l(0,h)
s.a.l(0,g)
f.push(F.bU(k,h,g))}else{l.l(0,j)
s.a.l(0,h)
s.a.l(0,g)
f.push(F.bU(j,h,g))
s.a.l(0,j)
s.a.l(0,g)
s.a.l(0,k)
f.push(F.bU(j,g,k))}n=!n}p=!p}return f},
gj:function(a){return this.b.length},
ao:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.l)(s),++p)if(!s[p].bF())q=!1
return q},
bE:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.l)(s),++p)if(!s[p].bD())q=!1
return q},
i:function(a){return this.D()},
w:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].w(a))
return C.a.p(p,"\n")},
D:function(){return this.w("")}}
F.hI.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.D()},
w:function(a){var s,r,q=[],p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q.push(r[s].w(a+(""+s+". ")))}return C.a.p(q,"\n")},
D:function(){return this.w("")}}
F.hJ.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.D()},
w:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].w(a))
return C.a.p(p,"\n")},
D:function(){return this.w("")}}
F.il.prototype={
bH:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.im(s.cx,p,m,r,q,o,n,a,l)},
fl:function(){return this.bH(null)},
sb1:function(a){var s
if(!J.B(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a_()}},
fD:function(a){var s,r=this
if(a.n(0,$.af())){s=r.f
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.n(0,$.aR())){s=r.r
if(s==null)return[0,1,0]
else return[s.a,s.b,s.c]}else if(a.n(0,$.aQ())){s=r.x
if(s==null)return[0,0,1]
else return[s.a,s.b,s.c]}else if(a.n(0,$.bg())){s=r.y
if(s==null)return[0,0]
else return[s.a,s.b]}else if(a.n(0,$.aS())){s=r.z
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.n(0,$.cM())){s=r.Q
if(s==null)return[1,1,1]
else return[s.a,s.b,s.c]}else if(a.n(0,$.cN())){s=r.Q
if(s==null)return[1,1,1,1]
else return[s.a,s.b,s.c,s.d]}else if(a.n(0,$.bK()))return[r.ch]
else if(a.n(0,$.aP())){s=r.cx
if(s==null)return[-1,-1,-1,-1]
else return[s.a,s.b,s.c,s.d]}else return[]},
bF:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.ee()
r.d.C(0,new F.iv(q))
r.r=q.a.E()
q=r.a
if(q!=null){q.a_()
q=r.a.e
if(q!=null)q.av(0)}return!0},
bD:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.ee()
r.d.C(0,new F.iu(q))
r.x=q.a.E()
q=r.a
if(q!=null){q.a_()
q=r.a.e
if(q!=null)q.av(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.D()},
w:function(a){var s,r,q=this,p="-",o=[]
o.push(C.b.ab(J.Z(q.e),0))
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
o.push(V.A(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.i(0))
else o.push(p)
r=C.a.p(o,", ")
return a+"{"+r+"}"},
D:function(){return this.w("")}}
F.iv.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.t(0,r)}}}
F.iu.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.t(0,r)}}}
F.io.prototype={
V:function(){},
l:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.m("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a_()
return!0},
b8:function(a,b,c,d,e,f){var s=F.im(a,null,b,c,null,d,e,f,0)
this.l(0,s)
return s},
gj:function(a){return this.c.length},
ao:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)s[q].bF()
return!0},
bE:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)s[q].bD()
return!0},
fh:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
if(p.z==null){o=p.r.E()
if(!J.B(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.v(null)}}}}return!0},
i:function(a){return this.D()},
w:function(a){var s,r,q,p
this.V()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.l)(r),++p)s.push(r[p].w(a))
return C.a.p(s,"\n")},
D:function(){return this.w("")}}
F.ip.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
C:function(a,b){var s=this
C.a.C(s.b,b)
C.a.C(s.c,new F.iq(s,b))
C.a.C(s.d,new F.ir(s,b))},
i:function(a){return this.D()},
D:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].w(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].w(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].w(""))
return C.a.p(p,"\n")}}
F.iq.prototype={
$1:function(a){if(!J.B(a.a,this.a))this.b.$1(a)}}
F.ir.prototype={
$1:function(a){var s=this.a
if(!J.B(a.a,s)&&!J.B(a.b,s))this.b.$1(a)}}
F.is.prototype={
gj:function(a){return this.b.length+this.c.length},
i:function(a){return this.D()},
D:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].w(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].w(""))
return C.a.p(p,"\n")}}
F.it.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.D()},
D:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].w(""))
return C.a.p(p,"\n")}}
O.dg.prototype={
gm:function(){var s=this.fr
return s==null?this.fr=D.y():s},
P:function(a){var s=this.fr
if(s!=null)s.v(a)},
aR:function(){return this.P(null)},
ct:function(a){this.a=null
this.P(a)},
f_:function(){return this.ct(null)},
e9:function(a,b){var s=new D.aj()
s.b=!0
this.P(s)},
eb:function(a,b){var s=new D.ak()
s.b=!0
this.P(s)},
cm:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.t(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
o=p.gai()
n=d.h(0,p.gai())
d.k(0,o,n==null?1:n)}m=[]
d.C(0,new O.hf(f,m))
C.a.aN(m,new O.hg())
l=new H.t(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){o=l.h(0,0)
l.k(0,0,o==null?1:o)}k=[]
l.C(0,new O.hh(f,k))
C.a.aN(k,new O.hi())
j=new H.t(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
o=p.gai()
n=j.h(0,p.gai())
j.k(0,o,n==null?1:n)}i=[]
j.C(0,new O.hj(f,i))
C.a.aN(i,new O.hk())
h=new H.t(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.l)(e),++q){p=e[q]
r=p.gai()
o=h.h(0,p.gai())
h.k(0,r,o==null?1:o)}g=[]
h.C(0,new O.hl(f,g))
C.a.aN(g,new O.hm())
e=C.c.Y(f.e.a.length+3,4)
f.dy.toString
return A.ls(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
a8:function(a,b){if(b!=null)if(!C.a.K(a,b)){b.a=a.length
a.push(b)}},
af:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.Q(s,s.length);s.u();){r=s.d
r.toString
q=$.ik
if(q==null)q=$.ik=new V.w(0,0,1)
r.a=q
p=$.ij
r.d=p==null?$.ij=new V.w(0,1,0):p
p=$.ii
r.e=p==null?$.ii=new V.w(-1,0,0):p
p=r.b
if(p!=null){o=p.a
if(o!=null){r.a=o.bf(q).E()
r.d=o.bf(r.d).E()
r.e=o.bf(r.e).E()}}}},
di:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cm()
s=b4.fr.h(0,b3.ap)
if(s==null){s=A.lr(b3,b4.a)
b4.cD(s)}b3=b2.a=s
b5.e=null}r=b3.z
q=r.ba
b3=b5.e
if(!(b3 instanceof Z.bM))b3=b5.e=null
if(b3==null||!b3.d.n(0,q)){b3=r.k4
if(b3)b5.d.ao()
p=r.r1
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.d.bE()
o.a.bE()
o=o.e
if(o!=null)o.av(0)}o=r.rx
if(o){n=b5.d
m=n.e
if(m!=null)++m.d
n.a.fh()
n=n.e
if(n!=null)n.av(0)}l=b5.d.cJ(new Z.eh(b4.a),q)
l.aq($.af()).e=b2.a.Q.c
if(b3)l.aq($.aR()).e=b2.a.cx.c
if(p)l.aq($.aQ()).e=b2.a.ch.c
if(r.r2)l.aq($.bg()).e=b2.a.cy.c
if(o)l.aq($.aS()).e=b2.a.db.c
if(r.ry)l.aq($.aP()).e=b2.a.dx.c
b5.e=l}k=[]
b2.a.S(b4)
if(r.fr){b3=b2.a
p=b4.dx
p=p.gL(p)
b3=b3.dy
b3.toString
b3.a7(p.a3(0,!0))}if(r.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.gL(p)
o=b4.dx
o=b4.cx=p.q(0,o.gL(o))
p=o}b3=b3.fr
b3.toString
b3.a7(p.a3(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.gfU()
o=b4.dx
o=b4.ch=p.q(0,o.gL(o))
p=o}b3=b3.fy
b3.toString
b3.a7(p.a3(0,!0))
if(r.go){b3=b2.a
p=b4.db
p=p.gL(p)
b3=b3.fx
b3.toString
b3.a7(p.a3(0,!0))}if(r.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.a7(C.h.a3(p,!0))}if(r.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.a7(C.h.a3(p,!0))}if(r.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.a7(C.h.a3(p,!0))}if(r.b9>0){j=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,j)
for(i=0;i<j;++i){b3=b2.a
p=b2.e.a
if(i>=p.length)return H.e(p,i)
p=p[i]
b3=b3.r1
if(i>=b3.length)return H.e(b3,i)
b3=b3[i]
h=new Float32Array(H.cE(p.a3(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,h)}}b3=r.a
if(b3.a){p=b2.a
o=b2.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a8(k,b2.f.e)
b3=b2.a
p=b2.f.e
b3.a9(b3.ry,p)}if(r.k1){b3=r.b
if(b3.a){p=b2.a
o=b2.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a8(k,b2.r.e)
b3=b2.a
p=b2.r.e
b3.a9(b3.y1,p)}b3=r.c
if(b3.a){p=b2.a
o=b2.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a8(k,b2.x.e)
b3=b2.a
p=b2.x.e
b3.a9(b3.ap,p)}b3=r.d
if(b3.a){p=b2.a
o=b2.y.f
p=p.ba
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a8(k,b2.y.e)
b3=b2.a
p=b2.y.e
b3.a9(b3.cQ,p)}b3=r.e
p=b3.a
if(!p)o=b3.c
else o=!0
if(o){o=b2.a
n=b2.z.ch
o=o.cT
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.z.f
p=p.cR
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a8(k,b2.z.e)
b3=b2.a
p=b2.z.e
b3.a9(b3.cS,p)}b3=r.z
if(b3.length>0){g=new H.t(t.a)
for(p=b2.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.l)(p),++f){e=p[f]
d=e.gai()
c=g.h(0,d)
if(c==null)c=0
g.k(0,d,c+1)
b=J.cO(b2.a.bK.h(0,d),c)
n=e.gh7()
m=$.aq
n=n.b3(m==null?$.aq=new V.O(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.ghc()
m=$.aq
n=n.b3(m==null?$.aq=new V.O(0,0,0):m)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaH(e)
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
if(e.gcP()){n=e.gcE()
m=b.e
m.a.uniform1f(m.d,n)
n=e.gcF()
m=b.f
m.a.uniform1f(m.d,n)
n=e.gcG()
m=b.r
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.l)(b3),++f){o=b3[f].a
j=g.h(0,o)
if(j==null)j=0
o=b2.a.bJ.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.Q
if(b3.length>0){p=b4.db
a=p.gL(p)
a0=new H.t(t.a)
for(p=b2.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.l)(p),++f){e=p[f]
c=a0.h(0,0)
if(c==null)c=0
a0.k(0,0,c+1)
b=J.cO(b2.a.bM.h(0,0),c)
n=a.bf(e.a).E()
m=b.e
a1=n.a
a2=n.b
n=n.c
m.a.uniform3f(m.d,a1,a2,n)
n=e.c
a2=b.f
a2.a.uniform3f(a2.d,n.a,n.b,n.c)}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.l)(b3),++f){o=b3[f].a
j=a0.h(0,o)
if(j==null)j=0
o=b2.a.bL.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.ch
if(b3.length>0){p=b4.db
a=p.gL(p)
a3=new H.t(t.a)
for(p=b2.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.l)(p),++f){e=p[f]
d=e.gai()
c=a3.h(0,d)
if(c==null)c=0
a3.k(0,d,c+1)
b=J.cO(b2.a.bO.h(0,d),c)
a4=a.q(0,e.gL(e))
n=e.gL(e)
m=$.aq
n=n.b3(m==null?$.aq=new V.O(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=$.aq
n=a4.b3(n==null?$.aq=new V.O(0,0,0):n)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaH(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gaw()
n=a4.bS(0)
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
h=new Float32Array(H.cE(new V.dh(m,a1,a2,a5,a6,a7,a8,a9,n).a3(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,h)
e.gaw()
n=e.gaw()
if(!C.a.K(k,n)){n.a=k.length
k.push(n)}n=e.gaw()
m=n.gaX(n)
if(m){m=b.f
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}e.gaM()
n=e.gdr()
m=b.x
m.toString
a1=n.gfq(n)
a2=n.gfs(n)
a5=n.gft()
n=n.gfp()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gaM()
if(!C.a.K(k,n)){n.a=k.length
k.push(n)}n=e.gaM()
m=n.gaX(n)
if(m){m=b.r
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}if(e.gcP()){n=e.gcE()
m=b.y
m.a.uniform1f(m.d,n)
n=e.gcF()
m=b.z
m.a.uniform1f(m.d,n)
n=e.gcG()
m=b.Q
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.l)(b3),++f){o=b3[f].a
j=a3.h(0,o)
if(j==null)j=0
o=b2.a.bN.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.cx
if(b3.length>0){p=b4.db
a=p.gL(p)
b1=new H.t(t.a)
for(p=b2.dx.x,o=p.length,f=0;f<p.length;p.length===o||(0,H.l)(p),++f){e=p[f]
d=e.gai()
c=b1.h(0,d)
if(c==null)c=0
b1.k(0,d,c+1)
b=J.cO(b2.a.bQ.h(0,d),c)
n=e.gfT(e)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gha(e).E()
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=a.b3(e.gfT(e))
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaH(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gaw()
n=e.gc2()
m=b.f
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gc1(e)
m=b.r
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.ghm()
m=b.x
m.a.uniform1f(m.d,n)
n=e.ghn()
m=b.y
m.a.uniform1f(m.d,n)
e.gaw()
n=e.gaw()
if(!C.a.K(k,n)){n.a=k.length
k.push(n)}n=e.gaw()
m=n.gaX(n)
if(m){m=b.dx
m.toString
a1=n.gaX(n)
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.gfA(n))}e.gaM()
n=e.gdr()
m=b.z
m.toString
a1=n.gfq(n)
a2=n.gfs(n)
a5=n.gft()
n=n.gfp()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gaM()
if(!C.a.K(k,n)){n.a=k.length
k.push(n)}n=e.gaM()
m=n.gaX(n)
if(m){m=b.dy
m.toString
a1=n.gaX(n)
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.gfA(n))}if(e.ghb()){n=e.gh9()
m=b.Q
m.a.uniform1f(m.d,n)
n=e.gh8()
m=b.ch
m.a.uniform1f(m.d,n)}if(e.gcP()){n=e.gcE()
m=b.cx
m.a.uniform1f(m.d,n)
n=e.gcF()
m=b.cy
m.a.uniform1f(m.d,n)
n=e.gcG()
m=b.db
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.l)(b3),++f){o=b3[f].a
j=b1.h(0,o)
if(j==null)j=0
o=b2.a.bP.h(0,o)
o.a.uniform1i(o.d,j)}}}if(r.f.c){b2.a8(k,b2.Q.e)
b3=b2.a
p=b2.Q.e
b3.a9(b3.cU,p)}if(r.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.gL(p).bS(0)}b3=b3.id
b3.toString
b3.a7(p.a3(0,!0))}if(r.db){b2.a8(k,b2.ch)
b3=b2.a
p=b2.ch
b3.a9(b3.cV,p)
b3=r.r
if(b3.a){p=b2.a
o=b2.cx.f
p=p.cW
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a8(k,b2.cx.e)
b3=b2.a
p=b2.cx.e
b3.a9(b3.cX,p)}b3=r.x
p=b3.a
if(!p)o=b3.c
else o=!0
if(o){o=b2.a
n=b2.cy.ch
o=o.cY
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.cy.f
p=p.cZ
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a8(k,b2.cy.e)
b3=b2.a
p=b2.cy.e
b3.a9(b3.d_,p)}}b3=r.y
p=b3.a
o=!p
if(o)n=b3.c
else n=!0
if(n){if(p){p=b2.a
n=b2.db.f
p=p.d0
p.a.uniform1f(p.d,n)}if(b3.c){b2.a8(k,b2.db.e)
p=b2.a
n=b2.db.e
p.a9(p.d1,n)}p=b4.a
p.enable(3042)
p.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].S(b4)
p=b5.e
p.S(b4)
p.a2(b4)
p.ax(b4)
if(o)b3=b3.c
else b3=!0
if(b3)b4.a.disable(3042)
for(b3=b4.a,i=0;i<k.length;++i){p=k[i]
if(p.c){p.c=!1
b3.activeTexture(33984+p.a)
b3.bindTexture(34067,null)}}p=b2.a
p.toString
b3.useProgram(null)
p.x.cN()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cm().ap}}
O.hf.prototype={
$2:function(a,b){if(typeof b!=="number")return b.t()
return this.b.push(new A.ft(a,C.c.Y(b+3,4)*4))}}
O.hg.prototype={
$2:function(a,b){return J.cP(a.a,b.a)}}
O.hh.prototype={
$2:function(a,b){if(typeof b!=="number")return b.t()
return this.b.push(new A.fF(a,C.c.Y(b+3,4)*4))}}
O.hi.prototype={
$2:function(a,b){return J.cP(a.a,b.a)}}
O.hj.prototype={
$2:function(a,b){if(typeof b!=="number")return b.t()
return this.b.push(new A.hv(a,C.c.Y(b+3,4)*4))}}
O.hk.prototype={
$2:function(a,b){return J.cP(a.a,b.a)}}
O.hl.prototype={
$2:function(a,b){if(typeof b!=="number")return b.t()
return this.b.push(new A.hO(a,C.c.Y(b+3,4)*4))}}
O.hm.prototype={
$2:function(a,b){return J.cP(a.a,b.a)}}
O.h9.prototype={
am:function(){var s,r=this
r.cb()
s=r.f
$.x().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.r(r.b,s,1)
s.b=!0
r.a.P(s)}}}
O.c5.prototype={
P:function(a){return this.a.P(a)},
aR:function(){return this.P(null)},
am:function(){},
bz:function(a){var s,r,q=this
if(!q.c.n(0,a)){s=q.c
if(!s.a)s=s.c
else s=!0
if(s){if(!a.a)s=a.c
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.am()
s=q.a
s.a=null
s.P(null)}},
sb1:function(a){var s,r=this,q=r.c
if(!q.c)r.bz(new A.R(q.a,!1,!0))
q=r.e
if(q!==a){if(q!=null)q.gm().J(0,r.gaD())
s=r.e
r.e=a
a.gm().l(0,r.gaD())
q=new D.r(r.b+".textureCube",s,r.e)
q.b=!0
r.a.P(q)}}}
O.ha.prototype={}
O.ao.prototype={
cv:function(a){var s,r,q=this
if(!q.f.n(0,a)){s=q.f
q.f=a
r=new D.r(q.b+".color",s,a)
r.b=!0
q.a.P(r)}},
am:function(){this.cb()
this.cv(new V.K(1,1,1))},
saH:function(a,b){this.bz(new A.R(!0,!1,this.c.c))
this.cv(b)}}
O.hc.prototype={}
O.hd.prototype={
am:function(){var s,r=this
r.cc()
s=r.ch
$.x().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.r(r.b+".refraction",s,1)
s.b=!0
r.a.P(s)}}}
O.he.prototype={
cw:function(a){var s=this,r=s.ch
$.x().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.r(s.b+".shininess",r,a)
r.b=!0
s.a.P(r)}},
am:function(){this.cc()
this.cw(100)}}
O.dG.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.y():s},
P:function(a){var s=this.e
if(s!=null)s.v(a)},
aR:function(){return this.P(null)},
di:function(a,b){var s,r,q,p,o,n,m=this,l="Skybox"
if(m.a==null){s=a.fr.h(0,l)
if(s==null){r=a.a
s=new A.hN(r,l)
s.cd(r,l)
s.d2(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.z=s.x.h(0,"posAttr")
r=t.n
s.Q=r.a(s.y.h(0,"fov"))
s.ch=r.a(s.y.h(0,"ratio"))
s.cx=t.r.a(s.y.h(0,"boxClr"))
s.cy=t.Q.a(s.y.h(0,"boxTxt"))
s.db=t.q.a(s.y.h(0,"viewMat"))
a.cD(s)}m.a=s}if(b.e==null){r=b.d.cJ(new Z.eh(a.a),$.af())
r.aq($.af()).e=m.a.z.c
b.e=r}r=m.c
if(r!=null){r.a=1
r.S(a)}r=a.d
q=a.c
p=m.a
p.S(a)
o=m.b
n=p.Q
n.a.uniform1f(n.d,o)
o=p.ch
o.a.uniform1f(o.d,r/q)
q=m.c
p.cy.c6(q)
q=m.d
r=p.cx
r.a.uniform3f(r.d,q.a,q.b,q.c)
q=a.db
q=q.gL(q).bS(0)
p=p.db
p.toString
p.a7(q.a3(0,!0))
r=b.e
if(r instanceof Z.bM){r.S(a)
r.a2(a)
r.ax(a)}else b.e=null
r=m.a
r.toString
a.a.useProgram(null)
r.x.cN()
r=m.c
if(r!=null)r.ax(a)}}
O.hU.prototype={}
T.hV.prototype={}
T.hW.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.y():s},
S:function(a){var s,r=this
if(!r.c&&r.d>=6){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(34067,r.b)}},
ax:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(34067,null)}}}
T.hX.prototype={
d7:function(a,b){var s,r=this,q=34067,p=a+"/posx"+b,o=a+"/posy"+b,n=a+"/posz"+b,m=a+"/negx"+b,l=a+"/negy"+b,k=a+"/negz"+b,j=r.a,i=j.createTexture()
j.bindTexture(q,i)
j.texParameteri(q,10242,10497)
j.texParameteri(q,10243,10497)
j.texParameteri(q,10241,9729)
j.texParameteri(q,10240,9729)
j.bindTexture(q,null)
s=new T.hW()
s.a=0
s.b=i
s.c=!1
s.d=0
r.aC(s,i,p,34069,!1,!1)
r.aC(s,i,m,34070,!1,!1)
r.aC(s,i,o,34071,!1,!1)
r.aC(s,i,l,34072,!1,!1)
r.aC(s,i,n,34073,!1,!1)
r.aC(s,i,k,34074,!1,!1)
return s},
d6:function(a){return this.d7(a,".png")},
aC:function(a,b,c,d,e,f){var s=document.createElement("img")
s.src=c;++this.d
W.P(s,"load",new T.hY(this,s,!1,b,!1,d,a),!1)},
f0:function(a,b,c){var s,r,q,p
b=V.jD(b)
s=V.jD(a.width)
r=V.jD(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.j3()
q.width=s
q.height=r
p=C.f.dm(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.nf(p.getImageData(0,0,q.width,q.height))}}}
T.hY.prototype={
$1:function(a){var s=this,r=s.a,q=r.f0(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,s.e?1:0)
C.M.h1(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.fu()}++r.e}}
X.j2.prototype={}
X.fW.prototype={
gm:function(){var s=this.x
return s==null?this.x=D.y():s},
ad:function(a){var s=this.x
if(s!=null)s.v(a)},
sdh:function(a,b){var s,r,q=this
if(!J.B(q.r,b)){s=q.r
q.r=b
r=new D.r("region",s,b)
r.b=!0
q.ad(r)}},
S:function(a){var s,r,q,p,o,n,m,l=this,k=a.a
k.bindFramebuffer(36160,null)
k.enable(2884)
k.enable(2929)
k.depthFunc(513)
s=k.drawingBufferWidth
r=k.drawingBufferHeight
q=l.r
p=q.a
if(typeof s!=="number")return H.o(s)
o=C.d.ae(p*s)
p=q.b
if(typeof r!=="number")return H.o(r)
n=C.d.ae(p*r)
p=C.d.ae(q.c*s)
a.c=p
q=C.d.ae(q.d*r)
a.d=q
k.viewport(o,n,p,q)
k.clearDepth(l.c)
if(l.b){q=l.a
k.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
k.clear(m)}}
X.fZ.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.y():s},
S:function(a){var s
a.cy.bd(V.b3())
s=V.b3()
a.db.bd(s)},
ax:function(a){a.cy.au()
a.db.au()}}
X.dv.prototype={
gm:function(){var s=this.f
return s==null?this.f=D.y():s},
ad:function(a){var s=this.f
if(s!=null)s.v(a)},
dK:function(){return this.ad(null)},
S:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.ap(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.bd(i)
p=$.jY
if(p==null){p=V.k_()
o=V.jl()
n=$.kd
p=V.jU(p,o,n==null?$.kd=new V.w(0,0,-1):n)
$.jY=p
s=p}else s=p
p=q.b
if(p!=null){r=p.aK(0,a,q)
if(r!=null)s=r.q(0,s)}a.db.bd(s)},
ax:function(a){a.cy.au()
a.db.au()}}
X.hS.prototype={}
V.iY.prototype={
$1:function(a){var s=C.d.dk(this.a.gfz(),2)
if(s!=="0.00")P.jE(s+" fps")}}
V.hK.prototype={
dC:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.P(o,"scroll",new V.hM(m),!1)},
cC:function(a){var s,r,q,p,o,n,m,l
this.f2()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.a.fC(a)
q.toString
p=new H.H(p)
p=new P.bE(q.dl(new H.br(p,p.gj(p))).a())
for(;p.u();){q=p.gI(p)
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
if(H.kH(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.e(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.mg(C.I,q,C.o,!1)
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
f2:function(){var s,r,q,p="Start",o="Bold",n="Italic",m="ItalicEnd",l="Code",k="LinkHead",j="LinkTail",i="LinkEnd",h="Other"
if(this.b!=null)return
s=new L.i0()
s.a=new H.t(t.V)
s.b=new H.t(t.w)
s.c=P.jS(t.f)
s.d=s.F(0,p)
r=s.F(0,p).p(0,o)
q=K.T(new H.H("*"))
r.a.push(q)
r.c=!0
r=s.F(0,o).p(0,o)
q=new K.aA()
q.a=[]
r.a.push(q)
r=K.T(new H.H("*"))
q.a.push(r)
r=s.F(0,o).p(0,"BoldEnd")
q=K.T(new H.H("*"))
r.a.push(q)
r.c=!0
r=s.F(0,p).p(0,n)
q=K.T(new H.H("_"))
r.a.push(q)
r.c=!0
r=s.F(0,n).p(0,n)
q=new K.aA()
q.a=[]
r.a.push(q)
r=K.T(new H.H("_"))
q.a.push(r)
r=s.F(0,n).p(0,m)
q=K.T(new H.H("_"))
r.a.push(q)
r.c=!0
r=s.F(0,p).p(0,l)
q=K.T(new H.H("`"))
r.a.push(q)
r.c=!0
r=s.F(0,l).p(0,l)
q=new K.aA()
q.a=[]
r.a.push(q)
r=K.T(new H.H("`"))
q.a.push(r)
r=s.F(0,l).p(0,"CodeEnd")
q=K.T(new H.H("`"))
r.a.push(q)
r.c=!0
r=s.F(0,p).p(0,k)
q=K.T(new H.H("["))
r.a.push(q)
r.c=!0
r=s.F(0,k).p(0,j)
q=K.T(new H.H("|"))
r.a.push(q)
q=s.F(0,k).p(0,i)
r=K.T(new H.H("]"))
q.a.push(r)
q.c=!0
q=s.F(0,k).p(0,k)
r=new K.aA()
r.a=[]
q.a.push(r)
q=K.T(new H.H("|]"))
r.a.push(q)
q=s.F(0,j).p(0,i)
r=K.T(new H.H("]"))
q.a.push(r)
q.c=!0
q=s.F(0,j).p(0,j)
r=new K.aA()
r.a=[]
q.a.push(r)
q=K.T(new H.H("|]"))
r.a.push(q)
s.F(0,p).p(0,h).a.push(new K.fm())
q=s.F(0,h).p(0,h)
r=new K.aA()
r.a=[]
q.a.push(r)
q=K.T(new H.H("*_`["))
r.a.push(q)
q=s.F(0,"BoldEnd")
q.d=q.a.b2(o)
q=s.F(0,m)
q.d=q.a.b2(n)
q=s.F(0,"CodeEnd")
q.d=q.a.b2(l)
q=s.F(0,i)
q.d=q.a.b2("Link")
q=s.F(0,h)
q.d=q.a.b2(h)
this.b=s}}
V.hM.prototype={
$1:function(a){P.k8(C.i,new V.hL(this.a))}}
V.hL.prototype={
$0:function(){var s=C.d.ae(document.documentElement.scrollTop),r=this.a.style,q=H.d(-0.01*s)+"px"
r.top=q}};(function aliases(){var s=J.a.prototype
s.du=s.i
s=J.b0.prototype
s.dv=s.i
s=K.d6.prototype
s.dt=s.aJ
s.ca=s.i
s=O.c5.prototype
s.cb=s.am
s=O.ao.prototype
s.cc=s.am})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"mt","ll",20)
r(P,"n8","lT",6)
r(P,"n9","lU",6)
r(P,"na","lV",6)
q(P,"kz","n3",7)
r(W,"oD","fK",21)
var k
p(k=E.bn.prototype,"gdf",0,0,null,["$1","$0"],["dg","fL"],0,0)
p(k,"gdd",0,0,null,["$1","$0"],["de","fK"],0,0)
p(k,"gda",0,0,null,["$1","$0"],["dc","fH"],0,0)
o(k,"gfF","fG",3)
o(k,"gfI","fJ",3)
p(k=E.dT.prototype,"gce",0,0,null,["$1","$0"],["cg","cf"],0,0)
n(k,"gfY","dj",7)
m(k=X.ed.prototype,"geo","ep",4)
m(k,"gec","ed",4)
m(k,"gei","ej",2)
m(k,"ges","eu",8)
m(k,"geq","er",8)
m(k,"gex","ey",2)
m(k,"geB","eC",2)
m(k,"gem","en",2)
m(k,"gez","eA",2)
m(k,"gek","el",2)
m(k,"geD","eE",18)
m(k,"geF","eG",4)
m(k,"geT","eU",5)
m(k,"geP","eQ",5)
m(k,"geR","eS",5)
p(D.aU.prototype,"gdD",0,0,null,["$1","$0"],["aj","dE"],0,0)
p(k=D.c1.prototype,"gcr",0,0,null,["$1","$0"],["cs","ev"],0,0)
m(k,"geH","eI",19)
o(k,"ge4","e5",9)
o(k,"geL","eM",9)
l(V.X.prototype,"gj","bU",10)
l(V.w.prototype,"gj","bU",10)
p(k=U.bo.prototype,"gaA",0,0,null,["$1","$0"],["G","a1"],0,0)
o(k,"gdF","dG",11)
o(k,"geJ","eK",11)
p(k=U.cf.prototype,"gaA",0,0,null,["$1","$0"],["G","a1"],0,0)
m(k,"gbp","bq",1)
m(k,"gbr","bs",1)
m(k,"gbt","bu",1)
p(k=U.cg.prototype,"gaA",0,0,null,["$1","$0"],["G","a1"],0,0)
m(k,"gbp","bq",1)
m(k,"gbr","bs",1)
m(k,"gbt","bu",1)
m(k,"gdZ","e_",1)
m(k,"ge0","e1",1)
m(k,"gf9","fa",1)
m(k,"gf7","f8",1)
m(k,"gf5","f6",1)
m(U.ch.prototype,"ge2","e3",1)
p(M.bO.prototype,"gN",0,0,null,["$1","$0"],["O","aP"],0,0)
p(k=M.bT.prototype,"gN",0,0,null,["$1","$0"],["O","aP"],0,0)
o(k,"gee","ef",3)
o(k,"geg","eh",3)
p(k=M.dN.prototype,"gN",0,0,null,["$1","$0"],["O","aP"],0,0)
o(k,"ge6","e7",12)
o(k,"geN","eO",12)
p(k=O.dg.prototype,"gaD",0,0,null,["$1","$0"],["P","aR"],0,0)
p(k,"geZ",0,0,null,["$1","$0"],["ct","f_"],0,0)
o(k,"ge8","e9",13)
o(k,"gea","eb",13)
p(O.c5.prototype,"gaD",0,0,null,["$1","$0"],["P","aR"],0,0)
p(O.dG.prototype,"gaD",0,0,null,["$1","$0"],["P","aR"],0,0)
p(X.dv.prototype,"gdJ",0,0,null,["$1","$0"],["ad","dK"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.G,null)
q(P.G,[H.j9,J.a,J.Q,P.cm,P.f,H.br,P.d8,H.bV,H.eb,H.i4,P.E,H.ht,H.eW,H.bk,P.an,H.h4,H.dd,H.h0,H.a9,H.ez,P.cy,P.bD,P.bE,P.ej,P.dO,P.dP,P.cd,P.iK,P.cs,P.iD,P.cl,P.z,P.cW,P.iJ,P.bc,P.a4,P.M,P.aV,P.du,P.cc,P.ew,P.fV,P.am,P.de,P.a7,P.J,P.b9,W.fB,W.j5,W.jn,W.C,W.bW,P.cA,P.eP,K.fm,K.d6,K.hF,L.dL,L.dU,L.dV,L.i0,O.bl,O.c6,E.fu,E.bn,E.bj,E.bw,E.et,E.hy,E.dT,Z.eg,Z.eh,Z.bM,Z.bX,Z.aI,D.fw,D.ai,D.N,X.cV,X.db,X.h2,X.h6,X.a6,X.hs,X.i1,X.ed,D.aU,D.al,V.K,V.aw,V.fO,V.dh,V.az,V.a0,V.O,V.aC,V.dB,V.X,V.w,U.cf,U.cg,U.ch,M.bO,M.bT,M.hE,M.dN,A.fo,A.fp,A.R,A.ft,A.fF,A.hv,A.hO,A.hb,A.e1,A.e2,A.e5,A.e8,A.i6,A.ic,F.fS,F.h3,F.hu,F.hG,F.hH,F.hI,F.hJ,F.il,F.io,F.ip,F.is,F.it,O.hU,O.c5,O.hc,T.hX,X.j2,X.hS,X.fZ,X.dv,V.hK])
q(J.a,[J.h_,J.c0,J.b0,J.a5,J.b_,J.ax,H.c8,W.b,W.fl,W.cU,W.ah,W.D,W.eo,W.a3,W.fE,W.fG,W.ep,W.bR,W.er,W.fH,W.h,W.ex,W.aX,W.fY,W.eB,W.aZ,W.h5,W.hn,W.eF,W.eG,W.b4,W.eH,W.eJ,W.b6,W.eN,W.eQ,W.b7,W.eR,W.b8,W.eX,W.aG,W.f0,W.i_,W.ba,W.f2,W.i2,W.ie,W.f8,W.fa,W.fc,W.fe,W.fg,P.bq,P.eD,P.bv,P.eL,P.hw,P.eY,P.bz,P.f4,P.fq,P.ek,P.dC,P.eU])
q(J.b0,[J.dw,J.bA,J.ac])
r(J.d9,J.a5)
q(J.b_,[J.c_,J.bZ])
r(P.c2,P.cm)
q(P.c2,[H.bB,W.em,W.el,P.d4])
r(H.H,H.bB)
q(P.f,[H.i,H.b2,H.ci,P.bY])
r(H.bS,H.b2)
q(P.d8,[H.c4,H.ei])
q(P.E,[H.dq,H.da,H.ea,H.dD,H.eu,P.cS,P.dr,P.a2,P.ec,P.e9,P.dM,P.cX,P.d_])
q(H.bk,[H.hT,H.h1,H.iS,H.iT,H.iU,P.ix,P.iw,P.iy,P.iz,P.iI,P.iH,P.iP,P.iF,P.iG,P.h7,P.fI,P.fJ,W.hp,W.hr,W.hD,W.hR,W.iA,P.iQ,P.fT,P.fU,P.fs,E.hz,E.hA,E.hB,E.hZ,D.fQ,D.fR,F.iL,F.iv,F.iu,F.iq,F.ir,O.hf,O.hg,O.hh,O.hi,O.hj,O.hk,O.hl,O.hm,T.hY,V.iY,V.hM,V.hL])
q(H.hT,[H.hP,H.bL])
r(P.df,P.an)
r(H.t,P.df)
r(H.ay,H.i)
r(H.bu,H.c8)
q(H.bu,[H.co,H.cq])
r(H.cp,H.co)
r(H.b5,H.cp)
r(H.cr,H.cq)
r(H.c7,H.cr)
q(H.c7,[H.dj,H.dk,H.dl,H.dm,H.dn,H.c9,H.dp])
r(H.cz,H.eu)
r(P.cv,P.bY)
r(P.iE,P.iK)
r(P.ck,P.cs)
r(P.cZ,P.dP)
r(P.fL,P.cW)
r(P.ig,P.fL)
r(P.ih,P.cZ)
q(P.M,[P.V,P.p])
q(P.a2,[P.by,P.d7])
q(W.b,[W.v,W.d3,W.aF,W.ct,W.aH,W.ad,W.cw,W.ef,W.bC,P.cT,P.av])
q(W.v,[W.I,W.ab])
q(W.I,[W.k,P.j])
q(W.k,[W.cQ,W.cR,W.aT,W.d5,W.bp,W.dE])
r(W.fA,W.ah)
r(W.bP,W.eo)
q(W.a3,[W.fC,W.fD])
r(W.eq,W.ep)
r(W.bQ,W.eq)
r(W.es,W.er)
r(W.d1,W.es)
r(W.aW,W.cU)
r(W.ey,W.ex)
r(W.d2,W.ey)
r(W.eC,W.eB)
r(W.aY,W.eC)
r(W.as,W.h)
q(W.as,[W.b1,W.a_,W.bb])
r(W.ho,W.eF)
r(W.hq,W.eG)
r(W.eI,W.eH)
r(W.di,W.eI)
r(W.eK,W.eJ)
r(W.ca,W.eK)
r(W.eO,W.eN)
r(W.dx,W.eO)
r(W.hC,W.eQ)
r(W.cu,W.ct)
r(W.dI,W.cu)
r(W.eS,W.eR)
r(W.dJ,W.eS)
r(W.hQ,W.eX)
r(W.f1,W.f0)
r(W.dR,W.f1)
r(W.cx,W.cw)
r(W.dS,W.cx)
r(W.f3,W.f2)
r(W.dW,W.f3)
r(W.aJ,W.a_)
r(W.f9,W.f8)
r(W.en,W.f9)
r(W.cj,W.bR)
r(W.fb,W.fa)
r(W.eA,W.fb)
r(W.fd,W.fc)
r(W.cn,W.fd)
r(W.ff,W.fe)
r(W.eT,W.ff)
r(W.fh,W.fg)
r(W.f_,W.fh)
r(W.ev,P.dO)
r(P.a8,P.eP)
r(P.eE,P.eD)
r(P.dc,P.eE)
r(P.eM,P.eL)
r(P.ds,P.eM)
r(P.eZ,P.eY)
r(P.dQ,P.eZ)
r(P.f5,P.f4)
r(P.dX,P.f5)
r(P.fr,P.ek)
r(P.dt,P.av)
r(P.eV,P.eU)
r(P.dK,P.eV)
q(K.d6,[K.aA,L.i3])
q(E.fu,[Z.fv,A.dF,T.hV])
q(D.N,[D.aj,D.ak,D.r,X.dy])
q(X.dy,[X.c3,X.bs,X.bt,X.ce])
q(O.bl,[D.c1,U.bo])
q(D.fw,[U.fz,U.S])
r(U.bm,U.S)
r(M.aE,M.hE)
q(A.dF,[A.h8,A.hN])
q(A.i6,[A.dZ,A.i9,A.ia,A.ib,A.i7,A.dY,A.i8,A.e_,A.e0,A.id,A.e3,A.e4,A.e6,A.e7])
q(O.hU,[O.dg,O.dG])
q(O.c5,[O.h9,O.ha,O.ao])
q(O.ao,[O.hd,O.he])
r(T.hW,T.hV)
r(X.fW,X.hS)
s(H.bB,H.eb)
s(H.co,P.z)
s(H.cp,H.bV)
s(H.cq,P.z)
s(H.cr,H.bV)
s(P.cm,P.z)
s(W.eo,W.fB)
s(W.ep,P.z)
s(W.eq,W.C)
s(W.er,P.z)
s(W.es,W.C)
s(W.ex,P.z)
s(W.ey,W.C)
s(W.eB,P.z)
s(W.eC,W.C)
s(W.eF,P.an)
s(W.eG,P.an)
s(W.eH,P.z)
s(W.eI,W.C)
s(W.eJ,P.z)
s(W.eK,W.C)
s(W.eN,P.z)
s(W.eO,W.C)
s(W.eQ,P.an)
s(W.ct,P.z)
s(W.cu,W.C)
s(W.eR,P.z)
s(W.eS,W.C)
s(W.eX,P.an)
s(W.f0,P.z)
s(W.f1,W.C)
s(W.cw,P.z)
s(W.cx,W.C)
s(W.f2,P.z)
s(W.f3,W.C)
s(W.f8,P.z)
s(W.f9,W.C)
s(W.fa,P.z)
s(W.fb,W.C)
s(W.fc,P.z)
s(W.fd,W.C)
s(W.fe,P.z)
s(W.ff,W.C)
s(W.fg,P.z)
s(W.fh,W.C)
s(P.eD,P.z)
s(P.eE,W.C)
s(P.eL,P.z)
s(P.eM,W.C)
s(P.eY,P.z)
s(P.eZ,W.C)
s(P.f4,P.z)
s(P.f5,W.C)
s(P.ek,P.an)
s(P.eU,P.z)
s(P.eV,W.C)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{p:"int",V:"double",M:"num",J:"String",bc:"bool",a7:"Null",am:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([N*])","~(N*)","~(a_*)","~(p*,f<bn*>*)","~(h*)","~(bb*)","~(~())","~()","~(b1*)","~(p*,f<al*>*)","V*()","~(p*,f<S*>*)","~(p*,f<aE*>*)","~(p*,f<az*>*)","@(@)","a7(@)","a7(G?,G?)","a7(@,@)","~(aJ*)","bc*(f<al*>*)","p(@,@)","J(b)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.md(v.typeUniverse,JSON.parse('{"ac":"b0","dw":"b0","bA":"b0","nD":"h","nN":"h","nF":"av","nE":"b","nU":"b","nW":"b","nC":"j","nP":"j","nG":"k","nS":"k","nQ":"v","nM":"v","oj":"ad","nK":"as","nH":"ab","nX":"ab","nV":"a_","nR":"aY","nT":"b5","a5":{"i":["1"],"f":["1"]},"d9":{"i":["1"],"f":["1"]},"b_":{"V":[],"M":[]},"c_":{"V":[],"p":[],"M":[]},"bZ":{"V":[],"M":[]},"ax":{"J":[]},"H":{"i":["p"],"f":["p"]},"i":{"f":["1"]},"b2":{"f":["2"]},"bS":{"i":["2"],"f":["2"]},"ci":{"f":["1"]},"bB":{"i":["1"],"f":["1"]},"dq":{"E":[]},"da":{"E":[]},"ea":{"E":[]},"dD":{"E":[]},"ay":{"i":["1"],"f":["1"]},"bu":{"q":["1"]},"b5":{"q":["V"],"i":["V"],"f":["V"]},"c7":{"q":["p"],"i":["p"],"f":["p"]},"dj":{"q":["p"],"i":["p"],"f":["p"]},"dk":{"q":["p"],"i":["p"],"f":["p"]},"dl":{"q":["p"],"i":["p"],"f":["p"]},"dm":{"q":["p"],"i":["p"],"f":["p"]},"dn":{"q":["p"],"i":["p"],"f":["p"]},"c9":{"q":["p"],"i":["p"],"f":["p"]},"dp":{"q":["p"],"i":["p"],"f":["p"]},"eu":{"E":[]},"cz":{"E":[]},"cy":{"cd":[]},"cv":{"f":["1"]},"ck":{"i":["1"],"f":["1"]},"bY":{"f":["1"]},"c2":{"i":["1"],"f":["1"]},"cs":{"i":["1"],"f":["1"]},"V":{"M":[]},"cS":{"E":[]},"dr":{"E":[]},"a2":{"E":[]},"by":{"E":[]},"d7":{"E":[]},"ec":{"E":[]},"e9":{"E":[]},"dM":{"E":[]},"cX":{"E":[]},"du":{"E":[]},"cc":{"E":[]},"d_":{"E":[]},"p":{"M":[]},"am":{"i":["1"],"f":["1"]},"k":{"I":[],"v":[],"b":[]},"cQ":{"I":[],"v":[],"b":[]},"cR":{"I":[],"v":[],"b":[]},"aT":{"I":[],"v":[],"b":[]},"ab":{"v":[],"b":[]},"bQ":{"q":["a8<M>"],"i":["a8<M>"],"f":["a8<M>"]},"bR":{"a8":["M"]},"d1":{"q":["J"],"i":["J"],"f":["J"]},"em":{"i":["I"],"f":["I"]},"I":{"v":[],"b":[]},"d2":{"q":["aW"],"i":["aW"],"f":["aW"]},"d3":{"b":[]},"d5":{"I":[],"v":[],"b":[]},"aY":{"q":["v"],"i":["v"],"f":["v"]},"bp":{"I":[],"v":[],"b":[]},"b1":{"h":[]},"di":{"q":["b4"],"i":["b4"],"f":["b4"]},"a_":{"h":[]},"el":{"i":["v"],"f":["v"]},"v":{"b":[]},"ca":{"q":["v"],"i":["v"],"f":["v"]},"dx":{"q":["b6"],"i":["b6"],"f":["b6"]},"dE":{"I":[],"v":[],"b":[]},"aF":{"b":[]},"dI":{"q":["aF"],"b":[],"i":["aF"],"f":["aF"]},"dJ":{"q":["b7"],"i":["b7"],"f":["b7"]},"aH":{"b":[]},"ad":{"b":[]},"dR":{"q":["ad"],"i":["ad"],"f":["ad"]},"dS":{"q":["aH"],"b":[],"i":["aH"],"f":["aH"]},"bb":{"h":[]},"dW":{"q":["ba"],"i":["ba"],"f":["ba"]},"as":{"h":[]},"ef":{"b":[]},"aJ":{"a_":[],"h":[]},"bC":{"b":[]},"en":{"q":["D"],"i":["D"],"f":["D"]},"cj":{"a8":["M"]},"eA":{"q":["aX?"],"i":["aX?"],"f":["aX?"]},"cn":{"q":["v"],"i":["v"],"f":["v"]},"eT":{"q":["b8"],"i":["b8"],"f":["b8"]},"f_":{"q":["aG"],"i":["aG"],"f":["aG"]},"cA":{"aZ":[]},"d4":{"i":["I"],"f":["I"]},"a8":{"eP":["1"]},"dc":{"i":["bq"],"f":["bq"]},"ds":{"i":["bv"],"f":["bv"]},"dQ":{"i":["J"],"f":["J"]},"j":{"I":[],"v":[],"b":[]},"dX":{"i":["bz"],"f":["bz"]},"cT":{"b":[]},"av":{"b":[]},"dt":{"b":[]},"dK":{"i":["de<@,@>"],"f":["de<@,@>"]},"bl":{"f":["1*"]},"aj":{"N":[]},"ak":{"N":[]},"r":{"N":[]},"c3":{"N":[]},"bs":{"N":[]},"bt":{"N":[]},"dy":{"N":[]},"ce":{"N":[]},"aU":{"al":[]},"c1":{"f":["al*"]},"bm":{"S":[]},"bo":{"S":[],"f":["S*"]},"cf":{"S":[]},"cg":{"S":[]},"ch":{"S":[]},"bO":{"aE":[]},"bT":{"aE":[]}}'))
H.mc(v.typeUniverse,JSON.parse('{"a5":1,"d9":1,"Q":1,"i":1,"br":1,"b2":2,"bS":2,"c4":2,"ci":1,"ei":1,"bV":1,"eb":1,"bB":1,"ay":1,"dd":1,"bu":1,"bE":1,"cv":1,"dO":1,"dP":2,"cl":1,"bY":1,"c2":1,"z":1,"df":2,"an":2,"cs":1,"cm":1,"cW":2,"cZ":2,"f":1,"d8":1,"am":1,"ev":1,"C":1,"bW":1,"bl":1,"aj":1,"ak":1,"r":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"}
var t=(function rtii(){var s=H.nj
return{U:s("i<@>"),h:s("I"),C:s("E"),D:s("h"),Z:s("nO"),s:s("aZ"),R:s("bp"),b:s("a5<@>"),T:s("c0"),g:s("ac"),p:s("q<@>"),G:s("t<J*,dF*>"),V:s("t<J*,dL*>"),i:s("t<J*,J*>"),w:s("t<J*,dV*>"),u:s("t<p*,am<e1*>*>"),L:s("t<p*,am<e2*>*>"),W:s("t<p*,am<e5*>*>"),M:s("t<p*,am<e8*>*>"),J:s("t<p*,dZ*>"),E:s("t<p*,bc*>"),a:s("t<p*,p*>"),P:s("a7"),K:s("G"),I:s("a8<M>"),N:s("J"),Y:s("cd"),o:s("bA"),v:s("bc"),d:s("V"),z:s("@"),S:s("p"),B:s("aT*"),x:s("c3*"),c:s("bs*"),F:s("bt*"),A:s("0&*"),_:s("G*"),f:s("J*"),j:s("dU*"),m:s("ce*"),n:s("dY*"),r:s("e_*"),y:s("e0*"),O:s("e3*"),q:s("e4*"),t:s("e6*"),Q:s("e7*"),e:s("p*"),k:s("jP<a7>?"),X:s("G?"),H:s("M")}})();(function constants(){var s=hunkHelpers.makeConstList
C.f=W.aT.prototype
C.F=J.a.prototype
C.a=J.a5.prototype
C.G=J.bZ.prototype
C.c=J.c_.prototype
C.h=J.c0.prototype
C.d=J.b_.prototype
C.b=J.ax.prototype
C.H=J.ac.prototype
C.q=J.dw.prototype
C.M=P.dC.prototype
C.j=J.bA.prototype
C.r=W.aJ.prototype
C.t=W.bC.prototype
C.u=new E.bj("Browser.chrome")
C.k=new E.bj("Browser.firefox")
C.l=new E.bj("Browser.edge")
C.v=new E.bj("Browser.other")
C.m=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.w=function() {
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
C.B=function(getTagFallback) {
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
C.x=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.y=function(hooks) {
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
C.A=function(hooks) {
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
C.z=function(hooks) {
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
C.n=function(hooks) { return hooks; }

C.C=new P.du()
C.o=new P.ig()
C.D=new P.ih()
C.e=new P.iE()
C.i=new P.aV(0)
C.E=new P.aV(5e6)
C.I=s([0,0,65498,45055,65535,34815,65534,18431])
C.J=new E.bw("OperatingSystem.windows")
C.p=new E.bw("OperatingSystem.mac")
C.K=new E.bw("OperatingSystem.linux")
C.L=new E.bw("OperatingSystem.other")
C.N=new P.bD(null,2)})();(function staticFields(){$.ki=null
$.ag=0
$.jK=null
$.jJ=null
$.kA=null
$.ky=null
$.kF=null
$.iR=null
$.iV=null
$.jA=null
$.bF=null
$.cH=null
$.cI=null
$.jv=!1
$.ae=C.e
$.Y=[]
$.fN=null
$.jW=null
$.jZ=null
$.aq=null
$.k3=null
$.kc=null
$.ke=null
$.ii=null
$.ij=null
$.ik=null
$.kd=null
$.jY=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"nL","kM",function(){return H.nm("_$dart_dartClosure")})
s($,"nY","kN",function(){return H.ar(H.i5({
toString:function(){return"$receiver$"}}))})
s($,"nZ","kO",function(){return H.ar(H.i5({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"o_","kP",function(){return H.ar(H.i5(null))})
s($,"o0","kQ",function(){return H.ar(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"o3","kT",function(){return H.ar(H.i5(void 0))})
s($,"o4","kU",function(){return H.ar(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"o2","kS",function(){return H.ar(H.ka(null))})
s($,"o1","kR",function(){return H.ar(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"o6","kW",function(){return H.ar(H.ka(void 0))})
s($,"o5","kV",function(){return H.ar(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"ok","jF",function(){return P.lS()})
s($,"om","l_",function(){return P.lF("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"od","kZ",function(){return Z.aa(0)})
s($,"o7","kX",function(){return Z.aa(511)})
s($,"of","af",function(){return Z.aa(1)})
s($,"oe","aR",function(){return Z.aa(2)})
s($,"o9","aQ",function(){return Z.aa(4)})
s($,"og","bg",function(){return Z.aa(8)})
s($,"oh","aS",function(){return Z.aa(16)})
s($,"oa","cM",function(){return Z.aa(32)})
s($,"ob","cN",function(){return Z.aa(64)})
s($,"oc","kY",function(){return Z.aa(96)})
s($,"oi","bK",function(){return Z.aa(128)})
s($,"o8","aP",function(){return Z.aa(256)})
s($,"nJ","kL",function(){return new V.fO()})
s($,"nI","x",function(){return $.kL()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.c8,ArrayBufferView:H.c8,Float32Array:H.b5,Float64Array:H.b5,Int16Array:H.dj,Int32Array:H.dk,Int8Array:H.dl,Uint16Array:H.dm,Uint32Array:H.dn,Uint8ClampedArray:H.c9,CanvasPixelArray:H.c9,Uint8Array:H.dp,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLBodyElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLDivElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTableElement:W.k,HTMLTableRowElement:W.k,HTMLTableSectionElement:W.k,HTMLTemplateElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.fl,HTMLAnchorElement:W.cQ,HTMLAreaElement:W.cR,Blob:W.cU,HTMLCanvasElement:W.aT,CDATASection:W.ab,CharacterData:W.ab,Comment:W.ab,ProcessingInstruction:W.ab,Text:W.ab,CSSPerspective:W.fA,CSSCharsetRule:W.D,CSSConditionRule:W.D,CSSFontFaceRule:W.D,CSSGroupingRule:W.D,CSSImportRule:W.D,CSSKeyframeRule:W.D,MozCSSKeyframeRule:W.D,WebKitCSSKeyframeRule:W.D,CSSKeyframesRule:W.D,MozCSSKeyframesRule:W.D,WebKitCSSKeyframesRule:W.D,CSSMediaRule:W.D,CSSNamespaceRule:W.D,CSSPageRule:W.D,CSSRule:W.D,CSSStyleRule:W.D,CSSSupportsRule:W.D,CSSViewportRule:W.D,CSSStyleDeclaration:W.bP,MSStyleCSSProperties:W.bP,CSS2Properties:W.bP,CSSImageValue:W.a3,CSSKeywordValue:W.a3,CSSNumericValue:W.a3,CSSPositionValue:W.a3,CSSResourceValue:W.a3,CSSUnitValue:W.a3,CSSURLImageValue:W.a3,CSSStyleValue:W.a3,CSSMatrixComponent:W.ah,CSSRotation:W.ah,CSSScale:W.ah,CSSSkew:W.ah,CSSTranslation:W.ah,CSSTransformComponent:W.ah,CSSTransformValue:W.fC,CSSUnparsedValue:W.fD,DataTransferItemList:W.fE,DOMException:W.fG,ClientRectList:W.bQ,DOMRectList:W.bQ,DOMRectReadOnly:W.bR,DOMStringList:W.d1,DOMTokenList:W.fH,Element:W.I,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,SubmitEvent:W.h,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.aW,FileList:W.d2,FileWriter:W.d3,HTMLFormElement:W.d5,Gamepad:W.aX,History:W.fY,HTMLCollection:W.aY,HTMLFormControlsCollection:W.aY,HTMLOptionsCollection:W.aY,ImageData:W.aZ,HTMLImageElement:W.bp,KeyboardEvent:W.b1,Location:W.h5,MediaList:W.hn,MIDIInputMap:W.ho,MIDIOutputMap:W.hq,MimeType:W.b4,MimeTypeArray:W.di,PointerEvent:W.a_,MouseEvent:W.a_,DragEvent:W.a_,Document:W.v,DocumentFragment:W.v,HTMLDocument:W.v,ShadowRoot:W.v,XMLDocument:W.v,Attr:W.v,DocumentType:W.v,Node:W.v,NodeList:W.ca,RadioNodeList:W.ca,Plugin:W.b6,PluginArray:W.dx,RTCStatsReport:W.hC,HTMLSelectElement:W.dE,SourceBuffer:W.aF,SourceBufferList:W.dI,SpeechGrammar:W.b7,SpeechGrammarList:W.dJ,SpeechRecognitionResult:W.b8,Storage:W.hQ,CSSStyleSheet:W.aG,StyleSheet:W.aG,TextTrack:W.aH,TextTrackCue:W.ad,VTTCue:W.ad,TextTrackCueList:W.dR,TextTrackList:W.dS,TimeRanges:W.i_,Touch:W.ba,TouchEvent:W.bb,TouchList:W.dW,TrackDefaultList:W.i2,CompositionEvent:W.as,FocusEvent:W.as,TextEvent:W.as,UIEvent:W.as,URL:W.ie,VideoTrackList:W.ef,WheelEvent:W.aJ,Window:W.bC,DOMWindow:W.bC,CSSRuleList:W.en,ClientRect:W.cj,DOMRect:W.cj,GamepadList:W.eA,NamedNodeMap:W.cn,MozNamedAttrMap:W.cn,SpeechRecognitionResultList:W.eT,StyleSheetList:W.f_,SVGLength:P.bq,SVGLengthList:P.dc,SVGNumber:P.bv,SVGNumberList:P.ds,SVGPointList:P.hw,SVGStringList:P.dQ,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGScriptElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGTransform:P.bz,SVGTransformList:P.dX,AudioBuffer:P.fq,AudioParamMap:P.fr,AudioTrackList:P.cT,AudioContext:P.av,webkitAudioContext:P.av,BaseAudioContext:P.av,OfflineAudioContext:P.dt,WebGL2RenderingContext:P.dC,SQLResultSetRowList:P.dK})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bu.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.b5.$nativeSuperclassTag="ArrayBufferView"
H.cq.$nativeSuperclassTag="ArrayBufferView"
H.cr.$nativeSuperclassTag="ArrayBufferView"
H.c7.$nativeSuperclassTag="ArrayBufferView"
W.ct.$nativeSuperclassTag="EventTarget"
W.cu.$nativeSuperclassTag="EventTarget"
W.cw.$nativeSuperclassTag="EventTarget"
W.cx.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.kD,[])
else K.kD([])})})()
//# sourceMappingURL=test.dart.js.map
