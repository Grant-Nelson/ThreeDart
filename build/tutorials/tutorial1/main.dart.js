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
a[c]=function(){a[c]=function(){H.m2(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jd"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jd"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jd(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={iV:function iV(){},
iS:function(){return new P.c1("No element")},
l_:function(){return new P.c1("Too many elements")},
o:function o(a){this.a=a},
eD:function eD(){},
bj:function bj(){},
bR:function bR(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fb:function fb(a,b,c){this.a=a
this.b=b
this.$ti=c},
fc:function fc(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fd:function fd(a,b,c){this.a=a
this.b=b
this.$ti=c},
c9:function c9(a,b,c){this.a=a
this.b=b
this.$ti=c},
hL:function hL(a,b,c){this.a=a
this.b=b
this.$ti=c},
bg:function bg(){},
dd:function dd(){},
dc:function dc(){},
by:function(a){var u,t=H.z(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
lK:function(a){return v.types[H.Y(a)]},
lR:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.P(a).$iA},
h:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a7(a)
if(typeof u!=="string")throw H.f(H.bv(a))
return u},
bY:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bm:function(a){return H.l4(a)+H.j9(H.b8(a),0,null)},
l4:function(a){var u,t,s,r,q,p,o,n=J.P(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.G||!!n.$ic8){r=C.p(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.by(t.length>1&&C.b.a9(t,0)===36?C.b.aG(t,1):t)},
jJ:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lc:function(a){var u,t,s,r=H.c([],[P.y])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bv(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.av(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.f(H.bv(s))}return H.jJ(r)},
jK:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bv(s))
if(s<0)throw H.f(H.bv(s))
if(s>65535)return H.lc(a)}return H.jJ(a)},
iX:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.av(u,10))>>>0,56320|u&1023)}throw H.f(P.az(a,0,1114111,null,null))},
bl:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lb:function(a){var u=H.bl(a).getFullYear()+0
return u},
l9:function(a){var u=H.bl(a).getMonth()+1
return u},
l5:function(a){var u=H.bl(a).getDate()+0
return u},
l6:function(a){var u=H.bl(a).getHours()+0
return u},
l8:function(a){var u=H.bl(a).getMinutes()+0
return u},
la:function(a){var u=H.bl(a).getSeconds()+0
return u},
l7:function(a){var u=H.bl(a).getMilliseconds()+0
return u},
b9:function(a){throw H.f(H.bv(a))},
l:function(a,b){if(a==null)J.bb(a)
throw H.f(H.cp(a,b))},
cp:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.an(!0,b,s,null)
u=H.Y(J.bb(a))
if(!(b<0)){if(typeof u!=="number")return H.b9(u)
t=b>=u}else t=!0
if(t)return P.M(b,a,s,null,u)
return P.fB(b,s)},
lG:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bn(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bn(a,c,!0,b,"end",u)
return new P.an(!0,b,"end",null)},
bv:function(a){return new P.an(!0,a,null,null)},
f:function(a){var u
if(a==null)a=new P.cX()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kp})
u.name=""}else u.toString=H.kp
return u},
kp:function(){return J.a7(this.dartException)},
a_:function(a){throw H.f(a)},
C:function(a){throw H.f(P.aW(a))},
aF:function(a){var u,t,s,r,q,p
a=H.ko(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hg(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hh:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jU:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jE:function(a,b){return new H.ft(a,b==null?null:b.method)},
iW:function(a,b){var u=b==null,t=u?null:b.method
return new H.f2(a,t,u?null:b.receiver)},
ab:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.iL(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.av(t,16)&8191)===10)switch(s){case 438:return f.$1(H.iW(H.h(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jE(H.h(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.ks()
q=$.kt()
p=$.ku()
o=$.kv()
n=$.ky()
m=$.kz()
l=$.kx()
$.kw()
k=$.kB()
j=$.kA()
i=r.T(u)
if(i!=null)return f.$1(H.iW(H.z(u),i))
else{i=q.T(u)
if(i!=null){i.method="call"
return f.$1(H.iW(H.z(u),i))}else{i=p.T(u)
if(i==null){i=o.T(u)
if(i==null){i=n.T(u)
if(i==null){i=m.T(u)
if(i==null){i=l.T(u)
if(i==null){i=o.T(u)
if(i==null){i=k.T(u)
if(i==null){i=j.T(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jE(H.z(u),i))}}return f.$1(new H.hx(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.d5()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.an(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.d5()
return a},
bw:function(a){var u
if(a==null)return new H.dQ(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dQ(a)},
lJ:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.F(0,a[u],a[t])}return b},
lQ:function(a,b,c,d,e,f){H.n(a,"$iaZ")
switch(H.Y(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.T("Unsupported number of arguments for wrapped closure"))},
co:function(a,b){var u
H.Y(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lQ)
a.$identity=u
return u},
kR:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.fW().constructor.prototype):Object.create(new H.bG(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ao
if(typeof t!=="number")return t.G()
$.ao=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.js(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.lK,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.jq:H.iP
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.f("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.js(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
kO:function(a,b,c,d){var u=H.iP
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
js:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kQ(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kO(t,!r,u,b)
if(t===0){r=$.ao
if(typeof r!=="number")return r.G()
$.ao=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bH
return new Function(r+H.h(q==null?$.bH=H.el("self"):q)+";return "+p+"."+H.h(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ao
if(typeof r!=="number")return r.G()
$.ao=r+1
o+=r
r="return function("+o+"){return this."
q=$.bH
return new Function(r+H.h(q==null?$.bH=H.el("self"):q)+"."+H.h(u)+"("+o+");}")()},
kP:function(a,b,c,d){var u=H.iP,t=H.jq
switch(b?-1:a){case 0:throw H.f(H.lg("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kQ:function(a,b){var u,t,s,r,q,p,o,n=$.bH
if(n==null)n=$.bH=H.el("self")
u=$.jp
if(u==null)u=$.jp=H.el("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.kP(s,!q,t,b)
if(s===1){n="return function(){return this."+H.h(n)+"."+H.h(t)+"(this."+H.h(u)+");"
u=$.ao
if(typeof u!=="number")return u.G()
$.ao=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.h(n)+"."+H.h(t)+"(this."+H.h(u)+", "+o+");"
u=$.ao
if(typeof u!=="number")return u.G()
$.ao=u+1
return new Function(n+u+"}")()},
jd:function(a,b,c,d,e,f,g){return H.kR(a,b,H.Y(c),d,!!e,!!f,g)},
iP:function(a){return a.a},
jq:function(a){return a.c},
el:function(a){var u,t,s,r=new H.bG("self","target","receiver","name"),q=J.iT(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
D:function(a){if(a==null)H.lA("boolean expression must not be null")
return a},
z:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.al(a,"String"))},
mG:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.al(a,"double"))},
lW:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.al(a,"num"))},
ja:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.al(a,"bool"))},
Y:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.al(a,"int"))},
km:function(a,b){throw H.f(H.al(a,H.by(H.z(b).substring(2))))},
lY:function(a,b){throw H.f(H.kN(a,H.by(H.z(b).substring(2))))},
n:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.P(a)[b])return a
H.km(a,b)},
eb:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else u=!0
if(u)return a
H.lY(a,b)},
ji:function(a){if(a==null)return a
if(!!J.P(a).$ib)return a
throw H.f(H.al(a,"List<dynamic>"))},
lS:function(a,b){var u
if(a==null)return a
u=J.P(a)
if(!!u.$ib)return a
if(u[b])return a
H.km(a,b)},
ke:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.Y(u)]
else return a.$S()}return},
ea:function(a,b){var u
if(typeof a=="function")return!0
u=H.ke(J.P(a))
if(u==null)return!1
return H.k5(u,null,b,null)},
k:function(a,b){var u,t
if(a==null)return a
if($.j6)return a
$.j6=!0
try{if(H.ea(a,b))return a
u=H.iK(b)
t=H.al(a,u)
throw H.f(t)}finally{$.j6=!1}},
je:function(a,b){if(a!=null&&!H.jc(a,b))H.a_(H.al(a,H.iK(b)))
return a},
al:function(a,b){return new H.hi("TypeError: "+P.cI(a)+": type '"+H.k9(a)+"' is not a subtype of type '"+b+"'")},
kN:function(a,b){return new H.em("CastError: "+P.cI(a)+": type '"+H.k9(a)+"' is not a subtype of type '"+b+"'")},
k9:function(a){var u,t=J.P(a)
if(!!t.$ibI){u=H.ke(t)
if(u!=null)return H.iK(u)
return"Closure"}return H.bm(a)},
lA:function(a){throw H.f(new H.hM(a))},
m2:function(a){throw H.f(new P.et(H.z(a)))},
lg:function(a){return new H.fJ(a)},
kg:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b8:function(a){if(a==null)return
return a.$ti},
mH:function(a,b,c){return H.bx(a["$a"+H.h(c)],H.b8(b))},
cr:function(a,b,c,d){var u
H.z(c)
H.Y(d)
u=H.bx(a["$a"+H.h(c)],H.b8(b))
return u==null?null:u[d]},
cq:function(a,b,c){var u
H.z(b)
H.Y(c)
u=H.bx(a["$a"+H.h(b)],H.b8(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.Y(b)
u=H.b8(a)
return u==null?null:u[b]},
iK:function(a){return H.b7(a,null)},
b7:function(a,b){var u,t
H.r(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.by(a[0].name)+H.j9(a,1,b)
if(typeof a=="function")return H.by(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Y(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.l(b,t)
return H.h(b[t])}if('func' in a)return H.lt(a,b)
if('futureOr' in a)return"FutureOr<"+H.b7("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lt:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.e]
H.r(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.l(a0,n)
p=C.b.G(p,a0[n])
m=u[q]
if(m!=null&&m!==P.I)p+=" extends "+H.b7(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.b7(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.b7(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.b7(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.lI(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.z(b[h])
j=j+i+H.b7(e[d],a0)+(" "+H.h(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
j9:function(a,b,c){var u,t,s,r,q,p
H.r(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.bp("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b7(p,c)}return"<"+u.i(0)+">"},
bx:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
jb:function(a,b,c,d){var u,t
H.z(b)
H.ji(c)
H.z(d)
if(a==null)return!1
u=H.b8(a)
t=J.P(a)
if(t[b]==null)return!1
return H.kc(H.bx(t[d],u),null,c,null)},
r:function(a,b,c,d){H.z(b)
H.ji(c)
H.z(d)
if(a==null)return a
if(H.jb(a,b,c,d))return a
throw H.f(H.al(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.by(b.substring(2))+H.j9(c,0,null),v.mangledGlobalNames)))},
kc:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ah(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ah(a[t],b,c[t],d))return!1
return!0},
mE:function(a,b,c){return a.apply(b,H.bx(J.P(b)["$a"+H.h(c)],H.b8(b)))},
ki:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="I"||a.name==="G"||a===-1||a===-2||H.ki(u)}return!1},
jc:function(a,b){var u,t
if(a==null)return b==null||b.name==="I"||b.name==="G"||b===-1||b===-2||H.ki(b)
if(b==null||b===-1||b.name==="I"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jc(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ea(a,b)}u=J.P(a).constructor
t=H.b8(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ah(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.jc(a,b))throw H.f(H.al(a,H.iK(b)))
return a},
ah:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="I"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="I"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ah(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="G")return!0
if('func' in c)return H.k5(a,b,c,d)
if('func' in a)return c.name==="aZ"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.ah("type" in a?a.type:l,b,s,d)
else if(H.ah(a,b,s,d))return!0
else{if(!('$i'+"bQ" in t.prototype))return!1
r=t.prototype["$a"+"bQ"]
q=H.bx(r,u?a.slice(1):l)
return H.ah(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.kc(H.bx(m,u),b,p,d)},
k5:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.ah(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.ah(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ah(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ah(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.lV(h,b,g,d)},
lV:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.ah(c[s],d,a[s],b))return!1}return!0},
mF:function(a,b,c){Object.defineProperty(a,H.z(b),{value:c,enumerable:false,writable:true,configurable:true})},
lT:function(a){var u,t,s,r,q=H.z($.kh.$1(a)),p=$.iB[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iI[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.z($.kb.$2(a,q))
if(q!=null){p=$.iB[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iI[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.iJ(u)
$.iB[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.iI[q]=u
return u}if(s==="-"){r=H.iJ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kk(a,u)
if(s==="*")throw H.f(P.jV(q))
if(v.leafTags[q]===true){r=H.iJ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kk(a,u)},
kk:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jj(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iJ:function(a){return J.jj(a,!1,null,!!a.$iA)},
lU:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iJ(u)
else return J.jj(u,c,null,null)},
lO:function(){if(!0===$.jh)return
$.jh=!0
H.lP()},
lP:function(){var u,t,s,r,q,p,o,n
$.iB=Object.create(null)
$.iI=Object.create(null)
H.lN()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kn.$1(q)
if(p!=null){o=H.lU(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
lN:function(){var u,t,s,r,q,p,o=C.v()
o=H.bu(C.w,H.bu(C.x,H.bu(C.o,H.bu(C.o,H.bu(C.y,H.bu(C.z,H.bu(C.A(C.p),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kh=new H.iF(r)
$.kb=new H.iG(q)
$.kn=new H.iH(p)},
bu:function(a,b){return a(b)||b},
l1:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(new P.eP("Illegal RegExp pattern ("+String(r)+")",a))},
m_:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lH:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
ko:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jk:function(a,b,c){var u=H.m0(a,b,c)
return u},
m0:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.ko(b),'g'),H.lH(c))},
hg:function hg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ft:function ft(a,b){this.a=a
this.b=b},
f2:function f2(a,b,c){this.a=a
this.b=b
this.c=c},
hx:function hx(a){this.a=a},
iL:function iL(a){this.a=a},
dQ:function dQ(a){this.a=a
this.b=null},
bI:function bI(){},
h5:function h5(){},
fW:function fW(){},
bG:function bG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hi:function hi(a){this.a=a},
em:function em(a){this.a=a},
fJ:function fJ(a){this.a=a},
hM:function hM(a){this.a=a},
av:function av(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f5:function f5(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cP:function cP(a,b){this.a=a
this.$ti=b},
f6:function f6(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
iF:function iF(a){this.a=a},
iG:function iG(a){this.a=a},
iH:function iH(a){this.a=a},
f1:function f1(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
j5:function(a){return a},
b6:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.cp(b,a))},
ls:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.lG(a,b,c))
return b},
bW:function bW(){},
cT:function cT(){},
bV:function bV(){},
cU:function cU(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
cV:function cV(){},
fq:function fq(){},
cd:function cd(){},
ce:function ce(){},
cf:function cf(){},
cg:function cg(){},
lI:function(a){return J.jw(a?Object.keys(a):[],null)},
lX:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jj:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iE:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jh==null){H.lO()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.jV("Return interceptor for "+H.h(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jm()]
if(r!=null)return r
r=H.lT(a)
if(r!=null)return r
if(typeof a=="function")return C.H
u=Object.getPrototypeOf(a)
if(u==null)return C.q
if(u===Object.prototype)return C.q
if(typeof s=="function"){Object.defineProperty(s,$.jm(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
l0:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.iO(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.az(a,0,4294967295,"length",null))
return J.jw(new Array(a),b)},
jw:function(a,b){return J.iT(H.c(a,[b]))},
iT:function(a){H.ji(a)
a.fixed$length=Array
return a},
P:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cL.prototype
return J.f_.prototype}if(typeof a=="string")return J.bi.prototype
if(a==null)return J.f0.prototype
if(typeof a=="boolean")return J.eZ.prototype
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.I)return a
return J.iE(a)},
jf:function(a){if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.I)return a
return J.iE(a)},
iD:function(a){if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.I)return a
return J.iE(a)},
kf:function(a){if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.I))return J.c8.prototype
return a},
jg:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.I)return a
return J.iE(a)},
a2:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).n(a,b)},
kH:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lR(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jf(a).m(a,b)},
kI:function(a,b,c,d){return J.jg(a).e_(a,b,c,d)},
iM:function(a,b){return J.iD(a).t(a,b)},
kJ:function(a,b){return J.iD(a).D(a,b)},
kK:function(a){return J.jg(a).ge4(a)},
cu:function(a){return J.P(a).gC(a)},
ba:function(a){return J.iD(a).gE(a)},
bb:function(a){return J.jf(a).gl(a)},
jo:function(a){return J.iD(a).eI(a)},
kL:function(a,b,c){return J.kf(a).aq(a,b,c)},
kM:function(a){return J.kf(a).eR(a)},
a7:function(a){return J.P(a).i(a)},
a:function a(){},
eZ:function eZ(){},
f0:function f0(){},
cN:function cN(){},
fx:function fx(){},
c8:function c8(){},
b0:function b0(){},
au:function au(a){this.$ti=a},
iU:function iU(a){this.$ti=a},
ac:function ac(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cM:function cM(){},
cL:function cL(){},
f_:function f_(){},
bi:function bi(){}},P={
lk:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lB()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.co(new P.hO(s),1)).observe(u,{childList:true})
return new P.hN(s,u,t)}else if(self.setImmediate!=null)return P.lC()
return P.lD()},
ll:function(a){self.scheduleImmediate(H.co(new P.hP(H.k(a,{func:1,ret:-1})),0))},
lm:function(a){self.setImmediate(H.co(new P.hQ(H.k(a,{func:1,ret:-1})),0))},
ln:function(a){P.iZ(C.h,H.k(a,{func:1,ret:-1}))},
iZ:function(a,b){var u
H.k(b,{func:1,ret:-1})
u=C.e.aw(a.a,1000)
return P.lr(u<0?0:u,b)},
lr:function(a,b){var u=new P.iq()
u.cC(a,b)
return u},
lo:function(a,b){var u,t,s
b.a=1
try{a.c7(new P.hZ(b),new P.i_(b),null)}catch(s){u=H.ab(s)
t=H.bw(s)
P.lZ(new P.i0(b,u,t))}},
k0:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.n(a.c,"$iag")
if(u>=4){t=b.aW()
b.a=a.a
b.c=a.c
P.cc(b,t)}else{t=H.n(b.c,"$iaI")
b.a=2
b.c=a
a.bF(t)}},
cc:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.n(g.c,"$ia0")
g=g.b
r=s.a
q=s.b
g.toString
P.ix(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cc(h.a,b)}g=h.a
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
P.ix(i,i,g,r,q)
return}l=$.Q
if(l!=n)$.Q=n
else l=i
g=b.c
if(g===8)new P.i4(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.i3(u,b,o).$0()}else if((g&2)!==0)new P.i2(h,u,b).$0()
if(l!=null)$.Q=l
g=u.b
if(!!J.P(g).$ibQ){if(g.a>=4){k=H.n(q.c,"$iaI")
q.c=null
b=q.au(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.k0(g,q)
return}}j=b.b
k=H.n(j.c,"$iaI")
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
lw:function(a,b){if(H.ea(a,{func:1,args:[P.I,P.a5]}))return H.k(a,{func:1,ret:null,args:[P.I,P.a5]})
if(H.ea(a,{func:1,args:[P.I]}))return H.k(a,{func:1,ret:null,args:[P.I]})
throw H.f(P.iO(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lv:function(){var u,t
for(;u=$.bt,u!=null;){$.cn=null
t=u.b
$.bt=t
if(t==null)$.cm=null
u.a.$0()}},
lz:function(){$.j7=!0
try{P.lv()}finally{$.cn=null
$.j7=!1
if($.bt!=null)$.jn().$1(P.kd())}},
k8:function(a){var u=new P.dh(H.k(a,{func:1,ret:-1}))
if($.bt==null){$.bt=$.cm=u
if(!$.j7)$.jn().$1(P.kd())}else $.cm=$.cm.b=u},
ly:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
u=$.bt
if(u==null){P.k8(a)
$.cn=$.cm
return}t=new P.dh(a)
s=$.cn
if(s==null){t.b=u
$.bt=$.cn=t}else{t.b=s.b
$.cn=s.b=t
if(t.b==null)$.cm=t}},
lZ:function(a){var u,t=null,s={func:1,ret:-1}
H.k(a,s)
u=$.Q
if(C.d===u){P.iz(t,t,C.d,a)
return}u.toString
P.iz(t,t,u,H.k(u.b_(a),s))},
jT:function(a,b){var u,t={func:1,ret:-1}
H.k(b,t)
u=$.Q
if(u===C.d){u.toString
return P.iZ(a,b)}return P.iZ(a,H.k(u.b_(b),t))},
ix:function(a,b,c,d,e){var u={}
u.a=d
P.ly(new P.iy(u,e))},
k6:function(a,b,c,d,e){var u,t
H.k(d,{func:1,ret:e})
t=$.Q
if(t===c)return d.$0()
$.Q=c
u=t
try{t=d.$0()
return t}finally{$.Q=u}},
k7:function(a,b,c,d,e,f,g){var u,t
H.k(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.Q
if(t===c)return d.$1(e)
$.Q=c
u=t
try{t=d.$1(e)
return t}finally{$.Q=u}},
lx:function(a,b,c,d,e,f,g,h,i){var u,t
H.k(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.Q
if(t===c)return d.$2(e,f)
$.Q=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Q=u}},
iz:function(a,b,c,d){var u
H.k(d,{func:1,ret:-1})
u=C.d!==c
if(u)d=!(!u||!1)?c.b_(d):c.e5(d,-1)
P.k8(d)},
hO:function hO(a){this.a=a},
hN:function hN(a,b,c){this.a=a
this.b=b
this.c=c},
hP:function hP(a){this.a=a},
hQ:function hQ(a){this.a=a},
iq:function iq(){},
ir:function ir(a,b){this.a=a
this.b=b},
aI:function aI(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ag:function ag(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
hY:function hY(a,b){this.a=a
this.b=b},
i1:function i1(a,b){this.a=a
this.b=b},
hZ:function hZ(a){this.a=a},
i_:function i_(a){this.a=a},
i0:function i0(a,b,c){this.a=a
this.b=b
this.c=c},
i4:function i4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i5:function i5(a){this.a=a},
i3:function i3(a,b,c){this.a=a
this.b=b
this.c=c},
i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c},
dh:function dh(a){this.a=a
this.b=null},
fZ:function fZ(){},
h0:function h0(a,b){this.a=a
this.b=b},
h1:function h1(a,b){this.a=a
this.b=b},
c2:function c2(){},
h_:function h_(){},
a0:function a0(a,b){this.a=a
this.b=b},
iu:function iu(){},
iy:function iy(a,b){this.a=a
this.b=b},
ib:function ib(){},
id:function id(a,b,c){this.a=a
this.b=b
this.c=c},
ic:function ic(a,b){this.a=a
this.b=b},
ie:function ie(a,b,c){this.a=a
this.b=b
this.c=c},
jx:function(a,b){return new H.av([a,b])},
l2:function(a){return H.lJ(a,new H.av([null,null]))},
cQ:function(a){return new P.i8([a])},
j3:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
k3:function(a,b,c){var u=new P.i9(a,b,[c])
u.c=a.e
return u},
kZ:function(a,b,c){var u,t
if(P.j8(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.e])
C.a.h($.a6,a)
try{P.lu(a,u)}finally{if(0>=$.a6.length)return H.l($.a6,-1)
$.a6.pop()}t=P.jR(b,H.lS(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
iR:function(a,b,c){var u,t
if(P.j8(a))return b+"..."+c
u=new P.bp(b)
C.a.h($.a6,a)
try{t=u
t.a=P.jR(t.a,a,", ")}finally{if(0>=$.a6.length)return H.l($.a6,-1)
$.a6.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
j8:function(a){var u,t
for(u=$.a6.length,t=0;t<u;++t)if(a===$.a6[t])return!0
return!1},
lu:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.r(b,"$ib",[P.e],"$ab")
u=a.gE(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.p())return
r=H.h(u.gw(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.p()){if(s<=5)return
if(0>=b.length)return H.l(b,-1)
q=b.pop()
if(0>=b.length)return H.l(b,-1)
p=b.pop()}else{o=u.gw(u);++s
if(!u.p()){if(s<=4){C.a.h(b,H.h(o))
return}q=H.h(o)
if(0>=b.length)return H.l(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gw(u);++s
for(;u.p();o=n,n=m){m=u.gw(u);++s
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
jy:function(a,b){var u,t,s=P.cQ(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t)s.h(0,H.B(a[t],b))
return s},
jA:function(a){var u,t={}
if(P.j8(a))return"{...}"
u=new P.bp("")
try{C.a.h($.a6,a)
u.a+="{"
t.a=!0
J.kJ(a,new P.fa(t,u))
u.a+="}"}finally{if(0>=$.a6.length)return H.l($.a6,-1)
$.a6.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
i8:function i8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bs:function bs(a){this.a=a
this.c=this.b=null},
i9:function i9(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
f7:function f7(){},
t:function t(){},
f9:function f9(){},
fa:function fa(a,b){this.a=a
this.b=b},
V:function V(){},
ih:function ih(){},
dy:function dy(){},
bJ:function bJ(){},
bK:function bK(){},
eF:function eF(){},
eV:function eV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eU:function eU(a){this.a=a},
hA:function hA(){},
hB:function hB(){},
is:function is(a){this.b=0
this.c=a},
kX:function(a){if(a instanceof H.bI)return a.i(0)
return"Instance of '"+H.bm(a)+"'"},
l3:function(a,b,c){var u,t
H.B(b,c)
u=J.l0(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.F(u,t,b)
return H.r(u,"$ib",[c],"$ab")},
jz:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.ba(a);u.p();)C.a.h(s,H.B(u.gw(u),c))
if(b)return s
return H.r(J.iT(s),"$ib",t,"$ab")},
iY:function(a){var u,t,s=P.y
H.r(a,"$ii",[s],"$ai")
if(a.constructor===Array){H.r(a,"$iau",[s],"$aau")
u=a.length
t=P.jM(0,null,u)
return H.jK(t<u?C.a.cm(a,0,t):a)}return P.li(a,0,null)},
li:function(a,b,c){var u,t,s
H.r(a,"$ii",[P.y],"$ai")
u=J.ba(a)
for(t=0;t<b;++t)if(!u.p())throw H.f(P.az(b,0,t,null,null))
s=[]
for(;u.p();)s.push(u.gw(u))
return H.jK(s)},
ld:function(a){return new H.f1(a,H.l1(a,!1,!0,!1))},
jR:function(a,b,c){var u=J.ba(b)
if(!u.p())return a
if(c.length===0){do a+=H.h(u.gw(u))
while(u.p())}else{a+=H.h(u.gw(u))
for(;u.p();)a=a+c+H.h(u.gw(u))}return a},
j4:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.r(a,"$ib",[P.y],"$ab")
if(c===C.f){u=$.kG().b
u=u.test(b)}else u=!1
if(u)return b
t=C.C.e9(H.B(b,H.cq(c,"bJ",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.l(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.iX(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
kS:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kT:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cE:function(a){if(a>=10)return""+a
return"0"+a},
kU:function(a,b){return new P.bf(1e6*b+1000*a)},
cI:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a7(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kX(a)},
iO:function(a,b,c){return new P.an(!0,a,b,c)},
fB:function(a,b){return new P.bn(null,null,!0,a,b,"Value not in range")},
az:function(a,b,c,d,e){return new P.bn(b,c,!0,a,d,"Invalid value")},
jM:function(a,b,c){if(0>a||a>c)throw H.f(P.az(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.az(b,a,c,"end",null))
return b}return c},
jL:function(a,b){if(typeof a!=="number")return a.ci()
if(a<0)throw H.f(P.az(a,0,null,b,null))},
M:function(a,b,c,d,e){var u=H.Y(e==null?J.bb(b):e)
return new P.eW(u,!0,a,c,"Index out of range")},
aG:function(a){return new P.hy(a)},
jV:function(a){return new P.hw(a)},
jQ:function(a){return new P.c1(a)},
aW:function(a){return new P.eo(a)},
T:function(a){return new P.dq(a)},
kl:function(a){H.lX(a)},
L:function L(){},
bN:function bN(a,b){this.a=a
this.b=b},
x:function x(){},
bf:function bf(a){this.a=a},
eB:function eB(){},
eC:function eC(){},
aX:function aX(){},
ee:function ee(){},
cX:function cX(){},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bn:function bn(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eW:function eW(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hy:function hy(a){this.a=a},
hw:function hw(a){this.a=a},
c1:function c1(a){this.a=a},
eo:function eo(a){this.a=a},
fw:function fw(){},
d5:function d5(){},
et:function et(a){this.a=a},
dq:function dq(a){this.a=a},
eP:function eP(a,b){this.a=a
this.b=b},
aZ:function aZ(){},
y:function y(){},
i:function i(){},
at:function at(){},
b:function b(){},
F:function F(){},
G:function G(){},
Z:function Z(){},
I:function I(){},
a5:function a5(){},
e:function e(){},
bp:function bp(a){this.a=a},
aQ:function(a){var u,t,s,r,q
if(a==null)return
u=P.jx(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=H.z(t[r])
u.F(0,q,a[q])}return u},
lF:function(a){var u={}
a.D(0,new P.iA(u))
return u},
iA:function iA(a){this.a=a},
eL:function eL(a,b){this.a=a
this.b=b},
eM:function eM(){},
eN:function eN(){},
ia:function ia(){},
ae:function ae(){},
aL:function aL(){},
f4:function f4(){},
aN:function aN(){},
fu:function fu(){},
fA:function fA(){},
bZ:function bZ(){},
h2:function h2(){},
m:function m(){},
aO:function aO(){},
hf:function hf(){},
dw:function dw(){},
dx:function dx(){},
dG:function dG(){},
dH:function dH(){},
dS:function dS(){},
dT:function dT(){},
dY:function dY(){},
dZ:function dZ(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(a){this.a=a},
ej:function ej(){},
bc:function bc(){},
fv:function fv(){},
di:function di(){},
cy:function cy(){},
d0:function d0(){},
bo:function bo(){},
d3:function d3(){},
db:function db(){},
fV:function fV(){},
dO:function dO(){},
dP:function dP(){}},W={
iN:function(){var u=document.createElement("a")
return u},
jr:function(){var u=document.createElement("canvas")
return u},
kV:function(a,b,c){var u=document.body,t=(u&&C.n).R(u,a,b,c)
t.toString
u=W.w
u=new H.c9(new W.a1(t),H.k(new W.eE(),{func:1,ret:P.L,args:[u]}),[u])
return H.n(u.ga4(u),"$iJ")},
kW:function(a){H.n(a,"$id")
return"wheel"},
bO:function(a){var u,t,s,r="element tag unavailable"
try{u=J.jg(a)
t=u.gc5(a)
if(typeof t==="string")r=u.gc5(a)}catch(s){H.ab(s)}return r},
i7:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
k2:function(a,b,c,d){var u=W.i7(W.i7(W.i7(W.i7(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
X:function(a,b,c,d,e){var u=W.ka(new W.hX(c),W.j)
if(u!=null&&!0)J.kI(a,b,u,!1)
return new W.hW(a,b,u,!1,[e])},
k1:function(a){var u=W.iN(),t=window.location
u=new W.b5(new W.ig(u,t))
u.cw(a)
return u},
lp:function(a,b,c,d){H.n(a,"$iJ")
H.z(b)
H.z(c)
H.n(d,"$ib5")
return!0},
lq:function(a,b,c,d){var u,t,s
H.n(a,"$iJ")
H.z(b)
H.z(c)
u=H.n(d,"$ib5").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
k4:function(){var u=P.e,t=P.jy(C.j,u),s=H.u(C.j,0),r=H.k(new W.ip(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.io(t,P.cQ(u),P.cQ(u),P.cQ(u),null)
t.cB(null,new H.fd(C.j,r,[s,u]),q,null)
return t},
ka:function(a,b){var u
H.k(a,{func:1,ret:-1,args:[b]})
u=$.Q
if(u===C.d)return a
return u.e6(a,b)},
p:function p(){},
ec:function ec(){},
cv:function cv(){},
ed:function ed(){},
bF:function bF(){},
cx:function cx(){},
aS:function aS(){},
bd:function bd(){},
aT:function aT(){},
bL:function bL(){},
ep:function ep(){},
K:function K(){},
bM:function bM(){},
eq:function eq(){},
ap:function ap(){},
aq:function aq(){},
er:function er(){},
es:function es(){},
ev:function ev(){},
ad:function ad(){},
ey:function ey(){},
cF:function cF(){},
cG:function cG(){},
ez:function ez(){},
eA:function eA(){},
hS:function hS(a,b){this.a=a
this.b=b},
J:function J(){},
eE:function eE(){},
j:function j(){},
d:function d(){},
ar:function ar(){},
eJ:function eJ(){},
eK:function eK(){},
eO:function eO(){},
as:function as(){},
eT:function eT(){},
bh:function bh(){},
aw:function aw(){},
cR:function cR(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(a){this.a=a},
fh:function fh(){},
fi:function fi(a){this.a=a},
ax:function ax(){},
fj:function fj(){},
W:function W(){},
a1:function a1(a){this.a=a},
w:function w(){},
bX:function bX(){},
ay:function ay(){},
fz:function fz(){},
fH:function fH(){},
fI:function fI(a){this.a=a},
fK:function fK(){},
aA:function aA(){},
fT:function fT(){},
aB:function aB(){},
fU:function fU(){},
aC:function aC(){},
fX:function fX(){},
fY:function fY(a){this.a=a},
ai:function ai(){},
bq:function bq(){},
d6:function d6(){},
h3:function h3(){},
h4:function h4(){},
c3:function c3(){},
aD:function aD(){},
aj:function aj(){},
h6:function h6(){},
h7:function h7(){},
h9:function h9(){},
aE:function aE(){},
ak:function ak(){},
hd:function hd(){},
he:function he(){},
b4:function b4(){},
hz:function hz(){},
hJ:function hJ(){},
aH:function aH(){},
ca:function ca(){},
cb:function cb(){},
hT:function hT(){},
dk:function dk(){},
i6:function i6(){},
dD:function dD(){},
ik:function ik(){},
il:function il(){},
hR:function hR(){},
hU:function hU(a){this.a=a},
hV:function hV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j2:function j2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hW:function hW(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
hX:function hX(a){this.a=a},
b5:function b5(a){this.a=a},
v:function v(){},
cW:function cW(a){this.a=a},
fs:function fs(a){this.a=a},
fr:function fr(a,b,c){this.a=a
this.b=b
this.c=c},
dL:function dL(){},
ii:function ii(){},
ij:function ij(){},
io:function io(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ip:function ip(){},
im:function im(){},
cK:function cK(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
a9:function a9(){},
ig:function ig(a,b){this.a=a
this.b=b},
e_:function e_(a){this.a=a},
it:function it(a){this.a=a},
dj:function dj(){},
dl:function dl(){},
dm:function dm(){},
dn:function dn(){},
dp:function dp(){},
dr:function dr(){},
ds:function ds(){},
du:function du(){},
dv:function dv(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
dE:function dE(){},
dF:function dF(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
ch:function ch(){},
ci:function ci(){},
dM:function dM(){},
dN:function dN(){},
dR:function dR(){},
dU:function dU(){},
dV:function dV(){},
cj:function cj(){},
ck:function ck(){},
dW:function dW(){},
dX:function dX(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){}},O={
jt:function(a){var u=new O.aV([a])
u.scZ(H.c([],[a]))
u.sbD(null)
u.sbC(null)
u.sbE(null)
return u},
aV:function aV(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bS:function bS(){this.b=this.a=null},
ew:function ew(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
br:function br(){}},E={
lf:function(a,b){var u=new E.fD(a)
u.cs(a,b)
return u},
lj:function(a,b,c,d,e){var u,t,s=J.P(a)
if(!!s.$ibd)return E.jS(a,!0,!0,!0,!1)
u=W.jr()
t=u.style
t.width="100%"
t.height="100%"
s.gbM(a).h(0,u)
return E.jS(u,!0,!0,!0,!1)},
jS:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.d8(),j=H.n(C.D.cg(a,"webgl2",P.l2(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibo")
if(j==null)H.a_(P.T("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.lf(j,a)
H.Y(j.getParameter(3379))
H.Y(j.getParameter(34076))
u=new X.de(a)
t=new X.f3()
t.sdG(P.cQ(P.y))
u.b=t
t=new X.fk(u)
t.f=0
t.r=V.cZ()
t.x=V.cZ()
t.ch=t.Q=1
u.c=t
t=new X.f8(u)
t.r=0
t.x=V.cZ()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hc(u)
t.f=V.cZ()
t.r=V.cZ()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.scP(H.c([],[[P.c2,P.I]]))
t=u.z
s=document
r=W.W
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.X(s,"contextmenu",H.k(u.gd7(),q),!1,r))
t=u.z
p=W.j
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.X(a,"focus",H.k(u.gde(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.X(a,"blur",H.k(u.gd1(),o),!1,p))
t=u.z
n=W.aw
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.X(s,"keyup",H.k(u.gdi(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.X(s,"keydown",H.k(u.gdg(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.X(a,"mousedown",H.k(u.gdl(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.X(a,"mouseup",H.k(u.gdr(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.X(a,l,H.k(u.gdn(),q),!1,r))
n=u.z
m=W.aH;(n&&C.a).h(n,W.X(a,H.z(W.kW(a)),H.k(u.gdt(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.X(s,l,H.k(u.gd9(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.X(s,"mouseup",H.k(u.gdc(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.X(s,"pointerlockchange",H.k(u.gdv(),o),!1,p))
p=u.z
o=W.ak
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.X(a,"touchstart",H.k(u.gdE(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.X(a,"touchend",H.k(u.gdA(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.X(a,"touchmove",H.k(u.gdC(),s),!1,o))
k.Q=!0
k.ch=!1
Date.now()
k.cy=0
k.bG()
return k},
ek:function ek(){},
a3:function a3(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fD:function fD(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fE:function fE(a){this.a=a},
fF:function fF(a){this.a=a},
fG:function fG(a){this.a=a},
d8:function d8(){var _=this
_.cy=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
h8:function h8(a){this.a=a}},Z={
j1:function(a,b,c){var u
H.r(c,"$ib",[P.y],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.j5(c)),35044)
a.bindBuffer(b,null)
return new Z.dg(b,u)},
af:function(a){return new Z.df(a)},
dg:function dg(a,b){this.a=a
this.b=b},
cz:function cz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
hK:function hK(a){this.a=a},
cA:function cA(a,b){this.a=a
this.b=null
this.c=b},
b_:function b_(a,b,c){this.a=a
this.b=b
this.c=c},
df:function df(a){this.a=a}},D={
aY:function(){var u=new D.bP()
u.sab(null)
u.sat(null)
u.c=null
u.d=0
return u},
en:function en(){},
bP:function bP(){var _=this
_.d=_.c=_.b=_.a=null},
eH:function eH(a){this.a=a},
eI:function eI(a){this.a=a},
E:function E(){this.b=null},
eX:function eX(a){this.b=null
this.$ti=a},
eY:function eY(a){this.b=null
this.$ti=a},
R:function R(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d}},X={cB:function cB(a,b){this.a=a
this.b=b},cO:function cO(a,b){this.a=a
this.b=b},f3:function f3(){this.d=this.b=this.a=null},f8:function f8(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bT:function bT(a,b,c){this.a=a
this.b=b
this.c=c},fk:function fk(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hc:function hc(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},de:function de(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kY:function(a){var u=new X.eQ(),t=V.lE(1)
u.a=new V.be(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.jN
if(t==null){t=V.le(0,0,1,1)
$.jN=t}u.r=t
return u},
cC:function cC(){},
eQ:function eQ(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cY:function cY(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
d7:function d7(){}},V={
lE:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
jl:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.cj(a-b,u)
return(a<0?a+u:a)+b},
H:function(a,b,c){if(a==null)return C.b.V("null",c)
return C.b.V(C.c.eS(Math.abs(a-0)<$.O().a?0:a,b),c+b+1)},
iC:function(a,b,c){var u,t,s,r,q
H.r(a,"$ib",[P.x],"$ab")
u=H.c([],[P.e])
for(t=0,s=0;s<4;++s){r=V.H(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(u,r)}for(q=u.length-1;q>=0;--q){if(q>=u.length)return H.l(u,q)
C.a.F(u,q,C.b.V(u[q],t))}return u},
jC:function(){var u=$.jB
return u==null?$.jB=V.b2(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b2:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.b1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cZ:function(){var u=$.jH
return u==null?$.jH=new V.aa(0,0):u},
le:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d1(a,b,c,d)},
j0:function(){var u=$.jZ
return u==null?$.jZ=new V.S(0,0,0):u},
be:function be(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eG:function eG(a){this.a=a},
b1:function b1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aa:function aa(a,b){this.a=a
this.b=b},
bk:function bk(a,b,c){this.a=a
this.b=b
this.c=c},
d_:function d_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d1:function d1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aP:function aP(a,b){this.a=a
this.b=b},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
N:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.T("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.a9(a,0)
t=C.b.a9(b,0)
s=new V.fC()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
q:function(a){var u=new V.fL()
u.ct(a)
return u},
hb:function(){var u=new V.ha(),t=P.e
u.sdT(new H.av([t,V.c0]))
u.sdW(new H.av([t,V.c4]))
u.c=null
return u},
aJ:function aJ(){},
a8:function a8(){},
cS:function cS(){},
a4:function a4(){this.a=null},
fC:function fC(){this.b=this.a=null},
fL:function fL(){this.a=null},
c0:function c0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d9:function d9(a,b,c){this.a=a
this.b=b
this.c=c},
c4:function c4(a){this.b=a
this.c=null},
ha:function ha(){this.c=this.b=this.a=null},
c5:function c5(a){this.b=a
this.a=this.c=null},
lh:function(a){var u=new V.fP()
u.cv(a,!0)
return u},
aU:function aU(){},
eu:function eu(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eR:function eR(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eS:function eS(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fy:function fy(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fP:function fP(){this.b=this.a=null},
fR:function fR(a){this.a=a},
fQ:function fQ(a){this.a=a},
fS:function fS(a){this.a=a}},U={cD:function cD(){this.b=this.a=null},bU:function bU(){},d2:function d2(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cH:function cH(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
j_:function(a,b,c,d,e){var u=new A.hk(a,c,e)
u.f=d
u.sdY(P.l3(d,0,P.y))
return u},
cw:function cw(a,b,c){this.a=a
this.b=b
this.c=c},
ef:function ef(a){this.a=a},
ex:function ex(a,b){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
c_:function c_(){},
da:function da(){},
hr:function hr(a){this.a=a},
hj:function hj(a,b,c){this.a=a
this.c=b
this.d=c},
hm:function hm(a,b,c){this.a=a
this.c=b
this.d=c},
ho:function ho(a,b,c){this.a=a
this.c=b
this.d=c},
hq:function hq(a,b,c){this.a=a
this.c=b
this.d=c},
hk:function hk(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
c6:function c6(a,b,c){this.a=a
this.c=b
this.d=c},
hl:function hl(a,b,c){this.a=a
this.c=b
this.d=c},
hn:function hn(a,b,c){this.a=a
this.c=b
this.d=c},
hp:function hp(a,b,c){this.a=a
this.c=b
this.d=c},
hs:function hs(a,b,c){this.a=a
this.c=b
this.d=c},
ht:function ht(a,b,c){this.a=a
this.c=b
this.d=c},
c7:function c7(a,b,c){this.a=a
this.c=b
this.d=c},
hu:function hu(a,b,c){this.a=a
this.c=b
this.d=c},
hv:function hv(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iw:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cl:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.S(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.S(u+a3,t+a1,s+a2)
q=new V.S(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.S(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.iw(i)
l=F.iw(j.b)
k=F.m1(d,a0,new F.iv(j,F.iw(j.c),F.iw(j.d),l,m,c),b)
if(k!=null)a.er(k)},
m1:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,{func:1,ret:-1,args:[F.am,P.x,P.x]})
if(a<1)return
if(b<1)return
u=F.jP()
t=H.c([],[F.am])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.bK(new V.be(p,0,0,1),new V.aa(r,1))
c.$3(o,r,0)
C.a.h(t,o.b4(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.bK(new V.be(j,i,h,1),new V.aa(r,m))
c.$3(o,r,n)
C.a.h(t,o.b4(d))}}u.d.e0(a+1,b+1,t)
return u},
cJ:function(a,b,c){var u=new F.U(),t=a.a
if(t==null)H.a_(P.T("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.a_(P.T("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.U()
return u},
jP:function(){var u=new F.d4(),t=new F.hC(u)
t.b=!1
t.sdZ(H.c([],[F.am]))
u.a=t
t=new F.fO(u)
t.saU(H.c([],[F.b3]))
u.b=t
t=new F.fN(u)
t.scW(H.c([],[F.aM]))
u.c=t
t=new F.fM(u)
t.scQ(H.c([],[F.U]))
u.d=t
u.e=null
return u},
k_:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.am(),r=new F.hH()
r.saU(H.c([],[F.b3]))
s.b=r
r=new F.hG()
u=[F.aM]
r.scX(H.c([],u))
r.scY(H.c([],u))
s.c=r
r=new F.hD()
u=[F.U]
r.scR(H.c([],u))
r.scS(H.c([],u))
r.scT(H.c([],u))
s.d=r
h=$.kC()
s.e=0
r=$.aR()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bB().a)!==0?e:t
s.x=(u&$.bA().a)!==0?b:t
s.y=(u&$.bC().a)!==0?f:t
s.z=(u&$.bD().a)!==0?g:t
s.Q=(u&$.kD().a)!==0?c:t
s.ch=(u&$.bE().a)!==0?i:0
s.cx=(u&$.bz().a)!==0?a:t
return s},
iv:function iv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
U:function U(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
aM:function aM(){this.b=this.a=null},
b3:function b3(){this.a=null},
d4:function d4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fM:function fM(a){this.a=a
this.b=null},
fN:function fN(a){this.a=a
this.b=null},
fO:function fO(a){this.a=a
this.b=null},
am:function am(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hI:function hI(a){this.a=a},
hC:function hC(a){this.a=a
this.c=this.b=null},
hD:function hD(){this.d=this.c=this.b=null},
hE:function hE(a,b){this.a=a
this.b=b},
hF:function hF(a,b){this.a=a
this.b=b},
hG:function hG(){this.c=this.b=null},
hH:function hH(){this.b=null},
kj:function(){var u,t,s,r,q,p,o,n,m,l,k,j="tutorial1",i=null,h=V.lh("Tutorial 1"),g=[P.e]
h.M(H.c(['This tutorial will walk you through creating the "Hello World" ',"of 3D graphics, a rotating cube. After this tutorial you should know how ","to create a [3Dart|https://github.com/Grant-Nelson/ThreeDart] project. ","However, it is recommended you have a basic understanding of [Dart|https://www.dartlang.org] ","and [3D Matrices|http://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices/] ","before starting. You will not need to know [WebGL|https://en.wikipedia.org/wiki/WebGL] ","nor [OpenGL|https://en.wikipedia.org/wiki/OpenGL] until the more advanced ","tutorials."],g))
u=W.jr()
u.className="pageCanvas"
u.id=j
h.a.appendChild(u)
h.al(0,"Getting Started")
h.M(H.c(["The following is the [HTML|#index.html] and the [Dart|#main.dart] files ","that we will explore in this tutorial. For this first tutorial I will just ","provide the code and then we'll go over code describing how it works."],g))
h.bJ("index.html","html",0,H.c(["<!DOCTYPE html>","<html>","  <head>",'  \t<meta charset="utf-8">','  \t<meta name="viewport" content="width=device-width, initial-scale=1.0">',"   <title>Tutorial 1</title>","  </head>","  <body>",'    <canvas id="tutorial1" width="800" height="600"></canvas>','    <script defer src="main.dart.js"></script>',"  </body>","</html>"],g))
h.bJ("main.dart","dart",0,H.c(["library threeDartTutorial1;","","import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;","import 'package:ThreeDart/Shapes.dart' as Shapes;","import 'package:ThreeDart/Movers.dart' as Movers;","import 'package:ThreeDart/Techniques.dart' as Techniques;","import 'package:ThreeDart/Scenes.dart' as Scenes;","","void main() {","  ThreeDart.Entity obj = new ThreeDart.Entity()","    ..shape = Shapes.cube()","    ..mover = new Movers.Rotater()","    ..technique = new Techniques.Depth(fogStart: 3.0, fogStop: 6.0);","","  Scenes.EntityPass pass = new Scenes.EntityPass()","    ..children.add(obj)","    ..camera.mover = new Movers.Constant.translate(0.0, 0.0, 5.0);","",'  new ThreeDart.ThreeDart.fromId("tutorial1")',"    ..scene = pass;","}"],g))
h.al(4,"ThreeDart")
h.M(H.c(["ThreeDart must have a ","[HTML canvas element|http://www.w3schools.com/graphics/canvas_intro.asp] to ","render graphics to. In this example the canvas is provided by [index.html|#index.html] ","and labelled `tutorial1`. On line 21 of [main.dart|#main.dart] the main ThreeDart class ","is created an attached to that canvas using its identifier."],g))
h.al(4,"Scene")
h.M(H.c(["To make the image, the rendering has to have something to render. ","A scene is set to ThreeDart to provide the content to render. A scene ","can be a single rendering pass or a composite of several scenes. In this ","tutorial the scene is only a single pass for rendering entities, the `EntityPass`. "],g))
h.M(H.c(["The EntityPass has a default render target, a `Front Target`, which renders ","directly to the canvas. On render the target will first clear its depth buffer ","and color buffer which is why the background is black."],g))
h.M(H.c(["The EntityPass also has a default camera, a `Perspective Camera`. ","For this example we moved the camera, using a `Constant Mover`, back so that the ","camera is off the center of the scene and looking at the center of the scene."],g))
h.al(4,"Entity")
h.M(H.c(["One or more Entities can be added to the EntityPass. An `Entity` can have ","one or more other Entities added to it too. An Entity describes a shape or group ","of shapes that should be rendered in the scene."],g))
h.M(H.c(["In this tutorial we only add one which is what draws the cube to the scene. ","To make it draw a cube we set the shape of the Entity to a cube. The shape ","can be set to many other built-in shapes, such as sphere, torois, and knot. ","The shape can be loaded from a file or created mathmatically or procedually."],g))
h.M(H.c(["To make the Entity rotate a `Mover` is attached to it. For this tutorial ","we used the default `Rotater` to cause it to rotate. Movers can be grouped ","to multiply matrices togrether thus compounding the movements."],g))
h.M(H.c(["The `Technique` attached to the Entity defines how the shape should be ","drawn. In this tutorial we used a very simple technique, `Depth`. Depth ","simply draws the shape with two different colors based on distance from the ","camera. If the background, front target clear color, it the same as the ","far color, it can give the appearence of fog or merky water."],g))
h.al(4,"Summary")
h.M(H.c(["Play around with the Rotater, Shape, and Depth to get a feel for how the parts works. The main take away from this tutorial should be ","how to structure a basic render. A render is one or more pass which draws ","entities. The pass has a camera and target. Entities can contain several ","entities and can draw a shape. An entity can be moved with a Mover and ","rendered with a given technique."],g))
h.M(H.c(["In the next tutorial we will setup a material light technique ","and dive into creating more interesting scenes."],g))
t=new E.a3()
t.a=""
t.b=!0
g=E.a3
t.scI(0,O.jt(g))
t.y.bd(t.ges(),t.gew())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbf(0,i)
t.sc6(i)
t.san(i)
s=F.jP()
F.cl(s,i,i,1,1,1,0,0,1)
F.cl(s,i,i,1,1,0,1,0,3)
F.cl(s,i,i,1,1,0,0,1,2)
F.cl(s,i,i,1,1,-1,0,0,0)
F.cl(s,i,i,1,1,0,-1,0,0)
F.cl(s,i,i,1,1,0,0,-1,3)
h=s.e
if(h!=null)++h.d
s.d.b1()
s.a.b1()
h=s.e
if(h!=null)h.aC(0)
t.sbf(0,s)
h=new U.d2()
h.r=h.f=h.e=h.d=h.c=h.b=h.a=0
h.scd(0)
h.sbZ(0,0)
h.sc3(0)
r=h.d
if(!(Math.abs(r-0.1)<$.O().a)){h.d=0.1
r=new D.R("deltaYaw",r,0.1,[P.x])
r.b=!0
h.ac(r)}r=h.e
if(!(Math.abs(r-0.21)<$.O().a)){h.e=0.21
r=new D.R("deltaPitch",r,0.21,[P.x])
r.b=!0
h.ac(r)}r=h.f
if(!(Math.abs(r-0.32)<$.O().a)){h.f=0.32
r=new D.R("deltaRoll",r,0.32,[P.x])
r.b=!0
h.ac(r)}t.san(h)
h=new O.ew()
h.b=1
h.c=10
h.f=h.e=h.d=!1
if(!(Math.abs(-2)<$.O().a)){h.b=3
r=new D.R("start",1,3,[P.x])
r.b=!0
h.aI(r)}r=h.c
if(!(Math.abs(r-6)<$.O().a)){h.c=6
r=new D.R("stop",r,6,[P.x])
r.b=!0
h.aI(r)}if(!h.d){h.d=!0
h.a=null
r=new D.R("grey",!1,!0,[P.L])
r.b=!0
h.aI(r)}t.sc6(h)
q=new M.cH()
q.a=!0
q.scz(0,O.jt(g))
q.e.bd(q.gd3(),q.gd5())
q.y=q.x=q.r=q.f=null
p=X.kY(i)
o=new X.cY()
o.c=1.0471975511965976
o.d=0.1
o.e=2000
o.san(i)
h=o.c
if(!(Math.abs(h-1.0471975511965976)<$.O().a)){o.c=1.0471975511965976
h=new D.R("fov",h,1.0471975511965976,[P.x])
h.b=!0
o.a8(h)}h=o.d
if(!(Math.abs(h-0.1)<$.O().a)){o.d=0.1
h=new D.R("near",h,0.1,[P.x])
h.b=!0
o.a8(h)}h=o.e
if(!(Math.abs(h-2000)<$.O().a)){o.e=2000
h=new D.R("far",h,2000,[P.x])
h.b=!0
o.a8(h)}h=q.b
if(h!==o){if(h!=null)h.gv().J(0,q.ga6())
n=q.b
q.b=o
o.gv().h(0,q.ga6())
h=new D.R("camera",n,q.b,[X.cC])
h.b=!0
q.a7(h)}h=q.c
if(h!==p){if(h!=null)h.gv().J(0,q.ga6())
n=q.c
q.c=p
p.gv().h(0,q.ga6())
h=new D.R("target",n,q.c,[X.d7])
h.b=!0
q.a7(h)}h=q.e
g=H.u(h,0)
H.B(t,g)
g=[g]
if(H.D(h.dz(H.c([t],g)))){r=h.a
m=r.length
C.a.h(r,t)
h.d0(m,H.c([t],g))}h=q.b
l=V.b2(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
g=new U.cD()
g.a=l
h.san(g)
k=document.getElementById(j)
if(k==null)H.a_(P.T("Failed to find an element with the identifier, tutorial1."))
h=E.lj(k,!0,!0,!0,!1)
g=h.d
if(g!==q){if(g!=null)g.gv().J(0,h.gbi())
h.d=q
q.gv().h(0,h.gbi())
h.bj()}}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.iV.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gC:function(a){return H.bY(a)},
i:function(a){return"Instance of '"+H.bm(a)+"'"}}
J.eZ.prototype={
i:function(a){return String(a)},
gC:function(a){return a?519018:218159},
$iL:1}
J.f0.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gC:function(a){return 0}}
J.cN.prototype={
gC:function(a){return 0},
i:function(a){return String(a)}}
J.fx.prototype={}
J.c8.prototype={}
J.b0.prototype={
i:function(a){var u=a[$.kr()]
if(u==null)return this.cp(a)
return"JavaScript function for "+H.h(J.a7(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iaZ:1}
J.au.prototype={
h:function(a,b){H.B(b,H.u(a,0))
if(!!a.fixed$length)H.a_(P.aG("add"))
a.push(b)},
J:function(a,b){var u
if(!!a.fixed$length)H.a_(P.aG("remove"))
for(u=0;u<a.length;++u)if(J.a2(a[u],b)){a.splice(u,1)
return!0}return!1},
D:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.aW(a))}},
k:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.F(t,u,H.h(a[u]))
return t.join(b)},
eo:function(a){return this.k(a,"")},
ej:function(a,b){var u,t,s
H.k(b,{func:1,ret:P.L,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.D(b.$1(s)))return s
if(a.length!==u)throw H.f(P.aW(a))}throw H.f(H.iS())},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
cm:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.az(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.az(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.u(a,0)])
return H.c(a.slice(b,c),[H.u(a,0)])},
gaA:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.iS())},
bL:function(a,b){var u,t
H.k(b,{func:1,ret:P.L,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.D(b.$1(a[t])))return!0
if(a.length!==u)throw H.f(P.aW(a))}return!1},
I:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a2(a[u],b))return!0
return!1},
i:function(a){return P.iR(a,"[","]")},
gE:function(a){return new J.ac(a,a.length,[H.u(a,0)])},
gC:function(a){return H.bY(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.a_(P.aG("set length"))
if(b<0)throw H.f(P.az(b,0,null,"newLength",null))
a.length=b},
F:function(a,b,c){H.B(c,H.u(a,0))
if(!!a.immutable$list)H.a_(P.aG("indexed set"))
if(b>=a.length||b<0)throw H.f(H.cp(a,b))
a[b]=c},
$ii:1,
$ib:1}
J.iU.prototype={}
J.ac.prototype={
gw:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.C(s))
u=t.c
if(u>=r){t.sbm(null)
return!1}t.sbm(s[u]);++t.c
return!0},
sbm:function(a){this.d=H.B(a,H.u(this,0))},
$iat:1}
J.cM.prototype={
b3:function(a,b){var u
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=C.e.gaz(b)
if(this.gaz(a)===u)return 0
if(this.gaz(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaz:function(a){return a===0?1/a<0:a<0},
bO:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.aG(""+a+".floor()"))},
X:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.aG(""+a+".round()"))},
e8:function(a,b,c){if(C.e.b3(b,c)>0)throw H.f(H.bv(b))
if(this.b3(a,b)<0)return b
if(this.b3(a,c)>0)return c
return a},
eS:function(a,b){var u
if(b>20)throw H.f(P.az(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gaz(a))return"-"+u
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
cj:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
aw:function(a,b){return(a|0)===a?a/b|0:this.dU(a,b)},
dU:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.aG("Result of truncating division is "+H.h(u)+": "+H.h(a)+" ~/ "+b))},
av:function(a,b){var u
if(a>0)u=this.dS(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
dS:function(a,b){return b>31?0:a>>>b},
$ix:1,
$iZ:1}
J.cL.prototype={$iy:1}
J.f_.prototype={}
J.bi.prototype={
b2:function(a,b){if(b<0)throw H.f(H.cp(a,b))
if(b>=a.length)H.a_(H.cp(a,b))
return a.charCodeAt(b)},
a9:function(a,b){if(b>=a.length)throw H.f(H.cp(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(typeof b!=="string")throw H.f(P.iO(b,null,null))
return a+b},
aF:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
aq:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.fB(b,null))
if(b>c)throw H.f(P.fB(b,null))
if(c>a.length)throw H.f(P.fB(c,null))
return a.substring(b,c)},
aG:function(a,b){return this.aq(a,b,null)},
eR:function(a){return a.toLowerCase()},
P:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.B)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
V:function(a,b){var u=b-a.length
if(u<=0)return a
return this.P(" ",u)+a},
i:function(a){return a},
gC:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ijF:1,
$ie:1}
H.o.prototype={
gl:function(a){return this.a.length},
m:function(a,b){return C.b.b2(this.a,b)},
$add:function(){return[P.y]},
$at:function(){return[P.y]},
$ai:function(){return[P.y]},
$ab:function(){return[P.y]}}
H.eD.prototype={}
H.bj.prototype={
gE:function(a){var u=this
return new H.bR(u,u.gl(u),[H.cq(u,"bj",0)])},
aD:function(a,b){return this.co(0,H.k(b,{func:1,ret:P.L,args:[H.cq(this,"bj",0)]}))}}
H.bR.prototype={
gw:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=J.jf(s),q=r.gl(s)
if(t.b!==q)throw H.f(P.aW(s))
u=t.c
if(u>=q){t.sai(null)
return!1}t.sai(r.t(s,u));++t.c
return!0},
sai:function(a){this.d=H.B(a,H.u(this,0))},
$iat:1}
H.fb.prototype={
gE:function(a){return new H.fc(J.ba(this.a),this.b,this.$ti)},
gl:function(a){return J.bb(this.a)},
t:function(a,b){return this.b.$1(J.iM(this.a,b))},
$ai:function(a,b){return[b]}}
H.fc.prototype={
p:function(){var u=this,t=u.b
if(t.p()){u.sai(u.c.$1(t.gw(t)))
return!0}u.sai(null)
return!1},
gw:function(a){return this.a},
sai:function(a){this.a=H.B(a,H.u(this,1))},
$aat:function(a,b){return[b]}}
H.fd.prototype={
gl:function(a){return J.bb(this.a)},
t:function(a,b){return this.b.$1(J.iM(this.a,b))},
$abj:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.c9.prototype={
gE:function(a){return new H.hL(J.ba(this.a),this.b,this.$ti)}}
H.hL.prototype={
p:function(){var u,t
for(u=this.a,t=this.b;u.p();)if(H.D(t.$1(u.gw(u))))return!0
return!1},
gw:function(a){var u=this.a
return u.gw(u)}}
H.bg.prototype={}
H.dd.prototype={}
H.dc.prototype={}
H.hg.prototype={
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
H.ft.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f2.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.h(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.h(t.a)+")"
return s+r+"' on '"+u+"' ("+H.h(t.a)+")"}}
H.hx.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.iL.prototype={
$1:function(a){if(!!J.P(a).$iaX)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.dQ.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$ia5:1}
H.bI.prototype={
i:function(a){return"Closure '"+H.bm(this).trim()+"'"},
$iaZ:1,
geV:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.h5.prototype={}
H.fW.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.by(u)+"'"}}
H.bG.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bG))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gC:function(a){var u,t=this.c
if(t==null)u=H.bY(this.a)
else u=typeof t!=="object"?J.cu(t):H.bY(t)
return(u^H.bY(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.bm(u)+"'")}}
H.hi.prototype={
i:function(a){return this.a}}
H.em.prototype={
i:function(a){return this.a}}
H.fJ.prototype={
i:function(a){return"RuntimeError: "+H.h(this.a)}}
H.hM.prototype={
i:function(a){return"Assertion failed: "+P.cI(this.a)}}
H.av.prototype={
gl:function(a){return this.a},
gO:function(a){return new H.cP(this,[H.u(this,0)])},
bN:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.bw(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.bw(t,b)}else return s.el(b)},
el:function(a){var u=this.d
if(u==null)return!1
return this.b6(this.aN(u,J.cu(a)&0x3ffffff),a)>=0},
m:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.as(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.as(r,b)
s=t==null?null:t.b
return s}else return q.em(b)},
em:function(a){var u,t,s=this.d
if(s==null)return
u=this.aN(s,J.cu(a)&0x3ffffff)
t=this.b6(u,a)
if(t<0)return
return u[t].b},
F:function(a,b,c){var u,t,s,r,q,p,o=this
H.B(b,H.u(o,0))
H.B(c,H.u(o,1))
if(typeof b==="string"){u=o.b
o.bn(u==null?o.b=o.aS():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.bn(t==null?o.c=o.aS():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.aS()
r=J.cu(b)&0x3ffffff
q=o.aN(s,r)
if(q==null)o.aX(s,r,[o.aT(b,c)])
else{p=o.b6(q,b)
if(p>=0)q[p].b=c
else q.push(o.aT(b,c))}}},
D:function(a,b){var u,t,s=this
H.k(b,{func:1,ret:-1,args:[H.u(s,0),H.u(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.f(P.aW(s))
u=u.c}},
bn:function(a,b,c){var u,t=this
H.B(b,H.u(t,0))
H.B(c,H.u(t,1))
u=t.as(a,b)
if(u==null)t.aX(a,b,t.aT(b,c))
else u.b=c},
d_:function(){this.r=this.r+1&67108863},
aT:function(a,b){var u,t=this,s=new H.f5(H.B(a,H.u(t,0)),H.B(b,H.u(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.d_()
return s},
b6:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a2(a[t].a,b))return t
return-1},
i:function(a){return P.jA(this)},
as:function(a,b){return a[b]},
aN:function(a,b){return a[b]},
aX:function(a,b,c){a[b]=c},
cN:function(a,b){delete a[b]},
bw:function(a,b){return this.as(a,b)!=null},
aS:function(){var u="<non-identifier-key>",t=Object.create(null)
this.aX(t,u,t)
this.cN(t,u)
return t}}
H.f5.prototype={}
H.cP.prototype={
gl:function(a){return this.a.a},
gE:function(a){var u=this.a,t=new H.f6(u,u.r,this.$ti)
t.c=u.e
return t}}
H.f6.prototype={
gw:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.aW(t))
else{t=u.c
if(t==null){u.sbz(null)
return!1}else{u.sbz(t.a)
u.c=u.c.c
return!0}}},
sbz:function(a){this.d=H.B(a,H.u(this,0))},
$iat:1}
H.iF.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.iG.prototype={
$2:function(a,b){return this.a(a,b)},
$S:35}
H.iH.prototype={
$1:function(a){return this.a(H.z(a))},
$S:32}
H.f1.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ijF:1}
H.bW.prototype={}
H.cT.prototype={
gl:function(a){return a.length},
$iA:1,
$aA:function(){}}
H.bV.prototype={
m:function(a,b){H.b6(b,a,a.length)
return a[b]},
$abg:function(){return[P.x]},
$at:function(){return[P.x]},
$ii:1,
$ai:function(){return[P.x]},
$ib:1,
$ab:function(){return[P.x]}}
H.cU.prototype={
$abg:function(){return[P.y]},
$at:function(){return[P.y]},
$ii:1,
$ai:function(){return[P.y]},
$ib:1,
$ab:function(){return[P.y]}}
H.fl.prototype={
m:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fm.prototype={
m:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fn.prototype={
m:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fo.prototype={
m:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fp.prototype={
m:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.cV.prototype={
gl:function(a){return a.length},
m:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fq.prototype={
gl:function(a){return a.length},
m:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.cd.prototype={}
H.ce.prototype={}
H.cf.prototype={}
H.cg.prototype={}
P.hO.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:12}
P.hN.prototype={
$1:function(a){var u,t
this.a.a=H.k(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:29}
P.hP.prototype={
$0:function(){this.a.$0()},
$S:0}
P.hQ.prototype={
$0:function(){this.a.$0()},
$S:0}
P.iq.prototype={
cC:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.co(new P.ir(this,b),0),a)
else throw H.f(P.aG("`setTimeout()` not found."))}}
P.ir.prototype={
$0:function(){this.b.$0()},
$S:2}
P.aI.prototype={
eq:function(a){if(this.c!==6)return!0
return this.b.b.bb(H.k(this.d,{func:1,ret:P.L,args:[P.I]}),a.a,P.L,P.I)},
ek:function(a){var u=this.e,t=P.I,s={futureOr:1,type:H.u(this,1)},r=this.b.b
if(H.ea(u,{func:1,args:[P.I,P.a5]}))return H.je(r.eL(u,a.a,a.b,null,t,P.a5),s)
else return H.je(r.bb(H.k(u,{func:1,args:[P.I]}),a.a,null,t),s)}}
P.ag.prototype={
c7:function(a,b,c){var u,t,s,r=H.u(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.Q
if(u!==C.d){u.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.lw(b,u)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.ag($.Q,[c])
s=b==null?1:3
this.bo(new P.aI(t,s,a,b,[r,c]))
return t},
eO:function(a,b){return this.c7(a,null,b)},
bo:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.n(t.c,"$iaI")
t.c=a}else{if(s===2){u=H.n(t.c,"$iag")
s=u.a
if(s<4){u.bo(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.iz(null,null,s,H.k(new P.hY(t,a),{func:1,ret:-1}))}},
bF:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.n(p.c,"$iaI")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.n(p.c,"$iag")
u=q.a
if(u<4){q.bF(a)
return}p.a=u
p.c=q.c}o.a=p.au(a)
u=p.b
u.toString
P.iz(null,null,u,H.k(new P.i1(o,p),{func:1,ret:-1}))}},
aW:function(){var u=H.n(this.c,"$iaI")
this.c=null
return this.au(u)},
au:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
bt:function(a){var u,t,s=this,r=H.u(s,0)
H.je(a,{futureOr:1,type:r})
u=s.$ti
if(H.jb(a,"$ibQ",u,"$abQ"))if(H.jb(a,"$iag",u,null))P.k0(a,s)
else P.lo(a,s)
else{t=s.aW()
H.B(a,r)
s.a=4
s.c=a
P.cc(s,t)}},
bu:function(a,b){var u,t=this
H.n(b,"$ia5")
u=t.aW()
t.a=8
t.c=new P.a0(a,b)
P.cc(t,u)},
$ibQ:1}
P.hY.prototype={
$0:function(){P.cc(this.a,this.b)},
$S:0}
P.i1.prototype={
$0:function(){P.cc(this.b,this.a.a)},
$S:0}
P.hZ.prototype={
$1:function(a){var u=this.a
u.a=0
u.bt(a)},
$S:12}
P.i_.prototype={
$2:function(a,b){H.n(b,"$ia5")
this.a.bu(a,b)},
$1:function(a){return this.$2(a,null)},
$S:27}
P.i0.prototype={
$0:function(){this.a.bu(this.b,this.c)},
$S:0}
P.i4.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.c4(H.k(s.d,{func:1}),null)}catch(r){u=H.ab(r)
t=H.bw(r)
if(o.d){s=H.n(o.a.a.c,"$ia0").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.n(o.a.a.c,"$ia0")
else q.b=new P.a0(u,t)
q.a=!0
return}if(!!J.P(n).$ibQ){if(n instanceof P.ag&&n.a>=4){if(n.a===8){s=o.b
s.b=H.n(n.c,"$ia0")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.eO(new P.i5(p),null)
s.a=!1}},
$S:2}
P.i5.prototype={
$1:function(a){return this.a},
$S:26}
P.i3.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.u(s,0)
q=H.B(n.c,r)
p=H.u(s,1)
n.a.b=s.b.b.bb(H.k(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ab(o)
t=H.bw(o)
s=n.a
s.b=new P.a0(u,t)
s.a=!0}},
$S:2}
P.i2.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.n(m.a.a.c,"$ia0")
r=m.c
if(H.D(r.eq(u))&&r.e!=null){q=m.b
q.b=r.ek(u)
q.a=!1}}catch(p){t=H.ab(p)
s=H.bw(p)
r=H.n(m.a.a.c,"$ia0")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a0(t,s)
n.a=!0}},
$S:2}
P.dh.prototype={}
P.fZ.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.ag($.Q,[P.y])
r.a=0
u=H.u(s,0)
t=H.k(new P.h0(r,s),{func:1,ret:-1,args:[u]})
H.k(new P.h1(r,q),{func:1,ret:-1})
W.X(s.a,s.b,t,!1,u)
return q}}
P.h0.prototype={
$1:function(a){H.B(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.u(this.b,0)]}}}
P.h1.prototype={
$0:function(){this.b.bt(this.a.a)},
$S:0}
P.c2.prototype={}
P.h_.prototype={}
P.a0.prototype={
i:function(a){return H.h(this.a)},
$iaX:1}
P.iu.prototype={$imA:1}
P.iy.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cX():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.i(0)
throw u},
$S:0}
P.ib.prototype={
eM:function(a){var u,t,s,r=null
H.k(a,{func:1,ret:-1})
try{if(C.d===$.Q){a.$0()
return}P.k6(r,r,this,a,-1)}catch(s){u=H.ab(s)
t=H.bw(s)
P.ix(r,r,this,u,H.n(t,"$ia5"))}},
eN:function(a,b,c){var u,t,s,r=null
H.k(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.d===$.Q){a.$1(b)
return}P.k7(r,r,this,a,b,-1,c)}catch(s){u=H.ab(s)
t=H.bw(s)
P.ix(r,r,this,u,H.n(t,"$ia5"))}},
e5:function(a,b){return new P.id(this,H.k(a,{func:1,ret:b}),b)},
b_:function(a){return new P.ic(this,H.k(a,{func:1,ret:-1}))},
e6:function(a,b){return new P.ie(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
c4:function(a,b){H.k(a,{func:1,ret:b})
if($.Q===C.d)return a.$0()
return P.k6(null,null,this,a,b)},
bb:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.Q===C.d)return a.$1(b)
return P.k7(null,null,this,a,b,c,d)},
eL:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.Q===C.d)return a.$2(b,c)
return P.lx(null,null,this,a,b,c,d,e,f)}}
P.id.prototype={
$0:function(){return this.a.c4(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.ic.prototype={
$0:function(){return this.a.eM(this.b)},
$S:2}
P.ie.prototype={
$1:function(a){var u=this.c
return this.a.eN(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.i8.prototype={
gE:function(a){return P.k3(this,this.r,H.u(this,0))},
gl:function(a){return this.a},
I:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.n(u[b],"$ibs")!=null}else{t=this.cJ(b)
return t}},
cJ:function(a){var u=this.d
if(u==null)return!1
return this.aM(this.bA(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.B(b,H.u(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.bq(u==null?s.b=P.j3():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.bq(t==null?s.c=P.j3():t,b)}else return s.cE(0,b)},
cE:function(a,b){var u,t,s,r=this
H.B(b,H.u(r,0))
u=r.d
if(u==null)u=r.d=P.j3()
t=r.bv(b)
s=u[t]
if(s==null)u[t]=[r.aJ(b)]
else{if(r.aM(s,b)>=0)return!1
s.push(r.aJ(b))}return!0},
J:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.dI(this.c,b)
else return this.dH(0,b)},
dH:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.bA(r,b)
t=s.aM(u,b)
if(t<0)return!1
s.bH(u.splice(t,1)[0])
return!0},
bq:function(a,b){H.B(b,H.u(this,0))
if(H.n(a[b],"$ibs")!=null)return!1
a[b]=this.aJ(b)
return!0},
dI:function(a,b){var u
if(a==null)return!1
u=H.n(a[b],"$ibs")
if(u==null)return!1
this.bH(u)
delete a[b]
return!0},
bs:function(){this.r=1073741823&this.r+1},
aJ:function(a){var u,t=this,s=new P.bs(H.B(a,H.u(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.bs()
return s},
bH:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.bs()},
bv:function(a){return J.cu(a)&1073741823},
bA:function(a,b){return a[this.bv(b)]},
aM:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a2(a[t].a,b))return t
return-1}}
P.bs.prototype={}
P.i9.prototype={
gw:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.aW(t))
else{t=u.c
if(t==null){u.sbr(null)
return!1}else{u.sbr(H.B(t.a,H.u(u,0)))
u.c=u.c.b
return!0}}},
sbr:function(a){this.d=H.B(a,H.u(this,0))},
$iat:1}
P.f7.prototype={$ii:1,$ib:1}
P.t.prototype={
gE:function(a){return new H.bR(a,this.gl(a),[H.cr(this,a,"t",0)])},
t:function(a,b){return this.m(a,b)},
eQ:function(a,b){var u,t=this,s=H.c([],[H.cr(t,a,"t",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.F(s,u,t.m(a,u))
return s},
eP:function(a){return this.eQ(a,!0)},
i:function(a){return P.iR(a,"[","]")}}
P.f9.prototype={}
P.fa.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.h(a)
t.a=u+": "
t.a+=H.h(b)},
$S:13}
P.V.prototype={
D:function(a,b){var u,t,s=this
H.k(b,{func:1,ret:-1,args:[H.cr(s,a,"V",0),H.cr(s,a,"V",1)]})
for(u=J.ba(s.gO(a));u.p();){t=u.gw(u)
b.$2(t,s.m(a,t))}},
gl:function(a){return J.bb(this.gO(a))},
i:function(a){return P.jA(a)},
$iF:1}
P.ih.prototype={
Z:function(a,b){var u
for(u=J.ba(H.r(b,"$ii",this.$ti,"$ai"));u.p();)this.h(0,u.gw(u))},
i:function(a){return P.iR(this,"{","}")},
t:function(a,b){var u,t,s,r=this
P.jL(b,"index")
for(u=P.k3(r,r.r,H.u(r,0)),t=0;u.p();){s=u.d
if(b===t)return s;++t}throw H.f(P.M(b,r,"index",null,t))},
$ii:1,
$ijO:1}
P.dy.prototype={}
P.bJ.prototype={}
P.bK.prototype={}
P.eF.prototype={
$abJ:function(){return[P.e,[P.b,P.y]]}}
P.eV.prototype={
i:function(a){return this.a}}
P.eU.prototype={
cK:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.bp("")
if(r>b)q.a+=C.b.aq(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.kL(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abK:function(){return[P.e,P.e]}}
P.hA.prototype={}
P.hB.prototype={
e9:function(a){var u,t,s=P.jM(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.is(u)
if(t.cU(a,0,s)!==s)t.bI(C.b.b2(a,s-1),0)
return new Uint8Array(u.subarray(0,H.ls(0,t.b,u.length)))},
$abK:function(){return[P.e,[P.b,P.y]]}}
P.is.prototype={
bI:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
cU:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.b2(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.a9(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.bI(r,C.b.a9(a,p)))s=p}else if(r<=2047){q=n.b
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
P.L.prototype={}
P.bN.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.bN&&this.a===b.a&&!0},
gC:function(a){var u=this.a
return(u^C.e.av(u,30))&1073741823},
i:function(a){var u=this,t=P.kS(H.lb(u)),s=P.cE(H.l9(u)),r=P.cE(H.l5(u)),q=P.cE(H.l6(u)),p=P.cE(H.l8(u)),o=P.cE(H.la(u)),n=P.kT(H.l7(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.x.prototype={}
P.bf.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.bf&&this.a===b.a},
gC:function(a){return C.e.gC(this.a)},
i:function(a){var u,t,s,r=new P.eC(),q=this.a
if(q<0)return"-"+new P.bf(0-q).i(0)
u=r.$1(C.e.aw(q,6e7)%60)
t=r.$1(C.e.aw(q,1e6)%60)
s=new P.eB().$1(q%1e6)
return""+C.e.aw(q,36e8)+":"+H.h(u)+":"+H.h(t)+"."+H.h(s)}}
P.eB.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.eC.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.aX.prototype={}
P.ee.prototype={
i:function(a){return"Assertion failed"}}
P.cX.prototype={
i:function(a){return"Throw of null."}}
P.an.prototype={
gaL:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaK:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gaL()+o+u
if(!q.a)return t
s=q.gaK()
r=P.cI(q.b)
return t+s+": "+r}}
P.bn.prototype={
gaL:function(){return"RangeError"},
gaK:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.h(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.h(s)
else if(t>s)u=": Not in range "+H.h(s)+".."+H.h(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.h(s)}return u}}
P.eW.prototype={
gaL:function(){return"RangeError"},
gaK:function(){var u,t=H.Y(this.b)
if(typeof t!=="number")return t.ci()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.h(u)},
gl:function(a){return this.f}}
P.hy.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hw.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c1.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eo.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.cI(u)+"."}}
P.fw.prototype={
i:function(a){return"Out of Memory"},
$iaX:1}
P.d5.prototype={
i:function(a){return"Stack Overflow"},
$iaX:1}
P.et.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dq.prototype={
i:function(a){return"Exception: "+this.a}}
P.eP.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.aq(s,0,75)+"...":s
return t+"\n"+r}}
P.aZ.prototype={}
P.y.prototype={}
P.i.prototype={
aD:function(a,b){var u=H.cq(this,"i",0)
return new H.c9(this,H.k(b,{func:1,ret:P.L,args:[u]}),[u])},
gl:function(a){var u,t=this.gE(this)
for(u=0;t.p();)++u
return u},
ga4:function(a){var u,t=this.gE(this)
if(!t.p())throw H.f(H.iS())
u=t.gw(t)
if(t.p())throw H.f(H.l_())
return u},
t:function(a,b){var u,t,s
P.jL(b,"index")
for(u=this.gE(this),t=0;u.p();){s=u.gw(u)
if(b===t)return s;++t}throw H.f(P.M(b,this,"index",null,t))},
i:function(a){return P.kZ(this,"(",")")}}
P.at.prototype={}
P.b.prototype={$ii:1}
P.F.prototype={}
P.G.prototype={
gC:function(a){return P.I.prototype.gC.call(this,this)},
i:function(a){return"null"}}
P.Z.prototype={}
P.I.prototype={constructor:P.I,$iI:1,
n:function(a,b){return this===b},
gC:function(a){return H.bY(this)},
i:function(a){return"Instance of '"+H.bm(this)+"'"},
toString:function(){return this.i(this)}}
P.a5.prototype={}
P.e.prototype={$ijF:1}
P.bp.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.p.prototype={}
W.ec.prototype={
gl:function(a){return a.length}}
W.cv.prototype={
i:function(a){return String(a)},
$icv:1}
W.ed.prototype={
i:function(a){return String(a)}}
W.bF.prototype={$ibF:1}
W.cx.prototype={}
W.aS.prototype={$iaS:1}
W.bd.prototype={
cg:function(a,b,c){var u=a.getContext(b,P.lF(c))
return u},
$ibd:1}
W.aT.prototype={
gl:function(a){return a.length}}
W.bL.prototype={$ibL:1}
W.ep.prototype={
gl:function(a){return a.length}}
W.K.prototype={$iK:1}
W.bM.prototype={
gl:function(a){return a.length}}
W.eq.prototype={}
W.ap.prototype={}
W.aq.prototype={}
W.er.prototype={
gl:function(a){return a.length}}
W.es.prototype={
gl:function(a){return a.length}}
W.ev.prototype={
gl:function(a){return a.length}}
W.ad.prototype={$iad:1}
W.ey.prototype={
i:function(a){return String(a)}}
W.cF.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[[P.ae,P.Z]]},
$at:function(){return[[P.ae,P.Z]]},
$ii:1,
$ai:function(){return[[P.ae,P.Z]]},
$ib:1,
$ab:function(){return[[P.ae,P.Z]]},
$av:function(){return[[P.ae,P.Z]]}}
W.cG.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gah(a))+" x "+H.h(this.gaf(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.P(b)
if(!u.$iae)return!1
return a.left===u.gbP(b)&&a.top===u.gca(b)&&this.gah(a)===u.gah(b)&&this.gaf(a)===u.gaf(b)},
gC:function(a){return W.k2(C.c.gC(a.left),C.c.gC(a.top),C.c.gC(this.gah(a)),C.c.gC(this.gaf(a)))},
gaf:function(a){return a.height},
gbP:function(a){return a.left},
gca:function(a){return a.top},
gah:function(a){return a.width},
$iae:1,
$aae:function(){return[P.Z]}}
W.ez.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[P.e]},
$at:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$av:function(){return[P.e]}}
W.eA.prototype={
gl:function(a){return a.length}}
W.hS.prototype={
gl:function(a){return this.b.length},
m:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.l(u,b)
return H.n(u[b],"$iJ")},
h:function(a,b){this.a.appendChild(b)
return b},
gE:function(a){var u=this.eP(this)
return new J.ac(u,u.length,[H.u(u,0)])},
$at:function(){return[W.J]},
$ai:function(){return[W.J]},
$ab:function(){return[W.J]}}
W.J.prototype={
ge4:function(a){return new W.hU(a)},
gbM:function(a){return new W.hS(a,a.children)},
i:function(a){return a.localName},
R:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.jv
if(u==null){u=H.c([],[W.a9])
t=new W.cW(u)
C.a.h(u,W.k1(null))
C.a.h(u,W.k4())
$.jv=t
d=t}else d=u
u=$.ju
if(u==null){u=new W.e_(d)
$.ju=u
c=u}else{u.a=d
c=u}}if($.aK==null){u=document
t=u.implementation.createHTMLDocument("")
$.aK=t
$.iQ=t.createRange()
t=$.aK.createElement("base")
H.n(t,"$ibF")
t.href=u.baseURI
$.aK.head.appendChild(t)}u=$.aK
if(u.body==null){t=u.createElement("body")
u.body=H.n(t,"$iaS")}u=$.aK
if(!!this.$iaS)s=u.body
else{s=u.createElement(a.tagName)
$.aK.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.I(C.J,a.tagName)){$.iQ.selectNodeContents(s)
r=$.iQ.createContextualFragment(b)}else{s.innerHTML=b
r=$.aK.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.aK.body
if(s==null?u!=null:s!==u)J.jo(s)
c.bc(r)
document.adoptNode(r)
return r},
eb:function(a,b,c){return this.R(a,b,c,null)},
cl:function(a,b){a.textContent=null
a.appendChild(this.R(a,b,null,null))},
$iJ:1,
gc5:function(a){return a.tagName}}
W.eE.prototype={
$1:function(a){return!!J.P(H.n(a,"$iw")).$iJ},
$S:15}
W.j.prototype={$ij:1}
W.d.prototype={
e_:function(a,b,c,d){H.k(c,{func:1,args:[W.j]})
if(c!=null)this.cF(a,b,c,!1)},
cF:function(a,b,c,d){return a.addEventListener(b,H.co(H.k(c,{func:1,args:[W.j]}),1),!1)},
$id:1}
W.ar.prototype={$iar:1}
W.eJ.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.ar]},
$at:function(){return[W.ar]},
$ii:1,
$ai:function(){return[W.ar]},
$ib:1,
$ab:function(){return[W.ar]},
$av:function(){return[W.ar]}}
W.eK.prototype={
gl:function(a){return a.length}}
W.eO.prototype={
gl:function(a){return a.length}}
W.as.prototype={$ias:1}
W.eT.prototype={
gl:function(a){return a.length}}
W.bh.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.w]},
$at:function(){return[W.w]},
$ii:1,
$ai:function(){return[W.w]},
$ib:1,
$ab:function(){return[W.w]},
$ibh:1,
$av:function(){return[W.w]}}
W.aw.prototype={$iaw:1}
W.cR.prototype={
i:function(a){return String(a)},
$icR:1}
W.fe.prototype={
gl:function(a){return a.length}}
W.ff.prototype={
m:function(a,b){return P.aQ(a.get(H.z(b)))},
D:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aQ(t.value[1]))}},
gO:function(a){var u=H.c([],[P.e])
this.D(a,new W.fg(u))
return u},
gl:function(a){return a.size},
$aV:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
W.fg.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.fh.prototype={
m:function(a,b){return P.aQ(a.get(H.z(b)))},
D:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aQ(t.value[1]))}},
gO:function(a){var u=H.c([],[P.e])
this.D(a,new W.fi(u))
return u},
gl:function(a){return a.size},
$aV:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
W.fi.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.ax.prototype={$iax:1}
W.fj.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.ax]},
$at:function(){return[W.ax]},
$ii:1,
$ai:function(){return[W.ax]},
$ib:1,
$ab:function(){return[W.ax]},
$av:function(){return[W.ax]}}
W.W.prototype={$iW:1}
W.a1.prototype={
ga4:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.f(P.jQ("No elements"))
if(t>1)throw H.f(P.jQ("More than one element"))
return u.firstChild},
Z:function(a,b){var u,t,s,r
H.r(b,"$ii",[W.w],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gE:function(a){var u=this.a.childNodes
return new W.cK(u,u.length,[H.cr(C.L,u,"v",0)])},
gl:function(a){return this.a.childNodes.length},
m:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.l(u,b)
return u[b]},
$at:function(){return[W.w]},
$ai:function(){return[W.w]},
$ab:function(){return[W.w]}}
W.w.prototype={
eI:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i:function(a){var u=a.nodeValue
return u==null?this.cn(a):u},
e2:function(a,b){return a.appendChild(b)},
$iw:1}
W.bX.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.w]},
$at:function(){return[W.w]},
$ii:1,
$ai:function(){return[W.w]},
$ib:1,
$ab:function(){return[W.w]},
$av:function(){return[W.w]}}
W.ay.prototype={$iay:1,
gl:function(a){return a.length}}
W.fz.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.ay]},
$at:function(){return[W.ay]},
$ii:1,
$ai:function(){return[W.ay]},
$ib:1,
$ab:function(){return[W.ay]},
$av:function(){return[W.ay]}}
W.fH.prototype={
m:function(a,b){return P.aQ(a.get(H.z(b)))},
D:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aQ(t.value[1]))}},
gO:function(a){var u=H.c([],[P.e])
this.D(a,new W.fI(u))
return u},
gl:function(a){return a.size},
$aV:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
W.fI.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.fK.prototype={
gl:function(a){return a.length}}
W.aA.prototype={$iaA:1}
W.fT.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aA]},
$at:function(){return[W.aA]},
$ii:1,
$ai:function(){return[W.aA]},
$ib:1,
$ab:function(){return[W.aA]},
$av:function(){return[W.aA]}}
W.aB.prototype={$iaB:1}
W.fU.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aB]},
$at:function(){return[W.aB]},
$ii:1,
$ai:function(){return[W.aB]},
$ib:1,
$ab:function(){return[W.aB]},
$av:function(){return[W.aB]}}
W.aC.prototype={$iaC:1,
gl:function(a){return a.length}}
W.fX.prototype={
m:function(a,b){return a.getItem(H.z(b))},
D:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gO:function(a){var u=H.c([],[P.e])
this.D(a,new W.fY(u))
return u},
gl:function(a){return a.length},
$aV:function(){return[P.e,P.e]},
$iF:1,
$aF:function(){return[P.e,P.e]}}
W.fY.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:25}
W.ai.prototype={$iai:1}
W.bq.prototype={}
W.d6.prototype={
R:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
u=W.kV("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a1(t).Z(0,new W.a1(u))
return t}}
W.h3.prototype={
R:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.r.R(u.createElement("table"),b,c,d)
u.toString
u=new W.a1(u)
s=u.ga4(u)
s.toString
u=new W.a1(s)
r=u.ga4(u)
t.toString
r.toString
new W.a1(t).Z(0,new W.a1(r))
return t}}
W.h4.prototype={
R:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.r.R(u.createElement("table"),b,c,d)
u.toString
u=new W.a1(u)
s=u.ga4(u)
t.toString
s.toString
new W.a1(t).Z(0,new W.a1(s))
return t}}
W.c3.prototype={$ic3:1}
W.aD.prototype={$iaD:1}
W.aj.prototype={$iaj:1}
W.h6.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aj]},
$at:function(){return[W.aj]},
$ii:1,
$ai:function(){return[W.aj]},
$ib:1,
$ab:function(){return[W.aj]},
$av:function(){return[W.aj]}}
W.h7.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aD]},
$at:function(){return[W.aD]},
$ii:1,
$ai:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$av:function(){return[W.aD]}}
W.h9.prototype={
gl:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.ak.prototype={$iak:1}
W.hd.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aE]},
$at:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$av:function(){return[W.aE]}}
W.he.prototype={
gl:function(a){return a.length}}
W.b4.prototype={}
W.hz.prototype={
i:function(a){return String(a)}}
W.hJ.prototype={
gl:function(a){return a.length}}
W.aH.prototype={
gee:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.aG("deltaY is not supported"))},
ged:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.aG("deltaX is not supported"))},
$iaH:1}
W.ca.prototype={
dK:function(a,b){return a.requestAnimationFrame(H.co(H.k(b,{func:1,ret:-1,args:[P.Z]}),1))},
cO:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cb.prototype={$icb:1}
W.hT.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.K]},
$at:function(){return[W.K]},
$ii:1,
$ai:function(){return[W.K]},
$ib:1,
$ab:function(){return[W.K]},
$av:function(){return[W.K]}}
W.dk.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.P(b)
if(!u.$iae)return!1
return a.left===u.gbP(b)&&a.top===u.gca(b)&&a.width===u.gah(b)&&a.height===u.gaf(b)},
gC:function(a){return W.k2(C.c.gC(a.left),C.c.gC(a.top),C.c.gC(a.width),C.c.gC(a.height))},
gaf:function(a){return a.height},
gah:function(a){return a.width}}
W.i6.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.as]},
$at:function(){return[W.as]},
$ii:1,
$ai:function(){return[W.as]},
$ib:1,
$ab:function(){return[W.as]},
$av:function(){return[W.as]}}
W.dD.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.w]},
$at:function(){return[W.w]},
$ii:1,
$ai:function(){return[W.w]},
$ib:1,
$ab:function(){return[W.w]},
$av:function(){return[W.w]}}
W.ik.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aC]},
$at:function(){return[W.aC]},
$ii:1,
$ai:function(){return[W.aC]},
$ib:1,
$ab:function(){return[W.aC]},
$av:function(){return[W.aC]}}
W.il.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.ai]},
$at:function(){return[W.ai]},
$ii:1,
$ai:function(){return[W.ai]},
$ib:1,
$ab:function(){return[W.ai]},
$av:function(){return[W.ai]}}
W.hR.prototype={
D:function(a,b){var u,t,s,r,q
H.k(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.gO(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.C)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gO:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.e])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.l(r,t)
s=H.n(r[t],"$icb")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aV:function(){return[P.e,P.e]},
$aF:function(){return[P.e,P.e]}}
W.hU.prototype={
m:function(a,b){return this.a.getAttribute(H.z(b))},
gl:function(a){return this.gO(this).length}}
W.hV.prototype={}
W.j2.prototype={}
W.hW.prototype={}
W.hX.prototype={
$1:function(a){return this.a.$1(H.n(a,"$ij"))},
$S:24}
W.b5.prototype={
cw:function(a){var u
if($.dt.a===0){for(u=0;u<262;++u)$.dt.F(0,C.I[u],W.lL())
for(u=0;u<12;++u)$.dt.F(0,C.k[u],W.lM())}},
ae:function(a){return $.kF().I(0,W.bO(a))},
a_:function(a,b,c){var u=$.dt.m(0,H.h(W.bO(a))+"::"+b)
if(u==null)u=$.dt.m(0,"*::"+b)
if(u==null)return!1
return H.ja(u.$4(a,b,c,this))},
$ia9:1}
W.v.prototype={
gE:function(a){return new W.cK(a,this.gl(a),[H.cr(this,a,"v",0)])}}
W.cW.prototype={
ae:function(a){return C.a.bL(this.a,new W.fs(a))},
a_:function(a,b,c){return C.a.bL(this.a,new W.fr(a,b,c))},
$ia9:1}
W.fs.prototype={
$1:function(a){return H.n(a,"$ia9").ae(this.a)},
$S:18}
W.fr.prototype={
$1:function(a){return H.n(a,"$ia9").a_(this.a,this.b,this.c)},
$S:18}
W.dL.prototype={
cB:function(a,b,c,d){var u,t,s
this.a.Z(0,c)
u=b.aD(0,new W.ii())
t=b.aD(0,new W.ij())
this.b.Z(0,u)
s=this.c
s.Z(0,C.K)
s.Z(0,t)},
ae:function(a){return this.a.I(0,W.bO(a))},
a_:function(a,b,c){var u=this,t=W.bO(a),s=u.c
if(s.I(0,H.h(t)+"::"+b))return u.d.e1(c)
else if(s.I(0,"*::"+b))return u.d.e1(c)
else{s=u.b
if(s.I(0,H.h(t)+"::"+b))return!0
else if(s.I(0,"*::"+b))return!0
else if(s.I(0,H.h(t)+"::*"))return!0
else if(s.I(0,"*::*"))return!0}return!1},
$ia9:1}
W.ii.prototype={
$1:function(a){return!C.a.I(C.k,H.z(a))},
$S:19}
W.ij.prototype={
$1:function(a){return C.a.I(C.k,H.z(a))},
$S:19}
W.io.prototype={
a_:function(a,b,c){if(this.cr(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.I(0,b)
return!1}}
W.ip.prototype={
$1:function(a){return"TEMPLATE::"+H.h(H.z(a))},
$S:22}
W.im.prototype={
ae:function(a){var u=J.P(a)
if(!!u.$ibZ)return!1
u=!!u.$im
if(u&&W.bO(a)==="foreignObject")return!1
if(u)return!0
return!1},
a_:function(a,b,c){if(b==="is"||C.b.aF(b,"on"))return!1
return this.ae(a)},
$ia9:1}
W.cK.prototype={
p:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sbB(J.kH(u.a,t))
u.c=t
return!0}u.sbB(null)
u.c=s
return!1},
gw:function(a){return this.d},
sbB:function(a){this.d=H.B(a,H.u(this,0))},
$iat:1}
W.a9.prototype={}
W.ig.prototype={$imn:1}
W.e_.prototype={
bc:function(a){new W.it(this).$2(a,null)},
ak:function(a,b){if(b==null)J.jo(a)
else b.removeChild(a)},
dM:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.kK(a)
n=o.a.getAttribute("is")
H.n(a,"$iJ")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.D(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ab(r)}t="element unprintable"
try{t=J.a7(a)}catch(r){H.ab(r)}try{s=W.bO(a)
this.dL(H.n(a,"$iJ"),b,p,t,s,H.n(o,"$iF"),H.z(n))}catch(r){if(H.ab(r) instanceof P.an)throw r
else{this.ak(a,b)
window
q="Removing corrupted element "+H.h(t)
if(typeof console!="undefined")window.console.warn(q)}}},
dL:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.ak(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.ae(a)){o.ak(a,b)
window
u="Removing disallowed element <"+H.h(e)+"> from "+H.h(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.a_(a,"is",g)){o.ak(a,b)
window
u="Removing disallowed type extension <"+H.h(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gO(f)
t=H.c(u.slice(0),[H.u(u,0)])
for(s=f.gO(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.l(t,s)
r=t[s]
q=o.a
p=J.kM(r)
H.z(r)
if(!q.a_(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.h(e)+" "+r+'="'+H.h(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.P(a).$ic3)o.bc(a.content)},
$im9:1}
W.it.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.dM(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.ak(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ab(s)
r=H.n(u,"$iw")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.n(t,"$iw")}},
$S:30}
W.dj.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.ch.prototype={}
W.ci.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dR.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.cj.prototype={}
W.ck.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
P.iA.prototype={
$2:function(a,b){this.a[a]=b},
$S:13}
P.eL.prototype={
gaO:function(){var u=this.b,t=H.cq(u,"t",0),s=W.J
return new H.fb(new H.c9(u,H.k(new P.eM(),{func:1,ret:P.L,args:[t]}),[t]),H.k(new P.eN(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.bb(this.gaO().a)},
m:function(a,b){var u=this.gaO()
return u.b.$1(J.iM(u.a,b))},
gE:function(a){var u=P.jz(this.gaO(),!1,W.J)
return new J.ac(u,u.length,[H.u(u,0)])},
$at:function(){return[W.J]},
$ai:function(){return[W.J]},
$ab:function(){return[W.J]}}
P.eM.prototype={
$1:function(a){return!!J.P(H.n(a,"$iw")).$iJ},
$S:15}
P.eN.prototype={
$1:function(a){return H.eb(H.n(a,"$iw"),"$iJ")},
$S:36}
P.ia.prototype={}
P.ae.prototype={}
P.aL.prototype={$iaL:1}
P.f4.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
t:function(a,b){return this.m(a,b)},
$at:function(){return[P.aL]},
$ii:1,
$ai:function(){return[P.aL]},
$ib:1,
$ab:function(){return[P.aL]},
$av:function(){return[P.aL]}}
P.aN.prototype={$iaN:1}
P.fu.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
t:function(a,b){return this.m(a,b)},
$at:function(){return[P.aN]},
$ii:1,
$ai:function(){return[P.aN]},
$ib:1,
$ab:function(){return[P.aN]},
$av:function(){return[P.aN]}}
P.fA.prototype={
gl:function(a){return a.length}}
P.bZ.prototype={$ibZ:1}
P.h2.prototype={
gl:function(a){return a.length},
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
gbM:function(a){return new P.eL(a,new W.a1(a))},
R:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.a9])
C.a.h(p,W.k1(null))
C.a.h(p,W.k4())
C.a.h(p,new W.im())
c=new W.e_(new W.cW(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.n).eb(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a1(s)
q=p.ga4(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$im:1}
P.aO.prototype={$iaO:1}
P.hf.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
t:function(a,b){return this.m(a,b)},
$at:function(){return[P.aO]},
$ii:1,
$ai:function(){return[P.aO]},
$ib:1,
$ab:function(){return[P.aO]},
$av:function(){return[P.aO]}}
P.dw.prototype={}
P.dx.prototype={}
P.dG.prototype={}
P.dH.prototype={}
P.dS.prototype={}
P.dT.prototype={}
P.dY.prototype={}
P.dZ.prototype={}
P.eg.prototype={
gl:function(a){return a.length}}
P.eh.prototype={
m:function(a,b){return P.aQ(a.get(H.z(b)))},
D:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aQ(t.value[1]))}},
gO:function(a){var u=H.c([],[P.e])
this.D(a,new P.ei(u))
return u},
gl:function(a){return a.size},
$aV:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
P.ei.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
P.ej.prototype={
gl:function(a){return a.length}}
P.bc.prototype={}
P.fv.prototype={
gl:function(a){return a.length}}
P.di.prototype={}
P.cy.prototype={$icy:1}
P.d0.prototype={$id0:1}
P.bo.prototype={
cb:function(a,b,c){return a.uniform1f(b,c)},
eU:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibo:1}
P.d3.prototype={$id3:1}
P.db.prototype={$idb:1}
P.fV.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return P.aQ(a.item(b))},
t:function(a,b){return this.m(a,b)},
$at:function(){return[[P.F,,,]]},
$ii:1,
$ai:function(){return[[P.F,,,]]},
$ib:1,
$ab:function(){return[[P.F,,,]]},
$av:function(){return[[P.F,,,]]}}
P.dO.prototype={}
P.dP.prototype={}
O.aV.prototype={
bd:function(a,b){var u=this,t={func:1,ret:-1,args:[P.y,[P.i,H.u(u,0)]]}
H.k(a,t)
H.k(b,t)
u.sbD(null)
u.sbC(a)
u.sbE(b)},
dz:function(a){H.r(a,"$ii",this.$ti,"$ai")
return!0},
d0:function(a,b){var u
H.r(b,"$ii",this.$ti,"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gE:function(a){var u=this.a
return new J.ac(u,u.length,[H.u(u,0)])},
t:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.l(u,b)
return u[b]},
scZ:function(a){this.a=H.r(a,"$ib",this.$ti,"$ab")},
sbD:function(a){this.b=H.k(a,{func:1,ret:P.L,args:[[P.i,H.u(this,0)]]})},
sbC:function(a){this.c=H.k(a,{func:1,ret:-1,args:[P.y,[P.i,H.u(this,0)]]})},
sbE:function(a){H.k(a,{func:1,ret:-1,args:[P.y,[P.i,H.u(this,0)]]})},
$ii:1}
O.bS.prototype={
gl:function(a){return this.a.length},
gv:function(){var u=this.b
return u==null?this.b=D.aY():u},
a5:function(){var u=this.b
if(u!=null)u.S(null)},
gam:function(a){var u=this.a
if(u.length>0)return C.a.gaA(u)
else return V.jC()},
c0:function(a){var u=this.a
if(a==null)C.a.h(u,V.jC())
else C.a.h(u,a)
this.a5()},
ba:function(){var u=this.a
if(u.length>0){u.pop()
this.a5()}},
saQ:function(a){this.a=H.r(a,"$ib",[V.b1],"$ab")}}
E.ek.prototype={}
E.a3.prototype={
bp:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.ac(u,u.length,[H.u(u,0)]);u.p();){t=u.d
if(t.f==null)t.bp()}},
sbf:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().J(0,s.gbU())
u=s.c
if(u!=null)u.gv().h(0,s.gbU())
t=new D.R("shape",r,s.c,[F.d4])
t.b=!0
s.W(t)}},
sc6:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gv().J(0,s.gbW())
u=s.f
s.f=a
if(a!=null)a.gv().h(0,s.gbW())
s.bp()
t=new D.R("technique",u,s.f,[O.br])
t.b=!0
s.W(t)}},
san:function(a){var u,t,s=this
if(!J.a2(s.r,a)){u=s.r
if(u!=null)u.gv().J(0,s.gbS())
if(a!=null)a.gv().h(0,s.gbS())
s.r=a
t=new D.R("mover",u,a,[U.bU])
t.b=!0
s.W(t)}},
cc:function(a,b){var u,t,s,r,q,p,o,n=this,m=n.r
if(m!=null){u=m.r
t=b.e
if(u<t){m.r=t
u=m.y
if(u!=null)++u.d
m.scd(m.a+m.d*b.y)
m.sbZ(0,m.b+m.e*b.y)
m.sc3(m.c+m.f*b.y)
u=m.c
s=Math.cos(u)
r=Math.sin(u)
u=V.b2(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)
t=m.b
s=Math.cos(t)
r=Math.sin(t)
u=u.P(0,V.b2(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1))
t=m.a
s=Math.cos(t)
r=Math.sin(t)
m.x=u.P(0,V.b2(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1))
u=m.y
if(u!=null)u.aC(0)}q=m.x}else q=null
if(!J.a2(q,n.x)){p=n.x
n.x=q
o=new D.R("matrix",p,q,[V.b1])
o.b=!0
n.W(o)}for(m=n.y.a,m=new J.ac(m,m.length,[H.u(m,0)]);m.p();)m.d.cc(0,b)},
ag:function(a){var u,t,s,r,q,p,o=this,n=a.dx,m=o.x
n.toString
if(m==null)C.a.h(n.a,n.gam(n))
else C.a.h(n.a,m.P(0,n.gam(n)))
n.a5()
a.c1(o.f)
n=a.dy
u=(n&&C.a).gaA(n)
if(u!=null&&o.d!=null){n=u.a
if(n==null){n=u.d
u.f
m=n?"High":"Grey"
m+="ViewDepth"
t=a.fr.m(0,m)
if(t==null){m=a.a
s=n?"High":"Grey"
s+="ViewDepth"
t=new A.ex(m,s)
t.cu(m,s)
r="uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n".charCodeAt(0)==0?"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n":"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n"
q=(n?"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n   vec3 clr = vec3(f, f, f);\n":"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n")+"  gl_FragColor = vec4(clr, 1.0);\n}\n"
t.c=r
t.d=q.charCodeAt(0)==0?q:q
t.e=t.by(r,35633)
t.f=t.by(t.d,35632)
r=m.createProgram()
t.r=r
m.attachShader(r,t.e)
m.attachShader(t.r,t.f)
m.linkProgram(t.r)
if(!H.D(H.ja(m.getProgramParameter(t.r,35714)))){p=m.getProgramInfoLog(t.r)
m.deleteProgram(t.r)
H.a_(P.T("Failed to link shader: "+H.h(p)))}t.dO()
t.dQ()
t.z=t.x.m(0,"posAttr")
t.Q=H.eb(t.y.m(0,"width"),"$ic6")
t.ch=H.eb(t.y.m(0,"stop"),"$ic6")
t.cx=H.eb(t.y.m(0,"viewObjMat"),"$ic7")
t.cy=H.eb(t.y.m(0,"projMat"),"$ic7")
if(s.length===0)H.a_(P.T("May not cache a shader with no name."))
if(a.fr.bN(0,s))H.a_(P.T('Shader cache already contains a shader by the name "'+s+'".'))
a.fr.F(0,s,t)}u.a=t
n=t}m=o.e
if((!(m instanceof Z.cA)?o.e=null:m)==null){n=o.d.e7(new Z.hK(a.a),$.aR())
m=n.eh($.aR())
s=u.a
m.e=s.z.c
o.e=n
n=s}m=a.a
m.useProgram(n.r)
n.x.eg()
s=u.b
r=u.c
q=n.Q
C.l.cb(q.a,q.d,s-r)
r=u.c
s=n.ch
C.l.cb(s.a,s.d,r)
r=a.cy
r=r.gam(r)
s=n.cy
s.toString
s.be(r.c8(0,!0))
s=a.cx
if(s==null){s=a.db
s=s.gam(s)
r=a.dx
r=a.cx=s.P(0,r.gam(r))
s=r}n=n.cx
n.toString
n.be(s.c8(0,!0))
u.e
n=o.e
n.aZ(a)
n.ag(a)
n.eT(a)
n=u.a
n.toString
m.useProgram(null)
n.x.ef()}for(n=o.y.a,n=new J.ac(n,n.length,[H.u(n,0)]);n.p();)n.d.ag(a)
a.c_()
a.dx.ba()},
W:function(a){var u=this.z
if(u!=null)u.S(a)},
U:function(){return this.W(null)},
bV:function(a){H.n(a,"$iE")
this.e=null
this.W(a)},
ez:function(){return this.bV(null)},
bX:function(a){this.W(H.n(a,"$iE"))},
eA:function(){return this.bX(null)},
bT:function(a){this.W(H.n(a,"$iE"))},
ey:function(){return this.bT(null)},
bR:function(a){this.W(H.n(a,"$iE"))},
ev:function(){return this.bR(null)},
eu:function(a,b){var u,t,s,r,q,p,o
H.r(b,"$ii",[E.a3],"$ai")
for(u=b.length,t=this.gbQ(),s={func:1,ret:-1,args:[D.E]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bP()
o.sab(null)
o.sat(null)
o.c=null
o.d=0
p.z=o}H.k(t,s)
if(o.a==null)o.sab(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.U()},
ex:function(a,b){var u,t
H.r(b,"$ii",[E.a3],"$ai")
for(u=b.gE(b),t=this.gbQ();u.p();)u.gw(u).gv().J(0,t)
this.U()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
scI:function(a,b){this.y=H.r(b,"$iaV",[E.a3],"$aaV")},
$ijD:1}
E.fD.prototype={
cs:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.bN(Date.now(),!1)
s.y=0
s.cx=null
u=new O.bS()
t=[V.b1]
u.saQ(H.c([],t))
u.b=null
u.gv().h(0,new E.fE(s))
s.cy=u
u=new O.bS()
u.saQ(H.c([],t))
u.b=null
u.gv().h(0,new E.fF(s))
s.db=u
u=new O.bS()
u.saQ(H.c([],t))
u.b=null
u.gv().h(0,new E.fG(s))
s.dx=u
s.sdV(H.c([],[O.br]))
u=s.dy;(u&&C.a).h(u,null)
s.sdR(new H.av([P.e,A.c_]))},
c1:function(a){var u=this.dy,t=a==null?(u&&C.a).gaA(u):a;(u&&C.a).h(u,t)},
c_:function(){var u=this.dy
if(u.length>1)u.pop()},
sdV:function(a){this.dy=H.r(a,"$ib",[O.br],"$ab")},
sdR:function(a){this.fr=H.r(a,"$iF",[P.e,A.c_],"$aF")}}
E.fE.prototype={
$1:function(a){H.n(a,"$iE")},
$S:9}
E.fF.prototype={
$1:function(a){H.n(a,"$iE")
this.a.cx=null},
$S:9}
E.fG.prototype={
$1:function(a){H.n(a,"$iE")
this.a.cx=null},
$S:9}
E.d8.prototype={
bk:function(a){H.n(a,"$iE")
this.c2()},
bj:function(){return this.bk(null)},
bG:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.P()
if(typeof r!=="number")return H.b9(r)
u=C.c.bO(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.P()
t=C.c.bO(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.jT(C.h,s.geK())}},
c2:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.k(new E.h8(this),{func:1,ret:-1,args:[P.Z]})
C.u.cO(u)
C.u.dK(u,W.ka(t,P.Z))}},
eJ:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.bG()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.bN(r,!1)
s.y=P.kU(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.a5()
r=s.db
C.a.sl(r.a,0)
r.a5()
r=s.dx
C.a.sl(r.a,0)
r.a5()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.ag(p.e)}}catch(q){u=H.ab(q)
t=H.bw(q)
P.kl("Error: "+H.h(u))
P.kl("Stack: "+H.h(t))
throw H.f(u)}}}
E.h8.prototype={
$1:function(a){var u
H.lW(a)
u=this.a
if(u.ch){u.ch=!1
u.eJ()}},
$S:23}
Z.dg.prototype={$im3:1}
Z.cz.prototype={
aZ:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ab(s)
t=P.T('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.h(u))
throw H.f(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.h(u.e)+"]"}}
Z.hK.prototype={$im4:1}
Z.cA.prototype={
eh:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aZ:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aZ(a)},
eT:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ag:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.l(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.e],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.a7(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(p,", ")+"\nAttrs:   "+C.a.k(r,", ")},
scV:function(a){this.b=H.r(a,"$ib",[Z.b_],"$ab")},
$imc:1}
Z.b_.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bm(this.c)+"'")+"]"}}
Z.df.prototype={
gbg:function(a){var u=this.a,t=(u&$.aR().a)!==0?3:0
if((u&$.bB().a)!==0)t+=3
if((u&$.bA().a)!==0)t+=3
if((u&$.bC().a)!==0)t+=2
if((u&$.bD().a)!==0)t+=3
if((u&$.cs().a)!==0)t+=3
if((u&$.ct().a)!==0)t+=4
if((u&$.bE().a)!==0)++t
return(u&$.bz().a)!==0?t+4:t},
e3:function(a){var u,t=$.aR(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bB()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bA()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bC()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bD()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ct()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bE()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bz()
if((s&t.a)!==0)if(u===a)return t
return $.kE()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.df))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.e]),t=this.a
if((t&$.aR().a)!==0)C.a.h(u,"Pos")
if((t&$.bB().a)!==0)C.a.h(u,"Norm")
if((t&$.bA().a)!==0)C.a.h(u,"Binm")
if((t&$.bC().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bD().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cs().a)!==0)C.a.h(u,"Clr3")
if((t&$.ct().a)!==0)C.a.h(u,"Clr4")
if((t&$.bE().a)!==0)C.a.h(u,"Weight")
if((t&$.bz().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.en.prototype={}
D.bP.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.E]}
H.k(b,u)
if(this.a==null)this.sab(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
J:function(a,b){var u,t,s=this
H.k(b,{func:1,ret:-1,args:[D.E]})
u=s.a
u=u==null?null:C.a.I(u,b)
if(u===!0){u=s.a
t=(u&&C.a).J(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.I(u,b)
if(u===!0){u=s.b
t=(u&&C.a).J(u,b)||t}return t},
S:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.E()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.D(P.jz(u,!0,{func:1,ret:-1,args:[D.E]}),new D.eH(q))
u=r.b
if(u!=null){r.sat(H.c([],[{func:1,ret:-1,args:[D.E]}]))
C.a.D(u,new D.eI(q))}return!0},
aC:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.S(u)}}},
sab:function(a){this.a=H.r(a,"$ib",[{func:1,ret:-1,args:[D.E]}],"$ab")},
sat:function(a){this.b=H.r(a,"$ib",[{func:1,ret:-1,args:[D.E]}],"$ab")}}
D.eH.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.E]})
u=this.a.a
u.b
a.$1(u)},
$S:20}
D.eI.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.E]})
u=this.a.a
u.b
a.$1(u)},
$S:20}
D.E.prototype={}
D.eX.prototype={}
D.eY.prototype={}
D.R.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}
X.cB.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cB))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.cO.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cO))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.f3.prototype={
eF:function(a){this.d.h(0,a.a)
return!1},
eB:function(a){this.d.J(0,a.a)
return!1},
sdG:function(a){this.d=H.r(a,"$ijO",[P.y],"$ajO")}}
X.f8.prototype={
b9:function(a,b){this.r=a.a
return!1},
ap:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.ck()
if(typeof u!=="number")return u.ce()
this.r=(u&~t)>>>0
return!1},
ao:function(a,b){return!1},
eG:function(a){return!1},
dk:function(a,b,c){return}}
X.bT.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bT))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.D(this.b)?"Alt+":""
return u+(H.D(this.c)?"Shift+":"")}}
X.fk.prototype={
b9:function(a,b){this.f=a.a
return!1},
ap:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.ck()
if(typeof u!=="number")return u.ce()
this.f=(u&~t)>>>0
return!1},
ao:function(a,b){return!1},
eH:function(a,b){return!1}}
X.hc.prototype={
eE:function(a){H.r(a,"$ib",[V.aa],"$ab")
return!1},
eC:function(a){H.r(a,"$ib",[V.aa],"$ab")
return!1},
eD:function(a){H.r(a,"$ib",[V.aa],"$ab")
return!1}}
X.de.prototype={
bx:function(a){var u=a.keyCode,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.cO(u,new X.bT(t,a.altKey,a.shiftKey))},
ad:function(a){if(!H.D(a.ctrlKey))H.D(a.metaKey)
a.shiftKey},
aY:function(a){if(!H.D(a.ctrlKey))H.D(a.metaKey)
a.shiftKey},
a1:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.Y()
u=t.top
if(typeof r!=="number")return r.Y()
return new V.aa(s-q,r-u)},
aj:function(a){return new V.aP(a.movementX,a.movementY)},
aV:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.aa])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
q=C.c.X(r.pageX)
C.c.X(r.pageY)
p=o.left
C.c.X(r.pageX)
C.a.h(n,new V.aa(q-p,C.c.X(r.pageY)-o.top))}return n},
a0:function(a){var u=a.buttons,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.cB(u,new X.bT(t,a.altKey,a.shiftKey))},
aR:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.Y()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.Y()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
df:function(a){this.f=!0},
d2:function(a){this.f=!1},
d8:function(a){H.n(a,"$iW")
if(H.D(this.f)&&this.aR(a))a.preventDefault()},
dj:function(a){var u
H.n(a,"$iaw")
if(!H.D(this.f))return
u=this.bx(a)
this.b.eF(u)},
dh:function(a){var u
H.n(a,"$iaw")
if(!H.D(this.f))return
u=this.bx(a)
this.b.eB(u)},
dm:function(a){var u,t,s,r,q=this
H.n(a,"$iW")
u=q.a
u.focus()
q.f=!0
q.ad(a)
if(H.D(q.x)){t=q.a0(a)
s=q.aj(a)
if(q.d.b9(t,s))a.preventDefault()
return}if(H.D(q.r)){q.y=a
u.requestPointerLock()
return}t=q.a0(a)
r=q.a1(a)
if(q.c.b9(t,r))a.preventDefault()},
ds:function(a){var u,t,s,r=this
H.n(a,"$iW")
r.ad(a)
u=r.a0(a)
if(H.D(r.x)){t=r.aj(a)
if(r.d.ap(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.a1(a)
if(r.c.ap(u,s))a.preventDefault()},
dd:function(a){var u,t,s,r=this
H.n(a,"$iW")
if(!r.aR(a)){r.ad(a)
u=r.a0(a)
if(H.D(r.x)){t=r.aj(a)
if(r.d.ap(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.a1(a)
if(r.c.ap(u,s))a.preventDefault()}},
dq:function(a){var u,t,s,r=this
H.n(a,"$iW")
r.ad(a)
u=r.a0(a)
if(H.D(r.x)){t=r.aj(a)
if(r.d.ao(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.a1(a)
if(r.c.ao(u,s))a.preventDefault()},
da:function(a){var u,t,s,r=this
H.n(a,"$iW")
if(!r.aR(a)){r.ad(a)
u=r.a0(a)
if(H.D(r.x)){t=r.aj(a)
if(r.d.ao(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.a1(a)
if(r.c.ao(u,s))a.preventDefault()}},
du:function(a){var u,t,s=this
H.n(a,"$iaH")
s.ad(a)
u=new V.aP((a&&C.t).ged(a),C.t.gee(a)).K(0,180)
if(H.D(s.x)){if(s.d.eG(u))a.preventDefault()
return}if(H.D(s.r))return
t=s.a1(a)
if(s.c.eH(u,t))a.preventDefault()},
dw:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.a0(s.y)
t=s.a1(s.y)
s.d.dk(u,t,r)}},
dF:function(a){var u,t=this
H.n(a,"$iak")
t.a.focus()
t.f=!0
t.aY(a)
u=t.aV(a)
if(t.e.eE(u))a.preventDefault()},
dB:function(a){var u
H.n(a,"$iak")
this.aY(a)
u=this.aV(a)
if(this.e.eC(u))a.preventDefault()},
dD:function(a){var u
H.n(a,"$iak")
this.aY(a)
u=this.aV(a)
if(this.e.eD(u))a.preventDefault()},
scP:function(a){this.z=H.r(a,"$ib",[[P.c2,P.I]],"$ab")}}
V.be.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.be))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.H(u.a,3,0)+", "+V.H(u.b,3,0)+", "+V.H(u.c,3,0)+", "+V.H(u.d,3,0)+"]"}}
V.eG.prototype={}
V.b1.prototype={
c8:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.x])
return t},
P:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.b2(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b1))return!1
u=b.a
t=$.O().a
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
i:function(a){return this.A()},
q:function(a){var u,t,s,r,q,p=this,o=[P.x],n=V.iC(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.iC(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.iC(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.iC(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
A:function(){return this.q("")}}
V.aa.prototype={
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.bk.prototype={
Y:function(a,b){return new V.bk(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bk))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.d_.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d_))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.H(u.a,3,0)+", "+V.H(u.b,3,0)+", "+V.H(u.c,3,0)+", "+V.H(u.d,3,0)+"]"}}
V.d1.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d1))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.H(u.a,3,0)+", "+V.H(u.b,3,0)+", "+V.H(u.c,3,0)+", "+V.H(u.d,3,0)+"]"}}
V.aP.prototype={
b7:function(a){var u,t=this.a
if(typeof t!=="number")return t.P()
u=this.b
if(typeof u!=="number")return u.P()
return Math.sqrt(t*t+u*u)},
K:function(a,b){var u,t
if(Math.abs(b-0)<$.O().a){u=$.jW
return u==null?$.jW=new V.aP(0,0):u}u=this.a
if(typeof u!=="number")return u.K()
t=this.b
if(typeof t!=="number")return t.K()
return new V.aP(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aP))return!1
u=b.a
t=this.a
s=$.O()
s.toString
if(typeof u!=="number")return u.Y()
if(typeof t!=="number")return H.b9(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.Y()
if(typeof t!=="number")return H.b9(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.S.prototype={
b7:function(a){return Math.sqrt(this.N(this))},
N:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
b8:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.S(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
b5:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.S(u*t-s*r,s*q-p*t,p*r-u*q)},
G:function(a,b){return new V.S(this.a+b.a,this.b+b.b,this.c+b.c)},
aE:function(a){return new V.S(-this.a,-this.b,-this.c)},
K:function(a,b){if(Math.abs(b-0)<$.O().a)return V.j0()
return new V.S(this.a/b,this.b/b,this.c/b)},
en:function(){var u=$.O().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
U.cD.prototype={
gv:function(){var u=this.b
return u==null?this.b=D.aY():u},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cD))return!1
return J.a2(this.a,b.a)},
i:function(a){return"Constant: "+this.a.q("          ")}}
U.bU.prototype={}
U.d2.prototype={
gv:function(){var u=this.y
return u==null?this.y=D.aY():u},
ac:function(a){var u=this.y
if(u!=null)u.S(a)},
scd:function(a){var u
a=V.jl(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.O().a)){this.a=a
u=new D.R("yaw",u,a,[P.x])
u.b=!0
this.ac(u)}},
sbZ:function(a,b){var u
b=V.jl(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.O().a)){this.b=b
u=new D.R("pitch",u,b,[P.x])
u.b=!0
this.ac(u)}},
sc3:function(a){var u
a=V.jl(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.O().a)){this.c=a
u=new D.R("roll",u,a,[P.x])
u.b=!0
this.ac(u)}},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.d2))return!1
u=r.a
t=b.a
s=$.O().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.H(u.a,3,0)+", "+V.H(u.b,3,0)+", "+V.H(u.c,3,0)+"], ["+V.H(u.d,3,0)+", "+V.H(u.e,3,0)+", "+V.H(u.f,3,0)+"]"}}
M.cH.prototype={
a7:function(a){var u
H.n(a,"$iE")
u=this.y
if(u!=null)u.S(a)},
cA:function(){return this.a7(null)},
d4:function(a,b){var u,t,s,r,q,p,o,n=E.a3
H.r(b,"$ii",[n],"$ai")
for(u=b.length,t=this.ga6(),s={func:1,ret:-1,args:[D.E]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bP()
o.sab(null)
o.sat(null)
o.c=null
o.d=0
p.z=o}H.k(t,s)
if(o.a==null)o.sab(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.eX([n])
n.b=!0
this.a7(n)},
d6:function(a,b){var u,t,s=E.a3
H.r(b,"$ii",[s],"$ai")
for(u=b.gE(b),t=this.ga6();u.p();)u.gw(u).gv().J(0,t)
s=new D.eY([s])
s.b=!0
this.a7(s)},
gv:function(){var u=this.y
return u==null?this.y=D.aY():u},
ag:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.c1(a1.d)
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
if(typeof s!=="number")return H.b9(s)
o=C.c.X(p*s)
p=q.b
if(typeof r!=="number")return H.b9(r)
n=C.c.X(p*r)
p=C.c.X(q.c*s)
a2.c=p
q=C.c.X(q.d*r)
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
i=V.b2(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.c0(i)
t=$.jG
if(t==null){t=$.jI
if(t==null)t=$.jI=new V.bk(0,0,0)
q=$.jY
if(q==null)q=$.jY=new V.S(0,1,0)
p=$.jX
if(p==null)p=$.jX=new V.S(0,0,-1)
h=p.K(0,Math.sqrt(p.N(p)))
q=q.b5(h)
g=q.K(0,Math.sqrt(q.N(q)))
f=h.b5(g)
e=new V.S(t.a,t.b,t.c)
d=g.aE(0).N(e)
c=f.aE(0).N(e)
b=h.aE(0).N(e)
t=V.b2(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.jG=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.P(0,a)}a2.db.c0(a)
for(u=a1.e.a,u=new J.ac(u,u.length,[H.u(u,0)]);u.p();)u.d.cc(0,a2)
for(u=a1.e.a,u=new J.ac(u,u.length,[H.u(u,0)]);u.p();)u.d.ag(a2)
a1.b.toString
a2.cy.ba()
a2.db.ba()
a1.c.toString
a2.c_()},
scz:function(a,b){this.e=H.r(b,"$iaV",[E.a3],"$aaV")},
$ima:1}
A.cw.prototype={}
A.ef.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
eg:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
ef:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ex.prototype={}
A.c_.prototype={
cu:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
by:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.D(H.ja(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.T("Error compiling shader '"+H.h(s)+"': "+H.h(u)))}return s},
dO:function(){var u,t,s,r=this,q=H.c([],[A.cw]),p=r.a,o=H.Y(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.b9(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.cw(p,t.name,s))}r.x=new A.ef(q)},
dQ:function(){var u,t,s,r=this,q=H.c([],[A.da]),p=r.a,o=H.Y(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.b9(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.ec(t.type,t.size,t.name,s))}r.y=new A.hr(q)},
aa:function(a,b,c){var u=this.a
if(a===1)return new A.hj(u,b,c)
else return A.j_(u,this.r,b,a,c)},
cL:function(a,b,c){var u=this.a
if(a===1)return new A.hu(u,b,c)
else return A.j_(u,this.r,b,a,c)},
cM:function(a,b,c){var u=this.a
if(a===1)return new A.hv(u,b,c)
else return A.j_(u,this.r,b,a,c)},
ax:function(a,b){return new P.dq(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
ec:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aa(b,c,d)
case 5121:return u.aa(b,c,d)
case 5122:return u.aa(b,c,d)
case 5123:return u.aa(b,c,d)
case 5124:return u.aa(b,c,d)
case 5125:return u.aa(b,c,d)
case 5126:return new A.c6(u.a,c,d)
case 35664:return new A.hl(u.a,c,d)
case 35665:return new A.hn(u.a,c,d)
case 35666:return new A.hp(u.a,c,d)
case 35667:return new A.hm(u.a,c,d)
case 35668:return new A.ho(u.a,c,d)
case 35669:return new A.hq(u.a,c,d)
case 35674:return new A.hs(u.a,c,d)
case 35675:return new A.ht(u.a,c,d)
case 35676:return new A.c7(u.a,c,d)
case 35678:return u.cL(b,c,d)
case 35680:return u.cM(b,c,d)
case 35670:throw H.f(u.ax("BOOL",c))
case 35671:throw H.f(u.ax("BOOL_VEC2",c))
case 35672:throw H.f(u.ax("BOOL_VEC3",c))
case 35673:throw H.f(u.ax("BOOL_VEC4",c))
default:throw H.f(P.T("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}}
A.da.prototype={}
A.hr.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
i:function(a){return this.A()},
A:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.hj.prototype={
i:function(a){return"Uniform1i: "+H.h(this.c)}}
A.hm.prototype={
i:function(a){return"Uniform2i: "+H.h(this.c)}}
A.ho.prototype={
i:function(a){return"Uniform3i: "+H.h(this.c)}}
A.hq.prototype={
i:function(a){return"Uniform4i: "+H.h(this.c)}}
A.hk.prototype={
i:function(a){return"Uniform1iv: "+H.h(this.c)},
sdY:function(a){H.r(a,"$ib",[P.y],"$ab")}}
A.c6.prototype={
i:function(a){return"Uniform1f: "+H.h(this.c)}}
A.hl.prototype={
i:function(a){return"Uniform2f: "+H.h(this.c)}}
A.hn.prototype={
i:function(a){return"Uniform3f: "+H.h(this.c)}}
A.hp.prototype={
i:function(a){return"Uniform4f: "+H.h(this.c)}}
A.hs.prototype={
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}}
A.ht.prototype={
i:function(a){return"UniformMat3: "+H.h(this.c)}}
A.c7.prototype={
be:function(a){var u=new Float32Array(H.j5(H.r(a,"$ib",[P.x],"$ab")))
C.l.eU(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.h(this.c)}}
A.hu.prototype={
i:function(a){return"UniformSampler2D: "+H.h(this.c)}}
A.hv.prototype={
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}
F.iv.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.b8(s.b,b).b8(s.d.b8(s.c,b),c)
s=new V.bk(r.a,r.b,r.c)
if(!J.a2(a.f,s)){a.f=s
s=a.a
if(s!=null)s.U()}s=r.K(0,Math.sqrt(r.N(r)))
if(!J.a2(a.z,s)){a.z=s
s=a.a
if(s!=null)s.U()}s=1-b
u=1-c
u=new V.d_(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.a2(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.U()}},
$S:31}
F.U.prototype={
cG:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.j0()
if(q!=null)s=s.G(0,q)
if(u!=null)s=s.G(0,u)
if(t!=null)s=s.G(0,t)
if(s.en())return
return s.K(0,Math.sqrt(s.N(s)))},
cH:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.Y(0,q)
r=new V.S(r.a,r.b,r.c)
s=r.K(0,Math.sqrt(r.N(r)))
r=t.Y(0,q)
r=new V.S(r.a,r.b,r.c)
r=s.b5(r.K(0,Math.sqrt(r.N(r))))
return r.K(0,Math.sqrt(r.N(r)))},
b0:function(){var u,t=this
if(t.d!=null)return!0
u=t.cG()
if(u==null){u=t.cH()
if(u==null)return!1}t.d=u
t.a.a.U()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
q:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.V(J.a7(s.e),0)+", "+C.b.V(J.a7(t.b.e),0)+", "+C.b.V(J.a7(t.c.e),0)+" {"
s=t.d
u=(s!=null?u+(s.i(0)+", "):u+"-, ")+"-}"
return u},
A:function(){return this.q("")}}
F.aM.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
q:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.V(J.a7(u.e),0)+", "+C.b.V(J.a7(this.b.e),0)},
A:function(){return this.q("")}}
F.b3.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
q:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.V(J.a7(u.e),0)},
A:function(){return this.q("")}}
F.d4.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.aY():u},
er:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.H()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.C)(g),++s){r=g[s]
h.a.h(0,r.ea())}h.a.H()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.C)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.H()
o=o.e
if(typeof o!=="number")return o.G()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.b3()
if(n.a==null)H.a_(P.T("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.S(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.C)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.H()
o=o.e
if(typeof o!=="number")return o.G()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.H()
p=p.e
if(typeof p!=="number")return p.G()
p+=u
o=o.c
if(p>=o.length)return H.l(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
p=new F.aM()
o=l.a
if(o==null)H.a_(P.T("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.a_(P.T("May not create a line with vertices attached to different shapes."))
p.a=l
C.a.h(l.c.b,p)
p.b=k
C.a.h(k.c.c,p)
C.a.h(p.a.a.c.b,p)
p=p.a.a.e
if(p!=null)p.S(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.C)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.H()
o=o.e
if(typeof o!=="number")return o.G()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.H()
p=p.e
if(typeof p!=="number")return p.G()
p+=u
o=o.c
if(p>=o.length)return H.l(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.H()
o=o.e
if(typeof o!=="number")return o.G()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cJ(l,k,i)}g=h.e
if(g!=null)g.aC(0)},
e7:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aR()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bB().a)!==0)++s
if((t&$.bA().a)!==0)++s
if((t&$.bC().a)!==0)++s
if((t&$.bD().a)!==0)++s
if((t&$.cs().a)!==0)++s
if((t&$.ct().a)!==0)++s
if((t&$.bE().a)!==0)++s
if((t&$.bz().a)!==0)++s
r=a3.gbg(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.x
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.cz])
for(n=0,m=0;m<s;++m){l=a3.e3(m)
k=l.gbg(l)
C.a.F(o,m,new Z.cz(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.l(u,j)
i=u[j].ep(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.F(p,h,i[g]);++h}}n+=k}H.r(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.j5(p)),35044)
u.bindBuffer(a0,null)
e=new Z.cA(new Z.dg(a0,f),o)
e.scV(H.c([],[Z.b_]))
if(a.b.b.length!==0){t=P.y
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.H()
C.a.h(d,c.e)}b=Z.j1(u,34963,H.r(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.b_(0,d.length,b))}if(a.c.b.length!==0){t=P.y
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.H()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.l(c,m)
c=c[m].b
c.a.a.H()
C.a.h(d,c.e)}b=Z.j1(u,34963,H.r(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.b_(1,d.length,b))}if(a.d.b.length!==0){t=P.y
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.H()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.l(c,m)
c=c[m].b
c.a.a.H()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.l(c,m)
c=c[m].c
c.a.a.H()
C.a.h(d,c.e)}b=Z.j1(u,34963,H.r(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.b_(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.e])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.q(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.q(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.q(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.q(t))}return C.a.k(s,"\n")},
U:function(){var u=this.e
if(u!=null)u.S(null)},
$imb:1}
F.fM.prototype={
e0:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.r(c,"$ib",[F.am],"$ab")
u=H.c([],[F.U])
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
C.a.h(u,F.cJ(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cJ(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cJ(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cJ(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
b1:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].b0())s=!1
return s},
i:function(a){return this.A()},
q:function(a){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].q(a))
return C.a.k(r,"\n")},
A:function(){return this.q("")},
scQ:function(a){this.b=H.r(a,"$ib",[F.U],"$ab")}}
F.fN.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.A()},
q:function(a){var u,t,s=H.c([],[P.e]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.l(t,u)
C.a.h(s,t[u].q(a+(""+u+". ")))}return C.a.k(s,"\n")},
A:function(){return this.q("")},
scW:function(a){this.b=H.r(a,"$ib",[F.aM],"$ab")}}
F.fO.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.A()},
q:function(a){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].q(a))
return C.a.k(r,"\n")},
A:function(){return this.q("")},
saU:function(a){this.b=H.r(a,"$ib",[F.b3],"$ab")}}
F.am.prototype={
b4:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.k_(u.cx,r,o,t,s,q,p,a,n)},
ea:function(){return this.b4(null)},
ep:function(a){var u,t,s=this
if(a.n(0,$.aR())){u=s.f
t=[P.x]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bB())){u=s.r
t=[P.x]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bA())){u=H.c([0,0,1],[P.x])
return u}else if(a.n(0,$.bC())){u=s.y
t=[P.x]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.n(0,$.bD())){u=s.z
t=[P.x]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.cs())){u=s.Q
t=[P.x]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.ct())){u=s.Q
t=[P.x]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bE()))return H.c([s.ch],[P.x])
else if(a.n(0,$.bz())){u=s.cx
t=[P.x]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.x])},
b0:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.j0()
t.d.D(0,new F.hI(s))
s=s.a
t.r=s.K(0,Math.sqrt(s.N(s)))
s=t.a
if(s!=null){s.U()
s=t.a.e
if(s!=null)s.aC(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
q:function(a){var u,t,s=this,r="-",q=H.c([],[P.e])
C.a.h(q,C.b.V(J.a7(s.e),0))
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
u=s.z
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.Q
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
C.a.h(q,V.H(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.k(q,", ")
return a+"{"+t+"}"},
A:function(){return this.q("")}}
F.hI.prototype={
$1:function(a){var u,t
H.n(a,"$iU")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.G(0,u)}},
$S:7}
F.hC.prototype={
H:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.T("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.U()
return!0},
bK:function(a,b){var u=null,t=F.k_(u,u,a,u,u,b,u,u,0)
this.h(0,t)
return t},
gl:function(a){return this.c.length},
b1:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].b0()
return!0},
i:function(a){return this.A()},
q:function(a){var u,t,s,r
this.H()
u=H.c([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].q(a))
return C.a.k(u,"\n")},
A:function(){return this.q("")},
sdZ:function(a){this.c=H.r(a,"$ib",[F.am],"$ab")}}
F.hD.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
D:function(a,b){var u=this
H.k(b,{func:1,ret:-1,args:[F.U]})
C.a.D(u.b,b)
C.a.D(u.c,new F.hE(u,b))
C.a.D(u.d,new F.hF(u,b))},
i:function(a){return this.A()},
A:function(){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].q(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].q(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].q(""))
return C.a.k(r,"\n")},
scR:function(a){this.b=H.r(a,"$ib",[F.U],"$ab")},
scS:function(a){this.c=H.r(a,"$ib",[F.U],"$ab")},
scT:function(a){this.d=H.r(a,"$ib",[F.U],"$ab")}}
F.hE.prototype={
$1:function(a){H.n(a,"$iU")
if(!J.a2(a.a,this.a))this.b.$1(a)},
$S:7}
F.hF.prototype={
$1:function(a){var u
H.n(a,"$iU")
u=this.a
if(!J.a2(a.a,u)&&!J.a2(a.b,u))this.b.$1(a)},
$S:7}
F.hG.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.A()},
A:function(){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].q(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].q(""))
return C.a.k(r,"\n")},
scX:function(a){this.b=H.r(a,"$ib",[F.aM],"$ab")},
scY:function(a){this.c=H.r(a,"$ib",[F.aM],"$ab")}}
F.hH.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.A()},
A:function(){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].q(""))
return C.a.k(r,"\n")},
saU:function(a){this.b=H.r(a,"$ib",[F.b3],"$ab")}}
O.ew.prototype={
gv:function(){var u=this.r
return u==null?this.r=D.aY():u},
aI:function(a){var u=this.r
if(u!=null)u.S(a)}}
O.br.prototype={}
V.aJ.prototype={
a2:function(a,b){return!0},
i:function(a){return"all"},
$ia8:1}
V.a8.prototype={}
V.cS.prototype={
a2:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)if(u[s].a2(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sL:function(a){this.a=H.r(a,"$ib",[V.a8],"$ab")},
$ia8:1}
V.a4.prototype={
a2:function(a,b){return!this.cq(0,b)},
i:function(a){return"!["+this.bh(0)+"]"}}
V.fC.prototype={
a2:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.iX(this.a),t=H.iX(this.b)
return u+".."+t},
$ia8:1}
V.fL.prototype={
ct:function(a){var u,t
if(a.a.length<=0)throw H.f(P.T("May not create a SetMatcher with zero characters."))
u=new H.av([P.y,P.L])
for(t=new H.bR(a,a.gl(a),[H.cq(a,"t",0)]);t.p();)u.F(0,t.d,!0)
this.sdN(u)},
a2:function(a,b){return this.a.bN(0,b)},
i:function(a){var u=this.a
return P.iY(new H.cP(u,[H.u(u,0)]))},
sdN:function(a){this.a=H.r(a,"$iF",[P.y,P.L],"$aF")},
$ia8:1}
V.c0.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.c5(this.a.j(0,b))
r.sL(H.c([],[V.a8]))
r.c=!1
C.a.h(this.c,r)
return r},
ei:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.a2(0,a))return r}return},
i:function(a){return this.b},
sdX:function(a){this.c=H.r(a,"$ib",[V.c5],"$ab")}}
V.d9.prototype={
i:function(a){var u=H.jk(this.b,"\n","\\n"),t=H.jk(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.c4.prototype={
a3:function(a,b,c){var u,t,s
H.r(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.C)(c),++t){s=c[t]
this.c.F(0,s,b)}},
i:function(a){return this.b},
sdJ:function(a){var u=P.e
this.c=H.r(a,"$iF",[u,u],"$aF")}}
V.ha.prototype={
j:function(a,b){var u=this.a.m(0,b)
if(u==null){u=new V.c0(this,b)
u.sdX(H.c([],[V.c5]))
u.d=null
this.a.F(0,b,u)}return u},
B:function(a){var u,t=this.b.m(0,a)
if(t==null){t=new V.c4(a)
u=P.e
t.sdJ(new H.av([u,u]))
this.b.F(0,a,t)}return t},
c9:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.d9]),l=this.c,k=[P.y],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.b.a9(a,s)
q=l.ei(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.iY(j)
throw H.f(P.T("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.iY(j)
o=l.d
n=o.c.m(0,p)
t=new V.d9(n==null?o.b:n,p,s)}++s}}},
sdT:function(a){this.a=H.r(a,"$iF",[P.e,V.c0],"$aF")},
sdW:function(a){this.b=H.r(a,"$iF",[P.e,V.c4],"$aF")}}
V.c5.prototype={
i:function(a){return this.b.b+": "+this.bh(0)}}
X.cC.prototype={$ijD:1}
X.eQ.prototype={
gv:function(){var u=this.x
return u==null?this.x=D.aY():u}}
X.cY.prototype={
gv:function(){var u=this.f
return u==null?this.f=D.aY():u},
a8:function(a){var u
H.n(a,"$iE")
u=this.f
if(u!=null)u.S(a)},
cD:function(){return this.a8(null)},
san:function(a){var u,t,s=this
if(!J.a2(s.b,a)){u=s.b
if(u!=null)u.gv().J(0,s.gbl())
t=s.b
s.b=a
if(a!=null)a.gv().h(0,s.gbl())
u=new D.R("mover",t,s.b,[U.bU])
u.b=!0
s.a8(u)}},
$ijD:1,
$icC:1}
X.d7.prototype={}
V.aU.prototype={
ar:function(a){this.b=new P.eU(C.F)
this.c=null
this.saP(H.c([],[[P.b,W.ad]]))},
u:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.ad]))
u=a.split("\n")
for(l=u.length,t=[W.ad],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.z(q)
o=m.b.cK(q,0,q.length)
n=o==null?q:o
C.E.cl(p,H.jk(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaA(m.d),p)}},
bY:function(a,b){var u,t,s,r,q=this
H.r(b,"$ib",[P.e],"$ab")
q.saP(H.c([],[[P.b,W.ad]]))
u=C.a.k(b,"\n")
t=q.c
for(t=(t==null?q.c=q.ay():t).c9(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)q.aB(t[r])},
saP:function(a){this.d=H.r(a,"$ib",[[P.b,W.ad]],"$ab")}}
V.eu.prototype={
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
ay:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.hb()
a1.c=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=V.q(new H.o("_"))
C.a.h(u.a,t)
t=V.N("a","z")
C.a.h(u.a,t)
t=V.N("A","Z")
C.a.h(u.a,t)
t=a1.j(0,q).k(0,q)
u=V.q(new H.o("_"))
C.a.h(t.a,u)
u=V.N("0","9")
C.a.h(t.a,u)
u=V.N("a","z")
C.a.h(t.a,u)
u=V.N("A","Z")
C.a.h(t.a,u)
u=a1.j(0,r).k(0,p)
t=V.N("0","9")
C.a.h(u.a,t)
t=a1.j(0,p).k(0,p)
u=V.N("0","9")
C.a.h(t.a,u)
u=a1.j(0,p).k(0,o)
t=V.q(new H.o("."))
C.a.h(u.a,t)
t=a1.j(0,o).k(0,n)
u=V.N("0","9")
C.a.h(t.a,u)
u=a1.j(0,n).k(0,n)
t=V.N("0","9")
C.a.h(u.a,t)
t=a1.j(0,r).k(0,m)
u=V.q(new H.o(l))
C.a.h(t.a,u)
u=a1.j(0,m).k(0,m)
t=V.q(new H.o(l))
C.a.h(u.a,t)
t=a1.j(0,r).k(0,k)
u=V.q(new H.o('"'))
C.a.h(t.a,u)
u=a1.j(0,k).k(0,j)
t=V.q(new H.o('"'))
C.a.h(u.a,t)
t=a1.j(0,k).k(0,i)
u=V.q(new H.o("\\"))
C.a.h(t.a,u)
u=a1.j(0,i).k(0,k)
t=V.q(new H.o('"'))
C.a.h(u.a,t)
C.a.h(a1.j(0,k).k(0,k).a,new V.aJ())
t=a1.j(0,r).k(0,h)
u=V.q(new H.o("'"))
C.a.h(t.a,u)
u=a1.j(0,h).k(0,g)
t=V.q(new H.o("'"))
C.a.h(u.a,t)
t=a1.j(0,h).k(0,f)
u=V.q(new H.o("\\"))
C.a.h(t.a,u)
u=a1.j(0,f).k(0,h)
t=V.q(new H.o("'"))
C.a.h(u.a,t)
C.a.h(a1.j(0,h).k(0,h).a,new V.aJ())
t=a1.j(0,r).k(0,e)
u=V.q(new H.o("/"))
C.a.h(t.a,u)
u=a1.j(0,e).k(0,d)
t=V.q(new H.o("/"))
C.a.h(u.a,t)
t=a1.j(0,d).k(0,c)
u=V.q(new H.o("\n"))
C.a.h(t.a,u)
u=a1.j(0,d).k(0,d)
t=new V.a4()
s=[V.a8]
t.sL(H.c([],s))
C.a.h(u.a,t)
u=V.q(new H.o("\n"))
C.a.h(t.a,u)
u=a1.j(0,e).k(0,b)
t=V.q(new H.o("*"))
C.a.h(u.a,t)
t=a1.j(0,b).k(0,a)
u=V.q(new H.o("*"))
C.a.h(t.a,u)
u=a1.j(0,a).k(0,b)
t=new V.a4()
t.sL(H.c([],s))
C.a.h(u.a,t)
u=V.q(new H.o("*"))
C.a.h(t.a,u)
u=a1.j(0,a).k(0,c)
t=V.q(new H.o("/"))
C.a.h(u.a,t)
t=a1.j(0,r).k(0,a0)
u=V.q(new H.o(" \n\t"))
C.a.h(t.a,u)
u=a1.j(0,a0).k(0,a0)
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
t.a3(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.a3(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.a3(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.eR.prototype={
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
ay:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.hb()
e.c=e.j(0,r)
u=e.j(0,r).k(0,q)
t=V.q(new H.o("_"))
C.a.h(u.a,t)
t=V.N("a","z")
C.a.h(u.a,t)
t=V.N("A","Z")
C.a.h(u.a,t)
t=e.j(0,q).k(0,q)
u=V.q(new H.o("_"))
C.a.h(t.a,u)
u=V.N("0","9")
C.a.h(t.a,u)
u=V.N("a","z")
C.a.h(t.a,u)
u=V.N("A","Z")
C.a.h(t.a,u)
u=e.j(0,r).k(0,p)
t=V.N("0","9")
C.a.h(u.a,t)
t=e.j(0,p).k(0,p)
u=V.N("0","9")
C.a.h(t.a,u)
u=e.j(0,p).k(0,o)
t=V.q(new H.o("."))
C.a.h(u.a,t)
t=e.j(0,o).k(0,n)
u=V.N("0","9")
C.a.h(t.a,u)
u=e.j(0,n).k(0,n)
t=V.N("0","9")
C.a.h(u.a,t)
t=e.j(0,r).k(0,m)
u=V.q(new H.o(l))
C.a.h(t.a,u)
u=e.j(0,m).k(0,m)
t=V.q(new H.o(l))
C.a.h(u.a,t)
t=e.j(0,r).k(0,k)
u=V.q(new H.o("/"))
C.a.h(t.a,u)
u=e.j(0,k).k(0,j)
t=V.q(new H.o("/"))
C.a.h(u.a,t)
C.a.h(e.j(0,k).k(0,m).a,new V.aJ())
t=e.j(0,j).k(0,i)
u=V.q(new H.o("\n"))
C.a.h(t.a,u)
u=e.j(0,j).k(0,j)
t=new V.a4()
s=[V.a8]
t.sL(H.c([],s))
C.a.h(u.a,t)
u=V.q(new H.o("\n"))
C.a.h(t.a,u)
u=e.j(0,r).k(0,h)
t=V.q(new H.o("#"))
C.a.h(u.a,t)
t=e.j(0,h).k(0,h)
u=new V.a4()
u.sL(H.c([],s))
C.a.h(t.a,u)
t=V.q(new H.o("\n"))
C.a.h(u.a,t)
t=e.j(0,h).k(0,g)
u=V.q(new H.o("\n"))
C.a.h(t.a,u)
u=e.j(0,r).k(0,f)
t=V.q(new H.o(" \n\t"))
C.a.h(u.a,t)
t=e.j(0,f).k(0,f)
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
u.a3(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.a3(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.a3(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.eS.prototype={
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
ay:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.hb()
l.c=l.j(0,s)
u=l.j(0,s).k(0,r)
t=V.q(new H.o("_"))
C.a.h(u.a,t)
t=V.N("a","z")
C.a.h(u.a,t)
t=V.N("A","Z")
C.a.h(u.a,t)
t=l.j(0,r).k(0,r)
u=V.q(new H.o("_"))
C.a.h(t.a,u)
u=V.N("0","9")
C.a.h(t.a,u)
u=V.N("a","z")
C.a.h(t.a,u)
u=V.N("A","Z")
C.a.h(t.a,u)
u=l.j(0,r).k(0,q)
t=V.q(new H.o("="))
C.a.h(u.a,t)
u.c=!0
u=l.j(0,s).k(0,p)
t=V.q(new H.o("</\\-!>="))
C.a.h(u.a,t)
t=l.j(0,p).k(0,p)
u=V.q(new H.o("</\\-!>="))
C.a.h(t.a,u)
u=l.j(0,s).k(0,o)
t=V.q(new H.o('"'))
C.a.h(u.a,t)
t=l.j(0,o).k(0,n)
u=V.q(new H.o('"'))
C.a.h(t.a,u)
u=l.j(0,o).k(0,"EscStr")
t=V.q(new H.o("\\"))
C.a.h(u.a,t)
t=l.j(0,"EscStr").k(0,o)
u=V.q(new H.o('"'))
C.a.h(t.a,u)
C.a.h(l.j(0,o).k(0,o).a,new V.aJ())
C.a.h(l.j(0,s).k(0,m).a,new V.aJ())
u=l.j(0,m).k(0,m)
t=new V.a4()
t.sL(H.c([],[V.a8]))
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
t.a3(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
t=l.j(0,q)
t.d=t.a.B(q)
t=l.j(0,m)
t.d=t.a.B(m)
return l}}
V.fy.prototype={
bY:function(a,b){H.r(b,"$ib",[P.e],"$ab")
this.saP(H.c([],[[P.b,W.ad]]))
this.u(C.a.k(b,"\n"),"#111")},
aB:function(a){},
ay:function(){return}}
V.fP.prototype={
cv:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.j
W.X(q,"scroll",H.k(new V.fR(o),{func:1,ret:-1,args:[r]}),!1,r)},
al:function(a,b){var u,t,s,r,q
a=H.Y(C.e.e8(a,0,4))
u=P.j4(C.i,b,C.f,!1)
t=document.createElement("div")
t.className="textHeader"
t.id=u
s=t.style
r=""+(28-a*3)+"px"
s.fontSize=r
q=W.iN()
q.href="#"+u
q.textContent=b
t.appendChild(q)
this.a.appendChild(t)},
M:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.r(a,"$ib",[P.e],"$ab")
this.dP()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.c9(C.a.eo(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
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
if(H.m_(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.l(m,1)
l.href=H.z(m[1])
l.textContent=H.z(m[0])
t.appendChild(l)}else{k=P.j4(C.i,n,C.f,!1)
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
cf:function(a){var u,t,s,r=new V.eu("dart")
r.ar("dart")
u=new V.eR("glsl")
u.ar("glsl")
t=new V.eS("html")
t.ar("html")
s=C.a.ej(H.c([r,u,t],[V.aU]),new V.fS(a))
if(s!=null)return s
r=new V.fy("plain")
r.ar("plain")
return r},
bJ:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.r(b0,"$ib",[P.e],"$ab")
u=H.c([],[P.y])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(C.b.aF(r,"+")){C.a.F(b0,s,C.b.aG(r,1))
C.a.h(u,1)
t=!0}else if(C.b.aF(r,"-")){C.a.F(b0,s,C.b.aG(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.cf(a8)
q.bY(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.j4(C.i,a7,C.f,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.iN()
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.C)(r),++a0)C.M.e2(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.C)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gE(r);a3.p();)c.appendChild(a3.gw(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
dP:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.hb()
u.c=u.j(0,q)
t=u.j(0,q).k(0,p)
s=V.q(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new V.a4()
r=[V.a8]
s.sL(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,p).k(0,"BoldEnd")
s=V.q(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,q).k(0,o)
s=V.q(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,o).k(0,o)
s=new V.a4()
s.sL(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.o("_"))
C.a.h(s.a,t)
t=u.j(0,o).k(0,n)
s=V.q(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,q).k(0,m)
s=V.q(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,m).k(0,m)
s=new V.a4()
s.sL(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.o("`"))
C.a.h(s.a,t)
t=u.j(0,m).k(0,"CodeEnd")
s=V.q(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,q).k(0,l)
s=V.q(new H.o("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,l).k(0,k)
s=V.q(new H.o("|"))
C.a.h(t.a,s)
s=u.j(0,l).k(0,j)
t=V.q(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,l).k(0,l)
t=new V.a4()
t.sL(H.c([],r))
C.a.h(s.a,t)
s=V.q(new H.o("|]"))
C.a.h(t.a,s)
s=u.j(0,k).k(0,j)
t=V.q(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new V.a4()
t.sL(H.c([],r))
C.a.h(s.a,t)
s=V.q(new H.o("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,q).k(0,i).a,new V.aJ())
s=u.j(0,i).k(0,i)
t=new V.a4()
t.sL(H.c([],r))
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
V.fR.prototype={
$1:function(a){P.jT(C.h,new V.fQ(this.a))},
$S:33}
V.fQ.prototype={
$0:function(){var u=C.c.X(document.documentElement.scrollTop),t=this.a.style,s=H.h(-0.01*u)+"px"
t.top=s},
$S:0}
V.fS.prototype={
$1:function(a){return H.n(a,"$iaU").a===this.a},
$S:34};(function aliases(){var u=J.a.prototype
u.cn=u.i
u=J.cN.prototype
u.cp=u.i
u=P.i.prototype
u.co=u.aD
u=W.J.prototype
u.aH=u.R
u=W.dL.prototype
u.cr=u.a_
u=V.cS.prototype
u.cq=u.a2
u.bh=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"lB","ll",6)
u(P,"lC","lm",6)
u(P,"lD","ln",6)
t(P,"kd","lz",2)
s(W,"lL",4,null,["$4"],["lp"],17,0)
s(W,"lM",4,null,["$4"],["lq"],17,0)
var m
r(m=E.a3.prototype,"gbU",0,0,null,["$1","$0"],["bV","ez"],1,0)
r(m,"gbW",0,0,null,["$1","$0"],["bX","eA"],1,0)
r(m,"gbS",0,0,null,["$1","$0"],["bT","ey"],1,0)
r(m,"gbQ",0,0,null,["$1","$0"],["bR","ev"],1,0)
q(m,"ges","eu",5)
q(m,"gew","ex",5)
r(m=E.d8.prototype,"gbi",0,0,null,["$1","$0"],["bk","bj"],1,0)
p(m,"geK","c2",2)
o(m=X.de.prototype,"gde","df",8)
o(m,"gd1","d2",8)
o(m,"gd7","d8",3)
o(m,"gdi","dj",11)
o(m,"gdg","dh",11)
o(m,"gdl","dm",3)
o(m,"gdr","ds",3)
o(m,"gdc","dd",3)
o(m,"gdn","dq",3)
o(m,"gd9","da",3)
o(m,"gdt","du",28)
o(m,"gdv","dw",8)
o(m,"gdE","dF",10)
o(m,"gdA","dB",10)
o(m,"gdC","dD",10)
n(V.aP.prototype,"gl","b7",21)
n(V.S.prototype,"gl","b7",21)
r(m=M.cH.prototype,"ga6",0,0,null,["$1","$0"],["a7","cA"],1,0)
q(m,"gd3","d4",5)
q(m,"gd5","d6",5)
r(X.cY.prototype,"gbl",0,0,null,["$1","$0"],["a8","cD"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.I,null)
s(P.I,[H.iV,J.a,J.ac,P.dy,P.i,H.bR,P.at,H.bg,H.dd,H.hg,P.aX,H.bI,H.dQ,P.V,H.f5,H.f6,H.f1,P.iq,P.aI,P.ag,P.dh,P.fZ,P.c2,P.h_,P.a0,P.iu,P.ih,P.bs,P.i9,P.t,P.bJ,P.eV,P.is,P.L,P.bN,P.Z,P.bf,P.fw,P.d5,P.dq,P.eP,P.aZ,P.b,P.F,P.G,P.a5,P.e,P.bp,W.eq,W.b5,W.v,W.cW,W.dL,W.im,W.cK,W.a9,W.ig,W.e_,P.ia,O.aV,O.bS,E.ek,E.a3,E.fD,E.d8,Z.dg,Z.hK,Z.cA,Z.b_,Z.df,D.en,D.bP,D.E,X.cB,X.cO,X.f3,X.f8,X.bT,X.fk,X.hc,X.de,V.be,V.eG,V.b1,V.aa,V.bk,V.d_,V.d1,V.aP,V.S,M.cH,A.cw,A.ef,A.da,A.hr,F.U,F.aM,F.b3,F.d4,F.fM,F.fN,F.fO,F.am,F.hC,F.hD,F.hG,F.hH,O.br,V.aJ,V.a8,V.cS,V.fC,V.fL,V.c0,V.d9,V.c4,V.ha,X.cC,X.d7,X.cY,V.aU,V.fP])
s(J.a,[J.eZ,J.f0,J.cN,J.au,J.cM,J.bi,H.bW,W.d,W.ec,W.cx,W.ap,W.aq,W.K,W.dj,W.ev,W.ey,W.dl,W.cG,W.dn,W.eA,W.j,W.dr,W.as,W.eT,W.du,W.cR,W.fe,W.dz,W.dA,W.ax,W.dB,W.dE,W.ay,W.dI,W.dK,W.aB,W.dM,W.aC,W.dR,W.ai,W.dU,W.h9,W.aE,W.dW,W.he,W.hz,W.e0,W.e2,W.e4,W.e6,W.e8,P.aL,P.dw,P.aN,P.dG,P.fA,P.dS,P.aO,P.dY,P.eg,P.di,P.cy,P.d0,P.bo,P.d3,P.db,P.dO])
s(J.cN,[J.fx,J.c8,J.b0])
t(J.iU,J.au)
s(J.cM,[J.cL,J.f_])
t(P.f7,P.dy)
s(P.f7,[H.dc,W.hS,W.a1,P.eL])
t(H.o,H.dc)
s(P.i,[H.eD,H.fb,H.c9])
s(H.eD,[H.bj,H.cP])
s(P.at,[H.fc,H.hL])
t(H.fd,H.bj)
s(P.aX,[H.ft,H.f2,H.hx,H.hi,H.em,H.fJ,P.ee,P.cX,P.an,P.hy,P.hw,P.c1,P.eo,P.et])
s(H.bI,[H.iL,H.h5,H.iF,H.iG,H.iH,P.hO,P.hN,P.hP,P.hQ,P.ir,P.hY,P.i1,P.hZ,P.i_,P.i0,P.i4,P.i5,P.i3,P.i2,P.h0,P.h1,P.iy,P.id,P.ic,P.ie,P.fa,P.eB,P.eC,W.eE,W.fg,W.fi,W.fI,W.fY,W.hX,W.fs,W.fr,W.ii,W.ij,W.ip,W.it,P.iA,P.eM,P.eN,P.ei,E.fE,E.fF,E.fG,E.h8,D.eH,D.eI,F.iv,F.hI,F.hE,F.hF,V.fR,V.fQ,V.fS])
s(H.h5,[H.fW,H.bG])
t(H.hM,P.ee)
t(P.f9,P.V)
s(P.f9,[H.av,W.hR])
t(H.cT,H.bW)
s(H.cT,[H.cd,H.cf])
t(H.ce,H.cd)
t(H.bV,H.ce)
t(H.cg,H.cf)
t(H.cU,H.cg)
s(H.cU,[H.fl,H.fm,H.fn,H.fo,H.fp,H.cV,H.fq])
t(P.ib,P.iu)
t(P.i8,P.ih)
t(P.bK,P.h_)
t(P.eF,P.bJ)
s(P.bK,[P.eU,P.hB])
t(P.hA,P.eF)
s(P.Z,[P.x,P.y])
s(P.an,[P.bn,P.eW])
s(W.d,[W.w,W.eK,W.aA,W.ch,W.aD,W.aj,W.cj,W.hJ,W.ca,P.ej,P.bc])
s(W.w,[W.J,W.aT,W.cb])
s(W.J,[W.p,P.m])
s(W.p,[W.cv,W.ed,W.bF,W.aS,W.bd,W.ad,W.eO,W.fK,W.bq,W.d6,W.h3,W.h4,W.c3])
s(W.ap,[W.bL,W.er,W.es])
t(W.ep,W.aq)
t(W.bM,W.dj)
t(W.dm,W.dl)
t(W.cF,W.dm)
t(W.dp,W.dn)
t(W.ez,W.dp)
t(W.ar,W.cx)
t(W.ds,W.dr)
t(W.eJ,W.ds)
t(W.dv,W.du)
t(W.bh,W.dv)
t(W.b4,W.j)
s(W.b4,[W.aw,W.W,W.ak])
t(W.ff,W.dz)
t(W.fh,W.dA)
t(W.dC,W.dB)
t(W.fj,W.dC)
t(W.dF,W.dE)
t(W.bX,W.dF)
t(W.dJ,W.dI)
t(W.fz,W.dJ)
t(W.fH,W.dK)
t(W.ci,W.ch)
t(W.fT,W.ci)
t(W.dN,W.dM)
t(W.fU,W.dN)
t(W.fX,W.dR)
t(W.dV,W.dU)
t(W.h6,W.dV)
t(W.ck,W.cj)
t(W.h7,W.ck)
t(W.dX,W.dW)
t(W.hd,W.dX)
t(W.aH,W.W)
t(W.e1,W.e0)
t(W.hT,W.e1)
t(W.dk,W.cG)
t(W.e3,W.e2)
t(W.i6,W.e3)
t(W.e5,W.e4)
t(W.dD,W.e5)
t(W.e7,W.e6)
t(W.ik,W.e7)
t(W.e9,W.e8)
t(W.il,W.e9)
t(W.hU,W.hR)
t(W.hV,P.fZ)
t(W.j2,W.hV)
t(W.hW,P.c2)
t(W.io,W.dL)
t(P.ae,P.ia)
t(P.dx,P.dw)
t(P.f4,P.dx)
t(P.dH,P.dG)
t(P.fu,P.dH)
t(P.bZ,P.m)
t(P.dT,P.dS)
t(P.h2,P.dT)
t(P.dZ,P.dY)
t(P.hf,P.dZ)
t(P.eh,P.di)
t(P.fv,P.bc)
t(P.dP,P.dO)
t(P.fV,P.dP)
s(E.ek,[Z.cz,A.c_])
s(D.E,[D.eX,D.eY,D.R])
t(U.bU,D.en)
s(U.bU,[U.cD,U.d2])
t(A.ex,A.c_)
s(A.da,[A.hj,A.hm,A.ho,A.hq,A.hk,A.c6,A.hl,A.hn,A.hp,A.hs,A.ht,A.c7,A.hu,A.hv])
t(O.ew,O.br)
s(V.cS,[V.a4,V.c5])
t(X.eQ,X.d7)
s(V.aU,[V.eu,V.eR,V.eS,V.fy])
u(H.dc,H.dd)
u(H.cd,P.t)
u(H.ce,H.bg)
u(H.cf,P.t)
u(H.cg,H.bg)
u(P.dy,P.t)
u(W.dj,W.eq)
u(W.dl,P.t)
u(W.dm,W.v)
u(W.dn,P.t)
u(W.dp,W.v)
u(W.dr,P.t)
u(W.ds,W.v)
u(W.du,P.t)
u(W.dv,W.v)
u(W.dz,P.V)
u(W.dA,P.V)
u(W.dB,P.t)
u(W.dC,W.v)
u(W.dE,P.t)
u(W.dF,W.v)
u(W.dI,P.t)
u(W.dJ,W.v)
u(W.dK,P.V)
u(W.ch,P.t)
u(W.ci,W.v)
u(W.dM,P.t)
u(W.dN,W.v)
u(W.dR,P.V)
u(W.dU,P.t)
u(W.dV,W.v)
u(W.cj,P.t)
u(W.ck,W.v)
u(W.dW,P.t)
u(W.dX,W.v)
u(W.e0,P.t)
u(W.e1,W.v)
u(W.e2,P.t)
u(W.e3,W.v)
u(W.e4,P.t)
u(W.e5,W.v)
u(W.e6,P.t)
u(W.e7,W.v)
u(W.e8,P.t)
u(W.e9,W.v)
u(P.dw,P.t)
u(P.dx,W.v)
u(P.dG,P.t)
u(P.dH,W.v)
u(P.dS,P.t)
u(P.dT,W.v)
u(P.dY,P.t)
u(P.dZ,W.v)
u(P.di,P.V)
u(P.dO,P.t)
u(P.dP,W.v)})();(function constants(){var u=hunkHelpers.makeConstList
C.n=W.aS.prototype
C.D=W.bd.prototype
C.E=W.ad.prototype
C.G=J.a.prototype
C.a=J.au.prototype
C.e=J.cL.prototype
C.c=J.cM.prototype
C.b=J.bi.prototype
C.H=J.b0.prototype
C.L=W.bX.prototype
C.q=J.fx.prototype
C.l=P.bo.prototype
C.M=W.bq.prototype
C.r=W.d6.prototype
C.m=J.c8.prototype
C.t=W.aH.prototype
C.u=W.ca.prototype
C.p=function getTagFallback(o) {
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

C.B=new P.fw()
C.f=new P.hA()
C.C=new P.hB()
C.d=new P.ib()
C.h=new P.bf(0)
C.F=new P.eV("element",!0,!1,!1,!1)
C.I=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.J=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.K=H.c(u([]),[P.e])
C.i=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.y])
C.j=H.c(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.k=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])})()
var v={mangledGlobalNames:{y:"int",x:"double",Z:"num",e:"String",L:"bool",G:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.G},{func:1,ret:-1,opt:[D.E]},{func:1,ret:-1},{func:1,ret:-1,args:[W.W]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.y,[P.i,E.a3]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[F.U]},{func:1,ret:-1,args:[W.j]},{func:1,ret:P.G,args:[D.E]},{func:1,ret:-1,args:[W.ak]},{func:1,ret:-1,args:[W.aw]},{func:1,ret:P.G,args:[,]},{func:1,ret:P.G,args:[,,]},{func:1,ret:P.e,args:[P.y]},{func:1,ret:P.L,args:[W.w]},{func:1,args:[,]},{func:1,ret:P.L,args:[W.J,P.e,P.e,W.b5]},{func:1,ret:P.L,args:[W.a9]},{func:1,ret:P.L,args:[P.e]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.E]}]},{func:1,ret:P.x},{func:1,ret:P.e,args:[P.e]},{func:1,ret:P.G,args:[P.Z]},{func:1,args:[W.j]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:[P.ag,,],args:[,]},{func:1,ret:P.G,args:[,],opt:[P.a5]},{func:1,ret:-1,args:[W.aH]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.w,W.w]},{func:1,ret:P.G,args:[F.am,P.x,P.x]},{func:1,args:[P.e]},{func:1,ret:P.G,args:[W.j]},{func:1,ret:P.L,args:[V.aU]},{func:1,args:[,P.e]},{func:1,ret:W.J,args:[W.w]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.ao=0
$.bH=null
$.jp=null
$.j6=!1
$.kh=null
$.kb=null
$.kn=null
$.iB=null
$.iI=null
$.jh=null
$.bt=null
$.cm=null
$.cn=null
$.j7=!1
$.Q=C.d
$.a6=[]
$.aK=null
$.iQ=null
$.jv=null
$.ju=null
$.dt=P.jx(P.e,P.aZ)
$.jB=null
$.jH=null
$.jI=null
$.jN=null
$.jW=null
$.jZ=null
$.jY=null
$.jX=null
$.jG=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"m7","kr",function(){return H.kg("_$dart_dartClosure")})
u($,"m8","jm",function(){return H.kg("_$dart_js")})
u($,"md","ks",function(){return H.aF(H.hh({
toString:function(){return"$receiver$"}}))})
u($,"me","kt",function(){return H.aF(H.hh({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mf","ku",function(){return H.aF(H.hh(null))})
u($,"mg","kv",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mj","ky",function(){return H.aF(H.hh(void 0))})
u($,"mk","kz",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mi","kx",function(){return H.aF(H.jU(null))})
u($,"mh","kw",function(){return H.aF(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mm","kB",function(){return H.aF(H.jU(void 0))})
u($,"ml","kA",function(){return H.aF(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mB","jn",function(){return P.lk()})
u($,"mD","kG",function(){return P.ld("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"mC","kF",function(){return P.jy(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"mu","kE",function(){return Z.af(0)})
u($,"mo","kC",function(){return Z.af(511)})
u($,"mw","aR",function(){return Z.af(1)})
u($,"mv","bB",function(){return Z.af(2)})
u($,"mq","bA",function(){return Z.af(4)})
u($,"mx","bC",function(){return Z.af(8)})
u($,"my","bD",function(){return Z.af(16)})
u($,"mr","cs",function(){return Z.af(32)})
u($,"ms","ct",function(){return Z.af(64)})
u($,"mt","kD",function(){return Z.af(96)})
u($,"mz","bE",function(){return Z.af(128)})
u($,"mp","bz",function(){return Z.af(256)})
u($,"m6","kq",function(){return new V.eG(1e-9)})
u($,"m5","O",function(){return $.kq()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bW,ArrayBufferView:H.bW,Float32Array:H.bV,Float64Array:H.bV,Int16Array:H.fl,Int32Array:H.fm,Int8Array:H.fn,Uint16Array:H.fo,Uint32Array:H.fp,Uint8ClampedArray:H.cV,CanvasPixelArray:H.cV,Uint8Array:H.fq,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLImageElement:W.p,HTMLInputElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableColElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.ec,HTMLAnchorElement:W.cv,HTMLAreaElement:W.ed,HTMLBaseElement:W.bF,Blob:W.cx,HTMLBodyElement:W.aS,HTMLCanvasElement:W.bd,CDATASection:W.aT,CharacterData:W.aT,Comment:W.aT,ProcessingInstruction:W.aT,Text:W.aT,CSSNumericValue:W.bL,CSSUnitValue:W.bL,CSSPerspective:W.ep,CSSCharsetRule:W.K,CSSConditionRule:W.K,CSSFontFaceRule:W.K,CSSGroupingRule:W.K,CSSImportRule:W.K,CSSKeyframeRule:W.K,MozCSSKeyframeRule:W.K,WebKitCSSKeyframeRule:W.K,CSSKeyframesRule:W.K,MozCSSKeyframesRule:W.K,WebKitCSSKeyframesRule:W.K,CSSMediaRule:W.K,CSSNamespaceRule:W.K,CSSPageRule:W.K,CSSRule:W.K,CSSStyleRule:W.K,CSSSupportsRule:W.K,CSSViewportRule:W.K,CSSStyleDeclaration:W.bM,MSStyleCSSProperties:W.bM,CSS2Properties:W.bM,CSSImageValue:W.ap,CSSKeywordValue:W.ap,CSSPositionValue:W.ap,CSSResourceValue:W.ap,CSSURLImageValue:W.ap,CSSStyleValue:W.ap,CSSMatrixComponent:W.aq,CSSRotation:W.aq,CSSScale:W.aq,CSSSkew:W.aq,CSSTranslation:W.aq,CSSTransformComponent:W.aq,CSSTransformValue:W.er,CSSUnparsedValue:W.es,DataTransferItemList:W.ev,HTMLDivElement:W.ad,DOMException:W.ey,ClientRectList:W.cF,DOMRectList:W.cF,DOMRectReadOnly:W.cG,DOMStringList:W.ez,DOMTokenList:W.eA,Element:W.J,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.ar,FileList:W.eJ,FileWriter:W.eK,HTMLFormElement:W.eO,Gamepad:W.as,History:W.eT,HTMLCollection:W.bh,HTMLFormControlsCollection:W.bh,HTMLOptionsCollection:W.bh,KeyboardEvent:W.aw,Location:W.cR,MediaList:W.fe,MIDIInputMap:W.ff,MIDIOutputMap:W.fh,MimeType:W.ax,MimeTypeArray:W.fj,PointerEvent:W.W,MouseEvent:W.W,DragEvent:W.W,Document:W.w,DocumentFragment:W.w,HTMLDocument:W.w,ShadowRoot:W.w,XMLDocument:W.w,DocumentType:W.w,Node:W.w,NodeList:W.bX,RadioNodeList:W.bX,Plugin:W.ay,PluginArray:W.fz,RTCStatsReport:W.fH,HTMLSelectElement:W.fK,SourceBuffer:W.aA,SourceBufferList:W.fT,SpeechGrammar:W.aB,SpeechGrammarList:W.fU,SpeechRecognitionResult:W.aC,Storage:W.fX,CSSStyleSheet:W.ai,StyleSheet:W.ai,HTMLTableCellElement:W.bq,HTMLTableDataCellElement:W.bq,HTMLTableHeaderCellElement:W.bq,HTMLTableElement:W.d6,HTMLTableRowElement:W.h3,HTMLTableSectionElement:W.h4,HTMLTemplateElement:W.c3,TextTrack:W.aD,TextTrackCue:W.aj,VTTCue:W.aj,TextTrackCueList:W.h6,TextTrackList:W.h7,TimeRanges:W.h9,Touch:W.aE,TouchEvent:W.ak,TouchList:W.hd,TrackDefaultList:W.he,CompositionEvent:W.b4,FocusEvent:W.b4,TextEvent:W.b4,UIEvent:W.b4,URL:W.hz,VideoTrackList:W.hJ,WheelEvent:W.aH,Window:W.ca,DOMWindow:W.ca,Attr:W.cb,CSSRuleList:W.hT,ClientRect:W.dk,DOMRect:W.dk,GamepadList:W.i6,NamedNodeMap:W.dD,MozNamedAttrMap:W.dD,SpeechRecognitionResultList:W.ik,StyleSheetList:W.il,SVGLength:P.aL,SVGLengthList:P.f4,SVGNumber:P.aN,SVGNumberList:P.fu,SVGPointList:P.fA,SVGScriptElement:P.bZ,SVGStringList:P.h2,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,SVGTransform:P.aO,SVGTransformList:P.hf,AudioBuffer:P.eg,AudioParamMap:P.eh,AudioTrackList:P.ej,AudioContext:P.bc,webkitAudioContext:P.bc,BaseAudioContext:P.bc,OfflineAudioContext:P.fv,WebGLBuffer:P.cy,WebGLProgram:P.d0,WebGL2RenderingContext:P.bo,WebGLShader:P.d3,WebGLUniformLocation:P.db,SQLResultSetRowList:P.fV})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.cT.$nativeSuperclassTag="ArrayBufferView"
H.cd.$nativeSuperclassTag="ArrayBufferView"
H.ce.$nativeSuperclassTag="ArrayBufferView"
H.bV.$nativeSuperclassTag="ArrayBufferView"
H.cf.$nativeSuperclassTag="ArrayBufferView"
H.cg.$nativeSuperclassTag="ArrayBufferView"
H.cU.$nativeSuperclassTag="ArrayBufferView"
W.ch.$nativeSuperclassTag="EventTarget"
W.ci.$nativeSuperclassTag="EventTarget"
W.cj.$nativeSuperclassTag="EventTarget"
W.ck.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.kj,[])
else F.kj([])})})()
//# sourceMappingURL=main.dart.js.map
