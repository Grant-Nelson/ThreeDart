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
a[c]=function(){a[c]=function(){H.o7(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kz"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kz"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kz(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kf:function kf(a){this.a=a},
jS:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
mw:function(){return new P.hS("No element")},
a6:function a6(a){this.a=a},
fC:function fC(){},
dy:function dy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
h6:function h6(a,b,c){this.a=a
this.b=b
this.$ti=c},
h7:function h7(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
iP:function iP(a,b,c){this.a=a
this.b=b
this.$ti=c},
iQ:function iQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
bN:function bN(){},
cL:function cL(){},
e4:function e4(){},
mo:function(){throw H.c(P.D("Cannot modify unmodifiable Map"))},
c6:function(a){var u,t
u=H.K(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
nS:function(a){return v.types[H.af(a)]},
nY:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.T(a).$iJ},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ar(a)
if(typeof u!=="string")throw H.c(H.aB(a))
return u},
mU:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fR(u)
t=u[0]
s=u[1]
return new H.hz(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cw:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mR:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.f(u,3)
t=H.K(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ac(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.F(r,p)|32)>s)return}return parseInt(a,b)},
bS:function(a){return H.mI(a)+H.kx(H.bB(a),0,null)},
mI:function(a){var u,t,s,r,q,p,o,n,m
u=J.T(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.P||!!u.$icK){p=C.A(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.c6(r.length>1&&C.c.F(r,0)===36?C.c.at(r,1):r)},
mJ:function(){if(!!self.location)return self.location.href
return},
l5:function(a){var u,t,s,r,q
H.jX(a)
u=J.aD(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
mS:function(a){var u,t,s,r
u=H.d([],[P.o])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.E)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.aB(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.aL(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.aB(r))}return H.l5(u)},
l6:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aB(s))
if(s<0)throw H.c(H.aB(s))
if(s>65535)return H.mS(a)}return H.l5(a)},
mT:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
dJ:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aL(u,10))>>>0,56320|u&1023)}}throw H.c(P.ac(a,0,1114111,null,null))},
bR:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mQ:function(a){var u=H.bR(a).getFullYear()+0
return u},
mO:function(a){var u=H.bR(a).getMonth()+1
return u},
mK:function(a){var u=H.bR(a).getDate()+0
return u},
mL:function(a){var u=H.bR(a).getHours()+0
return u},
mN:function(a){var u=H.bR(a).getMinutes()+0
return u},
mP:function(a){var u=H.bR(a).getSeconds()+0
return u},
mM:function(a){var u=H.bR(a).getMilliseconds()+0
return u},
v:function(a){throw H.c(H.aB(a))},
f:function(a,b){if(a==null)J.aD(a)
throw H.c(H.c0(a,b))},
c0:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aR(!0,b,"index",null)
u=H.af(J.aD(a))
if(!(b<0)){if(typeof u!=="number")return H.v(u)
t=b>=u}else t=!0
if(t)return P.U(b,a,"index",null,u)
return P.hy(b,"index",null)},
nO:function(a,b,c){if(a>c)return new P.bT(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bT(a,c,!0,b,"end","Invalid value")
return new P.aR(!0,b,"end",null)},
aB:function(a){return new P.aR(!0,a,null,null)},
nJ:function(a){if(typeof a!=="number")throw H.c(H.aB(a))
return a},
c:function(a){var u
if(a==null)a=new P.dG()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lV})
u.name=""}else u.toString=H.lV
return u},
lV:function(){return J.ar(this.dartException)},
r:function(a){throw H.c(a)},
E:function(a){throw H.c(P.bK(a))},
b4:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.i])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.id(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ie:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lf:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
l0:function(a,b){return new H.hq(a,b==null?null:b.method)},
kg:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fU(a,t,u?null:b.receiver)},
aC:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.k2(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aL(s,16)&8191)===10)switch(r){case 438:return u.$1(H.kg(H.m(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.l0(H.m(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.lY()
p=$.lZ()
o=$.m_()
n=$.m0()
m=$.m3()
l=$.m4()
k=$.m2()
$.m1()
j=$.m6()
i=$.m5()
h=q.ab(t)
if(h!=null)return u.$1(H.kg(H.K(t),h))
else{h=p.ab(t)
if(h!=null){h.method="call"
return u.$1(H.kg(H.K(t),h))}else{h=o.ab(t)
if(h==null){h=n.ab(t)
if(h==null){h=m.ab(t)
if(h==null){h=l.ab(t)
if(h==null){h=k.ab(t)
if(h==null){h=n.ab(t)
if(h==null){h=j.ab(t)
if(h==null){h=i.ab(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.l0(H.K(t),h))}}return u.$1(new H.is(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dQ()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aR(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dQ()
return a},
c3:function(a){var u
if(a==null)return new H.eH(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eH(a)},
nR:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.l(0,a[t],a[s])}return b},
nX:function(a,b,c,d,e,f){H.e(a,"$ikc")
switch(H.af(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.u("Unsupported number of arguments for wrapped closure"))},
c_:function(a,b){var u
H.af(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nX)
a.$identity=u
return u},
mn:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.T(d).$ib){u.$reflectionInfo=d
s=H.mU(u).r}else s=d
r=e?Object.create(new H.hT().constructor.prototype):Object.create(new H.c8(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aS
if(typeof p!=="number")return p.B()
$.aS=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.kP(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.nS,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.kN:H.k8
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.kP(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
mk:function(a,b,c,d){var u=H.k8
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kP:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mm(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mk(t,!r,u,b)
if(t===0){r=$.aS
if(typeof r!=="number")return r.B()
$.aS=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c9
if(q==null){q=H.fh("self")
$.c9=q}return new Function(r+H.m(q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aS
if(typeof r!=="number")return r.B()
$.aS=r+1
o+=r
r="return function("+o+"){return this."
q=$.c9
if(q==null){q=H.fh("self")
$.c9=q}return new Function(r+H.m(q)+"."+H.m(u)+"("+o+");}")()},
ml:function(a,b,c,d){var u,t
u=H.k8
t=H.kN
switch(b?-1:a){case 0:throw H.c(H.mY("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mm:function(a,b){var u,t,s,r,q,p,o,n
u=$.c9
if(u==null){u=H.fh("self")
$.c9=u}t=$.kM
if(t==null){t=H.fh("receiver")
$.kM=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.ml(r,!p,s,b)
if(r===1){u="return function(){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+");"
t=$.aS
if(typeof t!=="number")return t.B()
$.aS=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+", "+n+");"
t=$.aS
if(typeof t!=="number")return t.B()
$.aS=t+1
return new Function(u+t+"}")()},
kz:function(a,b,c,d,e,f,g){return H.mn(a,b,H.af(c),d,!!e,!!f,g)},
k8:function(a){return a.a},
kN:function(a){return a.c},
fh:function(a){var u,t,s,r,q
u=new H.c8("self","target","receiver","name")
t=J.fR(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
K:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aP(a,"String"))},
nP:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aP(a,"double"))},
o1:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aP(a,"num"))},
lJ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aP(a,"bool"))},
af:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aP(a,"int"))},
lR:function(a,b){throw H.c(H.aP(a,H.c6(H.K(b).substring(2))))},
o3:function(a,b){throw H.c(H.mj(a,H.c6(H.K(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.T(a)[b])return a
H.lR(a,b)},
k:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.T(a)[b]
else u=!0
if(u)return a
H.o3(a,b)},
jX:function(a){if(a==null)return a
if(!!J.T(a).$ib)return a
throw H.c(H.aP(a,"List<dynamic>"))},
lO:function(a,b){var u
if(a==null)return a
u=J.T(a)
if(!!u.$ib)return a
if(u[b])return a
H.lR(a,b)},
lK:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.af(u)]
else return a.$S()}return},
f3:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.lK(J.T(a))
if(u==null)return!1
return H.lz(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.ku)return a
$.ku=!0
try{if(H.f3(a,b))return a
u=H.k0(b)
t=H.aP(a,u)
throw H.c(t)}finally{$.ku=!1}},
kA:function(a,b){if(a!=null&&!H.ky(a,b))H.r(H.aP(a,H.k0(b)))
return a},
aP:function(a,b){return new H.ig("TypeError: "+P.fG(a)+": type '"+H.lE(a)+"' is not a subtype of type '"+b+"'")},
mj:function(a,b){return new H.fi("CastError: "+P.fG(a)+": type '"+H.lE(a)+"' is not a subtype of type '"+b+"'")},
lE:function(a){var u,t
u=J.T(a)
if(!!u.$icb){t=H.lK(u)
if(t!=null)return H.k0(t)
return"Closure"}return H.bS(a)},
o7:function(a){throw H.c(new P.fv(H.K(a)))},
mY:function(a){return new H.hG(a)},
lL:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bB:function(a){if(a==null)return
return a.$ti},
oO:function(a,b,c){return H.c5(a["$a"+H.m(c)],H.bB(b))},
c2:function(a,b,c,d){var u
H.K(c)
H.af(d)
u=H.c5(a["$a"+H.m(c)],H.bB(b))
return u==null?null:u[d]},
au:function(a,b,c){var u
H.K(b)
H.af(c)
u=H.c5(a["$a"+H.m(b)],H.bB(a))
return u==null?null:u[c]},
t:function(a,b){var u
H.af(b)
u=H.bB(a)
return u==null?null:u[b]},
k0:function(a){return H.bA(a,null)},
bA:function(a,b){var u,t
H.l(b,"$ib",[P.i],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c6(a[0].name)+H.kx(a,1,b)
if(typeof a=="function")return H.c6(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.af(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.m(b[t])}if('func' in a)return H.ny(a,b)
if('futureOr' in a)return"FutureOr<"+H.bA("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ny:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.i]
H.l(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.d([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.f(b,m)
o=C.c.B(o,b[m])
l=t[p]
if(l!=null&&l!==P.R)o+=" extends "+H.bA(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bA(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bA(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bA(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.nQ(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.K(u[g])
i=i+h+H.bA(d[c],b)+(" "+H.m(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
kx:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.i],"$ab")
if(a==null)return""
u=new P.am("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bA(p,c)}return"<"+u.i(0)+">"},
c5:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
d1:function(a,b,c,d){var u,t
H.K(b)
H.jX(c)
H.K(d)
if(a==null)return!1
u=H.bB(a)
t=J.T(a)
if(t[b]==null)return!1
return H.lH(H.c5(t[d],u),null,c,null)},
l:function(a,b,c,d){H.K(b)
H.jX(c)
H.K(d)
if(a==null)return a
if(H.d1(a,b,c,d))return a
throw H.c(H.aP(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c6(b.substring(2))+H.kx(c,0,null),v.mangledGlobalNames)))},
lH:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aA(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aA(a[t],b,c[t],d))return!1
return!0},
oM:function(a,b,c){return a.apply(b,H.c5(J.T(b)["$a"+H.m(c)],H.bB(b)))},
lN:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="R"||a.name==="G"||a===-1||a===-2||H.lN(u)}return!1},
ky:function(a,b){var u,t
if(a==null)return b==null||b.name==="R"||b.name==="G"||b===-1||b===-2||H.lN(b)
if(b==null||b===-1||b.name==="R"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.ky(a,"type" in b?b.type:null))return!0
if('func' in b)return H.f3(a,b)}u=J.T(a).constructor
t=H.bB(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aA(u,null,b,null)},
z:function(a,b){if(a!=null&&!H.ky(a,b))throw H.c(H.aP(a,H.k0(b)))
return a},
aA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="R"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="R"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aA(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="G")return!0
if('func' in c)return H.lz(a,b,c,d)
if('func' in a)return c.name==="kc"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aA("type" in a?a.type:null,b,s,d)
else if(H.aA(a,b,s,d))return!0
else{if(!('$i'+"ci" in t.prototype))return!1
r=t.prototype["$a"+"ci"]
q=H.c5(r,u?a.slice(1):null)
return H.aA(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.lH(H.c5(m,u),b,p,d)},
lz:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aA(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aA(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aA(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aA(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.o0(h,b,g,d)},
o0:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aA(c[r],d,a[r],b))return!1}return!0},
oN:function(a,b,c){Object.defineProperty(a,H.K(b),{value:c,enumerable:false,writable:true,configurable:true})},
nZ:function(a){var u,t,s,r,q,p
u=H.K($.lM.$1(a))
t=$.jN[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jW[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.K($.lG.$2(a,u))
if(u!=null){t=$.jN[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jW[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.k_(s)
$.jN[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.jW[u]=s
return s}if(q==="-"){p=H.k_(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.lQ(a,s)
if(q==="*")throw H.c(P.ir(u))
if(v.leafTags[u]===true){p=H.k_(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.lQ(a,s)},
lQ:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kD(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
k_:function(a){return J.kD(a,!1,null,!!a.$iJ)},
o_:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.k_(u)
else return J.kD(u,c,null,null)},
nV:function(){if(!0===$.kC)return
$.kC=!0
H.nW()},
nW:function(){var u,t,s,r,q,p,o,n
$.jN=Object.create(null)
$.jW=Object.create(null)
H.nU()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lS.$1(q)
if(p!=null){o=H.o_(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nU:function(){var u,t,s,r,q,p,o
u=C.U()
u=H.bZ(C.R,H.bZ(C.W,H.bZ(C.z,H.bZ(C.z,H.bZ(C.V,H.bZ(C.S,H.bZ(C.T(C.A),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.lM=new H.jT(q)
$.lG=new H.jU(p)
$.lS=new H.jV(o)},
bZ:function(a,b){return a(b)||b},
my:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a3("Illegal RegExp pattern ("+String(r)+")",a,null))},
o6:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lT:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fp:function fp(){},
fq:function fq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hz:function hz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
id:function id(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hq:function hq(a,b){this.a=a
this.b=b},
fU:function fU(a,b,c){this.a=a
this.b=b
this.c=c},
is:function is(a){this.a=a},
k2:function k2(a){this.a=a},
eH:function eH(a){this.a=a
this.b=null},
cb:function cb(){},
i0:function i0(){},
hT:function hT(){},
c8:function c8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ig:function ig(a){this.a=a},
fi:function fi(a){this.a=a},
hG:function hG(a){this.a=a},
aF:function aF(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fX:function fX(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fY:function fY(a,b){this.a=a
this.$ti=b},
fZ:function fZ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jT:function jT(a){this.a=a},
jU:function jU(a){this.a=a},
jV:function jV(a){this.a=a},
fT:function fT(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bX:function(a){return a},
mH:function(a){return new Int8Array(a)},
b8:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.c0(b,a))},
nw:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.nO(a,b,c))
return b},
cq:function cq(){},
bv:function bv(){},
dD:function dD(){},
cr:function cr(){},
dE:function dE(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
hp:function hp(){},
dF:function dF(){},
cs:function cs(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
cS:function cS(){},
nQ:function(a){return J.kS(a?Object.keys(a):[],null)},
o2:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jP:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.kC==null){H.nV()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.ir("Return interceptor for "+H.m(t(a,u))))}r=a.constructor
q=r==null?null:r[$.kF()]
if(q!=null)return q
q=H.nZ(a)
if(q!=null)return q
if(typeof a=="function")return C.X
t=Object.getPrototypeOf(a)
if(t==null)return C.F
if(t===Object.prototype)return C.F
if(typeof r=="function"){Object.defineProperty(r,$.kF(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
mx:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.k7(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ac(a,0,4294967295,"length",null))
return J.kS(new Array(a),b)},
kS:function(a,b){return J.fR(H.d(a,[b]))},
fR:function(a){H.jX(a)
a.fixed$length=Array
return a},
T:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dr.prototype
return J.dq.prototype}if(typeof a=="string")return J.bP.prototype
if(a==null)return J.ds.prototype
if(typeof a=="boolean")return J.fS.prototype
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.R)return a
return J.jP(a)},
d2:function(a){if(typeof a=="string")return J.bP.prototype
if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.R)return a
return J.jP(a)},
jO:function(a){if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.R)return a
return J.jP(a)},
kB:function(a){if(typeof a=="string")return J.bP.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.cK.prototype
return a},
bf:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.R)return a
return J.jP(a)},
a0:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).t(a,b)},
kH:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nY(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.d2(a).j(a,b)},
k4:function(a,b,c){return J.jO(a).l(a,b,c)},
me:function(a,b){return J.kB(a).F(a,b)},
k5:function(a,b,c){return J.bf(a).i_(a,b,c)},
mf:function(a,b,c,d){return J.bf(a).iZ(a,b,c,d)},
kI:function(a,b){return J.bf(a).X(a,b)},
mg:function(a,b){return J.kB(a).Y(a,b)},
k6:function(a,b){return J.jO(a).H(a,b)},
mh:function(a,b,c,d){return J.bf(a).jq(a,b,c,d)},
kJ:function(a,b){return J.jO(a).J(a,b)},
kK:function(a){return J.bf(a).gcg(a)},
d6:function(a){return J.T(a).gG(a)},
bC:function(a){return J.jO(a).gZ(a)},
aD:function(a){return J.d2(a).gk(a)},
mi:function(a,b){return J.bf(a).k5(a,b)},
ar:function(a){return J.T(a).i(a)},
a:function a(){},
fS:function fS(){},
ds:function ds(){},
du:function du(){},
hu:function hu(){},
cK:function cK(){},
bt:function bt(){},
aW:function aW(a){this.$ti=a},
ke:function ke(a){this.$ti=a},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dt:function dt(){},
dr:function dr(){},
dq:function dq(){},
bP:function bP(){}},P={
nb:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.nG()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.c_(new P.iS(u),1)).observe(t,{childList:true})
return new P.iR(u,t,s)}else if(self.setImmediate!=null)return P.nH()
return P.nI()},
nc:function(a){self.scheduleImmediate(H.c_(new P.iT(H.n(a,{func:1,ret:-1})),0))},
nd:function(a){self.setImmediate(H.c_(new P.iU(H.n(a,{func:1,ret:-1})),0))},
ne:function(a){P.kk(C.t,H.n(a,{func:1,ret:-1}))},
kk:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.a2(a.a,1000)
return P.nh(u<0?0:u,b)},
le:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.b2]})
u=C.f.a2(a.a,1000)
return P.ni(u<0?0:u,b)},
nh:function(a,b){var u=new P.eN(!0)
u.fj(a,b)
return u},
ni:function(a,b){var u=new P.eN(!1)
u.fk(a,b)
return u},
nf:function(a,b){var u,t,s
b.a=1
try{a.ez(new P.j2(b),new P.j3(b),null)}catch(s){u=H.aC(s)
t=H.c3(s)
P.o4(new P.j4(b,u,t))}},
lo:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$iaz")
if(u>=4){t=b.c2()
b.a=a.a
b.c=a.c
P.cN(b,t)}else{t=H.e(b.c,"$ib7")
b.a=2
b.c=a
a.dn(t)}},
cN:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.e(t.c,"$iak")
t=t.b
p=q.a
o=q.b
t.toString
P.jJ(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cN(u.a,b)}t=u.a
m=t.c
s.a=r
s.b=m
p=!r
if(p){o=b.c
o=(o&1)!==0||o===8}else o=!0
if(o){o=b.b
l=o.b
if(r){k=t.b
k.toString
k=k==l
if(!k)l.toString
else k=!0
k=!k}else k=!1
if(k){H.e(m,"$iak")
t=t.b
p=m.a
o=m.b
t.toString
P.jJ(null,null,t,p,o)
return}j=$.W
if(j!=l)$.W=l
else j=null
t=b.c
if(t===8)new P.j8(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.j7(s,b,m).$0()}else if((t&2)!==0)new P.j6(u,s,b).$0()
if(j!=null)$.W=j
t=s.b
if(!!J.T(t).$ici){if(t.a>=4){i=H.e(o.c,"$ib7")
o.c=null
b=o.be(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.lo(t,o)
return}}h=b.b
i=H.e(h.c,"$ib7")
h.c=null
b=h.be(i)
t=s.a
p=s.b
if(!t){H.z(p,H.t(h,0))
h.a=4
h.c=p}else{H.e(p,"$iak")
h.a=8
h.c=p}u.a=h
t=h}},
nB:function(a,b){if(H.f3(a,{func:1,args:[P.R,P.aq]}))return H.n(a,{func:1,ret:null,args:[P.R,P.aq]})
if(H.f3(a,{func:1,args:[P.R]}))return H.n(a,{func:1,ret:null,args:[P.R]})
throw H.c(P.k7(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
nA:function(){var u,t
for(;u=$.bY,u!=null;){$.d0=null
t=u.b
$.bY=t
if(t==null)$.d_=null
u.a.$0()}},
nF:function(){$.kv=!0
try{P.nA()}finally{$.d0=null
$.kv=!1
if($.bY!=null)$.kG().$1(P.lI())}},
lD:function(a){var u=new P.eb(H.n(a,{func:1,ret:-1}))
if($.bY==null){$.d_=u
$.bY=u
if(!$.kv)$.kG().$1(P.lI())}else{$.d_.b=u
$.d_=u}},
nE:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.bY
if(u==null){P.lD(a)
$.d0=$.d_
return}t=new P.eb(a)
s=$.d0
if(s==null){t.b=u
$.d0=t
$.bY=t}else{t.b=s.b
s.b=t
$.d0=t
if(t.b==null)$.d_=t}},
o4:function(a){var u,t
u={func:1,ret:-1}
H.n(a,u)
t=$.W
if(C.k===t){P.jL(null,null,C.k,a)
return}t.toString
P.jL(null,null,t,H.n(t.cc(a),u))},
ld:function(a,b){var u,t
u={func:1,ret:-1}
H.n(b,u)
t=$.W
if(t===C.k){t.toString
return P.kk(a,b)}return P.kk(a,H.n(t.cc(b),u))},
n1:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.b2]}
H.n(b,u)
t=$.W
if(t===C.k){t.toString
return P.le(a,b)}s=t.dE(b,P.b2)
$.W.toString
return P.le(a,H.n(s,u))},
jJ:function(a,b,c,d,e){var u={}
u.a=d
P.nE(new P.jK(u,e))},
lA:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.W
if(t===c)return d.$0()
$.W=c
u=t
try{t=d.$0()
return t}finally{$.W=u}},
lB:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.z(e,g)
t=$.W
if(t===c)return d.$1(e)
$.W=c
u=t
try{t=d.$1(e)
return t}finally{$.W=u}},
nC:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
t=$.W
if(t===c)return d.$2(e,f)
$.W=c
u=t
try{t=d.$2(e,f)
return t}finally{$.W=u}},
jL:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cc(d):c.j1(d,-1)
P.lD(d)},
iS:function iS(a){this.a=a},
iR:function iR(a,b,c){this.a=a
this.b=b
this.c=c},
iT:function iT(a){this.a=a},
iU:function iU(a){this.a=a},
eN:function eN(a){this.a=a
this.b=null
this.c=0},
js:function js(a,b){this.a=a
this.b=b},
jr:function jr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b7:function b7(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
az:function az(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
j1:function j1(a,b){this.a=a
this.b=b},
j5:function j5(a,b){this.a=a
this.b=b},
j2:function j2(a){this.a=a},
j3:function j3(a){this.a=a},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
j8:function j8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j9:function j9(a){this.a=a},
j7:function j7(a,b,c){this.a=a
this.b=b
this.c=c},
j6:function j6(a,b,c){this.a=a
this.b=b
this.c=c},
eb:function eb(a){this.a=a
this.b=null},
hW:function hW(){},
hY:function hY(a,b){this.a=a
this.b=b},
hZ:function hZ(a,b){this.a=a
this.b=b},
cz:function cz(){},
hX:function hX(){},
b2:function b2(){},
ak:function ak(a,b){this.a=a
this.b=b},
jC:function jC(){},
jK:function jK(a,b){this.a=a
this.b=b},
jg:function jg(){},
ji:function ji(a,b,c){this.a=a
this.b=b
this.c=c},
jh:function jh(a,b){this.a=a
this.b=b},
jj:function jj(a,b,c){this.a=a
this.b=b
this.c=c},
mz:function(a,b,c,d,e){return new H.aF([d,e])},
kT:function(a,b){return new H.aF([a,b])},
mB:function(a){return H.nR(a,new H.aF([null,null]))},
mC:function(a,b,c,d){return new P.jd([d])},
lr:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lq:function(a,b,c){var u=new P.je(a,b,[c])
u.c=a.e
return u},
mv:function(a,b,c){var u,t
if(P.kw(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.i])
t=$.d5()
C.a.h(t,a)
try{P.nz(a,u)}finally{if(0>=t.length)return H.f(t,-1)
t.pop()}t=P.lb(b,H.lO(u,"$ih"),", ")+c
return t.charCodeAt(0)==0?t:t},
kd:function(a,b,c){var u,t,s
if(P.kw(a))return b+"..."+c
u=new P.am(b)
t=$.d5()
C.a.h(t,a)
try{s=u
s.a=P.lb(s.a,a,", ")}finally{if(0>=t.length)return H.f(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kw:function(a){var u,t
for(u=0;t=$.d5(),u<t.length;++u)if(a===t[u])return!0
return!1},
nz:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.i],"$ab")
u=a.gZ(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.A())return
r=H.m(u.gK(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.A()){if(s<=5)return
if(0>=b.length)return H.f(b,-1)
q=b.pop()
if(0>=b.length)return H.f(b,-1)
p=b.pop()}else{o=u.gK(u);++s
if(!u.A()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.f(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gK(u);++s
for(;u.A();o=n,n=m){m=u.gK(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.f(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.m(o)
q=H.m(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
mA:function(a,b,c){var u=P.mz(null,null,null,b,c)
a.J(0,new P.h_(u,b,c))
return u},
kh:function(a){var u,t
u={}
if(P.kw(a))return"{...}"
t=new P.am("")
try{C.a.h($.d5(),a)
t.a+="{"
u.a=!0
J.kJ(a,new P.h4(u,t))
t.a+="}"}finally{u=$.d5()
if(0>=u.length)return H.f(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
jd:function jd(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cO:function cO(a){this.a=a
this.c=this.b=null},
je:function je(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
h_:function h_(a,b,c){this.a=a
this.b=b
this.c=c},
h0:function h0(){},
x:function x(){},
h3:function h3(){},
h4:function h4(a,b){this.a=a
this.b=b},
ag:function ag(){},
jt:function jt(){},
h5:function h5(){},
e5:function e5(a,b){this.a=a
this.$ti=b},
jk:function jk(){},
eq:function eq(){},
eT:function eT(){},
n5:function(a,b,c,d){H.l(b,"$ib",[P.o],"$ab")
if(b instanceof Uint8Array)return P.n6(!1,b,c,d)
return},
n6:function(a,b,c,d){var u,t,s
u=$.m7()
if(u==null)return
t=0===c
if(t&&!0)return P.ko(u,b)
s=b.length
d=P.by(c,d,s,null,null,null)
if(t&&d===s)return P.ko(u,b)
return P.ko(u,b.subarray(c,d))},
ko:function(a,b){if(P.n8(b))return
return P.n9(a,b)},
n9:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aC(t)}return},
n8:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
n7:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aC(t)}return},
nD:function(a,b,c){var u,t,s
H.l(a,"$ib",[P.o],"$ab")
for(u=J.d2(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bE()
if((s&127)!==s)return t-b}return c-b},
kL:function(a,b,c,d,e,f){if(C.f.b8(f,4)!==0)throw H.c(P.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a3("Invalid base64 padding, more than two '=' characters",a,b))},
fe:function fe(a){this.a=a},
ff:function ff(a){this.a=a},
bH:function bH(){},
bL:function bL(){},
fD:function fD(){},
iA:function iA(a){this.a=a},
iC:function iC(){},
jB:function jB(a){this.b=this.a=0
this.c=a},
iB:function iB(a){this.a=a},
jz:function jz(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
jA:function jA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f4:function(a,b,c){var u
H.n(b,{func:1,ret:P.o,args:[P.i]})
u=H.mR(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a3(a,null,null))},
ms:function(a){if(a instanceof H.cb)return a.i(0)
return"Instance of '"+H.bS(a)+"'"},
mD:function(a,b,c,d){var u,t
H.z(b,d)
u=J.mx(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.l(u,t,b)
return H.l(u,"$ib",[d],"$ab")},
kU:function(a,b,c){var u,t,s
u=[c]
t=H.d([],u)
for(s=J.bC(a);s.A();)C.a.h(t,H.z(s.gK(s),c))
if(b)return t
return H.l(J.fR(t),"$ib",u,"$ab")},
dR:function(a,b,c){var u,t
u=P.o
H.l(a,"$ih",[u],"$ah")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.l(a,"$iaW",[u],"$aaW")
t=a.length
c=P.by(b,c,t,null,null,null)
return H.l6(b>0||c<t?C.a.eT(a,b,c):a)}if(!!J.T(a).$ics)return H.mT(a,b,P.by(b,c,a.length,null,null,null))
return P.n_(a,b,c)},
n_:function(a,b,c){var u,t,s,r
H.l(a,"$ih",[P.o],"$ah")
if(b<0)throw H.c(P.ac(b,0,J.aD(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.ac(c,b,J.aD(a),null,null))
t=J.bC(a)
for(s=0;s<b;++s)if(!t.A())throw H.c(P.ac(b,0,s,null,null))
r=[]
if(u)for(;t.A();)r.push(t.gK(t))
else for(s=b;s<c;++s){if(!t.A())throw H.c(P.ac(c,b,s,null,null))
r.push(t.gK(t))}return H.l6(r)},
mW:function(a,b,c){return new H.fT(a,H.my(a,!1,!0,!1))},
lb:function(a,b,c){var u=J.bC(b)
if(!u.A())return a
if(c.length===0){do a+=H.m(u.gK(u))
while(u.A())}else{a+=H.m(u.gK(u))
for(;u.A();)a=a+c+H.m(u.gK(u))}return a},
kn:function(){var u=H.mJ()
if(u!=null)return P.n4(u,0,null)
throw H.c(P.D("'Uri.base' is not supported"))},
jy:function(a,b,c,d){var u,t,s,r,q,p
H.l(a,"$ib",[P.o],"$ab")
if(c===C.m){u=$.mc().b
if(typeof b!=="string")H.r(H.aB(b))
u=u.test(b)}else u=!1
if(u)return b
H.z(b,H.au(c,"bH",0))
t=c.gjp().ci(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dJ(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
mp:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mq:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dg:function(a){if(a>=10)return""+a
return"0"+a},
kQ:function(a,b,c,d,e,f){return new P.bo(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
fG:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ar(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ms(a)},
d7:function(a){return new P.aR(!1,null,null,a)},
k7:function(a,b,c){return new P.aR(!0,a,b,c)},
hy:function(a,b,c){return new P.bT(null,null,!0,a,b,"Value not in range")},
ac:function(a,b,c,d,e){return new P.bT(b,c,!0,a,d,"Invalid value")},
by:function(a,b,c,d,e,f){if(typeof a!=="number")return H.v(a)
if(0>a||a>c)throw H.c(P.ac(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.ac(b,a,c,"end",f))
return b}return c},
U:function(a,b,c,d,e){var u=H.af(e==null?J.aD(b):e)
return new P.fQ(b,u,!0,a,c,"Index out of range")},
D:function(a){return new P.it(a)},
ir:function(a){return new P.iq(a)},
bK:function(a){return new P.fn(a)},
u:function(a){return new P.ej(a)},
a3:function(a,b,c){return new P.fO(a,b,c)},
mE:function(a,b,c,d){var u,t
H.n(b,{func:1,ret:d,args:[P.o]})
u=H.d([],[d])
C.a.sk(u,a)
for(t=0;t<a;++t)C.a.l(u,t,b.$1(t))
return u},
c4:function(a){H.o2(a)},
n4:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.F(a,b+4)^58)*3|C.c.F(a,b)^100|C.c.F(a,b+1)^97|C.c.F(a,b+2)^116|C.c.F(a,b+3)^97)>>>0
if(t===0)return P.lg(b>0||c<c?C.c.p(a,b,c):a,5,null).geD()
else if(t===32)return P.lg(C.c.p(a,u,c),0,null).geD()}s=new Array(8)
s.fixed$length=Array
r=H.d(s,[P.o])
C.a.l(r,0,0)
s=b-1
C.a.l(r,1,s)
C.a.l(r,2,s)
C.a.l(r,7,s)
C.a.l(r,3,b)
C.a.l(r,4,b)
C.a.l(r,5,c)
C.a.l(r,6,c)
if(P.lC(a,b,c,0,r)>=14)C.a.l(r,7,c)
q=r[1]
if(typeof q!=="number")return q.kn()
if(q>=b)if(P.lC(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.B()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.U()
if(typeof m!=="number")return H.v(m)
if(l<m)m=l
if(typeof n!=="number")return n.U()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.U()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.U()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.c.a6(a,"..",n)))i=m>n+2&&C.c.a6(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.a6(a,"file",b)){if(p<=b){if(!C.c.a6(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.c.p(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.c.aT(a,n,m,"/");++m;++l;++c}else{a=C.c.p(a,b,n)+"/"+C.c.p(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.a6(a,"http",b)){if(s&&o+3===n&&C.c.a6(a,"80",o+1))if(b===0&&!0){a=C.c.aT(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.c.p(a,b,o)+C.c.p(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.c.a6(a,"https",b)){if(s&&o+4===n&&C.c.a6(a,"443",o+1))if(b===0&&!0){a=C.c.aT(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.c.p(a,b,o)+C.c.p(a,n,c)
q-=b
p-=b
o-=b
u=4+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="https"}else j=null
k=!0}}}else j=null
if(k){if(b>0||c<a.length){a=C.c.p(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.jl(a,q,p,o,n,m,l,j)}return P.nj(a,b,c,q,p,o,n,m,l,j)},
li:function(a,b){var u=P.i
return C.a.js(H.d(a.split("&"),[u]),P.kT(u,u),new P.iy(b),[P.C,P.i,P.i])},
n3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.iv(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.Y(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.f4(C.c.p(a,q,r),null,null)
if(typeof n!=="number")return n.bG()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.f(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.f4(C.c.p(a,q,c),null,null)
if(typeof n!=="number")return n.bG()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.f(t,p)
t[p]=n
return t},
lh:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.iw(a)
t=new P.ix(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.o])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.Y(a,r)
if(n===58){if(r===b){++r
if(C.c.Y(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaB(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.n3(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.f(j,g)
j[g]=0
d=g+1
if(d>=i)return H.f(j,d)
j[d]=0
g+=2}else{d=C.f.aL(f,8)
if(g<0||g>=i)return H.f(j,g)
j[g]=d
d=g+1
if(d>=i)return H.f(j,d)
j[d]=f&255
g+=2}}return j},
nj:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.nq(a,b,d)
else{if(d===b)P.cX(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nr(a,u,e-1):""
s=P.nn(a,e,f,!1)
if(typeof f!=="number")return f.B()
r=f+1
if(typeof g!=="number")return H.v(g)
q=r<g?P.np(P.f4(C.c.p(a,r,g),new P.ju(a,f),null),j):null}else{t=""
s=null
q=null}p=P.no(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.U()
o=h<i?P.ks(a,h+1,i,null):null
return new P.bW(j,t,s,q,p,o,i<c?P.nm(a,i+1,c):null)},
ls:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cX:function(a,b,c){throw H.c(P.a3(c,a,b))},
np:function(a,b){if(a!=null&&a===P.ls(b))return
return a},
nn:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.Y(a,b)===91){if(typeof c!=="number")return c.C()
u=c-1
if(C.c.Y(a,u)!==93)P.cX(a,b,"Missing end `]` to match `[` in host")
P.lh(a,b+1,u)
return C.c.p(a,b,c).toLowerCase()}if(typeof c!=="number")return H.v(c)
t=b
for(;t<c;++t)if(C.c.Y(a,t)===58){P.lh(a,b,c)
return"["+a+"]"}return P.nt(a,b,c)},
nt:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.v(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.Y(a,u)
if(q===37){p=P.ly(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.am("")
n=C.c.p(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.p(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.f(C.D,o)
o=(C.D[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.am("")
if(t<u){s.a+=C.c.p(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.f(C.o,o)
o=(C.o[o]&1<<(q&15))!==0}else o=!1
if(o)P.cX(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.Y(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.am("")
n=C.c.p(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.lt(q)
u+=l
t=u}}}}if(s==null)return C.c.p(a,b,c)
if(t<c){n=C.c.p(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nq:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lv(C.c.F(a,b)))P.cX(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.f(C.q,r)
r=(C.q[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cX(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.p(a,b,c)
return P.nk(t?a.toLowerCase():a)},
nk:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nr:function(a,b,c){return P.cY(a,b,c,C.Z,!1)},
no:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.cY(a,b,c,C.E,!0):C.u.kr(d,new P.jv(),P.i).w(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.a5(r,"/"))r="/"+r
return P.ns(r,e,f)},
ns:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.a5(a,"/"))return P.nu(a,!u||c)
return P.nv(a)},
ks:function(a,b,c,d){var u,t
u={}
H.l(d,"$iC",[P.i,null],"$aC")
if(a!=null){if(d!=null)throw H.c(P.d7("Both query and queryParameters specified"))
return P.cY(a,b,c,C.p,!0)}if(d==null)return
t=new P.am("")
u.a=""
d.J(0,new P.jw(new P.jx(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
nm:function(a,b,c){return P.cY(a,b,c,C.p,!0)},
ly:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.Y(a,b+1)
s=C.c.Y(a,u)
r=H.jS(t)
q=H.jS(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.aL(p,4)
if(u>=8)return H.f(C.r,u)
u=(C.r[u]&1<<(p&15))!==0}else u=!1
if(u)return H.dJ(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.p(a,b,b+3).toUpperCase()
return},
lt:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.o])
C.a.l(t,0,37)
C.a.l(t,1,C.c.F("0123456789ABCDEF",a>>>4))
C.a.l(t,2,C.c.F("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.o])
for(q=0;--r,r>=0;s=128){p=C.f.ih(a,6*r)&63|s
C.a.l(t,q,37)
C.a.l(t,q+1,C.c.F("0123456789ABCDEF",p>>>4))
C.a.l(t,q+2,C.c.F("0123456789ABCDEF",p&15))
q+=3}}return P.dR(t,0,null)},
cY:function(a,b,c,d,e){var u=P.lx(a,b,c,H.l(d,"$ib",[P.o],"$ab"),e)
return u==null?C.c.p(a,b,c):u},
lx:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.l(d,"$ib",[P.o],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.U()
if(typeof c!=="number")return H.v(c)
if(!(t<c))break
c$0:{q=C.c.Y(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.f(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.ly(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.f(C.o,p)
p=(C.o[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cX(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.Y(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.lt(q)}}if(r==null)r=new P.am("")
r.a+=C.c.p(a,s,t)
r.a+=H.m(o)
if(typeof n!=="number")return H.v(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.U()
if(s<c)r.a+=C.c.p(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
lw:function(a){if(C.c.a5(a,"."))return!0
return C.c.ec(a,"/.")!==-1},
nv:function(a){var u,t,s,r,q,p,o
if(!P.lw(a))return a
u=H.d([],[P.i])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.a0(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.f(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.w(u,"/")},
nu:function(a,b){var u,t,s,r,q,p
if(!P.lw(a))return!b?P.lu(a):a
u=H.d([],[P.i])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaB(u)!==".."){if(0>=u.length)return H.f(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.f(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaB(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.f(u,0)
C.a.l(u,0,P.lu(u[0]))}return C.a.w(u,"/")},
lu:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.lv(J.me(a,0)))for(t=1;t<u;++t){s=C.c.F(a,t)
if(s===58)return C.c.p(a,0,t)+"%3A"+C.c.at(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.f(C.q,r)
r=(C.q[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
nl:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.d7("Invalid URL encoding"))}}return u},
kt:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.F(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.p(a,b,c)
else q=new H.a6(C.c.p(a,b,c))}else{q=H.d([],[P.o])
for(r=a.length,t=b;t<c;++t){s=C.c.F(a,t)
if(s>127)throw H.c(P.d7("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.d7("Truncated URI"))
C.a.h(q,P.nl(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.l(q,"$ib",[P.o],"$ab")
return new P.iB(!1).ci(q)},
lv:function(a){var u=a|32
return 97<=u&&u<=122},
lg:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.d([b-1],[P.o])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.F(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a3("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a3("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.F(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaB(u)
if(q!==44||s!==o+7||!C.c.a6(a,"base64",o+1))throw H.c(P.a3("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.J.jG(0,a,n,t)
else{m=P.lx(a,n,t,C.p,!0)
if(m!=null)a=C.c.aT(a,n,t,m)}return new P.iu(a,u,c)},
nx:function(){var u,t,s,r,q
u=P.mE(22,new P.jG(),!0,P.O)
t=new P.jF(u)
s=new P.jH()
r=new P.jI()
q=H.e(t.$2(0,225),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(14,225),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(15,225),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(1,225),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(2,235),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(3,235),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(4,229),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(5,229),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(6,231),"$iO")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(7,231),"$iO")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.e(t.$2(8,8),"$iO"),"]",5)
q=H.e(t.$2(9,235),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(16,235),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(17,235),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(10,235),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(18,235),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(19,235),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(11,235),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(12,236),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.e(t.$2(13,237),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.e(t.$2(20,245),"$iO"),"az",21)
q=H.e(t.$2(21,245),"$iO")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
lC:function(a,b,c,d,e){var u,t,s,r,q
H.l(e,"$ib",[P.o],"$ab")
u=$.md()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.f(u,d)
s=u[d]
r=C.c.F(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.f(s,r)
q=s[r]
d=q&31
C.a.l(e,q>>>5,t)}return d},
X:function X(){},
as:function as(a,b){this.a=a
this.b=b},
y:function y(){},
bo:function bo(a){this.a=a},
fA:function fA(){},
fB:function fB(){},
bp:function bp(){},
dG:function dG(){},
aR:function aR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bT:function bT(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fQ:function fQ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
it:function it(a){this.a=a},
iq:function iq(a){this.a=a},
hS:function hS(a){this.a=a},
fn:function fn(a){this.a=a},
ht:function ht(){},
dQ:function dQ(){},
fv:function fv(a){this.a=a},
ej:function ej(a){this.a=a},
fO:function fO(a,b,c){this.a=a
this.b=b
this.c=c},
o:function o(){},
h:function h(){},
aV:function aV(){},
b:function b(){},
C:function C(){},
G:function G(){},
a2:function a2(){},
R:function R(){},
aq:function aq(){},
i:function i(){},
am:function am(a){this.a=a},
iy:function iy(a){this.a=a},
iv:function iv(a){this.a=a},
iw:function iw(a){this.a=a},
ix:function ix(a,b){this.a=a
this.b=b},
bW:function bW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
ju:function ju(a,b){this.a=a
this.b=b},
jv:function jv(){},
jx:function jx(a,b){this.a=a
this.b=b},
jw:function jw(a){this.a=a},
iu:function iu(a,b,c){this.a=a
this.b=b
this.c=c},
jG:function jG(){},
jF:function jF(a){this.a=a},
jH:function jH(){},
jI:function jI(){},
jl:function jl(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
iY:function iY(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
nM:function(a){var u,t
u=J.T(a)
if(!!u.$ib9){t=u.gdI(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.eS(a.data,a.height,a.width)},
nL:function(a){if(a instanceof P.eS)return{data:a.a,height:a.b,width:a.c}
return a},
be:function(a){var u,t,s,r,q
if(a==null)return
u=P.kT(P.i,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r){q=H.K(t[r])
u.l(0,q,a[q])}return u},
nK:function(a,b){var u={}
a.J(0,new P.jM(u))
return u},
jn:function jn(){},
jp:function jp(a,b){this.a=a
this.b=b},
eS:function eS(a,b,c){this.a=a
this.b=b
this.c=c},
jM:function jM(a){this.a=a},
jo:function jo(a,b){this.a=a
this.b=b},
fK:function fK(a,b){this.a=a
this.b=b},
fL:function fL(){},
fM:function fM(){},
jc:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ng:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jf:function jf(){},
a9:function a9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aY:function aY(){},
fW:function fW(){},
b0:function b0(){},
hr:function hr(){},
hx:function hx(){},
i_:function i_(){},
q:function q(){},
b3:function b3(){},
ic:function ic(){},
eo:function eo(){},
ep:function ep(){},
ey:function ey(){},
ez:function ez(){},
eJ:function eJ(){},
eK:function eK(){},
eQ:function eQ(){},
eR:function eR(){},
O:function O(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(a){this.a=a},
fd:function fd(){},
bD:function bD(){},
hs:function hs(){},
ec:function ec(){},
da:function da(){},
dm:function dm(){},
dK:function dK(){},
bU:function bU(){},
dN:function dN(){},
dV:function dV(){},
e3:function e3(){},
hR:function hR(){},
eF:function eF(){},
eG:function eG(){}},W={
k9:function(a,b){var u=document.createElement("canvas")
return u},
mr:function(a){H.e(a,"$ij")
return"wheel"},
mu:function(a){var u,t,s
t=document.createElement("input")
u=H.e(t,"$icl")
try{u.type=a}catch(s){H.aC(s)}return u},
jb:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lp:function(a,b,c,d){var u,t
u=W.jb(W.jb(W.jb(W.jb(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
aa:function(a,b,c,d,e){var u=W.lF(new W.j0(c),W.p)
if(u!=null&&!0)J.mf(a,b,u,!1)
return new W.j_(a,b,u,!1,[e])},
lF:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.W
if(u===C.k)return a
return u.dE(a,b)},
w:function w(){},
f5:function f5(){},
f7:function f7(){},
f8:function f8(){},
bE:function bE(){},
d9:function d9(){},
bF:function bF(){},
bG:function bG(){},
bm:function bm(){},
cd:function cd(){},
fr:function fr(){},
S:function S(){},
ce:function ce(){},
fs:function fs(){},
aT:function aT(){},
aU:function aU(){},
ft:function ft(){},
fu:function fu(){},
fw:function fw(){},
cf:function cf(){},
cg:function cg(){},
fx:function fx(){},
dh:function dh(){},
di:function di(){},
fy:function fy(){},
fz:function fz(){},
iW:function iW(a,b){this.a=a
this.b=b},
a1:function a1(){},
p:function p(){},
j:function j(){},
av:function av(){},
ch:function ch(){},
fJ:function fJ(){},
fN:function fN(){},
aE:function aE(){},
dn:function dn(){},
bO:function bO(){},
dp:function dp(){},
b9:function b9(){},
ck:function ck(){},
cl:function cl(){},
ca:function ca(){},
aX:function aX(){},
dw:function dw(){},
h1:function h1(){},
cp:function cp(){},
he:function he(){},
hf:function hf(){},
hg:function hg(a){this.a=a},
hh:function hh(){},
hi:function hi(a){this.a=a},
aH:function aH(){},
hj:function hj(){},
ae:function ae(){},
iV:function iV(a){this.a=a},
F:function F(){},
ct:function ct(){},
aI:function aI(){},
hv:function hv(){},
hE:function hE(){},
hF:function hF(a){this.a=a},
hH:function hH(){},
aJ:function aJ(){},
hP:function hP(){},
aK:function aK(){},
hQ:function hQ(){},
aL:function aL(){},
hU:function hU(){},
hV:function hV(a){this.a=a},
aw:function aw(){},
b1:function b1(){},
dS:function dS(){},
dT:function dT(){},
aM:function aM(){},
ax:function ax(){},
i1:function i1(){},
i2:function i2(){},
i7:function i7(){},
aN:function aN(){},
aO:function aO(){},
ia:function ia(){},
ib:function ib(){},
bz:function bz(){},
iz:function iz(){},
iM:function iM(){},
iN:function iN(){},
b6:function b6(){},
cM:function cM(){},
iX:function iX(){},
ee:function ee(){},
ja:function ja(){},
ev:function ev(){},
jm:function jm(){},
jq:function jq(){},
iZ:function iZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kr:function kr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j_:function j_(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
j0:function j0(a){this.a=a},
B:function B(){},
dl:function dl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ed:function ed(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
en:function en(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ew:function ew(){},
ex:function ex(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
cT:function cT(){},
cU:function cU(){},
eD:function eD(){},
eE:function eE(){},
eI:function eI(){},
eL:function eL(){},
eM:function eM(){},
cV:function cV(){},
cW:function cW(){},
eO:function eO(){},
eP:function eP(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){}},O={
ka:function(a){var u=new O.Y([a])
u.ba(a)
return u},
Y:function Y(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
co:function co(){this.b=this.a=null},
kV:function(){var u,t,s
u=new O.dB()
u.sfs(O.ka(V.ad))
u.e.b9(u.ghc(),u.ghe())
t=new O.aZ(u,"emission")
t.c=C.d
t.f=new V.Z(0,0,0)
u.f=t
t=new O.aZ(u,"ambient")
t.c=C.d
t.f=new V.Z(0,0,0)
u.r=t
t=new O.aZ(u,"diffuse")
t.c=C.d
t.f=new V.Z(0,0,0)
u.x=t
t=new O.aZ(u,"invDiffuse")
t.c=C.d
t.f=new V.Z(0,0,0)
u.y=t
t=new O.hd(u,"specular")
t.c=C.d
t.f=new V.Z(0,0,0)
t.ch=100
u.z=t
t=new O.ha(u,"bump")
t.c=C.d
u.Q=t
u.ch=null
t=new O.aZ(u,"reflect")
t.c=C.d
t.f=new V.Z(0,0,0)
u.cx=t
t=new O.hc(u,"refract")
t.c=C.d
t.f=new V.Z(0,0,0)
t.ch=1
u.cy=t
t=new O.h9(u,"alpha")
t.c=C.d
t.f=1
u.db=t
t=new D.dx()
t.ba(D.a7)
t.sfa(H.d([],[D.bn]))
t.sfd(H.d([],[D.dI]))
t.sfe(H.d([],[D.dP]))
t.sff(H.d([],[D.dX]))
t.sfg(H.d([],[D.dY]))
t.sfh(H.d([],[D.dZ]))
t.Q=null
t.ch=null
t.bI(t.gha(),t.ghI(),t.ghM())
u.dx=t
s=t.Q
if(s==null){s=D.Q()
t.Q=s
t=s}else t=s
t.h(0,u.gi2())
t=u.dx
s=t.ch
if(s==null){s=D.Q()
t.ch=s
t=s}else t=s
t.h(0,u.gbd())
u.dy=null
return u},
dB:function dB(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h9:function h9(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cn:function cn(){},
ha:function ha(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aZ:function aZ(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hc:function hc(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hd:function hd(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bV:function bV(){}},E={
fE:function(a,b,c,d,e,f){var u=new E.al()
u.a=d
u.b=!0
u.sf3(0,O.ka(E.al))
u.y.b9(u.gjH(),u.gjK())
u.z=null
u.Q=null
u.ch=null
u.cx=null
u.cy=null
u.db=null
u.dx=null
u.dy=null
u.fr=null
u.fx=null
u.sbJ(0,e)
u.scI(f)
u.saR(c)
return u},
mX:function(a,b){var u=new E.hA(a,b)
u.eZ(a,b)
return u},
n0:function(a,b,c,d,e){var u,t,s,r
u=J.T(a)
if(!!u.$ibF)return E.lc(a,!0,!0,!0,!1)
t=W.k9(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcg(a).h(0,t)
r=E.lc(t,!0,!0,!0,!1)
r.a=a
return r},
lc:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.e_()
t=H.e(C.n.cL(a,"webgl2",P.mB(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibU")
if(t==null)H.r(P.u("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.mX(t,a)
s=new T.i4(t)
s.b=H.af((t&&C.b).cN(t,3379))
s.c=H.af(C.b.cN(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.e6(a)
r=new X.fV()
r.c=new X.a4(!1,!1,!1)
r.shV(P.mC(null,null,null,P.o))
s.b=r
r=new X.hk(s)
r.f=0
r.r=V.bx()
r.x=V.bx()
r.Q=1
r.ch=1
s.c=r
r=new X.h2(s)
r.r=0
r.x=V.bx()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.i9(s)
r.e=0
r.f=V.bx()
r.r=V.bx()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sfH(H.d([],[[P.cz,P.R]]))
r=s.z
q=document
p=W.ae
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.aa(q,"contextmenu",H.n(s.ghm(),o),!1,p))
r=s.z
n=W.p
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.aa(a,"focus",H.n(s.ghs(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.aa(a,"blur",H.n(s.ghg(),m),!1,n))
r=s.z
l=W.aX
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.aa(q,"keyup",H.n(s.gbY(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.aa(q,"keydown",H.n(s.gbL(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.aa(a,"mousedown",H.n(s.ghy(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.aa(a,"mouseup",H.n(s.ghC(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.aa(a,"mousemove",H.n(s.ghA(),o),!1,p))
l=s.z
k=W.b6;(l&&C.a).h(l,W.aa(a,H.K(W.mr(a)),H.n(s.ghE(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.aa(q,"mousemove",H.n(s.gho(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.aa(q,"mouseup",H.n(s.ghq(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.aa(q,"pointerlockchange",H.n(s.ghG(),m),!1,n))
n=s.z
m=W.aO
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.aa(a,"touchstart",H.n(s.ghS(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.aa(a,"touchend",H.n(s.ghO(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.aa(a,"touchmove",H.n(s.ghQ(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.as(Date.now(),!1)
u.cy=0
u.dr()
return u},
fg:function fg(){},
al:function al(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hA:function hA(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hB:function hB(a){this.a=a},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
e_:function e_(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i6:function i6(a){this.a=a}},Z={
kq:function(a,b,c){var u
H.l(c,"$ib",[P.o],"$ab")
u=a.createBuffer()
C.b.an(a,b,u)
C.b.dG(a,b,new Int16Array(H.bX(c)),35044)
C.b.an(a,b,null)
return new Z.ea(b,u)},
ay:function(a){return new Z.b5(a)},
ea:function ea(a,b){this.a=a
this.b=b},
db:function db(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iO:function iO(a){this.a=a},
dc:function dc(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bq:function bq(a,b,c){this.a=a
this.b=b
this.c=c},
b5:function b5(a){this.a=a}},D={
Q:function(){var u=new D.bM()
u.saf(null)
u.saX(null)
u.c=null
u.d=0
return u},
fj:function fj(){},
bM:function bM(){var _=this
_.d=_.c=_.b=_.a=null},
fH:function fH(a){this.a=a},
fI:function fI(a){this.a=a},
A:function A(a){this.a=a
this.b=null},
br:function br(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bs:function bs(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
H:function H(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
kb:function(a,b){var u,t,s
u=new D.bn()
u.c=new V.Z(1,1,1)
u.a=V.na()
t=u.b
u.b=b
b.gq().h(0,u.gfb())
s=new D.H("mover",t,u.b,u,[U.a8])
s.b=!0
u.au(s)
if(!u.c.t(0,a)){t=u.c
u.c=a
s=new D.H("color",t,a,u,[V.Z])
s.b=!0
u.au(s)}return u},
bn:function bn(){var _=this
_.d=_.c=_.b=_.a=null},
a7:function a7(){},
dx:function dx(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dI:function dI(){},
dP:function dP(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){}},X={
cm:function(){var u=new X.dv()
u.ba(X.V)
u.e=null
u.f=null
u.r=!1
u.x=null
u.y=null
u.bI(u.gf4(),u.gf6(),u.gf8())
return u},
dd:function dd(a,b){this.a=a
this.b=b},
V:function V(a,b){this.a=a
this.b=b},
bQ:function bQ(a,b){this.c=a
this.a=b
this.b=null},
dv:function dv(){var _=this
_.d=_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
fV:function fV(){var _=this
_.d=_.c=_.b=_.a=null},
dz:function dz(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},
h2:function h2(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
bu:function bu(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},
hk:function hk(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hw:function hw(){},
e1:function e1(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},
i9:function i9(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
e6:function e6(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mt:function(a,b,c,d,e,f,g){var u,t
u=new X.fP()
t=new V.bI(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.l8
if(t==null){t=V.l7(0,0,1,1)
$.l8=t}u.r=t
return u},
de:function de(){},
fP:function fP(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dH:function dH(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dU:function dU(){},
nN:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=O.kV()
t=u.dx
s=U.fo(V.kj(1,-3,-1,null))
t.h(0,D.kb(new V.Z(0.4,0.4,1),s))
t=u.dx
s=U.fo(V.kj(0,1,0,null))
t.h(0,D.kb(new V.Z(0,0.2,0.1),s))
t=u.r
t.sa9(0,new V.Z(0.2,0.2,0.2))
t=u.x
t.sa9(0,new V.Z(0.7,0.7,0.7))
u.z.sa9(0,new V.Z(1,1,1))
t=u.z
if(t.c===C.d){t.c=C.i
t.bK()
t.c3(100)
s=t.a
s.a=null
s.W(null)}t.c3(10)
r=E.fE(null,!0,null,"",null,null)
r.scI(u)
q=F.la()
F.cZ(q,null,null,1,1,1,0,0,1)
F.cZ(q,null,null,1,1,0,1,0,3)
F.cZ(q,null,null,1,1,0,0,1,2)
F.cZ(q,null,null,1,1,-1,0,0,0)
F.cZ(q,null,null,1,1,0,-1,0,0)
F.cZ(q,null,null,1,1,0,0,-1,3)
q.aN()
for(t=[U.a8],s=[P.y],p=-60;p<=60;p+=12)for(o=p/10,n=-60;n<=60;n+=12){m=E.fE(null,!0,null,"",null,null)
m.sbJ(0,q)
l=n/10
k=new U.dM()
k.a=0
k.b=0
k.c=0
k.d=0
k.e=0
k.f=0
k.r=0
k.seG(o)
k.seo(0,l)
k.sev(0)
j=k.d
if(!(Math.abs(j-o)<$.I().a)){k.d=o
j=new D.H("deltaYaw",j,o,k,s)
j.b=!0
i=k.y
if(i!=null)i.D(j)}j=k.e
if(!(Math.abs(j-l)<$.I().a)){k.e=l
l=new D.H("deltaPitch",j,l,k,s)
l.b=!0
j=k.y
if(j!=null)j.D(l)}l=k.f
if(!(Math.abs(l-0.32)<$.I().a)){k.f=0.32
l=new D.H("deltaRoll",l,0.32,k,s)
l.b=!0
j=k.y
if(j!=null)j.D(l)}l=new U.cc()
l.sS(0,new V.ad(1,0,0,p,0,1,0,0,0,0,1,n,0,0,0,1))
m.saR(U.kR(H.d([k,l],t)))
l=r.y
k=H.t(l,0)
H.z(m,k)
j=[k]
if(l.c_(H.d([m],j))){i=l.a
h=i.length
C.a.h(i,m)
k=H.l(H.d([m],j),"$ih",[k],"$ah")
l=l.c
if(l!=null)l.$2(h,k)}}return r},
lP:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=V.mZ("Test 038",!0)
t=W.k9(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.l.X(u.a,t)
s=[P.i]
u.dB(H.d(["A test of basic 3D movement around a room similar to a first person view. ","A and D (left and right arrow keys) strifes left and right. ","W and S (up and down arrow keys) moves forward and backward. ","Q and E moves up and down. Mouse looks around with left mouse button pressed."],s))
u.iY(H.d(["options"],s))
u.dB(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=C.y.cM(s,"testCanvas")
if(r==null)H.r(P.u("Failed to find an element with the identifier, testCanvas."))
q=E.n0(r,!0,!0,!0,!1)
p=E.fE(null,!0,null,"",null,null)
u=p.y
o=q.f.jC("../resources/Grass.png",!0,!0)
n=U.fo(V.kZ(0,-3,0).n(0,V.b_(1000,0,0,0,0,1,0,0,0,0,1000,0,0,0,0,1)).n(0,V.ki(-1.5707963267948966)))
m=O.kV()
l=new V.aG(1000,0,0,0,1000,0,0,0,1)
if(!J.a0(m.b,l)){k=m.b
j=k==null&&!0
if(j)m.a=null
m.b=l
k=new D.H("texture2DMatrix",k,l,m,[V.aG])
k.b=!0
m.W(k)}m.dx.h(0,D.kb(new V.Z(1,1,1),U.fo(V.kj(1,-3,-1,null))))
k=m.r
k.sa9(0,new V.Z(0.5,0.5,0.5))
k=m.x
k.sa9(0,new V.Z(0.5,0.5,0.5))
m.r.sex(o)
m.x.sex(o)
k=E.fE(null,!0,null,"",null,null)
k.sbJ(0,F.nT(20,null,20))
k.saR(n)
k.scI(m)
u.h(0,k)
p.y.h(0,X.nN(q))
k=q.r
i=new U.e8()
u=X.cm()
u.h(0,new X.V(39,new X.a4(!1,!1,!1)))
u.h(0,new X.V(68,new X.a4(!1,!1,!1)))
j=i.ghu()
u.gaP().h(0,j)
i.a=u
u=X.cm()
u.h(0,new X.V(37,new X.a4(!1,!1,!1)))
u.h(0,new X.V(65,new X.a4(!1,!1,!1)))
u.gaP().h(0,j)
i.b=u
u=X.cm()
u.h(0,new X.V(81,new X.a4(!1,!1,!1)))
u.gaP().h(0,j)
i.c=u
u=X.cm()
u.h(0,new X.V(69,new X.a4(!1,!1,!1)))
u.gaP().h(0,j)
i.d=u
u=X.cm()
u.h(0,new X.V(40,new X.a4(!1,!1,!1)))
u.h(0,new X.V(83,new X.a4(!1,!1,!1)))
u.gaP().h(0,j)
i.e=u
u=X.cm()
u.h(0,new X.V(38,new X.a4(!1,!1,!1)))
u.h(0,new X.V(87,new X.a4(!1,!1,!1)))
u.gaP().h(0,j)
i.f=u
u=U.df()
u.sb0(30)
u.saz(0)
j=i.gaF()
u.gq().h(0,j)
i.r=u
u=U.df()
u.sb0(30)
u.saz(0)
u.gq().h(0,j)
i.x=u
u=U.df()
u.sb0(30)
u.saz(0)
u.gq().h(0,j)
i.y=u
i.z=null
i.Q=null
i.ch=60
i.cx=15
i.cy=0
i.db=null
i.dx=null
i.sfA(null)
i.a.am(k)
i.b.am(k)
i.c.am(k)
i.d.am(k)
i.e.am(k)
i.f.am(k)
u=q.r
h=new U.e7()
k=U.df()
k.scK(0,!0)
k.scB(6.283185307179586)
k.scC(0)
k.sa1(0,0)
k.sb0(100)
k.sT(0)
k.saz(0.5)
h.b=k
j=h.gaF()
k.gq().h(0,j)
k=U.df()
k.scK(0,!0)
k.scB(6.283185307179586)
k.scC(0)
k.sa1(0,0)
k.sb0(100)
k.sT(0)
k.saz(0.5)
h.c=k
k.gq().h(0,j)
h.d=null
h.e=!1
h.f=!1
h.r=!1
h.x=2.5
h.y=2.5
h.z=2
h.Q=4
h.cx=!1
h.ch=!1
h.cy=0
h.db=0
h.dx=null
h.dy=0
h.fr=null
h.fx=null
g=new X.a4(!1,!1,!1)
f=h.d
h.d=g
k=new D.H("modifiers",f,g,h,[X.a4])
k.b=!0
h.I(k)
k=h.f
if(k!==!1){h.f=!1
k=new D.H("invertX",k,!1,h,[P.X])
k.b=!0
h.I(k)}k=h.r
if(k!==!1){h.r=!1
k=new D.H("invertY",k,!1,h,[P.X])
k.b=!0
h.I(k)}h.am(u)
h.b.scB(1.5707963267948966)
h.b.scC(-1.5707963267948966)
h.b.saz(1)
h.c.saz(1)
h.b.scK(0,!1)
h.gq().h(0,new X.jY(i,h))
e=U.kR(H.d([i,h],[U.a8]))
u=new M.dj()
u.sfw(0,O.ka(E.al))
u.d.b9(u.ghi(),u.ghk())
u.e=null
u.f=null
u.r=null
u.x=null
d=X.mt(!0,!0,!1,null,2000,null,0)
c=new X.dH()
c.c=1.0471975511965976
c.d=0.1
c.e=2000
c.saR(null)
k=c.c
if(!(Math.abs(k-1.0471975511965976)<$.I().a)){c.c=1.0471975511965976
k=new D.H("fov",k,1.0471975511965976,c,[P.y])
k.b=!0
c.aI(k)}k=c.d
if(!(Math.abs(k-0.1)<$.I().a)){c.d=0.1
k=new D.H("near",k,0.1,c,[P.y])
k.b=!0
c.aI(k)}k=c.e
if(!(Math.abs(k-2000)<$.I().a)){c.e=2000
k=new D.H("far",k,2000,c,[P.y])
k.b=!0
c.aI(k)}k=u.a
if(k!==c){if(k!=null)k.gq().a_(0,u.gaG())
f=u.a
u.a=c
c.gq().h(0,u.gaG())
k=new D.H("camera",f,u.a,u,[X.de])
k.b=!0
u.aH(k)}k=u.b
if(k!==d){if(k!=null)k.gq().a_(0,u.gaG())
f=u.b
u.b=d
d.gq().h(0,u.gaG())
k=new D.H("target",f,u.b,u,[X.dU])
k.b=!0
u.aH(k)}u.d.h(0,p)
u.a.saR(e)
k=q.d
if(k!==u){if(k!=null)k.gq().a_(0,q.gcS())
q.d=u
u.gq().h(0,q.gcS())
q.cT()}u=new V.fk("options",!0)
s=C.y.cM(s,"options")
u.c=s
if(s==null)H.r("Failed to find options for CheckGroup")
u.sfv(H.d([],[W.ca]))
u.iX(0,"Mouse Locking",new X.jZ(q),!1)
V.o5(q)},
jY:function jY(a,b){this.a=a
this.b=b},
jZ:function jZ(a){this.a=a}},V={
k3:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.j.b8(a-b,u)
return(a<0?a+u:a)+b},
N:function(a,b,c){if(a==null)return C.c.ac("null",c)
return C.c.ac(C.j.eA(Math.abs(a-0)<$.I().a?0:a,b),c+b+1)},
c1:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.y],"$ab")
u=H.d([],[P.i])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.E)(a),++r){q=V.N(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.f(u,p)
C.a.l(u,p,C.c.ac(u[p],s))}return u},
kE:function(a,b){return C.j.ke(Math.pow(b,C.Q.cs(Math.log(H.nJ(a))/Math.log(b))))},
mG:function(){var u=$.kW
if(u==null){u=new V.aG(1,0,0,0,1,0,0,0,1)
$.kW=u}return u},
dC:function(){var u=$.l_
if(u==null){u=V.b_(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.l_=u}return u},
b_:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ad(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kZ:function(a,b,c){return V.b_(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
ki:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.b_(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
kY:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.b_(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
kj:function(a,b,c,d){d=V.ln()
return V.kX(V.l4(),d,new V.P(a,b,c))},
kX:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.E(0,Math.sqrt(c.L(c)))
t=b.b_(u)
s=t.E(0,Math.sqrt(t.L(t)))
r=u.b_(s)
q=new V.P(a.a,a.b,a.c)
p=s.R(0).L(q)
o=r.R(0).L(q)
n=u.R(0).L(q)
return V.b_(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bx:function(){var u=$.l3
if(u==null){u=new V.ah(0,0)
$.l3=u}return u},
l4:function(){var u=$.cu
if(u==null){u=new V.ai(0,0,0)
$.cu=u}return u},
l7:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dL(a,b,c,d)},
e9:function(){var u=$.lm
if(u==null){u=new V.P(0,0,0)
$.lm=u}return u},
ln:function(){var u=$.ll
if(u==null){u=new V.P(0,1,0)
$.ll=u}return u},
na:function(){var u=$.iD
if(u==null){u=new V.P(0,0,1)
$.iD=u}return u},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
bI:function bI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fF:function fF(a){this.a=a},
aG:function aG(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ad:function ad(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ah:function ah(a,b){this.a=a
this.b=b},
ai:function ai(a,b,c){this.a=a
this.b=b
this.c=c},
cv:function cv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dL:function dL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a5:function a5(a,b){this.a=a
this.b=b},
P:function P(a,b,c){this.a=a
this.b=b
this.c=c},
aj:function(a){var u=new V.hI()
u.f_(a)
return u},
f6:function f6(){},
bb:function bb(){},
dA:function dA(){},
bd:function bd(){this.a=null},
hI:function hI(){this.a=null},
cy:function cy(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e0:function e0(a,b,c){this.a=a
this.b=b
this.c=c},
cB:function cB(a,b){this.a=a
this.b=b
this.c=null},
i8:function i8(){this.c=this.b=this.a=null},
cC:function cC(a){this.b=a
this.a=this.c=null},
o5:function(a){P.n1(C.N,new V.k1(a))},
mZ:function(a,b){var u=new V.hM()
u.f1(a,!0)
return u},
fk:function fk(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fl:function fl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k1:function k1(a){this.a=a},
hM:function hM(){this.b=this.a=null},
hO:function hO(a){this.a=a},
hN:function hN(a){this.a=a}},U={
df:function(){var u=new U.fm()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
fo:function(a){var u=new U.cc()
u.sS(0,a)
return u},
kR:function(a){var u=new U.cj()
u.ba(U.a8)
u.b9(u.gh8(),u.ghK())
u.c7(0,a)
u.e=null
u.f=V.dC()
u.r=0
return u},
fm:function fm(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cc:function cc(){this.b=this.a=null},
cj:function cj(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a8:function a8(){},
dM:function dM(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e7:function e7(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e8:function e8(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dj:function dj(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
mF:function(a,b){var u,t
u=a.ah
t=new A.h8(b,u)
t.f0(b,u)
t.eY(a,b)
return t},
kl:function(a,b,c,d,e){var u=new A.ih(a,b,c,e)
u.f=d
u.siz(P.mD(d,0,!1,P.o))
return u},
d8:function d8(a,b,c){this.a=a
this.b=b
this.c=c},
f9:function f9(a){this.a=a},
h8:function h8(a,b){var _=this
_.bj=_.dL=_.bi=_.ah=_.ao=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.e0=_.cm=_.e_=_.bw=_.dZ=_.dY=_.bv=_.bu=_.dX=_.dW=_.bt=_.bs=_.br=_.dV=_.dU=_.bq=_.dT=_.dS=_.bp=_.dR=_.dQ=_.bo=_.bn=_.dP=_.dO=_.bm=_.bl=_.dN=_.dM=_.bk=null
_.cr=_.e4=_.cq=_.e3=_.cp=_.e2=_.co=_.e1=_.cn=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hb:function hb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ao=b3
_.ah=b4
_.bi=b5},
cD:function cD(a,b,c){this.a=a
this.b=b
this.c=c},
cH:function cH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cF:function cF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cI:function cI(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j},
cG:function cG(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j},
cJ:function cJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.cy=n},
cx:function cx(){},
bJ:function bJ(a,b){this.a=a
this.b=b},
e2:function e2(){},
io:function io(a){this.a=a},
M:function M(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ij:function ij(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ik:function ik(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
im:function im(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ih:function ih(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
a_:function a_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ii:function ii(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
L:function L(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
il:function il(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ip:function ip(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cE:function cE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
at:function at(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
jE:function(a){var u,t
u=a.a>0?1:0
if(a.b>0)u+=2
t=a.c
if(typeof t!=="number")return t.bG()
return(t>0?u+4:u)*2},
cZ:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.P(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.P(o+a3,n+a1,m+a2)
u.b=l
k=new V.P(o-a3,n-a1,m-a2)
u.c=k
j=new V.P(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.jE(t)
f=F.jE(u.b)
e=F.lU(d,a0,new F.jD(u,F.jE(u.c),F.jE(u.d),f,g,c),b)
if(e!=null)a.jF(e)},
nT:function(a,b,c){var u={}
u.a=b
u.a=new F.jQ()
return F.lU(c,a,new F.jR(u),null)},
lU:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.aQ,P.y,P.y]})
if(a<1)return
if(b<1)return
u=F.la()
t=H.d([],[F.aQ])
P.c4("FLAG A\n")
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.kp(null,null,new V.bI(p,0,0,1),null,null,new V.ah(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cj(d))}P.c4("FLAG B\n")
for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.kp(null,null,new V.bI(j,i,h,1),null,null,new V.ah(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cj(d))}}P.c4("FLAG C\n")
u.d.j_(a+1,b+1,t)
P.c4("FLAG D\n")
return u},
dk:function(a,b,c){var u,t
u=new F.ab()
t=a.a
if(t==null)H.r(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.r(P.u("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a3()
return u},
la:function(){var u,t
u=new F.dO()
t=new F.iE(u)
t.b=!1
t.siA(H.d([],[F.aQ]))
u.a=t
t=new F.hL(u)
t.sc0(H.d([],[F.bw]))
u.b=t
t=new F.hK(u)
t.sfV(H.d([],[F.ba]))
u.c=t
t=new F.hJ(u)
t.sfI(H.d([],[F.ab]))
u.d=t
u.e=null
return u},
kp:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.aQ()
t=new F.iJ(u)
t.sc0(H.d([],[F.bw]))
u.b=t
t=new F.iI(u)
s=[F.ba]
t.sfW(H.d([],s))
t.sfX(H.d([],s))
u.c=t
t=new F.iF(u)
s=[F.ab]
t.sfJ(H.d([],s))
t.sfK(H.d([],s))
t.sfL(H.d([],s))
u.d=t
h=$.m8()
u.e=0
t=$.bj()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bi().a)!==0?e:null
u.x=(s&$.bh().a)!==0?b:null
u.y=(s&$.bk().a)!==0?f:null
u.z=(s&$.bl().a)!==0?g:null
u.Q=(s&$.m9().a)!==0?c:null
u.ch=(s&$.c7().a)!==0?i:0
u.cx=(s&$.bg().a)!==0?a:null
return u},
jD:function jD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jQ:function jQ(){},
jR:function jR(a){this.a=a},
ab:function ab(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ba:function ba(){this.b=this.a=null},
bw:function bw(){this.a=null},
dO:function dO(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hJ:function hJ(a){this.a=a
this.b=null},
hK:function hK(a){this.a=a
this.b=null},
hL:function hL(a){this.a=a
this.b=null},
aQ:function aQ(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iL:function iL(a){this.a=a},
iK:function iK(a){this.a=a},
iE:function iE(a){this.a=a
this.c=this.b=null},
iF:function iF(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iG:function iG(a,b){this.a=a
this.b=b},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(a){this.a=a
this.c=this.b=null},
iJ:function iJ(a){this.a=a
this.b=null}},T={cA:function cA(){},dW:function dW(){},i3:function i3(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},i4:function i4(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},i5:function i5(a,b,c,d,e,f,g){var _=this
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
H.kf.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gG:function(a){return H.cw(a)},
i:function(a){return"Instance of '"+H.bS(a)+"'"}}
J.fS.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iX:1}
J.ds.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0},
$iG:1}
J.du.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.hu.prototype={}
J.cK.prototype={}
J.bt.prototype={
i:function(a){var u=a[$.lX()]
if(u==null)return this.eV(a)
return"JavaScript function for "+H.m(J.ar(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ikc:1}
J.aW.prototype={
h:function(a,b){H.z(b,H.t(a,0))
if(!!a.fixed$length)H.r(P.D("add"))
a.push(b)},
a_:function(a,b){var u
if(!!a.fixed$length)H.r(P.D("remove"))
for(u=0;u<a.length;++u)if(J.a0(a[u],b)){a.splice(u,1)
return!0}return!1},
c7:function(a,b){var u,t
H.l(b,"$ih",[H.t(a,0)],"$ah")
if(!!a.fixed$length)H.r(P.D("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.E)(b),++t)a.push(b[t])},
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bK(a))}},
w:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.l(u,t,H.m(a[t]))
return u.join(b)},
jz:function(a){return this.w(a,"")},
js:function(a,b,c,d){var u,t,s
H.z(b,d)
H.n(c,{func:1,ret:d,args:[d,H.t(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bK(a))}return t},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
eT:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ac(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ac(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.t(a,0)])
return H.d(a.slice(b,c),[H.t(a,0)])},
gaB:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.mw())},
aa:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a0(a[u],b))return!0
return!1},
i:function(a){return P.kd(a,"[","]")},
gZ:function(a){return new J.ap(a,a.length,0,[H.t(a,0)])},
gG:function(a){return H.cw(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.r(P.D("set length"))
if(b<0)throw H.c(P.ac(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.c0(a,b))
return a[b]},
l:function(a,b,c){H.z(c,H.t(a,0))
if(!!a.immutable$list)H.r(P.D("indexed set"))
if(b>=a.length||b<0)throw H.c(H.c0(a,b))
a[b]=c},
$ih:1,
$ib:1}
J.ke.prototype={}
J.ap.prototype={
gK:function(a){return this.d},
A:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.E(u))
s=this.c
if(s>=t){this.sd8(null)
return!1}this.sd8(u[s]);++this.c
return!0},
sd8:function(a){this.d=H.z(a,H.t(this,0))},
$iaV:1}
J.dt.prototype={
ke:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.D(""+a+".toInt()"))},
cs:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.D(""+a+".floor()"))},
ai:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.D(""+a+".round()"))},
eA:function(a,b){var u,t
if(b>20)throw H.c(P.ac(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
b5:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ac(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.Y(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.r(P.D("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.f(t,1)
u=t[1]
if(3>=s)return H.f(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.n("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
b8:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eX:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.du(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.du(a,b)},
du:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.D("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
aL:function(a,b){var u
if(a>0)u=this.dt(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ih:function(a,b){if(b<0)throw H.c(H.aB(b))
return this.dt(a,b)},
dt:function(a,b){return b>31?0:a>>>b},
$iy:1,
$ia2:1}
J.dr.prototype={$io:1}
J.dq.prototype={}
J.bP.prototype={
Y:function(a,b){if(b<0)throw H.c(H.c0(a,b))
if(b>=a.length)H.r(H.c0(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.c(H.c0(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.c(P.k7(b,null,null))
return a+b},
aT:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.aB(b))
c=P.by(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a6:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.aB(c))
if(typeof c!=="number")return c.U()
if(c<0||c>a.length)throw H.c(P.ac(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a5:function(a,b){return this.a6(a,b,0)},
p:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.aB(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.U()
if(b<0)throw H.c(P.hy(b,null,null))
if(b>c)throw H.c(P.hy(b,null,null))
if(c>a.length)throw H.c(P.hy(c,null,null))
return a.substring(b,c)},
at:function(a,b){return this.p(a,b,null)},
n:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.L)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
jP:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.n(c,u)+a},
ac:function(a,b){return this.jP(a,b," ")},
jQ:function(a,b,c){var u=b-a.length
if(u<=0)return a
return a+this.n(c,u)},
ed:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ac(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
ec:function(a,b){return this.ed(a,b,0)},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$il1:1,
$ii:1}
H.a6.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.c.Y(this.a,b)},
$acL:function(){return[P.o]},
$ax:function(){return[P.o]},
$ah:function(){return[P.o]},
$ab:function(){return[P.o]}}
H.fC.prototype={}
H.dy.prototype={
gK:function(a){return this.d},
A:function(){var u,t,s,r
u=this.a
t=J.d2(u)
s=t.gk(u)
if(this.b!==s)throw H.c(P.bK(u))
r=this.c
if(r>=s){this.saV(null)
return!1}this.saV(t.H(u,r));++this.c
return!0},
saV:function(a){this.d=H.z(a,H.t(this,0))},
$iaV:1}
H.h6.prototype={
gZ:function(a){return new H.h7(J.bC(this.a),this.b,this.$ti)},
gk:function(a){return J.aD(this.a)},
H:function(a,b){return this.b.$1(J.k6(this.a,b))},
$ah:function(a,b){return[b]}}
H.h7.prototype={
A:function(){var u=this.b
if(u.A()){this.saV(this.c.$1(u.gK(u)))
return!0}this.saV(null)
return!1},
gK:function(a){return this.a},
saV:function(a){this.a=H.z(a,H.t(this,1))},
$aaV:function(a,b){return[b]}}
H.iP.prototype={
gZ:function(a){return new H.iQ(J.bC(this.a),this.b,this.$ti)}}
H.iQ.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(t.$1(u.gK(u)))return!0
return!1},
gK:function(a){var u=this.a
return u.gK(u)}}
H.bN.prototype={}
H.cL.prototype={
l:function(a,b,c){H.z(c,H.au(this,"cL",0))
throw H.c(P.D("Cannot modify an unmodifiable list"))}}
H.e4.prototype={}
H.fp.prototype={
i:function(a){return P.kh(this)},
l:function(a,b,c){H.z(b,H.t(this,0))
H.z(c,H.t(this,1))
return H.mo()},
$iC:1}
H.fq.prototype={
gk:function(a){return this.a},
bh:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bh(0,b))return
return this.d9(b)},
d9:function(a){return this.b[H.K(a)]},
J:function(a,b){var u,t,s,r,q
u=H.t(this,1)
H.n(b,{func:1,ret:-1,args:[H.t(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.z(this.d9(q),u))}}}
H.hz.prototype={}
H.id.prototype={
ab:function(a){var u,t,s
u=new RegExp(this.a).exec(a)
if(u==null)return
t=Object.create(null)
s=this.b
if(s!==-1)t.arguments=u[s+1]
s=this.c
if(s!==-1)t.argumentsExpr=u[s+1]
s=this.d
if(s!==-1)t.expr=u[s+1]
s=this.e
if(s!==-1)t.method=u[s+1]
s=this.f
if(s!==-1)t.receiver=u[s+1]
return t}}
H.hq.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fU.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.m(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.m(this.a)+")"}}
H.is.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.k2.prototype={
$1:function(a){if(!!J.T(a).$ibp)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.eH.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iaq:1}
H.cb.prototype={
i:function(a){return"Closure '"+H.bS(this).trim()+"'"},
$ikc:1,
gkm:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i0.prototype={}
H.hT.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c6(u)+"'"}}
H.c8.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c8))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gG:function(a){var u,t
u=this.c
if(u==null)t=H.cw(this.a)
else t=typeof u!=="object"?J.d6(u):H.cw(u)
return(t^H.cw(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.bS(u)+"'")}}
H.ig.prototype={
i:function(a){return this.a}}
H.fi.prototype={
i:function(a){return this.a}}
H.hG.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.aF.prototype={
gk:function(a){return this.a},
gap:function(a){return new H.fY(this,[H.t(this,0)])},
bh:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.d5(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.d5(t,b)}else return this.jw(b)},
jw:function(a){var u=this.d
if(u==null)return!1
return this.cv(this.bS(u,this.cu(a)),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bb(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bb(r,b)
s=t==null?null:t.b
return s}else return this.jx(b)},
jx:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bS(u,this.cu(a))
s=this.cv(t,a)
if(s<0)return
return t[s].b},
l:function(a,b,c){var u,t
H.z(b,H.t(this,0))
H.z(c,H.t(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.bV()
this.b=u}this.cY(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.bV()
this.c=t}this.cY(t,b,c)}else this.jy(b,c)},
jy:function(a,b){var u,t,s,r
H.z(a,H.t(this,0))
H.z(b,H.t(this,1))
u=this.d
if(u==null){u=this.bV()
this.d=u}t=this.cu(a)
s=this.bS(u,t)
if(s==null)this.c4(u,t,[this.bW(a,b)])
else{r=this.cv(s,a)
if(r>=0)s[r].b=b
else s.push(this.bW(a,b))}},
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.bK(this))
u=u.c}},
cY:function(a,b,c){var u
H.z(b,H.t(this,0))
H.z(c,H.t(this,1))
u=this.bb(a,b)
if(u==null)this.c4(a,b,this.bW(b,c))
else u.b=c},
bW:function(a,b){var u,t
u=new H.fX(H.z(a,H.t(this,0)),H.z(b,H.t(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
cu:function(a){return J.d6(a)&0x3ffffff},
cv:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a0(a[t].a,b))return t
return-1},
i:function(a){return P.kh(this)},
bb:function(a,b){return a[b]},
bS:function(a,b){return a[b]},
c4:function(a,b,c){a[b]=c},
fE:function(a,b){delete a[b]},
d5:function(a,b){return this.bb(a,b)!=null},
bV:function(){var u=Object.create(null)
this.c4(u,"<non-identifier-key>",u)
this.fE(u,"<non-identifier-key>")
return u}}
H.fX.prototype={}
H.fY.prototype={
gk:function(a){return this.a.a},
gZ:function(a){var u,t
u=this.a
t=new H.fZ(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fZ.prototype={
gK:function(a){return this.d},
A:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bK(u))
else{u=this.c
if(u==null){this.scX(null)
return!1}else{this.scX(u.a)
this.c=this.c.c
return!0}}},
scX:function(a){this.d=H.z(a,H.t(this,0))},
$iaV:1}
H.jT.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.jU.prototype={
$2:function(a,b){return this.a(a,b)},
$S:36}
H.jV.prototype={
$1:function(a){return this.a(H.K(a))},
$S:46}
H.fT.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$il1:1,
$imV:1}
H.cq.prototype={$icq:1}
H.bv.prototype={$ibv:1,$in2:1}
H.dD.prototype={
gk:function(a){return a.length},
$iJ:1,
$aJ:function(){}}
H.cr.prototype={
j:function(a,b){H.b8(b,a,a.length)
return a[b]},
l:function(a,b,c){H.nP(c)
H.b8(b,a,a.length)
a[b]=c},
$abN:function(){return[P.y]},
$ax:function(){return[P.y]},
$ih:1,
$ah:function(){return[P.y]},
$ib:1,
$ab:function(){return[P.y]}}
H.dE.prototype={
l:function(a,b,c){H.af(c)
H.b8(b,a,a.length)
a[b]=c},
$abN:function(){return[P.o]},
$ax:function(){return[P.o]},
$ih:1,
$ah:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
H.hl.prototype={
j:function(a,b){H.b8(b,a,a.length)
return a[b]}}
H.hm.prototype={
j:function(a,b){H.b8(b,a,a.length)
return a[b]}}
H.hn.prototype={
j:function(a,b){H.b8(b,a,a.length)
return a[b]}}
H.ho.prototype={
j:function(a,b){H.b8(b,a,a.length)
return a[b]}}
H.hp.prototype={
j:function(a,b){H.b8(b,a,a.length)
return a[b]}}
H.dF.prototype={
gk:function(a){return a.length},
j:function(a,b){H.b8(b,a,a.length)
return a[b]},
$ios:1}
H.cs.prototype={
gk:function(a){return a.length},
j:function(a,b){H.b8(b,a,a.length)
return a[b]},
$ics:1,
$iO:1}
H.cP.prototype={}
H.cQ.prototype={}
H.cR.prototype={}
H.cS.prototype={}
P.iS.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:19}
P.iR.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:33}
P.iT.prototype={
$0:function(){this.a.$0()},
$S:2}
P.iU.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eN.prototype={
fj:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.c_(new P.js(this,b),0),a)
else throw H.c(P.D("`setTimeout()` not found."))},
fk:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.c_(new P.jr(this,a,Date.now(),b),0),a)
else throw H.c(P.D("Periodic timer."))},
$ib2:1}
P.js.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.jr.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.eX(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.b7.prototype={
jE:function(a){if(this.c!==6)return!0
return this.b.b.cH(H.n(this.d,{func:1,ret:P.X,args:[P.R]}),a.a,P.X,P.R)},
jv:function(a){var u,t,s,r
u=this.e
t=P.R
s={futureOr:1,type:H.t(this,1)}
r=this.b.b
if(H.f3(u,{func:1,args:[P.R,P.aq]}))return H.kA(r.k8(u,a.a,a.b,null,t,P.aq),s)
else return H.kA(r.cH(H.n(u,{func:1,args:[P.R]}),a.a,null,t),s)}}
P.az.prototype={
ez:function(a,b,c){var u,t,s,r
u=H.t(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.W
if(t!==C.k){t.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.nB(b,t)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.az(0,$.W,[c])
r=b==null?1:3
this.cZ(new P.b7(s,r,a,b,[u,c]))
return s},
kd:function(a,b){return this.ez(a,null,b)},
cZ:function(a){var u,t
u=this.a
if(u<=1){a.a=H.e(this.c,"$ib7")
this.c=a}else{if(u===2){t=H.e(this.c,"$iaz")
u=t.a
if(u<4){t.cZ(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.jL(null,null,u,H.n(new P.j1(this,a),{func:1,ret:-1}))}},
dn:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.e(this.c,"$ib7")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.e(this.c,"$iaz")
t=p.a
if(t<4){p.dn(a)
return}this.a=t
this.c=p.c}u.a=this.be(a)
t=this.b
t.toString
P.jL(null,null,t,H.n(new P.j5(u,this),{func:1,ret:-1}))}},
c2:function(){var u=H.e(this.c,"$ib7")
this.c=null
return this.be(u)},
be:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d1:function(a){var u,t,s
u=H.t(this,0)
H.kA(a,{futureOr:1,type:u})
t=this.$ti
if(H.d1(a,"$ici",t,"$aci"))if(H.d1(a,"$iaz",t,null))P.lo(a,this)
else P.nf(a,this)
else{s=this.c2()
H.z(a,u)
this.a=4
this.c=a
P.cN(this,s)}},
d2:function(a,b){var u
H.e(b,"$iaq")
u=this.c2()
this.a=8
this.c=new P.ak(a,b)
P.cN(this,u)},
$ici:1}
P.j1.prototype={
$0:function(){P.cN(this.a,this.b)},
$S:2}
P.j5.prototype={
$0:function(){P.cN(this.b,this.a.a)},
$S:2}
P.j2.prototype={
$1:function(a){var u=this.a
u.a=0
u.d1(a)},
$S:19}
P.j3.prototype={
$2:function(a,b){H.e(b,"$iaq")
this.a.d2(a,b)},
$1:function(a){return this.$2(a,null)},
$S:26}
P.j4.prototype={
$0:function(){this.a.d2(this.b,this.c)},
$S:2}
P.j8.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.ew(H.n(r.d,{func:1}),null)}catch(q){t=H.aC(q)
s=H.c3(q)
if(this.d){r=H.e(this.a.a.c,"$iak").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.e(this.a.a.c,"$iak")
else p.b=new P.ak(t,s)
p.a=!0
return}if(!!J.T(u).$ici){if(u instanceof P.az&&u.a>=4){if(u.a===8){r=this.b
r.b=H.e(u.c,"$iak")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.kd(new P.j9(o),null)
r.a=!1}},
$S:3}
P.j9.prototype={
$1:function(a){return this.a},
$S:50}
P.j7.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.t(s,0)
q=H.z(this.c,r)
p=H.t(s,1)
this.a.b=s.b.b.cH(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aC(o)
t=H.c3(o)
s=this.a
s.b=new P.ak(u,t)
s.a=!0}},
$S:3}
P.j6.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.e(this.a.a.c,"$iak")
r=this.c
if(r.jE(u)&&r.e!=null){q=this.b
q.b=r.jv(u)
q.a=!1}}catch(p){t=H.aC(p)
s=H.c3(p)
r=H.e(this.a.a.c,"$iak")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ak(t,s)
n.a=!0}},
$S:3}
P.eb.prototype={}
P.hW.prototype={
gk:function(a){var u,t,s,r
u={}
t=new P.az(0,$.W,[P.o])
u.a=0
s=H.t(this,0)
r=H.n(new P.hY(u,this),{func:1,ret:-1,args:[s]})
H.n(new P.hZ(u,t),{func:1,ret:-1})
W.aa(this.a,this.b,r,!1,s)
return t}}
P.hY.prototype={
$1:function(a){H.z(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.t(this.b,0)]}}}
P.hZ.prototype={
$0:function(){this.b.d1(this.a.a)},
$S:2}
P.cz.prototype={}
P.hX.prototype={}
P.b2.prototype={}
P.ak.prototype={
i:function(a){return H.m(this.a)},
$ibp:1}
P.jC.prototype={$ioG:1}
P.jK.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dG()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:2}
P.jg.prototype={
k9:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
try{if(C.k===$.W){a.$0()
return}P.lA(null,null,this,a,-1)}catch(s){u=H.aC(s)
t=H.c3(s)
P.jJ(null,null,this,u,H.e(t,"$iaq"))}},
ka:function(a,b,c){var u,t,s
H.n(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.k===$.W){a.$1(b)
return}P.lB(null,null,this,a,b,-1,c)}catch(s){u=H.aC(s)
t=H.c3(s)
P.jJ(null,null,this,u,H.e(t,"$iaq"))}},
j1:function(a,b){return new P.ji(this,H.n(a,{func:1,ret:b}),b)},
cc:function(a){return new P.jh(this,H.n(a,{func:1,ret:-1}))},
dE:function(a,b){return new P.jj(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
ew:function(a,b){H.n(a,{func:1,ret:b})
if($.W===C.k)return a.$0()
return P.lA(null,null,this,a,b)},
cH:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.W===C.k)return a.$1(b)
return P.lB(null,null,this,a,b,c,d)},
k8:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.W===C.k)return a.$2(b,c)
return P.nC(null,null,this,a,b,c,d,e,f)}}
P.ji.prototype={
$0:function(){return this.a.ew(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jh.prototype={
$0:function(){return this.a.k9(this.b)},
$S:3}
P.jj.prototype={
$1:function(a){var u=this.c
return this.a.ka(this.b,H.z(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jd.prototype={
gZ:function(a){return P.lq(this,this.r,H.t(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u
H.z(b,H.t(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.lr()
this.c=u}return this.fz(u,b)}else return this.fm(0,b)},
fm:function(a,b){var u,t,s
H.z(b,H.t(this,0))
u=this.d
if(u==null){u=P.lr()
this.d=u}t=this.d3(b)
s=u[t]
if(s==null)u[t]=[this.bO(b)]
else{if(this.da(s,b)>=0)return!1
s.push(this.bO(b))}return!0},
a_:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hY(this.c,b)
else return this.hX(0,b)},
hX:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.fN(u,b)
s=this.da(t,b)
if(s<0)return!1
this.dv(t.splice(s,1)[0])
return!0},
fz:function(a,b){H.z(b,H.t(this,0))
if(H.e(a[b],"$icO")!=null)return!1
a[b]=this.bO(b)
return!0},
hY:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$icO")
if(u==null)return!1
this.dv(u)
delete a[b]
return!0},
dh:function(){this.r=1073741823&this.r+1},
bO:function(a){var u,t
u=new P.cO(H.z(a,H.t(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dh()
return u},
dv:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dh()},
d3:function(a){return J.d6(a)&1073741823},
fN:function(a,b){return a[this.d3(b)]},
da:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.cO.prototype={}
P.je.prototype={
gK:function(a){return this.d},
A:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bK(u))
else{u=this.c
if(u==null){this.sd0(null)
return!1}else{this.sd0(H.z(u.a,H.t(this,0)))
this.c=this.c.b
return!0}}},
sd0:function(a){this.d=H.z(a,H.t(this,0))},
$iaV:1}
P.h_.prototype={
$2:function(a,b){this.a.l(0,H.z(a,this.b),H.z(b,this.c))},
$S:5}
P.h0.prototype={$ih:1,$ib:1}
P.x.prototype={
gZ:function(a){return new H.dy(a,this.gk(a),0,[H.c2(this,a,"x",0)])},
H:function(a,b){return this.j(a,b)},
kg:function(a,b){var u,t
u=H.d([],[H.c2(this,a,"x",0)])
C.a.sk(u,this.gk(a))
for(t=0;t<this.gk(a);++t)C.a.l(u,t,this.j(a,t))
return u},
kf:function(a){return this.kg(a,!0)},
jq:function(a,b,c,d){var u
H.z(d,H.c2(this,a,"x",0))
P.by(b,c,this.gk(a),null,null,null)
for(u=b;u<c;++u)this.l(a,u,d)},
i:function(a){return P.kd(a,"[","]")}}
P.h3.prototype={}
P.h4.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.m(a)
u.a=t+": "
u.a+=H.m(b)},
$S:5}
P.ag.prototype={
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.c2(this,a,"ag",0),H.c2(this,a,"ag",1)]})
for(u=J.bC(this.gap(a));u.A();){t=u.gK(u)
b.$2(t,this.j(a,t))}},
gk:function(a){return J.aD(this.gap(a))},
i:function(a){return P.kh(a)},
$iC:1}
P.jt.prototype={
l:function(a,b,c){H.z(b,H.t(this,0))
H.z(c,H.t(this,1))
throw H.c(P.D("Cannot modify unmodifiable map"))}}
P.h5.prototype={
j:function(a,b){return J.kH(this.a,b)},
l:function(a,b,c){J.k4(this.a,H.z(b,H.t(this,0)),H.z(c,H.t(this,1)))},
J:function(a,b){J.kJ(this.a,H.n(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gk:function(a){return J.aD(this.a)},
i:function(a){return J.ar(this.a)},
$iC:1}
P.e5.prototype={}
P.jk.prototype={
i:function(a){return P.kd(this,"{","}")},
H:function(a,b){var u,t,s
if(b<0)H.r(P.ac(b,0,null,"index",null))
for(u=P.lq(this,this.r,H.t(this,0)),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.c(P.U(b,this,"index",null,t))},
$ih:1,
$il9:1}
P.eq.prototype={}
P.eT.prototype={}
P.fe.prototype={
jG:function(a,b,c,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a0=P.by(c,a0,b.length,null,null,null)
u=$.mb()
for(t=c,s=t,r=null,q=-1,p=-1,o=0;t<a0;t=n){n=t+1
m=C.c.F(b,t)
if(m===37){l=n+2
if(l<=a0){k=H.jS(C.c.F(b,n))
j=H.jS(C.c.F(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.f(u,i)
h=u[i]
if(h>=0){i=C.c.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.am("")
g=r.a+=C.c.p(b,s,t)
r.a=g+H.dJ(m)
s=n
continue}}throw H.c(P.a3("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.c.p(b,s,a0)
f=g.length
if(q>=0)P.kL(b,p,a0,q,o,f)
else{e=C.f.b8(f-1,4)+1
if(e===1)throw H.c(P.a3("Invalid base64 encoding length ",b,a0))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.aT(b,c,a0,g.charCodeAt(0)==0?g:g)}d=a0-c
if(q>=0)P.kL(b,p,a0,q,o,d)
else{e=C.f.b8(d,4)
if(e===1)throw H.c(P.a3("Invalid base64 encoding length ",b,a0))
if(e>1)b=C.c.aT(b,a0,a0,e===2?"==":"=")}return b},
$abH:function(){return[[P.b,P.o],P.i]}}
P.ff.prototype={
$abL:function(){return[[P.b,P.o],P.i]}}
P.bH.prototype={}
P.bL.prototype={}
P.fD.prototype={
$abH:function(){return[P.i,[P.b,P.o]]}}
P.iA.prototype={
gjp:function(){return C.M}}
P.iC.prototype={
aZ:function(a,b,c){var u,t,s
c=P.by(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jB(t)
if(s.fM(a,b,c)!==c)s.dz(J.mg(a,c-1),0)
return new Uint8Array(t.subarray(0,H.nw(0,s.b,t.length)))},
ci:function(a){return this.aZ(a,0,null)},
$abL:function(){return[P.i,[P.b,P.o]]}}
P.jB.prototype={
dz:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.f(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.f(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.f(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.f(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.f(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.f(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.f(u,t)
u[t]=128|a&63
return!1}},
fM:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.Y(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.F(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dz(r,C.c.F(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.f(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.f(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.f(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.f(u,q)
u[q]=128|r&63}}return s}}
P.iB.prototype={
aZ:function(a,b,c){var u,t,s,r
H.l(a,"$ib",[P.o],"$ab")
u=P.n5(!1,a,b,c)
if(u!=null)return u
c=P.by(b,c,J.aD(a),null,null,null)
t=new P.am("")
s=new P.jz(!1,t)
s.aZ(a,b,c)
if(s.e>0){H.r(P.a3("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.dJ(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
ci:function(a){return this.aZ(a,0,null)},
$abL:function(){return[[P.b,P.o],P.i]}}
P.jz.prototype={
aZ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.l(a,"$ib",[P.o],"$ab")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.jA(this,b,c,a)
$label0$0:for(q=J.d2(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.j(a,o)
if(typeof n!=="number")return n.bE()
if((n&192)!==128){m=P.a3("Bad UTF-8 encoding 0x"+C.f.b5(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.f(C.C,m)
if(u<=C.C[m]){m=P.a3("Overlong encoding of 0x"+C.f.b5(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a3("Character outside valid Unicode range: 0x"+C.f.b5(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.dJ(u)
this.c=!1}for(m=o<c;m;){l=P.nD(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.j(a,k)
if(typeof n!=="number")return n.U()
if(n<0){i=P.a3("Negative UTF-8 code unit: -0x"+C.f.b5(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a3("Bad UTF-8 encoding 0x"+C.f.b5(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.jA.prototype={
$2:function(a,b){this.a.b.a+=P.dR(this.d,a,b)},
$S:34}
P.X.prototype={}
P.as.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.as&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.f.aL(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.mp(H.mQ(this))
t=P.dg(H.mO(this))
s=P.dg(H.mK(this))
r=P.dg(H.mL(this))
q=P.dg(H.mN(this))
p=P.dg(H.mP(this))
o=P.mq(H.mM(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.y.prototype={}
P.bo.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.bo&&this.a===b.a},
gG:function(a){return C.f.gG(this.a)},
i:function(a){var u,t,s,r,q
u=new P.fB()
t=this.a
if(t<0)return"-"+new P.bo(0-t).i(0)
s=u.$1(C.f.a2(t,6e7)%60)
r=u.$1(C.f.a2(t,1e6)%60)
q=new P.fA().$1(t%1e6)
return""+C.f.a2(t,36e8)+":"+H.m(s)+":"+H.m(r)+"."+H.m(q)}}
P.fA.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:21}
P.fB.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:21}
P.bp.prototype={}
P.dG.prototype={
i:function(a){return"Throw of null."}}
P.aR.prototype={
gbQ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbP:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbQ()+t+s
if(!this.a)return r
q=this.gbP()
p=P.fG(this.b)
return r+q+": "+p}}
P.bT.prototype={
gbQ:function(){return"RangeError"},
gbP:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.m(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.m(u)
else if(s>u)t=": Not in range "+H.m(u)+".."+H.m(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.m(u)}return t}}
P.fQ.prototype={
gbQ:function(){return"RangeError"},
gbP:function(){var u,t
u=H.af(this.b)
if(typeof u!=="number")return u.U()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.m(t)},
gk:function(a){return this.f}}
P.it.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iq.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hS.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fn.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fG(u)+"."}}
P.ht.prototype={
i:function(a){return"Out of Memory"},
$ibp:1}
P.dQ.prototype={
i:function(a){return"Stack Overflow"},
$ibp:1}
P.fv.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ej.prototype={
i:function(a){return"Exception: "+this.a}}
P.fO.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.p(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.F(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.c.Y(r,m)
if(l===10||l===13){k=m
break}}if(k-o>78)if(s-o<75){j=o+75
i=o
h=""
g="..."}else{if(k-s<75){i=k-75
j=k
g=""}else{i=s-36
j=s+36
g="..."}h="..."}else{j=k
i=o
h=""
g=""}f=C.c.p(r,i,j)
return t+h+f+g+"\n"+C.c.n(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.m(s)+")"):t}}
P.o.prototype={}
P.h.prototype={
gk:function(a){var u,t
u=this.gZ(this)
for(t=0;u.A();)++t
return t},
H:function(a,b){var u,t,s
if(b<0)H.r(P.ac(b,0,null,"index",null))
for(u=this.gZ(this),t=0;u.A();){s=u.gK(u)
if(b===t)return s;++t}throw H.c(P.U(b,this,"index",null,t))},
i:function(a){return P.mv(this,"(",")")}}
P.aV.prototype={}
P.b.prototype={$ih:1}
P.C.prototype={}
P.G.prototype={
gG:function(a){return P.R.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.a2.prototype={}
P.R.prototype={constructor:P.R,$iR:1,
t:function(a,b){return this===b},
gG:function(a){return H.cw(this)},
i:function(a){return"Instance of '"+H.bS(this)+"'"},
toString:function(){return this.i(this)}}
P.aq.prototype={}
P.i.prototype={$il1:1}
P.am.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iog:1}
P.iy.prototype={
$2:function(a,b){var u,t,s,r
u=P.i
H.l(a,"$iC",[u,u],"$aC")
H.K(b)
t=J.kB(b).ec(b,"=")
if(t===-1){if(b!=="")J.k4(a,P.kt(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.p(b,0,t)
r=C.c.at(b,t+1)
u=this.a
J.k4(a,P.kt(s,0,s.length,u,!0),P.kt(r,0,r.length,u,!0))}return a},
$S:38}
P.iv.prototype={
$2:function(a,b){throw H.c(P.a3("Illegal IPv4 address, "+a,this.a,b))},
$S:45}
P.iw.prototype={
$2:function(a,b){throw H.c(P.a3("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:47}
P.ix.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.f4(C.c.p(this.b,a,b),null,16)
if(typeof u!=="number")return u.U()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:27}
P.bW.prototype={
geF:function(){return this.b},
gct:function(a){var u=this.c
if(u==null)return""
if(C.c.a5(u,"["))return C.c.p(u,1,u.length-1)
return u},
gbz:function(a){var u=this.d
if(u==null)return P.ls(this.a)
return u},
gcF:function(a){var u=this.f
return u==null?"":u},
ge7:function(){var u=this.r
return u==null?"":u},
cG:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.l(h,"$iC",[P.i,null],"$aC")
i=this.a
u=i==="file"
j=this.b
f=this.d
t=this.c
if(t!=null)c=t
else if(j.length!==0||f!=null||u)c=""
d=this.e
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.a5(d,"/"))d="/"+d
g=P.ks(g,0,0,h)
return new P.bW(i,j,c,f,d,g,this.r)},
es:function(a,b){return this.cG(a,null,null,null,null,null,null,b,null,null)},
gbA:function(){var u,t
if(this.Q==null){u=this.f
t=P.i
this.shW(new P.e5(P.li(u==null?"":u,C.m),[t,t]))}return this.Q},
ge8:function(){return this.c!=null},
geb:function(){return this.f!=null},
ge9:function(){return this.r!=null},
i:function(a){var u,t,s,r
u=this.y
if(u==null){u=this.a
t=u.length!==0?H.m(u)+":":""
s=this.c
r=s==null
if(!r||u==="file"){u=t+"//"
t=this.b
if(t.length!==0)u=u+H.m(t)+"@"
if(!r)u+=s
t=this.d
if(t!=null)u=u+":"+H.m(t)}else u=t
u+=this.e
t=this.f
if(t!=null)u=u+"?"+t
t=this.r
if(t!=null)u=u+"#"+t
u=u.charCodeAt(0)==0?u:u
this.y=u}return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!!J.T(b).$ikm)if(this.a==b.gbH())if(this.c!=null===b.ge8())if(this.b==b.geF())if(this.gct(this)==b.gct(b))if(this.gbz(this)==b.gbz(b))if(this.e===b.gen(b)){u=this.f
t=u==null
if(!t===b.geb()){if(t)u=""
if(u===b.gcF(b)){u=this.r
t=u==null
if(!t===b.ge9()){if(t)u=""
u=u===b.ge7()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gG:function(a){var u=this.z
if(u==null){u=C.c.gG(this.i(0))
this.z=u}return u},
shW:function(a){var u=P.i
this.Q=H.l(a,"$iC",[u,u],"$aC")},
$ikm:1,
gbH:function(){return this.a},
gen:function(a){return this.e}}
P.ju.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.B()
throw H.c(P.a3("Invalid port",this.a,u+1))},
$S:30}
P.jv.prototype={
$1:function(a){return P.jy(C.a0,a,C.m,!1)},
$S:42}
P.jx.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.m(P.jy(C.r,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.m(P.jy(C.r,b,C.m,!0))}},
$S:17}
P.jw.prototype={
$2:function(a,b){var u,t
H.K(a)
if(b==null||typeof b==="string")this.a.$2(a,H.K(b))
else for(u=J.bC(H.lO(b,"$ih")),t=this.a;u.A();)t.$2(a,H.K(u.gK(u)))},
$S:28}
P.iu.prototype={
geD:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.f(u,0)
t=this.a
u=u[0]+1
s=C.c.ed(t,"?",u)
r=t.length
if(s>=0){q=P.cY(t,s+1,r,C.p,!1)
r=s}else q=null
u=new P.iY(this,"data",null,null,null,P.cY(t,u,r,C.E,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.f(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.jG.prototype={
$1:function(a){return new Uint8Array(96)},
$S:32}
P.jF.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.f(u,a)
u=u[a]
J.mh(u,0,96,b)
return u},
$S:35}
P.jH.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.F(b,t)^96
if(s>=a.length)return H.f(a,s)
a[s]=c}}}
P.jI.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.F(b,0),t=C.c.F(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.f(a,s)
a[s]=c}}}
P.jl.prototype={
ge8:function(){return this.c>0},
gea:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.B()
t=this.e
if(typeof t!=="number")return H.v(t)
t=u+1<t
u=t}else u=!1
return u},
geb:function(){var u=this.f
if(typeof u!=="number")return u.U()
return u<this.r},
ge9:function(){return this.r<this.a.length},
gdf:function(){return this.b===4&&C.c.a5(this.a,"http")},
gdg:function(){return this.b===5&&C.c.a5(this.a,"https")},
gbH:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdf()){this.x="http"
u="http"}else if(this.gdg()){this.x="https"
u="https"}else if(u===4&&C.c.a5(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.a5(this.a,"package")){this.x="package"
u="package"}else{u=C.c.p(this.a,0,u)
this.x=u}return u},
geF:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.p(this.a,t,u-1):""},
gct:function(a){var u=this.c
return u>0?C.c.p(this.a,u,this.d):""},
gbz:function(a){var u
if(this.gea()){u=this.d
if(typeof u!=="number")return u.B()
return P.f4(C.c.p(this.a,u+1,this.e),null,null)}if(this.gdf())return 80
if(this.gdg())return 443
return 0},
gen:function(a){return C.c.p(this.a,this.e,this.f)},
gcF:function(a){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.U()
return u<t?C.c.p(this.a,u+1,t):""},
ge7:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.at(t,u+1):""},
gbA:function(){var u=this.f
if(typeof u!=="number")return u.U()
if(u>=this.r)return C.a1
u=P.i
return new P.e5(P.li(this.gcF(this),C.m),[u,u])},
cG:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.l(h,"$iC",[P.i,null],"$aC")
i=this.gbH()
u=i==="file"
t=this.c
j=t>0?C.c.p(this.a,this.b+3,t):""
f=this.gea()?this.gbz(this):null
t=this.c
if(t>0)c=C.c.p(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.p(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.a5(d,"/"))d="/"+d
g=P.ks(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.at(t,s+1)
return new P.bW(i,j,c,f,d,g,b)},
es:function(a,b){return this.cG(a,null,null,null,null,null,null,b,null,null)},
gG:function(a){var u=this.y
if(u==null){u=C.c.gG(this.a)
this.y=u}return u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.T(b).$ikm&&this.a===b.i(0)},
i:function(a){return this.a},
$ikm:1}
P.iY.prototype={}
W.w.prototype={}
W.f5.prototype={
gk:function(a){return a.length}}
W.f7.prototype={
i:function(a){return String(a)}}
W.f8.prototype={
i:function(a){return String(a)}}
W.bE.prototype={$ibE:1}
W.d9.prototype={}
W.bF.prototype={
cL:function(a,b,c){if(c!=null)return this.fO(a,b,P.nK(c,null))
return this.fP(a,b)},
eL:function(a,b){return this.cL(a,b,null)},
fO:function(a,b,c){return a.getContext(b,c)},
fP:function(a,b){return a.getContext(b)},
$ibF:1,
$ikO:1}
W.bG.prototype={
fQ:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jm:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibG:1}
W.bm.prototype={
gk:function(a){return a.length}}
W.cd.prototype={$icd:1}
W.fr.prototype={
gk:function(a){return a.length}}
W.S.prototype={$iS:1}
W.ce.prototype={
gk:function(a){return a.length}}
W.fs.prototype={}
W.aT.prototype={}
W.aU.prototype={}
W.ft.prototype={
gk:function(a){return a.length}}
W.fu.prototype={
gk:function(a){return a.length}}
W.fw.prototype={
gk:function(a){return a.length}}
W.cf.prototype={$icf:1}
W.cg.prototype={
cM:function(a,b){return a.getElementById(b)}}
W.fx.prototype={
i:function(a){return String(a)}}
W.dh.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.l(c,"$ia9",[P.a2],"$aa9")
throw H.c(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[[P.a9,P.a2]]},
$ax:function(){return[[P.a9,P.a2]]},
$ih:1,
$ah:function(){return[[P.a9,P.a2]]},
$ib:1,
$ab:function(){return[[P.a9,P.a2]]},
$aB:function(){return[[P.a9,P.a2]]}}
W.di.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gaD(a))+" x "+H.m(this.gaA(a))},
t:function(a,b){var u
if(b==null)return!1
if(!H.d1(b,"$ia9",[P.a2],"$aa9"))return!1
u=J.bf(b)
return a.left===u.gby(b)&&a.top===u.gbD(b)&&this.gaD(a)===u.gaD(b)&&this.gaA(a)===u.gaA(b)},
gG:function(a){return W.lp(C.j.gG(a.left),C.j.gG(a.top),C.j.gG(this.gaD(a)),C.j.gG(this.gaA(a)))},
gdF:function(a){return a.bottom},
gaA:function(a){return a.height},
gby:function(a){return a.left},
gbB:function(a){return a.right},
gbD:function(a){return a.top},
gaD:function(a){return a.width},
$ia9:1,
$aa9:function(){return[P.a2]}}
W.fy.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.K(c)
throw H.c(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[P.i]},
$ax:function(){return[P.i]},
$ih:1,
$ah:function(){return[P.i]},
$ib:1,
$ab:function(){return[P.i]},
$aB:function(){return[P.i]}}
W.fz.prototype={
gk:function(a){return a.length}}
W.iW.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return H.e(u[b],"$ia1")},
l:function(a,b,c){var u
H.e(c,"$ia1")
u=this.b
if(b<0||b>=u.length)return H.f(u,b)
J.k5(this.a,c,u[b])},
h:function(a,b){J.kI(this.a,b)
return b},
gZ:function(a){var u=this.kf(this)
return new J.ap(u,u.length,0,[H.t(u,0)])},
$ax:function(){return[W.a1]},
$ah:function(){return[W.a1]},
$ab:function(){return[W.a1]}}
W.a1.prototype={
gcg:function(a){return new W.iW(a,a.children)},
gdH:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.U()
if(s<0)s=-s*0
if(typeof r!=="number")return r.U()
if(r<0)r=-r*0
return new P.a9(u,t,s,r,[P.a2])},
i:function(a){return a.localName},
$ia1:1}
W.p.prototype={$ip:1}
W.j.prototype={
iZ:function(a,b,c,d){H.n(c,{func:1,args:[W.p]})
if(c!=null)this.fn(a,b,c,!1)},
fn:function(a,b,c,d){return a.addEventListener(b,H.c_(H.n(c,{func:1,args:[W.p]}),1),!1)},
$ij:1}
W.av.prototype={$iav:1}
W.ch.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iav")
throw H.c(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.av]},
$ax:function(){return[W.av]},
$ih:1,
$ah:function(){return[W.av]},
$ib:1,
$ab:function(){return[W.av]},
$ich:1,
$aB:function(){return[W.av]}}
W.fJ.prototype={
gk:function(a){return a.length}}
W.fN.prototype={
gk:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.dn.prototype={
i0:function(a,b,c,d){return a.replaceState(b,c,d)},
gk:function(a){return a.length}}
W.bO.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iF")
throw H.c(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.F]},
$ax:function(){return[W.F]},
$ih:1,
$ah:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$ibO:1,
$aB:function(){return[W.F]}}
W.dp.prototype={}
W.b9.prototype={$ib9:1,
gdI:function(a){return a.data}}
W.ck.prototype={$ick:1,$ikO:1}
W.cl.prototype={$icl:1,$ica:1}
W.ca.prototype={$ia1:1,$ij:1,$iF:1}
W.aX.prototype={$iaX:1}
W.dw.prototype={}
W.h1.prototype={
i:function(a){return String(a)}}
W.cp.prototype={}
W.he.prototype={
gk:function(a){return a.length}}
W.hf.prototype={
j:function(a,b){return P.be(a.get(H.K(b)))},
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.be(t.value[1]))}},
gap:function(a){var u=H.d([],[P.i])
this.J(a,new W.hg(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.D("Not supported"))},
$aag:function(){return[P.i,null]},
$iC:1,
$aC:function(){return[P.i,null]}}
W.hg.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hh.prototype={
j:function(a,b){return P.be(a.get(H.K(b)))},
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.be(t.value[1]))}},
gap:function(a){var u=H.d([],[P.i])
this.J(a,new W.hi(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.D("Not supported"))},
$aag:function(){return[P.i,null]},
$iC:1,
$aC:function(){return[P.i,null]}}
W.hi.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aH.prototype={$iaH:1}
W.hj.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaH")
throw H.c(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aH]},
$ax:function(){return[W.aH]},
$ih:1,
$ah:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aB:function(){return[W.aH]}}
W.ae.prototype={$iae:1}
W.iV.prototype={
l:function(a,b,c){var u,t
H.e(c,"$iF")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
J.k5(u,c,t[b])},
gZ:function(a){var u=this.a.childNodes
return new W.dl(u,u.length,-1,[H.c2(C.a2,u,"B",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$ax:function(){return[W.F]},
$ah:function(){return[W.F]},
$ab:function(){return[W.F]}}
W.F.prototype={
k5:function(a,b){var u,t
try{u=a.parentNode
J.k5(u,b,a)}catch(t){H.aC(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eU(a):u},
X:function(a,b){return a.appendChild(b)},
i_:function(a,b,c){return a.replaceChild(b,c)},
$iF:1}
W.ct.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iF")
throw H.c(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.F]},
$ax:function(){return[W.F]},
$ih:1,
$ah:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$aB:function(){return[W.F]}}
W.aI.prototype={$iaI:1,
gk:function(a){return a.length}}
W.hv.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaI")
throw H.c(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aI]},
$ax:function(){return[W.aI]},
$ih:1,
$ah:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$aB:function(){return[W.aI]}}
W.hE.prototype={
j:function(a,b){return P.be(a.get(H.K(b)))},
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.be(t.value[1]))}},
gap:function(a){var u=H.d([],[P.i])
this.J(a,new W.hF(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.D("Not supported"))},
$aag:function(){return[P.i,null]},
$iC:1,
$aC:function(){return[P.i,null]}}
W.hF.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hH.prototype={
gk:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.hP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaJ")
throw H.c(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aJ]},
$ax:function(){return[W.aJ]},
$ih:1,
$ah:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$aB:function(){return[W.aJ]}}
W.aK.prototype={$iaK:1}
W.hQ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaK")
throw H.c(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aK]},
$ax:function(){return[W.aK]},
$ih:1,
$ah:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aB:function(){return[W.aK]}}
W.aL.prototype={$iaL:1,
gk:function(a){return a.length}}
W.hU.prototype={
j:function(a,b){return this.dc(a,H.K(b))},
l:function(a,b,c){this.i7(a,b,c)},
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,P.i]})
for(u=0;!0;++u){t=this.fU(a,u)
if(t==null)return
b.$2(t,this.dc(a,t))}},
gap:function(a){var u=H.d([],[P.i])
this.J(a,new W.hV(u))
return u},
gk:function(a){return a.length},
dc:function(a,b){return a.getItem(b)},
fU:function(a,b){return a.key(b)},
i7:function(a,b,c){return a.setItem(b,c)},
$aag:function(){return[P.i,P.i]},
$iC:1,
$aC:function(){return[P.i,P.i]}}
W.hV.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:17}
W.aw.prototype={$iaw:1}
W.b1.prototype={$ib1:1}
W.dS.prototype={
fS:function(a,b){return a.insertRow(b)}}
W.dT.prototype={
de:function(a,b){return a.insertCell(b)}}
W.aM.prototype={$iaM:1}
W.ax.prototype={$iax:1}
W.i1.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iax")
throw H.c(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.ax]},
$ax:function(){return[W.ax]},
$ih:1,
$ah:function(){return[W.ax]},
$ib:1,
$ab:function(){return[W.ax]},
$aB:function(){return[W.ax]}}
W.i2.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaM")
throw H.c(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aM]},
$ax:function(){return[W.aM]},
$ih:1,
$ah:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aB:function(){return[W.aM]}}
W.i7.prototype={
gk:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.aO.prototype={$iaO:1}
W.ia.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaN")
throw H.c(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aN]},
$ax:function(){return[W.aN]},
$ih:1,
$ah:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aB:function(){return[W.aN]}}
W.ib.prototype={
gk:function(a){return a.length}}
W.bz.prototype={}
W.iz.prototype={
i:function(a){return String(a)}}
W.iM.prototype={$ikO:1}
W.iN.prototype={
gk:function(a){return a.length}}
W.b6.prototype={
gjh:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.D("deltaY is not supported"))},
gjg:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.D("deltaX is not supported"))},
$ib6:1}
W.cM.prototype={
i1:function(a,b){return a.requestAnimationFrame(H.c_(H.n(b,{func:1,ret:-1,args:[P.a2]}),1))},
fG:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iX.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iS")
throw H.c(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.S]},
$ax:function(){return[W.S]},
$ih:1,
$ah:function(){return[W.S]},
$ib:1,
$ab:function(){return[W.S]},
$aB:function(){return[W.S]}}
W.ee.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.d1(b,"$ia9",[P.a2],"$aa9"))return!1
u=J.bf(b)
return a.left===u.gby(b)&&a.top===u.gbD(b)&&a.width===u.gaD(b)&&a.height===u.gaA(b)},
gG:function(a){return W.lp(C.j.gG(a.left),C.j.gG(a.top),C.j.gG(a.width),C.j.gG(a.height))},
gaA:function(a){return a.height},
gaD:function(a){return a.width}}
W.ja.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaE")
throw H.c(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aE]},
$ax:function(){return[W.aE]},
$ih:1,
$ah:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$aB:function(){return[W.aE]}}
W.ev.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iF")
throw H.c(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.F]},
$ax:function(){return[W.F]},
$ih:1,
$ah:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$aB:function(){return[W.F]}}
W.jm.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaL")
throw H.c(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aL]},
$ax:function(){return[W.aL]},
$ih:1,
$ah:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aB:function(){return[W.aL]}}
W.jq.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaw")
throw H.c(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aw]},
$ax:function(){return[W.aw]},
$ih:1,
$ah:function(){return[W.aw]},
$ib:1,
$ab:function(){return[W.aw]},
$aB:function(){return[W.aw]}}
W.iZ.prototype={}
W.kr.prototype={}
W.j_.prototype={}
W.j0.prototype={
$1:function(a){return this.a.$1(H.e(a,"$ip"))},
$S:40}
W.B.prototype={
gZ:function(a){return new W.dl(a,this.gk(a),-1,[H.c2(this,a,"B",0)])}}
W.dl.prototype={
A:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdd(J.kH(this.a,u))
this.c=u
return!0}this.sdd(null)
this.c=t
return!1},
gK:function(a){return this.d},
sdd:function(a){this.d=H.z(a,H.t(this,0))},
$iaV:1}
W.ed.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.em.prototype={}
W.en.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.cT.prototype={}
W.cU.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eI.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.cV.prototype={}
W.cW.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f2.prototype={}
P.jn.prototype={
e5:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
cJ:function(a){var u,t,s,r,q
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.T(a)
if(!!t.$ias)return new Date(a.a)
if(!!t.$imV)throw H.c(P.ir("structured clone of RegExp"))
if(!!t.$iav)return a
if(!!t.$ibE)return a
if(!!t.$ich)return a
if(!!t.$ib9)return a
if(!!t.$icq||!!t.$ibv)return a
if(!!t.$iC){s=this.e5(a)
r=this.b
if(s>=r.length)return H.f(r,s)
q=r[s]
u.a=q
if(q!=null)return q
q={}
u.a=q
C.a.l(r,s,q)
t.J(a,new P.jp(u,this))
return u.a}if(!!t.$ib){s=this.e5(a)
u=this.b
if(s>=u.length)return H.f(u,s)
q=u[s]
if(q!=null)return q
return this.jb(a,s)}throw H.c(P.ir("structured clone of other type"))},
jb:function(a,b){var u,t,s,r
u=J.d2(a)
t=u.gk(a)
s=new Array(t)
C.a.l(this.b,b,s)
for(r=0;r<t;++r)C.a.l(s,r,this.cJ(u.j(a,r)))
return s}}
P.jp.prototype={
$2:function(a,b){this.a.a[a]=this.b.cJ(b)},
$S:5}
P.eS.prototype={$ib9:1,
gdI:function(a){return this.a}}
P.jM.prototype={
$2:function(a,b){this.a[a]=b},
$S:5}
P.jo.prototype={}
P.fK.prototype={
gbc:function(){var u,t,s
u=this.b
t=H.au(u,"x",0)
s=W.a1
return new H.h6(new H.iP(u,H.n(new P.fL(),{func:1,ret:P.X,args:[t]}),[t]),H.n(new P.fM(),{func:1,ret:s,args:[t]}),[t,s])},
l:function(a,b,c){var u
H.e(c,"$ia1")
u=this.gbc()
J.mi(u.b.$1(J.k6(u.a,b)),c)},
h:function(a,b){J.kI(this.b.a,b)},
gk:function(a){return J.aD(this.gbc().a)},
j:function(a,b){var u=this.gbc()
return u.b.$1(J.k6(u.a,b))},
gZ:function(a){var u=P.kU(this.gbc(),!1,W.a1)
return new J.ap(u,u.length,0,[H.t(u,0)])},
$ax:function(){return[W.a1]},
$ah:function(){return[W.a1]},
$ab:function(){return[W.a1]}}
P.fL.prototype={
$1:function(a){return!!J.T(H.e(a,"$iF")).$ia1},
$S:41}
P.fM.prototype={
$1:function(a){return H.k(H.e(a,"$iF"),"$ia1")},
$S:43}
P.jf.prototype={
gbB:function(a){var u=this.a
if(typeof u!=="number")return u.B()
return H.z(u+this.c,H.t(this,0))},
gdF:function(a){var u=this.b
if(typeof u!=="number")return u.B()
return H.z(u+this.d,H.t(this,0))},
i:function(a){return"Rectangle ("+H.m(this.a)+", "+H.m(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.d1(b,"$ia9",[P.a2],"$aa9")){u=this.a
t=J.bf(b)
if(u==t.gby(b)){s=this.b
if(s==t.gbD(b)){if(typeof u!=="number")return u.B()
r=H.t(this,0)
if(H.z(u+this.c,r)===t.gbB(b)){if(typeof s!=="number")return s.B()
u=H.z(s+this.d,r)===t.gdF(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t,s,r,q
u=this.a
t=J.d6(u)
s=this.b
r=J.d6(s)
if(typeof u!=="number")return u.B()
q=H.t(this,0)
u=C.f.gG(H.z(u+this.c,q))
if(typeof s!=="number")return s.B()
q=C.f.gG(H.z(s+this.d,q))
return P.ng(P.jc(P.jc(P.jc(P.jc(0,t),r),u),q))}}
P.a9.prototype={
gby:function(a){return this.a},
gbD:function(a){return this.b},
gaD:function(a){return this.c},
gaA:function(a){return this.d}}
P.aY.prototype={$iaY:1}
P.fW.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return this.as(a,b)},
l:function(a,b,c){H.e(c,"$iaY")
throw H.c(P.D("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
as:function(a,b){return a.getItem(b)},
$ax:function(){return[P.aY]},
$ih:1,
$ah:function(){return[P.aY]},
$ib:1,
$ab:function(){return[P.aY]},
$aB:function(){return[P.aY]}}
P.b0.prototype={$ib0:1}
P.hr.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return this.as(a,b)},
l:function(a,b,c){H.e(c,"$ib0")
throw H.c(P.D("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
as:function(a,b){return a.getItem(b)},
$ax:function(){return[P.b0]},
$ih:1,
$ah:function(){return[P.b0]},
$ib:1,
$ab:function(){return[P.b0]},
$aB:function(){return[P.b0]}}
P.hx.prototype={
gk:function(a){return a.length}}
P.i_.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return this.as(a,b)},
l:function(a,b,c){H.K(c)
throw H.c(P.D("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
as:function(a,b){return a.getItem(b)},
$ax:function(){return[P.i]},
$ih:1,
$ah:function(){return[P.i]},
$ib:1,
$ab:function(){return[P.i]},
$aB:function(){return[P.i]}}
P.q.prototype={
gcg:function(a){return new P.fK(a,new W.iV(a))}}
P.b3.prototype={$ib3:1}
P.ic.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return this.as(a,b)},
l:function(a,b,c){H.e(c,"$ib3")
throw H.c(P.D("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
as:function(a,b){return a.getItem(b)},
$ax:function(){return[P.b3]},
$ih:1,
$ah:function(){return[P.b3]},
$ib:1,
$ab:function(){return[P.b3]},
$aB:function(){return[P.b3]}}
P.eo.prototype={}
P.ep.prototype={}
P.ey.prototype={}
P.ez.prototype={}
P.eJ.prototype={}
P.eK.prototype={}
P.eQ.prototype={}
P.eR.prototype={}
P.O.prototype={$ih:1,
$ah:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$in2:1}
P.fa.prototype={
gk:function(a){return a.length}}
P.fb.prototype={
j:function(a,b){return P.be(a.get(H.K(b)))},
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.be(t.value[1]))}},
gap:function(a){var u=H.d([],[P.i])
this.J(a,new P.fc(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.D("Not supported"))},
$aag:function(){return[P.i,null]},
$iC:1,
$aC:function(){return[P.i,null]}}
P.fc.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.fd.prototype={
gk:function(a){return a.length}}
P.bD.prototype={}
P.hs.prototype={
gk:function(a){return a.length}}
P.ec.prototype={}
P.da.prototype={$ida:1}
P.dm.prototype={$idm:1}
P.dK.prototype={$idK:1}
P.bU.prototype={
dA:function(a,b){return a.activeTexture(b)},
dC:function(a,b,c){return a.attachShader(b,c)},
an:function(a,b,c){return a.bindBuffer(b,c)},
j2:function(a,b,c){return a.bindFramebuffer(b,c)},
aM:function(a,b,c){return a.bindTexture(b,c)},
j3:function(a,b,c){return a.blendFunc(b,c)},
dG:function(a,b,c,d){return a.bufferData(b,c,d)},
j6:function(a,b){return a.clear(b)},
j7:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
j8:function(a,b){return a.clearDepth(b)},
j9:function(a,b){return a.compileShader(b)},
jc:function(a,b){return a.createShader(b)},
je:function(a,b){return a.deleteProgram(b)},
jf:function(a,b){return a.deleteShader(b)},
ji:function(a,b){return a.depthFunc(b)},
jj:function(a,b){return a.disable(b)},
dJ:function(a,b){return a.disableVertexAttribArray(b)},
jl:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cl:function(a,b){return a.enable(b)},
dK:function(a,b){return a.enableVertexAttribArray(b)},
eH:function(a,b){return a.generateMipmap(b)},
eI:function(a,b,c){return a.getActiveAttrib(b,c)},
eJ:function(a,b,c){return a.getActiveUniform(b,c)},
eK:function(a,b,c){return a.getAttribLocation(b,c)},
cN:function(a,b){return a.getParameter(b)},
eM:function(a,b){return a.getProgramInfoLog(b)},
bF:function(a,b,c){return a.getProgramParameter(b,c)},
eN:function(a,b){return a.getShaderInfoLog(b)},
eO:function(a,b,c){return a.getShaderParameter(b,c)},
eP:function(a,b,c){return a.getUniformLocation(b,c)},
jA:function(a,b){return a.linkProgram(b)},
jY:function(a,b,c){return a.pixelStorei(b,c)},
eS:function(a,b,c){return a.shaderSource(b,c)},
kc:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.T(g)
if(!!u.$ib9)t=!0
else t=!1
if(t){this.il(a,b,c,d,e,f,P.nL(g))
return}if(!!u.$ick)u=!0
else u=!1
if(u){this.im(a,b,c,d,e,f,g)
return}throw H.c(P.d7("Incorrect number or type of arguments"))},
kb:function(a,b,c,d,e,f,g){return this.kc(a,b,c,d,e,f,g,null,null,null)},
il:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
im:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bC:function(a,b,c,d){return a.texParameteri(b,c,d)},
N:function(a,b,c){return a.uniform1f(b,c)},
P:function(a,b,c){return a.uniform1i(b,c)},
u:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eB:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eC:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
eE:function(a,b){return a.useProgram(b)},
kk:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
kl:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibU:1}
P.dN.prototype={$idN:1}
P.dV.prototype={$idV:1}
P.e3.prototype={$ie3:1}
P.hR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return P.be(this.fT(a,b))},
l:function(a,b,c){H.e(c,"$iC")
throw H.c(P.D("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
fT:function(a,b){return a.item(b)},
$ax:function(){return[[P.C,,,]]},
$ih:1,
$ah:function(){return[[P.C,,,]]},
$ib:1,
$ab:function(){return[[P.C,,,]]},
$aB:function(){return[[P.C,,,]]}}
P.eF.prototype={}
P.eG.prototype={}
O.Y.prototype={
ba:function(a){this.sfY(H.d([],[a]))
this.sdl(null)
this.sdi(null)
this.sdm(null)},
bI:function(a,b,c){var u=H.au(this,"Y",0)
H.n(b,{func:1,ret:P.X,args:[[P.h,u]]})
u={func:1,ret:-1,args:[P.o,[P.h,u]]}
H.n(a,u)
H.n(c,u)
this.sdl(b)
this.sdi(a)
this.sdm(c)},
b9:function(a,b){return this.bI(a,null,b)},
c_:function(a){var u
H.l(a,"$ih",[H.au(this,"Y",0)],"$ah")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cR:function(a,b){var u
H.l(b,"$ih",[H.au(this,"Y",0)],"$ah")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gZ:function(a){var u=this.a
return new J.ap(u,u.length,0,[H.t(u,0)])},
H:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.au(this,"Y",0)
H.z(b,u)
u=[u]
if(this.c_(H.d([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.cR(s,H.d([b],u))}},
c7:function(a,b){var u,t
H.l(b,"$ih",[H.au(this,"Y",0)],"$ah")
if(this.c_(b)){u=this.a
t=u.length
C.a.c7(u,b)
this.cR(t,b)}},
sfY:function(a){this.a=H.l(a,"$ib",[H.au(this,"Y",0)],"$ab")},
sdl:function(a){this.b=H.n(a,{func:1,ret:P.X,args:[[P.h,H.au(this,"Y",0)]]})},
sdi:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.o,[P.h,H.au(this,"Y",0)]]})},
sdm:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.o,[P.h,H.au(this,"Y",0)]]})},
$ih:1}
O.co.prototype={
gk:function(a){return this.a.length},
gq:function(){var u=this.b
if(u==null){u=D.Q()
this.b=u}return u},
f2:function(a){var u=this.b
if(u!=null)u.D(a)},
aE:function(){return this.f2(null)},
gS:function(a){var u=this.a
if(u.length>0)return C.a.gaB(u)
else return V.dC()},
eq:function(a){var u=this.a
if(a==null)C.a.h(u,V.dC())
else C.a.h(u,a)
this.aE()},
cE:function(){var u=this.a
if(u.length>0){u.pop()
this.aE()}},
sbT:function(a){this.a=H.l(a,"$ib",[V.ad],"$ab")}}
E.fg.prototype={}
E.al.prototype={
d_:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.ap(u,u.length,0,[H.t(u,0)]);u.A();){t=u.d
if(t.f==null)t.d_()}},
sbJ:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gq().a_(0,this.gej())
t=this.c
if(t!=null)t.gq().h(0,this.gej())
s=new D.H("shape",u,this.c,this,[F.dO])
s.b=!0
this.a4(s)}},
scI:function(a){var u,t,s
u=this.f
if(u!=a){if(u!=null)u.gq().a_(0,this.gel())
t=this.f
this.f=a
if(a!=null)a.gq().h(0,this.gel())
this.d_()
s=new D.H("technique",t,this.f,this,[O.bV])
s.b=!0
this.a4(s)}},
saR:function(a){var u,t
if(!J.a0(this.r,a)){u=this.r
if(u!=null)u.gq().a_(0,this.geh())
if(a!=null)a.gq().h(0,this.geh())
this.r=a
t=new D.H("mover",u,a,this,[U.a8])
t.b=!0
this.a4(t)}},
ae:function(a,b){var u,t,s,r
u=this.r
t=u!=null?u.aC(0,b,this):null
if(!J.a0(t,this.x)){s=this.x
this.x=t
r=new D.H("matrix",s,t,this,[V.ad])
r.b=!0
this.a4(r)}u=this.f
if(u!=null)u.ae(0,b)
for(u=this.y.a,u=new J.ap(u,u.length,0,[H.t(u,0)]);u.A();)u.d.ae(0,b)},
aS:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gS(u))
else C.a.h(u.a,t.n(0,u.gS(u)))
u.aE()
a.er(this.f)
u=a.dy
s=(u&&C.a).gaB(u)
if(s!=null&&this.d!=null)s.k0(a,this)
for(u=this.y.a,u=new J.ap(u,u.length,0,[H.t(u,0)]);u.A();)u.d.aS(a)
a.ep()
a.dx.cE()},
gq:function(){var u=this.z
if(u==null){u=D.Q()
this.z=u}return u},
a4:function(a){var u=this.z
if(u!=null)u.D(a)},
a3:function(){return this.a4(null)},
ek:function(a){H.e(a,"$iA")
this.e=null
this.a4(a)},
jN:function(){return this.ek(null)},
em:function(a){this.a4(H.e(a,"$iA"))},
jO:function(){return this.em(null)},
ei:function(a){this.a4(H.e(a,"$iA"))},
jM:function(){return this.ei(null)},
eg:function(a){this.a4(H.e(a,"$iA"))},
jJ:function(){return this.eg(null)},
jI:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ih",[E.al],"$ah")
for(u=b.length,t=this.gef(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bM()
o.saf(null)
o.saX(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.saf(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a3()},
jL:function(a,b){var u,t
H.l(b,"$ih",[E.al],"$ah")
for(u=b.gZ(b),t=this.gef();u.A();)u.gK(u).gq().a_(0,t)
this.a3()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sf3:function(a,b){this.y=H.l(b,"$iY",[E.al],"$aY")},
$ibc:1}
E.hA.prototype={
eZ:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.as(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.co()
t=[V.ad]
u.sbT(H.d([],t))
u.b=null
u.gq().h(0,new E.hB(this))
this.cy=u
u=new O.co()
u.sbT(H.d([],t))
u.b=null
u.gq().h(0,new E.hC(this))
this.db=u
u=new O.co()
u.sbT(H.d([],t))
u.b=null
u.gq().h(0,new E.hD(this))
this.dx=u
this.sik(H.d([],[O.bV]))
u=this.dy;(u&&C.a).h(u,null)
this.sig(new H.aF([P.i,A.cx]))},
gjZ:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.gS(u)
t=this.db
t=u.n(0,t.gS(t))
this.z=t
u=t}return u},
er:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaB(u):a;(u&&C.a).h(u,t)},
ep:function(){var u=this.dy
if(u.length>1)u.pop()},
sik:function(a){this.dy=H.l(a,"$ib",[O.bV],"$ab")},
sig:function(a){this.fr=H.l(a,"$iC",[P.i,A.cx],"$aC")}}
E.hB.prototype={
$1:function(a){var u
H.e(a,"$iA")
u=this.a
u.z=null
u.ch=null},
$S:8}
E.hC.prototype={
$1:function(a){var u
H.e(a,"$iA")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:8}
E.hD.prototype={
$1:function(a){var u
H.e(a,"$iA")
u=this.a
u.ch=null
u.cx=null},
$S:8}
E.e_.prototype={
cU:function(a){H.e(a,"$iA")
this.eu()},
cT:function(){return this.cU(null)},
gju:function(){var u,t,s
u=Date.now()
t=C.f.a2(P.kQ(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.as(u,!1)
return s/t},
dr:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.n()
if(typeof u!=="number")return H.v(u)
s=C.j.cs(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.n()
r=C.j.cs(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.ld(C.t,this.gk6())}},
eu:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.i6(this),{func:1,ret:-1,args:[P.a2]})
C.I.fG(u)
C.I.i1(u,W.lF(t,P.a2))}},
k_:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dr()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.as(r,!1)
s.y=P.kQ(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aE()
r=s.db
C.a.sk(r.a,0)
r.aE()
r=s.dx
C.a.sk(r.a,0)
r.aE()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aS(this.e)}}catch(q){u=H.aC(q)
t=H.c3(q)
P.c4("Error: "+H.m(u))
P.c4("Stack: "+H.m(t))
throw H.c(u)}}}
E.i6.prototype={
$1:function(a){var u
H.o1(a)
u=this.a
if(u.ch){u.ch=!1
u.k_()}},
$S:29}
Z.ea.prototype={$io8:1}
Z.db.prototype={
cb:function(a){var u,t,s
try{t=a.a
C.b.dK(t,this.e)
C.b.kk(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.aC(s)
t=P.u('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.m(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.m(this.e)+"]"}}
Z.iO.prototype={$io9:1}
Z.dc.prototype={
aO:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
cb:function(a){var u,t
u=this.a
C.b.an(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].cb(a)},
ki:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.dJ(s,u[t].e)
C.b.an(s,this.a.a,null)},
aS:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.f(r,s)
q=r[s]
r=q.c
p=r.a
C.b.an(t,p,r.b)
C.b.jl(t,q.a,q.b,5123,0)
C.b.an(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.i]
t=H.d([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.E)(s),++q)C.a.h(t,s[q].i(0))
p=H.d([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.ar(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.w(t,", ")+"\nAttrs:   "+C.a.w(p,", ")},
sfR:function(a){this.b=H.l(a,"$ib",[Z.bq],"$ab")},
$ioh:1}
Z.bq.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bS(this.c)+"'")+"]"}}
Z.b5.prototype={
gcO:function(a){var u,t
u=this.a
t=(u&$.bj().a)!==0?3:0
if((u&$.bi().a)!==0)t+=3
if((u&$.bh().a)!==0)t+=3
if((u&$.bk().a)!==0)t+=2
if((u&$.bl().a)!==0)t+=3
if((u&$.d3().a)!==0)t+=3
if((u&$.d4().a)!==0)t+=4
if((u&$.c7().a)!==0)++t
return(u&$.bg().a)!==0?t+4:t},
j0:function(a){var u,t,s
u=$.bj()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bi()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bh()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bk()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bl()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.d3()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.d4()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c7()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bg()
if((t&u.a)!==0)if(s===a)return u
return $.ma()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b5))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.d([],[P.i])
t=this.a
if((t&$.bj().a)!==0)C.a.h(u,"Pos")
if((t&$.bi().a)!==0)C.a.h(u,"Norm")
if((t&$.bh().a)!==0)C.a.h(u,"Binm")
if((t&$.bk().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bl().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d3().a)!==0)C.a.h(u,"Clr3")
if((t&$.d4().a)!==0)C.a.h(u,"Clr4")
if((t&$.c7().a)!==0)C.a.h(u,"Weight")
if((t&$.bg().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.w(u,"|")}}
D.fj.prototype={}
D.bM.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.A]}
H.n(b,u)
if(this.a==null)this.saf(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
a_:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[D.A]})
u=this.a
u=u==null?null:C.a.aa(u,b)
if(u===!0){u=this.a
t=(u&&C.a).a_(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.aa(u,b)
if(u===!0){u=this.b
t=(u&&C.a).a_(u,b)||t}return t},
D:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.A(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.J(P.kU(t,!0,{func:1,ret:-1,args:[D.A]}),new D.fH(u))
t=this.b
if(t!=null){this.saX(H.d([],[{func:1,ret:-1,args:[D.A]}]))
C.a.J(t,new D.fI(u))}return!0},
jn:function(){return this.D(null)},
k7:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.D(t)}}},
ar:function(a){return this.k7(a,!0,!1)},
saf:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")},
saX:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")}}
D.fH.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:20}
D.fI.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:20}
D.A.prototype={}
D.br.prototype={}
D.bs.prototype={}
D.H.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.dd.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dd))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.V.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.V))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.bQ.prototype={}
X.dv.prototype={
gaP:function(){var u=this.y
if(u==null){u=D.Q()
this.y=u}return u},
cV:function(a){},
f7:function(a){var u,t,s
H.l(a,"$ih",[X.V],"$ah")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.E)(a),++t){s=a[t]
if(C.a.aa(this.a,s))return!1}return!0},
f5:function(a,b){var u=X.V
u=new D.br(a,H.l(b,"$ih",[u],"$ah"),this,[u])
u.b=!0
this.cV(u)},
f9:function(a,b){var u=X.V
u=new D.bs(a,H.l(b,"$ih",[u],"$ah"),this,[u])
u.b=!0
this.cV(u)},
bM:function(a){var u
H.e(a,"$iA")
if(!this.r&&a instanceof X.bQ){u=a.c
if(C.a.aa(this.a,u)){this.r=!0
u=this.y
if(u!=null)u.D(a)}}},
bZ:function(a){var u
H.e(a,"$iA")
if(this.r&&a instanceof X.bQ){u=a.c
if(C.a.aa(this.a,u))this.r=!1}},
am:function(a){var u,t
if(this.f!=null)return!1
this.f=a
u=a.b
t=u.b
if(t==null){t=D.Q()
u.b=t}t.h(0,this.gbL())
t=u.a
if(t==null){t=D.Q()
u.a=t
u=t}else u=t
u.h(0,this.gbY())
return!0},
$ah:function(){return[X.V]},
$aY:function(){return[X.V]}}
X.fV.prototype={
jV:function(a){var u,t
this.c=a.b
this.d.h(0,a.a)
u=this.a
if(u==null)return!1
t=new X.bQ(a,this)
t.b=!0
return u.D(t)},
jR:function(a){var u,t
this.c=a.b
this.d.a_(0,a.a)
u=this.b
if(u==null)return!1
t=new X.bQ(a,this)
t.b=!0
return u.D(t)},
shV:function(a){this.d=H.l(a,"$il9",[P.o],"$al9")}}
X.dz.prototype={}
X.h2.prototype={
aW:function(a,b){var u,t,s,r,q,p,o,n
u=new P.as(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.n()
q=b.b
p=this.ch
if(typeof q!=="number")return q.n()
o=new V.ah(t.a+s*r,t.b+q*p)
p=this.a.gbg()
n=new X.bu(a,V.bx(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cD:function(a,b){this.r=a.a
return!1},
b2:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.eQ()
if(typeof u!=="number")return u.bE()
this.r=(u&~t)>>>0
return!1},
b1:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.aW(a,b))
return!0},
jW:function(a){return!1},
hx:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.as(Date.now(),!1)
t=this.f
s=new X.dz(c,a,this.a.gbg(),b,u,this)
s.b=!0
t.D(s)
this.y=u
this.x=V.bx()}}
X.a4.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.a4))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bu.prototype={}
X.hk.prototype={
bR:function(a,b,c){var u,t,s
u=new P.as(Date.now(),!1)
t=this.a.gbg()
s=new X.bu(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cD:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.D(this.bR(a,b,!0))
return!0},
b2:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.eQ()
if(typeof u!=="number")return u.bE()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.D(this.bR(a,b,!0))
return!0},
b1:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.bR(a,b,!1))
return!0},
jX:function(a,b){return!1}}
X.hw.prototype={}
X.e1.prototype={}
X.i9.prototype={
aW:function(a,b){var u,t,s,r
H.l(a,"$ib",[V.ah],"$ab")
u=new P.as(Date.now(),!1)
t=a.length>0?a[0]:V.bx()
s=this.a.gbg()
r=new X.e1(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
jU:function(a){var u
H.l(a,"$ib",[V.ah],"$ab")
u=this.b
if(u==null)return!1
u.D(this.aW(a,!0))
return!0},
jS:function(a){var u
H.l(a,"$ib",[V.ah],"$ab")
u=this.c
if(u==null)return!1
u.D(this.aW(a,!0))
return!0},
jT:function(a){var u
H.l(a,"$ib",[V.ah],"$ab")
u=this.d
if(u==null)return!1
u.D(this.aW(a,!1))
return!0}}
X.e6.prototype={
gbg:function(){var u=this.a
return V.l7(0,0,C.n.gdH(u).c,C.n.gdH(u).d)},
d6:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.V(u,new X.a4(t,a.altKey,a.shiftKey))},
aK:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.a4(t,a.altKey,a.shiftKey)},
c5:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.a4(t,a.altKey,a.shiftKey)},
ay:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.C()
q=u.top
if(typeof s!=="number")return s.C()
return new V.ah(t-r,s-q)},
aY:function(a){return new V.a5(a.movementX,a.movementY)},
c1:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.d([],[V.ah])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.E)(s),++q){p=s[q]
o=C.j.ai(p.pageX)
C.j.ai(p.pageY)
n=u.left
C.j.ai(p.pageX)
C.a.h(t,new V.ah(o-n,C.j.ai(p.pageY)-u.top))}return t},
av:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.dd(u,new X.a4(t,a.altKey,a.shiftKey))},
bU:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.C()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.C()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
ht:function(a){this.f=!0},
hh:function(a){this.f=!1},
hn:function(a){H.e(a,"$iae")
if(this.f&&this.bU(a))a.preventDefault()},
bZ:function(a){var u
H.e(a,"$iaX")
if(!this.f)return
u=this.d6(a)
if(this.b.jV(u))a.preventDefault()},
bM:function(a){var u
H.e(a,"$iaX")
if(!this.f)return
u=this.d6(a)
if(this.b.jR(u))a.preventDefault()},
hz:function(a){var u,t,s,r
H.e(a,"$iae")
u=this.a
u.focus()
this.f=!0
this.aK(a)
if(this.x){t=this.av(a)
s=this.aY(a)
if(this.d.cD(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.av(a)
r=this.ay(a)
if(this.c.cD(t,r))a.preventDefault()},
hD:function(a){var u,t,s
H.e(a,"$iae")
this.aK(a)
u=this.av(a)
if(this.x){t=this.aY(a)
if(this.d.b2(u,t))a.preventDefault()
return}if(this.r)return
s=this.ay(a)
if(this.c.b2(u,s))a.preventDefault()},
hr:function(a){var u,t,s
H.e(a,"$iae")
if(!this.bU(a)){this.aK(a)
u=this.av(a)
if(this.x){t=this.aY(a)
if(this.d.b2(u,t))a.preventDefault()
return}if(this.r)return
s=this.ay(a)
if(this.c.b2(u,s))a.preventDefault()}},
hB:function(a){var u,t,s
H.e(a,"$iae")
this.aK(a)
u=this.av(a)
if(this.x){t=this.aY(a)
if(this.d.b1(u,t))a.preventDefault()
return}if(this.r)return
s=this.ay(a)
if(this.c.b1(u,s))a.preventDefault()},
hp:function(a){var u,t,s
H.e(a,"$iae")
if(!this.bU(a)){this.aK(a)
u=this.av(a)
if(this.x){t=this.aY(a)
if(this.d.b1(u,t))a.preventDefault()
return}if(this.r)return
s=this.ay(a)
if(this.c.b1(u,s))a.preventDefault()}},
hF:function(a){var u,t
H.e(a,"$ib6")
this.aK(a)
u=new V.a5((a&&C.H).gjg(a),C.H.gjh(a)).E(0,180)
if(this.x){if(this.d.jW(u))a.preventDefault()
return}if(this.r)return
t=this.ay(a)
if(this.c.jX(u,t))a.preventDefault()},
hH:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.av(this.y)
s=this.ay(this.y)
this.d.hx(t,s,u)}},
hT:function(a){var u
H.e(a,"$iaO")
this.a.focus()
this.f=!0
this.c5(a)
u=this.c1(a)
if(this.e.jU(u))a.preventDefault()},
hP:function(a){var u
H.e(a,"$iaO")
this.c5(a)
u=this.c1(a)
if(this.e.jS(u))a.preventDefault()},
hR:function(a){var u
H.e(a,"$iaO")
this.c5(a)
u=this.c1(a)
if(this.e.jT(u))a.preventDefault()},
sfH:function(a){this.z=H.l(a,"$ib",[[P.cz,P.R]],"$ab")}}
D.bn.prototype={
gq:function(){var u=this.d
if(u==null){u=D.Q()
this.d=u}return u},
au:function(a){var u
H.e(a,"$iA")
u=this.d
if(u!=null)u.D(a)},
fc:function(){return this.au(null)},
$ia7:1,
$ibc:1}
D.a7.prototype={$ibc:1}
D.dx.prototype={
gq:function(){var u=this.Q
if(u==null){u=D.Q()
this.Q=u}return u},
au:function(a){var u=this.Q
if(u!=null)u.D(a)},
dk:function(a){var u
H.e(a,"$iA")
u=this.ch
if(u!=null)u.D(a)},
hw:function(){return this.dk(null)},
hJ:function(a){var u,t,s
H.l(a,"$ih",[D.a7],"$ah")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.E)(a),++t){s=a[t]
if(s==null||this.fB(s))return!1}return!0},
hb:function(a,b){var u,t,s,r,q,p,o,n
u=D.a7
H.l(b,"$ih",[u],"$ah")
for(t=b.length,s=this.gdj(),r={func:1,ret:-1,args:[D.A]},q=[r],p=0;p<b.length;b.length===t||(0,H.E)(b),++p){o=H.e(b[p],"$ia7")
if(o instanceof D.bn)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bM()
n.saf(null)
n.saX(null)
n.c=null
n.d=0
o.d=n}H.n(s,r)
if(n.a==null)n.saf(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.br(a,b,this,[u])
u.b=!0
this.au(u)},
hN:function(a,b){var u,t,s,r
u=D.a7
H.l(b,"$ih",[u],"$ah")
for(t=b.gZ(b),s=this.gdj();t.A();){r=t.gK(t)
C.a.a_(this.e,r)
r.gq().a_(0,s)}u=new D.bs(a,b,this,[u])
u.b=!0
this.au(u)},
fB:function(a){var u=C.a.aa(this.e,a)
return u},
sfa:function(a){this.e=H.l(a,"$ib",[D.bn],"$ab")},
sfd:function(a){this.f=H.l(a,"$ib",[D.dI],"$ab")},
sfe:function(a){this.r=H.l(a,"$ib",[D.dP],"$ab")},
sff:function(a){this.x=H.l(a,"$ib",[D.dX],"$ab")},
sfg:function(a){this.y=H.l(a,"$ib",[D.dY],"$ab")},
sfh:function(a){this.z=H.l(a,"$ib",[D.dZ],"$ab")},
$ah:function(){return[D.a7]},
$aY:function(){return[D.a7]}}
D.dI.prototype={$ia7:1,$ibc:1}
D.dP.prototype={$ia7:1,$ibc:1}
D.dX.prototype={$ia7:1,$ibc:1}
D.dY.prototype={$ia7:1,$ibc:1}
D.dZ.prototype={$ia7:1,$ibc:1}
V.Z.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.bI.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bI))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}}
V.fF.prototype={}
V.aG.prototype={
ad:function(a,b){var u=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.y])
return u},
bx:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=this.a
t=this.e
s=this.y
if(typeof s!=="number")return H.v(s)
r=t*s
q=this.f
p=this.x
if(typeof p!=="number")return H.v(p)
o=this.d
n=this.b
m=n*s
l=this.c
k=p*l
j=this.r
i=n*q-t*l
if(typeof j!=="number")return j.n()
h=u*(r-q*p)-o*(m-k)+j*i
if(Math.abs(h-0)<$.I().a)return V.mG()
g=1/h
return new V.aG((r-p*q)*g,(k-m)*g,i*g,(j*q-o*s)*g,(u*s-j*l)*g,(o*l-u*q)*g,(o*p-j*t)*g,(j*n-u*p)*g,(u*t-o*n)*g)},
aU:function(a){var u,t,s,r,q,p
u=a.a
t=a.b
s=a.c
if(typeof s!=="number")return H.v(s)
r=this.r
if(typeof r!=="number")return r.n()
q=this.x
if(typeof q!=="number")return q.n()
p=this.y
if(typeof p!=="number")return p.n()
return new V.P(this.a*u+this.b*t+this.c*s,this.d*u+this.e*t+this.f*s,r*u+q*t+p*s)},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aG))return!1
u=b.a
t=$.I()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
if(!(Math.abs(b.c-this.c)<s))return!1
if(!(Math.abs(b.d-this.d)<s))return!1
if(!(Math.abs(b.e-this.e)<s))return!1
if(!(Math.abs(b.f-this.f)<s))return!1
u=b.r
r=this.r
t.toString
if(typeof u!=="number")return u.C()
if(typeof r!=="number")return H.v(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=this.x
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.v(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=this.y
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.v(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q,p,o,n
u=[P.y]
t=V.c1(H.d([this.a,this.d,this.r],u),3,0)
s=V.c1(H.d([this.b,this.e,this.x],u),3,0)
r=V.c1(H.d([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.f(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.f(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.f(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.f(t,1)
n=" "+t[1]+", "
if(1>=p)return H.f(s,1)
n=n+s[1]+", "
if(1>=o)return H.f(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.f(t,2)
u=" "+t[2]+", "
if(2>=p)return H.f(s,2)
u=u+s[2]+", "
if(2>=o)return H.f(r,2)
return n+(u+r[2]+"]")}}
V.ad.prototype={
ad:function(a,b){var u=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.y])
return u},
bx:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=this.f
s=this.b
r=this.e
q=u*t-s*r
p=this.r
o=this.c
n=u*p-o*r
m=this.x
l=this.d
k=u*m-l*r
j=s*p-o*t
i=s*m-l*t
h=o*m-l*p
g=this.y
f=this.cy
if(typeof g!=="number")return g.n()
e=this.z
d=this.cx
if(typeof e!=="number")return e.n()
c=g*f-e*d
b=this.db
a=this.Q
if(typeof a!=="number")return a.n()
a0=g*b-a*d
a1=this.dx
a2=this.ch
a3=g*a1-a2*d
a4=e*b-a*f
a5=e*a1-a2*f
a6=a*a1-a2*b
a7=q*a6-n*a5+k*a4+j*a3-i*a0+h*c
if(Math.abs(a7-0)<$.I().a)return V.dC()
a8=1/a7
a9=-r
b0=-d
return V.b_((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
n:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=b2.a
s=this.b
r=b2.e
q=this.c
p=b2.y
if(typeof p!=="number")return H.v(p)
o=this.d
n=b2.cx
m=b2.b
l=b2.f
k=b2.z
if(typeof k!=="number")return H.v(k)
j=b2.cy
i=b2.c
h=b2.r
g=b2.Q
if(typeof g!=="number")return H.v(g)
f=b2.db
e=b2.d
d=b2.x
c=b2.ch
b=b2.dx
a=this.e
a0=this.f
a1=this.r
a2=this.x
a3=this.y
if(typeof a3!=="number")return a3.n()
a4=this.z
if(typeof a4!=="number")return a4.n()
a5=this.Q
if(typeof a5!=="number")return a5.n()
a6=this.ch
a7=this.cx
a8=this.cy
a9=this.db
b0=this.dx
return V.b_(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
aU:function(a){var u,t,s,r,q,p
u=a.a
t=a.b
s=a.c
if(typeof s!=="number")return H.v(s)
r=this.y
if(typeof r!=="number")return r.n()
q=this.z
if(typeof q!=="number")return q.n()
p=this.Q
if(typeof p!=="number")return p.n()
return new V.P(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,r*u+q*t+p*s)},
b7:function(a){var u,t,s,r,q,p
u=a.a
t=a.b
s=a.c
if(typeof s!=="number")return H.v(s)
r=this.y
if(typeof r!=="number")return r.n()
q=this.z
if(typeof q!=="number")return q.n()
p=this.Q
if(typeof p!=="number")return p.n()
return new V.ai(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,r*u+q*t+p*s+this.ch)},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ad))return!1
u=b.a
t=$.I()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
if(!(Math.abs(b.c-this.c)<s))return!1
if(!(Math.abs(b.d-this.d)<s))return!1
if(!(Math.abs(b.e-this.e)<s))return!1
if(!(Math.abs(b.f-this.f)<s))return!1
if(!(Math.abs(b.r-this.r)<s))return!1
if(!(Math.abs(b.x-this.x)<s))return!1
u=b.y
r=this.y
t.toString
if(typeof u!=="number")return u.C()
if(typeof r!=="number")return H.v(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=this.z
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.v(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=this.Q
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.v(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-this.ch)<s))return!1
if(!(Math.abs(b.cx-this.cx)<s))return!1
if(!(Math.abs(b.cy-this.cy)<s))return!1
if(!(Math.abs(b.db-this.db)<s))return!1
if(!(Math.abs(b.dx-this.dx)<s))return!1
return!0},
i:function(a){return this.M()},
e6:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.y]
t=V.c1(H.d([this.a,this.e,this.y,this.cx],u),b,c)
s=V.c1(H.d([this.b,this.f,this.z,this.cy],u),b,c)
r=V.c1(H.d([this.c,this.r,this.Q,this.db],u),b,c)
q=V.c1(H.d([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.f(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.f(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.f(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.f(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.f(t,1)
l=l+t[1]+", "
if(1>=o)return H.f(s,1)
l=l+s[1]+", "
if(1>=n)return H.f(r,1)
l=l+r[1]+", "
if(1>=m)return H.f(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.f(t,2)
p=p+t[2]+", "
if(2>=o)return H.f(s,2)
p=p+s[2]+", "
if(2>=n)return H.f(r,2)
p=p+r[2]+", "
if(2>=m)return H.f(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.f(t,3)
l=l+t[3]+", "
if(3>=o)return H.f(s,3)
l=l+s[3]+", "
if(3>=n)return H.f(r,3)
l=l+r[3]+", "
if(3>=m)return H.f(q,3)
return p+(l+q[3]+"]")},
v:function(a){return this.e6(a,3,0)},
M:function(){return this.e6("",3,0)}}
V.ah.prototype={
C:function(a,b){return new V.ah(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ah))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.ai.prototype={
C:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.v(t)
return new V.ai(this.a-b.a,this.b-b.b,u-t)},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ai))return!1
u=b.a
t=$.I()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.C()
if(typeof r!=="number")return H.v(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.cv.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cv))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}}
V.dL.prototype={
gaq:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dL))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}}
V.a5.prototype={
cw:function(a){return Math.sqrt(this.L(this))},
L:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.v(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.v(r)
return u*t+s*r},
n:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.n()
t=this.b
if(typeof t!=="number")return t.n()
return new V.a5(u*b,t*b)},
E:function(a,b){var u,t
if(Math.abs(b-0)<$.I().a){u=$.lj
if(u==null){u=new V.a5(0,0)
$.lj=u}return u}u=this.a
if(typeof u!=="number")return u.E()
t=this.b
if(typeof t!=="number")return t.E()
return new V.a5(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=this.a
s=$.I()
s.toString
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.v(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.v(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.P.prototype={
cw:function(a){return Math.sqrt(this.L(this))},
L:function(a){var u,t
u=this.c
t=a.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.v(t)
return this.a*a.a+this.b*a.b+u*t},
cz:function(a,b){var u,t,s,r
u=this.a
t=this.b
s=this.c
r=a.c
if(typeof r!=="number")return r.C()
if(typeof s!=="number")return H.v(s)
return new V.P(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
b_:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
if(typeof t!=="number")return H.v(t)
s=this.c
r=a.b
if(typeof s!=="number")return s.n()
q=a.a
p=this.a
return new V.P(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.v(t)
return new V.P(this.a+b.a,this.b+b.b,u+t)},
R:function(a){var u=this.c
if(typeof u!=="number")return u.R()
return new V.P(-this.a,-this.b,-u)},
E:function(a,b){var u
if(Math.abs(b-0)<$.I().a)return V.e9()
u=this.c
if(typeof u!=="number")return u.E()
return new V.P(this.a/b,this.b/b,u/b)},
ee:function(){var u,t,s
u=$.I()
t=u.a
if(!(Math.abs(0-this.a)<t))return!1
if(!(Math.abs(0-this.b)<t))return!1
s=this.c
u.toString
if(typeof s!=="number")return H.v(s)
if(!(Math.abs(0-s)<t))return!1
return!0},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
u=b.a
t=$.I()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.C()
if(typeof r!=="number")return H.v(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
U.fm.prototype={
bN:function(a){var u,t,s
u=this.a
t=this.c
s=this.b
if(u)return V.k3(a,t,s)
else{if(a<t)u=t
else u=a>s?s:a
return u}},
gq:function(){var u=this.y
if(u==null){u=D.Q()
this.y=u}return u},
I:function(a){var u=this.y
if(u!=null)u.D(a)},
scK:function(a,b){var u=this.a
if(u!==b){this.a=b
u=new D.H("wrap",u,b,this,[P.X])
u.b=!0
this.I(u)}},
scB:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.I().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bN(t)}u=new D.H("maximumLocation",u,this.b,this,[P.y])
u.b=!0
this.I(u)}},
scC:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.I().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bN(t)}u=new D.H("minimumLocation",u,this.c,this,[P.y])
u.b=!0
this.I(u)}},
sa1:function(a,b){var u
b=this.bN(b==null?0:b)
u=this.d
if(!(Math.abs(u-b)<$.I().a)){this.d=b
u=new D.H("location",u,b,this,[P.y])
u.b=!0
this.I(u)}},
sb0:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.I().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.H("maximumVelocity",u,a,this,[P.y])
u.b=!0
this.I(u)}},
sT:function(a){var u,t
u=a==null?0:a
t=this.e
a=-t
if(!(u<a))a=u>t?t:u
u=this.f
if(!(Math.abs(u-a)<$.I().a)){this.f=a
u=new D.H("velocity",u,a,this,[P.y])
u.b=!0
this.I(u)}},
saz:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.I().a)){this.x=a
u=new D.H("dampening",u,a,this,[P.y])
u.b=!0
this.I(u)}},
ae:function(a,b){var u,t,s,r,q
u=this.f
t=$.I().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa1(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.I().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sT(s)}}}
U.cc.prototype={
gq:function(){var u=this.b
if(u==null){u=D.Q()
this.b=u}return u},
sS:function(a,b){var u,t,s
if(!J.a0(this.a,b)){u=this.a
this.a=b
t=new D.H("matrix",u,b,this,[V.ad])
t.b=!0
s=this.b
if(s!=null)s.D(t)}},
aC:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cc))return!1
return J.a0(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")}}
U.cj.prototype={
gq:function(){var u=this.e
if(u==null){u=D.Q()
this.e=u}return u},
I:function(a){var u
H.e(a,"$iA")
u=this.e
if(u!=null)u.D(a)},
a7:function(){return this.I(null)},
h9:function(a,b){var u,t,s,r,q,p,o,n
u=U.a8
H.l(b,"$ih",[u],"$ah")
for(t=b.length,s=this.gaF(),r={func:1,ret:-1,args:[D.A]},q=[r],p=0;p<b.length;b.length===t||(0,H.E)(b),++p){o=b[p]
if(o!=null){n=o.gq()
n.toString
H.n(s,r)
if(n.a==null)n.saf(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.br(a,b,this,[u])
u.b=!0
this.I(u)},
hL:function(a,b){var u,t,s
u=U.a8
H.l(b,"$ih",[u],"$ah")
for(t=b.gZ(b),s=this.gaF();t.A();)t.gK(t).gq().a_(0,s)
u=new D.bs(a,b,this,[u])
u.b=!0
this.I(u)},
aC:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.U()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ap(u,u.length,0,[H.t(u,0)]),s=null;u.A();){t=u.d
if(t!=null){r=t.aC(0,b,c)
if(r!=null)s=s==null?r:r.n(0,s)}}this.f=s==null?V.dC():s
u=this.e
if(u!=null)u.ar(0)}return this.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cj))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.a0(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ah:function(){return[U.a8]},
$aY:function(){return[U.a8]},
$ia8:1}
U.a8.prototype={}
U.dM.prototype={
gq:function(){var u=this.y
if(u==null){u=D.Q()
this.y=u}return u},
I:function(a){var u=this.y
if(u!=null)u.D(a)},
seG:function(a){var u
a=V.k3(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.I().a)){this.a=a
u=new D.H("yaw",u,a,this,[P.y])
u.b=!0
this.I(u)}},
seo:function(a,b){var u
b=V.k3(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.I().a)){this.b=b
u=new D.H("pitch",u,b,this,[P.y])
u.b=!0
this.I(u)}},
sev:function(a){var u
a=V.k3(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.I().a)){this.c=a
u=new D.H("roll",u,a,this,[P.y])
u.b=!0
this.I(u)}},
aC:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(u<t){this.r=t
u=this.y
if(u!=null)++u.d
this.seG(this.a+this.d*b.y)
this.seo(0,this.b+this.e*b.y)
this.sev(this.c+this.f*b.y)
u=this.c
s=Math.cos(u)
r=Math.sin(u)
this.x=V.b_(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1).n(0,V.kY(this.b)).n(0,V.ki(this.a))
u=this.y
if(u!=null)u.ar(0)}return this.x},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dM))return!1
u=this.a
t=b.a
s=$.I().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(this.b-b.b)<s))return!1
if(!(Math.abs(this.c-b.c)<s))return!1
if(!(Math.abs(this.d-b.d)<s))return!1
if(!(Math.abs(this.e-b.e)<s))return!1
if(!(Math.abs(this.f-b.f)<s))return!1
return!0},
i:function(a){return"Rotater: ["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"], ["+V.N(this.d,3,0)+", "+V.N(this.e,3,0)+", "+V.N(this.f,3,0)+"]"}}
U.e7.prototype={
gq:function(){var u=this.fx
if(u==null){u=D.Q()
this.fx=u}return u},
I:function(a){var u
H.e(a,"$iA")
u=this.fx
if(u!=null)u.D(a)},
a7:function(){return this.I(null)},
am:function(a){var u,t
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.b
if(t==null){t=D.Q()
u.b=t
u=t}else u=t
u.h(0,this.gh2())
u=this.a.c
t=u.d
if(t==null){t=D.Q()
u.d=t
u=t}else u=t
u.h(0,this.gh4())
u=this.a.c
t=u.c
if(t==null){t=D.Q()
u.c=t
u=t}else u=t
u.h(0,this.gh6())
u=this.a.d
t=u.f
if(t==null){t=D.Q()
u.f=t
u=t}else u=t
u.h(0,this.gfZ())
u=this.a.d
t=u.d
if(t==null){t=D.Q()
u.d=t
u=t}else u=t
u.h(0,this.gh0())
u=this.a.e
t=u.b
if(t==null){t=D.Q()
u.b=t
u=t}else u=t
u.h(0,this.git())
u=this.a.e
t=u.d
if(t==null){t=D.Q()
u.d=t
u=t}else u=t
u.h(0,this.gir())
u=this.a.e
t=u.c
if(t==null){t=D.Q()
u.c=t
u=t}else u=t
u.h(0,this.gip())
return!0},
ak:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.R()
u=-u}if(this.r){if(typeof t!=="number")return t.R()
t=-t}return new V.a5(u,t)},
h3:function(a){a=H.k(H.e(a,"$iA"),"$ibu")
if(!J.a0(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
h5:function(a){var u,t,s,r,q,p,o
a=H.k(H.e(a,"$iA"),"$ibu")
if(!this.cx)return
if(this.ch){u=a.d.C(0,a.y)
u=new V.a5(u.a,u.b)
u=u.L(u)
t=this.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.C(0,a.y)
u=this.ak(new V.a5(t.a,t.b).n(0,2).E(0,u.gaq()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.R()
s=this.y
if(typeof s!=="number")return H.v(s)
t.sT(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.R()
t=this.x
if(typeof t!=="number")return H.v(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.C(0,a.y)
r=this.ak(new V.a5(s.a,s.b).n(0,2).E(0,u.gaq()))
s=this.c
q=r.a
if(typeof q!=="number")return q.R()
p=this.y
if(typeof p!=="number")return H.v(p)
o=this.cy
if(typeof o!=="number")return H.v(o)
s.sa1(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.R()
q=this.x
if(typeof q!=="number")return H.v(q)
s=this.db
if(typeof s!=="number")return H.v(s)
o.sa1(0,-p*q+s)
this.b.sT(0)
this.c.sT(0)
t=t.C(0,a.z)
this.dx=this.ak(new V.a5(t.a,t.b).n(0,2).E(0,u.gaq()))}this.a7()},
h7:function(a){var u,t,s
H.e(a,"$iA")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.L(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.R()
s=this.y
if(typeof s!=="number")return H.v(s)
u.sT(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.R()
u=this.x
if(typeof u!=="number")return H.v(u)
s.sT(-t*10*u)
this.a7()}},
h_:function(a){if(H.k(H.e(a,"$iA"),"$idz").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
h1:function(a){var u,t,s,r,q,p,o
a=H.k(H.e(a,"$iA"),"$ibu")
if(!J.a0(this.d,a.x.b))return
u=a.c
t=a.d
s=t.C(0,a.y)
r=this.ak(new V.a5(s.a,s.b).n(0,2).E(0,u.gaq()))
s=this.c
q=r.a
if(typeof q!=="number")return q.R()
p=this.y
if(typeof p!=="number")return H.v(p)
o=this.cy
if(typeof o!=="number")return H.v(o)
s.sa1(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.R()
q=this.x
if(typeof q!=="number")return H.v(q)
s=this.db
if(typeof s!=="number")return H.v(s)
o.sa1(0,-p*q+s)
this.b.sT(0)
this.c.sT(0)
t=t.C(0,a.z)
this.dx=this.ak(new V.a5(t.a,t.b).n(0,2).E(0,u.gaq()))
this.a7()},
iu:function(a){H.e(a,"$iA")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
is:function(a){var u,t,s,r,q,p,o
a=H.k(H.e(a,"$iA"),"$ie1")
if(!this.cx)return
if(this.ch){u=a.d.C(0,a.y)
u=new V.a5(u.a,u.b)
u=u.L(u)
t=this.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.C(0,a.y)
u=this.ak(new V.a5(t.a,t.b).n(0,2).E(0,u.gaq()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.R()
s=this.y
if(typeof s!=="number")return H.v(s)
t.sT(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.R()
t=this.x
if(typeof t!=="number")return H.v(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.C(0,a.y)
r=this.ak(new V.a5(s.a,s.b).n(0,2).E(0,u.gaq()))
s=this.c
q=r.a
if(typeof q!=="number")return q.R()
p=this.y
if(typeof p!=="number")return H.v(p)
o=this.cy
if(typeof o!=="number")return H.v(o)
s.sa1(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.R()
q=this.x
if(typeof q!=="number")return H.v(q)
s=this.db
if(typeof s!=="number")return H.v(s)
o.sa1(0,-p*q+s)
this.b.sT(0)
this.c.sT(0)
t=t.C(0,a.z)
this.dx=this.ak(new V.a5(t.a,t.b).n(0,2).E(0,u.gaq()))}this.a7()},
iq:function(a){var u,t,s
H.e(a,"$iA")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.L(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.R()
s=this.y
if(typeof s!=="number")return H.v(s)
u.sT(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.R()
u=this.x
if(typeof u!=="number")return H.v(u)
s.sT(-t*10*u)
this.a7()}},
aC:function(a,b,c){var u,t,s
u=this.dy
t=b.e
if(typeof u!=="number")return u.U()
if(u<t){this.dy=t
s=b.y
this.c.ae(0,s)
this.b.ae(0,s)
this.fr=V.ki(this.b.d).n(0,V.kY(this.c.d))}return this.fr},
$ia8:1}
U.e8.prototype={
gq:function(){var u=this.dx
if(u==null){u=D.Q()
this.dx=u}return u},
I:function(a){var u
H.e(a,"$iA")
u=this.dx
if(u!=null)u.D(a)},
a7:function(){return this.I(null)},
ga1:function(a){return new V.ai(this.r.d,this.x.d,this.y.d)},
hv:function(a){this.I(H.e(a,"$iA"))},
c6:function(a,b,c,d,e){if(a.r){if(typeof e!=="number")return e.B()
e+=d}else if(b.r){if(typeof e!=="number")return e.C()
e-=d}else{if(typeof e!=="number")return e.bG()
e=e>0?e-Math.min(e,c):e+Math.min(-e,c)}return e},
aC:function(a,b,c){var u,t,s,r,q,p
u=this.cy
t=b.e
if(typeof u!=="number")return u.U()
if(u<t){this.cy=t
this.ga1(this)
s=b.y
if(s>0.1)s=0.1
u=this.ch
if(typeof u!=="number")return u.n()
r=u*s
u=this.cx
if(typeof u!=="number")return u.n()
q=u*s
p=new V.P(this.r.f,this.x.f,this.y.f)
u=this.Q
if(u!=null)p=u.aU(p)
p=new V.P(this.c6(this.a,this.b,r,q,p.a),this.c6(this.c,this.d,r,q,p.b),this.c6(this.e,this.f,r,q,p.c))
u=this.z
if(u!=null)p=u.aU(p)
this.r.sT(p.a)
this.x.sT(p.b)
this.y.sT(p.c)
this.r.ae(0,s)
this.x.ae(0,s)
this.y.ae(0,s)
this.db=V.kZ(this.r.d,-this.x.d,this.y.d)}return this.db},
sfA:function(a){this.dy=H.n(a,{func:1,ret:V.ai,args:[V.ai,V.ai]})},
$ia8:1}
M.dj.prototype={
aH:function(a){var u
H.e(a,"$iA")
u=this.x
if(u!=null)u.D(a)},
fi:function(){return this.aH(null)},
hj:function(a,b){var u,t,s,r,q,p,o,n
u=E.al
H.l(b,"$ih",[u],"$ah")
for(t=b.length,s=this.gaG(),r={func:1,ret:-1,args:[D.A]},q=[r],p=0;p<b.length;b.length===t||(0,H.E)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bM()
n.saf(null)
n.saX(null)
n.c=null
n.d=0
o.z=n}H.n(s,r)
if(n.a==null)n.saf(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.br(a,b,this,[u])
u.b=!0
this.aH(u)},
hl:function(a,b){var u,t,s
u=E.al
H.l(b,"$ih",[u],"$ah")
for(t=b.gZ(b),s=this.gaG();t.A();)t.gK(t).gq().a_(0,s)
u=new D.bs(a,b,this,[u])
u.b=!0
this.aH(u)},
gq:function(){var u=this.x
if(u==null){u=D.Q()
this.x=u}return u},
aS:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
a.er(this.c)
u=this.b
u.toString
t=a.a
C.b.j2(t,36160,null)
C.b.cl(t,2884)
C.b.cl(t,2929)
C.b.ji(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.v(s)
o=C.j.ai(p*s)
p=q.b
if(typeof r!=="number")return H.v(r)
n=C.j.ai(p*r)
p=C.j.ai(q.c*s)
a.c=p
q=C.j.ai(q.d*r)
a.d=q
C.b.kl(t,o,n,p,q)
C.b.j8(t,u.c)
u=u.a
C.b.j7(t,u.a,u.b,u.c,u.d)
C.b.j6(t,16640)
u=this.a
t=a.c
q=a.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.b_(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.eq(i)
t=$.l2
if(t==null){t=V.l4()
q=V.ln()
p=$.lk
if(p==null){p=new V.P(0,0,-1)
$.lk=p}p=V.kX(t,q,p)
$.l2=p
h=p}else h=t
t=u.b
if(t!=null){g=t.aC(0,a,u)
if(g!=null)h=g.n(0,h)}a.db.eq(h)
for(u=this.d.a,u=new J.ap(u,u.length,0,[H.t(u,0)]);u.A();)u.d.ae(0,a)
for(u=this.d.a,u=new J.ap(u,u.length,0,[H.t(u,0)]);u.A();)u.d.aS(a)
this.a.toString
a.cy.cE()
a.db.cE()
this.b.toString
a.ep()},
sfw:function(a,b){this.d=H.l(b,"$iY",[E.al],"$aY")},
$ioe:1}
A.d8.prototype={}
A.f9.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jo:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
C.b.dK(r.a,r.c)}},
jk:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
C.b.dJ(r.a,r.c)}}}
A.h8.prototype={
eY:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
this.z=a7
u=new P.am("")
t=a7.fx
if(t){u.a="uniform mat4 objMat;\n"
s="uniform mat4 objMat;\n"}else s=""
r=a7.fy
if(r){s+="uniform mat4 viewObjMat;\n"
u.a=s}s+="uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s+="attribute vec3 posAttr;\n"
u.a=s
q=a7.r1
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=a7.r2
if(p){s+="attribute vec3 binmAttr;\n"
u.a=s}u.a=s+"\n"
a7.iC(u)
a7.iJ(u)
a7.iD(u)
a7.iR(u)
a7.iS(u)
a7.iL(u)
a7.iW(u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=a7.x1
s+="   return projViewObjMat*vec4("+(o?"bendPos":"posAttr")+", 1.0);\n"
u.a=s
s+="}\n"
u.a=s
s+="\n"
u.a=s
s+="void main()\n"
u.a=s
s+="{\n"
u.a=s
if(o){s+="   setupBendData();\n"
u.a=s}if(q){s+="   normalVec = getNorm();\n"
u.a=s}if(p){s+="   binormalVec = getBinm();\n"
u.a=s}if(a7.rx){s+="   txt2D = getTxt2D();\n"
u.a=s}if(a7.ry){s+="   txtCube = getTxtCube();\n"
u.a=s}if(a7.k3){s+="   objPos = getObjPos();\n"
u.a=s}if(a7.k4){s+="   viewPos = getViewPos();\n"
u.a=s}s+="   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s+="\n"
u.a=s
n=s.charCodeAt(0)==0?s:s
s=this.z
u=new P.am("")
u.a="precision mediump float;\n"
u.a="precision mediump float;\n\n"
q=s.r1
if(q){u.a="precision mediump float;\n\nvarying vec3 normalVec;\n"
p="precision mediump float;\n\nvarying vec3 normalVec;\n"}else p="precision mediump float;\n\n"
if(s.r2){p+="varying vec3 binormalVec;\n"
u.a=p}if(s.rx){p+="varying vec2 txt2D;\n"
u.a=p}if(s.ry){p+="varying vec3 txtCube;\n"
u.a=p}if(s.k3){p+="varying vec3 objPos;\n"
u.a=p}if(s.k4){p+="varying vec3 viewPos;\n"
u.a=p}p+="\n"
u.a=p
o=s.y2
if(o){p+="uniform mat4 colorMat;\n"
u.a=p}if(s.fr){p+="uniform mat4 invViewMat;\n"
u.a=p}u.a=p+"\n"
s.iG(u)
s.iB(u)
s.iE(u)
s.iH(u)
s.iP(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.iN(u)
s.iO(u)}s.iK(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=s.y
if(l!==C.d){m+="uniform float alpha;\n"
u.a=m
if(l!==C.i){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.e){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.h){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m+="\n"
u.a=m}m+="float alphaValue()\n"
u.a=m
m+="{\n"
u.a=m
switch(l){case C.d:m+="   return 1.0;\n"
u.a=m
break
case C.i:m+="   return alpha;\n"
u.a=m
break
case C.e:m+="   if(nullAlphaTxt > 0) return alpha;\n"
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+="   if (a <= 0.000001) discard;\n"
u.a=m
m+="   return a;\n"
u.a=m
break
case C.h:m+="   if(nullAlphaTxt > 0) return alpha;\n"
u.a=m
m+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
u.a=m
m+="   if (a <= 0.000001) discard;\n"
u.a=m
m+="   return a;\n"
u.a=m
break}m+="}\n"
u.a=m
m+="\n"
u.a=m
l=s.k2
if(l){m+="// === Lighting ===\n"
u.a=m
m+="\n"
u.a=m
m+="vec3 lightValue(vec3 norm, vec3 litClr, vec3 litVec)\n"
u.a=m
m+="{\n"
u.a=m
u.a=m+"   if ((litClr.r < 0.001) && (litClr.g < 0.001) && (litClr.b < 0.001)) return litClr;\n"
k=H.d([],[P.i])
if(s.b!==C.d)C.a.h(k,"ambient()")
if(s.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.w(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.iF(u)
s.iM(u)
s.iQ(u)
s.iT(u)
s.iU(u)
s.iV(u)
s.iI(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m+="   float alpha = alphaValue();\n"
u.a=m
if(q){q=m+"   vec3 norm = normal();\n"
u.a=q}else q=m
if(p)u.a=q+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.d([],[P.i])
if(l){u.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"lightAccum")
if(s.c!==C.d)u.a+="   setDiffuseColor();\n"
if(s.d!==C.d)u.a+="   setInvDiffuseColor();\n"
if(s.e!==C.d)u.a+="   setSpecularColor();\n"
if(s.z>0)u.a+="   lightAccum += allDirLightValues(norm);\n"
if(s.Q>0)u.a+="   lightAccum += allPointLightValues(norm);\n"
if(s.ch>0)u.a+="   lightAccum += allSpotLightValues(norm);\n"
if(s.cx>0)u.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(s.cy>0)u.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(s.db>0)u.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(s.dx<=0)u.a+="   lightAccum += nonLightValues(norm);\n"}if(s.a!==C.d)C.a.h(j,"emission()")
if(s.r!==C.d)C.a.h(j,"reflect(refl)")
if(s.x!==C.d)C.a.h(j,"refract(refl)")
if(j.length<=0)C.a.h(j,"vec3(0.0, 0.0, 0.0)")
i="vec4("+C.a.w(j," + ")+", alpha);"
s=u.a
if(o){s+="   gl_FragColor = colorMat*"+i+"\n"
u.a=s}else{s+="   gl_FragColor = "+i+"\n"
u.a=s}s+="}\n"
u.a=s
this.c=n
this.d=s.charCodeAt(0)==0?s:s
this.e=this.d7(n,35633)
this.f=this.d7(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.b.dC(s,q,this.e)
C.b.dC(s,this.r,this.f)
C.b.jA(s,this.r)
if(!H.lJ(C.b.bF(s,this.r,35714))){h=C.b.eM(s,this.r)
C.b.je(s,this.r)
H.r(P.u("Failed to link shader: "+H.m(h)))}this.ib()
this.ie()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a7.fr)this.id=H.k(this.y.m(0,"invViewMat"),"$iat")
if(t)this.dy=H.k(this.y.m(0,"objMat"),"$iat")
if(r)this.fr=H.k(this.y.m(0,"viewObjMat"),"$iat")
this.fy=H.k(this.y.m(0,"projViewObjMat"),"$iat")
if(a7.x2)this.k1=H.k(this.y.m(0,"txt2DMat"),"$icE")
if(a7.y1)this.k2=H.k(this.y.m(0,"txtCubeMat"),"$iat")
if(a7.y2)this.k3=H.k(this.y.m(0,"colorMat"),"$iat")
this.sfq(H.d([],[A.at]))
t=a7.ao
if(t>0){this.k4=H.e(this.y.m(0,"bendMatCount"),"$iM")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.r(P.u("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.k(f,"$iat"))}}t=a7.a
if(t!==C.d){this.r2=H.k(this.y.m(0,"emissionClr"),"$iL")
switch(t){case C.d:break
case C.i:break
case C.e:this.rx=H.k(this.y.m(0,"emissionTxt"),"$ian")
this.x1=H.k(this.y.m(0,"nullEmissionTxt"),"$iM")
break
case C.h:this.ry=H.k(this.y.m(0,"emissionTxt"),"$iao")
this.x1=H.k(this.y.m(0,"nullEmissionTxt"),"$iM")
break}}t=a7.b
if(t!==C.d){this.x2=H.k(this.y.m(0,"ambientClr"),"$iL")
switch(t){case C.d:break
case C.i:break
case C.e:this.y1=H.k(this.y.m(0,"ambientTxt"),"$ian")
this.ao=H.k(this.y.m(0,"nullAmbientTxt"),"$iM")
break
case C.h:this.y2=H.k(this.y.m(0,"ambientTxt"),"$iao")
this.ao=H.k(this.y.m(0,"nullAmbientTxt"),"$iM")
break}}t=a7.c
if(t!==C.d){this.ah=H.k(this.y.m(0,"diffuseClr"),"$iL")
switch(t){case C.d:break
case C.i:break
case C.e:this.bi=H.k(this.y.m(0,"diffuseTxt"),"$ian")
this.bj=H.k(this.y.m(0,"nullDiffuseTxt"),"$iM")
break
case C.h:this.dL=H.k(this.y.m(0,"diffuseTxt"),"$iao")
this.bj=H.k(this.y.m(0,"nullDiffuseTxt"),"$iM")
break}}t=a7.d
if(t!==C.d){this.bk=H.k(this.y.m(0,"invDiffuseClr"),"$iL")
switch(t){case C.d:break
case C.i:break
case C.e:this.dM=H.k(this.y.m(0,"invDiffuseTxt"),"$ian")
this.bl=H.k(this.y.m(0,"nullInvDiffuseTxt"),"$iM")
break
case C.h:this.dN=H.k(this.y.m(0,"invDiffuseTxt"),"$iao")
this.bl=H.k(this.y.m(0,"nullInvDiffuseTxt"),"$iM")
break}}t=a7.e
if(t!==C.d){this.bo=H.k(this.y.m(0,"shininess"),"$ia_")
this.bm=H.k(this.y.m(0,"specularClr"),"$iL")
switch(t){case C.d:break
case C.i:break
case C.e:this.dO=H.k(this.y.m(0,"specularTxt"),"$ian")
this.bn=H.k(this.y.m(0,"nullSpecularTxt"),"$iM")
break
case C.h:this.dP=H.k(this.y.m(0,"specularTxt"),"$iao")
this.bn=H.k(this.y.m(0,"nullSpecularTxt"),"$iM")
break}}switch(a7.f){case C.d:break
case C.i:break
case C.e:this.dQ=H.k(this.y.m(0,"bumpTxt"),"$ian")
this.bp=H.k(this.y.m(0,"nullBumpTxt"),"$iM")
break
case C.h:this.dR=H.k(this.y.m(0,"bumpTxt"),"$iao")
this.bp=H.k(this.y.m(0,"nullBumpTxt"),"$iM")
break}if(a7.dy){this.dS=H.k(this.y.m(0,"envSampler"),"$iao")
this.dT=H.k(this.y.m(0,"nullEnvTxt"),"$iM")
t=a7.r
if(t!==C.d){this.bq=H.k(this.y.m(0,"reflectClr"),"$iL")
switch(t){case C.d:break
case C.i:break
case C.e:this.dU=H.k(this.y.m(0,"reflectTxt"),"$ian")
this.br=H.k(this.y.m(0,"nullReflectTxt"),"$iM")
break
case C.h:this.dV=H.k(this.y.m(0,"reflectTxt"),"$iao")
this.br=H.k(this.y.m(0,"nullReflectTxt"),"$iM")
break}}t=a7.x
if(t!==C.d){this.bs=H.k(this.y.m(0,"refraction"),"$ia_")
this.bt=H.k(this.y.m(0,"refractClr"),"$iL")
switch(t){case C.d:break
case C.i:break
case C.e:this.dW=H.k(this.y.m(0,"refractTxt"),"$ian")
this.bu=H.k(this.y.m(0,"nullRefractTxt"),"$iM")
break
case C.h:this.dX=H.k(this.y.m(0,"refractTxt"),"$iao")
this.bu=H.k(this.y.m(0,"nullRefractTxt"),"$iM")
break}}}t=a7.y
if(t!==C.d){this.bv=H.k(this.y.m(0,"alpha"),"$ia_")
switch(t){case C.d:break
case C.i:break
case C.e:this.dY=H.k(this.y.m(0,"alphaTxt"),"$ian")
this.bw=H.k(this.y.m(0,"nullAlphaTxt"),"$iM")
break
case C.h:this.dZ=H.k(this.y.m(0,"alphaTxt"),"$iao")
this.bw=H.k(this.y.m(0,"nullAlphaTxt"),"$iM")
break}}this.sfF(H.d([],[A.cD]))
this.shU(H.d([],[A.cF]))
this.sii(H.d([],[A.cG]))
this.siw(H.d([],[A.cH]))
this.six(H.d([],[A.cI]))
this.siy(H.d([],[A.cJ]))
if(a7.k2){t=a7.z
if(t>0){this.e_=H.e(this.y.m(0,"dirLightCount"),"$iM")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iL")
s=this.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$iL")
s=this.cm;(s&&C.a).h(s,new A.cD(g,f,e))}}t=a7.Q
if(t>0){this.e0=H.e(this.y.m(0,"pntLightCount"),"$iM")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iL")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$iL")
s=this.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(d,"$iL")
s=this.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(c,"$ia_")
s=this.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(b,"$ia_")
s=this.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a,"$ia_")
s=this.cn;(s&&C.a).h(s,new A.cF(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.e1=H.e(this.y.m(0,"spotLightCount"),"$iM")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iL")
s=this.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$iL")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(d,"$iL")
s=this.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(c,"$iL")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(b,"$ia_")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a,"$ia_")
s=this.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a0,"$ia_")
s=this.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a1,"$ia_")
s=this.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a2,"$ia_")
s=this.co;(s&&C.a).h(s,new A.cG(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.e2=H.e(this.y.m(0,"txtDirLightCount"),"$iM")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iL")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$iL")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(d,"$iL")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(c,"$iL")
s=this.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(b,"$iL")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a,"$iM")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a0,"$ian")
s=this.cp;(s&&C.a).h(s,new A.cH(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.e3=H.e(this.y.m(0,"txtPntLightCount"),"$iM")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iL")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$iL")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(d,"$icE")
s=this.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(c,"$iL")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(b,"$iM")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a,"$ia_")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a0,"$ia_")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a1,"$ia_")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a2,"$iao")
s=this.cq;(s&&C.a).h(s,new A.cI(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.e4=H.e(this.y.m(0,"txtSpotLightCount"),"$iM")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iL")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$iL")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(d,"$iL")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(c,"$iL")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(b,"$iL")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a,"$iM")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a0,"$iL")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a1,"$ia_")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a2,"$ia_")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a3,"$ia_")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a4,"$ia_")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a5,"$ia_")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.r(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a6,"$ian")
s=this.cr;(s&&C.a).h(s,new A.cJ(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
ag:function(a,b,c){if(c==null||!c.d)C.b.P(b.a,b.d,1)
else{a.eR(c)
C.b.P(b.a,b.d,0)}},
a8:function(a,b,c){C.b.P(b.a,b.d,1)},
sfq:function(a){this.r1=H.l(a,"$ib",[A.at],"$ab")},
sfF:function(a){this.cm=H.l(a,"$ib",[A.cD],"$ab")},
shU:function(a){this.cn=H.l(a,"$ib",[A.cF],"$ab")},
sii:function(a){this.co=H.l(a,"$ib",[A.cG],"$ab")},
siw:function(a){this.cp=H.l(a,"$ib",[A.cH],"$ab")},
six:function(a){this.cq=H.l(a,"$ib",[A.cI],"$ab")},
siy:function(a){this.cr=H.l(a,"$ib",[A.cJ],"$ab")}}
A.hb.prototype={
iC:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.ao+"];\n"
u+="attribute vec4 bendAttr;\n"
a.a=u
u+="\n"
a.a=u
u+="float weightSum;\n"
a.a=u
u+="vec3 bendPos;\n"
a.a=u
t=this.r1
if(t){u+="vec3 bendNorm;\n"
a.a=u}s=this.r2
if(s){u+="vec3 bendBinm;\n"
a.a=u}u+="\n"
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
u+="         bendPos += (m*vec4(posAttr, 1.0)).xyz*weight;\n"
a.a=u
if(t){u+="         bendNorm += (m*vec4(normAttr, 0.0)).xyz*weight;\n"
a.a=u}if(s){u+="         bendBinm += (m*vec4(binmAttr, 0.0)).xyz*weight;\n"
a.a=u}u+="      }\n"
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
u+="   bendPos = vec3(0.0, 0.0, 0.0);\n"
a.a=u
if(t){u+="   bendNorm = vec3(0.0, 0.0, 0.0);\n"
a.a=u}if(s){u+="   bendBinm = vec3(0.0, 0.0, 0.0);\n"
a.a=u}u+="   weightSum = 0.0;\n"
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
u+="      bendPos += posAttr*weight;\n"
a.a=u
if(t){u+="      bendNorm += normAttr*weight;\n"
a.a=u}if(s){u+="      bendBinm += binmAttr*weight;\n"
a.a=u}u+="   }\n"
a.a=u
u+="   else\n"
a.a=u
u+="   {\n"
a.a=u
u+="      bendPos = bendPos/weightSum;\n"
a.a=u
u+="   }\n"
a.a=u
if(t){u+="   bendNorm = normalize(bendNorm);\n"
a.a=u}if(s){u+="   bendBinm = normalize(bendBinm);\n"
a.a=u}u+="}\n"
a.a=u
a.a=u+"\n"},
iJ:function(a){var u
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
iD:function(a){var u
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
iR:function(a){var u,t
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
t+="{\n"
a.a=t
if(u){u=t+"   return (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n"
a.a=u}else{u=t+"   return vec3(txt2DAttr, 1.0).xy;\n"
a.a=u}u+="}\n"
a.a=u
a.a=u+"\n"},
iS:function(a){var u,t
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
t+="{\n"
a.a=t
if(u){u=t+"   return (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n"
a.a=u}else{u=t+"   return vec4(txtCubeAttr, 1.0).xyz;\n"
a.a=u}u+="}\n"
a.a=u
a.a=u+"\n"},
iL:function(a){var u
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
iW:function(a){var u
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
aw:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.f(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.at(c,1))+"Txt;\n"
a.a=u
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iG:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aw(a,u,"emission")
t=a.a+="\n"
t+="vec3 emission()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.i:u=t+"   return emissionClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
iB:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aw(a,u,"ambient")
t=a.a+="\n"
t+="vec3 ambient()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.i:u=t+"   return ambientClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
iE:function(a){var u,t
u=this.c
if(u===C.d)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aw(a,u,"diffuse")
t=a.a+="vec3 diffuseColor;\n"
t+="\n"
a.a=t
t+="void setDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.i:u=t+"   diffuseColor = diffuseClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*textureCube(diffuseTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
a.a=u
u+="{\n"
a.a=u
u+="   float scalar = dot(norm, -litVec);\n"
a.a=u
u+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   return diffuseColor*scalar;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
iH:function(a){var u,t
u=this.d
if(u===C.d)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aw(a,u,"invDiffuse")
t=a.a+="vec3 invDiffuseColor;\n"
t+="\n"
a.a=t
t+="void setInvDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.i:u=t+"   invDiffuseColor = invDiffuseClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*textureCube(invDiffuseTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
a.a=u
u+="{\n"
a.a=u
u+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
a.a=u
u+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   return invDiffuseColor*scalar;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
iP:function(a){var u,t
u=this.e
if(u===C.d)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aw(a,u,"specular")
t=a.a+="uniform float shininess;\n"
t+="vec3 specularColor;\n"
a.a=t
t+="\n"
a.a=t
t+="void setSpecularColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.i:u=t+"   specularColor = specularClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*textureCube(specularTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 specular(vec3 norm, vec3 litVec)\n"
a.a=u
u+="{\n"
a.a=u
u+="   if(dot(norm, -litVec) < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 lightRef = normalize(reflect(litVec, norm));\n"
a.a=u
u+="   float scalar = dot(lightRef, -normalize(viewPos));\n"
a.a=u
u+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   return specularColor*pow(scalar, shininess);\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
iK:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.d:break
case C.i:break
case C.e:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break
case C.h:u+="uniform samplerCube bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break}u+="vec3 normal()\n"
a.a=u
u+="{\n"
a.a=u
switch(t){case C.d:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.i:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.e:u+="   if(nullBumpTxt > 0) return normalVec;\n"
a.a=u
u+="   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n"
a.a=u
u+="   vec3 n = normalize(normalVec);\n"
a.a=u
u+="   vec3 b = normalize(binormalVec);\n"
a.a=u
u+="   vec3 c = normalize(cross(b, n));\n"
a.a=u
u+="   b = cross(n, c);\n"
a.a=u
u+="   mat3 mat = mat3( b.x,  b.y,  b.z,\n"
a.a=u
u+="                   -c.x, -c.y, -c.z,\n"
a.a=u
u+="                    n.x,  n.y,  n.z);\n"
a.a=u
u+="   return mat * normalize(2.0*color - 1.0);\n"
a.a=u
break
case C.h:u+="   if(nullBumpTxt > 0) return normalVec;\n"
a.a=u
u+="   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n"
a.a=u
u+="   vec3 n = normalize(normalVec);\n"
a.a=u
u+="   vec3 b = normalize(binormalVec);\n"
a.a=u
u+="   vec3 c = cross(b, n);\n"
a.a=u
u+="   b = cross(n, c);\n"
a.a=u
u+="   mat3 mat = mat3( b.x,  b.y,  b.z,\n"
a.a=u
u+="                   -c.x, -c.y, -c.z,\n"
a.a=u
u+="                    n.x,  n.y,  n.z);\n"
a.a=u
u+="   return mat * normalize(2.0*color - 1.0);\n"
a.a=u
break}u+="}\n"
a.a=u
a.a=u+"\n"},
iN:function(a){var u,t
u=this.r
if(u===C.d)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aw(a,u,"reflect")
t=a.a+="\n"
t+="vec3 reflect(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.d:u=t
break
case C.i:u=t+"   vec3 scalar = reflectClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
a.a=u
u+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
iO:function(a){var u,t
u=this.x
if(u===C.d)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aw(a,u,"refract")
t=a.a+="uniform float refraction;\n"
t+="\n"
a.a=t
t+="vec3 refract(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.d:u=t
break
case C.i:u=t+"   vec3 scalar = refractClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*textureCube(refractTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
a.a=u
u+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
a.a=u
u+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
iF:function(a){var u,t
u=this.z
if(u<=0)return
t=a.a+="// === Directional Light ===\n"
t+="\n"
a.a=t
t+="struct DirLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 viewDir;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int dirLightCount;\n"
t=a.a+="uniform DirLight dirLights["+u+"];\n"
t+="\n"
a.a=t
t+="vec3 allDirLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
a.a=t+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
u=a.a+="   for(int i = 0; i < "+u+"; ++i)\n"
u+="   {\n"
a.a=u
u+="      if(i >= dirLightCount) break;\n"
a.a=u
u+="      DirLight lit = dirLights[i];\n"
a.a=u
u+="      lightAccum += lightValue(norm, lit.color, lit.viewDir);\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
iM:function(a){var u,t
u=this.Q
if(u<=0)return
t=a.a+="// === Point Light ===\n"
t+="\n"
a.a=t
t+="struct PointLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 point;\n"
a.a=t
t+="   vec3 viewPnt;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   float att0;\n"
a.a=t
t+="   float att1;\n"
a.a=t
t+="   float att2;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int pntLightCount;\n"
t=a.a+="uniform PointLight pntLights["+u+"];\n"
t+="\n"
a.a=t
t+="vec3 pointLightValue(vec3 norm, PointLight lit)\n"
a.a=t
t+="{\n"
a.a=t
t+="   float dist = length(objPos - lit.point);\n"
a.a=t
t+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=t
t+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   return lightValue(norm, lit.color*attenuation, normalize(viewPos - lit.viewPnt));\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allPointLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
a.a=t+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
u=a.a+="   for(int i = 0; i < "+u+"; ++i)\n"
u+="   {\n"
a.a=u
u+="      if(i >= pntLightCount) break;\n"
a.a=u
u+="      lightAccum += pointLightValue(norm, pntLights[i]);\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
iQ:function(a){var u,t
u=this.ch
if(u<=0)return
t=a.a+="// === Spot Light ===\n"
t+="\n"
a.a=t
t+="struct SpotLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 objPnt;\n"
a.a=t
t+="   vec3 objDir;\n"
a.a=t
t+="   vec3 viewPnt;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   float cutoff;\n"
a.a=t
t+="   float coneAngle;\n"
a.a=t
t+="   float att0;\n"
a.a=t
t+="   float att1;\n"
a.a=t
t+="   float att2;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int spotLightCount;\n"
t=a.a+="uniform SpotLight spotLights["+u+"];\n"
t+="\n"
a.a=t
t+="vec3 spotLightValue(vec3 norm, SpotLight lit)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 dir = objPos - lit.objPnt;\n"
a.a=t
t+="   float dist = length(dir);\n"
a.a=t
t+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=t
t+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   float angle = acos(dot(normalize(dir), lit.objDir));\n"
a.a=t
t+="   float scale = (lit.cutoff-angle)/(lit.cutoff-lit.coneAngle);\n"
a.a=t
t+="   if(scale <= 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   if(scale > 1.0) scale = 1.0;\n"
a.a=t
t+="   return lightValue(norm, lit.color*attenuation*scale, normalize(viewPos - lit.viewPnt));\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allSpotLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
a.a=t+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
u=a.a+="   for(int i = 0; i < "+u+"; ++i)\n"
u+="   {\n"
a.a=u
u+="      if(i >= spotLightCount) break;\n"
a.a=u
u+="      lightAccum += spotLightValue(norm, spotLights[i]);\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
iT:function(a){var u,t,s
u=this.cx
if(u<=0)return
t=a.a+="// === Texture Directional Light ===\n"
t+="\n"
a.a=t
t+="struct TexturedDirLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 objUp;\n"
a.a=t
t+="   vec3 objRight;\n"
a.a=t
t+="   vec3 objDir;\n"
a.a=t
t+="   vec3 viewDir;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   int nullTxt;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int txtDirLightCount;\n"
t=a.a+="uniform TexturedDirLight txtDirLights["+u+"];\n"
for(s=0;s<u;++s)t=a.a+="uniform sampler2D txtDirLightsTxt2D"+s+";\n"
t+="\n"
a.a=t
t+="vec3 txtDirLightValue(vec3 norm, TexturedDirLight lit, sampler2D txt2D)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=t
t+="   else\n"
a.a=t
t+="   {\n"
a.a=t
t+="      vec3 offset = objPos + lit.objDir*dot(objPos, lit.objDir);\n"
a.a=t
t+="      float tu = dot(offset, lit.objUp);\n"
a.a=t
t+="      float tv = dot(offset, lit.objRight);\n"
a.a=t
t+="      color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightValue(norm, color, lit.viewDir);\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allTxtDirLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
a.a=t
for(s=0;s<u;++s){a.a+="   if(txtDirLightCount <= "+s+") return lightAccum;\n"
t=a.a+="   lightAccum += txtDirLightValue(norm, txtDirLights["+s+"], txtDirLightsTxt2D"+s+");\n"}u=t+"   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
iU:function(a){var u,t,s
u=this.cy
if(u<=0)return
t=a.a+="// === Texture Point Light ===\n"
t+="\n"
a.a=t
t+="struct TexturedPointLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 point;\n"
a.a=t
t+="   vec3 viewPnt;\n"
a.a=t
t+="   mat3 invViewRotMat;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   int nullTxt;\n"
a.a=t
t+="   float att0;\n"
a.a=t
t+="   float att1;\n"
a.a=t
t+="   float att2;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int txtPntLightCount;\n"
t=a.a+="uniform TexturedPointLight txtPntLights["+u+"];\n"
for(s=0;s<u;++s)t=a.a+="uniform samplerCube txtPntLightsTxtCube"+s+";\n"
t+="\n"
a.a=t
t+="vec3 txtPointLightValue(vec3 norm, TexturedPointLight lit, samplerCube txtCube)\n"
a.a=t
t+="{\n"
a.a=t
t+="   float dist = length(objPos - lit.point);\n"
a.a=t
t+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=t
t+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=t
t+="   else\n"
a.a=t
t+="   {\n"
a.a=t
t+="      vec3 invNormDir = lit.invViewRotMat*normDir;\n"
a.a=t
t+="      color = lit.color*textureCube(txtCube, invNormDir).xyz;\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightValue(norm, attenuation*color, normDir);\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allTxtPointLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
a.a=t
for(s=0;s<u;++s){a.a+="   if(txtPntLightCount <= "+s+") return lightAccum;\n"
t=a.a+="   lightAccum += txtPointLightValue(norm, txtPntLights["+s+"], txtPntLightsTxtCube"+s+");\n"}u=t+"   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
iV:function(a){var u,t,s
u=this.db
if(u<=0)return
t=a.a+="// === Texture Spot Light ===\n"
t+="\n"
a.a=t
t+="struct TexturedSpotLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 objPnt;\n"
a.a=t
t+="   vec3 objDir;\n"
a.a=t
t+="   vec3 objUp;\n"
a.a=t
t+="   vec3 objRight;\n"
a.a=t
t+="   vec3 viewPnt;\n"
a.a=t
t+="   int nullTxt;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   float tuScalar;\n"
a.a=t
t+="   float tvScalar;\n"
a.a=t
t+="   float att0;\n"
a.a=t
t+="   float att1;\n"
a.a=t
t+="   float att2;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int txtSpotLightCount;\n"
t=a.a+="uniform TexturedSpotLight txtSpotLights["+u+"];\n"
for(s=0;s<u;++s)t=a.a+="uniform sampler2D txtSpotLightsTxt2D"+s+";\n"
t+="\n"
a.a=t
t+="vec3 txtSpotLightValue(vec3 norm, TexturedSpotLight lit, sampler2D txt2D)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 dir = objPos - lit.objPnt;\n"
a.a=t
t+="   float dist = length(dir);\n"
a.a=t
t+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=t
t+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   vec3 normDir = normalize(dir);\n"
a.a=t
t+="   float zScale = dot(normDir, lit.objDir);\n"
a.a=t
t+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   normDir = normDir/zScale;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=t
t+="   else\n"
a.a=t
t+="   {\n"
a.a=t
t+="      float tu = dot(normDir, lit.objUp)*lit.tuScalar+0.5;\n"
a.a=t
t+="      if((tu > 1.0) || (tu < 0.0)) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="      float tv = dot(normDir, lit.objRight)*lit.tvScalar+0.5;\n"
a.a=t
t+="      if((tv > 1.0) || (tv < 0.0)) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="      color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightValue(norm, color*attenuation, normalize(viewPos - lit.viewPnt));\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allTxtSpotLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
a.a=t
for(s=0;s<u;++s){a.a+="   if(txtSpotLightCount <= "+s+") return lightAccum;\n"
t=a.a+="   lightAccum += txtSpotLightValue(norm, txtSpotLights["+s+"], txtSpotLightsTxt2D"+s+");\n"}u=t+"   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
iI:function(a){var u
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
A.cD.prototype={}
A.cH.prototype={}
A.cF.prototype={}
A.cI.prototype={}
A.cG.prototype={}
A.cJ.prototype={}
A.cx.prototype={
f0:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
d7:function(a,b){var u,t,s
u=this.a
t=C.b.jc(u,b)
C.b.eS(u,t,a)
C.b.j9(u,t)
if(!H.lJ(C.b.eO(u,t,35713))){s=C.b.eN(u,t)
C.b.jf(u,t)
throw H.c(P.u("Error compiling shader '"+H.m(t)+"': "+H.m(s)))}return t},
ib:function(){var u,t,s,r,q,p
u=H.d([],[A.d8])
t=this.a
s=H.af(C.b.bF(t,this.r,35721))
if(typeof s!=="number")return H.v(s)
r=0
for(;r<s;++r){q=C.b.eI(t,this.r,r)
p=C.b.eK(t,this.r,q.name)
C.a.h(u,new A.d8(t,q.name,p))}this.x=new A.f9(u)},
ie:function(){var u,t,s,r,q,p
u=H.d([],[A.e2])
t=this.a
s=H.af(C.b.bF(t,this.r,35718))
if(typeof s!=="number")return H.v(s)
r=0
for(;r<s;++r){q=C.b.eJ(t,this.r,r)
p=C.b.eP(t,this.r,q.name)
C.a.h(u,this.jd(q.type,q.size,q.name,p))}this.y=new A.io(u)},
aJ:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.M(u,t,b,c)
else return A.kl(u,t,b,a,c)},
fC:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.an(u,t,b,c)
else return A.kl(u,t,b,a,c)},
fD:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ao(u,t,b,c)
else return A.kl(u,t,b,a,c)},
bf:function(a,b){return new P.ej(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
jd:function(a,b,c,d){switch(a){case 5120:return this.aJ(b,c,d)
case 5121:return this.aJ(b,c,d)
case 5122:return this.aJ(b,c,d)
case 5123:return this.aJ(b,c,d)
case 5124:return this.aJ(b,c,d)
case 5125:return this.aJ(b,c,d)
case 5126:return new A.a_(this.a,this.r,c,d)
case 35664:return new A.ii(this.a,this.r,c,d)
case 35665:return new A.L(this.a,this.r,c,d)
case 35666:return new A.il(this.a,this.r,c,d)
case 35667:return new A.ij(this.a,this.r,c,d)
case 35668:return new A.ik(this.a,this.r,c,d)
case 35669:return new A.im(this.a,this.r,c,d)
case 35674:return new A.ip(this.a,this.r,c,d)
case 35675:return new A.cE(this.a,this.r,c,d)
case 35676:return new A.at(this.a,this.r,c,d)
case 35678:return this.fC(b,c,d)
case 35680:return this.fD(b,c,d)
case 35670:throw H.c(this.bf("BOOL",c))
case 35671:throw H.c(this.bf("BOOL_VEC2",c))
case 35672:throw H.c(this.bf("BOOL_VEC3",c))
case 35673:throw H.c(this.bf("BOOL_VEC4",c))
default:throw H.c(P.u("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.bJ.prototype={
i:function(a){return this.b}}
A.e2.prototype={}
A.io.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
m:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.M()},
jt:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.E)(u),++r)s+=u[r].i(0)+a
return s},
M:function(){return this.jt("\n")}}
A.M.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.ij.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.ik.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.im.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.ih.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
siz:function(a){this.e=H.l(a,"$ib",[P.o],"$ab")}}
A.a_.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.ii.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.L.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.il.prototype={
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.ip.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.cE.prototype={
aj:function(a){var u=new Float32Array(H.bX(H.l(a,"$ib",[P.y],"$ab")))
C.b.eB(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.at.prototype={
aj:function(a){var u=new Float32Array(H.bX(H.l(a,"$ib",[P.y],"$ab")))
C.b.eC(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.an.prototype={
eR:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(!u)C.b.P(t,s,0)
else C.b.P(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.ao.prototype={
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.jD.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cz(u.b,b).cz(u.d.cz(u.c,b),c)
a.sa1(0,new V.ai(t.a,t.b,t.c))
a.sey(t.E(0,Math.sqrt(t.L(t))))
u=1-b
s=1-c
a.sdD(new V.cv(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))},
$S:25}
F.jQ.prototype={
$2:function(a,b){return 0},
$S:44}
F.jR.prototype={
$3:function(a,b,c){var u,t,s,r
u=b*2-1
t=c*2-1
a.sa1(0,new V.ai(u,t,this.a.a.$2(b,c)))
s=new V.P(u,t,1)
a.sey(s.E(0,Math.sqrt(s.L(s))))
s=1-b
r=1-c
a.sdD(new V.cv(b*c,2+s*c,4+b*r,6+s*r))},
$S:25}
F.ab.prototype={
fp:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.e9()
if(t!=null)q=q.B(0,t)
if(s!=null)q=q.B(0,s)
if(r!=null)q=q.B(0,r)
if(q.ee())return
return q.E(0,Math.sqrt(q.L(q)))},
fu:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.C(0,t)
u=new V.P(u.a,u.b,u.c)
q=u.E(0,Math.sqrt(u.L(u)))
u=r.C(0,t)
u=new V.P(u.a,u.b,u.c)
u=q.b_(u.E(0,Math.sqrt(u.L(u))))
return u.E(0,Math.sqrt(u.L(u)))},
cf:function(){if(this.d!=null)return!0
var u=this.fp()
if(u==null){u=this.fu()
if(u==null)return!1}this.d=u
this.a.a.a3()
return!0},
fo:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.e9()
if(t!=null)q=q.B(0,t)
if(s!=null)q=q.B(0,s)
if(r!=null)q=q.B(0,r)
if(q.ee())return
return q.E(0,Math.sqrt(q.L(q)))},
ft:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=u==null
s=t?null:u.f
r=this.b
q=r==null
p=q?null:r.f
o=this.c
n=o==null
m=n?null:o.f
if(s==null||p==null||m==null)return
l=t?null:u.y
k=q?null:r.y
j=n?null:o.y
if(l==null||k==null||j==null)return
u=k.b
i=u-j.b
if(Math.abs(i-0)<$.I().a){u=m.C(0,p)
u=new V.P(u.a,u.b,u.c)
h=u.E(0,Math.sqrt(u.L(u)))
if(j.a-k.a<0)h=h.R(0)}else{g=(u-l.b)/i
u=m.C(0,p)
t=u.c
if(typeof t!=="number")return t.n()
r=p.a
q=p.b
o=p.c
if(typeof o!=="number")return H.v(o)
o=new V.ai(u.a*g+r,u.b*g+q,t*g+o).C(0,s)
o=new V.P(o.a,o.b,o.c)
h=o.E(0,Math.sqrt(o.L(o)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.R(0)}u=this.d
if(u!=null){f=u.E(0,Math.sqrt(u.L(u)))
u=f.b_(h)
u=u.E(0,Math.sqrt(u.L(u))).b_(f)
h=u.E(0,Math.sqrt(u.L(u)))}return h},
cd:function(){if(this.e!=null)return!0
var u=this.fo()
if(u==null){u=this.ft()
if(u==null)return!1}this.e=u
this.a.a.a3()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
v:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.c.ac(J.ar(u.e),0)+", "+C.c.ac(J.ar(this.b.e),0)+", "+C.c.ac(J.ar(this.c.e),0)+" {"
u=this.d
t=u!=null?t+(u.i(0)+", "):t+"-, "
u=this.e
return u!=null?t+(u.i(0)+"}"):t+"-}"},
M:function(){return this.v("")}}
F.ba.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
v:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.c.ac(J.ar(u.e),0)+", "+C.c.ac(J.ar(this.b.e),0)},
M:function(){return this.v("")}}
F.bw.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
v:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.ac(J.ar(u.e),0)},
M:function(){return this.v("")}}
F.dO.prototype={
gq:function(){var u=this.e
if(u==null){u=D.Q()
this.e=u}return u},
jF:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.a0()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.E)(u),++r){q=u[r]
this.a.h(0,q.ja())}this.a.a0()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.E)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.a0()
n=n.e
if(typeof n!=="number")return n.B()
n+=t
o=o.c
if(n>=o.length)return H.f(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bw()
if(m.a==null)H.r(P.u("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.D(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.E)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.a0()
n=n.e
if(typeof n!=="number")return n.B()
n+=t
o=o.c
if(n>=o.length)return H.f(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.a0()
o=o.e
if(typeof o!=="number")return o.B()
o+=t
n=n.c
if(o>=n.length)return H.f(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
o=new F.ba()
n=k.a
if(n==null)H.r(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(n!=j.a)H.r(P.u("May not create a line with vertices attached to different shapes."))
o.a=k
C.a.h(k.c.b,o)
o.b=j
C.a.h(j.c.c,o)
C.a.h(o.a.a.c.b,o)
o=o.a.a.e
if(o!=null)o.D(null)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.E)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.a0()
n=n.e
if(typeof n!=="number")return n.B()
n+=t
o=o.c
if(n>=o.length)return H.f(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.a0()
o=o.e
if(typeof o!=="number")return o.B()
o+=t
n=n.c
if(o>=n.length)return H.f(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.a0()
n=n.e
if(typeof n!=="number")return n.B()
n+=t
o=o.c
if(n>=o.length)return H.f(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.dk(k,j,h)}u=this.e
if(u!=null)u.ar(0)},
aN:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aN()||!1
if(!this.a.aN())t=!1
u=this.e
if(u!=null)u.ar(0)
return t},
j4:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.bj()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bi().a)!==0)++r
if((s&$.bh().a)!==0)++r
if((s&$.bk().a)!==0)++r
if((s&$.bl().a)!==0)++r
if((s&$.d3().a)!==0)++r
if((s&$.d4().a)!==0)++r
if((s&$.c7().a)!==0)++r
if((s&$.bg().a)!==0)++r
q=a1.gcO(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.y
o=H.d(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.d(t,[Z.db])
for(m=0,l=0;l<r;++l){k=a1.j0(l)
j=k.gcO(k)
C.a.l(n,l,new Z.db(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.f(t,i)
h=t[i].jB(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.l(o,g,h[f]);++g}}m+=j}H.l(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.an(t,34962,e)
C.b.dG(t,34962,new Float32Array(H.bX(o)),35044)
C.b.an(t,34962,null)
d=new Z.dc(new Z.ea(34962,e),n,a1)
d.sfR(H.d([],[Z.bq]))
if(this.b.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.a0()
C.a.h(c,b.e)}a=Z.kq(t,34963,H.l(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bq(0,c.length,a))}if(this.c.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.a0()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.f(b,l)
b=b[l].b
b.a.a.a0()
C.a.h(c,b.e)}a=Z.kq(t,34963,H.l(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bq(1,c.length,a))}if(this.d.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.a0()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.f(b,l)
b=b[l].b
b.a.a.a0()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.f(b,l)
b=b[l].c
b.a.a.a0()
C.a.h(c,b.e)}a=Z.kq(t,34963,H.l(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bq(4,c.length,a))}return d},
i:function(a){var u=H.d([],[P.i])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.v("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.v("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.v("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.v("   "))}return C.a.w(u,"\n")},
a4:function(a){var u=this.e
if(u!=null)u.D(a)},
a3:function(){return this.a4(null)},
$iof:1}
F.hJ.prototype={
j_:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.aQ],"$ab")
u=H.d([],[F.ab])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.f(c,r)
l=c[r];++r
if(r>=m)return H.f(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.f(c,j)
i=c[j]
if(s<0||s>=m)return H.f(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.dk(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dk(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dk(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dk(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
aN:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.E)(u),++r)if(!u[r].cf())s=!1
return s},
ce:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.E)(u),++r)if(!u[r].cd())s=!1
return s},
i:function(a){return this.M()},
v:function(a){var u,t,s,r
u=H.d([],[P.i])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].v(a))
return C.a.w(u,"\n")},
M:function(){return this.v("")},
sfI:function(a){this.b=H.l(a,"$ib",[F.ab],"$ab")}}
F.hK.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.M()},
v:function(a){var u,t,s,r
u=H.d([],[P.i])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.f(r,s)
C.a.h(u,r[s].v(a+(""+s+". ")))}return C.a.w(u,"\n")},
M:function(){return this.v("")},
sfV:function(a){this.b=H.l(a,"$ib",[F.ba],"$ab")}}
F.hL.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.M()},
v:function(a){var u,t,s,r
u=H.d([],[P.i])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].v(a))
return C.a.w(u,"\n")},
M:function(){return this.v("")},
sc0:function(a){this.b=H.l(a,"$ib",[F.bw],"$ab")}}
F.aQ.prototype={
cj:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.kp(this.cx,s,p,u,t,r,q,a,o)},
ja:function(){return this.cj(null)},
sa1:function(a,b){var u
if(!J.a0(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a3()}},
sey:function(a){var u
if(!J.a0(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a3()}},
sdD:function(a){var u
if(!J.a0(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a3()}},
jB:function(a){var u,t
if(a.t(0,$.bj())){u=this.f
t=[P.y]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.bi())){u=this.r
t=[P.y]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.bh())){u=this.x
t=[P.y]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.bk())){u=this.y
t=[P.y]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.t(0,$.bl())){u=this.z
t=[P.y]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.d3())){u=this.Q
t=[P.y]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.d4())){u=this.Q
t=[P.y]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.c7()))return H.d([this.ch],[P.y])
else if(a.t(0,$.bg())){u=this.cx
t=[P.y]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.y])},
cf:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.e9()
this.d.J(0,new F.iL(u))
u=u.a
this.r=u.E(0,Math.sqrt(u.L(u)))
u=this.a
if(u!=null){u.a3()
u=this.a.e
if(u!=null)u.ar(0)}return!0},
cd:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.e9()
this.d.J(0,new F.iK(u))
u=u.a
this.x=u.E(0,Math.sqrt(u.L(u)))
u=this.a
if(u!=null){u.a3()
u=this.a.e
if(u!=null)u.ar(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
v:function(a){var u,t,s
u=H.d([],[P.i])
C.a.h(u,C.c.ac(J.ar(this.e),0))
t=this.f
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.r
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.x
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.y
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.z
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.Q
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
C.a.h(u,V.N(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.w(u,", ")
return a+"{"+s+"}"},
M:function(){return this.v("")}}
F.iL.prototype={
$1:function(a){var u,t
H.e(a,"$iab")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:9}
F.iK.prototype={
$1:function(a){var u,t
H.e(a,"$iab")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:9}
F.iE.prototype={
a0:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.u("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a3()
return!0},
gk:function(a){return this.c.length},
aN:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)u[s].cf()
return!0},
ce:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)u[s].cd()
return!0},
j5:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.n()
n=q.E(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a0(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.D(null)}}}}return!0},
i:function(a){return this.M()},
v:function(a){var u,t,s,r
this.a0()
u=H.d([],[P.i])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].v(a))
return C.a.w(u,"\n")},
M:function(){return this.v("")},
siA:function(a){this.c=H.l(a,"$ib",[F.aQ],"$ab")}}
F.iF.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
J:function(a,b){H.n(b,{func:1,ret:-1,args:[F.ab]})
C.a.J(this.b,b)
C.a.J(this.c,new F.iG(this,b))
C.a.J(this.d,new F.iH(this,b))},
i:function(a){return this.M()},
v:function(a){var u,t,s,r
u=H.d([],[P.i])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].v(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].v(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].v(a))
return C.a.w(u,"\n")},
M:function(){return this.v("")},
sfJ:function(a){this.b=H.l(a,"$ib",[F.ab],"$ab")},
sfK:function(a){this.c=H.l(a,"$ib",[F.ab],"$ab")},
sfL:function(a){this.d=H.l(a,"$ib",[F.ab],"$ab")}}
F.iG.prototype={
$1:function(a){H.e(a,"$iab")
if(!J.a0(a.a,this.a))this.b.$1(a)},
$S:9}
F.iH.prototype={
$1:function(a){var u
H.e(a,"$iab")
u=this.a
if(!J.a0(a.a,u)&&!J.a0(a.b,u))this.b.$1(a)},
$S:9}
F.iI.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.M()},
v:function(a){var u,t,s,r
u=H.d([],[P.i])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].v(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].v(a))
return C.a.w(u,"\n")},
M:function(){return this.v("")},
sfW:function(a){this.b=H.l(a,"$ib",[F.ba],"$ab")},
sfX:function(a){this.c=H.l(a,"$ib",[F.ba],"$ab")}}
F.iJ.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.M()},
v:function(a){var u,t,s,r
u=H.d([],[P.i])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].v(a))
return C.a.w(u,"\n")},
M:function(){return this.v("")},
sc0:function(a){this.b=H.l(a,"$ib",[F.bw],"$ab")}}
O.dB.prototype={
gq:function(){var u=this.dy
if(u==null){u=D.Q()
this.dy=u}return u},
W:function(a){var u
H.e(a,"$iA")
u=this.dy
if(u!=null)u.D(a)},
bX:function(){return this.W(null)},
dq:function(a){H.e(a,"$iA")
this.a=null
this.W(a)},
i3:function(){return this.dq(null)},
hd:function(a,b){var u=V.ad
u=new D.br(a,H.l(b,"$ih",[u],"$ah"),this,[u])
u.b=!0
this.W(u)},
hf:function(a,b){var u=V.ad
u=new D.bs(a,H.l(b,"$ih",[u],"$ah"),this,[u])
u.b=!0
this.W(u)},
d4:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
u=this.dx
t=C.f.a2(u.e.length+3,4)*4
s=C.f.a2(u.f.length+3,4)*4
r=C.f.a2(u.r.length+3,4)*4
q=C.f.a2(u.x.length+3,4)*4
p=C.f.a2(u.y.length+3,4)*4
o=C.f.a2(u.z.length+3,4)*4
n=C.f.a2(this.e.a.length+3,4)*4
u=this.b!=null
m=this.f.c
l=this.r.c
k=this.x.c
j=this.y.c
i=this.z.c
h=this.Q.c
g=this.cx.c
f=this.cy.c
e=this.db.c
d="MaterialLight_"+C.f.i(m.a)+C.f.i(l.a)+C.f.i(k.a)+C.f.i(j.a)+C.f.i(i.a)+C.f.i(h.a)+C.f.i(g.a)+C.f.i(f.a)+C.f.i(e.a)+"_"
d+=u?"1":"0"
d+"0"
d+"00"
d=d+"00_"+n+"_"+t+"_"+s+"_"+r+"_"+q+"_"+p+"_"+o
c=g!==C.d||f!==C.d
b=l!==C.d||k!==C.d||j!==C.d||i!==C.d
a=i===C.d
a0=!a||c
a1=k!==C.d||j!==C.d||!a||h!==C.d||c
a=h===C.d
a2=!a
a3=m===C.e||l===C.e||k===C.e||j===C.e||i===C.e||h===C.e||g===C.e||f===C.e||e===C.e
a4=m===C.h||l===C.h||k===C.h||j===C.h||i===C.h||h===C.h||g===C.h||f===C.h||e===C.h
a5=s+p+q+r+o>0
a6=n>0
a7=a1||!a||a0
a8=u&&a3
a9=$.bj()
if(a1){u=$.bi()
a9=new Z.b5(a9.a|u.a)}if(a2){u=$.bh()
a9=new Z.b5(a9.a|u.a)}if(a3){u=$.bk()
a9=new Z.b5(a9.a|u.a)}if(a4){u=$.bl()
a9=new Z.b5(a9.a|u.a)}if(a6){u=$.bg()
a9=new Z.b5(a9.a|u.a)}return new A.hb(m,l,k,j,i,h,g,f,e,t,s,r,q,p,o,t+s+r+q+p+o,c,c,a5,a7,!0,!1,!1,b,a5,a0,a1,a2,a3,a4,a6,a8,!1,!1,n,d.charCodeAt(0)==0?d:d,a9)},
V:function(a,b){H.l(a,"$ib",[T.cA],"$ab")
if(b!=null)if(!C.a.aa(a,b)){b.a=a.length
C.a.h(a,b)}},
ae:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.ap(u,u.length,0,[H.t(u,0)]);u.A();){t=u.d
t.toString
s=$.iD
if(s==null){s=new V.P(0,0,1)
$.iD=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.aU(s)}}},
k0:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.d4()
t=a4.fr.j(0,u.ah)
if(t==null){t=A.mF(u,a4.a)
s=t.b
if(s.length===0)H.r(P.u("May not cache a shader with no name."))
if(a4.fr.bh(0,s))H.r(P.u('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.l(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.bi
u=a5.e
if(!(u instanceof Z.dc)){a5.e=null
u=null}if(u==null||!u.d.t(0,q)){u=r.r1
if(u)a5.d.aN()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.ce()
o.a.ce()
o=o.e
if(o!=null)o.ar(0)}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.j5()
n=n.e
if(n!=null)n.ar(0)}l=a5.d.j4(new Z.iO(a4.a),q)
l.aO($.bj()).e=this.a.Q.c
if(u)l.aO($.bi()).e=this.a.cx.c
if(p)l.aO($.bh()).e=this.a.ch.c
if(r.rx)l.aO($.bk()).e=this.a.cy.c
if(o)l.aO($.bl()).e=this.a.db.c
if(r.x1)l.aO($.bg()).e=this.a.dx.c
a5.e=l}u=T.cA
k=H.d([],[u])
p=this.a
o=a4.a
C.b.eE(o,p.r)
p.x.jo()
if(r.fx){p=this.a
n=a4.dx
n=n.gS(n)
p=p.dy
p.toString
p.aj(n.ad(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db
n=n.gS(n)
m=a4.dx
m=n.n(0,m.gS(m))
a4.cx=m
n=m}p=p.fr
p.toString
p.aj(n.ad(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gjZ()
m=a4.dx
m=n.n(0,m.gS(m))
a4.ch=m
n=m}p=p.fy
p.toString
p.aj(n.ad(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.aj(n.ad(0,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.aj(C.u.ad(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.aj(C.u.ad(n,!0))}if(r.ao>0){j=this.e.a.length
p=this.a.k4
C.b.P(p.a,p.d,j)
for(p=[P.y],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.f(m,i)
m=m[i]
n.toString
H.e(m,"$iad")
n=n.r1
if(i>=n.length)return H.f(n,i)
n=n[i]
h=new Float32Array(H.bX(H.l(m.ad(0,!0),"$ib",p,"$ab")))
C.b.eC(n.a,n.d,!1,h)}}switch(r.a){case C.d:break
case C.i:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.b.u(p.a,p.d,m,g,n)
break
case C.e:this.V(k,this.f.d)
p=this.a
n=this.f.d
p.ag(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.u(n.a,n.d,m,g,p)
break
case C.h:this.V(k,this.f.e)
p=this.a
n=this.f.e
p.a8(p.ry,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.u(n.a,n.d,m,g,p)
break}if(r.k2){switch(r.b){case C.d:break
case C.i:p=this.a
n=this.r.f
p=p.x2
p.toString
m=n.a
g=n.b
n=n.c
C.b.u(p.a,p.d,m,g,n)
break
case C.e:this.V(k,this.r.d)
p=this.a
n=this.r.d
p.ag(p.y1,p.ao,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.u(n.a,n.d,m,g,p)
break
case C.h:this.V(k,this.r.e)
p=this.a
n=this.r.e
p.a8(p.y2,p.ao,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.u(n.a,n.d,m,g,p)
break}switch(r.c){case C.d:break
case C.i:p=this.a
n=this.x.f
p=p.ah
p.toString
m=n.a
g=n.b
n=n.c
C.b.u(p.a,p.d,m,g,n)
break
case C.e:this.V(k,this.x.d)
p=this.a
n=this.x.d
p.ag(p.bi,p.bj,n)
n=this.a
p=this.x.f
n=n.ah
n.toString
m=p.a
g=p.b
p=p.c
C.b.u(n.a,n.d,m,g,p)
break
case C.h:this.V(k,this.x.e)
p=this.a
n=this.x.e
p.a8(p.dL,p.bj,n)
n=this.a
p=this.x.f
n=n.ah
n.toString
m=p.a
g=p.b
p=p.c
C.b.u(n.a,n.d,m,g,p)
break}switch(r.d){case C.d:break
case C.i:p=this.a
n=this.y.f
p=p.bk
p.toString
m=n.a
g=n.b
n=n.c
C.b.u(p.a,p.d,m,g,n)
break
case C.e:this.V(k,this.y.d)
p=this.a
n=this.y.d
p.ag(p.dM,p.bl,n)
n=this.a
p=this.y.f
n=n.bk
n.toString
m=p.a
g=p.b
p=p.c
C.b.u(n.a,n.d,m,g,p)
break
case C.h:this.V(k,this.y.e)
p=this.a
n=this.y.e
p.a8(p.dN,p.bl,n)
n=this.a
p=this.y.f
n=n.bk
n.toString
m=p.a
g=p.b
p=p.c
C.b.u(n.a,n.d,m,g,p)
break}switch(r.e){case C.d:break
case C.i:p=this.a
n=this.z.f
p=p.bm
p.toString
m=n.a
g=n.b
n=n.c
C.b.u(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.bo
C.b.N(n.a,n.d,g)
break
case C.e:this.V(k,this.z.d)
p=this.a
n=this.z.d
p.ag(p.dO,p.bn,n)
n=this.a
p=this.z.f
n=n.bm
n.toString
m=p.a
g=p.b
p=p.c
C.b.u(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bo
C.b.N(p.a,p.d,g)
break
case C.h:this.V(k,this.z.e)
p=this.a
n=this.z.e
p.a8(p.dP,p.bn,n)
n=this.a
p=this.z.f
n=n.bm
n.toString
m=p.a
g=p.b
p=p.c
C.b.u(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bo
C.b.N(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.e_
C.b.P(p.a,p.d,j)
p=a4.db
f=p.gS(p)
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.E)(p),++d){c=p[d]
m=this.a.cm
if(e>=m.length)return H.f(m,e)
b=m[e]
m=f.aU(c.a)
g=m.a
a=m.b
a0=m.c
if(typeof a0!=="number")return a0.n()
a0=m.E(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.b.u(a.a,a.d,g,m,a0)
a0=c.c
m=b.c
C.b.u(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.e0
C.b.P(p.a,p.d,j)
p=a4.db
f=p.gS(p)
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.E)(p),++d){c=p[d]
m=this.a.cn
if(e>=m.length)return H.f(m,e)
b=m[e]
m=c.gb3(c)
g=b.b
C.b.u(g.a,g.d,m.a,m.b,m.c)
m=f.b7(c.gb3(c))
g=b.c
C.b.u(g.a,g.d,m.a,m.b,m.c)
m=c.ga9(c)
g=b.d
C.b.u(g.a,g.d,m.a,m.b,m.c)
m=c.gc8()
g=b.e
C.b.N(g.a,g.d,m)
m=c.gc9()
g=b.f
C.b.N(g.a,g.d,m)
m=c.gca()
g=b.r
C.b.N(g.a,g.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.e1
C.b.P(p.a,p.d,j)
p=a4.db
f=p.gS(p)
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.E)(p),++d){c=p[d]
m=this.a.co
if(e>=m.length)return H.f(m,e)
b=m[e]
m=c.gb3(c)
g=b.b
C.b.u(g.a,g.d,m.a,m.b,m.c)
m=c.gck(c).ks()
g=b.c
C.b.u(g.a,g.d,m.a,m.b,m.c)
m=f.b7(c.gb3(c))
g=b.d
C.b.u(g.a,g.d,m.a,m.b,m.c)
m=c.ga9(c)
g=b.e
C.b.u(g.a,g.d,m.a,m.b,m.c)
m=c.gkp()
g=b.f
C.b.N(g.a,g.d,m)
m=c.gko()
g=b.r
C.b.N(g.a,g.d,m)
m=c.gc8()
g=b.x
C.b.N(g.a,g.d,m)
m=c.gc9()
g=b.y
C.b.N(g.a,g.d,m)
m=c.gca()
g=b.z
C.b.N(g.a,g.d,m);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.e2
C.b.P(p.a,p.d,j)
p=a4.db
f=p.gS(p)
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.E)(p),++d){c=p[d]
g=this.a.cp
if(e>=g.length)return H.f(g,e)
b=g[e]
g=c.gb4()
H.l(k,"$ib",m,"$ab")
if(!C.a.aa(k,g)){g.a=k.length
C.a.h(k,g)}g=c.gck(c)
a=b.d
C.b.u(a.a,a.d,g.a,g.b,g.c)
g=c.gkj()
a=b.b
C.b.u(a.a,a.d,g.a,g.b,g.c)
g=c.gbB(c)
a=b.c
C.b.u(a.a,a.d,g.a,g.b,g.c)
g=f.aU(c.gck(c))
a=g.a
a0=g.b
a1=g.c
if(typeof a1!=="number")return a1.n()
a1=g.E(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.b.u(a0.a,a0.d,a,g,a1)
a1=c.ga9(c)
g=b.f
C.b.u(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gb4()
g=a1.gcA(a1)
if(!g){g=b.x
C.b.P(g.a,g.d,1)}else{g=b.r
a=a1.d
a0=g.a
g=g.d
if(!a)C.b.P(a0,g,0)
else C.b.P(a0,g,a1.a)
g=b.x
C.b.P(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.e3
C.b.P(p.a,p.d,j)
p=a4.db
f=p.gS(p)
for(p=this.dx.y,n=p.length,m=[P.y],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.E)(p),++d){c=p[d]
a=this.a.cq
if(e>=a.length)return H.f(a,e)
b=a[e]
a=c.gb4()
H.l(k,"$ib",g,"$ab")
if(!C.a.aa(k,a)){a.a=k.length
C.a.h(k,a)}a2=f.n(0,c.gS(c))
a=c.gS(c)
a0=$.cu
if(a0==null){a0=new V.ai(0,0,0)
$.cu=a0}a0=a.b7(a0)
a=b.b
C.b.u(a.a,a.d,a0.a,a0.b,a0.c)
a=$.cu
if(a==null){a=new V.ai(0,0,0)
$.cu=a}a=a2.b7(a)
a0=b.c
C.b.u(a0.a,a0.d,a.a,a.b,a.c)
a=a2.bx(0)
a0=b.d
h=new Float32Array(H.bX(H.l(new V.aG(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).ad(0,!0),"$ib",m,"$ab")))
C.b.eB(a0.a,a0.d,!1,h)
a0=c.ga9(c)
a=b.e
C.b.u(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gb4()
a=a0.gcA(a0)
if(!a){a=b.r
C.b.P(a.a,a.d,1)}else{a=b.f
a1=a0.gcA(a0)
a3=a.a
a=a.d
if(!a1)C.b.P(a3,a,0)
else C.b.P(a3,a,a0.gkq(a0))
a=b.r
C.b.P(a.a,a.d,0)}a=c.gc8()
a0=b.x
C.b.N(a0.a,a0.d,a)
a=c.gc9()
a0=b.y
C.b.N(a0.a,a0.d,a)
a=c.gca()
a0=b.z
C.b.N(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.e4
C.b.P(p.a,p.d,j)
p=a4.db
f=p.gS(p)
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.E)(p),++d){c=p[d]
m=this.a.cr
if(e>=m.length)return H.f(m,e)
b=m[e]
m=c.gb4()
H.l(k,"$ib",u,"$ab")
if(!C.a.aa(k,m)){m.a=k.length
C.a.h(k,m)}m=c.gb3(c)
g=b.b
C.b.u(g.a,g.d,m.a,m.b,m.c)
m=c.gck(c)
g=b.c
C.b.u(g.a,g.d,m.a,m.b,m.c)
m=c.gkj()
g=b.d
C.b.u(g.a,g.d,m.a,m.b,m.c)
m=c.gbB(c)
g=b.e
C.b.u(g.a,g.d,m.a,m.b,m.c)
m=f.b7(c.gb3(c))
g=b.f
C.b.u(g.a,g.d,m.a,m.b,m.c)
m=c.gb4()
g=m.gcA(m)
if(!g){m=b.x
C.b.P(m.a,m.d,1)}else{g=b.r
a=m.d
a0=g.a
g=g.d
if(!a)C.b.P(a0,g,0)
else C.b.P(a0,g,m.a)
m=b.x
C.b.P(m.a,m.d,0)}m=c.ga9(c)
g=b.y
C.b.u(g.a,g.d,m.a,m.b,m.c)
m=c.gkt()
g=b.z
C.b.N(g.a,g.d,m)
m=c.gku()
g=b.Q
C.b.N(g.a,g.d,m)
m=c.gc8()
g=b.ch
C.b.N(g.a,g.d,m)
m=c.gc9()
g=b.cx
C.b.N(g.a,g.d,m)
m=c.gca()
g=b.cy
C.b.N(g.a,g.d,m);++e}}}switch(r.f){case C.d:break
case C.i:break
case C.e:this.V(k,this.Q.d)
u=this.a
p=this.Q.d
u.ag(u.dQ,u.bp,p)
break
case C.h:this.V(k,this.Q.e)
u=this.a
p=this.Q.e
u.a8(u.dR,u.bp,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db
p=p.gS(p).bx(0)
a4.Q=p}u=u.id
u.toString
u.aj(p.ad(0,!0))}if(r.dy){this.V(k,this.ch)
u=this.a
p=this.ch
u.a8(u.dS,u.dT,p)
switch(r.r){case C.d:break
case C.i:u=this.a
p=this.cx.f
u=u.bq
u.toString
n=p.a
m=p.b
p=p.c
C.b.u(u.a,u.d,n,m,p)
break
case C.e:this.V(k,this.cx.d)
u=this.a
p=this.cx.d
u.ag(u.dU,u.br,p)
p=this.a
u=this.cx.f
p=p.bq
p.toString
n=u.a
m=u.b
u=u.c
C.b.u(p.a,p.d,n,m,u)
break
case C.h:this.V(k,this.cx.e)
u=this.a
p=this.cx.e
u.a8(u.dV,u.br,p)
p=this.a
u=this.cx.f
p=p.bq
p.toString
n=u.a
m=u.b
u=u.c
C.b.u(p.a,p.d,n,m,u)
break}switch(r.x){case C.d:break
case C.i:u=this.a
p=this.cy.f
u=u.bt
u.toString
n=p.a
m=p.b
p=p.c
C.b.u(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.bs
C.b.N(p.a,p.d,m)
break
case C.e:this.V(k,this.cy.d)
u=this.a
p=this.cy.d
u.ag(u.dW,u.bu,p)
p=this.a
u=this.cy.f
p=p.bt
p.toString
n=u.a
m=u.b
u=u.c
C.b.u(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bs
C.b.N(u.a,u.d,m)
break
case C.h:this.V(k,this.cy.e)
u=this.a
p=this.cy.e
u.a8(u.dX,u.bu,p)
p=this.a
u=this.cy.f
p=p.bt
p.toString
n=u.a
m=u.b
u=u.c
C.b.u(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bs
C.b.N(u.a,u.d,m)
break}}u=r.y
p=u!==C.d
if(p){switch(u){case C.d:break
case C.i:u=this.a
n=this.db.f
u=u.bv
C.b.N(u.a,u.d,n)
break
case C.e:this.V(k,this.db.d)
u=this.a
n=this.db.d
u.ag(u.dY,u.bw,n)
n=this.a
u=this.db.f
n=n.bv
C.b.N(n.a,n.d,u)
break
case C.h:this.V(k,this.db.e)
u=this.a
n=this.db.e
u.a8(u.dZ,u.bw,n)
n=this.a
u=this.db.f
n=n.bv
C.b.N(n.a,n.d,u)
break}C.b.cl(o,3042)
C.b.j3(o,770,771)}for(i=0;i<k.length;++i){u=k[i]
if(!u.c&&u.d){u.c=!0
C.b.dA(o,33984+u.a)
C.b.aM(o,3553,u.b)}}u=a5.e
u.cb(a4)
u.aS(a4)
u.ki(a4)
if(p)C.b.jj(o,3042)
for(i=0;i<k.length;++i){u=k[i]
if(u.c){u.c=!1
C.b.dA(o,33984+u.a)
C.b.aM(o,3553,null)}}u=this.a
u.toString
C.b.eE(o,null)
u.x.jk()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d4().ah},
sfs:function(a){this.e=H.l(a,"$iY",[V.ad],"$aY")}}
O.h9.prototype={
i6:function(a){var u=this.f
if(!(Math.abs(u-a)<$.I().a)){this.f=a
u=new D.H(this.b,u,a,this,[P.y])
u.b=!0
this.a.W(u)}},
al:function(){this.cQ()
this.i6(1)}}
O.cn.prototype={
W:function(a){this.a.W(H.e(a,"$iA"))},
bX:function(){return this.W(null)},
al:function(){},
i9:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gq().a_(0,this.gbd())
t=this.d
this.d=a
if(a!=null)a.gq().h(0,this.gbd())
u=new D.H(this.b+".texture2D",t,this.d,this,[T.dW])
u.b=!0
this.a.W(u)}},
ia:function(a){},
sex:function(a){var u=this.c
if(u!==C.e){if(u===C.d)this.al()
this.c=C.e
this.ia(null)
u=this.a
u.a=null
u.W(null)}this.i9(a)}}
O.ha.prototype={}
O.aZ.prototype={
ds:function(a){var u,t
if(!J.a0(this.f,a)){u=this.f
this.f=a
t=new D.H(this.b+".color",u,a,this,[V.Z])
t.b=!0
this.a.W(t)}},
al:function(){this.cQ()
this.ds(new V.Z(1,1,1))},
sa9:function(a,b){var u
if(this.c===C.d){this.c=C.i
this.al()
u=this.a
u.a=null
u.W(null)}this.ds(b)}}
O.hc.prototype={
i8:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.I().a)){this.ch=a
u=new D.H(this.b+".refraction",u,a,this,[P.y])
u.b=!0
this.a.W(u)}},
al:function(){this.bK()
this.i8(1)}}
O.hd.prototype={
c3:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.I().a)){this.ch=a
u=new D.H(this.b+".shininess",u,a,this,[P.y])
u.b=!0
this.a.W(u)}},
al:function(){this.bK()
this.c3(100)}}
O.bV.prototype={}
T.cA.prototype={}
T.dW.prototype={}
T.i3.prototype={
gq:function(){var u=this.y
if(u==null){u=D.Q()
this.y=u}return u}}
T.i4.prototype={
jD:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.aM(u,3553,t)
C.b.bC(u,3553,10242,10497)
C.b.bC(u,3553,10243,10497)
C.b.bC(u,3553,10241,9987)
C.b.bC(u,3553,10240,9729)
C.b.aM(u,3553,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.i3()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.p
W.aa(s,"load",H.n(new T.i5(this,r,s,!1,t,!1,!0),{func:1,ret:-1,args:[u]}),!1,u)
return r},
jC:function(a,b,c){return this.jD(a,!1,b,!1,c)},
i4:function(a,b,c){var u,t,s,r
b=V.kE(b,2)
u=V.kE(a.width,2)
t=V.kE(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.k9(null,null)
s.width=u
s.height=t
r=H.e(C.n.eL(s,"2d"),"$ibG")
r.imageSmoothingEnabled=!1;(r&&C.x).jm(r,a,0,0,s.width,s.height)
return P.nM(C.x.fQ(r,0,0,s.width,s.height))}}}
T.i5.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.i4(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.aM(t,3553,this.e)
C.b.jY(t,37440,this.f?1:0)
C.b.kb(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.eH(t,3553)
C.b.aM(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.jn()}++s.e},
$S:10}
V.f6.prototype={
aQ:function(a,b){return!0},
i:function(a){return"all"},
$ibb:1}
V.bb.prototype={}
V.dA.prototype={
aQ:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)if(u[s].aQ(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.E)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sax:function(a){this.a=H.l(a,"$ib",[V.bb],"$ab")},
$ibb:1}
V.bd.prototype={
aQ:function(a,b){return!this.eW(0,b)},
i:function(a){return"!["+this.cP(0)+"]"}}
V.hI.prototype={
f_:function(a){var u,t
if(a.a.length<=0)throw H.c(P.u("May not create a SetMatcher with zero characters."))
u=new H.aF([P.o,P.X])
for(t=new H.dy(a,a.gk(a),0,[H.au(a,"x",0)]);t.A();)u.l(0,t.d,!0)
this.si5(u)},
aQ:function(a,b){return this.a.bh(0,b)},
i:function(a){var u=this.a
return P.dR(u.gap(u),0,null)},
si5:function(a){this.a=H.l(a,"$iC",[P.o,P.X],"$aC")},
$ibb:1}
V.cy.prototype={
w:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cC(this.a.O(0,b))
r.sax(H.d([],[V.bb]))
r.c=!1
C.a.h(this.c,r)
return r},
jr:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
if(r.aQ(0,a))return r}return},
i:function(a){return this.b},
siv:function(a){this.c=H.l(a,"$ib",[V.cC],"$ab")}}
V.e0.prototype={
i:function(a){var u,t
u=H.lT(this.b,"\n","\\n")
t=H.lT(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cB.prototype={
i:function(a){return this.b},
shZ:function(a){var u=P.i
this.c=H.l(a,"$iC",[u,u],"$aC")}}
V.i8.prototype={
O:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cy(this,b)
u.siv(H.d([],[V.cC]))
u.d=null
this.a.l(0,b,u)}return u},
b6:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cB(this,a)
t=P.i
u.shZ(new H.aF([t,t]))
this.b.l(0,a,u)}return u},
kh:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.d([],[V.e0])
t=this.c
s=[P.o]
r=H.d([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.F(a,o)
m=t.jr(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.dR(r,0,null)
throw H.c(P.u("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.d([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.dR(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.e0(j==null?k.b:j,l,o)}++o}}},
sij:function(a){this.a=H.l(a,"$iC",[P.i,V.cy],"$aC")},
sio:function(a){this.b=H.l(a,"$iC",[P.i,V.cB],"$aC")}}
V.cC.prototype={
i:function(a){return this.b.b+": "+this.cP(0)}}
X.de.prototype={$ibc:1}
X.fP.prototype={
gq:function(){var u=this.x
if(u==null){u=D.Q()
this.x=u}return u}}
X.dH.prototype={
gq:function(){var u=this.f
if(u==null){u=D.Q()
this.f=u}return u},
aI:function(a){var u
H.e(a,"$iA")
u=this.f
if(u!=null)u.D(a)},
fl:function(){return this.aI(null)},
saR:function(a){var u,t
if(!J.a0(this.b,a)){u=this.b
if(u!=null)u.gq().a_(0,this.gcW())
t=this.b
this.b=a
if(a!=null)a.gq().h(0,this.gcW())
u=new D.H("mover",t,this.b,this,[U.a8])
u.b=!0
this.aI(u)}},
$ibc:1,
$ide:1}
X.dU.prototype={}
V.fk.prototype={
iX:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
H.n(c,{func:1,ret:-1,args:[P.X]})
if(this.c==null)return
u=this.d.length
t=P.kn().gbA().j(0,this.a)
if(t==null||t.length<=u){s=!0
r=!1}else{if(u>=t.length)return H.f(t,u)
r=t[u]==="1"
s=!1}c.$1(r)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
J.kK(this.c).h(0,p)
n=W.mu("checkbox")
n.checked=r
o=W.p
W.aa(n,"change",H.n(new V.fl(this,c,n,u),{func:1,ret:-1,args:[o]}),!1,o)
C.B.X(p,n)
m=q.createElement("span")
m.textContent=b
C.B.X(p,m)
J.kK(this.c).h(0,q.createElement("br"))
C.a.h(this.d,n)
if(s)this.dw(u,r)},
dw:function(a,b){var u,t,s,r,q,p,o
u=this.a
t=P.kn().gbA().j(0,u)
if(t==null)t=""
s=t.length
if(s<a)t=C.c.jQ(t,a-s+1,"0")
r=a>0?C.c.p(t,0,a):""
r+=b?"1":"0"
s=a+1
if(s<t.length)r+=C.c.at(t,s)
q=P.kn()
s=P.i
p=P.mA(q.gbA(),s,s)
p.l(0,u,r)
o=q.es(0,p)
u=window.history
s=o.i(0)
u.toString;(u&&C.O).i0(u,new P.jo([],[]).cJ(""),"",s)},
sfv:function(a){this.d=H.l(a,"$ib",[W.ca],"$ab")}}
V.fl.prototype={
$1:function(a){var u=this.c
this.b.$1(u.checked)
this.a.dw(this.d,u.checked)},
$S:10}
V.k1.prototype={
$1:function(a){H.e(a,"$ib2")
P.c4(C.j.eA(this.a.gju(),2)+" fps")},
$S:48}
V.hM.prototype={
f1:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.w).X(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.w.X(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.l.X(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.l.X(q,p)}o=u.createElement("div")
this.a=o
C.l.X(q,o)
this.b=null
o=W.p
W.aa(u,"scroll",H.n(new V.hO(s),{func:1,ret:-1,args:[o]}),!1,o)},
dB:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.i],"$ab")
this.ic()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.kh(C.a.jz(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.E)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.l.X(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.l.X(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.l.X(t,o)
break
case"Link":n=p.b
if(H.o6(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.f(m,1)
l.href=H.K(m[1])
l.textContent=H.K(m[0])
C.l.X(t,l)}else{k=P.jy(C.a_,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.m(k)
l.textContent=n
C.l.X(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.l.X(t,o)
break}}C.l.X(this.a,t)},
iY:function(a){var u,t,s,r,q,p,o
H.l(a,"$ib",[P.i],"$ab")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.l.X(this.a,t)
r=C.a4.fS(t,-1)
s=H.e((r&&C.G).de(r,-1),"$ib1").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto"
for(q=0;q<1;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.e(C.G.de(r,-1),"$ib1")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.a3).X(o,p)}},
ic:function(){var u,t,s,r
if(this.b!=null)return
u=new V.i8()
t=P.i
u.sij(new H.aF([t,V.cy]))
u.sio(new H.aF([t,V.cB]))
u.c=null
u.c=u.O(0,"Start")
t=u.O(0,"Start").w(0,"Bold")
s=V.aj(new H.a6("*"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,"Bold").w(0,"Bold")
s=new V.bd()
r=[V.bb]
s.sax(H.d([],r))
C.a.h(t.a,s)
t=V.aj(new H.a6("*"))
C.a.h(s.a,t)
t=u.O(0,"Bold").w(0,"BoldEnd")
s=V.aj(new H.a6("*"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,"Start").w(0,"Italic")
s=V.aj(new H.a6("_"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,"Italic").w(0,"Italic")
s=new V.bd()
s.sax(H.d([],r))
C.a.h(t.a,s)
t=V.aj(new H.a6("_"))
C.a.h(s.a,t)
t=u.O(0,"Italic").w(0,"ItalicEnd")
s=V.aj(new H.a6("_"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,"Start").w(0,"Code")
s=V.aj(new H.a6("`"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,"Code").w(0,"Code")
s=new V.bd()
s.sax(H.d([],r))
C.a.h(t.a,s)
t=V.aj(new H.a6("`"))
C.a.h(s.a,t)
t=u.O(0,"Code").w(0,"CodeEnd")
s=V.aj(new H.a6("`"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,"Start").w(0,"LinkHead")
s=V.aj(new H.a6("["))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,"LinkHead").w(0,"LinkTail")
s=V.aj(new H.a6("|"))
C.a.h(t.a,s)
s=u.O(0,"LinkHead").w(0,"LinkEnd")
t=V.aj(new H.a6("]"))
C.a.h(s.a,t)
s.c=!0
s=u.O(0,"LinkHead").w(0,"LinkHead")
t=new V.bd()
t.sax(H.d([],r))
C.a.h(s.a,t)
s=V.aj(new H.a6("|]"))
C.a.h(t.a,s)
s=u.O(0,"LinkTail").w(0,"LinkEnd")
t=V.aj(new H.a6("]"))
C.a.h(s.a,t)
s.c=!0
s=u.O(0,"LinkTail").w(0,"LinkTail")
t=new V.bd()
t.sax(H.d([],r))
C.a.h(s.a,t)
s=V.aj(new H.a6("|]"))
C.a.h(t.a,s)
C.a.h(u.O(0,"Start").w(0,"Other").a,new V.f6())
s=u.O(0,"Other").w(0,"Other")
t=new V.bd()
t.sax(H.d([],r))
C.a.h(s.a,t)
s=V.aj(new H.a6("*_`["))
C.a.h(t.a,s)
s=u.O(0,"BoldEnd")
s.d=s.a.b6("Bold")
s=u.O(0,"ItalicEnd")
s.d=s.a.b6("Italic")
s=u.O(0,"CodeEnd")
s.d=s.a.b6("Code")
s=u.O(0,"LinkEnd")
s.d=s.a.b6("Link")
s=u.O(0,"Other")
s.d=s.a.b6("Other")
this.b=u}}
V.hO.prototype={
$1:function(a){P.ld(C.t,new V.hN(this.a))},
$S:10}
V.hN.prototype={
$0:function(){var u,t,s
u=C.j.ai(document.documentElement.scrollTop)
t=this.a.style
s=H.m(-0.01*u)+"px"
t.top=s},
$S:2}
X.jY.prototype={
$1:function(a){var u,t,s,r,q
H.e(a,"$iA")
u=this.a
t=-this.b.c.d
s=Math.cos(t)
r=Math.sin(t)
t=new V.aG(s,0,-r,0,1,0,r,0,s)
if(!J.a0(u.z,t)){q=u.z
u.z=t
u.Q=t.bx(0)
t=new D.H("velocityRotation",q,u.z,u,[V.aG])
t.b=!0
u.I(t)}},
$S:8}
X.jZ.prototype={
$1:function(a){this.a.r.r=a},
$S:37};(function aliases(){var u=J.a.prototype
u.eU=u.i
u=J.du.prototype
u.eV=u.i
u=O.cn.prototype
u.cQ=u.al
u=O.aZ.prototype
u.bK=u.al
u=V.dA.prototype
u.eW=u.aQ
u.cP=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"nG","nc",11)
u(P,"nH","nd",11)
u(P,"nI","ne",11)
t(P,"lI","nF",3)
var n
s(n=E.al.prototype,"gej",0,0,null,["$1","$0"],["ek","jN"],0,0)
s(n,"gel",0,0,null,["$1","$0"],["em","jO"],0,0)
s(n,"geh",0,0,null,["$1","$0"],["ei","jM"],0,0)
s(n,"gef",0,0,null,["$1","$0"],["eg","jJ"],0,0)
r(n,"gjH","jI",7)
r(n,"gjK","jL",7)
s(n=E.e_.prototype,"gcS",0,0,null,["$1","$0"],["cU","cT"],0,0)
q(n,"gk6","eu",3)
p(n=X.dv.prototype,"gf6","f7",31)
r(n,"gf4","f5",18)
r(n,"gf8","f9",18)
p(n,"gbL","bM",1)
p(n,"gbY","bZ",1)
p(n=X.e6.prototype,"ghs","ht",12)
p(n,"ghg","hh",12)
p(n,"ghm","hn",4)
p(n,"gbY","bZ",22)
p(n,"gbL","bM",22)
p(n,"ghy","hz",4)
p(n,"ghC","hD",4)
p(n,"ghq","hr",4)
p(n,"ghA","hB",4)
p(n,"gho","hp",4)
p(n,"ghE","hF",49)
p(n,"ghG","hH",12)
p(n,"ghS","hT",13)
p(n,"ghO","hP",13)
p(n,"ghQ","hR",13)
s(D.bn.prototype,"gfb",0,0,null,["$1","$0"],["au","fc"],0,0)
s(n=D.dx.prototype,"gdj",0,0,null,["$1","$0"],["dk","hw"],0,0)
p(n,"ghI","hJ",39)
r(n,"gha","hb",23)
r(n,"ghM","hN",23)
o(V.a5.prototype,"gk","cw",24)
o(V.P.prototype,"gk","cw",24)
s(n=U.cj.prototype,"gaF",0,0,null,["$1","$0"],["I","a7"],0,0)
r(n,"gh8","h9",14)
r(n,"ghK","hL",14)
s(n=U.e7.prototype,"gaF",0,0,null,["$1","$0"],["I","a7"],0,0)
p(n,"gh2","h3",1)
p(n,"gh4","h5",1)
p(n,"gh6","h7",1)
p(n,"gfZ","h_",1)
p(n,"gh0","h1",1)
p(n,"git","iu",1)
p(n,"gir","is",1)
p(n,"gip","iq",1)
s(n=U.e8.prototype,"gaF",0,0,null,["$1","$0"],["I","a7"],0,0)
p(n,"ghu","hv",1)
s(n=M.dj.prototype,"gaG",0,0,null,["$1","$0"],["aH","fi"],0,0)
r(n,"ghi","hj",7)
r(n,"ghk","hl",7)
s(n=O.dB.prototype,"gbd",0,0,null,["$1","$0"],["W","bX"],0,0)
s(n,"gi2",0,0,null,["$1","$0"],["dq","i3"],0,0)
r(n,"ghc","hd",15)
r(n,"ghe","hf",15)
s(O.cn.prototype,"gbd",0,0,null,["$1","$0"],["W","bX"],0,0)
s(X.dH.prototype,"gcW",0,0,null,["$1","$0"],["aI","fl"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.R,null)
s(P.R,[H.kf,J.a,J.ap,P.eq,P.h,H.dy,P.aV,H.bN,H.cL,H.fp,H.hz,H.id,P.bp,H.cb,H.eH,P.ag,H.fX,H.fZ,H.fT,P.eN,P.b7,P.az,P.eb,P.hW,P.cz,P.hX,P.b2,P.ak,P.jC,P.jk,P.cO,P.je,P.x,P.jt,P.h5,P.bH,P.jB,P.jz,P.X,P.as,P.a2,P.bo,P.ht,P.dQ,P.ej,P.fO,P.b,P.C,P.G,P.aq,P.i,P.am,P.bW,P.iu,P.jl,W.fs,W.ca,W.B,W.dl,P.jn,P.eS,P.jf,P.O,O.Y,O.co,E.fg,E.al,E.hA,E.e_,Z.ea,Z.iO,Z.dc,Z.bq,Z.b5,D.fj,D.bM,D.A,X.dd,X.V,X.fV,X.h2,X.a4,X.hk,X.i9,X.e6,D.bn,D.a7,D.dI,D.dP,D.dX,D.dY,D.dZ,V.Z,V.bI,V.fF,V.aG,V.ad,V.ah,V.ai,V.cv,V.dL,V.a5,V.P,U.e7,U.e8,M.dj,A.d8,A.f9,A.hb,A.cD,A.cH,A.cF,A.cI,A.cG,A.cJ,A.bJ,A.e2,A.io,F.ab,F.ba,F.bw,F.dO,F.hJ,F.hK,F.hL,F.aQ,F.iE,F.iF,F.iI,F.iJ,O.bV,O.cn,T.i4,V.f6,V.bb,V.dA,V.hI,V.cy,V.e0,V.cB,V.i8,X.de,X.dU,X.dH,V.fk,V.hM])
s(J.a,[J.fS,J.ds,J.du,J.aW,J.dt,J.bP,H.cq,H.bv,W.j,W.f5,W.bE,W.bG,W.aT,W.aU,W.S,W.ed,W.fw,W.fx,W.ef,W.di,W.eh,W.fz,W.p,W.ek,W.aE,W.dn,W.em,W.b9,W.h1,W.he,W.er,W.es,W.aH,W.et,W.ew,W.aI,W.eA,W.eC,W.aK,W.eD,W.aL,W.eI,W.aw,W.eL,W.i7,W.aN,W.eO,W.ib,W.iz,W.eU,W.eW,W.eY,W.f_,W.f1,P.aY,P.eo,P.b0,P.ey,P.hx,P.eJ,P.b3,P.eQ,P.fa,P.ec,P.da,P.dm,P.dK,P.bU,P.dN,P.dV,P.e3,P.eF])
s(J.du,[J.hu,J.cK,J.bt])
t(J.ke,J.aW)
s(J.dt,[J.dr,J.dq])
t(P.h0,P.eq)
s(P.h0,[H.e4,W.iW,W.iV,P.fK])
t(H.a6,H.e4)
s(P.h,[H.fC,H.h6,H.iP])
s(P.aV,[H.h7,H.iQ])
t(H.fq,H.fp)
s(P.bp,[H.hq,H.fU,H.is,H.ig,H.fi,H.hG,P.dG,P.aR,P.it,P.iq,P.hS,P.fn,P.fv])
s(H.cb,[H.k2,H.i0,H.jT,H.jU,H.jV,P.iS,P.iR,P.iT,P.iU,P.js,P.jr,P.j1,P.j5,P.j2,P.j3,P.j4,P.j8,P.j9,P.j7,P.j6,P.hY,P.hZ,P.jK,P.ji,P.jh,P.jj,P.h_,P.h4,P.jA,P.fA,P.fB,P.iy,P.iv,P.iw,P.ix,P.ju,P.jv,P.jx,P.jw,P.jG,P.jF,P.jH,P.jI,W.hg,W.hi,W.hF,W.hV,W.j0,P.jp,P.jM,P.fL,P.fM,P.fc,E.hB,E.hC,E.hD,E.i6,D.fH,D.fI,F.jD,F.jQ,F.jR,F.iL,F.iK,F.iG,F.iH,T.i5,V.fl,V.k1,V.hO,V.hN,X.jY,X.jZ])
s(H.i0,[H.hT,H.c8])
t(P.h3,P.ag)
t(H.aF,P.h3)
t(H.fY,H.fC)
t(H.dD,H.bv)
s(H.dD,[H.cP,H.cR])
t(H.cQ,H.cP)
t(H.cr,H.cQ)
t(H.cS,H.cR)
t(H.dE,H.cS)
s(H.dE,[H.hl,H.hm,H.hn,H.ho,H.hp,H.dF,H.cs])
t(P.jg,P.jC)
t(P.jd,P.jk)
t(P.eT,P.h5)
t(P.e5,P.eT)
s(P.bH,[P.fe,P.fD])
t(P.bL,P.hX)
s(P.bL,[P.ff,P.iC,P.iB])
t(P.iA,P.fD)
s(P.a2,[P.y,P.o])
s(P.aR,[P.bT,P.fQ])
t(P.iY,P.bW)
s(W.j,[W.F,W.fJ,W.aJ,W.cT,W.aM,W.ax,W.cV,W.iN,W.cM,P.fd,P.bD])
s(W.F,[W.a1,W.bm,W.cg])
s(W.a1,[W.w,P.q])
s(W.w,[W.f7,W.f8,W.d9,W.bF,W.cf,W.fN,W.ck,W.cl,W.dw,W.cp,W.hH,W.b1,W.dS,W.dT])
s(W.aT,[W.cd,W.ft,W.fu])
t(W.fr,W.aU)
t(W.ce,W.ed)
t(W.eg,W.ef)
t(W.dh,W.eg)
t(W.ei,W.eh)
t(W.fy,W.ei)
t(W.av,W.bE)
t(W.el,W.ek)
t(W.ch,W.el)
t(W.en,W.em)
t(W.bO,W.en)
t(W.dp,W.cg)
t(W.bz,W.p)
s(W.bz,[W.aX,W.ae,W.aO])
t(W.hf,W.er)
t(W.hh,W.es)
t(W.eu,W.et)
t(W.hj,W.eu)
t(W.ex,W.ew)
t(W.ct,W.ex)
t(W.eB,W.eA)
t(W.hv,W.eB)
t(W.hE,W.eC)
t(W.cU,W.cT)
t(W.hP,W.cU)
t(W.eE,W.eD)
t(W.hQ,W.eE)
t(W.hU,W.eI)
t(W.eM,W.eL)
t(W.i1,W.eM)
t(W.cW,W.cV)
t(W.i2,W.cW)
t(W.eP,W.eO)
t(W.ia,W.eP)
t(W.iM,W.cp)
t(W.b6,W.ae)
t(W.eV,W.eU)
t(W.iX,W.eV)
t(W.ee,W.di)
t(W.eX,W.eW)
t(W.ja,W.eX)
t(W.eZ,W.eY)
t(W.ev,W.eZ)
t(W.f0,W.f_)
t(W.jm,W.f0)
t(W.f2,W.f1)
t(W.jq,W.f2)
t(W.iZ,P.hW)
t(W.kr,W.iZ)
t(W.j_,P.cz)
t(P.jo,P.jn)
t(P.a9,P.jf)
t(P.ep,P.eo)
t(P.fW,P.ep)
t(P.ez,P.ey)
t(P.hr,P.ez)
t(P.eK,P.eJ)
t(P.i_,P.eK)
t(P.eR,P.eQ)
t(P.ic,P.eR)
t(P.fb,P.ec)
t(P.hs,P.bD)
t(P.eG,P.eF)
t(P.hR,P.eG)
s(E.fg,[Z.db,A.cx,T.cA])
s(D.A,[D.br,D.bs,D.H,X.bQ,X.hw])
s(O.Y,[X.dv,D.dx,U.cj])
s(X.hw,[X.dz,X.bu,X.e1])
s(D.fj,[U.fm,U.a8])
s(U.a8,[U.cc,U.dM])
t(A.h8,A.cx)
s(A.e2,[A.M,A.ij,A.ik,A.im,A.ih,A.a_,A.ii,A.L,A.il,A.ip,A.cE,A.at,A.an,A.ao])
t(O.dB,O.bV)
s(O.cn,[O.h9,O.ha,O.aZ])
s(O.aZ,[O.hc,O.hd])
t(T.dW,T.cA)
t(T.i3,T.dW)
s(V.dA,[V.bd,V.cC])
t(X.fP,X.dU)
u(H.e4,H.cL)
u(H.cP,P.x)
u(H.cQ,H.bN)
u(H.cR,P.x)
u(H.cS,H.bN)
u(P.eq,P.x)
u(P.eT,P.jt)
u(W.ed,W.fs)
u(W.ef,P.x)
u(W.eg,W.B)
u(W.eh,P.x)
u(W.ei,W.B)
u(W.ek,P.x)
u(W.el,W.B)
u(W.em,P.x)
u(W.en,W.B)
u(W.er,P.ag)
u(W.es,P.ag)
u(W.et,P.x)
u(W.eu,W.B)
u(W.ew,P.x)
u(W.ex,W.B)
u(W.eA,P.x)
u(W.eB,W.B)
u(W.eC,P.ag)
u(W.cT,P.x)
u(W.cU,W.B)
u(W.eD,P.x)
u(W.eE,W.B)
u(W.eI,P.ag)
u(W.eL,P.x)
u(W.eM,W.B)
u(W.cV,P.x)
u(W.cW,W.B)
u(W.eO,P.x)
u(W.eP,W.B)
u(W.eU,P.x)
u(W.eV,W.B)
u(W.eW,P.x)
u(W.eX,W.B)
u(W.eY,P.x)
u(W.eZ,W.B)
u(W.f_,P.x)
u(W.f0,W.B)
u(W.f1,P.x)
u(W.f2,W.B)
u(P.eo,P.x)
u(P.ep,W.B)
u(P.ey,P.x)
u(P.ez,W.B)
u(P.eJ,P.x)
u(P.eK,W.B)
u(P.eQ,P.x)
u(P.eR,W.B)
u(P.ec,P.ag)
u(P.eF,P.x)
u(P.eG,W.B)})();(function constants(){var u=hunkHelpers.makeConstList
C.w=W.d9.prototype
C.n=W.bF.prototype
C.x=W.bG.prototype
C.l=W.cf.prototype
C.O=W.dn.prototype
C.y=W.dp.prototype
C.P=J.a.prototype
C.a=J.aW.prototype
C.Q=J.dq.prototype
C.f=J.dr.prototype
C.u=J.ds.prototype
C.j=J.dt.prototype
C.c=J.bP.prototype
C.X=J.bt.prototype
C.B=W.dw.prototype
C.a2=W.ct.prototype
C.F=J.hu.prototype
C.b=P.bU.prototype
C.a3=W.b1.prototype
C.a4=W.dS.prototype
C.G=W.dT.prototype
C.v=J.cK.prototype
C.H=W.b6.prototype
C.I=W.cM.prototype
C.K=new P.ff(!1)
C.J=new P.fe(C.K)
C.L=new P.ht()
C.M=new P.iC()
C.k=new P.jg()
C.d=new A.bJ(0,"ColorSourceType.None")
C.i=new A.bJ(1,"ColorSourceType.Solid")
C.e=new A.bJ(2,"ColorSourceType.Texture2D")
C.h=new A.bJ(3,"ColorSourceType.TextureCube")
C.t=new P.bo(0)
C.N=new P.bo(5e6)
C.R=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.S=function(hooks) {
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
C.z=function(hooks) { return hooks; }

C.T=function(getTagFallback) {
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
C.U=function() {
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
C.V=function(hooks) {
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
C.W=function(hooks) {
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
C.A=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.C=H.d(u([127,2047,65535,1114111]),[P.o])
C.o=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.o])
C.p=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.o])
C.q=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.o])
C.Z=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.o])
C.a_=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.o])
C.r=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.o])
C.D=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.o])
C.a0=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.o])
C.E=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.o])
C.Y=H.d(u([]),[P.i])
C.a1=new H.fq(0,{},C.Y,[P.i,P.i])
C.m=new P.iA(!1)})();(function staticFields(){$.aS=0
$.c9=null
$.kM=null
$.ku=!1
$.lM=null
$.lG=null
$.lS=null
$.jN=null
$.jW=null
$.kC=null
$.bY=null
$.d_=null
$.d0=null
$.kv=!1
$.W=C.k
$.kW=null
$.l_=null
$.l3=null
$.cu=null
$.l8=null
$.lj=null
$.lm=null
$.ll=null
$.iD=null
$.lk=null
$.l2=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oc","lX",function(){return H.lL("_$dart_dartClosure")})
u($,"od","kF",function(){return H.lL("_$dart_js")})
u($,"oi","lY",function(){return H.b4(H.ie({
toString:function(){return"$receiver$"}}))})
u($,"oj","lZ",function(){return H.b4(H.ie({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"ok","m_",function(){return H.b4(H.ie(null))})
u($,"ol","m0",function(){return H.b4(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oo","m3",function(){return H.b4(H.ie(void 0))})
u($,"op","m4",function(){return H.b4(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"on","m2",function(){return H.b4(H.lf(null))})
u($,"om","m1",function(){return H.b4(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"or","m6",function(){return H.b4(H.lf(void 0))})
u($,"oq","m5",function(){return H.b4(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"oH","kG",function(){return P.nb()})
u($,"oL","d5",function(){return[]})
u($,"ot","m7",function(){return P.n7()})
u($,"oI","mb",function(){return H.mH(H.bX(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))})
u($,"oJ","mc",function(){return P.mW("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"oK","md",function(){return P.nx()})
u($,"oA","ma",function(){return Z.ay(0)})
u($,"ou","m8",function(){return Z.ay(511)})
u($,"oC","bj",function(){return Z.ay(1)})
u($,"oB","bi",function(){return Z.ay(2)})
u($,"ow","bh",function(){return Z.ay(4)})
u($,"oD","bk",function(){return Z.ay(8)})
u($,"oE","bl",function(){return Z.ay(16)})
u($,"ox","d3",function(){return Z.ay(32)})
u($,"oy","d4",function(){return Z.ay(64)})
u($,"oz","m9",function(){return Z.ay(96)})
u($,"oF","c7",function(){return Z.ay(128)})
u($,"ov","bg",function(){return Z.ay(256)})
u($,"ob","lW",function(){return new V.fF(1e-9)})
u($,"oa","I",function(){return $.lW()})})()
var v={mangledGlobalNames:{o:"int",y:"double",a2:"num",i:"String",X:"bool",G:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.A]},{func:1,ret:-1,args:[D.A]},{func:1,ret:P.G},{func:1,ret:-1},{func:1,ret:-1,args:[W.ae]},{func:1,ret:P.G,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:-1,args:[P.o,[P.h,E.al]]},{func:1,ret:P.G,args:[D.A]},{func:1,ret:P.G,args:[F.ab]},{func:1,ret:P.G,args:[W.p]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.p]},{func:1,ret:-1,args:[W.aO]},{func:1,ret:-1,args:[P.o,[P.h,U.a8]]},{func:1,ret:-1,args:[P.o,[P.h,V.ad]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[P.o,[P.h,X.V]]},{func:1,ret:P.G,args:[,]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:P.i,args:[P.o]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:-1,args:[P.o,[P.h,D.a7]]},{func:1,ret:P.y},{func:1,ret:P.G,args:[F.aQ,P.y,P.y]},{func:1,ret:P.G,args:[,],opt:[P.aq]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:P.G,args:[P.i,,]},{func:1,ret:P.G,args:[P.a2]},{func:1,ret:P.G,args:[P.i]},{func:1,ret:P.X,args:[[P.h,X.V]]},{func:1,ret:P.O,args:[P.o]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:P.O,args:[,,]},{func:1,args:[,P.i]},{func:1,ret:P.G,args:[P.X]},{func:1,ret:[P.C,P.i,P.i],args:[[P.C,P.i,P.i],P.i]},{func:1,ret:P.X,args:[[P.h,D.a7]]},{func:1,args:[W.p]},{func:1,ret:P.X,args:[W.F]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:W.a1,args:[W.F]},{func:1,ret:P.y,args:[P.y,P.y]},{func:1,ret:-1,args:[P.i,P.o]},{func:1,args:[P.i]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:P.G,args:[P.b2]},{func:1,ret:-1,args:[W.b6]},{func:1,ret:[P.az,,],args:[,]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cq,DataView:H.bv,ArrayBufferView:H.bv,Float32Array:H.cr,Float64Array:H.cr,Int16Array:H.hl,Int32Array:H.hm,Int8Array:H.hn,Uint16Array:H.ho,Uint32Array:H.hp,Uint8ClampedArray:H.dF,CanvasPixelArray:H.dF,Uint8Array:H.cs,HTMLBRElement:W.w,HTMLBaseElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLLIElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTableSectionElement:W.w,HTMLTemplateElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,AccessibleNodeList:W.f5,HTMLAnchorElement:W.f7,HTMLAreaElement:W.f8,Blob:W.bE,HTMLBodyElement:W.d9,HTMLCanvasElement:W.bF,CanvasRenderingContext2D:W.bG,CDATASection:W.bm,CharacterData:W.bm,Comment:W.bm,ProcessingInstruction:W.bm,Text:W.bm,CSSNumericValue:W.cd,CSSUnitValue:W.cd,CSSPerspective:W.fr,CSSCharsetRule:W.S,CSSConditionRule:W.S,CSSFontFaceRule:W.S,CSSGroupingRule:W.S,CSSImportRule:W.S,CSSKeyframeRule:W.S,MozCSSKeyframeRule:W.S,WebKitCSSKeyframeRule:W.S,CSSKeyframesRule:W.S,MozCSSKeyframesRule:W.S,WebKitCSSKeyframesRule:W.S,CSSMediaRule:W.S,CSSNamespaceRule:W.S,CSSPageRule:W.S,CSSRule:W.S,CSSStyleRule:W.S,CSSSupportsRule:W.S,CSSViewportRule:W.S,CSSStyleDeclaration:W.ce,MSStyleCSSProperties:W.ce,CSS2Properties:W.ce,CSSImageValue:W.aT,CSSKeywordValue:W.aT,CSSPositionValue:W.aT,CSSResourceValue:W.aT,CSSURLImageValue:W.aT,CSSStyleValue:W.aT,CSSMatrixComponent:W.aU,CSSRotation:W.aU,CSSScale:W.aU,CSSSkew:W.aU,CSSTranslation:W.aU,CSSTransformComponent:W.aU,CSSTransformValue:W.ft,CSSUnparsedValue:W.fu,DataTransferItemList:W.fw,HTMLDivElement:W.cf,XMLDocument:W.cg,Document:W.cg,DOMException:W.fx,ClientRectList:W.dh,DOMRectList:W.dh,DOMRectReadOnly:W.di,DOMStringList:W.fy,DOMTokenList:W.fz,Element:W.a1,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,ProgressEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,ResourceProgressEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.av,FileList:W.ch,FileWriter:W.fJ,HTMLFormElement:W.fN,Gamepad:W.aE,History:W.dn,HTMLCollection:W.bO,HTMLFormControlsCollection:W.bO,HTMLOptionsCollection:W.bO,HTMLDocument:W.dp,ImageData:W.b9,HTMLImageElement:W.ck,HTMLInputElement:W.cl,KeyboardEvent:W.aX,HTMLLabelElement:W.dw,Location:W.h1,HTMLAudioElement:W.cp,HTMLMediaElement:W.cp,MediaList:W.he,MIDIInputMap:W.hf,MIDIOutputMap:W.hh,MimeType:W.aH,MimeTypeArray:W.hj,PointerEvent:W.ae,MouseEvent:W.ae,DragEvent:W.ae,DocumentFragment:W.F,ShadowRoot:W.F,Attr:W.F,DocumentType:W.F,Node:W.F,NodeList:W.ct,RadioNodeList:W.ct,Plugin:W.aI,PluginArray:W.hv,RTCStatsReport:W.hE,HTMLSelectElement:W.hH,SourceBuffer:W.aJ,SourceBufferList:W.hP,SpeechGrammar:W.aK,SpeechGrammarList:W.hQ,SpeechRecognitionResult:W.aL,Storage:W.hU,CSSStyleSheet:W.aw,StyleSheet:W.aw,HTMLTableCellElement:W.b1,HTMLTableDataCellElement:W.b1,HTMLTableHeaderCellElement:W.b1,HTMLTableElement:W.dS,HTMLTableRowElement:W.dT,TextTrack:W.aM,TextTrackCue:W.ax,VTTCue:W.ax,TextTrackCueList:W.i1,TextTrackList:W.i2,TimeRanges:W.i7,Touch:W.aN,TouchEvent:W.aO,TouchList:W.ia,TrackDefaultList:W.ib,CompositionEvent:W.bz,FocusEvent:W.bz,TextEvent:W.bz,UIEvent:W.bz,URL:W.iz,HTMLVideoElement:W.iM,VideoTrackList:W.iN,WheelEvent:W.b6,Window:W.cM,DOMWindow:W.cM,CSSRuleList:W.iX,ClientRect:W.ee,DOMRect:W.ee,GamepadList:W.ja,NamedNodeMap:W.ev,MozNamedAttrMap:W.ev,SpeechRecognitionResultList:W.jm,StyleSheetList:W.jq,SVGLength:P.aY,SVGLengthList:P.fW,SVGNumber:P.b0,SVGNumberList:P.hr,SVGPointList:P.hx,SVGStringList:P.i_,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGScriptElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGTransform:P.b3,SVGTransformList:P.ic,AudioBuffer:P.fa,AudioParamMap:P.fb,AudioTrackList:P.fd,AudioContext:P.bD,webkitAudioContext:P.bD,BaseAudioContext:P.bD,OfflineAudioContext:P.hs,WebGLBuffer:P.da,WebGLFramebuffer:P.dm,WebGLProgram:P.dK,WebGL2RenderingContext:P.bU,WebGLShader:P.dN,WebGLTexture:P.dV,WebGLUniformLocation:P.e3,SQLResultSetRowList:P.hR})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dD.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.cr.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
H.cS.$nativeSuperclassTag="ArrayBufferView"
H.dE.$nativeSuperclassTag="ArrayBufferView"
W.cT.$nativeSuperclassTag="EventTarget"
W.cU.$nativeSuperclassTag="EventTarget"
W.cV.$nativeSuperclassTag="EventTarget"
W.cW.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.lP,[])
else X.lP([])})})()
//# sourceMappingURL=test.dart.js.map
