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
a[c]=function(){a[c]=function(){H.pp(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lo"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lo"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lo(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={l2:function l2(){},
kx:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
hb:function(){return new P.c9("No element")},
nF:function(){return new P.c9("Too many elements")},
nE:function(){return new P.c9("Too few elements")},
v:function v(a){this.a=a},
fS:function fS(){},
c3:function c3(){},
cC:function cC(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hr:function hr(a,b,c){this.a=a
this.b=b
this.$ti=c},
hs:function hs(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ht:function ht(a,b,c){this.a=a
this.b=b
this.$ti=c},
d1:function d1(a,b,c){this.a=a
this.b=b
this.$ti=c},
jo:function jo(a,b,c){this.a=a
this.b=b
this.$ti=c},
c_:function c_(){},
d_:function d_(){},
eh:function eh(){},
nv:function(){throw H.c(P.J("Cannot modify unmodifiable Map"))},
cm:function(a){var u,t=H.I(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
p5:function(a){return v.types[H.ai(a)]},
pc:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iL},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.at(a)
if(typeof u!=="string")throw H.c(H.aC(a))
return u},
cJ:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nZ:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.f(p,3)
u=H.I(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.af(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.F(s,q)|32)>t)return}return parseInt(a,b)},
c5:function(a){return H.nQ(a)+H.lk(H.bT(a),0,null)},
nQ:function(a){var u,t,s,r,q,p,o,n=J.U(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.V||!!n.$ibP){r=C.y(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cm(t.length>1&&C.b.F(t,0)===36?C.b.ap(t,1):t)},
nR:function(){if(!!self.location)return self.location.href
return},
m0:function(a){var u,t,s,r,q
H.kD(a)
u=J.aD(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
o_:function(a){var u,t,s,r=H.d([],[P.p])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.D)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aC(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.f.aQ(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.aC(s))}return H.m0(r)},
m1:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aC(s))
if(s<0)throw H.c(H.aC(s))
if(s>65535)return H.o_(a)}return H.m0(a)},
o0:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c6:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aQ(u,10))>>>0,56320|u&1023)}}throw H.c(P.af(a,0,1114111,null,null))},
c4:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nY:function(a){var u=H.c4(a).getFullYear()+0
return u},
nW:function(a){var u=H.c4(a).getMonth()+1
return u},
nS:function(a){var u=H.c4(a).getDate()+0
return u},
nT:function(a){var u=H.c4(a).getHours()+0
return u},
nV:function(a){var u=H.c4(a).getMinutes()+0
return u},
nX:function(a){var u=H.c4(a).getSeconds()+0
return u},
nU:function(a){var u=H.c4(a).getMilliseconds()+0
return u},
G:function(a){throw H.c(H.aC(a))},
f:function(a,b){if(a==null)J.aD(a)
throw H.c(H.cg(a,b))},
cg:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aL(!0,b,s,null)
u=H.ai(J.aD(a))
if(!(b<0)){if(typeof u!=="number")return H.G(u)
t=b>=u}else t=!0
if(t)return P.a_(b,a,s,null,u)
return P.e0(b,s)},
oY:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c7(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c7(a,c,!0,b,"end",u)
return new P.aL(!0,b,"end",null)},
aC:function(a){return new P.aL(!0,a,null,null)},
oT:function(a){if(typeof a!=="number")throw H.c(H.aC(a))
return a},
c:function(a){var u
if(a==null)a=new P.dX()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mU})
u.name=""}else u.toString=H.mU
return u},
mU:function(){return J.at(this.dartException)},
u:function(a){throw H.c(a)},
D:function(a){throw H.c(P.bh(a))},
bb:function(a){var u,t,s,r,q,p
a=H.mT(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iK(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iL:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ma:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lW:function(a,b){return new H.hP(a,b==null?null:b.method)},
l3:function(a,b){var u=b==null,t=u?null:b.method
return new H.he(a,t,u?null:b.receiver)},
aj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kR(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.f.aQ(t,16)&8191)===10)switch(s){case 438:return f.$1(H.l3(H.l(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lW(H.l(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mY()
q=$.mZ()
p=$.n_()
o=$.n0()
n=$.n3()
m=$.n4()
l=$.n2()
$.n1()
k=$.n6()
j=$.n5()
i=r.ae(u)
if(i!=null)return f.$1(H.l3(H.I(u),i))
else{i=q.ae(u)
if(i!=null){i.method="call"
return f.$1(H.l3(H.I(u),i))}else{i=p.ae(u)
if(i==null){i=o.ae(u)
if(i==null){i=n.ae(u)
if(i==null){i=m.ae(u)
if(i==null){i=l.ae(u)
if(i==null){i=o.ae(u)
if(i==null){i=k.ae(u)
if(i==null){i=j.ae(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lW(H.I(u),i))}}return f.$1(new H.iY(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.e5()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aL(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.e5()
return a},
ck:function(a){var u
if(a==null)return new H.eV(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eV(a)},
p1:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
pb:function(a,b,c,d,e,f){H.h(a,"$ibD")
switch(H.ai(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.w("Unsupported number of arguments for wrapped closure"))},
cf:function(a,b){var u
H.ai(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pb)
a.$identity=u
return u},
nu:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.il().constructor.prototype):Object.create(new H.cp(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aZ
if(typeof t!=="number")return t.q()
$.aZ=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.lJ(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.p5,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.lI:H.kU
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lJ(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
nr:function(a,b,c,d){var u=H.kU
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lJ:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nt(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nr(t,!r,u,b)
if(t===0){r=$.aZ
if(typeof r!=="number")return r.q()
$.aZ=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cq
return new Function(r+H.l(q==null?$.cq=H.fz("self"):q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aZ
if(typeof r!=="number")return r.q()
$.aZ=r+1
o+=r
r="return function("+o+"){return this."
q=$.cq
return new Function(r+H.l(q==null?$.cq=H.fz("self"):q)+"."+H.l(u)+"("+o+");}")()},
ns:function(a,b,c,d){var u=H.kU,t=H.lI
switch(b?-1:a){case 0:throw H.c(H.o4("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nt:function(a,b){var u,t,s,r,q,p,o,n=$.cq
if(n==null)n=$.cq=H.fz("self")
u=$.lH
if(u==null)u=$.lH=H.fz("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.ns(s,!q,t,b)
if(s===1){n="return function(){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+");"
u=$.aZ
if(typeof u!=="number")return u.q()
$.aZ=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+", "+o+");"
u=$.aZ
if(typeof u!=="number")return u.q()
$.aZ=u+1
return new Function(n+u+"}")()},
lo:function(a,b,c,d,e,f,g){return H.nu(a,b,H.ai(c),d,!!e,!!f,g)},
kU:function(a){return a.a},
lI:function(a){return a.c},
fz:function(a){var u,t,s,r=new H.cp("self","target","receiver","name"),q=J.l0(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
H:function(a){if(a==null)H.oP("boolean expression must not be null")
return a},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aY(a,"String"))},
oZ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aY(a,"double"))},
ph:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aY(a,"num"))},
ll:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aY(a,"bool"))},
ai:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aY(a,"int"))},
mR:function(a,b){throw H.c(H.aY(a,H.cm(H.I(b).substring(2))))},
pj:function(a,b){throw H.c(H.nq(a,H.cm(H.I(b).substring(2))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.U(a)[b])return a
H.mR(a,b)},
m:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.pj(a,b)},
kD:function(a){if(a==null)return a
if(!!J.U(a).$ib)return a
throw H.c(H.aY(a,"List<dynamic>"))},
mO:function(a,b){var u
if(a==null)return a
u=J.U(a)
if(!!u.$ib)return a
if(u[b])return a
H.mR(a,b)},
mK:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ai(u)]
else return a.$S()}return},
fj:function(a,b){var u
if(typeof a=="function")return!0
u=H.mK(J.U(a))
if(u==null)return!1
return H.mx(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lh)return a
$.lh=!0
try{if(H.fj(a,b))return a
u=H.kM(b)
t=H.aY(a,u)
throw H.c(t)}finally{$.lh=!1}},
lr:function(a,b){if(a!=null&&!H.ln(a,b))H.u(H.aY(a,H.kM(b)))
return a},
aY:function(a,b){return new H.iM("TypeError: "+P.dD(a)+": type '"+H.mD(a)+"' is not a subtype of type '"+b+"'")},
nq:function(a,b){return new H.fA("CastError: "+P.dD(a)+": type '"+H.mD(a)+"' is not a subtype of type '"+b+"'")},
mD:function(a){var u,t=J.U(a)
if(!!t.$ics){u=H.mK(t)
if(u!=null)return H.kM(u)
return"Closure"}return H.c5(a)},
oP:function(a){throw H.c(new H.jp(a))},
pp:function(a){throw H.c(new P.fK(H.I(a)))},
o4:function(a){return new H.i6(a)},
mL:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bT:function(a){if(a==null)return
return a.$ti},
q8:function(a,b,c){return H.cl(a["$a"+H.l(c)],H.bT(b))},
bS:function(a,b,c,d){var u
H.I(c)
H.ai(d)
u=H.cl(a["$a"+H.l(c)],H.bT(b))
return u==null?null:u[d]},
as:function(a,b,c){var u
H.I(b)
H.ai(c)
u=H.cl(a["$a"+H.l(b)],H.bT(a))
return u==null?null:u[c]},
t:function(a,b){var u
H.ai(b)
u=H.bT(a)
return u==null?null:u[b]},
kM:function(a){return H.bR(a,null)},
bR:function(a,b){var u,t
H.k(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cm(a[0].name)+H.lk(a,1,b)
if(typeof a=="function")return H.cm(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ai(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.l(b[t])}if('func' in a)return H.oI(a,b)
if('futureOr' in a)return"FutureOr<"+H.bR("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oI:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.e]
H.k(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.f(a0,n)
p=C.b.q(p,a0[n])
m=u[q]
if(m!=null&&m!==P.R)p+=" extends "+H.bR(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bR(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bR(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bR(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.p0(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.I(b[h])
j=j+i+H.bR(e[d],a0)+(" "+H.l(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
lk:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.ag("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bR(p,c)}return"<"+u.i(0)+">"},
cl:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lm:function(a,b,c,d){var u,t
H.I(b)
H.kD(c)
H.I(d)
if(a==null)return!1
u=H.bT(a)
t=J.U(a)
if(t[b]==null)return!1
return H.mG(H.cl(t[d],u),null,c,null)},
k:function(a,b,c,d){H.I(b)
H.kD(c)
H.I(d)
if(a==null)return a
if(H.lm(a,b,c,d))return a
throw H.c(H.aY(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cm(b.substring(2))+H.lk(c,0,null),v.mangledGlobalNames)))},
mG:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aK(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aK(a[t],b,c[t],d))return!1
return!0},
q6:function(a,b,c){return a.apply(b,H.cl(J.U(b)["$a"+H.l(c)],H.bT(b)))},
mN:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="R"||a.name==="M"||a===-1||a===-2||H.mN(u)}return!1},
ln:function(a,b){var u,t
if(a==null)return b==null||b.name==="R"||b.name==="M"||b===-1||b===-2||H.mN(b)
if(b==null||b===-1||b.name==="R"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.ln(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fj(a,b)}u=J.U(a).constructor
t=H.bT(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aK(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.ln(a,b))throw H.c(H.aY(a,H.kM(b)))
return a},
aK:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="R"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="R"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aK(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="M")return!0
if('func' in c)return H.mx(a,b,c,d)
if('func' in a)return c.name==="bD"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aK("type" in a?a.type:l,b,s,d)
else if(H.aK(a,b,s,d))return!0
else{if(!('$i'+"cy" in t.prototype))return!1
r=t.prototype["$a"+"cy"]
q=H.cl(r,u?a.slice(1):l)
return H.aK(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mG(H.cl(m,u),b,p,d)},
mx:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.pg(h,b,g,d)},
pg:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aK(c[s],d,a[s],b))return!1}return!0},
q7:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
pe:function(a){var u,t,s,r,q=H.I($.mM.$1(a)),p=$.kw[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kB[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.I($.mF.$2(a,q))
if(q!=null){p=$.kw[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kB[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kL(u)
$.kw[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kB[q]=u
return u}if(s==="-"){r=H.kL(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mQ(a,u)
if(s==="*")throw H.c(P.iX(q))
if(v.leafTags[q]===true){r=H.kL(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mQ(a,u)},
mQ:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lt(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kL:function(a){return J.lt(a,!1,null,!!a.$iL)},
pf:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kL(u)
else return J.lt(u,c,null,null)},
p9:function(){if(!0===$.ls)return
$.ls=!0
H.pa()},
pa:function(){var u,t,s,r,q,p,o,n
$.kw=Object.create(null)
$.kB=Object.create(null)
H.p8()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mS.$1(q)
if(p!=null){o=H.pf(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
p8:function(){var u,t,s,r,q,p,o=C.K()
o=H.ce(C.L,H.ce(C.M,H.ce(C.z,H.ce(C.z,H.ce(C.N,H.ce(C.O,H.ce(C.P(C.y),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mM=new H.ky(r)
$.mF=new H.kz(q)
$.mS=new H.kA(p)},
ce:function(a,b){return a(b)||b},
nH:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a7("Illegal RegExp pattern ("+String(r)+")",a,null))},
pn:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
p_:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mT:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lw:function(a,b,c){var u=H.po(a,b,c)
return u},
po:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mT(b),'g'),H.p_(c))},
fE:function fE(){},
fF:function fF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iK:function iK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hP:function hP(a,b){this.a=a
this.b=b},
he:function he(a,b,c){this.a=a
this.b=b
this.c=c},
iY:function iY(a){this.a=a},
kR:function kR(a){this.a=a},
eV:function eV(a){this.a=a
this.b=null},
cs:function cs(){},
iw:function iw(){},
il:function il(){},
cp:function cp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iM:function iM(a){this.a=a},
fA:function fA(a){this.a=a},
i6:function i6(a){this.a=a},
jp:function jp(a){this.a=a},
aP:function aP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hi:function hi(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hj:function hj(a,b){this.a=a
this.$ti=b},
hk:function hk(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ky:function ky(a){this.a=a},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
hd:function hd(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cc:function(a){return a},
nP:function(a){return new Int8Array(a)},
bf:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cg(b,a))},
oG:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oY(a,b,c))
return b},
cF:function cF(){},
bI:function bI(){},
dT:function dT(){},
cG:function cG(){},
dU:function dU(){},
hH:function hH(){},
hI:function hI(){},
hJ:function hJ(){},
hK:function hK(){},
hL:function hL(){},
dV:function dV(){},
cH:function cH(){},
d6:function d6(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
p0:function(a){return J.lO(a?Object.keys(a):[],null)},
pi:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lt:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fl:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.ls==null){H.p9()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.iX("Return interceptor for "+H.l(u(a,q))))}s=a.constructor
r=s==null?null:s[$.ly()]
if(r!=null)return r
r=H.pe(a)
if(r!=null)return r
if(typeof a=="function")return C.X
u=Object.getPrototypeOf(a)
if(u==null)return C.F
if(u===Object.prototype)return C.F
if(typeof s=="function"){Object.defineProperty(s,$.ly(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
nG:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kT(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.af(a,0,4294967295,"length",null))
return J.lO(new Array(a),b)},
lO:function(a,b){return J.l0(H.d(a,[b]))},
l0:function(a){H.kD(a)
a.fixed$length=Array
return a},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dG.prototype
return J.dF.prototype}if(typeof a=="string")return J.bk.prototype
if(a==null)return J.dH.prototype
if(typeof a=="boolean")return J.hc.prototype
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.R)return a
return J.fl(a)},
p2:function(a){if(typeof a=="number")return J.bF.prototype
if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.R)return a
return J.fl(a)},
ci:function(a){if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.R)return a
return J.fl(a)},
fk:function(a){if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.R)return a
return J.fl(a)},
p3:function(a){if(typeof a=="number")return J.bF.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bP.prototype
return a},
p4:function(a){if(typeof a=="number")return J.bF.prototype
if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bP.prototype
return a},
dj:function(a){if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bP.prototype
return a},
cj:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.R)return a
return J.fl(a)},
nf:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.p2(a).q(a,b)},
W:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).u(a,b)},
lA:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.p4(a).E(a,b)},
ng:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.p3(a).t(a,b)},
lB:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pc(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ci(a).j(a,b)},
kS:function(a,b,c){return J.fk(a).n(a,b,c)},
nh:function(a,b){return J.dj(a).F(a,b)},
ni:function(a,b,c){return J.cj(a).hV(a,b,c)},
nj:function(a,b,c,d){return J.cj(a).iQ(a,b,c,d)},
nk:function(a,b){return J.dj(a).Y(a,b)},
fn:function(a,b){return J.fk(a).J(a,b)},
nl:function(a,b,c,d){return J.cj(a).jg(a,b,c,d)},
lC:function(a,b){return J.fk(a).M(a,b)},
nm:function(a){return J.cj(a).giZ(a)},
lD:function(a){return J.cj(a).gcg(a)},
dm:function(a){return J.U(a).gI(a)},
bx:function(a){return J.fk(a).gU(a)},
aD:function(a){return J.ci(a).gl(a)},
lE:function(a){return J.fk(a).jN(a)},
nn:function(a,b){return J.cj(a).jR(a,b)},
no:function(a,b,c){return J.dj(a).C(a,b,c)},
np:function(a){return J.dj(a).k0(a)},
at:function(a){return J.U(a).i(a)},
a:function a(){},
hc:function hc(){},
dH:function dH(){},
dI:function dI(){},
hT:function hT(){},
bP:function bP(){},
bl:function bl(){},
aO:function aO(a){this.$ti=a},
l1:function l1(a){this.$ti=a},
au:function au(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bF:function bF(){},
dG:function dG(){},
dF:function dF(){},
bk:function bk(){}},P={
oi:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oQ()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cf(new P.jr(s),1)).observe(u,{childList:true})
return new P.jq(s,u,t)}else if(self.setImmediate!=null)return P.oR()
return P.oS()},
oj:function(a){self.scheduleImmediate(H.cf(new P.js(H.n(a,{func:1,ret:-1})),0))},
ok:function(a){self.setImmediate(H.cf(new P.jt(H.n(a,{func:1,ret:-1})),0))},
ol:function(a){P.l8(C.t,H.n(a,{func:1,ret:-1}))},
l8:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.a6(a.a,1000)
return P.or(u<0?0:u,b)},
m9:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.b9]})
u=C.f.a6(a.a,1000)
return P.os(u<0?0:u,b)},
or:function(a,b){var u=new P.f0()
u.fh(a,b)
return u},
os:function(a,b){var u=new P.f0()
u.fi(a,b)
return u},
om:function(a,b){var u,t,s
b.a=1
try{a.eD(new P.jD(b),new P.jE(b),null)}catch(s){u=H.aj(s)
t=H.ck(s)
P.pk(new P.jF(b,u,t))}},
mm:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.h(a.c,"$iaJ")
if(u>=4){t=b.c1()
b.a=a.a
b.c=a.c
P.d4(b,t)}else{t=H.h(b.c,"$ibe")
b.a=2
b.c=a
a.dk(t)}},
d4:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.h(g.c,"$iam")
g=g.b
r=s.a
q=s.b
g.toString
P.kn(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.d4(h.a,b)}g=h.a
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
if(m){H.h(o,"$iam")
g=g.b
r=o.a
q=o.b
g.toString
P.kn(i,i,g,r,q)
return}l=$.a1
if(l!=n)$.a1=n
else l=i
g=b.c
if(g===8)new P.jJ(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jI(u,b,o).$0()}else if((g&2)!==0)new P.jH(h,u,b).$0()
if(l!=null)$.a1=l
g=u.b
if(!!J.U(g).$icy){if(g.a>=4){k=H.h(q.c,"$ibe")
q.c=null
b=q.bi(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.mm(g,q)
return}}j=b.b
k=H.h(j.c,"$ibe")
j.c=null
b=j.bi(k)
g=u.a
r=u.b
if(!g){H.A(r,H.t(j,0))
j.a=4
j.c=r}else{H.h(r,"$iam")
j.a=8
j.c=r}h.a=j
g=j}},
oL:function(a,b){if(H.fj(a,{func:1,args:[P.R,P.aw]}))return H.n(a,{func:1,ret:null,args:[P.R,P.aw]})
if(H.fj(a,{func:1,args:[P.R]}))return H.n(a,{func:1,ret:null,args:[P.R]})
throw H.c(P.kT(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oK:function(){var u,t
for(;u=$.cd,u!=null;){$.di=null
t=u.b
$.cd=t
if(t==null)$.dh=null
u.a.$0()}},
oO:function(){$.li=!0
try{P.oK()}finally{$.di=null
$.li=!1
if($.cd!=null)$.lz().$1(P.mH())}},
mC:function(a){var u=new P.en(H.n(a,{func:1,ret:-1}))
if($.cd==null){$.cd=$.dh=u
if(!$.li)$.lz().$1(P.mH())}else $.dh=$.dh.b=u},
oN:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cd
if(u==null){P.mC(a)
$.di=$.dh
return}t=new P.en(a)
s=$.di
if(s==null){t.b=u
$.cd=$.di=t}else{t.b=s.b
$.di=s.b=t
if(t.b==null)$.dh=t}},
pk:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a1
if(C.k===u){P.kp(t,t,C.k,a)
return}u.toString
P.kp(t,t,u,H.n(u.cb(a),s))},
m8:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a1
if(u===C.k){u.toString
return P.l8(a,b)}return P.l8(a,H.n(u.cb(b),t))},
o8:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b9]}
H.n(b,s)
u=$.a1
if(u===C.k){u.toString
return P.m9(a,b)}t=u.dF(b,P.b9)
$.a1.toString
return P.m9(a,H.n(t,s))},
kn:function(a,b,c,d,e){var u={}
u.a=d
P.oN(new P.ko(u,e))},
my:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a1
if(t===c)return d.$0()
$.a1=c
u=t
try{t=d.$0()
return t}finally{$.a1=u}},
mz:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.a1
if(t===c)return d.$1(e)
$.a1=c
u=t
try{t=d.$1(e)
return t}finally{$.a1=u}},
oM:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
t=$.a1
if(t===c)return d.$2(e,f)
$.a1=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a1=u}},
kp:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cb(d):c.j_(d,-1)
P.mC(d)},
jr:function jr(a){this.a=a},
jq:function jq(a,b,c){this.a=a
this.b=b
this.c=c},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
f0:function f0(){this.c=0},
k7:function k7(a,b){this.a=a
this.b=b},
k6:function k6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
be:function be(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aJ:function aJ(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
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
en:function en(a){this.a=a
this.b=null},
ip:function ip(){},
ir:function ir(a,b){this.a=a
this.b=b},
is:function is(a,b){this.a=a
this.b=b},
cN:function cN(){},
iq:function iq(){},
b9:function b9(){},
am:function am(a,b){this.a=a
this.b=b},
kg:function kg(){},
ko:function ko(a,b){this.a=a
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
nJ:function(a,b){return new H.aP([a,b])},
l4:function(a,b){return new H.aP([a,b])},
nL:function(a){return H.p1(a,new H.aP([null,null]))},
dL:function(a){return new P.jO([a])},
le:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oq:function(a,b,c){var u=new P.eC(a,b,[c])
u.c=a.e
return u},
nD:function(a,b,c){var u,t
if(P.lj(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.e])
C.a.h($.ax,a)
try{P.oJ(a,u)}finally{if(0>=$.ax.length)return H.f($.ax,-1)
$.ax.pop()}t=P.m6(b,H.mO(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
l_:function(a,b,c){var u,t
if(P.lj(a))return b+"..."+c
u=new P.ag(b)
C.a.h($.ax,a)
try{t=u
t.a=P.m6(t.a,a,", ")}finally{if(0>=$.ax.length)return H.f($.ax,-1)
$.ax.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lj:function(a){var u,t
for(u=$.ax.length,t=0;t<u;++t)if(a===$.ax[t])return!0
return!1},
oJ:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.e],"$ab")
u=a.gU(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.D())return
r=H.l(u.gK(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.D()){if(s<=5)return
if(0>=b.length)return H.f(b,-1)
q=b.pop()
if(0>=b.length)return H.f(b,-1)
p=b.pop()}else{o=u.gK(u);++s
if(!u.D()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.f(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gK(u);++s
for(;u.D();o=n,n=m){m=u.gK(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.f(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.l(o)
q=H.l(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
nK:function(a,b,c){var u=P.nJ(b,c)
a.M(0,new P.hl(u,b,c))
return u},
lP:function(a,b){var u,t,s=P.dL(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.D)(a),++t)s.h(0,H.A(a[t],b))
return s},
l5:function(a){var u,t={}
if(P.lj(a))return"{...}"
u=new P.ag("")
try{C.a.h($.ax,a)
u.a+="{"
t.a=!0
J.lC(a,new P.hp(t,u))
u.a+="}"}finally{if(0>=$.ax.length)return H.f($.ax,-1)
$.ax.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jO:function jO(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ca:function ca(a){this.a=a
this.c=this.b=null},
eC:function eC(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(){},
z:function z(){},
ho:function ho(){},
hp:function hp(a,b){this.a=a
this.b=b},
ad:function ad(){},
k8:function k8(){},
hq:function hq(){},
ei:function ei(a,b){this.a=a
this.$ti=b},
jV:function jV(){},
eD:function eD(){},
f6:function f6(){},
oc:function(a,b,c,d){H.k(b,"$ib",[P.p],"$ab")
if(b instanceof Uint8Array)return P.od(!1,b,c,d)
return},
od:function(a,b,c,d){var u,t,s=$.n7()
if(s==null)return
u=0===c
if(u&&!0)return P.lb(s,b)
t=b.length
d=P.bp(c,d,t)
if(u&&d===t)return P.lb(s,b)
return P.lb(s,b.subarray(c,d))},
lb:function(a,b){if(P.of(b))return
return P.og(a,b)},
og:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aj(t)}return},
of:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
oe:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aj(t)}return},
mB:function(a,b,c){var u,t,s
H.k(a,"$ib",[P.p],"$ab")
for(u=J.ci(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bH()
if((s&127)!==s)return t-b}return c-b},
lG:function(a,b,c,d,e,f){if(C.f.bb(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
fw:function fw(){},
fx:function fx(){},
bX:function bX(){},
bB:function bB(){},
fU:function fU(){},
h9:function h9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h8:function h8(a){this.a=a},
j5:function j5(){},
j7:function j7(){},
ke:function ke(a){this.b=0
this.c=a},
j6:function j6(a){this.a=a},
kd:function kd(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fm:function(a,b,c){var u
H.n(b,{func:1,ret:P.p,args:[P.e]})
u=H.nZ(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a7(a,null,null))},
nA:function(a){if(a instanceof H.cs)return a.i(0)
return"Instance of '"+H.c5(a)+"'"},
nM:function(a,b,c){var u,t
H.A(b,c)
u=J.nG(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.k(u,"$ib",[c],"$ab")},
lQ:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bx(a);u.D();)C.a.h(s,H.A(u.gK(u),c))
if(b)return s
return H.k(J.l0(s),"$ib",t,"$ab")},
cO:function(a,b,c){var u,t=P.p
H.k(a,"$ii",[t],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$iaO",[t],"$aaO")
u=a.length
c=P.bp(b,c,u)
return H.m1(b>0||c<u?C.a.eQ(a,b,c):a)}if(!!J.U(a).$icH)return H.o0(a,b,P.bp(b,c,a.length))
return P.o6(a,b,c)},
o6:function(a,b,c){var u,t,s,r,q=null
H.k(a,"$ii",[P.p],"$ai")
if(b<0)throw H.c(P.af(b,0,J.aD(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.af(c,b,J.aD(a),q,q))
t=J.bx(a)
for(s=0;s<b;++s)if(!t.D())throw H.c(P.af(b,0,s,q,q))
r=[]
if(u)for(;t.D();)r.push(t.gK(t))
else for(s=b;s<c;++s){if(!t.D())throw H.c(P.af(c,b,s,q,q))
r.push(t.gK(t))}return H.m1(r)},
o2:function(a){return new H.hd(a,H.nH(a,!1,!0,!1))},
m6:function(a,b,c){var u=J.bx(b)
if(!u.D())return a
if(c.length===0){do a+=H.l(u.gK(u))
while(u.D())}else{a+=H.l(u.gK(u))
for(;u.D();)a=a+c+H.l(u.gK(u))}return a},
mc:function(){var u=H.nR()
if(u!=null)return P.ob(u)
throw H.c(P.J("'Uri.base' is not supported"))},
f7:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.k(a,"$ib",[P.p],"$ab")
if(c===C.l){u=$.nd().b
if(typeof b!=="string")H.u(H.aC(b))
u=u.test(b)}else u=!1
if(u)return b
H.A(b,H.as(c,"bX",0))
t=c.gjf().ci(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c6(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nw:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nx:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dy:function(a){if(a>=10)return""+a
return"0"+a},
lL:function(a,b){return new P.b1(1e6*b+1000*a)},
dD:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.at(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nA(a)},
dp:function(a){return new P.aL(!1,null,null,a)},
kT:function(a,b,c){return new P.aL(!0,a,b,c)},
e0:function(a,b){return new P.c7(null,null,!0,a,b,"Value not in range")},
af:function(a,b,c,d,e){return new P.c7(b,c,!0,a,d,"Invalid value")},
bp:function(a,b,c){if(0>a||a>c)throw H.c(P.af(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.af(b,a,c,"end",null))
return b}return c},
l6:function(a,b){if(typeof a!=="number")return a.X()
if(a<0)throw H.c(P.af(a,0,null,b,null))},
a_:function(a,b,c,d,e){var u=H.ai(e==null?J.aD(b):e)
return new P.ha(u,!0,a,c,"Index out of range")},
J:function(a){return new P.iZ(a)},
iX:function(a){return new P.iW(a)},
m5:function(a){return new P.c9(a)},
bh:function(a){return new P.fD(a)},
w:function(a){return new P.ev(a)},
a7:function(a,b,c){return new P.h3(a,b,c)},
nN:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.p]})
u=H.d([],[c])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
lv:function(a){H.pi(a)},
ob:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.F(a,4)^58)*3|C.b.F(a,0)^100|C.b.F(a,1)^97|C.b.F(a,2)^116|C.b.F(a,3)^97)>>>0
if(u===0)return P.mb(e<e?C.b.C(a,0,e):a,5,f).geI()
else if(u===32)return P.mb(C.b.C(a,5,e),0,f).geI()}t=new Array(8)
t.fixed$length=Array
s=H.d(t,[P.p])
C.a.n(s,0,0)
C.a.n(s,1,-1)
C.a.n(s,2,-1)
C.a.n(s,7,-1)
C.a.n(s,3,0)
C.a.n(s,4,0)
C.a.n(s,5,e)
C.a.n(s,6,e)
if(P.mA(a,0,e,0,s)>=14)C.a.n(s,7,e)
r=s[1]
if(typeof r!=="number")return r.kb()
if(r>=0)if(P.mA(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.q()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.X()
if(typeof n!=="number")return H.G(n)
if(m<n)n=m
if(typeof o!=="number")return o.X()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.X()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.X()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.aa(a,"..",o)))j=n>o+2&&C.b.aa(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.aa(a,"file",0)){if(q<=0){if(!C.b.aa(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.C(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aV(a,o,n,"/");++e
n=h}k="file"}else if(C.b.aa(a,"http",0)){if(t&&p+3===o&&C.b.aa(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aV(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.aa(a,"https",0)){if(t&&p+4===o&&C.b.aa(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aV(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.C(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jY(a,r,q,p,o,n,m,k)}return P.ot(a,0,e,r,q,p,o,n,m,k)},
me:function(a){var u=P.e
return C.a.jk(H.d(a.split("&"),[u]),P.l4(u,u),new P.j3(C.l),[P.F,P.e,P.e])},
oa:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.j0(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.Y(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fm(C.b.C(a,s,t),n,n)
if(typeof p!=="number")return p.eN()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.f(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fm(C.b.C(a,s,c),n,n)
if(typeof p!=="number")return p.eN()
if(p>255)k.$2(l,s)
if(r>=u)return H.f(j,r)
j[r]=p
return j},
md:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.j1(a)
t=new P.j2(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.p])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.Y(a,r)
if(n===58){if(r===b){++r
if(C.b.Y(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gax(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.oa(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.f(j,g)
j[g]=0
d=g+1
if(d>=i)return H.f(j,d)
j[d]=0
g+=2}else{d=C.f.aQ(f,8)
if(g<0||g>=i)return H.f(j,g)
j[g]=d
d=g+1
if(d>=i)return H.f(j,d)
j[d]=f&255
g+=2}}return j},
ot:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oA(a,b,d)
else{if(d===b)P.de(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oB(a,u,e-1):""
s=P.ox(a,e,f,!1)
if(typeof f!=="number")return f.q()
r=f+1
if(typeof g!=="number")return H.G(g)
q=r<g?P.oz(P.fm(C.b.C(a,r,g),new P.k9(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oy(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.X()
o=h<i?P.lf(a,h+1,i,n):n
return new P.cb(j,t,s,q,p,o,i<c?P.ow(a,i+1,c):n)},
mq:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
de:function(a,b,c){throw H.c(P.a7(c,a,b))},
oz:function(a,b){if(a!=null&&a===P.mq(b))return
return a},
ox:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.Y(a,b)===91){if(typeof c!=="number")return c.t()
u=c-1
if(C.b.Y(a,u)!==93)P.de(a,b,"Missing end `]` to match `[` in host")
P.md(a,b+1,u)
return C.b.C(a,b,c).toLowerCase()}if(typeof c!=="number")return H.G(c)
t=b
for(;t<c;++t)if(C.b.Y(a,t)===58){P.md(a,b,c)
return"["+a+"]"}return P.oD(a,b,c)},
oD:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.G(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.Y(a,u)
if(q===37){p=P.mw(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ag("")
n=C.b.C(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.C(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.f(C.D,o)
o=(C.D[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ag("")
if(t<u){s.a+=C.b.C(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.f(C.o,o)
o=(C.o[o]&1<<(q&15))!==0}else o=!1
if(o)P.de(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.Y(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ag("")
n=C.b.C(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mr(q)
u+=l
t=u}}}}if(s==null)return C.b.C(a,b,c)
if(t<c){n=C.b.C(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oA:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mt(C.b.F(a,b)))P.de(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.f(C.q,r)
r=(C.q[r]&1<<(s&15))!==0}else r=!1
if(!r)P.de(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.C(a,b,c)
return P.ou(t?a.toLowerCase():a)},
ou:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oB:function(a,b,c){return P.df(a,b,c,C.a_,!1)},
oy:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.df(a,b,c,C.E,!0):C.n.kf(d,new P.ka(),P.e).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a4(u,"/"))u="/"+u
return P.oC(u,e,f)},
oC:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a4(a,"/"))return P.oE(a,!u||c)
return P.oF(a)},
lf:function(a,b,c,d){var u,t={}
H.k(d,"$iF",[P.e,null],"$aF")
if(a!=null){if(d!=null)throw H.c(P.dp("Both query and queryParameters specified"))
return P.df(a,b,c,C.p,!0)}if(d==null)return
u=new P.ag("")
t.a=""
d.M(0,new P.kb(new P.kc(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
ow:function(a,b,c){return P.df(a,b,c,C.p,!0)},
mw:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.Y(a,b+1)
t=C.b.Y(a,p)
s=H.kx(u)
r=H.kx(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.f.aQ(q,4)
if(p>=8)return H.f(C.r,p)
p=(C.r[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c6(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.C(a,b,b+3).toUpperCase()
return},
mr:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.p])
C.a.n(t,0,37)
C.a.n(t,1,C.b.F(o,a>>>4))
C.a.n(t,2,C.b.F(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.p])
for(q=0;--r,r>=0;s=128){p=C.f.i8(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.b.F(o,p>>>4))
C.a.n(t,q+2,C.b.F(o,p&15))
q+=3}}return P.cO(t,0,null)},
df:function(a,b,c,d,e){var u=P.mv(a,b,c,H.k(d,"$ib",[P.p],"$ab"),e)
return u==null?C.b.C(a,b,c):u},
mv:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.k(d,"$ib",[P.p],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.X()
if(typeof c!=="number")return H.G(c)
if(!(t<c))break
c$0:{q=C.b.Y(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.f(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mw(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.f(C.o,p)
p=(C.o[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.de(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.Y(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mr(q)}}if(r==null)r=new P.ag("")
r.a+=C.b.C(a,s,t)
r.a+=H.l(o)
if(typeof n!=="number")return H.G(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.X()
if(s<c)r.a+=C.b.C(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mu:function(a){if(C.b.a4(a,"."))return!0
return C.b.ea(a,"/.")!==-1},
oF:function(a){var u,t,s,r,q,p,o
if(!P.mu(a))return a
u=H.d([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.W(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.f(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oE:function(a,b){var u,t,s,r,q,p
if(!P.mu(a))return!b?P.ms(a):a
u=H.d([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gax(u)!==".."){if(0>=u.length)return H.f(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.f(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gax(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.f(u,0)
C.a.n(u,0,P.ms(u[0]))}return C.a.m(u,"/")},
ms:function(a){var u,t,s,r=a.length
if(r>=2&&P.mt(J.nh(a,0)))for(u=1;u<r;++u){t=C.b.F(a,u)
if(t===58)return C.b.C(a,0,u)+"%3A"+C.b.ap(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.f(C.q,s)
s=(C.q[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
ov:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dp("Invalid URL encoding"))}}return u},
lg:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.F(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.l!==d)s=!1
else s=!0
if(s)return C.b.C(a,b,c)
else r=new H.v(C.b.C(a,b,c))}else{r=H.d([],[P.p])
for(s=a.length,q=b;q<c;++q){t=C.b.F(a,q)
if(t>127)throw H.c(P.dp("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.dp("Truncated URI"))
C.a.h(r,P.ov(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.k(r,"$ib",[P.p],"$ab")
return new P.j6(!1).ci(r)},
mt:function(a){var u=a|32
return 97<=u&&u<=122},
mb:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.p])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.F(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a7(m,a,t))}}if(s<0&&t>b)throw H.c(P.a7(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.F(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gax(l)
if(r!==44||t!==p+7||!C.b.aa(a,"base64",p+1))throw H.c(P.a7("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.J.jw(0,a,o,u)
else{n=P.mv(a,o,u,C.p,!0)
if(n!=null)a=C.b.aV(a,o,u,n)}return new P.j_(a,l,c)},
oH:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nN(22,new P.kk(),P.S),n=new P.kj(o),m=new P.kl(),l=new P.km(),k=H.h(n.$2(0,225),"$iS")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(14,225),"$iS")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(15,225),"$iS")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(1,225),"$iS")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(2,235),"$iS")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(3,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(4,229),"$iS")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(5,229),"$iS")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(6,231),"$iS")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(7,231),"$iS")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.h(n.$2(8,8),"$iS"),"]",5)
k=H.h(n.$2(9,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(16,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(17,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(10,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(18,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(19,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(11,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(12,236),"$iS")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.h(n.$2(13,237),"$iS")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.h(n.$2(20,245),"$iS"),"az",21)
k=H.h(n.$2(21,245),"$iS")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mA:function(a,b,c,d,e){var u,t,s,r,q
H.k(e,"$ib",[P.p],"$ab")
u=$.ne()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.f(u,d)
s=u[d]
r=C.b.F(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.f(s,r)
q=s[r]
d=q&31
C.a.n(e,q>>>5,t)}return d},
T:function T(){},
ay:function ay(a,b){this.a=a
this.b=b},
r:function r(){},
b1:function b1(a){this.a=a},
fQ:function fQ(){},
fR:function fR(){},
bC:function bC(){},
fq:function fq(){},
dX:function dX(){},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c7:function c7(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ha:function ha(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iZ:function iZ(a){this.a=a},
iW:function iW(a){this.a=a},
c9:function c9(a){this.a=a},
fD:function fD(a){this.a=a},
hS:function hS(){},
e5:function e5(){},
fK:function fK(a){this.a=a},
ev:function ev(a){this.a=a},
h3:function h3(a,b,c){this.a=a
this.b=b
this.c=c},
bD:function bD(){},
p:function p(){},
i:function i(){},
b2:function b2(){},
b:function b(){},
F:function F(){},
M:function M(){},
ac:function ac(){},
R:function R(){},
aw:function aw(){},
e:function e(){},
ag:function ag(a){this.a=a},
j3:function j3(a){this.a=a},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
j2:function j2(a,b){this.a=a
this.b=b},
cb:function cb(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
k9:function k9(a,b){this.a=a
this.b=b},
ka:function ka(){},
kc:function kc(a,b){this.a=a
this.b=b},
kb:function kb(a){this.a=a},
j_:function j_(a,b,c){this.a=a
this.b=b
this.c=c},
kk:function kk(){},
kj:function kj(a){this.a=a},
kl:function kl(){},
km:function km(){},
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
jx:function jx(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oW:function(a){var u,t=J.U(a)
if(!!t.$ibj){u=t.gdJ(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.f5(a.data,a.height,a.width)},
oV:function(a){if(a instanceof P.f5)return{data:a.a,height:a.b,width:a.c}
return a},
bq:function(a){var u,t,s,r,q
if(a==null)return
u=P.l4(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r){q=H.I(t[r])
u.n(0,q,a[q])}return u},
oU:function(a){var u={}
a.M(0,new P.kq(u))
return u},
k_:function k_(){},
k1:function k1(a,b){this.a=a
this.b=b},
f5:function f5(a,b,c){this.a=a
this.b=b
this.c=c},
kq:function kq(a){this.a=a},
k0:function k0(a,b){this.a=a
this.b=b},
h_:function h_(a,b){this.a=a
this.b=b},
h0:function h0(){},
h1:function h1(){},
jN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
op:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jP:function jP(){},
al:function al(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b4:function b4(){},
hg:function hg(){},
b6:function b6(){},
hQ:function hQ(){},
hX:function hX(){},
cK:function cK(){},
it:function it(){},
q:function q(){},
ba:function ba(){},
iJ:function iJ(){},
eA:function eA(){},
eB:function eB(){},
eL:function eL(){},
eM:function eM(){},
eX:function eX(){},
eY:function eY(){},
f3:function f3(){},
f4:function f4(){},
S:function S(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(a){this.a=a},
fv:function fv(){},
bU:function bU(){},
hR:function hR(){},
eo:function eo(){},
dr:function dr(){},
e_:function e_(){},
c8:function c8(){},
e2:function e2(){},
e8:function e8(){},
eg:function eg(){},
ik:function ik(){},
eT:function eT(){},
eU:function eU(){}},W={
lF:function(){var u=document.createElement("a")
return u},
kV:function(){var u=document.createElement("canvas")
return u},
ny:function(a,b,c){var u=document.body,t=(u&&C.x).ad(u,a,b,c)
t.toString
u=W.C
u=new H.d1(new W.ar(t),H.n(new W.fT(),{func:1,ret:P.T,args:[u]}),[u])
return H.h(u.gaJ(u),"$iV")},
nz:function(a){H.h(a,"$ij")
return"wheel"},
cv:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cj(a)
t=u.geB(a)
if(typeof t==="string")r=u.geB(a)}catch(s){H.aj(s)}return r},
nC:function(a){var u,t=document.createElement("input"),s=H.h(t,"$icB")
try{s.type=a}catch(u){H.aj(u)}return s},
jM:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mo:function(a,b,c,d){var u=W.jM(W.jM(W.jM(W.jM(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ab:function(a,b,c,d,e){var u=W.mE(new W.jB(c),W.o)
if(u!=null&&!0)J.nj(a,b,u,!1)
return new W.jA(a,b,u,!1,[e])},
mn:function(a){var u=W.lF(),t=window.location
u=new W.bQ(new W.jU(u,t))
u.f3(a)
return u},
on:function(a,b,c,d){H.h(a,"$iV")
H.I(b)
H.I(c)
H.h(d,"$ibQ")
return!0},
oo:function(a,b,c,d){var u,t,s
H.h(a,"$iV")
H.I(b)
H.I(c)
u=H.h(d,"$ibQ").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mp:function(){var u=P.e,t=P.lP(C.u,u),s=H.t(C.u,0),r=H.n(new W.k5(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.k4(t,P.dL(u),P.dL(u),P.dL(u),null)
t.fe(null,new H.ht(C.u,r,[s,u]),q,null)
return t},
mE:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a1
if(u===C.k)return a
return u.dF(a,b)},
y:function y(){},
fo:function fo(){},
dn:function dn(){},
fp:function fp(){},
co:function co(){},
bV:function bV(){},
by:function by(){},
bW:function bW(){},
cr:function cr(){},
bz:function bz(){},
ct:function ct(){},
fG:function fG(){},
X:function X(){},
cu:function cu(){},
fH:function fH(){},
b_:function b_(){},
b0:function b0(){},
fI:function fI(){},
fJ:function fJ(){},
fM:function fM(){},
aE:function aE(){},
fN:function fN(){},
dA:function dA(){},
dB:function dB(){},
fO:function fO(){},
fP:function fP(){},
jv:function jv(a,b){this.a=a
this.b=b},
V:function V(){},
fT:function fT(){},
o:function o(){},
j:function j(){},
aF:function aF(){},
cx:function cx(){},
fZ:function fZ(){},
h2:function h2(){},
aN:function aN(){},
h7:function h7(){},
c0:function c0(){},
bj:function bj(){},
cA:function cA(){},
cB:function cB(){},
b3:function b3(){},
dM:function dM(){},
hA:function hA(){},
cE:function cE(){},
hB:function hB(){},
hC:function hC(a){this.a=a},
hD:function hD(){},
hE:function hE(a){this.a=a},
aQ:function aQ(){},
hF:function hF(){},
ae:function ae(){},
ar:function ar(a){this.a=a},
C:function C(){},
cI:function cI(){},
aR:function aR(){},
hV:function hV(){},
i4:function i4(){},
i5:function i5(a){this.a=a},
i7:function i7(){},
aS:function aS(){},
ii:function ii(){},
aT:function aT(){},
ij:function ij(){},
aU:function aU(){},
im:function im(){},
io:function io(a){this.a=a},
aG:function aG(){},
b8:function b8(){},
e6:function e6(){},
iu:function iu(){},
iv:function iv(){},
cP:function cP(){},
aV:function aV(){},
aH:function aH(){},
ix:function ix(){},
iy:function iy(){},
iD:function iD(){},
aW:function aW(){},
aX:function aX(){},
iH:function iH(){},
iI:function iI(){},
bO:function bO(){},
j4:function j4(){},
jm:function jm(){},
bd:function bd(){},
d2:function d2(){},
d3:function d3(){},
jw:function jw(){},
eq:function eq(){},
jL:function jL(){},
eI:function eI(){},
jZ:function jZ(){},
k2:function k2(){},
ju:function ju(){},
jy:function jy(a){this.a=a},
jz:function jz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ld:function ld(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jA:function jA(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jB:function jB(a){this.a=a},
bQ:function bQ(a){this.a=a},
E:function E(){},
dW:function dW(a){this.a=a},
hN:function hN(a){this.a=a},
hM:function hM(a,b,c){this.a=a
this.b=b
this.c=c},
eQ:function eQ(){},
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
dE:function dE(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aA:function aA(){},
jU:function jU(a,b){this.a=a
this.b=b},
f8:function f8(a){this.a=a},
kf:function kf(a){this.a=a},
ep:function ep(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eJ:function eJ(){},
eK:function eK(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
da:function da(){},
db:function db(){},
eR:function eR(){},
eS:function eS(){},
eW:function eW(){},
eZ:function eZ(){},
f_:function f_(){},
dc:function dc(){},
dd:function dd(){},
f1:function f1(){},
f2:function f2(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){}},O={
kW:function(a){var u=new O.a6([a])
u.bM(a)
return u},
a6:function a6(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cD:function cD(){this.b=this.a=null},
lR:function(){var u,t,s=new O.dP()
s.sfq(O.kW(V.ao))
s.e.bc(s.gh2(),s.gh4())
u=new O.b5(s,"emission")
u.c=C.d
u.f=new V.a5(0,0,0)
s.f=u
u=new O.b5(s,"ambient")
u.c=C.d
u.f=new V.a5(0,0,0)
s.r=u
u=new O.b5(s,"diffuse")
u.c=C.d
u.f=new V.a5(0,0,0)
s.x=u
u=new O.b5(s,"invDiffuse")
u.c=C.d
u.f=new V.a5(0,0,0)
s.y=u
u=new O.hz(s,"specular")
u.c=C.d
u.f=new V.a5(0,0,0)
u.ch=100
s.z=u
u=new O.hw(s,"bump")
u.c=C.d
s.Q=u
s.ch=null
u=new O.b5(s,"reflect")
u.c=C.d
u.f=new V.a5(0,0,0)
s.cx=u
u=new O.hy(s,"refract")
u.c=C.d
u.f=new V.a5(0,0,0)
u.ch=1
s.cy=u
u=new O.hv(s,"alpha")
u.c=C.d
u.f=1
s.db=u
u=new D.dK()
u.bM(D.a8)
u.sf5(H.d([],[D.dz]))
u.sf6(H.d([],[D.dZ]))
u.sf7(H.d([],[D.e4]))
u.sf8(H.d([],[D.ea]))
u.sf9(H.d([],[D.eb]))
u.sfa(H.d([],[D.bN]))
u.ch=u.Q=null
u.cO(u.gh0(),u.ghC(),u.ghG())
s.dx=u
t=u.Q
u=t==null?u.Q=D.Z():t
u.h(0,s.ghX())
u=s.dx
t=u.ch
u=t==null?u.ch=D.Z():t
u.h(0,s.gff())
s.dy=null
return s},
dP:function dP(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hv:function hv(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dQ:function dQ(){},
hw:function hw(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b5:function b5(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hy:function hy(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hz:function hz(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bM:function bM(){}},E={
kY:function(){var u=new E.an()
u.a=""
u.b=!0
u.sf2(0,O.kW(E.an))
u.y.bc(u.gjx(),u.gjA())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sa9(0,null)
u.sb8(null)
u.saT(null)
return u},
o3:function(a,b){var u=new E.i0(a)
u.eZ(a,b)
return u},
o7:function(a,b,c,d,e){var u,t,s=J.U(a)
if(!!s.$ibW)return E.m7(a,!0,!0,!0,!1)
u=W.kV()
t=u.style
t.width="100%"
t.height="100%"
s.gcg(a).h(0,u)
return E.m7(u,!0,!0,!0,!1)},
m7:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ec(),j=H.h(C.m.cM(a,"webgl2",P.nL(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic8")
if(j==null)H.u(P.w("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.o3(j,a)
u=new T.iA(j)
u.b=H.ai(j.getParameter(3379))
H.ai(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.ej(a)
t=new X.hf()
t.shP(P.dL(P.p))
u.b=t
t=new X.hG(u)
t.f=0
t.r=V.bK()
t.x=V.bK()
t.ch=t.Q=1
u.c=t
t=new X.hn(u)
t.r=0
t.x=V.bK()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iG(u)
t.f=V.bK()
t.r=V.bK()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfF(H.d([],[[P.cN,P.R]]))
t=u.z
s=document
r=W.ae
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ab(s,"contextmenu",H.n(u.ghd(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ab(a,"focus",H.n(u.ghj(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ab(a,"blur",H.n(u.gh6(),o),!1,p))
t=u.z
n=W.b3
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ab(s,"keyup",H.n(u.ghn(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ab(s,"keydown",H.n(u.ghl(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ab(a,"mousedown",H.n(u.ghr(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,"mouseup",H.n(u.ghv(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,l,H.n(u.ght(),q),!1,r))
n=u.z
m=W.bd;(n&&C.a).h(n,W.ab(a,H.I(W.nz(a)),H.n(u.ghx(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ab(s,l,H.n(u.ghf(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ab(s,"mouseup",H.n(u.ghh(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ab(s,"pointerlockchange",H.n(u.ghz(),o),!1,p))
p=u.z
o=W.aX
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ab(a,"touchstart",H.n(u.ghM(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchend",H.n(u.ghI(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchmove",H.n(u.ghK(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ay(Date.now(),!1)
k.cy=0
k.dm()
return k},
fy:function fy(){},
an:function an(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i0:function i0(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i1:function i1(a){this.a=a},
i2:function i2(a){this.a=a},
i3:function i3(a){this.a=a},
ec:function ec(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iC:function iC(a){this.a=a}},Z={
lc:function(a,b,c){var u
H.k(c,"$ib",[P.p],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cc(c)),35044)
a.bindBuffer(b,null)
return new Z.em(b,u)},
aI:function(a){return new Z.bc(a)},
em:function em(a,b){this.a=a
this.b=b},
ds:function ds(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jn:function jn(a){this.a=a},
dt:function dt(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bE:function bE(a,b,c){this.a=a
this.b=b
this.c=c},
bc:function bc(a){this.a=a}},D={
Z:function(){var u=new D.bZ()
u.sah(null)
u.saO(null)
u.c=null
u.d=0
return u},
fB:function fB(){},
bZ:function bZ(){var _=this
_.d=_.c=_.b=_.a=null},
fW:function fW(a){this.a=a},
fX:function fX(a){this.a=a},
B:function B(){this.b=null},
c1:function c1(a){this.b=null
this.$ti=a},
c2:function c2(a){this.b=null
this.$ti=a},
P:function P(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
dz:function dz(){},
a8:function a8(){},
dK:function dK(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dZ:function dZ(){},
e4:function e4(){},
ea:function ea(){},
eb:function eb(){},
bN:function bN(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},X={du:function du(a,b){this.a=a
this.b=b},dJ:function dJ(a,b){this.a=a
this.b=b},hf:function hf(){this.d=this.b=this.a=null},dN:function dN(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hn:function hn(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bG:function bG(a,b,c){this.a=a
this.b=b
this.c=c},bH:function bH(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hG:function hG(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hW:function hW(){},ee:function ee(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iG:function iG(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ej:function ej(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nB:function(a){var u=new X.h4(),t=new V.aM(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.m3
if(t==null){t=V.m2(0,0,1,1)
$.m3=t}u.r=t
return u},
dv:function dv(){},
h4:function h4(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dY:function dY(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
e7:function e7(){}},V={
pq:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bb(a-b,u)
return(a<0?a+u:a)+b},
Y:function(a,b,c){if(a==null)return C.b.af("null",c)
return C.b.af(C.e.eE(Math.abs(a-0)<$.N().a?0:a,b),c+b+1)},
ch:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.r],"$ab")
u=H.d([],[P.e])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.D)(a),++r){q=V.Y(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.f(u,p)
C.a.n(u,p,C.b.af(u[p],s))}return u},
lu:function(a){return C.e.jY(Math.pow(2,C.W.cs(Math.log(H.oT(a))/Math.log(2))))},
dS:function(){var u=$.lV
return u==null?$.lV=V.bn(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bn:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lU:function(a,b,c){return V.bn(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lT:function(a,b,c,d){return V.bn(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lS:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bn(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
bK:function(){var u=$.lZ
return u==null?$.lZ=new V.aa(0,0):u},
m_:function(){var u=$.bL
return u==null?$.bL=new V.a2(0,0,0):u},
m2:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e1(a,b,c,d)},
d0:function(){var u=$.mj
return u==null?$.mj=new V.K(0,0,0):u},
oh:function(){var u=$.j8
return u==null?$.j8=new V.K(-1,0,0):u},
mk:function(){var u=$.j9
return u==null?$.j9=new V.K(0,1,0):u},
ml:function(){var u=$.ja
return u==null?$.ja=new V.K(0,0,1):u},
a5:function a5(a,b,c){this.a=a
this.b=b
this.c=c},
aM:function aM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fV:function fV(a){this.a=a},
dR:function dR(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ao:function ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e1:function e1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a4:function a4(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
a0:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.w("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.F(a,0)
t=C.b.F(b,0)
s=new V.i_()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
x:function(a){var u=new V.i8()
u.f_(a)
return u},
iF:function(){var u=new V.iE(),t=P.e
u.sia(new H.aP([t,V.cM]))
u.sie(new H.aP([t,V.cR]))
u.c=null
return u},
bg:function bg(){},
az:function az(){},
dO:function dO(){},
av:function av(){this.a=null},
i_:function i_(){this.b=this.a=null},
i8:function i8(){this.a=null},
cM:function cM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ed:function ed(a,b,c){this.a=a
this.b=b
this.c=c},
cR:function cR(a){this.b=a
this.c=null},
iE:function iE(){this.c=this.b=this.a=null},
cS:function cS(a){this.b=a
this.a=this.c=null},
pl:function(a){P.o8(C.T,new V.kN(a))},
o5:function(a){var u=new V.ic()
u.f1(a,!0)
return u},
bA:function bA(){},
kN:function kN(a){this.a=a},
fL:function fL(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h5:function h5(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h6:function h6(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hU:function hU(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hY:function hY(a){this.a=a
this.c=null},
hZ:function hZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ic:function ic(){this.b=this.a=null},
ie:function ie(a){this.a=a},
id:function id(a){this.a=a},
ig:function ig(a){this.a=a}},U={
lK:function(){var u=new U.fC()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
dx:function(a){var u=new U.dw()
u.a=a
return u},
kZ:function(){var u=new U.cz()
u.bM(U.ak)
u.bc(u.gfb(),u.ghE())
u.e=null
u.f=V.dS()
u.r=0
return u},
mf:function(a,b){var u,t,s,r=new U.ek(),q=U.lK()
q.seK(0,!0)
q.sef(6.283185307179586)
q.seh(0)
q.sa3(0,0)
q.seg(100)
q.sa0(0)
q.sdI(0.5)
r.b=q
u=r.gbf()
q.gB().h(0,u)
q=U.lK()
q.seK(0,!0)
q.sef(6.283185307179586)
q.seh(0)
q.sa3(0,0)
q.seg(100)
q.sa0(0)
q.sdI(0.5)
r.c=q
q.gB().h(0,u)
r.d=null
r.r=r.f=r.e=!1
r.y=r.x=2.5
r.Q=4
r.ch=r.cx=!1
r.db=r.cy=0
r.dx=null
r.dy=0
r.fx=r.fr=null
t=new X.bG(a,!1,!1)
s=r.d
r.d=t
q=new D.P("modifiers",s,t,[X.bG])
q.b=!0
r.Z(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.P("invertX",q,!1,[P.T])
q.b=!0
r.Z(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.P("invertY",q,!1,[P.T])
q.b=!0
r.Z(q)}r.iY(b)
return r},
fC:function fC(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dw:function dw(){this.b=this.a=null},
cz:function cz(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ak:function ak(){},
ek:function ek(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dC:function dC(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nO:function(a,b){var u=a.ak,t=new A.hu(b,u)
t.f0(b,u)
t.eY(a,b)
return t},
l9:function(a,b,c,d,e){var u=new A.iO(a,c,e)
u.f=d
u.sir(P.nM(d,0,P.p))
return u},
dq:function dq(a,b,c){this.a=a
this.b=b
this.c=c},
fr:function fr(a){this.a=a},
hu:function hu(a,b){var _=this
_.bo=_.dK=_.bn=_.ak=_.aw=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.e_=_.cl=_.dZ=_.bB=_.dY=_.dX=_.bA=_.bz=_.dW=_.dV=_.by=_.bx=_.bw=_.dU=_.dT=_.bv=_.dS=_.dR=_.bu=_.dQ=_.dP=_.bt=_.bs=_.dO=_.dN=_.br=_.bq=_.dM=_.dL=_.bp=null
_.cq=_.e3=_.cp=_.e2=_.co=_.e1=_.cn=_.e0=_.cm=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hx:function hx(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aw=b3
_.ak=b4
_.bn=b5},
cT:function cT(a,b){this.b=a
this.c=b},
cX:function cX(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
cV:function cV(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cY:function cY(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cW:function cW(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cZ:function cZ(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
cL:function cL(){},
bY:function bY(a,b){this.a=a
this.b=b},
ef:function ef(){},
iU:function iU(a){this.a=a},
Q:function Q(a,b,c){this.a=a
this.c=b
this.d=c},
iQ:function iQ(a,b,c){this.a=a
this.c=b
this.d=c},
iR:function iR(a,b,c){this.a=a
this.c=b
this.d=c},
iT:function iT(a,b,c){this.a=a
this.c=b
this.d=c},
iO:function iO(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a3:function a3(a,b,c){this.a=a
this.c=b
this.d=c},
iP:function iP(a,b,c){this.a=a
this.c=b
this.d=c},
O:function O(a,b,c){this.a=a
this.c=b
this.d=c},
iS:function iS(a,b,c){this.a=a
this.c=b
this.d=c},
iV:function iV(a,b,c){this.a=a
this.c=b
this.d=c},
cU:function cU(a,b,c){this.a=a
this.c=b
this.d=c},
aB:function aB(a,b,c){this.a=a
this.c=b
this.d=c},
ap:function ap(a,b,c){this.a=a
this.c=b
this.d=c},
aq:function aq(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lp:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.ah,P.r,P.r]})
u=F.l7()
F.dg(u,b,c,d,a,1,0,0,1)
F.dg(u,b,c,d,a,0,1,0,3)
F.dg(u,b,c,d,a,0,0,1,2)
F.dg(u,b,c,d,a,-1,0,0,0)
F.dg(u,b,c,d,a,0,-1,0,0)
F.dg(u,b,c,d,a,0,0,-1,3)
u.av()
return u},
ki:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dg:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
H.n(c,{func:1,ret:-1,args:[F.ah,P.r,P.r]})
u=a1+a2
t=u+a3
s=a2+a3
r=a3+a1
q=new V.K(t,s+a1,r+a2)
e.a=q
p=a1-a2
o=a2-a3
n=a3-a1
m=e.b=new V.K(p+a3,o+a1,n+a2)
l=new V.K(p-a3,o-a1,n-a2)
e.c=l
k=e.d=new V.K(u-a3,s-a1,r-a2)
if(t>0){e.d=m
e.b=k
t=m
u=k}else{t=k
u=m}for(r=t,t=u,u=q,s=l,j=0;j<a4;++j,i=r,r=u,u=t,t=s,s=i){e.a=t
e.b=s
e.c=r
e.d=u}h=F.ki(u)
g=F.ki(e.b)
f=F.lx(d,a0,new F.kh(e,F.ki(e.c),F.ki(e.d),g,h,c),b)
if(f!=null)a.b5(f)},
mJ:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(d,{func:1,ret:P.r,args:[P.r]})
if(e<3)return
u=F.l7()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.ah])
q=u.a
p=new V.K(0,0,t)
p=p.w(0,Math.sqrt(p.G(p)))
C.a.h(r,q.iT(new V.b7(a,-1,-1,-1),new V.aM(1,1,1,1),new V.a2(0,0,c),new V.K(0,0,t),new V.aa(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.G(k)
j=new V.K(m,l,t).w(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.el(new V.b7(a,-1,-1,-1),null,new V.aM(i,g,h,1),new V.a2(m*k,l*k,c),new V.K(0,0,t),new V.aa(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.iR(r)
return u},
lq:function(a,b,c,d,e){return F.oX(b,c,1,new F.kr(a,e),d)},
oX:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.r,args:[P.r,P.r]})
if(e<3)return
if(c<1)return
u=F.lx(c,e,new F.kt(d),null)
if(u==null)return
u.av()
u.c9()
if(b)u.b5(F.mJ(3,!1,1,new F.ku(d),e))
if(a)u.b5(F.mJ(1,!0,-1,new F.kv(d),e))
return u},
pm:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kO()
t=F.lp(a,null,new F.kP(s,1),b)
t.c9()
return t},
mV:function(){return F.mI(15,30,0.5,1,new F.kQ())},
pd:function(){return F.mI(12,120,0.3,1,new F.kC(3,2))},
mI:function(a,b,c,d,e){var u=F.lx(a,b,new F.ks(H.n(e,{func:1,ret:V.a2,args:[P.r]}),d,b,c),null)
if(u==null)return
u.av()
u.c9()
return u},
lx:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.ah,P.r,P.r]})
if(a<1)return
if(b<1)return
u=F.l7()
t=H.d([],[F.ah])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.el(g,g,new V.aM(p,0,0,1),g,g,new V.aa(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cj(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.el(g,g,new V.aM(j,i,h,1),g,g,new V.aa(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cj(d))}}u.d.iS(a+1,b+1,t)
return u},
cw:function(a,b,c){var u=new F.a9(),t=a.a
if(t==null)H.u(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.u(P.w("May not create a face with vertices attached to different shapes."))
u.c7(a)
u.c8(b)
u.i3(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a1()
return u},
nI:function(a,b){var u=new F.bm(),t=a.a
if(t==null)H.u(P.w("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.u(P.w("May not create a line with vertices attached to different shapes."))
u.c7(a)
u.c8(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a1()
return u},
l7:function(){var u=new F.e3(),t=new F.jb(u)
t.b=!1
t.sis(H.d([],[F.ah]))
u.a=t
t=new F.ib(u)
t.sc_(H.d([],[F.bJ]))
u.b=t
t=new F.ia(u)
t.sfM(H.d([],[F.bm]))
u.c=t
t=new F.i9(u)
t.sfG(H.d([],[F.a9]))
u.d=t
u.e=null
return u},
el:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ah(),r=new F.jj()
r.sc_(H.d([],[F.bJ]))
s.b=r
r=new F.jf()
u=[F.bm]
r.sfN(H.d([],u))
r.sfO(H.d([],u))
s.c=r
r=new F.jc()
u=[F.a9]
r.sfH(H.d([],u))
r.sfI(H.d([],u))
r.sfJ(H.d([],u))
s.d=r
h=$.n8()
s.e=0
r=$.bu()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bt().a)!==0?e:t
s.x=(u&$.bs().a)!==0?b:t
s.y=(u&$.bv().a)!==0?f:t
s.z=(u&$.bw().a)!==0?g:t
s.Q=(u&$.n9().a)!==0?c:t
s.ch=(u&$.cn().a)!==0?i:0
s.cx=(u&$.br().a)!==0?a:t
return s},
kh:function kh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kr:function kr(a,b){this.a=a
this.b=b},
kt:function kt(a){this.a=a},
ku:function ku(a){this.a=a},
kv:function kv(a){this.a=a},
kO:function kO(){},
kP:function kP(a,b){this.a=a
this.b=b},
kQ:function kQ(){},
kC:function kC(a,b){this.a=a
this.b=b},
ks:function ks(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fY:function fY(){},
ih:function ih(){},
bm:function bm(){this.b=this.a=null},
hh:function hh(){},
iN:function iN(){},
bJ:function bJ(){this.a=null},
e3:function e3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i9:function i9(a){this.a=a
this.b=null},
ia:function ia(a){this.a=a
this.b=null},
ib:function ib(a){this.a=a
this.b=null},
ah:function ah(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jl:function jl(a){this.a=a},
jk:function jk(a){this.a=a},
jb:function jb(a){this.a=a
this.c=this.b=null},
jc:function jc(){this.d=this.c=this.b=null},
jd:function jd(a,b){this.a=a
this.b=b},
je:function je(a,b){this.a=a
this.b=b},
jf:function jf(){this.c=this.b=null},
jh:function jh(){},
jg:function jg(){},
ji:function ji(){},
hO:function hO(){},
jj:function jj(){this.b=null}},T={cQ:function cQ(){},e9:function e9(){},iz:function iz(){var _=this
_.y=_.d=_.c=_.b=_.a=null},iA:function iA(a){var _=this
_.a=a
_.e=_.d=_.b=null},iB:function iB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},L={
mP:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="testCanvas",d=null,c=V.o5("Test 025"),b=W.kV()
b.className="pageLargeCanvas"
b.id=e
c.a.appendChild(b)
u=[P.e]
c.dz(H.d(["Test of the Material Lighting shader with a textured spot light. ","Use Ctrl plus the mouse to move the light."],u))
c.iP(H.d(["shapes"],u))
c.dz(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(e)
if(t==null)H.u(P.w("Failed to find an element with the identifier, testCanvas."))
s=E.o7(t,!0,!0,!0,!1)
r=U.kZ()
r.h(0,U.dx(V.lU(0,0,-2.5)))
r.h(0,U.mf(!0,s.r))
q=new V.a5(1,1,1)
p=s.f.jt("../resources/Test.png")
o=new D.bN()
o.z=0.6
o.Q=1
o.f=new V.a5(1,1,1)
o.z=1.0471975511965976
o.ch=1
o.cy=o.cx=0
o.a=V.m_()
o.b=V.ml()
o.c=V.mk()
o.d=V.oh()
n=o.e
o.e=r
r.gB().h(0,o.gbZ())
m=new D.P("mover",n,o.e,[U.ak])
m.b=!0
o.a5(m)
if(!o.f.u(0,q)){n=o.f
o.f=q
m=new D.P("color",n,q,[V.a5])
m.b=!0
o.a5(m)}m=o.r
if(m!==p){if(m!=null)m.gB().N(0,o.gbZ())
n=o.r
o.r=p
p.gB().h(0,o.gbZ())
p=new D.P("texture",n,o.r,[T.e9])
p.b=!0
o.a5(p)}p=o.z
if(!(Math.abs(p-0.5)<$.N().a)){o.z=0.5
m=1/(Math.sqrt(2)*Math.tan(o.z))
o.x=m
o.y=m*o.Q
p=new D.P("fov",p,o.z,[P.r])
p.b=!0
o.a5(p)}p=o.Q
if(!(Math.abs(p-1)<$.N().a)){o.Q=1
m=o.x
if(typeof m!=="number")return m.E()
o.y=m
p=new D.P("ratio",p,1,[P.r])
p.b=!0
o.a5(p)}p=o.ch
if(!(Math.abs(p-0.5)<$.N().a)){o.ch=0.5
p=new D.P("attenuation0",p,0.5,[P.r])
p.b=!0
o.a5(p)}p=o.cx
if(!(Math.abs(p-0.05)<$.N().a)){o.cx=0.05
p=new D.P("attenuation1",p,0.05,[P.r])
p.b=!0
o.a5(p)}p=o.cy
if(!(Math.abs(p-0.05)<$.N().a)){o.cy=0.05
p=new D.P("attenuation2",p,0.05,[P.r])
p.b=!0
o.a5(p)}l=O.lR()
l.dx.h(0,o)
p=l.r
p.saj(0,new V.a5(0.05,0.05,0.05))
p=l.x
p.saj(0,new V.a5(0.7,0.7,0.7))
p=l.z
p.saj(0,new V.a5(0.3,0.3,0.3))
p=l.z
if(p.c===C.d){p.c=C.j
p.bL()
p.c4(100)
m=p.a
m.a=null
m.ab(d)}p.c4(100)
k=E.kY()
k.sa9(0,F.mV())
j=E.kY()
j.saT(U.dx(V.lT(3,3,3,1)))
p=F.lp(1,d,d,1)
p.cr()
j.sa9(0,p)
i=U.kZ()
i.h(0,U.mf(!1,s.r))
i.h(0,U.dx(V.lS(3.141592653589793)))
i.h(0,U.dx(V.lU(0,0,5)))
h=E.kY()
p=U.kZ()
p.h(0,U.dx(V.lT(0.1,0.1,0.1,1)))
p.h(0,r)
h.saT(p)
h.sa9(0,F.lq(0,!1,!0,40,1))
p=O.lR()
p.f.saj(0,new V.a5(1,1,1))
h.sb8(p)
p=new M.dC()
p.sfu(0,O.kW(E.an))
p.d.bc(p.gh9(),p.ghb())
p.x=p.r=p.f=p.e=null
g=X.nB(d)
f=new X.dY()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.saT(d)
m=f.c
if(!(Math.abs(m-1.0471975511965976)<$.N().a)){f.c=1.0471975511965976
m=new D.P("fov",m,1.0471975511965976,[P.r])
m.b=!0
f.aL(m)}m=f.d
if(!(Math.abs(m-0.1)<$.N().a)){f.d=0.1
m=new D.P("near",m,0.1,[P.r])
m.b=!0
f.aL(m)}m=f.e
if(!(Math.abs(m-2000)<$.N().a)){f.e=2000
m=new D.P("far",m,2000,[P.r])
m.b=!0
f.aL(m)}m=p.a
if(m!==f){if(m!=null)m.gB().N(0,p.gar())
n=p.a
p.a=f
f.gB().h(0,p.gar())
m=new D.P("camera",n,p.a,[X.dv])
m.b=!0
p.aA(m)}m=p.b
if(m!==g){if(m!=null)m.gB().N(0,p.gar())
n=p.b
p.b=g
g.gB().h(0,p.gar())
m=new D.P("target",n,p.b,[X.e7])
m.b=!0
p.aA(m)}p.sb8(d)
p.sb8(l)
p.d.h(0,k)
p.d.h(0,j)
p.d.h(0,h)
p.a.saT(i)
m=s.d
if(m!==p){if(m!=null)m.gB().N(0,s.gcR())
s.d=p
p.gB().h(0,s.gcR())
s.cS()}p=new V.hY("shapes")
u=u.getElementById("shapes")
p.c=u
if(u==null)H.u("Failed to find shapes for RadioGroup")
p.b1(0,"Cube",new L.kE(k))
p.b1(0,"Cylinder",new L.kF(k))
p.b1(0,"Cone",new L.kG(k))
p.b1(0,"Sphere",new L.kH(k))
p.dv(0,"Toroid",new L.kI(k),!0)
p.b1(0,"Knot",new L.kJ(k))
u=s.z
if(u==null)u=s.z=D.Z()
p={func:1,ret:-1,args:[D.B]}
m=H.n(new L.kK(c,l),p)
if(u.b==null)u.saO(H.d([],[p]))
u=u.b;(u&&C.a).h(u,m)
V.pl(s)},
kE:function kE(a){this.a=a},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,L]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l2.prototype={}
J.a.prototype={
u:function(a,b){return a===b},
gI:function(a){return H.cJ(a)},
i:function(a){return"Instance of '"+H.c5(a)+"'"}}
J.hc.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iT:1}
J.dH.prototype={
u:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.dI.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.hT.prototype={}
J.bP.prototype={}
J.bl.prototype={
i:function(a){var u=a[$.mX()]
if(u==null)return this.eT(a)
return"JavaScript function for "+H.l(J.at(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibD:1}
J.aO.prototype={
h:function(a,b){H.A(b,H.t(a,0))
if(!!a.fixed$length)H.u(P.J("add"))
a.push(b)},
ex:function(a,b){if(!!a.fixed$length)H.u(P.J("removeAt"))
if(b<0||b>=a.length)throw H.c(P.e0(b,null))
return a.splice(b,1)[0]},
N:function(a,b){var u
if(!!a.fixed$length)H.u(P.J("remove"))
for(u=0;u<a.length;++u)if(J.W(a[u],b)){a.splice(u,1)
return!0}return!1},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bh(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.n(t,u,H.l(a[u]))
return t.join(b)},
jr:function(a){return this.m(a,"")},
jk:function(a,b,c,d){var u,t,s
H.A(b,d)
H.n(c,{func:1,ret:d,args:[d,H.t(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bh(a))}return t},
jj:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.T,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.H(b.$1(s)))return s
if(a.length!==u)throw H.c(P.bh(a))}throw H.c(H.hb())},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
eQ:function(a,b,c){if(b<0||b>a.length)throw H.c(P.af(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.af(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.t(a,0)])
return H.d(a.slice(b,c),[H.t(a,0)])},
gji:function(a){if(a.length>0)return a[0]
throw H.c(H.hb())},
gax:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hb())},
bd:function(a,b,c,d){var u,t,s=H.t(a,0)
H.k(d,"$ii",[s],"$ai")
if(!!a.immutable$list)H.u(P.J("setRange"))
P.bp(b,c,a.length)
u=c-b
if(u===0)return
P.l6(0,"skipCount")
H.k(d,"$ib",[s],"$ab")
s=J.ci(d)
if(u>s.gl(d))throw H.c(H.nE())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
dA:function(a,b){var u,t
H.n(b,{func:1,ret:P.T,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.H(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.bh(a))}return!1},
V:function(a,b){var u
for(u=0;u<a.length;++u)if(J.W(a[u],b))return!0
return!1},
i:function(a){return P.l_(a,"[","]")},
gU:function(a){return new J.au(a,a.length,[H.t(a,0)])},
gI:function(a){return H.cJ(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.u(P.J("set length"))
if(b<0)throw H.c(P.af(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cg(a,b))
return a[b]},
n:function(a,b,c){H.A(c,H.t(a,0))
if(!!a.immutable$list)H.u(P.J("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cg(a,b))
a[b]=c},
q:function(a,b){var u,t=[H.t(a,0)]
H.k(b,"$ib",t,"$ab")
u=C.f.q(a.length,b.gl(b))
t=H.d([],t)
this.sl(t,u)
this.bd(t,0,a.length,a)
this.bd(t,a.length,u,b)
return t},
$ii:1,
$ib:1}
J.l1.prototype={}
J.au.prototype={
gK:function(a){return this.d},
D:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.D(s))
u=t.c
if(u>=r){t.sd7(null)
return!1}t.sd7(s[u]);++t.c
return!0},
sd7:function(a){this.d=H.A(a,H.t(this,0))},
$ib2:1}
J.bF.prototype={
jY:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.J(""+a+".toInt()"))},
cs:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.J(""+a+".floor()"))},
an:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.J(""+a+".round()"))},
eE:function(a,b){var u,t
if(b>20)throw H.c(P.af(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
b9:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.af(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.Y(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.u(P.J("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.f(t,1)
u=t[1]
if(3>=s)return H.f(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.E("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
q:function(a,b){if(typeof b!=="number")throw H.c(H.aC(b))
return a+b},
t:function(a,b){if(typeof b!=="number")throw H.c(H.aC(b))
return a-b},
E:function(a,b){if(typeof b!=="number")throw H.c(H.aC(b))
return a*b},
bb:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eX:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dr(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dr(a,b)},
dr:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.J("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
aQ:function(a,b){var u
if(a>0)u=this.dq(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
i8:function(a,b){if(b<0)throw H.c(H.aC(b))
return this.dq(a,b)},
dq:function(a,b){return b>31?0:a>>>b},
$ir:1,
$iac:1}
J.dG.prototype={$ip:1}
J.dF.prototype={}
J.bk.prototype={
Y:function(a,b){if(b<0)throw H.c(H.cg(a,b))
if(b>=a.length)H.u(H.cg(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.c(H.cg(a,b))
return a.charCodeAt(b)},
q:function(a,b){if(typeof b!=="string")throw H.c(P.kT(b,null,null))
return a+b},
aV:function(a,b,c,d){var u,t
c=P.bp(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
aa:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.af(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a4:function(a,b){return this.aa(a,b,0)},
C:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.u(H.aC(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.X()
if(b<0)throw H.c(P.e0(b,null))
if(b>c)throw H.c(P.e0(b,null))
if(c>a.length)throw H.c(P.e0(c,null))
return a.substring(b,c)},
ap:function(a,b){return this.C(a,b,null)},
k0:function(a){return a.toLowerCase()},
E:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.Q)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
af:function(a,b){var u=b-a.length
if(u<=0)return a
return this.E(" ",u)+a},
eb:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.af(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
ea:function(a,b){return this.eb(a,b,0)},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ilX:1,
$ie:1}
H.v.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.b.Y(this.a,b)},
$ad_:function(){return[P.p]},
$az:function(){return[P.p]},
$ai:function(){return[P.p]},
$ab:function(){return[P.p]}}
H.fS.prototype={}
H.c3.prototype={
gU:function(a){var u=this
return new H.cC(u,u.gl(u),[H.as(u,"c3",0)])},
bG:function(a,b){return this.eS(0,H.n(b,{func:1,ret:P.T,args:[H.as(this,"c3",0)]}))}}
H.cC.prototype={
gK:function(a){return this.d},
D:function(){var u,t=this,s=t.a,r=J.ci(s),q=r.gl(s)
if(t.b!==q)throw H.c(P.bh(s))
u=t.c
if(u>=q){t.saY(null)
return!1}t.saY(r.J(s,u));++t.c
return!0},
saY:function(a){this.d=H.A(a,H.t(this,0))},
$ib2:1}
H.hr.prototype={
gU:function(a){return new H.hs(J.bx(this.a),this.b,this.$ti)},
gl:function(a){return J.aD(this.a)},
J:function(a,b){return this.b.$1(J.fn(this.a,b))},
$ai:function(a,b){return[b]}}
H.hs.prototype={
D:function(){var u=this,t=u.b
if(t.D()){u.saY(u.c.$1(t.gK(t)))
return!0}u.saY(null)
return!1},
gK:function(a){return this.a},
saY:function(a){this.a=H.A(a,H.t(this,1))},
$ab2:function(a,b){return[b]}}
H.ht.prototype={
gl:function(a){return J.aD(this.a)},
J:function(a,b){return this.b.$1(J.fn(this.a,b))},
$ac3:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.d1.prototype={
gU:function(a){return new H.jo(J.bx(this.a),this.b,this.$ti)}}
H.jo.prototype={
D:function(){var u,t
for(u=this.a,t=this.b;u.D();)if(H.H(t.$1(u.gK(u))))return!0
return!1},
gK:function(a){var u=this.a
return u.gK(u)}}
H.c_.prototype={}
H.d_.prototype={
n:function(a,b,c){H.A(c,H.as(this,"d_",0))
throw H.c(P.J("Cannot modify an unmodifiable list"))}}
H.eh.prototype={}
H.fE.prototype={
i:function(a){return P.l5(this)},
n:function(a,b,c){H.A(b,H.t(this,0))
H.A(c,H.t(this,1))
return H.nv()},
$iF:1}
H.fF.prototype={
gl:function(a){return this.a},
bl:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bl(0,b))return
return this.d8(b)},
d8:function(a){return this.b[H.I(a)]},
M:function(a,b){var u,t,s,r,q=this,p=H.t(q,1)
H.n(b,{func:1,ret:-1,args:[H.t(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.A(q.d8(r),p))}}}
H.iK.prototype={
ae:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hP.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.he.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.l(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.l(t.a)+")"
return s+r+"' on '"+u+"' ("+H.l(t.a)+")"}}
H.iY.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kR.prototype={
$1:function(a){if(!!J.U(a).$ibC)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.eV.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaw:1}
H.cs.prototype={
i:function(a){return"Closure '"+H.c5(this).trim()+"'"},
$ibD:1,
gka:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iw.prototype={}
H.il.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cm(u)+"'"}}
H.cp.prototype={
u:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cp))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cJ(this.a)
else u=typeof t!=="object"?J.dm(t):H.cJ(t)
return(u^H.cJ(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.c5(u)+"'")}}
H.iM.prototype={
i:function(a){return this.a}}
H.fA.prototype={
i:function(a){return this.a}}
H.i6.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.jp.prototype={
i:function(a){return"Assertion failed: "+P.dD(this.a)}}
H.aP.prototype={
gl:function(a){return this.a},
gjq:function(a){return this.a===0},
ga7:function(a){return new H.hj(this,[H.t(this,0)])},
bl:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.d4(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.d4(t,b)}else return s.jn(b)},
jn:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cv(u.bT(t,u.cu(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bg(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bg(r,b)
s=t==null?null:t.b
return s}else return q.jo(b)},
jo:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bT(r,s.cu(a))
t=s.cv(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s=this
H.A(b,H.t(s,0))
H.A(c,H.t(s,1))
if(typeof b==="string"){u=s.b
s.cV(u==null?s.b=s.bX():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cV(t==null?s.c=s.bX():t,b,c)}else s.jp(b,c)},
jp:function(a,b){var u,t,s,r,q=this
H.A(a,H.t(q,0))
H.A(b,H.t(q,1))
u=q.d
if(u==null)u=q.d=q.bX()
t=q.cu(a)
s=q.bT(u,t)
if(s==null)q.c5(u,t,[q.bN(a,b)])
else{r=q.cv(s,a)
if(r>=0)s[r].b=b
else s.push(q.bN(a,b))}},
M:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.t(s,0),H.t(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bh(s))
u=u.c}},
cV:function(a,b,c){var u,t=this
H.A(b,H.t(t,0))
H.A(c,H.t(t,1))
u=t.bg(a,b)
if(u==null)t.c5(a,b,t.bN(b,c))
else u.b=c},
fk:function(){this.r=this.r+1&67108863},
bN:function(a,b){var u,t=this,s=new H.hi(H.A(a,H.t(t,0)),H.A(b,H.t(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fk()
return s},
cu:function(a){return J.dm(a)&0x3ffffff},
cv:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.W(a[t].a,b))return t
return-1},
i:function(a){return P.l5(this)},
bg:function(a,b){return a[b]},
bT:function(a,b){return a[b]},
c5:function(a,b,c){a[b]=c},
fB:function(a,b){delete a[b]},
d4:function(a,b){return this.bg(a,b)!=null},
bX:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c5(t,u,t)
this.fB(t,u)
return t}}
H.hi.prototype={}
H.hj.prototype={
gl:function(a){return this.a.a},
gU:function(a){var u=this.a,t=new H.hk(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hk.prototype={
gK:function(a){return this.d},
D:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bh(t))
else{t=u.c
if(t==null){u.scW(null)
return!1}else{u.scW(t.a)
u.c=u.c.c
return!0}}},
scW:function(a){this.d=H.A(a,H.t(this,0))},
$ib2:1}
H.ky.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.kz.prototype={
$2:function(a,b){return this.a(a,b)},
$S:52}
H.kA.prototype={
$1:function(a){return this.a(H.I(a))},
$S:49}
H.hd.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ilX:1,
$io1:1}
H.cF.prototype={$icF:1}
H.bI.prototype={$ibI:1,$io9:1}
H.dT.prototype={
gl:function(a){return a.length},
$iL:1,
$aL:function(){}}
H.cG.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]},
n:function(a,b,c){H.oZ(c)
H.bf(b,a,a.length)
a[b]=c},
$ac_:function(){return[P.r]},
$az:function(){return[P.r]},
$ii:1,
$ai:function(){return[P.r]},
$ib:1,
$ab:function(){return[P.r]}}
H.dU.prototype={
n:function(a,b,c){H.ai(c)
H.bf(b,a,a.length)
a[b]=c},
$ac_:function(){return[P.p]},
$az:function(){return[P.p]},
$ii:1,
$ai:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.hH.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hI.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hJ.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hK.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hL.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.dV.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bf(b,a,a.length)
return a[b]},
$ipM:1}
H.cH.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bf(b,a,a.length)
return a[b]},
$icH:1,
$iS:1}
H.d6.prototype={}
H.d7.prototype={}
H.d8.prototype={}
H.d9.prototype={}
P.jr.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:27}
P.jq.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:48}
P.js.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jt.prototype={
$0:function(){this.a.$0()},
$S:0}
P.f0.prototype={
fh:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cf(new P.k7(this,b),0),a)
else throw H.c(P.J("`setTimeout()` not found."))},
fi:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cf(new P.k6(this,a,Date.now(),b),0),a)
else throw H.c(P.J("Periodic timer."))},
$ib9:1}
P.k7.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.k6.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.f.eX(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.be.prototype={
ju:function(a){if(this.c!==6)return!0
return this.b.b.cJ(H.n(this.d,{func:1,ret:P.T,args:[P.R]}),a.a,P.T,P.R)},
jm:function(a){var u=this.e,t=P.R,s={futureOr:1,type:H.t(this,1)},r=this.b.b
if(H.fj(u,{func:1,args:[P.R,P.aw]}))return H.lr(r.jT(u,a.a,a.b,null,t,P.aw),s)
else return H.lr(r.cJ(H.n(u,{func:1,args:[P.R]}),a.a,null,t),s)}}
P.aJ.prototype={
eD:function(a,b,c){var u,t,s,r=H.t(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a1
if(u!==C.k){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.oL(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aJ($.a1,[c])
s=b==null?1:3
this.cY(new P.be(t,s,a,b,[r,c]))
return t},
jX:function(a,b){return this.eD(a,null,b)},
cY:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.h(t.c,"$ibe")
t.c=a}else{if(s===2){u=H.h(t.c,"$iaJ")
s=u.a
if(s<4){u.cY(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kp(null,null,s,H.n(new P.jC(t,a),{func:1,ret:-1}))}},
dk:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.h(p.c,"$ibe")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.h(p.c,"$iaJ")
u=q.a
if(u<4){q.dk(a)
return}p.a=u
p.c=q.c}o.a=p.bi(a)
u=p.b
u.toString
P.kp(null,null,u,H.n(new P.jG(o,p),{func:1,ret:-1}))}},
c1:function(){var u=H.h(this.c,"$ibe")
this.c=null
return this.bi(u)},
bi:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d0:function(a){var u,t,s=this,r=H.t(s,0)
H.lr(a,{futureOr:1,type:r})
u=s.$ti
if(H.lm(a,"$icy",u,"$acy"))if(H.lm(a,"$iaJ",u,null))P.mm(a,s)
else P.om(a,s)
else{t=s.c1()
H.A(a,r)
s.a=4
s.c=a
P.d4(s,t)}},
d1:function(a,b){var u,t=this
H.h(b,"$iaw")
u=t.c1()
t.a=8
t.c=new P.am(a,b)
P.d4(t,u)},
$icy:1}
P.jC.prototype={
$0:function(){P.d4(this.a,this.b)},
$S:0}
P.jG.prototype={
$0:function(){P.d4(this.b,this.a.a)},
$S:0}
P.jD.prototype={
$1:function(a){var u=this.a
u.a=0
u.d0(a)},
$S:27}
P.jE.prototype={
$2:function(a,b){H.h(b,"$iaw")
this.a.d1(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jF.prototype={
$0:function(){this.a.d1(this.b,this.c)},
$S:0}
P.jJ.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eA(H.n(s.d,{func:1}),null)}catch(r){u=H.aj(r)
t=H.ck(r)
if(o.d){s=H.h(o.a.a.c,"$iam").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.h(o.a.a.c,"$iam")
else q.b=new P.am(u,t)
q.a=!0
return}if(!!J.U(n).$icy){if(n instanceof P.aJ&&n.a>=4){if(n.a===8){s=o.b
s.b=H.h(n.c,"$iam")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jX(new P.jK(p),null)
s.a=!1}},
$S:3}
P.jK.prototype={
$1:function(a){return this.a},
$S:46}
P.jI.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.t(s,0)
q=H.A(n.c,r)
p=H.t(s,1)
n.a.b=s.b.b.cJ(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aj(o)
t=H.ck(o)
s=n.a
s.b=new P.am(u,t)
s.a=!0}},
$S:3}
P.jH.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.h(m.a.a.c,"$iam")
r=m.c
if(H.H(r.ju(u))&&r.e!=null){q=m.b
q.b=r.jm(u)
q.a=!1}}catch(p){t=H.aj(p)
s=H.ck(p)
r=H.h(m.a.a.c,"$iam")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.am(t,s)
n.a=!0}},
$S:3}
P.en.prototype={}
P.ip.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.aJ($.a1,[P.p])
r.a=0
u=H.t(s,0)
t=H.n(new P.ir(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.is(r,q),{func:1,ret:-1})
W.ab(s.a,s.b,t,!1,u)
return q}}
P.ir.prototype={
$1:function(a){H.A(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.M,args:[H.t(this.b,0)]}}}
P.is.prototype={
$0:function(){this.b.d0(this.a.a)},
$S:0}
P.cN.prototype={}
P.iq.prototype={}
P.b9.prototype={}
P.am.prototype={
i:function(a){return H.l(this.a)},
$ibC:1}
P.kg.prototype={$iq0:1}
P.ko.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dX():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:0}
P.jQ.prototype={
jU:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.k===$.a1){a.$0()
return}P.my(r,r,this,a,-1)}catch(s){u=H.aj(s)
t=H.ck(s)
P.kn(r,r,this,u,H.h(t,"$iaw"))}},
jV:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.k===$.a1){a.$1(b)
return}P.mz(r,r,this,a,b,-1,c)}catch(s){u=H.aj(s)
t=H.ck(s)
P.kn(r,r,this,u,H.h(t,"$iaw"))}},
j_:function(a,b){return new P.jS(this,H.n(a,{func:1,ret:b}),b)},
cb:function(a){return new P.jR(this,H.n(a,{func:1,ret:-1}))},
dF:function(a,b){return new P.jT(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eA:function(a,b){H.n(a,{func:1,ret:b})
if($.a1===C.k)return a.$0()
return P.my(null,null,this,a,b)},
cJ:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.a1===C.k)return a.$1(b)
return P.mz(null,null,this,a,b,c,d)},
jT:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.a1===C.k)return a.$2(b,c)
return P.oM(null,null,this,a,b,c,d,e,f)}}
P.jS.prototype={
$0:function(){return this.a.eA(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jR.prototype={
$0:function(){return this.a.jU(this.b)},
$S:3}
P.jT.prototype={
$1:function(a){var u=this.c
return this.a.jV(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jO.prototype={
gU:function(a){var u=this,t=new P.eC(u,u.r,u.$ti)
t.c=u.e
return t},
gl:function(a){return this.a},
V:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.h(u[b],"$ica")!=null}else{t=this.fv(b)
return t}},
fv:function(a){var u=this.d
if(u==null)return!1
return this.bR(this.d9(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.A(b,H.t(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cX(u==null?s.b=P.le():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cX(t==null?s.c=P.le():t,b)}else return s.fl(0,b)},
fl:function(a,b){var u,t,s,r=this
H.A(b,H.t(r,0))
u=r.d
if(u==null)u=r.d=P.le()
t=r.d2(b)
s=u[t]
if(s==null)u[t]=[r.bY(b)]
else{if(r.bR(s,b)>=0)return!1
s.push(r.bY(b))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hS(this.c,b)
else return this.hR(0,b)},
hR:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.d9(r,b)
t=s.bR(u,b)
if(t<0)return!1
s.ds(u.splice(t,1)[0])
return!0},
cX:function(a,b){H.A(b,H.t(this,0))
if(H.h(a[b],"$ica")!=null)return!1
a[b]=this.bY(b)
return!0},
hS:function(a,b){var u
if(a==null)return!1
u=H.h(a[b],"$ica")
if(u==null)return!1
this.ds(u)
delete a[b]
return!0},
de:function(){this.r=1073741823&this.r+1},
bY:function(a){var u,t=this,s=new P.ca(H.A(a,H.t(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.de()
return s},
ds:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.de()},
d2:function(a){return J.dm(a)&1073741823},
d9:function(a,b){return a[this.d2(b)]},
bR:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.W(a[t].a,b))return t
return-1}}
P.ca.prototype={}
P.eC.prototype={
gK:function(a){return this.d},
D:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bh(t))
else{t=u.c
if(t==null){u.sd_(null)
return!1}else{u.sd_(H.A(t.a,H.t(u,0)))
u.c=u.c.b
return!0}}},
sd_:function(a){this.d=H.A(a,H.t(this,0))},
$ib2:1}
P.hl.prototype={
$2:function(a,b){this.a.n(0,H.A(a,this.b),H.A(b,this.c))},
$S:7}
P.hm.prototype={$ii:1,$ib:1}
P.z.prototype={
gU:function(a){return new H.cC(a,this.gl(a),[H.bS(this,a,"z",0)])},
J:function(a,b){return this.j(a,b)},
k_:function(a,b){var u,t=this,s=H.d([],[H.bS(t,a,"z",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.n(s,u,t.j(a,u))
return s},
jZ:function(a){return this.k_(a,!0)},
q:function(a,b){var u,t=this,s=[H.bS(t,a,"z",0)]
H.k(b,"$ib",s,"$ab")
u=H.d([],s)
C.a.sl(u,C.f.q(t.gl(a),b.gl(b)))
C.a.bd(u,0,t.gl(a),a)
C.a.bd(u,t.gl(a),u.length,b)
return u},
jg:function(a,b,c,d){var u
H.A(d,H.bS(this,a,"z",0))
P.bp(b,c,this.gl(a))
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.l_(a,"[","]")}}
P.ho.prototype={}
P.hp.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.l(a)
t.a=u+": "
t.a+=H.l(b)},
$S:7}
P.ad.prototype={
M:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bS(s,a,"ad",0),H.bS(s,a,"ad",1)]})
for(u=J.bx(s.ga7(a));u.D();){t=u.gK(u)
b.$2(t,s.j(a,t))}},
gl:function(a){return J.aD(this.ga7(a))},
i:function(a){return P.l5(a)},
$iF:1}
P.k8.prototype={
n:function(a,b,c){H.A(b,H.t(this,0))
H.A(c,H.t(this,1))
throw H.c(P.J("Cannot modify unmodifiable map"))}}
P.hq.prototype={
j:function(a,b){return J.lB(this.a,b)},
n:function(a,b,c){J.kS(this.a,H.A(b,H.t(this,0)),H.A(c,H.t(this,1)))},
M:function(a,b){J.lC(this.a,H.n(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gl:function(a){return J.aD(this.a)},
i:function(a){return J.at(this.a)},
$iF:1}
P.ei.prototype={}
P.jV.prototype={
at:function(a,b){var u
for(u=J.bx(H.k(b,"$ii",this.$ti,"$ai"));u.D();)this.h(0,u.gK(u))},
i:function(a){return P.l_(this,"{","}")},
J:function(a,b){var u,t,s,r=this
P.l6(b,"index")
for(u=P.oq(r,r.r,H.t(r,0)),t=0;u.D();){s=u.d
if(b===t)return s;++t}throw H.c(P.a_(b,r,"index",null,t))},
$ii:1,
$im4:1}
P.eD.prototype={}
P.f6.prototype={}
P.fw.prototype={
jw:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bp(a0,a1,b.length)
u=$.nb()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.F(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kx(C.b.F(b,n))
j=H.kx(C.b.F(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.f(u,i)
h=u[i]
if(h>=0){i=C.b.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ag("")
g=r.a+=C.b.C(b,s,t)
r.a=g+H.c6(m)
s=n
continue}}throw H.c(P.a7("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.C(b,s,a1)
f=g.length
if(q>=0)P.lG(b,p,a1,q,o,f)
else{e=C.f.bb(f-1,4)+1
if(e===1)throw H.c(P.a7(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aV(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lG(b,p,a1,q,o,d)
else{e=C.f.bb(d,4)
if(e===1)throw H.c(P.a7(c,b,a1))
if(e>1)b=C.b.aV(b,a1,a1,e===2?"==":"=")}return b},
$abX:function(){return[[P.b,P.p],P.e]}}
P.fx.prototype={
$abB:function(){return[[P.b,P.p],P.e]}}
P.bX.prototype={}
P.bB.prototype={}
P.fU.prototype={
$abX:function(){return[P.e,[P.b,P.p]]}}
P.h9.prototype={
i:function(a){return this.a}}
P.h8.prototype={
fw:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.f(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.ag("")
if(r>b)q.a+=C.b.C(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.no(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abB:function(){return[P.e,P.e]}}
P.j5.prototype={
gjf:function(){return C.R}}
P.j7.prototype={
ci:function(a){var u,t,s=P.bp(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.ke(u)
if(t.fK(a,0,s)!==s)t.du(J.nk(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oG(0,t.b,u.length)))},
$abB:function(){return[P.e,[P.b,P.p]]}}
P.ke.prototype={
du:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.f(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.f(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.f(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.f(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.f(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.f(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.f(s,r)
s[r]=128|a&63
return!1}},
fK:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.Y(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.F(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.du(r,C.b.F(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.f(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.f(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.f(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.f(u,q)
u[q]=128|r&63}}return s}}
P.j6.prototype={
ci:function(a){var u,t,s,r,q,p,o,n,m
H.k(a,"$ib",[P.p],"$ab")
u=P.oc(!1,a,0,null)
if(u!=null)return u
t=P.bp(0,null,J.aD(a))
s=P.mB(a,0,t)
if(s>0){r=P.cO(a,0,s)
if(s===t)return r
q=new P.ag(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ag("")
n=new P.kd(!1,q)
n.c=o
n.j3(a,p,t)
if(n.e>0){H.u(P.a7("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c6(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abB:function(){return[[P.b,P.p],P.e]}}
P.kd.prototype={
j3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.k(a,"$ib",[P.p],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.ci(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.bH()
if((o&192)!==128){n=P.a7(h+C.f.b9(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.f(C.A,n)
if(u<=C.A[n]){n=P.a7("Overlong encoding of 0x"+C.f.b9(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a7("Character outside valid Unicode range: 0x"+C.f.b9(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.c6(u)
i.c=!1}for(n=p<c;n;){m=P.mB(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cO(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.X()
if(o<0){j=P.a7("Negative UTF-8 code unit: -0x"+C.f.b9(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a7(h+C.f.b9(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.T.prototype={}
P.ay.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.ay&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.f.aQ(u,30))&1073741823},
i:function(a){var u=this,t=P.nw(H.nY(u)),s=P.dy(H.nW(u)),r=P.dy(H.nS(u)),q=P.dy(H.nT(u)),p=P.dy(H.nV(u)),o=P.dy(H.nX(u)),n=P.nx(H.nU(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.r.prototype={}
P.b1.prototype={
q:function(a,b){return new P.b1(C.f.q(this.a,b.gfD()))},
t:function(a,b){return new P.b1(C.f.t(this.a,b.gfD()))},
u:function(a,b){if(b==null)return!1
return b instanceof P.b1&&this.a===b.a},
gI:function(a){return C.f.gI(this.a)},
i:function(a){var u,t,s,r=new P.fR(),q=this.a
if(q<0)return"-"+new P.b1(0-q).i(0)
u=r.$1(C.f.a6(q,6e7)%60)
t=r.$1(C.f.a6(q,1e6)%60)
s=new P.fQ().$1(q%1e6)
return""+C.f.a6(q,36e8)+":"+H.l(u)+":"+H.l(t)+"."+H.l(s)}}
P.fQ.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:22}
P.fR.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:22}
P.bC.prototype={}
P.fq.prototype={
i:function(a){return"Assertion failed"}}
P.dX.prototype={
i:function(a){return"Throw of null."}}
P.aL.prototype={
gbQ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbP:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbQ()+o+u
if(!q.a)return t
s=q.gbP()
r=P.dD(q.b)
return t+s+": "+r}}
P.c7.prototype={
gbQ:function(){return"RangeError"},
gbP:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.l(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.l(s)
else if(t>s)u=": Not in range "+H.l(s)+".."+H.l(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.l(s)}return u}}
P.ha.prototype={
gbQ:function(){return"RangeError"},
gbP:function(){var u,t=H.ai(this.b)
if(typeof t!=="number")return t.X()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.l(u)},
gl:function(a){return this.f}}
P.iZ.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iW.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c9.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fD.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dD(u)+"."}}
P.hS.prototype={
i:function(a){return"Out of Memory"},
$ibC:1}
P.e5.prototype={
i:function(a){return"Stack Overflow"},
$ibC:1}
P.fK.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ev.prototype={
i:function(a){return"Exception: "+this.a}}
P.h3.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.C(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.F(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.Y(f,q)
if(p===10||p===13){o=q
break}}if(o-s>78)if(g-s<75){n=s+75
m=s
l=""
k="..."}else{if(o-g<75){m=o-75
n=o
k=""}else{m=g-36
n=g+36
k="..."}l="..."}else{n=o
m=s
l=""
k=""}j=C.b.C(f,m,n)
return h+l+j+k+"\n"+C.b.E(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.l(g)+")"):h}}
P.bD.prototype={}
P.p.prototype={}
P.i.prototype={
bG:function(a,b){var u=H.as(this,"i",0)
return new H.d1(this,H.n(b,{func:1,ret:P.T,args:[u]}),[u])},
gl:function(a){var u,t=this.gU(this)
for(u=0;t.D();)++u
return u},
gaJ:function(a){var u,t=this.gU(this)
if(!t.D())throw H.c(H.hb())
u=t.gK(t)
if(t.D())throw H.c(H.nF())
return u},
J:function(a,b){var u,t,s
P.l6(b,"index")
for(u=this.gU(this),t=0;u.D();){s=u.gK(u)
if(b===t)return s;++t}throw H.c(P.a_(b,this,"index",null,t))},
i:function(a){return P.nD(this,"(",")")}}
P.b2.prototype={}
P.b.prototype={$ii:1}
P.F.prototype={}
P.M.prototype={
gI:function(a){return P.R.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.ac.prototype={}
P.R.prototype={constructor:P.R,$iR:1,
u:function(a,b){return this===b},
gI:function(a){return H.cJ(this)},
i:function(a){return"Instance of '"+H.c5(this)+"'"},
toString:function(){return this.i(this)}}
P.aw.prototype={}
P.e.prototype={$ilX:1}
P.ag.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipA:1}
P.j3.prototype={
$2:function(a,b){var u,t,s,r=P.e
H.k(a,"$iF",[r,r],"$aF")
H.I(b)
u=J.dj(b).ea(b,"=")
if(u===-1){if(b!=="")J.kS(a,P.lg(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.C(b,0,u)
s=C.b.ap(b,u+1)
r=this.a
J.kS(a,P.lg(t,0,t.length,r,!0),P.lg(s,0,s.length,r,!0))}return a},
$S:45}
P.j0.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:43}
P.j1.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:42}
P.j2.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fm(C.b.C(this.b,a,b),null,16)
if(typeof u!=="number")return u.X()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:41}
P.cb.prototype={
geJ:function(){return this.b},
gct:function(a){var u=this.c
if(u==null)return""
if(C.b.a4(u,"["))return C.b.C(u,1,u.length-1)
return u},
gbD:function(a){var u=this.d
if(u==null)return P.mq(this.a)
return u},
gcD:function(a){var u=this.f
return u==null?"":u},
ge5:function(){var u=this.r
return u==null?"":u},
ey:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.k(b,"$iF",[P.e,null],"$aF")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a4(p,"/"))p="/"+p
n=P.lf(null,0,0,b)
return new P.cb(u,s,q,r,p,n,m.r)},
gcE:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.e
s.shQ(new P.ei(P.me(u==null?"":u),[t,t]))}return s.Q},
ge6:function(){return this.c!=null},
ge9:function(){return this.f!=null},
ge7:function(){return this.r!=null},
i:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.l(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.l(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.l(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.U(b).$ila)if(s.a==b.gbJ())if(s.c!=null===b.ge6())if(s.b==b.geJ())if(s.gct(s)==b.gct(b))if(s.gbD(s)==b.gbD(b))if(s.e===b.ges(b)){u=s.f
t=u==null
if(!t===b.ge9()){if(t)u=""
if(u===b.gcD(b)){u=s.r
t=u==null
if(!t===b.ge7()){if(t)u=""
u=u===b.ge5()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
return u==null?this.z=C.b.gI(this.i(0)):u},
shQ:function(a){var u=P.e
this.Q=H.k(a,"$iF",[u,u],"$aF")},
$ila:1,
gbJ:function(){return this.a},
ges:function(a){return this.e}}
P.k9.prototype={
$1:function(a){throw H.c(P.a7("Invalid port",this.a,this.b+1))},
$S:40}
P.ka.prototype={
$1:function(a){return P.f7(C.a0,a,C.l,!1)},
$S:16}
P.kc.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.l(P.f7(C.r,a,C.l,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.l(P.f7(C.r,b,C.l,!0))}},
$S:15}
P.kb.prototype={
$2:function(a,b){var u,t
H.I(a)
if(b==null||typeof b==="string")this.a.$2(a,H.I(b))
else for(u=J.bx(H.mO(b,"$ii")),t=this.a;u.D();)t.$2(a,H.I(u.gK(u)))},
$S:39}
P.j_.prototype={
geI:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.f(o,0)
u=q.a
o=o[0]+1
t=C.b.eb(u,"?",o)
s=u.length
if(t>=0){r=P.df(u,t+1,s,C.p,!1)
s=t}else r=p
return q.c=new P.jx("data",p,p,p,P.df(u,o,s,C.E,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.f(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kk.prototype={
$1:function(a){return new Uint8Array(96)},
$S:37}
P.kj.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.f(u,a)
u=u[a]
J.nl(u,0,96,b)
return u},
$S:35}
P.kl.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.F(b,s)^96
if(r>=t)return H.f(a,r)
a[r]=c}}}
P.km.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.F(b,0),t=C.b.F(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.f(a,r)
a[r]=c}}}
P.jY.prototype={
ge6:function(){return this.c>0},
ge8:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.q()
t=this.e
if(typeof t!=="number")return H.G(t)
t=u+1<t
u=t}else u=!1
return u},
ge9:function(){var u=this.f
if(typeof u!=="number")return u.X()
return u<this.r},
ge7:function(){return this.r<this.a.length},
gdc:function(){return this.b===4&&C.b.a4(this.a,"http")},
gdd:function(){return this.b===5&&C.b.a4(this.a,"https")},
gbJ:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdc())q=t.x="http"
else if(t.gdd()){t.x="https"
q="https"}else if(q===4&&C.b.a4(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a4(t.a,r)){t.x=r
q=r}else{q=C.b.C(t.a,0,q)
t.x=q}return q},
geJ:function(){var u=this.c,t=this.b+3
return u>t?C.b.C(this.a,t,u-1):""},
gct:function(a){var u=this.c
return u>0?C.b.C(this.a,u,this.d):""},
gbD:function(a){var u,t=this
if(t.ge8()){u=t.d
if(typeof u!=="number")return u.q()
return P.fm(C.b.C(t.a,u+1,t.e),null,null)}if(t.gdc())return 80
if(t.gdd())return 443
return 0},
ges:function(a){return C.b.C(this.a,this.e,this.f)},
gcD:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.X()
return u<t?C.b.C(this.a,u+1,t):""},
ge5:function(){var u=this.r,t=this.a
return u<t.length?C.b.ap(t,u+1):""},
gcE:function(){var u=this,t=u.f
if(typeof t!=="number")return t.X()
if(t>=u.r)return C.a1
t=P.e
return new P.ei(P.me(u.gcD(u)),[t,t])},
ey:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.k(b,"$iF",[P.e,null],"$aF")
u=k.gbJ()
t=u==="file"
s=k.c
r=s>0?C.b.C(k.a,k.b+3,s):""
q=k.ge8()?k.gbD(k):j
s=k.c
if(s>0)p=C.b.C(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.C(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a4(o,"/"))o="/"+o
m=P.lf(j,0,0,b)
n=k.r
l=n<s.length?C.b.ap(s,n+1):j
return new P.cb(u,r,p,q,o,m,l)},
gI:function(a){var u=this.y
return u==null?this.y=C.b.gI(this.a):u},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.U(b).$ila&&this.a===b.i(0)},
i:function(a){return this.a},
$ila:1}
P.jx.prototype={}
W.y.prototype={}
W.fo.prototype={
gl:function(a){return a.length}}
W.dn.prototype={
i:function(a){return String(a)},
$idn:1}
W.fp.prototype={
i:function(a){return String(a)}}
W.co.prototype={$ico:1}
W.bV.prototype={$ibV:1}
W.by.prototype={$iby:1}
W.bW.prototype={
cM:function(a,b,c){if(c!=null)return a.getContext(b,P.oU(c))
return a.getContext(b)},
eM:function(a,b){return this.cM(a,b,null)},
$ibW:1}
W.cr.prototype={$icr:1}
W.bz.prototype={
gl:function(a){return a.length}}
W.ct.prototype={$ict:1}
W.fG.prototype={
gl:function(a){return a.length}}
W.X.prototype={$iX:1}
W.cu.prototype={
gl:function(a){return a.length}}
W.fH.prototype={}
W.b_.prototype={}
W.b0.prototype={}
W.fI.prototype={
gl:function(a){return a.length}}
W.fJ.prototype={
gl:function(a){return a.length}}
W.fM.prototype={
gl:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.fN.prototype={
i:function(a){return String(a)}}
W.dA.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.k(c,"$ial",[P.ac],"$aal")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[[P.al,P.ac]]},
$az:function(){return[[P.al,P.ac]]},
$ii:1,
$ai:function(){return[[P.al,P.ac]]},
$ib:1,
$ab:function(){return[[P.al,P.ac]]},
$aE:function(){return[[P.al,P.ac]]}}
W.dB.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaI(a))+" x "+H.l(this.gaF(a))},
u:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$ial)return!1
return a.left===u.gbC(b)&&a.top===u.gbF(b)&&this.gaI(a)===u.gaI(b)&&this.gaF(a)===u.gaF(b)},
gI:function(a){return W.mo(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(this.gaI(a)),C.e.gI(this.gaF(a)))},
gdG:function(a){return a.bottom},
gaF:function(a){return a.height},
gbC:function(a){return a.left},
gcI:function(a){return a.right},
gbF:function(a){return a.top},
gaI:function(a){return a.width},
$ial:1,
$aal:function(){return[P.ac]}}
W.fO.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.I(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[P.e]},
$az:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aE:function(){return[P.e]}}
W.fP.prototype={
gl:function(a){return a.length}}
W.jv.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return H.h(u[b],"$iV")},
n:function(a,b,c){var u
H.h(c,"$iV")
u=this.b
if(b<0||b>=u.length)return H.f(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var u=this.jZ(this)
return new J.au(u,u.length,[H.t(u,0)])},
$az:function(){return[W.V]},
$ai:function(){return[W.V]},
$ab:function(){return[W.V]}}
W.V.prototype={
giZ:function(a){return new W.jy(a)},
gcg:function(a){return new W.jv(a,a.children)},
gdH:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.X()
if(s<0)s=-s*0
if(typeof r!=="number")return r.X()
if(r<0)r=-r*0
return new P.al(u,t,s,r,[P.ac])},
i:function(a){return a.localName},
ad:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lN
if(u==null){u=H.d([],[W.aA])
t=new W.dW(u)
C.a.h(u,W.mn(null))
C.a.h(u,W.mp())
$.lN=t
d=t}else d=u
u=$.lM
if(u==null){u=new W.f8(d)
$.lM=u
c=u}else{u.a=d
c=u}}if($.bi==null){u=document
t=u.implementation.createHTMLDocument("")
$.bi=t
$.kX=t.createRange()
t=$.bi.createElement("base")
H.h(t,"$ico")
t.href=u.baseURI
$.bi.head.appendChild(t)}u=$.bi
if(u.body==null){t=u.createElement("body")
u.body=H.h(t,"$iby")}u=$.bi
if(!!this.$iby)s=u.body
else{s=u.createElement(a.tagName)
$.bi.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.V(C.Z,a.tagName)){$.kX.selectNodeContents(s)
r=$.kX.createContextualFragment(b)}else{s.innerHTML=b
r=$.bi.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bi.body
if(s==null?u!=null:s!==u)J.lE(s)
c.cN(r)
document.adoptNode(r)
return r},
j6:function(a,b,c){return this.ad(a,b,c,null)},
eP:function(a,b){a.textContent=null
a.appendChild(this.ad(a,b,null,null))},
$iV:1,
geB:function(a){return a.tagName}}
W.fT.prototype={
$1:function(a){return!!J.U(H.h(a,"$iC")).$iV},
$S:21}
W.o.prototype={$io:1}
W.j.prototype={
iQ:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.fm(a,b,c,!1)},
fm:function(a,b,c,d){return a.addEventListener(b,H.cf(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ij:1}
W.aF.prototype={$iaF:1}
W.cx.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaF")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aF]},
$az:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$icx:1,
$aE:function(){return[W.aF]}}
W.fZ.prototype={
gl:function(a){return a.length}}
W.h2.prototype={
gl:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.h7.prototype={
gl:function(a){return a.length}}
W.c0.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iC")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.C]},
$az:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$ic0:1,
$aE:function(){return[W.C]}}
W.bj.prototype={$ibj:1,
gdJ:function(a){return a.data}}
W.cA.prototype={$icA:1}
W.cB.prototype={$icB:1}
W.b3.prototype={$ib3:1}
W.dM.prototype={
i:function(a){return String(a)},
$idM:1}
W.hA.prototype={
gl:function(a){return a.length}}
W.cE.prototype={$icE:1}
W.hB.prototype={
j:function(a,b){return P.bq(a.get(H.I(b)))},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.M(a,new W.hC(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aad:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
W.hC.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.hD.prototype={
j:function(a,b){return P.bq(a.get(H.I(b)))},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.M(a,new W.hE(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aad:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
W.hE.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.aQ.prototype={$iaQ:1}
W.hF.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaQ")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aQ]},
$az:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aE:function(){return[W.aQ]}}
W.ae.prototype={$iae:1}
W.ar.prototype={
gaJ:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.m5("No elements"))
if(t>1)throw H.c(P.m5("More than one element"))
return u.firstChild},
at:function(a,b){var u,t,s,r
H.k(b,"$ii",[W.C],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
n:function(a,b,c){var u,t
H.h(c,"$iC")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
u.replaceChild(c,t[b])},
gU:function(a){var u=this.a.childNodes
return new W.dE(u,u.length,[H.bS(C.a2,u,"E",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$az:function(){return[W.C]},
$ai:function(){return[W.C]},
$ab:function(){return[W.C]}}
W.C.prototype={
jN:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
jR:function(a,b){var u,t
try{u=a.parentNode
J.ni(u,b,a)}catch(t){H.aj(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eR(a):u},
iW:function(a,b){return a.appendChild(H.h(b,"$iC"))},
hV:function(a,b,c){return a.replaceChild(b,c)},
$iC:1}
W.cI.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iC")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.C]},
$az:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$aE:function(){return[W.C]}}
W.aR.prototype={$iaR:1,
gl:function(a){return a.length}}
W.hV.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaR")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aR]},
$az:function(){return[W.aR]},
$ii:1,
$ai:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aE:function(){return[W.aR]}}
W.i4.prototype={
j:function(a,b){return P.bq(a.get(H.I(b)))},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.M(a,new W.i5(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aad:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
W.i5.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.i7.prototype={
gl:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.ii.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaS")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aS]},
$az:function(){return[W.aS]},
$ii:1,
$ai:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aE:function(){return[W.aS]}}
W.aT.prototype={$iaT:1}
W.ij.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaT")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aT]},
$az:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aE:function(){return[W.aT]}}
W.aU.prototype={$iaU:1,
gl:function(a){return a.length}}
W.im.prototype={
j:function(a,b){return a.getItem(H.I(b))},
n:function(a,b,c){a.setItem(b,c)},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga7:function(a){var u=H.d([],[P.e])
this.M(a,new W.io(u))
return u},
gl:function(a){return a.length},
$aad:function(){return[P.e,P.e]},
$iF:1,
$aF:function(){return[P.e,P.e]}}
W.io.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:15}
W.aG.prototype={$iaG:1}
W.b8.prototype={$ib8:1}
W.e6.prototype={
ad:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bK(a,b,c,d)
u=W.ny("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ar(t).at(0,new W.ar(u))
return t}}
W.iu.prototype={
ad:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bK(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.G.ad(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaJ(u)
s.toString
u=new W.ar(s)
r=u.gaJ(u)
t.toString
r.toString
new W.ar(t).at(0,new W.ar(r))
return t}}
W.iv.prototype={
ad:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bK(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.G.ad(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaJ(u)
t.toString
s.toString
new W.ar(t).at(0,new W.ar(s))
return t}}
W.cP.prototype={$icP:1}
W.aV.prototype={$iaV:1}
W.aH.prototype={$iaH:1}
W.ix.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaH")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aH]},
$az:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aE:function(){return[W.aH]}}
W.iy.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaV")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aV]},
$az:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aE:function(){return[W.aV]}}
W.iD.prototype={
gl:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.aX.prototype={$iaX:1}
W.iH.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaW")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aW]},
$az:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aE:function(){return[W.aW]}}
W.iI.prototype={
gl:function(a){return a.length}}
W.bO.prototype={}
W.j4.prototype={
i:function(a){return String(a)}}
W.jm.prototype={
gl:function(a){return a.length}}
W.bd.prototype={
gj9:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.J("deltaY is not supported"))},
gj8:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.J("deltaX is not supported"))},
$ibd:1}
W.d2.prototype={
hW:function(a,b){return a.requestAnimationFrame(H.cf(H.n(b,{func:1,ret:-1,args:[P.ac]}),1))},
fE:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d3.prototype={$id3:1}
W.jw.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iX")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.X]},
$az:function(){return[W.X]},
$ii:1,
$ai:function(){return[W.X]},
$ib:1,
$ab:function(){return[W.X]},
$aE:function(){return[W.X]}}
W.eq.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
u:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$ial)return!1
return a.left===u.gbC(b)&&a.top===u.gbF(b)&&a.width===u.gaI(b)&&a.height===u.gaF(b)},
gI:function(a){return W.mo(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(a.width),C.e.gI(a.height))},
gaF:function(a){return a.height},
gaI:function(a){return a.width}}
W.jL.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaN")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aN]},
$az:function(){return[W.aN]},
$ii:1,
$ai:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aE:function(){return[W.aN]}}
W.eI.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iC")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.C]},
$az:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$aE:function(){return[W.C]}}
W.jZ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaU")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aU]},
$az:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aE:function(){return[W.aU]}}
W.k2.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaG")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aG]},
$az:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aE:function(){return[W.aG]}}
W.ju.prototype={
M:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.ga7(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.D)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga7:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.e])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.f(r,t)
s=H.h(r[t],"$id3")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aad:function(){return[P.e,P.e]},
$aF:function(){return[P.e,P.e]}}
W.jy.prototype={
j:function(a,b){return this.a.getAttribute(H.I(b))},
n:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga7(this).length}}
W.jz.prototype={}
W.ld.prototype={}
W.jA.prototype={}
W.jB.prototype={
$1:function(a){return this.a.$1(H.h(a,"$io"))},
$S:34}
W.bQ.prototype={
f3:function(a){var u
if($.d5.gjq($.d5)){for(u=0;u<262;++u)$.d5.n(0,C.Y[u],W.p6())
for(u=0;u<12;++u)$.d5.n(0,C.v[u],W.p7())}},
aR:function(a){return $.nc().V(0,W.cv(a))},
au:function(a,b,c){var u=$.d5.j(0,H.l(W.cv(a))+"::"+b)
if(u==null)u=$.d5.j(0,"*::"+b)
if(u==null)return!1
return H.ll(u.$4(a,b,c,this))},
$iaA:1}
W.E.prototype={
gU:function(a){return new W.dE(a,this.gl(a),[H.bS(this,a,"E",0)])}}
W.dW.prototype={
aR:function(a){return C.a.dA(this.a,new W.hN(a))},
au:function(a,b,c){return C.a.dA(this.a,new W.hM(a,b,c))},
$iaA:1}
W.hN.prototype={
$1:function(a){return H.h(a,"$iaA").aR(this.a)},
$S:24}
W.hM.prototype={
$1:function(a){return H.h(a,"$iaA").au(this.a,this.b,this.c)},
$S:24}
W.eQ.prototype={
fe:function(a,b,c,d){var u,t,s
this.a.at(0,c)
u=b.bG(0,new W.jW())
t=b.bG(0,new W.jX())
this.b.at(0,u)
s=this.c
s.at(0,C.B)
s.at(0,t)},
aR:function(a){return this.a.V(0,W.cv(a))},
au:function(a,b,c){var u=this,t=W.cv(a),s=u.c
if(s.V(0,H.l(t)+"::"+b))return u.d.iU(c)
else if(s.V(0,"*::"+b))return u.d.iU(c)
else{s=u.b
if(s.V(0,H.l(t)+"::"+b))return!0
else if(s.V(0,"*::"+b))return!0
else if(s.V(0,H.l(t)+"::*"))return!0
else if(s.V(0,"*::*"))return!0}return!1},
$iaA:1}
W.jW.prototype={
$1:function(a){return!C.a.V(C.v,H.I(a))},
$S:25}
W.jX.prototype={
$1:function(a){return C.a.V(C.v,H.I(a))},
$S:25}
W.k4.prototype={
au:function(a,b,c){if(this.eW(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.V(0,b)
return!1}}
W.k5.prototype={
$1:function(a){return"TEMPLATE::"+H.l(H.I(a))},
$S:16}
W.k3.prototype={
aR:function(a){var u=J.U(a)
if(!!u.$icK)return!1
u=!!u.$iq
if(u&&W.cv(a)==="foreignObject")return!1
if(u)return!0
return!1},
au:function(a,b,c){if(b==="is"||C.b.a4(b,"on"))return!1
return this.aR(a)},
$iaA:1}
W.dE.prototype={
D:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sda(J.lB(u.a,t))
u.c=t
return!0}u.sda(null)
u.c=s
return!1},
gK:function(a){return this.d},
sda:function(a){this.d=H.A(a,H.t(this,0))},
$ib2:1}
W.aA.prototype={}
W.jU.prototype={$ipN:1}
W.f8.prototype={
cN:function(a){new W.kf(this).$2(a,null)},
b0:function(a,b){if(b==null)J.lE(a)
else b.removeChild(a)},
i0:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nm(a)
n=o.a.getAttribute("is")
H.h(a,"$iV")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.H(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.aj(r)}t="element unprintable"
try{t=J.at(a)}catch(r){H.aj(r)}try{s=W.cv(a)
this.i_(H.h(a,"$iV"),b,p,t,s,H.h(o,"$iF"),H.I(n))}catch(r){if(H.aj(r) instanceof P.aL)throw r
else{this.b0(a,b)
window
q="Removing corrupted element "+H.l(t)
if(typeof console!="undefined")window.console.warn(q)}}},
i_:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b0(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aR(a)){o.b0(a,b)
window
u="Removing disallowed element <"+H.l(e)+"> from "+H.l(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.au(a,"is",g)){o.b0(a,b)
window
u="Removing disallowed type extension <"+H.l(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga7(f)
t=H.d(u.slice(0),[H.t(u,0)])
for(s=f.ga7(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.f(t,s)
r=t[s]
q=o.a
p=J.np(r)
H.I(r)
if(!q.au(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.l(e)+" "+r+'="'+H.l(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.U(a).$icP)o.cN(a.content)},
$ipx:1}
W.kf.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.i0(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b0(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aj(s)
r=H.h(u,"$iC")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.h(t,"$iC")}},
$S:44}
W.ep.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.da.prototype={}
W.db.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eW.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fi.prototype={}
P.k_.prototype={
e4:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cL:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.U(a)
if(!!u.$iay)return new Date(a.a)
if(!!u.$io1)throw H.c(P.iX("structured clone of RegExp"))
if(!!u.$iaF)return a
if(!!u.$ibV)return a
if(!!u.$icx)return a
if(!!u.$ibj)return a
if(!!u.$icF||!!u.$ibI||!!u.$icE)return a
if(!!u.$iF){t=q.e4(a)
s=q.b
if(t>=s.length)return H.f(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.n(s,t,r)
u.M(a,new P.k1(p,q))
return p.a}if(!!u.$ib){t=q.e4(a)
p=q.b
if(t>=p.length)return H.f(p,t)
r=p[t]
if(r!=null)return r
return q.j5(a,t)}throw H.c(P.iX("structured clone of other type"))},
j5:function(a,b){var u,t=J.ci(a),s=t.gl(a),r=new Array(s)
C.a.n(this.b,b,r)
for(u=0;u<s;++u)C.a.n(r,u,this.cL(t.j(a,u)))
return r}}
P.k1.prototype={
$2:function(a,b){this.a.a[a]=this.b.cL(b)},
$S:7}
P.f5.prototype={$ibj:1,
gdJ:function(a){return this.a}}
P.kq.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.k0.prototype={}
P.h_.prototype={
gbh:function(){var u=this.b,t=H.as(u,"z",0),s=W.V
return new H.hr(new H.d1(u,H.n(new P.h0(),{func:1,ret:P.T,args:[t]}),[t]),H.n(new P.h1(),{func:1,ret:s,args:[t]}),[t,s])},
n:function(a,b,c){var u
H.h(c,"$iV")
u=this.gbh()
J.nn(u.b.$1(J.fn(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aD(this.gbh().a)},
j:function(a,b){var u=this.gbh()
return u.b.$1(J.fn(u.a,b))},
gU:function(a){var u=P.lQ(this.gbh(),!1,W.V)
return new J.au(u,u.length,[H.t(u,0)])},
$az:function(){return[W.V]},
$ai:function(){return[W.V]},
$ab:function(){return[W.V]}}
P.h0.prototype={
$1:function(a){return!!J.U(H.h(a,"$iC")).$iV},
$S:21}
P.h1.prototype={
$1:function(a){return H.m(H.h(a,"$iC"),"$iV")},
$S:33}
P.jP.prototype={
gcI:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.G(t)
return H.A(u+t,H.t(this,0))},
gdG:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.G(t)
return H.A(u+t,H.t(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.l(u.a)+", "+H.l(u.b)+") "+H.l(u.c)+" x "+H.l(u.d)},
u:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.U(b)
if(!!u.$ial){t=p.a
if(t==u.gbC(b)){s=p.b
if(s==u.gbF(b)){r=p.c
if(typeof t!=="number")return t.q()
if(typeof r!=="number")return H.G(r)
q=H.t(p,0)
if(H.A(t+r,q)===u.gcI(b)){t=p.d
if(typeof s!=="number")return s.q()
if(typeof t!=="number")return H.G(t)
u=H.A(s+t,q)===u.gdG(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t=this,s=t.a,r=J.dm(s),q=t.b,p=J.dm(q),o=t.c
if(typeof s!=="number")return s.q()
if(typeof o!=="number")return H.G(o)
u=H.t(t,0)
o=C.f.gI(H.A(s+o,u))
s=t.d
if(typeof q!=="number")return q.q()
if(typeof s!=="number")return H.G(s)
u=C.f.gI(H.A(q+s,u))
return P.op(P.jN(P.jN(P.jN(P.jN(0,r),p),o),u))}}
P.al.prototype={
gbC:function(a){return this.a},
gbF:function(a){return this.b},
gaI:function(a){return this.c},
gaF:function(a){return this.d}}
P.b4.prototype={$ib4:1}
P.hg.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.h(c,"$ib4")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$az:function(){return[P.b4]},
$ii:1,
$ai:function(){return[P.b4]},
$ib:1,
$ab:function(){return[P.b4]},
$aE:function(){return[P.b4]}}
P.b6.prototype={$ib6:1}
P.hQ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.h(c,"$ib6")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$az:function(){return[P.b6]},
$ii:1,
$ai:function(){return[P.b6]},
$ib:1,
$ab:function(){return[P.b6]},
$aE:function(){return[P.b6]}}
P.hX.prototype={
gl:function(a){return a.length}}
P.cK.prototype={$icK:1}
P.it.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.I(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$az:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aE:function(){return[P.e]}}
P.q.prototype={
gcg:function(a){return new P.h_(a,new W.ar(a))},
ad:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aA])
C.a.h(p,W.mn(null))
C.a.h(p,W.mp())
C.a.h(p,new W.k3())
c=new W.f8(new W.dW(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.x).j6(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ar(s)
q=p.gaJ(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$iq:1}
P.ba.prototype={$iba:1}
P.iJ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.h(c,"$iba")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$az:function(){return[P.ba]},
$ii:1,
$ai:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aE:function(){return[P.ba]}}
P.eA.prototype={}
P.eB.prototype={}
P.eL.prototype={}
P.eM.prototype={}
P.eX.prototype={}
P.eY.prototype={}
P.f3.prototype={}
P.f4.prototype={}
P.S.prototype={$ii:1,
$ai:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]},
$io9:1}
P.fs.prototype={
gl:function(a){return a.length}}
P.ft.prototype={
j:function(a,b){return P.bq(a.get(H.I(b)))},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.M(a,new P.fu(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aad:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
P.fu.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
P.fv.prototype={
gl:function(a){return a.length}}
P.bU.prototype={}
P.hR.prototype={
gl:function(a){return a.length}}
P.eo.prototype={}
P.dr.prototype={$idr:1}
P.e_.prototype={$ie_:1}
P.c8.prototype={
jW:function(a,b,c,d,e,f,g){var u,t=J.U(g)
if(!!t.$ibj)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.oV(g))
return}if(!!t.$icA)t=!0
else t=!1
if(t){this.ic(a,b,c,d,e,f,g)
return}throw H.c(P.dp("Incorrect number or type of arguments"))},
ic:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
S:function(a,b,c){return a.uniform1f(b,c)},
a2:function(a,b,c){return a.uniform1i(b,c)},
v:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eG:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eH:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic8:1}
P.e2.prototype={$ie2:1}
P.e8.prototype={$ie8:1}
P.eg.prototype={$ieg:1}
P.ik.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return P.bq(a.item(b))},
n:function(a,b,c){H.h(c,"$iF")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$az:function(){return[[P.F,,,]]},
$ii:1,
$ai:function(){return[[P.F,,,]]},
$ib:1,
$ab:function(){return[[P.F,,,]]},
$aE:function(){return[[P.F,,,]]}}
P.eT.prototype={}
P.eU.prototype={}
O.a6.prototype={
bM:function(a){var u=this
u.sfP(H.d([],[a]))
u.sdi(null)
u.sdf(null)
u.sdj(null)},
cO:function(a,b,c){var u=this,t=H.as(u,"a6",0)
H.n(b,{func:1,ret:P.T,args:[[P.i,t]]})
t={func:1,ret:-1,args:[P.p,[P.i,t]]}
H.n(a,t)
H.n(c,t)
u.sdi(b)
u.sdf(a)
u.sdj(c)},
bc:function(a,b){return this.cO(a,null,b)},
hB:function(a){var u
H.k(a,"$ii",[H.as(this,"a6",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
h_:function(a,b){var u
H.k(b,"$ii",[H.as(this,"a6",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.au(u,u.length,[H.t(u,0)])},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.as(s,"a6",0)
H.A(b,r)
r=[r]
if(H.H(s.hB(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.h_(t,H.d([b],r))}},
sfP:function(a){this.a=H.k(a,"$ib",[H.as(this,"a6",0)],"$ab")},
sdi:function(a){this.b=H.n(a,{func:1,ret:P.T,args:[[P.i,H.as(this,"a6",0)]]})},
sdf:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.p,[P.i,H.as(this,"a6",0)]]})},
sdj:function(a){H.n(a,{func:1,ret:-1,args:[P.p,[P.i,H.as(this,"a6",0)]]})},
$ii:1}
O.cD.prototype={
gl:function(a){return this.a.length},
gB:function(){var u=this.b
return u==null?this.b=D.Z():u},
aK:function(){var u=this.b
if(u!=null)u.L(null)},
ga_:function(a){var u=this.a
if(u.length>0)return C.a.gax(u)
else return V.dS()},
ev:function(a){var u=this.a
if(a==null)C.a.h(u,V.dS())
else C.a.h(u,a)
this.aK()},
cB:function(){var u=this.a
if(u.length>0){u.pop()
this.aK()}},
sbV:function(a){this.a=H.k(a,"$ib",[V.ao],"$ab")}}
E.fy.prototype={}
E.an.prototype={
cZ:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.au(u,u.length,[H.t(u,0)]);u.D();){t=u.d
if(t.f==null)t.cZ()}},
sa9:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gB().N(0,s.gen())
u=s.c
if(u!=null)u.gB().h(0,s.gen())
t=new D.P("shape",r,s.c,[F.e3])
t.b=!0
s.al(t)}},
sb8:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gB().N(0,s.gep())
u=s.f
s.f=a
if(a!=null)a.gB().h(0,s.gep())
s.cZ()
t=new D.P("technique",u,s.f,[O.bM])
t.b=!0
s.al(t)}},
saT:function(a){var u,t,s=this
if(!J.W(s.r,a)){u=s.r
if(u!=null)u.gB().N(0,s.gel())
if(a!=null)a.gB().h(0,s.gel())
s.r=a
t=new D.P("mover",u,a,[U.ak])
t.b=!0
s.al(t)}},
az:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aX(0,b,s):null
if(!J.W(q,s.x)){u=s.x
s.x=q
t=new D.P("matrix",u,q,[V.ao])
t.b=!0
s.al(t)}r=s.f
if(r!=null)r.az(0,b)
for(r=s.y.a,r=new J.au(r,r.length,[H.t(r,0)]);r.D();)r.d.az(0,b)},
aU:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga_(s))
else C.a.h(s.a,r.E(0,s.ga_(s)))
s.aK()
a.ew(t.f)
s=a.dy
u=(s&&C.a).gax(s)
if(u!=null&&t.d!=null)u.jQ(a,t)
for(s=t.y.a,s=new J.au(s,s.length,[H.t(s,0)]);s.D();)s.d.aU(a)
a.eu()
a.dx.cB()},
gB:function(){var u=this.z
return u==null?this.z=D.Z():u},
al:function(a){var u=this.z
if(u!=null)u.L(a)},
a1:function(){return this.al(null)},
eo:function(a){H.h(a,"$iB")
this.e=null
this.al(a)},
jD:function(){return this.eo(null)},
eq:function(a){this.al(H.h(a,"$iB"))},
jE:function(){return this.eq(null)},
em:function(a){this.al(H.h(a,"$iB"))},
jC:function(){return this.em(null)},
ek:function(a){this.al(H.h(a,"$iB"))},
jz:function(){return this.ek(null)},
jy:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ii",[E.an],"$ai")
for(u=b.length,t=this.gej(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bZ()
o.sah(null)
o.saO(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sah(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a1()},
jB:function(a,b){var u,t
H.k(b,"$ii",[E.an],"$ai")
for(u=b.gU(b),t=this.gej();u.D();)u.gK(u).gB().N(0,t)
this.a1()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sf2:function(a,b){this.y=H.k(b,"$ia6",[E.an],"$aa6")},
$ibo:1}
E.i0.prototype={
eZ:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ay(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cD()
t=[V.ao]
u.sbV(H.d([],t))
u.b=null
u.gB().h(0,new E.i1(s))
s.cy=u
u=new O.cD()
u.sbV(H.d([],t))
u.b=null
u.gB().h(0,new E.i2(s))
s.db=u
u=new O.cD()
u.sbV(H.d([],t))
u.b=null
u.gB().h(0,new E.i3(s))
s.dx=u
s.sib(H.d([],[O.bM]))
u=s.dy;(u&&C.a).h(u,null)
s.si7(new H.aP([P.e,A.cL]))},
gjM:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga_(s)
u=t.db
u=t.z=s.E(0,u.ga_(u))
s=u}return s},
ew:function(a){var u=this.dy,t=a==null?(u&&C.a).gax(u):a;(u&&C.a).h(u,t)},
eu:function(){var u=this.dy
if(u.length>1)u.pop()},
sib:function(a){this.dy=H.k(a,"$ib",[O.bM],"$ab")},
si7:function(a){this.fr=H.k(a,"$iF",[P.e,A.cL],"$aF")}}
E.i1.prototype={
$1:function(a){var u
H.h(a,"$iB")
u=this.a
u.ch=u.z=null},
$S:5}
E.i2.prototype={
$1:function(a){var u
H.h(a,"$iB")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:5}
E.i3.prototype={
$1:function(a){var u
H.h(a,"$iB")
u=this.a
u.cx=u.ch=null},
$S:5}
E.ec.prototype={
cT:function(a){H.h(a,"$iB")
this.ez()},
cS:function(){return this.cT(null)},
gjl:function(){var u,t=this,s=Date.now(),r=C.f.a6(P.lL(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ay(s,!1)
return u/r},
dm:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.E()
if(typeof r!=="number")return H.G(r)
u=C.e.cs(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.E()
t=C.e.cs(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.m8(C.t,s.gjS())}},
ez:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iC(this),{func:1,ret:-1,args:[P.ac]})
C.I.fE(u)
C.I.hW(u,W.mE(t,P.ac))}},
jP:function(){var u,t,s,r,q,p=this
try{++p.cy
p.ch=!1
p.dm()
if(p.d!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ay(r,!1)
s.y=P.lL(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aK()
r=s.db
C.a.sl(r.a,0)
r.aK()
r=s.dx
C.a.sl(r.a,0)
r.aK()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
p.d.aU(p.e)}s=p.z
if(s!=null)s.L(null)}catch(q){u=H.aj(q)
t=H.ck(q)
P.lv("Error: "+H.l(u))
P.lv("Stack: "+H.l(t))
throw H.c(u)}}}
E.iC.prototype={
$1:function(a){var u
H.ph(a)
u=this.a
if(u.ch){u.ch=!1
u.jP()}},
$S:53}
Z.em.prototype={$ipr:1}
Z.ds.prototype={
ca:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aj(s)
t=P.w('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.l(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.l(u.e)+"]"}}
Z.jn.prototype={$ips:1}
Z.dt.prototype={
aS:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
ca:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].ca(a)},
k5:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aU:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.f(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.e],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.at(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfL:function(a){this.b=H.k(a,"$ib",[Z.bE],"$ab")},
$ipB:1}
Z.bE.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c5(this.c)+"'")+"]"}}
Z.bc.prototype={
gcP:function(a){var u=this.a,t=(u&$.bu().a)!==0?3:0
if((u&$.bt().a)!==0)t+=3
if((u&$.bs().a)!==0)t+=3
if((u&$.bv().a)!==0)t+=2
if((u&$.bw().a)!==0)t+=3
if((u&$.dk().a)!==0)t+=3
if((u&$.dl().a)!==0)t+=4
if((u&$.cn().a)!==0)++t
return(u&$.br().a)!==0?t+4:t},
iX:function(a){var u,t=$.bu(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bt()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.br()
if((s&t.a)!==0)if(u===a)return t
return $.na()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bc))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.e]),t=this.a
if((t&$.bu().a)!==0)C.a.h(u,"Pos")
if((t&$.bt().a)!==0)C.a.h(u,"Norm")
if((t&$.bs().a)!==0)C.a.h(u,"Binm")
if((t&$.bv().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bw().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dk().a)!==0)C.a.h(u,"Clr3")
if((t&$.dl().a)!==0)C.a.h(u,"Clr4")
if((t&$.cn().a)!==0)C.a.h(u,"Weight")
if((t&$.br().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fB.prototype={}
D.bZ.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.B]}
H.n(b,u)
if(this.a==null)this.sah(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
N:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.B]})
u=s.a
u=u==null?null:C.a.V(u,b)
if(u===!0){u=s.a
t=(u&&C.a).N(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.V(u,b)
if(u===!0){u=s.b
t=(u&&C.a).N(u,b)||t}return t},
L:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.B()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.M(P.lQ(u,!0,{func:1,ret:-1,args:[D.B]}),new D.fW(q))
u=r.b
if(u!=null){r.saO(H.d([],[{func:1,ret:-1,args:[D.B]}]))
C.a.M(u,new D.fX(q))}return!0},
jd:function(){return this.L(null)},
am:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.L(u)}}},
sah:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")},
saO:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")}}
D.fW.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:31}
D.fX.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:31}
D.B.prototype={}
D.c1.prototype={}
D.c2.prototype={}
D.P.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.du.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.du))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.dJ.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dJ))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.hf.prototype={
jJ:function(a){this.d.h(0,a.a)
return!1},
jF:function(a){this.d.N(0,a.a)
return!1},
shP:function(a){this.d=H.k(a,"$im4",[P.p],"$am4")}}
X.dN.prototype={}
X.hn.prototype={
aZ:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.E()
u=b.b
t=q.ch
if(typeof u!=="number")return u.E()
s=new V.aa(o.a+n*m,o.b+u*t)
t=q.a.gbk()
r=new X.bH(a,V.bK(),q.x,t,s)
r.b=!0
q.z=new P.ay(p,!1)
q.x=s
return r},
cA:function(a,b){this.r=a.a
return!1},
b7:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eO()
if(typeof u!=="number")return u.bH()
this.r=(u&~t)>>>0
return!1},
b6:function(a,b){var u=this.d
if(u==null)return!1
u.L(this.aZ(a,b))
return!0},
jK:function(a){return!1},
hq:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dN(c,r.a.gbk(),b)
s.b=!0
t.L(s)
r.y=new P.ay(u,!1)
r.x=V.bK()}}
X.bG.prototype={
u:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bG))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.H(this.b)?"Alt+":""
return u+(H.H(this.c)?"Shift+":"")}}
X.bH.prototype={}
X.hG.prototype={
bS:function(a,b,c){var u=this,t=new P.ay(Date.now(),!1),s=u.a.gbk(),r=new X.bH(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cA:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.L(this.bS(a,b,!0))
return!0},
b7:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eO()
if(typeof t!=="number")return t.bH()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.L(u.bS(a,b,!0))
return!0},
b6:function(a,b){var u=this.d
if(u==null)return!1
u.L(this.bS(a,b,!1))
return!0},
jL:function(a,b){return!1}}
X.hW.prototype={}
X.ee.prototype={}
X.iG.prototype={
aZ:function(a,b){var u,t,s,r,q=this
H.k(a,"$ib",[V.aa],"$ab")
u=new P.ay(Date.now(),!1)
t=a.length>0?a[0]:V.bK()
s=q.a.gbk()
r=new X.ee(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
jI:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.b
if(u==null)return!1
u.L(this.aZ(a,!0))
return!0},
jG:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.c
if(u==null)return!1
u.L(this.aZ(a,!0))
return!0},
jH:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.d
if(u==null)return!1
u.L(this.aZ(a,!1))
return!0}}
X.ej.prototype={
gbk:function(){var u=this.a,t=C.m.gdH(u).c
t.toString
u=C.m.gdH(u).d
u.toString
return V.m2(0,0,t,u)},
d5:function(a){var u=a.keyCode,t=H.H(a.ctrlKey)||H.H(a.metaKey)
return new X.dJ(u,new X.bG(t,a.altKey,a.shiftKey))},
aP:function(a){if(!H.H(a.ctrlKey))H.H(a.metaKey)
a.shiftKey},
c6:function(a){if(!H.H(a.ctrlKey))H.H(a.metaKey)
a.shiftKey},
aD:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.t()
u=t.top
if(typeof r!=="number")return r.t()
return new V.aa(s-q,r-u)},
b_:function(a){return new V.a4(a.movementX,a.movementY)},
c0:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.aa])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
q=C.e.an(r.pageX)
C.e.an(r.pageY)
p=o.left
C.e.an(r.pageX)
C.a.h(n,new V.aa(q-p,C.e.an(r.pageY)-o.top))}return n},
aB:function(a){var u=a.buttons,t=H.H(a.ctrlKey)||H.H(a.metaKey)
return new X.du(u,new X.bG(t,a.altKey,a.shiftKey))},
bW:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.t()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.t()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
hk:function(a){this.f=!0},
h7:function(a){this.f=!1},
he:function(a){H.h(a,"$iae")
if(H.H(this.f)&&this.bW(a))a.preventDefault()},
ho:function(a){var u
H.h(a,"$ib3")
if(!H.H(this.f))return
u=this.d5(a)
this.b.jJ(u)},
hm:function(a){var u
H.h(a,"$ib3")
if(!H.H(this.f))return
u=this.d5(a)
this.b.jF(u)},
hs:function(a){var u,t,s,r,q=this
H.h(a,"$iae")
u=q.a
u.focus()
q.f=!0
q.aP(a)
if(H.H(q.x)){t=q.aB(a)
s=q.b_(a)
if(q.d.cA(t,s))a.preventDefault()
return}if(H.H(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aB(a)
r=q.aD(a)
if(q.c.cA(t,r))a.preventDefault()},
hw:function(a){var u,t,s,r=this
H.h(a,"$iae")
r.aP(a)
u=r.aB(a)
if(H.H(r.x)){t=r.b_(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aD(a)
if(r.c.b7(u,s))a.preventDefault()},
hi:function(a){var u,t,s,r=this
H.h(a,"$iae")
if(!r.bW(a)){r.aP(a)
u=r.aB(a)
if(H.H(r.x)){t=r.b_(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aD(a)
if(r.c.b7(u,s))a.preventDefault()}},
hu:function(a){var u,t,s,r=this
H.h(a,"$iae")
r.aP(a)
u=r.aB(a)
if(H.H(r.x)){t=r.b_(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aD(a)
if(r.c.b6(u,s))a.preventDefault()},
hg:function(a){var u,t,s,r=this
H.h(a,"$iae")
if(!r.bW(a)){r.aP(a)
u=r.aB(a)
if(H.H(r.x)){t=r.b_(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aD(a)
if(r.c.b6(u,s))a.preventDefault()}},
hy:function(a){var u,t,s=this
H.h(a,"$ibd")
s.aP(a)
u=new V.a4((a&&C.H).gj8(a),C.H.gj9(a)).w(0,180)
if(H.H(s.x)){if(s.d.jK(u))a.preventDefault()
return}if(H.H(s.r))return
t=s.aD(a)
if(s.c.jL(u,t))a.preventDefault()},
hA:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aB(s.y)
t=s.aD(s.y)
s.d.hq(u,t,r)}},
hN:function(a){var u,t=this
H.h(a,"$iaX")
t.a.focus()
t.f=!0
t.c6(a)
u=t.c0(a)
if(t.e.jI(u))a.preventDefault()},
hJ:function(a){var u
H.h(a,"$iaX")
this.c6(a)
u=this.c0(a)
if(this.e.jG(u))a.preventDefault()},
hL:function(a){var u
H.h(a,"$iaX")
this.c6(a)
u=this.c0(a)
if(this.e.jH(u))a.preventDefault()},
sfF:function(a){this.z=H.k(a,"$ib",[[P.cN,P.R]],"$ab")}}
D.dz.prototype={$ia8:1,$ibo:1}
D.a8.prototype={$ibo:1}
D.dK.prototype={
gB:function(){var u=this.Q
return u==null?this.Q=D.Z():u},
a5:function(a){var u=this.Q
if(u!=null)u.L(a)},
dh:function(a){var u
H.h(a,"$iB")
u=this.ch
if(u!=null)u.L(a)},
hp:function(){return this.dh(null)},
hD:function(a){var u,t,s
H.k(a,"$ii",[D.a8],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.D)(a),++t){s=a[t]
if(s==null||this.f4(s))return!1}return!0},
h1:function(a,b){var u,t,s,r,q,p,o,n=D.a8
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gdg(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=H.h(b[q],"$ia8")
if(p instanceof D.bN)C.a.h(this.z,p)
o=p.db
if(o==null){o=new D.bZ()
o.sah(null)
o.saO(null)
o.c=null
o.d=0
p.db=o}H.n(t,s)
if(o.a==null)o.sah(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.c1([n])
n.b=!0
this.a5(n)},
hH:function(a,b){var u,t,s,r=D.a8
H.k(b,"$ii",[r],"$ai")
for(u=b.gU(b),t=this.gdg();u.D();){s=u.gK(u)
C.a.N(this.e,s)
s.gB().N(0,t)}r=new D.c2([r])
r.b=!0
this.a5(r)},
f4:function(a){var u=C.a.V(this.z,a)
return u},
sf5:function(a){this.e=H.k(a,"$ib",[D.dz],"$ab")},
sf6:function(a){this.f=H.k(a,"$ib",[D.dZ],"$ab")},
sf7:function(a){this.r=H.k(a,"$ib",[D.e4],"$ab")},
sf8:function(a){this.x=H.k(a,"$ib",[D.ea],"$ab")},
sf9:function(a){this.y=H.k(a,"$ib",[D.eb],"$ab")},
sfa:function(a){this.z=H.k(a,"$ib",[D.bN],"$ab")},
$ai:function(){return[D.a8]},
$aa6:function(){return[D.a8]}}
D.dZ.prototype={$ia8:1,$ibo:1}
D.e4.prototype={$ia8:1,$ibo:1}
D.ea.prototype={$ia8:1,$ibo:1}
D.eb.prototype={$ia8:1,$ibo:1}
D.bN.prototype={
gB:function(){var u=this.db
return u==null?this.db=D.Z():u},
a5:function(a){var u
H.h(a,"$iB")
u=this.db
if(u!=null)u.L(a)},
h8:function(){return this.a5(null)},
$ia8:1,
$ibo:1}
V.a5.prototype={
q:function(a,b){var u=C.e.q(this.a,b.gcF()),t=C.e.q(this.b,b.gbI()),s=C.e.q(this.c,b.gcc())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a5(u,t,s)},
t:function(a,b){var u=C.e.t(this.a,b.gcF()),t=C.e.t(this.b,b.gbI()),s=C.e.t(this.c,b.gcc())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a5(u,t,s)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+", "+V.Y(this.c,3,0)+"]"}}
V.aM.prototype={
q:function(a,b){var u=this,t=C.e.q(u.a,b.gcF()),s=C.e.q(u.b,b.gbI()),r=C.e.q(u.c,b.gcc()),q=C.e.q(u.d,b.giV(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aM(t,s,r,q)},
t:function(a,b){var u=this,t=C.e.t(u.a,b.gcF()),s=C.e.t(u.b,b.gbI()),r=C.e.t(u.c,b.gcc()),q=C.e.t(u.d,b.giV(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aM(t,s,r,q)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aM))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Y(u.a,3,0)+", "+V.Y(u.b,3,0)+", "+V.Y(u.c,3,0)+", "+V.Y(u.d,3,0)+"]"}}
V.fV.prototype={}
V.dR.prototype={
ag:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.r])
return t},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dR))return!1
u=b.a
t=$.N().a
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
i:function(a){var u,t,s,r,q=this,p=[P.r],o=V.ch(H.d([q.a,q.d,q.r],p),3,0),n=V.ch(H.d([q.b,q.e,q.x],p),3,0),m=V.ch(H.d([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.f(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.f(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.f(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.f(o,1)
r=" "+o[1]+", "
if(1>=t)return H.f(n,1)
r=r+n[1]+", "
if(1>=s)return H.f(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.f(o,2)
p=" "+o[2]+", "
if(2>=t)return H.f(n,2)
p=p+n[2]+", "
if(2>=s)return H.f(m,2)
return r+(p+m[2]+"]")}}
V.ao.prototype={
ag:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.r])
return t},
ec:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.N().a)return V.dS()
u=1/b1
t=-n
s=-a0
return V.bn((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
E:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.bn(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
ba:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.K(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
aW:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a2(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ao))return!1
u=b.a
t=$.N().a
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
i:function(a){return this.P()},
H:function(a){var u,t,s,r,q,p=this,o=[P.r],n=V.ch(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.ch(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.ch(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.ch(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.f(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.f(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.f(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.f(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.f(n,1)
q=q+n[1]+", "
if(1>=t)return H.f(m,1)
q=q+m[1]+", "
if(1>=s)return H.f(l,1)
q=q+l[1]+", "
if(1>=r)return H.f(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.f(n,2)
u=u+n[2]+", "
if(2>=t)return H.f(m,2)
u=u+m[2]+", "
if(2>=s)return H.f(l,2)
u=u+l[2]+", "
if(2>=r)return H.f(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.f(n,3)
q=q+n[3]+", "
if(3>=t)return H.f(m,3)
q=q+m[3]+", "
if(3>=s)return H.f(l,3)
q=q+l[3]+", "
if(3>=r)return H.f(k,3)
return u+(q+k[3]+"]")},
P:function(){return this.H("")}}
V.aa.prototype={
q:function(a,b){return new V.aa(this.a+b.a,this.b+b.b)},
t:function(a,b){return new V.aa(this.a-b.a,this.b-b.b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+"]"}}
V.a2.prototype={
q:function(a,b){return new V.a2(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.a2(this.a-b.a,this.b-b.b,this.c-b.c)},
E:function(a,b){return new V.a2(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+", "+V.Y(this.c,3,0)+"]"}}
V.b7.prototype={
q:function(a,b){var u=this
return new V.b7(C.e.q(u.a,b.gk7(b)),C.e.q(u.b,b.gk8(b)),C.e.q(u.c,b.gk9(b)),C.e.q(u.d,b.gk6(b)))},
t:function(a,b){var u=this
return new V.b7(C.e.t(u.a,b.gk7(b)),C.e.t(u.b,b.gk8(b)),C.e.t(u.c,b.gk9(b)),C.e.t(u.d,b.gk6(b)))},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b7))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Y(u.a,3,0)+", "+V.Y(u.b,3,0)+", "+V.Y(u.c,3,0)+", "+V.Y(u.d,3,0)+"]"}}
V.e1.prototype={
gay:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e1))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Y(u.a,3,0)+", "+V.Y(u.b,3,0)+", "+V.Y(u.c,3,0)+", "+V.Y(u.d,3,0)+"]"}}
V.a4.prototype={
cw:function(a){return Math.sqrt(this.G(this))},
G:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.E()
if(typeof r!=="number")return H.G(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.G(t)
return s*r+u*t},
q:function(a,b){var u,t=this.a,s=b.gjb(b)
if(typeof t!=="number")return t.q()
s=C.e.q(t,s)
t=this.b
u=b.gjc(b)
if(typeof t!=="number")return t.q()
return new V.a4(s,C.e.q(t,u))},
t:function(a,b){var u,t=this.a,s=b.gjb(b)
if(typeof t!=="number")return t.t()
s=C.e.t(t,s)
t=this.b
u=b.gjc(b)
if(typeof t!=="number")return t.t()
return new V.a4(s,C.e.t(t,u))},
E:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.E()
u=this.b
if(typeof u!=="number")return u.E()
return new V.a4(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.N().a){u=$.mg
return u==null?$.mg=new V.a4(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.a4(u/b,t/b)},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=this.a
s=$.N()
s.toString
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.G(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.G(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+"]"}}
V.K.prototype={
cw:function(a){return Math.sqrt(this.G(this))},
G:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cz:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.K(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aE:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.K(u*t-s*r,s*q-p*t,p*r-u*q)},
q:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.K(this.a-b.a,this.b-b.b,this.c-b.c)},
T:function(a){return new V.K(-this.a,-this.b,-this.c)},
E:function(a,b){return new V.K(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if(Math.abs(b-0)<$.N().a)return V.d0()
return new V.K(this.a/b,this.b/b,this.c/b)},
ed:function(){var u=$.N().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+", "+V.Y(this.c,3,0)+"]"}}
U.fC.prototype={
bO:function(a){var u=V.pq(a,this.c,this.b)
return u},
gB:function(){var u=this.y
return u==null?this.y=D.Z():u},
Z:function(a){var u=this.y
if(u!=null)u.L(a)},
seK:function(a,b){},
sef:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.N().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bO(u)}s=new D.P("maximumLocation",s,t.b,[P.r])
s.b=!0
t.Z(s)}},
seh:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.N().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bO(u)}s=new D.P("minimumLocation",s,t.c,[P.r])
s.b=!0
t.Z(s)}},
sa3:function(a,b){var u,t=this
b=t.bO(b)
u=t.d
if(!(Math.abs(u-b)<$.N().a)){t.d=b
u=new D.P("location",u,b,[P.r])
u.b=!0
t.Z(u)}},
seg:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.N().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.P("maximumVelocity",r,a,[P.r])
r.b=!0
s.Z(r)}},
sa0:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.N().a)){u.f=a
t=new D.P("velocity",t,a,[P.r])
t.b=!0
u.Z(t)}},
sdI:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.N().a)){this.x=a
u=new D.P("dampening",u,a,[P.r])
u.b=!0
this.Z(u)}},
az:function(a,b){var u,t,s,r=this,q=r.f,p=$.N().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa3(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.N().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sa0(u)}}}
U.dw.prototype={
gB:function(){var u=this.b
return u==null?this.b=D.Z():u},
aX:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dw))return!1
return J.W(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.cz.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.Z():u},
Z:function(a){var u
H.h(a,"$iB")
u=this.e
if(u!=null)u.L(a)},
aq:function(){return this.Z(null)},
fc:function(a,b){var u,t,s,r,q,p,o,n=U.ak
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gbf(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.gB()
o.toString
H.n(t,s)
if(o.a==null)o.sah(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c1([n])
n.b=!0
this.Z(n)},
hF:function(a,b){var u,t,s=U.ak
H.k(b,"$ii",[s],"$ai")
for(u=b.gU(b),t=this.gbf();u.D();)u.gK(u).gB().N(0,t)
s=new D.c2([s])
s.b=!0
this.Z(s)},
aX:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.X()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.au(r,r.length,[H.t(r,0)]),u=null;r.D();){q=r.d
if(q!=null){t=q.aX(0,b,c)
if(t!=null)u=u==null?t:t.E(0,u)}}s.f=u==null?V.dS():u
r=s.e
if(r!=null)r.am(0)}return s.f},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cz))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.W(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ak]},
$aa6:function(){return[U.ak]},
$iak:1}
U.ak.prototype={}
U.ek.prototype={
gB:function(){var u=this.fx
return u==null?this.fx=D.Z():u},
Z:function(a){var u
H.h(a,"$iB")
u=this.fx
if(u!=null)u.L(a)},
aq:function(){return this.Z(null)},
iY:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.Z():t
u.h(0,s.gfU())
u=s.a.c
t=u.d
u=t==null?u.d=D.Z():t
u.h(0,s.gfW())
u=s.a.c
t=u.c
u=t==null?u.c=D.Z():t
u.h(0,s.gfY())
u=s.a.d
t=u.f
u=t==null?u.f=D.Z():t
u.h(0,s.gfQ())
u=s.a.d
t=u.d
u=t==null?u.d=D.Z():t
u.h(0,s.gfS())
u=s.a.e
t=u.b
u=t==null?u.b=D.Z():t
u.h(0,s.gik())
u=s.a.e
t=u.d
u=t==null?u.d=D.Z():t
u.h(0,s.gii())
u=s.a.e
t=u.c
u=t==null?u.c=D.Z():t
u.h(0,s.gig())
return!0},
as:function(a){var u=a.a,t=a.b
if(H.H(this.f)){if(typeof u!=="number")return u.T()
u=-u}if(H.H(this.r)){if(typeof t!=="number")return t.T()
t=-t}return new V.a4(u,t)},
fV:function(a){var u=this
a=H.m(H.h(a,"$iB"),"$ibH")
if(!J.W(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fX:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.h(a,"$iB"),"$ibH")
if(!H.H(n.cx))return
if(H.H(n.ch)){u=a.d.t(0,a.y)
u=new V.a4(u.a,u.b)
u=u.G(u)
t=n.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
n.ch=!1}if(H.H(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.as(new V.a4(t.a,t.b).E(0,2).w(0,u.gay()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.G(s)
t.sa0(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.G(t)
s.sa0(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.as(new V.a4(s.a,s.b).E(0,2).w(0,u.gay()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.G(p)
o=n.cy
if(typeof o!=="number")return H.G(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.G(q)
s=n.db
if(typeof s!=="number")return H.G(s)
o.sa3(0,-p*q+s)
n.b.sa0(0)
n.c.sa0(0)
t=t.t(0,a.z)
n.dx=n.as(new V.a4(t.a,t.b).E(0,2).w(0,u.gay()))}n.aq()},
fZ:function(a){var u,t,s,r=this
H.h(a,"$iB")
if(!H.H(r.cx))return
r.cx=!1
if(H.H(r.ch))return
u=r.dx
if(u.G(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.G(s)
u.sa0(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.G(u)
s.sa0(-t*10*u)
r.aq()}},
fR:function(a){var u=this
if(H.m(H.h(a,"$iB"),"$idN").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fT:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.h(a,"$iB"),"$ibH")
if(!J.W(n.d,a.x.b))return
u=a.c
t=a.d
s=t.t(0,a.y)
r=n.as(new V.a4(s.a,s.b).E(0,2).w(0,u.gay()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.G(p)
o=n.cy
if(typeof o!=="number")return H.G(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.G(q)
s=n.db
if(typeof s!=="number")return H.G(s)
o.sa3(0,-p*q+s)
n.b.sa0(0)
n.c.sa0(0)
t=t.t(0,a.z)
n.dx=n.as(new V.a4(t.a,t.b).E(0,2).w(0,u.gay()))
n.aq()},
il:function(a){var u=this
H.h(a,"$iB")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
ij:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.h(a,"$iB"),"$iee")
if(!H.H(n.cx))return
if(H.H(n.ch)){u=a.d.t(0,a.y)
u=new V.a4(u.a,u.b)
u=u.G(u)
t=n.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
n.ch=!1}if(H.H(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.as(new V.a4(t.a,t.b).E(0,2).w(0,u.gay()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.G(s)
t.sa0(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.G(t)
s.sa0(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.as(new V.a4(s.a,s.b).E(0,2).w(0,u.gay()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.G(p)
o=n.cy
if(typeof o!=="number")return H.G(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.G(q)
s=n.db
if(typeof s!=="number")return H.G(s)
o.sa3(0,-p*q+s)
n.b.sa0(0)
n.c.sa0(0)
t=t.t(0,a.z)
n.dx=n.as(new V.a4(t.a,t.b).E(0,2).w(0,u.gay()))}n.aq()},
ih:function(a){var u,t,s,r=this
H.h(a,"$iB")
if(!H.H(r.cx))return
r.cx=!1
if(H.H(r.ch))return
u=r.dx
if(u.G(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.G(s)
u.sa0(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.G(u)
s.sa0(-t*10*u)
r.aq()}},
aX:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.X()
if(q<p){r.dy=p
u=b.y
r.c.az(0,u)
r.b.az(0,u)
q=V.lS(r.b.d)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.E(0,V.bn(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iak:1}
M.dC.prototype={
aA:function(a){var u
H.h(a,"$iB")
u=this.x
if(u!=null)u.L(a)},
fd:function(){return this.aA(null)},
ha:function(a,b){var u,t,s,r,q,p,o,n=E.an
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gar(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bZ()
o.sah(null)
o.saO(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sah(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c1([n])
n.b=!0
this.aA(n)},
hc:function(a,b){var u,t,s=E.an
H.k(b,"$ii",[s],"$ai")
for(u=b.gU(b),t=this.gar();u.D();)u.gK(u).gB().N(0,t)
s=new D.c2([s])
s.b=!0
this.aA(s)},
sb8:function(a){var u,t=this,s=t.c
if(s!=a){if(s!=null)s.gB().N(0,t.gar())
u=t.c
t.c=a
if(a!=null)a.gB().h(0,t.gar())
s=new D.P("technique",u,t.c,[O.bM])
s.b=!0
t.aA(s)}},
gB:function(){var u=this.x
return u==null?this.x=D.Z():u},
aU:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.ew(a1.c)
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
if(typeof s!=="number")return H.G(s)
o=C.e.an(p*s)
p=q.b
if(typeof r!=="number")return H.G(r)
n=C.e.an(p*r)
p=C.e.an(q.c*s)
a2.c=p
q=C.e.an(q.d*r)
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
i=V.bn(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.ev(i)
t=$.lY
if(t==null){t=V.m_()
q=V.mk()
p=$.mh
if(p==null)p=$.mh=new V.K(0,0,-1)
h=p.w(0,Math.sqrt(p.G(p)))
q=q.aE(h)
g=q.w(0,Math.sqrt(q.G(q)))
f=h.aE(g)
e=new V.K(t.a,t.b,t.c)
d=g.T(0).G(e)
c=f.T(0).G(e)
b=h.T(0).G(e)
t=V.bn(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.lY=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.aX(0,a2,u)
if(a0!=null)a=a0.E(0,a)}a2.db.ev(a)
u=a1.c
if(u!=null)u.az(0,a2)
for(u=a1.d.a,u=new J.au(u,u.length,[H.t(u,0)]);u.D();)u.d.az(0,a2)
for(u=a1.d.a,u=new J.au(u,u.length,[H.t(u,0)]);u.D();)u.d.aU(a2)
a1.a.toString
a2.cy.cB()
a2.db.cB()
a1.b.toString
a2.eu()},
sfu:function(a,b){this.d=H.k(b,"$ia6",[E.an],"$aa6")},
$ipy:1}
A.dq.prototype={}
A.fr.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
je:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
ja:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.hu.prototype={
eY:function(d2,d3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="Required uniform value, ",a9=", was not defined or used in shader.",b0="emissionTxt",b1="nullEmissionTxt",b2="ambientTxt",b3="nullAmbientTxt",b4="diffuseTxt",b5="nullDiffuseTxt",b6="invDiffuseTxt",b7="nullInvDiffuseTxt",b8="specularTxt",b9="nullSpecularTxt",c0="nullBumpTxt",c1="reflectTxt",c2="nullReflectTxt",c3="refractTxt",c4="nullRefractTxt",c5="alphaTxt",c6="nullAlphaTxt",c7="uniform mat4 objMat;\n",c8="   if(nullAlphaTxt > 0) return alpha;\n",c9="   if (a <= 0.000001) discard;\n",d0="precision mediump float;\n\n",d1="precision mediump float;\n\nvarying vec3 normalVec;\n"
a7.z=d2
u=new P.ag("")
t=d2.fx
if(t){u.a=c7
s=c7}else s=""
r=d2.fy
s=(r?u.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s=u.a=s+"attribute vec3 posAttr;\n"
q=d2.r1
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=d2.r2
u.a=(p?u.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
d2.iu(u)
d2.iB(u)
d2.iv(u)
d2.iJ(u)
d2.iK(u)
d2.iD(u)
d2.iO(u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=d2.x1
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
u.a=s}if(d2.rx){s+="   txt2D = getTxt2D();\n"
u.a=s}if(d2.ry){s+="   txtCube = getTxtCube();\n"
u.a=s}if(d2.k3){s+="   objPos = getObjPos();\n"
u.a=s}s=(d2.k4?u.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s=u.a=s+"\n"
n=s.charCodeAt(0)==0?s:s
s=a7.z
u=new P.ag("")
u.a="precision mediump float;\n"
u.a=d0
q=s.r1
if(q){u.a=d1
p=d1}else p=d0
if(s.r2){p+="varying vec3 binormalVec;\n"
u.a=p}if(s.rx){p+="varying vec2 txt2D;\n"
u.a=p}if(s.ry){p+="varying vec3 txtCube;\n"
u.a=p}if(s.k3){p+="varying vec3 objPos;\n"
u.a=p}p=u.a=(s.k4?u.a=p+"varying vec3 viewPos;\n":p)+"\n"
o=s.y2
if(o){p+="uniform mat4 colorMat;\n"
u.a=p}u.a=(s.fr?u.a=p+"uniform mat4 invViewMat;\n":p)+"\n"
s.iy(u)
s.it(u)
s.iw(u)
s.iz(u)
s.iH(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.iF(u)
s.iG(u)}s.iC(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=s.y
if(l!==C.d){m=u.a=m+"uniform float alpha;\n"
if(l!==C.j){m=u.a=m+"uniform int nullAlphaTxt;\n"
if(l===C.h){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.i){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m=u.a=m+"\n"}m+="float alphaValue()\n"
u.a=m
m=u.a=m+"{\n"
switch(l){case C.d:m=u.a=m+"   return 1.0;\n"
break
case C.j:m=u.a=m+"   return alpha;\n"
break
case C.h:m+=c8
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+=c9
u.a=m
m=u.a=m+"   return a;\n"
break
case C.i:m+=c8
u.a=m
m+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
u.a=m
m+=c9
u.a=m
m=u.a=m+"   return a;\n"
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
s.ix(u)
s.iE(u)
s.iI(u)
s.iL(u)
s.iM(u)
s.iN(u)
s.iA(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m=u.a=m+"   float alpha = alphaValue();\n"
q=q?u.a=m+"   vec3 norm = normal();\n":m
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
s=u.a=(o?u.a=s+("   gl_FragColor = colorMat*"+i+"\n"):u.a=s+("   gl_FragColor = "+i+"\n"))+"}\n"
a7.c=n
a7.d=s.charCodeAt(0)==0?s:s
a7.e=a7.d6(n,35633)
a7.f=a7.d6(a7.d,35632)
s=a7.a
q=s.createProgram()
a7.r=q
s.attachShader(q,a7.e)
s.attachShader(a7.r,a7.f)
s.linkProgram(a7.r)
if(!H.H(H.ll(s.getProgramParameter(a7.r,35714)))){h=s.getProgramInfoLog(a7.r)
s.deleteProgram(a7.r)
H.u(P.w("Failed to link shader: "+H.l(h)))}a7.i4()
a7.i6()
a7.Q=a7.x.j(0,"posAttr")
a7.cx=a7.x.j(0,"normAttr")
a7.ch=a7.x.j(0,"binmAttr")
a7.cy=a7.x.j(0,"txt2DAttr")
a7.db=a7.x.j(0,"txtCubeAttr")
a7.dx=a7.x.j(0,"bendAttr")
if(d2.fr)a7.id=H.m(a7.y.p(0,"invViewMat"),"$iaB")
if(t)a7.dy=H.m(a7.y.p(0,"objMat"),"$iaB")
if(r)a7.fr=H.m(a7.y.p(0,"viewObjMat"),"$iaB")
a7.fy=H.m(a7.y.p(0,"projViewObjMat"),"$iaB")
if(d2.x2)a7.k1=H.m(a7.y.p(0,"txt2DMat"),"$icU")
if(d2.y1)a7.k2=H.m(a7.y.p(0,"txtCubeMat"),"$iaB")
if(d2.y2)a7.k3=H.m(a7.y.p(0,"colorMat"),"$iaB")
a7.sfp(H.d([],[A.aB]))
t=d2.aw
if(t>0){a7.k4=H.h(a7.y.p(0,"bendMatCount"),"$iQ")
for(g=0;g<t;++g){s=a7.r1
r=a7.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.u(P.w(a8+q+a9));(s&&C.a).h(s,H.m(f,"$iaB"))}}t=d2.a
if(t!==C.d){a7.r2=H.m(a7.y.p(0,"emissionClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:a7.rx=H.m(a7.y.p(0,b0),"$iap")
a7.x1=H.m(a7.y.p(0,b1),"$iQ")
break
case C.i:a7.ry=H.m(a7.y.p(0,b0),"$iaq")
a7.x1=H.m(a7.y.p(0,b1),"$iQ")
break}}t=d2.b
if(t!==C.d){a7.x2=H.m(a7.y.p(0,"ambientClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:a7.y1=H.m(a7.y.p(0,b2),"$iap")
a7.aw=H.m(a7.y.p(0,b3),"$iQ")
break
case C.i:a7.y2=H.m(a7.y.p(0,b2),"$iaq")
a7.aw=H.m(a7.y.p(0,b3),"$iQ")
break}}t=d2.c
if(t!==C.d){a7.ak=H.m(a7.y.p(0,"diffuseClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:a7.bn=H.m(a7.y.p(0,b4),"$iap")
a7.bo=H.m(a7.y.p(0,b5),"$iQ")
break
case C.i:a7.dK=H.m(a7.y.p(0,b4),"$iaq")
a7.bo=H.m(a7.y.p(0,b5),"$iQ")
break}}t=d2.d
if(t!==C.d){a7.bp=H.m(a7.y.p(0,"invDiffuseClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:a7.dL=H.m(a7.y.p(0,b6),"$iap")
a7.bq=H.m(a7.y.p(0,b7),"$iQ")
break
case C.i:a7.dM=H.m(a7.y.p(0,b6),"$iaq")
a7.bq=H.m(a7.y.p(0,b7),"$iQ")
break}}t=d2.e
if(t!==C.d){a7.bt=H.m(a7.y.p(0,"shininess"),"$ia3")
a7.br=H.m(a7.y.p(0,"specularClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:a7.dN=H.m(a7.y.p(0,b8),"$iap")
a7.bs=H.m(a7.y.p(0,b9),"$iQ")
break
case C.i:a7.dO=H.m(a7.y.p(0,b8),"$iaq")
a7.bs=H.m(a7.y.p(0,b9),"$iQ")
break}}switch(d2.f){case C.d:break
case C.j:break
case C.h:a7.dP=H.m(a7.y.p(0,"bumpTxt"),"$iap")
a7.bu=H.m(a7.y.p(0,c0),"$iQ")
break
case C.i:a7.dQ=H.m(a7.y.p(0,"bumpTxt"),"$iaq")
a7.bu=H.m(a7.y.p(0,c0),"$iQ")
break}if(d2.dy){a7.dR=H.m(a7.y.p(0,"envSampler"),"$iaq")
a7.dS=H.m(a7.y.p(0,"nullEnvTxt"),"$iQ")
t=d2.r
if(t!==C.d){a7.bv=H.m(a7.y.p(0,"reflectClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:a7.dT=H.m(a7.y.p(0,c1),"$iap")
a7.bw=H.m(a7.y.p(0,c2),"$iQ")
break
case C.i:a7.dU=H.m(a7.y.p(0,c1),"$iaq")
a7.bw=H.m(a7.y.p(0,c2),"$iQ")
break}}t=d2.x
if(t!==C.d){a7.bx=H.m(a7.y.p(0,"refraction"),"$ia3")
a7.by=H.m(a7.y.p(0,"refractClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:a7.dV=H.m(a7.y.p(0,c3),"$iap")
a7.bz=H.m(a7.y.p(0,c4),"$iQ")
break
case C.i:a7.dW=H.m(a7.y.p(0,c3),"$iaq")
a7.bz=H.m(a7.y.p(0,c4),"$iQ")
break}}}t=d2.y
if(t!==C.d){a7.bA=H.m(a7.y.p(0,"alpha"),"$ia3")
switch(t){case C.d:break
case C.j:break
case C.h:a7.dX=H.m(a7.y.p(0,c5),"$iap")
a7.bB=H.m(a7.y.p(0,c6),"$iQ")
break
case C.i:a7.dY=H.m(a7.y.p(0,c5),"$iaq")
a7.bB=H.m(a7.y.p(0,c6),"$iQ")
break}}a7.sfC(H.d([],[A.cT]))
a7.shO(H.d([],[A.cV]))
a7.si9(H.d([],[A.cW]))
a7.sio(H.d([],[A.cX]))
a7.sip(H.d([],[A.cY]))
a7.siq(H.d([],[A.cZ]))
if(d2.k2){t=d2.z
if(t>0){a7.dZ=H.h(a7.y.p(0,"dirLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.u(P.w(a8+r+a9))
H.m(f,"$iO")
s=a7.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.u(P.w(a8+r+a9))
H.m(e,"$iO")
s=a7.cl;(s&&C.a).h(s,new A.cT(f,e))}}t=d2.Q
if(t>0){a7.e_=H.h(a7.y.p(0,"pntLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.u(P.w(a8+r+a9))
H.m(f,"$iO")
s=a7.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.u(P.w(a8+r+a9))
H.m(e,"$iO")
s=a7.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.u(P.w(a8+r+a9))
H.m(d,"$iO")
s=a7.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.u(P.w(a8+r+a9))
H.m(c,"$ia3")
s=a7.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.u(P.w(a8+r+a9))
H.m(b,"$ia3")
s=a7.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.u(P.w(a8+r+a9))
H.m(a,"$ia3")
s=a7.cm;(s&&C.a).h(s,new A.cV(f,e,d,c,b,a))}}t=d2.ch
if(t>0){a7.e0=H.h(a7.y.p(0,"spotLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.u(P.w(a8+r+a9))
H.m(f,"$iO")
s=a7.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.u(P.w(a8+r+a9))
H.m(e,"$iO")
s=a7.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.u(P.w(a8+r+a9))
H.m(d,"$iO")
s=a7.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.u(P.w(a8+r+a9))
H.m(c,"$iO")
s=a7.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.u(P.w(a8+r+a9))
H.m(b,"$ia3")
s=a7.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.u(P.w(a8+r+a9))
H.m(a,"$ia3")
s=a7.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.u(P.w(a8+r+a9))
H.m(a0,"$ia3")
s=a7.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.u(P.w(a8+r+a9))
H.m(a1,"$ia3")
s=a7.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.u(P.w(a8+r+a9))
H.m(a2,"$ia3")
s=a7.cn;(s&&C.a).h(s,new A.cW(f,e,d,c,b,a,a0,a1,a2))}}t=d2.cx
if(t>0){a7.e1=H.h(a7.y.p(0,"txtDirLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.u(P.w(a8+r+a9))
H.m(f,"$iO")
s=a7.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.u(P.w(a8+r+a9))
H.m(e,"$iO")
s=a7.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.u(P.w(a8+r+a9))
H.m(d,"$iO")
s=a7.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.u(P.w(a8+r+a9))
H.m(c,"$iO")
s=a7.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.u(P.w(a8+r+a9))
H.m(b,"$iO")
s=a7.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.u(P.w(a8+r+a9))
H.m(a,"$iQ")
s=a7.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.u(P.w(a8+r+a9))
H.m(a0,"$iap")
s=a7.co;(s&&C.a).h(s,new A.cX(f,e,d,c,b,a0,a))}}t=d2.cy
if(t>0){a7.e2=H.h(a7.y.p(0,"txtPntLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.u(P.w(a8+r+a9))
H.m(f,"$iO")
s=a7.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.u(P.w(a8+r+a9))
H.m(e,"$iO")
s=a7.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.u(P.w(a8+r+a9))
H.m(d,"$icU")
s=a7.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.u(P.w(a8+r+a9))
H.m(c,"$iO")
s=a7.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.u(P.w(a8+r+a9))
H.m(b,"$iQ")
s=a7.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.u(P.w(a8+r+a9))
H.m(a,"$ia3")
s=a7.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.u(P.w(a8+r+a9))
H.m(a0,"$ia3")
s=a7.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.u(P.w(a8+r+a9))
H.m(a1,"$ia3")
s=a7.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.u(P.w(a8+r+a9))
H.m(a2,"$iaq")
s=a7.cp;(s&&C.a).h(s,new A.cY(f,e,d,c,a2,b,a,a0,a1))}}t=d2.db
if(t>0){a7.e3=H.h(a7.y.p(0,"txtSpotLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.u(P.w(a8+r+a9))
H.m(f,"$iO")
s=a7.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.u(P.w(a8+r+a9))
H.m(e,"$iO")
s=a7.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.u(P.w(a8+r+a9))
H.m(d,"$iO")
s=a7.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.u(P.w(a8+r+a9))
H.m(c,"$iO")
s=a7.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.u(P.w(a8+r+a9))
H.m(b,"$iO")
s=a7.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.u(P.w(a8+r+a9))
H.m(a,"$iQ")
s=a7.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.u(P.w(a8+r+a9))
H.m(a0,"$iO")
s=a7.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.u(P.w(a8+r+a9))
H.m(a1,"$ia3")
s=a7.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.u(P.w(a8+r+a9))
H.m(a2,"$ia3")
s=a7.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.u(P.w(a8+r+a9))
H.m(a3,"$ia3")
s=a7.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.u(P.w(a8+r+a9))
H.m(a4,"$ia3")
s=a7.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.u(P.w(a8+r+a9))
H.m(a5,"$ia3")
s=a7.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.u(P.w(a8+r+a9))
H.m(a6,"$iap")
s=a7.cq;(s&&C.a).h(s,new A.cZ(f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
ai:function(a,b,c){C.c.a2(b.a,b.d,1)},
ac:function(a,b,c){C.c.a2(b.a,b.d,1)},
sfp:function(a){this.r1=H.k(a,"$ib",[A.aB],"$ab")},
sfC:function(a){this.cl=H.k(a,"$ib",[A.cT],"$ab")},
shO:function(a){this.cm=H.k(a,"$ib",[A.cV],"$ab")},
si9:function(a){this.cn=H.k(a,"$ib",[A.cW],"$ab")},
sio:function(a){this.co=H.k(a,"$ib",[A.cX],"$ab")},
sip:function(a){this.cp=H.k(a,"$ib",[A.cY],"$ab")},
siq:function(a){this.cq=H.k(a,"$ib",[A.cZ],"$ab")}}
A.hx.prototype={
iu:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.aw+"];\n"
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
iB:function(a){var u
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
iv:function(a){var u
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
iJ:function(a){var u,t
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
iK:function(a){var u,t
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
iD:function(a){var u
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
iO:function(a){var u
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
aC:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.f(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.b.ap(c,1))+"Txt;\n")
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iy:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.d)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.aC(a,s,"emission")
u=a.a+="\n"
u+="vec3 emission()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   return emissionClr;\n"
break
case C.h:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
it:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.d)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.aC(a,s,"ambient")
u=a.a+="\n"
u+="vec3 ambient()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   return ambientClr;\n"
break
case C.h:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
iw:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.d)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.aC(a,s,"diffuse")
u=a.a+="vec3 diffuseColor;\n"
u+="\n"
a.a=u
u+="void setDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   diffuseColor = diffuseClr;\n"
break
case C.h:s=u+t
a.a=s
s=a.a=s+"   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
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
iz:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.d)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.aC(a,s,"invDiffuse")
u=a.a+="vec3 invDiffuseColor;\n"
u+="\n"
a.a=u
u+="void setInvDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   invDiffuseColor = invDiffuseClr;\n"
break
case C.h:s=u+t
a.a=s
s=a.a=s+"   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
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
iH:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.d)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.aC(a,s,"specular")
u=a.a+="uniform float shininess;\n"
u+="vec3 specularColor;\n"
a.a=u
u+="\n"
a.a=u
u+="void setSpecularColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   specularColor = specularClr;\n"
break
case C.h:s=u+t
a.a=s
s=a.a=s+"   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
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
iC:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u=a.a=u+"\n"
t=this.f
switch(t){case C.d:break
case C.j:break
case C.h:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+=s
a.a=u
u=a.a=u+"\n"
break
case C.i:u+="uniform samplerCube bumpTxt;\n"
a.a=u
u+=s
a.a=u
u=a.a=u+"\n"
break}u+="vec3 normal()\n"
a.a=u
u=a.a=u+"{\n"
switch(t){case C.d:u=a.a=u+r
break
case C.j:u=a.a=u+r
break
case C.h:u+=q
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
case C.i:u+=q
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
iF:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.d)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.aC(a,s,"reflect")
u=a.a+="\n"
u+="vec3 reflect(vec3 refl)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   vec3 scalar = reflectClr;\n"
break
case C.h:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
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
iG:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.d)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.aC(a,s,"refract")
u=a.a+="uniform float refraction;\n"
u+="\n"
a.a=u
u+="vec3 refract(vec3 refl)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   vec3 scalar = refractClr;\n"
break
case C.h:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
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
ix:function(a){var u,t=this.z
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
iE:function(a){var u,t=this.Q
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
iI:function(a){var u,t=this.ch
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
iL:function(a){var u,t,s=this.cx
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
iM:function(a){var u,t,s=this.cy
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
iN:function(a){var u,t,s=this.db
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
iA:function(a){var u
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
i:function(a){return this.ak}}
A.cT.prototype={}
A.cX.prototype={}
A.cV.prototype={}
A.cY.prototype={}
A.cW.prototype={}
A.cZ.prototype={}
A.cL.prototype={
f0:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
d6:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.H(H.ll(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.w("Error compiling shader '"+H.l(s)+"': "+H.l(u)))}return s},
i4:function(){var u,t,s,r=this,q=H.d([],[A.dq]),p=r.a,o=H.ai(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.G(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dq(p,t.name,s))}r.x=new A.fr(q)},
i6:function(){var u,t,s,r=this,q=H.d([],[A.ef]),p=r.a,o=H.ai(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.G(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.j7(t.type,t.size,t.name,s))}r.y=new A.iU(q)},
aM:function(a,b,c){var u=this.a
if(a===1)return new A.Q(u,b,c)
else return A.l9(u,this.r,b,a,c)},
fz:function(a,b,c){var u=this.a
if(a===1)return new A.ap(u,b,c)
else return A.l9(u,this.r,b,a,c)},
fA:function(a,b,c){var u=this.a
if(a===1)return new A.aq(u,b,c)
else return A.l9(u,this.r,b,a,c)},
bj:function(a,b){return new P.ev(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
j7:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aM(b,c,d)
case 5121:return u.aM(b,c,d)
case 5122:return u.aM(b,c,d)
case 5123:return u.aM(b,c,d)
case 5124:return u.aM(b,c,d)
case 5125:return u.aM(b,c,d)
case 5126:return new A.a3(u.a,c,d)
case 35664:return new A.iP(u.a,c,d)
case 35665:return new A.O(u.a,c,d)
case 35666:return new A.iS(u.a,c,d)
case 35667:return new A.iQ(u.a,c,d)
case 35668:return new A.iR(u.a,c,d)
case 35669:return new A.iT(u.a,c,d)
case 35674:return new A.iV(u.a,c,d)
case 35675:return new A.cU(u.a,c,d)
case 35676:return new A.aB(u.a,c,d)
case 35678:return u.fz(b,c,d)
case 35680:return u.fA(b,c,d)
case 35670:throw H.c(u.bj("BOOL",c))
case 35671:throw H.c(u.bj("BOOL_VEC2",c))
case 35672:throw H.c(u.bj("BOOL_VEC3",c))
case 35673:throw H.c(u.bj("BOOL_VEC4",c))
default:throw H.c(P.w("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bY.prototype={
i:function(a){return this.b}}
A.ef.prototype={}
A.iU.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
P:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.D)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.Q.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.iQ.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.iR.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.iT.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.iO.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
sir:function(a){H.k(a,"$ib",[P.p],"$ab")}}
A.a3.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.iP.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.O.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.iS.prototype={
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.iV.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.cU.prototype={
ao:function(a){var u=new Float32Array(H.cc(H.k(a,"$ib",[P.r],"$ab")))
C.c.eG(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.aB.prototype={
ao:function(a){var u=new Float32Array(H.cc(H.k(a,"$ib",[P.r],"$ab")))
C.c.eH(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.ap.prototype={
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.aq.prototype={
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.kh.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cz(s.b,b).cz(s.d.cz(s.c,b),c)
a.sa3(0,new V.a2(r.a,r.b,r.c))
a.seC(r.w(0,Math.sqrt(r.G(r))))
s=1-b
u=1-c
a.sdE(new V.b7(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:8}
F.kr.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:32}
F.kt.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.G(p)
s=-s*p
u=r*p
a.sa3(0,new V.a2(s,u,q))
u=new V.K(s,u,q)
a.seC(u.w(0,Math.sqrt(u.G(u))))
a.sdE(new V.b7(1-c,2+c,-1,-1))},
$S:8}
F.ku.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:23}
F.kv.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:23}
F.kO.prototype={
$2:function(a,b){return 0},
$S:32}
F.kP.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.G(s)
u=a.f
t=new V.K(u.a,u.b,u.c)
s=t.w(0,Math.sqrt(t.G(t))).E(0,this.b+s)
a.sa3(0,new V.a2(s.a,s.b,s.c))},
$S:8}
F.kQ.prototype={
$1:function(a){return new V.a2(Math.cos(a),Math.sin(a),0)},
$S:28}
F.kC.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.a2(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:28}
F.ks.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lA(n.$1(o),m)
m=J.ng(J.lA(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.K(m.a,m.b,m.c)
u=m.w(0,Math.sqrt(m.G(m)))
n=$.mi
if(n==null){n=new V.K(1,0,0)
$.mi=n
t=n}else t=n
n=u.aE(!J.W(u,t)?V.ml():t)
s=n.w(0,Math.sqrt(n.G(n)))
n=s.aE(u)
t=n.w(0,Math.sqrt(n.G(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.E(0,n*m)
m=s.E(0,q*m)
a.sa3(0,J.nf(l,new V.a2(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:8}
F.a9.prototype={
b2:function(){var u=this
if(!u.gb3()){C.a.N(u.a.a.d.b,u)
u.a.a.a1()}u.c2()
u.c3()
u.hT()},
c7:function(a){this.a=a
C.a.h(a.d.b,this)},
c8:function(a){this.b=a
C.a.h(a.d.c,this)},
i3:function(a){this.c=a
C.a.h(a.d.d,this)},
c2:function(){var u=this.a
if(u!=null){C.a.N(u.d.b,this)
this.a=null}},
c3:function(){var u=this.b
if(u!=null){C.a.N(u.d.c,this)
this.b=null}},
hT:function(){var u=this.c
if(u!=null){C.a.N(u.d.d,this)
this.c=null}},
gb3:function(){return this.a==null||this.b==null||this.c==null},
fo:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d0()
if(q!=null)s=s.q(0,q)
if(u!=null)s=s.q(0,u)
if(t!=null)s=s.q(0,t)
if(s.ed())return
return s.w(0,Math.sqrt(s.G(s)))},
ft:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.t(0,q)
r=new V.K(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.G(r)))
r=t.t(0,q)
r=new V.K(r.a,r.b,r.c)
r=s.aE(r.w(0,Math.sqrt(r.G(r))))
return r.w(0,Math.sqrt(r.G(r)))},
cf:function(){var u,t=this
if(t.d!=null)return!0
u=t.fo()
if(u==null){u=t.ft()
if(u==null)return!1}t.d=u
t.a.a.a1()
return!0},
fn:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d0()
if(q!=null)s=s.q(0,q)
if(u!=null)s=s.q(0,u)
if(t!=null)s=s.q(0,t)
if(s.ed())return
return s.w(0,Math.sqrt(s.G(s)))},
fs:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.N().a){l=d.t(0,g)
l=new V.K(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.G(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.t(0,g).E(0,p).q(0,g).t(0,j)
l=new V.K(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.G(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.G(l)))
l=o.aE(q)
l=l.w(0,Math.sqrt(l.G(l))).aE(o)
q=l.w(0,Math.sqrt(l.G(l)))}return q},
cd:function(){var u,t=this
if(t.e!=null)return!0
u=t.fn()
if(u==null){u=t.fs()
if(u==null)return!1}t.e=u
t.a.a.a1()
return!0},
gj2:function(a){var u=this
if(J.W(u.a,u.b))return!0
if(J.W(u.b,u.c))return!0
if(J.W(u.c,u.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
H:function(a){var u,t,s=this
if(s.gb3())return a+"disposed"
u=a+C.b.af(J.at(s.a.e),0)+", "+C.b.af(J.at(s.b.e),0)+", "+C.b.af(J.at(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
P:function(){return this.H("")}}
F.fY.prototype={}
F.ih.prototype={
b4:function(a,b,c){var u,t=b.a
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
if(t==u.e){t=b.c
t.a.a.A()
t=t.e
u=c.c
u.a.a.A()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.c
u.a.a.A()
if(t==u.e){t=b.c
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.A()
t=t.e
u=c.c
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
if(t==u.e){t=b.c
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bm.prototype={
b2:function(){var u=this
if(!u.gb3()){C.a.N(u.a.a.c.b,u)
u.a.a.a1()}u.c2()
u.c3()},
c7:function(a){this.a=a
C.a.h(a.c.b,this)},
c8:function(a){this.b=a
C.a.h(a.c.c,this)},
c2:function(){var u=this.a
if(u!=null){C.a.N(u.c.b,this)
this.a=null}},
c3:function(){var u=this.b
if(u!=null){C.a.N(u.c.c,this)
this.b=null}},
gb3:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
H:function(a){if(this.gb3())return a+"disposed"
return a+C.b.af(J.at(this.a.e),0)+", "+C.b.af(J.at(this.b.e),0)},
P:function(){return this.H("")}}
F.hh.prototype={}
F.iN.prototype={
b4:function(a,b,c){var u,t=b.a
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
return t==u.e}else{t=b.a
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
return t==u.e}else return!1}}}
F.bJ.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
H:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.af(J.at(u.e),0)},
P:function(){return this.H("")}}
F.e3.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.Z():u},
b5:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.A()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.D)(g),++s){r=g[s]
h.a.h(0,r.j4())}h.a.A()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.D)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.q()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bJ()
if(n.a==null)H.u(P.w("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.L(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.D)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.q()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.A()
p=p.e
if(typeof p!=="number")return p.q()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.nI(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.D)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.q()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.A()
p=p.e
if(typeof p!=="number")return p.q()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.q()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cw(l,k,i)}g=h.e
if(g!=null)g.am(0)},
av:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.av()||!1
if(!t.a.av())u=!1
s=t.e
if(s!=null)s.am(0)
return u},
jv:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.t(o,0)])
for(o=[F.ah];u.length!==0;){t=C.a.gji(u)
C.a.ex(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.f(u,r)
q=u[r]
if(q!=null&&a.b4(0,t,q)){C.a.h(s,q)
C.a.ex(u,r)}}if(s.length>1)b.b5(s)}}p.a.A()
p.c.cG()
p.d.cG()
p.b.jO()
p.c.cH(new F.iN())
p.d.cH(new F.ih())
o=p.e
if(o!=null)o.am(0)},
c9:function(){this.jv(new F.jg(),new F.hO())},
cr:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.cr()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.f(o,u)
t=o[u]
o=t.r
if(o!=null)t.sei(new V.K(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.K(s,r,o).w(0,Math.sqrt(s*s+r*r+o*o))
if(!J.W(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.L(null)}}}}o=p.e
if(o!=null)o.am(0)},
j0:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bu()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bt().a)!==0)++s
if((t&$.bs().a)!==0)++s
if((t&$.bv().a)!==0)++s
if((t&$.bw().a)!==0)++s
if((t&$.dk().a)!==0)++s
if((t&$.dl().a)!==0)++s
if((t&$.cn().a)!==0)++s
if((t&$.br().a)!==0)++s
r=a3.gcP(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.r
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.ds])
for(n=0,m=0;m<s;++m){l=a3.iX(m)
k=l.gcP(l)
C.a.n(o,m,new Z.ds(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.f(u,j)
i=u[j].js(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.n(p,h,i[g]);++h}}n+=k}H.k(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cc(p)),35044)
u.bindBuffer(a0,null)
e=new Z.dt(new Z.em(a0,f),o,a3)
e.sfL(H.d([],[Z.bE]))
if(a.b.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.A()
C.a.h(d,c.e)}b=Z.lc(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bE(0,d.length,b))}if(a.c.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.A()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.f(c,m)
c=c[m].b
c.a.a.A()
C.a.h(d,c.e)}b=Z.lc(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bE(1,d.length,b))}if(a.d.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.A()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.f(c,m)
c=c[m].b
c.a.a.A()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.f(c,m)
c=c[m].c
c.a.a.A()
C.a.h(d,c.e)}b=Z.lc(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bE(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.e])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.H(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.H(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.H(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.H(t))}return C.a.m(s,"\n")},
a1:function(){var u=this.e
if(u!=null)u.L(null)},
$ipz:1}
F.i9.prototype={
iR:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[F.ah],"$ab")
u=H.d([],[F.a9])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.f(a,p)
p=a[p]
if(q>=o)return H.f(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.cw(s,p,o))}}return u},
iS:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,"$ib",[F.ah],"$ab")
u=H.d([],[F.a9])
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
cH:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b4(0,p,n)){p.b2()
break}}}}},
cG:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=s.gj2(s)
if(t)s.b2()}},
av:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.D)(u),++r)if(!u[r].cf())s=!1
return s},
ce:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.D)(u),++r)if(!u[r].cd())s=!1
return s},
cr:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.K(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.K(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.L(null)}},
i:function(a){return this.P()},
H:function(a){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(a))
return C.a.m(r,"\n")},
P:function(){return this.H("")},
sfG:function(a){this.b=H.k(a,"$ib",[F.a9],"$ab")}}
F.ia.prototype={
gl:function(a){return this.b.length},
cH:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b4(0,p,n)){p.b2()
break}}}}},
cG:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=J.W(s.a,s.b)
if(t)s.b2()}},
i:function(a){return this.P()},
H:function(a){var u,t,s=H.d([],[P.e]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.f(t,u)
C.a.h(s,t[u].H(a+(""+u+". ")))}return C.a.m(s,"\n")},
P:function(){return this.H("")},
sfM:function(a){this.b=H.k(a,"$ib",[F.bm],"$ab")}}
F.ib.prototype={
gl:function(a){return this.b.length},
jO:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.N(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.L(null)}s=t.a
if(s!=null){C.a.N(s.b.b,t)
t.a=null}}}},
i:function(a){return this.P()},
H:function(a){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(a))
return C.a.m(r,"\n")},
P:function(){return this.H("")},
sc_:function(a){this.b=H.k(a,"$ib",[F.bJ],"$ab")}}
F.ah.prototype={
cj:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.el(u.cx,r,o,t,s,q,p,a,n)},
j4:function(){return this.cj(null)},
sa3:function(a,b){var u
if(!J.W(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a1()}},
sei:function(a){var u
a=a==null?null:a.w(0,Math.sqrt(a.G(a)))
if(!J.W(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a1()}},
seC:function(a){var u
if(!J.W(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a1()}},
sdE:function(a){var u
if(!J.W(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a1()}},
js:function(a){var u,t,s=this
if(a.u(0,$.bu())){u=s.f
t=[P.r]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.bt())){u=s.r
t=[P.r]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.bs())){u=s.x
t=[P.r]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.bv())){u=s.y
t=[P.r]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.u(0,$.bw())){u=s.z
t=[P.r]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.dk())){u=s.Q
t=[P.r]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.dl())){u=s.Q
t=[P.r]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.u(0,$.cn()))return H.d([s.ch],[P.r])
else if(a.u(0,$.br())){u=s.cx
t=[P.r]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.r])},
cf:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d0()
t.d.M(0,new F.jl(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.G(s)))
s=t.a
if(s!=null){s.a1()
s=t.a.e
if(s!=null)s.am(0)}return!0},
cd:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d0()
t.d.M(0,new F.jk(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.G(s)))
s=t.a
if(s!=null){s.a1()
s=t.a.e
if(s!=null)s.am(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
H:function(a){var u,t,s=this,r="-",q=H.d([],[P.e])
C.a.h(q,C.b.af(J.at(s.e),0))
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
C.a.h(q,V.Y(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
P:function(){return this.H("")}}
F.jl.prototype={
$1:function(a){var u,t
H.h(a,"$ia9")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.q(0,u)}},
$S:6}
F.jk.prototype={
$1:function(a){var u,t
H.h(a,"$ia9")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.q(0,u)}},
$S:6}
F.jb.prototype={
A:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.f(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.w("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a1()
return!0},
iT:function(a,b,c,d,e,f){var u=F.el(a,null,b,c,d,e,f,null,0)
this.h(0,u)
return u},
gl:function(a){return this.c.length},
av:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)u[s].cf()
return!0},
ce:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)u[s].cd()
return!0},
j1:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.W(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.L(null)}}}}return!0},
i:function(a){return this.P()},
H:function(a){var u,t,s,r
this.A()
u=H.d([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].H(a))
return C.a.m(u,"\n")},
P:function(){return this.H("")},
sis:function(a){this.c=H.k(a,"$ib",[F.ah],"$ab")}}
F.jc.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.f(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.f(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.f(t,b)
return t[b]},
M:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a9]})
C.a.M(u.b,b)
C.a.M(u.c,new F.jd(u,b))
C.a.M(u.d,new F.je(u,b))},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(""))
return C.a.m(r,"\n")},
sfH:function(a){this.b=H.k(a,"$ib",[F.a9],"$ab")},
sfI:function(a){this.c=H.k(a,"$ib",[F.a9],"$ab")},
sfJ:function(a){this.d=H.k(a,"$ib",[F.a9],"$ab")}}
F.jd.prototype={
$1:function(a){H.h(a,"$ia9")
if(!J.W(a.a,this.a))this.b.$1(a)},
$S:6}
F.je.prototype={
$1:function(a){var u
H.h(a,"$ia9")
u=this.a
if(!J.W(a.a,u)&&!J.W(a.b,u))this.b.$1(a)},
$S:6}
F.jf.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.f(t,u)
return t[u]}else{if(b<0)return H.f(t,b)
return t[b]}},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(""))
return C.a.m(r,"\n")},
sfN:function(a){this.b=H.k(a,"$ib",[F.bm],"$ab")},
sfO:function(a){this.c=H.k(a,"$ib",[F.bm],"$ab")}}
F.jh.prototype={}
F.jg.prototype={
b4:function(a,b,c){return J.W(b.f,c.f)}}
F.ji.prototype={}
F.hO.prototype={
b5:function(a){var u,t,s,r
H.k(a,"$ib",[F.ah],"$ab")
u=V.d0()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.K(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.w(0,Math.sqrt(u.G(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.D)(a),++s)a[s].sei(u)
return}}
F.jj.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(""))
return C.a.m(r,"\n")},
sc_:function(a){this.b=H.k(a,"$ib",[F.bJ],"$ab")}}
O.dP.prototype={
gB:function(){var u=this.dy
return u==null?this.dy=D.Z():u},
ab:function(a){var u
H.h(a,"$iB")
u=this.dy
if(u!=null)u.L(a)},
fg:function(){return this.ab(null)},
dl:function(a){H.h(a,"$iB")
this.a=null
this.ab(a)},
hY:function(){return this.dl(null)},
h3:function(a,b){var u=V.ao
H.k(b,"$ii",[u],"$ai")
u=new D.c1([u])
u.b=!0
this.ab(u)},
h5:function(a,b){var u=V.ao
H.k(b,"$ii",[u],"$ai")
u=new D.c2([u])
u.b=!0
this.ab(u)},
d3:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.f.a6(a1.e.length+3,4)*4,a3=C.f.a6(a1.f.length+3,4)*4,a4=C.f.a6(a1.r.length+3,4)*4,a5=C.f.a6(a1.x.length+3,4)*4,a6=C.f.a6(a1.y.length+3,4)*4,a7=C.f.a6(a1.z.length+3,4)*4,a8=C.f.a6(a0.e.a.length+3,4)*4
a1=a0.f.c
u=a0.r.c
t=a0.x.c
s=a0.y.c
r=a0.z.c
q=a0.Q.c
p=a0.cx.c
o=a0.cy.c
n=a0.db.c
m="MaterialLight_"+C.f.i(a1.a)+C.f.i(u.a)+C.f.i(t.a)+C.f.i(s.a)+C.f.i(r.a)+C.f.i(q.a)+C.f.i(p.a)+C.f.i(o.a)+C.f.i(n.a)
m+"_"
m+"_0"
m+"_00"
m+"_000"
m=m+"_000_"+a8+"_"+a2+"_"+a3+"_"+a4+"_"+a5+"_"+a6+"_"+a7
l=p!==C.d||o!==C.d
k=u!==C.d||t!==C.d||s!==C.d||r!==C.d
j=r===C.d
i=!j||a3+a6>0||l
h=t!==C.d||s!==C.d||!j||q!==C.d||l
j=q===C.d
g=!j
f=a1===C.h||u===C.h||t===C.h||s===C.h||r===C.h||q===C.h||p===C.h||o===C.h||n===C.h
e=a1===C.i||u===C.i||t===C.i||s===C.i||r===C.i||q===C.i||p===C.i||o===C.i||n===C.i
d=a3+a6+a5+a4+a7>0
c=a8>0
b=h||!j||i
a=$.bu()
if(h){j=$.bt()
a=new Z.bc(a.a|j.a)}if(g){j=$.bs()
a=new Z.bc(a.a|j.a)}if(f){j=$.bv()
a=new Z.bc(a.a|j.a)}if(e){j=$.bw()
a=new Z.bc(a.a|j.a)}if(c){j=$.br()
a=new Z.bc(a.a|j.a)}return new A.hx(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
W:function(a,b){H.k(a,"$ib",[T.cQ],"$ab")
if(b!=null)if(!C.a.V(a,b)){b.a=a.length
C.a.h(a,b)}},
az:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.au(u,u.length,[H.t(u,0)]);u.D();){t=u.d
t.toString
s=$.bL
t.a=s==null?$.bL=new V.a2(0,0,0):s
s=$.ja
t.b=s==null?$.ja=new V.K(0,0,1):s
s=$.j9
t.c=s==null?$.j9=new V.K(0,1,0):s
s=$.j8
t.d=s==null?$.j8=new V.K(-1,0,0):s
s=t.e
if(s!=null){r=s.aX(0,b,t)
if(r!=null){t.a=r.aW(t.a)
s=r.ba(t.b)
q=s.a
p=s.b
o=s.c
t.b=s.w(0,Math.sqrt(q*q+p*p+o*o))
o=r.ba(t.c)
p=o.a
q=o.b
s=o.c
t.c=o.w(0,Math.sqrt(p*p+q*q+s*s))
s=r.ba(t.d)
q=s.a
p=s.b
o=s.c
t.d=s.w(0,Math.sqrt(q*q+p*p+o*o))}}}},
jQ:function(a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.a
if(a4==null){a4=a3.d3()
u=a5.fr.j(0,a4.ak)
if(u==null){u=A.nO(a4,a5.a)
t=u.b
if(t.length===0)H.u(P.w("May not cache a shader with no name."))
if(a5.fr.bl(0,t))H.u(P.w('Shader cache already contains a shader by the name "'+t+'".'))
a5.fr.n(0,t,u)}a4=a3.a=u
a6.e=null}s=a4.z
r=s.bn
a4=a6.e
if(!(a4 instanceof Z.dt))a4=a6.e=null
if(a4==null||!a4.d.u(0,r)){a4=s.r1
if(a4)a6.d.av()
q=s.r2
if(q){p=a6.d
o=p.e
if(o!=null)++o.d
p.d.ce()
p.a.ce()
p=p.e
if(p!=null)p.am(0)}p=s.ry
if(p){o=a6.d
n=o.e
if(n!=null)++n.d
o.a.j1()
o=o.e
if(o!=null)o.am(0)}m=a6.d.j0(new Z.jn(a5.a),r)
m.aS($.bu()).e=a3.a.Q.c
if(a4)m.aS($.bt()).e=a3.a.cx.c
if(q)m.aS($.bs()).e=a3.a.ch.c
if(s.rx)m.aS($.bv()).e=a3.a.cy.c
if(p)m.aS($.bw()).e=a3.a.db.c
if(s.x1)m.aS($.br()).e=a3.a.dx.c
a6.e=m}a4=T.cQ
l=H.d([],[a4])
q=a3.a
p=a5.a
p.useProgram(q.r)
q.x.je()
if(s.fx){q=a3.a
o=a5.dx
o=o.ga_(o)
q=q.dy
q.toString
q.ao(o.ag(0,!0))}if(s.fy){q=a3.a
o=a5.cx
if(o==null){o=a5.db
o=o.ga_(o)
n=a5.dx
n=a5.cx=o.E(0,n.ga_(n))
o=n}q=q.fr
q.toString
q.ao(o.ag(0,!0))}q=a3.a
o=a5.ch
if(o==null){o=a5.gjM()
n=a5.dx
n=a5.ch=o.E(0,n.ga_(n))
o=n}q=q.fy
q.toString
q.ao(o.ag(0,!0))
if(s.x2){q=a3.a
o=a3.b
q=q.k1
q.toString
q.ao(C.n.ag(o,!0))}if(s.y1){q=a3.a
o=a3.c
q=q.k2
q.toString
q.ao(C.n.ag(o,!0))}if(s.y2){q=a3.a
o=a3.d
q=q.k3
q.toString
q.ao(C.n.ag(o,!0))}if(s.aw>0){k=a3.e.a.length
q=a3.a.k4
C.c.a2(q.a,q.d,k)
for(q=[P.r],j=0;j<k;++j){o=a3.a
n=a3.e.a
if(j>=n.length)return H.f(n,j)
n=n[j]
o.toString
H.h(n,"$iao")
o=o.r1
if(j>=o.length)return H.f(o,j)
o=o[j]
i=new Float32Array(H.cc(H.k(n.ag(0,!0),"$ib",q,"$ab")))
C.c.eH(o.a,o.d,!1,i)}}switch(s.a){case C.d:break
case C.j:q=a3.a
o=a3.f.f
q=q.r2
q.toString
n=o.a
h=o.b
o=o.c
C.c.v(q.a,q.d,n,h,o)
break
case C.h:a3.W(l,a3.f.d)
q=a3.a
o=a3.f.d
q.ai(q.rx,q.x1,o)
o=a3.a
q=a3.f.f
o=o.r2
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break
case C.i:a3.W(l,a3.f.e)
q=a3.a
o=a3.f.e
q.ac(q.ry,q.x1,o)
o=a3.a
q=a3.f.f
o=o.r2
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break}if(s.k2){switch(s.b){case C.d:break
case C.j:q=a3.a
o=a3.r.f
q=q.x2
q.toString
n=o.a
h=o.b
o=o.c
C.c.v(q.a,q.d,n,h,o)
break
case C.h:a3.W(l,a3.r.d)
q=a3.a
o=a3.r.d
q.ai(q.y1,q.aw,o)
o=a3.a
q=a3.r.f
o=o.x2
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break
case C.i:a3.W(l,a3.r.e)
q=a3.a
o=a3.r.e
q.ac(q.y2,q.aw,o)
o=a3.a
q=a3.r.f
o=o.x2
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break}switch(s.c){case C.d:break
case C.j:q=a3.a
o=a3.x.f
q=q.ak
q.toString
n=o.a
h=o.b
o=o.c
C.c.v(q.a,q.d,n,h,o)
break
case C.h:a3.W(l,a3.x.d)
q=a3.a
o=a3.x.d
q.ai(q.bn,q.bo,o)
o=a3.a
q=a3.x.f
o=o.ak
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break
case C.i:a3.W(l,a3.x.e)
q=a3.a
o=a3.x.e
q.ac(q.dK,q.bo,o)
o=a3.a
q=a3.x.f
o=o.ak
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break}switch(s.d){case C.d:break
case C.j:q=a3.a
o=a3.y.f
q=q.bp
q.toString
n=o.a
h=o.b
o=o.c
C.c.v(q.a,q.d,n,h,o)
break
case C.h:a3.W(l,a3.y.d)
q=a3.a
o=a3.y.d
q.ai(q.dL,q.bq,o)
o=a3.a
q=a3.y.f
o=o.bp
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break
case C.i:a3.W(l,a3.y.e)
q=a3.a
o=a3.y.e
q.ac(q.dM,q.bq,o)
o=a3.a
q=a3.y.f
o=o.bp
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break}switch(s.e){case C.d:break
case C.j:q=a3.a
o=a3.z.f
q=q.br
q.toString
n=o.a
h=o.b
o=o.c
C.c.v(q.a,q.d,n,h,o)
o=a3.a
h=a3.z.ch
o=o.bt
C.c.S(o.a,o.d,h)
break
case C.h:a3.W(l,a3.z.d)
q=a3.a
o=a3.z.d
q.ai(q.dN,q.bs,o)
o=a3.a
q=a3.z.f
o=o.br
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.bt
C.c.S(q.a,q.d,h)
break
case C.i:a3.W(l,a3.z.e)
q=a3.a
o=a3.z.e
q.ac(q.dO,q.bs,o)
o=a3.a
q=a3.z.f
o=o.br
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.bt
C.c.S(q.a,q.d,h)
break}if(s.z>0){k=a3.dx.e.length
q=a3.a.dZ
C.c.a2(q.a,q.d,k)
q=a5.db
g=q.ga_(q)
for(q=a3.dx.e,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.D)(q),++e){d=q[e]
n=a3.a.cl
if(f>=n.length)return H.f(n,f)
c=n[f]
n=g.ba(d.gck(d))
h=n.a
b=n.b
a=n.c
a=n.w(0,Math.sqrt(h*h+b*b+a*a))
b=c.b
h=a.a
n=a.b
a=a.c
C.c.v(b.a,b.d,h,n,a)
a=d.gaj(d)
n=c.c
C.c.v(n.a,n.d,a.a,a.b,a.c);++f}}if(s.Q>0){k=a3.dx.f.length
q=a3.a.e_
C.c.a2(q.a,q.d,k)
q=a5.db
g=q.ga_(q)
for(q=a3.dx.f,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.D)(q),++e){d=q[e]
n=a3.a.cm
if(f>=n.length)return H.f(n,f)
c=n[f]
n=d.gcC(d)
h=c.b
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=g.aW(d.gcC(d))
h=c.c
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gaj(d)
h=c.d
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gdB()
h=c.e
C.c.S(h.a,h.d,n)
n=d.gdC()
h=c.f
C.c.S(h.a,h.d,n)
n=d.gdD()
h=c.r
C.c.S(h.a,h.d,n);++f}}if(s.ch>0){k=a3.dx.r.length
q=a3.a.e0
C.c.a2(q.a,q.d,k)
q=a5.db
g=q.ga_(q)
for(q=a3.dx.r,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.D)(q),++e){d=q[e]
n=a3.a.cn
if(f>=n.length)return H.f(n,f)
c=n[f]
n=d.gcC(d)
h=c.b
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gck(d).kg()
h=c.c
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=g.aW(d.gcC(d))
h=c.d
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gaj(d)
h=c.e
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gkd()
h=c.f
C.c.S(h.a,h.d,n)
n=d.gkc()
h=c.r
C.c.S(h.a,h.d,n)
n=d.gdB()
h=c.x
C.c.S(h.a,h.d,n)
n=d.gdC()
h=c.y
C.c.S(h.a,h.d,n)
n=d.gdD()
h=c.z
C.c.S(h.a,h.d,n);++f}}if(s.cx>0){k=a3.dx.x.length
q=a3.a.e1
C.c.a2(q.a,q.d,k)
q=a5.db
g=q.ga_(q)
for(q=a3.dx.x,o=q.length,n=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.D)(q),++e){d=q[e]
h=a3.a.co
if(f>=h.length)return H.f(h,f)
c=h[f]
h=d.gcK()
H.k(l,"$ib",n,"$ab")
if(!C.a.V(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gck(d)
b=c.d
C.c.v(b.a,b.d,h.a,h.b,h.c)
h=d.gkh()
b=c.b
C.c.v(b.a,b.d,h.a,h.b,h.c)
h=d.gcI(d)
b=c.c
C.c.v(b.a,b.d,h.a,h.b,h.c)
h=g.ba(d.gck(d))
b=h.a
a=h.b
a0=h.c
a0=h.w(0,Math.sqrt(b*b+a*a+a0*a0))
a=c.e
b=a0.a
h=a0.b
a0=a0.c
C.c.v(a.a,a.d,b,h,a0)
a0=d.gaj(d)
h=c.f
C.c.v(h.a,h.d,a0.a,a0.b,a0.c)
a0=d.gcK()
h=a0.gee(a0)
if(!h){h=c.x
C.c.a2(h.a,h.d,1)}else{h=c.r
b=a0.d
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,a0.a)
h=c.x
C.c.a2(h.a,h.d,0)}++f}}if(s.cy>0){k=a3.dx.y.length
q=a3.a.e2
C.c.a2(q.a,q.d,k)
q=a5.db
g=q.ga_(q)
for(q=a3.dx.y,o=q.length,n=[P.r],h=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.D)(q),++e){d=q[e]
b=a3.a.cp
if(f>=b.length)return H.f(b,f)
c=b[f]
b=d.gcK()
H.k(l,"$ib",h,"$ab")
if(!C.a.V(l,b)){b.a=l.length
C.a.h(l,b)}a1=g.E(0,d.ga_(d))
b=d.ga_(d)
a=$.bL
b=b.aW(a==null?$.bL=new V.a2(0,0,0):a)
a=c.b
C.c.v(a.a,a.d,b.a,b.b,b.c)
b=$.bL
b=a1.aW(b==null?$.bL=new V.a2(0,0,0):b)
a=c.c
C.c.v(a.a,a.d,b.a,b.b,b.c)
b=a1.ec(0)
a=c.d
i=new Float32Array(H.cc(H.k(new V.dR(b.a,b.b,b.c,b.e,b.f,b.r,b.y,b.z,b.Q).ag(0,!0),"$ib",n,"$ab")))
C.c.eG(a.a,a.d,!1,i)
a=d.gaj(d)
b=c.e
C.c.v(b.a,b.d,a.a,a.b,a.c)
a=d.gcK()
b=a.gee(a)
if(!b){b=c.r
C.c.a2(b.a,b.d,1)}else{b=c.f
a0=a.gee(a)
a2=b.a
b=b.d
if(!a0)a2.uniform1i(b,0)
else a2.uniform1i(b,a.gke(a))
b=c.r
C.c.a2(b.a,b.d,0)}b=d.gdB()
a=c.x
C.c.S(a.a,a.d,b)
b=d.gdC()
a=c.y
C.c.S(a.a,a.d,b)
b=d.gdD()
a=c.z
C.c.S(a.a,a.d,b);++f}}if(s.db>0){k=a3.dx.z.length
q=a3.a.e3
C.c.a2(q.a,q.d,k)
q=a5.db
g=q.ga_(q)
for(q=a3.dx.z,o=q.length,a4=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.D)(q),++e){d=q[e]
n=a3.a.cq
if(f>=n.length)return H.f(n,f)
c=n[f]
n=d.r
H.k(l,"$ib",a4,"$ab")
if(n!=null)if(!C.a.V(l,n)){n.a=l.length
C.a.h(l,n)}n=d.a
h=c.b
b=n.a
a=n.b
n=n.c
C.c.v(h.a,h.d,b,a,n)
n=d.b
a=c.c
b=n.a
h=n.b
n=n.c
C.c.v(a.a,a.d,b,h,n)
n=d.c
h=c.d
b=n.a
a=n.b
n=n.c
C.c.v(h.a,h.d,b,a,n)
n=d.d
a=c.e
b=n.a
h=n.b
n=n.c
C.c.v(a.a,a.d,b,h,n)
n=g.aW(d.a)
h=c.f
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.r
h=n!=null
if(!h||!n.d){n=c.x
C.c.a2(n.a,n.d,1)}else{b=c.r
h=!h||!n.d
a=b.a
b=b.d
if(h)a.uniform1i(b,0)
else a.uniform1i(b,n.a)
n=c.x
C.c.a2(n.a,n.d,0)}n=d.f
h=c.y
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.x
h=c.z
C.c.S(h.a,h.d,n)
n=d.y
h=c.Q
C.c.S(h.a,h.d,n)
n=d.ch
h=c.ch
C.c.S(h.a,h.d,n)
n=d.cx
h=c.cx
C.c.S(h.a,h.d,n)
n=d.cy
h=c.cy
C.c.S(h.a,h.d,n);++f}}}switch(s.f){case C.d:break
case C.j:break
case C.h:a3.W(l,a3.Q.d)
a4=a3.a
q=a3.Q.d
a4.ai(a4.dP,a4.bu,q)
break
case C.i:a3.W(l,a3.Q.e)
a4=a3.a
q=a3.Q.e
a4.ac(a4.dQ,a4.bu,q)
break}if(s.fr){a4=a3.a
q=a5.Q
if(q==null){q=a5.db
q=a5.Q=q.ga_(q).ec(0)}a4=a4.id
a4.toString
a4.ao(q.ag(0,!0))}if(s.dy){a3.W(l,a3.ch)
a4=a3.a
q=a3.ch
a4.ac(a4.dR,a4.dS,q)
switch(s.r){case C.d:break
case C.j:a4=a3.a
q=a3.cx.f
a4=a4.bv
a4.toString
o=q.a
n=q.b
q=q.c
C.c.v(a4.a,a4.d,o,n,q)
break
case C.h:a3.W(l,a3.cx.d)
a4=a3.a
q=a3.cx.d
a4.ai(a4.dT,a4.bw,q)
q=a3.a
a4=a3.cx.f
q=q.bv
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.v(q.a,q.d,o,n,a4)
break
case C.i:a3.W(l,a3.cx.e)
a4=a3.a
q=a3.cx.e
a4.ac(a4.dU,a4.bw,q)
q=a3.a
a4=a3.cx.f
q=q.bv
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.v(q.a,q.d,o,n,a4)
break}switch(s.x){case C.d:break
case C.j:a4=a3.a
q=a3.cy.f
a4=a4.by
a4.toString
o=q.a
n=q.b
q=q.c
C.c.v(a4.a,a4.d,o,n,q)
q=a3.a
n=a3.cy.ch
q=q.bx
C.c.S(q.a,q.d,n)
break
case C.h:a3.W(l,a3.cy.d)
a4=a3.a
q=a3.cy.d
a4.ai(a4.dV,a4.bz,q)
q=a3.a
a4=a3.cy.f
q=q.by
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.v(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.bx
C.c.S(a4.a,a4.d,n)
break
case C.i:a3.W(l,a3.cy.e)
a4=a3.a
q=a3.cy.e
a4.ac(a4.dW,a4.bz,q)
q=a3.a
a4=a3.cy.f
q=q.by
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.v(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.bx
C.c.S(a4.a,a4.d,n)
break}}a4=s.y
q=a4!==C.d
if(q){switch(a4){case C.d:break
case C.j:a4=a3.a
o=a3.db.f
a4=a4.bA
C.c.S(a4.a,a4.d,o)
break
case C.h:a3.W(l,a3.db.d)
a4=a3.a
o=a3.db.d
a4.ai(a4.dX,a4.bB,o)
o=a3.a
a4=a3.db.f
o=o.bA
C.c.S(o.a,o.d,a4)
break
case C.i:a3.W(l,a3.db.e)
a4=a3.a
o=a3.db.e
a4.ac(a4.dY,a4.bB,o)
o=a3.a
a4=a3.db.f
o=o.bA
C.c.S(o.a,o.d,a4)
break}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j){a4=l[j]
if(!a4.c&&a4.d){a4.c=!0
p.activeTexture(33984+a4.a)
p.bindTexture(3553,a4.b)}}a4=a6.e
a4.ca(a5)
a4.aU(a5)
a4.k5(a5)
if(q)p.disable(3042)
for(j=0;j<l.length;++j){a4=l[j]
if(a4.c){a4.c=!1
p.activeTexture(33984+a4.a)
p.bindTexture(3553,null)}}a4=a3.a
a4.toString
p.useProgram(null)
a4.x.ja()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d3().ak},
sfq:function(a){this.e=H.k(a,"$ia6",[V.ao],"$aa6")}}
O.hv.prototype={}
O.dQ.prototype={
aN:function(){}}
O.hw.prototype={}
O.b5.prototype={
dn:function(a){var u,t,s=this
if(!J.W(s.f,a)){u=s.f
s.f=a
t=new D.P(s.b+".color",u,a,[V.a5])
t.b=!0
s.a.ab(t)}},
aN:function(){this.eV()
this.dn(new V.a5(1,1,1))},
saj:function(a,b){var u,t=this
if(t.c===C.d){t.c=C.j
t.aN()
u=t.a
u.a=null
u.ab(null)}t.dn(b)}}
O.hy.prototype={
i2:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.N().a)){u.ch=a
t=new D.P(u.b+".refraction",t,a,[P.r])
t.b=!0
u.a.ab(t)}},
aN:function(){this.bL()
this.i2(1)}}
O.hz.prototype={
c4:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.N().a)){u.ch=a
t=new D.P(u.b+".shininess",t,a,[P.r])
t.b=!0
u.a.ab(t)}},
aN:function(){this.bL()
this.c4(100)}}
O.bM.prototype={}
T.cQ.prototype={}
T.e9.prototype={}
T.iz.prototype={
gB:function(){var u=this.y
return u==null?this.y=D.Z():u}}
T.iA.prototype={
jt:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.iz()
t.a=0
t.b=q
t.d=t.c=!1
r=W.o
W.ab(u,"load",H.n(new T.iB(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
hZ:function(a,b,c){var u,t,s,r
b=V.lu(b)
u=V.lu(a.width)
t=V.lu(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kV()
s.width=u
s.height=t
r=H.h(C.m.eM(s,"2d"),"$icr")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oW(r.getImageData(0,0,s.width,s.height))}}}
T.iB.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.hZ(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.c.jW(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.jd()}++s.e},
$S:12}
V.bg.prototype={
aG:function(a,b){return!0},
i:function(a){return"all"},
$iaz:1}
V.az.prototype={}
V.dO.prototype={
aG:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)if(u[s].aG(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.D)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa8:function(a){this.a=H.k(a,"$ib",[V.az],"$ab")},
$iaz:1}
V.av.prototype={
aG:function(a,b){return!this.eU(0,b)},
i:function(a){return"!["+this.cQ(0)+"]"}}
V.i_.prototype={
aG:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c6(this.a),t=H.c6(this.b)
return u+".."+t},
$iaz:1}
V.i8.prototype={
f_:function(a){var u,t
if(a.a.length<=0)throw H.c(P.w("May not create a SetMatcher with zero characters."))
u=new H.aP([P.p,P.T])
for(t=new H.cC(a,a.gl(a),[H.as(a,"z",0)]);t.D();)u.n(0,t.d,!0)
this.si1(u)},
aG:function(a,b){return this.a.bl(0,b)},
i:function(a){var u=this.a
return P.cO(u.ga7(u),0,null)},
si1:function(a){this.a=H.k(a,"$iF",[P.p,P.T],"$aF")},
$iaz:1}
V.cM.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cS(this.a.k(0,b))
r.sa8(H.d([],[V.az]))
r.c=!1
C.a.h(this.c,r)
return r},
jh:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(r.aG(0,a))return r}return},
i:function(a){return this.b},
sim:function(a){this.c=H.k(a,"$ib",[V.cS],"$ab")}}
V.ed.prototype={
i:function(a){var u=H.lw(this.b,"\n","\\n"),t=H.lw(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cR.prototype={
aH:function(a,b,c){var u,t,s
H.k(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.D)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
shU:function(a){var u=P.e
this.c=H.k(a,"$iF",[u,u],"$aF")}}
V.iE.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cM(this,b)
u.sim(H.d([],[V.cS]))
u.d=null
this.a.n(0,b,u)}return u},
R:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cR(a)
u=P.e
t.shU(new H.aP([u,u]))
this.b.n(0,a,t)}return t},
eF:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.ed]),k=this.c,j=[P.p],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.F(a,s)
q=k.jh(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cO(i,0,m)
throw H.c(P.w("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cO(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.ed(n==null?o.b:n,p,s)}++s}}},
sia:function(a){this.a=H.k(a,"$iF",[P.e,V.cM],"$aF")},
sie:function(a){this.b=H.k(a,"$iF",[P.e,V.cR],"$aF")}}
V.cS.prototype={
i:function(a){return this.b.b+": "+this.cQ(0)}}
X.dv.prototype={$ibo:1}
X.h4.prototype={
gB:function(){var u=this.x
return u==null?this.x=D.Z():u}}
X.dY.prototype={
gB:function(){var u=this.f
return u==null?this.f=D.Z():u},
aL:function(a){var u
H.h(a,"$iB")
u=this.f
if(u!=null)u.L(a)},
fj:function(){return this.aL(null)},
saT:function(a){var u,t,s=this
if(!J.W(s.b,a)){u=s.b
if(u!=null)u.gB().N(0,s.gcU())
t=s.b
s.b=a
if(a!=null)a.gB().h(0,s.gcU())
u=new D.P("mover",t,s.b,[U.ak])
u.b=!0
s.aL(u)}},
$ibo:1,
$idv:1}
X.e7.prototype={}
V.bA.prototype={
be:function(a){this.b=new P.h8(C.U)
this.c=null
this.sbU(H.d([],[[P.b,W.aE]]))},
O:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aE]))
u=a.split("\n")
for(l=u.length,t=[W.aE],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.I(q)
o=m.b.fw(q,0,q.length)
n=o==null?q:o
C.S.eP(p,H.lw(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gax(m.d),p)}},
er:function(a,b){var u,t,s,r,q=this
H.k(b,"$ib",[P.e],"$ab")
q.sbU(H.d([],[[P.b,W.aE]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bm():t).eF(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)q.bE(t[r])},
sbU:function(a){this.d=H.k(a,"$ib",[[P.b,W.aE]],"$ab")}}
V.kN.prototype={
$1:function(a){H.h(a,"$ib9")
P.lv(C.e.eE(this.a.gjl(),2)+" fps")},
$S:50}
V.fL.prototype={
bE:function(a){var u=this
switch(a.a){case"Class":u.O(a.b,"#551")
break
case"Comment":u.O(a.b,"#777")
break
case"Id":u.O(a.b,"#111")
break
case"Num":u.O(a.b,"#191")
break
case"Reserved":u.O(a.b,"#119")
break
case"String":u.O(a.b,"#171")
break
case"Symbol":u.O(a.b,"#616")
break
case"Type":u.O(a.b,"#B11")
break
case"Whitespace":u.O(a.b,"#111")
break}},
bm:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iF()
a1.c=a1.k(0,r)
u=a1.k(0,r).m(0,q)
t=V.x(new H.v("_"))
C.a.h(u.a,t)
t=V.a0("a","z")
C.a.h(u.a,t)
t=V.a0("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).m(0,q)
u=V.x(new H.v("_"))
C.a.h(t.a,u)
u=V.a0("0","9")
C.a.h(t.a,u)
u=V.a0("a","z")
C.a.h(t.a,u)
u=V.a0("A","Z")
C.a.h(t.a,u)
u=a1.k(0,r).m(0,p)
t=V.a0("0","9")
C.a.h(u.a,t)
t=a1.k(0,p).m(0,p)
u=V.a0("0","9")
C.a.h(t.a,u)
u=a1.k(0,p).m(0,o)
t=V.x(new H.v("."))
C.a.h(u.a,t)
t=a1.k(0,o).m(0,n)
u=V.a0("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).m(0,n)
t=V.a0("0","9")
C.a.h(u.a,t)
t=a1.k(0,r).m(0,m)
u=V.x(new H.v(l))
C.a.h(t.a,u)
u=a1.k(0,m).m(0,m)
t=V.x(new H.v(l))
C.a.h(u.a,t)
t=a1.k(0,r).m(0,k)
u=V.x(new H.v('"'))
C.a.h(t.a,u)
u=a1.k(0,k).m(0,j)
t=V.x(new H.v('"'))
C.a.h(u.a,t)
t=a1.k(0,k).m(0,i)
u=V.x(new H.v("\\"))
C.a.h(t.a,u)
u=a1.k(0,i).m(0,k)
t=V.x(new H.v('"'))
C.a.h(u.a,t)
C.a.h(a1.k(0,k).m(0,k).a,new V.bg())
t=a1.k(0,r).m(0,h)
u=V.x(new H.v("'"))
C.a.h(t.a,u)
u=a1.k(0,h).m(0,g)
t=V.x(new H.v("'"))
C.a.h(u.a,t)
t=a1.k(0,h).m(0,f)
u=V.x(new H.v("\\"))
C.a.h(t.a,u)
u=a1.k(0,f).m(0,h)
t=V.x(new H.v("'"))
C.a.h(u.a,t)
C.a.h(a1.k(0,h).m(0,h).a,new V.bg())
t=a1.k(0,r).m(0,e)
u=V.x(new H.v("/"))
C.a.h(t.a,u)
u=a1.k(0,e).m(0,d)
t=V.x(new H.v("/"))
C.a.h(u.a,t)
t=a1.k(0,d).m(0,c)
u=V.x(new H.v("\n"))
C.a.h(t.a,u)
u=a1.k(0,d).m(0,d)
t=new V.av()
s=[V.az]
t.sa8(H.d([],s))
C.a.h(u.a,t)
u=V.x(new H.v("\n"))
C.a.h(t.a,u)
u=a1.k(0,e).m(0,b)
t=V.x(new H.v("*"))
C.a.h(u.a,t)
t=a1.k(0,b).m(0,a)
u=V.x(new H.v("*"))
C.a.h(t.a,u)
u=a1.k(0,a).m(0,b)
t=new V.av()
t.sa8(H.d([],s))
C.a.h(u.a,t)
u=V.x(new H.v("*"))
C.a.h(t.a,u)
u=a1.k(0,a).m(0,c)
t=V.x(new H.v("/"))
C.a.h(u.a,t)
t=a1.k(0,r).m(0,a0)
u=V.x(new H.v(" \n\t"))
C.a.h(t.a,u)
u=a1.k(0,a0).m(0,a0)
t=V.x(new H.v(" \n\t"))
C.a.h(u.a,t)
t=a1.k(0,p)
t.d=t.a.R("Num")
t=a1.k(0,n)
t.d=t.a.R("Num")
t=a1.k(0,m)
t.d=t.a.R("Symbol")
t=a1.k(0,j)
t.d=t.a.R("String")
t=a1.k(0,g)
t.d=t.a.R("String")
t=a1.k(0,c)
t.d=t.a.R(d)
t=a1.k(0,a0)
t.d=t.a.R(a0)
t=a1.k(0,q)
t=t.d=t.a.R(q)
u=[P.e]
t.aH(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aH(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aH(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.h5.prototype={
bE:function(a){var u=this
switch(a.a){case"Builtin":u.O(a.b,"#411")
break
case"Comment":u.O(a.b,"#777")
break
case"Id":u.O(a.b,"#111")
break
case"Num":u.O(a.b,"#191")
break
case"Preprocess":u.O(a.b,"#737")
break
case"Reserved":u.O(a.b,"#119")
break
case"Symbol":u.O(a.b,"#611")
break
case"Type":u.O(a.b,"#171")
break
case"Whitespace":u.O(a.b,"#111")
break}},
bm:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iF()
e.c=e.k(0,r)
u=e.k(0,r).m(0,q)
t=V.x(new H.v("_"))
C.a.h(u.a,t)
t=V.a0("a","z")
C.a.h(u.a,t)
t=V.a0("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).m(0,q)
u=V.x(new H.v("_"))
C.a.h(t.a,u)
u=V.a0("0","9")
C.a.h(t.a,u)
u=V.a0("a","z")
C.a.h(t.a,u)
u=V.a0("A","Z")
C.a.h(t.a,u)
u=e.k(0,r).m(0,p)
t=V.a0("0","9")
C.a.h(u.a,t)
t=e.k(0,p).m(0,p)
u=V.a0("0","9")
C.a.h(t.a,u)
u=e.k(0,p).m(0,o)
t=V.x(new H.v("."))
C.a.h(u.a,t)
t=e.k(0,o).m(0,n)
u=V.a0("0","9")
C.a.h(t.a,u)
u=e.k(0,n).m(0,n)
t=V.a0("0","9")
C.a.h(u.a,t)
t=e.k(0,r).m(0,m)
u=V.x(new H.v(l))
C.a.h(t.a,u)
u=e.k(0,m).m(0,m)
t=V.x(new H.v(l))
C.a.h(u.a,t)
t=e.k(0,r).m(0,k)
u=V.x(new H.v("/"))
C.a.h(t.a,u)
u=e.k(0,k).m(0,j)
t=V.x(new H.v("/"))
C.a.h(u.a,t)
C.a.h(e.k(0,k).m(0,m).a,new V.bg())
t=e.k(0,j).m(0,i)
u=V.x(new H.v("\n"))
C.a.h(t.a,u)
u=e.k(0,j).m(0,j)
t=new V.av()
s=[V.az]
t.sa8(H.d([],s))
C.a.h(u.a,t)
u=V.x(new H.v("\n"))
C.a.h(t.a,u)
u=e.k(0,r).m(0,h)
t=V.x(new H.v("#"))
C.a.h(u.a,t)
t=e.k(0,h).m(0,h)
u=new V.av()
u.sa8(H.d([],s))
C.a.h(t.a,u)
t=V.x(new H.v("\n"))
C.a.h(u.a,t)
t=e.k(0,h).m(0,g)
u=V.x(new H.v("\n"))
C.a.h(t.a,u)
u=e.k(0,r).m(0,f)
t=V.x(new H.v(" \n\t"))
C.a.h(u.a,t)
t=e.k(0,f).m(0,f)
u=V.x(new H.v(" \n\t"))
C.a.h(t.a,u)
u=e.k(0,p)
u.d=u.a.R("Num")
u=e.k(0,n)
u.d=u.a.R("Num")
u=e.k(0,m)
u.d=u.a.R("Symbol")
u=e.k(0,i)
u.d=u.a.R(j)
u=e.k(0,g)
u.d=u.a.R(h)
u=e.k(0,f)
u.d=u.a.R(f)
u=e.k(0,q)
u=u.d=u.a.R(q)
t=[P.e]
u.aH(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aH(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aH(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.h6.prototype={
bE:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.O(a.b,"#911")
u.O("=",t)
break
case"Id":u.O(a.b,t)
break
case"Other":u.O(a.b,t)
break
case"Reserved":u.O(a.b,"#119")
break
case"String":u.O(a.b,"#171")
break
case"Symbol":u.O(a.b,"#616")
break}},
bm:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iF()
l.c=l.k(0,s)
u=l.k(0,s).m(0,r)
t=V.x(new H.v("_"))
C.a.h(u.a,t)
t=V.a0("a","z")
C.a.h(u.a,t)
t=V.a0("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).m(0,r)
u=V.x(new H.v("_"))
C.a.h(t.a,u)
u=V.a0("0","9")
C.a.h(t.a,u)
u=V.a0("a","z")
C.a.h(t.a,u)
u=V.a0("A","Z")
C.a.h(t.a,u)
u=l.k(0,r).m(0,q)
t=V.x(new H.v("="))
C.a.h(u.a,t)
u.c=!0
u=l.k(0,s).m(0,p)
t=V.x(new H.v("</\\-!>="))
C.a.h(u.a,t)
t=l.k(0,p).m(0,p)
u=V.x(new H.v("</\\-!>="))
C.a.h(t.a,u)
u=l.k(0,s).m(0,o)
t=V.x(new H.v('"'))
C.a.h(u.a,t)
t=l.k(0,o).m(0,n)
u=V.x(new H.v('"'))
C.a.h(t.a,u)
u=l.k(0,o).m(0,"EscStr")
t=V.x(new H.v("\\"))
C.a.h(u.a,t)
t=l.k(0,"EscStr").m(0,o)
u=V.x(new H.v('"'))
C.a.h(t.a,u)
C.a.h(l.k(0,o).m(0,o).a,new V.bg())
C.a.h(l.k(0,s).m(0,m).a,new V.bg())
u=l.k(0,m).m(0,m)
t=new V.av()
t.sa8(H.d([],[V.az]))
C.a.h(u.a,t)
u=V.x(new H.v('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.a0("a","z")
C.a.h(t.a,u)
u=V.a0("A","Z")
C.a.h(t.a,u)
u=l.k(0,p)
u.d=u.a.R("Symbol")
u=l.k(0,n)
u.d=u.a.R("String")
u=l.k(0,r)
t=u.a.R(r)
u.d=t
t.aH(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
t=l.k(0,q)
t.d=t.a.R(q)
t=l.k(0,m)
t.d=t.a.R(m)
return l}}
V.hU.prototype={
er:function(a,b){H.k(b,"$ib",[P.e],"$ab")
this.sbU(H.d([],[[P.b,W.aE]]))
this.O(C.a.m(b,"\n"),"#111")},
bE:function(a){},
bm:function(){return}}
V.hY.prototype={
dv:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.mc().gcE().j(0,H.l(u))
if(t==null)if(d){c.$0()
m.dt(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lD(m.c).h(0,q)
o=W.nC("radio")
o.checked=s
o.name=u
u=W.o
W.ab(o,"change",H.n(new V.hZ(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lD(m.c).h(0,r.createElement("br"))},
b1:function(a,b,c){return this.dv(a,b,c,!1)},
dt:function(a){var u,t,s=P.mc(),r=P.e,q=P.nK(s.gcE(),r,r)
q.n(0,this.a,a)
u=s.ey(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.k0([],[]).cL(""),"",t)}}
V.hZ.prototype={
$1:function(a){var u=this
if(H.H(u.b.checked)){u.c.$0()
u.a.dt(u.d)}},
$S:12}
V.ic.prototype={
f1:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.ab(q,"scroll",H.n(new V.ie(o),{func:1,ret:-1,args:[r]}),!1,r)},
dz:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.e],"$ab")
this.i5()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eF(C.a.jr(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q){p=s[q]
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
if(H.pn(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.f(m,1)
l.href=H.I(m[1])
l.textContent=H.I(m[0])
t.appendChild(l)}else{k=P.f7(C.C,n,C.l,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.l(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
eL:function(a){var u,t,s,r=new V.fL("dart")
r.be("dart")
u=new V.h5("glsl")
u.be("glsl")
t=new V.h6("html")
t.be("html")
s=C.a.jj(H.d([r,u,t],[V.bA]),new V.ig(a))
if(s!=null)return s
r=new V.hU("plain")
r.be("plain")
return r},
dw:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.k(b0,"$ib",[P.e],"$ab")
u=H.d([],[P.p])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dj(r).a4(r,"+")){C.a.n(b0,s,C.b.ap(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a4(r,"-")){C.a.n(b0,s,C.b.ap(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eL(a8)
q.er(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.f7(C.C,a7,C.l,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lF()
i.href="#"+H.l(m)
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
if(s>=u.length)return H.f(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.D)(r),++a0)C.a3.iW(a,r[a0])
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
for(a3=C.a.gU(r);a3.D();)c.appendChild(a3.gK(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
iP:function(a){var u,t,s,r,q,p,o,n="auto"
H.k(a,"$ib",[P.e],"$ab")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft=n
s.marginRight=n
this.a.appendChild(t)
r=t.insertRow(-1)
s=H.h(r.insertCell(-1),"$ib8").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
for(q=0;q<1;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.h(r.insertCell(-1),"$ib8")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
i5:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iF()
u.c=u.k(0,q)
t=u.k(0,q).m(0,p)
s=V.x(new H.v("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).m(0,p)
s=new V.av()
r=[V.az]
s.sa8(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.v("*"))
C.a.h(s.a,t)
t=u.k(0,p).m(0,"BoldEnd")
s=V.x(new H.v("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,o)
s=V.x(new H.v("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,o).m(0,o)
s=new V.av()
s.sa8(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.v("_"))
C.a.h(s.a,t)
t=u.k(0,o).m(0,n)
s=V.x(new H.v("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,m)
s=V.x(new H.v("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,m).m(0,m)
s=new V.av()
s.sa8(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.v("`"))
C.a.h(s.a,t)
t=u.k(0,m).m(0,"CodeEnd")
s=V.x(new H.v("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,l)
s=V.x(new H.v("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,l).m(0,k)
s=V.x(new H.v("|"))
C.a.h(t.a,s)
s=u.k(0,l).m(0,j)
t=V.x(new H.v("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,l).m(0,l)
t=new V.av()
t.sa8(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("|]"))
C.a.h(t.a,s)
s=u.k(0,k).m(0,j)
t=V.x(new H.v("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).m(0,k)
t=new V.av()
t.sa8(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).m(0,i).a,new V.bg())
s=u.k(0,i).m(0,i)
t=new V.av()
t.sa8(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.R(p)
s=u.k(0,n)
s.d=s.a.R(o)
s=u.k(0,"CodeEnd")
s.d=s.a.R(m)
s=u.k(0,j)
s.d=s.a.R("Link")
s=u.k(0,i)
s.d=s.a.R(i)
this.b=u}}
V.ie.prototype={
$1:function(a){P.m8(C.t,new V.id(this.a))},
$S:12}
V.id.prototype={
$0:function(){var u=C.e.an(document.documentElement.scrollTop),t=this.a.style,s=H.l(-0.01*u)+"px"
t.top=s},
$S:0}
V.ig.prototype={
$1:function(a){return H.h(a,"$ibA").a===this.a},
$S:51}
L.kE.prototype={
$0:function(){this.a.sa9(0,F.lp(1,null,null,1))},
$S:0}
L.kF.prototype={
$0:function(){this.a.sa9(0,F.lq(1,!0,!0,40,1))},
$S:0}
L.kG.prototype={
$0:function(){this.a.sa9(0,F.lq(1,!0,!1,40,0))},
$S:0}
L.kH.prototype={
$0:function(){this.a.sa9(0,F.pm(6,6))},
$S:0}
L.kI.prototype={
$0:function(){this.a.sa9(0,F.mV())},
$S:0}
L.kJ.prototype={
$0:function(){this.a.sa9(0,F.pd())},
$S:0}
L.kK.prototype={
$1:function(a){var u,t,s,r
H.h(a,"$iB")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.dw("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dw("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:5};(function aliases(){var u=J.a.prototype
u.eR=u.i
u=J.dI.prototype
u.eT=u.i
u=P.i.prototype
u.eS=u.bG
u=W.V.prototype
u.bK=u.ad
u=W.eQ.prototype
u.eW=u.au
u=O.dQ.prototype
u.eV=u.aN
u=O.b5.prototype
u.bL=u.aN
u=V.dO.prototype
u.eU=u.aG
u.cQ=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"oQ","oj",11)
u(P,"oR","ok",11)
u(P,"oS","ol",11)
t(P,"mH","oO",3)
s(W,"p6",4,null,["$4"],["on"],20,0)
s(W,"p7",4,null,["$4"],["oo"],20,0)
var m
r(m=E.an.prototype,"gen",0,0,null,["$1","$0"],["eo","jD"],1,0)
r(m,"gep",0,0,null,["$1","$0"],["eq","jE"],1,0)
r(m,"gel",0,0,null,["$1","$0"],["em","jC"],1,0)
r(m,"gej",0,0,null,["$1","$0"],["ek","jz"],1,0)
q(m,"gjx","jy",10)
q(m,"gjA","jB",10)
r(m=E.ec.prototype,"gcR",0,0,null,["$1","$0"],["cT","cS"],1,0)
p(m,"gjS","ez",3)
o(m=X.ej.prototype,"ghj","hk",14)
o(m,"gh6","h7",14)
o(m,"ghd","he",4)
o(m,"ghn","ho",26)
o(m,"ghl","hm",26)
o(m,"ghr","hs",4)
o(m,"ghv","hw",4)
o(m,"ghh","hi",4)
o(m,"ght","hu",4)
o(m,"ghf","hg",4)
o(m,"ghx","hy",36)
o(m,"ghz","hA",14)
o(m,"ghM","hN",13)
o(m,"ghI","hJ",13)
o(m,"ghK","hL",13)
r(m=D.dK.prototype,"gdg",0,0,null,["$1","$0"],["dh","hp"],1,0)
o(m,"ghC","hD",38)
q(m,"gh0","h1",18)
q(m,"ghG","hH",18)
r(D.bN.prototype,"gbZ",0,0,null,["$1","$0"],["a5","h8"],1,0)
n(V.a4.prototype,"gl","cw",30)
n(V.K.prototype,"gl","cw",30)
r(m=U.cz.prototype,"gbf",0,0,null,["$1","$0"],["Z","aq"],1,0)
q(m,"gfb","fc",29)
q(m,"ghE","hF",29)
r(m=U.ek.prototype,"gbf",0,0,null,["$1","$0"],["Z","aq"],1,0)
o(m,"gfU","fV",2)
o(m,"gfW","fX",2)
o(m,"gfY","fZ",2)
o(m,"gfQ","fR",2)
o(m,"gfS","fT",2)
o(m,"gik","il",2)
o(m,"gii","ij",2)
o(m,"gig","ih",2)
r(m=M.dC.prototype,"gar",0,0,null,["$1","$0"],["aA","fd"],1,0)
q(m,"gh9","ha",10)
q(m,"ghb","hc",10)
r(m=O.dP.prototype,"gff",0,0,null,["$1","$0"],["ab","fg"],1,0)
r(m,"ghX",0,0,null,["$1","$0"],["dl","hY"],1,0)
q(m,"gh2","h3",19)
q(m,"gh4","h5",19)
r(X.dY.prototype,"gcU",0,0,null,["$1","$0"],["aL","fj"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.R,null)
s(P.R,[H.l2,J.a,J.au,P.eD,P.i,H.cC,P.b2,H.c_,H.d_,H.fE,H.iK,P.bC,H.cs,H.eV,P.ad,H.hi,H.hk,H.hd,P.f0,P.be,P.aJ,P.en,P.ip,P.cN,P.iq,P.b9,P.am,P.kg,P.jV,P.ca,P.eC,P.z,P.k8,P.hq,P.bX,P.h9,P.ke,P.kd,P.T,P.ay,P.ac,P.b1,P.hS,P.e5,P.ev,P.h3,P.bD,P.b,P.F,P.M,P.aw,P.e,P.ag,P.cb,P.j_,P.jY,W.fH,W.bQ,W.E,W.dW,W.eQ,W.k3,W.dE,W.aA,W.jU,W.f8,P.k_,P.f5,P.jP,P.S,O.a6,O.cD,E.fy,E.an,E.i0,E.ec,Z.em,Z.jn,Z.dt,Z.bE,Z.bc,D.fB,D.bZ,D.B,X.du,X.dJ,X.hf,X.hn,X.bG,X.hG,X.iG,X.ej,D.dz,D.a8,D.dZ,D.e4,D.ea,D.eb,D.bN,V.a5,V.aM,V.fV,V.dR,V.ao,V.aa,V.a2,V.b7,V.e1,V.a4,V.K,U.ek,M.dC,A.dq,A.fr,A.hx,A.cT,A.cX,A.cV,A.cY,A.cW,A.cZ,A.bY,A.ef,A.iU,F.a9,F.fY,F.bm,F.hh,F.bJ,F.e3,F.i9,F.ia,F.ib,F.ah,F.jb,F.jc,F.jf,F.jh,F.ji,F.jj,O.bM,O.dQ,T.iA,V.bg,V.az,V.dO,V.i_,V.i8,V.cM,V.ed,V.cR,V.iE,X.dv,X.e7,X.dY,V.bA,V.hY,V.ic])
s(J.a,[J.hc,J.dH,J.dI,J.aO,J.bF,J.bk,H.cF,H.bI,W.j,W.fo,W.bV,W.cr,W.b_,W.b0,W.X,W.ep,W.fM,W.fN,W.er,W.dB,W.et,W.fP,W.o,W.ew,W.aN,W.h7,W.ey,W.bj,W.dM,W.hA,W.eE,W.eF,W.aQ,W.eG,W.eJ,W.aR,W.eN,W.eP,W.aT,W.eR,W.aU,W.eW,W.aG,W.eZ,W.iD,W.aW,W.f1,W.iI,W.j4,W.f9,W.fb,W.fd,W.ff,W.fh,P.b4,P.eA,P.b6,P.eL,P.hX,P.eX,P.ba,P.f3,P.fs,P.eo,P.dr,P.e_,P.c8,P.e2,P.e8,P.eg,P.eT])
s(J.dI,[J.hT,J.bP,J.bl])
t(J.l1,J.aO)
s(J.bF,[J.dG,J.dF])
t(P.hm,P.eD)
s(P.hm,[H.eh,W.jv,W.ar,P.h_])
t(H.v,H.eh)
s(P.i,[H.fS,H.hr,H.d1])
s(H.fS,[H.c3,H.hj])
s(P.b2,[H.hs,H.jo])
t(H.ht,H.c3)
t(H.fF,H.fE)
s(P.bC,[H.hP,H.he,H.iY,H.iM,H.fA,H.i6,P.fq,P.dX,P.aL,P.iZ,P.iW,P.c9,P.fD,P.fK])
s(H.cs,[H.kR,H.iw,H.ky,H.kz,H.kA,P.jr,P.jq,P.js,P.jt,P.k7,P.k6,P.jC,P.jG,P.jD,P.jE,P.jF,P.jJ,P.jK,P.jI,P.jH,P.ir,P.is,P.ko,P.jS,P.jR,P.jT,P.hl,P.hp,P.fQ,P.fR,P.j3,P.j0,P.j1,P.j2,P.k9,P.ka,P.kc,P.kb,P.kk,P.kj,P.kl,P.km,W.fT,W.hC,W.hE,W.i5,W.io,W.jB,W.hN,W.hM,W.jW,W.jX,W.k5,W.kf,P.k1,P.kq,P.h0,P.h1,P.fu,E.i1,E.i2,E.i3,E.iC,D.fW,D.fX,F.kh,F.kr,F.kt,F.ku,F.kv,F.kO,F.kP,F.kQ,F.kC,F.ks,F.jl,F.jk,F.jd,F.je,T.iB,V.kN,V.hZ,V.ie,V.id,V.ig,L.kE,L.kF,L.kG,L.kH,L.kI,L.kJ,L.kK])
s(H.iw,[H.il,H.cp])
t(H.jp,P.fq)
t(P.ho,P.ad)
s(P.ho,[H.aP,W.ju])
t(H.dT,H.bI)
s(H.dT,[H.d6,H.d8])
t(H.d7,H.d6)
t(H.cG,H.d7)
t(H.d9,H.d8)
t(H.dU,H.d9)
s(H.dU,[H.hH,H.hI,H.hJ,H.hK,H.hL,H.dV,H.cH])
t(P.jQ,P.kg)
t(P.jO,P.jV)
t(P.f6,P.hq)
t(P.ei,P.f6)
s(P.bX,[P.fw,P.fU])
t(P.bB,P.iq)
s(P.bB,[P.fx,P.h8,P.j7,P.j6])
t(P.j5,P.fU)
s(P.ac,[P.r,P.p])
s(P.aL,[P.c7,P.ha])
t(P.jx,P.cb)
s(W.j,[W.C,W.fZ,W.cE,W.aS,W.da,W.aV,W.aH,W.dc,W.jm,W.d2,P.fv,P.bU])
s(W.C,[W.V,W.bz,W.d3])
s(W.V,[W.y,P.q])
s(W.y,[W.dn,W.fp,W.co,W.by,W.bW,W.aE,W.h2,W.cA,W.cB,W.i7,W.b8,W.e6,W.iu,W.iv,W.cP])
s(W.b_,[W.ct,W.fI,W.fJ])
t(W.fG,W.b0)
t(W.cu,W.ep)
t(W.es,W.er)
t(W.dA,W.es)
t(W.eu,W.et)
t(W.fO,W.eu)
t(W.aF,W.bV)
t(W.ex,W.ew)
t(W.cx,W.ex)
t(W.ez,W.ey)
t(W.c0,W.ez)
t(W.bO,W.o)
s(W.bO,[W.b3,W.ae,W.aX])
t(W.hB,W.eE)
t(W.hD,W.eF)
t(W.eH,W.eG)
t(W.hF,W.eH)
t(W.eK,W.eJ)
t(W.cI,W.eK)
t(W.eO,W.eN)
t(W.hV,W.eO)
t(W.i4,W.eP)
t(W.db,W.da)
t(W.ii,W.db)
t(W.eS,W.eR)
t(W.ij,W.eS)
t(W.im,W.eW)
t(W.f_,W.eZ)
t(W.ix,W.f_)
t(W.dd,W.dc)
t(W.iy,W.dd)
t(W.f2,W.f1)
t(W.iH,W.f2)
t(W.bd,W.ae)
t(W.fa,W.f9)
t(W.jw,W.fa)
t(W.eq,W.dB)
t(W.fc,W.fb)
t(W.jL,W.fc)
t(W.fe,W.fd)
t(W.eI,W.fe)
t(W.fg,W.ff)
t(W.jZ,W.fg)
t(W.fi,W.fh)
t(W.k2,W.fi)
t(W.jy,W.ju)
t(W.jz,P.ip)
t(W.ld,W.jz)
t(W.jA,P.cN)
t(W.k4,W.eQ)
t(P.k0,P.k_)
t(P.al,P.jP)
t(P.eB,P.eA)
t(P.hg,P.eB)
t(P.eM,P.eL)
t(P.hQ,P.eM)
t(P.cK,P.q)
t(P.eY,P.eX)
t(P.it,P.eY)
t(P.f4,P.f3)
t(P.iJ,P.f4)
t(P.ft,P.eo)
t(P.hR,P.bU)
t(P.eU,P.eT)
t(P.ik,P.eU)
s(E.fy,[Z.ds,A.cL,T.cQ])
s(D.B,[D.c1,D.c2,D.P,X.hW])
s(X.hW,[X.dN,X.bH,X.ee])
s(O.a6,[D.dK,U.cz])
s(D.fB,[U.fC,U.ak])
t(U.dw,U.ak)
t(A.hu,A.cL)
s(A.ef,[A.Q,A.iQ,A.iR,A.iT,A.iO,A.a3,A.iP,A.O,A.iS,A.iV,A.cU,A.aB,A.ap,A.aq])
t(F.ih,F.fY)
t(F.iN,F.hh)
t(F.jg,F.jh)
t(F.hO,F.ji)
t(O.dP,O.bM)
s(O.dQ,[O.hv,O.hw,O.b5])
s(O.b5,[O.hy,O.hz])
t(T.e9,T.cQ)
t(T.iz,T.e9)
s(V.dO,[V.av,V.cS])
t(X.h4,X.e7)
s(V.bA,[V.fL,V.h5,V.h6,V.hU])
u(H.eh,H.d_)
u(H.d6,P.z)
u(H.d7,H.c_)
u(H.d8,P.z)
u(H.d9,H.c_)
u(P.eD,P.z)
u(P.f6,P.k8)
u(W.ep,W.fH)
u(W.er,P.z)
u(W.es,W.E)
u(W.et,P.z)
u(W.eu,W.E)
u(W.ew,P.z)
u(W.ex,W.E)
u(W.ey,P.z)
u(W.ez,W.E)
u(W.eE,P.ad)
u(W.eF,P.ad)
u(W.eG,P.z)
u(W.eH,W.E)
u(W.eJ,P.z)
u(W.eK,W.E)
u(W.eN,P.z)
u(W.eO,W.E)
u(W.eP,P.ad)
u(W.da,P.z)
u(W.db,W.E)
u(W.eR,P.z)
u(W.eS,W.E)
u(W.eW,P.ad)
u(W.eZ,P.z)
u(W.f_,W.E)
u(W.dc,P.z)
u(W.dd,W.E)
u(W.f1,P.z)
u(W.f2,W.E)
u(W.f9,P.z)
u(W.fa,W.E)
u(W.fb,P.z)
u(W.fc,W.E)
u(W.fd,P.z)
u(W.fe,W.E)
u(W.ff,P.z)
u(W.fg,W.E)
u(W.fh,P.z)
u(W.fi,W.E)
u(P.eA,P.z)
u(P.eB,W.E)
u(P.eL,P.z)
u(P.eM,W.E)
u(P.eX,P.z)
u(P.eY,W.E)
u(P.f3,P.z)
u(P.f4,W.E)
u(P.eo,P.ad)
u(P.eT,P.z)
u(P.eU,W.E)})();(function constants(){var u=hunkHelpers.makeConstList
C.x=W.by.prototype
C.m=W.bW.prototype
C.S=W.aE.prototype
C.V=J.a.prototype
C.a=J.aO.prototype
C.W=J.dF.prototype
C.f=J.dG.prototype
C.n=J.dH.prototype
C.e=J.bF.prototype
C.b=J.bk.prototype
C.X=J.bl.prototype
C.a2=W.cI.prototype
C.F=J.hT.prototype
C.c=P.c8.prototype
C.a3=W.b8.prototype
C.G=W.e6.prototype
C.w=J.bP.prototype
C.H=W.bd.prototype
C.I=W.d2.prototype
C.a4=new P.fx()
C.J=new P.fw()
C.y=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.K=function() {
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
C.P=function(getTagFallback) {
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
C.L=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.M=function(hooks) {
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
C.O=function(hooks) {
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
C.N=function(hooks) {
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
C.z=function(hooks) { return hooks; }

C.Q=new P.hS()
C.l=new P.j5()
C.R=new P.j7()
C.k=new P.jQ()
C.d=new A.bY(0,"ColorSourceType.None")
C.j=new A.bY(1,"ColorSourceType.Solid")
C.h=new A.bY(2,"ColorSourceType.Texture2D")
C.i=new A.bY(3,"ColorSourceType.TextureCube")
C.t=new P.b1(0)
C.T=new P.b1(5e6)
C.U=new P.h9("element",!0,!1,!1,!1)
C.A=H.d(u([127,2047,65535,1114111]),[P.p])
C.o=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.p])
C.Y=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.p=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.p])
C.q=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.p])
C.Z=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.B=H.d(u([]),[P.e])
C.a_=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.p])
C.C=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.p])
C.r=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.p])
C.D=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.p])
C.a0=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.p])
C.E=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.p])
C.u=H.d(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.v=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.a1=new H.fF(0,{},C.B,[P.e,P.e])})()
var v={mangledGlobalNames:{p:"int",r:"double",ac:"num",e:"String",T:"bool",M:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.M},{func:1,ret:-1,opt:[D.B]},{func:1,ret:-1,args:[D.B]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ae]},{func:1,ret:P.M,args:[D.B]},{func:1,ret:P.M,args:[F.a9]},{func:1,ret:P.M,args:[,,]},{func:1,ret:P.M,args:[F.ah,P.r,P.r]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.p,[P.i,E.an]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.M,args:[W.o]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.e,args:[P.e]},{func:1,args:[,]},{func:1,ret:-1,args:[P.p,[P.i,D.a8]]},{func:1,ret:-1,args:[P.p,[P.i,V.ao]]},{func:1,ret:P.T,args:[W.V,P.e,P.e,W.bQ]},{func:1,ret:P.T,args:[W.C]},{func:1,ret:P.e,args:[P.p]},{func:1,ret:P.r,args:[P.r]},{func:1,ret:P.T,args:[W.aA]},{func:1,ret:P.T,args:[P.e]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:P.M,args:[,]},{func:1,ret:V.a2,args:[P.r]},{func:1,ret:-1,args:[P.p,[P.i,U.ak]]},{func:1,ret:P.r},{func:1,ret:P.M,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:P.r,args:[P.r,P.r]},{func:1,ret:W.V,args:[W.C]},{func:1,args:[W.o]},{func:1,ret:P.S,args:[,,]},{func:1,ret:-1,args:[W.bd]},{func:1,ret:P.S,args:[P.p]},{func:1,ret:P.T,args:[[P.i,D.a8]]},{func:1,ret:P.M,args:[P.e,,]},{func:1,ret:P.M,args:[P.e]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:-1,args:[P.e],opt:[,]},{func:1,ret:-1,args:[P.e,P.p]},{func:1,ret:-1,args:[W.C,W.C]},{func:1,ret:[P.F,P.e,P.e],args:[[P.F,P.e,P.e],P.e]},{func:1,ret:[P.aJ,,],args:[,]},{func:1,ret:P.M,args:[,],opt:[P.aw]},{func:1,ret:P.M,args:[{func:1,ret:-1}]},{func:1,args:[P.e]},{func:1,ret:P.M,args:[P.b9]},{func:1,ret:P.T,args:[V.bA]},{func:1,args:[,P.e]},{func:1,ret:P.M,args:[P.ac]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aZ=0
$.cq=null
$.lH=null
$.lh=!1
$.mM=null
$.mF=null
$.mS=null
$.kw=null
$.kB=null
$.ls=null
$.cd=null
$.dh=null
$.di=null
$.li=!1
$.a1=C.k
$.ax=[]
$.bi=null
$.kX=null
$.lN=null
$.lM=null
$.d5=P.l4(P.e,P.bD)
$.lV=null
$.lZ=null
$.bL=null
$.m3=null
$.mg=null
$.mj=null
$.mi=null
$.j8=null
$.j9=null
$.ja=null
$.mh=null
$.lY=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pv","mX",function(){return H.mL("_$dart_dartClosure")})
u($,"pw","ly",function(){return H.mL("_$dart_js")})
u($,"pC","mY",function(){return H.bb(H.iL({
toString:function(){return"$receiver$"}}))})
u($,"pD","mZ",function(){return H.bb(H.iL({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pE","n_",function(){return H.bb(H.iL(null))})
u($,"pF","n0",function(){return H.bb(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pI","n3",function(){return H.bb(H.iL(void 0))})
u($,"pJ","n4",function(){return H.bb(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pH","n2",function(){return H.bb(H.ma(null))})
u($,"pG","n1",function(){return H.bb(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pL","n6",function(){return H.bb(H.ma(void 0))})
u($,"pK","n5",function(){return H.bb(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"q1","lz",function(){return P.oi()})
u($,"pO","n7",function(){return P.oe()})
u($,"q2","nb",function(){return H.nP(H.cc(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.p])))})
u($,"q4","nd",function(){return P.o2("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"q5","ne",function(){return P.oH()})
u($,"q3","nc",function(){return P.lP(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"pV","na",function(){return Z.aI(0)})
u($,"pP","n8",function(){return Z.aI(511)})
u($,"pX","bu",function(){return Z.aI(1)})
u($,"pW","bt",function(){return Z.aI(2)})
u($,"pR","bs",function(){return Z.aI(4)})
u($,"pY","bv",function(){return Z.aI(8)})
u($,"pZ","bw",function(){return Z.aI(16)})
u($,"pS","dk",function(){return Z.aI(32)})
u($,"pT","dl",function(){return Z.aI(64)})
u($,"pU","n9",function(){return Z.aI(96)})
u($,"q_","cn",function(){return Z.aI(128)})
u($,"pQ","br",function(){return Z.aI(256)})
u($,"pu","mW",function(){return new V.fV(1e-9)})
u($,"pt","N",function(){return $.mW()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cF,DataView:H.bI,ArrayBufferView:H.bI,Float32Array:H.cG,Float64Array:H.cG,Int16Array:H.hH,Int32Array:H.hI,Int8Array:H.hJ,Uint16Array:H.hK,Uint32Array:H.hL,Uint8ClampedArray:H.dV,CanvasPixelArray:H.dV,Uint8Array:H.cH,HTMLAudioElement:W.y,HTMLBRElement:W.y,HTMLButtonElement:W.y,HTMLContentElement:W.y,HTMLDListElement:W.y,HTMLDataElement:W.y,HTMLDataListElement:W.y,HTMLDetailsElement:W.y,HTMLDialogElement:W.y,HTMLEmbedElement:W.y,HTMLFieldSetElement:W.y,HTMLHRElement:W.y,HTMLHeadElement:W.y,HTMLHeadingElement:W.y,HTMLHtmlElement:W.y,HTMLIFrameElement:W.y,HTMLLIElement:W.y,HTMLLabelElement:W.y,HTMLLegendElement:W.y,HTMLLinkElement:W.y,HTMLMapElement:W.y,HTMLMediaElement:W.y,HTMLMenuElement:W.y,HTMLMetaElement:W.y,HTMLMeterElement:W.y,HTMLModElement:W.y,HTMLOListElement:W.y,HTMLObjectElement:W.y,HTMLOptGroupElement:W.y,HTMLOptionElement:W.y,HTMLOutputElement:W.y,HTMLParagraphElement:W.y,HTMLParamElement:W.y,HTMLPictureElement:W.y,HTMLPreElement:W.y,HTMLProgressElement:W.y,HTMLQuoteElement:W.y,HTMLScriptElement:W.y,HTMLShadowElement:W.y,HTMLSlotElement:W.y,HTMLSourceElement:W.y,HTMLSpanElement:W.y,HTMLStyleElement:W.y,HTMLTableCaptionElement:W.y,HTMLTableColElement:W.y,HTMLTextAreaElement:W.y,HTMLTimeElement:W.y,HTMLTitleElement:W.y,HTMLTrackElement:W.y,HTMLUListElement:W.y,HTMLUnknownElement:W.y,HTMLVideoElement:W.y,HTMLDirectoryElement:W.y,HTMLFontElement:W.y,HTMLFrameElement:W.y,HTMLFrameSetElement:W.y,HTMLMarqueeElement:W.y,HTMLElement:W.y,AccessibleNodeList:W.fo,HTMLAnchorElement:W.dn,HTMLAreaElement:W.fp,HTMLBaseElement:W.co,Blob:W.bV,HTMLBodyElement:W.by,HTMLCanvasElement:W.bW,CanvasRenderingContext2D:W.cr,CDATASection:W.bz,CharacterData:W.bz,Comment:W.bz,ProcessingInstruction:W.bz,Text:W.bz,CSSNumericValue:W.ct,CSSUnitValue:W.ct,CSSPerspective:W.fG,CSSCharsetRule:W.X,CSSConditionRule:W.X,CSSFontFaceRule:W.X,CSSGroupingRule:W.X,CSSImportRule:W.X,CSSKeyframeRule:W.X,MozCSSKeyframeRule:W.X,WebKitCSSKeyframeRule:W.X,CSSKeyframesRule:W.X,MozCSSKeyframesRule:W.X,WebKitCSSKeyframesRule:W.X,CSSMediaRule:W.X,CSSNamespaceRule:W.X,CSSPageRule:W.X,CSSRule:W.X,CSSStyleRule:W.X,CSSSupportsRule:W.X,CSSViewportRule:W.X,CSSStyleDeclaration:W.cu,MSStyleCSSProperties:W.cu,CSS2Properties:W.cu,CSSImageValue:W.b_,CSSKeywordValue:W.b_,CSSPositionValue:W.b_,CSSResourceValue:W.b_,CSSURLImageValue:W.b_,CSSStyleValue:W.b_,CSSMatrixComponent:W.b0,CSSRotation:W.b0,CSSScale:W.b0,CSSSkew:W.b0,CSSTranslation:W.b0,CSSTransformComponent:W.b0,CSSTransformValue:W.fI,CSSUnparsedValue:W.fJ,DataTransferItemList:W.fM,HTMLDivElement:W.aE,DOMException:W.fN,ClientRectList:W.dA,DOMRectList:W.dA,DOMRectReadOnly:W.dB,DOMStringList:W.fO,DOMTokenList:W.fP,Element:W.V,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aF,FileList:W.cx,FileWriter:W.fZ,HTMLFormElement:W.h2,Gamepad:W.aN,History:W.h7,HTMLCollection:W.c0,HTMLFormControlsCollection:W.c0,HTMLOptionsCollection:W.c0,ImageData:W.bj,HTMLImageElement:W.cA,HTMLInputElement:W.cB,KeyboardEvent:W.b3,Location:W.dM,MediaList:W.hA,MessagePort:W.cE,MIDIInputMap:W.hB,MIDIOutputMap:W.hD,MimeType:W.aQ,MimeTypeArray:W.hF,PointerEvent:W.ae,MouseEvent:W.ae,DragEvent:W.ae,Document:W.C,DocumentFragment:W.C,HTMLDocument:W.C,ShadowRoot:W.C,XMLDocument:W.C,DocumentType:W.C,Node:W.C,NodeList:W.cI,RadioNodeList:W.cI,Plugin:W.aR,PluginArray:W.hV,RTCStatsReport:W.i4,HTMLSelectElement:W.i7,SourceBuffer:W.aS,SourceBufferList:W.ii,SpeechGrammar:W.aT,SpeechGrammarList:W.ij,SpeechRecognitionResult:W.aU,Storage:W.im,CSSStyleSheet:W.aG,StyleSheet:W.aG,HTMLTableCellElement:W.b8,HTMLTableDataCellElement:W.b8,HTMLTableHeaderCellElement:W.b8,HTMLTableElement:W.e6,HTMLTableRowElement:W.iu,HTMLTableSectionElement:W.iv,HTMLTemplateElement:W.cP,TextTrack:W.aV,TextTrackCue:W.aH,VTTCue:W.aH,TextTrackCueList:W.ix,TextTrackList:W.iy,TimeRanges:W.iD,Touch:W.aW,TouchEvent:W.aX,TouchList:W.iH,TrackDefaultList:W.iI,CompositionEvent:W.bO,FocusEvent:W.bO,TextEvent:W.bO,UIEvent:W.bO,URL:W.j4,VideoTrackList:W.jm,WheelEvent:W.bd,Window:W.d2,DOMWindow:W.d2,Attr:W.d3,CSSRuleList:W.jw,ClientRect:W.eq,DOMRect:W.eq,GamepadList:W.jL,NamedNodeMap:W.eI,MozNamedAttrMap:W.eI,SpeechRecognitionResultList:W.jZ,StyleSheetList:W.k2,SVGLength:P.b4,SVGLengthList:P.hg,SVGNumber:P.b6,SVGNumberList:P.hQ,SVGPointList:P.hX,SVGScriptElement:P.cK,SVGStringList:P.it,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.ba,SVGTransformList:P.iJ,AudioBuffer:P.fs,AudioParamMap:P.ft,AudioTrackList:P.fv,AudioContext:P.bU,webkitAudioContext:P.bU,BaseAudioContext:P.bU,OfflineAudioContext:P.hR,WebGLBuffer:P.dr,WebGLProgram:P.e_,WebGL2RenderingContext:P.c8,WebGLShader:P.e2,WebGLTexture:P.e8,WebGLUniformLocation:P.eg,SQLResultSetRowList:P.ik})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dT.$nativeSuperclassTag="ArrayBufferView"
H.d6.$nativeSuperclassTag="ArrayBufferView"
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.cG.$nativeSuperclassTag="ArrayBufferView"
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
H.dU.$nativeSuperclassTag="ArrayBufferView"
W.da.$nativeSuperclassTag="EventTarget"
W.db.$nativeSuperclassTag="EventTarget"
W.dc.$nativeSuperclassTag="EventTarget"
W.dd.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(L.mP,[])
else L.mP([])})})()
//# sourceMappingURL=test.dart.js.map
