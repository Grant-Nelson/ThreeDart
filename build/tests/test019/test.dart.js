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
a[c]=function(){a[c]=function(){H.ng(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kf"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kf"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kf(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jZ:function jZ(){},
jW:function(){return new P.cB("No element")},
m4:function(){return new P.cB("Too many elements")},
q:function q(a){this.a=a},
fz:function fz(){},
bU:function bU(){},
cp:function cp(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
h4:function h4(a,b,c){this.a=a
this.b=b
this.$ti=c},
h5:function h5(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
h6:function h6(a,b,c){this.a=a
this.b=b
this.$ti=c},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
iN:function iN(a,b,c){this.a=a
this.b=b
this.$ti=c},
bR:function bR(){},
e5:function e5(){},
e4:function e4(){},
c8:function(a){var u,t=H.H(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
mX:function(a){return v.types[H.ad(a)]},
n3:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.X(a).$iI},
k:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ar(a)
if(typeof u!=="string")throw H.i(H.c3(a))
return u},
cx:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bX:function(a){return H.mb(a)+H.kb(H.bI(a),0,null)},
mb:function(a){var u,t,s,r,q,p,o,n=J.X(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.M||!!n.$icP){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.c8(t.length>1&&C.i.aJ(t,0)===36?C.i.b8(t,1):t)},
kQ:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
mj:function(a){var u,t,s,r=H.c([],[P.D])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.B)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.c3(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.h.be(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.i(H.c3(s))}return H.kQ(r)},
kR:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.c3(s))
if(s<0)throw H.i(H.c3(s))
if(s>65535)return H.mj(a)}return H.kQ(a)},
k0:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.be(u,10))>>>0,56320|u&1023)}throw H.i(P.aZ(a,0,1114111,null,null))},
bW:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mi:function(a){var u=H.bW(a).getFullYear()+0
return u},
mg:function(a){var u=H.bW(a).getMonth()+1
return u},
mc:function(a){var u=H.bW(a).getDate()+0
return u},
md:function(a){var u=H.bW(a).getHours()+0
return u},
mf:function(a){var u=H.bW(a).getMinutes()+0
return u},
mh:function(a){var u=H.bW(a).getSeconds()+0
return u},
me:function(a){var u=H.bW(a).getMilliseconds()+0
return u},
F:function(a){throw H.i(H.c3(a))},
l:function(a,b){if(a==null)J.bL(a)
throw H.i(H.d5(a,b))},
d5:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,s,null)
u=H.ad(J.bL(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.Y(b,a,s,null,u)
return P.hA(b,s)},
mT:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bY(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bY(a,c,!0,b,"end",u)
return new P.aE(!0,b,"end",null)},
c3:function(a){return new P.aE(!0,a,null,null)},
mP:function(a){if(typeof a!=="number")throw H.i(H.c3(a))
return a},
i:function(a){var u
if(a==null)a=new P.dI()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lv})
u.name=""}else u.toString=H.lv
return u},
lv:function(){return J.ar(this.dartException)},
v:function(a){throw H.i(a)},
B:function(a){throw H.i(P.bs(a))},
b5:function(a){var u,t,s,r,q,p
a=H.lu(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ik(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
il:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
l1:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kK:function(a,b){return new H.hr(a,b==null?null:b.method)},
k_:function(a,b){var u=b==null,t=u?null:b.method
return new H.fW(a,t,u?null:b.receiver)},
ay:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jM(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.h.be(t,16)&8191)===10)switch(s){case 438:return f.$1(H.k_(H.k(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kK(H.k(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.ly()
q=$.lz()
p=$.lA()
o=$.lB()
n=$.lE()
m=$.lF()
l=$.lD()
$.lC()
k=$.lH()
j=$.lG()
i=r.af(u)
if(i!=null)return f.$1(H.k_(H.H(u),i))
else{i=q.af(u)
if(i!=null){i.method="call"
return f.$1(H.k_(H.H(u),i))}else{i=p.af(u)
if(i==null){i=o.af(u)
if(i==null){i=n.af(u)
if(i==null){i=m.af(u)
if(i==null){i=l.af(u)
if(i==null){i=o.af(u)
if(i==null){i=k.af(u)
if(i==null){i=j.af(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kK(H.H(u),i))}}return f.$1(new H.ix(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dS()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aE(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dS()
return a},
c6:function(a){var u
if(a==null)return new H.eM(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eM(a)},
mW:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.W(0,a[u],a[t])}return b},
n2:function(a,b,c,d,e,f){H.j(a,"$ibw")
switch(H.ad(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.r("Unsupported number of arguments for wrapped closure"))},
c4:function(a,b){var u
H.ad(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.n2)
a.$identity=u
return u},
lY:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hV().constructor.prototype):Object.create(new H.cb(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aL
if(typeof t!=="number")return t.F()
$.aL=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.kw(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.mX,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.kv:H.jP
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.i("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kw(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
lV:function(a,b,c,d){var u=H.jP
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kw:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lX(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lV(t,!r,u,b)
if(t===0){r=$.aL
if(typeof r!=="number")return r.F()
$.aL=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cc
return new Function(r+H.k(q==null?$.cc=H.fi("self"):q)+";return "+p+"."+H.k(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aL
if(typeof r!=="number")return r.F()
$.aL=r+1
o+=r
r="return function("+o+"){return this."
q=$.cc
return new Function(r+H.k(q==null?$.cc=H.fi("self"):q)+"."+H.k(u)+"("+o+");}")()},
lW:function(a,b,c,d){var u=H.jP,t=H.kv
switch(b?-1:a){case 0:throw H.i(H.mm("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lX:function(a,b){var u,t,s,r,q,p,o,n=$.cc
if(n==null)n=$.cc=H.fi("self")
u=$.ku
if(u==null)u=$.ku=H.fi("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lW(s,!q,t,b)
if(s===1){n="return function(){return this."+H.k(n)+"."+H.k(t)+"(this."+H.k(u)+");"
u=$.aL
if(typeof u!=="number")return u.F()
$.aL=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.k(n)+"."+H.k(t)+"(this."+H.k(u)+", "+o+");"
u=$.aL
if(typeof u!=="number")return u.F()
$.aL=u+1
return new Function(n+u+"}")()},
kf:function(a,b,c,d,e,f,g){return H.lY(a,b,H.ad(c),d,!!e,!!f,g)},
jP:function(a){return a.a},
kv:function(a){return a.c},
fi:function(a){var u,t,s,r=new H.cb("self","target","receiver","name"),q=J.jX(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
z:function(a){if(a==null)H.mL("boolean expression must not be null")
return a},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.aJ(a,"String"))},
nW:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aJ(a,"double"))},
n8:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aJ(a,"num"))},
kc:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.aJ(a,"bool"))},
ad:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.aJ(a,"int"))},
ls:function(a,b){throw H.i(H.aJ(a,H.c8(H.H(b).substring(2))))},
na:function(a,b){throw H.i(H.lU(a,H.c8(H.H(b).substring(2))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.X(a)[b])return a
H.ls(a,b)},
h:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.X(a)[b]
else u=!0
if(u)return a
H.na(a,b)},
kl:function(a){if(a==null)return a
if(!!J.X(a).$ib)return a
throw H.i(H.aJ(a,"List<dynamic>"))},
n4:function(a,b){var u
if(a==null)return a
u=J.X(a)
if(!!u.$ib)return a
if(u[b])return a
H.ls(a,b)},
lm:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ad(u)]
else return a.$S()}return},
f8:function(a,b){var u
if(typeof a=="function")return!0
u=H.lm(J.X(a))
if(u==null)return!1
return H.ld(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.k8)return a
$.k8=!0
try{if(H.f8(a,b))return a
u=H.jK(b)
t=H.aJ(a,u)
throw H.i(t)}finally{$.k8=!1}},
kg:function(a,b){if(a!=null&&!H.ke(a,b))H.v(H.aJ(a,H.jK(b)))
return a},
aJ:function(a,b){return new H.im("TypeError: "+P.dm(a)+": type '"+H.lh(a)+"' is not a subtype of type '"+b+"'")},
lU:function(a,b){return new H.fj("CastError: "+P.dm(a)+": type '"+H.lh(a)+"' is not a subtype of type '"+b+"'")},
lh:function(a){var u,t=J.X(a)
if(!!t.$icf){u=H.lm(t)
if(u!=null)return H.jK(u)
return"Closure"}return H.bX(a)},
mL:function(a){throw H.i(new H.iO(a))},
ng:function(a){throw H.i(new P.fr(H.H(a)))},
mm:function(a){return new H.hI(a)},
ln:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bI:function(a){if(a==null)return
return a.$ti},
nX:function(a,b,c){return H.c7(a["$a"+H.k(c)],H.bI(b))},
d6:function(a,b,c,d){var u
H.H(c)
H.ad(d)
u=H.c7(a["$a"+H.k(c)],H.bI(b))
return u==null?null:u[d]},
aj:function(a,b,c){var u
H.H(b)
H.ad(c)
u=H.c7(a["$a"+H.k(b)],H.bI(a))
return u==null?null:u[c]},
y:function(a,b){var u
H.ad(b)
u=H.bI(a)
return u==null?null:u[b]},
jK:function(a){return H.bH(a,null)},
bH:function(a,b){var u,t
H.m(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c8(a[0].name)+H.kb(a,1,b)
if(typeof a=="function")return H.c8(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ad(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.l(b,t)
return H.k(b[t])}if('func' in a)return H.mE(a,b)
if('futureOr' in a)return"FutureOr<"+H.bH("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mE:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.f]
H.m(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.l(a0,n)
p=C.i.F(p,a0[n])
m=u[q]
if(m!=null&&m!==P.S)p+=" extends "+H.bH(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bH(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bH(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bH(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.mV(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.H(b[h])
j=j+i+H.bH(e[d],a0)+(" "+H.k(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
kb:function(a,b,c){var u,t,s,r,q,p
H.m(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.bh("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bH(p,c)}return"<"+u.i(0)+">"},
c7:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
kd:function(a,b,c,d){var u,t
H.H(b)
H.kl(c)
H.H(d)
if(a==null)return!1
u=H.bI(a)
t=J.X(a)
if(t[b]==null)return!1
return H.lk(H.c7(t[d],u),null,c,null)},
m:function(a,b,c,d){H.H(b)
H.kl(c)
H.H(d)
if(a==null)return a
if(H.kd(a,b,c,d))return a
throw H.i(H.aJ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c8(b.substring(2))+H.kb(c,0,null),v.mangledGlobalNames)))},
lk:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aD(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aD(a[t],b,c[t],d))return!1
return!0},
nU:function(a,b,c){return a.apply(b,H.c7(J.X(b)["$a"+H.k(c)],H.bI(b)))},
lp:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="S"||a.name==="N"||a===-1||a===-2||H.lp(u)}return!1},
ke:function(a,b){var u,t
if(a==null)return b==null||b.name==="S"||b.name==="N"||b===-1||b===-2||H.lp(b)
if(b==null||b===-1||b.name==="S"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.ke(a,"type" in b?b.type:null))return!0
if('func' in b)return H.f8(a,b)}u=J.X(a).constructor
t=H.bI(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aD(u,null,b,null)},
G:function(a,b){if(a!=null&&!H.ke(a,b))throw H.i(H.aJ(a,H.jK(b)))
return a},
aD:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="S"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="S"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aD(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="N")return!0
if('func' in c)return H.ld(a,b,c,d)
if('func' in a)return c.name==="bw"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aD("type" in a?a.type:l,b,s,d)
else if(H.aD(a,b,s,d))return!0
else{if(!('$i'+"cm" in t.prototype))return!1
r=t.prototype["$a"+"cm"]
q=H.c7(r,u?a.slice(1):l)
return H.aD(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.lk(H.c7(m,u),b,p,d)},
ld:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aD(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aD(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aD(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aD(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.n7(h,b,g,d)},
n7:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aD(c[s],d,a[s],b))return!1}return!0},
nV:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
n5:function(a){var u,t,s,r,q=H.H($.lo.$1(a)),p=$.jB[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jH[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.H($.lj.$2(a,q))
if(q!=null){p=$.jB[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jH[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jJ(u)
$.jB[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jH[q]=u
return u}if(s==="-"){r=H.jJ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lr(a,u)
if(s==="*")throw H.i(P.l2(q))
if(v.leafTags[q]===true){r=H.jJ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lr(a,u)},
lr:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.km(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jJ:function(a){return J.km(a,!1,null,!!a.$iI)},
n6:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jJ(u)
else return J.km(u,c,null,null)},
n0:function(){if(!0===$.kk)return
$.kk=!0
H.n1()},
n1:function(){var u,t,s,r,q,p,o,n
$.jB=Object.create(null)
$.jH=Object.create(null)
H.n_()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lt.$1(q)
if(p!=null){o=H.n6(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
n_:function(){var u,t,s,r,q,p,o=C.B()
o=H.c2(C.C,H.c2(C.D,H.c2(C.v,H.c2(C.v,H.c2(C.E,H.c2(C.F,H.c2(C.G(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lo=new H.jE(r)
$.lj=new H.jF(q)
$.lt=new H.jG(p)},
c2:function(a,b){return a(b)||b},
m6:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.i(new P.fL("Illegal RegExp pattern ("+String(r)+")",a))},
nd:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mU:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lu:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kp:function(a,b,c){var u=H.ne(a,b,c)
return u},
ne:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lu(b),'g'),H.mU(c))},
ik:function ik(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hr:function hr(a,b){this.a=a
this.b=b},
fW:function fW(a,b,c){this.a=a
this.b=b
this.c=c},
ix:function ix(a){this.a=a},
jM:function jM(a){this.a=a},
eM:function eM(a){this.a=a
this.b=null},
cf:function cf(){},
i4:function i4(){},
hV:function hV(){},
cb:function cb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
im:function im(a){this.a=a},
fj:function fj(a){this.a=a},
hI:function hI(a){this.a=a},
iO:function iO(a){this.a=a},
aS:function aS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fZ:function fZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dw:function dw(a,b){this.a=a
this.$ti=b},
h_:function h_(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jE:function jE(a){this.a=a},
jF:function jF(a){this.a=a},
jG:function jG(a){this.a=a},
fV:function fV(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d2:function(a){return a},
bG:function(a,b,c){if(a>>>0!==a||a>=c)throw H.i(H.d5(b,a))},
mD:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.i(H.mT(a,b,c))
return b},
cu:function cu(){},
dE:function dE(){},
ct:function ct(){},
dF:function dF(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
dG:function dG(){},
ho:function ho(){},
cU:function cU(){},
cV:function cV(){},
cW:function cW(){},
cX:function cX(){},
mV:function(a){return J.kD(a?Object.keys(a):[],null)},
n9:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
km:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jD:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kk==null){H.n0()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.i(P.l2("Return interceptor for "+H.k(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kq()]
if(r!=null)return r
r=H.n5(a)
if(r!=null)return r
if(typeof a=="function")return C.O
u=Object.getPrototypeOf(a)
if(u==null)return C.x
if(u===Object.prototype)return C.x
if(typeof s=="function"){Object.defineProperty(s,$.kq(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
m5:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.jO(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.aZ(a,0,4294967295,"length",null))
return J.kD(new Array(a),b)},
kD:function(a,b){return J.jX(H.c(a,[b]))},
jX:function(a){H.kl(a)
a.fixed$length=Array
return a},
X:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dq.prototype
return J.dp.prototype}if(typeof a=="string")return J.bT.prototype
if(a==null)return J.dr.prototype
if(typeof a=="boolean")return J.fU.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.S)return a
return J.jD(a)},
kh:function(a){if(typeof a=="string")return J.bT.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.S)return a
return J.jD(a)},
jC:function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.S)return a
return J.jD(a)},
ki:function(a){if(typeof a=="string")return J.bT.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.cP.prototype
return a},
kj:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.S)return a
return J.jD(a)},
a7:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.X(a).t(a,b)},
lN:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n3(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.kh(a).j(a,b)},
lO:function(a,b,c,d){return J.kj(a).ig(a,b,c,d)},
jN:function(a,b){return J.jC(a).D(a,b)},
lP:function(a,b){return J.jC(a).N(a,b)},
lQ:function(a){return J.kj(a).gim(a)},
bJ:function(a){return J.X(a).gG(a)},
bK:function(a){return J.jC(a).gP(a)},
bL:function(a){return J.kh(a).gm(a)},
ks:function(a){return J.jC(a).iW(a)},
lR:function(a,b,c){return J.ki(a).b9(a,b,c)},
lS:function(a){return J.ki(a).j6(a)},
ar:function(a){return J.X(a).i(a)},
a:function a(){},
fU:function fU(){},
dr:function dr(){},
dt:function dt(){},
hv:function hv(){},
cP:function cP(){},
bB:function bB(){},
aR:function aR(a){this.$ti=a},
jY:function jY(a){this.$ti=a},
ak:function ak(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ds:function ds(){},
dq:function dq(){},
dp:function dp(){},
bT:function bT(){}},P={
ms:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mM()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c4(new P.iQ(s),1)).observe(u,{childList:true})
return new P.iP(s,u,t)}else if(self.setImmediate!=null)return P.mN()
return P.mO()},
mt:function(a){self.scheduleImmediate(H.c4(new P.iR(H.n(a,{func:1,ret:-1})),0))},
mu:function(a){self.setImmediate(H.c4(new P.iS(H.n(a,{func:1,ret:-1})),0))},
mv:function(a){P.k3(C.n,H.n(a,{func:1,ret:-1}))},
k3:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.h.a2(a.a,1000)
return P.mB(u<0?0:u,b)},
l0:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.b3]})
u=C.h.a2(a.a,1000)
return P.mC(u<0?0:u,b)},
mB:function(a,b){var u=new P.eS()
u.eM(a,b)
return u},
mC:function(a,b){var u=new P.eS()
u.eN(a,b)
return u},
mw:function(a,b){var u,t,s
b.a=1
try{a.eb(new P.j0(b),new P.j1(b),null)}catch(s){u=H.ay(s)
t=H.c6(s)
P.nb(new P.j2(b,u,t))}},
l8:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.j(a.c,"$iaC")
if(u>=4){t=b.c3()
b.a=a.a
b.c=a.c
P.cT(b,t)}else{t=H.j(b.c,"$ib8")
b.a=2
b.c=a
a.dd(t)}},
cT:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.j(g.c,"$iae")
g=g.b
r=s.a
q=s.b
g.toString
P.jx(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cT(h.a,b)}g=h.a
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
if(m){H.j(o,"$iae")
g=g.b
r=o.a
q=o.b
g.toString
P.jx(i,i,g,r,q)
return}l=$.a0
if(l!=n)$.a0=n
else l=i
g=b.c
if(g===8)new P.j6(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.j5(u,b,o).$0()}else if((g&2)!==0)new P.j4(h,u,b).$0()
if(l!=null)$.a0=l
g=u.b
if(!!J.X(g).$icm){if(g.a>=4){k=H.j(q.c,"$ib8")
q.c=null
b=q.bd(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.l8(g,q)
return}}j=b.b
k=H.j(j.c,"$ib8")
j.c=null
b=j.bd(k)
g=u.a
r=u.b
if(!g){H.G(r,H.y(j,0))
j.a=4
j.c=r}else{H.j(r,"$iae")
j.a=8
j.c=r}h.a=j
g=j}},
mH:function(a,b){if(H.f8(a,{func:1,args:[P.S,P.ao]}))return H.n(a,{func:1,ret:null,args:[P.S,P.ao]})
if(H.f8(a,{func:1,args:[P.S]}))return H.n(a,{func:1,ret:null,args:[P.S]})
throw H.i(P.jO(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mG:function(){var u,t
for(;u=$.c1,u!=null;){$.d4=null
t=u.b
$.c1=t
if(t==null)$.d3=null
u.a.$0()}},
mK:function(){$.k9=!0
try{P.mG()}finally{$.d4=null
$.k9=!1
if($.c1!=null)$.kr().$1(P.ll())}},
lg:function(a){var u=new P.ed(H.n(a,{func:1,ret:-1}))
if($.c1==null){$.c1=$.d3=u
if(!$.k9)$.kr().$1(P.ll())}else $.d3=$.d3.b=u},
mJ:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.c1
if(u==null){P.lg(a)
$.d4=$.d3
return}t=new P.ed(a)
s=$.d4
if(s==null){t.b=u
$.c1=$.d4=t}else{t.b=s.b
$.d4=s.b=t
if(t.b==null)$.d3=t}},
nb:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a0
if(C.k===u){P.jz(t,t,C.k,a)
return}u.toString
P.jz(t,t,u,H.n(u.c9(a),s))},
l_:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a0
if(u===C.k){u.toString
return P.k3(a,b)}return P.k3(a,H.n(u.c9(b),t))},
mq:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b3]}
H.n(b,s)
u=$.a0
if(u===C.k){u.toString
return P.l0(a,b)}t=u.dr(b,P.b3)
$.a0.toString
return P.l0(a,H.n(t,s))},
jx:function(a,b,c,d,e){var u={}
u.a=d
P.mJ(new P.jy(u,e))},
le:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a0
if(t===c)return d.$0()
$.a0=c
u=t
try{t=d.$0()
return t}finally{$.a0=u}},
lf:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.G(e,g)
t=$.a0
if(t===c)return d.$1(e)
$.a0=c
u=t
try{t=d.$1(e)
return t}finally{$.a0=u}},
mI:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.G(e,h)
H.G(f,i)
t=$.a0
if(t===c)return d.$2(e,f)
$.a0=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a0=u}},
jz:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.c9(d):c.io(d,-1)
P.lg(d)},
iQ:function iQ(a){this.a=a},
iP:function iP(a,b,c){this.a=a
this.b=b
this.c=c},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
eS:function eS(){this.c=0},
jr:function jr(a,b){this.a=a
this.b=b},
jq:function jq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b8:function b8(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aC:function aC(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
j_:function j_(a,b){this.a=a
this.b=b},
j3:function j3(a,b){this.a=a
this.b=b},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
j2:function j2(a,b,c){this.a=a
this.b=b
this.c=c},
j6:function j6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j7:function j7(a){this.a=a},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
ed:function ed(a){this.a=a
this.b=null},
hY:function hY(){},
i_:function i_(a,b){this.a=a
this.b=b},
i0:function i0(a,b){this.a=a
this.b=b},
cC:function cC(){},
hZ:function hZ(){},
b3:function b3(){},
ae:function ae(a,b){this.a=a
this.b=b},
ju:function ju(){},
jy:function jy(a,b){this.a=a
this.b=b},
jd:function jd(){},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
je:function je(a,b){this.a=a
this.b=b},
jg:function jg(a,b,c){this.a=a
this.b=b
this.c=c},
kE:function(a,b){return new H.aS([a,b])},
m8:function(a){return H.mW(a,new H.aS([null,null]))},
dx:function(a){return new P.jb([a])},
k7:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mA:function(a,b,c){var u=new P.et(a,b,[c])
u.c=a.e
return u},
m3:function(a,b,c){var u,t
if(P.ka(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.f])
C.a.h($.aq,a)
try{P.mF(a,u)}finally{if(0>=$.aq.length)return H.l($.aq,-1)
$.aq.pop()}t=P.kY(b,H.n4(u,"$id"),", ")+c
return t.charCodeAt(0)==0?t:t},
jV:function(a,b,c){var u,t
if(P.ka(a))return b+"..."+c
u=new P.bh(b)
C.a.h($.aq,a)
try{t=u
t.a=P.kY(t.a,a,", ")}finally{if(0>=$.aq.length)return H.l($.aq,-1)
$.aq.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ka:function(a){var u,t
for(u=$.aq.length,t=0;t<u;++t)if(a===$.aq[t])return!0
return!1},
mF:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.m(b,"$ib",[P.f],"$ab")
u=a.gP(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.u())return
r=H.k(u.gE(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.u()){if(s<=5)return
if(0>=b.length)return H.l(b,-1)
q=b.pop()
if(0>=b.length)return H.l(b,-1)
p=b.pop()}else{o=u.gE(u);++s
if(!u.u()){if(s<=4){C.a.h(b,H.k(o))
return}q=H.k(o)
if(0>=b.length)return H.l(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gE(u);++s
for(;u.u();o=n,n=m){m=u.gE(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.l(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.k(o)
q=H.k(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.l(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
kF:function(a,b){var u,t,s=P.dx(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.B)(a),++t)s.h(0,H.G(a[t],b))
return s},
kH:function(a){var u,t={}
if(P.ka(a))return"{...}"
u=new P.bh("")
try{C.a.h($.aq,a)
u.a+="{"
t.a=!0
J.lP(a,new P.h3(t,u))
u.a+="}"}finally{if(0>=$.aq.length)return H.l($.aq,-1)
$.aq.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jb:function jb(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c0:function c0(a){this.a=a
this.c=this.b=null},
et:function et(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
h0:function h0(){},
w:function w(){},
h2:function h2(){},
h3:function h3(a,b){this.a=a
this.b=b},
a9:function a9(){},
ji:function ji(){},
eu:function eu(){},
cg:function cg(){},
ch:function ch(){},
fB:function fB(){},
fR:function fR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fQ:function fQ(a){this.a=a},
iA:function iA(){},
iB:function iB(){},
js:function js(a){this.b=0
this.c=a},
m2:function(a){if(a instanceof H.cf)return a.i(0)
return"Instance of '"+H.bX(a)+"'"},
m9:function(a,b,c){var u,t
H.G(b,c)
u=J.m5(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.W(u,t,b)
return H.m(u,"$ib",[c],"$ab")},
kG:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bK(a);u.u();)C.a.h(s,H.G(u.gE(u),c))
if(b)return s
return H.m(J.jX(s),"$ib",t,"$ab")},
k2:function(a){var u,t,s=P.D
H.m(a,"$id",[s],"$ad")
if(a.constructor===Array){H.m(a,"$iaR",[s],"$aaR")
u=a.length
t=P.kT(0,null,u)
return H.kR(t<u?C.a.eo(a,0,t):a)}return P.mo(a,0,null)},
mo:function(a,b,c){var u,t,s
H.m(a,"$id",[P.D],"$ad")
u=J.bK(a)
for(t=0;t<b;++t)if(!u.u())throw H.i(P.aZ(b,0,t,null,null))
s=[]
for(;u.u();)s.push(u.gE(u))
return H.kR(s)},
mk:function(a){return new H.fV(a,H.m6(a,!1,!0,!1))},
kY:function(a,b,c){var u=J.bK(b)
if(!u.u())return a
if(c.length===0){do a+=H.k(u.gE(u))
while(u.u())}else{a+=H.k(u.gE(u))
for(;u.u();)a=a+c+H.k(u.gE(u))}return a},
lc:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.m(a,"$ib",[P.D],"$ab")
if(c===C.m){u=$.lM().b
u=u.test(b)}else u=!1
if(u)return b
t=C.I.iq(H.G(b,H.aj(c,"cg",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.l(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.k0(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lZ:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
m_:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
di:function(a){if(a>=10)return""+a
return"0"+a},
ky:function(a,b){return new P.bu(1e6*b+1000*a)},
dm:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ar(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m2(a)},
lT:function(a){return new P.aE(!1,null,null,a)},
jO:function(a,b,c){return new P.aE(!0,a,b,c)},
hA:function(a,b){return new P.bY(null,null,!0,a,b,"Value not in range")},
aZ:function(a,b,c,d,e){return new P.bY(b,c,!0,a,d,"Invalid value")},
kT:function(a,b,c){if(0>a||a>c)throw H.i(P.aZ(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.i(P.aZ(b,a,c,"end",null))
return b}return c},
kS:function(a,b){if(typeof a!=="number")return a.aE()
if(a<0)throw H.i(P.aZ(a,0,null,b,null))},
Y:function(a,b,c,d,e){var u=H.ad(e==null?J.bL(b):e)
return new P.fT(u,!0,a,c,"Index out of range")},
aw:function(a){return new P.iy(a)},
l2:function(a){return new P.iw(a)},
kX:function(a){return new P.cB(a)},
bs:function(a){return new P.fm(a)},
r:function(a){return new P.el(a)},
ko:function(a){H.n9(a)},
O:function O(){},
az:function az(a,b){this.a=a
this.b=b},
A:function A(){},
bu:function bu(a){this.a=a},
fx:function fx(){},
fy:function fy(){},
bv:function bv(){},
fb:function fb(){},
dI:function dI(){},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bY:function bY(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fT:function fT(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iy:function iy(a){this.a=a},
iw:function iw(a){this.a=a},
cB:function cB(a){this.a=a},
fm:function fm(a){this.a=a},
hu:function hu(){},
dS:function dS(){},
fr:function fr(a){this.a=a},
el:function el(a){this.a=a},
fL:function fL(a,b){this.a=a
this.b=b},
bw:function bw(){},
D:function D(){},
d:function d(){},
aQ:function aQ(){},
b:function b(){},
Q:function Q(){},
N:function N(){},
a8:function a8(){},
S:function S(){},
ao:function ao(){},
f:function f(){},
bh:function bh(a){this.a=a},
mS:function(a){var u,t=J.X(a)
if(!!t.$ibx){u=t.gdz(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eX(a.data,a.height,a.width)},
mR:function(a){if(a instanceof P.eX)return{data:a.a,height:a.b,width:a.c}
return a},
bj:function(a){var u,t,s,r,q
if(a==null)return
u=P.kE(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r){q=H.H(t[r])
u.W(0,q,a[q])}return u},
mQ:function(a){var u={}
a.N(0,new P.jA(u))
return u},
eX:function eX(a,b,c){this.a=a
this.b=b
this.c=c},
jA:function jA(a){this.a=a},
fH:function fH(a,b){this.a=a
this.b=b},
fI:function fI(){},
fJ:function fJ(){},
ja:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mz:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jc:function jc(){},
an:function an(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bb:function bb(){},
fY:function fY(){},
be:function be(){},
hs:function hs(){},
hz:function hz(){},
cy:function cy(){},
i1:function i1(){},
p:function p(){},
bi:function bi(){},
ij:function ij(){},
er:function er(){},
es:function es(){},
eC:function eC(){},
eD:function eD(){},
eO:function eO(){},
eP:function eP(){},
eV:function eV(){},
eW:function eW(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(a){this.a=a},
fg:function fg(){},
bM:function bM(){},
ht:function ht(){},
ee:function ee(){},
dc:function dc(){},
dL:function dL(){},
bZ:function bZ(){},
dN:function dN(){},
dU:function dU(){},
e3:function e3(){},
hU:function hU(){},
eK:function eK(){},
eL:function eL(){}},W={
kt:function(){var u=document.createElement("a")
return u},
jQ:function(){var u=document.createElement("canvas")
return u},
m0:function(a,b,c){var u=document.body,t=(u&&C.t).ae(u,a,b,c)
t.toString
u=W.E
u=new H.cQ(new W.ai(t),H.n(new W.fA(),{func:1,ret:P.O,args:[u]}),[u])
return H.j(u.gaF(u),"$iT")},
m1:function(a){H.j(a,"$ie")
return"wheel"},
ck:function(a){var u,t,s,r="element tag unavailable"
try{u=J.kj(a)
t=u.ge9(a)
if(typeof t==="string")r=u.ge9(a)}catch(s){H.ay(s)}return r},
kC:function(a){var u=document.createElement("img")
u.src=a
return u},
j9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
la:function(a,b,c,d){var u=W.j9(W.j9(W.j9(W.j9(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a6:function(a,b,c,d,e){var u=W.li(new W.iZ(c),W.o)
if(u!=null&&!0)J.lO(a,b,u,!1)
return new W.iY(a,b,u,!1,[e])},
l9:function(a){var u=W.kt(),t=window.location
u=new W.bF(new W.jh(u,t))
u.eB(a)
return u},
mx:function(a,b,c,d){H.j(a,"$iT")
H.H(b)
H.H(c)
H.j(d,"$ibF")
return!0},
my:function(a,b,c,d){var u,t,s
H.j(a,"$iT")
H.H(b)
H.H(c)
u=H.j(d,"$ibF").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
lb:function(){var u=P.f,t=P.kF(C.p,u),s=H.y(C.p,0),r=H.n(new W.jp(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.jo(t,P.dx(u),P.dx(u),P.dx(u),null)
t.eL(null,new H.h6(C.p,r,[s,u]),q,null)
return t},
li:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a0
if(u===C.k)return a
return u.dr(a,b)},
t:function t(){},
f9:function f9(){},
d9:function d9(){},
fa:function fa(){},
ca:function ca(){},
db:function db(){},
bp:function bp(){},
bO:function bO(){},
ce:function ce(){},
bq:function bq(){},
ci:function ci(){},
fn:function fn(){},
U:function U(){},
cj:function cj(){},
fo:function fo(){},
aM:function aM(){},
aN:function aN(){},
fp:function fp(){},
fq:function fq(){},
ft:function ft(){},
aA:function aA(){},
fu:function fu(){},
dj:function dj(){},
dk:function dk(){},
fv:function fv(){},
fw:function fw(){},
iU:function iU(a,b){this.a=a
this.b=b},
T:function T(){},
fA:function fA(){},
o:function o(){},
e:function e(){},
aO:function aO(){},
fF:function fF(){},
fG:function fG(){},
fK:function fK(){},
aP:function aP(){},
fP:function fP(){},
bS:function bS(){},
bx:function bx(){},
co:function co(){},
aT:function aT(){},
dy:function dy(){},
hc:function hc(){},
hd:function hd(){},
he:function he(a){this.a=a},
hf:function hf(){},
hg:function hg(a){this.a=a},
aW:function aW(){},
hh:function hh(){},
aa:function aa(){},
ai:function ai(a){this.a=a},
E:function E(){},
cv:function cv(){},
aY:function aY(){},
hx:function hx(){},
hG:function hG(){},
hH:function hH(a){this.a=a},
hJ:function hJ(){},
b_:function b_(){},
hS:function hS(){},
b0:function b0(){},
hT:function hT(){},
b1:function b1(){},
hW:function hW(){},
hX:function hX(a){this.a=a},
aG:function aG(){},
c_:function c_(){},
dT:function dT(){},
i2:function i2(){},
i3:function i3(){},
cE:function cE(){},
b2:function b2(){},
aH:function aH(){},
i5:function i5(){},
i6:function i6(){},
ic:function ic(){},
b4:function b4(){},
aI:function aI(){},
ih:function ih(){},
ii:function ii(){},
bE:function bE(){},
iz:function iz(){},
iM:function iM(){},
b7:function b7(){},
cR:function cR(){},
cS:function cS(){},
iV:function iV(){},
eg:function eg(){},
j8:function j8(){},
ez:function ez(){},
jl:function jl(){},
jm:function jm(){},
iT:function iT(){},
iW:function iW(a){this.a=a},
iX:function iX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
k6:function k6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iY:function iY(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iZ:function iZ(a){this.a=a},
bF:function bF(a){this.a=a},
C:function C(){},
dH:function dH(a){this.a=a},
hq:function hq(a){this.a=a},
hp:function hp(a,b,c){this.a=a
this.b=b
this.c=c},
eH:function eH(){},
jj:function jj(){},
jk:function jk(){},
jo:function jo(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jp:function jp(){},
jn:function jn(){},
dn:function dn(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
au:function au(){},
jh:function jh(a,b){this.a=a
this.b=b},
eY:function eY(a){this.a=a},
jt:function jt(a){this.a=a},
ef:function ef(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
em:function em(){},
en:function en(){},
ep:function ep(){},
eq:function eq(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
eA:function eA(){},
eB:function eB(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
cY:function cY(){},
cZ:function cZ(){},
eI:function eI(){},
eJ:function eJ(){},
eN:function eN(){},
eQ:function eQ(){},
eR:function eR(){},
d_:function d_(){},
d0:function d0(){},
eT:function eT(){},
eU:function eU(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){}},O={
jR:function(a){var u=new O.a1([a])
u.bb(a)
return u},
a1:function a1(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cr:function cr(){this.b=this.a=null},
dB:function dB(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h7:function h7(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cq:function cq(){},
h8:function h8(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aU:function aU(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ha:function ha(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hb:function hb(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dP:function dP(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bD:function bD(){}},E={
kB:function(){var u=new E.af()
u.a=""
u.b=!0
u.seA(0,O.jR(E.af))
u.y.aR(u.giI(),u.giL())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sbG(0,null)
return u},
ml:function(a,b){var u=new E.hC(a)
u.ex(a,b)
return u},
mp:function(a,b,c,d,e){var u,t,s=J.X(a)
if(!!s.$ibO)return E.kZ(a,!0,!0,!0,!1)
u=W.jQ()
t=u.style
t.width="100%"
t.height="100%"
s.gdu(a).h(0,u)
return E.kZ(u,!0,!0,!0,!1)},
kZ:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.e_(),j=H.j(C.l.cF(a,"webgl2",P.m8(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibZ")
if(j==null)H.v(P.r("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.ml(j,a)
u=new T.i8(j)
u.b=H.ad(j.getParameter(3379))
u.c=H.ad(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.e6(a)
t=new X.fX()
t.c=new X.at(!1,!1,!1)
t.shi(P.dx(P.D))
u.b=t
t=new X.hi(u)
t.f=0
t.r=V.bf()
t.x=V.bf()
t.ch=t.Q=1
u.c=t
t=new X.h1(u)
t.r=0
t.x=V.bf()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ig(u)
t.f=V.bf()
t.r=V.bf()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sf4(H.c([],[[P.cC,P.S]]))
t=u.z
s=document
r=W.aa
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a6(s,"contextmenu",H.n(u.gfE(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a6(a,"focus",H.n(u.gfK(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a6(a,"blur",H.n(u.gfu(),o),!1,p))
t=u.z
n=W.aT
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a6(s,"keyup",H.n(u.gfO(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a6(s,"keydown",H.n(u.gfM(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a6(a,"mousedown",H.n(u.gfS(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a6(a,"mouseup",H.n(u.gfW(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a6(a,l,H.n(u.gfU(),q),!1,r))
n=u.z
m=W.b7;(n&&C.a).h(n,W.a6(a,H.H(W.m1(a)),H.n(u.gfY(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a6(s,l,H.n(u.gfG(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a6(s,"mouseup",H.n(u.gfI(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a6(s,"pointerlockchange",H.n(u.gh_(),o),!1,p))
p=u.z
o=W.aI
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a6(a,"touchstart",H.n(u.ghf(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a6(a,"touchend",H.n(u.ghb(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a6(a,"touchmove",H.n(u.ghd(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.az(Date.now(),!1)
k.cy=0
k.df()
return k},
fh:function fh(){},
af:function af(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hC:function hC(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hD:function hD(a){this.a=a},
hE:function hE(a){this.a=a},
hF:function hF(a){this.a=a},
e_:function e_(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ib:function ib(a){this.a=a}},Z={
k5:function(a,b,c){var u
H.m(c,"$ib",[P.D],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.d2(c)),35044)
a.bindBuffer(b,null)
return new Z.eb(b,u)},
aB:function(a){return new Z.b6(a)},
eb:function eb(a,b){this.a=a
this.b=b},
dd:function dd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ec:function ec(a){this.a=a},
cd:function cd(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
by:function by(a,b,c){this.a=a
this.b=b
this.c=c},
b6:function b6(a){this.a=a}},D={
L:function(){var u=new D.bQ()
u.sac(null)
u.saM(null)
u.c=null
u.d=0
return u},
fk:function fk(){},
bQ:function bQ(){var _=this
_.d=_.c=_.b=_.a=null},
fD:function fD(a){this.a=a},
fE:function fE(a){this.a=a},
x:function x(){this.b=null},
bz:function bz(a){this.b=null
this.$ti=a},
bA:function bA(a){this.b=null
this.$ti=a},
K:function K(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bt:function bt(){var _=this
_.d=_.c=_.b=_.a=null},
a2:function a2(){},
dv:function dv(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dK:function dK(){},
dR:function dR(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){}},X={de:function de(a,b){this.a=a
this.b=b},du:function du(a,b){this.a=a
this.b=b},fX:function fX(){var _=this
_.d=_.c=_.b=_.a=null},dz:function dz(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h1:function h1(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},at:function at(a,b,c){this.a=a
this.b=b
this.c=c},bd:function bd(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hi:function hi(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cs:function cs(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hy:function hy(){},e1:function e1(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ig:function ig(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},e6:function e6(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jU:function(a){var u=new X.fM(),t=new V.aF(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kV
if(t==null){t=V.kU(0,0,1,1)
$.kV=t}u.r=t
return u},
kM:function(a){var u,t,s=new X.dJ()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gp().h(0,s.gfw())
t=new D.K("mover",u,s.b,[U.ab])
t.b=!0
s.an(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.P().a)){s.c=1.0471975511965976
t=new D.K("fov",t,1.0471975511965976,[P.A])
t.b=!0
s.an(t)}t=s.d
if(!(Math.abs(t-0.1)<$.P().a)){s.d=0.1
t=new D.K("near",t,0.1,[P.A])
t.b=!0
s.an(t)}t=s.e
if(!(Math.abs(t-2000)<$.P().a)){s.e=2000
t=new D.K("far",t,2000,[P.A])
t.b=!0
s.an(t)}return s},
bN:function bN(){},
fM:function fM(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fS:function fS(){this.b=this.a=null},
dJ:function dJ(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cD:function cD(){}},V={
nh:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.j.ej(a-b,u)
return(a<0?a+u:a)+b},
W:function(a,b,c){if(a==null)return C.i.ag("null",c)
return C.i.ag(C.j.ec(Math.abs(a-0)<$.P().a?0:a,b),c+b+1)},
c5:function(a,b,c){var u,t,s,r,q,p
H.m(a,"$ib",[P.A],"$ab")
u=H.c([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.B)(a),++r){q=V.W(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.l(u,p)
C.a.W(u,p,C.i.ag(u[p],s))}return u},
kn:function(a){return C.j.j3(Math.pow(2,C.N.co(Math.log(H.mP(a))/Math.log(2))))},
bV:function(){var u=$.kJ
return u==null?$.kJ=V.aV(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aV:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kI:function(a,b,c){var u=c.v(0,Math.sqrt(c.C(c))),t=b.b_(u),s=t.v(0,Math.sqrt(t.C(t))),r=u.b_(s),q=new V.R(a.a,a.b,a.c),p=s.O(0).C(q),o=r.O(0).C(q),n=u.O(0).C(q)
return V.aV(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bf:function(){var u=$.kO
return u==null?$.kO=new V.a5(0,0):u},
kP:function(){var u=$.cw
return u==null?$.cw=new V.ag(0,0,0):u},
kU:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dM(a,b,c,d)},
ea:function(){var u=$.l6
return u==null?$.l6=new V.R(0,0,0):u},
l7:function(){var u=$.l5
return u==null?$.l5=new V.R(0,1,0):u},
mr:function(){var u=$.iC
return u==null?$.iC=new V.R(0,0,1):u},
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fC:function fC(a){this.a=a},
dD:function dD(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
al:function al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a5:function a5(a,b){this.a=a
this.b=b},
ag:function ag(a,b,c){this.a=a
this.b=b
this.c=c},
bg:function bg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dM:function dM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
V:function V(a,b){this.a=a
this.b=b},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
Z:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.i(P.r("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.i.aJ(a,0)
t=C.i.aJ(b,0)
s=new V.hB()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
u:function(a){var u=new V.hK()
u.ey(a)
return u},
ie:function(){var u=new V.id(),t=P.f
u.shD(new H.aS([t,V.cA]))
u.shG(new H.aS([t,V.cG]))
u.c=null
return u},
b9:function b9(){},
as:function as(){},
dA:function dA(){},
am:function am(){this.a=null},
hB:function hB(){this.b=this.a=null},
hK:function hK(){this.a=null},
cA:function cA(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e0:function e0(a,b,c){this.a=a
this.b=b
this.c=c},
cG:function cG(a){this.b=a
this.c=null},
id:function id(){this.c=this.b=this.a=null},
cH:function cH(a){this.b=a
this.a=this.c=null},
nc:function(a){P.mq(C.K,new V.jL(a))},
mn:function(a){var u=new V.hO()
u.ez(a,!0)
return u},
br:function br(){},
jL:function jL(a){this.a=a},
fs:function fs(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fN:function fN(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fO:function fO(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hw:function hw(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hO:function hO(){this.b=this.a=null},
hQ:function hQ(a){this.a=a},
hP:function hP(a){this.a=a},
hR:function hR(a){this.a=a}},U={
jS:function(){var u=new U.fl()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
kx:function(a){var u=new U.dg()
u.a=a
return u},
fl:function fl(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dg:function dg(){this.b=this.a=null},
cn:function cn(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ab:function ab(){},
e7:function e7(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
e8:function e8(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e9:function e9(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={df:function df(){var _=this
_.c=_.b=_.a=_.f=_.e=null},dh:function dh(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},dl:function dl(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},av:function av(){}},A={
ma:function(a,b){var u=a.aj,t=new A.dC(b,u)
t.cM(b,u)
t.ew(a,b)
return t},
k4:function(a,b,c,d,e){var u=new A.io(a,c,e)
u.f=d
u.shR(P.m9(d,0,P.D))
return u},
da:function da(a,b,c){this.a=a
this.b=b
this.c=c},
fc:function fc(a){this.a=a},
dC:function dC(a,b){var _=this
_.bj=_.dD=_.bi=_.aj=_.aq=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.dT=_.ci=_.dS=_.bw=_.dR=_.dQ=_.bv=_.bu=_.dP=_.dO=_.bt=_.bs=_.br=_.dN=_.dM=_.bq=_.dL=_.dK=_.bp=_.dJ=_.dI=_.bo=_.bn=_.dH=_.dG=_.bm=_.bl=_.dF=_.dE=_.bk=null
_.cn=_.dX=_.cm=_.dW=_.cl=_.dV=_.ck=_.dU=_.cj=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h9:function h9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aj=b4
_.bi=b5},
cI:function cI(a,b){this.b=a
this.c=b},
cM:function cM(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
cK:function cK(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cN:function cN(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cL:function cL(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cO:function cO(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
cz:function cz(){},
bP:function bP(a,b){this.a=a
this.b=b},
dQ:function dQ(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
e2:function e2(){},
iu:function iu(a){this.a=a},
M:function M(a,b,c){this.a=a
this.c=b
this.d=c},
iq:function iq(a,b,c){this.a=a
this.c=b
this.d=c},
ir:function ir(a,b,c){this.a=a
this.c=b
this.d=c},
it:function it(a,b,c){this.a=a
this.c=b
this.d=c},
io:function io(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
ip:function ip(a,b,c){this.a=a
this.c=b
this.d=c},
J:function J(a,b,c){this.a=a
this.c=b
this.d=c},
is:function is(a,b,c){this.a=a
this.c=b
this.d=c},
iv:function iv(a,b,c){this.a=a
this.c=b
this.d=c},
cJ:function cJ(a,b,c){this.a=a
this.c=b
this.d=c},
ap:function ap(a,b,c){this.a=a
this.c=b
this.d=c},
ah:function ah(a,b,c){this.a=a
this.c=b
this.d=c},
ac:function ac(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jw:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
d1:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.R(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.R(u+a3,t+a1,s+a2)
q=new V.R(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.R(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jw(i)
l=F.jw(j.b)
k=F.nf(d,a0,new F.jv(j,F.jw(j.c),F.jw(j.d),l,m,c),b)
if(k!=null)a.iH(k)},
nf:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.ax,P.A,P.A]})
if(a<1)return
if(b<1)return
u=F.k1()
t=H.c([],[F.ax])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iD(g,g,new V.aF(p,0,0,1),g,g,new V.a5(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.ce(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.iD(g,g,new V.aF(j,i,h,1),g,g,new V.a5(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.ce(d))}}u.d.ii(a+1,b+1,t)
return u},
cl:function(a,b,c){var u=new F.a4(),t=a.a
if(t==null)H.v(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.v(P.r("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a3()
return u},
m7:function(a,b){var u=new F.bc(),t=a.a
if(t==null)H.v(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.v(P.r("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a3()
return u},
k1:function(){var u=new F.dO(),t=new F.iE(u)
t.b=!1
t.shS(H.c([],[F.ax]))
u.a=t
t=new F.hN(u)
t.sc1(H.c([],[F.bC]))
u.b=t
t=new F.hM(u)
t.sfb(H.c([],[F.bc]))
u.c=t
t=new F.hL(u)
t.sf5(H.c([],[F.a4]))
u.d=t
u.e=null
return u},
iD:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ax(),r=new F.iJ()
r.sc1(H.c([],[F.bC]))
s.b=r
r=new F.iI()
u=[F.bc]
r.sfc(H.c([],u))
r.sfd(H.c([],u))
s.c=r
r=new F.iF()
u=[F.a4]
r.sf6(H.c([],u))
r.sf7(H.c([],u))
r.sf8(H.c([],u))
s.d=r
h=$.lI()
s.e=0
r=$.aK()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bm().a)!==0?e:t
s.x=(u&$.bl().a)!==0?b:t
s.y=(u&$.bn().a)!==0?f:t
s.z=(u&$.bo().a)!==0?g:t
s.Q=(u&$.lJ().a)!==0?c:t
s.ch=(u&$.c9().a)!==0?i:0
s.cx=(u&$.bk().a)!==0?a:t
return s},
jv:function jv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a4:function a4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bc:function bc(){this.b=this.a=null},
bC:function bC(){this.a=null},
dO:function dO(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hL:function hL(a){this.a=a
this.b=null},
hM:function hM(a){this.a=a
this.b=null},
hN:function hN(a){this.a=a
this.b=null},
ax:function ax(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iL:function iL(a){this.a=a},
iK:function iK(a){this.a=a},
iE:function iE(a){this.a=a
this.c=this.b=null},
iF:function iF(){this.d=this.c=this.b=null},
iG:function iG(a,b){this.a=a
this.b=b},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(){this.c=this.b=null},
iJ:function iJ(){this.b=null}},T={cF:function cF(){},dV:function dV(){},i7:function i7(){var _=this
_.y=_.d=_.c=_.b=_.a=null},dW:function dW(){var _=this
_.e=_.d=_.c=_.b=_.a=null},i8:function i8(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},ia:function ia(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},i9:function i9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},Q={
lq:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="testCanvas",a6=null,a7=34067,a8="modifiers",a9=V.mn("Test 019"),b0=W.jQ()
b0.className="pageLargeCanvas"
b0.id=a5
a9.a.appendChild(b0)
u=[P.f]
a9.dm(H.c(["A test of the Material Lighting shader with an alpha texture. ","There are no mapped reflections, this is actually transparent."],u))
a9.dm(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a5)
if(t==null)H.v(P.r("Failed to find an element with the identifier, testCanvas."))
s=E.mp(t,!0,!0,!0,!1)
r=E.kB()
q=F.k1()
F.d1(q,a6,a6,1,1,1,0,0,1)
F.d1(q,a6,a6,1,1,0,1,0,3)
F.d1(q,a6,a6,1,1,0,0,1,2)
F.d1(q,a6,a6,1,1,-1,0,0,0)
F.d1(q,a6,a6,1,1,0,-1,0,0)
F.d1(q,a6,a6,1,1,0,0,-1,3)
q.av()
r.sbG(0,q)
p=X.jU(a6)
if(p.b){p.b=!1
u=new D.K("clearColor",!0,!1,[P.O])
u.b=!0
p.an(u)}u=s.f
o=u.a
n=o.createTexture()
o.bindTexture(a7,n)
o.texParameteri(a7,10242,10497)
o.texParameteri(a7,10243,10497)
o.texParameteri(a7,10241,9729)
o.texParameteri(a7,10240,9729)
o.bindTexture(a7,a6)
m=new T.dW()
m.a=0
m.b=n
m.c=!1
m.d=0
u.aL(m,n,"../resources/maskonaive/posx.jpg",34069,!1,!1)
u.aL(m,n,"../resources/maskonaive/negx.jpg",34070,!1,!1)
u.aL(m,n,"../resources/maskonaive/posy.jpg",34071,!1,!1)
u.aL(m,n,"../resources/maskonaive/negy.jpg",34072,!1,!1)
u.aL(m,n,"../resources/maskonaive/posz.jpg",34073,!1,!1)
u.aL(m,n,"../resources/maskonaive/negz.jpg",34074,!1,!1)
l=s.f.iF("../resources/AlphaWeave.png")
k=new O.dB()
k.seU(O.jR(V.al))
k.e.aR(k.gfp(),k.gfs())
u=new O.aU(k,"emission")
u.c=C.c
u.f=new V.a3(0,0,0)
k.f=u
u=new O.aU(k,"ambient")
u.c=C.c
u.f=new V.a3(0,0,0)
k.r=u
u=new O.aU(k,"diffuse")
u.c=C.c
u.f=new V.a3(0,0,0)
k.x=u
u=new O.aU(k,"invDiffuse")
u.c=C.c
u.f=new V.a3(0,0,0)
k.y=u
u=new O.hb(k,"specular")
u.c=C.c
u.f=new V.a3(0,0,0)
u.ch=100
k.z=u
u=new O.h8(k,"bump")
u.c=C.c
k.Q=u
k.ch=null
u=new O.aU(k,"reflect")
u.c=C.c
u.f=new V.a3(0,0,0)
k.cx=u
u=new O.ha(k,"refract")
u.c=C.c
u.f=new V.a3(0,0,0)
u.ch=1
k.cy=u
u=new O.h7(k,"alpha")
u.c=C.c
u.f=1
k.db=u
u=new D.dv()
u.bb(D.a2)
u.sf2(H.c([],[D.bt]))
u.shh(H.c([],[D.dK]))
u.shC(H.c([],[D.dR]))
u.shO(H.c([],[D.dX]))
u.shP(H.c([],[D.dY]))
u.shQ(H.c([],[D.dZ]))
u.ch=u.Q=null
u.cH(u.gfn(),u.gh1(),u.gh5())
k.dx=u
o=u.Q
u=o==null?u.Q=D.L():o
u.h(0,k.ghn())
u=k.dx
o=u.ch
u=o==null?u.ch=D.L():o
u.h(0,k.gaI())
k.dy=null
u=k.dx
j=V.l7()
o=U.kx(V.kI(V.kP(),j,new V.R(1,-2,-3)))
i=new V.a3(1,1,1)
h=new D.bt()
h.c=new V.a3(1,1,1)
h.a=V.mr()
g=h.b
h.b=o
o.gp().h(0,h.geD())
o=new D.K("mover",g,h.b,[U.ab])
o.b=!0
h.ar(o)
if(!h.c.t(0,i)){g=h.c
h.c=i
o=new D.K("color",g,i,[V.a3])
o.b=!0
h.ar(o)}u.h(0,h)
u=k.r
u.saw(0,new V.a3(0.5,0.5,0.5))
u=k.x
u.saw(0,new V.a3(0.6,0.6,0.6))
k.r.scC(l)
k.x.scC(l)
k.db.scC(l)
f=new U.cn()
f.bb(U.ab)
f.aR(f.gfl(),f.gh3())
f.e=null
f.f=V.bV()
f.r=0
u=s.r
o=new U.e8()
h=U.jS()
h.scE(0,!0)
h.sct(6.283185307179586)
h.scv(0)
h.sa8(0,0)
h.scu(100)
h.sR(0)
h.scf(0.5)
o.b=h
e=o.gaH()
h.gp().h(0,e)
h=U.jS()
h.scE(0,!0)
h.sct(6.283185307179586)
h.scv(0)
h.sa8(0,0)
h.scu(100)
h.sR(0)
h.scf(0.5)
o.c=h
h.gp().h(0,e)
o.d=null
o.r=o.f=o.e=!1
o.y=o.x=2.5
o.Q=4
o.ch=o.cx=!1
o.db=o.cy=0
o.dx=null
o.dy=0
o.fx=o.fr=null
d=new X.at(!1,!1,!1)
g=o.d
o.d=d
h=[X.at]
e=new D.K(a8,g,d,h)
e.b=!0
o.M(e)
e=o.f
if(e!==!1){o.f=!1
e=new D.K("invertX",e,!1,[P.O])
e.b=!0
o.M(e)}e=o.r
if(e!==!1){o.r=!1
e=new D.K("invertY",e,!1,[P.O])
e.b=!0
o.M(e)}o.aY(u)
f.h(0,o)
u=s.r
o=new U.e7()
e=U.jS()
e.scE(0,!0)
e.sct(6.283185307179586)
e.scv(0)
e.sa8(0,0)
e.scu(100)
e.sR(0)
e.scf(0.2)
o.b=e
e.gp().h(0,o.gaH())
o.c=null
o.d=!1
o.e=2.5
o.r=4
o.x=o.y=!1
o.z=0
o.Q=null
o.ch=0
o.cy=o.cx=null
d=new X.at(!0,!1,!1)
g=o.c
o.c=d
e=new D.K(a8,g,d,h)
e.b=!0
o.M(e)
o.aY(u)
f.h(0,o)
u=s.r
o=new U.e9()
o.c=0.01
o.e=o.d=0
d=new X.at(!1,!1,!1)
o.b=d
h=new D.K(a8,a6,d,h)
h.b=!0
o.M(h)
o.aY(u)
f.h(0,o)
f.h(0,U.kx(V.aV(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=X.kM(f)
b=new M.dh()
b.saZ(a6)
b.sb3(0,a6)
b.sb4(a6)
u=E.kB()
q=F.k1()
o=q.a
h=new V.R(-1,-1,1)
h=h.v(0,Math.sqrt(h.C(h)))
a=o.bg(new V.bg(1,2,4,6),new V.aF(1,0,0,1),new V.ag(-1,-1,0),new V.a5(0,1),h,a6)
o=q.a
h=new V.R(1,-1,1)
h=h.v(0,Math.sqrt(h.C(h)))
a0=o.bg(new V.bg(0,3,4,6),new V.aF(0,0,1,1),new V.ag(1,-1,0),new V.a5(1,1),h,a6)
o=q.a
h=new V.R(1,1,1)
h=h.v(0,Math.sqrt(h.C(h)))
a1=o.bg(new V.bg(0,2,5,6),new V.aF(0,1,0,1),new V.ag(1,1,0),new V.a5(1,0),h,a6)
o=q.a
h=V.bf()
e=new V.R(-1,1,1)
e=e.v(0,Math.sqrt(e.C(e)))
a2=o.bg(new V.bg(0,2,4,7),new V.aF(1,1,0,1),new V.ag(-1,1,0),h,e,a6)
q.d.ih(H.c([a,a0,a1,a2],[F.ax]))
q.av()
u.sbG(0,q)
b.d=u
b.e=null
u=new O.dP()
u.b=1.0471975511965976
u.d=new V.a3(1,1,1)
g=u.c
u.c=m
m.gp().h(0,u.gaI())
o=new D.K("boxTexture",g,u.c,[T.dW])
o.b=!0
u.S(o)
b.sb4(u)
b.sb3(0,p)
b.saZ(c)
a3=new M.dl()
a3.seX(0,O.jR(E.af))
a3.d.aR(a3.gfA(),a3.gfC())
a3.x=a3.r=a3.f=a3.e=null
a4=X.jU(a6)
a3.saZ(a6)
a3.sb3(0,a4)
a3.sb4(a6)
a3.saZ(c)
a3.sb4(k)
a3.sb3(0,p)
a3.d.h(0,r)
u=M.av
o=H.c([b,a3],[u])
h=new M.df()
h.bb(u)
h.e=!1
h.f=null
h.aR(h.gh7(),h.gh9())
h.a6(0,o)
u=s.d
if(u!==h){if(u!=null)u.gp().U(0,s.gcO())
s.d=h
h.gp().h(0,s.gcO())
s.cP()}u=s.z
if(u==null)u=s.z=D.L()
o={func:1,ret:-1,args:[D.x]}
h=H.n(new Q.jI(a9,k),o)
if(u.b==null)u.saM(H.c([],[o]))
u=u.b;(u&&C.a).h(u,h)
V.nc(s)},
jI:function jI(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,Q]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jZ.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gG:function(a){return H.cx(a)},
i:function(a){return"Instance of '"+H.bX(a)+"'"}}
J.fU.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iO:1}
J.dr.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.dt.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.hv.prototype={}
J.cP.prototype={}
J.bB.prototype={
i:function(a){var u=a[$.lx()]
if(u==null)return this.er(a)
return"JavaScript function for "+H.k(J.ar(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibw:1}
J.aR.prototype={
h:function(a,b){H.G(b,H.y(a,0))
if(!!a.fixed$length)H.v(P.aw("add"))
a.push(b)},
U:function(a,b){var u
if(!!a.fixed$length)H.v(P.aw("remove"))
for(u=0;u<a.length;++u)if(J.a7(a[u],b)){a.splice(u,1)
return!0}return!1},
a6:function(a,b){var u,t
H.m(b,"$id",[H.y(a,0)],"$ad")
if(!!a.fixed$length)H.v(P.aw("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.B)(b),++t)a.push(b[t])},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.i(P.bs(a))}},
l:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.W(t,u,H.k(a[u]))
return t.join(b)},
iD:function(a){return this.l(a,"")},
iy:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.O,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.z(b.$1(s)))return s
if(a.length!==u)throw H.i(P.bs(a))}throw H.i(H.jW())},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
eo:function(a,b,c){var u=a.length
if(b>u)throw H.i(P.aZ(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.i(P.aZ(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.y(a,0)])
return H.c(a.slice(b,c),[H.y(a,0)])},
gbx:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.i(H.jW())},
dq:function(a,b){var u,t
H.n(b,{func:1,ret:P.O,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.z(b.$1(a[t])))return!0
if(a.length!==u)throw H.i(P.bs(a))}return!1},
T:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a7(a[u],b))return!0
return!1},
i:function(a){return P.jV(a,"[","]")},
gP:function(a){return new J.ak(a,a.length,[H.y(a,0)])},
gG:function(a){return H.cx(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.v(P.aw("set length"))
if(b<0)throw H.i(P.aZ(b,0,null,"newLength",null))
a.length=b},
W:function(a,b,c){H.G(c,H.y(a,0))
if(!!a.immutable$list)H.v(P.aw("indexed set"))
if(b>=a.length||b<0)throw H.i(H.d5(a,b))
a[b]=c},
$id:1,
$ib:1}
J.jY.prototype={}
J.ak.prototype={
gE:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.i(H.B(s))
u=t.c
if(u>=r){t.sd2(null)
return!1}t.sd2(s[u]);++t.c
return!0},
sd2:function(a){this.d=H.G(a,H.y(this,0))},
$iaQ:1}
J.ds.prototype={
j3:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.i(P.aw(""+a+".toInt()"))},
co:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.i(P.aw(""+a+".floor()"))},
ak:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.aw(""+a+".round()"))},
ec:function(a,b){var u,t
if(b>20)throw H.i(P.aZ(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
ej:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ev:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.di(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.di(a,b)},
di:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.i(P.aw("Result of truncating division is "+H.k(u)+": "+H.k(a)+" ~/ "+b))},
be:function(a,b){var u
if(a>0)u=this.hB(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hB:function(a,b){return b>31?0:a>>>b},
$iA:1,
$ia8:1}
J.dq.prototype={$iD:1}
J.dp.prototype={}
J.bT.prototype={
cd:function(a,b){if(b<0)throw H.i(H.d5(a,b))
if(b>=a.length)H.v(H.d5(a,b))
return a.charCodeAt(b)},
aJ:function(a,b){if(b>=a.length)throw H.i(H.d5(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(typeof b!=="string")throw H.i(P.jO(b,null,null))
return a+b},
bH:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
b9:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.i(P.hA(b,null))
if(b>c)throw H.i(P.hA(b,null))
if(c>a.length)throw H.i(P.hA(c,null))
return a.substring(b,c)},
b8:function(a,b){return this.b9(a,b,null)},
j6:function(a){return a.toLowerCase()},
w:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.H)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ag:function(a,b){var u=b-a.length
if(u<=0)return a
return this.w(" ",u)+a},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ikL:1,
$if:1}
H.q.prototype={
gm:function(a){return this.a.length},
j:function(a,b){return C.i.cd(this.a,b)},
$ae5:function(){return[P.D]},
$aw:function(){return[P.D]},
$ad:function(){return[P.D]},
$ab:function(){return[P.D]}}
H.fz.prototype={}
H.bU.prototype={
gP:function(a){var u=this
return new H.cp(u,u.gm(u),[H.aj(u,"bU",0)])},
bF:function(a,b){return this.eq(0,H.n(b,{func:1,ret:P.O,args:[H.aj(this,"bU",0)]}))}}
H.cp.prototype={
gE:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.kh(s),q=r.gm(s)
if(t.b!==q)throw H.i(P.bs(s))
u=t.c
if(u>=q){t.saU(null)
return!1}t.saU(r.D(s,u));++t.c
return!0},
saU:function(a){this.d=H.G(a,H.y(this,0))},
$iaQ:1}
H.h4.prototype={
gP:function(a){return new H.h5(J.bK(this.a),this.b,this.$ti)},
gm:function(a){return J.bL(this.a)},
D:function(a,b){return this.b.$1(J.jN(this.a,b))},
$ad:function(a,b){return[b]}}
H.h5.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.saU(u.c.$1(t.gE(t)))
return!0}u.saU(null)
return!1},
gE:function(a){return this.a},
saU:function(a){this.a=H.G(a,H.y(this,1))},
$aaQ:function(a,b){return[b]}}
H.h6.prototype={
gm:function(a){return J.bL(this.a)},
D:function(a,b){return this.b.$1(J.jN(this.a,b))},
$abU:function(a,b){return[b]},
$ad:function(a,b){return[b]}}
H.cQ.prototype={
gP:function(a){return new H.iN(J.bK(this.a),this.b,this.$ti)}}
H.iN.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(H.z(t.$1(u.gE(u))))return!0
return!1},
gE:function(a){var u=this.a
return u.gE(u)}}
H.bR.prototype={}
H.e5.prototype={}
H.e4.prototype={}
H.ik.prototype={
af:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hr.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.k(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fW.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.k(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.k(t.a)+")"
return s+r+"' on '"+u+"' ("+H.k(t.a)+")"}}
H.ix.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jM.prototype={
$1:function(a){if(!!J.X(a).$ibv)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.eM.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iao:1}
H.cf.prototype={
i:function(a){return"Closure '"+H.bX(this).trim()+"'"},
$ibw:1,
gj7:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i4.prototype={}
H.hV.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c8(u)+"'"}}
H.cb.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cb))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.cx(this.a)
else u=typeof t!=="object"?J.bJ(t):H.cx(t)
return(u^H.cx(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.bX(u)+"'")}}
H.im.prototype={
i:function(a){return this.a}}
H.fj.prototype={
i:function(a){return this.a}}
H.hI.prototype={
i:function(a){return"RuntimeError: "+H.k(this.a)}}
H.iO.prototype={
i:function(a){return"Assertion failed: "+P.dm(this.a)}}
H.aS.prototype={
gm:function(a){return this.a},
ga7:function(a){return new H.dw(this,[H.y(this,0)])},
dw:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.d_(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.d_(t,b)}else return s.iB(b)},
iB:function(a){var u=this.d
if(u==null)return!1
return this.cp(this.bP(u,J.bJ(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bc(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bc(r,b)
s=t==null?null:t.b
return s}else return q.iC(b)},
iC:function(a){var u,t,s=this.d
if(s==null)return
u=this.bP(s,J.bJ(a)&0x3ffffff)
t=this.cp(u,a)
if(t<0)return
return u[t].b},
W:function(a,b,c){var u,t,s,r,q,p,o=this
H.G(b,H.y(o,0))
H.G(c,H.y(o,1))
if(typeof b==="string"){u=o.b
o.cS(u==null?o.b=o.c_():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cS(t==null?o.c=o.c_():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.c_()
r=J.bJ(b)&0x3ffffff
q=o.bP(s,r)
if(q==null)o.c4(s,r,[o.c0(b,c)])
else{p=o.cp(q,b)
if(p>=0)q[p].b=c
else q.push(o.c0(b,c))}}},
N:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.y(s,0),H.y(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.i(P.bs(s))
u=u.c}},
cS:function(a,b,c){var u,t=this
H.G(b,H.y(t,0))
H.G(c,H.y(t,1))
u=t.bc(a,b)
if(u==null)t.c4(a,b,t.c0(b,c))
else u.b=c},
eO:function(){this.r=this.r+1&67108863},
c0:function(a,b){var u,t=this,s=new H.fZ(H.G(a,H.y(t,0)),H.G(b,H.y(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eO()
return s},
cp:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a7(a[t].a,b))return t
return-1},
i:function(a){return P.kH(this)},
bc:function(a,b){return a[b]},
bP:function(a,b){return a[b]},
c4:function(a,b,c){a[b]=c},
f1:function(a,b){delete a[b]},
d_:function(a,b){return this.bc(a,b)!=null},
c_:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c4(t,u,t)
this.f1(t,u)
return t}}
H.fZ.prototype={}
H.dw.prototype={
gm:function(a){return this.a.a},
gP:function(a){var u=this.a,t=new H.h_(u,u.r,this.$ti)
t.c=u.e
return t}}
H.h_.prototype={
gE:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.bs(t))
else{t=u.c
if(t==null){u.scR(null)
return!1}else{u.scR(t.a)
u.c=u.c.c
return!0}}},
scR:function(a){this.d=H.G(a,H.y(this,0))},
$iaQ:1}
H.jE.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.jF.prototype={
$2:function(a,b){return this.a(a,b)},
$S:37}
H.jG.prototype={
$1:function(a){return this.a(H.H(a))},
$S:35}
H.fV.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikL:1}
H.cu.prototype={$inB:1}
H.dE.prototype={
gm:function(a){return a.length},
$iI:1,
$aI:function(){}}
H.ct.prototype={
j:function(a,b){H.bG(b,a,a.length)
return a[b]},
$abR:function(){return[P.A]},
$aw:function(){return[P.A]},
$id:1,
$ad:function(){return[P.A]},
$ib:1,
$ab:function(){return[P.A]}}
H.dF.prototype={
$abR:function(){return[P.D]},
$aw:function(){return[P.D]},
$id:1,
$ad:function(){return[P.D]},
$ib:1,
$ab:function(){return[P.D]}}
H.hj.prototype={
j:function(a,b){H.bG(b,a,a.length)
return a[b]}}
H.hk.prototype={
j:function(a,b){H.bG(b,a,a.length)
return a[b]}}
H.hl.prototype={
j:function(a,b){H.bG(b,a,a.length)
return a[b]}}
H.hm.prototype={
j:function(a,b){H.bG(b,a,a.length)
return a[b]}}
H.hn.prototype={
j:function(a,b){H.bG(b,a,a.length)
return a[b]}}
H.dG.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bG(b,a,a.length)
return a[b]},
$inC:1}
H.ho.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bG(b,a,a.length)
return a[b]}}
H.cU.prototype={}
H.cV.prototype={}
H.cW.prototype={}
H.cX.prototype={}
P.iQ.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:13}
P.iP.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:38}
P.iR.prototype={
$0:function(){this.a.$0()},
$S:2}
P.iS.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eS.prototype={
eM:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c4(new P.jr(this,b),0),a)
else throw H.i(P.aw("`setTimeout()` not found."))},
eN:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c4(new P.jq(this,a,Date.now(),b),0),a)
else throw H.i(P.aw("Periodic timer."))},
$ib3:1}
P.jr.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jq.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.h.ev(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.b8.prototype={
iG:function(a){if(this.c!==6)return!0
return this.b.b.cB(H.n(this.d,{func:1,ret:P.O,args:[P.S]}),a.a,P.O,P.S)},
iA:function(a){var u=this.e,t=P.S,s={futureOr:1,type:H.y(this,1)},r=this.b.b
if(H.f8(u,{func:1,args:[P.S,P.ao]}))return H.kg(r.iZ(u,a.a,a.b,null,t,P.ao),s)
else return H.kg(r.cB(H.n(u,{func:1,args:[P.S]}),a.a,null,t),s)}}
P.aC.prototype={
eb:function(a,b,c){var u,t,s,r=H.y(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a0
if(u!==C.k){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.mH(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aC($.a0,[c])
s=b==null?1:3
this.cT(new P.b8(t,s,a,b,[r,c]))
return t},
j2:function(a,b){return this.eb(a,null,b)},
cT:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.j(t.c,"$ib8")
t.c=a}else{if(s===2){u=H.j(t.c,"$iaC")
s=u.a
if(s<4){u.cT(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.jz(null,null,s,H.n(new P.j_(t,a),{func:1,ret:-1}))}},
dd:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.j(p.c,"$ib8")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.j(p.c,"$iaC")
u=q.a
if(u<4){q.dd(a)
return}p.a=u
p.c=q.c}o.a=p.bd(a)
u=p.b
u.toString
P.jz(null,null,u,H.n(new P.j3(o,p),{func:1,ret:-1}))}},
c3:function(){var u=H.j(this.c,"$ib8")
this.c=null
return this.bd(u)},
bd:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cW:function(a){var u,t,s=this,r=H.y(s,0)
H.kg(a,{futureOr:1,type:r})
u=s.$ti
if(H.kd(a,"$icm",u,"$acm"))if(H.kd(a,"$iaC",u,null))P.l8(a,s)
else P.mw(a,s)
else{t=s.c3()
H.G(a,r)
s.a=4
s.c=a
P.cT(s,t)}},
cX:function(a,b){var u,t=this
H.j(b,"$iao")
u=t.c3()
t.a=8
t.c=new P.ae(a,b)
P.cT(t,u)},
$icm:1}
P.j_.prototype={
$0:function(){P.cT(this.a,this.b)},
$S:2}
P.j3.prototype={
$0:function(){P.cT(this.b,this.a.a)},
$S:2}
P.j0.prototype={
$1:function(a){var u=this.a
u.a=0
u.cW(a)},
$S:13}
P.j1.prototype={
$2:function(a,b){H.j(b,"$iao")
this.a.cX(a,b)},
$1:function(a){return this.$2(a,null)},
$S:32}
P.j2.prototype={
$0:function(){this.a.cX(this.b,this.c)},
$S:2}
P.j6.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.e8(H.n(s.d,{func:1}),null)}catch(r){u=H.ay(r)
t=H.c6(r)
if(o.d){s=H.j(o.a.a.c,"$iae").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.j(o.a.a.c,"$iae")
else q.b=new P.ae(u,t)
q.a=!0
return}if(!!J.X(n).$icm){if(n instanceof P.aC&&n.a>=4){if(n.a===8){s=o.b
s.b=H.j(n.c,"$iae")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.j2(new P.j7(p),null)
s.a=!1}},
$S:3}
P.j7.prototype={
$1:function(a){return this.a},
$S:31}
P.j5.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.y(s,0)
q=H.G(n.c,r)
p=H.y(s,1)
n.a.b=s.b.b.cB(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ay(o)
t=H.c6(o)
s=n.a
s.b=new P.ae(u,t)
s.a=!0}},
$S:3}
P.j4.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.j(m.a.a.c,"$iae")
r=m.c
if(H.z(r.iG(u))&&r.e!=null){q=m.b
q.b=r.iA(u)
q.a=!1}}catch(p){t=H.ay(p)
s=H.c6(p)
r=H.j(m.a.a.c,"$iae")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ae(t,s)
n.a=!0}},
$S:3}
P.ed.prototype={}
P.hY.prototype={
gm:function(a){var u,t,s=this,r={},q=new P.aC($.a0,[P.D])
r.a=0
u=H.y(s,0)
t=H.n(new P.i_(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.i0(r,q),{func:1,ret:-1})
W.a6(s.a,s.b,t,!1,u)
return q}}
P.i_.prototype={
$1:function(a){H.G(a,H.y(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.y(this.b,0)]}}}
P.i0.prototype={
$0:function(){this.b.cW(this.a.a)},
$S:2}
P.cC.prototype={}
P.hZ.prototype={}
P.b3.prototype={}
P.ae.prototype={
i:function(a){return H.k(this.a)},
$ibv:1}
P.ju.prototype={$inQ:1}
P.jy.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dI():s
s=this.b
if(s==null)throw H.i(t)
u=H.i(t)
u.stack=s.i(0)
throw u},
$S:2}
P.jd.prototype={
j_:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.k===$.a0){a.$0()
return}P.le(r,r,this,a,-1)}catch(s){u=H.ay(s)
t=H.c6(s)
P.jx(r,r,this,u,H.j(t,"$iao"))}},
j0:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.G(b,c)
try{if(C.k===$.a0){a.$1(b)
return}P.lf(r,r,this,a,b,-1,c)}catch(s){u=H.ay(s)
t=H.c6(s)
P.jx(r,r,this,u,H.j(t,"$iao"))}},
io:function(a,b){return new P.jf(this,H.n(a,{func:1,ret:b}),b)},
c9:function(a){return new P.je(this,H.n(a,{func:1,ret:-1}))},
dr:function(a,b){return new P.jg(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
e8:function(a,b){H.n(a,{func:1,ret:b})
if($.a0===C.k)return a.$0()
return P.le(null,null,this,a,b)},
cB:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.G(b,d)
if($.a0===C.k)return a.$1(b)
return P.lf(null,null,this,a,b,c,d)},
iZ:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.G(b,e)
H.G(c,f)
if($.a0===C.k)return a.$2(b,c)
return P.mI(null,null,this,a,b,c,d,e,f)}}
P.jf.prototype={
$0:function(){return this.a.e8(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.je.prototype={
$0:function(){return this.a.j_(this.b)},
$S:3}
P.jg.prototype={
$1:function(a){var u=this.c
return this.a.j0(this.b,H.G(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jb.prototype={
gP:function(a){var u=this,t=new P.et(u,u.r,u.$ti)
t.c=u.e
return t},
gm:function(a){return this.a},
T:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.j(u[b],"$ic0")!=null}else{t=this.eY(b)
return t}},
eY:function(a){var u=this.d
if(u==null)return!1
return this.bN(this.d3(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.G(b,H.y(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cU(u==null?s.b=P.k7():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cU(t==null?s.c=P.k7():t,b)}else return s.eP(0,b)},
eP:function(a,b){var u,t,s,r=this
H.G(b,H.y(r,0))
u=r.d
if(u==null)u=r.d=P.k7()
t=r.cY(b)
s=u[t]
if(s==null)u[t]=[r.bK(b)]
else{if(r.bN(s,b)>=0)return!1
s.push(r.bK(b))}return!0},
U:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hk(this.c,b)
else return this.hj(0,b)},
hj:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.d3(r,b)
t=s.bN(u,b)
if(t<0)return!1
s.dj(u.splice(t,1)[0])
return!0},
cU:function(a,b){H.G(b,H.y(this,0))
if(H.j(a[b],"$ic0")!=null)return!1
a[b]=this.bK(b)
return!0},
hk:function(a,b){var u
if(a==null)return!1
u=H.j(a[b],"$ic0")
if(u==null)return!1
this.dj(u)
delete a[b]
return!0},
d5:function(){this.r=1073741823&this.r+1},
bK:function(a){var u,t=this,s=new P.c0(H.G(a,H.y(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.d5()
return s},
dj:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.d5()},
cY:function(a){return J.bJ(a)&1073741823},
d3:function(a,b){return a[this.cY(b)]},
bN:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a7(a[t].a,b))return t
return-1}}
P.c0.prototype={}
P.et.prototype={
gE:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.bs(t))
else{t=u.c
if(t==null){u.scV(null)
return!1}else{u.scV(H.G(t.a,H.y(u,0)))
u.c=u.c.b
return!0}}},
scV:function(a){this.d=H.G(a,H.y(this,0))},
$iaQ:1}
P.h0.prototype={$id:1,$ib:1}
P.w.prototype={
gP:function(a){return new H.cp(a,this.gm(a),[H.d6(this,a,"w",0)])},
D:function(a,b){return this.j(a,b)},
j5:function(a,b){var u,t=this,s=H.c([],[H.d6(t,a,"w",0)])
C.a.sm(s,t.gm(a))
for(u=0;u<t.gm(a);++u)C.a.W(s,u,t.j(a,u))
return s},
j4:function(a){return this.j5(a,!0)},
i:function(a){return P.jV(a,"[","]")}}
P.h2.prototype={}
P.h3.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.k(a)
t.a=u+": "
t.a+=H.k(b)},
$S:14}
P.a9.prototype={
N:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.d6(s,a,"a9",0),H.d6(s,a,"a9",1)]})
for(u=J.bK(s.ga7(a));u.u();){t=u.gE(u)
b.$2(t,s.j(a,t))}},
gm:function(a){return J.bL(this.ga7(a))},
i:function(a){return P.kH(a)},
$iQ:1}
P.ji.prototype={
a6:function(a,b){var u
for(u=J.bK(H.m(b,"$id",this.$ti,"$ad"));u.u();)this.h(0,u.gE(u))},
i:function(a){return P.jV(this,"{","}")},
D:function(a,b){var u,t,s,r=this
P.kS(b,"index")
for(u=P.mA(r,r.r,H.y(r,0)),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.i(P.Y(b,r,"index",null,t))},
$id:1,
$ikW:1}
P.eu.prototype={}
P.cg.prototype={}
P.ch.prototype={}
P.fB.prototype={
$acg:function(){return[P.f,[P.b,P.D]]}}
P.fR.prototype={
i:function(a){return this.a}}
P.fQ.prototype={
eZ:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.bh("")
if(r>b)q.a+=C.i.b9(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lR(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$ach:function(){return[P.f,P.f]}}
P.iA.prototype={}
P.iB.prototype={
iq:function(a){var u,t,s=P.kT(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.js(u)
if(t.f9(a,0,s)!==s)t.dk(C.i.cd(a,s-1),0)
return new Uint8Array(u.subarray(0,H.mD(0,t.b,u.length)))},
$ach:function(){return[P.f,[P.b,P.D]]}}
P.js.prototype={
dk:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
f9:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.i.cd(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.i.aJ(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dk(r,C.i.aJ(a,p)))s=p}else if(r<=2047){q=n.b
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
P.O.prototype={}
P.az.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.az&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.h.be(u,30))&1073741823},
i:function(a){var u=this,t=P.lZ(H.mi(u)),s=P.di(H.mg(u)),r=P.di(H.mc(u)),q=P.di(H.md(u)),p=P.di(H.mf(u)),o=P.di(H.mh(u)),n=P.m_(H.me(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.A.prototype={}
P.bu.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.bu&&this.a===b.a},
gG:function(a){return C.h.gG(this.a)},
i:function(a){var u,t,s,r=new P.fy(),q=this.a
if(q<0)return"-"+new P.bu(0-q).i(0)
u=r.$1(C.h.a2(q,6e7)%60)
t=r.$1(C.h.a2(q,1e6)%60)
s=new P.fx().$1(q%1e6)
return""+C.h.a2(q,36e8)+":"+H.k(u)+":"+H.k(t)+"."+H.k(s)}}
P.fx.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:15}
P.fy.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:15}
P.bv.prototype={}
P.fb.prototype={
i:function(a){return"Assertion failed"}}
P.dI.prototype={
i:function(a){return"Throw of null."}}
P.aE.prototype={
gbM:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbL:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbM()+o+u
if(!q.a)return t
s=q.gbL()
r=P.dm(q.b)
return t+s+": "+r}}
P.bY.prototype={
gbM:function(){return"RangeError"},
gbL:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.k(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.k(s)
else if(t>s)u=": Not in range "+H.k(s)+".."+H.k(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.k(s)}return u}}
P.fT.prototype={
gbM:function(){return"RangeError"},
gbL:function(){var u,t=H.ad(this.b)
if(typeof t!=="number")return t.aE()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.k(u)},
gm:function(a){return this.f}}
P.iy.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iw.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cB.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fm.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dm(u)+"."}}
P.hu.prototype={
i:function(a){return"Out of Memory"},
$ibv:1}
P.dS.prototype={
i:function(a){return"Stack Overflow"},
$ibv:1}
P.fr.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.el.prototype={
i:function(a){return"Exception: "+this.a}}
P.fL.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.i.b9(s,0,75)+"...":s
return t+"\n"+r}}
P.bw.prototype={}
P.D.prototype={}
P.d.prototype={
bF:function(a,b){var u=H.aj(this,"d",0)
return new H.cQ(this,H.n(b,{func:1,ret:P.O,args:[u]}),[u])},
gm:function(a){var u,t=this.gP(this)
for(u=0;t.u();)++u
return u},
gaF:function(a){var u,t=this.gP(this)
if(!t.u())throw H.i(H.jW())
u=t.gE(t)
if(t.u())throw H.i(H.m4())
return u},
D:function(a,b){var u,t,s
P.kS(b,"index")
for(u=this.gP(this),t=0;u.u();){s=u.gE(u)
if(b===t)return s;++t}throw H.i(P.Y(b,this,"index",null,t))},
i:function(a){return P.m3(this,"(",")")}}
P.aQ.prototype={}
P.b.prototype={$id:1}
P.Q.prototype={}
P.N.prototype={
gG:function(a){return P.S.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.a8.prototype={}
P.S.prototype={constructor:P.S,$iS:1,
t:function(a,b){return this===b},
gG:function(a){return H.cx(this)},
i:function(a){return"Instance of '"+H.bX(this)+"'"},
toString:function(){return this.i(this)}}
P.ao.prototype={}
P.f.prototype={$ikL:1}
P.bh.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.t.prototype={}
W.f9.prototype={
gm:function(a){return a.length}}
W.d9.prototype={
i:function(a){return String(a)},
$id9:1}
W.fa.prototype={
i:function(a){return String(a)}}
W.ca.prototype={$ica:1}
W.db.prototype={}
W.bp.prototype={$ibp:1}
W.bO.prototype={
cF:function(a,b,c){if(c!=null)return a.getContext(b,P.mQ(c))
return a.getContext(b)},
ei:function(a,b){return this.cF(a,b,null)},
$ibO:1}
W.ce.prototype={$ice:1}
W.bq.prototype={
gm:function(a){return a.length}}
W.ci.prototype={$ici:1}
W.fn.prototype={
gm:function(a){return a.length}}
W.U.prototype={$iU:1}
W.cj.prototype={
gm:function(a){return a.length}}
W.fo.prototype={}
W.aM.prototype={}
W.aN.prototype={}
W.fp.prototype={
gm:function(a){return a.length}}
W.fq.prototype={
gm:function(a){return a.length}}
W.ft.prototype={
gm:function(a){return a.length}}
W.aA.prototype={$iaA:1}
W.fu.prototype={
i:function(a){return String(a)}}
W.dj.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[[P.an,P.a8]]},
$aw:function(){return[[P.an,P.a8]]},
$id:1,
$ad:function(){return[[P.an,P.a8]]},
$ib:1,
$ab:function(){return[[P.an,P.a8]]},
$aC:function(){return[[P.an,P.a8]]}}
W.dk.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gaD(a))+" x "+H.k(this.gay(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.X(b)
if(!u.$ian)return!1
return a.left===u.gby(b)&&a.top===u.gbD(b)&&this.gaD(a)===u.gaD(b)&&this.gay(a)===u.gay(b)},
gG:function(a){return W.la(C.j.gG(a.left),C.j.gG(a.top),C.j.gG(this.gaD(a)),C.j.gG(this.gay(a)))},
gds:function(a){return a.bottom},
gay:function(a){return a.height},
gby:function(a){return a.left},
gbC:function(a){return a.right},
gbD:function(a){return a.top},
gaD:function(a){return a.width},
$ian:1,
$aan:function(){return[P.a8]}}
W.fv.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[P.f]},
$aw:function(){return[P.f]},
$id:1,
$ad:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aC:function(){return[P.f]}}
W.fw.prototype={
gm:function(a){return a.length}}
W.iU.prototype={
gm:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.l(u,b)
return H.j(u[b],"$iT")},
h:function(a,b){this.a.appendChild(b)
return b},
gP:function(a){var u=this.j4(this)
return new J.ak(u,u.length,[H.y(u,0)])},
$aw:function(){return[W.T]},
$ad:function(){return[W.T]},
$ab:function(){return[W.T]}}
W.T.prototype={
gim:function(a){return new W.iW(a)},
gdu:function(a){return new W.iU(a,a.children)},
gdv:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.aE()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aE()
if(r<0)r=-r*0
return new P.an(u,t,s,r,[P.a8])},
i:function(a){return a.localName},
ae:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kA
if(u==null){u=H.c([],[W.au])
t=new W.dH(u)
C.a.h(u,W.l9(null))
C.a.h(u,W.lb())
$.kA=t
d=t}else d=u
u=$.kz
if(u==null){u=new W.eY(d)
$.kz=u
c=u}else{u.a=d
c=u}}if($.ba==null){u=document
t=u.implementation.createHTMLDocument("")
$.ba=t
$.jT=t.createRange()
t=$.ba.createElement("base")
H.j(t,"$ica")
t.href=u.baseURI
$.ba.head.appendChild(t)}u=$.ba
if(u.body==null){t=u.createElement("body")
u.body=H.j(t,"$ibp")}u=$.ba
if(!!this.$ibp)s=u.body
else{s=u.createElement(a.tagName)
$.ba.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.T(C.Q,a.tagName)){$.jT.selectNodeContents(s)
r=$.jT.createContextualFragment(b)}else{s.innerHTML=b
r=$.ba.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.ba.body
if(s==null?u!=null:s!==u)J.ks(s)
c.cG(r)
document.adoptNode(r)
return r},
is:function(a,b,c){return this.ae(a,b,c,null)},
el:function(a,b){a.textContent=null
a.appendChild(this.ae(a,b,null,null))},
$iT:1,
ge9:function(a){return a.tagName}}
W.fA.prototype={
$1:function(a){return!!J.X(H.j(a,"$iE")).$iT},
$S:16}
W.o.prototype={$io:1}
W.e.prototype={
ig:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.eQ(a,b,c,!1)},
eQ:function(a,b,c,d){return a.addEventListener(b,H.c4(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ie:1}
W.aO.prototype={$iaO:1}
W.fF.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aO]},
$aw:function(){return[W.aO]},
$id:1,
$ad:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aC:function(){return[W.aO]}}
W.fG.prototype={
gm:function(a){return a.length}}
W.fK.prototype={
gm:function(a){return a.length}}
W.aP.prototype={$iaP:1}
W.fP.prototype={
gm:function(a){return a.length}}
W.bS.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.E]},
$aw:function(){return[W.E]},
$id:1,
$ad:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$ibS:1,
$aC:function(){return[W.E]}}
W.bx.prototype={$ibx:1,
gdz:function(a){return a.data}}
W.co.prototype={$ico:1}
W.aT.prototype={$iaT:1}
W.dy.prototype={
i:function(a){return String(a)},
$idy:1}
W.hc.prototype={
gm:function(a){return a.length}}
W.hd.prototype={
j:function(a,b){return P.bj(a.get(H.H(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
ga7:function(a){var u=H.c([],[P.f])
this.N(a,new W.he(u))
return u},
gm:function(a){return a.size},
$aa9:function(){return[P.f,null]},
$iQ:1,
$aQ:function(){return[P.f,null]}}
W.he.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hf.prototype={
j:function(a,b){return P.bj(a.get(H.H(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
ga7:function(a){var u=H.c([],[P.f])
this.N(a,new W.hg(u))
return u},
gm:function(a){return a.size},
$aa9:function(){return[P.f,null]},
$iQ:1,
$aQ:function(){return[P.f,null]}}
W.hg.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aW.prototype={$iaW:1}
W.hh.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aW]},
$aw:function(){return[W.aW]},
$id:1,
$ad:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aC:function(){return[W.aW]}}
W.aa.prototype={$iaa:1}
W.ai.prototype={
gaF:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.i(P.kX("No elements"))
if(t>1)throw H.i(P.kX("More than one element"))
return u.firstChild},
a6:function(a,b){var u,t,s,r
H.m(b,"$id",[W.E],"$ad")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gP:function(a){var u=this.a.childNodes
return new W.dn(u,u.length,[H.d6(C.S,u,"C",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.l(u,b)
return u[b]},
$aw:function(){return[W.E]},
$ad:function(){return[W.E]},
$ab:function(){return[W.E]}}
W.E.prototype={
iW:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i:function(a){var u=a.nodeValue
return u==null?this.ep(a):u},
ik:function(a,b){return a.appendChild(b)},
$iE:1}
W.cv.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.E]},
$aw:function(){return[W.E]},
$id:1,
$ad:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aC:function(){return[W.E]}}
W.aY.prototype={$iaY:1,
gm:function(a){return a.length}}
W.hx.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aY]},
$aw:function(){return[W.aY]},
$id:1,
$ad:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aC:function(){return[W.aY]}}
W.hG.prototype={
j:function(a,b){return P.bj(a.get(H.H(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
ga7:function(a){var u=H.c([],[P.f])
this.N(a,new W.hH(u))
return u},
gm:function(a){return a.size},
$aa9:function(){return[P.f,null]},
$iQ:1,
$aQ:function(){return[P.f,null]}}
W.hH.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hJ.prototype={
gm:function(a){return a.length}}
W.b_.prototype={$ib_:1}
W.hS.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b_]},
$aw:function(){return[W.b_]},
$id:1,
$ad:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aC:function(){return[W.b_]}}
W.b0.prototype={$ib0:1}
W.hT.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b0]},
$aw:function(){return[W.b0]},
$id:1,
$ad:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aC:function(){return[W.b0]}}
W.b1.prototype={$ib1:1,
gm:function(a){return a.length}}
W.hW.prototype={
j:function(a,b){return a.getItem(H.H(b))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga7:function(a){var u=H.c([],[P.f])
this.N(a,new W.hX(u))
return u},
gm:function(a){return a.length},
$aa9:function(){return[P.f,P.f]},
$iQ:1,
$aQ:function(){return[P.f,P.f]}}
W.hX.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:33}
W.aG.prototype={$iaG:1}
W.c_.prototype={}
W.dT.prototype={
ae:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bI(a,b,c,d)
u=W.m0("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ai(t).a6(0,new W.ai(u))
return t}}
W.i2.prototype={
ae:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bI(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.y.ae(u.createElement("table"),b,c,d)
u.toString
u=new W.ai(u)
s=u.gaF(u)
s.toString
u=new W.ai(s)
r=u.gaF(u)
t.toString
r.toString
new W.ai(t).a6(0,new W.ai(r))
return t}}
W.i3.prototype={
ae:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bI(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.y.ae(u.createElement("table"),b,c,d)
u.toString
u=new W.ai(u)
s=u.gaF(u)
t.toString
s.toString
new W.ai(t).a6(0,new W.ai(s))
return t}}
W.cE.prototype={$icE:1}
W.b2.prototype={$ib2:1}
W.aH.prototype={$iaH:1}
W.i5.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aH]},
$aw:function(){return[W.aH]},
$id:1,
$ad:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aC:function(){return[W.aH]}}
W.i6.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b2]},
$aw:function(){return[W.b2]},
$id:1,
$ad:function(){return[W.b2]},
$ib:1,
$ab:function(){return[W.b2]},
$aC:function(){return[W.b2]}}
W.ic.prototype={
gm:function(a){return a.length}}
W.b4.prototype={$ib4:1}
W.aI.prototype={$iaI:1}
W.ih.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b4]},
$aw:function(){return[W.b4]},
$id:1,
$ad:function(){return[W.b4]},
$ib:1,
$ab:function(){return[W.b4]},
$aC:function(){return[W.b4]}}
W.ii.prototype={
gm:function(a){return a.length}}
W.bE.prototype={}
W.iz.prototype={
i:function(a){return String(a)}}
W.iM.prototype={
gm:function(a){return a.length}}
W.b7.prototype={
giv:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.aw("deltaY is not supported"))},
giu:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.aw("deltaX is not supported"))},
$ib7:1}
W.cR.prototype={
hm:function(a,b){return a.requestAnimationFrame(H.c4(H.n(b,{func:1,ret:-1,args:[P.a8]}),1))},
f3:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cS.prototype={$icS:1}
W.iV.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.U]},
$aw:function(){return[W.U]},
$id:1,
$ad:function(){return[W.U]},
$ib:1,
$ab:function(){return[W.U]},
$aC:function(){return[W.U]}}
W.eg.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.X(b)
if(!u.$ian)return!1
return a.left===u.gby(b)&&a.top===u.gbD(b)&&a.width===u.gaD(b)&&a.height===u.gay(b)},
gG:function(a){return W.la(C.j.gG(a.left),C.j.gG(a.top),C.j.gG(a.width),C.j.gG(a.height))},
gay:function(a){return a.height},
gaD:function(a){return a.width}}
W.j8.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aP]},
$aw:function(){return[W.aP]},
$id:1,
$ad:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aC:function(){return[W.aP]}}
W.ez.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.E]},
$aw:function(){return[W.E]},
$id:1,
$ad:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aC:function(){return[W.E]}}
W.jl.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b1]},
$aw:function(){return[W.b1]},
$id:1,
$ad:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aC:function(){return[W.b1]}}
W.jm.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aG]},
$aw:function(){return[W.aG]},
$id:1,
$ad:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aC:function(){return[W.aG]}}
W.iT.prototype={
N:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.ga7(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.B)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga7:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.f])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.l(r,t)
s=H.j(r[t],"$icS")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aa9:function(){return[P.f,P.f]},
$aQ:function(){return[P.f,P.f]}}
W.iW.prototype={
j:function(a,b){return this.a.getAttribute(H.H(b))},
gm:function(a){return this.ga7(this).length}}
W.iX.prototype={}
W.k6.prototype={}
W.iY.prototype={}
W.iZ.prototype={
$1:function(a){return this.a.$1(H.j(a,"$io"))},
$S:28}
W.bF.prototype={
eB:function(a){var u
if($.eo.a===0){for(u=0;u<262;++u)$.eo.W(0,C.P[u],W.mY())
for(u=0;u<12;++u)$.eo.W(0,C.q[u],W.mZ())}},
aO:function(a){return $.lL().T(0,W.ck(a))},
ap:function(a,b,c){var u=$.eo.j(0,H.k(W.ck(a))+"::"+b)
if(u==null)u=$.eo.j(0,"*::"+b)
if(u==null)return!1
return H.kc(u.$4(a,b,c,this))},
$iau:1}
W.C.prototype={
gP:function(a){return new W.dn(a,this.gm(a),[H.d6(this,a,"C",0)])}}
W.dH.prototype={
aO:function(a){return C.a.dq(this.a,new W.hq(a))},
ap:function(a,b,c){return C.a.dq(this.a,new W.hp(a,b,c))},
$iau:1}
W.hq.prototype={
$1:function(a){return H.j(a,"$iau").aO(this.a)},
$S:18}
W.hp.prototype={
$1:function(a){return H.j(a,"$iau").ap(this.a,this.b,this.c)},
$S:18}
W.eH.prototype={
eL:function(a,b,c,d){var u,t,s
this.a.a6(0,c)
u=b.bF(0,new W.jj())
t=b.bF(0,new W.jk())
this.b.a6(0,u)
s=this.c
s.a6(0,C.R)
s.a6(0,t)},
aO:function(a){return this.a.T(0,W.ck(a))},
ap:function(a,b,c){var u=this,t=W.ck(a),s=u.c
if(s.T(0,H.k(t)+"::"+b))return u.d.ij(c)
else if(s.T(0,"*::"+b))return u.d.ij(c)
else{s=u.b
if(s.T(0,H.k(t)+"::"+b))return!0
else if(s.T(0,"*::"+b))return!0
else if(s.T(0,H.k(t)+"::*"))return!0
else if(s.T(0,"*::*"))return!0}return!1},
$iau:1}
W.jj.prototype={
$1:function(a){return!C.a.T(C.q,H.H(a))},
$S:19}
W.jk.prototype={
$1:function(a){return C.a.T(C.q,H.H(a))},
$S:19}
W.jo.prototype={
ap:function(a,b,c){if(this.eu(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.T(0,b)
return!1}}
W.jp.prototype={
$1:function(a){return"TEMPLATE::"+H.k(H.H(a))},
$S:39}
W.jn.prototype={
aO:function(a){var u=J.X(a)
if(!!u.$icy)return!1
u=!!u.$ip
if(u&&W.ck(a)==="foreignObject")return!1
if(u)return!0
return!1},
ap:function(a,b,c){if(b==="is"||C.i.bH(b,"on"))return!1
return this.aO(a)},
$iau:1}
W.dn.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sd4(J.lN(u.a,t))
u.c=t
return!0}u.sd4(null)
u.c=s
return!1},
gE:function(a){return this.d},
sd4:function(a){this.d=H.G(a,H.y(this,0))},
$iaQ:1}
W.au.prototype={}
W.jh.prototype={$inD:1}
W.eY.prototype={
cG:function(a){new W.jt(this).$2(a,null)},
aX:function(a,b){if(b==null)J.ks(a)
else b.removeChild(a)},
hq:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.lQ(a)
n=o.a.getAttribute("is")
H.j(a,"$iT")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.z(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ay(r)}t="element unprintable"
try{t=J.ar(a)}catch(r){H.ay(r)}try{s=W.ck(a)
this.hp(H.j(a,"$iT"),b,p,t,s,H.j(o,"$iQ"),H.H(n))}catch(r){if(H.ay(r) instanceof P.aE)throw r
else{this.aX(a,b)
window
q="Removing corrupted element "+H.k(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hp:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.aX(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aO(a)){o.aX(a,b)
window
u="Removing disallowed element <"+H.k(e)+"> from "+H.k(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.ap(a,"is",g)){o.aX(a,b)
window
u="Removing disallowed type extension <"+H.k(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga7(f)
t=H.c(u.slice(0),[H.y(u,0)])
for(s=f.ga7(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.l(t,s)
r=t[s]
q=o.a
p=J.lS(r)
H.H(r)
if(!q.ap(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.k(e)+" "+r+'="'+H.k(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.X(a).$icE)o.cG(a.content)},
$ino:1}
W.jt.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hq(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aX(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ay(s)
r=H.j(u,"$iE")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.j(t,"$iE")}},
$S:42}
W.ef.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.em.prototype={}
W.en.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.cY.prototype={}
W.cZ.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eN.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.d_.prototype={}
W.d0.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f6.prototype={}
W.f7.prototype={}
P.eX.prototype={$ibx:1,
gdz:function(a){return this.a}}
P.jA.prototype={
$2:function(a,b){this.a[a]=b},
$S:14}
P.fH.prototype={
gbQ:function(){var u=this.b,t=H.aj(u,"w",0),s=W.T
return new H.h4(new H.cQ(u,H.n(new P.fI(),{func:1,ret:P.O,args:[t]}),[t]),H.n(new P.fJ(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.bL(this.gbQ().a)},
j:function(a,b){var u=this.gbQ()
return u.b.$1(J.jN(u.a,b))},
gP:function(a){var u=P.kG(this.gbQ(),!1,W.T)
return new J.ak(u,u.length,[H.y(u,0)])},
$aw:function(){return[W.T]},
$ad:function(){return[W.T]},
$ab:function(){return[W.T]}}
P.fI.prototype={
$1:function(a){return!!J.X(H.j(a,"$iE")).$iT},
$S:16}
P.fJ.prototype={
$1:function(a){return H.h(H.j(a,"$iE"),"$iT")},
$S:29}
P.jc.prototype={
gbC:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.F(t)
return H.G(u+t,H.y(this,0))},
gds:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.F(t)
return H.G(u+t,H.y(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.k(u.a)+", "+H.k(u.b)+") "+H.k(u.c)+" x "+H.k(u.d)},
t:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.X(b)
if(!!u.$ian){t=p.a
if(t==u.gby(b)){s=p.b
if(s==u.gbD(b)){r=p.c
if(typeof t!=="number")return t.F()
if(typeof r!=="number")return H.F(r)
q=H.y(p,0)
if(H.G(t+r,q)===u.gbC(b)){t=p.d
if(typeof s!=="number")return s.F()
if(typeof t!=="number")return H.F(t)
u=H.G(s+t,q)===u.gds(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t=this,s=t.a,r=J.bJ(s),q=t.b,p=J.bJ(q),o=t.c
if(typeof s!=="number")return s.F()
if(typeof o!=="number")return H.F(o)
u=H.y(t,0)
o=C.h.gG(H.G(s+o,u))
s=t.d
if(typeof q!=="number")return q.F()
if(typeof s!=="number")return H.F(s)
u=C.h.gG(H.G(q+s,u))
return P.mz(P.ja(P.ja(P.ja(P.ja(0,r),p),o),u))}}
P.an.prototype={
gby:function(a){return this.a},
gbD:function(a){return this.b},
gaD:function(a){return this.c},
gay:function(a){return this.d}}
P.bb.prototype={$ibb:1}
P.fY.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bb]},
$id:1,
$ad:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$aC:function(){return[P.bb]}}
P.be.prototype={$ibe:1}
P.hs.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$aw:function(){return[P.be]},
$id:1,
$ad:function(){return[P.be]},
$ib:1,
$ab:function(){return[P.be]},
$aC:function(){return[P.be]}}
P.hz.prototype={
gm:function(a){return a.length}}
P.cy.prototype={$icy:1}
P.i1.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$aw:function(){return[P.f]},
$id:1,
$ad:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aC:function(){return[P.f]}}
P.p.prototype={
gdu:function(a){return new P.fH(a,new W.ai(a))},
ae:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.au])
C.a.h(p,W.l9(null))
C.a.h(p,W.lb())
C.a.h(p,new W.jn())
c=new W.eY(new W.dH(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).is(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ai(s)
q=p.gaF(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.bi.prototype={$ibi:1}
P.ij.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bi]},
$id:1,
$ad:function(){return[P.bi]},
$ib:1,
$ab:function(){return[P.bi]},
$aC:function(){return[P.bi]}}
P.er.prototype={}
P.es.prototype={}
P.eC.prototype={}
P.eD.prototype={}
P.eO.prototype={}
P.eP.prototype={}
P.eV.prototype={}
P.eW.prototype={}
P.fd.prototype={
gm:function(a){return a.length}}
P.fe.prototype={
j:function(a,b){return P.bj(a.get(H.H(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
ga7:function(a){var u=H.c([],[P.f])
this.N(a,new P.ff(u))
return u},
gm:function(a){return a.size},
$aa9:function(){return[P.f,null]},
$iQ:1,
$aQ:function(){return[P.f,null]}}
P.ff.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.fg.prototype={
gm:function(a){return a.length}}
P.bM.prototype={}
P.ht.prototype={
gm:function(a){return a.length}}
P.ee.prototype={}
P.dc.prototype={$idc:1}
P.dL.prototype={$idL:1}
P.bZ.prototype={
ea:function(a,b,c,d,e,f,g){var u,t=J.X(g)
if(!!t.$ibx)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.mR(g))
return}if(!!t.$ico)t=!0
else t=!1
if(t){this.hF(a,b,c,d,e,f,g)
return}throw H.i(P.lT("Incorrect number or type of arguments"))},
hF:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
H:function(a,b,c){return a.uniform1f(b,c)},
a_:function(a,b,c){return a.uniform1i(b,c)},
q:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ee:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ef:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibZ:1}
P.dN.prototype={$idN:1}
P.dU.prototype={$idU:1}
P.e3.prototype={$ie3:1}
P.hU.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return P.bj(a.item(b))},
D:function(a,b){return this.j(a,b)},
$aw:function(){return[[P.Q,,,]]},
$id:1,
$ad:function(){return[[P.Q,,,]]},
$ib:1,
$ab:function(){return[[P.Q,,,]]},
$aC:function(){return[[P.Q,,,]]}}
P.eK.prototype={}
P.eL.prototype={}
O.a1.prototype={
bb:function(a){var u=this
u.sfe(H.c([],[a]))
u.sda(null)
u.sd6(null)
u.sdc(null)},
cH:function(a,b,c){var u=this,t=H.aj(u,"a1",0)
H.n(b,{func:1,ret:P.O,args:[[P.d,t]]})
t={func:1,ret:-1,args:[P.D,[P.d,t]]}
H.n(a,t)
H.n(c,t)
u.sda(b)
u.sd6(a)
u.sdc(c)},
aR:function(a,b){return this.cH(a,null,b)},
d9:function(a){var u
H.m(a,"$id",[H.aj(this,"a1",0)],"$ad")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cN:function(a,b){var u
H.m(b,"$id",[H.aj(this,"a1",0)],"$ad")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gP:function(a){var u=this.a
return new J.ak(u,u.length,[H.y(u,0)])},
D:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.l(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aj(s,"a1",0)
H.G(b,r)
r=[r]
if(H.z(s.d9(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cN(t,H.c([b],r))}},
a6:function(a,b){var u,t,s=this
H.m(b,"$id",[H.aj(s,"a1",0)],"$ad")
if(H.z(s.d9(b))){u=s.a
t=u.length
C.a.a6(u,b)
s.cN(t,b)}},
sfe:function(a){this.a=H.m(a,"$ib",[H.aj(this,"a1",0)],"$ab")},
sda:function(a){this.b=H.n(a,{func:1,ret:P.O,args:[[P.d,H.aj(this,"a1",0)]]})},
sd6:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.D,[P.d,H.aj(this,"a1",0)]]})},
sdc:function(a){H.n(a,{func:1,ret:-1,args:[P.D,[P.d,H.aj(this,"a1",0)]]})},
$id:1}
O.cr.prototype={
gm:function(a){return this.a.length},
gp:function(){var u=this.b
return u==null?this.b=D.L():u},
aG:function(){var u=this.b
if(u!=null)u.A(null)},
gZ:function(a){var u=this.a
if(u.length>0)return C.a.gbx(u)
else return V.bV()},
bB:function(a){var u=this.a
if(a==null)C.a.h(u,V.bV())
else C.a.h(u,a)
this.aG()},
aA:function(){var u=this.a
if(u.length>0){u.pop()
this.aG()}},
sbS:function(a){this.a=H.m(a,"$ib",[V.al],"$ab")}}
E.fh.prototype={}
E.af.prototype={
sbG:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gp().U(0,s.ge3())
u=s.c
if(u!=null)u.gp().h(0,s.ge3())
t=new D.K("shape",r,s.c,[F.dO])
t.b=!0
s.bz(t)}},
al:function(a,b){var u
for(u=this.y.a,u=new J.ak(u,u.length,[H.y(u,0)]);u.u();)u.d.al(0,b)},
aa:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.gZ(s))
s.aG()
a.cA(t.f)
s=a.dy
u=(s&&C.a).gbx(s)
if(u!=null&&t.d!=null)u.e6(a,t)
for(s=t.y.a,s=new J.ak(s,s.length,[H.y(s,0)]);s.u();)s.d.aa(a)
a.cz()
a.dx.aA()},
gp:function(){var u=this.z
return u==null?this.z=D.L():u},
bz:function(a){var u=this.z
if(u!=null)u.A(a)},
a3:function(){return this.bz(null)},
e4:function(a){H.j(a,"$ix")
this.e=null
this.bz(a)},
iN:function(){return this.e4(null)},
e2:function(a){this.bz(H.j(a,"$ix"))},
iK:function(){return this.e2(null)},
iJ:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$id",[E.af],"$ad")
for(u=b.length,t=this.ge1(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bQ()
o.sac(null)
o.saM(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a3()},
iM:function(a,b){var u,t
H.m(b,"$id",[E.af],"$ad")
for(u=b.gP(b),t=this.ge1();u.u();)u.gE(u).gp().U(0,t)
this.a3()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seA:function(a,b){this.y=H.m(b,"$ia1",[E.af],"$aa1")},
$iaX:1}
E.hC.prototype={
ex:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.az(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cr()
t=[V.al]
u.sbS(H.c([],t))
u.b=null
u.gp().h(0,new E.hD(s))
s.cy=u
u=new O.cr()
u.sbS(H.c([],t))
u.b=null
u.gp().h(0,new E.hE(s))
s.db=u
u=new O.cr()
u.sbS(H.c([],t))
u.b=null
u.gp().h(0,new E.hF(s))
s.dx=u
s.shE(H.c([],[O.bD]))
u=s.dy;(u&&C.a).h(u,null)
s.shA(new H.aS([P.f,A.cz]))},
giV:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gZ(s)
u=t.db
u=t.z=s.w(0,u.gZ(u))
s=u}return s},
cA:function(a){var u=this.dy,t=a==null?(u&&C.a).gbx(u):a;(u&&C.a).h(u,t)},
cz:function(){var u=this.dy
if(u.length>1)u.pop()},
dn:function(a){var u=a.b
if(u.length===0)throw H.i(P.r("May not cache a shader with no name."))
if(this.fr.dw(0,u))throw H.i(P.r('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.W(0,u,a)},
shE:function(a){this.dy=H.m(a,"$ib",[O.bD],"$ab")},
shA:function(a){this.fr=H.m(a,"$iQ",[P.f,A.cz],"$aQ")}}
E.hD.prototype={
$1:function(a){var u
H.j(a,"$ix")
u=this.a
u.ch=u.z=null},
$S:7}
E.hE.prototype={
$1:function(a){var u
H.j(a,"$ix")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:7}
E.hF.prototype={
$1:function(a){var u
H.j(a,"$ix")
u=this.a
u.cx=u.ch=null},
$S:7}
E.e_.prototype={
cQ:function(a){H.j(a,"$ix")
this.e7()},
cP:function(){return this.cQ(null)},
giz:function(){var u,t=this,s=Date.now(),r=C.h.a2(P.ky(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.az(s,!1)
return u/r},
df:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.w()
if(typeof r!=="number")return H.F(r)
u=C.j.co(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.w()
t=C.j.co(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.l_(C.n,s.giY())}},
e7:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.ib(this),{func:1,ret:-1,args:[P.a8]})
C.A.f3(u)
C.A.hm(u,W.li(t,P.a8))}},
iX:function(){var u,t,s,r,q,p=this
try{++p.cy
p.ch=!1
p.df()
if(p.d!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.az(r,!1)
s.y=P.ky(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aG()
r=s.db
C.a.sm(r.a,0)
r.aG()
r=s.dx
C.a.sm(r.a,0)
r.aG()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
p.d.aa(p.e)}s=p.z
if(s!=null)s.A(null)}catch(q){u=H.ay(q)
t=H.c6(q)
P.ko("Error: "+H.k(u))
P.ko("Stack: "+H.k(t))
throw H.i(u)}}}
E.ib.prototype={
$1:function(a){var u
H.n8(a)
u=this.a
if(u.ch){u.ch=!1
u.iX()}},
$S:34}
Z.eb.prototype={$ini:1}
Z.dd.prototype={
a1:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ay(s)
t=P.r('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.k(u))
throw H.i(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.k(u.e)+"]"}}
Z.ec.prototype={$inj:1}
Z.cd.prototype={
ax:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a1:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a1(a)},
b7:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aa:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.l(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.f],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.ar(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(p,", ")+"\nAttrs:   "+C.a.l(r,", ")},
sfa:function(a){this.b=H.m(a,"$ib",[Z.by],"$ab")},
$inq:1}
Z.by.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bX(this.c)+"'")+"]"}}
Z.b6.prototype={
gcI:function(a){var u=this.a,t=(u&$.aK().a)!==0?3:0
if((u&$.bm().a)!==0)t+=3
if((u&$.bl().a)!==0)t+=3
if((u&$.bn().a)!==0)t+=2
if((u&$.bo().a)!==0)t+=3
if((u&$.d7().a)!==0)t+=3
if((u&$.d8().a)!==0)t+=4
if((u&$.c9().a)!==0)++t
return(u&$.bk().a)!==0?t+4:t},
il:function(a){var u,t=$.aK(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bo()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d7()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d8()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c9()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0)if(u===a)return t
return $.lK()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b6))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.f]),t=this.a
if((t&$.aK().a)!==0)C.a.h(u,"Pos")
if((t&$.bm().a)!==0)C.a.h(u,"Norm")
if((t&$.bl().a)!==0)C.a.h(u,"Binm")
if((t&$.bn().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bo().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d7().a)!==0)C.a.h(u,"Clr3")
if((t&$.d8().a)!==0)C.a.h(u,"Clr4")
if((t&$.c9().a)!==0)C.a.h(u,"Weight")
if((t&$.bk().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.fk.prototype={}
D.bQ.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.x]}
H.n(b,u)
if(this.a==null)this.sac(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
U:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.x]})
u=s.a
u=u==null?null:C.a.T(u,b)
if(u===!0){u=s.a
t=(u&&C.a).U(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.T(u,b)
if(u===!0){u=s.b
t=(u&&C.a).U(u,b)||t}return t},
A:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.x()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.N(P.kG(u,!0,{func:1,ret:-1,args:[D.x]}),new D.fD(q))
u=r.b
if(u!=null){r.saM(H.c([],[{func:1,ret:-1,args:[D.x]}]))
C.a.N(u,new D.fE(q))}return!0},
dC:function(){return this.A(null)},
aC:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.A(u)}}},
sac:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")},
saM:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")}}
D.fD.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:20}
D.fE.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:20}
D.x.prototype={}
D.bz.prototype={}
D.bA.prototype={}
D.K.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}
X.de.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.de))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.du.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.du))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.fX.prototype={
iS:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
iO:function(a){this.c=a.b
this.d.U(0,a.a)
return!1},
shi:function(a){this.d=H.m(a,"$ikW",[P.D],"$akW")}}
X.dz.prototype={}
X.h1.prototype={
aV:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.w()
u=b.b
t=q.ch
if(typeof u!=="number")return u.w()
s=new V.a5(o.a+n*m,o.b+u*t)
t=q.a.gaP()
r=new X.bd(a,V.bf(),q.x,t,s)
r.b=!0
q.z=new P.az(p,!1)
q.x=s
return r},
cw:function(a,b){this.r=a.a
return!1},
b1:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.ek()
if(typeof u!=="number")return u.eg()
this.r=(u&~t)>>>0
return!1},
b0:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.aV(a,b))
return!0},
iT:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaP()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.w()
q=a.b
p=o.cy
if(typeof q!=="number")return q.w()
t=new X.cs(new V.V(s*r,q*p),u,t)
t.b=!0
n.A(t)
return!0},
fR:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dz(c,r.a.gaP(),b)
s.b=!0
t.A(s)
r.y=new P.az(u,!1)
r.x=V.bf()}}
X.at.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.at))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.z(this.b)?"Alt+":""
return u+(H.z(this.c)?"Shift+":"")}}
X.bd.prototype={}
X.hi.prototype={
bO:function(a,b,c){var u=this,t=new P.az(Date.now(),!1),s=u.a.gaP(),r=new X.bd(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cw:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.A(this.bO(a,b,!0))
return!0},
b1:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.ek()
if(typeof t!=="number")return t.eg()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.A(u.bO(a,b,!0))
return!0},
b0:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.bO(a,b,!1))
return!0},
iU:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaP()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.w()
r=a.b
q=p.ch
if(typeof r!=="number")return r.w()
u=new X.cs(new V.V(t*s,r*q),u,b)
u.b=!0
o.A(u)
return!0},
gdB:function(){var u=this.b
return u==null?this.b=D.L():u},
gbE:function(){var u=this.c
return u==null?this.c=D.L():u},
ge0:function(){var u=this.d
return u==null?this.d=D.L():u}}
X.cs.prototype={}
X.hy.prototype={}
X.e1.prototype={}
X.ig.prototype={
aV:function(a,b){var u,t,s,r,q=this
H.m(a,"$ib",[V.a5],"$ab")
u=new P.az(Date.now(),!1)
t=a.length>0?a[0]:V.bf()
s=q.a.gaP()
r=new X.e1(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
iR:function(a){var u
H.m(a,"$ib",[V.a5],"$ab")
u=this.b
if(u==null)return!1
u.A(this.aV(a,!0))
return!0},
iP:function(a){var u
H.m(a,"$ib",[V.a5],"$ab")
u=this.c
if(u==null)return!1
u.A(this.aV(a,!0))
return!0},
iQ:function(a){var u
H.m(a,"$ib",[V.a5],"$ab")
u=this.d
if(u==null)return!1
u.A(this.aV(a,!1))
return!0}}
X.e6.prototype={
gaP:function(){var u=this.a,t=C.l.gdv(u).c
t.toString
u=C.l.gdv(u).d
u.toString
return V.kU(0,0,t,u)},
d0:function(a){var u=a.keyCode,t=H.z(a.ctrlKey)||H.z(a.metaKey)
return new X.du(u,new X.at(t,a.altKey,a.shiftKey))},
aN:function(a){var u=this.b,t=H.z(a.ctrlKey)||H.z(a.metaKey)
u.c=new X.at(t,a.altKey,a.shiftKey)},
c5:function(a){var u=this.b,t=H.z(a.ctrlKey)||H.z(a.metaKey)
u.c=new X.at(t,a.altKey,a.shiftKey)},
au:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.I()
u=t.top
if(typeof r!=="number")return r.I()
return new V.a5(s-q,r-u)},
aW:function(a){return new V.V(a.movementX,a.movementY)},
c2:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a5])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
q=C.j.ak(r.pageX)
C.j.ak(r.pageY)
p=o.left
C.j.ak(r.pageX)
C.a.h(n,new V.a5(q-p,C.j.ak(r.pageY)-o.top))}return n},
as:function(a){var u=a.buttons,t=H.z(a.ctrlKey)||H.z(a.metaKey)
return new X.de(u,new X.at(t,a.altKey,a.shiftKey))},
bT:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.I()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.I()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fL:function(a){this.f=!0},
fv:function(a){this.f=!1},
fF:function(a){H.j(a,"$iaa")
if(H.z(this.f)&&this.bT(a))a.preventDefault()},
fP:function(a){var u
H.j(a,"$iaT")
if(!H.z(this.f))return
u=this.d0(a)
this.b.iS(u)},
fN:function(a){var u
H.j(a,"$iaT")
if(!H.z(this.f))return
u=this.d0(a)
this.b.iO(u)},
fT:function(a){var u,t,s,r,q=this
H.j(a,"$iaa")
u=q.a
u.focus()
q.f=!0
q.aN(a)
if(H.z(q.x)){t=q.as(a)
s=q.aW(a)
if(q.d.cw(t,s))a.preventDefault()
return}if(H.z(q.r)){q.y=a
u.requestPointerLock()
return}t=q.as(a)
r=q.au(a)
if(q.c.cw(t,r))a.preventDefault()},
fX:function(a){var u,t,s,r=this
H.j(a,"$iaa")
r.aN(a)
u=r.as(a)
if(H.z(r.x)){t=r.aW(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.au(a)
if(r.c.b1(u,s))a.preventDefault()},
fJ:function(a){var u,t,s,r=this
H.j(a,"$iaa")
if(!r.bT(a)){r.aN(a)
u=r.as(a)
if(H.z(r.x)){t=r.aW(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.au(a)
if(r.c.b1(u,s))a.preventDefault()}},
fV:function(a){var u,t,s,r=this
H.j(a,"$iaa")
r.aN(a)
u=r.as(a)
if(H.z(r.x)){t=r.aW(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.au(a)
if(r.c.b0(u,s))a.preventDefault()},
fH:function(a){var u,t,s,r=this
H.j(a,"$iaa")
if(!r.bT(a)){r.aN(a)
u=r.as(a)
if(H.z(r.x)){t=r.aW(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.au(a)
if(r.c.b0(u,s))a.preventDefault()}},
fZ:function(a){var u,t,s=this
H.j(a,"$ib7")
s.aN(a)
u=new V.V((a&&C.z).giu(a),C.z.giv(a)).v(0,180)
if(H.z(s.x)){if(s.d.iT(u))a.preventDefault()
return}if(H.z(s.r))return
t=s.au(a)
if(s.c.iU(u,t))a.preventDefault()},
h0:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.as(s.y)
t=s.au(s.y)
s.d.fR(u,t,r)}},
hg:function(a){var u,t=this
H.j(a,"$iaI")
t.a.focus()
t.f=!0
t.c5(a)
u=t.c2(a)
if(t.e.iR(u))a.preventDefault()},
hc:function(a){var u
H.j(a,"$iaI")
this.c5(a)
u=this.c2(a)
if(this.e.iP(u))a.preventDefault()},
he:function(a){var u
H.j(a,"$iaI")
this.c5(a)
u=this.c2(a)
if(this.e.iQ(u))a.preventDefault()},
sf4:function(a){this.z=H.m(a,"$ib",[[P.cC,P.S]],"$ab")}}
D.bt.prototype={
gp:function(){var u=this.d
return u==null?this.d=D.L():u},
ar:function(a){var u
H.j(a,"$ix")
u=this.d
if(u!=null)u.A(a)},
eE:function(){return this.ar(null)},
$ia2:1,
$iaX:1}
D.a2.prototype={$iaX:1}
D.dv.prototype={
gp:function(){var u=this.Q
return u==null?this.Q=D.L():u},
ar:function(a){var u=this.Q
if(u!=null)u.A(a)},
d8:function(a){var u
H.j(a,"$ix")
u=this.ch
if(u!=null)u.A(a)},
fQ:function(){return this.d8(null)},
h2:function(a){var u,t,s
H.m(a,"$id",[D.a2],"$ad")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.B)(a),++t){s=a[t]
if(s==null||this.eC(s))return!1}return!0},
fo:function(a,b){var u,t,s,r,q,p,o,n=D.a2
H.m(b,"$id",[n],"$ad")
for(u=b.length,t=this.gd7(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=H.j(b[q],"$ia2")
if(p instanceof D.bt)C.a.h(this.e,p)
o=p.d
if(o==null){o=new D.bQ()
o.sac(null)
o.saM(null)
o.c=null
o.d=0
p.d=o}H.n(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bz([n])
n.b=!0
this.ar(n)},
h6:function(a,b){var u,t,s,r=D.a2
H.m(b,"$id",[r],"$ad")
for(u=b.gP(b),t=this.gd7();u.u();){s=u.gE(u)
C.a.U(this.e,s)
s.gp().U(0,t)}r=new D.bA([r])
r.b=!0
this.ar(r)},
eC:function(a){var u=C.a.T(this.e,a)
return u},
sf2:function(a){this.e=H.m(a,"$ib",[D.bt],"$ab")},
shh:function(a){this.f=H.m(a,"$ib",[D.dK],"$ab")},
shC:function(a){this.r=H.m(a,"$ib",[D.dR],"$ab")},
shO:function(a){this.x=H.m(a,"$ib",[D.dX],"$ab")},
shP:function(a){this.y=H.m(a,"$ib",[D.dY],"$ab")},
shQ:function(a){this.z=H.m(a,"$ib",[D.dZ],"$ab")},
$ad:function(){return[D.a2]},
$aa1:function(){return[D.a2]}}
D.dK.prototype={$ia2:1,$iaX:1}
D.dR.prototype={$ia2:1,$iaX:1}
D.dX.prototype={$ia2:1,$iaX:1}
D.dY.prototype={$ia2:1,$iaX:1}
D.dZ.prototype={$ia2:1,$iaX:1}
V.a3.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
V.aF.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aF))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.W(u.a,3,0)+", "+V.W(u.b,3,0)+", "+V.W(u.c,3,0)+", "+V.W(u.d,3,0)+"]"}}
V.fC.prototype={}
V.dD.prototype={
ab:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.A])
return t},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dD))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.A],o=V.c5(H.c([q.a,q.d,q.r],p),3,0),n=V.c5(H.c([q.b,q.e,q.x],p),3,0),m=V.c5(H.c([q.c,q.f,q.y],p),3,0)
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
V.al.prototype={
ab:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.A])
return t},
cq:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.P().a)return V.bV()
u=1/b1
t=-n
s=-a0
return V.aV((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
w:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aV(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
cD:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.R(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
b6:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.ag(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.al))return!1
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
i:function(a){return this.K()},
B:function(a){var u,t,s,r,q,p=this,o=[P.A],n=V.c5(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.c5(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.c5(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.c5(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
K:function(){return this.B("")}}
V.a5.prototype={
I:function(a,b){return new V.a5(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+"]"}}
V.ag.prototype={
I:function(a,b){return new V.ag(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ag))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
V.bg.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bg))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.W(u.a,3,0)+", "+V.W(u.b,3,0)+", "+V.W(u.c,3,0)+", "+V.W(u.d,3,0)+"]"}}
V.dM.prototype={
ga9:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dM))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.W(u.a,3,0)+", "+V.W(u.b,3,0)+", "+V.W(u.c,3,0)+", "+V.W(u.d,3,0)+"]"}}
V.V.prototype={
cr:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.F(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.F(t)
return s*r+u*t},
w:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.w()
u=this.b
if(typeof u!=="number")return u.w()
return new V.V(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.P().a){u=$.l3
return u==null?$.l3=new V.V(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.V(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=this.a
s=$.P()
s.toString
if(typeof u!=="number")return u.I()
if(typeof t!=="number")return H.F(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.I()
if(typeof t!=="number")return H.F(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+"]"}}
V.R.prototype={
cr:function(a){return Math.sqrt(this.C(this))},
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cs:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.R(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
b_:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.R(u*t-s*r,s*q-p*t,p*r-u*q)},
F:function(a,b){return new V.R(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.R(-this.a,-this.b,-this.c)},
v:function(a,b){if(Math.abs(b-0)<$.P().a)return V.ea()
return new V.R(this.a/b,this.b/b,this.c/b)},
dZ:function(){var u=$.P().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
U.fl.prototype={
bJ:function(a){var u=V.nh(a,this.c,this.b)
return u},
gp:function(){var u=this.y
return u==null?this.y=D.L():u},
M:function(a){var u=this.y
if(u!=null)u.A(a)},
scE:function(a,b){},
sct:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.P().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bJ(u)}s=new D.K("maximumLocation",s,t.b,[P.A])
s.b=!0
t.M(s)}},
scv:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.P().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bJ(u)}s=new D.K("minimumLocation",s,t.c,[P.A])
s.b=!0
t.M(s)}},
sa8:function(a,b){var u,t=this
b=t.bJ(b)
u=t.d
if(!(Math.abs(u-b)<$.P().a)){t.d=b
u=new D.K("location",u,b,[P.A])
u.b=!0
t.M(u)}},
scu:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.P().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.K("maximumVelocity",r,a,[P.A])
r.b=!0
s.M(r)}},
sR:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.P().a)){u.f=a
t=new D.K("velocity",t,a,[P.A])
t.b=!0
u.M(t)}},
scf:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.P().a)){this.x=a
u=new D.K("dampening",u,a,[P.A])
u.b=!0
this.M(u)}},
al:function(a,b){var u,t,s,r=this,q=r.f,p=$.P().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa8(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.P().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.dg.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.L():u},
aQ:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dg))return!1
return J.a7(this.a,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")}}
U.cn.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.L():u},
M:function(a){var u
H.j(a,"$ix")
u=this.e
if(u!=null)u.A(a)},
a4:function(){return this.M(null)},
fm:function(a,b){var u,t,s,r,q,p,o,n=U.ab
H.m(b,"$id",[n],"$ad")
for(u=b.length,t=this.gaH(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.gp()
o.toString
H.n(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bz([n])
n.b=!0
this.M(n)},
h4:function(a,b){var u,t,s=U.ab
H.m(b,"$id",[s],"$ad")
for(u=b.gP(b),t=this.gaH();u.u();)u.gE(u).gp().U(0,t)
s=new D.bA([s])
s.b=!0
this.M(s)},
aQ:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.aE()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ak(r,r.length,[H.y(r,0)]),u=null;r.u();){q=r.d
if(q!=null){t=q.aQ(0,b,c)
if(t!=null)u=u==null?t:t.w(0,u)}}s.f=u==null?V.bV():u
r=s.e
if(r!=null)r.aC(0)}return s.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cn))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.l(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.l(r,t)
if(!J.a7(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ad:function(){return[U.ab]},
$aa1:function(){return[U.ab]},
$iab:1}
U.ab.prototype={}
U.e7.prototype={
gp:function(){var u=this.cy
return u==null?this.cy=D.L():u},
M:function(a){var u
H.j(a,"$ix")
u=this.cy
if(u!=null)u.A(a)},
a4:function(){return this.M(null)},
aY:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdB().h(0,u.gbU())
u.a.c.ge0().h(0,u.gbW())
u.a.c.gbE().h(0,u.gbY())
return!0},
bV:function(a){var u=this
H.j(a,"$ix")
if(!J.a7(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bX:function(a){var u,t,s,r,q,p,o,n=this
a=H.h(H.j(a,"$ix"),"$ibd")
if(!H.z(n.y))return
if(H.z(n.x)){u=a.d.I(0,a.y)
u=new V.V(u.a,u.b)
u=u.C(u)
t=n.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.x=!1}if(H.z(n.d)){u=a.c
t=a.d.I(0,a.y)
u=new V.V(t.a,t.b).w(0,2).v(0,u.ga9())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.w()
s=n.e
if(typeof s!=="number")return H.F(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.I(0,a.y)
r=new V.V(s.a,s.b).w(0,2).v(0,u.ga9())
s=n.b
q=r.a
if(typeof q!=="number")return q.O()
p=n.e
if(typeof p!=="number")return H.F(p)
o=n.z
if(typeof o!=="number")return H.F(o)
s.sa8(0,-q*p+o)
n.b.sR(0)
t=t.I(0,a.z)
n.Q=new V.V(t.a,t.b).w(0,2).v(0,u.ga9())}n.a4()},
bZ:function(a){var u,t,s,r=this
H.j(a,"$ix")
if(!H.z(r.y))return
r.y=!1
if(H.z(r.x))return
u=r.Q
if(u.C(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.w()
s=r.e
if(typeof s!=="number")return H.F(s)
u.sR(t*10*s)
r.a4()}},
aQ:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.aE()
if(q<p){r.ch=p
u=b.y
r.b.al(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aV(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iab:1}
U.e8.prototype={
gp:function(){var u=this.fx
return u==null?this.fx=D.L():u},
M:function(a){var u
H.j(a,"$ix")
u=this.fx
if(u!=null)u.A(a)},
a4:function(){return this.M(null)},
aY:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdB().h(0,s.gbU())
s.a.c.ge0().h(0,s.gbW())
s.a.c.gbE().h(0,s.gbY())
u=s.a.d
t=u.f
u=t==null?u.f=D.L():t
u.h(0,s.gff())
u=s.a.d
t=u.d
u=t==null?u.d=D.L():t
u.h(0,s.gfh())
u=s.a.e
t=u.b
u=t==null?u.b=D.L():t
u.h(0,s.ghL())
u=s.a.e
t=u.d
u=t==null?u.d=D.L():t
u.h(0,s.ghJ())
u=s.a.e
t=u.c
u=t==null?u.c=D.L():t
u.h(0,s.ghH())
return!0},
am:function(a){var u=a.a,t=a.b
if(H.z(this.f)){if(typeof u!=="number")return u.O()
u=-u}if(H.z(this.r)){if(typeof t!=="number")return t.O()
t=-t}return new V.V(u,t)},
bV:function(a){var u=this
a=H.h(H.j(a,"$ix"),"$ibd")
if(!J.a7(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bX:function(a){var u,t,s,r,q,p,o,n=this
a=H.h(H.j(a,"$ix"),"$ibd")
if(!H.z(n.cx))return
if(H.z(n.ch)){u=a.d.I(0,a.y)
u=new V.V(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.z(n.e)){u=a.c
t=a.d.I(0,a.y)
u=n.am(new V.V(t.a,t.b).w(0,2).v(0,u.ga9()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.I(0,a.y)
r=n.am(new V.V(s.a,s.b).w(0,2).v(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa8(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa8(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.I(0,a.z)
n.dx=n.am(new V.V(t.a,t.b).w(0,2).v(0,u.ga9()))}n.a4()},
bZ:function(a){var u,t,s,r=this
H.j(a,"$ix")
if(!H.z(r.cx))return
r.cx=!1
if(H.z(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sR(-t*10*u)
r.a4()}},
fg:function(a){var u=this
if(H.h(H.j(a,"$ix"),"$idz").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fi:function(a){var u,t,s,r,q,p,o,n=this
a=H.h(H.j(a,"$ix"),"$ibd")
if(!J.a7(n.d,a.x.b))return
u=a.c
t=a.d
s=t.I(0,a.y)
r=n.am(new V.V(s.a,s.b).w(0,2).v(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa8(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa8(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.I(0,a.z)
n.dx=n.am(new V.V(t.a,t.b).w(0,2).v(0,u.ga9()))
n.a4()},
hM:function(a){var u=this
H.j(a,"$ix")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hK:function(a){var u,t,s,r,q,p,o,n=this
a=H.h(H.j(a,"$ix"),"$ie1")
if(!H.z(n.cx))return
if(H.z(n.ch)){u=a.d.I(0,a.y)
u=new V.V(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.z(n.e)){u=a.c
t=a.d.I(0,a.y)
u=n.am(new V.V(t.a,t.b).w(0,2).v(0,u.ga9()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.I(0,a.y)
r=n.am(new V.V(s.a,s.b).w(0,2).v(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa8(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa8(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.I(0,a.z)
n.dx=n.am(new V.V(t.a,t.b).w(0,2).v(0,u.ga9()))}n.a4()},
hI:function(a){var u,t,s,r=this
H.j(a,"$ix")
if(!H.z(r.cx))return
r.cx=!1
if(H.z(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sR(-t*10*u)
r.a4()}},
aQ:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.aE()
if(q<p){r.dy=p
u=b.y
r.c.al(0,u)
r.b.al(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aV(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.w(0,V.aV(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iab:1}
U.e9.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.L():u},
M:function(a){var u=this.r
if(u!=null)u.A(a)},
aY:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.L():t
t=r.gfj()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.L():s).h(0,t)
return!0},
fk:function(a){var u,t,s,r,q=this
H.j(a,"$ix")
if(!J.a7(q.b,q.a.b.c))return
H.h(a,"$ics")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.w()
r=u+t*s
if(u!==r){q.d=r
u=new D.K("zoom",u,r,[P.A])
u.b=!0
q.M(u)}},
aQ:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.aV(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iab:1}
M.df.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.L():u},
Y:function(a){var u
H.j(a,"$ix")
u=this.f
if(u!=null)u.A(a)},
aS:function(){return this.Y(null)},
h8:function(a,b){var u,t,s,r,q,p,o,n=M.av
H.m(b,"$id",[n],"$ad")
for(u=b.length,t=this.gX(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.gp()
o.toString
H.n(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bz([n])
n.b=!0
this.Y(n)},
ha:function(a,b){var u,t,s=M.av
H.m(b,"$id",[s],"$ad")
for(u=b.gP(b),t=this.gX();u.u();)u.gE(u).gp().U(0,t)
s=new D.bA([s])
s.b=!0
this.Y(s)},
aa:function(a){var u,t,s=this
if(s.e)return
s.e=!0
for(u=s.a,u=new J.ak(u,u.length,[H.y(u,0)]);u.u();){t=u.d
if(t!=null)t.aa(a)}s.e=!1},
$ad:function(){return[M.av]},
$aa1:function(){return[M.av]},
$iav:1}
M.dh.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.L():u},
Y:function(a){var u
H.j(a,"$ix")
u=this.f
if(u!=null)u.A(a)},
aS:function(){return this.Y(null)},
saZ:function(a){var u,t,s=this
if(a==null)a=new X.fS()
u=s.a
if(u!==a){if(u!=null)u.gp().U(0,s.gX())
t=s.a
s.a=a
a.gp().h(0,s.gX())
u=new D.K("camera",t,s.a,[X.bN])
u.b=!0
s.Y(u)}},
sb3:function(a,b){var u,t,s=this
if(b==null)b=X.jU(null)
u=s.b
if(u!==b){if(u!=null)u.gp().U(0,s.gX())
t=s.b
s.b=b
b.gp().h(0,s.gX())
u=new D.K("target",t,s.b,[X.cD])
u.b=!0
s.Y(u)}},
sb4:function(a){var u,t=this,s=t.c
if(s!=a){if(s!=null)s.gp().U(0,t.gX())
u=t.c
t.c=a
if(a!=null)a.gp().h(0,t.gX())
s=new D.K("technique",u,t.c,[O.bD])
s.b=!0
t.Y(s)}},
aa:function(a){var u=this
a.cA(u.c)
u.b.a1(a)
u.a.a1(a)
u.d.al(0,a)
u.d.aa(a)
u.a.b7(a)
u.b.toString
a.cz()},
$iav:1}
M.dl.prototype={
Y:function(a){var u
H.j(a,"$ix")
u=this.x
if(u!=null)u.A(a)},
aS:function(){return this.Y(null)},
fB:function(a,b){var u,t,s,r,q,p,o,n=E.af
H.m(b,"$id",[n],"$ad")
for(u=b.length,t=this.gX(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bQ()
o.sac(null)
o.saM(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bz([n])
n.b=!0
this.Y(n)},
fD:function(a,b){var u,t,s=E.af
H.m(b,"$id",[s],"$ad")
for(u=b.gP(b),t=this.gX();u.u();)u.gE(u).gp().U(0,t)
s=new D.bA([s])
s.b=!0
this.Y(s)},
saZ:function(a){var u,t,s=this
if(a==null)a=X.kM(null)
u=s.a
if(u!==a){if(u!=null)u.gp().U(0,s.gX())
t=s.a
s.a=a
a.gp().h(0,s.gX())
u=new D.K("camera",t,s.a,[X.bN])
u.b=!0
s.Y(u)}},
sb3:function(a,b){var u,t=this,s=t.b
if(s!==b){if(s!=null)s.gp().U(0,t.gX())
u=t.b
t.b=b
b.gp().h(0,t.gX())
s=new D.K("target",u,t.b,[X.cD])
s.b=!0
t.Y(s)}},
sb4:function(a){var u,t=this,s=t.c
if(s!=a){if(s!=null)s.gp().U(0,t.gX())
u=t.c
t.c=a
if(a!=null)a.gp().h(0,t.gX())
s=new D.K("technique",u,t.c,[O.bD])
s.b=!0
t.Y(s)}},
gp:function(){var u=this.x
return u==null?this.x=D.L():u},
aa:function(a){var u,t=this
a.cA(t.c)
t.b.a1(a)
t.a.a1(a)
u=t.c
if(u!=null)u.al(0,a)
for(u=t.d.a,u=new J.ak(u,u.length,[H.y(u,0)]);u.u();)u.d.al(0,a)
for(u=t.d.a,u=new J.ak(u,u.length,[H.y(u,0)]);u.u();)u.d.aa(a)
t.a.toString
a.cy.aA()
a.db.aA()
t.b.toString
a.cz()},
seX:function(a,b){this.d=H.m(b,"$ia1",[E.af],"$aa1")},
$iav:1}
M.av.prototype={}
A.da.prototype={}
A.fc.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iw:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dA:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.dC.prototype={
ew:function(d1,d2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="Required uniform value, ",a8=", was not defined or used in shader.",a9="emissionTxt",b0="nullEmissionTxt",b1="ambientTxt",b2="nullAmbientTxt",b3="diffuseTxt",b4="nullDiffuseTxt",b5="invDiffuseTxt",b6="nullInvDiffuseTxt",b7="specularTxt",b8="nullSpecularTxt",b9="nullBumpTxt",c0="reflectTxt",c1="nullReflectTxt",c2="refractTxt",c3="nullRefractTxt",c4="alphaTxt",c5="nullAlphaTxt",c6="uniform mat4 objMat;\n",c7="   if(nullAlphaTxt > 0) return alpha;\n",c8="   if (a <= 0.000001) discard;\n",c9="precision mediump float;\n\n",d0="precision mediump float;\n\nvarying vec3 normalVec;\n"
a6.z=d1
u=new P.bh("")
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
u=new P.bh("")
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
k=H.c([],[P.f])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.l(k," + ")+");\n"
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
j=H.c([],[P.f])
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
i="vec4("+C.a.l(j," + ")+", alpha);"
q=u.a
q=u.a=(n?u.a=q+("   gl_FragColor = colorMat*"+i+"\n"):u.a=q+("   gl_FragColor = "+i+"\n"))+"}\n"
a6.dY(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
a6.Q=a6.x.j(0,"posAttr")
a6.cx=a6.x.j(0,"normAttr")
a6.ch=a6.x.j(0,"binmAttr")
a6.cy=a6.x.j(0,"txt2DAttr")
a6.db=a6.x.j(0,"txtCubeAttr")
a6.dx=a6.x.j(0,"bendAttr")
if(d1.fr)a6.id=H.h(a6.y.n(0,"invViewMat"),"$iap")
if(t)a6.dy=H.h(a6.y.n(0,"objMat"),"$iap")
if(r)a6.fr=H.h(a6.y.n(0,"viewObjMat"),"$iap")
a6.fy=H.h(a6.y.n(0,"projViewObjMat"),"$iap")
if(d1.x2)a6.k1=H.h(a6.y.n(0,"txt2DMat"),"$icJ")
if(d1.y1)a6.k2=H.h(a6.y.n(0,"txtCubeMat"),"$iap")
if(d1.y2)a6.k3=H.h(a6.y.n(0,"colorMat"),"$iap")
a6.seT(H.c([],[A.ap]))
t=d1.aq
if(t>0){a6.k4=H.j(a6.y.n(0,"bendMatCount"),"$iM")
for(h=0;h<t;++h){s=a6.r1
r=a6.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.v(P.r(a7+q+a8));(s&&C.a).h(s,H.h(g,"$iap"))}}t=d1.a
if(t!==C.c){a6.r2=H.h(a6.y.n(0,"emissionClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.d:a6.rx=H.h(a6.y.n(0,a9),"$iah")
a6.x1=H.h(a6.y.n(0,b0),"$iM")
break
case C.e:a6.ry=H.h(a6.y.n(0,a9),"$iac")
a6.x1=H.h(a6.y.n(0,b0),"$iM")
break}}t=d1.b
if(t!==C.c){a6.x2=H.h(a6.y.n(0,"ambientClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.d:a6.y1=H.h(a6.y.n(0,b1),"$iah")
a6.aq=H.h(a6.y.n(0,b2),"$iM")
break
case C.e:a6.y2=H.h(a6.y.n(0,b1),"$iac")
a6.aq=H.h(a6.y.n(0,b2),"$iM")
break}}t=d1.c
if(t!==C.c){a6.aj=H.h(a6.y.n(0,"diffuseClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.d:a6.bi=H.h(a6.y.n(0,b3),"$iah")
a6.bj=H.h(a6.y.n(0,b4),"$iM")
break
case C.e:a6.dD=H.h(a6.y.n(0,b3),"$iac")
a6.bj=H.h(a6.y.n(0,b4),"$iM")
break}}t=d1.d
if(t!==C.c){a6.bk=H.h(a6.y.n(0,"invDiffuseClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.d:a6.dE=H.h(a6.y.n(0,b5),"$iah")
a6.bl=H.h(a6.y.n(0,b6),"$iM")
break
case C.e:a6.dF=H.h(a6.y.n(0,b5),"$iac")
a6.bl=H.h(a6.y.n(0,b6),"$iM")
break}}t=d1.e
if(t!==C.c){a6.bo=H.h(a6.y.n(0,"shininess"),"$ia_")
a6.bm=H.h(a6.y.n(0,"specularClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.d:a6.dG=H.h(a6.y.n(0,b7),"$iah")
a6.bn=H.h(a6.y.n(0,b8),"$iM")
break
case C.e:a6.dH=H.h(a6.y.n(0,b7),"$iac")
a6.bn=H.h(a6.y.n(0,b8),"$iM")
break}}switch(d1.f){case C.c:break
case C.f:break
case C.d:a6.dI=H.h(a6.y.n(0,"bumpTxt"),"$iah")
a6.bp=H.h(a6.y.n(0,b9),"$iM")
break
case C.e:a6.dJ=H.h(a6.y.n(0,"bumpTxt"),"$iac")
a6.bp=H.h(a6.y.n(0,b9),"$iM")
break}if(d1.dy){a6.dK=H.h(a6.y.n(0,"envSampler"),"$iac")
a6.dL=H.h(a6.y.n(0,"nullEnvTxt"),"$iM")
t=d1.r
if(t!==C.c){a6.bq=H.h(a6.y.n(0,"reflectClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.d:a6.dM=H.h(a6.y.n(0,c0),"$iah")
a6.br=H.h(a6.y.n(0,c1),"$iM")
break
case C.e:a6.dN=H.h(a6.y.n(0,c0),"$iac")
a6.br=H.h(a6.y.n(0,c1),"$iM")
break}}t=d1.x
if(t!==C.c){a6.bs=H.h(a6.y.n(0,"refraction"),"$ia_")
a6.bt=H.h(a6.y.n(0,"refractClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.d:a6.dO=H.h(a6.y.n(0,c2),"$iah")
a6.bu=H.h(a6.y.n(0,c3),"$iM")
break
case C.e:a6.dP=H.h(a6.y.n(0,c2),"$iac")
a6.bu=H.h(a6.y.n(0,c3),"$iM")
break}}}t=d1.y
if(t!==C.c){a6.bv=H.h(a6.y.n(0,"alpha"),"$ia_")
switch(t){case C.c:break
case C.f:break
case C.d:a6.dQ=H.h(a6.y.n(0,c4),"$iah")
a6.bw=H.h(a6.y.n(0,c5),"$iM")
break
case C.e:a6.dR=H.h(a6.y.n(0,c4),"$iac")
a6.bw=H.h(a6.y.n(0,c5),"$iM")
break}}a6.seF(H.c([],[A.cI]))
a6.seG(H.c([],[A.cK]))
a6.seH(H.c([],[A.cL]))
a6.seI(H.c([],[A.cM]))
a6.seJ(H.c([],[A.cN]))
a6.seK(H.c([],[A.cO]))
if(d1.k2){t=d1.z
if(t>0){a6.dS=H.j(a6.y.n(0,"dirLightCount"),"$iM")
for(h=0;h<t;++h){s=a6.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.v(P.r(a7+r+a8))
H.h(g,"$iJ")
s=a6.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.v(P.r(a7+r+a8))
H.h(f,"$iJ")
s=a6.ci;(s&&C.a).h(s,new A.cI(g,f))}}t=d1.Q
if(t>0){a6.dT=H.j(a6.y.n(0,"pntLightCount"),"$iM")
for(h=0;h<t;++h){s=a6.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.v(P.r(a7+r+a8))
H.h(g,"$iJ")
s=a6.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.v(P.r(a7+r+a8))
H.h(f,"$iJ")
s=a6.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.v(P.r(a7+r+a8))
H.h(e,"$iJ")
s=a6.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.v(P.r(a7+r+a8))
H.h(d,"$ia_")
s=a6.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.v(P.r(a7+r+a8))
H.h(c,"$ia_")
s=a6.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.v(P.r(a7+r+a8))
H.h(b,"$ia_")
s=a6.cj;(s&&C.a).h(s,new A.cK(g,f,e,d,c,b))}}t=d1.ch
if(t>0){a6.dU=H.j(a6.y.n(0,"spotLightCount"),"$iM")
for(h=0;h<t;++h){s=a6.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.v(P.r(a7+r+a8))
H.h(g,"$iJ")
s=a6.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.v(P.r(a7+r+a8))
H.h(f,"$iJ")
s=a6.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.v(P.r(a7+r+a8))
H.h(e,"$iJ")
s=a6.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.v(P.r(a7+r+a8))
H.h(d,"$iJ")
s=a6.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.v(P.r(a7+r+a8))
H.h(c,"$ia_")
s=a6.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.v(P.r(a7+r+a8))
H.h(b,"$ia_")
s=a6.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.v(P.r(a7+r+a8))
H.h(a,"$ia_")
s=a6.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.v(P.r(a7+r+a8))
H.h(a0,"$ia_")
s=a6.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.v(P.r(a7+r+a8))
H.h(a1,"$ia_")
s=a6.ck;(s&&C.a).h(s,new A.cL(g,f,e,d,c,b,a,a0,a1))}}t=d1.cx
if(t>0){a6.dV=H.j(a6.y.n(0,"txtDirLightCount"),"$iM")
for(h=0;h<t;++h){s=a6.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.v(P.r(a7+r+a8))
H.h(g,"$iJ")
s=a6.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.v(P.r(a7+r+a8))
H.h(f,"$iJ")
s=a6.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.v(P.r(a7+r+a8))
H.h(e,"$iJ")
s=a6.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.v(P.r(a7+r+a8))
H.h(d,"$iJ")
s=a6.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.v(P.r(a7+r+a8))
H.h(c,"$iJ")
s=a6.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.v(P.r(a7+r+a8))
H.h(b,"$iM")
s=a6.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.v(P.r(a7+r+a8))
H.h(a,"$iah")
s=a6.cl;(s&&C.a).h(s,new A.cM(g,f,e,d,c,a,b))}}t=d1.cy
if(t>0){a6.dW=H.j(a6.y.n(0,"txtPntLightCount"),"$iM")
for(h=0;h<t;++h){s=a6.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.v(P.r(a7+r+a8))
H.h(g,"$iJ")
s=a6.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.v(P.r(a7+r+a8))
H.h(f,"$iJ")
s=a6.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.v(P.r(a7+r+a8))
H.h(e,"$icJ")
s=a6.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.v(P.r(a7+r+a8))
H.h(d,"$iJ")
s=a6.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.v(P.r(a7+r+a8))
H.h(c,"$iM")
s=a6.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.v(P.r(a7+r+a8))
H.h(b,"$ia_")
s=a6.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.v(P.r(a7+r+a8))
H.h(a,"$ia_")
s=a6.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.v(P.r(a7+r+a8))
H.h(a0,"$ia_")
s=a6.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.v(P.r(a7+r+a8))
H.h(a1,"$iac")
s=a6.cm;(s&&C.a).h(s,new A.cN(g,f,e,d,a1,c,b,a,a0))}}t=d1.db
if(t>0){a6.dX=H.j(a6.y.n(0,"txtSpotLightCount"),"$iM")
for(h=0;h<t;++h){s=a6.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.v(P.r(a7+r+a8))
H.h(g,"$iJ")
s=a6.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.v(P.r(a7+r+a8))
H.h(f,"$iJ")
s=a6.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.v(P.r(a7+r+a8))
H.h(e,"$iJ")
s=a6.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.v(P.r(a7+r+a8))
H.h(d,"$iJ")
s=a6.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.v(P.r(a7+r+a8))
H.h(c,"$iJ")
s=a6.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.v(P.r(a7+r+a8))
H.h(b,"$iM")
s=a6.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.v(P.r(a7+r+a8))
H.h(a,"$iJ")
s=a6.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.v(P.r(a7+r+a8))
H.h(a0,"$ia_")
s=a6.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.v(P.r(a7+r+a8))
H.h(a1,"$ia_")
s=a6.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.v(P.r(a7+r+a8))
H.h(a2,"$ia_")
s=a6.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.v(P.r(a7+r+a8))
H.h(a3,"$ia_")
s=a6.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.v(P.r(a7+r+a8))
H.h(a4,"$ia_")
s=a6.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.v(P.r(a7+r+a8))
H.h(a5,"$iah")
s=a6.cn;(s&&C.a).h(s,new A.cO(g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ai:function(a,b,c){if(c==null||!c.d)C.b.a_(b.a,b.d,1)
else{a.em(c)
C.b.a_(b.a,b.d,0)}},
ad:function(a,b,c){C.b.a_(b.a,b.d,1)},
seT:function(a){this.r1=H.m(a,"$ib",[A.ap],"$ab")},
seF:function(a){this.ci=H.m(a,"$ib",[A.cI],"$ab")},
seG:function(a){this.cj=H.m(a,"$ib",[A.cK],"$ab")},
seH:function(a){this.ck=H.m(a,"$ib",[A.cL],"$ab")},
seI:function(a){this.cl=H.m(a,"$ib",[A.cM],"$ab")},
seJ:function(a){this.cm=H.m(a,"$ib",[A.cN],"$ab")},
seK:function(a){this.cn=H.m(a,"$ib",[A.cO],"$ab")}}
A.h9.prototype={
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
at:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.l(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.i.b8(c,1))+"Txt;\n")
if(b===C.d)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
hY:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
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
hT:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
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
hW:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
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
hZ:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
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
i6:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
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
i1:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
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
i4:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
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
i5:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
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
i:function(a){return this.aj}}
A.cI.prototype={}
A.cM.prototype={}
A.cK.prototype={}
A.cN.prototype={}
A.cL.prototype={}
A.cO.prototype={}
A.cz.prototype={
cM:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dY:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.d1(b,35633)
r.f=r.d1(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.z(H.kc(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.v(P.r("Failed to link shader: "+H.k(s)))}r.hx()
r.hz()},
a1:function(a){a.a.useProgram(this.r)
this.x.iw()},
d1:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.z(H.kc(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.i(P.r("Error compiling shader '"+H.k(s)+"': "+H.k(u)))}return s},
hx:function(){var u,t,s,r=this,q=H.c([],[A.da]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.da(p,t.name,s))}r.x=new A.fc(q)},
hz:function(){var u,t,s,r=this,q=H.c([],[A.e2]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.it(t.type,t.size,t.name,s))}r.y=new A.iu(q)},
aK:function(a,b,c){var u=this.a
if(a===1)return new A.M(u,b,c)
else return A.k4(u,this.r,b,a,c)},
f_:function(a,b,c){var u=this.a
if(a===1)return new A.ah(u,b,c)
else return A.k4(u,this.r,b,a,c)},
f0:function(a,b,c){var u=this.a
if(a===1)return new A.ac(u,b,c)
else return A.k4(u,this.r,b,a,c)},
bf:function(a,b){return new P.el(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
it:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aK(b,c,d)
case 5121:return u.aK(b,c,d)
case 5122:return u.aK(b,c,d)
case 5123:return u.aK(b,c,d)
case 5124:return u.aK(b,c,d)
case 5125:return u.aK(b,c,d)
case 5126:return new A.a_(u.a,c,d)
case 35664:return new A.ip(u.a,c,d)
case 35665:return new A.J(u.a,c,d)
case 35666:return new A.is(u.a,c,d)
case 35667:return new A.iq(u.a,c,d)
case 35668:return new A.ir(u.a,c,d)
case 35669:return new A.it(u.a,c,d)
case 35674:return new A.iv(u.a,c,d)
case 35675:return new A.cJ(u.a,c,d)
case 35676:return new A.ap(u.a,c,d)
case 35678:return u.f_(b,c,d)
case 35680:return u.f0(b,c,d)
case 35670:throw H.i(u.bf("BOOL",c))
case 35671:throw H.i(u.bf("BOOL_VEC2",c))
case 35672:throw H.i(u.bf("BOOL_VEC3",c))
case 35673:throw H.i(u.bf("BOOL_VEC4",c))
default:throw H.i(P.r("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}}
A.bP.prototype={
i:function(a){return this.b}}
A.dQ.prototype={}
A.e2.prototype={}
A.iu.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
n:function(a,b){var u=this.j(0,b)
if(u==null)throw H.i(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.K()},
K:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.B)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.M.prototype={
i:function(a){return"Uniform1i: "+H.k(this.c)}}
A.iq.prototype={
i:function(a){return"Uniform2i: "+H.k(this.c)}}
A.ir.prototype={
i:function(a){return"Uniform3i: "+H.k(this.c)}}
A.it.prototype={
i:function(a){return"Uniform4i: "+H.k(this.c)}}
A.io.prototype={
i:function(a){return"Uniform1iv: "+H.k(this.c)},
shR:function(a){H.m(a,"$ib",[P.D],"$ab")}}
A.a_.prototype={
i:function(a){return"Uniform1f: "+H.k(this.c)}}
A.ip.prototype={
i:function(a){return"Uniform2f: "+H.k(this.c)}}
A.J.prototype={
i:function(a){return"Uniform3f: "+H.k(this.c)}}
A.is.prototype={
i:function(a){return"Uniform4f: "+H.k(this.c)}}
A.iv.prototype={
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}}
A.cJ.prototype={
ah:function(a){var u=new Float32Array(H.d2(H.m(a,"$ib",[P.A],"$ab")))
C.b.ee(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.k(this.c)}}
A.ap.prototype={
ah:function(a){var u=new Float32Array(H.d2(H.m(a,"$ib",[P.A],"$ab")))
C.b.ef(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.k(this.c)}}
A.ah.prototype={
em:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.k(this.c)}}
A.ac.prototype={
en:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}
F.jv.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cs(s.b,b).cs(s.d.cs(s.c,b),c)
s=new V.ag(r.a,r.b,r.c)
if(!J.a7(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a3()}a.sj1(r.v(0,Math.sqrt(r.C(r))))
s=1-b
u=1-c
u=new V.bg(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.a7(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a3()}},
$S:36}
F.a4.prototype={
eS:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.ea()
if(q!=null)s=s.F(0,q)
if(u!=null)s=s.F(0,u)
if(t!=null)s=s.F(0,t)
if(s.dZ())return
return s.v(0,Math.sqrt(s.C(s)))},
eW:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.I(0,q)
r=new V.R(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.C(r)))
r=t.I(0,q)
r=new V.R(r.a,r.b,r.c)
r=s.b_(r.v(0,Math.sqrt(r.C(r))))
return r.v(0,Math.sqrt(r.C(r)))},
cc:function(){var u,t=this
if(t.d!=null)return!0
u=t.eS()
if(u==null){u=t.eW()
if(u==null)return!1}t.d=u
t.a.a.a3()
return!0},
eR:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.ea()
if(q!=null)s=s.F(0,q)
if(u!=null)s=s.F(0,u)
if(t!=null)s=s.F(0,t)
if(s.dZ())return
return s.v(0,Math.sqrt(s.C(s)))},
eV:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.P().a){l=d.I(0,g)
l=new V.R(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.I(0,g)
l=new V.ag(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).I(0,j)
l=new V.R(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.C(l)))
l=o.b_(q)
l=l.v(0,Math.sqrt(l.C(l))).b_(o)
q=l.v(0,Math.sqrt(l.C(l)))}return q},
ca:function(){var u,t=this
if(t.e!=null)return!0
u=t.eR()
if(u==null){u=t.eV()
if(u==null)return!1}t.e=u
t.a.a.a3()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
B:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.i.ag(J.ar(s.e),0)+", "+C.i.ag(J.ar(t.b.e),0)+", "+C.i.ag(J.ar(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
K:function(){return this.B("")}}
F.bc.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
B:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.i.ag(J.ar(u.e),0)+", "+C.i.ag(J.ar(this.b.e),0)},
K:function(){return this.B("")}}
F.bC.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
B:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.i.ag(J.ar(u.e),0)},
K:function(){return this.B("")}}
F.dO.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.L():u},
iH:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.a0()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.B)(g),++s){r=g[s]
h.a.h(0,r.ir())}h.a.a0()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.B)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.a0()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bC()
if(n.a==null)H.v(P.r("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.A(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.B)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.a0()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.a0()
p=p.e
if(typeof p!=="number")return p.F()
p+=u
o=o.c
if(p>=o.length)return H.l(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.m7(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.B)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.a0()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.a0()
p=p.e
if(typeof p!=="number")return p.F()
p+=u
o=o.c
if(p>=o.length)return H.l(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.a0()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cl(l,k,i)}g=h.e
if(g!=null)g.aC(0)},
av:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.av()||!1
if(!t.a.av())u=!1
s=t.e
if(s!=null)s.aC(0)
return u},
dt:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aK()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bm().a)!==0)++s
if((t&$.bl().a)!==0)++s
if((t&$.bn().a)!==0)++s
if((t&$.bo().a)!==0)++s
if((t&$.d7().a)!==0)++s
if((t&$.d8().a)!==0)++s
if((t&$.c9().a)!==0)++s
if((t&$.bk().a)!==0)++s
r=a3.gcI(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.A
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.dd])
for(n=0,m=0;m<s;++m){l=a3.il(m)
k=l.gcI(l)
C.a.W(o,m,new Z.dd(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.l(u,j)
i=u[j].iE(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.W(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.d2(p)),35044)
u.bindBuffer(a0,null)
e=new Z.cd(new Z.eb(a0,f),o,a3)
e.sfa(H.c([],[Z.by]))
if(a.b.b.length!==0){t=P.D
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.a0()
C.a.h(d,c.e)}b=Z.k5(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.by(0,d.length,b))}if(a.c.b.length!==0){t=P.D
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.a0()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.l(c,m)
c=c[m].b
c.a.a.a0()
C.a.h(d,c.e)}b=Z.k5(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.by(1,d.length,b))}if(a.d.b.length!==0){t=P.D
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.a0()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.l(c,m)
c=c[m].b
c.a.a.a0()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.l(c,m)
c=c[m].c
c.a.a.a0()
C.a.h(d,c.e)}b=Z.k5(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.by(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.f])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.B(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.B(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.B(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.B(t))}return C.a.l(s,"\n")},
a3:function(){var u=this.e
if(u!=null)u.A(null)},
$inp:1}
F.hL.prototype={
ih:function(a){var u,t,s,r,q,p
H.m(a,"$ib",[F.ax],"$ab")
u=H.c([],[F.a4])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.cl(t,q,p))}return u},
ii:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.ax],"$ab")
u=H.c([],[F.a4])
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
C.a.h(u,F.cl(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cl(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cl(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cl(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
av:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.B)(u),++r)if(!u[r].cc())s=!1
return s},
cb:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.B)(u),++r)if(!u[r].ca())s=!1
return s},
i:function(a){return this.K()},
B:function(a){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].B(a))
return C.a.l(r,"\n")},
K:function(){return this.B("")},
sf5:function(a){this.b=H.m(a,"$ib",[F.a4],"$ab")}}
F.hM.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.K()},
B:function(a){var u,t,s=H.c([],[P.f]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.l(t,u)
C.a.h(s,t[u].B(a+(""+u+". ")))}return C.a.l(s,"\n")},
K:function(){return this.B("")},
sfb:function(a){this.b=H.m(a,"$ib",[F.bc],"$ab")}}
F.hN.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.K()},
B:function(a){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].B(a))
return C.a.l(r,"\n")},
K:function(){return this.B("")},
sc1:function(a){this.b=H.m(a,"$ib",[F.bC],"$ab")}}
F.ax.prototype={
ce:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.iD(u.cx,r,o,t,s,q,p,a,n)},
ir:function(){return this.ce(null)},
sj1:function(a){var u
if(!J.a7(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a3()}},
iE:function(a){var u,t,s=this
if(a.t(0,$.aK())){u=s.f
t=[P.A]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bm())){u=s.r
t=[P.A]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bl())){u=s.x
t=[P.A]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bn())){u=s.y
t=[P.A]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.t(0,$.bo())){u=s.z
t=[P.A]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.d7())){u=s.Q
t=[P.A]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.d8())){u=s.Q
t=[P.A]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.c9()))return H.c([s.ch],[P.A])
else if(a.t(0,$.bk())){u=s.cx
t=[P.A]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.A])},
cc:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.ea()
t.d.N(0,new F.iL(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a3()
s=t.a.e
if(s!=null)s.aC(0)}return!0},
ca:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.ea()
t.d.N(0,new F.iK(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a3()
s=t.a.e
if(s!=null)s.aC(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
B:function(a){var u,t,s=this,r="-",q=H.c([],[P.f])
C.a.h(q,C.i.ag(J.ar(s.e),0))
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
C.a.h(q,V.W(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.l(q,", ")
return a+"{"+t+"}"},
K:function(){return this.B("")}}
F.iL.prototype={
$1:function(a){var u,t
H.j(a,"$ia4")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.F(0,u)}},
$S:8}
F.iK.prototype={
$1:function(a){var u,t
H.j(a,"$ia4")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.F(0,u)}},
$S:8}
F.iE.prototype={
a0:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.i(P.r("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a3()
return!0},
bg:function(a,b,c,d,e,f){var u=F.iD(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gm:function(a){return this.c.length},
av:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)u[s].cc()
return!0},
cb:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)u[s].ca()
return!0},
ip:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a7(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.A(null)}}}}return!0},
i:function(a){return this.K()},
B:function(a){var u,t,s,r
this.a0()
u=H.c([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].B(a))
return C.a.l(u,"\n")},
K:function(){return this.B("")},
shS:function(a){this.c=H.m(a,"$ib",[F.ax],"$ab")}}
F.iF.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
N:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a4]})
C.a.N(u.b,b)
C.a.N(u.c,new F.iG(u,b))
C.a.N(u.d,new F.iH(u,b))},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].B(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].B(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].B(""))
return C.a.l(r,"\n")},
sf6:function(a){this.b=H.m(a,"$ib",[F.a4],"$ab")},
sf7:function(a){this.c=H.m(a,"$ib",[F.a4],"$ab")},
sf8:function(a){this.d=H.m(a,"$ib",[F.a4],"$ab")}}
F.iG.prototype={
$1:function(a){H.j(a,"$ia4")
if(!J.a7(a.a,this.a))this.b.$1(a)},
$S:8}
F.iH.prototype={
$1:function(a){var u
H.j(a,"$ia4")
u=this.a
if(!J.a7(a.a,u)&&!J.a7(a.b,u))this.b.$1(a)},
$S:8}
F.iI.prototype={
gm:function(a){return this.b.length+this.c.length},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].B(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].B(""))
return C.a.l(r,"\n")},
sfc:function(a){this.b=H.m(a,"$ib",[F.bc],"$ab")},
sfd:function(a){this.c=H.m(a,"$ib",[F.bc],"$ab")}}
F.iJ.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].B(""))
return C.a.l(r,"\n")},
sc1:function(a){this.b=H.m(a,"$ib",[F.bC],"$ab")}}
O.dB.prototype={
gp:function(){var u=this.dy
return u==null?this.dy=D.L():u},
S:function(a){var u
H.j(a,"$ix")
u=this.dy
if(u!=null)u.A(a)},
aT:function(){return this.S(null)},
de:function(a){H.j(a,"$ix")
this.a=null
this.S(a)},
ho:function(){return this.de(null)},
fq:function(a,b){var u=V.al
H.m(b,"$id",[u],"$ad")
u=new D.bz([u])
u.b=!0
this.S(u)},
ft:function(a,b){var u=V.al
H.m(b,"$id",[u],"$ad")
u=new D.bA([u])
u.b=!0
this.S(u)},
cZ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.h.a2(a1.e.length+3,4)*4,a3=C.h.a2(a1.f.length+3,4)*4,a4=C.h.a2(a1.r.length+3,4)*4,a5=C.h.a2(a1.x.length+3,4)*4,a6=C.h.a2(a1.y.length+3,4)*4,a7=C.h.a2(a1.z.length+3,4)*4,a8=C.h.a2(a0.e.a.length+3,4)*4
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
a=$.aK()
if(h){j=$.bm()
a=new Z.b6(a.a|j.a)}if(g){j=$.bl()
a=new Z.b6(a.a|j.a)}if(f){j=$.bn()
a=new Z.b6(a.a|j.a)}if(e){j=$.bo()
a=new Z.b6(a.a|j.a)}if(c){j=$.bk()
a=new Z.b6(a.a|j.a)}return new A.h9(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
V:function(a,b){H.m(a,"$ib",[T.cF],"$ab")
if(b!=null)if(!C.a.T(a,b)){b.a=a.length
C.a.h(a,b)}},
al:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.ak(u,u.length,[H.y(u,0)]);u.u();){t=u.d
t.toString
s=$.iC
if(s==null)s=$.iC=new V.R(0,0,1)
t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cD(s)}}},
e6:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a
if(a2==null){a2=a1.cZ()
u=H.j(a3.fr.j(0,a2.aj),"$idC")
if(u==null){u=A.ma(a2,a3.a)
a3.dn(u)}a2=a1.a=u
a4.e=null}t=a2.z
s=t.bi
a2=a4.e
if(!(a2 instanceof Z.cd))a2=a4.e=null
if(a2==null||!a2.d.t(0,s)){a2=t.r1
if(a2)a4.d.av()
r=t.r2
if(r){q=a4.d
p=q.e
if(p!=null)++p.d
q.d.cb()
q.a.cb()
q=q.e
if(q!=null)q.aC(0)}q=t.ry
if(q){p=a4.d
o=p.e
if(o!=null)++o.d
p.a.ip()
p=p.e
if(p!=null)p.aC(0)}n=a4.d.dt(new Z.ec(a3.a),s)
n.ax($.aK()).e=a1.a.Q.c
if(a2)n.ax($.bm()).e=a1.a.cx.c
if(r)n.ax($.bl()).e=a1.a.ch.c
if(t.rx)n.ax($.bn()).e=a1.a.cy.c
if(q)n.ax($.bo()).e=a1.a.db.c
if(t.x1)n.ax($.bk()).e=a1.a.dx.c
a4.e=n}a2=T.cF
m=H.c([],[a2])
a1.a.a1(a3)
if(t.fx){r=a1.a
q=a3.dx
q=q.gZ(q)
r=r.dy
r.toString
r.ah(q.ab(0,!0))}if(t.fy){r=a1.a
q=a3.cx
if(q==null){q=a3.db
q=q.gZ(q)
p=a3.dx
p=a3.cx=q.w(0,p.gZ(p))
q=p}r=r.fr
r.toString
r.ah(q.ab(0,!0))}r=a1.a
q=a3.ch
if(q==null){q=a3.giV()
p=a3.dx
p=a3.ch=q.w(0,p.gZ(p))
q=p}r=r.fy
r.toString
r.ah(q.ab(0,!0))
if(t.x2){r=a1.a
q=a1.b
r=r.k1
r.toString
r.ah(C.o.ab(q,!0))}if(t.y1){r=a1.a
q=a1.c
r=r.k2
r.toString
r.ah(C.o.ab(q,!0))}if(t.y2){r=a1.a
q=a1.d
r=r.k3
r.toString
r.ah(C.o.ab(q,!0))}if(t.aq>0){l=a1.e.a.length
r=a1.a.k4
C.b.a_(r.a,r.d,l)
for(r=[P.A],k=0;k<l;++k){q=a1.a
p=a1.e.a
if(k>=p.length)return H.l(p,k)
p=p[k]
q.toString
H.j(p,"$ial")
q=q.r1
if(k>=q.length)return H.l(q,k)
q=q[k]
j=new Float32Array(H.d2(H.m(p.ab(0,!0),"$ib",r,"$ab")))
C.b.ef(q.a,q.d,!1,j)}}switch(t.a){case C.c:break
case C.f:r=a1.a
q=a1.f.f
r=r.r2
r.toString
p=q.a
o=q.b
q=q.c
C.b.q(r.a,r.d,p,o,q)
break
case C.d:a1.V(m,a1.f.d)
r=a1.a
q=a1.f.d
r.ai(r.rx,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
break
case C.e:a1.V(m,a1.f.e)
r=a1.a
q=a1.f.e
r.ad(r.ry,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
break}if(t.k2){switch(t.b){case C.c:break
case C.f:r=a1.a
q=a1.r.f
r=r.x2
r.toString
p=q.a
o=q.b
q=q.c
C.b.q(r.a,r.d,p,o,q)
break
case C.d:a1.V(m,a1.r.d)
r=a1.a
q=a1.r.d
r.ai(r.y1,r.aq,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
break
case C.e:a1.V(m,a1.r.e)
r=a1.a
q=a1.r.e
r.ad(r.y2,r.aq,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
break}switch(t.c){case C.c:break
case C.f:r=a1.a
q=a1.x.f
r=r.aj
r.toString
p=q.a
o=q.b
q=q.c
C.b.q(r.a,r.d,p,o,q)
break
case C.d:a1.V(m,a1.x.d)
r=a1.a
q=a1.x.d
r.ai(r.bi,r.bj,q)
q=a1.a
r=a1.x.f
q=q.aj
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
break
case C.e:a1.V(m,a1.x.e)
r=a1.a
q=a1.x.e
r.ad(r.dD,r.bj,q)
q=a1.a
r=a1.x.f
q=q.aj
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
break}switch(t.d){case C.c:break
case C.f:r=a1.a
q=a1.y.f
r=r.bk
r.toString
p=q.a
o=q.b
q=q.c
C.b.q(r.a,r.d,p,o,q)
break
case C.d:a1.V(m,a1.y.d)
r=a1.a
q=a1.y.d
r.ai(r.dE,r.bl,q)
q=a1.a
r=a1.y.f
q=q.bk
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
break
case C.e:a1.V(m,a1.y.e)
r=a1.a
q=a1.y.e
r.ad(r.dF,r.bl,q)
q=a1.a
r=a1.y.f
q=q.bk
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
break}switch(t.e){case C.c:break
case C.f:r=a1.a
q=a1.z.f
r=r.bm
r.toString
p=q.a
o=q.b
q=q.c
C.b.q(r.a,r.d,p,o,q)
q=a1.a
o=a1.z.ch
q=q.bo
C.b.H(q.a,q.d,o)
break
case C.d:a1.V(m,a1.z.d)
r=a1.a
q=a1.z.d
r.ai(r.dG,r.bn,q)
q=a1.a
r=a1.z.f
q=q.bm
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bo
C.b.H(r.a,r.d,o)
break
case C.e:a1.V(m,a1.z.e)
r=a1.a
q=a1.z.e
r.ad(r.dH,r.bn,q)
q=a1.a
r=a1.z.f
q=q.bm
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bo
C.b.H(r.a,r.d,o)
break}if(t.z>0){l=a1.dx.e.length
r=a1.a.dS
C.b.a_(r.a,r.d,l)
r=a3.db
i=r.gZ(r)
for(r=a1.dx.e,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.B)(r),++g){f=r[g]
p=a1.a.ci
if(h>=p.length)return H.l(p,h)
e=p[h]
p=i.cD(f.a)
o=p.a
d=p.b
c=p.c
c=p.v(0,Math.sqrt(o*o+d*d+c*c))
d=e.b
o=c.a
p=c.b
c=c.c
C.b.q(d.a,d.d,o,p,c)
c=f.c
p=e.c
C.b.q(p.a,p.d,c.a,c.b,c.c);++h}}if(t.Q>0){l=a1.dx.f.length
r=a1.a.dT
C.b.a_(r.a,r.d,l)
r=a3.db
i=r.gZ(r)
for(r=a1.dx.f,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.B)(r),++g){f=r[g]
p=a1.a.cj
if(h>=p.length)return H.l(p,h)
e=p[h]
p=f.gb2(f)
o=e.b
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=i.b6(f.gb2(f))
o=e.c
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gaw(f)
o=e.d
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gc6()
o=e.e
C.b.H(o.a,o.d,p)
p=f.gc7()
o=e.f
C.b.H(o.a,o.d,p)
p=f.gc8()
o=e.r
C.b.H(o.a,o.d,p);++h}}if(t.ch>0){l=a1.dx.r.length
r=a1.a.dU
C.b.a_(r.a,r.d,l)
r=a3.db
i=r.gZ(r)
for(r=a1.dx.r,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.B)(r),++g){f=r[g]
p=a1.a.ck
if(h>=p.length)return H.l(p,h)
e=p[h]
p=f.gb2(f)
o=e.b
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gcg(f).ja()
o=e.c
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=i.b6(f.gb2(f))
o=e.d
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gaw(f)
o=e.e
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gj9()
o=e.f
C.b.H(o.a,o.d,p)
p=f.gj8()
o=e.r
C.b.H(o.a,o.d,p)
p=f.gc6()
o=e.x
C.b.H(o.a,o.d,p)
p=f.gc7()
o=e.y
C.b.H(o.a,o.d,p)
p=f.gc8()
o=e.z
C.b.H(o.a,o.d,p);++h}}if(t.cx>0){l=a1.dx.x.length
r=a1.a.dV
C.b.a_(r.a,r.d,l)
r=a3.db
i=r.gZ(r)
for(r=a1.dx.x,q=r.length,p=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.B)(r),++g){f=r[g]
o=a1.a.cl
if(h>=o.length)return H.l(o,h)
e=o[h]
o=f.gb5()
H.m(m,"$ib",p,"$ab")
if(!C.a.T(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gcg(f)
d=e.d
C.b.q(d.a,d.d,o.a,o.b,o.c)
o=f.gbE()
d=e.b
C.b.q(d.a,d.d,o.a,o.b,o.c)
o=f.gbC(f)
d=e.c
C.b.q(d.a,d.d,o.a,o.b,o.c)
o=i.cD(f.gcg(f))
d=o.a
c=o.b
b=o.c
b=o.v(0,Math.sqrt(d*d+c*c+b*b))
c=e.e
d=b.a
o=b.b
b=b.c
C.b.q(c.a,c.d,d,o,b)
b=f.gaw(f)
o=e.f
C.b.q(o.a,o.d,b.a,b.b,b.c)
b=f.gb5()
o=b.ge_(b)
if(!o){o=e.x
C.b.a_(o.a,o.d,1)}else{o=e.r
d=b.d
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,b.a)
o=e.x
C.b.a_(o.a,o.d,0)}++h}}if(t.cy>0){l=a1.dx.y.length
r=a1.a.dW
C.b.a_(r.a,r.d,l)
r=a3.db
i=r.gZ(r)
for(r=a1.dx.y,q=r.length,p=[P.A],o=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.B)(r),++g){f=r[g]
d=a1.a.cm
if(h>=d.length)return H.l(d,h)
e=d[h]
d=f.gb5()
H.m(m,"$ib",o,"$ab")
if(!C.a.T(m,d)){d.a=m.length
C.a.h(m,d)}a=i.w(0,f.gZ(f))
d=f.gZ(f)
c=$.cw
d=d.b6(c==null?$.cw=new V.ag(0,0,0):c)
c=e.b
C.b.q(c.a,c.d,d.a,d.b,d.c)
d=$.cw
d=a.b6(d==null?$.cw=new V.ag(0,0,0):d)
c=e.c
C.b.q(c.a,c.d,d.a,d.b,d.c)
d=a.cq(0)
c=e.d
j=new Float32Array(H.d2(H.m(new V.dD(d.a,d.b,d.c,d.e,d.f,d.r,d.y,d.z,d.Q).ab(0,!0),"$ib",p,"$ab")))
C.b.ee(c.a,c.d,!1,j)
c=f.gaw(f)
d=e.e
C.b.q(d.a,d.d,c.a,c.b,c.c)
c=f.gb5()
d=c.ge_(c)
if(!d){d=e.r
C.b.a_(d.a,d.d,1)}else{d=e.f
b=c.d
a0=d.a
d=d.d
if(b<6)a0.uniform1i(d,0)
else a0.uniform1i(d,c.a)
d=e.r
C.b.a_(d.a,d.d,0)}d=f.gc6()
c=e.x
C.b.H(c.a,c.d,d)
d=f.gc7()
c=e.y
C.b.H(c.a,c.d,d)
d=f.gc8()
c=e.z
C.b.H(c.a,c.d,d);++h}}if(t.db>0){l=a1.dx.z.length
r=a1.a.dX
C.b.a_(r.a,r.d,l)
r=a3.db
i=r.gZ(r)
for(r=a1.dx.z,q=r.length,a2=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.B)(r),++g){f=r[g]
p=a1.a.cn
if(h>=p.length)return H.l(p,h)
e=p[h]
p=f.gb5()
H.m(m,"$ib",a2,"$ab")
if(!C.a.T(m,p)){p.a=m.length
C.a.h(m,p)}p=f.gb2(f)
o=e.b
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gcg(f)
o=e.c
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gbE()
o=e.d
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gbC(f)
o=e.e
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=i.b6(f.gb2(f))
o=e.f
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gb5()
o=p.ge_(p)
if(!o){p=e.x
C.b.a_(p.a,p.d,1)}else{o=e.r
d=p.d
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,p.a)
p=e.x
C.b.a_(p.a,p.d,0)}p=f.gaw(f)
o=e.y
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gjb()
o=e.z
C.b.H(o.a,o.d,p)
p=f.gjc()
o=e.Q
C.b.H(o.a,o.d,p)
p=f.gc6()
o=e.ch
C.b.H(o.a,o.d,p)
p=f.gc7()
o=e.cx
C.b.H(o.a,o.d,p)
p=f.gc8()
o=e.cy
C.b.H(o.a,o.d,p);++h}}}switch(t.f){case C.c:break
case C.f:break
case C.d:a1.V(m,a1.Q.d)
a2=a1.a
r=a1.Q.d
a2.ai(a2.dI,a2.bp,r)
break
case C.e:a1.V(m,a1.Q.e)
a2=a1.a
r=a1.Q.e
a2.ad(a2.dJ,a2.bp,r)
break}if(t.fr){a2=a1.a
r=a3.Q
if(r==null){r=a3.db
r=a3.Q=r.gZ(r).cq(0)}a2=a2.id
a2.toString
a2.ah(r.ab(0,!0))}if(t.dy){a1.V(m,a1.ch)
a2=a1.a
r=a1.ch
a2.ad(a2.dK,a2.dL,r)
switch(t.r){case C.c:break
case C.f:a2=a1.a
r=a1.cx.f
a2=a2.bq
a2.toString
q=r.a
p=r.b
r=r.c
C.b.q(a2.a,a2.d,q,p,r)
break
case C.d:a1.V(m,a1.cx.d)
a2=a1.a
r=a1.cx.d
a2.ai(a2.dM,a2.br,r)
r=a1.a
a2=a1.cx.f
r=r.bq
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.q(r.a,r.d,q,p,a2)
break
case C.e:a1.V(m,a1.cx.e)
a2=a1.a
r=a1.cx.e
a2.ad(a2.dN,a2.br,r)
r=a1.a
a2=a1.cx.f
r=r.bq
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.q(r.a,r.d,q,p,a2)
break}switch(t.x){case C.c:break
case C.f:a2=a1.a
r=a1.cy.f
a2=a2.bt
a2.toString
q=r.a
p=r.b
r=r.c
C.b.q(a2.a,a2.d,q,p,r)
r=a1.a
p=a1.cy.ch
r=r.bs
C.b.H(r.a,r.d,p)
break
case C.d:a1.V(m,a1.cy.d)
a2=a1.a
r=a1.cy.d
a2.ai(a2.dO,a2.bu,r)
r=a1.a
a2=a1.cy.f
r=r.bt
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.q(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bs
C.b.H(a2.a,a2.d,p)
break
case C.e:a1.V(m,a1.cy.e)
a2=a1.a
r=a1.cy.e
a2.ad(a2.dP,a2.bu,r)
r=a1.a
a2=a1.cy.f
r=r.bt
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.q(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bs
C.b.H(a2.a,a2.d,p)
break}}a2=t.y
r=a2!==C.c
if(r){switch(a2){case C.c:break
case C.f:a2=a1.a
q=a1.db.f
a2=a2.bv
C.b.H(a2.a,a2.d,q)
break
case C.d:a1.V(m,a1.db.d)
a2=a1.a
q=a1.db.d
a2.ai(a2.dQ,a2.bw,q)
q=a1.a
a2=a1.db.f
q=q.bv
C.b.H(q.a,q.d,a2)
break
case C.e:a1.V(m,a1.db.e)
a2=a1.a
q=a1.db.e
a2.ad(a2.dR,a2.bw,q)
q=a1.a
a2=a1.db.f
q=q.bv
C.b.H(q.a,q.d,a2)
break}a2=a3.a
a2.enable(3042)
a2.blendFunc(770,771)}for(a2=a3.a,k=0;k<m.length;++k){q=m[k]
if(!q.c&&q.d){q.c=!0
a2.activeTexture(33984+q.a)
a2.bindTexture(3553,q.b)}}q=a4.e
q.a1(a3)
q.aa(a3)
q.b7(a3)
if(r)a2.disable(3042)
for(k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
a2.activeTexture(33984+r.a)
a2.bindTexture(3553,null)}}r=a1.a
r.toString
a2.useProgram(null)
r.x.dA()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cZ().aj},
seU:function(a){this.e=H.m(a,"$ia1",[V.al],"$aa1")}}
O.h7.prototype={
hs:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.P().a)){u.f=a
t=new D.K(u.b,t,a,[P.A])
t.b=!0
u.a.S(t)}},
ao:function(){this.cK()
this.hs(1)}}
O.cq.prototype={
S:function(a){this.a.S(H.j(a,"$ix"))},
aT:function(){return this.S(null)},
ao:function(){},
hv:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().U(0,t.gaI())
u=t.d
t.d=a
if(a!=null)a.gp().h(0,t.gaI())
s=new D.K(t.b+".texture2D",u,t.d,[T.dV])
s.b=!0
t.a.S(s)}},
hw:function(a){},
scC:function(a){var u=this,t=u.c
if(t!==C.d){if(t===C.c)u.ao()
u.c=C.d
u.hw(null)
t=u.a
t.a=null
t.S(null)}u.hv(a)}}
O.h8.prototype={}
O.aU.prototype={
dh:function(a){var u,t,s=this
if(!J.a7(s.f,a)){u=s.f
s.f=a
t=new D.K(s.b+".color",u,a,[V.a3])
t.b=!0
s.a.S(t)}},
ao:function(){this.cK()
this.dh(new V.a3(1,1,1))},
saw:function(a,b){var u,t=this
if(t.c===C.c){t.c=C.f
t.ao()
u=t.a
u.a=null
u.S(null)}t.dh(b)}}
O.ha.prototype={
ht:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.P().a)){u.ch=a
t=new D.K(u.b+".refraction",t,a,[P.A])
t.b=!0
u.a.S(t)}},
ao:function(){this.cL()
this.ht(1)}}
O.hb.prototype={
hu:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.P().a)){u.ch=a
t=new D.K(u.b+".shininess",t,a,[P.A])
t.b=!0
u.a.S(t)}},
ao:function(){this.cL()
this.hu(100)}}
O.dP.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.L():u},
S:function(a){var u
H.j(a,"$ix")
u=this.e
if(u!=null)u.A(a)},
aT:function(){return this.S(null)},
e6:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.j(a.fr.j(0,n),"$idQ")
if(u==null){t=a.a
u=new A.dQ(t,n)
u.cM(t,n)
u.dY(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.h(u.y.j(0,"fov"),"$ia_")
u.ch=H.h(u.y.j(0,"ratio"),"$ia_")
u.cx=H.h(u.y.j(0,"boxClr"),"$iJ")
u.cy=H.h(u.y.j(0,"boxTxt"),"$iac")
u.db=H.h(u.y.j(0,"viewMat"),"$iap")
a.dn(u)}o.a=u}if(b.e==null){t=b.d.dt(new Z.ec(a.a),$.aK())
t.ax($.aK()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
s.activeTexture(33985)
s.bindTexture(34067,t.b)}}t=a.d
s=a.c
r=o.a
r.a1(a)
q=o.b
p=r.Q
C.b.H(p.a,p.d,q)
q=r.ch
C.b.H(q.a,q.d,t/s)
s=o.c
r.cy.en(s)
s=o.d
t=r.cx
C.b.q(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.gZ(s).cq(0)
r=r.db
r.toString
r.ah(s.ab(0,!0))
t=b.e
if(t instanceof Z.cd){t.a1(a)
t.aa(a)
t.b7(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.dA()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.bD.prototype={}
T.cF.prototype={}
T.dV.prototype={}
T.i7.prototype={
gp:function(){var u=this.y
return u==null?this.y=D.L():u}}
T.dW.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.L():u}}
T.i8.prototype={
iF:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.kC(a)
t=new T.i7()
t.a=0
t.b=q
t.d=t.c=!1
r=W.o
W.a6(u,"load",H.n(new T.ia(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
aL:function(a,b,c,d,e,f){var u,t=W.kC(c);++this.d
u=W.o
W.a6(t,"load",H.n(new T.i9(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
dg:function(a,b,c){var u,t,s,r
b=V.kn(b)
u=V.kn(a.width)
t=V.kn(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jQ()
s.width=u
s.height=t
r=H.j(C.l.ei(s,"2d"),"$ice")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.mS(r.getImageData(0,0,s.width,s.height))}}}
T.ia.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.dg(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.b.ea(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.dC()}++s.e},
$S:12}
T.i9.prototype={
$1:function(a){var u=this,t=u.a,s=t.dg(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.ea(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.dC()}++t.e},
$S:12}
V.b9.prototype={
az:function(a,b){return!0},
i:function(a){return"all"},
$ias:1}
V.as.prototype={}
V.dA.prototype={
az:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)if(u[s].az(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.B)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa5:function(a){this.a=H.m(a,"$ib",[V.as],"$ab")},
$ias:1}
V.am.prototype={
az:function(a,b){return!this.es(0,b)},
i:function(a){return"!["+this.cJ(0)+"]"}}
V.hB.prototype={
az:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.k0(this.a),t=H.k0(this.b)
return u+".."+t},
$ias:1}
V.hK.prototype={
ey:function(a){var u,t
if(a.a.length<=0)throw H.i(P.r("May not create a SetMatcher with zero characters."))
u=new H.aS([P.D,P.O])
for(t=new H.cp(a,a.gm(a),[H.aj(a,"w",0)]);t.u();)u.W(0,t.d,!0)
this.shr(u)},
az:function(a,b){return this.a.dw(0,b)},
i:function(a){var u=this.a
return P.k2(new H.dw(u,[H.y(u,0)]))},
shr:function(a){this.a=H.m(a,"$iQ",[P.D,P.O],"$aQ")},
$ias:1}
V.cA.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cH(this.a.k(0,b))
r.sa5(H.c([],[V.as]))
r.c=!1
C.a.h(this.c,r)
return r},
ix:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
if(r.az(0,a))return r}return},
i:function(a){return this.b},
shN:function(a){this.c=H.m(a,"$ib",[V.cH],"$ab")}}
V.e0.prototype={
i:function(a){var u=H.kp(this.b,"\n","\\n"),t=H.kp(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cG.prototype={
aB:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.B)(c),++t){s=c[t]
this.c.W(0,s,b)}},
i:function(a){return this.b},
shl:function(a){var u=P.f
this.c=H.m(a,"$iQ",[u,u],"$aQ")}}
V.id.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cA(this,b)
u.shN(H.c([],[V.cH]))
u.d=null
this.a.W(0,b,u)}return u},
L:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cG(a)
u=P.f
t.shl(new H.aS([u,u]))
this.b.W(0,a,t)}return t},
ed:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.e0]),l=this.c,k=[P.D],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.i.aJ(a,s)
q=l.ix(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.k2(j)
throw H.i(P.r("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.k2(j)
o=l.d
n=o.c.j(0,p)
t=new V.e0(n==null?o.b:n,p,s)}++s}}},
shD:function(a){this.a=H.m(a,"$iQ",[P.f,V.cA],"$aQ")},
shG:function(a){this.b=H.m(a,"$iQ",[P.f,V.cG],"$aQ")}}
V.cH.prototype={
i:function(a){return this.b.b+": "+this.cJ(0)}}
X.bN.prototype={$iaX:1}
X.fM.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.L():u},
an:function(a){var u=this.x
if(u!=null)u.A(a)},
a1:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.F(u)
q=C.j.ak(r*u)
r=s.b
if(typeof t!=="number")return H.F(t)
p=C.j.ak(r*t)
r=C.j.ak(s.c*u)
a.c=r
s=C.j.ak(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.fS.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.L():u},
a1:function(a){var u
a.cy.bB(V.bV())
u=V.bV()
a.db.bB(u)},
b7:function(a){a.cy.aA()
a.db.aA()},
$iaX:1,
$ibN:1}
X.dJ.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.L():u},
an:function(a){var u
H.j(a,"$ix")
u=this.f
if(u!=null)u.A(a)},
fz:function(){return this.an(null)},
a1:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.aV(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bB(k)
r=$.kN
if(r==null){r=V.kP()
q=V.l7()
p=$.l4
r=V.kI(r,q,p==null?$.l4=new V.R(0,0,-1):p)
$.kN=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aQ(0,a,s)
if(t!=null)u=t.w(0,u)}a.db.bB(u)},
b7:function(a){a.cy.aA()
a.db.aA()},
$iaX:1,
$ibN:1}
X.cD.prototype={}
V.br.prototype={
ba:function(a){this.b=new P.fQ(C.L)
this.c=null
this.sbR(H.c([],[[P.b,W.aA]]))},
J:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.aA]))
u=a.split("\n")
for(l=u.length,t=[W.aA],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.H(q)
o=m.b.eZ(q,0,q.length)
n=o==null?q:o
C.J.el(p,H.kp(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gbx(m.d),p)}},
e5:function(a,b){var u,t,s,r,q=this
H.m(b,"$ib",[P.f],"$ab")
q.sbR(H.c([],[[P.b,W.aA]]))
u=C.a.l(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bh():t).ed(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)q.bA(t[r])},
sbR:function(a){this.d=H.m(a,"$ib",[[P.b,W.aA]],"$ab")}}
V.jL.prototype={
$1:function(a){H.j(a,"$ib3")
P.ko(C.j.ec(this.a.giz(),2)+" fps")},
$S:40}
V.fs.prototype={
bA:function(a){var u=this
switch(a.a){case"Class":u.J(a.b,"#551")
break
case"Comment":u.J(a.b,"#777")
break
case"Id":u.J(a.b,"#111")
break
case"Num":u.J(a.b,"#191")
break
case"Reserved":u.J(a.b,"#119")
break
case"String":u.J(a.b,"#171")
break
case"Symbol":u.J(a.b,"#616")
break
case"Type":u.J(a.b,"#B11")
break
case"Whitespace":u.J(a.b,"#111")
break}},
bh:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.ie()
a1.c=a1.k(0,r)
u=a1.k(0,r).l(0,q)
t=V.u(new H.q("_"))
C.a.h(u.a,t)
t=V.Z("a","z")
C.a.h(u.a,t)
t=V.Z("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).l(0,q)
u=V.u(new H.q("_"))
C.a.h(t.a,u)
u=V.Z("0","9")
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=a1.k(0,r).l(0,p)
t=V.Z("0","9")
C.a.h(u.a,t)
t=a1.k(0,p).l(0,p)
u=V.Z("0","9")
C.a.h(t.a,u)
u=a1.k(0,p).l(0,o)
t=V.u(new H.q("."))
C.a.h(u.a,t)
t=a1.k(0,o).l(0,n)
u=V.Z("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).l(0,n)
t=V.Z("0","9")
C.a.h(u.a,t)
t=a1.k(0,r).l(0,m)
u=V.u(new H.q(l))
C.a.h(t.a,u)
u=a1.k(0,m).l(0,m)
t=V.u(new H.q(l))
C.a.h(u.a,t)
t=a1.k(0,r).l(0,k)
u=V.u(new H.q('"'))
C.a.h(t.a,u)
u=a1.k(0,k).l(0,j)
t=V.u(new H.q('"'))
C.a.h(u.a,t)
t=a1.k(0,k).l(0,i)
u=V.u(new H.q("\\"))
C.a.h(t.a,u)
u=a1.k(0,i).l(0,k)
t=V.u(new H.q('"'))
C.a.h(u.a,t)
C.a.h(a1.k(0,k).l(0,k).a,new V.b9())
t=a1.k(0,r).l(0,h)
u=V.u(new H.q("'"))
C.a.h(t.a,u)
u=a1.k(0,h).l(0,g)
t=V.u(new H.q("'"))
C.a.h(u.a,t)
t=a1.k(0,h).l(0,f)
u=V.u(new H.q("\\"))
C.a.h(t.a,u)
u=a1.k(0,f).l(0,h)
t=V.u(new H.q("'"))
C.a.h(u.a,t)
C.a.h(a1.k(0,h).l(0,h).a,new V.b9())
t=a1.k(0,r).l(0,e)
u=V.u(new H.q("/"))
C.a.h(t.a,u)
u=a1.k(0,e).l(0,d)
t=V.u(new H.q("/"))
C.a.h(u.a,t)
t=a1.k(0,d).l(0,c)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=a1.k(0,d).l(0,d)
t=new V.am()
s=[V.as]
t.sa5(H.c([],s))
C.a.h(u.a,t)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=a1.k(0,e).l(0,b)
t=V.u(new H.q("*"))
C.a.h(u.a,t)
t=a1.k(0,b).l(0,a)
u=V.u(new H.q("*"))
C.a.h(t.a,u)
u=a1.k(0,a).l(0,b)
t=new V.am()
t.sa5(H.c([],s))
C.a.h(u.a,t)
u=V.u(new H.q("*"))
C.a.h(t.a,u)
u=a1.k(0,a).l(0,c)
t=V.u(new H.q("/"))
C.a.h(u.a,t)
t=a1.k(0,r).l(0,a0)
u=V.u(new H.q(" \n\t"))
C.a.h(t.a,u)
u=a1.k(0,a0).l(0,a0)
t=V.u(new H.q(" \n\t"))
C.a.h(u.a,t)
t=a1.k(0,p)
t.d=t.a.L("Num")
t=a1.k(0,n)
t.d=t.a.L("Num")
t=a1.k(0,m)
t.d=t.a.L("Symbol")
t=a1.k(0,j)
t.d=t.a.L("String")
t=a1.k(0,g)
t.d=t.a.L("String")
t=a1.k(0,c)
t.d=t.a.L(d)
t=a1.k(0,a0)
t.d=t.a.L(a0)
t=a1.k(0,q)
t=t.d=t.a.L(q)
u=[P.f]
t.aB(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aB(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aB(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fN.prototype={
bA:function(a){var u=this
switch(a.a){case"Builtin":u.J(a.b,"#411")
break
case"Comment":u.J(a.b,"#777")
break
case"Id":u.J(a.b,"#111")
break
case"Num":u.J(a.b,"#191")
break
case"Preprocess":u.J(a.b,"#737")
break
case"Reserved":u.J(a.b,"#119")
break
case"Symbol":u.J(a.b,"#611")
break
case"Type":u.J(a.b,"#171")
break
case"Whitespace":u.J(a.b,"#111")
break}},
bh:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.ie()
e.c=e.k(0,r)
u=e.k(0,r).l(0,q)
t=V.u(new H.q("_"))
C.a.h(u.a,t)
t=V.Z("a","z")
C.a.h(u.a,t)
t=V.Z("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).l(0,q)
u=V.u(new H.q("_"))
C.a.h(t.a,u)
u=V.Z("0","9")
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=e.k(0,r).l(0,p)
t=V.Z("0","9")
C.a.h(u.a,t)
t=e.k(0,p).l(0,p)
u=V.Z("0","9")
C.a.h(t.a,u)
u=e.k(0,p).l(0,o)
t=V.u(new H.q("."))
C.a.h(u.a,t)
t=e.k(0,o).l(0,n)
u=V.Z("0","9")
C.a.h(t.a,u)
u=e.k(0,n).l(0,n)
t=V.Z("0","9")
C.a.h(u.a,t)
t=e.k(0,r).l(0,m)
u=V.u(new H.q(l))
C.a.h(t.a,u)
u=e.k(0,m).l(0,m)
t=V.u(new H.q(l))
C.a.h(u.a,t)
t=e.k(0,r).l(0,k)
u=V.u(new H.q("/"))
C.a.h(t.a,u)
u=e.k(0,k).l(0,j)
t=V.u(new H.q("/"))
C.a.h(u.a,t)
C.a.h(e.k(0,k).l(0,m).a,new V.b9())
t=e.k(0,j).l(0,i)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,j).l(0,j)
t=new V.am()
s=[V.as]
t.sa5(H.c([],s))
C.a.h(u.a,t)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,h)
t=V.u(new H.q("#"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,h)
u=new V.am()
u.sa5(H.c([],s))
C.a.h(t.a,u)
t=V.u(new H.q("\n"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,g)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,f)
t=V.u(new H.q(" \n\t"))
C.a.h(u.a,t)
t=e.k(0,f).l(0,f)
u=V.u(new H.q(" \n\t"))
C.a.h(t.a,u)
u=e.k(0,p)
u.d=u.a.L("Num")
u=e.k(0,n)
u.d=u.a.L("Num")
u=e.k(0,m)
u.d=u.a.L("Symbol")
u=e.k(0,i)
u.d=u.a.L(j)
u=e.k(0,g)
u.d=u.a.L(h)
u=e.k(0,f)
u.d=u.a.L(f)
u=e.k(0,q)
u=u.d=u.a.L(q)
t=[P.f]
u.aB(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aB(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aB(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fO.prototype={
bA:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.J(a.b,"#911")
u.J("=",t)
break
case"Id":u.J(a.b,t)
break
case"Other":u.J(a.b,t)
break
case"Reserved":u.J(a.b,"#119")
break
case"String":u.J(a.b,"#171")
break
case"Symbol":u.J(a.b,"#616")
break}},
bh:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.ie()
l.c=l.k(0,s)
u=l.k(0,s).l(0,r)
t=V.u(new H.q("_"))
C.a.h(u.a,t)
t=V.Z("a","z")
C.a.h(u.a,t)
t=V.Z("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).l(0,r)
u=V.u(new H.q("_"))
C.a.h(t.a,u)
u=V.Z("0","9")
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=l.k(0,r).l(0,q)
t=V.u(new H.q("="))
C.a.h(u.a,t)
u.c=!0
u=l.k(0,s).l(0,p)
t=V.u(new H.q("</\\-!>="))
C.a.h(u.a,t)
t=l.k(0,p).l(0,p)
u=V.u(new H.q("</\\-!>="))
C.a.h(t.a,u)
u=l.k(0,s).l(0,o)
t=V.u(new H.q('"'))
C.a.h(u.a,t)
t=l.k(0,o).l(0,n)
u=V.u(new H.q('"'))
C.a.h(t.a,u)
u=l.k(0,o).l(0,"EscStr")
t=V.u(new H.q("\\"))
C.a.h(u.a,t)
t=l.k(0,"EscStr").l(0,o)
u=V.u(new H.q('"'))
C.a.h(t.a,u)
C.a.h(l.k(0,o).l(0,o).a,new V.b9())
C.a.h(l.k(0,s).l(0,m).a,new V.b9())
u=l.k(0,m).l(0,m)
t=new V.am()
t.sa5(H.c([],[V.as]))
C.a.h(u.a,t)
u=V.u(new H.q('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=l.k(0,p)
u.d=u.a.L("Symbol")
u=l.k(0,n)
u.d=u.a.L("String")
u=l.k(0,r)
t=u.a.L(r)
u.d=t
t.aB(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
t=l.k(0,q)
t.d=t.a.L(q)
t=l.k(0,m)
t.d=t.a.L(m)
return l}}
V.hw.prototype={
e5:function(a,b){H.m(b,"$ib",[P.f],"$ab")
this.sbR(H.c([],[[P.b,W.aA]]))
this.J(C.a.l(b,"\n"),"#111")},
bA:function(a){},
bh:function(){return}}
V.hO.prototype={
ez:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.o
W.a6(q,"scroll",H.n(new V.hQ(o),{func:1,ret:-1,args:[r]}),!1,r)},
dm:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.f],"$ab")
this.hy()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.ed(C.a.iD(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.B)(s),++q){p=s[q]
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
if(H.nd(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.l(m,1)
l.href=H.H(m[1])
l.textContent=H.H(m[0])
t.appendChild(l)}else{k=P.lc(C.w,n,C.m,!1)
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
eh:function(a){var u,t,s,r=new V.fs("dart")
r.ba("dart")
u=new V.fN("glsl")
u.ba("glsl")
t=new V.fO("html")
t.ba("html")
s=C.a.iy(H.c([r,u,t],[V.br]),new V.hR(a))
if(s!=null)return s
r=new V.hw("plain")
r.ba("plain")
return r},
dl:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.m(b0,"$ib",[P.f],"$ab")
u=H.c([],[P.D])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.ki(r).bH(r,"+")){C.a.W(b0,s,C.i.b8(r,1))
C.a.h(u,1)
t=!0}else if(C.i.bH(r,"-")){C.a.W(b0,s,C.i.b8(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eh(a8)
q.e5(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.lc(C.w,a7,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.kt()
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.B)(r),++a0)C.T.ik(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.B)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gP(r);a3.u();)c.appendChild(a3.gE(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
hy:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.ie()
u.c=u.k(0,q)
t=u.k(0,q).l(0,p)
s=V.u(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).l(0,p)
s=new V.am()
r=[V.as]
s.sa5(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,p).l(0,"BoldEnd")
s=V.u(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,o)
s=V.u(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,o).l(0,o)
s=new V.am()
s.sa5(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("_"))
C.a.h(s.a,t)
t=u.k(0,o).l(0,n)
s=V.u(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,m)
s=V.u(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,m).l(0,m)
s=new V.am()
s.sa5(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("`"))
C.a.h(s.a,t)
t=u.k(0,m).l(0,"CodeEnd")
s=V.u(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,l)
s=V.u(new H.q("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,l).l(0,k)
s=V.u(new H.q("|"))
C.a.h(t.a,s)
s=u.k(0,l).l(0,j)
t=V.u(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,l).l(0,l)
t=new V.am()
t.sa5(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("|]"))
C.a.h(t.a,s)
s=u.k(0,k).l(0,j)
t=V.u(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).l(0,k)
t=new V.am()
t.sa5(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).l(0,i).a,new V.b9())
s=u.k(0,i).l(0,i)
t=new V.am()
t.sa5(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.L(p)
s=u.k(0,n)
s.d=s.a.L(o)
s=u.k(0,"CodeEnd")
s.d=s.a.L(m)
s=u.k(0,j)
s.d=s.a.L("Link")
s=u.k(0,i)
s.d=s.a.L(i)
this.b=u}}
V.hQ.prototype={
$1:function(a){P.l_(C.n,new V.hP(this.a))},
$S:12}
V.hP.prototype={
$0:function(){var u=C.j.ak(document.documentElement.scrollTop),t=this.a.style,s=H.k(-0.01*u)+"px"
t.top=s},
$S:2}
V.hR.prototype={
$1:function(a){return H.j(a,"$ibr").a===this.a},
$S:41}
Q.jI.prototype={
$1:function(a){var u,t,s,r
H.j(a,"$ix")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.dl("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.dl("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:7};(function aliases(){var u=J.a.prototype
u.ep=u.i
u=J.dt.prototype
u.er=u.i
u=P.d.prototype
u.eq=u.bF
u=W.T.prototype
u.bI=u.ae
u=W.eH.prototype
u.eu=u.ap
u=O.cq.prototype
u.cK=u.ao
u=O.aU.prototype
u.cL=u.ao
u=V.dA.prototype
u.es=u.az
u.cJ=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"mM","mt",9)
u(P,"mN","mu",9)
u(P,"mO","mv",9)
t(P,"ll","mK",3)
s(W,"mY",4,null,["$4"],["mx"],22,0)
s(W,"mZ",4,null,["$4"],["my"],22,0)
var m
r(m=E.af.prototype,"ge3",0,0,null,["$1","$0"],["e4","iN"],0,0)
r(m,"ge1",0,0,null,["$1","$0"],["e2","iK"],0,0)
q(m,"giI","iJ",5)
q(m,"giL","iM",5)
r(m=E.e_.prototype,"gcO",0,0,null,["$1","$0"],["cQ","cP"],0,0)
p(m,"giY","e7",3)
o(m=X.e6.prototype,"gfK","fL",10)
o(m,"gfu","fv",10)
o(m,"gfE","fF",4)
o(m,"gfO","fP",21)
o(m,"gfM","fN",21)
o(m,"gfS","fT",4)
o(m,"gfW","fX",4)
o(m,"gfI","fJ",4)
o(m,"gfU","fV",4)
o(m,"gfG","fH",4)
o(m,"gfY","fZ",43)
o(m,"gh_","h0",10)
o(m,"ghf","hg",11)
o(m,"ghb","hc",11)
o(m,"ghd","he",11)
r(D.bt.prototype,"geD",0,0,null,["$1","$0"],["ar","eE"],0,0)
r(m=D.dv.prototype,"gd7",0,0,null,["$1","$0"],["d8","fQ"],0,0)
o(m,"gh1","h2",30)
q(m,"gfn","fo",23)
q(m,"gh5","h6",23)
n(V.V.prototype,"gm","cr",24)
n(V.R.prototype,"gm","cr",24)
r(m=U.cn.prototype,"gaH",0,0,null,["$1","$0"],["M","a4"],0,0)
q(m,"gfl","fm",25)
q(m,"gh3","h4",25)
r(m=U.e7.prototype,"gaH",0,0,null,["$1","$0"],["M","a4"],0,0)
o(m,"gbU","bV",1)
o(m,"gbW","bX",1)
o(m,"gbY","bZ",1)
r(m=U.e8.prototype,"gaH",0,0,null,["$1","$0"],["M","a4"],0,0)
o(m,"gbU","bV",1)
o(m,"gbW","bX",1)
o(m,"gbY","bZ",1)
o(m,"gff","fg",1)
o(m,"gfh","fi",1)
o(m,"ghL","hM",1)
o(m,"ghJ","hK",1)
o(m,"ghH","hI",1)
o(U.e9.prototype,"gfj","fk",1)
r(m=M.df.prototype,"gX",0,0,null,["$1","$0"],["Y","aS"],0,0)
q(m,"gh7","h8",26)
q(m,"gh9","ha",26)
r(M.dh.prototype,"gX",0,0,null,["$1","$0"],["Y","aS"],0,0)
r(m=M.dl.prototype,"gX",0,0,null,["$1","$0"],["Y","aS"],0,0)
q(m,"gfA","fB",5)
q(m,"gfC","fD",5)
r(m=O.dB.prototype,"gaI",0,0,null,["$1","$0"],["S","aT"],0,0)
r(m,"ghn",0,0,null,["$1","$0"],["de","ho"],0,0)
q(m,"gfp","fq",27)
q(m,"gfs","ft",27)
r(O.cq.prototype,"gaI",0,0,null,["$1","$0"],["S","aT"],0,0)
r(O.dP.prototype,"gaI",0,0,null,["$1","$0"],["S","aT"],0,0)
r(X.dJ.prototype,"gfw",0,0,null,["$1","$0"],["an","fz"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.S,null)
s(P.S,[H.jZ,J.a,J.ak,P.eu,P.d,H.cp,P.aQ,H.bR,H.e5,H.ik,P.bv,H.cf,H.eM,P.a9,H.fZ,H.h_,H.fV,P.eS,P.b8,P.aC,P.ed,P.hY,P.cC,P.hZ,P.b3,P.ae,P.ju,P.ji,P.c0,P.et,P.w,P.cg,P.fR,P.js,P.O,P.az,P.a8,P.bu,P.hu,P.dS,P.el,P.fL,P.bw,P.b,P.Q,P.N,P.ao,P.f,P.bh,W.fo,W.bF,W.C,W.dH,W.eH,W.jn,W.dn,W.au,W.jh,W.eY,P.eX,P.jc,O.a1,O.cr,E.fh,E.af,E.hC,E.e_,Z.eb,Z.ec,Z.cd,Z.by,Z.b6,D.fk,D.bQ,D.x,X.de,X.du,X.fX,X.h1,X.at,X.hi,X.ig,X.e6,D.bt,D.a2,D.dK,D.dR,D.dX,D.dY,D.dZ,V.a3,V.aF,V.fC,V.dD,V.al,V.a5,V.ag,V.bg,V.dM,V.V,V.R,U.e7,U.e8,U.e9,M.dh,M.dl,M.av,A.da,A.fc,A.h9,A.cI,A.cM,A.cK,A.cN,A.cL,A.cO,A.bP,A.e2,A.iu,F.a4,F.bc,F.bC,F.dO,F.hL,F.hM,F.hN,F.ax,F.iE,F.iF,F.iI,F.iJ,O.bD,O.cq,T.i8,V.b9,V.as,V.dA,V.hB,V.hK,V.cA,V.e0,V.cG,V.id,X.bN,X.cD,X.fS,X.dJ,V.br,V.hO])
s(J.a,[J.fU,J.dr,J.dt,J.aR,J.ds,J.bT,H.cu,W.e,W.f9,W.db,W.ce,W.aM,W.aN,W.U,W.ef,W.ft,W.fu,W.eh,W.dk,W.ej,W.fw,W.o,W.em,W.aP,W.fP,W.ep,W.bx,W.dy,W.hc,W.ev,W.ew,W.aW,W.ex,W.eA,W.aY,W.eE,W.eG,W.b0,W.eI,W.b1,W.eN,W.aG,W.eQ,W.ic,W.b4,W.eT,W.ii,W.iz,W.eZ,W.f0,W.f2,W.f4,W.f6,P.bb,P.er,P.be,P.eC,P.hz,P.eO,P.bi,P.eV,P.fd,P.ee,P.dc,P.dL,P.bZ,P.dN,P.dU,P.e3,P.eK])
s(J.dt,[J.hv,J.cP,J.bB])
t(J.jY,J.aR)
s(J.ds,[J.dq,J.dp])
t(P.h0,P.eu)
s(P.h0,[H.e4,W.iU,W.ai,P.fH])
t(H.q,H.e4)
s(P.d,[H.fz,H.h4,H.cQ])
s(H.fz,[H.bU,H.dw])
s(P.aQ,[H.h5,H.iN])
t(H.h6,H.bU)
s(P.bv,[H.hr,H.fW,H.ix,H.im,H.fj,H.hI,P.fb,P.dI,P.aE,P.iy,P.iw,P.cB,P.fm,P.fr])
s(H.cf,[H.jM,H.i4,H.jE,H.jF,H.jG,P.iQ,P.iP,P.iR,P.iS,P.jr,P.jq,P.j_,P.j3,P.j0,P.j1,P.j2,P.j6,P.j7,P.j5,P.j4,P.i_,P.i0,P.jy,P.jf,P.je,P.jg,P.h3,P.fx,P.fy,W.fA,W.he,W.hg,W.hH,W.hX,W.iZ,W.hq,W.hp,W.jj,W.jk,W.jp,W.jt,P.jA,P.fI,P.fJ,P.ff,E.hD,E.hE,E.hF,E.ib,D.fD,D.fE,F.jv,F.iL,F.iK,F.iG,F.iH,T.ia,T.i9,V.jL,V.hQ,V.hP,V.hR,Q.jI])
s(H.i4,[H.hV,H.cb])
t(H.iO,P.fb)
t(P.h2,P.a9)
s(P.h2,[H.aS,W.iT])
t(H.dE,H.cu)
s(H.dE,[H.cU,H.cW])
t(H.cV,H.cU)
t(H.ct,H.cV)
t(H.cX,H.cW)
t(H.dF,H.cX)
s(H.dF,[H.hj,H.hk,H.hl,H.hm,H.hn,H.dG,H.ho])
t(P.jd,P.ju)
t(P.jb,P.ji)
t(P.ch,P.hZ)
t(P.fB,P.cg)
s(P.ch,[P.fQ,P.iB])
t(P.iA,P.fB)
s(P.a8,[P.A,P.D])
s(P.aE,[P.bY,P.fT])
s(W.e,[W.E,W.fG,W.b_,W.cY,W.b2,W.aH,W.d_,W.iM,W.cR,P.fg,P.bM])
s(W.E,[W.T,W.bq,W.cS])
s(W.T,[W.t,P.p])
s(W.t,[W.d9,W.fa,W.ca,W.bp,W.bO,W.aA,W.fK,W.co,W.hJ,W.c_,W.dT,W.i2,W.i3,W.cE])
s(W.aM,[W.ci,W.fp,W.fq])
t(W.fn,W.aN)
t(W.cj,W.ef)
t(W.ei,W.eh)
t(W.dj,W.ei)
t(W.ek,W.ej)
t(W.fv,W.ek)
t(W.aO,W.db)
t(W.en,W.em)
t(W.fF,W.en)
t(W.eq,W.ep)
t(W.bS,W.eq)
t(W.bE,W.o)
s(W.bE,[W.aT,W.aa,W.aI])
t(W.hd,W.ev)
t(W.hf,W.ew)
t(W.ey,W.ex)
t(W.hh,W.ey)
t(W.eB,W.eA)
t(W.cv,W.eB)
t(W.eF,W.eE)
t(W.hx,W.eF)
t(W.hG,W.eG)
t(W.cZ,W.cY)
t(W.hS,W.cZ)
t(W.eJ,W.eI)
t(W.hT,W.eJ)
t(W.hW,W.eN)
t(W.eR,W.eQ)
t(W.i5,W.eR)
t(W.d0,W.d_)
t(W.i6,W.d0)
t(W.eU,W.eT)
t(W.ih,W.eU)
t(W.b7,W.aa)
t(W.f_,W.eZ)
t(W.iV,W.f_)
t(W.eg,W.dk)
t(W.f1,W.f0)
t(W.j8,W.f1)
t(W.f3,W.f2)
t(W.ez,W.f3)
t(W.f5,W.f4)
t(W.jl,W.f5)
t(W.f7,W.f6)
t(W.jm,W.f7)
t(W.iW,W.iT)
t(W.iX,P.hY)
t(W.k6,W.iX)
t(W.iY,P.cC)
t(W.jo,W.eH)
t(P.an,P.jc)
t(P.es,P.er)
t(P.fY,P.es)
t(P.eD,P.eC)
t(P.hs,P.eD)
t(P.cy,P.p)
t(P.eP,P.eO)
t(P.i1,P.eP)
t(P.eW,P.eV)
t(P.ij,P.eW)
t(P.fe,P.ee)
t(P.ht,P.bM)
t(P.eL,P.eK)
t(P.hU,P.eL)
s(E.fh,[Z.dd,A.cz,T.cF])
s(D.x,[D.bz,D.bA,D.K,X.hy])
s(X.hy,[X.dz,X.bd,X.cs,X.e1])
s(O.a1,[D.dv,U.cn,M.df])
s(D.fk,[U.fl,U.ab])
t(U.dg,U.ab)
s(A.cz,[A.dC,A.dQ])
s(A.e2,[A.M,A.iq,A.ir,A.it,A.io,A.a_,A.ip,A.J,A.is,A.iv,A.cJ,A.ap,A.ah,A.ac])
s(O.bD,[O.dB,O.dP])
s(O.cq,[O.h7,O.h8,O.aU])
s(O.aU,[O.ha,O.hb])
s(T.cF,[T.dV,T.dW])
t(T.i7,T.dV)
s(V.dA,[V.am,V.cH])
t(X.fM,X.cD)
s(V.br,[V.fs,V.fN,V.fO,V.hw])
u(H.e4,H.e5)
u(H.cU,P.w)
u(H.cV,H.bR)
u(H.cW,P.w)
u(H.cX,H.bR)
u(P.eu,P.w)
u(W.ef,W.fo)
u(W.eh,P.w)
u(W.ei,W.C)
u(W.ej,P.w)
u(W.ek,W.C)
u(W.em,P.w)
u(W.en,W.C)
u(W.ep,P.w)
u(W.eq,W.C)
u(W.ev,P.a9)
u(W.ew,P.a9)
u(W.ex,P.w)
u(W.ey,W.C)
u(W.eA,P.w)
u(W.eB,W.C)
u(W.eE,P.w)
u(W.eF,W.C)
u(W.eG,P.a9)
u(W.cY,P.w)
u(W.cZ,W.C)
u(W.eI,P.w)
u(W.eJ,W.C)
u(W.eN,P.a9)
u(W.eQ,P.w)
u(W.eR,W.C)
u(W.d_,P.w)
u(W.d0,W.C)
u(W.eT,P.w)
u(W.eU,W.C)
u(W.eZ,P.w)
u(W.f_,W.C)
u(W.f0,P.w)
u(W.f1,W.C)
u(W.f2,P.w)
u(W.f3,W.C)
u(W.f4,P.w)
u(W.f5,W.C)
u(W.f6,P.w)
u(W.f7,W.C)
u(P.er,P.w)
u(P.es,W.C)
u(P.eC,P.w)
u(P.eD,W.C)
u(P.eO,P.w)
u(P.eP,W.C)
u(P.eV,P.w)
u(P.eW,W.C)
u(P.ee,P.a9)
u(P.eK,P.w)
u(P.eL,W.C)})();(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bp.prototype
C.l=W.bO.prototype
C.J=W.aA.prototype
C.M=J.a.prototype
C.a=J.aR.prototype
C.N=J.dp.prototype
C.h=J.dq.prototype
C.o=J.dr.prototype
C.j=J.ds.prototype
C.i=J.bT.prototype
C.O=J.bB.prototype
C.S=W.cv.prototype
C.x=J.hv.prototype
C.b=P.bZ.prototype
C.T=W.c_.prototype
C.y=W.dT.prototype
C.r=J.cP.prototype
C.z=W.b7.prototype
C.A=W.cR.prototype
C.u=function getTagFallback(o) {
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
C.v=function(hooks) { return hooks; }

C.H=new P.hu()
C.m=new P.iA()
C.I=new P.iB()
C.k=new P.jd()
C.c=new A.bP(0,"ColorSourceType.None")
C.f=new A.bP(1,"ColorSourceType.Solid")
C.d=new A.bP(2,"ColorSourceType.Texture2D")
C.e=new A.bP(3,"ColorSourceType.TextureCube")
C.n=new P.bu(0)
C.K=new P.bu(5e6)
C.L=new P.fR("element",!0,!1,!1,!1)
C.P=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.Q=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.R=H.c(u([]),[P.f])
C.w=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.D])
C.p=H.c(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.q=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])})()
var v={mangledGlobalNames:{D:"int",A:"double",a8:"num",f:"String",O:"bool",N:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.x]},{func:1,ret:-1,args:[D.x]},{func:1,ret:P.N},{func:1,ret:-1},{func:1,ret:-1,args:[W.aa]},{func:1,ret:-1,args:[P.D,[P.d,E.af]]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:P.N,args:[D.x]},{func:1,ret:P.N,args:[F.a4]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[W.aI]},{func:1,ret:P.N,args:[W.o]},{func:1,ret:P.N,args:[,]},{func:1,ret:P.N,args:[,,]},{func:1,ret:P.f,args:[P.D]},{func:1,ret:P.O,args:[W.E]},{func:1,args:[,]},{func:1,ret:P.O,args:[W.au]},{func:1,ret:P.O,args:[P.f]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:-1,args:[W.aT]},{func:1,ret:P.O,args:[W.T,P.f,P.f,W.bF]},{func:1,ret:-1,args:[P.D,[P.d,D.a2]]},{func:1,ret:P.A},{func:1,ret:-1,args:[P.D,[P.d,U.ab]]},{func:1,ret:-1,args:[P.D,[P.d,M.av]]},{func:1,ret:-1,args:[P.D,[P.d,V.al]]},{func:1,args:[W.o]},{func:1,ret:W.T,args:[W.E]},{func:1,ret:P.O,args:[[P.d,D.a2]]},{func:1,ret:[P.aC,,],args:[,]},{func:1,ret:P.N,args:[,],opt:[P.ao]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.N,args:[P.a8]},{func:1,args:[P.f]},{func:1,ret:P.N,args:[F.ax,P.A,P.A]},{func:1,args:[,P.f]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:P.N,args:[P.b3]},{func:1,ret:P.O,args:[V.br]},{func:1,ret:-1,args:[W.E,W.E]},{func:1,ret:-1,args:[W.b7]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aL=0
$.cc=null
$.ku=null
$.k8=!1
$.lo=null
$.lj=null
$.lt=null
$.jB=null
$.jH=null
$.kk=null
$.c1=null
$.d3=null
$.d4=null
$.k9=!1
$.a0=C.k
$.aq=[]
$.ba=null
$.jT=null
$.kA=null
$.kz=null
$.eo=P.kE(P.f,P.bw)
$.kJ=null
$.kO=null
$.cw=null
$.kV=null
$.l3=null
$.l6=null
$.l5=null
$.iC=null
$.l4=null
$.kN=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nm","lx",function(){return H.ln("_$dart_dartClosure")})
u($,"nn","kq",function(){return H.ln("_$dart_js")})
u($,"nr","ly",function(){return H.b5(H.il({
toString:function(){return"$receiver$"}}))})
u($,"ns","lz",function(){return H.b5(H.il({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nt","lA",function(){return H.b5(H.il(null))})
u($,"nu","lB",function(){return H.b5(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nx","lE",function(){return H.b5(H.il(void 0))})
u($,"ny","lF",function(){return H.b5(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nw","lD",function(){return H.b5(H.l1(null))})
u($,"nv","lC",function(){return H.b5(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nA","lH",function(){return H.b5(H.l1(void 0))})
u($,"nz","lG",function(){return H.b5(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nR","kr",function(){return P.ms()})
u($,"nT","lM",function(){return P.mk("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nS","lL",function(){return P.kF(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"nK","lK",function(){return Z.aB(0)})
u($,"nE","lI",function(){return Z.aB(511)})
u($,"nM","aK",function(){return Z.aB(1)})
u($,"nL","bm",function(){return Z.aB(2)})
u($,"nG","bl",function(){return Z.aB(4)})
u($,"nN","bn",function(){return Z.aB(8)})
u($,"nO","bo",function(){return Z.aB(16)})
u($,"nH","d7",function(){return Z.aB(32)})
u($,"nI","d8",function(){return Z.aB(64)})
u($,"nJ","lJ",function(){return Z.aB(96)})
u($,"nP","c9",function(){return Z.aB(128)})
u($,"nF","bk",function(){return Z.aB(256)})
u($,"nl","lw",function(){return new V.fC(1e-9)})
u($,"nk","P",function(){return $.lw()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cu,ArrayBufferView:H.cu,Float32Array:H.ct,Float64Array:H.ct,Int16Array:H.hj,Int32Array:H.hk,Int8Array:H.hl,Uint16Array:H.hm,Uint32Array:H.hn,Uint8ClampedArray:H.dG,CanvasPixelArray:H.dG,Uint8Array:H.ho,HTMLAudioElement:W.t,HTMLBRElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLInputElement:W.t,HTMLLIElement:W.t,HTMLLabelElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMediaElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableColElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLVideoElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,AccessibleNodeList:W.f9,HTMLAnchorElement:W.d9,HTMLAreaElement:W.fa,HTMLBaseElement:W.ca,Blob:W.db,HTMLBodyElement:W.bp,HTMLCanvasElement:W.bO,CanvasRenderingContext2D:W.ce,CDATASection:W.bq,CharacterData:W.bq,Comment:W.bq,ProcessingInstruction:W.bq,Text:W.bq,CSSNumericValue:W.ci,CSSUnitValue:W.ci,CSSPerspective:W.fn,CSSCharsetRule:W.U,CSSConditionRule:W.U,CSSFontFaceRule:W.U,CSSGroupingRule:W.U,CSSImportRule:W.U,CSSKeyframeRule:W.U,MozCSSKeyframeRule:W.U,WebKitCSSKeyframeRule:W.U,CSSKeyframesRule:W.U,MozCSSKeyframesRule:W.U,WebKitCSSKeyframesRule:W.U,CSSMediaRule:W.U,CSSNamespaceRule:W.U,CSSPageRule:W.U,CSSRule:W.U,CSSStyleRule:W.U,CSSSupportsRule:W.U,CSSViewportRule:W.U,CSSStyleDeclaration:W.cj,MSStyleCSSProperties:W.cj,CSS2Properties:W.cj,CSSImageValue:W.aM,CSSKeywordValue:W.aM,CSSPositionValue:W.aM,CSSResourceValue:W.aM,CSSURLImageValue:W.aM,CSSStyleValue:W.aM,CSSMatrixComponent:W.aN,CSSRotation:W.aN,CSSScale:W.aN,CSSSkew:W.aN,CSSTranslation:W.aN,CSSTransformComponent:W.aN,CSSTransformValue:W.fp,CSSUnparsedValue:W.fq,DataTransferItemList:W.ft,HTMLDivElement:W.aA,DOMException:W.fu,ClientRectList:W.dj,DOMRectList:W.dj,DOMRectReadOnly:W.dk,DOMStringList:W.fv,DOMTokenList:W.fw,Element:W.T,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aO,FileList:W.fF,FileWriter:W.fG,HTMLFormElement:W.fK,Gamepad:W.aP,History:W.fP,HTMLCollection:W.bS,HTMLFormControlsCollection:W.bS,HTMLOptionsCollection:W.bS,ImageData:W.bx,HTMLImageElement:W.co,KeyboardEvent:W.aT,Location:W.dy,MediaList:W.hc,MIDIInputMap:W.hd,MIDIOutputMap:W.hf,MimeType:W.aW,MimeTypeArray:W.hh,PointerEvent:W.aa,MouseEvent:W.aa,DragEvent:W.aa,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,DocumentType:W.E,Node:W.E,NodeList:W.cv,RadioNodeList:W.cv,Plugin:W.aY,PluginArray:W.hx,RTCStatsReport:W.hG,HTMLSelectElement:W.hJ,SourceBuffer:W.b_,SourceBufferList:W.hS,SpeechGrammar:W.b0,SpeechGrammarList:W.hT,SpeechRecognitionResult:W.b1,Storage:W.hW,CSSStyleSheet:W.aG,StyleSheet:W.aG,HTMLTableCellElement:W.c_,HTMLTableDataCellElement:W.c_,HTMLTableHeaderCellElement:W.c_,HTMLTableElement:W.dT,HTMLTableRowElement:W.i2,HTMLTableSectionElement:W.i3,HTMLTemplateElement:W.cE,TextTrack:W.b2,TextTrackCue:W.aH,VTTCue:W.aH,TextTrackCueList:W.i5,TextTrackList:W.i6,TimeRanges:W.ic,Touch:W.b4,TouchEvent:W.aI,TouchList:W.ih,TrackDefaultList:W.ii,CompositionEvent:W.bE,FocusEvent:W.bE,TextEvent:W.bE,UIEvent:W.bE,URL:W.iz,VideoTrackList:W.iM,WheelEvent:W.b7,Window:W.cR,DOMWindow:W.cR,Attr:W.cS,CSSRuleList:W.iV,ClientRect:W.eg,DOMRect:W.eg,GamepadList:W.j8,NamedNodeMap:W.ez,MozNamedAttrMap:W.ez,SpeechRecognitionResultList:W.jl,StyleSheetList:W.jm,SVGLength:P.bb,SVGLengthList:P.fY,SVGNumber:P.be,SVGNumberList:P.hs,SVGPointList:P.hz,SVGScriptElement:P.cy,SVGStringList:P.i1,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bi,SVGTransformList:P.ij,AudioBuffer:P.fd,AudioParamMap:P.fe,AudioTrackList:P.fg,AudioContext:P.bM,webkitAudioContext:P.bM,BaseAudioContext:P.bM,OfflineAudioContext:P.ht,WebGLBuffer:P.dc,WebGLProgram:P.dL,WebGL2RenderingContext:P.bZ,WebGLShader:P.dN,WebGLTexture:P.dU,WebGLUniformLocation:P.e3,SQLResultSetRowList:P.hU})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dE.$nativeSuperclassTag="ArrayBufferView"
H.cU.$nativeSuperclassTag="ArrayBufferView"
H.cV.$nativeSuperclassTag="ArrayBufferView"
H.ct.$nativeSuperclassTag="ArrayBufferView"
H.cW.$nativeSuperclassTag="ArrayBufferView"
H.cX.$nativeSuperclassTag="ArrayBufferView"
H.dF.$nativeSuperclassTag="ArrayBufferView"
W.cY.$nativeSuperclassTag="EventTarget"
W.cZ.$nativeSuperclassTag="EventTarget"
W.d_.$nativeSuperclassTag="EventTarget"
W.d0.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Q.lq,[])
else Q.lq([])})})()
//# sourceMappingURL=test.dart.js.map
