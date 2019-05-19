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
a[c]=function(){a[c]=function(){H.mE(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jF"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jF"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jF(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jp:function jp(){},
jm:function(){return new P.ch("No element")},
lv:function(){return new P.ch("Too many elements")},
p:function p(a){this.a=a},
f4:function f4(){},
bA:function bA(){},
c7:function c7(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fA:function fA(a,b,c){this.a=a
this.b=b
this.$ti=c},
fB:function fB(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fC:function fC(a,b,c){this.a=a
this.b=b
this.$ti=c},
cp:function cp(a,b,c){this.a=a
this.b=b
this.$ti=c},
ic:function ic(a,b,c){this.a=a
this.b=b
this.$ti=c},
bx:function bx(){},
dC:function dC(){},
dB:function dB(){},
bR:function(a){var u,t=H.E(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
mk:function(a){return v.types[H.a5(a)]},
mr:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.O(a).$iF},
h:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ag(a)
if(typeof u!=="string")throw H.f(H.bM(a))
return u},
cd:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bC:function(a){return H.lA(a)+H.jB(H.bq(a),0,null)},
lA:function(a){var u,t,s,r,q,p,o,n=J.O(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.L||!!n.$ico){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.bR(t.length>1&&C.b.am(t,0)===36?C.b.aZ(t,1):t)},
kf:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lI:function(a){var u,t,s,r=H.c([],[P.C])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.D)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bM(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.aO(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.f(H.bM(s))}return H.kf(r)},
kg:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bM(s))
if(s<0)throw H.f(H.bM(s))
if(s>65535)return H.lI(a)}return H.kf(a)},
jr:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aO(u,10))>>>0,56320|u&1023)}throw H.f(P.aJ(a,0,1114111,null,null))},
bB:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lH:function(a){var u=H.bB(a).getFullYear()+0
return u},
lF:function(a){var u=H.bB(a).getMonth()+1
return u},
lB:function(a){var u=H.bB(a).getDate()+0
return u},
lC:function(a){var u=H.bB(a).getHours()+0
return u},
lE:function(a){var u=H.bB(a).getMinutes()+0
return u},
lG:function(a){var u=H.bB(a).getSeconds()+0
return u},
lD:function(a){var u=H.bB(a).getMilliseconds()+0
return u},
A:function(a){throw H.f(H.bM(a))},
l:function(a,b){if(a==null)J.bt(a)
throw H.f(H.cE(a,b))},
cE:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.as(!0,b,s,null)
u=H.a5(J.bt(a))
if(!(b<0)){if(typeof u!=="number")return H.A(u)
t=b>=u}else t=!0
if(t)return P.R(b,a,s,null,u)
return P.h2(b,s)},
mg:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bD(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bD(a,c,!0,b,"end",u)
return new P.as(!0,b,"end",null)},
bM:function(a){return new P.as(!0,a,null,null)},
mc:function(a){if(typeof a!=="number")throw H.f(H.bM(a))
return a},
f:function(a){var u
if(a==null)a=new P.dg()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kW})
u.name=""}else u.toString=H.kW
return u},
kW:function(){return J.ag(this.dartException)},
a7:function(a){throw H.f(a)},
D:function(a){throw H.f(P.bb(a))},
aQ:function(a){var u,t,s,r,q,p
a=H.kV(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hK(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hL:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ks:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ka:function(a,b){return new H.fU(a,b==null?null:b.method)},
jq:function(a,b){var u=b==null,t=u?null:b.method
return new H.fr(a,t,u?null:b.receiver)},
ak:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.je(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aO(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jq(H.h(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.ka(H.h(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kZ()
q=$.l_()
p=$.l0()
o=$.l1()
n=$.l4()
m=$.l5()
l=$.l3()
$.l2()
k=$.l7()
j=$.l6()
i=r.a_(u)
if(i!=null)return f.$1(H.jq(H.E(u),i))
else{i=q.a_(u)
if(i!=null){i.method="call"
return f.$1(H.jq(H.E(u),i))}else{i=p.a_(u)
if(i==null){i=o.a_(u)
if(i==null){i=n.a_(u)
if(i==null){i=m.a_(u)
if(i==null){i=l.a_(u)
if(i==null){i=o.a_(u)
if(i==null){i=k.a_(u)
if(i==null){i=j.a_(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.ka(H.E(u),i))}}return f.$1(new H.hY(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dn()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.as(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dn()
return a},
bP:function(a){var u
if(a==null)return new H.eh(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eh(a)},
mj:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.O(0,a[u],a[t])}return b},
mq:function(a,b,c,d,e,f){H.k(a,"$ibe")
switch(H.a5(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.X("Unsupported number of arguments for wrapped closure"))},
bN:function(a,b){var u
H.a5(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mq)
a.$identity=u
return u},
lo:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hn().constructor.prototype):Object.create(new H.bV(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ay
if(typeof t!=="number")return t.B()
$.ay=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.jW(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.mk,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.jV:H.jh
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.f("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.jW(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
ll:function(a,b,c,d){var u=H.jh
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jW:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.ln(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.ll(t,!r,u,b)
if(t===0){r=$.ay
if(typeof r!=="number")return r.B()
$.ay=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bW
return new Function(r+H.h(q==null?$.bW=H.eO("self"):q)+";return "+p+"."+H.h(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ay
if(typeof r!=="number")return r.B()
$.ay=r+1
o+=r
r="return function("+o+"){return this."
q=$.bW
return new Function(r+H.h(q==null?$.bW=H.eO("self"):q)+"."+H.h(u)+"("+o+");}")()},
lm:function(a,b,c,d){var u=H.jh,t=H.jV
switch(b?-1:a){case 0:throw H.f(H.lL("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
ln:function(a,b){var u,t,s,r,q,p,o,n=$.bW
if(n==null)n=$.bW=H.eO("self")
u=$.jU
if(u==null)u=$.jU=H.eO("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lm(s,!q,t,b)
if(s===1){n="return function(){return this."+H.h(n)+"."+H.h(t)+"(this."+H.h(u)+");"
u=$.ay
if(typeof u!=="number")return u.B()
$.ay=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.h(n)+"."+H.h(t)+"(this."+H.h(u)+", "+o+");"
u=$.ay
if(typeof u!=="number")return u.B()
$.ay=u+1
return new Function(n+u+"}")()},
jF:function(a,b,c,d,e,f,g){return H.lo(a,b,H.a5(c),d,!!e,!!f,g)},
jh:function(a){return a.a},
jV:function(a){return a.c},
eO:function(a){var u,t,s,r=new H.bV("self","target","receiver","name"),q=J.jn(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
w:function(a){if(a==null)H.m8("boolean expression must not be null")
return a},
E:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.aw(a,"String"))},
nk:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aw(a,"double"))},
mw:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aw(a,"num"))},
jC:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.aw(a,"bool"))},
a5:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.aw(a,"int"))},
kT:function(a,b){throw H.f(H.aw(a,H.bR(H.E(b).substring(2))))},
my:function(a,b){throw H.f(H.lk(a,H.bR(H.E(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.O(a)[b])return a
H.kT(a,b)},
a6:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.O(a)[b]
else u=!0
if(u)return a
H.my(a,b)},
jL:function(a){if(a==null)return a
if(!!J.O(a).$ib)return a
throw H.f(H.aw(a,"List<dynamic>"))},
ms:function(a,b){var u
if(a==null)return a
u=J.O(a)
if(!!u.$ib)return a
if(u[b])return a
H.kT(a,b)},
kN:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a5(u)]
else return a.$S()}return},
eE:function(a,b){var u
if(typeof a=="function")return!0
u=H.kN(J.O(a))
if(u==null)return!1
return H.kE(u,null,b,null)},
j:function(a,b){var u,t
if(a==null)return a
if($.jy)return a
$.jy=!0
try{if(H.eE(a,b))return a
u=H.jc(b)
t=H.aw(a,u)
throw H.f(t)}finally{$.jy=!1}},
jG:function(a,b){if(a!=null&&!H.jE(a,b))H.a7(H.aw(a,H.jc(b)))
return a},
aw:function(a,b){return new H.hM("TypeError: "+P.cV(a)+": type '"+H.kI(a)+"' is not a subtype of type '"+b+"'")},
lk:function(a,b){return new H.eP("CastError: "+P.cV(a)+": type '"+H.kI(a)+"' is not a subtype of type '"+b+"'")},
kI:function(a){var u,t=J.O(a)
if(!!t.$ibY){u=H.kN(t)
if(u!=null)return H.jc(u)
return"Closure"}return H.bC(a)},
m8:function(a){throw H.f(new H.id(a))},
mE:function(a){throw H.f(new P.eX(H.E(a)))},
lL:function(a){return new H.ha(a)},
kO:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bq:function(a){if(a==null)return
return a.$ti},
nl:function(a,b,c){return H.bQ(a["$a"+H.h(c)],H.bq(b))},
cF:function(a,b,c,d){var u
H.E(c)
H.a5(d)
u=H.bQ(a["$a"+H.h(c)],H.bq(b))
return u==null?null:u[d]},
af:function(a,b,c){var u
H.E(b)
H.a5(c)
u=H.bQ(a["$a"+H.h(b)],H.bq(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.a5(b)
u=H.bq(a)
return u==null?null:u[b]},
jc:function(a){return H.bp(a,null)},
bp:function(a,b){var u,t
H.o(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bR(a[0].name)+H.jB(a,1,b)
if(typeof a=="function")return H.bR(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a5(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.l(b,t)
return H.h(b[t])}if('func' in a)return H.m1(a,b)
if('futureOr' in a)return"FutureOr<"+H.bp("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
m1:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.e]
H.o(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.l(a0,n)
p=C.b.B(p,a0[n])
m=u[q]
if(m!=null&&m!==P.I)p+=" extends "+H.bp(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bp(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bp(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bp(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.mi(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.E(b[h])
j=j+i+H.bp(e[d],a0)+(" "+H.h(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
jB:function(a,b,c){var u,t,s,r,q,p
H.o(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.bF("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bp(p,c)}return"<"+u.i(0)+">"},
bQ:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
jD:function(a,b,c,d){var u,t
H.E(b)
H.jL(c)
H.E(d)
if(a==null)return!1
u=H.bq(a)
t=J.O(a)
if(t[b]==null)return!1
return H.kL(H.bQ(t[d],u),null,c,null)},
o:function(a,b,c,d){H.E(b)
H.jL(c)
H.E(d)
if(a==null)return a
if(H.jD(a,b,c,d))return a
throw H.f(H.aw(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bR(b.substring(2))+H.jB(c,0,null),v.mangledGlobalNames)))},
kL:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ar(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ar(a[t],b,c[t],d))return!1
return!0},
ni:function(a,b,c){return a.apply(b,H.bQ(J.O(b)["$a"+H.h(c)],H.bq(b)))},
kQ:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="I"||a.name==="G"||a===-1||a===-2||H.kQ(u)}return!1},
jE:function(a,b){var u,t
if(a==null)return b==null||b.name==="I"||b.name==="G"||b===-1||b===-2||H.kQ(b)
if(b==null||b===-1||b.name==="I"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jE(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eE(a,b)}u=J.O(a).constructor
t=H.bq(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ar(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.jE(a,b))throw H.f(H.aw(a,H.jc(b)))
return a},
ar:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="I"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="I"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ar(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="G")return!0
if('func' in c)return H.kE(a,b,c,d)
if('func' in a)return c.name==="be"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.ar("type" in a?a.type:l,b,s,d)
else if(H.ar(a,b,s,d))return!0
else{if(!('$i'+"c4" in t.prototype))return!1
r=t.prototype["$a"+"c4"]
q=H.bQ(r,u?a.slice(1):l)
return H.ar(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.kL(H.bQ(m,u),b,p,d)},
kE:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.ar(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.ar(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ar(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ar(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.mv(h,b,g,d)},
mv:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.ar(c[s],d,a[s],b))return!1}return!0},
nj:function(a,b,c){Object.defineProperty(a,H.E(b),{value:c,enumerable:false,writable:true,configurable:true})},
mt:function(a){var u,t,s,r,q=H.E($.kP.$1(a)),p=$.j3[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j9[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.E($.kK.$2(a,q))
if(q!=null){p=$.j3[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j9[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jb(u)
$.j3[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.j9[q]=u
return u}if(s==="-"){r=H.jb(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kS(a,u)
if(s==="*")throw H.f(P.kt(q))
if(v.leafTags[q]===true){r=H.jb(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kS(a,u)},
kS:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jM(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jb:function(a){return J.jM(a,!1,null,!!a.$iF)},
mu:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jb(u)
else return J.jM(u,c,null,null)},
mo:function(){if(!0===$.jK)return
$.jK=!0
H.mp()},
mp:function(){var u,t,s,r,q,p,o,n
$.j3=Object.create(null)
$.j9=Object.create(null)
H.mn()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kU.$1(q)
if(p!=null){o=H.mu(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mn:function(){var u,t,s,r,q,p,o=C.A()
o=H.bL(C.B,H.bL(C.C,H.bL(C.u,H.bL(C.u,H.bL(C.D,H.bL(C.E,H.bL(C.F(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kP=new H.j6(r)
$.kK=new H.j7(q)
$.kU=new H.j8(p)},
bL:function(a,b){return a(b)||b},
lx:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(new P.fg("Illegal RegExp pattern ("+String(r)+")",a))},
mB:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mh:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kV:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jP:function(a,b,c){var u=H.mC(a,b,c)
return u},
mC:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kV(b),'g'),H.mh(c))},
hK:function hK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fU:function fU(a,b){this.a=a
this.b=b},
fr:function fr(a,b,c){this.a=a
this.b=b
this.c=c},
hY:function hY(a){this.a=a},
je:function je(a){this.a=a},
eh:function eh(a){this.a=a
this.b=null},
bY:function bY(){},
hx:function hx(){},
hn:function hn(){},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hM:function hM(a){this.a=a},
eP:function eP(a){this.a=a},
ha:function ha(a){this.a=a},
id:function id(a){this.a=a},
aF:function aF(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fu:function fu(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d4:function d4(a,b){this.a=a
this.$ti=b},
fv:function fv(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
j8:function j8(a){this.a=a},
fq:function fq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iZ:function(a){return a},
bo:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.cE(b,a))},
m0:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.mg(a,b,c))
return b},
cb:function cb(){},
db:function db(){},
ca:function ca(){},
dc:function dc(){},
fK:function fK(){},
fL:function fL(){},
fM:function fM(){},
fN:function fN(){},
fO:function fO(){},
dd:function dd(){},
fP:function fP(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
mi:function(a){return J.k1(a?Object.keys(a):[],null)},
mx:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jM:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
j5:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jK==null){H.mo()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.kt("Return interceptor for "+H.h(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jQ()]
if(r!=null)return r
r=H.mt(a)
if(r!=null)return r
if(typeof a=="function")return C.N
u=Object.getPrototypeOf(a)
if(u==null)return C.w
if(u===Object.prototype)return C.w
if(typeof s=="function"){Object.defineProperty(s,$.jQ(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
lw:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.jg(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.aJ(a,0,4294967295,"length",null))
return J.k1(new Array(a),b)},
k1:function(a,b){return J.jn(H.c(a,[b]))},
jn:function(a){H.jL(a)
a.fixed$length=Array
return a},
O:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d0.prototype
return J.d_.prototype}if(typeof a=="string")return J.bz.prototype
if(a==null)return J.fp.prototype
if(typeof a=="boolean")return J.fo.prototype
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.I)return a
return J.j5(a)},
jH:function(a){if(typeof a=="string")return J.bz.prototype
if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.I)return a
return J.j5(a)},
j4:function(a){if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.I)return a
return J.j5(a)},
jI:function(a){if(typeof a=="string")return J.bz.prototype
if(a==null)return a
if(!(a instanceof P.I))return J.co.prototype
return a},
jJ:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.I)return a
return J.j5(a)},
W:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.O(a).n(a,b)},
ld:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mr(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jH(a).m(a,b)},
le:function(a,b,c,d){return J.jJ(a).eX(a,b,c,d)},
jf:function(a,b){return J.j4(a).w(a,b)},
lf:function(a,b){return J.j4(a).K(a,b)},
lg:function(a){return J.jJ(a).gf1(a)},
br:function(a){return J.O(a).gD(a)},
bs:function(a){return J.j4(a).gN(a)},
bt:function(a){return J.jH(a).gl(a)},
jS:function(a){return J.j4(a).fF(a)},
lh:function(a,b,c){return J.jI(a).aK(a,b,c)},
li:function(a){return J.jI(a).fS(a)},
ag:function(a){return J.O(a).i(a)},
a:function a(){},
fo:function fo(){},
fp:function fp(){},
d2:function d2(){},
fY:function fY(){},
co:function co(){},
bh:function bh(){},
aE:function aE(a){this.$ti=a},
jo:function jo(a){this.$ti=a},
al:function al(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
d1:function d1(){},
d0:function d0(){},
d_:function d_(){},
bz:function bz(){}},P={
lQ:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.m9()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bN(new P.ig(s),1)).observe(u,{childList:true})
return new P.ie(s,u,t)}else if(self.setImmediate!=null)return P.ma()
return P.mb()},
lR:function(a){self.scheduleImmediate(H.bN(new P.ih(H.j(a,{func:1,ret:-1})),0))},
lS:function(a){self.setImmediate(H.bN(new P.ii(H.j(a,{func:1,ret:-1})),0))},
lT:function(a){P.jt(C.n,H.j(a,{func:1,ret:-1}))},
jt:function(a,b){var u
H.j(b,{func:1,ret:-1})
u=C.d.ar(a.a,1000)
return P.lZ(u<0?0:u,b)},
kr:function(a,b){var u
H.j(b,{func:1,ret:-1,args:[P.aO]})
u=C.d.ar(a.a,1000)
return P.m_(u<0?0:u,b)},
lZ:function(a,b){var u=new P.en()
u.dg(a,b)
return u},
m_:function(a,b){var u=new P.en()
u.dh(a,b)
return u},
lU:function(a,b){var u,t,s
b.a=1
try{a.cQ(new P.is(b),new P.it(b),null)}catch(s){u=H.ak(s)
t=H.bP(s)
P.mz(new P.iu(b,u,t))}},
kz:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iaq")
if(u>=4){t=b.bm()
b.a=a.a
b.c=a.c
P.cs(b,t)}else{t=H.k(b.c,"$iaS")
b.a=2
b.c=a
a.cd(t)}},
cs:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$ia8")
g=g.b
r=s.a
q=s.b
g.toString
P.j_(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cs(h.a,b)}g=h.a
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
if(m){H.k(o,"$ia8")
g=g.b
r=o.a
q=o.b
g.toString
P.j_(i,i,g,r,q)
return}l=$.T
if(l!=n)$.T=n
else l=i
g=b.c
if(g===8)new P.iy(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.ix(u,b,o).$0()}else if((g&2)!==0)new P.iw(h,u,b).$0()
if(l!=null)$.T=l
g=u.b
if(!!J.O(g).$ic4){if(g.a>=4){k=H.k(q.c,"$iaS")
q.c=null
b=q.aN(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.kz(g,q)
return}}j=b.b
k=H.k(j.c,"$iaS")
j.c=null
b=j.aN(k)
g=u.a
r=u.b
if(!g){H.B(r,H.u(j,0))
j.a=4
j.c=r}else{H.k(r,"$ia8")
j.a=8
j.c=r}h.a=j
g=j}},
m4:function(a,b){if(H.eE(a,{func:1,args:[P.I,P.ad]}))return H.j(a,{func:1,ret:null,args:[P.I,P.ad]})
if(H.eE(a,{func:1,args:[P.I]}))return H.j(a,{func:1,ret:null,args:[P.I]})
throw H.f(P.jg(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
m3:function(){var u,t
for(;u=$.bK,u!=null;){$.cD=null
t=u.b
$.bK=t
if(t==null)$.cC=null
u.a.$0()}},
m7:function(){$.jz=!0
try{P.m3()}finally{$.cD=null
$.jz=!1
if($.bK!=null)$.jR().$1(P.kM())}},
kH:function(a){var u=new P.dJ(H.j(a,{func:1,ret:-1}))
if($.bK==null){$.bK=$.cC=u
if(!$.jz)$.jR().$1(P.kM())}else $.cC=$.cC.b=u},
m6:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
u=$.bK
if(u==null){P.kH(a)
$.cD=$.cC
return}t=new P.dJ(a)
s=$.cD
if(s==null){t.b=u
$.bK=$.cD=t}else{t.b=s.b
$.cD=s.b=t
if(t.b==null)$.cC=t}},
mz:function(a){var u,t=null,s={func:1,ret:-1}
H.j(a,s)
u=$.T
if(C.e===u){P.j1(t,t,C.e,a)
return}u.toString
P.j1(t,t,u,H.j(u.bq(a),s))},
kq:function(a,b){var u,t={func:1,ret:-1}
H.j(b,t)
u=$.T
if(u===C.e){u.toString
return P.jt(a,b)}return P.jt(a,H.j(u.bq(b),t))},
lP:function(a,b){var u,t,s={func:1,ret:-1,args:[P.aO]}
H.j(b,s)
u=$.T
if(u===C.e){u.toString
return P.kr(a,b)}t=u.cp(b,P.aO)
$.T.toString
return P.kr(a,H.j(t,s))},
j_:function(a,b,c,d,e){var u={}
u.a=d
P.m6(new P.j0(u,e))},
kF:function(a,b,c,d,e){var u,t
H.j(d,{func:1,ret:e})
t=$.T
if(t===c)return d.$0()
$.T=c
u=t
try{t=d.$0()
return t}finally{$.T=u}},
kG:function(a,b,c,d,e,f,g){var u,t
H.j(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.T
if(t===c)return d.$1(e)
$.T=c
u=t
try{t=d.$1(e)
return t}finally{$.T=u}},
m5:function(a,b,c,d,e,f,g,h,i){var u,t
H.j(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.T
if(t===c)return d.$2(e,f)
$.T=c
u=t
try{t=d.$2(e,f)
return t}finally{$.T=u}},
j1:function(a,b,c,d){var u
H.j(d,{func:1,ret:-1})
u=C.e!==c
if(u)d=!(!u||!1)?c.bq(d):c.f2(d,-1)
P.kH(d)},
ig:function ig(a){this.a=a},
ie:function ie(a,b,c){this.a=a
this.b=b
this.c=c},
ih:function ih(a){this.a=a},
ii:function ii(a){this.a=a},
en:function en(){this.c=0},
iT:function iT(a,b){this.a=a
this.b=b},
iS:function iS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aS:function aS(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aq:function aq(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
ir:function ir(a,b){this.a=a
this.b=b},
iv:function iv(a,b){this.a=a
this.b=b},
is:function is(a){this.a=a},
it:function it(a){this.a=a},
iu:function iu(a,b,c){this.a=a
this.b=b
this.c=c},
iy:function iy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iz:function iz(a){this.a=a},
ix:function ix(a,b,c){this.a=a
this.b=b
this.c=c},
iw:function iw(a,b,c){this.a=a
this.b=b
this.c=c},
dJ:function dJ(a){this.a=a
this.b=null},
hq:function hq(){},
hs:function hs(a,b){this.a=a
this.b=b},
ht:function ht(a,b){this.a=a
this.b=b},
ci:function ci(){},
hr:function hr(){},
aO:function aO(){},
a8:function a8(a,b){this.a=a
this.b=b},
iW:function iW(){},
j0:function j0(a,b){this.a=a
this.b=b},
iF:function iF(){},
iH:function iH(a,b,c){this.a=a
this.b=b
this.c=c},
iG:function iG(a,b){this.a=a
this.b=b},
iI:function iI(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function(a,b){return new H.aF([a,b])},
ly:function(a){return H.mj(a,new H.aF([null,null]))},
d5:function(a){return new P.iD([a])},
jx:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lY:function(a,b,c){var u=new P.dZ(a,b,[c])
u.c=a.e
return u},
lu:function(a,b,c){var u,t
if(P.jA(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.e])
C.a.h($.ae,a)
try{P.m2(a,u)}finally{if(0>=$.ae.length)return H.l($.ae,-1)
$.ae.pop()}t=P.ko(b,H.ms(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
jl:function(a,b,c){var u,t
if(P.jA(a))return b+"..."+c
u=new P.bF(b)
C.a.h($.ae,a)
try{t=u
t.a=P.ko(t.a,a,", ")}finally{if(0>=$.ae.length)return H.l($.ae,-1)
$.ae.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jA:function(a){var u,t
for(u=$.ae.length,t=0;t<u;++t)if(a===$.ae[t])return!0
return!1},
m2:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.o(b,"$ib",[P.e],"$ab")
u=a.gN(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.t())return
r=H.h(u.gG(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.t()){if(s<=5)return
if(0>=b.length)return H.l(b,-1)
q=b.pop()
if(0>=b.length)return H.l(b,-1)
p=b.pop()}else{o=u.gG(u);++s
if(!u.t()){if(s<=4){C.a.h(b,H.h(o))
return}q=H.h(o)
if(0>=b.length)return H.l(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gG(u);++s
for(;u.t();o=n,n=m){m=u.gG(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.l(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.h(o)
q=H.h(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.l(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
k3:function(a,b){var u,t,s=P.d5(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.D)(a),++t)s.h(0,H.B(a[t],b))
return s},
k5:function(a){var u,t={}
if(P.jA(a))return"{...}"
u=new P.bF("")
try{C.a.h($.ae,a)
u.a+="{"
t.a=!0
J.lf(a,new P.fz(t,u))
u.a+="}"}finally{if(0>=$.ae.length)return H.l($.ae,-1)
$.ae.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iD:function iD(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bJ:function bJ(a){this.a=a
this.c=this.b=null},
dZ:function dZ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fw:function fw(){},
t:function t(){},
fy:function fy(){},
fz:function fz(a,b){this.a=a
this.b=b},
a1:function a1(){},
iK:function iK(){},
e_:function e_(){},
bZ:function bZ(){},
c_:function c_(){},
f6:function f6(){},
fm:function fm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fl:function fl(a){this.a=a},
i0:function i0(){},
i1:function i1(){},
iU:function iU(a){this.b=0
this.c=a},
lt:function(a){if(a instanceof H.bY)return a.i(0)
return"Instance of '"+H.bC(a)+"'"},
lz:function(a,b,c){var u,t
H.B(b,c)
u=J.lw(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.O(u,t,b)
return H.o(u,"$ib",[c],"$ab")},
k4:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bs(a);u.t();)C.a.h(s,H.B(u.gG(u),c))
if(b)return s
return H.o(J.jn(s),"$ib",t,"$ab")},
js:function(a){var u,t,s=P.C
H.o(a,"$ii",[s],"$ai")
if(a.constructor===Array){H.o(a,"$iaE",[s],"$aaE")
u=a.length
t=P.ki(0,null,u)
return H.kg(t<u?C.a.d_(a,0,t):a)}return P.lN(a,0,null)},
lN:function(a,b,c){var u,t,s
H.o(a,"$ii",[P.C],"$ai")
u=J.bs(a)
for(t=0;t<b;++t)if(!u.t())throw H.f(P.aJ(b,0,t,null,null))
s=[]
for(;u.t();)s.push(u.gG(u))
return H.kg(s)},
lJ:function(a){return new H.fq(a,H.lx(a,!1,!0,!1))},
ko:function(a,b,c){var u=J.bs(b)
if(!u.t())return a
if(c.length===0){do a+=H.h(u.gG(u))
while(u.t())}else{a+=H.h(u.gG(u))
for(;u.t();)a=a+c+H.h(u.gG(u))}return a},
kD:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.o(a,"$ib",[P.C],"$ab")
if(c===C.m){u=$.lc().b
u=u.test(b)}else u=!1
if(u)return b
t=C.H.f5(H.B(b,H.af(c,"bZ",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.l(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jr(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lp:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lq:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cR:function(a){if(a>=10)return""+a
return"0"+a},
jY:function(a,b){return new P.bc(1e6*b+1000*a)},
cV:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ag(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lt(a)},
lj:function(a){return new P.as(!1,null,null,a)},
jg:function(a,b,c){return new P.as(!0,a,b,c)},
h2:function(a,b){return new P.bD(null,null,!0,a,b,"Value not in range")},
aJ:function(a,b,c,d,e){return new P.bD(b,c,!0,a,d,"Invalid value")},
ki:function(a,b,c){if(0>a||a>c)throw H.f(P.aJ(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.aJ(b,a,c,"end",null))
return b}return c},
kh:function(a,b){if(typeof a!=="number")return a.ai()
if(a<0)throw H.f(P.aJ(a,0,null,b,null))},
R:function(a,b,c,d,e){var u=H.a5(e==null?J.bt(b):e)
return new P.fn(u,!0,a,c,"Index out of range")},
ao:function(a){return new P.hZ(a)},
kt:function(a){return new P.hX(a)},
kn:function(a){return new P.ch(a)},
bb:function(a){return new P.eS(a)},
X:function(a){return new P.dR(a)},
jO:function(a){H.mx(a)},
K:function K(){},
am:function am(a,b){this.a=a
this.b=b},
z:function z(){},
bc:function bc(a){this.a=a},
f2:function f2(){},
f3:function f3(){},
bd:function bd(){},
eH:function eH(){},
dg:function dg(){},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bD:function bD(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fn:function fn(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hZ:function hZ(a){this.a=a},
hX:function hX(a){this.a=a},
ch:function ch(a){this.a=a},
eS:function eS(a){this.a=a},
fX:function fX(){},
dn:function dn(){},
eX:function eX(a){this.a=a},
dR:function dR(a){this.a=a},
fg:function fg(a,b){this.a=a
this.b=b},
be:function be(){},
C:function C(){},
i:function i(){},
aD:function aD(){},
b:function b(){},
H:function H(){},
G:function G(){},
a0:function a0(){},
I:function I(){},
ad:function ad(){},
e:function e(){},
bF:function bF(a){this.a=a},
mf:function(a){var u,t=J.O(a)
if(!!t.$ibf){u=t.gcu(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.es(a.data,a.height,a.width)},
me:function(a){if(a instanceof P.es)return{data:a.a,height:a.b,width:a.c}
return a},
b2:function(a){var u,t,s,r,q
if(a==null)return
u=P.k2(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r){q=H.E(t[r])
u.O(0,q,a[q])}return u},
md:function(a){var u={}
a.K(0,new P.j2(u))
return u},
es:function es(a,b,c){this.a=a
this.b=b
this.c=c},
j2:function j2(a){this.a=a},
fc:function fc(a,b){this.a=a
this.b=b},
fd:function fd(){},
fe:function fe(){},
iC:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lX:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iE:function iE(){},
ac:function ac(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aW:function aW(){},
ft:function ft(){},
b_:function b_(){},
fV:function fV(){},
h1:function h1(){},
ce:function ce(){},
hu:function hu(){},
n:function n(){},
b0:function b0(){},
hJ:function hJ(){},
dX:function dX(){},
dY:function dY(){},
e7:function e7(){},
e8:function e8(){},
ej:function ej(){},
ek:function ek(){},
eq:function eq(){},
er:function er(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(a){this.a=a},
eM:function eM(){},
bu:function bu(){},
fW:function fW(){},
dK:function dK(){},
cL:function cL(){},
dj:function dj(){},
bE:function bE(){},
dl:function dl(){},
dr:function dr(){},
dx:function dx(){},
hm:function hm(){},
ef:function ef(){},
eg:function eg(){}},W={
jT:function(){var u=document.createElement("a")
return u},
ji:function(){var u=document.createElement("canvas")
return u},
lr:function(a,b,c){var u=document.body,t=(u&&C.r).Z(u,a,b,c)
t.toString
u=W.y
u=new H.cp(new W.a9(t),H.j(new W.f5(),{func:1,ret:P.K,args:[u]}),[u])
return H.k(u.gaj(u),"$iJ")},
ls:function(a){H.k(a,"$id")
return"wheel"},
c2:function(a){var u,t,s,r="element tag unavailable"
try{u=J.jJ(a)
t=u.gcN(a)
if(typeof t==="string")r=u.gcN(a)}catch(s){H.ak(s)}return r},
iB:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kB:function(a,b,c,d){var u=W.iB(W.iB(W.iB(W.iB(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a_:function(a,b,c,d,e){var u=W.kJ(new W.iq(c),W.m)
if(u!=null&&!0)J.le(a,b,u,!1)
return new W.ip(a,b,u,!1,[e])},
kA:function(a){var u=W.jT(),t=window.location
u=new W.bn(new W.iJ(u,t))
u.dc(a)
return u},
lV:function(a,b,c,d){H.k(a,"$iJ")
H.E(b)
H.E(c)
H.k(d,"$ibn")
return!0},
lW:function(a,b,c,d){var u,t,s
H.k(a,"$iJ")
H.E(b)
H.E(c)
u=H.k(d,"$ibn").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
kC:function(){var u=P.e,t=P.k3(C.o,u),s=H.u(C.o,0),r=H.j(new W.iR(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.iQ(t,P.d5(u),P.d5(u),P.d5(u),null)
t.df(null,new H.fC(C.o,r,[s,u]),q,null)
return t},
kJ:function(a,b){var u
H.j(a,{func:1,ret:-1,args:[b]})
u=$.T
if(u===C.e)return a
return u.cp(a,b)},
q:function q(){},
eF:function eF(){},
cI:function cI(){},
eG:function eG(){},
bU:function bU(){},
cK:function cK(){},
b8:function b8(){},
bv:function bv(){},
bX:function bX(){},
b9:function b9(){},
c0:function c0(){},
eT:function eT(){},
L:function L(){},
c1:function c1(){},
eU:function eU(){},
az:function az(){},
aA:function aA(){},
eV:function eV(){},
eW:function eW(){},
eZ:function eZ(){},
an:function an(){},
f_:function f_(){},
cS:function cS(){},
cT:function cT(){},
f0:function f0(){},
f1:function f1(){},
ik:function ik(a,b){this.a=a
this.b=b},
J:function J(){},
f5:function f5(){},
m:function m(){},
d:function d(){},
aB:function aB(){},
fa:function fa(){},
fb:function fb(){},
ff:function ff(){},
aC:function aC(){},
fk:function fk(){},
by:function by(){},
bf:function bf(){},
c6:function c6(){},
aG:function aG(){},
d6:function d6(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(a){this.a=a},
fG:function fG(){},
fH:function fH(a){this.a=a},
aH:function aH(){},
fI:function fI(){},
a2:function a2(){},
a9:function a9(a){this.a=a},
y:function y(){},
cc:function cc(){},
aI:function aI(){},
h_:function h_(){},
h8:function h8(){},
h9:function h9(a){this.a=a},
hb:function hb(){},
aK:function aK(){},
hk:function hk(){},
aL:function aL(){},
hl:function hl(){},
aM:function aM(){},
ho:function ho(){},
hp:function hp(a){this.a=a},
at:function at(){},
bG:function bG(){},
dp:function dp(){},
hv:function hv(){},
hw:function hw(){},
cj:function cj(){},
aN:function aN(){},
au:function au(){},
hy:function hy(){},
hz:function hz(){},
hD:function hD(){},
aP:function aP(){},
av:function av(){},
hH:function hH(){},
hI:function hI(){},
bm:function bm(){},
i_:function i_(){},
ia:function ia(){},
aR:function aR(){},
cq:function cq(){},
cr:function cr(){},
il:function il(){},
dM:function dM(){},
iA:function iA(){},
e4:function e4(){},
iN:function iN(){},
iO:function iO(){},
ij:function ij(){},
im:function im(a){this.a=a},
io:function io(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jw:function jw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ip:function ip(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iq:function iq(a){this.a=a},
bn:function bn(a){this.a=a},
x:function x(){},
de:function de(a){this.a=a},
fR:function fR(a){this.a=a},
fQ:function fQ(a,b,c){this.a=a
this.b=b
this.c=c},
ec:function ec(){},
iL:function iL(){},
iM:function iM(){},
iQ:function iQ(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iR:function iR(){},
iP:function iP(){},
cX:function cX(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aj:function aj(){},
iJ:function iJ(a,b){this.a=a
this.b=b},
et:function et(a){this.a=a},
iV:function iV(a){this.a=a},
dL:function dL(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dS:function dS(){},
dT:function dT(){},
dV:function dV(){},
dW:function dW(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e5:function e5(){},
e6:function e6(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
cx:function cx(){},
cy:function cy(){},
ed:function ed(){},
ee:function ee(){},
ei:function ei(){},
el:function el(){},
em:function em(){},
cz:function cz(){},
cA:function cA(){},
eo:function eo(){},
ep:function ep(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){}},O={
jX:function(a){var u=new O.Y([a])
u.bO(a)
return u},
Y:function Y(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
c8:function c8(){this.b=this.a=null},
df:function df(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bH:function bH(){}},E={
lK:function(a,b){var u=new E.h4(a)
u.d6(a,b)
return u},
lO:function(a,b,c,d,e){var u,t,s=J.O(a)
if(!!s.$ibv)return E.kp(a,!0,!0,!0,!1)
u=W.ji()
t=u.style
t.width="100%"
t.height="100%"
s.gcr(a).h(0,u)
return E.kp(u,!0,!0,!0,!1)},
kp:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dt(),j=H.k(C.k.bJ(a,"webgl2",P.ly(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibE")
if(j==null)H.a7(P.X("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.lK(j,a)
u=new T.hA(j)
H.a5(j.getParameter(3379))
u.c=H.a5(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.dD(a)
t=new X.fs()
t.c=new X.ai(!1,!1,!1)
t.sew(P.d5(P.C))
u.b=t
t=new X.fJ(u)
t.f=0
t.r=V.bk()
t.x=V.bk()
t.ch=t.Q=1
u.c=t
t=new X.fx(u)
t.r=0
t.x=V.bk()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hG(u)
t.f=V.bk()
t.r=V.bk()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sdB(H.c([],[[P.ci,P.I]]))
t=u.z
s=document
r=W.a2
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a_(s,"contextmenu",H.j(u.ge_(),q),!1,r))
t=u.z
p=W.m
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a_(a,"focus",H.j(u.ge5(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a_(a,"blur",H.j(u.gdU(),o),!1,p))
t=u.z
n=W.aG
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a_(s,"keyup",H.j(u.ge9(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a_(s,"keydown",H.j(u.ge7(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a_(a,"mousedown",H.j(u.gec(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a_(a,"mouseup",H.j(u.geg(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a_(a,l,H.j(u.gee(),q),!1,r))
n=u.z
m=W.aR;(n&&C.a).h(n,W.a_(a,H.E(W.ls(a)),H.j(u.gei(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a_(s,l,H.j(u.ge1(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a_(s,"mouseup",H.j(u.ge3(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a_(s,"pointerlockchange",H.j(u.gek(),o),!1,p))
p=u.z
o=W.av
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a_(a,"touchstart",H.j(u.geu(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a_(a,"touchend",H.j(u.gep(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a_(a,"touchmove",H.j(u.ger(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.am(Date.now(),!1)
k.cy=0
k.ce()
return k},
eN:function eN(){},
aa:function aa(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h4:function h4(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h5:function h5(a){this.a=a},
h6:function h6(a){this.a=a},
h7:function h7(a){this.a=a},
dt:function dt(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hC:function hC(a){this.a=a}},Z={
jv:function(a,b,c){var u
H.o(c,"$ib",[P.C],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.iZ(c)),35044)
a.bindBuffer(b,null)
return new Z.dI(b,u)},
ap:function(a){return new Z.b1(a)},
dI:function dI(a,b){this.a=a
this.b=b},
cM:function cM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ib:function ib(a){this.a=a},
cN:function cN(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bg:function bg(a,b,c){this.a=a
this.b=b
this.c=c},
b1:function b1(a){this.a=a}},D={
Q:function(){var u=new D.c3()
u.sa9(null)
u.saA(null)
u.c=null
u.d=0
return u},
eQ:function eQ(){},
c3:function c3(){var _=this
_.d=_.c=_.b=_.a=null},
f8:function f8(a){this.a=a},
f9:function f9(a){this.a=a},
v:function v(){this.b=null},
cY:function cY(a){this.b=null
this.$ti=a},
cZ:function cZ(a){this.b=null
this.$ti=a},
M:function M(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
kR:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="testCanvas",a1=null,a2="modifiers",a3=34067,a4=V.lM("Test 030"),a5=W.ji()
a5.className="pageLargeCanvas"
a5.id=a0
a4.a.appendChild(a5)
u=[P.e]
a4.cn(H.c(["A test of the Normal shader for dynamically rendering normal maps."],u))
a4.cn(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a0)
if(t==null)H.a7(P.X("Failed to find an element with the identifier, testCanvas."))
s=E.lO(t,!0,!0,!0,!1)
r=new E.aa()
r.a=""
r.b=!0
u=E.aa
r.sds(0,O.jX(u))
r.y.aW(r.gfo(),r.gfs())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sbL(0,a1)
r.saG(a1)
q=F.km()
F.cB(q,a1,a1,1,1,1,0,0,1)
F.cB(q,a1,a1,1,1,0,1,0,3)
F.cB(q,a1,a1,1,1,0,0,1,2)
F.cB(q,a1,a1,1,1,-1,0,0,0)
F.cB(q,a1,a1,1,1,0,-1,0,0)
F.cB(q,a1,a1,1,1,0,0,-1,3)
q.at()
r.sbL(0,q)
p=new U.c5()
p.bO(U.a3)
p.aW(p.gdS(),p.gen())
p.e=null
p.f=V.da()
p.r=0
o=s.r
n=new U.dF()
m=U.jj()
m.sbI(0,!0)
m.sbB(6.283185307179586)
m.sbD(0)
m.sX(0,0)
m.sbC(100)
m.sM(0)
m.sbw(0.5)
n.b=m
l=n.gap()
m.gp().h(0,l)
m=U.jj()
m.sbI(0,!0)
m.sbB(6.283185307179586)
m.sbD(0)
m.sX(0,0)
m.sbC(100)
m.sM(0)
m.sbw(0.5)
n.c=m
m.gp().h(0,l)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
k=new X.ai(!1,!1,!1)
j=n.d
n.d=k
m=[X.ai]
l=new D.M(a2,j,k,m)
l.b=!0
n.J(l)
l=n.f
if(l!==!1){n.f=!1
l=new D.M("invertX",l,!1,[P.K])
l.b=!0
n.J(l)}l=n.r
if(l!==!1){n.r=!1
l=new D.M("invertY",l,!1,[P.K])
l.b=!0
n.J(l)}n.aD(o)
p.h(0,n)
o=s.r
n=new U.dE()
l=U.jj()
l.sbI(0,!0)
l.sbB(6.283185307179586)
l.sbD(0)
l.sX(0,0)
l.sbC(100)
l.sM(0)
l.sbw(0.2)
n.b=l
l.gp().h(0,n.gap())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
k=new X.ai(!0,!1,!1)
j=n.c
n.c=k
l=new D.M(a2,j,k,m)
l.b=!0
n.J(l)
n.aD(o)
p.h(0,n)
o=s.r
n=new U.dG()
n.c=0.01
n.e=n.d=0
k=new X.ai(!1,!1,!1)
n.b=k
m=new D.M(a2,a1,k,m)
m.b=!0
n.J(m)
n.aD(o)
p.h(0,n)
r.saG(p)
i=new O.df()
p=$.k6
i.b=p==null?$.k6=new V.d9(1,0,0,0,1,0,0,0,1):p
i.c=V.da()
i.d=C.f
i.cf(a1)
i.cg(a1)
i.bT()
i.r=null
p=s.f
o=p.a
h=o.createTexture()
o.bindTexture(a3,h)
o.texParameteri(a3,10242,10497)
o.texParameteri(a3,10243,10497)
o.texParameteri(a3,10241,9729)
o.texParameteri(a3,10240,9729)
o.bindTexture(a3,a1)
g=new T.ds()
g.a=0
g.b=h
g.c=!1
g.d=0
p.ao(g,h,"../resources/diceBumpMap/posx.png",34069,!1,!1)
p.ao(g,h,"../resources/diceBumpMap/negx.png",34070,!1,!1)
p.ao(g,h,"../resources/diceBumpMap/posy.png",34071,!1,!1)
p.ao(g,h,"../resources/diceBumpMap/negy.png",34072,!1,!1)
p.ao(g,h,"../resources/diceBumpMap/posz.png",34073,!1,!1)
p.ao(g,h,"../resources/diceBumpMap/negz.png",34074,!1,!1)
if(i.d!==C.h){i.d=C.h
i.cf(a1)
i.a=null}i.cg(g)
f=X.k0(a1)
e=new V.aU(0.5,0.5,1,1)
if(!f.a.n(0,e)){j=f.a
f.a=e
p=new D.M("color",j,e,[V.aU])
p.b=!0
o=f.x
if(o!=null)o.A(p)}d=new M.cU()
d.sdd(0,O.jX(u))
d.d.aW(d.gdW(),d.gdY())
d.x=d.r=d.f=d.e=null
c=X.k0(a1)
b=new X.dh()
b.c=1.0471975511965976
b.d=0.1
b.e=2000
b.saG(a1)
u=b.c
if(!(Math.abs(u-1.0471975511965976)<$.P().a)){b.c=1.0471975511965976
u=new D.M("fov",u,1.0471975511965976,[P.z])
u.b=!0
b.al(u)}u=b.d
if(!(Math.abs(u-0.1)<$.P().a)){b.d=0.1
u=new D.M("near",u,0.1,[P.z])
u.b=!0
b.al(u)}u=b.e
if(!(Math.abs(u-2000)<$.P().a)){b.e=2000
u=new D.M("far",u,2000,[P.z])
u.b=!0
b.al(u)}u=d.a
if(u!==b){if(u!=null)u.gp().R(0,d.ga2())
j=d.a
d.a=b
b.gp().h(0,d.ga2())
u=new D.M("camera",j,d.a,[X.cP])
u.b=!0
d.a7(u)}d.scO(0,c)
d.scP(a1)
d.scP(i)
d.scO(0,f)
d.d.h(0,r)
u=d.a
a=V.aY(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
p=new U.cQ()
p.a=a
u.saG(p)
u=s.d
if(u!==d){if(u!=null)u.gp().R(0,s.gbP())
s.d=d
d.gp().h(0,s.gbP())
s.bQ()}u=s.z
if(u==null)u=s.z=D.Q()
p={func:1,ret:-1,args:[D.v]}
o=H.j(new D.ja(a4,i),p)
if(u.b==null)u.saA(H.c([],[p]))
u=u.b;(u&&C.a).h(u,o)
V.mA(s)},
ja:function ja(a,b){this.a=a
this.b=b}},X={cO:function cO(a,b){this.a=a
this.b=b},d3:function d3(a,b){this.a=a
this.b=b},fs:function fs(){var _=this
_.d=_.c=_.b=_.a=null},d7:function d7(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fx:function fx(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ai:function ai(a,b,c){this.a=a
this.b=b
this.c=c},aZ:function aZ(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fJ:function fJ(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c9:function c9(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h0:function h0(){},dv:function dv(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hG:function hG(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dD:function dD(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
k0:function(a){var u=new X.fh(),t=new V.aU(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kk
if(t==null){t=V.kj(0,0,1,1)
$.kk=t}u.r=t
return u},
cP:function cP(){},
fh:function fh(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dh:function dh(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dq:function dq(){}},V={
mF:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.cX(a-b,u)
return(a<0?a+u:a)+b},
U:function(a,b,c){if(a==null)return C.b.a0("null",c)
return C.b.a0(C.c.cR(Math.abs(a-0)<$.P().a?0:a,b),c+b+1)},
bO:function(a,b,c){var u,t,s,r,q,p
H.o(a,"$ib",[P.z],"$ab")
u=H.c([],[P.e])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.D)(a),++r){q=V.U(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.l(u,p)
C.a.O(u,p,C.b.a0(u[p],s))}return u},
jN:function(a){return C.c.fP(Math.pow(2,C.M.bx(Math.log(H.mc(a))/Math.log(2))))},
da:function(){var u=$.k7
return u==null?$.k7=V.aY(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aY:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bi(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bk:function(){var u=$.kd
return u==null?$.kd=new V.a4(0,0):u},
kj:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dk(a,b,c,d)},
dH:function(){var u=$.kx
return u==null?$.kx=new V.V(0,0,0):u},
aU:function aU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f7:function f7(a){this.a=a},
d9:function d9(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bi:function bi(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
di:function di(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dk:function dk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
N:function N(a,b){this.a=a
this.b=b},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
S:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.X("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.am(a,0)
t=C.b.am(b,0)
s=new V.h3()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
r:function(a){var u=new V.hc()
u.d7(a)
return u},
hF:function(){var u=new V.hE(),t=P.e
u.seK(new H.aF([t,V.cg]))
u.seN(new H.aF([t,V.cl]))
u.c=null
return u},
aT:function aT(){},
ah:function ah(){},
d8:function d8(){},
ab:function ab(){this.a=null},
h3:function h3(){this.b=this.a=null},
hc:function hc(){this.a=null},
cg:function cg(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
du:function du(a,b,c){this.a=a
this.b=b
this.c=c},
cl:function cl(a){this.b=a
this.c=null},
hE:function hE(){this.c=this.b=this.a=null},
cm:function cm(a){this.b=a
this.a=this.c=null},
mA:function(a){P.lP(C.J,new V.jd(a))},
lM:function(a){var u=new V.hg()
u.d9(a,!0)
return u},
ba:function ba(){},
jd:function jd(a){this.a=a},
eY:function eY(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fi:function fi(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fj:function fj(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fZ:function fZ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hg:function hg(){this.b=this.a=null},
hi:function hi(a){this.a=a},
hh:function hh(a){this.a=a},
hj:function hj(a){this.a=a}},U={
jj:function(){var u=new U.eR()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
eR:function eR(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cQ:function cQ(){this.b=this.a=null},
c5:function c5(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a3:function a3(){},
dE:function dE(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dF:function dF(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dG:function dG(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cU:function cU(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
k9:function(a){var u,t=a!==C.f,s=a===C.j,r=a===C.h,q="Normal_"+C.d.i(a.a),p=$.b5(),o=$.b4()
o=p.a|o.a
u=new Z.b1(o)
if(t)u=new Z.b1(o|$.b3().a)
if(s)u=new Z.b1(u.a|$.b6().a)
return new A.fT(a,t,s,r,q,r?new Z.b1(u.a|$.b7().a):u)},
ju:function(a,b,c,d,e){var u=new A.hO(a,c,e)
u.f=d
u.seV(P.lz(d,0,P.C))
return u},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.c=c},
eI:function eI(a){this.a=a},
fS:function fS(a,b){var _=this
_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fT:function fT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cf:function cf(){},
bw:function bw(a,b){this.a=a
this.b=b},
dw:function dw(){},
hV:function hV(a){this.a=a},
cn:function cn(a,b,c){this.a=a
this.c=b
this.d=c},
hQ:function hQ(a,b,c){this.a=a
this.c=b
this.d=c},
hS:function hS(a,b,c){this.a=a
this.c=b
this.d=c},
hU:function hU(a,b,c){this.a=a
this.c=b
this.d=c},
hO:function hO(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
hN:function hN(a,b,c){this.a=a
this.c=b
this.d=c},
hP:function hP(a,b,c){this.a=a
this.c=b
this.d=c},
hR:function hR(a,b,c){this.a=a
this.c=b
this.d=c},
hT:function hT(a,b,c){this.a=a
this.c=b
this.d=c},
hW:function hW(a,b,c){this.a=a
this.c=b
this.d=c},
dy:function dy(a,b,c){this.a=a
this.c=b
this.d=c},
bI:function bI(a,b,c){this.a=a
this.c=b
this.d=c},
dz:function dz(a,b,c){this.a=a
this.c=b
this.d=c},
dA:function dA(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iY:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cB:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.V(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.V(u+a3,t+a1,s+a2)
q=new V.V(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.V(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.iY(i)
l=F.iY(j.b)
k=F.mD(d,a0,new F.iX(j,F.iY(j.c),F.iY(j.d),l,m,c),b)
if(k!=null)a.fn(k)},
mD:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.j(c,{func:1,ret:-1,args:[F.ax,P.z,P.z]})
if(a<1)return
if(b<1)return
u=F.km()
t=H.c([],[F.ax])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.cm(new V.aU(p,0,0,1),new V.a4(r,1))
c.$3(o,r,0)
C.a.h(t,o.bv(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.cm(new V.aU(j,i,h,1),new V.a4(r,m))
c.$3(o,r,n)
C.a.h(t,o.bv(d))}}u.d.eY(a+1,b+1,t)
return u},
cW:function(a,b,c){var u=new F.Z(),t=a.a
if(t==null)H.a7(P.X("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.a7(P.X("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.W()
return u},
km:function(){var u=new F.dm(),t=new F.i2(u)
t.b=!1
t.seW(H.c([],[F.ax]))
u.a=t
t=new F.hf(u)
t.sbk(H.c([],[F.bj]))
u.b=t
t=new F.he(u)
t.sdI(H.c([],[F.aX]))
u.c=t
t=new F.hd(u)
t.sdC(H.c([],[F.Z]))
u.d=t
u.e=null
return u},
ky:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ax(),r=new F.i7()
r.sbk(H.c([],[F.bj]))
s.b=r
r=new F.i6()
u=[F.aX]
r.sdJ(H.c([],u))
r.sdK(H.c([],u))
s.c=r
r=new F.i3()
u=[F.Z]
r.sdD(H.c([],u))
r.sdE(H.c([],u))
r.sdF(H.c([],u))
s.d=r
h=$.l8()
s.e=0
r=$.b5()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.b4().a)!==0?e:t
s.x=(u&$.b3().a)!==0?b:t
s.y=(u&$.b6().a)!==0?f:t
s.z=(u&$.b7().a)!==0?g:t
s.Q=(u&$.l9().a)!==0?c:t
s.ch=(u&$.bT().a)!==0?i:0
s.cx=(u&$.bS().a)!==0?a:t
return s},
iX:function iX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Z:function Z(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
aX:function aX(){this.b=this.a=null},
bj:function bj(){this.a=null},
dm:function dm(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hd:function hd(a){this.a=a
this.b=null},
he:function he(a){this.a=a
this.b=null},
hf:function hf(a){this.a=a
this.b=null},
ax:function ax(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i9:function i9(a){this.a=a},
i8:function i8(a){this.a=a},
i2:function i2(a){this.a=a
this.c=this.b=null},
i3:function i3(){this.d=this.c=this.b=null},
i4:function i4(a,b){this.a=a
this.b=b},
i5:function i5(a,b){this.a=a
this.b=b},
i6:function i6(){this.c=this.b=null},
i7:function i7(){this.b=null}},T={ck:function ck(){},ds:function ds(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hA:function hA(a){var _=this
_.a=a
_.e=_.d=_.c=null},hB:function hB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jp.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gD:function(a){return H.cd(a)},
i:function(a){return"Instance of '"+H.bC(a)+"'"}}
J.fo.prototype={
i:function(a){return String(a)},
gD:function(a){return a?519018:218159},
$iK:1}
J.fp.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gD:function(a){return 0}}
J.d2.prototype={
gD:function(a){return 0},
i:function(a){return String(a)}}
J.fY.prototype={}
J.co.prototype={}
J.bh.prototype={
i:function(a){var u=a[$.kY()]
if(u==null)return this.d2(a)
return"JavaScript function for "+H.h(J.ag(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibe:1}
J.aE.prototype={
h:function(a,b){H.B(b,H.u(a,0))
if(!!a.fixed$length)H.a7(P.ao("add"))
a.push(b)},
R:function(a,b){var u
if(!!a.fixed$length)H.a7(P.ao("remove"))
for(u=0;u<a.length;++u)if(J.W(a[u],b)){a.splice(u,1)
return!0}return!1},
K:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.bb(a))}},
k:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.O(t,u,H.h(a[u]))
return t.join(b)},
fk:function(a){return this.k(a,"")},
ff:function(a,b){var u,t,s
H.j(b,{func:1,ret:P.K,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.w(b.$1(s)))return s
if(a.length!==u)throw H.f(P.bb(a))}throw H.f(H.jm())},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
d_:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.aJ(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.aJ(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.u(a,0)])
return H.c(a.slice(b,c),[H.u(a,0)])},
gaR:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.jm())},
co:function(a,b){var u,t
H.j(b,{func:1,ret:P.K,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.w(b.$1(a[t])))return!0
if(a.length!==u)throw H.f(P.bb(a))}return!1},
P:function(a,b){var u
for(u=0;u<a.length;++u)if(J.W(a[u],b))return!0
return!1},
i:function(a){return P.jl(a,"[","]")},
gN:function(a){return new J.al(a,a.length,[H.u(a,0)])},
gD:function(a){return H.cd(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.a7(P.ao("set length"))
if(b<0)throw H.f(P.aJ(b,0,null,"newLength",null))
a.length=b},
O:function(a,b,c){H.B(c,H.u(a,0))
if(!!a.immutable$list)H.a7(P.ao("indexed set"))
if(b>=a.length||b<0)throw H.f(H.cE(a,b))
a[b]=c},
$ii:1,
$ib:1}
J.jo.prototype={}
J.al.prototype={
gG:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.D(s))
u=t.c
if(u>=r){t.sc6(null)
return!1}t.sc6(s[u]);++t.c
return!0},
sc6:function(a){this.d=H.B(a,H.u(this,0))},
$iaD:1}
J.d1.prototype={
fP:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.ao(""+a+".toInt()"))},
bx:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.ao(""+a+".floor()"))},
a1:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.ao(""+a+".round()"))},
cR:function(a,b){var u,t
if(b>20)throw H.f(P.aJ(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gD:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
cX:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
d5:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ci(a,b)},
ar:function(a,b){return(a|0)===a?a/b|0:this.ci(a,b)},
ci:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.ao("Result of truncating division is "+H.h(u)+": "+H.h(a)+" ~/ "+b))},
aO:function(a,b){var u
if(a>0)u=this.eJ(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
eJ:function(a,b){return b>31?0:a>>>b},
$iz:1,
$ia0:1}
J.d0.prototype={$iC:1}
J.d_.prototype={}
J.bz.prototype={
bu:function(a,b){if(b<0)throw H.f(H.cE(a,b))
if(b>=a.length)H.a7(H.cE(a,b))
return a.charCodeAt(b)},
am:function(a,b){if(b>=a.length)throw H.f(H.cE(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.f(P.jg(b,null,null))
return a+b},
aY:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
aK:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.h2(b,null))
if(b>c)throw H.f(P.h2(b,null))
if(c>a.length)throw H.f(P.h2(c,null))
return a.substring(b,c)},
aZ:function(a,b){return this.aK(a,b,null)},
fS:function(a){return a.toLowerCase()},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.G)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a0:function(a,b){var u=b-a.length
if(u<=0)return a
return this.q(" ",u)+a},
i:function(a){return a},
gD:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ikb:1,
$ie:1}
H.p.prototype={
gl:function(a){return this.a.length},
m:function(a,b){return C.b.bu(this.a,b)},
$adC:function(){return[P.C]},
$at:function(){return[P.C]},
$ai:function(){return[P.C]},
$ab:function(){return[P.C]}}
H.f4.prototype={}
H.bA.prototype={
gN:function(a){var u=this
return new H.c7(u,u.gl(u),[H.af(u,"bA",0)])},
aV:function(a,b){return this.d1(0,H.j(b,{func:1,ret:P.K,args:[H.af(this,"bA",0)]}))}}
H.c7.prototype={
gG:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=J.jH(s),q=r.gl(s)
if(t.b!==q)throw H.f(P.bb(s))
u=t.c
if(u>=q){t.say(null)
return!1}t.say(r.w(s,u));++t.c
return!0},
say:function(a){this.d=H.B(a,H.u(this,0))},
$iaD:1}
H.fA.prototype={
gN:function(a){return new H.fB(J.bs(this.a),this.b,this.$ti)},
gl:function(a){return J.bt(this.a)},
w:function(a,b){return this.b.$1(J.jf(this.a,b))},
$ai:function(a,b){return[b]}}
H.fB.prototype={
t:function(){var u=this,t=u.b
if(t.t()){u.say(u.c.$1(t.gG(t)))
return!0}u.say(null)
return!1},
gG:function(a){return this.a},
say:function(a){this.a=H.B(a,H.u(this,1))},
$aaD:function(a,b){return[b]}}
H.fC.prototype={
gl:function(a){return J.bt(this.a)},
w:function(a,b){return this.b.$1(J.jf(this.a,b))},
$abA:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cp.prototype={
gN:function(a){return new H.ic(J.bs(this.a),this.b,this.$ti)}}
H.ic.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(H.w(t.$1(u.gG(u))))return!0
return!1},
gG:function(a){var u=this.a
return u.gG(u)}}
H.bx.prototype={}
H.dC.prototype={}
H.dB.prototype={}
H.hK.prototype={
a_:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fU.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fr.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.h(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.h(t.a)+")"
return s+r+"' on '"+u+"' ("+H.h(t.a)+")"}}
H.hY.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.je.prototype={
$1:function(a){if(!!J.O(a).$ibd)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.eh.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iad:1}
H.bY.prototype={
i:function(a){return"Closure '"+H.bC(this).trim()+"'"},
$ibe:1,
gfW:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hx.prototype={}
H.hn.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bR(u)+"'"}}
H.bV.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bV))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gD:function(a){var u,t=this.c
if(t==null)u=H.cd(this.a)
else u=typeof t!=="object"?J.br(t):H.cd(t)
return(u^H.cd(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.bC(u)+"'")}}
H.hM.prototype={
i:function(a){return this.a}}
H.eP.prototype={
i:function(a){return this.a}}
H.ha.prototype={
i:function(a){return"RuntimeError: "+H.h(this.a)}}
H.id.prototype={
i:function(a){return"Assertion failed: "+P.cV(this.a)}}
H.aF.prototype={
gl:function(a){return this.a},
gV:function(a){return new H.d4(this,[H.u(this,0)])},
ct:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.c3(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.c3(t,b)}else return s.fi(b)},
fi:function(a){var u=this.d
if(u==null)return!1
return this.by(this.b7(u,J.br(a)&0x3ffffff),a)>=0},
m:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aM(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aM(r,b)
s=t==null?null:t.b
return s}else return q.fj(b)},
fj:function(a){var u,t,s=this.d
if(s==null)return
u=this.b7(s,J.br(a)&0x3ffffff)
t=this.by(u,a)
if(t<0)return
return u[t].b},
O:function(a,b,c){var u,t,s,r,q,p,o=this
H.B(b,H.u(o,0))
H.B(c,H.u(o,1))
if(typeof b==="string"){u=o.b
o.bW(u==null?o.b=o.bi():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.bW(t==null?o.c=o.bi():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bi()
r=J.br(b)&0x3ffffff
q=o.b7(s,r)
if(q==null)o.bn(s,r,[o.bj(b,c)])
else{p=o.by(q,b)
if(p>=0)q[p].b=c
else q.push(o.bj(b,c))}}},
K:function(a,b){var u,t,s=this
H.j(b,{func:1,ret:-1,args:[H.u(s,0),H.u(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.f(P.bb(s))
u=u.c}},
bW:function(a,b,c){var u,t=this
H.B(b,H.u(t,0))
H.B(c,H.u(t,1))
u=t.aM(a,b)
if(u==null)t.bn(a,b,t.bj(b,c))
else u.b=c},
dj:function(){this.r=this.r+1&67108863},
bj:function(a,b){var u,t=this,s=new H.fu(H.B(a,H.u(t,0)),H.B(b,H.u(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.dj()
return s},
by:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.W(a[t].a,b))return t
return-1},
i:function(a){return P.k5(this)},
aM:function(a,b){return a[b]},
b7:function(a,b){return a[b]},
bn:function(a,b,c){a[b]=c},
dz:function(a,b){delete a[b]},
c3:function(a,b){return this.aM(a,b)!=null},
bi:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bn(t,u,t)
this.dz(t,u)
return t}}
H.fu.prototype={}
H.d4.prototype={
gl:function(a){return this.a.a},
gN:function(a){var u=this.a,t=new H.fv(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fv.prototype={
gG:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bb(t))
else{t=u.c
if(t==null){u.sbV(null)
return!1}else{u.sbV(t.a)
u.c=u.c.c
return!0}}},
sbV:function(a){this.d=H.B(a,H.u(this,0))},
$iaD:1}
H.j6.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.j7.prototype={
$2:function(a,b){return this.a(a,b)},
$S:30}
H.j8.prototype={
$1:function(a){return this.a(H.E(a))},
$S:31}
H.fq.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikb:1}
H.cb.prototype={$in_:1}
H.db.prototype={
gl:function(a){return a.length},
$iF:1,
$aF:function(){}}
H.ca.prototype={
m:function(a,b){H.bo(b,a,a.length)
return a[b]},
$abx:function(){return[P.z]},
$at:function(){return[P.z]},
$ii:1,
$ai:function(){return[P.z]},
$ib:1,
$ab:function(){return[P.z]}}
H.dc.prototype={
$abx:function(){return[P.C]},
$at:function(){return[P.C]},
$ii:1,
$ai:function(){return[P.C]},
$ib:1,
$ab:function(){return[P.C]}}
H.fK.prototype={
m:function(a,b){H.bo(b,a,a.length)
return a[b]}}
H.fL.prototype={
m:function(a,b){H.bo(b,a,a.length)
return a[b]}}
H.fM.prototype={
m:function(a,b){H.bo(b,a,a.length)
return a[b]}}
H.fN.prototype={
m:function(a,b){H.bo(b,a,a.length)
return a[b]}}
H.fO.prototype={
m:function(a,b){H.bo(b,a,a.length)
return a[b]}}
H.dd.prototype={
gl:function(a){return a.length},
m:function(a,b){H.bo(b,a,a.length)
return a[b]},
$in0:1}
H.fP.prototype={
gl:function(a){return a.length},
m:function(a,b){H.bo(b,a,a.length)
return a[b]}}
H.ct.prototype={}
H.cu.prototype={}
H.cv.prototype={}
H.cw.prototype={}
P.ig.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:14}
P.ie.prototype={
$1:function(a){var u,t
this.a.a=H.j(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:29}
P.ih.prototype={
$0:function(){this.a.$0()},
$S:2}
P.ii.prototype={
$0:function(){this.a.$0()},
$S:2}
P.en.prototype={
dg:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bN(new P.iT(this,b),0),a)
else throw H.f(P.ao("`setTimeout()` not found."))},
dh:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bN(new P.iS(this,a,Date.now(),b),0),a)
else throw H.f(P.ao("Periodic timer."))},
$iaO:1}
P.iT.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.iS.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.d5(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.aS.prototype={
fm:function(a){if(this.c!==6)return!0
return this.b.b.bG(H.j(this.d,{func:1,ret:P.K,args:[P.I]}),a.a,P.K,P.I)},
fh:function(a){var u=this.e,t=P.I,s={futureOr:1,type:H.u(this,1)},r=this.b.b
if(H.eE(u,{func:1,args:[P.I,P.ad]}))return H.jG(r.fJ(u,a.a,a.b,null,t,P.ad),s)
else return H.jG(r.bG(H.j(u,{func:1,args:[P.I]}),a.a,null,t),s)}}
P.aq.prototype={
cQ:function(a,b,c){var u,t,s,r=H.u(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.T
if(u!==C.e){u.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.m4(b,u)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aq($.T,[c])
s=b==null?1:3
this.bX(new P.aS(t,s,a,b,[r,c]))
return t},
fO:function(a,b){return this.cQ(a,null,b)},
bX:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$iaS")
t.c=a}else{if(s===2){u=H.k(t.c,"$iaq")
s=u.a
if(s<4){u.bX(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.j1(null,null,s,H.j(new P.ir(t,a),{func:1,ret:-1}))}},
cd:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$iaS")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iaq")
u=q.a
if(u<4){q.cd(a)
return}p.a=u
p.c=q.c}o.a=p.aN(a)
u=p.b
u.toString
P.j1(null,null,u,H.j(new P.iv(o,p),{func:1,ret:-1}))}},
bm:function(){var u=H.k(this.c,"$iaS")
this.c=null
return this.aN(u)},
aN:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
c0:function(a){var u,t,s=this,r=H.u(s,0)
H.jG(a,{futureOr:1,type:r})
u=s.$ti
if(H.jD(a,"$ic4",u,"$ac4"))if(H.jD(a,"$iaq",u,null))P.kz(a,s)
else P.lU(a,s)
else{t=s.bm()
H.B(a,r)
s.a=4
s.c=a
P.cs(s,t)}},
c1:function(a,b){var u,t=this
H.k(b,"$iad")
u=t.bm()
t.a=8
t.c=new P.a8(a,b)
P.cs(t,u)},
$ic4:1}
P.ir.prototype={
$0:function(){P.cs(this.a,this.b)},
$S:2}
P.iv.prototype={
$0:function(){P.cs(this.b,this.a.a)},
$S:2}
P.is.prototype={
$1:function(a){var u=this.a
u.a=0
u.c0(a)},
$S:14}
P.it.prototype={
$2:function(a,b){H.k(b,"$iad")
this.a.c1(a,b)},
$1:function(a){return this.$2(a,null)},
$S:33}
P.iu.prototype={
$0:function(){this.a.c1(this.b,this.c)},
$S:2}
P.iy.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.cM(H.j(s.d,{func:1}),null)}catch(r){u=H.ak(r)
t=H.bP(r)
if(o.d){s=H.k(o.a.a.c,"$ia8").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$ia8")
else q.b=new P.a8(u,t)
q.a=!0
return}if(!!J.O(n).$ic4){if(n instanceof P.aq&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$ia8")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.fO(new P.iz(p),null)
s.a=!1}},
$S:3}
P.iz.prototype={
$1:function(a){return this.a},
$S:35}
P.ix.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.u(s,0)
q=H.B(n.c,r)
p=H.u(s,1)
n.a.b=s.b.b.bG(H.j(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ak(o)
t=H.bP(o)
s=n.a
s.b=new P.a8(u,t)
s.a=!0}},
$S:3}
P.iw.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$ia8")
r=m.c
if(H.w(r.fm(u))&&r.e!=null){q=m.b
q.b=r.fh(u)
q.a=!1}}catch(p){t=H.ak(p)
s=H.bP(p)
r=H.k(m.a.a.c,"$ia8")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a8(t,s)
n.a=!0}},
$S:3}
P.dJ.prototype={}
P.hq.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.aq($.T,[P.C])
r.a=0
u=H.u(s,0)
t=H.j(new P.hs(r,s),{func:1,ret:-1,args:[u]})
H.j(new P.ht(r,q),{func:1,ret:-1})
W.a_(s.a,s.b,t,!1,u)
return q}}
P.hs.prototype={
$1:function(a){H.B(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.u(this.b,0)]}}}
P.ht.prototype={
$0:function(){this.b.c0(this.a.a)},
$S:2}
P.ci.prototype={}
P.hr.prototype={}
P.aO.prototype={}
P.a8.prototype={
i:function(a){return H.h(this.a)},
$ibd:1}
P.iW.prototype={$ine:1}
P.j0.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dg():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.i(0)
throw u},
$S:2}
P.iF.prototype={
fK:function(a){var u,t,s,r=null
H.j(a,{func:1,ret:-1})
try{if(C.e===$.T){a.$0()
return}P.kF(r,r,this,a,-1)}catch(s){u=H.ak(s)
t=H.bP(s)
P.j_(r,r,this,u,H.k(t,"$iad"))}},
fL:function(a,b,c){var u,t,s,r=null
H.j(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.e===$.T){a.$1(b)
return}P.kG(r,r,this,a,b,-1,c)}catch(s){u=H.ak(s)
t=H.bP(s)
P.j_(r,r,this,u,H.k(t,"$iad"))}},
f2:function(a,b){return new P.iH(this,H.j(a,{func:1,ret:b}),b)},
bq:function(a){return new P.iG(this,H.j(a,{func:1,ret:-1}))},
cp:function(a,b){return new P.iI(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
cM:function(a,b){H.j(a,{func:1,ret:b})
if($.T===C.e)return a.$0()
return P.kF(null,null,this,a,b)},
bG:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.T===C.e)return a.$1(b)
return P.kG(null,null,this,a,b,c,d)},
fJ:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.T===C.e)return a.$2(b,c)
return P.m5(null,null,this,a,b,c,d,e,f)}}
P.iH.prototype={
$0:function(){return this.a.cM(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iG.prototype={
$0:function(){return this.a.fK(this.b)},
$S:3}
P.iI.prototype={
$1:function(a){var u=this.c
return this.a.fL(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iD.prototype={
gN:function(a){var u=this,t=new P.dZ(u,u.r,u.$ti)
t.c=u.e
return t},
gl:function(a){return this.a},
P:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.k(u[b],"$ibJ")!=null}else{t=this.dt(b)
return t}},
dt:function(a){var u=this.d
if(u==null)return!1
return this.b5(this.c7(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.B(b,H.u(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.bZ(u==null?s.b=P.jx():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.bZ(t==null?s.c=P.jx():t,b)}else return s.dk(0,b)},
dk:function(a,b){var u,t,s,r=this
H.B(b,H.u(r,0))
u=r.d
if(u==null)u=r.d=P.jx()
t=r.c2(b)
s=u[t]
if(s==null)u[t]=[r.b2(b)]
else{if(r.b5(s,b)>=0)return!1
s.push(r.b2(b))}return!0},
R:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.ey(this.c,b)
else return this.ex(0,b)},
ex:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.c7(r,b)
t=s.b5(u,b)
if(t<0)return!1
s.cj(u.splice(t,1)[0])
return!0},
bZ:function(a,b){H.B(b,H.u(this,0))
if(H.k(a[b],"$ibJ")!=null)return!1
a[b]=this.b2(b)
return!0},
ey:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$ibJ")
if(u==null)return!1
this.cj(u)
delete a[b]
return!0},
c9:function(){this.r=1073741823&this.r+1},
b2:function(a){var u,t=this,s=new P.bJ(H.B(a,H.u(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.c9()
return s},
cj:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.c9()},
c2:function(a){return J.br(a)&1073741823},
c7:function(a,b){return a[this.c2(b)]},
b5:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.W(a[t].a,b))return t
return-1}}
P.bJ.prototype={}
P.dZ.prototype={
gG:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bb(t))
else{t=u.c
if(t==null){u.sc_(null)
return!1}else{u.sc_(H.B(t.a,H.u(u,0)))
u.c=u.c.b
return!0}}},
sc_:function(a){this.d=H.B(a,H.u(this,0))},
$iaD:1}
P.fw.prototype={$ii:1,$ib:1}
P.t.prototype={
gN:function(a){return new H.c7(a,this.gl(a),[H.cF(this,a,"t",0)])},
w:function(a,b){return this.m(a,b)},
fR:function(a,b){var u,t=this,s=H.c([],[H.cF(t,a,"t",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.O(s,u,t.m(a,u))
return s},
fQ:function(a){return this.fR(a,!0)},
i:function(a){return P.jl(a,"[","]")}}
P.fy.prototype={}
P.fz.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.h(a)
t.a=u+": "
t.a+=H.h(b)},
$S:23}
P.a1.prototype={
K:function(a,b){var u,t,s=this
H.j(b,{func:1,ret:-1,args:[H.cF(s,a,"a1",0),H.cF(s,a,"a1",1)]})
for(u=J.bs(s.gV(a));u.t();){t=u.gG(u)
b.$2(t,s.m(a,t))}},
gl:function(a){return J.bt(this.gV(a))},
i:function(a){return P.k5(a)},
$iH:1}
P.iK.prototype={
a4:function(a,b){var u
for(u=J.bs(H.o(b,"$ii",this.$ti,"$ai"));u.t();)this.h(0,u.gG(u))},
i:function(a){return P.jl(this,"{","}")},
w:function(a,b){var u,t,s,r=this
P.kh(b,"index")
for(u=P.lY(r,r.r,H.u(r,0)),t=0;u.t();){s=u.d
if(b===t)return s;++t}throw H.f(P.R(b,r,"index",null,t))},
$ii:1,
$ikl:1}
P.e_.prototype={}
P.bZ.prototype={}
P.c_.prototype={}
P.f6.prototype={
$abZ:function(){return[P.e,[P.b,P.C]]}}
P.fm.prototype={
i:function(a){return this.a}}
P.fl.prototype={
du:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.l(a,r)
switch(a[r]){case"&":p="&amp;"
break
case'"':p=u?"&quot;":o
break
case"'":p=s?"&#39;":o
break
case"<":p="&lt;"
break
case">":p="&gt;"
break
case"/":p=t?"&#47;":o
break
default:p=o}if(p!=null){if(q==null)q=new P.bF("")
if(r>b)q.a+=C.b.aK(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lh(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$ac_:function(){return[P.e,P.e]}}
P.i0.prototype={}
P.i1.prototype={
f5:function(a){var u,t,s=P.ki(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iU(u)
if(t.dG(a,0,s)!==s)t.ck(C.b.bu(a,s-1),0)
return new Uint8Array(u.subarray(0,H.m0(0,t.b,u.length)))},
$ac_:function(){return[P.e,[P.b,P.C]]}}
P.iU.prototype={
ck:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.l(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.l(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.l(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.l(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.l(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.l(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.l(s,r)
s[r]=128|a&63
return!1}},
dG:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.bu(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.am(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.ck(r,C.b.am(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.l(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.l(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.l(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.l(u,q)
u[q]=128|r&63}}return s}}
P.K.prototype={}
P.am.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.am&&this.a===b.a&&!0},
gD:function(a){var u=this.a
return(u^C.d.aO(u,30))&1073741823},
i:function(a){var u=this,t=P.lp(H.lH(u)),s=P.cR(H.lF(u)),r=P.cR(H.lB(u)),q=P.cR(H.lC(u)),p=P.cR(H.lE(u)),o=P.cR(H.lG(u)),n=P.lq(H.lD(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.z.prototype={}
P.bc.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.bc&&this.a===b.a},
gD:function(a){return C.d.gD(this.a)},
i:function(a){var u,t,s,r=new P.f3(),q=this.a
if(q<0)return"-"+new P.bc(0-q).i(0)
u=r.$1(C.d.ar(q,6e7)%60)
t=r.$1(C.d.ar(q,1e6)%60)
s=new P.f2().$1(q%1e6)
return""+C.d.ar(q,36e8)+":"+H.h(u)+":"+H.h(t)+"."+H.h(s)}}
P.f2.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:12}
P.f3.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:12}
P.bd.prototype={}
P.eH.prototype={
i:function(a){return"Assertion failed"}}
P.dg.prototype={
i:function(a){return"Throw of null."}}
P.as.prototype={
gb4:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gb3:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gb4()+o+u
if(!q.a)return t
s=q.gb3()
r=P.cV(q.b)
return t+s+": "+r}}
P.bD.prototype={
gb4:function(){return"RangeError"},
gb3:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.h(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.h(s)
else if(t>s)u=": Not in range "+H.h(s)+".."+H.h(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.h(s)}return u}}
P.fn.prototype={
gb4:function(){return"RangeError"},
gb3:function(){var u,t=H.a5(this.b)
if(typeof t!=="number")return t.ai()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.h(u)},
gl:function(a){return this.f}}
P.hZ.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hX.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ch.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eS.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.cV(u)+"."}}
P.fX.prototype={
i:function(a){return"Out of Memory"},
$ibd:1}
P.dn.prototype={
i:function(a){return"Stack Overflow"},
$ibd:1}
P.eX.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dR.prototype={
i:function(a){return"Exception: "+this.a}}
P.fg.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.aK(s,0,75)+"...":s
return t+"\n"+r}}
P.be.prototype={}
P.C.prototype={}
P.i.prototype={
aV:function(a,b){var u=H.af(this,"i",0)
return new H.cp(this,H.j(b,{func:1,ret:P.K,args:[u]}),[u])},
gl:function(a){var u,t=this.gN(this)
for(u=0;t.t();)++u
return u},
gaj:function(a){var u,t=this.gN(this)
if(!t.t())throw H.f(H.jm())
u=t.gG(t)
if(t.t())throw H.f(H.lv())
return u},
w:function(a,b){var u,t,s
P.kh(b,"index")
for(u=this.gN(this),t=0;u.t();){s=u.gG(u)
if(b===t)return s;++t}throw H.f(P.R(b,this,"index",null,t))},
i:function(a){return P.lu(this,"(",")")}}
P.aD.prototype={}
P.b.prototype={$ii:1}
P.H.prototype={}
P.G.prototype={
gD:function(a){return P.I.prototype.gD.call(this,this)},
i:function(a){return"null"}}
P.a0.prototype={}
P.I.prototype={constructor:P.I,$iI:1,
n:function(a,b){return this===b},
gD:function(a){return H.cd(this)},
i:function(a){return"Instance of '"+H.bC(this)+"'"},
toString:function(){return this.i(this)}}
P.ad.prototype={}
P.e.prototype={$ikb:1}
P.bF.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.q.prototype={}
W.eF.prototype={
gl:function(a){return a.length}}
W.cI.prototype={
i:function(a){return String(a)},
$icI:1}
W.eG.prototype={
i:function(a){return String(a)}}
W.bU.prototype={$ibU:1}
W.cK.prototype={}
W.b8.prototype={$ib8:1}
W.bv.prototype={
bJ:function(a,b,c){if(c!=null)return a.getContext(b,P.md(c))
return a.getContext(b)},
cW:function(a,b){return this.bJ(a,b,null)},
$ibv:1}
W.bX.prototype={$ibX:1}
W.b9.prototype={
gl:function(a){return a.length}}
W.c0.prototype={$ic0:1}
W.eT.prototype={
gl:function(a){return a.length}}
W.L.prototype={$iL:1}
W.c1.prototype={
gl:function(a){return a.length}}
W.eU.prototype={}
W.az.prototype={}
W.aA.prototype={}
W.eV.prototype={
gl:function(a){return a.length}}
W.eW.prototype={
gl:function(a){return a.length}}
W.eZ.prototype={
gl:function(a){return a.length}}
W.an.prototype={$ian:1}
W.f_.prototype={
i:function(a){return String(a)}}
W.cS.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[[P.ac,P.a0]]},
$at:function(){return[[P.ac,P.a0]]},
$ii:1,
$ai:function(){return[[P.ac,P.a0]]},
$ib:1,
$ab:function(){return[[P.ac,P.a0]]},
$ax:function(){return[[P.ac,P.a0]]}}
W.cT.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gah(a))+" x "+H.h(this.gab(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.O(b)
if(!u.$iac)return!1
return a.left===u.gaS(b)&&a.top===u.gaU(b)&&this.gah(a)===u.gah(b)&&this.gab(a)===u.gab(b)},
gD:function(a){return W.kB(C.c.gD(a.left),C.c.gD(a.top),C.c.gD(this.gah(a)),C.c.gD(this.gab(a)))},
gcq:function(a){return a.bottom},
gab:function(a){return a.height},
gaS:function(a){return a.left},
gcL:function(a){return a.right},
gaU:function(a){return a.top},
gah:function(a){return a.width},
$iac:1,
$aac:function(){return[P.a0]}}
W.f0.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[P.e]},
$at:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$ax:function(){return[P.e]}}
W.f1.prototype={
gl:function(a){return a.length}}
W.ik.prototype={
gl:function(a){return this.b.length},
m:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.l(u,b)
return H.k(u[b],"$iJ")},
h:function(a,b){this.a.appendChild(b)
return b},
gN:function(a){var u=this.fQ(this)
return new J.al(u,u.length,[H.u(u,0)])},
$at:function(){return[W.J]},
$ai:function(){return[W.J]},
$ab:function(){return[W.J]}}
W.J.prototype={
gf1:function(a){return new W.im(a)},
gcr:function(a){return new W.ik(a,a.children)},
gcs:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.ai()
if(s<0)s=-s*0
if(typeof r!=="number")return r.ai()
if(r<0)r=-r*0
return new P.ac(u,t,s,r,[P.a0])},
i:function(a){return a.localName},
Z:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.k_
if(u==null){u=H.c([],[W.aj])
t=new W.de(u)
C.a.h(u,W.kA(null))
C.a.h(u,W.kC())
$.k_=t
d=t}else d=u
u=$.jZ
if(u==null){u=new W.et(d)
$.jZ=u
c=u}else{u.a=d
c=u}}if($.aV==null){u=document
t=u.implementation.createHTMLDocument("")
$.aV=t
$.jk=t.createRange()
t=$.aV.createElement("base")
H.k(t,"$ibU")
t.href=u.baseURI
$.aV.head.appendChild(t)}u=$.aV
if(u.body==null){t=u.createElement("body")
u.body=H.k(t,"$ib8")}u=$.aV
if(!!this.$ib8)s=u.body
else{s=u.createElement(a.tagName)
$.aV.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.P(C.P,a.tagName)){$.jk.selectNodeContents(s)
r=$.jk.createContextualFragment(b)}else{s.innerHTML=b
r=$.aV.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.aV.body
if(s==null?u!=null:s!==u)J.jS(s)
c.bK(r)
document.adoptNode(r)
return r},
f7:function(a,b,c){return this.Z(a,b,c,null)},
cZ:function(a,b){a.textContent=null
a.appendChild(this.Z(a,b,null,null))},
$iJ:1,
gcN:function(a){return a.tagName}}
W.f5.prototype={
$1:function(a){return!!J.O(H.k(a,"$iy")).$iJ},
$S:13}
W.m.prototype={$im:1}
W.d.prototype={
eX:function(a,b,c,d){H.j(c,{func:1,args:[W.m]})
if(c!=null)this.dl(a,b,c,!1)},
dl:function(a,b,c,d){return a.addEventListener(b,H.bN(H.j(c,{func:1,args:[W.m]}),1),!1)},
$id:1}
W.aB.prototype={$iaB:1}
W.fa.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aB]},
$at:function(){return[W.aB]},
$ii:1,
$ai:function(){return[W.aB]},
$ib:1,
$ab:function(){return[W.aB]},
$ax:function(){return[W.aB]}}
W.fb.prototype={
gl:function(a){return a.length}}
W.ff.prototype={
gl:function(a){return a.length}}
W.aC.prototype={$iaC:1}
W.fk.prototype={
gl:function(a){return a.length}}
W.by.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.y]},
$at:function(){return[W.y]},
$ii:1,
$ai:function(){return[W.y]},
$ib:1,
$ab:function(){return[W.y]},
$iby:1,
$ax:function(){return[W.y]}}
W.bf.prototype={$ibf:1,
gcu:function(a){return a.data}}
W.c6.prototype={$ic6:1}
W.aG.prototype={$iaG:1}
W.d6.prototype={
i:function(a){return String(a)},
$id6:1}
W.fD.prototype={
gl:function(a){return a.length}}
W.fE.prototype={
m:function(a,b){return P.b2(a.get(H.E(b)))},
K:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b2(t.value[1]))}},
gV:function(a){var u=H.c([],[P.e])
this.K(a,new W.fF(u))
return u},
gl:function(a){return a.size},
$aa1:function(){return[P.e,null]},
$iH:1,
$aH:function(){return[P.e,null]}}
W.fF.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.fG.prototype={
m:function(a,b){return P.b2(a.get(H.E(b)))},
K:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b2(t.value[1]))}},
gV:function(a){var u=H.c([],[P.e])
this.K(a,new W.fH(u))
return u},
gl:function(a){return a.size},
$aa1:function(){return[P.e,null]},
$iH:1,
$aH:function(){return[P.e,null]}}
W.fH.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aH.prototype={$iaH:1}
W.fI.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aH]},
$at:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$ax:function(){return[W.aH]}}
W.a2.prototype={$ia2:1}
W.a9.prototype={
gaj:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.f(P.kn("No elements"))
if(t>1)throw H.f(P.kn("More than one element"))
return u.firstChild},
a4:function(a,b){var u,t,s,r
H.o(b,"$ii",[W.y],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gN:function(a){var u=this.a.childNodes
return new W.cX(u,u.length,[H.cF(C.R,u,"x",0)])},
gl:function(a){return this.a.childNodes.length},
m:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.l(u,b)
return u[b]},
$at:function(){return[W.y]},
$ai:function(){return[W.y]},
$ab:function(){return[W.y]}}
W.y.prototype={
fF:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i:function(a){var u=a.nodeValue
return u==null?this.d0(a):u},
f_:function(a,b){return a.appendChild(b)},
$iy:1}
W.cc.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.y]},
$at:function(){return[W.y]},
$ii:1,
$ai:function(){return[W.y]},
$ib:1,
$ab:function(){return[W.y]},
$ax:function(){return[W.y]}}
W.aI.prototype={$iaI:1,
gl:function(a){return a.length}}
W.h_.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aI]},
$at:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$ax:function(){return[W.aI]}}
W.h8.prototype={
m:function(a,b){return P.b2(a.get(H.E(b)))},
K:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b2(t.value[1]))}},
gV:function(a){var u=H.c([],[P.e])
this.K(a,new W.h9(u))
return u},
gl:function(a){return a.size},
$aa1:function(){return[P.e,null]},
$iH:1,
$aH:function(){return[P.e,null]}}
W.h9.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hb.prototype={
gl:function(a){return a.length}}
W.aK.prototype={$iaK:1}
W.hk.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aK]},
$at:function(){return[W.aK]},
$ii:1,
$ai:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$ax:function(){return[W.aK]}}
W.aL.prototype={$iaL:1}
W.hl.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aL]},
$at:function(){return[W.aL]},
$ii:1,
$ai:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$ax:function(){return[W.aL]}}
W.aM.prototype={$iaM:1,
gl:function(a){return a.length}}
W.ho.prototype={
m:function(a,b){return a.getItem(H.E(b))},
K:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gV:function(a){var u=H.c([],[P.e])
this.K(a,new W.hp(u))
return u},
gl:function(a){return a.length},
$aa1:function(){return[P.e,P.e]},
$iH:1,
$aH:function(){return[P.e,P.e]}}
W.hp.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:28}
W.at.prototype={$iat:1}
W.bG.prototype={}
W.dp.prototype={
Z:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.b_(a,b,c,d)
u=W.lr("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a9(t).a4(0,new W.a9(u))
return t}}
W.hv.prototype={
Z:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.b_(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.x.Z(u.createElement("table"),b,c,d)
u.toString
u=new W.a9(u)
s=u.gaj(u)
s.toString
u=new W.a9(s)
r=u.gaj(u)
t.toString
r.toString
new W.a9(t).a4(0,new W.a9(r))
return t}}
W.hw.prototype={
Z:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.b_(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.x.Z(u.createElement("table"),b,c,d)
u.toString
u=new W.a9(u)
s=u.gaj(u)
t.toString
s.toString
new W.a9(t).a4(0,new W.a9(s))
return t}}
W.cj.prototype={$icj:1}
W.aN.prototype={$iaN:1}
W.au.prototype={$iau:1}
W.hy.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.au]},
$at:function(){return[W.au]},
$ii:1,
$ai:function(){return[W.au]},
$ib:1,
$ab:function(){return[W.au]},
$ax:function(){return[W.au]}}
W.hz.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aN]},
$at:function(){return[W.aN]},
$ii:1,
$ai:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$ax:function(){return[W.aN]}}
W.hD.prototype={
gl:function(a){return a.length}}
W.aP.prototype={$iaP:1}
W.av.prototype={$iav:1}
W.hH.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aP]},
$at:function(){return[W.aP]},
$ii:1,
$ai:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$ax:function(){return[W.aP]}}
W.hI.prototype={
gl:function(a){return a.length}}
W.bm.prototype={}
W.i_.prototype={
i:function(a){return String(a)}}
W.ia.prototype={
gl:function(a){return a.length}}
W.aR.prototype={
gfa:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.ao("deltaY is not supported"))},
gf9:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.ao("deltaX is not supported"))},
$iaR:1}
W.cq.prototype={
eA:function(a,b){return a.requestAnimationFrame(H.bN(H.j(b,{func:1,ret:-1,args:[P.a0]}),1))},
dA:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cr.prototype={$icr:1}
W.il.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.L]},
$at:function(){return[W.L]},
$ii:1,
$ai:function(){return[W.L]},
$ib:1,
$ab:function(){return[W.L]},
$ax:function(){return[W.L]}}
W.dM.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.O(b)
if(!u.$iac)return!1
return a.left===u.gaS(b)&&a.top===u.gaU(b)&&a.width===u.gah(b)&&a.height===u.gab(b)},
gD:function(a){return W.kB(C.c.gD(a.left),C.c.gD(a.top),C.c.gD(a.width),C.c.gD(a.height))},
gab:function(a){return a.height},
gah:function(a){return a.width}}
W.iA.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aC]},
$at:function(){return[W.aC]},
$ii:1,
$ai:function(){return[W.aC]},
$ib:1,
$ab:function(){return[W.aC]},
$ax:function(){return[W.aC]}}
W.e4.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.y]},
$at:function(){return[W.y]},
$ii:1,
$ai:function(){return[W.y]},
$ib:1,
$ab:function(){return[W.y]},
$ax:function(){return[W.y]}}
W.iN.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aM]},
$at:function(){return[W.aM]},
$ii:1,
$ai:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$ax:function(){return[W.aM]}}
W.iO.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.at]},
$at:function(){return[W.at]},
$ii:1,
$ai:function(){return[W.at]},
$ib:1,
$ab:function(){return[W.at]},
$ax:function(){return[W.at]}}
W.ij.prototype={
K:function(a,b){var u,t,s,r,q
H.j(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.gV(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.D)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gV:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.e])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.l(r,t)
s=H.k(r[t],"$icr")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aa1:function(){return[P.e,P.e]},
$aH:function(){return[P.e,P.e]}}
W.im.prototype={
m:function(a,b){return this.a.getAttribute(H.E(b))},
gl:function(a){return this.gV(this).length}}
W.io.prototype={}
W.jw.prototype={}
W.ip.prototype={}
W.iq.prototype={
$1:function(a){return this.a.$1(H.k(a,"$im"))},
$S:25}
W.bn.prototype={
dc:function(a){var u
if($.dU.a===0){for(u=0;u<262;++u)$.dU.O(0,C.O[u],W.ml())
for(u=0;u<12;++u)$.dU.O(0,C.p[u],W.mm())}},
as:function(a){return $.lb().P(0,W.c2(a))},
a5:function(a,b,c){var u=$.dU.m(0,H.h(W.c2(a))+"::"+b)
if(u==null)u=$.dU.m(0,"*::"+b)
if(u==null)return!1
return H.jC(u.$4(a,b,c,this))},
$iaj:1}
W.x.prototype={
gN:function(a){return new W.cX(a,this.gl(a),[H.cF(this,a,"x",0)])}}
W.de.prototype={
as:function(a){return C.a.co(this.a,new W.fR(a))},
a5:function(a,b,c){return C.a.co(this.a,new W.fQ(a,b,c))},
$iaj:1}
W.fR.prototype={
$1:function(a){return H.k(a,"$iaj").as(this.a)},
$S:16}
W.fQ.prototype={
$1:function(a){return H.k(a,"$iaj").a5(this.a,this.b,this.c)},
$S:16}
W.ec.prototype={
df:function(a,b,c,d){var u,t,s
this.a.a4(0,c)
u=b.aV(0,new W.iL())
t=b.aV(0,new W.iM())
this.b.a4(0,u)
s=this.c
s.a4(0,C.Q)
s.a4(0,t)},
as:function(a){return this.a.P(0,W.c2(a))},
a5:function(a,b,c){var u=this,t=W.c2(a),s=u.c
if(s.P(0,H.h(t)+"::"+b))return u.d.eZ(c)
else if(s.P(0,"*::"+b))return u.d.eZ(c)
else{s=u.b
if(s.P(0,H.h(t)+"::"+b))return!0
else if(s.P(0,"*::"+b))return!0
else if(s.P(0,H.h(t)+"::*"))return!0
else if(s.P(0,"*::*"))return!0}return!1},
$iaj:1}
W.iL.prototype={
$1:function(a){return!C.a.P(C.p,H.E(a))},
$S:17}
W.iM.prototype={
$1:function(a){return C.a.P(C.p,H.E(a))},
$S:17}
W.iQ.prototype={
a5:function(a,b,c){if(this.d4(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.P(0,b)
return!1}}
W.iR.prototype={
$1:function(a){return"TEMPLATE::"+H.h(H.E(a))},
$S:26}
W.iP.prototype={
as:function(a){var u=J.O(a)
if(!!u.$ice)return!1
u=!!u.$in
if(u&&W.c2(a)==="foreignObject")return!1
if(u)return!0
return!1},
a5:function(a,b,c){if(b==="is"||C.b.aY(b,"on"))return!1
return this.as(a)},
$iaj:1}
W.cX.prototype={
t:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sc8(J.ld(u.a,t))
u.c=t
return!0}u.sc8(null)
u.c=s
return!1},
gG:function(a){return this.d},
sc8:function(a){this.d=H.B(a,H.u(this,0))},
$iaD:1}
W.aj.prototype={}
W.iJ.prototype={$in1:1}
W.et.prototype={
bK:function(a){new W.iV(this).$2(a,null)},
aC:function(a,b){if(b==null)J.jS(a)
else b.removeChild(a)},
eD:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.lg(a)
n=o.a.getAttribute("is")
H.k(a,"$iJ")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.w(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ak(r)}t="element unprintable"
try{t=J.ag(a)}catch(r){H.ak(r)}try{s=W.c2(a)
this.eC(H.k(a,"$iJ"),b,p,t,s,H.k(o,"$iH"),H.E(n))}catch(r){if(H.ak(r) instanceof P.as)throw r
else{this.aC(a,b)
window
q="Removing corrupted element "+H.h(t)
if(typeof console!="undefined")window.console.warn(q)}}},
eC:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.aC(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.as(a)){o.aC(a,b)
window
u="Removing disallowed element <"+H.h(e)+"> from "+H.h(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.a5(a,"is",g)){o.aC(a,b)
window
u="Removing disallowed type extension <"+H.h(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gV(f)
t=H.c(u.slice(0),[H.u(u,0)])
for(s=f.gV(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.l(t,s)
r=t[s]
q=o.a
p=J.li(r)
H.E(r)
if(!q.a5(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.h(e)+" "+r+'="'+H.h(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.O(a).$icj)o.bK(a.content)},
$imM:1}
W.iV.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.eD(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aC(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ak(s)
r=H.k(u,"$iy")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.k(t,"$iy")}},
$S:27}
W.dL.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.cx.prototype={}
W.cy.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ei.prototype={}
W.el.prototype={}
W.em.prototype={}
W.cz.prototype={}
W.cA.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
P.es.prototype={$ibf:1,
gcu:function(a){return this.a}}
P.j2.prototype={
$2:function(a,b){this.a[a]=b},
$S:23}
P.fc.prototype={
gb8:function(){var u=this.b,t=H.af(u,"t",0),s=W.J
return new H.fA(new H.cp(u,H.j(new P.fd(),{func:1,ret:P.K,args:[t]}),[t]),H.j(new P.fe(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.bt(this.gb8().a)},
m:function(a,b){var u=this.gb8()
return u.b.$1(J.jf(u.a,b))},
gN:function(a){var u=P.k4(this.gb8(),!1,W.J)
return new J.al(u,u.length,[H.u(u,0)])},
$at:function(){return[W.J]},
$ai:function(){return[W.J]},
$ab:function(){return[W.J]}}
P.fd.prototype={
$1:function(a){return!!J.O(H.k(a,"$iy")).$iJ},
$S:13}
P.fe.prototype={
$1:function(a){return H.a6(H.k(a,"$iy"),"$iJ")},
$S:39}
P.iE.prototype={
gcL:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.A(t)
return H.B(u+t,H.u(this,0))},
gcq:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.A(t)
return H.B(u+t,H.u(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.h(u.a)+", "+H.h(u.b)+") "+H.h(u.c)+" x "+H.h(u.d)},
n:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.O(b)
if(!!u.$iac){t=p.a
if(t==u.gaS(b)){s=p.b
if(s==u.gaU(b)){r=p.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.A(r)
q=H.u(p,0)
if(H.B(t+r,q)===u.gcL(b)){t=p.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.A(t)
u=H.B(s+t,q)===u.gcq(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gD:function(a){var u,t=this,s=t.a,r=J.br(s),q=t.b,p=J.br(q),o=t.c
if(typeof s!=="number")return s.B()
if(typeof o!=="number")return H.A(o)
u=H.u(t,0)
o=C.d.gD(H.B(s+o,u))
s=t.d
if(typeof q!=="number")return q.B()
if(typeof s!=="number")return H.A(s)
u=C.d.gD(H.B(q+s,u))
return P.lX(P.iC(P.iC(P.iC(P.iC(0,r),p),o),u))}}
P.ac.prototype={
gaS:function(a){return this.a},
gaU:function(a){return this.b},
gah:function(a){return this.c},
gab:function(a){return this.d}}
P.aW.prototype={$iaW:1}
P.ft.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.m(a,b)},
$at:function(){return[P.aW]},
$ii:1,
$ai:function(){return[P.aW]},
$ib:1,
$ab:function(){return[P.aW]},
$ax:function(){return[P.aW]}}
P.b_.prototype={$ib_:1}
P.fV.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.m(a,b)},
$at:function(){return[P.b_]},
$ii:1,
$ai:function(){return[P.b_]},
$ib:1,
$ab:function(){return[P.b_]},
$ax:function(){return[P.b_]}}
P.h1.prototype={
gl:function(a){return a.length}}
P.ce.prototype={$ice:1}
P.hu.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.m(a,b)},
$at:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$ax:function(){return[P.e]}}
P.n.prototype={
gcr:function(a){return new P.fc(a,new W.a9(a))},
Z:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.aj])
C.a.h(p,W.kA(null))
C.a.h(p,W.kC())
C.a.h(p,new W.iP())
c=new W.et(new W.de(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).f7(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a9(s)
q=p.gaj(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$in:1}
P.b0.prototype={$ib0:1}
P.hJ.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.m(a,b)},
$at:function(){return[P.b0]},
$ii:1,
$ai:function(){return[P.b0]},
$ib:1,
$ab:function(){return[P.b0]},
$ax:function(){return[P.b0]}}
P.dX.prototype={}
P.dY.prototype={}
P.e7.prototype={}
P.e8.prototype={}
P.ej.prototype={}
P.ek.prototype={}
P.eq.prototype={}
P.er.prototype={}
P.eJ.prototype={
gl:function(a){return a.length}}
P.eK.prototype={
m:function(a,b){return P.b2(a.get(H.E(b)))},
K:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b2(t.value[1]))}},
gV:function(a){var u=H.c([],[P.e])
this.K(a,new P.eL(u))
return u},
gl:function(a){return a.size},
$aa1:function(){return[P.e,null]},
$iH:1,
$aH:function(){return[P.e,null]}}
P.eL.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.eM.prototype={
gl:function(a){return a.length}}
P.bu.prototype={}
P.fW.prototype={
gl:function(a){return a.length}}
P.dK.prototype={}
P.cL.prototype={$icL:1}
P.dj.prototype={$idj:1}
P.bE.prototype={
fM:function(a,b,c,d,e,f,g){var u,t=J.O(g)
if(!!t.$ibf)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.me(g))
return}if(!!t.$ic6)t=!0
else t=!1
if(t){this.eM(a,b,c,d,e,f,g)
return}throw H.f(P.lj("Incorrect number or type of arguments"))},
eM:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bH:function(a,b,c){return a.uniform1i(b,c)},
fU:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fV:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibE:1}
P.dl.prototype={$idl:1}
P.dr.prototype={$idr:1}
P.dx.prototype={$idx:1}
P.hm.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return P.b2(a.item(b))},
w:function(a,b){return this.m(a,b)},
$at:function(){return[[P.H,,,]]},
$ii:1,
$ai:function(){return[[P.H,,,]]},
$ib:1,
$ab:function(){return[[P.H,,,]]},
$ax:function(){return[[P.H,,,]]}}
P.ef.prototype={}
P.eg.prototype={}
O.Y.prototype={
bO:function(a){var u=this
u.sdL(H.c([],[a]))
u.scb(null)
u.sca(null)
u.scc(null)},
aW:function(a,b){var u=this,t={func:1,ret:-1,args:[P.C,[P.i,H.af(u,"Y",0)]]}
H.j(a,t)
H.j(b,t)
u.scb(null)
u.sca(a)
u.scc(b)},
em:function(a){H.o(a,"$ii",[H.af(this,"Y",0)],"$ai")
return!0},
da:function(a,b){var u
H.o(b,"$ii",[H.af(this,"Y",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gN:function(a){var u=this.a
return new J.al(u,u.length,[H.u(u,0)])},
w:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.l(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.af(s,"Y",0)
H.B(b,r)
r=[r]
if(H.w(s.em(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.da(t,H.c([b],r))}},
sdL:function(a){this.a=H.o(a,"$ib",[H.af(this,"Y",0)],"$ab")},
scb:function(a){this.b=H.j(a,{func:1,ret:P.K,args:[[P.i,H.af(this,"Y",0)]]})},
sca:function(a){this.c=H.j(a,{func:1,ret:-1,args:[P.C,[P.i,H.af(this,"Y",0)]]})},
scc:function(a){H.j(a,{func:1,ret:-1,args:[P.C,[P.i,H.af(this,"Y",0)]]})},
$ii:1}
O.c8.prototype={
gl:function(a){return this.a.length},
gp:function(){var u=this.b
return u==null?this.b=D.Q():u},
ak:function(){var u=this.b
if(u!=null)u.A(null)},
gad:function(a){var u=this.a
if(u.length>0)return C.a.gaR(u)
else return V.da()},
cI:function(a){var u=this.a
if(a==null)C.a.h(u,V.da())
else C.a.h(u,a)
this.ak()},
bF:function(){var u=this.a
if(u.length>0){u.pop()
this.ak()}},
sba:function(a){this.a=H.o(a,"$ib",[V.bi],"$ab")}}
E.eN.prototype={}
E.aa.prototype={
sbL:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gp().R(0,s.gcE())
u=s.c
if(u!=null)u.gp().h(0,s.gcE())
t=new D.M("shape",r,s.c,[F.dm])
t.b=!0
s.ae(t)}},
saG:function(a){var u,t,s=this
if(!J.W(s.r,a)){u=s.r
if(u!=null)u.gp().R(0,s.gcC())
if(a!=null)a.gp().h(0,s.gcC())
s.r=a
t=new D.M("mover",u,a,[U.a3])
t.b=!0
s.ae(t)}},
aw:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.ax(0,b,s):null
if(!J.W(q,s.x)){u=s.x
s.x=q
t=new D.M("matrix",u,q,[V.bi])
t.b=!0
s.ae(t)}for(r=s.y.a,r=new J.al(r,r.length,[H.u(r,0)]);r.t();)r.d.aw(0,b)},
av:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gad(s))
else C.a.h(s.a,r.q(0,s.gad(s)))
s.ak()
a.cJ(t.f)
s=a.dy
u=(s&&C.a).gaR(s)
if(u!=null&&t.d!=null)u.fH(a,t)
for(s=t.y.a,s=new J.al(s,s.length,[H.u(s,0)]);s.t();)s.d.av(a)
a.cH()
a.dx.bF()},
gp:function(){var u=this.z
return u==null?this.z=D.Q():u},
ae:function(a){var u=this.z
if(u!=null)u.A(a)},
W:function(){return this.ae(null)},
cF:function(a){H.k(a,"$iv")
this.e=null
this.ae(a)},
fv:function(){return this.cF(null)},
cD:function(a){this.ae(H.k(a,"$iv"))},
fu:function(){return this.cD(null)},
cB:function(a){this.ae(H.k(a,"$iv"))},
fq:function(){return this.cB(null)},
fp:function(a,b){var u,t,s,r,q,p,o
H.o(b,"$ii",[E.aa],"$ai")
for(u=b.length,t=this.gcA(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c3()
o.sa9(null)
o.saA(null)
o.c=null
o.d=0
p.z=o}H.j(t,s)
if(o.a==null)o.sa9(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.W()},
ft:function(a,b){var u,t
H.o(b,"$ii",[E.aa],"$ai")
for(u=b.gN(b),t=this.gcA();u.t();)u.gG(u).gp().R(0,t)
this.W()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sds:function(a,b){this.y=H.o(b,"$iY",[E.aa],"$aY")},
$ik8:1}
E.h4.prototype={
d6:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.am(Date.now(),!1)
s.y=0
s.cx=s.ch=s.z=null
u=new O.c8()
t=[V.bi]
u.sba(H.c([],t))
u.b=null
u.gp().h(0,new E.h5(s))
s.cy=u
u=new O.c8()
u.sba(H.c([],t))
u.b=null
u.gp().h(0,new E.h6(s))
s.db=u
u=new O.c8()
u.sba(H.c([],t))
u.b=null
u.gp().h(0,new E.h7(s))
s.dx=u
s.seL(H.c([],[O.bH]))
u=s.dy;(u&&C.a).h(u,null)
s.seI(new H.aF([P.e,A.cf]))},
cJ:function(a){var u=this.dy,t=a==null?(u&&C.a).gaR(u):a;(u&&C.a).h(u,t)},
cH:function(){var u=this.dy
if(u.length>1)u.pop()},
seL:function(a){this.dy=H.o(a,"$ib",[O.bH],"$ab")},
seI:function(a){this.fr=H.o(a,"$iH",[P.e,A.cf],"$aH")}}
E.h5.prototype={
$1:function(a){var u
H.k(a,"$iv")
u=this.a
u.ch=u.z=null},
$S:8}
E.h6.prototype={
$1:function(a){var u
H.k(a,"$iv")
u=this.a
u.cx=u.ch=u.z=null},
$S:8}
E.h7.prototype={
$1:function(a){var u
H.k(a,"$iv")
u=this.a
u.cx=u.ch=null},
$S:8}
E.dt.prototype={
bR:function(a){H.k(a,"$iv")
this.cK()},
bQ:function(){return this.bR(null)},
gfg:function(){var u,t=this,s=Date.now(),r=C.d.ar(P.jY(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.am(s,!1)
return u/r},
ce:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.q()
if(typeof r!=="number")return H.A(r)
u=C.c.bx(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.q()
t=C.c.bx(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kq(C.n,s.gfI())}},
cK:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.j(new E.hC(this),{func:1,ret:-1,args:[P.a0]})
C.z.dA(u)
C.z.eA(u,W.kJ(t,P.a0))}},
fG:function(){var u,t,s,r,q,p=this
try{++p.cy
p.ch=!1
p.ce()
if(p.d!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.am(r,!1)
s.y=P.jY(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.ak()
r=s.db
C.a.sl(r.a,0)
r.ak()
r=s.dx
C.a.sl(r.a,0)
r.ak()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
p.d.av(p.e)}s=p.z
if(s!=null)s.A(null)}catch(q){u=H.ak(q)
t=H.bP(q)
P.jO("Error: "+H.h(u))
P.jO("Stack: "+H.h(t))
throw H.f(u)}}}
E.hC.prototype={
$1:function(a){var u
H.mw(a)
u=this.a
if(u.ch){u.ch=!1
u.fG()}},
$S:32}
Z.dI.prototype={$imG:1}
Z.cM.prototype={
bp:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ak(s)
t=P.X('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.h(u))
throw H.f(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.h(u.e)+"]"}}
Z.ib.prototype={$imH:1}
Z.cN.prototype={
aF:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bp:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bp(a)},
fT:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
av:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.l(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.e],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.ag(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(p,", ")+"\nAttrs:   "+C.a.k(r,", ")},
sdH:function(a){this.b=H.o(a,"$ib",[Z.bg],"$ab")},
$imP:1}
Z.bg.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bC(this.c)+"'")+"]"}}
Z.b1.prototype={
gbM:function(a){var u=this.a,t=(u&$.b5().a)!==0?3:0
if((u&$.b4().a)!==0)t+=3
if((u&$.b3().a)!==0)t+=3
if((u&$.b6().a)!==0)t+=2
if((u&$.b7().a)!==0)t+=3
if((u&$.cG().a)!==0)t+=3
if((u&$.cH().a)!==0)t+=4
if((u&$.bT().a)!==0)++t
return(u&$.bS().a)!==0?t+4:t},
f0:function(a){var u,t=$.b5(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.b4()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b3()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b6()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b7()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cG()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cH()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bT()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bS()
if((s&t.a)!==0)if(u===a)return t
return $.la()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b1))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.e]),t=this.a
if((t&$.b5().a)!==0)C.a.h(u,"Pos")
if((t&$.b4().a)!==0)C.a.h(u,"Norm")
if((t&$.b3().a)!==0)C.a.h(u,"Binm")
if((t&$.b6().a)!==0)C.a.h(u,"Txt2D")
if((t&$.b7().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cG().a)!==0)C.a.h(u,"Clr3")
if((t&$.cH().a)!==0)C.a.h(u,"Clr4")
if((t&$.bT().a)!==0)C.a.h(u,"Weight")
if((t&$.bS().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.eQ.prototype={}
D.c3.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.v]}
H.j(b,u)
if(this.a==null)this.sa9(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
R:function(a,b){var u,t,s=this
H.j(b,{func:1,ret:-1,args:[D.v]})
u=s.a
u=u==null?null:C.a.P(u,b)
if(u===!0){u=s.a
t=(u&&C.a).R(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.P(u,b)
if(u===!0){u=s.b
t=(u&&C.a).R(u,b)||t}return t},
A:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.v()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.K(P.k4(u,!0,{func:1,ret:-1,args:[D.v]}),new D.f8(q))
u=r.b
if(u!=null){r.saA(H.c([],[{func:1,ret:-1,args:[D.v]}]))
C.a.K(u,new D.f9(q))}return!0},
fc:function(){return this.A(null)},
ag:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.A(u)}}},
sa9:function(a){this.a=H.o(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")},
saA:function(a){this.b=H.o(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")}}
D.f8.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.f9.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.v.prototype={}
D.cY.prototype={}
D.cZ.prototype={}
D.M.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}
X.cO.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cO))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.d3.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d3))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.fs.prototype={
fC:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
fw:function(a){this.c=a.b
this.d.R(0,a.a)
return!1},
sew:function(a){this.d=H.o(a,"$ikl",[P.C],"$akl")}}
X.d7.prototype={}
X.fx.prototype={
az:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.q()
u=b.b
t=q.ch
if(typeof u!=="number")return u.q()
s=new V.a4(o.a+n*m,o.b+u*t)
t=q.a.gau()
r=new X.aZ(a,V.bk(),q.x,t,s)
r.b=!0
q.z=new P.am(p,!1)
q.x=s
return r},
bE:function(a,b){this.r=a.a
return!1},
aI:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.cY()
if(typeof u!=="number")return u.cU()
this.r=(u&~t)>>>0
return!1},
aH:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.az(a,b))
return!0},
fD:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gau()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.q()
q=a.b
p=o.cy
if(typeof q!=="number")return q.q()
t=new X.c9(new V.N(s*r,q*p),u,t)
t.b=!0
n.A(t)
return!0},
eb:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.d7(c,r.a.gau(),b)
s.b=!0
t.A(s)
r.y=new P.am(u,!1)
r.x=V.bk()}}
X.ai.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ai))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.w(this.b)?"Alt+":""
return u+(H.w(this.c)?"Shift+":"")}}
X.aZ.prototype={}
X.fJ.prototype={
b6:function(a,b,c){var u=this,t=new P.am(Date.now(),!1),s=u.a.gau(),r=new X.aZ(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
bE:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.A(this.b6(a,b,!0))
return!0},
aI:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.cY()
if(typeof t!=="number")return t.cU()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.A(u.b6(a,b,!0))
return!0},
aH:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.b6(a,b,!1))
return!0},
fE:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gau()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.q()
r=a.b
q=p.ch
if(typeof r!=="number")return r.q()
u=new X.c9(new V.N(t*s,r*q),u,b)
u.b=!0
o.A(u)
return!0},
gcv:function(){var u=this.b
return u==null?this.b=D.Q():u},
gcT:function(){var u=this.c
return u==null?this.c=D.Q():u},
gcz:function(){var u=this.d
return u==null?this.d=D.Q():u}}
X.c9.prototype={}
X.h0.prototype={}
X.dv.prototype={}
X.hG.prototype={
az:function(a,b){var u,t,s,r,q=this
H.o(a,"$ib",[V.a4],"$ab")
u=new P.am(Date.now(),!1)
t=a.length>0?a[0]:V.bk()
s=q.a.gau()
r=new X.dv(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
fB:function(a){var u
H.o(a,"$ib",[V.a4],"$ab")
u=this.b
if(u==null)return!1
u.A(this.az(a,!0))
return!0},
fz:function(a){var u
H.o(a,"$ib",[V.a4],"$ab")
u=this.c
if(u==null)return!1
u.A(this.az(a,!0))
return!0},
fA:function(a){var u
H.o(a,"$ib",[V.a4],"$ab")
u=this.d
if(u==null)return!1
u.A(this.az(a,!1))
return!0}}
X.dD.prototype={
gau:function(){var u=this.a,t=C.k.gcs(u).c
t.toString
u=C.k.gcs(u).d
u.toString
return V.kj(0,0,t,u)},
c4:function(a){var u=a.keyCode,t=H.w(a.ctrlKey)||H.w(a.metaKey)
return new X.d3(u,new X.ai(t,a.altKey,a.shiftKey))},
aq:function(a){var u=this.b,t=H.w(a.ctrlKey)||H.w(a.metaKey)
u.c=new X.ai(t,a.altKey,a.shiftKey)},
bo:function(a){var u=this.b,t=H.w(a.ctrlKey)||H.w(a.metaKey)
u.c=new X.ai(t,a.altKey,a.shiftKey)},
aa:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.E()
u=t.top
if(typeof r!=="number")return r.E()
return new V.a4(s-q,r-u)},
aB:function(a){return new V.N(a.movementX,a.movementY)},
bl:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a4])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
q=C.c.a1(r.pageX)
C.c.a1(r.pageY)
p=o.left
C.c.a1(r.pageX)
C.a.h(n,new V.a4(q-p,C.c.a1(r.pageY)-o.top))}return n},
a8:function(a){var u=a.buttons,t=H.w(a.ctrlKey)||H.w(a.metaKey)
return new X.cO(u,new X.ai(t,a.altKey,a.shiftKey))},
bb:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.E()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.E()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
e6:function(a){this.f=!0},
dV:function(a){this.f=!1},
e0:function(a){H.k(a,"$ia2")
if(H.w(this.f)&&this.bb(a))a.preventDefault()},
ea:function(a){var u
H.k(a,"$iaG")
if(!H.w(this.f))return
u=this.c4(a)
this.b.fC(u)},
e8:function(a){var u
H.k(a,"$iaG")
if(!H.w(this.f))return
u=this.c4(a)
this.b.fw(u)},
ed:function(a){var u,t,s,r,q=this
H.k(a,"$ia2")
u=q.a
u.focus()
q.f=!0
q.aq(a)
if(H.w(q.x)){t=q.a8(a)
s=q.aB(a)
if(q.d.bE(t,s))a.preventDefault()
return}if(H.w(q.r)){q.y=a
u.requestPointerLock()
return}t=q.a8(a)
r=q.aa(a)
if(q.c.bE(t,r))a.preventDefault()},
eh:function(a){var u,t,s,r=this
H.k(a,"$ia2")
r.aq(a)
u=r.a8(a)
if(H.w(r.x)){t=r.aB(a)
if(r.d.aI(u,t))a.preventDefault()
return}if(H.w(r.r))return
s=r.aa(a)
if(r.c.aI(u,s))a.preventDefault()},
e4:function(a){var u,t,s,r=this
H.k(a,"$ia2")
if(!r.bb(a)){r.aq(a)
u=r.a8(a)
if(H.w(r.x)){t=r.aB(a)
if(r.d.aI(u,t))a.preventDefault()
return}if(H.w(r.r))return
s=r.aa(a)
if(r.c.aI(u,s))a.preventDefault()}},
ef:function(a){var u,t,s,r=this
H.k(a,"$ia2")
r.aq(a)
u=r.a8(a)
if(H.w(r.x)){t=r.aB(a)
if(r.d.aH(u,t))a.preventDefault()
return}if(H.w(r.r))return
s=r.aa(a)
if(r.c.aH(u,s))a.preventDefault()},
e2:function(a){var u,t,s,r=this
H.k(a,"$ia2")
if(!r.bb(a)){r.aq(a)
u=r.a8(a)
if(H.w(r.x)){t=r.aB(a)
if(r.d.aH(u,t))a.preventDefault()
return}if(H.w(r.r))return
s=r.aa(a)
if(r.c.aH(u,s))a.preventDefault()}},
ej:function(a){var u,t,s=this
H.k(a,"$iaR")
s.aq(a)
u=new V.N((a&&C.y).gf9(a),C.y.gfa(a)).v(0,180)
if(H.w(s.x)){if(s.d.fD(u))a.preventDefault()
return}if(H.w(s.r))return
t=s.aa(a)
if(s.c.fE(u,t))a.preventDefault()},
el:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.a8(s.y)
t=s.aa(s.y)
s.d.eb(u,t,r)}},
ev:function(a){var u,t=this
H.k(a,"$iav")
t.a.focus()
t.f=!0
t.bo(a)
u=t.bl(a)
if(t.e.fB(u))a.preventDefault()},
eq:function(a){var u
H.k(a,"$iav")
this.bo(a)
u=this.bl(a)
if(this.e.fz(u))a.preventDefault()},
es:function(a){var u
H.k(a,"$iav")
this.bo(a)
u=this.bl(a)
if(this.e.fA(u))a.preventDefault()},
sdB:function(a){this.z=H.o(a,"$ib",[[P.ci,P.I]],"$ab")}}
V.aU.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aU))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.f7.prototype={}
V.d9.prototype={
aJ:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.z])
return t},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d9))return!1
u=b.a
t=$.P().a
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
i:function(a){var u,t,s,r,q=this,p=[P.z],o=V.bO(H.c([q.a,q.d,q.r],p),3,0),n=V.bO(H.c([q.b,q.e,q.x],p),3,0),m=V.bO(H.c([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.l(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.l(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.l(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.l(o,1)
r=" "+o[1]+", "
if(1>=t)return H.l(n,1)
r=r+n[1]+", "
if(1>=s)return H.l(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.l(o,2)
p=" "+o[2]+", "
if(2>=t)return H.l(n,2)
p=p+n[2]+", "
if(2>=s)return H.l(m,2)
return r+(p+m[2]+"]")}}
V.bi.prototype={
aJ:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.z])
return t},
q:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aY(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bi))return!1
u=b.a
t=$.P().a
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
i:function(a){return this.H()},
u:function(a){var u,t,s,r,q,p=this,o=[P.z],n=V.bO(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bO(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bO(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bO(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.l(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.l(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.l(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.l(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.l(n,1)
q=q+n[1]+", "
if(1>=t)return H.l(m,1)
q=q+m[1]+", "
if(1>=s)return H.l(l,1)
q=q+l[1]+", "
if(1>=r)return H.l(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.l(n,2)
u=u+n[2]+", "
if(2>=t)return H.l(m,2)
u=u+m[2]+", "
if(2>=s)return H.l(l,2)
u=u+l[2]+", "
if(2>=r)return H.l(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.l(n,3)
q=q+n[3]+", "
if(3>=t)return H.l(m,3)
q=q+m[3]+", "
if(3>=s)return H.l(l,3)
q=q+l[3]+", "
if(3>=r)return H.l(k,3)
return u+(q+k[3]+"]")},
H:function(){return this.u("")}}
V.a4.prototype={
E:function(a,b){return new V.a4(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.bl.prototype={
E:function(a,b){return new V.bl(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bl))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.di.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.di))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.dk.prototype={
gY:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dk))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.N.prototype={
bz:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.A(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.A(t)
return s*r+u*t},
q:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.q()
u=this.b
if(typeof u!=="number")return u.q()
return new V.N(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.P().a){u=$.ku
return u==null?$.ku=new V.N(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.N(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=this.a
s=$.P()
s.toString
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.A(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.A(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.V.prototype={
bz:function(a){return Math.sqrt(this.C(this))},
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bA:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.V(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aE:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.V(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.V(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a){return new V.V(-this.a,-this.b,-this.c)},
v:function(a,b){if(Math.abs(b-0)<$.P().a)return V.dH()
return new V.V(this.a/b,this.b/b,this.c/b)},
cw:function(){var u=$.P().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
U.eR.prototype={
b1:function(a){var u=V.mF(a,this.c,this.b)
return u},
gp:function(){var u=this.y
return u==null?this.y=D.Q():u},
J:function(a){var u=this.y
if(u!=null)u.A(a)},
sbI:function(a,b){},
sbB:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.P().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.b1(u)}s=new D.M("maximumLocation",s,t.b,[P.z])
s.b=!0
t.J(s)}},
sbD:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.P().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.b1(u)}s=new D.M("minimumLocation",s,t.c,[P.z])
s.b=!0
t.J(s)}},
sX:function(a,b){var u,t=this
b=t.b1(b)
u=t.d
if(!(Math.abs(u-b)<$.P().a)){t.d=b
u=new D.M("location",u,b,[P.z])
u.b=!0
t.J(u)}},
sbC:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.P().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.M("maximumVelocity",r,a,[P.z])
r.b=!0
s.J(r)}},
sM:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.P().a)){u.f=a
t=new D.M("velocity",t,a,[P.z])
t.b=!0
u.J(t)}},
sbw:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.P().a)){this.x=a
u=new D.M("dampening",u,a,[P.z])
u.b=!0
this.J(u)}},
aw:function(a,b){var u,t,s,r=this,q=r.f,p=$.P().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sX(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.P().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sM(u)}}}
U.cQ.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.Q():u},
ax:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cQ))return!1
return J.W(this.a,b.a)},
i:function(a){return"Constant: "+this.a.u("          ")}}
U.c5.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.Q():u},
J:function(a){var u
H.k(a,"$iv")
u=this.e
if(u!=null)u.A(a)},
U:function(){return this.J(null)},
dT:function(a,b){var u,t,s,r,q,p,o,n=U.a3
H.o(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gap(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.gp()
o.toString
H.j(t,s)
if(o.a==null)o.sa9(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.cY([n])
n.b=!0
this.J(n)},
eo:function(a,b){var u,t,s=U.a3
H.o(b,"$ii",[s],"$ai")
for(u=b.gN(b),t=this.gap();u.t();)u.gG(u).gp().R(0,t)
s=new D.cZ([s])
s.b=!0
this.J(s)},
ax:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.ai()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.al(r,r.length,[H.u(r,0)]),u=null;r.t();){q=r.d
if(q!=null){t=q.ax(0,b,c)
if(t!=null)u=u==null?t:t.q(0,u)}}s.f=u==null?V.da():u
r=s.e
if(r!=null)r.ag(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c5))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.l(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.l(r,t)
if(!J.W(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.a3]},
$aY:function(){return[U.a3]},
$ia3:1}
U.a3.prototype={}
U.dE.prototype={
gp:function(){var u=this.cy
return u==null?this.cy=D.Q():u},
J:function(a){var u
H.k(a,"$iv")
u=this.cy
if(u!=null)u.A(a)},
U:function(){return this.J(null)},
aD:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcv().h(0,u.gbc())
u.a.c.gcz().h(0,u.gbe())
u.a.c.gcT().h(0,u.gbg())
return!0},
bd:function(a){var u=this
H.k(a,"$iv")
if(!J.W(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bf:function(a){var u,t,s,r,q,p,o,n=this
a=H.a6(H.k(a,"$iv"),"$iaZ")
if(!H.w(n.y))return
if(H.w(n.x)){u=a.d.E(0,a.y)
u=new V.N(u.a,u.b)
u=u.C(u)
t=n.r
if(typeof t!=="number")return H.A(t)
if(u<t)return
n.x=!1}if(H.w(n.d)){u=a.c
t=a.d.E(0,a.y)
u=new V.N(t.a,t.b).q(0,2).v(0,u.gY())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.q()
s=n.e
if(typeof s!=="number")return H.A(s)
t.sM(u*10*s)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=new V.N(s.a,s.b).q(0,2).v(0,u.gY())
s=n.b
q=r.a
if(typeof q!=="number")return q.L()
p=n.e
if(typeof p!=="number")return H.A(p)
o=n.z
if(typeof o!=="number")return H.A(o)
s.sX(0,-q*p+o)
n.b.sM(0)
t=t.E(0,a.z)
n.Q=new V.N(t.a,t.b).q(0,2).v(0,u.gY())}n.U()},
bh:function(a){var u,t,s,r=this
H.k(a,"$iv")
if(!H.w(r.y))return
r.y=!1
if(H.w(r.x))return
u=r.Q
if(u.C(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.q()
s=r.e
if(typeof s!=="number")return H.A(s)
u.sM(t*10*s)
r.U()}},
ax:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.ai()
if(q<p){r.ch=p
u=b.y
r.b.aw(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aY(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia3:1}
U.dF.prototype={
gp:function(){var u=this.fx
return u==null?this.fx=D.Q():u},
J:function(a){var u
H.k(a,"$iv")
u=this.fx
if(u!=null)u.A(a)},
U:function(){return this.J(null)},
aD:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcv().h(0,s.gbc())
s.a.c.gcz().h(0,s.gbe())
s.a.c.gcT().h(0,s.gbg())
u=s.a.d
t=u.f
u=t==null?u.f=D.Q():t
u.h(0,s.gdM())
u=s.a.d
t=u.d
u=t==null?u.d=D.Q():t
u.h(0,s.gdO())
u=s.a.e
t=u.b
u=t==null?u.b=D.Q():t
u.h(0,s.geS())
u=s.a.e
t=u.d
u=t==null?u.d=D.Q():t
u.h(0,s.geQ())
u=s.a.e
t=u.c
u=t==null?u.c=D.Q():t
u.h(0,s.geO())
return!0},
a3:function(a){var u=a.a,t=a.b
if(H.w(this.f)){if(typeof u!=="number")return u.L()
u=-u}if(H.w(this.r)){if(typeof t!=="number")return t.L()
t=-t}return new V.N(u,t)},
bd:function(a){var u=this
a=H.a6(H.k(a,"$iv"),"$iaZ")
if(!J.W(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bf:function(a){var u,t,s,r,q,p,o,n=this
a=H.a6(H.k(a,"$iv"),"$iaZ")
if(!H.w(n.cx))return
if(H.w(n.ch)){u=a.d.E(0,a.y)
u=new V.N(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.A(t)
if(u<t)return
n.ch=!1}if(H.w(n.e)){u=a.c
t=a.d.E(0,a.y)
u=n.a3(new V.N(t.a,t.b).q(0,2).v(0,u.gY()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.L()
s=n.y
if(typeof s!=="number")return H.A(s)
t.sM(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.L()
t=n.x
if(typeof t!=="number")return H.A(t)
s.sM(-u*10*t)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=n.a3(new V.N(s.a,s.b).q(0,2).v(0,u.gY()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.A(p)
o=n.cy
if(typeof o!=="number")return H.A(o)
s.sX(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.A(q)
s=n.db
if(typeof s!=="number")return H.A(s)
o.sX(0,-p*q+s)
n.b.sM(0)
n.c.sM(0)
t=t.E(0,a.z)
n.dx=n.a3(new V.N(t.a,t.b).q(0,2).v(0,u.gY()))}n.U()},
bh:function(a){var u,t,s,r=this
H.k(a,"$iv")
if(!H.w(r.cx))return
r.cx=!1
if(H.w(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.L()
s=r.y
if(typeof s!=="number")return H.A(s)
u.sM(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.L()
u=r.x
if(typeof u!=="number")return H.A(u)
s.sM(-t*10*u)
r.U()}},
dN:function(a){var u=this
if(H.a6(H.k(a,"$iv"),"$id7").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
dP:function(a){var u,t,s,r,q,p,o,n=this
a=H.a6(H.k(a,"$iv"),"$iaZ")
if(!J.W(n.d,a.x.b))return
u=a.c
t=a.d
s=t.E(0,a.y)
r=n.a3(new V.N(s.a,s.b).q(0,2).v(0,u.gY()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.A(p)
o=n.cy
if(typeof o!=="number")return H.A(o)
s.sX(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.A(q)
s=n.db
if(typeof s!=="number")return H.A(s)
o.sX(0,-p*q+s)
n.b.sM(0)
n.c.sM(0)
t=t.E(0,a.z)
n.dx=n.a3(new V.N(t.a,t.b).q(0,2).v(0,u.gY()))
n.U()},
eT:function(a){var u=this
H.k(a,"$iv")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
eR:function(a){var u,t,s,r,q,p,o,n=this
a=H.a6(H.k(a,"$iv"),"$idv")
if(!H.w(n.cx))return
if(H.w(n.ch)){u=a.d.E(0,a.y)
u=new V.N(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.A(t)
if(u<t)return
n.ch=!1}if(H.w(n.e)){u=a.c
t=a.d.E(0,a.y)
u=n.a3(new V.N(t.a,t.b).q(0,2).v(0,u.gY()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.L()
s=n.y
if(typeof s!=="number")return H.A(s)
t.sM(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.L()
t=n.x
if(typeof t!=="number")return H.A(t)
s.sM(-u*10*t)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=n.a3(new V.N(s.a,s.b).q(0,2).v(0,u.gY()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.A(p)
o=n.cy
if(typeof o!=="number")return H.A(o)
s.sX(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.A(q)
s=n.db
if(typeof s!=="number")return H.A(s)
o.sX(0,-p*q+s)
n.b.sM(0)
n.c.sM(0)
t=t.E(0,a.z)
n.dx=n.a3(new V.N(t.a,t.b).q(0,2).v(0,u.gY()))}n.U()},
eP:function(a){var u,t,s,r=this
H.k(a,"$iv")
if(!H.w(r.cx))return
r.cx=!1
if(H.w(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.L()
s=r.y
if(typeof s!=="number")return H.A(s)
u.sM(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.L()
u=r.x
if(typeof u!=="number")return H.A(u)
s.sM(-t*10*u)
r.U()}},
ax:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.ai()
if(q<p){r.dy=p
u=b.y
r.c.aw(0,u)
r.b.aw(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aY(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.q(0,V.aY(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia3:1}
U.dG.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.Q():u},
J:function(a){var u=this.r
if(u!=null)u.A(a)},
aD:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.Q():t
t=r.gdQ()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.Q():s).h(0,t)
return!0},
dR:function(a){var u,t,s,r,q=this
H.k(a,"$iv")
if(!J.W(q.b,q.a.b.c))return
H.a6(a,"$ic9")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){q.d=r
u=new D.M("zoom",u,r,[P.z])
u.b=!0
q.J(u)}},
ax:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.aY(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia3:1}
M.cU.prototype={
a7:function(a){var u
H.k(a,"$iv")
u=this.x
if(u!=null)u.A(a)},
de:function(){return this.a7(null)},
dX:function(a,b){var u,t,s,r,q,p,o,n=E.aa
H.o(b,"$ii",[n],"$ai")
for(u=b.length,t=this.ga2(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c3()
o.sa9(null)
o.saA(null)
o.c=null
o.d=0
p.z=o}H.j(t,s)
if(o.a==null)o.sa9(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.cY([n])
n.b=!0
this.a7(n)},
dZ:function(a,b){var u,t,s=E.aa
H.o(b,"$ii",[s],"$ai")
for(u=b.gN(b),t=this.ga2();u.t();)u.gG(u).gp().R(0,t)
s=new D.cZ([s])
s.b=!0
this.a7(s)},
scO:function(a,b){var u,t=this,s=t.b
if(s!==b){if(s!=null)s.gp().R(0,t.ga2())
u=t.b
t.b=b
b.gp().h(0,t.ga2())
s=new D.M("target",u,t.b,[X.dq])
s.b=!0
t.a7(s)}},
scP:function(a){var u,t=this,s=t.c
if(s!=a){if(s!=null)s.gp().R(0,t.ga2())
u=t.c
t.c=a
if(a!=null)a.gp().h(0,t.ga2())
s=new D.M("technique",u,t.c,[O.bH])
s.b=!0
t.a7(s)}},
gp:function(){var u=this.x
return u==null?this.x=D.Q():u},
av:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.cJ(a1.c)
u=a1.b
u.toString
t=a2.a
t.bindFramebuffer(36160,null)
t.enable(2884)
t.enable(2929)
t.depthFunc(513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.A(s)
o=C.c.a1(p*s)
p=q.b
if(typeof r!=="number")return H.A(r)
n=C.c.a1(p*r)
p=C.c.a1(q.c*s)
a2.c=p
q=C.c.a1(q.d*r)
a2.d=q
t.viewport(o,n,p,q)
t.clearDepth(u.c)
u=u.a
t.clearColor(u.a,u.b,u.c,u.d)
t.clear(16640)
u=a1.a
t=a2.c
q=a2.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aY(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.cI(i)
t=$.kc
if(t==null){t=$.ke
if(t==null)t=$.ke=new V.bl(0,0,0)
q=$.kw
if(q==null)q=$.kw=new V.V(0,1,0)
p=$.kv
if(p==null)p=$.kv=new V.V(0,0,-1)
h=p.v(0,Math.sqrt(p.C(p)))
q=q.aE(h)
g=q.v(0,Math.sqrt(q.C(q)))
f=h.aE(g)
e=new V.V(t.a,t.b,t.c)
d=g.L(0).C(e)
c=f.L(0).C(e)
b=h.L(0).C(e)
t=V.aY(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.kc=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.q(0,a)}a2.db.cI(a)
for(u=a1.d.a,u=new J.al(u,u.length,[H.u(u,0)]);u.t();)u.d.aw(0,a2)
for(u=a1.d.a,u=new J.al(u,u.length,[H.u(u,0)]);u.t();)u.d.av(a2)
a1.a.toString
a2.cy.bF()
a2.db.bF()
a1.b.toString
a2.cH()},
sdd:function(a,b){this.d=H.o(b,"$iY",[E.aa],"$aY")},
$imN:1}
A.cJ.prototype={}
A.eI.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fd:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
fb:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.fS.prototype={}
A.fT.prototype={
i:function(a){return this.e}}
A.cf.prototype={
d8:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
c5:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.w(H.jC(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.X("Error compiling shader '"+H.h(s)+"': "+H.h(u)))}return s},
eF:function(){var u,t,s,r=this,q=H.c([],[A.cJ]),p=r.a,o=H.a5(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.A(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.cJ(p,t.name,s))}r.x=new A.eI(q)},
eH:function(){var u,t,s,r=this,q=H.c([],[A.dw]),p=r.a,o=H.a5(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.A(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.f8(t.type,t.size,t.name,s))}r.y=new A.hV(q)},
an:function(a,b,c){var u=this.a
if(a===1)return new A.cn(u,b,c)
else return A.ju(u,this.r,b,a,c)},
dv:function(a,b,c){var u=this.a
if(a===1)return new A.dz(u,b,c)
else return A.ju(u,this.r,b,a,c)},
dw:function(a,b,c){var u=this.a
if(a===1)return new A.dA(u,b,c)
else return A.ju(u,this.r,b,a,c)},
aP:function(a,b){return new P.dR(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
f8:function(a,b,c,d){var u=this
switch(a){case 5120:return u.an(b,c,d)
case 5121:return u.an(b,c,d)
case 5122:return u.an(b,c,d)
case 5123:return u.an(b,c,d)
case 5124:return u.an(b,c,d)
case 5125:return u.an(b,c,d)
case 5126:return new A.hN(u.a,c,d)
case 35664:return new A.hP(u.a,c,d)
case 35665:return new A.hR(u.a,c,d)
case 35666:return new A.hT(u.a,c,d)
case 35667:return new A.hQ(u.a,c,d)
case 35668:return new A.hS(u.a,c,d)
case 35669:return new A.hU(u.a,c,d)
case 35674:return new A.hW(u.a,c,d)
case 35675:return new A.dy(u.a,c,d)
case 35676:return new A.bI(u.a,c,d)
case 35678:return u.dv(b,c,d)
case 35680:return u.dw(b,c,d)
case 35670:throw H.f(u.aP("BOOL",c))
case 35671:throw H.f(u.aP("BOOL_VEC2",c))
case 35672:throw H.f(u.aP("BOOL_VEC3",c))
case 35673:throw H.f(u.aP("BOOL_VEC4",c))
default:throw H.f(P.X("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}}
A.bw.prototype={
i:function(a){return this.b}}
A.dw.prototype={}
A.hV.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
a6:function(a,b){var u=this.m(0,b)
if(u==null)throw H.f(P.X("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.H()},
H:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.D)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.cn.prototype={
i:function(a){return"Uniform1i: "+H.h(this.c)}}
A.hQ.prototype={
i:function(a){return"Uniform2i: "+H.h(this.c)}}
A.hS.prototype={
i:function(a){return"Uniform3i: "+H.h(this.c)}}
A.hU.prototype={
i:function(a){return"Uniform4i: "+H.h(this.c)}}
A.hO.prototype={
i:function(a){return"Uniform1iv: "+H.h(this.c)},
seV:function(a){H.o(a,"$ib",[P.C],"$ab")}}
A.hN.prototype={
i:function(a){return"Uniform1f: "+H.h(this.c)}}
A.hP.prototype={
i:function(a){return"Uniform2f: "+H.h(this.c)}}
A.hR.prototype={
i:function(a){return"Uniform3f: "+H.h(this.c)}}
A.hT.prototype={
i:function(a){return"Uniform4f: "+H.h(this.c)}}
A.hW.prototype={
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}}
A.dy.prototype={
i:function(a){return"UniformMat3: "+H.h(this.c)}}
A.bI.prototype={
aX:function(a){var u=new Float32Array(H.iZ(H.o(a,"$ib",[P.z],"$ab")))
C.i.fV(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.h(this.c)}}
A.dz.prototype={
i:function(a){return"UniformSampler2D: "+H.h(this.c)}}
A.dA.prototype={
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}
F.iX.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bA(s.b,b).bA(s.d.bA(s.c,b),c)
s=new V.bl(r.a,r.b,r.c)
if(!J.W(a.f,s)){a.f=s
s=a.a
if(s!=null)s.W()}a.sfN(r.v(0,Math.sqrt(r.C(r))))
s=1-b
u=1-c
u=new V.di(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.W(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.W()}},
$S:36}
F.Z.prototype={
dn:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.dH()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.cw())return
return s.v(0,Math.sqrt(s.C(s)))},
dr:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.E(0,q)
r=new V.V(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.C(r)))
r=t.E(0,q)
r=new V.V(r.a,r.b,r.c)
r=s.aE(r.v(0,Math.sqrt(r.C(r))))
return r.v(0,Math.sqrt(r.C(r)))},
bt:function(){var u,t=this
if(t.d!=null)return!0
u=t.dn()
if(u==null){u=t.dr()
if(u==null)return!1}t.d=u
t.a.a.W()
return!0},
dm:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.dH()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.cw())return
return s.v(0,Math.sqrt(s.C(s)))},
dq:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.P().a){l=d.E(0,g)
l=new V.V(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.L(0)}else{p=(l-u.b)/r
l=d.E(0,g)
l=new V.bl(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).E(0,j)
l=new V.V(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.L(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.C(l)))
l=o.aE(q)
l=l.v(0,Math.sqrt(l.C(l))).aE(o)
q=l.v(0,Math.sqrt(l.C(l)))}return q},
br:function(){var u,t=this
if(t.e!=null)return!0
u=t.dm()
if(u==null){u=t.dq()
if(u==null)return!1}t.e=u
t.a.a.W()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
u:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.a0(J.ag(s.e),0)+", "+C.b.a0(J.ag(t.b.e),0)+", "+C.b.a0(J.ag(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
H:function(){return this.u("")}}
F.aX.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
u:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.a0(J.ag(u.e),0)+", "+C.b.a0(J.ag(this.b.e),0)},
H:function(){return this.u("")}}
F.bj.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
u:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.a0(J.ag(u.e),0)},
H:function(){return this.u("")}}
F.dm.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.Q():u},
fn:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.S()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.D)(g),++s){r=g[s]
h.a.h(0,r.f6())}h.a.S()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.D)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.S()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bj()
if(n.a==null)H.a7(P.X("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.A(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.D)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.S()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.S()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.l(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
p=new F.aX()
o=l.a
if(o==null)H.a7(P.X("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.a7(P.X("May not create a line with vertices attached to different shapes."))
p.a=l
C.a.h(l.c.b,p)
p.b=k
C.a.h(k.c.c,p)
C.a.h(p.a.a.c.b,p)
p=p.a.a.e
if(p!=null)p.A(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.D)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.S()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.S()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.l(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.S()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cW(l,k,i)}g=h.e
if(g!=null)g.ag(0)},
at:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.at()||!1
if(!t.a.at())u=!1
s=t.e
if(s!=null)s.ag(0)
return u},
f3:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=34962,a=c.a.c.length,a0=a3.a,a1=(a0&$.b5().a)!==0?1:0
if((a0&$.b4().a)!==0)++a1
if((a0&$.b3().a)!==0)++a1
if((a0&$.b6().a)!==0)++a1
if((a0&$.b7().a)!==0)++a1
if((a0&$.cG().a)!==0)++a1
if((a0&$.cH().a)!==0)++a1
if((a0&$.bT().a)!==0)++a1
if((a0&$.bS().a)!==0)++a1
u=a3.gbM(a3)
t=u*4
a0=new Array(a*u)
a0.fixed$length=Array
s=P.z
r=H.c(a0,[s])
a0=new Array(a1)
a0.fixed$length=Array
q=H.c(a0,[Z.cM])
for(p=0,o=0;o<a1;++o){n=a3.f0(o)
m=n.gbM(n)
C.a.O(q,o,new Z.cM(n,m,p*4,t))
for(l=0;l<a;++l){a0=c.a.c
if(l>=a0.length)return H.l(a0,l)
k=a0[l].fl(n)
j=p+l*u
for(i=0;i<k.length;++i){C.a.O(r,j,k[i]);++j}}p+=m}H.o(r,"$ib",[s],"$ab")
a0=a2.a
h=a0.createBuffer()
a0.bindBuffer(b,h)
a0.bufferData(b,new Float32Array(H.iZ(r)),35044)
a0.bindBuffer(b,null)
g=new Z.cN(new Z.dI(b,h),q,a3)
g.sdH(H.c([],[Z.bg]))
if(c.b.b.length!==0){s=P.C
f=H.c([],[s])
for(o=0;e=c.b.b,o<e.length;++o){e=e[o].a
e.a.a.S()
C.a.h(f,e.e)}d=Z.jv(a0,34963,H.o(f,"$ib",[s],"$ab"))
C.a.h(g.b,new Z.bg(0,f.length,d))}if(c.c.b.length!==0){s=P.C
f=H.c([],[s])
for(o=0;e=c.c.b,o<e.length;++o){e=e[o].a
e.a.a.S()
C.a.h(f,e.e)
e=c.c.b
if(o>=e.length)return H.l(e,o)
e=e[o].b
e.a.a.S()
C.a.h(f,e.e)}d=Z.jv(a0,34963,H.o(f,"$ib",[s],"$ab"))
C.a.h(g.b,new Z.bg(1,f.length,d))}if(c.d.b.length!==0){s=P.C
f=H.c([],[s])
for(o=0;e=c.d.b,o<e.length;++o){e=e[o].a
e.a.a.S()
C.a.h(f,e.e)
e=c.d.b
if(o>=e.length)return H.l(e,o)
e=e[o].b
e.a.a.S()
C.a.h(f,e.e)
e=c.d.b
if(o>=e.length)return H.l(e,o)
e=e[o].c
e.a.a.S()
C.a.h(f,e.e)}d=Z.jv(a0,34963,H.o(f,"$ib",[s],"$ab"))
C.a.h(g.b,new Z.bg(4,f.length,d))}return g},
i:function(a){var u=this,t="   ",s=H.c([],[P.e])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.u(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.u(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.u(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.u(t))}return C.a.k(s,"\n")},
W:function(){var u=this.e
if(u!=null)u.A(null)},
$imO:1}
F.hd.prototype={
eY:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.o(c,"$ib",[F.ax],"$ab")
u=H.c([],[F.Z])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.l(c,r)
l=c[r];++r
if(r>=m)return H.l(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.l(c,j)
i=c[j]
if(s<0||s>=m)return H.l(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.cW(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cW(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cW(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cW(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
at:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.D)(u),++r)if(!u[r].bt())s=!1
return s},
bs:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.D)(u),++r)if(!u[r].br())s=!1
return s},
i:function(a){return this.H()},
u:function(a){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].u(a))
return C.a.k(r,"\n")},
H:function(){return this.u("")},
sdC:function(a){this.b=H.o(a,"$ib",[F.Z],"$ab")}}
F.he.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.H()},
u:function(a){var u,t,s=H.c([],[P.e]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.l(t,u)
C.a.h(s,t[u].u(a+(""+u+". ")))}return C.a.k(s,"\n")},
H:function(){return this.u("")},
sdI:function(a){this.b=H.o(a,"$ib",[F.aX],"$ab")}}
F.hf.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.H()},
u:function(a){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].u(a))
return C.a.k(r,"\n")},
H:function(){return this.u("")},
sbk:function(a){this.b=H.o(a,"$ib",[F.bj],"$ab")}}
F.ax.prototype={
bv:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.ky(u.cx,r,o,t,s,q,p,a,n)},
f6:function(){return this.bv(null)},
sfN:function(a){var u
if(!J.W(this.z,a)){this.z=a
u=this.a
if(u!=null)u.W()}},
fl:function(a){var u,t,s=this
if(a.n(0,$.b5())){u=s.f
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.b4())){u=s.r
t=[P.z]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.b3())){u=s.x
t=[P.z]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.b6())){u=s.y
t=[P.z]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.n(0,$.b7())){u=s.z
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.cG())){u=s.Q
t=[P.z]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.cH())){u=s.Q
t=[P.z]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bT()))return H.c([s.ch],[P.z])
else if(a.n(0,$.bS())){u=s.cx
t=[P.z]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.z])},
bt:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dH()
t.d.K(0,new F.i9(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
br:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dH()
t.d.K(0,new F.i8(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
u:function(a){var u,t,s=this,r="-",q=H.c([],[P.e])
C.a.h(q,C.b.a0(J.ag(s.e),0))
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
C.a.h(q,V.U(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.k(q,", ")
return a+"{"+t+"}"},
H:function(){return this.u("")}}
F.i9.prototype={
$1:function(a){var u,t
H.k(a,"$iZ")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:5}
F.i8.prototype={
$1:function(a){var u,t
H.k(a,"$iZ")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:5}
F.i2.prototype={
S:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.X("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.W()
return!0},
cm:function(a,b){var u=null,t=F.ky(u,u,a,u,u,b,u,u,0)
this.h(0,t)
return t},
gl:function(a){return this.c.length},
at:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)u[s].bt()
return!0},
bs:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)u[s].br()
return!0},
f4:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.W(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.A(null)}}}}return!0},
i:function(a){return this.H()},
u:function(a){var u,t,s,r
this.S()
u=H.c([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].u(a))
return C.a.k(u,"\n")},
H:function(){return this.u("")},
seW:function(a){this.c=H.o(a,"$ib",[F.ax],"$ab")}}
F.i3.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
K:function(a,b){var u=this
H.j(b,{func:1,ret:-1,args:[F.Z]})
C.a.K(u.b,b)
C.a.K(u.c,new F.i4(u,b))
C.a.K(u.d,new F.i5(u,b))},
i:function(a){return this.H()},
H:function(){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].u(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].u(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].u(""))
return C.a.k(r,"\n")},
sdD:function(a){this.b=H.o(a,"$ib",[F.Z],"$ab")},
sdE:function(a){this.c=H.o(a,"$ib",[F.Z],"$ab")},
sdF:function(a){this.d=H.o(a,"$ib",[F.Z],"$ab")}}
F.i4.prototype={
$1:function(a){H.k(a,"$iZ")
if(!J.W(a.a,this.a))this.b.$1(a)},
$S:5}
F.i5.prototype={
$1:function(a){var u
H.k(a,"$iZ")
u=this.a
if(!J.W(a.a,u)&&!J.W(a.b,u))this.b.$1(a)},
$S:5}
F.i6.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.H()},
H:function(){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].u(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].u(""))
return C.a.k(r,"\n")},
sdJ:function(a){this.b=H.o(a,"$ib",[F.aX],"$ab")},
sdK:function(a){this.c=H.o(a,"$ib",[F.aX],"$ab")}}
F.i7.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.H()},
H:function(){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].u(""))
return C.a.k(r,"\n")},
sbk:function(a){this.b=H.o(a,"$ib",[F.bj],"$ab")}}
O.df.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.Q():u},
b0:function(a){var u
H.k(a,"$iv")
u=this.r
if(u!=null)u.A(a)},
bT:function(){return this.b0(null)},
cf:function(a){},
cg:function(a){var u,t=this,s=t.f
if(s!=a){if(s!=null)s.gp().R(0,t.gbS())
u=t.f
t.f=a
if(a!=null)a.gp().h(0,t.gbS())
s=new D.M("bumpyTextureCube",u,t.f,[T.ds])
s.b=!0
t.b0(s)}},
bY:function(a,b){H.o(a,"$ib",[T.ck],"$ab")
if(b!=null)if(!C.a.P(a,b)){b.a=a.length
C.a.h(a,b)}},
fH:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f="nullBumpTxt",e="varying vec2 txt2D;\n",d="varying vec3 txtCube;\n",c=g.a
if(c==null){u=A.k9(g.d)
c=u.e
t=a.fr.m(0,c)
if(t==null){s=a.a
t=new A.fS(s,c)
t.d8(s,c)
t.z=u
r=u.c
q=r?"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n":"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\n"
p=u.d
q=(p?q+"uniform mat4 txtCubeMat;\n":q)+"\nattribute vec3 posAttr;\nattribute vec3 normAttr;\n"
o=u.b
if(o)q+="attribute vec3 binmAttr;\n"
if(r)q+="attribute vec2 txt2DAttr;\n"
q=(p?q+"attribute vec3 txtCubeAttr;\n":q)+"\nvarying vec3 normalVec;\n"
if(o)q+="varying vec3 binormalVec;\n"
if(r)q+=e
q=(p?q+d:q)+"\nvoid main()\n{\n   normalVec = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz;\n"
if(o)q+="   binormalVec = normalize(viewObjMat*vec4(binmAttr, 0.0)).xyz;\n"
if(r)q+="   txt2D = (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n"
q=(p?q+"   txtCube = (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":q)+"   gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n"
n=q.charCodeAt(0)==0?q:q
q=o?"precision mediump float;\n\nvarying vec3 normalVec;\nvarying vec3 binormalVec;\n":"precision mediump float;\n\nvarying vec3 normalVec;\n"
if(r)q+=e
q=(p?q+d:q)+"\n"
o=u.a
switch(o){case C.f:break
case C.l:break
case C.j:q+="uniform sampler2D bumpTxt;\nuniform int nullBumpTxt;\n"
break
case C.h:q+="uniform samplerCube bumpTxt;\nuniform int nullBumpTxt;\n"
break}q+="\nvec3 normal()\n{\n"
if(o===C.f||o===C.l)q+="   return normalize(normalVec);\n"
else{q+="   if(nullBumpTxt > 0) return normalVec;\n"
q=(o===C.j?q+"   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n":q+"   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n")+"   vec3 n = normalize(normalVec);\n   vec3 b = normalize(binormalVec);\n   vec3 c = normalize(cross(b, n));\n   b = cross(n, c);\n   mat3 mat = mat3( b.x,  b.y,  b.z,\n                   -c.x, -c.y, -c.z,\n                    n.x,  n.y,  n.z);\n   return mat * normalize(2.0*color - 1.0);\n"}q+="}\n\nvoid main()\n{\n   vec3 norm = normal();\n   norm = -norm*0.5 + 0.5;\n   gl_FragColor = vec4(norm.x, 1.0-norm.y, norm.z, 1.0);\n}\n"
t.c=n
t.d=q.charCodeAt(0)==0?q:q
t.e=t.c5(n,35633)
t.f=t.c5(t.d,35632)
q=s.createProgram()
t.r=q
s.attachShader(q,t.e)
s.attachShader(t.r,t.f)
s.linkProgram(t.r)
if(!H.w(H.jC(s.getProgramParameter(t.r,35714)))){m=s.getProgramInfoLog(t.r)
s.deleteProgram(t.r)
H.a7(P.X("Failed to link shader: "+H.h(m)))}t.eF()
t.eH()
t.Q=t.x.m(0,"posAttr")
t.cx=t.x.m(0,"normAttr")
t.ch=t.x.m(0,"binmAttr")
t.cy=t.x.m(0,"txt2DAttr")
t.db=t.x.m(0,"txtCubeAttr")
t.dx=H.a6(t.y.a6(0,"viewObjMat"),"$ibI")
t.dy=H.a6(t.y.a6(0,"projViewObjMat"),"$ibI")
if(r)t.fr=H.a6(t.y.a6(0,"txt2DMat"),"$idy")
if(p)t.fx=H.a6(t.y.a6(0,"txtCubeMat"),"$ibI")
switch(o){case C.f:break
case C.l:break
case C.j:t.fy=H.a6(t.y.a6(0,"bumpTxt"),"$idz")
t.id=H.a6(t.y.a6(0,f),"$icn")
break
case C.h:t.go=H.a6(t.y.a6(0,"bumpTxt"),"$idA")
t.id=H.a6(t.y.a6(0,f),"$icn")
break}if(c.length===0)H.a7(P.X("May not cache a shader with no name."))
if(a.fr.ct(0,c))H.a7(P.X('Shader cache already contains a shader by the name "'+c+'".'))
a.fr.O(0,c,t)}c=g.a=t
b.e=null}u=c.z
l=u.f
c=b.e
if(!(c instanceof Z.cN))c=b.e=null
if(c==null||!c.d.n(0,l)){b.d.at()
c=u.b
if(c){r=b.d
q=r.e
if(q!=null)++q.d
r.d.bs()
r.a.bs()
r=r.e
if(r!=null)r.ag(0)}r=u.d
if(r){q=b.d
p=q.e
if(p!=null)++p.d
q.a.f4()
q=q.e
if(q!=null)q.ag(0)}k=b.d.f3(new Z.ib(a.a),l)
k.aF($.b5()).e=g.a.Q.c
k.aF($.b4()).e=g.a.cx.c
if(c)k.aF($.b3()).e=g.a.ch.c
if(u.c)k.aF($.b6()).e=g.a.cy.c
if(r)k.aF($.b7()).e=g.a.db.c
b.e=k}j=H.c([],[T.ck])
c=g.a
r=a.a
r.useProgram(c.r)
c.x.fd()
c=g.a
q=a.cx
if(q==null){q=a.db
q=q.gad(q)
p=a.dx
p=a.cx=q.q(0,p.gad(p))
q=p}c=c.dx
c.toString
c.aX(q.aJ(0,!0))
q=g.a
c=a.ch
if(c==null){c=a.z
if(c==null){c=a.cy
c=c.gad(c)
p=a.db
p=a.z=c.q(0,p.gad(p))
c=p}p=a.dx
p=a.ch=c.q(0,p.gad(p))
c=p}q=q.dy
q.toString
q.aX(c.aJ(0,!0))
if(u.c){c=g.a
q=g.b
c=c.fr
c.toString
i=new Float32Array(H.iZ(H.o(q.aJ(0,!0),"$ib",[P.z],"$ab")))
C.i.fU(c.a,c.d,!1,i)}if(u.d){c=g.a
q=g.c
c=c.fx
c.toString
c.aX(q.aJ(0,!0))}switch(u.a){case C.f:break
case C.l:break
case C.j:g.bY(j,g.e)
c=g.a.id
C.i.bH(c.a,c.d,1)
break
case C.h:g.bY(j,g.f)
c=g.a
q=g.f
p=c.go
c=c.id
o=q!=null
if(!o||q.d<6)C.i.bH(c.a,c.d,1)
else{p.toString
if(!o||q.d<6)p.a.uniform1i(p.d,0)
else{q=q.a
p.a.uniform1i(p.d,q)}C.i.bH(c.a,c.d,0)}break}for(h=0;h<j.length;++h){c=j[h]
if(!c.c&&c.d>=6){c.c=!0
r.activeTexture(33984+c.a)
r.bindTexture(34067,c.b)}}c=b.e
c.bp(a)
c.av(a)
c.fT(a)
for(h=0;h<j.length;++h){c=j[h]
if(c.c){c.c=!1
r.activeTexture(33984+c.a)
r.bindTexture(34067,null)}}c=g.a
c.toString
r.useProgram(null)
c.x.fb()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return A.k9(this.d).e}}
O.bH.prototype={}
T.ck.prototype={}
T.ds.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.Q():u}}
T.hA.prototype={
ao:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.m
W.a_(t,"load",H.j(new T.hB(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
eB:function(a,b,c){var u,t,s,r
b=V.jN(b)
u=V.jN(a.width)
t=V.jN(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.ji()
s.width=u
s.height=t
r=H.k(C.k.cW(s,"2d"),"$ibX")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.mf(r.getImageData(0,0,s.width,s.height))}}}
T.hB.prototype={
$1:function(a){var u=this,t=u.a,s=t.eB(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.i.fM(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.fc()}++t.e},
$S:24}
V.aT.prototype={
ac:function(a,b){return!0},
i:function(a){return"all"},
$iah:1}
V.ah.prototype={}
V.d8.prototype={
ac:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)if(u[s].ac(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.D)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sT:function(a){this.a=H.o(a,"$ib",[V.ah],"$ab")},
$iah:1}
V.ab.prototype={
ac:function(a,b){return!this.d3(0,b)},
i:function(a){return"!["+this.bN(0)+"]"}}
V.h3.prototype={
ac:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.jr(this.a),t=H.jr(this.b)
return u+".."+t},
$iah:1}
V.hc.prototype={
d7:function(a){var u,t
if(a.a.length<=0)throw H.f(P.X("May not create a SetMatcher with zero characters."))
u=new H.aF([P.C,P.K])
for(t=new H.c7(a,a.gl(a),[H.af(a,"t",0)]);t.t();)u.O(0,t.d,!0)
this.seE(u)},
ac:function(a,b){return this.a.ct(0,b)},
i:function(a){var u=this.a
return P.js(new H.d4(u,[H.u(u,0)]))},
seE:function(a){this.a=H.o(a,"$iH",[P.C,P.K],"$aH")},
$iah:1}
V.cg.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cm(this.a.j(0,b))
r.sT(H.c([],[V.ah]))
r.c=!1
C.a.h(this.c,r)
return r},
fe:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(r.ac(0,a))return r}return},
i:function(a){return this.b},
seU:function(a){this.c=H.o(a,"$ib",[V.cm],"$ab")}}
V.du.prototype={
i:function(a){var u=H.jP(this.b,"\n","\\n"),t=H.jP(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cl.prototype={
af:function(a,b,c){var u,t,s
H.o(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.D)(c),++t){s=c[t]
this.c.O(0,s,b)}},
i:function(a){return this.b},
sez:function(a){var u=P.e
this.c=H.o(a,"$iH",[u,u],"$aH")}}
V.hE.prototype={
j:function(a,b){var u=this.a.m(0,b)
if(u==null){u=new V.cg(this,b)
u.seU(H.c([],[V.cm]))
u.d=null
this.a.O(0,b,u)}return u},
I:function(a){var u,t=this.b.m(0,a)
if(t==null){t=new V.cl(a)
u=P.e
t.sez(new H.aF([u,u]))
this.b.O(0,a,t)}return t},
cS:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.du]),l=this.c,k=[P.C],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.b.am(a,s)
q=l.fe(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.js(j)
throw H.f(P.X("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.js(j)
o=l.d
n=o.c.m(0,p)
t=new V.du(n==null?o.b:n,p,s)}++s}}},
seK:function(a){this.a=H.o(a,"$iH",[P.e,V.cg],"$aH")},
seN:function(a){this.b=H.o(a,"$iH",[P.e,V.cl],"$aH")}}
V.cm.prototype={
i:function(a){return this.b.b+": "+this.bN(0)}}
X.cP.prototype={$ik8:1}
X.fh.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.Q():u}}
X.dh.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.Q():u},
al:function(a){var u
H.k(a,"$iv")
u=this.f
if(u!=null)u.A(a)},
di:function(){return this.al(null)},
saG:function(a){var u,t,s=this
if(!J.W(s.b,a)){u=s.b
if(u!=null)u.gp().R(0,s.gbU())
t=s.b
s.b=a
if(a!=null)a.gp().h(0,s.gbU())
u=new D.M("mover",t,s.b,[U.a3])
u.b=!0
s.al(u)}},
$ik8:1,
$icP:1}
X.dq.prototype={}
V.ba.prototype={
aL:function(a){this.b=new P.fl(C.K)
this.c=null
this.sb9(H.c([],[[P.b,W.an]]))},
F:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.an]))
u=a.split("\n")
for(l=u.length,t=[W.an],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.E(q)
o=m.b.du(q,0,q.length)
n=o==null?q:o
C.I.cZ(p,H.jP(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaR(m.d),p)}},
cG:function(a,b){var u,t,s,r,q=this
H.o(b,"$ib",[P.e],"$ab")
q.sb9(H.c([],[[P.b,W.an]]))
u=C.a.k(b,"\n")
t=q.c
for(t=(t==null?q.c=q.aQ():t).cS(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)q.aT(t[r])},
sb9:function(a){this.d=H.o(a,"$ib",[[P.b,W.an]],"$ab")}}
V.jd.prototype={
$1:function(a){H.k(a,"$iaO")
P.jO(C.c.cR(this.a.gfg(),2)+" fps")},
$S:37}
V.eY.prototype={
aT:function(a){var u=this
switch(a.a){case"Class":u.F(a.b,"#551")
break
case"Comment":u.F(a.b,"#777")
break
case"Id":u.F(a.b,"#111")
break
case"Num":u.F(a.b,"#191")
break
case"Reserved":u.F(a.b,"#119")
break
case"String":u.F(a.b,"#171")
break
case"Symbol":u.F(a.b,"#616")
break
case"Type":u.F(a.b,"#B11")
break
case"Whitespace":u.F(a.b,"#111")
break}},
aQ:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.hF()
a1.c=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=V.r(new H.p("_"))
C.a.h(u.a,t)
t=V.S("a","z")
C.a.h(u.a,t)
t=V.S("A","Z")
C.a.h(u.a,t)
t=a1.j(0,q).k(0,q)
u=V.r(new H.p("_"))
C.a.h(t.a,u)
u=V.S("0","9")
C.a.h(t.a,u)
u=V.S("a","z")
C.a.h(t.a,u)
u=V.S("A","Z")
C.a.h(t.a,u)
u=a1.j(0,r).k(0,p)
t=V.S("0","9")
C.a.h(u.a,t)
t=a1.j(0,p).k(0,p)
u=V.S("0","9")
C.a.h(t.a,u)
u=a1.j(0,p).k(0,o)
t=V.r(new H.p("."))
C.a.h(u.a,t)
t=a1.j(0,o).k(0,n)
u=V.S("0","9")
C.a.h(t.a,u)
u=a1.j(0,n).k(0,n)
t=V.S("0","9")
C.a.h(u.a,t)
t=a1.j(0,r).k(0,m)
u=V.r(new H.p(l))
C.a.h(t.a,u)
u=a1.j(0,m).k(0,m)
t=V.r(new H.p(l))
C.a.h(u.a,t)
t=a1.j(0,r).k(0,k)
u=V.r(new H.p('"'))
C.a.h(t.a,u)
u=a1.j(0,k).k(0,j)
t=V.r(new H.p('"'))
C.a.h(u.a,t)
t=a1.j(0,k).k(0,i)
u=V.r(new H.p("\\"))
C.a.h(t.a,u)
u=a1.j(0,i).k(0,k)
t=V.r(new H.p('"'))
C.a.h(u.a,t)
C.a.h(a1.j(0,k).k(0,k).a,new V.aT())
t=a1.j(0,r).k(0,h)
u=V.r(new H.p("'"))
C.a.h(t.a,u)
u=a1.j(0,h).k(0,g)
t=V.r(new H.p("'"))
C.a.h(u.a,t)
t=a1.j(0,h).k(0,f)
u=V.r(new H.p("\\"))
C.a.h(t.a,u)
u=a1.j(0,f).k(0,h)
t=V.r(new H.p("'"))
C.a.h(u.a,t)
C.a.h(a1.j(0,h).k(0,h).a,new V.aT())
t=a1.j(0,r).k(0,e)
u=V.r(new H.p("/"))
C.a.h(t.a,u)
u=a1.j(0,e).k(0,d)
t=V.r(new H.p("/"))
C.a.h(u.a,t)
t=a1.j(0,d).k(0,c)
u=V.r(new H.p("\n"))
C.a.h(t.a,u)
u=a1.j(0,d).k(0,d)
t=new V.ab()
s=[V.ah]
t.sT(H.c([],s))
C.a.h(u.a,t)
u=V.r(new H.p("\n"))
C.a.h(t.a,u)
u=a1.j(0,e).k(0,b)
t=V.r(new H.p("*"))
C.a.h(u.a,t)
t=a1.j(0,b).k(0,a)
u=V.r(new H.p("*"))
C.a.h(t.a,u)
u=a1.j(0,a).k(0,b)
t=new V.ab()
t.sT(H.c([],s))
C.a.h(u.a,t)
u=V.r(new H.p("*"))
C.a.h(t.a,u)
u=a1.j(0,a).k(0,c)
t=V.r(new H.p("/"))
C.a.h(u.a,t)
t=a1.j(0,r).k(0,a0)
u=V.r(new H.p(" \n\t"))
C.a.h(t.a,u)
u=a1.j(0,a0).k(0,a0)
t=V.r(new H.p(" \n\t"))
C.a.h(u.a,t)
t=a1.j(0,p)
t.d=t.a.I("Num")
t=a1.j(0,n)
t.d=t.a.I("Num")
t=a1.j(0,m)
t.d=t.a.I("Symbol")
t=a1.j(0,j)
t.d=t.a.I("String")
t=a1.j(0,g)
t.d=t.a.I("String")
t=a1.j(0,c)
t.d=t.a.I(d)
t=a1.j(0,a0)
t.d=t.a.I(a0)
t=a1.j(0,q)
t=t.d=t.a.I(q)
u=[P.e]
t.af(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.af(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.af(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fi.prototype={
aT:function(a){var u=this
switch(a.a){case"Builtin":u.F(a.b,"#411")
break
case"Comment":u.F(a.b,"#777")
break
case"Id":u.F(a.b,"#111")
break
case"Num":u.F(a.b,"#191")
break
case"Preprocess":u.F(a.b,"#737")
break
case"Reserved":u.F(a.b,"#119")
break
case"Symbol":u.F(a.b,"#611")
break
case"Type":u.F(a.b,"#171")
break
case"Whitespace":u.F(a.b,"#111")
break}},
aQ:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.hF()
e.c=e.j(0,r)
u=e.j(0,r).k(0,q)
t=V.r(new H.p("_"))
C.a.h(u.a,t)
t=V.S("a","z")
C.a.h(u.a,t)
t=V.S("A","Z")
C.a.h(u.a,t)
t=e.j(0,q).k(0,q)
u=V.r(new H.p("_"))
C.a.h(t.a,u)
u=V.S("0","9")
C.a.h(t.a,u)
u=V.S("a","z")
C.a.h(t.a,u)
u=V.S("A","Z")
C.a.h(t.a,u)
u=e.j(0,r).k(0,p)
t=V.S("0","9")
C.a.h(u.a,t)
t=e.j(0,p).k(0,p)
u=V.S("0","9")
C.a.h(t.a,u)
u=e.j(0,p).k(0,o)
t=V.r(new H.p("."))
C.a.h(u.a,t)
t=e.j(0,o).k(0,n)
u=V.S("0","9")
C.a.h(t.a,u)
u=e.j(0,n).k(0,n)
t=V.S("0","9")
C.a.h(u.a,t)
t=e.j(0,r).k(0,m)
u=V.r(new H.p(l))
C.a.h(t.a,u)
u=e.j(0,m).k(0,m)
t=V.r(new H.p(l))
C.a.h(u.a,t)
t=e.j(0,r).k(0,k)
u=V.r(new H.p("/"))
C.a.h(t.a,u)
u=e.j(0,k).k(0,j)
t=V.r(new H.p("/"))
C.a.h(u.a,t)
C.a.h(e.j(0,k).k(0,m).a,new V.aT())
t=e.j(0,j).k(0,i)
u=V.r(new H.p("\n"))
C.a.h(t.a,u)
u=e.j(0,j).k(0,j)
t=new V.ab()
s=[V.ah]
t.sT(H.c([],s))
C.a.h(u.a,t)
u=V.r(new H.p("\n"))
C.a.h(t.a,u)
u=e.j(0,r).k(0,h)
t=V.r(new H.p("#"))
C.a.h(u.a,t)
t=e.j(0,h).k(0,h)
u=new V.ab()
u.sT(H.c([],s))
C.a.h(t.a,u)
t=V.r(new H.p("\n"))
C.a.h(u.a,t)
t=e.j(0,h).k(0,g)
u=V.r(new H.p("\n"))
C.a.h(t.a,u)
u=e.j(0,r).k(0,f)
t=V.r(new H.p(" \n\t"))
C.a.h(u.a,t)
t=e.j(0,f).k(0,f)
u=V.r(new H.p(" \n\t"))
C.a.h(t.a,u)
u=e.j(0,p)
u.d=u.a.I("Num")
u=e.j(0,n)
u.d=u.a.I("Num")
u=e.j(0,m)
u.d=u.a.I("Symbol")
u=e.j(0,i)
u.d=u.a.I(j)
u=e.j(0,g)
u.d=u.a.I(h)
u=e.j(0,f)
u.d=u.a.I(f)
u=e.j(0,q)
u=u.d=u.a.I(q)
t=[P.e]
u.af(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.af(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.af(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fj.prototype={
aT:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.F(a.b,"#911")
u.F("=",t)
break
case"Id":u.F(a.b,t)
break
case"Other":u.F(a.b,t)
break
case"Reserved":u.F(a.b,"#119")
break
case"String":u.F(a.b,"#171")
break
case"Symbol":u.F(a.b,"#616")
break}},
aQ:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.hF()
l.c=l.j(0,s)
u=l.j(0,s).k(0,r)
t=V.r(new H.p("_"))
C.a.h(u.a,t)
t=V.S("a","z")
C.a.h(u.a,t)
t=V.S("A","Z")
C.a.h(u.a,t)
t=l.j(0,r).k(0,r)
u=V.r(new H.p("_"))
C.a.h(t.a,u)
u=V.S("0","9")
C.a.h(t.a,u)
u=V.S("a","z")
C.a.h(t.a,u)
u=V.S("A","Z")
C.a.h(t.a,u)
u=l.j(0,r).k(0,q)
t=V.r(new H.p("="))
C.a.h(u.a,t)
u.c=!0
u=l.j(0,s).k(0,p)
t=V.r(new H.p("</\\-!>="))
C.a.h(u.a,t)
t=l.j(0,p).k(0,p)
u=V.r(new H.p("</\\-!>="))
C.a.h(t.a,u)
u=l.j(0,s).k(0,o)
t=V.r(new H.p('"'))
C.a.h(u.a,t)
t=l.j(0,o).k(0,n)
u=V.r(new H.p('"'))
C.a.h(t.a,u)
u=l.j(0,o).k(0,"EscStr")
t=V.r(new H.p("\\"))
C.a.h(u.a,t)
t=l.j(0,"EscStr").k(0,o)
u=V.r(new H.p('"'))
C.a.h(t.a,u)
C.a.h(l.j(0,o).k(0,o).a,new V.aT())
C.a.h(l.j(0,s).k(0,m).a,new V.aT())
u=l.j(0,m).k(0,m)
t=new V.ab()
t.sT(H.c([],[V.ah]))
C.a.h(u.a,t)
u=V.r(new H.p('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.S("a","z")
C.a.h(t.a,u)
u=V.S("A","Z")
C.a.h(t.a,u)
u=l.j(0,p)
u.d=u.a.I("Symbol")
u=l.j(0,n)
u.d=u.a.I("String")
u=l.j(0,r)
t=u.a.I(r)
u.d=t
t.af(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
t=l.j(0,q)
t.d=t.a.I(q)
t=l.j(0,m)
t.d=t.a.I(m)
return l}}
V.fZ.prototype={
cG:function(a,b){H.o(b,"$ib",[P.e],"$ab")
this.sb9(H.c([],[[P.b,W.an]]))
this.F(C.a.k(b,"\n"),"#111")},
aT:function(a){},
aQ:function(){return}}
V.hg.prototype={
d9:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a_(q,"scroll",H.j(new V.hi(o),{func:1,ret:-1,args:[r]}),!1,r)},
cn:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.o(a,"$ib",[P.e],"$ab")
this.eG()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.cS(C.a.fk(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q){p=s[q]
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
if(H.mB(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.l(m,1)
l.href=H.E(m[1])
l.textContent=H.E(m[0])
t.appendChild(l)}else{k=P.kD(C.v,n,C.m,!1)
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
cV:function(a){var u,t,s,r=new V.eY("dart")
r.aL("dart")
u=new V.fi("glsl")
u.aL("glsl")
t=new V.fj("html")
t.aL("html")
s=C.a.ff(H.c([r,u,t],[V.ba]),new V.hj(a))
if(s!=null)return s
r=new V.fZ("plain")
r.aL("plain")
return r},
cl:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.o(b0,"$ib",[P.e],"$ab")
u=H.c([],[P.C])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.jI(r).aY(r,"+")){C.a.O(b0,s,C.b.aZ(r,1))
C.a.h(u,1)
t=!0}else if(C.b.aY(r,"-")){C.a.O(b0,s,C.b.aZ(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.cV(a8)
q.cG(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.kD(C.v,a7,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.jT()
i.href="#"+m
i.textContent=a7
j.appendChild(i)
k.appendChild(j)
l.appendChild(k)
n.appendChild(l)
if(t)for(h=a9,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className=a5
if(s>=u.length)return H.l(u,s)
b=u[s]
if(b===0){++g;++h
d.textContent=""+g
c.textContent=""+h}else if(b>0){e.className="codeTableRow codeLineLightGreen"
d.className="codeLineNums codeLineGreen codeLineCenter"
c.className="codeLineNums codeLineGreen";++h
d.textContent="+"
c.textContent=""+h}else if(b<0){e.className="codeTableRow codeLineLightRed"
d.className="codeLineNums codeLineRed"
c.className="codeLineNums codeLineRed codeLineCenter";++g
d.textContent=""+g
c.textContent="-"}a=p.createElement("td")
a.className=a6
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.D)(r),++a0)C.S.f_(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.D)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gN(r);a3.t();)c.appendChild(a3.gG(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
eG:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.hF()
u.c=u.j(0,q)
t=u.j(0,q).k(0,p)
s=V.r(new H.p("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new V.ab()
r=[V.ah]
s.sT(H.c([],r))
C.a.h(t.a,s)
t=V.r(new H.p("*"))
C.a.h(s.a,t)
t=u.j(0,p).k(0,"BoldEnd")
s=V.r(new H.p("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,q).k(0,o)
s=V.r(new H.p("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,o).k(0,o)
s=new V.ab()
s.sT(H.c([],r))
C.a.h(t.a,s)
t=V.r(new H.p("_"))
C.a.h(s.a,t)
t=u.j(0,o).k(0,n)
s=V.r(new H.p("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,q).k(0,m)
s=V.r(new H.p("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,m).k(0,m)
s=new V.ab()
s.sT(H.c([],r))
C.a.h(t.a,s)
t=V.r(new H.p("`"))
C.a.h(s.a,t)
t=u.j(0,m).k(0,"CodeEnd")
s=V.r(new H.p("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,q).k(0,l)
s=V.r(new H.p("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,l).k(0,k)
s=V.r(new H.p("|"))
C.a.h(t.a,s)
s=u.j(0,l).k(0,j)
t=V.r(new H.p("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,l).k(0,l)
t=new V.ab()
t.sT(H.c([],r))
C.a.h(s.a,t)
s=V.r(new H.p("|]"))
C.a.h(t.a,s)
s=u.j(0,k).k(0,j)
t=V.r(new H.p("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new V.ab()
t.sT(H.c([],r))
C.a.h(s.a,t)
s=V.r(new H.p("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,q).k(0,i).a,new V.aT())
s=u.j(0,i).k(0,i)
t=new V.ab()
t.sT(H.c([],r))
C.a.h(s.a,t)
s=V.r(new H.p("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.I(p)
s=u.j(0,n)
s.d=s.a.I(o)
s=u.j(0,"CodeEnd")
s.d=s.a.I(m)
s=u.j(0,j)
s.d=s.a.I("Link")
s=u.j(0,i)
s.d=s.a.I(i)
this.b=u}}
V.hi.prototype={
$1:function(a){P.kq(C.n,new V.hh(this.a))},
$S:24}
V.hh.prototype={
$0:function(){var u=C.c.a1(document.documentElement.scrollTop),t=this.a.style,s=H.h(-0.01*u)+"px"
t.top=s},
$S:2}
V.hj.prototype={
$1:function(a){return H.k(a,"$iba").a===this.a},
$S:38}
D.ja.prototype={
$1:function(a){var u,t,s,r
H.k(a,"$iv")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.cl("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.cl("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:8};(function aliases(){var u=J.a.prototype
u.d0=u.i
u=J.d2.prototype
u.d2=u.i
u=P.i.prototype
u.d1=u.aV
u=W.J.prototype
u.b_=u.Z
u=W.ec.prototype
u.d4=u.a5
u=V.d8.prototype
u.d3=u.ac
u.bN=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"m9","lR",11)
u(P,"ma","lS",11)
u(P,"mb","lT",11)
t(P,"kM","m7",3)
s(W,"ml",4,null,["$4"],["lV"],19,0)
s(W,"mm",4,null,["$4"],["lW"],19,0)
var m
r(m=E.aa.prototype,"gcE",0,0,null,["$1","$0"],["cF","fv"],1,0)
r(m,"gcC",0,0,null,["$1","$0"],["cD","fu"],1,0)
r(m,"gcA",0,0,null,["$1","$0"],["cB","fq"],1,0)
q(m,"gfo","fp",7)
q(m,"gfs","ft",7)
r(m=E.dt.prototype,"gbP",0,0,null,["$1","$0"],["bR","bQ"],1,0)
p(m,"gfI","cK",3)
o(m=X.dD.prototype,"ge5","e6",9)
o(m,"gdU","dV",9)
o(m,"ge_","e0",4)
o(m,"ge9","ea",20)
o(m,"ge7","e8",20)
o(m,"gec","ed",4)
o(m,"geg","eh",4)
o(m,"ge3","e4",4)
o(m,"gee","ef",4)
o(m,"ge1","e2",4)
o(m,"gei","ej",34)
o(m,"gek","el",9)
o(m,"geu","ev",10)
o(m,"gep","eq",10)
o(m,"ger","es",10)
n(V.N.prototype,"gl","bz",21)
n(V.V.prototype,"gl","bz",21)
r(m=U.c5.prototype,"gap",0,0,null,["$1","$0"],["J","U"],1,0)
q(m,"gdS","dT",22)
q(m,"gen","eo",22)
r(m=U.dE.prototype,"gap",0,0,null,["$1","$0"],["J","U"],1,0)
o(m,"gbc","bd",0)
o(m,"gbe","bf",0)
o(m,"gbg","bh",0)
r(m=U.dF.prototype,"gap",0,0,null,["$1","$0"],["J","U"],1,0)
o(m,"gbc","bd",0)
o(m,"gbe","bf",0)
o(m,"gbg","bh",0)
o(m,"gdM","dN",0)
o(m,"gdO","dP",0)
o(m,"geS","eT",0)
o(m,"geQ","eR",0)
o(m,"geO","eP",0)
o(U.dG.prototype,"gdQ","dR",0)
r(m=M.cU.prototype,"ga2",0,0,null,["$1","$0"],["a7","de"],1,0)
q(m,"gdW","dX",7)
q(m,"gdY","dZ",7)
r(O.df.prototype,"gbS",0,0,null,["$1","$0"],["b0","bT"],1,0)
r(X.dh.prototype,"gbU",0,0,null,["$1","$0"],["al","di"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.I,null)
s(P.I,[H.jp,J.a,J.al,P.e_,P.i,H.c7,P.aD,H.bx,H.dC,H.hK,P.bd,H.bY,H.eh,P.a1,H.fu,H.fv,H.fq,P.en,P.aS,P.aq,P.dJ,P.hq,P.ci,P.hr,P.aO,P.a8,P.iW,P.iK,P.bJ,P.dZ,P.t,P.bZ,P.fm,P.iU,P.K,P.am,P.a0,P.bc,P.fX,P.dn,P.dR,P.fg,P.be,P.b,P.H,P.G,P.ad,P.e,P.bF,W.eU,W.bn,W.x,W.de,W.ec,W.iP,W.cX,W.aj,W.iJ,W.et,P.es,P.iE,O.Y,O.c8,E.eN,E.aa,E.h4,E.dt,Z.dI,Z.ib,Z.cN,Z.bg,Z.b1,D.eQ,D.c3,D.v,X.cO,X.d3,X.fs,X.fx,X.ai,X.fJ,X.hG,X.dD,V.aU,V.f7,V.d9,V.bi,V.a4,V.bl,V.di,V.dk,V.N,V.V,U.dE,U.dF,U.dG,M.cU,A.cJ,A.eI,A.fT,A.bw,A.dw,A.hV,F.Z,F.aX,F.bj,F.dm,F.hd,F.he,F.hf,F.ax,F.i2,F.i3,F.i6,F.i7,O.bH,T.hA,V.aT,V.ah,V.d8,V.h3,V.hc,V.cg,V.du,V.cl,V.hE,X.cP,X.dq,X.dh,V.ba,V.hg])
s(J.a,[J.fo,J.fp,J.d2,J.aE,J.d1,J.bz,H.cb,W.d,W.eF,W.cK,W.bX,W.az,W.aA,W.L,W.dL,W.eZ,W.f_,W.dN,W.cT,W.dP,W.f1,W.m,W.dS,W.aC,W.fk,W.dV,W.bf,W.d6,W.fD,W.e0,W.e1,W.aH,W.e2,W.e5,W.aI,W.e9,W.eb,W.aL,W.ed,W.aM,W.ei,W.at,W.el,W.hD,W.aP,W.eo,W.hI,W.i_,W.eu,W.ew,W.ey,W.eA,W.eC,P.aW,P.dX,P.b_,P.e7,P.h1,P.ej,P.b0,P.eq,P.eJ,P.dK,P.cL,P.dj,P.bE,P.dl,P.dr,P.dx,P.ef])
s(J.d2,[J.fY,J.co,J.bh])
t(J.jo,J.aE)
s(J.d1,[J.d0,J.d_])
t(P.fw,P.e_)
s(P.fw,[H.dB,W.ik,W.a9,P.fc])
t(H.p,H.dB)
s(P.i,[H.f4,H.fA,H.cp])
s(H.f4,[H.bA,H.d4])
s(P.aD,[H.fB,H.ic])
t(H.fC,H.bA)
s(P.bd,[H.fU,H.fr,H.hY,H.hM,H.eP,H.ha,P.eH,P.dg,P.as,P.hZ,P.hX,P.ch,P.eS,P.eX])
s(H.bY,[H.je,H.hx,H.j6,H.j7,H.j8,P.ig,P.ie,P.ih,P.ii,P.iT,P.iS,P.ir,P.iv,P.is,P.it,P.iu,P.iy,P.iz,P.ix,P.iw,P.hs,P.ht,P.j0,P.iH,P.iG,P.iI,P.fz,P.f2,P.f3,W.f5,W.fF,W.fH,W.h9,W.hp,W.iq,W.fR,W.fQ,W.iL,W.iM,W.iR,W.iV,P.j2,P.fd,P.fe,P.eL,E.h5,E.h6,E.h7,E.hC,D.f8,D.f9,F.iX,F.i9,F.i8,F.i4,F.i5,T.hB,V.jd,V.hi,V.hh,V.hj,D.ja])
s(H.hx,[H.hn,H.bV])
t(H.id,P.eH)
t(P.fy,P.a1)
s(P.fy,[H.aF,W.ij])
t(H.db,H.cb)
s(H.db,[H.ct,H.cv])
t(H.cu,H.ct)
t(H.ca,H.cu)
t(H.cw,H.cv)
t(H.dc,H.cw)
s(H.dc,[H.fK,H.fL,H.fM,H.fN,H.fO,H.dd,H.fP])
t(P.iF,P.iW)
t(P.iD,P.iK)
t(P.c_,P.hr)
t(P.f6,P.bZ)
s(P.c_,[P.fl,P.i1])
t(P.i0,P.f6)
s(P.a0,[P.z,P.C])
s(P.as,[P.bD,P.fn])
s(W.d,[W.y,W.fb,W.aK,W.cx,W.aN,W.au,W.cz,W.ia,W.cq,P.eM,P.bu])
s(W.y,[W.J,W.b9,W.cr])
s(W.J,[W.q,P.n])
s(W.q,[W.cI,W.eG,W.bU,W.b8,W.bv,W.an,W.ff,W.c6,W.hb,W.bG,W.dp,W.hv,W.hw,W.cj])
s(W.az,[W.c0,W.eV,W.eW])
t(W.eT,W.aA)
t(W.c1,W.dL)
t(W.dO,W.dN)
t(W.cS,W.dO)
t(W.dQ,W.dP)
t(W.f0,W.dQ)
t(W.aB,W.cK)
t(W.dT,W.dS)
t(W.fa,W.dT)
t(W.dW,W.dV)
t(W.by,W.dW)
t(W.bm,W.m)
s(W.bm,[W.aG,W.a2,W.av])
t(W.fE,W.e0)
t(W.fG,W.e1)
t(W.e3,W.e2)
t(W.fI,W.e3)
t(W.e6,W.e5)
t(W.cc,W.e6)
t(W.ea,W.e9)
t(W.h_,W.ea)
t(W.h8,W.eb)
t(W.cy,W.cx)
t(W.hk,W.cy)
t(W.ee,W.ed)
t(W.hl,W.ee)
t(W.ho,W.ei)
t(W.em,W.el)
t(W.hy,W.em)
t(W.cA,W.cz)
t(W.hz,W.cA)
t(W.ep,W.eo)
t(W.hH,W.ep)
t(W.aR,W.a2)
t(W.ev,W.eu)
t(W.il,W.ev)
t(W.dM,W.cT)
t(W.ex,W.ew)
t(W.iA,W.ex)
t(W.ez,W.ey)
t(W.e4,W.ez)
t(W.eB,W.eA)
t(W.iN,W.eB)
t(W.eD,W.eC)
t(W.iO,W.eD)
t(W.im,W.ij)
t(W.io,P.hq)
t(W.jw,W.io)
t(W.ip,P.ci)
t(W.iQ,W.ec)
t(P.ac,P.iE)
t(P.dY,P.dX)
t(P.ft,P.dY)
t(P.e8,P.e7)
t(P.fV,P.e8)
t(P.ce,P.n)
t(P.ek,P.ej)
t(P.hu,P.ek)
t(P.er,P.eq)
t(P.hJ,P.er)
t(P.eK,P.dK)
t(P.fW,P.bu)
t(P.eg,P.ef)
t(P.hm,P.eg)
s(E.eN,[Z.cM,A.cf,T.ck])
s(D.v,[D.cY,D.cZ,D.M,X.h0])
s(X.h0,[X.d7,X.aZ,X.c9,X.dv])
s(D.eQ,[U.eR,U.a3])
t(U.cQ,U.a3)
t(U.c5,O.Y)
t(A.fS,A.cf)
s(A.dw,[A.cn,A.hQ,A.hS,A.hU,A.hO,A.hN,A.hP,A.hR,A.hT,A.hW,A.dy,A.bI,A.dz,A.dA])
t(O.df,O.bH)
t(T.ds,T.ck)
s(V.d8,[V.ab,V.cm])
t(X.fh,X.dq)
s(V.ba,[V.eY,V.fi,V.fj,V.fZ])
u(H.dB,H.dC)
u(H.ct,P.t)
u(H.cu,H.bx)
u(H.cv,P.t)
u(H.cw,H.bx)
u(P.e_,P.t)
u(W.dL,W.eU)
u(W.dN,P.t)
u(W.dO,W.x)
u(W.dP,P.t)
u(W.dQ,W.x)
u(W.dS,P.t)
u(W.dT,W.x)
u(W.dV,P.t)
u(W.dW,W.x)
u(W.e0,P.a1)
u(W.e1,P.a1)
u(W.e2,P.t)
u(W.e3,W.x)
u(W.e5,P.t)
u(W.e6,W.x)
u(W.e9,P.t)
u(W.ea,W.x)
u(W.eb,P.a1)
u(W.cx,P.t)
u(W.cy,W.x)
u(W.ed,P.t)
u(W.ee,W.x)
u(W.ei,P.a1)
u(W.el,P.t)
u(W.em,W.x)
u(W.cz,P.t)
u(W.cA,W.x)
u(W.eo,P.t)
u(W.ep,W.x)
u(W.eu,P.t)
u(W.ev,W.x)
u(W.ew,P.t)
u(W.ex,W.x)
u(W.ey,P.t)
u(W.ez,W.x)
u(W.eA,P.t)
u(W.eB,W.x)
u(W.eC,P.t)
u(W.eD,W.x)
u(P.dX,P.t)
u(P.dY,W.x)
u(P.e7,P.t)
u(P.e8,W.x)
u(P.ej,P.t)
u(P.ek,W.x)
u(P.eq,P.t)
u(P.er,W.x)
u(P.dK,P.a1)
u(P.ef,P.t)
u(P.eg,W.x)})();(function constants(){var u=hunkHelpers.makeConstList
C.r=W.b8.prototype
C.k=W.bv.prototype
C.I=W.an.prototype
C.L=J.a.prototype
C.a=J.aE.prototype
C.M=J.d_.prototype
C.d=J.d0.prototype
C.c=J.d1.prototype
C.b=J.bz.prototype
C.N=J.bh.prototype
C.R=W.cc.prototype
C.w=J.fY.prototype
C.i=P.bE.prototype
C.S=W.bG.prototype
C.x=W.dp.prototype
C.q=J.co.prototype
C.y=W.aR.prototype
C.z=W.cq.prototype
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.A=function() {
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
C.F=function(getTagFallback) {
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
C.B=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.C=function(hooks) {
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
C.E=function(hooks) {
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
C.D=function(hooks) {
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
C.u=function(hooks) { return hooks; }

C.G=new P.fX()
C.m=new P.i0()
C.H=new P.i1()
C.e=new P.iF()
C.f=new A.bw(0,"ColorSourceType.None")
C.l=new A.bw(1,"ColorSourceType.Solid")
C.j=new A.bw(2,"ColorSourceType.Texture2D")
C.h=new A.bw(3,"ColorSourceType.TextureCube")
C.n=new P.bc(0)
C.J=new P.bc(5e6)
C.K=new P.fm("element",!0,!1,!1,!1)
C.O=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.P=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.Q=H.c(u([]),[P.e])
C.v=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.C])
C.o=H.c(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.p=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])})()
var v={mangledGlobalNames:{C:"int",z:"double",a0:"num",e:"String",K:"bool",G:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,args:[D.v]},{func:1,ret:-1,opt:[D.v]},{func:1,ret:P.G},{func:1,ret:-1},{func:1,ret:-1,args:[W.a2]},{func:1,ret:P.G,args:[F.Z]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.C,[P.i,E.aa]]},{func:1,ret:P.G,args:[D.v]},{func:1,ret:-1,args:[W.m]},{func:1,ret:-1,args:[W.av]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.e,args:[P.C]},{func:1,ret:P.K,args:[W.y]},{func:1,ret:P.G,args:[,]},{func:1,args:[,]},{func:1,ret:P.K,args:[W.aj]},{func:1,ret:P.K,args:[P.e]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:P.K,args:[W.J,P.e,P.e,W.bn]},{func:1,ret:-1,args:[W.aG]},{func:1,ret:P.z},{func:1,ret:-1,args:[P.C,[P.i,U.a3]]},{func:1,ret:P.G,args:[,,]},{func:1,ret:P.G,args:[W.m]},{func:1,args:[W.m]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.y,W.y]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.G,args:[P.a0]},{func:1,ret:P.G,args:[,],opt:[P.ad]},{func:1,ret:-1,args:[W.aR]},{func:1,ret:[P.aq,,],args:[,]},{func:1,ret:P.G,args:[F.ax,P.z,P.z]},{func:1,ret:P.G,args:[P.aO]},{func:1,ret:P.K,args:[V.ba]},{func:1,ret:W.J,args:[W.y]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.ay=0
$.bW=null
$.jU=null
$.jy=!1
$.kP=null
$.kK=null
$.kU=null
$.j3=null
$.j9=null
$.jK=null
$.bK=null
$.cC=null
$.cD=null
$.jz=!1
$.T=C.e
$.ae=[]
$.aV=null
$.jk=null
$.k_=null
$.jZ=null
$.dU=P.k2(P.e,P.be)
$.k6=null
$.k7=null
$.kd=null
$.ke=null
$.kk=null
$.ku=null
$.kx=null
$.kw=null
$.kv=null
$.kc=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mK","kY",function(){return H.kO("_$dart_dartClosure")})
u($,"mL","jQ",function(){return H.kO("_$dart_js")})
u($,"mQ","kZ",function(){return H.aQ(H.hL({
toString:function(){return"$receiver$"}}))})
u($,"mR","l_",function(){return H.aQ(H.hL({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mS","l0",function(){return H.aQ(H.hL(null))})
u($,"mT","l1",function(){return H.aQ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mW","l4",function(){return H.aQ(H.hL(void 0))})
u($,"mX","l5",function(){return H.aQ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mV","l3",function(){return H.aQ(H.ks(null))})
u($,"mU","l2",function(){return H.aQ(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mZ","l7",function(){return H.aQ(H.ks(void 0))})
u($,"mY","l6",function(){return H.aQ(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nf","jR",function(){return P.lQ()})
u($,"nh","lc",function(){return P.lJ("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"ng","lb",function(){return P.k3(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"n8","la",function(){return Z.ap(0)})
u($,"n2","l8",function(){return Z.ap(511)})
u($,"na","b5",function(){return Z.ap(1)})
u($,"n9","b4",function(){return Z.ap(2)})
u($,"n4","b3",function(){return Z.ap(4)})
u($,"nb","b6",function(){return Z.ap(8)})
u($,"nc","b7",function(){return Z.ap(16)})
u($,"n5","cG",function(){return Z.ap(32)})
u($,"n6","cH",function(){return Z.ap(64)})
u($,"n7","l9",function(){return Z.ap(96)})
u($,"nd","bT",function(){return Z.ap(128)})
u($,"n3","bS",function(){return Z.ap(256)})
u($,"mJ","kX",function(){return new V.f7(1e-9)})
u($,"mI","P",function(){return $.kX()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cb,ArrayBufferView:H.cb,Float32Array:H.ca,Float64Array:H.ca,Int16Array:H.fK,Int32Array:H.fL,Int8Array:H.fM,Uint16Array:H.fN,Uint32Array:H.fO,Uint8ClampedArray:H.dd,CanvasPixelArray:H.dd,Uint8Array:H.fP,HTMLAudioElement:W.q,HTMLBRElement:W.q,HTMLButtonElement:W.q,HTMLContentElement:W.q,HTMLDListElement:W.q,HTMLDataElement:W.q,HTMLDataListElement:W.q,HTMLDetailsElement:W.q,HTMLDialogElement:W.q,HTMLEmbedElement:W.q,HTMLFieldSetElement:W.q,HTMLHRElement:W.q,HTMLHeadElement:W.q,HTMLHeadingElement:W.q,HTMLHtmlElement:W.q,HTMLIFrameElement:W.q,HTMLInputElement:W.q,HTMLLIElement:W.q,HTMLLabelElement:W.q,HTMLLegendElement:W.q,HTMLLinkElement:W.q,HTMLMapElement:W.q,HTMLMediaElement:W.q,HTMLMenuElement:W.q,HTMLMetaElement:W.q,HTMLMeterElement:W.q,HTMLModElement:W.q,HTMLOListElement:W.q,HTMLObjectElement:W.q,HTMLOptGroupElement:W.q,HTMLOptionElement:W.q,HTMLOutputElement:W.q,HTMLParagraphElement:W.q,HTMLParamElement:W.q,HTMLPictureElement:W.q,HTMLPreElement:W.q,HTMLProgressElement:W.q,HTMLQuoteElement:W.q,HTMLScriptElement:W.q,HTMLShadowElement:W.q,HTMLSlotElement:W.q,HTMLSourceElement:W.q,HTMLSpanElement:W.q,HTMLStyleElement:W.q,HTMLTableCaptionElement:W.q,HTMLTableColElement:W.q,HTMLTextAreaElement:W.q,HTMLTimeElement:W.q,HTMLTitleElement:W.q,HTMLTrackElement:W.q,HTMLUListElement:W.q,HTMLUnknownElement:W.q,HTMLVideoElement:W.q,HTMLDirectoryElement:W.q,HTMLFontElement:W.q,HTMLFrameElement:W.q,HTMLFrameSetElement:W.q,HTMLMarqueeElement:W.q,HTMLElement:W.q,AccessibleNodeList:W.eF,HTMLAnchorElement:W.cI,HTMLAreaElement:W.eG,HTMLBaseElement:W.bU,Blob:W.cK,HTMLBodyElement:W.b8,HTMLCanvasElement:W.bv,CanvasRenderingContext2D:W.bX,CDATASection:W.b9,CharacterData:W.b9,Comment:W.b9,ProcessingInstruction:W.b9,Text:W.b9,CSSNumericValue:W.c0,CSSUnitValue:W.c0,CSSPerspective:W.eT,CSSCharsetRule:W.L,CSSConditionRule:W.L,CSSFontFaceRule:W.L,CSSGroupingRule:W.L,CSSImportRule:W.L,CSSKeyframeRule:W.L,MozCSSKeyframeRule:W.L,WebKitCSSKeyframeRule:W.L,CSSKeyframesRule:W.L,MozCSSKeyframesRule:W.L,WebKitCSSKeyframesRule:W.L,CSSMediaRule:W.L,CSSNamespaceRule:W.L,CSSPageRule:W.L,CSSRule:W.L,CSSStyleRule:W.L,CSSSupportsRule:W.L,CSSViewportRule:W.L,CSSStyleDeclaration:W.c1,MSStyleCSSProperties:W.c1,CSS2Properties:W.c1,CSSImageValue:W.az,CSSKeywordValue:W.az,CSSPositionValue:W.az,CSSResourceValue:W.az,CSSURLImageValue:W.az,CSSStyleValue:W.az,CSSMatrixComponent:W.aA,CSSRotation:W.aA,CSSScale:W.aA,CSSSkew:W.aA,CSSTranslation:W.aA,CSSTransformComponent:W.aA,CSSTransformValue:W.eV,CSSUnparsedValue:W.eW,DataTransferItemList:W.eZ,HTMLDivElement:W.an,DOMException:W.f_,ClientRectList:W.cS,DOMRectList:W.cS,DOMRectReadOnly:W.cT,DOMStringList:W.f0,DOMTokenList:W.f1,Element:W.J,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aB,FileList:W.fa,FileWriter:W.fb,HTMLFormElement:W.ff,Gamepad:W.aC,History:W.fk,HTMLCollection:W.by,HTMLFormControlsCollection:W.by,HTMLOptionsCollection:W.by,ImageData:W.bf,HTMLImageElement:W.c6,KeyboardEvent:W.aG,Location:W.d6,MediaList:W.fD,MIDIInputMap:W.fE,MIDIOutputMap:W.fG,MimeType:W.aH,MimeTypeArray:W.fI,PointerEvent:W.a2,MouseEvent:W.a2,DragEvent:W.a2,Document:W.y,DocumentFragment:W.y,HTMLDocument:W.y,ShadowRoot:W.y,XMLDocument:W.y,DocumentType:W.y,Node:W.y,NodeList:W.cc,RadioNodeList:W.cc,Plugin:W.aI,PluginArray:W.h_,RTCStatsReport:W.h8,HTMLSelectElement:W.hb,SourceBuffer:W.aK,SourceBufferList:W.hk,SpeechGrammar:W.aL,SpeechGrammarList:W.hl,SpeechRecognitionResult:W.aM,Storage:W.ho,CSSStyleSheet:W.at,StyleSheet:W.at,HTMLTableCellElement:W.bG,HTMLTableDataCellElement:W.bG,HTMLTableHeaderCellElement:W.bG,HTMLTableElement:W.dp,HTMLTableRowElement:W.hv,HTMLTableSectionElement:W.hw,HTMLTemplateElement:W.cj,TextTrack:W.aN,TextTrackCue:W.au,VTTCue:W.au,TextTrackCueList:W.hy,TextTrackList:W.hz,TimeRanges:W.hD,Touch:W.aP,TouchEvent:W.av,TouchList:W.hH,TrackDefaultList:W.hI,CompositionEvent:W.bm,FocusEvent:W.bm,TextEvent:W.bm,UIEvent:W.bm,URL:W.i_,VideoTrackList:W.ia,WheelEvent:W.aR,Window:W.cq,DOMWindow:W.cq,Attr:W.cr,CSSRuleList:W.il,ClientRect:W.dM,DOMRect:W.dM,GamepadList:W.iA,NamedNodeMap:W.e4,MozNamedAttrMap:W.e4,SpeechRecognitionResultList:W.iN,StyleSheetList:W.iO,SVGLength:P.aW,SVGLengthList:P.ft,SVGNumber:P.b_,SVGNumberList:P.fV,SVGPointList:P.h1,SVGScriptElement:P.ce,SVGStringList:P.hu,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,SVGElement:P.n,SVGTransform:P.b0,SVGTransformList:P.hJ,AudioBuffer:P.eJ,AudioParamMap:P.eK,AudioTrackList:P.eM,AudioContext:P.bu,webkitAudioContext:P.bu,BaseAudioContext:P.bu,OfflineAudioContext:P.fW,WebGLBuffer:P.cL,WebGLProgram:P.dj,WebGL2RenderingContext:P.bE,WebGLShader:P.dl,WebGLTexture:P.dr,WebGLUniformLocation:P.dx,SQLResultSetRowList:P.hm})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.db.$nativeSuperclassTag="ArrayBufferView"
H.ct.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
H.ca.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
W.cx.$nativeSuperclassTag="EventTarget"
W.cy.$nativeSuperclassTag="EventTarget"
W.cz.$nativeSuperclassTag="EventTarget"
W.cA.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(D.kR,[])
else D.kR([])})})()
//# sourceMappingURL=test.dart.js.map
