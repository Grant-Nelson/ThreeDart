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
a[c]=function(){a[c]=function(){H.nr(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kk"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kk"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kk(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={k3:function k3(){},
fV:function(){return new P.c2("No element")},
md:function(){return new P.c2("Too many elements")},
mc:function(){return new P.c2("Too few elements")},
q:function q(a){this.a=a},
fz:function fz(){},
bW:function bW(){},
ct:function ct(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
h7:function h7(a,b,c){this.a=a
this.b=b
this.$ti=c},
h8:function h8(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
h9:function h9(a,b,c){this.a=a
this.b=b
this.$ti=c},
cS:function cS(a,b,c){this.a=a
this.b=b
this.$ti=c},
iT:function iT(a,b,c){this.a=a
this.b=b
this.$ti=c},
bT:function bT(){},
e5:function e5(){},
e4:function e4(){},
cd:function(a){var u,t=H.H(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
n7:function(a){return v.types[H.ae(a)]},
ne:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.X(a).$iI},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aL(a)
if(typeof u!=="string")throw H.e(H.bb(a))
return u},
cA:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
c_:function(a){return H.mj(a)+H.kg(H.bK(a),0,null)},
mj:function(a){var u,t,s,r,q,p,o,n=J.X(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.M||!!n.$ibG){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cd(t.length>1&&C.j.aH(t,0)===36?C.j.b9(t,1):t)},
kU:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
mr:function(a){var u,t,s,r=H.c([],[P.C])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.E)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.bb(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.bf(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.e(H.bb(s))}return H.kU(r)},
kV:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.bb(s))
if(s<0)throw H.e(H.bb(s))
if(s>65535)return H.mr(a)}return H.kU(a)},
k5:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.bf(u,10))>>>0,56320|u&1023)}throw H.e(P.b0(a,0,1114111,null,null))},
bZ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mq:function(a){var u=H.bZ(a).getFullYear()+0
return u},
mo:function(a){var u=H.bZ(a).getMonth()+1
return u},
mk:function(a){var u=H.bZ(a).getDate()+0
return u},
ml:function(a){var u=H.bZ(a).getHours()+0
return u},
mn:function(a){var u=H.bZ(a).getMinutes()+0
return u},
mp:function(a){var u=H.bZ(a).getSeconds()+0
return u},
mm:function(a){var u=H.bZ(a).getMilliseconds()+0
return u},
F:function(a){throw H.e(H.bb(a))},
j:function(a,b){if(a==null)J.bN(a)
throw H.e(H.c8(a,b))},
c8:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,s,null)
u=H.ae(J.bN(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.Y(b,a,s,null,u)
return P.dM(b,s)},
n0:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c0(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c0(a,c,!0,b,"end",u)
return new P.aE(!0,b,"end",null)},
bb:function(a){return new P.aE(!0,a,null,null)},
mW:function(a){if(typeof a!=="number")throw H.e(H.bb(a))
return a},
e:function(a){var u
if(a==null)a=new P.dI()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lB})
u.name=""}else u.toString=H.lB
return u},
lB:function(){return J.aL(this.dartException)},
w:function(a){throw H.e(a)},
E:function(a){throw H.e(P.bv(a))},
b7:function(a){var u,t,s,r,q,p
a=H.lA(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.im(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
io:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
l4:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kO:function(a,b){return new H.hv(a,b==null?null:b.method)},
k4:function(a,b){var u=b==null,t=u?null:b.method
return new H.fY(a,t,u?null:b.receiver)},
ay:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jS(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.bf(t,16)&8191)===10)switch(s){case 438:return f.$1(H.k4(H.l(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kO(H.l(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lE()
q=$.lF()
p=$.lG()
o=$.lH()
n=$.lK()
m=$.lL()
l=$.lJ()
$.lI()
k=$.lN()
j=$.lM()
i=r.af(u)
if(i!=null)return f.$1(H.k4(H.H(u),i))
else{i=q.af(u)
if(i!=null){i.method="call"
return f.$1(H.k4(H.H(u),i))}else{i=p.af(u)
if(i==null){i=o.af(u)
if(i==null){i=n.af(u)
if(i==null){i=m.af(u)
if(i==null){i=l.af(u)
if(i==null){i=o.af(u)
if(i==null){i=k.af(u)
if(i==null){i=j.af(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kO(H.H(u),i))}}return f.$1(new H.iA(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dT()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aE(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dT()
return a},
cb:function(a){var u
if(a==null)return new H.eL(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eL(a)},
n3:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.W(0,a[u],a[t])}return b},
nd:function(a,b,c,d,e,f){H.k(a,"$iby")
switch(H.ae(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.r("Unsupported number of arguments for wrapped closure"))},
c7:function(a,b){var u
H.ae(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nd)
a.$identity=u
return u},
m5:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hZ().constructor.prototype):Object.create(new H.cg(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aM
if(typeof t!=="number")return t.p()
$.aM=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.kB(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.n7,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.kA:H.jV
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.e("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kB(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
m2:function(a,b,c,d){var u=H.jV
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kB:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.m4(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.m2(t,!r,u,b)
if(t===0){r=$.aM
if(typeof r!=="number")return r.p()
$.aM=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ch
return new Function(r+H.l(q==null?$.ch=H.fi("self"):q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aM
if(typeof r!=="number")return r.p()
$.aM=r+1
o+=r
r="return function("+o+"){return this."
q=$.ch
return new Function(r+H.l(q==null?$.ch=H.fi("self"):q)+"."+H.l(u)+"("+o+");}")()},
m3:function(a,b,c,d){var u=H.jV,t=H.kA
switch(b?-1:a){case 0:throw H.e(H.mu("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
m4:function(a,b){var u,t,s,r,q,p,o,n=$.ch
if(n==null)n=$.ch=H.fi("self")
u=$.kz
if(u==null)u=$.kz=H.fi("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.m3(s,!q,t,b)
if(s===1){n="return function(){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+");"
u=$.aM
if(typeof u!=="number")return u.p()
$.aM=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+", "+o+");"
u=$.aM
if(typeof u!=="number")return u.p()
$.aM=u+1
return new Function(n+u+"}")()},
kk:function(a,b,c,d,e,f,g){return H.m5(a,b,H.ae(c),d,!!e,!!f,g)},
jV:function(a){return a.a},
kA:function(a){return a.c},
fi:function(a){var u,t,s,r=new H.cg("self","target","receiver","name"),q=J.k1(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
A:function(a){if(a==null)H.mS("boolean expression must not be null")
return a},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aJ(a,"String"))},
o7:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aJ(a,"double"))},
nj:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aJ(a,"num"))},
kh:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aJ(a,"bool"))},
ae:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aJ(a,"int"))},
ly:function(a,b){throw H.e(H.aJ(a,H.cd(H.H(b).substring(2))))},
nl:function(a,b){throw H.e(H.m1(a,H.cd(H.H(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.X(a)[b])return a
H.ly(a,b)},
i:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.X(a)[b]
else u=!0
if(u)return a
H.nl(a,b)},
kp:function(a){if(a==null)return a
if(!!J.X(a).$ib)return a
throw H.e(H.aJ(a,"List<dynamic>"))},
nf:function(a,b){var u
if(a==null)return a
u=J.X(a)
if(!!u.$ib)return a
if(u[b])return a
H.ly(a,b)},
ls:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ae(u)]
else return a.$S()}return},
f7:function(a,b){var u
if(typeof a=="function")return!0
u=H.ls(J.X(a))
if(u==null)return!1
return H.lj(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.kd)return a
$.kd=!0
try{if(H.f7(a,b))return a
u=H.jP(b)
t=H.aJ(a,u)
throw H.e(t)}finally{$.kd=!1}},
kl:function(a,b){if(a!=null&&!H.kj(a,b))H.w(H.aJ(a,H.jP(b)))
return a},
aJ:function(a,b){return new H.ip("TypeError: "+P.dl(a)+": type '"+H.ln(a)+"' is not a subtype of type '"+b+"'")},
m1:function(a,b){return new H.fj("CastError: "+P.dl(a)+": type '"+H.ln(a)+"' is not a subtype of type '"+b+"'")},
ln:function(a){var u,t=J.X(a)
if(!!t.$ick){u=H.ls(t)
if(u!=null)return H.jP(u)
return"Closure"}return H.c_(a)},
mS:function(a){throw H.e(new H.iU(a))},
nr:function(a){throw H.e(new P.fr(H.H(a)))},
mu:function(a){return new H.hL(a)},
lt:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bK:function(a){if(a==null)return
return a.$ti},
o8:function(a,b,c){return H.cc(a["$a"+H.l(c)],H.bK(b))},
ca:function(a,b,c,d){var u
H.H(c)
H.ae(d)
u=H.cc(a["$a"+H.l(c)],H.bK(b))
return u==null?null:u[d]},
al:function(a,b,c){var u
H.H(b)
H.ae(c)
u=H.cc(a["$a"+H.l(b)],H.bK(a))
return u==null?null:u[c]},
x:function(a,b){var u
H.ae(b)
u=H.bK(a)
return u==null?null:u[b]},
jP:function(a){return H.bJ(a,null)},
bJ:function(a,b){var u,t
H.m(b,"$ib",[P.h],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cd(a[0].name)+H.kg(a,1,b)
if(typeof a=="function")return H.cd(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ae(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.j(b,t)
return H.l(b[t])}if('func' in a)return H.mL(a,b)
if('futureOr' in a)return"FutureOr<"+H.bJ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mL:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.h]
H.m(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.j(a0,n)
p=C.j.p(p,a0[n])
m=u[q]
if(m!=null&&m!==P.O)p+=" extends "+H.bJ(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bJ(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bJ(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bJ(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.n2(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.H(b[h])
j=j+i+H.bJ(e[d],a0)+(" "+H.l(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
kg:function(a,b,c){var u,t,s,r,q,p
H.m(c,"$ib",[P.h],"$ab")
if(a==null)return""
u=new P.bk("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bJ(p,c)}return"<"+u.i(0)+">"},
cc:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ki:function(a,b,c,d){var u,t
H.H(b)
H.kp(c)
H.H(d)
if(a==null)return!1
u=H.bK(a)
t=J.X(a)
if(t[b]==null)return!1
return H.lq(H.cc(t[d],u),null,c,null)},
m:function(a,b,c,d){H.H(b)
H.kp(c)
H.H(d)
if(a==null)return a
if(H.ki(a,b,c,d))return a
throw H.e(H.aJ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cd(b.substring(2))+H.kg(c,0,null),v.mangledGlobalNames)))},
lq:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aD(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aD(a[t],b,c[t],d))return!1
return!0},
o5:function(a,b,c){return a.apply(b,H.cc(J.X(b)["$a"+H.l(c)],H.bK(b)))},
lv:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="O"||a.name==="N"||a===-1||a===-2||H.lv(u)}return!1},
kj:function(a,b){var u,t
if(a==null)return b==null||b.name==="O"||b.name==="N"||b===-1||b===-2||H.lv(b)
if(b==null||b===-1||b.name==="O"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kj(a,"type" in b?b.type:null))return!0
if('func' in b)return H.f7(a,b)}u=J.X(a).constructor
t=H.bK(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aD(u,null,b,null)},
G:function(a,b){if(a!=null&&!H.kj(a,b))throw H.e(H.aJ(a,H.jP(b)))
return a},
aD:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="O"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="O"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aD(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="N")return!0
if('func' in c)return H.lj(a,b,c,d)
if('func' in a)return c.name==="by"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aD("type" in a?a.type:l,b,s,d)
else if(H.aD(a,b,s,d))return!0
else{if(!('$i'+"cq" in t.prototype))return!1
r=t.prototype["$a"+"cq"]
q=H.cc(r,u?a.slice(1):l)
return H.aD(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.lq(H.cc(m,u),b,p,d)},
lj:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.ni(h,b,g,d)},
ni:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aD(c[s],d,a[s],b))return!1}return!0},
o6:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
ng:function(a){var u,t,s,r,q=H.H($.lu.$1(a)),p=$.jG[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jM[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.H($.lp.$2(a,q))
if(q!=null){p=$.jG[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jM[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jO(u)
$.jG[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jM[q]=u
return u}if(s==="-"){r=H.jO(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lx(a,u)
if(s==="*")throw H.e(P.l5(q))
if(v.leafTags[q]===true){r=H.jO(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lx(a,u)},
lx:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kq(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jO:function(a){return J.kq(a,!1,null,!!a.$iI)},
nh:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jO(u)
else return J.kq(u,c,null,null)},
nb:function(){if(!0===$.ko)return
$.ko=!0
H.nc()},
nc:function(){var u,t,s,r,q,p,o,n
$.jG=Object.create(null)
$.jM=Object.create(null)
H.na()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lz.$1(q)
if(p!=null){o=H.nh(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
na:function(){var u,t,s,r,q,p,o=C.B()
o=H.c6(C.C,H.c6(C.D,H.c6(C.v,H.c6(C.v,H.c6(C.E,H.c6(C.F,H.c6(C.G(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lu=new H.jJ(r)
$.lp=new H.jK(q)
$.lz=new H.jL(p)},
c6:function(a,b){return a(b)||b},
mf:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.e(new P.fM("Illegal RegExp pattern ("+String(r)+")",a))},
no:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
n1:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lA:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kt:function(a,b,c){var u=H.np(a,b,c)
return u},
np:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lA(b),'g'),H.n1(c))},
im:function im(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hv:function hv(a,b){this.a=a
this.b=b},
fY:function fY(a,b,c){this.a=a
this.b=b
this.c=c},
iA:function iA(a){this.a=a},
jS:function jS(a){this.a=a},
eL:function eL(a){this.a=a
this.b=null},
ck:function ck(){},
i8:function i8(){},
hZ:function hZ(){},
cg:function cg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ip:function ip(a){this.a=a},
fj:function fj(a){this.a=a},
hL:function hL(a){this.a=a},
iU:function iU(a){this.a=a},
aT:function aT(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
h1:function h1(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dv:function dv(a,b){this.a=a
this.$ti=b},
h2:function h2(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jJ:function jJ(a){this.a=a},
jK:function jK(a){this.a=a},
jL:function jL(a){this.a=a},
fX:function fX(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d3:function(a){return a},
bI:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.c8(b,a))},
mK:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.e(H.n0(a,b,c))
return b},
cx:function cx(){},
dE:function dE(){},
cw:function cw(){},
dF:function dF(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
hp:function hp(){},
hq:function hq(){},
dG:function dG(){},
hr:function hr(){},
cW:function cW(){},
cX:function cX(){},
cY:function cY(){},
cZ:function cZ(){},
n2:function(a){return J.kH(a?Object.keys(a):[],null)},
nk:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kq:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
f8:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.ko==null){H.nb()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.e(P.l5("Return interceptor for "+H.l(u(a,q))))}s=a.constructor
r=s==null?null:s[$.ku()]
if(r!=null)return r
r=H.ng(a)
if(r!=null)return r
if(typeof a=="function")return C.O
u=Object.getPrototypeOf(a)
if(u==null)return C.x
if(u===Object.prototype)return C.x
if(typeof s=="function"){Object.defineProperty(s,$.ku(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
me:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.jU(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.b0(a,0,4294967295,"length",null))
return J.kH(new Array(a),b)},
kH:function(a,b){return J.k1(H.c(a,[b]))},
k1:function(a){H.kp(a)
a.fixed$length=Array
return a},
X:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dq.prototype
return J.dp.prototype}if(typeof a=="string")return J.be.prototype
if(a==null)return J.dr.prototype
if(typeof a=="boolean")return J.fW.prototype
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.O)return a
return J.f8(a)},
n4:function(a){if(typeof a=="number")return J.bC.prototype
if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.O)return a
return J.f8(a)},
jH:function(a){if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.O)return a
return J.f8(a)},
jI:function(a){if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.O)return a
return J.f8(a)},
n5:function(a){if(typeof a=="number")return J.bC.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bG.prototype
return a},
n6:function(a){if(typeof a=="number")return J.bC.prototype
if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bG.prototype
return a},
km:function(a){if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bG.prototype
return a},
kn:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.O)return a
return J.f8(a)},
lT:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.n4(a).p(a,b)},
a1:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.X(a).A(a,b)},
kw:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.n6(a).v(a,b)},
lU:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.n5(a).t(a,b)},
lV:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ne(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jH(a).j(a,b)},
lW:function(a,b,c,d){return J.kn(a).ir(a,b,c,d)},
jT:function(a,b){return J.jI(a).F(a,b)},
lX:function(a,b){return J.jI(a).N(a,b)},
lY:function(a){return J.kn(a).giy(a)},
bL:function(a){return J.X(a).gI(a)},
bM:function(a){return J.jI(a).gR(a)},
bN:function(a){return J.jH(a).gl(a)},
kx:function(a){return J.jI(a).ja(a)},
lZ:function(a,b,c){return J.km(a).ba(a,b,c)},
m_:function(a){return J.km(a).jm(a)},
aL:function(a){return J.X(a).i(a)},
a:function a(){},
fW:function fW(){},
dr:function dr(){},
ds:function ds(){},
hz:function hz(){},
bG:function bG(){},
bf:function bf(){},
aF:function aF(a){this.$ti=a},
k2:function k2(a){this.$ti=a},
am:function am(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bC:function bC(){},
dq:function dq(){},
dp:function dp(){},
be:function be(){}},P={
mz:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mT()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c7(new P.iW(s),1)).observe(u,{childList:true})
return new P.iV(s,u,t)}else if(self.setImmediate!=null)return P.mU()
return P.mV()},
mA:function(a){self.scheduleImmediate(H.c7(new P.iX(H.n(a,{func:1,ret:-1})),0))},
mB:function(a){self.setImmediate(H.c7(new P.iY(H.n(a,{func:1,ret:-1})),0))},
mC:function(a){P.k9(C.n,H.n(a,{func:1,ret:-1}))},
k9:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.d.a2(a.a,1000)
return P.mI(u<0?0:u,b)},
l3:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.b5]})
u=C.d.a2(a.a,1000)
return P.mJ(u<0?0:u,b)},
mI:function(a,b){var u=new P.eR()
u.eS(a,b)
return u},
mJ:function(a,b){var u=new P.eR()
u.eT(a,b)
return u},
mD:function(a,b){var u,t,s
b.a=1
try{a.eh(new P.j6(b),new P.j7(b),null)}catch(s){u=H.ay(s)
t=H.cb(s)
P.nm(new P.j8(b,u,t))}},
le:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iaC")
if(u>=4){t=b.ca()
b.a=a.a
b.c=a.c
P.cV(b,t)}else{t=H.k(b.c,"$iba")
b.a=2
b.c=a
a.dk(t)}},
cV:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iaf")
g=g.b
r=s.a
q=s.b
g.toString
P.jB(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cV(h.a,b)}g=h.a
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
if(m){H.k(o,"$iaf")
g=g.b
r=o.a
q=o.b
g.toString
P.jB(i,i,g,r,q)
return}l=$.a0
if(l!=n)$.a0=n
else l=i
g=b.c
if(g===8)new P.jc(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jb(u,b,o).$0()}else if((g&2)!==0)new P.ja(h,u,b).$0()
if(l!=null)$.a0=l
g=u.b
if(!!J.X(g).$icq){if(g.a>=4){k=H.k(q.c,"$iba")
q.c=null
b=q.be(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.le(g,q)
return}}j=b.b
k=H.k(j.c,"$iba")
j.c=null
b=j.be(k)
g=u.a
r=u.b
if(!g){H.G(r,H.x(j,0))
j.a=4
j.c=r}else{H.k(r,"$iaf")
j.a=8
j.c=r}h.a=j
g=j}},
mO:function(a,b){if(H.f7(a,{func:1,args:[P.O,P.aq]}))return H.n(a,{func:1,ret:null,args:[P.O,P.aq]})
if(H.f7(a,{func:1,args:[P.O]}))return H.n(a,{func:1,ret:null,args:[P.O]})
throw H.e(P.jU(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mN:function(){var u,t
for(;u=$.c5,u!=null;){$.d5=null
t=u.b
$.c5=t
if(t==null)$.d4=null
u.a.$0()}},
mR:function(){$.ke=!0
try{P.mN()}finally{$.d5=null
$.ke=!1
if($.c5!=null)$.kv().$1(P.lr())}},
lm:function(a){var u=new P.ec(H.n(a,{func:1,ret:-1}))
if($.c5==null){$.c5=$.d4=u
if(!$.ke)$.kv().$1(P.lr())}else $.d4=$.d4.b=u},
mQ:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.c5
if(u==null){P.lm(a)
$.d5=$.d4
return}t=new P.ec(a)
s=$.d5
if(s==null){t.b=u
$.c5=$.d5=t}else{t.b=s.b
$.d5=s.b=t
if(t.b==null)$.d4=t}},
nm:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a0
if(C.k===u){P.jD(t,t,C.k,a)
return}u.toString
P.jD(t,t,u,H.n(u.ci(a),s))},
l2:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a0
if(u===C.k){u.toString
return P.k9(a,b)}return P.k9(a,H.n(u.ci(b),t))},
my:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b5]}
H.n(b,s)
u=$.a0
if(u===C.k){u.toString
return P.l3(a,b)}t=u.dz(b,P.b5)
$.a0.toString
return P.l3(a,H.n(t,s))},
jB:function(a,b,c,d,e){var u={}
u.a=d
P.mQ(new P.jC(u,e))},
lk:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a0
if(t===c)return d.$0()
$.a0=c
u=t
try{t=d.$0()
return t}finally{$.a0=u}},
ll:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.G(e,g)
t=$.a0
if(t===c)return d.$1(e)
$.a0=c
u=t
try{t=d.$1(e)
return t}finally{$.a0=u}},
mP:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.G(e,h)
H.G(f,i)
t=$.a0
if(t===c)return d.$2(e,f)
$.a0=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a0=u}},
jD:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.ci(d):c.iz(d,-1)
P.lm(d)},
iW:function iW(a){this.a=a},
iV:function iV(a,b,c){this.a=a
this.b=b
this.c=c},
iX:function iX(a){this.a=a},
iY:function iY(a){this.a=a},
eR:function eR(){this.c=0},
jx:function jx(a,b){this.a=a
this.b=b},
jw:function jw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ba:function ba(a,b,c,d,e){var _=this
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
j5:function j5(a,b){this.a=a
this.b=b},
j9:function j9(a,b){this.a=a
this.b=b},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
j8:function j8(a,b,c){this.a=a
this.b=b
this.c=c},
jc:function jc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jd:function jd(a){this.a=a},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
ja:function ja(a,b,c){this.a=a
this.b=b
this.c=c},
ec:function ec(a){this.a=a
this.b=null},
i1:function i1(){},
i3:function i3(a,b){this.a=a
this.b=b},
i4:function i4(a,b){this.a=a
this.b=b},
cE:function cE(){},
i2:function i2(){},
b5:function b5(){},
af:function af(a,b){this.a=a
this.b=b},
jA:function jA(){},
jC:function jC(a,b){this.a=a
this.b=b},
jj:function jj(){},
jl:function jl(a,b,c){this.a=a
this.b=b
this.c=c},
jk:function jk(a,b){this.a=a
this.b=b},
jm:function jm(a,b,c){this.a=a
this.b=b
this.c=c},
kI:function(a,b){return new H.aT([a,b])},
mg:function(a){return H.n3(a,new H.aT([null,null]))},
dw:function(a){return new P.jh([a])},
kc:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mH:function(a,b,c){var u=new P.es(a,b,[c])
u.c=a.e
return u},
mb:function(a,b,c){var u,t
if(P.kf(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.h])
C.a.h($.as,a)
try{P.mM(a,u)}finally{if(0>=$.as.length)return H.j($.as,-1)
$.as.pop()}t=P.l0(b,H.nf(u,"$id"),", ")+c
return t.charCodeAt(0)==0?t:t},
k0:function(a,b,c){var u,t
if(P.kf(a))return b+"..."+c
u=new P.bk(b)
C.a.h($.as,a)
try{t=u
t.a=P.l0(t.a,a,", ")}finally{if(0>=$.as.length)return H.j($.as,-1)
$.as.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kf:function(a){var u,t
for(u=$.as.length,t=0;t<u;++t)if(a===$.as[t])return!0
return!1},
mM:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.m(b,"$ib",[P.h],"$ab")
u=a.gR(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.B())return
r=H.l(u.gG(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.B()){if(s<=5)return
if(0>=b.length)return H.j(b,-1)
q=b.pop()
if(0>=b.length)return H.j(b,-1)
p=b.pop()}else{o=u.gG(u);++s
if(!u.B()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.j(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gG(u);++s
for(;u.B();o=n,n=m){m=u.gG(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.j(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.l(o)
q=H.l(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.j(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
kJ:function(a,b){var u,t,s=P.dw(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.E)(a),++t)s.h(0,H.G(a[t],b))
return s},
kL:function(a){var u,t={}
if(P.kf(a))return"{...}"
u=new P.bk("")
try{C.a.h($.as,a)
u.a+="{"
t.a=!0
J.lX(a,new P.h6(t,u))
u.a+="}"}finally{if(0>=$.as.length)return H.j($.as,-1)
$.as.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jh:function jh(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c4:function c4(a){this.a=a
this.c=this.b=null},
es:function es(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
h3:function h3(){},
v:function v(){},
h5:function h5(){},
h6:function h6(a,b){this.a=a
this.b=b},
aa:function aa(){},
jo:function jo(){},
et:function et(){},
cl:function cl(){},
cm:function cm(){},
fB:function fB(){},
fS:function fS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fR:function fR(a){this.a=a},
iD:function iD(){},
iE:function iE(){},
jy:function jy(a){this.b=0
this.c=a},
ma:function(a){if(a instanceof H.ck)return a.i(0)
return"Instance of '"+H.c_(a)+"'"},
mh:function(a,b,c){var u,t
H.G(b,c)
u=J.me(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.W(u,t,b)
return H.m(u,"$ib",[c],"$ab")},
kK:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bM(a);u.B();)C.a.h(s,H.G(u.gG(u),c))
if(b)return s
return H.m(J.k1(s),"$ib",t,"$ab")},
k8:function(a){var u,t,s=P.C
H.m(a,"$id",[s],"$ad")
if(a.constructor===Array){H.m(a,"$iaF",[s],"$aaF")
u=a.length
t=P.k7(0,null,u)
return H.kV(t<u?C.a.eu(a,0,t):a)}return P.mw(a,0,null)},
mw:function(a,b,c){var u,t,s
H.m(a,"$id",[P.C],"$ad")
u=J.bM(a)
for(t=0;t<b;++t)if(!u.B())throw H.e(P.b0(b,0,t,null,null))
s=[]
for(;u.B();)s.push(u.gG(u))
return H.kV(s)},
ms:function(a){return new H.fX(a,H.mf(a,!1,!0,!1))},
l0:function(a,b,c){var u=J.bM(b)
if(!u.B())return a
if(c.length===0){do a+=H.l(u.gG(u))
while(u.B())}else{a+=H.l(u.gG(u))
for(;u.B();)a=a+c+H.l(u.gG(u))}return a},
li:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.m(a,"$ib",[P.C],"$ab")
if(c===C.m){u=$.lS().b
u=u.test(b)}else u=!1
if(u)return b
t=C.I.iC(H.G(b,H.al(c,"cl",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.j(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.k5(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
m6:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
m7:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dh:function(a){if(a>=10)return""+a
return"0"+a},
kD:function(a,b){return new P.aP(1e6*b+1000*a)},
dl:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aL(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ma(a)},
m0:function(a){return new P.aE(!1,null,null,a)},
jU:function(a,b,c){return new P.aE(!0,a,b,c)},
dM:function(a,b){return new P.c0(null,null,!0,a,b,"Value not in range")},
b0:function(a,b,c,d,e){return new P.c0(b,c,!0,a,d,"Invalid value")},
k7:function(a,b,c){if(0>a||a>c)throw H.e(P.b0(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.e(P.b0(b,a,c,"end",null))
return b}return c},
k6:function(a,b){if(typeof a!=="number")return a.aE()
if(a<0)throw H.e(P.b0(a,0,null,b,null))},
Y:function(a,b,c,d,e){var u=H.ae(e==null?J.bN(b):e)
return new P.fU(u,!0,a,c,"Index out of range")},
ai:function(a){return new P.iB(a)},
l5:function(a){return new P.iz(a)},
l_:function(a){return new P.c2(a)},
bv:function(a){return new P.fm(a)},
r:function(a){return new P.ek(a)},
ks:function(a){H.nk(a)},
P:function P(){},
az:function az(a,b){this.a=a
this.b=b},
z:function z(){},
aP:function aP(a){this.a=a},
fx:function fx(){},
fy:function fy(){},
bx:function bx(){},
fb:function fb(){},
dI:function dI(){},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c0:function c0(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fU:function fU(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iB:function iB(a){this.a=a},
iz:function iz(a){this.a=a},
c2:function c2(a){this.a=a},
fm:function fm(a){this.a=a},
hy:function hy(){},
dT:function dT(){},
fr:function fr(a){this.a=a},
ek:function ek(a){this.a=a},
fM:function fM(a,b){this.a=a
this.b=b},
by:function by(){},
C:function C(){},
d:function d(){},
aS:function aS(){},
b:function b(){},
Q:function Q(){},
N:function N(){},
a9:function a9(){},
O:function O(){},
aq:function aq(){},
h:function h(){},
bk:function bk(a){this.a=a},
mZ:function(a){var u,t=J.X(a)
if(!!t.$ibz){u=t.gdG(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eW(a.data,a.height,a.width)},
mY:function(a){if(a instanceof P.eW)return{data:a.a,height:a.b,width:a.c}
return a},
bm:function(a){var u,t,s,r,q
if(a==null)return
u=P.kI(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r){q=H.H(t[r])
u.W(0,q,a[q])}return u},
mX:function(a){var u={}
a.N(0,new P.jE(u))
return u},
eW:function eW(a,b,c){this.a=a
this.b=b
this.c=c},
jE:function jE(a){this.a=a},
fI:function fI(a,b){this.a=a
this.b=b},
fJ:function fJ(){},
fK:function fK(){},
jg:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mG:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ji:function ji(){},
ap:function ap(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bg:function bg(){},
h_:function h_(){},
bi:function bi(){},
hw:function hw(){},
hD:function hD(){},
cB:function cB(){},
i5:function i5(){},
p:function p(){},
bl:function bl(){},
il:function il(){},
eq:function eq(){},
er:function er(){},
eB:function eB(){},
eC:function eC(){},
eN:function eN(){},
eO:function eO(){},
eU:function eU(){},
eV:function eV(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(a){this.a=a},
fg:function fg(){},
bO:function bO(){},
hx:function hx(){},
ed:function ed(){},
db:function db(){},
dL:function dL(){},
c1:function c1(){},
dO:function dO(){},
dV:function dV(){},
e3:function e3(){},
hY:function hY(){},
eJ:function eJ(){},
eK:function eK(){}},W={
ky:function(){var u=document.createElement("a")
return u},
jW:function(){var u=document.createElement("canvas")
return u},
m8:function(a,b,c){var u=document.body,t=(u&&C.t).ae(u,a,b,c)
t.toString
u=W.D
u=new H.cS(new W.ak(t),H.n(new W.fA(),{func:1,ret:P.P,args:[u]}),[u])
return H.k(u.gaF(u),"$iU")},
m9:function(a){H.k(a,"$if")
return"wheel"},
cp:function(a){var u,t,s,r="element tag unavailable"
try{u=J.kn(a)
t=u.geg(a)
if(typeof t==="string")r=u.geg(a)}catch(s){H.ay(s)}return r},
jf:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lg:function(a,b,c,d){var u=W.jf(W.jf(W.jf(W.jf(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a8:function(a,b,c,d,e){var u=W.lo(new W.j4(c),W.o)
if(u!=null&&!0)J.lW(a,b,u,!1)
return new W.j3(a,b,u,!1,[e])},
lf:function(a){var u=W.ky(),t=window.location
u=new W.bH(new W.jn(u,t))
u.eH(a)
return u},
mE:function(a,b,c,d){H.k(a,"$iU")
H.H(b)
H.H(c)
H.k(d,"$ibH")
return!0},
mF:function(a,b,c,d){var u,t,s
H.k(a,"$iU")
H.H(b)
H.H(c)
u=H.k(d,"$ibH").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
lh:function(){var u=P.h,t=P.kJ(C.p,u),s=H.x(C.p,0),r=H.n(new W.jv(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.ju(t,P.dw(u),P.dw(u),P.dw(u),null)
t.eR(null,new H.h9(C.p,r,[s,u]),q,null)
return t},
lo:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a0
if(u===C.k)return a
return u.dz(a,b)},
t:function t(){},
f9:function f9(){},
d8:function d8(){},
fa:function fa(){},
cf:function cf(){},
da:function da(){},
bs:function bs(){},
bQ:function bQ(){},
cj:function cj(){},
bt:function bt(){},
cn:function cn(){},
fn:function fn(){},
V:function V(){},
co:function co(){},
fo:function fo(){},
aN:function aN(){},
aO:function aO(){},
fp:function fp(){},
fq:function fq(){},
ft:function ft(){},
aA:function aA(){},
fu:function fu(){},
di:function di(){},
dj:function dj(){},
fv:function fv(){},
fw:function fw(){},
j_:function j_(a,b){this.a=a
this.b=b},
U:function U(){},
fA:function fA(){},
o:function o(){},
f:function f(){},
aQ:function aQ(){},
fG:function fG(){},
fH:function fH(){},
fL:function fL(){},
aR:function aR(){},
fQ:function fQ(){},
bU:function bU(){},
bz:function bz(){},
cs:function cs(){},
aU:function aU(){},
dx:function dx(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(a){this.a=a},
hi:function hi(){},
hj:function hj(a){this.a=a},
aX:function aX(){},
hk:function hk(){},
ab:function ab(){},
ak:function ak(a){this.a=a},
D:function D(){},
cy:function cy(){},
aZ:function aZ(){},
hB:function hB(){},
hJ:function hJ(){},
hK:function hK(a){this.a=a},
hM:function hM(){},
b1:function b1(){},
hW:function hW(){},
b2:function b2(){},
hX:function hX(){},
b3:function b3(){},
i_:function i_(){},
i0:function i0(a){this.a=a},
aG:function aG(){},
c3:function c3(){},
dU:function dU(){},
i6:function i6(){},
i7:function i7(){},
cG:function cG(){},
b4:function b4(){},
aH:function aH(){},
i9:function i9(){},
ia:function ia(){},
ie:function ie(){},
b6:function b6(){},
aI:function aI(){},
ij:function ij(){},
ik:function ik(){},
bF:function bF(){},
iC:function iC(){},
iS:function iS(){},
b9:function b9(){},
cT:function cT(){},
cU:function cU(){},
j0:function j0(){},
ef:function ef(){},
je:function je(){},
ey:function ey(){},
jr:function jr(){},
js:function js(){},
iZ:function iZ(){},
j1:function j1(a){this.a=a},
j2:function j2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kb:function kb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j3:function j3(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
j4:function j4(a){this.a=a},
bH:function bH(a){this.a=a},
B:function B(){},
dH:function dH(a){this.a=a},
ht:function ht(a){this.a=a},
hs:function hs(a,b,c){this.a=a
this.b=b
this.c=c},
eG:function eG(){},
jp:function jp(){},
jq:function jq(){},
ju:function ju(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jv:function jv(){},
jt:function jt(){},
dn:function dn(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aw:function aw(){},
jn:function jn(a,b){this.a=a
this.b=b},
eX:function eX(a){this.a=a},
jz:function jz(a){this.a=a},
ee:function ee(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
el:function el(){},
em:function em(){},
eo:function eo(){},
ep:function ep(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ez:function ez(){},
eA:function eA(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
d_:function d_(){},
d0:function d0(){},
eH:function eH(){},
eI:function eI(){},
eM:function eM(){},
eP:function eP(){},
eQ:function eQ(){},
d1:function d1(){},
d2:function d2(){},
eS:function eS(){},
eT:function eT(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){}},O={
jX:function(a){var u=new O.a2([a])
u.bc(a)
return u},
a2:function a2(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cu:function cu(){this.b=this.a=null},
dA:function dA(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ha:function ha(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dC:function dC(){},
hb:function hb(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aV:function aV(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
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
dQ:function dQ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bE:function bE(){}},E={
kG:function(){var u=new E.ag()
u.a=""
u.b=!0
u.seG(0,O.jX(E.ag))
u.y.aS(u.giX(),u.gj_())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sbK(0,null)
return u},
mt:function(a,b){var u=new E.hF(a)
u.eD(a,b)
return u},
mx:function(a,b,c,d,e){var u,t,s=J.X(a)
if(!!s.$ibQ)return E.l1(a,!0,!0,!0,!1)
u=W.jW()
t=u.style
t.width="100%"
t.height="100%"
s.gdC(a).h(0,u)
return E.l1(u,!0,!0,!0,!1)},
l1:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.e_(),j=H.k(C.l.cO(a,"webgl2",P.mg(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic1")
if(j==null)H.w(P.r("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.mt(j,a)
u=new T.ib(j)
H.ae(j.getParameter(3379))
u.c=H.ae(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.e6(a)
t=new X.fZ()
t.c=new X.av(!1,!1,!1)
t.shp(P.dw(P.C))
u.b=t
t=new X.hl(u)
t.f=0
t.r=V.bj()
t.x=V.bj()
t.ch=t.Q=1
u.c=t
t=new X.h4(u)
t.r=0
t.x=V.bj()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ii(u)
t.f=V.bj()
t.r=V.bj()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfd(H.c([],[[P.cE,P.O]]))
t=u.z
s=document
r=W.ab
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a8(s,"contextmenu",H.n(u.gfL(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a8(a,"focus",H.n(u.gfR(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a8(a,"blur",H.n(u.gfF(),o),!1,p))
t=u.z
n=W.aU
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a8(s,"keyup",H.n(u.gfV(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a8(s,"keydown",H.n(u.gfT(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a8(a,"mousedown",H.n(u.gfZ(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a8(a,"mouseup",H.n(u.gh2(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a8(a,l,H.n(u.gh0(),q),!1,r))
n=u.z
m=W.b9;(n&&C.a).h(n,W.a8(a,H.H(W.m9(a)),H.n(u.gh4(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a8(s,l,H.n(u.gfN(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a8(s,"mouseup",H.n(u.gfP(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a8(s,"pointerlockchange",H.n(u.gh6(),o),!1,p))
p=u.z
o=W.aI
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a8(a,"touchstart",H.n(u.ghm(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a8(a,"touchend",H.n(u.ghi(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a8(a,"touchmove",H.n(u.ghk(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.az(Date.now(),!1)
k.cy=0
k.dm()
return k},
fh:function fh(){},
ag:function ag(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hF:function hF(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hG:function hG(a){this.a=a},
hH:function hH(a){this.a=a},
hI:function hI(a){this.a=a},
e_:function e_(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
id:function id(a){this.a=a}},Z={
ld:function(a,b,c){var u
H.m(c,"$ib",[P.C],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.d3(c)),35044)
a.bindBuffer(b,null)
return new Z.ea(b,u)},
aB:function(a){return new Z.b8(a)},
ea:function ea(a,b){this.a=a
this.b=b},
dc:function dc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
eb:function eb(a){this.a=a},
ci:function ci(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bV:function bV(a,b,c){this.a=a
this.b=b
this.c=c},
b8:function b8(a){this.a=a}},D={
K:function(){var u=new D.bS()
u.sac(null)
u.saM(null)
u.c=null
u.d=0
return u},
fk:function fk(){},
bS:function bS(){var _=this
_.d=_.c=_.b=_.a=null},
fD:function fD(a){this.a=a},
fE:function fE(a){this.a=a},
y:function y(){this.b=null},
bA:function bA(a){this.b=null
this.$ti=a},
bB:function bB(a){this.b=null
this.$ti=a},
M:function M(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bw:function bw(){var _=this
_.d=_.c=_.b=_.a=null},
a5:function a5(){},
du:function du(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dK:function dK(){},
dS:function dS(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){}},X={dd:function dd(a,b){this.a=a
this.b=b},dt:function dt(a,b){this.a=a
this.b=b},fZ:function fZ(){var _=this
_.d=_.c=_.b=_.a=null},dy:function dy(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h4:function h4(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},av:function av(a,b,c){this.a=a
this.b=b
this.c=c},bh:function bh(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hl:function hl(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cv:function cv(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hC:function hC(){},e1:function e1(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ii:function ii(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},e6:function e6(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
k_:function(a){var u=new X.fN(),t=new V.at(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kX
if(t==null){t=V.kW(0,0,1,1)
$.kX=t}u.r=t
return u},
kQ:function(a){var u,t,s=new X.dJ()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gq().h(0,s.geU())
t=new D.M("mover",u,s.b,[U.ac])
t.b=!0
s.al(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.S().a)){s.c=1.0471975511965976
t=new D.M("fov",t,1.0471975511965976,[P.z])
t.b=!0
s.al(t)}t=s.d
if(!(Math.abs(t-0.1)<$.S().a)){s.d=0.1
t=new D.M("near",t,0.1,[P.z])
t.b=!0
s.al(t)}t=s.e
if(!(Math.abs(t-2000)<$.S().a)){s.e=2000
t=new D.M("far",t,2000,[P.z])
t.b=!0
s.al(t)}return s},
bP:function bP(){},
fN:function fN(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fT:function fT(){this.b=this.a=null},
dJ:function dJ(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cF:function cF(){}},V={
nt:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.ep(a-b,u)
return(a<0?a+u:a)+b},
W:function(a,b,c){if(a==null)return C.j.az("null",c)
return C.j.az(C.e.ei(Math.abs(a-0)<$.S().a?0:a,b),c+b+1)},
c9:function(a,b,c){var u,t,s,r,q,p
H.m(a,"$ib",[P.z],"$ab")
u=H.c([],[P.h])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.E)(a),++r){q=V.W(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.j(u,p)
C.a.W(u,p,C.j.az(u[p],s))}return u},
kr:function(a){return C.e.jj(Math.pow(2,C.N.cw(Math.log(H.mW(a))/Math.log(2))))},
bX:function(){var u=$.kN
return u==null?$.kN=V.aW(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aW:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.an(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kM:function(a,b,c){var u=c.w(0,Math.sqrt(c.C(c))),t=b.av(u),s=t.w(0,Math.sqrt(t.C(t))),r=u.av(s),q=new V.R(a.a,a.b,a.c),p=s.P(0).C(q),o=r.P(0).C(q),n=u.P(0).C(q)
return V.aW(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bj:function(){var u=$.kS
return u==null?$.kS=new V.a6(0,0):u},
kT:function(){var u=$.cz
return u==null?$.cz=new V.a4(0,0,0):u},
kW:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dN(a,b,c,d)},
cR:function(){var u=$.la
return u==null?$.la=new V.R(0,0,0):u},
lb:function(){var u=$.l9
return u==null?$.l9=new V.R(0,1,0):u},
lc:function(){var u=$.iF
return u==null?$.iF=new V.R(0,0,1):u},
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
at:function at(a,b,c,d){var _=this
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
an:function an(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a6:function a6(a,b){this.a=a
this.b=b},
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
b_:function b_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dN:function dN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
T:function T(a,b){this.a=a
this.b=b},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
Z:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.e(P.r("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.j.aH(a,0)
t=C.j.aH(b,0)
s=new V.hE()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
u:function(a){var u=new V.hN()
u.eE(a)
return u},
ih:function(){var u=new V.ig(),t=P.h
u.shN(new H.aT([t,V.cD]))
u.shQ(new H.aT([t,V.cI]))
u.c=null
return u},
bc:function bc(){},
au:function au(){},
dz:function dz(){},
ao:function ao(){this.a=null},
hE:function hE(){this.b=this.a=null},
hN:function hN(){this.a=null},
cD:function cD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e0:function e0(a,b,c){this.a=a
this.b=b
this.c=c},
cI:function cI(a){this.b=a
this.c=null},
ig:function ig(){this.c=this.b=this.a=null},
cJ:function cJ(a){this.b=a
this.a=this.c=null},
nn:function(a){P.my(C.K,new V.jQ(a))},
mv:function(a){var u=new V.hR()
u.eF(a,!0)
return u},
bu:function bu(){},
jQ:function jQ(a){this.a=a},
fs:function fs(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fO:function fO(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fP:function fP(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hA:function hA(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hR:function hR(){this.b=this.a=null},
hT:function hT(a){this.a=a},
hS:function hS(a){this.a=a},
hU:function hU(a){this.a=a}},U={
jY:function(){var u=new U.fl()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
kC:function(a){var u=new U.df()
u.a=a
return u},
fl:function fl(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
df:function df(){this.b=this.a=null},
cr:function cr(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ac:function ac(){},
e7:function e7(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
e8:function e8(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e9:function e9(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={de:function de(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},dg:function dg(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},dk:function dk(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ax:function ax(){}},A={
mi:function(a,b){var u=a.ai,t=new A.dB(b,u)
t.cT(b,u)
t.eC(a,b)
return t},
ka:function(a,b,c,d,e){var u=new A.ir(a,c,e)
u.f=d
u.si0(P.mh(d,0,P.C))
return u},
d9:function d9(a,b,c){this.a=a
this.b=b
this.c=c},
fc:function fc(a){this.a=a},
dB:function dB(a,b){var _=this
_.bk=_.dK=_.bj=_.ai=_.ap=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.e_=_.cq=_.dZ=_.bx=_.dY=_.dX=_.bw=_.bv=_.dW=_.dV=_.bu=_.bt=_.bs=_.dU=_.dT=_.br=_.dS=_.dR=_.bq=_.dQ=_.dP=_.bp=_.bo=_.dO=_.dN=_.bn=_.bm=_.dM=_.dL=_.bl=null
_.cv=_.e3=_.cu=_.e2=_.ct=_.e1=_.cs=_.e0=_.cr=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hc:function hc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ai=b4
_.bj=b5},
cK:function cK(a,b){this.b=a
this.c=b},
cO:function cO(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
cM:function cM(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cP:function cP(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
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
cQ:function cQ(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
cC:function cC(){},
bR:function bR(a,b){this.a=a
this.b=b},
dR:function dR(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
e2:function e2(){},
ix:function ix(a){this.a=a},
L:function L(a,b,c){this.a=a
this.c=b
this.d=c},
it:function it(a,b,c){this.a=a
this.c=b
this.d=c},
iu:function iu(a,b,c){this.a=a
this.c=b
this.d=c},
iw:function iw(a,b,c){this.a=a
this.c=b
this.d=c},
ir:function ir(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
is:function is(a,b,c){this.a=a
this.c=b
this.d=c},
J:function J(a,b,c){this.a=a
this.c=b
this.d=c},
iv:function iv(a,b,c){this.a=a
this.c=b
this.d=c},
iy:function iy(a,b,c){this.a=a
this.c=b
this.d=c},
cL:function cL(a,b,c){this.a=a
this.c=b
this.d=c},
ar:function ar(a,b,c){this.a=a
this.c=b
this.d=c},
ah:function ah(a,b,c){this.a=a
this.c=b
this.d=c},
ad:function ad(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ns:function(){return F.n_(15,30,0.5,1,new F.jR())},
n_:function(a,b,c,d,e){var u=F.nq(a,b,new F.jF(H.n(e,{func:1,ret:V.a4,args:[P.z]}),d,b,c))
if(u==null)return
u.au()
u.iW(new F.iM(),new F.hu())
return u},
nq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.aj,P.z,P.z]})
if(a<1)return
if(b<1)return
u=F.kZ()
t=H.c([],[F.aj])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iG(g,g,new V.at(p,0,0,1),g,g,new V.a6(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.dF(g))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.iG(g,g,new V.at(j,i,h,1),g,g,new V.a6(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.dF(g))}}u.d.it(a+1,b+1,t)
return u},
dm:function(a,b,c){var u=new F.a7(),t=a.a
if(t==null)H.w(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.w(P.r("May not create a face with vertices attached to different shapes."))
u.hE(a)
u.hF(b)
u.hG(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a9()
return u},
kZ:function(){var u=new F.dP(),t=new F.iH(u)
t.b=!1
t.si1(H.c([],[F.aj]))
u.a=t
t=new F.hQ()
t.sc8(H.c([],[F.bY]))
u.b=t
t=new F.hP(u)
t.sfk(H.c([],[F.bD]))
u.c=t
t=new F.hO(u)
t.sfe(H.c([],[F.a7]))
u.d=t
u.e=null
return u},
iG:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aj(),r=new F.iP()
r.sc8(H.c([],[F.bY]))
s.b=r
r=new F.iL()
u=[F.bD]
r.sfl(H.c([],u))
r.sfm(H.c([],u))
s.c=r
r=new F.iI()
u=[F.a7]
r.sff(H.c([],u))
r.sfg(H.c([],u))
r.sfh(H.c([],u))
s.d=r
h=$.lO()
s.e=0
r=$.aK()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bp().a)!==0?e:t
s.x=(u&$.bo().a)!==0?b:t
s.y=(u&$.bq().a)!==0?f:t
s.z=(u&$.br().a)!==0?g:t
s.Q=(u&$.lP().a)!==0?c:t
s.ch=(u&$.ce().a)!==0?i:0
s.cx=(u&$.bn().a)!==0?a:t
return s},
jR:function jR(){},
jF:function jF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a7:function a7(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fF:function fF(){},
hV:function hV(){},
bD:function bD(){},
h0:function h0(){},
iq:function iq(){},
bY:function bY(){},
dP:function dP(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hO:function hO(a){this.a=a
this.b=null},
hP:function hP(a){this.a=a
this.b=null},
hQ:function hQ(){this.b=null},
aj:function aj(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iR:function iR(a){this.a=a},
iQ:function iQ(a){this.a=a},
iH:function iH(a){this.a=a
this.c=this.b=null},
iI:function iI(){this.d=this.c=this.b=null},
iJ:function iJ(a,b){this.a=a
this.b=b},
iK:function iK(a,b){this.a=a
this.b=b},
iL:function iL(){this.c=this.b=null},
iN:function iN(){},
iM:function iM(){},
iO:function iO(){},
hu:function hu(){},
iP:function iP(){this.b=null}},T={cH:function cH(){},dW:function dW(){var _=this
_.e=_.d=_.c=_.b=_.a=null},ib:function ib(a){var _=this
_.a=a
_.e=_.d=_.c=null},ic:function ic(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},B={
lw:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="testCanvas",a6=null,a7="modifiers",a8=34067,a9=V.mv("Test 013"),b0=W.jW()
b0.className="pageLargeCanvas"
b0.id=a5
a9.a.appendChild(b0)
u=[P.h]
a9.du(H.c(["Test of sky box and cover pass."],u))
a9.du(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a5)
if(t==null)H.w(P.r("Failed to find an element with the identifier, testCanvas."))
s=E.mx(t,!0,!0,!0,!1)
r=new U.cr()
u=U.ac
r.bc(u)
r.aS(r.gfv(),r.gha())
r.e=null
r.f=V.bX()
r.r=0
q=s.r
p=new U.e8()
o=U.jY()
o.scN(0,!0)
o.scC(6.283185307179586)
o.scE(0)
o.sa7(0,0)
o.scD(100)
o.sT(0)
o.sco(0.5)
p.b=o
n=p.gaK()
o.gq().h(0,n)
o=U.jY()
o.scN(0,!0)
o.scC(6.283185307179586)
o.scE(0)
o.sa7(0,0)
o.scD(100)
o.sT(0)
o.sco(0.5)
p.c=o
o.gq().h(0,n)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
m=new X.av(!1,!1,!1)
l=p.d
p.d=m
o=[X.av]
n=new D.M(a7,l,m,o)
n.b=!0
p.M(n)
n=p.f
if(n!==!1){p.f=!1
n=new D.M("invertX",n,!1,[P.P])
n.b=!0
p.M(n)}n=p.r
if(n!==!1){p.r=!1
n=new D.M("invertY",n,!1,[P.P])
n.b=!0
p.M(n)}p.aY(q)
r.h(0,p)
q=s.r
p=new U.e7()
n=U.jY()
n.scN(0,!0)
n.scC(6.283185307179586)
n.scE(0)
n.sa7(0,0)
n.scD(100)
n.sT(0)
n.sco(0.2)
p.b=n
n.gq().h(0,p.gaK())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
m=new X.av(!0,!1,!1)
l=p.c
p.c=m
n=new D.M(a7,l,m,o)
n.b=!0
p.M(n)
p.aY(q)
r.h(0,p)
q=s.r
p=new U.e9()
p.c=0.01
p.e=p.d=0
m=new X.av(!1,!1,!1)
p.b=m
o=new D.M(a7,a6,m,o)
o.b=!0
p.M(o)
p.aY(q)
r.h(0,p)
r.h(0,U.kC(V.aW(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
k=X.kQ(r)
j=X.k_(a6)
if(j.b){j.b=!1
q=new D.M("clearColor",!0,!1,[P.P])
q.b=!0
j.al(q)}i=E.kG()
i.sbK(0,F.ns())
h=new O.dA()
h.sf1(O.jX(V.an))
h.e.aS(h.gfB(),h.gfD())
q=new O.aV(h,"emission")
q.c=C.c
q.f=new V.a3(0,0,0)
h.f=q
q=new O.aV(h,"ambient")
q.c=C.c
q.f=new V.a3(0,0,0)
h.r=q
q=new O.aV(h,"diffuse")
q.c=C.c
q.f=new V.a3(0,0,0)
h.x=q
q=new O.aV(h,"invDiffuse")
q.c=C.c
q.f=new V.a3(0,0,0)
h.y=q
q=new O.he(h,"specular")
q.c=C.c
q.f=new V.a3(0,0,0)
q.ch=100
h.z=q
q=new O.hb(h,"bump")
q.c=C.c
h.Q=q
h.ch=null
q=new O.aV(h,"reflect")
q.c=C.c
q.f=new V.a3(0,0,0)
h.cx=q
q=new O.hd(h,"refract")
q.c=C.c
q.f=new V.a3(0,0,0)
q.ch=1
h.cy=q
q=new O.ha(h,"alpha")
q.c=C.c
q.f=1
h.db=q
q=new D.du()
q.bc(D.a5)
q.sfa(H.c([],[D.bw]))
q.sho(H.c([],[D.dK]))
q.shM(H.c([],[D.dS]))
q.shY(H.c([],[D.dX]))
q.shZ(H.c([],[D.dY]))
q.si_(H.c([],[D.dZ]))
q.ch=q.Q=null
q.cQ(q.gfz(),q.gh8(),q.ghc())
h.dx=q
p=q.Q
q=p==null?q.Q=D.K():p
q.h(0,h.ghx())
q=h.dx
p=q.ch
q=p==null?q.ch=D.K():p
q.h(0,h.gbO())
h.dy=null
q=h.dx
g=V.lb()
p=U.kC(V.kM(V.kT(),g,new V.R(0,-1,-1)))
f=new V.a3(1,1,1)
o=new D.bw()
o.c=new V.a3(1,1,1)
o.a=V.lc()
l=o.b
o.b=p
p.gq().h(0,o.geJ())
u=new D.M("mover",l,o.b,[u])
u.b=!0
o.aq(u)
if(!o.c.A(0,f)){l=o.c
o.c=f
u=new D.M("color",l,f,[V.a3])
u.b=!0
o.aq(u)}q.h(0,o)
u=h.r
u.sao(0,new V.a3(0,0,1))
u=h.x
u.sao(0,new V.a3(0,1,0))
u=h.z
u.sao(0,new V.a3(1,0,0))
u=h.z
if(u.c===C.c){u.c=C.i
u.bN()
u.cb(100)
q=u.a
q.a=null
q.a1(a6)}u.cb(10)
u=s.f
q=u.a
e=q.createTexture()
q.bindTexture(a8,e)
q.texParameteri(a8,10242,10497)
q.texParameteri(a8,10243,10497)
q.texParameteri(a8,10241,9729)
q.texParameteri(a8,10240,9729)
q.bindTexture(a8,a6)
d=new T.dW()
d.a=0
d.b=e
d.c=!1
d.d=0
u.aJ(d,e,"../resources/maskonaive/posx.jpg",34069,!1,!1)
u.aJ(d,e,"../resources/maskonaive/negx.jpg",34070,!1,!1)
u.aJ(d,e,"../resources/maskonaive/posy.jpg",34071,!1,!1)
u.aJ(d,e,"../resources/maskonaive/negy.jpg",34072,!1,!1)
u.aJ(d,e,"../resources/maskonaive/posz.jpg",34073,!1,!1)
u.aJ(d,e,"../resources/maskonaive/negz.jpg",34074,!1,!1)
c=new M.dg()
c.a=!0
u=E.kG()
b=F.kZ()
q=b.a
p=new V.R(-1,-1,1)
p=p.w(0,Math.sqrt(p.C(p)))
a=q.bh(new V.b_(1,2,4,6),new V.at(1,0,0,1),new V.a4(-1,-1,0),new V.a6(0,1),p,a6)
q=b.a
p=new V.R(1,-1,1)
p=p.w(0,Math.sqrt(p.C(p)))
a0=q.bh(new V.b_(0,3,4,6),new V.at(0,0,1,1),new V.a4(1,-1,0),new V.a6(1,1),p,a6)
q=b.a
p=new V.R(1,1,1)
p=p.w(0,Math.sqrt(p.C(p)))
a1=q.bh(new V.b_(0,2,5,6),new V.at(0,1,0,1),new V.a4(1,1,0),new V.a6(1,0),p,a6)
q=b.a
p=V.bj()
o=new V.R(-1,1,1)
o=o.w(0,Math.sqrt(o.C(o)))
a2=q.bh(new V.b_(0,2,4,7),new V.at(1,1,0,1),new V.a4(-1,1,0),p,o,a6)
b.d.is(H.c([a,a0,a1,a2],[F.aj]))
b.au()
u.sbK(0,b)
c.e=u
c.saZ(a6)
c.sb4(0,a6)
c.sb5(a6)
u=new O.dQ()
u.b=1.0471975511965976
u.d=new V.a3(1,1,1)
l=u.c
u.c=d
d.gq().h(0,u.gbO())
q=new D.M("boxTexture",l,u.c,[T.dW])
q.b=!0
u.a1(q)
c.sb5(u)
c.sb4(0,j)
c.saZ(k)
a3=new M.dk()
a3.a=!0
a3.sf4(0,O.jX(E.ag))
a3.e.aS(a3.gfH(),a3.gfJ())
a3.y=a3.x=a3.r=a3.f=null
a4=X.k_(a6)
a3.saZ(a6)
a3.sb4(0,a4)
a3.sb5(a6)
a3.saZ(k)
a3.sb5(h)
a3.sb4(0,j)
a3.e.h(0,i)
u=M.ax
q=H.c([c,a3],[u])
p=new M.de()
p.bc(u)
p.e=!0
p.f=!1
p.r=null
p.aS(p.ghe(),p.ghg())
p.a5(0,q)
u=s.d
if(u!==p){if(u!=null)u.gq().O(0,s.gcV())
s.d=p
p.gq().h(0,s.gcV())
s.cW()}u=s.z
if(u==null)u=s.z=D.K()
q={func:1,ret:-1,args:[D.y]}
p=H.n(new B.jN(c,a9),q)
if(u.b==null)u.saM(H.c([],[q]))
u=u.b;(u&&C.a).h(u,p)
V.nn(s)},
jN:function jN(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.k3.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gI:function(a){return H.cA(a)},
i:function(a){return"Instance of '"+H.c_(a)+"'"}}
J.fW.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iP:1}
J.dr.prototype={
A:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.ds.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.hz.prototype={}
J.bG.prototype={}
J.bf.prototype={
i:function(a){var u=a[$.lD()]
if(u==null)return this.ex(a)
return"JavaScript function for "+H.l(J.aL(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iby:1}
J.aF.prototype={
h:function(a,b){H.G(b,H.x(a,0))
if(!!a.fixed$length)H.w(P.ai("add"))
a.push(b)},
ec:function(a,b){if(!!a.fixed$length)H.w(P.ai("removeAt"))
if(b<0||b>=a.length)throw H.e(P.dM(b,null))
return a.splice(b,1)[0]},
O:function(a,b){var u
if(!!a.fixed$length)H.w(P.ai("remove"))
for(u=0;u<a.length;++u)if(J.a1(a[u],b)){a.splice(u,1)
return!0}return!1},
a5:function(a,b){var u,t
H.m(b,"$id",[H.x(a,0)],"$ad")
if(!!a.fixed$length)H.w(P.ai("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.E)(b),++t)a.push(b[t])},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.e(P.bv(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.W(t,u,H.l(a[u]))
return t.join(b)},
iS:function(a){return this.m(a,"")},
iN:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.P,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.A(b.$1(s)))return s
if(a.length!==u)throw H.e(P.bv(a))}throw H.e(H.fV())},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
eu:function(a,b,c){var u=a.length
if(b>u)throw H.e(P.b0(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.b0(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.x(a,0)])
return H.c(a.slice(b,c),[H.x(a,0)])},
giM:function(a){if(a.length>0)return a[0]
throw H.e(H.fV())},
gbz:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.e(H.fV())},
b8:function(a,b,c,d){var u,t,s=H.x(a,0)
H.m(d,"$id",[s],"$ad")
if(!!a.immutable$list)H.w(P.ai("setRange"))
P.k7(b,c,a.length)
u=c-b
if(u===0)return
P.k6(0,"skipCount")
H.m(d,"$ib",[s],"$ab")
s=J.jH(d)
if(u>s.gl(d))throw H.e(H.mc())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
dw:function(a,b){var u,t
H.n(b,{func:1,ret:P.P,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.A(b.$1(a[t])))return!0
if(a.length!==u)throw H.e(P.bv(a))}return!1},
V:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a1(a[u],b))return!0
return!1},
i:function(a){return P.k0(a,"[","]")},
gR:function(a){return new J.am(a,a.length,[H.x(a,0)])},
gI:function(a){return H.cA(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.w(P.ai("set length"))
if(b<0)throw H.e(P.b0(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.e(H.c8(a,b))
return a[b]},
W:function(a,b,c){H.G(c,H.x(a,0))
if(!!a.immutable$list)H.w(P.ai("indexed set"))
if(b>=a.length||b<0)throw H.e(H.c8(a,b))
a[b]=c},
p:function(a,b){var u,t=[H.x(a,0)]
H.m(b,"$ib",t,"$ab")
u=C.d.p(a.length,b.gl(b))
t=H.c([],t)
this.sl(t,u)
this.b8(t,0,a.length,a)
this.b8(t,a.length,u,b)
return t},
$id:1,
$ib:1}
J.k2.prototype={}
J.am.prototype={
gG:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.E(s))
u=t.c
if(u>=r){t.sd9(null)
return!1}t.sd9(s[u]);++t.c
return!0},
sd9:function(a){this.d=H.G(a,H.x(this,0))},
$iaS:1}
J.bC.prototype={
jj:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.e(P.ai(""+a+".toInt()"))},
cw:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.e(P.ai(""+a+".floor()"))},
aj:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.ai(""+a+".round()"))},
ei:function(a,b){var u,t
if(b>20)throw H.e(P.b0(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
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
p:function(a,b){if(typeof b!=="number")throw H.e(H.bb(b))
return a+b},
t:function(a,b){if(typeof b!=="number")throw H.e(H.bb(b))
return a-b},
v:function(a,b){if(typeof b!=="number")throw H.e(H.bb(b))
return a*b},
ep:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eB:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dq(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.dq(a,b)},
dq:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.ai("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
bf:function(a,b){var u
if(a>0)u=this.hL(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hL:function(a,b){return b>31?0:a>>>b},
$iz:1,
$ia9:1}
J.dq.prototype={$iC:1}
J.dp.prototype={}
J.be.prototype={
cn:function(a,b){if(b<0)throw H.e(H.c8(a,b))
if(b>=a.length)H.w(H.c8(a,b))
return a.charCodeAt(b)},
aH:function(a,b){if(b>=a.length)throw H.e(H.c8(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.e(P.jU(b,null,null))
return a+b},
bL:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
ba:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.dM(b,null))
if(b>c)throw H.e(P.dM(b,null))
if(c>a.length)throw H.e(P.dM(c,null))
return a.substring(b,c)},
b9:function(a,b){return this.ba(a,b,null)},
jm:function(a){return a.toLowerCase()},
v:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.H)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
az:function(a,b){var u=b-a.length
if(u<=0)return a
return this.v(" ",u)+a},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ikP:1,
$ih:1}
H.q.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.j.cn(this.a,b)},
$ae5:function(){return[P.C]},
$av:function(){return[P.C]},
$ad:function(){return[P.C]},
$ab:function(){return[P.C]}}
H.fz.prototype={}
H.bW.prototype={
gR:function(a){var u=this
return new H.ct(u,u.gl(u),[H.al(u,"bW",0)])},
bI:function(a,b){return this.ew(0,H.n(b,{func:1,ret:P.P,args:[H.al(this,"bW",0)]}))}}
H.ct.prototype={
gG:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=J.jH(s),q=r.gl(s)
if(t.b!==q)throw H.e(P.bv(s))
u=t.c
if(u>=q){t.saU(null)
return!1}t.saU(r.F(s,u));++t.c
return!0},
saU:function(a){this.d=H.G(a,H.x(this,0))},
$iaS:1}
H.h7.prototype={
gR:function(a){return new H.h8(J.bM(this.a),this.b,this.$ti)},
gl:function(a){return J.bN(this.a)},
F:function(a,b){return this.b.$1(J.jT(this.a,b))},
$ad:function(a,b){return[b]}}
H.h8.prototype={
B:function(){var u=this,t=u.b
if(t.B()){u.saU(u.c.$1(t.gG(t)))
return!0}u.saU(null)
return!1},
gG:function(a){return this.a},
saU:function(a){this.a=H.G(a,H.x(this,1))},
$aaS:function(a,b){return[b]}}
H.h9.prototype={
gl:function(a){return J.bN(this.a)},
F:function(a,b){return this.b.$1(J.jT(this.a,b))},
$abW:function(a,b){return[b]},
$ad:function(a,b){return[b]}}
H.cS.prototype={
gR:function(a){return new H.iT(J.bM(this.a),this.b,this.$ti)}}
H.iT.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(H.A(t.$1(u.gG(u))))return!0
return!1},
gG:function(a){var u=this.a
return u.gG(u)}}
H.bT.prototype={}
H.e5.prototype={}
H.e4.prototype={}
H.im.prototype={
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
H.hv.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fY.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.l(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.l(t.a)+")"
return s+r+"' on '"+u+"' ("+H.l(t.a)+")"}}
H.iA.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jS.prototype={
$1:function(a){if(!!J.X(a).$ibx)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.eL.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaq:1}
H.ck.prototype={
i:function(a){return"Closure '"+H.c_(this).trim()+"'"},
$iby:1,
gjr:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i8.prototype={}
H.hZ.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cd(u)+"'"}}
H.cg.prototype={
A:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cg))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cA(this.a)
else u=typeof t!=="object"?J.bL(t):H.cA(t)
return(u^H.cA(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.c_(u)+"'")}}
H.ip.prototype={
i:function(a){return this.a}}
H.fj.prototype={
i:function(a){return this.a}}
H.hL.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.iU.prototype={
i:function(a){return"Assertion failed: "+P.dl(this.a)}}
H.aT.prototype={
gl:function(a){return this.a},
ga6:function(a){return new H.dv(this,[H.x(this,0)])},
dE:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.d6(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.d6(t,b)}else return s.iQ(b)},
iQ:function(a){var u=this.d
if(u==null)return!1
return this.cz(this.bW(u,J.bL(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bd(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bd(r,b)
s=t==null?null:t.b
return s}else return q.iR(b)},
iR:function(a){var u,t,s=this.d
if(s==null)return
u=this.bW(s,J.bL(a)&0x3ffffff)
t=this.cz(u,a)
if(t<0)return
return u[t].b},
W:function(a,b,c){var u,t,s,r,q,p,o=this
H.G(b,H.x(o,0))
H.G(c,H.x(o,1))
if(typeof b==="string"){u=o.b
o.cZ(u==null?o.b=o.c6():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cZ(t==null?o.c=o.c6():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.c6()
r=J.bL(b)&0x3ffffff
q=o.bW(s,r)
if(q==null)o.cc(s,r,[o.c7(b,c)])
else{p=o.cz(q,b)
if(p>=0)q[p].b=c
else q.push(o.c7(b,c))}}},
N:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.x(s,0),H.x(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.e(P.bv(s))
u=u.c}},
cZ:function(a,b,c){var u,t=this
H.G(b,H.x(t,0))
H.G(c,H.x(t,1))
u=t.bd(a,b)
if(u==null)t.cc(a,b,t.c7(b,c))
else u.b=c},
eW:function(){this.r=this.r+1&67108863},
c7:function(a,b){var u,t=this,s=new H.h1(H.G(a,H.x(t,0)),H.G(b,H.x(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eW()
return s},
cz:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a1(a[t].a,b))return t
return-1},
i:function(a){return P.kL(this)},
bd:function(a,b){return a[b]},
bW:function(a,b){return a[b]},
cc:function(a,b,c){a[b]=c},
f9:function(a,b){delete a[b]},
d6:function(a,b){return this.bd(a,b)!=null},
c6:function(){var u="<non-identifier-key>",t=Object.create(null)
this.cc(t,u,t)
this.f9(t,u)
return t}}
H.h1.prototype={}
H.dv.prototype={
gl:function(a){return this.a.a},
gR:function(a){var u=this.a,t=new H.h2(u,u.r,this.$ti)
t.c=u.e
return t}}
H.h2.prototype={
gG:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.bv(t))
else{t=u.c
if(t==null){u.scY(null)
return!1}else{u.scY(t.a)
u.c=u.c.c
return!0}}},
scY:function(a){this.d=H.G(a,H.x(this,0))},
$iaS:1}
H.jJ.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.jK.prototype={
$2:function(a,b){return this.a(a,b)},
$S:29}
H.jL.prototype={
$1:function(a){return this.a(H.H(a))},
$S:38}
H.fX.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikP:1}
H.cx.prototype={$inN:1}
H.dE.prototype={
gl:function(a){return a.length},
$iI:1,
$aI:function(){}}
H.cw.prototype={
j:function(a,b){H.bI(b,a,a.length)
return a[b]},
$abT:function(){return[P.z]},
$av:function(){return[P.z]},
$id:1,
$ad:function(){return[P.z]},
$ib:1,
$ab:function(){return[P.z]}}
H.dF.prototype={
$abT:function(){return[P.C]},
$av:function(){return[P.C]},
$id:1,
$ad:function(){return[P.C]},
$ib:1,
$ab:function(){return[P.C]}}
H.hm.prototype={
j:function(a,b){H.bI(b,a,a.length)
return a[b]}}
H.hn.prototype={
j:function(a,b){H.bI(b,a,a.length)
return a[b]}}
H.ho.prototype={
j:function(a,b){H.bI(b,a,a.length)
return a[b]}}
H.hp.prototype={
j:function(a,b){H.bI(b,a,a.length)
return a[b]}}
H.hq.prototype={
j:function(a,b){H.bI(b,a,a.length)
return a[b]}}
H.dG.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bI(b,a,a.length)
return a[b]},
$inO:1}
H.hr.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bI(b,a,a.length)
return a[b]}}
H.cW.prototype={}
H.cX.prototype={}
H.cY.prototype={}
H.cZ.prototype={}
P.iW.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:12}
P.iV.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:40}
P.iX.prototype={
$0:function(){this.a.$0()},
$S:2}
P.iY.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eR.prototype={
eS:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c7(new P.jx(this,b),0),a)
else throw H.e(P.ai("`setTimeout()` not found."))},
eT:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c7(new P.jw(this,a,Date.now(),b),0),a)
else throw H.e(P.ai("Periodic timer."))},
$ib5:1}
P.jx.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jw.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.eB(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.ba.prototype={
iU:function(a){if(this.c!==6)return!0
return this.b.b.cL(H.n(this.d,{func:1,ret:P.P,args:[P.O]}),a.a,P.P,P.O)},
iP:function(a){var u=this.e,t=P.O,s={futureOr:1,type:H.x(this,1)},r=this.b.b
if(H.f7(u,{func:1,args:[P.O,P.aq]}))return H.kl(r.je(u,a.a,a.b,null,t,P.aq),s)
else return H.kl(r.cL(H.n(u,{func:1,args:[P.O]}),a.a,null,t),s)}}
P.aC.prototype={
eh:function(a,b,c){var u,t,s,r=H.x(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a0
if(u!==C.k){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.mO(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aC($.a0,[c])
s=b==null?1:3
this.d_(new P.ba(t,s,a,b,[r,c]))
return t},
ji:function(a,b){return this.eh(a,null,b)},
d_:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$iba")
t.c=a}else{if(s===2){u=H.k(t.c,"$iaC")
s=u.a
if(s<4){u.d_(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.jD(null,null,s,H.n(new P.j5(t,a),{func:1,ret:-1}))}},
dk:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$iba")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iaC")
u=q.a
if(u<4){q.dk(a)
return}p.a=u
p.c=q.c}o.a=p.be(a)
u=p.b
u.toString
P.jD(null,null,u,H.n(new P.j9(o,p),{func:1,ret:-1}))}},
ca:function(){var u=H.k(this.c,"$iba")
this.c=null
return this.be(u)},
be:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d2:function(a){var u,t,s=this,r=H.x(s,0)
H.kl(a,{futureOr:1,type:r})
u=s.$ti
if(H.ki(a,"$icq",u,"$acq"))if(H.ki(a,"$iaC",u,null))P.le(a,s)
else P.mD(a,s)
else{t=s.ca()
H.G(a,r)
s.a=4
s.c=a
P.cV(s,t)}},
d3:function(a,b){var u,t=this
H.k(b,"$iaq")
u=t.ca()
t.a=8
t.c=new P.af(a,b)
P.cV(t,u)},
$icq:1}
P.j5.prototype={
$0:function(){P.cV(this.a,this.b)},
$S:2}
P.j9.prototype={
$0:function(){P.cV(this.b,this.a.a)},
$S:2}
P.j6.prototype={
$1:function(a){var u=this.a
u.a=0
u.d2(a)},
$S:12}
P.j7.prototype={
$2:function(a,b){H.k(b,"$iaq")
this.a.d3(a,b)},
$1:function(a){return this.$2(a,null)},
$S:44}
P.j8.prototype={
$0:function(){this.a.d3(this.b,this.c)},
$S:2}
P.jc.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.ef(H.n(s.d,{func:1}),null)}catch(r){u=H.ay(r)
t=H.cb(r)
if(o.d){s=H.k(o.a.a.c,"$iaf").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iaf")
else q.b=new P.af(u,t)
q.a=!0
return}if(!!J.X(n).$icq){if(n instanceof P.aC&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iaf")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.ji(new P.jd(p),null)
s.a=!1}},
$S:3}
P.jd.prototype={
$1:function(a){return this.a},
$S:34}
P.jb.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.x(s,0)
q=H.G(n.c,r)
p=H.x(s,1)
n.a.b=s.b.b.cL(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ay(o)
t=H.cb(o)
s=n.a
s.b=new P.af(u,t)
s.a=!0}},
$S:3}
P.ja.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iaf")
r=m.c
if(H.A(r.iU(u))&&r.e!=null){q=m.b
q.b=r.iP(u)
q.a=!1}}catch(p){t=H.ay(p)
s=H.cb(p)
r=H.k(m.a.a.c,"$iaf")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.af(t,s)
n.a=!0}},
$S:3}
P.ec.prototype={}
P.i1.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.aC($.a0,[P.C])
r.a=0
u=H.x(s,0)
t=H.n(new P.i3(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.i4(r,q),{func:1,ret:-1})
W.a8(s.a,s.b,t,!1,u)
return q}}
P.i3.prototype={
$1:function(a){H.G(a,H.x(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.x(this.b,0)]}}}
P.i4.prototype={
$0:function(){this.b.d2(this.a.a)},
$S:2}
P.cE.prototype={}
P.i2.prototype={}
P.b5.prototype={}
P.af.prototype={
i:function(a){return H.l(this.a)},
$ibx:1}
P.jA.prototype={$io1:1}
P.jC.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dI():s
s=this.b
if(s==null)throw H.e(t)
u=H.e(t)
u.stack=s.i(0)
throw u},
$S:2}
P.jj.prototype={
jf:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.k===$.a0){a.$0()
return}P.lk(r,r,this,a,-1)}catch(s){u=H.ay(s)
t=H.cb(s)
P.jB(r,r,this,u,H.k(t,"$iaq"))}},
jg:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.G(b,c)
try{if(C.k===$.a0){a.$1(b)
return}P.ll(r,r,this,a,b,-1,c)}catch(s){u=H.ay(s)
t=H.cb(s)
P.jB(r,r,this,u,H.k(t,"$iaq"))}},
iz:function(a,b){return new P.jl(this,H.n(a,{func:1,ret:b}),b)},
ci:function(a){return new P.jk(this,H.n(a,{func:1,ret:-1}))},
dz:function(a,b){return new P.jm(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
ef:function(a,b){H.n(a,{func:1,ret:b})
if($.a0===C.k)return a.$0()
return P.lk(null,null,this,a,b)},
cL:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.G(b,d)
if($.a0===C.k)return a.$1(b)
return P.ll(null,null,this,a,b,c,d)},
je:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.G(b,e)
H.G(c,f)
if($.a0===C.k)return a.$2(b,c)
return P.mP(null,null,this,a,b,c,d,e,f)}}
P.jl.prototype={
$0:function(){return this.a.ef(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jk.prototype={
$0:function(){return this.a.jf(this.b)},
$S:3}
P.jm.prototype={
$1:function(a){var u=this.c
return this.a.jg(this.b,H.G(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jh.prototype={
gR:function(a){var u=this,t=new P.es(u,u.r,u.$ti)
t.c=u.e
return t},
gl:function(a){return this.a},
V:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.k(u[b],"$ic4")!=null}else{t=this.f5(b)
return t}},
f5:function(a){var u=this.d
if(u==null)return!1
return this.bU(this.da(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.G(b,H.x(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.d0(u==null?s.b=P.kc():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.d0(t==null?s.c=P.kc():t,b)}else return s.eX(0,b)},
eX:function(a,b){var u,t,s,r=this
H.G(b,H.x(r,0))
u=r.d
if(u==null)u=r.d=P.kc()
t=r.d4(b)
s=u[t]
if(s==null)u[t]=[r.bR(b)]
else{if(r.bU(s,b)>=0)return!1
s.push(r.bR(b))}return!0},
O:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hr(this.c,b)
else return this.hq(0,b)},
hq:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.da(r,b)
t=s.bU(u,b)
if(t<0)return!1
s.dr(u.splice(t,1)[0])
return!0},
d0:function(a,b){H.G(b,H.x(this,0))
if(H.k(a[b],"$ic4")!=null)return!1
a[b]=this.bR(b)
return!0},
hr:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$ic4")
if(u==null)return!1
this.dr(u)
delete a[b]
return!0},
dd:function(){this.r=1073741823&this.r+1},
bR:function(a){var u,t=this,s=new P.c4(H.G(a,H.x(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dd()
return s},
dr:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dd()},
d4:function(a){return J.bL(a)&1073741823},
da:function(a,b){return a[this.d4(b)]},
bU:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a1(a[t].a,b))return t
return-1}}
P.c4.prototype={}
P.es.prototype={
gG:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.bv(t))
else{t=u.c
if(t==null){u.sd1(null)
return!1}else{u.sd1(H.G(t.a,H.x(u,0)))
u.c=u.c.b
return!0}}},
sd1:function(a){this.d=H.G(a,H.x(this,0))},
$iaS:1}
P.h3.prototype={$id:1,$ib:1}
P.v.prototype={
gR:function(a){return new H.ct(a,this.gl(a),[H.ca(this,a,"v",0)])},
F:function(a,b){return this.j(a,b)},
jl:function(a,b){var u,t=this,s=H.c([],[H.ca(t,a,"v",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.W(s,u,t.j(a,u))
return s},
jk:function(a){return this.jl(a,!0)},
p:function(a,b){var u,t=this,s=[H.ca(t,a,"v",0)]
H.m(b,"$ib",s,"$ab")
u=H.c([],s)
C.a.sl(u,C.d.p(t.gl(a),b.gl(b)))
C.a.b8(u,0,t.gl(a),a)
C.a.b8(u,t.gl(a),u.length,b)
return u},
i:function(a){return P.k0(a,"[","]")}}
P.h5.prototype={}
P.h6.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.l(a)
t.a=u+": "
t.a+=H.l(b)},
$S:27}
P.aa.prototype={
N:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.ca(s,a,"aa",0),H.ca(s,a,"aa",1)]})
for(u=J.bM(s.ga6(a));u.B();){t=u.gG(u)
b.$2(t,s.j(a,t))}},
gl:function(a){return J.bN(this.ga6(a))},
i:function(a){return P.kL(a)},
$iQ:1}
P.jo.prototype={
a5:function(a,b){var u
for(u=J.bM(H.m(b,"$id",this.$ti,"$ad"));u.B();)this.h(0,u.gG(u))},
i:function(a){return P.k0(this,"{","}")},
F:function(a,b){var u,t,s,r=this
P.k6(b,"index")
for(u=P.mH(r,r.r,H.x(r,0)),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.e(P.Y(b,r,"index",null,t))},
$id:1,
$ikY:1}
P.et.prototype={}
P.cl.prototype={}
P.cm.prototype={}
P.fB.prototype={
$acl:function(){return[P.h,[P.b,P.C]]}}
P.fS.prototype={
i:function(a){return this.a}}
P.fR.prototype={
f6:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.j(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.bk("")
if(r>b)q.a+=C.j.ba(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lZ(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$acm:function(){return[P.h,P.h]}}
P.iD.prototype={}
P.iE.prototype={
iC:function(a){var u,t,s=P.k7(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jy(u)
if(t.fi(a,0,s)!==s)t.ds(C.j.cn(a,s-1),0)
return new Uint8Array(u.subarray(0,H.mK(0,t.b,u.length)))},
$acm:function(){return[P.h,[P.b,P.C]]}}
P.jy.prototype={
ds:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.j(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.j(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.j(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.j(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.j(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.j(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.j(s,r)
s[r]=128|a&63
return!1}},
fi:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.j.cn(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.j.aH(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.ds(r,C.j.aH(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.j(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.j(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.j(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.j(u,q)
u[q]=128|r&63}}return s}}
P.P.prototype={}
P.az.prototype={
A:function(a,b){if(b==null)return!1
return b instanceof P.az&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.d.bf(u,30))&1073741823},
i:function(a){var u=this,t=P.m6(H.mq(u)),s=P.dh(H.mo(u)),r=P.dh(H.mk(u)),q=P.dh(H.ml(u)),p=P.dh(H.mn(u)),o=P.dh(H.mp(u)),n=P.m7(H.mm(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.z.prototype={}
P.aP.prototype={
p:function(a,b){return new P.aP(C.d.p(this.a,b.gfb()))},
t:function(a,b){return new P.aP(C.d.t(this.a,b.gfb()))},
A:function(a,b){if(b==null)return!1
return b instanceof P.aP&&this.a===b.a},
gI:function(a){return C.d.gI(this.a)},
i:function(a){var u,t,s,r=new P.fy(),q=this.a
if(q<0)return"-"+new P.aP(0-q).i(0)
u=r.$1(C.d.a2(q,6e7)%60)
t=r.$1(C.d.a2(q,1e6)%60)
s=new P.fx().$1(q%1e6)
return""+C.d.a2(q,36e8)+":"+H.l(u)+":"+H.l(t)+"."+H.l(s)}}
P.fx.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:21}
P.fy.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:21}
P.bx.prototype={}
P.fb.prototype={
i:function(a){return"Assertion failed"}}
P.dI.prototype={
i:function(a){return"Throw of null."}}
P.aE.prototype={
gbT:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbS:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbT()+o+u
if(!q.a)return t
s=q.gbS()
r=P.dl(q.b)
return t+s+": "+r}}
P.c0.prototype={
gbT:function(){return"RangeError"},
gbS:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.l(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.l(s)
else if(t>s)u=": Not in range "+H.l(s)+".."+H.l(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.l(s)}return u}}
P.fU.prototype={
gbT:function(){return"RangeError"},
gbS:function(){var u,t=H.ae(this.b)
if(typeof t!=="number")return t.aE()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.l(u)},
gl:function(a){return this.f}}
P.iB.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iz.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c2.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fm.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dl(u)+"."}}
P.hy.prototype={
i:function(a){return"Out of Memory"},
$ibx:1}
P.dT.prototype={
i:function(a){return"Stack Overflow"},
$ibx:1}
P.fr.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ek.prototype={
i:function(a){return"Exception: "+this.a}}
P.fM.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.j.ba(s,0,75)+"...":s
return t+"\n"+r}}
P.by.prototype={}
P.C.prototype={}
P.d.prototype={
bI:function(a,b){var u=H.al(this,"d",0)
return new H.cS(this,H.n(b,{func:1,ret:P.P,args:[u]}),[u])},
gl:function(a){var u,t=this.gR(this)
for(u=0;t.B();)++u
return u},
gaF:function(a){var u,t=this.gR(this)
if(!t.B())throw H.e(H.fV())
u=t.gG(t)
if(t.B())throw H.e(H.md())
return u},
F:function(a,b){var u,t,s
P.k6(b,"index")
for(u=this.gR(this),t=0;u.B();){s=u.gG(u)
if(b===t)return s;++t}throw H.e(P.Y(b,this,"index",null,t))},
i:function(a){return P.mb(this,"(",")")}}
P.aS.prototype={}
P.b.prototype={$id:1}
P.Q.prototype={}
P.N.prototype={
gI:function(a){return P.O.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.a9.prototype={}
P.O.prototype={constructor:P.O,$iO:1,
A:function(a,b){return this===b},
gI:function(a){return H.cA(this)},
i:function(a){return"Instance of '"+H.c_(this)+"'"},
toString:function(){return this.i(this)}}
P.aq.prototype={}
P.h.prototype={$ikP:1}
P.bk.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.t.prototype={}
W.f9.prototype={
gl:function(a){return a.length}}
W.d8.prototype={
i:function(a){return String(a)},
$id8:1}
W.fa.prototype={
i:function(a){return String(a)}}
W.cf.prototype={$icf:1}
W.da.prototype={}
W.bs.prototype={$ibs:1}
W.bQ.prototype={
cO:function(a,b,c){if(c!=null)return a.getContext(b,P.mX(c))
return a.getContext(b)},
eo:function(a,b){return this.cO(a,b,null)},
$ibQ:1}
W.cj.prototype={$icj:1}
W.bt.prototype={
gl:function(a){return a.length}}
W.cn.prototype={$icn:1}
W.fn.prototype={
gl:function(a){return a.length}}
W.V.prototype={$iV:1}
W.co.prototype={
gl:function(a){return a.length}}
W.fo.prototype={}
W.aN.prototype={}
W.aO.prototype={}
W.fp.prototype={
gl:function(a){return a.length}}
W.fq.prototype={
gl:function(a){return a.length}}
W.ft.prototype={
gl:function(a){return a.length}}
W.aA.prototype={$iaA:1}
W.fu.prototype={
i:function(a){return String(a)}}
W.di.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iI:1,
$aI:function(){return[[P.ap,P.a9]]},
$av:function(){return[[P.ap,P.a9]]},
$id:1,
$ad:function(){return[[P.ap,P.a9]]},
$ib:1,
$ab:function(){return[[P.ap,P.a9]]},
$aB:function(){return[[P.ap,P.a9]]}}
W.dj.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaD(a))+" x "+H.l(this.gax(a))},
A:function(a,b){var u
if(b==null)return!1
u=J.X(b)
if(!u.$iap)return!1
return a.left===u.gbA(b)&&a.top===u.gbG(b)&&this.gaD(a)===u.gaD(b)&&this.gax(a)===u.gax(b)},
gI:function(a){return W.lg(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(this.gaD(a)),C.e.gI(this.gax(a)))},
gdA:function(a){return a.bottom},
gax:function(a){return a.height},
gbA:function(a){return a.left},
gbF:function(a){return a.right},
gbG:function(a){return a.top},
gaD:function(a){return a.width},
$iap:1,
$aap:function(){return[P.a9]}}
W.fv.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iI:1,
$aI:function(){return[P.h]},
$av:function(){return[P.h]},
$id:1,
$ad:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aB:function(){return[P.h]}}
W.fw.prototype={
gl:function(a){return a.length}}
W.j_.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.j(u,b)
return H.k(u[b],"$iU")},
h:function(a,b){this.a.appendChild(b)
return b},
gR:function(a){var u=this.jk(this)
return new J.am(u,u.length,[H.x(u,0)])},
$av:function(){return[W.U]},
$ad:function(){return[W.U]},
$ab:function(){return[W.U]}}
W.U.prototype={
giy:function(a){return new W.j1(a)},
gdC:function(a){return new W.j_(a,a.children)},
gdD:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.aE()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aE()
if(r<0)r=-r*0
return new P.ap(u,t,s,r,[P.a9])},
i:function(a){return a.localName},
ae:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kF
if(u==null){u=H.c([],[W.aw])
t=new W.dH(u)
C.a.h(u,W.lf(null))
C.a.h(u,W.lh())
$.kF=t
d=t}else d=u
u=$.kE
if(u==null){u=new W.eX(d)
$.kE=u
c=u}else{u.a=d
c=u}}if($.bd==null){u=document
t=u.implementation.createHTMLDocument("")
$.bd=t
$.jZ=t.createRange()
t=$.bd.createElement("base")
H.k(t,"$icf")
t.href=u.baseURI
$.bd.head.appendChild(t)}u=$.bd
if(u.body==null){t=u.createElement("body")
u.body=H.k(t,"$ibs")}u=$.bd
if(!!this.$ibs)s=u.body
else{s=u.createElement(a.tagName)
$.bd.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.V(C.Q,a.tagName)){$.jZ.selectNodeContents(s)
r=$.jZ.createContextualFragment(b)}else{s.innerHTML=b
r=$.bd.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bd.body
if(s==null?u!=null:s!==u)J.kx(s)
c.cP(r)
document.adoptNode(r)
return r},
iD:function(a,b,c){return this.ae(a,b,c,null)},
er:function(a,b){a.textContent=null
a.appendChild(this.ae(a,b,null,null))},
$iU:1,
geg:function(a){return a.tagName}}
W.fA.prototype={
$1:function(a){return!!J.X(H.k(a,"$iD")).$iU},
$S:19}
W.o.prototype={$io:1}
W.f.prototype={
ir:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.eY(a,b,c,!1)},
eY:function(a,b,c,d){return a.addEventListener(b,H.c7(H.n(c,{func:1,args:[W.o]}),1),!1)},
$if:1}
W.aQ.prototype={$iaQ:1}
W.fG.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aQ]},
$av:function(){return[W.aQ]},
$id:1,
$ad:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aB:function(){return[W.aQ]}}
W.fH.prototype={
gl:function(a){return a.length}}
W.fL.prototype={
gl:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.fQ.prototype={
gl:function(a){return a.length}}
W.bU.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.D]},
$av:function(){return[W.D]},
$id:1,
$ad:function(){return[W.D]},
$ib:1,
$ab:function(){return[W.D]},
$ibU:1,
$aB:function(){return[W.D]}}
W.bz.prototype={$ibz:1,
gdG:function(a){return a.data}}
W.cs.prototype={$ics:1}
W.aU.prototype={$iaU:1}
W.dx.prototype={
i:function(a){return String(a)},
$idx:1}
W.hf.prototype={
gl:function(a){return a.length}}
W.hg.prototype={
j:function(a,b){return P.bm(a.get(H.H(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
ga6:function(a){var u=H.c([],[P.h])
this.N(a,new W.hh(u))
return u},
gl:function(a){return a.size},
$aaa:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hh.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hi.prototype={
j:function(a,b){return P.bm(a.get(H.H(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
ga6:function(a){var u=H.c([],[P.h])
this.N(a,new W.hj(u))
return u},
gl:function(a){return a.size},
$aaa:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hj.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.aX.prototype={$iaX:1}
W.hk.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aX]},
$av:function(){return[W.aX]},
$id:1,
$ad:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aB:function(){return[W.aX]}}
W.ab.prototype={$iab:1}
W.ak.prototype={
gaF:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.e(P.l_("No elements"))
if(t>1)throw H.e(P.l_("More than one element"))
return u.firstChild},
a5:function(a,b){var u,t,s,r
H.m(b,"$id",[W.D],"$ad")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gR:function(a){var u=this.a.childNodes
return new W.dn(u,u.length,[H.ca(C.S,u,"B",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.j(u,b)
return u[b]},
$av:function(){return[W.D]},
$ad:function(){return[W.D]},
$ab:function(){return[W.D]}}
W.D.prototype={
ja:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i:function(a){var u=a.nodeValue
return u==null?this.ev(a):u},
iw:function(a,b){return a.appendChild(b)},
$iD:1}
W.cy.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.D]},
$av:function(){return[W.D]},
$id:1,
$ad:function(){return[W.D]},
$ib:1,
$ab:function(){return[W.D]},
$aB:function(){return[W.D]}}
W.aZ.prototype={$iaZ:1,
gl:function(a){return a.length}}
W.hB.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aZ]},
$av:function(){return[W.aZ]},
$id:1,
$ad:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aB:function(){return[W.aZ]}}
W.hJ.prototype={
j:function(a,b){return P.bm(a.get(H.H(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
ga6:function(a){var u=H.c([],[P.h])
this.N(a,new W.hK(u))
return u},
gl:function(a){return a.size},
$aaa:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hK.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hM.prototype={
gl:function(a){return a.length}}
W.b1.prototype={$ib1:1}
W.hW.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b1]},
$av:function(){return[W.b1]},
$id:1,
$ad:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aB:function(){return[W.b1]}}
W.b2.prototype={$ib2:1}
W.hX.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b2]},
$av:function(){return[W.b2]},
$id:1,
$ad:function(){return[W.b2]},
$ib:1,
$ab:function(){return[W.b2]},
$aB:function(){return[W.b2]}}
W.b3.prototype={$ib3:1,
gl:function(a){return a.length}}
W.i_.prototype={
j:function(a,b){return a.getItem(H.H(b))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga6:function(a){var u=H.c([],[P.h])
this.N(a,new W.i0(u))
return u},
gl:function(a){return a.length},
$aaa:function(){return[P.h,P.h]},
$iQ:1,
$aQ:function(){return[P.h,P.h]}}
W.i0.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:39}
W.aG.prototype={$iaG:1}
W.c3.prototype={}
W.dU.prototype={
ae:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bM(a,b,c,d)
u=W.m8("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ak(t).a5(0,new W.ak(u))
return t}}
W.i6.prototype={
ae:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bM(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.y.ae(u.createElement("table"),b,c,d)
u.toString
u=new W.ak(u)
s=u.gaF(u)
s.toString
u=new W.ak(s)
r=u.gaF(u)
t.toString
r.toString
new W.ak(t).a5(0,new W.ak(r))
return t}}
W.i7.prototype={
ae:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bM(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.y.ae(u.createElement("table"),b,c,d)
u.toString
u=new W.ak(u)
s=u.gaF(u)
t.toString
s.toString
new W.ak(t).a5(0,new W.ak(s))
return t}}
W.cG.prototype={$icG:1}
W.b4.prototype={$ib4:1}
W.aH.prototype={$iaH:1}
W.i9.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aH]},
$av:function(){return[W.aH]},
$id:1,
$ad:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aB:function(){return[W.aH]}}
W.ia.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b4]},
$av:function(){return[W.b4]},
$id:1,
$ad:function(){return[W.b4]},
$ib:1,
$ab:function(){return[W.b4]},
$aB:function(){return[W.b4]}}
W.ie.prototype={
gl:function(a){return a.length}}
W.b6.prototype={$ib6:1}
W.aI.prototype={$iaI:1}
W.ij.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b6]},
$av:function(){return[W.b6]},
$id:1,
$ad:function(){return[W.b6]},
$ib:1,
$ab:function(){return[W.b6]},
$aB:function(){return[W.b6]}}
W.ik.prototype={
gl:function(a){return a.length}}
W.bF.prototype={}
W.iC.prototype={
i:function(a){return String(a)}}
W.iS.prototype={
gl:function(a){return a.length}}
W.b9.prototype={
giG:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.ai("deltaY is not supported"))},
giF:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.ai("deltaX is not supported"))},
$ib9:1}
W.cT.prototype={
hw:function(a,b){return a.requestAnimationFrame(H.c7(H.n(b,{func:1,ret:-1,args:[P.a9]}),1))},
fc:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cU.prototype={$icU:1}
W.j0.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.V]},
$av:function(){return[W.V]},
$id:1,
$ad:function(){return[W.V]},
$ib:1,
$ab:function(){return[W.V]},
$aB:function(){return[W.V]}}
W.ef.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
A:function(a,b){var u
if(b==null)return!1
u=J.X(b)
if(!u.$iap)return!1
return a.left===u.gbA(b)&&a.top===u.gbG(b)&&a.width===u.gaD(b)&&a.height===u.gax(b)},
gI:function(a){return W.lg(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(a.width),C.e.gI(a.height))},
gax:function(a){return a.height},
gaD:function(a){return a.width}}
W.je.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aR]},
$av:function(){return[W.aR]},
$id:1,
$ad:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aB:function(){return[W.aR]}}
W.ey.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.D]},
$av:function(){return[W.D]},
$id:1,
$ad:function(){return[W.D]},
$ib:1,
$ab:function(){return[W.D]},
$aB:function(){return[W.D]}}
W.jr.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b3]},
$av:function(){return[W.b3]},
$id:1,
$ad:function(){return[W.b3]},
$ib:1,
$ab:function(){return[W.b3]},
$aB:function(){return[W.b3]}}
W.js.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aG]},
$av:function(){return[W.aG]},
$id:1,
$ad:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aB:function(){return[W.aG]}}
W.iZ.prototype={
N:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.ga6(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.E)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga6:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.j(r,t)
s=H.k(r[t],"$icU")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aaa:function(){return[P.h,P.h]},
$aQ:function(){return[P.h,P.h]}}
W.j1.prototype={
j:function(a,b){return this.a.getAttribute(H.H(b))},
gl:function(a){return this.ga6(this).length}}
W.j2.prototype={}
W.kb.prototype={}
W.j3.prototype={}
W.j4.prototype={
$1:function(a){return this.a.$1(H.k(a,"$io"))},
$S:35}
W.bH.prototype={
eH:function(a){var u
if($.en.a===0){for(u=0;u<262;++u)$.en.W(0,C.P[u],W.n8())
for(u=0;u<12;++u)$.en.W(0,C.q[u],W.n9())}},
aO:function(a){return $.lR().V(0,W.cp(a))},
an:function(a,b,c){var u=$.en.j(0,H.l(W.cp(a))+"::"+b)
if(u==null)u=$.en.j(0,"*::"+b)
if(u==null)return!1
return H.kh(u.$4(a,b,c,this))},
$iaw:1}
W.B.prototype={
gR:function(a){return new W.dn(a,this.gl(a),[H.ca(this,a,"B",0)])}}
W.dH.prototype={
aO:function(a){return C.a.dw(this.a,new W.ht(a))},
an:function(a,b,c){return C.a.dw(this.a,new W.hs(a,b,c))},
$iaw:1}
W.ht.prototype={
$1:function(a){return H.k(a,"$iaw").aO(this.a)},
$S:22}
W.hs.prototype={
$1:function(a){return H.k(a,"$iaw").an(this.a,this.b,this.c)},
$S:22}
W.eG.prototype={
eR:function(a,b,c,d){var u,t,s
this.a.a5(0,c)
u=b.bI(0,new W.jp())
t=b.bI(0,new W.jq())
this.b.a5(0,u)
s=this.c
s.a5(0,C.R)
s.a5(0,t)},
aO:function(a){return this.a.V(0,W.cp(a))},
an:function(a,b,c){var u=this,t=W.cp(a),s=u.c
if(s.V(0,H.l(t)+"::"+b))return u.d.iu(c)
else if(s.V(0,"*::"+b))return u.d.iu(c)
else{s=u.b
if(s.V(0,H.l(t)+"::"+b))return!0
else if(s.V(0,"*::"+b))return!0
else if(s.V(0,H.l(t)+"::*"))return!0
else if(s.V(0,"*::*"))return!0}return!1},
$iaw:1}
W.jp.prototype={
$1:function(a){return!C.a.V(C.q,H.H(a))},
$S:16}
W.jq.prototype={
$1:function(a){return C.a.V(C.q,H.H(a))},
$S:16}
W.ju.prototype={
an:function(a,b,c){if(this.eA(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.V(0,b)
return!1}}
W.jv.prototype={
$1:function(a){return"TEMPLATE::"+H.l(H.H(a))},
$S:33}
W.jt.prototype={
aO:function(a){var u=J.X(a)
if(!!u.$icB)return!1
u=!!u.$ip
if(u&&W.cp(a)==="foreignObject")return!1
if(u)return!0
return!1},
an:function(a,b,c){if(b==="is"||C.j.bL(b,"on"))return!1
return this.aO(a)},
$iaw:1}
W.dn.prototype={
B:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdc(J.lV(u.a,t))
u.c=t
return!0}u.sdc(null)
u.c=s
return!1},
gG:function(a){return this.d},
sdc:function(a){this.d=H.G(a,H.x(this,0))},
$iaS:1}
W.aw.prototype={}
W.jn.prototype={$inP:1}
W.eX.prototype={
cP:function(a){new W.jz(this).$2(a,null)},
aX:function(a,b){if(b==null)J.kx(a)
else b.removeChild(a)},
hB:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.lY(a)
n=o.a.getAttribute("is")
H.k(a,"$iU")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.A(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ay(r)}t="element unprintable"
try{t=J.aL(a)}catch(r){H.ay(r)}try{s=W.cp(a)
this.hA(H.k(a,"$iU"),b,p,t,s,H.k(o,"$iQ"),H.H(n))}catch(r){if(H.ay(r) instanceof P.aE)throw r
else{this.aX(a,b)
window
q="Removing corrupted element "+H.l(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hA:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.aX(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aO(a)){o.aX(a,b)
window
u="Removing disallowed element <"+H.l(e)+"> from "+H.l(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.an(a,"is",g)){o.aX(a,b)
window
u="Removing disallowed type extension <"+H.l(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga6(f)
t=H.c(u.slice(0),[H.x(u,0)])
for(s=f.ga6(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.j(t,s)
r=t[s]
q=o.a
p=J.m_(r)
H.H(r)
if(!q.an(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.l(e)+" "+r+'="'+H.l(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.X(a).$icG)o.cP(a.content)},
$inA:1}
W.jz.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hB(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aX(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ay(s)
r=H.k(u,"$iD")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.k(t,"$iD")}},
$S:32}
W.ee.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.el.prototype={}
W.em.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.d_.prototype={}
W.d0.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eM.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.d1.prototype={}
W.d2.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f6.prototype={}
P.eW.prototype={$ibz:1,
gdG:function(a){return this.a}}
P.jE.prototype={
$2:function(a,b){this.a[a]=b},
$S:27}
P.fI.prototype={
gbX:function(){var u=this.b,t=H.al(u,"v",0),s=W.U
return new H.h7(new H.cS(u,H.n(new P.fJ(),{func:1,ret:P.P,args:[t]}),[t]),H.n(new P.fK(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.bN(this.gbX().a)},
j:function(a,b){var u=this.gbX()
return u.b.$1(J.jT(u.a,b))},
gR:function(a){var u=P.kK(this.gbX(),!1,W.U)
return new J.am(u,u.length,[H.x(u,0)])},
$av:function(){return[W.U]},
$ad:function(){return[W.U]},
$ab:function(){return[W.U]}}
P.fJ.prototype={
$1:function(a){return!!J.X(H.k(a,"$iD")).$iU},
$S:19}
P.fK.prototype={
$1:function(a){return H.i(H.k(a,"$iD"),"$iU")},
$S:31}
P.ji.prototype={
gbF:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.F(t)
return H.G(u+t,H.x(this,0))},
gdA:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.F(t)
return H.G(u+t,H.x(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.l(u.a)+", "+H.l(u.b)+") "+H.l(u.c)+" x "+H.l(u.d)},
A:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.X(b)
if(!!u.$iap){t=p.a
if(t==u.gbA(b)){s=p.b
if(s==u.gbG(b)){r=p.c
if(typeof t!=="number")return t.p()
if(typeof r!=="number")return H.F(r)
q=H.x(p,0)
if(H.G(t+r,q)===u.gbF(b)){t=p.d
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.F(t)
u=H.G(s+t,q)===u.gdA(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t=this,s=t.a,r=J.bL(s),q=t.b,p=J.bL(q),o=t.c
if(typeof s!=="number")return s.p()
if(typeof o!=="number")return H.F(o)
u=H.x(t,0)
o=C.d.gI(H.G(s+o,u))
s=t.d
if(typeof q!=="number")return q.p()
if(typeof s!=="number")return H.F(s)
u=C.d.gI(H.G(q+s,u))
return P.mG(P.jg(P.jg(P.jg(P.jg(0,r),p),o),u))}}
P.ap.prototype={
gbA:function(a){return this.a},
gbG:function(a){return this.b},
gaD:function(a){return this.c},
gax:function(a){return this.d}}
P.bg.prototype={$ibg:1}
P.h_.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.j(a,b)},
$av:function(){return[P.bg]},
$id:1,
$ad:function(){return[P.bg]},
$ib:1,
$ab:function(){return[P.bg]},
$aB:function(){return[P.bg]}}
P.bi.prototype={$ibi:1}
P.hw.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.j(a,b)},
$av:function(){return[P.bi]},
$id:1,
$ad:function(){return[P.bi]},
$ib:1,
$ab:function(){return[P.bi]},
$aB:function(){return[P.bi]}}
P.hD.prototype={
gl:function(a){return a.length}}
P.cB.prototype={$icB:1}
P.i5.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.j(a,b)},
$av:function(){return[P.h]},
$id:1,
$ad:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aB:function(){return[P.h]}}
P.p.prototype={
gdC:function(a){return new P.fI(a,new W.ak(a))},
ae:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.aw])
C.a.h(p,W.lf(null))
C.a.h(p,W.lh())
C.a.h(p,new W.jt())
c=new W.eX(new W.dH(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).iD(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ak(s)
q=p.gaF(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.bl.prototype={$ibl:1}
P.il.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.j(a,b)},
$av:function(){return[P.bl]},
$id:1,
$ad:function(){return[P.bl]},
$ib:1,
$ab:function(){return[P.bl]},
$aB:function(){return[P.bl]}}
P.eq.prototype={}
P.er.prototype={}
P.eB.prototype={}
P.eC.prototype={}
P.eN.prototype={}
P.eO.prototype={}
P.eU.prototype={}
P.eV.prototype={}
P.fd.prototype={
gl:function(a){return a.length}}
P.fe.prototype={
j:function(a,b){return P.bm(a.get(H.H(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
ga6:function(a){var u=H.c([],[P.h])
this.N(a,new P.ff(u))
return u},
gl:function(a){return a.size},
$aaa:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
P.ff.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
P.fg.prototype={
gl:function(a){return a.length}}
P.bO.prototype={}
P.hx.prototype={
gl:function(a){return a.length}}
P.ed.prototype={}
P.db.prototype={$idb:1}
P.dL.prototype={$idL:1}
P.c1.prototype={
jh:function(a,b,c,d,e,f,g){var u,t=J.X(g)
if(!!t.$ibz)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.mY(g))
return}if(!!t.$ics)t=!0
else t=!1
if(t){this.hP(a,b,c,d,e,f,g)
return}throw H.e(P.m0("Incorrect number or type of arguments"))},
hP:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
J:function(a,b,c){return a.uniform1f(b,c)},
a0:function(a,b,c){return a.uniform1i(b,c)},
u:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ek:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
el:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic1:1}
P.dO.prototype={$idO:1}
P.dV.prototype={$idV:1}
P.e3.prototype={$ie3:1}
P.hY.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return P.bm(a.item(b))},
F:function(a,b){return this.j(a,b)},
$av:function(){return[[P.Q,,,]]},
$id:1,
$ad:function(){return[[P.Q,,,]]},
$ib:1,
$ab:function(){return[[P.Q,,,]]},
$aB:function(){return[[P.Q,,,]]}}
P.eJ.prototype={}
P.eK.prototype={}
O.a2.prototype={
bc:function(a){var u=this
u.sfn(H.c([],[a]))
u.sdi(null)
u.sde(null)
u.sdj(null)},
cQ:function(a,b,c){var u=this,t=H.al(u,"a2",0)
H.n(b,{func:1,ret:P.P,args:[[P.d,t]]})
t={func:1,ret:-1,args:[P.C,[P.d,t]]}
H.n(a,t)
H.n(c,t)
u.sdi(b)
u.sde(a)
u.sdj(c)},
aS:function(a,b){return this.cQ(a,null,b)},
dh:function(a){var u
H.m(a,"$id",[H.al(this,"a2",0)],"$ad")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cU:function(a,b){var u
H.m(b,"$id",[H.al(this,"a2",0)],"$ad")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gR:function(a){var u=this.a
return new J.am(u,u.length,[H.x(u,0)])},
F:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.j(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.al(s,"a2",0)
H.G(b,r)
r=[r]
if(H.A(s.dh(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cU(t,H.c([b],r))}},
a5:function(a,b){var u,t,s=this
H.m(b,"$id",[H.al(s,"a2",0)],"$ad")
if(H.A(s.dh(b))){u=s.a
t=u.length
C.a.a5(u,b)
s.cU(t,b)}},
sfn:function(a){this.a=H.m(a,"$ib",[H.al(this,"a2",0)],"$ab")},
sdi:function(a){this.b=H.n(a,{func:1,ret:P.P,args:[[P.d,H.al(this,"a2",0)]]})},
sde:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.C,[P.d,H.al(this,"a2",0)]]})},
sdj:function(a){H.n(a,{func:1,ret:-1,args:[P.C,[P.d,H.al(this,"a2",0)]]})},
$id:1}
O.cu.prototype={
gl:function(a){return this.a.length},
gq:function(){var u=this.b
return u==null?this.b=D.K():u},
aG:function(){var u=this.b
if(u!=null)u.E(null)},
gZ:function(a){var u=this.a
if(u.length>0)return C.a.gbz(u)
else return V.bX()},
bE:function(a){var u=this.a
if(a==null)C.a.h(u,V.bX())
else C.a.h(u,a)
this.aG()},
aA:function(){var u=this.a
if(u.length>0){u.pop()
this.aG()}},
sbZ:function(a){this.a=H.m(a,"$ib",[V.an],"$ab")}}
E.fh.prototype={}
E.ag.prototype={
sbK:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gq().O(0,s.ge9())
u=s.c
if(u!=null)u.gq().h(0,s.ge9())
t=new D.M("shape",r,s.c,[F.dP])
t.b=!0
s.bC(t)}},
ak:function(a,b){var u
for(u=this.y.a,u=new J.am(u,u.length,[H.x(u,0)]);u.B();)u.d.ak(0,b)},
aa:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.gZ(s))
s.aG()
a.cH(t.f)
s=a.dy
u=(s&&C.a).gbz(s)
if(u!=null&&t.d!=null)u.ed(a,t)
for(s=t.y.a,s=new J.am(s,s.length,[H.x(s,0)]);s.B();)s.d.aa(a)
a.cG()
a.dx.aA()},
gq:function(){var u=this.z
return u==null?this.z=D.K():u},
bC:function(a){var u=this.z
if(u!=null)u.E(a)},
a9:function(){return this.bC(null)},
ea:function(a){H.k(a,"$iy")
this.e=null
this.bC(a)},
j1:function(){return this.ea(null)},
e8:function(a){this.bC(H.k(a,"$iy"))},
iZ:function(){return this.e8(null)},
iY:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$id",[E.ag],"$ad")
for(u=b.length,t=this.ge7(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bS()
o.sac(null)
o.saM(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a9()},
j0:function(a,b){var u,t
H.m(b,"$id",[E.ag],"$ad")
for(u=b.gR(b),t=this.ge7();u.B();)u.gG(u).gq().O(0,t)
this.a9()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seG:function(a,b){this.y=H.m(b,"$ia2",[E.ag],"$aa2")},
$iaY:1}
E.hF.prototype={
eD:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.az(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cu()
t=[V.an]
u.sbZ(H.c([],t))
u.b=null
u.gq().h(0,new E.hG(s))
s.cy=u
u=new O.cu()
u.sbZ(H.c([],t))
u.b=null
u.gq().h(0,new E.hH(s))
s.db=u
u=new O.cu()
u.sbZ(H.c([],t))
u.b=null
u.gq().h(0,new E.hI(s))
s.dx=u
s.shO(H.c([],[O.bE]))
u=s.dy;(u&&C.a).h(u,null)
s.shK(new H.aT([P.h,A.cC]))},
gj9:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gZ(s)
u=t.db
u=t.z=s.v(0,u.gZ(u))
s=u}return s},
cH:function(a){var u=this.dy,t=a==null?(u&&C.a).gbz(u):a;(u&&C.a).h(u,t)},
cG:function(){var u=this.dy
if(u.length>1)u.pop()},
dv:function(a){var u=a.b
if(u.length===0)throw H.e(P.r("May not cache a shader with no name."))
if(this.fr.dE(0,u))throw H.e(P.r('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.W(0,u,a)},
shO:function(a){this.dy=H.m(a,"$ib",[O.bE],"$ab")},
shK:function(a){this.fr=H.m(a,"$iQ",[P.h,A.cC],"$aQ")}}
E.hG.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.ch=u.z=null},
$S:6}
E.hH.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:6}
E.hI.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.cx=u.ch=null},
$S:6}
E.e_.prototype={
cX:function(a){H.k(a,"$iy")
this.ee()},
cW:function(){return this.cX(null)},
giO:function(){var u,t=this,s=Date.now(),r=C.d.a2(P.kD(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.az(s,!1)
return u/r},
dm:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.v()
if(typeof r!=="number")return H.F(r)
u=C.e.cw(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.v()
t=C.e.cw(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.l2(C.n,s.gjd())}},
ee:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.id(this),{func:1,ret:-1,args:[P.a9]})
C.A.fc(u)
C.A.hw(u,W.lo(t,P.a9))}},
jc:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dm()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.az(r,!1)
s.y=P.kD(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aG()
r=s.db
C.a.sl(r.a,0)
r.aG()
r=s.dx
C.a.sl(r.a,0)
r.aG()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aa(p.e)}s=p.z
if(s!=null)s.E(null)}catch(q){u=H.ay(q)
t=H.cb(q)
P.ks("Error: "+H.l(u))
P.ks("Stack: "+H.l(t))
throw H.e(u)}}}
E.id.prototype={
$1:function(a){var u
H.nj(a)
u=this.a
if(u.ch){u.ch=!1
u.jc()}},
$S:43}
Z.ea.prototype={$inu:1}
Z.dc.prototype={
a_:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ay(s)
t=P.r('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.l(u))
throw H.e(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.l(u.e)+"]"}}
Z.eb.prototype={$inv:1}
Z.ci.prototype={
aw:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a_:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a_(a)},
aQ:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aa:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.j(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aL(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfj:function(a){this.b=H.m(a,"$ib",[Z.bV],"$ab")},
$inC:1}
Z.bV.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c_(this.c)+"'")+"]"}}
Z.b8.prototype={
gcR:function(a){var u=this.a,t=(u&$.aK().a)!==0?3:0
if((u&$.bp().a)!==0)t+=3
if((u&$.bo().a)!==0)t+=3
if((u&$.bq().a)!==0)t+=2
if((u&$.br().a)!==0)t+=3
if((u&$.d6().a)!==0)t+=3
if((u&$.d7().a)!==0)t+=4
if((u&$.ce().a)!==0)++t
return(u&$.bn().a)!==0?t+4:t},
ix:function(a){var u,t=$.aK(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bo()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bq()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.br()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d6()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d7()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ce()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bn()
if((s&t.a)!==0)if(u===a)return t
return $.lQ()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b8))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.h]),t=this.a
if((t&$.aK().a)!==0)C.a.h(u,"Pos")
if((t&$.bp().a)!==0)C.a.h(u,"Norm")
if((t&$.bo().a)!==0)C.a.h(u,"Binm")
if((t&$.bq().a)!==0)C.a.h(u,"Txt2D")
if((t&$.br().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d6().a)!==0)C.a.h(u,"Clr3")
if((t&$.d7().a)!==0)C.a.h(u,"Clr4")
if((t&$.ce().a)!==0)C.a.h(u,"Weight")
if((t&$.bn().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fk.prototype={}
D.bS.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.y]}
H.n(b,u)
if(this.a==null)this.sac(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
O:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.y]})
u=s.a
u=u==null?null:C.a.V(u,b)
if(u===!0){u=s.a
t=(u&&C.a).O(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.V(u,b)
if(u===!0){u=s.b
t=(u&&C.a).O(u,b)||t}return t},
E:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.y()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.N(P.kK(u,!0,{func:1,ret:-1,args:[D.y]}),new D.fD(q))
u=r.b
if(u!=null){r.saM(H.c([],[{func:1,ret:-1,args:[D.y]}]))
C.a.N(u,new D.fE(q))}return!0},
iJ:function(){return this.E(null)},
aC:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}},
sac:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.y]}],"$ab")},
saM:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.y]}],"$ab")}}
D.fD.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:24}
D.fE.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:24}
D.y.prototype={}
D.bA.prototype={}
D.bB.prototype={}
D.M.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.dd.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dd))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.dt.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dt))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.fZ.prototype={
j6:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
j2:function(a){this.c=a.b
this.d.O(0,a.a)
return!1},
shp:function(a){this.d=H.m(a,"$ikY",[P.C],"$akY")}}
X.dy.prototype={}
X.h4.prototype={
aV:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.v()
u=b.b
t=q.ch
if(typeof u!=="number")return u.v()
s=new V.a6(o.a+n*m,o.b+u*t)
t=q.a.gaP()
r=new X.bh(a,V.bj(),q.x,t,s)
r.b=!0
q.z=new P.az(p,!1)
q.x=s
return r},
cF:function(a,b){this.r=a.a
return!1},
b2:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eq()
if(typeof u!=="number")return u.em()
this.r=(u&~t)>>>0
return!1},
b1:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.aV(a,b))
return!0},
j7:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaP()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.v()
q=a.b
p=o.cy
if(typeof q!=="number")return q.v()
t=new X.cv(new V.T(s*r,q*p),u,t)
t.b=!0
n.E(t)
return!0},
fY:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dy(c,r.a.gaP(),b)
s.b=!0
t.E(s)
r.y=new P.az(u,!1)
r.x=V.bj()}}
X.av.prototype={
A:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.av))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.A(this.b)?"Alt+":""
return u+(H.A(this.c)?"Shift+":"")}}
X.bh.prototype={}
X.hl.prototype={
bV:function(a,b,c){var u=this,t=new P.az(Date.now(),!1),s=u.a.gaP(),r=new X.bh(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cF:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.bV(a,b,!0))
return!0},
b2:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eq()
if(typeof t!=="number")return t.em()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.bV(a,b,!0))
return!0},
b1:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.bV(a,b,!1))
return!0},
j8:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaP()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.v()
r=a.b
q=p.ch
if(typeof r!=="number")return r.v()
u=new X.cv(new V.T(t*s,r*q),u,b)
u.b=!0
o.E(u)
return!0},
gdJ:function(){var u=this.b
return u==null?this.b=D.K():u},
gbH:function(){var u=this.c
return u==null?this.c=D.K():u},
ge6:function(){var u=this.d
return u==null?this.d=D.K():u}}
X.cv.prototype={}
X.hC.prototype={}
X.e1.prototype={}
X.ii.prototype={
aV:function(a,b){var u,t,s,r,q=this
H.m(a,"$ib",[V.a6],"$ab")
u=new P.az(Date.now(),!1)
t=a.length>0?a[0]:V.bj()
s=q.a.gaP()
r=new X.e1(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
j5:function(a){var u
H.m(a,"$ib",[V.a6],"$ab")
u=this.b
if(u==null)return!1
u.E(this.aV(a,!0))
return!0},
j3:function(a){var u
H.m(a,"$ib",[V.a6],"$ab")
u=this.c
if(u==null)return!1
u.E(this.aV(a,!0))
return!0},
j4:function(a){var u
H.m(a,"$ib",[V.a6],"$ab")
u=this.d
if(u==null)return!1
u.E(this.aV(a,!1))
return!0}}
X.e6.prototype={
gaP:function(){var u=this.a,t=C.l.gdD(u).c
t.toString
u=C.l.gdD(u).d
u.toString
return V.kW(0,0,t,u)},
d7:function(a){var u=a.keyCode,t=H.A(a.ctrlKey)||H.A(a.metaKey)
return new X.dt(u,new X.av(t,a.altKey,a.shiftKey))},
aN:function(a){var u=this.b,t=H.A(a.ctrlKey)||H.A(a.metaKey)
u.c=new X.av(t,a.altKey,a.shiftKey)},
cd:function(a){var u=this.b,t=H.A(a.ctrlKey)||H.A(a.metaKey)
u.c=new X.av(t,a.altKey,a.shiftKey)},
at:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.t()
u=t.top
if(typeof r!=="number")return r.t()
return new V.a6(s-q,r-u)},
aW:function(a){return new V.T(a.movementX,a.movementY)},
c9:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a6])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
q=C.e.aj(r.pageX)
C.e.aj(r.pageY)
p=o.left
C.e.aj(r.pageX)
C.a.h(n,new V.a6(q-p,C.e.aj(r.pageY)-o.top))}return n},
ar:function(a){var u=a.buttons,t=H.A(a.ctrlKey)||H.A(a.metaKey)
return new X.dd(u,new X.av(t,a.altKey,a.shiftKey))},
c_:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.t()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.t()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fS:function(a){this.f=!0},
fG:function(a){this.f=!1},
fM:function(a){H.k(a,"$iab")
if(H.A(this.f)&&this.c_(a))a.preventDefault()},
fW:function(a){var u
H.k(a,"$iaU")
if(!H.A(this.f))return
u=this.d7(a)
this.b.j6(u)},
fU:function(a){var u
H.k(a,"$iaU")
if(!H.A(this.f))return
u=this.d7(a)
this.b.j2(u)},
h_:function(a){var u,t,s,r,q=this
H.k(a,"$iab")
u=q.a
u.focus()
q.f=!0
q.aN(a)
if(H.A(q.x)){t=q.ar(a)
s=q.aW(a)
if(q.d.cF(t,s))a.preventDefault()
return}if(H.A(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ar(a)
r=q.at(a)
if(q.c.cF(t,r))a.preventDefault()},
h3:function(a){var u,t,s,r=this
H.k(a,"$iab")
r.aN(a)
u=r.ar(a)
if(H.A(r.x)){t=r.aW(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.at(a)
if(r.c.b2(u,s))a.preventDefault()},
fQ:function(a){var u,t,s,r=this
H.k(a,"$iab")
if(!r.c_(a)){r.aN(a)
u=r.ar(a)
if(H.A(r.x)){t=r.aW(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.at(a)
if(r.c.b2(u,s))a.preventDefault()}},
h1:function(a){var u,t,s,r=this
H.k(a,"$iab")
r.aN(a)
u=r.ar(a)
if(H.A(r.x)){t=r.aW(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.at(a)
if(r.c.b1(u,s))a.preventDefault()},
fO:function(a){var u,t,s,r=this
H.k(a,"$iab")
if(!r.c_(a)){r.aN(a)
u=r.ar(a)
if(H.A(r.x)){t=r.aW(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.at(a)
if(r.c.b1(u,s))a.preventDefault()}},
h5:function(a){var u,t,s=this
H.k(a,"$ib9")
s.aN(a)
u=new V.T((a&&C.z).giF(a),C.z.giG(a)).w(0,180)
if(H.A(s.x)){if(s.d.j7(u))a.preventDefault()
return}if(H.A(s.r))return
t=s.at(a)
if(s.c.j8(u,t))a.preventDefault()},
h7:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ar(s.y)
t=s.at(s.y)
s.d.fY(u,t,r)}},
hn:function(a){var u,t=this
H.k(a,"$iaI")
t.a.focus()
t.f=!0
t.cd(a)
u=t.c9(a)
if(t.e.j5(u))a.preventDefault()},
hj:function(a){var u
H.k(a,"$iaI")
this.cd(a)
u=this.c9(a)
if(this.e.j3(u))a.preventDefault()},
hl:function(a){var u
H.k(a,"$iaI")
this.cd(a)
u=this.c9(a)
if(this.e.j4(u))a.preventDefault()},
sfd:function(a){this.z=H.m(a,"$ib",[[P.cE,P.O]],"$ab")}}
D.bw.prototype={
gq:function(){var u=this.d
return u==null?this.d=D.K():u},
aq:function(a){var u
H.k(a,"$iy")
u=this.d
if(u!=null)u.E(a)},
eK:function(){return this.aq(null)},
$ia5:1,
$iaY:1}
D.a5.prototype={$iaY:1}
D.du.prototype={
gq:function(){var u=this.Q
return u==null?this.Q=D.K():u},
aq:function(a){var u=this.Q
if(u!=null)u.E(a)},
dg:function(a){var u
H.k(a,"$iy")
u=this.ch
if(u!=null)u.E(a)},
fX:function(){return this.dg(null)},
h9:function(a){var u,t,s
H.m(a,"$id",[D.a5],"$ad")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.E)(a),++t){s=a[t]
if(s==null||this.eI(s))return!1}return!0},
fA:function(a,b){var u,t,s,r,q,p,o,n=D.a5
H.m(b,"$id",[n],"$ad")
for(u=b.length,t=this.gdf(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=H.k(b[q],"$ia5")
if(p instanceof D.bw)C.a.h(this.e,p)
o=p.d
if(o==null){o=new D.bS()
o.sac(null)
o.saM(null)
o.c=null
o.d=0
p.d=o}H.n(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bA([n])
n.b=!0
this.aq(n)},
hd:function(a,b){var u,t,s,r=D.a5
H.m(b,"$id",[r],"$ad")
for(u=b.gR(b),t=this.gdf();u.B();){s=u.gG(u)
C.a.O(this.e,s)
s.gq().O(0,t)}r=new D.bB([r])
r.b=!0
this.aq(r)},
eI:function(a){var u=C.a.V(this.e,a)
return u},
sfa:function(a){this.e=H.m(a,"$ib",[D.bw],"$ab")},
sho:function(a){this.f=H.m(a,"$ib",[D.dK],"$ab")},
shM:function(a){this.r=H.m(a,"$ib",[D.dS],"$ab")},
shY:function(a){this.x=H.m(a,"$ib",[D.dX],"$ab")},
shZ:function(a){this.y=H.m(a,"$ib",[D.dY],"$ab")},
si_:function(a){this.z=H.m(a,"$ib",[D.dZ],"$ab")},
$ad:function(){return[D.a5]},
$aa2:function(){return[D.a5]}}
D.dK.prototype={$ia5:1,$iaY:1}
D.dS.prototype={$ia5:1,$iaY:1}
D.dX.prototype={$ia5:1,$iaY:1}
D.dY.prototype={$ia5:1,$iaY:1}
D.dZ.prototype={$ia5:1,$iaY:1}
V.a3.prototype={
p:function(a,b){var u=C.e.p(this.a,b.gcI()),t=C.e.p(this.b,b.gbJ()),s=C.e.p(this.c,b.gcj())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a3(u,t,s)},
t:function(a,b){var u=C.e.t(this.a,b.gcI()),t=C.e.t(this.b,b.gbJ()),s=C.e.t(this.c,b.gcj())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a3(u,t,s)},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.S().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
V.at.prototype={
p:function(a,b){var u=this,t=C.e.p(u.a,b.gcI()),s=C.e.p(u.b,b.gbJ()),r=C.e.p(u.c,b.gcj()),q=C.e.p(u.d,b.giv(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.at(t,s,r,q)},
t:function(a,b){var u=this,t=C.e.t(u.a,b.gcI()),s=C.e.t(u.b,b.gbJ()),r=C.e.t(u.c,b.gcj()),q=C.e.t(u.d,b.giv(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.at(t,s,r,q)},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.at))return!1
u=b.a
t=$.S().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.W(u.a,3,0)+", "+V.W(u.b,3,0)+", "+V.W(u.c,3,0)+", "+V.W(u.d,3,0)+"]"}}
V.fC.prototype={}
V.dD.prototype={
ab:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.z])
return t},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dD))return!1
u=b.a
t=$.S().a
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
i:function(a){var u,t,s,r,q=this,p=[P.z],o=V.c9(H.c([q.a,q.d,q.r],p),3,0),n=V.c9(H.c([q.b,q.e,q.x],p),3,0),m=V.c9(H.c([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.j(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.j(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.j(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.j(o,1)
r=" "+o[1]+", "
if(1>=t)return H.j(n,1)
r=r+n[1]+", "
if(1>=s)return H.j(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.j(o,2)
p=" "+o[2]+", "
if(2>=t)return H.j(n,2)
p=p+n[2]+", "
if(2>=s)return H.j(m,2)
return r+(p+m[2]+"]")}}
V.an.prototype={
ab:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.z])
return t},
cA:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.S().a)return V.bX()
u=1/b1
t=-n
s=-a0
return V.aW((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
v:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aW(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
cM:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.R(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
b7:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a4(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.an))return!1
u=b.a
t=$.S().a
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
i:function(a){return this.S()},
H:function(a){var u,t,s,r,q,p=this,o=[P.z],n=V.c9(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.c9(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.c9(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.c9(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.j(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.j(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.j(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.j(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.j(n,1)
q=q+n[1]+", "
if(1>=t)return H.j(m,1)
q=q+m[1]+", "
if(1>=s)return H.j(l,1)
q=q+l[1]+", "
if(1>=r)return H.j(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.j(n,2)
u=u+n[2]+", "
if(2>=t)return H.j(m,2)
u=u+m[2]+", "
if(2>=s)return H.j(l,2)
u=u+l[2]+", "
if(2>=r)return H.j(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.j(n,3)
q=q+n[3]+", "
if(3>=t)return H.j(m,3)
q=q+m[3]+", "
if(3>=s)return H.j(l,3)
q=q+l[3]+", "
if(3>=r)return H.j(k,3)
return u+(q+k[3]+"]")},
S:function(){return this.H("")}}
V.a6.prototype={
p:function(a,b){return new V.a6(this.a+b.a,this.b+b.b)},
t:function(a,b){return new V.a6(this.a-b.a,this.b-b.b)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.S().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+"]"}}
V.a4.prototype={
p:function(a,b){return new V.a4(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.a4(this.a-b.a,this.b-b.b,this.c-b.c)},
v:function(a,b){return new V.a4(this.a*b,this.b*b,this.c*b)},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.S().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
V.b_.prototype={
p:function(a,b){var u=this
return new V.b_(C.d.p(u.a,b.gjo(b)),C.d.p(u.b,b.gjp(b)),C.d.p(u.c,b.gjq(b)),C.d.p(u.d,b.gjn(b)))},
t:function(a,b){var u=this
return new V.b_(C.d.t(u.a,b.gjo(b)),C.d.t(u.b,b.gjp(b)),C.d.t(u.c,b.gjq(b)),C.d.t(u.d,b.gjn(b)))},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b_))return!1
u=b.a
t=$.S().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.W(u.a,3,0)+", "+V.W(u.b,3,0)+", "+V.W(u.c,3,0)+", "+V.W(u.d,3,0)+"]"}}
V.dN.prototype={
ga8:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dN))return!1
u=b.a
t=$.S().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.W(u.a,3,0)+", "+V.W(u.b,3,0)+", "+V.W(u.c,3,0)+", "+V.W(u.d,3,0)+"]"}}
V.T.prototype={
cB:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.F(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.F(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a,s=b.giH(b)
if(typeof t!=="number")return t.p()
s=C.e.p(t,s)
t=this.b
u=b.giI(b)
if(typeof t!=="number")return t.p()
return new V.T(s,C.e.p(t,u))},
t:function(a,b){var u,t=this.a,s=b.giH(b)
if(typeof t!=="number")return t.t()
s=C.e.t(t,s)
t=this.b
u=b.giI(b)
if(typeof t!=="number")return t.t()
return new V.T(s,C.e.t(t,u))},
v:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.v()
u=this.b
if(typeof u!=="number")return u.v()
return new V.T(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.S().a){u=$.l6
return u==null?$.l6=new V.T(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.T(u/b,t/b)},
A:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=this.a
s=$.S()
s.toString
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.F(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.F(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+"]"}}
V.R.prototype={
cB:function(a){return Math.sqrt(this.C(this))},
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
av:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.R(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.R(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.R(this.a-b.a,this.b-b.b,this.c-b.c)},
P:function(a){return new V.R(-this.a,-this.b,-this.c)},
v:function(a,b){return new V.R(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if(Math.abs(b-0)<$.S().a)return V.cR()
return new V.R(this.a/b,this.b/b,this.c/b)},
e5:function(){var u=$.S().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.S().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
U.fl.prototype={
bQ:function(a){var u=V.nt(a,this.c,this.b)
return u},
gq:function(){var u=this.y
return u==null?this.y=D.K():u},
M:function(a){var u=this.y
if(u!=null)u.E(a)},
scN:function(a,b){},
scC:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.S().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bQ(u)}s=new D.M("maximumLocation",s,t.b,[P.z])
s.b=!0
t.M(s)}},
scE:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.S().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bQ(u)}s=new D.M("minimumLocation",s,t.c,[P.z])
s.b=!0
t.M(s)}},
sa7:function(a,b){var u,t=this
b=t.bQ(b)
u=t.d
if(!(Math.abs(u-b)<$.S().a)){t.d=b
u=new D.M("location",u,b,[P.z])
u.b=!0
t.M(u)}},
scD:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.S().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.M("maximumVelocity",r,a,[P.z])
r.b=!0
s.M(r)}},
sT:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.S().a)){u.f=a
t=new D.M("velocity",t,a,[P.z])
t.b=!0
u.M(t)}},
sco:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.S().a)){this.x=a
u=new D.M("dampening",u,a,[P.z])
u.b=!0
this.M(u)}},
ak:function(a,b){var u,t,s,r=this,q=r.f,p=$.S().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa7(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.S().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sT(u)}}}
U.df.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.K():u},
aR:function(a,b,c){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.df))return!1
return J.a1(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.cr.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.K():u},
M:function(a){var u
H.k(a,"$iy")
u=this.e
if(u!=null)u.E(a)},
a4:function(){return this.M(null)},
fw:function(a,b){var u,t,s,r,q,p,o,n=U.ac
H.m(b,"$id",[n],"$ad")
for(u=b.length,t=this.gaK(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.gq()
o.toString
H.n(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bA([n])
n.b=!0
this.M(n)},
hb:function(a,b){var u,t,s=U.ac
H.m(b,"$id",[s],"$ad")
for(u=b.gR(b),t=this.gaK();u.B();)u.gG(u).gq().O(0,t)
s=new D.bB([s])
s.b=!0
this.M(s)},
aR:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.aE()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.am(r,r.length,[H.x(r,0)]),u=null;r.B();){q=r.d
if(q!=null){t=q.aR(0,b,c)
if(t!=null)u=u==null?t:t.v(0,u)}}s.f=u==null?V.bX():u
r=s.e
if(r!=null)r.aC(0)}return s.f},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cr))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.j(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.j(r,t)
if(!J.a1(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ad:function(){return[U.ac]},
$aa2:function(){return[U.ac]},
$iac:1}
U.ac.prototype={}
U.e7.prototype={
gq:function(){var u=this.cy
return u==null?this.cy=D.K():u},
M:function(a){var u
H.k(a,"$iy")
u=this.cy
if(u!=null)u.E(a)},
a4:function(){return this.M(null)},
aY:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdJ().h(0,u.gc0())
u.a.c.ge6().h(0,u.gc2())
u.a.c.gbH().h(0,u.gc4())
return!0},
c1:function(a){var u=this
H.k(a,"$iy")
if(!J.a1(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
c3:function(a){var u,t,s,r,q,p,o,n=this
a=H.i(H.k(a,"$iy"),"$ibh")
if(!H.A(n.y))return
if(H.A(n.x)){u=a.d.t(0,a.y)
u=new V.T(u.a,u.b)
u=u.C(u)
t=n.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.x=!1}if(H.A(n.d)){u=a.c
t=a.d.t(0,a.y)
u=new V.T(t.a,t.b).v(0,2).w(0,u.ga8())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.v()
s=n.e
if(typeof s!=="number")return H.F(s)
t.sT(u*10*s)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=new V.T(s.a,s.b).v(0,2).w(0,u.ga8())
s=n.b
q=r.a
if(typeof q!=="number")return q.P()
p=n.e
if(typeof p!=="number")return H.F(p)
o=n.z
if(typeof o!=="number")return H.F(o)
s.sa7(0,-q*p+o)
n.b.sT(0)
t=t.t(0,a.z)
n.Q=new V.T(t.a,t.b).v(0,2).w(0,u.ga8())}n.a4()},
c5:function(a){var u,t,s,r=this
H.k(a,"$iy")
if(!H.A(r.y))return
r.y=!1
if(H.A(r.x))return
u=r.Q
if(u.C(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.v()
s=r.e
if(typeof s!=="number")return H.F(s)
u.sT(t*10*s)
r.a4()}},
aR:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.aE()
if(q<p){r.ch=p
u=b.y
r.b.ak(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aW(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iac:1}
U.e8.prototype={
gq:function(){var u=this.fx
return u==null?this.fx=D.K():u},
M:function(a){var u
H.k(a,"$iy")
u=this.fx
if(u!=null)u.E(a)},
a4:function(){return this.M(null)},
aY:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdJ().h(0,s.gc0())
s.a.c.ge6().h(0,s.gc2())
s.a.c.gbH().h(0,s.gc4())
u=s.a.d
t=u.f
u=t==null?u.f=D.K():t
u.h(0,s.gfo())
u=s.a.d
t=u.d
u=t==null?u.d=D.K():t
u.h(0,s.gfq())
u=s.a.e
t=u.b
u=t==null?u.b=D.K():t
u.h(0,s.ghV())
u=s.a.e
t=u.d
u=t==null?u.d=D.K():t
u.h(0,s.ghT())
u=s.a.e
t=u.c
u=t==null?u.c=D.K():t
u.h(0,s.ghR())
return!0},
am:function(a){var u=a.a,t=a.b
if(H.A(this.f)){if(typeof u!=="number")return u.P()
u=-u}if(H.A(this.r)){if(typeof t!=="number")return t.P()
t=-t}return new V.T(u,t)},
c1:function(a){var u=this
a=H.i(H.k(a,"$iy"),"$ibh")
if(!J.a1(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
c3:function(a){var u,t,s,r,q,p,o,n=this
a=H.i(H.k(a,"$iy"),"$ibh")
if(!H.A(n.cx))return
if(H.A(n.ch)){u=a.d.t(0,a.y)
u=new V.T(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.A(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.am(new V.T(t.a,t.b).v(0,2).w(0,u.ga8()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sT(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.am(new V.T(s.a,s.b).v(0,2).w(0,u.ga8()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa7(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa7(0,-p*q+s)
n.b.sT(0)
n.c.sT(0)
t=t.t(0,a.z)
n.dx=n.am(new V.T(t.a,t.b).v(0,2).w(0,u.ga8()))}n.a4()},
c5:function(a){var u,t,s,r=this
H.k(a,"$iy")
if(!H.A(r.cx))return
r.cx=!1
if(H.A(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sT(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sT(-t*10*u)
r.a4()}},
fp:function(a){var u=this
if(H.i(H.k(a,"$iy"),"$idy").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fs:function(a){var u,t,s,r,q,p,o,n=this
a=H.i(H.k(a,"$iy"),"$ibh")
if(!J.a1(n.d,a.x.b))return
u=a.c
t=a.d
s=t.t(0,a.y)
r=n.am(new V.T(s.a,s.b).v(0,2).w(0,u.ga8()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa7(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa7(0,-p*q+s)
n.b.sT(0)
n.c.sT(0)
t=t.t(0,a.z)
n.dx=n.am(new V.T(t.a,t.b).v(0,2).w(0,u.ga8()))
n.a4()},
hW:function(a){var u=this
H.k(a,"$iy")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hU:function(a){var u,t,s,r,q,p,o,n=this
a=H.i(H.k(a,"$iy"),"$ie1")
if(!H.A(n.cx))return
if(H.A(n.ch)){u=a.d.t(0,a.y)
u=new V.T(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.A(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.am(new V.T(t.a,t.b).v(0,2).w(0,u.ga8()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sT(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.am(new V.T(s.a,s.b).v(0,2).w(0,u.ga8()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa7(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa7(0,-p*q+s)
n.b.sT(0)
n.c.sT(0)
t=t.t(0,a.z)
n.dx=n.am(new V.T(t.a,t.b).v(0,2).w(0,u.ga8()))}n.a4()},
hS:function(a){var u,t,s,r=this
H.k(a,"$iy")
if(!H.A(r.cx))return
r.cx=!1
if(H.A(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sT(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sT(-t*10*u)
r.a4()}},
aR:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.aE()
if(q<p){r.dy=p
u=b.y
r.c.ak(0,u)
r.b.ak(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aW(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.v(0,V.aW(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iac:1}
U.e9.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.K():u},
M:function(a){var u=this.r
if(u!=null)u.E(a)},
aY:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.K():t
t=r.gft()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.K():s).h(0,t)
return!0},
fu:function(a){var u,t,s,r,q=this
H.k(a,"$iy")
if(!J.a1(q.b,q.a.b.c))return
H.i(a,"$icv")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.v()
r=u+t*s
if(u!==r){q.d=r
u=new D.M("zoom",u,r,[P.z])
u.b=!0
q.M(u)}},
aR:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.aW(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iac:1}
M.de.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.K():u},
Y:function(a){var u
H.k(a,"$iy")
u=this.r
if(u!=null)u.E(a)},
aT:function(){return this.Y(null)},
hf:function(a,b){var u,t,s,r,q,p,o,n=M.ax
H.m(b,"$id",[n],"$ad")
for(u=b.length,t=this.gX(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.gq()
o.toString
H.n(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bA([n])
n.b=!0
this.Y(n)},
hh:function(a,b){var u,t,s=M.ax
H.m(b,"$id",[s],"$ad")
for(u=b.gR(b),t=this.gX();u.B();)u.gG(u).gq().O(0,t)
s=new D.bB([s])
s.b=!0
this.Y(s)},
aa:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.am(u,u.length,[H.x(u,0)]);u.B();){t=u.d
if(t!=null)t.aa(a)}s.f=!1},
$ad:function(){return[M.ax]},
$aa2:function(){return[M.ax]},
$iax:1}
M.dg.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.K():u},
Y:function(a){var u
H.k(a,"$iy")
u=this.r
if(u!=null)u.E(a)},
aT:function(){return this.Y(null)},
saZ:function(a){var u,t,s=this
if(a==null)a=new X.fT()
u=s.b
if(u!==a){if(u!=null)u.gq().O(0,s.gX())
t=s.b
s.b=a
a.gq().h(0,s.gX())
u=new D.M("camera",t,s.b,[X.bP])
u.b=!0
s.Y(u)}},
sb4:function(a,b){var u,t,s=this
if(b==null)b=X.k_(null)
u=s.c
if(u!==b){if(u!=null)u.gq().O(0,s.gX())
t=s.c
s.c=b
b.gq().h(0,s.gX())
u=new D.M("target",t,s.c,[X.cF])
u.b=!0
s.Y(u)}},
sb5:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().O(0,t.gX())
u=t.d
t.d=a
if(a!=null)a.gq().h(0,t.gX())
s=new D.M("technique",u,t.d,[O.bE])
s.b=!0
t.Y(s)}},
aa:function(a){var u=this
a.cH(u.d)
u.c.a_(a)
u.b.a_(a)
u.e.ak(0,a)
u.e.aa(a)
u.b.aQ(a)
u.c.toString
a.cG()},
$iax:1}
M.dk.prototype={
Y:function(a){var u
H.k(a,"$iy")
u=this.y
if(u!=null)u.E(a)},
aT:function(){return this.Y(null)},
fI:function(a,b){var u,t,s,r,q,p,o,n=E.ag
H.m(b,"$id",[n],"$ad")
for(u=b.length,t=this.gX(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bS()
o.sac(null)
o.saM(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bA([n])
n.b=!0
this.Y(n)},
fK:function(a,b){var u,t,s=E.ag
H.m(b,"$id",[s],"$ad")
for(u=b.gR(b),t=this.gX();u.B();)u.gG(u).gq().O(0,t)
s=new D.bB([s])
s.b=!0
this.Y(s)},
saZ:function(a){var u,t,s=this
if(a==null)a=X.kQ(null)
u=s.b
if(u!==a){if(u!=null)u.gq().O(0,s.gX())
t=s.b
s.b=a
a.gq().h(0,s.gX())
u=new D.M("camera",t,s.b,[X.bP])
u.b=!0
s.Y(u)}},
sb4:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gq().O(0,t.gX())
u=t.c
t.c=b
b.gq().h(0,t.gX())
s=new D.M("target",u,t.c,[X.cF])
s.b=!0
t.Y(s)}},
sb5:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().O(0,t.gX())
u=t.d
t.d=a
if(a!=null)a.gq().h(0,t.gX())
s=new D.M("technique",u,t.d,[O.bE])
s.b=!0
t.Y(s)}},
gq:function(){var u=this.y
return u==null?this.y=D.K():u},
aa:function(a){var u,t=this
a.cH(t.d)
t.c.a_(a)
t.b.a_(a)
u=t.d
if(u!=null)u.ak(0,a)
for(u=t.e.a,u=new J.am(u,u.length,[H.x(u,0)]);u.B();)u.d.ak(0,a)
for(u=t.e.a,u=new J.am(u,u.length,[H.x(u,0)]);u.B();)u.d.aa(a)
t.b.toString
a.cy.aA()
a.db.aA()
t.c.toString
a.cG()},
sf4:function(a,b){this.e=H.m(b,"$ia2",[E.ag],"$aa2")},
$iax:1}
M.ax.prototype={}
A.d9.prototype={}
A.fc.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iK:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dH:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.dB.prototype={
eC:function(d1,d2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="Required uniform value, ",a8=", was not defined or used in shader.",a9="emissionTxt",b0="nullEmissionTxt",b1="ambientTxt",b2="nullAmbientTxt",b3="diffuseTxt",b4="nullDiffuseTxt",b5="invDiffuseTxt",b6="nullInvDiffuseTxt",b7="specularTxt",b8="nullSpecularTxt",b9="nullBumpTxt",c0="reflectTxt",c1="nullReflectTxt",c2="refractTxt",c3="nullRefractTxt",c4="alphaTxt",c5="nullAlphaTxt",c6="uniform mat4 objMat;\n",c7="   if(nullAlphaTxt > 0) return alpha;\n",c8="   if (a <= 0.000001) discard;\n",c9="precision mediump float;\n\n",d0="precision mediump float;\n\nvarying vec3 normalVec;\n"
a6.z=d1
u=new P.bk("")
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
d1.i3(u)
d1.ia(u)
d1.i4(u)
d1.ik(u)
d1.il(u)
d1.ic(u)
d1.iq(u)
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
u=new P.bk("")
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
q.i7(u)
q.i2(u)
q.i5(u)
q.i8(u)
q.ii(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.ig(u)
q.ih(u)}q.ib(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=q.y
if(l!==C.c){m=u.a=m+"uniform float alpha;\n"
if(l!==C.i){m=u.a=m+"uniform int nullAlphaTxt;\n"
if(l===C.f){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.h){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m=u.a=m+"\n"}m+="float alphaValue()\n"
u.a=m
m=u.a=m+"{\n"
switch(l){case C.c:m=u.a=m+"   return 1.0;\n"
break
case C.i:m=u.a=m+"   return alpha;\n"
break
case C.f:m+=c7
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+=c8
u.a=m
m=u.a=m+"   return a;\n"
break
case C.h:m+=c7
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
k=H.c([],[P.h])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.m(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.i6(u)
q.ie(u)
q.ij(u)
q.im(u)
q.io(u)
q.ip(u)
q.i9(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m=u.a=m+"   float alpha = alphaValue();\n"
p=p?u.a=m+"   vec3 norm = normal();\n":m
if(o)u.a=p+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.c([],[P.h])
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
i="vec4("+C.a.m(j," + ")+", alpha);"
q=u.a
q=u.a=(n?u.a=q+("   gl_FragColor = colorMat*"+i+"\n"):u.a=q+("   gl_FragColor = "+i+"\n"))+"}\n"
a6.e4(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
a6.Q=a6.x.j(0,"posAttr")
a6.cx=a6.x.j(0,"normAttr")
a6.ch=a6.x.j(0,"binmAttr")
a6.cy=a6.x.j(0,"txt2DAttr")
a6.db=a6.x.j(0,"txtCubeAttr")
a6.dx=a6.x.j(0,"bendAttr")
if(d1.fr)a6.id=H.i(a6.y.n(0,"invViewMat"),"$iar")
if(t)a6.dy=H.i(a6.y.n(0,"objMat"),"$iar")
if(r)a6.fr=H.i(a6.y.n(0,"viewObjMat"),"$iar")
a6.fy=H.i(a6.y.n(0,"projViewObjMat"),"$iar")
if(d1.x2)a6.k1=H.i(a6.y.n(0,"txt2DMat"),"$icL")
if(d1.y1)a6.k2=H.i(a6.y.n(0,"txtCubeMat"),"$iar")
if(d1.y2)a6.k3=H.i(a6.y.n(0,"colorMat"),"$iar")
a6.sf0(H.c([],[A.ar]))
t=d1.ap
if(t>0){a6.k4=H.k(a6.y.n(0,"bendMatCount"),"$iL")
for(h=0;h<t;++h){s=a6.r1
r=a6.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.w(P.r(a7+q+a8));(s&&C.a).h(s,H.i(g,"$iar"))}}t=d1.a
if(t!==C.c){a6.r2=H.i(a6.y.n(0,"emissionClr"),"$iJ")
switch(t){case C.c:break
case C.i:break
case C.f:a6.rx=H.i(a6.y.n(0,a9),"$iah")
a6.x1=H.i(a6.y.n(0,b0),"$iL")
break
case C.h:a6.ry=H.i(a6.y.n(0,a9),"$iad")
a6.x1=H.i(a6.y.n(0,b0),"$iL")
break}}t=d1.b
if(t!==C.c){a6.x2=H.i(a6.y.n(0,"ambientClr"),"$iJ")
switch(t){case C.c:break
case C.i:break
case C.f:a6.y1=H.i(a6.y.n(0,b1),"$iah")
a6.ap=H.i(a6.y.n(0,b2),"$iL")
break
case C.h:a6.y2=H.i(a6.y.n(0,b1),"$iad")
a6.ap=H.i(a6.y.n(0,b2),"$iL")
break}}t=d1.c
if(t!==C.c){a6.ai=H.i(a6.y.n(0,"diffuseClr"),"$iJ")
switch(t){case C.c:break
case C.i:break
case C.f:a6.bj=H.i(a6.y.n(0,b3),"$iah")
a6.bk=H.i(a6.y.n(0,b4),"$iL")
break
case C.h:a6.dK=H.i(a6.y.n(0,b3),"$iad")
a6.bk=H.i(a6.y.n(0,b4),"$iL")
break}}t=d1.d
if(t!==C.c){a6.bl=H.i(a6.y.n(0,"invDiffuseClr"),"$iJ")
switch(t){case C.c:break
case C.i:break
case C.f:a6.dL=H.i(a6.y.n(0,b5),"$iah")
a6.bm=H.i(a6.y.n(0,b6),"$iL")
break
case C.h:a6.dM=H.i(a6.y.n(0,b5),"$iad")
a6.bm=H.i(a6.y.n(0,b6),"$iL")
break}}t=d1.e
if(t!==C.c){a6.bp=H.i(a6.y.n(0,"shininess"),"$ia_")
a6.bn=H.i(a6.y.n(0,"specularClr"),"$iJ")
switch(t){case C.c:break
case C.i:break
case C.f:a6.dN=H.i(a6.y.n(0,b7),"$iah")
a6.bo=H.i(a6.y.n(0,b8),"$iL")
break
case C.h:a6.dO=H.i(a6.y.n(0,b7),"$iad")
a6.bo=H.i(a6.y.n(0,b8),"$iL")
break}}switch(d1.f){case C.c:break
case C.i:break
case C.f:a6.dP=H.i(a6.y.n(0,"bumpTxt"),"$iah")
a6.bq=H.i(a6.y.n(0,b9),"$iL")
break
case C.h:a6.dQ=H.i(a6.y.n(0,"bumpTxt"),"$iad")
a6.bq=H.i(a6.y.n(0,b9),"$iL")
break}if(d1.dy){a6.dR=H.i(a6.y.n(0,"envSampler"),"$iad")
a6.dS=H.i(a6.y.n(0,"nullEnvTxt"),"$iL")
t=d1.r
if(t!==C.c){a6.br=H.i(a6.y.n(0,"reflectClr"),"$iJ")
switch(t){case C.c:break
case C.i:break
case C.f:a6.dT=H.i(a6.y.n(0,c0),"$iah")
a6.bs=H.i(a6.y.n(0,c1),"$iL")
break
case C.h:a6.dU=H.i(a6.y.n(0,c0),"$iad")
a6.bs=H.i(a6.y.n(0,c1),"$iL")
break}}t=d1.x
if(t!==C.c){a6.bt=H.i(a6.y.n(0,"refraction"),"$ia_")
a6.bu=H.i(a6.y.n(0,"refractClr"),"$iJ")
switch(t){case C.c:break
case C.i:break
case C.f:a6.dV=H.i(a6.y.n(0,c2),"$iah")
a6.bv=H.i(a6.y.n(0,c3),"$iL")
break
case C.h:a6.dW=H.i(a6.y.n(0,c2),"$iad")
a6.bv=H.i(a6.y.n(0,c3),"$iL")
break}}}t=d1.y
if(t!==C.c){a6.bw=H.i(a6.y.n(0,"alpha"),"$ia_")
switch(t){case C.c:break
case C.i:break
case C.f:a6.dX=H.i(a6.y.n(0,c4),"$iah")
a6.bx=H.i(a6.y.n(0,c5),"$iL")
break
case C.h:a6.dY=H.i(a6.y.n(0,c4),"$iad")
a6.bx=H.i(a6.y.n(0,c5),"$iL")
break}}a6.seL(H.c([],[A.cK]))
a6.seM(H.c([],[A.cM]))
a6.seN(H.c([],[A.cN]))
a6.seO(H.c([],[A.cO]))
a6.seP(H.c([],[A.cP]))
a6.seQ(H.c([],[A.cQ]))
if(d1.k2){t=d1.z
if(t>0){a6.dZ=H.k(a6.y.n(0,"dirLightCount"),"$iL")
for(h=0;h<t;++h){s=a6.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.w(P.r(a7+r+a8))
H.i(g,"$iJ")
s=a6.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.w(P.r(a7+r+a8))
H.i(f,"$iJ")
s=a6.cq;(s&&C.a).h(s,new A.cK(g,f))}}t=d1.Q
if(t>0){a6.e_=H.k(a6.y.n(0,"pntLightCount"),"$iL")
for(h=0;h<t;++h){s=a6.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.w(P.r(a7+r+a8))
H.i(g,"$iJ")
s=a6.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.w(P.r(a7+r+a8))
H.i(f,"$iJ")
s=a6.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.w(P.r(a7+r+a8))
H.i(e,"$iJ")
s=a6.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.w(P.r(a7+r+a8))
H.i(d,"$ia_")
s=a6.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.w(P.r(a7+r+a8))
H.i(c,"$ia_")
s=a6.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.w(P.r(a7+r+a8))
H.i(b,"$ia_")
s=a6.cr;(s&&C.a).h(s,new A.cM(g,f,e,d,c,b))}}t=d1.ch
if(t>0){a6.e0=H.k(a6.y.n(0,"spotLightCount"),"$iL")
for(h=0;h<t;++h){s=a6.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.w(P.r(a7+r+a8))
H.i(g,"$iJ")
s=a6.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.w(P.r(a7+r+a8))
H.i(f,"$iJ")
s=a6.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.w(P.r(a7+r+a8))
H.i(e,"$iJ")
s=a6.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.w(P.r(a7+r+a8))
H.i(d,"$iJ")
s=a6.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.w(P.r(a7+r+a8))
H.i(c,"$ia_")
s=a6.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.w(P.r(a7+r+a8))
H.i(b,"$ia_")
s=a6.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.w(P.r(a7+r+a8))
H.i(a,"$ia_")
s=a6.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.w(P.r(a7+r+a8))
H.i(a0,"$ia_")
s=a6.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.w(P.r(a7+r+a8))
H.i(a1,"$ia_")
s=a6.cs;(s&&C.a).h(s,new A.cN(g,f,e,d,c,b,a,a0,a1))}}t=d1.cx
if(t>0){a6.e1=H.k(a6.y.n(0,"txtDirLightCount"),"$iL")
for(h=0;h<t;++h){s=a6.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.w(P.r(a7+r+a8))
H.i(g,"$iJ")
s=a6.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.w(P.r(a7+r+a8))
H.i(f,"$iJ")
s=a6.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.w(P.r(a7+r+a8))
H.i(e,"$iJ")
s=a6.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.w(P.r(a7+r+a8))
H.i(d,"$iJ")
s=a6.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.w(P.r(a7+r+a8))
H.i(c,"$iJ")
s=a6.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.w(P.r(a7+r+a8))
H.i(b,"$iL")
s=a6.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.w(P.r(a7+r+a8))
H.i(a,"$iah")
s=a6.ct;(s&&C.a).h(s,new A.cO(g,f,e,d,c,a,b))}}t=d1.cy
if(t>0){a6.e2=H.k(a6.y.n(0,"txtPntLightCount"),"$iL")
for(h=0;h<t;++h){s=a6.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.w(P.r(a7+r+a8))
H.i(g,"$iJ")
s=a6.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.w(P.r(a7+r+a8))
H.i(f,"$iJ")
s=a6.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.w(P.r(a7+r+a8))
H.i(e,"$icL")
s=a6.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.w(P.r(a7+r+a8))
H.i(d,"$iJ")
s=a6.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.w(P.r(a7+r+a8))
H.i(c,"$iL")
s=a6.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.w(P.r(a7+r+a8))
H.i(b,"$ia_")
s=a6.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.w(P.r(a7+r+a8))
H.i(a,"$ia_")
s=a6.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.w(P.r(a7+r+a8))
H.i(a0,"$ia_")
s=a6.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.w(P.r(a7+r+a8))
H.i(a1,"$iad")
s=a6.cu;(s&&C.a).h(s,new A.cP(g,f,e,d,a1,c,b,a,a0))}}t=d1.db
if(t>0){a6.e3=H.k(a6.y.n(0,"txtSpotLightCount"),"$iL")
for(h=0;h<t;++h){s=a6.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.w(P.r(a7+r+a8))
H.i(g,"$iJ")
s=a6.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.w(P.r(a7+r+a8))
H.i(f,"$iJ")
s=a6.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.w(P.r(a7+r+a8))
H.i(e,"$iJ")
s=a6.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.w(P.r(a7+r+a8))
H.i(d,"$iJ")
s=a6.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.w(P.r(a7+r+a8))
H.i(c,"$iJ")
s=a6.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.w(P.r(a7+r+a8))
H.i(b,"$iL")
s=a6.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.w(P.r(a7+r+a8))
H.i(a,"$iJ")
s=a6.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.w(P.r(a7+r+a8))
H.i(a0,"$ia_")
s=a6.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.w(P.r(a7+r+a8))
H.i(a1,"$ia_")
s=a6.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.w(P.r(a7+r+a8))
H.i(a2,"$ia_")
s=a6.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.w(P.r(a7+r+a8))
H.i(a3,"$ia_")
s=a6.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.w(P.r(a7+r+a8))
H.i(a4,"$ia_")
s=a6.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.w(P.r(a7+r+a8))
H.i(a5,"$iah")
s=a6.cv;(s&&C.a).h(s,new A.cQ(g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ah:function(a,b,c){C.b.a0(b.a,b.d,1)},
ad:function(a,b,c){C.b.a0(b.a,b.d,1)},
sf0:function(a){this.r1=H.m(a,"$ib",[A.ar],"$ab")},
seL:function(a){this.cq=H.m(a,"$ib",[A.cK],"$ab")},
seM:function(a){this.cr=H.m(a,"$ib",[A.cM],"$ab")},
seN:function(a){this.cs=H.m(a,"$ib",[A.cN],"$ab")},
seO:function(a){this.ct=H.m(a,"$ib",[A.cO],"$ab")},
seP:function(a){this.cu=H.m(a,"$ib",[A.cP],"$ab")},
seQ:function(a){this.cv=H.m(a,"$ib",[A.cQ],"$ab")}}
A.hc.prototype={
i3:function(a){var u,t,s,r=this
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
ia:function(a){var u
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
i4:function(a){var u
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
ik:function(a){var u,t
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
il:function(a){var u,t
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
ic:function(a){var u
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
iq:function(a){var u
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
as:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.j(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.j.b9(c,1))+"Txt;\n")
if(b===C.f)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
i7:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.c)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.as(a,s,"emission")
u=a.a+="\n"
u+="vec3 emission()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.i:s=a.a=u+"   return emissionClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
break
case C.h:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
i2:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.c)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.as(a,s,"ambient")
u=a.a+="\n"
u+="vec3 ambient()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.i:s=a.a=u+"   return ambientClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
break
case C.h:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
i5:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.c)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.as(a,s,"diffuse")
u=a.a+="vec3 diffuseColor;\n"
u+="\n"
a.a=u
u+="void setDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.i:s=a.a=u+"   diffuseColor = diffuseClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
break
case C.h:s=u+t
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
i8:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.c)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.as(a,s,"invDiffuse")
u=a.a+="vec3 invDiffuseColor;\n"
u+="\n"
a.a=u
u+="void setInvDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.i:s=a.a=u+"   invDiffuseColor = invDiffuseClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
break
case C.h:s=u+t
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
ii:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.c)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.as(a,s,"specular")
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
case C.i:s=a.a=u+"   specularColor = specularClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
break
case C.h:s=u+t
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
ib:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u=a.a=u+"\n"
t=this.f
switch(t){case C.c:break
case C.i:break
case C.f:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+=s
a.a=u
u=a.a=u+"\n"
break
case C.h:u+="uniform samplerCube bumpTxt;\n"
a.a=u
u+=s
a.a=u
u=a.a=u+"\n"
break}u+="vec3 normal()\n"
a.a=u
u=a.a=u+"{\n"
switch(t){case C.c:u=a.a=u+r
break
case C.i:u=a.a=u+r
break
case C.f:u+=q
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
case C.h:u+=q
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
ig:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.c)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.as(a,s,"reflect")
u=a.a+="\n"
u+="vec3 reflect(vec3 refl)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
switch(s){case C.c:s=u
break
case C.i:s=a.a=u+"   vec3 scalar = reflectClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
break
case C.h:s=u+t
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
ih:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.c)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.as(a,s,"refract")
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
case C.i:s=a.a=u+"   vec3 scalar = refractClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
break
case C.h:s=u+t
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
i6:function(a){var u,t=this.z
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
ie:function(a){var u,t=this.Q
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
ij:function(a){var u,t=this.ch
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
im:function(a){var u,t,s=this.cx
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
io:function(a){var u,t,s=this.cy
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
ip:function(a){var u,t,s=this.db
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
i9:function(a){var u
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
i:function(a){return this.ai}}
A.cK.prototype={}
A.cO.prototype={}
A.cM.prototype={}
A.cP.prototype={}
A.cN.prototype={}
A.cQ.prototype={}
A.cC.prototype={
cT:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
e4:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.d8(b,35633)
r.f=r.d8(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.A(H.kh(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.w(P.r("Failed to link shader: "+H.l(s)))}r.hH()
r.hJ()},
a_:function(a){a.a.useProgram(this.r)
this.x.iK()},
d8:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.A(H.kh(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.e(P.r("Error compiling shader '"+H.l(s)+"': "+H.l(u)))}return s},
hH:function(){var u,t,s,r=this,q=H.c([],[A.d9]),p=r.a,o=H.ae(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d9(p,t.name,s))}r.x=new A.fc(q)},
hJ:function(){var u,t,s,r=this,q=H.c([],[A.e2]),p=r.a,o=H.ae(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.iE(t.type,t.size,t.name,s))}r.y=new A.ix(q)},
aI:function(a,b,c){var u=this.a
if(a===1)return new A.L(u,b,c)
else return A.ka(u,this.r,b,a,c)},
f7:function(a,b,c){var u=this.a
if(a===1)return new A.ah(u,b,c)
else return A.ka(u,this.r,b,a,c)},
f8:function(a,b,c){var u=this.a
if(a===1)return new A.ad(u,b,c)
else return A.ka(u,this.r,b,a,c)},
bg:function(a,b){return new P.ek(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
iE:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aI(b,c,d)
case 5121:return u.aI(b,c,d)
case 5122:return u.aI(b,c,d)
case 5123:return u.aI(b,c,d)
case 5124:return u.aI(b,c,d)
case 5125:return u.aI(b,c,d)
case 5126:return new A.a_(u.a,c,d)
case 35664:return new A.is(u.a,c,d)
case 35665:return new A.J(u.a,c,d)
case 35666:return new A.iv(u.a,c,d)
case 35667:return new A.it(u.a,c,d)
case 35668:return new A.iu(u.a,c,d)
case 35669:return new A.iw(u.a,c,d)
case 35674:return new A.iy(u.a,c,d)
case 35675:return new A.cL(u.a,c,d)
case 35676:return new A.ar(u.a,c,d)
case 35678:return u.f7(b,c,d)
case 35680:return u.f8(b,c,d)
case 35670:throw H.e(u.bg("BOOL",c))
case 35671:throw H.e(u.bg("BOOL_VEC2",c))
case 35672:throw H.e(u.bg("BOOL_VEC3",c))
case 35673:throw H.e(u.bg("BOOL_VEC4",c))
default:throw H.e(P.r("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bR.prototype={
i:function(a){return this.b}}
A.dR.prototype={}
A.e2.prototype={}
A.ix.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
n:function(a,b){var u=this.j(0,b)
if(u==null)throw H.e(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.S()},
S:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.E)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.L.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.it.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.iu.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.iw.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.ir.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
si0:function(a){H.m(a,"$ib",[P.C],"$ab")}}
A.a_.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.is.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.J.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.iv.prototype={
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.iy.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.cL.prototype={
ag:function(a){var u=new Float32Array(H.d3(H.m(a,"$ib",[P.z],"$ab")))
C.b.ek(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.ar.prototype={
ag:function(a){var u=new Float32Array(H.d3(H.m(a,"$ib",[P.z],"$ab")))
C.b.el(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.ah.prototype={
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.ad.prototype={
es:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.jR.prototype={
$1:function(a){return new V.a4(Math.cos(a),Math.sin(a),0)},
$S:36}
F.jF.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.kw(n.$1(o),m)
m=J.lU(J.kw(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.R(m.a,m.b,m.c)
u=m.w(0,Math.sqrt(m.C(m)))
n=$.l8
if(n==null){n=new V.R(1,0,0)
$.l8=n
t=n}else t=n
n=u.av(!J.a1(u,t)?V.lc():t)
s=n.w(0,Math.sqrt(n.C(n)))
n=s.av(u)
t=n.w(0,Math.sqrt(n.C(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.v(0,n*m)
m=s.v(0,q*m)
m=J.lT(l,new V.a4(n.a-m.a,n.b-m.b,n.c-m.c))
if(!J.a1(a.f,m)){a.f=H.k(m,"$ia4")
n=a.a
if(n!=null)n.a9()}},
$S:37}
F.a7.prototype={
b_:function(){var u=this
if(!u.gdI()){C.a.O(u.a.a.d.b,u)
u.a.a.a9()}u.hs()
u.ht()
u.hu()},
hE:function(a){this.a=a
C.a.h(a.d.b,this)},
hF:function(a){this.b=a
C.a.h(a.d.c,this)},
hG:function(a){this.c=a
C.a.h(a.d.d,this)},
hs:function(){var u=this.a
if(u!=null){C.a.O(u.d.b,this)
this.a=null}},
ht:function(){var u=this.b
if(u!=null){C.a.O(u.d.c,this)
this.b=null}},
hu:function(){var u=this.c
if(u!=null){C.a.O(u.d.d,this)
this.c=null}},
gdI:function(){return this.a==null||this.b==null||this.c==null},
f_:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cR()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.e5())return
return s.w(0,Math.sqrt(s.C(s)))},
f3:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.t(0,q)
r=new V.R(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.C(r)))
r=t.t(0,q)
r=new V.R(r.a,r.b,r.c)
r=s.av(r.w(0,Math.sqrt(r.C(r))))
return r.w(0,Math.sqrt(r.C(r)))},
cm:function(){var u,t=this
if(t.d!=null)return!0
u=t.f_()
if(u==null){u=t.f3()
if(u==null)return!1}t.d=u
t.a.a.a9()
return!0},
eZ:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cR()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.e5())return
return s.w(0,Math.sqrt(s.C(s)))},
f2:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.S().a){l=d.t(0,g)
l=new V.R(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.P(0)}else{p=(l-u.b)/r
l=d.t(0,g).v(0,p).p(0,g).t(0,j)
l=new V.R(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.P(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.C(l)))
l=o.av(q)
l=l.w(0,Math.sqrt(l.C(l))).av(o)
q=l.w(0,Math.sqrt(l.C(l)))}return q},
ck:function(){var u,t=this
if(t.e!=null)return!0
u=t.eZ()
if(u==null){u=t.f2()
if(u==null)return!1}t.e=u
t.a.a.a9()
return!0},
giB:function(a){var u=this
if(J.a1(u.a,u.b))return!0
if(J.a1(u.b,u.c))return!0
if(J.a1(u.c,u.a))return!0
return!1},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
H:function(a){var u,t,s=this
if(s.gdI())return a+"disposed"
u=a+C.j.az(J.aL(s.a.e),0)+", "+C.j.az(J.aL(s.b.e),0)+", "+C.j.az(J.aL(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
S:function(){return this.H("")}}
F.fF.prototype={}
F.hV.prototype={
b0:function(a,b,c){var u,t=b.a
t.a.a.D()
t=t.e
u=c.a
u.a.a.D()
if(t==u.e){t=b.b
t.a.a.D()
t=t.e
u=c.b
u.a.a.D()
if(t==u.e){t=b.c
t.a.a.D()
t=t.e
u=c.c
u.a.a.D()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.D()
t=t.e
u=c.b
u.a.a.D()
if(t==u.e){t=b.b
t.a.a.D()
t=t.e
u=c.c
u.a.a.D()
if(t==u.e){t=b.c
t.a.a.D()
t=t.e
u=c.a
u.a.a.D()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.D()
t=t.e
u=c.c
u.a.a.D()
if(t==u.e){t=b.b
t.a.a.D()
t=t.e
u=c.a
u.a.a.D()
if(t==u.e){t=b.c
t.a.a.D()
t=t.e
u=c.b
u.a.a.D()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bD.prototype={}
F.h0.prototype={}
F.iq.prototype={
b0:function(a,b,c){var u,t=b.a
t.a.a.D()
t=t.e
u=c.a
u.a.a.D()
if(t==u.e){t=b.b
t.a.a.D()
t=t.e
u=c.b
u.a.a.D()
return t==u.e}else{t=b.a
t.a.a.D()
t=t.e
u=c.b
u.a.a.D()
if(t==u.e){t=b.b
t.a.a.D()
t=t.e
u=c.a
u.a.a.D()
return t==u.e}else return!1}}}
F.bY.prototype={}
F.dP.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.K():u},
au:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.au()||!1
if(!t.a.au())u=!1
s=t.e
if(s!=null)s.aC(0)
return u},
iW:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.x(o,0)])
for(o=[F.aj];u.length!==0;){t=C.a.giM(u)
C.a.ec(u,0)
if(t!=null){s=H.c([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.j(u,r)
q=u[r]
if(q!=null&&a.b0(0,t,q)){C.a.h(s,q)
C.a.ec(u,r)}}if(s.length>1)b.iV(s)}}p.a.D()
p.c.cJ()
p.d.cJ()
p.b.jb()
p.c.cK(new F.iq())
p.d.cK(new F.hV())
o=p.e
if(o!=null)o.aC(0)},
dB:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aK()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bp().a)!==0)++s
if((t&$.bo().a)!==0)++s
if((t&$.bq().a)!==0)++s
if((t&$.br().a)!==0)++s
if((t&$.d6().a)!==0)++s
if((t&$.d7().a)!==0)++s
if((t&$.ce().a)!==0)++s
if((t&$.bn().a)!==0)++s
r=a3.gcR(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.z
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.dc])
for(n=0,m=0;m<s;++m){l=a3.ix(m)
k=l.gcR(l)
C.a.W(o,m,new Z.dc(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.j(u,j)
i=u[j].iT(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.W(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.d3(p)),35044)
u.bindBuffer(a0,null)
e=new Z.ci(new Z.ea(a0,f),o,a3)
e.sfj(H.c([],[Z.bV]))
a.b.b
if(a.c.b.length!==0){t=P.C
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.D()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.j(c,m)
c=c[m].b
c.a.a.D()
C.a.h(d,c.e)}b=Z.ld(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bV(1,d.length,b))}if(a.d.b.length!==0){t=P.C
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.D()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.j(c,m)
c=c[m].b
c.a.a.D()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.j(c,m)
c=c[m].c
c.a.a.D()
C.a.h(d,c.e)}b=Z.ld(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bV(4,d.length,b))}return e},
i:function(a){var u=this,t=H.c([],[P.h])
if(u.a.c.length!==0){C.a.h(t,"Vertices:")
C.a.h(t,u.a.H("   "))}u.b.b
if(u.c.b.length!==0){C.a.h(t,"Lines:")
C.a.h(t,u.c.H("   "))}if(u.d.b.length!==0){C.a.h(t,"Faces:")
C.a.h(t,u.d.H("   "))}return C.a.m(t,"\n")},
a9:function(){var u=this.e
if(u!=null)u.E(null)},
$inB:1}
F.hO.prototype={
is:function(a){var u,t,s,r,q,p
H.m(a,"$ib",[F.aj],"$ab")
u=H.c([],[F.a7])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.dm(t,q,p))}return u},
it:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.aj],"$ab")
u=H.c([],[F.a7])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.j(c,r)
l=c[r];++r
if(r>=m)return H.j(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.j(c,j)
i=c[j]
if(s<0||s>=m)return H.j(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.dm(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dm(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dm(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dm(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
cK:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.j(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b0(0,p,n)){p.b_()
break}}}}},
cJ:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.j(t,u)
s=t[u]
t=s.giB(s)
if(t)s.b_()}},
au:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.E)(u),++r)if(!u[r].cm())s=!1
return s},
cl:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.E)(u),++r)if(!u[r].ck())s=!1
return s},
i:function(a){return this.S()},
H:function(a){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].H(a))
return C.a.m(r,"\n")},
S:function(){return this.H("")},
sfe:function(a){this.b=H.m(a,"$ib",[F.a7],"$ab")}}
F.hP.prototype={
gl:function(a){return this.b.length},
cK:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.j(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b0(0,p,n)){p.b_()
break}}}}},
cJ:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.j(t,u)
s=t[u]
t=J.a1(s.a,s.b)
if(t)s.b_()}},
i:function(a){return this.S()},
H:function(a){var u,t,s=H.c([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.j(t,u)
C.a.h(s,t[u].H(a+(""+u+". ")))}return C.a.m(s,"\n")},
S:function(){return this.H("")},
sfk:function(a){this.b=H.m(a,"$ib",[F.bD],"$ab")}}
F.hQ.prototype={
gl:function(a){return 0},
jb:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.j(t,u)
t=t[u].gjz()
t=t.gjw(t)
if(t.gl(t).js(0,1)){t=this.b
return H.j(t,u)
t[u].b_()}}},
i:function(a){return this.S()},
H:function(a){var u,t,s=H.c([],[P.h])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.j(u,t)
C.a.h(s,u[t].H(a))}return C.a.m(s,"\n")},
S:function(){return this.H("")},
sc8:function(a){this.b=H.m(a,"$ib",[F.bY],"$ab")}}
F.aj.prototype={
dF:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.iG(u.cx,r,o,t,s,q,p,a,n)},
iT:function(a){var u,t,s=this
if(a.A(0,$.aK())){u=s.f
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.A(0,$.bp())){u=s.r
t=[P.z]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.A(0,$.bo())){u=s.x
t=[P.z]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.A(0,$.bq())){u=s.y
t=[P.z]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.A(0,$.br())){u=s.z
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.A(0,$.d6())){u=s.Q
t=[P.z]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.A(0,$.d7())){u=s.Q
t=[P.z]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.A(0,$.ce()))return H.c([s.ch],[P.z])
else if(a.A(0,$.bn())){u=s.cx
t=[P.z]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.z])},
cm:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cR()
t.d.N(0,new F.iR(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a9()
s=t.a.e
if(s!=null)s.aC(0)}return!0},
ck:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cR()
t.d.N(0,new F.iQ(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a9()
s=t.a.e
if(s!=null)s.aC(0)}return!0},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
H:function(a){var u,t,s=this,r="-",q=H.c([],[P.h])
C.a.h(q,C.j.az(J.aL(s.e),0))
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
t=C.a.m(q,", ")
return a+"{"+t+"}"},
S:function(){return this.H("")}}
F.iR.prototype={
$1:function(a){var u,t
H.k(a,"$ia7")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:5}
F.iQ.prototype={
$1:function(a){var u,t
H.k(a,"$ia7")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:5}
F.iH.prototype={
D:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.j(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.e(P.r("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a9()
return!0},
bh:function(a,b,c,d,e,f){var u=F.iG(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gl:function(a){return this.c.length},
au:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)u[s].cm()
return!0},
cl:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)u[s].ck()
return!0},
iA:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a1(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
i:function(a){return this.S()},
H:function(a){var u,t,s,r
this.D()
u=H.c([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].H(a))
return C.a.m(u,"\n")},
S:function(){return this.H("")},
si1:function(a){this.c=H.m(a,"$ib",[F.aj],"$ab")}}
F.iI.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.j(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.j(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.j(t,b)
return t[b]},
N:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a7]})
C.a.N(u.b,b)
C.a.N(u.c,new F.iJ(u,b))
C.a.N(u.d,new F.iK(u,b))},
i:function(a){return this.S()},
S:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].H(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].H(""))
return C.a.m(r,"\n")},
sff:function(a){this.b=H.m(a,"$ib",[F.a7],"$ab")},
sfg:function(a){this.c=H.m(a,"$ib",[F.a7],"$ab")},
sfh:function(a){this.d=H.m(a,"$ib",[F.a7],"$ab")}}
F.iJ.prototype={
$1:function(a){H.k(a,"$ia7")
if(!J.a1(a.a,this.a))this.b.$1(a)},
$S:5}
F.iK.prototype={
$1:function(a){var u
H.k(a,"$ia7")
u=this.a
if(!J.a1(a.a,u)&&!J.a1(a.b,u))this.b.$1(a)},
$S:5}
F.iL.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.j(t,u)
return t[u]}else{if(b<0)return H.j(t,b)
return t[b]}},
i:function(a){return this.S()},
S:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].H(""))
return C.a.m(r,"\n")},
sfl:function(a){this.b=H.m(a,"$ib",[F.bD],"$ab")},
sfm:function(a){this.c=H.m(a,"$ib",[F.bD],"$ab")}}
F.iN.prototype={}
F.iM.prototype={
b0:function(a,b,c){return J.a1(b.f,c.f)}}
F.iO.prototype={}
F.hu.prototype={
iV:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[F.aj],"$ab")
u=V.cR()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.R(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.w(0,Math.sqrt(u.C(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.E)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.w(0,Math.sqrt(o*o+n*n+m*m))}if(!J.a1(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.E(null)}}}return}}
F.iP.prototype={
gl:function(a){return 0},
i:function(a){return this.S()},
S:function(){var u,t,s=H.c([],[P.h])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.j(u,t)
C.a.h(s,u[t].H(""))}return C.a.m(s,"\n")},
sc8:function(a){this.b=H.m(a,"$ib",[F.bY],"$ab")}}
O.dA.prototype={
gq:function(){var u=this.dy
return u==null?this.dy=D.K():u},
a1:function(a){var u
H.k(a,"$iy")
u=this.dy
if(u!=null)u.E(a)},
bP:function(){return this.a1(null)},
dl:function(a){H.k(a,"$iy")
this.a=null
this.a1(a)},
hy:function(){return this.dl(null)},
fC:function(a,b){var u=V.an
H.m(b,"$id",[u],"$ad")
u=new D.bA([u])
u.b=!0
this.a1(u)},
fE:function(a,b){var u=V.an
H.m(b,"$id",[u],"$ad")
u=new D.bB([u])
u.b=!0
this.a1(u)},
d5:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.d.a2(a1.e.length+3,4)*4,a3=C.d.a2(a1.f.length+3,4)*4,a4=C.d.a2(a1.r.length+3,4)*4,a5=C.d.a2(a1.x.length+3,4)*4,a6=C.d.a2(a1.y.length+3,4)*4,a7=C.d.a2(a1.z.length+3,4)*4,a8=C.d.a2(a0.e.a.length+3,4)*4
a1=a0.f.c
u=a0.r.c
t=a0.x.c
s=a0.y.c
r=a0.z.c
q=a0.Q.c
p=a0.cx.c
o=a0.cy.c
n=a0.db.c
m="MaterialLight_"+C.d.i(a1.a)+C.d.i(u.a)+C.d.i(t.a)+C.d.i(s.a)+C.d.i(r.a)+C.d.i(q.a)+C.d.i(p.a)+C.d.i(o.a)+C.d.i(n.a)
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
f=a1===C.f||u===C.f||t===C.f||s===C.f||r===C.f||q===C.f||p===C.f||o===C.f||n===C.f
e=a1===C.h||u===C.h||t===C.h||s===C.h||r===C.h||q===C.h||p===C.h||o===C.h||n===C.h
d=a3+a6+a5+a4+a7>0
c=a8>0
b=h||!j||i
a=$.aK()
if(h){j=$.bp()
a=new Z.b8(a.a|j.a)}if(g){j=$.bo()
a=new Z.b8(a.a|j.a)}if(f){j=$.bq()
a=new Z.b8(a.a|j.a)}if(e){j=$.br()
a=new Z.b8(a.a|j.a)}if(c){j=$.bn()
a=new Z.b8(a.a|j.a)}return new A.hc(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
U:function(a,b){H.m(a,"$ib",[T.cH],"$ab")},
ak:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.am(u,u.length,[H.x(u,0)]);u.B();){t=u.d
t.toString
s=$.iF
if(s==null)s=$.iF=new V.R(0,0,1)
t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cM(s)}}},
ed:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a
if(a2==null){a2=a1.d5()
u=H.k(a3.fr.j(0,a2.ai),"$idB")
if(u==null){u=A.mi(a2,a3.a)
a3.dv(u)}a2=a1.a=u
a4.e=null}t=a2.z
s=t.bj
a2=a4.e
if(!(a2 instanceof Z.ci))a2=a4.e=null
if(a2==null||!a2.d.A(0,s)){a2=t.r1
if(a2)a4.d.au()
r=t.r2
if(r){q=a4.d
p=q.e
if(p!=null)++p.d
q.d.cl()
q.a.cl()
q=q.e
if(q!=null)q.aC(0)}q=t.ry
if(q){p=a4.d
o=p.e
if(o!=null)++o.d
p.a.iA()
p=p.e
if(p!=null)p.aC(0)}n=a4.d.dB(new Z.eb(a3.a),s)
n.aw($.aK()).e=a1.a.Q.c
if(a2)n.aw($.bp()).e=a1.a.cx.c
if(r)n.aw($.bo()).e=a1.a.ch.c
if(t.rx)n.aw($.bq()).e=a1.a.cy.c
if(q)n.aw($.br()).e=a1.a.db.c
if(t.x1)n.aw($.bn()).e=a1.a.dx.c
a4.e=n}a2=T.cH
m=H.c([],[a2])
a1.a.a_(a3)
if(t.fx){r=a1.a
q=a3.dx
q=q.gZ(q)
r=r.dy
r.toString
r.ag(q.ab(0,!0))}if(t.fy){r=a1.a
q=a3.cx
if(q==null){q=a3.db
q=q.gZ(q)
p=a3.dx
p=a3.cx=q.v(0,p.gZ(p))
q=p}r=r.fr
r.toString
r.ag(q.ab(0,!0))}r=a1.a
q=a3.ch
if(q==null){q=a3.gj9()
p=a3.dx
p=a3.ch=q.v(0,p.gZ(p))
q=p}r=r.fy
r.toString
r.ag(q.ab(0,!0))
if(t.x2){r=a1.a
q=a1.b
r=r.k1
r.toString
r.ag(C.o.ab(q,!0))}if(t.y1){r=a1.a
q=a1.c
r=r.k2
r.toString
r.ag(C.o.ab(q,!0))}if(t.y2){r=a1.a
q=a1.d
r=r.k3
r.toString
r.ag(C.o.ab(q,!0))}if(t.ap>0){l=a1.e.a.length
r=a1.a.k4
C.b.a0(r.a,r.d,l)
for(r=[P.z],k=0;k<l;++k){q=a1.a
p=a1.e.a
if(k>=p.length)return H.j(p,k)
p=p[k]
q.toString
H.k(p,"$ian")
q=q.r1
if(k>=q.length)return H.j(q,k)
q=q[k]
j=new Float32Array(H.d3(H.m(p.ab(0,!0),"$ib",r,"$ab")))
C.b.el(q.a,q.d,!1,j)}}switch(t.a){case C.c:break
case C.i:r=a1.a
q=a1.f.f
r=r.r2
r.toString
p=q.a
o=q.b
q=q.c
C.b.u(r.a,r.d,p,o,q)
break
case C.f:a1.U(m,a1.f.d)
r=a1.a
q=a1.f.d
r.ah(r.rx,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.b.u(q.a,q.d,p,o,r)
break
case C.h:a1.U(m,a1.f.e)
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
C.b.u(q.a,q.d,p,o,r)
break}if(t.k2){switch(t.b){case C.c:break
case C.i:r=a1.a
q=a1.r.f
r=r.x2
r.toString
p=q.a
o=q.b
q=q.c
C.b.u(r.a,r.d,p,o,q)
break
case C.f:a1.U(m,a1.r.d)
r=a1.a
q=a1.r.d
r.ah(r.y1,r.ap,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.b.u(q.a,q.d,p,o,r)
break
case C.h:a1.U(m,a1.r.e)
r=a1.a
q=a1.r.e
r.ad(r.y2,r.ap,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.b.u(q.a,q.d,p,o,r)
break}switch(t.c){case C.c:break
case C.i:r=a1.a
q=a1.x.f
r=r.ai
r.toString
p=q.a
o=q.b
q=q.c
C.b.u(r.a,r.d,p,o,q)
break
case C.f:a1.U(m,a1.x.d)
r=a1.a
q=a1.x.d
r.ah(r.bj,r.bk,q)
q=a1.a
r=a1.x.f
q=q.ai
q.toString
p=r.a
o=r.b
r=r.c
C.b.u(q.a,q.d,p,o,r)
break
case C.h:a1.U(m,a1.x.e)
r=a1.a
q=a1.x.e
r.ad(r.dK,r.bk,q)
q=a1.a
r=a1.x.f
q=q.ai
q.toString
p=r.a
o=r.b
r=r.c
C.b.u(q.a,q.d,p,o,r)
break}switch(t.d){case C.c:break
case C.i:r=a1.a
q=a1.y.f
r=r.bl
r.toString
p=q.a
o=q.b
q=q.c
C.b.u(r.a,r.d,p,o,q)
break
case C.f:a1.U(m,a1.y.d)
r=a1.a
q=a1.y.d
r.ah(r.dL,r.bm,q)
q=a1.a
r=a1.y.f
q=q.bl
q.toString
p=r.a
o=r.b
r=r.c
C.b.u(q.a,q.d,p,o,r)
break
case C.h:a1.U(m,a1.y.e)
r=a1.a
q=a1.y.e
r.ad(r.dM,r.bm,q)
q=a1.a
r=a1.y.f
q=q.bl
q.toString
p=r.a
o=r.b
r=r.c
C.b.u(q.a,q.d,p,o,r)
break}switch(t.e){case C.c:break
case C.i:r=a1.a
q=a1.z.f
r=r.bn
r.toString
p=q.a
o=q.b
q=q.c
C.b.u(r.a,r.d,p,o,q)
q=a1.a
o=a1.z.ch
q=q.bp
C.b.J(q.a,q.d,o)
break
case C.f:a1.U(m,a1.z.d)
r=a1.a
q=a1.z.d
r.ah(r.dN,r.bo,q)
q=a1.a
r=a1.z.f
q=q.bn
q.toString
p=r.a
o=r.b
r=r.c
C.b.u(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bp
C.b.J(r.a,r.d,o)
break
case C.h:a1.U(m,a1.z.e)
r=a1.a
q=a1.z.e
r.ad(r.dO,r.bo,q)
q=a1.a
r=a1.z.f
q=q.bn
q.toString
p=r.a
o=r.b
r=r.c
C.b.u(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bp
C.b.J(r.a,r.d,o)
break}if(t.z>0){l=a1.dx.e.length
r=a1.a.dZ
C.b.a0(r.a,r.d,l)
r=a3.db
i=r.gZ(r)
for(r=a1.dx.e,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.E)(r),++g){f=r[g]
p=a1.a.cq
if(h>=p.length)return H.j(p,h)
e=p[h]
p=i.cM(f.a)
o=p.a
d=p.b
c=p.c
c=p.w(0,Math.sqrt(o*o+d*d+c*c))
d=e.b
o=c.a
p=c.b
c=c.c
C.b.u(d.a,d.d,o,p,c)
c=f.c
p=e.c
C.b.u(p.a,p.d,c.a,c.b,c.c);++h}}if(t.Q>0){l=a1.dx.f.length
r=a1.a.e_
C.b.a0(r.a,r.d,l)
r=a3.db
i=r.gZ(r)
for(r=a1.dx.f,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.E)(r),++g){f=r[g]
p=a1.a.cr
if(h>=p.length)return H.j(p,h)
e=p[h]
p=f.gb3(f)
o=e.b
C.b.u(o.a,o.d,p.a,p.b,p.c)
p=i.b7(f.gb3(f))
o=e.c
C.b.u(o.a,o.d,p.a,p.b,p.c)
p=f.gao(f)
o=e.d
C.b.u(o.a,o.d,p.a,p.b,p.c)
p=f.gce()
o=e.e
C.b.J(o.a,o.d,p)
p=f.gcf()
o=e.f
C.b.J(o.a,o.d,p)
p=f.gcg()
o=e.r
C.b.J(o.a,o.d,p);++h}}if(t.ch>0){l=a1.dx.r.length
r=a1.a.e0
C.b.a0(r.a,r.d,l)
r=a3.db
i=r.gZ(r)
for(r=a1.dx.r,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.E)(r),++g){f=r[g]
p=a1.a.cs
if(h>=p.length)return H.j(p,h)
e=p[h]
p=f.gb3(f)
o=e.b
C.b.u(o.a,o.d,p.a,p.b,p.c)
p=f.gcp(f).jv()
o=e.c
C.b.u(o.a,o.d,p.a,p.b,p.c)
p=i.b7(f.gb3(f))
o=e.d
C.b.u(o.a,o.d,p.a,p.b,p.c)
p=f.gao(f)
o=e.e
C.b.u(o.a,o.d,p.a,p.b,p.c)
p=f.gju()
o=e.f
C.b.J(o.a,o.d,p)
p=f.gjt()
o=e.r
C.b.J(o.a,o.d,p)
p=f.gce()
o=e.x
C.b.J(o.a,o.d,p)
p=f.gcf()
o=e.y
C.b.J(o.a,o.d,p)
p=f.gcg()
o=e.z
C.b.J(o.a,o.d,p);++h}}if(t.cx>0){l=a1.dx.x.length
r=a1.a.e1
C.b.a0(r.a,r.d,l)
r=a3.db
i=r.gZ(r)
for(r=a1.dx.x,q=r.length,p=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.E)(r),++g){f=r[g]
o=a1.a.ct
if(h>=o.length)return H.j(o,h)
e=o[h]
o=f.gb6()
H.m(m,"$ib",p,"$ab")
if(!C.a.V(m,o)){o.sby(0,m.length)
C.a.h(m,o)}o=f.gcp(f)
d=e.d
C.b.u(d.a,d.d,o.a,o.b,o.c)
o=f.gbH()
d=e.b
C.b.u(d.a,d.d,o.a,o.b,o.c)
o=f.gbF(f)
d=e.c
C.b.u(d.a,d.d,o.a,o.b,o.c)
o=i.cM(f.gcp(f))
d=o.a
c=o.b
b=o.c
b=o.w(0,Math.sqrt(d*d+c*c+b*b))
c=e.e
d=b.a
o=b.b
b=b.c
C.b.u(c.a,c.d,d,o,b)
b=f.gao(f)
o=e.f
C.b.u(o.a,o.d,b.a,b.b,b.c)
b=f.gb6()
o=b.gbB(b)
if(!o){o=e.x
C.b.a0(o.a,o.d,1)}else{o=e.r
d=b.gbB(b)
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,b.gby(b))
o=e.x
C.b.a0(o.a,o.d,0)}++h}}if(t.cy>0){l=a1.dx.y.length
r=a1.a.e2
C.b.a0(r.a,r.d,l)
r=a3.db
i=r.gZ(r)
for(r=a1.dx.y,q=r.length,p=[P.z],o=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.E)(r),++g){f=r[g]
d=a1.a.cu
if(h>=d.length)return H.j(d,h)
e=d[h]
d=f.gb6()
H.m(m,"$ib",o,"$ab")
if(!C.a.V(m,d)){d.sby(0,m.length)
C.a.h(m,d)}a=i.v(0,f.gZ(f))
d=f.gZ(f)
c=$.cz
d=d.b7(c==null?$.cz=new V.a4(0,0,0):c)
c=e.b
C.b.u(c.a,c.d,d.a,d.b,d.c)
d=$.cz
d=a.b7(d==null?$.cz=new V.a4(0,0,0):d)
c=e.c
C.b.u(c.a,c.d,d.a,d.b,d.c)
d=a.cA(0)
c=e.d
j=new Float32Array(H.d3(H.m(new V.dD(d.a,d.b,d.c,d.e,d.f,d.r,d.y,d.z,d.Q).ab(0,!0),"$ib",p,"$ab")))
C.b.ek(c.a,c.d,!1,j)
c=f.gao(f)
d=e.e
C.b.u(d.a,d.d,c.a,c.b,c.c)
c=f.gb6()
d=c.gbB(c)
if(!d){d=e.r
C.b.a0(d.a,d.d,1)}else{d=e.f
b=c.d
a0=d.a
d=d.d
if(b<6)a0.uniform1i(d,0)
else a0.uniform1i(d,c.a)
d=e.r
C.b.a0(d.a,d.d,0)}d=f.gce()
c=e.x
C.b.J(c.a,c.d,d)
d=f.gcf()
c=e.y
C.b.J(c.a,c.d,d)
d=f.gcg()
c=e.z
C.b.J(c.a,c.d,d);++h}}if(t.db>0){l=a1.dx.z.length
r=a1.a.e3
C.b.a0(r.a,r.d,l)
r=a3.db
i=r.gZ(r)
for(r=a1.dx.z,q=r.length,a2=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.E)(r),++g){f=r[g]
p=a1.a.cv
if(h>=p.length)return H.j(p,h)
e=p[h]
p=f.gb6()
H.m(m,"$ib",a2,"$ab")
if(!C.a.V(m,p)){p.sby(0,m.length)
C.a.h(m,p)}p=f.gb3(f)
o=e.b
C.b.u(o.a,o.d,p.a,p.b,p.c)
p=f.gcp(f)
o=e.c
C.b.u(o.a,o.d,p.a,p.b,p.c)
p=f.gbH()
o=e.d
C.b.u(o.a,o.d,p.a,p.b,p.c)
p=f.gbF(f)
o=e.e
C.b.u(o.a,o.d,p.a,p.b,p.c)
p=i.b7(f.gb3(f))
o=e.f
C.b.u(o.a,o.d,p.a,p.b,p.c)
p=f.gb6()
o=p.gbB(p)
if(!o){p=e.x
C.b.a0(p.a,p.d,1)}else{o=e.r
d=p.gbB(p)
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,p.gby(p))
p=e.x
C.b.a0(p.a,p.d,0)}p=f.gao(f)
o=e.y
C.b.u(o.a,o.d,p.a,p.b,p.c)
p=f.gjx()
o=e.z
C.b.J(o.a,o.d,p)
p=f.gjy()
o=e.Q
C.b.J(o.a,o.d,p)
p=f.gce()
o=e.ch
C.b.J(o.a,o.d,p)
p=f.gcf()
o=e.cx
C.b.J(o.a,o.d,p)
p=f.gcg()
o=e.cy
C.b.J(o.a,o.d,p);++h}}}switch(t.f){case C.c:break
case C.i:break
case C.f:a1.U(m,a1.Q.d)
a2=a1.a
r=a1.Q.d
a2.ah(a2.dP,a2.bq,r)
break
case C.h:a1.U(m,a1.Q.e)
a2=a1.a
r=a1.Q.e
a2.ad(a2.dQ,a2.bq,r)
break}if(t.fr){a2=a1.a
r=a3.Q
if(r==null){r=a3.db
r=a3.Q=r.gZ(r).cA(0)}a2=a2.id
a2.toString
a2.ag(r.ab(0,!0))}if(t.dy){a1.U(m,a1.ch)
a2=a1.a
r=a1.ch
a2.ad(a2.dR,a2.dS,r)
switch(t.r){case C.c:break
case C.i:a2=a1.a
r=a1.cx.f
a2=a2.br
a2.toString
q=r.a
p=r.b
r=r.c
C.b.u(a2.a,a2.d,q,p,r)
break
case C.f:a1.U(m,a1.cx.d)
a2=a1.a
r=a1.cx.d
a2.ah(a2.dT,a2.bs,r)
r=a1.a
a2=a1.cx.f
r=r.br
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.u(r.a,r.d,q,p,a2)
break
case C.h:a1.U(m,a1.cx.e)
a2=a1.a
r=a1.cx.e
a2.ad(a2.dU,a2.bs,r)
r=a1.a
a2=a1.cx.f
r=r.br
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.u(r.a,r.d,q,p,a2)
break}switch(t.x){case C.c:break
case C.i:a2=a1.a
r=a1.cy.f
a2=a2.bu
a2.toString
q=r.a
p=r.b
r=r.c
C.b.u(a2.a,a2.d,q,p,r)
r=a1.a
p=a1.cy.ch
r=r.bt
C.b.J(r.a,r.d,p)
break
case C.f:a1.U(m,a1.cy.d)
a2=a1.a
r=a1.cy.d
a2.ah(a2.dV,a2.bv,r)
r=a1.a
a2=a1.cy.f
r=r.bu
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.u(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bt
C.b.J(a2.a,a2.d,p)
break
case C.h:a1.U(m,a1.cy.e)
a2=a1.a
r=a1.cy.e
a2.ad(a2.dW,a2.bv,r)
r=a1.a
a2=a1.cy.f
r=r.bu
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.u(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bt
C.b.J(a2.a,a2.d,p)
break}}a2=t.y
r=a2!==C.c
if(r){switch(a2){case C.c:break
case C.i:a2=a1.a
q=a1.db.f
a2=a2.bw
C.b.J(a2.a,a2.d,q)
break
case C.f:a1.U(m,a1.db.d)
a2=a1.a
q=a1.db.d
a2.ah(a2.dX,a2.bx,q)
q=a1.a
a2=a1.db.f
q=q.bw
C.b.J(q.a,q.d,a2)
break
case C.h:a1.U(m,a1.db.e)
a2=a1.a
q=a1.db.e
a2.ad(a2.dY,a2.bx,q)
q=a1.a
a2=a1.db.f
q=q.bw
C.b.J(q.a,q.d,a2)
break}a2=a3.a
a2.enable(3042)
a2.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a_(a3)
a2=a4.e
a2.a_(a3)
a2.aa(a3)
a2.aQ(a3)
if(r)a3.a.disable(3042)
for(k=0;k<m.length;++k)m[k].aQ(a3)
a2=a1.a
a2.toString
a3.a.useProgram(null)
a2.x.dH()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d5().ai},
sf1:function(a){this.e=H.m(a,"$ia2",[V.an],"$aa2")}}
O.ha.prototype={}
O.dC.prototype={
aL:function(){}}
O.hb.prototype={}
O.aV.prototype={
dn:function(a){var u,t,s=this
if(!J.a1(s.f,a)){u=s.f
s.f=a
t=new D.M(s.b+".color",u,a,[V.a3])
t.b=!0
s.a.a1(t)}},
aL:function(){this.ez()
this.dn(new V.a3(1,1,1))},
sao:function(a,b){var u,t=this
if(t.c===C.c){t.c=C.i
t.aL()
u=t.a
u.a=null
u.a1(null)}t.dn(b)}}
O.hd.prototype={
hD:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.S().a)){u.ch=a
t=new D.M(u.b+".refraction",t,a,[P.z])
t.b=!0
u.a.a1(t)}},
aL:function(){this.bN()
this.hD(1)}}
O.he.prototype={
cb:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.S().a)){u.ch=a
t=new D.M(u.b+".shininess",t,a,[P.z])
t.b=!0
u.a.a1(t)}},
aL:function(){this.bN()
this.cb(100)}}
O.dQ.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.K():u},
a1:function(a){var u
H.k(a,"$iy")
u=this.e
if(u!=null)u.E(a)},
bP:function(){return this.a1(null)},
ed:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.k(a.fr.j(0,n),"$idR")
if(u==null){t=a.a
u=new A.dR(t,n)
u.cT(t,n)
u.e4(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.i(u.y.j(0,"fov"),"$ia_")
u.ch=H.i(u.y.j(0,"ratio"),"$ia_")
u.cx=H.i(u.y.j(0,"boxClr"),"$iJ")
u.cy=H.i(u.y.j(0,"boxTxt"),"$iad")
u.db=H.i(u.y.j(0,"viewMat"),"$iar")
a.dv(u)}o.a=u}if(b.e==null){t=b.d.dB(new Z.eb(a.a),$.aK())
t.aw($.aK()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
s.activeTexture(33985)
s.bindTexture(34067,t.b)}}t=a.d
s=a.c
r=o.a
r.a_(a)
q=o.b
p=r.Q
C.b.J(p.a,p.d,q)
q=r.ch
C.b.J(q.a,q.d,t/s)
s=o.c
r.cy.es(s)
s=o.d
t=r.cx
C.b.u(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.gZ(s).cA(0)
r=r.db
r.toString
r.ag(s.ab(0,!0))
t=b.e
if(t instanceof Z.ci){t.a_(a)
t.aa(a)
t.aQ(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.dH()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.bE.prototype={}
T.cH.prototype={}
T.dW.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.K():u}}
T.ib.prototype={
aJ:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.o
W.a8(t,"load",H.n(new T.ic(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
hz:function(a,b,c){var u,t,s,r
b=V.kr(b)
u=V.kr(a.width)
t=V.kr(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jW()
s.width=u
s.height=t
r=H.k(C.l.eo(s,"2d"),"$icj")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.mZ(r.getImageData(0,0,s.width,s.height))}}}
T.ic.prototype={
$1:function(a){var u=this,t=u.a,s=t.hz(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.jh(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.iJ()}++t.e},
$S:25}
V.bc.prototype={
ay:function(a,b){return!0},
i:function(a){return"all"},
$iau:1}
V.au.prototype={}
V.dz.prototype={
ay:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)if(u[s].ay(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.E)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa3:function(a){this.a=H.m(a,"$ib",[V.au],"$ab")},
$iau:1}
V.ao.prototype={
ay:function(a,b){return!this.ey(0,b)},
i:function(a){return"!["+this.cS(0)+"]"}}
V.hE.prototype={
ay:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.k5(this.a),t=H.k5(this.b)
return u+".."+t},
$iau:1}
V.hN.prototype={
eE:function(a){var u,t
if(a.a.length<=0)throw H.e(P.r("May not create a SetMatcher with zero characters."))
u=new H.aT([P.C,P.P])
for(t=new H.ct(a,a.gl(a),[H.al(a,"v",0)]);t.B();)u.W(0,t.d,!0)
this.shC(u)},
ay:function(a,b){return this.a.dE(0,b)},
i:function(a){var u=this.a
return P.k8(new H.dv(u,[H.x(u,0)]))},
shC:function(a){this.a=H.m(a,"$iQ",[P.C,P.P],"$aQ")},
$iau:1}
V.cD.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cJ(this.a.k(0,b))
r.sa3(H.c([],[V.au]))
r.c=!1
C.a.h(this.c,r)
return r},
iL:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
if(r.ay(0,a))return r}return},
i:function(a){return this.b},
shX:function(a){this.c=H.m(a,"$ib",[V.cJ],"$ab")}}
V.e0.prototype={
i:function(a){var u=H.kt(this.b,"\n","\\n"),t=H.kt(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cI.prototype={
aB:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.h],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.E)(c),++t){s=c[t]
this.c.W(0,s,b)}},
i:function(a){return this.b},
shv:function(a){var u=P.h
this.c=H.m(a,"$iQ",[u,u],"$aQ")}}
V.ig.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cD(this,b)
u.shX(H.c([],[V.cJ]))
u.d=null
this.a.W(0,b,u)}return u},
L:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cI(a)
u=P.h
t.shv(new H.aT([u,u]))
this.b.W(0,a,t)}return t},
ej:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.e0]),l=this.c,k=[P.C],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.j.aH(a,s)
q=l.iL(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.k8(j)
throw H.e(P.r("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.k8(j)
o=l.d
n=o.c.j(0,p)
t=new V.e0(n==null?o.b:n,p,s)}++s}}},
shN:function(a){this.a=H.m(a,"$iQ",[P.h,V.cD],"$aQ")},
shQ:function(a){this.b=H.m(a,"$iQ",[P.h,V.cI],"$aQ")}}
V.cJ.prototype={
i:function(a){return this.b.b+": "+this.cS(0)}}
X.bP.prototype={$iaY:1}
X.fN.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.K():u},
al:function(a){var u=this.x
if(u!=null)u.E(a)},
a_:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.F(u)
q=C.e.aj(r*u)
r=s.b
if(typeof t!=="number")return H.F(t)
p=C.e.aj(r*t)
r=C.e.aj(s.c*u)
a.c=r
s=C.e.aj(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.fT.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.K():u},
a_:function(a){var u
a.cy.bE(V.bX())
u=V.bX()
a.db.bE(u)},
aQ:function(a){a.cy.aA()
a.db.aA()},
$iaY:1,
$ibP:1}
X.dJ.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.K():u},
al:function(a){var u
H.k(a,"$iy")
u=this.f
if(u!=null)u.E(a)},
eV:function(){return this.al(null)},
a_:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.aW(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bE(k)
r=$.kR
if(r==null){r=V.kT()
q=V.lb()
p=$.l7
r=V.kM(r,q,p==null?$.l7=new V.R(0,0,-1):p)
$.kR=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aR(0,a,s)
if(t!=null)u=t.v(0,u)}a.db.bE(u)},
aQ:function(a){a.cy.aA()
a.db.aA()},
$iaY:1,
$ibP:1}
X.cF.prototype={}
V.bu.prototype={
bb:function(a){this.b=new P.fR(C.L)
this.c=null
this.sbY(H.c([],[[P.b,W.aA]]))},
K:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.aA]))
u=a.split("\n")
for(l=u.length,t=[W.aA],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.H(q)
o=m.b.f6(q,0,q.length)
n=o==null?q:o
C.J.er(p,H.kt(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gbz(m.d),p)}},
eb:function(a,b){var u,t,s,r,q=this
H.m(b,"$ib",[P.h],"$ab")
q.sbY(H.c([],[[P.b,W.aA]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bi():t).ej(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)q.bD(t[r])},
sbY:function(a){this.d=H.m(a,"$ib",[[P.b,W.aA]],"$ab")}}
V.jQ.prototype={
$1:function(a){var u
H.k(a,"$ib5")
u=C.e.ei(this.a.giO(),2)
if(u!=="0.00")P.ks(u+" fps")},
$S:41}
V.fs.prototype={
bD:function(a){var u=this
switch(a.a){case"Class":u.K(a.b,"#551")
break
case"Comment":u.K(a.b,"#777")
break
case"Id":u.K(a.b,"#111")
break
case"Num":u.K(a.b,"#191")
break
case"Reserved":u.K(a.b,"#119")
break
case"String":u.K(a.b,"#171")
break
case"Symbol":u.K(a.b,"#616")
break
case"Type":u.K(a.b,"#B11")
break
case"Whitespace":u.K(a.b,"#111")
break}},
bi:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.ih()
a1.c=a1.k(0,r)
u=a1.k(0,r).m(0,q)
t=V.u(new H.q("_"))
C.a.h(u.a,t)
t=V.Z("a","z")
C.a.h(u.a,t)
t=V.Z("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).m(0,q)
u=V.u(new H.q("_"))
C.a.h(t.a,u)
u=V.Z("0","9")
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=a1.k(0,r).m(0,p)
t=V.Z("0","9")
C.a.h(u.a,t)
t=a1.k(0,p).m(0,p)
u=V.Z("0","9")
C.a.h(t.a,u)
u=a1.k(0,p).m(0,o)
t=V.u(new H.q("."))
C.a.h(u.a,t)
t=a1.k(0,o).m(0,n)
u=V.Z("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).m(0,n)
t=V.Z("0","9")
C.a.h(u.a,t)
t=a1.k(0,r).m(0,m)
u=V.u(new H.q(l))
C.a.h(t.a,u)
u=a1.k(0,m).m(0,m)
t=V.u(new H.q(l))
C.a.h(u.a,t)
t=a1.k(0,r).m(0,k)
u=V.u(new H.q('"'))
C.a.h(t.a,u)
u=a1.k(0,k).m(0,j)
t=V.u(new H.q('"'))
C.a.h(u.a,t)
t=a1.k(0,k).m(0,i)
u=V.u(new H.q("\\"))
C.a.h(t.a,u)
u=a1.k(0,i).m(0,k)
t=V.u(new H.q('"'))
C.a.h(u.a,t)
C.a.h(a1.k(0,k).m(0,k).a,new V.bc())
t=a1.k(0,r).m(0,h)
u=V.u(new H.q("'"))
C.a.h(t.a,u)
u=a1.k(0,h).m(0,g)
t=V.u(new H.q("'"))
C.a.h(u.a,t)
t=a1.k(0,h).m(0,f)
u=V.u(new H.q("\\"))
C.a.h(t.a,u)
u=a1.k(0,f).m(0,h)
t=V.u(new H.q("'"))
C.a.h(u.a,t)
C.a.h(a1.k(0,h).m(0,h).a,new V.bc())
t=a1.k(0,r).m(0,e)
u=V.u(new H.q("/"))
C.a.h(t.a,u)
u=a1.k(0,e).m(0,d)
t=V.u(new H.q("/"))
C.a.h(u.a,t)
t=a1.k(0,d).m(0,c)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=a1.k(0,d).m(0,d)
t=new V.ao()
s=[V.au]
t.sa3(H.c([],s))
C.a.h(u.a,t)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=a1.k(0,e).m(0,b)
t=V.u(new H.q("*"))
C.a.h(u.a,t)
t=a1.k(0,b).m(0,a)
u=V.u(new H.q("*"))
C.a.h(t.a,u)
u=a1.k(0,a).m(0,b)
t=new V.ao()
t.sa3(H.c([],s))
C.a.h(u.a,t)
u=V.u(new H.q("*"))
C.a.h(t.a,u)
u=a1.k(0,a).m(0,c)
t=V.u(new H.q("/"))
C.a.h(u.a,t)
t=a1.k(0,r).m(0,a0)
u=V.u(new H.q(" \n\t"))
C.a.h(t.a,u)
u=a1.k(0,a0).m(0,a0)
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
u=[P.h]
t.aB(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aB(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aB(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fO.prototype={
bD:function(a){var u=this
switch(a.a){case"Builtin":u.K(a.b,"#411")
break
case"Comment":u.K(a.b,"#777")
break
case"Id":u.K(a.b,"#111")
break
case"Num":u.K(a.b,"#191")
break
case"Preprocess":u.K(a.b,"#737")
break
case"Reserved":u.K(a.b,"#119")
break
case"Symbol":u.K(a.b,"#611")
break
case"Type":u.K(a.b,"#171")
break
case"Whitespace":u.K(a.b,"#111")
break}},
bi:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.ih()
e.c=e.k(0,r)
u=e.k(0,r).m(0,q)
t=V.u(new H.q("_"))
C.a.h(u.a,t)
t=V.Z("a","z")
C.a.h(u.a,t)
t=V.Z("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).m(0,q)
u=V.u(new H.q("_"))
C.a.h(t.a,u)
u=V.Z("0","9")
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=e.k(0,r).m(0,p)
t=V.Z("0","9")
C.a.h(u.a,t)
t=e.k(0,p).m(0,p)
u=V.Z("0","9")
C.a.h(t.a,u)
u=e.k(0,p).m(0,o)
t=V.u(new H.q("."))
C.a.h(u.a,t)
t=e.k(0,o).m(0,n)
u=V.Z("0","9")
C.a.h(t.a,u)
u=e.k(0,n).m(0,n)
t=V.Z("0","9")
C.a.h(u.a,t)
t=e.k(0,r).m(0,m)
u=V.u(new H.q(l))
C.a.h(t.a,u)
u=e.k(0,m).m(0,m)
t=V.u(new H.q(l))
C.a.h(u.a,t)
t=e.k(0,r).m(0,k)
u=V.u(new H.q("/"))
C.a.h(t.a,u)
u=e.k(0,k).m(0,j)
t=V.u(new H.q("/"))
C.a.h(u.a,t)
C.a.h(e.k(0,k).m(0,m).a,new V.bc())
t=e.k(0,j).m(0,i)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,j).m(0,j)
t=new V.ao()
s=[V.au]
t.sa3(H.c([],s))
C.a.h(u.a,t)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,r).m(0,h)
t=V.u(new H.q("#"))
C.a.h(u.a,t)
t=e.k(0,h).m(0,h)
u=new V.ao()
u.sa3(H.c([],s))
C.a.h(t.a,u)
t=V.u(new H.q("\n"))
C.a.h(u.a,t)
t=e.k(0,h).m(0,g)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,r).m(0,f)
t=V.u(new H.q(" \n\t"))
C.a.h(u.a,t)
t=e.k(0,f).m(0,f)
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
t=[P.h]
u.aB(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aB(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aB(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fP.prototype={
bD:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.K(a.b,"#911")
u.K("=",t)
break
case"Id":u.K(a.b,t)
break
case"Other":u.K(a.b,t)
break
case"Reserved":u.K(a.b,"#119")
break
case"String":u.K(a.b,"#171")
break
case"Symbol":u.K(a.b,"#616")
break}},
bi:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.ih()
l.c=l.k(0,s)
u=l.k(0,s).m(0,r)
t=V.u(new H.q("_"))
C.a.h(u.a,t)
t=V.Z("a","z")
C.a.h(u.a,t)
t=V.Z("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).m(0,r)
u=V.u(new H.q("_"))
C.a.h(t.a,u)
u=V.Z("0","9")
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=l.k(0,r).m(0,q)
t=V.u(new H.q("="))
C.a.h(u.a,t)
u.c=!0
u=l.k(0,s).m(0,p)
t=V.u(new H.q("</\\-!>="))
C.a.h(u.a,t)
t=l.k(0,p).m(0,p)
u=V.u(new H.q("</\\-!>="))
C.a.h(t.a,u)
u=l.k(0,s).m(0,o)
t=V.u(new H.q('"'))
C.a.h(u.a,t)
t=l.k(0,o).m(0,n)
u=V.u(new H.q('"'))
C.a.h(t.a,u)
u=l.k(0,o).m(0,"EscStr")
t=V.u(new H.q("\\"))
C.a.h(u.a,t)
t=l.k(0,"EscStr").m(0,o)
u=V.u(new H.q('"'))
C.a.h(t.a,u)
C.a.h(l.k(0,o).m(0,o).a,new V.bc())
C.a.h(l.k(0,s).m(0,m).a,new V.bc())
u=l.k(0,m).m(0,m)
t=new V.ao()
t.sa3(H.c([],[V.au]))
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
t.aB(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.k(0,q)
t.d=t.a.L(q)
t=l.k(0,m)
t.d=t.a.L(m)
return l}}
V.hA.prototype={
eb:function(a,b){H.m(b,"$ib",[P.h],"$ab")
this.sbY(H.c([],[[P.b,W.aA]]))
this.K(C.a.m(b,"\n"),"#111")},
bD:function(a){},
bi:function(){return}}
V.hR.prototype={
eF:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a8(q,"scroll",H.n(new V.hT(o),{func:1,ret:-1,args:[r]}),!1,r)},
du:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.h],"$ab")
this.hI()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.ej(C.a.iS(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.E)(s),++q){p=s[q]
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
if(H.no(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.j(m,1)
l.href=H.H(m[1])
l.textContent=H.H(m[0])
t.appendChild(l)}else{k=P.li(C.w,n,C.m,!1)
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
en:function(a){var u,t,s,r=new V.fs("dart")
r.bb("dart")
u=new V.fO("glsl")
u.bb("glsl")
t=new V.fP("html")
t.bb("html")
s=C.a.iN(H.c([r,u,t],[V.bu]),new V.hU(a))
if(s!=null)return s
r=new V.hA("plain")
r.bb("plain")
return r},
dt:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.m(b0,"$ib",[P.h],"$ab")
u=H.c([],[P.C])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.km(r).bL(r,"+")){C.a.W(b0,s,C.j.b9(r,1))
C.a.h(u,1)
t=!0}else if(C.j.bL(r,"-")){C.a.W(b0,s,C.j.b9(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.en(a8)
q.eb(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.li(C.w,a7,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.ky()
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
if(s>=u.length)return H.j(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.E)(r),++a0)C.T.iw(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.E)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gR(r);a3.B();)c.appendChild(a3.gG(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
hI:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.ih()
u.c=u.k(0,q)
t=u.k(0,q).m(0,p)
s=V.u(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).m(0,p)
s=new V.ao()
r=[V.au]
s.sa3(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,p).m(0,"BoldEnd")
s=V.u(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,o)
s=V.u(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,o).m(0,o)
s=new V.ao()
s.sa3(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("_"))
C.a.h(s.a,t)
t=u.k(0,o).m(0,n)
s=V.u(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,m)
s=V.u(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,m).m(0,m)
s=new V.ao()
s.sa3(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("`"))
C.a.h(s.a,t)
t=u.k(0,m).m(0,"CodeEnd")
s=V.u(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,l)
s=V.u(new H.q("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,l).m(0,k)
s=V.u(new H.q("|"))
C.a.h(t.a,s)
s=u.k(0,l).m(0,j)
t=V.u(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,l).m(0,l)
t=new V.ao()
t.sa3(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("|]"))
C.a.h(t.a,s)
s=u.k(0,k).m(0,j)
t=V.u(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).m(0,k)
t=new V.ao()
t.sa3(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).m(0,i).a,new V.bc())
s=u.k(0,i).m(0,i)
t=new V.ao()
t.sa3(H.c([],r))
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
V.hT.prototype={
$1:function(a){P.l2(C.n,new V.hS(this.a))},
$S:25}
V.hS.prototype={
$0:function(){var u=C.e.aj(document.documentElement.scrollTop),t=this.a.style,s=H.l(-0.01*u)+"px"
t.top=s},
$S:2}
V.hU.prototype={
$1:function(a){return H.k(a,"$ibu").a===this.a},
$S:42}
B.jN.prototype={
$1:function(a){var u,t,s,r
H.k(a,"$iy")
u=this.a.d
t=this.b
s=u.a
r=[P.h]
t.dt("Vertex Shader for Skybox","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
s=u.a
t.dt("Fragment Shader for Skybox","glsl",0,H.c((s==null?null:s.d).split("\n"),r))},
$S:6};(function aliases(){var u=J.a.prototype
u.ev=u.i
u=J.ds.prototype
u.ex=u.i
u=P.d.prototype
u.ew=u.bI
u=W.U.prototype
u.bM=u.ae
u=W.eG.prototype
u.eA=u.an
u=O.dC.prototype
u.ez=u.aL
u=O.aV.prototype
u.bN=u.aL
u=V.dz.prototype
u.ey=u.ay
u.cS=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"mT","mA",11)
u(P,"mU","mB",11)
u(P,"mV","mC",11)
t(P,"lr","mR",3)
s(W,"n8",4,null,["$4"],["mE"],20,0)
s(W,"n9",4,null,["$4"],["mF"],20,0)
var m
r(m=E.ag.prototype,"ge9",0,0,null,["$1","$0"],["ea","j1"],0,0)
r(m,"ge7",0,0,null,["$1","$0"],["e8","iZ"],0,0)
q(m,"giX","iY",8)
q(m,"gj_","j0",8)
r(m=E.e_.prototype,"gcV",0,0,null,["$1","$0"],["cX","cW"],0,0)
p(m,"gjd","ee",3)
o(m=X.e6.prototype,"gfR","fS",10)
o(m,"gfF","fG",10)
o(m,"gfL","fM",4)
o(m,"gfV","fW",23)
o(m,"gfT","fU",23)
o(m,"gfZ","h_",4)
o(m,"gh2","h3",4)
o(m,"gfP","fQ",4)
o(m,"gh0","h1",4)
o(m,"gfN","fO",4)
o(m,"gh4","h5",28)
o(m,"gh6","h7",10)
o(m,"ghm","hn",9)
o(m,"ghi","hj",9)
o(m,"ghk","hl",9)
r(D.bw.prototype,"geJ",0,0,null,["$1","$0"],["aq","eK"],0,0)
r(m=D.du.prototype,"gdf",0,0,null,["$1","$0"],["dg","fX"],0,0)
o(m,"gh8","h9",30)
q(m,"gfz","fA",26)
q(m,"ghc","hd",26)
n(V.T.prototype,"gl","cB",18)
n(V.R.prototype,"gl","cB",18)
r(m=U.cr.prototype,"gaK",0,0,null,["$1","$0"],["M","a4"],0,0)
q(m,"gfv","fw",17)
q(m,"gha","hb",17)
r(m=U.e7.prototype,"gaK",0,0,null,["$1","$0"],["M","a4"],0,0)
o(m,"gc0","c1",1)
o(m,"gc2","c3",1)
o(m,"gc4","c5",1)
r(m=U.e8.prototype,"gaK",0,0,null,["$1","$0"],["M","a4"],0,0)
o(m,"gc0","c1",1)
o(m,"gc2","c3",1)
o(m,"gc4","c5",1)
o(m,"gfo","fp",1)
o(m,"gfq","fs",1)
o(m,"ghV","hW",1)
o(m,"ghT","hU",1)
o(m,"ghR","hS",1)
o(U.e9.prototype,"gft","fu",1)
r(m=M.de.prototype,"gX",0,0,null,["$1","$0"],["Y","aT"],0,0)
q(m,"ghe","hf",14)
q(m,"ghg","hh",14)
r(M.dg.prototype,"gX",0,0,null,["$1","$0"],["Y","aT"],0,0)
r(m=M.dk.prototype,"gX",0,0,null,["$1","$0"],["Y","aT"],0,0)
q(m,"gfH","fI",8)
q(m,"gfJ","fK",8)
r(m=O.dA.prototype,"gbO",0,0,null,["$1","$0"],["a1","bP"],0,0)
r(m,"ghx",0,0,null,["$1","$0"],["dl","hy"],0,0)
q(m,"gfB","fC",13)
q(m,"gfD","fE",13)
r(O.dQ.prototype,"gbO",0,0,null,["$1","$0"],["a1","bP"],0,0)
r(X.dJ.prototype,"geU",0,0,null,["$1","$0"],["al","eV"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.O,null)
s(P.O,[H.k3,J.a,J.am,P.et,P.d,H.ct,P.aS,H.bT,H.e5,H.im,P.bx,H.ck,H.eL,P.aa,H.h1,H.h2,H.fX,P.eR,P.ba,P.aC,P.ec,P.i1,P.cE,P.i2,P.b5,P.af,P.jA,P.jo,P.c4,P.es,P.v,P.cl,P.fS,P.jy,P.P,P.az,P.a9,P.aP,P.hy,P.dT,P.ek,P.fM,P.by,P.b,P.Q,P.N,P.aq,P.h,P.bk,W.fo,W.bH,W.B,W.dH,W.eG,W.jt,W.dn,W.aw,W.jn,W.eX,P.eW,P.ji,O.a2,O.cu,E.fh,E.ag,E.hF,E.e_,Z.ea,Z.eb,Z.ci,Z.bV,Z.b8,D.fk,D.bS,D.y,X.dd,X.dt,X.fZ,X.h4,X.av,X.hl,X.ii,X.e6,D.bw,D.a5,D.dK,D.dS,D.dX,D.dY,D.dZ,V.a3,V.at,V.fC,V.dD,V.an,V.a6,V.a4,V.b_,V.dN,V.T,V.R,U.e7,U.e8,U.e9,M.dg,M.dk,M.ax,A.d9,A.fc,A.hc,A.cK,A.cO,A.cM,A.cP,A.cN,A.cQ,A.bR,A.e2,A.ix,F.a7,F.fF,F.bD,F.h0,F.bY,F.dP,F.hO,F.hP,F.hQ,F.aj,F.iH,F.iI,F.iL,F.iN,F.iO,F.iP,O.bE,O.dC,T.ib,V.bc,V.au,V.dz,V.hE,V.hN,V.cD,V.e0,V.cI,V.ig,X.bP,X.cF,X.fT,X.dJ,V.bu,V.hR])
s(J.a,[J.fW,J.dr,J.ds,J.aF,J.bC,J.be,H.cx,W.f,W.f9,W.da,W.cj,W.aN,W.aO,W.V,W.ee,W.ft,W.fu,W.eg,W.dj,W.ei,W.fw,W.o,W.el,W.aR,W.fQ,W.eo,W.bz,W.dx,W.hf,W.eu,W.ev,W.aX,W.ew,W.ez,W.aZ,W.eD,W.eF,W.b2,W.eH,W.b3,W.eM,W.aG,W.eP,W.ie,W.b6,W.eS,W.ik,W.iC,W.eY,W.f_,W.f1,W.f3,W.f5,P.bg,P.eq,P.bi,P.eB,P.hD,P.eN,P.bl,P.eU,P.fd,P.ed,P.db,P.dL,P.c1,P.dO,P.dV,P.e3,P.eJ])
s(J.ds,[J.hz,J.bG,J.bf])
t(J.k2,J.aF)
s(J.bC,[J.dq,J.dp])
t(P.h3,P.et)
s(P.h3,[H.e4,W.j_,W.ak,P.fI])
t(H.q,H.e4)
s(P.d,[H.fz,H.h7,H.cS])
s(H.fz,[H.bW,H.dv])
s(P.aS,[H.h8,H.iT])
t(H.h9,H.bW)
s(P.bx,[H.hv,H.fY,H.iA,H.ip,H.fj,H.hL,P.fb,P.dI,P.aE,P.iB,P.iz,P.c2,P.fm,P.fr])
s(H.ck,[H.jS,H.i8,H.jJ,H.jK,H.jL,P.iW,P.iV,P.iX,P.iY,P.jx,P.jw,P.j5,P.j9,P.j6,P.j7,P.j8,P.jc,P.jd,P.jb,P.ja,P.i3,P.i4,P.jC,P.jl,P.jk,P.jm,P.h6,P.fx,P.fy,W.fA,W.hh,W.hj,W.hK,W.i0,W.j4,W.ht,W.hs,W.jp,W.jq,W.jv,W.jz,P.jE,P.fJ,P.fK,P.ff,E.hG,E.hH,E.hI,E.id,D.fD,D.fE,F.jR,F.jF,F.iR,F.iQ,F.iJ,F.iK,T.ic,V.jQ,V.hT,V.hS,V.hU,B.jN])
s(H.i8,[H.hZ,H.cg])
t(H.iU,P.fb)
t(P.h5,P.aa)
s(P.h5,[H.aT,W.iZ])
t(H.dE,H.cx)
s(H.dE,[H.cW,H.cY])
t(H.cX,H.cW)
t(H.cw,H.cX)
t(H.cZ,H.cY)
t(H.dF,H.cZ)
s(H.dF,[H.hm,H.hn,H.ho,H.hp,H.hq,H.dG,H.hr])
t(P.jj,P.jA)
t(P.jh,P.jo)
t(P.cm,P.i2)
t(P.fB,P.cl)
s(P.cm,[P.fR,P.iE])
t(P.iD,P.fB)
s(P.a9,[P.z,P.C])
s(P.aE,[P.c0,P.fU])
s(W.f,[W.D,W.fH,W.b1,W.d_,W.b4,W.aH,W.d1,W.iS,W.cT,P.fg,P.bO])
s(W.D,[W.U,W.bt,W.cU])
s(W.U,[W.t,P.p])
s(W.t,[W.d8,W.fa,W.cf,W.bs,W.bQ,W.aA,W.fL,W.cs,W.hM,W.c3,W.dU,W.i6,W.i7,W.cG])
s(W.aN,[W.cn,W.fp,W.fq])
t(W.fn,W.aO)
t(W.co,W.ee)
t(W.eh,W.eg)
t(W.di,W.eh)
t(W.ej,W.ei)
t(W.fv,W.ej)
t(W.aQ,W.da)
t(W.em,W.el)
t(W.fG,W.em)
t(W.ep,W.eo)
t(W.bU,W.ep)
t(W.bF,W.o)
s(W.bF,[W.aU,W.ab,W.aI])
t(W.hg,W.eu)
t(W.hi,W.ev)
t(W.ex,W.ew)
t(W.hk,W.ex)
t(W.eA,W.ez)
t(W.cy,W.eA)
t(W.eE,W.eD)
t(W.hB,W.eE)
t(W.hJ,W.eF)
t(W.d0,W.d_)
t(W.hW,W.d0)
t(W.eI,W.eH)
t(W.hX,W.eI)
t(W.i_,W.eM)
t(W.eQ,W.eP)
t(W.i9,W.eQ)
t(W.d2,W.d1)
t(W.ia,W.d2)
t(W.eT,W.eS)
t(W.ij,W.eT)
t(W.b9,W.ab)
t(W.eZ,W.eY)
t(W.j0,W.eZ)
t(W.ef,W.dj)
t(W.f0,W.f_)
t(W.je,W.f0)
t(W.f2,W.f1)
t(W.ey,W.f2)
t(W.f4,W.f3)
t(W.jr,W.f4)
t(W.f6,W.f5)
t(W.js,W.f6)
t(W.j1,W.iZ)
t(W.j2,P.i1)
t(W.kb,W.j2)
t(W.j3,P.cE)
t(W.ju,W.eG)
t(P.ap,P.ji)
t(P.er,P.eq)
t(P.h_,P.er)
t(P.eC,P.eB)
t(P.hw,P.eC)
t(P.cB,P.p)
t(P.eO,P.eN)
t(P.i5,P.eO)
t(P.eV,P.eU)
t(P.il,P.eV)
t(P.fe,P.ed)
t(P.hx,P.bO)
t(P.eK,P.eJ)
t(P.hY,P.eK)
s(E.fh,[Z.dc,A.cC,T.cH])
s(D.y,[D.bA,D.bB,D.M,X.hC])
s(X.hC,[X.dy,X.bh,X.cv,X.e1])
s(O.a2,[D.du,U.cr,M.de])
s(D.fk,[U.fl,U.ac])
t(U.df,U.ac)
s(A.cC,[A.dB,A.dR])
s(A.e2,[A.L,A.it,A.iu,A.iw,A.ir,A.a_,A.is,A.J,A.iv,A.iy,A.cL,A.ar,A.ah,A.ad])
t(F.hV,F.fF)
t(F.iq,F.h0)
t(F.iM,F.iN)
t(F.hu,F.iO)
s(O.bE,[O.dA,O.dQ])
s(O.dC,[O.ha,O.hb,O.aV])
s(O.aV,[O.hd,O.he])
t(T.dW,T.cH)
s(V.dz,[V.ao,V.cJ])
t(X.fN,X.cF)
s(V.bu,[V.fs,V.fO,V.fP,V.hA])
u(H.e4,H.e5)
u(H.cW,P.v)
u(H.cX,H.bT)
u(H.cY,P.v)
u(H.cZ,H.bT)
u(P.et,P.v)
u(W.ee,W.fo)
u(W.eg,P.v)
u(W.eh,W.B)
u(W.ei,P.v)
u(W.ej,W.B)
u(W.el,P.v)
u(W.em,W.B)
u(W.eo,P.v)
u(W.ep,W.B)
u(W.eu,P.aa)
u(W.ev,P.aa)
u(W.ew,P.v)
u(W.ex,W.B)
u(W.ez,P.v)
u(W.eA,W.B)
u(W.eD,P.v)
u(W.eE,W.B)
u(W.eF,P.aa)
u(W.d_,P.v)
u(W.d0,W.B)
u(W.eH,P.v)
u(W.eI,W.B)
u(W.eM,P.aa)
u(W.eP,P.v)
u(W.eQ,W.B)
u(W.d1,P.v)
u(W.d2,W.B)
u(W.eS,P.v)
u(W.eT,W.B)
u(W.eY,P.v)
u(W.eZ,W.B)
u(W.f_,P.v)
u(W.f0,W.B)
u(W.f1,P.v)
u(W.f2,W.B)
u(W.f3,P.v)
u(W.f4,W.B)
u(W.f5,P.v)
u(W.f6,W.B)
u(P.eq,P.v)
u(P.er,W.B)
u(P.eB,P.v)
u(P.eC,W.B)
u(P.eN,P.v)
u(P.eO,W.B)
u(P.eU,P.v)
u(P.eV,W.B)
u(P.ed,P.aa)
u(P.eJ,P.v)
u(P.eK,W.B)})();(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bs.prototype
C.l=W.bQ.prototype
C.J=W.aA.prototype
C.M=J.a.prototype
C.a=J.aF.prototype
C.N=J.dp.prototype
C.d=J.dq.prototype
C.o=J.dr.prototype
C.e=J.bC.prototype
C.j=J.be.prototype
C.O=J.bf.prototype
C.S=W.cy.prototype
C.x=J.hz.prototype
C.b=P.c1.prototype
C.T=W.c3.prototype
C.y=W.dU.prototype
C.r=J.bG.prototype
C.z=W.b9.prototype
C.A=W.cT.prototype
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

C.H=new P.hy()
C.m=new P.iD()
C.I=new P.iE()
C.k=new P.jj()
C.c=new A.bR(0,"ColorSourceType.None")
C.i=new A.bR(1,"ColorSourceType.Solid")
C.f=new A.bR(2,"ColorSourceType.Texture2D")
C.h=new A.bR(3,"ColorSourceType.TextureCube")
C.n=new P.aP(0)
C.K=new P.aP(5e6)
C.L=new P.fS("element",!0,!1,!1,!1)
C.P=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.Q=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.R=H.c(u([]),[P.h])
C.w=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.C])
C.p=H.c(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.q=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])})()
var v={mangledGlobalNames:{C:"int",z:"double",a9:"num",h:"String",P:"bool",N:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.y]},{func:1,ret:-1,args:[D.y]},{func:1,ret:P.N},{func:1,ret:-1},{func:1,ret:-1,args:[W.ab]},{func:1,ret:P.N,args:[F.a7]},{func:1,ret:P.N,args:[D.y]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[P.C,[P.d,E.ag]]},{func:1,ret:-1,args:[W.aI]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.N,args:[,]},{func:1,ret:-1,args:[P.C,[P.d,V.an]]},{func:1,ret:-1,args:[P.C,[P.d,M.ax]]},{func:1,args:[,]},{func:1,ret:P.P,args:[P.h]},{func:1,ret:-1,args:[P.C,[P.d,U.ac]]},{func:1,ret:P.z},{func:1,ret:P.P,args:[W.D]},{func:1,ret:P.P,args:[W.U,P.h,P.h,W.bH]},{func:1,ret:P.h,args:[P.C]},{func:1,ret:P.P,args:[W.aw]},{func:1,ret:-1,args:[W.aU]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.y]}]},{func:1,ret:P.N,args:[W.o]},{func:1,ret:-1,args:[P.C,[P.d,D.a5]]},{func:1,ret:P.N,args:[,,]},{func:1,ret:-1,args:[W.b9]},{func:1,args:[,P.h]},{func:1,ret:P.P,args:[[P.d,D.a5]]},{func:1,ret:W.U,args:[W.D]},{func:1,ret:-1,args:[W.D,W.D]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:[P.aC,,],args:[,]},{func:1,args:[W.o]},{func:1,ret:V.a4,args:[P.z]},{func:1,ret:P.N,args:[F.aj,P.z,P.z]},{func:1,args:[P.h]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,ret:P.N,args:[P.b5]},{func:1,ret:P.P,args:[V.bu]},{func:1,ret:P.N,args:[P.a9]},{func:1,ret:P.N,args:[,],opt:[P.aq]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aM=0
$.ch=null
$.kz=null
$.kd=!1
$.lu=null
$.lp=null
$.lz=null
$.jG=null
$.jM=null
$.ko=null
$.c5=null
$.d4=null
$.d5=null
$.ke=!1
$.a0=C.k
$.as=[]
$.bd=null
$.jZ=null
$.kF=null
$.kE=null
$.en=P.kI(P.h,P.by)
$.kN=null
$.kS=null
$.cz=null
$.kX=null
$.l6=null
$.la=null
$.l8=null
$.l9=null
$.iF=null
$.l7=null
$.kR=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ny","lD",function(){return H.lt("_$dart_dartClosure")})
u($,"nz","ku",function(){return H.lt("_$dart_js")})
u($,"nD","lE",function(){return H.b7(H.io({
toString:function(){return"$receiver$"}}))})
u($,"nE","lF",function(){return H.b7(H.io({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nF","lG",function(){return H.b7(H.io(null))})
u($,"nG","lH",function(){return H.b7(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nJ","lK",function(){return H.b7(H.io(void 0))})
u($,"nK","lL",function(){return H.b7(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nI","lJ",function(){return H.b7(H.l4(null))})
u($,"nH","lI",function(){return H.b7(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nM","lN",function(){return H.b7(H.l4(void 0))})
u($,"nL","lM",function(){return H.b7(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"o2","kv",function(){return P.mz()})
u($,"o4","lS",function(){return P.ms("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"o3","lR",function(){return P.kJ(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"nW","lQ",function(){return Z.aB(0)})
u($,"nQ","lO",function(){return Z.aB(511)})
u($,"nY","aK",function(){return Z.aB(1)})
u($,"nX","bp",function(){return Z.aB(2)})
u($,"nS","bo",function(){return Z.aB(4)})
u($,"nZ","bq",function(){return Z.aB(8)})
u($,"o_","br",function(){return Z.aB(16)})
u($,"nT","d6",function(){return Z.aB(32)})
u($,"nU","d7",function(){return Z.aB(64)})
u($,"nV","lP",function(){return Z.aB(96)})
u($,"o0","ce",function(){return Z.aB(128)})
u($,"nR","bn",function(){return Z.aB(256)})
u($,"nx","lC",function(){return new V.fC(1e-9)})
u($,"nw","S",function(){return $.lC()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cx,ArrayBufferView:H.cx,Float32Array:H.cw,Float64Array:H.cw,Int16Array:H.hm,Int32Array:H.hn,Int8Array:H.ho,Uint16Array:H.hp,Uint32Array:H.hq,Uint8ClampedArray:H.dG,CanvasPixelArray:H.dG,Uint8Array:H.hr,HTMLAudioElement:W.t,HTMLBRElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLInputElement:W.t,HTMLLIElement:W.t,HTMLLabelElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMediaElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableColElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLVideoElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,AccessibleNodeList:W.f9,HTMLAnchorElement:W.d8,HTMLAreaElement:W.fa,HTMLBaseElement:W.cf,Blob:W.da,HTMLBodyElement:W.bs,HTMLCanvasElement:W.bQ,CanvasRenderingContext2D:W.cj,CDATASection:W.bt,CharacterData:W.bt,Comment:W.bt,ProcessingInstruction:W.bt,Text:W.bt,CSSNumericValue:W.cn,CSSUnitValue:W.cn,CSSPerspective:W.fn,CSSCharsetRule:W.V,CSSConditionRule:W.V,CSSFontFaceRule:W.V,CSSGroupingRule:W.V,CSSImportRule:W.V,CSSKeyframeRule:W.V,MozCSSKeyframeRule:W.V,WebKitCSSKeyframeRule:W.V,CSSKeyframesRule:W.V,MozCSSKeyframesRule:W.V,WebKitCSSKeyframesRule:W.V,CSSMediaRule:W.V,CSSNamespaceRule:W.V,CSSPageRule:W.V,CSSRule:W.V,CSSStyleRule:W.V,CSSSupportsRule:W.V,CSSViewportRule:W.V,CSSStyleDeclaration:W.co,MSStyleCSSProperties:W.co,CSS2Properties:W.co,CSSImageValue:W.aN,CSSKeywordValue:W.aN,CSSPositionValue:W.aN,CSSResourceValue:W.aN,CSSURLImageValue:W.aN,CSSStyleValue:W.aN,CSSMatrixComponent:W.aO,CSSRotation:W.aO,CSSScale:W.aO,CSSSkew:W.aO,CSSTranslation:W.aO,CSSTransformComponent:W.aO,CSSTransformValue:W.fp,CSSUnparsedValue:W.fq,DataTransferItemList:W.ft,HTMLDivElement:W.aA,DOMException:W.fu,ClientRectList:W.di,DOMRectList:W.di,DOMRectReadOnly:W.dj,DOMStringList:W.fv,DOMTokenList:W.fw,Element:W.U,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.aQ,FileList:W.fG,FileWriter:W.fH,HTMLFormElement:W.fL,Gamepad:W.aR,History:W.fQ,HTMLCollection:W.bU,HTMLFormControlsCollection:W.bU,HTMLOptionsCollection:W.bU,ImageData:W.bz,HTMLImageElement:W.cs,KeyboardEvent:W.aU,Location:W.dx,MediaList:W.hf,MIDIInputMap:W.hg,MIDIOutputMap:W.hi,MimeType:W.aX,MimeTypeArray:W.hk,PointerEvent:W.ab,MouseEvent:W.ab,DragEvent:W.ab,Document:W.D,DocumentFragment:W.D,HTMLDocument:W.D,ShadowRoot:W.D,XMLDocument:W.D,DocumentType:W.D,Node:W.D,NodeList:W.cy,RadioNodeList:W.cy,Plugin:W.aZ,PluginArray:W.hB,RTCStatsReport:W.hJ,HTMLSelectElement:W.hM,SourceBuffer:W.b1,SourceBufferList:W.hW,SpeechGrammar:W.b2,SpeechGrammarList:W.hX,SpeechRecognitionResult:W.b3,Storage:W.i_,CSSStyleSheet:W.aG,StyleSheet:W.aG,HTMLTableCellElement:W.c3,HTMLTableDataCellElement:W.c3,HTMLTableHeaderCellElement:W.c3,HTMLTableElement:W.dU,HTMLTableRowElement:W.i6,HTMLTableSectionElement:W.i7,HTMLTemplateElement:W.cG,TextTrack:W.b4,TextTrackCue:W.aH,VTTCue:W.aH,TextTrackCueList:W.i9,TextTrackList:W.ia,TimeRanges:W.ie,Touch:W.b6,TouchEvent:W.aI,TouchList:W.ij,TrackDefaultList:W.ik,CompositionEvent:W.bF,FocusEvent:W.bF,TextEvent:W.bF,UIEvent:W.bF,URL:W.iC,VideoTrackList:W.iS,WheelEvent:W.b9,Window:W.cT,DOMWindow:W.cT,Attr:W.cU,CSSRuleList:W.j0,ClientRect:W.ef,DOMRect:W.ef,GamepadList:W.je,NamedNodeMap:W.ey,MozNamedAttrMap:W.ey,SpeechRecognitionResultList:W.jr,StyleSheetList:W.js,SVGLength:P.bg,SVGLengthList:P.h_,SVGNumber:P.bi,SVGNumberList:P.hw,SVGPointList:P.hD,SVGScriptElement:P.cB,SVGStringList:P.i5,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bl,SVGTransformList:P.il,AudioBuffer:P.fd,AudioParamMap:P.fe,AudioTrackList:P.fg,AudioContext:P.bO,webkitAudioContext:P.bO,BaseAudioContext:P.bO,OfflineAudioContext:P.hx,WebGLBuffer:P.db,WebGLProgram:P.dL,WebGL2RenderingContext:P.c1,WebGLShader:P.dO,WebGLTexture:P.dV,WebGLUniformLocation:P.e3,SQLResultSetRowList:P.hY})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dE.$nativeSuperclassTag="ArrayBufferView"
H.cW.$nativeSuperclassTag="ArrayBufferView"
H.cX.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.cY.$nativeSuperclassTag="ArrayBufferView"
H.cZ.$nativeSuperclassTag="ArrayBufferView"
H.dF.$nativeSuperclassTag="ArrayBufferView"
W.d_.$nativeSuperclassTag="EventTarget"
W.d0.$nativeSuperclassTag="EventTarget"
W.d1.$nativeSuperclassTag="EventTarget"
W.d2.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.lw,[])
else B.lw([])})})()
//# sourceMappingURL=test.dart.js.map
