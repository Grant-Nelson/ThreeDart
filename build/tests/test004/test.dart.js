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
a[c]=function(){a[c]=function(){H.mp(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jo"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jo"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jo(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={j8:function j8(){},
f4:function(){return new P.c8("No element")},
lf:function(){return new P.c8("Too many elements")},
o:function o(a){this.a=a},
eJ:function eJ(){},
bq:function bq(){},
bZ:function bZ(a,b,c){var _=this
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
cf:function cf(a,b,c){this.a=a
this.b=b
this.$ti=c},
i_:function i_(a,b,c){this.a=a
this.b=b
this.$ti=c},
bn:function bn(){},
dg:function dg(){},
df:function df(){},
bF:function(a){var u,t=H.z(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
m5:function(a){return v.types[H.a_(a)]},
mc:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.P(a).$iA},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.as(a)
if(typeof u!=="string")throw H.f(H.bg(a))
return u},
c4:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bt:function(a){return H.lk(a)+H.jk(H.bh(a),0,null)},
lk:function(a){var u,t,s,r,q,p,o,n=J.P(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.H||!!n.$ibc){r=C.n(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.bF(t.length>1&&C.c.aa(t,0)===36?C.c.aG(t,1):t)},
jZ:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
ls:function(a){var u,t,s,r=H.c([],[P.y])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.H)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bg(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.av(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.f(H.bg(s))}return H.jZ(r)},
k_:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bg(s))
if(s<0)throw H.f(H.bg(s))
if(s>65535)return H.ls(a)}return H.jZ(a)},
ja:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.av(u,10))>>>0,56320|u&1023)}throw H.f(P.aF(a,0,1114111,null,null))},
bs:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lr:function(a){var u=H.bs(a).getFullYear()+0
return u},
lp:function(a){var u=H.bs(a).getMonth()+1
return u},
ll:function(a){var u=H.bs(a).getDate()+0
return u},
lm:function(a){var u=H.bs(a).getHours()+0
return u},
lo:function(a){var u=H.bs(a).getMinutes()+0
return u},
lq:function(a){var u=H.bs(a).getSeconds()+0
return u},
ln:function(a){var u=H.bs(a).getMilliseconds()+0
return u},
bi:function(a){throw H.f(H.bg(a))},
k:function(a,b){if(a==null)J.bk(a)
throw H.f(H.ct(a,b))},
ct:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.at(!0,b,s,null)
u=H.a_(J.bk(a))
if(!(b<0)){if(typeof u!=="number")return H.bi(u)
t=b>=u}else t=!0
if(t)return P.M(b,a,s,null,u)
return P.d3(b,s)},
m_:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bu(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bu(a,c,!0,b,"end",u)
return new P.at(!0,b,"end",null)},
bg:function(a){return new P.at(!0,a,null,null)},
f:function(a){var u
if(a==null)a=new P.d_()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kF})
u.name=""}else u.toString=H.kF
return u},
kF:function(){return J.as(this.dartException)},
aa:function(a){throw H.f(a)},
H:function(a){throw H.f(P.b3(a))},
aM:function(a){var u,t,s,r,q,p
a=H.kE(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hq(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hr:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
k9:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jU:function(a,b){return new H.fD(a,b==null?null:b.method)},
j9:function(a,b){var u=b==null,t=u?null:b.method
return new H.f9(a,t,u?null:b.receiver)},
ad:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.j0(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.av(t,16)&8191)===10)switch(s){case 438:return f.$1(H.j9(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jU(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kI()
q=$.kJ()
p=$.kK()
o=$.kL()
n=$.kO()
m=$.kP()
l=$.kN()
$.kM()
k=$.kR()
j=$.kQ()
i=r.U(u)
if(i!=null)return f.$1(H.j9(H.z(u),i))
else{i=q.U(u)
if(i!=null){i.method="call"
return f.$1(H.j9(H.z(u),i))}else{i=p.U(u)
if(i==null){i=o.U(u)
if(i==null){i=n.U(u)
if(i==null){i=m.U(u)
if(i==null){i=l.U(u)
if(i==null){i=o.U(u)
if(i==null){i=k.U(u)
if(i==null){i=j.U(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jU(H.z(u),i))}}return f.$1(new H.hI(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.d8()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.at(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.d8()
return a},
bD:function(a){var u
if(a==null)return new H.dU(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dU(a)},
m2:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.I(0,a[u],a[t])}return b},
mb:function(a,b,c,d,e,f){H.n(a,"$ib6")
switch(H.a_(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.a2("Unsupported number of arguments for wrapped closure"))},
bC:function(a,b){var u
H.a_(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mb)
a.$identity=u
return u},
l7:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.h5().constructor.prototype):Object.create(new H.bN(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.au
if(typeof t!=="number")return t.P()
$.au=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.jH(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.m5,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.jF:H.j3
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.f("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.jH(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
l4:function(a,b,c,d){var u=H.j3
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jH:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.l6(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.l4(t,!r,u,b)
if(t===0){r=$.au
if(typeof r!=="number")return r.P()
$.au=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bO
return new Function(r+H.i(q==null?$.bO=H.er("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.au
if(typeof r!=="number")return r.P()
$.au=r+1
o+=r
r="return function("+o+"){return this."
q=$.bO
return new Function(r+H.i(q==null?$.bO=H.er("self"):q)+"."+H.i(u)+"("+o+");}")()},
l5:function(a,b,c,d){var u=H.j3,t=H.jF
switch(b?-1:a){case 0:throw H.f(H.lw("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
l6:function(a,b){var u,t,s,r,q,p,o,n=$.bO
if(n==null)n=$.bO=H.er("self")
u=$.jE
if(u==null)u=$.jE=H.er("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.l5(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.au
if(typeof u!=="number")return u.P()
$.au=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.au
if(typeof u!=="number")return u.P()
$.au=u+1
return new Function(n+u+"}")()},
jo:function(a,b,c,d,e,f,g){return H.l7(a,b,H.a_(c),d,!!e,!!f,g)},
j3:function(a){return a.a},
jF:function(a){return a.c},
er:function(a){var u,t,s,r=new H.bN("self","target","receiver","name"),q=J.j6(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
D:function(a){if(a==null)H.lU("boolean expression must not be null")
return a},
z:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.ar(a,"String"))},
n3:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.ar(a,"double"))},
mh:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.ar(a,"num"))},
jl:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.ar(a,"bool"))},
a_:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.ar(a,"int"))},
kC:function(a,b){throw H.f(H.ar(a,H.bF(H.z(b).substring(2))))},
mj:function(a,b){throw H.f(H.l3(a,H.bF(H.z(b).substring(2))))},
n:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.P(a)[b])return a
H.kC(a,b)},
eh:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else u=!0
if(u)return a
H.mj(a,b)},
ju:function(a){if(a==null)return a
if(!!J.P(a).$ib)return a
throw H.f(H.ar(a,"List<dynamic>"))},
md:function(a,b){var u
if(a==null)return a
u=J.P(a)
if(!!u.$ib)return a
if(u[b])return a
H.kC(a,b)},
kw:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a_(u)]
else return a.$S()}return},
eg:function(a,b){var u
if(typeof a=="function")return!0
u=H.kw(J.P(a))
if(u==null)return!1
return H.kn(u,null,b,null)},
j:function(a,b){var u,t
if(a==null)return a
if($.jh)return a
$.jh=!0
try{if(H.eg(a,b))return a
u=H.iY(b)
t=H.ar(a,u)
throw H.f(t)}finally{$.jh=!1}},
jp:function(a,b){if(a!=null&&!H.jn(a,b))H.aa(H.ar(a,H.iY(b)))
return a},
ar:function(a,b){return new H.hs("TypeError: "+P.cL(a)+": type '"+H.kr(a)+"' is not a subtype of type '"+b+"'")},
l3:function(a,b){return new H.es("CastError: "+P.cL(a)+": type '"+H.kr(a)+"' is not a subtype of type '"+b+"'")},
kr:function(a){var u,t=J.P(a)
if(!!t.$ibP){u=H.kw(t)
if(u!=null)return H.iY(u)
return"Closure"}return H.bt(a)},
lU:function(a){throw H.f(new H.i0(a))},
mp:function(a){throw H.f(new P.ez(H.z(a)))},
lw:function(a){return new H.fS(a)},
kx:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bh:function(a){if(a==null)return
return a.$ti},
n4:function(a,b,c){return H.bE(a["$a"+H.i(c)],H.bh(b))},
cu:function(a,b,c,d){var u
H.z(c)
H.a_(d)
u=H.bE(a["$a"+H.i(c)],H.bh(b))
return u==null?null:u[d]},
a9:function(a,b,c){var u
H.z(b)
H.a_(c)
u=H.bE(a["$a"+H.i(b)],H.bh(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.a_(b)
u=H.bh(a)
return u==null?null:u[b]},
iY:function(a){return H.bf(a,null)},
bf:function(a,b){var u,t
H.q(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bF(a[0].name)+H.jk(a,1,b)
if(typeof a=="function")return H.bF(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a_(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.k(b,t)
return H.i(b[t])}if('func' in a)return H.lN(a,b)
if('futureOr' in a)return"FutureOr<"+H.bf("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lN:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.e]
H.q(a0,"$ib",b,"$ab")
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
if(m!=null&&m!==P.F)p+=" extends "+H.bf(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bf(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bf(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bf(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.m1(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.z(b[h])
j=j+i+H.bf(e[d],a0)+(" "+H.i(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
jk:function(a,b,c){var u,t,s,r,q,p
H.q(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.bw("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bf(p,c)}return"<"+u.i(0)+">"},
bE:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
jm:function(a,b,c,d){var u,t
H.z(b)
H.ju(c)
H.z(d)
if(a==null)return!1
u=H.bh(a)
t=J.P(a)
if(t[b]==null)return!1
return H.ku(H.bE(t[d],u),null,c,null)},
q:function(a,b,c,d){H.z(b)
H.ju(c)
H.z(d)
if(a==null)return a
if(H.jm(a,b,c,d))return a
throw H.f(H.ar(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bF(b.substring(2))+H.jk(c,0,null),v.mangledGlobalNames)))},
ku:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.am(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.am(a[t],b,c[t],d))return!1
return!0},
n1:function(a,b,c){return a.apply(b,H.bE(J.P(b)["$a"+H.i(c)],H.bh(b)))},
kz:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="F"||a.name==="E"||a===-1||a===-2||H.kz(u)}return!1},
jn:function(a,b){var u,t
if(a==null)return b==null||b.name==="F"||b.name==="E"||b===-1||b===-2||H.kz(b)
if(b==null||b===-1||b.name==="F"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jn(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eg(a,b)}u=J.P(a).constructor
t=H.bh(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.am(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.jn(a,b))throw H.f(H.ar(a,H.iY(b)))
return a},
am:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="F"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="F"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.am(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="E")return!0
if('func' in c)return H.kn(a,b,c,d)
if('func' in a)return c.name==="b6"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.am("type" in a?a.type:l,b,s,d)
else if(H.am(a,b,s,d))return!0
else{if(!('$i'+"bW" in t.prototype))return!1
r=t.prototype["$a"+"bW"]
q=H.bE(r,u?a.slice(1):l)
return H.am(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.ku(H.bE(m,u),b,p,d)},
kn:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.am(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.am(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.am(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.am(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.mg(h,b,g,d)},
mg:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.am(c[s],d,a[s],b))return!1}return!0},
n2:function(a,b,c){Object.defineProperty(a,H.z(b),{value:c,enumerable:false,writable:true,configurable:true})},
me:function(a){var u,t,s,r,q=H.z($.ky.$1(a)),p=$.iO[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iV[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.z($.kt.$2(a,q))
if(q!=null){p=$.iO[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iV[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.iX(u)
$.iO[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.iV[q]=u
return u}if(s==="-"){r=H.iX(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kB(a,u)
if(s==="*")throw H.f(P.ka(q))
if(v.leafTags[q]===true){r=H.iX(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kB(a,u)},
kB:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jv(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iX:function(a){return J.jv(a,!1,null,!!a.$iA)},
mf:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iX(u)
else return J.jv(u,c,null,null)},
m9:function(){if(!0===$.jt)return
$.jt=!0
H.ma()},
ma:function(){var u,t,s,r,q,p,o,n
$.iO=Object.create(null)
$.iV=Object.create(null)
H.m8()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kD.$1(q)
if(p!=null){o=H.mf(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
m8:function(){var u,t,s,r,q,p,o=C.v()
o=H.bB(C.w,H.bB(C.x,H.bB(C.o,H.bB(C.o,H.bB(C.y,H.bB(C.z,H.bB(C.A(C.n),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.ky=new H.iS(r)
$.kt=new H.iT(q)
$.kD=new H.iU(p)},
bB:function(a,b){return a(b)||b},
lh:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(new P.eX("Illegal RegExp pattern ("+String(r)+")",a))},
mm:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
m0:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kE:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jx:function(a,b,c){var u=H.mn(a,b,c)
return u},
mn:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kE(b),'g'),H.m0(c))},
hq:function hq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fD:function fD(a,b){this.a=a
this.b=b},
f9:function f9(a,b,c){this.a=a
this.b=b
this.c=c},
hI:function hI(a){this.a=a},
j0:function j0(a){this.a=a},
dU:function dU(a){this.a=a
this.b=null},
bP:function bP(){},
hf:function hf(){},
h5:function h5(){},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hs:function hs(a){this.a=a},
es:function es(a){this.a=a},
fS:function fS(a){this.a=a},
i0:function i0(a){this.a=a},
aB:function aB(a){var _=this
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
iS:function iS(a){this.a=a},
iT:function iT(a){this.a=a},
iU:function iU(a){this.a=a},
f8:function f8(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jg:function(a){return a},
be:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.ct(b,a))},
lM:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.m_(a,b,c))
return b},
c2:function c2(){},
cW:function cW(){},
c1:function c1(){},
cX:function cX(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){},
cY:function cY(){},
fz:function fz(){},
cj:function cj(){},
ck:function ck(){},
cl:function cl(){},
cm:function cm(){},
m1:function(a){return J.jN(a?Object.keys(a):[],null)},
mi:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jv:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iR:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jt==null){H.m9()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.ka("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jz()]
if(r!=null)return r
r=H.me(a)
if(r!=null)return r
if(typeof a=="function")return C.I
u=Object.getPrototypeOf(a)
if(u==null)return C.q
if(u===Object.prototype)return C.q
if(typeof s=="function"){Object.defineProperty(s,$.jz(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
lg:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.j2(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.aF(a,0,4294967295,"length",null))
return J.jN(new Array(a),b)},
jN:function(a,b){return J.j6(H.c(a,[b]))},
j6:function(a){H.ju(a)
a.fixed$length=Array
return a},
P:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cP.prototype
return J.f6.prototype}if(typeof a=="string")return J.b7.prototype
if(a==null)return J.f7.prototype
if(typeof a=="boolean")return J.f5.prototype
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b8.prototype
return a}if(a instanceof P.F)return a
return J.iR(a)},
jq:function(a){if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b8.prototype
return a}if(a instanceof P.F)return a
return J.iR(a)},
iQ:function(a){if(a==null)return a
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b8.prototype
return a}if(a instanceof P.F)return a
return J.iR(a)},
m3:function(a){if(typeof a=="number")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.bc.prototype
return a},
m4:function(a){if(typeof a=="number")return J.bp.prototype
if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.bc.prototype
return a},
jr:function(a){if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.bc.prototype
return a},
js:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b8.prototype
return a}if(a instanceof P.F)return a
return J.iR(a)},
T:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).n(a,b)},
jB:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.m4(a).J(a,b)},
kX:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.m3(a).u(a,b)},
kY:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mc(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jq(a).m(a,b)},
kZ:function(a,b,c,d){return J.js(a).ej(a,b,c,d)},
j1:function(a,b){return J.iQ(a).t(a,b)},
l_:function(a,b){return J.iQ(a).E(a,b)},
l0:function(a){return J.js(a).geo(a)},
cx:function(a){return J.P(a).gC(a)},
bj:function(a){return J.iQ(a).gG(a)},
bk:function(a){return J.jq(a).gk(a)},
jC:function(a){return J.iQ(a).f0(a)},
l1:function(a,b,c){return J.jr(a).ar(a,b,c)},
l2:function(a){return J.jr(a).fa(a)},
as:function(a){return J.P(a).i(a)},
a:function a(){},
f5:function f5(){},
f7:function f7(){},
cQ:function cQ(){},
fH:function fH(){},
bc:function bc(){},
b8:function b8(){},
aA:function aA(a){this.$ti=a},
j7:function j7(a){this.$ti=a},
ae:function ae(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bp:function bp(){},
cP:function cP(){},
f6:function f6(){},
b7:function b7(){}},P={
lC:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lV()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bC(new P.i2(s),1)).observe(u,{childList:true})
return new P.i1(s,u,t)}else if(self.setImmediate!=null)return P.lW()
return P.lX()},
lD:function(a){self.scheduleImmediate(H.bC(new P.i3(H.j(a,{func:1,ret:-1})),0))},
lE:function(a){self.setImmediate(H.bC(new P.i4(H.j(a,{func:1,ret:-1})),0))},
lF:function(a){P.jc(C.h,H.j(a,{func:1,ret:-1}))},
jc:function(a,b){var u
H.j(b,{func:1,ret:-1})
u=C.e.ad(a.a,1000)
return P.lK(u<0?0:u,b)},
k8:function(a,b){var u
H.j(b,{func:1,ret:-1,args:[P.aK]})
u=C.e.ad(a.a,1000)
return P.lL(u<0?0:u,b)},
lK:function(a,b){var u=new P.e_()
u.cN(a,b)
return u},
lL:function(a,b){var u=new P.e_()
u.cO(a,b)
return u},
lG:function(a,b){var u,t,s
b.a=1
try{a.cf(new P.id(b),new P.ie(b),null)}catch(s){u=H.ad(s)
t=H.bD(s)
P.mk(new P.ig(b,u,t))}},
ki:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.n(a.c,"$ial")
if(u>=4){t=b.aW()
b.a=a.a
b.c=a.c
P.ci(b,t)}else{t=H.n(b.c,"$iaP")
b.a=2
b.c=a
a.bE(t)}},
ci:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.n(g.c,"$ia0")
g=g.b
r=s.a
q=s.b
g.toString
P.iJ(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.ci(h.a,b)}g=h.a
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
if(m){H.n(o,"$ia0")
g=g.b
r=o.a
q=o.b
g.toString
P.iJ(i,i,g,r,q)
return}l=$.O
if(l!=n)$.O=n
else l=i
g=b.c
if(g===8)new P.ik(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.ij(u,b,o).$0()}else if((g&2)!==0)new P.ii(h,u,b).$0()
if(l!=null)$.O=l
g=u.b
if(!!J.P(g).$ibW){if(g.a>=4){k=H.n(q.c,"$iaP")
q.c=null
b=q.au(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.ki(g,q)
return}}j=b.b
k=H.n(j.c,"$iaP")
j.c=null
b=j.au(k)
g=u.a
r=u.b
if(!g){H.B(r,H.u(j,0))
j.a=4
j.c=r}else{H.n(r,"$ia0")
j.a=8
j.c=r}h.a=j
g=j}},
lQ:function(a,b){if(H.eg(a,{func:1,args:[P.F,P.a7]}))return H.j(a,{func:1,ret:null,args:[P.F,P.a7]})
if(H.eg(a,{func:1,args:[P.F]}))return H.j(a,{func:1,ret:null,args:[P.F]})
throw H.f(P.j2(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lP:function(){var u,t
for(;u=$.bA,u!=null;){$.cs=null
t=u.b
$.bA=t
if(t==null)$.cr=null
u.a.$0()}},
lT:function(){$.ji=!0
try{P.lP()}finally{$.cs=null
$.ji=!1
if($.bA!=null)$.jA().$1(P.kv())}},
kq:function(a){var u=new P.dk(H.j(a,{func:1,ret:-1}))
if($.bA==null){$.bA=$.cr=u
if(!$.ji)$.jA().$1(P.kv())}else $.cr=$.cr.b=u},
lS:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
u=$.bA
if(u==null){P.kq(a)
$.cs=$.cr
return}t=new P.dk(a)
s=$.cs
if(s==null){t.b=u
$.bA=$.cs=t}else{t.b=s.b
$.cs=s.b=t
if(t.b==null)$.cr=t}},
mk:function(a){var u,t=null,s={func:1,ret:-1}
H.j(a,s)
u=$.O
if(C.d===u){P.iL(t,t,C.d,a)
return}u.toString
P.iL(t,t,u,H.j(u.b_(a),s))},
k7:function(a,b){var u,t={func:1,ret:-1}
H.j(b,t)
u=$.O
if(u===C.d){u.toString
return P.jc(a,b)}return P.jc(a,H.j(u.b_(b),t))},
lA:function(a,b){var u,t,s={func:1,ret:-1,args:[P.aK]}
H.j(b,s)
u=$.O
if(u===C.d){u.toString
return P.k8(a,b)}t=u.bN(b,P.aK)
$.O.toString
return P.k8(a,H.j(t,s))},
iJ:function(a,b,c,d,e){var u={}
u.a=d
P.lS(new P.iK(u,e))},
ko:function(a,b,c,d,e){var u,t
H.j(d,{func:1,ret:e})
t=$.O
if(t===c)return d.$0()
$.O=c
u=t
try{t=d.$0()
return t}finally{$.O=u}},
kp:function(a,b,c,d,e,f,g){var u,t
H.j(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.O
if(t===c)return d.$1(e)
$.O=c
u=t
try{t=d.$1(e)
return t}finally{$.O=u}},
lR:function(a,b,c,d,e,f,g,h,i){var u,t
H.j(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.O
if(t===c)return d.$2(e,f)
$.O=c
u=t
try{t=d.$2(e,f)
return t}finally{$.O=u}},
iL:function(a,b,c,d){var u
H.j(d,{func:1,ret:-1})
u=C.d!==c
if(u)d=!(!u||!1)?c.b_(d):c.ep(d,-1)
P.kq(d)},
i2:function i2(a){this.a=a},
i1:function i1(a,b,c){this.a=a
this.b=b
this.c=c},
i3:function i3(a){this.a=a},
i4:function i4(a){this.a=a},
e_:function e_(){this.c=0},
iF:function iF(a,b){this.a=a
this.b=b},
iE:function iE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aP:function aP(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
al:function al(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
ic:function ic(a,b){this.a=a
this.b=b},
ih:function ih(a,b){this.a=a
this.b=b},
id:function id(a){this.a=a},
ie:function ie(a){this.a=a},
ig:function ig(a,b,c){this.a=a
this.b=b
this.c=c},
ik:function ik(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
il:function il(a){this.a=a},
ij:function ij(a,b,c){this.a=a
this.b=b
this.c=c},
ii:function ii(a,b,c){this.a=a
this.b=b
this.c=c},
dk:function dk(a){this.a=a
this.b=null},
h8:function h8(){},
ha:function ha(a,b){this.a=a
this.b=b},
hb:function hb(a,b){this.a=a
this.b=b},
c9:function c9(){},
h9:function h9(){},
aK:function aK(){},
a0:function a0(a,b){this.a=a
this.b=b},
iI:function iI(){},
iK:function iK(a,b){this.a=a
this.b=b},
ir:function ir(){},
it:function it(a,b,c){this.a=a
this.b=b
this.c=c},
is:function is(a,b){this.a=a
this.b=b},
iu:function iu(a,b,c){this.a=a
this.b=b
this.c=c},
jO:function(a,b){return new H.aB([a,b])},
li:function(a){return H.m2(a,new H.aB([null,null]))},
cT:function(a){return new P.ip([a])},
jf:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lJ:function(a,b,c){var u=new P.dB(a,b,[c])
u.c=a.e
return u},
le:function(a,b,c){var u,t
if(P.jj(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.e])
C.a.h($.a8,a)
try{P.lO(a,u)}finally{if(0>=$.a8.length)return H.k($.a8,-1)
$.a8.pop()}t=P.k5(b,H.md(u,"$ih"),", ")+c
return t.charCodeAt(0)==0?t:t},
j5:function(a,b,c){var u,t
if(P.jj(a))return b+"..."+c
u=new P.bw(b)
C.a.h($.a8,a)
try{t=u
t.a=P.k5(t.a,a,", ")}finally{if(0>=$.a8.length)return H.k($.a8,-1)
$.a8.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jj:function(a){var u,t
for(u=$.a8.length,t=0;t<u;++t)if(a===$.a8[t])return!0
return!1},
lO:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.q(b,"$ib",[P.e],"$ab")
u=a.gG(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.p())return
r=H.i(u.gw(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.p()){if(s<=5)return
if(0>=b.length)return H.k(b,-1)
q=b.pop()
if(0>=b.length)return H.k(b,-1)
p=b.pop()}else{o=u.gw(u);++s
if(!u.p()){if(s<=4){C.a.h(b,H.i(o))
return}q=H.i(o)
if(0>=b.length)return H.k(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gw(u);++s
for(;u.p();o=n,n=m){m=u.gw(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.k(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.i(o)
q=H.i(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
jP:function(a,b){var u,t,s=P.cT(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.H)(a),++t)s.h(0,H.B(a[t],b))
return s},
jR:function(a){var u,t={}
if(P.jj(a))return"{...}"
u=new P.bw("")
try{C.a.h($.a8,a)
u.a+="{"
t.a=!0
J.l_(a,new P.fi(t,u))
u.a+="}"}finally{if(0>=$.a8.length)return H.k($.a8,-1)
$.a8.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ip:function ip(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bz:function bz(a){this.a=a
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
W:function W(){},
iw:function iw(){},
dC:function dC(){},
bQ:function bQ(){},
bR:function bR(){},
eL:function eL(){},
f2:function f2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f1:function f1(a){this.a=a},
hL:function hL(){},
hM:function hM(){},
iG:function iG(a){this.b=0
this.c=a},
lc:function(a){if(a instanceof H.bP)return a.i(0)
return"Instance of '"+H.bt(a)+"'"},
lj:function(a,b,c){var u,t
H.B(b,c)
u=J.lg(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.I(u,t,b)
return H.q(u,"$ib",[c],"$ab")},
jQ:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bj(a);u.p();)C.a.h(s,H.B(u.gw(u),c))
if(b)return s
return H.q(J.j6(s),"$ib",t,"$ab")},
jb:function(a){var u,t,s=P.y
H.q(a,"$ih",[s],"$ah")
if(a.constructor===Array){H.q(a,"$iaA",[s],"$aaA")
u=a.length
t=P.k1(0,null,u)
return H.k_(t<u?C.a.cu(a,0,t):a)}return P.ly(a,0,null)},
ly:function(a,b,c){var u,t,s
H.q(a,"$ih",[P.y],"$ah")
u=J.bj(a)
for(t=0;t<b;++t)if(!u.p())throw H.f(P.aF(b,0,t,null,null))
s=[]
for(;u.p();)s.push(u.gw(u))
return H.k_(s)},
lt:function(a){return new H.f8(a,H.lh(a,!1,!0,!1))},
k5:function(a,b,c){var u=J.bj(b)
if(!u.p())return a
if(c.length===0){do a+=H.i(u.gw(u))
while(u.p())}else{a+=H.i(u.gw(u))
for(;u.p();)a=a+c+H.i(u.gw(u))}return a},
km:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.q(a,"$ib",[P.y],"$ab")
if(c===C.f){u=$.kW().b
u=u.test(b)}else u=!1
if(u)return b
t=C.C.er(H.B(b,H.a9(c,"bQ",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.k(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.ja(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
l8:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
l9:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cH:function(a){if(a>=10)return""+a
return"0"+a},
jK:function(a,b){return new P.aR(1e6*b+1000*a)},
cL:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.as(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lc(a)},
j2:function(a,b,c){return new P.at(!0,a,b,c)},
d3:function(a,b){return new P.bu(null,null,!0,a,b,"Value not in range")},
aF:function(a,b,c,d,e){return new P.bu(b,c,!0,a,d,"Invalid value")},
k1:function(a,b,c){if(0>a||a>c)throw H.f(P.aF(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.aF(b,a,c,"end",null))
return b}return c},
k0:function(a,b){if(typeof a!=="number")return a.bb()
if(a<0)throw H.f(P.aF(a,0,null,b,null))},
M:function(a,b,c,d,e){var u=H.a_(e==null?J.bk(b):e)
return new P.f3(u,!0,a,c,"Index out of range")},
ai:function(a){return new P.hJ(a)},
ka:function(a){return new P.hH(a)},
k4:function(a){return new P.c8(a)},
b3:function(a){return new P.eu(a)},
a2:function(a){return new P.dt(a)},
jw:function(a){H.mi(a)},
K:function K(){},
b4:function b4(a,b){this.a=a
this.b=b},
w:function w(){},
aR:function aR(a){this.a=a},
eH:function eH(){},
eI:function eI(){},
b5:function b5(){},
ek:function ek(){},
d_:function d_(){},
at:function at(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bu:function bu(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f3:function f3(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hJ:function hJ(a){this.a=a},
hH:function hH(a){this.a=a},
c8:function c8(a){this.a=a},
eu:function eu(a){this.a=a},
fG:function fG(){},
d8:function d8(){},
ez:function ez(a){this.a=a},
dt:function dt(a){this.a=a},
eX:function eX(a,b){this.a=a
this.b=b},
b6:function b6(){},
y:function y(){},
h:function h(){},
az:function az(){},
b:function b(){},
G:function G(){},
E:function E(){},
Z:function Z(){},
F:function F(){},
a7:function a7(){},
e:function e(){},
bw:function bw(a){this.a=a},
aY:function(a){var u,t,s,r,q
if(a==null)return
u=P.jO(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r){q=H.z(t[r])
u.I(0,q,a[q])}return u},
lY:function(a){var u={}
a.E(0,new P.iM(u))
return u},
iM:function iM(a){this.a=a},
eT:function eT(a,b){this.a=a
this.b=b},
eU:function eU(){},
eV:function eV(){},
iq:function iq(){},
ah:function ah(){},
aU:function aU(){},
fb:function fb(){},
aW:function aW(){},
fE:function fE(){},
fK:function fK(){},
c5:function c5(){},
hc:function hc(){},
m:function m(){},
aX:function aX(){},
hp:function hp(){},
dz:function dz(){},
dA:function dA(){},
dK:function dK(){},
dL:function dL(){},
dW:function dW(){},
dX:function dX(){},
e2:function e2(){},
e3:function e3(){},
em:function em(){},
en:function en(){},
eo:function eo(a){this.a=a},
ep:function ep(){},
bl:function bl(){},
fF:function fF(){},
dl:function dl(){},
cB:function cB(){},
d2:function d2(){},
bv:function bv(){},
d6:function d6(){},
de:function de(){},
h4:function h4(){},
dS:function dS(){},
dT:function dT(){}},W={
jD:function(){var u=document.createElement("a")
return u},
jG:function(){var u=document.createElement("canvas")
return u},
la:function(a,b,c){var u=document.body,t=(u&&C.m).T(u,a,b,c)
t.toString
u=W.x
u=new H.cf(new W.a3(t),H.j(new W.eK(),{func:1,ret:P.K,args:[u]}),[u])
return H.n(u.ga7(u),"$iI")},
lb:function(a){H.n(a,"$id")
return"wheel"},
bU:function(a){var u,t,s,r="element tag unavailable"
try{u=J.js(a)
t=u.gcd(a)
if(typeof t==="string")r=u.gcd(a)}catch(s){H.ad(s)}return r},
io:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kk:function(a,b,c,d){var u=W.io(W.io(W.io(W.io(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Y:function(a,b,c,d,e){var u=W.ks(new W.ib(c),W.l)
if(u!=null&&!0)J.kZ(a,b,u,!1)
return new W.ia(a,b,u,!1,[e])},
kj:function(a){var u=W.jD(),t=window.location
u=new W.bd(new W.iv(u,t))
u.cJ(a)
return u},
lH:function(a,b,c,d){H.n(a,"$iI")
H.z(b)
H.z(c)
H.n(d,"$ibd")
return!0},
lI:function(a,b,c,d){var u,t,s
H.n(a,"$iI")
H.z(b)
H.z(c)
u=H.n(d,"$ibd").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
kl:function(){var u=P.e,t=P.jP(C.i,u),s=H.u(C.i,0),r=H.j(new W.iD(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.iC(t,P.cT(u),P.cT(u),P.cT(u),null)
t.cM(null,new H.fl(C.i,r,[s,u]),q,null)
return t},
ks:function(a,b){var u
H.j(a,{func:1,ret:-1,args:[b]})
u=$.O
if(u===C.d)return a
return u.bN(a,b)},
p:function p(){},
ei:function ei(){},
cy:function cy(){},
ej:function ej(){},
bM:function bM(){},
cA:function cA(){},
b_:function b_(){},
bm:function bm(){},
b0:function b0(){},
bS:function bS(){},
ev:function ev(){},
J:function J(){},
bT:function bT(){},
ew:function ew(){},
av:function av(){},
aw:function aw(){},
ex:function ex(){},
ey:function ey(){},
eB:function eB(){},
af:function af(){},
eE:function eE(){},
cI:function cI(){},
cJ:function cJ(){},
eF:function eF(){},
eG:function eG(){},
i6:function i6(a,b){this.a=a
this.b=b},
I:function I(){},
eK:function eK(){},
l:function l(){},
d:function d(){},
ax:function ax(){},
eR:function eR(){},
eS:function eS(){},
eW:function eW(){},
ay:function ay(){},
f0:function f0(){},
bo:function bo(){},
aC:function aC(){},
cU:function cU(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(a){this.a=a},
fq:function fq(){},
fr:function fr(a){this.a=a},
aD:function aD(){},
fs:function fs(){},
X:function X(){},
a3:function a3(a){this.a=a},
x:function x(){},
c3:function c3(){},
aE:function aE(){},
fJ:function fJ(){},
fQ:function fQ(){},
fR:function fR(a){this.a=a},
fT:function fT(){},
aG:function aG(){},
h2:function h2(){},
aH:function aH(){},
h3:function h3(){},
aI:function aI(){},
h6:function h6(){},
h7:function h7(a){this.a=a},
ao:function ao(){},
bx:function bx(){},
d9:function d9(){},
hd:function hd(){},
he:function he(){},
ca:function ca(){},
aJ:function aJ(){},
ap:function ap(){},
hg:function hg(){},
hh:function hh(){},
hj:function hj(){},
aL:function aL(){},
aq:function aq(){},
hn:function hn(){},
ho:function ho(){},
bb:function bb(){},
hK:function hK(){},
hY:function hY(){},
aO:function aO(){},
cg:function cg(){},
ch:function ch(){},
i7:function i7(){},
dn:function dn(){},
im:function im(){},
dH:function dH(){},
iz:function iz(){},
iA:function iA(){},
i5:function i5(){},
i8:function i8(a){this.a=a},
i9:function i9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
je:function je(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ia:function ia(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ib:function ib(a){this.a=a},
bd:function bd(a){this.a=a},
v:function v(){},
cZ:function cZ(a){this.a=a},
fB:function fB(a){this.a=a},
fA:function fA(a,b,c){this.a=a
this.b=b
this.c=c},
dP:function dP(){},
ix:function ix(){},
iy:function iy(){},
iC:function iC(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iD:function iD(){},
iB:function iB(){},
cM:function cM(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
ac:function ac(){},
iv:function iv(a,b){this.a=a
this.b=b},
e4:function e4(a){this.a=a},
iH:function iH(a){this.a=a},
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
cn:function cn(){},
co:function co(){},
dQ:function dQ(){},
dR:function dR(){},
dV:function dV(){},
dY:function dY(){},
dZ:function dZ(){},
cp:function cp(){},
cq:function cq(){},
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
jI:function(a){var u=new O.U([a])
u.bg(a)
return u},
U:function U(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
c_:function c_(){this.b=this.a=null},
eC:function eC(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
by:function by(){}},E={
aT:function(a,b){var u,t,s,r,q=new E.a1()
q.a=""
q.b=!0
q.scI(0,O.jI(E.a1))
q.y.aE(q.geN(),q.geQ())
q.dy=q.dx=q.db=q.cy=q.cx=q.ch=q.Q=q.z=null
u=q.c
if(u!=b){q.d=q.c=b
q.e=null
if(u!=null)u.gq().H(0,q.gc2())
t=q.c
if(t!=null)t.gq().h(0,q.gc2())
s=new D.R("shape",u,q.c,[F.d7])
s.b=!0
q.a4(s)}if(!J.T(q.r,a)){r=q.r
if(r!=null)r.gq().H(0,q.gc0())
a.gq().h(0,q.gc0())
q.r=a
s=new D.R("mover",r,a,[U.a4])
s.b=!0
q.a4(s)}return q},
lv:function(a,b){var u=new E.fM(a)
u.cD(a,b)
return u},
lz:function(a,b,c,d,e){var u,t,s=J.P(a)
if(!!s.$ibm)return E.k6(a,!0,!0,!0,!1)
u=W.jG()
t=u.style
t.width="100%"
t.height="100%"
s.gbO(a).h(0,u)
return E.k6(u,!0,!0,!0,!1)},
k6:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.db(),j=H.n(C.D.cq(a,"webgl2",P.li(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibv")
if(j==null)H.aa(P.a2("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.lv(j,a)
H.a_(j.getParameter(3379))
H.a_(j.getParameter(34076))
u=new X.dh(a)
t=new X.fa()
t.sdV(P.cT(P.y))
u.b=t
t=new X.ft(u)
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
t=new X.hm(u)
t.f=V.d1()
t.r=V.d1()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sd1(H.c([],[[P.c9,P.F]]))
t=u.z
s=document
r=W.X
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.Y(s,"contextmenu",H.j(u.gdl(),q),!1,r))
t=u.z
p=W.l
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.Y(a,"focus",H.j(u.gdt(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.Y(a,"blur",H.j(u.gdf(),o),!1,p))
t=u.z
n=W.aC
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.Y(s,"keyup",H.j(u.gdz(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.Y(s,"keydown",H.j(u.gdv(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.Y(a,"mousedown",H.j(u.gdC(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.Y(a,"mouseup",H.j(u.gdG(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.Y(a,l,H.j(u.gdE(),q),!1,r))
n=u.z
m=W.aO;(n&&C.a).h(n,W.Y(a,H.z(W.lb(a)),H.j(u.gdI(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.Y(s,l,H.j(u.gdn(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.Y(s,"mouseup",H.j(u.gdr(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.Y(s,"pointerlockchange",H.j(u.gdK(),o),!1,p))
p=u.z
o=W.aq
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.Y(a,"touchstart",H.j(u.gdT(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.Y(a,"touchend",H.j(u.gdP(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.Y(a,"touchmove",H.j(u.gdR(),s),!1,o))
k.Q=!0
k.ch=!1
k.cx=new P.b4(Date.now(),!1)
k.cy=0
k.bF()
return k},
eq:function eq(){},
a1:function a1(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fM:function fM(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fN:function fN(a){this.a=a},
fO:function fO(a){this.a=a},
fP:function fP(a){this.a=a},
db:function db(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
hi:function hi(a){this.a=a}},Z={
lB:function(a,b,c){var u
H.q(c,"$ib",[P.y],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.jg(c)),35044)
a.bindBuffer(b,null)
return new Z.dj(b,u)},
ak:function(a){return new Z.di(a)},
dj:function dj(a,b){this.a=a
this.b=b},
cC:function cC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
hZ:function hZ(a){this.a=a},
cD:function cD(a,b){this.a=a
this.b=null
this.c=b},
bY:function bY(a,b,c){this.a=a
this.b=b
this.c=c},
di:function di(a){this.a=a}},D={
an:function(){var u=new D.bV()
u.sa1(null)
u.saj(null)
u.c=null
u.d=0
return u},
et:function et(){},
bV:function bV(){var _=this
_.d=_.c=_.b=_.a=null},
eN:function eN(a){this.a=a},
eO:function eO(a){this.a=a},
C:function C(){this.b=null},
cN:function cN(a){this.b=null
this.$ti=a},
cO:function cO(a){this.b=null
this.$ti=a},
R:function R(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d}},X={cE:function cE(a,b){this.a=a
this.b=b},cR:function cR(a,b){this.a=a
this.b=b},fa:function fa(){this.d=this.b=this.a=null},fg:function fg(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c0:function c0(a,b,c){this.a=a
this.b=b
this.c=c},ft:function ft(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hm:function hm(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dh:function dh(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ld:function(a){var u=new X.eY(),t=V.ef(1)
u.a=new V.b2(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.k2
if(t==null){t=V.lu(0,0,1,1)
$.k2=t}u.r=t
return u},
cF:function cF(){},
eY:function eY(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d0:function d0(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
da:function da(){}},V={
ef:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
jy:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.b.cr(a-b,u)
return(a<0?a+u:a)+b},
L:function(a,b,c){if(a==null)return C.c.a5("null",c)
return C.c.a5(C.b.ci(Math.abs(a-0)<$.Q().a?0:a,b),c+b+1)},
iP:function(a,b,c){var u,t,s,r,q
H.q(a,"$ib",[P.w],"$ab")
u=H.c([],[P.e])
for(t=0,s=0;s<4;++s){r=V.L(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(u,r)}for(q=u.length-1;q>=0;--q){if(q>=u.length)return H.k(u,q)
C.a.I(u,q,C.c.a5(u[q],t))}return u},
fm:function(){var u=$.jS
return u==null?$.jS=V.aV(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aV:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ba(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
d1:function(){var u=$.jX
return u==null?$.jX=new V.a6(0,0):u},
lu:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d4(a,b,c,d)},
hN:function(){var u=$.kg
return u==null?$.kg=new V.S(0,0,0):u},
b2:function b2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eM:function eM(a){this.a=a},
ba:function ba(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ag:function ag(a,b,c){this.a=a
this.b=b
this.c=c},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aN:function aN(a,b){this.a=a
this.b=b},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
N:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.a2("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.aa(a,0)
t=C.c.aa(b,0)
s=new V.fL()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
r:function(a){var u=new V.fU()
u.cE(a)
return u},
hl:function(){var u=new V.hk(),t=P.e
u.sed(new H.aB([t,V.c7]))
u.sef(new H.aB([t,V.cb]))
u.c=null
return u},
aQ:function aQ(){},
ab:function ab(){},
cV:function cV(){},
a5:function a5(){this.a=null},
fL:function fL(){this.b=this.a=null},
fU:function fU(){this.a=null},
c7:function c7(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dc:function dc(a,b,c){this.a=a
this.b=b
this.c=c},
cb:function cb(a){this.b=a
this.c=null},
hk:function hk(){this.c=this.b=this.a=null},
cc:function cc(a){this.b=a
this.a=this.c=null},
ml:function(a){P.lA(C.F,new V.iZ(a))},
lx:function(a){var u=new V.fY()
u.cG(a,!0)
return u},
b1:function b1(){},
iZ:function iZ(a){this.a=a},
eA:function eA(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eZ:function eZ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f_:function f_(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fI:function fI(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fY:function fY(){this.b=this.a=null},
h_:function h_(a){this.a=a},
fZ:function fZ(a){this.a=a},
h0:function h0(a){this.a=a}},U={
jJ:function(a){var u=new U.cG()
u.a=a
return u},
cG:function cG(){this.b=this.a=null},
bX:function bX(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a4:function a4(){},
d5:function d5(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cK:function cK(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
jd:function(a,b,c,d,e){var u=new A.hv(a,c,e)
u.f=d
u.seh(P.lj(d,0,P.y))
return u},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
el:function el(a){this.a=a},
eD:function eD(a,b){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
c6:function c6(){},
dd:function dd(){},
hC:function hC(a){this.a=a},
hu:function hu(a,b,c){this.a=a
this.c=b
this.d=c},
hx:function hx(a,b,c){this.a=a
this.c=b
this.d=c},
hz:function hz(a,b,c){this.a=a
this.c=b
this.d=c},
hB:function hB(a,b,c){this.a=a
this.c=b
this.d=c},
hv:function hv(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
cd:function cd(a,b,c){this.a=a
this.c=b
this.d=c},
hw:function hw(a,b,c){this.a=a
this.c=b
this.d=c},
hy:function hy(a,b,c){this.a=a
this.c=b
this.d=c},
hA:function hA(a,b,c){this.a=a
this.c=b
this.d=c},
hD:function hD(a,b,c){this.a=a
this.c=b
this.d=c},
hE:function hE(a,b,c){this.a=a
this.c=b
this.d=c},
ce:function ce(a,b,c){this.a=a
this.c=b
this.d=c},
hF:function hF(a,b,c){this.a=a
this.c=b
this.d=c},
hG:function hG(a,b,c){this.a=a
this.c=b
this.d=c}},F={
mq:function(a,b){return F.lZ(15,30,b,a,new F.j_())},
lZ:function(a,b,c,d,e){var u,t=F.mo(a,b,new F.iN(H.j(e,{func:1,ret:V.ag,args:[P.w]}),d,b,c))
if(t==null)return
u=t.e
if(u!=null)++u.d
t.d.b1()
t.a.b1()
u=t.e
if(u!=null)u.aq(0)
t.eM(new F.hT(),new F.fC())
return t},
mo:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.j(c,{func:1,ret:-1,args:[F.aj,P.w,P.w]})
if(a<1)return
if(b<1)return
u=new F.d7()
t=new F.hO(u)
t.b=!1
s=[F.aj]
t.sei(H.c([],s))
u.a=t
t=new F.fX()
t.saU(H.c([],[F.br]))
u.b=t
t=new F.fW(u)
t.sd8(H.c([],[F.b9]))
u.c=t
t=new F.fV(u)
t.sd2(H.c([],[F.V]))
u.d=t
u.e=null
r=H.c([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
o=t.bK(new V.b2(s,0,0,1),new V.a6(p,1))
c.$3(o,p,0)
C.a.h(r,o.bR(null))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
o=k.bK(new V.b2(j,i,h,1),new V.a6(p,m))
c.$3(o,p,n)
C.a.h(r,o.bR(null))}}u.d.ek(a+1,b+1,r)
return u},
eP:function(a,b,c){var u=new F.V(),t=a.a
if(t==null)H.aa(P.a2("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.aa(P.a2("May not create a face with vertices attached to different shapes."))
u.e5(a)
u.e6(b)
u.e7(c)
C.a.h(u.a.a.d.b,u)
u.a.a.V()
return u},
kh:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aj(),r=new F.hW()
r.saU(H.c([],[F.br]))
s.b=r
r=new F.hS()
u=[F.b9]
r.sd9(H.c([],u))
r.sda(H.c([],u))
s.c=r
r=new F.hP()
u=[F.V]
r.sd3(H.c([],u))
r.sd4(H.c([],u))
r.sd5(H.c([],u))
s.d=r
h=$.kS()
s.e=0
r=$.aZ()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bI().a)!==0?e:t
s.x=(u&$.bH().a)!==0?b:t
s.y=(u&$.bJ().a)!==0?f:t
s.z=(u&$.bK().a)!==0?g:t
s.Q=(u&$.kT().a)!==0?c:t
s.ch=(u&$.bL().a)!==0?i:0
s.cx=(u&$.bG().a)!==0?a:t
return s},
j_:function j_(){},
iN:function iN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
V:function V(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eQ:function eQ(){},
h1:function h1(){},
b9:function b9(){},
fc:function fc(){},
ht:function ht(){},
br:function br(){},
d7:function d7(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fV:function fV(a){this.a=a
this.b=null},
fW:function fW(a){this.a=a
this.b=null},
fX:function fX(){this.b=null},
aj:function aj(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hX:function hX(a){this.a=a},
hO:function hO(a){this.a=a
this.c=this.b=null},
hP:function hP(){this.d=this.c=this.b=null},
hQ:function hQ(a,b){this.a=a
this.b=b},
hR:function hR(a,b){this.a=a
this.b=b},
hS:function hS(){this.c=this.b=null},
hU:function hU(){},
hT:function hT(){},
hV:function hV(){},
fC:function fC(){},
hW:function hW(){this.b=null}},R={
kA:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="testCanvas",a2=V.lx("Test 004"),a3=W.jG()
a3.className="pageLargeCanvas"
a3.id=a1
a2.a.appendChild(a3)
u=[P.e]
a2.bL(H.c(["Test of repeat use of a single mover and shape. There are 9 rings ","moving at the same speed, however the second one is attached to ","the first, the third to the second, and so on."],u))
a2.bL(H.c(["\xab[Back to Tests|../]"],u))
t=new U.d5()
t.r=t.f=t.e=t.d=t.c=t.b=t.a=0
t.scn(0)
t.sc5(0,0)
t.scb(0)
t.sbU(0.1)
t.sbS(0.21)
t.sbT(0.32)
t.sbU(0.51)
t.sbS(0.71)
t.sbT(0.92)
s=new U.bX()
s.bg(U.a4)
s.aE(s.gdd(),s.gdN())
s.e=null
s.f=V.fm()
s.r=0
s.h(0,U.jJ(V.aV(0.8,0,0,0,0,0.8,0,0,0,0,0.8,0,0,0,0,1)))
s.h(0,t)
r=F.mq(2,0.2)
q=E.aT(s,r)
p=E.aT(s,r)
p.y.h(0,q)
o=E.aT(s,r)
o.y.h(0,p)
n=E.aT(s,r)
n.y.h(0,o)
m=E.aT(s,r)
m.y.h(0,n)
l=E.aT(s,r)
l.y.h(0,m)
k=E.aT(s,r)
k.y.h(0,l)
j=E.aT(s,r)
j.y.h(0,k)
i=E.aT(s,r)
i.y.h(0,j)
h=new O.eC()
h.b=1
h.c=10
h.f=h.e=h.d=!1
if(!(Math.abs(-2)<$.Q().a)){h.b=3
u=new D.R("start",1,3,[P.w])
u.b=!0
h.aT(u)}u=h.c
if(!(Math.abs(u-6)<$.Q().a)){h.c=6
u=new D.R("stop",u,6,[P.w])
u.b=!0
h.aT(u)}if(!h.d){h.d=!0
h.a=null
u=new D.R("grey",!1,!0,[P.K])
u.b=!0
h.aT(u)}g=new M.cK()
g.a=!0
g.scV(0,O.jI(E.a1))
g.e.aE(g.gdh(),g.gdj())
g.y=g.x=g.r=g.f=null
f=X.ld(null)
e=new X.d0()
e.c=1.0471975511965976
e.d=0.1
e.e=2000
e.sbY(null)
u=e.c
if(!(Math.abs(u-1.0471975511965976)<$.Q().a)){e.c=1.0471975511965976
u=new D.R("fov",u,1.0471975511965976,[P.w])
u.b=!0
e.a9(u)}u=e.d
if(!(Math.abs(u-0.1)<$.Q().a)){e.d=0.1
u=new D.R("near",u,0.1,[P.w])
u.b=!0
e.a9(u)}u=e.e
if(!(Math.abs(u-2000)<$.Q().a)){e.e=2000
u=new D.R("far",u,2000,[P.w])
u.b=!0
e.a9(u)}u=g.b
if(u!==e){if(u!=null)u.gq().H(0,g.gX())
d=g.b
g.b=e
e.gq().h(0,g.gX())
u=new D.R("camera",d,g.b,[X.cF])
u.b=!0
g.a_(u)}u=g.c
if(u!==f){if(u!=null)u.gq().H(0,g.gX())
d=g.c
g.c=f
f.gq().h(0,g.gX())
u=new D.R("target",d,g.c,[X.da])
u.b=!0
g.a_(u)}g.sce(null)
g.sce(h)
g.e.h(0,i)
g.b.sbY(U.jJ(V.aV(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=document.getElementById(a1)
if(c==null)H.aa(P.a2("Failed to find an element with the identifier, testCanvas."))
b=E.lz(c,!0,!0,!0,!1)
u=b.d
if(u!==g){if(u!=null)u.gq().H(0,b.gbh())
b.d=g
g.gq().h(0,b.gbh())
b.bi()}u=b.z
if(u==null)u=b.z=D.an()
a={func:1,ret:-1,args:[D.C]}
a0=H.j(new R.iW(a2,h),a)
if(u.b==null)u.saj(H.c([],[a]))
u=u.b;(u&&C.a).h(u,a0)
V.ml(b)},
iW:function iW(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,R]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.j8.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gC:function(a){return H.c4(a)},
i:function(a){return"Instance of '"+H.bt(a)+"'"}}
J.f5.prototype={
i:function(a){return String(a)},
gC:function(a){return a?519018:218159},
$iK:1}
J.f7.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gC:function(a){return 0}}
J.cQ.prototype={
gC:function(a){return 0},
i:function(a){return String(a)}}
J.fH.prototype={}
J.bc.prototype={}
J.b8.prototype={
i:function(a){var u=a[$.kH()]
if(u==null)return this.cz(a)
return"JavaScript function for "+H.i(J.as(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ib6:1}
J.aA.prototype={
h:function(a,b){H.B(b,H.u(a,0))
if(!!a.fixed$length)H.aa(P.ai("add"))
a.push(b)},
c9:function(a,b){if(!!a.fixed$length)H.aa(P.ai("removeAt"))
if(b<0||b>=a.length)throw H.f(P.d3(b,null))
return a.splice(b,1)[0]},
H:function(a,b){var u
if(!!a.fixed$length)H.aa(P.ai("remove"))
for(u=0;u<a.length;++u)if(J.T(a[u],b)){a.splice(u,1)
return!0}return!1},
E:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.b3(a))}},
l:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.I(t,u,H.i(a[u]))
return t.join(b)},
eI:function(a){return this.l(a,"")},
eC:function(a,b){var u,t,s
H.j(b,{func:1,ret:P.K,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.D(b.$1(s)))return s
if(a.length!==u)throw H.f(P.b3(a))}throw H.f(H.f4())},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
cu:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.aF(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.aF(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.u(a,0)])
return H.c(a.slice(b,c),[H.u(a,0)])},
geB:function(a){if(a.length>0)return a[0]
throw H.f(H.f4())},
gaz:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.f4())},
bM:function(a,b){var u,t
H.j(b,{func:1,ret:P.K,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.D(b.$1(a[t])))return!0
if(a.length!==u)throw H.f(P.b3(a))}return!1},
L:function(a,b){var u
for(u=0;u<a.length;++u)if(J.T(a[u],b))return!0
return!1},
i:function(a){return P.j5(a,"[","]")},
gG:function(a){return new J.ae(a,a.length,[H.u(a,0)])},
gC:function(a){return H.c4(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.aa(P.ai("set length"))
if(b<0)throw H.f(P.aF(b,0,null,"newLength",null))
a.length=b},
I:function(a,b,c){H.B(c,H.u(a,0))
if(!!a.immutable$list)H.aa(P.ai("indexed set"))
if(b>=a.length||b<0)throw H.f(H.ct(a,b))
a[b]=c},
$ih:1,
$ib:1}
J.j7.prototype={}
J.ae.prototype={
gw:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.H(s))
u=t.c
if(u>=r){t.sbx(null)
return!1}t.sbx(s[u]);++t.c
return!0},
sbx:function(a){this.d=H.B(a,H.u(this,0))},
$iaz:1}
J.bp.prototype={
bW:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.ai(""+a+".floor()"))},
W:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.ai(""+a+".round()"))},
ci:function(a,b){var u,t
if(b>20)throw H.f(P.aF(b,0,20,"fractionDigits",null))
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
u:function(a,b){if(typeof b!=="number")throw H.f(H.bg(b))
return a-b},
J:function(a,b){if(typeof b!=="number")throw H.f(H.bg(b))
return a*b},
cr:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
cC:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bG(a,b)},
ad:function(a,b){return(a|0)===a?a/b|0:this.bG(a,b)},
bG:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.ai("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
av:function(a,b){var u
if(a>0)u=this.ec(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ec:function(a,b){return b>31?0:a>>>b},
$iw:1,
$iZ:1}
J.cP.prototype={$iy:1}
J.f6.prototype={}
J.b7.prototype={
b2:function(a,b){if(b<0)throw H.f(H.ct(a,b))
if(b>=a.length)H.aa(H.ct(a,b))
return a.charCodeAt(b)},
aa:function(a,b){if(b>=a.length)throw H.f(H.ct(a,b))
return a.charCodeAt(b)},
P:function(a,b){if(typeof b!=="string")throw H.f(P.j2(b,null,null))
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
fa:function(a){return a.toLowerCase()},
J:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.B)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a5:function(a,b){var u=b-a.length
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
$ijV:1,
$ie:1}
H.o.prototype={
gk:function(a){return this.a.length},
m:function(a,b){return C.c.b2(this.a,b)},
$adg:function(){return[P.y]},
$at:function(){return[P.y]},
$ah:function(){return[P.y]},
$ab:function(){return[P.y]}}
H.eJ.prototype={}
H.bq.prototype={
gG:function(a){var u=this
return new H.bZ(u,u.gk(u),[H.a9(u,"bq",0)])},
aC:function(a,b){return this.cw(0,H.j(b,{func:1,ret:P.K,args:[H.a9(this,"bq",0)]}))}}
H.bZ.prototype={
gw:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=J.jq(s),q=r.gk(s)
if(t.b!==q)throw H.f(P.b3(s))
u=t.c
if(u>=q){t.sai(null)
return!1}t.sai(r.t(s,u));++t.c
return!0},
sai:function(a){this.d=H.B(a,H.u(this,0))},
$iaz:1}
H.fj.prototype={
gG:function(a){return new H.fk(J.bj(this.a),this.b,this.$ti)},
gk:function(a){return J.bk(this.a)},
t:function(a,b){return this.b.$1(J.j1(this.a,b))},
$ah:function(a,b){return[b]}}
H.fk.prototype={
p:function(){var u=this,t=u.b
if(t.p()){u.sai(u.c.$1(t.gw(t)))
return!0}u.sai(null)
return!1},
gw:function(a){return this.a},
sai:function(a){this.a=H.B(a,H.u(this,1))},
$aaz:function(a,b){return[b]}}
H.fl.prototype={
gk:function(a){return J.bk(this.a)},
t:function(a,b){return this.b.$1(J.j1(this.a,b))},
$abq:function(a,b){return[b]},
$ah:function(a,b){return[b]}}
H.cf.prototype={
gG:function(a){return new H.i_(J.bj(this.a),this.b,this.$ti)}}
H.i_.prototype={
p:function(){var u,t
for(u=this.a,t=this.b;u.p();)if(H.D(t.$1(u.gw(u))))return!0
return!1},
gw:function(a){var u=this.a
return u.gw(u)}}
H.bn.prototype={}
H.dg.prototype={}
H.df.prototype={}
H.hq.prototype={
U:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fD.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f9.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.hI.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.j0.prototype={
$1:function(a){if(!!J.P(a).$ib5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.dU.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$ia7:1}
H.bP.prototype={
i:function(a){return"Closure '"+H.bt(this).trim()+"'"},
$ib6:1,
gfd:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hf.prototype={}
H.h5.prototype={
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
else u=typeof t!=="object"?J.cx(t):H.c4(t)
return(u^H.c4(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.bt(u)+"'")}}
H.hs.prototype={
i:function(a){return this.a}}
H.es.prototype={
i:function(a){return this.a}}
H.fS.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.i0.prototype={
i:function(a){return"Assertion failed: "+P.cL(this.a)}}
H.aB.prototype={
gk:function(a){return this.a},
gO:function(a){return new H.cS(this,[H.u(this,0)])},
bQ:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.bu(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.bu(t,b)}else return s.eF(b)},
eF:function(a){var u=this.d
if(u==null)return!1
return this.b3(this.aM(u,J.cx(a)&0x3ffffff),a)>=0},
m:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.at(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.at(r,b)
s=t==null?null:t.b
return s}else return q.eG(b)},
eG:function(a){var u,t,s=this.d
if(s==null)return
u=this.aM(s,J.cx(a)&0x3ffffff)
t=this.b3(u,a)
if(t<0)return
return u[t].b},
I:function(a,b,c){var u,t,s,r,q,p,o=this
H.B(b,H.u(o,0))
H.B(c,H.u(o,1))
if(typeof b==="string"){u=o.b
o.bn(u==null?o.b=o.aR():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.bn(t==null?o.c=o.aR():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.aR()
r=J.cx(b)&0x3ffffff
q=o.aM(s,r)
if(q==null)o.aX(s,r,[o.aS(b,c)])
else{p=o.b3(q,b)
if(p>=0)q[p].b=c
else q.push(o.aS(b,c))}}},
E:function(a,b){var u,t,s=this
H.j(b,{func:1,ret:-1,args:[H.u(s,0),H.u(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.f(P.b3(s))
u=u.c}},
bn:function(a,b,c){var u,t=this
H.B(b,H.u(t,0))
H.B(c,H.u(t,1))
u=t.at(a,b)
if(u==null)t.aX(a,b,t.aS(b,c))
else u.b=c},
cQ:function(){this.r=this.r+1&67108863},
aS:function(a,b){var u,t=this,s=new H.fd(H.B(a,H.u(t,0)),H.B(b,H.u(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.cQ()
return s},
b3:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.T(a[t].a,b))return t
return-1},
i:function(a){return P.jR(this)},
at:function(a,b){return a[b]},
aM:function(a,b){return a[b]},
aX:function(a,b,c){a[b]=c},
d_:function(a,b){delete a[b]},
bu:function(a,b){return this.at(a,b)!=null},
aR:function(){var u="<non-identifier-key>",t=Object.create(null)
this.aX(t,u,t)
this.d_(t,u)
return t}}
H.fd.prototype={}
H.cS.prototype={
gk:function(a){return this.a.a},
gG:function(a){var u=this.a,t=new H.fe(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fe.prototype={
gw:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.b3(t))
else{t=u.c
if(t==null){u.sbm(null)
return!1}else{u.sbm(t.a)
u.c=u.c.c
return!0}}},
sbm:function(a){this.d=H.B(a,H.u(this,0))},
$iaz:1}
H.iS.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.iT.prototype={
$2:function(a,b){return this.a(a,b)},
$S:29}
H.iU.prototype={
$1:function(a){return this.a(H.z(a))},
$S:30}
H.f8.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ijV:1}
H.c2.prototype={}
H.cW.prototype={
gk:function(a){return a.length},
$iA:1,
$aA:function(){}}
H.c1.prototype={
m:function(a,b){H.be(b,a,a.length)
return a[b]},
$abn:function(){return[P.w]},
$at:function(){return[P.w]},
$ih:1,
$ah:function(){return[P.w]},
$ib:1,
$ab:function(){return[P.w]}}
H.cX.prototype={
$abn:function(){return[P.y]},
$at:function(){return[P.y]},
$ih:1,
$ah:function(){return[P.y]},
$ib:1,
$ab:function(){return[P.y]}}
H.fu.prototype={
m:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.fv.prototype={
m:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.fw.prototype={
m:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.fx.prototype={
m:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.fy.prototype={
m:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.cY.prototype={
gk:function(a){return a.length},
m:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.fz.prototype={
gk:function(a){return a.length},
m:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.cj.prototype={}
H.ck.prototype={}
H.cl.prototype={}
H.cm.prototype={}
P.i2.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:14}
P.i1.prototype={
$1:function(a){var u,t
this.a.a=H.j(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:28}
P.i3.prototype={
$0:function(){this.a.$0()},
$S:0}
P.i4.prototype={
$0:function(){this.a.$0()},
$S:0}
P.e_.prototype={
cN:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bC(new P.iF(this,b),0),a)
else throw H.f(P.ai("`setTimeout()` not found."))},
cO:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bC(new P.iE(this,a,Date.now(),b),0),a)
else throw H.f(P.ai("Periodic timer."))},
$iaK:1}
P.iF.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:1}
P.iE.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.cC(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.aP.prototype={
eK:function(a){if(this.c!==6)return!0
return this.b.b.ba(H.j(this.d,{func:1,ret:P.K,args:[P.F]}),a.a,P.K,P.F)},
eE:function(a){var u=this.e,t=P.F,s={futureOr:1,type:H.u(this,1)},r=this.b.b
if(H.eg(u,{func:1,args:[P.F,P.a7]}))return H.jp(r.f4(u,a.a,a.b,null,t,P.a7),s)
else return H.jp(r.ba(H.j(u,{func:1,args:[P.F]}),a.a,null,t),s)}}
P.al.prototype={
cf:function(a,b,c){var u,t,s,r=H.u(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.O
if(u!==C.d){u.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.lQ(b,u)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.al($.O,[c])
s=b==null?1:3
this.bo(new P.aP(t,s,a,b,[r,c]))
return t},
f7:function(a,b){return this.cf(a,null,b)},
bo:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.n(t.c,"$iaP")
t.c=a}else{if(s===2){u=H.n(t.c,"$ial")
s=u.a
if(s<4){u.bo(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.iL(null,null,s,H.j(new P.ic(t,a),{func:1,ret:-1}))}},
bE:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.n(p.c,"$iaP")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.n(p.c,"$ial")
u=q.a
if(u<4){q.bE(a)
return}p.a=u
p.c=q.c}o.a=p.au(a)
u=p.b
u.toString
P.iL(null,null,u,H.j(new P.ih(o,p),{func:1,ret:-1}))}},
aW:function(){var u=H.n(this.c,"$iaP")
this.c=null
return this.au(u)},
au:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
br:function(a){var u,t,s=this,r=H.u(s,0)
H.jp(a,{futureOr:1,type:r})
u=s.$ti
if(H.jm(a,"$ibW",u,"$abW"))if(H.jm(a,"$ial",u,null))P.ki(a,s)
else P.lG(a,s)
else{t=s.aW()
H.B(a,r)
s.a=4
s.c=a
P.ci(s,t)}},
bs:function(a,b){var u,t=this
H.n(b,"$ia7")
u=t.aW()
t.a=8
t.c=new P.a0(a,b)
P.ci(t,u)},
$ibW:1}
P.ic.prototype={
$0:function(){P.ci(this.a,this.b)},
$S:0}
P.ih.prototype={
$0:function(){P.ci(this.b,this.a.a)},
$S:0}
P.id.prototype={
$1:function(a){var u=this.a
u.a=0
u.br(a)},
$S:14}
P.ie.prototype={
$2:function(a,b){H.n(b,"$ia7")
this.a.bs(a,b)},
$1:function(a){return this.$2(a,null)},
$S:32}
P.ig.prototype={
$0:function(){this.a.bs(this.b,this.c)},
$S:0}
P.ik.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.cc(H.j(s.d,{func:1}),null)}catch(r){u=H.ad(r)
t=H.bD(r)
if(o.d){s=H.n(o.a.a.c,"$ia0").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.n(o.a.a.c,"$ia0")
else q.b=new P.a0(u,t)
q.a=!0
return}if(!!J.P(n).$ibW){if(n instanceof P.al&&n.a>=4){if(n.a===8){s=o.b
s.b=H.n(n.c,"$ia0")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.f7(new P.il(p),null)
s.a=!1}},
$S:1}
P.il.prototype={
$1:function(a){return this.a},
$S:23}
P.ij.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.u(s,0)
q=H.B(n.c,r)
p=H.u(s,1)
n.a.b=s.b.b.ba(H.j(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ad(o)
t=H.bD(o)
s=n.a
s.b=new P.a0(u,t)
s.a=!0}},
$S:1}
P.ii.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.n(m.a.a.c,"$ia0")
r=m.c
if(H.D(r.eK(u))&&r.e!=null){q=m.b
q.b=r.eE(u)
q.a=!1}}catch(p){t=H.ad(p)
s=H.bD(p)
r=H.n(m.a.a.c,"$ia0")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a0(t,s)
n.a=!0}},
$S:1}
P.dk.prototype={}
P.h8.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.al($.O,[P.y])
r.a=0
u=H.u(s,0)
t=H.j(new P.ha(r,s),{func:1,ret:-1,args:[u]})
H.j(new P.hb(r,q),{func:1,ret:-1})
W.Y(s.a,s.b,t,!1,u)
return q}}
P.ha.prototype={
$1:function(a){H.B(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.E,args:[H.u(this.b,0)]}}}
P.hb.prototype={
$0:function(){this.b.br(this.a.a)},
$S:0}
P.c9.prototype={}
P.h9.prototype={}
P.aK.prototype={}
P.a0.prototype={
i:function(a){return H.i(this.a)},
$ib5:1}
P.iI.prototype={$imY:1}
P.iK.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.d_():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.i(0)
throw u},
$S:0}
P.ir.prototype={
f5:function(a){var u,t,s,r=null
H.j(a,{func:1,ret:-1})
try{if(C.d===$.O){a.$0()
return}P.ko(r,r,this,a,-1)}catch(s){u=H.ad(s)
t=H.bD(s)
P.iJ(r,r,this,u,H.n(t,"$ia7"))}},
f6:function(a,b,c){var u,t,s,r=null
H.j(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.d===$.O){a.$1(b)
return}P.kp(r,r,this,a,b,-1,c)}catch(s){u=H.ad(s)
t=H.bD(s)
P.iJ(r,r,this,u,H.n(t,"$ia7"))}},
ep:function(a,b){return new P.it(this,H.j(a,{func:1,ret:b}),b)},
b_:function(a){return new P.is(this,H.j(a,{func:1,ret:-1}))},
bN:function(a,b){return new P.iu(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
cc:function(a,b){H.j(a,{func:1,ret:b})
if($.O===C.d)return a.$0()
return P.ko(null,null,this,a,b)},
ba:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.O===C.d)return a.$1(b)
return P.kp(null,null,this,a,b,c,d)},
f4:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.O===C.d)return a.$2(b,c)
return P.lR(null,null,this,a,b,c,d,e,f)}}
P.it.prototype={
$0:function(){return this.a.cc(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.is.prototype={
$0:function(){return this.a.f5(this.b)},
$S:1}
P.iu.prototype={
$1:function(a){var u=this.c
return this.a.f6(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ip.prototype={
gG:function(a){var u=this,t=new P.dB(u,u.r,u.$ti)
t.c=u.e
return t},
gk:function(a){return this.a},
L:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.n(u[b],"$ibz")!=null}else{t=this.cW(b)
return t}},
cW:function(a){var u=this.d
if(u==null)return!1
return this.aL(this.by(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.B(b,H.u(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.bp(u==null?s.b=P.jf():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.bp(t==null?s.c=P.jf():t,b)}else return s.cR(0,b)},
cR:function(a,b){var u,t,s,r=this
H.B(b,H.u(r,0))
u=r.d
if(u==null)u=r.d=P.jf()
t=r.bt(b)
s=u[t]
if(s==null)u[t]=[r.aI(b)]
else{if(r.aL(s,b)>=0)return!1
s.push(r.aI(b))}return!0},
H:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.dX(this.c,b)
else return this.dW(0,b)},
dW:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.by(r,b)
t=s.aL(u,b)
if(t<0)return!1
s.bH(u.splice(t,1)[0])
return!0},
bp:function(a,b){H.B(b,H.u(this,0))
if(H.n(a[b],"$ibz")!=null)return!1
a[b]=this.aI(b)
return!0},
dX:function(a,b){var u
if(a==null)return!1
u=H.n(a[b],"$ibz")
if(u==null)return!1
this.bH(u)
delete a[b]
return!0},
bA:function(){this.r=1073741823&this.r+1},
aI:function(a){var u,t=this,s=new P.bz(H.B(a,H.u(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.bA()
return s},
bH:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.bA()},
bt:function(a){return J.cx(a)&1073741823},
by:function(a,b){return a[this.bt(b)]},
aL:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.T(a[t].a,b))return t
return-1}}
P.bz.prototype={}
P.dB.prototype={
gw:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.b3(t))
else{t=u.c
if(t==null){u.sbq(null)
return!1}else{u.sbq(H.B(t.a,H.u(u,0)))
u.c=u.c.b
return!0}}},
sbq:function(a){this.d=H.B(a,H.u(this,0))},
$iaz:1}
P.ff.prototype={$ih:1,$ib:1}
P.t.prototype={
gG:function(a){return new H.bZ(a,this.gk(a),[H.cu(this,a,"t",0)])},
t:function(a,b){return this.m(a,b)},
f9:function(a,b){var u,t=this,s=H.c([],[H.cu(t,a,"t",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.I(s,u,t.m(a,u))
return s},
f8:function(a){return this.f9(a,!0)},
i:function(a){return P.j5(a,"[","]")}}
P.fh.prototype={}
P.fi.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.i(a)
t.a=u+": "
t.a+=H.i(b)},
$S:11}
P.W.prototype={
E:function(a,b){var u,t,s=this
H.j(b,{func:1,ret:-1,args:[H.cu(s,a,"W",0),H.cu(s,a,"W",1)]})
for(u=J.bj(s.gO(a));u.p();){t=u.gw(u)
b.$2(t,s.m(a,t))}},
gk:function(a){return J.bk(this.gO(a))},
i:function(a){return P.jR(a)},
$iG:1}
P.iw.prototype={
Y:function(a,b){var u
for(u=J.bj(H.q(b,"$ih",this.$ti,"$ah"));u.p();)this.h(0,u.gw(u))},
i:function(a){return P.j5(this,"{","}")},
t:function(a,b){var u,t,s,r=this
P.k0(b,"index")
for(u=P.lJ(r,r.r,H.u(r,0)),t=0;u.p();){s=u.d
if(b===t)return s;++t}throw H.f(P.M(b,r,"index",null,t))},
$ih:1,
$ik3:1}
P.dC.prototype={}
P.bQ.prototype={}
P.bR.prototype={}
P.eL.prototype={
$abQ:function(){return[P.e,[P.b,P.y]]}}
P.f2.prototype={
i:function(a){return this.a}}
P.f1.prototype={
cX:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.bw("")
if(r>b)q.a+=C.c.ar(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.l1(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abR:function(){return[P.e,P.e]}}
P.hL.prototype={}
P.hM.prototype={
er:function(a){var u,t,s=P.k1(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iG(u)
if(t.d6(a,0,s)!==s)t.bI(C.c.b2(a,s-1),0)
return new Uint8Array(u.subarray(0,H.lM(0,t.b,u.length)))},
$abR:function(){return[P.e,[P.b,P.y]]}}
P.iG.prototype={
bI:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
d6:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.c.b2(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.c.aa(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.bI(r,C.c.aa(a,p)))s=p}else if(r<=2047){q=n.b
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
P.K.prototype={}
P.b4.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.b4&&this.a===b.a&&!0},
gC:function(a){var u=this.a
return(u^C.e.av(u,30))&1073741823},
i:function(a){var u=this,t=P.l8(H.lr(u)),s=P.cH(H.lp(u)),r=P.cH(H.ll(u)),q=P.cH(H.lm(u)),p=P.cH(H.lo(u)),o=P.cH(H.lq(u)),n=P.l9(H.ln(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.w.prototype={}
P.aR.prototype={
u:function(a,b){return new P.aR(C.e.u(this.a,b.gfg()))},
n:function(a,b){if(b==null)return!1
return b instanceof P.aR&&this.a===b.a},
gC:function(a){return C.e.gC(this.a)},
i:function(a){var u,t,s,r=new P.eI(),q=this.a
if(q<0)return"-"+new P.aR(0-q).i(0)
u=r.$1(C.e.ad(q,6e7)%60)
t=r.$1(C.e.ad(q,1e6)%60)
s=new P.eH().$1(q%1e6)
return""+C.e.ad(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.eH.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:12}
P.eI.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:12}
P.b5.prototype={}
P.ek.prototype={
i:function(a){return"Assertion failed"}}
P.d_.prototype={
i:function(a){return"Throw of null."}}
P.at.prototype={
gaK:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaJ:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gaK()+o+u
if(!q.a)return t
s=q.gaJ()
r=P.cL(q.b)
return t+s+": "+r}}
P.bu.prototype={
gaK:function(){return"RangeError"},
gaJ:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.f3.prototype={
gaK:function(){return"RangeError"},
gaJ:function(){var u,t=H.a_(this.b)
if(typeof t!=="number")return t.bb()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gk:function(a){return this.f}}
P.hJ.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hH.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c8.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eu.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.cL(u)+"."}}
P.fG.prototype={
i:function(a){return"Out of Memory"},
$ib5:1}
P.d8.prototype={
i:function(a){return"Stack Overflow"},
$ib5:1}
P.ez.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dt.prototype={
i:function(a){return"Exception: "+this.a}}
P.eX.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.c.ar(s,0,75)+"...":s
return t+"\n"+r}}
P.b6.prototype={}
P.y.prototype={}
P.h.prototype={
aC:function(a,b){var u=H.a9(this,"h",0)
return new H.cf(this,H.j(b,{func:1,ret:P.K,args:[u]}),[u])},
gk:function(a){var u,t=this.gG(this)
for(u=0;t.p();)++u
return u},
ga7:function(a){var u,t=this.gG(this)
if(!t.p())throw H.f(H.f4())
u=t.gw(t)
if(t.p())throw H.f(H.lf())
return u},
t:function(a,b){var u,t,s
P.k0(b,"index")
for(u=this.gG(this),t=0;u.p();){s=u.gw(u)
if(b===t)return s;++t}throw H.f(P.M(b,this,"index",null,t))},
i:function(a){return P.le(this,"(",")")}}
P.az.prototype={}
P.b.prototype={$ih:1}
P.G.prototype={}
P.E.prototype={
gC:function(a){return P.F.prototype.gC.call(this,this)},
i:function(a){return"null"}}
P.Z.prototype={}
P.F.prototype={constructor:P.F,$iF:1,
n:function(a,b){return this===b},
gC:function(a){return H.c4(this)},
i:function(a){return"Instance of '"+H.bt(this)+"'"},
toString:function(){return this.i(this)}}
P.a7.prototype={}
P.e.prototype={$ijV:1}
P.bw.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.p.prototype={}
W.ei.prototype={
gk:function(a){return a.length}}
W.cy.prototype={
i:function(a){return String(a)},
$icy:1}
W.ej.prototype={
i:function(a){return String(a)}}
W.bM.prototype={$ibM:1}
W.cA.prototype={}
W.b_.prototype={$ib_:1}
W.bm.prototype={
cq:function(a,b,c){var u=a.getContext(b,P.lY(c))
return u},
$ibm:1}
W.b0.prototype={
gk:function(a){return a.length}}
W.bS.prototype={$ibS:1}
W.ev.prototype={
gk:function(a){return a.length}}
W.J.prototype={$iJ:1}
W.bT.prototype={
gk:function(a){return a.length}}
W.ew.prototype={}
W.av.prototype={}
W.aw.prototype={}
W.ex.prototype={
gk:function(a){return a.length}}
W.ey.prototype={
gk:function(a){return a.length}}
W.eB.prototype={
gk:function(a){return a.length}}
W.af.prototype={$iaf:1}
W.eE.prototype={
i:function(a){return String(a)}}
W.cI.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[[P.ah,P.Z]]},
$at:function(){return[[P.ah,P.Z]]},
$ih:1,
$ah:function(){return[[P.ah,P.Z]]},
$ib:1,
$ab:function(){return[[P.ah,P.Z]]},
$av:function(){return[[P.ah,P.Z]]}}
W.cJ.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gah(a))+" x "+H.i(this.gaf(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.P(b)
if(!u.$iah)return!1
return a.left===u.gbX(b)&&a.top===u.gck(b)&&this.gah(a)===u.gah(b)&&this.gaf(a)===u.gaf(b)},
gC:function(a){return W.kk(C.b.gC(a.left),C.b.gC(a.top),C.b.gC(this.gah(a)),C.b.gC(this.gaf(a)))},
gaf:function(a){return a.height},
gbX:function(a){return a.left},
gck:function(a){return a.top},
gah:function(a){return a.width},
$iah:1,
$aah:function(){return[P.Z]}}
W.eF.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[P.e]},
$at:function(){return[P.e]},
$ih:1,
$ah:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$av:function(){return[P.e]}}
W.eG.prototype={
gk:function(a){return a.length}}
W.i6.prototype={
gk:function(a){return this.b.length},
m:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.k(u,b)
return H.n(u[b],"$iI")},
h:function(a,b){this.a.appendChild(b)
return b},
gG:function(a){var u=this.f8(this)
return new J.ae(u,u.length,[H.u(u,0)])},
$at:function(){return[W.I]},
$ah:function(){return[W.I]},
$ab:function(){return[W.I]}}
W.I.prototype={
geo:function(a){return new W.i8(a)},
gbO:function(a){return new W.i6(a,a.children)},
i:function(a){return a.localName},
T:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.jM
if(u==null){u=H.c([],[W.ac])
t=new W.cZ(u)
C.a.h(u,W.kj(null))
C.a.h(u,W.kl())
$.jM=t
d=t}else d=u
u=$.jL
if(u==null){u=new W.e4(d)
$.jL=u
c=u}else{u.a=d
c=u}}if($.aS==null){u=document
t=u.implementation.createHTMLDocument("")
$.aS=t
$.j4=t.createRange()
t=$.aS.createElement("base")
H.n(t,"$ibM")
t.href=u.baseURI
$.aS.head.appendChild(t)}u=$.aS
if(u.body==null){t=u.createElement("body")
u.body=H.n(t,"$ib_")}u=$.aS
if(!!this.$ib_)s=u.body
else{s=u.createElement(a.tagName)
$.aS.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.L(C.K,a.tagName)){$.j4.selectNodeContents(s)
r=$.j4.createContextualFragment(b)}else{s.innerHTML=b
r=$.aS.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.aS.body
if(s==null?u!=null:s!==u)J.jC(s)
c.bc(r)
document.adoptNode(r)
return r},
es:function(a,b,c){return this.T(a,b,c,null)},
ct:function(a,b){a.textContent=null
a.appendChild(this.T(a,b,null,null))},
$iI:1,
gcd:function(a){return a.tagName}}
W.eK.prototype={
$1:function(a){return!!J.P(H.n(a,"$ix")).$iI},
$S:13}
W.l.prototype={$il:1}
W.d.prototype={
ej:function(a,b,c,d){H.j(c,{func:1,args:[W.l]})
if(c!=null)this.cS(a,b,c,!1)},
cS:function(a,b,c,d){return a.addEventListener(b,H.bC(H.j(c,{func:1,args:[W.l]}),1),!1)},
$id:1}
W.ax.prototype={$iax:1}
W.eR.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.ax]},
$at:function(){return[W.ax]},
$ih:1,
$ah:function(){return[W.ax]},
$ib:1,
$ab:function(){return[W.ax]},
$av:function(){return[W.ax]}}
W.eS.prototype={
gk:function(a){return a.length}}
W.eW.prototype={
gk:function(a){return a.length}}
W.ay.prototype={$iay:1}
W.f0.prototype={
gk:function(a){return a.length}}
W.bo.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.x]},
$at:function(){return[W.x]},
$ih:1,
$ah:function(){return[W.x]},
$ib:1,
$ab:function(){return[W.x]},
$ibo:1,
$av:function(){return[W.x]}}
W.aC.prototype={$iaC:1}
W.cU.prototype={
i:function(a){return String(a)},
$icU:1}
W.fn.prototype={
gk:function(a){return a.length}}
W.fo.prototype={
m:function(a,b){return P.aY(a.get(H.z(b)))},
E:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aY(t.value[1]))}},
gO:function(a){var u=H.c([],[P.e])
this.E(a,new W.fp(u))
return u},
gk:function(a){return a.size},
$aW:function(){return[P.e,null]},
$iG:1,
$aG:function(){return[P.e,null]}}
W.fp.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.fq.prototype={
m:function(a,b){return P.aY(a.get(H.z(b)))},
E:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aY(t.value[1]))}},
gO:function(a){var u=H.c([],[P.e])
this.E(a,new W.fr(u))
return u},
gk:function(a){return a.size},
$aW:function(){return[P.e,null]},
$iG:1,
$aG:function(){return[P.e,null]}}
W.fr.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.aD.prototype={$iaD:1}
W.fs.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aD]},
$at:function(){return[W.aD]},
$ih:1,
$ah:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$av:function(){return[W.aD]}}
W.X.prototype={$iX:1}
W.a3.prototype={
ga7:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.f(P.k4("No elements"))
if(t>1)throw H.f(P.k4("More than one element"))
return u.firstChild},
Y:function(a,b){var u,t,s,r
H.q(b,"$ih",[W.x],"$ah")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gG:function(a){var u=this.a.childNodes
return new W.cM(u,u.length,[H.cu(C.M,u,"v",0)])},
gk:function(a){return this.a.childNodes.length},
m:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
$at:function(){return[W.x]},
$ah:function(){return[W.x]},
$ab:function(){return[W.x]}}
W.x.prototype={
f0:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i:function(a){var u=a.nodeValue
return u==null?this.cv(a):u},
em:function(a,b){return a.appendChild(b)},
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
$ih:1,
$ah:function(){return[W.x]},
$ib:1,
$ab:function(){return[W.x]},
$av:function(){return[W.x]}}
W.aE.prototype={$iaE:1,
gk:function(a){return a.length}}
W.fJ.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aE]},
$at:function(){return[W.aE]},
$ih:1,
$ah:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$av:function(){return[W.aE]}}
W.fQ.prototype={
m:function(a,b){return P.aY(a.get(H.z(b)))},
E:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aY(t.value[1]))}},
gO:function(a){var u=H.c([],[P.e])
this.E(a,new W.fR(u))
return u},
gk:function(a){return a.size},
$aW:function(){return[P.e,null]},
$iG:1,
$aG:function(){return[P.e,null]}}
W.fR.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.fT.prototype={
gk:function(a){return a.length}}
W.aG.prototype={$iaG:1}
W.h2.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aG]},
$at:function(){return[W.aG]},
$ih:1,
$ah:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$av:function(){return[W.aG]}}
W.aH.prototype={$iaH:1}
W.h3.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aH]},
$at:function(){return[W.aH]},
$ih:1,
$ah:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$av:function(){return[W.aH]}}
W.aI.prototype={$iaI:1,
gk:function(a){return a.length}}
W.h6.prototype={
m:function(a,b){return a.getItem(H.z(b))},
E:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gO:function(a){var u=H.c([],[P.e])
this.E(a,new W.h7(u))
return u},
gk:function(a){return a.length},
$aW:function(){return[P.e,P.e]},
$iG:1,
$aG:function(){return[P.e,P.e]}}
W.h7.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:27}
W.ao.prototype={$iao:1}
W.bx.prototype={}
W.d9.prototype={
T:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
u=W.la("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a3(t).Y(0,new W.a3(u))
return t}}
W.hd.prototype={
T:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.r.T(u.createElement("table"),b,c,d)
u.toString
u=new W.a3(u)
s=u.ga7(u)
s.toString
u=new W.a3(s)
r=u.ga7(u)
t.toString
r.toString
new W.a3(t).Y(0,new W.a3(r))
return t}}
W.he.prototype={
T:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.r.T(u.createElement("table"),b,c,d)
u.toString
u=new W.a3(u)
s=u.ga7(u)
t.toString
s.toString
new W.a3(t).Y(0,new W.a3(s))
return t}}
W.ca.prototype={$ica:1}
W.aJ.prototype={$iaJ:1}
W.ap.prototype={$iap:1}
W.hg.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.ap]},
$at:function(){return[W.ap]},
$ih:1,
$ah:function(){return[W.ap]},
$ib:1,
$ab:function(){return[W.ap]},
$av:function(){return[W.ap]}}
W.hh.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aJ]},
$at:function(){return[W.aJ]},
$ih:1,
$ah:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$av:function(){return[W.aJ]}}
W.hj.prototype={
gk:function(a){return a.length}}
W.aL.prototype={$iaL:1}
W.aq.prototype={$iaq:1}
W.hn.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aL]},
$at:function(){return[W.aL]},
$ih:1,
$ah:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$av:function(){return[W.aL]}}
W.ho.prototype={
gk:function(a){return a.length}}
W.bb.prototype={}
W.hK.prototype={
i:function(a){return String(a)}}
W.hY.prototype={
gk:function(a){return a.length}}
W.aO.prototype={
gew:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.ai("deltaY is not supported"))},
gev:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.ai("deltaX is not supported"))},
$iaO:1}
W.cg.prototype={
e1:function(a,b){return a.requestAnimationFrame(H.bC(H.j(b,{func:1,ret:-1,args:[P.Z]}),1))},
d0:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ch.prototype={$ich:1}
W.i7.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.J]},
$at:function(){return[W.J]},
$ih:1,
$ah:function(){return[W.J]},
$ib:1,
$ab:function(){return[W.J]},
$av:function(){return[W.J]}}
W.dn.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.P(b)
if(!u.$iah)return!1
return a.left===u.gbX(b)&&a.top===u.gck(b)&&a.width===u.gah(b)&&a.height===u.gaf(b)},
gC:function(a){return W.kk(C.b.gC(a.left),C.b.gC(a.top),C.b.gC(a.width),C.b.gC(a.height))},
gaf:function(a){return a.height},
gah:function(a){return a.width}}
W.im.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.ay]},
$at:function(){return[W.ay]},
$ih:1,
$ah:function(){return[W.ay]},
$ib:1,
$ab:function(){return[W.ay]},
$av:function(){return[W.ay]}}
W.dH.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.x]},
$at:function(){return[W.x]},
$ih:1,
$ah:function(){return[W.x]},
$ib:1,
$ab:function(){return[W.x]},
$av:function(){return[W.x]}}
W.iz.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aI]},
$at:function(){return[W.aI]},
$ih:1,
$ah:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$av:function(){return[W.aI]}}
W.iA.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.ao]},
$at:function(){return[W.ao]},
$ih:1,
$ah:function(){return[W.ao]},
$ib:1,
$ab:function(){return[W.ao]},
$av:function(){return[W.ao]}}
W.i5.prototype={
E:function(a,b){var u,t,s,r,q
H.j(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.gO(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.H)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gO:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.e])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.k(r,t)
s=H.n(r[t],"$ich")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aW:function(){return[P.e,P.e]},
$aG:function(){return[P.e,P.e]}}
W.i8.prototype={
m:function(a,b){return this.a.getAttribute(H.z(b))},
gk:function(a){return this.gO(this).length}}
W.i9.prototype={}
W.je.prototype={}
W.ia.prototype={}
W.ib.prototype={
$1:function(a){return this.a.$1(H.n(a,"$il"))},
$S:24}
W.bd.prototype={
cJ:function(a){var u
if($.dw.a===0){for(u=0;u<262;++u)$.dw.I(0,C.J[u],W.m6())
for(u=0;u<12;++u)$.dw.I(0,C.j[u],W.m7())}},
ae:function(a){return $.kV().L(0,W.bU(a))},
Z:function(a,b,c){var u=$.dw.m(0,H.i(W.bU(a))+"::"+b)
if(u==null)u=$.dw.m(0,"*::"+b)
if(u==null)return!1
return H.jl(u.$4(a,b,c,this))},
$iac:1}
W.v.prototype={
gG:function(a){return new W.cM(a,this.gk(a),[H.cu(this,a,"v",0)])}}
W.cZ.prototype={
ae:function(a){return C.a.bM(this.a,new W.fB(a))},
Z:function(a,b,c){return C.a.bM(this.a,new W.fA(a,b,c))},
$iac:1}
W.fB.prototype={
$1:function(a){return H.n(a,"$iac").ae(this.a)},
$S:16}
W.fA.prototype={
$1:function(a){return H.n(a,"$iac").Z(this.a,this.b,this.c)},
$S:16}
W.dP.prototype={
cM:function(a,b,c,d){var u,t,s
this.a.Y(0,c)
u=b.aC(0,new W.ix())
t=b.aC(0,new W.iy())
this.b.Y(0,u)
s=this.c
s.Y(0,C.L)
s.Y(0,t)},
ae:function(a){return this.a.L(0,W.bU(a))},
Z:function(a,b,c){var u=this,t=W.bU(a),s=u.c
if(s.L(0,H.i(t)+"::"+b))return u.d.el(c)
else if(s.L(0,"*::"+b))return u.d.el(c)
else{s=u.b
if(s.L(0,H.i(t)+"::"+b))return!0
else if(s.L(0,"*::"+b))return!0
else if(s.L(0,H.i(t)+"::*"))return!0
else if(s.L(0,"*::*"))return!0}return!1},
$iac:1}
W.ix.prototype={
$1:function(a){return!C.a.L(C.j,H.z(a))},
$S:17}
W.iy.prototype={
$1:function(a){return C.a.L(C.j,H.z(a))},
$S:17}
W.iC.prototype={
Z:function(a,b,c){if(this.cB(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.L(0,b)
return!1}}
W.iD.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.z(a))},
$S:25}
W.iB.prototype={
ae:function(a){var u=J.P(a)
if(!!u.$ic5)return!1
u=!!u.$im
if(u&&W.bU(a)==="foreignObject")return!1
if(u)return!0
return!1},
Z:function(a,b,c){if(b==="is"||C.c.aF(b,"on"))return!1
return this.ae(a)},
$iac:1}
W.cM.prototype={
p:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sbz(J.kY(u.a,t))
u.c=t
return!0}u.sbz(null)
u.c=s
return!1},
gw:function(a){return this.d},
sbz:function(a){this.d=H.B(a,H.u(this,0))},
$iaz:1}
W.ac.prototype={}
W.iv.prototype={$imL:1}
W.e4.prototype={
bc:function(a){new W.iH(this).$2(a,null)},
al:function(a,b){if(b==null)J.jC(a)
else b.removeChild(a)},
e3:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.l0(a)
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
p=H.D(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ad(r)}t="element unprintable"
try{t=J.as(a)}catch(r){H.ad(r)}try{s=W.bU(a)
this.e2(H.n(a,"$iI"),b,p,t,s,H.n(o,"$iG"),H.z(n))}catch(r){if(H.ad(r) instanceof P.at)throw r
else{this.al(a,b)
window
q="Removing corrupted element "+H.i(t)
if(typeof console!="undefined")window.console.warn(q)}}},
e2:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.al(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.ae(a)){o.al(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.Z(a,"is",g)){o.al(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gO(f)
t=H.c(u.slice(0),[H.u(u,0)])
for(s=f.gO(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.k(t,s)
r=t[s]
q=o.a
p=J.l2(r)
H.z(r)
if(!q.Z(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.i(e)+" "+r+'="'+H.i(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.P(a).$ica)o.bc(a.content)},
$imx:1}
W.iH.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.e3(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.al(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ad(s)
r=H.n(u,"$ix")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.n(t,"$ix")}},
$S:26}
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
W.cn.prototype={}
W.co.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dV.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.cp.prototype={}
W.cq.prototype={}
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
P.iM.prototype={
$2:function(a,b){this.a[a]=b},
$S:11}
P.eT.prototype={
gaN:function(){var u=this.b,t=H.a9(u,"t",0),s=W.I
return new H.fj(new H.cf(u,H.j(new P.eU(),{func:1,ret:P.K,args:[t]}),[t]),H.j(new P.eV(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.bk(this.gaN().a)},
m:function(a,b){var u=this.gaN()
return u.b.$1(J.j1(u.a,b))},
gG:function(a){var u=P.jQ(this.gaN(),!1,W.I)
return new J.ae(u,u.length,[H.u(u,0)])},
$at:function(){return[W.I]},
$ah:function(){return[W.I]},
$ab:function(){return[W.I]}}
P.eU.prototype={
$1:function(a){return!!J.P(H.n(a,"$ix")).$iI},
$S:13}
P.eV.prototype={
$1:function(a){return H.eh(H.n(a,"$ix"),"$iI")},
$S:39}
P.iq.prototype={}
P.ah.prototype={}
P.aU.prototype={$iaU:1}
P.fb.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
t:function(a,b){return this.m(a,b)},
$at:function(){return[P.aU]},
$ih:1,
$ah:function(){return[P.aU]},
$ib:1,
$ab:function(){return[P.aU]},
$av:function(){return[P.aU]}}
P.aW.prototype={$iaW:1}
P.fE.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
t:function(a,b){return this.m(a,b)},
$at:function(){return[P.aW]},
$ih:1,
$ah:function(){return[P.aW]},
$ib:1,
$ab:function(){return[P.aW]},
$av:function(){return[P.aW]}}
P.fK.prototype={
gk:function(a){return a.length}}
P.c5.prototype={$ic5:1}
P.hc.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
t:function(a,b){return this.m(a,b)},
$at:function(){return[P.e]},
$ih:1,
$ah:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$av:function(){return[P.e]}}
P.m.prototype={
gbO:function(a){return new P.eT(a,new W.a3(a))},
T:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.ac])
C.a.h(p,W.kj(null))
C.a.h(p,W.kl())
C.a.h(p,new W.iB())
c=new W.e4(new W.cZ(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.m).es(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a3(s)
q=p.ga7(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$im:1}
P.aX.prototype={$iaX:1}
P.hp.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
t:function(a,b){return this.m(a,b)},
$at:function(){return[P.aX]},
$ih:1,
$ah:function(){return[P.aX]},
$ib:1,
$ab:function(){return[P.aX]},
$av:function(){return[P.aX]}}
P.dz.prototype={}
P.dA.prototype={}
P.dK.prototype={}
P.dL.prototype={}
P.dW.prototype={}
P.dX.prototype={}
P.e2.prototype={}
P.e3.prototype={}
P.em.prototype={
gk:function(a){return a.length}}
P.en.prototype={
m:function(a,b){return P.aY(a.get(H.z(b)))},
E:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aY(t.value[1]))}},
gO:function(a){var u=H.c([],[P.e])
this.E(a,new P.eo(u))
return u},
gk:function(a){return a.size},
$aW:function(){return[P.e,null]},
$iG:1,
$aG:function(){return[P.e,null]}}
P.eo.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
P.ep.prototype={
gk:function(a){return a.length}}
P.bl.prototype={}
P.fF.prototype={
gk:function(a){return a.length}}
P.dl.prototype={}
P.cB.prototype={$icB:1}
P.d2.prototype={$id2:1}
P.bv.prototype={
cl:function(a,b,c){return a.uniform1f(b,c)},
fc:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibv:1}
P.d6.prototype={$id6:1}
P.de.prototype={$ide:1}
P.h4.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return P.aY(a.item(b))},
t:function(a,b){return this.m(a,b)},
$at:function(){return[[P.G,,,]]},
$ih:1,
$ah:function(){return[[P.G,,,]]},
$ib:1,
$ab:function(){return[[P.G,,,]]},
$av:function(){return[[P.G,,,]]}}
P.dS.prototype={}
P.dT.prototype={}
O.U.prototype={
bg:function(a){var u=this
u.sdc(H.c([],[a]))
u.sbC(null)
u.sbB(null)
u.sbD(null)},
aE:function(a,b){var u=this,t={func:1,ret:-1,args:[P.y,[P.h,H.a9(u,"U",0)]]}
H.j(a,t)
H.j(b,t)
u.sbC(null)
u.sbB(a)
u.sbD(b)},
dM:function(a){H.q(a,"$ih",[H.a9(this,"U",0)],"$ah")
return!0},
cH:function(a,b){var u
H.q(b,"$ih",[H.a9(this,"U",0)],"$ah")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gG:function(a){var u=this.a
return new J.ae(u,u.length,[H.u(u,0)])},
t:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.a9(s,"U",0)
H.B(b,r)
r=[r]
if(H.D(s.dM(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cH(t,H.c([b],r))}},
sdc:function(a){this.a=H.q(a,"$ib",[H.a9(this,"U",0)],"$ab")},
sbC:function(a){this.b=H.j(a,{func:1,ret:P.K,args:[[P.h,H.a9(this,"U",0)]]})},
sbB:function(a){this.c=H.j(a,{func:1,ret:-1,args:[P.y,[P.h,H.a9(this,"U",0)]]})},
sbD:function(a){H.j(a,{func:1,ret:-1,args:[P.y,[P.h,H.a9(this,"U",0)]]})},
$ih:1}
O.c_.prototype={
gk:function(a){return this.a.length},
gq:function(){var u=this.b
return u==null?this.b=D.an():u},
a8:function(){var u=this.b
if(u!=null)u.S(null)},
gan:function(a){var u=this.a
if(u.length>0)return C.a.gaz(u)
else return V.fm()},
c7:function(a){var u=this.a
if(a==null)C.a.h(u,V.fm())
else C.a.h(u,a)
this.a8()},
b7:function(){var u=this.a
if(u.length>0){u.pop()
this.a8()}},
saP:function(a){this.a=H.q(a,"$ib",[V.ba],"$ab")}}
E.eq.prototype={}
E.a1.prototype={
cm:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aB(0,b,s):null
if(!J.T(q,s.x)){u=s.x
s.x=q
t=new D.R("matrix",u,q,[V.ba])
t.b=!0
s.a4(t)}for(r=s.y.a,r=new J.ae(r,r.length,[H.u(r,0)]);r.p();)r.d.cm(0,b)},
ag:function(a){var u,t,s,r,q,p,o=this,n=a.dx,m=o.x
n.toString
if(m==null)C.a.h(n.a,n.gan(n))
else C.a.h(n.a,m.J(0,n.gan(n)))
n.a8()
a.c8(o.f)
n=a.dy
u=(n&&C.a).gaz(n)
if(u!=null&&o.d!=null){n=u.a
if(n==null){n=u.d
u.f
m=n?"High":"Grey"
m+="ViewDepth"
t=a.fr.m(0,m)
if(t==null){m=a.a
s=n?"High":"Grey"
s+="ViewDepth"
t=new A.eD(m,s)
t.cF(m,s)
r="uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n".charCodeAt(0)==0?"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n":"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n"
q=(n?"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n   vec3 clr = vec3(f, f, f);\n":"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n")+"  gl_FragColor = vec4(clr, 1.0);\n}\n"
t.c=r
t.d=q.charCodeAt(0)==0?q:q
t.e=t.bw(r,35633)
t.f=t.bw(t.d,35632)
r=m.createProgram()
t.r=r
m.attachShader(r,t.e)
m.attachShader(t.r,t.f)
m.linkProgram(t.r)
if(!H.D(H.jl(m.getProgramParameter(t.r,35714)))){p=m.getProgramInfoLog(t.r)
m.deleteProgram(t.r)
H.aa(P.a2("Failed to link shader: "+H.i(p)))}t.e8()
t.ea()
t.z=t.x.m(0,"posAttr")
t.Q=H.eh(t.y.m(0,"width"),"$icd")
t.ch=H.eh(t.y.m(0,"stop"),"$icd")
t.cx=H.eh(t.y.m(0,"viewObjMat"),"$ice")
t.cy=H.eh(t.y.m(0,"projMat"),"$ice")
if(s.length===0)H.aa(P.a2("May not cache a shader with no name."))
if(a.fr.bQ(0,s))H.aa(P.a2('Shader cache already contains a shader by the name "'+s+'".'))
a.fr.I(0,s,t)}u.a=t
n=t}m=o.e
if((!(m instanceof Z.cD)?o.e=null:m)==null){n=o.d.eq(new Z.hZ(a.a),$.aZ())
m=n.ez($.aZ())
s=u.a
m.e=s.z.c
o.e=n
n=s}m=a.a
m.useProgram(n.r)
n.x.ey()
s=u.b
r=u.c
q=n.Q
C.k.cl(q.a,q.d,s-r)
r=u.c
s=n.ch
C.k.cl(s.a,s.d,r)
r=a.cy
r=r.gan(r)
s=n.cy
s.toString
s.bd(r.cg(0,!0))
s=a.cx
if(s==null){s=a.db
s=s.gan(s)
r=a.dx
r=a.cx=s.J(0,r.gan(r))
s=r}n=n.cx
n.toString
n.bd(s.cg(0,!0))
u.e
n=o.e
n.aZ(a)
n.ag(a)
n.fb(a)
n=u.a
n.toString
m.useProgram(null)
n.x.ex()}for(n=o.y.a,n=new J.ae(n,n.length,[H.u(n,0)]);n.p();)n.d.ag(a)
a.c6()
a.dx.b7()},
gq:function(){var u=this.z
return u==null?this.z=D.an():u},
a4:function(a){var u=this.z
if(u!=null)u.S(a)},
V:function(){return this.a4(null)},
c3:function(a){H.n(a,"$iC")
this.e=null
this.a4(a)},
eT:function(){return this.c3(null)},
c1:function(a){this.a4(H.n(a,"$iC"))},
eS:function(){return this.c1(null)},
c_:function(a){this.a4(H.n(a,"$iC"))},
eP:function(){return this.c_(null)},
eO:function(a,b){var u,t,s,r,q,p,o
H.q(b,"$ih",[E.a1],"$ah")
for(u=b.length,t=this.gbZ(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.H)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bV()
o.sa1(null)
o.saj(null)
o.c=null
o.d=0
p.z=o}H.j(t,s)
if(o.a==null)o.sa1(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.V()},
eR:function(a,b){var u,t
H.q(b,"$ih",[E.a1],"$ah")
for(u=b.gG(b),t=this.gbZ();u.p();)u.gw(u).gq().H(0,t)
this.V()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
scI:function(a,b){this.y=H.q(b,"$iU",[E.a1],"$aU")},
$ijT:1}
E.fM.prototype={
cD:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.b4(Date.now(),!1)
s.y=0
s.cx=null
u=new O.c_()
t=[V.ba]
u.saP(H.c([],t))
u.b=null
u.gq().h(0,new E.fN(s))
s.cy=u
u=new O.c_()
u.saP(H.c([],t))
u.b=null
u.gq().h(0,new E.fO(s))
s.db=u
u=new O.c_()
u.saP(H.c([],t))
u.b=null
u.gq().h(0,new E.fP(s))
s.dx=u
s.see(H.c([],[O.by]))
u=s.dy;(u&&C.a).h(u,null)
s.seb(new H.aB([P.e,A.c6]))},
c8:function(a){var u=this.dy,t=a==null?(u&&C.a).gaz(u):a;(u&&C.a).h(u,t)},
c6:function(){var u=this.dy
if(u.length>1)u.pop()},
see:function(a){this.dy=H.q(a,"$ib",[O.by],"$ab")},
seb:function(a){this.fr=H.q(a,"$iG",[P.e,A.c6],"$aG")}}
E.fN.prototype={
$1:function(a){H.n(a,"$iC")},
$S:6}
E.fO.prototype={
$1:function(a){H.n(a,"$iC")
this.a.cx=null},
$S:6}
E.fP.prototype={
$1:function(a){H.n(a,"$iC")
this.a.cx=null},
$S:6}
E.db.prototype={
bj:function(a){H.n(a,"$iC")
this.ca()},
bi:function(){return this.bj(null)},
geD:function(){var u,t=this,s=Date.now(),r=C.e.ad(P.jK(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.b4(s,!1)
return u/r},
bF:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.J()
if(typeof r!=="number")return H.bi(r)
u=C.b.bW(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.J()
t=C.b.bW(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.k7(C.h,s.gf3())}},
ca:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.j(new E.hi(this),{func:1,ret:-1,args:[P.Z]})
C.u.d0(u)
C.u.e1(u,W.ks(t,P.Z))}},
f2:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.bF()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.b4(r,!1)
s.y=P.jK(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.a8()
r=s.db
C.a.sk(r.a,0)
r.a8()
r=s.dx
C.a.sk(r.a,0)
r.a8()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.ag(p.e)}s=p.z
if(s!=null)s.S(null)}catch(q){u=H.ad(q)
t=H.bD(q)
P.jw("Error: "+H.i(u))
P.jw("Stack: "+H.i(t))
throw H.f(u)}}}
E.hi.prototype={
$1:function(a){var u
H.mh(a)
u=this.a
if(u.ch){u.ch=!1
u.f2()}},
$S:31}
Z.dj.prototype={$imr:1}
Z.cC.prototype={
aZ:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ad(s)
t=P.a2('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.f(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.hZ.prototype={$ims:1}
Z.cD.prototype={
ez:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aZ:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aZ(a)},
fb:function(a){var u,t,s
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
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.as(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(p,", ")+"\nAttrs:   "+C.a.l(r,", ")},
sd7:function(a){this.b=H.q(a,"$ib",[Z.bY],"$ab")},
$imA:1}
Z.bY.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bt(this.c)+"'")+"]"}}
Z.di.prototype={
gbe:function(a){var u=this.a,t=(u&$.aZ().a)!==0?3:0
if((u&$.bI().a)!==0)t+=3
if((u&$.bH().a)!==0)t+=3
if((u&$.bJ().a)!==0)t+=2
if((u&$.bK().a)!==0)t+=3
if((u&$.cv().a)!==0)t+=3
if((u&$.cw().a)!==0)t+=4
if((u&$.bL().a)!==0)++t
return(u&$.bG().a)!==0?t+4:t},
en:function(a){var u,t=$.aZ(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bI()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bH()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bJ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bK()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bL()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bG()
if((s&t.a)!==0)if(u===a)return t
return $.kU()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.di))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.e]),t=this.a
if((t&$.aZ().a)!==0)C.a.h(u,"Pos")
if((t&$.bI().a)!==0)C.a.h(u,"Norm")
if((t&$.bH().a)!==0)C.a.h(u,"Binm")
if((t&$.bJ().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bK().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cv().a)!==0)C.a.h(u,"Clr3")
if((t&$.cw().a)!==0)C.a.h(u,"Clr4")
if((t&$.bL().a)!==0)C.a.h(u,"Weight")
if((t&$.bG().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.et.prototype={}
D.bV.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.C]}
H.j(b,u)
if(this.a==null)this.sa1(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
H:function(a,b){var u,t,s=this
H.j(b,{func:1,ret:-1,args:[D.C]})
u=s.a
u=u==null?null:C.a.L(u,b)
if(u===!0){u=s.a
t=(u&&C.a).H(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.L(u,b)
if(u===!0){u=s.b
t=(u&&C.a).H(u,b)||t}return t},
S:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.C()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.E(P.jQ(u,!0,{func:1,ret:-1,args:[D.C]}),new D.eN(q))
u=r.b
if(u!=null){r.saj(H.c([],[{func:1,ret:-1,args:[D.C]}]))
C.a.E(u,new D.eO(q))}return!0},
aq:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.S(u)}}},
sa1:function(a){this.a=H.q(a,"$ib",[{func:1,ret:-1,args:[D.C]}],"$ab")},
saj:function(a){this.b=H.q(a,"$ib",[{func:1,ret:-1,args:[D.C]}],"$ab")}}
D.eN.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.C]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.eO.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.C]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.C.prototype={}
D.cN.prototype={}
D.cO.prototype={}
D.R.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.cE.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cE))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.cR.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cR))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.fa.prototype={
eY:function(a){this.d.h(0,a.a)
return!1},
eU:function(a){this.d.H(0,a.a)
return!1},
sdV:function(a){this.d=H.q(a,"$ik3",[P.y],"$ak3")}}
X.fg.prototype={
b6:function(a,b){this.r=a.a
return!1},
ap:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.cs()
if(typeof u!=="number")return u.co()
this.r=(u&~t)>>>0
return!1},
ao:function(a,b){return!1},
eZ:function(a){return!1},
dB:function(a,b,c){return}}
X.c0.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.c0))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.D(this.b)?"Alt+":""
return u+(H.D(this.c)?"Shift+":"")}}
X.ft.prototype={
b6:function(a,b){this.f=a.a
return!1},
ap:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.cs()
if(typeof u!=="number")return u.co()
this.f=(u&~t)>>>0
return!1},
ao:function(a,b){return!1},
f_:function(a,b){return!1}}
X.hm.prototype={
eX:function(a){H.q(a,"$ib",[V.a6],"$ab")
return!1},
eV:function(a){H.q(a,"$ib",[V.a6],"$ab")
return!1},
eW:function(a){H.q(a,"$ib",[V.a6],"$ab")
return!1}}
X.dh.prototype={
bv:function(a){var u=a.keyCode,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.cR(u,new X.c0(t,a.altKey,a.shiftKey))},
ac:function(a){if(!H.D(a.ctrlKey))H.D(a.metaKey)
a.shiftKey},
aY:function(a){if(!H.D(a.ctrlKey))H.D(a.metaKey)
a.shiftKey},
a2:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.u()
u=t.top
if(typeof r!=="number")return r.u()
return new V.a6(s-q,r-u)},
ak:function(a){return new V.aN(a.movementX,a.movementY)},
aV:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a6])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s){r=u[s]
q=C.b.W(r.pageX)
C.b.W(r.pageY)
p=o.left
C.b.W(r.pageX)
C.a.h(n,new V.a6(q-p,C.b.W(r.pageY)-o.top))}return n},
a0:function(a){var u=a.buttons,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.cE(u,new X.c0(t,a.altKey,a.shiftKey))},
aQ:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.u()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.u()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
du:function(a){this.f=!0},
dg:function(a){this.f=!1},
dm:function(a){H.n(a,"$iX")
if(H.D(this.f)&&this.aQ(a))a.preventDefault()},
dA:function(a){var u
H.n(a,"$iaC")
if(!H.D(this.f))return
u=this.bv(a)
this.b.eY(u)},
dw:function(a){var u
H.n(a,"$iaC")
if(!H.D(this.f))return
u=this.bv(a)
this.b.eU(u)},
dD:function(a){var u,t,s,r,q=this
H.n(a,"$iX")
u=q.a
u.focus()
q.f=!0
q.ac(a)
if(H.D(q.x)){t=q.a0(a)
s=q.ak(a)
if(q.d.b6(t,s))a.preventDefault()
return}if(H.D(q.r)){q.y=a
u.requestPointerLock()
return}t=q.a0(a)
r=q.a2(a)
if(q.c.b6(t,r))a.preventDefault()},
dH:function(a){var u,t,s,r=this
H.n(a,"$iX")
r.ac(a)
u=r.a0(a)
if(H.D(r.x)){t=r.ak(a)
if(r.d.ap(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.a2(a)
if(r.c.ap(u,s))a.preventDefault()},
ds:function(a){var u,t,s,r=this
H.n(a,"$iX")
if(!r.aQ(a)){r.ac(a)
u=r.a0(a)
if(H.D(r.x)){t=r.ak(a)
if(r.d.ap(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.a2(a)
if(r.c.ap(u,s))a.preventDefault()}},
dF:function(a){var u,t,s,r=this
H.n(a,"$iX")
r.ac(a)
u=r.a0(a)
if(H.D(r.x)){t=r.ak(a)
if(r.d.ao(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.a2(a)
if(r.c.ao(u,s))a.preventDefault()},
dq:function(a){var u,t,s,r=this
H.n(a,"$iX")
if(!r.aQ(a)){r.ac(a)
u=r.a0(a)
if(H.D(r.x)){t=r.ak(a)
if(r.d.ao(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.a2(a)
if(r.c.ao(u,s))a.preventDefault()}},
dJ:function(a){var u,t,s=this
H.n(a,"$iaO")
s.ac(a)
u=new V.aN((a&&C.t).gev(a),C.t.gew(a)).K(0,180)
if(H.D(s.x)){if(s.d.eZ(u))a.preventDefault()
return}if(H.D(s.r))return
t=s.a2(a)
if(s.c.f_(u,t))a.preventDefault()},
dL:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.a0(s.y)
t=s.a2(s.y)
s.d.dB(u,t,r)}},
dU:function(a){var u,t=this
H.n(a,"$iaq")
t.a.focus()
t.f=!0
t.aY(a)
u=t.aV(a)
if(t.e.eX(u))a.preventDefault()},
dQ:function(a){var u
H.n(a,"$iaq")
this.aY(a)
u=this.aV(a)
if(this.e.eV(u))a.preventDefault()},
dS:function(a){var u
H.n(a,"$iaq")
this.aY(a)
u=this.aV(a)
if(this.e.eW(u))a.preventDefault()},
sd1:function(a){this.z=H.q(a,"$ib",[[P.c9,P.F]],"$ab")}}
V.b2.prototype={
u:function(a,b){var u=this,t=C.b.u(u.a,b.gfm()),s=C.b.u(u.b,b.gfe()),r=C.b.u(u.c,b.gfi()),q=C.b.u(u.d,b.gfh(b))
return new V.b2(V.ef(t),V.ef(s),V.ef(r),V.ef(q))},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b2))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.L(u.a,3,0)+", "+V.L(u.b,3,0)+", "+V.L(u.c,3,0)+", "+V.L(u.d,3,0)+"]"}}
V.eM.prototype={}
V.ba.prototype={
cg:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.w])
return t},
J:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aV(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ba))return!1
u=b.a
t=$.Q().a
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
A:function(a){var u,t,s,r,q,p=this,o=[P.w],n=V.iP(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.iP(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.iP(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.iP(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
F:function(){return this.A("")}}
V.a6.prototype={
u:function(a,b){return new V.a6(C.b.u(this.a,b.gfo(b)),C.b.u(this.b,b.gfp(b)))},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}}
V.ag.prototype={
u:function(a,b){return new V.ag(this.a-b.a,this.b-b.b,this.c-b.c)},
J:function(a,b){return new V.ag(this.a*b,this.b*b,this.c*b)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ag))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}
V.d4.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d4))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.L(u.a,3,0)+", "+V.L(u.b,3,0)+", "+V.L(u.c,3,0)+", "+V.L(u.d,3,0)+"]"}}
V.aN.prototype={
b4:function(a){var u,t=this.a
if(typeof t!=="number")return t.J()
u=this.b
if(typeof u!=="number")return u.J()
return Math.sqrt(t*t+u*u)},
u:function(a,b){var u,t=this.a,s=b.gfj(b)
if(typeof t!=="number")return t.u()
s=C.b.u(t,s)
t=this.b
u=b.gfk(b)
if(typeof t!=="number")return t.u()
return new V.aN(s,C.b.u(t,u))},
K:function(a,b){var u,t
if(Math.abs(b-0)<$.Q().a){u=$.kb
return u==null?$.kb=new V.aN(0,0):u}u=this.a
if(typeof u!=="number")return u.K()
t=this.b
if(typeof t!=="number")return t.K()
return new V.aN(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aN))return!1
u=b.a
t=this.a
s=$.Q()
s.toString
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.bi(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.bi(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}}
V.S.prototype={
b4:function(a){return Math.sqrt(this.M(this))},
M:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
am:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.S(u*t-s*r,s*q-p*t,p*r-u*q)},
P:function(a,b){return new V.S(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.S(this.a-b.a,this.b-b.b,this.c-b.c)},
aD:function(a){return new V.S(-this.a,-this.b,-this.c)},
J:function(a,b){return new V.S(this.a*b,this.b*b,this.c*b)},
K:function(a,b){if(Math.abs(b-0)<$.Q().a)return V.hN()
return new V.S(this.a/b,this.b/b,this.c/b)},
eH:function(){var u=$.Q().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}
U.cG.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.an():u},
aB:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cG))return!1
return J.T(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")}}
U.bX.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.an():u},
R:function(a){var u
H.n(a,"$iC")
u=this.e
if(u!=null)u.S(a)},
cK:function(){return this.R(null)},
de:function(a,b){var u,t,s,r,q,p,o,n=U.a4
H.q(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gbk(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.H)(b),++q){p=b[q]
if(p!=null){o=p.gq()
o.toString
H.j(t,s)
if(o.a==null)o.sa1(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.cN([n])
n.b=!0
this.R(n)},
dO:function(a,b){var u,t,s=U.a4
H.q(b,"$ih",[s],"$ah")
for(u=b.gG(b),t=this.gbk();u.p();)u.gw(u).gq().H(0,t)
s=new D.cO([s])
s.b=!0
this.R(s)},
aB:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.bb()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ae(r,r.length,[H.u(r,0)]),u=null;r.p();){q=r.d
if(q!=null){t=q.aB(0,b,c)
if(t!=null)u=u==null?t:t.J(0,u)}}s.f=u==null?V.fm():u
r=s.e
if(r!=null)r.aq(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bX))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.k(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.k(r,t)
if(!J.T(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ah:function(){return[U.a4]},
$aU:function(){return[U.a4]},
$ia4:1}
U.a4.prototype={}
U.d5.prototype={
gq:function(){var u=this.y
return u==null?this.y=D.an():u},
R:function(a){var u=this.y
if(u!=null)u.S(a)},
scn:function(a){var u
a=V.jy(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.Q().a)){this.a=a
u=new D.R("yaw",u,a,[P.w])
u.b=!0
this.R(u)}},
sc5:function(a,b){var u
b=V.jy(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.Q().a)){this.b=b
u=new D.R("pitch",u,b,[P.w])
u.b=!0
this.R(u)}},
scb:function(a){var u
a=V.jy(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.Q().a)){this.c=a
u=new D.R("roll",u,a,[P.w])
u.b=!0
this.R(u)}},
sbU:function(a){var u=this.d
if(!(Math.abs(u-a)<$.Q().a)){this.d=a
u=new D.R("deltaYaw",u,a,[P.w])
u.b=!0
this.R(u)}},
sbS:function(a){var u=this.e
if(!(Math.abs(u-a)<$.Q().a)){this.e=a
u=new D.R("deltaPitch",u,a,[P.w])
u.b=!0
this.R(u)}},
sbT:function(a){var u=this.f
if(!(Math.abs(u-a)<$.Q().a)){this.f=a
u=new D.R("deltaRoll",u,a,[P.w])
u.b=!0
this.R(u)}},
aB:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.scn(s.a+s.d*b.y)
s.sc5(0,s.b+s.e*b.y)
s.scb(s.c+s.f*b.y)
r=s.c
u=Math.cos(r)
t=Math.sin(r)
r=V.aV(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)
q=s.b
u=Math.cos(q)
t=Math.sin(q)
r=r.J(0,V.aV(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1))
q=s.a
u=Math.cos(q)
t=Math.sin(q)
s.x=r.J(0,V.aV(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1))
r=s.y
if(r!=null)r.aq(0)}return s.x},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.d5))return!1
u=r.a
t=b.a
s=$.Q().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.L(u.a,3,0)+", "+V.L(u.b,3,0)+", "+V.L(u.c,3,0)+"], ["+V.L(u.d,3,0)+", "+V.L(u.e,3,0)+", "+V.L(u.f,3,0)+"]"}}
M.cK.prototype={
a_:function(a){var u
H.n(a,"$iC")
u=this.y
if(u!=null)u.S(a)},
cL:function(){return this.a_(null)},
di:function(a,b){var u,t,s,r,q,p,o,n=E.a1
H.q(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gX(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.H)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bV()
o.sa1(null)
o.saj(null)
o.c=null
o.d=0
p.z=o}H.j(t,s)
if(o.a==null)o.sa1(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.cN([n])
n.b=!0
this.a_(n)},
dk:function(a,b){var u,t,s=E.a1
H.q(b,"$ih",[s],"$ah")
for(u=b.gG(b),t=this.gX();u.p();)u.gw(u).gq().H(0,t)
s=new D.cO([s])
s.b=!0
this.a_(s)},
sce:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().H(0,t.gX())
u=t.d
t.d=a
if(a!=null)a.gq().h(0,t.gX())
s=new D.R("technique",u,t.d,[O.by])
s.b=!0
t.a_(s)}},
gq:function(){var u=this.y
return u==null?this.y=D.an():u},
ag:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.c8(a1.d)
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
if(typeof s!=="number")return H.bi(s)
o=C.b.W(p*s)
p=q.b
if(typeof r!=="number")return H.bi(r)
n=C.b.W(p*r)
p=C.b.W(q.c*s)
a2.c=p
q=C.b.W(q.d*r)
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
i=V.aV(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.c7(i)
t=$.jW
if(t==null){t=$.jY
if(t==null)t=$.jY=new V.ag(0,0,0)
q=$.ke
if(q==null)q=$.ke=new V.S(0,1,0)
p=$.kc
if(p==null)p=$.kc=new V.S(0,0,-1)
h=p.K(0,Math.sqrt(p.M(p)))
q=q.am(h)
g=q.K(0,Math.sqrt(q.M(q)))
f=h.am(g)
e=new V.S(t.a,t.b,t.c)
d=g.aD(0).M(e)
c=f.aD(0).M(e)
b=h.aD(0).M(e)
t=V.aV(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.jW=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.J(0,a)}a2.db.c7(a)
for(u=a1.e.a,u=new J.ae(u,u.length,[H.u(u,0)]);u.p();)u.d.cm(0,a2)
for(u=a1.e.a,u=new J.ae(u,u.length,[H.u(u,0)]);u.p();)u.d.ag(a2)
a1.b.toString
a2.cy.b7()
a2.db.b7()
a1.c.toString
a2.c6()},
scV:function(a,b){this.e=H.q(b,"$iU",[E.a1],"$aU")},
$imy:1}
A.cz.prototype={}
A.el.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ey:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
ex:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.eD.prototype={}
A.c6.prototype={
cF:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
bw:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.D(H.jl(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.a2("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
e8:function(){var u,t,s,r=this,q=H.c([],[A.cz]),p=r.a,o=H.a_(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.bi(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.cz(p,t.name,s))}r.x=new A.el(q)},
ea:function(){var u,t,s,r=this,q=H.c([],[A.dd]),p=r.a,o=H.a_(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.bi(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.eu(t.type,t.size,t.name,s))}r.y=new A.hC(q)},
ab:function(a,b,c){var u=this.a
if(a===1)return new A.hu(u,b,c)
else return A.jd(u,this.r,b,a,c)},
cY:function(a,b,c){var u=this.a
if(a===1)return new A.hF(u,b,c)
else return A.jd(u,this.r,b,a,c)},
cZ:function(a,b,c){var u=this.a
if(a===1)return new A.hG(u,b,c)
else return A.jd(u,this.r,b,a,c)},
aw:function(a,b){return new P.dt(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
eu:function(a,b,c,d){var u=this
switch(a){case 5120:return u.ab(b,c,d)
case 5121:return u.ab(b,c,d)
case 5122:return u.ab(b,c,d)
case 5123:return u.ab(b,c,d)
case 5124:return u.ab(b,c,d)
case 5125:return u.ab(b,c,d)
case 5126:return new A.cd(u.a,c,d)
case 35664:return new A.hw(u.a,c,d)
case 35665:return new A.hy(u.a,c,d)
case 35666:return new A.hA(u.a,c,d)
case 35667:return new A.hx(u.a,c,d)
case 35668:return new A.hz(u.a,c,d)
case 35669:return new A.hB(u.a,c,d)
case 35674:return new A.hD(u.a,c,d)
case 35675:return new A.hE(u.a,c,d)
case 35676:return new A.ce(u.a,c,d)
case 35678:return u.cY(b,c,d)
case 35680:return u.cZ(b,c,d)
case 35670:throw H.f(u.aw("BOOL",c))
case 35671:throw H.f(u.aw("BOOL_VEC2",c))
case 35672:throw H.f(u.aw("BOOL_VEC3",c))
case 35673:throw H.f(u.aw("BOOL_VEC4",c))
default:throw H.f(P.a2("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.dd.prototype={}
A.hC.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
i:function(a){return this.F()},
F:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.H)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.hu.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.hx.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.hz.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.hB.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.hv.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
seh:function(a){H.q(a,"$ib",[P.y],"$ab")}}
A.cd.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.hw.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.hy.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.hA.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.hD.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.hE.prototype={
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.ce.prototype={
bd:function(a){var u=new Float32Array(H.jg(H.q(a,"$ib",[P.w],"$ab")))
C.k.fc(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.hF.prototype={
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.hG.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.j_.prototype={
$1:function(a){return new V.ag(Math.cos(a),Math.sin(a),0)},
$S:34}
F.iN.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.jB(n.$1(o),m)
m=J.kX(J.jB(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.S(m.a,m.b,m.c)
u=m.K(0,Math.sqrt(m.M(m)))
n=$.kd
if(n==null){n=new V.S(1,0,0)
$.kd=n
t=n}else t=n
if(!J.T(u,t)){n=$.kf
if(n==null){n=new V.S(0,0,1)
$.kf=n
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
m=new V.ag(l.a+(n.a-m.a),l.b+(n.b-m.b),l.c+(n.c-m.c))
if(!J.T(a.f,m)){a.f=m
n=a.a
if(n!=null)n.V()}},
$S:35}
F.V.prototype={
ay:function(){var u=this
if(!u.gbV()){C.a.H(u.a.a.d.b,u)
u.a.a.V()}u.dY()
u.dZ()
u.e_()},
e5:function(a){this.a=a
C.a.h(a.d.b,this)},
e6:function(a){this.b=a
C.a.h(a.d.c,this)},
e7:function(a){this.c=a
C.a.h(a.d.d,this)},
dY:function(){var u=this.a
if(u!=null){C.a.H(u.d.b,this)
this.a=null}},
dZ:function(){var u=this.b
if(u!=null){C.a.H(u.d.c,this)
this.b=null}},
e_:function(){var u=this.c
if(u!=null){C.a.H(u.d.d,this)
this.c=null}},
gbV:function(){return this.a==null||this.b==null||this.c==null},
cT:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.hN()
if(q!=null)s=s.P(0,q)
if(u!=null)s=s.P(0,u)
if(t!=null)s=s.P(0,t)
if(s.eH())return
return s.K(0,Math.sqrt(s.M(s)))},
cU:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.u(0,q)
r=new V.S(r.a,r.b,r.c)
s=r.K(0,Math.sqrt(r.M(r)))
r=t.u(0,q)
r=new V.S(r.a,r.b,r.c)
r=s.am(r.K(0,Math.sqrt(r.M(r))))
return r.K(0,Math.sqrt(r.M(r)))},
b0:function(){var u,t=this
if(t.d!=null)return!0
u=t.cT()
if(u==null){u=t.cU()
if(u==null)return!1}t.d=u
t.a.a.V()
return!0},
gbP:function(a){var u=this
if(J.T(u.a,u.b))return!0
if(J.T(u.b,u.c))return!0
if(J.T(u.c,u.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
A:function(a){var u,t,s=this
if(s.gbV())return a+"disposed"
u=a+C.c.a5(J.as(s.a.e),0)+", "+C.c.a5(J.as(s.b.e),0)+", "+C.c.a5(J.as(s.c.e),0)+" {"
t=s.d
u=(t!=null?u+(t.i(0)+", "):u+"-, ")+"-}"
return u},
F:function(){return this.A("")}}
F.eQ.prototype={}
F.h1.prototype={
b5:function(a,b,c){var u,t=b.a
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
F.b9.prototype={}
F.fc.prototype={}
F.ht.prototype={}
F.br.prototype={}
F.d7.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.an():u},
eM:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.u(o,0)])
for(o=[F.aj];u.length!==0;){t=C.a.geB(u)
C.a.c9(u,0)
if(t!=null){s=H.c([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.k(u,r)
q=u[r]
if(q!=null&&a.b5(0,t,q)){C.a.h(s,q)
C.a.c9(u,r)}}if(s.length>1)b.eL(s)}}p.a.D()
p.c.b8()
p.d.b8()
p.b.f1()
p.c.b9(new F.ht())
p.d.b9(new F.h1())
o=p.e
if(o!=null)o.aq(0)},
eq:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aZ()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bI().a)!==0)++s
if((t&$.bH().a)!==0)++s
if((t&$.bJ().a)!==0)++s
if((t&$.bK().a)!==0)++s
if((t&$.cv().a)!==0)++s
if((t&$.cw().a)!==0)++s
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
o=H.c(u,[Z.cC])
for(n=0,m=0;m<s;++m){l=a3.en(m)
k=l.gbe(l)
C.a.I(o,m,new Z.cC(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.k(u,j)
i=u[j].eJ(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.I(p,h,i[g]);++h}}n+=k}H.q(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.jg(p)),35044)
u.bindBuffer(a0,null)
e=new Z.cD(new Z.dj(a0,f),o)
e.sd7(H.c([],[Z.bY]))
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
C.a.h(d,c.e)}b=Z.lB(u,34963,H.q(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bY(4,d.length,b))}return e},
i:function(a){var u=this,t=H.c([],[P.e])
if(u.a.c.length!==0){C.a.h(t,"Vertices:")
C.a.h(t,u.a.A("   "))}u.b.b
u.c.b
if(u.d.b.length!==0){C.a.h(t,"Faces:")
C.a.h(t,u.d.A("   "))}return C.a.l(t,"\n")},
V:function(){var u=this.e
if(u!=null)u.S(null)},
$imz:1}
F.fV.prototype={
ek:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.q(c,"$ib",[F.aj],"$ab")
u=H.c([],[F.V])
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
C.a.h(u,F.eP(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.eP(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.eP(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.eP(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
b9:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.k(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.m(0,q)
for(o=q-1;o>=0;--o){n=r.d.m(0,o)
if(a.b5(0,p,n)){p.ay()
break}}}}},
b8:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.k(t,u)
s=t[u]
t=s.gbP(s)
if(t)s.ay()}},
b1:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.H)(u),++r)if(!u[r].b0())s=!1
return s},
i:function(a){return this.F()},
A:function(a){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].A(a))
return C.a.l(r,"\n")},
F:function(){return this.A("")},
sd2:function(a){this.b=H.q(a,"$ib",[F.V],"$ab")}}
F.fW.prototype={
gk:function(a){return 0},
b9:function(a){var u,t,s,r,q
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.k(s,t)
r=s[t]
for(r.c.c,q=-1;!1;--q)r.c.m(0,q)}},
b8:function(){var u,t,s
for(u=-1;!1;--u){t=this.b
return H.k(t,u)
s=t[u]
t=s.gbP(s)
if(t)s.ay()}},
i:function(a){return this.F()},
A:function(a){var u,t,s=H.c([],[P.e])
for(u=0;!1;++u){t=this.b
if(u>=0)return H.k(t,u)
C.a.h(s,t[u].A(a+(""+u+". ")))}return C.a.l(s,"\n")},
F:function(){return this.A("")},
sd8:function(a){this.b=H.q(a,"$ib",[F.b9],"$ab")}}
F.fX.prototype={
gk:function(a){return 0},
f1:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.k(t,u)
t=t[u].gfn()
t=t.gfl(t)
if(t.gk(t).ff(0,1)){t=this.b
return H.k(t,u)
t[u].ay()}}},
i:function(a){return this.F()},
A:function(a){var u,t,s=H.c([],[P.e])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.k(u,t)
C.a.h(s,u[t].A(a))}return C.a.l(s,"\n")},
F:function(){return this.A("")},
saU:function(a){this.b=H.q(a,"$ib",[F.br],"$ab")}}
F.aj.prototype={
bR:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.kh(u.cx,r,o,t,s,q,p,a,n)},
eJ:function(a){var u,t,s=this
if(a.n(0,$.aZ())){u=s.f
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
return u}else if(a.n(0,$.cv())){u=s.Q
t=[P.w]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.cw())){u=s.Q
t=[P.w]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bL()))return H.c([s.ch],[P.w])
else if(a.n(0,$.bG())){u=H.c([-1,-1,-1,-1],[P.w])
return u}else return H.c([],[P.w])},
b0:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.hN()
t.d.E(0,new F.hX(s))
s=s.a
t.r=s.K(0,Math.sqrt(s.M(s)))
s=t.a
if(s!=null){s.V()
s=t.a.e
if(s!=null)s.aq(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
A:function(a){var u,t,s=this,r="-",q=H.c([],[P.e])
C.a.h(q,C.c.a5(J.as(s.e),0))
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
C.a.h(q,V.L(s.ch,3,0))
C.a.h(q,r)
t=C.a.l(q,", ")
return a+"{"+t+"}"},
F:function(){return this.A("")}}
F.hX.prototype={
$1:function(a){var u,t
H.n(a,"$iV")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.P(0,u)}},
$S:9}
F.hO.prototype={
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
u.V()
return!0},
bK:function(a,b){var u=null,t=F.kh(u,u,a,u,u,b,u,u,0)
this.h(0,t)
return t},
gk:function(a){return this.c.length},
b1:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)u[s].b0()
return!0},
i:function(a){return this.F()},
A:function(a){var u,t,s,r
this.D()
u=H.c([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r)C.a.h(u,t[r].A(a))
return C.a.l(u,"\n")},
F:function(){return this.A("")},
sei:function(a){this.c=H.q(a,"$ib",[F.aj],"$ab")}}
F.hP.prototype={
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
H.j(b,{func:1,ret:-1,args:[F.V]})
C.a.E(u.b,b)
C.a.E(u.c,new F.hQ(u,b))
C.a.E(u.d,new F.hR(u,b))},
i:function(a){return this.F()},
F:function(){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].A(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].A(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].A(""))
return C.a.l(r,"\n")},
sd3:function(a){this.b=H.q(a,"$ib",[F.V],"$ab")},
sd4:function(a){this.c=H.q(a,"$ib",[F.V],"$ab")},
sd5:function(a){this.d=H.q(a,"$ib",[F.V],"$ab")}}
F.hQ.prototype={
$1:function(a){H.n(a,"$iV")
if(!J.T(a.a,this.a))this.b.$1(a)},
$S:9}
F.hR.prototype={
$1:function(a){var u
H.n(a,"$iV")
u=this.a
if(!J.T(a.a,u)&&!J.T(a.b,u))this.b.$1(a)},
$S:9}
F.hS.prototype={
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
C.a.h(s,u[t].A(""))}for(u=this.c,t=0;!1;++t){if(t>=0)return H.k(u,t)
C.a.h(s,u[t].A(""))}return C.a.l(s,"\n")},
sd9:function(a){this.b=H.q(a,"$ib",[F.b9],"$ab")},
sda:function(a){this.c=H.q(a,"$ib",[F.b9],"$ab")}}
F.hU.prototype={}
F.hT.prototype={
b5:function(a,b,c){return J.T(b.f,c.f)}}
F.hV.prototype={}
F.fC.prototype={
eL:function(a){var u,t,s,r,q,p,o,n,m
H.q(a,"$ib",[F.aj],"$ab")
u=V.hN()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.S(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.K(0,Math.sqrt(u.M(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.H)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.K(0,Math.sqrt(o*o+n*n+m*m))}if(!J.T(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.S(null)}}}return}}
F.hW.prototype={
gk:function(a){return 0},
i:function(a){return this.F()},
F:function(){var u,t,s=H.c([],[P.e])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.k(u,t)
C.a.h(s,u[t].A(""))}return C.a.l(s,"\n")},
saU:function(a){this.b=H.q(a,"$ib",[F.br],"$ab")}}
O.eC.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.an():u},
aT:function(a){var u=this.r
if(u!=null)u.S(a)}}
O.by.prototype={}
V.aQ.prototype={
a3:function(a,b){return!0},
i:function(a){return"all"},
$iab:1}
V.ab.prototype={}
V.cV.prototype={
a3:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)if(u[s].a3(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.H)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sN:function(a){this.a=H.q(a,"$ib",[V.ab],"$ab")},
$iab:1}
V.a5.prototype={
a3:function(a,b){return!this.cA(0,b)},
i:function(a){return"!["+this.bf(0)+"]"}}
V.fL.prototype={
a3:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.ja(this.a),t=H.ja(this.b)
return u+".."+t},
$iab:1}
V.fU.prototype={
cE:function(a){var u,t
if(a.a.length<=0)throw H.f(P.a2("May not create a SetMatcher with zero characters."))
u=new H.aB([P.y,P.K])
for(t=new H.bZ(a,a.gk(a),[H.a9(a,"t",0)]);t.p();)u.I(0,t.d,!0)
this.se4(u)},
a3:function(a,b){return this.a.bQ(0,b)},
i:function(a){var u=this.a
return P.jb(new H.cS(u,[H.u(u,0)]))},
se4:function(a){this.a=H.q(a,"$iG",[P.y,P.K],"$aG")},
$iab:1}
V.c7.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cc(this.a.j(0,b))
r.sN(H.c([],[V.ab]))
r.c=!1
C.a.h(this.c,r)
return r},
eA:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s){r=u[s]
if(r.a3(0,a))return r}return},
i:function(a){return this.b},
seg:function(a){this.c=H.q(a,"$ib",[V.cc],"$ab")}}
V.dc.prototype={
i:function(a){var u=H.jx(this.b,"\n","\\n"),t=H.jx(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cb.prototype={
a6:function(a,b,c){var u,t,s
H.q(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.H)(c),++t){s=c[t]
this.c.I(0,s,b)}},
i:function(a){return this.b},
se0:function(a){var u=P.e
this.c=H.q(a,"$iG",[u,u],"$aG")}}
V.hk.prototype={
j:function(a,b){var u=this.a.m(0,b)
if(u==null){u=new V.c7(this,b)
u.seg(H.c([],[V.cc]))
u.d=null
this.a.I(0,b,u)}return u},
B:function(a){var u,t=this.b.m(0,a)
if(t==null){t=new V.cb(a)
u=P.e
t.se0(new H.aB([u,u]))
this.b.I(0,a,t)}return t},
cj:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.dc]),l=this.c,k=[P.y],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.c.aa(a,s)
q=l.eA(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.jb(j)
throw H.f(P.a2("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.jb(j)
o=l.d
n=o.c.m(0,p)
t=new V.dc(n==null?o.b:n,p,s)}++s}}},
sed:function(a){this.a=H.q(a,"$iG",[P.e,V.c7],"$aG")},
sef:function(a){this.b=H.q(a,"$iG",[P.e,V.cb],"$aG")}}
V.cc.prototype={
i:function(a){return this.b.b+": "+this.bf(0)}}
X.cF.prototype={$ijT:1}
X.eY.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.an():u}}
X.d0.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.an():u},
a9:function(a){var u
H.n(a,"$iC")
u=this.f
if(u!=null)u.S(a)},
cP:function(){return this.a9(null)},
sbY:function(a){var u,t,s=this
if(!J.T(s.b,a)){u=s.b
if(u!=null)u.gq().H(0,s.gbl())
t=s.b
s.b=a
if(a!=null)a.gq().h(0,s.gbl())
u=new D.R("mover",t,s.b,[U.a4])
u.b=!0
s.a9(u)}},
$ijT:1,
$icF:1}
X.da.prototype={}
V.b1.prototype={
as:function(a){this.b=new P.f1(C.G)
this.c=null
this.saO(H.c([],[[P.b,W.af]]))},
v:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.af]))
u=a.split("\n")
for(l=u.length,t=[W.af],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.z(q)
o=m.b.cX(q,0,q.length)
n=o==null?q:o
C.E.ct(p,H.jx(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaz(m.d),p)}},
c4:function(a,b){var u,t,s,r,q=this
H.q(b,"$ib",[P.e],"$ab")
q.saO(H.c([],[[P.b,W.af]]))
u=C.a.l(b,"\n")
t=q.c
for(t=(t==null?q.c=q.ax():t).cj(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r)q.aA(t[r])},
saO:function(a){this.d=H.q(a,"$ib",[[P.b,W.af]],"$ab")}}
V.iZ.prototype={
$1:function(a){var u
H.n(a,"$iaK")
u=C.b.ci(this.a.geD(),2)
if(u!=="0.00")P.jw(u+" fps")},
$S:36}
V.eA.prototype={
aA:function(a){var u=this
switch(a.a){case"Class":u.v(a.b,"#551")
break
case"Comment":u.v(a.b,"#777")
break
case"Id":u.v(a.b,"#111")
break
case"Num":u.v(a.b,"#191")
break
case"Reserved":u.v(a.b,"#119")
break
case"String":u.v(a.b,"#171")
break
case"Symbol":u.v(a.b,"#616")
break
case"Type":u.v(a.b,"#B11")
break
case"Whitespace":u.v(a.b,"#111")
break}},
ax:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.hl()
a1.c=a1.j(0,r)
u=a1.j(0,r).l(0,q)
t=V.r(new H.o("_"))
C.a.h(u.a,t)
t=V.N("a","z")
C.a.h(u.a,t)
t=V.N("A","Z")
C.a.h(u.a,t)
t=a1.j(0,q).l(0,q)
u=V.r(new H.o("_"))
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
t=V.r(new H.o("."))
C.a.h(u.a,t)
t=a1.j(0,o).l(0,n)
u=V.N("0","9")
C.a.h(t.a,u)
u=a1.j(0,n).l(0,n)
t=V.N("0","9")
C.a.h(u.a,t)
t=a1.j(0,r).l(0,m)
u=V.r(new H.o(l))
C.a.h(t.a,u)
u=a1.j(0,m).l(0,m)
t=V.r(new H.o(l))
C.a.h(u.a,t)
t=a1.j(0,r).l(0,k)
u=V.r(new H.o('"'))
C.a.h(t.a,u)
u=a1.j(0,k).l(0,j)
t=V.r(new H.o('"'))
C.a.h(u.a,t)
t=a1.j(0,k).l(0,i)
u=V.r(new H.o("\\"))
C.a.h(t.a,u)
u=a1.j(0,i).l(0,k)
t=V.r(new H.o('"'))
C.a.h(u.a,t)
C.a.h(a1.j(0,k).l(0,k).a,new V.aQ())
t=a1.j(0,r).l(0,h)
u=V.r(new H.o("'"))
C.a.h(t.a,u)
u=a1.j(0,h).l(0,g)
t=V.r(new H.o("'"))
C.a.h(u.a,t)
t=a1.j(0,h).l(0,f)
u=V.r(new H.o("\\"))
C.a.h(t.a,u)
u=a1.j(0,f).l(0,h)
t=V.r(new H.o("'"))
C.a.h(u.a,t)
C.a.h(a1.j(0,h).l(0,h).a,new V.aQ())
t=a1.j(0,r).l(0,e)
u=V.r(new H.o("/"))
C.a.h(t.a,u)
u=a1.j(0,e).l(0,d)
t=V.r(new H.o("/"))
C.a.h(u.a,t)
t=a1.j(0,d).l(0,c)
u=V.r(new H.o("\n"))
C.a.h(t.a,u)
u=a1.j(0,d).l(0,d)
t=new V.a5()
s=[V.ab]
t.sN(H.c([],s))
C.a.h(u.a,t)
u=V.r(new H.o("\n"))
C.a.h(t.a,u)
u=a1.j(0,e).l(0,b)
t=V.r(new H.o("*"))
C.a.h(u.a,t)
t=a1.j(0,b).l(0,a)
u=V.r(new H.o("*"))
C.a.h(t.a,u)
u=a1.j(0,a).l(0,b)
t=new V.a5()
t.sN(H.c([],s))
C.a.h(u.a,t)
u=V.r(new H.o("*"))
C.a.h(t.a,u)
u=a1.j(0,a).l(0,c)
t=V.r(new H.o("/"))
C.a.h(u.a,t)
t=a1.j(0,r).l(0,a0)
u=V.r(new H.o(" \n\t"))
C.a.h(t.a,u)
u=a1.j(0,a0).l(0,a0)
t=V.r(new H.o(" \n\t"))
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
t.a6(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.a6(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.a6(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.eZ.prototype={
aA:function(a){var u=this
switch(a.a){case"Builtin":u.v(a.b,"#411")
break
case"Comment":u.v(a.b,"#777")
break
case"Id":u.v(a.b,"#111")
break
case"Num":u.v(a.b,"#191")
break
case"Preprocess":u.v(a.b,"#737")
break
case"Reserved":u.v(a.b,"#119")
break
case"Symbol":u.v(a.b,"#611")
break
case"Type":u.v(a.b,"#171")
break
case"Whitespace":u.v(a.b,"#111")
break}},
ax:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.hl()
e.c=e.j(0,r)
u=e.j(0,r).l(0,q)
t=V.r(new H.o("_"))
C.a.h(u.a,t)
t=V.N("a","z")
C.a.h(u.a,t)
t=V.N("A","Z")
C.a.h(u.a,t)
t=e.j(0,q).l(0,q)
u=V.r(new H.o("_"))
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
t=V.r(new H.o("."))
C.a.h(u.a,t)
t=e.j(0,o).l(0,n)
u=V.N("0","9")
C.a.h(t.a,u)
u=e.j(0,n).l(0,n)
t=V.N("0","9")
C.a.h(u.a,t)
t=e.j(0,r).l(0,m)
u=V.r(new H.o(l))
C.a.h(t.a,u)
u=e.j(0,m).l(0,m)
t=V.r(new H.o(l))
C.a.h(u.a,t)
t=e.j(0,r).l(0,k)
u=V.r(new H.o("/"))
C.a.h(t.a,u)
u=e.j(0,k).l(0,j)
t=V.r(new H.o("/"))
C.a.h(u.a,t)
C.a.h(e.j(0,k).l(0,m).a,new V.aQ())
t=e.j(0,j).l(0,i)
u=V.r(new H.o("\n"))
C.a.h(t.a,u)
u=e.j(0,j).l(0,j)
t=new V.a5()
s=[V.ab]
t.sN(H.c([],s))
C.a.h(u.a,t)
u=V.r(new H.o("\n"))
C.a.h(t.a,u)
u=e.j(0,r).l(0,h)
t=V.r(new H.o("#"))
C.a.h(u.a,t)
t=e.j(0,h).l(0,h)
u=new V.a5()
u.sN(H.c([],s))
C.a.h(t.a,u)
t=V.r(new H.o("\n"))
C.a.h(u.a,t)
t=e.j(0,h).l(0,g)
u=V.r(new H.o("\n"))
C.a.h(t.a,u)
u=e.j(0,r).l(0,f)
t=V.r(new H.o(" \n\t"))
C.a.h(u.a,t)
t=e.j(0,f).l(0,f)
u=V.r(new H.o(" \n\t"))
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
u.a6(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.a6(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.a6(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.f_.prototype={
aA:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.v(a.b,"#911")
u.v("=",t)
break
case"Id":u.v(a.b,t)
break
case"Other":u.v(a.b,t)
break
case"Reserved":u.v(a.b,"#119")
break
case"String":u.v(a.b,"#171")
break
case"Symbol":u.v(a.b,"#616")
break}},
ax:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.hl()
l.c=l.j(0,s)
u=l.j(0,s).l(0,r)
t=V.r(new H.o("_"))
C.a.h(u.a,t)
t=V.N("a","z")
C.a.h(u.a,t)
t=V.N("A","Z")
C.a.h(u.a,t)
t=l.j(0,r).l(0,r)
u=V.r(new H.o("_"))
C.a.h(t.a,u)
u=V.N("0","9")
C.a.h(t.a,u)
u=V.N("a","z")
C.a.h(t.a,u)
u=V.N("A","Z")
C.a.h(t.a,u)
u=l.j(0,r).l(0,q)
t=V.r(new H.o("="))
C.a.h(u.a,t)
u.c=!0
u=l.j(0,s).l(0,p)
t=V.r(new H.o("</\\-!>="))
C.a.h(u.a,t)
t=l.j(0,p).l(0,p)
u=V.r(new H.o("</\\-!>="))
C.a.h(t.a,u)
u=l.j(0,s).l(0,o)
t=V.r(new H.o('"'))
C.a.h(u.a,t)
t=l.j(0,o).l(0,n)
u=V.r(new H.o('"'))
C.a.h(t.a,u)
u=l.j(0,o).l(0,"EscStr")
t=V.r(new H.o("\\"))
C.a.h(u.a,t)
t=l.j(0,"EscStr").l(0,o)
u=V.r(new H.o('"'))
C.a.h(t.a,u)
C.a.h(l.j(0,o).l(0,o).a,new V.aQ())
C.a.h(l.j(0,s).l(0,m).a,new V.aQ())
u=l.j(0,m).l(0,m)
t=new V.a5()
t.sN(H.c([],[V.ab]))
C.a.h(u.a,t)
u=V.r(new H.o('</\\-!>=_"'))
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
t.a6(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
t=l.j(0,q)
t.d=t.a.B(q)
t=l.j(0,m)
t.d=t.a.B(m)
return l}}
V.fI.prototype={
c4:function(a,b){H.q(b,"$ib",[P.e],"$ab")
this.saO(H.c([],[[P.b,W.af]]))
this.v(C.a.l(b,"\n"),"#111")},
aA:function(a){},
ax:function(){return}}
V.fY.prototype={
cG:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.Y(q,"scroll",H.j(new V.h_(o),{func:1,ret:-1,args:[r]}),!1,r)},
bL:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.q(a,"$ib",[P.e],"$ab")
this.e9()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.cj(C.a.eI(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.H)(s),++q){p=s[q]
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
if(H.mm(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.k(m,1)
l.href=H.z(m[1])
l.textContent=H.z(m[0])
t.appendChild(l)}else{k=P.km(C.p,n,C.f,!1)
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
cp:function(a){var u,t,s,r=new V.eA("dart")
r.as("dart")
u=new V.eZ("glsl")
u.as("glsl")
t=new V.f_("html")
t.as("html")
s=C.a.eC(H.c([r,u,t],[V.b1]),new V.h0(a))
if(s!=null)return s
r=new V.fI("plain")
r.as("plain")
return r},
bJ:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.q(b0,"$ib",[P.e],"$ab")
u=H.c([],[P.y])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.jr(r).aF(r,"+")){C.a.I(b0,s,C.c.aG(r,1))
C.a.h(u,1)
t=!0}else if(C.c.aF(r,"-")){C.a.I(b0,s,C.c.aG(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.cp(a8)
q.c4(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.km(C.p,a7,C.f,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.jD()
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.H)(r),++a0)C.N.em(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.H)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gG(r);a3.p();)c.appendChild(a3.gw(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
e9:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.hl()
u.c=u.j(0,q)
t=u.j(0,q).l(0,p)
s=V.r(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,p).l(0,p)
s=new V.a5()
r=[V.ab]
s.sN(H.c([],r))
C.a.h(t.a,s)
t=V.r(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,p).l(0,"BoldEnd")
s=V.r(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,q).l(0,o)
s=V.r(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,o).l(0,o)
s=new V.a5()
s.sN(H.c([],r))
C.a.h(t.a,s)
t=V.r(new H.o("_"))
C.a.h(s.a,t)
t=u.j(0,o).l(0,n)
s=V.r(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,q).l(0,m)
s=V.r(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,m).l(0,m)
s=new V.a5()
s.sN(H.c([],r))
C.a.h(t.a,s)
t=V.r(new H.o("`"))
C.a.h(s.a,t)
t=u.j(0,m).l(0,"CodeEnd")
s=V.r(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,q).l(0,l)
s=V.r(new H.o("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,l).l(0,k)
s=V.r(new H.o("|"))
C.a.h(t.a,s)
s=u.j(0,l).l(0,j)
t=V.r(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,l).l(0,l)
t=new V.a5()
t.sN(H.c([],r))
C.a.h(s.a,t)
s=V.r(new H.o("|]"))
C.a.h(t.a,s)
s=u.j(0,k).l(0,j)
t=V.r(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,k).l(0,k)
t=new V.a5()
t.sN(H.c([],r))
C.a.h(s.a,t)
s=V.r(new H.o("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,q).l(0,i).a,new V.aQ())
s=u.j(0,i).l(0,i)
t=new V.a5()
t.sN(H.c([],r))
C.a.h(s.a,t)
s=V.r(new H.o("*_`["))
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
V.h_.prototype={
$1:function(a){P.k7(C.h,new V.fZ(this.a))},
$S:37}
V.fZ.prototype={
$0:function(){var u=C.b.W(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:0}
V.h0.prototype={
$1:function(a){return H.n(a,"$ib1").a===this.a},
$S:38}
R.iW.prototype={
$1:function(a){var u,t,s,r
H.n(a,"$iC")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.bJ("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.bJ("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:6};(function aliases(){var u=J.a.prototype
u.cv=u.i
u=J.cQ.prototype
u.cz=u.i
u=P.h.prototype
u.cw=u.aC
u=W.I.prototype
u.aH=u.T
u=W.dP.prototype
u.cB=u.Z
u=V.cV.prototype
u.cA=u.a3
u.bf=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"lV","lD",10)
u(P,"lW","lE",10)
u(P,"lX","lF",10)
t(P,"kv","lT",1)
s(W,"m6",4,null,["$4"],["lH"],19,0)
s(W,"m7",4,null,["$4"],["lI"],19,0)
var m
r(m=E.a1.prototype,"gc2",0,0,null,["$1","$0"],["c3","eT"],2,0)
r(m,"gc0",0,0,null,["$1","$0"],["c1","eS"],2,0)
r(m,"gbZ",0,0,null,["$1","$0"],["c_","eP"],2,0)
q(m,"geN","eO",5)
q(m,"geQ","eR",5)
r(m=E.db.prototype,"gbh",0,0,null,["$1","$0"],["bj","bi"],2,0)
p(m,"gf3","ca",1)
o(m=X.dh.prototype,"gdt","du",7)
o(m,"gdf","dg",7)
o(m,"gdl","dm",3)
o(m,"gdz","dA",20)
o(m,"gdv","dw",20)
o(m,"gdC","dD",3)
o(m,"gdG","dH",3)
o(m,"gdr","ds",3)
o(m,"gdE","dF",3)
o(m,"gdn","dq",3)
o(m,"gdI","dJ",33)
o(m,"gdK","dL",7)
o(m,"gdT","dU",8)
o(m,"gdP","dQ",8)
o(m,"gdR","dS",8)
n(V.aN.prototype,"gk","b4",21)
n(V.S.prototype,"gk","b4",21)
r(m=U.bX.prototype,"gbk",0,0,null,["$1","$0"],["R","cK"],2,0)
q(m,"gdd","de",22)
q(m,"gdN","dO",22)
r(m=M.cK.prototype,"gX",0,0,null,["$1","$0"],["a_","cL"],2,0)
q(m,"gdh","di",5)
q(m,"gdj","dk",5)
r(X.d0.prototype,"gbl",0,0,null,["$1","$0"],["a9","cP"],2,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.F,null)
s(P.F,[H.j8,J.a,J.ae,P.dC,P.h,H.bZ,P.az,H.bn,H.dg,H.hq,P.b5,H.bP,H.dU,P.W,H.fd,H.fe,H.f8,P.e_,P.aP,P.al,P.dk,P.h8,P.c9,P.h9,P.aK,P.a0,P.iI,P.iw,P.bz,P.dB,P.t,P.bQ,P.f2,P.iG,P.K,P.b4,P.Z,P.aR,P.fG,P.d8,P.dt,P.eX,P.b6,P.b,P.G,P.E,P.a7,P.e,P.bw,W.ew,W.bd,W.v,W.cZ,W.dP,W.iB,W.cM,W.ac,W.iv,W.e4,P.iq,O.U,O.c_,E.eq,E.a1,E.fM,E.db,Z.dj,Z.hZ,Z.cD,Z.bY,Z.di,D.et,D.bV,D.C,X.cE,X.cR,X.fa,X.fg,X.c0,X.ft,X.hm,X.dh,V.b2,V.eM,V.ba,V.a6,V.ag,V.d4,V.aN,V.S,M.cK,A.cz,A.el,A.dd,A.hC,F.V,F.eQ,F.b9,F.fc,F.br,F.d7,F.fV,F.fW,F.fX,F.aj,F.hO,F.hP,F.hS,F.hU,F.hV,F.hW,O.by,V.aQ,V.ab,V.cV,V.fL,V.fU,V.c7,V.dc,V.cb,V.hk,X.cF,X.da,X.d0,V.b1,V.fY])
s(J.a,[J.f5,J.f7,J.cQ,J.aA,J.bp,J.b7,H.c2,W.d,W.ei,W.cA,W.av,W.aw,W.J,W.dm,W.eB,W.eE,W.dp,W.cJ,W.dr,W.eG,W.l,W.du,W.ay,W.f0,W.dx,W.cU,W.fn,W.dD,W.dE,W.aD,W.dF,W.dI,W.aE,W.dM,W.dO,W.aH,W.dQ,W.aI,W.dV,W.ao,W.dY,W.hj,W.aL,W.e0,W.ho,W.hK,W.e5,W.e7,W.e9,W.eb,W.ed,P.aU,P.dz,P.aW,P.dK,P.fK,P.dW,P.aX,P.e2,P.em,P.dl,P.cB,P.d2,P.bv,P.d6,P.de,P.dS])
s(J.cQ,[J.fH,J.bc,J.b8])
t(J.j7,J.aA)
s(J.bp,[J.cP,J.f6])
t(P.ff,P.dC)
s(P.ff,[H.df,W.i6,W.a3,P.eT])
t(H.o,H.df)
s(P.h,[H.eJ,H.fj,H.cf])
s(H.eJ,[H.bq,H.cS])
s(P.az,[H.fk,H.i_])
t(H.fl,H.bq)
s(P.b5,[H.fD,H.f9,H.hI,H.hs,H.es,H.fS,P.ek,P.d_,P.at,P.hJ,P.hH,P.c8,P.eu,P.ez])
s(H.bP,[H.j0,H.hf,H.iS,H.iT,H.iU,P.i2,P.i1,P.i3,P.i4,P.iF,P.iE,P.ic,P.ih,P.id,P.ie,P.ig,P.ik,P.il,P.ij,P.ii,P.ha,P.hb,P.iK,P.it,P.is,P.iu,P.fi,P.eH,P.eI,W.eK,W.fp,W.fr,W.fR,W.h7,W.ib,W.fB,W.fA,W.ix,W.iy,W.iD,W.iH,P.iM,P.eU,P.eV,P.eo,E.fN,E.fO,E.fP,E.hi,D.eN,D.eO,F.j_,F.iN,F.hX,F.hQ,F.hR,V.iZ,V.h_,V.fZ,V.h0,R.iW])
s(H.hf,[H.h5,H.bN])
t(H.i0,P.ek)
t(P.fh,P.W)
s(P.fh,[H.aB,W.i5])
t(H.cW,H.c2)
s(H.cW,[H.cj,H.cl])
t(H.ck,H.cj)
t(H.c1,H.ck)
t(H.cm,H.cl)
t(H.cX,H.cm)
s(H.cX,[H.fu,H.fv,H.fw,H.fx,H.fy,H.cY,H.fz])
t(P.ir,P.iI)
t(P.ip,P.iw)
t(P.bR,P.h9)
t(P.eL,P.bQ)
s(P.bR,[P.f1,P.hM])
t(P.hL,P.eL)
s(P.Z,[P.w,P.y])
s(P.at,[P.bu,P.f3])
s(W.d,[W.x,W.eS,W.aG,W.cn,W.aJ,W.ap,W.cp,W.hY,W.cg,P.ep,P.bl])
s(W.x,[W.I,W.b0,W.ch])
s(W.I,[W.p,P.m])
s(W.p,[W.cy,W.ej,W.bM,W.b_,W.bm,W.af,W.eW,W.fT,W.bx,W.d9,W.hd,W.he,W.ca])
s(W.av,[W.bS,W.ex,W.ey])
t(W.ev,W.aw)
t(W.bT,W.dm)
t(W.dq,W.dp)
t(W.cI,W.dq)
t(W.ds,W.dr)
t(W.eF,W.ds)
t(W.ax,W.cA)
t(W.dv,W.du)
t(W.eR,W.dv)
t(W.dy,W.dx)
t(W.bo,W.dy)
t(W.bb,W.l)
s(W.bb,[W.aC,W.X,W.aq])
t(W.fo,W.dD)
t(W.fq,W.dE)
t(W.dG,W.dF)
t(W.fs,W.dG)
t(W.dJ,W.dI)
t(W.c3,W.dJ)
t(W.dN,W.dM)
t(W.fJ,W.dN)
t(W.fQ,W.dO)
t(W.co,W.cn)
t(W.h2,W.co)
t(W.dR,W.dQ)
t(W.h3,W.dR)
t(W.h6,W.dV)
t(W.dZ,W.dY)
t(W.hg,W.dZ)
t(W.cq,W.cp)
t(W.hh,W.cq)
t(W.e1,W.e0)
t(W.hn,W.e1)
t(W.aO,W.X)
t(W.e6,W.e5)
t(W.i7,W.e6)
t(W.dn,W.cJ)
t(W.e8,W.e7)
t(W.im,W.e8)
t(W.ea,W.e9)
t(W.dH,W.ea)
t(W.ec,W.eb)
t(W.iz,W.ec)
t(W.ee,W.ed)
t(W.iA,W.ee)
t(W.i8,W.i5)
t(W.i9,P.h8)
t(W.je,W.i9)
t(W.ia,P.c9)
t(W.iC,W.dP)
t(P.ah,P.iq)
t(P.dA,P.dz)
t(P.fb,P.dA)
t(P.dL,P.dK)
t(P.fE,P.dL)
t(P.c5,P.m)
t(P.dX,P.dW)
t(P.hc,P.dX)
t(P.e3,P.e2)
t(P.hp,P.e3)
t(P.en,P.dl)
t(P.fF,P.bl)
t(P.dT,P.dS)
t(P.h4,P.dT)
s(E.eq,[Z.cC,A.c6])
s(D.C,[D.cN,D.cO,D.R])
t(U.a4,D.et)
s(U.a4,[U.cG,U.d5])
t(U.bX,O.U)
t(A.eD,A.c6)
s(A.dd,[A.hu,A.hx,A.hz,A.hB,A.hv,A.cd,A.hw,A.hy,A.hA,A.hD,A.hE,A.ce,A.hF,A.hG])
t(F.h1,F.eQ)
t(F.ht,F.fc)
t(F.hT,F.hU)
t(F.fC,F.hV)
t(O.eC,O.by)
s(V.cV,[V.a5,V.cc])
t(X.eY,X.da)
s(V.b1,[V.eA,V.eZ,V.f_,V.fI])
u(H.df,H.dg)
u(H.cj,P.t)
u(H.ck,H.bn)
u(H.cl,P.t)
u(H.cm,H.bn)
u(P.dC,P.t)
u(W.dm,W.ew)
u(W.dp,P.t)
u(W.dq,W.v)
u(W.dr,P.t)
u(W.ds,W.v)
u(W.du,P.t)
u(W.dv,W.v)
u(W.dx,P.t)
u(W.dy,W.v)
u(W.dD,P.W)
u(W.dE,P.W)
u(W.dF,P.t)
u(W.dG,W.v)
u(W.dI,P.t)
u(W.dJ,W.v)
u(W.dM,P.t)
u(W.dN,W.v)
u(W.dO,P.W)
u(W.cn,P.t)
u(W.co,W.v)
u(W.dQ,P.t)
u(W.dR,W.v)
u(W.dV,P.W)
u(W.dY,P.t)
u(W.dZ,W.v)
u(W.cp,P.t)
u(W.cq,W.v)
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
u(P.dl,P.W)
u(P.dS,P.t)
u(P.dT,W.v)})();(function constants(){var u=hunkHelpers.makeConstList
C.m=W.b_.prototype
C.D=W.bm.prototype
C.E=W.af.prototype
C.H=J.a.prototype
C.a=J.aA.prototype
C.e=J.cP.prototype
C.b=J.bp.prototype
C.c=J.b7.prototype
C.I=J.b8.prototype
C.M=W.c3.prototype
C.q=J.fH.prototype
C.k=P.bv.prototype
C.N=W.bx.prototype
C.r=W.d9.prototype
C.l=J.bc.prototype
C.t=W.aO.prototype
C.u=W.cg.prototype
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

C.B=new P.fG()
C.f=new P.hL()
C.C=new P.hM()
C.d=new P.ir()
C.h=new P.aR(0)
C.F=new P.aR(5e6)
C.G=new P.f2("element",!0,!1,!1,!1)
C.J=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.K=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.L=H.c(u([]),[P.e])
C.p=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.y])
C.i=H.c(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.j=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])})()
var v={mangledGlobalNames:{y:"int",w:"double",Z:"num",e:"String",K:"bool",E:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.E},{func:1,ret:-1},{func:1,ret:-1,opt:[D.C]},{func:1,ret:-1,args:[W.X]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.y,[P.h,E.a1]]},{func:1,ret:P.E,args:[D.C]},{func:1,ret:-1,args:[W.l]},{func:1,ret:-1,args:[W.aq]},{func:1,ret:P.E,args:[F.V]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.E,args:[,,]},{func:1,ret:P.e,args:[P.y]},{func:1,ret:P.K,args:[W.x]},{func:1,ret:P.E,args:[,]},{func:1,args:[,]},{func:1,ret:P.K,args:[W.ac]},{func:1,ret:P.K,args:[P.e]},{func:1,ret:P.E,args:[{func:1,ret:-1,args:[D.C]}]},{func:1,ret:P.K,args:[W.I,P.e,P.e,W.bd]},{func:1,ret:-1,args:[W.aC]},{func:1,ret:P.w},{func:1,ret:-1,args:[P.y,[P.h,U.a4]]},{func:1,ret:[P.al,,],args:[,]},{func:1,args:[W.l]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.x,W.x]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.E,args:[{func:1,ret:-1}]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.E,args:[P.Z]},{func:1,ret:P.E,args:[,],opt:[P.a7]},{func:1,ret:-1,args:[W.aO]},{func:1,ret:V.ag,args:[P.w]},{func:1,ret:P.E,args:[F.aj,P.w,P.w]},{func:1,ret:P.E,args:[P.aK]},{func:1,ret:P.E,args:[W.l]},{func:1,ret:P.K,args:[V.b1]},{func:1,ret:W.I,args:[W.x]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.au=0
$.bO=null
$.jE=null
$.jh=!1
$.ky=null
$.kt=null
$.kD=null
$.iO=null
$.iV=null
$.jt=null
$.bA=null
$.cr=null
$.cs=null
$.ji=!1
$.O=C.d
$.a8=[]
$.aS=null
$.j4=null
$.jM=null
$.jL=null
$.dw=P.jO(P.e,P.b6)
$.jS=null
$.jX=null
$.jY=null
$.k2=null
$.kb=null
$.kg=null
$.kd=null
$.ke=null
$.kf=null
$.kc=null
$.jW=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mv","kH",function(){return H.kx("_$dart_dartClosure")})
u($,"mw","jz",function(){return H.kx("_$dart_js")})
u($,"mB","kI",function(){return H.aM(H.hr({
toString:function(){return"$receiver$"}}))})
u($,"mC","kJ",function(){return H.aM(H.hr({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mD","kK",function(){return H.aM(H.hr(null))})
u($,"mE","kL",function(){return H.aM(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mH","kO",function(){return H.aM(H.hr(void 0))})
u($,"mI","kP",function(){return H.aM(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mG","kN",function(){return H.aM(H.k9(null))})
u($,"mF","kM",function(){return H.aM(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mK","kR",function(){return H.aM(H.k9(void 0))})
u($,"mJ","kQ",function(){return H.aM(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mZ","jA",function(){return P.lC()})
u($,"n0","kW",function(){return P.lt("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"n_","kV",function(){return P.jP(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"mS","kU",function(){return Z.ak(0)})
u($,"mM","kS",function(){return Z.ak(511)})
u($,"mU","aZ",function(){return Z.ak(1)})
u($,"mT","bI",function(){return Z.ak(2)})
u($,"mO","bH",function(){return Z.ak(4)})
u($,"mV","bJ",function(){return Z.ak(8)})
u($,"mW","bK",function(){return Z.ak(16)})
u($,"mP","cv",function(){return Z.ak(32)})
u($,"mQ","cw",function(){return Z.ak(64)})
u($,"mR","kT",function(){return Z.ak(96)})
u($,"mX","bL",function(){return Z.ak(128)})
u($,"mN","bG",function(){return Z.ak(256)})
u($,"mu","kG",function(){return new V.eM(1e-9)})
u($,"mt","Q",function(){return $.kG()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.c2,ArrayBufferView:H.c2,Float32Array:H.c1,Float64Array:H.c1,Int16Array:H.fu,Int32Array:H.fv,Int8Array:H.fw,Uint16Array:H.fx,Uint32Array:H.fy,Uint8ClampedArray:H.cY,CanvasPixelArray:H.cY,Uint8Array:H.fz,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLImageElement:W.p,HTMLInputElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableColElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.ei,HTMLAnchorElement:W.cy,HTMLAreaElement:W.ej,HTMLBaseElement:W.bM,Blob:W.cA,HTMLBodyElement:W.b_,HTMLCanvasElement:W.bm,CDATASection:W.b0,CharacterData:W.b0,Comment:W.b0,ProcessingInstruction:W.b0,Text:W.b0,CSSNumericValue:W.bS,CSSUnitValue:W.bS,CSSPerspective:W.ev,CSSCharsetRule:W.J,CSSConditionRule:W.J,CSSFontFaceRule:W.J,CSSGroupingRule:W.J,CSSImportRule:W.J,CSSKeyframeRule:W.J,MozCSSKeyframeRule:W.J,WebKitCSSKeyframeRule:W.J,CSSKeyframesRule:W.J,MozCSSKeyframesRule:W.J,WebKitCSSKeyframesRule:W.J,CSSMediaRule:W.J,CSSNamespaceRule:W.J,CSSPageRule:W.J,CSSRule:W.J,CSSStyleRule:W.J,CSSSupportsRule:W.J,CSSViewportRule:W.J,CSSStyleDeclaration:W.bT,MSStyleCSSProperties:W.bT,CSS2Properties:W.bT,CSSImageValue:W.av,CSSKeywordValue:W.av,CSSPositionValue:W.av,CSSResourceValue:W.av,CSSURLImageValue:W.av,CSSStyleValue:W.av,CSSMatrixComponent:W.aw,CSSRotation:W.aw,CSSScale:W.aw,CSSSkew:W.aw,CSSTranslation:W.aw,CSSTransformComponent:W.aw,CSSTransformValue:W.ex,CSSUnparsedValue:W.ey,DataTransferItemList:W.eB,HTMLDivElement:W.af,DOMException:W.eE,ClientRectList:W.cI,DOMRectList:W.cI,DOMRectReadOnly:W.cJ,DOMStringList:W.eF,DOMTokenList:W.eG,Element:W.I,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.ax,FileList:W.eR,FileWriter:W.eS,HTMLFormElement:W.eW,Gamepad:W.ay,History:W.f0,HTMLCollection:W.bo,HTMLFormControlsCollection:W.bo,HTMLOptionsCollection:W.bo,KeyboardEvent:W.aC,Location:W.cU,MediaList:W.fn,MIDIInputMap:W.fo,MIDIOutputMap:W.fq,MimeType:W.aD,MimeTypeArray:W.fs,PointerEvent:W.X,MouseEvent:W.X,DragEvent:W.X,Document:W.x,DocumentFragment:W.x,HTMLDocument:W.x,ShadowRoot:W.x,XMLDocument:W.x,DocumentType:W.x,Node:W.x,NodeList:W.c3,RadioNodeList:W.c3,Plugin:W.aE,PluginArray:W.fJ,RTCStatsReport:W.fQ,HTMLSelectElement:W.fT,SourceBuffer:W.aG,SourceBufferList:W.h2,SpeechGrammar:W.aH,SpeechGrammarList:W.h3,SpeechRecognitionResult:W.aI,Storage:W.h6,CSSStyleSheet:W.ao,StyleSheet:W.ao,HTMLTableCellElement:W.bx,HTMLTableDataCellElement:W.bx,HTMLTableHeaderCellElement:W.bx,HTMLTableElement:W.d9,HTMLTableRowElement:W.hd,HTMLTableSectionElement:W.he,HTMLTemplateElement:W.ca,TextTrack:W.aJ,TextTrackCue:W.ap,VTTCue:W.ap,TextTrackCueList:W.hg,TextTrackList:W.hh,TimeRanges:W.hj,Touch:W.aL,TouchEvent:W.aq,TouchList:W.hn,TrackDefaultList:W.ho,CompositionEvent:W.bb,FocusEvent:W.bb,TextEvent:W.bb,UIEvent:W.bb,URL:W.hK,VideoTrackList:W.hY,WheelEvent:W.aO,Window:W.cg,DOMWindow:W.cg,Attr:W.ch,CSSRuleList:W.i7,ClientRect:W.dn,DOMRect:W.dn,GamepadList:W.im,NamedNodeMap:W.dH,MozNamedAttrMap:W.dH,SpeechRecognitionResultList:W.iz,StyleSheetList:W.iA,SVGLength:P.aU,SVGLengthList:P.fb,SVGNumber:P.aW,SVGNumberList:P.fE,SVGPointList:P.fK,SVGScriptElement:P.c5,SVGStringList:P.hc,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,SVGTransform:P.aX,SVGTransformList:P.hp,AudioBuffer:P.em,AudioParamMap:P.en,AudioTrackList:P.ep,AudioContext:P.bl,webkitAudioContext:P.bl,BaseAudioContext:P.bl,OfflineAudioContext:P.fF,WebGLBuffer:P.cB,WebGLProgram:P.d2,WebGL2RenderingContext:P.bv,WebGLShader:P.d6,WebGLUniformLocation:P.de,SQLResultSetRowList:P.h4})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.cW.$nativeSuperclassTag="ArrayBufferView"
H.cj.$nativeSuperclassTag="ArrayBufferView"
H.ck.$nativeSuperclassTag="ArrayBufferView"
H.c1.$nativeSuperclassTag="ArrayBufferView"
H.cl.$nativeSuperclassTag="ArrayBufferView"
H.cm.$nativeSuperclassTag="ArrayBufferView"
H.cX.$nativeSuperclassTag="ArrayBufferView"
W.cn.$nativeSuperclassTag="EventTarget"
W.co.$nativeSuperclassTag="EventTarget"
W.cp.$nativeSuperclassTag="EventTarget"
W.cq.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(R.kA,[])
else R.kA([])})})()
//# sourceMappingURL=test.dart.js.map
