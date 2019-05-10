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
a[c]=function(){a[c]=function(){H.pl(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lp"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lp"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lp(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={l4:function l4(a){this.a=a},
ky:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
he:function(){return new P.c5("No element")},
nG:function(){return new P.c5("Too many elements")},
nF:function(){return new P.c5("Too few elements")},
v:function v(a){this.a=a},
fV:function fV(){},
c_:function c_(){},
cy:function cy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hw:function hw(a,b,c){this.a=a
this.b=b
this.$ti=c},
hx:function hx(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hy:function hy(a,b,c){this.a=a
this.b=b
this.$ti=c},
cX:function cX(a,b,c){this.a=a
this.b=b
this.$ti=c},
jp:function jp(a,b,c){this.a=a
this.b=b
this.$ti=c},
bW:function bW(){},
cV:function cV(){},
ei:function ei(){},
nw:function(){throw H.c(P.I("Cannot modify unmodifiable Map"))},
ci:function(a){var u,t
u=H.H(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
p2:function(a){return v.types[H.aj(a)]},
p9:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Z(a).$iK},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.au(a)
if(typeof u!=="string")throw H.c(H.ax(a))
return u},
o3:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.hf(u)
t=u[0]
s=u[1]
return new H.i5(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cG:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
o0:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.h(u,3)
t=H.H(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ae(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.b.I(r,p)|32)>s)return}return parseInt(a,b)},
c1:function(a){return H.nS(a)+H.lm(H.bP(a),0,null)},
nS:function(a){var u,t,s,r,q,p,o,n,m
u=J.Z(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Y||!!u.$ibL){p=C.E(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.ci(r.length>1&&C.b.I(r,0)===36?C.b.ar(r,1):r)},
nT:function(){if(!!self.location)return self.location.href
return},
m2:function(a){var u,t,s,r,q
H.kE(a)
u=J.aD(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
o1:function(a){var u,t,s,r
u=H.d([],[P.o])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.ax(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.aV(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.ax(r))}return H.m2(u)},
m3:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ax(s))
if(s<0)throw H.c(H.ax(s))
if(s>65535)return H.o1(a)}return H.m2(a)},
o2:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c2:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aV(u,10))>>>0,56320|u&1023)}}throw H.c(P.ae(a,0,1114111,null,null))},
c0:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o_:function(a){var u=H.c0(a).getFullYear()+0
return u},
nY:function(a){var u=H.c0(a).getMonth()+1
return u},
nU:function(a){var u=H.c0(a).getDate()+0
return u},
nV:function(a){var u=H.c0(a).getHours()+0
return u},
nX:function(a){var u=H.c0(a).getMinutes()+0
return u},
nZ:function(a){var u=H.c0(a).getSeconds()+0
return u},
nW:function(a){var u=H.c0(a).getMilliseconds()+0
return u},
F:function(a){throw H.c(H.ax(a))},
h:function(a,b){if(a==null)J.aD(a)
throw H.c(H.cd(a,b))},
cd:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aL(!0,b,"index",null)
u=H.aj(J.aD(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.a_(b,a,"index",null,u)
return P.dZ(b,"index",null)},
oW:function(a,b,c){if(a>c)return new P.c3(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c3(a,c,!0,b,"end","Invalid value")
return new P.aL(!0,b,"end",null)},
ax:function(a){return new P.aL(!0,a,null,null)},
c:function(a){var u
if(a==null)a=new P.dU()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mU})
u.name=""}else u.toString=H.mU
return u},
mU:function(){return J.au(this.dartException)},
t:function(a){throw H.c(a)},
C:function(a){throw H.c(P.bi(a))},
bc:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iN(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iO:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mc:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lZ:function(a,b){return new H.hU(a,b==null?null:b.method)},
l5:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.hj(a,t,u?null:b.receiver)},
ak:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.kS(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aV(s,16)&8191)===10)switch(r){case 438:return u.$1(H.l5(H.m(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.lZ(H.m(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.mY()
p=$.mZ()
o=$.n_()
n=$.n0()
m=$.n3()
l=$.n4()
k=$.n2()
$.n1()
j=$.n6()
i=$.n5()
h=q.af(t)
if(h!=null)return u.$1(H.l5(H.H(t),h))
else{h=p.af(t)
if(h!=null){h.method="call"
return u.$1(H.l5(H.H(t),h))}else{h=o.af(t)
if(h==null){h=n.af(t)
if(h==null){h=m.af(t)
if(h==null){h=l.af(t)
if(h==null){h=k.af(t)
if(h==null){h=n.af(t)
if(h==null){h=j.af(t)
if(h==null){h=i.af(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.lZ(H.H(t),h))}}return u.$1(new H.j0(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.e4()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aL(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.e4()
return a},
cg:function(a){var u
if(a==null)return new H.eY(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eY(a)},
oZ:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.n(0,a[t],a[s])}return b},
p8:function(a,b,c,d,e,f){H.f(a,"$ibE")
switch(H.aj(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.w("Unsupported number of arguments for wrapped closure"))},
cc:function(a,b){var u
H.aj(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.p8)
a.$identity=u
return u},
nv:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.Z(d).$ib){u.$reflectionInfo=d
s=H.o3(u).r}else s=d
r=e?Object.create(new H.is().constructor.prototype):Object.create(new H.cl(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aZ
if(typeof p!=="number")return p.p()
$.aZ=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.lL(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.p2,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.lJ:H.kY
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.lL(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
ns:function(a,b,c,d){var u=H.kY
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lL:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nu(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.ns(t,!r,u,b)
if(t===0){r=$.aZ
if(typeof r!=="number")return r.p()
$.aZ=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cm
if(q==null){q=H.fC("self")
$.cm=q}return new Function(r+H.m(q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aZ
if(typeof r!=="number")return r.p()
$.aZ=r+1
o+=r
r="return function("+o+"){return this."
q=$.cm
if(q==null){q=H.fC("self")
$.cm=q}return new Function(r+H.m(q)+"."+H.m(u)+"("+o+");}")()},
nt:function(a,b,c,d){var u,t
u=H.kY
t=H.lJ
switch(b?-1:a){case 0:throw H.c(H.o7("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nu:function(a,b){var u,t,s,r,q,p,o,n
u=$.cm
if(u==null){u=H.fC("self")
$.cm=u}t=$.lI
if(t==null){t=H.fC("receiver")
$.lI=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nt(r,!p,s,b)
if(r===1){u="return function(){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+");"
t=$.aZ
if(typeof t!=="number")return t.p()
$.aZ=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+", "+n+");"
t=$.aZ
if(typeof t!=="number")return t.p()
$.aZ=t+1
return new Function(u+t+"}")()},
lp:function(a,b,c,d,e,f,g){return H.nv(a,b,H.aj(c),d,!!e,!!f,g)},
kY:function(a){return a.a},
lJ:function(a){return a.c},
fC:function(a){var u,t,s,r,q
u=new H.cl("self","target","receiver","name")
t=J.hf(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aY(a,"String"))},
oX:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aY(a,"double"))},
pe:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aY(a,"num"))},
ln:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aY(a,"bool"))},
aj:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aY(a,"int"))},
mS:function(a,b){throw H.c(H.aY(a,H.ci(H.H(b).substring(2))))},
pg:function(a,b){throw H.c(H.nr(a,H.ci(H.H(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Z(a)[b])return a
H.mS(a,b)},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Z(a)[b]
else u=!0
if(u)return a
H.pg(a,b)},
kE:function(a){if(a==null)return a
if(!!J.Z(a).$ib)return a
throw H.c(H.aY(a,"List<dynamic>"))},
mP:function(a,b){var u
if(a==null)return a
u=J.Z(a)
if(!!u.$ib)return a
if(u[b])return a
H.mS(a,b)},
mL:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.aj(u)]
else return a.$S()}return},
fl:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.mL(J.Z(a))
if(u==null)return!1
return H.my(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lj)return a
$.lj=!0
try{if(H.fl(a,b))return a
u=H.kN(b)
t=H.aY(a,u)
throw H.c(t)}finally{$.lj=!1}},
lr:function(a,b){if(a!=null&&!H.lo(a,b))H.t(H.aY(a,H.kN(b)))
return a},
aY:function(a,b){return new H.iP("TypeError: "+P.fZ(a)+": type '"+H.mD(a)+"' is not a subtype of type '"+b+"'")},
nr:function(a,b){return new H.fD("CastError: "+P.fZ(a)+": type '"+H.mD(a)+"' is not a subtype of type '"+b+"'")},
mD:function(a){var u,t
u=J.Z(a)
if(!!u.$icn){t=H.mL(u)
if(t!=null)return H.kN(t)
return"Closure"}return H.c1(a)},
pl:function(a){throw H.c(new P.fN(H.H(a)))},
o7:function(a){return new H.ic(a)},
mM:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bP:function(a){if(a==null)return
return a.$ti},
q4:function(a,b,c){return H.ch(a["$a"+H.m(c)],H.bP(b))},
bO:function(a,b,c,d){var u
H.H(c)
H.aj(d)
u=H.ch(a["$a"+H.m(c)],H.bP(b))
return u==null?null:u[d]},
at:function(a,b,c){var u
H.H(b)
H.aj(c)
u=H.ch(a["$a"+H.m(b)],H.bP(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.aj(b)
u=H.bP(a)
return u==null?null:u[b]},
kN:function(a){return H.bN(a,null)},
bN:function(a,b){var u,t
H.k(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ci(a[0].name)+H.lm(a,1,b)
if(typeof a=="function")return H.ci(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.aj(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.m(b[t])}if('func' in a)return H.oJ(a,b)
if('futureOr' in a)return"FutureOr<"+H.bN("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oJ:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.e]
H.k(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.d([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.h(b,m)
o=C.b.p(o,b[m])
l=t[p]
if(l!=null&&l!==P.R)o+=" extends "+H.bN(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bN(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bN(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bN(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.oY(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.H(u[g])
i=i+h+H.bN(d[c],b)+(" "+H.m(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
lm:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.al("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bN(p,c)}return"<"+u.i(0)+">"},
ch:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dd:function(a,b,c,d){var u,t
H.H(b)
H.kE(c)
H.H(d)
if(a==null)return!1
u=H.bP(a)
t=J.Z(a)
if(t[b]==null)return!1
return H.mG(H.ch(t[d],u),null,c,null)},
k:function(a,b,c,d){H.H(b)
H.kE(c)
H.H(d)
if(a==null)return a
if(H.dd(a,b,c,d))return a
throw H.c(H.aY(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ci(b.substring(2))+H.lm(c,0,null),v.mangledGlobalNames)))},
mG:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aK(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aK(a[t],b,c[t],d))return!1
return!0},
q2:function(a,b,c){return a.apply(b,H.ch(J.Z(b)["$a"+H.m(c)],H.bP(b)))},
mO:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="R"||a.name==="L"||a===-1||a===-2||H.mO(u)}return!1},
lo:function(a,b){var u,t
if(a==null)return b==null||b.name==="R"||b.name==="L"||b===-1||b===-2||H.mO(b)
if(b==null||b===-1||b.name==="R"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lo(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fl(a,b)}u=J.Z(a).constructor
t=H.bP(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aK(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.lo(a,b))throw H.c(H.aY(a,H.kN(b)))
return a},
aK:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="R"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="R"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aK(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="L")return!0
if('func' in c)return H.my(a,b,c,d)
if('func' in a)return c.name==="bE"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aK("type" in a?a.type:null,b,s,d)
else if(H.aK(a,b,s,d))return!0
else{if(!('$i'+"cu" in t.prototype))return!1
r=t.prototype["$a"+"cu"]
q=H.ch(r,u?a.slice(1):null)
return H.aK(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.mG(H.ch(m,u),b,p,d)},
my:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aK(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aK(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aK(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aK(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pd(h,b,g,d)},
pd:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aK(c[r],d,a[r],b))return!1}return!0},
q3:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
pb:function(a){var u,t,s,r,q,p
u=H.H($.mN.$1(a))
t=$.kx[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kC[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.H($.mF.$2(a,u))
if(u!=null){t=$.kx[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kC[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.kM(s)
$.kx[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.kC[u]=s
return s}if(q==="-"){p=H.kM(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.mR(a,s)
if(q==="*")throw H.c(P.j_(u))
if(v.leafTags[u]===true){p=H.kM(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.mR(a,s)},
mR:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lt(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kM:function(a){return J.lt(a,!1,null,!!a.$iK)},
pc:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kM(u)
else return J.lt(u,c,null,null)},
p6:function(){if(!0===$.ls)return
$.ls=!0
H.p7()},
p7:function(){var u,t,s,r,q,p,o,n
$.kx=Object.create(null)
$.kC=Object.create(null)
H.p5()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mT.$1(q)
if(p!=null){o=H.pc(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
p5:function(){var u,t,s,r,q,p,o
u=C.a1()
u=H.cb(C.Z,H.cb(C.a3,H.cb(C.D,H.cb(C.D,H.cb(C.a2,H.cb(C.a_,H.cb(C.a0(C.E),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.mN=new H.kz(q)
$.mF=new H.kA(p)
$.mT=new H.kB(o)},
cb:function(a,b){return a(b)||b},
nI:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a7("Illegal RegExp pattern ("+String(r)+")",a,null))},
pk:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lv:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fH:function fH(){},
fI:function fI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i5:function i5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
iN:function iN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hU:function hU(a,b){this.a=a
this.b=b},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
j0:function j0(a){this.a=a},
kS:function kS(a){this.a=a},
eY:function eY(a){this.a=a
this.b=null},
cn:function cn(){},
iB:function iB(){},
is:function is(){},
cl:function cl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iP:function iP(a){this.a=a},
fD:function fD(a){this.a=a},
ic:function ic(a){this.a=a},
aP:function aP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hn:function hn(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ho:function ho(a,b){this.a=a
this.$ti=b},
hp:function hp(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
kB:function kB(a){this.a=a},
hi:function hi(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c9:function(a){return a},
nQ:function(a){return new Int8Array(a)},
bg:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cd(b,a))},
oH:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oW(a,b,c))
return b},
cB:function cB(){},
bH:function bH(){},
dQ:function dQ(){},
cC:function cC(){},
dR:function dR(){},
hM:function hM(){},
hN:function hN(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(){},
dS:function dS(){},
cD:function cD(){},
d0:function d0(){},
d1:function d1(){},
d2:function d2(){},
d3:function d3(){},
oY:function(a){return J.lR(a?Object.keys(a):[],null)},
pf:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lt:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fn:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.ls==null){H.p6()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.j_("Return interceptor for "+H.m(t(a,u))))}r=a.constructor
q=r==null?null:r[$.lx()]
if(q!=null)return q
q=H.pb(a)
if(q!=null)return q
if(typeof a=="function")return C.a4
t=Object.getPrototypeOf(a)
if(t==null)return C.L
if(t===Object.prototype)return C.L
if(typeof r=="function"){Object.defineProperty(r,$.lx(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
nH:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kX(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ae(a,0,4294967295,"length",null))
return J.lR(new Array(a),b)},
lR:function(a,b){return J.hf(H.d(a,[b]))},
hf:function(a){H.kE(a)
a.fixed$length=Array
return a},
Z:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dC.prototype
return J.hh.prototype}if(typeof a=="string")return J.bk.prototype
if(a==null)return J.dD.prototype
if(typeof a=="boolean")return J.hg.prototype
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.R)return a
return J.fn(a)},
p_:function(a){if(typeof a=="number")return J.bG.prototype
if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.R)return a
return J.fn(a)},
cf:function(a){if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.R)return a
return J.fn(a)},
fm:function(a){if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.R)return a
return J.fn(a)},
p0:function(a){if(typeof a=="number")return J.bG.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bL.prototype
return a},
p1:function(a){if(typeof a=="number")return J.bG.prototype
if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bL.prototype
return a},
de:function(a){if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bL.prototype
return a},
ac:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.R)return a
return J.fn(a)},
nf:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.p_(a).p(a,b)},
U:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Z(a).w(a,b)},
lA:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.p1(a).u(a,b)},
ng:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.p0(a).t(a,b)},
lB:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.p9(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cf(a).j(a,b)},
kU:function(a,b,c){return J.fm(a).n(a,b,c)},
nh:function(a,b){return J.de(a).I(a,b)},
fp:function(a,b){return J.ac(a).iz(a,b)},
kV:function(a,b,c){return J.ac(a).iD(a,b,c)},
ni:function(a,b,c,d){return J.ac(a).jv(a,b,c,d)},
lC:function(a,b){return J.ac(a).E(a,b)},
nj:function(a,b){return J.de(a).a1(a,b)},
fq:function(a,b){return J.fm(a).M(a,b)},
nk:function(a,b,c,d){return J.ac(a).kc(a,b,c,d)},
lD:function(a,b){return J.fm(a).O(a,b)},
nl:function(a){return J.ac(a).gjF(a)},
lE:function(a){return J.ac(a).gcC(a)},
di:function(a){return J.Z(a).gL(a)},
bx:function(a){return J.fm(a).gW(a)},
aD:function(a){return J.cf(a).gl(a)},
nm:function(a){return J.ac(a).gkV(a)},
kW:function(a,b){return J.ac(a).b0(a,b)},
lF:function(a){return J.fm(a).kL(a)},
nn:function(a,b){return J.ac(a).kP(a,b)},
no:function(a,b,c){return J.ac(a).fm(a,b,c)},
np:function(a,b,c){return J.de(a).v(a,b,c)},
nq:function(a){return J.de(a).kZ(a)},
au:function(a){return J.Z(a).i(a)},
a:function a(){},
hg:function hg(){},
dD:function dD(){},
dE:function dE(){},
hY:function hY(){},
bL:function bL(){},
bl:function bl(){},
aO:function aO(a){this.$ti=a},
l3:function l3(a){this.$ti=a},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bG:function bG(){},
dC:function dC(){},
hh:function hh(){},
bk:function bk(){}},P={
oj:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.oR()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.cc(new P.jr(u),1)).observe(t,{childList:true})
return new P.jq(u,t,s)}else if(self.setImmediate!=null)return P.oS()
return P.oT()},
ok:function(a){self.scheduleImmediate(H.cc(new P.js(H.n(a,{func:1,ret:-1})),0))},
ol:function(a){self.setImmediate(H.cc(new P.jt(H.n(a,{func:1,ret:-1})),0))},
om:function(a){P.la(C.y,H.n(a,{func:1,ret:-1}))},
la:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.a6(a.a,1000)
return P.os(u<0?0:u,b)},
mb:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.ba]})
u=C.f.a6(a.a,1000)
return P.ot(u<0?0:u,b)},
os:function(a,b){var u=new P.f3(!0)
u.fW(a,b)
return u},
ot:function(a,b){var u=new P.f3(!1)
u.fX(a,b)
return u},
on:function(a,b){var u,t,s
b.a=1
try{a.f0(new P.jD(b),new P.jE(b),null)}catch(s){u=H.ak(s)
t=H.cg(s)
P.ph(new P.jF(b,u,t))}},
mn:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaJ")
if(u>=4){t=b.cj()
b.a=a.a
b.c=a.c
P.d_(b,t)}else{t=H.f(b.c,"$ibf")
b.a=2
b.c=a
a.dN(t)}},
d_:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.f(t.c,"$iam")
t=t.b
p=q.a
o=q.b
t.toString
P.ko(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.d_(u.a,b)}t=u.a
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
if(k){H.f(m,"$iam")
t=t.b
p=m.a
o=m.b
t.toString
P.ko(null,null,t,p,o)
return}j=$.a1
if(j!=l)$.a1=l
else j=null
t=b.c
if(t===8)new P.jJ(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.jI(s,b,m).$0()}else if((t&2)!==0)new P.jH(u,s,b).$0()
if(j!=null)$.a1=j
t=s.b
if(!!J.Z(t).$icu){if(t.a>=4){i=H.f(o.c,"$ibf")
o.c=null
b=o.br(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.mn(t,o)
return}}h=b.b
i=H.f(h.c,"$ibf")
h.c=null
b=h.br(i)
t=s.a
p=s.b
if(!t){H.A(p,H.u(h,0))
h.a=4
h.c=p}else{H.f(p,"$iam")
h.a=8
h.c=p}u.a=h
t=h}},
oM:function(a,b){if(H.fl(a,{func:1,args:[P.R,P.aw]}))return H.n(a,{func:1,ret:null,args:[P.R,P.aw]})
if(H.fl(a,{func:1,args:[P.R]}))return H.n(a,{func:1,ret:null,args:[P.R]})
throw H.c(P.kX(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oL:function(){var u,t
for(;u=$.ca,u!=null;){$.dc=null
t=u.b
$.ca=t
if(t==null)$.db=null
u.a.$0()}},
oQ:function(){$.lk=!0
try{P.oL()}finally{$.dc=null
$.lk=!1
if($.ca!=null)$.ly().$1(P.mH())}},
mC:function(a){var u=new P.eq(H.n(a,{func:1,ret:-1}))
if($.ca==null){$.db=u
$.ca=u
if(!$.lk)$.ly().$1(P.mH())}else{$.db.b=u
$.db=u}},
oP:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.ca
if(u==null){P.mC(a)
$.dc=$.db
return}t=new P.eq(a)
s=$.dc
if(s==null){t.b=u
$.dc=t
$.ca=t}else{t.b=s.b
s.b=t
$.dc=t
if(t.b==null)$.db=t}},
ph:function(a){var u,t
u={func:1,ret:-1}
H.n(a,u)
t=$.a1
if(C.l===t){P.kq(null,null,C.l,a)
return}t.toString
P.kq(null,null,t,H.n(t.cv(a),u))},
ma:function(a,b){var u,t
u={func:1,ret:-1}
H.n(b,u)
t=$.a1
if(t===C.l){t.toString
return P.la(a,b)}return P.la(a,H.n(t.cv(b),u))},
ob:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.ba]}
H.n(b,u)
t=$.a1
if(t===C.l){t.toString
return P.mb(a,b)}s=t.e1(b,P.ba)
$.a1.toString
return P.mb(a,H.n(s,u))},
ko:function(a,b,c,d,e){var u={}
u.a=d
P.oP(new P.kp(u,e))},
mz:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a1
if(t===c)return d.$0()
$.a1=c
u=t
try{t=d.$0()
return t}finally{$.a1=u}},
mA:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.a1
if(t===c)return d.$1(e)
$.a1=c
u=t
try{t=d.$1(e)
return t}finally{$.a1=u}},
oN:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
t=$.a1
if(t===c)return d.$2(e,f)
$.a1=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a1=u}},
kq:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cv(d):c.jG(d,-1)
P.mC(d)},
jr:function jr(a){this.a=a},
jq:function jq(a,b,c){this.a=a
this.b=b
this.c=c},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
f3:function f3(a){this.a=a
this.b=null
this.c=0},
k7:function k7(a,b){this.a=a
this.b=b},
k6:function k6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bf:function bf(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aJ:function aJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
jC:function jC(a,b){this.a=a
this.b=b},
jG:function jG(a,b){this.a=a
this.b=b},
jD:function jD(a){this.a=a},
jE:function jE(a){this.a=a},
jF:function jF(a,b,c){this.a=a
this.b=b
this.c=c},
jJ:function jJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jK:function jK(a){this.a=a},
jI:function jI(a,b,c){this.a=a
this.b=b
this.c=c},
jH:function jH(a,b,c){this.a=a
this.b=b
this.c=c},
eq:function eq(a){this.a=a
this.b=null},
iv:function iv(){},
ix:function ix(a,b){this.a=a
this.b=b},
iy:function iy(a,b){this.a=a
this.b=b},
cK:function cK(){},
iw:function iw(){},
ba:function ba(){},
am:function am(a,b){this.a=a
this.b=b},
kh:function kh(){},
kp:function kp(a,b){this.a=a
this.b=b},
jQ:function jQ(){},
jS:function jS(a,b,c){this.a=a
this.b=b
this.c=c},
jR:function jR(a,b){this.a=a
this.b=b},
jT:function jT(a,b,c){this.a=a
this.b=b
this.c=c},
nK:function(a,b,c,d,e){return new H.aP([d,e])},
l6:function(a,b){return new H.aP([a,b])},
nM:function(a){return H.oZ(a,new H.aP([null,null]))},
dI:function(a,b,c,d){return new P.jO([d])},
lg:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
or:function(a,b,c){var u=new P.eF(a,b,[c])
u.c=a.e
return u},
nE:function(a,b,c){var u,t
if(P.ll(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.e])
t=$.dh()
C.a.h(t,a)
try{P.oK(a,u)}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}t=P.m8(b,H.mP(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
l2:function(a,b,c){var u,t,s
if(P.ll(a))return b+"..."+c
u=new P.al(b)
t=$.dh()
C.a.h(t,a)
try{s=u
s.a=P.m8(s.a,a,", ")}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ll:function(a){var u,t
for(u=0;t=$.dh(),u<t.length;++u)if(a===t[u])return!0
return!1},
oK:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.e],"$ab")
u=a.gW(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.F())return
r=H.m(u.gN(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.F()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gN(u);++s
if(!u.F()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gN(u);++s
for(;u.F();o=n,n=m){m=u.gN(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.m(o)
q=H.m(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
nL:function(a,b,c){var u=P.nK(null,null,null,b,c)
a.O(0,new P.hq(u,b,c))
return u},
lS:function(a,b){var u,t,s
u=P.dI(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s)u.h(0,H.A(a[s],b))
return u},
l7:function(a){var u,t
u={}
if(P.ll(a))return"{...}"
t=new P.al("")
try{C.a.h($.dh(),a)
t.a+="{"
u.a=!0
J.lD(a,new P.hu(u,t))
t.a+="}"}finally{u=$.dh()
if(0>=u.length)return H.h(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
jO:function jO(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c7:function c7(a){this.a=a
this.c=this.b=null},
eF:function eF(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hq:function hq(a,b,c){this.a=a
this.b=b
this.c=c},
hr:function hr(){},
y:function y(){},
ht:function ht(){},
hu:function hu(a,b){this.a=a
this.b=b},
ag:function ag(){},
k8:function k8(){},
hv:function hv(){},
ej:function ej(a,b){this.a=a
this.$ti=b},
jV:function jV(){},
eG:function eG(){},
f8:function f8(){},
oe:function(a,b,c,d){H.k(b,"$ib",[P.o],"$ab")
if(b instanceof Uint8Array)return P.of(!1,b,c,d)
return},
of:function(a,b,c,d){var u,t,s
u=$.n7()
if(u==null)return
t=0===c
if(t&&!0)return P.ld(u,b)
s=b.length
d=P.bp(c,d,s,null,null,null)
if(t&&d===s)return P.ld(u,b)
return P.ld(u,b.subarray(c,d))},
ld:function(a,b){if(P.oh(b))return
return P.oi(a,b)},
oi:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ak(t)}return},
oh:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
og:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ak(t)}return},
oO:function(a,b,c){var u,t,s
H.k(a,"$ib",[P.o],"$ab")
for(u=J.cf(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bS()
if((s&127)!==s)return t-b}return c-b},
lH:function(a,b,c,d,e,f){if(C.f.bl(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
fz:function fz(a){this.a=a},
fA:function fA(a){this.a=a},
bT:function bT(){},
bB:function bB(){},
fX:function fX(){},
hc:function hc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hb:function hb(a){this.a=a},
j8:function j8(a){this.a=a},
ja:function ja(){},
kf:function kf(a){this.b=this.a=0
this.c=a},
j9:function j9(a){this.a=a},
kd:function kd(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
ke:function ke(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fo:function(a,b,c){var u
H.n(b,{func:1,ret:P.o,args:[P.e]})
u=H.o0(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a7(a,null,null))},
nB:function(a){if(a instanceof H.cn)return a.i(0)
return"Instance of '"+H.c1(a)+"'"},
nN:function(a,b,c,d){var u,t
H.A(b,d)
u=J.nH(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.k(u,"$ib",[d],"$ab")},
lT:function(a,b,c){var u,t,s
u=[c]
t=H.d([],u)
for(s=J.bx(a);s.F();)C.a.h(t,H.A(s.gN(s),c))
if(b)return t
return H.k(J.hf(t),"$ib",u,"$ab")},
e5:function(a,b,c){var u,t
u=P.o
H.k(a,"$ii",[u],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$iaO",[u],"$aaO")
t=a.length
c=P.bp(b,c,t,null,null,null)
return H.m3(b>0||c<t?C.a.fs(a,b,c):a)}if(!!J.Z(a).$icD)return H.o2(a,b,P.bp(b,c,a.length,null,null,null))
return P.o9(a,b,c)},
o9:function(a,b,c){var u,t,s,r
H.k(a,"$ii",[P.o],"$ai")
if(b<0)throw H.c(P.ae(b,0,J.aD(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.ae(c,b,J.aD(a),null,null))
t=J.bx(a)
for(s=0;s<b;++s)if(!t.F())throw H.c(P.ae(b,0,s,null,null))
r=[]
if(u)for(;t.F();)r.push(t.gN(t))
else for(s=b;s<c;++s){if(!t.F())throw H.c(P.ae(c,b,s,null,null))
r.push(t.gN(t))}return H.m3(r)},
o5:function(a,b,c){return new H.hi(a,H.nI(a,!1,!0,!1))},
m8:function(a,b,c){var u=J.bx(b)
if(!u.F())return a
if(c.length===0){do a+=H.m(u.gN(u))
while(u.F())}else{a+=H.m(u.gN(u))
for(;u.F();)a=a+c+H.m(u.gN(u))}return a},
me:function(){var u=H.nT()
if(u!=null)return P.od(u,0,null)
throw H.c(P.I("'Uri.base' is not supported"))},
f9:function(a,b,c,d){var u,t,s,r,q,p
H.k(a,"$ib",[P.o],"$ab")
if(c===C.m){u=$.nd().b
if(typeof b!=="string")H.t(H.ax(b))
u=u.test(b)}else u=!1
if(u)return b
H.A(b,H.at(c,"bT",0))
t=c.gkb().cD(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c2(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
nx:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
ny:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ds:function(a){if(a>=10)return""+a
return"0"+a},
lN:function(a,b,c,d,e,f){return new P.b1(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
fZ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.au(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nB(a)},
ft:function(a){return new P.aL(!1,null,null,a)},
kX:function(a,b,c){return new P.aL(!0,a,b,c)},
dZ:function(a,b,c){return new P.c3(null,null,!0,a,b,"Value not in range")},
ae:function(a,b,c,d,e){return new P.c3(b,c,!0,a,d,"Invalid value")},
bp:function(a,b,c,d,e,f){if(typeof a!=="number")return H.F(a)
if(0>a||a>c)throw H.c(P.ae(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.ae(b,a,c,"end",f))
return b}return c},
a_:function(a,b,c,d,e){var u=H.aj(e==null?J.aD(b):e)
return new P.hd(b,u,!0,a,c,"Index out of range")},
I:function(a){return new P.j1(a)},
j_:function(a){return new P.iZ(a)},
m7:function(a){return new P.c5(a)},
bi:function(a){return new P.fG(a)},
w:function(a){return new P.ey(a)},
a7:function(a,b,c){return new P.h7(a,b,c)},
nO:function(a,b,c,d){var u,t
H.n(b,{func:1,ret:d,args:[P.o]})
u=H.d([],[d])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
lu:function(a){H.pf(a)},
od:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.b.I(a,b+4)^58)*3|C.b.I(a,b)^100|C.b.I(a,b+1)^97|C.b.I(a,b+2)^116|C.b.I(a,b+3)^97)>>>0
if(t===0)return P.md(b>0||c<c?C.b.v(a,b,c):a,5,null).gf6()
else if(t===32)return P.md(C.b.v(a,u,c),0,null).gf6()}s=new Array(8)
s.fixed$length=Array
r=H.d(s,[P.o])
C.a.n(r,0,0)
s=b-1
C.a.n(r,1,s)
C.a.n(r,2,s)
C.a.n(r,7,s)
C.a.n(r,3,b)
C.a.n(r,4,b)
C.a.n(r,5,c)
C.a.n(r,6,c)
if(P.mB(a,b,c,0,r)>=14)C.a.n(r,7,c)
q=r[1]
if(typeof q!=="number")return q.l6()
if(q>=b)if(P.mB(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.p()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.Z()
if(typeof m!=="number")return H.F(m)
if(l<m)m=l
if(typeof n!=="number")return n.Z()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.Z()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.Z()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.b.ab(a,"..",n)))i=m>n+2&&C.b.ab(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.b.ab(a,"file",b)){if(p<=b){if(!C.b.ab(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.b.v(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.b.b_(a,n,m,"/");++m;++l;++c}else{a=C.b.v(a,b,n)+"/"+C.b.v(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.b.ab(a,"http",b)){if(s&&o+3===n&&C.b.ab(a,"80",o+1))if(b===0&&!0){a=C.b.b_(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.b.v(a,b,o)+C.b.v(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.b.ab(a,"https",b)){if(s&&o+4===n&&C.b.ab(a,"443",o+1))if(b===0&&!0){a=C.b.b_(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.b.v(a,b,o)+C.b.v(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.b.v(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.jY(a,q,p,o,n,m,l,j)}return P.ou(a,b,c,q,p,o,n,m,l,j)},
mg:function(a,b){var u=P.e
return C.a.kh(H.d(a.split("&"),[u]),P.l6(u,u),new P.j6(b),[P.E,P.e,P.e])},
oc:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.j3(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.b.a1(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.fo(C.b.v(a,q,r),null,null)
if(typeof n!=="number")return n.fj()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.h(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.fo(C.b.v(a,q,c),null,null)
if(typeof n!=="number")return n.fj()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.h(t,p)
t[p]=n
return t},
mf:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.j4(a)
t=new P.j5(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.o])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.a1(a,r)
if(n===58){if(r===b){++r
if(C.b.a1(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaz(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.oc(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.h(j,g)
j[g]=0
d=g+1
if(d>=i)return H.h(j,d)
j[d]=0
g+=2}else{d=C.f.aV(f,8)
if(g<0||g>=i)return H.h(j,g)
j[g]=d
d=g+1
if(d>=i)return H.h(j,d)
j[d]=f&255
g+=2}}return j},
ou:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.oB(a,b,d)
else{if(d===b)P.d8(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oC(a,u,e-1):""
s=P.oy(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.F(g)
q=r<g?P.oA(P.fo(C.b.v(a,r,g),new P.k9(a,f),null),j):null}else{t=""
s=null
q=null}p=P.oz(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.Z()
o=h<i?P.lh(a,h+1,i,null):null
return new P.c8(j,t,s,q,p,o,i<c?P.ox(a,i+1,c):null)},
mr:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
d8:function(a,b,c){throw H.c(P.a7(c,a,b))},
oA:function(a,b){if(a!=null&&a===P.mr(b))return
return a},
oy:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.a1(a,b)===91){if(typeof c!=="number")return c.t()
u=c-1
if(C.b.a1(a,u)!==93)P.d8(a,b,"Missing end `]` to match `[` in host")
P.mf(a,b+1,u)
return C.b.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.F(c)
t=b
for(;t<c;++t)if(C.b.a1(a,t)===58){P.mf(a,b,c)
return"["+a+"]"}return P.oE(a,b,c)},
oE:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.F(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.a1(a,u)
if(q===37){p=P.mx(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.al("")
n=C.b.v(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.v(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.h(C.J,o)
o=(C.J[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.al("")
if(t<u){s.a+=C.b.v(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.h(C.r,o)
o=(C.r[o]&1<<(q&15))!==0}else o=!1
if(o)P.d8(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.a1(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.al("")
n=C.b.v(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.ms(q)
u+=l
t=u}}}}if(s==null)return C.b.v(a,b,c)
if(t<c){n=C.b.v(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oB:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mu(C.b.I(a,b)))P.d8(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.I(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.h(C.u,r)
r=(C.u[r]&1<<(s&15))!==0}else r=!1
if(!r)P.d8(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.v(a,b,c)
return P.ov(t?a.toLowerCase():a)},
ov:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oC:function(a,b,c){return P.d9(a,b,c,C.a7,!1)},
oz:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.d9(a,b,c,C.K,!0):C.q.l9(d,new P.ka(),P.e).m(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.b.a5(r,"/"))r="/"+r
return P.oD(r,e,f)},
oD:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a5(a,"/"))return P.oF(a,!u||c)
return P.oG(a)},
lh:function(a,b,c,d){var u,t
u={}
H.k(d,"$iE",[P.e,null],"$aE")
if(a!=null){if(d!=null)throw H.c(P.ft("Both query and queryParameters specified"))
return P.d9(a,b,c,C.t,!0)}if(d==null)return
t=new P.al("")
u.a=""
d.O(0,new P.kb(new P.kc(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
ox:function(a,b,c){return P.d9(a,b,c,C.t,!0)},
mx:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.b.a1(a,b+1)
s=C.b.a1(a,u)
r=H.ky(t)
q=H.ky(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.aV(p,4)
if(u>=8)return H.h(C.v,u)
u=(C.v[u]&1<<(p&15))!==0}else u=!1
if(u)return H.c2(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
ms:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.o])
C.a.n(t,0,37)
C.a.n(t,1,C.b.I("0123456789ABCDEF",a>>>4))
C.a.n(t,2,C.b.I("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.o])
for(q=0;--r,r>=0;s=128){p=C.f.iS(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.b.I("0123456789ABCDEF",p>>>4))
C.a.n(t,q+2,C.b.I("0123456789ABCDEF",p&15))
q+=3}}return P.e5(t,0,null)},
d9:function(a,b,c,d,e){var u=P.mw(a,b,c,H.k(d,"$ib",[P.o],"$ab"),e)
return u==null?C.b.v(a,b,c):u},
mw:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.k(d,"$ib",[P.o],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.Z()
if(typeof c!=="number")return H.F(c)
if(!(t<c))break
c$0:{q=C.b.a1(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.h(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mx(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.h(C.r,p)
p=(C.r[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.d8(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.a1(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.ms(q)}}if(r==null)r=new P.al("")
r.a+=C.b.v(a,s,t)
r.a+=H.m(o)
if(typeof n!=="number")return H.F(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.Z()
if(s<c)r.a+=C.b.v(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mv:function(a){if(C.b.a5(a,"."))return!0
return C.b.eC(a,"/.")!==-1},
oG:function(a){var u,t,s,r,q,p,o
if(!P.mv(a))return a
u=H.d([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.U(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.h(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oF:function(a,b){var u,t,s,r,q,p
if(!P.mv(a))return!b?P.mt(a):a
u=H.d([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaz(u)!==".."){if(0>=u.length)return H.h(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.h(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaz(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.h(u,0)
C.a.n(u,0,P.mt(u[0]))}return C.a.m(u,"/")},
mt:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.mu(J.nh(a,0)))for(t=1;t<u;++t){s=C.b.I(a,t)
if(s===58)return C.b.v(a,0,t)+"%3A"+C.b.ar(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.h(C.u,r)
r=(C.u[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
ow:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.I(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.ft("Invalid URL encoding"))}}return u},
li:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.b.I(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.b.v(a,b,c)
else q=new H.v(C.b.v(a,b,c))}else{q=H.d([],[P.o])
for(r=a.length,t=b;t<c;++t){s=C.b.I(a,t)
if(s>127)throw H.c(P.ft("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.ft("Truncated URI"))
C.a.h(q,P.ow(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.k(q,"$ib",[P.o],"$ab")
return new P.j9(!1).cD(q)},
mu:function(a){var u=a|32
return 97<=u&&u<=122},
md:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.d([b-1],[P.o])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.b.I(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a7("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a7("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.b.I(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaz(u)
if(q!==44||s!==o+7||!C.b.ab(a,"base64",o+1))throw H.c(P.a7("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.P.ku(0,a,n,t)
else{m=P.mw(a,n,t,C.t,!0)
if(m!=null)a=C.b.b_(a,n,t,m)}return new P.j2(a,u,c)},
oI:function(){var u,t,s,r,q
u=P.nO(22,new P.kl(),!0,P.S)
t=new P.kk(u)
s=new P.km()
r=new P.kn()
q=H.f(t.$2(0,225),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(14,225),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(15,225),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(1,225),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(2,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(3,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(4,229),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(5,229),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(6,231),"$iS")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(7,231),"$iS")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.f(t.$2(8,8),"$iS"),"]",5)
q=H.f(t.$2(9,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(16,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(17,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(10,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(18,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(19,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(11,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(12,236),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.f(t.$2(13,237),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.f(t.$2(20,245),"$iS"),"az",21)
q=H.f(t.$2(21,245),"$iS")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
mB:function(a,b,c,d,e){var u,t,s,r,q
H.k(e,"$ib",[P.o],"$ab")
u=$.ne()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.h(u,d)
s=u[d]
r=C.b.I(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.h(s,r)
q=s[r]
d=q&31
C.a.n(e,q>>>5,t)}return d},
T:function T(){},
an:function an(a,b){this.a=a
this.b=b},
r:function r(){},
b1:function b1(a){this.a=a},
fT:function fT(){},
fU:function fU(){},
bD:function bD(){},
dU:function dU(){},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c3:function c3(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hd:function hd(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
j1:function j1(a){this.a=a},
iZ:function iZ(a){this.a=a},
c5:function c5(a){this.a=a},
fG:function fG(a){this.a=a},
hX:function hX(){},
e4:function e4(){},
fN:function fN(a){this.a=a},
ey:function ey(a){this.a=a},
h7:function h7(a,b,c){this.a=a
this.b=b
this.c=c},
bE:function bE(){},
o:function o(){},
i:function i(){},
b2:function b2(){},
b:function b(){},
E:function E(){},
L:function L(){},
a5:function a5(){},
R:function R(){},
aw:function aw(){},
e:function e(){},
al:function al(a){this.a=a},
j6:function j6(a){this.a=a},
j3:function j3(a){this.a=a},
j4:function j4(a){this.a=a},
j5:function j5(a,b){this.a=a
this.b=b},
c8:function c8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
k9:function k9(a,b){this.a=a
this.b=b},
ka:function ka(){},
kc:function kc(a,b){this.a=a
this.b=b},
kb:function kb(a){this.a=a},
j2:function j2(a,b,c){this.a=a
this.b=b
this.c=c},
kl:function kl(){},
kk:function kk(a){this.a=a},
km:function km(){},
kn:function kn(){},
jY:function jY(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jx:function jx(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
bq:function(a){var u,t,s,r,q
if(a==null)return
u=P.l6(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=H.H(t[r])
u.n(0,q,a[q])}return u},
oU:function(a,b){var u={}
a.O(0,new P.kr(u))
return u},
k_:function k_(){},
k1:function k1(a,b){this.a=a
this.b=b},
kr:function kr(a){this.a=a},
k0:function k0(a,b){this.a=a
this.b=b},
h3:function h3(a,b){this.a=a
this.b=b},
h4:function h4(){},
h5:function h5(){},
jN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oq:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jP:function jP(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b4:function b4(){},
hl:function hl(){},
b7:function b7(){},
hV:function hV(){},
i1:function i1(){},
cH:function cH(){},
iz:function iz(){},
q:function q(){},
bb:function bb(){},
iM:function iM(){},
eD:function eD(){},
eE:function eE(){},
eO:function eO(){},
eP:function eP(){},
f_:function f_(){},
f0:function f0(){},
f6:function f6(){},
f7:function f7(){},
S:function S(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(a){this.a=a},
fy:function fy(){},
bQ:function bQ(){},
hW:function hW(){},
er:function er(){},
dl:function dl(){},
dy:function dy(){},
dX:function dX(){},
c4:function c4(){},
e1:function e1(){},
eh:function eh(){},
ir:function ir(){},
eW:function eW(){},
eX:function eX(){}},W={
lG:function(a){var u=document.createElement("a")
return u},
lK:function(a,b){var u=document.createElement("canvas")
return u},
nz:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).ae(u,a,b,c)
t.toString
u=W.G
u=new H.cX(new W.as(t),H.n(new W.fW(),{func:1,ret:P.T,args:[u]}),[u])
return H.f(u.gaN(u),"$iV")},
nA:function(a){H.f(a,"$ij")
return"wheel"},
cr:function(a){var u,t,s
u="element tag unavailable"
try{t=J.nm(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ak(s)}return u},
nD:function(a){var u,t,s
t=document.createElement("input")
u=H.f(t,"$icx")
try{u.type=a}catch(s){H.ak(s)}return u},
jM:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mp:function(a,b,c,d){var u,t
u=W.jM(W.jM(W.jM(W.jM(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
af:function(a,b,c,d,e){var u=W.mE(new W.jB(c),W.p)
if(u!=null&&!0)J.ni(a,b,u,!1)
return new W.jA(a,b,u,!1,[e])},
mo:function(a){var u,t
u=W.lG(null)
t=window.location
u=new W.bM(new W.jU(u,t))
u.fK(a)
return u},
oo:function(a,b,c,d){H.f(a,"$iV")
H.H(b)
H.H(c)
H.f(d,"$ibM")
return!0},
op:function(a,b,c,d){var u,t,s
H.f(a,"$iV")
H.H(b)
H.H(c)
u=H.f(d,"$ibM").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mq:function(){var u,t,s,r,q
u=P.e
t=P.lS(C.A,u)
s=H.u(C.A,0)
r=H.n(new W.k5(),{func:1,ret:u,args:[s]})
q=H.d(["TEMPLATE"],[u])
t=new W.k4(t,P.dI(null,null,null,u),P.dI(null,null,null,u),P.dI(null,null,null,u),null)
t.fV(null,new H.hy(C.A,r,[s,u]),q,null)
return t},
mE:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a1
if(u===C.l)return a
return u.e1(a,b)},
z:function z(){},
fr:function fr(){},
dj:function dj(){},
fs:function fs(){},
ck:function ck(){},
bR:function bR(){},
by:function by(){},
bS:function bS(){},
bz:function bz(){},
co:function co(){},
fJ:function fJ(){},
Y:function Y(){},
cp:function cp(){},
fK:function fK(){},
b_:function b_(){},
b0:function b0(){},
fL:function fL(){},
fM:function fM(){},
fP:function fP(){},
aE:function aE(){},
cq:function cq(){},
fQ:function fQ(){},
dt:function dt(){},
du:function du(){},
dv:function dv(){},
fR:function fR(){},
fS:function fS(){},
jv:function jv(a,b){this.a=a
this.b=b},
V:function V(){},
fW:function fW(){},
p:function p(){},
j:function j(){},
aF:function aF(){},
ct:function ct(){},
h2:function h2(){},
h6:function h6(){},
aN:function aN(){},
dz:function dz(){},
dA:function dA(){},
bX:function bX(){},
dB:function dB(){},
cw:function cw(){},
cx:function cx(){},
b3:function b3(){},
dG:function dG(){},
dJ:function dJ(){},
hF:function hF(){},
hG:function hG(){},
hH:function hH(a){this.a=a},
hI:function hI(){},
hJ:function hJ(a){this.a=a},
aQ:function aQ(){},
hK:function hK(){},
ah:function ah(){},
as:function as(a){this.a=a},
G:function G(){},
cE:function cE(){},
aR:function aR(){},
i_:function i_(){},
dY:function dY(){},
ia:function ia(){},
ib:function ib(a){this.a=a},
id:function id(){},
aS:function aS(){},
ip:function ip(){},
aT:function aT(){},
iq:function iq(){},
aU:function aU(){},
it:function it(){},
iu:function iu(a){this.a=a},
aG:function aG(){},
b9:function b9(){},
e6:function e6(){},
e7:function e7(){},
iA:function iA(){},
cL:function cL(){},
aV:function aV(){},
aH:function aH(){},
iC:function iC(){},
iD:function iD(){},
iG:function iG(){},
aW:function aW(){},
aX:function aX(){},
iK:function iK(){},
iL:function iL(){},
bK:function bK(){},
j7:function j7(){},
jn:function jn(){},
be:function be(){},
cY:function cY(){},
cZ:function cZ(){},
jw:function jw(){},
et:function et(){},
jL:function jL(){},
eL:function eL(){},
jZ:function jZ(){},
k2:function k2(){},
ju:function ju(){},
jy:function jy(a){this.a=a},
jz:function jz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lf:function lf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jA:function jA(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jB:function jB(a){this.a=a},
bM:function bM(a){this.a=a},
D:function D(){},
dT:function dT(a){this.a=a},
hS:function hS(a){this.a=a},
hR:function hR(a,b,c){this.a=a
this.b=b
this.c=c},
eT:function eT(){},
jW:function jW(){},
jX:function jX(){},
k4:function k4(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
k5:function k5(){},
k3:function k3(){},
dx:function dx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aB:function aB(){},
jU:function jU(a,b){this.a=a
this.b=b},
fa:function fa(a){this.a=a},
kg:function kg(a){this.a=a},
es:function es(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eM:function eM(){},
eN:function eN(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
d4:function d4(){},
d5:function d5(){},
eU:function eU(){},
eV:function eV(){},
eZ:function eZ(){},
f1:function f1(){},
f2:function f2(){},
d6:function d6(){},
d7:function d7(){},
f4:function f4(){},
f5:function f5(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){}},O={
kZ:function(a){var u=new O.a6([a])
u.bY(a)
return u},
a6:function a6(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cz:function cz(){this.b=this.a=null},
dM:function dM(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hA:function hA(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dN:function dN(){},
hB:function hB(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b5:function b5(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hD:function hD(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hE:function hE(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c6:function c6(){}},E={
lQ:function(a,b,c,d,e,f){var u=new E.ao()
u.a=d
u.b=!0
u.sfJ(0,O.kZ(E.ao))
u.y.bm(u.gkv(),u.gky())
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
u.saj(0,e)
u.sbe(c)
return u},
o6:function(a,b){var u=new E.i6(a,b)
u.fD(a,b)
return u},
oa:function(a,b,c,d,e){var u,t,s,r
u=J.Z(a)
if(!!u.$ibS)return E.m9(a,!0,!0,!0,!1)
t=W.lK(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcC(a).h(0,t)
r=E.m9(t,!0,!0,!0,!1)
r.a=a
return r},
m9:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.ed()
t=H.f(C.x.fe(a,"webgl2",P.nM(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic4")
if(t==null)H.t(P.w("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.o6(t,a)
s=new T.iE(t)
s.b=H.aj((t&&C.c).d9(t,3379))
s.c=H.aj(C.c.d9(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.ek(a)
r=new X.hk()
r.c=new X.aA(!1,!1,!1)
r.siv(P.dI(null,null,null,P.o))
s.b=r
r=new X.hL(s)
r.f=0
r.r=V.bJ()
r.x=V.bJ()
r.Q=1
r.ch=1
s.c=r
r=new X.hs(s)
r.r=0
r.x=V.bJ()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.iJ(s)
r.e=0
r.f=V.bJ()
r.r=V.bJ()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.shf(H.d([],[[P.cK,P.R]]))
r=s.z
q=document
p=W.ah
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.af(q,"contextmenu",H.n(s.ghR(),o),!1,p))
r=s.z
n=W.p
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.af(a,"focus",H.n(s.ghX(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.af(a,"blur",H.n(s.ghJ(),m),!1,n))
r=s.z
l=W.b3
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.af(q,"keyup",H.n(s.gi0(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.af(q,"keydown",H.n(s.ghZ(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.af(a,"mousedown",H.n(s.gi4(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.af(a,"mouseup",H.n(s.gi8(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.af(a,"mousemove",H.n(s.gi6(),o),!1,p))
l=s.z
k=W.be;(l&&C.a).h(l,W.af(a,H.H(W.nA(a)),H.n(s.gia(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.af(q,"mousemove",H.n(s.ghT(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.af(q,"mouseup",H.n(s.ghV(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.af(q,"pointerlockchange",H.n(s.gic(),m),!1,n))
n=s.z
m=W.aX
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.af(a,"touchstart",H.n(s.gis(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.af(a,"touchend",H.n(s.gio(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.af(a,"touchmove",H.n(s.giq(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.an(Date.now(),!1)
u.cy=0
u.dP()
return u},
fB:function fB(){},
ao:function ao(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i6:function i6(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i7:function i7(a){this.a=a},
i8:function i8(a){this.a=a},
i9:function i9(a){this.a=a},
ed:function ed(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iF:function iF(a){this.a=a}},Z={
le:function(a,b,c){var u
H.k(c,"$ib",[P.o],"$ab")
u=a.createBuffer()
C.c.aw(a,b,u)
C.c.e3(a,b,new Int16Array(H.c9(c)),35044)
C.c.aw(a,b,null)
return new Z.ep(b,u)},
aI:function(a){return new Z.bd(a)},
ep:function ep(a,b){this.a=a
this.b=b},
dm:function dm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jo:function jo(a){this.a=a},
dn:function dn(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bF:function bF(a,b,c){this.a=a
this.b=b
this.c=c},
bd:function bd(a){this.a=a}},D={
W:function(){var u=new D.bV()
u.sak(null)
u.saT(null)
u.c=null
u.d=0
return u},
fE:function fE(){},
bV:function bV(){var _=this
_.d=_.c=_.b=_.a=null},
h_:function h_(a){this.a=a},
h0:function h0(a){this.a=a},
B:function B(a){this.a=a
this.b=null},
bY:function bY(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bZ:function bZ(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
N:function N(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
l0:function(a,b){var u,t,s
u=new D.bC()
u.c=new V.a2(1,1,1)
u.a=V.mm()
t=u.b
u.b=b
b.gD().h(0,u.gfM())
s=new D.N("mover",t,u.b,u,[U.ad])
s.b=!0
u.aD(s)
if(!u.c.w(0,a)){t=u.c
u.c=a
s=new D.N("color",t,a,u,[V.a2])
s.b=!0
u.aD(s)}return u},
bC:function bC(){var _=this
_.d=_.c=_.b=_.a=null},
a8:function a8(){},
dH:function dH(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dW:function dW(){},
e3:function e3(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){}},X={dp:function dp(a,b){this.a=a
this.b=b},dF:function dF(a,b){this.a=a
this.b=b},hk:function hk(){var _=this
_.d=_.c=_.b=_.a=null},dK:function dK(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},hs:function hs(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aA:function aA(a,b,c){this.a=a
this.b=b
this.c=c},bn:function bn(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hL:function hL(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cA:function cA(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},i0:function i0(){},ef:function ef(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},iJ:function iJ(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ek:function ek(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nC:function(a,b,c,d,e,f,g){var u,t
u=new X.h8()
t=new V.aM(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.m5
if(t==null){t=V.m4(0,0,1,1)
$.m5=t}u.r=t
return u},
dq:function dq(){},
h8:function h8(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dV:function dV(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
e8:function e8(){}},V={
kT:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bl(a-b,u)
return(a<0?a+u:a)+b},
Q:function(a,b,c){if(a==null)return C.b.ag("null",c)
return C.b.ag(C.e.f1(Math.abs(a-0)<$.M().a?0:a,b),c+b+1)},
ce:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.r],"$ab")
u=H.d([],[P.e])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=V.Q(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.n(u,p,C.b.ag(u[p],s))}return u},
dP:function(){var u=$.lY
if(u==null){u=V.b6(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.lY=u}return u},
b6:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ap(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lX:function(a,b,c,d){return V.b6(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lU:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.b6(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
lV:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.b6(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
lW:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.b6(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
bJ:function(){var u=$.m1
if(u==null){u=new V.aa(0,0)
$.m1=u}return u},
nR:function(){var u=$.cF
if(u==null){u=new V.a4(0,0,0)
$.cF=u}return u},
m4:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e_(a,b,c,d)},
cW:function(){var u=$.ml
if(u==null){u=new V.J(0,0,0)
$.ml=u}return u},
mm:function(){var u=$.jb
if(u==null){u=new V.J(0,0,1)
$.jb=u}return u},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
aM:function aM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fY:function fY(a){this.a=a},
dO:function dO(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ap:function ap(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
b8:function b8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e_:function e_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
X:function X(a,b){this.a=a
this.b=b},
J:function J(a,b,c){this.a=a
this.b=b
this.c=c},
a0:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.w("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.I(a,0)
t=C.b.I(b,0)
s=new V.i4()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
x:function(a){var u=new V.ie()
u.fE(a)
return u},
iI:function(){var u,t
u=new V.iH()
t=P.e
u.siU(new H.aP([t,V.cJ]))
u.siW(new H.aP([t,V.cM]))
u.c=null
return u},
bh:function bh(){},
az:function az(){},
dL:function dL(){},
av:function av(){this.a=null},
i4:function i4(){this.b=this.a=null},
ie:function ie(){this.a=null},
cJ:function cJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ee:function ee(a,b,c){this.a=a
this.b=b
this.c=c},
cM:function cM(a,b){this.a=a
this.b=b
this.c=null},
iH:function iH(){this.c=this.b=this.a=null},
cN:function cN(a){this.b=a
this.a=this.c=null},
pi:function(a){P.ob(C.U,new V.kO(a))},
o8:function(a,b){var u=new V.ij()
u.fG(a,!0)
return u},
bA:function bA(){},
kO:function kO(a){this.a=a},
fO:function fO(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h9:function h9(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ha:function ha(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hZ:function hZ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i2:function i2(a,b){this.a=a
this.b=b
this.c=null},
i3:function i3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ij:function ij(){this.b=this.a=null},
il:function il(a){this.a=a},
ik:function ik(a){this.a=a},
im:function im(a){this.a=a}},U={
l_:function(){var u=new U.fF()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
lM:function(a){var u=new U.dr()
u.a=a
return u},
l8:function(a,b,c,d,e,f){var u,t
u=new U.e0()
u.a=0
u.b=0
u.c=0
u.d=0
u.e=0
u.f=0
u.r=0
u.sf9(f)
u.seQ(0,d)
u.seX(e)
t=u.d
if(!(Math.abs(t-c)<$.M().a)){u.d=c
t=new D.N("deltaYaw",t,c,u,[P.r])
t.b=!0
u.K(t)}t=u.e
if(!(Math.abs(t-a)<$.M().a)){u.e=a
t=new D.N("deltaPitch",t,a,u,[P.r])
t.b=!0
u.K(t)}t=u.f
if(!(Math.abs(t-b)<$.M().a)){u.f=b
t=new D.N("deltaRoll",t,b,u,[P.r])
t.b=!0
u.K(t)}return u},
fF:function fF(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dr:function dr(){this.b=this.a=null},
cv:function cv(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ad:function ad(){},
e0:function e0(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
el:function el(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
em:function em(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
en:function en(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
mQ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
u=V.o8("Test 020",!0)
t=W.lK(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.E(u.a,t)
s=[P.e]
u.dY(H.d(["Test of the Matrial Lighting shader with multiple moving directional lights."],s))
u.ju(H.d(["shapes"],s))
u.dY(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=C.z.d8(s,"testCanvas")
if(r==null)H.t(P.w("Failed to find an element with the identifier, testCanvas."))
q=E.oa(r,!0,!0,!0,!1)
p=U.l8(0,0,0.3,0,0,0)
o=D.l0(new V.a2(1,0,0),p)
p=U.l8(0.4,0,0,0,0,0)
n=D.l0(new V.a2(0,1,0),p)
p=U.l8(0.5,0,0.5,0,0,0)
m=D.l0(new V.a2(0,0,1),p)
l=new O.dM()
l.sh3(O.kZ(V.ap))
l.e.bm(l.ghF(),l.ghH())
p=new O.b5(l,"emission")
p.c=C.d
p.f=new V.a2(0,0,0)
l.f=p
p=new O.b5(l,"ambient")
p.c=C.d
p.f=new V.a2(0,0,0)
l.r=p
p=new O.b5(l,"diffuse")
p.c=C.d
p.f=new V.a2(0,0,0)
l.x=p
p=new O.b5(l,"invDiffuse")
p.c=C.d
p.f=new V.a2(0,0,0)
l.y=p
p=new O.hE(l,"specular")
p.c=C.d
p.f=new V.a2(0,0,0)
p.ch=100
l.z=p
p=new O.hB(l,"bump")
p.c=C.d
l.Q=p
l.ch=null
p=new O.b5(l,"reflect")
p.c=C.d
p.f=new V.a2(0,0,0)
l.cx=p
p=new O.hD(l,"refract")
p.c=C.d
p.f=new V.a2(0,0,0)
p.ch=1
l.cy=p
p=new O.hA(l,"alpha")
p.c=C.d
p.f=1
l.db=p
p=new D.dH()
p.bY(D.a8)
p.shc(H.d([],[D.bC]))
p.siu(H.d([],[D.dW]))
p.siT(H.d([],[D.e3]))
p.sj3(H.d([],[D.ea]))
p.sj4(H.d([],[D.eb]))
p.sj5(H.d([],[D.ec]))
p.Q=null
p.ch=null
p.dc(p.ghD(),p.gih(),p.gil())
l.dx=p
k=p.Q
if(k==null){k=D.W()
p.Q=k
p=k}else p=k
p.h(0,l.giG())
p=l.dx
k=p.ch
if(k==null){k=D.W()
p.ch=k
p=k}else p=k
p.h(0,l.ghL())
l.dy=null
l.dx.h(0,o)
l.dx.h(0,n)
l.dx.h(0,m)
l.f.sam(0,new V.a2(0,0,0))
p=l.r
p.sam(0,new V.a2(0.1,0.1,0.1))
p=l.x
p.sam(0,new V.a2(0.7,0.7,0.7))
p=l.z
p.sam(0,new V.a2(0.3,0.3,0.3))
p=l.z
if(p.c===C.d){p.c=C.j
p.bX()
p.cm(100)
k=p.a
k.a=null
k.ac(null)}p.cm(100)
j=E.lQ(null,!0,null,"",null,null)
j.saj(0,F.mV(30,1,15,0.5))
i=E.lQ(null,!0,null,"",null,null)
i.sbe(U.lM(V.lX(3,3,3,1)))
p=F.lq(1,null,null,1)
p.cO()
i.saj(0,p)
h=new U.cv()
h.bY(U.ad)
h.bm(h.ghB(),h.gij())
h.e=null
h.f=V.dP()
h.r=0
p=q.r
k=new U.em()
g=U.l_()
g.sd7(0,!0)
g.scU(6.283185307179586)
g.scW(0)
g.sa3(0,0)
g.scV(100)
g.sY(0)
g.scF(0.5)
k.b=g
f=k.gaP()
g.gD().h(0,f)
g=U.l_()
g.sd7(0,!0)
g.scU(6.283185307179586)
g.scW(0)
g.sa3(0,0)
g.scV(100)
g.sY(0)
g.scF(0.5)
k.c=g
g.gD().h(0,f)
k.d=null
k.e=!1
k.f=!1
k.r=!1
k.x=2.5
k.y=2.5
k.z=2
k.Q=4
k.cx=!1
k.ch=!1
k.cy=0
k.db=0
k.dx=null
k.dy=0
k.fr=null
k.fx=null
e=new X.aA(!1,!1,!1)
d=k.d
k.d=e
g=[X.aA]
f=new D.N("modifiers",d,e,k,g)
f.b=!0
k.K(f)
f=k.f
if(f!==!1){k.f=!1
f=new D.N("invertX",f,!1,k,[P.T])
f.b=!0
k.K(f)}f=k.r
if(f!==!1){k.r=!1
f=new D.N("invertY",f,!1,k,[P.T])
f.b=!0
k.K(f)}k.b6(p)
h.h(0,k)
p=q.r
k=new U.el()
f=U.l_()
f.sd7(0,!0)
f.scU(6.283185307179586)
f.scW(0)
f.sa3(0,0)
f.scV(100)
f.sY(0)
f.scF(0.2)
k.b=f
f.gD().h(0,k.gaP())
k.c=null
k.d=!1
k.e=2.5
k.f=2
k.r=4
k.y=!1
k.x=!1
k.z=0
k.Q=null
k.ch=0
k.cx=null
k.cy=null
e=new X.aA(!0,!1,!1)
d=k.c
k.c=e
f=new D.N("modifiers",d,e,k,g)
f.b=!0
k.K(f)
k.b6(p)
h.h(0,k)
p=q.r
k=new U.en()
k.c=0.01
k.d=0
k.e=0
e=new X.aA(!1,!1,!1)
k.b=e
g=new D.N("modifiers",null,e,k,g)
g.b=!0
k.K(g)
k.b6(p)
h.h(0,k)
h.h(0,U.lM(V.b6(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
p=new M.dw()
p.sh6(0,O.kZ(E.ao))
p.d.bm(p.ghN(),p.ghP())
p.e=null
p.f=null
p.r=null
p.x=null
c=X.nC(!0,!0,!1,null,2000,null,0)
b=new X.dV()
b.c=1.0471975511965976
b.d=0.1
b.e=2000
b.sbe(null)
k=b.c
if(!(Math.abs(k-1.0471975511965976)<$.M().a)){b.c=1.0471975511965976
k=new D.N("fov",k,1.0471975511965976,b,[P.r])
k.b=!0
b.aQ(k)}k=b.d
if(!(Math.abs(k-0.1)<$.M().a)){b.d=0.1
k=new D.N("near",k,0.1,b,[P.r])
k.b=!0
b.aQ(k)}k=b.e
if(!(Math.abs(k-2000)<$.M().a)){b.e=2000
k=new D.N("far",k,2000,b,[P.r])
k.b=!0
b.aQ(k)}k=p.a
if(k!==b){if(k!=null)k.gD().R(0,p.gas())
d=p.a
p.a=b
b.gD().h(0,p.gas())
k=new D.N("camera",d,p.a,p,[X.dq])
k.b=!0
p.aE(k)}k=p.b
if(k!==c){if(k!=null)k.gD().R(0,p.gas())
d=p.b
p.b=c
c.gD().h(0,p.gas())
k=new D.N("target",d,p.b,p,[X.e8])
k.b=!0
p.aE(k)}p.seZ(null)
p.seZ(l)
p.d.h(0,j)
p.d.h(0,i)
p.a.sbe(h)
k=q.d
if(k!==p){if(k!=null)k.gD().R(0,q.gdf())
q.d=p
p.gD().h(0,q.gdf())
q.dg()}p=new V.i2("shapes",!0)
s=C.z.d8(s,"shapes")
p.c=s
if(s==null)H.t("Failed to find shapes for RadioGroup")
p.b5(0,"Cube",new U.kF(j))
p.b5(0,"Cylinder",new U.kG(j))
p.b5(0,"Cone",new U.kH(j))
p.b5(0,"Sphere",new U.kI(j))
p.dW(0,"Toroid",new U.kJ(j),!0)
p.b5(0,"Knot",new U.kK(j))
s=q.z
if(s==null){s=D.W()
q.z=s}p={func:1,ret:-1,args:[D.B]}
k=H.n(new U.kL(u,l),p)
if(s.b==null)s.saT(H.d([],[p]))
s=s.b;(s&&C.a).h(s,k)
V.pi(q)},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a,b){this.a=a
this.b=b}},M={dw:function dw(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nP:function(a,b){var u,t
u=a.an
t=new A.hz(b,u)
t.fF(b,u)
t.fC(a,b)
return t},
lb:function(a,b,c,d,e){var u=new A.iR(a,b,c,e)
u.f=d
u.sj6(P.nN(d,0,!1,P.o))
return u},
dk:function dk(a,b,c){this.a=a
this.b=b
this.c=c},
fu:function fu(a){this.a=a},
hz:function hz(a,b){var _=this
_.bx=_.e8=_.bw=_.an=_.ay=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eo=_.cI=_.en=_.bK=_.em=_.el=_.bJ=_.bI=_.ek=_.ej=_.bH=_.bG=_.bF=_.ei=_.eh=_.bE=_.eg=_.ef=_.bD=_.ee=_.ed=_.bC=_.bB=_.ec=_.eb=_.bA=_.bz=_.ea=_.e9=_.by=null
_.cN=_.es=_.cM=_.er=_.cL=_.eq=_.cK=_.ep=_.cJ=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hC:function hC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ay=b3
_.an=b4
_.bw=b5},
cO:function cO(a,b,c){this.a=a
this.b=b
this.c=c},
cS:function cS(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cQ:function cQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cT:function cT(a,b,c,d,e,f,g,h,i,j){var _=this
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
cR:function cR(a,b,c,d,e,f,g,h,i,j){var _=this
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
cU:function cU(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cI:function cI(){},
bU:function bU(a,b){this.a=a
this.b=b},
eg:function eg(){},
iX:function iX(a){this.a=a},
P:function P(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iT:function iT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iU:function iU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iW:function iW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iR:function iR(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iS:function iS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
O:function O(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iV:function iV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iY:function iY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cP:function cP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
lq:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.ai,P.r,P.r]})
u=F.l9()
F.da(u,b,c,d,a,1,0,0,1)
F.da(u,b,c,d,a,0,1,0,3)
F.da(u,b,c,d,a,0,0,1,2)
F.da(u,b,c,d,a,-1,0,0,0)
F.da(u,b,c,d,a,0,-1,0,0)
F.da(u,b,c,d,a,0,0,-1,3)
u.ax()
return u},
kj:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
da:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.n(c,{func:1,ret:-1,args:[F.ai,P.r,P.r]})
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.J(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.J(o+a3,n+a1,m+a2)
u.b=l
k=new V.J(o-a3,n-a1,m-a2)
u.c=k
j=new V.J(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.kj(t)
f=F.kj(u.b)
e=F.lw(d,a0,new F.ki(u,F.kj(u.c),F.kj(u.d),f,g,c),b)
if(e!=null)a.bd(e)},
mK:function(a,b,c,d,e,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(e,{func:1,ret:P.r,args:[P.r]})
if(a0<3)return
u=F.l9()
t=b?-1:1
s=-6.283185307179586/a0
r=H.d([],[F.ai])
q=u.a
p=new V.J(0,0,t)
p=p.B(0,Math.sqrt(p.H(p)))
C.a.h(r,q.jy(new V.b8(a,-1,-1,-1),new V.aM(1,1,1,1),new V.a4(0,0,d),new V.J(0,0,t),new V.aa(0.5,0.5),p))
for(q=t*t,o=0;o<=a0;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=e.$1(o/a0)
p=u.a
if(typeof k!=="number")return H.F(k)
j=new V.J(m,l,t).B(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.eo(new V.b8(a,-1,-1,-1),null,new V.aM(i,g,h,1),new V.a4(m*k,l*k,d),new V.J(0,0,t),new V.aa(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.jw(r)
return u},
mI:function(a,b,c,d,e,f){return F.oV(!0,c,d,new F.ks(a,f),e)},
oV:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.r,args:[P.r,P.r]})
if(e<3)return
if(c<1)return
u=F.lw(c,e,new F.ku(d),null)
if(u==null)return
u.ax()
u.cr()
if(b)u.bd(F.mK(3,!1,!1,1,new F.kv(d),e))
u.bd(F.mK(1,!0,!1,-1,new F.kw(d),e))
return u},
pj:function(a,b,c,d){var u,t
u={}
u.a=b
u.a=new F.kP()
t=F.lq(a,null,new F.kQ(u,c),d)
t.cr()
return t},
mV:function(a,b,c,d){return F.mJ(c,a,d,b,new F.kR())},
pa:function(a,b,c,d,e,f){return F.mJ(d,a,e,b,new F.kD(f,c))},
mJ:function(a,b,c,d,e){var u=F.lw(a,b,new F.kt(H.n(e,{func:1,ret:V.a4,args:[P.r]}),d,b,c),null)
if(u==null)return
u.ax()
u.cr()
return u},
lw:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.ai,P.r,P.r]})
if(a<1)return
if(b<1)return
u=F.l9()
t=H.d([],[F.ai])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.eo(null,null,new V.aM(p,0,0,1),null,null,new V.aa(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cE(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.eo(null,null,new V.aM(j,i,h,1),null,null,new V.aa(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cE(d))}}u.d.jx(a+1,b+1,t)
return u},
cs:function(a,b,c){var u,t
u=new F.a9()
t=a.a
if(t==null)H.t(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.w("May not create a face with vertices attached to different shapes."))
u.cp(a)
u.cq(b)
u.iN(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a4()
return u},
nJ:function(a,b){var u,t
u=new F.bm()
t=a.a
if(t==null)H.t(P.w("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.w("May not create a line with vertices attached to different shapes."))
u.cp(a)
u.cq(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a4()
return u},
l9:function(){var u,t
u=new F.e2()
t=new F.jc(u)
t.b=!1
t.sj7(H.d([],[F.ai]))
u.a=t
t=new F.ii(u)
t.scg(H.d([],[F.bI]))
u.b=t
t=new F.ih(u)
t.shq(H.d([],[F.bm]))
u.c=t
t=new F.ig(u)
t.shg(H.d([],[F.a9]))
u.d=t
u.e=null
return u},
eo:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ai()
t=new F.jk(u)
t.scg(H.d([],[F.bI]))
u.b=t
t=new F.jg(u)
s=[F.bm]
t.shr(H.d([],s))
t.shs(H.d([],s))
u.c=t
t=new F.jd(u)
s=[F.a9]
t.shh(H.d([],s))
t.shi(H.d([],s))
t.shj(H.d([],s))
u.d=t
h=$.n8()
u.e=0
t=$.bu()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bt().a)!==0?e:null
u.x=(s&$.bs().a)!==0?b:null
u.y=(s&$.bv().a)!==0?f:null
u.z=(s&$.bw().a)!==0?g:null
u.Q=(s&$.n9().a)!==0?c:null
u.ch=(s&$.cj().a)!==0?i:0
u.cx=(s&$.br().a)!==0?a:null
return u},
ki:function ki(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ks:function ks(a,b){this.a=a
this.b=b},
ku:function ku(a){this.a=a},
kv:function kv(a){this.a=a},
kw:function kw(a){this.a=a},
kP:function kP(){},
kQ:function kQ(a,b){this.a=a
this.b=b},
kR:function kR(){},
kD:function kD(a,b){this.a=a
this.b=b},
kt:function kt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h1:function h1(){},
io:function io(){},
bm:function bm(){this.b=this.a=null},
hm:function hm(){},
iQ:function iQ(){},
bI:function bI(){this.a=null},
e2:function e2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ig:function ig(a){this.a=a
this.b=null},
ih:function ih(a){this.a=a
this.b=null},
ii:function ii(a){this.a=a
this.b=null},
ai:function ai(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jm:function jm(a){this.a=a},
jl:function jl(a){this.a=a},
jc:function jc(a){this.a=a
this.c=this.b=null},
jd:function jd(a){var _=this
_.a=a
_.d=_.c=_.b=null},
je:function je(a,b){this.a=a
this.b=b},
jf:function jf(a,b){this.a=a
this.b=b},
jg:function jg(a){this.a=a
this.c=this.b=null},
ji:function ji(){},
jh:function jh(){},
jj:function jj(){},
hT:function hT(){},
jk:function jk(a){this.a=a
this.b=null}},T={e9:function e9(){},iE:function iE(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l4.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gL:function(a){return H.cG(a)},
i:function(a){return"Instance of '"+H.c1(a)+"'"}}
J.hg.prototype={
i:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$iT:1}
J.dD.prototype={
w:function(a,b){return null==b},
i:function(a){return"null"},
gL:function(a){return 0},
$iL:1}
J.dE.prototype={
gL:function(a){return 0},
i:function(a){return String(a)}}
J.hY.prototype={}
J.bL.prototype={}
J.bl.prototype={
i:function(a){var u=a[$.mX()]
if(u==null)return this.fv(a)
return"JavaScript function for "+H.m(J.au(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibE:1}
J.aO.prototype={
h:function(a,b){H.A(b,H.u(a,0))
if(!!a.fixed$length)H.t(P.I("add"))
a.push(b)},
eU:function(a,b){if(!!a.fixed$length)H.t(P.I("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dZ(b,null,null))
return a.splice(b,1)[0]},
R:function(a,b){var u
if(!!a.fixed$length)H.t(P.I("remove"))
for(u=0;u<a.length;++u)if(J.U(a[u],b)){a.splice(u,1)
return!0}return!1},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bi(a))}},
m:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.n(u,t,H.m(a[t]))
return u.join(b)},
kp:function(a){return this.m(a,"")},
kh:function(a,b,c,d){var u,t,s
H.A(b,d)
H.n(c,{func:1,ret:d,args:[d,H.u(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bi(a))}return t},
kg:function(a,b,c){var u,t,s
H.n(b,{func:1,ret:P.T,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.bi(a))}throw H.c(H.he())},
kf:function(a,b){return this.kg(a,b,null)},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
fs:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ae(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ae(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.u(a,0)])
return H.d(a.slice(b,c),[H.u(a,0)])},
gke:function(a){if(a.length>0)return a[0]
throw H.c(H.he())},
gaz:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.he())},
fp:function(a,b,c,d,e){var u,t,s
u=H.u(a,0)
H.k(d,"$ii",[u],"$ai")
if(!!a.immutable$list)H.t(P.I("setRange"))
P.bp(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.k(d,"$ib",[u],"$ab")
u=J.cf(d)
if(e+t>u.gl(d))throw H.c(H.nF())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
bn:function(a,b,c,d){return this.fp(a,b,c,d,0)},
dZ:function(a,b){var u,t
H.n(b,{func:1,ret:P.T,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.bi(a))}return!1},
a0:function(a,b){var u
for(u=0;u<a.length;++u)if(J.U(a[u],b))return!0
return!1},
i:function(a){return P.l2(a,"[","]")},
gW:function(a){return new J.ay(a,a.length,0,[H.u(a,0)])},
gL:function(a){return H.cG(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.I("set length"))
if(b<0)throw H.c(P.ae(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cd(a,b))
return a[b]},
n:function(a,b,c){H.A(c,H.u(a,0))
if(!!a.immutable$list)H.t(P.I("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cd(a,b))
a[b]=c},
p:function(a,b){var u,t
u=[H.u(a,0)]
H.k(b,"$ib",u,"$ab")
t=C.f.p(a.length,b.gl(b))
u=H.d([],u)
this.sl(u,t)
this.bn(u,0,a.length,a)
this.bn(u,a.length,t,b)
return u},
$ii:1,
$ib:1}
J.l3.prototype={}
J.ay.prototype={
gN:function(a){return this.d},
F:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.C(u))
s=this.c
if(s>=t){this.sdA(null)
return!1}this.sdA(u[s]);++this.c
return!0},
sdA:function(a){this.d=H.A(a,H.u(this,0))},
$ib2:1}
J.bG.prototype={
ev:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.I(""+a+".floor()"))},
ap:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.I(""+a+".round()"))},
f1:function(a,b){var u,t
if(b>20)throw H.c(P.ae(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bj:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ae(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.a1(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.I("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.h(t,1)
u=t[1]
if(3>=s)return H.h(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.u("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gL:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
p:function(a,b){if(typeof b!=="number")throw H.c(H.ax(b))
return a+b},
t:function(a,b){if(typeof b!=="number")throw H.c(H.ax(b))
return a-b},
u:function(a,b){if(typeof b!=="number")throw H.c(H.ax(b))
return a*b},
bl:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fB:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dS(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dS(a,b)},
dS:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.I("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
aV:function(a,b){var u
if(a>0)u=this.dR(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
iS:function(a,b){if(b<0)throw H.c(H.ax(b))
return this.dR(a,b)},
dR:function(a,b){return b>31?0:a>>>b},
$ir:1,
$ia5:1}
J.dC.prototype={$io:1}
J.hh.prototype={}
J.bk.prototype={
a1:function(a,b){if(b<0)throw H.c(H.cd(a,b))
if(b>=a.length)H.t(H.cd(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.c(H.cd(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.kX(b,null,null))
return a+b},
b_:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ax(b))
c=P.bp(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ab:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ax(c))
if(typeof c!=="number")return c.Z()
if(c<0||c>a.length)throw H.c(P.ae(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a5:function(a,b){return this.ab(a,b,0)},
v:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ax(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.Z()
if(b<0)throw H.c(P.dZ(b,null,null))
if(b>c)throw H.c(P.dZ(b,null,null))
if(c>a.length)throw H.c(P.dZ(c,null,null))
return a.substring(b,c)},
ar:function(a,b){return this.v(a,b,null)},
kZ:function(a){return a.toLowerCase()},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.R)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kC:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.u(c,u)+a},
ag:function(a,b){return this.kC(a,b," ")},
eD:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ae(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eC:function(a,b){return this.eD(a,b,0)},
i:function(a){return a},
gL:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$im_:1,
$ie:1}
H.v.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.b.a1(this.a,b)},
$acV:function(){return[P.o]},
$ay:function(){return[P.o]},
$ai:function(){return[P.o]},
$ab:function(){return[P.o]}}
H.fV.prototype={}
H.c_.prototype={
gW:function(a){return new H.cy(this,this.gl(this),0,[H.at(this,"c_",0)])},
bR:function(a,b){return this.fu(0,H.n(b,{func:1,ret:P.T,args:[H.at(this,"c_",0)]}))}}
H.cy.prototype={
gN:function(a){return this.d},
F:function(){var u,t,s,r
u=this.a
t=J.cf(u)
s=t.gl(u)
if(this.b!==s)throw H.c(P.bi(u))
r=this.c
if(r>=s){this.sb1(null)
return!1}this.sb1(t.M(u,r));++this.c
return!0},
sb1:function(a){this.d=H.A(a,H.u(this,0))},
$ib2:1}
H.hw.prototype={
gW:function(a){return new H.hx(J.bx(this.a),this.b,this.$ti)},
gl:function(a){return J.aD(this.a)},
M:function(a,b){return this.b.$1(J.fq(this.a,b))},
$ai:function(a,b){return[b]}}
H.hx.prototype={
F:function(){var u=this.b
if(u.F()){this.sb1(this.c.$1(u.gN(u)))
return!0}this.sb1(null)
return!1},
gN:function(a){return this.a},
sb1:function(a){this.a=H.A(a,H.u(this,1))},
$ab2:function(a,b){return[b]}}
H.hy.prototype={
gl:function(a){return J.aD(this.a)},
M:function(a,b){return this.b.$1(J.fq(this.a,b))},
$ac_:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cX.prototype={
gW:function(a){return new H.jp(J.bx(this.a),this.b,this.$ti)}}
H.jp.prototype={
F:function(){var u,t
for(u=this.a,t=this.b;u.F();)if(t.$1(u.gN(u)))return!0
return!1},
gN:function(a){var u=this.a
return u.gN(u)}}
H.bW.prototype={}
H.cV.prototype={
n:function(a,b,c){H.A(c,H.at(this,"cV",0))
throw H.c(P.I("Cannot modify an unmodifiable list"))}}
H.ei.prototype={}
H.fH.prototype={
i:function(a){return P.l7(this)},
n:function(a,b,c){H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
return H.nw()},
$iE:1}
H.fI.prototype={
gl:function(a){return this.a},
bu:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bu(0,b))return
return this.dB(b)},
dB:function(a){return this.b[H.H(a)]},
O:function(a,b){var u,t,s,r,q
u=H.u(this,1)
H.n(b,{func:1,ret:-1,args:[H.u(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.A(this.dB(q),u))}}}
H.i5.prototype={}
H.iN.prototype={
af:function(a){var u,t,s
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
H.hU.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hj.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.m(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.m(this.a)+")"}}
H.j0.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kS.prototype={
$1:function(a){if(!!J.Z(a).$ibD)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:18}
H.eY.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iaw:1}
H.cn.prototype={
i:function(a){return"Closure '"+H.c1(this).trim()+"'"},
$ibE:1,
gl5:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iB.prototype={}
H.is.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ci(u)+"'"}}
H.cl.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cl))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var u,t
u=this.c
if(u==null)t=H.cG(this.a)
else t=typeof u!=="object"?J.di(u):H.cG(u)
return(t^H.cG(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.c1(u)+"'")}}
H.iP.prototype={
i:function(a){return this.a}}
H.fD.prototype={
i:function(a){return this.a}}
H.ic.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.aP.prototype={
gl:function(a){return this.a},
gko:function(a){return this.a===0},
ga7:function(a){return new H.ho(this,[H.u(this,0)])},
bu:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.dv(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.dv(t,b)}else return this.kl(b)},
kl:function(a){var u=this.d
if(u==null)return!1
return this.cR(this.c4(u,this.cQ(a)),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bp(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bp(r,b)
s=t==null?null:t.b
return s}else return this.km(b)},
km:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.c4(u,this.cQ(a))
s=this.cR(t,a)
if(s<0)return
return t[s].b},
n:function(a,b,c){var u,t
H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.ce()
this.b=u}this.dk(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.ce()
this.c=t}this.dk(t,b,c)}else this.kn(b,c)},
kn:function(a,b){var u,t,s,r
H.A(a,H.u(this,0))
H.A(b,H.u(this,1))
u=this.d
if(u==null){u=this.ce()
this.d=u}t=this.cQ(a)
s=this.c4(u,t)
if(s==null)this.cn(u,t,[this.cf(a,b)])
else{r=this.cR(s,a)
if(r>=0)s[r].b=b
else s.push(this.cf(a,b))}},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.bi(this))
u=u.c}},
dk:function(a,b,c){var u
H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
u=this.bp(a,b)
if(u==null)this.cn(a,b,this.cf(b,c))
else u.b=c},
hy:function(){this.r=this.r+1&67108863},
cf:function(a,b){var u,t
u=new H.hn(H.A(a,H.u(this,0)),H.A(b,H.u(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.hy()
return u},
cQ:function(a){return J.di(a)&0x3ffffff},
cR:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1},
i:function(a){return P.l7(this)},
bp:function(a,b){return a[b]},
c4:function(a,b){return a[b]},
cn:function(a,b,c){a[b]=c},
hb:function(a,b){delete a[b]},
dv:function(a,b){return this.bp(a,b)!=null},
ce:function(){var u=Object.create(null)
this.cn(u,"<non-identifier-key>",u)
this.hb(u,"<non-identifier-key>")
return u}}
H.hn.prototype={}
H.ho.prototype={
gl:function(a){return this.a.a},
gW:function(a){var u,t
u=this.a
t=new H.hp(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hp.prototype={
gN:function(a){return this.d},
F:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bi(u))
else{u=this.c
if(u==null){this.sdj(null)
return!1}else{this.sdj(u.a)
this.c=this.c.c
return!0}}},
sdj:function(a){this.d=H.A(a,H.u(this,0))},
$ib2:1}
H.kz.prototype={
$1:function(a){return this.a(a)},
$S:18}
H.kA.prototype={
$2:function(a,b){return this.a(a,b)},
$S:53}
H.kB.prototype={
$1:function(a){return this.a(H.H(a))},
$S:51}
H.hi.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$im_:1,
$io4:1}
H.cB.prototype={$icB:1}
H.bH.prototype={$ibH:1}
H.dQ.prototype={
gl:function(a){return a.length},
$iK:1,
$aK:function(){}}
H.cC.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]},
n:function(a,b,c){H.oX(c)
H.bg(b,a,a.length)
a[b]=c},
$abW:function(){return[P.r]},
$ay:function(){return[P.r]},
$ii:1,
$ai:function(){return[P.r]},
$ib:1,
$ab:function(){return[P.r]}}
H.dR.prototype={
n:function(a,b,c){H.aj(c)
H.bg(b,a,a.length)
a[b]=c},
$abW:function(){return[P.o]},
$ay:function(){return[P.o]},
$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
H.hM.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hN.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hO.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hP.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hQ.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.dS.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.cD.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bg(b,a,a.length)
return a[b]},
$icD:1,
$iS:1}
H.d0.prototype={}
H.d1.prototype={}
H.d2.prototype={}
H.d3.prototype={}
P.jr.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:29}
P.jq.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:49}
P.js.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jt.prototype={
$0:function(){this.a.$0()},
$S:0}
P.f3.prototype={
fW:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.cc(new P.k7(this,b),0),a)
else throw H.c(P.I("`setTimeout()` not found."))},
fX:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.cc(new P.k6(this,a,Date.now(),b),0),a)
else throw H.c(P.I("Periodic timer."))},
$iba:1}
P.k7.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.k6.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.fB(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.bf.prototype={
ks:function(a){if(this.c!==6)return!0
return this.b.b.d4(H.n(this.d,{func:1,ret:P.T,args:[P.R]}),a.a,P.T,P.R)},
kk:function(a){var u,t,s,r
u=this.e
t=P.R
s={futureOr:1,type:H.u(this,1)}
r=this.b.b
if(H.fl(u,{func:1,args:[P.R,P.aw]}))return H.lr(r.kS(u,a.a,a.b,null,t,P.aw),s)
else return H.lr(r.d4(H.n(u,{func:1,args:[P.R]}),a.a,null,t),s)}}
P.aJ.prototype={
f0:function(a,b,c){var u,t,s,r
u=H.u(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.a1
if(t!==C.l){t.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.oM(b,t)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aJ(0,$.a1,[c])
r=b==null?1:3
this.dl(new P.bf(s,r,a,b,[u,c]))
return s},
kW:function(a,b){return this.f0(a,null,b)},
dl:function(a){var u,t
u=this.a
if(u<=1){a.a=H.f(this.c,"$ibf")
this.c=a}else{if(u===2){t=H.f(this.c,"$iaJ")
u=t.a
if(u<4){t.dl(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.kq(null,null,u,H.n(new P.jC(this,a),{func:1,ret:-1}))}},
dN:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.f(this.c,"$ibf")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.f(this.c,"$iaJ")
t=p.a
if(t<4){p.dN(a)
return}this.a=t
this.c=p.c}u.a=this.br(a)
t=this.b
t.toString
P.kq(null,null,t,H.n(new P.jG(u,this),{func:1,ret:-1}))}},
cj:function(){var u=H.f(this.c,"$ibf")
this.c=null
return this.br(u)},
br:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dr:function(a){var u,t,s
u=H.u(this,0)
H.lr(a,{futureOr:1,type:u})
t=this.$ti
if(H.dd(a,"$icu",t,"$acu"))if(H.dd(a,"$iaJ",t,null))P.mn(a,this)
else P.on(a,this)
else{s=this.cj()
H.A(a,u)
this.a=4
this.c=a
P.d_(this,s)}},
ds:function(a,b){var u
H.f(b,"$iaw")
u=this.cj()
this.a=8
this.c=new P.am(a,b)
P.d_(this,u)},
$icu:1}
P.jC.prototype={
$0:function(){P.d_(this.a,this.b)},
$S:0}
P.jG.prototype={
$0:function(){P.d_(this.b,this.a.a)},
$S:0}
P.jD.prototype={
$1:function(a){var u=this.a
u.a=0
u.dr(a)},
$S:29}
P.jE.prototype={
$2:function(a,b){H.f(b,"$iaw")
this.a.ds(a,b)},
$1:function(a){return this.$2(a,null)},
$S:48}
P.jF.prototype={
$0:function(){this.a.ds(this.b,this.c)},
$S:0}
P.jJ.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.eY(H.n(r.d,{func:1}),null)}catch(q){t=H.ak(q)
s=H.cg(q)
if(this.d){r=H.f(this.a.a.c,"$iam").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.f(this.a.a.c,"$iam")
else p.b=new P.am(t,s)
p.a=!0
return}if(!!J.Z(u).$icu){if(u instanceof P.aJ&&u.a>=4){if(u.a===8){r=this.b
r.b=H.f(u.c,"$iam")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.kW(new P.jK(o),null)
r.a=!1}},
$S:3}
P.jK.prototype={
$1:function(a){return this.a},
$S:47}
P.jI.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.u(s,0)
q=H.A(this.c,r)
p=H.u(s,1)
this.a.b=s.b.b.d4(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ak(o)
t=H.cg(o)
s=this.a
s.b=new P.am(u,t)
s.a=!0}},
$S:3}
P.jH.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.f(this.a.a.c,"$iam")
r=this.c
if(r.ks(u)&&r.e!=null){q=this.b
q.b=r.kk(u)
q.a=!1}}catch(p){t=H.ak(p)
s=H.cg(p)
r=H.f(this.a.a.c,"$iam")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.am(t,s)
n.a=!0}},
$S:3}
P.eq.prototype={}
P.iv.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.aJ(0,$.a1,[P.o])
u.a=0
s=H.u(this,0)
r=H.n(new P.ix(u,this),{func:1,ret:-1,args:[s]})
H.n(new P.iy(u,t),{func:1,ret:-1})
W.af(this.a,this.b,r,!1,s)
return t}}
P.ix.prototype={
$1:function(a){H.A(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.u(this.b,0)]}}}
P.iy.prototype={
$0:function(){this.b.dr(this.a.a)},
$S:0}
P.cK.prototype={}
P.iw.prototype={}
P.ba.prototype={}
P.am.prototype={
i:function(a){return H.m(this.a)},
$ibD:1}
P.kh.prototype={$ipV:1}
P.kp.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dU()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:0}
P.jQ.prototype={
kT:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
try{if(C.l===$.a1){a.$0()
return}P.mz(null,null,this,a,-1)}catch(s){u=H.ak(s)
t=H.cg(s)
P.ko(null,null,this,u,H.f(t,"$iaw"))}},
kU:function(a,b,c){var u,t,s
H.n(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.l===$.a1){a.$1(b)
return}P.mA(null,null,this,a,b,-1,c)}catch(s){u=H.ak(s)
t=H.cg(s)
P.ko(null,null,this,u,H.f(t,"$iaw"))}},
jG:function(a,b){return new P.jS(this,H.n(a,{func:1,ret:b}),b)},
cv:function(a){return new P.jR(this,H.n(a,{func:1,ret:-1}))},
e1:function(a,b){return new P.jT(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eY:function(a,b){H.n(a,{func:1,ret:b})
if($.a1===C.l)return a.$0()
return P.mz(null,null,this,a,b)},
d4:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.a1===C.l)return a.$1(b)
return P.mA(null,null,this,a,b,c,d)},
kS:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.a1===C.l)return a.$2(b,c)
return P.oN(null,null,this,a,b,c,d,e,f)}}
P.jS.prototype={
$0:function(){return this.a.eY(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jR.prototype={
$0:function(){return this.a.kT(this.b)},
$S:3}
P.jT.prototype={
$1:function(a){var u=this.c
return this.a.kU(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jO.prototype={
gW:function(a){var u=new P.eF(this,this.r,this.$ti)
u.c=this.e
return u},
gl:function(a){return this.a},
a0:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.f(u[b],"$ic7")!=null}else{t=this.h7(b)
return t}},
h7:function(a){var u=this.d
if(u==null)return!1
return this.c2(this.dC(u,a),a)>=0},
h:function(a,b){var u,t
H.A(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.lg()
this.b=u}return this.dm(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.lg()
this.c=t}return this.dm(t,b)}else return this.fZ(0,b)},
fZ:function(a,b){var u,t,s
H.A(b,H.u(this,0))
u=this.d
if(u==null){u=P.lg()
this.d=u}t=this.dt(b)
s=u[t]
if(s==null)u[t]=[this.c_(b)]
else{if(this.c2(s,b)>=0)return!1
s.push(this.c_(b))}return!0},
R:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iA(this.c,b)
else return this.ix(0,b)},
ix:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.dC(u,b)
s=this.c2(t,b)
if(s<0)return!1
this.dT(t.splice(s,1)[0])
return!0},
dm:function(a,b){H.A(b,H.u(this,0))
if(H.f(a[b],"$ic7")!=null)return!1
a[b]=this.c_(b)
return!0},
iA:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$ic7")
if(u==null)return!1
this.dT(u)
delete a[b]
return!0},
dq:function(){this.r=1073741823&this.r+1},
c_:function(a){var u,t
u=new P.c7(H.A(a,H.u(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dq()
return u},
dT:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dq()},
dt:function(a){return J.di(a)&1073741823},
dC:function(a,b){return a[this.dt(b)]},
c2:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1}}
P.c7.prototype={}
P.eF.prototype={
gN:function(a){return this.d},
F:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bi(u))
else{u=this.c
if(u==null){this.sdn(null)
return!1}else{this.sdn(H.A(u.a,H.u(this,0)))
this.c=this.c.b
return!0}}},
sdn:function(a){this.d=H.A(a,H.u(this,0))},
$ib2:1}
P.hq.prototype={
$2:function(a,b){this.a.n(0,H.A(a,this.b),H.A(b,this.c))},
$S:7}
P.hr.prototype={$ii:1,$ib:1}
P.y.prototype={
gW:function(a){return new H.cy(a,this.gl(a),0,[H.bO(this,a,"y",0)])},
M:function(a,b){return this.j(a,b)},
kY:function(a,b){var u,t
u=H.d([],[H.bO(this,a,"y",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.n(u,t,this.j(a,t))
return u},
kX:function(a){return this.kY(a,!0)},
p:function(a,b){var u,t
u=[H.bO(this,a,"y",0)]
H.k(b,"$ib",u,"$ab")
t=H.d([],u)
C.a.sl(t,C.f.p(this.gl(a),b.gl(b)))
C.a.bn(t,0,this.gl(a),a)
C.a.bn(t,this.gl(a),t.length,b)
return t},
kc:function(a,b,c,d){var u
H.A(d,H.bO(this,a,"y",0))
P.bp(b,c,this.gl(a),null,null,null)
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.l2(a,"[","]")}}
P.ht.prototype={}
P.hu.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.m(a)
u.a=t+": "
u.a+=H.m(b)},
$S:7}
P.ag.prototype={
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.bO(this,a,"ag",0),H.bO(this,a,"ag",1)]})
for(u=J.bx(this.ga7(a));u.F();){t=u.gN(u)
b.$2(t,this.j(a,t))}},
gl:function(a){return J.aD(this.ga7(a))},
i:function(a){return P.l7(a)},
$iE:1}
P.k8.prototype={
n:function(a,b,c){H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
throw H.c(P.I("Cannot modify unmodifiable map"))}}
P.hv.prototype={
j:function(a,b){return J.lB(this.a,b)},
n:function(a,b,c){J.kU(this.a,H.A(b,H.u(this,0)),H.A(c,H.u(this,1)))},
O:function(a,b){J.lD(this.a,H.n(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]}))},
gl:function(a){return J.aD(this.a)},
i:function(a){return J.au(this.a)},
$iE:1}
P.ej.prototype={}
P.jV.prototype={
au:function(a,b){var u
for(u=J.bx(H.k(b,"$ii",this.$ti,"$ai"));u.F();)this.h(0,u.gN(u))},
i:function(a){return P.l2(this,"{","}")},
M:function(a,b){var u,t,s
if(b<0)H.t(P.ae(b,0,null,"index",null))
for(u=P.or(this,this.r,H.u(this,0)),t=0;u.F();){s=u.d
if(b===t)return s;++t}throw H.c(P.a_(b,this,"index",null,t))},
$ii:1,
$im6:1}
P.eG.prototype={}
P.f8.prototype={}
P.fz.prototype={
ku:function(a,b,c,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a0=P.bp(c,a0,b.length,null,null,null)
u=$.nb()
for(t=c,s=t,r=null,q=-1,p=-1,o=0;t<a0;t=n){n=t+1
m=C.b.I(b,t)
if(m===37){l=n+2
if(l<=a0){k=H.ky(C.b.I(b,n))
j=H.ky(C.b.I(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.h(u,i)
h=u[i]
if(h>=0){i=C.b.a1("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.al("")
g=r.a+=C.b.v(b,s,t)
r.a=g+H.c2(m)
s=n
continue}}throw H.c(P.a7("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.v(b,s,a0)
f=g.length
if(q>=0)P.lH(b,p,a0,q,o,f)
else{e=C.f.bl(f-1,4)+1
if(e===1)throw H.c(P.a7("Invalid base64 encoding length ",b,a0))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.b_(b,c,a0,g.charCodeAt(0)==0?g:g)}d=a0-c
if(q>=0)P.lH(b,p,a0,q,o,d)
else{e=C.f.bl(d,4)
if(e===1)throw H.c(P.a7("Invalid base64 encoding length ",b,a0))
if(e>1)b=C.b.b_(b,a0,a0,e===2?"==":"=")}return b},
$abT:function(){return[[P.b,P.o],P.e]}}
P.fA.prototype={
$abB:function(){return[[P.b,P.o],P.e]}}
P.bT.prototype={}
P.bB.prototype={}
P.fX.prototype={
$abT:function(){return[P.e,[P.b,P.o]]}}
P.hc.prototype={
i:function(a){return this.a}}
P.hb.prototype={
h8:function(a,b,c){var u,t,s,r,q,p
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=null;r<c;++r){if(r>=a.length)return H.h(a,r)
switch(a[r]){case"&":p="&amp;"
break
case'"':p=u?"&quot;":null
break
case"'":p=s?"&#39;":null
break
case"<":p="&lt;"
break
case">":p="&gt;"
break
case"/":p=t?"&#47;":null
break
default:p=null}if(p!=null){if(q==null)q=new P.al("")
if(r>b)q.a+=C.b.v(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.np(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abB:function(){return[P.e,P.e]}}
P.j8.prototype={
gkb:function(){return C.S}}
P.ja.prototype={
b7:function(a,b,c){var u,t,s
c=P.bp(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.kf(t)
if(s.hk(a,b,c)!==c)s.dV(J.nj(a,c-1),0)
return new Uint8Array(t.subarray(0,H.oH(0,s.b,t.length)))},
cD:function(a){return this.b7(a,0,null)},
$abB:function(){return[P.e,[P.b,P.o]]}}
P.kf.prototype={
dV:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.h(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.h(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.h(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.h(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.h(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.h(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.h(u,t)
u[t]=128|a&63
return!1}},
hk:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.b.a1(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.b.I(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dV(r,C.b.I(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.h(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.h(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.h(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.h(u,q)
u[q]=128|r&63}}return s}}
P.j9.prototype={
b7:function(a,b,c){var u,t,s,r
H.k(a,"$ib",[P.o],"$ab")
u=P.oe(!1,a,b,c)
if(u!=null)return u
c=P.bp(b,c,J.aD(a),null,null,null)
t=new P.al("")
s=new P.kd(!1,t)
s.b7(a,b,c)
if(s.e>0){H.t(P.a7("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.c2(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cD:function(a){return this.b7(a,0,null)},
$abB:function(){return[[P.b,P.o],P.e]}}
P.kd.prototype={
b7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.k(a,"$ib",[P.o],"$ab")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.ke(this,b,c,a)
$label0$0:for(q=J.cf(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.j(a,o)
if(typeof n!=="number")return n.bS()
if((n&192)!==128){m=P.a7("Bad UTF-8 encoding 0x"+C.f.bj(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.h(C.G,m)
if(u<=C.G[m]){m=P.a7("Overlong encoding of 0x"+C.f.bj(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a7("Character outside valid Unicode range: 0x"+C.f.bj(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.c2(u)
this.c=!1}for(m=o<c;m;){l=P.oO(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.j(a,k)
if(typeof n!=="number")return n.Z()
if(n<0){i=P.a7("Negative UTF-8 code unit: -0x"+C.f.bj(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a7("Bad UTF-8 encoding 0x"+C.f.bj(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.ke.prototype={
$2:function(a,b){this.a.b.a+=P.e5(this.d,a,b)},
$S:46}
P.T.prototype={}
P.an.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.an&&this.a===b.a&&!0},
gL:function(a){var u=this.a
return(u^C.f.aV(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.nx(H.o_(this))
t=P.ds(H.nY(this))
s=P.ds(H.nU(this))
r=P.ds(H.nV(this))
q=P.ds(H.nX(this))
p=P.ds(H.nZ(this))
o=P.ny(H.nW(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.r.prototype={}
P.b1.prototype={
p:function(a,b){return new P.b1(C.f.p(this.a,b.ghd()))},
t:function(a,b){return new P.b1(C.f.t(this.a,b.ghd()))},
w:function(a,b){if(b==null)return!1
return b instanceof P.b1&&this.a===b.a},
gL:function(a){return C.f.gL(this.a)},
i:function(a){var u,t,s,r,q
u=new P.fU()
t=this.a
if(t<0)return"-"+new P.b1(0-t).i(0)
s=u.$1(C.f.a6(t,6e7)%60)
r=u.$1(C.f.a6(t,1e6)%60)
q=new P.fT().$1(t%1e6)
return""+C.f.a6(t,36e8)+":"+H.m(s)+":"+H.m(r)+"."+H.m(q)}}
P.fT.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:24}
P.fU.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:24}
P.bD.prototype={}
P.dU.prototype={
i:function(a){return"Throw of null."}}
P.aL.prototype={
gc1:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc0:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gc1()+t+s
if(!this.a)return r
q=this.gc0()
p=P.fZ(this.b)
return r+q+": "+p}}
P.c3.prototype={
gc1:function(){return"RangeError"},
gc0:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.m(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.m(u)
else if(s>u)t=": Not in range "+H.m(u)+".."+H.m(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.m(u)}return t}}
P.hd.prototype={
gc1:function(){return"RangeError"},
gc0:function(){var u,t
u=H.aj(this.b)
if(typeof u!=="number")return u.Z()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.m(t)},
gl:function(a){return this.f}}
P.j1.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iZ.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c5.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fG.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fZ(u)+"."}}
P.hX.prototype={
i:function(a){return"Out of Memory"},
$ibD:1}
P.e4.prototype={
i:function(a){return"Stack Overflow"},
$ibD:1}
P.fN.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ey.prototype={
i:function(a){return"Exception: "+this.a}}
P.h7.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.b.v(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.b.I(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.b.a1(r,m)
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
g=""}f=C.b.v(r,i,j)
return t+h+f+g+"\n"+C.b.u(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.m(s)+")"):t}}
P.bE.prototype={}
P.o.prototype={}
P.i.prototype={
bR:function(a,b){var u=H.at(this,"i",0)
return new H.cX(this,H.n(b,{func:1,ret:P.T,args:[u]}),[u])},
gl:function(a){var u,t
u=this.gW(this)
for(t=0;u.F();)++t
return t},
gaN:function(a){var u,t
u=this.gW(this)
if(!u.F())throw H.c(H.he())
t=u.gN(u)
if(u.F())throw H.c(H.nG())
return t},
M:function(a,b){var u,t,s
if(b<0)H.t(P.ae(b,0,null,"index",null))
for(u=this.gW(this),t=0;u.F();){s=u.gN(u)
if(b===t)return s;++t}throw H.c(P.a_(b,this,"index",null,t))},
i:function(a){return P.nE(this,"(",")")}}
P.b2.prototype={}
P.b.prototype={$ii:1}
P.E.prototype={}
P.L.prototype={
gL:function(a){return P.R.prototype.gL.call(this,this)},
i:function(a){return"null"}}
P.a5.prototype={}
P.R.prototype={constructor:P.R,$iR:1,
w:function(a,b){return this===b},
gL:function(a){return H.cG(this)},
i:function(a){return"Instance of '"+H.c1(this)+"'"},
toString:function(){return this.i(this)}}
P.aw.prototype={}
P.e.prototype={$im_:1}
P.al.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipv:1}
P.j6.prototype={
$2:function(a,b){var u,t,s,r
u=P.e
H.k(a,"$iE",[u,u],"$aE")
H.H(b)
t=J.de(b).eC(b,"=")
if(t===-1){if(b!=="")J.kU(a,P.li(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.b.v(b,0,t)
r=C.b.ar(b,t+1)
u=this.a
J.kU(a,P.li(s,0,s.length,u,!0),P.li(r,0,r.length,u,!0))}return a},
$S:44}
P.j3.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:43}
P.j4.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:42}
P.j5.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fo(C.b.v(this.b,a,b),null,16)
if(typeof u!=="number")return u.Z()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:41}
P.c8.prototype={
gf8:function(){return this.b},
gcP:function(a){var u=this.c
if(u==null)return""
if(C.b.a5(u,"["))return C.b.v(u,1,u.length-1)
return u},
gbM:function(a){var u=this.d
if(u==null)return P.mr(this.a)
return u},
gcZ:function(a){var u=this.f
return u==null?"":u},
gex:function(){var u=this.r
return u==null?"":u},
d3:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.k(h,"$iE",[P.e,null],"$aE")
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
if(s&&!C.b.a5(d,"/"))d="/"+d
g=P.lh(g,0,0,h)
return new P.c8(i,j,c,f,d,g,this.r)},
eV:function(a,b){return this.d3(a,null,null,null,null,null,null,b,null,null)},
gd_:function(){var u,t
if(this.Q==null){u=this.f
t=P.e
this.siw(new P.ej(P.mg(u==null?"":u,C.m),[t,t]))}return this.Q},
gey:function(){return this.c!=null},
geB:function(){return this.f!=null},
gez:function(){return this.r!=null},
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
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!!J.Z(b).$ilc)if(this.a==b.gbV())if(this.c!=null===b.gey())if(this.b==b.gf8())if(this.gcP(this)==b.gcP(b))if(this.gbM(this)==b.gbM(b))if(this.e===b.geP(b)){u=this.f
t=u==null
if(!t===b.geB()){if(t)u=""
if(u===b.gcZ(b)){u=this.r
t=u==null
if(!t===b.gez()){if(t)u=""
u=u===b.gex()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gL:function(a){var u=this.z
if(u==null){u=C.b.gL(this.i(0))
this.z=u}return u},
siw:function(a){var u=P.e
this.Q=H.k(a,"$iE",[u,u],"$aE")},
$ilc:1,
gbV:function(){return this.a},
geP:function(a){return this.e}}
P.k9.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.p()
throw H.c(P.a7("Invalid port",this.a,u+1))},
$S:40}
P.ka.prototype={
$1:function(a){return P.f9(C.a8,a,C.m,!1)},
$S:17}
P.kc.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.m(P.f9(C.v,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.m(P.f9(C.v,b,C.m,!0))}},
$S:14}
P.kb.prototype={
$2:function(a,b){var u,t
H.H(a)
if(b==null||typeof b==="string")this.a.$2(a,H.H(b))
else for(u=J.bx(H.mP(b,"$ii")),t=this.a;u.F();)t.$2(a,H.H(u.gN(u)))},
$S:38}
P.j2.prototype={
gf6:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.h(u,0)
t=this.a
u=u[0]+1
s=C.b.eD(t,"?",u)
r=t.length
if(s>=0){q=P.d9(t,s+1,r,C.t,!1)
r=s}else q=null
u=new P.jx(this,"data",null,null,null,P.d9(t,u,r,C.K,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.h(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.kl.prototype={
$1:function(a){return new Uint8Array(96)},
$S:36}
P.kk.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.h(u,a)
u=u[a]
J.nk(u,0,96,b)
return u},
$S:35}
P.km.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.b.I(b,t)^96
if(s>=a.length)return H.h(a,s)
a[s]=c}}}
P.kn.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.b.I(b,0),t=C.b.I(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.h(a,s)
a[s]=c}}}
P.jY.prototype={
gey:function(){return this.c>0},
geA:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.F(t)
t=u+1<t
u=t}else u=!1
return u},
geB:function(){var u=this.f
if(typeof u!=="number")return u.Z()
return u<this.r},
gez:function(){return this.r<this.a.length},
gdG:function(){return this.b===4&&C.b.a5(this.a,"http")},
gdH:function(){return this.b===5&&C.b.a5(this.a,"https")},
gbV:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdG()){this.x="http"
u="http"}else if(this.gdH()){this.x="https"
u="https"}else if(u===4&&C.b.a5(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.b.a5(this.a,"package")){this.x="package"
u="package"}else{u=C.b.v(this.a,0,u)
this.x=u}return u},
gf8:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.b.v(this.a,t,u-1):""},
gcP:function(a){var u=this.c
return u>0?C.b.v(this.a,u,this.d):""},
gbM:function(a){var u
if(this.geA()){u=this.d
if(typeof u!=="number")return u.p()
return P.fo(C.b.v(this.a,u+1,this.e),null,null)}if(this.gdG())return 80
if(this.gdH())return 443
return 0},
geP:function(a){return C.b.v(this.a,this.e,this.f)},
gcZ:function(a){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.Z()
return u<t?C.b.v(this.a,u+1,t):""},
gex:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.b.ar(t,u+1):""},
gd_:function(){var u=this.f
if(typeof u!=="number")return u.Z()
if(u>=this.r)return C.a9
u=P.e
return new P.ej(P.mg(this.gcZ(this),C.m),[u,u])},
d3:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.k(h,"$iE",[P.e,null],"$aE")
i=this.gbV()
u=i==="file"
t=this.c
j=t>0?C.b.v(this.a,this.b+3,t):""
f=this.geA()?this.gbM(this):null
t=this.c
if(t>0)c=C.b.v(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.b.v(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.b.a5(d,"/"))d="/"+d
g=P.lh(g,0,0,h)
s=this.r
if(s<t.length)b=C.b.ar(t,s+1)
return new P.c8(i,j,c,f,d,g,b)},
eV:function(a,b){return this.d3(a,null,null,null,null,null,null,b,null,null)},
gL:function(a){var u=this.y
if(u==null){u=C.b.gL(this.a)
this.y=u}return u},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.Z(b).$ilc&&this.a===b.i(0)},
i:function(a){return this.a},
$ilc:1}
P.jx.prototype={}
W.z.prototype={}
W.fr.prototype={
gl:function(a){return a.length}}
W.dj.prototype={
i:function(a){return String(a)},
$idj:1}
W.fs.prototype={
i:function(a){return String(a)}}
W.ck.prototype={$ick:1}
W.bR.prototype={$ibR:1}
W.by.prototype={$iby:1}
W.bS.prototype={
fe:function(a,b,c){var u=this.hl(a,b,P.oU(c,null))
return u},
hl:function(a,b,c){return a.getContext(b,c)},
$ibS:1}
W.bz.prototype={
gl:function(a){return a.length}}
W.co.prototype={$ico:1}
W.fJ.prototype={
gl:function(a){return a.length}}
W.Y.prototype={$iY:1}
W.cp.prototype={
gl:function(a){return a.length}}
W.fK.prototype={}
W.b_.prototype={}
W.b0.prototype={}
W.fL.prototype={
gl:function(a){return a.length}}
W.fM.prototype={
gl:function(a){return a.length}}
W.fP.prototype={
gl:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.cq.prototype={
jB:function(a,b){return a.adoptNode(b)},
d8:function(a,b){return a.getElementById(b)}}
W.fQ.prototype={
i:function(a){return String(a)}}
W.dt.prototype={
jU:function(a,b){return a.createHTMLDocument(b)}}
W.du.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.k(c,"$iab",[P.a5],"$aab")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[[P.ab,P.a5]]},
$ay:function(){return[[P.ab,P.a5]]},
$ii:1,
$ai:function(){return[[P.ab,P.a5]]},
$ib:1,
$ab:function(){return[[P.ab,P.a5]]},
$aD:function(){return[[P.ab,P.a5]]}}
W.dv.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gaM(a))+" x "+H.m(this.gaJ(a))},
w:function(a,b){var u
if(b==null)return!1
if(!H.dd(b,"$iab",[P.a5],"$aab"))return!1
u=J.ac(b)
return a.left===u.gbL(b)&&a.top===u.gbP(b)&&this.gaM(a)===u.gaM(b)&&this.gaJ(a)===u.gaJ(b)},
gL:function(a){return W.mp(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(this.gaM(a)),C.e.gL(this.gaJ(a)))},
ge2:function(a){return a.bottom},
gaJ:function(a){return a.height},
gbL:function(a){return a.left},
gbO:function(a){return a.right},
gbP:function(a){return a.top},
gaM:function(a){return a.width},
$iab:1,
$aab:function(){return[P.a5]}}
W.fR.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.H(c)
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[P.e]},
$ay:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aD:function(){return[P.e]}}
W.fS.prototype={
gl:function(a){return a.length}}
W.jv.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.f(u[b],"$iV")},
n:function(a,b,c){var u
H.f(c,"$iV")
u=this.b
if(b<0||b>=u.length)return H.h(u,b)
J.kV(this.a,c,u[b])},
h:function(a,b){J.lC(this.a,b)
return b},
gW:function(a){var u=this.kX(this)
return new J.ay(u,u.length,0,[H.u(u,0)])},
$ay:function(){return[W.V]},
$ai:function(){return[W.V]},
$ab:function(){return[W.V]}}
W.V.prototype={
gjF:function(a){return new W.jy(a)},
gcC:function(a){return new W.jv(a,a.children)},
ge4:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.Z()
if(s<0)s=-s*0
if(typeof r!=="number")return r.Z()
if(r<0)r=-r*0
return new P.ab(u,t,s,r,[P.a5])},
i:function(a){return a.localName},
ae:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lP
if(u==null){u=H.d([],[W.aB])
t=new W.dT(u)
C.a.h(u,W.mo(null))
C.a.h(u,W.mq())
$.lP=t
d=t}else d=u
u=$.lO
if(u==null){u=new W.fa(d)
$.lO=u
c=u}else{u.a=d
c=u}}if($.bj==null){u=document
t=u.implementation
t=(t&&C.T).jU(t,"")
$.bj=t
$.l1=t.createRange()
t=$.bj
t.toString
t=t.createElement("base")
H.f(t,"$ick")
t.href=u.baseURI
u=$.bj.head;(u&&C.V).E(u,t)}u=$.bj
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.f(t,"$iby")}u=$.bj
if(!!this.$iby)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.bj.body;(u&&C.p).E(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.a0(C.a6,a.tagName)){u=$.l1;(u&&C.M).fl(u,s)
u=$.l1
r=(u&&C.M).jS(u,b)}else{s.innerHTML=b
r=$.bj.createDocumentFragment()
for(u=J.ac(r);t=s.firstChild,t!=null;)u.E(r,t)}u=$.bj.body
if(s==null?u!=null:s!==u)J.lF(s)
c.da(r)
C.z.jB(document,r)
return r},
jT:function(a,b,c){return this.ae(a,b,c,null)},
fo:function(a,b,c,d){a.textContent=null
this.E(a,this.ae(a,b,c,d))},
fn:function(a,b){return this.fo(a,b,null,null)},
b0:function(a,b){return a.getAttribute(b)},
iy:function(a,b){return a.removeAttribute(b)},
fm:function(a,b,c){return a.setAttribute(b,c)},
$iV:1,
gkV:function(a){return a.tagName}}
W.fW.prototype={
$1:function(a){return!!J.Z(H.f(a,"$iG")).$iV},
$S:22}
W.p.prototype={$ip:1}
W.j.prototype={
jv:function(a,b,c,d){H.n(c,{func:1,args:[W.p]})
if(c!=null)this.h_(a,b,c,!1)},
h_:function(a,b,c,d){return a.addEventListener(b,H.cc(H.n(c,{func:1,args:[W.p]}),1),!1)},
$ij:1}
W.aF.prototype={$iaF:1}
W.ct.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaF")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aF]},
$ay:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$ict:1,
$aD:function(){return[W.aF]}}
W.h2.prototype={
gl:function(a){return a.length}}
W.h6.prototype={
gl:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.dz.prototype={}
W.dA.prototype={
iE:function(a,b,c,d){return a.replaceState(b,c,d)},
gl:function(a){return a.length}}
W.bX.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iG")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.G]},
$ay:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ibX:1,
$aD:function(){return[W.G]}}
W.dB.prototype={}
W.cw.prototype={$icw:1}
W.cx.prototype={$icx:1}
W.b3.prototype={$ib3:1}
W.dG.prototype={}
W.dJ.prototype={
i:function(a){return String(a)},
$idJ:1}
W.hF.prototype={
gl:function(a){return a.length}}
W.hG.prototype={
j:function(a,b){return P.bq(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.O(a,new W.hH(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.I("Not supported"))},
$aag:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
W.hH.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.hI.prototype={
j:function(a,b){return P.bq(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.O(a,new W.hJ(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.I("Not supported"))},
$aag:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
W.hJ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.aQ.prototype={$iaQ:1}
W.hK.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaQ")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aQ]},
$ay:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aD:function(){return[W.aQ]}}
W.ah.prototype={$iah:1}
W.as.prototype={
gaN:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.c(P.m7("No elements"))
if(t>1)throw H.c(P.m7("More than one element"))
return u.firstChild},
au:function(a,b){var u,t,s,r,q
H.k(b,"$ii",[W.G],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.ac(t),q=0;q<s;++q)r.E(t,u.firstChild)
return},
n:function(a,b,c){var u,t
H.f(c,"$iG")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.h(t,b)
J.kV(u,c,t[b])},
gW:function(a){var u=this.a.childNodes
return new W.dx(u,u.length,-1,[H.bO(C.aa,u,"D",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$ay:function(){return[W.G]},
$ai:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
kL:function(a){var u=a.parentNode
if(u!=null)J.fp(u,a)},
kP:function(a,b){var u,t
try{u=a.parentNode
J.kV(u,b,a)}catch(t){H.ak(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.ft(a):u},
E:function(a,b){return a.appendChild(H.f(b,"$iG"))},
iz:function(a,b){return a.removeChild(b)},
iD:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.cE.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iG")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.G]},
$ay:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aD:function(){return[W.G]}}
W.aR.prototype={$iaR:1,
gl:function(a){return a.length}}
W.i_.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaR")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aR]},
$ay:function(){return[W.aR]},
$ii:1,
$ai:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aD:function(){return[W.aR]}}
W.dY.prototype={
jS:function(a,b){return a.createContextualFragment(b)},
fl:function(a,b){return a.selectNodeContents(b)}}
W.ia.prototype={
j:function(a,b){return P.bq(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.O(a,new W.ib(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.I("Not supported"))},
$aag:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
W.ib.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.id.prototype={
gl:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.ip.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaS")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aS]},
$ay:function(){return[W.aS]},
$ii:1,
$ai:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aD:function(){return[W.aS]}}
W.aT.prototype={$iaT:1}
W.iq.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaT")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aT]},
$ay:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aD:function(){return[W.aT]}}
W.aU.prototype={$iaU:1,
gl:function(a){return a.length}}
W.it.prototype={
j:function(a,b){return this.dD(a,H.H(b))},
n:function(a,b,c){this.iL(a,b,c)},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=this.hp(a,u)
if(t==null)return
b.$2(t,this.dD(a,t))}},
ga7:function(a){var u=H.d([],[P.e])
this.O(a,new W.iu(u))
return u},
gl:function(a){return a.length},
dD:function(a,b){return a.getItem(b)},
hp:function(a,b){return a.key(b)},
iL:function(a,b,c){return a.setItem(b,c)},
$aag:function(){return[P.e,P.e]},
$iE:1,
$aE:function(){return[P.e,P.e]}}
W.iu.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:14}
W.aG.prototype={$iaG:1}
W.b9.prototype={$ib9:1}
W.e6.prototype={
ae:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bW(a,b,c,d)
u=W.nz("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.as(t).au(0,new W.as(u))
return t},
hn:function(a,b){return a.insertRow(b)}}
W.e7.prototype={
ae:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bW(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ae(u.createElement("table"),b,c,d)
u.toString
u=new W.as(u)
s=u.gaN(u)
s.toString
u=new W.as(s)
r=u.gaN(u)
t.toString
r.toString
new W.as(t).au(0,new W.as(r))
return t},
dF:function(a,b){return a.insertCell(b)}}
W.iA.prototype={
ae:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bW(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ae(u.createElement("table"),b,c,d)
u.toString
u=new W.as(u)
s=u.gaN(u)
t.toString
s.toString
new W.as(t).au(0,new W.as(s))
return t}}
W.cL.prototype={$icL:1}
W.aV.prototype={$iaV:1}
W.aH.prototype={$iaH:1}
W.iC.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaH")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aH]},
$ay:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aD:function(){return[W.aH]}}
W.iD.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaV")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aV]},
$ay:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aD:function(){return[W.aV]}}
W.iG.prototype={
gl:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.aX.prototype={$iaX:1}
W.iK.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaW")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aW]},
$ay:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aD:function(){return[W.aW]}}
W.iL.prototype={
gl:function(a){return a.length}}
W.bK.prototype={}
W.j7.prototype={
i:function(a){return String(a)}}
W.jn.prototype={
gl:function(a){return a.length}}
W.be.prototype={
gk_:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.I("deltaY is not supported"))},
gjZ:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.I("deltaX is not supported"))},
$ibe:1}
W.cY.prototype={
iF:function(a,b){return a.requestAnimationFrame(H.cc(H.n(b,{func:1,ret:-1,args:[P.a5]}),1))},
he:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cZ.prototype={$icZ:1}
W.jw.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iY")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.Y]},
$ay:function(){return[W.Y]},
$ii:1,
$ai:function(){return[W.Y]},
$ib:1,
$ab:function(){return[W.Y]},
$aD:function(){return[W.Y]}}
W.et.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
w:function(a,b){var u
if(b==null)return!1
if(!H.dd(b,"$iab",[P.a5],"$aab"))return!1
u=J.ac(b)
return a.left===u.gbL(b)&&a.top===u.gbP(b)&&a.width===u.gaM(b)&&a.height===u.gaJ(b)},
gL:function(a){return W.mp(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(a.width),C.e.gL(a.height))},
gaJ:function(a){return a.height},
gaM:function(a){return a.width}}
W.jL.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaN")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aN]},
$ay:function(){return[W.aN]},
$ii:1,
$ai:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aD:function(){return[W.aN]}}
W.eL.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iG")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.G]},
$ay:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aD:function(){return[W.G]}}
W.jZ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaU")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aU]},
$ay:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aD:function(){return[W.aU]}}
W.k2.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaG")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aG]},
$ay:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aD:function(){return[W.aG]}}
W.ju.prototype={
O:function(a,b){var u,t,s,r,q,p
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.ga7(this),t=u.length,s=this.a,r=J.ac(s),q=0;q<u.length;u.length===t||(0,H.C)(u),++q){p=u[q]
b.$2(p,r.b0(s,p))}},
ga7:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.d([],[P.e])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.h(u,r)
q=H.f(u[r],"$icZ")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aag:function(){return[P.e,P.e]},
$aE:function(){return[P.e,P.e]}}
W.jy.prototype={
j:function(a,b){return J.kW(this.a,H.H(b))},
n:function(a,b,c){J.no(this.a,b,c)},
gl:function(a){return this.ga7(this).length}}
W.jz.prototype={}
W.lf.prototype={}
W.jA.prototype={}
W.jB.prototype={
$1:function(a){return this.a.$1(H.f(a,"$ip"))},
$S:34}
W.bM.prototype={
fK:function(a){var u,t
u=$.lz()
if(u.gko(u)){for(t=0;t<262;++t)u.n(0,C.a5[t],W.p3())
for(t=0;t<12;++t)u.n(0,C.B[t],W.p4())}},
aW:function(a){return $.nc().a0(0,W.cr(a))},
av:function(a,b,c){var u,t,s
u=W.cr(a)
t=$.lz()
s=t.j(0,H.m(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.ln(s.$4(a,b,c,this))},
$iaB:1}
W.D.prototype={
gW:function(a){return new W.dx(a,this.gl(a),-1,[H.bO(this,a,"D",0)])}}
W.dT.prototype={
aW:function(a){return C.a.dZ(this.a,new W.hS(a))},
av:function(a,b,c){return C.a.dZ(this.a,new W.hR(a,b,c))},
$iaB:1}
W.hS.prototype={
$1:function(a){return H.f(a,"$iaB").aW(this.a)},
$S:25}
W.hR.prototype={
$1:function(a){return H.f(a,"$iaB").av(this.a,this.b,this.c)},
$S:25}
W.eT.prototype={
fV:function(a,b,c,d){var u,t,s
this.a.au(0,c)
u=b.bR(0,new W.jW())
t=b.bR(0,new W.jX())
this.b.au(0,u)
s=this.c
s.au(0,C.H)
s.au(0,t)},
aW:function(a){return this.a.a0(0,W.cr(a))},
av:function(a,b,c){var u,t
u=W.cr(a)
t=this.c
if(t.a0(0,H.m(u)+"::"+b))return this.d.jC(c)
else if(t.a0(0,"*::"+b))return this.d.jC(c)
else{t=this.b
if(t.a0(0,H.m(u)+"::"+b))return!0
else if(t.a0(0,"*::"+b))return!0
else if(t.a0(0,H.m(u)+"::*"))return!0
else if(t.a0(0,"*::*"))return!0}return!1},
$iaB:1}
W.jW.prototype={
$1:function(a){return!C.a.a0(C.B,H.H(a))},
$S:26}
W.jX.prototype={
$1:function(a){return C.a.a0(C.B,H.H(a))},
$S:26}
W.k4.prototype={
av:function(a,b,c){if(this.fA(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.kW(a,"template")==="")return this.e.a0(0,b)
return!1}}
W.k5.prototype={
$1:function(a){return"TEMPLATE::"+H.m(H.H(a))},
$S:17}
W.k3.prototype={
aW:function(a){var u=J.Z(a)
if(!!u.$icH)return!1
u=!!u.$iq
if(u&&W.cr(a)==="foreignObject")return!1
if(u)return!0
return!1},
av:function(a,b,c){if(b==="is"||C.b.a5(b,"on"))return!1
return this.aW(a)},
$iaB:1}
W.dx.prototype={
F:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdE(J.lB(this.a,u))
this.c=u
return!0}this.sdE(null)
this.c=t
return!1},
gN:function(a){return this.d},
sdE:function(a){this.d=H.A(a,H.u(this,0))},
$ib2:1}
W.aB.prototype={}
W.jU.prototype={$ipH:1}
W.fa.prototype={
da:function(a){new W.kg(this).$2(a,null)},
b4:function(a,b){if(b==null)J.lF(a)
else J.fp(b,a)},
iJ:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.nl(a)
s=J.kW(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ak(o)}q="element unprintable"
try{q=J.au(a)}catch(o){H.ak(o)}try{p=W.cr(a)
this.iI(H.f(a,"$iV"),b,u,q,p,H.f(t,"$iE"),H.H(s))}catch(o){if(H.ak(o) instanceof P.aL)throw o
else{this.b4(a,b)
window
n="Removing corrupted element "+H.m(q)
if(typeof console!="undefined")window.console.warn(n)}}},
iI:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.b4(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aW(a)){this.b4(a,b)
window
u="Removing disallowed element <"+H.m(e)+"> from "+H.m(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.av(a,"is",g)){this.b4(a,b)
window
u="Removing disallowed type extension <"+H.m(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga7(f)
t=H.d(u.slice(0),[H.u(u,0)])
for(s=f.ga7(f).length-1,u=f.a,r=J.ac(u);s>=0;--s){if(s>=t.length)return H.h(t,s)
q=t[s]
if(!this.a.av(a,J.nq(q),r.b0(u,q))){window
p="Removing disallowed attribute <"+H.m(e)+" "+q+'="'+H.m(r.b0(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.b0(u,q)
r.iy(u,q)}}if(!!J.Z(a).$icL)this.da(a.content)},
$ips:1}
W.kg.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.iJ(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.b4(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ak(r)
q=H.f(u,"$iG")
if(s){p=q.parentNode
if(p!=null)J.fp(p,q)}else J.fp(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.f(t,"$iG")}},
$S:45}
W.es.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.d4.prototype={}
W.d5.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eZ.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.d6.prototype={}
W.d7.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
P.k_.prototype={
eu:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
d6:function(a){var u,t,s,r,q
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.Z(a)
if(!!t.$ian)return new Date(a.a)
if(!!t.$io4)throw H.c(P.j_("structured clone of RegExp"))
if(!!t.$iaF)return a
if(!!t.$ibR)return a
if(!!t.$ict)return a
if(!!t.$icw)return a
if(!!t.$icB||!!t.$ibH)return a
if(!!t.$iE){s=this.eu(a)
r=this.b
if(s>=r.length)return H.h(r,s)
q=r[s]
u.a=q
if(q!=null)return q
q={}
u.a=q
C.a.n(r,s,q)
t.O(a,new P.k1(u,this))
return u.a}if(!!t.$ib){s=this.eu(a)
u=this.b
if(s>=u.length)return H.h(u,s)
q=u[s]
if(q!=null)return q
return this.jR(a,s)}throw H.c(P.j_("structured clone of other type"))},
jR:function(a,b){var u,t,s,r
u=J.cf(a)
t=u.gl(a)
s=new Array(t)
C.a.n(this.b,b,s)
for(r=0;r<t;++r)C.a.n(s,r,this.d6(u.j(a,r)))
return s}}
P.k1.prototype={
$2:function(a,b){this.a.a[a]=this.b.d6(b)},
$S:7}
P.kr.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.k0.prototype={}
P.h3.prototype={
gbq:function(){var u,t,s
u=this.b
t=H.at(u,"y",0)
s=W.V
return new H.hw(new H.cX(u,H.n(new P.h4(),{func:1,ret:P.T,args:[t]}),[t]),H.n(new P.h5(),{func:1,ret:s,args:[t]}),[t,s])},
n:function(a,b,c){var u
H.f(c,"$iV")
u=this.gbq()
J.nn(u.b.$1(J.fq(u.a,b)),c)},
h:function(a,b){J.lC(this.b.a,b)},
gl:function(a){return J.aD(this.gbq().a)},
j:function(a,b){var u=this.gbq()
return u.b.$1(J.fq(u.a,b))},
gW:function(a){var u=P.lT(this.gbq(),!1,W.V)
return new J.ay(u,u.length,0,[H.u(u,0)])},
$ay:function(){return[W.V]},
$ai:function(){return[W.V]},
$ab:function(){return[W.V]}}
P.h4.prototype={
$1:function(a){return!!J.Z(H.f(a,"$iG")).$iV},
$S:22}
P.h5.prototype={
$1:function(a){return H.l(H.f(a,"$iG"),"$iV")},
$S:33}
P.jP.prototype={
gbO:function(a){var u=this.a
if(typeof u!=="number")return u.p()
return H.A(u+this.c,H.u(this,0))},
ge2:function(a){var u=this.b
if(typeof u!=="number")return u.p()
return H.A(u+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.m(this.a)+", "+H.m(this.b)+") "+this.c+" x "+this.d},
w:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.dd(b,"$iab",[P.a5],"$aab")){u=this.a
t=J.ac(b)
if(u==t.gbL(b)){s=this.b
if(s==t.gbP(b)){if(typeof u!=="number")return u.p()
r=H.u(this,0)
if(H.A(u+this.c,r)===t.gbO(b)){if(typeof s!=="number")return s.p()
u=H.A(s+this.d,r)===t.ge2(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gL:function(a){var u,t,s,r,q
u=this.a
t=J.di(u)
s=this.b
r=J.di(s)
if(typeof u!=="number")return u.p()
q=H.u(this,0)
u=C.f.gL(H.A(u+this.c,q))
if(typeof s!=="number")return s.p()
q=C.f.gL(H.A(s+this.d,q))
return P.oq(P.jN(P.jN(P.jN(P.jN(0,t),r),u),q))}}
P.ab.prototype={
gbL:function(a){return this.a},
gbP:function(a){return this.b},
gaM:function(a){return this.c},
gaJ:function(a){return this.d}}
P.b4.prototype={$ib4:1}
P.hl.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return this.aC(a,b)},
n:function(a,b,c){H.f(c,"$ib4")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
aC:function(a,b){return a.getItem(b)},
$ay:function(){return[P.b4]},
$ii:1,
$ai:function(){return[P.b4]},
$ib:1,
$ab:function(){return[P.b4]},
$aD:function(){return[P.b4]}}
P.b7.prototype={$ib7:1}
P.hV.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return this.aC(a,b)},
n:function(a,b,c){H.f(c,"$ib7")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
aC:function(a,b){return a.getItem(b)},
$ay:function(){return[P.b7]},
$ii:1,
$ai:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$aD:function(){return[P.b7]}}
P.i1.prototype={
gl:function(a){return a.length}}
P.cH.prototype={$icH:1}
P.iz.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return this.aC(a,b)},
n:function(a,b,c){H.H(c)
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
aC:function(a,b){return a.getItem(b)},
$ay:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aD:function(){return[P.e]}}
P.q.prototype={
gcC:function(a){return new P.h3(a,new W.as(a))},
ae:function(a,b,c,d){var u,t,s,r,q,p
u=H.d([],[W.aB])
C.a.h(u,W.mo(null))
C.a.h(u,W.mq())
C.a.h(u,new W.k3())
c=new W.fa(new W.dT(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).jT(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.as(r)
p=u.gaN(u)
for(u=J.ac(q);s=p.firstChild,s!=null;)u.E(q,s)
return q},
$iq:1}
P.bb.prototype={$ibb:1}
P.iM.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return this.aC(a,b)},
n:function(a,b,c){H.f(c,"$ibb")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
aC:function(a,b){return a.getItem(b)},
$ay:function(){return[P.bb]},
$ii:1,
$ai:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$aD:function(){return[P.bb]}}
P.eD.prototype={}
P.eE.prototype={}
P.eO.prototype={}
P.eP.prototype={}
P.f_.prototype={}
P.f0.prototype={}
P.f6.prototype={}
P.f7.prototype={}
P.S.prototype={$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
P.fv.prototype={
gl:function(a){return a.length}}
P.fw.prototype={
j:function(a,b){return P.bq(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.O(a,new P.fx(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.I("Not supported"))},
$aag:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
P.fx.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
P.fy.prototype={
gl:function(a){return a.length}}
P.bQ.prototype={}
P.hW.prototype={
gl:function(a){return a.length}}
P.er.prototype={}
P.dl.prototype={$idl:1}
P.dy.prototype={$idy:1}
P.dX.prototype={$idX:1}
P.c4.prototype={
e_:function(a,b,c){return a.attachShader(b,c)},
aw:function(a,b,c){return a.bindBuffer(b,c)},
jH:function(a,b,c){return a.bindFramebuffer(b,c)},
jI:function(a,b,c){return a.blendFunc(b,c)},
e3:function(a,b,c,d){return a.bufferData(b,c,d)},
jL:function(a,b){return a.clear(b)},
jM:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jN:function(a,b){return a.clearDepth(b)},
jP:function(a,b){return a.compileShader(b)},
jV:function(a,b){return a.createShader(b)},
jX:function(a,b){return a.deleteProgram(b)},
jY:function(a,b){return a.deleteShader(b)},
k0:function(a,b){return a.depthFunc(b)},
k5:function(a,b){return a.disable(b)},
e5:function(a,b){return a.disableVertexAttribArray(b)},
k7:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cH:function(a,b){return a.enable(b)},
e7:function(a,b){return a.enableVertexAttribArray(b)},
fa:function(a,b,c){return a.getActiveAttrib(b,c)},
fb:function(a,b,c){return a.getActiveUniform(b,c)},
fc:function(a,b,c){return a.getAttribLocation(b,c)},
d9:function(a,b){return a.getParameter(b)},
ff:function(a,b){return a.getProgramInfoLog(b)},
bT:function(a,b,c){return a.getProgramParameter(b,c)},
fg:function(a,b){return a.getShaderInfoLog(b)},
fh:function(a,b,c){return a.getShaderParameter(b,c)},
fi:function(a,b,c){return a.getUniformLocation(b,c)},
kq:function(a,b){return a.linkProgram(b)},
fq:function(a,b,c){return a.shaderSource(b,c)},
U:function(a,b,c){return a.uniform1f(b,c)},
X:function(a,b,c){return a.uniform1i(b,c)},
A:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
f4:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
f5:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
f7:function(a,b){return a.useProgram(b)},
l_:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
l0:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ic4:1}
P.e1.prototype={$ie1:1}
P.eh.prototype={$ieh:1}
P.ir.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return P.bq(this.ho(a,b))},
n:function(a,b,c){H.f(c,"$iE")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
ho:function(a,b){return a.item(b)},
$ay:function(){return[[P.E,,,]]},
$ii:1,
$ai:function(){return[[P.E,,,]]},
$ib:1,
$ab:function(){return[[P.E,,,]]},
$aD:function(){return[[P.E,,,]]}}
P.eW.prototype={}
P.eX.prototype={}
O.a6.prototype={
bY:function(a){this.sht(H.d([],[a]))
this.sdL(null)
this.sdI(null)
this.sdM(null)},
dc:function(a,b,c){var u=H.at(this,"a6",0)
H.n(b,{func:1,ret:P.T,args:[[P.i,u]]})
u={func:1,ret:-1,args:[P.o,[P.i,u]]}
H.n(a,u)
H.n(c,u)
this.sdL(b)
this.sdI(a)
this.sdM(c)},
bm:function(a,b){return this.dc(a,null,b)},
ig:function(a){var u
H.k(a,"$ii",[H.at(this,"a6",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fH:function(a,b){var u
H.k(b,"$ii",[H.at(this,"a6",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gW:function(a){var u=this.a
return new J.ay(u,u.length,0,[H.u(u,0)])},
M:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.at(this,"a6",0)
H.A(b,u)
u=[u]
if(this.ig(H.d([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.fH(s,H.d([b],u))}},
sht:function(a){this.a=H.k(a,"$ib",[H.at(this,"a6",0)],"$ab")},
sdL:function(a){this.b=H.n(a,{func:1,ret:P.T,args:[[P.i,H.at(this,"a6",0)]]})},
sdI:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.at(this,"a6",0)]]})},
sdM:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.at(this,"a6",0)]]})},
$ii:1}
O.cz.prototype={
gl:function(a){return this.a.length},
gD:function(){var u=this.b
if(u==null){u=D.W()
this.b=u}return u},
fI:function(a){var u=this.b
if(u!=null)u.J(a)},
aO:function(){return this.fI(null)},
ga2:function(a){var u=this.a
if(u.length>0)return C.a.gaz(u)
else return V.dP()},
eS:function(a){var u=this.a
if(a==null)C.a.h(u,V.dP())
else C.a.h(u,a)
this.aO()},
cY:function(){var u=this.a
if(u.length>0){u.pop()
this.aO()}},
sc6:function(a){this.a=H.k(a,"$ib",[V.ap],"$ab")}}
E.fB.prototype={}
E.ao.prototype={
saj:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gD().R(0,this.geM())
t=this.c
if(t!=null)t.gD().h(0,this.geM())
s=new D.N("shape",u,this.c,this,[F.e2])
s.b=!0
this.ao(s)}},
sbe:function(a){var u,t
if(!J.U(this.r,a)){u=this.r
if(u!=null)u.gD().R(0,this.geK())
if(a!=null)a.gD().h(0,this.geK())
this.r=a
t=new D.N("mover",u,a,this,[U.ad])
t.b=!0
this.ao(t)}},
aA:function(a,b){var u,t,s,r
u=this.r
t=u!=null?u.a:null
if(!J.U(t,this.x)){s=this.x
this.x=t
r=new D.N("matrix",s,t,this,[V.ap])
r.b=!0
this.ao(r)}for(u=this.y.a,u=new J.ay(u,u.length,0,[H.u(u,0)]);u.F();)u.d.aA(0,b)},
aZ:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.ga2(u))
else C.a.h(u.a,t.u(0,u.ga2(u)))
u.aO()
a.eT(this.f)
u=a.dy
s=(u&&C.a).gaz(u)
if(s!=null&&this.d!=null)s.kO(a,this)
for(u=this.y.a,u=new J.ay(u,u.length,0,[H.u(u,0)]);u.F();)u.d.aZ(a)
a.eR()
a.dx.cY()},
gD:function(){var u=this.z
if(u==null){u=D.W()
this.z=u}return u},
ao:function(a){var u=this.z
if(u!=null)u.J(a)},
a4:function(){return this.ao(null)},
eN:function(a){H.f(a,"$iB")
this.e=null
this.ao(a)},
kB:function(){return this.eN(null)},
eL:function(a){this.ao(H.f(a,"$iB"))},
kA:function(){return this.eL(null)},
eJ:function(a){this.ao(H.f(a,"$iB"))},
kx:function(){return this.eJ(null)},
kw:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ii",[E.ao],"$ai")
for(u=b.length,t=this.geI(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bV()
o.sak(null)
o.saT(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a4()},
kz:function(a,b){var u,t
H.k(b,"$ii",[E.ao],"$ai")
for(u=b.gW(b),t=this.geI();u.F();)u.gN(u).gD().R(0,t)
this.a4()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfJ:function(a,b){this.y=H.k(b,"$ia6",[E.ao],"$aa6")},
$ibo:1}
E.i6.prototype={
fD:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.an(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cz()
t=[V.ap]
u.sc6(H.d([],t))
u.b=null
u.gD().h(0,new E.i7(this))
this.cy=u
u=new O.cz()
u.sc6(H.d([],t))
u.b=null
u.gD().h(0,new E.i8(this))
this.db=u
u=new O.cz()
u.sc6(H.d([],t))
u.b=null
u.gD().h(0,new E.i9(this))
this.dx=u
this.siV(H.d([],[O.c6]))
u=this.dy;(u&&C.a).h(u,null)
this.siR(new H.aP([P.e,A.cI]))},
gkK:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.ga2(u)
t=this.db
t=u.u(0,t.ga2(t))
this.z=t
u=t}return u},
eT:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaz(u):a;(u&&C.a).h(u,t)},
eR:function(){var u=this.dy
if(u.length>1)u.pop()},
siV:function(a){this.dy=H.k(a,"$ib",[O.c6],"$ab")},
siR:function(a){this.fr=H.k(a,"$iE",[P.e,A.cI],"$aE")}}
E.i7.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.z=null
u.ch=null},
$S:5}
E.i8.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:5}
E.i9.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.ch=null
u.cx=null},
$S:5}
E.ed.prototype={
dh:function(a){H.f(a,"$iB")
this.eW()},
dg:function(){return this.dh(null)},
gkj:function(){var u,t,s
u=Date.now()
t=C.f.a6(P.lN(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.an(u,!1)
return s/t},
dP:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.u()
if(typeof u!=="number")return H.F(u)
s=C.e.ev(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.u()
r=C.e.ev(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.ma(C.y,this.gkQ())}},
eW:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iF(this),{func:1,ret:-1,args:[P.a5]})
C.O.he(u)
C.O.iF(u,W.mE(t,P.a5))}},
kN:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dP()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.an(r,!1)
s.y=P.lN(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aO()
r=s.db
C.a.sl(r.a,0)
r.aO()
r=s.dx
C.a.sl(r.a,0)
r.aO()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aZ(this.e)}s=this.z
if(s!=null)s.J(null)}catch(q){u=H.ak(q)
t=H.cg(q)
P.lu("Error: "+H.m(u))
P.lu("Stack: "+H.m(t))
throw H.c(u)}}}
E.iF.prototype={
$1:function(a){var u
H.pe(a)
u=this.a
if(u.ch){u.ch=!1
u.kN()}},
$S:54}
Z.ep.prototype={$ipm:1}
Z.dm.prototype={
bt:function(a){var u,t,s
try{t=a.a
C.c.e7(t,this.e)
C.c.l_(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ak(s)
t=P.w('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.m(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.m(this.e)+"]"}}
Z.jo.prototype={$ipn:1}
Z.dn.prototype={
aY:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bt:function(a){var u,t
u=this.a
C.c.aw(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].bt(a)},
f3:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.c.e5(s,u[t].e)
C.c.aw(s,this.a.a,null)},
aZ:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.h(r,s)
q=r[s]
r=q.c
p=r.a
C.c.aw(t,p,r.b)
C.c.k7(t,q.a,q.b,5123,0)
C.c.aw(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.e]
t=H.d([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q)C.a.h(t,s[q].i(0))
p=H.d([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.au(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(t,", ")+"\nAttrs:   "+C.a.m(p,", ")},
shm:function(a){this.b=H.k(a,"$ib",[Z.bF],"$ab")},
$ipw:1}
Z.bF.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c1(this.c)+"'")+"]"}}
Z.bd.prototype={
gdd:function(a){var u,t
u=this.a
t=(u&$.bu().a)!==0?3:0
if((u&$.bt().a)!==0)t+=3
if((u&$.bs().a)!==0)t+=3
if((u&$.bv().a)!==0)t+=2
if((u&$.bw().a)!==0)t+=3
if((u&$.df().a)!==0)t+=3
if((u&$.dg().a)!==0)t+=4
if((u&$.cj().a)!==0)++t
return(u&$.br().a)!==0?t+4:t},
jE:function(a){var u,t,s
u=$.bu()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bt()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bs()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bv()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bw()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.df()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.dg()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cj()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.br()
if((t&u.a)!==0)if(s===a)return u
return $.na()},
w:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bd))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.d([],[P.e])
t=this.a
if((t&$.bu().a)!==0)C.a.h(u,"Pos")
if((t&$.bt().a)!==0)C.a.h(u,"Norm")
if((t&$.bs().a)!==0)C.a.h(u,"Binm")
if((t&$.bv().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bw().a)!==0)C.a.h(u,"TxtCube")
if((t&$.df().a)!==0)C.a.h(u,"Clr3")
if((t&$.dg().a)!==0)C.a.h(u,"Clr4")
if((t&$.cj().a)!==0)C.a.h(u,"Weight")
if((t&$.br().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fE.prototype={}
D.bV.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.B]}
H.n(b,u)
if(this.a==null)this.sak(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
R:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[D.B]})
u=this.a
u=u==null?null:C.a.a0(u,b)
if(u===!0){u=this.a
t=(u&&C.a).R(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.a0(u,b)
if(u===!0){u=this.b
t=(u&&C.a).R(u,b)||t}return t},
J:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.B(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.O(P.lT(t,!0,{func:1,ret:-1,args:[D.B]}),new D.h_(u))
t=this.b
if(t!=null){this.saT(H.d([],[{func:1,ret:-1,args:[D.B]}]))
C.a.O(t,new D.h0(u))}return!0},
kR:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.J(t)}}},
ah:function(a){return this.kR(a,!0,!1)},
sak:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")},
saT:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")}}
D.h_.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:28}
D.h0.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:28}
D.B.prototype={}
D.bY.prototype={}
D.bZ.prototype={}
D.N.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.dp.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dp))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.dF.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dF))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.hk.prototype={
kH:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kD:function(a){this.c=a.b
this.d.R(0,a.a)
return!1},
siv:function(a){this.d=H.k(a,"$im6",[P.o],"$am6")}}
X.dK.prototype={}
X.hs.prototype={
b2:function(a,b){var u,t,s,r,q,p,o,n
u=new P.an(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.u()
q=b.b
p=this.ch
if(typeof q!=="number")return q.u()
o=new V.aa(t.a+s*r,t.b+q*p)
p=this.a.gaX()
n=new X.bn(a,V.bJ(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cX:function(a,b){this.r=a.a
return!1},
bg:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fk()
if(typeof u!=="number")return u.bS()
this.r=(u&~t)>>>0
return!1},
bf:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.b2(a,b))
return!0},
kI:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaX()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.u()
o=a.b
n=this.cy
if(typeof o!=="number")return o.u()
r=new X.cA(new V.X(q*p,o*n),t,s,new P.an(r,!1),this)
r.b=!0
u.J(r)
return!0},
i3:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.an(Date.now(),!1)
t=this.f
s=new X.dK(c,a,this.a.gaX(),b,u,this)
s.b=!0
t.J(s)
this.y=u
this.x=V.bJ()}}
X.aA.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aA))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bn.prototype={}
X.hL.prototype={
c3:function(a,b,c){var u,t,s
u=new P.an(Date.now(),!1)
t=this.a.gaX()
s=new X.bn(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cX:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.J(this.c3(a,b,!0))
return!0},
bg:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fk()
if(typeof u!=="number")return u.bS()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.J(this.c3(a,b,!0))
return!0},
bf:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.c3(a,b,!1))
return!0},
kJ:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaX()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.u()
p=a.b
o=this.ch
if(typeof p!=="number")return p.u()
s=new X.cA(new V.X(r*q,p*o),t,b,new P.an(s,!1),this)
s.b=!0
u.J(s)
return!0},
ge6:function(){var u=this.b
if(u==null){u=D.W()
this.b=u}return u},
gbQ:function(){var u=this.c
if(u==null){u=D.W()
this.c=u}return u},
geG:function(){var u=this.d
if(u==null){u=D.W()
this.d=u}return u}}
X.cA.prototype={}
X.i0.prototype={}
X.ef.prototype={}
X.iJ.prototype={
b2:function(a,b){var u,t,s,r
H.k(a,"$ib",[V.aa],"$ab")
u=new P.an(Date.now(),!1)
t=a.length>0?a[0]:V.bJ()
s=this.a.gaX()
r=new X.ef(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kG:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.b
if(u==null)return!1
u.J(this.b2(a,!0))
return!0},
kE:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.c
if(u==null)return!1
u.J(this.b2(a,!0))
return!0},
kF:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.d
if(u==null)return!1
u.J(this.b2(a,!1))
return!0}}
X.ek.prototype={
gaX:function(){var u=this.a
return V.m4(0,0,C.x.ge4(u).c,C.x.ge4(u).d)},
dw:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dF(u,new X.aA(t,a.altKey,a.shiftKey))},
aU:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aA(t,a.altKey,a.shiftKey)},
co:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aA(t,a.altKey,a.shiftKey)},
aH:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.t()
q=u.top
if(typeof s!=="number")return s.t()
return new V.aa(t-r,s-q)},
b3:function(a){return new V.X(a.movementX,a.movementY)},
ci:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.d([],[V.aa])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
o=C.e.ap(p.pageX)
C.e.ap(p.pageY)
n=u.left
C.e.ap(p.pageX)
C.a.h(t,new V.aa(o-n,C.e.ap(p.pageY)-u.top))}return t},
aF:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.dp(u,new X.aA(t,a.altKey,a.shiftKey))},
c7:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.t()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.t()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
hY:function(a){this.f=!0},
hK:function(a){this.f=!1},
hS:function(a){H.f(a,"$iah")
if(this.f&&this.c7(a))a.preventDefault()},
i1:function(a){var u
H.f(a,"$ib3")
if(!this.f)return
u=this.dw(a)
this.b.kH(u)},
i_:function(a){var u
H.f(a,"$ib3")
if(!this.f)return
u=this.dw(a)
this.b.kD(u)},
i5:function(a){var u,t,s,r
H.f(a,"$iah")
u=this.a
u.focus()
this.f=!0
this.aU(a)
if(this.x){t=this.aF(a)
s=this.b3(a)
if(this.d.cX(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aF(a)
r=this.aH(a)
if(this.c.cX(t,r))a.preventDefault()},
i9:function(a){var u,t,s
H.f(a,"$iah")
this.aU(a)
u=this.aF(a)
if(this.x){t=this.b3(a)
if(this.d.bg(u,t))a.preventDefault()
return}if(this.r)return
s=this.aH(a)
if(this.c.bg(u,s))a.preventDefault()},
hW:function(a){var u,t,s
H.f(a,"$iah")
if(!this.c7(a)){this.aU(a)
u=this.aF(a)
if(this.x){t=this.b3(a)
if(this.d.bg(u,t))a.preventDefault()
return}if(this.r)return
s=this.aH(a)
if(this.c.bg(u,s))a.preventDefault()}},
i7:function(a){var u,t,s
H.f(a,"$iah")
this.aU(a)
u=this.aF(a)
if(this.x){t=this.b3(a)
if(this.d.bf(u,t))a.preventDefault()
return}if(this.r)return
s=this.aH(a)
if(this.c.bf(u,s))a.preventDefault()},
hU:function(a){var u,t,s
H.f(a,"$iah")
if(!this.c7(a)){this.aU(a)
u=this.aF(a)
if(this.x){t=this.b3(a)
if(this.d.bf(u,t))a.preventDefault()
return}if(this.r)return
s=this.aH(a)
if(this.c.bf(u,s))a.preventDefault()}},
ib:function(a){var u,t
H.f(a,"$ibe")
this.aU(a)
u=new V.X((a&&C.N).gjZ(a),C.N.gk_(a)).B(0,180)
if(this.x){if(this.d.kI(u))a.preventDefault()
return}if(this.r)return
t=this.aH(a)
if(this.c.kJ(u,t))a.preventDefault()},
ie:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aF(this.y)
s=this.aH(this.y)
this.d.i3(t,s,u)}},
it:function(a){var u
H.f(a,"$iaX")
this.a.focus()
this.f=!0
this.co(a)
u=this.ci(a)
if(this.e.kG(u))a.preventDefault()},
ip:function(a){var u
H.f(a,"$iaX")
this.co(a)
u=this.ci(a)
if(this.e.kE(u))a.preventDefault()},
ir:function(a){var u
H.f(a,"$iaX")
this.co(a)
u=this.ci(a)
if(this.e.kF(u))a.preventDefault()},
shf:function(a){this.z=H.k(a,"$ib",[[P.cK,P.R]],"$ab")}}
D.bC.prototype={
gD:function(){var u=this.d
if(u==null){u=D.W()
this.d=u}return u},
aD:function(a){var u
H.f(a,"$iB")
u=this.d
if(u!=null)u.J(a)},
fN:function(){return this.aD(null)},
$ia8:1,
$ibo:1}
D.a8.prototype={$ibo:1}
D.dH.prototype={
gD:function(){var u=this.Q
if(u==null){u=D.W()
this.Q=u}return u},
aD:function(a){var u=this.Q
if(u!=null)u.J(a)},
dK:function(a){var u
H.f(a,"$iB")
u=this.ch
if(u!=null)u.J(a)},
i2:function(){return this.dK(null)},
ii:function(a){var u,t,s
H.k(a,"$ii",[D.a8],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t){s=a[t]
if(s==null||this.fL(s))return!1}return!0},
hE:function(a,b){var u,t,s,r,q,p,o,n
u=D.a8
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gdJ(),r={func:1,ret:-1,args:[D.B]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=H.f(b[p],"$ia8")
if(o instanceof D.bC)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bV()
n.sak(null)
n.saT(null)
n.c=null
n.d=0
o.d=n}H.n(s,r)
if(n.a==null)n.sak(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bY(a,b,this,[u])
u.b=!0
this.aD(u)},
im:function(a,b){var u,t,s,r
u=D.a8
H.k(b,"$ii",[u],"$ai")
for(t=b.gW(b),s=this.gdJ();t.F();){r=t.gN(t)
C.a.R(this.e,r)
r.gD().R(0,s)}u=new D.bZ(a,b,this,[u])
u.b=!0
this.aD(u)},
fL:function(a){var u=C.a.a0(this.e,a)
return u},
shc:function(a){this.e=H.k(a,"$ib",[D.bC],"$ab")},
siu:function(a){this.f=H.k(a,"$ib",[D.dW],"$ab")},
siT:function(a){this.r=H.k(a,"$ib",[D.e3],"$ab")},
sj3:function(a){this.x=H.k(a,"$ib",[D.ea],"$ab")},
sj4:function(a){this.y=H.k(a,"$ib",[D.eb],"$ab")},
sj5:function(a){this.z=H.k(a,"$ib",[D.ec],"$ab")},
$ai:function(){return[D.a8]},
$aa6:function(){return[D.a8]}}
D.dW.prototype={$ia8:1,$ibo:1}
D.e3.prototype={$ia8:1,$ibo:1}
D.ea.prototype={$ia8:1,$ibo:1}
D.eb.prototype={$ia8:1,$ibo:1}
D.ec.prototype={$ia8:1,$ibo:1}
V.a2.prototype={
p:function(a,b){var u,t,s
u=C.e.p(this.a,b.gd0())
t=C.e.p(this.b,b.gbU())
s=C.e.p(this.c,b.gcw())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a2(u,t,s)},
t:function(a,b){var u,t,s
u=C.e.t(this.a,b.gd0())
t=C.e.t(this.b,b.gbU())
s=C.e.t(this.c,b.gcw())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a2(u,t,s)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
V.aM.prototype={
p:function(a,b){var u,t,s,r
u=C.e.p(this.a,b.gd0())
t=C.e.p(this.b,b.gbU())
s=C.e.p(this.c,b.gcw())
r=C.e.p(this.d,b.gjD(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aM(u,t,s,r)},
t:function(a,b){var u,t,s,r
u=C.e.t(this.a,b.gd0())
t=C.e.t(this.b,b.gbU())
s=C.e.t(this.c,b.gcw())
r=C.e.t(this.d,b.gjD(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aM(u,t,s,r)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aM))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}
V.fY.prototype={}
V.dO.prototype={
ai:function(a,b){var u=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.r])
return u},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dO))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
if(!(Math.abs(b.e-this.e)<t))return!1
if(!(Math.abs(b.f-this.f)<t))return!1
if(!(Math.abs(b.r-this.r)<t))return!1
if(!(Math.abs(b.x-this.x)<t))return!1
if(!(Math.abs(b.y-this.y)<t))return!1
return!0},
i:function(a){var u,t,s,r,q,p,o,n
u=[P.r]
t=V.ce(H.d([this.a,this.d,this.r],u),3,0)
s=V.ce(H.d([this.b,this.e,this.x],u),3,0)
r=V.ce(H.d([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.h(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.h(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.h(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.h(t,1)
n=" "+t[1]+", "
if(1>=p)return H.h(s,1)
n=n+s[1]+", "
if(1>=o)return H.h(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.h(t,2)
u=" "+t[2]+", "
if(2>=p)return H.h(s,2)
u=u+s[2]+", "
if(2>=o)return H.h(r,2)
return n+(u+r[2]+"]")}}
V.ap.prototype={
ai:function(a,b){var u=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.r])
return u},
eE:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
e=this.z
d=this.cx
c=g*f-e*d
b=this.db
a=this.Q
a0=g*b-a*d
a1=this.dx
a2=this.ch
a3=g*a1-a2*d
a4=e*b-a*f
a5=e*a1-a2*f
a6=a*a1-a2*b
a7=q*a6-n*a5+k*a4+j*a3-i*a0+h*c
if(Math.abs(a7-0)<$.M().a)return V.dP()
a8=1/a7
a9=-r
b0=-d
return V.b6((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
u:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=b2.a
s=this.b
r=b2.e
q=this.c
p=b2.y
o=this.d
n=b2.cx
m=b2.b
l=b2.f
k=b2.z
j=b2.cy
i=b2.c
h=b2.r
g=b2.Q
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
a4=this.z
a5=this.Q
a6=this.ch
a7=this.cx
a8=this.cy
a9=this.db
b0=this.dx
return V.b6(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
d5:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.J(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
bk:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.a4(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ap))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
if(!(Math.abs(b.e-this.e)<t))return!1
if(!(Math.abs(b.f-this.f)<t))return!1
if(!(Math.abs(b.r-this.r)<t))return!1
if(!(Math.abs(b.x-this.x)<t))return!1
if(!(Math.abs(b.y-this.y)<t))return!1
if(!(Math.abs(b.z-this.z)<t))return!1
if(!(Math.abs(b.Q-this.Q)<t))return!1
if(!(Math.abs(b.ch-this.ch)<t))return!1
if(!(Math.abs(b.cx-this.cx)<t))return!1
if(!(Math.abs(b.cy-this.cy)<t))return!1
if(!(Math.abs(b.db-this.db)<t))return!1
if(!(Math.abs(b.dx-this.dx)<t))return!1
return!0},
i:function(a){return this.S()},
ew:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.r]
t=V.ce(H.d([this.a,this.e,this.y,this.cx],u),b,c)
s=V.ce(H.d([this.b,this.f,this.z,this.cy],u),b,c)
r=V.ce(H.d([this.c,this.r,this.Q,this.db],u),b,c)
q=V.ce(H.d([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.h(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.h(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.h(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.h(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.h(t,1)
l=l+t[1]+", "
if(1>=o)return H.h(s,1)
l=l+s[1]+", "
if(1>=n)return H.h(r,1)
l=l+r[1]+", "
if(1>=m)return H.h(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.h(t,2)
p=p+t[2]+", "
if(2>=o)return H.h(s,2)
p=p+s[2]+", "
if(2>=n)return H.h(r,2)
p=p+r[2]+", "
if(2>=m)return H.h(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.h(t,3)
l=l+t[3]+", "
if(3>=o)return H.h(s,3)
l=l+s[3]+", "
if(3>=n)return H.h(r,3)
l=l+r[3]+", "
if(3>=m)return H.h(q,3)
return p+(l+q[3]+"]")},
S:function(){return this.ew("",3,0)},
G:function(a){return this.ew(a,3,0)}}
V.aa.prototype={
p:function(a,b){return new V.aa(this.a+b.a,this.b+b.b)},
t:function(a,b){return new V.aa(this.a-b.a,this.b-b.b)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}}
V.a4.prototype={
p:function(a,b){return new V.a4(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.a4(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.a4(this.a*b,this.b*b,this.c*b)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
V.b8.prototype={
p:function(a,b){return new V.b8(C.e.p(this.a,b.gl2(b)),C.e.p(this.b,b.gl3(b)),C.e.p(this.c,b.gl4(b)),C.e.p(this.d,b.gl1(b)))},
t:function(a,b){return new V.b8(C.e.t(this.a,b.gl2(b)),C.e.t(this.b,b.gl3(b)),C.e.t(this.c,b.gl4(b)),C.e.t(this.d,b.gl1(b)))},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b8))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}
V.e_.prototype={
gaa:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e_))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}
V.X.prototype={
cS:function(a){return Math.sqrt(this.H(this))},
H:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.F(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.F(r)
return u*t+s*r},
p:function(a,b){var u,t,s
u=this.a
t=b.gk8(b)
if(typeof u!=="number")return u.p()
t=C.e.p(u,t)
u=this.b
s=b.gk9(b)
if(typeof u!=="number")return u.p()
return new V.X(t,C.e.p(u,s))},
t:function(a,b){var u,t,s
u=this.a
t=b.gk8(b)
if(typeof u!=="number")return u.t()
t=C.e.t(u,t)
u=this.b
s=b.gk9(b)
if(typeof u!=="number")return u.t()
return new V.X(t,C.e.t(u,s))},
u:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.X(u*b,t*b)},
B:function(a,b){var u,t
if(Math.abs(b-0)<$.M().a){u=$.mh
if(u==null){u=new V.X(0,0)
$.mh=u}return u}u=this.a
if(typeof u!=="number")return u.B()
t=this.b
if(typeof t!=="number")return t.B()
return new V.X(u/b,t/b)},
w:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=this.a
s=$.M()
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
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}}
V.J.prototype={
cS:function(a){return Math.sqrt(this.H(this))},
H:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cT:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.J(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aI:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.J(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.J(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.J(this.a-b.a,this.b-b.b,this.c-b.c)},
V:function(a){return new V.J(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.J(this.a*b,this.b*b,this.c*b)},
B:function(a,b){if(Math.abs(b-0)<$.M().a)return V.cW()
return new V.J(this.a/b,this.b/b,this.c/b)},
eF:function(){var u=$.M().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.J))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
U.fF.prototype={
bZ:function(a){var u=V.kT(a,this.c,this.b)
return u},
gD:function(){var u=this.y
if(u==null){u=D.W()
this.y=u}return u},
K:function(a){var u=this.y
if(u!=null)u.J(a)},
sd7:function(a,b){},
scU:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.M().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bZ(t)}u=new D.N("maximumLocation",u,this.b,this,[P.r])
u.b=!0
this.K(u)}},
scW:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.M().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bZ(t)}u=new D.N("minimumLocation",u,this.c,this,[P.r])
u.b=!0
this.K(u)}},
sa3:function(a,b){var u
b=this.bZ(b)
u=this.d
if(!(Math.abs(u-b)<$.M().a)){this.d=b
u=new D.N("location",u,b,this,[P.r])
u.b=!0
this.K(u)}},
scV:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.M().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.N("maximumVelocity",u,a,this,[P.r])
u.b=!0
this.K(u)}},
sY:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.M().a)){this.f=a
u=new D.N("velocity",u,a,this,[P.r])
u.b=!0
this.K(u)}},
scF:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.M().a)){this.x=a
u=new D.N("dampening",u,a,this,[P.r])
u.b=!0
this.K(u)}},
aA:function(a,b){var u,t,s,r,q
u=this.f
t=$.M().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa3(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.M().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sY(s)}}}
U.dr.prototype={
gD:function(){var u=this.b
if(u==null){u=D.W()
this.b=u}return u},
aB:function(a,b,c){return this.a},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dr))return!1
return J.U(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cv.prototype={
gD:function(){var u=this.e
if(u==null){u=D.W()
this.e=u}return u},
K:function(a){var u
H.f(a,"$iB")
u=this.e
if(u!=null)u.J(a)},
a8:function(){return this.K(null)},
hC:function(a,b){var u,t,s,r,q,p,o,n
u=U.ad
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gaP(),r={func:1,ret:-1,args:[D.B]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.gD()
n.toString
H.n(s,r)
if(n.a==null)n.sak(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bY(a,b,this,[u])
u.b=!0
this.K(u)},
ik:function(a,b){var u,t,s
u=U.ad
H.k(b,"$ii",[u],"$ai")
for(t=b.gW(b),s=this.gaP();t.F();)t.gN(t).gD().R(0,s)
u=new D.bZ(a,b,this,[u])
u.b=!0
this.K(u)},
aB:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.Z()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ay(u,u.length,0,[H.u(u,0)]),s=null;u.F();){t=u.d
if(t!=null){r=t.aB(0,b,c)
if(r!=null)s=s==null?r:r.u(0,s)}}this.f=s==null?V.dP():s
u=this.e
if(u!=null)u.ah(0)}return this.f},
w:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cv))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.U(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ad]},
$aa6:function(){return[U.ad]},
$iad:1}
U.ad.prototype={}
U.e0.prototype={
gD:function(){var u=this.y
if(u==null){u=D.W()
this.y=u}return u},
K:function(a){var u=this.y
if(u!=null)u.J(a)},
sf9:function(a){var u
a=V.kT(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.M().a)){this.a=a
u=new D.N("yaw",u,a,this,[P.r])
u.b=!0
this.K(u)}},
seQ:function(a,b){var u
b=V.kT(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.M().a)){this.b=b
u=new D.N("pitch",u,b,this,[P.r])
u.b=!0
this.K(u)}},
seX:function(a){var u
a=V.kT(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.M().a)){this.c=a
u=new D.N("roll",u,a,this,[P.r])
u.b=!0
this.K(u)}},
aB:function(a,b,c){var u,t
u=this.r
t=b.e
if(u<t){this.r=t
u=this.y
if(u!=null)++u.d
this.sf9(this.a+this.d*b.y)
this.seQ(0,this.b+this.e*b.y)
this.seX(this.c+this.f*b.y)
this.x=V.lW(this.c).u(0,V.lV(this.b)).u(0,V.lU(this.a))
u=this.y
if(u!=null)u.ah(0)}return this.x},
w:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e0))return!1
u=this.a
t=b.a
s=$.M().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(this.b-b.b)<s))return!1
if(!(Math.abs(this.c-b.c)<s))return!1
if(!(Math.abs(this.d-b.d)<s))return!1
if(!(Math.abs(this.e-b.e)<s))return!1
if(!(Math.abs(this.f-b.f)<s))return!1
return!0},
i:function(a){return"Rotater: ["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"], ["+V.Q(this.d,3,0)+", "+V.Q(this.e,3,0)+", "+V.Q(this.f,3,0)+"]"}}
U.el.prototype={
gD:function(){var u=this.cy
if(u==null){u=D.W()
this.cy=u}return u},
K:function(a){var u
H.f(a,"$iB")
u=this.cy
if(u!=null)u.J(a)},
a8:function(){return this.K(null)},
b6:function(a){if(this.a!=null)return!1
this.a=a
a.c.ge6().h(0,this.gc8())
this.a.c.geG().h(0,this.gca())
this.a.c.gbQ().h(0,this.gcc())
return!0},
c9:function(a){H.f(a,"$iB")
if(!J.U(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
cb:function(a){var u,t,s,r,q,p,o
a=H.l(H.f(a,"$iB"),"$ibn")
if(!this.y)return
if(this.x){u=a.d.t(0,a.y)
u=new V.X(u.a,u.b)
u=u.H(u)
t=this.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.t(0,a.y)
u=new V.X(t.a,t.b).u(0,2).B(0,u.gaa())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.u()
s=this.e
if(typeof s!=="number")return H.F(s)
t.sY(u*10*s)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=new V.X(s.a,s.b).u(0,2).B(0,u.gaa())
s=this.b
q=r.a
if(typeof q!=="number")return q.V()
p=this.e
if(typeof p!=="number")return H.F(p)
o=this.z
if(typeof o!=="number")return H.F(o)
s.sa3(0,-q*p+o)
this.b.sY(0)
t=t.t(0,a.z)
this.Q=new V.X(t.a,t.b).u(0,2).B(0,u.gaa())}this.a8()},
cd:function(a){var u,t,s
H.f(a,"$iB")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.H(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.u()
s=this.e
if(typeof s!=="number")return H.F(s)
u.sY(t*10*s)
this.a8()}},
aB:function(a,b,c){var u,t,s
u=this.ch
t=b.e
if(typeof u!=="number")return u.Z()
if(u<t){this.ch=t
s=b.y
this.b.aA(0,s)
this.cx=V.lW(this.b.d)}return this.cx},
$iad:1}
U.em.prototype={
gD:function(){var u=this.fx
if(u==null){u=D.W()
this.fx=u}return u},
K:function(a){var u
H.f(a,"$iB")
u=this.fx
if(u!=null)u.J(a)},
a8:function(){return this.K(null)},
b6:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.ge6().h(0,this.gc8())
this.a.c.geG().h(0,this.gca())
this.a.c.gbQ().h(0,this.gcc())
u=this.a.d
t=u.f
if(t==null){t=D.W()
u.f=t
u=t}else u=t
u.h(0,this.ghu())
u=this.a.d
t=u.d
if(t==null){t=D.W()
u.d=t
u=t}else u=t
u.h(0,this.ghw())
u=this.a.e
t=u.b
if(t==null){t=D.W()
u.b=t
u=t}else u=t
u.h(0,this.gj0())
u=this.a.e
t=u.d
if(t==null){t=D.W()
u.d=t
u=t}else u=t
u.h(0,this.giZ())
u=this.a.e
t=u.c
if(t==null){t=D.W()
u.c=t
u=t}else u=t
u.h(0,this.giX())
return!0},
at:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.V()
u=-u}if(this.r){if(typeof t!=="number")return t.V()
t=-t}return new V.X(u,t)},
c9:function(a){a=H.l(H.f(a,"$iB"),"$ibn")
if(!J.U(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
cb:function(a){var u,t,s,r,q,p,o
a=H.l(H.f(a,"$iB"),"$ibn")
if(!this.cx)return
if(this.ch){u=a.d.t(0,a.y)
u=new V.X(u.a,u.b)
u=u.H(u)
t=this.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.t(0,a.y)
u=this.at(new V.X(t.a,t.b).u(0,2).B(0,u.gaa()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.V()
s=this.y
if(typeof s!=="number")return H.F(s)
t.sY(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.V()
t=this.x
if(typeof t!=="number")return H.F(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=this.at(new V.X(s.a,s.b).u(0,2).B(0,u.gaa()))
s=this.c
q=r.a
if(typeof q!=="number")return q.V()
p=this.y
if(typeof p!=="number")return H.F(p)
o=this.cy
if(typeof o!=="number")return H.F(o)
s.sa3(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.V()
q=this.x
if(typeof q!=="number")return H.F(q)
s=this.db
if(typeof s!=="number")return H.F(s)
o.sa3(0,-p*q+s)
this.b.sY(0)
this.c.sY(0)
t=t.t(0,a.z)
this.dx=this.at(new V.X(t.a,t.b).u(0,2).B(0,u.gaa()))}this.a8()},
cd:function(a){var u,t,s
H.f(a,"$iB")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.H(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.V()
s=this.y
if(typeof s!=="number")return H.F(s)
u.sY(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.V()
u=this.x
if(typeof u!=="number")return H.F(u)
s.sY(-t*10*u)
this.a8()}},
hv:function(a){if(H.l(H.f(a,"$iB"),"$idK").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hx:function(a){var u,t,s,r,q,p,o
a=H.l(H.f(a,"$iB"),"$ibn")
if(!J.U(this.d,a.x.b))return
u=a.c
t=a.d
s=t.t(0,a.y)
r=this.at(new V.X(s.a,s.b).u(0,2).B(0,u.gaa()))
s=this.c
q=r.a
if(typeof q!=="number")return q.V()
p=this.y
if(typeof p!=="number")return H.F(p)
o=this.cy
if(typeof o!=="number")return H.F(o)
s.sa3(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.V()
q=this.x
if(typeof q!=="number")return H.F(q)
s=this.db
if(typeof s!=="number")return H.F(s)
o.sa3(0,-p*q+s)
this.b.sY(0)
this.c.sY(0)
t=t.t(0,a.z)
this.dx=this.at(new V.X(t.a,t.b).u(0,2).B(0,u.gaa()))
this.a8()},
j1:function(a){H.f(a,"$iB")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
j_:function(a){var u,t,s,r,q,p,o
a=H.l(H.f(a,"$iB"),"$ief")
if(!this.cx)return
if(this.ch){u=a.d.t(0,a.y)
u=new V.X(u.a,u.b)
u=u.H(u)
t=this.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.t(0,a.y)
u=this.at(new V.X(t.a,t.b).u(0,2).B(0,u.gaa()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.V()
s=this.y
if(typeof s!=="number")return H.F(s)
t.sY(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.V()
t=this.x
if(typeof t!=="number")return H.F(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=this.at(new V.X(s.a,s.b).u(0,2).B(0,u.gaa()))
s=this.c
q=r.a
if(typeof q!=="number")return q.V()
p=this.y
if(typeof p!=="number")return H.F(p)
o=this.cy
if(typeof o!=="number")return H.F(o)
s.sa3(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.V()
q=this.x
if(typeof q!=="number")return H.F(q)
s=this.db
if(typeof s!=="number")return H.F(s)
o.sa3(0,-p*q+s)
this.b.sY(0)
this.c.sY(0)
t=t.t(0,a.z)
this.dx=this.at(new V.X(t.a,t.b).u(0,2).B(0,u.gaa()))}this.a8()},
iY:function(a){var u,t,s
H.f(a,"$iB")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.H(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.V()
s=this.y
if(typeof s!=="number")return H.F(s)
u.sY(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.V()
u=this.x
if(typeof u!=="number")return H.F(u)
s.sY(-t*10*u)
this.a8()}},
aB:function(a,b,c){var u,t,s
u=this.dy
t=b.e
if(typeof u!=="number")return u.Z()
if(u<t){this.dy=t
s=b.y
this.c.aA(0,s)
this.b.aA(0,s)
this.fr=V.lU(this.b.d).u(0,V.lV(this.c.d))}return this.fr},
$iad:1}
U.en.prototype={
gD:function(){var u=this.r
if(u==null){u=D.W()
this.r=u}return u},
K:function(a){var u=this.r
if(u!=null)u.J(a)},
b6:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.W()
u.e=t
u=t}else u=t
t=this.ghz()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.W()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
hA:function(a){var u,t,s,r
H.f(a,"$iB")
if(!J.U(this.b,this.a.b.c))return
H.l(a,"$icA")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){this.d=r
u=new D.N("zoom",u,r,this,[P.r])
u.b=!0
this.K(u)}},
aB:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.lX(s,s,s,1)}return this.f},
$iad:1}
M.dw.prototype={
aE:function(a){var u
H.f(a,"$iB")
u=this.x
if(u!=null)u.J(a)},
fO:function(){return this.aE(null)},
hO:function(a,b){var u,t,s,r,q,p,o,n
u=E.ao
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gas(),r={func:1,ret:-1,args:[D.B]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bV()
n.sak(null)
n.saT(null)
n.c=null
n.d=0
o.z=n}H.n(s,r)
if(n.a==null)n.sak(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bY(a,b,this,[u])
u.b=!0
this.aE(u)},
hQ:function(a,b){var u,t,s
u=E.ao
H.k(b,"$ii",[u],"$ai")
for(t=b.gW(b),s=this.gas();t.F();)t.gN(t).gD().R(0,s)
u=new D.bZ(a,b,this,[u])
u.b=!0
this.aE(u)},
seZ:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gD().R(0,this.gas())
t=this.c
this.c=a
if(a!=null)a.gD().h(0,this.gas())
u=new D.N("technique",t,this.c,this,[O.c6])
u.b=!0
this.aE(u)}},
gD:function(){var u=this.x
if(u==null){u=D.W()
this.x=u}return u},
aZ:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a1.eT(this.c)
u=this.b
u.toString
t=a1.a
C.c.jH(t,36160,null)
C.c.cH(t,2884)
C.c.cH(t,2929)
C.c.k0(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.F(s)
o=C.e.ap(p*s)
p=q.b
if(typeof r!=="number")return H.F(r)
n=C.e.ap(p*r)
p=C.e.ap(q.c*s)
a1.c=p
q=C.e.ap(q.d*r)
a1.d=q
C.c.l0(t,o,n,p,q)
C.c.jN(t,u.c)
u=u.a
C.c.jM(t,u.a,u.b,u.c,u.d)
C.c.jL(t,16640)
u=this.a
t=a1.c
q=a1.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.b6(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a1.cy.eS(i)
t=$.m0
if(t==null){t=V.nR()
q=$.mk
if(q==null){q=new V.J(0,1,0)
$.mk=q}p=$.mi
if(p==null){p=new V.J(0,0,-1)
$.mi=p}h=p.B(0,Math.sqrt(p.H(p)))
q=q.aI(h)
g=q.B(0,Math.sqrt(q.H(q)))
f=h.aI(g)
e=new V.J(t.a,t.b,t.c)
d=g.V(0).H(e)
c=f.V(0).H(e)
b=h.V(0).H(e)
t=V.b6(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.m0=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.aB(0,a1,u)
if(a0!=null)a=a0.u(0,a)}a1.db.eS(a)
u=this.c
if(u!=null)u.aA(0,a1)
for(u=this.d.a,u=new J.ay(u,u.length,0,[H.u(u,0)]);u.F();)u.d.aA(0,a1)
for(u=this.d.a,u=new J.ay(u,u.length,0,[H.u(u,0)]);u.F();)u.d.aZ(a1)
this.a.toString
a1.cy.cY()
a1.db.cY()
this.b.toString
a1.eR()},
sh6:function(a,b){this.d=H.k(b,"$ia6",[E.ao],"$aa6")},
$ipt:1}
A.dk.prototype={}
A.fu.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ka:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.c.e7(r.a,r.c)}},
k6:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.c.e5(r.a,r.c)}}}
A.hz.prototype={
fC:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
this.z=a7
u=new P.al("")
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
a7.j9(u)
a7.jg(u)
a7.ja(u)
a7.jo(u)
a7.jp(u)
a7.ji(u)
a7.jt(u)
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
u=new P.al("")
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
s.jd(u)
s.j8(u)
s.jb(u)
s.je(u)
s.jm(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.jk(u)
s.jl(u)}s.jh(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=s.y
if(l!==C.d){m+="uniform float alpha;\n"
u.a=m
if(l!==C.j){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.h){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.i){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m+="\n"
u.a=m}m+="float alphaValue()\n"
u.a=m
m+="{\n"
u.a=m
switch(l){case C.d:m+="   return 1.0;\n"
u.a=m
break
case C.j:m+="   return alpha;\n"
u.a=m
break
case C.h:m+="   if(nullAlphaTxt > 0) return alpha;\n"
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+="   if (a <= 0.000001) discard;\n"
u.a=m
m+="   return a;\n"
u.a=m
break
case C.i:m+="   if(nullAlphaTxt > 0) return alpha;\n"
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
k=H.d([],[P.e])
if(s.b!==C.d)C.a.h(k,"ambient()")
if(s.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.m(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.jc(u)
s.jj(u)
s.jn(u)
s.jq(u)
s.jr(u)
s.js(u)
s.jf(u)}m=u.a+="// === Main ===\n"
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
j=H.d([],[P.e])
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
i="vec4("+C.a.m(j," + ")+", alpha);"
s=u.a
if(o){s+="   gl_FragColor = colorMat*"+i+"\n"
u.a=s}else{s+="   gl_FragColor = "+i+"\n"
u.a=s}s+="}\n"
u.a=s
this.c=n
this.d=s.charCodeAt(0)==0?s:s
this.e=this.dz(n,35633)
this.f=this.dz(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.c.e_(s,q,this.e)
C.c.e_(s,this.r,this.f)
C.c.kq(s,this.r)
if(!H.ln(C.c.bT(s,this.r,35714))){h=C.c.ff(s,this.r)
C.c.jX(s,this.r)
H.t(P.w("Failed to link shader: "+H.m(h)))}this.iO()
this.iQ()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a7.fr)this.id=H.l(this.y.q(0,"invViewMat"),"$iaC")
if(t)this.dy=H.l(this.y.q(0,"objMat"),"$iaC")
if(r)this.fr=H.l(this.y.q(0,"viewObjMat"),"$iaC")
this.fy=H.l(this.y.q(0,"projViewObjMat"),"$iaC")
if(a7.x2)this.k1=H.l(this.y.q(0,"txt2DMat"),"$icP")
if(a7.y1)this.k2=H.l(this.y.q(0,"txtCubeMat"),"$iaC")
if(a7.y2)this.k3=H.l(this.y.q(0,"colorMat"),"$iaC")
this.sh2(H.d([],[A.aC]))
t=a7.ay
if(t>0){this.k4=H.f(this.y.q(0,"bendMatCount"),"$iP")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.t(P.w("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.l(f,"$iaC"))}}t=a7.a
if(t!==C.d){this.r2=H.l(this.y.q(0,"emissionClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:this.rx=H.l(this.y.q(0,"emissionTxt"),"$iaq")
this.x1=H.l(this.y.q(0,"nullEmissionTxt"),"$iP")
break
case C.i:this.ry=H.l(this.y.q(0,"emissionTxt"),"$iar")
this.x1=H.l(this.y.q(0,"nullEmissionTxt"),"$iP")
break}}t=a7.b
if(t!==C.d){this.x2=H.l(this.y.q(0,"ambientClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:this.y1=H.l(this.y.q(0,"ambientTxt"),"$iaq")
this.ay=H.l(this.y.q(0,"nullAmbientTxt"),"$iP")
break
case C.i:this.y2=H.l(this.y.q(0,"ambientTxt"),"$iar")
this.ay=H.l(this.y.q(0,"nullAmbientTxt"),"$iP")
break}}t=a7.c
if(t!==C.d){this.an=H.l(this.y.q(0,"diffuseClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:this.bw=H.l(this.y.q(0,"diffuseTxt"),"$iaq")
this.bx=H.l(this.y.q(0,"nullDiffuseTxt"),"$iP")
break
case C.i:this.e8=H.l(this.y.q(0,"diffuseTxt"),"$iar")
this.bx=H.l(this.y.q(0,"nullDiffuseTxt"),"$iP")
break}}t=a7.d
if(t!==C.d){this.by=H.l(this.y.q(0,"invDiffuseClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:this.e9=H.l(this.y.q(0,"invDiffuseTxt"),"$iaq")
this.bz=H.l(this.y.q(0,"nullInvDiffuseTxt"),"$iP")
break
case C.i:this.ea=H.l(this.y.q(0,"invDiffuseTxt"),"$iar")
this.bz=H.l(this.y.q(0,"nullInvDiffuseTxt"),"$iP")
break}}t=a7.e
if(t!==C.d){this.bC=H.l(this.y.q(0,"shininess"),"$ia3")
this.bA=H.l(this.y.q(0,"specularClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:this.eb=H.l(this.y.q(0,"specularTxt"),"$iaq")
this.bB=H.l(this.y.q(0,"nullSpecularTxt"),"$iP")
break
case C.i:this.ec=H.l(this.y.q(0,"specularTxt"),"$iar")
this.bB=H.l(this.y.q(0,"nullSpecularTxt"),"$iP")
break}}switch(a7.f){case C.d:break
case C.j:break
case C.h:this.ed=H.l(this.y.q(0,"bumpTxt"),"$iaq")
this.bD=H.l(this.y.q(0,"nullBumpTxt"),"$iP")
break
case C.i:this.ee=H.l(this.y.q(0,"bumpTxt"),"$iar")
this.bD=H.l(this.y.q(0,"nullBumpTxt"),"$iP")
break}if(a7.dy){this.ef=H.l(this.y.q(0,"envSampler"),"$iar")
this.eg=H.l(this.y.q(0,"nullEnvTxt"),"$iP")
t=a7.r
if(t!==C.d){this.bE=H.l(this.y.q(0,"reflectClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:this.eh=H.l(this.y.q(0,"reflectTxt"),"$iaq")
this.bF=H.l(this.y.q(0,"nullReflectTxt"),"$iP")
break
case C.i:this.ei=H.l(this.y.q(0,"reflectTxt"),"$iar")
this.bF=H.l(this.y.q(0,"nullReflectTxt"),"$iP")
break}}t=a7.x
if(t!==C.d){this.bG=H.l(this.y.q(0,"refraction"),"$ia3")
this.bH=H.l(this.y.q(0,"refractClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:this.ej=H.l(this.y.q(0,"refractTxt"),"$iaq")
this.bI=H.l(this.y.q(0,"nullRefractTxt"),"$iP")
break
case C.i:this.ek=H.l(this.y.q(0,"refractTxt"),"$iar")
this.bI=H.l(this.y.q(0,"nullRefractTxt"),"$iP")
break}}}t=a7.y
if(t!==C.d){this.bJ=H.l(this.y.q(0,"alpha"),"$ia3")
switch(t){case C.d:break
case C.j:break
case C.h:this.el=H.l(this.y.q(0,"alphaTxt"),"$iaq")
this.bK=H.l(this.y.q(0,"nullAlphaTxt"),"$iP")
break
case C.i:this.em=H.l(this.y.q(0,"alphaTxt"),"$iar")
this.bK=H.l(this.y.q(0,"nullAlphaTxt"),"$iP")
break}}this.sfP(H.d([],[A.cO]))
this.sfQ(H.d([],[A.cQ]))
this.sfR(H.d([],[A.cR]))
this.sfS(H.d([],[A.cS]))
this.sfT(H.d([],[A.cT]))
this.sfU(H.d([],[A.cU]))
if(a7.k2){t=a7.z
if(t>0){this.en=H.f(this.y.q(0,"dirLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iO")
s=this.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iO")
s=this.cI;(s&&C.a).h(s,new A.cO(g,f,e))}}t=a7.Q
if(t>0){this.eo=H.f(this.y.q(0,"pntLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iO")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iO")
s=this.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$iO")
s=this.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$ia3")
s=this.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$ia3")
s=this.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$ia3")
s=this.cJ;(s&&C.a).h(s,new A.cQ(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.ep=H.f(this.y.q(0,"spotLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iO")
s=this.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iO")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$iO")
s=this.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$iO")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$ia3")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$ia3")
s=this.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a0,"$ia3")
s=this.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a1,"$ia3")
s=this.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a2,"$ia3")
s=this.cK;(s&&C.a).h(s,new A.cR(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.eq=H.f(this.y.q(0,"txtDirLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iO")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iO")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$iO")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$iO")
s=this.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$iO")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$iP")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a0,"$iaq")
s=this.cL;(s&&C.a).h(s,new A.cS(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.er=H.f(this.y.q(0,"txtPntLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iO")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iO")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$icP")
s=this.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$iO")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$iP")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$ia3")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a0,"$ia3")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a1,"$ia3")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a2,"$iar")
s=this.cM;(s&&C.a).h(s,new A.cT(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.es=H.f(this.y.q(0,"txtSpotLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iO")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iO")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$iO")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$iO")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$iO")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$iP")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a0,"$iO")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a1,"$ia3")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a2,"$ia3")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a3,"$ia3")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a4,"$ia3")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a5,"$ia3")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a6,"$iaq")
s=this.cN;(s&&C.a).h(s,new A.cU(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
al:function(a,b,c){C.c.X(b.a,b.d,1)},
ad:function(a,b,c){C.c.X(b.a,b.d,1)},
sh2:function(a){this.r1=H.k(a,"$ib",[A.aC],"$ab")},
sfP:function(a){this.cI=H.k(a,"$ib",[A.cO],"$ab")},
sfQ:function(a){this.cJ=H.k(a,"$ib",[A.cQ],"$ab")},
sfR:function(a){this.cK=H.k(a,"$ib",[A.cR],"$ab")},
sfS:function(a){this.cL=H.k(a,"$ib",[A.cS],"$ab")},
sfT:function(a){this.cM=H.k(a,"$ib",[A.cT],"$ab")},
sfU:function(a){this.cN=H.k(a,"$ib",[A.cU],"$ab")}}
A.hC.prototype={
j9:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.ay+"];\n"
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
jg:function(a){var u
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
ja:function(a){var u
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
jo:function(a){var u,t
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
jp:function(a){var u,t
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
ji:function(a){var u
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
jt:function(a){var u
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
aG:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.h(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.b.ar(c,1))+"Txt;\n"
a.a=u
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
jd:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aG(a,u,"emission")
t=a.a+="\n"
t+="vec3 emission()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   return emissionClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
j8:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aG(a,u,"ambient")
t=a.a+="\n"
t+="vec3 ambient()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   return ambientClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
jb:function(a){var u,t
u=this.c
if(u===C.d)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aG(a,u,"diffuse")
t=a.a+="vec3 diffuseColor;\n"
t+="\n"
a.a=t
t+="void setDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   diffuseColor = diffuseClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
je:function(a){var u,t
u=this.d
if(u===C.d)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aG(a,u,"invDiffuse")
t=a.a+="vec3 invDiffuseColor;\n"
t+="\n"
a.a=t
t+="void setInvDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   invDiffuseColor = invDiffuseClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
jm:function(a){var u,t
u=this.e
if(u===C.d)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aG(a,u,"specular")
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
case C.j:u=t+"   specularColor = specularClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
jh:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.d:break
case C.j:break
case C.h:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break
case C.i:u+="uniform samplerCube bumpTxt;\n"
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
case C.j:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.h:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
case C.i:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
jk:function(a){var u,t
u=this.r
if(u===C.d)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aG(a,u,"reflect")
t=a.a+="\n"
t+="vec3 reflect(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   vec3 scalar = reflectClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
jl:function(a){var u,t
u=this.x
if(u===C.d)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aG(a,u,"refract")
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
case C.j:u=t+"   vec3 scalar = refractClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
jc:function(a){var u,t
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
jj:function(a){var u,t
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
jn:function(a){var u,t
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
jq:function(a){var u,t,s
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
jr:function(a){var u,t,s
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
js:function(a){var u,t,s
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
jf:function(a){var u
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
i:function(a){return this.an}}
A.cO.prototype={}
A.cS.prototype={}
A.cQ.prototype={}
A.cT.prototype={}
A.cR.prototype={}
A.cU.prototype={}
A.cI.prototype={
fF:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dz:function(a,b){var u,t,s
u=this.a
t=C.c.jV(u,b)
C.c.fq(u,t,a)
C.c.jP(u,t)
if(!H.ln(C.c.fh(u,t,35713))){s=C.c.fg(u,t)
C.c.jY(u,t)
throw H.c(P.w("Error compiling shader '"+H.m(t)+"': "+H.m(s)))}return t},
iO:function(){var u,t,s,r,q,p
u=H.d([],[A.dk])
t=this.a
s=H.aj(C.c.bT(t,this.r,35721))
if(typeof s!=="number")return H.F(s)
r=0
for(;r<s;++r){q=C.c.fa(t,this.r,r)
p=C.c.fc(t,this.r,q.name)
C.a.h(u,new A.dk(t,q.name,p))}this.x=new A.fu(u)},
iQ:function(){var u,t,s,r,q,p
u=H.d([],[A.eg])
t=this.a
s=H.aj(C.c.bT(t,this.r,35718))
if(typeof s!=="number")return H.F(s)
r=0
for(;r<s;++r){q=C.c.fb(t,this.r,r)
p=C.c.fi(t,this.r,q.name)
C.a.h(u,this.jW(q.type,q.size,q.name,p))}this.y=new A.iX(u)},
aR:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.P(u,t,b,c)
else return A.lb(u,t,b,a,c)},
h9:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.aq(u,t,b,c)
else return A.lb(u,t,b,a,c)},
ha:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ar(u,t,b,c)
else return A.lb(u,t,b,a,c)},
bs:function(a,b){return new P.ey(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
jW:function(a,b,c,d){switch(a){case 5120:return this.aR(b,c,d)
case 5121:return this.aR(b,c,d)
case 5122:return this.aR(b,c,d)
case 5123:return this.aR(b,c,d)
case 5124:return this.aR(b,c,d)
case 5125:return this.aR(b,c,d)
case 5126:return new A.a3(this.a,this.r,c,d)
case 35664:return new A.iS(this.a,this.r,c,d)
case 35665:return new A.O(this.a,this.r,c,d)
case 35666:return new A.iV(this.a,this.r,c,d)
case 35667:return new A.iT(this.a,this.r,c,d)
case 35668:return new A.iU(this.a,this.r,c,d)
case 35669:return new A.iW(this.a,this.r,c,d)
case 35674:return new A.iY(this.a,this.r,c,d)
case 35675:return new A.cP(this.a,this.r,c,d)
case 35676:return new A.aC(this.a,this.r,c,d)
case 35678:return this.h9(b,c,d)
case 35680:return this.ha(b,c,d)
case 35670:throw H.c(this.bs("BOOL",c))
case 35671:throw H.c(this.bs("BOOL_VEC2",c))
case 35672:throw H.c(this.bs("BOOL_VEC3",c))
case 35673:throw H.c(this.bs("BOOL_VEC4",c))
default:throw H.c(P.w("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.bU.prototype={
i:function(a){return this.b}}
A.eg.prototype={}
A.iX.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
q:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.S()},
ki:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r)s+=u[r].i(0)+a
return s},
S:function(){return this.ki("\n")}}
A.P.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.iT.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.iU.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.iW.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.iR.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
sj6:function(a){this.e=H.k(a,"$ib",[P.o],"$ab")}}
A.a3.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.iS.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.O.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.iV.prototype={
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.iY.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.cP.prototype={
aq:function(a){var u=new Float32Array(H.c9(H.k(a,"$ib",[P.r],"$ab")))
C.c.f4(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.aC.prototype={
aq:function(a){var u=new Float32Array(H.c9(H.k(a,"$ib",[P.r],"$ab")))
C.c.f5(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.aq.prototype={
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.ar.prototype={
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.ki.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cT(u.b,b).cT(u.d.cT(u.c,b),c)
a.sa3(0,new V.a4(t.a,t.b,t.c))
a.sf_(t.B(0,Math.sqrt(t.H(t))))
u=1-b
s=1-c
a.se0(new V.b8(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
u=this.f
if(u!=null)u.$3(a,b,c)},
$S:8}
F.ks.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:31}
F.ku.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=6.283185307179586*b
t=Math.sin(u)
s=Math.cos(u)
r=-1+c*2
q=this.a.$2(b,c)
if(typeof q!=="number")return H.F(q)
t=-t*q
p=s*q
a.sa3(0,new V.a4(t,p,r))
p=new V.J(t,p,r)
a.sf_(p.B(0,Math.sqrt(p.H(p))))
a.se0(new V.b8(1-c,2+c,-1,-1))},
$S:8}
F.kv.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:23}
F.kw.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:23}
F.kP.prototype={
$2:function(a,b){return 0},
$S:31}
F.kQ.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.F(u)
t=a.f
s=new V.J(t.a,t.b,t.c)
u=s.B(0,Math.sqrt(s.H(s))).u(0,this.b+u)
a.sa3(0,new V.a4(u.a,u.b,u.c))},
$S:8}
F.kR.prototype={
$1:function(a){return new V.a4(Math.cos(a),Math.sin(a),0)},
$S:19}
F.kD.prototype={
$1:function(a){var u,t,s
u=this.a*a
t=2+Math.cos(u)
s=this.b*a
return new V.a4(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:19}
F.kt.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.lA(t.$1(u),s)
s=J.ng(J.lA(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.J(s.a,s.b,s.c)
q=s.B(0,Math.sqrt(s.H(s)))
t=$.mj
if(t==null){t=new V.J(1,0,0)
$.mj=t
p=t}else p=t
t=q.aI(!J.U(q,p)?V.mm():p)
o=t.B(0,Math.sqrt(t.H(t)))
t=o.aI(q)
p=t.B(0,Math.sqrt(t.H(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.u(0,t*s)
s=o.u(0,m*s)
a.sa3(0,J.nf(r,new V.a4(t.a-s.a,t.b-s.b,t.c-s.c)))},
$S:8}
F.a9.prototype={
b8:function(){if(!this.gb9()){C.a.R(this.a.a.d.b,this)
this.a.a.a4()}this.ck()
this.cl()
this.iB()},
cp:function(a){this.a=a
C.a.h(a.d.b,this)},
cq:function(a){this.b=a
C.a.h(a.d.c,this)},
iN:function(a){this.c=a
C.a.h(a.d.d,this)},
ck:function(){var u=this.a
if(u!=null){C.a.R(u.d.b,this)
this.a=null}},
cl:function(){var u=this.b
if(u!=null){C.a.R(u.d.c,this)
this.b=null}},
iB:function(){var u=this.c
if(u!=null){C.a.R(u.d.d,this)
this.c=null}},
gb9:function(){return this.a==null||this.b==null||this.c==null},
h1:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cW()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.eF())return
return q.B(0,Math.sqrt(q.H(q)))},
h5:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.t(0,t)
u=new V.J(u.a,u.b,u.c)
q=u.B(0,Math.sqrt(u.H(u)))
u=r.t(0,t)
u=new V.J(u.a,u.b,u.c)
u=q.aI(u.B(0,Math.sqrt(u.H(u))))
return u.B(0,Math.sqrt(u.H(u)))},
cB:function(){if(this.d!=null)return!0
var u=this.h1()
if(u==null){u=this.h5()
if(u==null)return!1}this.d=u
this.a.a.a4()
return!0},
h0:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cW()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.eF())return
return q.B(0,Math.sqrt(q.H(q)))},
h4:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.M().a){u=m.t(0,p)
u=new V.J(u.a,u.b,u.c)
h=u.B(0,Math.sqrt(u.H(u)))
if(j.a-k.a<0)h=h.V(0)}else{g=(u-l.b)/i
u=m.t(0,p).u(0,g).p(0,p).t(0,s)
u=new V.J(u.a,u.b,u.c)
h=u.B(0,Math.sqrt(u.H(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.V(0)}u=this.d
if(u!=null){f=u.B(0,Math.sqrt(u.H(u)))
u=f.aI(h)
u=u.B(0,Math.sqrt(u.H(u))).aI(f)
h=u.B(0,Math.sqrt(u.H(u)))}return h},
cz:function(){if(this.e!=null)return!0
var u=this.h0()
if(u==null){u=this.h4()
if(u==null)return!1}this.e=u
this.a.a.a4()
return!0},
gjO:function(a){if(J.U(this.a,this.b))return!0
if(J.U(this.b,this.c))return!0
if(J.U(this.c,this.a))return!0
return!1},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
G:function(a){var u,t
if(this.gb9())return a+"disposed"
u=a+C.b.ag(J.au(this.a.e),0)+", "+C.b.ag(J.au(this.b.e),0)+", "+C.b.ag(J.au(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
S:function(){return this.G("")}}
F.h1.prototype={}
F.io.prototype={
bc:function(a,b,c){var u,t
u=b.a
u.a.a.C()
u=u.e
t=c.a
t.a.a.C()
if(u==t.e){u=b.b
u.a.a.C()
u=u.e
t=c.b
t.a.a.C()
if(u==t.e){u=b.c
u.a.a.C()
u=u.e
t=c.c
t.a.a.C()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.C()
u=u.e
t=c.b
t.a.a.C()
if(u==t.e){u=b.b
u.a.a.C()
u=u.e
t=c.c
t.a.a.C()
if(u==t.e){u=b.c
u.a.a.C()
u=u.e
t=c.a
t.a.a.C()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.C()
u=u.e
t=c.c
t.a.a.C()
if(u==t.e){u=b.b
u.a.a.C()
u=u.e
t=c.a
t.a.a.C()
if(u==t.e){u=b.c
u.a.a.C()
u=u.e
t=c.b
t.a.a.C()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.bm.prototype={
b8:function(){if(!this.gb9()){C.a.R(this.a.a.c.b,this)
this.a.a.a4()}this.ck()
this.cl()},
cp:function(a){this.a=a
C.a.h(a.c.b,this)},
cq:function(a){this.b=a
C.a.h(a.c.c,this)},
ck:function(){var u=this.a
if(u!=null){C.a.R(u.c.b,this)
this.a=null}},
cl:function(){var u=this.b
if(u!=null){C.a.R(u.c.c,this)
this.b=null}},
gb9:function(){return this.a==null||this.b==null},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
G:function(a){if(this.gb9())return a+"disposed"
return a+C.b.ag(J.au(this.a.e),0)+", "+C.b.ag(J.au(this.b.e),0)},
S:function(){return this.G("")}}
F.hm.prototype={}
F.iQ.prototype={
bc:function(a,b,c){var u,t
u=b.a
u.a.a.C()
u=u.e
t=c.a
t.a.a.C()
if(u==t.e){u=b.b
u.a.a.C()
u=u.e
t=c.b
t.a.a.C()
return u==t.e}else{u=b.a
u.a.a.C()
u=u.e
t=c.b
t.a.a.C()
if(u==t.e){u=b.b
u.a.a.C()
u=u.e
t=c.a
t.a.a.C()
return u==t.e}else return!1}}}
F.bI.prototype={
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ag(J.au(u.e),0)},
S:function(){return this.G("")}}
F.e2.prototype={
gD:function(){var u=this.e
if(u==null){u=D.W()
this.e=u}return u},
bd:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.C()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){q=u[r]
this.a.h(0,q.jQ())}this.a.C()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.C()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bI()
if(m.a==null)H.t(P.w("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.J(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.C()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.C()
o=o.e
if(typeof o!=="number")return o.p()
o+=t
n=n.c
if(o>=n.length)return H.h(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.nJ(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.C()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.C()
o=o.e
if(typeof o!=="number")return o.p()
o+=t
n=n.c
if(o>=n.length)return H.h(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.C()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.cs(k,j,h)}u=this.e
if(u!=null)u.ah(0)},
ax:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.ax()||!1
if(!this.a.ax())t=!1
u=this.e
if(u!=null)u.ah(0)
return t},
kt:function(a,b){var u,t,s,r,q,p
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.d(u.slice(0),[H.u(u,0)])
for(u=[F.ai];t.length!==0;){s=C.a.gke(t)
C.a.eU(t,0)
if(s!=null){r=H.d([],u)
C.a.h(r,s)
for(q=t.length-1;q>=0;--q){if(q>=t.length)return H.h(t,q)
p=t[q]
if(p!=null&&a.bc(0,s,p)){C.a.h(r,p)
C.a.eU(t,q)}}if(r.length>1)b.bd(r)}}this.a.C()
this.c.d1()
this.d.d1()
this.b.kM()
this.c.d2(new F.iQ())
this.d.d2(new F.io())
u=this.e
if(u!=null)u.ah(0)},
jA:function(a){this.kt(new F.jh(),new F.hT())},
cr:function(){return this.jA(null)},
cO:function(){var u,t,s,r,q,p
u=this.e
if(u!=null)++u.d
this.d.cO()
for(t=this.a.c.length-1;t>=0;--t){u=this.a.c
if(t>=u.length)return H.h(u,t)
s=u[t]
u=s.r
if(u!=null)s.seH(new V.J(-u.a,-u.b,-u.c))
u=s.x
if(u!=null){r=-u.a
q=-u.b
u=-u.c
p=new V.J(r,q,u).B(0,Math.sqrt(r*r+q*q+u*u))
if(!J.U(s.x,p)){s.x=p
u=s.a
if(u!=null){u=u.e
if(u!=null)u.J(null)}}}}u=this.e
if(u!=null)u.ah(0)},
jJ:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.bu()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bt().a)!==0)++r
if((s&$.bs().a)!==0)++r
if((s&$.bv().a)!==0)++r
if((s&$.bw().a)!==0)++r
if((s&$.df().a)!==0)++r
if((s&$.dg().a)!==0)++r
if((s&$.cj().a)!==0)++r
if((s&$.br().a)!==0)++r
q=a1.gdd(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.r
o=H.d(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.d(t,[Z.dm])
for(m=0,l=0;l<r;++l){k=a1.jE(l)
j=k.gdd(k)
C.a.n(n,l,new Z.dm(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.h(t,i)
h=t[i].kr(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.n(o,g,h[f]);++g}}m+=j}H.k(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.c.aw(t,34962,e)
C.c.e3(t,34962,new Float32Array(H.c9(o)),35044)
C.c.aw(t,34962,null)
d=new Z.dn(new Z.ep(34962,e),n,a1)
d.shm(H.d([],[Z.bF]))
if(this.b.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.C()
C.a.h(c,b.e)}a=Z.le(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bF(0,c.length,a))}if(this.c.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.C()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.C()
C.a.h(c,b.e)}a=Z.le(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bF(1,c.length,a))}if(this.d.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.C()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.C()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.h(b,l)
b=b[l].c
b.a.a.C()
C.a.h(c,b.e)}a=Z.le(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bF(4,c.length,a))}return d},
i:function(a){var u=H.d([],[P.e])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.G("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.G("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.G("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.G("   "))}return C.a.m(u,"\n")},
ao:function(a){var u=this.e
if(u!=null)u.J(a)},
a4:function(){return this.ao(null)},
$ipu:1}
F.ig.prototype={
jw:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[F.ai],"$ab")
u=H.d([],[F.a9])
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
C.a.h(u,F.cs(s,p,o))}}return u},
jx:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,"$ib",[F.ai],"$ab")
u=H.d([],[F.a9])
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
C.a.h(u,F.cs(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cs(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cs(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cs(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
d2:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.bc(0,p,n)){p.b8()
break}}}}},
d1:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.gjO(s)
if(t)s.b8()}},
ax:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].cB())s=!1
return s},
cA:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].cz())s=!1
return s},
cO:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.J(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.J(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.J(null)}},
i:function(a){return this.S()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
S:function(){return this.G("")},
shg:function(a){this.b=H.k(a,"$ib",[F.a9],"$ab")}}
F.ih.prototype={
gl:function(a){return this.b.length},
d2:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.bc(0,p,n)){p.b8()
break}}}}},
d1:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=J.U(s.a,s.b)
if(t)s.b8()}},
i:function(a){return this.S()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.h(r,s)
C.a.h(u,r[s].G(a+(""+s+". ")))}return C.a.m(u,"\n")},
S:function(){return this.G("")},
shq:function(a){this.b=H.k(a,"$ib",[F.bm],"$ab")}}
F.ii.prototype={
gl:function(a){return this.b.length},
kM:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.R(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.J(null)}s=t.a
if(s!=null){C.a.R(s.b.b,t)
t.a=null}}}},
i:function(a){return this.S()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
S:function(){return this.G("")},
scg:function(a){this.b=H.k(a,"$ib",[F.bI],"$ab")}}
F.ai.prototype={
cE:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.eo(this.cx,s,p,u,t,r,q,a,o)},
jQ:function(){return this.cE(null)},
sa3:function(a,b){var u
if(!J.U(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a4()}},
seH:function(a){var u
a=a==null?null:a.B(0,Math.sqrt(a.H(a)))
if(!J.U(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a4()}},
sf_:function(a){var u
if(!J.U(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a4()}},
se0:function(a){var u
if(!J.U(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a4()}},
kr:function(a){var u,t
if(a.w(0,$.bu())){u=this.f
t=[P.r]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.bt())){u=this.r
t=[P.r]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.bs())){u=this.x
t=[P.r]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.bv())){u=this.y
t=[P.r]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.w(0,$.bw())){u=this.z
t=[P.r]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.df())){u=this.Q
t=[P.r]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.dg())){u=this.Q
t=[P.r]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.w(0,$.cj()))return H.d([this.ch],[P.r])
else if(a.w(0,$.br())){u=this.cx
t=[P.r]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.r])},
cB:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cW()
this.d.O(0,new F.jm(u))
u=u.a
this.r=u.B(0,Math.sqrt(u.H(u)))
u=this.a
if(u!=null){u.a4()
u=this.a.e
if(u!=null)u.ah(0)}return!0},
cz:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cW()
this.d.O(0,new F.jl(u))
u=u.a
this.x=u.B(0,Math.sqrt(u.H(u)))
u=this.a
if(u!=null){u.a4()
u=this.a.e
if(u!=null)u.ah(0)}return!0},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
G:function(a){var u,t,s
u=H.d([],[P.e])
C.a.h(u,C.b.ag(J.au(this.e),0))
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
C.a.h(u,V.Q(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.m(u,", ")
return a+"{"+s+"}"},
S:function(){return this.G("")}}
F.jm.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:6}
F.jl.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:6}
F.jc.prototype={
C:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.h(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.w("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a4()
return!0},
jz:function(a,b,c,d,e,f,g,h,i){var u=F.eo(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
jy:function(a,b,c,d,e,f){return this.jz(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
ax:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].cB()
return!0},
cA:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].cz()
return!0},
jK:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.B(0,Math.sqrt(p*p+o*o+n*n))
if(!J.U(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.J(null)}}}}return!0},
i:function(a){return this.S()},
G:function(a){var u,t,s,r
this.C()
u=H.d([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
S:function(){return this.G("")},
sj7:function(a){this.c=H.k(a,"$ib",[F.ai],"$ab")}}
F.jd.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b<t){if(b<0)return H.h(u,b)
return u[b]}b-=t
u=this.c
s=u.length
if(b<s){if(b<0)return H.h(u,b)
return u[b]}b-=s
u=this.d
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
O:function(a,b){H.n(b,{func:1,ret:-1,args:[F.a9]})
C.a.O(this.b,b)
C.a.O(this.c,new F.je(this,b))
C.a.O(this.d,new F.jf(this,b))},
i:function(a){return this.S()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
S:function(){return this.G("")},
shh:function(a){this.b=H.k(a,"$ib",[F.a9],"$ab")},
shi:function(a){this.c=H.k(a,"$ib",[F.a9],"$ab")},
shj:function(a){this.d=H.k(a,"$ib",[F.a9],"$ab")}}
F.je.prototype={
$1:function(a){H.f(a,"$ia9")
if(!J.U(a.a,this.a))this.b.$1(a)},
$S:6}
F.jf.prototype={
$1:function(a){var u
H.f(a,"$ia9")
u=this.a
if(!J.U(a.a,u)&&!J.U(a.b,u))this.b.$1(a)},
$S:6}
F.jg.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.h(u,s)
return u[s]}else{if(b<0)return H.h(u,b)
return u[b]}},
i:function(a){return this.S()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
S:function(){return this.G("")},
shr:function(a){this.b=H.k(a,"$ib",[F.bm],"$ab")},
shs:function(a){this.c=H.k(a,"$ib",[F.bm],"$ab")}}
F.ji.prototype={}
F.jh.prototype={
bc:function(a,b,c){return J.U(b.f,c.f)}}
F.jj.prototype={}
F.hT.prototype={
bd:function(a){var u,t,s,r
H.k(a,"$ib",[F.ai],"$ab")
u=V.cW()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.J(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.B(0,Math.sqrt(u.H(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s)a[s].seH(u)
return}}
F.jk.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.S()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
S:function(){return this.G("")},
scg:function(a){this.b=H.k(a,"$ib",[F.bI],"$ab")}}
O.dM.prototype={
gD:function(){var u=this.dy
if(u==null){u=D.W()
this.dy=u}return u},
ac:function(a){var u
H.f(a,"$iB")
u=this.dy
if(u!=null)u.J(a)},
hM:function(){return this.ac(null)},
dO:function(a){H.f(a,"$iB")
this.a=null
this.ac(a)},
iH:function(){return this.dO(null)},
hG:function(a,b){var u=V.ap
u=new D.bY(a,H.k(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.ac(u)},
hI:function(a,b){var u=V.ap
u=new D.bZ(a,H.k(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.ac(u)},
du:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.f.a6(u.e.length+3,4)*4
s=C.f.a6(u.f.length+3,4)*4
r=C.f.a6(u.r.length+3,4)*4
q=C.f.a6(u.x.length+3,4)*4
p=C.f.a6(u.y.length+3,4)*4
o=C.f.a6(u.z.length+3,4)*4
n=C.f.a6(this.e.a.length+3,4)*4
u=this.f.c
m=this.r.c
l=this.x.c
k=this.y.c
j=this.z.c
i=this.Q.c
h=this.cx.c
g=this.cy.c
f=this.db.c
e="MaterialLight_"+C.f.i(u.a)+C.f.i(m.a)+C.f.i(l.a)+C.f.i(k.a)+C.f.i(j.a)+C.f.i(i.a)+C.f.i(h.a)+C.f.i(g.a)+C.f.i(f.a)
e+"_"
e+"_0"
e+"_00"
e+"_000"
e=e+"_000_"+n+"_"+t+"_"+s+"_"+r+"_"+q+"_"+p+"_"+o
d=h!==C.d||g!==C.d
c=m!==C.d||l!==C.d||k!==C.d||j!==C.d
b=j===C.d
a=!b||d
a0=l!==C.d||k!==C.d||!b||i!==C.d||d
b=i===C.d
a1=!b
a2=u===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h||h===C.h||g===C.h||f===C.h
a3=u===C.i||m===C.i||l===C.i||k===C.i||j===C.i||i===C.i||h===C.i||g===C.i||f===C.i
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.bu()
if(a0){b=$.bt()
a7=new Z.bd(a7.a|b.a)}if(a1){b=$.bs()
a7=new Z.bd(a7.a|b.a)}if(a2){b=$.bv()
a7=new Z.bd(a7.a|b.a)}if(a3){b=$.bw()
a7=new Z.bd(a7.a|b.a)}if(a5){b=$.br()
a7=new Z.bd(a7.a|b.a)}return new A.hC(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
a_:function(a,b){H.k(a,"$ib",[T.e9],"$ab")},
aA:function(a,b){var u,t,s,r
for(u=this.dx.a,u=new J.ay(u,u.length,0,[H.u(u,0)]);u.F();){t=u.d
t.toString
s=$.jb
if(s==null){s=new V.J(0,0,1)
$.jb=s}t.a=s
s=t.b
if(s!=null){r=s.aB(0,b,t)
if(r!=null)t.a=r.d5(t.a)}}},
kO:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.du()
t=a4.fr.j(0,u.an)
if(t==null){t=A.nP(u,a4.a)
s=t.b
if(s.length===0)H.t(P.w("May not cache a shader with no name."))
if(a4.fr.bu(0,s))H.t(P.w('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.n(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.bw
u=a5.e
if(!(u instanceof Z.dn)){a5.e=null
u=null}if(u==null||!u.d.w(0,q)){u=r.r1
if(u)a5.d.ax()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.cA()
o.a.cA()
o=o.e
if(o!=null)o.ah(0)}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.jK()
n=n.e
if(n!=null)n.ah(0)}l=a5.d.jJ(new Z.jo(a4.a),q)
l.aY($.bu()).e=this.a.Q.c
if(u)l.aY($.bt()).e=this.a.cx.c
if(p)l.aY($.bs()).e=this.a.ch.c
if(r.rx)l.aY($.bv()).e=this.a.cy.c
if(o)l.aY($.bw()).e=this.a.db.c
if(r.x1)l.aY($.br()).e=this.a.dx.c
a5.e=l}u=T.e9
k=H.d([],[u])
p=this.a
o=a4.a
C.c.f7(o,p.r)
p.x.ka()
if(r.fx){p=this.a
n=a4.dx
n=n.ga2(n)
p=p.dy
p.toString
p.aq(n.ai(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db
n=n.ga2(n)
m=a4.dx
m=n.u(0,m.ga2(m))
a4.cx=m
n=m}p=p.fr
p.toString
p.aq(n.ai(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gkK()
m=a4.dx
m=n.u(0,m.ga2(m))
a4.ch=m
n=m}p=p.fy
p.toString
p.aq(n.ai(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.aq(C.q.ai(n,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.aq(C.q.ai(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.aq(C.q.ai(n,!0))}if(r.ay>0){j=this.e.a.length
p=this.a.k4
C.c.X(p.a,p.d,j)
for(p=[P.r],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.h(m,i)
m=m[i]
n.toString
H.f(m,"$iap")
n=n.r1
if(i>=n.length)return H.h(n,i)
n=n[i]
h=new Float32Array(H.c9(H.k(m.ai(0,!0),"$ib",p,"$ab")))
C.c.f5(n.a,n.d,!1,h)}}switch(r.a){case C.d:break
case C.j:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.c.A(p.a,p.d,m,g,n)
break
case C.h:this.a_(k,this.f.d)
p=this.a
n=this.f.d
p.al(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
break
case C.i:this.a_(k,this.f.e)
p=this.a
n=this.f.e
p.ad(p.ry,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
break}if(r.k2){switch(r.b){case C.d:break
case C.j:p=this.a
n=this.r.f
p=p.x2
p.toString
m=n.a
g=n.b
n=n.c
C.c.A(p.a,p.d,m,g,n)
break
case C.h:this.a_(k,this.r.d)
p=this.a
n=this.r.d
p.al(p.y1,p.ay,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
break
case C.i:this.a_(k,this.r.e)
p=this.a
n=this.r.e
p.ad(p.y2,p.ay,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
break}switch(r.c){case C.d:break
case C.j:p=this.a
n=this.x.f
p=p.an
p.toString
m=n.a
g=n.b
n=n.c
C.c.A(p.a,p.d,m,g,n)
break
case C.h:this.a_(k,this.x.d)
p=this.a
n=this.x.d
p.al(p.bw,p.bx,n)
n=this.a
p=this.x.f
n=n.an
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
break
case C.i:this.a_(k,this.x.e)
p=this.a
n=this.x.e
p.ad(p.e8,p.bx,n)
n=this.a
p=this.x.f
n=n.an
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
break}switch(r.d){case C.d:break
case C.j:p=this.a
n=this.y.f
p=p.by
p.toString
m=n.a
g=n.b
n=n.c
C.c.A(p.a,p.d,m,g,n)
break
case C.h:this.a_(k,this.y.d)
p=this.a
n=this.y.d
p.al(p.e9,p.bz,n)
n=this.a
p=this.y.f
n=n.by
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
break
case C.i:this.a_(k,this.y.e)
p=this.a
n=this.y.e
p.ad(p.ea,p.bz,n)
n=this.a
p=this.y.f
n=n.by
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
break}switch(r.e){case C.d:break
case C.j:p=this.a
n=this.z.f
p=p.bA
p.toString
m=n.a
g=n.b
n=n.c
C.c.A(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.bC
C.c.U(n.a,n.d,g)
break
case C.h:this.a_(k,this.z.d)
p=this.a
n=this.z.d
p.al(p.eb,p.bB,n)
n=this.a
p=this.z.f
n=n.bA
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bC
C.c.U(p.a,p.d,g)
break
case C.i:this.a_(k,this.z.e)
p=this.a
n=this.z.e
p.ad(p.ec,p.bB,n)
n=this.a
p=this.z.f
n=n.bA
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bC
C.c.U(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.en
C.c.X(p.a,p.d,j)
p=a4.db
f=p.ga2(p)
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cI
if(e>=m.length)return H.h(m,e)
b=m[e]
m=f.d5(c.a)
g=m.a
a=m.b
a0=m.c
a0=m.B(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.c.A(a.a,a.d,g,m,a0)
a0=c.c
m=b.c
C.c.A(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.eo
C.c.X(p.a,p.d,j)
p=a4.db
f=p.ga2(p)
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cJ
if(e>=m.length)return H.h(m,e)
b=m[e]
m=c.gbh(c)
g=b.b
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=f.bk(c.gbh(c))
g=b.c
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gam(c)
g=b.d
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gcs()
g=b.e
C.c.U(g.a,g.d,m)
m=c.gct()
g=b.f
C.c.U(g.a,g.d,m)
m=c.gcu()
g=b.r
C.c.U(g.a,g.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.ep
C.c.X(p.a,p.d,j)
p=a4.db
f=p.ga2(p)
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cK
if(e>=m.length)return H.h(m,e)
b=m[e]
m=c.gbh(c)
g=b.b
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gcG(c).la()
g=b.c
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=f.bk(c.gbh(c))
g=b.d
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gam(c)
g=b.e
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gl8()
g=b.f
C.c.U(g.a,g.d,m)
m=c.gl7()
g=b.r
C.c.U(g.a,g.d,m)
m=c.gcs()
g=b.x
C.c.U(g.a,g.d,m)
m=c.gct()
g=b.y
C.c.U(g.a,g.d,m)
m=c.gcu()
g=b.z
C.c.U(g.a,g.d,m);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.eq
C.c.X(p.a,p.d,j)
p=a4.db
f=p.ga2(p)
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
g=this.a.cL
if(e>=g.length)return H.h(g,e)
b=g[e]
g=c.gbi()
H.k(k,"$ib",m,"$ab")
if(!C.a.a0(k,g)){g.sba(0,k.length)
C.a.h(k,g)}g=c.gcG(c)
a=b.d
C.c.A(a.a,a.d,g.a,g.b,g.c)
g=c.gbQ()
a=b.b
C.c.A(a.a,a.d,g.a,g.b,g.c)
g=c.gbO(c)
a=b.c
C.c.A(a.a,a.d,g.a,g.b,g.c)
g=f.d5(c.gcG(c))
a=g.a
a0=g.b
a1=g.c
a1=g.B(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.c.A(a0.a,a0.d,a,g,a1)
a1=c.gam(c)
g=b.f
C.c.A(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gbi()
g=a1.gbb(a1)
if(!g){g=b.x
C.c.X(g.a,g.d,1)}else{g=b.r
a=a1.gbb(a1)
a0=g.a
g=g.d
if(!a)C.c.X(a0,g,0)
else C.c.X(a0,g,a1.gba(a1))
g=b.x
C.c.X(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.er
C.c.X(p.a,p.d,j)
p=a4.db
f=p.ga2(p)
for(p=this.dx.y,n=p.length,m=[P.r],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
a=this.a.cM
if(e>=a.length)return H.h(a,e)
b=a[e]
a=c.gbi()
H.k(k,"$ib",g,"$ab")
if(!C.a.a0(k,a)){a.sba(0,k.length)
C.a.h(k,a)}a2=f.u(0,c.ga2(c))
a=c.ga2(c)
a0=$.cF
if(a0==null){a0=new V.a4(0,0,0)
$.cF=a0}a0=a.bk(a0)
a=b.b
C.c.A(a.a,a.d,a0.a,a0.b,a0.c)
a=$.cF
if(a==null){a=new V.a4(0,0,0)
$.cF=a}a=a2.bk(a)
a0=b.c
C.c.A(a0.a,a0.d,a.a,a.b,a.c)
a=a2.eE(0)
a0=b.d
h=new Float32Array(H.c9(H.k(new V.dO(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).ai(0,!0),"$ib",m,"$ab")))
C.c.f4(a0.a,a0.d,!1,h)
a0=c.gam(c)
a=b.e
C.c.A(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gbi()
a=a0.gbb(a0)
if(!a){a=b.r
C.c.X(a.a,a.d,1)}else{a=b.f
a1=a0.gbb(a0)
a3=a.a
a=a.d
if(!a1)C.c.X(a3,a,0)
else C.c.X(a3,a,a0.gba(a0))
a=b.r
C.c.X(a.a,a.d,0)}a=c.gcs()
a0=b.x
C.c.U(a0.a,a0.d,a)
a=c.gct()
a0=b.y
C.c.U(a0.a,a0.d,a)
a=c.gcu()
a0=b.z
C.c.U(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.es
C.c.X(p.a,p.d,j)
p=a4.db
f=p.ga2(p)
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cN
if(e>=m.length)return H.h(m,e)
b=m[e]
m=c.gbi()
H.k(k,"$ib",u,"$ab")
if(!C.a.a0(k,m)){m.sba(0,k.length)
C.a.h(k,m)}m=c.gbh(c)
g=b.b
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gcG(c)
g=b.c
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gbQ()
g=b.d
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gbO(c)
g=b.e
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=f.bk(c.gbh(c))
g=b.f
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gbi()
g=m.gbb(m)
if(!g){m=b.x
C.c.X(m.a,m.d,1)}else{g=b.r
a=m.gbb(m)
a0=g.a
g=g.d
if(!a)C.c.X(a0,g,0)
else C.c.X(a0,g,m.gba(m))
m=b.x
C.c.X(m.a,m.d,0)}m=c.gam(c)
g=b.y
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.glb()
g=b.z
C.c.U(g.a,g.d,m)
m=c.glc()
g=b.Q
C.c.U(g.a,g.d,m)
m=c.gcs()
g=b.ch
C.c.U(g.a,g.d,m)
m=c.gct()
g=b.cx
C.c.U(g.a,g.d,m)
m=c.gcu()
g=b.cy
C.c.U(g.a,g.d,m);++e}}}switch(r.f){case C.d:break
case C.j:break
case C.h:this.a_(k,this.Q.d)
u=this.a
p=this.Q.d
u.al(u.ed,u.bD,p)
break
case C.i:this.a_(k,this.Q.e)
u=this.a
p=this.Q.e
u.ad(u.ee,u.bD,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db
p=p.ga2(p).eE(0)
a4.Q=p}u=u.id
u.toString
u.aq(p.ai(0,!0))}if(r.dy){this.a_(k,this.ch)
u=this.a
p=this.ch
u.ad(u.ef,u.eg,p)
switch(r.r){case C.d:break
case C.j:u=this.a
p=this.cx.f
u=u.bE
u.toString
n=p.a
m=p.b
p=p.c
C.c.A(u.a,u.d,n,m,p)
break
case C.h:this.a_(k,this.cx.d)
u=this.a
p=this.cx.d
u.al(u.eh,u.bF,p)
p=this.a
u=this.cx.f
p=p.bE
p.toString
n=u.a
m=u.b
u=u.c
C.c.A(p.a,p.d,n,m,u)
break
case C.i:this.a_(k,this.cx.e)
u=this.a
p=this.cx.e
u.ad(u.ei,u.bF,p)
p=this.a
u=this.cx.f
p=p.bE
p.toString
n=u.a
m=u.b
u=u.c
C.c.A(p.a,p.d,n,m,u)
break}switch(r.x){case C.d:break
case C.j:u=this.a
p=this.cy.f
u=u.bH
u.toString
n=p.a
m=p.b
p=p.c
C.c.A(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.bG
C.c.U(p.a,p.d,m)
break
case C.h:this.a_(k,this.cy.d)
u=this.a
p=this.cy.d
u.al(u.ej,u.bI,p)
p=this.a
u=this.cy.f
p=p.bH
p.toString
n=u.a
m=u.b
u=u.c
C.c.A(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bG
C.c.U(u.a,u.d,m)
break
case C.i:this.a_(k,this.cy.e)
u=this.a
p=this.cy.e
u.ad(u.ek,u.bI,p)
p=this.a
u=this.cy.f
p=p.bH
p.toString
n=u.a
m=u.b
u=u.c
C.c.A(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bG
C.c.U(u.a,u.d,m)
break}}u=r.y
p=u!==C.d
if(p){switch(u){case C.d:break
case C.j:u=this.a
n=this.db.f
u=u.bJ
C.c.U(u.a,u.d,n)
break
case C.h:this.a_(k,this.db.d)
u=this.a
n=this.db.d
u.al(u.el,u.bK,n)
n=this.a
u=this.db.f
n=n.bJ
C.c.U(n.a,n.d,u)
break
case C.i:this.a_(k,this.db.e)
u=this.a
n=this.db.e
u.ad(u.em,u.bK,n)
n=this.a
u=this.db.f
n=n.bJ
C.c.U(n.a,n.d,u)
break}C.c.cH(o,3042)
C.c.jI(o,770,771)}for(i=0;i<k.length;++i)k[i].bt(a4)
u=a5.e
u.bt(a4)
u.aZ(a4)
u.f3(a4)
if(p)C.c.k5(o,3042)
for(i=0;i<k.length;++i)k[i].f3(a4)
u=this.a
u.toString
C.c.f7(o,null)
u.x.k6()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.du().an},
sh3:function(a){this.e=H.k(a,"$ia6",[V.ap],"$aa6")}}
O.hA.prototype={}
O.dN.prototype={
aS:function(){}}
O.hB.prototype={}
O.b5.prototype={
dQ:function(a){var u,t
if(!J.U(this.f,a)){u=this.f
this.f=a
t=new D.N(this.b+".color",u,a,this,[V.a2])
t.b=!0
this.a.ac(t)}},
aS:function(){this.fz()
this.dQ(new V.a2(1,1,1))},
sam:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.aS()
u=this.a
u.a=null
u.ac(null)}this.dQ(b)}}
O.hD.prototype={
iM:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.M().a)){this.ch=a
u=new D.N(this.b+".refraction",u,a,this,[P.r])
u.b=!0
this.a.ac(u)}},
aS:function(){this.bX()
this.iM(1)}}
O.hE.prototype={
cm:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.M().a)){this.ch=a
u=new D.N(this.b+".shininess",u,a,this,[P.r])
u.b=!0
this.a.ac(u)}},
aS:function(){this.bX()
this.cm(100)}}
O.c6.prototype={}
T.e9.prototype={}
T.iE.prototype={}
V.bh.prototype={
aK:function(a,b){return!0},
i:function(a){return"all"},
$iaz:1}
V.az.prototype={}
V.dL.prototype={
aK:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)if(u[s].aK(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa9:function(a){this.a=H.k(a,"$ib",[V.az],"$ab")},
$iaz:1}
V.av.prototype={
aK:function(a,b){return!this.fw(0,b)},
i:function(a){return"!["+this.de(0)+"]"}}
V.i4.prototype={
aK:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.c2(this.a)
t=H.c2(this.b)
return u+".."+t},
$iaz:1}
V.ie.prototype={
fE:function(a){var u,t
if(a.a.length<=0)throw H.c(P.w("May not create a SetMatcher with zero characters."))
u=new H.aP([P.o,P.T])
for(t=new H.cy(a,a.gl(a),0,[H.at(a,"y",0)]);t.F();)u.n(0,t.d,!0)
this.siK(u)},
aK:function(a,b){return this.a.bu(0,b)},
i:function(a){var u=this.a
return P.e5(u.ga7(u),0,null)},
siK:function(a){this.a=H.k(a,"$iE",[P.o,P.T],"$aE")},
$iaz:1}
V.cJ.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cN(this.a.k(0,b))
r.sa9(H.d([],[V.az]))
r.c=!1
C.a.h(this.c,r)
return r},
kd:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.aK(0,a))return r}return},
i:function(a){return this.b},
sj2:function(a){this.c=H.k(a,"$ib",[V.cN],"$ab")}}
V.ee.prototype={
i:function(a){var u,t
u=H.lv(this.b,"\n","\\n")
t=H.lv(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cM.prototype={
aL:function(a,b,c){var u,t,s
H.k(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.C)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
siC:function(a){var u=P.e
this.c=H.k(a,"$iE",[u,u],"$aE")}}
V.iH.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cJ(this,b)
u.sj2(H.d([],[V.cN]))
u.d=null
this.a.n(0,b,u)}return u},
T:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cM(this,a)
t=P.e
u.siC(new H.aP([t,t]))
this.b.n(0,a,u)}return u},
f2:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.d([],[V.ee])
t=this.c
s=[P.o]
r=H.d([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.b.I(a,o)
m=t.kd(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.e5(r,0,null)
throw H.c(P.w("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.d([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.e5(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.ee(j==null?k.b:j,l,o)}++o}}},
siU:function(a){this.a=H.k(a,"$iE",[P.e,V.cJ],"$aE")},
siW:function(a){this.b=H.k(a,"$iE",[P.e,V.cM],"$aE")}}
V.cN.prototype={
i:function(a){return this.b.b+": "+this.de(0)}}
X.dq.prototype={$ibo:1}
X.h8.prototype={
gD:function(){var u=this.x
if(u==null){u=D.W()
this.x=u}return u}}
X.dV.prototype={
gD:function(){var u=this.f
if(u==null){u=D.W()
this.f=u}return u},
aQ:function(a){var u
H.f(a,"$iB")
u=this.f
if(u!=null)u.J(a)},
fY:function(){return this.aQ(null)},
sbe:function(a){var u,t
if(!J.U(this.b,a)){u=this.b
if(u!=null)u.gD().R(0,this.gdi())
t=this.b
this.b=a
if(a!=null)a.gD().h(0,this.gdi())
u=new D.N("mover",t,this.b,this,[U.ad])
u.b=!0
this.aQ(u)}},
$ibo:1,
$idq:1}
X.e8.prototype={}
V.bA.prototype={
bo:function(a){this.b=new P.hb(C.X)
this.c=null
this.sc5(H.d([],[[P.b,W.aE]]))},
P:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.d([],[W.aE]))
t=a.split("\n")
for(u=t.length,s=[W.aE],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.d([],s))
o=document.createElement("div")
o.className="codePart"
H.H(p)
n=this.b.h8(p,0,p.length)
m=n==null?p:n
C.k.fn(o,H.lv(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaz(this.d),o)}},
eO:function(a,b){var u,t,s,r
H.k(b,"$ib",[P.e],"$ab")
this.sc5(H.d([],[[P.b,W.aE]]))
u=C.a.m(b,"\n")
t=this.c
if(t==null){t=this.bv()
this.c=t}for(t=t.f2(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)this.bN(t[r])},
sc5:function(a){this.d=H.k(a,"$ib",[[P.b,W.aE]],"$ab")}}
V.kO.prototype={
$1:function(a){H.f(a,"$iba")
P.lu(C.e.f1(this.a.gkj(),2)+" fps")},
$S:50}
V.fO.prototype={
bN:function(a){switch(a.a){case"Class":this.P(a.b,"#551")
break
case"Comment":this.P(a.b,"#777")
break
case"Id":this.P(a.b,"#111")
break
case"Num":this.P(a.b,"#191")
break
case"Reserved":this.P(a.b,"#119")
break
case"String":this.P(a.b,"#171")
break
case"Symbol":this.P(a.b,"#616")
break
case"Type":this.P(a.b,"#B11")
break
case"Whitespace":this.P(a.b,"#111")
break}},
bv:function(){var u,t,s,r
u=V.iI()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.x(new H.v("_"))
C.a.h(t.a,s)
s=V.a0("a","z")
C.a.h(t.a,s)
s=V.a0("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.x(new H.v("_"))
C.a.h(s.a,t)
t=V.a0("0","9")
C.a.h(s.a,t)
t=V.a0("a","z")
C.a.h(s.a,t)
t=V.a0("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Int")
s=V.a0("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").m(0,"Int")
t=V.a0("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").m(0,"FloatDot")
s=V.x(new H.v("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.a0("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.a0("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Sym")
t=V.x(new H.v("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").m(0,"Sym")
s=V.x(new H.v("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"OpenDoubleStr")
t=V.x(new H.v('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenDoubleStr").m(0,"CloseDoubleStr")
s=V.x(new H.v('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenDoubleStr").m(0,"EscDoubleStr")
t=V.x(new H.v("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscDoubleStr").m(0,"OpenDoubleStr")
s=V.x(new H.v('"'))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenDoubleStr").m(0,"OpenDoubleStr").a,new V.bh())
s=u.k(0,"Start").m(0,"OpenSingleStr")
t=V.x(new H.v("'"))
C.a.h(s.a,t)
t=u.k(0,"OpenSingleStr").m(0,"CloseSingleStr")
s=V.x(new H.v("'"))
C.a.h(t.a,s)
s=u.k(0,"OpenSingleStr").m(0,"EscSingleStr")
t=V.x(new H.v("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscSingleStr").m(0,"OpenSingleStr")
s=V.x(new H.v("'"))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenSingleStr").m(0,"OpenSingleStr").a,new V.bh())
s=u.k(0,"Start").m(0,"Slash")
t=V.x(new H.v("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"Comment")
s=V.x(new H.v("/"))
C.a.h(t.a,s)
s=u.k(0,"Comment").m(0,"EndComment")
t=V.x(new H.v("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").m(0,"Comment")
s=new V.av()
r=[V.az]
s.sa9(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.v("\n"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"MLComment")
s=V.x(new H.v("*"))
C.a.h(t.a,s)
s=u.k(0,"MLComment").m(0,"MLCStar")
t=V.x(new H.v("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").m(0,"MLComment")
s=new V.av()
s.sa9(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.v("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").m(0,"EndComment")
s=V.x(new H.v("/"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Whitespace")
t=V.x(new H.v(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Whitespace").m(0,"Whitespace")
s=V.x(new H.v(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Int")
s.d=s.a.T("Num")
s=u.k(0,"Float")
s.d=s.a.T("Num")
s=u.k(0,"Sym")
s.d=s.a.T("Symbol")
s=u.k(0,"CloseDoubleStr")
s.d=s.a.T("String")
s=u.k(0,"CloseSingleStr")
s.d=s.a.T("String")
s=u.k(0,"EndComment")
s.d=s.a.T("Comment")
s=u.k(0,"Whitespace")
s.d=s.a.T("Whitespace")
s=u.k(0,"Id")
t=s.a.T("Id")
s.d=t
s=[P.e]
t.aL(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aL(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aL(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.h9.prototype={
bN:function(a){switch(a.a){case"Builtin":this.P(a.b,"#411")
break
case"Comment":this.P(a.b,"#777")
break
case"Id":this.P(a.b,"#111")
break
case"Num":this.P(a.b,"#191")
break
case"Preprocess":this.P(a.b,"#737")
break
case"Reserved":this.P(a.b,"#119")
break
case"Symbol":this.P(a.b,"#611")
break
case"Type":this.P(a.b,"#171")
break
case"Whitespace":this.P(a.b,"#111")
break}},
bv:function(){var u,t,s,r
u=V.iI()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.x(new H.v("_"))
C.a.h(t.a,s)
s=V.a0("a","z")
C.a.h(t.a,s)
s=V.a0("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.x(new H.v("_"))
C.a.h(s.a,t)
t=V.a0("0","9")
C.a.h(s.a,t)
t=V.a0("a","z")
C.a.h(s.a,t)
t=V.a0("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Int")
s=V.a0("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").m(0,"Int")
t=V.a0("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").m(0,"FloatDot")
s=V.x(new H.v("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.a0("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.a0("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Sym")
t=V.x(new H.v("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").m(0,"Sym")
s=V.x(new H.v("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Slash")
t=V.x(new H.v("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"Comment")
s=V.x(new H.v("/"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Slash").m(0,"Sym").a,new V.bh())
s=u.k(0,"Comment").m(0,"EndComment")
t=V.x(new H.v("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").m(0,"Comment")
s=new V.av()
r=[V.az]
s.sa9(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.v("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Preprocess")
s=V.x(new H.v("#"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").m(0,"Preprocess")
t=new V.av()
t.sa9(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("\n"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").m(0,"EndPreprocess")
t=V.x(new H.v("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Whitespace")
s=V.x(new H.v(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Whitespace").m(0,"Whitespace")
t=V.x(new H.v(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Int")
t.d=t.a.T("Num")
t=u.k(0,"Float")
t.d=t.a.T("Num")
t=u.k(0,"Sym")
t.d=t.a.T("Symbol")
t=u.k(0,"EndComment")
t.d=t.a.T("Comment")
t=u.k(0,"EndPreprocess")
t.d=t.a.T("Preprocess")
t=u.k(0,"Whitespace")
t.d=t.a.T("Whitespace")
t=u.k(0,"Id")
s=t.a.T("Id")
t.d=s
t=[P.e]
s.aL(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aL(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aL(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return u}}
V.ha.prototype={
bN:function(a){switch(a.a){case"Attr":this.P(a.b,"#911")
this.P("=","#111")
break
case"Id":this.P(a.b,"#111")
break
case"Other":this.P(a.b,"#111")
break
case"Reserved":this.P(a.b,"#119")
break
case"String":this.P(a.b,"#171")
break
case"Symbol":this.P(a.b,"#616")
break}},
bv:function(){var u,t,s
u=V.iI()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.x(new H.v("_"))
C.a.h(t.a,s)
s=V.a0("a","z")
C.a.h(t.a,s)
s=V.a0("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.x(new H.v("_"))
C.a.h(s.a,t)
t=V.a0("0","9")
C.a.h(s.a,t)
t=V.a0("a","z")
C.a.h(s.a,t)
t=V.a0("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Id").m(0,"Attr")
s=V.x(new H.v("="))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Sym")
s=V.x(new H.v("</\\-!>="))
C.a.h(t.a,s)
s=u.k(0,"Sym").m(0,"Sym")
t=V.x(new H.v("</\\-!>="))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"OpenStr")
s=V.x(new H.v('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenStr").m(0,"CloseStr")
t=V.x(new H.v('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenStr").m(0,"EscStr")
s=V.x(new H.v("\\"))
C.a.h(t.a,s)
s=u.k(0,"EscStr").m(0,"OpenStr")
t=V.x(new H.v('"'))
C.a.h(s.a,t)
C.a.h(u.k(0,"OpenStr").m(0,"OpenStr").a,new V.bh())
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bh())
t=u.k(0,"Other").m(0,"Other")
s=new V.av()
s.sa9(H.d([],[V.az]))
C.a.h(t.a,s)
t=V.x(new H.v('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.a0("a","z")
C.a.h(s.a,t)
t=V.a0("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Sym")
t.d=t.a.T("Symbol")
t=u.k(0,"CloseStr")
t.d=t.a.T("String")
t=u.k(0,"Id")
s=t.a.T("Id")
t.d=s
s.aL(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
s=u.k(0,"Attr")
s.d=s.a.T("Attr")
s=u.k(0,"Other")
s.d=s.a.T("Other")
return u}}
V.hZ.prototype={
eO:function(a,b){H.k(b,"$ib",[P.e],"$ab")
this.sc5(H.d([],[[P.b,W.aE]]))
this.P(C.a.m(b,"\n"),"#111")},
bN:function(a){},
bv:function(){return}}
V.i2.prototype={
dW:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.n(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.me().gd_().j(0,H.m(u))
if(t==null)if(d){c.$0()
this.dU(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lE(this.c).h(0,q)
o=W.nD("radio")
o.checked=s
o.name=u
u=W.p
W.af(o,"change",H.n(new V.i3(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.F.E(q,o)
n=r.createElement("span")
n.textContent=b
C.F.E(q,n)
J.lE(this.c).h(0,r.createElement("br"))},
b5:function(a,b,c){return this.dW(a,b,c,!1)},
dU:function(a){var u,t,s,r,q
u=P.me()
t=P.e
s=P.nL(u.gd_(),t,t)
s.n(0,this.a,a)
r=u.eV(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.W).iE(t,new P.k0([],[]).d6(""),"",q)}}
V.i3.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dU(this.d)}},
$S:21}
V.ij.prototype={
fG:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.p).E(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.p.E(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.k.E(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.k.E(q,p)}o=u.createElement("div")
this.a=o
C.k.E(q,o)
this.b=null
o=W.p
W.af(u,"scroll",H.n(new V.il(s),{func:1,ret:-1,args:[o]}),!1,o)},
dY:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.e],"$ab")
this.iP()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.f2(C.a.kp(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.k.E(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.k.E(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.k.E(t,o)
break
case"Link":n=p.b
if(H.pk(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.H(m[1])
l.textContent=H.H(m[0])
C.k.E(t,l)}else{k=P.f9(C.I,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.m(k)
l.textContent=n
C.k.E(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.E(t,o)
break}}C.k.E(this.a,t)},
fd:function(a){var u,t,s,r
u=new V.fO("dart")
u.bo("dart")
t=new V.h9("glsl")
t.bo("glsl")
s=new V.ha("html")
s.bo("html")
r=C.a.kf(H.d([u,t,s],[V.bA]),new V.im(a))
if(r!=null)return r
u=new V.hZ("plain")
u.bo("plain")
return u},
dX:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.k(a7,"$ib",[P.e],"$ab")
u=H.d([],[P.o])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.de(r).a5(r,"+")){C.a.n(a7,s,C.b.ar(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a5(r,"-")){C.a.n(a7,s,C.b.ar(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.fd(a5)
q.eO(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.E(o,n)
C.k.E(this.a,o)
m=P.f9(C.I,a4,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lG(null)
i.href="#"+H.m(m)
i.textContent=a4
C.k.E(j,i)
C.w.E(k,j)
C.n.E(l,k)
C.o.E(n,l)
if(t)for(h=a6,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className="codeLineNums"
if(s>=u.length)return H.h(u,s)
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
a.className="codeLineText"
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.C)(r),++a0)C.w.E(a,r[a0])
C.n.E(e,d)
C.n.E(e,c)
C.n.E(e,a)
C.o.E(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.C)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gW(r);a3.F();)C.w.E(c,a3.gN(a3))
C.n.E(e,d)
C.n.E(e,c)
C.o.E(n,e)}},
ju:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[P.e],"$ab")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.k.E(this.a,t)
r=C.o.hn(t,-1)
s=H.f((r&&C.n).dF(r,-1),"$ib9").style
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
o=H.f(C.n.dF(r,-1),"$ib9")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.w).E(o,p)}},
iP:function(){var u,t,s,r
if(this.b!=null)return
u=V.iI()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Bold")
s=V.x(new H.v("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Bold").m(0,"Bold")
s=new V.av()
r=[V.az]
s.sa9(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.v("*"))
C.a.h(s.a,t)
t=u.k(0,"Bold").m(0,"BoldEnd")
s=V.x(new H.v("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Italic")
s=V.x(new H.v("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Italic").m(0,"Italic")
s=new V.av()
s.sa9(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.v("_"))
C.a.h(s.a,t)
t=u.k(0,"Italic").m(0,"ItalicEnd")
s=V.x(new H.v("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Code")
s=V.x(new H.v("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Code").m(0,"Code")
s=new V.av()
s.sa9(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.v("`"))
C.a.h(s.a,t)
t=u.k(0,"Code").m(0,"CodeEnd")
s=V.x(new H.v("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"LinkHead")
s=V.x(new H.v("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"LinkHead").m(0,"LinkTail")
s=V.x(new H.v("|"))
C.a.h(t.a,s)
s=u.k(0,"LinkHead").m(0,"LinkEnd")
t=V.x(new H.v("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkHead").m(0,"LinkHead")
t=new V.av()
t.sa9(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("|]"))
C.a.h(t.a,s)
s=u.k(0,"LinkTail").m(0,"LinkEnd")
t=V.x(new H.v("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkTail").m(0,"LinkTail")
t=new V.av()
t.sa9(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bh())
s=u.k(0,"Other").m(0,"Other")
t=new V.av()
t.sa9(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.T("Bold")
s=u.k(0,"ItalicEnd")
s.d=s.a.T("Italic")
s=u.k(0,"CodeEnd")
s.d=s.a.T("Code")
s=u.k(0,"LinkEnd")
s.d=s.a.T("Link")
s=u.k(0,"Other")
s.d=s.a.T("Other")
this.b=u}}
V.il.prototype={
$1:function(a){P.ma(C.y,new V.ik(this.a))},
$S:21}
V.ik.prototype={
$0:function(){var u,t,s
u=C.e.ap(document.documentElement.scrollTop)
t=this.a.style
s=H.m(-0.01*u)+"px"
t.top=s},
$S:0}
V.im.prototype={
$1:function(a){return H.f(a,"$ibA").a===this.a},
$S:52}
U.kF.prototype={
$0:function(){this.a.saj(0,F.lq(1,null,null,1))},
$S:0}
U.kG.prototype={
$0:function(){this.a.saj(0,F.mI(1,!0,!0,1,40,1))},
$S:0}
U.kH.prototype={
$0:function(){this.a.saj(0,F.mI(1,!0,!1,1,40,0))},
$S:0}
U.kI.prototype={
$0:function(){this.a.saj(0,F.pj(6,null,1,6))},
$S:0}
U.kJ.prototype={
$0:function(){this.a.saj(0,F.mV(30,1,15,0.5))},
$S:0}
U.kK.prototype={
$0:function(){this.a.saj(0,F.pa(120,1,2,12,0.3,3))},
$S:0}
U.kL.prototype={
$1:function(a){var u,t,s,r
H.f(a,"$iB")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.dX("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dX("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:5};(function aliases(){var u=J.a.prototype
u.ft=u.i
u=J.dE.prototype
u.fv=u.i
u=P.i.prototype
u.fu=u.bR
u=W.V.prototype
u.bW=u.ae
u=W.eT.prototype
u.fA=u.av
u=O.dN.prototype
u.fz=u.aS
u=O.b5.prototype
u.bX=u.aS
u=V.dL.prototype
u.fw=u.aK
u.de=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"oR","ok",11)
u(P,"oS","ol",11)
u(P,"oT","om",11)
t(P,"mH","oQ",3)
s(W,"p3",4,null,["$4"],["oo"],20,0)
s(W,"p4",4,null,["$4"],["op"],20,0)
var m
r(m=E.ao.prototype,"geM",0,0,null,["$1","$0"],["eN","kB"],1,0)
r(m,"geK",0,0,null,["$1","$0"],["eL","kA"],1,0)
r(m,"geI",0,0,null,["$1","$0"],["eJ","kx"],1,0)
q(m,"gkv","kw",10)
q(m,"gky","kz",10)
r(m=E.ed.prototype,"gdf",0,0,null,["$1","$0"],["dh","dg"],1,0)
p(m,"gkQ","eW",3)
o(m=X.ek.prototype,"ghX","hY",13)
o(m,"ghJ","hK",13)
o(m,"ghR","hS",4)
o(m,"gi0","i1",27)
o(m,"ghZ","i_",27)
o(m,"gi4","i5",4)
o(m,"gi8","i9",4)
o(m,"ghV","hW",4)
o(m,"gi6","i7",4)
o(m,"ghT","hU",4)
o(m,"gia","ib",37)
o(m,"gic","ie",13)
o(m,"gis","it",12)
o(m,"gio","ip",12)
o(m,"giq","ir",12)
r(D.bC.prototype,"gfM",0,0,null,["$1","$0"],["aD","fN"],1,0)
r(m=D.dH.prototype,"gdJ",0,0,null,["$1","$0"],["dK","i2"],1,0)
o(m,"gih","ii",39)
q(m,"ghD","hE",16)
q(m,"gil","im",16)
n(V.X.prototype,"gl","cS",15)
n(V.J.prototype,"gl","cS",15)
r(m=U.cv.prototype,"gaP",0,0,null,["$1","$0"],["K","a8"],1,0)
q(m,"ghB","hC",32)
q(m,"gij","ik",32)
r(m=U.el.prototype,"gaP",0,0,null,["$1","$0"],["K","a8"],1,0)
o(m,"gc8","c9",2)
o(m,"gca","cb",2)
o(m,"gcc","cd",2)
r(m=U.em.prototype,"gaP",0,0,null,["$1","$0"],["K","a8"],1,0)
o(m,"gc8","c9",2)
o(m,"gca","cb",2)
o(m,"gcc","cd",2)
o(m,"ghu","hv",2)
o(m,"ghw","hx",2)
o(m,"gj0","j1",2)
o(m,"giZ","j_",2)
o(m,"giX","iY",2)
o(U.en.prototype,"ghz","hA",2)
r(m=M.dw.prototype,"gas",0,0,null,["$1","$0"],["aE","fO"],1,0)
q(m,"ghN","hO",10)
q(m,"ghP","hQ",10)
r(m=O.dM.prototype,"ghL",0,0,null,["$1","$0"],["ac","hM"],1,0)
r(m,"giG",0,0,null,["$1","$0"],["dO","iH"],1,0)
q(m,"ghF","hG",30)
q(m,"ghH","hI",30)
r(X.dV.prototype,"gdi",0,0,null,["$1","$0"],["aQ","fY"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.R,null)
s(P.R,[H.l4,J.a,J.ay,P.eG,P.i,H.cy,P.b2,H.bW,H.cV,H.fH,H.i5,H.iN,P.bD,H.cn,H.eY,P.ag,H.hn,H.hp,H.hi,P.f3,P.bf,P.aJ,P.eq,P.iv,P.cK,P.iw,P.ba,P.am,P.kh,P.jV,P.c7,P.eF,P.y,P.k8,P.hv,P.bT,P.hc,P.kf,P.kd,P.T,P.an,P.a5,P.b1,P.hX,P.e4,P.ey,P.h7,P.bE,P.b,P.E,P.L,P.aw,P.e,P.al,P.c8,P.j2,P.jY,W.fK,W.bM,W.D,W.dT,W.eT,W.k3,W.dx,W.aB,W.jU,W.fa,P.k_,P.jP,P.S,O.a6,O.cz,E.fB,E.ao,E.i6,E.ed,Z.ep,Z.jo,Z.dn,Z.bF,Z.bd,D.fE,D.bV,D.B,X.dp,X.dF,X.hk,X.hs,X.aA,X.hL,X.iJ,X.ek,D.bC,D.a8,D.dW,D.e3,D.ea,D.eb,D.ec,V.a2,V.aM,V.fY,V.dO,V.ap,V.aa,V.a4,V.b8,V.e_,V.X,V.J,U.el,U.em,U.en,M.dw,A.dk,A.fu,A.hC,A.cO,A.cS,A.cQ,A.cT,A.cR,A.cU,A.bU,A.eg,A.iX,F.a9,F.h1,F.bm,F.hm,F.bI,F.e2,F.ig,F.ih,F.ii,F.ai,F.jc,F.jd,F.jg,F.ji,F.jj,F.jk,O.c6,O.dN,T.iE,V.bh,V.az,V.dL,V.i4,V.ie,V.cJ,V.ee,V.cM,V.iH,X.dq,X.e8,X.dV,V.bA,V.i2,V.ij])
s(J.a,[J.hg,J.dD,J.dE,J.aO,J.bG,J.bk,H.cB,H.bH,W.j,W.fr,W.bR,W.b_,W.b0,W.Y,W.es,W.fP,W.fQ,W.dt,W.eu,W.dv,W.ew,W.fS,W.p,W.ez,W.aN,W.dA,W.eB,W.cw,W.dJ,W.hF,W.eH,W.eI,W.aQ,W.eJ,W.eM,W.aR,W.eQ,W.dY,W.eS,W.aT,W.eU,W.aU,W.eZ,W.aG,W.f1,W.iG,W.aW,W.f4,W.iL,W.j7,W.fb,W.fd,W.ff,W.fh,W.fj,P.b4,P.eD,P.b7,P.eO,P.i1,P.f_,P.bb,P.f6,P.fv,P.er,P.dl,P.dy,P.dX,P.c4,P.e1,P.eh,P.eW])
s(J.dE,[J.hY,J.bL,J.bl])
t(J.l3,J.aO)
s(J.bG,[J.dC,J.hh])
t(P.hr,P.eG)
s(P.hr,[H.ei,W.jv,W.as,P.h3])
t(H.v,H.ei)
s(P.i,[H.fV,H.hw,H.cX])
s(H.fV,[H.c_,H.ho])
s(P.b2,[H.hx,H.jp])
t(H.hy,H.c_)
t(H.fI,H.fH)
s(P.bD,[H.hU,H.hj,H.j0,H.iP,H.fD,H.ic,P.dU,P.aL,P.j1,P.iZ,P.c5,P.fG,P.fN])
s(H.cn,[H.kS,H.iB,H.kz,H.kA,H.kB,P.jr,P.jq,P.js,P.jt,P.k7,P.k6,P.jC,P.jG,P.jD,P.jE,P.jF,P.jJ,P.jK,P.jI,P.jH,P.ix,P.iy,P.kp,P.jS,P.jR,P.jT,P.hq,P.hu,P.ke,P.fT,P.fU,P.j6,P.j3,P.j4,P.j5,P.k9,P.ka,P.kc,P.kb,P.kl,P.kk,P.km,P.kn,W.fW,W.hH,W.hJ,W.ib,W.iu,W.jB,W.hS,W.hR,W.jW,W.jX,W.k5,W.kg,P.k1,P.kr,P.h4,P.h5,P.fx,E.i7,E.i8,E.i9,E.iF,D.h_,D.h0,F.ki,F.ks,F.ku,F.kv,F.kw,F.kP,F.kQ,F.kR,F.kD,F.kt,F.jm,F.jl,F.je,F.jf,V.kO,V.i3,V.il,V.ik,V.im,U.kF,U.kG,U.kH,U.kI,U.kJ,U.kK,U.kL])
s(H.iB,[H.is,H.cl])
t(P.ht,P.ag)
s(P.ht,[H.aP,W.ju])
t(H.dQ,H.bH)
s(H.dQ,[H.d0,H.d2])
t(H.d1,H.d0)
t(H.cC,H.d1)
t(H.d3,H.d2)
t(H.dR,H.d3)
s(H.dR,[H.hM,H.hN,H.hO,H.hP,H.hQ,H.dS,H.cD])
t(P.jQ,P.kh)
t(P.jO,P.jV)
t(P.f8,P.hv)
t(P.ej,P.f8)
s(P.bT,[P.fz,P.fX])
t(P.bB,P.iw)
s(P.bB,[P.fA,P.hb,P.ja,P.j9])
t(P.j8,P.fX)
s(P.a5,[P.r,P.o])
s(P.aL,[P.c3,P.hd])
t(P.jx,P.c8)
s(W.j,[W.G,W.h2,W.aS,W.d4,W.aV,W.aH,W.d6,W.jn,W.cY,P.fy,P.bQ])
s(W.G,[W.V,W.bz,W.cq,W.cZ])
s(W.V,[W.z,P.q])
s(W.z,[W.dj,W.fs,W.ck,W.by,W.bS,W.aE,W.h6,W.dz,W.cx,W.dG,W.id,W.b9,W.e6,W.e7,W.iA,W.cL])
s(W.b_,[W.co,W.fL,W.fM])
t(W.fJ,W.b0)
t(W.cp,W.es)
t(W.ev,W.eu)
t(W.du,W.ev)
t(W.ex,W.ew)
t(W.fR,W.ex)
t(W.aF,W.bR)
t(W.eA,W.ez)
t(W.ct,W.eA)
t(W.eC,W.eB)
t(W.bX,W.eC)
t(W.dB,W.cq)
t(W.bK,W.p)
s(W.bK,[W.b3,W.ah,W.aX])
t(W.hG,W.eH)
t(W.hI,W.eI)
t(W.eK,W.eJ)
t(W.hK,W.eK)
t(W.eN,W.eM)
t(W.cE,W.eN)
t(W.eR,W.eQ)
t(W.i_,W.eR)
t(W.ia,W.eS)
t(W.d5,W.d4)
t(W.ip,W.d5)
t(W.eV,W.eU)
t(W.iq,W.eV)
t(W.it,W.eZ)
t(W.f2,W.f1)
t(W.iC,W.f2)
t(W.d7,W.d6)
t(W.iD,W.d7)
t(W.f5,W.f4)
t(W.iK,W.f5)
t(W.be,W.ah)
t(W.fc,W.fb)
t(W.jw,W.fc)
t(W.et,W.dv)
t(W.fe,W.fd)
t(W.jL,W.fe)
t(W.fg,W.ff)
t(W.eL,W.fg)
t(W.fi,W.fh)
t(W.jZ,W.fi)
t(W.fk,W.fj)
t(W.k2,W.fk)
t(W.jy,W.ju)
t(W.jz,P.iv)
t(W.lf,W.jz)
t(W.jA,P.cK)
t(W.k4,W.eT)
t(P.k0,P.k_)
t(P.ab,P.jP)
t(P.eE,P.eD)
t(P.hl,P.eE)
t(P.eP,P.eO)
t(P.hV,P.eP)
t(P.cH,P.q)
t(P.f0,P.f_)
t(P.iz,P.f0)
t(P.f7,P.f6)
t(P.iM,P.f7)
t(P.fw,P.er)
t(P.hW,P.bQ)
t(P.eX,P.eW)
t(P.ir,P.eX)
s(E.fB,[Z.dm,A.cI,T.e9])
s(D.B,[D.bY,D.bZ,D.N,X.i0])
s(X.i0,[X.dK,X.bn,X.cA,X.ef])
s(O.a6,[D.dH,U.cv])
s(D.fE,[U.fF,U.ad])
s(U.ad,[U.dr,U.e0])
t(A.hz,A.cI)
s(A.eg,[A.P,A.iT,A.iU,A.iW,A.iR,A.a3,A.iS,A.O,A.iV,A.iY,A.cP,A.aC,A.aq,A.ar])
t(F.io,F.h1)
t(F.iQ,F.hm)
t(F.jh,F.ji)
t(F.hT,F.jj)
t(O.dM,O.c6)
s(O.dN,[O.hA,O.hB,O.b5])
s(O.b5,[O.hD,O.hE])
s(V.dL,[V.av,V.cN])
t(X.h8,X.e8)
s(V.bA,[V.fO,V.h9,V.ha,V.hZ])
u(H.ei,H.cV)
u(H.d0,P.y)
u(H.d1,H.bW)
u(H.d2,P.y)
u(H.d3,H.bW)
u(P.eG,P.y)
u(P.f8,P.k8)
u(W.es,W.fK)
u(W.eu,P.y)
u(W.ev,W.D)
u(W.ew,P.y)
u(W.ex,W.D)
u(W.ez,P.y)
u(W.eA,W.D)
u(W.eB,P.y)
u(W.eC,W.D)
u(W.eH,P.ag)
u(W.eI,P.ag)
u(W.eJ,P.y)
u(W.eK,W.D)
u(W.eM,P.y)
u(W.eN,W.D)
u(W.eQ,P.y)
u(W.eR,W.D)
u(W.eS,P.ag)
u(W.d4,P.y)
u(W.d5,W.D)
u(W.eU,P.y)
u(W.eV,W.D)
u(W.eZ,P.ag)
u(W.f1,P.y)
u(W.f2,W.D)
u(W.d6,P.y)
u(W.d7,W.D)
u(W.f4,P.y)
u(W.f5,W.D)
u(W.fb,P.y)
u(W.fc,W.D)
u(W.fd,P.y)
u(W.fe,W.D)
u(W.ff,P.y)
u(W.fg,W.D)
u(W.fh,P.y)
u(W.fi,W.D)
u(W.fj,P.y)
u(W.fk,W.D)
u(P.eD,P.y)
u(P.eE,W.D)
u(P.eO,P.y)
u(P.eP,W.D)
u(P.f_,P.y)
u(P.f0,W.D)
u(P.f6,P.y)
u(P.f7,W.D)
u(P.er,P.ag)
u(P.eW,P.y)
u(P.eX,W.D)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.by.prototype
C.x=W.bS.prototype
C.k=W.aE.prototype
C.T=W.dt.prototype
C.V=W.dz.prototype
C.W=W.dA.prototype
C.z=W.dB.prototype
C.Y=J.a.prototype
C.a=J.aO.prototype
C.f=J.dC.prototype
C.q=J.dD.prototype
C.e=J.bG.prototype
C.b=J.bk.prototype
C.a4=J.bl.prototype
C.F=W.dG.prototype
C.aa=W.cE.prototype
C.L=J.hY.prototype
C.M=W.dY.prototype
C.c=P.c4.prototype
C.w=W.b9.prototype
C.o=W.e6.prototype
C.n=W.e7.prototype
C.C=J.bL.prototype
C.N=W.be.prototype
C.O=W.cY.prototype
C.Q=new P.fA(!1)
C.P=new P.fz(C.Q)
C.R=new P.hX()
C.S=new P.ja()
C.l=new P.jQ()
C.d=new A.bU(0,"ColorSourceType.None")
C.j=new A.bU(1,"ColorSourceType.Solid")
C.h=new A.bU(2,"ColorSourceType.Texture2D")
C.i=new A.bU(3,"ColorSourceType.TextureCube")
C.y=new P.b1(0)
C.U=new P.b1(5e6)
C.X=new P.hc("element",!0,!1,!1,!1)
C.Z=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.a_=function(hooks) {
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
C.D=function(hooks) { return hooks; }

C.a0=function(getTagFallback) {
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
C.a1=function() {
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
C.a2=function(hooks) {
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
C.a3=function(hooks) {
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
C.E=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.G=H.d(u([127,2047,65535,1114111]),[P.o])
C.r=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.o])
C.a5=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.t=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.o])
C.u=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.o])
C.a6=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.H=H.d(u([]),[P.e])
C.a7=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.o])
C.I=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.o])
C.v=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.o])
C.J=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.o])
C.a8=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.o])
C.K=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.o])
C.A=H.d(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.B=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.a9=new H.fI(0,{},C.H,[P.e,P.e])
C.m=new P.j8(!1)})();(function staticFields(){$.aZ=0
$.cm=null
$.lI=null
$.lj=!1
$.mN=null
$.mF=null
$.mT=null
$.kx=null
$.kC=null
$.ls=null
$.ca=null
$.db=null
$.dc=null
$.lk=!1
$.a1=C.l
$.bj=null
$.l1=null
$.lP=null
$.lO=null
$.lY=null
$.m1=null
$.cF=null
$.m5=null
$.mh=null
$.ml=null
$.mj=null
$.mk=null
$.jb=null
$.mi=null
$.m0=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pq","mX",function(){return H.mM("_$dart_dartClosure")})
u($,"pr","lx",function(){return H.mM("_$dart_js")})
u($,"px","mY",function(){return H.bc(H.iO({
toString:function(){return"$receiver$"}}))})
u($,"py","mZ",function(){return H.bc(H.iO({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pz","n_",function(){return H.bc(H.iO(null))})
u($,"pA","n0",function(){return H.bc(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pD","n3",function(){return H.bc(H.iO(void 0))})
u($,"pE","n4",function(){return H.bc(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pC","n2",function(){return H.bc(H.mc(null))})
u($,"pB","n1",function(){return H.bc(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pG","n6",function(){return H.bc(H.mc(void 0))})
u($,"pF","n5",function(){return H.bc(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pW","ly",function(){return P.oj()})
u($,"q1","dh",function(){return[]})
u($,"pI","n7",function(){return P.og()})
u($,"pX","nb",function(){return H.nQ(H.c9(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))})
u($,"q_","nd",function(){return P.o5("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"q0","ne",function(){return P.oI()})
u($,"pY","nc",function(){return P.lS(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"pZ","lz",function(){return P.l6(P.e,P.bE)})
u($,"pP","na",function(){return Z.aI(0)})
u($,"pJ","n8",function(){return Z.aI(511)})
u($,"pR","bu",function(){return Z.aI(1)})
u($,"pQ","bt",function(){return Z.aI(2)})
u($,"pL","bs",function(){return Z.aI(4)})
u($,"pS","bv",function(){return Z.aI(8)})
u($,"pT","bw",function(){return Z.aI(16)})
u($,"pM","df",function(){return Z.aI(32)})
u($,"pN","dg",function(){return Z.aI(64)})
u($,"pO","n9",function(){return Z.aI(96)})
u($,"pU","cj",function(){return Z.aI(128)})
u($,"pK","br",function(){return Z.aI(256)})
u($,"pp","mW",function(){return new V.fY(1e-9)})
u($,"po","M",function(){return $.mW()})})()
var v={mangledGlobalNames:{o:"int",r:"double",a5:"num",e:"String",T:"bool",L:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.L},{func:1,ret:-1,opt:[D.B]},{func:1,ret:-1,args:[D.B]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ah]},{func:1,ret:P.L,args:[D.B]},{func:1,ret:P.L,args:[F.a9]},{func:1,ret:P.L,args:[,,]},{func:1,ret:P.L,args:[F.ai,P.r,P.r]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.o,[P.i,E.ao]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:-1,args:[W.p]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.r},{func:1,ret:-1,args:[P.o,[P.i,D.a8]]},{func:1,ret:P.e,args:[P.e]},{func:1,args:[,]},{func:1,ret:V.a4,args:[P.r]},{func:1,ret:P.T,args:[W.V,P.e,P.e,W.bM]},{func:1,ret:P.L,args:[W.p]},{func:1,ret:P.T,args:[W.G]},{func:1,ret:P.r,args:[P.r]},{func:1,ret:P.e,args:[P.o]},{func:1,ret:P.T,args:[W.aB]},{func:1,ret:P.T,args:[P.e]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:P.L,args:[,]},{func:1,ret:-1,args:[P.o,[P.i,V.ap]]},{func:1,ret:P.r,args:[P.r,P.r]},{func:1,ret:-1,args:[P.o,[P.i,U.ad]]},{func:1,ret:W.V,args:[W.G]},{func:1,args:[W.p]},{func:1,ret:P.S,args:[,,]},{func:1,ret:P.S,args:[P.o]},{func:1,ret:-1,args:[W.be]},{func:1,ret:P.L,args:[P.e,,]},{func:1,ret:P.T,args:[[P.i,D.a8]]},{func:1,ret:P.L,args:[P.e]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:-1,args:[P.e],opt:[,]},{func:1,ret:-1,args:[P.e,P.o]},{func:1,ret:[P.E,P.e,P.e],args:[[P.E,P.e,P.e],P.e]},{func:1,ret:-1,args:[W.G,W.G]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:[P.aJ,,],args:[,]},{func:1,ret:P.L,args:[,],opt:[P.aw]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,ret:P.L,args:[P.ba]},{func:1,args:[P.e]},{func:1,ret:P.T,args:[V.bA]},{func:1,args:[,P.e]},{func:1,ret:P.L,args:[P.a5]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cB,DataView:H.bH,ArrayBufferView:H.bH,Float32Array:H.cC,Float64Array:H.cC,Int16Array:H.hM,Int32Array:H.hN,Int8Array:H.hO,Uint16Array:H.hP,Uint32Array:H.hQ,Uint8ClampedArray:H.dS,CanvasPixelArray:H.dS,Uint8Array:H.cD,HTMLAudioElement:W.z,HTMLBRElement:W.z,HTMLButtonElement:W.z,HTMLContentElement:W.z,HTMLDListElement:W.z,HTMLDataElement:W.z,HTMLDataListElement:W.z,HTMLDetailsElement:W.z,HTMLDialogElement:W.z,HTMLEmbedElement:W.z,HTMLFieldSetElement:W.z,HTMLHRElement:W.z,HTMLHeadingElement:W.z,HTMLHtmlElement:W.z,HTMLIFrameElement:W.z,HTMLImageElement:W.z,HTMLLIElement:W.z,HTMLLegendElement:W.z,HTMLLinkElement:W.z,HTMLMapElement:W.z,HTMLMediaElement:W.z,HTMLMenuElement:W.z,HTMLMetaElement:W.z,HTMLMeterElement:W.z,HTMLModElement:W.z,HTMLOListElement:W.z,HTMLObjectElement:W.z,HTMLOptGroupElement:W.z,HTMLOptionElement:W.z,HTMLOutputElement:W.z,HTMLParagraphElement:W.z,HTMLParamElement:W.z,HTMLPictureElement:W.z,HTMLPreElement:W.z,HTMLProgressElement:W.z,HTMLQuoteElement:W.z,HTMLScriptElement:W.z,HTMLShadowElement:W.z,HTMLSlotElement:W.z,HTMLSourceElement:W.z,HTMLSpanElement:W.z,HTMLStyleElement:W.z,HTMLTableCaptionElement:W.z,HTMLTableColElement:W.z,HTMLTextAreaElement:W.z,HTMLTimeElement:W.z,HTMLTitleElement:W.z,HTMLTrackElement:W.z,HTMLUListElement:W.z,HTMLUnknownElement:W.z,HTMLVideoElement:W.z,HTMLDirectoryElement:W.z,HTMLFontElement:W.z,HTMLFrameElement:W.z,HTMLFrameSetElement:W.z,HTMLMarqueeElement:W.z,HTMLElement:W.z,AccessibleNodeList:W.fr,HTMLAnchorElement:W.dj,HTMLAreaElement:W.fs,HTMLBaseElement:W.ck,Blob:W.bR,HTMLBodyElement:W.by,HTMLCanvasElement:W.bS,CDATASection:W.bz,CharacterData:W.bz,Comment:W.bz,ProcessingInstruction:W.bz,Text:W.bz,CSSNumericValue:W.co,CSSUnitValue:W.co,CSSPerspective:W.fJ,CSSCharsetRule:W.Y,CSSConditionRule:W.Y,CSSFontFaceRule:W.Y,CSSGroupingRule:W.Y,CSSImportRule:W.Y,CSSKeyframeRule:W.Y,MozCSSKeyframeRule:W.Y,WebKitCSSKeyframeRule:W.Y,CSSKeyframesRule:W.Y,MozCSSKeyframesRule:W.Y,WebKitCSSKeyframesRule:W.Y,CSSMediaRule:W.Y,CSSNamespaceRule:W.Y,CSSPageRule:W.Y,CSSRule:W.Y,CSSStyleRule:W.Y,CSSSupportsRule:W.Y,CSSViewportRule:W.Y,CSSStyleDeclaration:W.cp,MSStyleCSSProperties:W.cp,CSS2Properties:W.cp,CSSImageValue:W.b_,CSSKeywordValue:W.b_,CSSPositionValue:W.b_,CSSResourceValue:W.b_,CSSURLImageValue:W.b_,CSSStyleValue:W.b_,CSSMatrixComponent:W.b0,CSSRotation:W.b0,CSSScale:W.b0,CSSSkew:W.b0,CSSTranslation:W.b0,CSSTransformComponent:W.b0,CSSTransformValue:W.fL,CSSUnparsedValue:W.fM,DataTransferItemList:W.fP,HTMLDivElement:W.aE,XMLDocument:W.cq,Document:W.cq,DOMException:W.fQ,DOMImplementation:W.dt,ClientRectList:W.du,DOMRectList:W.du,DOMRectReadOnly:W.dv,DOMStringList:W.fR,DOMTokenList:W.fS,Element:W.V,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,ProgressEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,ResourceProgressEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aF,FileList:W.ct,FileWriter:W.h2,HTMLFormElement:W.h6,Gamepad:W.aN,HTMLHeadElement:W.dz,History:W.dA,HTMLCollection:W.bX,HTMLFormControlsCollection:W.bX,HTMLOptionsCollection:W.bX,HTMLDocument:W.dB,ImageData:W.cw,HTMLInputElement:W.cx,KeyboardEvent:W.b3,HTMLLabelElement:W.dG,Location:W.dJ,MediaList:W.hF,MIDIInputMap:W.hG,MIDIOutputMap:W.hI,MimeType:W.aQ,MimeTypeArray:W.hK,PointerEvent:W.ah,MouseEvent:W.ah,DragEvent:W.ah,DocumentFragment:W.G,ShadowRoot:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cE,RadioNodeList:W.cE,Plugin:W.aR,PluginArray:W.i_,Range:W.dY,RTCStatsReport:W.ia,HTMLSelectElement:W.id,SourceBuffer:W.aS,SourceBufferList:W.ip,SpeechGrammar:W.aT,SpeechGrammarList:W.iq,SpeechRecognitionResult:W.aU,Storage:W.it,CSSStyleSheet:W.aG,StyleSheet:W.aG,HTMLTableCellElement:W.b9,HTMLTableDataCellElement:W.b9,HTMLTableHeaderCellElement:W.b9,HTMLTableElement:W.e6,HTMLTableRowElement:W.e7,HTMLTableSectionElement:W.iA,HTMLTemplateElement:W.cL,TextTrack:W.aV,TextTrackCue:W.aH,VTTCue:W.aH,TextTrackCueList:W.iC,TextTrackList:W.iD,TimeRanges:W.iG,Touch:W.aW,TouchEvent:W.aX,TouchList:W.iK,TrackDefaultList:W.iL,CompositionEvent:W.bK,FocusEvent:W.bK,TextEvent:W.bK,UIEvent:W.bK,URL:W.j7,VideoTrackList:W.jn,WheelEvent:W.be,Window:W.cY,DOMWindow:W.cY,Attr:W.cZ,CSSRuleList:W.jw,ClientRect:W.et,DOMRect:W.et,GamepadList:W.jL,NamedNodeMap:W.eL,MozNamedAttrMap:W.eL,SpeechRecognitionResultList:W.jZ,StyleSheetList:W.k2,SVGLength:P.b4,SVGLengthList:P.hl,SVGNumber:P.b7,SVGNumberList:P.hV,SVGPointList:P.i1,SVGScriptElement:P.cH,SVGStringList:P.iz,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.bb,SVGTransformList:P.iM,AudioBuffer:P.fv,AudioParamMap:P.fw,AudioTrackList:P.fy,AudioContext:P.bQ,webkitAudioContext:P.bQ,BaseAudioContext:P.bQ,OfflineAudioContext:P.hW,WebGLBuffer:P.dl,WebGLFramebuffer:P.dy,WebGLProgram:P.dX,WebGL2RenderingContext:P.c4,WebGLShader:P.e1,WebGLUniformLocation:P.eh,SQLResultSetRowList:P.ir})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dQ.$nativeSuperclassTag="ArrayBufferView"
H.d0.$nativeSuperclassTag="ArrayBufferView"
H.d1.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.d2.$nativeSuperclassTag="ArrayBufferView"
H.d3.$nativeSuperclassTag="ArrayBufferView"
H.dR.$nativeSuperclassTag="ArrayBufferView"
W.d4.$nativeSuperclassTag="EventTarget"
W.d5.$nativeSuperclassTag="EventTarget"
W.d6.$nativeSuperclassTag="EventTarget"
W.d7.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.mQ,[])
else U.mQ([])})})()
//# sourceMappingURL=test.dart.js.map
