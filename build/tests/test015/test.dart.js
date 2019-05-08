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
a[c]=function(){a[c]=function(){H.pg(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lx(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={ld:function ld(a){this.a=a},
kF:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
lb:function(){return new P.cP("No element")},
nB:function(){return new P.cP("Too many elements")},
u:function u(a){this.a=a},
h7:function h7(){},
c3:function c3(){},
cB:function cB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hG:function hG(a,b,c){this.a=a
this.b=b
this.$ti=c},
hH:function hH(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hI:function hI(a,b,c){this.a=a
this.b=b
this.$ti=c},
d5:function d5(a,b,c){this.a=a
this.b=b
this.$ti=c},
jB:function jB(a,b,c){this.a=a
this.b=b
this.$ti=c},
c_:function c_(){},
d4:function d4(){},
ev:function ev(){},
nt:function(){throw H.c(P.J("Cannot modify unmodifiable Map"))},
ck:function(a){var u,t
u=H.I(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
oZ:function(a){return v.types[H.ae(a)]},
p5:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.V(a).$iL},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.as(a)
if(typeof u!=="string")throw H.c(H.aL(a))
return u},
nX:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.hr(u)
t=u[0]
s=u[1]
return new H.ie(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cL:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nU:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.h(u,3)
t=H.I(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.af(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.F(r,p)|32)>s)return}return parseInt(a,b)},
c6:function(a){return H.nL(a)+H.lu(H.bQ(a),0,null)},
nL:function(a){var u,t,s,r,q,p,o,n,m
u=J.V(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Z||!!u.$id3){p=C.G(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.ck(r.length>1&&C.c.F(r,0)===36?C.c.ax(r,1):r)},
nM:function(){if(!!self.location)return self.location.href
return},
m7:function(a){var u,t,s,r,q
H.kK(a)
u=J.aD(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
nV:function(a){var u,t,s,r
u=H.d([],[P.o])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.D)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.aL(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.b1(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.aL(r))}return H.m7(u)},
m8:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aL(s))
if(s<0)throw H.c(H.aL(s))
if(s>65535)return H.nV(a)}return H.m7(a)},
nW:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c7:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.b1(u,10))>>>0,56320|u&1023)}}throw H.c(P.af(a,0,1114111,null,null))},
c5:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nT:function(a){var u=H.c5(a).getFullYear()+0
return u},
nR:function(a){var u=H.c5(a).getMonth()+1
return u},
nN:function(a){var u=H.c5(a).getDate()+0
return u},
nO:function(a){var u=H.c5(a).getHours()+0
return u},
nQ:function(a){var u=H.c5(a).getMinutes()+0
return u},
nS:function(a){var u=H.c5(a).getSeconds()+0
return u},
nP:function(a){var u=H.c5(a).getMilliseconds()+0
return u},
H:function(a){throw H.c(H.aL(a))},
h:function(a,b){if(a==null)J.aD(a)
throw H.c(H.cg(a,b))},
cg:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aM(!0,b,"index",null)
u=H.ae(J.aD(a))
if(!(b<0)){if(typeof u!=="number")return H.H(u)
t=b>=u}else t=!0
if(t)return P.a_(b,a,"index",null,u)
return P.ic(b,"index",null)},
oV:function(a,b,c){if(a>c)return new P.c8(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c8(a,c,!0,b,"end","Invalid value")
return new P.aM(!0,b,"end",null)},
aL:function(a){return new P.aM(!0,a,null,null)},
oR:function(a){if(typeof a!=="number")throw H.c(H.aL(a))
return a},
c:function(a){var u
if(a==null)a=new P.e6()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mU})
u.name=""}else u.toString=H.mU
return u},
mU:function(){return J.as(this.dartException)},
r:function(a){throw H.c(a)},
D:function(a){throw H.c(P.b0(a))},
be:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.j0(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
j1:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mh:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m1:function(a,b){return new H.i1(a,b==null?null:b.method)},
le:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.hu(a,t,u?null:b.receiver)},
ai:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.kZ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.b1(s,16)&8191)===10)switch(r){case 438:return u.$1(H.le(H.m(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.m1(H.m(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.mX()
p=$.mY()
o=$.mZ()
n=$.n_()
m=$.n2()
l=$.n3()
k=$.n1()
$.n0()
j=$.n5()
i=$.n4()
h=q.ap(t)
if(h!=null)return u.$1(H.le(H.I(t),h))
else{h=p.ap(t)
if(h!=null){h.method="call"
return u.$1(H.le(H.I(t),h))}else{h=o.ap(t)
if(h==null){h=n.ap(t)
if(h==null){h=m.ap(t)
if(h==null){h=l.ap(t)
if(h==null){h=k.ap(t)
if(h==null){h=n.ap(t)
if(h==null){h=j.ap(t)
if(h==null){h=i.ap(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.m1(H.I(t),h))}}return u.$1(new H.jd(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.eh()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aM(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.eh()
return a},
ci:function(a){var u
if(a==null)return new H.fb(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.fb(a)},
oY:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.n(0,a[t],a[s])}return b},
p4:function(a,b,c,d,e,f){H.e(a,"$ibD")
switch(H.ae(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.v("Unsupported number of arguments for wrapped closure"))},
cf:function(a,b){var u
H.ae(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.p4)
a.$identity=u
return u},
ns:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.V(d).$ib){u.$reflectionInfo=d
s=H.nX(u).r}else s=d
r=e?Object.create(new H.iA().constructor.prototype):Object.create(new H.co(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.b_
if(typeof p!=="number")return p.H()
$.b_=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.lQ(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.oZ,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.lO:H.l3
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.lQ(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
np:function(a,b,c,d){var u=H.l3
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lQ:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nr(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.np(t,!r,u,b)
if(t===0){r=$.b_
if(typeof r!=="number")return r.H()
$.b_=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cp
if(q==null){q=H.fP("self")
$.cp=q}return new Function(r+H.m(q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b_
if(typeof r!=="number")return r.H()
$.b_=r+1
o+=r
r="return function("+o+"){return this."
q=$.cp
if(q==null){q=H.fP("self")
$.cp=q}return new Function(r+H.m(q)+"."+H.m(u)+"("+o+");}")()},
nq:function(a,b,c,d){var u,t
u=H.l3
t=H.lO
switch(b?-1:a){case 0:throw H.c(H.o0("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nr:function(a,b){var u,t,s,r,q,p,o,n
u=$.cp
if(u==null){u=H.fP("self")
$.cp=u}t=$.lN
if(t==null){t=H.fP("receiver")
$.lN=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nq(r,!p,s,b)
if(r===1){u="return function(){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+");"
t=$.b_
if(typeof t!=="number")return t.H()
$.b_=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+", "+n+");"
t=$.b_
if(typeof t!=="number")return t.H()
$.b_=t+1
return new Function(u+t+"}")()},
lx:function(a,b,c,d,e,f,g){return H.ns(a,b,H.ae(c),d,!!e,!!f,g)},
l3:function(a){return a.a},
lO:function(a){return a.c},
fP:function(a){var u,t,s,r,q
u=new H.co("self","target","receiver","name")
t=J.hr(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aY(a,"String"))},
oW:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aY(a,"double"))},
p9:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aY(a,"num"))},
lv:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aY(a,"bool"))},
ae:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aY(a,"int"))},
mS:function(a,b){throw H.c(H.aY(a,H.ck(H.I(b).substring(2))))},
pb:function(a,b){throw H.c(H.no(a,H.ck(H.I(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.V(a)[b])return a
H.mS(a,b)},
k:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.V(a)[b]
else u=!0
if(u)return a
H.pb(a,b)},
kK:function(a){if(a==null)return a
if(!!J.V(a).$ib)return a
throw H.c(H.aY(a,"List<dynamic>"))},
mP:function(a,b){var u
if(a==null)return a
u=J.V(a)
if(!!u.$ib)return a
if(u[b])return a
H.mS(a,b)},
mL:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ae(u)]
else return a.$S()}return},
fB:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.mL(J.V(a))
if(u==null)return!1
return H.mB(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lr)return a
$.lr=!0
try{if(H.fB(a,b))return a
u=H.kX(b)
t=H.aY(a,u)
throw H.c(t)}finally{$.lr=!1}},
ly:function(a,b){if(a!=null&&!H.lw(a,b))H.r(H.aY(a,H.kX(b)))
return a},
aY:function(a,b){return new H.j2("TypeError: "+P.hb(a)+": type '"+H.mG(a)+"' is not a subtype of type '"+b+"'")},
no:function(a,b){return new H.fQ("CastError: "+P.hb(a)+": type '"+H.mG(a)+"' is not a subtype of type '"+b+"'")},
mG:function(a){var u,t
u=J.V(a)
if(!!u.$icr){t=H.mL(u)
if(t!=null)return H.kX(t)
return"Closure"}return H.c6(a)},
pg:function(a){throw H.c(new P.h_(H.I(a)))},
o0:function(a){return new H.im(a)},
mM:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bQ:function(a){if(a==null)return
return a.$ti},
q0:function(a,b,c){return H.cj(a["$a"+H.m(c)],H.bQ(b))},
bP:function(a,b,c,d){var u
H.I(c)
H.ae(d)
u=H.cj(a["$a"+H.m(c)],H.bQ(b))
return u==null?null:u[d]},
al:function(a,b,c){var u
H.I(b)
H.ae(c)
u=H.cj(a["$a"+H.m(b)],H.bQ(a))
return u==null?null:u[c]},
t:function(a,b){var u
H.ae(b)
u=H.bQ(a)
return u==null?null:u[b]},
kX:function(a){return H.bO(a,null)},
bO:function(a,b){var u,t
H.l(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ck(a[0].name)+H.lu(a,1,b)
if(typeof a=="function")return H.ck(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ae(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.m(b[t])}if('func' in a)return H.oG(a,b)
if('futureOr' in a)return"FutureOr<"+H.bO("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oG:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.f]
H.l(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.d([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.h(b,m)
o=C.c.H(o,b[m])
l=t[p]
if(l!=null&&l!==P.W)o+=" extends "+H.bO(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bO(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bO(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bO(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.oX(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.I(u[g])
i=i+h+H.bO(d[c],b)+(" "+H.m(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
lu:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.aj("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bO(p,c)}return"<"+u.i(0)+">"},
cj:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dm:function(a,b,c,d){var u,t
H.I(b)
H.kK(c)
H.I(d)
if(a==null)return!1
u=H.bQ(a)
t=J.V(a)
if(t[b]==null)return!1
return H.mJ(H.cj(t[d],u),null,c,null)},
l:function(a,b,c,d){H.I(b)
H.kK(c)
H.I(d)
if(a==null)return a
if(H.dm(a,b,c,d))return a
throw H.c(H.aY(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ck(b.substring(2))+H.lu(c,0,null),v.mangledGlobalNames)))},
mJ:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aK(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aK(a[t],b,c[t],d))return!1
return!0},
pZ:function(a,b,c){return a.apply(b,H.cj(J.V(b)["$a"+H.m(c)],H.bQ(b)))},
mO:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="W"||a.name==="K"||a===-1||a===-2||H.mO(u)}return!1},
lw:function(a,b){var u,t
if(a==null)return b==null||b.name==="W"||b.name==="K"||b===-1||b===-2||H.mO(b)
if(b==null||b===-1||b.name==="W"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lw(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fB(a,b)}u=J.V(a).constructor
t=H.bQ(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aK(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.lw(a,b))throw H.c(H.aY(a,H.kX(b)))
return a},
aK:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="W"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="W"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aK(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="K")return!0
if('func' in c)return H.mB(a,b,c,d)
if('func' in a)return c.name==="bD"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aK("type" in a?a.type:null,b,s,d)
else if(H.aK(a,b,s,d))return!0
else{if(!('$i'+"cy" in t.prototype))return!1
r=t.prototype["$a"+"cy"]
q=H.cj(r,u?a.slice(1):null)
return H.aK(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.mJ(H.cj(m,u),b,p,d)},
mB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.p8(h,b,g,d)},
p8:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aK(c[r],d,a[r],b))return!1}return!0},
q_:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
p6:function(a){var u,t,s,r,q,p
u=H.I($.mN.$1(a))
t=$.kD[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kJ[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.I($.mI.$2(a,u))
if(u!=null){t=$.kD[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kJ[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.kW(s)
$.kD[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.kJ[u]=s
return s}if(q==="-"){p=H.kW(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.mR(a,s)
if(q==="*")throw H.c(P.jc(u))
if(v.leafTags[u]===true){p=H.kW(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.mR(a,s)},
mR:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lA(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kW:function(a){return J.lA(a,!1,null,!!a.$iL)},
p7:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kW(u)
else return J.lA(u,c,null,null)},
p2:function(){if(!0===$.lz)return
$.lz=!0
H.p3()},
p3:function(){var u,t,s,r,q,p,o,n
$.kD=Object.create(null)
$.kJ=Object.create(null)
H.p1()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mT.$1(q)
if(p!=null){o=H.p7(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
p1:function(){var u,t,s,r,q,p,o
u=C.a3()
u=H.ce(C.a0,H.ce(C.a5,H.ce(C.F,H.ce(C.F,H.ce(C.a4,H.ce(C.a1,H.ce(C.a2(C.G),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.mN=new H.kG(q)
$.mI=new H.kH(p)
$.mT=new H.kI(o)},
ce:function(a,b){return a(b)||b},
nD:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a5("Illegal RegExp pattern ("+String(r)+")",a,null))},
pe:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lD:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fU:function fU(){},
fV:function fV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ie:function ie(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
j0:function j0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i1:function i1(a,b){this.a=a
this.b=b},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a){this.a=a},
kZ:function kZ(a){this.a=a},
fb:function fb(a){this.a=a
this.b=null},
cr:function cr(){},
iJ:function iJ(){},
iA:function iA(){},
co:function co(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j2:function j2(a){this.a=a},
fQ:function fQ(a){this.a=a},
im:function im(a){this.a=a},
aP:function aP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hx:function hx(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hy:function hy(a,b){this.a=a
this.$ti=b},
hz:function hz(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
ht:function ht(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cc:function(a){return a},
nK:function(a){return new Int8Array(a)},
bi:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cg(b,a))},
oE:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oV(a,b,c))
return b},
cG:function cG(){},
bI:function bI(){},
e2:function e2(){},
cH:function cH(){},
e3:function e3(){},
hV:function hV(){},
hW:function hW(){},
hX:function hX(){},
hY:function hY(){},
hZ:function hZ(){},
e4:function e4(){},
cI:function cI(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
oX:function(a){return J.lW(a?Object.keys(a):[],null)},
pa:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lA:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kE:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.lz==null){H.p2()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.jc("Return interceptor for "+H.m(t(a,u))))}r=a.constructor
q=r==null?null:r[$.lE()]
if(q!=null)return q
q=H.p6(a)
if(q!=null)return q
if(typeof a=="function")return C.a6
t=Object.getPrototypeOf(a)
if(t==null)return C.N
if(t===Object.prototype)return C.N
if(typeof r=="function"){Object.defineProperty(r,$.lE(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
nC:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.l2(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.af(a,0,4294967295,"length",null))
return J.lW(new Array(a),b)},
lW:function(a,b){return J.hr(H.d(a,[b]))},
hr:function(a){H.kK(a)
a.fixed$length=Array
return a},
V:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dP.prototype
return J.dO.prototype}if(typeof a=="string")return J.c2.prototype
if(a==null)return J.dQ.prototype
if(typeof a=="boolean")return J.hs.prototype
if(a.constructor==Array)return J.b4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.W)return a
return J.kE(a)},
dn:function(a){if(typeof a=="string")return J.c2.prototype
if(a==null)return a
if(a.constructor==Array)return J.b4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.W)return a
return J.kE(a)},
fC:function(a){if(a==null)return a
if(a.constructor==Array)return J.b4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.W)return a
return J.kE(a)},
dp:function(a){if(typeof a=="string")return J.c2.prototype
if(a==null)return a
if(!(a instanceof P.W))return J.d3.prototype
return a},
ad:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.W)return a
return J.kE(a)},
a9:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.V(a).w(a,b)},
lH:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.p5(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dn(a).j(a,b)},
l_:function(a,b,c){return J.fC(a).n(a,b,c)},
ne:function(a,b){return J.dp(a).F(a,b)},
fD:function(a,b){return J.ad(a).iH(a,b)},
l0:function(a,b,c){return J.ad(a).iK(a,b,c)},
nf:function(a,b,c,d){return J.ad(a).jC(a,b,c,d)},
lI:function(a,b){return J.ad(a).B(a,b)},
ng:function(a,b){return J.dp(a).a5(a,b)},
fE:function(a,b){return J.fC(a).M(a,b)},
nh:function(a,b,c,d){return J.ad(a).kd(a,b,c,d)},
lJ:function(a,b){return J.fC(a).I(a,b)},
ni:function(a){return J.ad(a).gjJ(a)},
cm:function(a){return J.ad(a).gcK(a)},
du:function(a){return J.V(a).gK(a)},
bR:function(a){return J.fC(a).gW(a)},
aD:function(a){return J.dn(a).gl(a)},
nj:function(a){return J.ad(a).gkU(a)},
l1:function(a,b){return J.ad(a).b7(a,b)},
lK:function(a){return J.fC(a).kM(a)},
nk:function(a,b){return J.ad(a).kO(a,b)},
nl:function(a,b,c){return J.ad(a).fv(a,b,c)},
nm:function(a,b,c){return J.dp(a).t(a,b,c)},
nn:function(a){return J.dp(a).l0(a)},
as:function(a){return J.V(a).i(a)},
a:function a(){},
hs:function hs(){},
dQ:function dQ(){},
dS:function dS(){},
i5:function i5(){},
d3:function d3(){},
bH:function bH(){},
b4:function b4(a){this.$ti=a},
lc:function lc(a){this.$ti=a},
at:function at(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dR:function dR(){},
dP:function dP(){},
dO:function dO(){},
c2:function c2(){}},P={
og:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.oO()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.cf(new P.jD(u),1)).observe(t,{childList:true})
return new P.jC(u,t,s)}else if(self.setImmediate!=null)return P.oP()
return P.oQ()},
oh:function(a){self.scheduleImmediate(H.cf(new P.jE(H.n(a,{func:1,ret:-1})),0))},
oi:function(a){self.setImmediate(H.cf(new P.jF(H.n(a,{func:1,ret:-1})),0))},
oj:function(a){P.li(C.z,H.n(a,{func:1,ret:-1}))},
li:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.a9(a.a,1000)
return P.op(u<0?0:u,b)},
mg:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.bc]})
u=C.f.a9(a.a,1000)
return P.oq(u<0?0:u,b)},
op:function(a,b){var u=new P.fi(!0)
u.h0(a,b)
return u},
oq:function(a,b){var u=new P.fi(!1)
u.h1(a,b)
return u},
ok:function(a,b){var u,t,s
b.a=1
try{a.fa(new P.jP(b),new P.jQ(b),null)}catch(s){u=H.ai(s)
t=H.ci(s)
P.pc(new P.jR(b,u,t))}},
mq:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$iaJ")
if(u>=4){t=b.cz()
b.a=a.a
b.c=a.c
P.d8(b,t)}else{t=H.e(b.c,"$ibh")
b.a=2
b.c=a
a.dZ(t)}},
d8:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.e(t.c,"$iam")
t=t.b
p=q.a
o=q.b
t.toString
P.kz(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.d8(u.a,b)}t=u.a
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
if(k){H.e(m,"$iam")
t=t.b
p=m.a
o=m.b
t.toString
P.kz(null,null,t,p,o)
return}j=$.a2
if(j!=l)$.a2=l
else j=null
t=b.c
if(t===8)new P.jV(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.jU(s,b,m).$0()}else if((t&2)!==0)new P.jT(u,s,b).$0()
if(j!=null)$.a2=j
t=s.b
if(!!J.V(t).$icy){if(t.a>=4){i=H.e(o.c,"$ibh")
o.c=null
b=o.bB(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.mq(t,o)
return}}h=b.b
i=H.e(h.c,"$ibh")
h.c=null
b=h.bB(i)
t=s.a
p=s.b
if(!t){H.B(p,H.t(h,0))
h.a=4
h.c=p}else{H.e(p,"$iam")
h.a=8
h.c=p}u.a=h
t=h}},
oJ:function(a,b){if(H.fB(a,{func:1,args:[P.W,P.aw]}))return H.n(a,{func:1,ret:null,args:[P.W,P.aw]})
if(H.fB(a,{func:1,args:[P.W]}))return H.n(a,{func:1,ret:null,args:[P.W]})
throw H.c(P.l2(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oI:function(){var u,t
for(;u=$.cd,u!=null;){$.dl=null
t=u.b
$.cd=t
if(t==null)$.dk=null
u.a.$0()}},
oN:function(){$.ls=!0
try{P.oI()}finally{$.dl=null
$.ls=!1
if($.cd!=null)$.lF().$1(P.mK())}},
mF:function(a){var u=new P.eE(H.n(a,{func:1,ret:-1}))
if($.cd==null){$.dk=u
$.cd=u
if(!$.ls)$.lF().$1(P.mK())}else{$.dk.b=u
$.dk=u}},
oM:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cd
if(u==null){P.mF(a)
$.dl=$.dk
return}t=new P.eE(a)
s=$.dl
if(s==null){t.b=u
$.dl=t
$.cd=t}else{t.b=s.b
s.b=t
$.dl=t
if(t.b==null)$.dk=t}},
pc:function(a){var u,t
u={func:1,ret:-1}
H.n(a,u)
t=$.a2
if(C.l===t){P.kB(null,null,C.l,a)
return}t.toString
P.kB(null,null,t,H.n(t.cG(a),u))},
mf:function(a,b){var u,t
u={func:1,ret:-1}
H.n(b,u)
t=$.a2
if(t===C.l){t.toString
return P.li(a,b)}return P.li(a,H.n(t.cG(b),u))},
o6:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.bc]}
H.n(b,u)
t=$.a2
if(t===C.l){t.toString
return P.mg(a,b)}s=t.ef(b,P.bc)
$.a2.toString
return P.mg(a,H.n(s,u))},
kz:function(a,b,c,d,e){var u={}
u.a=d
P.oM(new P.kA(u,e))},
mC:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a2
if(t===c)return d.$0()
$.a2=c
u=t
try{t=d.$0()
return t}finally{$.a2=u}},
mD:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.a2
if(t===c)return d.$1(e)
$.a2=c
u=t
try{t=d.$1(e)
return t}finally{$.a2=u}},
oK:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.a2
if(t===c)return d.$2(e,f)
$.a2=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a2=u}},
kB:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cG(d):c.jK(d,-1)
P.mF(d)},
jD:function jD(a){this.a=a},
jC:function jC(a,b,c){this.a=a
this.b=b
this.c=c},
jE:function jE(a){this.a=a},
jF:function jF(a){this.a=a},
fi:function fi(a){this.a=a
this.b=null
this.c=0},
ki:function ki(a,b){this.a=a
this.b=b},
kh:function kh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bh:function bh(a,b,c,d,e){var _=this
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
jO:function jO(a,b){this.a=a
this.b=b},
jS:function jS(a,b){this.a=a
this.b=b},
jP:function jP(a){this.a=a},
jQ:function jQ(a){this.a=a},
jR:function jR(a,b,c){this.a=a
this.b=b
this.c=c},
jV:function jV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jW:function jW(a){this.a=a},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
jT:function jT(a,b,c){this.a=a
this.b=b
this.c=c},
eE:function eE(a){this.a=a
this.b=null},
iD:function iD(){},
iF:function iF(a,b){this.a=a
this.b=b},
iG:function iG(a,b){this.a=a
this.b=b},
cQ:function cQ(){},
iE:function iE(){},
bc:function bc(){},
am:function am(a,b){this.a=a
this.b=b},
ks:function ks(){},
kA:function kA(a,b){this.a=a
this.b=b},
k1:function k1(){},
k3:function k3(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function k2(a,b){this.a=a
this.b=b},
k4:function k4(a,b,c){this.a=a
this.b=b
this.c=c},
nF:function(a,b,c,d,e){return new H.aP([d,e])},
lf:function(a,b){return new H.aP([a,b])},
nG:function(a){return H.oY(a,new H.aP([null,null]))},
dW:function(a,b,c,d){return new P.k_([d])},
lo:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oo:function(a,b,c){var u=new P.eT(a,b,[c])
u.c=a.e
return u},
nA:function(a,b,c){var u,t
if(P.lt(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.f])
t=$.dt()
C.a.h(t,a)
try{P.oH(a,u)}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}t=P.md(b,H.mP(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
la:function(a,b,c){var u,t,s
if(P.lt(a))return b+"..."+c
u=new P.aj(b)
t=$.dt()
C.a.h(t,a)
try{s=u
s.a=P.md(s.a,a,", ")}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lt:function(a){var u,t
for(u=0;t=$.dt(),u<t.length;++u)if(a===t[u])return!0
return!1},
oH:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.f],"$ab")
u=a.gW(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.A())return
r=H.m(u.gL(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.A()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gL(u);++s
if(!u.A()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gL(u);++s
for(;u.A();o=n,n=m){m=u.gL(u);++s
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
lX:function(a,b,c){var u=P.nF(null,null,null,b,c)
a.I(0,new P.hA(u,b,c))
return u},
lY:function(a,b){var u,t,s
u=P.dW(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.D)(a),++s)u.h(0,H.B(a[s],b))
return u},
lg:function(a){var u,t
u={}
if(P.lt(a))return"{...}"
t=new P.aj("")
try{C.a.h($.dt(),a)
t.a+="{"
u.a=!0
J.lJ(a,new P.hE(u,t))
t.a+="}"}finally{u=$.dt()
if(0>=u.length)return H.h(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
k_:function k_(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ca:function ca(a){this.a=a
this.c=this.b=null},
eT:function eT(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hA:function hA(a,b,c){this.a=a
this.b=b
this.c=c},
hB:function hB(){},
x:function x(){},
hD:function hD(){},
hE:function hE(a,b){this.a=a
this.b=b},
ag:function ag(){},
kj:function kj(){},
hF:function hF(){},
ew:function ew(a,b){this.a=a
this.$ti=b},
k6:function k6(){},
eU:function eU(){},
fo:function fo(){},
oa:function(a,b,c,d){H.l(b,"$ib",[P.o],"$ab")
if(b instanceof Uint8Array)return P.ob(!1,b,c,d)
return},
ob:function(a,b,c,d){var u,t,s
u=$.n6()
if(u==null)return
t=0===c
if(t&&!0)return P.ll(u,b)
s=b.length
d=P.bK(c,d,s,null,null,null)
if(t&&d===s)return P.ll(u,b)
return P.ll(u,b.subarray(c,d))},
ll:function(a,b){if(P.od(b))return
return P.oe(a,b)},
oe:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ai(t)}return},
od:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
oc:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ai(t)}return},
oL:function(a,b,c){var u,t,s
H.l(a,"$ib",[P.o],"$ab")
for(u=J.dn(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.c6()
if((s&127)!==s)return t-b}return c-b},
lM:function(a,b,c,d,e,f){if(C.f.bw(f,4)!==0)throw H.c(P.a5("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a5("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a5("Invalid base64 padding, more than two '=' characters",a,b))},
fM:function fM(a){this.a=a},
fN:function fN(a){this.a=a},
bX:function bX(){},
bz:function bz(){},
h9:function h9(){},
ho:function ho(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hn:function hn(a){this.a=a},
jm:function jm(a){this.a=a},
jo:function jo(){},
kq:function kq(a){this.b=this.a=0
this.c=a},
jn:function jn(a){this.a=a},
ko:function ko(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
kp:function kp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dq:function(a,b,c){var u
H.n(b,{func:1,ret:P.o,args:[P.f]})
u=H.nU(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a5(a,null,null))},
ny:function(a){if(a instanceof H.cr)return a.i(0)
return"Instance of '"+H.c6(a)+"'"},
nH:function(a,b,c,d){var u,t
H.B(b,d)
u=J.nC(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.l(u,"$ib",[d],"$ab")},
lZ:function(a,b,c){var u,t,s
u=[c]
t=H.d([],u)
for(s=a.gW(a);s.A();)C.a.h(t,H.B(s.gL(s),c))
if(b)return t
return H.l(J.hr(t),"$ib",u,"$ab")},
ei:function(a,b,c){var u,t
u=P.o
H.l(a,"$ii",[u],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.l(a,"$ib4",[u],"$ab4")
t=a.length
c=P.bK(b,c,t,null,null,null)
return H.m8(b>0||c<t?C.a.fC(a,b,c):a)}if(!!J.V(a).$icI)return H.nW(a,b,P.bK(b,c,a.length,null,null,null))
return P.o4(a,b,c)},
o4:function(a,b,c){var u,t,s,r
H.l(a,"$ii",[P.o],"$ai")
if(b<0)throw H.c(P.af(b,0,J.aD(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.af(c,b,J.aD(a),null,null))
t=J.bR(a)
for(s=0;s<b;++s)if(!t.A())throw H.c(P.af(b,0,s,null,null))
r=[]
if(u)for(;t.A();)r.push(t.gL(t))
else for(s=b;s<c;++s){if(!t.A())throw H.c(P.af(c,b,s,null,null))
r.push(t.gL(t))}return H.m8(r)},
nZ:function(a,b,c){return new H.ht(a,H.nD(a,!1,!0,!1))},
md:function(a,b,c){var u=J.bR(b)
if(!u.A())return a
if(c.length===0){do a+=H.m(u.gL(u))
while(u.A())}else{a+=H.m(u.gL(u))
for(;u.A();)a=a+c+H.m(u.gL(u))}return a},
jh:function(){var u=H.nM()
if(u!=null)return P.o9(u,0,null)
throw H.c(P.J("'Uri.base' is not supported"))},
fp:function(a,b,c,d){var u,t,s,r,q,p
H.l(a,"$ib",[P.o],"$ab")
if(c===C.m){u=$.nc().b
if(typeof b!=="string")H.r(H.aL(b))
u=u.test(b)}else u=!1
if(u)return b
H.B(b,H.al(c,"bX",0))
t=c.gkc().cL(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c7(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
nu:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nv:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dE:function(a){if(a>=10)return""+a
return"0"+a},
lS:function(a,b,c,d,e,f){return new P.bB(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
hb:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.as(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ny(a)},
dw:function(a){return new P.aM(!1,null,null,a)},
l2:function(a,b,c){return new P.aM(!0,a,b,c)},
ic:function(a,b,c){return new P.c8(null,null,!0,a,b,"Value not in range")},
af:function(a,b,c,d,e){return new P.c8(b,c,!0,a,d,"Invalid value")},
bK:function(a,b,c,d,e,f){if(typeof a!=="number")return H.H(a)
if(0>a||a>c)throw H.c(P.af(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.af(b,a,c,"end",f))
return b}return c},
a_:function(a,b,c,d,e){var u=H.ae(e==null?J.aD(b):e)
return new P.hq(b,u,!0,a,c,"Index out of range")},
J:function(a){return new P.je(a)},
jc:function(a){return new P.jb(a)},
mc:function(a){return new P.cP(a)},
b0:function(a){return new P.fT(a)},
v:function(a){return new P.eM(a)},
a5:function(a,b,c){return new P.hj(a,b,c)},
nI:function(a,b,c,d){var u,t
H.n(b,{func:1,ret:d,args:[P.o]})
u=H.d([],[d])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
lC:function(a){H.pa(a)},
o9:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.F(a,b+4)^58)*3|C.c.F(a,b)^100|C.c.F(a,b+1)^97|C.c.F(a,b+2)^116|C.c.F(a,b+3)^97)>>>0
if(t===0)return P.mi(b>0||c<c?C.c.t(a,b,c):a,5,null).gff()
else if(t===32)return P.mi(C.c.t(a,u,c),0,null).gff()}s=new Array(8)
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
if(P.mE(a,b,c,0,r)>=14)C.a.n(r,7,c)
q=r[1]
if(typeof q!=="number")return q.l4()
if(q>=b)if(P.mE(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.H()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.a0()
if(typeof m!=="number")return H.H(m)
if(l<m)m=l
if(typeof n!=="number")return n.a0()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.a0()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.a0()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.c.al(a,"..",n)))i=m>n+2&&C.c.al(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.al(a,"file",b)){if(p<=b){if(!C.c.al(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.c.t(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.c.b5(a,n,m,"/");++m;++l;++c}else{a=C.c.t(a,b,n)+"/"+C.c.t(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.al(a,"http",b)){if(s&&o+3===n&&C.c.al(a,"80",o+1))if(b===0&&!0){a=C.c.b5(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.c.t(a,b,o)+C.c.t(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.c.al(a,"https",b)){if(s&&o+4===n&&C.c.al(a,"443",o+1))if(b===0&&!0){a=C.c.b5(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.c.t(a,b,o)+C.c.t(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.c.t(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.k9(a,q,p,o,n,m,l,j)}return P.or(a,b,c,q,p,o,n,m,l,j)},
mk:function(a,b){var u=P.f
return C.a.kh(H.d(a.split("&"),[u]),P.lf(u,u),new P.jk(b),[P.F,P.f,P.f])},
o8:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.jg(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.a5(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.dq(C.c.t(a,q,r),null,null)
if(typeof n!=="number")return n.fs()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.h(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.dq(C.c.t(a,q,c),null,null)
if(typeof n!=="number")return n.fs()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.h(t,p)
t[p]=n
return t},
mj:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.ji(a)
t=new P.jj(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.o])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.a5(a,r)
if(n===58){if(r===b){++r
if(C.c.a5(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaD(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.o8(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.h(j,g)
j[g]=0
d=g+1
if(d>=i)return H.h(j,d)
j[d]=0
g+=2}else{d=C.f.b1(f,8)
if(g<0||g>=i)return H.h(j,g)
j[g]=d
d=g+1
if(d>=i)return H.h(j,d)
j[d]=f&255
g+=2}}return j},
or:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.oy(a,b,d)
else{if(d===b)P.dh(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oz(a,u,e-1):""
s=P.ov(a,e,f,!1)
if(typeof f!=="number")return f.H()
r=f+1
if(typeof g!=="number")return H.H(g)
q=r<g?P.ox(P.dq(C.c.t(a,r,g),new P.kk(a,f),null),j):null}else{t=""
s=null
q=null}p=P.ow(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.a0()
o=h<i?P.lp(a,h+1,i,null):null
return new P.cb(j,t,s,q,p,o,i<c?P.ou(a,i+1,c):null)},
mu:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dh:function(a,b,c){throw H.c(P.a5(c,a,b))},
ox:function(a,b){if(a!=null&&a===P.mu(b))return
return a},
ov:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.a5(a,b)===91){if(typeof c!=="number")return c.N()
u=c-1
if(C.c.a5(a,u)!==93)P.dh(a,b,"Missing end `]` to match `[` in host")
P.mj(a,b+1,u)
return C.c.t(a,b,c).toLowerCase()}if(typeof c!=="number")return H.H(c)
t=b
for(;t<c;++t)if(C.c.a5(a,t)===58){P.mj(a,b,c)
return"["+a+"]"}return P.oB(a,b,c)},
oB:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.H(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.a5(a,u)
if(q===37){p=P.mA(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.aj("")
n=C.c.t(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.t(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.h(C.L,o)
o=(C.L[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.aj("")
if(t<u){s.a+=C.c.t(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.h(C.u,o)
o=(C.u[o]&1<<(q&15))!==0}else o=!1
if(o)P.dh(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.a5(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.aj("")
n=C.c.t(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mv(q)
u+=l
t=u}}}}if(s==null)return C.c.t(a,b,c)
if(t<c){n=C.c.t(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oy:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mx(C.c.F(a,b)))P.dh(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.h(C.w,r)
r=(C.w[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dh(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.t(a,b,c)
return P.os(t?a.toLowerCase():a)},
os:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oz:function(a,b,c){return P.di(a,b,c,C.a9,!1)},
ow:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.di(a,b,c,C.M,!0):C.t.l7(d,new P.kl(),P.f).m(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.a8(r,"/"))r="/"+r
return P.oA(r,e,f)},
oA:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.a8(a,"/"))return P.oC(a,!u||c)
return P.oD(a)},
lp:function(a,b,c,d){var u,t
u={}
H.l(d,"$iF",[P.f,null],"$aF")
if(a!=null){if(d!=null)throw H.c(P.dw("Both query and queryParameters specified"))
return P.di(a,b,c,C.v,!0)}if(d==null)return
t=new P.aj("")
u.a=""
d.I(0,new P.km(new P.kn(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
ou:function(a,b,c){return P.di(a,b,c,C.v,!0)},
mA:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.a5(a,b+1)
s=C.c.a5(a,u)
r=H.kF(t)
q=H.kF(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.b1(p,4)
if(u>=8)return H.h(C.x,u)
u=(C.x[u]&1<<(p&15))!==0}else u=!1
if(u)return H.c7(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.t(a,b,b+3).toUpperCase()
return},
mv:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.o])
C.a.n(t,0,37)
C.a.n(t,1,C.c.F("0123456789ABCDEF",a>>>4))
C.a.n(t,2,C.c.F("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.o])
for(q=0;--r,r>=0;s=128){p=C.f.iX(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.c.F("0123456789ABCDEF",p>>>4))
C.a.n(t,q+2,C.c.F("0123456789ABCDEF",p&15))
q+=3}}return P.ei(t,0,null)},
di:function(a,b,c,d,e){var u=P.mz(a,b,c,H.l(d,"$ib",[P.o],"$ab"),e)
return u==null?C.c.t(a,b,c):u},
mz:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.l(d,"$ib",[P.o],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.a0()
if(typeof c!=="number")return H.H(c)
if(!(t<c))break
c$0:{q=C.c.a5(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.h(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mA(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.h(C.u,p)
p=(C.u[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dh(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.a5(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mv(q)}}if(r==null)r=new P.aj("")
r.a+=C.c.t(a,s,t)
r.a+=H.m(o)
if(typeof n!=="number")return H.H(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.a0()
if(s<c)r.a+=C.c.t(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
my:function(a){if(C.c.a8(a,"."))return!0
return C.c.eU(a,"/.")!==-1},
oD:function(a){var u,t,s,r,q,p,o
if(!P.my(a))return a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.a9(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.h(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oC:function(a,b){var u,t,s,r,q,p
if(!P.my(a))return!b?P.mw(a):a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaD(u)!==".."){if(0>=u.length)return H.h(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.h(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaD(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.h(u,0)
C.a.n(u,0,P.mw(u[0]))}return C.a.m(u,"/")},
mw:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.mx(J.ne(a,0)))for(t=1;t<u;++t){s=C.c.F(a,t)
if(s===58)return C.c.t(a,0,t)+"%3A"+C.c.ax(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.h(C.w,r)
r=(C.w[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
ot:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dw("Invalid URL encoding"))}}return u},
lq:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.F(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.t(a,b,c)
else q=new H.u(C.c.t(a,b,c))}else{q=H.d([],[P.o])
for(r=a.length,t=b;t<c;++t){s=C.c.F(a,t)
if(s>127)throw H.c(P.dw("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.dw("Truncated URI"))
C.a.h(q,P.ot(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.l(q,"$ib",[P.o],"$ab")
return new P.jn(!1).cL(q)},
mx:function(a){var u=a|32
return 97<=u&&u<=122},
mi:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.d([b-1],[P.o])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.F(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a5("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a5("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.F(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaD(u)
if(q!==44||s!==o+7||!C.c.al(a,"base64",o+1))throw H.c(P.a5("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.R.kw(0,a,n,t)
else{m=P.mz(a,n,t,C.v,!0)
if(m!=null)a=C.c.b5(a,n,t,m)}return new P.jf(a,u,c)},
oF:function(){var u,t,s,r,q
u=P.nI(22,new P.kw(),!0,P.S)
t=new P.kv(u)
s=new P.kx()
r=new P.ky()
q=H.e(t.$2(0,225),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(14,225),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(15,225),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(1,225),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(2,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(3,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(4,229),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(5,229),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(6,231),"$iS")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(7,231),"$iS")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.e(t.$2(8,8),"$iS"),"]",5)
q=H.e(t.$2(9,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(16,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(17,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(10,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(18,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(19,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(11,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(12,236),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.e(t.$2(13,237),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.e(t.$2(20,245),"$iS"),"az",21)
q=H.e(t.$2(21,245),"$iS")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
mE:function(a,b,c,d,e){var u,t,s,r,q
H.l(e,"$ib",[P.o],"$ab")
u=$.nd()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.h(u,d)
s=u[d]
r=C.c.F(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.h(s,r)
q=s[r]
d=q&31
C.a.n(e,q>>>5,t)}return d},
R:function R(){},
an:function an(a,b){this.a=a
this.b=b},
C:function C(){},
bB:function bB(a){this.a=a},
h5:function h5(){},
h6:function h6(){},
bC:function bC(){},
e6:function e6(){},
aM:function aM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c8:function c8(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hq:function hq(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
je:function je(a){this.a=a},
jb:function jb(a){this.a=a},
cP:function cP(a){this.a=a},
fT:function fT(a){this.a=a},
i4:function i4(){},
eh:function eh(){},
h_:function h_(a){this.a=a},
eM:function eM(a){this.a=a},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
bD:function bD(){},
o:function o(){},
i:function i(){},
b3:function b3(){},
b:function b(){},
F:function F(){},
K:function K(){},
a4:function a4(){},
W:function W(){},
aw:function aw(){},
f:function f(){},
aj:function aj(a){this.a=a},
jk:function jk(a){this.a=a},
jg:function jg(a){this.a=a},
ji:function ji(a){this.a=a},
jj:function jj(a,b){this.a=a
this.b=b},
cb:function cb(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
kk:function kk(a,b){this.a=a
this.b=b},
kl:function kl(){},
kn:function kn(a,b){this.a=a
this.b=b},
km:function km(a){this.a=a},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
kw:function kw(){},
kv:function kv(a){this.a=a},
kx:function kx(){},
ky:function ky(){},
k9:function k9(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jJ:function jJ(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
oU:function(a){var u,t
u=J.V(a)
if(!!u.$ibl){t=u.gel(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.fn(a.data,a.height,a.width)},
oT:function(a){if(a instanceof P.fn)return{data:a.a,height:a.b,width:a.c}
return a},
bq:function(a){var u,t,s,r,q
if(a==null)return
u=P.lf(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r){q=H.I(t[r])
u.n(0,q,a[q])}return u},
oS:function(a,b){var u={}
a.I(0,new P.kC(u))
return u},
kb:function kb(){},
kc:function kc(a,b){this.a=a
this.b=b},
fn:function fn(a,b,c){this.a=a
this.b=b
this.c=c},
kC:function kC(a){this.a=a},
ff:function ff(a,b){this.a=a
this.b=b},
hf:function hf(a,b){this.a=a
this.b=b},
hg:function hg(){},
hh:function hh(){},
jZ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
on:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k0:function k0(){},
ac:function ac(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b6:function b6(){},
hw:function hw(){},
ba:function ba(){},
i2:function i2(){},
i9:function i9(){},
cM:function cM(){},
iH:function iH(){},
q:function q(){},
bd:function bd(){},
j_:function j_(){},
eR:function eR(){},
eS:function eS(){},
f1:function f1(){},
f2:function f2(){},
fd:function fd(){},
fe:function fe(){},
fl:function fl(){},
fm:function fm(){},
S:function S(){},
fI:function fI(){},
fJ:function fJ(){},
fK:function fK(a){this.a=a},
fL:function fL(){},
bS:function bS(){},
i3:function i3(){},
eF:function eF(){},
dy:function dy(){},
dK:function dK(){},
e9:function e9(){},
c9:function c9(){},
ec:function ec(){},
el:function el(){},
eu:function eu(){},
iz:function iz(){},
f9:function f9(){},
fa:function fa(){}},W={
lL:function(a){var u=document.createElement("a")
return u},
l4:function(a,b){var u=document.createElement("canvas")
return u},
nw:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).ao(u,a,b,c)
t.toString
u=W.G
u=new H.d5(new W.ar(t),H.n(new W.h8(),{func:1,ret:P.R,args:[u]}),[u])
return H.e(u.gaV(u),"$iO")},
nx:function(a){H.e(a,"$ij")
return"wheel"},
cv:function(a){var u,t,s
u="element tag unavailable"
try{t=J.nj(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ai(s)}return u},
l9:function(a,b,c){var u=document.createElement("img")
if(b!=null)u.src=b
return u},
nz:function(a){var u,t,s
t=document.createElement("input")
u=H.e(t,"$icA")
try{u.type=a}catch(s){H.ai(s)}return u},
jY:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ms:function(a,b,c,d){var u,t
u=W.jY(W.jY(W.jY(W.jY(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a7:function(a,b,c,d,e){var u=W.mH(new W.jN(c),W.p)
if(u!=null&&!0)J.nf(a,b,u,!1)
return new W.jM(a,b,u,!1,[e])},
mr:function(a){var u,t
u=W.lL(null)
t=window.location
u=new W.bN(new W.k5(u,t))
u.fQ(a)
return u},
ol:function(a,b,c,d){H.e(a,"$iO")
H.I(b)
H.I(c)
H.e(d,"$ibN")
return!0},
om:function(a,b,c,d){var u,t,s
H.e(a,"$iO")
H.I(b)
H.I(c)
u=H.e(d,"$ibN").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mt:function(){var u,t,s,r,q
u=P.f
t=P.lY(C.A,u)
s=H.t(C.A,0)
r=H.n(new W.kg(),{func:1,ret:u,args:[s]})
q=H.d(["TEMPLATE"],[u])
t=new W.kf(t,P.dW(null,null,null,u),P.dW(null,null,null,u),P.dW(null,null,null,u),null)
t.h_(null,new H.hI(C.A,r,[s,u]),q,null)
return t},
mH:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a2
if(u===C.l)return a
return u.ef(a,b)},
A:function A(){},
fF:function fF(){},
dv:function dv(){},
fG:function fG(){},
cn:function cn(){},
bT:function bT(){},
bw:function bw(){},
bV:function bV(){},
bW:function bW(){},
bx:function bx(){},
cs:function cs(){},
fW:function fW(){},
X:function X(){},
ct:function ct(){},
fX:function fX(){},
b1:function b1(){},
b2:function b2(){},
fY:function fY(){},
fZ:function fZ(){},
h1:function h1(){},
aE:function aE(){},
cu:function cu(){},
h2:function h2(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
h3:function h3(){},
h4:function h4(){},
jH:function jH(a,b){this.a=a
this.b=b},
O:function O(){},
h8:function h8(){},
p:function p(){},
j:function j(){},
aF:function aF(){},
cx:function cx(){},
he:function he(){},
hi:function hi(){},
aO:function aO(){},
dL:function dL(){},
dM:function dM(){},
c0:function c0(){},
dN:function dN(){},
bl:function bl(){},
c1:function c1(){},
cA:function cA(){},
b5:function b5(){},
dU:function dU(){},
dX:function dX(){},
cE:function cE(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(a){this.a=a},
hR:function hR(){},
hS:function hS(a){this.a=a},
aQ:function aQ(){},
hT:function hT(){},
a6:function a6(){},
ar:function ar(a){this.a=a},
G:function G(){},
cJ:function cJ(){},
aR:function aR(){},
i7:function i7(){},
ea:function ea(){},
ik:function ik(){},
il:function il(a){this.a=a},
io:function io(){},
aS:function aS(){},
ix:function ix(){},
aT:function aT(){},
iy:function iy(){},
aU:function aU(){},
iB:function iB(){},
iC:function iC(a){this.a=a},
aG:function aG(){},
bb:function bb(){},
ej:function ej(){},
ek:function ek(){},
iI:function iI(){},
cS:function cS(){},
aV:function aV(){},
aH:function aH(){},
iK:function iK(){},
iL:function iL(){},
iU:function iU(){},
aW:function aW(){},
aX:function aX(){},
iY:function iY(){},
iZ:function iZ(){},
bM:function bM(){},
jl:function jl(){},
jz:function jz(){},
jA:function jA(){},
bg:function bg(){},
d6:function d6(){},
d7:function d7(){},
jI:function jI(){},
eH:function eH(){},
jX:function jX(){},
eZ:function eZ(){},
ka:function ka(){},
kd:function kd(){},
jG:function jG(){},
jK:function jK(a){this.a=a},
jL:function jL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ln:function ln(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jM:function jM(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jN:function jN(a){this.a=a},
bN:function bN(a){this.a=a},
E:function E(){},
e5:function e5(a){this.a=a},
i0:function i0(a){this.a=a},
i_:function i_(a,b,c){this.a=a
this.b=b
this.c=c},
f6:function f6(){},
k7:function k7(){},
k8:function k8(){},
kf:function kf(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kg:function kg(){},
ke:function ke(){},
dJ:function dJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aA:function aA(){},
k5:function k5(a,b){this.a=a
this.b=b},
fq:function fq(a){this.a=a},
kr:function kr(a){this.a=a},
eG:function eG(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
f_:function f_(){},
f0:function f0(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
dd:function dd(){},
de:function de(){},
f7:function f7(){},
f8:function f8(){},
fc:function fc(){},
fg:function fg(){},
fh:function fh(){},
df:function df(){},
dg:function dg(){},
fj:function fj(){},
fk:function fk(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){},
fA:function fA(){}},O={
l5:function(a){var u=new O.a3([a])
u.bz(a)
return u},
a3:function a3(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cD:function cD(){this.b=this.a=null},
e_:function e_(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hJ:function hJ(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cC:function cC(){},
hK:function hK(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b7:function b7(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hM:function hM(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hN:function hN(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ee:function ee(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bL:function bL(){}},E={
lV:function(a,b,c,d,e,f){var u=new E.ao()
u.a=d
u.b=!0
u.sfP(0,O.l5(E.ao))
u.y.b8(u.gkx(),u.gkA())
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
u.sca(0,e)
return u},
o_:function(a,b){var u=new E.ig(a,b)
u.fL(a,b)
return u},
o5:function(a,b,c,d,e){var u,t,s,r
u=J.V(a)
if(!!u.$ibV)return E.me(a,!0,!0,!0,!1)
t=W.l4(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcK(a).h(0,t)
r=E.me(t,!0,!0,!0,!1)
r.a=a
return r},
me:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.eq()
t=H.e(C.q.dg(a,"webgl2",P.nG(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic9")
if(t==null)H.r(P.v("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.o_(t,a)
s=new T.iQ(t)
s.b=H.ae((t&&C.b).dh(t,3379))
s.c=H.ae(C.b.dh(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.ex(a)
r=new X.hv()
r.c=new X.az(!1,!1,!1)
r.siD(P.dW(null,null,null,P.o))
s.b=r
r=new X.hU(s)
r.f=0
r.r=V.bo()
r.x=V.bo()
r.Q=1
r.ch=1
s.c=r
r=new X.hC(s)
r.r=0
r.x=V.bo()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.iX(s)
r.e=0
r.f=V.bo()
r.r=V.bo()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.shk(H.d([],[[P.cQ,P.W]]))
r=s.z
q=document
p=W.a6
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.a7(q,"contextmenu",H.n(s.ghW(),o),!1,p))
r=s.z
n=W.p
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.a7(a,"focus",H.n(s.gi1(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.a7(a,"blur",H.n(s.ghQ(),m),!1,n))
r=s.z
l=W.b5
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.a7(q,"keyup",H.n(s.gi5(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.a7(q,"keydown",H.n(s.gi3(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.a7(a,"mousedown",H.n(s.gi9(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a7(a,"mouseup",H.n(s.gie(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a7(a,"mousemove",H.n(s.gib(),o),!1,p))
l=s.z
k=W.bg;(l&&C.a).h(l,W.a7(a,H.I(W.nx(a)),H.n(s.gih(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.a7(q,"mousemove",H.n(s.ghY(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.a7(q,"mouseup",H.n(s.gi_(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.a7(q,"pointerlockchange",H.n(s.gij(),m),!1,n))
n=s.z
m=W.aX
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.a7(a,"touchstart",H.n(s.giA(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a7(a,"touchend",H.n(s.giw(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a7(a,"touchmove",H.n(s.giy(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.an(Date.now(),!1)
u.cy=0
u.e1()
return u},
fO:function fO(){},
ao:function ao(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ig:function ig(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ih:function ih(a){this.a=a},
ii:function ii(a){this.a=a},
ij:function ij(a){this.a=a},
eq:function eq(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iT:function iT(a){this.a=a}},Z={
lm:function(a,b,c){var u
H.l(c,"$ib",[P.o],"$ab")
u=a.createBuffer()
C.b.aB(a,b,u)
C.b.eh(a,b,new Int16Array(H.cc(c)),35044)
C.b.aB(a,b,null)
return new Z.eC(b,u)},
aI:function(a){return new Z.bf(a)},
eC:function eC(a,b){this.a=a
this.b=b},
dz:function dz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eD:function eD(a){this.a=a},
cq:function cq(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bE:function bE(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a){this.a=a}},D={
P:function(){var u=new D.bZ()
u.sam(null)
u.sbe(null)
u.c=null
u.d=0
return u},
fR:function fR(){},
bZ:function bZ(){var _=this
_.d=_.c=_.b=_.a=null},
hc:function hc(a){this.a=a},
hd:function hd(a){this.a=a},
z:function z(a){this.a=a
this.b=null},
bF:function bF(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bG:function bG(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
M:function M(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
bA:function bA(){var _=this
_.d=_.c=_.b=_.a=null},
a8:function a8(){},
dV:function dV(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
e8:function e8(){},
eg:function eg(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){}},X={dA:function dA(a,b){this.a=a
this.b=b},dT:function dT(a,b){this.a=a
this.b=b},hv:function hv(){var _=this
_.d=_.c=_.b=_.a=null},dY:function dY(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},hC:function hC(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},az:function az(a,b,c){this.a=a
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
_.b=null},hU:function hU(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cF:function cF(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},i8:function i8(){},es:function es(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},iX:function iX(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ex:function ex(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
l8:function(a,b,c,d,e,f,g){var u,t
u=new X.hk()
t=new V.aN(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.ma
if(t==null){t=V.m9(0,0,1,1)
$.ma=t}u.r=t
return u},
m3:function(a,b,c,d,e){var u,t,s
u=new X.e7()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
if(null!=c){t=u.b
u.b=c
if(c!=null)c.gq().h(0,u.gh2())
s=new D.M("mover",t,u.b,u,[U.ah])
s.b=!0
u.ay(s)}s=u.c
if(!(Math.abs(s-b)<$.T().a)){u.c=b
s=new D.M("fov",s,b,u,[P.C])
s.b=!0
u.ay(s)}s=u.d
if(!(Math.abs(s-d)<$.T().a)){u.d=d
s=new D.M("near",s,d,u,[P.C])
s.b=!0
u.ay(s)}s=u.e
if(!(Math.abs(s-a)<$.T().a)){u.e=a
s=new D.M("far",s,a,u,[P.C])
s.b=!0
u.ay(s)}return u},
bU:function bU(){},
hk:function hk(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hp:function hp(){this.b=this.a=null},
e7:function e7(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cR:function cR(){}},V={
ph:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.j.bw(a-b,u)
return(a<0?a+u:a)+b},
Z:function(a,b,c){if(a==null)return C.c.aq("null",c)
return C.c.aq(C.j.fb(Math.abs(a-0)<$.T().a?0:a,b),c+b+1)},
ch:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.C],"$ab")
u=H.d([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.D)(a),++r){q=V.Z(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.n(u,p,C.c.aq(u[p],s))}return u},
lB:function(a,b){return C.j.kY(Math.pow(b,C.a_.cW(Math.log(H.oR(a))/Math.log(b))))},
c4:function(){var u=$.m0
if(u==null){u=V.b8(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.m0=u}return u},
b8:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.au(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m_:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.D(0,Math.sqrt(c.J(c)))
t=b.bl(u)
s=t.D(0,Math.sqrt(t.J(t)))
r=u.bl(s)
q=new V.U(a.a,a.b,a.c)
p=s.X(0).J(q)
o=r.X(0).J(q)
n=u.X(0).J(q)
return V.b8(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bo:function(){var u=$.m5
if(u==null){u=new V.ab(0,0)
$.m5=u}return u},
m6:function(){var u=$.cK
if(u==null){u=new V.ap(0,0,0)
$.cK=u}return u},
m9:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eb(a,b,c,d)},
eB:function(){var u=$.mo
if(u==null){u=new V.U(0,0,0)
$.mo=u}return u},
mp:function(){var u=$.mn
if(u==null){u=new V.U(0,1,0)
$.mn=u}return u},
of:function(){var u=$.jp
if(u==null){u=new V.U(0,0,1)
$.jp=u}return u},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
aN:function aN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ha:function ha(a){this.a=a},
e1:function e1(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
au:function au(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ab:function ab(a,b){this.a=a
this.b=b},
ap:function ap(a,b,c){this.a=a
this.b=b
this.c=c},
bp:function bp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eb:function eb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Y:function Y(a,b){this.a=a
this.b=b},
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
a0:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.v("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.F(a,0)
t=C.c.F(b,0)
s=new V.id()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
w:function(a){var u=new V.ip()
u.fM(a)
return u},
iW:function(){var u,t
u=new V.iV()
t=P.f
u.siZ(new H.aP([t,V.cO]))
u.sj2(new H.aP([t,V.cV]))
u.c=null
return u},
bj:function bj(){},
ay:function ay(){},
dZ:function dZ(){},
av:function av(){this.a=null},
id:function id(){this.b=this.a=null},
ip:function ip(){this.a=null},
cO:function cO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
er:function er(a,b,c){this.a=a
this.b=b
this.c=c},
cV:function cV(a,b){this.a=a
this.b=b
this.c=null},
iV:function iV(){this.c=this.b=this.a=null},
cW:function cW(a){this.b=a
this.a=this.c=null},
pd:function(a){P.o6(C.W,new V.kY(a))},
o1:function(a,b){var u=new V.it()
u.fN(a,!0)
return u},
by:function by(){},
kY:function kY(a){this.a=a},
h0:function h0(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hl:function hl(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hm:function hm(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i6:function i6(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ia:function ia(a,b){this.a=a
this.b=b
this.c=null},
ib:function ib(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
it:function it(){this.b=this.a=null},
iv:function iv(a){this.a=a},
iu:function iu(a){this.a=a},
iw:function iw(a){this.a=a},
iM:function iM(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.d=c},
iO:function iO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iN:function iN(){}},U={
l6:function(){var u=new U.fS()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
lR:function(a){var u=new U.dC()
u.a=a
return u},
fS:function fS(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dC:function dC(){this.b=this.a=null},
cz:function cz(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ah:function ah(){},
ey:function ey(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ez:function ez(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eA:function eA(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dB:function dB(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},dD:function dD(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},dI:function dI(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aB:function aB(){}},A={
nJ:function(a,b){var u,t
u=a.at
t=new A.e0(b,u)
t.dr(b,u)
t.fK(a,b)
return t},
lj:function(a,b,c,d,e){var u=new A.j3(a,b,c,e)
u.f=d
u.sjd(P.nH(d,0,!1,P.o))
return u},
dx:function dx(a,b,c){this.a=a
this.b=b
this.c=c},
fH:function fH(a){this.a=a},
e0:function e0(a,b){var _=this
_.bK=_.er=_.bJ=_.at=_.aC=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eI=_.cQ=_.eH=_.bX=_.eG=_.eF=_.bW=_.bV=_.eE=_.eD=_.bU=_.bT=_.bS=_.eC=_.eB=_.bR=_.eA=_.ez=_.bQ=_.ey=_.ex=_.bP=_.bO=_.ew=_.ev=_.bN=_.bM=_.eu=_.es=_.bL=null
_.cV=_.eM=_.cU=_.eL=_.cT=_.eK=_.cS=_.eJ=_.cR=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hL:function hL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aC=b3
_.at=b4
_.bJ=b5},
cX:function cX(a,b,c){this.a=a
this.b=b
this.c=c},
d0:function d0(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cZ:function cZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
d1:function d1(a,b,c,d,e,f,g,h,i,j){var _=this
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
d_:function d_(a,b,c,d,e,f,g,h,i,j){var _=this
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
d2:function d2(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cN:function cN(){},
bY:function bY(a,b){this.a=a
this.b=b},
ef:function ef(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
et:function et(){},
j9:function j9(a){this.a=a},
Q:function Q(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j5:function j5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j6:function j6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j8:function j8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j3:function j3(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
a1:function a1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j4:function j4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
N:function N(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j7:function j7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ja:function ja(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cY:function cY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
ku:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dj:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.U(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.U(o+a3,n+a1,m+a2)
u.b=l
k=new V.U(o-a3,n-a1,m-a2)
u.c=k
j=new V.U(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.ku(t)
f=F.ku(u.b)
e=F.pf(d,a0,new F.kt(u,F.ku(u.c),F.ku(u.d),f,g,c),b)
if(e!=null)a.kv(e)},
pf:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.aC,P.C,P.C]})
if(a<1)return
if(b<1)return
u=F.lh()
t=H.d([],[F.aC])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.jq(null,null,new V.aN(p,0,0,1),null,null,new V.ab(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cM(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.jq(null,null,new V.aN(j,i,h,1),null,null,new V.ab(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cM(d))}}u.d.jE(a+1,b+1,t)
return u},
cw:function(a,b,c){var u,t
u=new F.aa()
t=a.a
if(t==null)H.r(P.v("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.r(P.v("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.ab()
return u},
nE:function(a,b){var u,t
u=new F.bm()
t=a.a
if(t==null)H.r(P.v("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.r(P.v("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.ab()
return u},
lh:function(){var u,t
u=new F.ed()
t=new F.jr(u)
t.b=!1
t.sje(H.d([],[F.aC]))
u.a=t
t=new F.is(u)
t.scv(H.d([],[F.bJ]))
u.b=t
t=new F.ir(u)
t.shx(H.d([],[F.bm]))
u.c=t
t=new F.iq(u)
t.shl(H.d([],[F.aa]))
u.d=t
u.e=null
return u},
jq:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.aC()
t=new F.jw(u)
t.scv(H.d([],[F.bJ]))
u.b=t
t=new F.jv(u)
s=[F.bm]
t.shy(H.d([],s))
t.shz(H.d([],s))
u.c=t
t=new F.js(u)
s=[F.aa]
t.shm(H.d([],s))
t.shn(H.d([],s))
t.sho(H.d([],s))
u.d=t
h=$.n7()
u.e=0
t=$.aZ()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bt().a)!==0?e:null
u.x=(s&$.bs().a)!==0?b:null
u.y=(s&$.bu().a)!==0?f:null
u.z=(s&$.bv().a)!==0?g:null
u.Q=(s&$.n8().a)!==0?c:null
u.ch=(s&$.cl().a)!==0?i:0
u.cx=(s&$.br().a)!==0?a:null
return u},
kt:function kt(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aa:function aa(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bm:function bm(){this.b=this.a=null},
bJ:function bJ(){this.a=null},
ed:function ed(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iq:function iq(a){this.a=a
this.b=null},
ir:function ir(a){this.a=a
this.b=null},
is:function is(a){this.a=a
this.b=null},
aC:function aC(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jy:function jy(a){this.a=a},
jx:function jx(a){this.a=a},
jr:function jr(a){this.a=a
this.c=this.b=null},
js:function js(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jt:function jt(a,b){this.a=a
this.b=b},
ju:function ju(a,b){this.a=a
this.b=b},
jv:function jv(a){this.a=a
this.c=this.b=null},
jw:function jw(a){this.a=a
this.b=null}},T={cT:function cT(){},em:function em(){},iP:function iP(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},cU:function cU(){var _=this
_.e=_.d=_.c=_.b=_.a=null},iQ:function iQ(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},iS:function iS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},iR:function iR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},B={
mQ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
u=V.o1("Test 015",!0)
t=W.l4(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.B(u.a,t)
s=[P.f]
u.eb(H.d(["Test of Material Lighting shader with bump mapping, reflections, refractions."],s))
u.jB(H.d(["bumpMaps","controls"],s))
u.eb(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=C.r.c7(s,"testCanvas")
if(r==null)H.r(P.v("Failed to find an element with the identifier, testCanvas."))
q=E.o5(r,!0,!0,!0,!1)
p=X.l8(!0,!0,!1,null,2000,null,0)
p.sej(0,!1)
o=E.lV(null,!0,null,"",null,null)
n=F.lh()
F.dj(n,null,null,1,1,1,0,0,1)
F.dj(n,null,null,1,1,0,1,0,3)
F.dj(n,null,null,1,1,0,0,1,2)
F.dj(n,null,null,1,1,-1,0,0,0)
F.dj(n,null,null,1,1,0,-1,0,0)
F.dj(n,null,null,1,1,0,0,-1,3)
n.aM()
o.sca(0,n)
m=q.f
l=m.a
k=l.createTexture()
C.b.af(l,34067,k)
C.b.aE(l,34067,10242,10497)
C.b.aE(l,34067,10243,10497)
C.b.aE(l,34067,10241,9729)
C.b.aE(l,34067,10240,9729)
C.b.af(l,34067,null)
j=new T.cU()
j.a=0
j.b=k
j.c=!1
j.d=0
m.aZ(j,k,"../resources/maskonaive/posx.jpg",34069,!1,!1)
m.aZ(j,k,"../resources/maskonaive/negx.jpg",34070,!1,!1)
m.aZ(j,k,"../resources/maskonaive/posy.jpg",34071,!1,!1)
m.aZ(j,k,"../resources/maskonaive/negy.jpg",34072,!1,!1)
m.aZ(j,k,"../resources/maskonaive/posz.jpg",34073,!1,!1)
m.aZ(j,k,"../resources/maskonaive/negz.jpg",34074,!1,!1)
i=new O.e_()
i.sh9(O.l5(V.au))
i.e.b8(i.ghM(),i.ghO())
m=new O.b7(i,"emission")
m.c=C.d
m.f=new V.y(0,0,0)
i.f=m
m=new O.b7(i,"ambient")
m.c=C.d
m.f=new V.y(0,0,0)
i.r=m
m=new O.b7(i,"diffuse")
m.c=C.d
m.f=new V.y(0,0,0)
i.x=m
m=new O.b7(i,"invDiffuse")
m.c=C.d
m.f=new V.y(0,0,0)
i.y=m
m=new O.hN(i,"specular")
m.c=C.d
m.f=new V.y(0,0,0)
m.ch=100
i.z=m
m=new O.hK(i,"bump")
m.c=C.d
i.Q=m
i.ch=null
m=new O.b7(i,"reflect")
m.c=C.d
m.f=new V.y(0,0,0)
i.cx=m
m=new O.hM(i,"refract")
m.c=C.d
m.f=new V.y(0,0,0)
m.ch=1
i.cy=m
m=new O.hJ(i,"alpha")
m.c=C.d
m.f=1
i.db=m
m=new D.dV()
m.bz(D.a8)
m.shi(H.d([],[D.bA]))
m.siC(H.d([],[D.e8]))
m.siY(H.d([],[D.eg]))
m.sja(H.d([],[D.en]))
m.sjb(H.d([],[D.eo]))
m.sjc(H.d([],[D.ep]))
m.Q=null
m.ch=null
m.dj(m.ghK(),m.gil(),m.giq())
i.dx=m
l=m.Q
if(l==null){l=D.P()
m.Q=l
m=l}else m=l
m.h(0,i.giM())
m=i.dx
l=m.ch
if(l==null){l=D.P()
m.ch=l
m=l}else m=l
l=i.gb_()
m.h(0,l)
i.dy=null
m=i.dx
h=V.mp()
g=U.lR(V.m_(V.m6(),h,new V.U(-1,-1,-1)))
f=new D.bA()
f.c=new V.y(1,1,1)
f.a=V.of()
e=f.b
f.b=g
g.gq().h(0,f.gfS())
g=new D.M("mover",e,f.b,f,[U.ah])
g.b=!0
f.aG(g)
d=new V.y(1,1,1)
if(!f.c.w(0,d)){e=f.c
f.c=d
g=new D.M("color",e,d,f,[V.y])
g.b=!0
f.aG(g)}m.h(0,f)
m=i.r
m.su(0,new V.y(0.1,0.1,0.1))
m=i.x
m.su(0,new V.y(0.1,0.1,0.1))
i.z.su(0,new V.y(0,0,0))
m=i.z
if(m.c===C.d){m.c=C.i
m.bx()
m.bD(100)
g=m.a
g.a=null
g.S(null)}m.bD(10)
m=i.ch
if(m!==j){if(m!=null)m.gq().Y(0,l)
e=i.ch
i.ch=j
j.gq().h(0,l)
m=new D.M("environment",e,i.ch,i,[T.cU])
m.b=!0
i.S(m)}i.cy.saN(0.6)
m=i.cy
m.su(0,new V.y(0.2,0.3,1))
m=i.cx
m.su(0,new V.y(0.6,0.6,0.6))
c=new U.cz()
c.bz(U.ah)
c.b8(c.ghI(),c.gio())
c.e=null
c.f=V.c4()
c.r=0
m=q.r
l=new U.ez()
g=U.l6()
g.sdf(0,!0)
g.sd2(6.283185307179586)
g.sd4(0)
g.sah(0,0)
g.sd3(100)
g.sZ(0)
g.scN(0.5)
l.b=g
f=l.gaX()
g.gq().h(0,f)
g=U.l6()
g.sdf(0,!0)
g.sd2(6.283185307179586)
g.sd4(0)
g.sah(0,0)
g.sd3(100)
g.sZ(0)
g.scN(0.5)
l.c=g
g.gq().h(0,f)
l.d=null
l.e=!1
l.f=!1
l.r=!1
l.x=2.5
l.y=2.5
l.z=2
l.Q=4
l.cx=!1
l.ch=!1
l.cy=0
l.db=0
l.dx=null
l.dy=0
l.fr=null
l.fx=null
b=new X.az(!1,!1,!1)
e=l.d
l.d=b
g=[X.az]
f=new D.M("modifiers",e,b,l,g)
f.b=!0
l.V(f)
f=l.f
if(f!==!1){l.f=!1
f=new D.M("invertX",f,!1,l,[P.R])
f.b=!0
l.V(f)}f=l.r
if(f!==!1){l.r=!1
f=new D.M("invertY",f,!1,l,[P.R])
f.b=!0
l.V(f)}l.bi(m)
c.h(0,l)
m=q.r
l=new U.ey()
f=U.l6()
f.sdf(0,!0)
f.sd2(6.283185307179586)
f.sd4(0)
f.sah(0,0)
f.sd3(100)
f.sZ(0)
f.scN(0.2)
l.b=f
f.gq().h(0,l.gaX())
l.c=null
l.d=!1
l.e=2.5
l.f=2
l.r=4
l.y=!1
l.x=!1
l.z=0
l.Q=null
l.ch=0
l.cx=null
l.cy=null
b=new X.az(!0,!1,!1)
e=l.c
l.c=b
f=new D.M("modifiers",e,b,l,g)
f.b=!0
l.V(f)
l.bi(m)
c.h(0,l)
m=q.r
l=new U.eA()
l.c=0.01
l.d=0
l.e=0
b=new X.az(!1,!1,!1)
l.b=b
g=new D.M("modifiers",null,b,l,g)
g.b=!0
l.V(g)
l.bi(m)
c.h(0,l)
c.h(0,U.lR(V.b8(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
a=X.m3(2000,1.0471975511965976,c,0.1,null)
a0=new M.dD()
a0.sbj(null)
a0.sbr(0,null)
a0.sbs(null)
m=E.lV(null,!0,null,"",null,null)
n=F.lh()
l=n.a
g=new V.U(-1,-1,1)
g=g.D(0,Math.sqrt(g.J(g)))
a1=l.bG(new V.bp(1,2,4,6),new V.aN(1,0,0,1),new V.ap(-1,-1,0),new V.ab(0,1),g,null)
l=n.a
g=new V.U(1,-1,1)
g=g.D(0,Math.sqrt(g.J(g)))
a2=l.bG(new V.bp(0,3,4,6),new V.aN(0,0,1,1),new V.ap(1,-1,0),new V.ab(1,1),g,null)
l=n.a
g=new V.U(1,1,1)
g=g.D(0,Math.sqrt(g.J(g)))
a3=l.bG(new V.bp(0,2,5,6),new V.aN(0,1,0,1),new V.ap(1,1,0),new V.ab(1,0),g,null)
l=n.a
g=V.bo()
f=new V.U(-1,1,1)
f=f.D(0,Math.sqrt(f.J(f)))
a4=l.bG(new V.bp(0,2,4,7),new V.aN(1,1,0,1),new V.ap(-1,1,0),g,f,null)
n.d.jD(H.d([a1,a2,a3,a4],[F.aC]))
n.aM()
m.sca(0,n)
a0.d=m
a0.e=null
m=new O.ee()
m.b=1.0471975511965976
m.d=new V.y(1,1,1)
e=m.c
m.c=j
j.gq().h(0,m.gb_())
l=new D.M("boxTexture",e,m.c,m,[T.cU])
l.b=!0
m.S(l)
a0.sbs(m)
a0.sbr(0,p)
a0.sbj(a)
a5=new M.dI()
a5.shc(0,O.l5(E.ao))
a5.d.b8(a5.ghS(),a5.ghU())
a5.e=null
a5.f=null
a5.r=null
a5.x=null
a6=X.l8(!0,!0,!1,null,2000,null,0)
a5.sbj(null)
a5.sbr(0,a6)
a5.sbs(null)
a5.sbj(a)
a5.sbs(i)
a5.sbr(0,p)
a5.d.h(0,o)
a5.b.sej(0,!1)
m=M.aB
l=H.d([a0,a5],[m])
g=new M.dB()
g.bz(m)
g.e=!1
g.f=null
g.b8(g.gis(),g.giu())
g.ae(0,l)
m=q.d
if(m!==g){if(m!=null)m.gq().Y(0,q.gdt())
q.d=g
g.gq().h(0,q.gdt())
q.du()}m=new V.ia("controls",!0)
l=C.r.c7(s,"controls")
m.c=l
if(l==null)H.r("Failed to find controls for RadioGroup")
m.e9(0,"Silver",new B.kL(i),!0)
m.ag(0,"Gold",new B.kM(i))
m.ag(0,"Glass",new B.kN(i))
m.ag(0,"Blue Glass",new B.kO(i))
m.ag(0,"Water Bubble",new B.kP(i))
m.ag(0,"No Reflection",new B.kQ(i))
m.ag(0,"Pink Distort",new B.kR(i))
m.ag(0,"Cloak",new B.kS(i))
m.ag(0,"White and Shiny",new B.kT(i))
m=new V.iM("bumpMaps",!0,new B.kU(i,q))
s=C.r.c7(s,"bumpMaps")
m.c=s
if(s==null)H.r("Failed to find bumpMaps for Texture2DGroup")
m.ag(0,"../resources/BumpMap1.png",!0)
m.h(0,"../resources/BumpMap2.png")
m.h(0,"../resources/BumpMap3.png")
m.h(0,"../resources/BumpMap4.png")
m.h(0,"../resources/BumpMap5.png")
m.h(0,"../resources/ScrewBumpMap.png")
m.h(0,"../resources/CtrlPnlBumpMap.png")
s=q.z
if(s==null){s=D.P()
q.z=s}m={func:1,ret:-1,args:[D.z]}
l=H.n(new B.kV(u,i),m)
if(s.b==null)s.sbe(H.d([],[m]))
s=s.b;(s&&C.a).h(s,l)
V.pd(q)},
kL:function kL(a){this.a=a},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a){this.a=a},
kT:function kT(a){this.a=a},
kU:function kU(a,b){this.a=a
this.b=b},
kV:function kV(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ld.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gK:function(a){return H.cL(a)},
i:function(a){return"Instance of '"+H.c6(a)+"'"}}
J.hs.prototype={
i:function(a){return String(a)},
gK:function(a){return a?519018:218159},
$iR:1}
J.dQ.prototype={
w:function(a,b){return null==b},
i:function(a){return"null"},
gK:function(a){return 0},
$iK:1}
J.dS.prototype={
gK:function(a){return 0},
i:function(a){return String(a)}}
J.i5.prototype={}
J.d3.prototype={}
J.bH.prototype={
i:function(a){var u=a[$.mW()]
if(u==null)return this.fF(a)
return"JavaScript function for "+H.m(J.as(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibD:1}
J.b4.prototype={
h:function(a,b){H.B(b,H.t(a,0))
if(!!a.fixed$length)H.r(P.J("add"))
a.push(b)},
Y:function(a,b){var u
if(!!a.fixed$length)H.r(P.J("remove"))
for(u=0;u<a.length;++u)if(J.a9(a[u],b)){a.splice(u,1)
return!0}return!1},
ae:function(a,b){var u,t
H.l(b,"$ii",[H.t(a,0)],"$ai")
if(!!a.fixed$length)H.r(P.J("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.D)(b),++t)a.push(b[t])},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.b0(a))}},
m:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.n(u,t,H.m(a[t]))
return u.join(b)},
kp:function(a){return this.m(a,"")},
kh:function(a,b,c,d){var u,t,s
H.B(b,d)
H.n(c,{func:1,ret:d,args:[d,H.t(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.b0(a))}return t},
kg:function(a,b,c){var u,t,s
H.n(b,{func:1,ret:P.R,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.b0(a))}throw H.c(H.lb())},
kf:function(a,b){return this.kg(a,b,null)},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
fC:function(a,b,c){if(b<0||b>a.length)throw H.c(P.af(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.af(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.t(a,0)])
return H.d(a.slice(b,c),[H.t(a,0)])},
gaD:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.lb())},
ed:function(a,b){var u,t
H.n(b,{func:1,ret:P.R,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.b0(a))}return!1},
a_:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a9(a[u],b))return!0
return!1},
i:function(a){return P.la(a,"[","]")},
gW:function(a){return new J.at(a,a.length,0,[H.t(a,0)])},
gK:function(a){return H.cL(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.J("set length"))
if(b<0)throw H.c(P.af(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cg(a,b))
return a[b]},
n:function(a,b,c){H.B(c,H.t(a,0))
if(!!a.immutable$list)H.r(P.J("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cg(a,b))
a[b]=c},
$ii:1,
$ib:1}
J.lc.prototype={}
J.at.prototype={
gL:function(a){return this.d},
A:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.D(u))
s=this.c
if(s>=t){this.sdL(null)
return!1}this.sdL(u[s]);++this.c
return!0},
sdL:function(a){this.d=H.B(a,H.t(this,0))},
$ib3:1}
J.dR.prototype={
kY:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.J(""+a+".toInt()"))},
cW:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.J(""+a+".floor()"))},
au:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.J(""+a+".round()"))},
fb:function(a,b){var u,t
if(b>20)throw H.c(P.af(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bu:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.af(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.a5(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.r(P.J("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.h(t,1)
u=t[1]
if(3>=s)return H.h(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.C("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gK:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
bw:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fJ:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.e6(a,b)},
a9:function(a,b){return(a|0)===a?a/b|0:this.e6(a,b)},
e6:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.J("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
b1:function(a,b){var u
if(a>0)u=this.e5(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
iX:function(a,b){if(b<0)throw H.c(H.aL(b))
return this.e5(a,b)},
e5:function(a,b){return b>31?0:a>>>b},
$iC:1,
$ia4:1}
J.dP.prototype={$io:1}
J.dO.prototype={}
J.c2.prototype={
a5:function(a,b){if(b<0)throw H.c(H.cg(a,b))
if(b>=a.length)H.r(H.cg(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.c(H.cg(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(typeof b!=="string")throw H.c(P.l2(b,null,null))
return a+b},
b5:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.aL(b))
c=P.bK(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
al:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.aL(c))
if(typeof c!=="number")return c.a0()
if(c<0||c>a.length)throw H.c(P.af(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a8:function(a,b){return this.al(a,b,0)},
t:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.aL(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.a0()
if(b<0)throw H.c(P.ic(b,null,null))
if(b>c)throw H.c(P.ic(b,null,null))
if(c>a.length)throw H.c(P.ic(c,null,null))
return a.substring(b,c)},
ax:function(a,b){return this.t(a,b,null)},
l0:function(a){return a.toLowerCase()},
C:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.T)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kD:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.C(c,u)+a},
aq:function(a,b){return this.kD(a,b," ")},
eV:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.af(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eU:function(a,b){return this.eV(a,b,0)},
i:function(a){return a},
gK:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$im2:1,
$if:1}
H.u.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.c.a5(this.a,b)},
$ad4:function(){return[P.o]},
$ax:function(){return[P.o]},
$ai:function(){return[P.o]},
$ab:function(){return[P.o]}}
H.h7.prototype={}
H.c3.prototype={
gW:function(a){return new H.cB(this,this.gl(this),0,[H.al(this,"c3",0)])},
c5:function(a,b){return this.fE(0,H.n(b,{func:1,ret:P.R,args:[H.al(this,"c3",0)]}))}}
H.cB.prototype={
gL:function(a){return this.d},
A:function(){var u,t,s,r
u=this.a
t=J.dn(u)
s=t.gl(u)
if(this.b!==s)throw H.c(P.b0(u))
r=this.c
if(r>=s){this.sba(null)
return!1}this.sba(t.M(u,r));++this.c
return!0},
sba:function(a){this.d=H.B(a,H.t(this,0))},
$ib3:1}
H.hG.prototype={
gW:function(a){return new H.hH(J.bR(this.a),this.b,this.$ti)},
gl:function(a){return J.aD(this.a)},
M:function(a,b){return this.b.$1(J.fE(this.a,b))},
$ai:function(a,b){return[b]}}
H.hH.prototype={
A:function(){var u=this.b
if(u.A()){this.sba(this.c.$1(u.gL(u)))
return!0}this.sba(null)
return!1},
gL:function(a){return this.a},
sba:function(a){this.a=H.B(a,H.t(this,1))},
$ab3:function(a,b){return[b]}}
H.hI.prototype={
gl:function(a){return J.aD(this.a)},
M:function(a,b){return this.b.$1(J.fE(this.a,b))},
$ac3:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.d5.prototype={
gW:function(a){return new H.jB(J.bR(this.a),this.b,this.$ti)}}
H.jB.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(t.$1(u.gL(u)))return!0
return!1},
gL:function(a){var u=this.a
return u.gL(u)}}
H.c_.prototype={}
H.d4.prototype={
n:function(a,b,c){H.B(c,H.al(this,"d4",0))
throw H.c(P.J("Cannot modify an unmodifiable list"))}}
H.ev.prototype={}
H.fU.prototype={
i:function(a){return P.lg(this)},
n:function(a,b,c){H.B(b,H.t(this,0))
H.B(c,H.t(this,1))
return H.nt()},
$iF:1}
H.fV.prototype={
gl:function(a){return this.a},
bH:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bH(0,b))return
return this.dM(b)},
dM:function(a){return this.b[H.I(a)]},
I:function(a,b){var u,t,s,r,q
u=H.t(this,1)
H.n(b,{func:1,ret:-1,args:[H.t(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.B(this.dM(q),u))}}}
H.ie.prototype={}
H.j0.prototype={
ap:function(a){var u,t,s
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
H.i1.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hu.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.m(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.m(this.a)+")"}}
H.jd.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kZ.prototype={
$1:function(a){if(!!J.V(a).$ibC)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:18}
H.fb.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iaw:1}
H.cr.prototype={
i:function(a){return"Closure '"+H.c6(this).trim()+"'"},
$ibD:1,
gl3:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iJ.prototype={}
H.iA.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ck(u)+"'"}}
H.co.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.co))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gK:function(a){var u,t
u=this.c
if(u==null)t=H.cL(this.a)
else t=typeof u!=="object"?J.du(u):H.cL(u)
return(t^H.cL(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.c6(u)+"'")}}
H.j2.prototype={
i:function(a){return this.a}}
H.fQ.prototype={
i:function(a){return this.a}}
H.im.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.aP.prototype={
gl:function(a){return this.a},
gko:function(a){return this.a===0},
gaa:function(a){return new H.hy(this,[H.t(this,0)])},
bH:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.dI(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.dI(t,b)}else return this.kl(b)},
kl:function(a){var u=this.d
if(u==null)return!1
return this.cZ(this.cj(u,this.cY(a)),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bA(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bA(r,b)
s=t==null?null:t.b
return s}else return this.km(b)},
km:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.cj(u,this.cY(a))
s=this.cZ(t,a)
if(s<0)return
return t[s].b},
n:function(a,b,c){var u,t
H.B(b,H.t(this,0))
H.B(c,H.t(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.ct()
this.b=u}this.dz(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.ct()
this.c=t}this.dz(t,b,c)}else this.kn(b,c)},
kn:function(a,b){var u,t,s,r
H.B(a,H.t(this,0))
H.B(b,H.t(this,1))
u=this.d
if(u==null){u=this.ct()
this.d=u}t=this.cY(a)
s=this.cj(u,t)
if(s==null)this.cB(u,t,[this.cu(a,b)])
else{r=this.cZ(s,a)
if(r>=0)s[r].b=b
else s.push(this.cu(a,b))}},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.b0(this))
u=u.c}},
dz:function(a,b,c){var u
H.B(b,H.t(this,0))
H.B(c,H.t(this,1))
u=this.bA(a,b)
if(u==null)this.cB(a,b,this.cu(b,c))
else u.b=c},
hF:function(){this.r=this.r+1&67108863},
cu:function(a,b){var u,t
u=new H.hx(H.B(a,H.t(this,0)),H.B(b,H.t(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.hF()
return u},
cY:function(a){return J.du(a)&0x3ffffff},
cZ:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a9(a[t].a,b))return t
return-1},
i:function(a){return P.lg(this)},
bA:function(a,b){return a[b]},
cj:function(a,b){return a[b]},
cB:function(a,b,c){a[b]=c},
hh:function(a,b){delete a[b]},
dI:function(a,b){return this.bA(a,b)!=null},
ct:function(){var u=Object.create(null)
this.cB(u,"<non-identifier-key>",u)
this.hh(u,"<non-identifier-key>")
return u}}
H.hx.prototype={}
H.hy.prototype={
gl:function(a){return this.a.a},
gW:function(a){var u,t
u=this.a
t=new H.hz(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hz.prototype={
gL:function(a){return this.d},
A:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.b0(u))
else{u=this.c
if(u==null){this.sdw(null)
return!1}else{this.sdw(u.a)
this.c=this.c.c
return!0}}},
sdw:function(a){this.d=H.B(a,H.t(this,0))},
$ib3:1}
H.kG.prototype={
$1:function(a){return this.a(a)},
$S:18}
H.kH.prototype={
$2:function(a,b){return this.a(a,b)},
$S:35}
H.kI.prototype={
$1:function(a){return this.a(H.I(a))},
$S:33}
H.ht.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$im2:1,
$inY:1}
H.cG.prototype={$icG:1}
H.bI.prototype={$ibI:1,$io7:1}
H.e2.prototype={
gl:function(a){return a.length},
$iL:1,
$aL:function(){}}
H.cH.prototype={
j:function(a,b){H.bi(b,a,a.length)
return a[b]},
n:function(a,b,c){H.oW(c)
H.bi(b,a,a.length)
a[b]=c},
$ac_:function(){return[P.C]},
$ax:function(){return[P.C]},
$ii:1,
$ai:function(){return[P.C]},
$ib:1,
$ab:function(){return[P.C]}}
H.e3.prototype={
n:function(a,b,c){H.ae(c)
H.bi(b,a,a.length)
a[b]=c},
$ac_:function(){return[P.o]},
$ax:function(){return[P.o]},
$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
H.hV.prototype={
j:function(a,b){H.bi(b,a,a.length)
return a[b]}}
H.hW.prototype={
j:function(a,b){H.bi(b,a,a.length)
return a[b]}}
H.hX.prototype={
j:function(a,b){H.bi(b,a,a.length)
return a[b]}}
H.hY.prototype={
j:function(a,b){H.bi(b,a,a.length)
return a[b]}}
H.hZ.prototype={
j:function(a,b){H.bi(b,a,a.length)
return a[b]}}
H.e4.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bi(b,a,a.length)
return a[b]},
$ipC:1}
H.cI.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bi(b,a,a.length)
return a[b]},
$icI:1,
$iS:1}
H.d9.prototype={}
H.da.prototype={}
H.db.prototype={}
H.dc.prototype={}
P.jD.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:29}
P.jC.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:42}
P.jE.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jF.prototype={
$0:function(){this.a.$0()},
$S:0}
P.fi.prototype={
h0:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.cf(new P.ki(this,b),0),a)
else throw H.c(P.J("`setTimeout()` not found."))},
h1:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.cf(new P.kh(this,a,Date.now(),b),0),a)
else throw H.c(P.J("Periodic timer."))},
$ibc:1}
P.ki.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.kh.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.fJ(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.bh.prototype={
ku:function(a){if(this.c!==6)return!0
return this.b.b.dc(H.n(this.d,{func:1,ret:P.R,args:[P.W]}),a.a,P.R,P.W)},
kk:function(a){var u,t,s,r
u=this.e
t=P.W
s={futureOr:1,type:H.t(this,1)}
r=this.b.b
if(H.fB(u,{func:1,args:[P.W,P.aw]}))return H.ly(r.kR(u,a.a,a.b,null,t,P.aw),s)
else return H.ly(r.dc(H.n(u,{func:1,args:[P.W]}),a.a,null,t),s)}}
P.aJ.prototype={
fa:function(a,b,c){var u,t,s,r
u=H.t(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.a2
if(t!==C.l){t.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.oJ(b,t)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aJ(0,$.a2,[c])
r=b==null?1:3
this.dA(new P.bh(s,r,a,b,[u,c]))
return s},
kX:function(a,b){return this.fa(a,null,b)},
dA:function(a){var u,t
u=this.a
if(u<=1){a.a=H.e(this.c,"$ibh")
this.c=a}else{if(u===2){t=H.e(this.c,"$iaJ")
u=t.a
if(u<4){t.dA(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.kB(null,null,u,H.n(new P.jO(this,a),{func:1,ret:-1}))}},
dZ:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.e(this.c,"$ibh")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.e(this.c,"$iaJ")
t=p.a
if(t<4){p.dZ(a)
return}this.a=t
this.c=p.c}u.a=this.bB(a)
t=this.b
t.toString
P.kB(null,null,t,H.n(new P.jS(u,this),{func:1,ret:-1}))}},
cz:function(){var u=H.e(this.c,"$ibh")
this.c=null
return this.bB(u)},
bB:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dE:function(a){var u,t,s
u=H.t(this,0)
H.ly(a,{futureOr:1,type:u})
t=this.$ti
if(H.dm(a,"$icy",t,"$acy"))if(H.dm(a,"$iaJ",t,null))P.mq(a,this)
else P.ok(a,this)
else{s=this.cz()
H.B(a,u)
this.a=4
this.c=a
P.d8(this,s)}},
dF:function(a,b){var u
H.e(b,"$iaw")
u=this.cz()
this.a=8
this.c=new P.am(a,b)
P.d8(this,u)},
$icy:1}
P.jO.prototype={
$0:function(){P.d8(this.a,this.b)},
$S:0}
P.jS.prototype={
$0:function(){P.d8(this.b,this.a.a)},
$S:0}
P.jP.prototype={
$1:function(a){var u=this.a
u.a=0
u.dE(a)},
$S:29}
P.jQ.prototype={
$2:function(a,b){H.e(b,"$iaw")
this.a.dF(a,b)},
$1:function(a){return this.$2(a,null)},
$S:31}
P.jR.prototype={
$0:function(){this.a.dF(this.b,this.c)},
$S:0}
P.jV.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.f8(H.n(r.d,{func:1}),null)}catch(q){t=H.ai(q)
s=H.ci(q)
if(this.d){r=H.e(this.a.a.c,"$iam").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.e(this.a.a.c,"$iam")
else p.b=new P.am(t,s)
p.a=!0
return}if(!!J.V(u).$icy){if(u instanceof P.aJ&&u.a>=4){if(u.a===8){r=this.b
r.b=H.e(u.c,"$iam")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.kX(new P.jW(o),null)
r.a=!1}},
$S:3}
P.jW.prototype={
$1:function(a){return this.a},
$S:34}
P.jU.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.t(s,0)
q=H.B(this.c,r)
p=H.t(s,1)
this.a.b=s.b.b.dc(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ai(o)
t=H.ci(o)
s=this.a
s.b=new P.am(u,t)
s.a=!0}},
$S:3}
P.jT.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.e(this.a.a.c,"$iam")
r=this.c
if(r.ku(u)&&r.e!=null){q=this.b
q.b=r.kk(u)
q.a=!1}}catch(p){t=H.ai(p)
s=H.ci(p)
r=H.e(this.a.a.c,"$iam")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.am(t,s)
n.a=!0}},
$S:3}
P.eE.prototype={}
P.iD.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.aJ(0,$.a2,[P.o])
u.a=0
s=H.t(this,0)
r=H.n(new P.iF(u,this),{func:1,ret:-1,args:[s]})
H.n(new P.iG(u,t),{func:1,ret:-1})
W.a7(this.a,this.b,r,!1,s)
return t}}
P.iF.prototype={
$1:function(a){H.B(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.K,args:[H.t(this.b,0)]}}}
P.iG.prototype={
$0:function(){this.b.dE(this.a.a)},
$S:0}
P.cQ.prototype={}
P.iE.prototype={}
P.bc.prototype={}
P.am.prototype={
i:function(a){return H.m(this.a)},
$ibC:1}
P.ks.prototype={$ipR:1}
P.kA.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.e6()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:0}
P.k1.prototype={
kS:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
try{if(C.l===$.a2){a.$0()
return}P.mC(null,null,this,a,-1)}catch(s){u=H.ai(s)
t=H.ci(s)
P.kz(null,null,this,u,H.e(t,"$iaw"))}},
kT:function(a,b,c){var u,t,s
H.n(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.l===$.a2){a.$1(b)
return}P.mD(null,null,this,a,b,-1,c)}catch(s){u=H.ai(s)
t=H.ci(s)
P.kz(null,null,this,u,H.e(t,"$iaw"))}},
jK:function(a,b){return new P.k3(this,H.n(a,{func:1,ret:b}),b)},
cG:function(a){return new P.k2(this,H.n(a,{func:1,ret:-1}))},
ef:function(a,b){return new P.k4(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
f8:function(a,b){H.n(a,{func:1,ret:b})
if($.a2===C.l)return a.$0()
return P.mC(null,null,this,a,b)},
dc:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.a2===C.l)return a.$1(b)
return P.mD(null,null,this,a,b,c,d)},
kR:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.a2===C.l)return a.$2(b,c)
return P.oK(null,null,this,a,b,c,d,e,f)}}
P.k3.prototype={
$0:function(){return this.a.f8(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.k2.prototype={
$0:function(){return this.a.kS(this.b)},
$S:3}
P.k4.prototype={
$1:function(a){var u=this.c
return this.a.kT(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.k_.prototype={
gW:function(a){var u=new P.eT(this,this.r,this.$ti)
u.c=this.e
return u},
gl:function(a){return this.a},
a_:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.e(u[b],"$ica")!=null}else{t=this.hd(b)
return t}},
hd:function(a){var u=this.d
if(u==null)return!1
return this.cg(this.dN(u,a),a)>=0},
h:function(a,b){var u,t
H.B(b,H.t(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.lo()
this.b=u}return this.dB(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.lo()
this.c=t}return this.dB(t,b)}else return this.h4(0,b)},
h4:function(a,b){var u,t,s
H.B(b,H.t(this,0))
u=this.d
if(u==null){u=P.lo()
this.d=u}t=this.dG(b)
s=u[t]
if(s==null)u[t]=[this.cd(b)]
else{if(this.cg(s,b)>=0)return!1
s.push(this.cd(b))}return!0},
Y:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iI(this.c,b)
else return this.iF(0,b)},
iF:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.dN(u,b)
s=this.cg(t,b)
if(s<0)return!1
this.e7(t.splice(s,1)[0])
return!0},
dB:function(a,b){H.B(b,H.t(this,0))
if(H.e(a[b],"$ica")!=null)return!1
a[b]=this.cd(b)
return!0},
iI:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$ica")
if(u==null)return!1
this.e7(u)
delete a[b]
return!0},
dD:function(){this.r=1073741823&this.r+1},
cd:function(a){var u,t
u=new P.ca(H.B(a,H.t(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dD()
return u},
e7:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dD()},
dG:function(a){return J.du(a)&1073741823},
dN:function(a,b){return a[this.dG(b)]},
cg:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a9(a[t].a,b))return t
return-1}}
P.ca.prototype={}
P.eT.prototype={
gL:function(a){return this.d},
A:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.b0(u))
else{u=this.c
if(u==null){this.sdC(null)
return!1}else{this.sdC(H.B(u.a,H.t(this,0)))
this.c=this.c.b
return!0}}},
sdC:function(a){this.d=H.B(a,H.t(this,0))},
$ib3:1}
P.hA.prototype={
$2:function(a,b){this.a.n(0,H.B(a,this.b),H.B(b,this.c))},
$S:5}
P.hB.prototype={$ii:1,$ib:1}
P.x.prototype={
gW:function(a){return new H.cB(a,this.gl(a),0,[H.bP(this,a,"x",0)])},
M:function(a,b){return this.j(a,b)},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.bP(this,a,"x",0)]})
u=this.gl(a)
for(t=0;t<u;++t){b.$1(this.j(a,t))
if(u!==this.gl(a))throw H.c(P.b0(a))}},
l_:function(a,b){var u,t
u=H.d([],[H.bP(this,a,"x",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.n(u,t,this.j(a,t))
return u},
kZ:function(a){return this.l_(a,!0)},
kd:function(a,b,c,d){var u
H.B(d,H.bP(this,a,"x",0))
P.bK(b,c,this.gl(a),null,null,null)
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.la(a,"[","]")}}
P.hD.prototype={}
P.hE.prototype={
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
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.bP(this,a,"ag",0),H.bP(this,a,"ag",1)]})
for(u=J.bR(this.gaa(a));u.A();){t=u.gL(u)
b.$2(t,this.j(a,t))}},
gl:function(a){return J.aD(this.gaa(a))},
i:function(a){return P.lg(a)},
$iF:1}
P.kj.prototype={
n:function(a,b,c){H.B(b,H.t(this,0))
H.B(c,H.t(this,1))
throw H.c(P.J("Cannot modify unmodifiable map"))}}
P.hF.prototype={
j:function(a,b){return J.lH(this.a,b)},
n:function(a,b,c){J.l_(this.a,H.B(b,H.t(this,0)),H.B(c,H.t(this,1)))},
I:function(a,b){J.lJ(this.a,H.n(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gl:function(a){return J.aD(this.a)},
i:function(a){return J.as(this.a)},
$iF:1}
P.ew.prototype={}
P.k6.prototype={
ae:function(a,b){var u
for(u=J.bR(H.l(b,"$ii",this.$ti,"$ai"));u.A();)this.h(0,u.gL(u))},
i:function(a){return P.la(this,"{","}")},
M:function(a,b){var u,t,s
if(b<0)H.r(P.af(b,0,null,"index",null))
for(u=P.oo(this,this.r,H.t(this,0)),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.c(P.a_(b,this,"index",null,t))},
$ii:1,
$imb:1}
P.eU.prototype={}
P.fo.prototype={}
P.fM.prototype={
kw:function(a,b,c,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a0=P.bK(c,a0,b.length,null,null,null)
u=$.na()
for(t=c,s=t,r=null,q=-1,p=-1,o=0;t<a0;t=n){n=t+1
m=C.c.F(b,t)
if(m===37){l=n+2
if(l<=a0){k=H.kF(C.c.F(b,n))
j=H.kF(C.c.F(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.h(u,i)
h=u[i]
if(h>=0){i=C.c.a5("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.aj("")
g=r.a+=C.c.t(b,s,t)
r.a=g+H.c7(m)
s=n
continue}}throw H.c(P.a5("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.c.t(b,s,a0)
f=g.length
if(q>=0)P.lM(b,p,a0,q,o,f)
else{e=C.f.bw(f-1,4)+1
if(e===1)throw H.c(P.a5("Invalid base64 encoding length ",b,a0))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.b5(b,c,a0,g.charCodeAt(0)==0?g:g)}d=a0-c
if(q>=0)P.lM(b,p,a0,q,o,d)
else{e=C.f.bw(d,4)
if(e===1)throw H.c(P.a5("Invalid base64 encoding length ",b,a0))
if(e>1)b=C.c.b5(b,a0,a0,e===2?"==":"=")}return b},
$abX:function(){return[[P.b,P.o],P.f]}}
P.fN.prototype={
$abz:function(){return[[P.b,P.o],P.f]}}
P.bX.prototype={}
P.bz.prototype={}
P.h9.prototype={
$abX:function(){return[P.f,[P.b,P.o]]}}
P.ho.prototype={
i:function(a){return this.a}}
P.hn.prototype={
he:function(a,b,c){var u,t,s,r,q,p
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
default:p=null}if(p!=null){if(q==null)q=new P.aj("")
if(r>b)q.a+=C.c.t(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nm(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abz:function(){return[P.f,P.f]}}
P.jm.prototype={
gkc:function(){return C.U}}
P.jo.prototype={
bk:function(a,b,c){var u,t,s
c=P.bK(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.kq(t)
if(s.hp(a,b,c)!==c)s.e8(J.ng(a,c-1),0)
return new Uint8Array(t.subarray(0,H.oE(0,s.b,t.length)))},
cL:function(a){return this.bk(a,0,null)},
$abz:function(){return[P.f,[P.b,P.o]]}}
P.kq.prototype={
e8:function(a,b){var u,t,s,r,q
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
hp:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.a5(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.F(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.e8(r,C.c.F(a,p)))s=p}else if(r<=2047){q=this.b
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
P.jn.prototype={
bk:function(a,b,c){var u,t,s,r
H.l(a,"$ib",[P.o],"$ab")
u=P.oa(!1,a,b,c)
if(u!=null)return u
c=P.bK(b,c,J.aD(a),null,null,null)
t=new P.aj("")
s=new P.ko(!1,t)
s.bk(a,b,c)
if(s.e>0){H.r(P.a5("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.c7(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cL:function(a){return this.bk(a,0,null)},
$abz:function(){return[[P.b,P.o],P.f]}}
P.ko.prototype={
bk:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.l(a,"$ib",[P.o],"$ab")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.kp(this,b,c,a)
$label0$0:for(q=J.dn(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.j(a,o)
if(typeof n!=="number")return n.c6()
if((n&192)!==128){m=P.a5("Bad UTF-8 encoding 0x"+C.f.bu(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.h(C.I,m)
if(u<=C.I[m]){m=P.a5("Overlong encoding of 0x"+C.f.bu(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a5("Character outside valid Unicode range: 0x"+C.f.bu(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.c7(u)
this.c=!1}for(m=o<c;m;){l=P.oL(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.j(a,k)
if(typeof n!=="number")return n.a0()
if(n<0){i=P.a5("Negative UTF-8 code unit: -0x"+C.f.bu(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a5("Bad UTF-8 encoding 0x"+C.f.bu(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.kp.prototype={
$2:function(a,b){this.a.b.a+=P.ei(this.d,a,b)},
$S:38}
P.R.prototype={}
P.an.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.an&&this.a===b.a&&!0},
gK:function(a){var u=this.a
return(u^C.f.b1(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.nu(H.nT(this))
t=P.dE(H.nR(this))
s=P.dE(H.nN(this))
r=P.dE(H.nO(this))
q=P.dE(H.nQ(this))
p=P.dE(H.nS(this))
o=P.nv(H.nP(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.C.prototype={}
P.bB.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.bB&&this.a===b.a},
gK:function(a){return C.f.gK(this.a)},
i:function(a){var u,t,s,r,q
u=new P.h6()
t=this.a
if(t<0)return"-"+new P.bB(0-t).i(0)
s=u.$1(C.f.a9(t,6e7)%60)
r=u.$1(C.f.a9(t,1e6)%60)
q=new P.h5().$1(t%1e6)
return""+C.f.a9(t,36e8)+":"+H.m(s)+":"+H.m(r)+"."+H.m(q)}}
P.h5.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:26}
P.h6.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:26}
P.bC.prototype={}
P.e6.prototype={
i:function(a){return"Throw of null."}}
P.aM.prototype={
gcf:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gce:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gcf()+t+s
if(!this.a)return r
q=this.gce()
p=P.hb(this.b)
return r+q+": "+p}}
P.c8.prototype={
gcf:function(){return"RangeError"},
gce:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.m(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.m(u)
else if(s>u)t=": Not in range "+H.m(u)+".."+H.m(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.m(u)}return t}}
P.hq.prototype={
gcf:function(){return"RangeError"},
gce:function(){var u,t
u=H.ae(this.b)
if(typeof u!=="number")return u.a0()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.m(t)},
gl:function(a){return this.f}}
P.je.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.jb.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cP.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fT.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hb(u)+"."}}
P.i4.prototype={
i:function(a){return"Out of Memory"},
$ibC:1}
P.eh.prototype={
i:function(a){return"Stack Overflow"},
$ibC:1}
P.h_.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eM.prototype={
i:function(a){return"Exception: "+this.a}}
P.hj.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.t(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.F(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.c.a5(r,m)
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
g=""}f=C.c.t(r,i,j)
return t+h+f+g+"\n"+C.c.C(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.m(s)+")"):t}}
P.bD.prototype={}
P.o.prototype={}
P.i.prototype={
c5:function(a,b){var u=H.al(this,"i",0)
return new H.d5(this,H.n(b,{func:1,ret:P.R,args:[u]}),[u])},
gl:function(a){var u,t
u=this.gW(this)
for(t=0;u.A();)++t
return t},
gaV:function(a){var u,t
u=this.gW(this)
if(!u.A())throw H.c(H.lb())
t=u.gL(u)
if(u.A())throw H.c(H.nB())
return t},
M:function(a,b){var u,t,s
if(b<0)H.r(P.af(b,0,null,"index",null))
for(u=this.gW(this),t=0;u.A();){s=u.gL(u)
if(b===t)return s;++t}throw H.c(P.a_(b,this,"index",null,t))},
i:function(a){return P.nA(this,"(",")")}}
P.b3.prototype={}
P.b.prototype={$ii:1}
P.F.prototype={}
P.K.prototype={
gK:function(a){return P.W.prototype.gK.call(this,this)},
i:function(a){return"null"}}
P.a4.prototype={}
P.W.prototype={constructor:P.W,$iW:1,
w:function(a,b){return this===b},
gK:function(a){return H.cL(this)},
i:function(a){return"Instance of '"+H.c6(this)+"'"},
toString:function(){return this.i(this)}}
P.aw.prototype={}
P.f.prototype={$im2:1}
P.aj.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipq:1}
P.jk.prototype={
$2:function(a,b){var u,t,s,r
u=P.f
H.l(a,"$iF",[u,u],"$aF")
H.I(b)
t=J.dp(b).eU(b,"=")
if(t===-1){if(b!=="")J.l_(a,P.lq(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.t(b,0,t)
r=C.c.ax(b,t+1)
u=this.a
J.l_(a,P.lq(s,0,s.length,u,!0),P.lq(r,0,r.length,u,!0))}return a},
$S:46}
P.jg.prototype={
$2:function(a,b){throw H.c(P.a5("Illegal IPv4 address, "+a,this.a,b))},
$S:48}
P.ji.prototype={
$2:function(a,b){throw H.c(P.a5("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:40}
P.jj.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.dq(C.c.t(this.b,a,b),null,16)
if(typeof u!=="number")return u.a0()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:36}
P.cb.prototype={
gfg:function(){return this.b},
gcX:function(a){var u=this.c
if(u==null)return""
if(C.c.a8(u,"["))return C.c.t(u,1,u.length-1)
return u},
gbZ:function(a){var u=this.d
if(u==null)return P.mu(this.a)
return u},
gd8:function(a){var u=this.f
return u==null?"":u},
geP:function(){var u=this.r
return u==null?"":u},
da:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.l(h,"$iF",[P.f,null],"$aF")
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
if(s&&!C.c.a8(d,"/"))d="/"+d
g=P.lp(g,0,0,h)
return new P.cb(i,j,c,f,d,g,this.r)},
d9:function(a,b){return this.da(a,null,null,null,null,null,null,b,null,null)},
gbq:function(){var u,t
if(this.Q==null){u=this.f
t=P.f
this.siE(new P.ew(P.mk(u==null?"":u,C.m),[t,t]))}return this.Q},
geQ:function(){return this.c!=null},
geT:function(){return this.f!=null},
geR:function(){return this.r!=null},
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
if(!!J.V(b).$ilk)if(this.a==b.gc9())if(this.c!=null===b.geQ())if(this.b==b.gfg())if(this.gcX(this)==b.gcX(b))if(this.gbZ(this)==b.gbZ(b))if(this.e===b.gf4(b)){u=this.f
t=u==null
if(!t===b.geT()){if(t)u=""
if(u===b.gd8(b)){u=this.r
t=u==null
if(!t===b.geR()){if(t)u=""
u=u===b.geP()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gK:function(a){var u=this.z
if(u==null){u=C.c.gK(this.i(0))
this.z=u}return u},
siE:function(a){var u=P.f
this.Q=H.l(a,"$iF",[u,u],"$aF")},
$ilk:1,
gc9:function(){return this.a},
gf4:function(a){return this.e}}
P.kk.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.H()
throw H.c(P.a5("Invalid port",this.a,u+1))},
$S:16}
P.kl.prototype={
$1:function(a){return P.fp(C.aa,a,C.m,!1)},
$S:17}
P.kn.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.m(P.fp(C.x,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.m(P.fp(C.x,b,C.m,!0))}},
$S:14}
P.km.prototype={
$2:function(a,b){var u,t
H.I(a)
if(b==null||typeof b==="string")this.a.$2(a,H.I(b))
else for(u=J.bR(H.mP(b,"$ii")),t=this.a;u.A();)t.$2(a,H.I(u.gL(u)))},
$S:44}
P.jf.prototype={
gff:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.h(u,0)
t=this.a
u=u[0]+1
s=C.c.eV(t,"?",u)
r=t.length
if(s>=0){q=P.di(t,s+1,r,C.v,!1)
r=s}else q=null
u=new P.jJ(this,"data",null,null,null,P.di(t,u,r,C.M,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.h(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.kw.prototype={
$1:function(a){return new Uint8Array(96)},
$S:43}
P.kv.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.h(u,a)
u=u[a]
J.nh(u,0,96,b)
return u},
$S:53}
P.kx.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.F(b,t)^96
if(s>=a.length)return H.h(a,s)
a[s]=c}}}
P.ky.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.F(b,0),t=C.c.F(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.h(a,s)
a[s]=c}}}
P.k9.prototype={
geQ:function(){return this.c>0},
geS:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.H()
t=this.e
if(typeof t!=="number")return H.H(t)
t=u+1<t
u=t}else u=!1
return u},
geT:function(){var u=this.f
if(typeof u!=="number")return u.a0()
return u<this.r},
geR:function(){return this.r<this.a.length},
gdR:function(){return this.b===4&&C.c.a8(this.a,"http")},
gdS:function(){return this.b===5&&C.c.a8(this.a,"https")},
gc9:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdR()){this.x="http"
u="http"}else if(this.gdS()){this.x="https"
u="https"}else if(u===4&&C.c.a8(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.a8(this.a,"package")){this.x="package"
u="package"}else{u=C.c.t(this.a,0,u)
this.x=u}return u},
gfg:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.t(this.a,t,u-1):""},
gcX:function(a){var u=this.c
return u>0?C.c.t(this.a,u,this.d):""},
gbZ:function(a){var u
if(this.geS()){u=this.d
if(typeof u!=="number")return u.H()
return P.dq(C.c.t(this.a,u+1,this.e),null,null)}if(this.gdR())return 80
if(this.gdS())return 443
return 0},
gf4:function(a){return C.c.t(this.a,this.e,this.f)},
gd8:function(a){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.a0()
return u<t?C.c.t(this.a,u+1,t):""},
geP:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.ax(t,u+1):""},
gbq:function(){var u=this.f
if(typeof u!=="number")return u.a0()
if(u>=this.r)return C.ab
u=P.f
return new P.ew(P.mk(this.gd8(this),C.m),[u,u])},
da:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.l(h,"$iF",[P.f,null],"$aF")
i=this.gc9()
u=i==="file"
t=this.c
j=t>0?C.c.t(this.a,this.b+3,t):""
f=this.geS()?this.gbZ(this):null
t=this.c
if(t>0)c=C.c.t(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.t(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.a8(d,"/"))d="/"+d
g=P.lp(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.ax(t,s+1)
return new P.cb(i,j,c,f,d,g,b)},
d9:function(a,b){return this.da(a,null,null,null,null,null,null,b,null,null)},
gK:function(a){var u=this.y
if(u==null){u=C.c.gK(this.a)
this.y=u}return u},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.V(b).$ilk&&this.a===b.i(0)},
i:function(a){return this.a},
$ilk:1}
P.jJ.prototype={}
W.A.prototype={}
W.fF.prototype={
gl:function(a){return a.length}}
W.dv.prototype={
i:function(a){return String(a)},
$idv:1}
W.fG.prototype={
i:function(a){return String(a)}}
W.cn.prototype={$icn:1}
W.bT.prototype={$ibT:1}
W.bw.prototype={$ibw:1}
W.bV.prototype={
dg:function(a,b,c){if(c!=null)return this.hq(a,b,P.oS(c,null))
return this.hr(a,b)},
fm:function(a,b){return this.dg(a,b,null)},
hq:function(a,b,c){return a.getContext(b,c)},
hr:function(a,b){return a.getContext(b)},
$ibV:1,
$ilP:1}
W.bW.prototype={
hs:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
ka:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibW:1}
W.bx.prototype={
gl:function(a){return a.length}}
W.cs.prototype={$ics:1}
W.fW.prototype={
gl:function(a){return a.length}}
W.X.prototype={$iX:1}
W.ct.prototype={
gl:function(a){return a.length}}
W.fX.prototype={}
W.b1.prototype={}
W.b2.prototype={}
W.fY.prototype={
gl:function(a){return a.length}}
W.fZ.prototype={
gl:function(a){return a.length}}
W.h1.prototype={
gl:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.cu.prototype={
jG:function(a,b){return a.adoptNode(b)},
c7:function(a,b){return a.getElementById(b)}}
W.h2.prototype={
i:function(a){return String(a)}}
W.dF.prototype={
jX:function(a,b){return a.createHTMLDocument(b)}}
W.dG.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.l(c,"$iac",[P.a4],"$aac")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[[P.ac,P.a4]]},
$ax:function(){return[[P.ac,P.a4]]},
$ii:1,
$ai:function(){return[[P.ac,P.a4]]},
$ib:1,
$ab:function(){return[[P.ac,P.a4]]},
$aE:function(){return[[P.ac,P.a4]]}}
W.dH.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gaU(a))+" x "+H.m(this.gaP(a))},
w:function(a,b){var u
if(b==null)return!1
if(!H.dm(b,"$iac",[P.a4],"$aac"))return!1
u=J.ad(b)
return a.left===u.gbY(b)&&a.top===u.gc2(b)&&this.gaU(a)===u.gaU(b)&&this.gaP(a)===u.gaP(b)},
gK:function(a){return W.ms(C.j.gK(a.left),C.j.gK(a.top),C.j.gK(this.gaU(a)),C.j.gK(this.gaP(a)))},
geg:function(a){return a.bottom},
gaP:function(a){return a.height},
gbY:function(a){return a.left},
gc1:function(a){return a.right},
gc2:function(a){return a.top},
gaU:function(a){return a.width},
$iac:1,
$aac:function(){return[P.a4]}}
W.h3.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.I(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[P.f]},
$ax:function(){return[P.f]},
$ii:1,
$ai:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aE:function(){return[P.f]}}
W.h4.prototype={
gl:function(a){return a.length}}
W.jH.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.e(u[b],"$iO")},
n:function(a,b,c){var u
H.e(c,"$iO")
u=this.b
if(b<0||b>=u.length)return H.h(u,b)
J.l0(this.a,c,u[b])},
h:function(a,b){J.lI(this.a,b)
return b},
gW:function(a){var u=this.kZ(this)
return new J.at(u,u.length,0,[H.t(u,0)])},
$ax:function(){return[W.O]},
$ai:function(){return[W.O]},
$ab:function(){return[W.O]}}
W.O.prototype={
gjJ:function(a){return new W.jK(a)},
gcK:function(a){return new W.jH(a,a.children)},
gek:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.a0()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a0()
if(r<0)r=-r*0
return new P.ac(u,t,s,r,[P.a4])},
i:function(a){return a.localName},
ao:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lU
if(u==null){u=H.d([],[W.aA])
t=new W.e5(u)
C.a.h(u,W.mr(null))
C.a.h(u,W.mt())
$.lU=t
d=t}else d=u
u=$.lT
if(u==null){u=new W.fq(d)
$.lT=u
c=u}else{u.a=d
c=u}}if($.bk==null){u=document
t=u.implementation
t=(t&&C.V).jX(t,"")
$.bk=t
$.l7=t.createRange()
t=$.bk
t.toString
t=t.createElement("base")
H.e(t,"$icn")
t.href=u.baseURI
u=$.bk.head;(u&&C.X).B(u,t)}u=$.bk
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.e(t,"$ibw")}u=$.bk
if(!!this.$ibw)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.bk.body;(u&&C.p).B(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.a_(C.a8,a.tagName)){u=$.l7;(u&&C.O).fu(u,s)
u=$.l7
r=(u&&C.O).jV(u,b)}else{s.innerHTML=b
r=$.bk.createDocumentFragment()
for(u=J.ad(r);t=s.firstChild,t!=null;)u.B(r,t)}u=$.bk.body
if(s==null?u!=null:s!==u)J.lK(s)
c.di(r)
C.r.jG(document,r)
return r},
jW:function(a,b,c){return this.ao(a,b,c,null)},
fz:function(a,b,c,d){a.textContent=null
this.B(a,this.ao(a,b,c,d))},
fw:function(a,b){return this.fz(a,b,null,null)},
b7:function(a,b){return a.getAttribute(b)},
iG:function(a,b){return a.removeAttribute(b)},
fv:function(a,b,c){return a.setAttribute(b,c)},
$iO:1,
gkU:function(a){return a.tagName}}
W.h8.prototype={
$1:function(a){return!!J.V(H.e(a,"$iG")).$iO},
$S:20}
W.p.prototype={$ip:1}
W.j.prototype={
jC:function(a,b,c,d){H.n(c,{func:1,args:[W.p]})
if(c!=null)this.h5(a,b,c,!1)},
h5:function(a,b,c,d){return a.addEventListener(b,H.cf(H.n(c,{func:1,args:[W.p]}),1),!1)},
$ij:1}
W.aF.prototype={$iaF:1}
W.cx.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaF")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aF]},
$ax:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$icx:1,
$aE:function(){return[W.aF]}}
W.he.prototype={
gl:function(a){return a.length}}
W.hi.prototype={
gl:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.dL.prototype={}
W.dM.prototype={
e_:function(a,b,c,d){return a.replaceState(b,c,d)},
gl:function(a){return a.length}}
W.c0.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iG")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.G]},
$ax:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ic0:1,
$aE:function(){return[W.G]}}
W.dN.prototype={}
W.bl.prototype={$ibl:1,
gel:function(a){return a.data}}
W.c1.prototype={$ic1:1,$ilP:1}
W.cA.prototype={$icA:1}
W.b5.prototype={$ib5:1}
W.dU.prototype={}
W.dX.prototype={
i:function(a){return String(a)},
$idX:1}
W.cE.prototype={}
W.hO.prototype={
gl:function(a){return a.length}}
W.hP.prototype={
j:function(a,b){return P.bq(a.get(H.I(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
gaa:function(a){var u=H.d([],[P.f])
this.I(a,new W.hQ(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aag:function(){return[P.f,null]},
$iF:1,
$aF:function(){return[P.f,null]}}
W.hQ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hR.prototype={
j:function(a,b){return P.bq(a.get(H.I(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
gaa:function(a){var u=H.d([],[P.f])
this.I(a,new W.hS(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aag:function(){return[P.f,null]},
$iF:1,
$aF:function(){return[P.f,null]}}
W.hS.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aQ.prototype={$iaQ:1}
W.hT.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaQ")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aQ]},
$ax:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aE:function(){return[W.aQ]}}
W.a6.prototype={$ia6:1}
W.ar.prototype={
gaV:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.c(P.mc("No elements"))
if(t>1)throw H.c(P.mc("More than one element"))
return u.firstChild},
ae:function(a,b){var u,t,s,r,q
H.l(b,"$ii",[W.G],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.ad(t),q=0;q<s;++q)r.B(t,u.firstChild)
return},
n:function(a,b,c){var u,t
H.e(c,"$iG")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.h(t,b)
J.l0(u,c,t[b])},
gW:function(a){var u=this.a.childNodes
return new W.dJ(u,u.length,-1,[H.bP(C.ac,u,"E",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$ax:function(){return[W.G]},
$ai:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
kM:function(a){var u=a.parentNode
if(u!=null)J.fD(u,a)},
kO:function(a,b){var u,t
try{u=a.parentNode
J.l0(u,b,a)}catch(t){H.ai(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fD(a):u},
B:function(a,b){return a.appendChild(H.e(b,"$iG"))},
iH:function(a,b){return a.removeChild(b)},
iK:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.cJ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iG")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.G]},
$ax:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aE:function(){return[W.G]}}
W.aR.prototype={$iaR:1,
gl:function(a){return a.length}}
W.i7.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaR")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aR]},
$ax:function(){return[W.aR]},
$ii:1,
$ai:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aE:function(){return[W.aR]}}
W.ea.prototype={
jV:function(a,b){return a.createContextualFragment(b)},
fu:function(a,b){return a.selectNodeContents(b)}}
W.ik.prototype={
j:function(a,b){return P.bq(a.get(H.I(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
gaa:function(a){var u=H.d([],[P.f])
this.I(a,new W.il(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aag:function(){return[P.f,null]},
$iF:1,
$aF:function(){return[P.f,null]}}
W.il.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.io.prototype={
gl:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.ix.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaS")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aS]},
$ax:function(){return[W.aS]},
$ii:1,
$ai:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aE:function(){return[W.aS]}}
W.aT.prototype={$iaT:1}
W.iy.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaT")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aT]},
$ax:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aE:function(){return[W.aT]}}
W.aU.prototype={$iaU:1,
gl:function(a){return a.length}}
W.iB.prototype={
j:function(a,b){return this.dO(a,H.I(b))},
n:function(a,b,c){this.iS(a,b,c)},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=this.hw(a,u)
if(t==null)return
b.$2(t,this.dO(a,t))}},
gaa:function(a){var u=H.d([],[P.f])
this.I(a,new W.iC(u))
return u},
gl:function(a){return a.length},
dO:function(a,b){return a.getItem(b)},
hw:function(a,b){return a.key(b)},
iS:function(a,b,c){return a.setItem(b,c)},
$aag:function(){return[P.f,P.f]},
$iF:1,
$aF:function(){return[P.f,P.f]}}
W.iC.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:14}
W.aG.prototype={$iaG:1}
W.bb.prototype={$ibb:1}
W.ej.prototype={
ao:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.cb(a,b,c,d)
u=W.nw("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ar(t).ae(0,new W.ar(u))
return t},
hu:function(a,b){return a.insertRow(b)}}
W.ek.prototype={
ao:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.cb(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ao(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaV(u)
s.toString
u=new W.ar(s)
r=u.gaV(u)
t.toString
r.toString
new W.ar(t).ae(0,new W.ar(r))
return t},
dQ:function(a,b){return a.insertCell(b)}}
W.iI.prototype={
ao:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.cb(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ao(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaV(u)
t.toString
s.toString
new W.ar(t).ae(0,new W.ar(s))
return t}}
W.cS.prototype={$icS:1}
W.aV.prototype={$iaV:1}
W.aH.prototype={$iaH:1}
W.iK.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaH")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aH]},
$ax:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aE:function(){return[W.aH]}}
W.iL.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaV")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aV]},
$ax:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aE:function(){return[W.aV]}}
W.iU.prototype={
gl:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.aX.prototype={$iaX:1}
W.iY.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaW")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aW]},
$ax:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aE:function(){return[W.aW]}}
W.iZ.prototype={
gl:function(a){return a.length}}
W.bM.prototype={}
W.jl.prototype={
i:function(a){return String(a)}}
W.jz.prototype={$ilP:1}
W.jA.prototype={
gl:function(a){return a.length}}
W.bg.prototype={
gk6:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.J("deltaY is not supported"))},
gk5:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.J("deltaX is not supported"))},
$ibg:1}
W.d6.prototype={
iL:function(a,b){return a.requestAnimationFrame(H.cf(H.n(b,{func:1,ret:-1,args:[P.a4]}),1))},
hj:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d7.prototype={$id7:1}
W.jI.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iX")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.X]},
$ax:function(){return[W.X]},
$ii:1,
$ai:function(){return[W.X]},
$ib:1,
$ab:function(){return[W.X]},
$aE:function(){return[W.X]}}
W.eH.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
w:function(a,b){var u
if(b==null)return!1
if(!H.dm(b,"$iac",[P.a4],"$aac"))return!1
u=J.ad(b)
return a.left===u.gbY(b)&&a.top===u.gc2(b)&&a.width===u.gaU(b)&&a.height===u.gaP(b)},
gK:function(a){return W.ms(C.j.gK(a.left),C.j.gK(a.top),C.j.gK(a.width),C.j.gK(a.height))},
gaP:function(a){return a.height},
gaU:function(a){return a.width}}
W.jX.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaO")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aO]},
$ax:function(){return[W.aO]},
$ii:1,
$ai:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aE:function(){return[W.aO]}}
W.eZ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iG")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.G]},
$ax:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aE:function(){return[W.G]}}
W.ka.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaU")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aU]},
$ax:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aE:function(){return[W.aU]}}
W.kd.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaG")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aG]},
$ax:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aE:function(){return[W.aG]}}
W.jG.prototype={
I:function(a,b){var u,t,s,r,q,p
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.gaa(this),t=u.length,s=this.a,r=J.ad(s),q=0;q<u.length;u.length===t||(0,H.D)(u),++q){p=u[q]
b.$2(p,r.b7(s,p))}},
gaa:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.d([],[P.f])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.h(u,r)
q=H.e(u[r],"$id7")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aag:function(){return[P.f,P.f]},
$aF:function(){return[P.f,P.f]}}
W.jK.prototype={
j:function(a,b){return J.l1(this.a,H.I(b))},
n:function(a,b,c){J.nl(this.a,b,c)},
gl:function(a){return this.gaa(this).length}}
W.jL.prototype={}
W.ln.prototype={}
W.jM.prototype={}
W.jN.prototype={
$1:function(a){return this.a.$1(H.e(a,"$ip"))},
$S:41}
W.bN.prototype={
fQ:function(a){var u,t
u=$.lG()
if(u.gko(u)){for(t=0;t<262;++t)u.n(0,C.a7[t],W.p_())
for(t=0;t<12;++t)u.n(0,C.B[t],W.p0())}},
b2:function(a){return $.nb().a_(0,W.cv(a))},
aA:function(a,b,c){var u,t,s
u=W.cv(a)
t=$.lG()
s=t.j(0,H.m(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.lv(s.$4(a,b,c,this))},
$iaA:1}
W.E.prototype={
gW:function(a){return new W.dJ(a,this.gl(a),-1,[H.bP(this,a,"E",0)])}}
W.e5.prototype={
b2:function(a){return C.a.ed(this.a,new W.i0(a))},
aA:function(a,b,c){return C.a.ed(this.a,new W.i_(a,b,c))},
$iaA:1}
W.i0.prototype={
$1:function(a){return H.e(a,"$iaA").b2(this.a)},
$S:21}
W.i_.prototype={
$1:function(a){return H.e(a,"$iaA").aA(this.a,this.b,this.c)},
$S:21}
W.f6.prototype={
h_:function(a,b,c,d){var u,t,s
this.a.ae(0,c)
u=b.c5(0,new W.k7())
t=b.c5(0,new W.k8())
this.b.ae(0,u)
s=this.c
s.ae(0,C.J)
s.ae(0,t)},
b2:function(a){return this.a.a_(0,W.cv(a))},
aA:function(a,b,c){var u,t
u=W.cv(a)
t=this.c
if(t.a_(0,H.m(u)+"::"+b))return this.d.jH(c)
else if(t.a_(0,"*::"+b))return this.d.jH(c)
else{t=this.b
if(t.a_(0,H.m(u)+"::"+b))return!0
else if(t.a_(0,"*::"+b))return!0
else if(t.a_(0,H.m(u)+"::*"))return!0
else if(t.a_(0,"*::*"))return!0}return!1},
$iaA:1}
W.k7.prototype={
$1:function(a){return!C.a.a_(C.B,H.I(a))},
$S:22}
W.k8.prototype={
$1:function(a){return C.a.a_(C.B,H.I(a))},
$S:22}
W.kf.prototype={
aA:function(a,b,c){if(this.fI(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.l1(a,"template")==="")return this.e.a_(0,b)
return!1}}
W.kg.prototype={
$1:function(a){return"TEMPLATE::"+H.m(H.I(a))},
$S:17}
W.ke.prototype={
b2:function(a){var u=J.V(a)
if(!!u.$icM)return!1
u=!!u.$iq
if(u&&W.cv(a)==="foreignObject")return!1
if(u)return!0
return!1},
aA:function(a,b,c){if(b==="is"||C.c.a8(b,"on"))return!1
return this.b2(a)},
$iaA:1}
W.dJ.prototype={
A:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdP(J.lH(this.a,u))
this.c=u
return!0}this.sdP(null)
this.c=t
return!1},
gL:function(a){return this.d},
sdP:function(a){this.d=H.B(a,H.t(this,0))},
$ib3:1}
W.aA.prototype={}
W.k5.prototype={$ipD:1}
W.fq.prototype={
di:function(a){new W.kr(this).$2(a,null)},
bg:function(a,b){if(b==null)J.lK(a)
else J.fD(b,a)},
iP:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.ni(a)
s=J.l1(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ai(o)}q="element unprintable"
try{q=J.as(a)}catch(o){H.ai(o)}try{p=W.cv(a)
this.iO(H.e(a,"$iO"),b,u,q,p,H.e(t,"$iF"),H.I(s))}catch(o){if(H.ai(o) instanceof P.aM)throw o
else{this.bg(a,b)
window
n="Removing corrupted element "+H.m(q)
if(typeof console!="undefined")window.console.warn(n)}}},
iO:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.bg(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.b2(a)){this.bg(a,b)
window
u="Removing disallowed element <"+H.m(e)+"> from "+H.m(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.aA(a,"is",g)){this.bg(a,b)
window
u="Removing disallowed type extension <"+H.m(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gaa(f)
t=H.d(u.slice(0),[H.t(u,0)])
for(s=f.gaa(f).length-1,u=f.a,r=J.ad(u);s>=0;--s){if(s>=t.length)return H.h(t,s)
q=t[s]
if(!this.a.aA(a,J.nn(q),r.b7(u,q))){window
p="Removing disallowed attribute <"+H.m(e)+" "+q+'="'+H.m(r.b7(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.b7(u,q)
r.iG(u,q)}}if(!!J.V(a).$icS)this.di(a.content)},
$ipo:1}
W.kr.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.iP(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.bg(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ai(r)
q=H.e(u,"$iG")
if(s){p=q.parentNode
if(p!=null)J.fD(p,q)}else J.fD(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.e(t,"$iG")}},
$S:54}
W.eG.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.dd.prototype={}
W.de.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.fc.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.df.prototype={}
W.dg.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fw.prototype={}
W.fx.prototype={}
W.fy.prototype={}
W.fz.prototype={}
W.fA.prototype={}
P.kb.prototype={
eN:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
c4:function(a){var u,t,s,r,q
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.V(a)
if(!!t.$ian)return new Date(a.a)
if(!!t.$inY)throw H.c(P.jc("structured clone of RegExp"))
if(!!t.$iaF)return a
if(!!t.$ibT)return a
if(!!t.$icx)return a
if(!!t.$ibl)return a
if(!!t.$icG||!!t.$ibI)return a
if(!!t.$iF){s=this.eN(a)
r=this.b
if(s>=r.length)return H.h(r,s)
q=r[s]
u.a=q
if(q!=null)return q
q={}
u.a=q
C.a.n(r,s,q)
t.I(a,new P.kc(u,this))
return u.a}if(!!t.$ib){s=this.eN(a)
u=this.b
if(s>=u.length)return H.h(u,s)
q=u[s]
if(q!=null)return q
return this.jU(a,s)}throw H.c(P.jc("structured clone of other type"))},
jU:function(a,b){var u,t,s,r
u=J.dn(a)
t=u.gl(a)
s=new Array(t)
C.a.n(this.b,b,s)
for(r=0;r<t;++r)C.a.n(s,r,this.c4(u.j(a,r)))
return s}}
P.kc.prototype={
$2:function(a,b){this.a.a[a]=this.b.c4(b)},
$S:5}
P.fn.prototype={$ibl:1,
gel:function(a){return this.a}}
P.kC.prototype={
$2:function(a,b){this.a[a]=b},
$S:5}
P.ff.prototype={}
P.hf.prototype={
gbc:function(){var u,t,s
u=this.b
t=H.al(u,"x",0)
s=W.O
return new H.hG(new H.d5(u,H.n(new P.hg(),{func:1,ret:P.R,args:[t]}),[t]),H.n(new P.hh(),{func:1,ret:s,args:[t]}),[t,s])},
I:function(a,b){H.n(b,{func:1,ret:-1,args:[W.O]})
C.a.I(P.lZ(this.gbc(),!1,W.O),b)},
n:function(a,b,c){var u
H.e(c,"$iO")
u=this.gbc()
J.nk(u.b.$1(J.fE(u.a,b)),c)},
h:function(a,b){J.lI(this.b.a,b)},
gl:function(a){return J.aD(this.gbc().a)},
j:function(a,b){var u=this.gbc()
return u.b.$1(J.fE(u.a,b))},
gW:function(a){var u=P.lZ(this.gbc(),!1,W.O)
return new J.at(u,u.length,0,[H.t(u,0)])},
$ax:function(){return[W.O]},
$ai:function(){return[W.O]},
$ab:function(){return[W.O]}}
P.hg.prototype={
$1:function(a){return!!J.V(H.e(a,"$iG")).$iO},
$S:20}
P.hh.prototype={
$1:function(a){return H.k(H.e(a,"$iG"),"$iO")},
$S:47}
P.k0.prototype={
gc1:function(a){var u=this.a
if(typeof u!=="number")return u.H()
return H.B(u+this.c,H.t(this,0))},
geg:function(a){var u=this.b
if(typeof u!=="number")return u.H()
return H.B(u+this.d,H.t(this,0))},
i:function(a){return"Rectangle ("+H.m(this.a)+", "+H.m(this.b)+") "+this.c+" x "+this.d},
w:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.dm(b,"$iac",[P.a4],"$aac")){u=this.a
t=J.ad(b)
if(u==t.gbY(b)){s=this.b
if(s==t.gc2(b)){if(typeof u!=="number")return u.H()
r=H.t(this,0)
if(H.B(u+this.c,r)===t.gc1(b)){if(typeof s!=="number")return s.H()
u=H.B(s+this.d,r)===t.geg(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gK:function(a){var u,t,s,r,q
u=this.a
t=J.du(u)
s=this.b
r=J.du(s)
if(typeof u!=="number")return u.H()
q=H.t(this,0)
u=C.f.gK(H.B(u+this.c,q))
if(typeof s!=="number")return s.H()
q=C.f.gK(H.B(s+this.d,q))
return P.on(P.jZ(P.jZ(P.jZ(P.jZ(0,t),r),u),q))}}
P.ac.prototype={
gbY:function(a){return this.a},
gc2:function(a){return this.b},
gaU:function(a){return this.c},
gaP:function(a){return this.d}}
P.b6.prototype={$ib6:1}
P.hw.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return this.aF(a,b)},
n:function(a,b,c){H.e(c,"$ib6")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
aF:function(a,b){return a.getItem(b)},
$ax:function(){return[P.b6]},
$ii:1,
$ai:function(){return[P.b6]},
$ib:1,
$ab:function(){return[P.b6]},
$aE:function(){return[P.b6]}}
P.ba.prototype={$iba:1}
P.i2.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return this.aF(a,b)},
n:function(a,b,c){H.e(c,"$iba")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
aF:function(a,b){return a.getItem(b)},
$ax:function(){return[P.ba]},
$ii:1,
$ai:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aE:function(){return[P.ba]}}
P.i9.prototype={
gl:function(a){return a.length}}
P.cM.prototype={$icM:1}
P.iH.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return this.aF(a,b)},
n:function(a,b,c){H.I(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
aF:function(a,b){return a.getItem(b)},
$ax:function(){return[P.f]},
$ii:1,
$ai:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aE:function(){return[P.f]}}
P.q.prototype={
gcK:function(a){return new P.hf(a,new W.ar(a))},
ao:function(a,b,c,d){var u,t,s,r,q,p
u=H.d([],[W.aA])
C.a.h(u,W.mr(null))
C.a.h(u,W.mt())
C.a.h(u,new W.ke())
c=new W.fq(new W.e5(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).jW(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.ar(r)
p=u.gaV(u)
for(u=J.ad(q);s=p.firstChild,s!=null;)u.B(q,s)
return q},
$iq:1}
P.bd.prototype={$ibd:1}
P.j_.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return this.aF(a,b)},
n:function(a,b,c){H.e(c,"$ibd")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
aF:function(a,b){return a.getItem(b)},
$ax:function(){return[P.bd]},
$ii:1,
$ai:function(){return[P.bd]},
$ib:1,
$ab:function(){return[P.bd]},
$aE:function(){return[P.bd]}}
P.eR.prototype={}
P.eS.prototype={}
P.f1.prototype={}
P.f2.prototype={}
P.fd.prototype={}
P.fe.prototype={}
P.fl.prototype={}
P.fm.prototype={}
P.S.prototype={$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$io7:1}
P.fI.prototype={
gl:function(a){return a.length}}
P.fJ.prototype={
j:function(a,b){return P.bq(a.get(H.I(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
gaa:function(a){var u=H.d([],[P.f])
this.I(a,new P.fK(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aag:function(){return[P.f,null]},
$iF:1,
$aF:function(){return[P.f,null]}}
P.fK.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.fL.prototype={
gl:function(a){return a.length}}
P.bS.prototype={}
P.i3.prototype={
gl:function(a){return a.length}}
P.eF.prototype={}
P.dy.prototype={$idy:1}
P.dK.prototype={$idK:1}
P.e9.prototype={$ie9:1}
P.c9.prototype={
bF:function(a,b){return a.activeTexture(b)},
ee:function(a,b,c){return a.attachShader(b,c)},
aB:function(a,b,c){return a.bindBuffer(b,c)},
jL:function(a,b,c){return a.bindFramebuffer(b,c)},
af:function(a,b,c){return a.bindTexture(b,c)},
jM:function(a,b,c){return a.blendFunc(b,c)},
eh:function(a,b,c,d){return a.bufferData(b,c,d)},
jP:function(a,b){return a.clear(b)},
jQ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jR:function(a,b){return a.clearDepth(b)},
jS:function(a,b){return a.compileShader(b)},
jY:function(a,b){return a.createShader(b)},
k_:function(a,b){return a.deleteProgram(b)},
k0:function(a,b){return a.deleteShader(b)},
k7:function(a,b){return a.depthFunc(b)},
k8:function(a,b){return a.disable(b)},
en:function(a,b){return a.disableVertexAttribArray(b)},
k9:function(a,b,c,d,e){return a.drawElements(b,c,H.ae(d),H.ae(e))},
cP:function(a,b){return a.enable(b)},
eq:function(a,b){return a.enableVertexAttribArray(b)},
fh:function(a,b){return a.generateMipmap(b)},
fi:function(a,b,c){return a.getActiveAttrib(b,c)},
fj:function(a,b,c){return a.getActiveUniform(b,c)},
fk:function(a,b,c){return a.getAttribLocation(b,c)},
dh:function(a,b){return a.getParameter(b)},
fn:function(a,b){return a.getProgramInfoLog(b)},
c8:function(a,b,c){return a.getProgramParameter(b,c)},
fo:function(a,b){return a.getShaderInfoLog(b)},
fp:function(a,b,c){return a.getShaderParameter(b,c)},
fq:function(a,b,c){return a.getUniformLocation(b,c)},
kq:function(a,b){return a.linkProgram(b)},
f5:function(a,b,c){return a.pixelStorei(b,c)},
fB:function(a,b,c){return a.shaderSource(b,c)},
kV:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.V(g)
if(!!u.$ibl)t=!0
else t=!1
if(t){this.j0(a,b,c,d,e,f,P.oT(g))
return}if(!!u.$ic1)u=!0
else u=!1
if(u){this.j1(a,b,c,d,e,f,g)
return}throw H.c(P.dw("Incorrect number or type of arguments"))},
f9:function(a,b,c,d,e,f,g){return this.kV(a,b,c,d,e,f,g,null,null,null)},
j0:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
j1:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aE:function(a,b,c,d){return a.texParameteri(b,c,d)},
O:function(a,b,c){return a.uniform1f(b,c)},
P:function(a,b,c){return a.uniform1i(b,c)},
v:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fd:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fe:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
de:function(a,b){return a.useProgram(b)},
l1:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
l2:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ic9:1}
P.ec.prototype={$iec:1}
P.el.prototype={$iel:1}
P.eu.prototype={$ieu:1}
P.iz.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return P.bq(this.hv(a,b))},
n:function(a,b,c){H.e(c,"$iF")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
hv:function(a,b){return a.item(b)},
$ax:function(){return[[P.F,,,]]},
$ii:1,
$ai:function(){return[[P.F,,,]]},
$ib:1,
$ab:function(){return[[P.F,,,]]},
$aE:function(){return[[P.F,,,]]}}
P.f9.prototype={}
P.fa.prototype={}
O.a3.prototype={
bz:function(a){this.shA(H.d([],[a]))
this.sdX(null)
this.sdT(null)
this.sdY(null)},
dj:function(a,b,c){var u=H.al(this,"a3",0)
H.n(b,{func:1,ret:P.R,args:[[P.i,u]]})
u={func:1,ret:-1,args:[P.o,[P.i,u]]}
H.n(a,u)
H.n(c,u)
this.sdX(b)
this.sdT(a)
this.sdY(c)},
b8:function(a,b){return this.dj(a,null,b)},
dW:function(a){var u
H.l(a,"$ii",[H.al(this,"a3",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
ds:function(a,b){var u
H.l(b,"$ii",[H.al(this,"a3",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gW:function(a){var u=this.a
return new J.at(u,u.length,0,[H.t(u,0)])},
M:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.al(this,"a3",0)
H.B(b,u)
u=[u]
if(this.dW(H.d([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.ds(s,H.d([b],u))}},
ae:function(a,b){var u,t
H.l(b,"$ii",[H.al(this,"a3",0)],"$ai")
if(this.dW(b)){u=this.a
t=u.length
C.a.ae(u,b)
this.ds(t,b)}},
shA:function(a){this.a=H.l(a,"$ib",[H.al(this,"a3",0)],"$ab")},
sdX:function(a){this.b=H.n(a,{func:1,ret:P.R,args:[[P.i,H.al(this,"a3",0)]]})},
sdT:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.al(this,"a3",0)]]})},
sdY:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.al(this,"a3",0)]]})},
$ii:1}
O.cD.prototype={
gl:function(a){return this.a.length},
gq:function(){var u=this.b
if(u==null){u=D.P()
this.b=u}return u},
fO:function(a){var u=this.b
if(u!=null)u.G(a)},
aW:function(){return this.fO(null)},
ga6:function(a){var u=this.a
if(u.length>0)return C.a.gaD(u)
else return V.c4()},
c0:function(a){var u=this.a
if(a==null)C.a.h(u,V.c4())
else C.a.h(u,a)
this.aW()},
aR:function(){var u=this.a
if(u.length>0){u.pop()
this.aW()}},
scl:function(a){this.a=H.l(a,"$ib",[V.au],"$ab")}}
E.fO.prototype={}
E.ao.prototype={
sca:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gq().Y(0,this.gf1())
t=this.c
if(t!=null)t.gq().h(0,this.gf1())
s=new D.M("shape",u,this.c,this,[F.ed])
s.b=!0
this.b4(s)}},
aw:function(a,b){var u
for(u=this.y.a,u=new J.at(u,u.length,0,[H.t(u,0)]);u.A();)u.d.aw(0,b)},
aj:function(a){var u,t
u=a.dx
C.a.h(u.a,u.ga6(u))
u.aW()
a.d7(this.f)
u=a.dy
t=(u&&C.a).gaD(u)
if(t!=null&&this.d!=null)t.f6(a,this)
for(u=this.y.a,u=new J.at(u,u.length,0,[H.t(u,0)]);u.A();)u.d.aj(a)
a.d6()
a.dx.aR()},
gq:function(){var u=this.z
if(u==null){u=D.P()
this.z=u}return u},
b4:function(a){var u=this.z
if(u!=null)u.G(a)},
ab:function(){return this.b4(null)},
f2:function(a){H.e(a,"$iz")
this.e=null
this.b4(a)},
kC:function(){return this.f2(null)},
f0:function(a){this.b4(H.e(a,"$iz"))},
kz:function(){return this.f0(null)},
ky:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ii",[E.ao],"$ai")
for(u=b.length,t=this.gf_(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bZ()
o.sam(null)
o.sbe(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sam(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.ab()},
kB:function(a,b){var u,t
H.l(b,"$ii",[E.ao],"$ai")
for(u=b.gW(b),t=this.gf_();u.A();)u.gL(u).gq().Y(0,t)
this.ab()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfP:function(a,b){this.y=H.l(b,"$ia3",[E.ao],"$aa3")},
$ib9:1}
E.ig.prototype={
fL:function(a,b){var u,t
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
u=new O.cD()
t=[V.au]
u.scl(H.d([],t))
u.b=null
u.gq().h(0,new E.ih(this))
this.cy=u
u=new O.cD()
u.scl(H.d([],t))
u.b=null
u.gq().h(0,new E.ii(this))
this.db=u
u=new O.cD()
u.scl(H.d([],t))
u.b=null
u.gq().h(0,new E.ij(this))
this.dx=u
this.sj_(H.d([],[O.bL]))
u=this.dy;(u&&C.a).h(u,null)
this.siW(new H.aP([P.f,A.cN]))},
gkL:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.ga6(u)
t=this.db
t=u.C(0,t.ga6(t))
this.z=t
u=t}return u},
d7:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaD(u):a;(u&&C.a).h(u,t)},
d6:function(){var u=this.dy
if(u.length>1)u.pop()},
ec:function(a){var u=a.b
if(u.length===0)throw H.c(P.v("May not cache a shader with no name."))
if(this.fr.bH(0,u))throw H.c(P.v('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.n(0,u,a)},
sj_:function(a){this.dy=H.l(a,"$ib",[O.bL],"$ab")},
siW:function(a){this.fr=H.l(a,"$iF",[P.f,A.cN],"$aF")}}
E.ih.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.z=null
u.ch=null},
$S:8}
E.ii.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:8}
E.ij.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.ch=null
u.cx=null},
$S:8}
E.eq.prototype={
dv:function(a){H.e(a,"$iz")
this.f7()},
du:function(){return this.dv(null)},
gkj:function(){var u,t,s
u=Date.now()
t=C.f.a9(P.lS(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.an(u,!1)
return s/t},
e1:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.C()
if(typeof u!=="number")return H.H(u)
s=C.j.cW(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.C()
r=C.j.cW(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.mf(C.z,this.gkP())}},
f7:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iT(this),{func:1,ret:-1,args:[P.a4]})
C.Q.hj(u)
C.Q.iL(u,W.mH(t,P.a4))}},
kN:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.e1()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.an(r,!1)
s.y=P.lS(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aW()
r=s.db
C.a.sl(r.a,0)
r.aW()
r=s.dx
C.a.sl(r.a,0)
r.aW()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aj(this.e)}s=this.z
if(s!=null)s.G(null)}catch(q){u=H.ai(q)
t=H.ci(q)
P.lC("Error: "+H.m(u))
P.lC("Stack: "+H.m(t))
throw H.c(u)}}}
E.iT.prototype={
$1:function(a){var u
H.p9(a)
u=this.a
if(u.ch){u.ch=!1
u.kN()}},
$S:32}
Z.eC.prototype={$ipi:1}
Z.dz.prototype={
a4:function(a){var u,t,s
try{t=a.a
C.b.eq(t,this.e)
C.b.l1(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ai(s)
t=P.v('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.m(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.m(this.e)+"]"}}
Z.eD.prototype={$ipj:1}
Z.cq.prototype={
aO:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a4:function(a){var u,t
u=this.a
C.b.aB(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].a4(a)},
av:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.en(s,u[t].e)
C.b.aB(s,this.a.a,null)},
aj:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.h(r,s)
q=r[s]
r=q.c
p=r.a
C.b.aB(t,p,r.b)
C.b.k9(t,q.a,q.b,5123,0)
C.b.aB(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.f]
t=H.d([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q)C.a.h(t,s[q].i(0))
p=H.d([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.as(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(t,", ")+"\nAttrs:   "+C.a.m(p,", ")},
sht:function(a){this.b=H.l(a,"$ib",[Z.bE],"$ab")},
$ipr:1}
Z.bE.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c6(this.c)+"'")+"]"}}
Z.bf.prototype={
gdl:function(a){var u,t
u=this.a
t=(u&$.aZ().a)!==0?3:0
if((u&$.bt().a)!==0)t+=3
if((u&$.bs().a)!==0)t+=3
if((u&$.bu().a)!==0)t+=2
if((u&$.bv().a)!==0)t+=3
if((u&$.dr().a)!==0)t+=3
if((u&$.ds().a)!==0)t+=4
if((u&$.cl().a)!==0)++t
return(u&$.br().a)!==0?t+4:t},
jI:function(a){var u,t,s
u=$.aZ()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bt()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bs()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bu()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bv()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.dr()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ds()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cl()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.br()
if((t&u.a)!==0)if(s===a)return u
return $.n9()},
w:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bf))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.d([],[P.f])
t=this.a
if((t&$.aZ().a)!==0)C.a.h(u,"Pos")
if((t&$.bt().a)!==0)C.a.h(u,"Norm")
if((t&$.bs().a)!==0)C.a.h(u,"Binm")
if((t&$.bu().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bv().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dr().a)!==0)C.a.h(u,"Clr3")
if((t&$.ds().a)!==0)C.a.h(u,"Clr4")
if((t&$.cl().a)!==0)C.a.h(u,"Weight")
if((t&$.br().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fR.prototype={}
D.bZ.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.z]}
H.n(b,u)
if(this.a==null)this.sam(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
Y:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[D.z]})
u=this.a
u=u==null?null:C.a.a_(u,b)
if(u===!0){u=this.a
t=(u&&C.a).Y(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.a_(u,b)
if(u===!0){u=this.b
t=(u&&C.a).Y(u,b)||t}return t},
G:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.z(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.I(t,new D.hc(u))
t=this.b
if(t!=null)C.a.I(t,new D.hd(u))
u=this.b
if(u!=null)C.a.sl(u,0)
return!0},
ep:function(){return this.G(null)},
kQ:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.G(t)}}},
aT:function(a){return this.kQ(a,!0,!1)},
sam:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")},
sbe:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")}}
D.hc.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:30}
D.hd.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:30}
D.z.prototype={}
D.bF.prototype={}
D.bG.prototype={}
D.M.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.dA.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dA))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.dT.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dT))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.hv.prototype={
kI:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kE:function(a){this.c=a.b
this.d.Y(0,a.a)
return!1},
siD:function(a){this.d=H.l(a,"$imb",[P.o],"$amb")}}
X.dY.prototype={}
X.hC.prototype={
bb:function(a,b){var u,t,s,r,q,p,o,n
u=new P.an(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.C()
q=b.b
p=this.ch
if(typeof q!=="number")return q.C()
o=new V.ab(t.a+s*r,t.b+q*p)
p=this.a.gb3()
n=new X.bn(a,V.bo(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
d5:function(a,b){this.r=a.a
return!1},
bo:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.ft()
if(typeof u!=="number")return u.c6()
this.r=(u&~t)>>>0
return!1},
bn:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.bb(a,b))
return!0},
kJ:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gb3()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.C()
o=a.b
n=this.cy
if(typeof o!=="number")return o.C()
r=new X.cF(new V.Y(q*p,o*n),t,s,new P.an(r,!1),this)
r.b=!0
u.G(r)
return!0},
i8:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.an(Date.now(),!1)
t=this.f
s=new X.dY(c,a,this.a.gb3(),b,u,this)
s.b=!0
t.G(s)
this.y=u
this.x=V.bo()}}
X.az.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.az))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bn.prototype={}
X.hU.prototype={
ci:function(a,b,c){var u,t,s
u=new P.an(Date.now(),!1)
t=this.a.gb3()
s=new X.bn(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
d5:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.G(this.ci(a,b,!0))
return!0},
bo:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.ft()
if(typeof u!=="number")return u.c6()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.G(this.ci(a,b,!0))
return!0},
bn:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.ci(a,b,!1))
return!0},
kK:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gb3()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.C()
p=a.b
o=this.ch
if(typeof p!=="number")return p.C()
s=new X.cF(new V.Y(r*q,p*o),t,b,new P.an(s,!1),this)
s.b=!0
u.G(s)
return!0},
geo:function(){var u=this.b
if(u==null){u=D.P()
this.b=u}return u},
gc3:function(){var u=this.c
if(u==null){u=D.P()
this.c=u}return u},
geZ:function(){var u=this.d
if(u==null){u=D.P()
this.d=u}return u}}
X.cF.prototype={}
X.i8.prototype={}
X.es.prototype={}
X.iX.prototype={
bb:function(a,b){var u,t,s,r
H.l(a,"$ib",[V.ab],"$ab")
u=new P.an(Date.now(),!1)
t=a.length>0?a[0]:V.bo()
s=this.a.gb3()
r=new X.es(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kH:function(a){var u
H.l(a,"$ib",[V.ab],"$ab")
u=this.b
if(u==null)return!1
u.G(this.bb(a,!0))
return!0},
kF:function(a){var u
H.l(a,"$ib",[V.ab],"$ab")
u=this.c
if(u==null)return!1
u.G(this.bb(a,!0))
return!0},
kG:function(a){var u
H.l(a,"$ib",[V.ab],"$ab")
u=this.d
if(u==null)return!1
u.G(this.bb(a,!1))
return!0}}
X.ex.prototype={
gb3:function(){var u=this.a
return V.m9(0,0,C.q.gek(u).c,C.q.gek(u).d)},
dJ:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dT(u,new X.az(t,a.altKey,a.shiftKey))},
b0:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.az(t,a.altKey,a.shiftKey)},
cC:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.az(t,a.altKey,a.shiftKey)},
aL:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.N()
q=u.top
if(typeof s!=="number")return s.N()
return new V.ab(t-r,s-q)},
bf:function(a){return new V.Y(a.movementX,a.movementY)},
cw:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.d([],[V.ab])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q){p=s[q]
o=C.j.au(p.pageX)
C.j.au(p.pageY)
n=u.left
C.j.au(p.pageX)
C.a.h(t,new V.ab(o-n,C.j.au(p.pageY)-u.top))}return t},
aH:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.dA(u,new X.az(t,a.altKey,a.shiftKey))},
cm:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.N()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.N()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
i2:function(a){this.f=!0},
hR:function(a){this.f=!1},
hX:function(a){H.e(a,"$ia6")
if(this.f&&this.cm(a))a.preventDefault()},
i6:function(a){var u
H.e(a,"$ib5")
if(!this.f)return
u=this.dJ(a)
this.b.kI(u)},
i4:function(a){var u
H.e(a,"$ib5")
if(!this.f)return
u=this.dJ(a)
this.b.kE(u)},
ia:function(a){var u,t,s,r
H.e(a,"$ia6")
u=this.a
u.focus()
this.f=!0
this.b0(a)
if(this.x){t=this.aH(a)
s=this.bf(a)
if(this.d.d5(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aH(a)
r=this.aL(a)
if(this.c.d5(t,r))a.preventDefault()},
ig:function(a){var u,t,s
H.e(a,"$ia6")
this.b0(a)
u=this.aH(a)
if(this.x){t=this.bf(a)
if(this.d.bo(u,t))a.preventDefault()
return}if(this.r)return
s=this.aL(a)
if(this.c.bo(u,s))a.preventDefault()},
i0:function(a){var u,t,s
H.e(a,"$ia6")
if(!this.cm(a)){this.b0(a)
u=this.aH(a)
if(this.x){t=this.bf(a)
if(this.d.bo(u,t))a.preventDefault()
return}if(this.r)return
s=this.aL(a)
if(this.c.bo(u,s))a.preventDefault()}},
ic:function(a){var u,t,s
H.e(a,"$ia6")
this.b0(a)
u=this.aH(a)
if(this.x){t=this.bf(a)
if(this.d.bn(u,t))a.preventDefault()
return}if(this.r)return
s=this.aL(a)
if(this.c.bn(u,s))a.preventDefault()},
hZ:function(a){var u,t,s
H.e(a,"$ia6")
if(!this.cm(a)){this.b0(a)
u=this.aH(a)
if(this.x){t=this.bf(a)
if(this.d.bn(u,t))a.preventDefault()
return}if(this.r)return
s=this.aL(a)
if(this.c.bn(u,s))a.preventDefault()}},
ii:function(a){var u,t
H.e(a,"$ibg")
this.b0(a)
u=new V.Y((a&&C.P).gk5(a),C.P.gk6(a)).D(0,180)
if(this.x){if(this.d.kJ(u))a.preventDefault()
return}if(this.r)return
t=this.aL(a)
if(this.c.kK(u,t))a.preventDefault()},
ik:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aH(this.y)
s=this.aL(this.y)
this.d.i8(t,s,u)}},
iB:function(a){var u
H.e(a,"$iaX")
this.a.focus()
this.f=!0
this.cC(a)
u=this.cw(a)
if(this.e.kH(u))a.preventDefault()},
ix:function(a){var u
H.e(a,"$iaX")
this.cC(a)
u=this.cw(a)
if(this.e.kF(u))a.preventDefault()},
iz:function(a){var u
H.e(a,"$iaX")
this.cC(a)
u=this.cw(a)
if(this.e.kG(u))a.preventDefault()},
shk:function(a){this.z=H.l(a,"$ib",[[P.cQ,P.W]],"$ab")}}
D.bA.prototype={
gq:function(){var u=this.d
if(u==null){u=D.P()
this.d=u}return u},
aG:function(a){var u
H.e(a,"$iz")
u=this.d
if(u!=null)u.G(a)},
fT:function(){return this.aG(null)},
$ia8:1,
$ib9:1}
D.a8.prototype={$ib9:1}
D.dV.prototype={
gq:function(){var u=this.Q
if(u==null){u=D.P()
this.Q=u}return u},
aG:function(a){var u=this.Q
if(u!=null)u.G(a)},
dV:function(a){var u
H.e(a,"$iz")
u=this.ch
if(u!=null)u.G(a)},
i7:function(){return this.dV(null)},
im:function(a){var u,t,s
H.l(a,"$ii",[D.a8],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.D)(a),++t){s=a[t]
if(s==null||this.fR(s))return!1}return!0},
hL:function(a,b){var u,t,s,r,q,p,o,n
u=D.a8
H.l(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gdU(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.D)(b),++p){o=H.e(b[p],"$ia8")
if(o instanceof D.bA)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bZ()
n.sam(null)
n.sbe(null)
n.c=null
n.d=0
o.d=n}H.n(s,r)
if(n.a==null)n.sam(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bF(a,b,this,[u])
u.b=!0
this.aG(u)},
ir:function(a,b){var u,t,s,r
u=D.a8
H.l(b,"$ii",[u],"$ai")
for(t=b.gW(b),s=this.gdU();t.A();){r=t.gL(t)
C.a.Y(this.e,r)
r.gq().Y(0,s)}u=new D.bG(a,b,this,[u])
u.b=!0
this.aG(u)},
fR:function(a){var u=C.a.a_(this.e,a)
return u},
shi:function(a){this.e=H.l(a,"$ib",[D.bA],"$ab")},
siC:function(a){this.f=H.l(a,"$ib",[D.e8],"$ab")},
siY:function(a){this.r=H.l(a,"$ib",[D.eg],"$ab")},
sja:function(a){this.x=H.l(a,"$ib",[D.en],"$ab")},
sjb:function(a){this.y=H.l(a,"$ib",[D.eo],"$ab")},
sjc:function(a){this.z=H.l(a,"$ib",[D.ep],"$ab")},
$ai:function(){return[D.a8]},
$aa3:function(){return[D.a8]}}
D.e8.prototype={$ia8:1,$ib9:1}
D.eg.prototype={$ia8:1,$ib9:1}
D.en.prototype={$ia8:1,$ib9:1}
D.eo.prototype={$ia8:1,$ib9:1}
D.ep.prototype={$ia8:1,$ib9:1}
V.y.prototype={
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.y))return!1
u=b.a
t=$.T().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Z(this.a,3,0)+", "+V.Z(this.b,3,0)+", "+V.Z(this.c,3,0)+"]"}}
V.aN.prototype={
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aN))return!1
u=b.a
t=$.T().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Z(this.a,3,0)+", "+V.Z(this.b,3,0)+", "+V.Z(this.c,3,0)+", "+V.Z(this.d,3,0)+"]"}}
V.ha.prototype={}
V.e1.prototype={
ak:function(a,b){var u=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.C])
return u},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e1))return!1
u=b.a
t=$.T().a
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
u=[P.C]
t=V.ch(H.d([this.a,this.d,this.r],u),3,0)
s=V.ch(H.d([this.b,this.e,this.x],u),3,0)
r=V.ch(H.d([this.c,this.f,this.y],u),3,0)
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
V.au.prototype={
ak:function(a,b){var u=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.C])
return u},
d_:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.T().a)return V.c4()
a8=1/a7
a9=-r
b0=-d
return V.b8((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
C:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.b8(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
dd:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.U(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
bv:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.ap(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.au))return!1
u=b.a
t=$.T().a
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
i:function(a){return this.T()},
eO:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.C]
t=V.ch(H.d([this.a,this.e,this.y,this.cx],u),b,c)
s=V.ch(H.d([this.b,this.f,this.z,this.cy],u),b,c)
r=V.ch(H.d([this.c,this.r,this.Q,this.db],u),b,c)
q=V.ch(H.d([this.d,this.x,this.ch,this.dx],u),b,c)
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
T:function(){return this.eO("",3,0)},
E:function(a){return this.eO(a,3,0)}}
V.ab.prototype={
N:function(a,b){return new V.ab(this.a-b.a,this.b-b.b)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
u=b.a
t=$.T().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.Z(this.a,3,0)+", "+V.Z(this.b,3,0)+"]"}}
V.ap.prototype={
N:function(a,b){return new V.ap(this.a-b.a,this.b-b.b,this.c-b.c)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ap))return!1
u=b.a
t=$.T().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Z(this.a,3,0)+", "+V.Z(this.b,3,0)+", "+V.Z(this.c,3,0)+"]"}}
V.bp.prototype={
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bp))return!1
u=b.a
t=$.T().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Z(this.a,3,0)+", "+V.Z(this.b,3,0)+", "+V.Z(this.c,3,0)+", "+V.Z(this.d,3,0)+"]"}}
V.eb.prototype={
gai:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eb))return!1
u=b.a
t=$.T().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Z(this.a,3,0)+", "+V.Z(this.b,3,0)+", "+V.Z(this.c,3,0)+", "+V.Z(this.d,3,0)+"]"}}
V.Y.prototype={
d0:function(a){return Math.sqrt(this.J(this))},
J:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.H(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.C()
if(typeof r!=="number")return H.H(r)
return u*t+s*r},
C:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.C()
t=this.b
if(typeof t!=="number")return t.C()
return new V.Y(u*b,t*b)},
D:function(a,b){var u,t
if(Math.abs(b-0)<$.T().a){u=$.ml
if(u==null){u=new V.Y(0,0)
$.ml=u}return u}u=this.a
if(typeof u!=="number")return u.D()
t=this.b
if(typeof t!=="number")return t.D()
return new V.Y(u/b,t/b)},
w:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=this.a
s=$.T()
s.toString
if(typeof u!=="number")return u.N()
if(typeof t!=="number")return H.H(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.N()
if(typeof t!=="number")return H.H(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.Z(this.a,3,0)+", "+V.Z(this.b,3,0)+"]"}}
V.U.prototype={
d0:function(a){return Math.sqrt(this.J(this))},
J:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
d1:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.U(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
bl:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.U(u*t-s*r,s*q-p*t,p*r-u*q)},
H:function(a,b){return new V.U(this.a+b.a,this.b+b.b,this.c+b.c)},
X:function(a){return new V.U(-this.a,-this.b,-this.c)},
D:function(a,b){if(Math.abs(b-0)<$.T().a)return V.eB()
return new V.U(this.a/b,this.b/b,this.c/b)},
eX:function(){var u=$.T().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=$.T().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Z(this.a,3,0)+", "+V.Z(this.b,3,0)+", "+V.Z(this.c,3,0)+"]"}}
U.fS.prototype={
cc:function(a){var u=V.ph(a,this.c,this.b)
return u},
gq:function(){var u=this.y
if(u==null){u=D.P()
this.y=u}return u},
V:function(a){var u=this.y
if(u!=null)u.G(a)},
sdf:function(a,b){},
sd2:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.T().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.cc(t)}u=new D.M("maximumLocation",u,this.b,this,[P.C])
u.b=!0
this.V(u)}},
sd4:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.T().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.cc(t)}u=new D.M("minimumLocation",u,this.c,this,[P.C])
u.b=!0
this.V(u)}},
sah:function(a,b){var u
b=this.cc(b)
u=this.d
if(!(Math.abs(u-b)<$.T().a)){this.d=b
u=new D.M("location",u,b,this,[P.C])
u.b=!0
this.V(u)}},
sd3:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.T().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.M("maximumVelocity",u,a,this,[P.C])
u.b=!0
this.V(u)}},
sZ:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.T().a)){this.f=a
u=new D.M("velocity",u,a,this,[P.C])
u.b=!0
this.V(u)}},
scN:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.T().a)){this.x=a
u=new D.M("dampening",u,a,this,[P.C])
u.b=!0
this.V(u)}},
aw:function(a,b){var u,t,s,r,q
u=this.f
t=$.T().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sah(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.T().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sZ(s)}}}
U.dC.prototype={
gq:function(){var u=this.b
if(u==null){u=D.P()
this.b=u}return u},
b6:function(a,b,c){return this.a},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dC))return!1
return J.a9(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.cz.prototype={
gq:function(){var u=this.e
if(u==null){u=D.P()
this.e=u}return u},
V:function(a){var u
H.e(a,"$iz")
u=this.e
if(u!=null)u.G(a)},
ac:function(){return this.V(null)},
hJ:function(a,b){var u,t,s,r,q,p,o,n
u=U.ah
H.l(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gaX(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.D)(b),++p){o=b[p]
if(o!=null){n=o.gq()
n.toString
H.n(s,r)
if(n.a==null)n.sam(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bF(a,b,this,[u])
u.b=!0
this.V(u)},
ip:function(a,b){var u,t,s
u=U.ah
H.l(b,"$ii",[u],"$ai")
for(t=b.gW(b),s=this.gaX();t.A();)t.gL(t).gq().Y(0,s)
u=new D.bG(a,b,this,[u])
u.b=!0
this.V(u)},
b6:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.a0()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.at(u,u.length,0,[H.t(u,0)]),s=null;u.A();){t=u.d
if(t!=null){r=t.b6(0,b,c)
if(r!=null)s=s==null?r:r.C(0,s)}}this.f=s==null?V.c4():s
u=this.e
if(u!=null)u.aT(0)}return this.f},
w:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cz))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.a9(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ah]},
$aa3:function(){return[U.ah]},
$iah:1}
U.ah.prototype={}
U.ey.prototype={
gq:function(){var u=this.cy
if(u==null){u=D.P()
this.cy=u}return u},
V:function(a){var u
H.e(a,"$iz")
u=this.cy
if(u!=null)u.G(a)},
ac:function(){return this.V(null)},
bi:function(a){if(this.a!=null)return!1
this.a=a
a.c.geo().h(0,this.gcn())
this.a.c.geZ().h(0,this.gcp())
this.a.c.gc3().h(0,this.gcr())
return!0},
co:function(a){H.e(a,"$iz")
if(!J.a9(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
cq:function(a){var u,t,s,r,q,p,o
a=H.k(H.e(a,"$iz"),"$ibn")
if(!this.y)return
if(this.x){u=a.d.N(0,a.y)
u=new V.Y(u.a,u.b)
u=u.J(u)
t=this.r
if(typeof t!=="number")return H.H(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.N(0,a.y)
u=new V.Y(t.a,t.b).C(0,2).D(0,u.gai())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.C()
s=this.e
if(typeof s!=="number")return H.H(s)
t.sZ(u*10*s)}else{u=a.c
t=a.d
s=t.N(0,a.y)
r=new V.Y(s.a,s.b).C(0,2).D(0,u.gai())
s=this.b
q=r.a
if(typeof q!=="number")return q.X()
p=this.e
if(typeof p!=="number")return H.H(p)
o=this.z
if(typeof o!=="number")return H.H(o)
s.sah(0,-q*p+o)
this.b.sZ(0)
t=t.N(0,a.z)
this.Q=new V.Y(t.a,t.b).C(0,2).D(0,u.gai())}this.ac()},
cs:function(a){var u,t,s
H.e(a,"$iz")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.J(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.C()
s=this.e
if(typeof s!=="number")return H.H(s)
u.sZ(t*10*s)
this.ac()}},
b6:function(a,b,c){var u,t,s,r,q
u=this.ch
t=b.e
if(typeof u!=="number")return u.a0()
if(u<t){this.ch=t
s=b.y
this.b.aw(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.b8(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$iah:1}
U.ez.prototype={
gq:function(){var u=this.fx
if(u==null){u=D.P()
this.fx=u}return u},
V:function(a){var u
H.e(a,"$iz")
u=this.fx
if(u!=null)u.G(a)},
ac:function(){return this.V(null)},
bi:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.geo().h(0,this.gcn())
this.a.c.geZ().h(0,this.gcp())
this.a.c.gc3().h(0,this.gcr())
u=this.a.d
t=u.f
if(t==null){t=D.P()
u.f=t
u=t}else u=t
u.h(0,this.ghB())
u=this.a.d
t=u.d
if(t==null){t=D.P()
u.d=t
u=t}else u=t
u.h(0,this.ghD())
u=this.a.e
t=u.b
if(t==null){t=D.P()
u.b=t
u=t}else u=t
u.h(0,this.gj7())
u=this.a.e
t=u.d
if(t==null){t=D.P()
u.d=t
u=t}else u=t
u.h(0,this.gj5())
u=this.a.e
t=u.c
if(t==null){t=D.P()
u.c=t
u=t}else u=t
u.h(0,this.gj3())
return!0},
az:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.X()
u=-u}if(this.r){if(typeof t!=="number")return t.X()
t=-t}return new V.Y(u,t)},
co:function(a){a=H.k(H.e(a,"$iz"),"$ibn")
if(!J.a9(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
cq:function(a){var u,t,s,r,q,p,o
a=H.k(H.e(a,"$iz"),"$ibn")
if(!this.cx)return
if(this.ch){u=a.d.N(0,a.y)
u=new V.Y(u.a,u.b)
u=u.J(u)
t=this.Q
if(typeof t!=="number")return H.H(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.N(0,a.y)
u=this.az(new V.Y(t.a,t.b).C(0,2).D(0,u.gai()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.X()
s=this.y
if(typeof s!=="number")return H.H(s)
t.sZ(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.X()
t=this.x
if(typeof t!=="number")return H.H(t)
s.sZ(-u*10*t)}else{u=a.c
t=a.d
s=t.N(0,a.y)
r=this.az(new V.Y(s.a,s.b).C(0,2).D(0,u.gai()))
s=this.c
q=r.a
if(typeof q!=="number")return q.X()
p=this.y
if(typeof p!=="number")return H.H(p)
o=this.cy
if(typeof o!=="number")return H.H(o)
s.sah(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.X()
q=this.x
if(typeof q!=="number")return H.H(q)
s=this.db
if(typeof s!=="number")return H.H(s)
o.sah(0,-p*q+s)
this.b.sZ(0)
this.c.sZ(0)
t=t.N(0,a.z)
this.dx=this.az(new V.Y(t.a,t.b).C(0,2).D(0,u.gai()))}this.ac()},
cs:function(a){var u,t,s
H.e(a,"$iz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.J(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.X()
s=this.y
if(typeof s!=="number")return H.H(s)
u.sZ(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.X()
u=this.x
if(typeof u!=="number")return H.H(u)
s.sZ(-t*10*u)
this.ac()}},
hC:function(a){if(H.k(H.e(a,"$iz"),"$idY").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hE:function(a){var u,t,s,r,q,p,o
a=H.k(H.e(a,"$iz"),"$ibn")
if(!J.a9(this.d,a.x.b))return
u=a.c
t=a.d
s=t.N(0,a.y)
r=this.az(new V.Y(s.a,s.b).C(0,2).D(0,u.gai()))
s=this.c
q=r.a
if(typeof q!=="number")return q.X()
p=this.y
if(typeof p!=="number")return H.H(p)
o=this.cy
if(typeof o!=="number")return H.H(o)
s.sah(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.X()
q=this.x
if(typeof q!=="number")return H.H(q)
s=this.db
if(typeof s!=="number")return H.H(s)
o.sah(0,-p*q+s)
this.b.sZ(0)
this.c.sZ(0)
t=t.N(0,a.z)
this.dx=this.az(new V.Y(t.a,t.b).C(0,2).D(0,u.gai()))
this.ac()},
j8:function(a){H.e(a,"$iz")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
j6:function(a){var u,t,s,r,q,p,o
a=H.k(H.e(a,"$iz"),"$ies")
if(!this.cx)return
if(this.ch){u=a.d.N(0,a.y)
u=new V.Y(u.a,u.b)
u=u.J(u)
t=this.Q
if(typeof t!=="number")return H.H(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.N(0,a.y)
u=this.az(new V.Y(t.a,t.b).C(0,2).D(0,u.gai()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.X()
s=this.y
if(typeof s!=="number")return H.H(s)
t.sZ(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.X()
t=this.x
if(typeof t!=="number")return H.H(t)
s.sZ(-u*10*t)}else{u=a.c
t=a.d
s=t.N(0,a.y)
r=this.az(new V.Y(s.a,s.b).C(0,2).D(0,u.gai()))
s=this.c
q=r.a
if(typeof q!=="number")return q.X()
p=this.y
if(typeof p!=="number")return H.H(p)
o=this.cy
if(typeof o!=="number")return H.H(o)
s.sah(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.X()
q=this.x
if(typeof q!=="number")return H.H(q)
s=this.db
if(typeof s!=="number")return H.H(s)
o.sah(0,-p*q+s)
this.b.sZ(0)
this.c.sZ(0)
t=t.N(0,a.z)
this.dx=this.az(new V.Y(t.a,t.b).C(0,2).D(0,u.gai()))}this.ac()},
j4:function(a){var u,t,s
H.e(a,"$iz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.J(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.X()
s=this.y
if(typeof s!=="number")return H.H(s)
u.sZ(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.X()
u=this.x
if(typeof u!=="number")return H.H(u)
s.sZ(-t*10*u)
this.ac()}},
b6:function(a,b,c){var u,t,s,r,q
u=this.dy
t=b.e
if(typeof u!=="number")return u.a0()
if(u<t){this.dy=t
s=b.y
this.c.aw(0,s)
this.b.aw(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.b8(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.C(0,V.b8(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iah:1}
U.eA.prototype={
gq:function(){var u=this.r
if(u==null){u=D.P()
this.r=u}return u},
V:function(a){var u=this.r
if(u!=null)u.G(a)},
bi:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.P()
u.e=t
u=t}else u=t
t=this.ghG()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.P()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
hH:function(a){var u,t,s,r
H.e(a,"$iz")
if(!J.a9(this.b,this.a.b.c))return
H.k(a,"$icF")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.C()
r=u+t*s
if(u!==r){this.d=r
u=new D.M("zoom",u,r,this,[P.C])
u.b=!0
this.V(u)}},
b6:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.b8(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$iah:1}
M.dB.prototype={
gq:function(){var u=this.f
if(u==null){u=D.P()
this.f=u}return u},
a3:function(a){var u
H.e(a,"$iz")
u=this.f
if(u!=null)u.G(a)},
b9:function(){return this.a3(null)},
it:function(a,b){var u,t,s,r,q,p,o,n
u=M.aB
H.l(b,"$ii",[u],"$ai")
for(t=b.length,s=this.ga2(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.D)(b),++p){o=b[p]
if(o!=null){n=o.gq()
n.toString
H.n(s,r)
if(n.a==null)n.sam(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bF(a,b,this,[u])
u.b=!0
this.a3(u)},
iv:function(a,b){var u,t,s
u=M.aB
H.l(b,"$ii",[u],"$ai")
for(t=b.gW(b),s=this.ga2();t.A();)t.gL(t).gq().Y(0,s)
u=new D.bG(a,b,this,[u])
u.b=!0
this.a3(u)},
aj:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.at(u,u.length,0,[H.t(u,0)]);u.A();){t=u.d
if(t!=null)t.aj(a)}this.e=!1},
$ai:function(){return[M.aB]},
$aa3:function(){return[M.aB]},
$iaB:1}
M.dD.prototype={
gq:function(){var u=this.f
if(u==null){u=D.P()
this.f=u}return u},
a3:function(a){var u
H.e(a,"$iz")
u=this.f
if(u!=null)u.G(a)},
b9:function(){return this.a3(null)},
sbj:function(a){var u,t
if(a==null)a=new X.hp()
u=this.a
if(u!==a){if(u!=null)u.gq().Y(0,this.ga2())
t=this.a
this.a=a
a.gq().h(0,this.ga2())
u=new D.M("camera",t,this.a,this,[X.bU])
u.b=!0
this.a3(u)}},
sbr:function(a,b){var u,t
if(b==null)b=X.l8(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gq().Y(0,this.ga2())
t=this.b
this.b=b
b.gq().h(0,this.ga2())
u=new D.M("target",t,this.b,this,[X.cR])
u.b=!0
this.a3(u)}},
sbs:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gq().Y(0,this.ga2())
t=this.c
this.c=a
if(a!=null)a.gq().h(0,this.ga2())
u=new D.M("technique",t,this.c,this,[O.bL])
u.b=!0
this.a3(u)}},
aj:function(a){a.d7(this.c)
this.b.a4(a)
this.a.a4(a)
this.d.aw(0,a)
this.d.aj(a)
this.a.av(a)
this.b.toString
a.d6()},
$iaB:1}
M.dI.prototype={
a3:function(a){var u
H.e(a,"$iz")
u=this.x
if(u!=null)u.G(a)},
b9:function(){return this.a3(null)},
hT:function(a,b){var u,t,s,r,q,p,o,n
u=E.ao
H.l(b,"$ii",[u],"$ai")
for(t=b.length,s=this.ga2(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.D)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bZ()
n.sam(null)
n.sbe(null)
n.c=null
n.d=0
o.z=n}H.n(s,r)
if(n.a==null)n.sam(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bF(a,b,this,[u])
u.b=!0
this.a3(u)},
hV:function(a,b){var u,t,s
u=E.ao
H.l(b,"$ii",[u],"$ai")
for(t=b.gW(b),s=this.ga2();t.A();)t.gL(t).gq().Y(0,s)
u=new D.bG(a,b,this,[u])
u.b=!0
this.a3(u)},
sbj:function(a){var u,t
if(a==null)a=X.m3(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gq().Y(0,this.ga2())
t=this.a
this.a=a
a.gq().h(0,this.ga2())
u=new D.M("camera",t,this.a,this,[X.bU])
u.b=!0
this.a3(u)}},
sbr:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gq().Y(0,this.ga2())
t=this.b
this.b=b
b.gq().h(0,this.ga2())
u=new D.M("target",t,this.b,this,[X.cR])
u.b=!0
this.a3(u)}},
sbs:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gq().Y(0,this.ga2())
t=this.c
this.c=a
if(a!=null)a.gq().h(0,this.ga2())
u=new D.M("technique",t,this.c,this,[O.bL])
u.b=!0
this.a3(u)}},
gq:function(){var u=this.x
if(u==null){u=D.P()
this.x=u}return u},
aj:function(a){var u
a.d7(this.c)
this.b.a4(a)
this.a.a4(a)
u=this.c
if(u!=null)u.aw(0,a)
for(u=this.d.a,u=new J.at(u,u.length,0,[H.t(u,0)]);u.A();)u.d.aw(0,a)
for(u=this.d.a,u=new J.at(u,u.length,0,[H.t(u,0)]);u.A();)u.d.aj(a)
this.a.toString
a.cy.aR()
a.db.aR()
this.b.toString
a.d6()},
shc:function(a,b){this.d=H.l(b,"$ia3",[E.ao],"$aa3")},
$iaB:1}
M.aB.prototype={}
A.dx.prototype={}
A.fH.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
kb:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
C.b.eq(r.a,r.c)}},
em:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
C.b.en(r.a,r.c)}}}
A.e0.prototype={
fK:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.aj("")
t=a6.fx
if(t){u.a="uniform mat4 objMat;\n"
s="uniform mat4 objMat;\n"}else s=""
r=a6.fy
if(r){s+="uniform mat4 viewObjMat;\n"
u.a=s}s+="uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s+="attribute vec3 posAttr;\n"
u.a=s
q=a6.r1
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=a6.r2
if(p){s+="attribute vec3 binmAttr;\n"
u.a=s}u.a=s+"\n"
a6.jg(u)
a6.jn(u)
a6.jh(u)
a6.jv(u)
a6.jw(u)
a6.jp(u)
a6.jA(u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=a6.x1
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
u.a=s}if(a6.rx){s+="   txt2D = getTxt2D();\n"
u.a=s}if(a6.ry){s+="   txtCube = getTxtCube();\n"
u.a=s}if(a6.k3){s+="   objPos = getObjPos();\n"
u.a=s}if(a6.k4){s+="   viewPos = getViewPos();\n"
u.a=s}s+="   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s+="\n"
u.a=s
q=this.z
u=new P.aj("")
u.a="precision mediump float;\n"
u.a="precision mediump float;\n\n"
p=q.r1
if(p){u.a="precision mediump float;\n\nvarying vec3 normalVec;\n"
o="precision mediump float;\n\nvarying vec3 normalVec;\n"}else o="precision mediump float;\n\n"
if(q.r2){o+="varying vec3 binormalVec;\n"
u.a=o}if(q.rx){o+="varying vec2 txt2D;\n"
u.a=o}if(q.ry){o+="varying vec3 txtCube;\n"
u.a=o}if(q.k3){o+="varying vec3 objPos;\n"
u.a=o}if(q.k4){o+="varying vec3 viewPos;\n"
u.a=o}o+="\n"
u.a=o
n=q.y2
if(n){o+="uniform mat4 colorMat;\n"
u.a=o}if(q.fr){o+="uniform mat4 invViewMat;\n"
u.a=o}u.a=o+"\n"
q.jk(u)
q.jf(u)
q.ji(u)
q.jl(u)
q.jt(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.jr(u)
q.js(u)}q.jo(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
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
k=H.d([],[P.f])
if(q.b!==C.d)C.a.h(k,"ambient()")
if(q.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.m(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.jj(u)
q.jq(u)
q.ju(u)
q.jx(u)
q.jy(u)
q.jz(u)
q.jm(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m+="   float alpha = alphaValue();\n"
u.a=m
if(p){p=m+"   vec3 norm = normal();\n"
u.a=p}else p=m
if(o)u.a=p+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.d([],[P.f])
if(l){u.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"lightAccum")
if(q.c!==C.d)u.a+="   setDiffuseColor();\n"
if(q.d!==C.d)u.a+="   setInvDiffuseColor();\n"
if(q.e!==C.d)u.a+="   setSpecularColor();\n"
if(q.z>0)u.a+="   lightAccum += allDirLightValues(norm);\n"
if(q.Q>0)u.a+="   lightAccum += allPointLightValues(norm);\n"
if(q.ch>0)u.a+="   lightAccum += allSpotLightValues(norm);\n"
if(q.cx>0)u.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(q.cy>0)u.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(q.db>0)u.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(q.dx<=0)u.a+="   lightAccum += nonLightValues(norm);\n"}if(q.a!==C.d)C.a.h(j,"emission()")
if(q.r!==C.d)C.a.h(j,"reflect(refl)")
if(q.x!==C.d)C.a.h(j,"refract(refl)")
if(j.length<=0)C.a.h(j,"vec3(0.0, 0.0, 0.0)")
i="vec4("+C.a.m(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.eW(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a6.fr)this.id=H.k(this.y.p(0,"invViewMat"),"$iax")
if(t)this.dy=H.k(this.y.p(0,"objMat"),"$iax")
if(r)this.fr=H.k(this.y.p(0,"viewObjMat"),"$iax")
this.fy=H.k(this.y.p(0,"projViewObjMat"),"$iax")
if(a6.x2)this.k1=H.k(this.y.p(0,"txt2DMat"),"$icY")
if(a6.y1)this.k2=H.k(this.y.p(0,"txtCubeMat"),"$iax")
if(a6.y2)this.k3=H.k(this.y.p(0,"colorMat"),"$iax")
this.sh8(H.d([],[A.ax]))
t=a6.aC
if(t>0){this.k4=H.e(this.y.p(0,"bendMatCount"),"$iQ")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.r(P.v("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.k(g,"$iax"))}}t=a6.a
if(t!==C.d){this.r2=H.k(this.y.p(0,"emissionClr"),"$iN")
switch(t){case C.d:break
case C.i:break
case C.e:this.rx=H.k(this.y.p(0,"emissionTxt"),"$iaq")
this.x1=H.k(this.y.p(0,"nullEmissionTxt"),"$iQ")
break
case C.h:this.ry=H.k(this.y.p(0,"emissionTxt"),"$iak")
this.x1=H.k(this.y.p(0,"nullEmissionTxt"),"$iQ")
break}}t=a6.b
if(t!==C.d){this.x2=H.k(this.y.p(0,"ambientClr"),"$iN")
switch(t){case C.d:break
case C.i:break
case C.e:this.y1=H.k(this.y.p(0,"ambientTxt"),"$iaq")
this.aC=H.k(this.y.p(0,"nullAmbientTxt"),"$iQ")
break
case C.h:this.y2=H.k(this.y.p(0,"ambientTxt"),"$iak")
this.aC=H.k(this.y.p(0,"nullAmbientTxt"),"$iQ")
break}}t=a6.c
if(t!==C.d){this.at=H.k(this.y.p(0,"diffuseClr"),"$iN")
switch(t){case C.d:break
case C.i:break
case C.e:this.bJ=H.k(this.y.p(0,"diffuseTxt"),"$iaq")
this.bK=H.k(this.y.p(0,"nullDiffuseTxt"),"$iQ")
break
case C.h:this.er=H.k(this.y.p(0,"diffuseTxt"),"$iak")
this.bK=H.k(this.y.p(0,"nullDiffuseTxt"),"$iQ")
break}}t=a6.d
if(t!==C.d){this.bL=H.k(this.y.p(0,"invDiffuseClr"),"$iN")
switch(t){case C.d:break
case C.i:break
case C.e:this.es=H.k(this.y.p(0,"invDiffuseTxt"),"$iaq")
this.bM=H.k(this.y.p(0,"nullInvDiffuseTxt"),"$iQ")
break
case C.h:this.eu=H.k(this.y.p(0,"invDiffuseTxt"),"$iak")
this.bM=H.k(this.y.p(0,"nullInvDiffuseTxt"),"$iQ")
break}}t=a6.e
if(t!==C.d){this.bP=H.k(this.y.p(0,"shininess"),"$ia1")
this.bN=H.k(this.y.p(0,"specularClr"),"$iN")
switch(t){case C.d:break
case C.i:break
case C.e:this.ev=H.k(this.y.p(0,"specularTxt"),"$iaq")
this.bO=H.k(this.y.p(0,"nullSpecularTxt"),"$iQ")
break
case C.h:this.ew=H.k(this.y.p(0,"specularTxt"),"$iak")
this.bO=H.k(this.y.p(0,"nullSpecularTxt"),"$iQ")
break}}switch(a6.f){case C.d:break
case C.i:break
case C.e:this.ex=H.k(this.y.p(0,"bumpTxt"),"$iaq")
this.bQ=H.k(this.y.p(0,"nullBumpTxt"),"$iQ")
break
case C.h:this.ey=H.k(this.y.p(0,"bumpTxt"),"$iak")
this.bQ=H.k(this.y.p(0,"nullBumpTxt"),"$iQ")
break}if(a6.dy){this.ez=H.k(this.y.p(0,"envSampler"),"$iak")
this.eA=H.k(this.y.p(0,"nullEnvTxt"),"$iQ")
t=a6.r
if(t!==C.d){this.bR=H.k(this.y.p(0,"reflectClr"),"$iN")
switch(t){case C.d:break
case C.i:break
case C.e:this.eB=H.k(this.y.p(0,"reflectTxt"),"$iaq")
this.bS=H.k(this.y.p(0,"nullReflectTxt"),"$iQ")
break
case C.h:this.eC=H.k(this.y.p(0,"reflectTxt"),"$iak")
this.bS=H.k(this.y.p(0,"nullReflectTxt"),"$iQ")
break}}t=a6.x
if(t!==C.d){this.bT=H.k(this.y.p(0,"refraction"),"$ia1")
this.bU=H.k(this.y.p(0,"refractClr"),"$iN")
switch(t){case C.d:break
case C.i:break
case C.e:this.eD=H.k(this.y.p(0,"refractTxt"),"$iaq")
this.bV=H.k(this.y.p(0,"nullRefractTxt"),"$iQ")
break
case C.h:this.eE=H.k(this.y.p(0,"refractTxt"),"$iak")
this.bV=H.k(this.y.p(0,"nullRefractTxt"),"$iQ")
break}}}t=a6.y
if(t!==C.d){this.bW=H.k(this.y.p(0,"alpha"),"$ia1")
switch(t){case C.d:break
case C.i:break
case C.e:this.eF=H.k(this.y.p(0,"alphaTxt"),"$iaq")
this.bX=H.k(this.y.p(0,"nullAlphaTxt"),"$iQ")
break
case C.h:this.eG=H.k(this.y.p(0,"alphaTxt"),"$iak")
this.bX=H.k(this.y.p(0,"nullAlphaTxt"),"$iQ")
break}}this.sfU(H.d([],[A.cX]))
this.sfV(H.d([],[A.cZ]))
this.sfW(H.d([],[A.d_]))
this.sfX(H.d([],[A.d0]))
this.sfY(H.d([],[A.d1]))
this.sfZ(H.d([],[A.d2]))
if(a6.k2){t=a6.z
if(t>0){this.eH=H.e(this.y.p(0,"dirLightCount"),"$iQ")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(g,"$iN")
s=this.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iN")
s=this.cQ;(s&&C.a).h(s,new A.cX(h,g,f))}}t=a6.Q
if(t>0){this.eI=H.e(this.y.p(0,"pntLightCount"),"$iQ")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(g,"$iN")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iN")
s=this.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$iN")
s=this.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(d,"$ia1")
s=this.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(c,"$ia1")
s=this.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(b,"$ia1")
s=this.cR;(s&&C.a).h(s,new A.cZ(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.eJ=H.e(this.y.p(0,"spotLightCount"),"$iQ")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(g,"$iN")
s=this.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iN")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$iN")
s=this.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(d,"$iN")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(c,"$ia1")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(b,"$ia1")
s=this.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a,"$ia1")
s=this.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a0,"$ia1")
s=this.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a1,"$ia1")
s=this.cS;(s&&C.a).h(s,new A.d_(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.eK=H.e(this.y.p(0,"txtDirLightCount"),"$iQ")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(g,"$iN")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iN")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$iN")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(d,"$iN")
s=this.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(c,"$iN")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(b,"$iQ")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a,"$iaq")
s=this.cT;(s&&C.a).h(s,new A.d0(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.eL=H.e(this.y.p(0,"txtPntLightCount"),"$iQ")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(g,"$iN")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iN")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$icY")
s=this.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(d,"$iN")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(c,"$iQ")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(b,"$ia1")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a,"$ia1")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a0,"$ia1")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a1,"$iak")
s=this.cU;(s&&C.a).h(s,new A.d1(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.eM=H.e(this.y.p(0,"txtSpotLightCount"),"$iQ")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(g,"$iN")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iN")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$iN")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(d,"$iN")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(c,"$iN")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(b,"$iQ")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a,"$iN")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a0,"$ia1")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a1,"$ia1")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a2,"$ia1")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a3,"$ia1")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a4,"$ia1")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a5,"$iaq")
s=this.cV;(s&&C.a).h(s,new A.d2(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
as:function(a,b,c){if(c==null||!c.d)C.b.P(b.a,b.d,1)
else{a.fA(c)
C.b.P(b.a,b.d,0)}},
an:function(a,b,c){if(c==null||c.d<6)C.b.P(b.a,b.d,1)
else{a.dk(c)
C.b.P(b.a,b.d,0)}},
sh8:function(a){this.r1=H.l(a,"$ib",[A.ax],"$ab")},
sfU:function(a){this.cQ=H.l(a,"$ib",[A.cX],"$ab")},
sfV:function(a){this.cR=H.l(a,"$ib",[A.cZ],"$ab")},
sfW:function(a){this.cS=H.l(a,"$ib",[A.d_],"$ab")},
sfX:function(a){this.cT=H.l(a,"$ib",[A.d0],"$ab")},
sfY:function(a){this.cU=H.l(a,"$ib",[A.d1],"$ab")},
sfZ:function(a){this.cV=H.l(a,"$ib",[A.d2],"$ab")}}
A.hL.prototype={
jg:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.aC+"];\n"
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
jn:function(a){var u
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
jh:function(a){var u
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
jv:function(a){var u,t
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
jw:function(a){var u,t
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
jp:function(a){var u
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
jA:function(a){var u
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
aI:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.h(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.ax(c,1))+"Txt;\n"
a.a=u
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
jk:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aI(a,u,"emission")
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
jf:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aI(a,u,"ambient")
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
ji:function(a){var u,t
u=this.c
if(u===C.d)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aI(a,u,"diffuse")
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
jl:function(a){var u,t
u=this.d
if(u===C.d)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aI(a,u,"invDiffuse")
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
jt:function(a){var u,t
u=this.e
if(u===C.d)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aI(a,u,"specular")
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
jo:function(a){var u,t
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
jr:function(a){var u,t
u=this.r
if(u===C.d)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aI(a,u,"reflect")
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
js:function(a){var u,t
u=this.x
if(u===C.d)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aI(a,u,"refract")
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
jj:function(a){var u,t
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
jq:function(a){var u,t
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
ju:function(a){var u,t
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
jx:function(a){var u,t,s
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
jy:function(a){var u,t,s
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
jz:function(a){var u,t,s
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
jm:function(a){var u
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
i:function(a){return this.at}}
A.cX.prototype={}
A.d0.prototype={}
A.cZ.prototype={}
A.d1.prototype={}
A.d_.prototype={}
A.d2.prototype={}
A.cN.prototype={
dr:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
eW:function(a,b,c){var u,t,s
this.c=b
this.d=c
this.e=this.dK(b,35633)
this.f=this.dK(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.ee(u,t,this.e)
C.b.ee(u,this.r,this.f)
C.b.kq(u,this.r)
if(!H.lv(C.b.c8(u,this.r,35714))){s=C.b.fn(u,this.r)
C.b.k_(u,this.r)
H.r(P.v("Failed to link shader: "+H.m(s)))}this.iT()
this.iV()},
a4:function(a){C.b.de(a.a,this.r)
this.x.kb()},
dK:function(a,b){var u,t,s
u=this.a
t=C.b.jY(u,b)
C.b.fB(u,t,a)
C.b.jS(u,t)
if(!H.lv(C.b.fp(u,t,35713))){s=C.b.fo(u,t)
C.b.k0(u,t)
throw H.c(P.v("Error compiling shader '"+H.m(t)+"': "+H.m(s)))}return t},
iT:function(){var u,t,s,r,q,p
u=H.d([],[A.dx])
t=this.a
s=H.ae(C.b.c8(t,this.r,35721))
if(typeof s!=="number")return H.H(s)
r=0
for(;r<s;++r){q=C.b.fi(t,this.r,r)
p=C.b.fk(t,this.r,q.name)
C.a.h(u,new A.dx(t,q.name,p))}this.x=new A.fH(u)},
iV:function(){var u,t,s,r,q,p
u=H.d([],[A.et])
t=this.a
s=H.ae(C.b.c8(t,this.r,35718))
if(typeof s!=="number")return H.H(s)
r=0
for(;r<s;++r){q=C.b.fj(t,this.r,r)
p=C.b.fq(t,this.r,q.name)
C.a.h(u,this.jZ(q.type,q.size,q.name,p))}this.y=new A.j9(u)},
aY:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.Q(u,t,b,c)
else return A.lj(u,t,b,a,c)},
hf:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.aq(u,t,b,c)
else return A.lj(u,t,b,a,c)},
hg:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ak(u,t,b,c)
else return A.lj(u,t,b,a,c)},
bE:function(a,b){return new P.eM(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
jZ:function(a,b,c,d){switch(a){case 5120:return this.aY(b,c,d)
case 5121:return this.aY(b,c,d)
case 5122:return this.aY(b,c,d)
case 5123:return this.aY(b,c,d)
case 5124:return this.aY(b,c,d)
case 5125:return this.aY(b,c,d)
case 5126:return new A.a1(this.a,this.r,c,d)
case 35664:return new A.j4(this.a,this.r,c,d)
case 35665:return new A.N(this.a,this.r,c,d)
case 35666:return new A.j7(this.a,this.r,c,d)
case 35667:return new A.j5(this.a,this.r,c,d)
case 35668:return new A.j6(this.a,this.r,c,d)
case 35669:return new A.j8(this.a,this.r,c,d)
case 35674:return new A.ja(this.a,this.r,c,d)
case 35675:return new A.cY(this.a,this.r,c,d)
case 35676:return new A.ax(this.a,this.r,c,d)
case 35678:return this.hf(b,c,d)
case 35680:return this.hg(b,c,d)
case 35670:throw H.c(this.bE("BOOL",c))
case 35671:throw H.c(this.bE("BOOL_VEC2",c))
case 35672:throw H.c(this.bE("BOOL_VEC3",c))
case 35673:throw H.c(this.bE("BOOL_VEC4",c))
default:throw H.c(P.v("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.bY.prototype={
i:function(a){return this.b}}
A.ef.prototype={}
A.et.prototype={}
A.j9.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.T()},
ki:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.D)(u),++r)s+=u[r].i(0)+a
return s},
T:function(){return this.ki("\n")}}
A.Q.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.j5.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.j6.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.j8.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.j3.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
sjd:function(a){this.e=H.l(a,"$ib",[P.o],"$ab")}}
A.a1.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.j4.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.N.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.j7.prototype={
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.ja.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.cY.prototype={
ar:function(a){var u=new Float32Array(H.cc(H.l(a,"$ib",[P.C],"$ab")))
C.b.fd(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.ax.prototype={
ar:function(a){var u=new Float32Array(H.cc(H.l(a,"$ib",[P.C],"$ab")))
C.b.fe(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.aq.prototype={
fA:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(!u)C.b.P(t,s,0)
else C.b.P(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.ak.prototype={
dk:function(a){var u,t,s
u=a==null||a.d<6
t=this.a
s=this.d
if(u)C.b.P(t,s,0)
else C.b.P(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.kt.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.d1(u.b,b).d1(u.d.d1(u.c,b),c)
u=new V.ap(t.a,t.b,t.c)
if(!J.a9(a.f,u)){a.f=u
u=a.a
if(u!=null)u.ab()}a.skW(t.D(0,Math.sqrt(t.J(t))))
u=1-b
s=1-c
s=new V.bp(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.a9(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.ab()}},
$S:45}
F.aa.prototype={
h7:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.eB()
if(t!=null)q=q.H(0,t)
if(s!=null)q=q.H(0,s)
if(r!=null)q=q.H(0,r)
if(q.eX())return
return q.D(0,Math.sqrt(q.J(q)))},
hb:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.N(0,t)
u=new V.U(u.a,u.b,u.c)
q=u.D(0,Math.sqrt(u.J(u)))
u=r.N(0,t)
u=new V.U(u.a,u.b,u.c)
u=q.bl(u.D(0,Math.sqrt(u.J(u))))
return u.D(0,Math.sqrt(u.J(u)))},
cJ:function(){if(this.d!=null)return!0
var u=this.h7()
if(u==null){u=this.hb()
if(u==null)return!1}this.d=u
this.a.a.ab()
return!0},
h6:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.eB()
if(t!=null)q=q.H(0,t)
if(s!=null)q=q.H(0,s)
if(r!=null)q=q.H(0,r)
if(q.eX())return
return q.D(0,Math.sqrt(q.J(q)))},
ha:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.T().a){u=m.N(0,p)
u=new V.U(u.a,u.b,u.c)
h=u.D(0,Math.sqrt(u.J(u)))
if(j.a-k.a<0)h=h.X(0)}else{g=(u-l.b)/i
u=m.N(0,p)
u=new V.ap(u.a*g+p.a,u.b*g+p.b,u.c*g+p.c).N(0,s)
u=new V.U(u.a,u.b,u.c)
h=u.D(0,Math.sqrt(u.J(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.X(0)}u=this.d
if(u!=null){f=u.D(0,Math.sqrt(u.J(u)))
u=f.bl(h)
u=u.D(0,Math.sqrt(u.J(u))).bl(f)
h=u.D(0,Math.sqrt(u.J(u)))}return h},
cH:function(){if(this.e!=null)return!0
var u=this.h6()
if(u==null){u=this.ha()
if(u==null)return!1}this.e=u
this.a.a.ab()
return!0},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.T()},
E:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.c.aq(J.as(u.e),0)+", "+C.c.aq(J.as(this.b.e),0)+", "+C.c.aq(J.as(this.c.e),0)+" {"
u=this.d
t=u!=null?t+(u.i(0)+", "):t+"-, "
u=this.e
return u!=null?t+(u.i(0)+"}"):t+"-}"},
T:function(){return this.E("")}}
F.bm.prototype={
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.T()},
E:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.c.aq(J.as(u.e),0)+", "+C.c.aq(J.as(this.b.e),0)},
T:function(){return this.E("")}}
F.bJ.prototype={
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.T()},
E:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.aq(J.as(u.e),0)},
T:function(){return this.E("")}}
F.ed.prototype={
gq:function(){var u=this.e
if(u==null){u=D.P()
this.e=u}return u},
kv:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.a7()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.D)(u),++r){q=u[r]
this.a.h(0,q.jT())}this.a.a7()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.D)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.a7()
n=n.e
if(typeof n!=="number")return n.H()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bJ()
if(m.a==null)H.r(P.v("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.G(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.D)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.a7()
n=n.e
if(typeof n!=="number")return n.H()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.a7()
o=o.e
if(typeof o!=="number")return o.H()
o+=t
n=n.c
if(o>=n.length)return H.h(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.nE(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.D)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.a7()
n=n.e
if(typeof n!=="number")return n.H()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.a7()
o=o.e
if(typeof o!=="number")return o.H()
o+=t
n=n.c
if(o>=n.length)return H.h(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.a7()
n=n.e
if(typeof n!=="number")return n.H()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.cw(k,j,h)}u=this.e
if(u!=null)u.aT(0)},
aM:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aM()||!1
if(!this.a.aM())t=!1
u=this.e
if(u!=null)u.aT(0)
return t},
ei:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aZ()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bt().a)!==0)++r
if((s&$.bs().a)!==0)++r
if((s&$.bu().a)!==0)++r
if((s&$.bv().a)!==0)++r
if((s&$.dr().a)!==0)++r
if((s&$.ds().a)!==0)++r
if((s&$.cl().a)!==0)++r
if((s&$.br().a)!==0)++r
q=a1.gdl(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.C
o=H.d(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.d(t,[Z.dz])
for(m=0,l=0;l<r;++l){k=a1.jI(l)
j=k.gdl(k)
C.a.n(n,l,new Z.dz(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.h(t,i)
h=t[i].kr(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.n(o,g,h[f]);++g}}m+=j}H.l(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.aB(t,34962,e)
C.b.eh(t,34962,new Float32Array(H.cc(o)),35044)
C.b.aB(t,34962,null)
d=new Z.cq(new Z.eC(34962,e),n,a1)
d.sht(H.d([],[Z.bE]))
if(this.b.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.a7()
C.a.h(c,b.e)}a=Z.lm(t,34963,H.l(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bE(0,c.length,a))}if(this.c.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.a7()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.a7()
C.a.h(c,b.e)}a=Z.lm(t,34963,H.l(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bE(1,c.length,a))}if(this.d.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.a7()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.a7()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.h(b,l)
b=b[l].c
b.a.a.a7()
C.a.h(c,b.e)}a=Z.lm(t,34963,H.l(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bE(4,c.length,a))}return d},
i:function(a){var u=H.d([],[P.f])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.E("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.E("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.E("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.E("   "))}return C.a.m(u,"\n")},
b4:function(a){var u=this.e
if(u!=null)u.G(a)},
ab:function(){return this.b4(null)},
$ipp:1}
F.iq.prototype={
jD:function(a){var u,t,s,r,q,p
H.l(a,"$ib",[F.aC],"$ab")
u=H.d([],[F.aa])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.cw(t,q,p))}return u},
jE:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.aC],"$ab")
u=H.d([],[F.aa])
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
C.a.h(u,F.cw(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cw(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cw(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cw(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
aM:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.D)(u),++r)if(!u[r].cJ())s=!1
return s},
cI:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.D)(u),++r)if(!u[r].cH())s=!1
return s},
i:function(a){return this.T()},
E:function(a){var u,t,s,r
u=H.d([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].E(a))
return C.a.m(u,"\n")},
T:function(){return this.E("")},
shl:function(a){this.b=H.l(a,"$ib",[F.aa],"$ab")}}
F.ir.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.T()},
E:function(a){var u,t,s,r
u=H.d([],[P.f])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.h(r,s)
C.a.h(u,r[s].E(a+(""+s+". ")))}return C.a.m(u,"\n")},
T:function(){return this.E("")},
shx:function(a){this.b=H.l(a,"$ib",[F.bm],"$ab")}}
F.is.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.T()},
E:function(a){var u,t,s,r
u=H.d([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].E(a))
return C.a.m(u,"\n")},
T:function(){return this.E("")},
scv:function(a){this.b=H.l(a,"$ib",[F.bJ],"$ab")}}
F.aC.prototype={
cM:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.jq(this.cx,s,p,u,t,r,q,a,o)},
jT:function(){return this.cM(null)},
skW:function(a){var u
if(!J.a9(this.z,a)){this.z=a
u=this.a
if(u!=null)u.ab()}},
kr:function(a){var u,t
if(a.w(0,$.aZ())){u=this.f
t=[P.C]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.bt())){u=this.r
t=[P.C]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.bs())){u=this.x
t=[P.C]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.bu())){u=this.y
t=[P.C]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.w(0,$.bv())){u=this.z
t=[P.C]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.dr())){u=this.Q
t=[P.C]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.ds())){u=this.Q
t=[P.C]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.w(0,$.cl()))return H.d([this.ch],[P.C])
else if(a.w(0,$.br())){u=this.cx
t=[P.C]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.C])},
cJ:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.eB()
this.d.I(0,new F.jy(u))
u=u.a
this.r=u.D(0,Math.sqrt(u.J(u)))
u=this.a
if(u!=null){u.ab()
u=this.a.e
if(u!=null)u.aT(0)}return!0},
cH:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.eB()
this.d.I(0,new F.jx(u))
u=u.a
this.x=u.D(0,Math.sqrt(u.J(u)))
u=this.a
if(u!=null){u.ab()
u=this.a.e
if(u!=null)u.aT(0)}return!0},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.T()},
E:function(a){var u,t,s
u=H.d([],[P.f])
C.a.h(u,C.c.aq(J.as(this.e),0))
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
C.a.h(u,V.Z(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.m(u,", ")
return a+"{"+s+"}"},
T:function(){return this.E("")}}
F.jy.prototype={
$1:function(a){var u,t
H.e(a,"$iaa")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.H(0,u)}},
$S:9}
F.jx.prototype={
$1:function(a){var u,t
H.e(a,"$iaa")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.H(0,u)}},
$S:9}
F.jr.prototype={
a7:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.v("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.ab()
return!0},
jF:function(a,b,c,d,e,f,g,h,i){var u=F.jq(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bG:function(a,b,c,d,e,f){return this.jF(a,null,b,c,null,d,e,f,0)},
gl:function(a){return this.c.length},
aM:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)u[s].cJ()
return!0},
cI:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)u[s].cH()
return!0},
jN:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.D(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a9(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.G(null)}}}}return!0},
i:function(a){return this.T()},
E:function(a){var u,t,s,r
this.a7()
u=H.d([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].E(a))
return C.a.m(u,"\n")},
T:function(){return this.E("")},
sje:function(a){this.c=H.l(a,"$ib",[F.aC],"$ab")}}
F.js.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
I:function(a,b){H.n(b,{func:1,ret:-1,args:[F.aa]})
C.a.I(this.b,b)
C.a.I(this.c,new F.jt(this,b))
C.a.I(this.d,new F.ju(this,b))},
i:function(a){return this.T()},
E:function(a){var u,t,s,r
u=H.d([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].E(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].E(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].E(a))
return C.a.m(u,"\n")},
T:function(){return this.E("")},
shm:function(a){this.b=H.l(a,"$ib",[F.aa],"$ab")},
shn:function(a){this.c=H.l(a,"$ib",[F.aa],"$ab")},
sho:function(a){this.d=H.l(a,"$ib",[F.aa],"$ab")}}
F.jt.prototype={
$1:function(a){H.e(a,"$iaa")
if(!J.a9(a.a,this.a))this.b.$1(a)},
$S:9}
F.ju.prototype={
$1:function(a){var u
H.e(a,"$iaa")
u=this.a
if(!J.a9(a.a,u)&&!J.a9(a.b,u))this.b.$1(a)},
$S:9}
F.jv.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.T()},
E:function(a){var u,t,s,r
u=H.d([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].E(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].E(a))
return C.a.m(u,"\n")},
T:function(){return this.E("")},
shy:function(a){this.b=H.l(a,"$ib",[F.bm],"$ab")},
shz:function(a){this.c=H.l(a,"$ib",[F.bm],"$ab")}}
F.jw.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.T()},
E:function(a){var u,t,s,r
u=H.d([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].E(a))
return C.a.m(u,"\n")},
T:function(){return this.E("")},
scv:function(a){this.b=H.l(a,"$ib",[F.bJ],"$ab")}}
O.e_.prototype={
gq:function(){var u=this.dy
if(u==null){u=D.P()
this.dy=u}return u},
S:function(a){var u
H.e(a,"$iz")
u=this.dy
if(u!=null)u.G(a)},
bd:function(){return this.S(null)},
e0:function(a){H.e(a,"$iz")
this.a=null
this.S(a)},
iN:function(){return this.e0(null)},
hN:function(a,b){var u=V.au
u=new D.bF(a,H.l(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.S(u)},
hP:function(a,b){var u=V.au
u=new D.bG(a,H.l(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.S(u)},
dH:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.f.a9(u.e.length+3,4)*4
s=C.f.a9(u.f.length+3,4)*4
r=C.f.a9(u.r.length+3,4)*4
q=C.f.a9(u.x.length+3,4)*4
p=C.f.a9(u.y.length+3,4)*4
o=C.f.a9(u.z.length+3,4)*4
n=C.f.a9(this.e.a.length+3,4)*4
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
a2=u===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e||h===C.e||g===C.e||f===C.e
a3=u===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h||h===C.h||g===C.h||f===C.h
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.aZ()
if(a0){b=$.bt()
a7=new Z.bf(a7.a|b.a)}if(a1){b=$.bs()
a7=new Z.bf(a7.a|b.a)}if(a2){b=$.bu()
a7=new Z.bf(a7.a|b.a)}if(a3){b=$.bv()
a7=new Z.bf(a7.a|b.a)}if(a5){b=$.br()
a7=new Z.bf(a7.a|b.a)}return new A.hL(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
a1:function(a,b){H.l(a,"$ib",[T.cT],"$ab")
if(b!=null)if(!C.a.a_(a,b)){b.sbm(0,a.length)
C.a.h(a,b)}},
aw:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.at(u,u.length,0,[H.t(u,0)]);u.A();){t=u.d
t.toString
s=$.jp
if(s==null){s=new V.U(0,0,1)
$.jp=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.dd(s)}}},
f6:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.dH()
t=H.e(a2.fr.j(0,u.at),"$ie0")
if(t==null){t=A.nJ(u,a2.a)
a2.ec(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bJ
u=a3.e
if(!(u instanceof Z.cq)){a3.e=null
u=null}if(u==null||!u.d.w(0,r)){u=s.r1
if(u)a3.d.aM()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.cI()
p.a.cI()
p=p.e
if(p!=null)p.aT(0)}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.jN()
o=o.e
if(o!=null)o.aT(0)}m=a3.d.ei(new Z.eD(a2.a),r)
m.aO($.aZ()).e=this.a.Q.c
if(u)m.aO($.bt()).e=this.a.cx.c
if(q)m.aO($.bs()).e=this.a.ch.c
if(s.rx)m.aO($.bu()).e=this.a.cy.c
if(p)m.aO($.bv()).e=this.a.db.c
if(s.x1)m.aO($.br()).e=this.a.dx.c
a3.e=m}u=T.cT
l=H.d([],[u])
this.a.a4(a2)
if(s.fx){q=this.a
p=a2.dx
p=p.ga6(p)
q=q.dy
q.toString
q.ar(p.ak(0,!0))}if(s.fy){q=this.a
p=a2.cx
if(p==null){p=a2.db
p=p.ga6(p)
o=a2.dx
o=p.C(0,o.ga6(o))
a2.cx=o
p=o}q=q.fr
q.toString
q.ar(p.ak(0,!0))}q=this.a
p=a2.ch
if(p==null){p=a2.gkL()
o=a2.dx
o=p.C(0,o.ga6(o))
a2.ch=o
p=o}q=q.fy
q.toString
q.ar(p.ak(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.ar(C.t.ak(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.ar(C.t.ak(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.ar(C.t.ak(p,!0))}if(s.aC>0){k=this.e.a.length
q=this.a.k4
C.b.P(q.a,q.d,k)
for(q=[P.C],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.h(o,j)
o=o[j]
p.toString
H.e(o,"$iau")
p=p.r1
if(j>=p.length)return H.h(p,j)
p=p[j]
i=new Float32Array(H.cc(H.l(o.ak(0,!0),"$ib",q,"$ab")))
C.b.fe(p.a,p.d,!1,i)}}switch(s.a){case C.d:break
case C.i:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.v(q.a,q.d,o,n,p)
break
case C.e:this.a1(l,this.f.d)
q=this.a
p=this.f.d
q.as(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.v(p.a,p.d,o,n,q)
break
case C.h:this.a1(l,this.f.e)
q=this.a
p=this.f.e
q.an(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.v(p.a,p.d,o,n,q)
break}if(s.k2){switch(s.b){case C.d:break
case C.i:q=this.a
p=this.r.f
q=q.x2
q.toString
o=p.a
n=p.b
p=p.c
C.b.v(q.a,q.d,o,n,p)
break
case C.e:this.a1(l,this.r.d)
q=this.a
p=this.r.d
q.as(q.y1,q.aC,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.v(p.a,p.d,o,n,q)
break
case C.h:this.a1(l,this.r.e)
q=this.a
p=this.r.e
q.an(q.y2,q.aC,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.v(p.a,p.d,o,n,q)
break}switch(s.c){case C.d:break
case C.i:q=this.a
p=this.x.f
q=q.at
q.toString
o=p.a
n=p.b
p=p.c
C.b.v(q.a,q.d,o,n,p)
break
case C.e:this.a1(l,this.x.d)
q=this.a
p=this.x.d
q.as(q.bJ,q.bK,p)
p=this.a
q=this.x.f
p=p.at
p.toString
o=q.a
n=q.b
q=q.c
C.b.v(p.a,p.d,o,n,q)
break
case C.h:this.a1(l,this.x.e)
q=this.a
p=this.x.e
q.an(q.er,q.bK,p)
p=this.a
q=this.x.f
p=p.at
p.toString
o=q.a
n=q.b
q=q.c
C.b.v(p.a,p.d,o,n,q)
break}switch(s.d){case C.d:break
case C.i:q=this.a
p=this.y.f
q=q.bL
q.toString
o=p.a
n=p.b
p=p.c
C.b.v(q.a,q.d,o,n,p)
break
case C.e:this.a1(l,this.y.d)
q=this.a
p=this.y.d
q.as(q.es,q.bM,p)
p=this.a
q=this.y.f
p=p.bL
p.toString
o=q.a
n=q.b
q=q.c
C.b.v(p.a,p.d,o,n,q)
break
case C.h:this.a1(l,this.y.e)
q=this.a
p=this.y.e
q.an(q.eu,q.bM,p)
p=this.a
q=this.y.f
p=p.bL
p.toString
o=q.a
n=q.b
q=q.c
C.b.v(p.a,p.d,o,n,q)
break}switch(s.e){case C.d:break
case C.i:q=this.a
p=this.z.f
q=q.bN
q.toString
o=p.a
n=p.b
p=p.c
C.b.v(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bP
C.b.O(p.a,p.d,n)
break
case C.e:this.a1(l,this.z.d)
q=this.a
p=this.z.d
q.as(q.ev,q.bO,p)
p=this.a
q=this.z.f
p=p.bN
p.toString
o=q.a
n=q.b
q=q.c
C.b.v(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bP
C.b.O(q.a,q.d,n)
break
case C.h:this.a1(l,this.z.e)
q=this.a
p=this.z.e
q.an(q.ew,q.bO,p)
p=this.a
q=this.z.f
p=p.bN
p.toString
o=q.a
n=q.b
q=q.c
C.b.v(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bP
C.b.O(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.eH
C.b.P(q.a,q.d,k)
q=a2.db
h=q.ga6(q)
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.D)(q),++f){e=q[f]
o=this.a.cQ
if(g>=o.length)return H.h(o,g)
d=o[g]
o=h.dd(e.a)
n=o.a
c=o.b
b=o.c
b=o.D(0,Math.sqrt(n*n+c*c+b*b))
c=d.b
n=b.a
o=b.b
b=b.c
C.b.v(c.a,c.d,n,o,b)
b=e.c
o=d.c
C.b.v(o.a,o.d,b.a,b.b,b.c);++g}}if(s.Q>0){k=this.dx.f.length
q=this.a.eI
C.b.P(q.a,q.d,k)
q=a2.db
h=q.ga6(q)
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.D)(q),++f){e=q[f]
o=this.a.cR
if(g>=o.length)return H.h(o,g)
d=o[g]
o=e.gbp(e)
n=d.b
C.b.v(n.a,n.d,o.a,o.b,o.c)
o=h.bv(e.gbp(e))
n=d.c
C.b.v(n.a,n.d,o.a,o.b,o.c)
o=e.gu(e)
n=d.d
C.b.v(n.a,n.d,o.a,o.b,o.c)
o=e.gcD()
n=d.e
C.b.O(n.a,n.d,o)
o=e.gcE()
n=d.f
C.b.O(n.a,n.d,o)
o=e.gcF()
n=d.r
C.b.O(n.a,n.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.eJ
C.b.P(q.a,q.d,k)
q=a2.db
h=q.ga6(q)
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.D)(q),++f){e=q[f]
o=this.a.cS
if(g>=o.length)return H.h(o,g)
d=o[g]
o=e.gbp(e)
n=d.b
C.b.v(n.a,n.d,o.a,o.b,o.c)
o=e.gcO(e).l8()
n=d.c
C.b.v(n.a,n.d,o.a,o.b,o.c)
o=h.bv(e.gbp(e))
n=d.d
C.b.v(n.a,n.d,o.a,o.b,o.c)
o=e.gu(e)
n=d.e
C.b.v(n.a,n.d,o.a,o.b,o.c)
o=e.gl6()
n=d.f
C.b.O(n.a,n.d,o)
o=e.gl5()
n=d.r
C.b.O(n.a,n.d,o)
o=e.gcD()
n=d.x
C.b.O(n.a,n.d,o)
o=e.gcE()
n=d.y
C.b.O(n.a,n.d,o)
o=e.gcF()
n=d.z
C.b.O(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.eK
C.b.P(q.a,q.d,k)
q=a2.db
h=q.ga6(q)
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.D)(q),++f){e=q[f]
n=this.a.cT
if(g>=n.length)return H.h(n,g)
d=n[g]
n=e.gbt()
H.l(l,"$ib",o,"$ab")
if(!C.a.a_(l,n)){n.sbm(0,l.length)
C.a.h(l,n)}n=e.gcO(e)
c=d.d
C.b.v(c.a,c.d,n.a,n.b,n.c)
n=e.gc3()
c=d.b
C.b.v(c.a,c.d,n.a,n.b,n.c)
n=e.gc1(e)
c=d.c
C.b.v(c.a,c.d,n.a,n.b,n.c)
n=h.dd(e.gcO(e))
c=n.a
b=n.b
a=n.c
a=n.D(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
n=a.b
a=a.c
C.b.v(b.a,b.d,c,n,a)
a=e.gu(e)
n=d.f
C.b.v(n.a,n.d,a.a,a.b,a.c)
a=e.gbt()
n=a.geY(a)
if(!n){n=d.x
C.b.P(n.a,n.d,1)}else{n=d.r
c=a.d
b=n.a
n=n.d
if(!c)C.b.P(b,n,0)
else C.b.P(b,n,a.a)
n=d.x
C.b.P(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.eL
C.b.P(q.a,q.d,k)
q=a2.db
h=q.ga6(q)
for(q=this.dx.y,p=q.length,o=[P.C],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.D)(q),++f){e=q[f]
c=this.a.cU
if(g>=c.length)return H.h(c,g)
d=c[g]
c=e.gbt()
H.l(l,"$ib",n,"$ab")
if(!C.a.a_(l,c)){c.sbm(0,l.length)
C.a.h(l,c)}a0=h.C(0,e.ga6(e))
c=e.ga6(e)
b=$.cK
if(b==null){b=new V.ap(0,0,0)
$.cK=b}b=c.bv(b)
c=d.b
C.b.v(c.a,c.d,b.a,b.b,b.c)
c=$.cK
if(c==null){c=new V.ap(0,0,0)
$.cK=c}c=a0.bv(c)
b=d.c
C.b.v(b.a,b.d,c.a,c.b,c.c)
c=a0.d_(0)
b=d.d
i=new Float32Array(H.cc(H.l(new V.e1(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).ak(0,!0),"$ib",o,"$ab")))
C.b.fd(b.a,b.d,!1,i)
b=e.gu(e)
c=d.e
C.b.v(c.a,c.d,b.a,b.b,b.c)
b=e.gbt()
c=b.geY(b)
if(!c){c=d.r
C.b.P(c.a,c.d,1)}else{c=d.f
a=b.d
a1=c.a
c=c.d
if(a<6)C.b.P(a1,c,0)
else C.b.P(a1,c,b.a)
c=d.r
C.b.P(c.a,c.d,0)}c=e.gcD()
b=d.x
C.b.O(b.a,b.d,c)
c=e.gcE()
b=d.y
C.b.O(b.a,b.d,c)
c=e.gcF()
b=d.z
C.b.O(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.eM
C.b.P(q.a,q.d,k)
q=a2.db
h=q.ga6(q)
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.D)(q),++f){e=q[f]
o=this.a.cV
if(g>=o.length)return H.h(o,g)
d=o[g]
o=e.gbt()
H.l(l,"$ib",u,"$ab")
if(!C.a.a_(l,o)){o.sbm(0,l.length)
C.a.h(l,o)}o=e.gbp(e)
n=d.b
C.b.v(n.a,n.d,o.a,o.b,o.c)
o=e.gcO(e)
n=d.c
C.b.v(n.a,n.d,o.a,o.b,o.c)
o=e.gc3()
n=d.d
C.b.v(n.a,n.d,o.a,o.b,o.c)
o=e.gc1(e)
n=d.e
C.b.v(n.a,n.d,o.a,o.b,o.c)
o=h.bv(e.gbp(e))
n=d.f
C.b.v(n.a,n.d,o.a,o.b,o.c)
o=e.gbt()
n=o.geY(o)
if(!n){o=d.x
C.b.P(o.a,o.d,1)}else{n=d.r
c=o.d
b=n.a
n=n.d
if(!c)C.b.P(b,n,0)
else C.b.P(b,n,o.a)
o=d.x
C.b.P(o.a,o.d,0)}o=e.gu(e)
n=d.y
C.b.v(n.a,n.d,o.a,o.b,o.c)
o=e.gl9()
n=d.z
C.b.O(n.a,n.d,o)
o=e.gla()
n=d.Q
C.b.O(n.a,n.d,o)
o=e.gcD()
n=d.ch
C.b.O(n.a,n.d,o)
o=e.gcE()
n=d.cx
C.b.O(n.a,n.d,o)
o=e.gcF()
n=d.cy
C.b.O(n.a,n.d,o);++g}}}switch(s.f){case C.d:break
case C.i:break
case C.e:this.a1(l,this.Q.d)
u=this.a
q=this.Q.d
u.as(u.ex,u.bQ,q)
break
case C.h:this.a1(l,this.Q.e)
u=this.a
q=this.Q.e
u.an(u.ey,u.bQ,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db
q=q.ga6(q).d_(0)
a2.Q=q}u=u.id
u.toString
u.ar(q.ak(0,!0))}if(s.dy){this.a1(l,this.ch)
u=this.a
q=this.ch
u.an(u.ez,u.eA,q)
switch(s.r){case C.d:break
case C.i:u=this.a
q=this.cx.f
u=u.bR
u.toString
p=q.a
o=q.b
q=q.c
C.b.v(u.a,u.d,p,o,q)
break
case C.e:this.a1(l,this.cx.d)
u=this.a
q=this.cx.d
u.as(u.eB,u.bS,q)
q=this.a
u=this.cx.f
q=q.bR
q.toString
p=u.a
o=u.b
u=u.c
C.b.v(q.a,q.d,p,o,u)
break
case C.h:this.a1(l,this.cx.e)
u=this.a
q=this.cx.e
u.an(u.eC,u.bS,q)
q=this.a
u=this.cx.f
q=q.bR
q.toString
p=u.a
o=u.b
u=u.c
C.b.v(q.a,q.d,p,o,u)
break}switch(s.x){case C.d:break
case C.i:u=this.a
q=this.cy.f
u=u.bU
u.toString
p=q.a
o=q.b
q=q.c
C.b.v(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bT
C.b.O(q.a,q.d,o)
break
case C.e:this.a1(l,this.cy.d)
u=this.a
q=this.cy.d
u.as(u.eD,u.bV,q)
q=this.a
u=this.cy.f
q=q.bU
q.toString
p=u.a
o=u.b
u=u.c
C.b.v(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bT
C.b.O(u.a,u.d,o)
break
case C.h:this.a1(l,this.cy.e)
u=this.a
q=this.cy.e
u.an(u.eE,u.bV,q)
q=this.a
u=this.cy.f
q=q.bU
q.toString
p=u.a
o=u.b
u=u.c
C.b.v(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bT
C.b.O(u.a,u.d,o)
break}}u=s.y
q=u!==C.d
if(q){switch(u){case C.d:break
case C.i:u=this.a
p=this.db.f
u=u.bW
C.b.O(u.a,u.d,p)
break
case C.e:this.a1(l,this.db.d)
u=this.a
p=this.db.d
u.as(u.eF,u.bX,p)
p=this.a
u=this.db.f
p=p.bW
C.b.O(p.a,p.d,u)
break
case C.h:this.a1(l,this.db.e)
u=this.a
p=this.db.e
u.an(u.eG,u.bX,p)
p=this.a
u=this.db.f
p=p.bW
C.b.O(p.a,p.d,u)
break}u=a2.a
C.b.cP(u,3042)
C.b.jM(u,770,771)}for(j=0;j<l.length;++j)l[j].a4(a2)
u=a3.e
u.a4(a2)
u.aj(a2)
u.av(a2)
if(q)C.b.k8(a2.a,3042)
for(j=0;j<l.length;++j)l[j].av(a2)
u=this.a
u.toString
C.b.de(a2.a,null)
u.x.em()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dH().at},
sh9:function(a){this.e=H.l(a,"$ia3",[V.au],"$aa3")}}
O.hJ.prototype={
iR:function(a){var u=this.f
if(!(Math.abs(u-a)<$.T().a)){this.f=a
u=new D.M(this.b,u,a,this,[P.C])
u.b=!0
this.a.S(u)}},
aJ:function(){this.dn()
this.iR(1)}}
O.cC.prototype={
S:function(a){this.a.S(H.e(a,"$iz"))},
bd:function(){return this.S(null)},
aJ:function(){},
aK:function(){},
e3:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gq().Y(0,this.gb_())
t=this.d
this.d=a
if(a!=null)a.gq().h(0,this.gb_())
u=new D.M(this.b+".texture2D",t,this.d,this,[T.em])
u.b=!0
this.a.S(u)}},
e4:function(a){},
jO:function(a){var u
if(this.c!==C.d){this.c=C.d
u=this.a
u.a=null
u.S(null)}this.aJ()
this.e3(null)
this.e4(null)
this.a.S(null)}}
O.hK.prototype={}
O.b7.prototype={
cA:function(a){var u,t
if(!J.a9(this.f,a)){u=this.f
this.f=a
t=new D.M(this.b+".color",u,a,this,[V.y])
t.b=!0
this.a.S(t)}},
aJ:function(){this.dn()
this.cA(new V.y(0,0,0))},
aK:function(){this.fH()
this.cA(new V.y(1,1,1))},
su:function(a,b){var u
if(this.c===C.d){this.c=C.i
this.aK()
u=this.a
u.a=null
u.S(null)}this.cA(b)}}
O.hM.prototype={
bC:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.T().a)){this.ch=a
u=new D.M(this.b+".refraction",u,a,this,[P.C])
u.b=!0
this.a.S(u)}},
aJ:function(){this.dq()
this.bC(1)},
aK:function(){this.bx()
this.bC(1)},
saN:function(a){var u
if(a<=0)this.jO(0)
else if(this.c===C.d){this.c=C.i
this.bx()
this.bC(1)
u=this.a
u.a=null
u.S(null)}this.bC(a)}}
O.hN.prototype={
bD:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.T().a)){this.ch=a
u=new D.M(this.b+".shininess",u,a,this,[P.C])
u.b=!0
this.a.S(u)}},
aJ:function(){this.dq()
this.bD(100)},
aK:function(){this.bx()
this.bD(100)}}
O.ee.prototype={
gq:function(){var u=this.e
if(u==null){u=D.P()
this.e=u}return u},
S:function(a){var u
H.e(a,"$iz")
u=this.e
if(u!=null)u.G(a)},
bd:function(){return this.S(null)},
f6:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.e(a.fr.j(0,"Skybox"),"$ief")
if(u==null){t=a.a
u=new A.ef(t,"Skybox")
u.dr(t,"Skybox")
u.eW(0,$.o3,$.o2)
u.z=u.x.j(0,"posAttr")
u.Q=H.k(u.y.j(0,"fov"),"$ia1")
u.ch=H.k(u.y.j(0,"ratio"),"$ia1")
u.cx=H.k(u.y.j(0,"boxClr"),"$iN")
u.cy=H.k(u.y.j(0,"boxTxt"),"$iak")
u.db=H.k(u.y.j(0,"viewMat"),"$iax")
a.ec(u)}this.a=u}if(b.e==null){t=b.d.ei(new Z.eD(a.a),$.aZ())
t.aO($.aZ()).e=this.a.z.c
b.e=t}t=this.c
if(t!=null){t.a=1
t.a4(a)}t=a.d
s=a.c
r=this.a
r.a4(a)
q=this.b
p=r.Q
C.b.O(p.a,p.d,q)
q=r.ch
C.b.O(q.a,q.d,t/s)
s=this.c
r.cy.dk(s)
s=this.d
t=r.cx
C.b.v(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga6(s).d_(0)
r=r.db
r.toString
r.ar(s.ak(0,!0))
t=b.e
if(t instanceof Z.cq){t.a4(a)
t.aj(a)
t.av(a)}else b.e=null
t=this.a
t.toString
C.b.de(a.a,null)
t.x.em()
t=this.c
if(t!=null)t.av(a)}}
O.bL.prototype={}
T.cT.prototype={}
T.em.prototype={}
T.iP.prototype={
sbm:function(a,b){this.a=b
return b},
gq:function(){var u=this.y
if(u==null){u=D.P()
this.y=u}return u},
a4:function(a){var u
if(!this.c&&this.d){this.c=!0
u=a.a
C.b.bF(u,33984+this.a)
C.b.af(u,3553,this.b)}},
av:function(a){var u
if(this.c){this.c=!1
u=a.a
C.b.bF(u,33984+this.a)
C.b.af(u,3553,null)}}}
T.cU.prototype={
sbm:function(a,b){this.a=b
return b},
gq:function(){var u=this.e
if(u==null){u=D.P()
this.e=u}return u},
a4:function(a){var u
if(!this.c&&this.d>=6){this.c=!0
u=a.a
C.b.bF(u,33984+this.a)
C.b.af(u,34067,this.b)}},
av:function(a){var u
if(this.c){this.c=!1
u=a.a
C.b.bF(u,33984+this.a)
C.b.af(u,34067,null)}}}
T.iQ.prototype={
kt:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.af(u,3553,t)
C.b.aE(u,3553,10242,33071)
C.b.aE(u,3553,10243,33071)
C.b.aE(u,3553,10241,9729)
C.b.aE(u,3553,10240,9729)
C.b.af(u,3553,null);++this.d
s=W.l9(null,a,null)
r=new T.iP()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.p
W.a7(s,"load",H.n(new T.iS(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
ks:function(a){return this.kt(a,!1,!1,!1,!1)},
aZ:function(a,b,c,d,e,f){var u,t
u=W.l9(null,c,null);++this.d
t=W.p
W.a7(u,"load",H.n(new T.iR(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
e2:function(a,b,c){var u,t,s,r
b=V.lB(b,2)
u=V.lB(a.width,2)
t=V.lB(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.l4(null,null)
s.width=u
s.height=t
r=H.e(C.q.fm(s,"2d"),"$ibW")
r.imageSmoothingEnabled=!1;(r&&C.D).ka(r,a,0,0,s.width,s.height)
return P.oU(C.D.hs(r,0,0,s.width,s.height))}}}
T.iS.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.e2(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.af(t,3553,this.e)
C.b.f5(t,37440,this.f?1:0)
C.b.f9(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.fh(t,3553)
C.b.af(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.ep()}++s.e},
$S:10}
T.iR.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.e2(this.b,u.c,this.c)
s=u.a
C.b.af(s,34067,this.d)
C.b.f5(s,37440,this.e?1:0)
C.b.f9(s,this.f,0,6408,6408,5121,t)
C.b.af(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.ep()}++u.e},
$S:10}
V.bj.prototype={
aQ:function(a,b){return!0},
i:function(a){return"all"},
$iay:1}
V.ay.prototype={}
V.dZ.prototype={
aQ:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)if(u[s].aQ(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.D)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sad:function(a){this.a=H.l(a,"$ib",[V.ay],"$ab")},
$iay:1}
V.av.prototype={
aQ:function(a,b){return!this.fG(0,b)},
i:function(a){return"!["+this.dm(0)+"]"}}
V.id.prototype={
aQ:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.c7(this.a)
t=H.c7(this.b)
return u+".."+t},
$iay:1}
V.ip.prototype={
fM:function(a){var u,t
if(a.a.length<=0)throw H.c(P.v("May not create a SetMatcher with zero characters."))
u=new H.aP([P.o,P.R])
for(t=new H.cB(a,a.gl(a),0,[H.al(a,"x",0)]);t.A();)u.n(0,t.d,!0)
this.siQ(u)},
aQ:function(a,b){return this.a.bH(0,b)},
i:function(a){var u=this.a
return P.ei(u.gaa(u),0,null)},
siQ:function(a){this.a=H.l(a,"$iF",[P.o,P.R],"$aF")},
$iay:1}
V.cO.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cW(this.a.k(0,b))
r.sad(H.d([],[V.ay]))
r.c=!1
C.a.h(this.c,r)
return r},
ke:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(r.aQ(0,a))return r}return},
i:function(a){return this.b},
sj9:function(a){this.c=H.l(a,"$ib",[V.cW],"$ab")}}
V.er.prototype={
i:function(a){var u,t
u=H.lD(this.b,"\n","\\n")
t=H.lD(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cV.prototype={
aS:function(a,b,c){var u,t,s
H.l(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.D)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
siJ:function(a){var u=P.f
this.c=H.l(a,"$iF",[u,u],"$aF")}}
V.iV.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cO(this,b)
u.sj9(H.d([],[V.cW]))
u.d=null
this.a.n(0,b,u)}return u},
U:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cV(this,a)
t=P.f
u.siJ(new H.aP([t,t]))
this.b.n(0,a,u)}return u},
fc:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.d([],[V.er])
t=this.c
s=[P.o]
r=H.d([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.F(a,o)
m=t.ke(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.ei(r,0,null)
throw H.c(P.v("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.d([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.ei(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.er(j==null?k.b:j,l,o)}++o}}},
siZ:function(a){this.a=H.l(a,"$iF",[P.f,V.cO],"$aF")},
sj2:function(a){this.b=H.l(a,"$iF",[P.f,V.cV],"$aF")}}
V.cW.prototype={
i:function(a){return this.b.b+": "+this.dm(0)}}
X.bU.prototype={$ib9:1}
X.hk.prototype={
gq:function(){var u=this.x
if(u==null){u=D.P()
this.x=u}return u},
ay:function(a){var u=this.x
if(u!=null)u.G(a)},
sej:function(a,b){var u
if(this.b){this.b=!1
u=new D.M("clearColor",!0,!1,this,[P.R])
u.b=!0
this.ay(u)}},
a4:function(a){var u,t,s,r,q,p,o,n
u=a.a
C.b.jL(u,36160,null)
C.b.cP(u,2884)
C.b.cP(u,2929)
C.b.k7(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.H(t)
p=C.j.au(q*t)
q=r.b
if(typeof s!=="number")return H.H(s)
o=C.j.au(q*s)
q=C.j.au(r.c*t)
a.c=q
r=C.j.au(r.d*s)
a.d=r
C.b.l2(u,p,o,q,r)
C.b.jR(u,this.c)
if(this.b){r=this.a
C.b.jQ(u,r.a,r.b,r.c,r.d)
n=16640}else n=256
C.b.jP(u,n)}}
X.hp.prototype={
gq:function(){var u=this.b
if(u==null){u=D.P()
this.b=u}return u},
a4:function(a){var u
a.cy.c0(V.c4())
u=V.c4()
a.db.c0(u)},
av:function(a){a.cy.aR()
a.db.aR()},
$ib9:1,
$ibU:1}
X.e7.prototype={
gq:function(){var u=this.f
if(u==null){u=D.P()
this.f=u}return u},
ay:function(a){var u
H.e(a,"$iz")
u=this.f
if(u!=null)u.G(a)},
h3:function(){return this.ay(null)},
a4:function(a){var u,t,s,r,q,p,o,n,m,l
u=a.c
t=a.d
s=this.c
r=this.d
q=this.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.b8(-o/(u/t),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
a.cy.c0(n)
u=$.m4
if(u==null){u=V.m6()
t=V.mp()
s=$.mm
if(s==null){s=new V.U(0,0,-1)
$.mm=s}s=V.m_(u,t,s)
$.m4=s
m=s}else m=u
u=this.b
if(u!=null){l=u.b6(0,a,this)
if(l!=null)m=l.C(0,m)}a.db.c0(m)},
av:function(a){a.cy.aR()
a.db.aR()},
$ib9:1,
$ibU:1}
X.cR.prototype={}
V.by.prototype={
by:function(a){this.b=new P.hn(C.Y)
this.c=null
this.sck(H.d([],[[P.b,W.aE]]))},
R:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.d([],[W.aE]))
t=a.split("\n")
for(u=t.length,s=[W.aE],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.d([],s))
o=document.createElement("div")
o.className="codePart"
H.I(p)
n=this.b.he(p,0,p.length)
m=n==null?p:n
C.k.fw(o,H.lD(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaD(this.d),o)}},
f3:function(a,b){var u,t,s,r
H.l(b,"$ib",[P.f],"$ab")
this.sck(H.d([],[[P.b,W.aE]]))
u=C.a.m(b,"\n")
t=this.c
if(t==null){t=this.bI()
this.c=t}for(t=t.fc(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)this.c_(t[r])},
sck:function(a){this.d=H.l(a,"$ib",[[P.b,W.aE]],"$ab")}}
V.kY.prototype={
$1:function(a){H.e(a,"$ibc")
P.lC(C.j.fb(this.a.gkj(),2)+" fps")},
$S:49}
V.h0.prototype={
c_:function(a){switch(a.a){case"Class":this.R(a.b,"#551")
break
case"Comment":this.R(a.b,"#777")
break
case"Id":this.R(a.b,"#111")
break
case"Num":this.R(a.b,"#191")
break
case"Reserved":this.R(a.b,"#119")
break
case"String":this.R(a.b,"#171")
break
case"Symbol":this.R(a.b,"#616")
break
case"Type":this.R(a.b,"#B11")
break
case"Whitespace":this.R(a.b,"#111")
break}},
bI:function(){var u,t,s,r
u=V.iW()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.w(new H.u("_"))
C.a.h(t.a,s)
s=V.a0("a","z")
C.a.h(t.a,s)
s=V.a0("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.w(new H.u("_"))
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
s=V.w(new H.u("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.a0("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.a0("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Sym")
t=V.w(new H.u("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").m(0,"Sym")
s=V.w(new H.u("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"OpenDoubleStr")
t=V.w(new H.u('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenDoubleStr").m(0,"CloseDoubleStr")
s=V.w(new H.u('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenDoubleStr").m(0,"EscDoubleStr")
t=V.w(new H.u("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscDoubleStr").m(0,"OpenDoubleStr")
s=V.w(new H.u('"'))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenDoubleStr").m(0,"OpenDoubleStr").a,new V.bj())
s=u.k(0,"Start").m(0,"OpenSingleStr")
t=V.w(new H.u("'"))
C.a.h(s.a,t)
t=u.k(0,"OpenSingleStr").m(0,"CloseSingleStr")
s=V.w(new H.u("'"))
C.a.h(t.a,s)
s=u.k(0,"OpenSingleStr").m(0,"EscSingleStr")
t=V.w(new H.u("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscSingleStr").m(0,"OpenSingleStr")
s=V.w(new H.u("'"))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenSingleStr").m(0,"OpenSingleStr").a,new V.bj())
s=u.k(0,"Start").m(0,"Slash")
t=V.w(new H.u("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"Comment")
s=V.w(new H.u("/"))
C.a.h(t.a,s)
s=u.k(0,"Comment").m(0,"EndComment")
t=V.w(new H.u("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").m(0,"Comment")
s=new V.av()
r=[V.ay]
s.sad(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.u("\n"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"MLComment")
s=V.w(new H.u("*"))
C.a.h(t.a,s)
s=u.k(0,"MLComment").m(0,"MLCStar")
t=V.w(new H.u("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").m(0,"MLComment")
s=new V.av()
s.sad(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.u("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").m(0,"EndComment")
s=V.w(new H.u("/"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Whitespace")
t=V.w(new H.u(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Whitespace").m(0,"Whitespace")
s=V.w(new H.u(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Int")
s.d=s.a.U("Num")
s=u.k(0,"Float")
s.d=s.a.U("Num")
s=u.k(0,"Sym")
s.d=s.a.U("Symbol")
s=u.k(0,"CloseDoubleStr")
s.d=s.a.U("String")
s=u.k(0,"CloseSingleStr")
s.d=s.a.U("String")
s=u.k(0,"EndComment")
s.d=s.a.U("Comment")
s=u.k(0,"Whitespace")
s.d=s.a.U("Whitespace")
s=u.k(0,"Id")
t=s.a.U("Id")
s.d=t
s=[P.f]
t.aS(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aS(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aS(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.hl.prototype={
c_:function(a){switch(a.a){case"Builtin":this.R(a.b,"#411")
break
case"Comment":this.R(a.b,"#777")
break
case"Id":this.R(a.b,"#111")
break
case"Num":this.R(a.b,"#191")
break
case"Preprocess":this.R(a.b,"#737")
break
case"Reserved":this.R(a.b,"#119")
break
case"Symbol":this.R(a.b,"#611")
break
case"Type":this.R(a.b,"#171")
break
case"Whitespace":this.R(a.b,"#111")
break}},
bI:function(){var u,t,s,r
u=V.iW()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.w(new H.u("_"))
C.a.h(t.a,s)
s=V.a0("a","z")
C.a.h(t.a,s)
s=V.a0("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.w(new H.u("_"))
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
s=V.w(new H.u("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.a0("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.a0("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Sym")
t=V.w(new H.u("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").m(0,"Sym")
s=V.w(new H.u("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Slash")
t=V.w(new H.u("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"Comment")
s=V.w(new H.u("/"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Slash").m(0,"Sym").a,new V.bj())
s=u.k(0,"Comment").m(0,"EndComment")
t=V.w(new H.u("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").m(0,"Comment")
s=new V.av()
r=[V.ay]
s.sad(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.u("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Preprocess")
s=V.w(new H.u("#"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").m(0,"Preprocess")
t=new V.av()
t.sad(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.u("\n"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").m(0,"EndPreprocess")
t=V.w(new H.u("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Whitespace")
s=V.w(new H.u(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Whitespace").m(0,"Whitespace")
t=V.w(new H.u(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Int")
t.d=t.a.U("Num")
t=u.k(0,"Float")
t.d=t.a.U("Num")
t=u.k(0,"Sym")
t.d=t.a.U("Symbol")
t=u.k(0,"EndComment")
t.d=t.a.U("Comment")
t=u.k(0,"EndPreprocess")
t.d=t.a.U("Preprocess")
t=u.k(0,"Whitespace")
t.d=t.a.U("Whitespace")
t=u.k(0,"Id")
s=t.a.U("Id")
t.d=s
t=[P.f]
s.aS(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aS(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aS(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return u}}
V.hm.prototype={
c_:function(a){switch(a.a){case"Attr":this.R(a.b,"#911")
this.R("=","#111")
break
case"Id":this.R(a.b,"#111")
break
case"Other":this.R(a.b,"#111")
break
case"Reserved":this.R(a.b,"#119")
break
case"String":this.R(a.b,"#171")
break
case"Symbol":this.R(a.b,"#616")
break}},
bI:function(){var u,t,s
u=V.iW()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.w(new H.u("_"))
C.a.h(t.a,s)
s=V.a0("a","z")
C.a.h(t.a,s)
s=V.a0("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.w(new H.u("_"))
C.a.h(s.a,t)
t=V.a0("0","9")
C.a.h(s.a,t)
t=V.a0("a","z")
C.a.h(s.a,t)
t=V.a0("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Id").m(0,"Attr")
s=V.w(new H.u("="))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Sym")
s=V.w(new H.u("</\\-!>="))
C.a.h(t.a,s)
s=u.k(0,"Sym").m(0,"Sym")
t=V.w(new H.u("</\\-!>="))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"OpenStr")
s=V.w(new H.u('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenStr").m(0,"CloseStr")
t=V.w(new H.u('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenStr").m(0,"EscStr")
s=V.w(new H.u("\\"))
C.a.h(t.a,s)
s=u.k(0,"EscStr").m(0,"OpenStr")
t=V.w(new H.u('"'))
C.a.h(s.a,t)
C.a.h(u.k(0,"OpenStr").m(0,"OpenStr").a,new V.bj())
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bj())
t=u.k(0,"Other").m(0,"Other")
s=new V.av()
s.sad(H.d([],[V.ay]))
C.a.h(t.a,s)
t=V.w(new H.u('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.a0("a","z")
C.a.h(s.a,t)
t=V.a0("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Sym")
t.d=t.a.U("Symbol")
t=u.k(0,"CloseStr")
t.d=t.a.U("String")
t=u.k(0,"Id")
s=t.a.U("Id")
t.d=s
s.aS(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
s=u.k(0,"Attr")
s.d=s.a.U("Attr")
s=u.k(0,"Other")
s.d=s.a.U("Other")
return u}}
V.i6.prototype={
f3:function(a,b){H.l(b,"$ib",[P.f],"$ab")
this.sck(H.d([],[[P.b,W.aE]]))
this.R(C.a.m(b,"\n"),"#111")},
c_:function(a){},
bI:function(){return}}
V.ia.prototype={
e9:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.n(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.jh().gbq().j(0,H.m(u))
if(t==null)if(d){c.$0()
this.bh(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.cm(this.c).h(0,q)
o=W.nz("radio")
o.checked=s
o.name=u
u=W.p
W.a7(o,"change",H.n(new V.ib(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.H.B(q,o)
n=r.createElement("span")
n.textContent=b
C.H.B(q,n)
J.cm(this.c).h(0,r.createElement("br"))},
ag:function(a,b,c){return this.e9(a,b,c,!1)},
bh:function(a){var u,t,s,r,q
u=P.jh()
t=P.f
s=P.lX(u.gbq(),t,t)
s.n(0,this.a,a)
r=u.d9(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.E).e_(t,new P.ff([],[]).c4(""),"",q)}}
V.ib.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.bh(this.d)}},
$S:10}
V.it.prototype={
fN:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.p).B(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.p.B(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.k.B(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.k.B(q,p)}o=u.createElement("div")
this.a=o
C.k.B(q,o)
this.b=null
o=W.p
W.a7(u,"scroll",H.n(new V.iv(s),{func:1,ret:-1,args:[o]}),!1,o)},
eb:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.f],"$ab")
this.iU()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.fc(C.a.kp(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.k.B(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.k.B(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.k.B(t,o)
break
case"Link":n=p.b
if(H.pe(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.I(m[1])
l.textContent=H.I(m[0])
C.k.B(t,l)}else{k=P.fp(C.K,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.m(k)
l.textContent=n
C.k.B(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.B(t,o)
break}}C.k.B(this.a,t)},
fl:function(a){var u,t,s,r
u=new V.h0("dart")
u.by("dart")
t=new V.hl("glsl")
t.by("glsl")
s=new V.hm("html")
s.by("html")
r=C.a.kf(H.d([u,t,s],[V.by]),new V.iw(a))
if(r!=null)return r
u=new V.i6("plain")
u.by("plain")
return u},
ea:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.l(a7,"$ib",[P.f],"$ab")
u=H.d([],[P.o])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.dp(r).a8(r,"+")){C.a.n(a7,s,C.c.ax(r,1))
C.a.h(u,1)
t=!0}else if(C.c.a8(r,"-")){C.a.n(a7,s,C.c.ax(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.fl(a5)
q.f3(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.B(o,n)
C.k.B(this.a,o)
m=P.fp(C.K,a4,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lL(null)
i.href="#"+H.m(m)
i.textContent=a4
C.k.B(j,i)
C.y.B(k,j)
C.n.B(l,k)
C.o.B(n,l)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.D)(r),++a0)C.y.B(a,r[a0])
C.n.B(e,d)
C.n.B(e,c)
C.n.B(e,a)
C.o.B(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.D)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gW(r);a3.A();)C.y.B(c,a3.gL(a3))
C.n.B(e,d)
C.n.B(e,c)
C.o.B(n,e)}},
jB:function(a){var u,t,s,r,q,p,o
H.l(a,"$ib",[P.f],"$ab")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.k.B(this.a,t)
r=C.o.hu(t,-1)
s=H.e((r&&C.n).dQ(r,-1),"$ibb").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto"
for(q=0;q<2;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.e(C.n.dQ(r,-1),"$ibb")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.y).B(o,p)}},
iU:function(){var u,t,s,r
if(this.b!=null)return
u=V.iW()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Bold")
s=V.w(new H.u("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Bold").m(0,"Bold")
s=new V.av()
r=[V.ay]
s.sad(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.u("*"))
C.a.h(s.a,t)
t=u.k(0,"Bold").m(0,"BoldEnd")
s=V.w(new H.u("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Italic")
s=V.w(new H.u("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Italic").m(0,"Italic")
s=new V.av()
s.sad(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.u("_"))
C.a.h(s.a,t)
t=u.k(0,"Italic").m(0,"ItalicEnd")
s=V.w(new H.u("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Code")
s=V.w(new H.u("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Code").m(0,"Code")
s=new V.av()
s.sad(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.u("`"))
C.a.h(s.a,t)
t=u.k(0,"Code").m(0,"CodeEnd")
s=V.w(new H.u("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"LinkHead")
s=V.w(new H.u("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"LinkHead").m(0,"LinkTail")
s=V.w(new H.u("|"))
C.a.h(t.a,s)
s=u.k(0,"LinkHead").m(0,"LinkEnd")
t=V.w(new H.u("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkHead").m(0,"LinkHead")
t=new V.av()
t.sad(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.u("|]"))
C.a.h(t.a,s)
s=u.k(0,"LinkTail").m(0,"LinkEnd")
t=V.w(new H.u("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkTail").m(0,"LinkTail")
t=new V.av()
t.sad(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.u("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bj())
s=u.k(0,"Other").m(0,"Other")
t=new V.av()
t.sad(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.u("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.U("Bold")
s=u.k(0,"ItalicEnd")
s.d=s.a.U("Italic")
s=u.k(0,"CodeEnd")
s.d=s.a.U("Code")
s=u.k(0,"LinkEnd")
s.d=s.a.U("Link")
s=u.k(0,"Other")
s.d=s.a.U("Other")
this.b=u}}
V.iv.prototype={
$1:function(a){P.mf(C.z,new V.iu(this.a))},
$S:10}
V.iu.prototype={
$0:function(){var u,t,s
u=C.j.au(document.documentElement.scrollTop)
t=this.a.style
s=H.m(-0.01*u)+"px"
t.top=s},
$S:0}
V.iw.prototype={
$1:function(a){return H.e(a,"$iby").a===this.a},
$S:50}
V.iM.prototype={
ag:function(a,b,c){var u,t,s,r,q
u=W.l9(null,null,null)
u.src=b
u.width=64
u.height=64
t=u.style
t.border="solid 2px white"
t=J.cm(this.c)
s=t.gl(t)
t=W.a6
W.a7(u,"click",H.n(new V.iO(this,u,b,s),{func:1,ret:-1,args:[t]}),!1,t)
J.cm(this.c).h(0,u)
J.cm(this.c).h(0,document.createElement("br"))
r=P.jh().gbq().j(0,H.m(this.a))
if(r==null){this.bh(s)
q=c}else q=P.dq(r,null,null)===s
if(q)u.click()},
h:function(a,b){return this.ag(a,b,!1)},
bh:function(a){var u,t,s,r,q
u=P.jh()
t=P.f
s=P.lX(u.gbq(),t,t)
s.n(0,this.a,""+a)
r=u.d9(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.E).e_(t,new P.ff([],[]).c4(""),"",q)}}
V.iO.prototype={
$1:function(a){var u,t
H.e(a,"$ia6")
u=this.a
t=J.cm(u.c)
t.I(t,new V.iN())
t=this.b.style
t.border="solid 2px black"
u.d.$1(this.c)
u.bh(this.d)},
$S:51}
V.iN.prototype={
$1:function(a){var u
H.e(a,"$iO")
if(!!J.V(a).$ic1){u=a.style
u.border="solid 2px white"}},
$S:52}
B.kL.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.su(0,new V.y(0.1,0.1,0.1))
t=u.x
t.su(0,new V.y(0.2,0.2,0.2))
u.cy.su(0,new V.y(0,0,0))
u.cx.su(0,new V.y(1,1,1))},
$S:0}
B.kM.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.su(0,new V.y(0.11,0.11,0.1))
t=u.x
t.su(0,new V.y(0.21,0.21,0.2))
u.cy.su(0,new V.y(0,0,0))
u=u.cx
u.su(0,new V.y(1,0.9,0.5))},
$S:0}
B.kN.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.su(0,new V.y(0.1,0.1,0.1))
t=u.x
t.su(0,new V.y(0.1,0.1,0.1))
u.cy.saN(0.4)
t=u.cy
t.su(0,new V.y(0.6,0.6,0.6))
u=u.cx
u.su(0,new V.y(0.4,0.4,0.4))},
$S:0}
B.kO.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.su(0,new V.y(0.1,0.1,0.1))
t=u.x
t.su(0,new V.y(0.1,0.1,0.1))
u.cy.saN(0.4)
t=u.cy
t.su(0,new V.y(0.2,0.3,1))
u=u.cx
u.su(0,new V.y(0.3,0.3,0.3))},
$S:0}
B.kP.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.su(0,new V.y(0.1,0.1,0.1))
t=u.x
t.su(0,new V.y(0.1,0.1,0.1))
u.cy.saN(0.6)
t=u.cy
t.su(0,new V.y(0.8,0.8,0.8))
u=u.cx
u.su(0,new V.y(0.2,0.2,0.2))},
$S:0}
B.kQ.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.su(0,new V.y(0.1,0.1,0.1))
t=u.x
t.su(0,new V.y(0.1,0.1,0.1))
u.cy.saN(0.6)
u.cy.su(0,new V.y(1,1,1))
u.cx.su(0,new V.y(0,0,0))},
$S:0}
B.kR.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.su(0,new V.y(0.1,0.1,0.1))
t=u.x
t.su(0,new V.y(0.1,0.1,0.1))
u.cy.saN(0.9)
t=u.cy
t.su(0,new V.y(1,0.8,0.8))
u.cx.su(0,new V.y(0,0,0))},
$S:0}
B.kS.prototype={
$0:function(){var u,t
u=this.a
u.r.su(0,new V.y(0,0,0))
t=u.x
t.su(0,new V.y(0.1,0.1,0.1))
u.cy.saN(0.99)
t=u.cy
t.su(0,new V.y(0.95,0.95,0.95))
u.cx.su(0,new V.y(0,0,0))},
$S:0}
B.kT.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.su(0,new V.y(0.3,0.3,0.3))
t=u.x
t.su(0,new V.y(0.5,0.5,0.5))
u.cy.su(0,new V.y(0,0,0))
u=u.cx
u.su(0,new V.y(0.3,0.3,0.3))},
$S:0}
B.kU.prototype={
$1:function(a){var u,t,s
u=this.a.Q
t=this.b.f.ks(a)
s=u.c
if(s!==C.e){if(s===C.d)u.aK()
u.c=C.e
u.e4(null)
s=u.a
s.a=null
s.S(null)}u.e3(t)},
$S:16}
B.kV.prototype={
$1:function(a){var u,t,s,r
H.e(a,"$iz")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.ea("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.ea("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:8};(function aliases(){var u=J.a.prototype
u.fD=u.i
u=J.dS.prototype
u.fF=u.i
u=P.i.prototype
u.fE=u.c5
u=W.O.prototype
u.cb=u.ao
u=W.f6.prototype
u.fI=u.aA
u=O.cC.prototype
u.dn=u.aJ
u.fH=u.aK
u=O.b7.prototype
u.dq=u.aJ
u.bx=u.aK
u=V.dZ.prototype
u.fG=u.aQ
u.dm=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"oO","oh",11)
u(P,"oP","oi",11)
u(P,"oQ","oj",11)
t(P,"mK","oN",3)
s(W,"p_",4,null,["$4"],["ol"],28,0)
s(W,"p0",4,null,["$4"],["om"],28,0)
var m
r(m=E.ao.prototype,"gf1",0,0,null,["$1","$0"],["f2","kC"],1,0)
r(m,"gf_",0,0,null,["$1","$0"],["f0","kz"],1,0)
q(m,"gkx","ky",7)
q(m,"gkA","kB",7)
r(m=E.eq.prototype,"gdt",0,0,null,["$1","$0"],["dv","du"],1,0)
p(m,"gkP","f7",3)
o(m=X.ex.prototype,"gi1","i2",12)
o(m,"ghQ","hR",12)
o(m,"ghW","hX",4)
o(m,"gi5","i6",23)
o(m,"gi3","i4",23)
o(m,"gi9","ia",4)
o(m,"gie","ig",4)
o(m,"gi_","i0",4)
o(m,"gib","ic",4)
o(m,"ghY","hZ",4)
o(m,"gih","ii",37)
o(m,"gij","ik",12)
o(m,"giA","iB",13)
o(m,"giw","ix",13)
o(m,"giy","iz",13)
r(D.bA.prototype,"gfS",0,0,null,["$1","$0"],["aG","fT"],1,0)
r(m=D.dV.prototype,"gdU",0,0,null,["$1","$0"],["dV","i7"],1,0)
o(m,"gil","im",39)
q(m,"ghK","hL",19)
q(m,"giq","ir",19)
n(V.Y.prototype,"gl","d0",24)
n(V.U.prototype,"gl","d0",24)
r(m=U.cz.prototype,"gaX",0,0,null,["$1","$0"],["V","ac"],1,0)
q(m,"ghI","hJ",27)
q(m,"gio","ip",27)
r(m=U.ey.prototype,"gaX",0,0,null,["$1","$0"],["V","ac"],1,0)
o(m,"gcn","co",2)
o(m,"gcp","cq",2)
o(m,"gcr","cs",2)
r(m=U.ez.prototype,"gaX",0,0,null,["$1","$0"],["V","ac"],1,0)
o(m,"gcn","co",2)
o(m,"gcp","cq",2)
o(m,"gcr","cs",2)
o(m,"ghB","hC",2)
o(m,"ghD","hE",2)
o(m,"gj7","j8",2)
o(m,"gj5","j6",2)
o(m,"gj3","j4",2)
o(U.eA.prototype,"ghG","hH",2)
r(m=M.dB.prototype,"ga2",0,0,null,["$1","$0"],["a3","b9"],1,0)
q(m,"gis","it",25)
q(m,"giu","iv",25)
r(M.dD.prototype,"ga2",0,0,null,["$1","$0"],["a3","b9"],1,0)
r(m=M.dI.prototype,"ga2",0,0,null,["$1","$0"],["a3","b9"],1,0)
q(m,"ghS","hT",7)
q(m,"ghU","hV",7)
r(m=O.e_.prototype,"gb_",0,0,null,["$1","$0"],["S","bd"],1,0)
r(m,"giM",0,0,null,["$1","$0"],["e0","iN"],1,0)
q(m,"ghM","hN",15)
q(m,"ghO","hP",15)
r(O.cC.prototype,"gb_",0,0,null,["$1","$0"],["S","bd"],1,0)
r(O.ee.prototype,"gb_",0,0,null,["$1","$0"],["S","bd"],1,0)
r(X.e7.prototype,"gh2",0,0,null,["$1","$0"],["ay","h3"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.W,null)
s(P.W,[H.ld,J.a,J.at,P.eU,P.i,H.cB,P.b3,H.c_,H.d4,H.fU,H.ie,H.j0,P.bC,H.cr,H.fb,P.ag,H.hx,H.hz,H.ht,P.fi,P.bh,P.aJ,P.eE,P.iD,P.cQ,P.iE,P.bc,P.am,P.ks,P.k6,P.ca,P.eT,P.x,P.kj,P.hF,P.bX,P.ho,P.kq,P.ko,P.R,P.an,P.a4,P.bB,P.i4,P.eh,P.eM,P.hj,P.bD,P.b,P.F,P.K,P.aw,P.f,P.aj,P.cb,P.jf,P.k9,W.fX,W.bN,W.E,W.e5,W.f6,W.ke,W.dJ,W.aA,W.k5,W.fq,P.kb,P.fn,P.k0,P.S,O.a3,O.cD,E.fO,E.ao,E.ig,E.eq,Z.eC,Z.eD,Z.cq,Z.bE,Z.bf,D.fR,D.bZ,D.z,X.dA,X.dT,X.hv,X.hC,X.az,X.hU,X.iX,X.ex,D.bA,D.a8,D.e8,D.eg,D.en,D.eo,D.ep,V.y,V.aN,V.ha,V.e1,V.au,V.ab,V.ap,V.bp,V.eb,V.Y,V.U,U.ey,U.ez,U.eA,M.dD,M.dI,M.aB,A.dx,A.fH,A.hL,A.cX,A.d0,A.cZ,A.d1,A.d_,A.d2,A.bY,A.et,A.j9,F.aa,F.bm,F.bJ,F.ed,F.iq,F.ir,F.is,F.aC,F.jr,F.js,F.jv,F.jw,O.bL,O.cC,T.iQ,V.bj,V.ay,V.dZ,V.id,V.ip,V.cO,V.er,V.cV,V.iV,X.bU,X.cR,X.hp,X.e7,V.by,V.ia,V.it,V.iM])
s(J.a,[J.hs,J.dQ,J.dS,J.b4,J.dR,J.c2,H.cG,H.bI,W.j,W.fF,W.bT,W.bW,W.b1,W.b2,W.X,W.eG,W.h1,W.h2,W.dF,W.eI,W.dH,W.eK,W.h4,W.p,W.eN,W.aO,W.dM,W.eP,W.bl,W.dX,W.hO,W.eV,W.eW,W.aQ,W.eX,W.f_,W.aR,W.f3,W.ea,W.f5,W.aT,W.f7,W.aU,W.fc,W.aG,W.fg,W.iU,W.aW,W.fj,W.iZ,W.jl,W.fr,W.ft,W.fv,W.fx,W.fz,P.b6,P.eR,P.ba,P.f1,P.i9,P.fd,P.bd,P.fl,P.fI,P.eF,P.dy,P.dK,P.e9,P.c9,P.ec,P.el,P.eu,P.f9])
s(J.dS,[J.i5,J.d3,J.bH])
t(J.lc,J.b4)
s(J.dR,[J.dP,J.dO])
t(P.hB,P.eU)
s(P.hB,[H.ev,W.jH,W.ar,P.hf])
t(H.u,H.ev)
s(P.i,[H.h7,H.hG,H.d5])
s(H.h7,[H.c3,H.hy])
s(P.b3,[H.hH,H.jB])
t(H.hI,H.c3)
t(H.fV,H.fU)
s(P.bC,[H.i1,H.hu,H.jd,H.j2,H.fQ,H.im,P.e6,P.aM,P.je,P.jb,P.cP,P.fT,P.h_])
s(H.cr,[H.kZ,H.iJ,H.kG,H.kH,H.kI,P.jD,P.jC,P.jE,P.jF,P.ki,P.kh,P.jO,P.jS,P.jP,P.jQ,P.jR,P.jV,P.jW,P.jU,P.jT,P.iF,P.iG,P.kA,P.k3,P.k2,P.k4,P.hA,P.hE,P.kp,P.h5,P.h6,P.jk,P.jg,P.ji,P.jj,P.kk,P.kl,P.kn,P.km,P.kw,P.kv,P.kx,P.ky,W.h8,W.hQ,W.hS,W.il,W.iC,W.jN,W.i0,W.i_,W.k7,W.k8,W.kg,W.kr,P.kc,P.kC,P.hg,P.hh,P.fK,E.ih,E.ii,E.ij,E.iT,D.hc,D.hd,F.kt,F.jy,F.jx,F.jt,F.ju,T.iS,T.iR,V.kY,V.ib,V.iv,V.iu,V.iw,V.iO,V.iN,B.kL,B.kM,B.kN,B.kO,B.kP,B.kQ,B.kR,B.kS,B.kT,B.kU,B.kV])
s(H.iJ,[H.iA,H.co])
t(P.hD,P.ag)
s(P.hD,[H.aP,W.jG])
t(H.e2,H.bI)
s(H.e2,[H.d9,H.db])
t(H.da,H.d9)
t(H.cH,H.da)
t(H.dc,H.db)
t(H.e3,H.dc)
s(H.e3,[H.hV,H.hW,H.hX,H.hY,H.hZ,H.e4,H.cI])
t(P.k1,P.ks)
t(P.k_,P.k6)
t(P.fo,P.hF)
t(P.ew,P.fo)
s(P.bX,[P.fM,P.h9])
t(P.bz,P.iE)
s(P.bz,[P.fN,P.hn,P.jo,P.jn])
t(P.jm,P.h9)
s(P.a4,[P.C,P.o])
s(P.aM,[P.c8,P.hq])
t(P.jJ,P.cb)
s(W.j,[W.G,W.he,W.aS,W.dd,W.aV,W.aH,W.df,W.jA,W.d6,P.fL,P.bS])
s(W.G,[W.O,W.bx,W.cu,W.d7])
s(W.O,[W.A,P.q])
s(W.A,[W.dv,W.fG,W.cn,W.bw,W.bV,W.aE,W.hi,W.dL,W.c1,W.cA,W.dU,W.cE,W.io,W.bb,W.ej,W.ek,W.iI,W.cS])
s(W.b1,[W.cs,W.fY,W.fZ])
t(W.fW,W.b2)
t(W.ct,W.eG)
t(W.eJ,W.eI)
t(W.dG,W.eJ)
t(W.eL,W.eK)
t(W.h3,W.eL)
t(W.aF,W.bT)
t(W.eO,W.eN)
t(W.cx,W.eO)
t(W.eQ,W.eP)
t(W.c0,W.eQ)
t(W.dN,W.cu)
t(W.bM,W.p)
s(W.bM,[W.b5,W.a6,W.aX])
t(W.hP,W.eV)
t(W.hR,W.eW)
t(W.eY,W.eX)
t(W.hT,W.eY)
t(W.f0,W.f_)
t(W.cJ,W.f0)
t(W.f4,W.f3)
t(W.i7,W.f4)
t(W.ik,W.f5)
t(W.de,W.dd)
t(W.ix,W.de)
t(W.f8,W.f7)
t(W.iy,W.f8)
t(W.iB,W.fc)
t(W.fh,W.fg)
t(W.iK,W.fh)
t(W.dg,W.df)
t(W.iL,W.dg)
t(W.fk,W.fj)
t(W.iY,W.fk)
t(W.jz,W.cE)
t(W.bg,W.a6)
t(W.fs,W.fr)
t(W.jI,W.fs)
t(W.eH,W.dH)
t(W.fu,W.ft)
t(W.jX,W.fu)
t(W.fw,W.fv)
t(W.eZ,W.fw)
t(W.fy,W.fx)
t(W.ka,W.fy)
t(W.fA,W.fz)
t(W.kd,W.fA)
t(W.jK,W.jG)
t(W.jL,P.iD)
t(W.ln,W.jL)
t(W.jM,P.cQ)
t(W.kf,W.f6)
t(P.ff,P.kb)
t(P.ac,P.k0)
t(P.eS,P.eR)
t(P.hw,P.eS)
t(P.f2,P.f1)
t(P.i2,P.f2)
t(P.cM,P.q)
t(P.fe,P.fd)
t(P.iH,P.fe)
t(P.fm,P.fl)
t(P.j_,P.fm)
t(P.fJ,P.eF)
t(P.i3,P.bS)
t(P.fa,P.f9)
t(P.iz,P.fa)
s(E.fO,[Z.dz,A.cN,T.cT])
s(D.z,[D.bF,D.bG,D.M,X.i8])
s(X.i8,[X.dY,X.bn,X.cF,X.es])
s(O.a3,[D.dV,U.cz,M.dB])
s(D.fR,[U.fS,U.ah])
t(U.dC,U.ah)
s(A.cN,[A.e0,A.ef])
s(A.et,[A.Q,A.j5,A.j6,A.j8,A.j3,A.a1,A.j4,A.N,A.j7,A.ja,A.cY,A.ax,A.aq,A.ak])
s(O.bL,[O.e_,O.ee])
s(O.cC,[O.hJ,O.hK,O.b7])
s(O.b7,[O.hM,O.hN])
s(T.cT,[T.em,T.cU])
t(T.iP,T.em)
s(V.dZ,[V.av,V.cW])
t(X.hk,X.cR)
s(V.by,[V.h0,V.hl,V.hm,V.i6])
u(H.ev,H.d4)
u(H.d9,P.x)
u(H.da,H.c_)
u(H.db,P.x)
u(H.dc,H.c_)
u(P.eU,P.x)
u(P.fo,P.kj)
u(W.eG,W.fX)
u(W.eI,P.x)
u(W.eJ,W.E)
u(W.eK,P.x)
u(W.eL,W.E)
u(W.eN,P.x)
u(W.eO,W.E)
u(W.eP,P.x)
u(W.eQ,W.E)
u(W.eV,P.ag)
u(W.eW,P.ag)
u(W.eX,P.x)
u(W.eY,W.E)
u(W.f_,P.x)
u(W.f0,W.E)
u(W.f3,P.x)
u(W.f4,W.E)
u(W.f5,P.ag)
u(W.dd,P.x)
u(W.de,W.E)
u(W.f7,P.x)
u(W.f8,W.E)
u(W.fc,P.ag)
u(W.fg,P.x)
u(W.fh,W.E)
u(W.df,P.x)
u(W.dg,W.E)
u(W.fj,P.x)
u(W.fk,W.E)
u(W.fr,P.x)
u(W.fs,W.E)
u(W.ft,P.x)
u(W.fu,W.E)
u(W.fv,P.x)
u(W.fw,W.E)
u(W.fx,P.x)
u(W.fy,W.E)
u(W.fz,P.x)
u(W.fA,W.E)
u(P.eR,P.x)
u(P.eS,W.E)
u(P.f1,P.x)
u(P.f2,W.E)
u(P.fd,P.x)
u(P.fe,W.E)
u(P.fl,P.x)
u(P.fm,W.E)
u(P.eF,P.ag)
u(P.f9,P.x)
u(P.fa,W.E)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.bw.prototype
C.q=W.bV.prototype
C.D=W.bW.prototype
C.k=W.aE.prototype
C.V=W.dF.prototype
C.X=W.dL.prototype
C.E=W.dM.prototype
C.r=W.dN.prototype
C.Z=J.a.prototype
C.a=J.b4.prototype
C.a_=J.dO.prototype
C.f=J.dP.prototype
C.t=J.dQ.prototype
C.j=J.dR.prototype
C.c=J.c2.prototype
C.a6=J.bH.prototype
C.H=W.dU.prototype
C.ac=W.cJ.prototype
C.N=J.i5.prototype
C.O=W.ea.prototype
C.b=P.c9.prototype
C.y=W.bb.prototype
C.o=W.ej.prototype
C.n=W.ek.prototype
C.C=J.d3.prototype
C.P=W.bg.prototype
C.Q=W.d6.prototype
C.S=new P.fN(!1)
C.R=new P.fM(C.S)
C.T=new P.i4()
C.U=new P.jo()
C.l=new P.k1()
C.d=new A.bY(0,"ColorSourceType.None")
C.i=new A.bY(1,"ColorSourceType.Solid")
C.e=new A.bY(2,"ColorSourceType.Texture2D")
C.h=new A.bY(3,"ColorSourceType.TextureCube")
C.z=new P.bB(0)
C.W=new P.bB(5e6)
C.Y=new P.ho("element",!0,!1,!1,!1)
C.a0=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.a1=function(hooks) {
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
C.F=function(hooks) { return hooks; }

C.a2=function(getTagFallback) {
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
C.a3=function() {
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
C.a4=function(hooks) {
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
C.a5=function(hooks) {
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
C.G=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.I=H.d(u([127,2047,65535,1114111]),[P.o])
C.u=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.o])
C.a7=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.v=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.o])
C.w=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.o])
C.a8=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.J=H.d(u([]),[P.f])
C.a9=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.o])
C.K=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.o])
C.x=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.o])
C.L=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.o])
C.aa=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.o])
C.M=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.o])
C.A=H.d(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.B=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.ab=new H.fV(0,{},C.J,[P.f,P.f])
C.m=new P.jm(!1)})();(function staticFields(){$.b_=0
$.cp=null
$.lN=null
$.lr=!1
$.mN=null
$.mI=null
$.mT=null
$.kD=null
$.kJ=null
$.lz=null
$.cd=null
$.dk=null
$.dl=null
$.ls=!1
$.a2=C.l
$.bk=null
$.l7=null
$.lU=null
$.lT=null
$.m0=null
$.m5=null
$.cK=null
$.ma=null
$.ml=null
$.mo=null
$.mn=null
$.jp=null
$.mm=null
$.o3="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.o2="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.m4=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pm","mW",function(){return H.mM("_$dart_dartClosure")})
u($,"pn","lE",function(){return H.mM("_$dart_js")})
u($,"ps","mX",function(){return H.be(H.j1({
toString:function(){return"$receiver$"}}))})
u($,"pt","mY",function(){return H.be(H.j1({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pu","mZ",function(){return H.be(H.j1(null))})
u($,"pv","n_",function(){return H.be(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"py","n2",function(){return H.be(H.j1(void 0))})
u($,"pz","n3",function(){return H.be(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"px","n1",function(){return H.be(H.mh(null))})
u($,"pw","n0",function(){return H.be(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pB","n5",function(){return H.be(H.mh(void 0))})
u($,"pA","n4",function(){return H.be(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pS","lF",function(){return P.og()})
u($,"pY","dt",function(){return[]})
u($,"pE","n6",function(){return P.oc()})
u($,"pT","na",function(){return H.nK(H.cc(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))})
u($,"pW","nc",function(){return P.nZ("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"pX","nd",function(){return P.oF()})
u($,"pU","nb",function(){return P.lY(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"pV","lG",function(){return P.lf(P.f,P.bD)})
u($,"pL","n9",function(){return Z.aI(0)})
u($,"pF","n7",function(){return Z.aI(511)})
u($,"pN","aZ",function(){return Z.aI(1)})
u($,"pM","bt",function(){return Z.aI(2)})
u($,"pH","bs",function(){return Z.aI(4)})
u($,"pO","bu",function(){return Z.aI(8)})
u($,"pP","bv",function(){return Z.aI(16)})
u($,"pI","dr",function(){return Z.aI(32)})
u($,"pJ","ds",function(){return Z.aI(64)})
u($,"pK","n8",function(){return Z.aI(96)})
u($,"pQ","cl",function(){return Z.aI(128)})
u($,"pG","br",function(){return Z.aI(256)})
u($,"pl","mV",function(){return new V.ha(1e-9)})
u($,"pk","T",function(){return $.mV()})})()
var v={mangledGlobalNames:{o:"int",C:"double",a4:"num",f:"String",R:"bool",K:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.K},{func:1,ret:-1,opt:[D.z]},{func:1,ret:-1,args:[D.z]},{func:1,ret:-1},{func:1,ret:-1,args:[W.a6]},{func:1,ret:P.K,args:[,,]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.o,[P.i,E.ao]]},{func:1,ret:P.K,args:[D.z]},{func:1,ret:P.K,args:[F.aa]},{func:1,ret:P.K,args:[W.p]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.p]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:-1,args:[P.o,[P.i,V.au]]},{func:1,ret:P.K,args:[P.f]},{func:1,ret:P.f,args:[P.f]},{func:1,args:[,]},{func:1,ret:-1,args:[P.o,[P.i,D.a8]]},{func:1,ret:P.R,args:[W.G]},{func:1,ret:P.R,args:[W.aA]},{func:1,ret:P.R,args:[P.f]},{func:1,ret:-1,args:[W.b5]},{func:1,ret:P.C},{func:1,ret:-1,args:[P.o,[P.i,M.aB]]},{func:1,ret:P.f,args:[P.o]},{func:1,ret:-1,args:[P.o,[P.i,U.ah]]},{func:1,ret:P.R,args:[W.O,P.f,P.f,W.bN]},{func:1,ret:P.K,args:[,]},{func:1,ret:P.K,args:[{func:1,ret:-1,args:[D.z]}]},{func:1,ret:P.K,args:[,],opt:[P.aw]},{func:1,ret:P.K,args:[P.a4]},{func:1,args:[P.f]},{func:1,ret:[P.aJ,,],args:[,]},{func:1,args:[,P.f]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:-1,args:[W.bg]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:P.R,args:[[P.i,D.a8]]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,args:[W.p]},{func:1,ret:P.K,args:[{func:1,ret:-1}]},{func:1,ret:P.S,args:[P.o]},{func:1,ret:P.K,args:[P.f,,]},{func:1,ret:P.K,args:[F.aC,P.C,P.C]},{func:1,ret:[P.F,P.f,P.f],args:[[P.F,P.f,P.f],P.f]},{func:1,ret:W.O,args:[W.G]},{func:1,ret:-1,args:[P.f,P.o]},{func:1,ret:P.K,args:[P.bc]},{func:1,ret:P.R,args:[V.by]},{func:1,ret:P.K,args:[W.a6]},{func:1,ret:P.K,args:[W.O]},{func:1,ret:P.S,args:[,,]},{func:1,ret:-1,args:[W.G,W.G]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cG,DataView:H.bI,ArrayBufferView:H.bI,Float32Array:H.cH,Float64Array:H.cH,Int16Array:H.hV,Int32Array:H.hW,Int8Array:H.hX,Uint16Array:H.hY,Uint32Array:H.hZ,Uint8ClampedArray:H.e4,CanvasPixelArray:H.e4,Uint8Array:H.cI,HTMLBRElement:W.A,HTMLButtonElement:W.A,HTMLContentElement:W.A,HTMLDListElement:W.A,HTMLDataElement:W.A,HTMLDataListElement:W.A,HTMLDetailsElement:W.A,HTMLDialogElement:W.A,HTMLEmbedElement:W.A,HTMLFieldSetElement:W.A,HTMLHRElement:W.A,HTMLHeadingElement:W.A,HTMLHtmlElement:W.A,HTMLIFrameElement:W.A,HTMLLIElement:W.A,HTMLLegendElement:W.A,HTMLLinkElement:W.A,HTMLMapElement:W.A,HTMLMenuElement:W.A,HTMLMetaElement:W.A,HTMLMeterElement:W.A,HTMLModElement:W.A,HTMLOListElement:W.A,HTMLObjectElement:W.A,HTMLOptGroupElement:W.A,HTMLOptionElement:W.A,HTMLOutputElement:W.A,HTMLParagraphElement:W.A,HTMLParamElement:W.A,HTMLPictureElement:W.A,HTMLPreElement:W.A,HTMLProgressElement:W.A,HTMLQuoteElement:W.A,HTMLScriptElement:W.A,HTMLShadowElement:W.A,HTMLSlotElement:W.A,HTMLSourceElement:W.A,HTMLSpanElement:W.A,HTMLStyleElement:W.A,HTMLTableCaptionElement:W.A,HTMLTableColElement:W.A,HTMLTextAreaElement:W.A,HTMLTimeElement:W.A,HTMLTitleElement:W.A,HTMLTrackElement:W.A,HTMLUListElement:W.A,HTMLUnknownElement:W.A,HTMLDirectoryElement:W.A,HTMLFontElement:W.A,HTMLFrameElement:W.A,HTMLFrameSetElement:W.A,HTMLMarqueeElement:W.A,HTMLElement:W.A,AccessibleNodeList:W.fF,HTMLAnchorElement:W.dv,HTMLAreaElement:W.fG,HTMLBaseElement:W.cn,Blob:W.bT,HTMLBodyElement:W.bw,HTMLCanvasElement:W.bV,CanvasRenderingContext2D:W.bW,CDATASection:W.bx,CharacterData:W.bx,Comment:W.bx,ProcessingInstruction:W.bx,Text:W.bx,CSSNumericValue:W.cs,CSSUnitValue:W.cs,CSSPerspective:W.fW,CSSCharsetRule:W.X,CSSConditionRule:W.X,CSSFontFaceRule:W.X,CSSGroupingRule:W.X,CSSImportRule:W.X,CSSKeyframeRule:W.X,MozCSSKeyframeRule:W.X,WebKitCSSKeyframeRule:W.X,CSSKeyframesRule:W.X,MozCSSKeyframesRule:W.X,WebKitCSSKeyframesRule:W.X,CSSMediaRule:W.X,CSSNamespaceRule:W.X,CSSPageRule:W.X,CSSRule:W.X,CSSStyleRule:W.X,CSSSupportsRule:W.X,CSSViewportRule:W.X,CSSStyleDeclaration:W.ct,MSStyleCSSProperties:W.ct,CSS2Properties:W.ct,CSSImageValue:W.b1,CSSKeywordValue:W.b1,CSSPositionValue:W.b1,CSSResourceValue:W.b1,CSSURLImageValue:W.b1,CSSStyleValue:W.b1,CSSMatrixComponent:W.b2,CSSRotation:W.b2,CSSScale:W.b2,CSSSkew:W.b2,CSSTranslation:W.b2,CSSTransformComponent:W.b2,CSSTransformValue:W.fY,CSSUnparsedValue:W.fZ,DataTransferItemList:W.h1,HTMLDivElement:W.aE,XMLDocument:W.cu,Document:W.cu,DOMException:W.h2,DOMImplementation:W.dF,ClientRectList:W.dG,DOMRectList:W.dG,DOMRectReadOnly:W.dH,DOMStringList:W.h3,DOMTokenList:W.h4,Element:W.O,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,ProgressEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,ResourceProgressEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aF,FileList:W.cx,FileWriter:W.he,HTMLFormElement:W.hi,Gamepad:W.aO,HTMLHeadElement:W.dL,History:W.dM,HTMLCollection:W.c0,HTMLFormControlsCollection:W.c0,HTMLOptionsCollection:W.c0,HTMLDocument:W.dN,ImageData:W.bl,HTMLImageElement:W.c1,HTMLInputElement:W.cA,KeyboardEvent:W.b5,HTMLLabelElement:W.dU,Location:W.dX,HTMLAudioElement:W.cE,HTMLMediaElement:W.cE,MediaList:W.hO,MIDIInputMap:W.hP,MIDIOutputMap:W.hR,MimeType:W.aQ,MimeTypeArray:W.hT,PointerEvent:W.a6,MouseEvent:W.a6,DragEvent:W.a6,DocumentFragment:W.G,ShadowRoot:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cJ,RadioNodeList:W.cJ,Plugin:W.aR,PluginArray:W.i7,Range:W.ea,RTCStatsReport:W.ik,HTMLSelectElement:W.io,SourceBuffer:W.aS,SourceBufferList:W.ix,SpeechGrammar:W.aT,SpeechGrammarList:W.iy,SpeechRecognitionResult:W.aU,Storage:W.iB,CSSStyleSheet:W.aG,StyleSheet:W.aG,HTMLTableCellElement:W.bb,HTMLTableDataCellElement:W.bb,HTMLTableHeaderCellElement:W.bb,HTMLTableElement:W.ej,HTMLTableRowElement:W.ek,HTMLTableSectionElement:W.iI,HTMLTemplateElement:W.cS,TextTrack:W.aV,TextTrackCue:W.aH,VTTCue:W.aH,TextTrackCueList:W.iK,TextTrackList:W.iL,TimeRanges:W.iU,Touch:W.aW,TouchEvent:W.aX,TouchList:W.iY,TrackDefaultList:W.iZ,CompositionEvent:W.bM,FocusEvent:W.bM,TextEvent:W.bM,UIEvent:W.bM,URL:W.jl,HTMLVideoElement:W.jz,VideoTrackList:W.jA,WheelEvent:W.bg,Window:W.d6,DOMWindow:W.d6,Attr:W.d7,CSSRuleList:W.jI,ClientRect:W.eH,DOMRect:W.eH,GamepadList:W.jX,NamedNodeMap:W.eZ,MozNamedAttrMap:W.eZ,SpeechRecognitionResultList:W.ka,StyleSheetList:W.kd,SVGLength:P.b6,SVGLengthList:P.hw,SVGNumber:P.ba,SVGNumberList:P.i2,SVGPointList:P.i9,SVGScriptElement:P.cM,SVGStringList:P.iH,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.bd,SVGTransformList:P.j_,AudioBuffer:P.fI,AudioParamMap:P.fJ,AudioTrackList:P.fL,AudioContext:P.bS,webkitAudioContext:P.bS,BaseAudioContext:P.bS,OfflineAudioContext:P.i3,WebGLBuffer:P.dy,WebGLFramebuffer:P.dK,WebGLProgram:P.e9,WebGL2RenderingContext:P.c9,WebGLShader:P.ec,WebGLTexture:P.el,WebGLUniformLocation:P.eu,SQLResultSetRowList:P.iz})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e2.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
H.da.$nativeSuperclassTag="ArrayBufferView"
H.cH.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
H.e3.$nativeSuperclassTag="ArrayBufferView"
W.dd.$nativeSuperclassTag="EventTarget"
W.de.$nativeSuperclassTag="EventTarget"
W.df.$nativeSuperclassTag="EventTarget"
W.dg.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.mQ,[])
else B.mQ([])})})()
//# sourceMappingURL=test.dart.js.map
