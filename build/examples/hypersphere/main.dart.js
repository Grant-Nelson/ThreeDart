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
a[c]=function(){a[c]=function(){H.mC(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jR"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jR"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jR(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jA:function jA(){},
k6:function(){return new P.hC("No element")},
a8:function a8(a){this.a=a},
fh:function fh(){},
dn:function dn(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fS:function fS(a,b,c){this.a=a
this.b=b
this.$ti=c},
fT:function fT(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ip:function ip(a,b,c){this.a=a
this.b=b
this.$ti=c},
iq:function iq(a,b,c){this.a=a
this.b=b
this.$ti=c},
bN:function bN(){},
dT:function dT(){},
dS:function dS(){},
c1:function(a){var u,t=H.W(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
mi:function(a){return v.types[H.ae(a)]},
mn:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.a4(a).$iG},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ax(a)
if(typeof u!=="string")throw H.i(H.bD(a))
return u},
cq:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bT:function(a){return H.lD(a)+H.jO(H.bF(a),0,null)},
lD:function(a){var u,t,s,r,q,p,o,n=J.a4(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.F||!!n.$idR){r=C.q(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.c1(t.length>1&&C.j.be(t,0)===36?C.j.cS(t,1):t)},
kg:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lM:function(a){var u,t,s,r=H.c([],[P.C])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.D)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.bD(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.h.bi(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.i(H.bD(s))}return H.kg(r)},
kh:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.bD(s))
if(s<0)throw H.i(H.bD(s))
if(s>65535)return H.lM(a)}return H.kg(a)},
lL:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.bi(u,10))>>>0,56320|u&1023)}throw H.i(P.b4(a,0,1114111,null,null))},
bS:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lK:function(a){var u=H.bS(a).getFullYear()+0
return u},
lI:function(a){var u=H.bS(a).getMonth()+1
return u},
lE:function(a){var u=H.bS(a).getDate()+0
return u},
lF:function(a){var u=H.bS(a).getHours()+0
return u},
lH:function(a){var u=H.bS(a).getMinutes()+0
return u},
lJ:function(a){var u=H.bS(a).getSeconds()+0
return u},
lG:function(a){var u=H.bS(a).getMilliseconds()+0
return u},
A:function(a){throw H.i(H.bD(a))},
h:function(a,b){if(a==null)J.c4(a)
throw H.i(H.bE(a,b))},
bE:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.bd(!0,b,s,null)
u=H.ae(J.c4(a))
if(!(b<0)){if(typeof u!=="number")return H.A(u)
t=b>=u}else t=!0
if(t)return P.Y(b,a,s,null,u)
return P.dC(b,s)},
md:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bU(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bU(a,c,!0,b,"end",u)
return new P.bd(!0,b,"end",null)},
bD:function(a){return new P.bd(!0,a,null,null)},
i:function(a){var u
if(a==null)a=new P.dy()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.l_})
u.name=""}else u.toString=H.l_
return u},
l_:function(){return J.ax(this.dartException)},
r:function(a){throw H.i(a)},
D:function(a){throw H.i(P.c9(a))},
ba:function(a){var u,t,s,r,q,p
a=H.kY(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.o])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hV(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hW:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kq:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kb:function(a,b){return new H.hb(a,b==null?null:b.method)},
jB:function(a,b){var u=b==null,t=u?null:b.method
return new H.fH(a,t,u?null:b.receiver)},
bG:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jq(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.h.bi(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jB(H.l(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kb(H.l(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.l2()
q=$.l3()
p=$.l4()
o=$.l5()
n=$.l8()
m=$.l9()
l=$.l7()
$.l6()
k=$.lb()
j=$.la()
i=r.ad(u)
if(i!=null)return f.$1(H.jB(H.W(u),i))
else{i=q.ad(u)
if(i!=null){i.method="call"
return f.$1(H.jB(H.W(u),i))}else{i=p.ad(u)
if(i==null){i=o.ad(u)
if(i==null){i=n.ad(u)
if(i==null){i=m.ad(u)
if(i==null){i=l.ad(u)
if(i==null){i=o.ad(u)
if(i==null){i=k.ad(u)
if(i==null){i=j.ad(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kb(H.W(u),i))}}return f.$1(new H.i6(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dG()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.bd(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dG()
return a},
c_:function(a){var u
if(a==null)return new H.ew(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ew(a)},
mg:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.a1(0,a[u],a[t])}return b},
mm:function(a,b,c,d,e,f){H.j(a,"$ijw")
switch(H.ae(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.p("Unsupported number of arguments for wrapped closure"))},
cT:function(a,b){var u
H.ae(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mm)
a.$identity=u
return u},
lo:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hD().constructor.prototype):Object.create(new H.c5(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aR
if(typeof t!=="number")return t.B()
$.aR=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.k4(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.mi,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.k2:H.js
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.i("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.k4(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
ll:function(a,b,c,d){var u=H.js
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
k4:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.ln(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.ll(t,!r,u,b)
if(t===0){r=$.aR
if(typeof r!=="number")return r.B()
$.aR=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c6
return new Function(r+H.l(q==null?$.c6=H.f1("self"):q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aR
if(typeof r!=="number")return r.B()
$.aR=r+1
o+=r
r="return function("+o+"){return this."
q=$.c6
return new Function(r+H.l(q==null?$.c6=H.f1("self"):q)+"."+H.l(u)+"("+o+");}")()},
lm:function(a,b,c,d){var u=H.js,t=H.k2
switch(b?-1:a){case 0:throw H.i(H.lP("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
ln:function(a,b){var u,t,s,r,q,p,o,n=$.c6
if(n==null)n=$.c6=H.f1("self")
u=$.k1
if(u==null)u=$.k1=H.f1("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lm(s,!q,t,b)
if(s===1){n="return function(){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+");"
u=$.aR
if(typeof u!=="number")return u.B()
$.aR=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+", "+o+");"
u=$.aR
if(typeof u!=="number")return u.B()
$.aR=u+1
return new Function(n+u+"}")()},
jR:function(a,b,c,d,e,f,g){return H.lo(a,b,H.ae(c),d,!!e,!!f,g)},
js:function(a){return a.a},
k2:function(a){return a.c},
f1:function(a){var u,t,s,r=new H.c5("self","target","receiver","name"),q=J.jy(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
z:function(a){if(a==null)H.m8("boolean expression must not be null")
return a},
W:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.aM(a,"String"))},
nb:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aM(a,"double"))},
ms:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aM(a,"num"))},
kL:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.aM(a,"bool"))},
ae:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.aM(a,"int"))},
kW:function(a,b){throw H.i(H.aM(a,H.c1(H.W(b).substring(2))))},
mu:function(a,b){throw H.i(H.lk(a,H.c1(H.W(b).substring(2))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.a4(a)[b])return a
H.kW(a,b)},
f:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.a4(a)[b]
else u=!0
if(u)return a
H.mu(a,b)},
jX:function(a){if(a==null)return a
if(!!J.a4(a).$ib)return a
throw H.i(H.aM(a,"List<dynamic>"))},
mo:function(a,b){var u
if(a==null)return a
u=J.a4(a)
if(!!u.$ib)return a
if(u[b])return a
H.kW(a,b)},
kO:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ae(u)]
else return a.$S()}return},
eQ:function(a,b){var u
if(typeof a=="function")return!0
u=H.kO(J.a4(a))
if(u==null)return!1
return H.kC(u,null,b,null)},
m:function(a,b){var u,t
if(a==null)return a
if($.jL)return a
$.jL=!0
try{if(H.eQ(a,b))return a
u=H.jf(b)
t=H.aM(a,u)
throw H.i(t)}finally{$.jL=!1}},
jS:function(a,b){if(a!=null&&!H.jQ(a,b))H.r(H.aM(a,H.jf(b)))
return a},
aM:function(a,b){return new H.hX("TypeError: "+P.dc(a)+": type '"+H.kG(a)+"' is not a subtype of type '"+b+"'")},
lk:function(a,b){return new H.f2("CastError: "+P.dc(a)+": type '"+H.kG(a)+"' is not a subtype of type '"+b+"'")},
kG:function(a){var u,t=J.a4(a)
if(!!t.$ic7){u=H.kO(t)
if(u!=null)return H.jf(u)
return"Closure"}return H.bT(a)},
m8:function(a){throw H.i(new H.ir(a))},
mC:function(a){throw H.i(new P.fa(H.W(a)))},
lP:function(a){return new H.hp(a)},
kP:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bF:function(a){if(a==null)return
return a.$ti},
nc:function(a,b,c){return H.c0(a["$a"+H.l(c)],H.bF(b))},
cU:function(a,b,c,d){var u
H.W(c)
H.ae(d)
u=H.c0(a["$a"+H.l(c)],H.bF(b))
return u==null?null:u[d]},
aF:function(a,b,c){var u
H.W(b)
H.ae(c)
u=H.c0(a["$a"+H.l(b)],H.bF(a))
return u==null?null:u[c]},
x:function(a,b){var u
H.ae(b)
u=H.bF(a)
return u==null?null:u[b]},
jf:function(a){return H.bC(a,null)},
bC:function(a,b){var u,t
H.k(b,"$ib",[P.o],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c1(a[0].name)+H.jO(a,1,b)
if(typeof a=="function")return H.c1(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ae(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.l(b[t])}if('func' in a)return H.m1(a,b)
if('futureOr' in a)return"FutureOr<"+H.bC("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
m1:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.o]
H.k(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.h(a0,n)
p=C.j.B(p,a0[n])
m=u[q]
if(m!=null&&m!==P.U)p+=" extends "+H.bC(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bC(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bC(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bC(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.mf(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.W(b[h])
j=j+i+H.bC(e[d],a0)+(" "+H.l(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
jO:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.o],"$ab")
if(a==null)return""
u=new P.bx("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bC(p,c)}return"<"+u.i(0)+">"},
c0:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
jP:function(a,b,c,d){var u,t
H.W(b)
H.jX(c)
H.W(d)
if(a==null)return!1
u=H.bF(a)
t=J.a4(a)
if(t[b]==null)return!1
return H.kJ(H.c0(t[d],u),null,c,null)},
k:function(a,b,c,d){H.W(b)
H.jX(c)
H.W(d)
if(a==null)return a
if(H.jP(a,b,c,d))return a
throw H.i(H.aM(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c1(b.substring(2))+H.jO(c,0,null),v.mangledGlobalNames)))},
kJ:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aE(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aE(a[t],b,c[t],d))return!1
return!0},
n9:function(a,b,c){return a.apply(b,H.c0(J.a4(b)["$a"+H.l(c)],H.bF(b)))},
kR:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="U"||a.name==="L"||a===-1||a===-2||H.kR(u)}return!1},
jQ:function(a,b){var u,t
if(a==null)return b==null||b.name==="U"||b.name==="L"||b===-1||b===-2||H.kR(b)
if(b==null||b===-1||b.name==="U"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jQ(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eQ(a,b)}u=J.a4(a).constructor
t=H.bF(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aE(u,null,b,null)},
E:function(a,b){if(a!=null&&!H.jQ(a,b))throw H.i(H.aM(a,H.jf(b)))
return a},
aE:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="U"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="U"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aE(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="L")return!0
if('func' in c)return H.kC(a,b,c,d)
if('func' in a)return c.name==="jw"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aE("type" in a?a.type:l,b,s,d)
else if(H.aE(a,b,s,d))return!0
else{if(!('$i'+"cf" in t.prototype))return!1
r=t.prototype["$a"+"cf"]
q=H.c0(r,u?a.slice(1):l)
return H.aE(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.kJ(H.c0(m,u),b,p,d)},
kC:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aE(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aE(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aE(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aE(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.mr(h,b,g,d)},
mr:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aE(c[s],d,a[s],b))return!1}return!0},
na:function(a,b,c){Object.defineProperty(a,H.W(b),{value:c,enumerable:false,writable:true,configurable:true})},
mp:function(a){var u,t,s,r,q=H.W($.kQ.$1(a)),p=$.j8[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jd[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.W($.kI.$2(a,q))
if(q!=null){p=$.j8[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jd[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.je(u)
$.j8[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jd[q]=u
return u}if(s==="-"){r=H.je(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kU(a,u)
if(s==="*")throw H.i(P.kr(q))
if(v.leafTags[q]===true){r=H.je(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kU(a,u)},
kU:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jY(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
je:function(a){return J.jY(a,!1,null,!!a.$iG)},
mq:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.je(u)
else return J.jY(u,c,null,null)},
mk:function(){if(!0===$.jV)return
$.jV=!0
H.ml()},
ml:function(){var u,t,s,r,q,p,o,n
$.j8=Object.create(null)
$.jd=Object.create(null)
H.mj()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kX.$1(q)
if(p!=null){o=H.mq(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mj:function(){var u,t,s,r,q,p,o=C.x()
o=H.bY(C.y,H.bY(C.z,H.bY(C.r,H.bY(C.r,H.bY(C.A,H.bY(C.B,H.bY(C.C(C.q),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kQ=new H.ja(r)
$.kI=new H.jb(q)
$.kX=new H.jc(p)},
bY:function(a,b){return a(b)||b},
lw:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.i(new P.ft("Illegal RegExp pattern ("+String(r)+")",a))},
mz:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
me:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kY:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kZ:function(a,b,c){var u=H.mA(a,b,c)
return u},
mA:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kY(b),'g'),H.me(c))},
hV:function hV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hb:function hb(a,b){this.a=a
this.b=b},
fH:function fH(a,b,c){this.a=a
this.b=b
this.c=c},
i6:function i6(a){this.a=a},
jq:function jq(a){this.a=a},
ew:function ew(a){this.a=a
this.b=null},
c7:function c7(){},
hL:function hL(){},
hD:function hD(){},
c5:function c5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hX:function hX(a){this.a=a},
f2:function f2(a){this.a=a},
hp:function hp(a){this.a=a},
ir:function ir(a){this.a=a},
aG:function aG(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fL:function fL(a,b){this.a=a
this.b=b
this.c=null},
dm:function dm(a,b){this.a=a
this.$ti=b},
fM:function fM(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ja:function ja(a){this.a=a},
jb:function jb(a){this.a=a},
jc:function jc(a){this.a=a},
fG:function fG(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cQ:function(a){return a},
bB:function(a,b,c){if(a>>>0!==a||a>=c)throw H.i(H.bE(b,a))},
m0:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.i(H.md(a,b,c))
return b},
cn:function cn(){},
dv:function dv(){},
cm:function cm(){},
dw:function dw(){},
h5:function h5(){},
h6:function h6(){},
h7:function h7(){},
h8:function h8(){},
h9:function h9(){},
dx:function dx(){},
ha:function ha(){},
cH:function cH(){},
cI:function cI(){},
cJ:function cJ(){},
cK:function cK(){},
mf:function(a){return J.k7(a?Object.keys(a):[],null)},
mt:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jY:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
j9:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jV==null){H.mk()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.i(P.kr("Return interceptor for "+H.l(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jZ()]
if(r!=null)return r
r=H.mp(a)
if(r!=null)return r
if(typeof a=="function")return C.G
u=Object.getPrototypeOf(a)
if(u==null)return C.u
if(u===Object.prototype)return C.u
if(typeof s=="function"){Object.defineProperty(s,$.jZ(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
lv:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.jr(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.b4(a,0,4294967295,"length",null))
return J.k7(new Array(a),b)},
k7:function(a,b){return J.jy(H.c(a,[b]))},
jy:function(a){H.jX(a)
a.fixed$length=Array
return a},
a4:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dg.prototype
return J.fF.prototype}if(typeof a=="string")return J.ch.prototype
if(a==null)return J.dh.prototype
if(typeof a=="boolean")return J.fE.prototype
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.U)return a
return J.j9(a)},
jT:function(a){if(typeof a=="string")return J.ch.prototype
if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.U)return a
return J.j9(a)},
jU:function(a){if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.U)return a
return J.j9(a)},
mh:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.U)return a
return J.j9(a)},
F:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a4(a).u(a,b)},
lg:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mn(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jT(a).j(a,b)},
lh:function(a,b,c,d){return J.mh(a).iw(a,b,c,d)},
k0:function(a,b){return J.jU(a).G(a,b)},
li:function(a,b){return J.jU(a).H(a,b)},
bI:function(a){return J.a4(a).gI(a)},
c3:function(a){return J.jU(a).gV(a)},
c4:function(a){return J.jT(a).gk(a)},
ax:function(a){return J.a4(a).i(a)},
a:function a(){},
fE:function fE(){},
dh:function dh(){},
dj:function dj(){},
hf:function hf(){},
dR:function dR(){},
bv:function bv(){},
aZ:function aZ(a){this.$ti=a},
jz:function jz(a){this.$ti=a},
al:function al(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
di:function di(){},
dg:function dg(){},
fF:function fF(){},
ch:function ch(){}},P={
lU:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.m9()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cT(new P.it(s),1)).observe(u,{childList:true})
return new P.is(s,u,t)}else if(self.setImmediate!=null)return P.ma()
return P.mb()},
lV:function(a){self.scheduleImmediate(H.cT(new P.iu(H.m(a,{func:1,ret:-1})),0))},
lW:function(a){self.setImmediate(H.cT(new P.iv(H.m(a,{func:1,ret:-1})),0))},
lX:function(a){P.jG(C.o,H.m(a,{func:1,ret:-1}))},
jG:function(a,b){var u
H.m(b,{func:1,ret:-1})
u=C.h.a9(a.a,1000)
return P.m_(u<0?0:u,b)},
m_:function(a,b){var u=new P.iY()
u.f3(a,b)
return u},
lY:function(a,b){var u,t,s
b.a=1
try{a.eB(new P.iD(b),new P.iE(b),null)}catch(s){u=H.bG(s)
t=H.c_(s)
P.mv(new P.iF(b,u,t))}},
ky:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.j(a.c,"$iaD")
if(u>=4){t=b.c2()
b.a=a.a
b.c=a.c
P.cF(b,t)}else{t=H.j(b.c,"$ibc")
b.a=2
b.c=a
a.du(t)}},
cF:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.j(g.c,"$iam")
g=g.b
r=s.a
q=s.b
g.toString
P.j3(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cF(h.a,b)}g=h.a
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
if(m){H.j(o,"$iam")
g=g.b
r=o.a
q=o.b
g.toString
P.j3(i,i,g,r,q)
return}l=$.a3
if(l!=n)$.a3=n
else l=i
g=b.c
if(g===8)new P.iJ(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.iI(u,b,o).$0()}else if((g&2)!==0)new P.iH(h,u,b).$0()
if(l!=null)$.a3=l
g=u.b
if(!!J.a4(g).$icf){if(g.a>=4){k=H.j(q.c,"$ibc")
q.c=null
b=q.bh(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.ky(g,q)
return}}j=b.b
k=H.j(j.c,"$ibc")
j.c=null
b=j.bh(k)
g=u.a
r=u.b
if(!g){H.E(r,H.x(j,0))
j.a=4
j.c=r}else{H.j(r,"$iam")
j.a=8
j.c=r}h.a=j
g=j}},
m4:function(a,b){if(H.eQ(a,{func:1,args:[P.U,P.au]}))return H.m(a,{func:1,ret:null,args:[P.U,P.au]})
if(H.eQ(a,{func:1,args:[P.U]}))return H.m(a,{func:1,ret:null,args:[P.U]})
throw H.i(P.jr(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
m3:function(){var u,t
for(;u=$.bX,u!=null;){$.cS=null
t=u.b
$.bX=t
if(t==null)$.cR=null
u.a.$0()}},
m7:function(){$.jM=!0
try{P.m3()}finally{$.cS=null
$.jM=!1
if($.bX!=null)$.k_().$1(P.kK())}},
kF:function(a){var u=new P.e0(H.m(a,{func:1,ret:-1}))
if($.bX==null){$.bX=$.cR=u
if(!$.jM)$.k_().$1(P.kK())}else $.cR=$.cR.b=u},
m6:function(a){var u,t,s
H.m(a,{func:1,ret:-1})
u=$.bX
if(u==null){P.kF(a)
$.cS=$.cR
return}t=new P.e0(a)
s=$.cS
if(s==null){t.b=u
$.bX=$.cS=t}else{t.b=s.b
$.cS=s.b=t
if(t.b==null)$.cR=t}},
mv:function(a){var u,t=null,s={func:1,ret:-1}
H.m(a,s)
u=$.a3
if(C.k===u){P.j5(t,t,C.k,a)
return}u.toString
P.j5(t,t,u,H.m(u.cg(a),s))},
kp:function(a,b){var u,t={func:1,ret:-1}
H.m(b,t)
u=$.a3
if(u===C.k){u.toString
return P.jG(a,b)}return P.jG(a,H.m(u.cg(b),t))},
j3:function(a,b,c,d,e){var u={}
u.a=d
P.m6(new P.j4(u,e))},
kD:function(a,b,c,d,e){var u,t
H.m(d,{func:1,ret:e})
t=$.a3
if(t===c)return d.$0()
$.a3=c
u=t
try{t=d.$0()
return t}finally{$.a3=u}},
kE:function(a,b,c,d,e,f,g){var u,t
H.m(d,{func:1,ret:f,args:[g]})
H.E(e,g)
t=$.a3
if(t===c)return d.$1(e)
$.a3=c
u=t
try{t=d.$1(e)
return t}finally{$.a3=u}},
m5:function(a,b,c,d,e,f,g,h,i){var u,t
H.m(d,{func:1,ret:g,args:[h,i]})
H.E(e,h)
H.E(f,i)
t=$.a3
if(t===c)return d.$2(e,f)
$.a3=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a3=u}},
j5:function(a,b,c,d){var u
H.m(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cg(d):c.iC(d,-1)
P.kF(d)},
it:function it(a){this.a=a},
is:function is(a,b,c){this.a=a
this.b=b
this.c=c},
iu:function iu(a){this.a=a},
iv:function iv(a){this.a=a},
iY:function iY(){},
iZ:function iZ(a,b){this.a=a
this.b=b},
bc:function bc(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aD:function aD(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iC:function iC(a,b){this.a=a
this.b=b},
iG:function iG(a,b){this.a=a
this.b=b},
iD:function iD(a){this.a=a},
iE:function iE(a){this.a=a},
iF:function iF(a,b,c){this.a=a
this.b=b
this.c=c},
iJ:function iJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iK:function iK(a){this.a=a},
iI:function iI(a,b,c){this.a=a
this.b=b
this.c=c},
iH:function iH(a,b,c){this.a=a
this.b=b
this.c=c},
e0:function e0(a){this.a=a
this.b=null},
hG:function hG(){},
hI:function hI(a,b){this.a=a
this.b=b},
hJ:function hJ(a,b){this.a=a
this.b=b},
ct:function ct(){},
hH:function hH(){},
am:function am(a,b){this.a=a
this.b=b},
j0:function j0(){},
j4:function j4(a,b){this.a=a
this.b=b},
iR:function iR(){},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c},
iS:function iS(a,b){this.a=a
this.b=b},
iU:function iU(a,b,c){this.a=a
this.b=b
this.c=c},
lx:function(a,b){return new H.aG([a,b])},
ly:function(a){return H.mg(a,new H.aG([null,null]))},
lz:function(a){return new P.iO([a])},
jK:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kA:function(a,b,c){var u=new P.iP(a,b,[c])
u.c=a.e
return u},
lu:function(a,b,c){var u,t
if(P.jN(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.o])
C.a.h($.av,a)
try{P.m2(a,u)}finally{if(0>=$.av.length)return H.h($.av,-1)
$.av.pop()}t=P.kn(b,H.mo(u,"$ie"),", ")+c
return t.charCodeAt(0)==0?t:t},
jx:function(a,b,c){var u,t
if(P.jN(a))return b+"..."+c
u=new P.bx(b)
C.a.h($.av,a)
try{t=u
t.a=P.kn(t.a,a,", ")}finally{if(0>=$.av.length)return H.h($.av,-1)
$.av.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jN:function(a){var u,t
for(u=$.av.length,t=0;t<u;++t)if(a===$.av[t])return!0
return!1},
m2:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.o],"$ab")
u=a.gV(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.A())return
r=H.l(u.gL(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.A()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gL(u);++s
if(!u.A()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gL(u);++s
for(;u.A();o=n,n=m){m=u.gL(u);++s
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
k9:function(a){var u,t={}
if(P.jN(a))return"{...}"
u=new P.bx("")
try{C.a.h($.av,a)
u.a+="{"
t.a=!0
J.li(a,new P.fR(t,u))
u.a+="}"}finally{if(0>=$.av.length)return H.h($.av,-1)
$.av.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iO:function iO(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cG:function cG(a){this.a=a
this.c=this.b=null},
iP:function iP(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fN:function fN(){},
v:function v(){},
fQ:function fQ(){},
fR:function fR(a,b){this.a=a
this.b=b},
ag:function ag(){},
iV:function iV(){},
ef:function ef(){},
c8:function c8(){},
d5:function d5(){},
fi:function fi(){},
i9:function i9(){},
ia:function ia(){},
j_:function j_(a){this.b=0
this.c=a},
lt:function(a){if(a instanceof H.c7)return a.i(0)
return"Instance of '"+H.bT(a)+"'"},
lA:function(a,b,c){var u,t
H.E(b,c)
u=J.lv(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.a1(u,t,b)
return H.k(u,"$ib",[c],"$ab")},
k8:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.c3(a);u.A();)C.a.h(s,H.E(u.gL(u),c))
if(b)return s
return H.k(J.jy(s),"$ib",t,"$ab")},
jE:function(a){var u,t,s=P.C
H.k(a,"$ie",[s],"$ae")
if(a.constructor===Array){H.k(a,"$iaZ",[s],"$aaZ")
u=a.length
t=P.kj(0,null,u)
return H.kh(t<u?C.a.eL(a,0,t):a)}return P.lR(a,0,null)},
lR:function(a,b,c){var u,t,s
H.k(a,"$ie",[P.C],"$ae")
u=J.c3(a)
for(t=0;t<b;++t)if(!u.A())throw H.i(P.b4(b,0,t,null,null))
s=[]
for(;u.A();)s.push(u.gL(u))
return H.kh(s)},
lN:function(a){return new H.fG(a,H.lw(a,!1,!0,!1))},
kn:function(a,b,c){var u=J.c3(b)
if(!u.A())return a
if(c.length===0){do a+=H.l(u.gL(u))
while(u.A())}else{a+=H.l(u.gL(u))
for(;u.A();)a=a+c+H.l(u.gL(u))}return a},
kB:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.k(a,"$ib",[P.C],"$ab")
if(c===C.m){u=$.lf().b
u=u.test(b)}else u=!1
if(u)return b
t=C.E.iH(H.E(b,H.aF(c,"c8",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.lL(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lp:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lq:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d6:function(a){if(a>=10)return""+a
return"0"+a},
lr:function(a,b){return new P.bM(1e6*b+1000*a)},
dc:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ax(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lt(a)},
jr:function(a,b,c){return new P.bd(!0,a,b,c)},
dC:function(a,b){return new P.bU(null,null,!0,a,b,"Value not in range")},
b4:function(a,b,c,d,e){return new P.bU(b,c,!0,a,d,"Invalid value")},
kj:function(a,b,c){if(0>a||a>c)throw H.i(P.b4(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.i(P.b4(b,a,c,"end",null))
return b}return c},
ki:function(a,b){if(typeof a!=="number")return a.aE()
if(a<0)throw H.i(P.b4(a,0,null,b,null))},
Y:function(a,b,c,d,e){var u=H.ae(e==null?J.c4(b):e)
return new P.fx(u,!0,a,c,"Index out of range")},
aB:function(a){return new P.i7(a)},
kr:function(a){return new P.i5(a)},
c9:function(a){return new P.f5(a)},
p:function(a){return new P.e8(a)},
kV:function(a){H.mt(a)},
a7:function a7(){},
aU:function aU(a,b){this.a=a
this.b=b},
w:function w(){},
bM:function bM(a){this.a=a},
ff:function ff(){},
fg:function fg(){},
br:function br(){},
eV:function eV(){},
dy:function dy(){},
bd:function bd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bU:function bU(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fx:function fx(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
i7:function i7(a){this.a=a},
i5:function i5(a){this.a=a},
hC:function hC(a){this.a=a},
f5:function f5(a){this.a=a},
he:function he(){},
dG:function dG(){},
fa:function fa(a){this.a=a},
e8:function e8(a){this.a=a},
ft:function ft(a,b){this.a=a
this.b=b},
C:function C(){},
e:function e(){},
aY:function aY(){},
b:function b(){},
P:function P(){},
L:function L(){},
ab:function ab(){},
U:function U(){},
au:function au(){},
o:function o(){},
bx:function bx(a){this.a=a},
bl:function(a){var u,t,s,r,q
if(a==null)return
u=P.lx(P.o,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r){q=H.W(t[r])
u.a1(0,q,a[q])}return u},
mc:function(a){var u={}
a.H(0,new P.j6(u))
return u},
j6:function j6(a){this.a=a},
fp:function fp(a,b){this.a=a
this.b=b},
fq:function fq(){},
fr:function fr(){},
iN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lZ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iQ:function iQ(){},
at:function at(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
be:function be(){},
fJ:function fJ(){},
bi:function bi(){},
hc:function hc(){},
hi:function hi(){},
hK:function hK(){},
q:function q(){},
bj:function bj(){},
hU:function hU(){},
ed:function ed(){},
ee:function ee(){},
en:function en(){},
eo:function eo(){},
ey:function ey(){},
ez:function ez(){},
eE:function eE(){},
eF:function eF(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(a){this.a=a},
f_:function f_(){},
bJ:function bJ(){},
hd:function hd(){},
e1:function e1(){},
cY:function cY(){},
dB:function dB(){},
bV:function bV(){},
dE:function dE(){},
dQ:function dQ(){},
hB:function hB(){},
eu:function eu(){},
ev:function ev(){}},W={
lj:function(){var u=document.createElement("a")
return u},
k3:function(){var u=document.createElement("canvas")
return u},
ls:function(a){H.j(a,"$id")
return"wheel"},
iM:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kz:function(a,b,c,d){var u=W.iM(W.iM(W.iM(W.iM(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ad:function(a,b,c,d,e){var u=W.kH(new W.iB(c),W.n)
if(u!=null&&!0)J.lh(a,b,u,!1)
return new W.iA(a,b,u,!1,[e])},
kH:function(a,b){var u
H.m(a,{func:1,ret:-1,args:[b]})
u=$.a3
if(u===C.k)return a
return u.iD(a,b)},
t:function t(){},
eR:function eR(){},
eT:function eT(){},
eU:function eU(){},
cX:function cX(){},
bK:function bK(){},
bq:function bq(){},
ca:function ca(){},
f6:function f6(){},
V:function V(){},
cb:function cb(){},
f7:function f7(){},
aS:function aS(){},
aT:function aT(){},
f8:function f8(){},
f9:function f9(){},
fb:function fb(){},
d8:function d8(){},
fc:function fc(){},
d9:function d9(){},
da:function da(){},
fd:function fd(){},
fe:function fe(){},
ix:function ix(a,b){this.a=a
this.b=b},
a9:function a9(){},
n:function n(){},
d:function d(){},
aV:function aV(){},
fn:function fn(){},
fo:function fo(){},
fs:function fs(){},
aW:function aW(){},
fw:function fw(){},
bO:function bO(){},
b_:function b_(){},
fO:function fO(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(a){this.a=a},
h1:function h1(){},
h2:function h2(a){this.a=a},
b2:function b2(){},
h3:function h3(){},
ac:function ac(){},
iw:function iw(a){this.a=a},
H:function H(){},
co:function co(){},
b3:function b3(){},
hg:function hg(){},
hn:function hn(){},
ho:function ho(a){this.a=a},
hq:function hq(){},
b5:function b5(){},
hz:function hz(){},
b6:function b6(){},
hA:function hA(){},
b7:function b7(){},
hE:function hE(){},
hF:function hF(a){this.a=a},
aJ:function aJ(){},
b8:function b8(){},
aK:function aK(){},
hM:function hM(){},
hN:function hN(){},
hP:function hP(){},
b9:function b9(){},
aL:function aL(){},
hS:function hS(){},
hT:function hT(){},
bz:function bz(){},
i8:function i8(){},
io:function io(){},
bb:function bb(){},
cE:function cE(){},
iy:function iy(){},
e3:function e3(){},
iL:function iL(){},
ek:function ek(){},
iW:function iW(){},
iX:function iX(){},
iz:function iz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jJ:function jJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iA:function iA(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iB:function iB(a){this.a=a},
y:function y(){},
dd:function dd(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
e2:function e2(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
el:function el(){},
em:function em(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
cL:function cL(){},
cM:function cM(){},
es:function es(){},
et:function et(){},
ex:function ex(){},
eA:function eA(){},
eB:function eB(){},
cN:function cN(){},
cO:function cO(){},
eC:function eC(){},
eD:function eD(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){}},O={
jt:function(a){var u=new O.a1([a])
u.bc(a)
return u},
a1:function a1(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
ci:function ci(){this.b=this.a=null},
k5:function(){var u=new O.df()
u.b=V.kw()
u.c=new V.O(0.2,0.3,0.4,1)
u.d=new V.O(0.1,0.2,0.3,1)
u.e=V.d2(0.7)
u.f=V.d2(0.3)
u.r=V.d2(0.5)
u.x=V.d2(0.5)
u.y=new V.O(1,1,1,1)
u.z=V.d2(0.8)
u.r1=u.k4=u.k3=u.k2=u.k1=u.id=u.go=u.fy=u.fx=u.fr=u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=!1
u.r2=1
return u},
bP:function(){var u,t,s=new O.ds()
s.sfa(O.jt(V.ah))
s.e.aS(s.gfJ(),s.gfL())
u=new O.b0(s,"emission")
u.c=C.c
u.f=new V.a5(0,0,0)
s.f=u
u=new O.b0(s,"ambient")
u.c=C.c
u.f=new V.a5(0,0,0)
s.r=u
u=new O.b0(s,"diffuse")
u.c=C.c
u.f=new V.a5(0,0,0)
s.x=u
u=new O.b0(s,"invDiffuse")
u.c=C.c
u.f=new V.a5(0,0,0)
s.y=u
u=new O.fY(s,"specular")
u.c=C.c
u.f=new V.a5(0,0,0)
u.ch=100
s.z=u
u=new O.fV(s,"bump")
u.c=C.c
s.Q=u
s.ch=null
u=new O.b0(s,"reflect")
u.c=C.c
u.f=new V.a5(0,0,0)
s.cx=u
u=new O.fX(s,"refract")
u.c=C.c
u.f=new V.a5(0,0,0)
u.ch=1
s.cy=u
u=new O.fU(s,"alpha")
u.c=C.c
u.f=1
s.db=u
u=new D.dl()
u.bc(D.a6)
u.seU(H.c([],[D.d7]))
u.seV(H.c([],[D.dA]))
u.seW(H.c([],[D.dF]))
u.seX(H.c([],[D.dJ]))
u.seY(H.c([],[D.dK]))
u.seZ(H.c([],[D.dL]))
u.ch=u.Q=null
u.cO(u.gfH(),u.ghg(),u.ghk())
s.dx=u
t=u.Q
u=t==null?u.Q=D.T():t
u.h(0,s.ghE())
u=s.dx
t=u.ch
u=t==null?u.ch=D.T():t
u.h(0,s.gf1())
s.dy=null
return s},
df:function df(){var _=this
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fy:function fy(a,b){this.a=a
this.b=b},
fz:function fz(a){this.a=a},
fB:function fB(a,b){this.a=a
this.b=b},
fA:function fA(a){this.a=a},
fC:function fC(a,b){this.a=a
this.b=b},
fD:function fD(a,b){this.a=a
this.b=b},
ds:function ds(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fU:function fU(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dt:function dt(){},
fV:function fV(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b0:function b0(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fX:function fX(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fY:function fY(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
by:function by(){}},E={
ay:function(){var u=new E.an()
u.a=""
u.b=!0
u.seT(0,O.jt(E.an))
u.y.aS(u.giX(),u.gj_())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sa2(0,null)
u.sa6(null)
u.sW(null)
return u},
lO:function(a,b){var u=new E.hj(a)
u.eQ(a,b)
return u},
jF:function(a){var u=document.getElementById(a)
if(u==null)throw H.i(P.p("Failed to find an element with the identifier, "+a+"."))
return E.lT(u,!0,!0,!0,!1)},
lT:function(a,b,c,d,e){var u,t,s=J.a4(a)
if(!!s.$ibK)return E.ko(a,!0,!0,!0,!1)
u=W.k3()
t=u.style
t.width="100%"
t.height="100%"
s.gdM(a).h(0,u)
return E.ko(u,!0,!0,!0,!1)},
ko:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dM(),j=H.j(C.n.eI(a,"webgl2",P.ly(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibV")
if(j==null)H.r(P.p("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.lO(j,a)
H.ae(j.getParameter(3379))
H.ae(j.getParameter(34076))
u=new X.dU(a)
t=new X.fI()
t.c=new X.aw(!1,!1,!1)
t.shx(P.lz(P.C))
u.b=t
t=new X.h4(u)
t.f=0
t.r=V.aH()
t.x=V.aH()
t.ch=t.Q=1
u.c=t
t=new X.fP(u)
t.r=0
t.x=V.aH()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hR(u)
t.f=V.aH()
t.r=V.aH()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfl(H.c([],[[P.ct,P.U]]))
t=u.z
s=document
r=W.ac
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ad(s,"contextmenu",H.m(u.gfT(),q),!1,r))
t=u.z
p=W.n
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ad(a,"focus",H.m(u.gfZ(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ad(a,"blur",H.m(u.gfN(),o),!1,p))
t=u.z
n=W.b_
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ad(s,"keyup",H.m(u.gh2(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ad(s,"keydown",H.m(u.gh0(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ad(a,"mousedown",H.m(u.gh6(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ad(a,"mouseup",H.m(u.gha(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ad(a,l,H.m(u.gh8(),q),!1,r))
n=u.z
m=W.bb;(n&&C.a).h(n,W.ad(a,H.W(W.ls(a)),H.m(u.ghc(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ad(s,l,H.m(u.gfV(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ad(s,"mouseup",H.m(u.gfX(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ad(s,"pointerlockchange",H.m(u.ghe(),o),!1,p))
p=u.z
o=W.aL
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ad(a,"touchstart",H.m(u.ghu(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ad(a,"touchend",H.m(u.ghq(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ad(a,"touchmove",H.m(u.ghs(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
Date.now()
k.cy=0
k.dz()
return k},
f0:function f0(){},
an:function an(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hj:function hj(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hk:function hk(a){this.a=a},
hl:function hl(a){this.a=a},
hm:function hm(a){this.a=a},
dM:function dM(){var _=this
_.cy=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=null},
hO:function hO(a){this.a=a}},Z={
jI:function(a,b,c){var u
H.k(c,"$ib",[P.C],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cQ(c)),35044)
a.bindBuffer(b,null)
return new Z.dZ(b,u)},
aC:function(a){return new Z.aN(a)},
dZ:function dZ(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
e_:function e_(a){this.a=a},
bp:function bp(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
d_:function d_(){this.a=null},
bs:function bs(a,b,c){this.a=a
this.b=b
this.c=c},
aN:function aN(a){this.a=a}},D={
T:function(){var u=new D.cd()
u.sam(null)
u.sbg(null)
u.c=null
u.d=0
return u},
f3:function f3(){},
cd:function cd(){var _=this
_.d=_.c=_.b=_.a=null},
fk:function fk(a){this.a=a},
fl:function fl(a){this.a=a},
u:function u(){this.b=null},
bt:function bt(a){this.b=null
this.$ti=a},
bu:function bu(a){this.b=null
this.$ti=a},
I:function I(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
d7:function d7(){},
a6:function a6(){},
dl:function dl(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dA:function dA(){},
dF:function dF(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){}},X={d0:function d0(a,b){this.a=a
this.b=b},dk:function dk(a,b){this.a=a
this.b=b},fI:function fI(){var _=this
_.d=_.c=_.b=_.a=null},dp:function dp(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fP:function fP(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aw:function aw(a,b,c){this.a=a
this.b=b
this.c=c},az:function az(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},h4:function h4(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cl:function cl(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hh:function hh(){},dO:function dO(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hR:function hR(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dU:function dU(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
fv:function(a,b){var u=new X.fu(),t=new V.O(0,0,0,1)
u.a=t
u.b=a
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kl
if(t==null){t=V.kk(0,0,1,1)
$.kl=t}u.r=t
return u},
bR:function(){var u,t=new X.dz()
t.c=1.0471975511965976
t.d=0.1
t.e=2000
t.saB(null)
t.sW(null)
u=t.c
if(!(Math.abs(u-1.0471975511965976)<$.K().a)){t.c=1.0471975511965976
u=new D.I("fov",u,1.0471975511965976,[P.w])
u.b=!0
t.ar(u)}u=t.d
if(!(Math.abs(u-0.1)<$.K().a)){t.d=0.1
u=new D.I("near",u,0.1,[P.w])
u.b=!0
t.ar(u)}u=t.e
if(!(Math.abs(u-2000)<$.K().a)){t.e=2000
u=new D.I("far",u,2000,[P.w])
u.b=!0
t.ar(u)}return t},
d1:function d1(){},
fu:function fu(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dz:function dz(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dH:function dH(){}},V={
d2:function(a){if(a<0)a=0
else if(a>1)a=1
return new V.O(a,a,a,1)},
mD:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.i.eJ(a-b,u)
return(a<0?a+u:a)+b},
N:function(a,b,c){if(a==null)return C.j.ae("null",c)
return C.j.ae(C.i.jl(Math.abs(a-0)<$.K().a?0:a,b),c+b+1)},
bZ:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.w],"$ab")
u=H.c([],[P.o])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.D)(a),++r){q=V.N(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.a1(u,p,C.j.ae(u[p],s))}return u},
ck:function(){var u=$.ka
return u==null?$.ka=V.b1(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b1:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ah(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ai:function(a,b,c){return V.b1(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
bQ:function(a,b,c,d){return V.b1(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
cj:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b1(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
jD:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b1(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
aH:function(){var u=$.ke
return u==null?$.ke=new V.X(0,0):u},
kf:function(){var u=$.cp
return u==null?$.cp=new V.a2(0,0,0):u},
kk:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dD(a,b,c,d)},
bW:function(){var u=$.kv
return u==null?$.kv=new V.B(0,0,0):u},
kw:function(){var u=$.kt
return u==null?$.kt=new V.B(0,0,-1):u},
a5:function a5(a,b,c){this.a=a
this.b=b
this.c=c},
O:function O(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fj:function fj(a){this.a=a},
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
ah:function ah(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
X:function X(a,b){this.a=a
this.b=b},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
aA:function aA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dD:function dD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Q:function Q(a,b){this.a=a
this.b=b},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
bk:function bk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aj:function(a){var u=new V.hr()
u.eR(a)
return u},
eS:function eS(){},
bf:function bf(){},
dq:function dq(){},
bh:function bh(){this.a=null},
hr:function hr(){this.a=null},
cs:function cs(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dN:function dN(a,b,c){this.a=a
this.b=b
this.c=c},
cu:function cu(a){this.b=a
this.c=null},
hQ:function hQ(){this.c=this.b=this.a=null},
cv:function cv(a){this.b=a
this.a=this.c=null},
lQ:function(a){var u=new V.hv()
u.eS(a,!0)
return u},
hv:function hv(){this.b=this.a=null},
hx:function hx(a){this.a=a},
hw:function hw(a){this.a=a}},U={
ju:function(){var u=new U.f4()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
S:function(a){var u=new U.d4()
u.sJ(0,a)
return u},
aX:function(){var u=new U.cg()
u.bc(U.aa)
u.aS(u.gf_(),u.ghi())
u.e=null
u.f=V.ck()
u.r=0
return u},
f4:function f4(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d4:function d4(){this.b=this.a=null},
cg:function cg(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
aa:function aa(){},
dV:function dV(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dW:function dW(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dX:function dX(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
jv:function(a){var u=new M.d3()
u.bc(M.ao)
u.e=!1
u.f=null
u.aS(u.ghm(),u.gho())
u.ca(0,a)
return u},
cc:function(){var u,t=new M.db()
t.sfe(0,O.jt(E.an))
t.d.aS(t.gfP(),t.gfR())
t.x=t.r=t.f=t.e=null
u=X.fv(!0,null)
t.sax(null)
t.sbF(0,u)
t.sa6(null)
return t},
d3:function d3(){var _=this
_.c=_.b=_.a=_.f=_.e=null},
db:function db(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ao:function ao(){},
mw:function(a){var u,t,s,r,q,p,o,n,m,l,k={},j=E.jF(a),i=O.bP(),h=i.f
h.sU(0,new V.a5(0.4,0.6,0.8))
u=O.bP()
h=u.f
h.sU(0,new V.a5(0.8,0.6,0.4))
u.db.sbH(0,0.3)
t=O.bP()
h=t.f
h.sU(0,new V.a5(0.4,0.6,0.8))
t.db.sbH(0,0.3)
s=U.S(null)
r=U.S(null)
q=E.ay()
q.sa6(i)
h=F.aI()
h.aA(F.jg(!0))
h.aA(F.kN(!0,36))
q.sa2(0,h)
p=E.ay()
p.sa6(u)
p.sa2(0,F.jW())
h=U.aX()
h.h(0,U.S(V.bQ(1.3,1.3,1.3,1)))
h.h(0,U.S(V.cj(-1.5707963267948966)))
h.h(0,s)
p.sW(h)
o=E.ay()
o.sa2(0,F.jW())
h=U.aX()
h.h(0,U.S(V.ai(0,0,0.1)))
o.sW(h)
n=E.ay()
n.sa2(0,F.jW())
h=U.aX()
h.h(0,r)
n.sW(h)
m=M.cc()
m.sbF(0,X.fv(!1,null))
h=X.bR()
h.saB(U.S(V.ai(-0.5,0,0)))
h.sW(U.S(V.ai(0,0,5)))
m.sax(h)
m.d.h(0,p)
m.d.h(0,q)
l=M.cc()
h=X.bR()
h.saB(U.S(V.ai(0.5,0,0)))
h.sW(U.S(V.ai(0,0,5)))
l.sax(h)
l.sa6(t)
l.d.h(0,n)
l.d.h(0,o)
k.a=0.5
k.b=!1
j.r.c.gb1().h(0,new M.jh(k))
j.r.c.gaC().h(0,new M.ji(k))
j.r.c.gb5().h(0,new M.jj(k,s,o,n,r))
j.sbI(M.jv(H.c([l,m],[M.ao])))},
mx:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=E.jF(a),f=O.k5()
f.scQ(!0)
f.scP(!0)
f.sdP(new V.O(0.2,0.3,0.4,0.2))
f.sdJ(new V.O(0.1,0.2,0.3,0.2))
u=O.bP()
t=u.f
t.sU(0,new V.a5(0.8,0.6,0.4))
u.db.sbH(0,0.3)
s=O.bP()
t=s.f
t.sU(0,new V.a5(0.4,0.6,0.8))
r=U.S(i)
q=U.S(i)
p=U.aX()
p.h(0,U.S(V.cj(0.4)))
p.h(0,U.S(V.jD(0.4)))
o=E.ay()
o.sa6(f)
t=F.aI()
t.aA(F.kM(1,i,1))
t.aA(F.kS(2))
o.sa2(0,t)
o.sW(p)
n=E.ay()
n.sa6(u)
n.sa2(0,F.jg(!1))
t=U.aX()
t.h(0,U.S(V.bQ(1.3,1.3,1.3,1)))
t.h(0,U.S(V.cj(-1.5707963267948966)))
t.h(0,r)
t.h(0,p)
n.sW(t)
m=E.ay()
m.sa2(0,F.jg(!0))
l=E.ay()
l.sa2(0,F.kN(!0,36))
t=U.aX()
t.h(0,q)
l.sW(t)
k=M.cc()
k.sbF(0,X.fv(!1,i))
t=X.bR()
t.saB(U.S(V.ai(-0.5,0,0)))
t.sW(U.S(V.ai(0,0,5)))
k.sax(t)
k.d.h(0,n)
k.d.h(0,o)
j=M.cc()
t=X.bR()
t.saB(U.S(V.ai(0.5,0,0)))
t.sW(U.S(V.ai(0,0,5)))
j.sax(t)
j.sa6(s)
j.d.h(0,l)
j.d.h(0,m)
h.a=0.5
h.b=!1
g.r.c.gb1().h(0,new M.jk(h))
g.r.c.gaC().h(0,new M.jl(h))
g.r.c.gb5().h(0,new M.jm(h,r,m,l,q))
g.sbI(M.jv(H.c([j,k],[M.ao])))},
my:function(b8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3="modifiers",b4={},b5=E.jF(b8),b6=O.bP(),b7=b6.f
b7.sU(0,new V.a5(0.4,0.6,0.8))
u=O.bP()
b7=u.f
b7.sU(0,new V.a5(0.8,0.6,0.4))
u.db.sbH(0,0.3)
t=O.k5()
t.scQ(!0)
t.scP(!0)
t.sdP(new V.O(0.2,0.3,0.4,0.2))
t.sdJ(new V.O(0.1,0.2,0.3,0.2))
s=U.S(b2)
r=U.S(b2)
q=U.aX()
q.h(0,U.S(V.cj(0.4)))
q.h(0,U.S(V.jD(0.4)))
p=U.aX()
o=F.aI()
n=o.a.Y(1,-1,1)
m=o.a.Y(1,1,1)
l=o.a.Y(1,1,-1)
k=o.a.Y(1,-1,-1)
j=o.a.Y(-1,-1,1)
i=o.a.Y(-1,1,1)
h=o.a.Y(-1,1,-1)
g=o.a.Y(-1,-1,-1)
f=o.a.Y(0.5,-0.5,0.5)
e=o.a.Y(0.5,0.5,0.5)
d=o.a.Y(0.5,0.5,-0.5)
c=o.a.Y(0.5,-0.5,-0.5)
b=o.a.Y(-0.5,-0.5,0.5)
a=o.a.Y(-0.5,0.5,0.5)
a0=o.a.Y(-0.5,0.5,-0.5)
a1=o.a.Y(-0.5,-0.5,-0.5)
o.c.iz(H.c([n,m,m,l,l,k,k,n,j,i,i,h,h,g,g,j,f,e,e,d,d,c,c,f,b,a,a,a0,a0,a1,a1,b,n,j,m,i,l,h,k,g,f,b,e,a,d,a0,c,a1,n,f,m,e,l,d,k,c,j,b,i,a,h,a0,g,a1],[F.R]))
a2=E.ay()
a2.sa6(b6)
a2.sa2(0,o)
a2.sW(q)
a3=E.ay()
a3.sa6(u)
a3.sa2(0,F.jg(!1))
b7=U.aX()
b7.h(0,U.S(V.bQ(1.1,1.1,1.1,1)))
b7.h(0,U.S(V.cj(-1.5707963267948966)))
b7.h(0,s)
b7.h(0,q)
a3.sW(b7)
a4=E.ay()
a4.sa2(0,F.kM(1,b2,1))
a4.sW(p)
a5=E.ay()
a5.sa2(0,F.kS(2))
b7=U.aX()
b7.h(0,r)
b7.h(0,p)
a5.sW(b7)
a6=M.cc()
a6.sbF(0,X.fv(!1,b2))
b7=X.bR()
b7.saB(U.S(V.ai(-0.5,0,0)))
b7.sW(U.S(V.ai(0,0,5)))
a6.sax(b7)
a6.d.h(0,a2)
a6.d.h(0,a3)
a7=M.cc()
b7=X.bR()
b7.saB(U.S(V.ai(0.5,0,0)))
b7.sW(U.S(V.ai(0,0,5)))
a7.sax(b7)
a7.sa6(t)
a7.d.h(0,a5)
a7.d.h(0,a4)
b4.a=0.5
b4.b=!1
b5.r.c.gb1().h(0,new M.jn(b4))
b5.r.c.gaC().h(0,new M.jo(b4))
b5.r.c.gb5().h(0,new M.jp(b4,s,a4,a5,r))
b4=b5.r
b7=new U.dW()
a8=U.ju()
a8.scM(0,!0)
a8.scA(6.283185307179586)
a8.scC(0)
a8.sZ(0,0)
a8.scB(100)
a8.sS(0)
a8.sco(0.5)
b7.b=a8
a9=b7.gaI()
a8.gq().h(0,a9)
a8=U.ju()
a8.scM(0,!0)
a8.scA(6.283185307179586)
a8.scC(0)
a8.sZ(0,0)
a8.scB(100)
a8.sS(0)
a8.sco(0.5)
b7.c=a8
a8.gq().h(0,a9)
b7.d=null
b7.r=b7.f=b7.e=!1
b7.y=b7.x=2.5
b7.Q=4
b7.ch=b7.cx=!1
b7.db=b7.cy=0
b7.dx=null
b7.dy=0
b7.fx=b7.fr=null
b0=new X.aw(!1,!1,!1)
b1=b7.d
b7.d=b0
a8=[X.aw]
a9=new D.I(b3,b1,b0,a8)
a9.b=!0
b7.O(a9)
a9=b7.f
if(a9!==!1){b7.f=!1
a9=new D.I("invertX",a9,!1,[P.a7])
a9.b=!0
b7.O(a9)}a9=b7.r
if(a9!==!0){b7.r=!0
a9=new D.I("invertY",a9,!0,[P.a7])
a9.b=!0
b7.O(a9)}b7.aY(b4)
p.h(0,b7)
b4=b5.r
b7=new U.dV()
a9=U.ju()
a9.scM(0,!0)
a9.scA(6.283185307179586)
a9.scC(0)
a9.sZ(0,0)
a9.scB(100)
a9.sS(0)
a9.sco(0.2)
b7.b=a9
a9.gq().h(0,b7.gaI())
b7.c=null
b7.d=!1
b7.e=2.5
b7.r=4
b7.x=b7.y=!1
b7.z=0
b7.Q=null
b7.ch=0
b7.cy=b7.cx=null
b0=new X.aw(!0,!1,!1)
b1=b7.c
b7.c=b0
a9=new D.I(b3,b1,b0,a8)
a9.b=!0
b7.O(a9)
b7.aY(b4)
p.h(0,b7)
b4=b5.r
b7=new U.dX()
b7.c=0.01
b7.e=b7.d=0
b0=new X.aw(!1,!1,!1)
b7.b=b0
a8=new D.I(b3,b2,b0,a8)
a8.b=!0
b7.O(a8)
b7.aY(b4)
p.h(0,b7)
b5.sbI(M.jv(H.c([a7,a6],[M.ao])))},
kT:function(){var u="target2D",t="_Click and drag to move the location of the slice._",s="target3D",r="target4D",q=V.lQ("Hypersphere"),p=[P.o]
q.ag(H.c(["This is a simple example to help demonstrate why a hypersphere takes up ","so little space of the hypercube."],p))
q.cb(3,"2D: circle and square")
q.ag(H.c(["Imagine taking slices out of a circle inscribed in a square. Each slice is ","two lines, one from the circle and one from the square. When the slices ","are near the top, the line caused by the circle is small compared to the square. ","The corners of the square aren't covered by the circle."],p))
q.cc(u)
q.ag(H.c([t],p))
q.cb(3,"3D: sphere and cube")
q.ag(H.c(["Now imagine taking slices out of a sphere inscribed in a cube. Each slice is ","a circle inside a square. When the slice is in the middle, the circle touches ","the sides of the square. When the slice is near a side, the circle is almost a ","point but the square is still the same size. That is a lot of extra space for ","for the square not used by the circle."],p))
q.cc(s)
q.ag(H.c([t],p))
q.cb(3,"4D: hypersphere and hypercube")
q.ag(H.c(["Now imagine taking a slice out of a hypersphere inscribed in a hypercube. ","Each slice is a sphere and a cube (as shown in the graphics below). ","When the slice is near the edges, the sphere is a small point in the middle ","of a cube. As the slice moves down the sphere gets bigger until it touches all ","the sides of the cube, then it shrinks again. Once again, that's a lot of ","space in the cube not filled by the sphere."],p))
q.cc(r)
q.ag(H.c(["_The shape on the left is an artistic representation of a 4D hypercube._ ","_Click and drag on the left to move the location of the slice._","_Click and drag on the right to rotate the resulting 3D slice._"],p))
q.ag(H.c(["With each new dimension the hypersphere is small near the edges and only touching ","the sides of the hypersphere in the very middle."],p))
q.ag(H.c(["\xab[Back to Examples|../]"],p))
M.mw(u)
M.mx(s)
M.my(r)},
jh:function jh(a){this.a=a},
ji:function ji(a){this.a=a},
jj:function jj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jk:function jk(a){this.a=a},
jl:function jl(a){this.a=a},
jm:function jm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jn:function jn(a){this.a=a},
jo:function jo(a){this.a=a},
jp:function jp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e}},A={
lB:function(a,b){var u=a.ah,t=new A.dr(b,u)
t.cZ(b,u)
t.eP(a,b)
return t},
jH:function(a,b,c,d,e){var u=new A.hZ(a,c,e)
u.f=d
u.si3(P.lA(d,0,P.C))
return u},
cW:function cW(a,b,c){this.a=a
this.b=b
this.c=c},
eW:function eW(a){this.a=a},
de:function de(a,b){var _=this
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dr:function dr(a,b){var _=this
_.bo=_.dU=_.bn=_.ah=_.ap=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.e9=_.cp=_.e8=_.bB=_.e7=_.e6=_.bA=_.bz=_.e5=_.e4=_.by=_.bx=_.bw=_.e3=_.e2=_.bv=_.e1=_.e0=_.bu=_.e_=_.dZ=_.bt=_.bs=_.dY=_.dX=_.br=_.bq=_.dW=_.dV=_.bp=null
_.cu=_.ed=_.ct=_.ec=_.cs=_.eb=_.cr=_.ea=_.cq=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fW:function fW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ap=b3
_.ah=b4
_.bn=b5},
cx:function cx(a,b){this.b=a
this.c=b},
cB:function cB(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
cz:function cz(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cC:function cC(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cA:function cA(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cD:function cD(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
cr:function cr(){},
bL:function bL(a,b){this.a=a
this.b=b},
dP:function dP(){},
i3:function i3(a){this.a=a},
M:function M(a,b,c){this.a=a
this.c=b
this.d=c},
i0:function i0(a,b,c){this.a=a
this.c=b
this.d=c},
i1:function i1(a,b,c){this.a=a
this.c=b
this.d=c},
i2:function i2(a,b,c){this.a=a
this.c=b
this.d=c},
hZ:function hZ(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
i_:function i_(a,b,c){this.a=a
this.c=b
this.d=c},
J:function J(a,b,c){this.a=a
this.c=b
this.d=c},
cw:function cw(a,b,c){this.a=a
this.c=b
this.d=c},
i4:function i4(a,b,c){this.a=a
this.c=b
this.d=c},
cy:function cy(a,b,c){this.a=a
this.c=b
this.d=c},
ak:function ak(a,b,c){this.a=a
this.c=b
this.d=c},
aq:function aq(a,b,c){this.a=a
this.c=b
this.d=c},
ar:function ar(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jW:function(){var u,t,s=F.aI(),r=s.a,q=V.aH(),p=new V.B(-1,-1,0)
p=p.m(0,Math.sqrt(p.v(p)))
u=r.aL(new V.aA(1,2,4,6),new V.O(1,0,0,1),new V.a2(-1,0,0),q,p,null)
r=s.a
q=new V.B(1,-1,0)
q=q.m(0,Math.sqrt(q.v(q)))
t=r.aL(new V.aA(0,3,4,6),new V.O(0,0,1,1),new V.a2(1,0,0),new V.X(1,0),q,null)
s.c.c9(0,u,t)
return s},
jg:function(a){var u,t,s,r,q,p=null,o=F.aI(),n=o.a,m=new V.B(-1,-1,1)
m=m.m(0,Math.sqrt(m.v(m)))
u=n.aL(new V.aA(1,2,4,6),new V.O(1,0,0,1),new V.a2(-1,-1,0),new V.X(0,1),m,p)
n=o.a
m=new V.B(1,-1,1)
m=m.m(0,Math.sqrt(m.v(m)))
t=n.aL(new V.aA(0,3,4,6),new V.O(0,0,1,1),new V.a2(1,-1,0),new V.X(1,1),m,p)
n=o.a
m=new V.B(1,1,1)
m=m.m(0,Math.sqrt(m.v(m)))
s=n.aL(new V.aA(0,2,5,6),new V.O(0,1,0,1),new V.a2(1,1,0),new V.X(1,0),m,p)
n=o.a
m=V.aH()
r=new V.B(-1,1,1)
r=r.m(0,Math.sqrt(r.v(r)))
q=n.aL(new V.aA(0,2,4,7),new V.O(1,1,0,1),new V.a2(-1,1,0),m,r,p)
n=[F.R]
if(a)o.c.dH(H.c([u,t,s,q],n))
else o.d.ix(H.c([u,t,s,q],n))
o.ao()
return o},
kM:function(a,b,c){var u=null,t=F.aI()
F.cP(t,b,u,c,a,1,0,0,1)
F.cP(t,b,u,c,a,0,1,0,3)
F.cP(t,b,u,c,a,0,0,1,2)
F.cP(t,b,u,c,a,-1,0,0,0)
F.cP(t,b,u,c,a,0,-1,0,0)
F.cP(t,b,u,c,a,0,0,-1,3)
t.ao()
return t},
j2:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cP:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.B(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.B(u+a3,t+a1,s+a2)
q=new V.B(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.B(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.j2(i)
l=F.j2(j.b)
k=F.mB(d,a0,new F.j1(j,F.j2(j.c),F.j2(j.d),l,m,c),b)
if(k!=null)a.aA(k)},
kN:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new F.j7()
if(b<3)return
u=F.aI()
t=-6.283185307179586/b
s=H.c([],[F.R])
for(r=0;r<=b;++r){q=t*r
p=Math.sin(q)
o=Math.cos(q)
n=g.$1(r/b)
m=u.a
if(typeof n!=="number")return H.A(n)
l=new V.B(p,o,1).m(0,Math.sqrt(p*p+o*o+1))
if(p<0)k=0
else k=p>1?1:p
j=o<0
if(j)i=0
else i=o>1?1:o
if(j)j=0
else j=o>1?1:o
m.toString
h=F.bA(new V.aA(-1,-1,-1,-1),null,new V.O(k,i,j,1),new V.a2(p*n,o*n,0),new V.B(0,0,1),new V.X(p*0.5+0.5,o*0.5+0.5),l,null,0)
m.h(0,h)
C.a.h(s,h)}u.c.dH(s)
return u},
kS:function(a){var u=F.aI(),t=Math.sqrt(5)/2+0.5,s=F.as(u,new V.B(-1,t,0)),r=F.as(u,new V.B(1,t,0)),q=-t,p=F.as(u,new V.B(-1,q,0)),o=F.as(u,new V.B(1,q,0)),n=F.as(u,new V.B(0,-1,q)),m=F.as(u,new V.B(0,1,q)),l=F.as(u,new V.B(0,-1,t)),k=F.as(u,new V.B(0,1,t)),j=F.as(u,new V.B(t,0,1)),i=F.as(u,new V.B(t,0,-1)),h=F.as(u,new V.B(q,0,1)),g=F.as(u,new V.B(q,0,-1))
F.a0(u,s,g,m,a)
F.a0(u,s,m,r,a)
F.a0(u,s,r,k,a)
F.a0(u,s,k,h,a)
F.a0(u,s,h,g,a)
F.a0(u,r,m,i,a)
F.a0(u,m,g,n,a)
F.a0(u,g,h,p,a)
F.a0(u,h,k,l,a)
F.a0(u,k,r,j,a)
F.a0(u,o,i,n,a)
F.a0(u,o,n,p,a)
F.a0(u,o,p,l,a)
F.a0(u,o,l,j,a)
F.a0(u,o,j,i,a)
F.a0(u,n,i,m,a)
F.a0(u,p,n,g,a)
F.a0(u,l,p,h,a)
F.a0(u,j,l,k,a)
F.a0(u,i,j,r,a)
u.iW(new F.dY(),new F.ig())
return u},
as:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null
b=b.m(0,Math.sqrt(b.v(b)))
u=b.a
t=b.b
s=b.c
r=F.bA(j,j,j,new V.a2(u,t,s),b,j,j,j,0)
q=a.iM(r,new F.dY())
if(q!=null)return q
p=u*0.5+0.5
o=t*0.5+0.5
n=s*0.5+0.5
if(p<0)p=0
else if(p>1)p=1
if(o<0)o=0
else if(o>1)o=1
if(n<0)n=0
else if(n>1)n=1
r.sU(0,new V.O(p,o,n,1))
m=Math.sqrt(u*u+t*t)
l=Math.atan2(t,u)/1.5707963267948966
if(l<0)l=-l
k=Math.atan2(m,s)/3.141592653589793
r.scI(new V.X(l,k<0?-k:k))
a.a.h(0,r)
return r},
a0:function(a,b,c,d,e){var u,t,s,r
if(e<=0)a.d.dG(0,b,d,c)
else{u=F.as(a,b.r.B(0,c.r).n(0,0.5))
t=F.as(a,c.r.B(0,d.r).n(0,0.5))
s=F.as(a,d.r.B(0,b.r).n(0,0.5))
r=e-1
F.a0(a,b,u,s,r)
F.a0(a,u,c,t,r)
F.a0(a,t,s,u,r)
F.a0(a,s,t,d,r)}},
mB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.m(c,{func:1,ret:-1,args:[F.R,P.w,P.w]})
if(a<1)return
if(b<1)return
u=F.aI()
t=H.c([],[F.R])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.bA(g,g,new V.O(p,0,0,1),g,g,new V.X(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cn(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.bA(g,g,new V.O(j,i,h,1),g,g,new V.X(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cn(d))}}u.d.iy(a+1,b+1,t)
return u},
ce:function(a,b,c){var u=new F.Z(),t=a.a
if(t==null)H.r(P.p("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.r(P.p("May not create a face with vertices attached to different shapes."))
u.aW(a)
u.aX(b)
u.dC(c)
C.a.h(u.a.a.d.b,u)
u.a.a.P()
return u},
jC:function(a,b){var u,t=new F.af()
if(a==null)H.r(P.p("May not create a line with a null start vertex."))
if(b==null)H.r(P.p("May not create a line with a null end vertex."))
u=a.a
if(u==null)H.r(P.p("May not create a line with a start vertex which is not attached to a shape."))
if(u!=b.a)H.r(P.p("May not create a line with vertices attached to different shapes."))
t.aW(a)
t.aX(b)
C.a.h(t.a.a.c.b,t)
t.a.a.P()
return t},
lC:function(a){var u=new F.bw()
if(a.a==null)H.r(P.p("May not create a point with a vertex which is not attached to a shape."))
u.hH(a)
C.a.h(u.a.a.b.b,u)
u.a.a.P()
return u},
aI:function(){var u=new F.ap(),t=new F.ib(u)
t.b=!1
t.si4(H.c([],[F.R]))
u.a=t
t=new F.hu(u)
t.sc0(H.c([],[F.bw]))
u.b=t
t=new F.ht(u)
t.sfu(H.c([],[F.af]))
u.c=t
t=new F.hs(u)
t.sfm(H.c([],[F.Z]))
u.d=t
u.e=null
return u},
bA:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.R(),r=new F.ik()
r.sc0(H.c([],[F.bw]))
s.b=r
r=new F.ih()
u=[F.af]
r.sfv(H.c([],u))
r.sfw(H.c([],u))
s.c=r
r=new F.ic()
u=[F.Z]
r.sfn(H.c([],u))
r.sfo(H.c([],u))
r.sfp(H.c([],u))
s.d=r
h=$.lc()
s.e=0
r=$.aQ()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aP().a)!==0?e:t
s.x=(u&$.aO().a)!==0?b:t
s.y=(u&$.bn().a)!==0?f:t
s.z=(u&$.bo().a)!==0?g:t
s.Q=(u&$.ld().a)!==0?c:t
s.ch=(u&$.c2().a)!==0?i:0
s.cx=(u&$.bm().a)!==0?a:t
return s},
j1:function j1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j7:function j7(){},
Z:function Z(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fm:function fm(){},
hy:function hy(){},
af:function af(){this.b=this.a=null},
fK:function fK(){},
hY:function hY(){},
bw:function bw(){this.a=null},
ap:function ap(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hs:function hs(a){this.a=a
this.b=null},
ht:function ht(a){this.a=a
this.b=null},
hu:function hu(a){this.a=a
this.b=null},
R:function R(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
im:function im(a){this.a=a},
il:function il(a){this.a=a},
ib:function ib(a){this.a=a
this.c=this.b=null},
ic:function ic(){this.d=this.c=this.b=null},
id:function id(a,b){this.a=a
this.b=b},
ie:function ie(a,b){this.a=a
this.b=b},
ih:function ih(){this.c=this.b=null},
ii:function ii(){},
dY:function dY(){},
ij:function ij(){},
ig:function ig(){},
ik:function ik(){this.b=null}},T={dI:function dI(){}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jA.prototype={}
J.a.prototype={
u:function(a,b){return a===b},
gI:function(a){return H.cq(a)},
i:function(a){return"Instance of '"+H.bT(a)+"'"}}
J.fE.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$ia7:1}
J.dh.prototype={
u:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.dj.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.hf.prototype={}
J.dR.prototype={}
J.bv.prototype={
i:function(a){var u=a[$.l1()]
if(u==null)return this.eN(a)
return"JavaScript function for "+H.l(J.ax(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ijw:1}
J.aZ.prototype={
h:function(a,b){H.E(b,H.x(a,0))
if(!!a.fixed$length)H.r(P.aB("add"))
a.push(b)},
ex:function(a,b){if(!!a.fixed$length)H.r(P.aB("removeAt"))
if(b<0||b>=a.length)throw H.i(P.dC(b,null))
return a.splice(b,1)[0]},
w:function(a,b){var u
if(!!a.fixed$length)H.r(P.aB("remove"))
for(u=0;u<a.length;++u)if(J.F(a[u],b)){a.splice(u,1)
return!0}return!1},
ca:function(a,b){var u,t
H.k(b,"$ie",[H.x(a,0)],"$ae")
if(!!a.fixed$length)H.r(P.aB("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.D)(b),++t)a.push(b[t])},
H:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.i(P.c9(a))}},
C:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.a1(t,u,H.l(a[u]))
return t.join(b)},
iT:function(a){return this.C(a,"")},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
eL:function(a,b,c){var u=a.length
if(b>u)throw H.i(P.b4(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.i(P.b4(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.x(a,0)])
return H.c(a.slice(b,c),[H.x(a,0)])},
giO:function(a){if(a.length>0)return a[0]
throw H.i(H.k6())},
gcw:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.i(H.k6())},
aO:function(a,b){var u
for(u=0;u<a.length;++u)if(J.F(a[u],b))return!0
return!1},
i:function(a){return P.jx(a,"[","]")},
gV:function(a){return new J.al(a,a.length,[H.x(a,0)])},
gI:function(a){return H.cq(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.r(P.aB("set length"))
if(b<0)throw H.i(P.b4(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.i(H.bE(a,b))
if(b>=a.length||b<0)throw H.i(H.bE(a,b))
return a[b]},
a1:function(a,b,c){H.E(c,H.x(a,0))
if(!!a.immutable$list)H.r(P.aB("indexed set"))
if(b>=a.length||b<0)throw H.i(H.bE(a,b))
a[b]=c},
$ie:1,
$ib:1}
J.jz.prototype={}
J.al.prototype={
gL:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.i(H.D(s))
u=t.c
if(u>=r){t.sd3(null)
return!1}t.sd3(s[u]);++t.c
return!0},
sd3:function(a){this.d=H.E(a,H.x(this,0))},
$iaY:1}
J.di.prototype={
cl:function(a,b){var u
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=C.h.gbC(b)
if(this.gbC(a)===u)return 0
if(this.gbC(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbC:function(a){return a===0?1/a<0:a<0},
ef:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.i(P.aB(""+a+".floor()"))},
ak:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.aB(""+a+".round()"))},
iE:function(a,b,c){if(C.h.cl(b,c)>0)throw H.i(H.bD(b))
if(this.cl(a,b)<0)return b
if(this.cl(a,c)>0)return c
return a},
jl:function(a,b){var u
if(b>20)throw H.i(P.b4(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbC(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
n:function(a,b){if(typeof b!=="number")throw H.i(H.bD(b))
return a*b},
eJ:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
a9:function(a,b){return(a|0)===a?a/b|0:this.hR(a,b)},
hR:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.i(P.aB("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
bi:function(a,b){var u
if(a>0)u=this.hO(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hO:function(a,b){return b>31?0:a>>>b},
$iw:1,
$iab:1}
J.dg.prototype={$iC:1}
J.fF.prototype={}
J.ch.prototype={
ck:function(a,b){if(b<0)throw H.i(H.bE(a,b))
if(b>=a.length)H.r(H.bE(a,b))
return a.charCodeAt(b)},
be:function(a,b){if(b>=a.length)throw H.i(H.bE(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.i(P.jr(b,null,null))
return a+b},
cT:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.i(P.dC(b,null))
if(b>c)throw H.i(P.dC(b,null))
if(c>a.length)throw H.i(P.dC(c,null))
return a.substring(b,c)},
cS:function(a,b){return this.cT(a,b,null)},
n:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.D)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ae:function(a,b){var u=b-a.length
if(u<=0)return a
return this.n(" ",u)+a},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ikc:1,
$io:1}
H.a8.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.j.ck(this.a,b)},
$adT:function(){return[P.C]},
$av:function(){return[P.C]},
$ae:function(){return[P.C]},
$ab:function(){return[P.C]}}
H.fh.prototype={}
H.dn.prototype={
gL:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.jT(s),q=r.gk(s)
if(t.b!==q)throw H.i(P.c9(s))
u=t.c
if(u>=q){t.saT(null)
return!1}t.saT(r.G(s,u));++t.c
return!0},
saT:function(a){this.d=H.E(a,H.x(this,0))},
$iaY:1}
H.fS.prototype={
gV:function(a){return new H.fT(J.c3(this.a),this.b,this.$ti)},
gk:function(a){return J.c4(this.a)},
G:function(a,b){return this.b.$1(J.k0(this.a,b))},
$ae:function(a,b){return[b]}}
H.fT.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.saT(u.c.$1(t.gL(t)))
return!0}u.saT(null)
return!1},
gL:function(a){return this.a},
saT:function(a){this.a=H.E(a,H.x(this,1))},
$aaY:function(a,b){return[b]}}
H.ip.prototype={
gV:function(a){return new H.iq(J.c3(this.a),this.b,this.$ti)}}
H.iq.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(H.z(t.$1(u.gL(u))))return!0
return!1},
gL:function(a){var u=this.a
return u.gL(u)}}
H.bN.prototype={}
H.dT.prototype={}
H.dS.prototype={}
H.hV.prototype={
ad:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hb.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fH.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.l(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.l(t.a)+")"
return s+r+"' on '"+u+"' ("+H.l(t.a)+")"}}
H.i6.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jq.prototype={
$1:function(a){if(!!J.a4(a).$ibr)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.ew.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iau:1}
H.c7.prototype={
i:function(a){return"Closure '"+H.bT(this).trim()+"'"},
$ijw:1,
gjo:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hL.prototype={}
H.hD.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c1(u)+"'"}}
H.c5.prototype={
u:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.c5))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cq(this.a)
else u=typeof t!=="object"?J.bI(t):H.cq(t)
return(u^H.cq(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bT(u)+"'")}}
H.hX.prototype={
i:function(a){return this.a}}
H.f2.prototype={
i:function(a){return this.a}}
H.hp.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.ir.prototype={
i:function(a){return"Assertion failed: "+P.dc(this.a)}}
H.aG.prototype={
gk:function(a){return this.a},
gaz:function(a){return new H.dm(this,[H.x(this,0)])},
dO:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.de(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.de(t,b)}else return s.iR(b)},
iR:function(a){var u=this.d
if(u==null)return!1
return this.cv(this.bP(u,J.bI(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bf(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bf(r,b)
s=t==null?null:t.b
return s}else return q.iS(b)},
iS:function(a){var u,t,s=this.d
if(s==null)return
u=this.bP(s,J.bI(a)&0x3ffffff)
t=this.cv(u,a)
if(t<0)return
return u[t].b},
a1:function(a,b,c){var u,t,s,r,q,p,o=this
H.E(b,H.x(o,0))
H.E(c,H.x(o,1))
if(typeof b==="string"){u=o.b
o.d4(u==null?o.b=o.bZ():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.d4(t==null?o.c=o.bZ():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bZ()
r=J.bI(b)&0x3ffffff
q=o.bP(s,r)
if(q==null)o.c7(s,r,[o.c_(b,c)])
else{p=o.cv(q,b)
if(p>=0)q[p].b=c
else q.push(o.c_(b,c))}}},
H:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.x(s,0),H.x(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.i(P.c9(s))
u=u.c}},
d4:function(a,b,c){var u,t=this
H.E(b,H.x(t,0))
H.E(c,H.x(t,1))
u=t.bf(a,b)
if(u==null)t.c7(a,b,t.c_(b,c))
else u.b=c},
c_:function(a,b){var u=this,t=new H.fL(H.E(a,H.x(u,0)),H.E(b,H.x(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
cv:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.F(a[t].a,b))return t
return-1},
i:function(a){return P.k9(this)},
bf:function(a,b){return a[b]},
bP:function(a,b){return a[b]},
c7:function(a,b,c){a[b]=c},
fi:function(a,b){delete a[b]},
de:function(a,b){return this.bf(a,b)!=null},
bZ:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c7(t,u,t)
this.fi(t,u)
return t}}
H.fL.prototype={}
H.dm.prototype={
gk:function(a){return this.a.a},
gV:function(a){var u=this.a,t=new H.fM(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fM.prototype={
gL:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.c9(t))
else{t=u.c
if(t==null){u.sdh(null)
return!1}else{u.sdh(t.a)
u.c=u.c.c
return!0}}},
sdh:function(a){this.d=H.E(a,H.x(this,0))},
$iaY:1}
H.ja.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.jb.prototype={
$2:function(a,b){return this.a(a,b)},
$S:28}
H.jc.prototype={
$1:function(a){return this.a(H.W(a))},
$S:29}
H.fG.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikc:1}
H.cn.prototype={}
H.dv.prototype={
gk:function(a){return a.length},
$iG:1,
$aG:function(){}}
H.cm.prototype={
j:function(a,b){H.bB(b,a,a.length)
return a[b]},
$abN:function(){return[P.w]},
$av:function(){return[P.w]},
$ie:1,
$ae:function(){return[P.w]},
$ib:1,
$ab:function(){return[P.w]}}
H.dw.prototype={
$abN:function(){return[P.C]},
$av:function(){return[P.C]},
$ie:1,
$ae:function(){return[P.C]},
$ib:1,
$ab:function(){return[P.C]}}
H.h5.prototype={
j:function(a,b){H.bB(b,a,a.length)
return a[b]}}
H.h6.prototype={
j:function(a,b){H.bB(b,a,a.length)
return a[b]}}
H.h7.prototype={
j:function(a,b){H.bB(b,a,a.length)
return a[b]}}
H.h8.prototype={
j:function(a,b){H.bB(b,a,a.length)
return a[b]}}
H.h9.prototype={
j:function(a,b){H.bB(b,a,a.length)
return a[b]}}
H.dx.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bB(b,a,a.length)
return a[b]}}
H.ha.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bB(b,a,a.length)
return a[b]}}
H.cH.prototype={}
H.cI.prototype={}
H.cJ.prototype={}
H.cK.prototype={}
P.it.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:14}
P.is.prototype={
$1:function(a){var u,t
this.a.a=H.m(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:27}
P.iu.prototype={
$0:function(){this.a.$0()},
$S:3}
P.iv.prototype={
$0:function(){this.a.$0()},
$S:3}
P.iY.prototype={
f3:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cT(new P.iZ(this,b),0),a)
else throw H.i(P.aB("`setTimeout()` not found."))}}
P.iZ.prototype={
$0:function(){this.b.$0()},
$S:4}
P.bc.prototype={
iV:function(a){if(this.c!==6)return!0
return this.b.b.cH(H.m(this.d,{func:1,ret:P.a7,args:[P.U]}),a.a,P.a7,P.U)},
iQ:function(a){var u=this.e,t=P.U,s={futureOr:1,type:H.x(this,1)},r=this.b.b
if(H.eQ(u,{func:1,args:[P.U,P.au]}))return H.jS(r.jg(u,a.a,a.b,null,t,P.au),s)
else return H.jS(r.cH(H.m(u,{func:1,args:[P.U]}),a.a,null,t),s)}}
P.aD.prototype={
eB:function(a,b,c){var u,t,s,r=H.x(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a3
if(u!==C.k){u.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.m4(b,u)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aD($.a3,[c])
s=b==null?1:3
this.d5(new P.bc(t,s,a,b,[r,c]))
return t},
jj:function(a,b){return this.eB(a,null,b)},
d5:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.j(t.c,"$ibc")
t.c=a}else{if(s===2){u=H.j(t.c,"$iaD")
s=u.a
if(s<4){u.d5(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.j5(null,null,s,H.m(new P.iC(t,a),{func:1,ret:-1}))}},
du:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.j(p.c,"$ibc")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.j(p.c,"$iaD")
u=q.a
if(u<4){q.du(a)
return}p.a=u
p.c=q.c}o.a=p.bh(a)
u=p.b
u.toString
P.j5(null,null,u,H.m(new P.iG(o,p),{func:1,ret:-1}))}},
c2:function(){var u=H.j(this.c,"$ibc")
this.c=null
return this.bh(u)},
bh:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d9:function(a){var u,t,s=this,r=H.x(s,0)
H.jS(a,{futureOr:1,type:r})
u=s.$ti
if(H.jP(a,"$icf",u,"$acf"))if(H.jP(a,"$iaD",u,null))P.ky(a,s)
else P.lY(a,s)
else{t=s.c2()
H.E(a,r)
s.a=4
s.c=a
P.cF(s,t)}},
da:function(a,b){var u,t=this
H.j(b,"$iau")
u=t.c2()
t.a=8
t.c=new P.am(a,b)
P.cF(t,u)},
$icf:1}
P.iC.prototype={
$0:function(){P.cF(this.a,this.b)},
$S:3}
P.iG.prototype={
$0:function(){P.cF(this.b,this.a.a)},
$S:3}
P.iD.prototype={
$1:function(a){var u=this.a
u.a=0
u.d9(a)},
$S:14}
P.iE.prototype={
$2:function(a,b){H.j(b,"$iau")
this.a.da(a,b)},
$1:function(a){return this.$2(a,null)},
$S:42}
P.iF.prototype={
$0:function(){this.a.da(this.b,this.c)},
$S:3}
P.iJ.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eA(H.m(s.d,{func:1}),null)}catch(r){u=H.bG(r)
t=H.c_(r)
if(o.d){s=H.j(o.a.a.c,"$iam").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.j(o.a.a.c,"$iam")
else q.b=new P.am(u,t)
q.a=!0
return}if(!!J.a4(n).$icf){if(n instanceof P.aD&&n.a>=4){if(n.a===8){s=o.b
s.b=H.j(n.c,"$iam")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jj(new P.iK(p),null)
s.a=!1}},
$S:4}
P.iK.prototype={
$1:function(a){return this.a},
$S:34}
P.iI.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.x(s,0)
q=H.E(n.c,r)
p=H.x(s,1)
n.a.b=s.b.b.cH(H.m(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.bG(o)
t=H.c_(o)
s=n.a
s.b=new P.am(u,t)
s.a=!0}},
$S:4}
P.iH.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.j(m.a.a.c,"$iam")
r=m.c
if(H.z(r.iV(u))&&r.e!=null){q=m.b
q.b=r.iQ(u)
q.a=!1}}catch(p){t=H.bG(p)
s=H.c_(p)
r=H.j(m.a.a.c,"$iam")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.am(t,s)
n.a=!0}},
$S:4}
P.e0.prototype={}
P.hG.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.aD($.a3,[P.C])
r.a=0
u=H.x(s,0)
t=H.m(new P.hI(r,s),{func:1,ret:-1,args:[u]})
H.m(new P.hJ(r,q),{func:1,ret:-1})
W.ad(s.a,s.b,t,!1,u)
return q}}
P.hI.prototype={
$1:function(a){H.E(a,H.x(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.x(this.b,0)]}}}
P.hJ.prototype={
$0:function(){this.b.d9(this.a.a)},
$S:3}
P.ct.prototype={}
P.hH.prototype={}
P.am.prototype={
i:function(a){return H.l(this.a)},
$ibr:1}
P.j0.prototype={$in6:1}
P.j4.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dy():s
s=this.b
if(s==null)throw H.i(t)
u=H.i(t)
u.stack=s.i(0)
throw u},
$S:3}
P.iR.prototype={
jh:function(a){var u,t,s,r=null
H.m(a,{func:1,ret:-1})
try{if(C.k===$.a3){a.$0()
return}P.kD(r,r,this,a,-1)}catch(s){u=H.bG(s)
t=H.c_(s)
P.j3(r,r,this,u,H.j(t,"$iau"))}},
ji:function(a,b,c){var u,t,s,r=null
H.m(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.k===$.a3){a.$1(b)
return}P.kE(r,r,this,a,b,-1,c)}catch(s){u=H.bG(s)
t=H.c_(s)
P.j3(r,r,this,u,H.j(t,"$iau"))}},
iC:function(a,b){return new P.iT(this,H.m(a,{func:1,ret:b}),b)},
cg:function(a){return new P.iS(this,H.m(a,{func:1,ret:-1}))},
iD:function(a,b){return new P.iU(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
eA:function(a,b){H.m(a,{func:1,ret:b})
if($.a3===C.k)return a.$0()
return P.kD(null,null,this,a,b)},
cH:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.a3===C.k)return a.$1(b)
return P.kE(null,null,this,a,b,c,d)},
jg:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.a3===C.k)return a.$2(b,c)
return P.m5(null,null,this,a,b,c,d,e,f)}}
P.iT.prototype={
$0:function(){return this.a.eA(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iS.prototype={
$0:function(){return this.a.jh(this.b)},
$S:4}
P.iU.prototype={
$1:function(a){var u=this.c
return this.a.ji(this.b,H.E(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iO.prototype={
gV:function(a){return P.kA(this,this.r,H.x(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.E(b,H.x(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.d7(u==null?s.b=P.jK():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.d7(t==null?s.c=P.jK():t,b)}else return s.f5(0,b)},
f5:function(a,b){var u,t,s,r=this
H.E(b,H.x(r,0))
u=r.d
if(u==null)u=r.d=P.jK()
t=r.dc(b)
s=u[t]
if(s==null)u[t]=[r.bL(b)]
else{if(r.di(s,b)>=0)return!1
s.push(r.bL(b))}return!0},
w:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hz(this.c,b)
else return this.hy(0,b)},
hy:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.fs(r,b)
t=s.di(u,b)
if(t<0)return!1
s.dD(u.splice(t,1)[0])
return!0},
d7:function(a,b){H.E(b,H.x(this,0))
if(H.j(a[b],"$icG")!=null)return!1
a[b]=this.bL(b)
return!0},
hz:function(a,b){var u
if(a==null)return!1
u=H.j(a[b],"$icG")
if(u==null)return!1
this.dD(u)
delete a[b]
return!0},
dk:function(){this.r=1073741823&this.r+1},
bL:function(a){var u,t=this,s=new P.cG(H.E(a,H.x(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dk()
return s},
dD:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dk()},
dc:function(a){return J.bI(a)&1073741823},
fs:function(a,b){return a[this.dc(b)]},
di:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.F(a[t].a,b))return t
return-1}}
P.cG.prototype={}
P.iP.prototype={
gL:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.c9(t))
else{t=u.c
if(t==null){u.sd8(null)
return!1}else{u.sd8(H.E(t.a,H.x(u,0)))
u.c=u.c.b
return!0}}},
sd8:function(a){this.d=H.E(a,H.x(this,0))},
$iaY:1}
P.fN.prototype={$ie:1,$ib:1}
P.v.prototype={
gV:function(a){return new H.dn(a,this.gk(a),[H.cU(this,a,"v",0)])},
G:function(a,b){return this.j(a,b)},
jk:function(a,b){var u,t=this,s=H.c([],[H.cU(t,a,"v",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.a1(s,u,t.j(a,u))
return s},
cK:function(a){return this.jk(a,!0)},
i:function(a){return P.jx(a,"[","]")}}
P.fQ.prototype={}
P.fR.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.l(a)
t.a=u+": "
t.a+=H.l(b)},
$S:21}
P.ag.prototype={
H:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.cU(s,a,"ag",0),H.cU(s,a,"ag",1)]})
for(u=J.c3(s.gaz(a));u.A();){t=u.gL(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.c4(this.gaz(a))},
i:function(a){return P.k9(a)},
$iP:1}
P.iV.prototype={
i:function(a){return P.jx(this,"{","}")},
G:function(a,b){var u,t,s,r=this
P.ki(b,"index")
for(u=P.kA(r,r.r,H.x(r,0)),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.i(P.Y(b,r,"index",null,t))},
$ie:1,
$ikm:1}
P.ef.prototype={}
P.c8.prototype={}
P.d5.prototype={}
P.fi.prototype={
$ac8:function(){return[P.o,[P.b,P.C]]}}
P.i9.prototype={}
P.ia.prototype={
iH:function(a){var u,t,s=P.kj(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.j_(u)
if(t.fq(a,0,s)!==s)t.dF(C.j.ck(a,s-1),0)
return new Uint8Array(u.subarray(0,H.m0(0,t.b,u.length)))},
$ad5:function(){return[P.o,[P.b,P.C]]}}
P.j_.prototype={
dF:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fq:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.j.ck(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.j.be(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dF(r,C.j.be(a,p)))s=p}else if(r<=2047){q=n.b
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
P.a7.prototype={}
P.aU.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.aU&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.h.bi(u,30))&1073741823},
i:function(a){var u=this,t=P.lp(H.lK(u)),s=P.d6(H.lI(u)),r=P.d6(H.lE(u)),q=P.d6(H.lF(u)),p=P.d6(H.lH(u)),o=P.d6(H.lJ(u)),n=P.lq(H.lG(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.w.prototype={}
P.bM.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.bM&&this.a===b.a},
gI:function(a){return C.h.gI(this.a)},
i:function(a){var u,t,s,r=new P.fg(),q=this.a
if(q<0)return"-"+new P.bM(0-q).i(0)
u=r.$1(C.h.a9(q,6e7)%60)
t=r.$1(C.h.a9(q,1e6)%60)
s=new P.ff().$1(q%1e6)
return""+C.h.a9(q,36e8)+":"+H.l(u)+":"+H.l(t)+"."+H.l(s)}}
P.ff.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:13}
P.fg.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:13}
P.br.prototype={}
P.eV.prototype={
i:function(a){return"Assertion failed"}}
P.dy.prototype={
i:function(a){return"Throw of null."}}
P.bd.prototype={
gbN:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbM:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbN()+o+u
if(!q.a)return t
s=q.gbM()
r=P.dc(q.b)
return t+s+": "+r}}
P.bU.prototype={
gbN:function(){return"RangeError"},
gbM:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.l(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.l(s)
else if(t>s)u=": Not in range "+H.l(s)+".."+H.l(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.l(s)}return u}}
P.fx.prototype={
gbN:function(){return"RangeError"},
gbM:function(){var u,t=H.ae(this.b)
if(typeof t!=="number")return t.aE()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.l(u)},
gk:function(a){return this.f}}
P.i7.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.i5.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hC.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f5.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dc(u)+"."}}
P.he.prototype={
i:function(a){return"Out of Memory"},
$ibr:1}
P.dG.prototype={
i:function(a){return"Stack Overflow"},
$ibr:1}
P.fa.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e8.prototype={
i:function(a){return"Exception: "+this.a}}
P.ft.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.j.cT(s,0,75)+"...":s
return t+"\n"+r}}
P.C.prototype={}
P.e.prototype={
gk:function(a){var u,t=this.gV(this)
for(u=0;t.A();)++u
return u},
G:function(a,b){var u,t,s
P.ki(b,"index")
for(u=this.gV(this),t=0;u.A();){s=u.gL(u)
if(b===t)return s;++t}throw H.i(P.Y(b,this,"index",null,t))},
i:function(a){return P.lu(this,"(",")")}}
P.aY.prototype={}
P.b.prototype={$ie:1}
P.P.prototype={}
P.L.prototype={
gI:function(a){return P.U.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.ab.prototype={}
P.U.prototype={constructor:P.U,$iU:1,
u:function(a,b){return this===b},
gI:function(a){return H.cq(this)},
i:function(a){return"Instance of '"+H.bT(this)+"'"},
toString:function(){return this.i(this)}}
P.au.prototype={}
P.o.prototype={$ikc:1}
P.bx.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.t.prototype={}
W.eR.prototype={
gk:function(a){return a.length}}
W.eT.prototype={
i:function(a){return String(a)}}
W.eU.prototype={
i:function(a){return String(a)}}
W.cX.prototype={}
W.bK.prototype={
eI:function(a,b,c){var u=a.getContext(b,P.mc(c))
return u},
$ibK:1}
W.bq.prototype={
gk:function(a){return a.length}}
W.ca.prototype={$ica:1}
W.f6.prototype={
gk:function(a){return a.length}}
W.V.prototype={$iV:1}
W.cb.prototype={
gk:function(a){return a.length}}
W.f7.prototype={}
W.aS.prototype={}
W.aT.prototype={}
W.f8.prototype={
gk:function(a){return a.length}}
W.f9.prototype={
gk:function(a){return a.length}}
W.fb.prototype={
gk:function(a){return a.length}}
W.d8.prototype={$id8:1}
W.fc.prototype={
i:function(a){return String(a)}}
W.d9.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[[P.at,P.ab]]},
$av:function(){return[[P.at,P.ab]]},
$ie:1,
$ae:function(){return[[P.at,P.ab]]},
$ib:1,
$ab:function(){return[[P.at,P.ab]]},
$ay:function(){return[[P.at,P.ab]]}}
W.da.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaD(a))+" x "+H.l(this.gay(a))},
u:function(a,b){var u
if(b==null)return!1
u=J.a4(b)
if(!u.$iat)return!1
return a.left===u.gbD(b)&&a.top===u.gbG(b)&&this.gaD(a)===u.gaD(b)&&this.gay(a)===u.gay(b)},
gI:function(a){return W.kz(C.i.gI(a.left),C.i.gI(a.top),C.i.gI(this.gaD(a)),C.i.gI(this.gay(a)))},
gdK:function(a){return a.bottom},
gay:function(a){return a.height},
gbD:function(a){return a.left},
gbE:function(a){return a.right},
gbG:function(a){return a.top},
gaD:function(a){return a.width},
$iat:1,
$aat:function(){return[P.ab]}}
W.fd.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[P.o]},
$av:function(){return[P.o]},
$ie:1,
$ae:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$ay:function(){return[P.o]}}
W.fe.prototype={
gk:function(a){return a.length}}
W.ix.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.j(u[b],"$ia9")},
h:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var u=this.cK(this)
return new J.al(u,u.length,[H.x(u,0)])},
$av:function(){return[W.a9]},
$ae:function(){return[W.a9]},
$ab:function(){return[W.a9]}}
W.a9.prototype={
gdM:function(a){return new W.ix(a,a.children)},
gdN:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.aE()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aE()
if(r<0)r=-r*0
return new P.at(u,t,s,r,[P.ab])},
i:function(a){return a.localName},
$ia9:1}
W.n.prototype={$in:1}
W.d.prototype={
iw:function(a,b,c,d){H.m(c,{func:1,args:[W.n]})
if(c!=null)this.f6(a,b,c,!1)},
f6:function(a,b,c,d){return a.addEventListener(b,H.cT(H.m(c,{func:1,args:[W.n]}),1),!1)},
$id:1}
W.aV.prototype={$iaV:1}
W.fn.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aV]},
$av:function(){return[W.aV]},
$ie:1,
$ae:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$ay:function(){return[W.aV]}}
W.fo.prototype={
gk:function(a){return a.length}}
W.fs.prototype={
gk:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.fw.prototype={
gk:function(a){return a.length}}
W.bO.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.H]},
$av:function(){return[W.H]},
$ie:1,
$ae:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$ibO:1,
$ay:function(){return[W.H]}}
W.b_.prototype={$ib_:1}
W.fO.prototype={
i:function(a){return String(a)}}
W.fZ.prototype={
gk:function(a){return a.length}}
W.h_.prototype={
j:function(a,b){return P.bl(a.get(H.W(b)))},
H:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
gaz:function(a){var u=H.c([],[P.o])
this.H(a,new W.h0(u))
return u},
gk:function(a){return a.size},
$aag:function(){return[P.o,null]},
$iP:1,
$aP:function(){return[P.o,null]}}
W.h0.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.h1.prototype={
j:function(a,b){return P.bl(a.get(H.W(b)))},
H:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
gaz:function(a){var u=H.c([],[P.o])
this.H(a,new W.h2(u))
return u},
gk:function(a){return a.size},
$aag:function(){return[P.o,null]},
$iP:1,
$aP:function(){return[P.o,null]}}
W.h2.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.b2.prototype={$ib2:1}
W.h3.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b2]},
$av:function(){return[W.b2]},
$ie:1,
$ae:function(){return[W.b2]},
$ib:1,
$ab:function(){return[W.b2]},
$ay:function(){return[W.b2]}}
W.ac.prototype={$iac:1}
W.iw.prototype={
gV:function(a){var u=this.a.childNodes
return new W.dd(u,u.length,[H.cU(C.H,u,"y",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$av:function(){return[W.H]},
$ae:function(){return[W.H]},
$ab:function(){return[W.H]}}
W.H.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.eM(a):u},
$iH:1}
W.co.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.H]},
$av:function(){return[W.H]},
$ie:1,
$ae:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$ay:function(){return[W.H]}}
W.b3.prototype={$ib3:1,
gk:function(a){return a.length}}
W.hg.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b3]},
$av:function(){return[W.b3]},
$ie:1,
$ae:function(){return[W.b3]},
$ib:1,
$ab:function(){return[W.b3]},
$ay:function(){return[W.b3]}}
W.hn.prototype={
j:function(a,b){return P.bl(a.get(H.W(b)))},
H:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
gaz:function(a){var u=H.c([],[P.o])
this.H(a,new W.ho(u))
return u},
gk:function(a){return a.size},
$aag:function(){return[P.o,null]},
$iP:1,
$aP:function(){return[P.o,null]}}
W.ho.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hq.prototype={
gk:function(a){return a.length}}
W.b5.prototype={$ib5:1}
W.hz.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b5]},
$av:function(){return[W.b5]},
$ie:1,
$ae:function(){return[W.b5]},
$ib:1,
$ab:function(){return[W.b5]},
$ay:function(){return[W.b5]}}
W.b6.prototype={$ib6:1}
W.hA.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b6]},
$av:function(){return[W.b6]},
$ie:1,
$ae:function(){return[W.b6]},
$ib:1,
$ab:function(){return[W.b6]},
$ay:function(){return[W.b6]}}
W.b7.prototype={$ib7:1,
gk:function(a){return a.length}}
W.hE.prototype={
j:function(a,b){return a.getItem(H.W(b))},
H:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.o,P.o]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaz:function(a){var u=H.c([],[P.o])
this.H(a,new W.hF(u))
return u},
gk:function(a){return a.length},
$aag:function(){return[P.o,P.o]},
$iP:1,
$aP:function(){return[P.o,P.o]}}
W.hF.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:24}
W.aJ.prototype={$iaJ:1}
W.b8.prototype={$ib8:1}
W.aK.prototype={$iaK:1}
W.hM.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aK]},
$av:function(){return[W.aK]},
$ie:1,
$ae:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$ay:function(){return[W.aK]}}
W.hN.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b8]},
$av:function(){return[W.b8]},
$ie:1,
$ae:function(){return[W.b8]},
$ib:1,
$ab:function(){return[W.b8]},
$ay:function(){return[W.b8]}}
W.hP.prototype={
gk:function(a){return a.length}}
W.b9.prototype={$ib9:1}
W.aL.prototype={$iaL:1}
W.hS.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b9]},
$av:function(){return[W.b9]},
$ie:1,
$ae:function(){return[W.b9]},
$ib:1,
$ab:function(){return[W.b9]},
$ay:function(){return[W.b9]}}
W.hT.prototype={
gk:function(a){return a.length}}
W.bz.prototype={}
W.i8.prototype={
i:function(a){return String(a)}}
W.io.prototype={
gk:function(a){return a.length}}
W.bb.prototype={
giK:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.aB("deltaY is not supported"))},
giJ:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.aB("deltaX is not supported"))},
$ibb:1}
W.cE.prototype={
hD:function(a,b){return a.requestAnimationFrame(H.cT(H.m(b,{func:1,ret:-1,args:[P.ab]}),1))},
fk:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iy.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.V]},
$av:function(){return[W.V]},
$ie:1,
$ae:function(){return[W.V]},
$ib:1,
$ab:function(){return[W.V]},
$ay:function(){return[W.V]}}
W.e3.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
u:function(a,b){var u
if(b==null)return!1
u=J.a4(b)
if(!u.$iat)return!1
return a.left===u.gbD(b)&&a.top===u.gbG(b)&&a.width===u.gaD(b)&&a.height===u.gay(b)},
gI:function(a){return W.kz(C.i.gI(a.left),C.i.gI(a.top),C.i.gI(a.width),C.i.gI(a.height))},
gay:function(a){return a.height},
gaD:function(a){return a.width}}
W.iL.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aW]},
$av:function(){return[W.aW]},
$ie:1,
$ae:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$ay:function(){return[W.aW]}}
W.ek.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.H]},
$av:function(){return[W.H]},
$ie:1,
$ae:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$ay:function(){return[W.H]}}
W.iW.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b7]},
$av:function(){return[W.b7]},
$ie:1,
$ae:function(){return[W.b7]},
$ib:1,
$ab:function(){return[W.b7]},
$ay:function(){return[W.b7]}}
W.iX.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aJ]},
$av:function(){return[W.aJ]},
$ie:1,
$ae:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$ay:function(){return[W.aJ]}}
W.iz.prototype={}
W.jJ.prototype={}
W.iA.prototype={}
W.iB.prototype={
$1:function(a){return this.a.$1(H.j(a,"$in"))},
$S:25}
W.y.prototype={
gV:function(a){return new W.dd(a,this.gk(a),[H.cU(this,a,"y",0)])}}
W.dd.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdj(J.lg(u.a,t))
u.c=t
return!0}u.sdj(null)
u.c=s
return!1},
gL:function(a){return this.d},
sdj:function(a){this.d=H.E(a,H.x(this,0))},
$iaY:1}
W.e2.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.el.prototype={}
W.em.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.cL.prototype={}
W.cM.prototype={}
W.es.prototype={}
W.et.prototype={}
W.ex.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.cN.prototype={}
W.cO.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
P.j6.prototype={
$2:function(a,b){this.a[a]=b},
$S:21}
P.fp.prototype={
gbQ:function(){var u=this.b,t=H.aF(u,"v",0),s=W.a9
return new H.fS(new H.ip(u,H.m(new P.fq(),{func:1,ret:P.a7,args:[t]}),[t]),H.m(new P.fr(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.c4(this.gbQ().a)},
j:function(a,b){var u=this.gbQ()
return u.b.$1(J.k0(u.a,b))},
gV:function(a){var u=P.k8(this.gbQ(),!1,W.a9)
return new J.al(u,u.length,[H.x(u,0)])},
$av:function(){return[W.a9]},
$ae:function(){return[W.a9]},
$ab:function(){return[W.a9]}}
P.fq.prototype={
$1:function(a){return!!J.a4(H.j(a,"$iH")).$ia9},
$S:31}
P.fr.prototype={
$1:function(a){return H.f(H.j(a,"$iH"),"$ia9")},
$S:26}
P.iQ.prototype={
gbE:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.A(t)
return H.E(u+t,H.x(this,0))},
gdK:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.A(t)
return H.E(u+t,H.x(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.l(u.a)+", "+H.l(u.b)+") "+H.l(u.c)+" x "+H.l(u.d)},
u:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.a4(b)
if(!!u.$iat){t=p.a
if(t==u.gbD(b)){s=p.b
if(s==u.gbG(b)){r=p.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.A(r)
q=H.x(p,0)
if(H.E(t+r,q)===u.gbE(b)){t=p.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.A(t)
u=H.E(s+t,q)===u.gdK(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t=this,s=t.a,r=J.bI(s),q=t.b,p=J.bI(q),o=t.c
if(typeof s!=="number")return s.B()
if(typeof o!=="number")return H.A(o)
u=H.x(t,0)
o=C.h.gI(H.E(s+o,u))
s=t.d
if(typeof q!=="number")return q.B()
if(typeof s!=="number")return H.A(s)
u=C.h.gI(H.E(q+s,u))
return P.lZ(P.iN(P.iN(P.iN(P.iN(0,r),p),o),u))}}
P.at.prototype={
gbD:function(a){return this.a},
gbG:function(a){return this.b},
gaD:function(a){return this.c},
gay:function(a){return this.d}}
P.be.prototype={$ibe:1}
P.fJ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.j(a,b)},
$av:function(){return[P.be]},
$ie:1,
$ae:function(){return[P.be]},
$ib:1,
$ab:function(){return[P.be]},
$ay:function(){return[P.be]}}
P.bi.prototype={$ibi:1}
P.hc.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.j(a,b)},
$av:function(){return[P.bi]},
$ie:1,
$ae:function(){return[P.bi]},
$ib:1,
$ab:function(){return[P.bi]},
$ay:function(){return[P.bi]}}
P.hi.prototype={
gk:function(a){return a.length}}
P.hK.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.j(a,b)},
$av:function(){return[P.o]},
$ie:1,
$ae:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$ay:function(){return[P.o]}}
P.q.prototype={
gdM:function(a){return new P.fp(a,new W.iw(a))}}
P.bj.prototype={$ibj:1}
P.hU.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.j(a,b)},
$av:function(){return[P.bj]},
$ie:1,
$ae:function(){return[P.bj]},
$ib:1,
$ab:function(){return[P.bj]},
$ay:function(){return[P.bj]}}
P.ed.prototype={}
P.ee.prototype={}
P.en.prototype={}
P.eo.prototype={}
P.ey.prototype={}
P.ez.prototype={}
P.eE.prototype={}
P.eF.prototype={}
P.eX.prototype={
gk:function(a){return a.length}}
P.eY.prototype={
j:function(a,b){return P.bl(a.get(H.W(b)))},
H:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
gaz:function(a){var u=H.c([],[P.o])
this.H(a,new P.eZ(u))
return u},
gk:function(a){return a.size},
$aag:function(){return[P.o,null]},
$iP:1,
$aP:function(){return[P.o,null]}}
P.eZ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
P.f_.prototype={
gk:function(a){return a.length}}
P.bJ.prototype={}
P.hd.prototype={
gk:function(a){return a.length}}
P.e1.prototype={}
P.cY.prototype={$icY:1}
P.dB.prototype={$idB:1}
P.bV.prototype={
K:function(a,b,c){return a.uniform1f(b,c)},
a0:function(a,b,c){return a.uniform1i(b,c)},
t:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
jn:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eD:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eE:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibV:1}
P.dE.prototype={$idE:1}
P.dQ.prototype={$idQ:1}
P.hB.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return P.bl(a.item(b))},
G:function(a,b){return this.j(a,b)},
$av:function(){return[[P.P,,,]]},
$ie:1,
$ae:function(){return[[P.P,,,]]},
$ib:1,
$ab:function(){return[[P.P,,,]]},
$ay:function(){return[[P.P,,,]]}}
P.eu.prototype={}
P.ev.prototype={}
O.a1.prototype={
bc:function(a){var u=this
u.sfz(H.c([],[a]))
u.sds(null)
u.sdm(null)
u.sdt(null)},
cO:function(a,b,c){var u=this,t=H.aF(u,"a1",0)
H.m(b,{func:1,ret:P.a7,args:[[P.e,t]]})
t={func:1,ret:-1,args:[P.C,[P.e,t]]}
H.m(a,t)
H.m(c,t)
u.sds(b)
u.sdm(a)
u.sdt(c)},
aS:function(a,b){return this.cO(a,null,b)},
dr:function(a){var u
H.k(a,"$ie",[H.aF(this,"a1",0)],"$ae")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dl:function(a,b){var u
H.k(b,"$ie",[H.aF(this,"a1",0)],"$ae")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.al(u,u.length,[H.x(u,0)])},
G:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aF(s,"a1",0)
H.E(b,r)
r=[r]
if(H.z(s.dr(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.dl(t,H.c([b],r))}},
ca:function(a,b){var u,t,s=this
H.k(b,"$ie",[H.aF(s,"a1",0)],"$ae")
if(H.z(s.dr(b))){u=s.a
t=u.length
C.a.ca(u,b)
s.dl(t,b)}},
sfz:function(a){this.a=H.k(a,"$ib",[H.aF(this,"a1",0)],"$ab")},
sds:function(a){this.b=H.m(a,{func:1,ret:P.a7,args:[[P.e,H.aF(this,"a1",0)]]})},
sdm:function(a){this.c=H.m(a,{func:1,ret:-1,args:[P.C,[P.e,H.aF(this,"a1",0)]]})},
sdt:function(a){H.m(a,{func:1,ret:-1,args:[P.C,[P.e,H.aF(this,"a1",0)]]})},
$ie:1}
O.ci.prototype={
gk:function(a){return this.a.length},
gq:function(){var u=this.b
return u==null?this.b=D.T():u},
aF:function(){var u=this.b
if(u!=null)u.D(null)},
gJ:function(a){var u=this.a
if(u.length>0)return C.a.gcw(u)
else return V.ck()},
ev:function(a){var u=this.a
if(a==null)C.a.h(u,V.ck())
else C.a.h(u,a)
this.aF()},
cE:function(){var u=this.a
if(u.length>0){u.pop()
this.aF()}},
sbR:function(a){this.a=H.k(a,"$ib",[V.ah],"$ab")}}
E.f0.prototype={}
E.an.prototype={
d6:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.al(u,u.length,[H.x(u,0)]);u.A();){t=u.d
if(t.f==null)t.d6()}},
sa2:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gq().w(0,s.geo())
u=s.c
if(u!=null)u.gq().h(0,s.geo())
t=new D.I("shape",r,s.c,[F.ap])
t.b=!0
s.ai(t)}},
sa6:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gq().w(0,s.geq())
u=s.f
s.f=a
if(a!=null)a.gq().h(0,s.geq())
s.d6()
t=new D.I("technique",u,s.f,[O.by])
t.b=!0
s.ai(t)}},
sW:function(a){var u,t,s=this
if(!J.F(s.r,a)){u=s.r
if(u!=null)u.gq().w(0,s.gem())
if(a!=null)a.gq().h(0,s.gem())
s.r=a
t=new D.I("mover",u,a,[U.aa])
t.b=!0
s.ai(t)}},
aa:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aR(0,b,s):null
if(!J.F(q,s.x)){u=s.x
s.x=q
t=new D.I("matrix",u,q,[V.ah])
t.b=!0
s.ai(t)}r=s.f
if(r!=null)r.aa(0,b)
for(r=s.y.a,r=new J.al(r,r.length,[H.x(r,0)]);r.A();)r.d.aa(0,b)},
aj:function(a){var u,t,s,r=this
if(!r.b)return
u=a.dx
t=r.x
u.toString
if(t==null)C.a.h(u.a,u.gJ(u))
else C.a.h(u.a,t.n(0,u.gJ(u)))
u.aF()
a.ew(r.f)
u=a.dy
s=(u&&C.a).gcw(u)
if(s!=null&&r.d!=null)s.ey(a,r)
for(u=r.y.a,u=new J.al(u,u.length,[H.x(u,0)]);u.A();)u.d.aj(a)
a.es()
a.dx.cE()},
gq:function(){var u=this.z
return u==null?this.z=D.T():u},
ai:function(a){var u=this.z
if(u!=null)u.D(a)},
P:function(){return this.ai(null)},
ep:function(a){H.j(a,"$iu")
this.e=null
this.ai(a)},
j2:function(){return this.ep(null)},
er:function(a){this.ai(H.j(a,"$iu"))},
j3:function(){return this.er(null)},
en:function(a){this.ai(H.j(a,"$iu"))},
j1:function(){return this.en(null)},
el:function(a){this.ai(H.j(a,"$iu"))},
iZ:function(){return this.el(null)},
iY:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ie",[E.an],"$ae")
for(u=b.length,t=this.gek(),s={func:1,ret:-1,args:[D.u]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.cd()
o.sam(null)
o.sbg(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sam(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.P()},
j0:function(a,b){var u,t
H.k(b,"$ie",[E.an],"$ae")
for(u=b.gV(b),t=this.gek();u.A();)u.gL(u).gq().w(0,t)
this.P()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seT:function(a,b){this.y=H.k(b,"$ia1",[E.an],"$aa1")},
$ibg:1}
E.hj.prototype={
eQ:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aU(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.ci()
t=[V.ah]
u.sbR(H.c([],t))
u.b=null
u.gq().h(0,new E.hk(s))
s.cy=u
u=new O.ci()
u.sbR(H.c([],t))
u.b=null
u.gq().h(0,new E.hl(s))
s.db=u
u=new O.ci()
u.sbR(H.c([],t))
u.b=null
u.gq().h(0,new E.hm(s))
s.dx=u
s.shS(H.c([],[O.by]))
u=s.dy;(u&&C.a).h(u,null)
s.shL(new H.aG([P.o,A.cr]))},
gjc:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gJ(s)
u=t.db
u=t.z=s.n(0,u.gJ(u))
s=u}return s},
geu:function(){var u,t=this,s=t.ch
if(s==null){s=t.gjc()
u=t.dx
u=t.ch=s.n(0,u.gJ(u))
s=u}return s},
geF:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.gJ(s)
u=t.dx
u=t.cx=s.n(0,u.gJ(u))
s=u}return s},
ew:function(a){var u=this.dy,t=a==null?(u&&C.a).gcw(u):a;(u&&C.a).h(u,t)},
es:function(){var u=this.dy
if(u.length>1)u.pop()},
dI:function(a){var u=a.b
if(u.length===0)throw H.i(P.p("May not cache a shader with no name."))
if(this.fr.dO(0,u))throw H.i(P.p('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.a1(0,u,a)},
shS:function(a){this.dy=H.k(a,"$ib",[O.by],"$ab")},
shL:function(a){this.fr=H.k(a,"$iP",[P.o,A.cr],"$aP")}}
E.hk.prototype={
$1:function(a){var u
H.j(a,"$iu")
u=this.a
u.ch=u.z=null},
$S:1}
E.hl.prototype={
$1:function(a){var u
H.j(a,"$iu")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:1}
E.hm.prototype={
$1:function(a){var u
H.j(a,"$iu")
u=this.a
u.cx=u.ch=null},
$S:1}
E.dM.prototype={
d1:function(a){H.j(a,"$iu")
this.ez()},
d0:function(){return this.d1(null)},
sbI:function(a){var u=this,t=u.d
if(t!==a){if(t!=null)t.gq().w(0,u.gd_())
u.d=a
a.gq().h(0,u.gd_())
u.d0()}},
dz:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.n()
if(typeof r!=="number")return H.A(r)
u=C.i.ef(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.n()
t=C.i.ef(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kp(C.o,s.gjf())}},
ez:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.m(new E.hO(this),{func:1,ret:-1,args:[P.ab]})
C.w.fk(u)
C.w.hD(u,W.kH(t,P.ab))}},
je:function(){var u,t,s,r,q,p=this
try{++p.cy
p.ch=!1
p.dz()
if(p.d!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aU(r,!1)
s.y=P.lr(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aF()
r=s.db
C.a.sk(r.a,0)
r.aF()
r=s.dx
C.a.sk(r.a,0)
r.aF()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
p.d.aj(p.e)}}catch(q){u=H.bG(q)
t=H.c_(q)
P.kV("Error: "+H.l(u))
P.kV("Stack: "+H.l(t))
throw H.i(u)}}}
E.hO.prototype={
$1:function(a){var u
H.ms(a)
u=this.a
if(u.ch){u.ch=!1
u.je()}},
$S:30}
Z.dZ.prototype={$imE:1}
Z.cZ.prototype={
an:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.bG(s)
t=P.p('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.l(u))
throw H.i(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.l(u.e)+"]"}}
Z.e_.prototype={$imF:1}
Z.bp.prototype={
ac:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
an:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].an(a)},
cL:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aj:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.h(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
j4:function(a){this.an(a)
this.aj(a)
this.cL(a)},
i:function(a){var u,t,s,r,q=[P.o],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.ax(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.C(p,", ")+"\nAttrs:   "+C.a.C(r,", ")},
sft:function(a){this.b=H.k(a,"$ib",[Z.bs],"$ab")},
$ilS:1}
Z.d_.prototype={
sfE:function(a){this.a=H.k(a,"$iP",[P.o,Z.bp],"$aP")},
$ilS:1}
Z.bs.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bT(this.c)+"'")+"]"}}
Z.aN.prototype={
gcR:function(a){var u=this.a,t=(u&$.aQ().a)!==0?3:0
if((u&$.aP().a)!==0)t+=3
if((u&$.aO().a)!==0)t+=3
if((u&$.bn().a)!==0)t+=2
if((u&$.bo().a)!==0)t+=3
if((u&$.bH().a)!==0)t+=3
if((u&$.cV().a)!==0)t+=4
if((u&$.c2().a)!==0)++t
return(u&$.bm().a)!==0?t+4:t},
iB:function(a){var u,t=$.aQ(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aP()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aO()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bo()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bH()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cV()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c2()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bm()
if((s&t.a)!==0)if(u===a)return t
return $.le()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aN))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.o]),t=this.a
if((t&$.aQ().a)!==0)C.a.h(u,"Pos")
if((t&$.aP().a)!==0)C.a.h(u,"Norm")
if((t&$.aO().a)!==0)C.a.h(u,"Binm")
if((t&$.bn().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bo().a)!==0)C.a.h(u,"TxtCube")
if((t&$.bH().a)!==0)C.a.h(u,"Clr3")
if((t&$.cV().a)!==0)C.a.h(u,"Clr4")
if((t&$.c2().a)!==0)C.a.h(u,"Weight")
if((t&$.bm().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.C(u,"|")}}
D.f3.prototype={}
D.cd.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.u]}
H.m(b,u)
if(this.a==null)this.sam(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
w:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[D.u]})
u=s.a
u=u==null?null:C.a.aO(u,b)
if(u===!0){u=s.a
t=(u&&C.a).w(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.aO(u,b)
if(u===!0){u=s.b
t=(u&&C.a).w(u,b)||t}return t},
D:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.H(P.k8(u,!0,{func:1,ret:-1,args:[D.u]}),new D.fk(q))
u=r.b
if(u!=null){r.sbg(H.c([],[{func:1,ret:-1,args:[D.u]}]))
C.a.H(u,new D.fl(q))}return!0},
aq:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.D(u)}}},
sam:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.u]}],"$ab")},
sbg:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.u]}],"$ab")}}
D.fk.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.u]})
u=this.a.a
if(u.b)a.$1(u)},
$S:16}
D.fl.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.u]})
u=this.a.a
if(u.b)a.$1(u)},
$S:16}
D.u.prototype={}
D.bt.prototype={}
D.bu.prototype={}
D.I.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.d0.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d0))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.dk.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dk))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.fI.prototype={
j9:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
j5:function(a){this.c=a.b
this.d.w(0,a.a)
return!1},
shx:function(a){this.d=H.k(a,"$ikm",[P.C],"$akm")}}
X.dp.prototype={}
X.fP.prototype={
aU:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.n()
u=b.b
t=q.ch
if(typeof u!=="number")return u.n()
s=o.B(0,new V.X(n*m,u*t))
t=q.a.gaN()
r=new X.az(a,V.aH(),q.x,t,s)
r.b=!0
q.z=new P.aU(p,!1)
q.x=s
return r},
cD:function(a,b){this.r=a.a
return!1},
b7:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eK()
if(typeof u!=="number")return u.eH()
this.r=(u&~t)>>>0
return!1},
b6:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.aU(a,b))
return!0},
ja:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaN()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.n()
q=a.b
p=o.cy
if(typeof q!=="number")return q.n()
t=new X.cl(new V.Q(s*r,q*p),u,t)
t.b=!0
n.D(t)
return!0},
h5:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dp(c,r.a.gaN(),b)
s.b=!0
t.D(s)
r.y=new P.aU(u,!1)
r.x=V.aH()}}
X.aw.prototype={
u:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aw))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.z(this.b)?"Alt+":""
return u+(H.z(this.c)?"Shift+":"")}}
X.az.prototype={}
X.h4.prototype={
bO:function(a,b,c){var u=this,t=new P.aU(Date.now(),!1),s=u.a.gaN(),r=new X.az(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cD:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.D(this.bO(a,b,!0))
return!0},
b7:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eK()
if(typeof t!=="number")return t.eH()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.D(u.bO(a,b,!0))
return!0},
b6:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.bO(a,b,!1))
return!0},
jb:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaN()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.n()
r=a.b
q=p.ch
if(typeof r!=="number")return r.n()
u=new X.cl(new V.Q(t*s,r*q),u,b)
u.b=!0
o.D(u)
return!0},
gb1:function(){var u=this.b
return u==null?this.b=D.T():u},
gaC:function(){var u=this.c
return u==null?this.c=D.T():u},
gb5:function(){var u=this.d
return u==null?this.d=D.T():u}}
X.cl.prototype={}
X.hh.prototype={}
X.dO.prototype={}
X.hR.prototype={
aU:function(a,b){var u,t,s,r,q=this
H.k(a,"$ib",[V.X],"$ab")
u=new P.aU(Date.now(),!1)
t=a.length>0?a[0]:V.aH()
s=q.a.gaN()
r=new X.dO(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
j8:function(a){var u
H.k(a,"$ib",[V.X],"$ab")
u=this.b
if(u==null)return!1
u.D(this.aU(a,!0))
return!0},
j6:function(a){var u
H.k(a,"$ib",[V.X],"$ab")
u=this.c
if(u==null)return!1
u.D(this.aU(a,!0))
return!0},
j7:function(a){var u
H.k(a,"$ib",[V.X],"$ab")
u=this.d
if(u==null)return!1
u.D(this.aU(a,!1))
return!0}}
X.dU.prototype={
gaN:function(){var u=this.a,t=C.n.gdN(u).c
t.toString
u=C.n.gdN(u).d
u.toString
return V.kk(0,0,t,u)},
df:function(a){var u=a.keyCode,t=H.z(a.ctrlKey)||H.z(a.metaKey)
return new X.dk(u,new X.aw(t,a.altKey,a.shiftKey))},
aK:function(a){var u=this.b,t=H.z(a.ctrlKey)||H.z(a.metaKey)
u.c=new X.aw(t,a.altKey,a.shiftKey)},
c8:function(a){var u=this.b,t=H.z(a.ctrlKey)||H.z(a.metaKey)
u.c=new X.aw(t,a.altKey,a.shiftKey)},
aw:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.F()
u=t.top
if(typeof r!=="number")return r.F()
return new V.X(s-q,r-u)},
aV:function(a){return new V.Q(a.movementX,a.movementY)},
c1:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.X])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
q=C.i.ak(r.pageX)
C.i.ak(r.pageY)
p=o.left
C.i.ak(r.pageX)
C.a.h(n,new V.X(q-p,C.i.ak(r.pageY)-o.top))}return n},
as:function(a){var u=a.buttons,t=H.z(a.ctrlKey)||H.z(a.metaKey)
return new X.d0(u,new X.aw(t,a.altKey,a.shiftKey))},
bS:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.F()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.F()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
h_:function(a){this.f=!0},
fO:function(a){this.f=!1},
fU:function(a){H.j(a,"$iac")
if(H.z(this.f)&&this.bS(a))a.preventDefault()},
h3:function(a){var u
H.j(a,"$ib_")
if(!H.z(this.f))return
u=this.df(a)
this.b.j9(u)},
h1:function(a){var u
H.j(a,"$ib_")
if(!H.z(this.f))return
u=this.df(a)
this.b.j5(u)},
h7:function(a){var u,t,s,r,q=this
H.j(a,"$iac")
u=q.a
u.focus()
q.f=!0
q.aK(a)
if(H.z(q.x)){t=q.as(a)
s=q.aV(a)
if(q.d.cD(t,s))a.preventDefault()
return}if(H.z(q.r)){q.y=a
u.requestPointerLock()
return}t=q.as(a)
r=q.aw(a)
if(q.c.cD(t,r))a.preventDefault()},
hb:function(a){var u,t,s,r=this
H.j(a,"$iac")
r.aK(a)
u=r.as(a)
if(H.z(r.x)){t=r.aV(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.aw(a)
if(r.c.b7(u,s))a.preventDefault()},
fY:function(a){var u,t,s,r=this
H.j(a,"$iac")
if(!r.bS(a)){r.aK(a)
u=r.as(a)
if(H.z(r.x)){t=r.aV(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.aw(a)
if(r.c.b7(u,s))a.preventDefault()}},
h9:function(a){var u,t,s,r=this
H.j(a,"$iac")
r.aK(a)
u=r.as(a)
if(H.z(r.x)){t=r.aV(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.aw(a)
if(r.c.b6(u,s))a.preventDefault()},
fW:function(a){var u,t,s,r=this
H.j(a,"$iac")
if(!r.bS(a)){r.aK(a)
u=r.as(a)
if(H.z(r.x)){t=r.aV(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.aw(a)
if(r.c.b6(u,s))a.preventDefault()}},
hd:function(a){var u,t,s=this
H.j(a,"$ibb")
s.aK(a)
u=new V.Q((a&&C.v).giJ(a),C.v.giK(a)).m(0,180)
if(H.z(s.x)){if(s.d.ja(u))a.preventDefault()
return}if(H.z(s.r))return
t=s.aw(a)
if(s.c.jb(u,t))a.preventDefault()},
hf:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.as(s.y)
t=s.aw(s.y)
s.d.h5(u,t,r)}},
hv:function(a){var u,t=this
H.j(a,"$iaL")
t.a.focus()
t.f=!0
t.c8(a)
u=t.c1(a)
if(t.e.j8(u))a.preventDefault()},
hr:function(a){var u
H.j(a,"$iaL")
this.c8(a)
u=this.c1(a)
if(this.e.j6(u))a.preventDefault()},
ht:function(a){var u
H.j(a,"$iaL")
this.c8(a)
u=this.c1(a)
if(this.e.j7(u))a.preventDefault()},
sfl:function(a){this.z=H.k(a,"$ib",[[P.ct,P.U]],"$ab")}}
D.d7.prototype={$ia6:1,$ibg:1}
D.a6.prototype={$ibg:1}
D.dl.prototype={
gq:function(){var u=this.Q
return u==null?this.Q=D.T():u},
d2:function(a){var u=this.Q
if(u!=null)u.D(a)},
dq:function(a){var u=this.ch
if(u!=null)u.D(a)},
h4:function(){return this.dq(null)},
hh:function(a){var u,t,s
H.k(a,"$ie",[D.a6],"$ae")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.D)(a),++t){s=a[t]
if(s==null||this.ff(s))return!1}return!0},
fI:function(a,b){var u,t,s,r,q=D.a6
H.k(b,"$ie",[q],"$ae")
for(u=b.length,t=this.gdn(),s=0;s<b.length;b.length===u||(0,H.D)(b),++s){r=H.j(b[s],"$ia6")
r.gq().h(0,t)}q=new D.bt([q])
q.b=!0
this.d2(q)},
hl:function(a,b){var u,t,s,r=D.a6
H.k(b,"$ie",[r],"$ae")
for(u=b.gV(b),t=this.gdn();u.A();){s=u.gL(u)
C.a.w(this.e,s)
s.gq().w(0,t)}r=new D.bu([r])
r.b=!0
this.d2(r)},
ff:function(a){var u=C.a.aO(this.e,a)
return u},
seU:function(a){this.e=H.k(a,"$ib",[D.d7],"$ab")},
seV:function(a){this.f=H.k(a,"$ib",[D.dA],"$ab")},
seW:function(a){this.r=H.k(a,"$ib",[D.dF],"$ab")},
seX:function(a){this.x=H.k(a,"$ib",[D.dJ],"$ab")},
seY:function(a){this.y=H.k(a,"$ib",[D.dK],"$ab")},
seZ:function(a){this.z=H.k(a,"$ib",[D.dL],"$ab")},
$ae:function(){return[D.a6]},
$aa1:function(){return[D.a6]}}
D.dA.prototype={$ia6:1,$ibg:1}
D.dF.prototype={$ia6:1,$ibg:1}
D.dJ.prototype={$ia6:1,$ibg:1}
D.dK.prototype={$ia6:1,$ibg:1}
D.dL.prototype={$ia6:1,$ibg:1}
V.a5.prototype={
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.O.prototype={
cK:function(a){var u=this
return H.c([u.a,u.b,u.c,u.d],[P.w])},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.fj.prototype={}
V.du.prototype={
a3:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.w])
return t},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.du))return!1
u=b.a
t=$.K().a
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
i:function(a){var u,t,s,r,q=this,p=[P.w],o=V.bZ(H.c([q.a,q.d,q.r],p),3,0),n=V.bZ(H.c([q.b,q.e,q.x],p),3,0),m=V.bZ(H.c([q.c,q.f,q.y],p),3,0)
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
V.ah.prototype={
a3:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.w])
return t},
eh:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.K().a)return V.ck()
u=1/b1
t=-n
s=-a0
return V.b1((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
n:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.b1(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
eC:function(a){var u=this
return new V.B(C.i.n(u.a,a.gdR(a))+C.i.n(u.b,a.gdS(a))+C.i.n(u.c,a.gdT()),C.i.n(u.e,a.gdR(a))+C.i.n(u.f,a.gdS(a))+C.i.n(u.r,a.gdT()),C.i.n(u.y,a.gdR(a))+C.i.n(u.z,a.gdS(a))+C.i.n(u.Q,a.gdT()))},
bb:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a2(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ah))return!1
u=b.a
t=$.K().a
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
i:function(a){return this.M()},
E:function(a){var u,t,s,r,q,p=this,o=[P.w],n=V.bZ(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bZ(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bZ(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bZ(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
M:function(){return this.E("")}}
V.X.prototype={
B:function(a,b){return new V.X(this.a+b.a,this.b+b.b)},
F:function(a,b){return new V.X(this.a-b.a,this.b-b.b)},
m:function(a,b){if(Math.abs(b-0)<$.K().a)return V.aH()
return new V.X(this.a/b,this.b/b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.a2.prototype={
B:function(a,b){return new V.a2(this.a+b.a,this.b+b.b,this.c+b.c)},
F:function(a,b){return new V.a2(this.a-b.a,this.b-b.b,this.c-b.c)},
m:function(a,b){if(Math.abs(b-0)<$.K().a)return V.kf()
return new V.a2(this.a/b,this.b/b,this.c/b)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.aA.prototype={
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aA))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.dD.prototype={
ga_:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dD))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.Q.prototype={
b3:function(a){return Math.sqrt(this.v(this))},
v:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.A(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.A(t)
return s*r+u*t},
n:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.n()
u=this.b
if(typeof u!=="number")return u.n()
return new V.Q(t*b,u*b)},
m:function(a,b){var u,t
if(Math.abs(b-0)<$.K().a){u=$.ks
return u==null?$.ks=new V.Q(0,0):u}u=this.a
if(typeof u!=="number")return u.m()
t=this.b
if(typeof t!=="number")return t.m()
return new V.Q(u/b,t/b)},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=this.a
s=$.K()
s.toString
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.A(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.A(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.B.prototype={
b3:function(a){return Math.sqrt(this.v(this))},
v:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cz:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.B(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aZ:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.B(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.B(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a){return new V.B(-this.a,-this.b,-this.c)},
n:function(a,b){return new V.B(this.a*b,this.b*b,this.c*b)},
m:function(a,b){if(Math.abs(b-0)<$.K().a)return V.bW()
return new V.B(this.a/b,this.b/b,this.c/b)},
ei:function(){var u=$.K().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.B))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.bk.prototype={
b3:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
m:function(a,b){var u,t=this
if(Math.abs(b-0)<$.K().a){u=$.kx
return u==null?$.kx=new V.bk(0,0,0,0):u}return new V.bk(t.a/b,t.b/b,t.c/b,t.d/b)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bk))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
U.f4.prototype={
bK:function(a){var u=V.mD(a,this.c,this.b)
return u},
gq:function(){var u=this.y
return u==null?this.y=D.T():u},
O:function(a){var u=this.y
if(u!=null)u.D(a)},
scM:function(a,b){},
scA:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.K().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bK(u)}s=new D.I("maximumLocation",s,t.b,[P.w])
s.b=!0
t.O(s)}},
scC:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.K().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bK(u)}s=new D.I("minimumLocation",s,t.c,[P.w])
s.b=!0
t.O(s)}},
sZ:function(a,b){var u,t=this
b=t.bK(b)
u=t.d
if(!(Math.abs(u-b)<$.K().a)){t.d=b
u=new D.I("location",u,b,[P.w])
u.b=!0
t.O(u)}},
scB:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.K().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.I("maximumVelocity",r,a,[P.w])
r.b=!0
s.O(r)}},
sS:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.K().a)){u.f=a
t=new D.I("velocity",t,a,[P.w])
t.b=!0
u.O(t)}},
sco:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.K().a)){this.x=a
u=new D.I("dampening",u,a,[P.w])
u.b=!0
this.O(u)}},
aa:function(a,b){var u,t,s,r=this,q=r.f,p=$.K().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sZ(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.K().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sS(u)}}}
U.d4.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.T():u},
sJ:function(a,b){var u,t,s,r=this
if(b==null)b=V.ck()
if(!J.F(r.a,b)){u=r.a
r.a=b
t=new D.I("matrix",u,b,[V.ah])
t.b=!0
s=r.b
if(s!=null)s.D(t)}},
aR:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d4))return!1
return J.F(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.cg.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.T():u},
O:function(a){var u
H.j(a,"$iu")
u=this.e
if(u!=null)u.D(a)},
a5:function(){return this.O(null)},
f0:function(a,b){var u,t,s,r,q,p,o,n=U.aa
H.k(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gaI(),s={func:1,ret:-1,args:[D.u]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.gq()
o.toString
H.m(t,s)
if(o.a==null)o.sam(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bt([n])
n.b=!0
this.O(n)},
hj:function(a,b){var u,t,s=U.aa
H.k(b,"$ie",[s],"$ae")
for(u=b.gV(b),t=this.gaI();u.A();)u.gL(u).gq().w(0,t)
s=new D.bu([s])
s.b=!0
this.O(s)},
aR:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.aE()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.al(r,r.length,[H.x(r,0)]),u=null;r.A();){q=r.d
if(q!=null){t=q.aR(0,b,c)
if(t!=null)u=u==null?t:t.n(0,u)}}s.f=u==null?V.ck():u
r=s.e
if(r!=null)r.aq(0)}return s.f},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cg))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.F(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ae:function(){return[U.aa]},
$aa1:function(){return[U.aa]},
$iaa:1}
U.aa.prototype={}
U.dV.prototype={
gq:function(){var u=this.cy
return u==null?this.cy=D.T():u},
O:function(a){var u
H.j(a,"$iu")
u=this.cy
if(u!=null)u.D(a)},
a5:function(){return this.O(null)},
aY:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gb1().h(0,u.gbT())
u.a.c.gb5().h(0,u.gbV())
u.a.c.gaC().h(0,u.gbX())
return!0},
bU:function(a){var u=this
H.j(a,"$iu")
if(!J.F(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bW:function(a){var u,t,s,r,q,p,o,n=this
a=H.f(H.j(a,"$iu"),"$iaz")
if(!H.z(n.y))return
if(H.z(n.x)){u=a.d.F(0,a.y)
u=new V.Q(u.a,u.b)
u=u.v(u)
t=n.r
if(typeof t!=="number")return H.A(t)
if(u<t)return
n.x=!1}if(H.z(n.d)){u=a.c
t=a.d.F(0,a.y)
u=new V.Q(t.a,t.b).n(0,2).m(0,u.ga_())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.n()
s=n.e
if(typeof s!=="number")return H.A(s)
t.sS(u*10*s)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=new V.Q(s.a,s.b).n(0,2).m(0,u.ga_())
s=n.b
q=r.a
if(typeof q!=="number")return q.R()
p=n.e
if(typeof p!=="number")return H.A(p)
o=n.z
if(typeof o!=="number")return H.A(o)
s.sZ(0,-q*p+o)
n.b.sS(0)
t=t.F(0,a.z)
n.Q=new V.Q(t.a,t.b).n(0,2).m(0,u.ga_())}n.a5()},
bY:function(a){var u,t,s,r=this
H.j(a,"$iu")
if(!H.z(r.y))return
r.y=!1
if(H.z(r.x))return
u=r.Q
if(u.v(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.n()
s=r.e
if(typeof s!=="number")return H.A(s)
u.sS(t*10*s)
r.a5()}},
aR:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.aE()
if(q<p){r.ch=p
u=b.y
r.b.aa(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.b1(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iaa:1}
U.dW.prototype={
gq:function(){var u=this.fx
return u==null?this.fx=D.T():u},
O:function(a){var u
H.j(a,"$iu")
u=this.fx
if(u!=null)u.D(a)},
a5:function(){return this.O(null)},
aY:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gb1().h(0,s.gbT())
s.a.c.gb5().h(0,s.gbV())
s.a.c.gaC().h(0,s.gbX())
u=s.a.d
t=u.f
u=t==null?u.f=D.T():t
u.h(0,s.gfA())
u=s.a.d
t=u.d
u=t==null?u.d=D.T():t
u.h(0,s.gfC())
u=s.a.e
t=u.b
u=t==null?u.b=D.T():t
u.h(0,s.ghY())
u=s.a.e
t=u.d
u=t==null?u.d=D.T():t
u.h(0,s.ghW())
u=s.a.e
t=u.c
u=t==null?u.c=D.T():t
u.h(0,s.ghU())
return!0},
al:function(a){var u=a.a,t=a.b
if(H.z(this.f)){if(typeof u!=="number")return u.R()
u=-u}if(H.z(this.r)){if(typeof t!=="number")return t.R()
t=-t}return new V.Q(u,t)},
bU:function(a){var u=this
a=H.f(H.j(a,"$iu"),"$iaz")
if(!J.F(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bW:function(a){var u,t,s,r,q,p,o,n=this
a=H.f(H.j(a,"$iu"),"$iaz")
if(!H.z(n.cx))return
if(H.z(n.ch)){u=a.d.F(0,a.y)
u=new V.Q(u.a,u.b)
u=u.v(u)
t=n.Q
if(typeof t!=="number")return H.A(t)
if(u<t)return
n.ch=!1}if(H.z(n.e)){u=a.c
t=a.d.F(0,a.y)
u=n.al(new V.Q(t.a,t.b).n(0,2).m(0,u.ga_()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.R()
s=n.y
if(typeof s!=="number")return H.A(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.R()
t=n.x
if(typeof t!=="number")return H.A(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=n.al(new V.Q(s.a,s.b).n(0,2).m(0,u.ga_()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.A(p)
o=n.cy
if(typeof o!=="number")return H.A(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.A(q)
s=n.db
if(typeof s!=="number")return H.A(s)
o.sZ(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.F(0,a.z)
n.dx=n.al(new V.Q(t.a,t.b).n(0,2).m(0,u.ga_()))}n.a5()},
bY:function(a){var u,t,s,r=this
H.j(a,"$iu")
if(!H.z(r.cx))return
r.cx=!1
if(H.z(r.ch))return
u=r.dx
if(u.v(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.R()
s=r.y
if(typeof s!=="number")return H.A(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.R()
u=r.x
if(typeof u!=="number")return H.A(u)
s.sS(-t*10*u)
r.a5()}},
fB:function(a){var u=this
if(H.f(H.j(a,"$iu"),"$idp").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fD:function(a){var u,t,s,r,q,p,o,n=this
a=H.f(H.j(a,"$iu"),"$iaz")
if(!J.F(n.d,a.x.b))return
u=a.c
t=a.d
s=t.F(0,a.y)
r=n.al(new V.Q(s.a,s.b).n(0,2).m(0,u.ga_()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.A(p)
o=n.cy
if(typeof o!=="number")return H.A(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.A(q)
s=n.db
if(typeof s!=="number")return H.A(s)
o.sZ(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.F(0,a.z)
n.dx=n.al(new V.Q(t.a,t.b).n(0,2).m(0,u.ga_()))
n.a5()},
hZ:function(a){var u=this
H.j(a,"$iu")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hX:function(a){var u,t,s,r,q,p,o,n=this
a=H.f(H.j(a,"$iu"),"$idO")
if(!H.z(n.cx))return
if(H.z(n.ch)){u=a.d.F(0,a.y)
u=new V.Q(u.a,u.b)
u=u.v(u)
t=n.Q
if(typeof t!=="number")return H.A(t)
if(u<t)return
n.ch=!1}if(H.z(n.e)){u=a.c
t=a.d.F(0,a.y)
u=n.al(new V.Q(t.a,t.b).n(0,2).m(0,u.ga_()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.R()
s=n.y
if(typeof s!=="number")return H.A(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.R()
t=n.x
if(typeof t!=="number")return H.A(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=n.al(new V.Q(s.a,s.b).n(0,2).m(0,u.ga_()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.A(p)
o=n.cy
if(typeof o!=="number")return H.A(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.A(q)
s=n.db
if(typeof s!=="number")return H.A(s)
o.sZ(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.F(0,a.z)
n.dx=n.al(new V.Q(t.a,t.b).n(0,2).m(0,u.ga_()))}n.a5()},
hV:function(a){var u,t,s,r=this
H.j(a,"$iu")
if(!H.z(r.cx))return
r.cx=!1
if(H.z(r.ch))return
u=r.dx
if(u.v(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.R()
s=r.y
if(typeof s!=="number")return H.A(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.R()
u=r.x
if(typeof u!=="number")return H.A(u)
s.sS(-t*10*u)
r.a5()}},
aR:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.aE()
if(s<r){t.dy=r
u=b.y
t.c.aa(0,u)
t.b.aa(0,u)
t.fr=V.cj(t.b.d).n(0,V.jD(t.c.d))}return t.fr},
$iaa:1}
U.dX.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.T():u},
O:function(a){var u=this.r
if(u!=null)u.D(a)},
aY:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.T():t
t=r.gfF()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.T():s).h(0,t)
return!0},
fG:function(a){var u,t,s,r,q=this
H.j(a,"$iu")
if(!J.F(q.b,q.a.b.c))return
H.f(a,"$icl")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.n()
r=u+t*s
if(u!==r){q.d=r
u=new D.I("zoom",u,r,[P.w])
u.b=!0
q.O(u)}},
aR:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.bQ(u,u,u,1)}return t.f},
$iaa:1}
M.d3.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.T():u},
a4:function(a){var u
H.j(a,"$iu")
u=this.f
if(u!=null)u.D(a)},
bJ:function(){return this.a4(null)},
hn:function(a,b){var u,t,s,r,q,p,o,n=M.ao
H.k(b,"$ie",[n],"$ae")
for(u=b.length,t=this.ga8(),s={func:1,ret:-1,args:[D.u]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.gq()
o.toString
H.m(t,s)
if(o.a==null)o.sam(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bt([n])
n.b=!0
this.a4(n)},
hp:function(a,b){var u,t,s=M.ao
H.k(b,"$ie",[s],"$ae")
for(u=b.gV(b),t=this.ga8();u.A();)u.gL(u).gq().w(0,t)
s=new D.bu([s])
s.b=!0
this.a4(s)},
aj:function(a){var u,t,s=this
if(s.e)return
s.e=!0
for(u=s.a,u=new J.al(u,u.length,[H.x(u,0)]);u.A();){t=u.d
if(t!=null)t.aj(a)}s.e=!1},
$ae:function(){return[M.ao]},
$aa1:function(){return[M.ao]},
$iao:1}
M.db.prototype={
a4:function(a){var u
H.j(a,"$iu")
u=this.x
if(u!=null)u.D(a)},
bJ:function(){return this.a4(null)},
fQ:function(a,b){var u,t,s,r,q,p,o,n=E.an
H.k(b,"$ie",[n],"$ae")
for(u=b.length,t=this.ga8(),s={func:1,ret:-1,args:[D.u]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.cd()
o.sam(null)
o.sbg(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sam(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bt([n])
n.b=!0
this.a4(n)},
fS:function(a,b){var u,t,s=E.an
H.k(b,"$ie",[s],"$ae")
for(u=b.gV(b),t=this.ga8();u.A();)u.gL(u).gq().w(0,t)
s=new D.bu([s])
s.b=!0
this.a4(s)},
sax:function(a){var u,t,s=this
if(a==null)a=X.bR()
u=s.a
if(u!==a){if(u!=null)u.gq().w(0,s.ga8())
t=s.a
s.a=a
a.gq().h(0,s.ga8())
u=new D.I("camera",t,s.a,[X.d1])
u.b=!0
s.a4(u)}},
sbF:function(a,b){var u,t=this,s=t.b
if(s!==b){if(s!=null)s.gq().w(0,t.ga8())
u=t.b
t.b=b
b.gq().h(0,t.ga8())
s=new D.I("target",u,t.b,[X.dH])
s.b=!0
t.a4(s)}},
sa6:function(a){var u,t=this,s=t.c
if(s!=a){if(s!=null)s.gq().w(0,t.ga8())
u=t.c
t.c=a
if(a!=null)a.gq().h(0,t.ga8())
s=new D.I("technique",u,t.c,[O.by])
s.b=!0
t.a4(s)}},
gq:function(){var u=this.x
return u==null?this.x=D.T():u},
aj:function(a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this
a3.ew(a2.c)
u=a2.b
u.toString
t=a3.a
t.bindFramebuffer(36160,null)
t.enable(2884)
t.enable(2929)
t.depthFunc(513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.A(s)
o=C.i.ak(p*s)
p=q.b
if(typeof r!=="number")return H.A(r)
n=C.i.ak(p*r)
p=C.i.ak(q.c*s)
a3.c=p
q=C.i.ak(q.d*r)
a3.d=q
t.viewport(o,n,p,q)
t.clearDepth(u.c)
if(u.b){u=u.a
t.clearColor(u.a,u.b,u.c,u.d)
m=16640}else m=256
t.clear(m)
u=a2.a
t=a3.c
q=a3.d
p=u.c
l=u.d
k=u.e
j=k-l
i=1/Math.tan(p*0.5)
h=V.b1(-i/(t/q),0,0,0,0,i,0,0,0,0,k/j,-k*l/j,0,0,1,0)
t=u.a
if(t!=null){g=t.a
if(g!=null)h=g.n(0,h)}a3.cy.ev(h)
t=$.kd
if(t==null){t=V.kf()
q=$.ku
if(q==null)q=$.ku=new V.B(0,1,0)
p=V.kw()
f=p.m(0,Math.sqrt(p.v(p)))
q=q.aZ(f)
e=q.m(0,Math.sqrt(q.v(q)))
d=f.aZ(e)
c=new V.B(t.a,t.b,t.c)
b=e.R(0).v(c)
a=d.R(0).v(c)
a0=f.R(0).v(c)
t=V.b1(e.a,d.a,f.a,b,e.b,d.b,f.b,a,e.c,d.c,f.c,a0,0,0,0,1)
$.kd=t
a1=t}else a1=t
u=u.b
if(u!=null){g=u.a
if(g!=null)a1=g.n(0,a1)}a3.db.ev(a1)
u=a2.c
if(u!=null)u.aa(0,a3)
for(u=a2.d.a,u=new J.al(u,u.length,[H.x(u,0)]);u.A();)u.d.aa(0,a3)
for(u=a2.d.a,u=new J.al(u,u.length,[H.x(u,0)]);u.A();)u.d.aj(a3)
a2.a.toString
a3.cy.cE()
a3.db.cE()
a2.b.toString
a3.es()},
sfe:function(a,b){this.d=H.k(b,"$ia1",[E.an],"$aa1")},
$iao:1}
M.ao.prototype={}
A.cW.prototype={}
A.eW.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iL:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dQ:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.de.prototype={}
A.dr.prototype={
eP:function(d1,d2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="Required uniform value, ",a8=", was not defined or used in shader.",a9="emissionTxt",b0="nullEmissionTxt",b1="ambientTxt",b2="nullAmbientTxt",b3="diffuseTxt",b4="nullDiffuseTxt",b5="invDiffuseTxt",b6="nullInvDiffuseTxt",b7="specularTxt",b8="nullSpecularTxt",b9="nullBumpTxt",c0="reflectTxt",c1="nullReflectTxt",c2="refractTxt",c3="nullRefractTxt",c4="alphaTxt",c5="nullAlphaTxt",c6="uniform mat4 objMat;\n",c7="   if(nullAlphaTxt > 0) return alpha;\n",c8="   if (a <= 0.000001) discard;\n",c9="precision mediump float;\n\n",d0="precision mediump float;\n\nvarying vec3 normalVec;\n"
a6.z=d1
u=new P.bx("")
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
d1.i8(u)
d1.ih(u)
d1.i9(u)
d1.iq(u)
d1.ir(u)
d1.ij(u)
d1.iv(u)
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
u=new P.bx("")
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
q.ic(u)
q.i7(u)
q.ia(u)
q.ie(u)
q.io(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.il(u)
q.im(u)}q.ii(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=q.y
if(l!==C.c){m=u.a=m+"uniform float alpha;\n"
if(l!==C.f){m=u.a=m+"uniform int nullAlphaTxt;\n"
if(l===C.d){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.e){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m=u.a=m+"\n"}m+="float alphaValue()\n"
u.a=m
m=u.a=m+"{\n"
switch(l){case C.c:m=u.a=m+"   return 1.0;\n"
break
case C.f:m=u.a=m+"   return alpha;\n"
break
case C.d:m+=c7
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+=c8
u.a=m
m=u.a=m+"   return a;\n"
break
case C.e:m+=c7
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
m=u.a+="   return litClr*("+C.a.C(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.ib(u)
q.ik(u)
q.ip(u)
q.is(u)
q.it(u)
q.iu(u)
q.ig(u)}m=u.a+="// === Main ===\n"
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
i="vec4("+C.a.C(j," + ")+", alpha);"
q=u.a
q=u.a=(n?u.a=q+("   gl_FragColor = colorMat*"+i+"\n"):u.a=q+("   gl_FragColor = "+i+"\n"))+"}\n"
a6.eg(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
a6.Q=a6.x.j(0,"posAttr")
a6.cx=a6.x.j(0,"normAttr")
a6.ch=a6.x.j(0,"binmAttr")
a6.cy=a6.x.j(0,"txt2DAttr")
a6.db=a6.x.j(0,"txtCubeAttr")
a6.dx=a6.x.j(0,"bendAttr")
if(d1.fr)a6.id=H.f(a6.y.l(0,"invViewMat"),"$iak")
if(t)a6.dy=H.f(a6.y.l(0,"objMat"),"$iak")
if(r)a6.fr=H.f(a6.y.l(0,"viewObjMat"),"$iak")
a6.fy=H.f(a6.y.l(0,"projViewObjMat"),"$iak")
if(d1.x2)a6.k1=H.f(a6.y.l(0,"txt2DMat"),"$icy")
if(d1.y1)a6.k2=H.f(a6.y.l(0,"txtCubeMat"),"$iak")
if(d1.y2)a6.k3=H.f(a6.y.l(0,"colorMat"),"$iak")
a6.sf9(H.c([],[A.ak]))
t=d1.ap
if(t>0){a6.k4=H.j(a6.y.l(0,"bendMatCount"),"$iM")
for(h=0;h<t;++h){s=a6.r1
r=a6.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.r(P.p(a7+q+a8));(s&&C.a).h(s,H.f(g,"$iak"))}}t=d1.a
if(t!==C.c){a6.r2=H.f(a6.y.l(0,"emissionClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.d:a6.rx=H.f(a6.y.l(0,a9),"$iaq")
a6.x1=H.f(a6.y.l(0,b0),"$iM")
break
case C.e:a6.ry=H.f(a6.y.l(0,a9),"$iar")
a6.x1=H.f(a6.y.l(0,b0),"$iM")
break}}t=d1.b
if(t!==C.c){a6.x2=H.f(a6.y.l(0,"ambientClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.d:a6.y1=H.f(a6.y.l(0,b1),"$iaq")
a6.ap=H.f(a6.y.l(0,b2),"$iM")
break
case C.e:a6.y2=H.f(a6.y.l(0,b1),"$iar")
a6.ap=H.f(a6.y.l(0,b2),"$iM")
break}}t=d1.c
if(t!==C.c){a6.ah=H.f(a6.y.l(0,"diffuseClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.d:a6.bn=H.f(a6.y.l(0,b3),"$iaq")
a6.bo=H.f(a6.y.l(0,b4),"$iM")
break
case C.e:a6.dU=H.f(a6.y.l(0,b3),"$iar")
a6.bo=H.f(a6.y.l(0,b4),"$iM")
break}}t=d1.d
if(t!==C.c){a6.bp=H.f(a6.y.l(0,"invDiffuseClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.d:a6.dV=H.f(a6.y.l(0,b5),"$iaq")
a6.bq=H.f(a6.y.l(0,b6),"$iM")
break
case C.e:a6.dW=H.f(a6.y.l(0,b5),"$iar")
a6.bq=H.f(a6.y.l(0,b6),"$iM")
break}}t=d1.e
if(t!==C.c){a6.bt=H.f(a6.y.l(0,"shininess"),"$ia_")
a6.br=H.f(a6.y.l(0,"specularClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.d:a6.dX=H.f(a6.y.l(0,b7),"$iaq")
a6.bs=H.f(a6.y.l(0,b8),"$iM")
break
case C.e:a6.dY=H.f(a6.y.l(0,b7),"$iar")
a6.bs=H.f(a6.y.l(0,b8),"$iM")
break}}switch(d1.f){case C.c:break
case C.f:break
case C.d:a6.dZ=H.f(a6.y.l(0,"bumpTxt"),"$iaq")
a6.bu=H.f(a6.y.l(0,b9),"$iM")
break
case C.e:a6.e_=H.f(a6.y.l(0,"bumpTxt"),"$iar")
a6.bu=H.f(a6.y.l(0,b9),"$iM")
break}if(d1.dy){a6.e0=H.f(a6.y.l(0,"envSampler"),"$iar")
a6.e1=H.f(a6.y.l(0,"nullEnvTxt"),"$iM")
t=d1.r
if(t!==C.c){a6.bv=H.f(a6.y.l(0,"reflectClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.d:a6.e2=H.f(a6.y.l(0,c0),"$iaq")
a6.bw=H.f(a6.y.l(0,c1),"$iM")
break
case C.e:a6.e3=H.f(a6.y.l(0,c0),"$iar")
a6.bw=H.f(a6.y.l(0,c1),"$iM")
break}}t=d1.x
if(t!==C.c){a6.bx=H.f(a6.y.l(0,"refraction"),"$ia_")
a6.by=H.f(a6.y.l(0,"refractClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.d:a6.e4=H.f(a6.y.l(0,c2),"$iaq")
a6.bz=H.f(a6.y.l(0,c3),"$iM")
break
case C.e:a6.e5=H.f(a6.y.l(0,c2),"$iar")
a6.bz=H.f(a6.y.l(0,c3),"$iM")
break}}}t=d1.y
if(t!==C.c){a6.bA=H.f(a6.y.l(0,"alpha"),"$ia_")
switch(t){case C.c:break
case C.f:break
case C.d:a6.e6=H.f(a6.y.l(0,c4),"$iaq")
a6.bB=H.f(a6.y.l(0,c5),"$iM")
break
case C.e:a6.e7=H.f(a6.y.l(0,c4),"$iar")
a6.bB=H.f(a6.y.l(0,c5),"$iM")
break}}a6.sfj(H.c([],[A.cx]))
a6.shw(H.c([],[A.cz]))
a6.shP(H.c([],[A.cA]))
a6.si0(H.c([],[A.cB]))
a6.si1(H.c([],[A.cC]))
a6.si2(H.c([],[A.cD]))
if(d1.k2){t=d1.z
if(t>0){a6.e8=H.j(a6.y.l(0,"dirLightCount"),"$iM")
for(h=0;h<t;++h){s=a6.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.r(P.p(a7+r+a8))
H.f(g,"$iJ")
s=a6.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.r(P.p(a7+r+a8))
H.f(f,"$iJ")
s=a6.cp;(s&&C.a).h(s,new A.cx(g,f))}}t=d1.Q
if(t>0){a6.e9=H.j(a6.y.l(0,"pntLightCount"),"$iM")
for(h=0;h<t;++h){s=a6.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.r(P.p(a7+r+a8))
H.f(g,"$iJ")
s=a6.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.r(P.p(a7+r+a8))
H.f(f,"$iJ")
s=a6.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.r(P.p(a7+r+a8))
H.f(e,"$iJ")
s=a6.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.r(P.p(a7+r+a8))
H.f(d,"$ia_")
s=a6.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.r(P.p(a7+r+a8))
H.f(c,"$ia_")
s=a6.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.r(P.p(a7+r+a8))
H.f(b,"$ia_")
s=a6.cq;(s&&C.a).h(s,new A.cz(g,f,e,d,c,b))}}t=d1.ch
if(t>0){a6.ea=H.j(a6.y.l(0,"spotLightCount"),"$iM")
for(h=0;h<t;++h){s=a6.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.r(P.p(a7+r+a8))
H.f(g,"$iJ")
s=a6.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.r(P.p(a7+r+a8))
H.f(f,"$iJ")
s=a6.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.r(P.p(a7+r+a8))
H.f(e,"$iJ")
s=a6.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.r(P.p(a7+r+a8))
H.f(d,"$iJ")
s=a6.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.r(P.p(a7+r+a8))
H.f(c,"$ia_")
s=a6.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.r(P.p(a7+r+a8))
H.f(b,"$ia_")
s=a6.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.r(P.p(a7+r+a8))
H.f(a,"$ia_")
s=a6.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.r(P.p(a7+r+a8))
H.f(a0,"$ia_")
s=a6.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.r(P.p(a7+r+a8))
H.f(a1,"$ia_")
s=a6.cr;(s&&C.a).h(s,new A.cA(g,f,e,d,c,b,a,a0,a1))}}t=d1.cx
if(t>0){a6.eb=H.j(a6.y.l(0,"txtDirLightCount"),"$iM")
for(h=0;h<t;++h){s=a6.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.r(P.p(a7+r+a8))
H.f(g,"$iJ")
s=a6.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.r(P.p(a7+r+a8))
H.f(f,"$iJ")
s=a6.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.r(P.p(a7+r+a8))
H.f(e,"$iJ")
s=a6.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.r(P.p(a7+r+a8))
H.f(d,"$iJ")
s=a6.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.r(P.p(a7+r+a8))
H.f(c,"$iJ")
s=a6.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.r(P.p(a7+r+a8))
H.f(b,"$iM")
s=a6.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.r(P.p(a7+r+a8))
H.f(a,"$iaq")
s=a6.cs;(s&&C.a).h(s,new A.cB(g,f,e,d,c,a,b))}}t=d1.cy
if(t>0){a6.ec=H.j(a6.y.l(0,"txtPntLightCount"),"$iM")
for(h=0;h<t;++h){s=a6.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.r(P.p(a7+r+a8))
H.f(g,"$iJ")
s=a6.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.r(P.p(a7+r+a8))
H.f(f,"$iJ")
s=a6.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.r(P.p(a7+r+a8))
H.f(e,"$icy")
s=a6.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.r(P.p(a7+r+a8))
H.f(d,"$iJ")
s=a6.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.r(P.p(a7+r+a8))
H.f(c,"$iM")
s=a6.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.r(P.p(a7+r+a8))
H.f(b,"$ia_")
s=a6.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.r(P.p(a7+r+a8))
H.f(a,"$ia_")
s=a6.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.r(P.p(a7+r+a8))
H.f(a0,"$ia_")
s=a6.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.r(P.p(a7+r+a8))
H.f(a1,"$iar")
s=a6.ct;(s&&C.a).h(s,new A.cC(g,f,e,d,a1,c,b,a,a0))}}t=d1.db
if(t>0){a6.ed=H.j(a6.y.l(0,"txtSpotLightCount"),"$iM")
for(h=0;h<t;++h){s=a6.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.r(P.p(a7+r+a8))
H.f(g,"$iJ")
s=a6.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.r(P.p(a7+r+a8))
H.f(f,"$iJ")
s=a6.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.r(P.p(a7+r+a8))
H.f(e,"$iJ")
s=a6.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.r(P.p(a7+r+a8))
H.f(d,"$iJ")
s=a6.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.r(P.p(a7+r+a8))
H.f(c,"$iJ")
s=a6.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.r(P.p(a7+r+a8))
H.f(b,"$iM")
s=a6.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.r(P.p(a7+r+a8))
H.f(a,"$iJ")
s=a6.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.r(P.p(a7+r+a8))
H.f(a0,"$ia_")
s=a6.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.r(P.p(a7+r+a8))
H.f(a1,"$ia_")
s=a6.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.r(P.p(a7+r+a8))
H.f(a2,"$ia_")
s=a6.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.r(P.p(a7+r+a8))
H.f(a3,"$ia_")
s=a6.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.r(P.p(a7+r+a8))
H.f(a4,"$ia_")
s=a6.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.r(P.p(a7+r+a8))
H.f(a5,"$iaq")
s=a6.cu;(s&&C.a).h(s,new A.cD(g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
af:function(a,b,c){C.b.a0(b.a,b.d,1)},
ab:function(a,b,c){C.b.a0(b.a,b.d,1)},
sf9:function(a){this.r1=H.k(a,"$ib",[A.ak],"$ab")},
sfj:function(a){this.cp=H.k(a,"$ib",[A.cx],"$ab")},
shw:function(a){this.cq=H.k(a,"$ib",[A.cz],"$ab")},
shP:function(a){this.cr=H.k(a,"$ib",[A.cA],"$ab")},
si0:function(a){this.cs=H.k(a,"$ib",[A.cB],"$ab")},
si1:function(a){this.ct=H.k(a,"$ib",[A.cC],"$ab")},
si2:function(a){this.cu=H.k(a,"$ib",[A.cD],"$ab")}}
A.fW.prototype={
i8:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.ap+"];\n"
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
ih:function(a){var u
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
i9:function(a){var u
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
iq:function(a){var u,t
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
ir:function(a){var u,t
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
ij:function(a){var u
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
iv:function(a){var u
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
at:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.h(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.j.cS(c,1))+"Txt;\n")
if(b===C.d)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
ic:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.c)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.at(a,s,"emission")
u=a.a+="\n"
u+="vec3 emission()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.f:s=a.a=u+"   return emissionClr;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
i7:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.c)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.at(a,s,"ambient")
u=a.a+="\n"
u+="vec3 ambient()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.f:s=a.a=u+"   return ambientClr;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
ia:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.c)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.at(a,s,"diffuse")
u=a.a+="vec3 diffuseColor;\n"
u+="\n"
a.a=u
u+="void setDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.f:s=a.a=u+"   diffuseColor = diffuseClr;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
break
case C.e:s=u+t
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
ie:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.c)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.at(a,s,"invDiffuse")
u=a.a+="vec3 invDiffuseColor;\n"
u+="\n"
a.a=u
u+="void setInvDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.f:s=a.a=u+"   invDiffuseColor = invDiffuseClr;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
break
case C.e:s=u+t
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
io:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.c)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.at(a,s,"specular")
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
case C.f:s=a.a=u+"   specularColor = specularClr;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
break
case C.e:s=u+t
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
ii:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u=a.a=u+"\n"
t=this.f
switch(t){case C.c:break
case C.f:break
case C.d:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+=s
a.a=u
u=a.a=u+"\n"
break
case C.e:u+="uniform samplerCube bumpTxt;\n"
a.a=u
u+=s
a.a=u
u=a.a=u+"\n"
break}u+="vec3 normal()\n"
a.a=u
u=a.a=u+"{\n"
switch(t){case C.c:u=a.a=u+r
break
case C.f:u=a.a=u+r
break
case C.d:u+=q
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
case C.e:u+=q
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
il:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.c)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.at(a,s,"reflect")
u=a.a+="\n"
u+="vec3 reflect(vec3 refl)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
switch(s){case C.c:s=u
break
case C.f:s=a.a=u+"   vec3 scalar = reflectClr;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
break
case C.e:s=u+t
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
im:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.c)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.at(a,s,"refract")
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
case C.f:s=a.a=u+"   vec3 scalar = refractClr;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
break
case C.e:s=u+t
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
ib:function(a){var u,t=this.z
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
ik:function(a){var u,t=this.Q
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
ip:function(a){var u,t=this.ch
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
is:function(a){var u,t,s=this.cx
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
it:function(a){var u,t,s=this.cy
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
iu:function(a){var u,t,s=this.db
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
ig:function(a){var u
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
i:function(a){return this.ah}}
A.cx.prototype={}
A.cB.prototype={}
A.cz.prototype={}
A.cC.prototype={}
A.cA.prototype={}
A.cD.prototype={}
A.cr.prototype={
cZ:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
eg:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.dg(b,35633)
r.f=r.dg(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.z(H.kL(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.r(P.p("Failed to link shader: "+H.l(s)))}r.hI()
r.hK()},
an:function(a){a.a.useProgram(this.r)
this.x.iL()},
dg:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.z(H.kL(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.i(P.p("Error compiling shader '"+H.l(s)+"': "+H.l(u)))}return s},
hI:function(){var u,t,s,r=this,q=H.c([],[A.cW]),p=r.a,o=H.ae(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.A(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.cW(p,t.name,s))}r.x=new A.eW(q)},
hK:function(){var u,t,s,r=this,q=H.c([],[A.dP]),p=r.a,o=H.ae(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.A(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.iI(t.type,t.size,t.name,s))}r.y=new A.i3(q)},
aH:function(a,b,c){var u=this.a
if(a===1)return new A.M(u,b,c)
else return A.jH(u,this.r,b,a,c)},
fg:function(a,b,c){var u=this.a
if(a===1)return new A.aq(u,b,c)
else return A.jH(u,this.r,b,a,c)},
fh:function(a,b,c){var u=this.a
if(a===1)return new A.ar(u,b,c)
else return A.jH(u,this.r,b,a,c)},
bj:function(a,b){return new P.e8(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
iI:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aH(b,c,d)
case 5121:return u.aH(b,c,d)
case 5122:return u.aH(b,c,d)
case 5123:return u.aH(b,c,d)
case 5124:return u.aH(b,c,d)
case 5125:return u.aH(b,c,d)
case 5126:return new A.a_(u.a,c,d)
case 35664:return new A.i_(u.a,c,d)
case 35665:return new A.J(u.a,c,d)
case 35666:return new A.cw(u.a,c,d)
case 35667:return new A.i0(u.a,c,d)
case 35668:return new A.i1(u.a,c,d)
case 35669:return new A.i2(u.a,c,d)
case 35674:return new A.i4(u.a,c,d)
case 35675:return new A.cy(u.a,c,d)
case 35676:return new A.ak(u.a,c,d)
case 35678:return u.fg(b,c,d)
case 35680:return u.fh(b,c,d)
case 35670:throw H.i(u.bj("BOOL",c))
case 35671:throw H.i(u.bj("BOOL_VEC2",c))
case 35672:throw H.i(u.bj("BOOL_VEC3",c))
case 35673:throw H.i(u.bj("BOOL_VEC4",c))
default:throw H.i(P.p("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bL.prototype={
i:function(a){return this.b}}
A.dP.prototype={}
A.i3.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
l:function(a,b){var u=this.j(0,b)
if(u==null)throw H.i(P.p("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.M()},
M:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.D)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.M.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.i0.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.i1.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.i2.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.hZ.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
si3:function(a){H.k(a,"$ib",[P.C],"$ab")}}
A.a_.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.i_.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.J.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.cw.prototype={
cN:function(a){return C.b.jn(this.a,this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.i4.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.cy.prototype={
a7:function(a){var u=new Float32Array(H.cQ(H.k(a,"$ib",[P.w],"$ab")))
C.b.eD(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.ak.prototype={
a7:function(a){var u=new Float32Array(H.cQ(H.k(a,"$ib",[P.w],"$ab")))
C.b.eE(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.aq.prototype={
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.ar.prototype={
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.j1.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cz(s.b,b).cz(s.d.cz(s.c,b),c)
a.sZ(0,new V.a2(r.a,r.b,r.c))
a.scJ(r.m(0,Math.sqrt(r.v(r))))
s=1-b
u=1-c
u=new V.aA(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.F(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.P()}},
$S:35}
F.j7.prototype={
$1:function(a){return 1},
$S:36}
F.Z.prototype={
b_:function(){var u=this
if(!u.gb0()){C.a.w(u.a.a.d.b,u)
u.a.a.P()}u.c3()
u.c4()
u.hA()},
aW:function(a){this.a=a
C.a.h(a.d.b,this)},
aX:function(a){this.b=a
C.a.h(a.d.c,this)},
dC:function(a){this.c=a
C.a.h(a.d.d,this)},
c3:function(){var u=this.a
if(u!=null){C.a.w(u.d.b,this)
this.a=null}},
c4:function(){var u=this.b
if(u!=null){C.a.w(u.d.c,this)
this.b=null}},
hA:function(){var u=this.c
if(u!=null){C.a.w(u.d.d,this)
this.c=null}},
gb0:function(){return this.a==null||this.b==null||this.c==null},
f8:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.bW()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.ei())return
return s.m(0,Math.sqrt(s.v(s)))},
fd:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.F(0,q)
r=new V.B(r.a,r.b,r.c)
s=r.m(0,Math.sqrt(r.v(r)))
r=t.F(0,q)
r=new V.B(r.a,r.b,r.c)
r=s.aZ(r.m(0,Math.sqrt(r.v(r))))
return r.m(0,Math.sqrt(r.v(r)))},
cj:function(){var u,t=this
if(t.d!=null)return!0
u=t.f8()
if(u==null){u=t.fd()
if(u==null)return!1}t.d=u
t.a.a.P()
return!0},
f7:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.bW()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.ei())return
return s.m(0,Math.sqrt(s.v(s)))},
fc:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.K().a){l=d.F(0,g)
l=new V.B(l.a,l.b,l.c)
q=l.m(0,Math.sqrt(l.v(l)))
if(s.a-t.a<0)q=q.R(0)}else{p=(l-u.b)/r
l=d.F(0,g)
l=new V.a2(l.a*p,l.b*p,l.c*p).B(0,g).F(0,j)
l=new V.B(l.a,l.b,l.c)
q=l.m(0,Math.sqrt(l.v(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.R(0)}l=n.d
if(l!=null){o=l.m(0,Math.sqrt(l.v(l)))
l=o.aZ(q)
l=l.m(0,Math.sqrt(l.v(l))).aZ(o)
q=l.m(0,Math.sqrt(l.v(l)))}return q},
ci:function(){var u,t=this
if(t.e!=null)return!0
u=t.f7()
if(u==null){u=t.fc()
if(u==null)return!1}t.e=u
t.a.a.P()
return!0},
aG:function(a,b){var u=b.a
if(u==null)throw H.i(P.p("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.i(P.p("May not replace a face's vertex with a vertex attached to a different shape."))},
giG:function(a){var u=this
if(J.F(u.a,u.b))return!0
if(J.F(u.b,u.c))return!0
if(J.F(u.c,u.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var u,t,s=this
if(s.gb0())return a+"disposed"
u=a+C.j.ae(J.ax(s.a.e),0)+", "+C.j.ae(J.ax(s.b.e),0)+", "+C.j.ae(J.ax(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
M:function(){return this.E("")}}
F.fm.prototype={}
F.hy.prototype={
aQ:function(a,b,c){var u,t=b.a
t.a.a.p()
t=t.e
u=c.a
u.a.a.p()
if(t==u.e){t=b.b
t.a.a.p()
t=t.e
u=c.b
u.a.a.p()
if(t==u.e){t=b.c
t.a.a.p()
t=t.e
u=c.c
u.a.a.p()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.p()
t=t.e
u=c.b
u.a.a.p()
if(t==u.e){t=b.b
t.a.a.p()
t=t.e
u=c.c
u.a.a.p()
if(t==u.e){t=b.c
t.a.a.p()
t=t.e
u=c.a
u.a.a.p()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.p()
t=t.e
u=c.c
u.a.a.p()
if(t==u.e){t=b.b
t.a.a.p()
t=t.e
u=c.a
u.a.a.p()
if(t==u.e){t=b.c
t.a.a.p()
t=t.e
u=c.b
u.a.a.p()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.af.prototype={
b_:function(){var u=this
if(!u.gb0()){C.a.w(u.a.a.c.b,u)
u.a.a.P()}u.c3()
u.c4()},
aW:function(a){this.a=a
C.a.h(a.c.b,this)},
aX:function(a){this.b=a
C.a.h(a.c.c,this)},
c3:function(){var u=this.a
if(u!=null){C.a.w(u.c.b,this)
this.a=null}},
c4:function(){var u=this.b
if(u!=null){C.a.w(u.c.c,this)
this.b=null}},
gb0:function(){return this.a==null||this.b==null},
aG:function(a,b){var u=b.a
if(u==null)throw H.i(P.p("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.i(P.p("May not replace a line's vertex with a vertex attached to a different shape."))},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){if(this.gb0())return a+"disposed"
return a+C.j.ae(J.ax(this.a.e),0)+", "+C.j.ae(J.ax(this.b.e),0)},
M:function(){return this.E("")}}
F.fK.prototype={}
F.hY.prototype={
aQ:function(a,b,c){var u,t=b.a
t.a.a.p()
t=t.e
u=c.a
u.a.a.p()
if(t==u.e){t=b.b
t.a.a.p()
t=t.e
u=c.b
u.a.a.p()
return t==u.e}else{t=b.a
t.a.a.p()
t=t.e
u=c.b
u.a.a.p()
if(t==u.e){t=b.b
t.a.a.p()
t=t.e
u=c.a
u.a.a.p()
return t==u.e}else return!1}}}
F.bw.prototype={
hH:function(a){this.a=a
C.a.h(a.b.b,this)},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.j.ae(J.ax(u.e),0)},
M:function(){return this.E("")}}
F.ap.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.T():u},
aA:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.p()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.D)(g),++s){r=g[s]
h.a.h(0,r.cm())}h.a.p()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.D)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
n=p[o]
h.b.a.a.h(0,n)
F.lC(n)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.D)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.p()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.jC(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.D)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.p()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.ce(l,k,i)}g=h.e
if(g!=null)g.aq(0)},
ao:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ao()||!1
if(!t.a.ao())u=!1
s=t.e
if(s!=null)s.aq(0)
return u},
aM:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aM()||!1
if(!t.a.aM())u=!1
s=t.e
if(s!=null)s.aq(0)
return u},
bl:function(){var u=this.e
if(u!=null)++u.d
this.a.bl()
u=this.e
if(u!=null)u.aq(0)
return!0},
iM:function(a,b){var u,t,s,r=this.a.c.length
for(u=0;u<r;++u){t=this.a.c
if(u>=t.length)return H.h(t,u)
s=t[u]
if(b.aQ(0,a,s))return s}return},
hC:function(a,b){var u,t,s,r,q,p
H.k(b,"$ib",[F.R],"$ab")
this.a.h(0,a)
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.D)(b),++t){s=b[t]
for(;r=s.d,r.b.length+r.c.length+r.d.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null||r.c==null)H.r(P.p("May not replace a face's vertex when the point has been disposed."))
if(J.F(q,s)){r.aG(s,a)
q=r.a
if(q!=null){C.a.w(q.d.b,r)
r.a=null}r.a=a
C.a.h(a.d.b,r)
p=1}else p=0
if(J.F(r.b,s)){r.aG(s,a)
q=r.b
if(q!=null){C.a.w(q.d.c,r)
r.b=null}r.b=a
C.a.h(a.d.c,r);++p}if(J.F(r.c,s)){r.aG(s,a)
q=r.c
if(q!=null){C.a.w(q.d.d,r)
r.c=null}r.c=a
C.a.h(a.d.d,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.D(null)}}for(;r=s.c,r.b.length+r.c.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null)H.r(P.p("May not replace a line's vertex when the point has been disposed."))
if(J.F(q,s)){r.aG(s,a)
q=r.a
if(q!=null){C.a.w(q.c.b,r)
r.a=null}r.a=a
C.a.h(a.c.b,r)
p=1}else p=0
if(J.F(r.b,s)){r.aG(s,a)
q=r.b
if(q!=null){C.a.w(q.c.c,r)
r.b=null}r.b=a
C.a.h(a.c.c,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.D(null)}}for(;r=s.b.b,r.length>0;){r=r[0]
q=r.a
if(q==null)H.r(P.p("May not replace a point's vertex when the point has been disposed."))
if(J.F(q,s)){if(a.a==null)H.r(P.p("May not replace a point's vertex with a vertex which is not attached to a shape."))
q=r.a
if(q!=null){C.a.w(q.b.b,r)
r.a=null}r.a=a
C.a.h(a.b.b,r)
p=1}else p=0
if(p>0){r=r.a.a.e
if(r!=null)r.D(null)}}this.a.w(0,s)}},
iW:function(a,b){var u,t,s,r,q,p,o=this,n=o.e
if(n!=null)++n.d
n=o.a.c
u=H.c(n.slice(0),[H.x(n,0)])
for(n=[F.R];u.length!==0;){t=C.a.giO(u)
C.a.ex(u,0)
if(t!=null){s=H.c([],n)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.h(u,r)
q=u[r]
if(q!=null&&a.aQ(0,t,q)){C.a.h(s,q)
C.a.ex(u,r)}}if(s.length>1){p=b.aA(s)
o.hC(p,s)
C.a.h(u,p)}}}o.a.p()
o.c.cF()
o.d.cF()
o.b.jd()
o.c.cG(new F.hY())
o.d.cG(new F.hy())
n=o.e
if(n!=null)n.aq(0)},
dL:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aQ()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.aP().a)!==0)++s
if((t&$.aO().a)!==0)++s
if((t&$.bn().a)!==0)++s
if((t&$.bo().a)!==0)++s
if((t&$.bH().a)!==0)++s
if((t&$.cV().a)!==0)++s
if((t&$.c2().a)!==0)++s
if((t&$.bm().a)!==0)++s
r=a3.gcR(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.w
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.cZ])
for(n=0,m=0;m<s;++m){l=a3.iB(m)
k=l.gcR(l)
C.a.a1(o,m,new Z.cZ(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.h(u,j)
i=u[j].iU(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.a1(p,h,i[g]);++h}}n+=k}H.k(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cQ(p)),35044)
u.bindBuffer(a0,null)
e=new Z.bp(new Z.dZ(a0,f),o,a3)
e.sft(H.c([],[Z.bs]))
if(a.b.b.length!==0){t=P.C
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.p()
C.a.h(d,c.e)}b=Z.jI(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bs(0,d.length,b))}if(a.c.b.length!==0){t=P.C
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.p()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.p()
C.a.h(d,c.e)}b=Z.jI(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bs(1,d.length,b))}if(a.d.b.length!==0){t=P.C
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.p()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.p()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].c
c.a.a.p()
C.a.h(d,c.e)}b=Z.jI(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bs(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.o])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.E(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.E(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.E(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.E(t))}return C.a.C(s,"\n")},
P:function(){var u=this.e
if(u!=null)u.D(null)},
$imK:1}
F.hs.prototype={
dG:function(a,b,c,d){var u,t=this.a
t.a.h(0,b)
t.a.h(0,c)
t.a.h(0,d)
u=new F.Z()
t=b.a
if(t==null)H.r(P.p("May not create a face with a first vertex which is not attached to a shape."))
if(t!=c.a||t!=d.a)H.r(P.p("May not create a face with vertices attached to different shapes."))
u.aW(b)
u.aX(c)
u.dC(d)
C.a.h(u.a.a.d.b,u)
u.a.a.P()
return u},
ix:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[F.R],"$ab")
u=H.c([],[F.Z])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.h(a,p)
p=a[p]
if(q>=o)return H.h(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.ce(s,p,o))}}return u},
iy:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,"$ib",[F.R],"$ab")
u=H.c([],[F.Z])
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
C.a.h(u,F.ce(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ce(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ce(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.ce(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
cG:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.aQ(0,p,n)){p.b_()
break}}}}},
cF:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.giG(s)
if(t)s.b_()}},
ao:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.D)(u),++r)if(!u[r].cj())s=!1
return s},
aM:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.D)(u),++r)if(!u[r].ci())s=!1
return s},
i:function(a){return this.M()},
E:function(a){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].E(a))
return C.a.C(r,"\n")},
M:function(){return this.E("")},
sfm:function(a){this.b=H.k(a,"$ib",[F.Z],"$ab")}}
F.ht.prototype={
c9:function(a,b,c){var u,t=this.a
t.a.h(0,b)
t.a.h(0,c)
t=new F.af()
if(b==null)H.r(P.p("May not create a line with a null start vertex."))
if(c==null)H.r(P.p("May not create a line with a null end vertex."))
u=b.a
if(u==null)H.r(P.p("May not create a line with a start vertex which is not attached to a shape."))
if(u!=c.a)H.r(P.p("May not create a line with vertices attached to different shapes."))
t.aW(b)
t.aX(c)
C.a.h(t.a.a.c.b,t)
t.a.a.P()
return t},
dH:function(a){var u,t,s,r,q,p
H.k(a,"$ib",[F.R],"$ab")
u=H.c([],[F.af])
t=a.length
if(t>0){for(s=this.a,r=1;r<t;++r){q=r-1
p=a.length
if(q>=p)return H.h(a,q)
q=a[q]
if(r>=p)return H.h(a,r)
p=a[r]
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.jC(q,p))}s=t-1
q=a.length
if(s>=q)return H.h(a,s)
s=a[s]
if(0>=q)return H.h(a,0)
C.a.h(u,this.c9(0,s,a[0]))}return u},
iz:function(a){var u,t,s,r,q
H.k(a,"$ib",[F.R],"$ab")
u=H.c([],[F.af])
for(t=this.a,s=1;s<64;s+=2){r=a[s-1]
q=a[s]
t.a.h(0,r)
t.a.h(0,q)
C.a.h(u,F.jC(r,q))}return u},
gk:function(a){return this.b.length},
cG:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.aQ(0,p,n)){p.b_()
break}}}}},
cF:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=J.F(s.a,s.b)
if(t)s.b_()}},
i:function(a){return this.M()},
E:function(a){var u,t,s=H.c([],[P.o]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.h(t,u)
C.a.h(s,t[u].E(a+(""+u+". ")))}return C.a.C(s,"\n")},
M:function(){return this.E("")},
sfu:function(a){this.b=H.k(a,"$ib",[F.af],"$ab")}}
F.hu.prototype={
gk:function(a){return this.b.length},
jd:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.w(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.D(null)}s=t.a
if(s!=null){C.a.w(s.b.b,t)
t.a=null}}}},
i:function(a){return this.M()},
E:function(a){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].E(a))
return C.a.C(r,"\n")},
M:function(){return this.E("")},
sc0:function(a){this.b=H.k(a,"$ib",[F.bw],"$ab")}}
F.R.prototype={
cn:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.bA(u.cx,r,o,t,s,q,p,a,n)},
cm:function(){return this.cn(null)},
sZ:function(a,b){var u
if(!J.F(this.f,b)){this.f=b
u=this.a
if(u!=null)u.P()}},
sej:function(a){var u
a=a==null?null:a.m(0,Math.sqrt(a.v(a)))
if(!J.F(this.r,a)){this.r=a
u=this.a
if(u!=null)u.P()}},
sbk:function(a){var u
a=a==null?null:a.m(0,Math.sqrt(a.v(a)))
if(!J.F(this.x,a)){this.x=a
u=this.a
if(u!=null)u.P()}},
scI:function(a){var u
if(!J.F(this.y,a)){this.y=a
u=this.a
if(u!=null)u.P()}},
scJ:function(a){var u
if(!J.F(this.z,a)){this.z=a
u=this.a
if(u!=null)u.P()}},
sU:function(a,b){var u
if(!J.F(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.P()}},
seG:function(a,b){var u
if(this.ch!==b){this.ch=b
u=this.a
if(u!=null)u.P()}},
iU:function(a){var u,t,s=this
if(a.u(0,$.aQ())){u=s.f
t=[P.w]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.aP())){u=s.r
t=[P.w]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.aO())){u=s.x
t=[P.w]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.bn())){u=s.y
t=[P.w]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.u(0,$.bo())){u=s.z
t=[P.w]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.bH())){u=s.Q
t=[P.w]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.cV())){u=s.Q
if(u==null)return H.c([1,1,1,1],[P.w])
else return u.cK(0)}else if(a.u(0,$.c2()))return H.c([s.ch],[P.w])
else if(a.u(0,$.bm())){u=s.cx
t=[P.w]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.w])},
cj:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.bW()
t.d.H(0,new F.im(s))
s=s.a
t.r=s.m(0,Math.sqrt(s.v(s)))
s=t.a
if(s!=null){s.P()
s=t.a.e
if(s!=null)s.aq(0)}return!0},
ci:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.bW()
t.d.H(0,new F.il(s))
s=s.a
t.x=s.m(0,Math.sqrt(s.v(s)))
s=t.a
if(s!=null){s.P()
s=t.a.e
if(s!=null)s.aq(0)}return!0},
ee:function(a){var u,t,s,r=this.c.b.length
for(u=0;u<r;++u){t=this.c.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.b
t.a.a.p()
t=t.e
a.a.a.p()
if(t==a.e)return s}return},
iP:function(a){var u=this.ee(a)
if(u!=null)return u
return a.ee(this)},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var u,t,s=this,r="-",q=H.c([],[P.o])
C.a.h(q,C.j.ae(J.ax(s.e),0))
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
C.a.h(q,V.N(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.C(q,", ")
return a+"{"+t+"}"},
M:function(){return this.E("")}}
F.im.prototype={
$1:function(a){var u,t
H.j(a,"$iZ")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:5}
F.il.prototype={
$1:function(a){var u,t
H.j(a,"$iZ")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:5}
F.ib.prototype={
p:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.h(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.i(P.p("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.P()
return!0},
iA:function(a,b,c,d,e,f,g){var u=F.bA(a,null,b,c,d,e,f,g,0)
this.h(0,u)
return u},
aL:function(a,b,c,d,e,f){return this.iA(a,b,c,null,d,e,f)},
Y:function(a,b,c){var u=null,t=F.bA(u,u,u,new V.a2(a,b,c),u,u,u,u,0)
this.h(0,t)
return t},
gk:function(a){return this.c.length},
w:function(a,b){var u,t
if(b==null)return!1
u=this.a
if(b.a!==u)return!1
if(b.b.b.length===0){t=b.c
if(t.b.length===0&&t.c.length===0){t=b.d
t=t.b.length===0&&t.c.length===0&&t.d.length===0}else t=!1}else t=!1
if(!t)throw H.i(P.p("May not remove a vertex without first making it empty."))
b.a=null
C.a.w(this.c,b)
u.P()
return this.b=!0},
ao:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)u[s].cj()
return!0},
aM:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)u[s].ci()
return!0},
bl:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.m(0,Math.sqrt(p*p+o*o+n*n))
if(!J.F(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.D(null)}}}}return!0},
i:function(a){return this.M()},
E:function(a){var u,t,s,r
this.p()
u=H.c([],[P.o])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].E(a))
return C.a.C(u,"\n")},
M:function(){return this.E("")},
si4:function(a){this.c=H.k(a,"$ib",[F.R],"$ab")}}
F.ic.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.h(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.h(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.h(t,b)
return t[b]},
H:function(a,b){var u=this
H.m(b,{func:1,ret:-1,args:[F.Z]})
C.a.H(u.b,b)
C.a.H(u.c,new F.id(u,b))
C.a.H(u.d,new F.ie(u,b))},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].E(""))
return C.a.C(r,"\n")},
sfn:function(a){this.b=H.k(a,"$ib",[F.Z],"$ab")},
sfo:function(a){this.c=H.k(a,"$ib",[F.Z],"$ab")},
sfp:function(a){this.d=H.k(a,"$ib",[F.Z],"$ab")}}
F.id.prototype={
$1:function(a){H.j(a,"$iZ")
if(!J.F(a.a,this.a))this.b.$1(a)},
$S:5}
F.ie.prototype={
$1:function(a){var u
H.j(a,"$iZ")
u=this.a
if(!J.F(a.a,u)&&!J.F(a.b,u))this.b.$1(a)},
$S:5}
F.ih.prototype={
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.h(t,u)
return t[u]}else{if(b<0)return H.h(t,b)
return t[b]}},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].E(""))
return C.a.C(r,"\n")},
sfv:function(a){this.b=H.k(a,"$ib",[F.af],"$ab")},
sfw:function(a){this.c=H.k(a,"$ib",[F.af],"$ab")}}
F.ii.prototype={}
F.dY.prototype={
aQ:function(a,b,c){return J.F(b.f,c.f)}}
F.ij.prototype={}
F.ig.prototype={
aA:function(a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null
H.k(a5,"$ib",[F.R],"$ab")
for(u=a5.length,t=a4,s=t,r=s,q=r,p=q,o=p,n=0,m=0,l=0,k=0,j=0,i=0,h=0;h<u;++h){g=a5[h]
f=g.f
if(f!=null){o=o==null?f:new V.a2(o.a+f.a,o.b+f.b,o.c+f.c);++n}e=g.r
if(e!=null)p=p==null?e:new V.B(p.a+e.a,p.b+e.b,p.c+e.c)
d=g.x
if(d!=null)q=q==null?d:new V.B(q.a+d.a,q.b+d.b,q.c+d.c)
c=g.y
if(c!=null){s=s==null?c:new V.X(s.a+c.a,s.b+c.b);++l}b=g.z
if(b!=null){t=t==null?b:new V.B(t.a+b.a,t.b+b.b,t.c+b.c);++k}a=g.Q
if(a!=null){a0=a.a
a1=a.b
a2=a.c
a=a.d
if(r==null){a=[a0,a1,a2,a]
r=new V.bk(a[0],a[1],a[2],a[3])}else{a=[a0,a1,a2,a]
a0=a[0]
a1=a[1]
a2=a[2]
a=a[3]
r=new V.bk(r.a+a0,r.b+a1,r.c+a2,r.d+a)}++m}a=g.ch
if(typeof a!=="number")return H.A(a)
i+=a;++j}a3=F.bA(a4,a4,a4,a4,a4,a4,a4,a4,0)
if(n<=0||o==null)a3.sZ(0,a4)
else a3.sZ(0,o.m(0,n))
if(p==null)a3.sej(a4)
else a3.sej(p.m(0,Math.sqrt(p.v(p))))
if(q==null)a3.sbk(a4)
else a3.sbk(q.m(0,Math.sqrt(q.v(q))))
if(l<=0||s==null)a3.scI(a4)
else a3.scI(s.m(0,l))
if(k<=0||t==null)a3.scJ(a4)
else a3.scJ(t.m(0,k))
if(m<=0||r==null)a3.sU(0,a4)
else{u=r.m(0,m)
u=[u.a,u.b,u.c,u.d]
a=u[0]
a0=u[1]
a1=u[2]
u=u[3]
if(a<0)a=0
else if(a>1)a=1
if(a0<0)a0=0
else if(a0>1)a0=1
if(a1<0)a1=0
else if(a1>1)a1=1
if(u<0)u=0
else if(u>1)u=1
a3.sU(0,new V.O(a,a0,a1,u))}if(j<=0)a3.seG(0,0)
else a3.seG(0,i/j)
return a3}}
F.ik.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].E(""))
return C.a.C(r,"\n")},
sc0:function(a){this.b=H.k(a,"$ib",[F.bw],"$ab")}}
O.df.prototype={
gq:function(){var u=this.rx
return u==null?this.rx=D.T():u},
X:function(a){var u=this.rx
if(u!=null)u.D(a)},
scP:function(a){var u
if(!this.Q){this.Q=!0
u=new D.I("showFilled",!1,!0,[P.a7])
u.b=!0
this.X(u)}},
scQ:function(a){var u
if(!this.ch){this.ch=!0
u=new D.I("showWireFrame",!1,!0,[P.a7])
u.b=!0
this.X(u)}},
sdP:function(a){var u,t,s=this
if(!s.c.u(0,a)){u=s.c
s.c=a
t=new D.I("diffuse1",u,a,[V.O])
t.b=!0
s.X(t)}},
sdJ:function(a){var u,t,s=this
if(!s.d.u(0,a)){u=s.d
s.d=a
t=new D.I("ambient1",u,a,[V.O])
t.b=!0
s.X(t)}},
aa:function(a,b){},
ey:function(a,b){var u,t,s,r,q,p,o=this,n="Inspection",m=2929
if(o.a==null){u=H.j(a.fr.j(0,n),"$ide")
if(u==null){t=a.a
u=new A.de(t,n)
u.cZ(t,n)
u.eg(0,"uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n","precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n")
u.z=u.x.j(0,"posAttr")
u.Q=u.x.j(0,"normAttr")
u.ch=u.x.j(0,"clrAttr")
u.cx=u.x.j(0,"binmAttr")
u.cy=H.f(u.y.j(0,"lightVec"),"$iJ")
u.db=H.f(u.y.j(0,"ambientClr"),"$icw")
u.dx=H.f(u.y.j(0,"diffuseClr"),"$icw")
u.dy=H.f(u.y.j(0,"weightScalar"),"$ia_")
u.fr=H.f(u.y.j(0,"viewMat"),"$iak")
u.fx=H.f(u.y.j(0,"viewObjMatrix"),"$iak")
u.fy=H.f(u.y.j(0,"projViewObjMatrix"),"$iak")
a.dI(u)}o.a=u}if(b.e==null){b.d.ao()
b.d.aM()
b.d.bl()
t=new Z.d_()
t.sfE(new H.aG([P.o,Z.bp]))
b.e=t}t=o.a
t.an(a)
s=o.r2
r=t.dy
C.b.K(r.a,r.d,s)
s=o.b
r=t.cy
r.toString
q=s.a
p=s.b
s=s.c
C.b.t(r.a,r.d,q,p,s)
s=a.db
s=s.gJ(s)
p=t.fr
p.toString
p.a7(s.a3(0,!0))
s=a.geF()
p=t.fx
p.toString
p.a7(s.a3(0,!0))
s=a.geu()
t=t.fy
t.toString
t.a7(s.a3(0,!0))
t=b.e
if(t instanceof Z.d_){s=a.a
s.blendFunc(1,1)
if(b.c==null){s.disable(m)
s.enable(3042)
s.blendFunc(1,1)
s.enable(m)
s.blendFunc(770,771)}else{s.enable(m)
s.enable(3042)
s.blendFunc(770,771)
if(o.Q)o.dv(a,t,b.c,"shapeFill",o.ghM(),o.d,o.c)
s.disable(m)
s.blendFunc(1,1)
if(o.ch)o.dv(a,t,b.c,"wireFrame",o.gi5(),o.f,o.e)
s.enable(m)
s.blendFunc(770,771)}}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.dQ()},
dv:function(a,b,c,d,e,f,g){var u,t
H.m(e,{func:1,ret:F.ap,args:[F.ap]})
u=b.a.j(0,d)
if(u==null){u=this.fb(a,e.$1(c))
b.a.a1(0,d,u)}t=this.a
t.db.cN(f)
t.dx.cN(g)
u.j4(a)},
fb:function(a,b){var u=this,t=$.aQ(),s=$.aP(),r=b.dL(new Z.e_(a.a),new Z.aN(t.a|s.a|$.aO().a|$.bH().a))
r.ac($.aQ()).e=u.a.z.c
r.ac($.aP()).e=u.a.Q.c
r.ac($.bH()).e=u.a.ch.c
r.ac($.aO()).e=u.a.cx.c
return r},
hN:function(a){var u,t=F.aI(),s=a.a
s.toString
u=H.m(new O.fy(t,new V.O(1,1,1,1)),{func:1,ret:-1,args:[F.R]})
C.a.H(s.c,u)
u=a.d
u.toString
s=H.m(new O.fz(t),{func:1,ret:-1,args:[F.Z]})
C.a.H(u.b,s)
return t},
dE:function(a,b){var u,t,s,r={}
r.a=b
u=F.aI()
r.a=new V.O(0,0.7,1,1)
t=a.a
t.toString
r=H.m(new O.fB(r,u),{func:1,ret:-1,args:[F.R]})
C.a.H(t.c,r)
r=new O.fA(u)
t=a.c
t.toString
s=H.m(new O.fC(u,r),{func:1,ret:-1,args:[F.af]})
C.a.H(t.b,s)
s=a.d
s.toString
r=H.m(new O.fD(u,r),{func:1,ret:-1,args:[F.Z]})
C.a.H(s.b,r)
return u},
i6:function(a){return this.dE(a,null)}}
O.fy.prototype={
$1:function(a){var u,t
H.j(a,"$iR")
u=this.a.a
t=a.cm()
t.sU(0,this.b)
t.sbk(V.bW())
u.h(0,t)},
$S:22}
O.fz.prototype={
$1:function(a){var u,t,s,r,q,p
H.j(a,"$iZ")
u=this.a
t=u.a
s=a.a
s.a.a.p()
s=s.e
r=C.a.j(t.c,s)
s=u.a
t=a.b
t.a.a.p()
t=t.e
q=C.a.j(s.c,t)
t=u.a
s=a.c
s.a.a.p()
s=s.e
p=C.a.j(t.c,s)
u.d.dG(0,r,q,p)},
$S:5}
O.fB.prototype={
$1:function(a){var u,t
H.j(a,"$iR")
u=this.b.a
t=a.cm()
t.sU(0,this.a.a)
t.sbk(V.bW())
u.h(0,t)},
$S:22}
O.fA.prototype={
$2:function(a,b){if(a.iP(b)==null)this.a.c.c9(0,a,b)},
$S:39}
O.fC.prototype={
$1:function(a){var u,t,s,r
H.j(a,"$iaf")
u=this.a
t=u.a
s=a.a
s.a.a.p()
s=s.e
r=C.a.j(t.c,s)
u=u.a
s=a.b
s.a.a.p()
s=s.e
this.b.$2(r,C.a.j(u.c,s))},
$S:40}
O.fD.prototype={
$1:function(a){var u,t,s,r,q,p
H.j(a,"$iZ")
u=this.a
t=u.a
s=a.a
s.a.a.p()
s=s.e
r=C.a.j(t.c,s)
s=u.a
t=a.b
t.a.a.p()
t=t.e
q=C.a.j(s.c,t)
u=u.a
t=a.c
t.a.a.p()
t=t.e
p=C.a.j(u.c,t)
t=this.b
t.$2(r,q)
t.$2(q,p)
t.$2(p,r)},
$S:5}
O.ds.prototype={
gq:function(){var u=this.dy
return u==null?this.dy=D.T():u},
X:function(a){var u
H.j(a,"$iu")
u=this.dy
if(u!=null)u.D(a)},
f2:function(){return this.X(null)},
dw:function(a){H.j(a,"$iu")
this.a=null
this.X(a)},
hF:function(){return this.dw(null)},
fK:function(a,b){var u=V.ah
H.k(b,"$ie",[u],"$ae")
u=new D.bt([u])
u.b=!0
this.X(u)},
fM:function(a,b){var u=V.ah
H.k(b,"$ie",[u],"$ae")
u=new D.bu([u])
u.b=!0
this.X(u)},
dd:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.h.a9(a1.e.length+3,4)*4,a3=C.h.a9(a1.f.length+3,4)*4,a4=C.h.a9(a1.r.length+3,4)*4,a5=C.h.a9(a1.x.length+3,4)*4,a6=C.h.a9(a1.y.length+3,4)*4,a7=C.h.a9(a1.z.length+3,4)*4,a8=C.h.a9(a0.e.a.length+3,4)*4
a1=a0.f.c
u=a0.r.c
t=a0.x.c
s=a0.y.c
r=a0.z.c
q=a0.Q.c
p=a0.cx.c
o=a0.cy.c
n=a0.db.c
m="MaterialLight_"+C.h.i(a1.a)+C.h.i(u.a)+C.h.i(t.a)+C.h.i(s.a)+C.h.i(r.a)+C.h.i(q.a)+C.h.i(p.a)+C.h.i(o.a)+C.h.i(n.a)
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
f=a1===C.d||u===C.d||t===C.d||s===C.d||r===C.d||q===C.d||p===C.d||o===C.d||n===C.d
e=a1===C.e||u===C.e||t===C.e||s===C.e||r===C.e||q===C.e||p===C.e||o===C.e||n===C.e
d=a3+a6+a5+a4+a7>0
c=a8>0
b=h||!j||i
a=$.aQ()
if(h){j=$.aP()
a=new Z.aN(a.a|j.a)}if(g){j=$.aO()
a=new Z.aN(a.a|j.a)}if(f){j=$.bn()
a=new Z.aN(a.a|j.a)}if(e){j=$.bo()
a=new Z.aN(a.a|j.a)}if(c){j=$.bm()
a=new Z.aN(a.a|j.a)}return new A.fW(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
T:function(a,b){H.k(a,"$ib",[T.dI],"$ab")},
aa:function(a,b){var u
for(u=this.dx.a,u=new J.al(u,u.length,[H.x(u,0)]);u.A();)C.l.aa(u.d,b)},
ey:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a
if(a2==null){a2=a1.dd()
u=H.j(a3.fr.j(0,a2.ah),"$idr")
if(u==null){u=A.lB(a2,a3.a)
a3.dI(u)}a2=a1.a=u
a4.e=null}t=a2.z
s=t.bn
a2=a4.e
if(!(a2 instanceof Z.bp))a2=a4.e=null
if(a2==null||!a2.d.u(0,s)){a2=t.r1
if(a2)a4.d.ao()
r=t.r2
if(r)a4.d.aM()
q=t.ry
if(q)a4.d.bl()
p=a4.d.dL(new Z.e_(a3.a),s)
p.ac($.aQ()).e=a1.a.Q.c
if(a2)p.ac($.aP()).e=a1.a.cx.c
if(r)p.ac($.aO()).e=a1.a.ch.c
if(t.rx)p.ac($.bn()).e=a1.a.cy.c
if(q)p.ac($.bo()).e=a1.a.db.c
if(t.x1)p.ac($.bm()).e=a1.a.dx.c
a4.e=p}a2=T.dI
o=H.c([],[a2])
a1.a.an(a3)
if(t.fx){r=a1.a
q=a3.dx
q=q.gJ(q)
r=r.dy
r.toString
r.a7(q.a3(0,!0))}if(t.fy){r=a1.a
q=a3.geF()
r=r.fr
r.toString
r.a7(q.a3(0,!0))}r=a1.a
q=a3.geu()
r=r.fy
r.toString
r.a7(q.a3(0,!0))
if(t.x2){r=a1.a
q=a1.b
r=r.k1
r.toString
r.a7(C.l.a3(q,!0))}if(t.y1){r=a1.a
q=a1.c
r=r.k2
r.toString
r.a7(C.l.a3(q,!0))}if(t.y2){r=a1.a
q=a1.d
r=r.k3
r.toString
r.a7(C.l.a3(q,!0))}if(t.ap>0){n=a1.e.a.length
r=a1.a.k4
C.b.a0(r.a,r.d,n)
for(r=[P.w],m=0;m<n;++m){q=a1.a
l=a1.e.a
if(m>=l.length)return H.h(l,m)
l=l[m]
q.toString
H.j(l,"$iah")
q=q.r1
if(m>=q.length)return H.h(q,m)
q=q[m]
k=new Float32Array(H.cQ(H.k(l.a3(0,!0),"$ib",r,"$ab")))
C.b.eE(q.a,q.d,!1,k)}}switch(t.a){case C.c:break
case C.f:r=a1.a
q=a1.f.f
r=r.r2
r.toString
l=q.a
j=q.b
q=q.c
C.b.t(r.a,r.d,l,j,q)
break
case C.d:a1.T(o,a1.f.d)
r=a1.a
q=a1.f.d
r.af(r.rx,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
l=r.a
j=r.b
r=r.c
C.b.t(q.a,q.d,l,j,r)
break
case C.e:a1.T(o,a1.f.e)
r=a1.a
q=a1.f.e
r.ab(r.ry,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
l=r.a
j=r.b
r=r.c
C.b.t(q.a,q.d,l,j,r)
break}if(t.k2){switch(t.b){case C.c:break
case C.f:r=a1.a
q=a1.r.f
r=r.x2
r.toString
l=q.a
j=q.b
q=q.c
C.b.t(r.a,r.d,l,j,q)
break
case C.d:a1.T(o,a1.r.d)
r=a1.a
q=a1.r.d
r.af(r.y1,r.ap,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
l=r.a
j=r.b
r=r.c
C.b.t(q.a,q.d,l,j,r)
break
case C.e:a1.T(o,a1.r.e)
r=a1.a
q=a1.r.e
r.ab(r.y2,r.ap,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
l=r.a
j=r.b
r=r.c
C.b.t(q.a,q.d,l,j,r)
break}switch(t.c){case C.c:break
case C.f:r=a1.a
q=a1.x.f
r=r.ah
r.toString
l=q.a
j=q.b
q=q.c
C.b.t(r.a,r.d,l,j,q)
break
case C.d:a1.T(o,a1.x.d)
r=a1.a
q=a1.x.d
r.af(r.bn,r.bo,q)
q=a1.a
r=a1.x.f
q=q.ah
q.toString
l=r.a
j=r.b
r=r.c
C.b.t(q.a,q.d,l,j,r)
break
case C.e:a1.T(o,a1.x.e)
r=a1.a
q=a1.x.e
r.ab(r.dU,r.bo,q)
q=a1.a
r=a1.x.f
q=q.ah
q.toString
l=r.a
j=r.b
r=r.c
C.b.t(q.a,q.d,l,j,r)
break}switch(t.d){case C.c:break
case C.f:r=a1.a
q=a1.y.f
r=r.bp
r.toString
l=q.a
j=q.b
q=q.c
C.b.t(r.a,r.d,l,j,q)
break
case C.d:a1.T(o,a1.y.d)
r=a1.a
q=a1.y.d
r.af(r.dV,r.bq,q)
q=a1.a
r=a1.y.f
q=q.bp
q.toString
l=r.a
j=r.b
r=r.c
C.b.t(q.a,q.d,l,j,r)
break
case C.e:a1.T(o,a1.y.e)
r=a1.a
q=a1.y.e
r.ab(r.dW,r.bq,q)
q=a1.a
r=a1.y.f
q=q.bp
q.toString
l=r.a
j=r.b
r=r.c
C.b.t(q.a,q.d,l,j,r)
break}switch(t.e){case C.c:break
case C.f:r=a1.a
q=a1.z.f
r=r.br
r.toString
l=q.a
j=q.b
q=q.c
C.b.t(r.a,r.d,l,j,q)
q=a1.a
j=a1.z.ch
q=q.bt
C.b.K(q.a,q.d,j)
break
case C.d:a1.T(o,a1.z.d)
r=a1.a
q=a1.z.d
r.af(r.dX,r.bs,q)
q=a1.a
r=a1.z.f
q=q.br
q.toString
l=r.a
j=r.b
r=r.c
C.b.t(q.a,q.d,l,j,r)
r=a1.a
j=a1.z.ch
r=r.bt
C.b.K(r.a,r.d,j)
break
case C.e:a1.T(o,a1.z.e)
r=a1.a
q=a1.z.e
r.ab(r.dY,r.bs,q)
q=a1.a
r=a1.z.f
q=q.br
q.toString
l=r.a
j=r.b
r=r.c
C.b.t(q.a,q.d,l,j,r)
r=a1.a
j=a1.z.ch
r=r.bt
C.b.K(r.a,r.d,j)
break}if(t.z>0){n=a1.dx.e.length
r=a1.a.e8
C.b.a0(r.a,r.d,n)
r=a3.db
i=r.gJ(r)
for(r=a1.dx.e,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.D)(r),++g){f=r[g]
l=a1.a.cp
if(h>=l.length)return H.h(l,h)
e=l[h]
l=i.eC(f.gbm(f))
j=l.a
d=l.b
c=l.c
c=l.m(0,Math.sqrt(j*j+d*d+c*c))
d=e.b
j=c.a
l=c.b
c=c.c
C.b.t(d.a,d.d,j,l,c)
c=f.gU(f)
l=e.c
C.b.t(l.a,l.d,c.a,c.b,c.c);++h}}if(t.Q>0){n=a1.dx.f.length
r=a1.a.e9
C.b.a0(r.a,r.d,n)
r=a3.db
i=r.gJ(r)
for(r=a1.dx.f,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.D)(r),++g){f=r[g]
l=a1.a.cq
if(h>=l.length)return H.h(l,h)
e=l[h]
l=f.gb8(f)
j=e.b
C.b.t(j.a,j.d,l.a,l.b,l.c)
l=i.bb(f.gb8(f))
j=e.c
C.b.t(j.a,j.d,l.a,l.b,l.c)
l=f.gU(f)
j=e.d
C.b.t(j.a,j.d,l.a,l.b,l.c)
l=f.gcd()
j=e.e
C.b.K(j.a,j.d,l)
l=f.gce()
j=e.f
C.b.K(j.a,j.d,l)
l=f.gcf()
j=e.r
C.b.K(j.a,j.d,l);++h}}if(t.ch>0){n=a1.dx.r.length
r=a1.a.ea
C.b.a0(r.a,r.d,n)
r=a3.db
i=r.gJ(r)
for(r=a1.dx.r,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.D)(r),++g){f=r[g]
l=a1.a.cr
if(h>=l.length)return H.h(l,h)
e=l[h]
l=f.gb8(f)
j=e.b
C.b.t(j.a,j.d,l.a,l.b,l.c)
l=f.gbm(f).jr()
j=e.c
C.b.t(j.a,j.d,l.a,l.b,l.c)
l=i.bb(f.gb8(f))
j=e.d
C.b.t(j.a,j.d,l.a,l.b,l.c)
l=f.gU(f)
j=e.e
C.b.t(j.a,j.d,l.a,l.b,l.c)
l=f.gjq()
j=e.f
C.b.K(j.a,j.d,l)
l=f.gjp()
j=e.r
C.b.K(j.a,j.d,l)
l=f.gcd()
j=e.x
C.b.K(j.a,j.d,l)
l=f.gce()
j=e.y
C.b.K(j.a,j.d,l)
l=f.gcf()
j=e.z
C.b.K(j.a,j.d,l);++h}}if(t.cx>0){n=a1.dx.x.length
r=a1.a.eb
C.b.a0(r.a,r.d,n)
r=a3.db
i=r.gJ(r)
for(r=a1.dx.x,q=r.length,l=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.D)(r),++g){f=r[g]
j=a1.a.cs
if(h>=j.length)return H.h(j,h)
e=j[h]
j=f.gb9()
H.k(o,"$ib",l,"$ab")
if(!C.a.aO(o,j)){j.sb2(0,o.length)
C.a.h(o,j)}j=f.gbm(f)
d=e.d
C.b.t(d.a,d.d,j.a,j.b,j.c)
j=f.gaC()
d=e.b
C.b.t(d.a,d.d,j.a,j.b,j.c)
j=f.gbE(f)
d=e.c
C.b.t(d.a,d.d,j.a,j.b,j.c)
j=i.eC(f.gbm(f))
d=j.a
c=j.b
b=j.c
b=j.m(0,Math.sqrt(d*d+c*c+b*b))
c=e.e
d=b.a
j=b.b
b=b.c
C.b.t(c.a,c.d,d,j,b)
b=f.gU(f)
j=e.f
C.b.t(j.a,j.d,b.a,b.b,b.c)
b=f.gb9()
j=b.gb4(b)
if(!j){j=e.x
C.b.a0(j.a,j.d,1)}else{j=e.r
d=b.gb4(b)
c=j.a
j=j.d
if(!d)c.uniform1i(j,0)
else c.uniform1i(j,b.gb2(b))
j=e.x
C.b.a0(j.a,j.d,0)}++h}}if(t.cy>0){n=a1.dx.y.length
r=a1.a.ec
C.b.a0(r.a,r.d,n)
r=a3.db
i=r.gJ(r)
for(r=a1.dx.y,q=r.length,l=[P.w],j=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.D)(r),++g){f=r[g]
d=a1.a.ct
if(h>=d.length)return H.h(d,h)
e=d[h]
d=f.gb9()
H.k(o,"$ib",j,"$ab")
if(!C.a.aO(o,d)){d.sb2(0,o.length)
C.a.h(o,d)}a=i.n(0,f.gJ(f))
d=f.gJ(f)
c=$.cp
d=d.bb(c==null?$.cp=new V.a2(0,0,0):c)
c=e.b
C.b.t(c.a,c.d,d.a,d.b,d.c)
d=$.cp
d=a.bb(d==null?$.cp=new V.a2(0,0,0):d)
c=e.c
C.b.t(c.a,c.d,d.a,d.b,d.c)
d=a.eh(0)
c=e.d
k=new Float32Array(H.cQ(H.k(new V.du(d.a,d.b,d.c,d.e,d.f,d.r,d.y,d.z,d.Q).a3(0,!0),"$ib",l,"$ab")))
C.b.eD(c.a,c.d,!1,k)
c=f.gU(f)
d=e.e
C.b.t(d.a,d.d,c.a,c.b,c.c)
c=f.gb9()
d=c.gb4(c)
if(!d){d=e.r
C.b.a0(d.a,d.d,1)}else{d=e.f
b=c.gb4(c)
a0=d.a
d=d.d
if(!b)a0.uniform1i(d,0)
else a0.uniform1i(d,c.gb2(c))
d=e.r
C.b.a0(d.a,d.d,0)}d=f.gcd()
c=e.x
C.b.K(c.a,c.d,d)
d=f.gce()
c=e.y
C.b.K(c.a,c.d,d)
d=f.gcf()
c=e.z
C.b.K(c.a,c.d,d);++h}}if(t.db>0){n=a1.dx.z.length
r=a1.a.ed
C.b.a0(r.a,r.d,n)
r=a3.db
i=r.gJ(r)
for(r=a1.dx.z,q=r.length,a2=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.D)(r),++g){f=r[g]
l=a1.a.cu
if(h>=l.length)return H.h(l,h)
e=l[h]
l=f.gb9()
H.k(o,"$ib",a2,"$ab")
if(!C.a.aO(o,l)){l.sb2(0,o.length)
C.a.h(o,l)}l=f.gb8(f)
j=e.b
C.b.t(j.a,j.d,l.a,l.b,l.c)
l=f.gbm(f)
j=e.c
C.b.t(j.a,j.d,l.a,l.b,l.c)
l=f.gaC()
j=e.d
C.b.t(j.a,j.d,l.a,l.b,l.c)
l=f.gbE(f)
j=e.e
C.b.t(j.a,j.d,l.a,l.b,l.c)
l=i.bb(f.gb8(f))
j=e.f
C.b.t(j.a,j.d,l.a,l.b,l.c)
l=f.gb9()
j=l.gb4(l)
if(!j){l=e.x
C.b.a0(l.a,l.d,1)}else{j=e.r
d=l.gb4(l)
c=j.a
j=j.d
if(!d)c.uniform1i(j,0)
else c.uniform1i(j,l.gb2(l))
l=e.x
C.b.a0(l.a,l.d,0)}l=f.gU(f)
j=e.y
C.b.t(j.a,j.d,l.a,l.b,l.c)
l=f.gjs()
j=e.z
C.b.K(j.a,j.d,l)
l=f.gjt()
j=e.Q
C.b.K(j.a,j.d,l)
l=f.gcd()
j=e.ch
C.b.K(j.a,j.d,l)
l=f.gce()
j=e.cx
C.b.K(j.a,j.d,l)
l=f.gcf()
j=e.cy
C.b.K(j.a,j.d,l);++h}}}switch(t.f){case C.c:break
case C.f:break
case C.d:a1.T(o,a1.Q.d)
a2=a1.a
r=a1.Q.d
a2.af(a2.dZ,a2.bu,r)
break
case C.e:a1.T(o,a1.Q.e)
a2=a1.a
r=a1.Q.e
a2.ab(a2.e_,a2.bu,r)
break}if(t.fr){a2=a1.a
r=a3.Q
if(r==null){r=a3.db
r=a3.Q=r.gJ(r).eh(0)}a2=a2.id
a2.toString
a2.a7(r.a3(0,!0))}if(t.dy){a1.T(o,a1.ch)
a2=a1.a
r=a1.ch
a2.ab(a2.e0,a2.e1,r)
switch(t.r){case C.c:break
case C.f:a2=a1.a
r=a1.cx.f
a2=a2.bv
a2.toString
q=r.a
l=r.b
r=r.c
C.b.t(a2.a,a2.d,q,l,r)
break
case C.d:a1.T(o,a1.cx.d)
a2=a1.a
r=a1.cx.d
a2.af(a2.e2,a2.bw,r)
r=a1.a
a2=a1.cx.f
r=r.bv
r.toString
q=a2.a
l=a2.b
a2=a2.c
C.b.t(r.a,r.d,q,l,a2)
break
case C.e:a1.T(o,a1.cx.e)
a2=a1.a
r=a1.cx.e
a2.ab(a2.e3,a2.bw,r)
r=a1.a
a2=a1.cx.f
r=r.bv
r.toString
q=a2.a
l=a2.b
a2=a2.c
C.b.t(r.a,r.d,q,l,a2)
break}switch(t.x){case C.c:break
case C.f:a2=a1.a
r=a1.cy.f
a2=a2.by
a2.toString
q=r.a
l=r.b
r=r.c
C.b.t(a2.a,a2.d,q,l,r)
r=a1.a
l=a1.cy.ch
r=r.bx
C.b.K(r.a,r.d,l)
break
case C.d:a1.T(o,a1.cy.d)
a2=a1.a
r=a1.cy.d
a2.af(a2.e4,a2.bz,r)
r=a1.a
a2=a1.cy.f
r=r.by
r.toString
q=a2.a
l=a2.b
a2=a2.c
C.b.t(r.a,r.d,q,l,a2)
a2=a1.a
l=a1.cy.ch
a2=a2.bx
C.b.K(a2.a,a2.d,l)
break
case C.e:a1.T(o,a1.cy.e)
a2=a1.a
r=a1.cy.e
a2.ab(a2.e5,a2.bz,r)
r=a1.a
a2=a1.cy.f
r=r.by
r.toString
q=a2.a
l=a2.b
a2=a2.c
C.b.t(r.a,r.d,q,l,a2)
a2=a1.a
l=a1.cy.ch
a2=a2.bx
C.b.K(a2.a,a2.d,l)
break}}a2=t.y
r=a2!==C.c
if(r){switch(a2){case C.c:break
case C.f:a2=a1.a
q=a1.db.f
a2=a2.bA
C.b.K(a2.a,a2.d,q)
break
case C.d:a1.T(o,a1.db.d)
a2=a1.a
q=a1.db.d
a2.af(a2.e6,a2.bB,q)
q=a1.a
a2=a1.db.f
q=q.bA
C.b.K(q.a,q.d,a2)
break
case C.e:a1.T(o,a1.db.e)
a2=a1.a
q=a1.db.e
a2.ab(a2.e7,a2.bB,q)
q=a1.a
a2=a1.db.f
q=q.bA
C.b.K(q.a,q.d,a2)
break}a2=a3.a
a2.enable(3042)
a2.blendFunc(770,771)}for(m=0;m<o.length;++m)o[m].an(a3)
a2=H.f(a4.e,"$ibp")
a2.an(a3)
a2.aj(a3)
a2.cL(a3)
if(r)a3.a.disable(3042)
for(m=0;m<o.length;++m)o[m].cL(a3)
a2=a1.a
a2.toString
a3.a.useProgram(null)
a2.x.dQ()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dd().ah},
sfa:function(a){this.e=H.k(a,"$ia1",[V.ah],"$aa1")}}
O.fU.prototype={
c5:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.K().a)){u.f=a
t=new D.I(u.b,t,a,[P.w])
t.b=!0
u.a.X(t)}},
av:function(){this.cV()
this.c5(1)},
sbH:function(a,b){var u,t=this
if(b<=0)t.iF(0)
else if(t.c===C.c){t.c=C.f
t.cW()
t.c5(1)
u=t.a
u.a=null
u.X(null)}t.c5(b)}}
O.dt.prototype={
av:function(){},
aJ:function(){},
iF:function(a){var u,t=this
if(t.c!==C.c){t.c=C.c
u=t.a
u.a=null
u.X(null)}t.av()
t.a.X(null)}}
O.fV.prototype={}
O.b0.prototype={
c6:function(a){var u,t,s=this
if(!J.F(s.f,a)){u=s.f
s.f=a
t=new D.I(s.b+".color",u,a,[V.a5])
t.b=!0
s.a.X(t)}},
av:function(){this.cV()
this.c6(new V.a5(0,0,0))},
aJ:function(){this.cW()
this.c6(new V.a5(1,1,1))},
sU:function(a,b){var u,t=this
if(t.c===C.c){t.c=C.f
t.aJ()
u=t.a
u.a=null
u.X(null)}t.c6(b)}}
O.fX.prototype={
dA:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.K().a)){u.ch=a
t=new D.I(u.b+".refraction",t,a,[P.w])
t.b=!0
u.a.X(t)}},
av:function(){this.cX()
this.dA(1)},
aJ:function(){this.cY()
this.dA(1)}}
O.fY.prototype={
dB:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.K().a)){u.ch=a
t=new D.I(u.b+".shininess",t,a,[P.w])
t.b=!0
u.a.X(t)}},
av:function(){this.cX()
this.dB(100)},
aJ:function(){this.cY()
this.dB(100)}}
O.by.prototype={}
T.dI.prototype={}
V.eS.prototype={
aP:function(a,b){return!0},
i:function(a){return"all"},
$ibf:1}
V.bf.prototype={}
V.dq.prototype={
aP:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)if(u[s].aP(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.D)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sau:function(a){this.a=H.k(a,"$ib",[V.bf],"$ab")},
$ibf:1}
V.bh.prototype={
aP:function(a,b){return!this.eO(0,b)},
i:function(a){return"!["+this.cU(0)+"]"}}
V.hr.prototype={
eR:function(a){var u,t
if(a.a.length<=0)throw H.i(P.p("May not create a SetMatcher with zero characters."))
u=new H.aG([P.C,P.a7])
for(t=new H.dn(a,a.gk(a),[H.aF(a,"v",0)]);t.A();)u.a1(0,t.d,!0)
this.shG(u)},
aP:function(a,b){return this.a.dO(0,b)},
i:function(a){var u=this.a
return P.jE(new H.dm(u,[H.x(u,0)]))},
shG:function(a){this.a=H.k(a,"$iP",[P.C,P.a7],"$aP")},
$ibf:1}
V.cs.prototype={
C:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cv(this.a.N(0,b))
r.sau(H.c([],[V.bf]))
r.c=!1
C.a.h(this.c,r)
return r},
iN:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(r.aP(0,a))return r}return},
i:function(a){return this.b},
si_:function(a){this.c=H.k(a,"$ib",[V.cv],"$ab")}}
V.dN.prototype={
i:function(a){var u=H.kZ(this.b,"\n","\\n"),t=H.kZ(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cu.prototype={
i:function(a){return this.b},
shB:function(a){var u=P.o
this.c=H.k(a,"$iP",[u,u],"$aP")}}
V.hQ.prototype={
N:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cs(this,b)
u.si_(H.c([],[V.cv]))
u.d=null
this.a.a1(0,b,u)}return u},
ba:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cu(a)
u=P.o
t.shB(new H.aG([u,u]))
this.b.a1(0,a,t)}return t},
jm:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.dN]),l=this.c,k=[P.C],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.j.be(a,s)
q=l.iN(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.jE(j)
throw H.i(P.p("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.jE(j)
o=l.d
n=o.c.j(0,p)
t=new V.dN(n==null?o.b:n,p,s)}++s}}},
shQ:function(a){this.a=H.k(a,"$iP",[P.o,V.cs],"$aP")},
shT:function(a){this.b=H.k(a,"$iP",[P.o,V.cu],"$aP")}}
V.cv.prototype={
i:function(a){return this.b.b+": "+this.cU(0)}}
X.d1.prototype={$ibg:1}
X.fu.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.T():u}}
X.dz.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.T():u},
ar:function(a){var u
H.j(a,"$iu")
u=this.f
if(u!=null)u.D(a)},
f4:function(){return this.ar(null)},
sW:function(a){var u,t,s=this
if(!J.F(s.b,a)){u=s.b
if(u!=null)u.gq().w(0,s.gbd())
t=s.b
s.b=a
if(a!=null)a.gq().h(0,s.gbd())
u=new D.I("mover",t,s.b,[U.aa])
u.b=!0
s.ar(u)}},
saB:function(a){var u,t,s=this
if(!J.F(s.a,a)){u=s.a
if(u!=null)u.gq().w(0,s.gbd())
t=s.a
s.a=a
if(a!=null)a.gq().h(0,s.gbd())
u=new D.I("premover",t,s.a,[U.aa])
u.b=!0
s.ar(u)}},
$ibg:1,
$id1:1}
X.dH.prototype={}
V.hv.prototype={
eS:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.n
W.ad(q,"scroll",H.m(new V.hx(o),{func:1,ret:-1,args:[r]}),!1,r)},
cb:function(a,b){var u,t,s,r,q
a=H.ae(C.h.iE(a,0,4))
u=P.kB(C.t,b,C.m,!1)
t=document.createElement("div")
t.className="textHeader"
t.id=u
s=t.style
r=""+(28-a*3)+"px"
s.fontSize=r
q=W.lj()
q.href="#"+u
q.textContent=b
t.appendChild(q)
this.a.appendChild(t)},
ag:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.o],"$ab")
this.hJ()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.jm(C.a.iT(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q){p=s[q]
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
if(H.mz(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.W(m[1])
l.textContent=H.W(m[0])
t.appendChild(l)}else{k=P.kB(C.t,n,C.m,!1)
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
cc:function(a){var u=W.k3()
u.className="pageLargeCanvas"
u.id=a
this.a.appendChild(u)},
hJ:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.hQ()
t=P.o
u.shQ(new H.aG([t,V.cs]))
u.shT(new H.aG([t,V.cu]))
u.c=null
u.c=u.N(0,q)
t=u.N(0,q).C(0,p)
s=V.aj(new H.a8("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,p).C(0,p)
s=new V.bh()
r=[V.bf]
s.sau(H.c([],r))
C.a.h(t.a,s)
t=V.aj(new H.a8("*"))
C.a.h(s.a,t)
t=u.N(0,p).C(0,"BoldEnd")
s=V.aj(new H.a8("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,q).C(0,o)
s=V.aj(new H.a8("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,o).C(0,o)
s=new V.bh()
s.sau(H.c([],r))
C.a.h(t.a,s)
t=V.aj(new H.a8("_"))
C.a.h(s.a,t)
t=u.N(0,o).C(0,n)
s=V.aj(new H.a8("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,q).C(0,m)
s=V.aj(new H.a8("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,m).C(0,m)
s=new V.bh()
s.sau(H.c([],r))
C.a.h(t.a,s)
t=V.aj(new H.a8("`"))
C.a.h(s.a,t)
t=u.N(0,m).C(0,"CodeEnd")
s=V.aj(new H.a8("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,q).C(0,l)
s=V.aj(new H.a8("["))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,l).C(0,k)
s=V.aj(new H.a8("|"))
C.a.h(t.a,s)
s=u.N(0,l).C(0,j)
t=V.aj(new H.a8("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,l).C(0,l)
t=new V.bh()
t.sau(H.c([],r))
C.a.h(s.a,t)
s=V.aj(new H.a8("|]"))
C.a.h(t.a,s)
s=u.N(0,k).C(0,j)
t=V.aj(new H.a8("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,k).C(0,k)
t=new V.bh()
t.sau(H.c([],r))
C.a.h(s.a,t)
s=V.aj(new H.a8("|]"))
C.a.h(t.a,s)
C.a.h(u.N(0,q).C(0,i).a,new V.eS())
s=u.N(0,i).C(0,i)
t=new V.bh()
t.sau(H.c([],r))
C.a.h(s.a,t)
s=V.aj(new H.a8("*_`["))
C.a.h(t.a,s)
s=u.N(0,"BoldEnd")
s.d=s.a.ba(p)
s=u.N(0,n)
s.d=s.a.ba(o)
s=u.N(0,"CodeEnd")
s.d=s.a.ba(m)
s=u.N(0,j)
s.d=s.a.ba("Link")
s=u.N(0,i)
s.d=s.a.ba(i)
this.b=u}}
V.hx.prototype={
$1:function(a){P.kp(C.o,new V.hw(this.a))},
$S:41}
V.hw.prototype={
$0:function(){var u=C.i.ak(document.documentElement.scrollTop),t=this.a.style,s=H.l(-0.01*u)+"px"
t.top=s},
$S:3}
M.jh.prototype={
$1:function(a){H.j(a,"$iu")
this.a.b=!0},
$S:1}
M.ji.prototype={
$1:function(a){H.j(a,"$iu")
this.a.b=!1},
$S:1}
M.jj.prototype={
$1:function(a){var u,t,s,r,q,p,o=this
a=H.f(H.j(a,"$iu"),"$iaz")
u=o.a
if(!u.b)return
t=u.a
s=a.c
r=a.d.F(0,a.z)
s=new V.Q(r.a,r.b).n(0,2).m(0,s.ga_()).b
if(typeof s!=="number")return H.A(s)
q=u.a=t+s
if(q<-0.1)q=-0.1
else if(q>1.1)q=1.1
u.a=q
o.b.sJ(0,V.ai(0,1-2*q,0))
u=u.a
t=u<=0||u>=1
s=o.c
r=o.d
if(t)r.b=s.b=!1
else{p=Math.sin(u*3.141592653589793)
o.e.sJ(0,V.bQ(p,p,p,1))
r.b=s.b=!0}},
$S:1}
M.jk.prototype={
$1:function(a){H.j(a,"$iu")
this.a.b=!0},
$S:1}
M.jl.prototype={
$1:function(a){H.j(a,"$iu")
this.a.b=!1},
$S:1}
M.jm.prototype={
$1:function(a){var u,t,s,r,q,p,o=this
a=H.f(H.j(a,"$iu"),"$iaz")
u=o.a
if(!u.b)return
t=u.a
s=a.c
r=a.d.F(0,a.z)
s=new V.Q(r.a,r.b).n(0,2).m(0,s.ga_()).b
if(typeof s!=="number")return H.A(s)
q=u.a=t+s
if(q<-0.1)q=-0.1
else if(q>1.1)q=1.1
u.a=q
o.b.sJ(0,V.ai(0,1-2*q,0))
u=u.a
t=u<=0||u>=1
s=o.c
r=o.d
if(t)r.b=s.b=!1
else{p=Math.sin(u*3.141592653589793)
o.e.sJ(0,V.bQ(p,p,p,1))
r.b=s.b=!0}},
$S:1}
M.jn.prototype={
$1:function(a){H.j(a,"$iu")
this.a.b=!0},
$S:1}
M.jo.prototype={
$1:function(a){H.j(a,"$iu")
this.a.b=!1},
$S:1}
M.jp.prototype={
$1:function(a){var u,t,s,r,q,p,o=this
a=H.f(H.j(a,"$iu"),"$iaz")
u=o.a
if(!u.b)return
t=a.c
s=a.d
if(new V.X((s.a-t.a-t.c*0.5)*2,(s.b-t.b-t.d*0.5)*2).m(0,t.ga_()).a>0)return
r=u.a
s=s.F(0,a.z)
t=new V.Q(s.a,s.b).n(0,2).m(0,t.ga_()).b
if(typeof t!=="number")return H.A(t)
q=u.a=r+t
if(q<-0.1)q=-0.1
else if(q>1.1)q=1.1
u.a=q
o.b.sJ(0,V.ai(0,1-2*q,0))
u=u.a
t=u<=0||u>=1
s=o.c
r=o.d
if(t)r.b=s.b=!1
else{p=Math.sin(u*3.141592653589793)
o.e.sJ(0,V.bQ(p,p,p,1))
r.b=s.b=!0}a.b=!1},
$S:1};(function aliases(){var u=J.a.prototype
u.eM=u.i
u=J.dj.prototype
u.eN=u.i
u=O.dt.prototype
u.cV=u.av
u.cW=u.aJ
u=O.b0.prototype
u.cX=u.av
u.cY=u.aJ
u=V.dq.prototype
u.eO=u.aP
u.cU=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"m9","lV",12)
u(P,"ma","lW",12)
u(P,"mb","lX",12)
t(P,"kK","m7",4)
var n
s(n=E.an.prototype,"geo",0,0,null,["$1","$0"],["ep","j2"],0,0)
s(n,"geq",0,0,null,["$1","$0"],["er","j3"],0,0)
s(n,"gem",0,0,null,["$1","$0"],["en","j1"],0,0)
s(n,"gek",0,0,null,["$1","$0"],["el","iZ"],0,0)
r(n,"giX","iY",8)
r(n,"gj_","j0",8)
s(n=E.dM.prototype,"gd_",0,0,null,["$1","$0"],["d1","d0"],0,0)
q(n,"gjf","ez",4)
p(n=X.dU.prototype,"gfZ","h_",10)
p(n,"gfN","fO",10)
p(n,"gfT","fU",6)
p(n,"gh2","h3",17)
p(n,"gh0","h1",17)
p(n,"gh6","h7",6)
p(n,"gha","hb",6)
p(n,"gfX","fY",6)
p(n,"gh8","h9",6)
p(n,"gfV","fW",6)
p(n,"ghc","hd",32)
p(n,"ghe","hf",10)
p(n,"ghu","hv",11)
p(n,"ghq","hr",11)
p(n,"ghs","ht",11)
s(n=D.dl.prototype,"gdn",0,0,null,["$1","$0"],["dq","h4"],0,0)
p(n,"ghg","hh",33)
r(n,"gfH","fI",18)
r(n,"ghk","hl",18)
o(V.Q.prototype,"gk","b3",9)
o(V.B.prototype,"gk","b3",9)
o(V.bk.prototype,"gk","b3",9)
s(n=U.cg.prototype,"gaI",0,0,null,["$1","$0"],["O","a5"],0,0)
r(n,"gf_","f0",19)
r(n,"ghi","hj",19)
s(n=U.dV.prototype,"gaI",0,0,null,["$1","$0"],["O","a5"],0,0)
p(n,"gbT","bU",2)
p(n,"gbV","bW",2)
p(n,"gbX","bY",2)
s(n=U.dW.prototype,"gaI",0,0,null,["$1","$0"],["O","a5"],0,0)
p(n,"gbT","bU",2)
p(n,"gbV","bW",2)
p(n,"gbX","bY",2)
p(n,"gfA","fB",2)
p(n,"gfC","fD",2)
p(n,"ghY","hZ",2)
p(n,"ghW","hX",2)
p(n,"ghU","hV",2)
p(U.dX.prototype,"gfF","fG",2)
s(n=M.d3.prototype,"ga8",0,0,null,["$1","$0"],["a4","bJ"],0,0)
r(n,"ghm","hn",20)
r(n,"gho","hp",20)
s(n=M.db.prototype,"ga8",0,0,null,["$1","$0"],["a4","bJ"],0,0)
r(n,"gfP","fQ",8)
r(n,"gfR","fS",8)
p(n=O.df.prototype,"ghM","hN",37)
s(n,"gi5",0,1,null,["$2$color","$1"],["dE","i6"],38,0)
s(n=O.ds.prototype,"gf1",0,0,null,["$1","$0"],["X","f2"],0,0)
s(n,"ghE",0,0,null,["$1","$0"],["dw","hF"],0,0)
r(n,"gfJ","fK",23)
r(n,"gfL","fM",23)
s(X.dz.prototype,"gbd",0,0,null,["$1","$0"],["ar","f4"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.U,null)
s(P.U,[H.jA,J.a,J.al,P.ef,P.e,H.dn,P.aY,H.bN,H.dT,H.hV,P.br,H.c7,H.ew,P.ag,H.fL,H.fM,H.fG,P.iY,P.bc,P.aD,P.e0,P.hG,P.ct,P.hH,P.am,P.j0,P.iV,P.cG,P.iP,P.v,P.c8,P.j_,P.a7,P.aU,P.ab,P.bM,P.he,P.dG,P.e8,P.ft,P.b,P.P,P.L,P.au,P.o,P.bx,W.f7,W.y,W.dd,P.iQ,O.a1,O.ci,E.f0,E.an,E.hj,E.dM,Z.dZ,Z.e_,Z.bp,Z.d_,Z.bs,Z.aN,D.f3,D.cd,D.u,X.d0,X.dk,X.fI,X.fP,X.aw,X.h4,X.hR,X.dU,D.d7,D.a6,D.dA,D.dF,D.dJ,D.dK,D.dL,V.a5,V.O,V.fj,V.du,V.ah,V.X,V.a2,V.aA,V.dD,V.Q,V.B,V.bk,U.dV,U.dW,U.dX,M.db,M.ao,A.cW,A.eW,A.fW,A.cx,A.cB,A.cz,A.cC,A.cA,A.cD,A.bL,A.dP,A.i3,F.Z,F.fm,F.af,F.fK,F.bw,F.ap,F.hs,F.ht,F.hu,F.R,F.ib,F.ic,F.ih,F.ii,F.ij,F.ik,O.by,O.dt,V.eS,V.bf,V.dq,V.hr,V.cs,V.dN,V.cu,V.hQ,X.d1,X.dH,X.dz,V.hv])
s(J.a,[J.fE,J.dh,J.dj,J.aZ,J.di,J.ch,H.cn,W.d,W.eR,W.cX,W.aS,W.aT,W.V,W.e2,W.fb,W.fc,W.e4,W.da,W.e6,W.fe,W.n,W.e9,W.aW,W.fw,W.eb,W.fO,W.fZ,W.eg,W.eh,W.b2,W.ei,W.el,W.b3,W.ep,W.er,W.b6,W.es,W.b7,W.ex,W.aJ,W.eA,W.hP,W.b9,W.eC,W.hT,W.i8,W.eG,W.eI,W.eK,W.eM,W.eO,P.be,P.ed,P.bi,P.en,P.hi,P.ey,P.bj,P.eE,P.eX,P.e1,P.cY,P.dB,P.bV,P.dE,P.dQ,P.eu])
s(J.dj,[J.hf,J.dR,J.bv])
t(J.jz,J.aZ)
s(J.di,[J.dg,J.fF])
t(P.fN,P.ef)
s(P.fN,[H.dS,W.ix,W.iw,P.fp])
t(H.a8,H.dS)
s(P.e,[H.fh,H.fS,H.ip])
s(P.aY,[H.fT,H.iq])
s(P.br,[H.hb,H.fH,H.i6,H.hX,H.f2,H.hp,P.eV,P.dy,P.bd,P.i7,P.i5,P.hC,P.f5,P.fa])
s(H.c7,[H.jq,H.hL,H.ja,H.jb,H.jc,P.it,P.is,P.iu,P.iv,P.iZ,P.iC,P.iG,P.iD,P.iE,P.iF,P.iJ,P.iK,P.iI,P.iH,P.hI,P.hJ,P.j4,P.iT,P.iS,P.iU,P.fR,P.ff,P.fg,W.h0,W.h2,W.ho,W.hF,W.iB,P.j6,P.fq,P.fr,P.eZ,E.hk,E.hl,E.hm,E.hO,D.fk,D.fl,F.j1,F.j7,F.im,F.il,F.id,F.ie,O.fy,O.fz,O.fB,O.fA,O.fC,O.fD,V.hx,V.hw,M.jh,M.ji,M.jj,M.jk,M.jl,M.jm,M.jn,M.jo,M.jp])
s(H.hL,[H.hD,H.c5])
t(H.ir,P.eV)
t(P.fQ,P.ag)
t(H.aG,P.fQ)
t(H.dm,H.fh)
t(H.dv,H.cn)
s(H.dv,[H.cH,H.cJ])
t(H.cI,H.cH)
t(H.cm,H.cI)
t(H.cK,H.cJ)
t(H.dw,H.cK)
s(H.dw,[H.h5,H.h6,H.h7,H.h8,H.h9,H.dx,H.ha])
t(P.iR,P.j0)
t(P.iO,P.iV)
t(P.d5,P.hH)
t(P.fi,P.c8)
t(P.i9,P.fi)
t(P.ia,P.d5)
s(P.ab,[P.w,P.C])
s(P.bd,[P.bU,P.fx])
s(W.d,[W.H,W.fo,W.b5,W.cL,W.b8,W.aK,W.cN,W.io,W.cE,P.f_,P.bJ])
s(W.H,[W.a9,W.bq])
s(W.a9,[W.t,P.q])
s(W.t,[W.eT,W.eU,W.bK,W.d8,W.fs,W.hq])
s(W.aS,[W.ca,W.f8,W.f9])
t(W.f6,W.aT)
t(W.cb,W.e2)
t(W.e5,W.e4)
t(W.d9,W.e5)
t(W.e7,W.e6)
t(W.fd,W.e7)
t(W.aV,W.cX)
t(W.ea,W.e9)
t(W.fn,W.ea)
t(W.ec,W.eb)
t(W.bO,W.ec)
t(W.bz,W.n)
s(W.bz,[W.b_,W.ac,W.aL])
t(W.h_,W.eg)
t(W.h1,W.eh)
t(W.ej,W.ei)
t(W.h3,W.ej)
t(W.em,W.el)
t(W.co,W.em)
t(W.eq,W.ep)
t(W.hg,W.eq)
t(W.hn,W.er)
t(W.cM,W.cL)
t(W.hz,W.cM)
t(W.et,W.es)
t(W.hA,W.et)
t(W.hE,W.ex)
t(W.eB,W.eA)
t(W.hM,W.eB)
t(W.cO,W.cN)
t(W.hN,W.cO)
t(W.eD,W.eC)
t(W.hS,W.eD)
t(W.bb,W.ac)
t(W.eH,W.eG)
t(W.iy,W.eH)
t(W.e3,W.da)
t(W.eJ,W.eI)
t(W.iL,W.eJ)
t(W.eL,W.eK)
t(W.ek,W.eL)
t(W.eN,W.eM)
t(W.iW,W.eN)
t(W.eP,W.eO)
t(W.iX,W.eP)
t(W.iz,P.hG)
t(W.jJ,W.iz)
t(W.iA,P.ct)
t(P.at,P.iQ)
t(P.ee,P.ed)
t(P.fJ,P.ee)
t(P.eo,P.en)
t(P.hc,P.eo)
t(P.ez,P.ey)
t(P.hK,P.ez)
t(P.eF,P.eE)
t(P.hU,P.eF)
t(P.eY,P.e1)
t(P.hd,P.bJ)
t(P.ev,P.eu)
t(P.hB,P.ev)
s(E.f0,[Z.cZ,A.cr,T.dI])
s(D.u,[D.bt,D.bu,D.I,X.hh])
s(X.hh,[X.dp,X.az,X.cl,X.dO])
s(O.a1,[D.dl,U.cg,M.d3])
s(D.f3,[U.f4,U.aa])
t(U.d4,U.aa)
s(A.cr,[A.de,A.dr])
s(A.dP,[A.M,A.i0,A.i1,A.i2,A.hZ,A.a_,A.i_,A.J,A.cw,A.i4,A.cy,A.ak,A.aq,A.ar])
t(F.hy,F.fm)
t(F.hY,F.fK)
t(F.dY,F.ii)
t(F.ig,F.ij)
s(O.by,[O.df,O.ds])
s(O.dt,[O.fU,O.fV,O.b0])
s(O.b0,[O.fX,O.fY])
s(V.dq,[V.bh,V.cv])
t(X.fu,X.dH)
u(H.dS,H.dT)
u(H.cH,P.v)
u(H.cI,H.bN)
u(H.cJ,P.v)
u(H.cK,H.bN)
u(P.ef,P.v)
u(W.e2,W.f7)
u(W.e4,P.v)
u(W.e5,W.y)
u(W.e6,P.v)
u(W.e7,W.y)
u(W.e9,P.v)
u(W.ea,W.y)
u(W.eb,P.v)
u(W.ec,W.y)
u(W.eg,P.ag)
u(W.eh,P.ag)
u(W.ei,P.v)
u(W.ej,W.y)
u(W.el,P.v)
u(W.em,W.y)
u(W.ep,P.v)
u(W.eq,W.y)
u(W.er,P.ag)
u(W.cL,P.v)
u(W.cM,W.y)
u(W.es,P.v)
u(W.et,W.y)
u(W.ex,P.ag)
u(W.eA,P.v)
u(W.eB,W.y)
u(W.cN,P.v)
u(W.cO,W.y)
u(W.eC,P.v)
u(W.eD,W.y)
u(W.eG,P.v)
u(W.eH,W.y)
u(W.eI,P.v)
u(W.eJ,W.y)
u(W.eK,P.v)
u(W.eL,W.y)
u(W.eM,P.v)
u(W.eN,W.y)
u(W.eO,P.v)
u(W.eP,W.y)
u(P.ed,P.v)
u(P.ee,W.y)
u(P.en,P.v)
u(P.eo,W.y)
u(P.ey,P.v)
u(P.ez,W.y)
u(P.eE,P.v)
u(P.eF,W.y)
u(P.e1,P.ag)
u(P.eu,P.v)
u(P.ev,W.y)})();(function constants(){var u=hunkHelpers.makeConstList
C.n=W.bK.prototype
C.F=J.a.prototype
C.a=J.aZ.prototype
C.h=J.dg.prototype
C.l=J.dh.prototype
C.i=J.di.prototype
C.j=J.ch.prototype
C.G=J.bv.prototype
C.H=W.co.prototype
C.u=J.hf.prototype
C.b=P.bV.prototype
C.p=J.dR.prototype
C.v=W.bb.prototype
C.w=W.cE.prototype
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.x=function() {
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
C.C=function(getTagFallback) {
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
C.y=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.z=function(hooks) {
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
C.B=function(hooks) {
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
C.A=function(hooks) {
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

C.D=new P.he()
C.m=new P.i9()
C.E=new P.ia()
C.k=new P.iR()
C.c=new A.bL(0,"ColorSourceType.None")
C.f=new A.bL(1,"ColorSourceType.Solid")
C.d=new A.bL(2,"ColorSourceType.Texture2D")
C.e=new A.bL(3,"ColorSourceType.TextureCube")
C.o=new P.bM(0)
C.t=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.C])})()
var v={mangledGlobalNames:{C:"int",w:"double",ab:"num",o:"String",a7:"bool",L:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.u]},{func:1,ret:P.L,args:[D.u]},{func:1,ret:-1,args:[D.u]},{func:1,ret:P.L},{func:1,ret:-1},{func:1,ret:P.L,args:[F.Z]},{func:1,ret:-1,args:[W.ac]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.C,[P.e,E.an]]},{func:1,ret:P.w},{func:1,ret:-1,args:[W.n]},{func:1,ret:-1,args:[W.aL]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.o,args:[P.C]},{func:1,ret:P.L,args:[,]},{func:1,args:[,]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.u]}]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:-1,args:[P.C,[P.e,D.a6]]},{func:1,ret:-1,args:[P.C,[P.e,U.aa]]},{func:1,ret:-1,args:[P.C,[P.e,M.ao]]},{func:1,ret:P.L,args:[,,]},{func:1,ret:P.L,args:[F.R]},{func:1,ret:-1,args:[P.C,[P.e,V.ah]]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,args:[W.n]},{func:1,ret:W.a9,args:[W.H]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,args:[,P.o]},{func:1,args:[P.o]},{func:1,ret:P.L,args:[P.ab]},{func:1,ret:P.a7,args:[W.H]},{func:1,ret:-1,args:[W.bb]},{func:1,ret:P.a7,args:[[P.e,D.a6]]},{func:1,ret:[P.aD,,],args:[,]},{func:1,ret:P.L,args:[F.R,P.w,P.w]},{func:1,ret:P.w,args:[P.w]},{func:1,ret:F.ap,args:[F.ap]},{func:1,ret:F.ap,args:[F.ap],named:{color:V.O}},{func:1,ret:-1,args:[F.R,F.R]},{func:1,ret:P.L,args:[F.af]},{func:1,ret:P.L,args:[W.n]},{func:1,ret:P.L,args:[,],opt:[P.au]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aR=0
$.c6=null
$.k1=null
$.jL=!1
$.kQ=null
$.kI=null
$.kX=null
$.j8=null
$.jd=null
$.jV=null
$.bX=null
$.cR=null
$.cS=null
$.jM=!1
$.a3=C.k
$.av=[]
$.ka=null
$.ke=null
$.cp=null
$.kl=null
$.ks=null
$.kv=null
$.ku=null
$.kt=null
$.kx=null
$.kd=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mI","l1",function(){return H.kP("_$dart_dartClosure")})
u($,"mJ","jZ",function(){return H.kP("_$dart_js")})
u($,"mL","l2",function(){return H.ba(H.hW({
toString:function(){return"$receiver$"}}))})
u($,"mM","l3",function(){return H.ba(H.hW({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mN","l4",function(){return H.ba(H.hW(null))})
u($,"mO","l5",function(){return H.ba(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mR","l8",function(){return H.ba(H.hW(void 0))})
u($,"mS","l9",function(){return H.ba(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mQ","l7",function(){return H.ba(H.kq(null))})
u($,"mP","l6",function(){return H.ba(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mU","lb",function(){return H.ba(H.kq(void 0))})
u($,"mT","la",function(){return H.ba(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"n7","k_",function(){return P.lU()})
u($,"n8","lf",function(){return P.lN("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"n0","le",function(){return Z.aC(0)})
u($,"mV","lc",function(){return Z.aC(511)})
u($,"n2","aQ",function(){return Z.aC(1)})
u($,"n1","aP",function(){return Z.aC(2)})
u($,"mX","aO",function(){return Z.aC(4)})
u($,"n3","bn",function(){return Z.aC(8)})
u($,"n4","bo",function(){return Z.aC(16)})
u($,"mY","bH",function(){return Z.aC(32)})
u($,"mZ","cV",function(){return Z.aC(64)})
u($,"n_","ld",function(){return Z.aC(96)})
u($,"n5","c2",function(){return Z.aC(128)})
u($,"mW","bm",function(){return Z.aC(256)})
u($,"mH","l0",function(){return new V.fj(1e-9)})
u($,"mG","K",function(){return $.l0()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cn,ArrayBufferView:H.cn,Float32Array:H.cm,Float64Array:H.cm,Int16Array:H.h5,Int32Array:H.h6,Int8Array:H.h7,Uint16Array:H.h8,Uint32Array:H.h9,Uint8ClampedArray:H.dx,CanvasPixelArray:H.dx,Uint8Array:H.ha,HTMLAudioElement:W.t,HTMLBRElement:W.t,HTMLBaseElement:W.t,HTMLBodyElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLImageElement:W.t,HTMLInputElement:W.t,HTMLLIElement:W.t,HTMLLabelElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMediaElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableCellElement:W.t,HTMLTableDataCellElement:W.t,HTMLTableHeaderCellElement:W.t,HTMLTableColElement:W.t,HTMLTableElement:W.t,HTMLTableRowElement:W.t,HTMLTableSectionElement:W.t,HTMLTemplateElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLVideoElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,AccessibleNodeList:W.eR,HTMLAnchorElement:W.eT,HTMLAreaElement:W.eU,Blob:W.cX,HTMLCanvasElement:W.bK,CDATASection:W.bq,CharacterData:W.bq,Comment:W.bq,ProcessingInstruction:W.bq,Text:W.bq,CSSNumericValue:W.ca,CSSUnitValue:W.ca,CSSPerspective:W.f6,CSSCharsetRule:W.V,CSSConditionRule:W.V,CSSFontFaceRule:W.V,CSSGroupingRule:W.V,CSSImportRule:W.V,CSSKeyframeRule:W.V,MozCSSKeyframeRule:W.V,WebKitCSSKeyframeRule:W.V,CSSKeyframesRule:W.V,MozCSSKeyframesRule:W.V,WebKitCSSKeyframesRule:W.V,CSSMediaRule:W.V,CSSNamespaceRule:W.V,CSSPageRule:W.V,CSSRule:W.V,CSSStyleRule:W.V,CSSSupportsRule:W.V,CSSViewportRule:W.V,CSSStyleDeclaration:W.cb,MSStyleCSSProperties:W.cb,CSS2Properties:W.cb,CSSImageValue:W.aS,CSSKeywordValue:W.aS,CSSPositionValue:W.aS,CSSResourceValue:W.aS,CSSURLImageValue:W.aS,CSSStyleValue:W.aS,CSSMatrixComponent:W.aT,CSSRotation:W.aT,CSSScale:W.aT,CSSSkew:W.aT,CSSTranslation:W.aT,CSSTransformComponent:W.aT,CSSTransformValue:W.f8,CSSUnparsedValue:W.f9,DataTransferItemList:W.fb,HTMLDivElement:W.d8,DOMException:W.fc,ClientRectList:W.d9,DOMRectList:W.d9,DOMRectReadOnly:W.da,DOMStringList:W.fd,DOMTokenList:W.fe,Element:W.a9,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aV,FileList:W.fn,FileWriter:W.fo,HTMLFormElement:W.fs,Gamepad:W.aW,History:W.fw,HTMLCollection:W.bO,HTMLFormControlsCollection:W.bO,HTMLOptionsCollection:W.bO,KeyboardEvent:W.b_,Location:W.fO,MediaList:W.fZ,MIDIInputMap:W.h_,MIDIOutputMap:W.h1,MimeType:W.b2,MimeTypeArray:W.h3,PointerEvent:W.ac,MouseEvent:W.ac,DragEvent:W.ac,Document:W.H,DocumentFragment:W.H,HTMLDocument:W.H,ShadowRoot:W.H,XMLDocument:W.H,Attr:W.H,DocumentType:W.H,Node:W.H,NodeList:W.co,RadioNodeList:W.co,Plugin:W.b3,PluginArray:W.hg,RTCStatsReport:W.hn,HTMLSelectElement:W.hq,SourceBuffer:W.b5,SourceBufferList:W.hz,SpeechGrammar:W.b6,SpeechGrammarList:W.hA,SpeechRecognitionResult:W.b7,Storage:W.hE,CSSStyleSheet:W.aJ,StyleSheet:W.aJ,TextTrack:W.b8,TextTrackCue:W.aK,VTTCue:W.aK,TextTrackCueList:W.hM,TextTrackList:W.hN,TimeRanges:W.hP,Touch:W.b9,TouchEvent:W.aL,TouchList:W.hS,TrackDefaultList:W.hT,CompositionEvent:W.bz,FocusEvent:W.bz,TextEvent:W.bz,UIEvent:W.bz,URL:W.i8,VideoTrackList:W.io,WheelEvent:W.bb,Window:W.cE,DOMWindow:W.cE,CSSRuleList:W.iy,ClientRect:W.e3,DOMRect:W.e3,GamepadList:W.iL,NamedNodeMap:W.ek,MozNamedAttrMap:W.ek,SpeechRecognitionResultList:W.iW,StyleSheetList:W.iX,SVGLength:P.be,SVGLengthList:P.fJ,SVGNumber:P.bi,SVGNumberList:P.hc,SVGPointList:P.hi,SVGStringList:P.hK,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGScriptElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGTransform:P.bj,SVGTransformList:P.hU,AudioBuffer:P.eX,AudioParamMap:P.eY,AudioTrackList:P.f_,AudioContext:P.bJ,webkitAudioContext:P.bJ,BaseAudioContext:P.bJ,OfflineAudioContext:P.hd,WebGLBuffer:P.cY,WebGLProgram:P.dB,WebGL2RenderingContext:P.bV,WebGLShader:P.dE,WebGLUniformLocation:P.dQ,SQLResultSetRowList:P.hB})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dv.$nativeSuperclassTag="ArrayBufferView"
H.cH.$nativeSuperclassTag="ArrayBufferView"
H.cI.$nativeSuperclassTag="ArrayBufferView"
H.cm.$nativeSuperclassTag="ArrayBufferView"
H.cJ.$nativeSuperclassTag="ArrayBufferView"
H.cK.$nativeSuperclassTag="ArrayBufferView"
H.dw.$nativeSuperclassTag="ArrayBufferView"
W.cL.$nativeSuperclassTag="EventTarget"
W.cM.$nativeSuperclassTag="EventTarget"
W.cN.$nativeSuperclassTag="EventTarget"
W.cO.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.kT,[])
else M.kT([])})})()
//# sourceMappingURL=main.dart.js.map
