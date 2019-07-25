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
a[c]=function(){a[c]=function(){H.mn(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jm"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jm"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jm(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={j6:function j6(){},
f4:function(){return new P.c8("No element")},
ld:function(){return new P.c8("Too many elements")},
o:function o(a){this.a=a},
eH:function eH(){},
bp:function bp(){},
bY:function bY(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fj:function fj(a,b,c){this.a=a
this.b=b
this.$ti=c},
fk:function fk(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fl:function fl(a,b,c){this.a=a
this.b=b
this.$ti=c},
cg:function cg(a,b,c){this.a=a
this.b=b
this.$ti=c},
hY:function hY(a,b,c){this.a=a
this.b=b
this.$ti=c},
bm:function bm(){},
dg:function dg(){},
df:function df(){},
bF:function(a){var u,t=H.z(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
m3:function(a){return v.types[H.Z(a)]},
ma:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Q(a).$iA},
h:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ao(a)
if(typeof u!=="string")throw H.f(H.be(a))
return u},
c4:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bs:function(a){return H.li(a)+H.ji(H.bg(a),0,null)},
li:function(a){var u,t,s,r,q,p,o,n=J.Q(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.H||!!n.$iba){r=C.n(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.bF(t.length>1&&C.c.a8(t,0)===36?C.c.aG(t,1):t)},
jX:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lq:function(a){var u,t,s,r=H.c([],[P.y])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.J)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.be(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.aw(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.f(H.be(s))}return H.jX(r)},
jY:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.be(s))
if(s<0)throw H.f(H.be(s))
if(s>65535)return H.lq(a)}return H.jX(a)},
j8:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aw(u,10))>>>0,56320|u&1023)}throw H.f(P.aB(a,0,1114111,null,null))},
br:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lp:function(a){var u=H.br(a).getFullYear()+0
return u},
ln:function(a){var u=H.br(a).getMonth()+1
return u},
lj:function(a){var u=H.br(a).getDate()+0
return u},
lk:function(a){var u=H.br(a).getHours()+0
return u},
lm:function(a){var u=H.br(a).getMinutes()+0
return u},
lo:function(a){var u=H.br(a).getSeconds()+0
return u},
ll:function(a){var u=H.br(a).getMilliseconds()+0
return u},
bh:function(a){throw H.f(H.be(a))},
k:function(a,b){if(a==null)J.bj(a)
throw H.f(H.cu(a,b))},
cu:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ap(!0,b,s,null)
u=H.Z(J.bj(a))
if(!(b<0)){if(typeof u!=="number")return H.bh(u)
t=b>=u}else t=!0
if(t)return P.M(b,a,s,null,u)
return P.d3(b,s)},
lY:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bt(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bt(a,c,!0,b,"end",u)
return new P.ap(!0,b,"end",null)},
be:function(a){return new P.ap(!0,a,null,null)},
f:function(a){var u
if(a==null)a=new P.d_()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kD})
u.name=""}else u.toString=H.kD
return u},
kD:function(){return J.ao(this.dartException)},
a9:function(a){throw H.f(a)},
J:function(a){throw H.f(P.b0(a))},
aI:function(a){var u,t,s,r,q,p
a=H.kC(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hp(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hq:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
k7:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jS:function(a,b){return new H.fC(a,b==null?null:b.method)},
j7:function(a,b){var u=b==null,t=u?null:b.method
return new H.f9(a,t,u?null:b.receiver)},
aa:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.iZ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aw(t,16)&8191)===10)switch(s){case 438:return f.$1(H.j7(H.h(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jS(H.h(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kG()
q=$.kH()
p=$.kI()
o=$.kJ()
n=$.kM()
m=$.kN()
l=$.kL()
$.kK()
k=$.kP()
j=$.kO()
i=r.T(u)
if(i!=null)return f.$1(H.j7(H.z(u),i))
else{i=q.T(u)
if(i!=null){i.method="call"
return f.$1(H.j7(H.z(u),i))}else{i=p.T(u)
if(i==null){i=o.T(u)
if(i==null){i=n.T(u)
if(i==null){i=m.T(u)
if(i==null){i=l.T(u)
if(i==null){i=o.T(u)
if(i==null){i=k.T(u)
if(i==null){i=j.T(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jS(H.z(u),i))}}return f.$1(new H.hG(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.d8()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ap(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.d8()
return a},
bC:function(a){var u
if(a==null)return new H.dU(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dU(a)},
m0:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.H(0,a[u],a[t])}return b},
m9:function(a,b,c,d,e,f){H.n(a,"$ib3")
switch(H.Z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.a2("Unsupported number of arguments for wrapped closure"))},
bB:function(a,b){var u
H.Z(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.m9)
a.$identity=u
return u},
l5:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.h4().constructor.prototype):Object.create(new H.bN(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aq
if(typeof t!=="number")return t.P()
$.aq=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.jF(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.m3,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.jD:H.j1
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.f("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.jF(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
l2:function(a,b,c,d){var u=H.j1
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jF:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.l4(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.l2(t,!r,u,b)
if(t===0){r=$.aq
if(typeof r!=="number")return r.P()
$.aq=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bO
return new Function(r+H.h(q==null?$.bO=H.ep("self"):q)+";return "+p+"."+H.h(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aq
if(typeof r!=="number")return r.P()
$.aq=r+1
o+=r
r="return function("+o+"){return this."
q=$.bO
return new Function(r+H.h(q==null?$.bO=H.ep("self"):q)+"."+H.h(u)+"("+o+");}")()},
l3:function(a,b,c,d){var u=H.j1,t=H.jD
switch(b?-1:a){case 0:throw H.f(H.lu("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
l4:function(a,b){var u,t,s,r,q,p,o,n=$.bO
if(n==null)n=$.bO=H.ep("self")
u=$.jC
if(u==null)u=$.jC=H.ep("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.l3(s,!q,t,b)
if(s===1){n="return function(){return this."+H.h(n)+"."+H.h(t)+"(this."+H.h(u)+");"
u=$.aq
if(typeof u!=="number")return u.P()
$.aq=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.h(n)+"."+H.h(t)+"(this."+H.h(u)+", "+o+");"
u=$.aq
if(typeof u!=="number")return u.P()
$.aq=u+1
return new Function(n+u+"}")()},
jm:function(a,b,c,d,e,f,g){return H.l5(a,b,H.Z(c),d,!!e,!!f,g)},
j1:function(a){return a.a},
jD:function(a){return a.c},
ep:function(a){var u,t,s,r=new H.bN("self","target","receiver","name"),q=J.j4(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
C:function(a){if(a==null)H.lS("boolean expression must not be null")
return a},
z:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.an(a,"String"))},
n1:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.an(a,"double"))},
mf:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.an(a,"num"))},
jj:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.an(a,"bool"))},
Z:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.an(a,"int"))},
kA:function(a,b){throw H.f(H.an(a,H.bF(H.z(b).substring(2))))},
mh:function(a,b){throw H.f(H.l1(a,H.bF(H.z(b).substring(2))))},
n:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Q(a)[b])return a
H.kA(a,b)},
bD:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else u=!0
if(u)return a
H.mh(a,b)},
js:function(a){if(a==null)return a
if(!!J.Q(a).$ib)return a
throw H.f(H.an(a,"List<dynamic>"))},
mb:function(a,b){var u
if(a==null)return a
u=J.Q(a)
if(!!u.$ib)return a
if(u[b])return a
H.kA(a,b)},
ku:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.Z(u)]
else return a.$S()}return},
ef:function(a,b){var u
if(typeof a=="function")return!0
u=H.ku(J.Q(a))
if(u==null)return!1
return H.kl(u,null,b,null)},
j:function(a,b){var u,t
if(a==null)return a
if($.jf)return a
$.jf=!0
try{if(H.ef(a,b))return a
u=H.iW(b)
t=H.an(a,u)
throw H.f(t)}finally{$.jf=!1}},
jn:function(a,b){if(a!=null&&!H.jl(a,b))H.a9(H.an(a,H.iW(b)))
return a},
an:function(a,b){return new H.hr("TypeError: "+P.cN(a)+": type '"+H.kp(a)+"' is not a subtype of type '"+b+"'")},
l1:function(a,b){return new H.eq("CastError: "+P.cN(a)+": type '"+H.kp(a)+"' is not a subtype of type '"+b+"'")},
kp:function(a){var u,t=J.Q(a)
if(!!t.$ibP){u=H.ku(t)
if(u!=null)return H.iW(u)
return"Closure"}return H.bs(a)},
lS:function(a){throw H.f(new H.hZ(a))},
mn:function(a){throw H.f(new P.ex(H.z(a)))},
lu:function(a){return new H.fR(a)},
kv:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bg:function(a){if(a==null)return
return a.$ti},
n2:function(a,b,c){return H.bE(a["$a"+H.h(c)],H.bg(b))},
cw:function(a,b,c,d){var u
H.z(c)
H.Z(d)
u=H.bE(a["$a"+H.h(c)],H.bg(b))
return u==null?null:u[d]},
cv:function(a,b,c){var u
H.z(b)
H.Z(c)
u=H.bE(a["$a"+H.h(b)],H.bg(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.Z(b)
u=H.bg(a)
return u==null?null:u[b]},
iW:function(a){return H.bd(a,null)},
bd:function(a,b){var u,t
H.r(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bF(a[0].name)+H.ji(a,1,b)
if(typeof a=="function")return H.bF(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Z(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.k(b,t)
return H.h(b[t])}if('func' in a)return H.lL(a,b)
if('futureOr' in a)return"FutureOr<"+H.bd("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lL:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.e]
H.r(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.k(a0,n)
p=C.c.P(p,a0[n])
m=u[q]
if(m!=null&&m!==P.F)p+=" extends "+H.bd(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bd(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bd(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bd(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.m_(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.z(b[h])
j=j+i+H.bd(e[d],a0)+(" "+H.h(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
ji:function(a,b,c){var u,t,s,r,q,p
H.r(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.bv("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bd(p,c)}return"<"+u.i(0)+">"},
bE:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
jk:function(a,b,c,d){var u,t
H.z(b)
H.js(c)
H.z(d)
if(a==null)return!1
u=H.bg(a)
t=J.Q(a)
if(t[b]==null)return!1
return H.ks(H.bE(t[d],u),null,c,null)},
r:function(a,b,c,d){H.z(b)
H.js(c)
H.z(d)
if(a==null)return a
if(H.jk(a,b,c,d))return a
throw H.f(H.an(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bF(b.substring(2))+H.ji(c,0,null),v.mangledGlobalNames)))},
ks:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ai(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ai(a[t],b,c[t],d))return!1
return!0},
n_:function(a,b,c){return a.apply(b,H.bE(J.Q(b)["$a"+H.h(c)],H.bg(b)))},
kx:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="F"||a.name==="E"||a===-1||a===-2||H.kx(u)}return!1},
jl:function(a,b){var u,t
if(a==null)return b==null||b.name==="F"||b.name==="E"||b===-1||b===-2||H.kx(b)
if(b==null||b===-1||b.name==="F"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jl(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ef(a,b)}u=J.Q(a).constructor
t=H.bg(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ai(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.jl(a,b))throw H.f(H.an(a,H.iW(b)))
return a},
ai:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="F"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="F"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ai(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="E")return!0
if('func' in c)return H.kl(a,b,c,d)
if('func' in a)return c.name==="b3"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.ai("type" in a?a.type:l,b,s,d)
else if(H.ai(a,b,s,d))return!0
else{if(!('$i'+"bW" in t.prototype))return!1
r=t.prototype["$a"+"bW"]
q=H.bE(r,u?a.slice(1):l)
return H.ai(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.ks(H.bE(m,u),b,p,d)},
kl:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.ai(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.ai(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ai(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ai(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.me(h,b,g,d)},
me:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.ai(c[s],d,a[s],b))return!1}return!0},
n0:function(a,b,c){Object.defineProperty(a,H.z(b),{value:c,enumerable:false,writable:true,configurable:true})},
mc:function(a){var u,t,s,r,q=H.z($.kw.$1(a)),p=$.iM[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iT[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.z($.kr.$2(a,q))
if(q!=null){p=$.iM[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iT[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.iV(u)
$.iM[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.iT[q]=u
return u}if(s==="-"){r=H.iV(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kz(a,u)
if(s==="*")throw H.f(P.k8(q))
if(v.leafTags[q]===true){r=H.iV(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kz(a,u)},
kz:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jt(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iV:function(a){return J.jt(a,!1,null,!!a.$iA)},
md:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iV(u)
else return J.jt(u,c,null,null)},
m7:function(){if(!0===$.jr)return
$.jr=!0
H.m8()},
m8:function(){var u,t,s,r,q,p,o,n
$.iM=Object.create(null)
$.iT=Object.create(null)
H.m6()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kB.$1(q)
if(p!=null){o=H.md(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
m6:function(){var u,t,s,r,q,p,o=C.v()
o=H.bA(C.w,H.bA(C.x,H.bA(C.o,H.bA(C.o,H.bA(C.y,H.bA(C.z,H.bA(C.A(C.n),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kw=new H.iQ(r)
$.kr=new H.iR(q)
$.kB=new H.iS(p)},
bA:function(a,b){return a(b)||b},
lf:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(new P.eV("Illegal RegExp pattern ("+String(r)+")",a))},
mk:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lZ:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kC:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jv:function(a,b,c){var u=H.ml(a,b,c)
return u},
ml:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kC(b),'g'),H.lZ(c))},
hp:function hp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fC:function fC(a,b){this.a=a
this.b=b},
f9:function f9(a,b,c){this.a=a
this.b=b
this.c=c},
hG:function hG(a){this.a=a},
iZ:function iZ(a){this.a=a},
dU:function dU(a){this.a=a
this.b=null},
bP:function bP(){},
he:function he(){},
h4:function h4(){},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hr:function hr(a){this.a=a},
eq:function eq(a){this.a=a},
fR:function fR(a){this.a=a},
hZ:function hZ(a){this.a=a},
ax:function ax(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fd:function fd(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cS:function cS(a,b){this.a=a
this.$ti=b},
fe:function fe(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
iQ:function iQ(a){this.a=a},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
f8:function f8(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
je:function(a){return a},
bc:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.cu(b,a))},
lK:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.lY(a,b,c))
return b},
c2:function c2(){},
cW:function cW(){},
c1:function c1(){},
cX:function cX(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
cY:function cY(){},
fy:function fy(){},
ck:function ck(){},
cl:function cl(){},
cm:function cm(){},
cn:function cn(){},
m_:function(a){return J.jK(a?Object.keys(a):[],null)},
mg:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jt:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iP:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jr==null){H.m7()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.k8("Return interceptor for "+H.h(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jx()]
if(r!=null)return r
r=H.mc(a)
if(r!=null)return r
if(typeof a=="function")return C.I
u=Object.getPrototypeOf(a)
if(u==null)return C.q
if(u===Object.prototype)return C.q
if(typeof s=="function"){Object.defineProperty(s,$.jx(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
le:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.j0(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.aB(a,0,4294967295,"length",null))
return J.jK(new Array(a),b)},
jK:function(a,b){return J.j4(H.c(a,[b]))},
j4:function(a){H.js(a)
a.fixed$length=Array
return a},
Q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cP.prototype
return J.f6.prototype}if(typeof a=="string")return J.b4.prototype
if(a==null)return J.f7.prototype
if(typeof a=="boolean")return J.f5.prototype
if(a.constructor==Array)return J.aw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.F)return a
return J.iP(a)},
jo:function(a){if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(a.constructor==Array)return J.aw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.F)return a
return J.iP(a)},
iO:function(a){if(a==null)return a
if(a.constructor==Array)return J.aw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.F)return a
return J.iP(a)},
m1:function(a){if(typeof a=="number")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.ba.prototype
return a},
m2:function(a){if(typeof a=="number")return J.bo.prototype
if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.ba.prototype
return a},
jp:function(a){if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.ba.prototype
return a},
jq:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.F)return a
return J.iP(a)},
T:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).n(a,b)},
jz:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.m2(a).J(a,b)},
kV:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.m1(a).q(a,b)},
kW:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ma(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jo(a).m(a,b)},
kX:function(a,b,c,d){return J.jq(a).eb(a,b,c,d)},
j_:function(a,b){return J.iO(a).t(a,b)},
kY:function(a,b){return J.iO(a).E(a,b)},
kZ:function(a){return J.jq(a).geg(a)},
cz:function(a){return J.Q(a).gC(a)},
bi:function(a){return J.iO(a).gG(a)},
bj:function(a){return J.jo(a).gk(a)},
jA:function(a){return J.iO(a).eV(a)},
l_:function(a,b,c){return J.jp(a).ar(a,b,c)},
l0:function(a){return J.jp(a).f4(a)},
ao:function(a){return J.Q(a).i(a)},
a:function a(){},
f5:function f5(){},
f7:function f7(){},
cQ:function cQ(){},
fG:function fG(){},
ba:function ba(){},
b5:function b5(){},
aw:function aw(a){this.$ti=a},
j5:function j5(a){this.$ti=a},
aj:function aj(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bo:function bo(){},
cP:function cP(){},
f6:function f6(){},
b4:function b4(){}},P={
lA:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lT()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bB(new P.i0(s),1)).observe(u,{childList:true})
return new P.i_(s,u,t)}else if(self.setImmediate!=null)return P.lU()
return P.lV()},
lB:function(a){self.scheduleImmediate(H.bB(new P.i1(H.j(a,{func:1,ret:-1})),0))},
lC:function(a){self.setImmediate(H.bB(new P.i2(H.j(a,{func:1,ret:-1})),0))},
lD:function(a){P.ja(C.i,H.j(a,{func:1,ret:-1}))},
ja:function(a,b){var u
H.j(b,{func:1,ret:-1})
u=C.e.ad(a.a,1000)
return P.lI(u<0?0:u,b)},
k6:function(a,b){var u
H.j(b,{func:1,ret:-1,args:[P.aG]})
u=C.e.ad(a.a,1000)
return P.lJ(u<0?0:u,b)},
lI:function(a,b){var u=new P.e_()
u.cI(a,b)
return u},
lJ:function(a,b){var u=new P.e_()
u.cJ(a,b)
return u},
lE:function(a,b){var u,t,s
b.a=1
try{a.c9(new P.ib(b),new P.ic(b),null)}catch(s){u=H.aa(s)
t=H.bC(s)
P.mi(new P.id(b,u,t))}},
kg:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.n(a.c,"$iah")
if(u>=4){t=b.aV()
b.a=a.a
b.c=a.c
P.cj(b,t)}else{t=H.n(b.c,"$iaL")
b.a=2
b.c=a
a.bC(t)}},
cj:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.n(g.c,"$ia_")
g=g.b
r=s.a
q=s.b
g.toString
P.iH(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cj(h.a,b)}g=h.a
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
if(m){H.n(o,"$ia_")
g=g.b
r=o.a
q=o.b
g.toString
P.iH(i,i,g,r,q)
return}l=$.O
if(l!=n)$.O=n
else l=i
g=b.c
if(g===8)new P.ii(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.ih(u,b,o).$0()}else if((g&2)!==0)new P.ig(h,u,b).$0()
if(l!=null)$.O=l
g=u.b
if(!!J.Q(g).$ibW){if(g.a>=4){k=H.n(q.c,"$iaL")
q.c=null
b=q.av(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.kg(g,q)
return}}j=b.b
k=H.n(j.c,"$iaL")
j.c=null
b=j.av(k)
g=u.a
r=u.b
if(!g){H.B(r,H.u(j,0))
j.a=4
j.c=r}else{H.n(r,"$ia_")
j.a=8
j.c=r}h.a=j
g=j}},
lO:function(a,b){if(H.ef(a,{func:1,args:[P.F,P.a5]}))return H.j(a,{func:1,ret:null,args:[P.F,P.a5]})
if(H.ef(a,{func:1,args:[P.F]}))return H.j(a,{func:1,ret:null,args:[P.F]})
throw H.f(P.j0(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lN:function(){var u,t
for(;u=$.bz,u!=null;){$.ct=null
t=u.b
$.bz=t
if(t==null)$.cs=null
u.a.$0()}},
lR:function(){$.jg=!0
try{P.lN()}finally{$.ct=null
$.jg=!1
if($.bz!=null)$.jy().$1(P.kt())}},
ko:function(a){var u=new P.dk(H.j(a,{func:1,ret:-1}))
if($.bz==null){$.bz=$.cs=u
if(!$.jg)$.jy().$1(P.kt())}else $.cs=$.cs.b=u},
lQ:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
u=$.bz
if(u==null){P.ko(a)
$.ct=$.cs
return}t=new P.dk(a)
s=$.ct
if(s==null){t.b=u
$.bz=$.ct=t}else{t.b=s.b
$.ct=s.b=t
if(t.b==null)$.cs=t}},
mi:function(a){var u,t=null,s={func:1,ret:-1}
H.j(a,s)
u=$.O
if(C.d===u){P.iJ(t,t,C.d,a)
return}u.toString
P.iJ(t,t,u,H.j(u.aZ(a),s))},
k5:function(a,b){var u,t={func:1,ret:-1}
H.j(b,t)
u=$.O
if(u===C.d){u.toString
return P.ja(a,b)}return P.ja(a,H.j(u.aZ(b),t))},
ly:function(a,b){var u,t,s={func:1,ret:-1,args:[P.aG]}
H.j(b,s)
u=$.O
if(u===C.d){u.toString
return P.k6(a,b)}t=u.bL(b,P.aG)
$.O.toString
return P.k6(a,H.j(t,s))},
iH:function(a,b,c,d,e){var u={}
u.a=d
P.lQ(new P.iI(u,e))},
km:function(a,b,c,d,e){var u,t
H.j(d,{func:1,ret:e})
t=$.O
if(t===c)return d.$0()
$.O=c
u=t
try{t=d.$0()
return t}finally{$.O=u}},
kn:function(a,b,c,d,e,f,g){var u,t
H.j(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.O
if(t===c)return d.$1(e)
$.O=c
u=t
try{t=d.$1(e)
return t}finally{$.O=u}},
lP:function(a,b,c,d,e,f,g,h,i){var u,t
H.j(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.O
if(t===c)return d.$2(e,f)
$.O=c
u=t
try{t=d.$2(e,f)
return t}finally{$.O=u}},
iJ:function(a,b,c,d){var u
H.j(d,{func:1,ret:-1})
u=C.d!==c
if(u)d=!(!u||!1)?c.aZ(d):c.eh(d,-1)
P.ko(d)},
i0:function i0(a){this.a=a},
i_:function i_(a,b,c){this.a=a
this.b=b
this.c=c},
i1:function i1(a){this.a=a},
i2:function i2(a){this.a=a},
e_:function e_(){this.c=0},
iD:function iD(a,b){this.a=a
this.b=b},
iC:function iC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aL:function aL(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ah:function ah(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
ia:function ia(a,b){this.a=a
this.b=b},
ie:function ie(a,b){this.a=a
this.b=b},
ib:function ib(a){this.a=a},
ic:function ic(a){this.a=a},
id:function id(a,b,c){this.a=a
this.b=b
this.c=c},
ii:function ii(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ij:function ij(a){this.a=a},
ih:function ih(a,b,c){this.a=a
this.b=b
this.c=c},
ig:function ig(a,b,c){this.a=a
this.b=b
this.c=c},
dk:function dk(a){this.a=a
this.b=null},
h7:function h7(){},
h9:function h9(a,b){this.a=a
this.b=b},
ha:function ha(a,b){this.a=a
this.b=b},
c9:function c9(){},
h8:function h8(){},
aG:function aG(){},
a_:function a_(a,b){this.a=a
this.b=b},
iG:function iG(){},
iI:function iI(a,b){this.a=a
this.b=b},
ip:function ip(){},
ir:function ir(a,b,c){this.a=a
this.b=b
this.c=c},
iq:function iq(a,b){this.a=a
this.b=b},
is:function is(a,b,c){this.a=a
this.b=b
this.c=c},
jL:function(a,b){return new H.ax([a,b])},
lg:function(a){return H.m0(a,new H.ax([null,null]))},
cT:function(a){return new P.im([a])},
jd:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lH:function(a,b,c){var u=new P.dB(a,b,[c])
u.c=a.e
return u},
lc:function(a,b,c){var u,t
if(P.jh(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.e])
C.a.h($.a6,a)
try{P.lM(a,u)}finally{if(0>=$.a6.length)return H.k($.a6,-1)
$.a6.pop()}t=P.k3(b,H.mb(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
j3:function(a,b,c){var u,t
if(P.jh(a))return b+"..."+c
u=new P.bv(b)
C.a.h($.a6,a)
try{t=u
t.a=P.k3(t.a,a,", ")}finally{if(0>=$.a6.length)return H.k($.a6,-1)
$.a6.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jh:function(a){var u,t
for(u=$.a6.length,t=0;t<u;++t)if(a===$.a6[t])return!0
return!1},
lM:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.r(b,"$ib",[P.e],"$ab")
u=a.gG(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.p())return
r=H.h(u.gA(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.p()){if(s<=5)return
if(0>=b.length)return H.k(b,-1)
q=b.pop()
if(0>=b.length)return H.k(b,-1)
p=b.pop()}else{o=u.gA(u);++s
if(!u.p()){if(s<=4){C.a.h(b,H.h(o))
return}q=H.h(o)
if(0>=b.length)return H.k(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gA(u);++s
for(;u.p();o=n,n=m){m=u.gA(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.k(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.h(o)
q=H.h(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
jM:function(a,b){var u,t,s=P.cT(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.J)(a),++t)s.h(0,H.B(a[t],b))
return s},
jO:function(a){var u,t={}
if(P.jh(a))return"{...}"
u=new P.bv("")
try{C.a.h($.a6,a)
u.a+="{"
t.a=!0
J.kY(a,new P.fi(t,u))
u.a+="}"}finally{if(0>=$.a6.length)return H.k($.a6,-1)
$.a6.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
im:function im(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
by:function by(a){this.a=a
this.c=this.b=null},
dB:function dB(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ff:function ff(){},
t:function t(){},
fh:function fh(){},
fi:function fi(a,b){this.a=a
this.b=b},
V:function V(){},
iu:function iu(){},
dC:function dC(){},
bQ:function bQ(){},
bR:function bR(){},
eJ:function eJ(){},
f0:function f0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f_:function f_(a){this.a=a},
hJ:function hJ(){},
hK:function hK(){},
iE:function iE(a){this.b=0
this.c=a},
la:function(a){if(a instanceof H.bP)return a.i(0)
return"Instance of '"+H.bs(a)+"'"},
lh:function(a,b,c){var u,t
H.B(b,c)
u=J.le(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.H(u,t,b)
return H.r(u,"$ib",[c],"$ab")},
jN:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bi(a);u.p();)C.a.h(s,H.B(u.gA(u),c))
if(b)return s
return H.r(J.j4(s),"$ib",t,"$ab")},
j9:function(a){var u,t,s=P.y
H.r(a,"$ii",[s],"$ai")
if(a.constructor===Array){H.r(a,"$iaw",[s],"$aaw")
u=a.length
t=P.k_(0,null,u)
return H.jY(t<u?C.a.cr(a,0,t):a)}return P.lw(a,0,null)},
lw:function(a,b,c){var u,t,s
H.r(a,"$ii",[P.y],"$ai")
u=J.bi(a)
for(t=0;t<b;++t)if(!u.p())throw H.f(P.aB(b,0,t,null,null))
s=[]
for(;u.p();)s.push(u.gA(u))
return H.jY(s)},
lr:function(a){return new H.f8(a,H.lf(a,!1,!0,!1))},
k3:function(a,b,c){var u=J.bi(b)
if(!u.p())return a
if(c.length===0){do a+=H.h(u.gA(u))
while(u.p())}else{a+=H.h(u.gA(u))
for(;u.p();)a=a+c+H.h(u.gA(u))}return a},
kk:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.r(a,"$ib",[P.y],"$ab")
if(c===C.h){u=$.kU().b
u=u.test(b)}else u=!1
if(u)return b
t=C.C.ek(H.B(b,H.cv(c,"bQ",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.k(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.j8(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
l6:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
l7:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cJ:function(a){if(a>=10)return""+a
return"0"+a},
jH:function(a,b){return new P.aN(1e6*b+1000*a)},
cN:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ao(a)
if(typeof a==="string")return JSON.stringify(a)
return P.la(a)},
j0:function(a,b,c){return new P.ap(!0,a,b,c)},
d3:function(a,b){return new P.bt(null,null,!0,a,b,"Value not in range")},
aB:function(a,b,c,d,e){return new P.bt(b,c,!0,a,d,"Invalid value")},
k_:function(a,b,c){if(0>a||a>c)throw H.f(P.aB(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.aB(b,a,c,"end",null))
return b}return c},
jZ:function(a,b){if(typeof a!=="number")return a.cn()
if(a<0)throw H.f(P.aB(a,0,null,b,null))},
M:function(a,b,c,d,e){var u=H.Z(e==null?J.bj(b):e)
return new P.f1(u,!0,a,c,"Index out of range")},
ae:function(a){return new P.hH(a)},
k8:function(a){return new P.hF(a)},
k2:function(a){return new P.c8(a)},
b0:function(a){return new P.es(a)},
a2:function(a){return new P.dt(a)},
ju:function(a){H.mg(a)},
L:function L(){},
b1:function b1(a,b){this.a=a
this.b=b},
w:function w(){},
aN:function aN(a){this.a=a},
eF:function eF(){},
eG:function eG(){},
b2:function b2(){},
ei:function ei(){},
d_:function d_(){},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bt:function bt(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f1:function f1(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hH:function hH(a){this.a=a},
hF:function hF(a){this.a=a},
c8:function c8(a){this.a=a},
es:function es(a){this.a=a},
fF:function fF(){},
d8:function d8(){},
ex:function ex(a){this.a=a},
dt:function dt(a){this.a=a},
eV:function eV(a,b){this.a=a
this.b=b},
b3:function b3(){},
y:function y(){},
i:function i(){},
av:function av(){},
b:function b(){},
G:function G(){},
E:function E(){},
Y:function Y(){},
F:function F(){},
a5:function a5(){},
e:function e(){},
bv:function bv(a){this.a=a},
aT:function(a){var u,t,s,r,q
if(a==null)return
u=P.jL(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.J)(t),++r){q=H.z(t[r])
u.H(0,q,a[q])}return u},
lW:function(a){var u={}
a.E(0,new P.iK(u))
return u},
iK:function iK(a){this.a=a},
eR:function eR(a,b){this.a=a
this.b=b},
eS:function eS(){},
eT:function eT(){},
io:function io(){},
ad:function ad(){},
aQ:function aQ(){},
fb:function fb(){},
aR:function aR(){},
fD:function fD(){},
fJ:function fJ(){},
c5:function c5(){},
hb:function hb(){},
m:function m(){},
aS:function aS(){},
ho:function ho(){},
dz:function dz(){},
dA:function dA(){},
dK:function dK(){},
dL:function dL(){},
dW:function dW(){},
dX:function dX(){},
e2:function e2(){},
e3:function e3(){},
ek:function ek(){},
el:function el(){},
em:function em(a){this.a=a},
en:function en(){},
bk:function bk(){},
fE:function fE(){},
dl:function dl(){},
cD:function cD(){},
d2:function d2(){},
bu:function bu(){},
d6:function d6(){},
de:function de(){},
h3:function h3(){},
dS:function dS(){},
dT:function dT(){}},W={
jB:function(){var u=document.createElement("a")
return u},
jE:function(){var u=document.createElement("canvas")
return u},
l8:function(a,b,c){var u=document.body,t=(u&&C.m).R(u,a,b,c)
t.toString
u=W.x
u=new H.cg(new W.a0(t),H.j(new W.eI(),{func:1,ret:P.L,args:[u]}),[u])
return H.n(u.ga5(u),"$iI")},
l9:function(a){H.n(a,"$id")
return"wheel"},
bU:function(a){var u,t,s,r="element tag unavailable"
try{u=J.jq(a)
t=u.gc7(a)
if(typeof t==="string")r=u.gc7(a)}catch(s){H.aa(s)}return r},
il:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ki:function(a,b,c,d){var u=W.il(W.il(W.il(W.il(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
X:function(a,b,c,d,e){var u=W.kq(new W.i9(c),W.l)
if(u!=null&&!0)J.kX(a,b,u,!1)
return new W.i8(a,b,u,!1,[e])},
kh:function(a){var u=W.jB(),t=window.location
u=new W.bb(new W.it(u,t))
u.cE(a)
return u},
lF:function(a,b,c,d){H.n(a,"$iI")
H.z(b)
H.z(c)
H.n(d,"$ibb")
return!0},
lG:function(a,b,c,d){var u,t,s
H.n(a,"$iI")
H.z(b)
H.z(c)
u=H.n(d,"$ibb").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
kj:function(){var u=P.e,t=P.jM(C.j,u),s=H.u(C.j,0),r=H.j(new W.iB(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.iA(t,P.cT(u),P.cT(u),P.cT(u),null)
t.cH(null,new H.fl(C.j,r,[s,u]),q,null)
return t},
kq:function(a,b){var u
H.j(a,{func:1,ret:-1,args:[b]})
u=$.O
if(u===C.d)return a
return u.bL(a,b)},
p:function p(){},
eg:function eg(){},
cA:function cA(){},
eh:function eh(){},
bM:function bM(){},
cC:function cC(){},
aV:function aV(){},
bl:function bl(){},
aW:function aW(){},
bS:function bS(){},
et:function et(){},
K:function K(){},
bT:function bT(){},
eu:function eu(){},
ar:function ar(){},
as:function as(){},
ev:function ev(){},
ew:function ew(){},
ez:function ez(){},
ab:function ab(){},
eC:function eC(){},
cK:function cK(){},
cL:function cL(){},
eD:function eD(){},
eE:function eE(){},
i4:function i4(a,b){this.a=a
this.b=b},
I:function I(){},
eI:function eI(){},
l:function l(){},
d:function d(){},
at:function at(){},
eP:function eP(){},
eQ:function eQ(){},
eU:function eU(){},
au:function au(){},
eZ:function eZ(){},
bn:function bn(){},
ay:function ay(){},
cU:function cU(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(a){this.a=a},
fp:function fp(){},
fq:function fq(a){this.a=a},
az:function az(){},
fr:function fr(){},
W:function W(){},
a0:function a0(a){this.a=a},
x:function x(){},
c3:function c3(){},
aA:function aA(){},
fI:function fI(){},
fP:function fP(){},
fQ:function fQ(a){this.a=a},
fS:function fS(){},
aC:function aC(){},
h1:function h1(){},
aD:function aD(){},
h2:function h2(){},
aE:function aE(){},
h5:function h5(){},
h6:function h6(a){this.a=a},
ak:function ak(){},
bw:function bw(){},
d9:function d9(){},
hc:function hc(){},
hd:function hd(){},
ca:function ca(){},
aF:function aF(){},
al:function al(){},
hf:function hf(){},
hg:function hg(){},
hi:function hi(){},
aH:function aH(){},
am:function am(){},
hm:function hm(){},
hn:function hn(){},
b9:function b9(){},
hI:function hI(){},
hW:function hW(){},
aK:function aK(){},
ch:function ch(){},
ci:function ci(){},
i5:function i5(){},
dn:function dn(){},
ik:function ik(){},
dH:function dH(){},
ix:function ix(){},
iy:function iy(){},
i3:function i3(){},
i6:function i6(a){this.a=a},
i7:function i7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jc:function jc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i8:function i8(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
i9:function i9(a){this.a=a},
bb:function bb(a){this.a=a},
v:function v(){},
cZ:function cZ(a){this.a=a},
fA:function fA(a){this.a=a},
fz:function fz(a,b,c){this.a=a
this.b=b
this.c=c},
dP:function dP(){},
iv:function iv(){},
iw:function iw(){},
iA:function iA(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iB:function iB(){},
iz:function iz(){},
cO:function cO(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
a8:function a8(){},
it:function it(a,b){this.a=a
this.b=b},
e4:function e4(a){this.a=a},
iF:function iF(a){this.a=a},
dm:function dm(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
ds:function ds(){},
du:function du(){},
dv:function dv(){},
dx:function dx(){},
dy:function dy(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
dI:function dI(){},
dJ:function dJ(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
co:function co(){},
cp:function cp(){},
dQ:function dQ(){},
dR:function dR(){},
dV:function dV(){},
dY:function dY(){},
dZ:function dZ(){},
cq:function cq(){},
cr:function cr(){},
e0:function e0(){},
e1:function e1(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){}},O={
jG:function(a){var u=new O.aY([a])
u.sd5(H.c([],[a]))
u.sbA(null)
u.sbz(null)
u.sbB(null)
return u},
aY:function aY(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bZ:function bZ(){this.b=this.a=null},
eA:function eA(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
bx:function bx(){}},E={
lt:function(a,b){var u=new E.fL(a)
u.cA(a,b)
return u},
lx:function(a,b,c,d,e){var u,t,s=J.Q(a)
if(!!s.$ibl)return E.k4(a,!0,!0,!0,!1)
u=W.jE()
t=u.style
t.width="100%"
t.height="100%"
s.gbM(a).h(0,u)
return E.k4(u,!0,!0,!0,!1)},
k4:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.db(),j=H.n(C.D.cl(a,"webgl2",P.lg(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibu")
if(j==null)H.a9(P.a2("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.lt(j,a)
H.Z(j.getParameter(3379))
H.Z(j.getParameter(34076))
u=new X.dh(a)
t=new X.fa()
t.sdN(P.cT(P.y))
u.b=t
t=new X.fs(u)
t.f=0
t.r=V.d1()
t.x=V.d1()
t.ch=t.Q=1
u.c=t
t=new X.fg(u)
t.r=0
t.x=V.d1()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hl(u)
t.f=V.d1()
t.r=V.d1()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.scW(H.c([],[[P.c9,P.F]]))
t=u.z
s=document
r=W.W
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.X(s,"contextmenu",H.j(u.gdf(),q),!1,r))
t=u.z
p=W.l
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.X(a,"focus",H.j(u.gdl(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.X(a,"blur",H.j(u.gd8(),o),!1,p))
t=u.z
n=W.ay
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.X(s,"keyup",H.j(u.gdr(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.X(s,"keydown",H.j(u.gdn(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.X(a,"mousedown",H.j(u.gdu(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.X(a,"mouseup",H.j(u.gdA(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.X(a,l,H.j(u.gdw(),q),!1,r))
n=u.z
m=W.aK;(n&&C.a).h(n,W.X(a,H.z(W.l9(a)),H.j(u.gdC(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.X(s,l,H.j(u.gdh(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.X(s,"mouseup",H.j(u.gdj(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.X(s,"pointerlockchange",H.j(u.gdE(),o),!1,p))
p=u.z
o=W.am
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.X(a,"touchstart",H.j(u.gdL(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.X(a,"touchend",H.j(u.gdH(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.X(a,"touchmove",H.j(u.gdJ(),s),!1,o))
k.Q=!0
k.ch=!1
k.cx=new P.b1(Date.now(),!1)
k.cy=0
k.bD()
return k},
eo:function eo(){},
a1:function a1(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fL:function fL(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fM:function fM(a){this.a=a},
fN:function fN(a){this.a=a},
fO:function fO(a){this.a=a},
db:function db(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
hh:function hh(a){this.a=a}},Z={
lz:function(a,b,c){var u
H.r(c,"$ib",[P.y],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.je(c)),35044)
a.bindBuffer(b,null)
return new Z.dj(b,u)},
ag:function(a){return new Z.di(a)},
dj:function dj(a,b){this.a=a
this.b=b},
cE:function cE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
hX:function hX(a){this.a=a},
cF:function cF(a,b){this.a=a
this.b=null
this.c=b},
bX:function bX(a,b,c){this.a=a
this.b=b
this.c=c},
di:function di(a){this.a=a}},D={
aP:function(){var u=new D.bV()
u.saa(null)
u.saj(null)
u.c=null
u.d=0
return u},
er:function er(){},
bV:function bV(){var _=this
_.d=_.c=_.b=_.a=null},
eL:function eL(a){this.a=a},
eM:function eM(a){this.a=a},
D:function D(){this.b=null},
f2:function f2(a){this.b=null
this.$ti=a},
f3:function f3(a){this.b=null
this.$ti=a},
R:function R(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d}},X={cG:function cG(a,b){this.a=a
this.b=b},cR:function cR(a,b){this.a=a
this.b=b},fa:function fa(){this.d=this.b=this.a=null},fg:function fg(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c_:function c_(a,b,c){this.a=a
this.b=b
this.c=c},fs:function fs(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hl:function hl(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dh:function dh(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lb:function(a){var u=new X.eW(),t=V.bf(1)
u.a=new V.b_(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.k0
if(t==null){t=V.ls(0,0,1,1)
$.k0=t}u.r=t
return u},
cH:function cH(){},
eW:function eW(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d0:function d0(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
da:function da(){}},V={
bf:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
jw:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.b.co(a-b,u)
return(a<0?a+u:a)+b},
H:function(a,b,c){if(a==null)return C.c.a3("null",c)
return C.c.a3(C.b.cb(Math.abs(a-0)<$.P().a?0:a,b),c+b+1)},
iN:function(a,b,c){var u,t,s,r,q
H.r(a,"$ib",[P.w],"$ab")
u=H.c([],[P.e])
for(t=0,s=0;s<4;++s){r=V.H(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(u,r)}for(q=u.length-1;q>=0;--q){if(q>=u.length)return H.k(u,q)
C.a.H(u,q,C.c.a3(u[q],t))}return u},
jQ:function(){var u=$.jP
return u==null?$.jP=V.b8(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b8:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.b7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
d1:function(){var u=$.jV
return u==null?$.jV=new V.a4(0,0):u},
ls:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d4(a,b,c,d)},
hL:function(){var u=$.ke
return u==null?$.ke=new V.S(0,0,0):u},
aZ:function aZ(a,b,c){this.a=a
this.b=b
this.c=c},
b_:function b_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eK:function eK(a){this.a=a},
b7:function b7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ac:function ac(a,b,c){this.a=a
this.b=b
this.c=c},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aJ:function aJ(a,b){this.a=a
this.b=b},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
N:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.a2("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.a8(a,0)
t=C.c.a8(b,0)
s=new V.fK()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
q:function(a){var u=new V.fT()
u.cB(a)
return u},
hk:function(){var u=new V.hj(),t=P.e
u.se5(new H.ax([t,V.c7]))
u.se7(new H.ax([t,V.cb]))
u.c=null
return u},
aM:function aM(){},
a7:function a7(){},
cV:function cV(){},
a3:function a3(){this.a=null},
fK:function fK(){this.b=this.a=null},
fT:function fT(){this.a=null},
c7:function c7(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dc:function dc(a,b,c){this.a=a
this.b=b
this.c=c},
cb:function cb(a){this.b=a
this.c=null},
hj:function hj(){this.c=this.b=this.a=null},
cc:function cc(a){this.b=a
this.a=this.c=null},
mj:function(a){P.ly(C.F,new V.iX(a))},
lv:function(a){var u=new V.fX()
u.cD(a,!0)
return u},
aX:function aX(){},
iX:function iX(a){this.a=a},
ey:function ey(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eX:function eX(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eY:function eY(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fH:function fH(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fX:function fX(){this.b=this.a=null},
fZ:function fZ(a){this.a=a},
fY:function fY(a){this.a=a},
h_:function h_(a){this.a=a}},U={cI:function cI(){this.b=this.a=null},c0:function c0(){},d5:function d5(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cM:function cM(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
jb:function(a,b,c,d,e){var u=new A.hu(a,c,e)
u.f=d
u.se9(P.lh(d,0,P.y))
return u},
cB:function cB(a,b,c){this.a=a
this.b=b
this.c=c},
ej:function ej(a){this.a=a},
eB:function eB(a,b){var _=this
_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
c6:function c6(){},
dd:function dd(){},
hA:function hA(a){this.a=a},
ht:function ht(a,b,c){this.a=a
this.c=b
this.d=c},
hw:function hw(a,b,c){this.a=a
this.c=b
this.d=c},
hx:function hx(a,b,c){this.a=a
this.c=b
this.d=c},
hz:function hz(a,b,c){this.a=a
this.c=b
this.d=c},
hu:function hu(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
cd:function cd(a,b,c){this.a=a
this.c=b
this.d=c},
hv:function hv(a,b,c){this.a=a
this.c=b
this.d=c},
ce:function ce(a,b,c){this.a=a
this.c=b
this.d=c},
hy:function hy(a,b,c){this.a=a
this.c=b
this.d=c},
hB:function hB(a,b,c){this.a=a
this.c=b
this.d=c},
hC:function hC(a,b,c){this.a=a
this.c=b
this.d=c},
cf:function cf(a,b,c){this.a=a
this.c=b
this.d=c},
hD:function hD(a,b,c){this.a=a
this.c=b
this.d=c},
hE:function hE(a,b,c){this.a=a
this.c=b
this.d=c}},F={
mo:function(){return F.lX(15,30,0.5,1,new F.iY())},
lX:function(a,b,c,d,e){var u,t=F.mm(a,b,new F.iL(H.j(e,{func:1,ret:V.ac,args:[P.w]}),d,b,c))
if(t==null)return
u=t.e
if(u!=null)++u.d
t.d.b0()
t.a.b0()
u=t.e
if(u!=null)u.aC(0)
t.eF(new F.hR(),new F.fB())
return t},
mm:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.j(c,{func:1,ret:-1,args:[F.af,P.w,P.w]})
if(a<1)return
if(b<1)return
u=new F.d7()
t=new F.hM(u)
t.b=!1
s=[F.af]
t.sea(H.c([],s))
u.a=t
t=new F.fW()
t.saT(H.c([],[F.bq]))
u.b=t
t=new F.fV(u)
t.sd2(H.c([],[F.b6]))
u.c=t
t=new F.fU(u)
t.scX(H.c([],[F.U]))
u.d=t
u.e=null
r=H.c([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
o=t.bI(new V.b_(s,0,0,1),new V.a4(p,1))
c.$3(o,p,0)
C.a.h(r,o.bP(null))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
o=k.bI(new V.b_(j,i,h,1),new V.a4(p,m))
c.$3(o,p,n)
C.a.h(r,o.bP(null))}}u.d.ec(a+1,b+1,r)
return u},
eN:function(a,b,c){var u=new F.U(),t=a.a
if(t==null)H.a9(P.a2("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.a9(P.a2("May not create a face with vertices attached to different shapes."))
u.dY(a)
u.dZ(b)
u.e_(c)
C.a.h(u.a.a.d.b,u)
u.a.a.U()
return u},
kf:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.af(),r=new F.hU()
r.saT(H.c([],[F.bq]))
s.b=r
r=new F.hQ()
u=[F.b6]
r.sd3(H.c([],u))
r.sd4(H.c([],u))
s.c=r
r=new F.hN()
u=[F.U]
r.scY(H.c([],u))
r.scZ(H.c([],u))
r.sd_(H.c([],u))
s.d=r
h=$.kQ()
s.e=0
r=$.aU()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bI().a)!==0?e:t
s.x=(u&$.bH().a)!==0?b:t
s.y=(u&$.bJ().a)!==0?f:t
s.z=(u&$.bK().a)!==0?g:t
s.Q=(u&$.kR().a)!==0?c:t
s.ch=(u&$.bL().a)!==0?i:0
s.cx=(u&$.bG().a)!==0?a:t
return s},
iY:function iY(){},
iL:function iL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
U:function U(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eO:function eO(){},
h0:function h0(){},
b6:function b6(){},
fc:function fc(){},
hs:function hs(){},
bq:function bq(){},
d7:function d7(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fU:function fU(a){this.a=a
this.b=null},
fV:function fV(a){this.a=a
this.b=null},
fW:function fW(){this.b=null},
af:function af(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hV:function hV(a){this.a=a},
hM:function hM(a){this.a=a
this.c=this.b=null},
hN:function hN(){this.d=this.c=this.b=null},
hO:function hO(a,b){this.a=a
this.b=b},
hP:function hP(a,b){this.a=a
this.b=b},
hQ:function hQ(){this.c=this.b=null},
hS:function hS(){},
hR:function hR(){},
hT:function hT(){},
fB:function fB(){},
hU:function hU(){this.b=null}},Y={
ky:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="testCanvas",f=null,e=V.lv("Test 001"),d=W.jE()
d.className="pageLargeCanvas"
d.id=g
e.a.appendChild(d)
u=[P.e]
e.bJ(H.c(["Test of the Depth shader, a basic fog shader with a single auto-rotating shape."],u))
e.bJ(H.c(["\xab[Back to Tests|../]"],u))
t=new E.a1()
t.a=""
t.b=!0
u=E.a1
t.scP(0,O.jG(u))
t.y.bb(t.geG(),t.geJ())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbd(0,f)
t.sao(f)
t.sbd(0,F.mo())
s=new U.d5()
s.r=s.f=s.e=s.d=s.c=s.b=s.a=0
s.sci(0)
s.sc_(0,0)
s.sc5(0)
r=s.d
if(!(Math.abs(r-0.1)<$.P().a)){s.d=0.1
r=new D.R("deltaYaw",r,0.1,[P.w])
r.b=!0
s.ab(r)}r=s.e
if(!(Math.abs(r-0.21)<$.P().a)){s.e=0.21
r=new D.R("deltaPitch",r,0.21,[P.w])
r.b=!0
s.ab(r)}r=s.f
if(!(Math.abs(r-0.32)<$.P().a)){s.f=0.32
r=new D.R("deltaRoll",r,0.32,[P.w])
r.b=!0
s.ab(r)}t.sao(s)
q=new O.eA()
q.d=1
q.e=10
p=new V.aZ(1,1,1)
q.b=p
s=[V.aZ]
r=new D.R("objectColor",f,p,s)
r.b=!0
q.at(r)
p=new V.aZ(0,0,0)
if(!J.T(q.c,p)){o=q.c
q.c=p
s=new D.R("fogColor",o,p,s)
s.b=!0
q.at(s)}s=q.d
if(!(Math.abs(s-3)<$.P().a)){q.d=3
s=new D.R("fogStart",s,3,[P.w])
s.b=!0
q.at(s)}s=q.e
if(!(Math.abs(s-6)<$.P().a)){q.e=6
s=new D.R("fogStop",s,6,[P.w])
s.b=!0
q.at(s)}n=new M.cM()
n.a=!0
n.scF(0,O.jG(u))
n.e.bb(n.gda(),n.gdd())
n.y=n.x=n.r=n.f=null
m=X.lb(f)
l=new X.d0()
l.c=1.0471975511965976
l.d=0.1
l.e=2000
l.sao(f)
u=l.c
if(!(Math.abs(u-1.0471975511965976)<$.P().a)){l.c=1.0471975511965976
u=new D.R("fov",u,1.0471975511965976,[P.w])
u.b=!0
l.a7(u)}u=l.d
if(!(Math.abs(u-0.1)<$.P().a)){l.d=0.1
u=new D.R("near",u,0.1,[P.w])
u.b=!0
l.a7(u)}u=l.e
if(!(Math.abs(u-2000)<$.P().a)){l.e=2000
u=new D.R("far",u,2000,[P.w])
u.b=!0
l.a7(u)}u=n.b
if(u!==l){if(u!=null)u.gv().I(0,n.gW())
o=n.b
n.b=l
l.gv().h(0,n.gW())
u=new D.R("camera",o,n.b,[X.cH])
u.b=!0
n.Z(u)}u=n.c
if(u!==m){if(u!=null)u.gv().I(0,n.gW())
o=n.c
n.c=m
m.gv().h(0,n.gW())
u=new D.R("target",o,n.c,[X.da])
u.b=!0
n.Z(u)}n.sc8(f)
u=n.e
s=H.u(u,0)
H.B(t,s)
s=[s]
if(H.C(u.dG(H.c([t],s)))){r=u.a
k=r.length
C.a.h(r,t)
u.d7(k,H.c([t],s))}n.sc8(q)
u=n.b
j=V.b8(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
s=new U.cI()
s.a=j
u.sao(s)
i=document.getElementById(g)
if(i==null)H.a9(P.a2("Failed to find an element with the identifier, testCanvas."))
h=E.lx(i,!0,!0,!0,!1)
u=h.d
if(u!==n){if(u!=null)u.gv().I(0,h.gbg())
h.d=n
n.gv().h(0,h.gbg())
h.bh()}u=h.z
if(u==null)u=h.z=D.aP()
s={func:1,ret:-1,args:[D.D]}
r=H.j(new Y.iU(e,q),s)
if(u.b==null)u.saj(H.c([],[s]))
u=u.b;(u&&C.a).h(u,r)
V.mj(h)},
iU:function iU(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,Y]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.j6.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gC:function(a){return H.c4(a)},
i:function(a){return"Instance of '"+H.bs(a)+"'"}}
J.f5.prototype={
i:function(a){return String(a)},
gC:function(a){return a?519018:218159},
$iL:1}
J.f7.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gC:function(a){return 0}}
J.cQ.prototype={
gC:function(a){return 0},
i:function(a){return String(a)}}
J.fG.prototype={}
J.ba.prototype={}
J.b5.prototype={
i:function(a){var u=a[$.kF()]
if(u==null)return this.cu(a)
return"JavaScript function for "+H.h(J.ao(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ib3:1}
J.aw.prototype={
h:function(a,b){H.B(b,H.u(a,0))
if(!!a.fixed$length)H.a9(P.ae("add"))
a.push(b)},
c3:function(a,b){if(!!a.fixed$length)H.a9(P.ae("removeAt"))
if(b<0||b>=a.length)throw H.f(P.d3(b,null))
return a.splice(b,1)[0]},
I:function(a,b){var u
if(!!a.fixed$length)H.a9(P.ae("remove"))
for(u=0;u<a.length;++u)if(J.T(a[u],b)){a.splice(u,1)
return!0}return!1},
E:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.b0(a))}},
l:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.H(t,u,H.h(a[u]))
return t.join(b)},
eB:function(a){return this.l(a,"")},
ev:function(a,b){var u,t,s
H.j(b,{func:1,ret:P.L,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.C(b.$1(s)))return s
if(a.length!==u)throw H.f(P.b0(a))}throw H.f(H.f4())},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
cr:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.aB(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.aB(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.u(a,0)])
return H.c(a.slice(b,c),[H.u(a,0)])},
geu:function(a){if(a.length>0)return a[0]
throw H.f(H.f4())},
gaA:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.f4())},
bK:function(a,b){var u,t
H.j(b,{func:1,ret:P.L,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.C(b.$1(a[t])))return!0
if(a.length!==u)throw H.f(P.b0(a))}return!1},
L:function(a,b){var u
for(u=0;u<a.length;++u)if(J.T(a[u],b))return!0
return!1},
i:function(a){return P.j3(a,"[","]")},
gG:function(a){return new J.aj(a,a.length,[H.u(a,0)])},
gC:function(a){return H.c4(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.a9(P.ae("set length"))
if(b<0)throw H.f(P.aB(b,0,null,"newLength",null))
a.length=b},
H:function(a,b,c){H.B(c,H.u(a,0))
if(!!a.immutable$list)H.a9(P.ae("indexed set"))
if(b>=a.length||b<0)throw H.f(H.cu(a,b))
a[b]=c},
$ii:1,
$ib:1}
J.j5.prototype={}
J.aj.prototype={
gA:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.J(s))
u=t.c
if(u>=r){t.sbk(null)
return!1}t.sbk(s[u]);++t.c
return!0},
sbk:function(a){this.d=H.B(a,H.u(this,0))},
$iav:1}
J.bo.prototype={
bR:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.ae(""+a+".floor()"))},
V:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.ae(""+a+".round()"))},
cb:function(a,b){var u,t
if(b>20)throw H.f(P.aB(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gC:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
q:function(a,b){if(typeof b!=="number")throw H.f(H.be(b))
return a-b},
J:function(a,b){if(typeof b!=="number")throw H.f(H.be(b))
return a*b},
co:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
cz:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bE(a,b)},
ad:function(a,b){return(a|0)===a?a/b|0:this.bE(a,b)},
bE:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.ae("Result of truncating division is "+H.h(u)+": "+H.h(a)+" ~/ "+b))},
aw:function(a,b){var u
if(a>0)u=this.e4(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
e4:function(a,b){return b>31?0:a>>>b},
$iw:1,
$iY:1}
J.cP.prototype={$iy:1}
J.f6.prototype={}
J.b4.prototype={
b1:function(a,b){if(b<0)throw H.f(H.cu(a,b))
if(b>=a.length)H.a9(H.cu(a,b))
return a.charCodeAt(b)},
a8:function(a,b){if(b>=a.length)throw H.f(H.cu(a,b))
return a.charCodeAt(b)},
P:function(a,b){if(typeof b!=="string")throw H.f(P.j0(b,null,null))
return a+b},
aF:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
ar:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.d3(b,null))
if(b>c)throw H.f(P.d3(b,null))
if(c>a.length)throw H.f(P.d3(c,null))
return a.substring(b,c)},
aG:function(a,b){return this.ar(a,b,null)},
f4:function(a){return a.toLowerCase()},
J:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.B)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a3:function(a,b){var u=b-a.length
if(u<=0)return a
return this.J(" ",u)+a},
i:function(a){return a},
gC:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ijT:1,
$ie:1}
H.o.prototype={
gk:function(a){return this.a.length},
m:function(a,b){return C.c.b1(this.a,b)},
$adg:function(){return[P.y]},
$at:function(){return[P.y]},
$ai:function(){return[P.y]},
$ab:function(){return[P.y]}}
H.eH.prototype={}
H.bp.prototype={
gG:function(a){var u=this
return new H.bY(u,u.gk(u),[H.cv(u,"bp",0)])},
aD:function(a,b){return this.ct(0,H.j(b,{func:1,ret:P.L,args:[H.cv(this,"bp",0)]}))}}
H.bY.prototype={
gA:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=J.jo(s),q=r.gk(s)
if(t.b!==q)throw H.f(P.b0(s))
u=t.c
if(u>=q){t.sai(null)
return!1}t.sai(r.t(s,u));++t.c
return!0},
sai:function(a){this.d=H.B(a,H.u(this,0))},
$iav:1}
H.fj.prototype={
gG:function(a){return new H.fk(J.bi(this.a),this.b,this.$ti)},
gk:function(a){return J.bj(this.a)},
t:function(a,b){return this.b.$1(J.j_(this.a,b))},
$ai:function(a,b){return[b]}}
H.fk.prototype={
p:function(){var u=this,t=u.b
if(t.p()){u.sai(u.c.$1(t.gA(t)))
return!0}u.sai(null)
return!1},
gA:function(a){return this.a},
sai:function(a){this.a=H.B(a,H.u(this,1))},
$aav:function(a,b){return[b]}}
H.fl.prototype={
gk:function(a){return J.bj(this.a)},
t:function(a,b){return this.b.$1(J.j_(this.a,b))},
$abp:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cg.prototype={
gG:function(a){return new H.hY(J.bi(this.a),this.b,this.$ti)}}
H.hY.prototype={
p:function(){var u,t
for(u=this.a,t=this.b;u.p();)if(H.C(t.$1(u.gA(u))))return!0
return!1},
gA:function(a){var u=this.a
return u.gA(u)}}
H.bm.prototype={}
H.dg.prototype={}
H.df.prototype={}
H.hp.prototype={
T:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fC.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f9.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.h(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.h(t.a)+")"
return s+r+"' on '"+u+"' ("+H.h(t.a)+")"}}
H.hG.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.iZ.prototype={
$1:function(a){if(!!J.Q(a).$ib2)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.dU.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$ia5:1}
H.bP.prototype={
i:function(a){return"Closure '"+H.bs(this).trim()+"'"},
$ib3:1,
gf7:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.he.prototype={}
H.h4.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bF(u)+"'"}}
H.bN.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bN))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gC:function(a){var u,t=this.c
if(t==null)u=H.c4(this.a)
else u=typeof t!=="object"?J.cz(t):H.c4(t)
return(u^H.c4(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.bs(u)+"'")}}
H.hr.prototype={
i:function(a){return this.a}}
H.eq.prototype={
i:function(a){return this.a}}
H.fR.prototype={
i:function(a){return"RuntimeError: "+H.h(this.a)}}
H.hZ.prototype={
i:function(a){return"Assertion failed: "+P.cN(this.a)}}
H.ax.prototype={
gk:function(a){return this.a},
gO:function(a){return new H.cS(this,[H.u(this,0)])},
bO:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.bu(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.bu(t,b)}else return s.ey(b)},
ey:function(a){var u=this.d
if(u==null)return!1
return this.b2(this.aM(u,J.cz(a)&0x3ffffff),a)>=0},
m:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.au(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.au(r,b)
s=t==null?null:t.b
return s}else return q.ez(b)},
ez:function(a){var u,t,s=this.d
if(s==null)return
u=this.aM(s,J.cz(a)&0x3ffffff)
t=this.b2(u,a)
if(t<0)return
return u[t].b},
H:function(a,b,c){var u,t,s,r,q,p,o=this
H.B(b,H.u(o,0))
H.B(c,H.u(o,1))
if(typeof b==="string"){u=o.b
o.bm(u==null?o.b=o.aR():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.bm(t==null?o.c=o.aR():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.aR()
r=J.cz(b)&0x3ffffff
q=o.aM(s,r)
if(q==null)o.aW(s,r,[o.aS(b,c)])
else{p=o.b2(q,b)
if(p>=0)q[p].b=c
else q.push(o.aS(b,c))}}},
E:function(a,b){var u,t,s=this
H.j(b,{func:1,ret:-1,args:[H.u(s,0),H.u(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.f(P.b0(s))
u=u.c}},
bm:function(a,b,c){var u,t=this
H.B(b,H.u(t,0))
H.B(c,H.u(t,1))
u=t.au(a,b)
if(u==null)t.aW(a,b,t.aS(b,c))
else u.b=c},
d6:function(){this.r=this.r+1&67108863},
aS:function(a,b){var u,t=this,s=new H.fd(H.B(a,H.u(t,0)),H.B(b,H.u(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.d6()
return s},
b2:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.T(a[t].a,b))return t
return-1},
i:function(a){return P.jO(this)},
au:function(a,b){return a[b]},
aM:function(a,b){return a[b]},
aW:function(a,b,c){a[b]=c},
cU:function(a,b){delete a[b]},
bu:function(a,b){return this.au(a,b)!=null},
aR:function(){var u="<non-identifier-key>",t=Object.create(null)
this.aW(t,u,t)
this.cU(t,u)
return t}}
H.fd.prototype={}
H.cS.prototype={
gk:function(a){return this.a.a},
gG:function(a){var u=this.a,t=new H.fe(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fe.prototype={
gA:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.b0(t))
else{t=u.c
if(t==null){u.sbl(null)
return!1}else{u.sbl(t.a)
u.c=u.c.c
return!0}}},
sbl:function(a){this.d=H.B(a,H.u(this,0))},
$iav:1}
H.iQ.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.iR.prototype={
$2:function(a,b){return this.a(a,b)},
$S:28}
H.iS.prototype={
$1:function(a){return this.a(H.z(a))},
$S:29}
H.f8.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ijT:1}
H.c2.prototype={}
H.cW.prototype={
gk:function(a){return a.length},
$iA:1,
$aA:function(){}}
H.c1.prototype={
m:function(a,b){H.bc(b,a,a.length)
return a[b]},
$abm:function(){return[P.w]},
$at:function(){return[P.w]},
$ii:1,
$ai:function(){return[P.w]},
$ib:1,
$ab:function(){return[P.w]}}
H.cX.prototype={
$abm:function(){return[P.y]},
$at:function(){return[P.y]},
$ii:1,
$ai:function(){return[P.y]},
$ib:1,
$ab:function(){return[P.y]}}
H.ft.prototype={
m:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.fu.prototype={
m:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.fv.prototype={
m:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.fw.prototype={
m:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.fx.prototype={
m:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.cY.prototype={
gk:function(a){return a.length},
m:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.fy.prototype={
gk:function(a){return a.length},
m:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.ck.prototype={}
H.cl.prototype={}
H.cm.prototype={}
H.cn.prototype={}
P.i0.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:14}
P.i_.prototype={
$1:function(a){var u,t
this.a.a=H.j(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:27}
P.i1.prototype={
$0:function(){this.a.$0()},
$S:0}
P.i2.prototype={
$0:function(){this.a.$0()},
$S:0}
P.e_.prototype={
cI:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bB(new P.iD(this,b),0),a)
else throw H.f(P.ae("`setTimeout()` not found."))},
cJ:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bB(new P.iC(this,a,Date.now(),b),0),a)
else throw H.f(P.ae("Periodic timer."))},
$iaG:1}
P.iD.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:1}
P.iC.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.cz(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.aL.prototype={
eD:function(a){if(this.c!==6)return!0
return this.b.b.b9(H.j(this.d,{func:1,ret:P.L,args:[P.F]}),a.a,P.L,P.F)},
ex:function(a){var u=this.e,t=P.F,s={futureOr:1,type:H.u(this,1)},r=this.b.b
if(H.ef(u,{func:1,args:[P.F,P.a5]}))return H.jn(r.eZ(u,a.a,a.b,null,t,P.a5),s)
else return H.jn(r.b9(H.j(u,{func:1,args:[P.F]}),a.a,null,t),s)}}
P.ah.prototype={
c9:function(a,b,c){var u,t,s,r=H.u(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.O
if(u!==C.d){u.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.lO(b,u)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.ah($.O,[c])
s=b==null?1:3
this.bn(new P.aL(t,s,a,b,[r,c]))
return t},
f1:function(a,b){return this.c9(a,null,b)},
bn:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.n(t.c,"$iaL")
t.c=a}else{if(s===2){u=H.n(t.c,"$iah")
s=u.a
if(s<4){u.bn(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.iJ(null,null,s,H.j(new P.ia(t,a),{func:1,ret:-1}))}},
bC:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.n(p.c,"$iaL")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.n(p.c,"$iah")
u=q.a
if(u<4){q.bC(a)
return}p.a=u
p.c=q.c}o.a=p.av(a)
u=p.b
u.toString
P.iJ(null,null,u,H.j(new P.ie(o,p),{func:1,ret:-1}))}},
aV:function(){var u=H.n(this.c,"$iaL")
this.c=null
return this.av(u)},
av:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
br:function(a){var u,t,s=this,r=H.u(s,0)
H.jn(a,{futureOr:1,type:r})
u=s.$ti
if(H.jk(a,"$ibW",u,"$abW"))if(H.jk(a,"$iah",u,null))P.kg(a,s)
else P.lE(a,s)
else{t=s.aV()
H.B(a,r)
s.a=4
s.c=a
P.cj(s,t)}},
bs:function(a,b){var u,t=this
H.n(b,"$ia5")
u=t.aV()
t.a=8
t.c=new P.a_(a,b)
P.cj(t,u)},
$ibW:1}
P.ia.prototype={
$0:function(){P.cj(this.a,this.b)},
$S:0}
P.ie.prototype={
$0:function(){P.cj(this.b,this.a.a)},
$S:0}
P.ib.prototype={
$1:function(a){var u=this.a
u.a=0
u.br(a)},
$S:14}
P.ic.prototype={
$2:function(a,b){H.n(b,"$ia5")
this.a.bs(a,b)},
$1:function(a){return this.$2(a,null)},
$S:31}
P.id.prototype={
$0:function(){this.a.bs(this.b,this.c)},
$S:0}
P.ii.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.c6(H.j(s.d,{func:1}),null)}catch(r){u=H.aa(r)
t=H.bC(r)
if(o.d){s=H.n(o.a.a.c,"$ia_").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.n(o.a.a.c,"$ia_")
else q.b=new P.a_(u,t)
q.a=!0
return}if(!!J.Q(n).$ibW){if(n instanceof P.ah&&n.a>=4){if(n.a===8){s=o.b
s.b=H.n(n.c,"$ia_")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.f1(new P.ij(p),null)
s.a=!1}},
$S:1}
P.ij.prototype={
$1:function(a){return this.a},
$S:22}
P.ih.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.u(s,0)
q=H.B(n.c,r)
p=H.u(s,1)
n.a.b=s.b.b.b9(H.j(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aa(o)
t=H.bC(o)
s=n.a
s.b=new P.a_(u,t)
s.a=!0}},
$S:1}
P.ig.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.n(m.a.a.c,"$ia_")
r=m.c
if(H.C(r.eD(u))&&r.e!=null){q=m.b
q.b=r.ex(u)
q.a=!1}}catch(p){t=H.aa(p)
s=H.bC(p)
r=H.n(m.a.a.c,"$ia_")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a_(t,s)
n.a=!0}},
$S:1}
P.dk.prototype={}
P.h7.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.ah($.O,[P.y])
r.a=0
u=H.u(s,0)
t=H.j(new P.h9(r,s),{func:1,ret:-1,args:[u]})
H.j(new P.ha(r,q),{func:1,ret:-1})
W.X(s.a,s.b,t,!1,u)
return q}}
P.h9.prototype={
$1:function(a){H.B(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.E,args:[H.u(this.b,0)]}}}
P.ha.prototype={
$0:function(){this.b.br(this.a.a)},
$S:0}
P.c9.prototype={}
P.h8.prototype={}
P.aG.prototype={}
P.a_.prototype={
i:function(a){return H.h(this.a)},
$ib2:1}
P.iG.prototype={$imW:1}
P.iI.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.d_():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.i(0)
throw u},
$S:0}
P.ip.prototype={
f_:function(a){var u,t,s,r=null
H.j(a,{func:1,ret:-1})
try{if(C.d===$.O){a.$0()
return}P.km(r,r,this,a,-1)}catch(s){u=H.aa(s)
t=H.bC(s)
P.iH(r,r,this,u,H.n(t,"$ia5"))}},
f0:function(a,b,c){var u,t,s,r=null
H.j(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.d===$.O){a.$1(b)
return}P.kn(r,r,this,a,b,-1,c)}catch(s){u=H.aa(s)
t=H.bC(s)
P.iH(r,r,this,u,H.n(t,"$ia5"))}},
eh:function(a,b){return new P.ir(this,H.j(a,{func:1,ret:b}),b)},
aZ:function(a){return new P.iq(this,H.j(a,{func:1,ret:-1}))},
bL:function(a,b){return new P.is(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
c6:function(a,b){H.j(a,{func:1,ret:b})
if($.O===C.d)return a.$0()
return P.km(null,null,this,a,b)},
b9:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.O===C.d)return a.$1(b)
return P.kn(null,null,this,a,b,c,d)},
eZ:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.O===C.d)return a.$2(b,c)
return P.lP(null,null,this,a,b,c,d,e,f)}}
P.ir.prototype={
$0:function(){return this.a.c6(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iq.prototype={
$0:function(){return this.a.f_(this.b)},
$S:1}
P.is.prototype={
$1:function(a){var u=this.c
return this.a.f0(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.im.prototype={
gG:function(a){var u=this,t=new P.dB(u,u.r,u.$ti)
t.c=u.e
return t},
gk:function(a){return this.a},
L:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.n(u[b],"$iby")!=null}else{t=this.cQ(b)
return t}},
cQ:function(a){var u=this.d
if(u==null)return!1
return this.aL(this.bx(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.B(b,H.u(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.bo(u==null?s.b=P.jd():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.bo(t==null?s.c=P.jd():t,b)}else return s.cL(0,b)},
cL:function(a,b){var u,t,s,r=this
H.B(b,H.u(r,0))
u=r.d
if(u==null)u=r.d=P.jd()
t=r.bt(b)
s=u[t]
if(s==null)u[t]=[r.aI(b)]
else{if(r.aL(s,b)>=0)return!1
s.push(r.aI(b))}return!0},
I:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.dP(this.c,b)
else return this.dO(0,b)},
dO:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.bx(r,b)
t=s.aL(u,b)
if(t<0)return!1
s.bF(u.splice(t,1)[0])
return!0},
bo:function(a,b){H.B(b,H.u(this,0))
if(H.n(a[b],"$iby")!=null)return!1
a[b]=this.aI(b)
return!0},
dP:function(a,b){var u
if(a==null)return!1
u=H.n(a[b],"$iby")
if(u==null)return!1
this.bF(u)
delete a[b]
return!0},
bq:function(){this.r=1073741823&this.r+1},
aI:function(a){var u,t=this,s=new P.by(H.B(a,H.u(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.bq()
return s},
bF:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.bq()},
bt:function(a){return J.cz(a)&1073741823},
bx:function(a,b){return a[this.bt(b)]},
aL:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.T(a[t].a,b))return t
return-1}}
P.by.prototype={}
P.dB.prototype={
gA:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.b0(t))
else{t=u.c
if(t==null){u.sbp(null)
return!1}else{u.sbp(H.B(t.a,H.u(u,0)))
u.c=u.c.b
return!0}}},
sbp:function(a){this.d=H.B(a,H.u(this,0))},
$iav:1}
P.ff.prototype={$ii:1,$ib:1}
P.t.prototype={
gG:function(a){return new H.bY(a,this.gk(a),[H.cw(this,a,"t",0)])},
t:function(a,b){return this.m(a,b)},
f3:function(a,b){var u,t=this,s=H.c([],[H.cw(t,a,"t",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.H(s,u,t.m(a,u))
return s},
f2:function(a){return this.f3(a,!0)},
i:function(a){return P.j3(a,"[","]")}}
P.fh.prototype={}
P.fi.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.h(a)
t.a=u+": "
t.a+=H.h(b)},
$S:11}
P.V.prototype={
E:function(a,b){var u,t,s=this
H.j(b,{func:1,ret:-1,args:[H.cw(s,a,"V",0),H.cw(s,a,"V",1)]})
for(u=J.bi(s.gO(a));u.p();){t=u.gA(u)
b.$2(t,s.m(a,t))}},
gk:function(a){return J.bj(this.gO(a))},
i:function(a){return P.jO(a)},
$iG:1}
P.iu.prototype={
X:function(a,b){var u
for(u=J.bi(H.r(b,"$ii",this.$ti,"$ai"));u.p();)this.h(0,u.gA(u))},
i:function(a){return P.j3(this,"{","}")},
t:function(a,b){var u,t,s,r=this
P.jZ(b,"index")
for(u=P.lH(r,r.r,H.u(r,0)),t=0;u.p();){s=u.d
if(b===t)return s;++t}throw H.f(P.M(b,r,"index",null,t))},
$ii:1,
$ik1:1}
P.dC.prototype={}
P.bQ.prototype={}
P.bR.prototype={}
P.eJ.prototype={
$abQ:function(){return[P.e,[P.b,P.y]]}}
P.f0.prototype={
i:function(a){return this.a}}
P.f_.prototype={
cR:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.k(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.bv("")
if(r>b)q.a+=C.c.ar(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.l_(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abR:function(){return[P.e,P.e]}}
P.hJ.prototype={}
P.hK.prototype={
ek:function(a){var u,t,s=P.k_(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iE(u)
if(t.d0(a,0,s)!==s)t.bG(C.c.b1(a,s-1),0)
return new Uint8Array(u.subarray(0,H.lK(0,t.b,u.length)))},
$abR:function(){return[P.e,[P.b,P.y]]}}
P.iE.prototype={
bG:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.k(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.k(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.k(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.k(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.k(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.k(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.k(s,r)
s[r]=128|a&63
return!1}},
d0:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.c.b1(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.c.a8(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.bG(r,C.c.a8(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.k(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.k(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.k(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.k(u,q)
u[q]=128|r&63}}return s}}
P.L.prototype={}
P.b1.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.b1&&this.a===b.a&&!0},
gC:function(a){var u=this.a
return(u^C.e.aw(u,30))&1073741823},
i:function(a){var u=this,t=P.l6(H.lp(u)),s=P.cJ(H.ln(u)),r=P.cJ(H.lj(u)),q=P.cJ(H.lk(u)),p=P.cJ(H.lm(u)),o=P.cJ(H.lo(u)),n=P.l7(H.ll(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.w.prototype={}
P.aN.prototype={
q:function(a,b){return new P.aN(C.e.q(this.a,b.gf9()))},
n:function(a,b){if(b==null)return!1
return b instanceof P.aN&&this.a===b.a},
gC:function(a){return C.e.gC(this.a)},
i:function(a){var u,t,s,r=new P.eG(),q=this.a
if(q<0)return"-"+new P.aN(0-q).i(0)
u=r.$1(C.e.ad(q,6e7)%60)
t=r.$1(C.e.ad(q,1e6)%60)
s=new P.eF().$1(q%1e6)
return""+C.e.ad(q,36e8)+":"+H.h(u)+":"+H.h(t)+"."+H.h(s)}}
P.eF.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:12}
P.eG.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:12}
P.b2.prototype={}
P.ei.prototype={
i:function(a){return"Assertion failed"}}
P.d_.prototype={
i:function(a){return"Throw of null."}}
P.ap.prototype={
gaK:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaJ:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gaK()+o+u
if(!q.a)return t
s=q.gaJ()
r=P.cN(q.b)
return t+s+": "+r}}
P.bt.prototype={
gaK:function(){return"RangeError"},
gaJ:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.h(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.h(s)
else if(t>s)u=": Not in range "+H.h(s)+".."+H.h(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.h(s)}return u}}
P.f1.prototype={
gaK:function(){return"RangeError"},
gaJ:function(){var u,t=H.Z(this.b)
if(typeof t!=="number")return t.cn()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.h(u)},
gk:function(a){return this.f}}
P.hH.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hF.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c8.prototype={
i:function(a){return"Bad state: "+this.a}}
P.es.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.cN(u)+"."}}
P.fF.prototype={
i:function(a){return"Out of Memory"},
$ib2:1}
P.d8.prototype={
i:function(a){return"Stack Overflow"},
$ib2:1}
P.ex.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dt.prototype={
i:function(a){return"Exception: "+this.a}}
P.eV.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.c.ar(s,0,75)+"...":s
return t+"\n"+r}}
P.b3.prototype={}
P.y.prototype={}
P.i.prototype={
aD:function(a,b){var u=H.cv(this,"i",0)
return new H.cg(this,H.j(b,{func:1,ret:P.L,args:[u]}),[u])},
gk:function(a){var u,t=this.gG(this)
for(u=0;t.p();)++u
return u},
ga5:function(a){var u,t=this.gG(this)
if(!t.p())throw H.f(H.f4())
u=t.gA(t)
if(t.p())throw H.f(H.ld())
return u},
t:function(a,b){var u,t,s
P.jZ(b,"index")
for(u=this.gG(this),t=0;u.p();){s=u.gA(u)
if(b===t)return s;++t}throw H.f(P.M(b,this,"index",null,t))},
i:function(a){return P.lc(this,"(",")")}}
P.av.prototype={}
P.b.prototype={$ii:1}
P.G.prototype={}
P.E.prototype={
gC:function(a){return P.F.prototype.gC.call(this,this)},
i:function(a){return"null"}}
P.Y.prototype={}
P.F.prototype={constructor:P.F,$iF:1,
n:function(a,b){return this===b},
gC:function(a){return H.c4(this)},
i:function(a){return"Instance of '"+H.bs(this)+"'"},
toString:function(){return this.i(this)}}
P.a5.prototype={}
P.e.prototype={$ijT:1}
P.bv.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.p.prototype={}
W.eg.prototype={
gk:function(a){return a.length}}
W.cA.prototype={
i:function(a){return String(a)},
$icA:1}
W.eh.prototype={
i:function(a){return String(a)}}
W.bM.prototype={$ibM:1}
W.cC.prototype={}
W.aV.prototype={$iaV:1}
W.bl.prototype={
cl:function(a,b,c){var u=a.getContext(b,P.lW(c))
return u},
$ibl:1}
W.aW.prototype={
gk:function(a){return a.length}}
W.bS.prototype={$ibS:1}
W.et.prototype={
gk:function(a){return a.length}}
W.K.prototype={$iK:1}
W.bT.prototype={
gk:function(a){return a.length}}
W.eu.prototype={}
W.ar.prototype={}
W.as.prototype={}
W.ev.prototype={
gk:function(a){return a.length}}
W.ew.prototype={
gk:function(a){return a.length}}
W.ez.prototype={
gk:function(a){return a.length}}
W.ab.prototype={$iab:1}
W.eC.prototype={
i:function(a){return String(a)}}
W.cK.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[[P.ad,P.Y]]},
$at:function(){return[[P.ad,P.Y]]},
$ii:1,
$ai:function(){return[[P.ad,P.Y]]},
$ib:1,
$ab:function(){return[[P.ad,P.Y]]},
$av:function(){return[[P.ad,P.Y]]}}
W.cL.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gah(a))+" x "+H.h(this.gaf(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
if(!u.$iad)return!1
return a.left===u.gbS(b)&&a.top===u.gcd(b)&&this.gah(a)===u.gah(b)&&this.gaf(a)===u.gaf(b)},
gC:function(a){return W.ki(C.b.gC(a.left),C.b.gC(a.top),C.b.gC(this.gah(a)),C.b.gC(this.gaf(a)))},
gaf:function(a){return a.height},
gbS:function(a){return a.left},
gcd:function(a){return a.top},
gah:function(a){return a.width},
$iad:1,
$aad:function(){return[P.Y]}}
W.eD.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[P.e]},
$at:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$av:function(){return[P.e]}}
W.eE.prototype={
gk:function(a){return a.length}}
W.i4.prototype={
gk:function(a){return this.b.length},
m:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.k(u,b)
return H.n(u[b],"$iI")},
h:function(a,b){this.a.appendChild(b)
return b},
gG:function(a){var u=this.f2(this)
return new J.aj(u,u.length,[H.u(u,0)])},
$at:function(){return[W.I]},
$ai:function(){return[W.I]},
$ab:function(){return[W.I]}}
W.I.prototype={
geg:function(a){return new W.i6(a)},
gbM:function(a){return new W.i4(a,a.children)},
i:function(a){return a.localName},
R:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.jJ
if(u==null){u=H.c([],[W.a8])
t=new W.cZ(u)
C.a.h(u,W.kh(null))
C.a.h(u,W.kj())
$.jJ=t
d=t}else d=u
u=$.jI
if(u==null){u=new W.e4(d)
$.jI=u
c=u}else{u.a=d
c=u}}if($.aO==null){u=document
t=u.implementation.createHTMLDocument("")
$.aO=t
$.j2=t.createRange()
t=$.aO.createElement("base")
H.n(t,"$ibM")
t.href=u.baseURI
$.aO.head.appendChild(t)}u=$.aO
if(u.body==null){t=u.createElement("body")
u.body=H.n(t,"$iaV")}u=$.aO
if(!!this.$iaV)s=u.body
else{s=u.createElement(a.tagName)
$.aO.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.L(C.K,a.tagName)){$.j2.selectNodeContents(s)
r=$.j2.createContextualFragment(b)}else{s.innerHTML=b
r=$.aO.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.aO.body
if(s==null?u!=null:s!==u)J.jA(s)
c.ba(r)
document.adoptNode(r)
return r},
el:function(a,b,c){return this.R(a,b,c,null)},
cq:function(a,b){a.textContent=null
a.appendChild(this.R(a,b,null,null))},
$iI:1,
gc7:function(a){return a.tagName}}
W.eI.prototype={
$1:function(a){return!!J.Q(H.n(a,"$ix")).$iI},
$S:13}
W.l.prototype={$il:1}
W.d.prototype={
eb:function(a,b,c,d){H.j(c,{func:1,args:[W.l]})
if(c!=null)this.cM(a,b,c,!1)},
cM:function(a,b,c,d){return a.addEventListener(b,H.bB(H.j(c,{func:1,args:[W.l]}),1),!1)},
$id:1}
W.at.prototype={$iat:1}
W.eP.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.at]},
$at:function(){return[W.at]},
$ii:1,
$ai:function(){return[W.at]},
$ib:1,
$ab:function(){return[W.at]},
$av:function(){return[W.at]}}
W.eQ.prototype={
gk:function(a){return a.length}}
W.eU.prototype={
gk:function(a){return a.length}}
W.au.prototype={$iau:1}
W.eZ.prototype={
gk:function(a){return a.length}}
W.bn.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.x]},
$at:function(){return[W.x]},
$ii:1,
$ai:function(){return[W.x]},
$ib:1,
$ab:function(){return[W.x]},
$ibn:1,
$av:function(){return[W.x]}}
W.ay.prototype={$iay:1}
W.cU.prototype={
i:function(a){return String(a)},
$icU:1}
W.fm.prototype={
gk:function(a){return a.length}}
W.fn.prototype={
m:function(a,b){return P.aT(a.get(H.z(b)))},
E:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aT(t.value[1]))}},
gO:function(a){var u=H.c([],[P.e])
this.E(a,new W.fo(u))
return u},
gk:function(a){return a.size},
$aV:function(){return[P.e,null]},
$iG:1,
$aG:function(){return[P.e,null]}}
W.fo.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.fp.prototype={
m:function(a,b){return P.aT(a.get(H.z(b)))},
E:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aT(t.value[1]))}},
gO:function(a){var u=H.c([],[P.e])
this.E(a,new W.fq(u))
return u},
gk:function(a){return a.size},
$aV:function(){return[P.e,null]},
$iG:1,
$aG:function(){return[P.e,null]}}
W.fq.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.az.prototype={$iaz:1}
W.fr.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.az]},
$at:function(){return[W.az]},
$ii:1,
$ai:function(){return[W.az]},
$ib:1,
$ab:function(){return[W.az]},
$av:function(){return[W.az]}}
W.W.prototype={$iW:1}
W.a0.prototype={
ga5:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.f(P.k2("No elements"))
if(t>1)throw H.f(P.k2("More than one element"))
return u.firstChild},
X:function(a,b){var u,t,s,r
H.r(b,"$ii",[W.x],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gG:function(a){var u=this.a.childNodes
return new W.cO(u,u.length,[H.cw(C.M,u,"v",0)])},
gk:function(a){return this.a.childNodes.length},
m:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
$at:function(){return[W.x]},
$ai:function(){return[W.x]},
$ab:function(){return[W.x]}}
W.x.prototype={
eV:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i:function(a){var u=a.nodeValue
return u==null?this.cs(a):u},
ee:function(a,b){return a.appendChild(b)},
$ix:1}
W.c3.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.x]},
$at:function(){return[W.x]},
$ii:1,
$ai:function(){return[W.x]},
$ib:1,
$ab:function(){return[W.x]},
$av:function(){return[W.x]}}
W.aA.prototype={$iaA:1,
gk:function(a){return a.length}}
W.fI.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aA]},
$at:function(){return[W.aA]},
$ii:1,
$ai:function(){return[W.aA]},
$ib:1,
$ab:function(){return[W.aA]},
$av:function(){return[W.aA]}}
W.fP.prototype={
m:function(a,b){return P.aT(a.get(H.z(b)))},
E:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aT(t.value[1]))}},
gO:function(a){var u=H.c([],[P.e])
this.E(a,new W.fQ(u))
return u},
gk:function(a){return a.size},
$aV:function(){return[P.e,null]},
$iG:1,
$aG:function(){return[P.e,null]}}
W.fQ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.fS.prototype={
gk:function(a){return a.length}}
W.aC.prototype={$iaC:1}
W.h1.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aC]},
$at:function(){return[W.aC]},
$ii:1,
$ai:function(){return[W.aC]},
$ib:1,
$ab:function(){return[W.aC]},
$av:function(){return[W.aC]}}
W.aD.prototype={$iaD:1}
W.h2.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aD]},
$at:function(){return[W.aD]},
$ii:1,
$ai:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$av:function(){return[W.aD]}}
W.aE.prototype={$iaE:1,
gk:function(a){return a.length}}
W.h5.prototype={
m:function(a,b){return a.getItem(H.z(b))},
E:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gO:function(a){var u=H.c([],[P.e])
this.E(a,new W.h6(u))
return u},
gk:function(a){return a.length},
$aV:function(){return[P.e,P.e]},
$iG:1,
$aG:function(){return[P.e,P.e]}}
W.h6.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:26}
W.ak.prototype={$iak:1}
W.bw.prototype={}
W.d9.prototype={
R:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
u=W.l8("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a0(t).X(0,new W.a0(u))
return t}}
W.hc.prototype={
R:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.r.R(u.createElement("table"),b,c,d)
u.toString
u=new W.a0(u)
s=u.ga5(u)
s.toString
u=new W.a0(s)
r=u.ga5(u)
t.toString
r.toString
new W.a0(t).X(0,new W.a0(r))
return t}}
W.hd.prototype={
R:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.r.R(u.createElement("table"),b,c,d)
u.toString
u=new W.a0(u)
s=u.ga5(u)
t.toString
s.toString
new W.a0(t).X(0,new W.a0(s))
return t}}
W.ca.prototype={$ica:1}
W.aF.prototype={$iaF:1}
W.al.prototype={$ial:1}
W.hf.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.al]},
$at:function(){return[W.al]},
$ii:1,
$ai:function(){return[W.al]},
$ib:1,
$ab:function(){return[W.al]},
$av:function(){return[W.al]}}
W.hg.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aF]},
$at:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$av:function(){return[W.aF]}}
W.hi.prototype={
gk:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.am.prototype={$iam:1}
W.hm.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aH]},
$at:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$av:function(){return[W.aH]}}
W.hn.prototype={
gk:function(a){return a.length}}
W.b9.prototype={}
W.hI.prototype={
i:function(a){return String(a)}}
W.hW.prototype={
gk:function(a){return a.length}}
W.aK.prototype={
geo:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.ae("deltaY is not supported"))},
gen:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.ae("deltaX is not supported"))},
$iaK:1}
W.ch.prototype={
dU:function(a,b){return a.requestAnimationFrame(H.bB(H.j(b,{func:1,ret:-1,args:[P.Y]}),1))},
cV:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ci.prototype={$ici:1}
W.i5.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.K]},
$at:function(){return[W.K]},
$ii:1,
$ai:function(){return[W.K]},
$ib:1,
$ab:function(){return[W.K]},
$av:function(){return[W.K]}}
W.dn.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
if(!u.$iad)return!1
return a.left===u.gbS(b)&&a.top===u.gcd(b)&&a.width===u.gah(b)&&a.height===u.gaf(b)},
gC:function(a){return W.ki(C.b.gC(a.left),C.b.gC(a.top),C.b.gC(a.width),C.b.gC(a.height))},
gaf:function(a){return a.height},
gah:function(a){return a.width}}
W.ik.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.au]},
$at:function(){return[W.au]},
$ii:1,
$ai:function(){return[W.au]},
$ib:1,
$ab:function(){return[W.au]},
$av:function(){return[W.au]}}
W.dH.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.x]},
$at:function(){return[W.x]},
$ii:1,
$ai:function(){return[W.x]},
$ib:1,
$ab:function(){return[W.x]},
$av:function(){return[W.x]}}
W.ix.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aE]},
$at:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$av:function(){return[W.aE]}}
W.iy.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.ak]},
$at:function(){return[W.ak]},
$ii:1,
$ai:function(){return[W.ak]},
$ib:1,
$ab:function(){return[W.ak]},
$av:function(){return[W.ak]}}
W.i3.prototype={
E:function(a,b){var u,t,s,r,q
H.j(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.gO(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.J)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gO:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.e])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.k(r,t)
s=H.n(r[t],"$ici")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aV:function(){return[P.e,P.e]},
$aG:function(){return[P.e,P.e]}}
W.i6.prototype={
m:function(a,b){return this.a.getAttribute(H.z(b))},
gk:function(a){return this.gO(this).length}}
W.i7.prototype={}
W.jc.prototype={}
W.i8.prototype={}
W.i9.prototype={
$1:function(a){return this.a.$1(H.n(a,"$il"))},
$S:23}
W.bb.prototype={
cE:function(a){var u
if($.dw.a===0){for(u=0;u<262;++u)$.dw.H(0,C.J[u],W.m4())
for(u=0;u<12;++u)$.dw.H(0,C.k[u],W.m5())}},
ae:function(a){return $.kT().L(0,W.bU(a))},
Y:function(a,b,c){var u=$.dw.m(0,H.h(W.bU(a))+"::"+b)
if(u==null)u=$.dw.m(0,"*::"+b)
if(u==null)return!1
return H.jj(u.$4(a,b,c,this))},
$ia8:1}
W.v.prototype={
gG:function(a){return new W.cO(a,this.gk(a),[H.cw(this,a,"v",0)])}}
W.cZ.prototype={
ae:function(a){return C.a.bK(this.a,new W.fA(a))},
Y:function(a,b,c){return C.a.bK(this.a,new W.fz(a,b,c))},
$ia8:1}
W.fA.prototype={
$1:function(a){return H.n(a,"$ia8").ae(this.a)},
$S:16}
W.fz.prototype={
$1:function(a){return H.n(a,"$ia8").Y(this.a,this.b,this.c)},
$S:16}
W.dP.prototype={
cH:function(a,b,c,d){var u,t,s
this.a.X(0,c)
u=b.aD(0,new W.iv())
t=b.aD(0,new W.iw())
this.b.X(0,u)
s=this.c
s.X(0,C.L)
s.X(0,t)},
ae:function(a){return this.a.L(0,W.bU(a))},
Y:function(a,b,c){var u=this,t=W.bU(a),s=u.c
if(s.L(0,H.h(t)+"::"+b))return u.d.ed(c)
else if(s.L(0,"*::"+b))return u.d.ed(c)
else{s=u.b
if(s.L(0,H.h(t)+"::"+b))return!0
else if(s.L(0,"*::"+b))return!0
else if(s.L(0,H.h(t)+"::*"))return!0
else if(s.L(0,"*::*"))return!0}return!1},
$ia8:1}
W.iv.prototype={
$1:function(a){return!C.a.L(C.k,H.z(a))},
$S:17}
W.iw.prototype={
$1:function(a){return C.a.L(C.k,H.z(a))},
$S:17}
W.iA.prototype={
Y:function(a,b,c){if(this.cw(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.L(0,b)
return!1}}
W.iB.prototype={
$1:function(a){return"TEMPLATE::"+H.h(H.z(a))},
$S:24}
W.iz.prototype={
ae:function(a){var u=J.Q(a)
if(!!u.$ic5)return!1
u=!!u.$im
if(u&&W.bU(a)==="foreignObject")return!1
if(u)return!0
return!1},
Y:function(a,b,c){if(b==="is"||C.c.aF(b,"on"))return!1
return this.ae(a)},
$ia8:1}
W.cO.prototype={
p:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sby(J.kW(u.a,t))
u.c=t
return!0}u.sby(null)
u.c=s
return!1},
gA:function(a){return this.d},
sby:function(a){this.d=H.B(a,H.u(this,0))},
$iav:1}
W.a8.prototype={}
W.it.prototype={$imJ:1}
W.e4.prototype={
ba:function(a){new W.iF(this).$2(a,null)},
al:function(a,b){if(b==null)J.jA(a)
else b.removeChild(a)},
dW:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.kZ(a)
n=o.a.getAttribute("is")
H.n(a,"$iI")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.C(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.aa(r)}t="element unprintable"
try{t=J.ao(a)}catch(r){H.aa(r)}try{s=W.bU(a)
this.dV(H.n(a,"$iI"),b,p,t,s,H.n(o,"$iG"),H.z(n))}catch(r){if(H.aa(r) instanceof P.ap)throw r
else{this.al(a,b)
window
q="Removing corrupted element "+H.h(t)
if(typeof console!="undefined")window.console.warn(q)}}},
dV:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.al(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.ae(a)){o.al(a,b)
window
u="Removing disallowed element <"+H.h(e)+"> from "+H.h(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.Y(a,"is",g)){o.al(a,b)
window
u="Removing disallowed type extension <"+H.h(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gO(f)
t=H.c(u.slice(0),[H.u(u,0)])
for(s=f.gO(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.k(t,s)
r=t[s]
q=o.a
p=J.l0(r)
H.z(r)
if(!q.Y(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.h(e)+" "+r+'="'+H.h(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.Q(a).$ica)o.ba(a.content)},
$imv:1}
W.iF.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.dW(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.al(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aa(s)
r=H.n(u,"$ix")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.n(t,"$ix")}},
$S:25}
W.dm.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.co.prototype={}
W.cp.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dV.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.cq.prototype={}
W.cr.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
P.iK.prototype={
$2:function(a,b){this.a[a]=b},
$S:11}
P.eR.prototype={
gaN:function(){var u=this.b,t=H.cv(u,"t",0),s=W.I
return new H.fj(new H.cg(u,H.j(new P.eS(),{func:1,ret:P.L,args:[t]}),[t]),H.j(new P.eT(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.bj(this.gaN().a)},
m:function(a,b){var u=this.gaN()
return u.b.$1(J.j_(u.a,b))},
gG:function(a){var u=P.jN(this.gaN(),!1,W.I)
return new J.aj(u,u.length,[H.u(u,0)])},
$at:function(){return[W.I]},
$ai:function(){return[W.I]},
$ab:function(){return[W.I]}}
P.eS.prototype={
$1:function(a){return!!J.Q(H.n(a,"$ix")).$iI},
$S:13}
P.eT.prototype={
$1:function(a){return H.bD(H.n(a,"$ix"),"$iI")},
$S:38}
P.io.prototype={}
P.ad.prototype={}
P.aQ.prototype={$iaQ:1}
P.fb.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
t:function(a,b){return this.m(a,b)},
$at:function(){return[P.aQ]},
$ii:1,
$ai:function(){return[P.aQ]},
$ib:1,
$ab:function(){return[P.aQ]},
$av:function(){return[P.aQ]}}
P.aR.prototype={$iaR:1}
P.fD.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
t:function(a,b){return this.m(a,b)},
$at:function(){return[P.aR]},
$ii:1,
$ai:function(){return[P.aR]},
$ib:1,
$ab:function(){return[P.aR]},
$av:function(){return[P.aR]}}
P.fJ.prototype={
gk:function(a){return a.length}}
P.c5.prototype={$ic5:1}
P.hb.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
t:function(a,b){return this.m(a,b)},
$at:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$av:function(){return[P.e]}}
P.m.prototype={
gbM:function(a){return new P.eR(a,new W.a0(a))},
R:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.a8])
C.a.h(p,W.kh(null))
C.a.h(p,W.kj())
C.a.h(p,new W.iz())
c=new W.e4(new W.cZ(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.m).el(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a0(s)
q=p.ga5(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$im:1}
P.aS.prototype={$iaS:1}
P.ho.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
t:function(a,b){return this.m(a,b)},
$at:function(){return[P.aS]},
$ii:1,
$ai:function(){return[P.aS]},
$ib:1,
$ab:function(){return[P.aS]},
$av:function(){return[P.aS]}}
P.dz.prototype={}
P.dA.prototype={}
P.dK.prototype={}
P.dL.prototype={}
P.dW.prototype={}
P.dX.prototype={}
P.e2.prototype={}
P.e3.prototype={}
P.ek.prototype={
gk:function(a){return a.length}}
P.el.prototype={
m:function(a,b){return P.aT(a.get(H.z(b)))},
E:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aT(t.value[1]))}},
gO:function(a){var u=H.c([],[P.e])
this.E(a,new P.em(u))
return u},
gk:function(a){return a.size},
$aV:function(){return[P.e,null]},
$iG:1,
$aG:function(){return[P.e,null]}}
P.em.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
P.en.prototype={
gk:function(a){return a.length}}
P.bk.prototype={}
P.fE.prototype={
gk:function(a){return a.length}}
P.dl.prototype={}
P.cD.prototype={$icD:1}
P.d2.prototype={$id2:1}
P.bu.prototype={
ce:function(a,b,c){return a.uniform1f(b,c)},
cf:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
f6:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibu:1}
P.d6.prototype={$id6:1}
P.de.prototype={$ide:1}
P.h3.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return P.aT(a.item(b))},
t:function(a,b){return this.m(a,b)},
$at:function(){return[[P.G,,,]]},
$ii:1,
$ai:function(){return[[P.G,,,]]},
$ib:1,
$ab:function(){return[[P.G,,,]]},
$av:function(){return[[P.G,,,]]}}
P.dS.prototype={}
P.dT.prototype={}
O.aY.prototype={
bb:function(a,b){var u=this,t={func:1,ret:-1,args:[P.y,[P.i,H.u(u,0)]]}
H.j(a,t)
H.j(b,t)
u.sbA(null)
u.sbz(a)
u.sbB(b)},
dG:function(a){H.r(a,"$ii",this.$ti,"$ai")
return!0},
d7:function(a,b){var u
H.r(b,"$ii",this.$ti,"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gG:function(a){var u=this.a
return new J.aj(u,u.length,[H.u(u,0)])},
t:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
sd5:function(a){this.a=H.r(a,"$ib",this.$ti,"$ab")},
sbA:function(a){this.b=H.j(a,{func:1,ret:P.L,args:[[P.i,H.u(this,0)]]})},
sbz:function(a){this.c=H.j(a,{func:1,ret:-1,args:[P.y,[P.i,H.u(this,0)]]})},
sbB:function(a){H.j(a,{func:1,ret:-1,args:[P.y,[P.i,H.u(this,0)]]})},
$ii:1}
O.bZ.prototype={
gk:function(a){return this.a.length},
gv:function(){var u=this.b
return u==null?this.b=D.aP():u},
a6:function(){var u=this.b
if(u!=null)u.S(null)},
gan:function(a){var u=this.a
if(u.length>0)return C.a.gaA(u)
else return V.jQ()},
c1:function(a){var u=this.a
if(a==null)C.a.h(u,V.jQ())
else C.a.h(u,a)
this.a6()},
b6:function(){var u=this.a
if(u.length>0){u.pop()
this.a6()}},
saP:function(a){this.a=H.r(a,"$ib",[V.b7],"$ab")}}
E.eo.prototype={}
E.a1.prototype={
sbd:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().I(0,s.gbX())
u=s.c
if(u!=null)u.gv().h(0,s.gbX())
t=new D.R("shape",r,s.c,[F.d7])
t.b=!0
s.a2(t)}},
sao:function(a){var u,t,s=this
if(!J.T(s.r,a)){u=s.r
if(u!=null)u.gv().I(0,s.gbV())
if(a!=null)a.gv().h(0,s.gbV())
s.r=a
t=new D.R("mover",u,a,[U.c0])
t.b=!0
s.a2(t)}},
cg:function(a,b){var u,t,s,r,q,p,o,n=this,m=n.r
if(m!=null){u=m.r
t=b.e
if(u<t){m.r=t
u=m.y
if(u!=null)++u.d
m.sci(m.a+m.d*b.y)
m.sc_(0,m.b+m.e*b.y)
m.sc5(m.c+m.f*b.y)
u=m.c
s=Math.cos(u)
r=Math.sin(u)
u=V.b8(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)
t=m.b
s=Math.cos(t)
r=Math.sin(t)
u=u.J(0,V.b8(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1))
t=m.a
s=Math.cos(t)
r=Math.sin(t)
m.x=u.J(0,V.b8(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1))
u=m.y
if(u!=null)u.aC(0)}q=m.x}else q=null
if(!J.T(q,n.x)){p=n.x
n.x=q
o=new D.R("matrix",p,q,[V.b7])
o.b=!0
n.a2(o)}for(m=n.y.a,m=new J.aj(m,m.length,[H.u(m,0)]);m.p();)m.d.cg(0,b)},
ag:function(a){var u,t,s,r,q,p,o,n=this,m="Depth",l="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n",k=a.dx,j=n.x
k.toString
if(j==null)C.a.h(k.a,k.gan(k))
else C.a.h(k.a,j.J(0,k.gan(k)))
k.a6()
a.c2(n.f)
k=a.dy
u=(k&&C.a).gaA(k)
if(u!=null&&n.d!=null){k=u.a
if(k==null){t=a.fr.m(0,m)
if(t==null){k=a.a
t=new A.eB(k,m)
t.cC(k,m)
t.c=l
t.d="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
t.e=t.bw(l,35633)
t.f=t.bw(t.d,35632)
j=k.createProgram()
t.r=j
k.attachShader(j,t.e)
k.attachShader(t.r,t.f)
k.linkProgram(t.r)
if(!H.C(H.jj(k.getProgramParameter(t.r,35714)))){s=k.getProgramInfoLog(t.r)
k.deleteProgram(t.r)
H.a9(P.a2("Failed to link shader: "+H.h(s)))}t.e0()
t.e2()
t.z=t.x.m(0,"posAttr")
t.Q=H.bD(t.y.m(0,"objClr"),"$ice")
t.ch=H.bD(t.y.m(0,"fogClr"),"$ice")
t.cx=H.bD(t.y.m(0,"fogStart"),"$icd")
t.cy=H.bD(t.y.m(0,"fogStop"),"$icd")
t.db=H.bD(t.y.m(0,"viewObjMat"),"$icf")
t.dx=H.bD(t.y.m(0,"projMat"),"$icf")
if(a.fr.bO(0,m))H.a9(P.a2('Shader cache already contains a shader by the name "Depth".'))
a.fr.H(0,m,t)}u.a=t
k=t}j=n.e
if((!(j instanceof Z.cF)?n.e=null:j)==null){k=n.d.ej(new Z.hX(a.a),$.aU())
j=k.er($.aU())
r=u.a
j.e=r.z.c
n.e=k
k=r}j=a.a
j.useProgram(k.r)
k.x.eq()
r=u.b
q=k.Q
q.toString
p=r.a
o=r.b
r=r.c
C.f.cf(q.a,q.d,p,o,r)
r=u.c
o=k.ch
o.toString
p=r.a
q=r.b
r=r.c
C.f.cf(o.a,o.d,p,q,r)
r=u.d
q=k.cx
C.f.ce(q.a,q.d,r)
r=u.e
q=k.cy
C.f.ce(q.a,q.d,r)
r=a.cy
r=r.gan(r)
q=k.dx
q.toString
q.bc(r.ca(0,!0))
r=a.cx
if(r==null){r=a.db
r=r.gan(r)
q=a.dx
q=a.cx=r.J(0,q.gan(q))
r=q}k=k.db
k.toString
k.bc(r.ca(0,!0))
r=n.e
r.aY(a)
r.ag(a)
r.f5(a)
r=u.a
r.toString
j.useProgram(null)
r.x.ep()}for(k=n.y.a,k=new J.aj(k,k.length,[H.u(k,0)]);k.p();)k.d.ag(a)
a.c0()
a.dx.b6()},
a2:function(a){var u=this.z
if(u!=null)u.S(a)},
U:function(){return this.a2(null)},
bY:function(a){H.n(a,"$iD")
this.e=null
this.a2(a)},
eM:function(){return this.bY(null)},
bW:function(a){this.a2(H.n(a,"$iD"))},
eL:function(){return this.bW(null)},
bU:function(a){this.a2(H.n(a,"$iD"))},
eI:function(){return this.bU(null)},
eH:function(a,b){var u,t,s,r,q,p,o
H.r(b,"$ii",[E.a1],"$ai")
for(u=b.length,t=this.gbT(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.J)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bV()
o.saa(null)
o.saj(null)
o.c=null
o.d=0
p.z=o}H.j(t,s)
if(o.a==null)o.saa(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.U()},
eK:function(a,b){var u,t
H.r(b,"$ii",[E.a1],"$ai")
for(u=b.gG(b),t=this.gbT();u.p();)u.gA(u).gv().I(0,t)
this.U()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
scP:function(a,b){this.y=H.r(b,"$iaY",[E.a1],"$aaY")},
$ijR:1}
E.fL.prototype={
cA:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.b1(Date.now(),!1)
s.y=0
s.cx=null
u=new O.bZ()
t=[V.b7]
u.saP(H.c([],t))
u.b=null
u.gv().h(0,new E.fM(s))
s.cy=u
u=new O.bZ()
u.saP(H.c([],t))
u.b=null
u.gv().h(0,new E.fN(s))
s.db=u
u=new O.bZ()
u.saP(H.c([],t))
u.b=null
u.gv().h(0,new E.fO(s))
s.dx=u
s.se6(H.c([],[O.bx]))
u=s.dy;(u&&C.a).h(u,null)
s.se3(new H.ax([P.e,A.c6]))},
c2:function(a){var u=this.dy,t=a==null?(u&&C.a).gaA(u):a;(u&&C.a).h(u,t)},
c0:function(){var u=this.dy
if(u.length>1)u.pop()},
se6:function(a){this.dy=H.r(a,"$ib",[O.bx],"$ab")},
se3:function(a){this.fr=H.r(a,"$iG",[P.e,A.c6],"$aG")}}
E.fM.prototype={
$1:function(a){H.n(a,"$iD")},
$S:6}
E.fN.prototype={
$1:function(a){H.n(a,"$iD")
this.a.cx=null},
$S:6}
E.fO.prototype={
$1:function(a){H.n(a,"$iD")
this.a.cx=null},
$S:6}
E.db.prototype={
bi:function(a){H.n(a,"$iD")
this.c4()},
bh:function(){return this.bi(null)},
gew:function(){var u,t=this,s=Date.now(),r=C.e.ad(P.jH(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.b1(s,!1)
return u/r},
bD:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.J()
if(typeof r!=="number")return H.bh(r)
u=C.b.bR(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.J()
t=C.b.bR(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.k5(C.i,s.geY())}},
c4:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.j(new E.hh(this),{func:1,ret:-1,args:[P.Y]})
C.u.cV(u)
C.u.dU(u,W.kq(t,P.Y))}},
eX:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.bD()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.b1(r,!1)
s.y=P.jH(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.a6()
r=s.db
C.a.sk(r.a,0)
r.a6()
r=s.dx
C.a.sk(r.a,0)
r.a6()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.ag(p.e)}s=p.z
if(s!=null)s.S(null)}catch(q){u=H.aa(q)
t=H.bC(q)
P.ju("Error: "+H.h(u))
P.ju("Stack: "+H.h(t))
throw H.f(u)}}}
E.hh.prototype={
$1:function(a){var u
H.mf(a)
u=this.a
if(u.ch){u.ch=!1
u.eX()}},
$S:30}
Z.dj.prototype={$imp:1}
Z.cE.prototype={
aY:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aa(s)
t=P.a2('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.h(u))
throw H.f(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.h(u.e)+"]"}}
Z.hX.prototype={$imq:1}
Z.cF.prototype={
er:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aY:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aY(a)},
f5:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ag:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.k(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.e],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.ao(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(p,", ")+"\nAttrs:   "+C.a.l(r,", ")},
sd1:function(a){this.b=H.r(a,"$ib",[Z.bX],"$ab")},
$imy:1}
Z.bX.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bs(this.c)+"'")+"]"}}
Z.di.prototype={
gbe:function(a){var u=this.a,t=(u&$.aU().a)!==0?3:0
if((u&$.bI().a)!==0)t+=3
if((u&$.bH().a)!==0)t+=3
if((u&$.bJ().a)!==0)t+=2
if((u&$.bK().a)!==0)t+=3
if((u&$.cx().a)!==0)t+=3
if((u&$.cy().a)!==0)t+=4
if((u&$.bL().a)!==0)++t
return(u&$.bG().a)!==0?t+4:t},
ef:function(a){var u,t=$.aU(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bI()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bH()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bJ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bK()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cx()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cy()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bL()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bG()
if((s&t.a)!==0)if(u===a)return t
return $.kS()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.di))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.e]),t=this.a
if((t&$.aU().a)!==0)C.a.h(u,"Pos")
if((t&$.bI().a)!==0)C.a.h(u,"Norm")
if((t&$.bH().a)!==0)C.a.h(u,"Binm")
if((t&$.bJ().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bK().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cx().a)!==0)C.a.h(u,"Clr3")
if((t&$.cy().a)!==0)C.a.h(u,"Clr4")
if((t&$.bL().a)!==0)C.a.h(u,"Weight")
if((t&$.bG().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.er.prototype={}
D.bV.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.D]}
H.j(b,u)
if(this.a==null)this.saa(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
I:function(a,b){var u,t,s=this
H.j(b,{func:1,ret:-1,args:[D.D]})
u=s.a
u=u==null?null:C.a.L(u,b)
if(u===!0){u=s.a
t=(u&&C.a).I(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.L(u,b)
if(u===!0){u=s.b
t=(u&&C.a).I(u,b)||t}return t},
S:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.D()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.E(P.jN(u,!0,{func:1,ret:-1,args:[D.D]}),new D.eL(q))
u=r.b
if(u!=null){r.saj(H.c([],[{func:1,ret:-1,args:[D.D]}]))
C.a.E(u,new D.eM(q))}return!0},
aC:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.S(u)}}},
saa:function(a){this.a=H.r(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")},
saj:function(a){this.b=H.r(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")}}
D.eL.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.eM.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.D.prototype={}
D.f2.prototype={}
D.f3.prototype={}
D.R.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}
X.cG.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cG))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.cR.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cR))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.fa.prototype={
eR:function(a){this.d.h(0,a.a)
return!1},
eN:function(a){this.d.I(0,a.a)
return!1},
sdN:function(a){this.d=H.r(a,"$ik1",[P.y],"$ak1")}}
X.fg.prototype={
b5:function(a,b){this.r=a.a
return!1},
aq:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.cp()
if(typeof u!=="number")return u.cj()
this.r=(u&~t)>>>0
return!1},
ap:function(a,b){return!1},
eS:function(a){return!1},
dt:function(a,b,c){return}}
X.c_.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.c_))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.C(this.b)?"Alt+":""
return u+(H.C(this.c)?"Shift+":"")}}
X.fs.prototype={
b5:function(a,b){this.f=a.a
return!1},
aq:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.cp()
if(typeof u!=="number")return u.cj()
this.f=(u&~t)>>>0
return!1},
ap:function(a,b){return!1},
eT:function(a,b){return!1}}
X.hl.prototype={
eQ:function(a){H.r(a,"$ib",[V.a4],"$ab")
return!1},
eO:function(a){H.r(a,"$ib",[V.a4],"$ab")
return!1},
eP:function(a){H.r(a,"$ib",[V.a4],"$ab")
return!1}}
X.dh.prototype={
bv:function(a){var u=a.keyCode,t=H.C(a.ctrlKey)||H.C(a.metaKey)
return new X.cR(u,new X.c_(t,a.altKey,a.shiftKey))},
ac:function(a){if(!H.C(a.ctrlKey))H.C(a.metaKey)
a.shiftKey},
aX:function(a){if(!H.C(a.ctrlKey))H.C(a.metaKey)
a.shiftKey},
a0:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.q()
u=t.top
if(typeof r!=="number")return r.q()
return new V.a4(s-q,r-u)},
ak:function(a){return new V.aJ(a.movementX,a.movementY)},
aU:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a4])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s){r=u[s]
q=C.b.V(r.pageX)
C.b.V(r.pageY)
p=o.left
C.b.V(r.pageX)
C.a.h(n,new V.a4(q-p,C.b.V(r.pageY)-o.top))}return n},
a_:function(a){var u=a.buttons,t=H.C(a.ctrlKey)||H.C(a.metaKey)
return new X.cG(u,new X.c_(t,a.altKey,a.shiftKey))},
aQ:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.q()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.q()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
dm:function(a){this.f=!0},
d9:function(a){this.f=!1},
dg:function(a){H.n(a,"$iW")
if(H.C(this.f)&&this.aQ(a))a.preventDefault()},
ds:function(a){var u
H.n(a,"$iay")
if(!H.C(this.f))return
u=this.bv(a)
this.b.eR(u)},
dq:function(a){var u
H.n(a,"$iay")
if(!H.C(this.f))return
u=this.bv(a)
this.b.eN(u)},
dv:function(a){var u,t,s,r,q=this
H.n(a,"$iW")
u=q.a
u.focus()
q.f=!0
q.ac(a)
if(H.C(q.x)){t=q.a_(a)
s=q.ak(a)
if(q.d.b5(t,s))a.preventDefault()
return}if(H.C(q.r)){q.y=a
u.requestPointerLock()
return}t=q.a_(a)
r=q.a0(a)
if(q.c.b5(t,r))a.preventDefault()},
dB:function(a){var u,t,s,r=this
H.n(a,"$iW")
r.ac(a)
u=r.a_(a)
if(H.C(r.x)){t=r.ak(a)
if(r.d.aq(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.a0(a)
if(r.c.aq(u,s))a.preventDefault()},
dk:function(a){var u,t,s,r=this
H.n(a,"$iW")
if(!r.aQ(a)){r.ac(a)
u=r.a_(a)
if(H.C(r.x)){t=r.ak(a)
if(r.d.aq(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.a0(a)
if(r.c.aq(u,s))a.preventDefault()}},
dz:function(a){var u,t,s,r=this
H.n(a,"$iW")
r.ac(a)
u=r.a_(a)
if(H.C(r.x)){t=r.ak(a)
if(r.d.ap(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.a0(a)
if(r.c.ap(u,s))a.preventDefault()},
di:function(a){var u,t,s,r=this
H.n(a,"$iW")
if(!r.aQ(a)){r.ac(a)
u=r.a_(a)
if(H.C(r.x)){t=r.ak(a)
if(r.d.ap(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.a0(a)
if(r.c.ap(u,s))a.preventDefault()}},
dD:function(a){var u,t,s=this
H.n(a,"$iaK")
s.ac(a)
u=new V.aJ((a&&C.t).gen(a),C.t.geo(a)).K(0,180)
if(H.C(s.x)){if(s.d.eS(u))a.preventDefault()
return}if(H.C(s.r))return
t=s.a0(a)
if(s.c.eT(u,t))a.preventDefault()},
dF:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.a_(s.y)
t=s.a0(s.y)
s.d.dt(u,t,r)}},
dM:function(a){var u,t=this
H.n(a,"$iam")
t.a.focus()
t.f=!0
t.aX(a)
u=t.aU(a)
if(t.e.eQ(u))a.preventDefault()},
dI:function(a){var u
H.n(a,"$iam")
this.aX(a)
u=this.aU(a)
if(this.e.eO(u))a.preventDefault()},
dK:function(a){var u
H.n(a,"$iam")
this.aX(a)
u=this.aU(a)
if(this.e.eP(u))a.preventDefault()},
scW:function(a){this.z=H.r(a,"$ib",[[P.c9,P.F]],"$ab")}}
V.aZ.prototype={
q:function(a,b){var u=C.b.q(this.a,b.geU()),t=C.b.q(this.b,b.gcm()),s=C.b.q(this.c,b.gei())
return new V.aZ(V.bf(u),V.bf(t),V.bf(s))},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aZ))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.b_.prototype={
q:function(a,b){var u=this,t=C.b.q(u.a,b.geU()),s=C.b.q(u.b,b.gcm()),r=C.b.q(u.c,b.gei()),q=C.b.q(u.d,b.gfa(b))
return new V.b_(V.bf(t),V.bf(s),V.bf(r),V.bf(q))},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b_))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.H(u.a,3,0)+", "+V.H(u.b,3,0)+", "+V.H(u.c,3,0)+", "+V.H(u.d,3,0)+"]"}}
V.eK.prototype={}
V.b7.prototype={
ca:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.w])
return t},
J:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.b8(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b7))return!1
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
i:function(a){return this.F()},
w:function(a){var u,t,s,r,q,p=this,o=[P.w],n=V.iN(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.iN(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.iN(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.iN(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.k(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.k(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.k(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.k(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.k(n,1)
q=q+n[1]+", "
if(1>=t)return H.k(m,1)
q=q+m[1]+", "
if(1>=s)return H.k(l,1)
q=q+l[1]+", "
if(1>=r)return H.k(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.k(n,2)
u=u+n[2]+", "
if(2>=t)return H.k(m,2)
u=u+m[2]+", "
if(2>=s)return H.k(l,2)
u=u+l[2]+", "
if(2>=r)return H.k(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.k(n,3)
q=q+n[3]+", "
if(3>=t)return H.k(m,3)
q=q+m[3]+", "
if(3>=s)return H.k(l,3)
q=q+l[3]+", "
if(3>=r)return H.k(k,3)
return u+(q+k[3]+"]")},
F:function(){return this.w("")}}
V.a4.prototype={
q:function(a,b){return new V.a4(C.b.q(this.a,b.gff(b)),C.b.q(this.b,b.gfg(b)))},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.ac.prototype={
q:function(a,b){return new V.ac(this.a-b.a,this.b-b.b,this.c-b.c)},
J:function(a,b){return new V.ac(this.a*b,this.b*b,this.c*b)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ac))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.d4.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d4))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.H(u.a,3,0)+", "+V.H(u.b,3,0)+", "+V.H(u.c,3,0)+", "+V.H(u.d,3,0)+"]"}}
V.aJ.prototype={
b3:function(a){var u,t=this.a
if(typeof t!=="number")return t.J()
u=this.b
if(typeof u!=="number")return u.J()
return Math.sqrt(t*t+u*u)},
q:function(a,b){var u,t=this.a,s=b.gfb(b)
if(typeof t!=="number")return t.q()
s=C.b.q(t,s)
t=this.b
u=b.gfc(b)
if(typeof t!=="number")return t.q()
return new V.aJ(s,C.b.q(t,u))},
K:function(a,b){var u,t
if(Math.abs(b-0)<$.P().a){u=$.k9
return u==null?$.k9=new V.aJ(0,0):u}u=this.a
if(typeof u!=="number")return u.K()
t=this.b
if(typeof t!=="number")return t.K()
return new V.aJ(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aJ))return!1
u=b.a
t=this.a
s=$.P()
s.toString
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.bh(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.bh(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.S.prototype={
b3:function(a){return Math.sqrt(this.M(this))},
M:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
am:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.S(u*t-s*r,s*q-p*t,p*r-u*q)},
P:function(a,b){return new V.S(this.a+b.a,this.b+b.b,this.c+b.c)},
q:function(a,b){return new V.S(this.a-b.a,this.b-b.b,this.c-b.c)},
aE:function(a){return new V.S(-this.a,-this.b,-this.c)},
J:function(a,b){return new V.S(this.a*b,this.b*b,this.c*b)},
K:function(a,b){if(Math.abs(b-0)<$.P().a)return V.hL()
return new V.S(this.a/b,this.b/b,this.c/b)},
eA:function(){var u=$.P().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
U.cI.prototype={
gv:function(){var u=this.b
return u==null?this.b=D.aP():u},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cI))return!1
return J.T(this.a,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")}}
U.c0.prototype={}
U.d5.prototype={
gv:function(){var u=this.y
return u==null?this.y=D.aP():u},
ab:function(a){var u=this.y
if(u!=null)u.S(a)},
sci:function(a){var u
a=V.jw(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.P().a)){this.a=a
u=new D.R("yaw",u,a,[P.w])
u.b=!0
this.ab(u)}},
sc_:function(a,b){var u
b=V.jw(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.P().a)){this.b=b
u=new D.R("pitch",u,b,[P.w])
u.b=!0
this.ab(u)}},
sc5:function(a){var u
a=V.jw(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.P().a)){this.c=a
u=new D.R("roll",u,a,[P.w])
u.b=!0
this.ab(u)}},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.d5))return!1
u=r.a
t=b.a
s=$.P().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.H(u.a,3,0)+", "+V.H(u.b,3,0)+", "+V.H(u.c,3,0)+"], ["+V.H(u.d,3,0)+", "+V.H(u.e,3,0)+", "+V.H(u.f,3,0)+"]"}}
M.cM.prototype={
Z:function(a){var u
H.n(a,"$iD")
u=this.y
if(u!=null)u.S(a)},
cG:function(){return this.Z(null)},
dc:function(a,b){var u,t,s,r,q,p,o,n=E.a1
H.r(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gW(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.J)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bV()
o.saa(null)
o.saj(null)
o.c=null
o.d=0
p.z=o}H.j(t,s)
if(o.a==null)o.saa(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.f2([n])
n.b=!0
this.Z(n)},
de:function(a,b){var u,t,s=E.a1
H.r(b,"$ii",[s],"$ai")
for(u=b.gG(b),t=this.gW();u.p();)u.gA(u).gv().I(0,t)
s=new D.f3([s])
s.b=!0
this.Z(s)},
sc8:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gv().I(0,t.gW())
u=t.d
t.d=a
if(a!=null)a.gv().h(0,t.gW())
s=new D.R("technique",u,t.d,[O.bx])
s.b=!0
t.Z(s)}},
gv:function(){var u=this.y
return u==null?this.y=D.aP():u},
ag:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.c2(a1.d)
u=a1.c
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
if(typeof s!=="number")return H.bh(s)
o=C.b.V(p*s)
p=q.b
if(typeof r!=="number")return H.bh(r)
n=C.b.V(p*r)
p=C.b.V(q.c*s)
a2.c=p
q=C.b.V(q.d*r)
a2.d=q
t.viewport(o,n,p,q)
t.clearDepth(u.c)
u=u.a
t.clearColor(u.a,u.b,u.c,u.d)
t.clear(16640)
u=a1.b
t=a2.c
q=a2.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.b8(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.c1(i)
t=$.jU
if(t==null){t=$.jW
if(t==null)t=$.jW=new V.ac(0,0,0)
q=$.kc
if(q==null)q=$.kc=new V.S(0,1,0)
p=$.ka
if(p==null)p=$.ka=new V.S(0,0,-1)
h=p.K(0,Math.sqrt(p.M(p)))
q=q.am(h)
g=q.K(0,Math.sqrt(q.M(q)))
f=h.am(g)
e=new V.S(t.a,t.b,t.c)
d=g.aE(0).M(e)
c=f.aE(0).M(e)
b=h.aE(0).M(e)
t=V.b8(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.jU=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.J(0,a)}a2.db.c1(a)
for(u=a1.e.a,u=new J.aj(u,u.length,[H.u(u,0)]);u.p();)u.d.cg(0,a2)
for(u=a1.e.a,u=new J.aj(u,u.length,[H.u(u,0)]);u.p();)u.d.ag(a2)
a1.b.toString
a2.cy.b6()
a2.db.b6()
a1.c.toString
a2.c0()},
scF:function(a,b){this.e=H.r(b,"$iaY",[E.a1],"$aaY")},
$imw:1}
A.cB.prototype={}
A.ej.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
eq:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
ep:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.eB.prototype={}
A.c6.prototype={
cC:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
bw:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.C(H.jj(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.a2("Error compiling shader '"+H.h(s)+"': "+H.h(u)))}return s},
e0:function(){var u,t,s,r=this,q=H.c([],[A.cB]),p=r.a,o=H.Z(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.bh(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.cB(p,t.name,s))}r.x=new A.ej(q)},
e2:function(){var u,t,s,r=this,q=H.c([],[A.dd]),p=r.a,o=H.Z(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.bh(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.em(t.type,t.size,t.name,s))}r.y=new A.hA(q)},
a9:function(a,b,c){var u=this.a
if(a===1)return new A.ht(u,b,c)
else return A.jb(u,this.r,b,a,c)},
cS:function(a,b,c){var u=this.a
if(a===1)return new A.hD(u,b,c)
else return A.jb(u,this.r,b,a,c)},
cT:function(a,b,c){var u=this.a
if(a===1)return new A.hE(u,b,c)
else return A.jb(u,this.r,b,a,c)},
ax:function(a,b){return new P.dt(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
em:function(a,b,c,d){var u=this
switch(a){case 5120:return u.a9(b,c,d)
case 5121:return u.a9(b,c,d)
case 5122:return u.a9(b,c,d)
case 5123:return u.a9(b,c,d)
case 5124:return u.a9(b,c,d)
case 5125:return u.a9(b,c,d)
case 5126:return new A.cd(u.a,c,d)
case 35664:return new A.hv(u.a,c,d)
case 35665:return new A.ce(u.a,c,d)
case 35666:return new A.hy(u.a,c,d)
case 35667:return new A.hw(u.a,c,d)
case 35668:return new A.hx(u.a,c,d)
case 35669:return new A.hz(u.a,c,d)
case 35674:return new A.hB(u.a,c,d)
case 35675:return new A.hC(u.a,c,d)
case 35676:return new A.cf(u.a,c,d)
case 35678:return u.cS(b,c,d)
case 35680:return u.cT(b,c,d)
case 35670:throw H.f(u.ax("BOOL",c))
case 35671:throw H.f(u.ax("BOOL_VEC2",c))
case 35672:throw H.f(u.ax("BOOL_VEC3",c))
case 35673:throw H.f(u.ax("BOOL_VEC4",c))
default:throw H.f(P.a2("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}}
A.dd.prototype={}
A.hA.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
i:function(a){return this.F()},
F:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.J)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.ht.prototype={
i:function(a){return"Uniform1i: "+H.h(this.c)}}
A.hw.prototype={
i:function(a){return"Uniform2i: "+H.h(this.c)}}
A.hx.prototype={
i:function(a){return"Uniform3i: "+H.h(this.c)}}
A.hz.prototype={
i:function(a){return"Uniform4i: "+H.h(this.c)}}
A.hu.prototype={
i:function(a){return"Uniform1iv: "+H.h(this.c)},
se9:function(a){H.r(a,"$ib",[P.y],"$ab")}}
A.cd.prototype={
i:function(a){return"Uniform1f: "+H.h(this.c)}}
A.hv.prototype={
i:function(a){return"Uniform2f: "+H.h(this.c)}}
A.ce.prototype={
i:function(a){return"Uniform3f: "+H.h(this.c)}}
A.hy.prototype={
i:function(a){return"Uniform4f: "+H.h(this.c)}}
A.hB.prototype={
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}}
A.hC.prototype={
i:function(a){return"UniformMat3: "+H.h(this.c)}}
A.cf.prototype={
bc:function(a){var u=new Float32Array(H.je(H.r(a,"$ib",[P.w],"$ab")))
C.f.f6(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.h(this.c)}}
A.hD.prototype={
i:function(a){return"UniformSampler2D: "+H.h(this.c)}}
A.hE.prototype={
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}
F.iY.prototype={
$1:function(a){return new V.ac(Math.cos(a),Math.sin(a),0)},
$S:33}
F.iL.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.jz(n.$1(o),m)
m=J.kV(J.jz(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.S(m.a,m.b,m.c)
u=m.K(0,Math.sqrt(m.M(m)))
n=$.kb
if(n==null){n=new V.S(1,0,0)
$.kb=n
t=n}else t=n
if(!J.T(u,t)){n=$.kd
if(n==null){n=new V.S(0,0,1)
$.kd=n
t=n}else t=n}n=u.am(t)
s=n.K(0,Math.sqrt(n.M(n)))
n=s.am(u)
t=n.K(0,Math.sqrt(n.M(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.J(0,n*m)
m=s.J(0,q*m)
m=new V.ac(l.a+(n.a-m.a),l.b+(n.b-m.b),l.c+(n.c-m.c))
if(!J.T(a.f,m)){a.f=m
n=a.a
if(n!=null)n.U()}},
$S:34}
F.U.prototype={
az:function(){var u=this
if(!u.gbQ()){C.a.I(u.a.a.d.b,u)
u.a.a.U()}u.dQ()
u.dR()
u.dS()},
dY:function(a){this.a=a
C.a.h(a.d.b,this)},
dZ:function(a){this.b=a
C.a.h(a.d.c,this)},
e_:function(a){this.c=a
C.a.h(a.d.d,this)},
dQ:function(){var u=this.a
if(u!=null){C.a.I(u.d.b,this)
this.a=null}},
dR:function(){var u=this.b
if(u!=null){C.a.I(u.d.c,this)
this.b=null}},
dS:function(){var u=this.c
if(u!=null){C.a.I(u.d.d,this)
this.c=null}},
gbQ:function(){return this.a==null||this.b==null||this.c==null},
cN:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.hL()
if(q!=null)s=s.P(0,q)
if(u!=null)s=s.P(0,u)
if(t!=null)s=s.P(0,t)
if(s.eA())return
return s.K(0,Math.sqrt(s.M(s)))},
cO:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.q(0,q)
r=new V.S(r.a,r.b,r.c)
s=r.K(0,Math.sqrt(r.M(r)))
r=t.q(0,q)
r=new V.S(r.a,r.b,r.c)
r=s.am(r.K(0,Math.sqrt(r.M(r))))
return r.K(0,Math.sqrt(r.M(r)))},
b_:function(){var u,t=this
if(t.d!=null)return!0
u=t.cN()
if(u==null){u=t.cO()
if(u==null)return!1}t.d=u
t.a.a.U()
return!0},
gbN:function(a){var u=this
if(J.T(u.a,u.b))return!0
if(J.T(u.b,u.c))return!0
if(J.T(u.c,u.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
w:function(a){var u,t,s=this
if(s.gbQ())return a+"disposed"
u=a+C.c.a3(J.ao(s.a.e),0)+", "+C.c.a3(J.ao(s.b.e),0)+", "+C.c.a3(J.ao(s.c.e),0)+" {"
t=s.d
u=(t!=null?u+(t.i(0)+", "):u+"-, ")+"-}"
return u},
F:function(){return this.w("")}}
F.eO.prototype={}
F.h0.prototype={
b4:function(a,b,c){var u,t=b.a
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
F.b6.prototype={}
F.fc.prototype={}
F.hs.prototype={}
F.bq.prototype={}
F.d7.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.aP():u},
eF:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.u(o,0)])
for(o=[F.af];u.length!==0;){t=C.a.geu(u)
C.a.c3(u,0)
if(t!=null){s=H.c([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.k(u,r)
q=u[r]
if(q!=null&&a.b4(0,t,q)){C.a.h(s,q)
C.a.c3(u,r)}}if(s.length>1)b.eE(s)}}p.a.D()
p.c.b7()
p.d.b7()
p.b.eW()
p.c.b8(new F.hs())
p.d.b8(new F.h0())
o=p.e
if(o!=null)o.aC(0)},
ej:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aU()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bI().a)!==0)++s
if((t&$.bH().a)!==0)++s
if((t&$.bJ().a)!==0)++s
if((t&$.bK().a)!==0)++s
if((t&$.cx().a)!==0)++s
if((t&$.cy().a)!==0)++s
if((t&$.bL().a)!==0)++s
if((t&$.bG().a)!==0)++s
r=a3.gbe(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.w
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.cE])
for(n=0,m=0;m<s;++m){l=a3.ef(m)
k=l.gbe(l)
C.a.H(o,m,new Z.cE(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.k(u,j)
i=u[j].eC(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.H(p,h,i[g]);++h}}n+=k}H.r(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.je(p)),35044)
u.bindBuffer(a0,null)
e=new Z.cF(new Z.dj(a0,f),o)
e.sd1(H.c([],[Z.bX]))
a.b.b
a.c.b
if(a.d.b.length!==0){t=P.y
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.D()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.k(c,m)
c=c[m].b
c.a.a.D()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.k(c,m)
c=c[m].c
c.a.a.D()
C.a.h(d,c.e)}b=Z.lz(u,34963,H.r(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bX(4,d.length,b))}return e},
i:function(a){var u=this,t=H.c([],[P.e])
if(u.a.c.length!==0){C.a.h(t,"Vertices:")
C.a.h(t,u.a.w("   "))}u.b.b
u.c.b
if(u.d.b.length!==0){C.a.h(t,"Faces:")
C.a.h(t,u.d.w("   "))}return C.a.l(t,"\n")},
U:function(){var u=this.e
if(u!=null)u.S(null)},
$imx:1}
F.fU.prototype={
ec:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.r(c,"$ib",[F.af],"$ab")
u=H.c([],[F.U])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.k(c,r)
l=c[r];++r
if(r>=m)return H.k(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.k(c,j)
i=c[j]
if(s<0||s>=m)return H.k(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.eN(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.eN(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.eN(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.eN(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
b8:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.k(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.m(0,q)
for(o=q-1;o>=0;--o){n=r.d.m(0,o)
if(a.b4(0,p,n)){p.az()
break}}}}},
b7:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.k(t,u)
s=t[u]
t=s.gbN(s)
if(t)s.az()}},
b0:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.J)(u),++r)if(!u[r].b_())s=!1
return s},
i:function(a){return this.F()},
w:function(a){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s)C.a.h(r,u[s].w(a))
return C.a.l(r,"\n")},
F:function(){return this.w("")},
scX:function(a){this.b=H.r(a,"$ib",[F.U],"$ab")}}
F.fV.prototype={
gk:function(a){return 0},
b8:function(a){var u,t,s,r,q
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.k(s,t)
r=s[t]
for(r.c.c,q=-1;!1;--q)r.c.m(0,q)}},
b7:function(){var u,t,s
for(u=-1;!1;--u){t=this.b
return H.k(t,u)
s=t[u]
t=s.gbN(s)
if(t)s.az()}},
i:function(a){return this.F()},
w:function(a){var u,t,s=H.c([],[P.e])
for(u=0;!1;++u){t=this.b
if(u>=0)return H.k(t,u)
C.a.h(s,t[u].w(a+(""+u+". ")))}return C.a.l(s,"\n")},
F:function(){return this.w("")},
sd2:function(a){this.b=H.r(a,"$ib",[F.b6],"$ab")}}
F.fW.prototype={
gk:function(a){return 0},
eW:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.k(t,u)
t=t[u].gfe()
t=t.gfd(t)
if(t.gk(t).f8(0,1)){t=this.b
return H.k(t,u)
t[u].az()}}},
i:function(a){return this.F()},
w:function(a){var u,t,s=H.c([],[P.e])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.k(u,t)
C.a.h(s,u[t].w(a))}return C.a.l(s,"\n")},
F:function(){return this.w("")},
saT:function(a){this.b=H.r(a,"$ib",[F.bq],"$ab")}}
F.af.prototype={
bP:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.kf(u.cx,r,o,t,s,q,p,a,n)},
eC:function(a){var u,t,s=this
if(a.n(0,$.aU())){u=s.f
t=[P.w]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bI())){u=s.r
t=[P.w]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bH())){u=H.c([0,0,1],[P.w])
return u}else if(a.n(0,$.bJ())){u=s.y
t=[P.w]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.n(0,$.bK())){u=H.c([0,0,0],[P.w])
return u}else if(a.n(0,$.cx())){u=s.Q
t=[P.w]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.cy())){u=s.Q
t=[P.w]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bL()))return H.c([s.ch],[P.w])
else if(a.n(0,$.bG())){u=H.c([-1,-1,-1,-1],[P.w])
return u}else return H.c([],[P.w])},
b_:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.hL()
t.d.E(0,new F.hV(s))
s=s.a
t.r=s.K(0,Math.sqrt(s.M(s)))
s=t.a
if(s!=null){s.U()
s=t.a.e
if(s!=null)s.aC(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
w:function(a){var u,t,s=this,r="-",q=H.c([],[P.e])
C.a.h(q,C.c.a3(J.ao(s.e),0))
u=s.f
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.r
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
C.a.h(q,r)
u=s.y
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
C.a.h(q,r)
u=s.Q
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
C.a.h(q,V.H(s.ch,3,0))
C.a.h(q,r)
t=C.a.l(q,", ")
return a+"{"+t+"}"},
F:function(){return this.w("")}}
F.hV.prototype={
$1:function(a){var u,t
H.n(a,"$iU")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.P(0,u)}},
$S:9}
F.hM.prototype={
D:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.k(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.a2("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.U()
return!0},
bI:function(a,b){var u=null,t=F.kf(u,u,a,u,u,b,u,u,0)
this.h(0,t)
return t},
gk:function(a){return this.c.length},
b0:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s)u[s].b_()
return!0},
i:function(a){return this.F()},
w:function(a){var u,t,s,r
this.D()
u=H.c([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.J)(t),++r)C.a.h(u,t[r].w(a))
return C.a.l(u,"\n")},
F:function(){return this.w("")},
sea:function(a){this.c=H.r(a,"$ib",[F.af],"$ab")}}
F.hN.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
m:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.k(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.k(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.k(t,b)
return t[b]},
E:function(a,b){var u=this
H.j(b,{func:1,ret:-1,args:[F.U]})
C.a.E(u.b,b)
C.a.E(u.c,new F.hO(u,b))
C.a.E(u.d,new F.hP(u,b))},
i:function(a){return this.F()},
F:function(){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s)C.a.h(r,u[s].w(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s)C.a.h(r,u[s].w(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s)C.a.h(r,u[s].w(""))
return C.a.l(r,"\n")},
scY:function(a){this.b=H.r(a,"$ib",[F.U],"$ab")},
scZ:function(a){this.c=H.r(a,"$ib",[F.U],"$ab")},
sd_:function(a){this.d=H.r(a,"$ib",[F.U],"$ab")}}
F.hO.prototype={
$1:function(a){H.n(a,"$iU")
if(!J.T(a.a,this.a))this.b.$1(a)},
$S:9}
F.hP.prototype={
$1:function(a){var u
H.n(a,"$iU")
u=this.a
if(!J.T(a.a,u)&&!J.T(a.b,u))this.b.$1(a)},
$S:9}
F.hQ.prototype={
gk:function(a){return 0},
m:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.k(u,t)
return u[t]}else{u=this.b
return H.k(u,b)
return u[b]}},
i:function(a){return this.F()},
F:function(){var u,t,s=H.c([],[P.e])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.k(u,t)
C.a.h(s,u[t].w(""))}for(u=this.c,t=0;!1;++t){if(t>=0)return H.k(u,t)
C.a.h(s,u[t].w(""))}return C.a.l(s,"\n")},
sd3:function(a){this.b=H.r(a,"$ib",[F.b6],"$ab")},
sd4:function(a){this.c=H.r(a,"$ib",[F.b6],"$ab")}}
F.hS.prototype={}
F.hR.prototype={
b4:function(a,b,c){return J.T(b.f,c.f)}}
F.hT.prototype={}
F.fB.prototype={
eE:function(a){var u,t,s,r,q,p,o,n,m
H.r(a,"$ib",[F.af],"$ab")
u=V.hL()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.S(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.K(0,Math.sqrt(u.M(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.J)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.K(0,Math.sqrt(o*o+n*n+m*m))}if(!J.T(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.S(null)}}}return}}
F.hU.prototype={
gk:function(a){return 0},
i:function(a){return this.F()},
F:function(){var u,t,s=H.c([],[P.e])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.k(u,t)
C.a.h(s,u[t].w(""))}return C.a.l(s,"\n")},
saT:function(a){this.b=H.r(a,"$ib",[F.bq],"$ab")}}
O.eA.prototype={
gv:function(){var u=this.f
return u==null?this.f=D.aP():u},
at:function(a){var u=this.f
if(u!=null)u.S(a)}}
O.bx.prototype={}
V.aM.prototype={
a1:function(a,b){return!0},
i:function(a){return"all"},
$ia7:1}
V.a7.prototype={}
V.cV.prototype={
a1:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s)if(u[s].a1(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.J)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sN:function(a){this.a=H.r(a,"$ib",[V.a7],"$ab")},
$ia7:1}
V.a3.prototype={
a1:function(a,b){return!this.cv(0,b)},
i:function(a){return"!["+this.bf(0)+"]"}}
V.fK.prototype={
a1:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.j8(this.a),t=H.j8(this.b)
return u+".."+t},
$ia7:1}
V.fT.prototype={
cB:function(a){var u,t
if(a.a.length<=0)throw H.f(P.a2("May not create a SetMatcher with zero characters."))
u=new H.ax([P.y,P.L])
for(t=new H.bY(a,a.gk(a),[H.cv(a,"t",0)]);t.p();)u.H(0,t.d,!0)
this.sdX(u)},
a1:function(a,b){return this.a.bO(0,b)},
i:function(a){var u=this.a
return P.j9(new H.cS(u,[H.u(u,0)]))},
sdX:function(a){this.a=H.r(a,"$iG",[P.y,P.L],"$aG")},
$ia7:1}
V.c7.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cc(this.a.j(0,b))
r.sN(H.c([],[V.a7]))
r.c=!1
C.a.h(this.c,r)
return r},
es:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s){r=u[s]
if(r.a1(0,a))return r}return},
i:function(a){return this.b},
se8:function(a){this.c=H.r(a,"$ib",[V.cc],"$ab")}}
V.dc.prototype={
i:function(a){var u=H.jv(this.b,"\n","\\n"),t=H.jv(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cb.prototype={
a4:function(a,b,c){var u,t,s
H.r(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.J)(c),++t){s=c[t]
this.c.H(0,s,b)}},
i:function(a){return this.b},
sdT:function(a){var u=P.e
this.c=H.r(a,"$iG",[u,u],"$aG")}}
V.hj.prototype={
j:function(a,b){var u=this.a.m(0,b)
if(u==null){u=new V.c7(this,b)
u.se8(H.c([],[V.cc]))
u.d=null
this.a.H(0,b,u)}return u},
B:function(a){var u,t=this.b.m(0,a)
if(t==null){t=new V.cb(a)
u=P.e
t.sdT(new H.ax([u,u]))
this.b.H(0,a,t)}return t},
cc:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.dc]),l=this.c,k=[P.y],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.c.a8(a,s)
q=l.es(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.j9(j)
throw H.f(P.a2("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.j9(j)
o=l.d
n=o.c.m(0,p)
t=new V.dc(n==null?o.b:n,p,s)}++s}}},
se5:function(a){this.a=H.r(a,"$iG",[P.e,V.c7],"$aG")},
se7:function(a){this.b=H.r(a,"$iG",[P.e,V.cb],"$aG")}}
V.cc.prototype={
i:function(a){return this.b.b+": "+this.bf(0)}}
X.cH.prototype={$ijR:1}
X.eW.prototype={
gv:function(){var u=this.x
return u==null?this.x=D.aP():u}}
X.d0.prototype={
gv:function(){var u=this.f
return u==null?this.f=D.aP():u},
a7:function(a){var u
H.n(a,"$iD")
u=this.f
if(u!=null)u.S(a)},
cK:function(){return this.a7(null)},
sao:function(a){var u,t,s=this
if(!J.T(s.b,a)){u=s.b
if(u!=null)u.gv().I(0,s.gbj())
t=s.b
s.b=a
if(a!=null)a.gv().h(0,s.gbj())
u=new D.R("mover",t,s.b,[U.c0])
u.b=!0
s.a7(u)}},
$ijR:1,
$icH:1}
X.da.prototype={}
V.aX.prototype={
as:function(a){this.b=new P.f_(C.G)
this.c=null
this.saO(H.c([],[[P.b,W.ab]]))},
u:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.ab]))
u=a.split("\n")
for(l=u.length,t=[W.ab],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.z(q)
o=m.b.cR(q,0,q.length)
n=o==null?q:o
C.E.cq(p,H.jv(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaA(m.d),p)}},
bZ:function(a,b){var u,t,s,r,q=this
H.r(b,"$ib",[P.e],"$ab")
q.saO(H.c([],[[P.b,W.ab]]))
u=C.a.l(b,"\n")
t=q.c
for(t=(t==null?q.c=q.ay():t).cc(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.J)(t),++r)q.aB(t[r])},
saO:function(a){this.d=H.r(a,"$ib",[[P.b,W.ab]],"$ab")}}
V.iX.prototype={
$1:function(a){var u
H.n(a,"$iaG")
u=C.b.cb(this.a.gew(),2)
if(u!=="0.00")P.ju(u+" fps")},
$S:35}
V.ey.prototype={
aB:function(a){var u=this
switch(a.a){case"Class":u.u(a.b,"#551")
break
case"Comment":u.u(a.b,"#777")
break
case"Id":u.u(a.b,"#111")
break
case"Num":u.u(a.b,"#191")
break
case"Reserved":u.u(a.b,"#119")
break
case"String":u.u(a.b,"#171")
break
case"Symbol":u.u(a.b,"#616")
break
case"Type":u.u(a.b,"#B11")
break
case"Whitespace":u.u(a.b,"#111")
break}},
ay:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.hk()
a1.c=a1.j(0,r)
u=a1.j(0,r).l(0,q)
t=V.q(new H.o("_"))
C.a.h(u.a,t)
t=V.N("a","z")
C.a.h(u.a,t)
t=V.N("A","Z")
C.a.h(u.a,t)
t=a1.j(0,q).l(0,q)
u=V.q(new H.o("_"))
C.a.h(t.a,u)
u=V.N("0","9")
C.a.h(t.a,u)
u=V.N("a","z")
C.a.h(t.a,u)
u=V.N("A","Z")
C.a.h(t.a,u)
u=a1.j(0,r).l(0,p)
t=V.N("0","9")
C.a.h(u.a,t)
t=a1.j(0,p).l(0,p)
u=V.N("0","9")
C.a.h(t.a,u)
u=a1.j(0,p).l(0,o)
t=V.q(new H.o("."))
C.a.h(u.a,t)
t=a1.j(0,o).l(0,n)
u=V.N("0","9")
C.a.h(t.a,u)
u=a1.j(0,n).l(0,n)
t=V.N("0","9")
C.a.h(u.a,t)
t=a1.j(0,r).l(0,m)
u=V.q(new H.o(l))
C.a.h(t.a,u)
u=a1.j(0,m).l(0,m)
t=V.q(new H.o(l))
C.a.h(u.a,t)
t=a1.j(0,r).l(0,k)
u=V.q(new H.o('"'))
C.a.h(t.a,u)
u=a1.j(0,k).l(0,j)
t=V.q(new H.o('"'))
C.a.h(u.a,t)
t=a1.j(0,k).l(0,i)
u=V.q(new H.o("\\"))
C.a.h(t.a,u)
u=a1.j(0,i).l(0,k)
t=V.q(new H.o('"'))
C.a.h(u.a,t)
C.a.h(a1.j(0,k).l(0,k).a,new V.aM())
t=a1.j(0,r).l(0,h)
u=V.q(new H.o("'"))
C.a.h(t.a,u)
u=a1.j(0,h).l(0,g)
t=V.q(new H.o("'"))
C.a.h(u.a,t)
t=a1.j(0,h).l(0,f)
u=V.q(new H.o("\\"))
C.a.h(t.a,u)
u=a1.j(0,f).l(0,h)
t=V.q(new H.o("'"))
C.a.h(u.a,t)
C.a.h(a1.j(0,h).l(0,h).a,new V.aM())
t=a1.j(0,r).l(0,e)
u=V.q(new H.o("/"))
C.a.h(t.a,u)
u=a1.j(0,e).l(0,d)
t=V.q(new H.o("/"))
C.a.h(u.a,t)
t=a1.j(0,d).l(0,c)
u=V.q(new H.o("\n"))
C.a.h(t.a,u)
u=a1.j(0,d).l(0,d)
t=new V.a3()
s=[V.a7]
t.sN(H.c([],s))
C.a.h(u.a,t)
u=V.q(new H.o("\n"))
C.a.h(t.a,u)
u=a1.j(0,e).l(0,b)
t=V.q(new H.o("*"))
C.a.h(u.a,t)
t=a1.j(0,b).l(0,a)
u=V.q(new H.o("*"))
C.a.h(t.a,u)
u=a1.j(0,a).l(0,b)
t=new V.a3()
t.sN(H.c([],s))
C.a.h(u.a,t)
u=V.q(new H.o("*"))
C.a.h(t.a,u)
u=a1.j(0,a).l(0,c)
t=V.q(new H.o("/"))
C.a.h(u.a,t)
t=a1.j(0,r).l(0,a0)
u=V.q(new H.o(" \n\t"))
C.a.h(t.a,u)
u=a1.j(0,a0).l(0,a0)
t=V.q(new H.o(" \n\t"))
C.a.h(u.a,t)
t=a1.j(0,p)
t.d=t.a.B("Num")
t=a1.j(0,n)
t.d=t.a.B("Num")
t=a1.j(0,m)
t.d=t.a.B("Symbol")
t=a1.j(0,j)
t.d=t.a.B("String")
t=a1.j(0,g)
t.d=t.a.B("String")
t=a1.j(0,c)
t.d=t.a.B(d)
t=a1.j(0,a0)
t.d=t.a.B(a0)
t=a1.j(0,q)
t=t.d=t.a.B(q)
u=[P.e]
t.a4(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.a4(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.a4(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.eX.prototype={
aB:function(a){var u=this
switch(a.a){case"Builtin":u.u(a.b,"#411")
break
case"Comment":u.u(a.b,"#777")
break
case"Id":u.u(a.b,"#111")
break
case"Num":u.u(a.b,"#191")
break
case"Preprocess":u.u(a.b,"#737")
break
case"Reserved":u.u(a.b,"#119")
break
case"Symbol":u.u(a.b,"#611")
break
case"Type":u.u(a.b,"#171")
break
case"Whitespace":u.u(a.b,"#111")
break}},
ay:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.hk()
e.c=e.j(0,r)
u=e.j(0,r).l(0,q)
t=V.q(new H.o("_"))
C.a.h(u.a,t)
t=V.N("a","z")
C.a.h(u.a,t)
t=V.N("A","Z")
C.a.h(u.a,t)
t=e.j(0,q).l(0,q)
u=V.q(new H.o("_"))
C.a.h(t.a,u)
u=V.N("0","9")
C.a.h(t.a,u)
u=V.N("a","z")
C.a.h(t.a,u)
u=V.N("A","Z")
C.a.h(t.a,u)
u=e.j(0,r).l(0,p)
t=V.N("0","9")
C.a.h(u.a,t)
t=e.j(0,p).l(0,p)
u=V.N("0","9")
C.a.h(t.a,u)
u=e.j(0,p).l(0,o)
t=V.q(new H.o("."))
C.a.h(u.a,t)
t=e.j(0,o).l(0,n)
u=V.N("0","9")
C.a.h(t.a,u)
u=e.j(0,n).l(0,n)
t=V.N("0","9")
C.a.h(u.a,t)
t=e.j(0,r).l(0,m)
u=V.q(new H.o(l))
C.a.h(t.a,u)
u=e.j(0,m).l(0,m)
t=V.q(new H.o(l))
C.a.h(u.a,t)
t=e.j(0,r).l(0,k)
u=V.q(new H.o("/"))
C.a.h(t.a,u)
u=e.j(0,k).l(0,j)
t=V.q(new H.o("/"))
C.a.h(u.a,t)
C.a.h(e.j(0,k).l(0,m).a,new V.aM())
t=e.j(0,j).l(0,i)
u=V.q(new H.o("\n"))
C.a.h(t.a,u)
u=e.j(0,j).l(0,j)
t=new V.a3()
s=[V.a7]
t.sN(H.c([],s))
C.a.h(u.a,t)
u=V.q(new H.o("\n"))
C.a.h(t.a,u)
u=e.j(0,r).l(0,h)
t=V.q(new H.o("#"))
C.a.h(u.a,t)
t=e.j(0,h).l(0,h)
u=new V.a3()
u.sN(H.c([],s))
C.a.h(t.a,u)
t=V.q(new H.o("\n"))
C.a.h(u.a,t)
t=e.j(0,h).l(0,g)
u=V.q(new H.o("\n"))
C.a.h(t.a,u)
u=e.j(0,r).l(0,f)
t=V.q(new H.o(" \n\t"))
C.a.h(u.a,t)
t=e.j(0,f).l(0,f)
u=V.q(new H.o(" \n\t"))
C.a.h(t.a,u)
u=e.j(0,p)
u.d=u.a.B("Num")
u=e.j(0,n)
u.d=u.a.B("Num")
u=e.j(0,m)
u.d=u.a.B("Symbol")
u=e.j(0,i)
u.d=u.a.B(j)
u=e.j(0,g)
u.d=u.a.B(h)
u=e.j(0,f)
u.d=u.a.B(f)
u=e.j(0,q)
u=u.d=u.a.B(q)
t=[P.e]
u.a4(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.a4(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.a4(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.eY.prototype={
aB:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.u(a.b,"#911")
u.u("=",t)
break
case"Id":u.u(a.b,t)
break
case"Other":u.u(a.b,t)
break
case"Reserved":u.u(a.b,"#119")
break
case"String":u.u(a.b,"#171")
break
case"Symbol":u.u(a.b,"#616")
break}},
ay:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.hk()
l.c=l.j(0,s)
u=l.j(0,s).l(0,r)
t=V.q(new H.o("_"))
C.a.h(u.a,t)
t=V.N("a","z")
C.a.h(u.a,t)
t=V.N("A","Z")
C.a.h(u.a,t)
t=l.j(0,r).l(0,r)
u=V.q(new H.o("_"))
C.a.h(t.a,u)
u=V.N("0","9")
C.a.h(t.a,u)
u=V.N("a","z")
C.a.h(t.a,u)
u=V.N("A","Z")
C.a.h(t.a,u)
u=l.j(0,r).l(0,q)
t=V.q(new H.o("="))
C.a.h(u.a,t)
u.c=!0
u=l.j(0,s).l(0,p)
t=V.q(new H.o("</\\-!>="))
C.a.h(u.a,t)
t=l.j(0,p).l(0,p)
u=V.q(new H.o("</\\-!>="))
C.a.h(t.a,u)
u=l.j(0,s).l(0,o)
t=V.q(new H.o('"'))
C.a.h(u.a,t)
t=l.j(0,o).l(0,n)
u=V.q(new H.o('"'))
C.a.h(t.a,u)
u=l.j(0,o).l(0,"EscStr")
t=V.q(new H.o("\\"))
C.a.h(u.a,t)
t=l.j(0,"EscStr").l(0,o)
u=V.q(new H.o('"'))
C.a.h(t.a,u)
C.a.h(l.j(0,o).l(0,o).a,new V.aM())
C.a.h(l.j(0,s).l(0,m).a,new V.aM())
u=l.j(0,m).l(0,m)
t=new V.a3()
t.sN(H.c([],[V.a7]))
C.a.h(u.a,t)
u=V.q(new H.o('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.N("a","z")
C.a.h(t.a,u)
u=V.N("A","Z")
C.a.h(t.a,u)
u=l.j(0,p)
u.d=u.a.B("Symbol")
u=l.j(0,n)
u.d=u.a.B("String")
u=l.j(0,r)
t=u.a.B(r)
u.d=t
t.a4(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
t=l.j(0,q)
t.d=t.a.B(q)
t=l.j(0,m)
t.d=t.a.B(m)
return l}}
V.fH.prototype={
bZ:function(a,b){H.r(b,"$ib",[P.e],"$ab")
this.saO(H.c([],[[P.b,W.ab]]))
this.u(C.a.l(b,"\n"),"#111")},
aB:function(a){},
ay:function(){return}}
V.fX.prototype={
cD:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.l
W.X(q,"scroll",H.j(new V.fZ(o),{func:1,ret:-1,args:[r]}),!1,r)},
bJ:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.r(a,"$ib",[P.e],"$ab")
this.e1()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.cc(C.a.eB(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.J)(s),++q){p=s[q]
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
if(H.mk(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.k(m,1)
l.href=H.z(m[1])
l.textContent=H.z(m[0])
t.appendChild(l)}else{k=P.kk(C.p,n,C.h,!1)
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
ck:function(a){var u,t,s,r=new V.ey("dart")
r.as("dart")
u=new V.eX("glsl")
u.as("glsl")
t=new V.eY("html")
t.as("html")
s=C.a.ev(H.c([r,u,t],[V.aX]),new V.h_(a))
if(s!=null)return s
r=new V.fH("plain")
r.as("plain")
return r},
bH:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.r(b0,"$ib",[P.e],"$ab")
u=H.c([],[P.y])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.jp(r).aF(r,"+")){C.a.H(b0,s,C.c.aG(r,1))
C.a.h(u,1)
t=!0}else if(C.c.aF(r,"-")){C.a.H(b0,s,C.c.aG(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.ck(a8)
q.bZ(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.kk(C.p,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.jB()
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
if(s>=u.length)return H.k(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.J)(r),++a0)C.N.ee(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.J)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gG(r);a3.p();)c.appendChild(a3.gA(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
e1:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.hk()
u.c=u.j(0,q)
t=u.j(0,q).l(0,p)
s=V.q(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,p).l(0,p)
s=new V.a3()
r=[V.a7]
s.sN(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,p).l(0,"BoldEnd")
s=V.q(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,q).l(0,o)
s=V.q(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,o).l(0,o)
s=new V.a3()
s.sN(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.o("_"))
C.a.h(s.a,t)
t=u.j(0,o).l(0,n)
s=V.q(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,q).l(0,m)
s=V.q(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,m).l(0,m)
s=new V.a3()
s.sN(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.o("`"))
C.a.h(s.a,t)
t=u.j(0,m).l(0,"CodeEnd")
s=V.q(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,q).l(0,l)
s=V.q(new H.o("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,l).l(0,k)
s=V.q(new H.o("|"))
C.a.h(t.a,s)
s=u.j(0,l).l(0,j)
t=V.q(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,l).l(0,l)
t=new V.a3()
t.sN(H.c([],r))
C.a.h(s.a,t)
s=V.q(new H.o("|]"))
C.a.h(t.a,s)
s=u.j(0,k).l(0,j)
t=V.q(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,k).l(0,k)
t=new V.a3()
t.sN(H.c([],r))
C.a.h(s.a,t)
s=V.q(new H.o("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,q).l(0,i).a,new V.aM())
s=u.j(0,i).l(0,i)
t=new V.a3()
t.sN(H.c([],r))
C.a.h(s.a,t)
s=V.q(new H.o("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.B(p)
s=u.j(0,n)
s.d=s.a.B(o)
s=u.j(0,"CodeEnd")
s.d=s.a.B(m)
s=u.j(0,j)
s.d=s.a.B("Link")
s=u.j(0,i)
s.d=s.a.B(i)
this.b=u}}
V.fZ.prototype={
$1:function(a){P.k5(C.i,new V.fY(this.a))},
$S:36}
V.fY.prototype={
$0:function(){var u=C.b.V(document.documentElement.scrollTop),t=this.a.style,s=H.h(-0.01*u)+"px"
t.top=s},
$S:0}
V.h_.prototype={
$1:function(a){return H.n(a,"$iaX").a===this.a},
$S:37}
Y.iU.prototype={
$1:function(a){var u,t,s,r
H.n(a,"$iD")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.bH("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.bH("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:6};(function aliases(){var u=J.a.prototype
u.cs=u.i
u=J.cQ.prototype
u.cu=u.i
u=P.i.prototype
u.ct=u.aD
u=W.I.prototype
u.aH=u.R
u=W.dP.prototype
u.cw=u.Y
u=V.cV.prototype
u.cv=u.a1
u.bf=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"lT","lB",10)
u(P,"lU","lC",10)
u(P,"lV","lD",10)
t(P,"kt","lR",1)
s(W,"m4",4,null,["$4"],["lF"],19,0)
s(W,"m5",4,null,["$4"],["lG"],19,0)
var m
r(m=E.a1.prototype,"gbX",0,0,null,["$1","$0"],["bY","eM"],3,0)
r(m,"gbV",0,0,null,["$1","$0"],["bW","eL"],3,0)
r(m,"gbT",0,0,null,["$1","$0"],["bU","eI"],3,0)
q(m,"geG","eH",5)
q(m,"geJ","eK",5)
r(m=E.db.prototype,"gbg",0,0,null,["$1","$0"],["bi","bh"],3,0)
p(m,"geY","c4",1)
o(m=X.dh.prototype,"gdl","dm",7)
o(m,"gd8","d9",7)
o(m,"gdf","dg",2)
o(m,"gdr","ds",20)
o(m,"gdn","dq",20)
o(m,"gdu","dv",2)
o(m,"gdA","dB",2)
o(m,"gdj","dk",2)
o(m,"gdw","dz",2)
o(m,"gdh","di",2)
o(m,"gdC","dD",32)
o(m,"gdE","dF",7)
o(m,"gdL","dM",8)
o(m,"gdH","dI",8)
o(m,"gdJ","dK",8)
n(V.aJ.prototype,"gk","b3",21)
n(V.S.prototype,"gk","b3",21)
r(m=M.cM.prototype,"gW",0,0,null,["$1","$0"],["Z","cG"],3,0)
q(m,"gda","dc",5)
q(m,"gdd","de",5)
r(X.d0.prototype,"gbj",0,0,null,["$1","$0"],["a7","cK"],3,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.F,null)
s(P.F,[H.j6,J.a,J.aj,P.dC,P.i,H.bY,P.av,H.bm,H.dg,H.hp,P.b2,H.bP,H.dU,P.V,H.fd,H.fe,H.f8,P.e_,P.aL,P.ah,P.dk,P.h7,P.c9,P.h8,P.aG,P.a_,P.iG,P.iu,P.by,P.dB,P.t,P.bQ,P.f0,P.iE,P.L,P.b1,P.Y,P.aN,P.fF,P.d8,P.dt,P.eV,P.b3,P.b,P.G,P.E,P.a5,P.e,P.bv,W.eu,W.bb,W.v,W.cZ,W.dP,W.iz,W.cO,W.a8,W.it,W.e4,P.io,O.aY,O.bZ,E.eo,E.a1,E.fL,E.db,Z.dj,Z.hX,Z.cF,Z.bX,Z.di,D.er,D.bV,D.D,X.cG,X.cR,X.fa,X.fg,X.c_,X.fs,X.hl,X.dh,V.aZ,V.b_,V.eK,V.b7,V.a4,V.ac,V.d4,V.aJ,V.S,M.cM,A.cB,A.ej,A.dd,A.hA,F.U,F.eO,F.b6,F.fc,F.bq,F.d7,F.fU,F.fV,F.fW,F.af,F.hM,F.hN,F.hQ,F.hS,F.hT,F.hU,O.bx,V.aM,V.a7,V.cV,V.fK,V.fT,V.c7,V.dc,V.cb,V.hj,X.cH,X.da,X.d0,V.aX,V.fX])
s(J.a,[J.f5,J.f7,J.cQ,J.aw,J.bo,J.b4,H.c2,W.d,W.eg,W.cC,W.ar,W.as,W.K,W.dm,W.ez,W.eC,W.dp,W.cL,W.dr,W.eE,W.l,W.du,W.au,W.eZ,W.dx,W.cU,W.fm,W.dD,W.dE,W.az,W.dF,W.dI,W.aA,W.dM,W.dO,W.aD,W.dQ,W.aE,W.dV,W.ak,W.dY,W.hi,W.aH,W.e0,W.hn,W.hI,W.e5,W.e7,W.e9,W.eb,W.ed,P.aQ,P.dz,P.aR,P.dK,P.fJ,P.dW,P.aS,P.e2,P.ek,P.dl,P.cD,P.d2,P.bu,P.d6,P.de,P.dS])
s(J.cQ,[J.fG,J.ba,J.b5])
t(J.j5,J.aw)
s(J.bo,[J.cP,J.f6])
t(P.ff,P.dC)
s(P.ff,[H.df,W.i4,W.a0,P.eR])
t(H.o,H.df)
s(P.i,[H.eH,H.fj,H.cg])
s(H.eH,[H.bp,H.cS])
s(P.av,[H.fk,H.hY])
t(H.fl,H.bp)
s(P.b2,[H.fC,H.f9,H.hG,H.hr,H.eq,H.fR,P.ei,P.d_,P.ap,P.hH,P.hF,P.c8,P.es,P.ex])
s(H.bP,[H.iZ,H.he,H.iQ,H.iR,H.iS,P.i0,P.i_,P.i1,P.i2,P.iD,P.iC,P.ia,P.ie,P.ib,P.ic,P.id,P.ii,P.ij,P.ih,P.ig,P.h9,P.ha,P.iI,P.ir,P.iq,P.is,P.fi,P.eF,P.eG,W.eI,W.fo,W.fq,W.fQ,W.h6,W.i9,W.fA,W.fz,W.iv,W.iw,W.iB,W.iF,P.iK,P.eS,P.eT,P.em,E.fM,E.fN,E.fO,E.hh,D.eL,D.eM,F.iY,F.iL,F.hV,F.hO,F.hP,V.iX,V.fZ,V.fY,V.h_,Y.iU])
s(H.he,[H.h4,H.bN])
t(H.hZ,P.ei)
t(P.fh,P.V)
s(P.fh,[H.ax,W.i3])
t(H.cW,H.c2)
s(H.cW,[H.ck,H.cm])
t(H.cl,H.ck)
t(H.c1,H.cl)
t(H.cn,H.cm)
t(H.cX,H.cn)
s(H.cX,[H.ft,H.fu,H.fv,H.fw,H.fx,H.cY,H.fy])
t(P.ip,P.iG)
t(P.im,P.iu)
t(P.bR,P.h8)
t(P.eJ,P.bQ)
s(P.bR,[P.f_,P.hK])
t(P.hJ,P.eJ)
s(P.Y,[P.w,P.y])
s(P.ap,[P.bt,P.f1])
s(W.d,[W.x,W.eQ,W.aC,W.co,W.aF,W.al,W.cq,W.hW,W.ch,P.en,P.bk])
s(W.x,[W.I,W.aW,W.ci])
s(W.I,[W.p,P.m])
s(W.p,[W.cA,W.eh,W.bM,W.aV,W.bl,W.ab,W.eU,W.fS,W.bw,W.d9,W.hc,W.hd,W.ca])
s(W.ar,[W.bS,W.ev,W.ew])
t(W.et,W.as)
t(W.bT,W.dm)
t(W.dq,W.dp)
t(W.cK,W.dq)
t(W.ds,W.dr)
t(W.eD,W.ds)
t(W.at,W.cC)
t(W.dv,W.du)
t(W.eP,W.dv)
t(W.dy,W.dx)
t(W.bn,W.dy)
t(W.b9,W.l)
s(W.b9,[W.ay,W.W,W.am])
t(W.fn,W.dD)
t(W.fp,W.dE)
t(W.dG,W.dF)
t(W.fr,W.dG)
t(W.dJ,W.dI)
t(W.c3,W.dJ)
t(W.dN,W.dM)
t(W.fI,W.dN)
t(W.fP,W.dO)
t(W.cp,W.co)
t(W.h1,W.cp)
t(W.dR,W.dQ)
t(W.h2,W.dR)
t(W.h5,W.dV)
t(W.dZ,W.dY)
t(W.hf,W.dZ)
t(W.cr,W.cq)
t(W.hg,W.cr)
t(W.e1,W.e0)
t(W.hm,W.e1)
t(W.aK,W.W)
t(W.e6,W.e5)
t(W.i5,W.e6)
t(W.dn,W.cL)
t(W.e8,W.e7)
t(W.ik,W.e8)
t(W.ea,W.e9)
t(W.dH,W.ea)
t(W.ec,W.eb)
t(W.ix,W.ec)
t(W.ee,W.ed)
t(W.iy,W.ee)
t(W.i6,W.i3)
t(W.i7,P.h7)
t(W.jc,W.i7)
t(W.i8,P.c9)
t(W.iA,W.dP)
t(P.ad,P.io)
t(P.dA,P.dz)
t(P.fb,P.dA)
t(P.dL,P.dK)
t(P.fD,P.dL)
t(P.c5,P.m)
t(P.dX,P.dW)
t(P.hb,P.dX)
t(P.e3,P.e2)
t(P.ho,P.e3)
t(P.el,P.dl)
t(P.fE,P.bk)
t(P.dT,P.dS)
t(P.h3,P.dT)
s(E.eo,[Z.cE,A.c6])
s(D.D,[D.f2,D.f3,D.R])
t(U.c0,D.er)
s(U.c0,[U.cI,U.d5])
t(A.eB,A.c6)
s(A.dd,[A.ht,A.hw,A.hx,A.hz,A.hu,A.cd,A.hv,A.ce,A.hy,A.hB,A.hC,A.cf,A.hD,A.hE])
t(F.h0,F.eO)
t(F.hs,F.fc)
t(F.hR,F.hS)
t(F.fB,F.hT)
t(O.eA,O.bx)
s(V.cV,[V.a3,V.cc])
t(X.eW,X.da)
s(V.aX,[V.ey,V.eX,V.eY,V.fH])
u(H.df,H.dg)
u(H.ck,P.t)
u(H.cl,H.bm)
u(H.cm,P.t)
u(H.cn,H.bm)
u(P.dC,P.t)
u(W.dm,W.eu)
u(W.dp,P.t)
u(W.dq,W.v)
u(W.dr,P.t)
u(W.ds,W.v)
u(W.du,P.t)
u(W.dv,W.v)
u(W.dx,P.t)
u(W.dy,W.v)
u(W.dD,P.V)
u(W.dE,P.V)
u(W.dF,P.t)
u(W.dG,W.v)
u(W.dI,P.t)
u(W.dJ,W.v)
u(W.dM,P.t)
u(W.dN,W.v)
u(W.dO,P.V)
u(W.co,P.t)
u(W.cp,W.v)
u(W.dQ,P.t)
u(W.dR,W.v)
u(W.dV,P.V)
u(W.dY,P.t)
u(W.dZ,W.v)
u(W.cq,P.t)
u(W.cr,W.v)
u(W.e0,P.t)
u(W.e1,W.v)
u(W.e5,P.t)
u(W.e6,W.v)
u(W.e7,P.t)
u(W.e8,W.v)
u(W.e9,P.t)
u(W.ea,W.v)
u(W.eb,P.t)
u(W.ec,W.v)
u(W.ed,P.t)
u(W.ee,W.v)
u(P.dz,P.t)
u(P.dA,W.v)
u(P.dK,P.t)
u(P.dL,W.v)
u(P.dW,P.t)
u(P.dX,W.v)
u(P.e2,P.t)
u(P.e3,W.v)
u(P.dl,P.V)
u(P.dS,P.t)
u(P.dT,W.v)})();(function constants(){var u=hunkHelpers.makeConstList
C.m=W.aV.prototype
C.D=W.bl.prototype
C.E=W.ab.prototype
C.H=J.a.prototype
C.a=J.aw.prototype
C.e=J.cP.prototype
C.b=J.bo.prototype
C.c=J.b4.prototype
C.I=J.b5.prototype
C.M=W.c3.prototype
C.q=J.fG.prototype
C.f=P.bu.prototype
C.N=W.bw.prototype
C.r=W.d9.prototype
C.l=J.ba.prototype
C.t=W.aK.prototype
C.u=W.ch.prototype
C.n=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.v=function() {
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
C.A=function(getTagFallback) {
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
C.w=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.x=function(hooks) {
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
C.z=function(hooks) {
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
C.y=function(hooks) {
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
C.o=function(hooks) { return hooks; }

C.B=new P.fF()
C.h=new P.hJ()
C.C=new P.hK()
C.d=new P.ip()
C.i=new P.aN(0)
C.F=new P.aN(5e6)
C.G=new P.f0("element",!0,!1,!1,!1)
C.J=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.K=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.L=H.c(u([]),[P.e])
C.p=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.y])
C.j=H.c(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.k=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])})()
var v={mangledGlobalNames:{y:"int",w:"double",Y:"num",e:"String",L:"bool",E:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.E},{func:1,ret:-1},{func:1,ret:-1,args:[W.W]},{func:1,ret:-1,opt:[D.D]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.y,[P.i,E.a1]]},{func:1,ret:P.E,args:[D.D]},{func:1,ret:-1,args:[W.l]},{func:1,ret:-1,args:[W.am]},{func:1,ret:P.E,args:[F.U]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.E,args:[,,]},{func:1,ret:P.e,args:[P.y]},{func:1,ret:P.L,args:[W.x]},{func:1,ret:P.E,args:[,]},{func:1,args:[,]},{func:1,ret:P.L,args:[W.a8]},{func:1,ret:P.L,args:[P.e]},{func:1,ret:P.E,args:[{func:1,ret:-1,args:[D.D]}]},{func:1,ret:P.L,args:[W.I,P.e,P.e,W.bb]},{func:1,ret:-1,args:[W.ay]},{func:1,ret:P.w},{func:1,ret:[P.ah,,],args:[,]},{func:1,args:[W.l]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.x,W.x]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.E,args:[{func:1,ret:-1}]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.E,args:[P.Y]},{func:1,ret:P.E,args:[,],opt:[P.a5]},{func:1,ret:-1,args:[W.aK]},{func:1,ret:V.ac,args:[P.w]},{func:1,ret:P.E,args:[F.af,P.w,P.w]},{func:1,ret:P.E,args:[P.aG]},{func:1,ret:P.E,args:[W.l]},{func:1,ret:P.L,args:[V.aX]},{func:1,ret:W.I,args:[W.x]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aq=0
$.bO=null
$.jC=null
$.jf=!1
$.kw=null
$.kr=null
$.kB=null
$.iM=null
$.iT=null
$.jr=null
$.bz=null
$.cs=null
$.ct=null
$.jg=!1
$.O=C.d
$.a6=[]
$.aO=null
$.j2=null
$.jJ=null
$.jI=null
$.dw=P.jL(P.e,P.b3)
$.jP=null
$.jV=null
$.jW=null
$.k0=null
$.k9=null
$.ke=null
$.kb=null
$.kc=null
$.kd=null
$.ka=null
$.jU=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mt","kF",function(){return H.kv("_$dart_dartClosure")})
u($,"mu","jx",function(){return H.kv("_$dart_js")})
u($,"mz","kG",function(){return H.aI(H.hq({
toString:function(){return"$receiver$"}}))})
u($,"mA","kH",function(){return H.aI(H.hq({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mB","kI",function(){return H.aI(H.hq(null))})
u($,"mC","kJ",function(){return H.aI(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mF","kM",function(){return H.aI(H.hq(void 0))})
u($,"mG","kN",function(){return H.aI(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mE","kL",function(){return H.aI(H.k7(null))})
u($,"mD","kK",function(){return H.aI(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mI","kP",function(){return H.aI(H.k7(void 0))})
u($,"mH","kO",function(){return H.aI(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mX","jy",function(){return P.lA()})
u($,"mZ","kU",function(){return P.lr("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"mY","kT",function(){return P.jM(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"mQ","kS",function(){return Z.ag(0)})
u($,"mK","kQ",function(){return Z.ag(511)})
u($,"mS","aU",function(){return Z.ag(1)})
u($,"mR","bI",function(){return Z.ag(2)})
u($,"mM","bH",function(){return Z.ag(4)})
u($,"mT","bJ",function(){return Z.ag(8)})
u($,"mU","bK",function(){return Z.ag(16)})
u($,"mN","cx",function(){return Z.ag(32)})
u($,"mO","cy",function(){return Z.ag(64)})
u($,"mP","kR",function(){return Z.ag(96)})
u($,"mV","bL",function(){return Z.ag(128)})
u($,"mL","bG",function(){return Z.ag(256)})
u($,"ms","kE",function(){return new V.eK(1e-9)})
u($,"mr","P",function(){return $.kE()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.c2,ArrayBufferView:H.c2,Float32Array:H.c1,Float64Array:H.c1,Int16Array:H.ft,Int32Array:H.fu,Int8Array:H.fv,Uint16Array:H.fw,Uint32Array:H.fx,Uint8ClampedArray:H.cY,CanvasPixelArray:H.cY,Uint8Array:H.fy,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLImageElement:W.p,HTMLInputElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableColElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.eg,HTMLAnchorElement:W.cA,HTMLAreaElement:W.eh,HTMLBaseElement:W.bM,Blob:W.cC,HTMLBodyElement:W.aV,HTMLCanvasElement:W.bl,CDATASection:W.aW,CharacterData:W.aW,Comment:W.aW,ProcessingInstruction:W.aW,Text:W.aW,CSSNumericValue:W.bS,CSSUnitValue:W.bS,CSSPerspective:W.et,CSSCharsetRule:W.K,CSSConditionRule:W.K,CSSFontFaceRule:W.K,CSSGroupingRule:W.K,CSSImportRule:W.K,CSSKeyframeRule:W.K,MozCSSKeyframeRule:W.K,WebKitCSSKeyframeRule:W.K,CSSKeyframesRule:W.K,MozCSSKeyframesRule:W.K,WebKitCSSKeyframesRule:W.K,CSSMediaRule:W.K,CSSNamespaceRule:W.K,CSSPageRule:W.K,CSSRule:W.K,CSSStyleRule:W.K,CSSSupportsRule:W.K,CSSViewportRule:W.K,CSSStyleDeclaration:W.bT,MSStyleCSSProperties:W.bT,CSS2Properties:W.bT,CSSImageValue:W.ar,CSSKeywordValue:W.ar,CSSPositionValue:W.ar,CSSResourceValue:W.ar,CSSURLImageValue:W.ar,CSSStyleValue:W.ar,CSSMatrixComponent:W.as,CSSRotation:W.as,CSSScale:W.as,CSSSkew:W.as,CSSTranslation:W.as,CSSTransformComponent:W.as,CSSTransformValue:W.ev,CSSUnparsedValue:W.ew,DataTransferItemList:W.ez,HTMLDivElement:W.ab,DOMException:W.eC,ClientRectList:W.cK,DOMRectList:W.cK,DOMRectReadOnly:W.cL,DOMStringList:W.eD,DOMTokenList:W.eE,Element:W.I,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.at,FileList:W.eP,FileWriter:W.eQ,HTMLFormElement:W.eU,Gamepad:W.au,History:W.eZ,HTMLCollection:W.bn,HTMLFormControlsCollection:W.bn,HTMLOptionsCollection:W.bn,KeyboardEvent:W.ay,Location:W.cU,MediaList:W.fm,MIDIInputMap:W.fn,MIDIOutputMap:W.fp,MimeType:W.az,MimeTypeArray:W.fr,PointerEvent:W.W,MouseEvent:W.W,DragEvent:W.W,Document:W.x,DocumentFragment:W.x,HTMLDocument:W.x,ShadowRoot:W.x,XMLDocument:W.x,DocumentType:W.x,Node:W.x,NodeList:W.c3,RadioNodeList:W.c3,Plugin:W.aA,PluginArray:W.fI,RTCStatsReport:W.fP,HTMLSelectElement:W.fS,SourceBuffer:W.aC,SourceBufferList:W.h1,SpeechGrammar:W.aD,SpeechGrammarList:W.h2,SpeechRecognitionResult:W.aE,Storage:W.h5,CSSStyleSheet:W.ak,StyleSheet:W.ak,HTMLTableCellElement:W.bw,HTMLTableDataCellElement:W.bw,HTMLTableHeaderCellElement:W.bw,HTMLTableElement:W.d9,HTMLTableRowElement:W.hc,HTMLTableSectionElement:W.hd,HTMLTemplateElement:W.ca,TextTrack:W.aF,TextTrackCue:W.al,VTTCue:W.al,TextTrackCueList:W.hf,TextTrackList:W.hg,TimeRanges:W.hi,Touch:W.aH,TouchEvent:W.am,TouchList:W.hm,TrackDefaultList:W.hn,CompositionEvent:W.b9,FocusEvent:W.b9,TextEvent:W.b9,UIEvent:W.b9,URL:W.hI,VideoTrackList:W.hW,WheelEvent:W.aK,Window:W.ch,DOMWindow:W.ch,Attr:W.ci,CSSRuleList:W.i5,ClientRect:W.dn,DOMRect:W.dn,GamepadList:W.ik,NamedNodeMap:W.dH,MozNamedAttrMap:W.dH,SpeechRecognitionResultList:W.ix,StyleSheetList:W.iy,SVGLength:P.aQ,SVGLengthList:P.fb,SVGNumber:P.aR,SVGNumberList:P.fD,SVGPointList:P.fJ,SVGScriptElement:P.c5,SVGStringList:P.hb,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,SVGTransform:P.aS,SVGTransformList:P.ho,AudioBuffer:P.ek,AudioParamMap:P.el,AudioTrackList:P.en,AudioContext:P.bk,webkitAudioContext:P.bk,BaseAudioContext:P.bk,OfflineAudioContext:P.fE,WebGLBuffer:P.cD,WebGLProgram:P.d2,WebGL2RenderingContext:P.bu,WebGLShader:P.d6,WebGLUniformLocation:P.de,SQLResultSetRowList:P.h3})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.cW.$nativeSuperclassTag="ArrayBufferView"
H.ck.$nativeSuperclassTag="ArrayBufferView"
H.cl.$nativeSuperclassTag="ArrayBufferView"
H.c1.$nativeSuperclassTag="ArrayBufferView"
H.cm.$nativeSuperclassTag="ArrayBufferView"
H.cn.$nativeSuperclassTag="ArrayBufferView"
H.cX.$nativeSuperclassTag="ArrayBufferView"
W.co.$nativeSuperclassTag="EventTarget"
W.cp.$nativeSuperclassTag="EventTarget"
W.cq.$nativeSuperclassTag="EventTarget"
W.cr.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Y.ky,[])
else Y.ky([])})})()
//# sourceMappingURL=test.dart.js.map
