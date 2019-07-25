{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.mJ(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jO"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jO"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jO(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r=r+x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={jz:function jz(){},
lt:function(){return new P.hJ("No element")},
a4:function a4(a){this.a=a},
ft:function ft(){},
du:function du(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fX:function fX(a,b,c){this.a=a
this.b=b
this.$ti=c},
fY:function fY(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
iw:function iw(a,b,c){this.a=a
this.b=b
this.$ti=c},
ix:function ix(a,b,c){this.a=a
this.b=b
this.$ti=c},
bN:function bN(){},
e_:function e_(){},
dZ:function dZ(){},
c3:function(a){var u,t=H.U(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
mr:function(a){return v.types[H.ad(a)]},
mw:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Z(a).$iI},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.au(a)
if(typeof u!=="string")throw H.j(H.bZ(a))
return u},
cs:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bR:function(a){return H.lE(a)+H.jL(H.bG(a),0,null)},
lE:function(a){var u,t,s,r,q,p,o,n=J.Z(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.J||!!n.$idY){r=C.r(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.c3(t.length>1&&C.j.bb(t,0)===36?C.j.cL(t,1):t)},
kh:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lN:function(a){var u,t,s,r=H.c([],[P.A])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.j(H.bZ(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.f.bf(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.j(H.bZ(s))}return H.kh(r)},
ki:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.j(H.bZ(s))
if(s<0)throw H.j(H.bZ(s))
if(s>65535)return H.lN(a)}return H.kh(a)},
lM:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.bf(u,10))>>>0,56320|u&1023)}throw H.j(P.aX(a,0,1114111,null,null))},
bQ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lL:function(a){var u=H.bQ(a).getFullYear()+0
return u},
lJ:function(a){var u=H.bQ(a).getMonth()+1
return u},
lF:function(a){var u=H.bQ(a).getDate()+0
return u},
lG:function(a){var u=H.bQ(a).getHours()+0
return u},
lI:function(a){var u=H.bQ(a).getMinutes()+0
return u},
lK:function(a){var u=H.bQ(a).getSeconds()+0
return u},
lH:function(a){var u=H.bQ(a).getMilliseconds()+0
return u},
E:function(a){throw H.j(H.bZ(a))},
h:function(a,b){if(a==null)J.c6(a)
throw H.j(H.cX(a,b))},
cX:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aH(!0,b,s,null)
u=H.ad(J.c6(a))
if(!(b<0)){if(typeof u!=="number")return H.E(u)
t=b>=u}else t=!0
if(t)return P.W(b,a,s,null,u)
return P.hp(b,s)},
mm:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bS(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bS(a,c,!0,b,"end",u)
return new P.aH(!0,b,"end",null)},
bZ:function(a){return new P.aH(!0,a,null,null)},
mi:function(a){if(typeof a!=="number")throw H.j(H.bZ(a))
return a},
j:function(a){var u
if(a==null)a=new P.dC()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kZ})
u.name=""}else u.toString=H.kZ
return u},
kZ:function(){return J.au(this.dartException)},
t:function(a){throw H.j(a)},
C:function(a){throw H.j(P.cc(a))},
b3:function(a){var u,t,s,r,q,p
a=H.kX(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.o])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.i4(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
i5:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ks:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kb:function(a,b){return new H.hh(a,b==null?null:b.method)},
jA:function(a,b){var u=b==null,t=u?null:b.method
return new H.fN(a,t,u?null:b.receiver)},
bH:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jn(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.f.bf(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jA(H.l(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kb(H.l(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.l1()
q=$.l2()
p=$.l3()
o=$.l4()
n=$.l7()
m=$.l8()
l=$.l6()
$.l5()
k=$.la()
j=$.l9()
i=r.ai(u)
if(i!=null)return f.$1(H.jA(H.U(u),i))
else{i=q.ai(u)
if(i!=null){i.method="call"
return f.$1(H.jA(H.U(u),i))}else{i=p.ai(u)
if(i==null){i=o.ai(u)
if(i==null){i=n.ai(u)
if(i==null){i=m.ai(u)
if(i==null){i=l.ai(u)
if(i==null){i=o.ai(u)
if(i==null){i=k.ai(u)
if(i==null){i=j.ai(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kb(H.U(u),i))}}return f.$1(new H.ie(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dM()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aH(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dM()
return a},
c1:function(a){var u
if(a==null)return new H.eC(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eC(a)},
mp:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.a6(0,a[u],a[t])}return b},
mv:function(a,b,c,d,e,f){H.k(a,"$ijv")
switch(H.ad(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.j(P.q("Unsupported number of arguments for wrapped closure"))},
c_:function(a,b){var u
H.ad(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mv)
a.$identity=u
return u},
ln:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hK().constructor.prototype):Object.create(new H.c7(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aJ
if(typeof t!=="number")return t.F()
$.aJ=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.k0(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.mr,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.k_:H.jq
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.j("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.k0(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
lk:function(a,b,c,d){var u=H.jq
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
k0:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lm(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lk(t,!r,u,b)
if(t===0){r=$.aJ
if(typeof r!=="number")return r.F()
$.aJ=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c8
return new Function(r+H.l(q==null?$.c8=H.fa("self"):q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aJ
if(typeof r!=="number")return r.F()
$.aJ=r+1
o+=r
r="return function("+o+"){return this."
q=$.c8
return new Function(r+H.l(q==null?$.c8=H.fa("self"):q)+"."+H.l(u)+"("+o+");}")()},
ll:function(a,b,c,d){var u=H.jq,t=H.k_
switch(b?-1:a){case 0:throw H.j(H.lQ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lm:function(a,b){var u,t,s,r,q,p,o,n=$.c8
if(n==null)n=$.c8=H.fa("self")
u=$.jZ
if(u==null)u=$.jZ=H.fa("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.ll(s,!q,t,b)
if(s===1){n="return function(){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+");"
u=$.aJ
if(typeof u!=="number")return u.F()
$.aJ=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+", "+o+");"
u=$.aJ
if(typeof u!=="number")return u.F()
$.aJ=u+1
return new Function(n+u+"}")()},
jO:function(a,b,c,d,e,f,g){return H.ln(a,b,H.ad(c),d,!!e,!!f,g)},
jq:function(a){return a.a},
k_:function(a){return a.c},
fa:function(a){var u,t,s,r=new H.c7("self","target","receiver","name"),q=J.jx(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
z:function(a){if(a==null)H.me("boolean expression must not be null")
return a},
U:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.j(H.aE(a,"String"))},
nl:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.j(H.aE(a,"double"))},
mB:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.j(H.aE(a,"num"))},
kO:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.j(H.aE(a,"bool"))},
ad:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.j(H.aE(a,"int"))},
kV:function(a,b){throw H.j(H.aE(a,H.c3(H.U(b).substring(2))))},
mD:function(a,b){throw H.j(H.lj(a,H.c3(H.U(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Z(a)[b])return a
H.kV(a,b)},
d:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Z(a)[b]
else u=!0
if(u)return a
H.mD(a,b)},
jT:function(a){if(a==null)return a
if(!!J.Z(a).$ib)return a
throw H.j(H.aE(a,"List<dynamic>"))},
mx:function(a,b){var u
if(a==null)return a
u=J.Z(a)
if(!!u.$ib)return a
if(u[b])return a
H.kV(a,b)},
kP:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ad(u)]
else return a.$S()}return},
eY:function(a,b){var u
if(typeof a=="function")return!0
u=H.kP(J.Z(a))
if(u==null)return!1
return H.kF(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.jI)return a
$.jI=!0
try{if(H.eY(a,b))return a
u=H.jl(b)
t=H.aE(a,u)
throw H.j(t)}finally{$.jI=!1}},
jP:function(a,b){if(a!=null&&!H.jN(a,b))H.t(H.aE(a,H.jl(b)))
return a},
aE:function(a,b){return new H.i6("TypeError: "+P.df(a)+": type '"+H.kJ(a)+"' is not a subtype of type '"+b+"'")},
lj:function(a,b){return new H.fb("CastError: "+P.df(a)+": type '"+H.kJ(a)+"' is not a subtype of type '"+b+"'")},
kJ:function(a){var u,t=J.Z(a)
if(!!t.$ica){u=H.kP(t)
if(u!=null)return H.jl(u)
return"Closure"}return H.bR(a)},
me:function(a){throw H.j(new H.iy(a))},
mJ:function(a){throw H.j(new P.fl(H.U(a)))},
lQ:function(a){return new H.hx(a)},
kQ:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bG:function(a){if(a==null)return
return a.$ti},
nm:function(a,b,c){return H.c2(a["$a"+H.l(c)],H.bG(b))},
cY:function(a,b,c,d){var u
H.U(c)
H.ad(d)
u=H.c2(a["$a"+H.l(c)],H.bG(b))
return u==null?null:u[d]},
az:function(a,b,c){var u
H.U(b)
H.ad(c)
u=H.c2(a["$a"+H.l(b)],H.bG(a))
return u==null?null:u[c]},
y:function(a,b){var u
H.ad(b)
u=H.bG(a)
return u==null?null:u[b]},
jl:function(a){return H.bF(a,null)},
bF:function(a,b){var u,t
H.i(b,"$ib",[P.o],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c3(a[0].name)+H.jL(a,1,b)
if(typeof a=="function")return H.c3(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ad(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.l(b[t])}if('func' in a)return H.m7(a,b)
if('futureOr' in a)return"FutureOr<"+H.bF("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
m7:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.o]
H.i(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.h(a0,n)
p=C.j.F(p,a0[n])
m=u[q]
if(m!=null&&m!==P.R)p+=" extends "+H.bF(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bF(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bF(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bF(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.mo(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.U(b[h])
j=j+i+H.bF(e[d],a0)+(" "+H.l(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
jL:function(a,b,c){var u,t,s,r,q,p
H.i(c,"$ib",[P.o],"$ab")
if(a==null)return""
u=new P.be("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bF(p,c)}return"<"+u.i(0)+">"},
c2:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
jM:function(a,b,c,d){var u,t
H.U(b)
H.jT(c)
H.U(d)
if(a==null)return!1
u=H.bG(a)
t=J.Z(a)
if(t[b]==null)return!1
return H.kM(H.c2(t[d],u),null,c,null)},
i:function(a,b,c,d){H.U(b)
H.jT(c)
H.U(d)
if(a==null)return a
if(H.jM(a,b,c,d))return a
throw H.j(H.aE(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c3(b.substring(2))+H.jL(c,0,null),v.mangledGlobalNames)))},
kM:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ay(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ay(a[t],b,c[t],d))return!1
return!0},
nj:function(a,b,c){return a.apply(b,H.c2(J.Z(b)["$a"+H.l(c)],H.bG(b)))},
kS:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="R"||a.name==="L"||a===-1||a===-2||H.kS(u)}return!1},
jN:function(a,b){var u,t
if(a==null)return b==null||b.name==="R"||b.name==="L"||b===-1||b===-2||H.kS(b)
if(b==null||b===-1||b.name==="R"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jN(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eY(a,b)}u=J.Z(a).constructor
t=H.bG(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ay(u,null,b,null)},
D:function(a,b){if(a!=null&&!H.jN(a,b))throw H.j(H.aE(a,H.jl(b)))
return a},
ay:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="R"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="R"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ay(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="L")return!0
if('func' in c)return H.kF(a,b,c,d)
if('func' in a)return c.name==="jv"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.ay("type" in a?a.type:l,b,s,d)
else if(H.ay(a,b,s,d))return!0
else{if(!('$i'+"ch" in t.prototype))return!1
r=t.prototype["$a"+"ch"]
q=H.c2(r,u?a.slice(1):l)
return H.ay(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.kM(H.c2(m,u),b,p,d)},
kF:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.ay(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.ay(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ay(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ay(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.mA(h,b,g,d)},
mA:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.ay(c[s],d,a[s],b))return!1}return!0},
nk:function(a,b,c){Object.defineProperty(a,H.U(b),{value:c,enumerable:false,writable:true,configurable:true})},
my:function(a){var u,t,s,r,q=H.U($.kR.$1(a)),p=$.je[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jj[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.U($.kL.$2(a,q))
if(q!=null){p=$.je[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jj[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jk(u)
$.je[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jj[q]=u
return u}if(s==="-"){r=H.jk(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kU(a,u)
if(s==="*")throw H.j(P.kt(q))
if(v.leafTags[q]===true){r=H.jk(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kU(a,u)},
kU:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jU(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jk:function(a){return J.jU(a,!1,null,!!a.$iI)},
mz:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jk(u)
else return J.jU(u,c,null,null)},
mt:function(){if(!0===$.jS)return
$.jS=!0
H.mu()},
mu:function(){var u,t,s,r,q,p,o,n
$.je=Object.create(null)
$.jj=Object.create(null)
H.ms()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kW.$1(q)
if(p!=null){o=H.mz(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
ms:function(){var u,t,s,r,q,p,o=C.y()
o=H.bY(C.z,H.bY(C.A,H.bY(C.t,H.bY(C.t,H.bY(C.B,H.bY(C.C,H.bY(C.D(C.r),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kR=new H.jg(r)
$.kL=new H.jh(q)
$.kW=new H.ji(p)},
bY:function(a,b){return a(b)||b},
lv:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.j(new P.fF("Illegal RegExp pattern ("+String(r)+")",a))},
mG:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mn:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kX:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kY:function(a,b,c){var u=H.mH(a,b,c)
return u},
mH:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kX(b),'g'),H.mn(c))},
i4:function i4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hh:function hh(a,b){this.a=a
this.b=b},
fN:function fN(a,b,c){this.a=a
this.b=b
this.c=c},
ie:function ie(a){this.a=a},
jn:function jn(a){this.a=a},
eC:function eC(a){this.a=a
this.b=null},
ca:function ca(){},
hS:function hS(){},
hK:function hK(){},
c7:function c7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i6:function i6(a){this.a=a},
fb:function fb(a){this.a=a},
hx:function hx(a){this.a=a},
iy:function iy(a){this.a=a},
aQ:function aQ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fQ:function fQ(a,b){this.a=a
this.b=b
this.c=null},
dt:function dt(a,b){this.a=a
this.$ti=b},
fR:function fR(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jg:function jg(a){this.a=a},
jh:function jh(a){this.a=a},
ji:function ji(a){this.a=a},
fM:function fM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bW:function(a){return a},
bE:function(a,b,c){if(a>>>0!==a||a>=c)throw H.j(H.cX(b,a))},
m6:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.j(H.mm(a,b,c))
return b},
cp:function cp(){},
dz:function dz(){},
co:function co(){},
dA:function dA(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(){},
he:function he(){},
hf:function hf(){},
dB:function dB(){},
hg:function hg(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
mo:function(a){return J.k5(a?Object.keys(a):[],null)},
mC:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jU:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jf:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jS==null){H.mt()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.j(P.kt("Return interceptor for "+H.l(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jW()]
if(r!=null)return r
r=H.my(a)
if(r!=null)return r
if(typeof a=="function")return C.L
u=Object.getPrototypeOf(a)
if(u==null)return C.v
if(u===Object.prototype)return C.v
if(typeof s=="function"){Object.defineProperty(s,$.jW(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
lu:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.j(P.jo(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.j(P.aX(a,0,4294967295,"length",null))
return J.k5(new Array(a),b)},
k5:function(a,b){return J.jx(H.c(a,[b]))},
jx:function(a){H.jT(a)
a.fixed$length=Array
return a},
Z:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dm.prototype
return J.dl.prototype}if(typeof a=="string")return J.ck.prototype
if(a==null)return J.dn.prototype
if(typeof a=="boolean")return J.fL.prototype
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.R)return a
return J.jf(a)},
jQ:function(a){if(typeof a=="string")return J.ck.prototype
if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.R)return a
return J.jf(a)},
jR:function(a){if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.R)return a
return J.jf(a)},
mq:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.R)return a
return J.jf(a)},
P:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Z(a).q(a,b)},
lf:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mw(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jQ(a).j(a,b)},
lg:function(a,b,c,d){return J.mq(a).ig(a,b,c,d)},
jY:function(a,b){return J.jR(a).E(a,b)},
lh:function(a,b){return J.jR(a).R(a,b)},
bI:function(a){return J.Z(a).gH(a)},
c5:function(a){return J.jR(a).gW(a)},
c6:function(a){return J.jQ(a).gk(a)},
au:function(a){return J.Z(a).i(a)},
a:function a(){},
fL:function fL(){},
dn:function dn(){},
dq:function dq(){},
hl:function hl(){},
dY:function dY(){},
bw:function bw(){},
aP:function aP(a){this.$ti=a},
jy:function jy(a){this.$ti=a},
al:function al(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dp:function dp(){},
dm:function dm(){},
dl:function dl(){},
ck:function ck(){}},P={
lY:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mf()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c_(new P.iA(s),1)).observe(u,{childList:true})
return new P.iz(s,u,t)}else if(self.setImmediate!=null)return P.mg()
return P.mh()},
lZ:function(a){self.scheduleImmediate(H.c_(new P.iB(H.n(a,{func:1,ret:-1})),0))},
m_:function(a){self.setImmediate(H.c_(new P.iC(H.n(a,{func:1,ret:-1})),0))},
m0:function(a){P.jD(C.o,H.n(a,{func:1,ret:-1}))},
jD:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.a3(a.a,1000)
return P.m3(u<0?0:u,b)},
kr:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.b1]})
u=C.f.a3(a.a,1000)
return P.m4(u<0?0:u,b)},
m3:function(a,b){var u=new P.eI()
u.eC(a,b)
return u},
m4:function(a,b){var u=new P.eI()
u.eD(a,b)
return u},
m1:function(a,b){var u,t,s
b.a=1
try{a.e9(new P.iK(b),new P.iL(b),null)}catch(s){u=H.bH(s)
t=H.c1(s)
P.mE(new P.iM(b,u,t))}},
kC:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iax")
if(u>=4){t=b.bW()
b.a=a.a
b.c=a.c
P.cK(b,t)}else{t=H.k(b.c,"$ib5")
b.a=2
b.c=a
a.de(t)}},
cK:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iai")
g=g.b
r=s.a
q=s.b
g.toString
P.ja(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cK(h.a,b)}g=h.a
o=g.c
u.a=t
u.b=o
r=!t
if(r){q=b.c
q=(q&1)!==0||q===8}else q=!0
if(q){q=b.b
n=q.b
if(t){m=g.b
m.toString
m=m==n
if(!m)n.toString
else m=!0
m=!m}else m=!1
if(m){H.k(o,"$iai")
g=g.b
r=o.a
q=o.b
g.toString
P.ja(i,i,g,r,q)
return}l=$.X
if(l!=n)$.X=n
else l=i
g=b.c
if(g===8)new P.iQ(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.iP(u,b,o).$0()}else if((g&2)!==0)new P.iO(h,u,b).$0()
if(l!=null)$.X=l
g=u.b
if(!!J.Z(g).$ich){if(g.a>=4){k=H.k(q.c,"$ib5")
q.c=null
b=q.be(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.kC(g,q)
return}}j=b.b
k=H.k(j.c,"$ib5")
j.c=null
b=j.be(k)
g=u.a
r=u.b
if(!g){H.D(r,H.y(j,0))
j.a=4
j.c=r}else{H.k(r,"$iai")
j.a=8
j.c=r}h.a=j
g=j}},
ma:function(a,b){if(H.eY(a,{func:1,args:[P.R,P.ao]}))return H.n(a,{func:1,ret:null,args:[P.R,P.ao]})
if(H.eY(a,{func:1,args:[P.R]}))return H.n(a,{func:1,ret:null,args:[P.R]})
throw H.j(P.jo(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
m9:function(){var u,t
for(;u=$.bX,u!=null;){$.cW=null
t=u.b
$.bX=t
if(t==null)$.cV=null
u.a.$0()}},
md:function(){$.jJ=!0
try{P.m9()}finally{$.cW=null
$.jJ=!1
if($.bX!=null)$.jX().$1(P.kN())}},
kI:function(a){var u=new P.e6(H.n(a,{func:1,ret:-1}))
if($.bX==null){$.bX=$.cV=u
if(!$.jJ)$.jX().$1(P.kN())}else $.cV=$.cV.b=u},
mc:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.bX
if(u==null){P.kI(a)
$.cW=$.cV
return}t=new P.e6(a)
s=$.cW
if(s==null){t.b=u
$.bX=$.cW=t}else{t.b=s.b
$.cW=s.b=t
if(t.b==null)$.cV=t}},
mE:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.X
if(C.k===u){P.jc(t,t,C.k,a)
return}u.toString
P.jc(t,t,u,H.n(u.c3(a),s))},
kq:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.X
if(u===C.k){u.toString
return P.jD(a,b)}return P.jD(a,H.n(u.c3(b),t))},
lW:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b1]}
H.n(b,s)
u=$.X
if(u===C.k){u.toString
return P.kr(a,b)}t=u.dm(b,P.b1)
$.X.toString
return P.kr(a,H.n(t,s))},
ja:function(a,b,c,d,e){var u={}
u.a=d
P.mc(new P.jb(u,e))},
kG:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.X
if(t===c)return d.$0()
$.X=c
u=t
try{t=d.$0()
return t}finally{$.X=u}},
kH:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.D(e,g)
t=$.X
if(t===c)return d.$1(e)
$.X=c
u=t
try{t=d.$1(e)
return t}finally{$.X=u}},
mb:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.D(e,h)
H.D(f,i)
t=$.X
if(t===c)return d.$2(e,f)
$.X=c
u=t
try{t=d.$2(e,f)
return t}finally{$.X=u}},
jc:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.c3(d):c.ik(d,-1)
P.kI(d)},
iA:function iA(a){this.a=a},
iz:function iz(a,b,c){this.a=a
this.b=b
this.c=c},
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
eI:function eI(){this.c=0},
j5:function j5(a,b){this.a=a
this.b=b},
j4:function j4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b5:function b5(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ax:function ax(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iJ:function iJ(a,b){this.a=a
this.b=b},
iN:function iN(a,b){this.a=a
this.b=b},
iK:function iK(a){this.a=a},
iL:function iL(a){this.a=a},
iM:function iM(a,b,c){this.a=a
this.b=b
this.c=c},
iQ:function iQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iR:function iR(a){this.a=a},
iP:function iP(a,b,c){this.a=a
this.b=b
this.c=c},
iO:function iO(a,b,c){this.a=a
this.b=b
this.c=c},
e6:function e6(a){this.a=a
this.b=null},
hN:function hN(){},
hP:function hP(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b){this.a=a
this.b=b},
cx:function cx(){},
hO:function hO(){},
b1:function b1(){},
ai:function ai(a,b){this.a=a
this.b=b},
j7:function j7(){},
jb:function jb(a,b){this.a=a
this.b=b},
iY:function iY(){},
j_:function j_(a,b,c){this.a=a
this.b=b
this.c=c},
iZ:function iZ(a,b){this.a=a
this.b=b},
j0:function j0(a,b,c){this.a=a
this.b=b
this.c=c},
lx:function(a,b){return new H.aQ([a,b])},
ly:function(a){return H.mp(a,new H.aQ([null,null]))},
lz:function(a){return new P.iV([a])},
jH:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kE:function(a,b,c){var u=new P.iW(a,b,[c])
u.c=a.e
return u},
ls:function(a,b,c){var u,t
if(P.jK(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.o])
C.a.h($.aq,a)
try{P.m8(a,u)}finally{if(0>=$.aq.length)return H.h($.aq,-1)
$.aq.pop()}t=P.km(b,H.mx(u,"$ie"),", ")+c
return t.charCodeAt(0)==0?t:t},
jw:function(a,b,c){var u,t
if(P.jK(a))return b+"..."+c
u=new P.be(b)
C.a.h($.aq,a)
try{t=u
t.a=P.km(t.a,a,", ")}finally{if(0>=$.aq.length)return H.h($.aq,-1)
$.aq.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jK:function(a){var u,t
for(u=$.aq.length,t=0;t<u;++t)if(a===$.aq[t])return!0
return!1},
m8:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.i(b,"$ib",[P.o],"$ab")
u=a.gW(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.w())return
r=H.l(u.gJ(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.w()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gJ(u);++s
if(!u.w()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gJ(u);++s
for(;u.w();o=n,n=m){m=u.gJ(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.l(o)
q=H.l(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
k7:function(a){var u,t={}
if(P.jK(a))return"{...}"
u=new P.be("")
try{C.a.h($.aq,a)
u.a+="{"
t.a=!0
J.lh(a,new P.fW(t,u))
u.a+="}"}finally{if(0>=$.aq.length)return H.h($.aq,-1)
$.aq.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iV:function iV(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cL:function cL(a){this.a=a
this.c=this.b=null},
iW:function iW(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fS:function fS(){},
w:function w(){},
fV:function fV(){},
fW:function fW(a,b){this.a=a
this.b=b},
af:function af(){},
j1:function j1(){},
el:function el(){},
cb:function cb(){},
d7:function d7(){},
fu:function fu(){},
ii:function ii(){},
ij:function ij(){},
j6:function j6(a){this.b=0
this.c=a},
lr:function(a){if(a instanceof H.ca)return a.i(0)
return"Instance of '"+H.bR(a)+"'"},
lA:function(a,b,c){var u,t
H.D(b,c)
u=J.lu(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.a6(u,t,b)
return H.i(u,"$ib",[c],"$ab")},
k6:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.c5(a);u.w();)C.a.h(s,H.D(u.gJ(u),c))
if(b)return s
return H.i(J.jx(s),"$ib",t,"$ab")},
jC:function(a){var u,t,s=P.A
H.i(a,"$ie",[s],"$ae")
if(a.constructor===Array){H.i(a,"$iaP",[s],"$aaP")
u=a.length
t=P.kk(0,null,u)
return H.ki(t<u?C.a.cK(a,0,t):a)}return P.lS(a,0,null)},
lS:function(a,b,c){var u,t,s
H.i(a,"$ie",[P.A],"$ae")
u=J.c5(a)
for(t=0;t<b;++t)if(!u.w())throw H.j(P.aX(b,0,t,null,null))
s=[]
for(;u.w();)s.push(u.gJ(u))
return H.ki(s)},
lO:function(a){return new H.fM(a,H.lv(a,!1,!0,!1))},
km:function(a,b,c){var u=J.c5(b)
if(!u.w())return a
if(c.length===0){do a+=H.l(u.gJ(u))
while(u.w())}else{a+=H.l(u.gJ(u))
for(;u.w();)a=a+c+H.l(u.gJ(u))}return a},
m5:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.i(a,"$ib",[P.A],"$ab")
if(c===C.u){u=$.le().b
u=u.test(b)}else u=!1
if(u)return b
t=C.F.im(H.D(b,H.az(c,"cb",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.lM(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lo:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lp:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d9:function(a){if(a>=10)return""+a
return"0"+a},
k2:function(a,b){return new P.bp(1e6*b+1000*a)},
df:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.au(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lr(a)},
li:function(a){return new P.aH(!1,null,null,a)},
jo:function(a,b,c){return new P.aH(!0,a,b,c)},
hp:function(a,b){return new P.bS(null,null,!0,a,b,"Value not in range")},
aX:function(a,b,c,d,e){return new P.bS(b,c,!0,a,d,"Invalid value")},
kk:function(a,b,c){if(0>a||a>c)throw H.j(P.aX(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.j(P.aX(b,a,c,"end",null))
return b}return c},
kj:function(a,b){if(typeof a!=="number")return a.aE()
if(a<0)throw H.j(P.aX(a,0,null,b,null))},
W:function(a,b,c,d,e){var u=H.ad(e==null?J.c6(b):e)
return new P.fK(u,!0,a,c,"Index out of range")},
as:function(a){return new P.ig(a)},
kt:function(a){return new P.id(a)},
cc:function(a){return new P.ff(a)},
q:function(a){return new P.ee(a)},
jV:function(a){H.mC(a)},
a_:function a_(){},
av:function av(a,b){this.a=a
this.b=b},
x:function x(){},
bp:function bp(a){this.a=a},
fr:function fr(){},
fs:function fs(){},
bq:function bq(){},
f2:function f2(){},
dC:function dC(){},
aH:function aH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bS:function bS(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fK:function fK(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ig:function ig(a){this.a=a},
id:function id(a){this.a=a},
hJ:function hJ(a){this.a=a},
ff:function ff(a){this.a=a},
hk:function hk(){},
dM:function dM(){},
fl:function fl(a){this.a=a},
ee:function ee(a){this.a=a},
fF:function fF(a,b){this.a=a
this.b=b},
A:function A(){},
e:function e(){},
aO:function aO(){},
b:function b(){},
Q:function Q(){},
L:function L(){},
aa:function aa(){},
R:function R(){},
ao:function ao(){},
o:function o(){},
be:function be(a){this.a=a},
ml:function(a){var u,t=J.Z(a)
if(!!t.$ibs){u=t.gdv(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eN(a.data,a.height,a.width)},
mk:function(a){if(a instanceof P.eN)return{data:a.a,height:a.b,width:a.c}
return a},
bh:function(a){var u,t,s,r,q
if(a==null)return
u=P.lx(P.o,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=H.U(t[r])
u.a6(0,q,a[q])}return u},
mj:function(a){var u={}
a.R(0,new P.jd(u))
return u},
eN:function eN(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a){this.a=a},
fB:function fB(a,b){this.a=a
this.b=b},
fC:function fC(){},
fD:function fD(){},
iU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m2:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iX:function iX(){},
am:function am(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b6:function b6(){},
fP:function fP(){},
bb:function bb(){},
hi:function hi(){},
ho:function ho(){},
hR:function hR(){},
p:function p(){},
bg:function bg(){},
i3:function i3(){},
ej:function ej(){},
ek:function ek(){},
et:function et(){},
eu:function eu(){},
eE:function eE(){},
eF:function eF(){},
eL:function eL(){},
eM:function eM(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(a){this.a=a},
f7:function f7(){},
bJ:function bJ(){},
hj:function hj(){},
e7:function e7(){},
d3:function d3(){},
dh:function dh(){},
dF:function dF(){},
dG:function dG(){},
bT:function bT(){},
dH:function dH(){},
dN:function dN(){},
dX:function dX(){},
hI:function hI(){},
eA:function eA(){},
eB:function eB(){}},W={
jr:function(){var u=document.createElement("canvas")
return u},
lq:function(a){H.k(a,"$if")
return"wheel"},
iT:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kD:function(a,b,c,d){var u=W.iT(W.iT(W.iT(W.iT(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a9:function(a,b,c,d,e){var u=W.kK(new W.iI(c),W.m)
if(u!=null&&!0)J.lg(a,b,u,!1)
return new W.iH(a,b,u,!1,[e])},
kK:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.X
if(u===C.k)return a
return u.dm(a,b)},
r:function r(){},
eZ:function eZ(){},
f0:function f0(){},
f1:function f1(){},
d2:function d2(){},
bL:function bL(){},
c9:function c9(){},
bm:function bm(){},
ce:function ce(){},
fh:function fh(){},
T:function T(){},
cf:function cf(){},
fi:function fi(){},
aK:function aK(){},
aL:function aL(){},
fj:function fj(){},
fk:function fk(){},
fm:function fm(){},
db:function db(){},
fo:function fo(){},
dc:function dc(){},
dd:function dd(){},
fp:function fp(){},
fq:function fq(){},
iE:function iE(a,b){this.a=a
this.b=b},
a5:function a5(){},
m:function m(){},
f:function f(){},
aM:function aM(){},
fz:function fz(){},
fA:function fA(){},
fE:function fE(){},
aN:function aN(){},
fI:function fI(){},
bO:function bO(){},
bs:function bs(){},
cj:function cj(){},
aR:function aR(){},
fT:function fT(){},
h4:function h4(){},
h5:function h5(){},
h6:function h6(a){this.a=a},
h7:function h7(){},
h8:function h8(a){this.a=a},
aU:function aU(){},
h9:function h9(){},
ac:function ac(){},
iD:function iD(a){this.a=a},
J:function J(){},
cq:function cq(){},
aW:function aW(){},
hm:function hm(){},
hv:function hv(){},
hw:function hw(a){this.a=a},
hy:function hy(){},
aY:function aY(){},
hG:function hG(){},
aZ:function aZ(){},
hH:function hH(){},
b_:function b_(){},
hL:function hL(){},
hM:function hM(a){this.a=a},
aA:function aA(){},
b0:function b0(){},
aB:function aB(){},
hT:function hT(){},
hU:function hU(){},
hZ:function hZ(){},
b2:function b2(){},
aD:function aD(){},
i1:function i1(){},
i2:function i2(){},
bB:function bB(){},
ih:function ih(){},
iv:function iv(){},
b4:function b4(){},
cJ:function cJ(){},
iF:function iF(){},
e9:function e9(){},
iS:function iS(){},
eq:function eq(){},
j2:function j2(){},
j3:function j3(){},
iG:function iG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jG:function jG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iH:function iH(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iI:function iI(a){this.a=a},
B:function B(){},
dg:function dg(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
e8:function e8(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
er:function er(){},
es:function es(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
cQ:function cQ(){},
cR:function cR(){},
ey:function ey(){},
ez:function ez(){},
eD:function eD(){},
eG:function eG(){},
eH:function eH(){},
cS:function cS(){},
cT:function cT(){},
eJ:function eJ(){},
eK:function eK(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){}},O={
fd:function(a){var u=new O.V([a])
u.ba(a)
return u},
V:function V(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cm:function cm(){this.b=this.a=null},
k4:function(a,b){var u,t,s,r=new O.dk()
r.r=0
r.scA(null)
r.sc4(null)
if(a==null){u=$.ku
if(u==null){u=new V.N(1,0)
$.ku=u
t=u}else t=u}else t=a
if(!J.P(r.d,t)){s=r.d
r.d=t
u=new D.v("blurDirection",s,t,[V.N])
u.b=!0
r.n(u)}r.sdt(b)
r.sc5(null)
r.sc6(0)
return r},
ko:function(a,b){var u,t,s,r=new O.aC(),q=r.a
r.a=b
b.gl().h(0,r.ga_())
u=new D.v("texture",q,r.a,[T.bU])
u.b=!0
r.n(u)
t=V.bx()
if(!J.P(r.b,t)){q=r.b
r.b=t
u=new D.v("colorMatrix",q,t,[V.a1])
u.b=!0
r.n(u)}s=V.hq()
if(!J.P(r.c,s)){q=r.c
r.c=s
u=new D.v("source",q,s,[V.bz])
u.b=!0
r.n(u)}if(!J.P(r.d,a)){q=r.d
r.d=a
u=new D.v("destination",q,a,[V.bz])
u.b=!0
r.n(u)}if(r.e!==!1){r.e=!1
u=new D.v("flip",!0,!1,[P.a_])
u.b=!0
r.n(u)}r.f=null
return r},
fn:function fn(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dk:function dk(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dx:function dx(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fZ:function fZ(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cl:function cl(){},
h_:function h_(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aS:function aS(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h1:function h1(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h2:function h2(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dJ:function dJ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bA:function bA(){},
dO:function dO(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aC:function aC(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
fv:function(a){var u=new E.aj()
u.a=""
u.b=!0
u.ses(0,O.fd(E.aj))
u.y.aF(u.giC(),u.giF())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.scH(0,a)
u.sdZ(null)
return u},
lP:function(a,b){var u=new E.hr(a)
u.eo(a,b)
return u},
lV:function(a,b,c,d,e){var u,t,s=J.Z(a)
if(!!s.$ibL)return E.kp(a,!0,!0,!0,!1)
u=W.jr()
t=u.style
t.width="100%"
t.height="100%"
s.gdr(a).h(0,u)
return E.kp(u,!0,!0,!0,!1)},
kp:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dT(),j=H.k(C.l.cE(a,"webgl2",P.ly(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibT")
if(j==null)H.t(P.q("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.lP(j,a)
u=new T.hW(j)
H.ad(j.getParameter(3379))
u.c=H.ad(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.e0(a)
t=new X.fO()
t.c=new X.ar(!1,!1,!1)
t.shh(P.lz(P.A))
u.b=t
t=new X.ha(u)
t.f=0
t.r=V.bc()
t.x=V.bc()
t.ch=t.Q=1
u.c=t
t=new X.fU(u)
t.r=0
t.x=V.bc()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.i0(u)
t.f=V.bc()
t.r=V.bc()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seZ(H.c([],[[P.cx,P.R]]))
t=u.z
s=document
r=W.ac
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a9(s,"contextmenu",H.n(u.gfz(),q),!1,r))
t=u.z
p=W.m
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a9(a,"focus",H.n(u.gfJ(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a9(a,"blur",H.n(u.gfq(),o),!1,p))
t=u.z
n=W.aR
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a9(s,"keyup",H.n(u.gfN(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a9(s,"keydown",H.n(u.gfL(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a9(a,"mousedown",H.n(u.gfR(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a9(a,"mouseup",H.n(u.gfV(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a9(a,l,H.n(u.gfT(),q),!1,r))
n=u.z
m=W.b4;(n&&C.a).h(n,W.a9(a,H.U(W.lq(a)),H.n(u.gfX(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a9(s,l,H.n(u.gfB(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a9(s,"mouseup",H.n(u.gfD(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a9(s,"pointerlockchange",H.n(u.gfZ(),o),!1,p))
p=u.z
o=W.aD
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a9(a,"touchstart",H.n(u.ghe(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a9(a,"touchend",H.n(u.gha(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a9(a,"touchmove",H.n(u.ghc(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.av(Date.now(),!1)
k.cy=0
k.dg()
return k},
f9:function f9(){},
aj:function aj(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hr:function hr(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hs:function hs(a){this.a=a},
ht:function ht(a){this.a=a},
hu:function hu(a){this.a=a},
dT:function dT(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hY:function hY(a){this.a=a}},Z={
jF:function(a,b,c){var u
H.i(c,"$ib",[P.A],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bW(c)),35044)
a.bindBuffer(b,null)
return new Z.e5(b,u)},
aw:function(a){return new Z.aF(a)},
e5:function e5(a,b){this.a=a
this.b=b},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
bD:function bD(a){this.a=a},
aI:function aI(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
aF:function aF(a){this.a=a}},D={
F:function(){var u=new D.br()
u.saa(null)
u.saL(null)
u.c=null
u.d=0
return u},
fc:function fc(){},
br:function br(){var _=this
_.d=_.c=_.b=_.a=null},
fx:function fx(a){this.a=a},
fy:function fy(a){this.a=a},
u:function u(){this.b=null},
bu:function bu(a){this.b=null
this.$ti=a},
bv:function bv(a){this.b=null
this.$ti=a},
v:function v(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
k1:function(a,b){var u,t,s=new D.bo()
s.c=new V.Y(1,1,1)
s.a=V.lX()
u=s.b
s.b=b
b.gl().h(0,s.geu())
t=new D.v("mover",u,s.b,[U.a8])
t.b=!0
s.as(t)
if(!s.c.q(0,a)){u=s.c
s.c=a
t=new D.v("color",u,a,[V.Y])
t.b=!0
s.as(t)}return s},
bo:function bo(){var _=this
_.d=_.c=_.b=_.a=null},
a0:function a0(){},
ds:function ds(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dE:function dE(){},
dL:function dL(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){}},X={d5:function d5(a,b){this.a=a
this.b=b},dr:function dr(a,b){this.a=a
this.b=b},fO:function fO(){var _=this
_.d=_.c=_.b=_.a=null},dv:function dv(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fU:function fU(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ar:function ar(a,b,c){this.a=a
this.b=b
this.c=c},b9:function b9(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},ha:function ha(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cn:function cn(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hn:function hn(){},dV:function dV(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},i0:function i0(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},e0:function e0(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jp:function(a,b,c,d){var u,t,s,r,q=new X.f8()
q.d=q.c=q.b=q.a=512
q.e=!0
q.f=!1
q.x=q.r=1
q.ch=T.kn(null)
q.cx=new V.ab(0,0,0,1)
q.cy=!0
q.db=2000
q.dx=!0
q.dy=V.hq()
q.sak(0,512)
q.sah(0,512)
u=new V.ab(0,0,0,1)
if(!q.cx.q(0,u)){t=q.cx
q.cx=u
s=new D.v("color",t,u,[V.ab])
s.b=!0
q.a0(s)}if(q.cy!==d){q.cy=d
s=new D.v("clearColor",!d,d,[P.a_])
s.b=!0
q.a0(s)}s=q.db
if(!(Math.abs(s-2000)<$.H().a)){q.db=2000
s=new D.v("depth",s,2000,[P.x])
s.b=!0
q.a0(s)}if(!q.f){q.f=!0
s=new D.v("autoResize",!1,!0,[P.a_])
s.b=!0
q.a0(s)}s=q.r
if(!(Math.abs(s-b)<$.H().a)){q.r=b
s=new D.v("autoResizeScalarX",s,b,[P.x])
s.b=!0
q.a0(s)}s=q.x
if(!(Math.abs(s-c)<$.H().a)){q.x=c
s=new D.v("autoResizeScalarY",s,c,[P.x])
s.b=!0
q.a0(s)}r=V.hq()
if(!J.P(q.dy,r)){t=q.dy
q.dy=r
s=new D.v("region",t,r,[V.bz])
s.b=!0
q.a0(s)}return q},
ju:function(a,b){var u=new X.fG(),t=new V.ab(0,0,0,1)
u.a=t
u.b=a
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.hq()
u.r=t
return u},
kd:function(a){var u,t,s=new X.dD()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gl().h(0,s.geE())
t=new D.v("mover",u,s.b,[U.a8])
t.b=!0
s.a0(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.H().a)){s.c=1.0471975511965976
t=new D.v("fov",t,1.0471975511965976,[P.x])
t.b=!0
s.a0(t)}t=s.d
if(!(Math.abs(t-0.1)<$.H().a)){s.d=0.1
t=new D.v("near",t,0.1,[P.x])
t.b=!0
s.a0(t)}t=s.e
if(!(Math.abs(t-2000)<$.H().a)){s.e=2000
t=new D.v("far",t,2000,[P.x])
t.b=!0
s.a0(t)}return s},
f8:function f8(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bK:function bK(){},
fG:function fG(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fJ:function fJ(){this.b=this.a=null},
dD:function dD(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cy:function cy(){}},V={
mK:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.i.eg(a-b,u)
return(a<0?a+u:a)+b},
M:function(a,b,c){if(a==null)return C.j.aj("null",c)
return C.j.aj(C.i.ea(Math.abs(a-0)<$.H().a?0:a,b),c+b+1)},
c0:function(a,b,c){var u,t,s,r,q,p
H.i(a,"$ib",[P.x],"$ab")
u=H.c([],[P.o])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=V.M(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.a6(u,p,C.j.aj(u[p],s))}return u},
cZ:function(a){return C.i.iY(Math.pow(2,C.K.cm(Math.log(H.mi(a))/Math.log(2))))},
bx:function(){var u=$.h3
return u==null?$.h3=V.aT(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aT:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lD:function(a,b,c){return V.aT(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lC:function(a,b,c){return V.aT(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
ka:function(a,b,c,d){d=V.kA()
return V.k9(V.kg(),d,new V.O(a,b,c))},
k9:function(a,b,c){var u=c.u(0,Math.sqrt(c.C(c))),t=b.aY(u),s=t.u(0,Math.sqrt(t.C(t))),r=u.aY(s),q=new V.O(a.a,a.b,a.c),p=s.O(0).C(q),o=r.O(0).C(q),n=u.O(0).C(q)
return V.aT(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bc:function(){var u=$.kf
return u==null?$.kf=new V.a7(0,0):u},
kg:function(){var u=$.cr
return u==null?$.cr=new V.ak(0,0,0):u},
hq:function(){var u=$.cu
return u==null?$.cu=V.ct(0,0,1,1):u},
ct:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.bz(a,b,c,d)},
e4:function(){var u=$.kz
return u==null?$.kz=new V.O(0,0,0):u},
kA:function(){var u=$.ky
return u==null?$.ky=new V.O(0,1,0):u},
lX:function(){var u=$.ik
return u==null?$.ik=new V.O(0,0,1):u},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
ab:function ab(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fw:function fw(a){this.a=a},
bP:function bP(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a1:function a1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a7:function a7(a,b){this.a=a
this.b=b},
ak:function ak(a,b,c){this.a=a
this.b=b
this.c=c},
bd:function bd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bz:function bz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
N:function N(a,b){this.a=a
this.b=b},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
bC:function bC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ag:function(a){var u=new V.hz()
u.ep(a)
return u},
f_:function f_(){},
b8:function b8(){},
dw:function dw(){},
ba:function ba(){this.a=null},
hz:function hz(){this.a=null},
cw:function cw(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dU:function dU(a,b,c){this.a=a
this.b=b
this.c=c},
cA:function cA(a){this.b=a
this.c=null},
i_:function i_(){this.c=this.b=this.a=null},
cB:function cB(a){this.b=a
this.a=this.c=null},
mF:function(a){P.lW(C.I,new V.jm(a))},
lR:function(a){var u=new V.hD()
u.eq(a,!0)
return u},
jm:function jm(a){this.a=a},
hD:function hD(){this.b=this.a=null},
hF:function hF(a){this.a=a},
hE:function hE(a){this.a=a}},U={
js:function(){var u=new U.fe()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
jt:function(a){var u=new U.cd()
u.sS(0,a)
return u},
fe:function fe(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cd:function cd(){this.b=this.a=null},
ci:function ci(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a8:function a8(){},
e1:function e1(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
e2:function e2(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e3:function e3(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
fg:function(a,b){var u,t,s,r,q,p,o,n,m,l=null,k=new M.d8()
k.a=!0
u=E.fv(l)
t=F.jB()
s=t.a
r=new V.O(-1,-1,1)
r=r.u(0,Math.sqrt(r.C(r)))
q=s.bh(new V.bd(1,2,4,6),new V.ab(1,0,0,1),new V.ak(-1,-1,0),new V.a7(0,1),r,l)
s=t.a
r=new V.O(1,-1,1)
r=r.u(0,Math.sqrt(r.C(r)))
p=s.bh(new V.bd(0,3,4,6),new V.ab(0,0,1,1),new V.ak(1,-1,0),new V.a7(1,1),r,l)
s=t.a
r=new V.O(1,1,1)
r=r.u(0,Math.sqrt(r.C(r)))
o=s.bh(new V.bd(0,2,5,6),new V.ab(0,1,0,1),new V.ak(1,1,0),new V.a7(1,0),r,l)
s=t.a
r=V.bc()
n=new V.O(-1,1,1)
n=n.u(0,Math.sqrt(n.C(n)))
m=s.bh(new V.bd(0,2,4,7),new V.ab(1,1,0,1),new V.ak(-1,1,0),r,n,l)
t.d.ih(H.c([q,p,o,m],[F.at]))
t.ay()
u.scH(0,t)
k.e=u
k.saN(l)
k.sar(0,a)
k.saD(b)
return k},
k3:function(){var u,t=new M.de()
t.a=!0
t.seO(0,O.fd(E.aj))
t.e.aF(t.gft(),t.gfv())
t.y=t.x=t.r=t.f=null
u=X.ju(!0,null)
t.saN(null)
t.sar(0,u)
t.saD(null)
return t},
d6:function d6(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
d8:function d8(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
de:function de(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
di:function di(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
an:function an(){}},A={
lB:function(a,b){var u=a.am,t=new A.dy(b,u)
t.aR(b,u)
t.en(a,b)
return t},
lU:function(a,b){var u,t,s,r
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+="\nvec4 clrAccum;\n"
s=b===C.H
t=(s||b===C.m?t+"float colorCount;\n":t)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.G)t+="      clrAccum += color;\n"
else if(b===C.n)t+="      clrAccum = mix(clrAccum, color, color.a);\n"
else t=s?t+"      clrAccum += color;\n      colorCount += 1.0;\n":t+"      clrAccum = color;\n      colorCount = 1.0;\n"
t+="   }\n}\n\nvoid layoutAll()\n{\n"
r=b===C.m
if(r)for(u=a-1;u>=0;--u)t=t+("   if(txtCount > "+u+")\n")+"   {\n"+("     layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return;\n")+("   layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(s)t+="   colorCount = 1.0;\n"
else if(r)t+="   colorCount = 0.0;\n"
t+="   layoutAll();\n"
t=(s?t+"   clrAccum = clrAccum/colorCount;\n":t)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return t.charCodeAt(0)==0?t:t},
lT:function(a,b,c){var u="TextureLayout_"+a+"_"+C.f.i(b.a),t=new A.dP(c,u)
t.aR(c,u)
t.er(a,b,c)
return t},
jE:function(a,b,c,d,e){var u=new A.i7(a,c,e)
u.f=d
u.shR(P.lA(d,0,P.A))
return u},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
f3:function f3(a){this.a=a},
da:function da(a,b){var _=this
_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dj:function dj(a,b){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fH:function fH(a,b){this.a=a
this.b=b},
dy:function dy(a,b){var _=this
_.bj=_.dz=_.bi=_.am=_.aq=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.dP=_.cf=_.dO=_.bw=_.dN=_.dM=_.bv=_.bu=_.dL=_.dK=_.bt=_.bs=_.br=_.dJ=_.dI=_.bq=_.dH=_.dG=_.bp=_.dF=_.dE=_.bo=_.bn=_.dD=_.dC=_.bm=_.bl=_.dB=_.dA=_.bk=null
_.cl=_.dT=_.ck=_.dS=_.cj=_.dR=_.ci=_.dQ=_.cg=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h0:function h0(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.fy=t
_.go=u
_.id=a0
_.k1=a1
_.k2=a2
_.k3=a3
_.k4=a4
_.r1=a5
_.r2=a6
_.rx=a7
_.ry=a8
_.x1=a9
_.x2=b0
_.y1=b1
_.y2=b2
_.aq=b3
_.am=b4
_.bi=b5},
cD:function cD(a,b){this.b=a
this.c=b},
cG:function cG(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
cE:function cE(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cH:function cH(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cF:function cF(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cI:function cI(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
_.cy=m},
cv:function cv(){},
bM:function bM(a,b){this.a=a
this.b=b},
bn:function bn(a,b){this.a=a
this.b=b},
dK:function dK(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dP:function dP(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dW:function dW(){},
ib:function ib(a){this.a=a},
G:function G(a,b,c){this.a=a
this.c=b
this.d=c},
i8:function i8(a,b,c){this.a=a
this.c=b
this.d=c},
i9:function i9(a,b,c){this.a=a
this.c=b
this.d=c},
ia:function ia(a,b,c){this.a=a
this.c=b
this.d=c},
i7:function i7(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
S:function S(a,b,c){this.a=a
this.c=b
this.d=c},
ap:function ap(a,b,c){this.a=a
this.c=b
this.d=c},
K:function K(a,b,c){this.a=a
this.c=b
this.d=c},
cC:function cC(a,b,c){this.a=a
this.c=b
this.d=c},
ic:function ic(a,b,c){this.a=a
this.c=b
this.d=c},
bV:function bV(a,b,c){this.a=a
this.c=b
this.d=c},
a2:function a2(a,b,c){this.a=a
this.c=b
this.d=c},
a3:function a3(a,b,c){this.a=a
this.c=b
this.d=c},
ah:function ah(a,b,c){this.a=a
this.c=b
this.d=c}},F={
j9:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cU:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.O(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.O(u+a3,t+a1,s+a2)
q=new V.O(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.O(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.j9(i)
l=F.j9(j.b)
k=F.mI(d,a0,new F.j8(j,F.j9(j.c),F.j9(j.d),l,m,c),b)
if(k!=null)a.iB(k)},
mI:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.at,P.x,P.x]})
if(a<1)return
if(b<1)return
u=F.jB()
t=H.c([],[F.at])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.il(g,g,new V.ab(p,0,0,1),g,g,new V.a7(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cb(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.il(g,g,new V.ab(j,i,h,1),g,g,new V.a7(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cb(d))}}u.d.ii(a+1,b+1,t)
return u},
cg:function(a,b,c){var u=new F.a6(),t=a.a
if(t==null)H.t(P.q("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.q("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a9()
return u},
lw:function(a,b){var u=new F.b7(),t=a.a
if(t==null)H.t(P.q("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.q("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a9()
return u},
jB:function(){var u=new F.dI(),t=new F.im(u)
t.b=!1
t.shS(H.c([],[F.at]))
u.a=t
t=new F.hC(u)
t.sbU(H.c([],[F.by]))
u.b=t
t=new F.hB(u)
t.sf8(H.c([],[F.b7]))
u.c=t
t=new F.hA(u)
t.sf_(H.c([],[F.a6]))
u.d=t
u.e=null
return u},
il:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.at(),r=new F.is()
r.sbU(H.c([],[F.by]))
s.b=r
r=new F.ir()
u=[F.b7]
r.sf9(H.c([],u))
r.sfa(H.c([],u))
s.c=r
r=new F.io()
u=[F.a6]
r.sf0(H.c([],u))
r.sf1(H.c([],u))
r.sf2(H.c([],u))
s.d=r
h=$.lb()
s.e=0
r=$.ae()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bk().a)!==0?e:t
s.x=(u&$.bj().a)!==0?b:t
s.y=(u&$.aG().a)!==0?f:t
s.z=(u&$.bl().a)!==0?g:t
s.Q=(u&$.lc().a)!==0?c:t
s.ch=(u&$.c4().a)!==0?i:0
s.cx=(u&$.bi().a)!==0?a:t
return s},
j8:function j8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a6:function a6(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
b7:function b7(){this.b=this.a=null},
by:function by(){this.a=null},
dI:function dI(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hA:function hA(a){this.a=a
this.b=null},
hB:function hB(a){this.a=a
this.b=null},
hC:function hC(a){this.a=a
this.b=null},
at:function at(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iu:function iu(a){this.a=a},
it:function it(a){this.a=a},
im:function im(a){this.a=a
this.c=this.b=null},
io:function io(){this.d=this.c=this.b=null},
ip:function ip(a,b){this.a=a
this.b=b},
iq:function iq(a,b){this.a=a
this.b=b},
ir:function ir(){this.c=this.b=null},
is:function is(){this.b=null}},T={
kn:function(a){var u=new T.hV()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
bf:function bf(){},
bU:function bU(){},
hV:function hV(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cz:function cz(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hW:function hW(a){var _=this
_.a=a
_.e=_.d=_.c=null},
hX:function hX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},N={
kT:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1="testCanvas",b2=null,b3="modifiers",b4=V.lR("Test 028"),b5=W.jr()
b5.className="pageLargeCanvas"
b5.id=b1
b4.a.appendChild(b5)
u=[P.o]
b4.dl(H.c(["Test of a Gaussian blur cover pass. ","Notice the depth of field causing things further away to be blurry."],u))
b4.dl(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(b1)
if(t==null)H.t(P.q("Failed to find an element with the identifier, testCanvas."))
s=E.lV(t,!0,!0,!0,!1)
r=new U.ci()
r.ba(U.a8)
r.aF(r.gfi(),r.gh2())
r.e=null
r.f=V.bx()
r.r=0
u=s.r
q=new U.e2()
p=U.js()
p.scD(0,!0)
p.scr(6.283185307179586)
p.sct(0)
p.sae(0,0)
p.scs(100)
p.sU(0)
p.scc(0.5)
q.b=p
o=q.gaK()
p.gl().h(0,o)
p=U.js()
p.scD(0,!0)
p.scr(6.283185307179586)
p.sct(0)
p.sae(0,0)
p.scs(100)
p.sU(0)
p.scc(0.5)
q.c=p
p.gl().h(0,o)
q.d=null
q.r=q.f=q.e=!1
q.y=q.x=2.5
q.Q=4
q.ch=q.cx=!1
q.db=q.cy=0
q.dx=null
q.dy=0
q.fx=q.fr=null
n=new X.ar(!1,!1,!1)
m=q.d
q.d=n
p=[X.ar]
o=new D.v(b3,m,n,p)
o.b=!0
q.M(o)
o=q.f
if(o!==!1){q.f=!1
o=new D.v("invertX",o,!1,[P.a_])
o.b=!0
q.M(o)}o=q.r
if(o!==!1){q.r=!1
o=new D.v("invertY",o,!1,[P.a_])
o.b=!0
q.M(o)}q.aW(u)
r.h(0,q)
u=s.r
q=new U.e1()
o=U.js()
o.scD(0,!0)
o.scr(6.283185307179586)
o.sct(0)
o.sae(0,0)
o.scs(100)
o.sU(0)
o.scc(0.2)
q.b=o
o.gl().h(0,q.gaK())
q.c=null
q.d=!1
q.e=2.5
q.r=4
q.x=q.y=!1
q.z=0
q.Q=null
q.ch=0
q.cy=q.cx=null
n=new X.ar(!0,!1,!1)
m=q.c
q.c=n
o=new D.v(b3,m,n,p)
o.b=!0
q.M(o)
q.aW(u)
r.h(0,q)
u=s.r
q=new U.e3()
q.c=0.01
q.e=q.d=0
n=new X.ar(!1,!1,!1)
q.b=n
p=new D.v(b3,b2,n,p)
p.b=!0
q.M(p)
q.aW(u)
r.h(0,q)
r.h(0,U.jt(V.lD(0,0,5)))
l=X.kd(r)
k=F.jB()
F.cU(k,b2,b2,1,1,1,0,0,1)
F.cU(k,b2,b2,1,1,0,1,0,3)
F.cU(k,b2,b2,1,1,0,0,1,2)
F.cU(k,b2,b2,1,1,-1,0,0,0)
F.cU(k,b2,b2,1,1,0,-1,0,0)
F.cU(k,b2,b2,1,1,0,0,-1,3)
k.ay()
j=E.fv(k)
i=E.fv(b2)
for(h=-1.6;h<=1.7;h+=0.8)for(g=-1.6;g<=1.7;g+=0.8)for(f=-1.6;f<=1.7;f+=0.8){e=new V.a1(1,0,0,h,0,1,0,g,0,0,1,f,0,0,0,1).t(0,new V.a1(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
d=E.fv(b2)
u=new U.cd()
u.sS(0,e)
d.sdZ(u)
u=d.y
q=H.y(u,0)
H.D(j,q)
p=[q]
if(H.z(u.bd(H.c([j],p)))){o=u.a
c=o.length
C.a.h(o,j)
q=H.i(H.c([j],p),"$ie",[q],"$ae")
u=u.c
if(u!=null)u.$2(c,q)}u=i.y
q=H.y(u,0)
H.D(d,q)
p=[q]
if(H.z(u.bd(H.c([d],p)))){o=u.a
c=o.length
C.a.h(o,d)
q=H.i(H.c([d],p),"$ie",[q],"$ae")
u=u.c
if(u!=null)u.$2(c,q)}}b=s.f.dV("../resources/diceColor")
a=new O.dx()
a.seL(O.fd(V.a1))
a.e.aF(a.gfm(),a.gfo())
u=new O.aS(a,"emission")
u.c=C.c
u.f=new V.Y(0,0,0)
a.f=u
u=new O.aS(a,"ambient")
u.c=C.c
u.f=new V.Y(0,0,0)
a.r=u
u=new O.aS(a,"diffuse")
u.c=C.c
u.f=new V.Y(0,0,0)
a.x=u
u=new O.aS(a,"invDiffuse")
u.c=C.c
u.f=new V.Y(0,0,0)
a.y=u
u=new O.h2(a,"specular")
u.c=C.c
u.f=new V.Y(0,0,0)
u.ch=100
a.z=u
u=new O.h_(a,"bump")
u.c=C.c
a.Q=u
a.ch=null
u=new O.aS(a,"reflect")
u.c=C.c
u.f=new V.Y(0,0,0)
a.cx=u
u=new O.h1(a,"refract")
u.c=C.c
u.f=new V.Y(0,0,0)
u.ch=1
a.cy=u
u=new O.fZ(a,"alpha")
u.c=C.c
u.f=1
a.db=u
u=new D.ds()
u.ba(D.a0)
u.seW(H.c([],[D.bo]))
u.shg(H.c([],[D.dE]))
u.shz(H.c([],[D.dL]))
u.shN(H.c([],[D.dQ]))
u.shO(H.c([],[D.dR]))
u.shP(H.c([],[D.dS]))
u.ch=u.Q=null
u.cF(u.gfk(),u.gh0(),u.gh4())
a.dx=u
q=u.Q
u=q==null?u.Q=D.F():q
u.h(0,a.ghm())
u=a.dx
q=u.ch
u=q==null?u.ch=D.F():q
u.h(0,a.ga_())
a.dy=null
u=a.dx
q=U.jt(V.ka(-1,-1,-1,b2))
u.h(0,D.k1(new V.Y(1,0.9,0.9),q))
u=a.dx
q=U.jt(V.ka(1,1,2,b2))
u.h(0,D.k1(new V.Y(0.2,0.2,0.35),q))
u=a.r
u.sap(0,new V.Y(0.2,0.2,0.2))
a.r.sb6(b)
u=a.x
u.sap(0,new V.Y(0.8,0.8,0.8))
a.x.sb6(b)
u=a.z
u.sap(0,new V.Y(0.7,0.7,0.7))
u=a.z
if(u.c===C.c){u.c=C.h
u.bC()
u.bX(100)
q=u.a
q.a=null
q.n(b2)}u.bX(10)
a.Q.sb6(s.f.dV("../resources/diceBumpMap"))
a0=X.jp(!0,1,1,!1)
u=s.f.dW("../resources/maskonaive",".jpg")
a1=M.fg(b2,b2)
q=new O.dJ()
q.b=1.0471975511965976
q.d=new V.Y(1,1,1)
m=q.c
q.c=u
u.gl().h(0,q.ga_())
u=new D.v("boxTexture",m,q.c,[T.cz])
u.b=!0
q.n(u)
a1.saD(q)
a1.saN(l)
a1.sar(0,a0)
a2=M.k3()
a2.saN(l)
a2.sar(0,a0)
a2.saD(a)
a2.e.h(0,i)
a3=X.jp(!0,0.5,0.5,!0)
a4=M.k3()
a4.saN(l)
a4.sar(0,a3)
u=new O.fn()
u.d=1
u.e=10
a5=new V.Y(1,1,1)
u.b=a5
q=[V.Y]
p=new D.v("objectColor",b2,a5,q)
p.b=!0
u.n(p)
a5=new V.Y(0,0,0)
if(!J.P(u.c,a5)){m=u.c
u.c=a5
q=new D.v("fogColor",m,a5,q)
q.b=!0
u.n(q)}q=u.d
if(!(Math.abs(q-3.5)<$.H().a)){u.d=3.5
q=new D.v("fogStart",q,3.5,[P.x])
q.b=!0
u.n(q)}q=u.e
if(!(Math.abs(q-5.5)<$.H().a)){u.e=5.5
q=new D.v("fogStop",q,5.5,[P.x])
q.b=!0
u.n(q)}a4.saD(u)
a4.e.h(0,i)
u=new V.bC(-1,0,0,1)
q=a0.ch
p=a3.ch
a6=new M.di()
a6.a=!0
a6.c=X.jp(!0,1,1,!1)
o=O.k4(b2,b2)
a7=a6.gV()
o.gl().h(0,a7)
a6.d=o
a6.e=M.fg(a6.c,o)
o=a6.c.ch
a8=$.kv
o=O.k4(a8==null?$.kv=new V.N(0,1):a8,o)
o.gl().h(0,a7)
a6.f=o
a6.r=M.fg(b2,o)
a6.d.sc6(0)
a6.f.sc6(0)
a6.d.sdt(q)
a6.d.sc5(p)
a6.f.sc5(p)
a6.d.scA(b2)
a6.f.scA(b2)
a6.d.sc4(u)
a6.f.sc4(u)
a6.r.sar(0,b2)
a9=new O.dO()
a9.a=new V.ab(0,0,0,0)
a9.seY(O.fd(O.aC))
a9.c.aF(a9.gfF(),a9.gfH())
a9.d=0
a9.e=null
a9.r=a9.f=C.n
a5=new V.ab(0,0,0,0)
if(!a9.a.q(0,a5)){m=a9.a
a9.a=a5
u=new D.v("backColor",m,a5,[V.ab])
u.b=!0
a9.n(u)}a9.sdn(C.n)
a9.sdn(C.m)
u=a9.c
q=a3.ch
u.h(0,O.ko(V.ct(0,0.8,0.2,0.2),q))
q=a9.c
u=a0.ch
q.h(0,O.ko(V.ct(0,0.6,0.2,0.2),u))
b0=M.fg(b2,b2)
b0.sar(0,X.ju(!1,b2))
b0.saD(a9)
u=M.an
q=H.c([a1,a2,a4,a6,b0],[u])
p=new M.d6()
p.ba(u)
p.e=!0
p.f=!1
p.r=null
p.aF(p.gh6(),p.gh8())
p.c_(0,q)
u=s.d
if(u!==p){if(u!=null)u.gl().N(0,s.gcQ())
s.d=p
p.gl().h(0,s.gcQ())
s.cR()}V.mF(s)}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jz.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gH:function(a){return H.cs(a)},
i:function(a){return"Instance of '"+H.bR(a)+"'"}}
J.fL.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$ia_:1}
J.dn.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0}}
J.dq.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.hl.prototype={}
J.dY.prototype={}
J.bw.prototype={
i:function(a){var u=a[$.l0()]
if(u==null)return this.ek(a)
return"JavaScript function for "+H.l(J.au(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ijv:1}
J.aP.prototype={
h:function(a,b){H.D(b,H.y(a,0))
if(!!a.fixed$length)H.t(P.as("add"))
a.push(b)},
N:function(a,b){var u
if(!!a.fixed$length)H.t(P.as("remove"))
for(u=0;u<a.length;++u)if(J.P(a[u],b)){a.splice(u,1)
return!0}return!1},
c_:function(a,b){var u,t
H.i(b,"$ie",[H.y(a,0)],"$ae")
if(!!a.fixed$length)H.t(P.as("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.C)(b),++t)a.push(b[t])},
R:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.j(P.cc(a))}},
A:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.a6(t,u,H.l(a[u]))
return t.join(b)},
iy:function(a){return this.A(a,"")},
E:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
cK:function(a,b,c){var u=a.length
if(b>u)throw H.j(P.aX(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.j(P.aX(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.y(a,0)])
return H.c(a.slice(b,c),[H.y(a,0)])},
cJ:function(a,b){return this.cK(a,b,null)},
gcp:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.j(H.lt())},
al:function(a,b){var u
for(u=0;u<a.length;++u)if(J.P(a[u],b))return!0
return!1},
i:function(a){return P.jw(a,"[","]")},
gW:function(a){return new J.al(a,a.length,[H.y(a,0)])},
gH:function(a){return H.cs(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.t(P.as("set length"))
if(b<0)throw H.j(P.aX(b,0,null,"newLength",null))
a.length=b},
a6:function(a,b,c){H.D(c,H.y(a,0))
if(!!a.immutable$list)H.t(P.as("indexed set"))
if(b>=a.length||b<0)throw H.j(H.cX(a,b))
a[b]=c},
$ie:1,
$ib:1}
J.jy.prototype={}
J.al.prototype={
gJ:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.j(H.C(s))
u=t.c
if(u>=r){t.sd4(null)
return!1}t.sd4(s[u]);++t.c
return!0},
sd4:function(a){this.d=H.D(a,H.y(this,0))},
$iaO:1}
J.dp.prototype={
iY:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.j(P.as(""+a+".toInt()"))},
cm:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.j(P.as(""+a+".floor()"))},
Z:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.j(P.as(""+a+".round()"))},
ea:function(a,b){var u,t
if(b>20)throw H.j(P.aX(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
eg:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
em:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.di(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.di(a,b)},
di:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.j(P.as("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
bf:function(a,b){var u
if(a>0)u=this.hy(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hy:function(a,b){return b>31?0:a>>>b},
$ix:1,
$iaa:1}
J.dm.prototype={$iA:1}
J.dl.prototype={}
J.ck.prototype={
ca:function(a,b){if(b<0)throw H.j(H.cX(a,b))
if(b>=a.length)H.t(H.cX(a,b))
return a.charCodeAt(b)},
bb:function(a,b){if(b>=a.length)throw H.j(H.cX(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(typeof b!=="string")throw H.j(P.jo(b,null,null))
return a+b},
cM:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.j(P.hp(b,null))
if(b>c)throw H.j(P.hp(b,null))
if(c>a.length)throw H.j(P.hp(c,null))
return a.substring(b,c)},
cL:function(a,b){return this.cM(a,b,null)},
t:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.j(C.E)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aj:function(a,b){var u=b-a.length
if(u<=0)return a
return this.t(" ",u)+a},
i:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ikc:1,
$io:1}
H.a4.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.j.ca(this.a,b)},
$ae_:function(){return[P.A]},
$aw:function(){return[P.A]},
$ae:function(){return[P.A]},
$ab:function(){return[P.A]}}
H.ft.prototype={}
H.du.prototype={
gJ:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=J.jQ(s),q=r.gk(s)
if(t.b!==q)throw H.j(P.cc(s))
u=t.c
if(u>=q){t.saS(null)
return!1}t.saS(r.E(s,u));++t.c
return!0},
saS:function(a){this.d=H.D(a,H.y(this,0))},
$iaO:1}
H.fX.prototype={
gW:function(a){return new H.fY(J.c5(this.a),this.b,this.$ti)},
gk:function(a){return J.c6(this.a)},
E:function(a,b){return this.b.$1(J.jY(this.a,b))},
$ae:function(a,b){return[b]}}
H.fY.prototype={
w:function(){var u=this,t=u.b
if(t.w()){u.saS(u.c.$1(t.gJ(t)))
return!0}u.saS(null)
return!1},
gJ:function(a){return this.a},
saS:function(a){this.a=H.D(a,H.y(this,1))},
$aaO:function(a,b){return[b]}}
H.iw.prototype={
gW:function(a){return new H.ix(J.c5(this.a),this.b,this.$ti)}}
H.ix.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(H.z(t.$1(u.gJ(u))))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.bN.prototype={}
H.e_.prototype={}
H.dZ.prototype={}
H.i4.prototype={
ai:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
if(r==null)return
u=Object.create(null)
t=s.b
if(t!==-1)u.arguments=r[t+1]
t=s.c
if(t!==-1)u.argumentsExpr=r[t+1]
t=s.d
if(t!==-1)u.expr=r[t+1]
t=s.e
if(t!==-1)u.method=r[t+1]
t=s.f
if(t!==-1)u.receiver=r[t+1]
return u}}
H.hh.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fN.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.l(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.l(t.a)+")"
return s+r+"' on '"+u+"' ("+H.l(t.a)+")"}}
H.ie.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jn.prototype={
$1:function(a){if(!!J.Z(a).$ibq)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.eC.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iao:1}
H.ca.prototype={
i:function(a){return"Closure '"+H.bR(this).trim()+"'"},
$ijv:1,
gj1:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hS.prototype={}
H.hK.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c3(u)+"'"}}
H.c7.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.c7))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.cs(this.a)
else u=typeof t!=="object"?J.bI(t):H.cs(t)
return(u^H.cs(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bR(u)+"'")}}
H.i6.prototype={
i:function(a){return this.a}}
H.fb.prototype={
i:function(a){return this.a}}
H.hx.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.iy.prototype={
i:function(a){return"Assertion failed: "+P.df(this.a)}}
H.aQ.prototype={
gk:function(a){return this.a},
gaz:function(a){return new H.dt(this,[H.y(this,0)])},
du:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.d1(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.d1(t,b)}else return s.iw(b)},
iw:function(a){var u=this.d
if(u==null)return!1
return this.cn(this.bI(u,J.bI(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bc(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bc(r,b)
s=t==null?null:t.b
return s}else return q.ix(b)},
ix:function(a){var u,t,s=this.d
if(s==null)return
u=this.bI(s,J.bI(a)&0x3ffffff)
t=this.cn(u,a)
if(t<0)return
return u[t].b},
a6:function(a,b,c){var u,t,s,r,q,p,o=this
H.D(b,H.y(o,0))
H.D(c,H.y(o,1))
if(typeof b==="string"){u=o.b
o.cU(u==null?o.b=o.bS():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cU(t==null?o.c=o.bS():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bS()
r=J.bI(b)&0x3ffffff
q=o.bI(s,r)
if(q==null)o.bY(s,r,[o.bT(b,c)])
else{p=o.cn(q,b)
if(p>=0)q[p].b=c
else q.push(o.bT(b,c))}}},
R:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.y(s,0),H.y(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.j(P.cc(s))
u=u.c}},
cU:function(a,b,c){var u,t=this
H.D(b,H.y(t,0))
H.D(c,H.y(t,1))
u=t.bc(a,b)
if(u==null)t.bY(a,b,t.bT(b,c))
else u.b=c},
bT:function(a,b){var u=this,t=new H.fQ(H.D(a,H.y(u,0)),H.D(b,H.y(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
cn:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.P(a[t].a,b))return t
return-1},
i:function(a){return P.k7(this)},
bc:function(a,b){return a[b]},
bI:function(a,b){return a[b]},
bY:function(a,b,c){a[b]=c},
eT:function(a,b){delete a[b]},
d1:function(a,b){return this.bc(a,b)!=null},
bS:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bY(t,u,t)
this.eT(t,u)
return t}}
H.fQ.prototype={}
H.dt.prototype={
gk:function(a){return this.a.a},
gW:function(a){var u=this.a,t=new H.fR(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fR.prototype={
gJ:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.j(P.cc(t))
else{t=u.c
if(t==null){u.scT(null)
return!1}else{u.scT(t.a)
u.c=u.c.c
return!0}}},
scT:function(a){this.d=H.D(a,H.y(this,0))},
$iaO:1}
H.jg.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.jh.prototype={
$2:function(a,b){return this.a(a,b)},
$S:29}
H.ji.prototype={
$1:function(a){return this.a(H.U(a))},
$S:31}
H.fM.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikc:1}
H.cp.prototype={$in2:1}
H.dz.prototype={
gk:function(a){return a.length},
$iI:1,
$aI:function(){}}
H.co.prototype={
j:function(a,b){H.bE(b,a,a.length)
return a[b]},
$abN:function(){return[P.x]},
$aw:function(){return[P.x]},
$ie:1,
$ae:function(){return[P.x]},
$ib:1,
$ab:function(){return[P.x]}}
H.dA.prototype={
$abN:function(){return[P.A]},
$aw:function(){return[P.A]},
$ie:1,
$ae:function(){return[P.A]},
$ib:1,
$ab:function(){return[P.A]}}
H.hb.prototype={
j:function(a,b){H.bE(b,a,a.length)
return a[b]}}
H.hc.prototype={
j:function(a,b){H.bE(b,a,a.length)
return a[b]}}
H.hd.prototype={
j:function(a,b){H.bE(b,a,a.length)
return a[b]}}
H.he.prototype={
j:function(a,b){H.bE(b,a,a.length)
return a[b]}}
H.hf.prototype={
j:function(a,b){H.bE(b,a,a.length)
return a[b]}}
H.dB.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bE(b,a,a.length)
return a[b]},
$in3:1}
H.hg.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bE(b,a,a.length)
return a[b]}}
H.cM.prototype={}
H.cN.prototype={}
H.cO.prototype={}
H.cP.prototype={}
P.iA.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:15}
P.iz.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:28}
P.iB.prototype={
$0:function(){this.a.$0()},
$S:2}
P.iC.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eI.prototype={
eC:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c_(new P.j5(this,b),0),a)
else throw H.j(P.as("`setTimeout()` not found."))},
eD:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c_(new P.j4(this,a,Date.now(),b),0),a)
else throw H.j(P.as("Periodic timer."))},
$ib1:1}
P.j5.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.j4.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.f.em(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.b5.prototype={
iA:function(a){if(this.c!==6)return!0
return this.b.b.cz(H.n(this.d,{func:1,ret:P.a_,args:[P.R]}),a.a,P.a_,P.R)},
iv:function(a){var u=this.e,t=P.R,s={futureOr:1,type:H.y(this,1)},r=this.b.b
if(H.eY(u,{func:1,args:[P.R,P.ao]}))return H.jP(r.iT(u,a.a,a.b,null,t,P.ao),s)
else return H.jP(r.cz(H.n(u,{func:1,args:[P.R]}),a.a,null,t),s)}}
P.ax.prototype={
e9:function(a,b,c){var u,t,s,r=H.y(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.X
if(u!==C.k){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.ma(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.ax($.X,[c])
s=b==null?1:3
this.cV(new P.b5(t,s,a,b,[r,c]))
return t},
iX:function(a,b){return this.e9(a,null,b)},
cV:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$ib5")
t.c=a}else{if(s===2){u=H.k(t.c,"$iax")
s=u.a
if(s<4){u.cV(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.jc(null,null,s,H.n(new P.iJ(t,a),{func:1,ret:-1}))}},
de:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$ib5")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iax")
u=q.a
if(u<4){q.de(a)
return}p.a=u
p.c=q.c}o.a=p.be(a)
u=p.b
u.toString
P.jc(null,null,u,H.n(new P.iN(o,p),{func:1,ret:-1}))}},
bW:function(){var u=H.k(this.c,"$ib5")
this.c=null
return this.be(u)},
be:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cY:function(a){var u,t,s=this,r=H.y(s,0)
H.jP(a,{futureOr:1,type:r})
u=s.$ti
if(H.jM(a,"$ich",u,"$ach"))if(H.jM(a,"$iax",u,null))P.kC(a,s)
else P.m1(a,s)
else{t=s.bW()
H.D(a,r)
s.a=4
s.c=a
P.cK(s,t)}},
cZ:function(a,b){var u,t=this
H.k(b,"$iao")
u=t.bW()
t.a=8
t.c=new P.ai(a,b)
P.cK(t,u)},
$ich:1}
P.iJ.prototype={
$0:function(){P.cK(this.a,this.b)},
$S:2}
P.iN.prototype={
$0:function(){P.cK(this.b,this.a.a)},
$S:2}
P.iK.prototype={
$1:function(a){var u=this.a
u.a=0
u.cY(a)},
$S:15}
P.iL.prototype={
$2:function(a,b){H.k(b,"$iao")
this.a.cZ(a,b)},
$1:function(a){return this.$2(a,null)},
$S:34}
P.iM.prototype={
$0:function(){this.a.cZ(this.b,this.c)},
$S:2}
P.iQ.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.e7(H.n(s.d,{func:1}),null)}catch(r){u=H.bH(r)
t=H.c1(r)
if(o.d){s=H.k(o.a.a.c,"$iai").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iai")
else q.b=new P.ai(u,t)
q.a=!0
return}if(!!J.Z(n).$ich){if(n instanceof P.ax&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iai")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.iX(new P.iR(p),null)
s.a=!1}},
$S:3}
P.iR.prototype={
$1:function(a){return this.a},
$S:36}
P.iP.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.y(s,0)
q=H.D(n.c,r)
p=H.y(s,1)
n.a.b=s.b.b.cz(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.bH(o)
t=H.c1(o)
s=n.a
s.b=new P.ai(u,t)
s.a=!0}},
$S:3}
P.iO.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iai")
r=m.c
if(H.z(r.iA(u))&&r.e!=null){q=m.b
q.b=r.iv(u)
q.a=!1}}catch(p){t=H.bH(p)
s=H.c1(p)
r=H.k(m.a.a.c,"$iai")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ai(t,s)
n.a=!0}},
$S:3}
P.e6.prototype={}
P.hN.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.ax($.X,[P.A])
r.a=0
u=H.y(s,0)
t=H.n(new P.hP(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.hQ(r,q),{func:1,ret:-1})
W.a9(s.a,s.b,t,!1,u)
return q}}
P.hP.prototype={
$1:function(a){H.D(a,H.y(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.y(this.b,0)]}}}
P.hQ.prototype={
$0:function(){this.b.cY(this.a.a)},
$S:2}
P.cx.prototype={}
P.hO.prototype={}
P.b1.prototype={}
P.ai.prototype={
i:function(a){return H.l(this.a)},
$ibq:1}
P.j7.prototype={$ing:1}
P.jb.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dC():s
s=this.b
if(s==null)throw H.j(t)
u=H.j(t)
u.stack=s.i(0)
throw u},
$S:2}
P.iY.prototype={
iU:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.k===$.X){a.$0()
return}P.kG(r,r,this,a,-1)}catch(s){u=H.bH(s)
t=H.c1(s)
P.ja(r,r,this,u,H.k(t,"$iao"))}},
iV:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.k===$.X){a.$1(b)
return}P.kH(r,r,this,a,b,-1,c)}catch(s){u=H.bH(s)
t=H.c1(s)
P.ja(r,r,this,u,H.k(t,"$iao"))}},
ik:function(a,b){return new P.j_(this,H.n(a,{func:1,ret:b}),b)},
c3:function(a){return new P.iZ(this,H.n(a,{func:1,ret:-1}))},
dm:function(a,b){return new P.j0(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
e7:function(a,b){H.n(a,{func:1,ret:b})
if($.X===C.k)return a.$0()
return P.kG(null,null,this,a,b)},
cz:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.X===C.k)return a.$1(b)
return P.kH(null,null,this,a,b,c,d)},
iT:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.X===C.k)return a.$2(b,c)
return P.mb(null,null,this,a,b,c,d,e,f)}}
P.j_.prototype={
$0:function(){return this.a.e7(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iZ.prototype={
$0:function(){return this.a.iU(this.b)},
$S:3}
P.j0.prototype={
$1:function(a){var u=this.c
return this.a.iV(this.b,H.D(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iV.prototype={
gW:function(a){return P.kE(this,this.r,H.y(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.D(b,H.y(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cW(u==null?s.b=P.jH():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cW(t==null?s.c=P.jH():t,b)}else return s.eG(0,b)},
eG:function(a,b){var u,t,s,r=this
H.D(b,H.y(r,0))
u=r.d
if(u==null)u=r.d=P.jH()
t=r.d_(b)
s=u[t]
if(s==null)u[t]=[r.bE(b)]
else{if(r.d5(s,b)>=0)return!1
s.push(r.bE(b))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hj(this.c,b)
else return this.hi(0,b)},
hi:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.f5(r,b)
t=s.d5(u,b)
if(t<0)return!1
s.dj(u.splice(t,1)[0])
return!0},
cW:function(a,b){H.D(b,H.y(this,0))
if(H.k(a[b],"$icL")!=null)return!1
a[b]=this.bE(b)
return!0},
hj:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$icL")
if(u==null)return!1
this.dj(u)
delete a[b]
return!0},
d7:function(){this.r=1073741823&this.r+1},
bE:function(a){var u,t=this,s=new P.cL(H.D(a,H.y(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.d7()
return s},
dj:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.d7()},
d_:function(a){return J.bI(a)&1073741823},
f5:function(a,b){return a[this.d_(b)]},
d5:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.P(a[t].a,b))return t
return-1}}
P.cL.prototype={}
P.iW.prototype={
gJ:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.j(P.cc(t))
else{t=u.c
if(t==null){u.scX(null)
return!1}else{u.scX(H.D(t.a,H.y(u,0)))
u.c=u.c.b
return!0}}},
scX:function(a){this.d=H.D(a,H.y(this,0))},
$iaO:1}
P.fS.prototype={$ie:1,$ib:1}
P.w.prototype={
gW:function(a){return new H.du(a,this.gk(a),[H.cY(this,a,"w",0)])},
E:function(a,b){return this.j(a,b)},
j_:function(a,b){var u,t=this,s=H.c([],[H.cY(t,a,"w",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.a6(s,u,t.j(a,u))
return s},
iZ:function(a){return this.j_(a,!0)},
i:function(a){return P.jw(a,"[","]")}}
P.fV.prototype={}
P.fW.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.l(a)
t.a=u+": "
t.a+=H.l(b)},
$S:13}
P.af.prototype={
R:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.cY(s,a,"af",0),H.cY(s,a,"af",1)]})
for(u=J.c5(s.gaz(a));u.w();){t=u.gJ(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.c6(this.gaz(a))},
i:function(a){return P.k7(a)},
$iQ:1}
P.j1.prototype={
i:function(a){return P.jw(this,"{","}")},
E:function(a,b){var u,t,s,r=this
P.kj(b,"index")
for(u=P.kE(r,r.r,H.y(r,0)),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.j(P.W(b,r,"index",null,t))},
$ie:1,
$ikl:1}
P.el.prototype={}
P.cb.prototype={}
P.d7.prototype={}
P.fu.prototype={
$acb:function(){return[P.o,[P.b,P.A]]}}
P.ii.prototype={}
P.ij.prototype={
im:function(a){var u,t,s=P.kk(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.j6(u)
if(t.f3(a,0,s)!==s)t.dk(C.j.ca(a,s-1),0)
return new Uint8Array(u.subarray(0,H.m6(0,t.b,u.length)))},
$ad7:function(){return[P.o,[P.b,P.A]]}}
P.j6.prototype={
dk:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.h(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.h(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.h(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.h(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.h(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.h(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.h(s,r)
s[r]=128|a&63
return!1}},
f3:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.j.ca(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.j.bb(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dk(r,C.j.bb(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.h(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.h(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.h(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.h(u,q)
u[q]=128|r&63}}return s}}
P.a_.prototype={}
P.av.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.av&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.f.bf(u,30))&1073741823},
i:function(a){var u=this,t=P.lo(H.lL(u)),s=P.d9(H.lJ(u)),r=P.d9(H.lF(u)),q=P.d9(H.lG(u)),p=P.d9(H.lI(u)),o=P.d9(H.lK(u)),n=P.lp(H.lH(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.x.prototype={}
P.bp.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bp&&this.a===b.a},
gH:function(a){return C.f.gH(this.a)},
i:function(a){var u,t,s,r=new P.fs(),q=this.a
if(q<0)return"-"+new P.bp(0-q).i(0)
u=r.$1(C.f.a3(q,6e7)%60)
t=r.$1(C.f.a3(q,1e6)%60)
s=new P.fr().$1(q%1e6)
return""+C.f.a3(q,36e8)+":"+H.l(u)+":"+H.l(t)+"."+H.l(s)}}
P.fr.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.fs.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.bq.prototype={}
P.f2.prototype={
i:function(a){return"Assertion failed"}}
P.dC.prototype={
i:function(a){return"Throw of null."}}
P.aH.prototype={
gbG:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbF:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbG()+o+u
if(!q.a)return t
s=q.gbF()
r=P.df(q.b)
return t+s+": "+r}}
P.bS.prototype={
gbG:function(){return"RangeError"},
gbF:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.l(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.l(s)
else if(t>s)u=": Not in range "+H.l(s)+".."+H.l(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.l(s)}return u}}
P.fK.prototype={
gbG:function(){return"RangeError"},
gbF:function(){var u,t=H.ad(this.b)
if(typeof t!=="number")return t.aE()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.l(u)},
gk:function(a){return this.f}}
P.ig.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.id.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hJ.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ff.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.df(u)+"."}}
P.hk.prototype={
i:function(a){return"Out of Memory"},
$ibq:1}
P.dM.prototype={
i:function(a){return"Stack Overflow"},
$ibq:1}
P.fl.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ee.prototype={
i:function(a){return"Exception: "+this.a}}
P.fF.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.j.cM(s,0,75)+"...":s
return t+"\n"+r}}
P.A.prototype={}
P.e.prototype={
gk:function(a){var u,t=this.gW(this)
for(u=0;t.w();)++u
return u},
E:function(a,b){var u,t,s
P.kj(b,"index")
for(u=this.gW(this),t=0;u.w();){s=u.gJ(u)
if(b===t)return s;++t}throw H.j(P.W(b,this,"index",null,t))},
i:function(a){return P.ls(this,"(",")")}}
P.aO.prototype={}
P.b.prototype={$ie:1}
P.Q.prototype={}
P.L.prototype={
gH:function(a){return P.R.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.R.prototype={constructor:P.R,$iR:1,
q:function(a,b){return this===b},
gH:function(a){return H.cs(this)},
i:function(a){return"Instance of '"+H.bR(this)+"'"},
toString:function(){return this.i(this)}}
P.ao.prototype={}
P.o.prototype={$ikc:1}
P.be.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.r.prototype={}
W.eZ.prototype={
gk:function(a){return a.length}}
W.f0.prototype={
i:function(a){return String(a)}}
W.f1.prototype={
i:function(a){return String(a)}}
W.d2.prototype={}
W.bL.prototype={
cE:function(a,b,c){if(c!=null)return a.getContext(b,P.mj(c))
return a.getContext(b)},
ef:function(a,b){return this.cE(a,b,null)},
$ibL:1}
W.c9.prototype={$ic9:1}
W.bm.prototype={
gk:function(a){return a.length}}
W.ce.prototype={$ice:1}
W.fh.prototype={
gk:function(a){return a.length}}
W.T.prototype={$iT:1}
W.cf.prototype={
gk:function(a){return a.length}}
W.fi.prototype={}
W.aK.prototype={}
W.aL.prototype={}
W.fj.prototype={
gk:function(a){return a.length}}
W.fk.prototype={
gk:function(a){return a.length}}
W.fm.prototype={
gk:function(a){return a.length}}
W.db.prototype={$idb:1}
W.fo.prototype={
i:function(a){return String(a)}}
W.dc.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iI:1,
$aI:function(){return[[P.am,P.aa]]},
$aw:function(){return[[P.am,P.aa]]},
$ie:1,
$ae:function(){return[[P.am,P.aa]]},
$ib:1,
$ab:function(){return[[P.am,P.aa]]},
$aB:function(){return[[P.am,P.aa]]}}
W.dd.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gak(a))+" x "+H.l(this.gah(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.Z(b)
if(!u.$iam)return!1
return a.left===u.gbx(b)&&a.top===u.gbA(b)&&this.gak(a)===u.gak(b)&&this.gah(a)===u.gah(b)},
gH:function(a){return W.kD(C.i.gH(a.left),C.i.gH(a.top),C.i.gH(this.gak(a)),C.i.gH(this.gah(a)))},
gdq:function(a){return a.bottom},
gah:function(a){return a.height},
gbx:function(a){return a.left},
gbz:function(a){return a.right},
gbA:function(a){return a.top},
gak:function(a){return a.width},
$iam:1,
$aam:function(){return[P.aa]}}
W.fp.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iI:1,
$aI:function(){return[P.o]},
$aw:function(){return[P.o]},
$ie:1,
$ae:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$aB:function(){return[P.o]}}
W.fq.prototype={
gk:function(a){return a.length}}
W.iE.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.k(u[b],"$ia5")},
h:function(a,b){this.a.appendChild(b)
return b},
gW:function(a){var u=this.iZ(this)
return new J.al(u,u.length,[H.y(u,0)])},
$aw:function(){return[W.a5]},
$ae:function(){return[W.a5]},
$ab:function(){return[W.a5]}}
W.a5.prototype={
gdr:function(a){return new W.iE(a,a.children)},
gds:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.aE()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aE()
if(r<0)r=-r*0
return new P.am(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
$ia5:1}
W.m.prototype={$im:1}
W.f.prototype={
ig:function(a,b,c,d){H.n(c,{func:1,args:[W.m]})
if(c!=null)this.eH(a,b,c,!1)},
eH:function(a,b,c,d){return a.addEventListener(b,H.c_(H.n(c,{func:1,args:[W.m]}),1),!1)},
$if:1}
W.aM.prototype={$iaM:1}
W.fz.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aM]},
$aw:function(){return[W.aM]},
$ie:1,
$ae:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aB:function(){return[W.aM]}}
W.fA.prototype={
gk:function(a){return a.length}}
W.fE.prototype={
gk:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.fI.prototype={
gk:function(a){return a.length}}
W.bO.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.J]},
$aw:function(){return[W.J]},
$ie:1,
$ae:function(){return[W.J]},
$ib:1,
$ab:function(){return[W.J]},
$ibO:1,
$aB:function(){return[W.J]}}
W.bs.prototype={$ibs:1,
gdv:function(a){return a.data}}
W.cj.prototype={$icj:1}
W.aR.prototype={$iaR:1}
W.fT.prototype={
i:function(a){return String(a)}}
W.h4.prototype={
gk:function(a){return a.length}}
W.h5.prototype={
j:function(a,b){return P.bh(a.get(H.U(b)))},
R:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bh(t.value[1]))}},
gaz:function(a){var u=H.c([],[P.o])
this.R(a,new W.h6(u))
return u},
gk:function(a){return a.size},
$aaf:function(){return[P.o,null]},
$iQ:1,
$aQ:function(){return[P.o,null]}}
W.h6.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.h7.prototype={
j:function(a,b){return P.bh(a.get(H.U(b)))},
R:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bh(t.value[1]))}},
gaz:function(a){var u=H.c([],[P.o])
this.R(a,new W.h8(u))
return u},
gk:function(a){return a.size},
$aaf:function(){return[P.o,null]},
$iQ:1,
$aQ:function(){return[P.o,null]}}
W.h8.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aU.prototype={$iaU:1}
W.h9.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aU]},
$aw:function(){return[W.aU]},
$ie:1,
$ae:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aB:function(){return[W.aU]}}
W.ac.prototype={$iac:1}
W.iD.prototype={
gW:function(a){var u=this.a.childNodes
return new W.dg(u,u.length,[H.cY(C.N,u,"B",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$aw:function(){return[W.J]},
$ae:function(){return[W.J]},
$ab:function(){return[W.J]}}
W.J.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.ej(a):u},
$iJ:1}
W.cq.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.J]},
$aw:function(){return[W.J]},
$ie:1,
$ae:function(){return[W.J]},
$ib:1,
$ab:function(){return[W.J]},
$aB:function(){return[W.J]}}
W.aW.prototype={$iaW:1,
gk:function(a){return a.length}}
W.hm.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aW]},
$aw:function(){return[W.aW]},
$ie:1,
$ae:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aB:function(){return[W.aW]}}
W.hv.prototype={
j:function(a,b){return P.bh(a.get(H.U(b)))},
R:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bh(t.value[1]))}},
gaz:function(a){var u=H.c([],[P.o])
this.R(a,new W.hw(u))
return u},
gk:function(a){return a.size},
$aaf:function(){return[P.o,null]},
$iQ:1,
$aQ:function(){return[P.o,null]}}
W.hw.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hy.prototype={
gk:function(a){return a.length}}
W.aY.prototype={$iaY:1}
W.hG.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aY]},
$aw:function(){return[W.aY]},
$ie:1,
$ae:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aB:function(){return[W.aY]}}
W.aZ.prototype={$iaZ:1}
W.hH.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aZ]},
$aw:function(){return[W.aZ]},
$ie:1,
$ae:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aB:function(){return[W.aZ]}}
W.b_.prototype={$ib_:1,
gk:function(a){return a.length}}
W.hL.prototype={
j:function(a,b){return a.getItem(H.U(b))},
R:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.o,P.o]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaz:function(a){var u=H.c([],[P.o])
this.R(a,new W.hM(u))
return u},
gk:function(a){return a.length},
$aaf:function(){return[P.o,P.o]},
$iQ:1,
$aQ:function(){return[P.o,P.o]}}
W.hM.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:25}
W.aA.prototype={$iaA:1}
W.b0.prototype={$ib0:1}
W.aB.prototype={$iaB:1}
W.hT.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aB]},
$aw:function(){return[W.aB]},
$ie:1,
$ae:function(){return[W.aB]},
$ib:1,
$ab:function(){return[W.aB]},
$aB:function(){return[W.aB]}}
W.hU.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b0]},
$aw:function(){return[W.b0]},
$ie:1,
$ae:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aB:function(){return[W.b0]}}
W.hZ.prototype={
gk:function(a){return a.length}}
W.b2.prototype={$ib2:1}
W.aD.prototype={$iaD:1}
W.i1.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b2]},
$aw:function(){return[W.b2]},
$ie:1,
$ae:function(){return[W.b2]},
$ib:1,
$ab:function(){return[W.b2]},
$aB:function(){return[W.b2]}}
W.i2.prototype={
gk:function(a){return a.length}}
W.bB.prototype={}
W.ih.prototype={
i:function(a){return String(a)}}
W.iv.prototype={
gk:function(a){return a.length}}
W.b4.prototype={
gir:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.j(P.as("deltaY is not supported"))},
giq:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.j(P.as("deltaX is not supported"))},
$ib4:1}
W.cJ.prototype={
hl:function(a,b){return a.requestAnimationFrame(H.c_(H.n(b,{func:1,ret:-1,args:[P.aa]}),1))},
eX:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iF.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.T]},
$aw:function(){return[W.T]},
$ie:1,
$ae:function(){return[W.T]},
$ib:1,
$ab:function(){return[W.T]},
$aB:function(){return[W.T]}}
W.e9.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.Z(b)
if(!u.$iam)return!1
return a.left===u.gbx(b)&&a.top===u.gbA(b)&&a.width===u.gak(b)&&a.height===u.gah(b)},
gH:function(a){return W.kD(C.i.gH(a.left),C.i.gH(a.top),C.i.gH(a.width),C.i.gH(a.height))},
gah:function(a){return a.height},
gak:function(a){return a.width}}
W.iS.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aN]},
$aw:function(){return[W.aN]},
$ie:1,
$ae:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aB:function(){return[W.aN]}}
W.eq.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.J]},
$aw:function(){return[W.J]},
$ie:1,
$ae:function(){return[W.J]},
$ib:1,
$ab:function(){return[W.J]},
$aB:function(){return[W.J]}}
W.j2.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b_]},
$aw:function(){return[W.b_]},
$ie:1,
$ae:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aB:function(){return[W.b_]}}
W.j3.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aA]},
$aw:function(){return[W.aA]},
$ie:1,
$ae:function(){return[W.aA]},
$ib:1,
$ab:function(){return[W.aA]},
$aB:function(){return[W.aA]}}
W.iG.prototype={}
W.jG.prototype={}
W.iH.prototype={}
W.iI.prototype={
$1:function(a){return this.a.$1(H.k(a,"$im"))},
$S:30}
W.B.prototype={
gW:function(a){return new W.dg(a,this.gk(a),[H.cY(this,a,"B",0)])}}
W.dg.prototype={
w:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sd6(J.lf(u.a,t))
u.c=t
return!0}u.sd6(null)
u.c=s
return!1},
gJ:function(a){return this.d},
sd6:function(a){this.d=H.D(a,H.y(this,0))},
$iaO:1}
W.e8.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.er.prototype={}
W.es.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.cQ.prototype={}
W.cR.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eD.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
P.eN.prototype={$ibs:1,
gdv:function(a){return this.a}}
P.jd.prototype={
$2:function(a,b){this.a[a]=b},
$S:13}
P.fB.prototype={
gbJ:function(){var u=this.b,t=H.az(u,"w",0),s=W.a5
return new H.fX(new H.iw(u,H.n(new P.fC(),{func:1,ret:P.a_,args:[t]}),[t]),H.n(new P.fD(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.c6(this.gbJ().a)},
j:function(a,b){var u=this.gbJ()
return u.b.$1(J.jY(u.a,b))},
gW:function(a){var u=P.k6(this.gbJ(),!1,W.a5)
return new J.al(u,u.length,[H.y(u,0)])},
$aw:function(){return[W.a5]},
$ae:function(){return[W.a5]},
$ab:function(){return[W.a5]}}
P.fC.prototype={
$1:function(a){return!!J.Z(H.k(a,"$iJ")).$ia5},
$S:26}
P.fD.prototype={
$1:function(a){return H.d(H.k(a,"$iJ"),"$ia5")},
$S:27}
P.iX.prototype={
gbz:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.E(t)
return H.D(u+t,H.y(this,0))},
gdq:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.E(t)
return H.D(u+t,H.y(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.l(u.a)+", "+H.l(u.b)+") "+H.l(u.c)+" x "+H.l(u.d)},
q:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.Z(b)
if(!!u.$iam){t=p.a
if(t==u.gbx(b)){s=p.b
if(s==u.gbA(b)){r=p.c
if(typeof t!=="number")return t.F()
if(typeof r!=="number")return H.E(r)
q=H.y(p,0)
if(H.D(t+r,q)===u.gbz(b)){t=p.d
if(typeof s!=="number")return s.F()
if(typeof t!=="number")return H.E(t)
u=H.D(s+t,q)===u.gdq(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u,t=this,s=t.a,r=J.bI(s),q=t.b,p=J.bI(q),o=t.c
if(typeof s!=="number")return s.F()
if(typeof o!=="number")return H.E(o)
u=H.y(t,0)
o=C.f.gH(H.D(s+o,u))
s=t.d
if(typeof q!=="number")return q.F()
if(typeof s!=="number")return H.E(s)
u=C.f.gH(H.D(q+s,u))
return P.m2(P.iU(P.iU(P.iU(P.iU(0,r),p),o),u))}}
P.am.prototype={
gbx:function(a){return this.a},
gbA:function(a){return this.b},
gak:function(a){return this.c},
gah:function(a){return this.d}}
P.b6.prototype={$ib6:1}
P.fP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.W(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$aw:function(){return[P.b6]},
$ie:1,
$ae:function(){return[P.b6]},
$ib:1,
$ab:function(){return[P.b6]},
$aB:function(){return[P.b6]}}
P.bb.prototype={$ibb:1}
P.hi.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.W(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bb]},
$ie:1,
$ae:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$aB:function(){return[P.bb]}}
P.ho.prototype={
gk:function(a){return a.length}}
P.hR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.W(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$aw:function(){return[P.o]},
$ie:1,
$ae:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$aB:function(){return[P.o]}}
P.p.prototype={
gdr:function(a){return new P.fB(a,new W.iD(a))}}
P.bg.prototype={$ibg:1}
P.i3.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.W(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bg]},
$ie:1,
$ae:function(){return[P.bg]},
$ib:1,
$ab:function(){return[P.bg]},
$aB:function(){return[P.bg]}}
P.ej.prototype={}
P.ek.prototype={}
P.et.prototype={}
P.eu.prototype={}
P.eE.prototype={}
P.eF.prototype={}
P.eL.prototype={}
P.eM.prototype={}
P.f4.prototype={
gk:function(a){return a.length}}
P.f5.prototype={
j:function(a,b){return P.bh(a.get(H.U(b)))},
R:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bh(t.value[1]))}},
gaz:function(a){var u=H.c([],[P.o])
this.R(a,new P.f6(u))
return u},
gk:function(a){return a.size},
$aaf:function(){return[P.o,null]},
$iQ:1,
$aQ:function(){return[P.o,null]}}
P.f6.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.f7.prototype={
gk:function(a){return a.length}}
P.bJ.prototype={}
P.hj.prototype={
gk:function(a){return a.length}}
P.e7.prototype={}
P.d3.prototype={$id3:1}
P.dh.prototype={$idh:1}
P.dF.prototype={$idF:1}
P.dG.prototype={$idG:1}
P.bT.prototype={
e8:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.Z(g)
if(!!u.$ibs&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.mk(g))
return}if(!!u.$icj&&h==null&&t&&!0){this.hE(a,b,c,d,e,f,g)
return}throw H.j(P.li("Incorrect number or type of arguments"))},
iW:function(a,b,c,d,e,f,g){return this.e8(a,b,c,d,e,f,g,null,null,null)},
hE:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
D:function(a,b,c){return a.uniform1f(b,c)},
X:function(a,b,c){return a.uniform1i(b,c)},
b9:function(a,b,c,d){return a.uniform2f(b,c,d)},
p:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eb:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
ec:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cC:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibT:1}
P.dH.prototype={$idH:1}
P.dN.prototype={$idN:1}
P.dX.prototype={$idX:1}
P.hI.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.W(b,a,null,null,null))
return P.bh(a.item(b))},
E:function(a,b){return this.j(a,b)},
$aw:function(){return[[P.Q,,,]]},
$ie:1,
$ae:function(){return[[P.Q,,,]]},
$ib:1,
$ab:function(){return[[P.Q,,,]]},
$aB:function(){return[[P.Q,,,]]}}
P.eA.prototype={}
P.eB.prototype={}
O.V.prototype={
ba:function(a){var u=this
u.sfb(H.c([],[a]))
u.sdc(null)
u.sd8(null)
u.sdd(null)},
cF:function(a,b,c){var u=this,t=H.az(u,"V",0)
H.n(b,{func:1,ret:P.a_,args:[[P.e,t]]})
t={func:1,ret:-1,args:[P.A,[P.e,t]]}
H.n(a,t)
H.n(c,t)
u.sdc(b)
u.sd8(a)
u.sdd(c)},
aF:function(a,b){return this.cF(a,null,b)},
bd:function(a){var u
H.i(a,"$ie",[H.az(this,"V",0)],"$ae")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cP:function(a,b){var u
H.i(b,"$ie",[H.az(this,"V",0)],"$ae")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gW:function(a){var u=this.a
return new J.al(u,u.length,[H.y(u,0)])},
E:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.az(s,"V",0)
H.D(b,r)
r=[r]
if(H.z(s.bd(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cP(t,H.c([b],r))}},
c_:function(a,b){var u,t,s=this
H.i(b,"$ie",[H.az(s,"V",0)],"$ae")
if(H.z(s.bd(b))){u=s.a
t=u.length
C.a.c_(u,b)
s.cP(t,b)}},
sfb:function(a){this.a=H.i(a,"$ib",[H.az(this,"V",0)],"$ab")},
sdc:function(a){this.b=H.n(a,{func:1,ret:P.a_,args:[[P.e,H.az(this,"V",0)]]})},
sd8:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.A,[P.e,H.az(this,"V",0)]]})},
sdd:function(a){H.n(a,{func:1,ret:-1,args:[P.A,[P.e,H.az(this,"V",0)]]})},
$ie:1}
O.cm.prototype={
gk:function(a){return this.a.length},
gl:function(){var u=this.b
return u==null?this.b=D.F():u},
aG:function(){var u=this.b
if(u!=null)u.v(null)},
gS:function(a){var u=this.a
if(u.length>0)return C.a.gcp(u)
else return V.bx()},
by:function(a){var u=this.a
if(a==null)C.a.h(u,V.bx())
else C.a.h(u,a)
this.aG()},
aB:function(){var u=this.a
if(u.length>0){u.pop()
this.aG()}},
sbK:function(a){this.a=H.i(a,"$ib",[V.a1],"$ab")}}
E.f9.prototype={}
E.aj.prototype={
scH:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gl().N(0,s.ge3())
u=s.c
if(u!=null)u.gl().h(0,s.ge3())
t=new D.v("shape",r,s.c,[F.dI])
t.b=!0
s.aA(t)}},
sdZ:function(a){var u,t,s=this
if(!J.P(s.r,a)){u=s.r
if(u!=null)u.gl().N(0,s.ge1())
if(a!=null)a.gl().h(0,s.ge1())
s.r=a
t=new D.v("mover",u,a,[U.a8])
t.b=!0
s.aA(t)}},
a5:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.P(q,s.x)){u=s.x
s.x=q
t=new D.v("matrix",u,q,[V.a1])
t.b=!0
s.aA(t)}for(r=s.y.a,r=new J.al(r,r.length,[H.y(r,0)]);r.w();)r.d.a5(0,b)},
Y:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gS(s))
else C.a.h(s.a,r.t(0,s.gS(s)))
s.aG()
a.cw(t.f)
s=a.dy
u=(s&&C.a).gcp(s)
if(u!=null&&t.d!=null)u.b4(a,t)
for(s=t.y.a,s=new J.al(s,s.length,[H.y(s,0)]);s.w();)s.d.Y(a)
a.cv()
a.dx.aB()},
gl:function(){var u=this.z
return u==null?this.z=D.F():u},
aA:function(a){var u=this.z
if(u!=null)u.v(a)},
a9:function(){return this.aA(null)},
e4:function(a){H.k(a,"$iu")
this.e=null
this.aA(a)},
iI:function(){return this.e4(null)},
e2:function(a){this.aA(H.k(a,"$iu"))},
iH:function(){return this.e2(null)},
e0:function(a){this.aA(H.k(a,"$iu"))},
iE:function(){return this.e0(null)},
iD:function(a,b){var u,t,s,r,q,p,o
H.i(b,"$ie",[E.aj],"$ae")
for(u=b.length,t=this.ge_(),s={func:1,ret:-1,args:[D.u]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.br()
o.saa(null)
o.saL(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.saa(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a9()},
iG:function(a,b){var u,t
H.i(b,"$ie",[E.aj],"$ae")
for(u=b.gW(b),t=this.ge_();u.w();)u.gJ(u).gl().N(0,t)
this.a9()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
ses:function(a,b){this.y=H.i(b,"$iV",[E.aj],"$aV")},
$iaV:1}
E.hr.prototype={
eo:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.av(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cm()
t=[V.a1]
u.sbK(H.c([],t))
u.b=null
u.gl().h(0,new E.hs(s))
s.cy=u
u=new O.cm()
u.sbK(H.c([],t))
u.b=null
u.gl().h(0,new E.ht(s))
s.db=u
u=new O.cm()
u.sbK(H.c([],t))
u.b=null
u.gl().h(0,new E.hu(s))
s.dx=u
s.shD(H.c([],[O.bA]))
u=s.dy;(u&&C.a).h(u,null)
s.shx(new H.aQ([P.o,A.cv]))},
giQ:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gS(s)
u=t.db
u=t.z=s.t(0,u.gS(u))
s=u}return s},
ge5:function(){var u,t=this,s=t.ch
if(s==null){s=t.giQ()
u=t.dx
u=t.ch=s.t(0,u.gS(u))
s=u}return s},
ged:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.gS(s)
u=t.dx
u=t.cx=s.t(0,u.gS(u))
s=u}return s},
cw:function(a){var u=this.dy,t=a==null?(u&&C.a).gcp(u):a;(u&&C.a).h(u,t)},
cv:function(){var u=this.dy
if(u.length>1)u.pop()},
aV:function(a){var u=a.b
if(u.length===0)throw H.j(P.q("May not cache a shader with no name."))
if(this.fr.du(0,u))throw H.j(P.q('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.a6(0,u,a)},
shD:function(a){this.dy=H.i(a,"$ib",[O.bA],"$ab")},
shx:function(a){this.fr=H.i(a,"$iQ",[P.o,A.cv],"$aQ")}}
E.hs.prototype={
$1:function(a){var u
H.k(a,"$iu")
u=this.a
u.ch=u.z=null},
$S:9}
E.ht.prototype={
$1:function(a){var u
H.k(a,"$iu")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:9}
E.hu.prototype={
$1:function(a){var u
H.k(a,"$iu")
u=this.a
u.cx=u.ch=null},
$S:9}
E.dT.prototype={
cS:function(a){H.k(a,"$iu")
this.e6()},
cR:function(){return this.cS(null)},
giu:function(){var u,t=this,s=Date.now(),r=C.f.a3(P.k2(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.av(s,!1)
return u/r},
dg:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.t()
if(typeof r!=="number")return H.E(r)
u=C.i.cm(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.t()
t=C.i.cm(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kq(C.o,s.giS())}},
e6:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.hY(this),{func:1,ret:-1,args:[P.aa]})
C.x.eX(u)
C.x.hl(u,W.kK(t,P.aa))}},
iR:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dg()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.av(r,!1)
s.y=P.k2(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aG()
r=s.db
C.a.sk(r.a,0)
r.aG()
r=s.dx
C.a.sk(r.a,0)
r.aG()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.Y(p.e)}}catch(q){u=H.bH(q)
t=H.c1(q)
P.jV("Error: "+H.l(u))
P.jV("Stack: "+H.l(t))
throw H.j(u)}}}
E.hY.prototype={
$1:function(a){var u
H.mB(a)
u=this.a
if(u.ch){u.ch=!1
u.iR()}},
$S:38}
Z.e5.prototype={$imL:1}
Z.d4.prototype={
G:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.bH(s)
t=P.q('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.l(u))
throw H.j(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.l(u.e)+"]"}}
Z.bD.prototype={$imM:1}
Z.aI.prototype={
ad:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
G:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].G(a)},
a4:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
Y:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.h(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.o],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.au(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.A(p,", ")+"\nAttrs:   "+C.a.A(r,", ")},
sf6:function(a){this.b=H.i(a,"$ib",[Z.bt],"$ab")},
$imS:1}
Z.bt.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bR(this.c)+"'")+"]"}}
Z.aF.prototype={
gcI:function(a){var u=this.a,t=(u&$.ae().a)!==0?3:0
if((u&$.bk().a)!==0)t+=3
if((u&$.bj().a)!==0)t+=3
if((u&$.aG().a)!==0)t+=2
if((u&$.bl().a)!==0)t+=3
if((u&$.d_().a)!==0)t+=3
if((u&$.d0().a)!==0)t+=4
if((u&$.c4().a)!==0)++t
return(u&$.bi().a)!==0?t+4:t},
ij:function(a){var u,t=$.ae(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aG()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d_()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d0()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c4()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bi()
if((s&t.a)!==0)if(u===a)return t
return $.ld()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aF))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.o]),t=this.a
if((t&$.ae().a)!==0)C.a.h(u,"Pos")
if((t&$.bk().a)!==0)C.a.h(u,"Norm")
if((t&$.bj().a)!==0)C.a.h(u,"Binm")
if((t&$.aG().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bl().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d_().a)!==0)C.a.h(u,"Clr3")
if((t&$.d0().a)!==0)C.a.h(u,"Clr4")
if((t&$.c4().a)!==0)C.a.h(u,"Weight")
if((t&$.bi().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.A(u,"|")}}
D.fc.prototype={}
D.br.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.u]}
H.n(b,u)
if(this.a==null)this.saa(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
N:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.u]})
u=s.a
u=u==null?null:C.a.al(u,b)
if(u===!0){u=s.a
t=(u&&C.a).N(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.al(u,b)
if(u===!0){u=s.b
t=(u&&C.a).N(u,b)||t}return t},
v:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.u()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.R(P.k6(u,!0,{func:1,ret:-1,args:[D.u]}),new D.fx(q))
u=r.b
if(u!=null){r.saL(H.c([],[{func:1,ret:-1,args:[D.u]}]))
C.a.R(u,new D.fy(q))}return!0},
ce:function(){return this.v(null)},
aC:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.v(u)}}},
saa:function(a){this.a=H.i(a,"$ib",[{func:1,ret:-1,args:[D.u]}],"$ab")},
saL:function(a){this.b=H.i(a,"$ib",[{func:1,ret:-1,args:[D.u]}],"$ab")}}
D.fx.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.u]})
u=this.a.a
u.b
a.$1(u)},
$S:17}
D.fy.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.u]})
u=this.a.a
u.b
a.$1(u)},
$S:17}
D.u.prototype={}
D.bu.prototype={}
D.bv.prototype={}
D.v.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.d5.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d5))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.dr.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dr))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.fO.prototype={
iN:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
iJ:function(a){this.c=a.b
this.d.N(0,a.a)
return!1},
shh:function(a){this.d=H.i(a,"$ikl",[P.A],"$akl")}}
X.dv.prototype={}
X.fU.prototype={
aT:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.t()
u=b.b
t=q.ch
if(typeof u!=="number")return u.t()
s=new V.a7(o.a+n*m,o.b+u*t)
t=q.a.gaO()
r=new X.b9(a,V.bc(),q.x,t,s)
r.b=!0
q.z=new P.av(p,!1)
q.x=s
return r},
cu:function(a,b){this.r=a.a
return!1},
b2:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eh()
if(typeof u!=="number")return u.ee()
this.r=(u&~t)>>>0
return!1},
b1:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.aT(a,b))
return!0},
iO:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaO()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.t()
q=a.b
p=o.cy
if(typeof q!=="number")return q.t()
t=new X.cn(new V.N(s*r,q*p),u,t)
t.b=!0
n.v(t)
return!0},
fQ:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dv(c,r.a.gaO(),b)
s.b=!0
t.v(s)
r.y=new P.av(u,!1)
r.x=V.bc()}}
X.ar.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ar))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.z(this.b)?"Alt+":""
return u+(H.z(this.c)?"Shift+":"")}}
X.b9.prototype={}
X.ha.prototype={
bH:function(a,b,c){var u=this,t=new P.av(Date.now(),!1),s=u.a.gaO(),r=new X.b9(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cu:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.v(this.bH(a,b,!0))
return!0},
b2:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eh()
if(typeof t!=="number")return t.ee()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.v(u.bH(a,b,!0))
return!0},
b1:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.bH(a,b,!1))
return!0},
iP:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaO()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.t()
r=a.b
q=p.ch
if(typeof r!=="number")return r.t()
u=new X.cn(new V.N(t*s,r*q),u,b)
u.b=!0
o.v(u)
return!0},
gdw:function(){var u=this.b
return u==null?this.b=D.F():u},
gbB:function(){var u=this.c
return u==null?this.c=D.F():u},
gdY:function(){var u=this.d
return u==null?this.d=D.F():u}}
X.cn.prototype={}
X.hn.prototype={}
X.dV.prototype={}
X.i0.prototype={
aT:function(a,b){var u,t,s,r,q=this
H.i(a,"$ib",[V.a7],"$ab")
u=new P.av(Date.now(),!1)
t=a.length>0?a[0]:V.bc()
s=q.a.gaO()
r=new X.dV(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
iM:function(a){var u
H.i(a,"$ib",[V.a7],"$ab")
u=this.b
if(u==null)return!1
u.v(this.aT(a,!0))
return!0},
iK:function(a){var u
H.i(a,"$ib",[V.a7],"$ab")
u=this.c
if(u==null)return!1
u.v(this.aT(a,!0))
return!0},
iL:function(a){var u
H.i(a,"$ib",[V.a7],"$ab")
u=this.d
if(u==null)return!1
u.v(this.aT(a,!1))
return!0}}
X.e0.prototype={
gaO:function(){var u=this.a,t=C.l.gds(u).c
t.toString
u=C.l.gds(u).d
u.toString
return V.ct(0,0,t,u)},
d2:function(a){var u=a.keyCode,t=H.z(a.ctrlKey)||H.z(a.metaKey)
return new X.dr(u,new X.ar(t,a.altKey,a.shiftKey))},
aM:function(a){var u=this.b,t=H.z(a.ctrlKey)||H.z(a.metaKey)
u.c=new X.ar(t,a.altKey,a.shiftKey)},
bZ:function(a){var u=this.b,t=H.z(a.ctrlKey)||H.z(a.metaKey)
u.c=new X.ar(t,a.altKey,a.shiftKey)},
ax:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.I()
u=t.top
if(typeof r!=="number")return r.I()
return new V.a7(s-q,r-u)},
aU:function(a){return new V.N(a.movementX,a.movementY)},
bV:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a7])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
q=C.i.Z(r.pageX)
C.i.Z(r.pageY)
p=o.left
C.i.Z(r.pageX)
C.a.h(n,new V.a7(q-p,C.i.Z(r.pageY)-o.top))}return n},
au:function(a){var u=a.buttons,t=H.z(a.ctrlKey)||H.z(a.metaKey)
return new X.d5(u,new X.ar(t,a.altKey,a.shiftKey))},
bL:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.I()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.I()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fK:function(a){this.f=!0},
fs:function(a){this.f=!1},
fA:function(a){H.k(a,"$iac")
if(H.z(this.f)&&this.bL(a))a.preventDefault()},
fO:function(a){var u
H.k(a,"$iaR")
if(!H.z(this.f))return
u=this.d2(a)
this.b.iN(u)},
fM:function(a){var u
H.k(a,"$iaR")
if(!H.z(this.f))return
u=this.d2(a)
this.b.iJ(u)},
fS:function(a){var u,t,s,r,q=this
H.k(a,"$iac")
u=q.a
u.focus()
q.f=!0
q.aM(a)
if(H.z(q.x)){t=q.au(a)
s=q.aU(a)
if(q.d.cu(t,s))a.preventDefault()
return}if(H.z(q.r)){q.y=a
u.requestPointerLock()
return}t=q.au(a)
r=q.ax(a)
if(q.c.cu(t,r))a.preventDefault()},
fW:function(a){var u,t,s,r=this
H.k(a,"$iac")
r.aM(a)
u=r.au(a)
if(H.z(r.x)){t=r.aU(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.ax(a)
if(r.c.b2(u,s))a.preventDefault()},
fE:function(a){var u,t,s,r=this
H.k(a,"$iac")
if(!r.bL(a)){r.aM(a)
u=r.au(a)
if(H.z(r.x)){t=r.aU(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.ax(a)
if(r.c.b2(u,s))a.preventDefault()}},
fU:function(a){var u,t,s,r=this
H.k(a,"$iac")
r.aM(a)
u=r.au(a)
if(H.z(r.x)){t=r.aU(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.ax(a)
if(r.c.b1(u,s))a.preventDefault()},
fC:function(a){var u,t,s,r=this
H.k(a,"$iac")
if(!r.bL(a)){r.aM(a)
u=r.au(a)
if(H.z(r.x)){t=r.aU(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.ax(a)
if(r.c.b1(u,s))a.preventDefault()}},
fY:function(a){var u,t,s=this
H.k(a,"$ib4")
s.aM(a)
u=new V.N((a&&C.w).giq(a),C.w.gir(a)).u(0,180)
if(H.z(s.x)){if(s.d.iO(u))a.preventDefault()
return}if(H.z(s.r))return
t=s.ax(a)
if(s.c.iP(u,t))a.preventDefault()},
h_:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.au(s.y)
t=s.ax(s.y)
s.d.fQ(u,t,r)}},
hf:function(a){var u,t=this
H.k(a,"$iaD")
t.a.focus()
t.f=!0
t.bZ(a)
u=t.bV(a)
if(t.e.iM(u))a.preventDefault()},
hb:function(a){var u
H.k(a,"$iaD")
this.bZ(a)
u=this.bV(a)
if(this.e.iK(u))a.preventDefault()},
hd:function(a){var u
H.k(a,"$iaD")
this.bZ(a)
u=this.bV(a)
if(this.e.iL(u))a.preventDefault()},
seZ:function(a){this.z=H.i(a,"$ib",[[P.cx,P.R]],"$ab")}}
D.bo.prototype={
gl:function(){var u=this.d
return u==null?this.d=D.F():u},
as:function(a){var u
H.k(a,"$iu")
u=this.d
if(u!=null)u.v(a)},
ev:function(){return this.as(null)},
$ia0:1,
$iaV:1}
D.a0.prototype={$iaV:1}
D.ds.prototype={
gl:function(){var u=this.Q
return u==null?this.Q=D.F():u},
as:function(a){var u=this.Q
if(u!=null)u.v(a)},
da:function(a){var u
H.k(a,"$iu")
u=this.ch
if(u!=null)u.v(a)},
fP:function(){return this.da(null)},
h1:function(a){var u,t,s
H.i(a,"$ie",[D.a0],"$ae")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t){s=a[t]
if(s==null||this.eQ(s))return!1}return!0},
fl:function(a,b){var u,t,s,r,q,p,o,n=D.a0
H.i(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gd9(),s={func:1,ret:-1,args:[D.u]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=H.k(b[q],"$ia0")
if(p instanceof D.bo)C.a.h(this.e,p)
o=p.d
if(o==null){o=new D.br()
o.saa(null)
o.saL(null)
o.c=null
o.d=0
p.d=o}H.n(t,s)
if(o.a==null)o.saa(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bu([n])
n.b=!0
this.as(n)},
h5:function(a,b){var u,t,s,r=D.a0
H.i(b,"$ie",[r],"$ae")
for(u=b.gW(b),t=this.gd9();u.w();){s=u.gJ(u)
C.a.N(this.e,s)
s.gl().N(0,t)}r=new D.bv([r])
r.b=!0
this.as(r)},
eQ:function(a){var u=C.a.al(this.e,a)
return u},
seW:function(a){this.e=H.i(a,"$ib",[D.bo],"$ab")},
shg:function(a){this.f=H.i(a,"$ib",[D.dE],"$ab")},
shz:function(a){this.r=H.i(a,"$ib",[D.dL],"$ab")},
shN:function(a){this.x=H.i(a,"$ib",[D.dQ],"$ab")},
shO:function(a){this.y=H.i(a,"$ib",[D.dR],"$ab")},
shP:function(a){this.z=H.i(a,"$ib",[D.dS],"$ab")},
$ae:function(){return[D.a0]},
$aV:function(){return[D.a0]}}
D.dE.prototype={$ia0:1,$iaV:1}
D.dL.prototype={$ia0:1,$iaV:1}
D.dQ.prototype={$ia0:1,$iaV:1}
D.dR.prototype={$ia0:1,$iaV:1}
D.dS.prototype={$ia0:1,$iaV:1}
V.Y.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}
V.ab.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ab))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.M(u.a,3,0)+", "+V.M(u.b,3,0)+", "+V.M(u.c,3,0)+", "+V.M(u.d,3,0)+"]"}}
V.fw.prototype={}
V.bP.prototype={
a1:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.x])
return t},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bP))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
if(!(Math.abs(b.e-s.e)<t))return!1
if(!(Math.abs(b.f-s.f)<t))return!1
if(!(Math.abs(b.r-s.r)<t))return!1
if(!(Math.abs(b.x-s.x)<t))return!1
if(!(Math.abs(b.y-s.y)<t))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.x],o=V.c0(H.c([q.a,q.d,q.r],p),3,0),n=V.c0(H.c([q.b,q.e,q.x],p),3,0),m=V.c0(H.c([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.h(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.h(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.h(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.h(o,1)
r=" "+o[1]+", "
if(1>=t)return H.h(n,1)
r=r+n[1]+", "
if(1>=s)return H.h(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.h(o,2)
p=" "+o[2]+", "
if(2>=t)return H.h(n,2)
p=p+n[2]+", "
if(2>=s)return H.h(m,2)
return r+(p+m[2]+"]")}}
V.a1.prototype={
a1:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.x])
return t},
co:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.H().a)return V.bx()
u=1/b1
t=-n
s=-a0
return V.aT((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
t:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aT(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
cB:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.O(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
b8:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.ak(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
if(!(Math.abs(b.e-s.e)<t))return!1
if(!(Math.abs(b.f-s.f)<t))return!1
if(!(Math.abs(b.r-s.r)<t))return!1
if(!(Math.abs(b.x-s.x)<t))return!1
if(!(Math.abs(b.y-s.y)<t))return!1
if(!(Math.abs(b.z-s.z)<t))return!1
if(!(Math.abs(b.Q-s.Q)<t))return!1
if(!(Math.abs(b.ch-s.ch)<t))return!1
if(!(Math.abs(b.cx-s.cx)<t))return!1
if(!(Math.abs(b.cy-s.cy)<t))return!1
if(!(Math.abs(b.db-s.db)<t))return!1
if(!(Math.abs(b.dx-s.dx)<t))return!1
return!0},
i:function(a){return this.K()},
B:function(a){var u,t,s,r,q,p=this,o=[P.x],n=V.c0(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.c0(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.c0(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.c0(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.h(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.h(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.h(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.h(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.h(n,1)
q=q+n[1]+", "
if(1>=t)return H.h(m,1)
q=q+m[1]+", "
if(1>=s)return H.h(l,1)
q=q+l[1]+", "
if(1>=r)return H.h(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.h(n,2)
u=u+n[2]+", "
if(2>=t)return H.h(m,2)
u=u+m[2]+", "
if(2>=s)return H.h(l,2)
u=u+l[2]+", "
if(2>=r)return H.h(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.h(n,3)
q=q+n[3]+", "
if(3>=t)return H.h(m,3)
q=q+m[3]+", "
if(3>=s)return H.h(l,3)
q=q+l[3]+", "
if(3>=r)return H.h(k,3)
return u+(q+k[3]+"]")},
K:function(){return this.B("")}}
V.a7.prototype={
I:function(a,b){return new V.a7(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}}
V.ak.prototype={
I:function(a,b){return new V.ak(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ak))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}
V.bd.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bd))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.M(u.a,3,0)+", "+V.M(u.b,3,0)+", "+V.M(u.c,3,0)+", "+V.M(u.d,3,0)+"]"}}
V.bz.prototype={
gaf:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bz))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.M(u.a,3,0)+", "+V.M(u.b,3,0)+", "+V.M(u.c,3,0)+", "+V.M(u.d,3,0)+"]"}}
V.N.prototype={
b0:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.E(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.E(t)
return s*r+u*t},
t:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.t()
u=this.b
if(typeof u!=="number")return u.t()
return new V.N(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.H().a){u=$.kw
return u==null?$.kw=new V.N(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.N(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=this.a
s=$.H()
s.toString
if(typeof u!=="number")return u.I()
if(typeof t!=="number")return H.E(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.I()
if(typeof t!=="number")return H.E(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}}
V.O.prototype={
b0:function(a){return Math.sqrt(this.C(this))},
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cq:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.O(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aY:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.O(u*t-s*r,s*q-p*t,p*r-u*q)},
F:function(a,b){return new V.O(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.O(-this.a,-this.b,-this.c)},
u:function(a,b){if(Math.abs(b-0)<$.H().a)return V.e4()
return new V.O(this.a/b,this.b/b,this.c/b)},
dU:function(){var u=$.H().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}
V.bC.prototype={
b0:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bC))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.M(u.a,3,0)+", "+V.M(u.b,3,0)+", "+V.M(u.c,3,0)+", "+V.M(u.d,3,0)+"]"}}
U.fe.prototype={
bD:function(a){var u=V.mK(a,this.c,this.b)
return u},
gl:function(){var u=this.y
return u==null?this.y=D.F():u},
M:function(a){var u=this.y
if(u!=null)u.v(a)},
scD:function(a,b){},
scr:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.H().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bD(u)}s=new D.v("maximumLocation",s,t.b,[P.x])
s.b=!0
t.M(s)}},
sct:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.H().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bD(u)}s=new D.v("minimumLocation",s,t.c,[P.x])
s.b=!0
t.M(s)}},
sae:function(a,b){var u,t=this
b=t.bD(b)
u=t.d
if(!(Math.abs(u-b)<$.H().a)){t.d=b
u=new D.v("location",u,b,[P.x])
u.b=!0
t.M(u)}},
scs:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.H().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.v("maximumVelocity",r,a,[P.x])
r.b=!0
s.M(r)}},
sU:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.H().a)){u.f=a
t=new D.v("velocity",t,a,[P.x])
t.b=!0
u.M(t)}},
scc:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.H().a)){this.x=a
u=new D.v("dampening",u,a,[P.x])
u.b=!0
this.M(u)}},
a5:function(a,b){var u,t,s,r=this,q=r.f,p=$.H().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sae(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.H().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sU(u)}}}
U.cd.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.F():u},
sS:function(a,b){var u,t,s,r=this
if(!J.P(r.a,b)){u=r.a
r.a=b
t=new D.v("matrix",u,b,[V.a1])
t.b=!0
s=r.b
if(s!=null)s.v(t)}},
aQ:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cd))return!1
return J.P(this.a,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")}}
U.ci.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.F():u},
M:function(a){var u
H.k(a,"$iu")
u=this.e
if(u!=null)u.v(a)},
ab:function(){return this.M(null)},
fj:function(a,b){var u,t,s,r,q,p,o,n=U.a8
H.i(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gaK(),s={func:1,ret:-1,args:[D.u]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.gl()
o.toString
H.n(t,s)
if(o.a==null)o.saa(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bu([n])
n.b=!0
this.M(n)},
h3:function(a,b){var u,t,s=U.a8
H.i(b,"$ie",[s],"$ae")
for(u=b.gW(b),t=this.gaK();u.w();)u.gJ(u).gl().N(0,t)
s=new D.bv([s])
s.b=!0
this.M(s)},
aQ:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.aE()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.al(r,r.length,[H.y(r,0)]),u=null;r.w();){q=r.d
if(q!=null){t=q.aQ(0,b,c)
if(t!=null)u=u==null?t:t.t(0,u)}}s.f=u==null?V.bx():u
r=s.e
if(r!=null)r.aC(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ci))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.P(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ae:function(){return[U.a8]},
$aV:function(){return[U.a8]},
$ia8:1}
U.a8.prototype={}
U.e1.prototype={
gl:function(){var u=this.cy
return u==null?this.cy=D.F():u},
M:function(a){var u
H.k(a,"$iu")
u=this.cy
if(u!=null)u.v(a)},
ab:function(){return this.M(null)},
aW:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdw().h(0,u.gbM())
u.a.c.gdY().h(0,u.gbO())
u.a.c.gbB().h(0,u.gbQ())
return!0},
bN:function(a){var u=this
H.k(a,"$iu")
if(!J.P(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bP:function(a){var u,t,s,r,q,p,o,n=this
a=H.d(H.k(a,"$iu"),"$ib9")
if(!H.z(n.y))return
if(H.z(n.x)){u=a.d.I(0,a.y)
u=new V.N(u.a,u.b)
u=u.C(u)
t=n.r
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.x=!1}if(H.z(n.d)){u=a.c
t=a.d.I(0,a.y)
u=new V.N(t.a,t.b).t(0,2).u(0,u.gaf())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.t()
s=n.e
if(typeof s!=="number")return H.E(s)
t.sU(u*10*s)}else{u=a.c
t=a.d
s=t.I(0,a.y)
r=new V.N(s.a,s.b).t(0,2).u(0,u.gaf())
s=n.b
q=r.a
if(typeof q!=="number")return q.O()
p=n.e
if(typeof p!=="number")return H.E(p)
o=n.z
if(typeof o!=="number")return H.E(o)
s.sae(0,-q*p+o)
n.b.sU(0)
t=t.I(0,a.z)
n.Q=new V.N(t.a,t.b).t(0,2).u(0,u.gaf())}n.ab()},
bR:function(a){var u,t,s,r=this
H.k(a,"$iu")
if(!H.z(r.y))return
r.y=!1
if(H.z(r.x))return
u=r.Q
if(u.C(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.t()
s=r.e
if(typeof s!=="number")return H.E(s)
u.sU(t*10*s)
r.ab()}},
aQ:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.aE()
if(q<p){r.ch=p
u=b.y
r.b.a5(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aT(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia8:1}
U.e2.prototype={
gl:function(){var u=this.fx
return u==null?this.fx=D.F():u},
M:function(a){var u
H.k(a,"$iu")
u=this.fx
if(u!=null)u.v(a)},
ab:function(){return this.M(null)},
aW:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdw().h(0,s.gbM())
s.a.c.gdY().h(0,s.gbO())
s.a.c.gbB().h(0,s.gbQ())
u=s.a.d
t=u.f
u=t==null?u.f=D.F():t
u.h(0,s.gfc())
u=s.a.d
t=u.d
u=t==null?u.d=D.F():t
u.h(0,s.gfe())
u=s.a.e
t=u.b
u=t==null?u.b=D.F():t
u.h(0,s.ghK())
u=s.a.e
t=u.d
u=t==null?u.d=D.F():t
u.h(0,s.ghI())
u=s.a.e
t=u.c
u=t==null?u.c=D.F():t
u.h(0,s.ghG())
return!0},
an:function(a){var u=a.a,t=a.b
if(H.z(this.f)){if(typeof u!=="number")return u.O()
u=-u}if(H.z(this.r)){if(typeof t!=="number")return t.O()
t=-t}return new V.N(u,t)},
bN:function(a){var u=this
a=H.d(H.k(a,"$iu"),"$ib9")
if(!J.P(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bP:function(a){var u,t,s,r,q,p,o,n=this
a=H.d(H.k(a,"$iu"),"$ib9")
if(!H.z(n.cx))return
if(H.z(n.ch)){u=a.d.I(0,a.y)
u=new V.N(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.z(n.e)){u=a.c
t=a.d.I(0,a.y)
u=n.an(new V.N(t.a,t.b).t(0,2).u(0,u.gaf()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sU(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sU(-u*10*t)}else{u=a.c
t=a.d
s=t.I(0,a.y)
r=n.an(new V.N(s.a,s.b).t(0,2).u(0,u.gaf()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sae(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sae(0,-p*q+s)
n.b.sU(0)
n.c.sU(0)
t=t.I(0,a.z)
n.dx=n.an(new V.N(t.a,t.b).t(0,2).u(0,u.gaf()))}n.ab()},
bR:function(a){var u,t,s,r=this
H.k(a,"$iu")
if(!H.z(r.cx))return
r.cx=!1
if(H.z(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sU(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sU(-t*10*u)
r.ab()}},
fd:function(a){var u=this
if(H.d(H.k(a,"$iu"),"$idv").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
ff:function(a){var u,t,s,r,q,p,o,n=this
a=H.d(H.k(a,"$iu"),"$ib9")
if(!J.P(n.d,a.x.b))return
u=a.c
t=a.d
s=t.I(0,a.y)
r=n.an(new V.N(s.a,s.b).t(0,2).u(0,u.gaf()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sae(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sae(0,-p*q+s)
n.b.sU(0)
n.c.sU(0)
t=t.I(0,a.z)
n.dx=n.an(new V.N(t.a,t.b).t(0,2).u(0,u.gaf()))
n.ab()},
hL:function(a){var u=this
H.k(a,"$iu")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hJ:function(a){var u,t,s,r,q,p,o,n=this
a=H.d(H.k(a,"$iu"),"$idV")
if(!H.z(n.cx))return
if(H.z(n.ch)){u=a.d.I(0,a.y)
u=new V.N(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.z(n.e)){u=a.c
t=a.d.I(0,a.y)
u=n.an(new V.N(t.a,t.b).t(0,2).u(0,u.gaf()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sU(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sU(-u*10*t)}else{u=a.c
t=a.d
s=t.I(0,a.y)
r=n.an(new V.N(s.a,s.b).t(0,2).u(0,u.gaf()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sae(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sae(0,-p*q+s)
n.b.sU(0)
n.c.sU(0)
t=t.I(0,a.z)
n.dx=n.an(new V.N(t.a,t.b).t(0,2).u(0,u.gaf()))}n.ab()},
hH:function(a){var u,t,s,r=this
H.k(a,"$iu")
if(!H.z(r.cx))return
r.cx=!1
if(H.z(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sU(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sU(-t*10*u)
r.ab()}},
aQ:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.aE()
if(q<p){r.dy=p
u=b.y
r.c.a5(0,u)
r.b.a5(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aT(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.t(0,V.aT(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia8:1}
U.e3.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.F():u},
M:function(a){var u=this.r
if(u!=null)u.v(a)},
aW:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.F():t
t=r.gfg()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.F():s).h(0,t)
return!0},
fh:function(a){var u,t,s,r,q=this
H.k(a,"$iu")
if(!J.P(q.b,q.a.b.c))return
H.d(a,"$icn")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.t()
r=u+t*s
if(u!==r){q.d=r
u=new D.v("zoom",u,r,[P.x])
u.b=!0
q.M(u)}},
aQ:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.lC(u,u,u)}return t.f},
$ia8:1}
M.d6.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.F():u},
T:function(a){var u
H.k(a,"$iu")
u=this.r
if(u!=null)u.v(a)},
at:function(){return this.T(null)},
h7:function(a,b){var u,t,s,r,q,p,o,n=M.an
H.i(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gV(),s={func:1,ret:-1,args:[D.u]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.gl()
o.toString
H.n(t,s)
if(o.a==null)o.saa(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bu([n])
n.b=!0
this.T(n)},
h9:function(a,b){var u,t,s=M.an
H.i(b,"$ie",[s],"$ae")
for(u=b.gW(b),t=this.gV();u.w();)u.gJ(u).gl().N(0,t)
s=new D.bv([s])
s.b=!0
this.T(s)},
Y:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.al(u,u.length,[H.y(u,0)]);u.w();){t=u.d
if(t!=null)t.Y(a)}s.f=!1},
$ae:function(){return[M.an]},
$aV:function(){return[M.an]},
$ian:1}
M.d8.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.F():u},
T:function(a){var u
H.k(a,"$iu")
u=this.r
if(u!=null)u.v(a)},
at:function(){return this.T(null)},
saN:function(a){var u,t,s=this
if(a==null)a=new X.fJ()
u=s.b
if(u!==a){if(u!=null)u.gl().N(0,s.gV())
t=s.b
s.b=a
a.gl().h(0,s.gV())
u=new D.v("camera",t,s.b,[X.bK])
u.b=!0
s.T(u)}},
sar:function(a,b){var u,t,s=this
if(b==null)b=X.ju(!0,null)
u=s.c
if(u!==b){if(u!=null)u.gl().N(0,s.gV())
t=s.c
s.c=b
b.gl().h(0,s.gV())
u=new D.v("target",t,s.c,[X.cy])
u.b=!0
s.T(u)}},
saD:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gl().N(0,t.gV())
u=t.d
t.d=a
if(a!=null)a.gl().h(0,t.gV())
s=new D.v("technique",u,t.d,[O.bA])
s.b=!0
t.T(s)}},
Y:function(a){var u,t=this
a.cw(t.d)
t.c.G(a)
t.b.G(a)
u=t.d
if(u!=null)u.a5(0,a)
t.e.a5(0,a)
t.e.Y(a)
t.b.a4(a)
t.c.a4(a)
a.cv()},
$ian:1}
M.de.prototype={
T:function(a){var u
H.k(a,"$iu")
u=this.y
if(u!=null)u.v(a)},
at:function(){return this.T(null)},
fu:function(a,b){var u,t,s,r,q,p,o,n=E.aj
H.i(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gV(),s={func:1,ret:-1,args:[D.u]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.br()
o.saa(null)
o.saL(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.saa(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bu([n])
n.b=!0
this.T(n)},
fw:function(a,b){var u,t,s=E.aj
H.i(b,"$ie",[s],"$ae")
for(u=b.gW(b),t=this.gV();u.w();)u.gJ(u).gl().N(0,t)
s=new D.bv([s])
s.b=!0
this.T(s)},
saN:function(a){var u,t,s=this
if(a==null)a=X.kd(null)
u=s.b
if(u!==a){if(u!=null)u.gl().N(0,s.gV())
t=s.b
s.b=a
a.gl().h(0,s.gV())
u=new D.v("camera",t,s.b,[X.bK])
u.b=!0
s.T(u)}},
sar:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gl().N(0,t.gV())
u=t.c
t.c=b
b.gl().h(0,t.gV())
s=new D.v("target",u,t.c,[X.cy])
s.b=!0
t.T(s)}},
saD:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gl().N(0,t.gV())
u=t.d
t.d=a
if(a!=null)a.gl().h(0,t.gV())
s=new D.v("technique",u,t.d,[O.bA])
s.b=!0
t.T(s)}},
gl:function(){var u=this.y
return u==null?this.y=D.F():u},
Y:function(a){var u,t=this
a.cw(t.d)
t.c.G(a)
t.b.G(a)
u=t.d
if(u!=null)u.a5(0,a)
for(u=t.e.a,u=new J.al(u,u.length,[H.y(u,0)]);u.w();)u.d.a5(0,a)
for(u=t.e.a,u=new J.al(u,u.length,[H.y(u,0)]);u.w();)u.d.Y(a)
t.b.toString
a.cy.aB()
a.db.aB()
t.c.a4(a)
a.cv()},
seO:function(a,b){this.e=H.i(b,"$iV",[E.aj],"$aV")},
$ian:1}
M.di.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.F():u},
T:function(a){var u
H.k(a,"$iu")
u=this.b
if(u!=null)u.v(a)},
at:function(){return this.T(null)},
Y:function(a){var u=this.e
if(u!=null)u.Y(a)
u=this.r
if(u!=null)u.Y(a)},
$ian:1}
M.an.prototype={}
A.d1.prototype={}
A.f3.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
is:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
aZ:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.da.prototype={}
A.dj.prototype={
ac:function(a,b,c){if(c==null||!c.d)C.b.X(b.a,b.d,1)
else{a.ei(c)
C.b.X(b.a,b.d,0)}}}
A.fH.prototype={
aH:function(a,b,c,d){var u,t,s,r,q=[P.x]
H.i(c,"$ib",q,"$ab")
H.i(d,"$ib",q,"$ab")
u=c.length
if(0>=u)return H.h(c,0)
t=Math.abs(c[0]-0)<$.H().a
if(t){if(0>=d.length)return H.h(d,0)
s=d[0]
d=C.a.cJ(d,1)
c=C.a.cJ(c,1);--u}else s=0
q=a.a+="vec4 blur"+b+"()\n"
q+="{\n"
a.a=q
if(t)q=a.a+="  vec4 color = texture2D(colorTxt, txt2D)*"+H.l(s)+";\n"
else q=a.a=q+"  vec4 color = vec4(0.0);\n"
q=a.a=q+"  vec2 offset;\n"
for(r=0;r<u;++r){if(r>=c.length)return H.h(c,r)
a.a+="  offset = blurScale * "+H.l(c[r])+";\n"
if(r>=d.length)return H.h(d,r)
a.a+="  color += texture2D(colorTxt, txt2D + offset) * "+H.l(d[r])+";\n"
if(r>=d.length)return H.h(d,r)
q=a.a+="  color += texture2D(colorTxt, txt2D - offset) * "+H.l(d[r])+";\n"}q+="  return color; \n"
a.a=q
q+="}\n"
a.a=q
a.a=q+"\n"},
i:function(a){return this.b}}
A.dy.prototype={
en:function(d1,d2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="Required uniform value, ",a8=", was not defined or used in shader.",a9="emissionTxt",b0="nullEmissionTxt",b1="ambientTxt",b2="nullAmbientTxt",b3="diffuseTxt",b4="nullDiffuseTxt",b5="invDiffuseTxt",b6="nullInvDiffuseTxt",b7="specularTxt",b8="nullSpecularTxt",b9="nullBumpTxt",c0="reflectTxt",c1="nullReflectTxt",c2="refractTxt",c3="nullRefractTxt",c4="alphaTxt",c5="nullAlphaTxt",c6="uniform mat4 objMat;\n",c7="   if(nullAlphaTxt > 0) return alpha;\n",c8="   if (a <= 0.000001) discard;\n",c9="precision mediump float;\n\n",d0="precision mediump float;\n\nvarying vec3 normalVec;\n"
a6.z=d1
u=new P.be("")
t=d1.fx
if(t){u.a=c6
s=c6}else s=""
r=d1.fy
s=(r?u.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s=u.a=s+"attribute vec3 posAttr;\n"
q=d1.r1
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=d1.r2
u.a=(p?u.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
d1.hU(u)
d1.i0(u)
d1.hV(u)
d1.i8(u)
d1.i9(u)
d1.i2(u)
d1.ie(u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=d1.x1
s+="   return projViewObjMat*vec4("+(o?"bendPos":"posAttr")+", 1.0);\n"
u.a=s
s+="}\n"
u.a=s
s+="\n"
u.a=s
s+="void main()\n"
u.a=s
s=u.a=s+"{\n"
if(o){s+="   setupBendData();\n"
u.a=s}if(q){s+="   normalVec = getNorm();\n"
u.a=s}if(p){s+="   binormalVec = getBinm();\n"
u.a=s}if(d1.rx){s+="   txt2D = getTxt2D();\n"
u.a=s}if(d1.ry){s+="   txtCube = getTxtCube();\n"
u.a=s}if(d1.k3){s+="   objPos = getObjPos();\n"
u.a=s}s=(d1.k4?u.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s=u.a=s+"\n"
q=a6.z
u=new P.be("")
u.a="precision mediump float;\n"
u.a=c9
p=q.r1
if(p){u.a=d0
o=d0}else o=c9
if(q.r2){o+="varying vec3 binormalVec;\n"
u.a=o}if(q.rx){o+="varying vec2 txt2D;\n"
u.a=o}if(q.ry){o+="varying vec3 txtCube;\n"
u.a=o}if(q.k3){o+="varying vec3 objPos;\n"
u.a=o}o=u.a=(q.k4?u.a=o+"varying vec3 viewPos;\n":o)+"\n"
n=q.y2
if(n){o+="uniform mat4 colorMat;\n"
u.a=o}u.a=(q.fr?u.a=o+"uniform mat4 invViewMat;\n":o)+"\n"
q.hY(u)
q.hT(u)
q.hW(u)
q.hZ(u)
q.i6(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.i4(u)
q.i5(u)}q.i1(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=q.y
if(l!==C.c){m=u.a=m+"uniform float alpha;\n"
if(l!==C.h){m=u.a=m+"uniform int nullAlphaTxt;\n"
if(l===C.e){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.d){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m=u.a=m+"\n"}m+="float alphaValue()\n"
u.a=m
m=u.a=m+"{\n"
switch(l){case C.c:m=u.a=m+"   return 1.0;\n"
break
case C.h:m=u.a=m+"   return alpha;\n"
break
case C.e:m+=c7
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+=c8
u.a=m
m=u.a=m+"   return a;\n"
break
case C.d:m+=c7
u.a=m
m+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
u.a=m
m+=c8
u.a=m
m=u.a=m+"   return a;\n"
break}m+="}\n"
u.a=m
m+="\n"
u.a=m
l=q.k2
if(l){m+="// === Lighting ===\n"
u.a=m
m+="\n"
u.a=m
m+="vec3 lightValue(vec3 norm, vec3 litClr, vec3 litVec)\n"
u.a=m
m+="{\n"
u.a=m
u.a=m+"   if ((litClr.r < 0.001) && (litClr.g < 0.001) && (litClr.b < 0.001)) return litClr;\n"
k=H.c([],[P.o])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.A(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.hX(u)
q.i3(u)
q.i7(u)
q.ia(u)
q.ib(u)
q.ic(u)
q.i_(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m=u.a=m+"   float alpha = alphaValue();\n"
p=p?u.a=m+"   vec3 norm = normal();\n":m
if(o)u.a=p+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.c([],[P.o])
if(l){u.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"lightAccum")
if(q.c!==C.c)u.a+="   setDiffuseColor();\n"
if(q.d!==C.c)u.a+="   setInvDiffuseColor();\n"
if(q.e!==C.c)u.a+="   setSpecularColor();\n"
if(q.z>0)u.a+="   lightAccum += allDirLightValues(norm);\n"
if(q.Q>0)u.a+="   lightAccum += allPointLightValues(norm);\n"
if(q.ch>0)u.a+="   lightAccum += allSpotLightValues(norm);\n"
if(q.cx>0)u.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(q.cy>0)u.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(q.db>0)u.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(q.dx<=0)u.a+="   lightAccum += nonLightValues(norm);\n"}if(q.a!==C.c)C.a.h(j,"emission()")
if(q.r!==C.c)C.a.h(j,"reflect(refl)")
if(q.x!==C.c)C.a.h(j,"refract(refl)")
if(j.length<=0)C.a.h(j,"vec3(0.0, 0.0, 0.0)")
i="vec4("+C.a.A(j," + ")+", alpha);"
q=u.a
q=u.a=(n?u.a=q+("   gl_FragColor = colorMat*"+i+"\n"):u.a=q+("   gl_FragColor = "+i+"\n"))+"}\n"
a6.b_(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
a6.Q=a6.x.j(0,"posAttr")
a6.cx=a6.x.j(0,"normAttr")
a6.ch=a6.x.j(0,"binmAttr")
a6.cy=a6.x.j(0,"txt2DAttr")
a6.db=a6.x.j(0,"txtCubeAttr")
a6.dx=a6.x.j(0,"bendAttr")
if(d1.fr)a6.id=H.d(a6.y.m(0,"invViewMat"),"$ia2")
if(t)a6.dy=H.d(a6.y.m(0,"objMat"),"$ia2")
if(r)a6.fr=H.d(a6.y.m(0,"viewObjMat"),"$ia2")
a6.fy=H.d(a6.y.m(0,"projViewObjMat"),"$ia2")
if(d1.x2)a6.k1=H.d(a6.y.m(0,"txt2DMat"),"$ibV")
if(d1.y1)a6.k2=H.d(a6.y.m(0,"txtCubeMat"),"$ia2")
if(d1.y2)a6.k3=H.d(a6.y.m(0,"colorMat"),"$ia2")
a6.seK(H.c([],[A.a2]))
t=d1.aq
if(t>0){a6.k4=H.k(a6.y.m(0,"bendMatCount"),"$iG")
for(h=0;h<t;++h){s=a6.r1
r=a6.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.t(P.q(a7+q+a8));(s&&C.a).h(s,H.d(g,"$ia2"))}}t=d1.a
if(t!==C.c){a6.r2=H.d(a6.y.m(0,"emissionClr"),"$iK")
switch(t){case C.c:break
case C.h:break
case C.e:a6.rx=H.d(a6.y.m(0,a9),"$ia3")
a6.x1=H.d(a6.y.m(0,b0),"$iG")
break
case C.d:a6.ry=H.d(a6.y.m(0,a9),"$iah")
a6.x1=H.d(a6.y.m(0,b0),"$iG")
break}}t=d1.b
if(t!==C.c){a6.x2=H.d(a6.y.m(0,"ambientClr"),"$iK")
switch(t){case C.c:break
case C.h:break
case C.e:a6.y1=H.d(a6.y.m(0,b1),"$ia3")
a6.aq=H.d(a6.y.m(0,b2),"$iG")
break
case C.d:a6.y2=H.d(a6.y.m(0,b1),"$iah")
a6.aq=H.d(a6.y.m(0,b2),"$iG")
break}}t=d1.c
if(t!==C.c){a6.am=H.d(a6.y.m(0,"diffuseClr"),"$iK")
switch(t){case C.c:break
case C.h:break
case C.e:a6.bi=H.d(a6.y.m(0,b3),"$ia3")
a6.bj=H.d(a6.y.m(0,b4),"$iG")
break
case C.d:a6.dz=H.d(a6.y.m(0,b3),"$iah")
a6.bj=H.d(a6.y.m(0,b4),"$iG")
break}}t=d1.d
if(t!==C.c){a6.bk=H.d(a6.y.m(0,"invDiffuseClr"),"$iK")
switch(t){case C.c:break
case C.h:break
case C.e:a6.dA=H.d(a6.y.m(0,b5),"$ia3")
a6.bl=H.d(a6.y.m(0,b6),"$iG")
break
case C.d:a6.dB=H.d(a6.y.m(0,b5),"$iah")
a6.bl=H.d(a6.y.m(0,b6),"$iG")
break}}t=d1.e
if(t!==C.c){a6.bo=H.d(a6.y.m(0,"shininess"),"$iS")
a6.bm=H.d(a6.y.m(0,"specularClr"),"$iK")
switch(t){case C.c:break
case C.h:break
case C.e:a6.dC=H.d(a6.y.m(0,b7),"$ia3")
a6.bn=H.d(a6.y.m(0,b8),"$iG")
break
case C.d:a6.dD=H.d(a6.y.m(0,b7),"$iah")
a6.bn=H.d(a6.y.m(0,b8),"$iG")
break}}switch(d1.f){case C.c:break
case C.h:break
case C.e:a6.dE=H.d(a6.y.m(0,"bumpTxt"),"$ia3")
a6.bp=H.d(a6.y.m(0,b9),"$iG")
break
case C.d:a6.dF=H.d(a6.y.m(0,"bumpTxt"),"$iah")
a6.bp=H.d(a6.y.m(0,b9),"$iG")
break}if(d1.dy){a6.dG=H.d(a6.y.m(0,"envSampler"),"$iah")
a6.dH=H.d(a6.y.m(0,"nullEnvTxt"),"$iG")
t=d1.r
if(t!==C.c){a6.bq=H.d(a6.y.m(0,"reflectClr"),"$iK")
switch(t){case C.c:break
case C.h:break
case C.e:a6.dI=H.d(a6.y.m(0,c0),"$ia3")
a6.br=H.d(a6.y.m(0,c1),"$iG")
break
case C.d:a6.dJ=H.d(a6.y.m(0,c0),"$iah")
a6.br=H.d(a6.y.m(0,c1),"$iG")
break}}t=d1.x
if(t!==C.c){a6.bs=H.d(a6.y.m(0,"refraction"),"$iS")
a6.bt=H.d(a6.y.m(0,"refractClr"),"$iK")
switch(t){case C.c:break
case C.h:break
case C.e:a6.dK=H.d(a6.y.m(0,c2),"$ia3")
a6.bu=H.d(a6.y.m(0,c3),"$iG")
break
case C.d:a6.dL=H.d(a6.y.m(0,c2),"$iah")
a6.bu=H.d(a6.y.m(0,c3),"$iG")
break}}}t=d1.y
if(t!==C.c){a6.bv=H.d(a6.y.m(0,"alpha"),"$iS")
switch(t){case C.c:break
case C.h:break
case C.e:a6.dM=H.d(a6.y.m(0,c4),"$ia3")
a6.bw=H.d(a6.y.m(0,c5),"$iG")
break
case C.d:a6.dN=H.d(a6.y.m(0,c4),"$iah")
a6.bw=H.d(a6.y.m(0,c5),"$iG")
break}}a6.sew(H.c([],[A.cD]))
a6.sex(H.c([],[A.cE]))
a6.sey(H.c([],[A.cF]))
a6.sez(H.c([],[A.cG]))
a6.seA(H.c([],[A.cH]))
a6.seB(H.c([],[A.cI]))
if(d1.k2){t=d1.z
if(t>0){a6.dO=H.k(a6.y.m(0,"dirLightCount"),"$iG")
for(h=0;h<t;++h){s=a6.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.d(g,"$iK")
s=a6.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.d(f,"$iK")
s=a6.cf;(s&&C.a).h(s,new A.cD(g,f))}}t=d1.Q
if(t>0){a6.dP=H.k(a6.y.m(0,"pntLightCount"),"$iG")
for(h=0;h<t;++h){s=a6.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.d(g,"$iK")
s=a6.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.d(f,"$iK")
s=a6.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.t(P.q(a7+r+a8))
H.d(e,"$iK")
s=a6.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.t(P.q(a7+r+a8))
H.d(d,"$iS")
s=a6.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.t(P.q(a7+r+a8))
H.d(c,"$iS")
s=a6.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.t(P.q(a7+r+a8))
H.d(b,"$iS")
s=a6.cg;(s&&C.a).h(s,new A.cE(g,f,e,d,c,b))}}t=d1.ch
if(t>0){a6.dQ=H.k(a6.y.m(0,"spotLightCount"),"$iG")
for(h=0;h<t;++h){s=a6.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.d(g,"$iK")
s=a6.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.d(f,"$iK")
s=a6.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.q(a7+r+a8))
H.d(e,"$iK")
s=a6.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.q(a7+r+a8))
H.d(d,"$iK")
s=a6.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.t(P.q(a7+r+a8))
H.d(c,"$iS")
s=a6.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.t(P.q(a7+r+a8))
H.d(b,"$iS")
s=a6.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.q(a7+r+a8))
H.d(a,"$iS")
s=a6.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.q(a7+r+a8))
H.d(a0,"$iS")
s=a6.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.q(a7+r+a8))
H.d(a1,"$iS")
s=a6.ci;(s&&C.a).h(s,new A.cF(g,f,e,d,c,b,a,a0,a1))}}t=d1.cx
if(t>0){a6.dR=H.k(a6.y.m(0,"txtDirLightCount"),"$iG")
for(h=0;h<t;++h){s=a6.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.d(g,"$iK")
s=a6.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.d(f,"$iK")
s=a6.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.q(a7+r+a8))
H.d(e,"$iK")
s=a6.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.t(P.q(a7+r+a8))
H.d(d,"$iK")
s=a6.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.t(P.q(a7+r+a8))
H.d(c,"$iK")
s=a6.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.q(a7+r+a8))
H.d(b,"$iG")
s=a6.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.t(P.q(a7+r+a8))
H.d(a,"$ia3")
s=a6.cj;(s&&C.a).h(s,new A.cG(g,f,e,d,c,a,b))}}t=d1.cy
if(t>0){a6.dS=H.k(a6.y.m(0,"txtPntLightCount"),"$iG")
for(h=0;h<t;++h){s=a6.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.d(g,"$iK")
s=a6.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.d(f,"$iK")
s=a6.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.t(P.q(a7+r+a8))
H.d(e,"$ibV")
s=a6.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.q(a7+r+a8))
H.d(d,"$iK")
s=a6.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.t(P.q(a7+r+a8))
H.d(c,"$iG")
s=a6.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.t(P.q(a7+r+a8))
H.d(b,"$iS")
s=a6.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.t(P.q(a7+r+a8))
H.d(a,"$iS")
s=a6.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.t(P.q(a7+r+a8))
H.d(a0,"$iS")
s=a6.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.t(P.q(a7+r+a8))
H.d(a1,"$iah")
s=a6.ck;(s&&C.a).h(s,new A.cH(g,f,e,d,a1,c,b,a,a0))}}t=d1.db
if(t>0){a6.dT=H.k(a6.y.m(0,"txtSpotLightCount"),"$iG")
for(h=0;h<t;++h){s=a6.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.d(g,"$iK")
s=a6.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.d(f,"$iK")
s=a6.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.t(P.q(a7+r+a8))
H.d(e,"$iK")
s=a6.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.t(P.q(a7+r+a8))
H.d(d,"$iK")
s=a6.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.t(P.q(a7+r+a8))
H.d(c,"$iK")
s=a6.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.q(a7+r+a8))
H.d(b,"$iG")
s=a6.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.t(P.q(a7+r+a8))
H.d(a,"$iK")
s=a6.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.t(P.q(a7+r+a8))
H.d(a0,"$iS")
s=a6.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.q(a7+r+a8))
H.d(a1,"$iS")
s=a6.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.t(P.q(a7+r+a8))
H.d(a2,"$iS")
s=a6.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.t(P.q(a7+r+a8))
H.d(a3,"$iS")
s=a6.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.t(P.q(a7+r+a8))
H.d(a4,"$iS")
s=a6.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.t(P.q(a7+r+a8))
H.d(a5,"$ia3")
s=a6.cl;(s&&C.a).h(s,new A.cI(g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ac:function(a,b,c){C.b.X(b.a,b.d,1)},
ag:function(a,b,c){if(c==null||c.d<6)C.b.X(b.a,b.d,1)
else{a.cG(c)
C.b.X(b.a,b.d,0)}},
seK:function(a){this.r1=H.i(a,"$ib",[A.a2],"$ab")},
sew:function(a){this.cf=H.i(a,"$ib",[A.cD],"$ab")},
sex:function(a){this.cg=H.i(a,"$ib",[A.cE],"$ab")},
sey:function(a){this.ci=H.i(a,"$ib",[A.cF],"$ab")},
sez:function(a){this.cj=H.i(a,"$ib",[A.cG],"$ab")},
seA:function(a){this.ck=H.i(a,"$ib",[A.cH],"$ab")},
seB:function(a){this.cl=H.i(a,"$ib",[A.cI],"$ab")}}
A.h0.prototype={
hU:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.aq+"];\n"
u+="attribute vec4 bendAttr;\n"
a.a=u
u+="\n"
a.a=u
u+="float weightSum;\n"
a.a=u
u=a.a=u+"vec3 bendPos;\n"
t=r.r1
if(t){u+="vec3 bendNorm;\n"
a.a=u}s=r.r2
u=(s?a.a=u+"vec3 bendBinm;\n":u)+"\n"
a.a=u
u+="void adjustBend(float bendVal)\n"
a.a=u
u+="{\n"
a.a=u
u+="   if(bendVal >= 0.0)\n"
a.a=u
u+="   {\n"
a.a=u
u+="      int index = int(floor((bendVal + 0.5)*0.5));\n"
a.a=u
u+="      if(index < bendMatCount)\n"
a.a=u
u+="      {\n"
a.a=u
u+="         float weight = clamp(bendVal - float(index)*2.0, 0.0, 1.0);\n"
a.a=u
u+="         mat4 m = bendValues[index].mat;\n"
a.a=u
u+="         weightSum += weight;\n"
a.a=u
u=a.a=u+"         bendPos += (m*vec4(posAttr, 1.0)).xyz*weight;\n"
if(t){u+="         bendNorm += (m*vec4(normAttr, 0.0)).xyz*weight;\n"
a.a=u}u=(s?a.a=u+"         bendBinm += (m*vec4(binmAttr, 0.0)).xyz*weight;\n":u)+"      }\n"
a.a=u
u+="   }\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="void setupBendData()\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   bendPos = vec3(0.0, 0.0, 0.0);\n"
if(t){u+="   bendNorm = vec3(0.0, 0.0, 0.0);\n"
a.a=u}u=(s?a.a=u+"   bendBinm = vec3(0.0, 0.0, 0.0);\n":u)+"   weightSum = 0.0;\n"
a.a=u
u+="   adjustBend(bendAttr.x);\n"
a.a=u
u+="   adjustBend(bendAttr.y);\n"
a.a=u
u+="   adjustBend(bendAttr.z);\n"
a.a=u
u+="   adjustBend(bendAttr.w);\n"
a.a=u
u+="   if(weightSum < 1.0)\n"
a.a=u
u+="   {\n"
a.a=u
u+="      float weight = 1.0 - weightSum;\n"
a.a=u
u=a.a=u+"      bendPos += posAttr*weight;\n"
if(t){u+="      bendNorm += normAttr*weight;\n"
a.a=u}u=(s?a.a=u+"      bendBinm += binmAttr*weight;\n":u)+"   }\n"
a.a=u
u+="   else\n"
a.a=u
u+="   {\n"
a.a=u
u+="      bendPos = bendPos/weightSum;\n"
a.a=u
u=a.a=u+"   }\n"
if(t){u+="   bendNorm = normalize(bendNorm);\n"
a.a=u}u=(s?a.a=u+"   bendBinm = normalize(bendBinm);\n":u)+"}\n"
a.a=u
a.a=u+"\n"},
i0:function(a){var u
if(!this.r1)return
u=a.a+="varying vec3 normalVec;\n"
u+="\n"
a.a=u
u+="vec3 getNorm()\n"
a.a=u
u+="{\n"
a.a=u
u+="   return normalize((viewObjMat*vec4("+(this.x1?"bendNorm":"normAttr")+", 0.0)).xyz);\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
hV:function(a){var u
if(!this.r2)return
u=a.a+="varying vec3 binormalVec;\n"
u+="\n"
a.a=u
u+="vec3 getBinm()\n"
a.a=u
u+="{\n"
a.a=u
u+="   return normalize((viewObjMat*vec4("+(this.x1?"bendBinm":"binmAttr")+", 0.0)).xyz);\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
i8:function(a){var u,t
if(!this.rx)return
u=this.x2
if(u)a.a+="uniform mat3 txt2DMat;\n"
t=a.a+="attribute vec2 txt2DAttr;\n"
t+="varying vec2 txt2D;\n"
a.a=t
t+="\n"
a.a=t
t+="vec2 getTxt2D()\n"
a.a=t
t=a.a=t+"{\n"
t=(u?a.a=t+"   return (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n":a.a=t+"   return vec3(txt2DAttr, 1.0).xy;\n")+"}\n"
a.a=t
a.a=t+"\n"},
i9:function(a){var u,t
if(!this.ry)return
u=this.y1
if(u)a.a+="uniform mat4 txtCubeMat;\n"
t=a.a+="attribute vec3 txtCubeAttr;\n"
t+="varying vec3 txtCube;\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 getTxtCube()\n"
a.a=t
t=a.a=t+"{\n"
t=(u?a.a=t+"   return (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":a.a=t+"   return vec4(txtCubeAttr, 1.0).xyz;\n")+"}\n"
a.a=t
a.a=t+"\n"},
i2:function(a){var u
if(!this.k3)return
u=a.a+="varying vec3 objPos;\n"
u+="\n"
a.a=u
u+="vec3 getObjPos()\n"
a.a=u
u+="{\n"
a.a=u
u+="   return (objMat*vec4("+(this.x1?"bendPos":"posAttr")+", 1.0)).xyz;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
ie:function(a){var u
if(!this.k4)return
u=a.a+="varying vec3 viewPos;\n"
u+="\n"
a.a=u
u+="vec3 getViewPos()\n"
a.a=u
u+="{\n"
a.a=u
u+="   return (viewObjMat*vec4("+(this.x1?"bendPos":"posAttr")+", 1.0)).xyz;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
av:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.h(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.j.cL(c,1))+"Txt;\n")
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
hY:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.c)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.av(a,s,"emission")
u=a.a+="\n"
u+="vec3 emission()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.h:s=a.a=u+"   return emissionClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
hT:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.c)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.av(a,s,"ambient")
u=a.a+="\n"
u+="vec3 ambient()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.h:s=a.a=u+"   return ambientClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
hW:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.c)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.av(a,s,"diffuse")
u=a.a+="vec3 diffuseColor;\n"
u+="\n"
a.a=u
u+="void setDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.h:s=a.a=u+"   diffuseColor = diffuseClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   else diffuseColor = diffuseClr*textureCube(diffuseTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
s+="\n"
a.a=s
s+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
a.a=s
s+="{\n"
a.a=s
s+="   float scalar = dot(norm, -litVec);\n"
a.a=s
s+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=s
s+="   return diffuseColor*scalar;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
hZ:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.c)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.av(a,s,"invDiffuse")
u=a.a+="vec3 invDiffuseColor;\n"
u+="\n"
a.a=u
u+="void setInvDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.h:s=a.a=u+"   invDiffuseColor = invDiffuseClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   else invDiffuseColor = invDiffuseClr*textureCube(invDiffuseTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
s+="\n"
a.a=s
s+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
a.a=s
s+="{\n"
a.a=s
s+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
a.a=s
s+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=s
s+="   return invDiffuseColor*scalar;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
i6:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.c)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.av(a,s,"specular")
u=a.a+="uniform float shininess;\n"
u+="vec3 specularColor;\n"
a.a=u
u+="\n"
a.a=u
u+="void setSpecularColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.h:s=a.a=u+"   specularColor = specularClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   else specularColor = specularClr*textureCube(specularTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
s+="\n"
a.a=s
s+="vec3 specular(vec3 norm, vec3 litVec)\n"
a.a=s
s+="{\n"
a.a=s
s+="   if(dot(norm, -litVec) < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=s
s+="   vec3 lightRef = normalize(reflect(litVec, norm));\n"
a.a=s
s+="   float scalar = dot(lightRef, -normalize(viewPos));\n"
a.a=s
s+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=s
s+="   return specularColor*pow(scalar, shininess);\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
i1:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u=a.a=u+"\n"
t=this.f
switch(t){case C.c:break
case C.h:break
case C.e:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+=s
a.a=u
u=a.a=u+"\n"
break
case C.d:u+="uniform samplerCube bumpTxt;\n"
a.a=u
u+=s
a.a=u
u=a.a=u+"\n"
break}u+="vec3 normal()\n"
a.a=u
u=a.a=u+"{\n"
switch(t){case C.c:u=a.a=u+r
break
case C.h:u=a.a=u+r
break
case C.e:u+=q
a.a=u
u+="   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n"
a.a=u
u+=p
a.a=u
u+=o
a.a=u
u+="   vec3 c = normalize(cross(b, n));\n"
a.a=u
u+=n
a.a=u
u+=m
a.a=u
u+=l
a.a=u
u+=k
a.a=u
u=a.a=u+j
break
case C.d:u+=q
a.a=u
u+="   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n"
a.a=u
u+=p
a.a=u
u+=o
a.a=u
u+="   vec3 c = cross(b, n);\n"
a.a=u
u+=n
a.a=u
u+=m
a.a=u
u+=l
a.a=u
u+=k
a.a=u
u=a.a=u+j
break}u+="}\n"
a.a=u
a.a=u+"\n"},
i4:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.c)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.av(a,s,"reflect")
u=a.a+="\n"
u+="vec3 reflect(vec3 refl)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
switch(s){case C.c:s=u
break
case C.h:s=a.a=u+"   vec3 scalar = reflectClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;\n"
break
default:s=u}s+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
a.a=s
s+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
i5:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.c)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.av(a,s,"refract")
u=a.a+="uniform float refraction;\n"
u+="\n"
a.a=u
u+="vec3 refract(vec3 refl)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
switch(s){case C.c:s=u
break
case C.h:s=a.a=u+"   vec3 scalar = refractClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = refractClr*textureCube(refractTxt, txtCube).rgb;\n"
break
default:s=u}s+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
a.a=s
s+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
a.a=s
s+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
hX:function(a){var u,t=this.z
if(t<=0)return
u=a.a+="// === Directional Light ===\n"
u+="\n"
a.a=u
u+="struct DirLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 viewDir;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int dirLightCount;\n"
u=a.a+="uniform DirLight dirLights["+t+"];\n"
u+="\n"
a.a=u
u+="vec3 allDirLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
t=a.a+="   for(int i = 0; i < "+t+"; ++i)\n"
t+="   {\n"
a.a=t
t+="      if(i >= dirLightCount) break;\n"
a.a=t
t+="      DirLight lit = dirLights[i];\n"
a.a=t
t+="      lightAccum += lightValue(norm, lit.color, lit.viewDir);\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightAccum;\n"
a.a=t
t+="}\n"
a.a=t
a.a=t+"\n"},
i3:function(a){var u,t=this.Q
if(t<=0)return
u=a.a+="// === Point Light ===\n"
u+="\n"
a.a=u
u+="struct PointLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 point;\n"
a.a=u
u+="   vec3 viewPnt;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   float att0;\n"
a.a=u
u+="   float att1;\n"
a.a=u
u+="   float att2;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int pntLightCount;\n"
u=a.a+="uniform PointLight pntLights["+t+"];\n"
u+="\n"
a.a=u
u+="vec3 pointLightValue(vec3 norm, PointLight lit)\n"
a.a=u
u+="{\n"
a.a=u
u+="   float dist = length(objPos - lit.point);\n"
a.a=u
u+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=u
u+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   return lightValue(norm, lit.color*attenuation, normalize(viewPos - lit.viewPnt));\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 allPointLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
t=a.a+="   for(int i = 0; i < "+t+"; ++i)\n"
t+="   {\n"
a.a=t
t+="      if(i >= pntLightCount) break;\n"
a.a=t
t+="      lightAccum += pointLightValue(norm, pntLights[i]);\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightAccum;\n"
a.a=t
t+="}\n"
a.a=t
a.a=t+"\n"},
i7:function(a){var u,t=this.ch
if(t<=0)return
u=a.a+="// === Spot Light ===\n"
u+="\n"
a.a=u
u+="struct SpotLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 objPnt;\n"
a.a=u
u+="   vec3 objDir;\n"
a.a=u
u+="   vec3 viewPnt;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   float cutoff;\n"
a.a=u
u+="   float coneAngle;\n"
a.a=u
u+="   float att0;\n"
a.a=u
u+="   float att1;\n"
a.a=u
u+="   float att2;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int spotLightCount;\n"
u=a.a+="uniform SpotLight spotLights["+t+"];\n"
u+="\n"
a.a=u
u+="vec3 spotLightValue(vec3 norm, SpotLight lit)\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 dir = objPos - lit.objPnt;\n"
a.a=u
u+="   float dist = length(dir);\n"
a.a=u
u+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=u
u+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   float angle = acos(dot(normalize(dir), lit.objDir));\n"
a.a=u
u+="   float scale = (lit.cutoff-angle)/(lit.cutoff-lit.coneAngle);\n"
a.a=u
u+="   if(scale <= 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   if(scale > 1.0) scale = 1.0;\n"
a.a=u
u+="   return lightValue(norm, lit.color*attenuation*scale, normalize(viewPos - lit.viewPnt));\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 allSpotLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
t=a.a+="   for(int i = 0; i < "+t+"; ++i)\n"
t+="   {\n"
a.a=t
t+="      if(i >= spotLightCount) break;\n"
a.a=t
t+="      lightAccum += spotLightValue(norm, spotLights[i]);\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightAccum;\n"
a.a=t
t+="}\n"
a.a=t
a.a=t+"\n"},
ia:function(a){var u,t,s=this.cx
if(s<=0)return
u=a.a+="// === Texture Directional Light ===\n"
u+="\n"
a.a=u
u+="struct TexturedDirLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 objUp;\n"
a.a=u
u+="   vec3 objRight;\n"
a.a=u
u+="   vec3 objDir;\n"
a.a=u
u+="   vec3 viewDir;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   int nullTxt;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int txtDirLightCount;\n"
u=a.a+="uniform TexturedDirLight txtDirLights["+s+"];\n"
for(t=0;t<s;++t)u=a.a+="uniform sampler2D txtDirLightsTxt2D"+t+";\n"
u+="\n"
a.a=u
u+="vec3 txtDirLightValue(vec3 norm, TexturedDirLight lit, sampler2D txt2D)\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=u
u+="   else\n"
a.a=u
u+="   {\n"
a.a=u
u+="      vec3 offset = objPos + lit.objDir*dot(objPos, lit.objDir);\n"
a.a=u
u+="      float tu = dot(offset, lit.objUp);\n"
a.a=u
u+="      float tv = dot(offset, lit.objRight);\n"
a.a=u
u+="      color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightValue(norm, color, lit.viewDir);\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 allTxtDirLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
for(t=0;t<s;++t){a.a+="   if(txtDirLightCount <= "+t+") return lightAccum;\n"
u=a.a+="   lightAccum += txtDirLightValue(norm, txtDirLights["+t+"], txtDirLightsTxt2D"+t+");\n"}s=u+"   return lightAccum;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
ib:function(a){var u,t,s=this.cy
if(s<=0)return
u=a.a+="// === Texture Point Light ===\n"
u+="\n"
a.a=u
u+="struct TexturedPointLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 point;\n"
a.a=u
u+="   vec3 viewPnt;\n"
a.a=u
u+="   mat3 invViewRotMat;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   int nullTxt;\n"
a.a=u
u+="   float att0;\n"
a.a=u
u+="   float att1;\n"
a.a=u
u+="   float att2;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int txtPntLightCount;\n"
u=a.a+="uniform TexturedPointLight txtPntLights["+s+"];\n"
for(t=0;t<s;++t)u=a.a+="uniform samplerCube txtPntLightsTxtCube"+t+";\n"
u+="\n"
a.a=u
u+="vec3 txtPointLightValue(vec3 norm, TexturedPointLight lit, samplerCube txtCube)\n"
a.a=u
u+="{\n"
a.a=u
u+="   float dist = length(objPos - lit.point);\n"
a.a=u
u+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=u
u+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=u
u+="   else\n"
a.a=u
u+="   {\n"
a.a=u
u+="      vec3 invNormDir = lit.invViewRotMat*normDir;\n"
a.a=u
u+="      color = lit.color*textureCube(txtCube, invNormDir).xyz;\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightValue(norm, attenuation*color, normDir);\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 allTxtPointLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
for(t=0;t<s;++t){a.a+="   if(txtPntLightCount <= "+t+") return lightAccum;\n"
u=a.a+="   lightAccum += txtPointLightValue(norm, txtPntLights["+t+"], txtPntLightsTxtCube"+t+");\n"}s=u+"   return lightAccum;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
ic:function(a){var u,t,s=this.db
if(s<=0)return
u=a.a+="// === Texture Spot Light ===\n"
u+="\n"
a.a=u
u+="struct TexturedSpotLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 objPnt;\n"
a.a=u
u+="   vec3 objDir;\n"
a.a=u
u+="   vec3 objUp;\n"
a.a=u
u+="   vec3 objRight;\n"
a.a=u
u+="   vec3 viewPnt;\n"
a.a=u
u+="   int nullTxt;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   float tuScalar;\n"
a.a=u
u+="   float tvScalar;\n"
a.a=u
u+="   float att0;\n"
a.a=u
u+="   float att1;\n"
a.a=u
u+="   float att2;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int txtSpotLightCount;\n"
u=a.a+="uniform TexturedSpotLight txtSpotLights["+s+"];\n"
for(t=0;t<s;++t)u=a.a+="uniform sampler2D txtSpotLightsTxt2D"+t+";\n"
u+="\n"
a.a=u
u+="vec3 txtSpotLightValue(vec3 norm, TexturedSpotLight lit, sampler2D txt2D)\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 dir = objPos - lit.objPnt;\n"
a.a=u
u+="   float dist = length(dir);\n"
a.a=u
u+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=u
u+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 normDir = normalize(dir);\n"
a.a=u
u+="   float zScale = dot(normDir, lit.objDir);\n"
a.a=u
u+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   normDir = normDir/zScale;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=u
u+="   else\n"
a.a=u
u+="   {\n"
a.a=u
u+="      float tu = dot(normDir, lit.objUp)*lit.tuScalar+0.5;\n"
a.a=u
u+="      if((tu > 1.0) || (tu < 0.0)) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="      float tv = dot(normDir, lit.objRight)*lit.tvScalar+0.5;\n"
a.a=u
u+="      if((tv > 1.0) || (tv < 0.0)) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="      color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightValue(norm, color*attenuation, normalize(viewPos - lit.viewPnt));\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 allTxtSpotLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
for(t=0;t<s;++t){a.a+="   if(txtSpotLightCount <= "+t+") return lightAccum;\n"
u=a.a+="   lightAccum += txtSpotLightValue(norm, txtSpotLights["+t+"], txtSpotLightsTxt2D"+t+");\n"}s=u+"   return lightAccum;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
i_:function(a){var u
if(this.dx>0)return
u=a.a+="// === No Lights ===\n"
u+="\n"
a.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
u+="   return lightValue(norm, vec3(1.0, 1.0, 1.0), vec3(0.0, 0.0, 1.0));\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
i:function(a){return this.am}}
A.cD.prototype={}
A.cG.prototype={}
A.cE.prototype={}
A.cH.prototype={}
A.cF.prototype={}
A.cI.prototype={}
A.cv.prototype={
aR:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
b_:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.d3(b,35633)
r.f=r.d3(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.z(H.kO(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.t(P.q("Failed to link shader: "+H.l(s)))}r.hu()
r.hw()},
G:function(a){a.a.useProgram(this.r)
this.x.is()},
d3:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.z(H.kO(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.j(P.q("Error compiling shader '"+H.l(s)+"': "+H.l(u)))}return s},
hu:function(){var u,t,s,r=this,q=H.c([],[A.d1]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d1(p,t.name,s))}r.x=new A.f3(q)},
hw:function(){var u,t,s,r=this,q=H.c([],[A.dW]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.ip(t.type,t.size,t.name,s))}r.y=new A.ib(q)},
aI:function(a,b,c){var u=this.a
if(a===1)return new A.G(u,b,c)
else return A.jE(u,this.r,b,a,c)},
eR:function(a,b,c){var u=this.a
if(a===1)return new A.a3(u,b,c)
else return A.jE(u,this.r,b,a,c)},
eS:function(a,b,c){var u=this.a
if(a===1)return new A.ah(u,b,c)
else return A.jE(u,this.r,b,a,c)},
bg:function(a,b){return new P.ee(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
ip:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aI(b,c,d)
case 5121:return u.aI(b,c,d)
case 5122:return u.aI(b,c,d)
case 5123:return u.aI(b,c,d)
case 5124:return u.aI(b,c,d)
case 5125:return u.aI(b,c,d)
case 5126:return new A.S(u.a,c,d)
case 35664:return new A.ap(u.a,c,d)
case 35665:return new A.K(u.a,c,d)
case 35666:return new A.cC(u.a,c,d)
case 35667:return new A.i8(u.a,c,d)
case 35668:return new A.i9(u.a,c,d)
case 35669:return new A.ia(u.a,c,d)
case 35674:return new A.ic(u.a,c,d)
case 35675:return new A.bV(u.a,c,d)
case 35676:return new A.a2(u.a,c,d)
case 35678:return u.eR(b,c,d)
case 35680:return u.eS(b,c,d)
case 35670:throw H.j(u.bg("BOOL",c))
case 35671:throw H.j(u.bg("BOOL_VEC2",c))
case 35672:throw H.j(u.bg("BOOL_VEC3",c))
case 35673:throw H.j(u.bg("BOOL_VEC4",c))
default:throw H.j(P.q("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bM.prototype={
i:function(a){return this.b}}
A.bn.prototype={
i:function(a){return this.b}}
A.dK.prototype={}
A.dP.prototype={
er:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.b_(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.lU(a,b))
p.z=p.x.j(0,"posAttr")
p.Q=H.d(p.y.m(0,"txtCount"),"$iG")
p.ch=H.d(p.y.m(0,"backClr"),"$icC")
p.shQ(H.c([],[A.a3]))
p.seP(H.c([],[A.a2]))
u=[A.ap]
p.shA(H.c([],u))
p.shB(H.c([],u))
p.seU(H.c([],u))
p.seV(H.c([],u))
p.sf4(H.c([],[A.G]))
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.j(0,r)
if(q==null)H.t(P.q(o+r+n));(u&&C.a).h(u,H.d(q,"$ia3"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.j(0,r)
if(q==null)H.t(P.q(o+r+n));(u&&C.a).h(u,H.d(q,"$ia2"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.j(0,r)
if(q==null)H.t(P.q(o+r+n));(u&&C.a).h(u,H.d(q,"$iap"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.j(0,r)
if(q==null)H.t(P.q(o+r+n));(u&&C.a).h(u,H.d(q,"$iap"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.j(0,r)
if(q==null)H.t(P.q(o+r+n));(u&&C.a).h(u,H.d(q,"$iap"))
u=p.fr
s=p.y
r="destSize"+t
q=s.j(0,r)
if(q==null)H.t(P.q(o+r+n));(u&&C.a).h(u,H.d(q,"$iap"))
u=p.fx
s=p.y
r="flip"+t
q=s.j(0,r)
if(q==null)H.t(P.q(o+r+n));(u&&C.a).h(u,H.d(q,"$iG"))}},
shQ:function(a){this.cx=H.i(a,"$ib",[A.a3],"$ab")},
seP:function(a){this.cy=H.i(a,"$ib",[A.a2],"$ab")},
shA:function(a){this.db=H.i(a,"$ib",[A.ap],"$ab")},
shB:function(a){this.dx=H.i(a,"$ib",[A.ap],"$ab")},
seU:function(a){this.dy=H.i(a,"$ib",[A.ap],"$ab")},
seV:function(a){this.fr=H.i(a,"$ib",[A.ap],"$ab")},
sf4:function(a){this.fx=H.i(a,"$ib",[A.G],"$ab")}}
A.dW.prototype={}
A.ib.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
m:function(a,b){var u=this.j(0,b)
if(u==null)throw H.j(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.K()},
K:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.G.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.i8.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.i9.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.ia.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.i7.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
shR:function(a){H.i(a,"$ib",[P.A],"$ab")}}
A.S.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.ap.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.K.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.cC.prototype={
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.ic.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.bV.prototype={
a7:function(a){var u=new Float32Array(H.bW(H.i(a,"$ib",[P.x],"$ab")))
C.b.ec(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.a2.prototype={
a7:function(a){var u=new Float32Array(H.bW(H.i(a,"$ib",[P.x],"$ab")))
C.b.cC(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.a3.prototype={
ei:function(a){var u=a==null||!a.d,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.ah.prototype={
cG:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.j8.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cq(s.b,b).cq(s.d.cq(s.c,b),c)
s=new V.ak(r.a,r.b,r.c)
if(!J.P(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a9()}a.sb6(r.u(0,Math.sqrt(r.C(r))))
s=1-b
u=1-c
u=new V.bd(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.P(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a9()}},
$S:35}
F.a6.prototype={
eJ:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.e4()
if(q!=null)s=s.F(0,q)
if(u!=null)s=s.F(0,u)
if(t!=null)s=s.F(0,t)
if(s.dU())return
return s.u(0,Math.sqrt(s.C(s)))},
eN:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.I(0,q)
r=new V.O(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.C(r)))
r=t.I(0,q)
r=new V.O(r.a,r.b,r.c)
r=s.aY(r.u(0,Math.sqrt(r.C(r))))
return r.u(0,Math.sqrt(r.C(r)))},
c9:function(){var u,t=this
if(t.d!=null)return!0
u=t.eJ()
if(u==null){u=t.eN()
if(u==null)return!1}t.d=u
t.a.a.a9()
return!0},
eI:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.e4()
if(q!=null)s=s.F(0,q)
if(u!=null)s=s.F(0,u)
if(t!=null)s=s.F(0,t)
if(s.dU())return
return s.u(0,Math.sqrt(s.C(s)))},
eM:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.H().a){l=d.I(0,g)
l=new V.O(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.I(0,g)
l=new V.ak(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).I(0,j)
l=new V.O(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.C(l)))
l=o.aY(q)
l=l.u(0,Math.sqrt(l.C(l))).aY(o)
q=l.u(0,Math.sqrt(l.C(l)))}return q},
c7:function(){var u,t=this
if(t.e!=null)return!0
u=t.eI()
if(u==null){u=t.eM()
if(u==null)return!1}t.e=u
t.a.a.a9()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
B:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.j.aj(J.au(s.e),0)+", "+C.j.aj(J.au(t.b.e),0)+", "+C.j.aj(J.au(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
K:function(){return this.B("")}}
F.b7.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
B:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.j.aj(J.au(u.e),0)+", "+C.j.aj(J.au(this.b.e),0)},
K:function(){return this.B("")}}
F.by.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
B:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.j.aj(J.au(u.e),0)},
K:function(){return this.B("")}}
F.dI.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.F():u},
iB:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.a2()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.C)(g),++s){r=g[s]
h.a.h(0,r.io())}h.a.a2()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.C)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.a2()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.by()
if(n.a==null)H.t(P.q("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.v(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.C)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.a2()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.a2()
p=p.e
if(typeof p!=="number")return p.F()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.lw(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.C)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.a2()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.a2()
p=p.e
if(typeof p!=="number")return p.F()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.a2()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cg(l,k,i)}g=h.e
if(g!=null)g.aC(0)},
ay:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ay()||!1
if(!t.a.ay())u=!1
s=t.e
if(s!=null)s.aC(0)
return u},
aX:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.ae()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bk().a)!==0)++s
if((t&$.bj().a)!==0)++s
if((t&$.aG().a)!==0)++s
if((t&$.bl().a)!==0)++s
if((t&$.d_().a)!==0)++s
if((t&$.d0().a)!==0)++s
if((t&$.c4().a)!==0)++s
if((t&$.bi().a)!==0)++s
r=a3.gcI(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.x
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.d4])
for(n=0,m=0;m<s;++m){l=a3.ij(m)
k=l.gcI(l)
C.a.a6(o,m,new Z.d4(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.h(u,j)
i=u[j].iz(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.a6(p,h,i[g]);++h}}n+=k}H.i(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.bW(p)),35044)
u.bindBuffer(a0,null)
e=new Z.aI(new Z.e5(a0,f),o,a3)
e.sf6(H.c([],[Z.bt]))
if(a.b.b.length!==0){t=P.A
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.a2()
C.a.h(d,c.e)}b=Z.jF(u,34963,H.i(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bt(0,d.length,b))}if(a.c.b.length!==0){t=P.A
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.a2()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.a2()
C.a.h(d,c.e)}b=Z.jF(u,34963,H.i(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bt(1,d.length,b))}if(a.d.b.length!==0){t=P.A
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.a2()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.a2()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].c
c.a.a.a2()
C.a.h(d,c.e)}b=Z.jF(u,34963,H.i(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bt(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.o])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.B(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.B(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.B(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.B(t))}return C.a.A(s,"\n")},
a9:function(){var u=this.e
if(u!=null)u.v(null)},
$imR:1}
F.hA.prototype={
ih:function(a){var u,t,s,r,q,p
H.i(a,"$ib",[F.at],"$ab")
u=H.c([],[F.a6])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.cg(t,q,p))}return u},
ii:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.i(c,"$ib",[F.at],"$ab")
u=H.c([],[F.a6])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.h(c,r)
l=c[r];++r
if(r>=m)return H.h(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.h(c,j)
i=c[j]
if(s<0||s>=m)return H.h(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.cg(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cg(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cg(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cg(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
ay:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].c9())s=!1
return s},
c8:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].c7())s=!1
return s},
i:function(a){return this.K()},
B:function(a){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].B(a))
return C.a.A(r,"\n")},
K:function(){return this.B("")},
sf_:function(a){this.b=H.i(a,"$ib",[F.a6],"$ab")}}
F.hB.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.K()},
B:function(a){var u,t,s=H.c([],[P.o]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.h(t,u)
C.a.h(s,t[u].B(a+(""+u+". ")))}return C.a.A(s,"\n")},
K:function(){return this.B("")},
sf8:function(a){this.b=H.i(a,"$ib",[F.b7],"$ab")}}
F.hC.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.K()},
B:function(a){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].B(a))
return C.a.A(r,"\n")},
K:function(){return this.B("")},
sbU:function(a){this.b=H.i(a,"$ib",[F.by],"$ab")}}
F.at.prototype={
cb:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.il(u.cx,r,o,t,s,q,p,a,n)},
io:function(){return this.cb(null)},
sb6:function(a){var u
if(!J.P(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a9()}},
iz:function(a){var u,t,s=this
if(a.q(0,$.ae())){u=s.f
t=[P.x]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.bk())){u=s.r
t=[P.x]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.bj())){u=s.x
t=[P.x]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.aG())){u=s.y
t=[P.x]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.q(0,$.bl())){u=s.z
t=[P.x]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.d_())){u=s.Q
t=[P.x]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.d0())){u=s.Q
t=[P.x]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.c4()))return H.c([s.ch],[P.x])
else if(a.q(0,$.bi())){u=s.cx
t=[P.x]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.x])},
c9:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.e4()
t.d.R(0,new F.iu(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a9()
s=t.a.e
if(s!=null)s.aC(0)}return!0},
c7:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.e4()
t.d.R(0,new F.it(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a9()
s=t.a.e
if(s!=null)s.aC(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
B:function(a){var u,t,s=this,r="-",q=H.c([],[P.o])
C.a.h(q,C.j.aj(J.au(s.e),0))
u=s.f
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.r
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.x
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.y
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.z
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.Q
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
C.a.h(q,V.M(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.A(q,", ")
return a+"{"+t+"}"},
K:function(){return this.B("")}}
F.iu.prototype={
$1:function(a){var u,t
H.k(a,"$ia6")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.F(0,u)}},
$S:5}
F.it.prototype={
$1:function(a){var u,t
H.k(a,"$ia6")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.F(0,u)}},
$S:5}
F.im.prototype={
a2:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.j(P.q("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a9()
return!0},
bh:function(a,b,c,d,e,f){var u=F.il(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gk:function(a){return this.c.length},
ay:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].c9()
return!0},
c8:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].c7()
return!0},
il:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.P(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.v(null)}}}}return!0},
i:function(a){return this.K()},
B:function(a){var u,t,s,r
this.a2()
u=H.c([],[P.o])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].B(a))
return C.a.A(u,"\n")},
K:function(){return this.B("")},
shS:function(a){this.c=H.i(a,"$ib",[F.at],"$ab")}}
F.io.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
R:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a6]})
C.a.R(u.b,b)
C.a.R(u.c,new F.ip(u,b))
C.a.R(u.d,new F.iq(u,b))},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].B(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].B(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].B(""))
return C.a.A(r,"\n")},
sf0:function(a){this.b=H.i(a,"$ib",[F.a6],"$ab")},
sf1:function(a){this.c=H.i(a,"$ib",[F.a6],"$ab")},
sf2:function(a){this.d=H.i(a,"$ib",[F.a6],"$ab")}}
F.ip.prototype={
$1:function(a){H.k(a,"$ia6")
if(!J.P(a.a,this.a))this.b.$1(a)},
$S:5}
F.iq.prototype={
$1:function(a){var u
H.k(a,"$ia6")
u=this.a
if(!J.P(a.a,u)&&!J.P(a.b,u))this.b.$1(a)},
$S:5}
F.ir.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].B(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].B(""))
return C.a.A(r,"\n")},
sf9:function(a){this.b=H.i(a,"$ib",[F.b7],"$ab")},
sfa:function(a){this.c=H.i(a,"$ib",[F.b7],"$ab")}}
F.is.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].B(""))
return C.a.A(r,"\n")},
sbU:function(a){this.b=H.i(a,"$ib",[F.by],"$ab")}}
O.fn.prototype={
gl:function(){var u=this.f
return u==null?this.f=D.F():u},
n:function(a){var u=this.f
if(u!=null)u.v(a)},
a5:function(a,b){},
b4:function(a,b){var u,t,s,r,q,p=this,o="Depth",n=p.a
if(n==null){u=H.k(a.fr.j(0,o),"$ida")
if(u==null){n=a.a
u=new A.da(n,o)
u.aR(n,o)
u.b_(0,"uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n","precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.d(u.y.j(0,"objClr"),"$iK")
u.ch=H.d(u.y.j(0,"fogClr"),"$iK")
u.cx=H.d(u.y.j(0,"fogStart"),"$iS")
u.cy=H.d(u.y.j(0,"fogStop"),"$iS")
u.db=H.d(u.y.j(0,"viewObjMat"),"$ia2")
u.dx=H.d(u.y.j(0,"projMat"),"$ia2")
a.aV(u)}p.a=u
n=u}t=b.e
if((!(t instanceof Z.aI)?b.e=null:t)==null){n=b.d.aX(new Z.bD(a.a),$.ae())
t=n.ad($.ae())
s=p.a
t.e=s.z.c
b.e=n
n=s}n.G(a)
t=p.b
s=n.Q
s.toString
r=t.a
q=t.b
t=t.c
C.b.p(s.a,s.d,r,q,t)
t=p.c
q=n.ch
q.toString
r=t.a
s=t.b
t=t.c
C.b.p(q.a,q.d,r,s,t)
t=p.d
s=n.cx
C.b.D(s.a,s.d,t)
t=p.e
s=n.cy
C.b.D(s.a,s.d,t)
t=a.cy
t=t.gS(t)
s=n.dx
s.toString
s.a7(t.a1(0,!0))
t=a.ged()
n=n.db
n.toString
n.a7(t.a1(0,!0))
t=b.e
t.G(a)
t.Y(a)
t.a4(a)
t=p.a
t.toString
a.a.useProgram(null)
t.x.aZ()}}
O.dk.prototype={
gl:function(){var u=this.x
return u==null?this.x=D.F():u},
n:function(a){var u
H.k(a,"$iu")
u=this.x
if(u!=null)u.v(a)},
a8:function(){return this.n(null)},
sc6:function(a){var u=this.r
if(!(Math.abs(u-a)<$.H().a)){this.r=a
u=new D.v("blurValue",u,a,[P.x])
u.b=!0
this.n(u)}},
sdt:function(a){var u,t=this,s=t.e
if(s!=a){if(s!=null)s.gl().N(0,t.ga_())
u=t.e
t.e=a
if(a!=null)a.gl().h(0,t.ga_())
s=new D.v("colorTexture",u,t.e,[T.bU])
s.b=!0
t.n(s)}},
sc5:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gl().N(0,s.ga_())
u=s.f
s.f=a
if(a!=null)a.gl().h(0,s.ga_())
r=new D.v("blurTexture",u,s.f,[T.bU])
t=r.b=!0
s.n(r)
r=s.f==null
if(!(r&&u!=null))r=!r&&u==null
else r=t
if(r){s.a=null
s.n(null)}}},
scA:function(a){var u,t=this,s=$.k8
if(s==null){s=new V.bP(1,0,0,0,1,0,0,0,1)
$.k8=s
a=s}else a=s
if(!J.P(t.b,a)){u=t.b
t.b=a
s=new D.v("textureMatrix",u,a,[V.bP])
s.b=!0
t.n(s)}},
sc4:function(a){var u,t,s=this
if(a==null){u=$.kB
if(u==null){u=new V.bC(1,0,0,0)
$.kB=u
a=u}else a=u}if(!J.P(s.c,a)){t=s.c
s.c=a
u=new D.v("blurAdjust",t,a,[V.bC])
u.b=!0
s.n(u)}},
a5:function(a,b){},
P:function(a,b){H.i(a,"$ib",[T.bf],"$ab")
if(b!=null)if(!C.a.al(a,b)){b.a=a.length
C.a.h(a,b)}},
b4:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a
if(g==null){u=h.f!=null
g="GaussianBlur_"+(u?"1":"0")
t=g.charCodeAt(0)==0?g:g
s=H.k(a.fr.j(0,t),"$idj")
if(s==null){g=a.a
s=new A.dj(g,t)
s.aR(g,t)
r=s.z=new A.fH(u,t)
q=new P.be("")
q.a="precision mediump float;\n"
q.a="precision mediump float;\n\n"
q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\n"
q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform int nullColorTxt;\n"
if(u){q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform int nullColorTxt;\nuniform sampler2D blurTxt;\n"
q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform int nullColorTxt;\nuniform sampler2D blurTxt;\nuniform int nullBlurTxt;\n"
g=q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform int nullColorTxt;\nuniform sampler2D blurTxt;\nuniform int nullBlurTxt;\nuniform vec4 blurAdj;\n"}else g=q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform int nullColorTxt;\nuniform float blurValue;\n"
g+="uniform vec2 blurScale;\n"
q.a=g
g+="\n"
q.a=g
g+="varying vec2 txt2D;\n"
q.a=g
q.a=g+"\n"
g=[P.x]
r.aH(q,3,H.c([0.75],g),H.c([0.5],g))
r.aH(q,6,H.c([0.42857,2.14286],g),H.c([0.41667,0.08333],g))
r.aH(q,9,H.c([0,1.8],g),H.c([0.5122,0.2439],g))
r.aH(q,12,H.c([0,1.38462,3.23077],g),H.c([0.22703,0.31622,0.07027],g))
r.aH(q,15,H.c([0.9375,2.8125],g),H.c([0.36184,0.13816],g))
r.aH(q,18,H.c([0.47368,2.36842,4.26316],g),H.c([0.29916,0.16318,0.03766],g))
g=q.a+="void main()\n"
g=q.a=g+"{\n"
g=(u?q.a=g+"   if((nullColorTxt > 0) || (nullBlurTxt > 0))\n":q.a=g+"   if(nullColorTxt > 0)\n")+"   {\n"
q.a=g
g+="      gl_FragColor = vec4(1.0);\n"
q.a=g
g+="      return;\n"
q.a=g
g+="   }\n"
q.a=g
g=q.a=g+"\n"
g=(u?q.a=g+"   float blurValue = dot(texture2D(blurTxt, txt2D), blurAdj);\n":g)+"   float blurOffset = abs(blurValue);\n"
q.a=g
g+="\n"
q.a=g
g+="   if     (blurOffset < 0.15) gl_FragColor = texture2D(colorTxt, txt2D);\n"
q.a=g
g+="   else if(blurOffset < 0.3)  gl_FragColor = blur3();\n"
q.a=g
g+="   else if(blurOffset < 0.45) gl_FragColor = blur6();\n"
q.a=g
g+="   else if(blurOffset < 0.6)  gl_FragColor = blur9();\n"
q.a=g
g+="   else if(blurOffset < 0.75) gl_FragColor = blur12();\n"
q.a=g
g+="   else if(blurOffset < 0.9)  gl_FragColor = blur15();\n"
q.a=g
g+="   else                       gl_FragColor = blur18();\n"
q.a=g
g=q.a=g+"}\n"
s.b_(0,"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n":"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n",g.charCodeAt(0)==0?g:g)
s.Q=s.x.j(0,"posAttr")
s.ch=s.x.j(0,"txtAttr")
s.cx=H.d(s.y.j(0,"projViewObjMat"),"$ia2")
s.cy=H.d(s.y.j(0,"txt2DMat"),"$ibV")
s.dy=H.d(s.y.j(0,"colorTxt"),"$ia3")
s.fr=H.d(s.y.j(0,"nullColorTxt"),"$iG")
s.dx=H.d(s.y.j(0,"blurScale"),"$iap")
g=s.y
if(u){s.fx=H.d(g.j(0,"blurTxt"),"$ia3")
s.fy=H.d(s.y.j(0,"nullBlurTxt"),"$iG")
s.db=H.d(s.y.j(0,"blurAdj"),"$icC")}else s.go=H.d(g.j(0,"blurValue"),"$iS")
a.aV(s)}g=h.a=s
b.e=null}r=g.z
g=b.e
if((!(g instanceof Z.aI)?b.e=null:g)==null){g=b.d
p=$.ae()
o=$.aG()
o=g.aX(new Z.bD(a.a),new Z.aF(p.a|o.a))
o.ad($.ae()).e=h.a.Q.c
o.ad($.aG()).e=h.a.ch.c
b.e=o}n=H.c([],[T.bf])
h.P(n,h.e)
g=r.a
if(g)h.P(n,h.f)
for(m=0;m<n.length;++m)n[m].G(a)
p=h.a
p.G(a)
o=h.e
p.ac(p.dy,p.fr,o)
o=h.b
l=p.cy
l.toString
l.a7(o.a1(0,!0))
o=h.d
l=o.a
k=a.c
if(typeof l!=="number")return l.u()
o=o.b
j=a.d
if(typeof o!=="number")return o.u()
i=p.dx
C.b.b9(i.a,i.d,l/k,o/j)
j=a.ge5()
p=p.cx
p.toString
p.a7(j.a1(0,!0))
p=h.a
if(g){g=h.f
p.ac(p.fx,p.fy,g)
g=h.c
p=p.db
p.toString
o=g.a
l=g.b
k=g.c
g=g.d
C.b.eb(p.a,p.d,o,l,k,g)}else{g=h.r
p=p.go
C.b.D(p.a,p.d,g)}g=b.e
if(g instanceof Z.aI){g.G(a)
g.Y(a)
g.a4(a)}else b.e=null
g=h.a
g.toString
p=a.a
p.useProgram(null)
g.x.aZ()
for(m=0;m<n.length;++m){g=n[m]
if(g.c){g.c=!1
p.activeTexture(33984+g.a)
p.bindTexture(3553,null)}}}}
O.dx.prototype={
gl:function(){var u=this.dy
return u==null?this.dy=D.F():u},
n:function(a){var u
H.k(a,"$iu")
u=this.dy
if(u!=null)u.v(a)},
a8:function(){return this.n(null)},
df:function(a){H.k(a,"$iu")
this.a=null
this.n(a)},
hn:function(){return this.df(null)},
fn:function(a,b){var u=V.a1
H.i(b,"$ie",[u],"$ae")
u=new D.bu([u])
u.b=!0
this.n(u)},
fp:function(a,b){var u=V.a1
H.i(b,"$ie",[u],"$ae")
u=new D.bv([u])
u.b=!0
this.n(u)},
d0:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.f.a3(a1.e.length+3,4)*4,a3=C.f.a3(a1.f.length+3,4)*4,a4=C.f.a3(a1.r.length+3,4)*4,a5=C.f.a3(a1.x.length+3,4)*4,a6=C.f.a3(a1.y.length+3,4)*4,a7=C.f.a3(a1.z.length+3,4)*4,a8=C.f.a3(a0.e.a.length+3,4)*4
a1=a0.f.c
u=a0.r.c
t=a0.x.c
s=a0.y.c
r=a0.z.c
q=a0.Q.c
p=a0.cx.c
o=a0.cy.c
n=a0.db.c
m="MaterialLight_"+C.f.i(a1.a)+C.f.i(u.a)+C.f.i(t.a)+C.f.i(s.a)+C.f.i(r.a)+C.f.i(q.a)+C.f.i(p.a)+C.f.i(o.a)+C.f.i(n.a)
m+"_"
m+"_0"
m+"_00"
m+"_000"
m=m+"_000_"+a8+"_"+a2+"_"+a3+"_"+a4+"_"+a5+"_"+a6+"_"+a7
l=p!==C.c||o!==C.c
k=u!==C.c||t!==C.c||s!==C.c||r!==C.c
j=r===C.c
i=!j||a3+a6>0||l
h=t!==C.c||s!==C.c||!j||q!==C.c||l
j=q===C.c
g=!j
f=a1===C.e||u===C.e||t===C.e||s===C.e||r===C.e||q===C.e||p===C.e||o===C.e||n===C.e
e=a1===C.d||u===C.d||t===C.d||s===C.d||r===C.d||q===C.d||p===C.d||o===C.d||n===C.d
d=a3+a6+a5+a4+a7>0
c=a8>0
b=h||!j||i
a=$.ae()
if(h){j=$.bk()
a=new Z.aF(a.a|j.a)}if(g){j=$.bj()
a=new Z.aF(a.a|j.a)}if(f){j=$.aG()
a=new Z.aF(a.a|j.a)}if(e){j=$.bl()
a=new Z.aF(a.a|j.a)}if(c){j=$.bi()
a=new Z.aF(a.a|j.a)}return new A.h0(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
P:function(a,b){H.i(a,"$ib",[T.bf],"$ab")
if(b!=null)if(!C.a.al(a,b)){b.a=a.length
C.a.h(a,b)}},
a5:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.al(u,u.length,[H.y(u,0)]);u.w();){t=u.d
t.toString
s=$.ik
if(s==null)s=$.ik=new V.O(0,0,1)
t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cB(s)}}},
b4:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a
if(a2==null){a2=a1.d0()
u=H.k(a3.fr.j(0,a2.am),"$idy")
if(u==null){u=A.lB(a2,a3.a)
a3.aV(u)}a2=a1.a=u
a4.e=null}t=a2.z
s=t.bi
a2=a4.e
if(!(a2 instanceof Z.aI))a2=a4.e=null
if(a2==null||!a2.d.q(0,s)){a2=t.r1
if(a2)a4.d.ay()
r=t.r2
if(r){q=a4.d
p=q.e
if(p!=null)++p.d
q.d.c8()
q.a.c8()
q=q.e
if(q!=null)q.aC(0)}q=t.ry
if(q){p=a4.d
o=p.e
if(o!=null)++o.d
p.a.il()
p=p.e
if(p!=null)p.aC(0)}n=a4.d.aX(new Z.bD(a3.a),s)
n.ad($.ae()).e=a1.a.Q.c
if(a2)n.ad($.bk()).e=a1.a.cx.c
if(r)n.ad($.bj()).e=a1.a.ch.c
if(t.rx)n.ad($.aG()).e=a1.a.cy.c
if(q)n.ad($.bl()).e=a1.a.db.c
if(t.x1)n.ad($.bi()).e=a1.a.dx.c
a4.e=n}a2=T.bf
m=H.c([],[a2])
a1.a.G(a3)
if(t.fx){r=a1.a
q=a3.dx
q=q.gS(q)
r=r.dy
r.toString
r.a7(q.a1(0,!0))}if(t.fy){r=a1.a
q=a3.ged()
r=r.fr
r.toString
r.a7(q.a1(0,!0))}r=a1.a
q=a3.ge5()
r=r.fy
r.toString
r.a7(q.a1(0,!0))
if(t.x2){r=a1.a
q=a1.b
r=r.k1
r.toString
r.a7(C.p.a1(q,!0))}if(t.y1){r=a1.a
q=a1.c
r=r.k2
r.toString
r.a7(C.p.a1(q,!0))}if(t.y2){r=a1.a
q=a1.d
r=r.k3
r.toString
r.a7(C.p.a1(q,!0))}if(t.aq>0){l=a1.e.a.length
r=a1.a.k4
C.b.X(r.a,r.d,l)
for(r=[P.x],k=0;k<l;++k){q=a1.a
p=a1.e.a
if(k>=p.length)return H.h(p,k)
p=p[k]
q.toString
H.k(p,"$ia1")
q=q.r1
if(k>=q.length)return H.h(q,k)
q=q[k]
j=new Float32Array(H.bW(H.i(p.a1(0,!0),"$ib",r,"$ab")))
C.b.cC(q.a,q.d,!1,j)}}switch(t.a){case C.c:break
case C.h:r=a1.a
q=a1.f.f
r=r.r2
r.toString
p=q.a
o=q.b
q=q.c
C.b.p(r.a,r.d,p,o,q)
break
case C.e:a1.P(m,a1.f.d)
r=a1.a
q=a1.f.d
r.ac(r.rx,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.b.p(q.a,q.d,p,o,r)
break
case C.d:a1.P(m,a1.f.e)
r=a1.a
q=a1.f.e
r.ag(r.ry,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.b.p(q.a,q.d,p,o,r)
break}if(t.k2){switch(t.b){case C.c:break
case C.h:r=a1.a
q=a1.r.f
r=r.x2
r.toString
p=q.a
o=q.b
q=q.c
C.b.p(r.a,r.d,p,o,q)
break
case C.e:a1.P(m,a1.r.d)
r=a1.a
q=a1.r.d
r.ac(r.y1,r.aq,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.b.p(q.a,q.d,p,o,r)
break
case C.d:a1.P(m,a1.r.e)
r=a1.a
q=a1.r.e
r.ag(r.y2,r.aq,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.b.p(q.a,q.d,p,o,r)
break}switch(t.c){case C.c:break
case C.h:r=a1.a
q=a1.x.f
r=r.am
r.toString
p=q.a
o=q.b
q=q.c
C.b.p(r.a,r.d,p,o,q)
break
case C.e:a1.P(m,a1.x.d)
r=a1.a
q=a1.x.d
r.ac(r.bi,r.bj,q)
q=a1.a
r=a1.x.f
q=q.am
q.toString
p=r.a
o=r.b
r=r.c
C.b.p(q.a,q.d,p,o,r)
break
case C.d:a1.P(m,a1.x.e)
r=a1.a
q=a1.x.e
r.ag(r.dz,r.bj,q)
q=a1.a
r=a1.x.f
q=q.am
q.toString
p=r.a
o=r.b
r=r.c
C.b.p(q.a,q.d,p,o,r)
break}switch(t.d){case C.c:break
case C.h:r=a1.a
q=a1.y.f
r=r.bk
r.toString
p=q.a
o=q.b
q=q.c
C.b.p(r.a,r.d,p,o,q)
break
case C.e:a1.P(m,a1.y.d)
r=a1.a
q=a1.y.d
r.ac(r.dA,r.bl,q)
q=a1.a
r=a1.y.f
q=q.bk
q.toString
p=r.a
o=r.b
r=r.c
C.b.p(q.a,q.d,p,o,r)
break
case C.d:a1.P(m,a1.y.e)
r=a1.a
q=a1.y.e
r.ag(r.dB,r.bl,q)
q=a1.a
r=a1.y.f
q=q.bk
q.toString
p=r.a
o=r.b
r=r.c
C.b.p(q.a,q.d,p,o,r)
break}switch(t.e){case C.c:break
case C.h:r=a1.a
q=a1.z.f
r=r.bm
r.toString
p=q.a
o=q.b
q=q.c
C.b.p(r.a,r.d,p,o,q)
q=a1.a
o=a1.z.ch
q=q.bo
C.b.D(q.a,q.d,o)
break
case C.e:a1.P(m,a1.z.d)
r=a1.a
q=a1.z.d
r.ac(r.dC,r.bn,q)
q=a1.a
r=a1.z.f
q=q.bm
q.toString
p=r.a
o=r.b
r=r.c
C.b.p(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bo
C.b.D(r.a,r.d,o)
break
case C.d:a1.P(m,a1.z.e)
r=a1.a
q=a1.z.e
r.ag(r.dD,r.bn,q)
q=a1.a
r=a1.z.f
q=q.bm
q.toString
p=r.a
o=r.b
r=r.c
C.b.p(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bo
C.b.D(r.a,r.d,o)
break}if(t.z>0){l=a1.dx.e.length
r=a1.a.dO
C.b.X(r.a,r.d,l)
r=a3.db
i=r.gS(r)
for(r=a1.dx.e,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.C)(r),++g){f=r[g]
p=a1.a.cf
if(h>=p.length)return H.h(p,h)
e=p[h]
p=i.cB(f.a)
o=p.a
d=p.b
c=p.c
c=p.u(0,Math.sqrt(o*o+d*d+c*c))
d=e.b
o=c.a
p=c.b
c=c.c
C.b.p(d.a,d.d,o,p,c)
c=f.c
p=e.c
C.b.p(p.a,p.d,c.a,c.b,c.c);++h}}if(t.Q>0){l=a1.dx.f.length
r=a1.a.dP
C.b.X(r.a,r.d,l)
r=a3.db
i=r.gS(r)
for(r=a1.dx.f,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.C)(r),++g){f=r[g]
p=a1.a.cg
if(h>=p.length)return H.h(p,h)
e=p[h]
p=f.gb3(f)
o=e.b
C.b.p(o.a,o.d,p.a,p.b,p.c)
p=i.b8(f.gb3(f))
o=e.c
C.b.p(o.a,o.d,p.a,p.b,p.c)
p=f.gap(f)
o=e.d
C.b.p(o.a,o.d,p.a,p.b,p.c)
p=f.gc0()
o=e.e
C.b.D(o.a,o.d,p)
p=f.gc1()
o=e.f
C.b.D(o.a,o.d,p)
p=f.gc2()
o=e.r
C.b.D(o.a,o.d,p);++h}}if(t.ch>0){l=a1.dx.r.length
r=a1.a.dQ
C.b.X(r.a,r.d,l)
r=a3.db
i=r.gS(r)
for(r=a1.dx.r,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.C)(r),++g){f=r[g]
p=a1.a.ci
if(h>=p.length)return H.h(p,h)
e=p[h]
p=f.gb3(f)
o=e.b
C.b.p(o.a,o.d,p.a,p.b,p.c)
p=f.gcd(f).j4()
o=e.c
C.b.p(o.a,o.d,p.a,p.b,p.c)
p=i.b8(f.gb3(f))
o=e.d
C.b.p(o.a,o.d,p.a,p.b,p.c)
p=f.gap(f)
o=e.e
C.b.p(o.a,o.d,p.a,p.b,p.c)
p=f.gj3()
o=e.f
C.b.D(o.a,o.d,p)
p=f.gj2()
o=e.r
C.b.D(o.a,o.d,p)
p=f.gc0()
o=e.x
C.b.D(o.a,o.d,p)
p=f.gc1()
o=e.y
C.b.D(o.a,o.d,p)
p=f.gc2()
o=e.z
C.b.D(o.a,o.d,p);++h}}if(t.cx>0){l=a1.dx.x.length
r=a1.a.dR
C.b.X(r.a,r.d,l)
r=a3.db
i=r.gS(r)
for(r=a1.dx.x,q=r.length,p=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.C)(r),++g){f=r[g]
o=a1.a.cj
if(h>=o.length)return H.h(o,h)
e=o[h]
o=f.gb5()
H.i(m,"$ib",p,"$ab")
if(!C.a.al(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gcd(f)
d=e.d
C.b.p(d.a,d.d,o.a,o.b,o.c)
o=f.gbB()
d=e.b
C.b.p(d.a,d.d,o.a,o.b,o.c)
o=f.gbz(f)
d=e.c
C.b.p(d.a,d.d,o.a,o.b,o.c)
o=i.cB(f.gcd(f))
d=o.a
c=o.b
b=o.c
b=o.u(0,Math.sqrt(d*d+c*c+b*b))
c=e.e
d=b.a
o=b.b
b=b.c
C.b.p(c.a,c.d,d,o,b)
b=f.gap(f)
o=e.f
C.b.p(o.a,o.d,b.a,b.b,b.c)
b=f.gb5()
o=b.gdX(b)
if(!o){o=e.x
C.b.X(o.a,o.d,1)}else{o=e.r
d=b.d
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,b.a)
o=e.x
C.b.X(o.a,o.d,0)}++h}}if(t.cy>0){l=a1.dx.y.length
r=a1.a.dS
C.b.X(r.a,r.d,l)
r=a3.db
i=r.gS(r)
for(r=a1.dx.y,q=r.length,p=[P.x],o=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.C)(r),++g){f=r[g]
d=a1.a.ck
if(h>=d.length)return H.h(d,h)
e=d[h]
d=f.gb5()
H.i(m,"$ib",o,"$ab")
if(!C.a.al(m,d)){d.a=m.length
C.a.h(m,d)}a=i.t(0,f.gS(f))
d=f.gS(f)
c=$.cr
d=d.b8(c==null?$.cr=new V.ak(0,0,0):c)
c=e.b
C.b.p(c.a,c.d,d.a,d.b,d.c)
d=$.cr
d=a.b8(d==null?$.cr=new V.ak(0,0,0):d)
c=e.c
C.b.p(c.a,c.d,d.a,d.b,d.c)
d=a.co(0)
c=e.d
j=new Float32Array(H.bW(H.i(new V.bP(d.a,d.b,d.c,d.e,d.f,d.r,d.y,d.z,d.Q).a1(0,!0),"$ib",p,"$ab")))
C.b.ec(c.a,c.d,!1,j)
c=f.gap(f)
d=e.e
C.b.p(d.a,d.d,c.a,c.b,c.c)
c=f.gb5()
d=c.gdX(c)
if(!d){d=e.r
C.b.X(d.a,d.d,1)}else{d=e.f
b=c.d
a0=d.a
d=d.d
if(b<6)a0.uniform1i(d,0)
else a0.uniform1i(d,c.a)
d=e.r
C.b.X(d.a,d.d,0)}d=f.gc0()
c=e.x
C.b.D(c.a,c.d,d)
d=f.gc1()
c=e.y
C.b.D(c.a,c.d,d)
d=f.gc2()
c=e.z
C.b.D(c.a,c.d,d);++h}}if(t.db>0){l=a1.dx.z.length
r=a1.a.dT
C.b.X(r.a,r.d,l)
r=a3.db
i=r.gS(r)
for(r=a1.dx.z,q=r.length,a2=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.C)(r),++g){f=r[g]
p=a1.a.cl
if(h>=p.length)return H.h(p,h)
e=p[h]
p=f.gb5()
H.i(m,"$ib",a2,"$ab")
if(!C.a.al(m,p)){p.a=m.length
C.a.h(m,p)}p=f.gb3(f)
o=e.b
C.b.p(o.a,o.d,p.a,p.b,p.c)
p=f.gcd(f)
o=e.c
C.b.p(o.a,o.d,p.a,p.b,p.c)
p=f.gbB()
o=e.d
C.b.p(o.a,o.d,p.a,p.b,p.c)
p=f.gbz(f)
o=e.e
C.b.p(o.a,o.d,p.a,p.b,p.c)
p=i.b8(f.gb3(f))
o=e.f
C.b.p(o.a,o.d,p.a,p.b,p.c)
p=f.gb5()
o=p.gdX(p)
if(!o){p=e.x
C.b.X(p.a,p.d,1)}else{o=e.r
d=p.d
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,p.a)
p=e.x
C.b.X(p.a,p.d,0)}p=f.gap(f)
o=e.y
C.b.p(o.a,o.d,p.a,p.b,p.c)
p=f.gj5()
o=e.z
C.b.D(o.a,o.d,p)
p=f.gj6()
o=e.Q
C.b.D(o.a,o.d,p)
p=f.gc0()
o=e.ch
C.b.D(o.a,o.d,p)
p=f.gc1()
o=e.cx
C.b.D(o.a,o.d,p)
p=f.gc2()
o=e.cy
C.b.D(o.a,o.d,p);++h}}}switch(t.f){case C.c:break
case C.h:break
case C.e:a1.P(m,a1.Q.d)
a2=a1.a
r=a1.Q.d
a2.ac(a2.dE,a2.bp,r)
break
case C.d:a1.P(m,a1.Q.e)
a2=a1.a
r=a1.Q.e
a2.ag(a2.dF,a2.bp,r)
break}if(t.fr){a2=a1.a
r=a3.Q
if(r==null){r=a3.db
r=a3.Q=r.gS(r).co(0)}a2=a2.id
a2.toString
a2.a7(r.a1(0,!0))}if(t.dy){a1.P(m,a1.ch)
a2=a1.a
r=a1.ch
a2.ag(a2.dG,a2.dH,r)
switch(t.r){case C.c:break
case C.h:a2=a1.a
r=a1.cx.f
a2=a2.bq
a2.toString
q=r.a
p=r.b
r=r.c
C.b.p(a2.a,a2.d,q,p,r)
break
case C.e:a1.P(m,a1.cx.d)
a2=a1.a
r=a1.cx.d
a2.ac(a2.dI,a2.br,r)
r=a1.a
a2=a1.cx.f
r=r.bq
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.p(r.a,r.d,q,p,a2)
break
case C.d:a1.P(m,a1.cx.e)
a2=a1.a
r=a1.cx.e
a2.ag(a2.dJ,a2.br,r)
r=a1.a
a2=a1.cx.f
r=r.bq
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.p(r.a,r.d,q,p,a2)
break}switch(t.x){case C.c:break
case C.h:a2=a1.a
r=a1.cy.f
a2=a2.bt
a2.toString
q=r.a
p=r.b
r=r.c
C.b.p(a2.a,a2.d,q,p,r)
r=a1.a
p=a1.cy.ch
r=r.bs
C.b.D(r.a,r.d,p)
break
case C.e:a1.P(m,a1.cy.d)
a2=a1.a
r=a1.cy.d
a2.ac(a2.dK,a2.bu,r)
r=a1.a
a2=a1.cy.f
r=r.bt
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.p(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bs
C.b.D(a2.a,a2.d,p)
break
case C.d:a1.P(m,a1.cy.e)
a2=a1.a
r=a1.cy.e
a2.ag(a2.dL,a2.bu,r)
r=a1.a
a2=a1.cy.f
r=r.bt
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.p(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bs
C.b.D(a2.a,a2.d,p)
break}}a2=t.y
r=a2!==C.c
if(r){switch(a2){case C.c:break
case C.h:a2=a1.a
q=a1.db.f
a2=a2.bv
C.b.D(a2.a,a2.d,q)
break
case C.e:a1.P(m,a1.db.d)
a2=a1.a
q=a1.db.d
a2.ac(a2.dM,a2.bw,q)
q=a1.a
a2=a1.db.f
q=q.bv
C.b.D(q.a,q.d,a2)
break
case C.d:a1.P(m,a1.db.e)
a2=a1.a
q=a1.db.e
a2.ag(a2.dN,a2.bw,q)
q=a1.a
a2=a1.db.f
q=q.bv
C.b.D(q.a,q.d,a2)
break}a2=a3.a
a2.enable(3042)
a2.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].G(a3)
a2=a4.e
a2.G(a3)
a2.Y(a3)
a2.a4(a3)
if(r)a3.a.disable(3042)
for(a2=a3.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
a2.activeTexture(33984+r.a)
a2.bindTexture(34067,null)}}r=a1.a
r.toString
a2.useProgram(null)
r.x.aZ()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d0().am},
seL:function(a){this.e=H.i(a,"$iV",[V.a1],"$aV")}}
O.fZ.prototype={
hq:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.H().a)){u.f=a
t=new D.v(u.b,t,a,[P.x])
t.b=!0
u.a.n(t)}},
ao:function(){this.cO()
this.hq(1)}}
O.cl.prototype={
n:function(a){this.a.n(H.k(a,"$iu"))},
a8:function(){return this.n(null)},
ao:function(){},
hs:function(a){},
ht:function(a){var u,t=this,s=t.e
if(s!=a){if(s!=null)s.gl().N(0,t.ga_())
u=t.e
t.e=a
if(a!=null)a.gl().h(0,t.ga_())
s=new D.v(t.b+".textureCube",u,t.e,[T.cz])
s.b=!0
t.a.n(s)}},
sb6:function(a){var u=this,t=u.c
if(t!==C.d){if(t===C.c)u.ao()
u.c=C.d
u.hs(null)
t=u.a
t.a=null
t.n(null)}u.ht(a)}}
O.h_.prototype={}
O.aS.prototype={
dh:function(a){var u,t,s=this
if(!J.P(s.f,a)){u=s.f
s.f=a
t=new D.v(s.b+".color",u,a,[V.Y])
t.b=!0
s.a.n(t)}},
ao:function(){this.cO()
this.dh(new V.Y(1,1,1))},
sap:function(a,b){var u,t=this
if(t.c===C.c){t.c=C.h
t.ao()
u=t.a
u.a=null
u.n(null)}t.dh(b)}}
O.h1.prototype={
hr:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.H().a)){u.ch=a
t=new D.v(u.b+".refraction",t,a,[P.x])
t.b=!0
u.a.n(t)}},
ao:function(){this.bC()
this.hr(1)}}
O.h2.prototype={
bX:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.H().a)){u.ch=a
t=new D.v(u.b+".shininess",t,a,[P.x])
t.b=!0
u.a.n(t)}},
ao:function(){this.bC()
this.bX(100)}}
O.dJ.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.F():u},
n:function(a){var u
H.k(a,"$iu")
u=this.e
if(u!=null)u.v(a)},
a8:function(){return this.n(null)},
a5:function(a,b){},
b4:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.k(a.fr.j(0,n),"$idK")
if(u==null){t=a.a
u=new A.dK(t,n)
u.aR(t,n)
u.b_(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.d(u.y.j(0,"fov"),"$iS")
u.ch=H.d(u.y.j(0,"ratio"),"$iS")
u.cx=H.d(u.y.j(0,"boxClr"),"$iK")
u.cy=H.d(u.y.j(0,"boxTxt"),"$iah")
u.db=H.d(u.y.j(0,"viewMat"),"$ia2")
a.aV(u)}o.a=u}if(b.e==null){t=b.d.aX(new Z.bD(a.a),$.ae())
t.ad($.ae()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.G(a)}t=a.d
s=a.c
r=o.a
r.G(a)
q=o.b
p=r.Q
C.b.D(p.a,p.d,q)
q=r.ch
C.b.D(q.a,q.d,t/s)
s=o.c
r.cy.cG(s)
s=o.d
t=r.cx
C.b.p(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.gS(s).co(0)
r=r.db
r.toString
r.a7(s.a1(0,!0))
t=b.e
if(t instanceof Z.aI){t.G(a)
t.Y(a)
t.a4(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.aZ()
t=o.c
if(t!=null)t.a4(a)}}
O.bA.prototype={}
O.dO.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.F():u},
n:function(a){var u
H.k(a,"$iu")
u=this.e
if(u!=null)u.v(a)},
a8:function(){return this.n(null)},
fG:function(a,b){var u,t,s,r,q,p,o
H.i(b,"$ie",[O.aC],"$ae")
for(u=b.length,t=this.ga_(),s={func:1,ret:-1,args:[D.u]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.br()
o.saa(null)
o.saL(null)
o.c=null
o.d=0
p.f=o}H.n(t,s)
if(o.a==null)o.saa(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a8()},
fI:function(a,b){var u,t
H.i(b,"$ie",[O.aC],"$ae")
for(u=b.gW(b),t=this.ga_();u.w();)u.gJ(u).gl().N(0,t)
this.a8()},
sdn:function(a){var u=this.f
if(u!==a){this.f=a
u=new D.v("blend",u,a,[A.bn])
u.b=!0
this.n(u)}},
a5:function(a,b){},
f7:function(a){a=C.f.a3(a+3,4)*4
if(a<=0)return 4
return a},
b4:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.f7(h.c.a.length)
if(g!==h.d||h.f!=h.r){h.d=g
h.r=h.f
h.b=null}u=h.b
if(u==null){u=h.f
t="TextureLayout_"+g+"_"+C.f.i(u.a)
s=H.k(a.fr.j(0,t),"$idP")
if(s==null){s=A.lT(g,u,a.a)
a.aV(s)}h.b=s
u=s}if(b.e==null){u=b.d.aX(new Z.bD(a.a),$.ae())
t=u.ad($.ae())
r=h.b
t.e=r.z.c
b.e=u
u=r}u.G(a)
u=T.bf
q=H.c([],[u])
for(t=[P.x],u=[u],p=0,o=0;r=h.c.a,o<r.length;++o){n=r[o]
if(n!=null&&n.a!=null){r=n.a
H.i(q,"$ib",u,"$ab")
if(r!=null)if(!C.a.al(q,r)){r.a=q.length
C.a.h(q,r)}r=h.b
m=n.a
r=r.cx
if(p>=r.length)return H.h(r,p)
r=r[p]
l=m==null||!m.d
k=r.a
r=r.d
if(l)k.uniform1i(r,0)
else k.uniform1i(r,m.a)
r=h.b
m=n.b
r=r.cy
if(p>=r.length)return H.h(r,p)
r=r[p]
if(m==null){m=$.h3
if(m==null){m=new V.a1(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.h3=m}}j=new Float32Array(H.bW(H.i(m.a1(0,!0),"$ib",t,"$ab")))
C.b.cC(r.a,r.d,!1,j)
r=h.b
i=n.c
r.toString
if(i==null){m=$.cu
if(m==null){m=V.ct(0,0,1,1)
$.cu=m
i=m}else i=m}m=r.db
if(p>=m.length)return H.h(m,p)
m=m[p]
C.b.b9(m.a,m.d,i.a,i.b)
r=r.dx
if(p>=r.length)return H.h(r,p)
r=r[p]
C.b.b9(r.a,r.d,i.c,i.d)
r=h.b
i=n.d
r.toString
if(i==null){m=$.cu
if(m==null){m=V.ct(0,0,1,1)
$.cu=m
i=m}else i=m}m=r.dy
if(p>=m.length)return H.h(m,p)
m=m[p]
C.b.b9(m.a,m.d,i.a,i.b)
r=r.fr
if(p>=r.length)return H.h(r,p)
r=r[p]
C.b.b9(r.a,r.d,i.c,i.d)
r=h.b
m=n.e
r=r.fx
if(p>=r.length)return H.h(r,p)
r=r[p]
m=H.z(m)?1:0
C.b.X(r.a,r.d,m);++p}}u=h.b.Q
C.b.X(u.a,u.d,p)
u=h.b
t=h.a
u=u.ch
C.b.eb(u.a,u.d,t.a,t.b,t.c,t.d)
for(o=0;o<q.length;++o)q[o].G(a)
u=b.e
if(u instanceof Z.aI){u.G(a)
u.Y(a)
u.a4(a)}else b.e=null
u=h.b
u.toString
t=a.a
t.useProgram(null)
u.x.aZ()
for(o=0;o<q.length;++o){u=q[o]
if(u.c){u.c=!1
t.activeTexture(33984+u.a)
t.bindTexture(3553,null)}}},
seY:function(a){this.c=H.i(a,"$iV",[O.aC],"$aV")}}
O.aC.prototype={
gl:function(){var u=this.f
return u==null?this.f=D.F():u},
n:function(a){var u
H.k(a,"$iu")
u=this.f
if(u!=null)u.v(a)},
a8:function(){return this.n(null)}}
T.bf.prototype={}
T.bU.prototype={}
T.hV.prototype={
gl:function(){var u=this.y
return u==null?this.y=D.F():u},
G:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}}
T.cz.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.F():u},
G:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
a4:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.hW.prototype={
dW:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.cz()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aJ(u,k,r,34069,!1,!1)
t.aJ(u,k,o,34070,!1,!1)
t.aJ(u,k,q,34071,!1,!1)
t.aJ(u,k,n,34072,!1,!1)
t.aJ(u,k,p,34073,!1,!1)
t.aJ(u,k,m,34074,!1,!1)
return u},
dV:function(a){return this.dW(a,".png")},
aJ:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.m
W.a9(t,"load",H.n(new T.hX(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
ho:function(a,b,c){var u,t,s,r
b=V.cZ(b)
u=V.cZ(a.width)
t=V.cZ(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jr()
s.width=u
s.height=t
r=H.k(C.l.ef(s,"2d"),"$ic9")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.ml(r.getImageData(0,0,s.width,s.height))}}}
T.hX.prototype={
$1:function(a){var u=this,t=u.a,s=t.ho(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.iW(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.ce()}++t.e},
$S:24}
V.f_.prototype={
aP:function(a,b){return!0},
i:function(a){return"all"},
$ib8:1}
V.b8.prototype={}
V.dw.prototype={
aP:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)if(u[s].aP(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saw:function(a){this.a=H.i(a,"$ib",[V.b8],"$ab")},
$ib8:1}
V.ba.prototype={
aP:function(a,b){return!this.el(0,b)},
i:function(a){return"!["+this.cN(0)+"]"}}
V.hz.prototype={
ep:function(a){var u,t
if(a.a.length<=0)throw H.j(P.q("May not create a SetMatcher with zero characters."))
u=new H.aQ([P.A,P.a_])
for(t=new H.du(a,a.gk(a),[H.az(a,"w",0)]);t.w();)u.a6(0,t.d,!0)
this.shp(u)},
aP:function(a,b){return this.a.du(0,b)},
i:function(a){var u=this.a
return P.jC(new H.dt(u,[H.y(u,0)]))},
shp:function(a){this.a=H.i(a,"$iQ",[P.A,P.a_],"$aQ")},
$ib8:1}
V.cw.prototype={
A:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cB(this.a.L(0,b))
r.saw(H.c([],[V.b8]))
r.c=!1
C.a.h(this.c,r)
return r},
it:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.aP(0,a))return r}return},
i:function(a){return this.b},
shM:function(a){this.c=H.i(a,"$ib",[V.cB],"$ab")}}
V.dU.prototype={
i:function(a){var u=H.kY(this.b,"\n","\\n"),t=H.kY(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cA.prototype={
i:function(a){return this.b},
shk:function(a){var u=P.o
this.c=H.i(a,"$iQ",[u,u],"$aQ")}}
V.i_.prototype={
L:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cw(this,b)
u.shM(H.c([],[V.cB]))
u.d=null
this.a.a6(0,b,u)}return u},
b7:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cA(a)
u=P.o
t.shk(new H.aQ([u,u]))
this.b.a6(0,a,t)}return t},
j0:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.dU]),l=this.c,k=[P.A],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.j.bb(a,s)
q=l.it(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.jC(j)
throw H.j(P.q("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.jC(j)
o=l.d
n=o.c.j(0,p)
t=new V.dU(n==null?o.b:n,p,s)}++s}}},
shC:function(a){this.a=H.i(a,"$iQ",[P.o,V.cw],"$aQ")},
shF:function(a){this.b=H.i(a,"$iQ",[P.o,V.cA],"$aQ")}}
V.cB.prototype={
i:function(a){return this.b.b+": "+this.cN(0)}}
X.f8.prototype={
gl:function(){var u=this.fr
return u==null?this.fr=D.F():u},
a0:function(a){var u=this.fr
if(u!=null)u.v(a)},
sak:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.v("width",u,b,[P.A])
u.b=!0
t.a0(u)}},
sah:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.v("height",u,b,[P.A])
u.b=!0
t.a0(u)}},
G:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){u=a.a
t=u.drawingBufferWidth
s=h.r
if(typeof t!=="number")return t.t()
h.sak(0,C.i.Z(t*s))
u=u.drawingBufferHeight
s=h.x
if(typeof u!=="number")return u.t()
h.sah(0,C.i.Z(u*s))}if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=H.ad(u.getParameter(3379))
p=V.cZ(s)
o=V.cZ(r)
q=V.cZ(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.b.e8(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.kn(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.ce()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.ce()
t=h.ch
s=t.b
h.z=s
h.c=t.r
h.d=t.x
u.bindTexture(f,s)
t=u.createRenderbuffer()
h.Q=t
u.bindRenderbuffer(e,t)
u.renderbufferStorage(e,33189,h.c,h.d)
t=u.createFramebuffer()
h.y=t
u.bindFramebuffer(d,t)
u.framebufferTexture2D(d,36064,f,h.z,0)
u.framebufferRenderbuffer(d,36096,e,h.Q)
u.bindTexture(f,g)
u.bindRenderbuffer(e,g)
u.bindFramebuffer(d,g)}u=a.a
u.bindFramebuffer(d,h.y)
u.enable(2884)
u.enable(2929)
u.depthFunc(513)
t=h.dy
s=t.c
a.c=C.i.Z(s*h.a)
r=t.d
a.d=C.i.Z(r*h.b)
l=t.a
k=h.c
j=C.i.Z(l*k)
t=t.b
l=h.d
u.viewport(j,C.i.Z(t*l),C.i.Z(s*k),C.i.Z(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
a4:function(a){a.a.bindFramebuffer(36160,null)}}
X.bK.prototype={$iaV:1}
X.fG.prototype={
gl:function(){var u=this.x
return u==null?this.x=D.F():u},
G:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.E(u)
q=C.i.Z(r*u)
r=s.b
if(typeof t!=="number")return H.E(t)
p=C.i.Z(r*t)
r=C.i.Z(s.c*u)
a.c=r
s=C.i.Z(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)},
a4:function(a){}}
X.fJ.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.F():u},
G:function(a){var u
a.cy.by(V.bx())
u=V.bx()
a.db.by(u)},
a4:function(a){a.cy.aB()
a.db.aB()},
$iaV:1,
$ibK:1}
X.dD.prototype={
gl:function(){var u=this.f
return u==null?this.f=D.F():u},
a0:function(a){var u
H.k(a,"$iu")
u=this.f
if(u!=null)u.v(a)},
eF:function(){return this.a0(null)},
G:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.aT(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.by(k)
r=$.ke
if(r==null){r=V.kg()
q=V.kA()
p=$.kx
r=V.k9(r,q,p==null?$.kx=new V.O(0,0,-1):p)
$.ke=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aQ(0,a,s)
if(t!=null)u=t.t(0,u)}a.db.by(u)},
a4:function(a){a.cy.aB()
a.db.aB()},
$iaV:1,
$ibK:1}
X.cy.prototype={}
V.jm.prototype={
$1:function(a){var u
H.k(a,"$ib1")
u=C.i.ea(this.a.giu(),2)
if(u!=="0.00")P.jV(u+" fps")},
$S:37}
V.hD.prototype={
eq:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
o.className="scrollTop"
p.appendChild(o)
u=q.createElement("div")
u.className="scrollPage"
p.appendChild(u)
t=q.createElement("div")
t.className="pageCenter"
u.appendChild(t)
if(a.length!==0){q.title=a
s=q.createElement("div")
s.className="pageTitle"
s.textContent=a
t.appendChild(s)}r=q.createElement("div")
this.a=r
t.appendChild(r)
this.b=null
r=W.m
W.a9(q,"scroll",H.n(new V.hF(o),{func:1,ret:-1,args:[r]}),!1,r)},
dl:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.i(a,"$ib",[P.o],"$ab")
this.hv()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.j0(C.a.iy(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
t.appendChild(o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
t.appendChild(o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
t.appendChild(o)
break
case"Link":n=p.b
if(H.mG(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.U(m[1])
l.textContent=H.U(m[0])
t.appendChild(l)}else{k=P.m5(C.M,n,C.u,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
hv:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.i_()
t=P.o
u.shC(new H.aQ([t,V.cw]))
u.shF(new H.aQ([t,V.cA]))
u.c=null
u.c=u.L(0,q)
t=u.L(0,q).A(0,p)
s=V.ag(new H.a4("*"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,p).A(0,p)
s=new V.ba()
r=[V.b8]
s.saw(H.c([],r))
C.a.h(t.a,s)
t=V.ag(new H.a4("*"))
C.a.h(s.a,t)
t=u.L(0,p).A(0,"BoldEnd")
s=V.ag(new H.a4("*"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,q).A(0,o)
s=V.ag(new H.a4("_"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,o).A(0,o)
s=new V.ba()
s.saw(H.c([],r))
C.a.h(t.a,s)
t=V.ag(new H.a4("_"))
C.a.h(s.a,t)
t=u.L(0,o).A(0,n)
s=V.ag(new H.a4("_"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,q).A(0,m)
s=V.ag(new H.a4("`"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,m).A(0,m)
s=new V.ba()
s.saw(H.c([],r))
C.a.h(t.a,s)
t=V.ag(new H.a4("`"))
C.a.h(s.a,t)
t=u.L(0,m).A(0,"CodeEnd")
s=V.ag(new H.a4("`"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,q).A(0,l)
s=V.ag(new H.a4("["))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,l).A(0,k)
s=V.ag(new H.a4("|"))
C.a.h(t.a,s)
s=u.L(0,l).A(0,j)
t=V.ag(new H.a4("]"))
C.a.h(s.a,t)
s.c=!0
s=u.L(0,l).A(0,l)
t=new V.ba()
t.saw(H.c([],r))
C.a.h(s.a,t)
s=V.ag(new H.a4("|]"))
C.a.h(t.a,s)
s=u.L(0,k).A(0,j)
t=V.ag(new H.a4("]"))
C.a.h(s.a,t)
s.c=!0
s=u.L(0,k).A(0,k)
t=new V.ba()
t.saw(H.c([],r))
C.a.h(s.a,t)
s=V.ag(new H.a4("|]"))
C.a.h(t.a,s)
C.a.h(u.L(0,q).A(0,i).a,new V.f_())
s=u.L(0,i).A(0,i)
t=new V.ba()
t.saw(H.c([],r))
C.a.h(s.a,t)
s=V.ag(new H.a4("*_`["))
C.a.h(t.a,s)
s=u.L(0,"BoldEnd")
s.d=s.a.b7(p)
s=u.L(0,n)
s.d=s.a.b7(o)
s=u.L(0,"CodeEnd")
s.d=s.a.b7(m)
s=u.L(0,j)
s.d=s.a.b7("Link")
s=u.L(0,i)
s.d=s.a.b7(i)
this.b=u}}
V.hF.prototype={
$1:function(a){P.kq(C.o,new V.hE(this.a))},
$S:24}
V.hE.prototype={
$0:function(){var u=C.i.Z(document.documentElement.scrollTop),t=this.a.style,s=H.l(-0.01*u)+"px"
t.top=s},
$S:2};(function aliases(){var u=J.a.prototype
u.ej=u.i
u=J.dq.prototype
u.ek=u.i
u=O.cl.prototype
u.cO=u.ao
u=O.aS.prototype
u.bC=u.ao
u=V.dw.prototype
u.el=u.aP
u.cN=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"mf","lZ",11)
u(P,"mg","m_",11)
u(P,"mh","m0",11)
t(P,"kN","md",3)
var n
s(n=E.aj.prototype,"ge3",0,0,null,["$1","$0"],["e4","iI"],0,0)
s(n,"ge1",0,0,null,["$1","$0"],["e2","iH"],0,0)
s(n,"ge_",0,0,null,["$1","$0"],["e0","iE"],0,0)
r(n,"giC","iD",7)
r(n,"giF","iG",7)
s(n=E.dT.prototype,"gcQ",0,0,null,["$1","$0"],["cS","cR"],0,0)
q(n,"giS","e6",3)
p(n=X.e0.prototype,"gfJ","fK",10)
p(n,"gfq","fs",10)
p(n,"gfz","fA",4)
p(n,"gfN","fO",18)
p(n,"gfL","fM",18)
p(n,"gfR","fS",4)
p(n,"gfV","fW",4)
p(n,"gfD","fE",4)
p(n,"gfT","fU",4)
p(n,"gfB","fC",4)
p(n,"gfX","fY",32)
p(n,"gfZ","h_",10)
p(n,"ghe","hf",8)
p(n,"gha","hb",8)
p(n,"ghc","hd",8)
s(D.bo.prototype,"geu",0,0,null,["$1","$0"],["as","ev"],0,0)
s(n=D.ds.prototype,"gd9",0,0,null,["$1","$0"],["da","fP"],0,0)
p(n,"gh0","h1",33)
r(n,"gfk","fl",19)
r(n,"gh4","h5",19)
o(V.N.prototype,"gk","b0",12)
o(V.O.prototype,"gk","b0",12)
o(V.bC.prototype,"gk","b0",12)
s(n=U.ci.prototype,"gaK",0,0,null,["$1","$0"],["M","ab"],0,0)
r(n,"gfi","fj",20)
r(n,"gh2","h3",20)
s(n=U.e1.prototype,"gaK",0,0,null,["$1","$0"],["M","ab"],0,0)
p(n,"gbM","bN",1)
p(n,"gbO","bP",1)
p(n,"gbQ","bR",1)
s(n=U.e2.prototype,"gaK",0,0,null,["$1","$0"],["M","ab"],0,0)
p(n,"gbM","bN",1)
p(n,"gbO","bP",1)
p(n,"gbQ","bR",1)
p(n,"gfc","fd",1)
p(n,"gfe","ff",1)
p(n,"ghK","hL",1)
p(n,"ghI","hJ",1)
p(n,"ghG","hH",1)
p(U.e3.prototype,"gfg","fh",1)
s(n=M.d6.prototype,"gV",0,0,null,["$1","$0"],["T","at"],0,0)
r(n,"gh6","h7",21)
r(n,"gh8","h9",21)
s(M.d8.prototype,"gV",0,0,null,["$1","$0"],["T","at"],0,0)
s(n=M.de.prototype,"gV",0,0,null,["$1","$0"],["T","at"],0,0)
r(n,"gft","fu",7)
r(n,"gfv","fw",7)
s(M.di.prototype,"gV",0,0,null,["$1","$0"],["T","at"],0,0)
s(O.dk.prototype,"ga_",0,0,null,["$1","$0"],["n","a8"],0,0)
s(n=O.dx.prototype,"ga_",0,0,null,["$1","$0"],["n","a8"],0,0)
s(n,"ghm",0,0,null,["$1","$0"],["df","hn"],0,0)
r(n,"gfm","fn",22)
r(n,"gfo","fp",22)
s(O.cl.prototype,"ga_",0,0,null,["$1","$0"],["n","a8"],0,0)
s(O.dJ.prototype,"ga_",0,0,null,["$1","$0"],["n","a8"],0,0)
s(n=O.dO.prototype,"ga_",0,0,null,["$1","$0"],["n","a8"],0,0)
r(n,"gfF","fG",23)
r(n,"gfH","fI",23)
s(O.aC.prototype,"ga_",0,0,null,["$1","$0"],["n","a8"],0,0)
s(X.dD.prototype,"geE",0,0,null,["$1","$0"],["a0","eF"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.R,null)
s(P.R,[H.jz,J.a,J.al,P.el,P.e,H.du,P.aO,H.bN,H.e_,H.i4,P.bq,H.ca,H.eC,P.af,H.fQ,H.fR,H.fM,P.eI,P.b5,P.ax,P.e6,P.hN,P.cx,P.hO,P.b1,P.ai,P.j7,P.j1,P.cL,P.iW,P.w,P.cb,P.j6,P.a_,P.av,P.aa,P.bp,P.hk,P.dM,P.ee,P.fF,P.b,P.Q,P.L,P.ao,P.o,P.be,W.fi,W.B,W.dg,P.eN,P.iX,O.V,O.cm,E.f9,E.aj,E.hr,E.dT,Z.e5,Z.bD,Z.aI,Z.bt,Z.aF,D.fc,D.br,D.u,X.d5,X.dr,X.fO,X.fU,X.ar,X.ha,X.i0,X.e0,D.bo,D.a0,D.dE,D.dL,D.dQ,D.dR,D.dS,V.Y,V.ab,V.fw,V.bP,V.a1,V.a7,V.ak,V.bd,V.bz,V.N,V.O,V.bC,U.e1,U.e2,U.e3,M.d8,M.de,M.di,M.an,A.d1,A.f3,A.fH,A.h0,A.cD,A.cG,A.cE,A.cH,A.cF,A.cI,A.bM,A.bn,A.dW,A.ib,F.a6,F.b7,F.by,F.dI,F.hA,F.hB,F.hC,F.at,F.im,F.io,F.ir,F.is,O.bA,O.cl,O.aC,T.hW,V.f_,V.b8,V.dw,V.hz,V.cw,V.dU,V.cA,V.i_,X.cy,X.bK,X.fJ,X.dD,V.hD])
s(J.a,[J.fL,J.dn,J.dq,J.aP,J.dp,J.ck,H.cp,W.f,W.eZ,W.d2,W.c9,W.aK,W.aL,W.T,W.e8,W.fm,W.fo,W.ea,W.dd,W.ec,W.fq,W.m,W.ef,W.aN,W.fI,W.eh,W.bs,W.fT,W.h4,W.em,W.en,W.aU,W.eo,W.er,W.aW,W.ev,W.ex,W.aZ,W.ey,W.b_,W.eD,W.aA,W.eG,W.hZ,W.b2,W.eJ,W.i2,W.ih,W.eO,W.eQ,W.eS,W.eU,W.eW,P.b6,P.ej,P.bb,P.et,P.ho,P.eE,P.bg,P.eL,P.f4,P.e7,P.d3,P.dh,P.dF,P.dG,P.bT,P.dH,P.dN,P.dX,P.eA])
s(J.dq,[J.hl,J.dY,J.bw])
t(J.jy,J.aP)
s(J.dp,[J.dm,J.dl])
t(P.fS,P.el)
s(P.fS,[H.dZ,W.iE,W.iD,P.fB])
t(H.a4,H.dZ)
s(P.e,[H.ft,H.fX,H.iw])
s(P.aO,[H.fY,H.ix])
s(P.bq,[H.hh,H.fN,H.ie,H.i6,H.fb,H.hx,P.f2,P.dC,P.aH,P.ig,P.id,P.hJ,P.ff,P.fl])
s(H.ca,[H.jn,H.hS,H.jg,H.jh,H.ji,P.iA,P.iz,P.iB,P.iC,P.j5,P.j4,P.iJ,P.iN,P.iK,P.iL,P.iM,P.iQ,P.iR,P.iP,P.iO,P.hP,P.hQ,P.jb,P.j_,P.iZ,P.j0,P.fW,P.fr,P.fs,W.h6,W.h8,W.hw,W.hM,W.iI,P.jd,P.fC,P.fD,P.f6,E.hs,E.ht,E.hu,E.hY,D.fx,D.fy,F.j8,F.iu,F.it,F.ip,F.iq,T.hX,V.jm,V.hF,V.hE])
s(H.hS,[H.hK,H.c7])
t(H.iy,P.f2)
t(P.fV,P.af)
t(H.aQ,P.fV)
t(H.dt,H.ft)
t(H.dz,H.cp)
s(H.dz,[H.cM,H.cO])
t(H.cN,H.cM)
t(H.co,H.cN)
t(H.cP,H.cO)
t(H.dA,H.cP)
s(H.dA,[H.hb,H.hc,H.hd,H.he,H.hf,H.dB,H.hg])
t(P.iY,P.j7)
t(P.iV,P.j1)
t(P.d7,P.hO)
t(P.fu,P.cb)
t(P.ii,P.fu)
t(P.ij,P.d7)
s(P.aa,[P.x,P.A])
s(P.aH,[P.bS,P.fK])
s(W.f,[W.J,W.fA,W.aY,W.cQ,W.b0,W.aB,W.cS,W.iv,W.cJ,P.f7,P.bJ])
s(W.J,[W.a5,W.bm])
s(W.a5,[W.r,P.p])
s(W.r,[W.f0,W.f1,W.bL,W.db,W.fE,W.cj,W.hy])
s(W.aK,[W.ce,W.fj,W.fk])
t(W.fh,W.aL)
t(W.cf,W.e8)
t(W.eb,W.ea)
t(W.dc,W.eb)
t(W.ed,W.ec)
t(W.fp,W.ed)
t(W.aM,W.d2)
t(W.eg,W.ef)
t(W.fz,W.eg)
t(W.ei,W.eh)
t(W.bO,W.ei)
t(W.bB,W.m)
s(W.bB,[W.aR,W.ac,W.aD])
t(W.h5,W.em)
t(W.h7,W.en)
t(W.ep,W.eo)
t(W.h9,W.ep)
t(W.es,W.er)
t(W.cq,W.es)
t(W.ew,W.ev)
t(W.hm,W.ew)
t(W.hv,W.ex)
t(W.cR,W.cQ)
t(W.hG,W.cR)
t(W.ez,W.ey)
t(W.hH,W.ez)
t(W.hL,W.eD)
t(W.eH,W.eG)
t(W.hT,W.eH)
t(W.cT,W.cS)
t(W.hU,W.cT)
t(W.eK,W.eJ)
t(W.i1,W.eK)
t(W.b4,W.ac)
t(W.eP,W.eO)
t(W.iF,W.eP)
t(W.e9,W.dd)
t(W.eR,W.eQ)
t(W.iS,W.eR)
t(W.eT,W.eS)
t(W.eq,W.eT)
t(W.eV,W.eU)
t(W.j2,W.eV)
t(W.eX,W.eW)
t(W.j3,W.eX)
t(W.iG,P.hN)
t(W.jG,W.iG)
t(W.iH,P.cx)
t(P.am,P.iX)
t(P.ek,P.ej)
t(P.fP,P.ek)
t(P.eu,P.et)
t(P.hi,P.eu)
t(P.eF,P.eE)
t(P.hR,P.eF)
t(P.eM,P.eL)
t(P.i3,P.eM)
t(P.f5,P.e7)
t(P.hj,P.bJ)
t(P.eB,P.eA)
t(P.hI,P.eB)
s(E.f9,[Z.d4,A.cv,T.bf])
s(D.u,[D.bu,D.bv,D.v,X.hn])
s(X.hn,[X.dv,X.b9,X.cn,X.dV])
s(O.V,[D.ds,U.ci,M.d6])
s(D.fc,[U.fe,U.a8])
t(U.cd,U.a8)
s(A.cv,[A.da,A.dj,A.dy,A.dK,A.dP])
s(A.dW,[A.G,A.i8,A.i9,A.ia,A.i7,A.S,A.ap,A.K,A.cC,A.ic,A.bV,A.a2,A.a3,A.ah])
s(O.bA,[O.fn,O.dk,O.dx,O.dJ,O.dO])
s(O.cl,[O.fZ,O.h_,O.aS])
s(O.aS,[O.h1,O.h2])
s(T.bf,[T.bU,T.cz])
t(T.hV,T.bU)
s(V.dw,[V.ba,V.cB])
s(X.cy,[X.f8,X.fG])
u(H.dZ,H.e_)
u(H.cM,P.w)
u(H.cN,H.bN)
u(H.cO,P.w)
u(H.cP,H.bN)
u(P.el,P.w)
u(W.e8,W.fi)
u(W.ea,P.w)
u(W.eb,W.B)
u(W.ec,P.w)
u(W.ed,W.B)
u(W.ef,P.w)
u(W.eg,W.B)
u(W.eh,P.w)
u(W.ei,W.B)
u(W.em,P.af)
u(W.en,P.af)
u(W.eo,P.w)
u(W.ep,W.B)
u(W.er,P.w)
u(W.es,W.B)
u(W.ev,P.w)
u(W.ew,W.B)
u(W.ex,P.af)
u(W.cQ,P.w)
u(W.cR,W.B)
u(W.ey,P.w)
u(W.ez,W.B)
u(W.eD,P.af)
u(W.eG,P.w)
u(W.eH,W.B)
u(W.cS,P.w)
u(W.cT,W.B)
u(W.eJ,P.w)
u(W.eK,W.B)
u(W.eO,P.w)
u(W.eP,W.B)
u(W.eQ,P.w)
u(W.eR,W.B)
u(W.eS,P.w)
u(W.eT,W.B)
u(W.eU,P.w)
u(W.eV,W.B)
u(W.eW,P.w)
u(W.eX,W.B)
u(P.ej,P.w)
u(P.ek,W.B)
u(P.et,P.w)
u(P.eu,W.B)
u(P.eE,P.w)
u(P.eF,W.B)
u(P.eL,P.w)
u(P.eM,W.B)
u(P.e7,P.af)
u(P.eA,P.w)
u(P.eB,W.B)})();(function constants(){var u=hunkHelpers.makeConstList
C.l=W.bL.prototype
C.J=J.a.prototype
C.a=J.aP.prototype
C.K=J.dl.prototype
C.f=J.dm.prototype
C.p=J.dn.prototype
C.i=J.dp.prototype
C.j=J.ck.prototype
C.L=J.bw.prototype
C.N=W.cq.prototype
C.v=J.hl.prototype
C.b=P.bT.prototype
C.q=J.dY.prototype
C.w=W.b4.prototype
C.x=W.cJ.prototype
C.r=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.y=function() {
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
C.D=function(getTagFallback) {
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
C.z=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.A=function(hooks) {
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
C.C=function(hooks) {
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
C.B=function(hooks) {
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
C.t=function(hooks) { return hooks; }

C.E=new P.hk()
C.u=new P.ii()
C.F=new P.ij()
C.k=new P.iY()
C.m=new A.bn(0,"ColorBlendType.Overwrite")
C.G=new A.bn(1,"ColorBlendType.Additive")
C.H=new A.bn(2,"ColorBlendType.Average")
C.n=new A.bn(3,"ColorBlendType.AlphaBlend")
C.c=new A.bM(0,"ColorSourceType.None")
C.h=new A.bM(1,"ColorSourceType.Solid")
C.e=new A.bM(2,"ColorSourceType.Texture2D")
C.d=new A.bM(3,"ColorSourceType.TextureCube")
C.o=new P.bp(0)
C.I=new P.bp(5e6)
C.M=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.A])})()
var v={mangledGlobalNames:{A:"int",x:"double",aa:"num",o:"String",a_:"bool",L:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.u]},{func:1,ret:-1,args:[D.u]},{func:1,ret:P.L},{func:1,ret:-1},{func:1,ret:-1,args:[W.ac]},{func:1,ret:P.L,args:[F.a6]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.A,[P.e,E.aj]]},{func:1,ret:-1,args:[W.aD]},{func:1,ret:P.L,args:[D.u]},{func:1,ret:-1,args:[W.m]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.x},{func:1,ret:P.L,args:[,,]},{func:1,ret:P.o,args:[P.A]},{func:1,ret:P.L,args:[,]},{func:1,args:[,]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.u]}]},{func:1,ret:-1,args:[W.aR]},{func:1,ret:-1,args:[P.A,[P.e,D.a0]]},{func:1,ret:-1,args:[P.A,[P.e,U.a8]]},{func:1,ret:-1,args:[P.A,[P.e,M.an]]},{func:1,ret:-1,args:[P.A,[P.e,V.a1]]},{func:1,ret:-1,args:[P.A,[P.e,O.aC]]},{func:1,ret:P.L,args:[W.m]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:P.a_,args:[W.J]},{func:1,ret:W.a5,args:[W.J]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,args:[,P.o]},{func:1,args:[W.m]},{func:1,args:[P.o]},{func:1,ret:-1,args:[W.b4]},{func:1,ret:P.a_,args:[[P.e,D.a0]]},{func:1,ret:P.L,args:[,],opt:[P.ao]},{func:1,ret:P.L,args:[F.at,P.x,P.x]},{func:1,ret:[P.ax,,],args:[,]},{func:1,ret:P.L,args:[P.b1]},{func:1,ret:P.L,args:[P.aa]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aJ=0
$.c8=null
$.jZ=null
$.jI=!1
$.kR=null
$.kL=null
$.kW=null
$.je=null
$.jj=null
$.jS=null
$.bX=null
$.cV=null
$.cW=null
$.jJ=!1
$.X=C.k
$.aq=[]
$.k8=null
$.h3=null
$.kf=null
$.cr=null
$.cu=null
$.kw=null
$.ku=null
$.kv=null
$.kz=null
$.ky=null
$.ik=null
$.kx=null
$.kB=null
$.ke=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mP","l0",function(){return H.kQ("_$dart_dartClosure")})
u($,"mQ","jW",function(){return H.kQ("_$dart_js")})
u($,"mT","l1",function(){return H.b3(H.i5({
toString:function(){return"$receiver$"}}))})
u($,"mU","l2",function(){return H.b3(H.i5({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mV","l3",function(){return H.b3(H.i5(null))})
u($,"mW","l4",function(){return H.b3(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mZ","l7",function(){return H.b3(H.i5(void 0))})
u($,"n_","l8",function(){return H.b3(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mY","l6",function(){return H.b3(H.ks(null))})
u($,"mX","l5",function(){return H.b3(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"n1","la",function(){return H.b3(H.ks(void 0))})
u($,"n0","l9",function(){return H.b3(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nh","jX",function(){return P.lY()})
u($,"ni","le",function(){return P.lO("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"na","ld",function(){return Z.aw(0)})
u($,"n4","lb",function(){return Z.aw(511)})
u($,"nc","ae",function(){return Z.aw(1)})
u($,"nb","bk",function(){return Z.aw(2)})
u($,"n6","bj",function(){return Z.aw(4)})
u($,"nd","aG",function(){return Z.aw(8)})
u($,"ne","bl",function(){return Z.aw(16)})
u($,"n7","d_",function(){return Z.aw(32)})
u($,"n8","d0",function(){return Z.aw(64)})
u($,"n9","lc",function(){return Z.aw(96)})
u($,"nf","c4",function(){return Z.aw(128)})
u($,"n5","bi",function(){return Z.aw(256)})
u($,"mO","l_",function(){return new V.fw(1e-9)})
u($,"mN","H",function(){return $.l_()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cp,ArrayBufferView:H.cp,Float32Array:H.co,Float64Array:H.co,Int16Array:H.hb,Int32Array:H.hc,Int8Array:H.hd,Uint16Array:H.he,Uint32Array:H.hf,Uint8ClampedArray:H.dB,CanvasPixelArray:H.dB,Uint8Array:H.hg,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLBaseElement:W.r,HTMLBodyElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLInputElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableCellElement:W.r,HTMLTableDataCellElement:W.r,HTMLTableHeaderCellElement:W.r,HTMLTableColElement:W.r,HTMLTableElement:W.r,HTMLTableRowElement:W.r,HTMLTableSectionElement:W.r,HTMLTemplateElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.eZ,HTMLAnchorElement:W.f0,HTMLAreaElement:W.f1,Blob:W.d2,HTMLCanvasElement:W.bL,CanvasRenderingContext2D:W.c9,CDATASection:W.bm,CharacterData:W.bm,Comment:W.bm,ProcessingInstruction:W.bm,Text:W.bm,CSSNumericValue:W.ce,CSSUnitValue:W.ce,CSSPerspective:W.fh,CSSCharsetRule:W.T,CSSConditionRule:W.T,CSSFontFaceRule:W.T,CSSGroupingRule:W.T,CSSImportRule:W.T,CSSKeyframeRule:W.T,MozCSSKeyframeRule:W.T,WebKitCSSKeyframeRule:W.T,CSSKeyframesRule:W.T,MozCSSKeyframesRule:W.T,WebKitCSSKeyframesRule:W.T,CSSMediaRule:W.T,CSSNamespaceRule:W.T,CSSPageRule:W.T,CSSRule:W.T,CSSStyleRule:W.T,CSSSupportsRule:W.T,CSSViewportRule:W.T,CSSStyleDeclaration:W.cf,MSStyleCSSProperties:W.cf,CSS2Properties:W.cf,CSSImageValue:W.aK,CSSKeywordValue:W.aK,CSSPositionValue:W.aK,CSSResourceValue:W.aK,CSSURLImageValue:W.aK,CSSStyleValue:W.aK,CSSMatrixComponent:W.aL,CSSRotation:W.aL,CSSScale:W.aL,CSSSkew:W.aL,CSSTranslation:W.aL,CSSTransformComponent:W.aL,CSSTransformValue:W.fj,CSSUnparsedValue:W.fk,DataTransferItemList:W.fm,HTMLDivElement:W.db,DOMException:W.fo,ClientRectList:W.dc,DOMRectList:W.dc,DOMRectReadOnly:W.dd,DOMStringList:W.fp,DOMTokenList:W.fq,Element:W.a5,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.aM,FileList:W.fz,FileWriter:W.fA,HTMLFormElement:W.fE,Gamepad:W.aN,History:W.fI,HTMLCollection:W.bO,HTMLFormControlsCollection:W.bO,HTMLOptionsCollection:W.bO,ImageData:W.bs,HTMLImageElement:W.cj,KeyboardEvent:W.aR,Location:W.fT,MediaList:W.h4,MIDIInputMap:W.h5,MIDIOutputMap:W.h7,MimeType:W.aU,MimeTypeArray:W.h9,PointerEvent:W.ac,MouseEvent:W.ac,DragEvent:W.ac,Document:W.J,DocumentFragment:W.J,HTMLDocument:W.J,ShadowRoot:W.J,XMLDocument:W.J,Attr:W.J,DocumentType:W.J,Node:W.J,NodeList:W.cq,RadioNodeList:W.cq,Plugin:W.aW,PluginArray:W.hm,RTCStatsReport:W.hv,HTMLSelectElement:W.hy,SourceBuffer:W.aY,SourceBufferList:W.hG,SpeechGrammar:W.aZ,SpeechGrammarList:W.hH,SpeechRecognitionResult:W.b_,Storage:W.hL,CSSStyleSheet:W.aA,StyleSheet:W.aA,TextTrack:W.b0,TextTrackCue:W.aB,VTTCue:W.aB,TextTrackCueList:W.hT,TextTrackList:W.hU,TimeRanges:W.hZ,Touch:W.b2,TouchEvent:W.aD,TouchList:W.i1,TrackDefaultList:W.i2,CompositionEvent:W.bB,FocusEvent:W.bB,TextEvent:W.bB,UIEvent:W.bB,URL:W.ih,VideoTrackList:W.iv,WheelEvent:W.b4,Window:W.cJ,DOMWindow:W.cJ,CSSRuleList:W.iF,ClientRect:W.e9,DOMRect:W.e9,GamepadList:W.iS,NamedNodeMap:W.eq,MozNamedAttrMap:W.eq,SpeechRecognitionResultList:W.j2,StyleSheetList:W.j3,SVGLength:P.b6,SVGLengthList:P.fP,SVGNumber:P.bb,SVGNumberList:P.hi,SVGPointList:P.ho,SVGStringList:P.hR,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGScriptElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGTransform:P.bg,SVGTransformList:P.i3,AudioBuffer:P.f4,AudioParamMap:P.f5,AudioTrackList:P.f7,AudioContext:P.bJ,webkitAudioContext:P.bJ,BaseAudioContext:P.bJ,OfflineAudioContext:P.hj,WebGLBuffer:P.d3,WebGLFramebuffer:P.dh,WebGLProgram:P.dF,WebGLRenderbuffer:P.dG,WebGL2RenderingContext:P.bT,WebGLShader:P.dH,WebGLTexture:P.dN,WebGLUniformLocation:P.dX,SQLResultSetRowList:P.hI})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dz.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.dA.$nativeSuperclassTag="ArrayBufferView"
W.cQ.$nativeSuperclassTag="EventTarget"
W.cR.$nativeSuperclassTag="EventTarget"
W.cS.$nativeSuperclassTag="EventTarget"
W.cT.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.kT,[])
else N.kT([])})})()
//# sourceMappingURL=test.dart.js.map
